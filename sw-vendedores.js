// Importa el Service Worker de OneSignal al principio de tu archivo
importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');


const CACHE_NAME = 'panel-vendedores-cache-v2';
const urlsToCache = [
  '/panel-corporativo.html', // <-- CAMBIO AQUÍ
  '/style.css'
];

// Instala el Service Worker y guarda los archivos base en la caché
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

// Intercepta las peticiones y responde con los archivos de la caché si están disponibles
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
