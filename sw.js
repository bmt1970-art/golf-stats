const CACHE = 'golf-stats-v68';
const FILES = ['./data.js', './clubs.js', './scorecards.js', './full_courses.js', './gps_all.js', './course_geo.js', './green_relief.js', './green_surface.js', './putt_motor.js', './manifest.json', './putt.webmanifest'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
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
  // putt.html: tambe des de xarxa, pero se'n desa copia per poder-la obrir sense cobertura al camp
  if (url.pathname.endsWith('/putt.html')) {
    e.respondWith(
      fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(k => k.put('./putt.html', c)); return r; })
        .catch(() => caches.match('./putt.html'))
    );
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
