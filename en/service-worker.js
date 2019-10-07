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
    "revision": "7913e6ec84333643f0cf1ec6544e3c59"
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
    "url": "assets/js/11.5854bbe6.js",
    "revision": "72a90aae8ef111c6748d31d8970fc385"
  },
  {
    "url": "assets/js/12.0f4dc723.js",
    "revision": "389ba8b304f9c96d73940696ef2ee2fe"
  },
  {
    "url": "assets/js/13.17748898.js",
    "revision": "1a57c627e983795e1a5dc37fe00be327"
  },
  {
    "url": "assets/js/14.0afdde75.js",
    "revision": "d1481bcc6aff8dcb56c8b1c1e3c3b293"
  },
  {
    "url": "assets/js/15.f14c080b.js",
    "revision": "06ce7b9b392ffe7f6977ee922374b629"
  },
  {
    "url": "assets/js/16.40069c93.js",
    "revision": "3496db2d531f9d736851d96c9824ea48"
  },
  {
    "url": "assets/js/17.cb350787.js",
    "revision": "55811a816ff8472e1f2a6787593f9a99"
  },
  {
    "url": "assets/js/2.e4ebc8c8.js",
    "revision": "1483b985cb3642f2fc9a988bcd17646f"
  },
  {
    "url": "assets/js/3.5499697b.js",
    "revision": "9c78e6bc181f16e660f635812c3dd8ee"
  },
  {
    "url": "assets/js/4.0574dd80.js",
    "revision": "239e93e0b2335abfa217c687a005bda6"
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
    "url": "assets/js/7.3a417c30.js",
    "revision": "3238841e8e74599da61d00284e5f9a8e"
  },
  {
    "url": "assets/js/8.cdc5af20.js",
    "revision": "22890837fa9af2fab8daef4162c5f811"
  },
  {
    "url": "assets/js/9.163fd518.js",
    "revision": "ef9cac71817acfae8e2c05f80a1b4ea7"
  },
  {
    "url": "assets/js/app.783cd51b.js",
    "revision": "c2cb204c8d89b7c34d27d9d84ea4a186"
  },
  {
    "url": "grammar/also-too-aswell.html",
    "revision": "7343264c957ed020060bc0fecf691d7e"
  },
  {
    "url": "grammar/maybe.html",
    "revision": "00fe9a7c95c701edbe6c4ff556a35e3b"
  },
  {
    "url": "grammar/modal-verbs.html",
    "revision": "2032bb9e6d973c6de8cc9ff14a9c6791"
  },
  {
    "url": "grammar/neither-either.html",
    "revision": "e69ebf714611e3e6072dd7ea5480cd29"
  },
  {
    "url": "grammar/part-of-speech.html",
    "revision": "de6e46f7d0b5d24fdbfb5fa898bc69ed"
  },
  {
    "url": "grammar/say.html",
    "revision": "86b8e60111ed9e9484258bb7a48a62f3"
  },
  {
    "url": "index.html",
    "revision": "c12aea394bc25d81ddbc33bd7c73d781"
  },
  {
    "url": "voka/describe.html",
    "revision": "1ac65cc6e7ae4626b3560dd74ddee0ae"
  },
  {
    "url": "voka/feelings.html",
    "revision": "c0610deb94c7d89c6f89a9d077b9cdba"
  },
  {
    "url": "voka/positive.html",
    "revision": "88e9880603199549435aefc040f8c78c"
  },
  {
    "url": "voka/very.html",
    "revision": "e96753577c04c1b82be42508241e2ff3"
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
