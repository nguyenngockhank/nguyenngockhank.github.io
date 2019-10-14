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
    "revision": "ae12eedb8cfb900e183c25256834f19a"
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
    "url": "assets/img/also-too-aswell.07ac68d1.jpg",
    "revision": "07ac68d17fc4b9161baec9ebde6dbaeb"
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
    "url": "assets/img/maybe.d4336193.jpg",
    "revision": "d4336193597f183546ab312dbcd9a799"
  },
  {
    "url": "assets/img/modal-verbs.1871cb3e.jpg",
    "revision": "1871cb3e52a0919109a3cc7530f55b45"
  },
  {
    "url": "assets/img/neither-either.1dfb7651.jpg",
    "revision": "1dfb7651c568b61a9365e06178bd8d33"
  },
  {
    "url": "assets/img/partofspeech.e9b7de61.jpg",
    "revision": "e9b7de613769a7062688f139bbcf9c4a"
  },
  {
    "url": "assets/img/positive.bd4c2e93.jpg",
    "revision": "bd4c2e938d19c2441f2cd08e3019088b"
  },
  {
    "url": "assets/img/say.32ea6f0e.jpg",
    "revision": "32ea6f0e054126d8f47af6eff2328607"
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
    "url": "assets/js/10.91fee16d.js",
    "revision": "93603578b905585531618b56e34b34b2"
  },
  {
    "url": "assets/js/11.fdd60184.js",
    "revision": "db65e7c7ab624188dfd92450eb5c926a"
  },
  {
    "url": "assets/js/12.19907037.js",
    "revision": "ad2c9bf391f204e5c80c936037ab78de"
  },
  {
    "url": "assets/js/13.3575c370.js",
    "revision": "f2ef549368e992866e7553443b4534e8"
  },
  {
    "url": "assets/js/14.06e0084e.js",
    "revision": "6452bfe4add0e554d3c73b8927a67d77"
  },
  {
    "url": "assets/js/15.f14c080b.js",
    "revision": "06ce7b9b392ffe7f6977ee922374b629"
  },
  {
    "url": "assets/js/16.ad77fcbf.js",
    "revision": "2d2338cc889fa39cd1e8d45eb47c4150"
  },
  {
    "url": "assets/js/17.71ec9c9e.js",
    "revision": "830faeaf293eb16f99bf0305e88dc82a"
  },
  {
    "url": "assets/js/18.1a2c0ab1.js",
    "revision": "49ee38d29b1cfb90e6b786c91aa7c4fd"
  },
  {
    "url": "assets/js/19.5794f02e.js",
    "revision": "47e0b17318b978c2a4a62edb2ab309ab"
  },
  {
    "url": "assets/js/2.e4ebc8c8.js",
    "revision": "1483b985cb3642f2fc9a988bcd17646f"
  },
  {
    "url": "assets/js/3.4040077e.js",
    "revision": "b6b72b55f082ef28e3977851cbf95e6e"
  },
  {
    "url": "assets/js/4.92891769.js",
    "revision": "744cf0ae5a9f966cac3dd4407a8d0121"
  },
  {
    "url": "assets/js/5.1b35d4d0.js",
    "revision": "3233766f4dc41e61fb16e9be3a223c29"
  },
  {
    "url": "assets/js/6.da3b5d17.js",
    "revision": "56edee008ab539b9b970aec713733ddb"
  },
  {
    "url": "assets/js/7.b6bb3daa.js",
    "revision": "3ff2a6339fdd8f591f0643009069c803"
  },
  {
    "url": "assets/js/8.761fa63b.js",
    "revision": "fbbd1f6a1d88838cdf7e4ce153c1316d"
  },
  {
    "url": "assets/js/9.27fae11a.js",
    "revision": "838616f0e7acdd1e0e2f46b724872456"
  },
  {
    "url": "assets/js/app.f8d6d337.js",
    "revision": "d30dd35b9463bd6dd7683cf85bf03384"
  },
  {
    "url": "grammar/also-too-aswell.html",
    "revision": "df3d58542d81156bf2d623a9e6a0664e"
  },
  {
    "url": "grammar/maybe.html",
    "revision": "7bda144bc9087c3c71d644dcae216335"
  },
  {
    "url": "grammar/modal-verbs.html",
    "revision": "c050fce21c28b601ce14945bc749acb2"
  },
  {
    "url": "grammar/neither-either.html",
    "revision": "78414535a19cc4c69279783eac5b0429"
  },
  {
    "url": "grammar/part-of-speech.html",
    "revision": "43497138268d1d3691ff58813aad4309"
  },
  {
    "url": "grammar/say.html",
    "revision": "f966e847776a41332bf43ff1c4c6e9f3"
  },
  {
    "url": "index.html",
    "revision": "c408aeffa2c8ed338b74495feff8bc05"
  },
  {
    "url": "me/synonym.html",
    "revision": "71b2c71d98d4480bcf2913905a1ffc1f"
  },
  {
    "url": "voka/describe.html",
    "revision": "7e167d33c59f8055183e6a08992749c2"
  },
  {
    "url": "voka/feelings.html",
    "revision": "d29ad05c303f00f9766161932bb57c28"
  },
  {
    "url": "voka/nha.html",
    "revision": "65ed53fc2c61ece3e6ef5f3c69588fa6"
  },
  {
    "url": "voka/positive.html",
    "revision": "9b1e3816af25b002bdf4fbb6337e0eee"
  },
  {
    "url": "voka/very.html",
    "revision": "435203c6300ec782876a32c15bb8ea41"
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
