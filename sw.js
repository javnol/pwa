var nombreCache = 'uno';
self.addEventListener(
    'install',
    function(event){
        event.waitUntil(
            caches.open(nombreCache)
            .then(
                function(cache){
                    cache.addAll(
                        [
                            './script.js',
                            './descarga.png'
                        ]
                    );
                }
            )
        );
    }
);

self.addEventListener(
    'fetch', 
    function(event) {
        event.respondWith( 
            caches.match(event.request)
            .then(
                function(respuesta){
                    if(respuesta){ return respuesta; }
                    return fetch(event.request);
                }
            ) 
        );
    }
); 