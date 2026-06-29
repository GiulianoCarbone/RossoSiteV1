/**
 * Cloud Function: sugerir
 * ─────────────────────────────────────────────────────────────────────────
 * Sugiere NOMBRE y DESCRIPCIÓN para un producto del catálogo Rosso:
 *   1. Busca el producto en la web por nombre + marca (Tavily).
 *   2. DeepSeek verifica el match y redacta la descripción usando SOLO datos
 *      hallados (no inventa, no menciona garantía).
 *   3. Si no hay match confiable → genera sin web (prompt seguro).
 *
 * Seguridad:
 *   • Las API keys viven como SECRETS de Firebase (no en el código ni el repo).
 *   • Solo responde al admin autenticado (se verifica el ID token de Firebase).
 * ─────────────────────────────────────────────────────────────────────────
 */
const { onRequest } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const admin = require('firebase-admin');

admin.initializeApp();

const DEEPSEEK_API_KEY = defineSecret('DEEPSEEK_API_KEY');
const TAVILY_API_KEY = defineSecret('TAVILY_API_KEY');

const ADMIN_EMAILS = ['rossomateriales@gmail.com'];
const DEEPSEEK_URL = 'https://api.deepseek.com/chat/completions';
const MODEL = 'deepseek-chat';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ── Tavily (con reintento ante 429) ───────────────────────────────────── */
async function tavilySearch(query, key, intentos = 4) {
  for (let i = 1; i <= intentos; i++) {
    const r = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        api_key: key, query, search_depth: 'basic',
        max_results: 6, include_answer: true, include_raw_content: false,
      }),
    });
    if (r.status === 429) {
      if (i === intentos) throw new Error('Tavily 429 (rate limit)');
      await sleep(4000 * i);
      continue;
    }
    if (!r.ok) throw new Error(`Tavily ${r.status}: ${await r.text()}`);
    return r.json();
  }
}

/* ── Prompts ───────────────────────────────────────────────────────────── */
const EXTRACT_SYSTEM = `Sos un asistente que arma fichas de producto para Rosso Materiales (corralón de construcción y baño en Tucumán/Salta, Argentina) a partir de resultados de búsqueda web.
Te paso un PRODUCTO (nombre, categoría, marca) y RESULTADOS WEB (título, contenido, url).
Tareas:
1. Decidí si los resultados corresponden CLARAMENTE a ese producto (misma marca/modelo/medidas).
2. Si corresponden, escribí una descripción en español rioplatense neutro, 2 a 4 frases (180-400 caracteres), clara y vendedora SIN exagerar, usando SOLO datos que aparezcan en los resultados (material, medidas, usos, etc.). PROHIBIDO inventar datos que no estén en los resultados. NUNCA menciones garantía ni plazos de garantía, ni uses las palabras «garantía», «garantiza» o «garantizada», aunque aparezcan en los resultados.
3. Si el nombre del producto está desordenado o mal escrito, proponé un nombre limpio y correcto.
Devolvé EXCLUSIVAMENTE un JSON:
{"match":"alta|media|baja|no","descripcion":"...","nombre_sugerido":"...","fuente":"url principal usada"}
- match: alta=seguro, media=probable, baja=dudoso, no=no hay datos del producto.
- Si match es "baja" o "no", dejá "descripcion" en "" y "fuente" en "".`;

const GEN_SYSTEM = `Sos redactor de fichas de producto para Rosso Materiales (corralón de construcción y baño, Tucumán/Salta, Argentina).
Escribís en español rioplatense neutro, claro y vendedor sin exagerar.
REGLAS: 2-4 frases (180-400 caracteres). Enfocate en qué es, para qué/dónde se usa y a qué estilo/ambiente se adapta.
PROHIBIDO inventar material, forma, color, instalación, medidas, rendimientos o garantías que no estén en los datos o el nombre. Es mejor omitir un dato que inventarlo. NUNCA menciones garantía ni plazos de garantía, ni uses las palabras «garantía»/«garantiza»/«garantizada».
Si el nombre es ambiguo, describí de forma general por línea/marca/categoría. Texto plano, sin markdown ni comillas.`;

async function deepseekChat(messages, key, jsonMode = false, maxTokens = 450) {
  const r = await fetch(DEEPSEEK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: MODEL, temperature: 0.2, max_tokens: maxTokens,
      ...(jsonMode ? { response_format: { type: 'json_object' } } : {}),
      messages,
    }),
  });
  if (!r.ok) throw new Error(`DeepSeek ${r.status}: ${await r.text()}`);
  const d = await r.json();
  return d.choices?.[0]?.message?.content || '';
}

