const  staticCacheName = 'site-static';
const assets =[
  '/',
  '/index.html',
  '/about.html',
  'contact.html',
  'portfolio.html',
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
  '/images/pk.jpg'


];

self.addEventListener('install', function(event) {
  // Perform install steps
});



self.addEventListener('activate',evt =>{
// console.log('Im ALIVE BITCH!!');
});

self.addEventListener('fetch',evt=>{
  // console.log('fetch event',evt);
});
