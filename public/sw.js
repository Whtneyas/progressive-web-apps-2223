const staticCacheName = 'site-static';
const assets = [
    '/',
    '/offline',
    '/css/styles.css',
    'https://fonts.googleapis.com/css2?family=Athiti:wght@300;400&family=Tilt+Prism&display=swap'
]

//install service worker 
self.addEventListener('install', evt => {
    self.skipWaiting();
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
   
});

//activate service worker
self.addEventListener('activate', evt => {
    // console.log('service worker has been activated');
});

//fetch events
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt)

});