async function extraer(p, tavily, key) {
  const resultados = (tavily.results || []).slice(0, 6)
    .map((r, i) => `(${i + 1}) ${r.title}\n${(r.content || '').slice(0, 600)}\nURL: ${r.url}`).join('\n\n');
  const answer = tavily.answer ? `Resumen: ${tavily.answer}\n\n` : '';
  const userMsg = `PRODUCTO:\nNombre: ${p.nombre}\nCategoría: ${p.categoria}\nMarca: ${p.marca || '(sin marca)'}\n\n${answer}RESULTADOS WEB:\n${resultados || '(sin resultados)'}`;
  const txt = await deepseekChat(
    [{ role: 'system', content: EXTRACT_SYSTEM }, { role: 'user', content: userMsg }], key, true);
  return JSON.parse(txt || '{}');
}

async function generar(p, key) {
  const datos = [`Nombre: ${p.nombre}`, p.categoria && `Categoría: ${p.categoria}`, p.marca && `Marca: ${p.marca}`].filter(Boolean).join('\n');
  const txt = await deepseekChat(
    [{ role: 'system', content: GEN_SYSTEM }, { role: 'user', content: `Generá la descripción:\n${datos}\n\nDevolvé SOLO el texto.` }], key, false, 250);
  return txt.trim().replace(/^["']|["']$/g, '');
}

/* ── Endpoint ──────────────────────────────────────────────────────────── */
exports.sugerir = onRequest(
  { secrets: [DEEPSEEK_API_KEY, TAVILY_API_KEY], cors: true, region: 'us-central1' },
  async (req, res) => {
    try {
      if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

      // Verificar que sea el admin autenticado
      const authz = req.headers.authorization || '';
      const token = authz.startsWith('Bearer ') ? authz.slice(7) : '';
      if (!token) return res.status(401).json({ error: 'Falta autenticación' });
      let decoded;
      try { decoded = await admin.auth().verifyIdToken(token); }
      catch (e) { return res.status(401).json({ error: 'Token inválido' }); }
      if (!ADMIN_EMAILS.includes(decoded.email)) return res.status(403).json({ error: 'Solo el admin puede usar esta función' });

      const { nombre, categoria, marca } = req.body || {};
      if (!nombre || !String(nombre).trim()) return res.status(400).json({ error: 'Falta el nombre del producto' });

      const p = { nombre: String(nombre).trim(), categoria: categoria || '', marca: marca || '' };
      const dkey = DEEPSEEK_API_KEY.value();
      const tkey = TAVILY_API_KEY.value();

      const tavily = await tavilySearch(`${p.nombre} ${p.marca} características medidas`.trim(), tkey);
      const ext = await extraer(p, tavily, dkey);

      if ((ext.match === 'alta' || ext.match === 'media') && ext.descripcion) {
        return res.json({
          ok: true, origen: 'web', match: ext.match,
          descripcion: ext.descripcion,
          nombre_sugerido: ext.nombre_sugerido && ext.nombre_sugerido !== p.nombre ? ext.nombre_sugerido : '',
          fuente: ext.fuente || (tavily.results?.[0]?.url || ''),
        });
      }
      const desc = await generar(p, dkey);
      return res.json({ ok: true, origen: 'generado', match: ext.match || 'no', descripcion: desc, nombre_sugerido: '', fuente: '' });
    } catch (e) {
      console.error('sugerir error:', e);
      return res.status(500).json({ error: 'Error interno: ' + (e.message || String(e)) });
    }
  }
);

/* ═════════════════════════════════════════════════════════════════════════
   CHATBOT DEL CATÁLOGO (`chat`)
   Recomienda SOLO productos reales del catálogo (por SKU; no inventa).
   Público → rate-limit por IP + techo global diario en Firestore (anti-abuso
   de costo). Solo usa DeepSeek (no Tavily).
   ═════════════════════════════════════════════════════════════════════════ */

// Cache del catálogo en memoria de la instancia (se refresca cada 10 min)
let catalogCache = { data: null, ts: 0 };
const CACHE_TTL_MS = 10 * 60 * 1000;

async function getCatalogo() {
  if (catalogCache.data && Date.now() - catalogCache.ts < CACHE_TTL_MS) return catalogCache.data;
  const snap = await admin.firestore().collection('catalogo').get();
  const data = snap.docs.map((d) => {
    const x = d.data();
    return {
      sku: x.sku || d.id,
      nombre: x.nombre || '',
      categoria: x.categoria || '',
      subcategoria: x.subcategoria || '',
      marca: x.marca || '',
      descripcion: x.descripcion || '',
      disponible: x.disponible !== false,
      imagen: Array.isArray(x.imagenes) && x.imagenes.length ? x.imagenes[0] : '',
    };
  }).filter((p) => p.disponible);
  catalogCache = { data, ts: Date.now() };
  return data;
}

const norm = (s) => (s || '').toLowerCase().normalize('NFD').replace(new RegExp('[\\u0300-\\u036f]', 'g'), '');

function filtrarRelevantes(catalogo, mensaje, max = 25) {
  const palabras = norm(mensaje).split(/[^a-z0-9]+/).filter((w) => w.length >= 4);
  if (!palabras.length) return catalogo.slice(0, max);
  const scored = catalogo.map((p) => {
    const texto = norm(`${p.nombre} ${p.categoria} ${p.subcategoria} ${p.marca} ${p.descripcion}`);
    let score = 0;
    for (const w of palabras) if (texto.includes(w)) score++;
    return { p, score };
  }).filter((x) => x.score > 0).sort((a, b) => b.score - a.score);
  return scored.slice(0, max).map((x) => x.p);
}

const CHAT_SYSTEM = `Sos el asistente de ventas del catálogo online de Rosso Materiales (corralón de construcción y baño en Tucumán y Salta, Argentina). Hablás en español rioplatense, cordial y breve.
REGLAS:
- Recomendás ÚNICAMENTE productos de la lista PRODUCTOS que te paso. En el JSON los identificás por su "sku", pero en el TEXTO de "respuesta" NUNCA escribas el sku ni ningún código: nombrá los productos SOLO por su nombre (las fichas con imagen se muestran aparte). NUNCA inventes productos, SKUs, precios ni stock.
- Si ninguno encaja, decilo con amabilidad y ofrecé las CATEGORÍAS disponibles o pedí un dato más (ambiente, medida, uso). No inventes.
- Respuestas cortas (2-4 frases). Orientás al cliente hacia el producto adecuado.
- Para precio, stock, compra o envío, derivá amablemente a WhatsApp o a la sucursal (esos datos no los tenés vos).
- No hablás de garantía. No respondés temas ajenos al catálogo de materiales; si preguntan otra cosa, redirigí con amabilidad.
Devolvé EXCLUSIVAMENTE un JSON:
{"respuesta":"texto para el cliente","skus":["sku1","sku2"]}
- "skus": hasta 4, SOLO de la lista provista, ordenados por relevancia. Si no hay match, [].`;

function buildChatUser(mensaje, productos, categorias, history) {
  const lista = productos.map((p) =>
    `- sku ${p.sku} | ${p.nombre} (${p.categoria}${p.marca ? '/' + p.marca : ''}) — ${(p.descripcion || '').slice(0, 160)}`).join('\n');
  const hist = (history || []).slice(-4).map((h) =>
    `${h.role === 'user' ? 'Cliente' : 'Asistente'}: ${String(h.content || '').slice(0, 200)}`).join('\n');
  return `${hist ? 'CONVERSACIÓN PREVIA:\n' + hist + '\n\n' : ''}MENSAJE DEL CLIENTE:\n${mensaje}\n\nCATEGORÍAS DISPONIBLES: ${categorias.join(', ')}\n\nPRODUCTOS (elegí de acá por sku):\n${lista || '(ninguno relevante encontrado)'}`;
}

// Red de seguridad: borra cualquier sku/código que el modelo haya metido en el
// texto visible (las fichas con imagen ya muestran el producto; el sku es ruido).
function limpiarSkus(texto) {
  return String(texto || '')
    .replace(/\s*[([]\s*(?:sku|cod(?:igo)?|ref)[:\s.]*\d+\s*[)\]]/gi, '') // "(sku 123)" / "[cod: 123]"
    .replace(/\b(?:sku|cod(?:igo)?|ref)[:\s.#]*\d+\b/gi, '')              // "sku 123" suelto
    .replace(/\s+([,.;:!?])/g, '$1')                                      // espacio antes de puntuación
    .replace(/\s{2,}/g, ' ')                                              // espacios dobles
    .trim();
}

// Rate-limit por IP en Firestore: 10/min y 120/día
async function checkRateLimit(ip) {
  const ipKey = String(ip).replace(/[^a-zA-Z0-9]/g, '_').slice(0, 60) || 'desconocido';
  const ref = admin.firestore().collection('chatlimits').doc(ipKey);
  const now = Date.now();
  return admin.firestore().runTransaction(async (tx) => {
    const doc = await tx.get(ref);
    const d = doc.exists ? doc.data() : {};
    let { minStart = 0, minCount = 0, dayStart = 0, dayCount = 0 } = d;
    if (now - minStart > 60000) { minStart = now; minCount = 0; }
    if (now - dayStart > 86400000) { dayStart = now; dayCount = 0; }
    minCount++; dayCount++;
    tx.set(ref, { minStart, minCount, dayStart, dayCount }, { merge: true });
    if (minCount > 10) return { ok: false, msg: 'Estás enviando mensajes muy rápido. Esperá un momento, por favor.' };
    if (dayCount > 120) return { ok: false, msg: 'Llegaste al límite de mensajes por hoy. Si necesitás seguir, escribinos por WhatsApp.' };
    return { ok: true };
  });
}

// Techo global diario: tope de consultas/día en TODO el sitio (corta el gasto
// de DeepSeek ante abuso distribuido / IPs rotativas que evaden el límite por IP).
const GLOBAL_DAILY_CAP = 2000;
async function checkGlobalLimit() {
  const ref = admin.firestore().collection('chatlimits').doc('_global_diario');
  const now = Date.now();
  return admin.firestore().runTransaction(async (tx) => {
    const doc = await tx.get(ref);
    const d = doc.exists ? doc.data() : {};
    let { dayStart = 0, dayCount = 0 } = d;
    if (now - dayStart > 86400000) { dayStart = now; dayCount = 0; }
    dayCount++;
    tx.set(ref, { dayStart, dayCount }, { merge: true });
    return { ok: dayCount <= GLOBAL_DAILY_CAP };
  });
}

exports.chat = onRequest(
  { secrets: [DEEPSEEK_API_KEY], cors: true, region: 'us-central1' },
  async (req, res) => {
    try {
      if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

      const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.ip || 'desconocido';
      const gate = await checkRateLimit(ip);
      if (!gate.ok) return res.status(429).json({ error: gate.msg });

      const mensaje = String((req.body && req.body.mensaje) || '').trim();
      const history = Array.isArray(req.body && req.body.history) ? req.body.history : [];
      if (!mensaje) return res.status(400).json({ error: 'Escribí una consulta.' });
      if (mensaje.length > 300) return res.status(400).json({ error: 'El mensaje es demasiado largo.' });

      // Techo global diario: si se superó, respondemos amable y NO gastamos en DeepSeek.
      const global = await checkGlobalLimit();
      if (!global.ok) {
        return res.json({
          ok: true,
          respuesta: 'Estoy recibiendo muchísimas consultas en este momento 🙏. Por favor escribinos por WhatsApp y te ayudamos al toque.',
          productos: [],
        });
      }

      const catalogo = await getCatalogo();
      const categorias = [...new Set(catalogo.map((p) => p.categoria).filter(Boolean))];
      const relevantes = filtrarRelevantes(catalogo, mensaje, 25);

      const txt = await deepseekChat(
        [{ role: 'system', content: CHAT_SYSTEM }, { role: 'user', content: buildChatUser(mensaje, relevantes, categorias, history) }],
        DEEPSEEK_API_KEY.value(), true, 500);

      let parsed;
      try { parsed = JSON.parse(txt || '{}'); }
      catch { parsed = { respuesta: txt || 'Disculpá, no te entendí bien. ¿Podés darme un poco más de detalle?', skus: [] }; }

      const porSku = new Map(catalogo.map((p) => [String(p.sku), p]));
      const productos = (parsed.skus || [])
        .map((s) => porSku.get(String(s))).filter(Boolean).slice(0, 4)
        .map((p) => ({ sku: p.sku, nombre: p.nombre, categoria: p.categoria, descripcion: p.descripcion, imagen: p.imagen }));

      return res.json({ ok: true, respuesta: limpiarSkus(parsed.respuesta), productos });
    } catch (e) {
      console.error('chat error:', e);
      return res.status(500).json({ error: 'Error interno' });
    }
  }
);
