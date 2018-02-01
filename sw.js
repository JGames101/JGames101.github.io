var CACHE_NAME = 'siteContainer';
var urlsToCache = [
  '/',
  '/styles/styles.css',
  '/javascript.js',
  '/js/jquery-3.2.1.min.js',
  '/js/am.js',
  '/code/',
  '/media/',
  '/src/updates/',
  '/page.js',
  '/src/latest.json',
  '/src/app.html'
];


self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
          .then(function(cache) {
            return cache.addAll(urlsToCache);
          })
    );    
});

self.addEventListener('fetch', function(event) {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  };
});
  