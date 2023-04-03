const staticCacheName = 'site-static-v2';
const dynamicCache = 'site-dynamic'
const assets = [
    '/',
    '/offline',
    '/css/styles.css',
    'https://fonts.googleapis.com/css2?family=Athiti:wght@300;400&family=Tilt+Prism&display=swap',
    '(https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wAoDBCEfe_Kdxic2wp.woff2'
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
//dynamic caching


//activate service worker
self.addEventListener('activate', evt => {
    // console.log('service worker has been activated');

    evt.waitUnil(
        caches.keys().then(keys => {
            // console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCache)
                .map(key => caches.delete(key))
            )
        })
    )
});

//fetch events
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCache).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone())
                    return fetchRes;
                })
            });
        }).catch(() => caches.match('/offline'))

    );


});

