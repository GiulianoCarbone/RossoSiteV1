const CACHE_NAME = 'panel-vendedores-cache-v4';
const urlsToCache = [
  '/panel-corporativo.html',
  '/style.css'
];

/**
 * Instalación: Cachear recursos estáticos
 */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

/**
 * Activación: tomar control inmediato
 */
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

/**
 * Fetch: solo responder desde caché para archivos propios del sitio,
 * dejar pasar todo lo demás (Firestore, APIs externas, etc.)
 */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Solo interceptar requests del mismo origen y que no sean APIs
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/')) return;

  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

/**
 * PUSH EVENT: Maneja las notificaciones enviadas desde n8n
 */
self.addEventListener('push', event => {
  let raw = {};

  if (event.data) {
    try {
      raw = event.data.json();
    } catch (e) {
      raw = { body: event.data.text() };
    }
  }

  console.log('[SW] Push recibido, raw payload:', JSON.stringify(raw));

  // n8n puede enviar el payload en distintos formatos
  const payload  = raw.notification || raw;
  const nested   = payload.data || raw.data || {};

  const title = payload.title   || raw.title   || 'Rosso Materiales';
  const body  = payload.body    || payload.message
             || raw.body        || raw.message
             || 'Tienes una nueva novedad';
  const rawUrl = nested.url   || nested.link
              || payload.url  || payload.link
              || raw.url      || raw.link
              || '/panel-corporativo.html';

  // Siempre usar URL absoluta para que notificationclick funcione en todos los navegadores
  const origin = self.location.origin; // ej: https://rossomateriales.site
  const absoluteUrl = rawUrl.startsWith('http') ? rawUrl : origin + rawUrl;

  console.log('[SW] title:', title, '| body:', body, '| url:', absoluteUrl);

  const options = {
    body: body,
    icon: payload.icon || raw.icon || '/assets/FAV.png',
    badge: '/assets/FAV.png',
    data: { url: absoluteUrl }
  };

  event.waitUntil(
    self.registration.showNotification(title, options).then(() => {
      if (navigator.setAppBadge) navigator.setAppBadge(1).catch(() => {});
    })
  );
});

/**
 * NOTIFICATION CLICK: Abre la URL vinculada a la notificación
 */
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const urlToOpen = event.notification.data.url;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      // Buscar si ya hay una pestaña abierta con esa URL (comparación flexible)
      for (let client of windowClients) {
        if (client.url.includes('panel-corporativo') && 'focus' in client) {
          return client.focus();
        }
      }
      // Si no, abrir nueva pestaña con URL absoluta
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
