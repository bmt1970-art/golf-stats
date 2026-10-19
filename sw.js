const CACHE = 'golf-stats-v97';
const FILES = ['./data.js', './clubs.js', './scorecards.js', './full_courses.js', './gps_all.js', './course_geo.js', './green_relief.js', './green_surface.js', './flag_history.js', './putt_motor.js', './pano_caddie.js', './manifest.json', './putt.webmanifest'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE && !k.startsWith('pano-rajoles')).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // index.html sempre des de xarxa (network-first) per evitar cache vella
  if (url.pathname === '/' || url.pathname.endsWith('/index.html')) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match('./index.html'))
    );
    return;
  }
  // putt.html i caddie.html: tambe des de xarxa, pero se'n desa copia per poder-les obrir sense cobertura al camp
  const pag = ['putt.html', 'caddie.html'].find(f => url.pathname.endsWith('/' + f));
  if (pag) {
    e.respondWith(
      fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(k => k.put('./' + pag, c)); return r; })
        .catch(() => caches.match('./' + pag))
    );
    return;
  }
  // plànol del Panoramica (rajoles de l'ortofoto): primer la memoria que el caddie hi ha desat
  if (url.pathname.includes('/rajoles/') && url.pathname.endsWith('.webp')) {
    e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
    return;
  }
  // Leaflet (unpkg): primer la memoria, i se'n desa copia, perque el mapa s'obri sense cobertura
  if (url.hostname === 'unpkg.com' && url.pathname.includes('/leaflet@')) {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(x => {
      const c = x.clone(); caches.open(CACHE).then(k => k.put(e.request, c)); return x;
    })));
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
