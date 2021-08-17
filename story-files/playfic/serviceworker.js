
var storeNameRegex = /alexandria-/;
var CACHE_NAME = "alexandria-374dd737b1a4aa9abdd3225deeae78a9";
var urlsToCache = [".","alertify.css?hash=2b569c7db1a52252e13bd94d4aab418a","alertify.min.js?hash=0485134254358c184ec306fdff1add6d","alexandria.png?hash=e2cbd112f1060b5fed3e43f989f07c6b","chap1.png?hash=f87a35182ecbcd0de62ff8e74ee3b9ed","chap2.png?hash=8f8103aabc777711136dc8eaed6530c2","chap3.png?hash=5e67a1ad40e6265cf9c0c02421f4db6e","chap4.png?hash=4d4b05b609adf92770346219cc367054","chap5.png?hash=15e1e66af8621cf0c987cb726efec636","chap6.png?hash=363492ee56ef869426b6d783e38781cb","chap7.png?hash=52f11e616fa794d77a13a50bc2c2f5e6","credits.html","fastclick.js?hash=540e11a9170e126502bdf17c14b90ba5","icon.jpg?hash=0a89345302d6626ec0bf678e51017629","index.html","inventions.png?hash=3712c7dbd7bac62b6fe8c7e6ab7aea17","librarian.png?hash=c0d3f39cc59e60e8e2c4c7d8d64e1187","mygame.js?hash=a5b95ebc7bf7fa695293bef5c21e63f2","navigator.js?hash=5e540cb4c354ecffff867ca9dc48edbf","people.png?hash=8e888bfc274c03d26676afcd81e78c29","persist.js?hash=4f885a74b924594a482bfc2ca4928d58","scene.js?hash=d8053f3e7e52877d3a4aeeebe58a6c37","scenes/approach.txt.json?hash=3fcd3cbb99e16511d71a81050130ceb7","scenes/choicescript_description.txt.json?hash=a8a52725ad592528d43cb5bb2d1a04dc","scenes/choicescript_stats.txt.json?hash=d97ed5cb9d65c552dbbeaf736973edb2","scenes/choicescript_upgrade.txt.json?hash=e990b966ea46e5263b05b127024de7c9","scenes/progress.txt.json?hash=e5cec2fc2907eac24bb6fca3c56e82d4","scenes/screenshots.txt.json?hash=b319ff19c09663f65189bf0ed9a7efc3","scenes/startup.txt.json?hash=ca2ebbac4d9e63df71511099b6516533","style.css?hash=cf849d30f250959e2215e544efdcd729","ui.js?hash=54ff28c198e38234ed0bfc075a1edb9d","util.js?hash=01aae7d617111837163b99a79cfac162","version.js?hash=f5402048f29953757279c04fca81b29f"];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      }).then(() => console.log("[ServiceWorker] installed, possibly waiting"))
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith((async () => {
    if (event.request.mode === "navigate" &&
      event.request.method === "GET" &&
      registration.waiting &&
      (await clients.matchAll()).length < 2
    ) {
      registration.waiting.postMessage('skipWaiting');
      console.log("[ServiceWorker] refreshing and skipping waiting");
      return new Response("", {headers: {"Refresh": "0"}});
    }
    return await caches.match(event.request) ||
      fetch(event.request);
  })());
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(keyList => Promise.all(keyList.map(key => {
      if (storeNameRegex.test(key) && key !== CACHE_NAME) {
        console.log("[ServiceWorker] deleting", key);
        return caches.delete(key);
      }
    })))
  );
});

self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    console.log("[ServiceWorker]", CACHE_NAME, 'skipWaiting');
    skipWaiting();
  }
});