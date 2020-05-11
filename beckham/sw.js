const  staticCacheName = 'site-static';
const assets =[
  '/',
  '/index.html',
  '/fallback.html',
  '/about.html',
  '/portfolio.html',
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
addEventListener('install', (event) => {
  event.waitUntil(async function() {
    const cache = await caches.open('static-v1');
    await cache.addAll(assets);
  }());
});

// See https://developers.google.com/web/updates/2017/02/navigation-preload#activating_navigation_preload
addEventListener('activate', event => {
  event.waitUntil(async function() {
    // Feature-detect
    if (self.registration.navigationPreload) {
      // Enable navigation preloads!
      await self.registration.navigationPreload.enable();
    }
  }());
});

addEventListener('fetch', (event) => {
  const { request } = event;

  // Always bypass for range requests, due to browser bugs
  if (request.headers.has('range')) return;
  event.respondWith(async function() {
    // Try to get from the cache:
    const cachedResponse = await caches.match(request);
    if (cachedResponse) return cachedResponse;

    try {
      // See https://developers.google.com/web/updates/2017/02/navigation-preload#using_the_preloaded_response
      const response = await event.preloadResponse;
      if (response) return response;

      // Otherwise, get from the network
      return await fetch(request);
    } catch (err) {
      // If this was a navigation, show the offline page:
      if (request.mode === 'navigate') {
        return caches.match('/fallback.html');
      }

      // Otherwise throw
      throw err;
    }
  }());
});
