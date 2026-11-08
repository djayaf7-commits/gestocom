const CACHE_NAME = 'gestocom-v3';
const ASSETS = ['/', '/index.html', '/manifest.json', '/favicon.png', '/vendor/supabase.js', '/icons/icon-192.png', '/icons/icon-512.png'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(cache => Promise.all(ASSETS.map(a => cache.add(a).catch(()=>{})))));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Ne gère que les requetes GET de notre propre site.
  // Les appels vers Supabase (autre domaine) passent sans etre interceptes,
  // pour ne jamais mettre en cache des donnees dynamiques.
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res && res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request, {ignoreSearch: true})
        .then(r => r || (e.request.mode === 'navigate' ? caches.match('/index.html') : undefined)))
  );
});
