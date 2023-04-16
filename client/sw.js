const CACHE_NAME = 'codeless-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/assets/bot.svg',
  '/assets/user.svg',
  '/assets/send.svg',
  '/assets/cats.png',
  '/assets/cropped.jpeg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(error => console.log('Error adding to cache', error))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(error => console.log('Error fetching from cache', error))
  );
});
