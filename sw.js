/* Service worker del Repaso Dominical: deja la app disponible sin internet.
   build.py reemplaza a2e1140aae en cada build para que el teléfono descargue la versión nueva. */
const CACHE = 'repaso-a2e1140aae';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;
  // Lo que no es de este sitio (p. ej. la API del tutor con Gemini) va directo a internet: nunca se guarda en caché.
  if(new URL(req.url).origin !== self.location.origin) return;
  // La página: primero red (para recibir versiones nuevas), si no hay internet, caché.
  if(req.mode === 'navigate' || req.destination === 'document'){
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  // Íconos y manifest: primero caché.
  e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })));
});
