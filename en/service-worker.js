/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "705427aa88e7fae742d0c3ad451082b8"
  },
  {
    "url": "assets/css/0.styles.df57f1a4.css",
    "revision": "b92b37aa697c4e03f01ac9da2796c4e5"
  },
  {
    "url": "assets/img/describe-person.084f5b93.jpg",
    "revision": "084f5b93ee171ec232a279a6438ba98a"
  },
  {
    "url": "assets/img/feelings.1381570d.jpg",
    "revision": "1381570dd4b0aa306a8f80a28089cfc3"
  },
  {
    "url": "assets/img/feelings2.8c5b7c29.jpg",
    "revision": "8c5b7c291ec4921401d691f87185da38"
  },
  {
    "url": "assets/img/feelings3.0f3a7933.jpg",
    "revision": "0f3a793364d3ccc1cc402964f88f6cda"
  },
  {
    "url": "assets/img/no-very.827d0234.png",
    "revision": "827d02347198d5b8d9f27b47c1f57e57"
  },
  {
    "url": "assets/img/no-very.8a3ec19d.jpg",
    "revision": "8a3ec19d524e2ace878f8fd1da778777"
  },
  {
    "url": "assets/img/no-very2.9dee0691.jpg",
    "revision": "9dee0691bd259a985bcd9f775f244d47"
  },
  {
    "url": "assets/img/no-very3.6bf78840.jpg",
    "revision": "6bf78840301f6c16231bf45f3ebbaf00"
  },
  {
    "url": "assets/img/positive.bd4c2e93.jpg",
    "revision": "bd4c2e938d19c2441f2cd08e3019088b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.13c8d1e8.js",
    "revision": "5351c0c184519c97753fd4cf53298de8"
  },
  {
    "url": "assets/js/11.39a53cbf.js",
    "revision": "f1b5155c23b15282174b8ffeb05618ca"
  },
  {
    "url": "assets/js/2.06060d1e.js",
    "revision": "e53b015195cdf0b31c0cd458121d9006"
  },
  {
    "url": "assets/js/3.ba2c8116.js",
    "revision": "02189cfdcca97492d3a6c10d1f8e4bb8"
  },
  {
    "url": "assets/js/4.4c3493bd.js",
    "revision": "646bf92b75acf9f9857d07149d2e5892"
  },
  {
    "url": "assets/js/5.126ee033.js",
    "revision": "9d92c71e2677021eab9ece0140967ee2"
  },
  {
    "url": "assets/js/6.9e829597.js",
    "revision": "2b47d6e9344990b2dd96061fbf7a3fac"
  },
  {
    "url": "assets/js/7.ac4070aa.js",
    "revision": "3758a29cdfe5a8f12cc241f220135520"
  },
  {
    "url": "assets/js/8.f53d255f.js",
    "revision": "950e5c9699303bae43c2f88f626beff5"
  },
  {
    "url": "assets/js/9.2ac0813b.js",
    "revision": "9651a9ae3a7d137d09a51caa4efc5ecb"
  },
  {
    "url": "assets/js/app.3022d8f2.js",
    "revision": "b8b6f8f47870503b57d84c8e3f829e04"
  },
  {
    "url": "index.html",
    "revision": "fe125ed2ee72338345b6ca4976e3e5be"
  },
  {
    "url": "voka/describe.html",
    "revision": "3e34161f603fe7547a4d951237c8cd74"
  },
  {
    "url": "voka/feelings.html",
    "revision": "348a5f545baa832e9c0f7d0a5347f219"
  },
  {
    "url": "voka/positive.html",
    "revision": "146d34152ce5d5966e54649e786ad612"
  },
  {
    "url": "voka/very.html",
    "revision": "ede4d465f6b42fdb331d034556b6dce1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
