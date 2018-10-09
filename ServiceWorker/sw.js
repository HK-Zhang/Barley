// self.addEventListener('install', event => {
//     console.log('V1 installing…');
//     // cache a cat SVG
//     event.waitUntil(
//         caches.open('static-v1').then(cache => cache.add('cat.svg'))
//     );
// });

// self.addEventListener('activate', event => {
//     // You can take control of uncontrolled clients by calling clients.claim() within your service worker once it's activated.
//     // You should see a cat the first time. 
//     // clients.claim();
//     console.log('V1 now ready to handle fetches!');
// });

// self.addEventListener('fetch', event => {
//     const url = new URL(event.request.url);

//     // serve the cat SVG from the cache if the request is
//     // same-origin and the path is '/dog.svg'
//     if (url.origin == location.origin && url.pathname.endsWith('/dog.svg')) {
//         event.respondWith(caches.match('cat.svg'));
//     }
// });

// experiment two: commnet above code and uncomment below code.
const expectedCaches = ['static-v2'];

self.addEventListener('install', event => {
    console.log('V2 installing…');

    //  you can make your new service worker activate sooner by calling self.skipWaiting().
    self.skipWaiting();
    // cache a horse SVG into a new cache, static-v2
    event.waitUntil(
        caches.open('static-v2').then(cache => cache.add('/horse.svg'))
    );
});

self.addEventListener('activate', event => {
    // delete any caches that aren't in expectedCaches
    // which will get rid of static-v1
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.map(key => {
                if (!expectedCaches.includes(key)) {
                    return caches.delete(key);
                }
            })
        )).then(() => {
            console.log('V2 now ready to handle fetches!');
        })
    );
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // serve the horse SVG from the cache if the request is
    // same-origin and the path is '/dog.svg'
    if (url.origin == location.origin && url.pathname == '/dog.svg') {
        event.respondWith(caches.match('/horse.svg'));
    }
});