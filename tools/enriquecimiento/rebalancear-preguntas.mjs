/**
 * rebalancear-preguntas.mjs
 * ─────────────────────────────────────────────────────────────────────────
 * Rebalancea las OPCIONES de las preguntas de la Academia (js/quiz-data.js)
 * para que NO se pueda adivinar la correcta por ser "la más larga / la que
 * da más información" (tell clásico de tests hechos con IA).
 *
 * Por cada pregunta le pide a la IA:
 *   - Mantener CUÁL es la correcta y su significado (NO cambia el hecho).
 *   - Hacer la correcta CONCISA (el detalle va a "explica").
 *   - Reescribir los 3 distractores: plausibles, del rubro, incorrectos,
 *     y de LARGO SIMILAR a la correcta.
 *   - Grounding con el texto del manual (functions/manual-conocimiento.js)
 *     para no inventar datos técnicos.
 *
 * NO toca js/quiz-data.js. Vuelca TODO a archivos locales para tu revisión:
 *   out/rebalanceo-review.md          (legible: antes/después + QA)
 *   out/rebalanceo.json               (datos)
 *   out/quiz-data.rebalanceado.js     (candidato completo, SOLO con --emit)
 *
 * Uso:
 *   node rebalancear-preguntas.mjs                    -> prueba (8 preguntas)
 *   node rebalancear-preguntas.mjs --modulo viguetas  -> un módulo entero
 *   node rebalancear-preguntas.mjs --limit 30         -> primeras 30 preguntas
 *   node rebalancear-preguntas.mjs --all --emit       -> todas + archivo candidato
 *   node rebalancear-preguntas.mjs --all --emit --saltear cal-hidratada,cemento
 *                                                     -> todas menos las curadas a mano (flujo híbrido)
 *
 * Aplicar (después de revisar): reemplazá js/quiz-data.js por
 *   out/quiz-data.rebalanceado.js  (hacé un backup antes).
 * ─────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/* ── 0. Cargar .env (sin dependencias, igual que generar-descripciones) ──── */
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
const PROVIDER    = (process.env.LLM_PROVIDER || 'deepseek').toLowerCase();
const LLM_KEY     = process.env.LLM_API_KEY;
const CONCURRENCY = Math.max(1, parseInt(process.env.CONCURRENCY || '3'));
const OUT_DIR     = path.join(process.cwd(), 'out');
const ROOT        = path.resolve(process.cwd(), '..', '..');           // raíz del repo
const QUIZ_PATH   = path.join(ROOT, 'js', 'quiz-data.js');
const MANUAL_PATH = path.join(ROOT, 'functions', 'manual-conocimiento.js');

const MODELOS = { gemini: 'gemini-2.0-flash', openai: 'gpt-4o-mini', anthropic: 'claude-3-5-haiku-latest', deepseek: 'deepseek-chat' };
const MODEL   = process.env.LLM_MODEL || MODELOS[PROVIDER];

// Productos nuevos que NO están en el manual (el matcher los confundiría con
// otra sección parecida). Para ellos no usamos chunk del manual: alcanza con
// el nombre + descripción + la respuesta correcta de la propia pregunta.
const SIN_MANUAL = new Set(['placas_uv', 'revestimiento_wpc']);

function getArg(name) { const i = process.argv.indexOf(name); return i >= 0 ? process.argv[i + 1] : null; }
const ARG_MODULO = getArg('--modulo');
// Módulos ya curados a mano que la IA NO debe tocar (flujo híbrido).
const SALTEAR    = new Set((getArg('--saltear') || '').split(',').map(s => s.trim()).filter(Boolean));
const EMIT       = process.argv.includes('--emit');
const LIMIT = process.argv.includes('--all')
  ? Infinity
  : (getArg('--limit') ? parseInt(getArg('--limit')) : 8);

