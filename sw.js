/* Zondi Horizon Flock Tracker — service worker
   Cache-first shell so the app opens instantly and works with no signal.
   Never caches the Apps Script sync calls — farm data must always be live. */

const CACHE = 'zondi-v2-0';
const SHELL = ['./','./index.html','./manifest.webmanifest',
  './icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.hostname.includes('script.google.com') || url.hostname.includes('googleusercontent.com')) return;
  if (e.request.method !== 'GET') return;

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
