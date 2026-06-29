/**
 * enriquecer-scrape.mjs
 * ─────────────────────────────────────────────────────────────────────────
 * FASE 1 (scraping) — Genera descripciones REALES buscando cada producto en
 * la web por su nombre + marca (vía Tavily) y reescribiéndolas en tono Rosso
 * con DeepSeek. CERO escrituras en Firestore.
 *
 * Pipeline por producto:
 *   1. Tavily: busca el producto en la web → devuelve resultados con contenido.
 *   2. DeepSeek: verifica que sea el producto correcto y redacta una
 *      descripción usando SOLO los datos encontrados (no inventa). Si el
 *      nombre está mal cargado, propone uno limpio.
 *   3. Si no hay match confiable → cae al generador (prompt seguro, sin web).
 *
 * Salidas:
 *   out/scrape-borradores.json   (datos, para la Fase 2)
 *   out/scrape-borradores.md     (legible, para revisar)
 *
 * Uso:
 *   node enriquecer-scrape.mjs            -> prueba (6 productos)
 *   node enriquecer-scrape.mjs --limit 20
 *   node enriquecer-scrape.mjs --all
 * ─────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs';
import path from 'node:path';

/* ── 0. Cargar .env ────────────────────────────────────────────────────── */
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

/* ── 1. Config ─────────────────────────────────────────────────────────── */
const PROJECT     = process.env.FIREBASE_PROJECT  || 'backend-panel-vendedores';
const API_KEY     = process.env.FIRESTORE_API_KEY || 'AIzaSyD9p16QACzSifXaTl1TojcuUKDijuE77S0';
const LLM_KEY     = process.env.LLM_API_KEY;
const TAVILY_KEY  = process.env.TAVILY_API_KEY;
const MODEL       = process.env.LLM_MODEL || 'deepseek-chat';
const DEEPSEEK_URL = 'https://api.deepseek.com/chat/completions';
const SEARCH_DEPTH = process.env.TAVILY_DEPTH || 'basic'; // basic = 1 crédito, advanced = 2
const CONCURRENCY = Math.max(1, parseInt(process.env.CONCURRENCY || '2'));
const OUT_DIR     = path.join(process.cwd(), 'out');

function getArg(name) { const i = process.argv.indexOf(name); return i >= 0 ? process.argv[i + 1] : null; }
const LIMIT = process.argv.includes('--all') ? Infinity : (getArg('--limit') ? parseInt(getArg('--limit')) : 6);

/* ── 2. Traer catálogo (REST público) ──────────────────────────────────── */
async function fetchCatalogo() {
  const base = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents/catalogo?pageSize=300`;
  const docs = []; let token = null;
  do {
    const url = token ? `${base}&pageToken=${token}&key=${API_KEY}` : `${base}&key=${API_KEY}`;
    const r = await fetch(url);
    if (!r.ok) throw new Error(`Firestore REST ${r.status}: ${await r.text()}`);
    const data = await r.json();
    for (const d of (data.documents || [])) {
      const f = d.fields || {}; const s = (k) => (f[k] && f[k].stringValue) || '';
      docs.push({
        sku: s('sku') || d.name.split('/').pop(),
        nombre: s('nombre'), categoria: s('categoria'),
        subcategoria: s('subcategoria'), marca: s('marca'),
        unidad: s('unidad'), descripcion: s('descripcion'),
      });
    }
    token = data.nextPageToken;
  } while (token);
  return docs;
}

function esTextoRendimiento(d) { return /^\s*\*/.test(d) || /caja\s+contiene|rinde\s|piezas/i.test(d); }
function clasificar(p) {
  const d = (p.descripcion || '').trim();
  if (!d) return 'vacia';
  if (esTextoRendimiento(d)) return 'rendimiento';
  return 'tiene';
}

/* ── 3. Tavily (con reintento ante 429 rate-limit) ─────────────────────── */
const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function tavilySearch(query, intentos = 5) {
  for (let i = 1; i <= intentos; i++) {
    const r = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TAVILY_KEY}` },
      body: JSON.stringify({
        api_key: TAVILY_KEY,           // compatibilidad con API vieja
        query,
        search_depth: SEARCH_DEPTH,
        max_results: 6,
        include_answer: true,
        include_raw_content: false,
      }),
    });
    if (r.status === 429) {            // rate-limit → esperar y reintentar
      if (i === intentos) throw new Error('Tavily 429 (rate limit) tras varios reintentos');
      await sleep(6000 * i);           // 6s, 12s, 18s, 24s
      continue;
    }
    if (!r.ok) throw new Error(`Tavily ${r.status}: ${await r.text()}`);
    return r.json(); // { answer, results: [{title, url, content, score}] }
  }
}