/* ── 2. Cargar el banco de módulos (js/quiz-data.js define const MODULOS) ── */
function cargarModulos() {
  const src = fs.readFileSync(QUIZ_PATH, 'utf8').replace(/^\s*\/\*[\s\S]*?\*\//, '');
  // Envolvemos en una función para no ensuciar el scope global.
  return Function(src + '\n;return MODULOS;')();
}

/* ── 3. Grounding: texto del manual por producto ───────────────────────── */
function cargarManualPorProducto() {
  let texto = '';
  try { texto = require(MANUAL_PATH); } catch { texto = ''; }
  const norm = s => (s || '').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  // El manual está seccionado con encabezados "### <Producto> ...".
  const partes = texto.split(/\n(?=###\s)/).map(p => {
    const header = (p.split('\n')[0] || '').replace(/^###\s*/, '').trim();
    return { header, headerNorm: norm(header), body: p.trim() };
  }).filter(p => p.header);
  return (producto) => {
    const pn = norm(producto);
    const palabras = pn.split(/\s+/).filter(w => w.length > 3);
    let best = null, bestScore = 0;
    for (const seg of partes) {
      let score = 0;
      for (const w of palabras) if (seg.headerNorm.includes(w)) score += 2;
      // también al revés: la 1ª palabra del header dentro del producto
      const hw = seg.headerNorm.split(/\s+/)[0];
      if (hw && hw.length > 3 && pn.includes(hw)) score += 1;
      if (score > bestScore) { bestScore = score; best = seg; }
    }
    return best ? best.body.slice(0, 1400) : '';
  };
}

/* ── 4. Prompt ─────────────────────────────────────────────────────────── */
const SYSTEM = `Sos experto en capacitar vendedores de Rosso Materiales (corralón de materiales de construcción y baño en Tucumán/Salta, Argentina) y en diseñar exámenes de opción múltiple.
Te paso una pregunta con su respuesta CORRECTA y sus distractores. Reescribís las opciones para que NO se pueda adivinar la correcta por ser la más larga o la más detallada.

REGLAS ESTRICTAS:
- NO cambies cuál es la respuesta correcta ni su significado. El hecho correcto es el que te doy; mantenelo.
- ACORTÁ la respuesta correcta: sacale la explicación, los paréntesis y todo detalle (eso va SOLO en "explica"). Es OBLIGATORIO acortarla cuando es larga; NO la dejes igual.
- Reescribí los 3 distractores para que sean PLAUSIBLES, del rubro y CLARAMENTE INCORRECTOS (que un vendedor que no estudió pueda dudar, pero son falsos). NADA de opciones absurdas o de chiste.
- REGLA DE LARGO (la más importante): la respuesta correcta DEBE quedar MÁS CORTA que al menos uno de los distractores, y las 4 de largo parecido. PROHIBIDO "equilibrar" alargando los distractores en vez de acortar la correcta. Si la correcta te queda como la más larga, reescribila más corta.
- Español rioplatense neutro. Texto plano: sin markdown, sin viñetas, sin numerar, sin emojis, sin comillas al inicio/fin.
- PROHIBIDO inventar datos técnicos falsos en la correcta. Si dudás de un dato, dejá el de la correcta original. Usá el contexto del manual para no equivocarte.
- "explica": UNA frase que justifique por qué la correcta es correcta (podés mejorar la que te doy).

Devolvé SOLO un JSON válido, sin texto extra ni cerca de código, con esta forma EXACTA:
{"correcta":"...","distractores":["...","...","..."],"explica":"..."}`;

function userPrompt(q) {
  const otras = q.opciones.filter((_, i) => i !== q.correcta);
  return [
    `PRODUCTO: ${q._producto} (rubro: ${q._rubro})`,
    q._descripcion ? `DESCRIPCIÓN: ${q._descripcion}` : '',
    q._manual ? `CONTEXTO DEL MANUAL (para no inventar datos):\n${q._manual}\n` : '',
    `PREGUNTA: ${q.q}`,
    `RESPUESTA CORRECTA (mantené el significado, hacela concisa): ${q.opciones[q.correcta]}`,
    `DISTRACTORES ACTUALES (reemplazalos por otros plausibles y del mismo largo): ${otras.map(o => `"${o}"`).join(', ')}`,
    `EXPLICACIÓN ACTUAL: ${q.explica || '(sin explicación)'}`,
    '',
    'Devolvé el JSON.',
  ].filter(Boolean).join('\n');
}

/* ── 5. Adaptadores de proveedor (fetch, sin SDK) ──────────────────────── */
async function llamarLLM(q) {
  const sys = SYSTEM, usr = userPrompt(q);
  if (PROVIDER === 'gemini') {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${LLM_KEY}`;
    const r = await fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: sys }] },
        contents: [{ role: 'user', parts: [{ text: usr }] }],
        generationConfig: { temperature: 0.4, maxOutputTokens: 500, responseMimeType: 'application/json' },
      }),
    });
    if (!r.ok) throw new Error(`Gemini ${r.status}: ${await r.text()}`);
    const d = await r.json();
    return (d.candidates?.[0]?.content?.parts?.[0]?.text || '').trim();
  }
  if (PROVIDER === 'openai' || PROVIDER === 'deepseek') {
    const url = PROVIDER === 'deepseek'
      ? 'https://api.deepseek.com/chat/completions'
      : 'https://api.openai.com/v1/chat/completions';
    const r = await fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${LLM_KEY}` },
      body: JSON.stringify({
        model: MODEL, temperature: 0.4, max_tokens: 500,
        response_format: { type: 'json_object' },
        messages: [{ role: 'system', content: sys }, { role: 'user', content: usr }],
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
        model: MODEL, max_tokens: 500, temperature: 0.4, system: sys,
        messages: [{ role: 'user', content: usr }],
      }),
    });
    if (!r.ok) throw new Error(`Anthropic ${r.status}: ${await r.text()}`);
    const d = await r.json();
    return (d.content?.[0]?.text || '').trim();
  }
  throw new Error(`Proveedor desconocido: ${PROVIDER}`);
}

