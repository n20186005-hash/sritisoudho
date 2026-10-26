/* জাতীয় স্মৃতিসৌধ দর্শনার্থী গাইড · Service Worker
 * v2026-10-25
 * - navigate (HTML): network-first → fallback cached same page → offline503
 * - static assets (JS/CSS/IMG/SVG): stale-while-revalidate
 * - same-origin only
 */
const VERSION = 'nmm-guide-v2026-10-25';
const CORE = [VERSION, 'shell-v1'].join('-');
const SHELL = ['/', '/images/smritisoudho-reflection.svg', '/images/smritisoudho-aerial.svg', '/images/smritisoudho-walkway.svg', '/images/smritisoudho-detail.svg', '/favicon.svg', '/site.webmanifest'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CORE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CORE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        if(res.status===200)caches.open(CORE).then((c) => c.put(req, copy)).catch(()=>{});
        return res;
      }).catch(() => caches.match(req).then((c) => c || new Response('Offline — reconnect to open this page.',{status:503,headers:{'content-type':'text/plain; charset=utf-8'}})))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          if(res.status===200)caches.open(CORE).then((c) => c.put(req, copy)).catch(()=>{});
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