/* ── 4. DeepSeek: extraer descripción desde los resultados ─────────────── */
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

async function extraerDeResultados(p, tavily) {
  const resultados = (tavily.results || []).slice(0, 6)
    .map((r, i) => `(${i + 1}) ${r.title}\n${(r.content || '').slice(0, 600)}\nURL: ${r.url}`).join('\n\n');
  const answer = tavily.answer ? `Resumen: ${tavily.answer}\n\n` : '';
  const userMsg = `PRODUCTO:\nNombre: ${p.nombre}\nCategoría: ${p.categoria}\nMarca: ${p.marca || '(sin marca)'}\n\n${answer}RESULTADOS WEB:\n${resultados || '(sin resultados)'}`;
  const r = await fetch(DEEPSEEK_URL, {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${LLM_KEY}` },
    body: JSON.stringify({
      model: MODEL, temperature: 0.2, max_tokens: 450,
      response_format: { type: 'json_object' },
      messages: [{ role: 'system', content: EXTRACT_SYSTEM }, { role: 'user', content: userMsg }],
    }),
  });
  if (!r.ok) throw new Error(`deepseek ${r.status}: ${await r.text()}`);
  const d = await r.json();
  return JSON.parse(d.choices?.[0]?.message?.content || '{}');
}

/* ── 5. Fallback: generar sin web (prompt seguro) ──────────────────────── */
const GEN_SYSTEM = `Sos redactor de fichas de producto para Rosso Materiales (corralón de construcción y baño, Tucumán/Salta, Argentina).
Escribís en español rioplatense neutro, claro y vendedor sin exagerar.
REGLAS: 2-4 frases (180-400 caracteres). Enfocate en qué es, para qué/dónde se usa y a qué estilo/ambiente se adapta.
PROHIBIDO inventar material, forma, color, instalación, medidas, rendimientos o garantías que no estén en los datos o el nombre. Es mejor omitir un dato que inventarlo. NUNCA menciones garantía ni plazos de garantía, ni uses las palabras «garantía»/«garantiza»/«garantizada».
Si el nombre es ambiguo, describí de forma general por línea/marca/categoría. Texto plano, sin markdown ni comillas.`;

async function generarFallback(p) {
  const datos = [`Nombre: ${p.nombre}`, p.categoria && `Categoría: ${p.categoria}`, p.marca && `Marca: ${p.marca}`].filter(Boolean).join('\n');
  const r = await fetch(DEEPSEEK_URL, {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${LLM_KEY}` },
    body: JSON.stringify({
      model: MODEL, temperature: 0.3, max_tokens: 250,
      messages: [{ role: 'system', content: GEN_SYSTEM }, { role: 'user', content: `Generá la descripción:\n${datos}\n\nDevolvé SOLO el texto.` }],
    }),
  });
  if (!r.ok) throw new Error(`deepseek ${r.status}: ${await r.text()}`);
  const d = await r.json();
  return (d.choices?.[0]?.message?.content || '').trim().replace(/^["']|["']$/g, '');
}

/* ── 6. Procesar un producto ───────────────────────────────────────────── */
async function procesarProducto(p) {
  const motivo = clasificar(p);
  const query = `${p.nombre} ${p.marca || ''} características medidas`.trim();
  try {
    const tavily = await tavilySearch(query);
    const ext = await extraerDeResultados(p, tavily);
    if ((ext.match === 'alta' || ext.match === 'media') && ext.descripcion) {
      return {
        sku: p.sku, nombre: p.nombre, nombre_sugerido: ext.nombre_sugerido && ext.nombre_sugerido !== p.nombre ? ext.nombre_sugerido : '',
        categoria: p.categoria, marca: p.marca, motivo,
        origen: 'scrape', match: ext.match,
        rendimientoDetectado: motivo === 'rendimiento' ? p.descripcion.trim() : '',
        descripcion: ext.descripcion, fuente: ext.fuente || (tavily.results?.[0]?.url || ''),
      };
    }
    // Sin match confiable → generar sin web
    const desc = await generarFallback(p);
    return {
      sku: p.sku, nombre: p.nombre, nombre_sugerido: '', categoria: p.categoria, marca: p.marca, motivo,
      origen: 'generado-fallback', match: ext.match || 'no',
      rendimientoDetectado: motivo === 'rendimiento' ? p.descripcion.trim() : '',
      descripcion: desc, fuente: '',
    };
  } catch (e) {
    return { sku: p.sku, nombre: p.nombre, error: String(e.message) };
  }
}

/* ── 7. Pool ───────────────────────────────────────────────────────────── */
async function pool(items, fn, n) {
  const res = new Array(items.length); let idx = 0;
  async function worker() { while (idx < items.length) { const i = idx++; res[i] = await fn(items[i], i); } }
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, worker));
  return res;
}

