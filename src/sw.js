self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/index.html',
        '/inline.bundle.js',
        '/main.bundle.js',
        '/polyfills.bundle.js',
        '/styles.bundle.js',
        '/vendor.bundle.js',
        '/bootstrap.min.css',
        '/material-design-iconic-font.min.css'
      ])
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request.url)
          .then(response => {
            return response || fetch(event.request)
          })
  )
})