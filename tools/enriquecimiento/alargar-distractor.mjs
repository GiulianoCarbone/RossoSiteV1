/**
 * alargar-distractor.mjs
 * ─────────────────────────────────────────────────────────────────────────
 * 2ª PASADA del rebalanceo. Parte del candidato fusionado (out/quiz-data.merged.js)
 * y ataca SOLO las preguntas de "dato único" donde la correcta sigue siendo la
 * más larga (el tell que hace fácil el examen).
 *
 * Estrategia OPUESTA a rebalancear-preguntas.mjs: en vez de acortar la correcta
 * (que en las definiciones perdería información), ALARGA UN distractor para que
 * sea plausible, falso y de largo similar a la correcta. Así la longitud deja de
 * delatar la respuesta.
 *
 * REGLAS DURAS:
 *   - NO toca la respuesta correcta (queda textual, en índice 0).
 *   - NO cambia cuál es la correcta.
 *   - NO inventa números / medidas / % en los distractores.
 *   - Los distractores son CLARAMENTE FALSOS (nunca accidentalmente ciertos).
 *
 * Excluye:
 *   - Preguntas tipo "lista" (la correcta es una enumeración: legítimamente larga).
 *   - Preguntas donde la correcta NO es la más larga (ya están bien).
 *   - Módulos --saltear (curados a mano).
 *
 * Salidas (NO toca js/quiz-data.js):
 *   out/alargado.json
 *   out/alargado-review.md
 *   out/quiz-data.final.js   (candidato completo = merged + distractores largos)
 *
 * Uso:
 *   node alargar-distractor.mjs                 -> prueba (8 preguntas)
 *   node alargar-distractor.mjs --limit 30
 *   node alargar-distractor.mjs --all
 *   node alargar-distractor.mjs --all --saltear cal-hidratada,cemento
 * ─────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/* ── 0. Cargar .env ───────────────────────────────────────────────────── */
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

/* ── 1. Configuración ─────────────────────────────────────────────────── */
const PROVIDER    = (process.env.LLM_PROVIDER || 'deepseek').toLowerCase();
const LLM_KEY     = process.env.LLM_API_KEY;
const CONCURRENCY = Math.max(1, parseInt(process.env.CONCURRENCY || '3'));
const OUT_DIR     = path.join(process.cwd(), 'out');
const ROOT        = path.resolve(process.cwd(), '..', '..');
const BASE_PATH   = path.join(OUT_DIR, 'quiz-data.merged.js');   // base = merge seguro
const MANUAL_PATH = path.join(ROOT, 'functions', 'manual-conocimiento.js');

const MODELOS = { gemini: 'gemini-2.0-flash', openai: 'gpt-4o-mini', anthropic: 'claude-3-5-haiku-latest', deepseek: 'deepseek-chat' };
const MODEL   = process.env.LLM_MODEL || MODELOS[PROVIDER];

const SIN_MANUAL = new Set(['placas_uv', 'revestimiento_wpc']);

function getArg(name) { const i = process.argv.indexOf(name); return i >= 0 ? process.argv[i + 1] : null; }
const ARG_MODULO = getArg('--modulo');
const SALTEAR    = new Set((getArg('--saltear') || '').split(',').map(s => s.trim()).filter(Boolean));
const LIMIT = process.argv.includes('--all') ? Infinity : (getArg('--limit') ? parseInt(getArg('--limit')) : 8);

/* ── 2. Cargar el banco base (merged) ─────────────────────────────────── */
function cargarModulos() {
  const src = fs.readFileSync(BASE_PATH, 'utf8').replace(/^\s*\/\*[\s\S]*?\*\//, '');
  return Function(src + '\n;return MODULOS;')();
}

/* ── 3. Grounding: texto del manual por producto ──────────────────────── */
function cargarManualPorProducto() {
  let texto = '';
  try { texto = require(MANUAL_PATH); } catch { texto = ''; }
  const norm = s => (s || '').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
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
      const hw = seg.headerNorm.split(/\s+/)[0];
      if (hw && hw.length > 3 && pn.includes(hw)) score += 1;
      if (score > bestScore) { bestScore = score; best = seg; }
    }
    return best ? best.body.slice(0, 1400) : '';
  };
}

