const CACHE_NAME = 'panel-vendedores-cache-v2';
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
  let data = { title: 'Notificación', body: 'Tienes un nuevo mensaje de Rosso Materiales', icon: '/assets/FAV.png' };

  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body || data.message,
    icon: data.icon || '/assets/FAV.png',
    badge: '/assets/FAV.png',
    data: {
      url: data.url || data.link || '/'
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
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
      // Si ya hay una ventana abierta con esa URL, le damos foco
      for (let client of windowClients) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      // Si no, abrimos una nueva
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