/* ── 6. Parseo + validación de la salida ───────────────────────────────── */
function parsearJSON(txt) {
  let s = txt.replace(/```json/gi, '').replace(/```/g, '').trim();
  const a = s.indexOf('{'), b = s.lastIndexOf('}');
  if (a >= 0 && b > a) s = s.slice(a, b + 1);
  return JSON.parse(s);
}

function validar(out) {
  if (!out || typeof out.correcta !== 'string' || !Array.isArray(out.distractores)) return 'estructura inválida';
  const correcta = out.correcta.trim();
  const distr = out.distractores.map(x => (x || '').toString().trim());
  if (!correcta) return 'correcta vacía';
  if (distr.length !== 3 || distr.some(d => !d)) return 'no hay 3 distractores válidos';
  const todas = [correcta, ...distr].map(s => s.toLowerCase());
  if (new Set(todas).size !== 4) return 'opciones repetidas';
  return null;
}

// QA: ¿la correcta quedó como la más larga? (el tell que queremos eliminar)
function qaFlag(correcta, distr) {
  const lc = correcta.length, maxD = Math.max(...distr.map(d => d.length));
  if (lc > maxD) return `correcta sigue siendo la más larga (${lc} vs ${maxD})`;
  return null;
}

async function rebalancearConReintento(q, intentos = 3) {
  for (let i = 1; i <= intentos; i++) {
    try {
      const raw = await llamarLLM(q);
      const out = parsearJSON(raw);
      const err = validar(out);
      if (err) throw new Error(err);
      return {
        correcta: out.correcta.trim(),
        distractores: out.distractores.map(x => x.toString().trim()),
        explica: (out.explica || q.explica || '').toString().trim(),
      };
    } catch (e) {
      if (i === intentos) throw e;
      await new Promise(res => setTimeout(res, 800 * i));
    }
  }
}

/* ── 7. Pool de concurrencia ───────────────────────────────────────────── */
async function procesarEnPool(items, fn, concurrency) {
  const out = new Array(items.length);
  let idx = 0;
  async function worker() { while (idx < items.length) { const i = idx++; out[i] = await fn(items[i], i); } }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker));
  return out;
}

