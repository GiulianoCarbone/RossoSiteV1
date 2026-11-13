# Imágenes para compartir (Open Graph)

Plantillas HTML de las imágenes que muestran WhatsApp, Facebook, etc. al compartir un link.
La foto de fondo va sin texto (foto real o generada con Magnific) y el logo y los textos se ponen con HTML.
Sucursales usa la foto real de la fachada con un velo blanco completo y el texto centrado.
La plantilla trae 3 mensajes: se elige agregando #1, #2 o #3 al final de la ruta del archivo en el comando.

Para volver a generar una imagen (1200×630) con Edge en modo headless:

```bash
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --disable-gpu \
  --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 \
  --virtual-time-budget=8000 --screenshot="$PWD/render.png" "file:///$PWD/og-sucursales.html"
```

Después hay que pasarla a JPG (calidad ~86, menos de 300 KB) y guardarla en `assets/og/`.
Si se abre o se cierra una sucursal, hay que actualizar el número y los nombres en `og-sucursales.html`.

## Catálogo

`og-catalogo.html` usa `fondo-catalogo.jpg` (showroom generado con Magnific, Nano Banana 2.1) con un velo
más liviano que sucursales, porque el fondo ya es muy claro. Las píldoras son las categorías reales del
catálogo (colección `categorias` de Firestore): si se agrega o se renombra una categoría, actualizarlas acá.
Mensajes alternativos con #1, #2 o #3. Salida: `assets/og/og-catalogo.jpg`.

## Inicio

`og-inicio.html` usa `fondo-inicio.jpg` (casa de ladrillo en obra con los cerros de fondo, generado con Magnific).
Las píldoras salen del propio index.html: 8 sucursales, stock permanente, acopio, entrega a pie de obra, catálogo online.
Mensajes alternativos con #1, #2 o #3. Salida: `assets/og/og-inicio.jpg`.

## Trabajá con nosotros

`og-trabaja.html` usa `fondo-trabaja.jpg` (la foto real de `assets/SLIDER/banner-trabaja.webp`).
Como hay una persona, el armado principal (A) la deja a la izquierda casi sin velo y pone el texto a la derecha;
el armado B (todo centrado) le tapa la cara. Se compara con #<mensaje>-<armado>, por ejemplo #2-b.
Salida: `assets/og/og-trabaja.jpg`.

Ojo con la cantidad de sucursales: J.B. Alberdi está comentada en sucursales.html, así que son 8.
