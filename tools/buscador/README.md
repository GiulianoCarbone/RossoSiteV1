# Generador del buscador del index

Vuelve a generar [`todos_los_productos.js`](../../todos_los_productos.js) (la base
del buscador de la página de inicio) a partir de **nuestro** catálogo en Firestore,
en lugar del export viejo del catálogo externo.

Cada producto queda apuntando a **nuestra** ficha (`producto.html?sku=...`) y usa
**nuestras** imágenes (Cloudinary), igual que `catalogo.html` y `producto.html`.

## Cómo se usa

```bash
cd tools/buscador
node generar-todos-los-productos.mjs
```

- **No** escribe nada en Firestore (solo lee).
- **No** necesita clave secreta: usa la misma API key **pública de solo-lectura**
  que ya usa el sitio. Se puede sobreescribir con variables de entorno
  `FIREBASE_PROJECT` / `FIRESTORE_API_KEY` si alguna vez cambia el proyecto.

## Cuándo correrlo

Cada vez que quieras que el buscador del index refleje cambios del catálogo
(altas, bajas, renombres). El buscador en sí sigue siendo **100 % estático**
(cero costo en runtime): este script solo "fotografía" el catálogo y reescribe el `.js`.

## Después de correrlo

Subí el `todos_los_productos.js` actualizado a Ferozo (es un archivo del sitio).
