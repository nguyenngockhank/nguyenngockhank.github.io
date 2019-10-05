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
    "revision": "ea8b674bce7a51346e529ab8e07d8b84"
  },
  {
    "url": "assets/css/0.styles.df57f1a4.css",
    "revision": "b92b37aa697c4e03f01ac9da2796c4e5"
  },
  {
    "url": "assets/img/additional-info.0c72bf29.jpg",
    "revision": "0c72bf29abe8d664f4d0da31dab3a6a6"
  },
  {
    "url": "assets/img/consequence.9a84cc4f.jpg",
    "revision": "9a84cc4f3f769cd514582d5414e16f0f"
  },
  {
    "url": "assets/img/describe-moon.b6799e2a.jpg",
    "revision": "b6799e2a4c8cf3df065c8d23f85565f4"
  },
  {
    "url": "assets/img/describe-person.084f5b93.jpg",
    "revision": "084f5b93ee171ec232a279a6438ba98a"
  },
  {
    "url": "assets/img/dong-vien.5170ad1d.jpg",
    "revision": "5170ad1d85159764a86799d08703dfb5"
  },
  {
    "url": "assets/img/example.9854374f.jpg",
    "revision": "9854374f2ac0b7440905a0525cbdce15"
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
    "url": "assets/img/im-feelings.ebf0fe91.jpg",
    "revision": "ebf0fe9116caf087081cc178eb812555"
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
    "url": "assets/img/summary.113c4608.jpg",
    "revision": "113c46086b55c55b3e323ca8bc207579"
  },
  {
    "url": "assets/img/time.09d80789.jpg",
    "revision": "09d80789b6d2cf391c537d9726b99fdd"
  },
  {
    "url": "assets/js/10.54728167.js",
    "revision": "b3bfe105da94ce9d3585a5569837620c"
  },
  {
    "url": "assets/js/11.39a53cbf.js",
    "revision": "f1b5155c23b15282174b8ffeb05618ca"
  },
  {
    "url": "assets/js/2.bf69435f.js",
    "revision": "9cbf1cffa003d3c20ae60536a8276235"
  },
  {
    "url": "assets/js/3.fe5d40be.js",
    "revision": "454cce30ad2d5bb0b07f3b8d4685d3e9"
  },
  {
    "url": "assets/js/4.56f1cc01.js",
    "revision": "6f6a6b78f5e09b74075fdba2f2a17ccd"
  },
  {
    "url": "assets/js/5.de3eb71c.js",
    "revision": "6bbe64af170da6ae8ee627117b680920"
  },
  {
    "url": "assets/js/6.a45d07d5.js",
    "revision": "4dfb5fa88814f189387d2a07bcbf0b25"
  },
  {
    "url": "assets/js/7.19112731.js",
    "revision": "143640d4ec09ff58e4657d79f4bbda11"
  },
  {
    "url": "assets/js/8.7f839ae9.js",
    "revision": "731b0e5697797ca8c90109d55659ce5e"
  },
  {
    "url": "assets/js/9.1dd0e1e5.js",
    "revision": "92cad789888cf4f5837e8979c6393580"
  },
  {
    "url": "assets/js/app.28ff6029.js",
    "revision": "65a8692f197f61e1ee223cd4e424882a"
  },
  {
    "url": "index.html",
    "revision": "8c4ab4531866433846c2afe8b227e7e3"
  },
  {
    "url": "voka/describe.html",
    "revision": "eec232181487051e6d3ac3251e167769"
  },
  {
    "url": "voka/feelings.html",
    "revision": "c702e9d52724c90de1f92ac5553ed4b1"
  },
  {
    "url": "voka/positive.html",
    "revision": "d1a5f1c0dcd3a900b57d2a7a48605a5a"
  },
  {
    "url": "voka/very.html",
    "revision": "004de9af113a5e71d0dbded67f97634d"
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
