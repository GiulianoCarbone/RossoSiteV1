/**
 * generar-todos-los-productos.mjs
 * ─────────────────────────────────────────────────────────────────────────
 * (Re)genera  ../../todos_los_productos.js  — la base del buscador del index —
 * a partir de NUESTRO catálogo en Firestore (colección "catalogo"), en vez del
 * export viejo del catálogo externo.
 *
 * Mapea cada producto a la forma que ya espera el buscador:
 *   { nombre, sku, categoria, url, imagen }
 *     - url    -> producto.html?sku=SKU            (ficha PROPIA, no el sitio externo)
 *     - imagen -> Cloudinary (mismo CDN que producto.html / catalogo.html)
 *
 * Lee por REST público (la misma API key de SOLO-LECTURA que usa el sitio).
 * NO escribe nada en Firestore. NO necesita service account.
 *
 * Uso:
 *   cd tools/buscador
 *   node generar-todos-los-productos.mjs
 * ─────────────────────────────────────────────────────────────────────────
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/* ── Config (solo-lectura; la misma key pública que catalogo.html) ──────── */
const PROJECT          = process.env.FIREBASE_PROJECT  || 'backend-panel-vendedores';
const API_KEY          = process.env.FIRESTORE_API_KEY || 'AIzaSyD9p16QACzSifXaTl1TojcuUKDijuE77S0';
const CLOUDINARY_CLOUD = 'dbntmfmdv';
const IMG_OPTS         = 'w_200,h_200,c_fit,f_auto,q_auto:eco,fl_lossy'; // miniatura liviana
const PLACEHOLDER      = 'https://placehold.co/100x100/EFEFEF/333333?text=Rosso';
const OUT              = path.join(__dirname, '..', '..', 'todos_los_productos.js');

const cdnUrl = (publicId) =>
  `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/${IMG_OPTS}/${publicId}`;

/* ── Traer todo el catálogo (REST público, paginado) ────────────────────── */
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
      const arr = (k) => (f[k] && f[k].arrayValue && f[k].arrayValue.values) || [];
      docs.push({
        sku: s('sku') || d.name.split('/').pop(),
        nombre: s('nombre'),
        categoria: s('categoria'),
        // disponible: por defecto true (solo se excluye si es explícitamente false)
        disponible: !(f.disponible && f.disponible.booleanValue === false),
        imagenes: arr('imagenes').map((v) => v.stringValue).filter(Boolean),
        imagenLegacy: s('imagenLegacy'),
      });
    }
    token = data.nextPageToken;
  } while (token);
  return docs;
}

function imagenDe(p) {
  if (p.imagenes.length) return cdnUrl(p.imagenes[0]);
  if (p.imagenLegacy)    return p.imagenLegacy;
  return PLACEHOLDER;
}

/* ── Main ───────────────────────────────────────────────────────────────── */
(async () => {
  console.log('Leyendo catálogo de Firestore…');
  const todos = await fetchCatalogo();

  const productos = todos
    .filter((p) => p.disponible && p.nombre && p.sku)
    .map((p) => ({
      nombre: p.nombre,
      sku: String(p.sku),
      categoria: p.categoria || '',
      url: `producto.html?sku=${encodeURIComponent(p.sku)}`,
      imagen: imagenDe(p),
    }))
    .sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));

  const descartados = todos.length - productos.length;
  const header =
    '// Este archivo contiene TODOS los productos para el buscador de la página de inicio.\n' +
    `// GENERADO AUTOMÁTICAMENTE desde Firestore (colección "catalogo") el ${new Date().toISOString()}.\n` +
    '// No lo edites a mano: volvé a correr  tools/buscador/generar-todos-los-productos.mjs\n';
  const body = 'const productos = ' + JSON.stringify(productos, null, 2) + ';\n';

  fs.writeFileSync(OUT, header + body, 'utf8');
  console.log(`OK: ${productos.length} productos escritos en ${OUT}` +
    (descartados ? `  (descartados ${descartados}: sin stock / sin nombre / sin sku)` : ''));
})().catch((e) => { console.error('ERROR:', e.message); process.exit(1); });
