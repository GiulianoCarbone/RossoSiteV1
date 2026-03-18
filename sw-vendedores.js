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

  // ── LOG COMPLETO (ver en DevTools → Application → Service Workers → Console) ──
  console.log('[SW] ════════════ PUSH RECIBIDO ════════════');
  console.log('[SW] Raw completo:', JSON.stringify(raw, null, 2));
  console.log('[SW] Claves en raw:', Object.keys(raw));
  // ────────────────────────────────────────────────────────────────────────────

  // raw.data puede ser un objeto o un string JSON serializado → normalizarlo
  let dataObj = raw.data || {};
  if (typeof dataObj === 'string') {
    try { dataObj = JSON.parse(dataObj); } catch (e) { dataObj = {}; }
  }

  // raw.notification puede tener sub-campos
  const notif = raw.notification || {};

  // Buscar title en TODOS los lugares posibles
  const title = notif.title
             || raw.title
             || dataObj.title
             || dataObj.notification?.title
             || 'Rosso Materiales';

  // Buscar body/message en TODOS los lugares posibles
  const body = notif.body     || notif.message
            || raw.body       || raw.message
            || dataObj.body   || dataObj.message
            || dataObj.notification?.body
            || 'Tienes una nueva novedad';

  // Buscar url/link en TODOS los lugares posibles
  const rawUrl = dataObj.url    || dataObj.link
              || notif.url      || notif.link
              || raw.url        || raw.link
              || dataObj.notification?.click_action
              || '/panel-corporativo.html';

  console.log('[SW] → title:', title);
  console.log('[SW] → body:', body);
  console.log('[SW] → rawUrl:', rawUrl);

  // URL absoluta usando el scope del SW (self.location.origin puede ser null)
  const origin = new URL(self.registration.scope).origin;
  const absoluteUrl = rawUrl.startsWith('http') ? rawUrl : origin + '/' + rawUrl.replace(/^\//, '');

  console.log('[SW] → URL final:', absoluteUrl);

  const options = {
    body: body,
    icon: notif.icon || raw.icon || dataObj.icon || '/assets/FAV.png',
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

  // URL destino: viene en data.url (absoluta) o fallback al panel-corporativo
  const rawUrl = (event.notification.data && event.notification.data.url)
    ? event.notification.data.url
    : 'panel-corporativo.html';

  // Garantizar URL absoluta usando el scope del SW
  const origin = new URL(self.registration.scope).origin;
  const urlToOpen = rawUrl.startsWith('http') ? rawUrl : origin + '/' + rawUrl.replace(/^\//, '');

  console.log('[SW] notificationclick → abriendo:', urlToOpen);

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      // Buscar si ya hay una pestaña abierta con esa URL (comparación flexible)
      for (let client of windowClients) {
        if (client.url.includes('panel-corporativo') && 'focus' in client) {
          client.focus();
          // Navegar a la URL exacta por si está en otra sección
          if ('navigate' in client) client.navigate(urlToOpen);
          return;
        }
      }
      // Si no hay pestaña abierta, abrir una nueva
      return clients.openWindow(urlToOpen);
    })
  );
});
