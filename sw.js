const cacheName = 'cacheSite'
self.addEventListener ('install', function(event){

    event.waitUntil(

        caches.open(cacheName).then(function(cache){

            cache.addAll ([
                'https://github.com/NuraPechliye/QuizMap.git/./',
                'https://github.com/NuraPechliye/QuizMap.git/index.html',
                'https://github.com/NuraPechliye/QuizMap.git/sw.js',
                'https://github.com/NuraPechliye/QuizMap.git/index.js',
                'https://github.com/NuraPechliye/QuizMap.git/style.css',//
                'https://github.com/NuraPechliye/QuizMap.git/game.html',
                'https://github.com/NuraPechliye/QuizMap.git/game.css',
                'https://github.com/NuraPechliye/QuizMap.git/sw.js',
                'https://github.com/NuraPechliye/QuizMap.git/manifest.json',
                'https://github.com/NuraPechliye/QuizMap.git/quiz.js',
                'https://github.com/NuraPechliye/QuizMap.git/rascunhojs.js',
                'https://github.com/NuraPechliye/QuizMap.git/comojogar.html',
                'https://github.com/NuraPechliye/QuizMap.git/custom.geo.json',
                'https://github.com/NuraPechliye/QuizMap.git/imagens/mapa blur.png',
                'https://github.com/NuraPechliye/QuizMap.git/imagens/mapa inicio.png',
                'https://github.com/NuraPechliye/QuizMap.git/img/web-app-manifest-192x192.png.png',
                'https://github.com/NuraPechliye/QuizMap.git/img/web-app-manifest-512x512.png',
                'https://github.com/NuraPechliye/QuizMap.git/img/icon-152x152.png',
                'https://github.com/NuraPechliye/QuizMap.git/img/icon-192x192.png',
                'https://github.com/NuraPechliye/QuizMap.git/img/icon-256x256.png',
                'https://github.com/NuraPechliye/QuizMap.git/img/icon-384x384.png',
                'https://github.com/NuraPechliye/QuizMap.git/img/icon-512x512.png'


            ])

        })

    ) .then(() => self.skipWaiting())

})

self.addEventListener('activate', e =>{

    self.clients.claim()

})

self.addEventListener ('fetch', async e => {

    const req = e.request
    const url = new URL(req.url)

    if(url.origin === location.origin){


        e.respondWith(cacheFirst(req))

    } else {

        e.respondWith(networkAndCache(req))

    }

})

async function cacheFirst(req) {
    const cache = await caches.open(cacheName)
    const cached = await cache.match(req) 

    return cached || fetch(req)
    
}

async function networkAndCache(req) {

    const cache = await caches.open(cacheName)

    try {
        const refresh = await fetch(req)
        await cache.put(req, refresh.clone())
        return refresh
    } catch(e) {
        const cached = await cache.match(req)
        return cached
    }
    
}