/* ── 4. Selección: solo "dato único" con tell ─────────────────────────── */
const glen = s => [...(s || '')].length;
const esLista = c => ((c || '').match(/[,+]|(\sy\s)/g) || []).length >= 2;
function tieneTellFactoUnico(p) {
  const c = p.opciones[p.correcta];
  const md = Math.max(...p.opciones.filter((_, i) => i !== p.correcta).map(glen));
  return glen(c) > md && !esLista(c);
}

/* ── 5. Prompt ────────────────────────────────────────────────────────── */
const SYSTEM = `Sos experto en capacitar vendedores de Rosso Materiales (corralón de materiales de construcción y baño en Tucumán/Salta, Argentina) y en diseñar exámenes de opción múltiple.
Te paso una pregunta con su respuesta CORRECTA (que NO se toca) y sus 3 distractores. Tu única tarea es reescribir los DISTRACTORES para que la respuesta correcta deje de ser la más larga y no se pueda adivinar por su longitud.

REGLAS ESTRICTAS:
- NO reescribas ni cambies la respuesta correcta. Te la doy solo como referencia; queda tal cual.
- Reescribí los 3 distractores para que sean PLAUSIBLES, del rubro y CLARAMENTE INCORRECTOS (un vendedor que no estudió podría dudar, pero son falsos). NADA de opciones absurdas, de chiste, ni que empiecen con "Solo".
- REGLA DE LARGO (la más importante): al menos UNO de los distractores debe quedar DE LARGO IGUAL O MAYOR que la respuesta correcta, y los otros dos de largo parecido. La idea es que las 4 opciones tengan un largo similar. El distractor largo tiene que ser una afirmación creíble pero equivocada, con el mismo nivel de detalle que la correcta.
- PROHIBIDO inventar datos numéricos: no metas medidas, kilos, litros, porcentajes, pulgadas ni años en los distractores. Que sean afirmaciones cualitativas.
- Los distractores NO pueden ser verdaderos ni equivalentes a la correcta. Verificá con el contexto del manual para no poner por error algo cierto.
- Español rioplatense neutro. Texto plano: sin markdown, sin viñetas, sin numerar, sin emojis, sin comillas al inicio/fin.

Devolvé SOLO un JSON válido, sin texto extra ni cercas de código, con esta forma EXACTA:
{"distractores":["...","...","..."]}`;

function userPrompt(q) {
  const otras = q.opciones.filter((_, i) => i !== q.correcta);
  return [
    `PRODUCTO: ${q._producto} (rubro: ${q._rubro})`,
    q._descripcion ? `DESCRIPCIÓN: ${q._descripcion}` : '',
    q._manual ? `CONTEXTO DEL MANUAL (para no poner distractores accidentalmente ciertos):\n${q._manual}\n` : '',
    `PREGUNTA: ${q.q}`,
    `RESPUESTA CORRECTA (NO la toques, es solo referencia — largo ${glen(q.opciones[q.correcta])} caracteres): ${q.opciones[q.correcta]}`,
    `DISTRACTORES ACTUALES (reemplazalos; al menos uno debe quedar tan largo como la correcta): ${otras.map(o => `"${o}"`).join(', ')}`,
    '',
    'Devolvé el JSON con los 3 distractores nuevos.',
  ].filter(Boolean).join('\n');
}

