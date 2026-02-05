// sw.js
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // 必须监听 fetch 事件，哪怕不处理任何逻辑
  event.respondWith(fetch(event.request));
});
