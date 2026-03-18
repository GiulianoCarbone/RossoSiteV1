const CACHE_NAME = 'panel-vendedores-cache-v3';
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
      .then(cache => {
        console.log('Cache del panel abierta');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

/**
 * Activación: tomar control inmediato de todos los clientes
 */
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

/**
 * Fetch: Responder desde caché o red
 */
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
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

  // Log para diagnosticar el formato exacto que manda n8n
  console.log('[SW] Push recibido, raw payload:', JSON.stringify(raw));

  // n8n puede enviar el payload directo, dentro de "notification", o con "data" anidado
  const payload = raw.notification || raw;
  const nested  = payload.data || raw.data || {};

  const title = payload.title   || raw.title   || 'Rosso Materiales';
  const body  = payload.body    || payload.message
             || raw.body        || raw.message
             || 'Tienes una nueva novedad';
  const url   = nested.url      || nested.link
             || payload.url     || payload.link
             || raw.url         || raw.link
             || '/panel-corporativo.html';
  const icon  = payload.icon    || raw.icon    || '/assets/FAV.png';

  console.log('[SW] Mostrando notificación — title:', title, '| body:', body, '| url:', url);

  const options = {
    body: body,
    icon: icon,
    badge: '/assets/FAV.png',
    data: { url }
  };

  event.waitUntil(
    self.registration.showNotification(title, options).then(() => {
      if (navigator.setAppBadge) {
        navigator.setAppBadge(1).catch(() => {});
      }
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
      for (let client of windowClients) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
