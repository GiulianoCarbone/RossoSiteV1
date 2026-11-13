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
Si se abre o se cierra una sucursal, hay que actualizar el "9" y los nombres en `og-sucursales.html`.