/* ── 6. Adaptadores de proveedor ──────────────────────────────────────── */
async function llamarLLM(q) {
  const sys = SYSTEM, usr = userPrompt(q);
  if (PROVIDER === 'gemini') {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${LLM_KEY}`;
    const r = await fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: sys }] },
        contents: [{ role: 'user', parts: [{ text: usr }] }],
        generationConfig: { temperature: 0.5, maxOutputTokens: 500, responseMimeType: 'application/json' },
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
        model: MODEL, temperature: 0.5, max_tokens: 500,
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
      body: JSON.stringify({ model: MODEL, max_tokens: 500, temperature: 0.5, system: sys, messages: [{ role: 'user', content: usr }] }),
    });
    if (!r.ok) throw new Error(`Anthropic ${r.status}: ${await r.text()}`);
    const d = await r.json();
    return (d.content?.[0]?.text || '').trim();
  }
  throw new Error(`Proveedor desconocido: ${PROVIDER}`);
}

/* ── 7. Parseo + validación ───────────────────────────────────────────── */
function parsearJSON(txt) {
  let s = txt.replace(/```json/gi, '').replace(/```/g, '').trim();
  const a = s.indexOf('{'), b = s.lastIndexOf('}');
  if (a >= 0 && b > a) s = s.slice(a, b + 1);
  return JSON.parse(s);
}

const RX_NUM = /\d+\s?(kg|g|cm|mm|m2|m²|m3|m³|metros?|litros?|lts?|%|mpa|años?|hs?|horas?|min|°c|watts?|kcal|pulgadas?)/i;

function validar(out, correcta) {
  if (!out || !Array.isArray(out.distractores)) return 'estructura inválida';
  const distr = out.distractores.map(x => (x || '').toString().trim());
  if (distr.length !== 3 || distr.some(d => !d)) return 'no hay 3 distractores válidos';
  const todas = [correcta, ...distr].map(s => s.toLowerCase());
  if (new Set(todas).size !== 4) return 'opción repetida o igual a la correcta';
  if (distr.some(d => RX_NUM.test(d))) return 'distractor con dato numérico (prohibido)';
  return null;
}

// QA: ¿al menos un distractor quedó tan largo como la correcta?
function qaFlag(correcta, distr) {
  const lc = glen(correcta), maxD = Math.max(...distr.map(glen));
  if (lc > maxD) return `la correcta sigue siendo la más larga (${lc} vs ${maxD})`;
  return null;
}

async function conReintento(q, intentos = 3) {
  const correcta = q.opciones[q.correcta];
  for (let i = 1; i <= intentos; i++) {
    try {
      const raw = await llamarLLM(q);
      const out = parsearJSON(raw);
      const err = validar(out, correcta);
      if (err) throw new Error(err);
      return { distractores: out.distractores.map(x => x.toString().trim()) };
    } catch (e) {
      if (i === intentos) throw e;
      await new Promise(res => setTimeout(res, 800 * i));
    }
  }
}

/* ── Verificación ciega: un 2º llamado juzga qué opciones son VERDADERAS ──
 * No le decimos cuál es la correcta. Le pasamos las 4 opciones (correcta en 0)
 * y devuelve los índices de las que responden bien. Solo aceptamos el set si
 * juzga exactamente [0]: la correcta es la única verdadera y ningún distractor
 * quedó accidentalmente cierto. Ante cualquier duda, se rechaza (queda el original). */
const SYSTEM_VERIF = `Sos un evaluador experto de materiales de construcción y baño (Rosso Materiales, Argentina).
Te doy una PREGUNTA y 4 OPCIONES numeradas 0..3. Decidí CUÁLES opciones responden de forma correcta y verdadera a la pregunta (puede ser una o varias).
Sé estricto: una opción cuenta como correcta si es verdadera y responde la pregunta, aunque esté redactada distinto. Una opción que dice algo cierto pero que también es cierto de la respuesta buena, cuenta como correcta.
Usá el contexto del manual si te lo doy. Devolvé SOLO JSON: {"correctas":[indices]}`;

function verifPrompt(q, opciones) {
  return [
    q._manual ? `CONTEXTO DEL MANUAL:\n${q._manual}\n` : '',
    `PREGUNTA: ${q.q}`,
    'OPCIONES:',
    ...opciones.map((o, i) => `${i}) ${o}`),
    '',
    'Devolvé {"correctas":[...]} con los índices verdaderos.',
  ].filter(Boolean).join('\n');
}

async function llamarVerif(q, opciones) {
  const sys = SYSTEM_VERIF, usr = verifPrompt(q, opciones);
  if (PROVIDER === 'gemini') {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${LLM_KEY}`;
    const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ systemInstruction: { parts: [{ text: sys }] }, contents: [{ role: 'user', parts: [{ text: usr }] }],
        generationConfig: { temperature: 0, maxOutputTokens: 120, responseMimeType: 'application/json' } }) });
    if (!r.ok) throw new Error(`Gemini verif ${r.status}`);
    const d = await r.json(); return (d.candidates?.[0]?.content?.parts?.[0]?.text || '').trim();
  }
  const url = PROVIDER === 'deepseek' ? 'https://api.deepseek.com/chat/completions'
    : PROVIDER === 'openai' ? 'https://api.openai.com/v1/chat/completions' : null;
  if (url) {
    const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${LLM_KEY}` },
      body: JSON.stringify({ model: MODEL, temperature: 0, max_tokens: 120, response_format: { type: 'json_object' },
        messages: [{ role: 'system', content: sys }, { role: 'user', content: usr }] }) });
    if (!r.ok) throw new Error(`${PROVIDER} verif ${r.status}`);
    const d = await r.json(); return (d.choices?.[0]?.message?.content || '').trim();
  }
  const r = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': LLM_KEY, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: MODEL, max_tokens: 120, temperature: 0, system: sys, messages: [{ role: 'user', content: usr }] }) });
  if (!r.ok) throw new Error(`Anthropic verif ${r.status}`);
  const d = await r.json(); return (d.content?.[0]?.text || '').trim();
}

// Devuelve true si el set es SEGURO (la correcta en índice 0 es la única verdadera).
async function verificarSoloCorrecta(q, opciones) {
  try {
    const raw = await llamarVerif(q, opciones);
    const out = parsearJSON(raw);
    const idxs = (out.correctas || out.correct || []).map(Number).filter(n => Number.isInteger(n));
    return idxs.length === 1 && idxs[0] === 0;
  } catch { return false; }   // ante error de verificación, rechazamos (conserva original)
}

/* ── 8. Pool ──────────────────────────────────────────────────────────── */
async function procesarEnPool(items, fn, concurrency) {
  const out = new Array(items.length);
  let idx = 0;
  async function worker() { while (idx < items.length) { const i = idx++; out[i] = await fn(items[i], i); } }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker));
  return out;
}

/* ── 9. Main ──────────────────────────────────────────────────────────── */
async function main() {
  if (!LLM_KEY) { console.error('\n❌ Falta LLM_API_KEY en .env\n'); process.exit(1); }
  if (!fs.existsSync(BASE_PATH)) { console.error(`\n❌ No existe la base ${BASE_PATH}. Generá primero el merge.\n`); process.exit(1); }

  const MODULOS = cargarModulos();
  const manualDe = cargarManualPorProducto();

  const flat = [];
  for (const m of MODULOS) {
    if (ARG_MODULO && m.id !== ARG_MODULO) continue;
    if (SALTEAR.has(m.id)) continue;
    for (const l of m.niveles) {
      for (let i = 0; i < l.preguntas.length; i++) {
        const p = l.preguntas[i];
        if (!p.opciones || p.opciones.length < 3) continue;
        if (!tieneTellFactoUnico(p)) continue;   // solo dato único con tell
        flat.push(Object.assign({}, p, {
          _modId: m.id, _producto: m.producto, _rubro: m.rubro, _descripcion: m.descripcion || '',
          _nivel: l.nivel, _idx: i, _manual: SIN_MANUAL.has(m.id) ? '' : manualDe(m.producto),
        }));
      }
    }
  }
  const aProcesar = flat.slice(0, LIMIT);

  console.log(`\n▶ Proveedor: ${PROVIDER} · modelo: ${MODEL} · concurrencia: ${CONCURRENCY}`);
  console.log(`▶ Base: out/quiz-data.merged.js`);
  console.log(`▶ Preguntas de dato único con tell: ${aProcesar.length} de ${flat.length}\n`);

  let hechos = 0;
  const resultados = await procesarEnPool(aProcesar, async (q) => {
    try {
      const nuevo = await conReintento(q);
      const opciones = [q.opciones[q.correcta], ...nuevo.distractores];
      const seguro = await verificarSoloCorrecta(q, opciones);
      const flag = qaFlag(q.opciones[q.correcta], nuevo.distractores);
      const icono = !seguro ? '⛔' : (flag ? '⚠' : '✓');
      process.stdout.write(`  ${icono} ${(++hechos).toString().padStart(3)}/${aProcesar.length}  ${q._modId} N${q._nivel} Q${q._idx}${!seguro ? ' (rechazada: distractor dudoso)' : ''}\n`);
      return { q, nuevo, flag, seguro, error: null };
    } catch (e) {
      process.stdout.write(`  ✗ ${(++hechos).toString().padStart(3)}/${aProcesar.length}  ${q._modId} N${q._nivel} Q${q._idx} → ${e.message}\n`);
      return { q, error: String(e.message) };
    }
  }, CONCURRENCY);

  /* ── Reconstruir: correcta intacta en índice 0 + 3 distractores nuevos ── */
  const cambios = [];
  const byKey = new Map();
  let rechazadas = 0;
  for (const r of resultados) {
    if (!r || r.error) continue;
    if (!r.seguro) { rechazadas++; continue; }   // no pasó verificación: se conserva original
    const q = r.q;
    const correcta = q.opciones[q.correcta];
    const nuevaPregunta = { ...q };
    delete nuevaPregunta._modId; delete nuevaPregunta._producto; delete nuevaPregunta._rubro;
    delete nuevaPregunta._descripcion; delete nuevaPregunta._nivel; delete nuevaPregunta._idx; delete nuevaPregunta._manual;
    nuevaPregunta.opciones = [correcta, ...r.nuevo.distractores];
    nuevaPregunta.correcta = 0;
    byKey.set(`${q._modId}|${q._nivel}|${q._idx}`, nuevaPregunta);
    cambios.push({
      modId: q._modId, nivel: q._nivel, idx: q._idx, flag: r.flag || null,
      antes: { opciones: q.opciones, correcta: q.correcta },
      despues: { q: q.q, opciones: nuevaPregunta.opciones, correcta: 0 },
    });
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const fallidos = resultados.filter(r => r && r.error);
  const flags = cambios.filter(c => c.flag);

  fs.writeFileSync(path.join(OUT_DIR, 'alargado.json'), JSON.stringify(cambios, null, 2), 'utf8');

  const md = [
    `# 2ª pasada — alargar distractores — ${PROVIDER}/${MODEL}`,
    `_${new Date().toLocaleString('es-AR')} · ${cambios.length} preguntas · ⚠️ ${flags.length} sin lograr largo · ❌ ${fallidos.length} fallidas_`,
    '',
    ...cambios.map(c => {
      const a = c.antes, d = c.despues;
      const linea = (o, i, ci) => `   ${i === ci ? '✔' : '·'} [${String(glen(o)).padStart(3)}] ${o}`;
      return [
        `## ${c.modId} · N${c.nivel} · Q${c.idx}${c.flag ? `  ⚠️ ${c.flag}` : ''}`,
        `**${d.q}**`, '',
        '_Antes:_', a.opciones.map((o, i) => linea(o, i, a.correcta)).join('\n'), '',
        '_Después:_', d.opciones.map((o, i) => linea(o, i, d.correcta)).join('\n'), '',
      ].join('\n');
    }),
  ].join('\n');
  fs.writeFileSync(path.join(OUT_DIR, 'alargado-review.md'), md, 'utf8');

  /* ── Candidato final = merged + distractores largos ── */
  const nuevo = MODULOS.map(m => ({
    ...m,
    niveles: m.niveles.map(l => ({
      ...l,
      preguntas: l.preguntas.map((p, i) => byKey.get(`${m.id}|${l.nivel}|${i}`) || p),
    })),
  }));
  const header = `/* ============================================================\n   ACADEMIA ROSSO — Banco de Módulos (candidato FINAL)\n   merge seguro + 2ª pasada (distractores alargados en dato único)\n   ${new Date().toLocaleString('es-AR')}\n   ============================================================ */\n\nconst MODULOS = `;
  fs.writeFileSync(path.join(OUT_DIR, 'quiz-data.final.js'), header + JSON.stringify(nuevo, null, 2) + ';\n', 'utf8');

  console.log('\n─────────────────────────────────────────────');
  console.log(`✅ Aplicadas (verificadas): ${cambios.length}   ⛔ Rechazadas por verificación: ${rechazadas}   ⚠️ Sin lograr largo: ${flags.length}   ❌ Fallidas: ${fallidos.length}`);
  console.log(`📄 Revisá:  out/alargado-review.md`);
  console.log(`📦 Datos:   out/alargado.json`);
  console.log(`🧩 Candidato FINAL: out/quiz-data.final.js`);
  console.log('─────────────────────────────────────────────');
  console.log('NO se tocó js/quiz-data.js.\n');
}

main().catch(e => { console.error('\n💥 Error:', e.message, '\n'); process.exit(1); });
