const CACHE_NAME = 'sg-itinerary-v2';
const ASSETS = [
    './',
    './index.html',
    './singapore_itinerary_optimized.html',
    './favicon.svg',
    './og-preview.png',
    './icon-192.png',
    './icon-384.png',
    './manifest.json'
];

// 1. Install 階段：立刻緩存核心資源
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});

// 2. Activate 階段：清除舊快取並接管頁面
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

// 3. Fetch 階段：Stale-while-revalidate (有快取先全還快取，背景順便更新)
self.addEventListener('fetch', event => {
    const { request } = event;
    
    // 略過非 GET 請求以及開發工具請求
    if (request.method !== 'GET' || request.url.includes('chrome-extension')) {
        return;
    }

    event.respondWith(
        caches.match(request).then(cachedResponse => {
            // 背景非同步發起網路請求，更新目前的快取
            const fetchPromise = fetch(request).then(networkResponse => {
                if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(request, responseClone);
                    });
                }
                return networkResponse;
            }).catch(() => {
                // 如果完全斷網且沒有快取，若是導航則退回首頁
                if (!cachedResponse && request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
            });

            // 策略：有 Cache 就秒還（離線或快速），沒有才等網路
            return cachedResponse || fetchPromise;
        })
    );
});
