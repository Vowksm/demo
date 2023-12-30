// Service Worker code for caching and offline support
const cacheName = 'your-web-app-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/styles.css',
  // Add other files you want to cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
