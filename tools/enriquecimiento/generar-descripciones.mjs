/**
 * generar-descripciones.mjs
 * ─────────────────────────────────────────────────────────────────────────
 * FASE 1 — Generar borradores de descripciones con IA (CERO escrituras).
 *
 * Lee la colección `catalogo` de Firestore (lectura pública, igual que el
 * sitio), detecta los productos sin descripción real, genera un borrador con
 * IA y vuelca TODO a archivos locales para tu revisión:
 *   out/borradores.json   (datos, para la Fase 2)
 *   out/borradores.md     (legible, para revisar de un vistazo)
 *   out/duplicados-a-revisar.json  (descripciones repetidas/sospechosas)
 *
 * NO escribe nada en Firestore. Seguro de correr.
 *
 * Uso:
 *   node generar-descripciones.mjs            -> modo prueba (8 productos)
 *   node generar-descripciones.mjs --limit 20 -> primeros 20
 *   node generar-descripciones.mjs --all      -> todos los que faltan
 * ─────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs';
import path from 'node:path';

/* ── 0. Cargar .env (sin dependencias) ─────────────────────────────────── */
(function cargarEnv() {
  const envPath = path.join(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) return;
  for (const linea of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const m = linea.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/);
    if (m && !m[1].startsWith('#')) {
      const val = m[2].replace(/^["']|["']$/g, '');
      if (!(m[1] in process.env)) process.env[m[1]] = val;
    }
  }
})();

/* ── 1. Configuración ──────────────────────────────────────────────────── */
const PROJECT   = process.env.FIREBASE_PROJECT  || 'backend-panel-vendedores';
const API_KEY   = process.env.FIRESTORE_API_KEY || 'AIzaSyD9p16QACzSifXaTl1TojcuUKDijuE77S0';
const PROVIDER  = (process.env.LLM_PROVIDER || 'gemini').toLowerCase();
const LLM_KEY   = process.env.LLM_API_KEY;
const CONCURRENCY = Math.max(1, parseInt(process.env.CONCURRENCY || '3'));
const OUT_DIR   = path.join(process.cwd(), 'out');

const MODELOS = { gemini: 'gemini-2.0-flash', openai: 'gpt-4o-mini', anthropic: 'claude-3-5-haiku-latest', deepseek: 'deepseek-chat' };
const MODEL   = process.env.LLM_MODEL || MODELOS[PROVIDER];

function getArg(name) { const i = process.argv.indexOf(name); return i >= 0 ? process.argv[i + 1] : null; }
const LIMIT = process.argv.includes('--all')
  ? Infinity
  : (getArg('--limit') ? parseInt(getArg('--limit')) : 8);

/* ── 2. Traer el catálogo (REST público, paginado) ─────────────────────── */
async function fetchCatalogo() {
  const base = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents/catalogo?pageSize=300`;
  const docs = [];
  let token = null;
  do {
    const url = token ? `${base}&pageToken=${token}&key=${API_KEY}` : `${base}&key=${API_KEY}`;
    const r = await fetch(url);
    if (!r.ok) throw new Error(`Firestore REST ${r.status}: ${await r.text()}`);
    const data = await r.json();
    for (const d of (data.documents || [])) {
      const f = d.fields || {};
      const s = (k) => (f[k] && f[k].stringValue) || '';
      docs.push({
        sku: s('sku') || d.name.split('/').pop(),
        nombre: s('nombre'),
        categoria: s('categoria'),
        subcategoria: s('subcategoria'),
        marca: s('marca'),
        unidad: s('unidad'),
        descripcion: s('descripcion'),
      });
    }
    token = data.nextPageToken;
  } while (token);
  return docs;
}

/* ── 3. Clasificar qué necesita descripción ────────────────────────────── */
// "rendimiento" = el campo descripcion está ocupado por datos de empaque
// ("1 Caja contiene X piezas / rinde Y m²"), no por una descripción real.
function esTextoRendimiento(d) {
  return /^\s*\*/.test(d) || /caja\s+contiene|rinde\s|piezas/i.test(d);
}
function clasificar(p) {
  const d = (p.descripcion || '').trim();
  if (!d) return 'vacia';
  if (esTextoRendimiento(d)) return 'rendimiento';
  return 'tiene';
}

/* ── 4. Prompt ─────────────────────────────────────────────────────────── */
const SYSTEM = `Sos redactor de fichas de producto para Rosso Materiales, un corralón de materiales de construcción y baño en Tucumán/Salta, Argentina.
Escribís descripciones en español rioplatense neutro, claras y vendedoras pero SIN exagerar.
REGLAS ESTRICTAS:
- 2 a 4 frases. Entre 180 y 400 caracteres.
- Enfocate en: qué es (según el nombre), para qué y dónde se usa, y a qué estilo/ambiente se adapta.
- PROHIBIDO INVENTAR DATOS. NO menciones material (loza, porcelana, acero, cromado, termoplástico, etc.), forma, color ni tipo de instalación (sobreponer, bajo mesada, pedestal, columna de ducha, etc.) SALVO que el dato esté explícito en la información provista o en el nombre. Es mejor OMITIR un dato que inventarlo.
- NO inventes medidas, rendimientos, garantías ni capacidades. Las medidas que ya aparezcan en el nombre sí podés mencionarlas.
- NUNCA menciones garantía ni plazos de garantía.
- Si el nombre es AMBIGUO sobre qué es el producto (ej: "Columna", "Juego", "Kit"), NO adivines una función específica; describilo de forma general por su línea, marca y categoría.
- No empieces con "Este producto" ni repitiendo el nombre. Andá al grano.
- Texto plano, sin markdown, sin viñetas, sin emojis, sin comillas.`;

function userPrompt(p) {
  const datos = [
    `Nombre: ${p.nombre}`,
    p.categoria ? `Categoría: ${p.categoria}` : '',
    p.subcategoria ? `Subcategoría: ${p.subcategoria}` : '',
    p.marca ? `Marca: ${p.marca}` : '',
    p.unidad ? `Se vende por: ${p.unidad}` : '',
  ].filter(Boolean).join('\n');
  return `Generá la descripción para este producto:\n${datos}\n\nDevolvé SOLO el texto de la descripción.`;
}

/* ── 5. Adaptadores de proveedor (fetch, sin SDK) ──────────────────────── */
async function llamarLLM(p) {
  if (PROVIDER === 'gemini') {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${LLM_KEY}`;
    const r = await fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM }] },
        contents: [{ role: 'user', parts: [{ text: userPrompt(p) }] }],
        generationConfig: { temperature: 0.3, maxOutputTokens: 250 },
      }),
    });
    if (!r.ok) throw new Error(`Gemini ${r.status}: ${await r.text()}`);
    const d = await r.json();
    return (d.candidates?.[0]?.content?.parts?.[0]?.text || '').trim();
  }
  // OpenAI y DeepSeek comparten el mismo formato (DeepSeek es OpenAI-compatible)
  if (PROVIDER === 'openai' || PROVIDER === 'deepseek') {
    const url = PROVIDER === 'deepseek'
      ? 'https://api.deepseek.com/chat/completions'
      : 'https://api.openai.com/v1/chat/completions';
    const r = await fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${LLM_KEY}` },
      body: JSON.stringify({
        model: MODEL, temperature: 0.3, max_tokens: 250,
        messages: [{ role: 'system', content: SYSTEM }, { role: 'user', content: userPrompt(p) }],
      }),
    });
    if (!r.ok) throw new Error(`${PROVIDER} ${r.status}: ${await r.text()}`);
    const d = await r.json();
    return (d.choices?.[0]?.message?.content || '').trim();
  }
  if (PROVIDER === 'anthropic') {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': LLM_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model: MODEL, max_tokens: 250, temperature: 0.3, system: SYSTEM,
        messages: [{ role: 'user', content: userPrompt(p) }],
      }),
    });
    if (!r.ok) throw new Error(`Anthropic ${r.status}: ${await r.text()}`);
    const d = await r.json();
    return (d.content?.[0]?.text || '').trim();
  }
  throw new Error(`Proveedor desconocido: ${PROVIDER} (usá deepseek | gemini | openai | anthropic)`);
}

async function generarConReintento(p, intentos = 3) {
  for (let i = 1; i <= intentos; i++) {
    try {
      const txt = await llamarLLM(p);
      if (txt) return txt.replace(/^["']|["']$/g, '').trim();
      throw new Error('respuesta vacía');
    } catch (e) {
      if (i === intentos) throw e;
      await new Promise(res => setTimeout(res, 800 * i));
    }
  }
}

/* ── 6. Pool de concurrencia ───────────────────────────────────────────── */
async function procesarEnPool(items, fn, concurrency) {
  const resultados = new Array(items.length);
  let idx = 0;
  async function worker() {
    while (idx < items.length) {
      const i = idx++;
      resultados[i] = await fn(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker));
  return resultados;
}

/* ── 7. Main ───────────────────────────────────────────────────────────── */
async function main() {
  if (!LLM_KEY) {
    console.error('\n❌ Falta LLM_API_KEY. Copiá .env.example a .env y completá tu clave.\n');
    process.exit(1);
  }
  console.log(`\n▶ Proveedor: ${PROVIDER}  ·  modelo: ${MODEL}  ·  concurrencia: ${CONCURRENCY}`);
  console.log('▶ Trayendo catálogo (lectura pública)…');
  const todos = await fetchCatalogo();

  const necesitan = todos.filter(p => clasificar(p) !== 'tiene');
  const aProcesar = necesitan.slice(0, LIMIT);

  console.log(`▶ Total productos: ${todos.length}`);
  console.log(`▶ Sin descripción real: ${necesitan.length}  (vacías + datos de empaque)`);
  console.log(`▶ Se van a generar ahora: ${aProcesar.length}${LIMIT !== Infinity ? `  (modo prueba — usá --all para todos)` : ''}\n`);

  let hechos = 0;
  const borradores = await procesarEnPool(aProcesar, async (p) => {
    const motivo = clasificar(p);
    try {
      const desc = await generarConReintento(p);
      process.stdout.write(`  ✓ ${(++hechos).toString().padStart(3)}/${aProcesar.length}  ${p.nombre}\n`);
      return {
        sku: p.sku, nombre: p.nombre, categoria: p.categoria,
        subcategoria: p.subcategoria, marca: p.marca,
        motivo,
        descripcionActual: p.descripcion,
        rendimientoDetectado: motivo === 'rendimiento' ? p.descripcion.trim() : '',
        descripcionBorrador: desc,
      };
    } catch (e) {
      process.stdout.write(`  ✗ ${(++hechos).toString().padStart(3)}/${aProcesar.length}  ${p.nombre}  → ${e.message}\n`);
      return { sku: p.sku, nombre: p.nombre, error: String(e.message) };
    }
  }, CONCURRENCY);

  // Duplicados sospechosos entre los que SÍ tienen descripción "real"
  const conDesc = todos.filter(p => clasificar(p) === 'tiene');
  const porTexto = new Map();
  for (const p of conDesc) {
    const k = p.descripcion.trim();
    if (!porTexto.has(k)) porTexto.set(k, []);
    porTexto.get(k).push({ sku: p.sku, nombre: p.nombre, categoria: p.categoria });
  }
  const duplicados = [...porTexto.entries()]
    .filter(([, arr]) => arr.length > 1)
    .map(([texto, arr]) => ({ texto, productos: arr }))
    .sort((a, b) => b.productos.length - a.productos.length);

  /* ── Escribir salidas ── */
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const okBorradores = borradores.filter(b => b && !b.error);
  const fallidos = borradores.filter(b => b && b.error);

  fs.writeFileSync(path.join(OUT_DIR, 'borradores.json'), JSON.stringify(okBorradores, null, 2), 'utf8');
  fs.writeFileSync(path.join(OUT_DIR, 'duplicados-a-revisar.json'), JSON.stringify(duplicados, null, 2), 'utf8');

  const md = [
    `# Borradores de descripciones — generados con ${PROVIDER}/${MODEL}`,
    `_Generados: ${new Date().toLocaleString('es-AR')}  ·  ${okBorradores.length} productos_`,
    '',
    ...okBorradores.map(b => [
      `## ${b.nombre}`,
      `**SKU:** ${b.sku}  ·  **Categoría:** ${b.categoria}${b.marca ? `  ·  **Marca:** ${b.marca}` : ''}  ·  _(${b.motivo})_`,
      b.rendimientoDetectado ? `> ⚠️ Tenía datos de empaque en "descripcion": ${b.rendimientoDetectado.replace(/\n/g, ' ')}` : '',
      '',
      b.descripcionBorrador,
      '',
    ].filter(Boolean).join('\n')),
  ].join('\n');
  fs.writeFileSync(path.join(OUT_DIR, 'borradores.md'), md, 'utf8');

  console.log('\n─────────────────────────────────────────────');
  console.log(`✅ Generados: ${okBorradores.length}   ❌ Fallidos: ${fallidos.length}`);
  console.log(`📄 Revisá:  out/borradores.md  (legible)`);
  console.log(`📦 Datos:   out/borradores.json`);
  console.log(`🔁 Duplicados a revisar: ${duplicados.length}  → out/duplicados-a-revisar.json`);
  console.log('─────────────────────────────────────────────');
  console.log('Nada se escribió en Firestore. Revisá los borradores y avisás para la Fase 2.\n');
}

main().catch(e => { console.error('\n💥 Error:', e.message, '\n'); process.exit(1); });
