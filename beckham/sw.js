const staticCacheName = 'site-static-v2';
const dynamicCacheName = 'site-dynamic-v1';
const assets = [
'/',
  '/index.html',
  '/fallback.html',
  '/about.html',
  '/portfolio.html',
  '/portfolio2.html',
  '/js/aos.js',
  '/js/app.js',
  '/js/bootstrap-datepicker.js',
  '/js/bootstrap.min.js',
  '/js/google-map.js',
  '/js/jquery-3.2.1.min.js',
  '/js/jquery-migrate-3.0.1.min.js',
  '/js/jquery.animateNumber.min.js',
  '/js/jquery.easing.1.3.js',
  '/js/jquery.magnific-popup.min.js',
  '/js/jquery.min.js',
  '/js/jquery.stellar.min.js',
  '/js/jquery.timepicker.min.js',
  '/js/jquery.waypoints.min.js',
  '/js/main.js',
  '/js/owl.carousel.min.js',
  '/js/popper.min.js',
  '/js/scrollax.min.js',
  '/images/20200301_225917.jpg',
  '/images/image_3.jpg',
  '/images/image_4.jpg',
  '/images/image_5.jpg',
  '/images/image_6.jpg',
  '/images/IMG-20191212-WA0018.jpg',
  '/images/IMG20191222210621.jpg',
  '/images/pk.jpg',
  '/images/tindog.png',
  '/images/dice.png',
  '/images/drum.png',
  '/images/dailyJournal.png',
  '/images/Todolist.png',
'https://fonts.googleapis.com/css?family=Poppins:300,400,700',
'/css/bootstrap/bootstrap-grid.css',
'/css/bootstrap/bootstrap-reboot.css',
'/css/css/mixins/_text-hide.css',
'/css/css/bootstrap-reboot.css',
'/css/animate.css',
'/css/aos.css',
'/css/bootstrap-datepicker.css',
'/css/bootstrap.min.css',
'/css/flaticon.css',
'/css/icomoon.css',
'/css/ionicons.min.css',
'/css/jquery.timepicker.css',
'/css/magnific-popup.css',
'/css/open-iconic-bootstrap.min.css',
'/css/owl.carousel.min.css',
'/css/owl.theme.default.min.css',
'/css/style.css'

];

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      //console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          return fetchRes;
        })
      });
    }).catch(() => caches.match('/fallback.html'))
  );
});
