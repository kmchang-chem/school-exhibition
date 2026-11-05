const CACHE_NAME = 'exhibition-v1';
const ASSETS = [
  './',
  './index.html',
  'https://cdn.tailwindcss.com',
  './logo.jpeg',
  './principal.jpg',
  './holistic1.jpg', './holistic2.jpg', './holistic3.jpg',
  './transition1.jpg', './transition2.jpg', './transition3.jpg', './transition4.jpg',
  './academic1.jpg', './academic2.jpg', './academic3.jpg',
  './selflearn1.jpg', './selflearn2.jpg', './selflearn3.jpg',
  './global1.jpg', './global2.jpg', './global3.jpg', './global4.jpg',
  './reading1.jpg', './reading2.jpg', './reading3.jpg',
  './uniform1.jpg', './uniform2.jpg', './uniform3.jpg', './uniform4.jpg',
  './caring1.jpg', './caring2.jpg', './caring3.jpg', './caring4.jpg',
  './future1.jpg',
  './steam1.jpg', './steam2.jpg', './steam3.jpg', './steam4.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