/* ── 8. Main ───────────────────────────────────────────────────────────── */
async function main() {
  if (!LLM_KEY)    { console.error('\n❌ Falta LLM_API_KEY en .env\n'); process.exit(1); }
  if (!TAVILY_KEY) { console.error('\n❌ Falta TAVILY_API_KEY en .env\n'); process.exit(1); }

  console.log(`\n▶ Scraping con Tavily (${SEARCH_DEPTH}) + DeepSeek (${MODEL})  ·  concurrencia: ${CONCURRENCY}`);
  console.log('▶ Trayendo catálogo…');
  const todos = await fetchCatalogo();
  const necesitan = todos.filter(p => clasificar(p) !== 'tiene');

  // Reanudar: saltear los que ya están guardados en scrape-borradores.json
  const outPath = path.join(OUT_DIR, 'scrape-borradores.json');
  let previos = [];
  if (fs.existsSync(outPath)) { try { previos = JSON.parse(fs.readFileSync(outPath, 'utf8')); } catch {} }
  const yaHechos = new Set(previos.map(x => x.sku));
  const pendientes = necesitan.filter(p => !yaHechos.has(p.sku));
  const aProcesar = pendientes.slice(0, LIMIT);
  console.log(`▶ Total: ${todos.length}  ·  necesitan: ${necesitan.length}  ·  ya hechos: ${previos.length}  ·  pendientes: ${pendientes.length}  ·  a procesar ahora: ${aProcesar.length}\n`);

  let n = 0;
  const out = await pool(aProcesar, async (p) => {
    const r = await procesarProducto(p);
    n++;
    if (r.error)      process.stdout.write(`  ✗ ${n}/${aProcesar.length}  ${p.nombre} → ${r.error}\n`);
    else if (r.origen === 'scrape') process.stdout.write(`  ✓ ${n}/${aProcesar.length}  [web:${r.match}] ${p.nombre}\n`);
    else              process.stdout.write(`  ~ ${n}/${aProcesar.length}  [generado] ${p.nombre}\n`);
    return r;
  }, CONCURRENCY);

  const okNuevos = out.filter(x => x && !x.error);
  const fallidos = out.filter(x => x && x.error);

  // Merge con lo previo (reanudación), dedup por sku
  const porSku = new Map();
  for (const x of [...previos, ...okNuevos]) porSku.set(x.sku, x);
  const ok = [...porSku.values()];
  const scrape = ok.filter(x => x.origen === 'scrape');
  const generados = ok.filter(x => x.origen === 'generado-fallback');

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'scrape-borradores.json'), JSON.stringify(ok, null, 2), 'utf8');

  const md = [
    `# Borradores con scraping — Tavily + ${MODEL}`,
    `_${new Date().toLocaleString('es-AR')}  ·  ${ok.length} productos  ·  ${scrape.length} con datos web, ${generados.length} generados_`,
    '',
    ...ok.map(b => [
      `## ${b.nombre}`,
      `**SKU:** ${b.sku}  ·  **${b.categoria}**  ·  origen: ${b.origen === 'scrape' ? `🌐 web (match ${b.match})` : '🤖 generado'}`,
      b.nombre_sugerido ? `> ✏️ Nombre sugerido: **${b.nombre_sugerido}**` : '',
      b.rendimientoDetectado ? `> ⚠️ Tenía empaque en descripcion: ${b.rendimientoDetectado.replace(/\n/g, ' ')}` : '',
      '',
      b.descripcion,
      b.fuente ? `\n_Fuente: ${b.fuente}_` : '',
      '',
    ].filter(Boolean).join('\n')),
  ].join('\n');
  fs.writeFileSync(path.join(OUT_DIR, 'scrape-borradores.md'), md, 'utf8');

  console.log('\n─────────────────────────────────────────────');
  console.log(`✅ Acumulado OK: ${ok.length}/${necesitan.length}   (🌐 web: ${scrape.length}  ·  🤖 generado: ${generados.length})   ❌ fallidos este run: ${fallidos.length}`);
  console.log(`📄 Revisá: out/scrape-borradores.md`);
  console.log('─────────────────────────────────────────────');
  console.log('Nada se escribió en Firestore.\n');
}

main().catch(e => { console.error('\n💥 Error:', e.message, '\n'); process.exit(1); });
