/* Zondi Horizon Flock Tracker — service worker
   ---------------------------------------------------------------
   The app is deployed from GitHub to Netlify, so a new version can
   land at any time. Strategy:

     · the page itself  → network first, cache as fallback
       (a deploy reaches every phone on the next open, not the one after)
     · icons and assets → cache first, refreshed in the background
     · Apps Script sync → never cached, always live

   Offline still works fully: if the network fails for any reason the
   cached page is served immediately.
   --------------------------------------------------------------- */

const CACHE = 'zondi-v2-1';
const SHELL = ['./', './index.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

function isPage(req) {
  return req.mode === 'navigate' ||
         (req.destination === 'document') ||
         new URL(req.url).pathname.endsWith('/index.html');
}

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  /* farm data must never come from a cache */
  if (url.hostname.includes('script.google.com') ||
      url.hostname.includes('googleusercontent.com')) return;
  if (e.request.method !== 'GET') return;

  /* the page: network first, so a new deploy is picked up straight away */
  if (isPage(e.request)) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put('./index.html', copy));
          }
          return res;
        })
        .catch(() => caches.match('./index.html').then(hit => hit || caches.match('./')))
    );
    return;
  }

  /* everything else: cache first, refreshed quietly in the background */
  e.respondWith(caches.match(e.request).then(hit => {
    if (hit) {
      fetch(e.request).then(res => {
        if (res && res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()));
      }).catch(() => {});
      return hit;
    }
    return fetch(e.request).then(res => {
      if (res && res.ok && url.origin === location.origin) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match('./index.html'));
  }));
});

/* let the app ask for an immediate update */
self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting(); });