/* ── 8. Main ───────────────────────────────────────────────────────────── */
async function main() {
  if (!LLM_KEY) {
    console.error('\n❌ Falta LLM_API_KEY en .env (copiá .env.example a .env y completá tu clave).\n');
    process.exit(1);
  }

  const MODULOS = cargarModulos();
  const manualDe = cargarManualPorProducto();

  // Aplanar todas las preguntas conservando su ubicación para reconstruir.
  const flat = [];
  for (const m of MODULOS) {
    if (ARG_MODULO && m.id !== ARG_MODULO) continue;
    if (SALTEAR.has(m.id)) continue; // ya curado a mano: no lo toca la IA
    for (const l of m.niveles) {
      for (let i = 0; i < l.preguntas.length; i++) {
        const p = l.preguntas[i];
        if (!p.opciones || p.opciones.length < 2) continue;
        flat.push(Object.assign({}, p, {
          _modId: m.id, _producto: m.producto, _rubro: m.rubro, _descripcion: m.descripcion || '',
          _nivel: l.nivel, _idx: i, _manual: SIN_MANUAL.has(m.id) ? '' : manualDe(m.producto),
        }));
      }
    }
  }
  const aProcesar = flat.slice(0, LIMIT);

  console.log(`\n▶ Proveedor: ${PROVIDER} · modelo: ${MODEL} · concurrencia: ${CONCURRENCY}`);
  console.log(`▶ Alcance: ${ARG_MODULO ? `módulo "${ARG_MODULO}"` : (LIMIT === Infinity ? 'TODAS' : `primeras ${LIMIT}`)}`);
  console.log(`▶ Preguntas a rebalancear: ${aProcesar.length} de ${flat.length}\n`);

  let hechos = 0;
  const resultados = await procesarEnPool(aProcesar, async (q) => {
    try {
      const nuevo = await rebalancearConReintento(q);
      const flag = qaFlag(nuevo.correcta, nuevo.distractores);
      process.stdout.write(`  ${flag ? '⚠' : '✓'} ${(++hechos).toString().padStart(3)}/${aProcesar.length}  ${q._modId} N${q._nivel} Q${q._idx}\n`);
      return { q, nuevo, flag, error: null };
    } catch (e) {
      process.stdout.write(`  ✗ ${(++hechos).toString().padStart(3)}/${aProcesar.length}  ${q._modId} N${q._nivel} Q${q._idx} → ${e.message}\n`);
      return { q, error: String(e.message) };
    }
  }, CONCURRENCY);

  /* ── Reconstruir cada pregunta (correcta SIEMPRE en índice 0) ── */
  const cambios = [];
  const byKey = new Map();
  for (const r of resultados) {
    if (!r || r.error) continue;
    const q = r.q, n = r.nuevo;
    const nuevaPregunta = { q: q.q, opciones: [n.correcta, ...n.distractores], correcta: 0, explica: n.explica };
    if (q.t != null) nuevaPregunta.t = q.t;
    if (q.tip != null) nuevaPregunta.tip = q.tip;
    byKey.set(`${q._modId}|${q._nivel}|${q._idx}`, nuevaPregunta);
    cambios.push({
      modId: q._modId, nivel: q._nivel, idx: q._idx, flag: r.flag || null,
      antes: { opciones: q.opciones, correcta: q.correcta, explica: q.explica || '' },
      despues: nuevaPregunta,
    });
  }

  /* ── Salidas ── */
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const fallidos = resultados.filter(r => r && r.error);
  const flags = cambios.filter(c => c.flag);

  fs.writeFileSync(path.join(OUT_DIR, 'rebalanceo.json'), JSON.stringify(cambios, null, 2), 'utf8');

  const md = [
    `# Rebalanceo de opciones — ${PROVIDER}/${MODEL}`,
    `_${new Date().toLocaleString('es-AR')} · ${cambios.length} preguntas · ⚠️ ${flags.length} a revisar · ❌ ${fallidos.length} fallidas_`,
    '',
    '> Revisá especialmente las marcadas con ⚠️ (la correcta puede seguir siendo la más larga) y verificá que ningún distractor sea accidentalmente verdadero.',
    '',
    ...cambios.map(c => {
      const a = c.antes, d = c.despues;
      const linea = (o, i, correctaIdx) => `   ${i === correctaIdx ? '✔' : '·'} [${String(o.length).padStart(3)}] ${o}`;
      return [
        `## ${c.modId} · N${c.nivel} · Q${c.idx}${c.flag ? `  ⚠️ ${c.flag}` : ''}`,
        `**${d.q}**`,
        '',
        '_Antes:_',
        a.opciones.map((o, i) => linea(o, i, a.correcta)).join('\n'),
        '',
        '_Después:_',
        d.opciones.map((o, i) => linea(o, i, d.correcta)).join('\n'),
        '',
        `explica: ${d.explica}`,
        '',
      ].join('\n');
    }),
  ].join('\n');
  fs.writeFileSync(path.join(OUT_DIR, 'rebalanceo-review.md'), md, 'utf8');

  /* ── Candidato completo (solo con --emit) ── */
  if (EMIT) {
    const nuevo = MODULOS.map(m => ({
      ...m,
      niveles: m.niveles.map(l => ({
        ...l,
        preguntas: l.preguntas.map((p, i) => byKey.get(`${m.id}|${l.nivel}|${i}`) || p),
      })),
    }));
    const header = `/* ============================================================\n   ACADEMIA ROSSO — Banco de Módulos (opciones rebalanceadas)\n   Generado por tools/enriquecimiento/rebalancear-preguntas.mjs\n   ${new Date().toLocaleString('es-AR')}\n   ============================================================ */\n\nconst MODULOS = `;
    fs.writeFileSync(path.join(OUT_DIR, 'quiz-data.rebalanceado.js'), header + JSON.stringify(nuevo, null, 2) + ';\n', 'utf8');
  }

  console.log('\n─────────────────────────────────────────────');
  console.log(`✅ Rebalanceadas: ${cambios.length}   ⚠️ A revisar: ${flags.length}   ❌ Fallidas: ${fallidos.length}`);
  console.log(`📄 Revisá:  out/rebalanceo-review.md  (antes/después)`);
  console.log(`📦 Datos:   out/rebalanceo.json`);
  if (EMIT) console.log(`🧩 Candidato: out/quiz-data.rebalanceado.js  (revisá y, si está OK, reemplazá js/quiz-data.js — hacé backup antes)`);
  else console.log(`ℹ️  Para generar el archivo candidato completo, corré con --all --emit`);
  console.log('─────────────────────────────────────────────');
  console.log('NO se tocó js/quiz-data.js. Revisá los borradores antes de aplicar.\n');
}

main().catch(e => { console.error('\n💥 Error:', e.message, '\n'); process.exit(1); });
