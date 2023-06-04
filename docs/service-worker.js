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
    "revision": "0d37785ac691d3ae9065a0136979e437"
  },
  {
    "url": "ai/AI-note.html",
    "revision": "9287f3703d30c4974a48c5754817cb17"
  },
  {
    "url": "algorithm/async-processing/index.html",
    "revision": "2b4505c31cc04dcb3b7585c35389c02e"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "daab5167b7836241ccd20706ad8af9fc"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "7c6bf92bac7af828274b7386d4f9e400"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "dcf861bdb8c1539be78dee7722e951bd"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "616456728a104709a33d553a303164c6"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "8ea9d5ae18583bce43d728f1cbb78e8d"
  },
  {
    "url": "algorithm/loadbalancer.html",
    "revision": "4acd3b19418e5a6ea82d3d6b5a3a2d0f"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "51b11a903c3f07e82edbd03e01a31e3b"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "d3fb69c405c5851865c9342de4d87e28"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "42f65319daf9f3e238aca3d971e275c7"
  },
  {
    "url": "algorithm/string.html",
    "revision": "5caff70e9f99a53e86f79d427c637e83"
  },
  {
    "url": "algorithm/sum100.html",
    "revision": "cb2e27bd3b389d9040f0578532227a60"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "7ac215e576712ef9dcd23d34e73d316b"
  },
  {
    "url": "algorithm/upload-large-file.html",
    "revision": "bb5ada36938806354af83be346caa857"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "d9a4d19696009274eb16406a1f5d91ea"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "bd9fd9077a12de8615c46b48581173f8"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "20f486e9a28f129af786fc8b8938d5fd"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "24f13e05f63ae942ada861de5c036bbd"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "d185b85f807b7e21f57f636ea96297e2"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "4ee48d26a91d34531622ee74c98aaa67"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "7e14f191e0f75bdd756c751d2d153efa"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "942bd0610161c69136f30b173405571e"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "84f28e08eaf5b05c64d3cf09a92a5c49"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "918b70c9acbe522923d8f05d849bb240"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "8a6263686129662b518eb3bb8f9f4bad"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "409f636e49bcd356b95edcfc9821c7aa"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "3194d63c307aafa12423523f68a7a4cd"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "39fe7e2cb0f3a926e3ba51beff1b8023"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "9c6f5a04ad683a9634b3d53a98e83eb5"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "d4331ee623d17b75c02654c0245acfc8"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "ba8c55d660f3b363d8bf4c68e62f5eed"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "841acccb5867f8fd45c1bf4c0265df41"
  },
  {
    "url": "api/index.html",
    "revision": "baf7ab61a010813b2b8d62ffc1dd7d24"
  },
  {
    "url": "api/rest-compare.html",
    "revision": "52514d3098179ed822a6c1297b3abf2e"
  },
  {
    "url": "architect/audit.html",
    "revision": "998fa480f252965746475847e99e0628"
  },
  {
    "url": "architect/authenication.html",
    "revision": "8ae9c046cc2f6824f6fb0c70ebcd464d"
  },
  {
    "url": "architect/authorization.html",
    "revision": "4985a0ae1365c6305c3bd8d6fdcd6cab"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "09039eff9864cc9c7c19a9c21abc6a88"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "2f71e4fc7139ee97eaa2b520cc6b737f"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "dfedb85995882408b5a14d956f748d5d"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "3a727881d436b9db5d174cacf42e7bcc"
  },
  {
    "url": "architect/ebi.html",
    "revision": "0db11411e670fed78ecd59021fd67440"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "a37c8bfa907df13b9aecb14967a01dc7"
  },
  {
    "url": "architect/fault-tolerance.html",
    "revision": "fc43e74cc864c52dfbdd9b8f6f093679"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "c8ed8de232288255a4f869103a95b74a"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "abb97a27a0afbae690aedaca679b769f"
  },
  {
    "url": "architect/index.html",
    "revision": "92e54cfcc39e6c1b2b46e656db255507"
  },
  {
    "url": "architect/jwt-handling.html",
    "revision": "79ad75f6aaa72dc719c9184b761eb176"
  },
  {
    "url": "architect/messaging.html",
    "revision": "cbe698c0a0cc148bb6d6a9a21edeee8b"
  },
  {
    "url": "architect/microservices.html",
    "revision": "e4316f025f4cc5e5ec72e7fbc0b146e6"
  },
  {
    "url": "architect/mutex.html",
    "revision": "64bed90d72f19a5e887b3c1179fa9a23"
  },
  {
    "url": "architect/notes.html",
    "revision": "d50c67dfffc74030faadb59658f091af"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "422c6efd33f38ef4cac3e160e430db8a"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "fa84fc37b280ece9ae42c20135b37ef9"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "bf625237b2c25e1ac70ac5dee890dce2"
  },
  {
    "url": "architect/refs.html",
    "revision": "20623120d4817398ea8e4c1c7a3b2227"
  },
  {
    "url": "architect/soa.html",
    "revision": "2bd0fb0e6cd51bf98210813e1b3f91b3"
  },
  {
    "url": "architect/spa.html",
    "revision": "714f0ce873bba95c8869ac556ca712ac"
  },
  {
    "url": "architect/sync-solution.html",
    "revision": "10420a6ba9697d20b94949bc2336f621"
  },
  {
    "url": "architect/system-design-cheatshet.html",
    "revision": "a47b79692b69ecd17883cceb47571837"
  },
  {
    "url": "architect/terms.html",
    "revision": "75fdde897e722c83df433742987b2e9f"
  },
  {
    "url": "architect/webservice.html",
    "revision": "05f09b03ce61b3738f74ada5b29742c1"
  },
  {
    "url": "assets/css/0.styles.13bbcd8a.css",
    "revision": "9e1d6d86be3b39ed76e2e9e26209219a"
  },
  {
    "url": "assets/img/1_layered.c1856c2d.png",
    "revision": "c1856c2defc8516a8be7aaa5a26d243e"
  },
  {
    "url": "assets/img/100-explicit-architecture.5eb5f993.png",
    "revision": "5eb5f99384a8b66e6147ec04fda5bb4d"
  },
  {
    "url": "assets/img/13.a207e005.png",
    "revision": "a207e0058d083b1bb10ed83560557c9d"
  },
  {
    "url": "assets/img/15.95e89a0c.png",
    "revision": "95e89a0cd9808a57ab914be3576f33f9"
  },
  {
    "url": "assets/img/16.c7f13aae.png",
    "revision": "c7f13aaed8df068f29d1af53dae4248d"
  },
  {
    "url": "assets/img/17.d637127a.png",
    "revision": "d637127aa817ee55cf8d0f6e48813023"
  },
  {
    "url": "assets/img/1980s-corba.b490df99.png",
    "revision": "b490df99a574ecc39787ebb68b4bb669"
  },
  {
    "url": "assets/img/1995s-message-queue.1be5adaf.jpg",
    "revision": "1be5adaf2cab8ba952122e603bfc4f75"
  },
  {
    "url": "assets/img/20.7a5b481f.png",
    "revision": "7a5b481f5f6c1eca03a5949ab49cf755"
  },
  {
    "url": "assets/img/2000s-soa.67186ec3.png",
    "revision": "67186ec39d6c5f5f7f619db8699c2306"
  },
  {
    "url": "assets/img/2006-1-cqrs.5ad4c9d7.png",
    "revision": "5ad4c9d78d2753d1df3a58579a64972f"
  },
  {
    "url": "assets/img/2010-microservices.f1ebc444.jpg",
    "revision": "f1ebc4446f4f2fbae666e3937a9239d0"
  },
  {
    "url": "assets/img/21.221dda3c.png",
    "revision": "221dda3c17e67dfc93ea7d35641c8c7f"
  },
  {
    "url": "assets/img/22.8b9bf521.png",
    "revision": "8b9bf521516ffae0c0b0c86a76b0163a"
  },
  {
    "url": "assets/img/23.5223f91f.png",
    "revision": "5223f91fc268790c8548aa904f49f1f9"
  },
  {
    "url": "assets/img/24.5dbc32ef.png",
    "revision": "5dbc32ef55b06e82a3add45a39193edb"
  },
  {
    "url": "assets/img/25.870b7b10.png",
    "revision": "870b7b1091d0fea89566af9b0bbe5038"
  },
  {
    "url": "assets/img/25854.8727e9fd.jpg",
    "revision": "8727e9fddbb936624415b56ef1350371"
  },
  {
    "url": "assets/img/25856.1ebc389c.jpg",
    "revision": "1ebc389ce8fb338dc60cf6ae858045e8"
  },
  {
    "url": "assets/img/26.8a9d590d.png",
    "revision": "8a9d590dbd590902d87c646d3db26f7d"
  },
  {
    "url": "assets/img/27.d32c3002.png",
    "revision": "d32c300243db34f57918a15160603ea7"
  },
  {
    "url": "assets/img/28.f2dc312d.png",
    "revision": "f2dc312d5de571c0103a697bf17c0d63"
  },
  {
    "url": "assets/img/28.fa3db067.png",
    "revision": "fa3db067974b8b1babb580292631d14f"
  },
  {
    "url": "assets/img/29.dd7c4880.png",
    "revision": "dd7c48802fa5776e6d968b92c0f088ca"
  },
  {
    "url": "assets/img/2PC.85517da0.png",
    "revision": "85517da0f86c5aa7c50ab18ed60962d2"
  },
  {
    "url": "assets/img/30.5585bff3.png",
    "revision": "5585bff3493dac4a98fb6b4571987f17"
  },
  {
    "url": "assets/img/30.c4291e71.png",
    "revision": "c4291e71bf841ce4758f8d821b650971"
  },
  {
    "url": "assets/img/31.164d1469.png",
    "revision": "164d14698b8e755fd82b42afebd14c5d"
  },
  {
    "url": "assets/img/32.0774ff6c.png",
    "revision": "0774ff6c7656d9ca061c90bc0fcaf7c0"
  },
  {
    "url": "assets/img/33.729a982e.png",
    "revision": "729a982ea1e32ce60b0f3a2158e59ffe"
  },
  {
    "url": "assets/img/35.d01c4b65.png",
    "revision": "d01c4b65af378fdf68d08addbb1be711"
  },
  {
    "url": "assets/img/36.0802659d.png",
    "revision": "0802659de30e390780023f030074a9b6"
  },
  {
    "url": "assets/img/37.99dd4e7b.png",
    "revision": "99dd4e7bbe2be630c34302fc6f1fd43b"
  },
  {
    "url": "assets/img/38.6113b487.png",
    "revision": "6113b4876c7d66f0a242ee48da45de0d"
  },
  {
    "url": "assets/img/399e3-1r-6nkbtqru_qsdg8o7pjjg.a63983b1.png",
    "revision": "a63983b188010534e4d9792c7da1ec94"
  },
  {
    "url": "assets/img/4.ec9e5421.png",
    "revision": "ec9e5421fe5a5898559e217951cb7197"
  },
  {
    "url": "assets/img/40.1e375610.png",
    "revision": "1e3756101b1fd77f2e815276fe9411c5"
  },
  {
    "url": "assets/img/41.5828e3ac.png",
    "revision": "5828e3ac9112bbf378cd5b9c8e835901"
  },
  {
    "url": "assets/img/42.158e0242.png",
    "revision": "158e0242bf536c0c341430fa551acee0"
  },
  {
    "url": "assets/img/44.4d2a35bc.png",
    "revision": "4d2a35bc6f636a58a4ef20ed7e27be2c"
  },
  {
    "url": "assets/img/45.af161500.png",
    "revision": "af16150058d4a729fc93cc112c5379cb"
  },
  {
    "url": "assets/img/46.93e71c03.png",
    "revision": "93e71c0389467a92465d7a075ead0333"
  },
  {
    "url": "assets/img/48.5cc39f82.png",
    "revision": "5cc39f8281b08015c0945771f710c2c4"
  },
  {
    "url": "assets/img/4f1a6-1yc8gwzbokkbffji8crzunq.ea0989b4.jpeg",
    "revision": "ea0989b4bb38cb38d5da295f4bfcb0f5"
  },
  {
    "url": "assets/img/4ioq9.42a9440b.png",
    "revision": "42a9440b43fd6706bda505c10cc9e15f"
  },
  {
    "url": "assets/img/5.a196ad04.png",
    "revision": "a196ad041a0b6da06a5b096f9b64199f"
  },
  {
    "url": "assets/img/50.b73ef75d.png",
    "revision": "b73ef75d2b13db04627c65aab0579e14"
  },
  {
    "url": "assets/img/53.61b98c8a.png",
    "revision": "61b98c8a0d82573486461d25ee9aa0b1"
  },
  {
    "url": "assets/img/55.1d5d4408.png",
    "revision": "1d5d44082ba8d409ae4dc26c43e2f500"
  },
  {
    "url": "assets/img/56.96390a31.png",
    "revision": "96390a3101d64af700b052201463461b"
  },
  {
    "url": "assets/img/57.3c1228bb.png",
    "revision": "3c1228bbd83f705e9f7e5b1c5d4fba2f"
  },
  {
    "url": "assets/img/58.8b7c46f0.png",
    "revision": "8b7c46f0095619da50380275847bd203"
  },
  {
    "url": "assets/img/59.a9093b01.png",
    "revision": "a9093b01fa2cad9322766f2d253a73c3"
  },
  {
    "url": "assets/img/6.6e073b84.png",
    "revision": "6e073b84b427811dc9164c3e5f38f6bc"
  },
  {
    "url": "assets/img/60.9b2dde92.png",
    "revision": "9b2dde9244646741d1b8861ec3bcddaf"
  },
  {
    "url": "assets/img/7.5736e5f7.png",
    "revision": "5736e5f7b8b160bd744c70587c26e4a5"
  },
  {
    "url": "assets/img/7b2e7-1zvstpn2lbfjdporafq4sew.ea5d175a.png",
    "revision": "ea5d175aa59514d8f7559ac4b8256331"
  },
  {
    "url": "assets/img/8.05a93505.png",
    "revision": "05a93505de21a10b4407ff9a14520ab6"
  },
  {
    "url": "assets/img/87348-1h8idykexd_phcbhkyr9e0q.00d42cba.png",
    "revision": "00d42cba2d711b1109b8ec7c79c809a1"
  },
  {
    "url": "assets/img/892ff-1inmdhmwxj53tv0fyhhpmmw.6f933125.png",
    "revision": "6f933125f1532929c4e36cbae787f80b"
  },
  {
    "url": "assets/img/9.ffa87928.png",
    "revision": "ffa87928b36bd56bb1a7cf9082a9b60b"
  },
  {
    "url": "assets/img/97-4.11b25a69.png",
    "revision": "11b25a69c80591126608a21b6360a255"
  },
  {
    "url": "assets/img/97-7.7e904809.png",
    "revision": "7e904809e04b731de7d8a416153d0472"
  },
  {
    "url": "assets/img/9c897-15aa2cnrij2fvo0rztjczhq.ef6a2f23.png",
    "revision": "ef6a2f232e0105bdefb4faab61ce0b12"
  },
  {
    "url": "assets/img/align-content.58d3a6bf.svg",
    "revision": "58d3a6bfe148e18ed9f0eaacebd2cca7"
  },
  {
    "url": "assets/img/align-items.b9a4d0ca.svg",
    "revision": "b9a4d0ca1c73cf53a69e43fc38a07692"
  },
  {
    "url": "assets/img/align-self.f6bd826b.svg",
    "revision": "f6bd826ba3a8499f23a419b1f2acf431"
  },
  {
    "url": "assets/img/anatomy-ip-packet.2a921a9d.svg",
    "revision": "2a921a9dcf1ca73882cd3f11dcabad2f"
  },
  {
    "url": "assets/img/api-architecture-style-comparison.adeb7460.jpeg",
    "revision": "adeb746026c6195847b9f3fafefb1426"
  },
  {
    "url": "assets/img/api-architectures.6c2ea7e0.png",
    "revision": "6c2ea7e0a1ae9af4da66511cee8b1513"
  },
  {
    "url": "assets/img/apns.985fdc67.jpeg",
    "revision": "985fdc675836138a379b472d6bc2e7f8"
  },
  {
    "url": "assets/img/arch-characterics.84687d79.png",
    "revision": "84687d79e464f3bf4de2f06db82cf99f"
  },
  {
    "url": "assets/img/arch.587c917c.png",
    "revision": "587c917c26756948182458e68ea6b182"
  },
  {
    "url": "assets/img/archiecture.3944e8fb.png",
    "revision": "3944e8fb0c086231c0f19b856d3403db"
  },
  {
    "url": "assets/img/architecture-stack.8e2d1320.png",
    "revision": "8e2d132089817ea5907912047e3606dd"
  },
  {
    "url": "assets/img/arpoperation.080126fd.png",
    "revision": "080126fd352de4b0cb08d146715d2aea"
  },
  {
    "url": "assets/img/attached-resources.4543871f.png",
    "revision": "4543871f00bd6354b099f23bdddb3ddd"
  },
  {
    "url": "assets/img/aws-arch.0ea61bb8.png",
    "revision": "0ea61bb815e36c6420226f8fd99e8a4c"
  },
  {
    "url": "assets/img/be.926c18cc.png",
    "revision": "926c18ccd99eacececd820d6b4499466"
  },
  {
    "url": "assets/img/cache-aside.faf1b6f8.png",
    "revision": "faf1b6f8f4dd053ce49aa012279bb71f"
  },
  {
    "url": "assets/img/cache-mis-attack.4c3d6df9.jpg",
    "revision": "4c3d6df990f8d743c4d2ff97aa75aa3f"
  },
  {
    "url": "assets/img/cache-read-through.1a8af934.png",
    "revision": "1a8af9348b99b536b546038182ec74d9"
  },
  {
    "url": "assets/img/cache-write-around.6ff1e3a9.png",
    "revision": "6ff1e3a98c6573aaf25b62c175231304"
  },
  {
    "url": "assets/img/cache-write-back.4abe7ae4.png",
    "revision": "4abe7ae44708e7aa4cd1212841e46533"
  },
  {
    "url": "assets/img/cache-write-through.bca249c5.png",
    "revision": "bca249c5ac88f067ffb7c85d750841da"
  },
  {
    "url": "assets/img/cdn-works.eb58d3aa.png",
    "revision": "eb58d3aae48533fe16b9463aff47b95f"
  },
  {
    "url": "assets/img/cdn.0fd4c39d.jpeg",
    "revision": "0fd4c39df59fa133e6db04a4a957027f"
  },
  {
    "url": "assets/img/choose-db.07a9b05d.jpeg",
    "revision": "07a9b05d81806a2de77ecfbe8bbada23"
  },
  {
    "url": "assets/img/Choreography.fa1ffff4.jpeg",
    "revision": "fa1ffff41e481efd39e5b766f8ce535c"
  },
  {
    "url": "assets/img/clean-microservice.9b64e8a4.png",
    "revision": "9b64e8a4c85676796f32dfc6919fe2ab"
  },
  {
    "url": "assets/img/cleanarchitecture.94e85674.jpg",
    "revision": "94e85674bfa3db95b7c344812a09bfa8"
  },
  {
    "url": "assets/img/cleanarchitecturedesign2.5a9dc3c7.png",
    "revision": "5a9dc3c7b70f96e8102bfe33fb8fb5df"
  },
  {
    "url": "assets/img/codebase-deploys.3b40fe51.png",
    "revision": "3b40fe51c68cd87b19c79d061c0f9963"
  },
  {
    "url": "assets/img/codefirst-vs-apifirst.f7a6a611.png",
    "revision": "f7a6a61151ce9195476aca4d4769c58c"
  },
  {
    "url": "assets/img/commandbusmatryoshka.ad1a0ff2.jpg",
    "revision": "ad1a0ff2257565c17b7280524dea0e48"
  },
  {
    "url": "assets/img/couch-consistency.00e26a03.png",
    "revision": "00e26a03eab0150fa2f124b6f8bfe1dc"
  },
  {
    "url": "assets/img/cqrs_6_cqrs_es.9b765315.png",
    "revision": "9b7653153afcb25782ed04c7b126d9b1"
  },
  {
    "url": "assets/img/cqrs-simple-architecture_2_cqs_1.cbc8fcd3.png",
    "revision": "cbc8fcd337b80f033a1ad26c6d24ef3f"
  },
  {
    "url": "assets/img/db-cap.dc9d277f.png",
    "revision": "dc9d277f809dc8e2dfda038ec06c55f9"
  },
  {
    "url": "assets/img/db-vs-bc.07e01a35.jpg",
    "revision": "07e01a35c2f2488e27d7516b9da69838"
  },
  {
    "url": "assets/img/ddd-diagram.4e97b2c5.png",
    "revision": "4e97b2c503d318bbda3ea15e402a560f"
  },
  {
    "url": "assets/img/ddd-example.d1bf4e28.png",
    "revision": "d1bf4e283772440e55bb56a26fe01b76"
  },
  {
    "url": "assets/img/ddd-layers.6e848797.jpg",
    "revision": "6e848797ded612eeb4fc9da0fa3a00d3"
  },
  {
    "url": "assets/img/ddd-typical-scenario.eef02727.png",
    "revision": "eef027277d1b5cc946ce9a0823ce131b"
  },
  {
    "url": "assets/img/deadcode-1.e189f987.png",
    "revision": "e189f987bc541fb1b8e6160ca595a2a5"
  },
  {
    "url": "assets/img/deadcode-2.04d38c9f.png",
    "revision": "04d38c9f14b61405dd411cac2c296fb7"
  },
  {
    "url": "assets/img/design.f1e299df.png",
    "revision": "f1e299dfb5c32c4b5491f18f787f4335"
  },
  {
    "url": "assets/img/detail.3ccf11d8.png",
    "revision": "3ccf11d8595d9610b2aaa0b51572dba1"
  },
  {
    "url": "assets/img/detail.757ef39a.png",
    "revision": "757ef39af017ecfa4e686fe407e6d089"
  },
  {
    "url": "assets/img/digraph-1.3864e6bb.png",
    "revision": "3864e6bb38f90096b9dc8635e567784a"
  },
  {
    "url": "assets/img/dnsresolution.bd8ee40a.png",
    "revision": "bd8ee40ad4d8d3498342664d961b9257"
  },
  {
    "url": "assets/img/docker-image-container.8cc9fded.png",
    "revision": "8cc9fdededede928c3c8b8c30824beb3"
  },
  {
    "url": "assets/img/dp-cheatsheet1.b996a7ec.png",
    "revision": "b996a7ec3bf6c314cf4ac52d33d82e47"
  },
  {
    "url": "assets/img/dp-cheatsheet2.61ca0769.png",
    "revision": "61ca076958fc90c19f8293e7643b079e"
  },
  {
    "url": "assets/img/elbow.854914f2.png",
    "revision": "854914f24e19b27ac064c7ce04ac47f9"
  },
  {
    "url": "assets/img/encapsulation-in-networking-process.003c596d.jpg",
    "revision": "003c596d118f418206fe440fb071ebd0"
  },
  {
    "url": "assets/img/encrypt.b8b26600.png",
    "revision": "b8b26600b52ac5140bb7011fec91f904"
  },
  {
    "url": "assets/img/esb-2.20a0d827.gif",
    "revision": "20a0d827ede99e7f026cc8b716164ae7"
  },
  {
    "url": "assets/img/ethernet-frame-format.3cbe85fc.png",
    "revision": "3cbe85fccd2a1a2536b7595bf45c2bdf"
  },
  {
    "url": "assets/img/ethernet-names.c49da6d6.jpeg",
    "revision": "c49da6d66372194cb263487f2791330e"
  },
  {
    "url": "assets/img/ethernet-vs-osi.d4925b58.png",
    "revision": "d4925b58deb678b670ff516b964f7f1b"
  },
  {
    "url": "assets/img/etl-process-diagram.9198b2ca.png",
    "revision": "9198b2cafd9f1ef6104f7e32f74c2e47"
  },
  {
    "url": "assets/img/evensourcing.d0fadc70.png",
    "revision": "d0fadc7020408344a410576d0670fca3"
  },
  {
    "url": "assets/img/event.ef97d15b.png",
    "revision": "ef97d15be525479e924365926f782b2f"
  },
  {
    "url": "assets/img/f1.20d2ed74.png",
    "revision": "20d2ed74db314f2f6c706f5295bb1300"
  },
  {
    "url": "assets/img/f1.31b15c23.png",
    "revision": "31b15c230113a06d774716b9c41dad0f"
  },
  {
    "url": "assets/img/f1.375b48c4.png",
    "revision": "375b48c408f543fa0ae96efc6806c805"
  },
  {
    "url": "assets/img/f1.432161ba.png",
    "revision": "432161ba56bfd9d43e90a1a89d57b128"
  },
  {
    "url": "assets/img/f1.4a99f0a7.png",
    "revision": "4a99f0a708a75007bbe5fd3845528758"
  },
  {
    "url": "assets/img/f1.60e24670.jpg",
    "revision": "60e246702961164c5df55307dfebe499"
  },
  {
    "url": "assets/img/f1.729c8cdd.png",
    "revision": "729c8cdddd15e91450e3ccf5c80d9d80"
  },
  {
    "url": "assets/img/f1.9cfeef3a.png",
    "revision": "9cfeef3a887ac1e112c0398197604655"
  },
  {
    "url": "assets/img/f1.a04bf255.png",
    "revision": "a04bf25558b894b8cd53ee919b2cb002"
  },
  {
    "url": "assets/img/f1.be336dbc.png",
    "revision": "be336dbcf4d5a6e12e1418da10df3ee2"
  },
  {
    "url": "assets/img/f1.d0300555.png",
    "revision": "d03005550efacab2b03f0f18e8b669fb"
  },
  {
    "url": "assets/img/f1.dc5bad37.png",
    "revision": "dc5bad37bb1cf68ac1cb363f8889aed3"
  },
  {
    "url": "assets/img/f1.e3aadf3c.jpg",
    "revision": "e3aadf3c38532503d5fcc091515c3be8"
  },
  {
    "url": "assets/img/f1.f606c747.png",
    "revision": "f606c74729fb9d03764a5b597fc9b4d7"
  },
  {
    "url": "assets/img/f10.0d741b1a.png",
    "revision": "0d741b1ab4969b7b9df7ac609f23aeb1"
  },
  {
    "url": "assets/img/f10.273008e0.png",
    "revision": "273008e03412fa3d63f45d35f6a64876"
  },
  {
    "url": "assets/img/f10.2ae8ee7c.png",
    "revision": "2ae8ee7c07dc0a1c3fd59097a50d79f7"
  },
  {
    "url": "assets/img/f10.361cf6ad.png",
    "revision": "361cf6ad75802347dd40f4169af8c3d3"
  },
  {
    "url": "assets/img/f10.50f989c3.png",
    "revision": "50f989c357e5dcb4700dac10136b3a23"
  },
  {
    "url": "assets/img/f10.6af1e2be.png",
    "revision": "6af1e2be901c66bb4b22e37441eaa9b1"
  },
  {
    "url": "assets/img/f10.79c370cd.png",
    "revision": "79c370cd066fa1d9c3aedfb280968f57"
  },
  {
    "url": "assets/img/f10.79fdb237.png",
    "revision": "79fdb237728307e3ea7975da115f56a0"
  },
  {
    "url": "assets/img/f10.7fd4539f.png",
    "revision": "7fd4539fb45e56e6a563a07b86ee0cc2"
  },
  {
    "url": "assets/img/f10.844f605a.png",
    "revision": "844f605ab680b3f2e99ea48bc24948fe"
  },
  {
    "url": "assets/img/f10.98438100.png",
    "revision": "984381002be590242493ec1fdb74ba87"
  },
  {
    "url": "assets/img/f10.995f0743.png",
    "revision": "995f0743c565536f7b04b00ee17273a7"
  },
  {
    "url": "assets/img/f10.9a89acbd.png",
    "revision": "9a89acbd3e0619fd3bea18f45891ceec"
  },
  {
    "url": "assets/img/f10.d69c7a16.png",
    "revision": "d69c7a16d30188548c0885719713b3b7"
  },
  {
    "url": "assets/img/f10.f2ac2849.png",
    "revision": "f2ac284961b746aafe8060cbbaa7e40e"
  },
  {
    "url": "assets/img/f10.f7d9f8d6.png",
    "revision": "f7d9f8d6bd9c70d36f70e61a3b790c36"
  },
  {
    "url": "assets/img/f10.fc184ad8.png",
    "revision": "fc184ad889b25be3cebbdb5218b9c4c4"
  },
  {
    "url": "assets/img/f11-1.837af6bd.png",
    "revision": "837af6bdf120c0635451a7e575467dee"
  },
  {
    "url": "assets/img/f11-2.7001fc2b.png",
    "revision": "7001fc2b54910f55edd67056de47c74d"
  },
  {
    "url": "assets/img/f11.0fa1f4b3.png",
    "revision": "0fa1f4b3e8732a94e37649026369e666"
  },
  {
    "url": "assets/img/f11.1457165f.png",
    "revision": "1457165f4700c6d7d3e279aa07015e7d"
  },
  {
    "url": "assets/img/f11.22da8bac.png",
    "revision": "22da8bac9d5b3360cd8cdd6eb19761fe"
  },
  {
    "url": "assets/img/f11.22ec38e3.png",
    "revision": "22ec38e35538445ad061228cbac19a34"
  },
  {
    "url": "assets/img/f11.2b0622a4.png",
    "revision": "2b0622a4444642db5c53c00c7adc83f5"
  },
  {
    "url": "assets/img/f11.63ac50d1.png",
    "revision": "63ac50d1e08831dc8c3becff5b32f6a9"
  },
  {
    "url": "assets/img/f11.6e1cc354.png",
    "revision": "6e1cc35455dbefb38cb8700bfc7d65f6"
  },
  {
    "url": "assets/img/f11.77b9d638.png",
    "revision": "77b9d638fff1a6e12f80c017effd9d8b"
  },
  {
    "url": "assets/img/f11.ada82b3c.png",
    "revision": "ada82b3cedf4b6621873fdc82f8e0855"
  },
  {
    "url": "assets/img/f11.b2b06aa6.png",
    "revision": "b2b06aa68ec984555a0783169ad1d741"
  },
  {
    "url": "assets/img/f11.bd648ccd.png",
    "revision": "bd648ccd1d8d5bbc56616b98afeca674"
  },
  {
    "url": "assets/img/f11.e9e07cfe.png",
    "revision": "e9e07cfebf64f190933f6e3235b242d8"
  },
  {
    "url": "assets/img/f11.ecf683df.png",
    "revision": "ecf683df4b613be1f301a117b82d3691"
  },
  {
    "url": "assets/img/f11.f91b1cc7.png",
    "revision": "f91b1cc709f14c0bec563d91706b19e9"
  },
  {
    "url": "assets/img/f11.fc23c8d6.png",
    "revision": "fc23c8d65605dcdc52e74beec05ceb50"
  },
  {
    "url": "assets/img/f12.12cbd0f6.png",
    "revision": "12cbd0f680c1442c10ec58b44c17281e"
  },
  {
    "url": "assets/img/f12.3b247731.png",
    "revision": "3b2477317b24999b7689b333d7db19fd"
  },
  {
    "url": "assets/img/f12.4b6a1196.png",
    "revision": "4b6a119612676f28abe88702ca70a5ef"
  },
  {
    "url": "assets/img/f12.7376ce03.png",
    "revision": "7376ce03513924cc1bb182f3c589675b"
  },
  {
    "url": "assets/img/f12.808ed4a3.jpg",
    "revision": "808ed4a3cb4a22e26b5067bad99421be"
  },
  {
    "url": "assets/img/f12.96ca9e63.png",
    "revision": "96ca9e63d6bc42091c38a3563f2f0580"
  },
  {
    "url": "assets/img/f12.9a453bd8.png",
    "revision": "9a453bd8a6e924efb25537871e6785a8"
  },
  {
    "url": "assets/img/f12.afd4580a.png",
    "revision": "afd4580ab1fc2ecfae654e8f877f8da3"
  },
  {
    "url": "assets/img/f12.bf905211.png",
    "revision": "bf9052117403e52667a00367096f24a1"
  },
  {
    "url": "assets/img/f12.cb6ef4bd.png",
    "revision": "cb6ef4bd74bdc0edfe193be50d07cbad"
  },
  {
    "url": "assets/img/f12.d7559d37.png",
    "revision": "d7559d375c96e0618c0daf7e41d2eb55"
  },
  {
    "url": "assets/img/f12.ddd0a15e.png",
    "revision": "ddd0a15e56b1a4a3e70b4e16a5ddef44"
  },
  {
    "url": "assets/img/f12.e79233b4.png",
    "revision": "e79233b49d5fc4b6ddfc6309df4d8e50"
  },
  {
    "url": "assets/img/f12.e8ffce8f.png",
    "revision": "e8ffce8f5296dc6a1c867591dd39bc09"
  },
  {
    "url": "assets/img/f12.eb2a7d65.png",
    "revision": "eb2a7d65ce1c968daf3e623ac7c4455e"
  },
  {
    "url": "assets/img/f12.ee6b3b38.png",
    "revision": "ee6b3b38d79b5904d5faf7b95a298fe6"
  },
  {
    "url": "assets/img/f13.0c3c905f.png",
    "revision": "0c3c905f46a560746c391cabb9a18f42"
  },
  {
    "url": "assets/img/f13.368e089e.png",
    "revision": "368e089ecec31e5dbf90dd1e1261ee7a"
  },
  {
    "url": "assets/img/f13.383808c3.png",
    "revision": "383808c32c1139b84d11994e146fc751"
  },
  {
    "url": "assets/img/f13.409ecfda.png",
    "revision": "409ecfda577b00e0628d3a068feb9c08"
  },
  {
    "url": "assets/img/f13.43f40416.png",
    "revision": "43f4041608aa19823ce9b69301492a54"
  },
  {
    "url": "assets/img/f13.48be5615.png",
    "revision": "48be5615b152991bbff6d38cb88988c3"
  },
  {
    "url": "assets/img/f13.8112d273.png",
    "revision": "8112d273b0caf16b216094330bb6c98c"
  },
  {
    "url": "assets/img/f13.95b11ea5.jpg",
    "revision": "95b11ea542b7a24397e0f272ba3d1ed9"
  },
  {
    "url": "assets/img/f13.a6255bfe.png",
    "revision": "a6255bfebd3f9efa466157f2bdd8c8d0"
  },
  {
    "url": "assets/img/f13.aa336f1f.png",
    "revision": "aa336f1fc63ac1a89cea90012d297762"
  },
  {
    "url": "assets/img/f13.ab6b37ee.png",
    "revision": "ab6b37ee553b4ec6f2162145327e2d1c"
  },
  {
    "url": "assets/img/f13.c6da8996.png",
    "revision": "c6da899611d3b5ecd8747eb81a6d8fee"
  },
  {
    "url": "assets/img/f13.cba60d4e.png",
    "revision": "cba60d4ef9dfc10e6015c66a87e84e94"
  },
  {
    "url": "assets/img/f13.d75b675d.png",
    "revision": "d75b675d876fb39eb7ce21b82cb3283b"
  },
  {
    "url": "assets/img/f14.04ab2cc4.jpg",
    "revision": "04ab2cc42719a479f974afc12898a5a4"
  },
  {
    "url": "assets/img/f14.202ff627.png",
    "revision": "202ff62798b50c9252fdb675c65328ad"
  },
  {
    "url": "assets/img/f14.2a4f761d.png",
    "revision": "2a4f761dbc013d06fdfe5cd907c8b1c6"
  },
  {
    "url": "assets/img/f14.2c61f990.png",
    "revision": "2c61f990472cd74d96bc8557072be07c"
  },
  {
    "url": "assets/img/f14.47f35395.png",
    "revision": "47f35395ee959d8a1abc443e974ac228"
  },
  {
    "url": "assets/img/f14.5cedca1c.png",
    "revision": "5cedca1c039661d63b1bdc9ae1a49d31"
  },
  {
    "url": "assets/img/f14.83202626.png",
    "revision": "83202626fadb0e11fd0bf3eef0418659"
  },
  {
    "url": "assets/img/f14.b6222064.png",
    "revision": "b62220649a19863ae9b066f4ffffbd88"
  },
  {
    "url": "assets/img/f14.c0ab5fde.png",
    "revision": "c0ab5fde874c25a8f9c47372db0b6022"
  },
  {
    "url": "assets/img/f14.c8927407.png",
    "revision": "c8927407dfec08dd09b4d009aa8e570e"
  },
  {
    "url": "assets/img/f14.c9a1ee3a.png",
    "revision": "c9a1ee3abe39226a0643a605a2cb73fb"
  },
  {
    "url": "assets/img/f14.df99e837.png",
    "revision": "df99e837ffc3b9441eb0e95588f12cb6"
  },
  {
    "url": "assets/img/f14.dfe5de19.png",
    "revision": "dfe5de19ce66b36736c9fc4ac8070cfa"
  },
  {
    "url": "assets/img/f14.ffcbe3e1.png",
    "revision": "ffcbe3e1104b8f14eb7534ef425d31c3"
  },
  {
    "url": "assets/img/f15.2184d595.png",
    "revision": "2184d59557237ba504de4158ce414073"
  },
  {
    "url": "assets/img/f15.2e876e30.png",
    "revision": "2e876e3020c43b0d63adc9ca3b2aa0f1"
  },
  {
    "url": "assets/img/f15.3d61b074.png",
    "revision": "3d61b0744f807667e784e90244f796b4"
  },
  {
    "url": "assets/img/f15.5099890d.png",
    "revision": "5099890d7c8e7677823c7493eda20372"
  },
  {
    "url": "assets/img/f15.645738cd.png",
    "revision": "645738cd4525fb27a2af7d5bc7b768d7"
  },
  {
    "url": "assets/img/f15.88bbb753.png",
    "revision": "88bbb75337b7232eccad36c3df7c8030"
  },
  {
    "url": "assets/img/f15.a494b72a.png",
    "revision": "a494b72ae115899bb9f92ab501225ec3"
  },
  {
    "url": "assets/img/f15.aa534126.png",
    "revision": "aa534126a21d1ef9838b3fd4305399b2"
  },
  {
    "url": "assets/img/f15.b05ac467.png",
    "revision": "b05ac4678482263c3d9ab7bdb4461f8b"
  },
  {
    "url": "assets/img/f15.d9251880.png",
    "revision": "d925188056d7ade706b9ea91cdc6bad5"
  },
  {
    "url": "assets/img/f15.de436b26.png",
    "revision": "de436b260676145404f8fae1bc4f987a"
  },
  {
    "url": "assets/img/f15.e7df994d.png",
    "revision": "e7df994d1911a8fc602f4c8988f29d89"
  },
  {
    "url": "assets/img/f16.24c4cef8.png",
    "revision": "24c4cef89d703a3d6f3fa6a7388d6f47"
  },
  {
    "url": "assets/img/f16.3575da6b.png",
    "revision": "3575da6b5b2009efc9c9f92fd2c68f67"
  },
  {
    "url": "assets/img/f16.459d217d.png",
    "revision": "459d217d91718e873b4a3fcc5081d76d"
  },
  {
    "url": "assets/img/f16.6cd52464.png",
    "revision": "6cd52464ded39d3229fffd92fd789f92"
  },
  {
    "url": "assets/img/f16.7c207039.png",
    "revision": "7c207039f0a7df26997b7f90e5531854"
  },
  {
    "url": "assets/img/f16.a3445950.png",
    "revision": "a3445950eb93c9079a5b6bce673b1248"
  },
  {
    "url": "assets/img/f16.e0fc89ba.png",
    "revision": "e0fc89bafdc4337f0edeea3e8106e3fa"
  },
  {
    "url": "assets/img/f16.fad8e53e.png",
    "revision": "fad8e53e4b9aacf4ad6d0c121a123562"
  },
  {
    "url": "assets/img/f17.01890be4.png",
    "revision": "01890be4b3ad4669befeab15c1c4999a"
  },
  {
    "url": "assets/img/f17.0d64016c.png",
    "revision": "0d64016c0f446928a678a5d5d0585a7b"
  },
  {
    "url": "assets/img/f17.159e095f.png",
    "revision": "159e095fb1589a828140f21bb866c72e"
  },
  {
    "url": "assets/img/f17.239acc2e.png",
    "revision": "239acc2e586e9fd890ffeafc03d35bf3"
  },
  {
    "url": "assets/img/f17.852aa81c.png",
    "revision": "852aa81c7873df8af149a1ecdd1e3755"
  },
  {
    "url": "assets/img/f17.8bce6b42.png",
    "revision": "8bce6b424d5a3d94b29f948c5eee2b50"
  },
  {
    "url": "assets/img/f17.bc1d0b6d.png",
    "revision": "bc1d0b6dccd41596596a022eb097205f"
  },
  {
    "url": "assets/img/f17.fc887303.png",
    "revision": "fc8873032fb06631d9256c1a3632e52c"
  },
  {
    "url": "assets/img/f18.059777cf.png",
    "revision": "059777cf4c210bfbb4c92c34f2d80e12"
  },
  {
    "url": "assets/img/f18.0e41b45f.png",
    "revision": "0e41b45f08b823b6c315511d70b07d74"
  },
  {
    "url": "assets/img/f18.14f44b7b.png",
    "revision": "14f44b7bc5ef05e1ac86f2e6bdb555ea"
  },
  {
    "url": "assets/img/f18.1bc7ab53.svg",
    "revision": "1bc7ab53af2b08730cc7ad1db2a6b02a"
  },
  {
    "url": "assets/img/f18.490a8cd1.png",
    "revision": "490a8cd132491d194860917f5113d0f1"
  },
  {
    "url": "assets/img/f18.62ccacd7.png",
    "revision": "62ccacd75161f515fa20e4671db61e5d"
  },
  {
    "url": "assets/img/f18.9832ad1c.png",
    "revision": "9832ad1cb41a864988cbfc8c4e512f69"
  },
  {
    "url": "assets/img/f18.fe6f3f3e.png",
    "revision": "fe6f3f3e38d2e3c4ce8643b0aaa37ea6"
  },
  {
    "url": "assets/img/f19.09047899.png",
    "revision": "0904789904acb7749f5cde5c002dc65c"
  },
  {
    "url": "assets/img/f19.16bbc0c9.png",
    "revision": "16bbc0c919dc0156cee52805b856afe5"
  },
  {
    "url": "assets/img/f19.3829522c.png",
    "revision": "3829522c0fb1b9f787c85c7ddd7a38df"
  },
  {
    "url": "assets/img/f19.42c24efa.png",
    "revision": "42c24efa919746efd32da85b9bbfc45b"
  },
  {
    "url": "assets/img/f19.a2d8a786.png",
    "revision": "a2d8a7864bc81319d3b61a98fc84de9b"
  },
  {
    "url": "assets/img/f19.a504e222.png",
    "revision": "a504e222b49741174fd82a524b31bdc0"
  },
  {
    "url": "assets/img/f19.a9ef0aa4.png",
    "revision": "a9ef0aa4faa51e9d5153860c50af7b1e"
  },
  {
    "url": "assets/img/f19.f28092af.png",
    "revision": "f28092af282fe66595d80b695ee0117a"
  },
  {
    "url": "assets/img/f2.08dab1fd.png",
    "revision": "08dab1fdbbf777d1d2e77440d6b4a271"
  },
  {
    "url": "assets/img/f2.0fd07046.png",
    "revision": "0fd07046cf4896ef3ff19d8415a6a48d"
  },
  {
    "url": "assets/img/f2.2b527cfd.png",
    "revision": "2b527cfdc84e920ee1bcf20fca5aa815"
  },
  {
    "url": "assets/img/f2.3601d9f5.png",
    "revision": "3601d9f59b6ed2adc0d1d4ffa4f6a147"
  },
  {
    "url": "assets/img/f2.39518570.png",
    "revision": "3951857071bbff7240370d36f51fc734"
  },
  {
    "url": "assets/img/f2.6bf5f41b.png",
    "revision": "6bf5f41b5d2c8cb0eddcbb99c52349ec"
  },
  {
    "url": "assets/img/f2.85c3518b.png",
    "revision": "85c3518bb10c3614411af6fec5fe7bc3"
  },
  {
    "url": "assets/img/f2.98edf017.png",
    "revision": "98edf0170768067596824ba8d6c14fc2"
  },
  {
    "url": "assets/img/f2.9cae2f95.png",
    "revision": "9cae2f958529f1abc930cd8026739c16"
  },
  {
    "url": "assets/img/f2.a423bf4f.png",
    "revision": "a423bf4f2601bdf2c3854fbed0cacd44"
  },
  {
    "url": "assets/img/f2.af507ca9.jpg",
    "revision": "af507ca96a332defa0653fe34ec23a77"
  },
  {
    "url": "assets/img/f2.b40de9a0.png",
    "revision": "b40de9a0b3b5da5e66f522f9b9765fdf"
  },
  {
    "url": "assets/img/f2.bad09341.png",
    "revision": "bad09341b214fae25bc245b2f619db7a"
  },
  {
    "url": "assets/img/f2.c7d452d4.png",
    "revision": "c7d452d42d19943ffaeb76a5acbe445e"
  },
  {
    "url": "assets/img/f2.c8275451.png",
    "revision": "c8275451e545299ab9d6d6c2b344798c"
  },
  {
    "url": "assets/img/f2.cc1e5a99.jpg",
    "revision": "cc1e5a99c1aadd3e4767894b9dd062e4"
  },
  {
    "url": "assets/img/f2.d4a61756.png",
    "revision": "d4a617563413cbd45f64b77bd1fa8fbe"
  },
  {
    "url": "assets/img/f2.e36dde64.png",
    "revision": "e36dde649d5ca23349ac46941770495f"
  },
  {
    "url": "assets/img/f20.223e24df.png",
    "revision": "223e24df495ee418d2cee6372d3b1998"
  },
  {
    "url": "assets/img/f20.33995b31.png",
    "revision": "33995b31a144632d020efb6c3f920f27"
  },
  {
    "url": "assets/img/f20.4931f85c.png",
    "revision": "4931f85c1c9823cb9101ace9a87d76fa"
  },
  {
    "url": "assets/img/f20.8edb78bb.png",
    "revision": "8edb78bbdf45dd86cc1ec3caa679ba2d"
  },
  {
    "url": "assets/img/f20.98c38478.png",
    "revision": "98c38478f8a300aac3799ee255d8ebbe"
  },
  {
    "url": "assets/img/f20.e4c13442.png",
    "revision": "e4c13442aeadf1433d9c39d122d503fe"
  },
  {
    "url": "assets/img/f21.1e8ff7e1.png",
    "revision": "1e8ff7e10cd163754e7074cf1d02d6aa"
  },
  {
    "url": "assets/img/f21.6eb941d9.png",
    "revision": "6eb941d9cea70ba9ef90037632abe6c9"
  },
  {
    "url": "assets/img/f21.80a3131d.png",
    "revision": "80a3131d526bdf4c68ac2b4151e5eed9"
  },
  {
    "url": "assets/img/f21.9899f10e.png",
    "revision": "9899f10e0e929a33d4170da458ca0b76"
  },
  {
    "url": "assets/img/f21.b726e330.png",
    "revision": "b726e330e401d1696ca191808ad5d7e2"
  },
  {
    "url": "assets/img/f21.da25c8e6.png",
    "revision": "da25c8e6b67de7cfe67da8afd228ca05"
  },
  {
    "url": "assets/img/f22.69dee0fa.png",
    "revision": "69dee0fa7b31dbb25f9c6e1744f648ed"
  },
  {
    "url": "assets/img/f22.bfd48974.png",
    "revision": "bfd489742e8e4dc631f648e05d4cf18d"
  },
  {
    "url": "assets/img/f22.d0eafcd8.png",
    "revision": "d0eafcd8ea2cf6711fa5b8dbc517c18f"
  },
  {
    "url": "assets/img/f22.e2f19b2d.png",
    "revision": "e2f19b2de3280d5a32b1ced1de2ab865"
  },
  {
    "url": "assets/img/f23.235219e1.png",
    "revision": "235219e1f1b4b6e434b2a1f4c651ddad"
  },
  {
    "url": "assets/img/f23.871c684f.png",
    "revision": "871c684f384ae986b0c8db11fb53b438"
  },
  {
    "url": "assets/img/f23.a6dd89be.png",
    "revision": "a6dd89be8e820b5c96331c606bf197fe"
  },
  {
    "url": "assets/img/f24.191ebb3e.png",
    "revision": "191ebb3e5338267a18d8467d5b5dbe26"
  },
  {
    "url": "assets/img/f24.a578a785.png",
    "revision": "a578a785125b951189afdc475c1ce16a"
  },
  {
    "url": "assets/img/f24.af54bd25.png",
    "revision": "af54bd256650609be94496167a3ed53b"
  },
  {
    "url": "assets/img/f25.7e1fba08.png",
    "revision": "7e1fba0875220e29ae0493f833d865a1"
  },
  {
    "url": "assets/img/f25.b5c26ffd.png",
    "revision": "b5c26ffdd219e5001b813396f63ce16a"
  },
  {
    "url": "assets/img/f26.ba5a78ba.png",
    "revision": "ba5a78babad317e6d18967701628c9fd"
  },
  {
    "url": "assets/img/f26.c0d48833.png",
    "revision": "c0d4883363186dd819123fba71e563d3"
  },
  {
    "url": "assets/img/f27.8d017dc9.png",
    "revision": "8d017dc90cd19e35144d1f055ca3ba3d"
  },
  {
    "url": "assets/img/f27.d1ef470e.png",
    "revision": "d1ef470e7f40b4f64db552ec87e6a19e"
  },
  {
    "url": "assets/img/f28.90db5d78.png",
    "revision": "90db5d78cedb13d44ad6f858c4262989"
  },
  {
    "url": "assets/img/f28.dff39eec.png",
    "revision": "dff39eec4d8496e8c5952c3629ba7c42"
  },
  {
    "url": "assets/img/f29.035fa064.png",
    "revision": "035fa064d8f8dc048b1d6fe0632fd004"
  },
  {
    "url": "assets/img/f29.8327ce2a.png",
    "revision": "8327ce2aca3dd285d7d3e3559706c214"
  },
  {
    "url": "assets/img/f3.2cc1bebe.png",
    "revision": "2cc1bebe9bb87d719824dd419c77b486"
  },
  {
    "url": "assets/img/f3.3bc52b4d.jpg",
    "revision": "3bc52b4d80e7e5478fd7ec2c528bd4e7"
  },
  {
    "url": "assets/img/f3.8477b69e.png",
    "revision": "8477b69e6769cfabac6dbee5c60a9e56"
  },
  {
    "url": "assets/img/f3.8c43f4dc.png",
    "revision": "8c43f4dc3ee66828b79e588a7c329fff"
  },
  {
    "url": "assets/img/f3.8c6ff044.png",
    "revision": "8c6ff04472ee429482cb0acc79469877"
  },
  {
    "url": "assets/img/f3.978b4dc7.png",
    "revision": "978b4dc76a846367aa5bd4b1fd0b72a9"
  },
  {
    "url": "assets/img/f3.9da94e01.svg",
    "revision": "9da94e0196ce774c2537b0f783086a13"
  },
  {
    "url": "assets/img/f3.9e64dc1c.png",
    "revision": "9e64dc1cceaa1949e8d69b23b27e18f1"
  },
  {
    "url": "assets/img/f3.a1ef0cfa.png",
    "revision": "a1ef0cfa52727961c13a8bb72eee8b76"
  },
  {
    "url": "assets/img/f3.aa21c9bb.png",
    "revision": "aa21c9bba408840abd63e6eed5fc31d5"
  },
  {
    "url": "assets/img/f3.c52b15aa.png",
    "revision": "c52b15aa726b44d00a48b7a44c032357"
  },
  {
    "url": "assets/img/f3.cf770d63.png",
    "revision": "cf770d639a98762542770599839ec4ab"
  },
  {
    "url": "assets/img/f3.d18ed8eb.png",
    "revision": "d18ed8eb1a5e47ebe8fe922f3e0cd073"
  },
  {
    "url": "assets/img/f3.d67cc4d0.png",
    "revision": "d67cc4d0adff46f21b3846a9f8862ded"
  },
  {
    "url": "assets/img/f3.d8bb7564.png",
    "revision": "d8bb756402e3c25de4c3877f2de45027"
  },
  {
    "url": "assets/img/f3.e3998021.png",
    "revision": "e3998021cca9e26c653581aa52cbc078"
  },
  {
    "url": "assets/img/f3.f31d1c41.png",
    "revision": "f31d1c41f6ad96a23019e5933bd43bfb"
  },
  {
    "url": "assets/img/f3.fd1dda13.png",
    "revision": "fd1dda138a0d6f78ed17c30451f39d6d"
  },
  {
    "url": "assets/img/f4.062f9b82.svg",
    "revision": "062f9b82bd7e24b765caba776c66e63c"
  },
  {
    "url": "assets/img/f4.14b84239.png",
    "revision": "14b84239b4bd32f81f3b4580850f0ba8"
  },
  {
    "url": "assets/img/f4.3bc3184e.png",
    "revision": "3bc3184ee8843f1495f8bdd7755dbdac"
  },
  {
    "url": "assets/img/f4.52b619f6.png",
    "revision": "52b619f6bb28f0b0a99f520764ea508a"
  },
  {
    "url": "assets/img/f4.57156c9b.png",
    "revision": "57156c9bb138c1710ab49d876de61533"
  },
  {
    "url": "assets/img/f4.5b46f512.png",
    "revision": "5b46f512a9f6692dbed56fafe6be602d"
  },
  {
    "url": "assets/img/f4.623cec02.png",
    "revision": "623cec02b44efd61dce3ba24493c80e4"
  },
  {
    "url": "assets/img/f4.64371bd3.png",
    "revision": "64371bd33e88e8d6609f217c354179f8"
  },
  {
    "url": "assets/img/f4.6e6540f5.png",
    "revision": "6e6540f52d926c187e53f68288468b03"
  },
  {
    "url": "assets/img/f4.8793cff4.jpg",
    "revision": "8793cff47a0c66b575ea35052e11934f"
  },
  {
    "url": "assets/img/f4.8c2453c3.png",
    "revision": "8c2453c3498ccc3dad64ba7f134bf4f8"
  },
  {
    "url": "assets/img/f4.9981a00c.png",
    "revision": "9981a00c1a9e0f8e30db9303571699b9"
  },
  {
    "url": "assets/img/f4.a2dde50b.png",
    "revision": "a2dde50b3d9ffd6e88701ffd4ecc25d8"
  },
  {
    "url": "assets/img/f4.a94f359e.png",
    "revision": "a94f359eb1ea7359d402296b59095e62"
  },
  {
    "url": "assets/img/f4.a9fe73df.png",
    "revision": "a9fe73dfd1f52e5b32bb336c94710a36"
  },
  {
    "url": "assets/img/f4.b5bd7d07.png",
    "revision": "b5bd7d07aa8b694a4792c6d2cd21435c"
  },
  {
    "url": "assets/img/f4.d6abcc9a.png",
    "revision": "d6abcc9a00d4478bc80409f6b1962150"
  },
  {
    "url": "assets/img/f5.0c69bdf3.png",
    "revision": "0c69bdf3a55085b7d2d7bd0fb583514d"
  },
  {
    "url": "assets/img/f5.151cfc46.svg",
    "revision": "151cfc461c6ac51d7b1b291614358ee6"
  },
  {
    "url": "assets/img/f5.16e9fe44.jpg",
    "revision": "16e9fe44316de8727444edfb1f82f1af"
  },
  {
    "url": "assets/img/f5.1d8c086a.png",
    "revision": "1d8c086a6798968619b25a688ad8eb43"
  },
  {
    "url": "assets/img/f5.3d9146a0.png",
    "revision": "3d9146a099db7e60c3b04001fd6e187a"
  },
  {
    "url": "assets/img/f5.5424ad3e.png",
    "revision": "5424ad3eecfec88820d0f49390917ced"
  },
  {
    "url": "assets/img/f5.6c6331e9.png",
    "revision": "6c6331e9941769b60804f32cc1e27e26"
  },
  {
    "url": "assets/img/f5.7230a546.png",
    "revision": "7230a54671f8eba0a1cc6c7610224e5e"
  },
  {
    "url": "assets/img/f5.78011d48.png",
    "revision": "78011d48c40773528811b8ae6a3e7b72"
  },
  {
    "url": "assets/img/f5.8022f5c8.png",
    "revision": "8022f5c86c345955c7e57d97b384c2ad"
  },
  {
    "url": "assets/img/f5.812ae692.png",
    "revision": "812ae692332b333e795f82eba25bd5b7"
  },
  {
    "url": "assets/img/f5.92a977b8.png",
    "revision": "92a977b82cc124ff47ddcbf4809470dc"
  },
  {
    "url": "assets/img/f5.9c17b1f2.png",
    "revision": "9c17b1f29a52f2f47df299cf07bbca93"
  },
  {
    "url": "assets/img/f5.bfe174dc.png",
    "revision": "bfe174dc32fb2d66685b6ce7d5ec6147"
  },
  {
    "url": "assets/img/f5.cbdb64d3.png",
    "revision": "cbdb64d32faa12c98d97c65cec6a0a6a"
  },
  {
    "url": "assets/img/f5.f339055c.png",
    "revision": "f339055c54c00858706db2235e2de1df"
  },
  {
    "url": "assets/img/f5.f99d0833.png",
    "revision": "f99d0833f115242156feb78a4d34899e"
  },
  {
    "url": "assets/img/f5.fbb100d8.png",
    "revision": "fbb100d830cd7c805d96fa54161b7074"
  },
  {
    "url": "assets/img/f5.fdb7c6e5.png",
    "revision": "fdb7c6e5216b2f5d551e9548af86a268"
  },
  {
    "url": "assets/img/f6.17ba4864.png",
    "revision": "17ba4864b8514da0cc604249acc441f1"
  },
  {
    "url": "assets/img/f6.207454e2.png",
    "revision": "207454e2f0eabee15c87143a6fce53bd"
  },
  {
    "url": "assets/img/f6.21fddf8e.png",
    "revision": "21fddf8e0ebf3af703e45761276c19e8"
  },
  {
    "url": "assets/img/f6.4a12b927.png",
    "revision": "4a12b927da2711f3f8ace08450f16610"
  },
  {
    "url": "assets/img/f6.5123bd50.png",
    "revision": "5123bd507197700e49753c74c890e199"
  },
  {
    "url": "assets/img/f6.54b4a63c.png",
    "revision": "54b4a63c4064b1ae375677b3361362a1"
  },
  {
    "url": "assets/img/f6.5663d8e2.png",
    "revision": "5663d8e2b958afe528972f9f6627a6eb"
  },
  {
    "url": "assets/img/f6.72671fc1.jpg",
    "revision": "72671fc10b3ec9a8280a934c4ef3e5a5"
  },
  {
    "url": "assets/img/f6.7f2ca9b0.png",
    "revision": "7f2ca9b0b9c31def1b519658d2a42237"
  },
  {
    "url": "assets/img/f6.a337f2af.png",
    "revision": "a337f2af399686f4485cb4a7e4e3fe6f"
  },
  {
    "url": "assets/img/f6.b37518f8.png",
    "revision": "b37518f86bfead9ae474e49ddb065c83"
  },
  {
    "url": "assets/img/f6.bb2d411d.png",
    "revision": "bb2d411dfb021a32da4bbb267bc2d8c4"
  },
  {
    "url": "assets/img/f6.bdeb2afe.png",
    "revision": "bdeb2afe2f69275eefcd7bbb45ba6551"
  },
  {
    "url": "assets/img/f6.cbb85cfd.png",
    "revision": "cbb85cfdabf2dd076864f4b5e69f31db"
  },
  {
    "url": "assets/img/f6.e225ff33.png",
    "revision": "e225ff33970a29d8cc1bf32e5c4da689"
  },
  {
    "url": "assets/img/f6.efa40459.png",
    "revision": "efa4045979ceb96966afd5d140930f7a"
  },
  {
    "url": "assets/img/f6.f2bc84f9.png",
    "revision": "f2bc84f92a2fc25a5a13a55479070388"
  },
  {
    "url": "assets/img/f6.f6ac0a42.png",
    "revision": "f6ac0a42861112b0df2fe85797006dd5"
  },
  {
    "url": "assets/img/f7.21ef346e.png",
    "revision": "21ef346e13a82bfa8f5aa48aff522c07"
  },
  {
    "url": "assets/img/f7.3b87d38b.png",
    "revision": "3b87d38be8ffc9d7a7c6fbac2a7f6118"
  },
  {
    "url": "assets/img/f7.4d2994b1.png",
    "revision": "4d2994b1c6c138f7a3afc8bab7341c5a"
  },
  {
    "url": "assets/img/f7.4e4e6a9c.png",
    "revision": "4e4e6a9c381656376c6c72aede043a6c"
  },
  {
    "url": "assets/img/f7.59ac3b5d.png",
    "revision": "59ac3b5d13d69a9d0f9db4d0dcf30f95"
  },
  {
    "url": "assets/img/f7.6220355b.png",
    "revision": "6220355b0474c3f628e212c29254e899"
  },
  {
    "url": "assets/img/f7.76d90854.png",
    "revision": "76d90854a960e2150f076fa61e82d1ee"
  },
  {
    "url": "assets/img/f7.82a2aaca.png",
    "revision": "82a2aaca0869f566887a2e1c4b29746b"
  },
  {
    "url": "assets/img/f7.859c7897.png",
    "revision": "859c7897d7f18c68c652401f7587a53d"
  },
  {
    "url": "assets/img/f7.8ccaafd8.png",
    "revision": "8ccaafd8c45272d8f19dbe7ccf6b9ef5"
  },
  {
    "url": "assets/img/f7.93249565.png",
    "revision": "9324956596a9bab4284e3691c886775a"
  },
  {
    "url": "assets/img/f7.93b584f4.png",
    "revision": "93b584f41f0f69b24ca29eab84b44170"
  },
  {
    "url": "assets/img/f7.9ebe1c3a.png",
    "revision": "9ebe1c3ab3677b0bc9fc47a0850bdde2"
  },
  {
    "url": "assets/img/f7.b51d9141.png",
    "revision": "b51d91415a043ef2d13a989393f763b1"
  },
  {
    "url": "assets/img/f7.cbd69775.png",
    "revision": "cbd69775229d54511aa3060a9097481d"
  },
  {
    "url": "assets/img/f7.d9ed1dc3.png",
    "revision": "d9ed1dc3f0a2cae01315b1c6b5464621"
  },
  {
    "url": "assets/img/f7.dcb449da.png",
    "revision": "dcb449da463e6e8afce3cfc0f8063521"
  },
  {
    "url": "assets/img/f7.eb1f8b53.png",
    "revision": "eb1f8b5349577edc9385e51d65d257f2"
  },
  {
    "url": "assets/img/f7.ebee2491.png",
    "revision": "ebee24914e3fb34ccf8d894b2b80d466"
  },
  {
    "url": "assets/img/f7.ee1e0a82.png",
    "revision": "ee1e0a82faf82dcf44fa946a6923f57a"
  },
  {
    "url": "assets/img/f8.07d02c10.png",
    "revision": "07d02c103e471583a63ab3d32b0f2e49"
  },
  {
    "url": "assets/img/f8.1376bd84.png",
    "revision": "1376bd8454d37ae7cfb6f335c59f0e84"
  },
  {
    "url": "assets/img/f8.13b6dc5b.png",
    "revision": "13b6dc5b2cb47bf77d2ef70a38b6ad80"
  },
  {
    "url": "assets/img/f8.3a354cd1.png",
    "revision": "3a354cd164558f2945489bff67394a68"
  },
  {
    "url": "assets/img/f8.53e89476.png",
    "revision": "53e89476d7b8b7e07546ed2cffad08be"
  },
  {
    "url": "assets/img/f8.553842e6.png",
    "revision": "553842e6a275f6b96466a395d05e71c8"
  },
  {
    "url": "assets/img/f8.5b21d202.png",
    "revision": "5b21d20279d6019437ea86b795905e35"
  },
  {
    "url": "assets/img/f8.5da880af.png",
    "revision": "5da880affd685d78299cc5aecddfbe1b"
  },
  {
    "url": "assets/img/f8.6d9475df.png",
    "revision": "6d9475df1105b902fc7015303b306eb2"
  },
  {
    "url": "assets/img/f8.71e0689e.png",
    "revision": "71e0689ebaae706bdd64c522b0104cea"
  },
  {
    "url": "assets/img/f8.7353e3c9.png",
    "revision": "7353e3c95e264d3f5b4c62751e6eaca7"
  },
  {
    "url": "assets/img/f8.7ab49e65.png",
    "revision": "7ab49e65126795f7eaa7c77db952a15d"
  },
  {
    "url": "assets/img/f8.83f082a8.png",
    "revision": "83f082a8b3800816ea0bc582366d43cf"
  },
  {
    "url": "assets/img/f8.847598a5.png",
    "revision": "847598a59a7663e937e309a4899e61ca"
  },
  {
    "url": "assets/img/f8.895d179a.png",
    "revision": "895d179a4fd10bb55d9eb5cb29d60c5d"
  },
  {
    "url": "assets/img/f8.9490d2f2.png",
    "revision": "9490d2f26d976ce87c0b6ccf1d0e9433"
  },
  {
    "url": "assets/img/f8.a3f61daa.png",
    "revision": "a3f61daaf59e03887c29c893742aefa6"
  },
  {
    "url": "assets/img/f8.e21421c9.png",
    "revision": "e21421c97838426eb236d5f3e12fe4fa"
  },
  {
    "url": "assets/img/f8.fce0f651.png",
    "revision": "fce0f65134739a16e6746d5af9955932"
  },
  {
    "url": "assets/img/f9.1054dd21.png",
    "revision": "1054dd2177fcedb9401cfc32798f99e1"
  },
  {
    "url": "assets/img/f9.46f9f257.png",
    "revision": "46f9f257736d3f25218f3aebc6f4bd99"
  },
  {
    "url": "assets/img/f9.517c90b4.png",
    "revision": "517c90b42b2ad89d00dbbf7b18bd64e7"
  },
  {
    "url": "assets/img/f9.5446fa04.png",
    "revision": "5446fa045de679c3060c82f0c3dccea9"
  },
  {
    "url": "assets/img/f9.5be780d8.png",
    "revision": "5be780d8c4bee6ce1be3c925f2365371"
  },
  {
    "url": "assets/img/f9.7c524582.png",
    "revision": "7c524582b2587d1d9cb819b351ef1952"
  },
  {
    "url": "assets/img/f9.9164bc8b.png",
    "revision": "9164bc8b768b04824ada0a4b4592cce3"
  },
  {
    "url": "assets/img/f9.ae8137f0.png",
    "revision": "ae8137f08e575416ba109cab3e10b53a"
  },
  {
    "url": "assets/img/f9.b4782001.png",
    "revision": "b4782001bd241d0d8aada3ad0f35e76d"
  },
  {
    "url": "assets/img/f9.bf71546a.png",
    "revision": "bf71546a94b85518b733f7c7a2ce7ffc"
  },
  {
    "url": "assets/img/f9.d2160c5a.png",
    "revision": "d2160c5aec70854cfb163a07a1fc07fb"
  },
  {
    "url": "assets/img/f9.db61be71.png",
    "revision": "db61be71d2a22c05edbfe1b56ee56149"
  },
  {
    "url": "assets/img/f9.dbbb765b.png",
    "revision": "dbbb765b2a45834ece3031c5663bb379"
  },
  {
    "url": "assets/img/f9.e9e885b8.png",
    "revision": "e9e885b8e08d15a074b7a818b8e8bee4"
  },
  {
    "url": "assets/img/f9.f8d4dcad.png",
    "revision": "f8d4dcad2efa91010e2b8681e72b7937"
  },
  {
    "url": "assets/img/f9.faf81245.png",
    "revision": "faf812457f2cad664504282f6c4e824c"
  },
  {
    "url": "assets/img/f9.fed29166.png",
    "revision": "fed29166ecd3f691970933901f7c809d"
  },
  {
    "url": "assets/img/fast-moving-drivers.db00ec04.png",
    "revision": "db00ec0475fee1af42eebbe259278e64"
  },
  {
    "url": "assets/img/FCM-flow.35e50576.png",
    "revision": "35e505760032e31652d41af0f82b26c7"
  },
  {
    "url": "assets/img/fd219-16wpx8u_mm8z1xdzvmfj67w.74ed9e74.png",
    "revision": "74ed9e7462ad7f545f90475218462f7d"
  },
  {
    "url": "assets/img/federated_esb.75e79176.jpg",
    "revision": "75e7917627422e8b7bcb6d2661e0456d"
  },
  {
    "url": "assets/img/fig_7_12_entity_interface_control.a7bc7cfc.jpg",
    "revision": "a7bc7cfc626ec698880eae67b8671957"
  },
  {
    "url": "assets/img/fig_7_14_boundaries.4d7ccb5d.jpg",
    "revision": "4d7ccb5dba6413c863f08cee56b6a682"
  },
  {
    "url": "assets/img/figure-14-10-YWOCJMVV.c5f53456.svg",
    "revision": "c5f53456302a6a7946fd098f0865a1a6"
  },
  {
    "url": "assets/img/figure-14-12-FKWX3DRN.3a60e36c.svg",
    "revision": "3a60e36c1a1a60cd3330cfc83a0a5150"
  },
  {
    "url": "assets/img/figure-14-13-LRTFEHXK.a56ca479.png",
    "revision": "a56ca47988c45937a57aa60ecf26150f"
  },
  {
    "url": "assets/img/figure-14-15-DBQMPINY.29a67365.svg",
    "revision": "29a67365453e95be1ab254789d001538"
  },
  {
    "url": "assets/img/figure-14-17-RHMGJC6L.a0cc3fda.svg",
    "revision": "a0cc3fda8db72e8ed8ae7cf60f4417ea"
  },
  {
    "url": "assets/img/figure-14-19-Y5ZPZAJT.d0cece55.svg",
    "revision": "d0cece553431baf13e725578351d240c"
  },
  {
    "url": "assets/img/figure-14-2-DVJHFDA4.2a35d1e1.png",
    "revision": "2a35d1e1b049a80220aa1d0340ab8f3e"
  },
  {
    "url": "assets/img/figure-14-21-AZ4TQFF2.c5d9dc5e.svg",
    "revision": "c5d9dc5e05fc9722b5e649df32eab103"
  },
  {
    "url": "assets/img/figure-14-22-3EM25VLA.dd174d72.svg",
    "revision": "dd174d72c70ad30ae66596382031122b"
  },
  {
    "url": "assets/img/figure-14-23-YQDZDVEV.1da6dd2f.png",
    "revision": "1da6dd2fa74ffa79d133539d061fef3f"
  },
  {
    "url": "assets/img/figure-14-24-LIPZPHHR.6a94dc1e.svg",
    "revision": "6a94dc1eb623e11025858aca7b5b5882"
  },
  {
    "url": "assets/img/figure-14-25-4VSMBFLW.ceafd408.svg",
    "revision": "ceafd408b2744b6a7d483acab2782ae4"
  },
  {
    "url": "assets/img/figure-14-26-DQ2B7KIJ.9fa92e94.svg",
    "revision": "9fa92e940eb515c508b2e82f6a7b7cb3"
  },
  {
    "url": "assets/img/figure-14-27-GVQ6JW3A.8be193f8.png",
    "revision": "8be193f8c5dfbe90f7f575d05a2e6de3"
  },
  {
    "url": "assets/img/figure-14-28-Q7VI7TYL.c61abc74.png",
    "revision": "c61abc74f444ea66ae03e103849f1f96"
  },
  {
    "url": "assets/img/figure-14-3-S2A555CM.f0ad0a6c.png",
    "revision": "f0ad0a6cd295c5713e946c5176fef3a9"
  },
  {
    "url": "assets/img/figure-14-4-ADSJBRI3.3845d787.png",
    "revision": "3845d787870ef595d03e7c64c8db9f74"
  },
  {
    "url": "assets/img/figure-14-5-PWL5A5PM.61c19cb5.png",
    "revision": "61c19cb5544034880c65b22c99686b20"
  },
  {
    "url": "assets/img/figure-14-6-IK5S43FH.edd9e011.png",
    "revision": "edd9e011a2cebe0fc4f6cd9a72c255c6"
  },
  {
    "url": "assets/img/figure-14-7-25E4UND4.76358d77.png",
    "revision": "76358d7741d5be05b3ce35e2907000b4"
  },
  {
    "url": "assets/img/figure-14-8-6TUJKWRP.bb38d060.svg",
    "revision": "bb38d060c9376a7067a2fd31d97a40a7"
  },
  {
    "url": "assets/img/figure-14-9-363XWSRP.ac3569af.svg",
    "revision": "ac3569af620c3a62bfa2a1a18e6dd2f8"
  },
  {
    "url": "assets/img/flex-basis.5afb0c5f.png",
    "revision": "5afb0c5ffbd1fcf77b6b7efd7c73bb28"
  },
  {
    "url": "assets/img/flex-grow.fcb22e38.svg",
    "revision": "fcb22e3847bd746a989fb97a82557de9"
  },
  {
    "url": "assets/img/flow.3d63a0fb.png",
    "revision": "3d63a0fb1d58455d7aa6cc770a8173ba"
  },
  {
    "url": "assets/img/full-kubernetes-model-architecture.6c6c5d1e.png",
    "revision": "6c6c5d1ece1a51de0794a01f30dbcc27"
  },
  {
    "url": "assets/img/graph-1.504cee7a.png",
    "revision": "504cee7ac228cbea6f405774d5848a68"
  },
  {
    "url": "assets/img/hadoop-architecture.b16ae7f2.png",
    "revision": "b16ae7f2dee68e529daf7ab03db7cc05"
  },
  {
    "url": "assets/img/hexagonal_original.8737083e.gif",
    "revision": "8737083ec4593abbff4ea7ce9b5e9518"
  },
  {
    "url": "assets/img/hexagonal-arch-4-ports-adapters2.8fdf0f05.png",
    "revision": "8fdf0f051ea9c4a19ee730080506d4cc"
  },
  {
    "url": "assets/img/hld-lld.8cd69499.png",
    "revision": "8cd6949949ad6b7a8a0611f1de491e6a"
  },
  {
    "url": "assets/img/hld.adbbf5f1.png",
    "revision": "adbbf5f1fa04fd8a74fa2011282d4e85"
  },
  {
    "url": "assets/img/hld.f724e22c.png",
    "revision": "f724e22c95c3833de081867e10ebefc7"
  },
  {
    "url": "assets/img/image--002.c18dec8f.jpg",
    "revision": "c18dec8f1ad2819f423c8875e9ceffed"
  },
  {
    "url": "assets/img/image--002.e715b54f.jpg",
    "revision": "e715b54f81643d03029a767b12ac4927"
  },
  {
    "url": "assets/img/image--003.ef282791.jpg",
    "revision": "ef2827913ca5bdddbf1470510bb9a540"
  },
  {
    "url": "assets/img/image--003.f050157c.jpg",
    "revision": "f050157c71786712a34d5190ad8319ab"
  },
  {
    "url": "assets/img/image--004.019ede3e.jpg",
    "revision": "019ede3e94b64c48df0ec924ee1e4285"
  },
  {
    "url": "assets/img/image--004.ed9eb89a.jpg",
    "revision": "ed9eb89acc2ccc7a4f737d6437b89311"
  },
  {
    "url": "assets/img/image--005.b90151cf.jpg",
    "revision": "b90151cfaefb2b4a7318badbf7f6222f"
  },
  {
    "url": "assets/img/image--006.9c6c95b6.jpg",
    "revision": "9c6c95b62da5cee8697f50acf538a07a"
  },
  {
    "url": "assets/img/image--007.7f3c5574.jpg",
    "revision": "7f3c5574df404e3e74b50a95f7d9d900"
  },
  {
    "url": "assets/img/image--007.8a14ae1d.jpg",
    "revision": "8a14ae1d6ae4b25108a423022205d97e"
  },
  {
    "url": "assets/img/image--008.d87c5e12.jpg",
    "revision": "d87c5e1247ddd4f995936d8c550d96a6"
  },
  {
    "url": "assets/img/image--009.292a0ee1.jpg",
    "revision": "292a0ee146465b9dc1db7d277d3ef651"
  },
  {
    "url": "assets/img/image--010.9bd8cb7b.jpg",
    "revision": "9bd8cb7bb618c95fcef9db2fdade9fe2"
  },
  {
    "url": "assets/img/image--011.980c080f.png",
    "revision": "980c080fa4ed98e6e210d6771c75f7bd"
  },
  {
    "url": "assets/img/image--011.b868fd28.jpg",
    "revision": "b868fd2891c78bcfc15a0bb4c339c6ed"
  },
  {
    "url": "assets/img/image--012.606e5ae5.jpg",
    "revision": "606e5ae52517a7bb1d1ab6add997b449"
  },
  {
    "url": "assets/img/image--013.b663b501.jpg",
    "revision": "b663b501d3e5ecdf48500832c7d09ad8"
  },
  {
    "url": "assets/img/image--014.5d836f4d.jpg",
    "revision": "5d836f4ddba49e4eeddab31dadb2f290"
  },
  {
    "url": "assets/img/image--015.fea4418b.jpg",
    "revision": "fea4418bf278e2e5e9e4839c711c1285"
  },
  {
    "url": "assets/img/image--016.47b46824.jpg",
    "revision": "47b4682478f096f8434bc32a74022795"
  },
  {
    "url": "assets/img/image--016.73f6b03d.jpg",
    "revision": "73f6b03dbb2d348ad05b081855fbdcf6"
  },
  {
    "url": "assets/img/image--017.415231f0.png",
    "revision": "415231f02ffad50b2b6a8fa99caf1151"
  },
  {
    "url": "assets/img/image--017.d6e7de30.jpg",
    "revision": "d6e7de302516a4a28e77a360f54c69e0"
  },
  {
    "url": "assets/img/image--018.01e159ef.jpg",
    "revision": "01e159ef860f5b33fe11bd54503dff53"
  },
  {
    "url": "assets/img/image--019.d18fd686.jpg",
    "revision": "d18fd6868f36440f7a5805fe69254865"
  },
  {
    "url": "assets/img/image--020.6f6d6ce9.jpg",
    "revision": "6f6d6ce9acf4c7fad8c12079e571b000"
  },
  {
    "url": "assets/img/image--020.b0b0a3c5.png",
    "revision": "b0b0a3c518ae3757601daaaf323d8c26"
  },
  {
    "url": "assets/img/image--021.a0bc49c0.png",
    "revision": "a0bc49c02081be93772a96f21305516a"
  },
  {
    "url": "assets/img/image--021.e99ad9d0.jpg",
    "revision": "e99ad9d0891c7f825082ade3457acc5f"
  },
  {
    "url": "assets/img/image--022.046763f1.jpg",
    "revision": "046763f176ca6afe5708f08e4c6fc6fd"
  },
  {
    "url": "assets/img/image--023.18f371ec.jpg",
    "revision": "18f371ec4cb4f2797a53772f4033f592"
  },
  {
    "url": "assets/img/image--024.48936cd0.jpg",
    "revision": "48936cd0979f2b35cba13edc8c40163d"
  },
  {
    "url": "assets/img/image--024.c878a00e.jpg",
    "revision": "c878a00e80daabb53fa0a1f8325fcdd9"
  },
  {
    "url": "assets/img/image--025.26429fcd.jpg",
    "revision": "26429fcd3ff7d0885fccbf4cf175c116"
  },
  {
    "url": "assets/img/image--025.46d7abe8.jpg",
    "revision": "46d7abe837f7d0016f5f821b0788c488"
  },
  {
    "url": "assets/img/image--026.237c40e7.jpg",
    "revision": "237c40e7c2056816d25c85a8c54af2cb"
  },
  {
    "url": "assets/img/image--027.270b316f.jpg",
    "revision": "270b316f534c7ea8d98e577d099361dd"
  },
  {
    "url": "assets/img/image--027.f4344e6d.jpg",
    "revision": "f4344e6d2d32f706f26ebd7c6ad4ce7f"
  },
  {
    "url": "assets/img/image--028.823c6807.jpg",
    "revision": "823c6807937a7cff5cfafc50091a70ea"
  },
  {
    "url": "assets/img/image--029.42f2f2ef.jpg",
    "revision": "42f2f2ef615f42f2ce9743a262a391ae"
  },
  {
    "url": "assets/img/image--030.7600d898.jpg",
    "revision": "7600d898027d71cfce71525d3e6b487a"
  },
  {
    "url": "assets/img/image--031.1597fbad.jpg",
    "revision": "1597fbadbd41ad05945e25b1990534d2"
  },
  {
    "url": "assets/img/image--032.b47ef83a.jpg",
    "revision": "b47ef83a66df6a08f627f1f791317508"
  },
  {
    "url": "assets/img/image--033.e1a6c8eb.jpg",
    "revision": "e1a6c8eba11aa33c7b47e61a3cffb8af"
  },
  {
    "url": "assets/img/image--034.4cb90d7b.jpg",
    "revision": "4cb90d7b3e1846b8766a523adb10c33c"
  },
  {
    "url": "assets/img/image--035.ddccddb8.jpg",
    "revision": "ddccddb8f0cf830f2643d2474d92f9ce"
  },
  {
    "url": "assets/img/image--036.8f58626b.jpg",
    "revision": "8f58626b277128f3e365530cb5a58df7"
  },
  {
    "url": "assets/img/image--037.ed55526f.jpg",
    "revision": "ed55526faff38da2bbb34e377f86faea"
  },
  {
    "url": "assets/img/image--038.12aa64d8.jpg",
    "revision": "12aa64d8daf6d1af84b1b2a4f6f9dd73"
  },
  {
    "url": "assets/img/image--038.ddac44e3.jpg",
    "revision": "ddac44e3079ce4b91c71eda3c588c022"
  },
  {
    "url": "assets/img/image--039.bd0141cb.jpg",
    "revision": "bd0141cbfe9718639f5d05e44efcd1cf"
  },
  {
    "url": "assets/img/image--039.f0ed2880.jpg",
    "revision": "f0ed28807b813a14abb3192da40525d8"
  },
  {
    "url": "assets/img/image--040.413484e3.jpg",
    "revision": "413484e3c9e6e0990646b3ba961481b6"
  },
  {
    "url": "assets/img/image--040.df399fe8.jpg",
    "revision": "df399fe821d515bc8f384dbc7c6a8336"
  },
  {
    "url": "assets/img/image--041.29e4a17a.jpg",
    "revision": "29e4a17a1c0e655accaf6c45f64a56cc"
  },
  {
    "url": "assets/img/image--041.a2ea71bc.jpg",
    "revision": "a2ea71bc0c4edfca5582ca011d6bd2d3"
  },
  {
    "url": "assets/img/image--042.9fdac72d.png",
    "revision": "9fdac72d04a1c1a6d6bc9553be77766d"
  },
  {
    "url": "assets/img/image--042.c57c62b1.jpg",
    "revision": "c57c62b1f3e4373aab86d8b286ea397b"
  },
  {
    "url": "assets/img/image--043.01457d8c.png",
    "revision": "01457d8c7e3e330f72cd04553facb50e"
  },
  {
    "url": "assets/img/image--043.d8199a87.jpg",
    "revision": "d8199a87819baf81943832489af065fe"
  },
  {
    "url": "assets/img/image--044.582ae702.jpg",
    "revision": "582ae702c5e4f061e75b4d7261488b42"
  },
  {
    "url": "assets/img/image--046.2c48092e.jpg",
    "revision": "2c48092eb326f2aed04a4011f84c7383"
  },
  {
    "url": "assets/img/image--047.ecd9ee8f.jpg",
    "revision": "ecd9ee8f5590d099bc82945a5db02b10"
  },
  {
    "url": "assets/img/image--048.216f859e.jpg",
    "revision": "216f859e651406e9fc42abc602feccff"
  },
  {
    "url": "assets/img/image--049.f5ec9710.jpg",
    "revision": "f5ec97106d5044028ac19d72e852afd5"
  },
  {
    "url": "assets/img/image--050.4d070bce.jpg",
    "revision": "4d070bce191fc8da0ff13a7d10038836"
  },
  {
    "url": "assets/img/image--051.00405a60.jpg",
    "revision": "00405a60da48abe1e2f051d73fa9e4ec"
  },
  {
    "url": "assets/img/image--052.47116516.jpg",
    "revision": "471165161da98af1cc4b84a21f253e5e"
  },
  {
    "url": "assets/img/image--053.d8ec5d25.jpg",
    "revision": "d8ec5d25ae34a94d096670ca9b4a1e06"
  },
  {
    "url": "assets/img/image--054.8d7de5ee.jpg",
    "revision": "8d7de5eeaea6590c3154b694aa923367"
  },
  {
    "url": "assets/img/image--055.e94b46b1.jpg",
    "revision": "e94b46b1514fc05b95ffb891a0f2b410"
  },
  {
    "url": "assets/img/image--056.a4bb5907.jpg",
    "revision": "a4bb59079cd76939f68e406a4291429e"
  },
  {
    "url": "assets/img/image--057.ed72462c.jpg",
    "revision": "ed72462cb9de170391e78b49c509fe17"
  },
  {
    "url": "assets/img/image--058.367e78e6.jpg",
    "revision": "367e78e640a1ce8f4a78696efd8e381e"
  },
  {
    "url": "assets/img/image--059.e81720bd.jpg",
    "revision": "e81720bd0306319b0979bf5906989376"
  },
  {
    "url": "assets/img/image--060.260f4be5.jpg",
    "revision": "260f4be572e39750e18b52935a4f40c9"
  },
  {
    "url": "assets/img/image--076.79e7d5da.jpg",
    "revision": "79e7d5da0ad5863688b9ba5cf1e7010d"
  },
  {
    "url": "assets/img/image--077.24802df6.jpg",
    "revision": "24802df6c6a514b19c1868b7bef4266a"
  },
  {
    "url": "assets/img/image--078.c30aaee4.jpg",
    "revision": "c30aaee4e75470e440ebe35bc9b22ab1"
  },
  {
    "url": "assets/img/image--079.846a5f29.jpg",
    "revision": "846a5f29dd45b2072f5bf4c92ee1879e"
  },
  {
    "url": "assets/img/image--080.9c1fad46.jpg",
    "revision": "9c1fad468bc8d5512b483d81885861be"
  },
  {
    "url": "assets/img/image--081.3e82ce45.jpg",
    "revision": "3e82ce45ce5d308ac7f9a2895964aee9"
  },
  {
    "url": "assets/img/integration.15941bad.png",
    "revision": "15941bad4328ede9f801539b245feb71"
  },
  {
    "url": "assets/img/ip-classes.81c247d8.png",
    "revision": "81c247d83107627edce6533574342fae"
  },
  {
    "url": "assets/img/joins.9ba0b10d.jpg",
    "revision": "9ba0b10da7976f52b794d7618c62d14c"
  },
  {
    "url": "assets/img/js-coercion.13986b50.png",
    "revision": "13986b50684df9fe6fadbb275f20a6b5"
  },
  {
    "url": "assets/img/justify-content.c9b59254.svg",
    "revision": "c9b59254cf6573dc2ffae250f892363d"
  },
  {
    "url": "assets/img/kafka.a7cdfb98.jpg",
    "revision": "a7cdfb98b8a29abc6d0945551610294a"
  },
  {
    "url": "assets/img/kmean.9065804d.png",
    "revision": "9065804d54cb2f7bfbdd97e0ce85729d"
  },
  {
    "url": "assets/img/lan-vs-wan-vs-man-mc-slide1.39d8412f.png",
    "revision": "39d8412fc391770f0d7b5625c9f94738"
  },
  {
    "url": "assets/img/lanmedias.1ab6f9bd.png",
    "revision": "1ab6f9bd03ac652fe1189212172cd8d3"
  },
  {
    "url": "assets/img/lifecycle.75b1eefb.png",
    "revision": "75b1eefb827ff41864187666025c6609"
  },
  {
    "url": "assets/img/log_anatomy.f2a43aa8.png",
    "revision": "f2a43aa8e2103cda54fff897b66e74a0"
  },
  {
    "url": "assets/img/log_consumer.5f653d1b.png",
    "revision": "5f653d1bfadbbd35721f1b64456fb43d"
  },
  {
    "url": "assets/img/mess-models.7a5a8b35.png",
    "revision": "7a5a8b350af68b523c8cfec7b3855cb8"
  },
  {
    "url": "assets/img/mobx.11c6dc10.png",
    "revision": "11c6dc103eeac4a93078ed3f5817fe1f"
  },
  {
    "url": "assets/img/mono-microservices.e7974ac7.jpg",
    "revision": "e7974ac7dc42e1dd136c6fe35ac2342b"
  },
  {
    "url": "assets/img/mtproto.fd42d2f6.jpg",
    "revision": "fd42d2f6f4e6d0b4dd66f222d32a0b44"
  },
  {
    "url": "assets/img/multipart-upload.59d9588b.png",
    "revision": "59d9588be257fe07cd4b3e6cdfb422c6"
  },
  {
    "url": "assets/img/mysql-string-funcs.fc4eedf0.png",
    "revision": "fc4eedf089d148b5da7f1524c8932602"
  },
  {
    "url": "assets/img/network-device-icon-4.5ca29de7.jpg",
    "revision": "5ca29de71ed5fe0690fcfe04461c69fb"
  },
  {
    "url": "assets/img/nosql-data-model.85556a21.png",
    "revision": "85556a21da9f3bda971db4d4c6147a8b"
  },
  {
    "url": "assets/img/oauth.a174415e.png",
    "revision": "a174415ed69f5a87fd39b7ce7345f582"
  },
  {
    "url": "assets/img/Onion1.78b66789.png",
    "revision": "78b66789acc8560d3e560aec708eb3b3"
  },
  {
    "url": "assets/img/Orchestration.8fcdf97c.jpeg",
    "revision": "8fcdf97cfa4499657481d950a33cd572"
  },
  {
    "url": "assets/img/otp-flow.908f11d5.png",
    "revision": "908f11d55531713ee74d8af4c067995f"
  },
  {
    "url": "assets/img/payload.23c2c700.png",
    "revision": "23c2c700fd9ad46868b969b74cf6c89f"
  },
  {
    "url": "assets/img/payment-gateway-providers-compared.bb0b624d.png",
    "revision": "bb0b624d5affd1a8550feea29fd9347c"
  },
  {
    "url": "assets/img/payment-process.4d105a14.png",
    "revision": "4d105a14a4b01a2dfa4a36bfbede93d6"
  },
  {
    "url": "assets/img/polyglot.cdb5e015.png",
    "revision": "cdb5e0159f3f3bfae81a71d28702bd2a"
  },
  {
    "url": "assets/img/Polymorphic-table.eb59cbb9.png",
    "revision": "eb59cbb9d01326344dc93c3375c5340a"
  },
  {
    "url": "assets/img/process-types.0c38412f.png",
    "revision": "0c38412f773c32e7a6c0248c500df99d"
  },
  {
    "url": "assets/img/Prometheus-Server_Chart.a793fd6e.png",
    "revision": "a793fd6e9b08ff4431e9917d690de0b5"
  },
  {
    "url": "assets/img/ravioli.879c03ea.png",
    "revision": "879c03ea16af21239ba8397e4088ca78"
  },
  {
    "url": "assets/img/react-hooks-2.a24ca501.jpg",
    "revision": "a24ca501f63059c155029c305792163c"
  },
  {
    "url": "assets/img/react-lifetime.09f698c7.jpg",
    "revision": "09f698c70d89d72b146653ce67f79c0c"
  },
  {
    "url": "assets/img/Redis-Cluster-Architecture-Diagram-Outline-01.08e6b53e.svg",
    "revision": "08e6b53e1b5e9052a27b90498bfe1338"
  },
  {
    "url": "assets/img/redux.e9aec858.jpg",
    "revision": "e9aec858427a0bbf1b3a1d08cd28c811"
  },
  {
    "url": "assets/img/release.8458878d.png",
    "revision": "8458878ded8446c6cfc0385236ba7fe3"
  },
  {
    "url": "assets/img/replica-log-strategies.c6a92918.png",
    "revision": "c6a929189f2d76c105d9d24ff3e7b7b3"
  },
  {
    "url": "assets/img/reverse-index.c92f287f.png",
    "revision": "c92f287fe6d0c6c67d999a869ff0668f"
  },
  {
    "url": "assets/img/rfid-3.6f384b2a.png",
    "revision": "6f384b2aa9e58c8609f5e992fa9180fa"
  },
  {
    "url": "assets/img/sampleroutetable.5a84069d.png",
    "revision": "5a84069d3f948945cbc0ba287c500dd7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sg-flow.7db9fb71.png",
    "revision": "7db9fb711840b46f8d19d65ebcf34772"
  },
  {
    "url": "assets/img/sg.904a7e0d.png",
    "revision": "904a7e0de8935148a9345d6ca4f62057"
  },
  {
    "url": "assets/img/simulator.1ec72860.png",
    "revision": "1ec728606fbfcb99cfec98739d184aa3"
  },
  {
    "url": "assets/img/spot-instance-price.1f17ef42.png",
    "revision": "1f17ef427072079e7d102aa10fa2db8c"
  },
  {
    "url": "assets/img/spot-instance-terminate.707e3f17.png",
    "revision": "707e3f17fa30d4598fb1122a698a0798"
  },
  {
    "url": "assets/img/sql-nosql.8a9a364b.png",
    "revision": "8a9a364b0fb8689a68fdc51703ff37c0"
  },
  {
    "url": "assets/img/sql-query-exe-order.079e4224.jpeg",
    "revision": "079e42249984978bab0e418c0f528666"
  },
  {
    "url": "assets/img/sso-youtube-gg.d3ae4f7b.png",
    "revision": "d3ae4f7ba67f60fdf189fc1ede191268"
  },
  {
    "url": "assets/img/strategic-design.9cc43291.png",
    "revision": "9cc43291c42c6f9db396c7064bcfefcc"
  },
  {
    "url": "assets/img/strategies.0b9fdaf0.jpg",
    "revision": "0b9fdaf05784ee44b9c82510b8ca62fc"
  },
  {
    "url": "assets/img/stream-arch.f7f94662.png",
    "revision": "f7f94662782a9dd3c3bf322c7770d467"
  },
  {
    "url": "assets/img/stream.b5997343.png",
    "revision": "b599734352be76ead6ff27ed1eb3c126"
  },
  {
    "url": "assets/img/subnet-mask-calculator.e16ed44c.png",
    "revision": "e16ed44c0841d45ce17a684882ae48c5"
  },
  {
    "url": "assets/img/switch-compare.8011c60d.png",
    "revision": "8011c60d8f61e9ff128f0a8192a47d71"
  },
  {
    "url": "assets/img/t1.74662d68.png",
    "revision": "74662d688a40e86602204e0c96f6fbfe"
  },
  {
    "url": "assets/img/t2.611f6b9d.png",
    "revision": "611f6b9d643c8a559b6e4b6d82a25d63"
  },
  {
    "url": "assets/img/t3.73d4442b.png",
    "revision": "73d4442bcf55ba18871f04e2ba762edc"
  },
  {
    "url": "assets/img/t4.e017299c.png",
    "revision": "e017299ce3e8523510d83b5e2518ac3f"
  },
  {
    "url": "assets/img/tactical-design.71e4f952.png",
    "revision": "71e4f95298df881c042608a304c974b2"
  },
  {
    "url": "assets/img/tcpip-osi.4d1d8bf4.jpg",
    "revision": "4d1d8bf4c69f43ec415ecbb547d57781"
  },
  {
    "url": "assets/img/test-case-fail.203afb2b.png",
    "revision": "203afb2baaf1f986a0c170aeffbe931e"
  },
  {
    "url": "assets/img/test-case-success.285ddcbb.png",
    "revision": "285ddcbb0b85743e46ba2592b15a8bb9"
  },
  {
    "url": "assets/img/uml-diagram-types.bc0f2e36.png",
    "revision": "bc0f2e368d87390eeb9d488a9008c877"
  },
  {
    "url": "assets/img/uml-example.e9d72b25.png",
    "revision": "e9d72b2550f27dc89e62b3423d67e319"
  },
  {
    "url": "assets/img/Untitled-Diagram.4a7cd18e.png",
    "revision": "4a7cd18e12d1fdfd59d057b0f84f173e"
  },
  {
    "url": "assets/img/upload-a-file-to-s3.ee991fe8.jpeg",
    "revision": "ee991fe85d77718171bb720f7134cf56"
  },
  {
    "url": "assets/img/use-effect.d7adda21.jpeg",
    "revision": "d7adda216f8b08a01d49d7db24bb0490"
  },
  {
    "url": "assets/img/vector-distance-formula.97ff407f.png",
    "revision": "97ff407fa4a76d4880eb8fc08d1d971a"
  },
  {
    "url": "assets/img/vscode-search-reg.c883a7e7.png",
    "revision": "c883a7e7d8ec8295b228b7a1d65981de"
  },
  {
    "url": "assets/img/wanmedias.9be5744f.png",
    "revision": "9be5744f2b4e09f24b5c6b849d2e9931"
  },
  {
    "url": "assets/img/watermark.15b58e98.png",
    "revision": "15b58e98bee092bf7f474014e8cebdc4"
  },
  {
    "url": "assets/img/websocket-load-balancing-issue.6df3eee9.png",
    "revision": "6df3eee9b6848a5987d30c6c5e17de79"
  },
  {
    "url": "assets/img/word-count.9bec76b7.png",
    "revision": "9bec76b776e68e38af1b17874f3863c1"
  },
  {
    "url": "assets/img/wp-metadatatable.c1b9b204.png",
    "revision": "c1b9b204a09aaad8283b901339daac87"
  },
  {
    "url": "assets/js/10.86535e21.js",
    "revision": "d07177220c00ad32a1d81c4e29b98cad"
  },
  {
    "url": "assets/js/100.b3188006.js",
    "revision": "22c48bfd00ca800e06cca8d64ea843bd"
  },
  {
    "url": "assets/js/101.5470b48c.js",
    "revision": "abc685dd1dd2d0e5f19665b863656648"
  },
  {
    "url": "assets/js/102.da441bfc.js",
    "revision": "7695895b163e056058e995fb137365b1"
  },
  {
    "url": "assets/js/103.6d0472e1.js",
    "revision": "e8b900b828cf3d62757f29f97333ad7a"
  },
  {
    "url": "assets/js/104.6f217544.js",
    "revision": "bfff8707cd6a103b21df28f23757a8e3"
  },
  {
    "url": "assets/js/105.e8210147.js",
    "revision": "ba420d40b2047993ec8f0466e69e4806"
  },
  {
    "url": "assets/js/106.2df88f3a.js",
    "revision": "a31cbd8733a3c020e1c9bb610027f850"
  },
  {
    "url": "assets/js/107.035f827b.js",
    "revision": "d308f3ebf9a4ec3771effe7bcdf8b0dd"
  },
  {
    "url": "assets/js/108.eb636999.js",
    "revision": "630c2b9a1c52ea4cf72395d021acb404"
  },
  {
    "url": "assets/js/109.31d20eb5.js",
    "revision": "8c2bfed51cba9f0f979eecc4176c41d1"
  },
  {
    "url": "assets/js/11.e34648a9.js",
    "revision": "e47038be393f1894593f678a8462f693"
  },
  {
    "url": "assets/js/110.5fdcec68.js",
    "revision": "bff07c7846c0e0b27fff932fe44aba6e"
  },
  {
    "url": "assets/js/111.633af4cf.js",
    "revision": "fe4fec1e9b068a5ab46f06af7b700abe"
  },
  {
    "url": "assets/js/112.02234e86.js",
    "revision": "5c5354f2df672ce88df3e54c04aeeba5"
  },
  {
    "url": "assets/js/113.eb40c997.js",
    "revision": "4c22957b79d5c64e9fea291e4abe8f53"
  },
  {
    "url": "assets/js/114.ecf90c83.js",
    "revision": "ce47690fce8bfcafc11bad6433e4b2dc"
  },
  {
    "url": "assets/js/115.6ff6c777.js",
    "revision": "cfd294901bc2744c4fa0920dae0b39cf"
  },
  {
    "url": "assets/js/116.a2c81401.js",
    "revision": "5b7649faa41862ec001a905419251f31"
  },
  {
    "url": "assets/js/117.2e4d15d1.js",
    "revision": "4734f86a15cc3be8415c3c9bc3f93cbf"
  },
  {
    "url": "assets/js/118.6e39679f.js",
    "revision": "dcab000abbc10e0b601d1f93dc6453dd"
  },
  {
    "url": "assets/js/119.196c0559.js",
    "revision": "bcaeebdb2520f4b6ae17d43bf74d5eec"
  },
  {
    "url": "assets/js/12.0f25bcb5.js",
    "revision": "22dfc354bf5c38d98984ee3961ad60df"
  },
  {
    "url": "assets/js/120.604488af.js",
    "revision": "b9fb4299b0680c09f0b08ab7762db3df"
  },
  {
    "url": "assets/js/121.30b4dabe.js",
    "revision": "938d2f1cc2ae8314fda8d0fef894c56a"
  },
  {
    "url": "assets/js/122.9c7085b3.js",
    "revision": "c701a6aff594669afffe34a8d3beb9c4"
  },
  {
    "url": "assets/js/123.fb7cd3a2.js",
    "revision": "e012e1a33ecac9d59c201478817d9b7b"
  },
  {
    "url": "assets/js/124.212ba372.js",
    "revision": "5fedca59e3218f6281d925c407635316"
  },
  {
    "url": "assets/js/125.80b9f57b.js",
    "revision": "ff6c05bab0487089284ec888ef84a9e3"
  },
  {
    "url": "assets/js/126.bf0ebdb9.js",
    "revision": "4cc4b2742025679bd1926de617d1efd6"
  },
  {
    "url": "assets/js/127.9179f758.js",
    "revision": "2b34c37a4a4b0c401b9bf191b5b32406"
  },
  {
    "url": "assets/js/128.c7ea16c0.js",
    "revision": "eebeb2ef0f18ba898596be18f2cdb7bb"
  },
  {
    "url": "assets/js/129.a82f813d.js",
    "revision": "59194ea7e390f7909aafd59ae5fef2a6"
  },
  {
    "url": "assets/js/13.a677d1a1.js",
    "revision": "2f75b980cd386117d63cf5ec343c947b"
  },
  {
    "url": "assets/js/130.99d6599b.js",
    "revision": "0363206cbd635e1d6a3a41150c06b309"
  },
  {
    "url": "assets/js/131.2bd4ee40.js",
    "revision": "a70c63d54530b395a173d6b54c75e724"
  },
  {
    "url": "assets/js/132.16cba406.js",
    "revision": "263af9338c2de557f4df938cc4fac0e8"
  },
  {
    "url": "assets/js/133.fbddd094.js",
    "revision": "344ce75604060c152f2984f5a77ee2b6"
  },
  {
    "url": "assets/js/134.d2ccd2e0.js",
    "revision": "3b7126b73eb74878e9dfaa172108f0fa"
  },
  {
    "url": "assets/js/135.b376ad8f.js",
    "revision": "c8c78fa5bcb845f20253922a39a3267f"
  },
  {
    "url": "assets/js/136.23853944.js",
    "revision": "f19c2c42138ea75ce1337b7cebf81bda"
  },
  {
    "url": "assets/js/137.59982b19.js",
    "revision": "5ecf3a63c64fad66aa3584b076c10aed"
  },
  {
    "url": "assets/js/138.715bd06c.js",
    "revision": "828cdd09789914f6f08a77b9d2c722b2"
  },
  {
    "url": "assets/js/139.aab47236.js",
    "revision": "5e8aa7226db1cfbd82ca31a2b52c21e7"
  },
  {
    "url": "assets/js/14.a8d8dd82.js",
    "revision": "c614f19cd346eb21ac8be33b70a1fab6"
  },
  {
    "url": "assets/js/140.dccb2a09.js",
    "revision": "2ea9e84537522d7fac90b5ab310855d1"
  },
  {
    "url": "assets/js/141.29b02893.js",
    "revision": "72a1feab76c625402ef827db6b16c5f1"
  },
  {
    "url": "assets/js/142.bdc15d89.js",
    "revision": "16ebc0814e32bfcaeac0b15d18b5203b"
  },
  {
    "url": "assets/js/143.a8af6b71.js",
    "revision": "ed7823ba5c6feea967b2e62e1848038e"
  },
  {
    "url": "assets/js/144.1f0db4e6.js",
    "revision": "ed749ccfc11928f13920eeaf4d5c936a"
  },
  {
    "url": "assets/js/145.aa32c4f4.js",
    "revision": "beaabea830e059ec317d6ce87d874e41"
  },
  {
    "url": "assets/js/146.41a31ce8.js",
    "revision": "571410b8c076df26fd11097a8a13e298"
  },
  {
    "url": "assets/js/147.73a950a4.js",
    "revision": "57a56fd66cbba953e9f111507e82a043"
  },
  {
    "url": "assets/js/148.48920d7a.js",
    "revision": "08a8a49cdffdaf7ee5fb74183f107e47"
  },
  {
    "url": "assets/js/149.dc09ae7d.js",
    "revision": "adff80ae839435872defff35801351de"
  },
  {
    "url": "assets/js/15.4df88308.js",
    "revision": "3b89416d8c8244d50521c4b573597364"
  },
  {
    "url": "assets/js/150.76d3de36.js",
    "revision": "555ca6801d30f14d9ebe8c02cbe928e3"
  },
  {
    "url": "assets/js/151.c7629da7.js",
    "revision": "e235bf079408abc81f8b322e40ea8f47"
  },
  {
    "url": "assets/js/152.95bb2cc3.js",
    "revision": "034a3bd16dd6ab5d6516e657c159e35f"
  },
  {
    "url": "assets/js/153.4bcdae2c.js",
    "revision": "9634841c695ca6ae2a5d4bc5244b0547"
  },
  {
    "url": "assets/js/154.c1bee667.js",
    "revision": "8510ff3dceea0bfd394476a26aae50a4"
  },
  {
    "url": "assets/js/155.b0cdae6f.js",
    "revision": "93abc6aaf2e30a7570fe7d175285f06f"
  },
  {
    "url": "assets/js/156.af9e189a.js",
    "revision": "0826cd1cf2e70d68230d1ba17e38b91b"
  },
  {
    "url": "assets/js/157.ba519d75.js",
    "revision": "62834a48e0189a95a515d0db859f9bfb"
  },
  {
    "url": "assets/js/158.7a2cf1c2.js",
    "revision": "87c08449050029a192bb769abd20d073"
  },
  {
    "url": "assets/js/159.aa420807.js",
    "revision": "86e31f1e5aaff1bde88543e8c4ef31f7"
  },
  {
    "url": "assets/js/16.b58ddb71.js",
    "revision": "c2e2cfb18689b0cff4c973445956bcda"
  },
  {
    "url": "assets/js/160.0d810824.js",
    "revision": "7e0fdef459e115aa997c463c84dd4beb"
  },
  {
    "url": "assets/js/161.17e69281.js",
    "revision": "9f0d65205d66b89b738c395f3271640b"
  },
  {
    "url": "assets/js/162.485983cb.js",
    "revision": "e9e73508283bc0aa396be02083f91092"
  },
  {
    "url": "assets/js/163.da6340c0.js",
    "revision": "7af1b7f178711d1afb125c5604065c45"
  },
  {
    "url": "assets/js/164.9dea2c9a.js",
    "revision": "0612c8a31a5d972e33e3539d2b415df6"
  },
  {
    "url": "assets/js/165.86d318c7.js",
    "revision": "578f8d5f09356b0af3465e0f329a87ca"
  },
  {
    "url": "assets/js/166.041dfd12.js",
    "revision": "8513a0757e3fa224849475ed62c8b208"
  },
  {
    "url": "assets/js/167.1f17d937.js",
    "revision": "d45a2022c3c32c3dc36bfc1581c9d7bc"
  },
  {
    "url": "assets/js/168.9da1659c.js",
    "revision": "15f87ba961e1fd783e5b4d3be5603842"
  },
  {
    "url": "assets/js/169.58d8ee90.js",
    "revision": "5f2f2a0aa05539f32f5d2660f1fdb9cb"
  },
  {
    "url": "assets/js/17.9db14cb9.js",
    "revision": "683e5b5930e1d61968bdd35821319c39"
  },
  {
    "url": "assets/js/170.da5c369f.js",
    "revision": "c505bba0e7d231fe28644b01795671bc"
  },
  {
    "url": "assets/js/171.470523b4.js",
    "revision": "1b180eedc71b4ce89aee47800217cc55"
  },
  {
    "url": "assets/js/172.25e00d56.js",
    "revision": "3f335886719d0be44f445c258e73575b"
  },
  {
    "url": "assets/js/173.6a3ce47d.js",
    "revision": "c5d9bc0cd442fcb18e0363fadf2c47ad"
  },
  {
    "url": "assets/js/174.d6076d02.js",
    "revision": "a019f817827eb6ffe6f2b32af7c6437d"
  },
  {
    "url": "assets/js/175.415d1523.js",
    "revision": "c025a15b99b859f99fc24b1da339683d"
  },
  {
    "url": "assets/js/176.37d4f83e.js",
    "revision": "5bf3d97ec5a181e772e40dc4dfa94167"
  },
  {
    "url": "assets/js/177.60f9c6db.js",
    "revision": "990539cc19465b049f27410f2868aeee"
  },
  {
    "url": "assets/js/178.dfc7d1a0.js",
    "revision": "05bc23036eb496194ebf023425d42e22"
  },
  {
    "url": "assets/js/179.c1a7efc2.js",
    "revision": "622325b4261d5a245e3d02f0700f8837"
  },
  {
    "url": "assets/js/18.528fa8a4.js",
    "revision": "c45d4c438ba05ac23a18f5023781de47"
  },
  {
    "url": "assets/js/180.d9d50a07.js",
    "revision": "1dc93f22fcce9d177c7cdac59c00936b"
  },
  {
    "url": "assets/js/181.1ed56719.js",
    "revision": "e29f78d91e6914a138fbe465b46af403"
  },
  {
    "url": "assets/js/182.5e72455c.js",
    "revision": "7ddb16f1c00e4c9f90cc19e2c8ffee4a"
  },
  {
    "url": "assets/js/183.fda0b3cc.js",
    "revision": "464c6ec8b620a91e8c31e7d217a174df"
  },
  {
    "url": "assets/js/184.60683271.js",
    "revision": "e3cd6d214bd9714fde8fea58b377e387"
  },
  {
    "url": "assets/js/185.d67ba33a.js",
    "revision": "26f0469f909454c7ecb29c2c391e55ce"
  },
  {
    "url": "assets/js/186.344c83f3.js",
    "revision": "1ab0b138dda431c2b05ff670e328400b"
  },
  {
    "url": "assets/js/187.2810fcd1.js",
    "revision": "d1be23a8f9dfd5637bc6451c1cee3dae"
  },
  {
    "url": "assets/js/188.f7e9ea30.js",
    "revision": "4dd882f7a987faa0e708133bc87e12a9"
  },
  {
    "url": "assets/js/189.e269d8ee.js",
    "revision": "651501185ac0ccd19dca98a60364ad36"
  },
  {
    "url": "assets/js/19.3677ab17.js",
    "revision": "d81446cbf49d01d3981e350e1eb3f6a7"
  },
  {
    "url": "assets/js/190.31a020dd.js",
    "revision": "a6ebca2d1bcf760b987f0a5b50eaa50a"
  },
  {
    "url": "assets/js/191.86308359.js",
    "revision": "52f36ebe50a06143f626fdbb6ae624fd"
  },
  {
    "url": "assets/js/192.2356e601.js",
    "revision": "84c5b24d365b2f2e2351dcad57477c13"
  },
  {
    "url": "assets/js/193.0da0a52a.js",
    "revision": "f7ecce7200a9be4a483adb037dc59b22"
  },
  {
    "url": "assets/js/194.7b69c464.js",
    "revision": "8340d7f15621699cafac976bc0598a0f"
  },
  {
    "url": "assets/js/195.477fff62.js",
    "revision": "5ea26cce2170159350dcbc1b2ed01bd5"
  },
  {
    "url": "assets/js/196.253dcd41.js",
    "revision": "29742c7a55b73d99c7695d7a817857e7"
  },
  {
    "url": "assets/js/197.85024a95.js",
    "revision": "2444f49d364b6ee64a89322cd153ef7a"
  },
  {
    "url": "assets/js/198.b4c4d92c.js",
    "revision": "bf57de914b2ddc5ed5b3856f93310fd7"
  },
  {
    "url": "assets/js/199.4c89c375.js",
    "revision": "d123d77f80506204d31bd50014abb202"
  },
  {
    "url": "assets/js/2.105448cf.js",
    "revision": "55d3053d732cdb5ca8e3ff226da627b4"
  },
  {
    "url": "assets/js/20.298c56e5.js",
    "revision": "780a542589739bfbf2c109dece3d031d"
  },
  {
    "url": "assets/js/200.3b8385f6.js",
    "revision": "923a5f4d36666a5a9f70c2168f68052a"
  },
  {
    "url": "assets/js/201.32a73c82.js",
    "revision": "a59146993a092dbd4e838e2d326c1656"
  },
  {
    "url": "assets/js/202.66b297af.js",
    "revision": "40f5c803181a74acc0cbd8dd0614440d"
  },
  {
    "url": "assets/js/203.604d5608.js",
    "revision": "71b829216330bc2d18c62d8d36c5ba6c"
  },
  {
    "url": "assets/js/204.5d23a95b.js",
    "revision": "c7bf50219a2e4c81c5a2b26dd2127390"
  },
  {
    "url": "assets/js/205.7b379979.js",
    "revision": "fe973701654272ac3e2827545af12458"
  },
  {
    "url": "assets/js/206.058a5cb1.js",
    "revision": "0bc22474d762a34dc9d337985ccaedea"
  },
  {
    "url": "assets/js/207.6e3fef67.js",
    "revision": "af771073148583eadb80ec40cb630039"
  },
  {
    "url": "assets/js/208.6b06bd4f.js",
    "revision": "b6c2b30f0691bb0b3aa9efc3fc37723c"
  },
  {
    "url": "assets/js/209.e7324c69.js",
    "revision": "8db3c257a16ee80921de53319bfdb2ec"
  },
  {
    "url": "assets/js/21.7769137c.js",
    "revision": "9050e0c32f71da62c004fc2cb7f10f79"
  },
  {
    "url": "assets/js/210.3117b735.js",
    "revision": "7766c9357e3025d6ea3df6ff19277e80"
  },
  {
    "url": "assets/js/211.cb7ab612.js",
    "revision": "8b47709e84ccd7d04fc869a3efc8e044"
  },
  {
    "url": "assets/js/212.5173339e.js",
    "revision": "a38f3880d4bbf7c6c3df6fb03992d9ff"
  },
  {
    "url": "assets/js/213.389e4744.js",
    "revision": "58821079ac865bf275347aeb654c8fde"
  },
  {
    "url": "assets/js/214.87954d97.js",
    "revision": "491e089e0ab2f5cd529372c58dfc7dac"
  },
  {
    "url": "assets/js/215.0989ada5.js",
    "revision": "3bccce9d521c1c713a7e1b41d8e8df35"
  },
  {
    "url": "assets/js/216.f29dbaea.js",
    "revision": "cfa66cef977911369cb8e9a5f074af94"
  },
  {
    "url": "assets/js/217.a0e04d0a.js",
    "revision": "b4b8478851d9d4e21e8bf4ed9fab2391"
  },
  {
    "url": "assets/js/218.cdd73c64.js",
    "revision": "6423244b3cb997841cb345a8f73a0739"
  },
  {
    "url": "assets/js/219.7125782a.js",
    "revision": "1b9033484ce0e6effb81ed6c9f2e6db7"
  },
  {
    "url": "assets/js/22.42d2684a.js",
    "revision": "40c100d03f49492928d104ae9ba98eeb"
  },
  {
    "url": "assets/js/220.a039e43d.js",
    "revision": "68cd236806a57478ed0f87727f63180e"
  },
  {
    "url": "assets/js/221.99e239f2.js",
    "revision": "e3364ce2883869a7bcf98af08883efc3"
  },
  {
    "url": "assets/js/222.ba0c0a7c.js",
    "revision": "7b7096264cd30073637c2f57a0edcbcf"
  },
  {
    "url": "assets/js/223.7876094b.js",
    "revision": "919fe47c37785ea8b862b08d7bb2cbe5"
  },
  {
    "url": "assets/js/224.988cf2de.js",
    "revision": "d6f9ec9a90f0a55e2699ac6cf5670ea1"
  },
  {
    "url": "assets/js/225.e2f9ac18.js",
    "revision": "64b26118c21a9b258f75ceaaed80a26f"
  },
  {
    "url": "assets/js/226.efe067b9.js",
    "revision": "73f1c0f3764749ad34a2b58f86af2fc3"
  },
  {
    "url": "assets/js/227.895261f5.js",
    "revision": "6ecf590e9ba2a592b57193b1e693145e"
  },
  {
    "url": "assets/js/228.72861558.js",
    "revision": "d819e76321eef55adccac79e49d497d4"
  },
  {
    "url": "assets/js/229.1ccb4505.js",
    "revision": "7639b0779e9d822a684d82e4145181a6"
  },
  {
    "url": "assets/js/23.2f556297.js",
    "revision": "439334287d9775d2d3344acf356030fb"
  },
  {
    "url": "assets/js/230.e70ddbd1.js",
    "revision": "0379d1ca90cdf08988f51c569d8a7013"
  },
  {
    "url": "assets/js/231.a5e75879.js",
    "revision": "f4beb7cd0cb9bb6b7dcf9fe8d39db512"
  },
  {
    "url": "assets/js/232.84e58ea6.js",
    "revision": "4b9707adf096a1cd849af8ead4108173"
  },
  {
    "url": "assets/js/233.49ccd323.js",
    "revision": "b465623f7476c8f89a690fef1892bc75"
  },
  {
    "url": "assets/js/234.476db6ac.js",
    "revision": "5f4a4e3dfd9fd3772e4d33d62219f274"
  },
  {
    "url": "assets/js/235.504ffb09.js",
    "revision": "4645f178693f5d0f2f3e461e6924cdf1"
  },
  {
    "url": "assets/js/236.c32fc897.js",
    "revision": "be6882c3e74fc1bac539639e40c8b566"
  },
  {
    "url": "assets/js/237.9275e639.js",
    "revision": "9886b04ed1851e9666bff327fa032686"
  },
  {
    "url": "assets/js/238.bd347cd2.js",
    "revision": "57b99b383b5d457544d2e3ef73bcee4d"
  },
  {
    "url": "assets/js/239.f0e19cfb.js",
    "revision": "3b3e757ca9f329ca13027a9f96ab1cfd"
  },
  {
    "url": "assets/js/24.56632360.js",
    "revision": "1f49a0b593477970572602ce9b4b9c37"
  },
  {
    "url": "assets/js/240.2062baf5.js",
    "revision": "7beb771f7453548c3cf9df23e62ce1ae"
  },
  {
    "url": "assets/js/241.ae6b9d7a.js",
    "revision": "6ac7333b270ae18e8fb9b600498178cf"
  },
  {
    "url": "assets/js/242.d9b1447e.js",
    "revision": "cd2f70f9864c5e63abdc491f754370b0"
  },
  {
    "url": "assets/js/243.8f064f9c.js",
    "revision": "fa7df3041faf0a1f2ff4a1aeae020ec5"
  },
  {
    "url": "assets/js/244.8c633018.js",
    "revision": "2e8c1339139df23e6987e5d2af9cf850"
  },
  {
    "url": "assets/js/245.ea8601eb.js",
    "revision": "b53ae167a0ba6ea3b3f005ff1e9166b6"
  },
  {
    "url": "assets/js/246.d7ccdfe3.js",
    "revision": "6bc3074d9a7ee3096ce95ad464a88000"
  },
  {
    "url": "assets/js/247.ec929bdc.js",
    "revision": "99f212970cd0d30b18a6f472486939b3"
  },
  {
    "url": "assets/js/248.f06dcf0a.js",
    "revision": "099ea9bca13fd3b96b9012f11d661698"
  },
  {
    "url": "assets/js/249.994499d2.js",
    "revision": "fe63e0ea431ccc0347b4f81013dd768c"
  },
  {
    "url": "assets/js/25.d67725e0.js",
    "revision": "e23fcdc95838697c2bc1f57b8da1ccf1"
  },
  {
    "url": "assets/js/250.f5cbb00c.js",
    "revision": "118b6ec96b92adfe5673d01f33e3ec23"
  },
  {
    "url": "assets/js/251.eb973d01.js",
    "revision": "8df2e560cc5890f39ccbf513831375dd"
  },
  {
    "url": "assets/js/252.4872be17.js",
    "revision": "b261526a674cd0fbc4b6403ece2edd3b"
  },
  {
    "url": "assets/js/253.3a0b19ac.js",
    "revision": "15fc6468dddd23713fc9ab1071907d33"
  },
  {
    "url": "assets/js/254.d4858f5e.js",
    "revision": "d18133a23ae15d480429ce9a242b2b39"
  },
  {
    "url": "assets/js/255.04bac715.js",
    "revision": "e000a8cfa15262188acf943505de4d2b"
  },
  {
    "url": "assets/js/256.a31eecfd.js",
    "revision": "54401e313fe45ff54e12a378a1bd776a"
  },
  {
    "url": "assets/js/257.a4b60f31.js",
    "revision": "379214c8b1479cd6e4ba293a4b9f0632"
  },
  {
    "url": "assets/js/258.83ec271d.js",
    "revision": "7e64638524d463352ea03ec92f00b50d"
  },
  {
    "url": "assets/js/259.ad35dff4.js",
    "revision": "77c2ddbb4f08208a14398300112e5df2"
  },
  {
    "url": "assets/js/26.b85af300.js",
    "revision": "998f4468c9697849779b2339eae0a779"
  },
  {
    "url": "assets/js/260.18f30fe4.js",
    "revision": "63438ec9992c34cc3c069d7c58077434"
  },
  {
    "url": "assets/js/261.92a488d7.js",
    "revision": "7298d7b652813860ea163c6e5c9fe825"
  },
  {
    "url": "assets/js/262.dfcc4947.js",
    "revision": "11ee6bed1b4156bd9d31a76837edd48a"
  },
  {
    "url": "assets/js/263.359f357a.js",
    "revision": "6e87e989b49abfaafe87ac3748c8a4c4"
  },
  {
    "url": "assets/js/264.90f70442.js",
    "revision": "4e70c5b6b7ed740eda4678205b7979f3"
  },
  {
    "url": "assets/js/265.3dce19a1.js",
    "revision": "dc43cbe2f1dbf2c0d984be8bb9bb8d70"
  },
  {
    "url": "assets/js/266.21715272.js",
    "revision": "0d7d61a11505b284997988913b033938"
  },
  {
    "url": "assets/js/267.91cae471.js",
    "revision": "9860ba4587767889401c3bb9cde6d8c3"
  },
  {
    "url": "assets/js/268.e5d7b547.js",
    "revision": "128e74484cbbba42373544496f290d3f"
  },
  {
    "url": "assets/js/269.17ec145c.js",
    "revision": "28629a951759389c3070be5c41fa2373"
  },
  {
    "url": "assets/js/27.9b17aad2.js",
    "revision": "da25f3bd9e1feab4a097f8a20f33515b"
  },
  {
    "url": "assets/js/270.2cd7c4f0.js",
    "revision": "519581dd5736f041799852ddcc1d3dca"
  },
  {
    "url": "assets/js/271.19c32048.js",
    "revision": "e90c59be2cd760d9a7c23c318185577e"
  },
  {
    "url": "assets/js/272.84d5eeb9.js",
    "revision": "be0761ba67536e1054d10e7baed4d5fe"
  },
  {
    "url": "assets/js/273.2826ca5e.js",
    "revision": "68030afd0213a95d96a3041428aa6012"
  },
  {
    "url": "assets/js/274.2f839546.js",
    "revision": "de5702a0f25fab302ed2ee696e65db64"
  },
  {
    "url": "assets/js/275.77a48259.js",
    "revision": "fadeecfe88d6bf0dd0cb682edf5f1cbb"
  },
  {
    "url": "assets/js/276.3ad0c18e.js",
    "revision": "5e6a4b85ab1afed7c72814770255ee58"
  },
  {
    "url": "assets/js/277.8f16f900.js",
    "revision": "5187240e95335a376438d23b532d6d4a"
  },
  {
    "url": "assets/js/278.b3118d59.js",
    "revision": "b4a6e5bc9c14108ee0c86d8d85c4a70b"
  },
  {
    "url": "assets/js/279.ded9cb86.js",
    "revision": "898f8cf863d93b14bb65862a209f5aee"
  },
  {
    "url": "assets/js/28.5084a297.js",
    "revision": "558dee840b1de361bc5cd557ec579971"
  },
  {
    "url": "assets/js/280.d60f23d8.js",
    "revision": "f114795a308251bf72a9c84f62a42558"
  },
  {
    "url": "assets/js/281.b024dbe4.js",
    "revision": "c7fd9cf78dd23ca3a27c511330ee31dd"
  },
  {
    "url": "assets/js/282.c5038e25.js",
    "revision": "a81212971ecd8e90b345cb7bed968687"
  },
  {
    "url": "assets/js/283.ebc0dfb3.js",
    "revision": "03a578195f46d016e47929793ee99681"
  },
  {
    "url": "assets/js/284.d5ae7ed1.js",
    "revision": "7e77663741eaf9528196593bea28baaa"
  },
  {
    "url": "assets/js/285.cf3b07c0.js",
    "revision": "43f1fb2aca1f9768bc63e0ab68193071"
  },
  {
    "url": "assets/js/286.74c55a23.js",
    "revision": "0bb6b260de0ac4e1084a579c4d354a1b"
  },
  {
    "url": "assets/js/287.4a668496.js",
    "revision": "43888886596284b9f75c69a2c8a98e64"
  },
  {
    "url": "assets/js/288.9620d3fa.js",
    "revision": "6ccae367e640b2722690da4702e350ea"
  },
  {
    "url": "assets/js/289.a23b5297.js",
    "revision": "309310763e7813faf2659b62a8ac535e"
  },
  {
    "url": "assets/js/29.34ab3246.js",
    "revision": "772ffe56b2646f513e7f1994142cfdda"
  },
  {
    "url": "assets/js/290.a91a5743.js",
    "revision": "a689722cd789f55cba6a101e50b48625"
  },
  {
    "url": "assets/js/291.1d2fe086.js",
    "revision": "af45a349f8348ac55f30ccbbc76b06f9"
  },
  {
    "url": "assets/js/292.2c48e2d0.js",
    "revision": "3b9a90ff26c5675851b83fb186a7a4f6"
  },
  {
    "url": "assets/js/293.efdb5006.js",
    "revision": "f941a090aef27811a560423d2a4705f6"
  },
  {
    "url": "assets/js/294.978a7f80.js",
    "revision": "a40fecb6fa08c084c504cdf1c54b52b8"
  },
  {
    "url": "assets/js/295.7c2f686d.js",
    "revision": "914cf6a109f4def1284652523059088e"
  },
  {
    "url": "assets/js/296.77f9d97c.js",
    "revision": "31f033f2dc2239876bd20e0f777c5e07"
  },
  {
    "url": "assets/js/297.80079660.js",
    "revision": "70d784f417f7e0a2f1f047567dc54a62"
  },
  {
    "url": "assets/js/298.8c92c37d.js",
    "revision": "e20a47cb6fc22769746dc45356529946"
  },
  {
    "url": "assets/js/299.466b5f92.js",
    "revision": "b46caf37d516f783db8a11504fd620b8"
  },
  {
    "url": "assets/js/3.0e0c3aea.js",
    "revision": "a797b9fa5cb261a91ef6a6dad0b621eb"
  },
  {
    "url": "assets/js/30.062ec6b3.js",
    "revision": "2020c03cd4ffe2667dda34a21349b621"
  },
  {
    "url": "assets/js/300.7f2c4549.js",
    "revision": "395cedc8ba06b015af195739dcc7808b"
  },
  {
    "url": "assets/js/301.ca46a1c2.js",
    "revision": "68648242f9100f01566065e2fab9ff54"
  },
  {
    "url": "assets/js/302.d47d8d76.js",
    "revision": "99445c5e5746093993f1fd43b7281bfb"
  },
  {
    "url": "assets/js/303.50a75eed.js",
    "revision": "21b37fc835e41242085615c0191c9752"
  },
  {
    "url": "assets/js/304.f16b4559.js",
    "revision": "499d4a5cf29b639ea86f6f42ec73d6d6"
  },
  {
    "url": "assets/js/305.49897e7b.js",
    "revision": "26ed9f311fa35735774b81a92d2d27c4"
  },
  {
    "url": "assets/js/306.c59149a6.js",
    "revision": "dcc91099e91d73617f93b8158fd41ae3"
  },
  {
    "url": "assets/js/307.d6565e66.js",
    "revision": "6825b708a223332c5e1c937a451933b2"
  },
  {
    "url": "assets/js/308.47593638.js",
    "revision": "f1ffa8cbebf6ac483d075b870cd823f5"
  },
  {
    "url": "assets/js/309.685c2dd2.js",
    "revision": "f6a96fced0fbc5761bfeb50b21e67817"
  },
  {
    "url": "assets/js/31.18de75ce.js",
    "revision": "bfe71a6ceea616742d431b6ee69c349c"
  },
  {
    "url": "assets/js/310.ca88c65a.js",
    "revision": "488a672a50afba5aaed83643cf9d99a5"
  },
  {
    "url": "assets/js/311.67cc2414.js",
    "revision": "279b52d46be201b0e296fbc88b035a3c"
  },
  {
    "url": "assets/js/312.95c66776.js",
    "revision": "ab01694b7736115745a607f84f7471bd"
  },
  {
    "url": "assets/js/313.090050db.js",
    "revision": "a3c6fdc0755b17255e382163e96c2361"
  },
  {
    "url": "assets/js/314.259495bd.js",
    "revision": "c25866bd3d65421b80612b2f77151dc0"
  },
  {
    "url": "assets/js/315.1d427607.js",
    "revision": "d0260b7229c13b16e601b191fd81cd0a"
  },
  {
    "url": "assets/js/316.bb962cc1.js",
    "revision": "e2dccc295f9da5e94c56d1ebd307f99f"
  },
  {
    "url": "assets/js/317.e5c39c76.js",
    "revision": "7b52be16f28982002a71fb7a0fd1b218"
  },
  {
    "url": "assets/js/318.02210b93.js",
    "revision": "ee65c77dd925bf41ce58d963491988c4"
  },
  {
    "url": "assets/js/319.f3721e89.js",
    "revision": "cf81d866e9e8f3b3909c31e2b433ab19"
  },
  {
    "url": "assets/js/32.bfb63a45.js",
    "revision": "31f1a7b4014aff4c69b9c4e0e94e4090"
  },
  {
    "url": "assets/js/320.d9178242.js",
    "revision": "06aafffaad44b2a2355a6fed01b5d348"
  },
  {
    "url": "assets/js/321.05307b59.js",
    "revision": "112ef9f0c9a60b4912844e4d7435adf9"
  },
  {
    "url": "assets/js/322.8d8c4759.js",
    "revision": "62430fee370a2c061cf2986f55f35be3"
  },
  {
    "url": "assets/js/323.e6c8a90e.js",
    "revision": "8f12f26153a45b21963e2d1a0aeed70b"
  },
  {
    "url": "assets/js/324.266705c2.js",
    "revision": "11a3c34a66683ab1c6d9544731848a00"
  },
  {
    "url": "assets/js/325.e295c532.js",
    "revision": "0f6a693ddbaa06bbd7c03a95b4e862de"
  },
  {
    "url": "assets/js/326.b40ee2df.js",
    "revision": "c1f5ac155fbcbebeb06e547836a1f2bc"
  },
  {
    "url": "assets/js/327.ace5c515.js",
    "revision": "a149b7c37752e1e96c691c823090faa9"
  },
  {
    "url": "assets/js/328.6a83fc74.js",
    "revision": "67bd4bbd54cfae4af1a4c0a3331d76d0"
  },
  {
    "url": "assets/js/329.a673c0cc.js",
    "revision": "58fbc141727e333e51451f5c8fc99951"
  },
  {
    "url": "assets/js/33.5a514be0.js",
    "revision": "dace0e5ae1df7dca0e2ca159568c30b9"
  },
  {
    "url": "assets/js/330.70a07c62.js",
    "revision": "f05f9ba0e8d2eb08bbabc492aba6ddf0"
  },
  {
    "url": "assets/js/331.264a430b.js",
    "revision": "24ab94627b1084787c94e7dc260ff6d9"
  },
  {
    "url": "assets/js/332.3f9bd945.js",
    "revision": "46f4240b3491568f4f047f4893c2b0c6"
  },
  {
    "url": "assets/js/333.68dec5dd.js",
    "revision": "e2bf891835831cd0e77d42b87e95ac2b"
  },
  {
    "url": "assets/js/334.07276a25.js",
    "revision": "08de66e5fc97db96cd9b5cfb5aeb2dd6"
  },
  {
    "url": "assets/js/335.5d2b9d41.js",
    "revision": "c9fbe0f11faab786e0d633ec3403e023"
  },
  {
    "url": "assets/js/336.1992606c.js",
    "revision": "7b5b786a3431a9fb54d9768b95b5516f"
  },
  {
    "url": "assets/js/337.93a7d783.js",
    "revision": "f511f371436bb556e513443cd93ddf01"
  },
  {
    "url": "assets/js/338.fb22cbbf.js",
    "revision": "29cd16ae9096b2f8ca4653591d90b078"
  },
  {
    "url": "assets/js/339.6f012d32.js",
    "revision": "c339bfb60607fa9c7c9876514bf37fd3"
  },
  {
    "url": "assets/js/34.abb0db1a.js",
    "revision": "37df976c9802dbd255ef797b4f0f3d74"
  },
  {
    "url": "assets/js/340.6bc53fbc.js",
    "revision": "e7cb55c059f3b4913c90c4547a1a4eea"
  },
  {
    "url": "assets/js/341.57e3eca7.js",
    "revision": "d78fb199b9deeb00a2c5fa775748c805"
  },
  {
    "url": "assets/js/342.4a1b8901.js",
    "revision": "b2688fa0e9d66591aeea996ffda853b2"
  },
  {
    "url": "assets/js/343.4ed12cbd.js",
    "revision": "f53d30e38dbb7c0d006bf59293624ea1"
  },
  {
    "url": "assets/js/344.2db44689.js",
    "revision": "fc23ba187225e48e75724383ac815560"
  },
  {
    "url": "assets/js/345.c5901cde.js",
    "revision": "3a32e6e6997aa3004b25dcf6461c714b"
  },
  {
    "url": "assets/js/346.34041157.js",
    "revision": "60e0a24c73fab91e070b56302e912623"
  },
  {
    "url": "assets/js/347.ca539e2e.js",
    "revision": "9e39a4ea0e289505d1406c9a08b15d44"
  },
  {
    "url": "assets/js/348.4952a860.js",
    "revision": "f80f5ebfd21f04a965c78d6087fbbfd3"
  },
  {
    "url": "assets/js/349.5ca83889.js",
    "revision": "fabd3fd12c21a0e590ab05e10cacf37a"
  },
  {
    "url": "assets/js/35.095aea40.js",
    "revision": "73e060fa374357ca87df6217e1e9c90b"
  },
  {
    "url": "assets/js/350.779a4df2.js",
    "revision": "bfaa490b07ae59901445462403ae5f99"
  },
  {
    "url": "assets/js/351.cb80287d.js",
    "revision": "84a68e32a893a8d74ccb1ab4340db24d"
  },
  {
    "url": "assets/js/352.26f8c3dc.js",
    "revision": "13f586bb461961eb4db27db0503ed748"
  },
  {
    "url": "assets/js/353.3f373ee5.js",
    "revision": "8de620414d63f71691e467d61abf8d4a"
  },
  {
    "url": "assets/js/354.626a6253.js",
    "revision": "b345db66adaeed0c7753899a452396af"
  },
  {
    "url": "assets/js/355.523830ff.js",
    "revision": "7889ed456e2e14bd3b25d7d868aa4d8e"
  },
  {
    "url": "assets/js/356.b0243a90.js",
    "revision": "69ab7f0a39c03f6e04fc6832967a17a3"
  },
  {
    "url": "assets/js/357.c846e457.js",
    "revision": "0bbd51585585c91603e9b749ee4ab7e5"
  },
  {
    "url": "assets/js/358.4ac343a5.js",
    "revision": "cf01b53a89f255f337d4b138f5b47f44"
  },
  {
    "url": "assets/js/359.57dfa373.js",
    "revision": "84afa10fd68784dfa67c791e0266665f"
  },
  {
    "url": "assets/js/36.220650ba.js",
    "revision": "ebd294f38921943a6b91f014606c846e"
  },
  {
    "url": "assets/js/360.78203ede.js",
    "revision": "9461ad65a5ec47e7c1d6a8664b3bcac5"
  },
  {
    "url": "assets/js/361.6417d955.js",
    "revision": "bda059cb439a3c0671904d12478409bb"
  },
  {
    "url": "assets/js/362.b731e350.js",
    "revision": "379353b737039dd3092d8aa54b080eb7"
  },
  {
    "url": "assets/js/363.2e195020.js",
    "revision": "8e1af4beba396f1e8853f0c167889be0"
  },
  {
    "url": "assets/js/364.199910d0.js",
    "revision": "543e6db82f912d099a1c1455a7eac9b8"
  },
  {
    "url": "assets/js/365.78f600e0.js",
    "revision": "d286de0f0cedfb8e052ef17f666b1610"
  },
  {
    "url": "assets/js/366.e5d7528b.js",
    "revision": "f189add83891df79b6ebd17c184b38f7"
  },
  {
    "url": "assets/js/367.8f424d32.js",
    "revision": "2984f264d588be34c80c3c77b22ee42a"
  },
  {
    "url": "assets/js/368.dd7903d9.js",
    "revision": "e73d309e33aed088d4e771c164bee245"
  },
  {
    "url": "assets/js/369.a564603a.js",
    "revision": "74a206b7091a0f95c1fd611ed0e39f6b"
  },
  {
    "url": "assets/js/37.cdd6e158.js",
    "revision": "82ff26c0625c5231ddcc5c18b349553e"
  },
  {
    "url": "assets/js/370.133987d8.js",
    "revision": "4987d0ad751d6eac5147cd08e8c41eeb"
  },
  {
    "url": "assets/js/371.527adb76.js",
    "revision": "0894e0b1e4eef474551dbd22ccb36662"
  },
  {
    "url": "assets/js/372.72eacfd8.js",
    "revision": "2e321cc455b391d65d72182480ce498a"
  },
  {
    "url": "assets/js/373.2b69fc4d.js",
    "revision": "0b0bb5eaf91c04fd3154efece0427a73"
  },
  {
    "url": "assets/js/374.cedb1395.js",
    "revision": "a7d72af9878b55098df2e042115ec314"
  },
  {
    "url": "assets/js/375.146af6a0.js",
    "revision": "269e87111d10d35dac188e4ba0a1d942"
  },
  {
    "url": "assets/js/376.6cf434b3.js",
    "revision": "3dd5cdf9301f6a470c4f3ae9c5a0d398"
  },
  {
    "url": "assets/js/377.100d8253.js",
    "revision": "8f3748d721eba5b76f440c8533e7af89"
  },
  {
    "url": "assets/js/378.53b02f9a.js",
    "revision": "364a10b2cde8557d64ced04f092cf992"
  },
  {
    "url": "assets/js/379.34119926.js",
    "revision": "4543ee994b25658f0e76b529fb33f3a0"
  },
  {
    "url": "assets/js/38.40019073.js",
    "revision": "710e99ce799e4d9cd352e869d352a5a4"
  },
  {
    "url": "assets/js/380.1ae2c0a4.js",
    "revision": "574f237a95af82d2d23bd17585b46fc2"
  },
  {
    "url": "assets/js/381.8a16c692.js",
    "revision": "0e37b5b456b0971ddbddb40f7c825cd8"
  },
  {
    "url": "assets/js/382.33c93ebb.js",
    "revision": "f6c5a339b3b803dcc9c6038068ed820a"
  },
  {
    "url": "assets/js/383.e15e6bd1.js",
    "revision": "759c8e9689c4636407d28079a71c9467"
  },
  {
    "url": "assets/js/384.bb693b6d.js",
    "revision": "e10b6b293ce4fdd7bb1bb3908b5634cf"
  },
  {
    "url": "assets/js/385.77c2644c.js",
    "revision": "287257f6d8d5fb63e8593d47cf966bcd"
  },
  {
    "url": "assets/js/386.1518349a.js",
    "revision": "46114161faceb039e3726aadc99dcc04"
  },
  {
    "url": "assets/js/387.0e87c3fa.js",
    "revision": "f90954c44a3cb2f1ce61c434656f80b6"
  },
  {
    "url": "assets/js/388.2496be87.js",
    "revision": "4eb09ed240f2d91dc8be6b9adf3b32a0"
  },
  {
    "url": "assets/js/389.d2ca8c1a.js",
    "revision": "bd116fe047d659e20f7ea05cf302ec46"
  },
  {
    "url": "assets/js/39.154bc535.js",
    "revision": "b9c1326bb756b74fb1d1fd381adddb4c"
  },
  {
    "url": "assets/js/390.57d8a8d6.js",
    "revision": "8934d0a25a3d02166d71c2164b6edffc"
  },
  {
    "url": "assets/js/391.63430f06.js",
    "revision": "451bbde3ef1cf9ed6ae745a9a57bd654"
  },
  {
    "url": "assets/js/392.6b561902.js",
    "revision": "a3c760b05f778f425e3a0a6c4030ed5c"
  },
  {
    "url": "assets/js/393.b2fec8b9.js",
    "revision": "1c4b4eb8ca3b1eb4141bf327572384f6"
  },
  {
    "url": "assets/js/394.2bcc740d.js",
    "revision": "837a9e90bb1556761fa6f7b13b2eaf52"
  },
  {
    "url": "assets/js/395.5908ed23.js",
    "revision": "1d8162a1994d1843546e7baa877846e0"
  },
  {
    "url": "assets/js/396.2d2d5a2d.js",
    "revision": "c61ce7c33e67348f9c979ec8aaafa6ca"
  },
  {
    "url": "assets/js/397.68fcaa15.js",
    "revision": "22d7737c2b19c67e2183d5be65919eab"
  },
  {
    "url": "assets/js/398.db6f4f4d.js",
    "revision": "b088aa9c11ce30cd30252a135e2a50cc"
  },
  {
    "url": "assets/js/399.87236c9c.js",
    "revision": "4c16b16ef4edd4e27dbe5f05303e75eb"
  },
  {
    "url": "assets/js/4.58655ee3.js",
    "revision": "209ed0d27cdf152616b6efac09dd61cc"
  },
  {
    "url": "assets/js/40.e0d6aafb.js",
    "revision": "247f47f9ded955e17b9b5ffbab5ffd8a"
  },
  {
    "url": "assets/js/400.c41689a8.js",
    "revision": "ff070f930d24efb54d98be1f08670b71"
  },
  {
    "url": "assets/js/401.be8a4615.js",
    "revision": "04c86d6f0ea8a1ba39300b0d56b5e8a3"
  },
  {
    "url": "assets/js/402.811591ae.js",
    "revision": "23b4b175d37f451baddb946a540b3224"
  },
  {
    "url": "assets/js/403.7e1bfd41.js",
    "revision": "ab8029ce8ab7c33eb2093f96406f004f"
  },
  {
    "url": "assets/js/404.030f107d.js",
    "revision": "52dd9d1c801f2888f4cc799d552ea6ef"
  },
  {
    "url": "assets/js/405.1950c88a.js",
    "revision": "48c8c36b7f30c698b30bfca6961e7a0d"
  },
  {
    "url": "assets/js/406.c760ec47.js",
    "revision": "8ed09d1c0cdb410db03398429d6bfe21"
  },
  {
    "url": "assets/js/407.adb4620e.js",
    "revision": "f0448129d0844afdc8a43a77f56f8870"
  },
  {
    "url": "assets/js/408.6fa12e28.js",
    "revision": "e54888d8459c031dd7cc5d9ebb5bc92d"
  },
  {
    "url": "assets/js/409.8d3ccc8b.js",
    "revision": "a22abfd7f937da5a4e87b0273f4ccadd"
  },
  {
    "url": "assets/js/41.9b57eef0.js",
    "revision": "89584137e78a08a22684342fb71ea967"
  },
  {
    "url": "assets/js/410.edd37751.js",
    "revision": "6ef9076c5dbd091bb1c5a0ba3cdd8f83"
  },
  {
    "url": "assets/js/411.acc3ae52.js",
    "revision": "5f28b6dc259bdf6dd6c4583aa9af339c"
  },
  {
    "url": "assets/js/412.6664b390.js",
    "revision": "dbef877f6a56b451468411565feab3a8"
  },
  {
    "url": "assets/js/413.c16d93cf.js",
    "revision": "28d56c5e8a56e7ca5a5c984ed60c800d"
  },
  {
    "url": "assets/js/414.5741884a.js",
    "revision": "cf77986c778738b0045e7353c5dd2864"
  },
  {
    "url": "assets/js/415.2e574a8a.js",
    "revision": "00ca5a4e373a29d36ed1148360b40ff1"
  },
  {
    "url": "assets/js/416.62c3457f.js",
    "revision": "b6513e08ca40021e030ae949928e2ee8"
  },
  {
    "url": "assets/js/417.e768d8c2.js",
    "revision": "65d4b534b5bc019e2844a89beaace931"
  },
  {
    "url": "assets/js/418.48b9b701.js",
    "revision": "d0e742a4f2cbd9535e455e48d893154d"
  },
  {
    "url": "assets/js/419.96cc6a22.js",
    "revision": "272cba4eac0a7d91fe19cfb063240858"
  },
  {
    "url": "assets/js/42.aa895cbd.js",
    "revision": "a9b87f1ae9dd77e210847ffbf7e87a0a"
  },
  {
    "url": "assets/js/420.5e330936.js",
    "revision": "e6f5f3601035b4169fac856be90f09aa"
  },
  {
    "url": "assets/js/421.96ed84de.js",
    "revision": "f71d041667b2f8a9fda9244dd8dc123a"
  },
  {
    "url": "assets/js/422.b575e05c.js",
    "revision": "1745c1653733abc5c5a4bd45b665d99b"
  },
  {
    "url": "assets/js/423.ff7f5449.js",
    "revision": "e21d549d2b73a736b79f924fe458f92c"
  },
  {
    "url": "assets/js/424.3fb94b8d.js",
    "revision": "e5599333f63f7c31f5b64b1a56e9e77e"
  },
  {
    "url": "assets/js/425.ada57fd4.js",
    "revision": "b2aa9305cef0b3a2f12adc595b0c9cd1"
  },
  {
    "url": "assets/js/426.4f6fa1b5.js",
    "revision": "1d307fdabebdbf4ba280d3f13747949a"
  },
  {
    "url": "assets/js/427.b6dee155.js",
    "revision": "87a2133b798ee90075ce91024e1d3009"
  },
  {
    "url": "assets/js/428.1e7e8171.js",
    "revision": "ca66d0b0b590e16d3ce28ccaefc0c06e"
  },
  {
    "url": "assets/js/429.2ec1586d.js",
    "revision": "f83d42e28c2911dfafad7a7a94219be5"
  },
  {
    "url": "assets/js/43.63696f06.js",
    "revision": "54671246d5621b95808f6bb6bf50c8d0"
  },
  {
    "url": "assets/js/430.617c1186.js",
    "revision": "3bdffdacb40fced62ab856d37c5d8207"
  },
  {
    "url": "assets/js/431.a4cc6f70.js",
    "revision": "c30ec17fd0ec243e0b1ffafb9145cbeb"
  },
  {
    "url": "assets/js/432.b3dbe336.js",
    "revision": "89255eca90790cd2c79690a208e0a90a"
  },
  {
    "url": "assets/js/433.8f1bd342.js",
    "revision": "8bf6f6630d222c12491758dfefdb18b4"
  },
  {
    "url": "assets/js/434.0b5f1c91.js",
    "revision": "abfd0540b801bc0cbb4057206a6d30a1"
  },
  {
    "url": "assets/js/435.634caf51.js",
    "revision": "289af67be2646dc1200c8375c5fd2ce9"
  },
  {
    "url": "assets/js/436.5c6487fd.js",
    "revision": "5bf3c304adbc0a7de5124e54ebfb99a1"
  },
  {
    "url": "assets/js/437.381b7846.js",
    "revision": "b57a77d6be6fcb768096ecee12178380"
  },
  {
    "url": "assets/js/438.8b07d13f.js",
    "revision": "84abe6f7c130a1ed7e43ccbc5908c705"
  },
  {
    "url": "assets/js/439.302cca1b.js",
    "revision": "e802cfe75af1ec72d0381f2ab0ac9303"
  },
  {
    "url": "assets/js/44.9400cc55.js",
    "revision": "058532eddbe762d940b2ae98dce08da8"
  },
  {
    "url": "assets/js/440.b8823b47.js",
    "revision": "dd55ccd220d807994abbe0fbcb4bbee5"
  },
  {
    "url": "assets/js/441.49a38cbc.js",
    "revision": "6262f08ec2e916a2aeb9010d256ec68b"
  },
  {
    "url": "assets/js/442.8970f6c1.js",
    "revision": "83e4a6030d864fab7599312b4234bb83"
  },
  {
    "url": "assets/js/443.d42725fc.js",
    "revision": "33d37021fbd518303cb699cbcada5397"
  },
  {
    "url": "assets/js/444.e6cd3a53.js",
    "revision": "d1ec07f6b4e39dd3a2e1be6bd90c76d5"
  },
  {
    "url": "assets/js/445.6eb313a9.js",
    "revision": "28df5d54bb417627e7a3b60f6594df00"
  },
  {
    "url": "assets/js/446.6fc8fbe9.js",
    "revision": "a0a2d133a818320b999335ed2b5ebeec"
  },
  {
    "url": "assets/js/447.dc0487f0.js",
    "revision": "7c2d1c7a29fcdfe5bc379bb9072d64df"
  },
  {
    "url": "assets/js/448.c6487dce.js",
    "revision": "4abd3b0d9c91559ff4df1316fd552870"
  },
  {
    "url": "assets/js/449.d7a97380.js",
    "revision": "d6308d31847ab01044c37b76eeaa55dd"
  },
  {
    "url": "assets/js/45.d40f5e3c.js",
    "revision": "eb06d31ac3439dc9eeb8f3da4534f2ff"
  },
  {
    "url": "assets/js/450.332f9228.js",
    "revision": "c24195a109f38bb7a40b8d42a2fa4eed"
  },
  {
    "url": "assets/js/451.329b67bf.js",
    "revision": "004f8688868d8e6cc6eec86324de4275"
  },
  {
    "url": "assets/js/452.8a3c28fc.js",
    "revision": "3c195901d44a91575026620c6cce01d8"
  },
  {
    "url": "assets/js/453.96ac1dd7.js",
    "revision": "d7eae3d78ef939b3162330b98781e962"
  },
  {
    "url": "assets/js/454.fc2e3ad0.js",
    "revision": "d7facde54fe7e4514f0a9b836fc220ac"
  },
  {
    "url": "assets/js/455.6ba98317.js",
    "revision": "be8e902e6d7433132ffea57b56e4be9e"
  },
  {
    "url": "assets/js/456.5b7ab030.js",
    "revision": "9db6784f814f76c1531aac11af569449"
  },
  {
    "url": "assets/js/457.0cf190e2.js",
    "revision": "7fbddfdcd9caf726cf003b53961afeb3"
  },
  {
    "url": "assets/js/458.145d0a79.js",
    "revision": "c1a47caedf22ec625231cbeecbe10c6d"
  },
  {
    "url": "assets/js/459.5db6889f.js",
    "revision": "859224b6ff174ddca72cb6d3b4dbc8d0"
  },
  {
    "url": "assets/js/46.bf9bc688.js",
    "revision": "07fe8e5867a75cd58666aeca049e68db"
  },
  {
    "url": "assets/js/460.a751cc10.js",
    "revision": "cb825da9c4d288d55cd6ef407a9643d3"
  },
  {
    "url": "assets/js/461.d9874964.js",
    "revision": "4459ca86ffbc019cfb8f87ffca18ece5"
  },
  {
    "url": "assets/js/462.2cf98c2e.js",
    "revision": "32f80a2ae92d4c3e4d64fea41721e41d"
  },
  {
    "url": "assets/js/463.6248c248.js",
    "revision": "766b25846a3d14250e3bc1d060a048f4"
  },
  {
    "url": "assets/js/464.a86ecdcb.js",
    "revision": "184359fc5a4178874fc78f2d729da6df"
  },
  {
    "url": "assets/js/465.684e8ce7.js",
    "revision": "818e237649f8c38a076c0d1ae3ef944b"
  },
  {
    "url": "assets/js/466.6efd60d3.js",
    "revision": "254f87eeee64d12696056f803471ae3a"
  },
  {
    "url": "assets/js/467.705e9850.js",
    "revision": "07185234148f64b5ff49d705c2cc94e3"
  },
  {
    "url": "assets/js/468.5bb63037.js",
    "revision": "f2814186342b68e14fc679b8aaadd611"
  },
  {
    "url": "assets/js/469.8880b924.js",
    "revision": "ce3e837b5951add25e8272a247ebb0b5"
  },
  {
    "url": "assets/js/47.c8365ded.js",
    "revision": "7da494a289473ed583fb25503ef0b4f3"
  },
  {
    "url": "assets/js/470.69fe0dea.js",
    "revision": "2187d420a09267ce43d8e6ff126e38ce"
  },
  {
    "url": "assets/js/471.7cd4e494.js",
    "revision": "bcefeaaa08e6b10da0515fd464f735cd"
  },
  {
    "url": "assets/js/472.4aef112e.js",
    "revision": "275c1e58659d7c58f96671a381537593"
  },
  {
    "url": "assets/js/473.f043b1e8.js",
    "revision": "e60d4a2ee0f0eed4c5c554246e701b14"
  },
  {
    "url": "assets/js/474.bb1d6728.js",
    "revision": "d627e06a32b78cefed2823e55abd9065"
  },
  {
    "url": "assets/js/475.ccdf5824.js",
    "revision": "69f21ea92a49f729361a71fb306fab58"
  },
  {
    "url": "assets/js/476.dd21b147.js",
    "revision": "ddcd5c13fbac40d98c479c374bd70680"
  },
  {
    "url": "assets/js/477.ef47e248.js",
    "revision": "1b5ed3d7ab0b83e9ec18197a43642c43"
  },
  {
    "url": "assets/js/478.5c060427.js",
    "revision": "4ba848306a8522233e0c46d92a9b2dff"
  },
  {
    "url": "assets/js/479.7ef609c3.js",
    "revision": "c15789ce5ae809cf478d623078a15369"
  },
  {
    "url": "assets/js/48.92f6e50d.js",
    "revision": "4a26f16ca899acd3146ba68c59966ec1"
  },
  {
    "url": "assets/js/480.25467ef3.js",
    "revision": "b5420ed9bf40b474df310882ab4c2714"
  },
  {
    "url": "assets/js/481.b00c89e7.js",
    "revision": "c0029b2f881d48af797a270dd0e63a19"
  },
  {
    "url": "assets/js/482.86e1fe89.js",
    "revision": "e8649a436f507d39055c2e91a91f3c3b"
  },
  {
    "url": "assets/js/483.b1914332.js",
    "revision": "2a14a8fa2a33acd808c92a80fd115ece"
  },
  {
    "url": "assets/js/484.e15a2f97.js",
    "revision": "825e627474e205210772f9a14eca0d90"
  },
  {
    "url": "assets/js/485.4b8ac91c.js",
    "revision": "c9479c90524c3ba5cdbadb6cb6ca1797"
  },
  {
    "url": "assets/js/486.eec64612.js",
    "revision": "a4bf24d7c3f169088565bcd351455a9f"
  },
  {
    "url": "assets/js/487.d6a94f8b.js",
    "revision": "7acf0a245cd4272fa9fc2c07cb3aa95e"
  },
  {
    "url": "assets/js/488.3807918d.js",
    "revision": "e0ef7489d168f2ebc09a361e048242db"
  },
  {
    "url": "assets/js/489.eff88fa6.js",
    "revision": "79c8d33003db98ea070261a2b47a7bd7"
  },
  {
    "url": "assets/js/49.05d7216f.js",
    "revision": "2e9c914960c28197f9f017a782310e39"
  },
  {
    "url": "assets/js/490.25cde392.js",
    "revision": "ac167f0884070e9147f5c481122c4868"
  },
  {
    "url": "assets/js/491.d519b2b9.js",
    "revision": "a7157074ee862904dd303688c398226a"
  },
  {
    "url": "assets/js/492.c13679e9.js",
    "revision": "ab5cbea49e41be33702e943a218924d2"
  },
  {
    "url": "assets/js/493.45534f52.js",
    "revision": "c132b28bcd839c8cca83e32caf4ac499"
  },
  {
    "url": "assets/js/494.60220aa2.js",
    "revision": "b7fb0f855f9079174e50513b2f6ba347"
  },
  {
    "url": "assets/js/495.58c30484.js",
    "revision": "ebc398206898c7de5dadb1bbffed08ba"
  },
  {
    "url": "assets/js/496.cfc41694.js",
    "revision": "ca1c55922ddf8f91886d802c4ea188dc"
  },
  {
    "url": "assets/js/497.49b1ee92.js",
    "revision": "f6af774d193c6205dcef8341eeac17f5"
  },
  {
    "url": "assets/js/498.56014cb8.js",
    "revision": "f78c114a785ea6616ccb774acb2a883b"
  },
  {
    "url": "assets/js/499.e8e7903d.js",
    "revision": "00dced67b2b057e4ff3dc6eef549f3a4"
  },
  {
    "url": "assets/js/5.39ff5c1b.js",
    "revision": "4fb0164df5e9cae2c4f961e0b4bb1882"
  },
  {
    "url": "assets/js/50.b9383c03.js",
    "revision": "8bdaa45aecca8ebc2972c6181216858a"
  },
  {
    "url": "assets/js/500.9d8b1e14.js",
    "revision": "152745077c481d2ce533b79846009a4f"
  },
  {
    "url": "assets/js/501.20635a9a.js",
    "revision": "c08a96562cd0a7656ba019331cd00745"
  },
  {
    "url": "assets/js/502.602b44e0.js",
    "revision": "32a87d8e6d41492ef1d52eb43d2af4f5"
  },
  {
    "url": "assets/js/503.88c94fa5.js",
    "revision": "c38dda1efc230de3b0ddbdcb8559c0e9"
  },
  {
    "url": "assets/js/504.fcb4b4b7.js",
    "revision": "605fa4b9e1fc0e8b6da8f3d4a5b0f0b2"
  },
  {
    "url": "assets/js/505.0b7e7bd0.js",
    "revision": "dd1f8bd4ec50d8abe9336472cb1bff58"
  },
  {
    "url": "assets/js/506.284364e3.js",
    "revision": "ecd1fcd1fb3d1876dd443e852260690a"
  },
  {
    "url": "assets/js/507.0b2c38cb.js",
    "revision": "6d8a4204018bd98554004dee5f345117"
  },
  {
    "url": "assets/js/508.7826fd0b.js",
    "revision": "3d67df58f109992c837a9cc52acd9de4"
  },
  {
    "url": "assets/js/509.0598a6d2.js",
    "revision": "1b945da5988f4494fd285775b5dd89d3"
  },
  {
    "url": "assets/js/51.cae089a9.js",
    "revision": "6f3ebf660d4a07175e0baf632e605b22"
  },
  {
    "url": "assets/js/510.8ba98e6d.js",
    "revision": "71f66315f5799615156b99e582b1d6b6"
  },
  {
    "url": "assets/js/511.1f5471b9.js",
    "revision": "a0dac41796382dfe85a6e03613bd058f"
  },
  {
    "url": "assets/js/512.4737b5d5.js",
    "revision": "b32546af1f6143bc418ba5a68c1ee943"
  },
  {
    "url": "assets/js/513.db2ff9d1.js",
    "revision": "f140bedc40bd6747091baf789f809b0b"
  },
  {
    "url": "assets/js/514.4d692ac9.js",
    "revision": "bf467baf7c08ca6f248fac3eac037a2f"
  },
  {
    "url": "assets/js/515.7794889b.js",
    "revision": "75a4fe3644eeb40f032c5ee108fbd882"
  },
  {
    "url": "assets/js/516.bfbaee0e.js",
    "revision": "cb9be42f51d18433ca26a5d1ca9a6679"
  },
  {
    "url": "assets/js/517.6ed8cc03.js",
    "revision": "43ad4c816f699da7b393be33a10fdc00"
  },
  {
    "url": "assets/js/518.8cf918e4.js",
    "revision": "d6e134c85fcf7517b80ebc44d51ca389"
  },
  {
    "url": "assets/js/52.fd823610.js",
    "revision": "8153368532f4ebdd7da4a9a5e386e774"
  },
  {
    "url": "assets/js/53.ecf7af9b.js",
    "revision": "07199d98eea4d49082eeef52069b946b"
  },
  {
    "url": "assets/js/54.c09ead42.js",
    "revision": "4bc24296d4778185e89e92fe630512f4"
  },
  {
    "url": "assets/js/55.a2fa55de.js",
    "revision": "cff05a91ba383c256634d3ab0b703b4e"
  },
  {
    "url": "assets/js/56.51d6257b.js",
    "revision": "534f223455f3784386004920959b2164"
  },
  {
    "url": "assets/js/57.80a2d3a3.js",
    "revision": "9ed5beb7c4177c38e22e6ae7792a8d53"
  },
  {
    "url": "assets/js/58.dcb336b6.js",
    "revision": "c6961deafcc399e6048702ae42412f43"
  },
  {
    "url": "assets/js/59.7d497fbb.js",
    "revision": "47eddd4b5aaed9fbfa600c2d890d9d3b"
  },
  {
    "url": "assets/js/6.874bbbeb.js",
    "revision": "01be504888042feabe34eb41d32cd7ec"
  },
  {
    "url": "assets/js/60.cf0a6441.js",
    "revision": "e25ba71f35ce3c731de731c980d8e2f2"
  },
  {
    "url": "assets/js/61.6b856b00.js",
    "revision": "e063d66b9e93627f73b3956b72a5374a"
  },
  {
    "url": "assets/js/62.fbcebddd.js",
    "revision": "65cb5e43aa851c1ca487ded0e059319a"
  },
  {
    "url": "assets/js/63.40bb6bff.js",
    "revision": "a6e9b9742a272ceef39700acd4bf9dd3"
  },
  {
    "url": "assets/js/64.202fb1e9.js",
    "revision": "478bb92e4cb0e494e34d7eaa8592f93c"
  },
  {
    "url": "assets/js/65.ac238857.js",
    "revision": "483bebe061b58efc13ab10e90d2cccd2"
  },
  {
    "url": "assets/js/66.c85ae459.js",
    "revision": "783428cae9bb55b8827b07e733e76c6f"
  },
  {
    "url": "assets/js/67.8c144097.js",
    "revision": "70afe28955055d761abb70657cd5384a"
  },
  {
    "url": "assets/js/68.10c79b04.js",
    "revision": "b211b2673fccd9e07a009086cd95474d"
  },
  {
    "url": "assets/js/69.cefa482d.js",
    "revision": "a1bbe8bbbb628e020b06714836ff4ee9"
  },
  {
    "url": "assets/js/7.27983714.js",
    "revision": "7945446556a6571b18fb62d2d21ac671"
  },
  {
    "url": "assets/js/70.19f23b81.js",
    "revision": "b478ca734e353b02b6142710c285d7b5"
  },
  {
    "url": "assets/js/71.49615150.js",
    "revision": "4d7dfa8b1957093afca8a846031497ec"
  },
  {
    "url": "assets/js/72.373be2cc.js",
    "revision": "b10231e189c76f09c960f762c2b7b571"
  },
  {
    "url": "assets/js/73.099beec6.js",
    "revision": "b69a493304db471d1a8d83837d85f2f0"
  },
  {
    "url": "assets/js/74.960e8488.js",
    "revision": "66b9a94625e8895270a56f4ce0a1450a"
  },
  {
    "url": "assets/js/75.3c4cd36c.js",
    "revision": "a7203a52d31ce645f22f591607ae7416"
  },
  {
    "url": "assets/js/76.dc6ab344.js",
    "revision": "74522e57c28d950cf7f235881712e939"
  },
  {
    "url": "assets/js/77.cbc92315.js",
    "revision": "aeb42eac35e2f09ddc47ab7d7c28cd33"
  },
  {
    "url": "assets/js/78.f24e458c.js",
    "revision": "bf364ce3b13577d0920f16e59b9d959a"
  },
  {
    "url": "assets/js/79.52bfbb12.js",
    "revision": "907dd8357aef9f46691e0cb41169bcec"
  },
  {
    "url": "assets/js/8.26f6e5b7.js",
    "revision": "5a7a060372cce23781a8ac60ac109363"
  },
  {
    "url": "assets/js/80.958cb122.js",
    "revision": "30914436b50bf1fe4929b747434066d3"
  },
  {
    "url": "assets/js/81.6883ee64.js",
    "revision": "505e8392298a190d3101a0c4be7d83f3"
  },
  {
    "url": "assets/js/82.547a2eb5.js",
    "revision": "644bacabeea8548f92904ecd2b12dbbe"
  },
  {
    "url": "assets/js/83.e543ccb6.js",
    "revision": "ed12ca664b0152b374cb5837e7ba2d78"
  },
  {
    "url": "assets/js/84.d2bd3c00.js",
    "revision": "e397219c93837c2fce6e800ffa5eddeb"
  },
  {
    "url": "assets/js/85.0152fb5a.js",
    "revision": "1ab24137212ef439b211f080fc06b905"
  },
  {
    "url": "assets/js/86.63d16012.js",
    "revision": "0fb2c1f23e1a82d452cfbf80c2529cab"
  },
  {
    "url": "assets/js/87.2de21dfa.js",
    "revision": "ff56ce96eeb7dc880ac7dbc22db91ede"
  },
  {
    "url": "assets/js/88.8c15dc8d.js",
    "revision": "0757690e06f7e827af4cb1aa61e448c9"
  },
  {
    "url": "assets/js/89.1726fb65.js",
    "revision": "67a767158a1992c93305d868f55861b3"
  },
  {
    "url": "assets/js/9.c3058078.js",
    "revision": "beb5d2753de3538532ca840cada7d1bc"
  },
  {
    "url": "assets/js/90.36d42b31.js",
    "revision": "44fd7d3433099bf10cf7989bfddfc3d4"
  },
  {
    "url": "assets/js/91.d84071d2.js",
    "revision": "1464fea521eb7b898223ef81c94a62ff"
  },
  {
    "url": "assets/js/92.0a96bc3c.js",
    "revision": "045bc602370cf615fd58997c4d82e1e0"
  },
  {
    "url": "assets/js/93.55ca8bd8.js",
    "revision": "f926508c3630535b1b34abc2a98ea2cd"
  },
  {
    "url": "assets/js/94.6b4f00ea.js",
    "revision": "3289e59caf0c4a75931f8f69f035d116"
  },
  {
    "url": "assets/js/95.8a50476d.js",
    "revision": "0963f251f503e00681344ceaedb376da"
  },
  {
    "url": "assets/js/96.51fcb57f.js",
    "revision": "c5dfaa11ebbb345b6d0e67eb1a4b9c79"
  },
  {
    "url": "assets/js/97.2a2f65d9.js",
    "revision": "93f7d77fb17a33a4f81d2f205007ea00"
  },
  {
    "url": "assets/js/98.dc92eefa.js",
    "revision": "ac6f6f877acc6e78b51a6146cb9eba5b"
  },
  {
    "url": "assets/js/99.eac2124e.js",
    "revision": "0322570e1601162e8d904074a18e2b18"
  },
  {
    "url": "assets/js/app.bc5004d9.js",
    "revision": "6947b7b4bfaf0c96e3e6b9ac3b54459f"
  },
  {
    "url": "aws/access-keys.html",
    "revision": "05554040fc7a1d78d3173d9dff717344"
  },
  {
    "url": "aws/architecture.html",
    "revision": "b7d12147becff1dd5da25a70852dc440"
  },
  {
    "url": "aws/arn.html",
    "revision": "72bea41fe1bc637f27ae2df035deed1e"
  },
  {
    "url": "aws/aurora-pg-vs-rds-pg.html",
    "revision": "df963b0f134c53e2f3b2ccc9c06c4b26"
  },
  {
    "url": "aws/aws-abbr.html",
    "revision": "ce33100c06816bbeba52333476d65771"
  },
  {
    "url": "aws/aws-dev-tools.html",
    "revision": "5ff65960ec2bb87d3d0861017a1303aa"
  },
  {
    "url": "aws/aws-doc.html",
    "revision": "bddb5756f39c7803c36589df5a7c271a"
  },
  {
    "url": "aws/aws-outposts.html",
    "revision": "d921ce2f0f8cd9dd77da3f8a2ca6a63f"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "6b27159c616e2ead6ca271c509a14d48"
  },
  {
    "url": "aws/cloud.html",
    "revision": "ea9c612f8e86ea96c837ceea8a5caeae"
  },
  {
    "url": "aws/dynamodb.html",
    "revision": "c59d47696fce98aa1490c0ae9111fcfd"
  },
  {
    "url": "aws/ec2/index.html",
    "revision": "b44f5c5670b4169a4243dc707eb1a78c"
  },
  {
    "url": "aws/elb.html",
    "revision": "c79d6ae74750c320001789efced49085"
  },
  {
    "url": "aws/global-infra.html",
    "revision": "013dd76cce89524de69308c0d0c5ac15"
  },
  {
    "url": "aws/misc.html",
    "revision": "da403a64744507bd492739ee93223c62"
  },
  {
    "url": "aws/postgre/index.html",
    "revision": "c5cf9fe72f3336ad85e3adb0c8066d05"
  },
  {
    "url": "aws/s3.html",
    "revision": "9a740a52dcf250d56819f10b058fa8b2"
  },
  {
    "url": "aws/sg/index.html",
    "revision": "273713d8bf4046a80daee007cd650c8e"
  },
  {
    "url": "aws/vpc.html",
    "revision": "288b5f6747d3b52572f3d5372d70641d"
  },
  {
    "url": "common/cache/cache-notes.html",
    "revision": "a1c6e5caff7f42139ae3eb47f0d0620e"
  },
  {
    "url": "common/cdn/cdn.html",
    "revision": "0a9355c69a29710d929b95031074453c"
  },
  {
    "url": "common/clean-code/clean-code.html",
    "revision": "64733ecd7508fd1734de8da2c89781ba"
  },
  {
    "url": "common/clean-code/code-structure.html",
    "revision": "2e1268a574b83574f27851ddbc414a3c"
  },
  {
    "url": "common/clean-code/refactor-catalog.html",
    "revision": "3479a817efef81a3d648b0d44d93ddad"
  },
  {
    "url": "common/clean-code/refactor.html",
    "revision": "6326749177ea2356ee438b4d5a67a8d5"
  },
  {
    "url": "common/crawl.html",
    "revision": "b456cc1400a6668d5e0577f59079f4ea"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "bc609928d83f392ce3492ab4528dad13"
  },
  {
    "url": "common/debugging.html",
    "revision": "850056500d7f20ba88b7bd01a8410968"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "ac62a31f167d2830b36ee5bc34c79b80"
  },
  {
    "url": "common/document.html",
    "revision": "63f4f0ae4feaa25e539ec10c52f72a95"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "e074a2414d97f93942df55720b4fc5da"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "f241d13fbfcb556b569ff69aa4e3a886"
  },
  {
    "url": "common/index.html",
    "revision": "03b56a1db4cb22b49ae4e0b11077fe76"
  },
  {
    "url": "common/notification/index.html",
    "revision": "087510b43b4dae539dc8f8555b762296"
  },
  {
    "url": "common/optimize_be.html",
    "revision": "f612fea453365830a26650c634faf53f"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "866bbdf508fa32d66b00723dc2fd3746"
  },
  {
    "url": "common/realtime.html",
    "revision": "ecea10cb2bf00b4ab42206cc5aca7f5d"
  },
  {
    "url": "common/security/software-security.html",
    "revision": "81a7ab7933af61359891a6ea0a23f4f0"
  },
  {
    "url": "common/seo.html",
    "revision": "f47f0accddaf28fd6c86613ba269b6c3"
  },
  {
    "url": "common/use-case.html",
    "revision": "5a493ef8edb443d3fe8103288a168da3"
  },
  {
    "url": "css/box-model.html",
    "revision": "af3c4e02151eb4adbc535d75c12307d7"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "9ff62cb906cc0e15e997f34e8cf11ccd"
  },
  {
    "url": "css/css-flex.html",
    "revision": "f6b26a38d7e5067333c6e676a3a911fa"
  },
  {
    "url": "css/tricks.html",
    "revision": "8104136c633e47dd1ac4ce7cf962f39f"
  },
  {
    "url": "db/architect.html",
    "revision": "20d5eb8850ca5738e1ddb16e8263e4ec"
  },
  {
    "url": "db/cassandra.html",
    "revision": "acfbfe891d3e1fc3fcc0d0c0bf17853e"
  },
  {
    "url": "db/cdc.html",
    "revision": "d5cc69fb56f49d22a1b2f21639866625"
  },
  {
    "url": "db/consistent-hashing.html",
    "revision": "d0bc61aa99b85b97b45f80f5c0d40516"
  },
  {
    "url": "db/couchdb.html",
    "revision": "09eb4c17a2e92cc97b03d601e4f500a5"
  },
  {
    "url": "db/db-concerns.html",
    "revision": "892ce0d20eadd860a9a38ff90689a5d2"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "7cf29eaed2ab43c8ae1a02c26d2e0ac7"
  },
  {
    "url": "db/db-vs-blockchain.html",
    "revision": "e3afa8f1bdb38954df6ec3bdf42019ef"
  },
  {
    "url": "db/dbms.html",
    "revision": "9ee0b80bc1250aa6a1b1afb823f591ee"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "abd5135f42ae557e29cf0a846a528cfc"
  },
  {
    "url": "db/id-generate.html",
    "revision": "47104d7d50df9c86e76081edef8e312d"
  },
  {
    "url": "db/indexing.html",
    "revision": "8c50e179734b9cce9c830605660cdac5"
  },
  {
    "url": "db/mongodb.html",
    "revision": "7056ac50036ccc15780e070bd5f1eced"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "444bb523e05187cdeef6c791b59ed231"
  },
  {
    "url": "db/nosql.html",
    "revision": "36a9026fe65a3b022b62830161c5cf1e"
  },
  {
    "url": "db/optimize_db.html",
    "revision": "2a94fc0669f869cb91806bf5032ca88b"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "063c7ab4906fd3ee0c6c765ae2171a8f"
  },
  {
    "url": "db/postgre.html",
    "revision": "8a835da1c77a17f037699701012bc0d8"
  },
  {
    "url": "db/realm.html",
    "revision": "5a09dcd22010336a6e5f824f9b5dcde1"
  },
  {
    "url": "db/redis.html",
    "revision": "cbe796aed67b8c8f58899fca861949ef"
  },
  {
    "url": "db/storage.html",
    "revision": "5a2dbc58b809dc41d40dafd56ad24779"
  },
  {
    "url": "db/tx-isolation.html",
    "revision": "322dd30f2385ed7fce828bed556dbeac"
  },
  {
    "url": "db/use-cases.html",
    "revision": "39f25fd1bd832e5fdbb2e91cd92081d0"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "0d8964fd3c56514bf0e4bdd8107e62ca"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "76a88620d5ae67f7245b33ec32bc243c"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "c9241f28461f836a8c9672b37ab285f4"
  },
  {
    "url": "fp/fp-ts.html",
    "revision": "488cdde110b299bba0fe949fec1ec073"
  },
  {
    "url": "fp/functor.html",
    "revision": "75b5fc8e0c3da19d8d4dd2755495d29b"
  },
  {
    "url": "fp/monad.html",
    "revision": "6b526fce49e26e7b1ba49bc1ba8370fc"
  },
  {
    "url": "geo.html",
    "revision": "4982397ced5710046c04081ddcdec5ce"
  },
  {
    "url": "go/clean.html",
    "revision": "6e1994c22b0795d4a42171ddc9a04802"
  },
  {
    "url": "go/goroutine.html",
    "revision": "a63fe49d232a96b19e7324da06ef051f"
  },
  {
    "url": "go/index.html",
    "revision": "253b406f7d1b66bc1e109e77993c13e7"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "4ba6037a11fe8e0ade435f4de58541dc"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "46a2a534ba3c7b521891d5b86dcfab96"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "d33c39985b1d8b463f40daa1a55fb89b"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "f90e614ae5046cc704609d2ac7d43721"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "8181bbab3b95db5412c946e5db2872da"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "c00f435acd39d4ff3beea6302a390e46"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "84610b155d15aa6faec65979aa46c397"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "03c0be2770af181b72d64ffcc9696406"
  },
  {
    "url": "idempotency.html",
    "revision": "33e6cf72da645017fe5ee1a6d7ff9b7a"
  },
  {
    "url": "index.html",
    "revision": "3d054602909c9ed01a3e641d97b25511"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "8241946fdb5611554675f5226ecedc15"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "b49cfa8fb162ea7879b969c8864b2efa"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "0d94e032ae26ff9a94b3cf50d999dbc8"
  },
  {
    "url": "javascript/closure.html",
    "revision": "fee17d56b8bb92e961692b8ced8af6e0"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "bffe182a71ff005a5fb9bd36323abb37"
  },
  {
    "url": "javascript/eslint.html",
    "revision": "7865e10f65f8f9ab19f41329649d1750"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "99d25500d8d1ad6695efe584ed37f139"
  },
  {
    "url": "javascript/nestjs/nestjs-cqrs.html",
    "revision": "3184695d0c50c87fcf2ef99742bc266d"
  },
  {
    "url": "javascript/nestjs/nestjs-overview.html",
    "revision": "504cd93b5c168a16dffce4c2e2dc28e4"
  },
  {
    "url": "javascript/nx.html",
    "revision": "50e64525ae64b177518336e5dc1f379e"
  },
  {
    "url": "javascript/rxjs.html",
    "revision": "1891acb6e6728e2f2887894ef255e3b3"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "48356a69b930d4f7cc328bb8deabcc7d"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "59c208f14dc41eea845fda1120f55e43"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "7f5eca29a2ac66213bc934b3fb5bf660"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "e83e0b22f804313263d690111f5d0ab7"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "e24d36cc04b482e16e2ebb30e02875f6"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "bc2aa1d25b87fff95dd6b9a5bbbe151a"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "2dee3e11a857f433313eda78206d5675"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "6e76d0a5238bb75ba32c011914547fff"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "fde4da2ef7c064f36ffe2e53ce8ba348"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "3868ef96117324c909f7451f73bf57fe"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "dec1e033067745f2dd30241f213dfa05"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "f1cbaf5d8a4c3f7d50feca0580bcbc6b"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "dcd01afeaef6aec0ca81b9683d574dde"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "8b65ba7d14fbdf186a436613eb124821"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "047166ba14c8756102d7fafa1223aea9"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "9f2407ccedddd25a4c4a200795223d02"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "45a7a11baa4a494d305e1883dcc5f4ff"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "c738753237209341ad0279ee487cd538"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "979529c31256baa047b833d47825c9af"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "66b5830da0b598341047bd79d1c5d98a"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "d9356da38bd25b373b86e98c880547e4"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "d0ef6f8f4531333b60ba1e0ab22a7abd"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "bd2a414df89c9bfa34695ac1d8890ed1"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "ce1bf3125a60c75e0324dfb66d18edd6"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "97655b0c098a5d5bb38085132e1351f9"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "6462b13369dd1dcf8ac0d83eea317bf7"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "02c58651e1bb743097604a60704ed275"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "9f2da8803891fc9d2ff4947b0d60f0bb"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "92378a89fb09b9b90568f260512086ba"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "1b591ce04e495c9e32679eb66094dcd4"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "99f8d90829bd02cff42cc7e1a70dab8f"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "ddf11ae7c61bf27a739bf813a5938458"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "7d6c241855b87087358e77eda2583505"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "43340e062774e4011517e72f1a8c7385"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "caf902ad5af0667217368f59ef8240fe"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "3b27d083b02596b6540ee47816f1af67"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "2e8023cd55d84c52bc31408b9f9dd67d"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "5f57df32e57eb56fde89810c155ae1ce"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "837c1bf6d25ddff94691826a2810061e"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "e0cdadd409d162b732b13886f65a4283"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "79a0e86ea32c3e259e6a241a9ff58ff2"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "74bd0472fc13b33df85ffe0832ab531a"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "728680adb05806f860f5018e43dcf687"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "9fcf8300351847d0e16662262634123c"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "75e537cc2a6ee6676b064077291cbcea"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "0633112e9239218db32519d6062e47a6"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "9976f25abe4d05fbf8bc7d924c7683f7"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "822b80f7033a106e08624d3b52f5e6ee"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "07c53fdb9a1ada2e512af0f902f2f10b"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "8248b1dc9345f8d62d048894eafbacca"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "23153f9346a83fe1a8aa8c41e2a80ad2"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "3347db548b20072ef080ff0052899178"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "0a3a2d04707659a7ae91c48b5e3cb411"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "6feaa801d4f8c0bce61a4deb63896c12"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "63cdbd2f22b8cc6c35193ef827abc10f"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "9cc01092f9e1dca2c117caac9abebe88"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "348f22fd206c755e86bdba9c4ce75db1"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "f7e5252924a31528ce6139fa2273c6ee"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "2b42153eb0854a69f04b1e61fcfe3f74"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "1676f14ea96072180abd5bd18d93266e"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "fffc18ae45bb03247acec564ab0cab6f"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "7ad46ac4aae6978ce5ea6b371da3f56e"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "ac44dab5ae85491ccde59d375906d2a0"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "25086c6d85c6fb4d07c916b3797eb7fa"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "36bcf011ad772eb330a42e596c73355d"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "38f9cd6d839fbf74c82fbdab6ece76be"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "c167f6e18c366a6fbe5268188a38220a"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "f605521ac3a8cacdbede09b948ffee56"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "17c0afcd0ca9e5fbe0d41005ab2b03a5"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "dc4bce58196f8531239541fc99440c47"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "91895310ff60da491a87abba2a32c523"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "14d70deafcb8cefca1a100e96d0b81dd"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "503dc389c73cfb00556969ad76dacd25"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "2633dc17c18d0ced27912cebd966b763"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "042e1c7760cae28ed7bd03a28eccb403"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "54da01ed83dc3159804d4c902f368f1e"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "3594abb7c7ce9dcdff4470b2d4b2d421"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "b0de29e47e762572085cca7a600471b2"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "3d4c6898d718b1c6379dcf99cd27b6b6"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "d56251f2eec5a7059ef0a848ded2546a"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "f70ce0c0d5607a84c5bdb25978b0907d"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "7fe8c4a5ad2f99ef70c7c2dafd24aae9"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "309e6003fd9879444b29353eccd87c68"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "7a60d85b48557c9288280a899302c2d4"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "9917471e79faa13c6f8e8258c27a19cd"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "5b40af0355a9b49c279ebd96a854488c"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "9e63bb46b161c3eada4a2659dade6e4d"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "efbc2c1b4f1a225f2b8328e13621a3c8"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "7e7edff778a8f4a02aafada3583a2ae2"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "eee7b9e2c4680957a0bd7d8209aa66cc"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "30769b449f7380d70b712589a2c2ac03"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "d7815d49198687f96fda73512c1cf079"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "abd19a57310663516e3eca7d0912e41c"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "7e870e330921feea547ccc03466a3a6a"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "6d158b4efc03449db20e67937f1c1512"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "af2969bf3eaf764f37be1a6bef49d551"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "5453aa32e8795f03fa66b0a13c6c062f"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "a6a767a717dda26c29cf2324bed842eb"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "efa5b1f66f4137c2a5cdf1ae4fef3c9e"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "46b8eac2a66c9f7a7f5ad0f0004bdb86"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "b4f606c1a655993dbba624376eb2ab34"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "e7359f834df681c656ccc1f617bf7f1a"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "186849ab02689e21d7cee66923357b4d"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "b7833fa945d4c09257c82134ab796aeb"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "8e19db0a561b979a397a79c1ab72eb37"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "4ddd94b986db0239f26a903a4f37e96b"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "6ed291da001a55a12196c1bed7417373"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "834f0693e4eb64ee46c3c301e2d6465d"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "3fea15ebb7dba15ed56fb1a62f7ed874"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "36ab62fcd3d7303dff3d85ccca8f44f5"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "9fddca061f9f011df2028b582d2b87ff"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "af4ad7ca3d365522e064bc16d1baa6e3"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "c869be31a6b233be9c8736267ea31b0d"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "f44c1991e8b0b1d811822adcaabeae87"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "6ead34addd8ccca39c68c6ee712afad8"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "f6ff0c637591ad3fbbdb2a2c4faa8365"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "18e11fd26683bd3b839dbf54e6d224a5"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "b19b3a0aeb94c01915b933e3aa95198a"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "97a611dec4842e3ff61c7a75b48ac3ef"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "f42bc163feb6f685b53c537dd8a121f4"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "e966b7c060b290f5eabf96aadde22f71"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "3c7a78f7bff9bd6c1b199b50585c0d0a"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "d8d6f6deba9ee5a785749ce1b758d8a3"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "5aeed35d96ef530e35a0c99539f6c8c6"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "549419e318157911b1020a4cadc9e99f"
  },
  {
    "url": "kungfu/case-study/ad-click/index.html",
    "revision": "456d1eefffee25d6c493694448907a6f"
  },
  {
    "url": "kungfu/case-study/chat-system/fb-messenger/index.html",
    "revision": "b239e308051e8d92b9b19817466dd62e"
  },
  {
    "url": "kungfu/case-study/chat-system/index.html",
    "revision": "4b51644d8a5b265762b820b8f527492c"
  },
  {
    "url": "kungfu/case-study/chat-system/part2/index.html",
    "revision": "21a1a3ff3cb7bb0460f09153ad3a2ea0"
  },
  {
    "url": "kungfu/case-study/chat-system/telegram/index.html",
    "revision": "8b7390b6a794779b6c5e0a209c1076c4"
  },
  {
    "url": "kungfu/case-study/chat-system/whatsapp/index.html",
    "revision": "f302ae99a0ab0b4d6df8c7bd66fe010e"
  },
  {
    "url": "kungfu/case-study/digital-wallet/index.html",
    "revision": "fb20742325d21af9908cf8b1a6f4f496"
  },
  {
    "url": "kungfu/case-study/dropbox/index.html",
    "revision": "74ae313f25346c34882dfd80bfa9463f"
  },
  {
    "url": "kungfu/case-study/email/index.html",
    "revision": "eef48bfa27d3c5f54581e96ee1a70140"
  },
  {
    "url": "kungfu/case-study/garage-game/index.html",
    "revision": "8842c66859fbe5abfd4a3e24e3dc0ca3"
  },
  {
    "url": "kungfu/case-study/google-docs/index.html",
    "revision": "70781db2935e540014ea707dd1bff698"
  },
  {
    "url": "kungfu/case-study/google-drive/index.html",
    "revision": "4890c29f5120f236fb8881f2ddeeeb4d"
  },
  {
    "url": "kungfu/case-study/google-maps/index.html",
    "revision": "673dffd9c533e2a963762ee175ab32f3"
  },
  {
    "url": "kungfu/case-study/grab-nearby-drivers/index.html",
    "revision": "43dce913d6b606bdf294f487611b43ea"
  },
  {
    "url": "kungfu/case-study/hotel/index.html",
    "revision": "36d9a480ed243a0e441e1498a0c4660d"
  },
  {
    "url": "kungfu/case-study/instagram/index.html",
    "revision": "9eecf7622f1f2e5e3aa6b09d748b4ee5"
  },
  {
    "url": "kungfu/case-study/instagram/part2/index.html",
    "revision": "b9cfb5af2c2ae9b58295115a5d55128e"
  },
  {
    "url": "kungfu/case-study/instagram/part3/index.html",
    "revision": "c3734799dadd4b44951c0fdb3e500876"
  },
  {
    "url": "kungfu/case-study/metrics/index.html",
    "revision": "3738d19e39115a92219d68b527e77a19"
  },
  {
    "url": "kungfu/case-study/nearby-friends/index.html",
    "revision": "346e2db6c683cf13c3bc76d6d73c26da"
  },
  {
    "url": "kungfu/case-study/new-feed/index.html",
    "revision": "6db10c0abc93ec6861b26820fd4055a2"
  },
  {
    "url": "kungfu/case-study/new-feed/part2/index.html",
    "revision": "e756cb88b4390ee0aa599c1fa4e9e5c9"
  },
  {
    "url": "kungfu/case-study/notification/index.html",
    "revision": "e85c947b4a8be7096438ed86d7f91e4d"
  },
  {
    "url": "kungfu/case-study/online-game/index.html",
    "revision": "a5fa8db0f2cbc5a9c4def837e6dcf833"
  },
  {
    "url": "kungfu/case-study/pastebin/index.html",
    "revision": "ee70c80b7e4bbe83af2f34315c5a11f2"
  },
  {
    "url": "kungfu/case-study/payment/index.html",
    "revision": "e81b6a1b7682050e76aebcb4b61eccef"
  },
  {
    "url": "kungfu/case-study/payment/shopping-cart/index.html",
    "revision": "81e904d2b8a60e1a1878a6ff455169fc"
  },
  {
    "url": "kungfu/case-study/proximity-service/index.html",
    "revision": "094a5aa8bd3a829dcfa580afcf7049ab"
  },
  {
    "url": "kungfu/case-study/proximity-service/part2/index.html",
    "revision": "e9672725661034bfb90de9a5bfc09258"
  },
  {
    "url": "kungfu/case-study/search-autocomplete/index.html",
    "revision": "7d310de902f27b42e3389885e0a1df72"
  },
  {
    "url": "kungfu/case-study/search-autocomplete/part2/index.html",
    "revision": "2043644db89dbe528e647f6c3e3797e3"
  },
  {
    "url": "kungfu/case-study/stock-exchange/index.html",
    "revision": "734573a79da3cd5d470b5872080ff0d6"
  },
  {
    "url": "kungfu/case-study/ticket-master/index.html",
    "revision": "34f5e2b099e613fab2e09b0a5aa955ec"
  },
  {
    "url": "kungfu/case-study/tinder/index.html",
    "revision": "6f84999b59ce857264c7605e47563b81"
  },
  {
    "url": "kungfu/case-study/twitter/index.html",
    "revision": "8d12b81ac6e6ae7f463a73f59d781205"
  },
  {
    "url": "kungfu/case-study/twitter/twitter-search/index.html",
    "revision": "7fb3c6b713f90e3b06f5123cc535e04e"
  },
  {
    "url": "kungfu/case-study/uber/index.html",
    "revision": "cb6f04b3857f25c0274e9b329e09d8d2"
  },
  {
    "url": "kungfu/case-study/uber/part2/index.html",
    "revision": "025e62d8cc898cea5ee59ea58b8d6a2f"
  },
  {
    "url": "kungfu/case-study/url-shorter/index.html",
    "revision": "f62a25a92d4d7b227f6e7cd074e5ac37"
  },
  {
    "url": "kungfu/case-study/url-shorter/part2/index.html",
    "revision": "0ee9160dcbde33500c9278955c1c7dc0"
  },
  {
    "url": "kungfu/case-study/web-crawler/index.html",
    "revision": "46cbfd949ba7fe2ca0546ca047d7a366"
  },
  {
    "url": "kungfu/case-study/web-crawler/part2/index.html",
    "revision": "8259ef5fd0a3367fda1d09903c76552c"
  },
  {
    "url": "kungfu/case-study/youtube/index.html",
    "revision": "27cfa44ed95c328fa1f774906ac42eab"
  },
  {
    "url": "kungfu/case-study/youtube/part2/index.html",
    "revision": "44a8c4904b0c644b657dcede750f3801"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "4906d2993bba2d5041d38e7c55747cd9"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "fd1dc607050e10104f9e5b7e53d2059d"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "f116ec8f59928a22bb9593339415acb9"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "3ec64358b5daa5bdaea362fb18cc60a4"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "a80157955462eb228a507fb8917f3532"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "0d929cc16e684c4b62ea9df904abc673"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "bd97fc58497c64f9338636eb573411df"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "c2fb8251baaf6f37b824f40b98dfe897"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "7b58db360912873b7b4a66c8083a80fd"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "0dd31cb9af0c288854c232bb8b76b213"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "f0271d23c133d73dcd0fb5c62bdfe1c4"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "2d7c5a85ac1e418ce738f12e4032dfd9"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "905eef382cf16cca88f986697946c489"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "28da4bcff8b7372c99aa00102e925075"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "dd444c0656398e74d31418bc05db220c"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "71eb763300dab025ab77195d224e6826"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "dd0192a598de7ae4130f7a48cfecb342"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "118a054dfae72a5731a0ea80f96892b4"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "b082962ece3dcdbaced4b4ed68367cdf"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "375e54d23b3dcb3124352919feecd2ec"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "2ffbeffcacbf7ea2c8e9baa96cfc2c82"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "e99cb6f974ad04d2e5c8d7607650b09d"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "a24900a8a1d31ff07ebf1e78b3ef0655"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "114a2a6a2a9044d4f71e11a6bd92ceb3"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "b177524eb318519e955fa8ccabc2c81b"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "dfab1056434f5e903e0e3a6817acae5d"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "169cb22dbcbca991c7f75dbbecf60d43"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "df143a4175185ff22fe734cfd3fec0da"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "b6f2f7754a719d488ab1c7b55bea56f4"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "a6fcc1d75bff1e835a97472aed4c129c"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "2d5217024b67ac5cdb2513dda097960c"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "311a58150c0bcb06253ddb1a3ee55ed1"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "aab03fbd44821f90cafedbeb73ef6f85"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "343312d03b35a125d5f7923ad0f600d1"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "fdb3d546ff9707a9f8a8b7b6507424af"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "e5ac06886cfb8ba7b409553470ab3663"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "a8e58605dcd288d14b3fdbd14ad9c969"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "b4b9f78256ed881cde56d98be50d98f1"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "c3451d6e10ff576c56493d10bfd322f9"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "a0698e84279a80ceb2b1431c59e0ce1d"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "60a9da382aeaf495734c792fc8636181"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "00d86f50205d4f8c973f090c16a0a67c"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "5cf17d90ee595efae9a2c20bacb504f4"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "84841e81bb53c9d369910079d7e1ec92"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "68bb79d2f9d32a9d3ddb341673bd9d0f"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "b1bfbdb5e31855c6e2e01d95bc47335b"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "516e1b3210dbbedb79148e6cf9c1739e"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "74e35642d5a26626f1d7c3d7d1337c6f"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "7c070ecf768dc456149f468c5a017cd4"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "164e3789a5d21ff207e395b9ba5a3e0f"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "1a549d333f0ae711c990f3a56680179b"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "c53b6bcfbc77e63c9fd50f0f9043a164"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "c0d819c709b8b2f4686b146dd7a491f9"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "cfe6f7e82775ab21508b640b5c5e462c"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "861c91431e56512d1018ae05a4cadd28"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "352c82af45aeb52a5f0d03c1c7e610cb"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "4f574f1b506c77fd7b091f60528730dd"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "7c3e87ad56054c3ba2bca8f9b50f3f6c"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "01a8ed1c9b649b3d896f5d04953c5d87"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "96055ec3fc991ca3d806d4c6e39d487f"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "90f839207b77b1078cdd9ced219b8f94"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "11a109dfc68699910ceffa5b8c47122b"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "a640224ef07c87af5555cc05110d889a"
  },
  {
    "url": "kungfu/template.html",
    "revision": "5797c6a004a3236289727b51a609d2c1"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "9a584acec507ca63eae62ece93ce3f19"
  },
  {
    "url": "network/address.html",
    "revision": "2eb7f1548b1371916ffd5d3c16233356"
  },
  {
    "url": "network/devices.html",
    "revision": "f8fa4f49b0c52740359a8e6ac5bdd757"
  },
  {
    "url": "network/dns.html",
    "revision": "b28fc839d7691b74dc34052d256a68d2"
  },
  {
    "url": "network/ethernet.html",
    "revision": "56f0c2e2a5161e4233b9069bb92116ff"
  },
  {
    "url": "network/internet-protocol.html",
    "revision": "04493a7d22c88241bca0164d2f42f357"
  },
  {
    "url": "network/nat.html",
    "revision": "e076371fce498a044642e6f62fcb1409"
  },
  {
    "url": "network/network-abbr.html",
    "revision": "3b8cba080783f1dc6a5dfdfe9ab7084d"
  },
  {
    "url": "network/network.html",
    "revision": "6d7d660ea2afaf9fef6af5fb535779f0"
  },
  {
    "url": "network/obtain-ip.html",
    "revision": "921668580101751c0dcda43a10d7668f"
  },
  {
    "url": "network/stream.html",
    "revision": "9e6f3e4e5b0904e094d3cd35b26efae5"
  },
  {
    "url": "network/tcp.html",
    "revision": "841614333456ce312c481b5ef4d27979"
  },
  {
    "url": "network/websocket.html",
    "revision": "f272bbf7e476052dbf69b76b26e7bd53"
  },
  {
    "url": "node/env.html",
    "revision": "e1acfcc24bdf0ea4f55f2beb0add03ed"
  },
  {
    "url": "node/index.html",
    "revision": "07f2061b3927d83e29324b3b0a93fba0"
  },
  {
    "url": "node/n.html",
    "revision": "ff639972247d2aceae07cd3805f021af"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "aba21371bdf2342e853505a303a00850"
  },
  {
    "url": "node/npm.html",
    "revision": "fbca4a5dcc2ce680c6565da3a6c277a5"
  },
  {
    "url": "node/sequelize.html",
    "revision": "ca41b0e9e949ffbee93106bfe9a3ca37"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "f7fe903277f42cf9428970bff1a57f2d"
  },
  {
    "url": "oop/design-patterns.html",
    "revision": "b2f4bf1c071c81f134b17c0efa60971a"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "0ba9e64c5034ad14844a5b015cb194c3"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "10a4d1ea8e6778387a19ef01d437125a"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "237abfe9f03dc3220cd79099a6e6b04c"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "1c5f1944cafe33cf2aead029ac0230fe"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "1fe68a3c588cf9dd3237f03ebac1e2c2"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "8fbceec733a6a07dbe730879a3f6762d"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "724bff7d1144be03964c9d36a1143291"
  },
  {
    "url": "php/clean/di.html",
    "revision": "f698a9c64153f0d3ad917c4cc5634679"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "2aed23945a3e37453d521831d20cf5b8"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "0f09b19c97d537089e65fa6224ace30a"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "c3cb490b8cd890bd3cc06dbcb04e7950"
  },
  {
    "url": "php/clean/index.html",
    "revision": "fa3ba8cbdc3fbeb4bab7bce1701bee34"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "bbc75d51c23fd6d46d1b6b6604a60da1"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "b24af56562a7ceb2f61349b28a545232"
  },
  {
    "url": "php/composer.html",
    "revision": "0a13ef06c465000a9289df5dd9b6abf4"
  },
  {
    "url": "php/crunz.html",
    "revision": "8a9102fd03c4e86978bed78bd6449a47"
  },
  {
    "url": "php/laravel/best-practices.html",
    "revision": "605fcdb97956b9571ad5317f36064466"
  },
  {
    "url": "php/laravel/laravel-notes.html",
    "revision": "cc86e7546eabba9b1bf8f99058fcda84"
  },
  {
    "url": "php/laravel/laravel-vs-symfony.html",
    "revision": "bd1f0819ac4c88cf6a8e588020b49144"
  },
  {
    "url": "php/laravel/patterns.html",
    "revision": "b546ae2e505d59e690c9b49f71fa9e00"
  },
  {
    "url": "php/magic.html",
    "revision": "76ae4e76688fb5ec7328a0f52a0c505e"
  },
  {
    "url": "php/notes.html",
    "revision": "b6167254091dfbc031ecbd8b9b073fbc"
  },
  {
    "url": "php/oop.html",
    "revision": "21e348c29659560273991a12696439a7"
  },
  {
    "url": "php/php7.html",
    "revision": "44ecb84fccf6a31373dfcb78d9fa7fe7"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "b9a1d989d2f1924428bd057e59399d9d"
  },
  {
    "url": "php/reflection.html",
    "revision": "c302452c32031e90f67e7b775b46122f"
  },
  {
    "url": "php/tricks.html",
    "revision": "f1b3f0812697b6226b81195f8be6a719"
  },
  {
    "url": "php/wordpress.html",
    "revision": "ea9ef0b159871db31cba91d6749ba4b2"
  },
  {
    "url": "quotes.html",
    "revision": "801515e0ec87ae7a15bd17df4fc38a3b"
  },
  {
    "url": "react/mobx.html",
    "revision": "266c6ca245e724ad5341e18340c2f377"
  },
  {
    "url": "react/nextjs.html",
    "revision": "b47af5986e689307ce7d21ebba0f7ce8"
  },
  {
    "url": "react/react-native.html",
    "revision": "d49d8f6a1cedde06f08de7f5010eb1c1"
  },
  {
    "url": "react/react-vs-vue.html",
    "revision": "c413f719623d53331c5797d24fd3e083"
  },
  {
    "url": "react/react.html",
    "revision": "5a6b486dae7b40f57f0c23a4fd2925b7"
  },
  {
    "url": "react/vue_react.html",
    "revision": "5df05d55a459514c11cadbb8092ddf37"
  },
  {
    "url": "refactor/notes.html",
    "revision": "f6f19022398e57cc64dce1e900f84a1c"
  },
  {
    "url": "ruby/ruby-notes.html",
    "revision": "281e877ae1a068c1fc90063dc1088a5d"
  },
  {
    "url": "ruby/ruby-vs-node.html",
    "revision": "ea8c875b796739ce86dff5fcb4c8c4be"
  },
  {
    "url": "scaling.html",
    "revision": "ffc2bd9033f9ac170e55dc87e98dcd30"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "a24b0fa95d4209e6a94163c2f152fc40"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "5e92cf825d7aeed476e5ced914bacbb7"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "81ed201575251600dd715d337c640eb7"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "d1a44faaa0f1017e0db50647ef33c738"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "a29ad7c97807b6a6873fa2e490f17233"
  },
  {
    "url": "snippets/jest.html",
    "revision": "9179bc06f0493a81cc2b2c2f7a620393"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "d2513b2514d3e28e1c126619aacb589d"
  },
  {
    "url": "snippets/regex.html",
    "revision": "67e4bdc12c67d5933370178bdc53abc1"
  },
  {
    "url": "tags.html",
    "revision": "7230bf2892a4c524c4db73f92934d594"
  },
  {
    "url": "terms/12factors.html",
    "revision": "7b33d1cd8ba960a4742c221836b2dd5a"
  },
  {
    "url": "terms/architecture.html",
    "revision": "515635b55e82a762cbd0773edc782ce3"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "4985484ebef1187b947270c11d0b9a2d"
  },
  {
    "url": "terms/di.html",
    "revision": "d2e6ef0bf3f1c4fec0696fb70f45e514"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "42494eb9042affe39e3fc0257545812a"
  },
  {
    "url": "terms/javascript.html",
    "revision": "0d8900b5afb340b4b397a7492e928545"
  },
  {
    "url": "terms/patterns.html",
    "revision": "88f2fb0064fa58204738502a89291649"
  },
  {
    "url": "terms/payment/index.html",
    "revision": "5f5353d4f5e2faf7adbef11c37a755b9"
  },
  {
    "url": "terms/principles.html",
    "revision": "fdacaab4e656771c0ecd08c835377a2e"
  },
  {
    "url": "terms/rules.html",
    "revision": "9baa4358648d27599797ad46644b3269"
  },
  {
    "url": "terms/testing.html",
    "revision": "c80c9d842fcd230807ba038068957216"
  },
  {
    "url": "TODO.html",
    "revision": "690b2ceeb40276804646ddcad461652a"
  },
  {
    "url": "tools/chrome.html",
    "revision": "780ab31f85380b477548d5ab7f593e11"
  },
  {
    "url": "tools/docker.html",
    "revision": "53a554af221ac6f33d60c8fbf299b6a9"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "70da3eb315259b9e2acc0bc129a0bd71"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "a01d11cf9935c79679bf3e68791c4292"
  },
  {
    "url": "tools/graphql.html",
    "revision": "bbfeb087b75a302f35fa2cf8fb867bd6"
  },
  {
    "url": "tools/k8s/k8s.html",
    "revision": "285e1291aa3312d5701b647005b68876"
  },
  {
    "url": "tools/kafka-vs-jetstream.html",
    "revision": "8a71ac442d072159b3e158503870fccb"
  },
  {
    "url": "tools/kafka.html",
    "revision": "e61df50650feafd19d264073c6e6e354"
  },
  {
    "url": "tools/kafka/overview/index.html",
    "revision": "ddd33c4a7feba30d3d1782c0ac2015ee"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "329be3d33233d11d6ae74161f93d4ef3"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "ae2377abaacfc6b3d997d4af073605a6"
  },
  {
    "url": "tools/redis.html",
    "revision": "47b907e0f97d166e8353ed0bd12cbd94"
  },
  {
    "url": "tools/rfid.html",
    "revision": "1f565eb788627e5db8979eb1baf291dc"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "8badf34dea7dd1a7f915c429bc7cf740"
  },
  {
    "url": "tools/vscode.html",
    "revision": "37ba472c7b0af14a5b986c72fa7dff8a"
  },
  {
    "url": "tools/webpack.html",
    "revision": "764538a54653013161b20dc35bc83565"
  },
  {
    "url": "tricks/compare.html",
    "revision": "5d6975acb9f6c1d8fc4618258039af30"
  },
  {
    "url": "tricks/git.html",
    "revision": "f750708ee835b0ec8d88d74cbfbec67f"
  },
  {
    "url": "tricks/linux.html",
    "revision": "a2a34e74f7aa595114d0eed8d17a8a2a"
  },
  {
    "url": "tricks/mac.html",
    "revision": "89c85759f656ac1dd6caa665d741e6f3"
  },
  {
    "url": "tricks/misc.html",
    "revision": "92f3a3ffe21127bd93cdb0d813f1e627"
  },
  {
    "url": "tricks/setup.html",
    "revision": "fba4de4a39aa473dfce3f516ed159e2b"
  },
  {
    "url": "vue/communication.html",
    "revision": "d92456959d8475879a7586f4c078ebb1"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "e20d340ffb04edeb4a0c8b73767baf37"
  },
  {
    "url": "vue/events.html",
    "revision": "58bc1e11225762e5c826ccb940ec4c72"
  },
  {
    "url": "vue/references.html",
    "revision": "364ddbe4bf97d7d84607f6df3fdcf0e7"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "05e4931c6092dacfd3c696f6fa0c8862"
  },
  {
    "url": "vue/test.html",
    "revision": "f83ef77e354abd4e0a5d0065add89295"
  },
  {
    "url": "vue/tricks.html",
    "revision": "cbf43a9d0958634ecf718e582f9ffef9"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "1b7c0ceb0658ac7f87ea48f1352c1473"
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
