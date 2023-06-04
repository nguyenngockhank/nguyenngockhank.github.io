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
    "revision": "932e2693472c1f0f238b38a3a03bd088"
  },
  {
    "url": "ai/AI-note.html",
    "revision": "727768b361fc9b4e7ecd9c83023fedb2"
  },
  {
    "url": "algorithm/async-processing/index.html",
    "revision": "9d3ae0657795e8af9cf626f866a97b99"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "beda68ed1248f53b885d6d75e88b0218"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "81ea84f3d61e8580a7d4d463e412976d"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "dd240a9b4eced572fa76b7319ef2b016"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "f4aee54630af8a2f5945bf1fb88d724c"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "c9f1efadd97288f1250f556e140bb308"
  },
  {
    "url": "algorithm/loadbalancer.html",
    "revision": "04e20b7eb2addb42b5b2b4d9f27a6bb0"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "54c3b2e1fb62df4f36cd0559191bc2b4"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "fd1e66fc63b0969c8b8f959e772ed179"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "ba871a6c50bf8358094c7373a19f6990"
  },
  {
    "url": "algorithm/string.html",
    "revision": "10c3921a5b2780d255d0b752fbe7509e"
  },
  {
    "url": "algorithm/sum100.html",
    "revision": "1ad1fd9cea04f927901a3eec1c286cb0"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "c807e0a04a8840c76284440c1e966df1"
  },
  {
    "url": "algorithm/upload-large-file.html",
    "revision": "3bfa73e5f65698102f18004bfc189e5d"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "f1343032f1f86f51bab873ee709b73cb"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "112ca9906e13f8652efe6cce2c3ead92"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "d6bdb159b5edc18f389153b8339a9cd5"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "e5faff08918309f53d08e1c07ce11884"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "8f5a2bc3713aee229e4099d3d5921eb7"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "0af1e7ddf37ee92b810e7c7f242b7921"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "444520ffeaa9573afa14a6dddcdc53d7"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "6a7febc1a2bd16457b81779329281e26"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "b2381ac26d9e1b2b101d0f8cd56fb48f"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "592c7ed1de0d516ab6352b388f50f250"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "2cf7591b28e62e58fc552a4a2dac7eb6"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "26b24971a06ddadea6597469065b8332"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "60359d1c4ad974eb38b4f887016394a0"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "693ee0fb85a866f69edf336925ed205e"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "68f1d10ed85fab3060d9e1e0ef0250fc"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "c26219b28cbf6809749f640cada02cc8"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "39c92f5c66bf0e308193f71597f82080"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "b3688b3e3b146dcb0cfb8fb997174ae3"
  },
  {
    "url": "api/index.html",
    "revision": "19c7a4a5a5807c5d1c7af10d91244261"
  },
  {
    "url": "api/rest-compare.html",
    "revision": "9d6812012d79b9d8b791c9b9f63dad56"
  },
  {
    "url": "architect/audit.html",
    "revision": "901e1b79c5e1f5fe5e72d256c7b87250"
  },
  {
    "url": "architect/authenication.html",
    "revision": "b000d7aedc83e5c0ee4d4743ecc26609"
  },
  {
    "url": "architect/authorization.html",
    "revision": "328aacd0bffae403ad04fee802b51bf3"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "4e206e8d48e54406fd9c15703f8a0fc6"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "8257a8572a4e8340122c656b012a6181"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "8fa8775726b5065804e23975265ed89e"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "63494f051b7f98c9e83d44241edf6079"
  },
  {
    "url": "architect/ebi.html",
    "revision": "fd26dbef574864b04e4fd57454ec613b"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "b0dd77ff69b1cbc82e4530d27b7acc50"
  },
  {
    "url": "architect/fault-tolerance.html",
    "revision": "5f54712baf0f88a2e2aeb1610e305600"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "7fb7b83bd47584714f78f64ad74ed892"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "cb2c4ed668693726c73ed63e55517fc9"
  },
  {
    "url": "architect/index.html",
    "revision": "08e5cd0afda0a82bb708eb38c489952d"
  },
  {
    "url": "architect/jwt-handling.html",
    "revision": "4af4c816130141b710772385528acc59"
  },
  {
    "url": "architect/messaging.html",
    "revision": "23bab0469547e76de71c6feb7f39b0c5"
  },
  {
    "url": "architect/microservices.html",
    "revision": "fb1930a77929c72259a742e125f51c33"
  },
  {
    "url": "architect/mutex.html",
    "revision": "c059047f416dd8fb329994ab276ca0ed"
  },
  {
    "url": "architect/notes.html",
    "revision": "405f9184f56f24b63292ee5b6d6bbeeb"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "c1dcce35911197910fe30fe1146ae6dc"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "bd0251687c398c68606c3456e67e89c8"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "c32207a59fd25114a74c6af7509082ba"
  },
  {
    "url": "architect/refs.html",
    "revision": "5855fdacb8cb67bfd20d918a3c566968"
  },
  {
    "url": "architect/soa.html",
    "revision": "a0c4cc5410c47ea669833fdcaa97dc65"
  },
  {
    "url": "architect/spa.html",
    "revision": "39626d1396a9c8dab203201cdfa40efd"
  },
  {
    "url": "architect/sync-solution.html",
    "revision": "f97cb557ab08dc79d3c88ef2657ee234"
  },
  {
    "url": "architect/system-design-cheatshet.html",
    "revision": "2088d536b3942fb8fc3b4f27642fe9dc"
  },
  {
    "url": "architect/terms.html",
    "revision": "94f1e91bdc1b42f53d79c26f8843eea5"
  },
  {
    "url": "architect/webservice.html",
    "revision": "3fe94d02b8afaf37a494673c5b2c4fa7"
  },
  {
    "url": "assets/css/0.styles.416feb4e.css",
    "revision": "d25e2638d172e77dee3ea866fb9e515a"
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
    "url": "assets/js/10.abc5c09b.js",
    "revision": "03537245ea3d18775ca344868567ac52"
  },
  {
    "url": "assets/js/100.e4c76e1c.js",
    "revision": "1ef4cd93f342ef1d045671eb5cda73e9"
  },
  {
    "url": "assets/js/101.5470b48c.js",
    "revision": "abc685dd1dd2d0e5f19665b863656648"
  },
  {
    "url": "assets/js/102.89879b85.js",
    "revision": "391f7fe0466f78c2e5ea6a1ec0593de6"
  },
  {
    "url": "assets/js/103.f795a2e4.js",
    "revision": "683ae5af943a4bd301b4a1bc3678a30e"
  },
  {
    "url": "assets/js/104.2f1c2165.js",
    "revision": "bf62d1ce18a032f73dfaca36eeb36c81"
  },
  {
    "url": "assets/js/105.def27a5d.js",
    "revision": "e2dd5a0d4ce0adefe9c2cc3d9f215662"
  },
  {
    "url": "assets/js/106.fb80ef95.js",
    "revision": "c8456bde712dabf53809daa9f6eb835e"
  },
  {
    "url": "assets/js/107.26037aa5.js",
    "revision": "2ae33c0b1400eb7e07f392cd01e5593e"
  },
  {
    "url": "assets/js/108.36d59908.js",
    "revision": "118965002dbb07fdb5fb193f64454e6f"
  },
  {
    "url": "assets/js/109.a325d41b.js",
    "revision": "e2d5e4f07ff22ad9945d230cc5e27022"
  },
  {
    "url": "assets/js/11.afea642e.js",
    "revision": "d9191f45fae587908bd2210e28d99d84"
  },
  {
    "url": "assets/js/110.43c96bb1.js",
    "revision": "e57762932482ebb50e6ecb8998936791"
  },
  {
    "url": "assets/js/111.00b3ad60.js",
    "revision": "171cfbba8d303025ab04338a9b0d30ff"
  },
  {
    "url": "assets/js/112.f7db6eea.js",
    "revision": "b871a0906d5ad82cdcb21487bd467109"
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
    "url": "assets/js/119.aa95be22.js",
    "revision": "2f05faeaa2dc96e89ef6d52b63023d72"
  },
  {
    "url": "assets/js/12.d93b6d07.js",
    "revision": "d4cac9a16b3583ead76b0427eb7d6bda"
  },
  {
    "url": "assets/js/120.7928a9e7.js",
    "revision": "d2158681936a54d541d43e12b9315c45"
  },
  {
    "url": "assets/js/121.a0c0d510.js",
    "revision": "cb572b84f281ceb3a3d6ca003531ab0a"
  },
  {
    "url": "assets/js/122.c2fceb2f.js",
    "revision": "f5dcaf5df25f2da2ef27de1b0e1ebf85"
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
    "url": "assets/js/126.772bccd4.js",
    "revision": "7f5fbf2cb6c4bfa4ecd91a3bc5871d23"
  },
  {
    "url": "assets/js/127.b26299a2.js",
    "revision": "2c27950440b783b3511ade35bd9cb8b5"
  },
  {
    "url": "assets/js/128.c7ea16c0.js",
    "revision": "eebeb2ef0f18ba898596be18f2cdb7bb"
  },
  {
    "url": "assets/js/129.f3c36879.js",
    "revision": "efde82f13146097cd1bfb61bf7c1f713"
  },
  {
    "url": "assets/js/13.b61f2be2.js",
    "revision": "3806f8ce8c1034b9cbc438170dc98da5"
  },
  {
    "url": "assets/js/130.1fda9305.js",
    "revision": "0abc73f43321f86e6137284b8363880c"
  },
  {
    "url": "assets/js/131.93788246.js",
    "revision": "4986a29d3d6761fa99eeaea7d2444146"
  },
  {
    "url": "assets/js/132.4f9daae2.js",
    "revision": "464da9c2f856d2042d3f2ff91c572c3e"
  },
  {
    "url": "assets/js/133.a7717688.js",
    "revision": "c5eeb05672dc4156b7fe01fec4779934"
  },
  {
    "url": "assets/js/134.6f879fc0.js",
    "revision": "90487f7dc293b8ecf7f47a60088789d3"
  },
  {
    "url": "assets/js/135.6f57cc4e.js",
    "revision": "fc5c0c5303bd33c148547c63f416e9e3"
  },
  {
    "url": "assets/js/136.cb362bc1.js",
    "revision": "f719316a974a3c02b77b86bd2b1fdcf8"
  },
  {
    "url": "assets/js/137.03c4d018.js",
    "revision": "67cde350f11af958a1ab9f4ee4214bb5"
  },
  {
    "url": "assets/js/138.3eedf9ef.js",
    "revision": "f476497b01fcd2c82ce03c7cd099b159"
  },
  {
    "url": "assets/js/139.527547a8.js",
    "revision": "93cc047c9bd0504df5b7354cb44894a7"
  },
  {
    "url": "assets/js/14.b2c2eb9c.js",
    "revision": "811d72c231e5a35374fcb98e4f27e57f"
  },
  {
    "url": "assets/js/140.351871f3.js",
    "revision": "56c90add1dfd87a84a6e5ee04c6f93eb"
  },
  {
    "url": "assets/js/141.ccda6af0.js",
    "revision": "407b27970103a9c9d22b5a43566e7b4e"
  },
  {
    "url": "assets/js/142.2fccdfc9.js",
    "revision": "5f6ad8fdec6ce40642a6418d33f90ab8"
  },
  {
    "url": "assets/js/143.a8af6b71.js",
    "revision": "ed7823ba5c6feea967b2e62e1848038e"
  },
  {
    "url": "assets/js/144.d5c2a307.js",
    "revision": "eb0bfc3b27a01539bc1c4ea9c08c61ff"
  },
  {
    "url": "assets/js/145.aa32c4f4.js",
    "revision": "beaabea830e059ec317d6ce87d874e41"
  },
  {
    "url": "assets/js/146.37a43294.js",
    "revision": "d7adf470c62b2d556545a5f06af1b9a3"
  },
  {
    "url": "assets/js/147.4fe9b4cb.js",
    "revision": "d2dabdccf9f6b40203781c932a584aef"
  },
  {
    "url": "assets/js/148.9ef19c2e.js",
    "revision": "11eef17ff0f3b55fabea9115228625d2"
  },
  {
    "url": "assets/js/149.0359a8a3.js",
    "revision": "47828aadbc76a831525bcc76b6917bb5"
  },
  {
    "url": "assets/js/15.193d85fd.js",
    "revision": "4ba25e774b938092da8f09baa9995594"
  },
  {
    "url": "assets/js/150.c4f8258a.js",
    "revision": "93dbb65a163e760e7af3c8f170f9db1d"
  },
  {
    "url": "assets/js/151.171d9163.js",
    "revision": "924cd41e835b1cca887266d668bbdbfe"
  },
  {
    "url": "assets/js/152.95bb2cc3.js",
    "revision": "034a3bd16dd6ab5d6516e657c159e35f"
  },
  {
    "url": "assets/js/153.616dc00d.js",
    "revision": "c3d7dee0323cb7d34e466fb8a1528335"
  },
  {
    "url": "assets/js/154.c1bee667.js",
    "revision": "8510ff3dceea0bfd394476a26aae50a4"
  },
  {
    "url": "assets/js/155.0b844180.js",
    "revision": "29e95537d3e132d9328082280013ac59"
  },
  {
    "url": "assets/js/156.dd085e65.js",
    "revision": "78deae7bdfdbc3d04a93126587e3cdc8"
  },
  {
    "url": "assets/js/157.ba519d75.js",
    "revision": "62834a48e0189a95a515d0db859f9bfb"
  },
  {
    "url": "assets/js/158.044db093.js",
    "revision": "834282910f7ffe32f7638bebecc58ff9"
  },
  {
    "url": "assets/js/159.1b5828c8.js",
    "revision": "bab096d90183f116b691c5b8189d085c"
  },
  {
    "url": "assets/js/16.7239e82a.js",
    "revision": "315e3450e93a64aa0f990bfbba2d6c62"
  },
  {
    "url": "assets/js/160.32f3eba5.js",
    "revision": "d9cd4fc640f97b5253bff0753ae7999f"
  },
  {
    "url": "assets/js/161.1b356aa8.js",
    "revision": "1b211f1f27531d2034bd426c71688b60"
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
    "url": "assets/js/164.3def7e81.js",
    "revision": "c0a5de3e9c1ea27ec403444fcce2fad9"
  },
  {
    "url": "assets/js/165.75e84b36.js",
    "revision": "3da3bc5f1203589b59d8d5f4e3cb0cc5"
  },
  {
    "url": "assets/js/166.976d9f53.js",
    "revision": "c71660f4e2c09ef96462000f87c7e00b"
  },
  {
    "url": "assets/js/167.f327b1d1.js",
    "revision": "6a31f80b58caad24f377bdb6a5571e5c"
  },
  {
    "url": "assets/js/168.69ed2ea0.js",
    "revision": "2a7dc0d8e26fcd36ad0b6173d27e86b2"
  },
  {
    "url": "assets/js/169.e79f83e2.js",
    "revision": "ba1077c883f1c3f0095783c4e4f51ede"
  },
  {
    "url": "assets/js/17.1ef3f1f1.js",
    "revision": "fc9bb34d32be94dc40df3bc007343168"
  },
  {
    "url": "assets/js/170.2189534b.js",
    "revision": "65585d3b38be584040f8ad2caf9635ba"
  },
  {
    "url": "assets/js/171.664f7026.js",
    "revision": "4b9cecfa0fd541f00c33d47af37beb7d"
  },
  {
    "url": "assets/js/172.4420fb40.js",
    "revision": "dba680e2c9d15e53229d9a02b2b62467"
  },
  {
    "url": "assets/js/173.90b41775.js",
    "revision": "2ff04b05004ba8533a18ae1c6b7e665f"
  },
  {
    "url": "assets/js/174.a99d5490.js",
    "revision": "0f79c6842f73a0a3230d6e87b270bc1c"
  },
  {
    "url": "assets/js/175.2a65e01b.js",
    "revision": "db12cdd2717476352fcf35c126940ec9"
  },
  {
    "url": "assets/js/176.37d4f83e.js",
    "revision": "5bf3d97ec5a181e772e40dc4dfa94167"
  },
  {
    "url": "assets/js/177.d8b8a650.js",
    "revision": "d6b039f8dc73a6a500ba4207c8abe3af"
  },
  {
    "url": "assets/js/178.1c091adf.js",
    "revision": "c705de1e5f393ec36b4cc67794ee5c6c"
  },
  {
    "url": "assets/js/179.241cf385.js",
    "revision": "3917e2f2a075eab2bc7b5d3232ae5559"
  },
  {
    "url": "assets/js/18.60d6a203.js",
    "revision": "f61dad5d842b393643b2e3c70de92ad1"
  },
  {
    "url": "assets/js/180.f81febbb.js",
    "revision": "97c0c29c8e6578aef9b1165478e2fb4b"
  },
  {
    "url": "assets/js/181.4a6560e3.js",
    "revision": "76e5416d823f35efc33cc0a3dd0cc9ab"
  },
  {
    "url": "assets/js/182.d37b9ff4.js",
    "revision": "8295c26d316793ddb88ee42ff4e4edac"
  },
  {
    "url": "assets/js/183.95b09169.js",
    "revision": "3526bd2de34701a1e5d03e31e54f095d"
  },
  {
    "url": "assets/js/184.f46ab78b.js",
    "revision": "72cc65370e3a40d4717a94ae227e40ad"
  },
  {
    "url": "assets/js/185.2a2d1de1.js",
    "revision": "c0bd97ba346e6e7289cbfcf06b3f6df5"
  },
  {
    "url": "assets/js/186.52307432.js",
    "revision": "9c0931cc060e2067857929609987e471"
  },
  {
    "url": "assets/js/187.e4daf424.js",
    "revision": "be126baff40c68c77d72d8cabdeefb5c"
  },
  {
    "url": "assets/js/188.61b3e60f.js",
    "revision": "d32a37d41275adbfac7db3de0a60de69"
  },
  {
    "url": "assets/js/189.a1bc73bc.js",
    "revision": "60f4df6158571a847fa525a32c2d651a"
  },
  {
    "url": "assets/js/19.8ff931df.js",
    "revision": "ad3f8ae0888d03af44b43c4e83b02ccd"
  },
  {
    "url": "assets/js/190.8c778c94.js",
    "revision": "1f60ff776062e497639130546379a647"
  },
  {
    "url": "assets/js/191.0f42214d.js",
    "revision": "14703becdaecee9b1b4fe7f607a40053"
  },
  {
    "url": "assets/js/192.2356e601.js",
    "revision": "84c5b24d365b2f2e2351dcad57477c13"
  },
  {
    "url": "assets/js/193.01cb6901.js",
    "revision": "456db29c5483c56d6ba59adae7c25d3d"
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
    "url": "assets/js/197.a12440b0.js",
    "revision": "a0f6537f00f96e0acde65e0f413f294e"
  },
  {
    "url": "assets/js/198.b4c4d92c.js",
    "revision": "bf57de914b2ddc5ed5b3856f93310fd7"
  },
  {
    "url": "assets/js/199.81bcc915.js",
    "revision": "29f357abfa9ae8fb8e4eed5c547ebf4a"
  },
  {
    "url": "assets/js/2.105448cf.js",
    "revision": "55d3053d732cdb5ca8e3ff226da627b4"
  },
  {
    "url": "assets/js/20.0c935652.js",
    "revision": "bb148aff6e03ce0ab0a946d83e765158"
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
    "url": "assets/js/205.4a0af684.js",
    "revision": "b82e4abdfa814c07ecf6f7dca6754999"
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
    "url": "assets/js/208.200ae68a.js",
    "revision": "d70d13d09d90cab419d30b244d1be481"
  },
  {
    "url": "assets/js/209.4cd49c8a.js",
    "revision": "955a00deacd8dc34d07342e46c3d5930"
  },
  {
    "url": "assets/js/21.2fde9d96.js",
    "revision": "bd51c5749718824c497fdf57dc7098e8"
  },
  {
    "url": "assets/js/210.a8f8ab26.js",
    "revision": "889fec3c5a3e61746d623e8b7ed92fce"
  },
  {
    "url": "assets/js/211.94068991.js",
    "revision": "cb201013245a0d907a3f74f8652ffd35"
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
    "url": "assets/js/214.0db14b37.js",
    "revision": "e751f62db565c89d8abf5f1ef0e7c98f"
  },
  {
    "url": "assets/js/215.16d582f4.js",
    "revision": "f23ba5d050ef8a1745767c7761f5e1d0"
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
    "url": "assets/js/219.12cf3c14.js",
    "revision": "645548ad39622c6f3c12ae8923545421"
  },
  {
    "url": "assets/js/22.ddf89b97.js",
    "revision": "d74462475afa5c7dd62f056aec216068"
  },
  {
    "url": "assets/js/220.86ee3116.js",
    "revision": "eb653ef9c131bbc973b4137d62e2247f"
  },
  {
    "url": "assets/js/221.5dcf839d.js",
    "revision": "ed0a999f2da1c2521afe4a53fabed69e"
  },
  {
    "url": "assets/js/222.58f66531.js",
    "revision": "25347a0789b9a042b240a52aefb4cfd8"
  },
  {
    "url": "assets/js/223.26bbfbd0.js",
    "revision": "c7137a443c13aa7a389a85c606aefb15"
  },
  {
    "url": "assets/js/224.f9a9e1ff.js",
    "revision": "7deb1738914fcb5176809dcf449165cb"
  },
  {
    "url": "assets/js/225.cf380cb3.js",
    "revision": "8b101aec502db54254a702767a88d97a"
  },
  {
    "url": "assets/js/226.c5d255fb.js",
    "revision": "02fb1982be33e7d48828e10344ec8d43"
  },
  {
    "url": "assets/js/227.510d5bad.js",
    "revision": "50f41a1edc17fce1075482d5af256cf3"
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
    "url": "assets/js/23.26b37ee0.js",
    "revision": "f25f63babb045cb81cdb9a0b0d0a5088"
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
    "url": "assets/js/236.5ed970d8.js",
    "revision": "c5323fbfe87d775e0ed27631277dc12c"
  },
  {
    "url": "assets/js/237.ac1dbaf5.js",
    "revision": "4c492641df67c1e0841bd110d1302fca"
  },
  {
    "url": "assets/js/238.bd347cd2.js",
    "revision": "57b99b383b5d457544d2e3ef73bcee4d"
  },
  {
    "url": "assets/js/239.30cbc72f.js",
    "revision": "1042c9487c31b5514afde0be77f9d0f9"
  },
  {
    "url": "assets/js/24.b94a73eb.js",
    "revision": "69005143efae190b7e934812deb6b1b7"
  },
  {
    "url": "assets/js/240.2b7a145f.js",
    "revision": "913b5d0c785c6657bf31aa07c3f53104"
  },
  {
    "url": "assets/js/241.675c31cf.js",
    "revision": "826160027758cab361d61dfd242e3abd"
  },
  {
    "url": "assets/js/242.c64343dd.js",
    "revision": "2da107ef66681763aa1f38725febece9"
  },
  {
    "url": "assets/js/243.e3219a3c.js",
    "revision": "2e15653ff0c4d17842900df06e432008"
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
    "url": "assets/js/246.4f2beabd.js",
    "revision": "4060e41cbe9419cb50b8d0ae901c053d"
  },
  {
    "url": "assets/js/247.ec929bdc.js",
    "revision": "99f212970cd0d30b18a6f472486939b3"
  },
  {
    "url": "assets/js/248.54b663dc.js",
    "revision": "4604edfadcc3e59a13143c5a7eb2027e"
  },
  {
    "url": "assets/js/249.36fc38b2.js",
    "revision": "0588f4c1c00d7a42c824afc55d8c7eb1"
  },
  {
    "url": "assets/js/25.fa4a9063.js",
    "revision": "defa75fab06ef56600d96881f4527878"
  },
  {
    "url": "assets/js/250.761c3aa9.js",
    "revision": "01d79bd180cfe60b4fb5a64947b82463"
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
    "url": "assets/js/254.42266563.js",
    "revision": "c36b3cd9e24d4e827d339ec30acf7fe6"
  },
  {
    "url": "assets/js/255.87cabb09.js",
    "revision": "b0c0a7b18c4c18e9b46940e48e748e2b"
  },
  {
    "url": "assets/js/256.a31eecfd.js",
    "revision": "54401e313fe45ff54e12a378a1bd776a"
  },
  {
    "url": "assets/js/257.c4acb604.js",
    "revision": "b7b07f84d18bb248ec14e1d9558325c9"
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
    "url": "assets/js/26.e768d4a5.js",
    "revision": "cb7614c59a3210ef7590dbaf0d5179d2"
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
    "url": "assets/js/262.557c103c.js",
    "revision": "41810f63bf47f13b7e66356eae8b7256"
  },
  {
    "url": "assets/js/263.47f7d67e.js",
    "revision": "93464a4bf0ab2a09c698eaa8ef6a9405"
  },
  {
    "url": "assets/js/264.e27504e9.js",
    "revision": "89d5d44c1feed5e7b0f5f03f87988a28"
  },
  {
    "url": "assets/js/265.a44fa004.js",
    "revision": "236d0e8708c72b86526b89ce40a0a473"
  },
  {
    "url": "assets/js/266.b90d7254.js",
    "revision": "219a8241af9dbdcc506712fa59fd9ce2"
  },
  {
    "url": "assets/js/267.91cae471.js",
    "revision": "9860ba4587767889401c3bb9cde6d8c3"
  },
  {
    "url": "assets/js/268.2ca76820.js",
    "revision": "59669195de32474885c3f65cbf4752ee"
  },
  {
    "url": "assets/js/269.b358fa91.js",
    "revision": "641d9d1a086948b5a36d2d97f173e553"
  },
  {
    "url": "assets/js/27.2396b5ce.js",
    "revision": "abf8d3ff36d66f11ba8a539aa8841545"
  },
  {
    "url": "assets/js/270.a726ec20.js",
    "revision": "25160658951a174b1515d9b0b140a88d"
  },
  {
    "url": "assets/js/271.30a6a5fc.js",
    "revision": "462acf885a4b02c48257e410e9d3ece9"
  },
  {
    "url": "assets/js/272.54aa5ad7.js",
    "revision": "fa7ddf4dc7f7482ae61a7348f7247e87"
  },
  {
    "url": "assets/js/273.bd8155d1.js",
    "revision": "7fd4b1c05921255fa6be6f955a850719"
  },
  {
    "url": "assets/js/274.333ed90a.js",
    "revision": "79656ee39390c7be29c0d21a4cfab1b6"
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
    "url": "assets/js/279.c740ad89.js",
    "revision": "0952f0e6e6c247e36bc91aa2f142aed3"
  },
  {
    "url": "assets/js/28.fa0afedc.js",
    "revision": "f88d448f605837a9fc2e19c8b2bb54f5"
  },
  {
    "url": "assets/js/280.27b91fbf.js",
    "revision": "608f27a5cf656b2d4d34b2f44e2f4d1e"
  },
  {
    "url": "assets/js/281.e474bc08.js",
    "revision": "ffa0159de8fef0ba241bee1c48832afd"
  },
  {
    "url": "assets/js/282.4bbdfe43.js",
    "revision": "a48f9765357da860930459e24ba12d96"
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
    "url": "assets/js/288.39333b3e.js",
    "revision": "a39c0a276f5b5cedca996c0ee0207e5f"
  },
  {
    "url": "assets/js/289.304828ef.js",
    "revision": "1601bb4690de47982fd0ce10465b928d"
  },
  {
    "url": "assets/js/29.bcbab814.js",
    "revision": "315f4ec42bf4d4fdfb564278803a7fd7"
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
    "url": "assets/js/292.a0067260.js",
    "revision": "62d6abaa78154b0a2780562490bbe74d"
  },
  {
    "url": "assets/js/293.169bb501.js",
    "revision": "67b5d3d9cba137b09232f1a447e19bf1"
  },
  {
    "url": "assets/js/294.12e84df3.js",
    "revision": "1399cc627216bb9362b0d6720a3368dd"
  },
  {
    "url": "assets/js/295.0d929c3c.js",
    "revision": "43bddb57ae48dd8ed64e95ac686f929c"
  },
  {
    "url": "assets/js/296.c9cc97de.js",
    "revision": "7157e3c98d1b58ae8928bf57a5fecc7b"
  },
  {
    "url": "assets/js/297.a6e6d30b.js",
    "revision": "32308b288e1888dde859597610bbeac7"
  },
  {
    "url": "assets/js/298.581f9cbc.js",
    "revision": "2c9c7339e5496e7cf3e5b05daa1596f7"
  },
  {
    "url": "assets/js/299.b447350c.js",
    "revision": "4e3193212ae57b94333886ea1fecc819"
  },
  {
    "url": "assets/js/3.f155ced2.js",
    "revision": "4197dd6a98aabe4d6fb5a6436cbc71ee"
  },
  {
    "url": "assets/js/30.c1408319.js",
    "revision": "7a4ebc17e388fdfbc271dd5d9e4c870b"
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
    "url": "assets/js/304.1e35be82.js",
    "revision": "816fb54d5a0f132cd3e471f0fcb07380"
  },
  {
    "url": "assets/js/305.338691e5.js",
    "revision": "61f0f21779b8dc0c38614d7eeb4a4c75"
  },
  {
    "url": "assets/js/306.9dba5762.js",
    "revision": "6c500a08d6a44749946955556b72f2f4"
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
    "url": "assets/js/31.293bac4f.js",
    "revision": "22d2b29a10591b35898483a3006c2f4d"
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
    "url": "assets/js/317.8be8fe7a.js",
    "revision": "885d8011f2ba2fd76f5cfa58fe34f382"
  },
  {
    "url": "assets/js/318.31797381.js",
    "revision": "f5e19bb49857d4a2ab8f20074a373629"
  },
  {
    "url": "assets/js/319.f3721e89.js",
    "revision": "cf81d866e9e8f3b3909c31e2b433ab19"
  },
  {
    "url": "assets/js/32.78c80b70.js",
    "revision": "bbd0f6dace1b6de0e3091466911493e9"
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
    "url": "assets/js/329.a76f1991.js",
    "revision": "146523ac5ad2f13ffe87ed4948c15c21"
  },
  {
    "url": "assets/js/33.e279ccd8.js",
    "revision": "7771749cbc07d26edb72060f8e14879c"
  },
  {
    "url": "assets/js/330.cce85fb8.js",
    "revision": "7c774e92605aad793a3ddfaf6cac2a84"
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
    "url": "assets/js/333.11692146.js",
    "revision": "418894aadec2d42bf9b8815b523c1ee8"
  },
  {
    "url": "assets/js/334.81c89d0a.js",
    "revision": "2d4c75badf693754d2045003663373d7"
  },
  {
    "url": "assets/js/335.bd97ad69.js",
    "revision": "b5092b4a1f838b6dc47543e5c0f325c9"
  },
  {
    "url": "assets/js/336.1e9373f1.js",
    "revision": "92d9e91b145c059deb3ac49c12372b89"
  },
  {
    "url": "assets/js/337.92e9de70.js",
    "revision": "7b773acd8f0e63039fa42ccffecb7ee7"
  },
  {
    "url": "assets/js/338.c7302d55.js",
    "revision": "81e88bf01cf383f9bad5c5da9ab13bc8"
  },
  {
    "url": "assets/js/339.e0196032.js",
    "revision": "31d082c91a8352470826dfae0d3c0a23"
  },
  {
    "url": "assets/js/34.12cdc128.js",
    "revision": "c09bc66b189971687fd0a05642c9852e"
  },
  {
    "url": "assets/js/340.6bc53fbc.js",
    "revision": "e7cb55c059f3b4913c90c4547a1a4eea"
  },
  {
    "url": "assets/js/341.a299316e.js",
    "revision": "099f6e2effea58c93a84cd15f7514e1d"
  },
  {
    "url": "assets/js/342.77ee4284.js",
    "revision": "88678c49091b590447f5ff6dee7707fd"
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
    "url": "assets/js/347.c2d642ca.js",
    "revision": "63913083cf2e5c95507dce22ac2db73e"
  },
  {
    "url": "assets/js/348.d0f5c0e1.js",
    "revision": "fcfef0f25a5ebde44c95a9e18cd46be4"
  },
  {
    "url": "assets/js/349.5ca83889.js",
    "revision": "fabd3fd12c21a0e590ab05e10cacf37a"
  },
  {
    "url": "assets/js/35.ca39be79.js",
    "revision": "784fbc522859fbada03a29354435eb64"
  },
  {
    "url": "assets/js/350.33797582.js",
    "revision": "84f5ab690cab8a2c3f15c7923df3dfe2"
  },
  {
    "url": "assets/js/351.711ca459.js",
    "revision": "ca7560fff8658d7e672eb961dd345653"
  },
  {
    "url": "assets/js/352.26f8c3dc.js",
    "revision": "13f586bb461961eb4db27db0503ed748"
  },
  {
    "url": "assets/js/353.7b4fa777.js",
    "revision": "84197a0f37491b5566441efe27dc87d0"
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
    "url": "assets/js/357.91b89b0f.js",
    "revision": "4e689779ad09cb86f512f33e0c2b4b58"
  },
  {
    "url": "assets/js/358.101ad210.js",
    "revision": "c0dfc0d8beeeb32f4c89e40d3edaf900"
  },
  {
    "url": "assets/js/359.57dfa373.js",
    "revision": "84afa10fd68784dfa67c791e0266665f"
  },
  {
    "url": "assets/js/36.f4e2bbb4.js",
    "revision": "ce8beb860d265d1413a1c33beb175417"
  },
  {
    "url": "assets/js/360.18308bd1.js",
    "revision": "c4df0f89f448e60ed7021cead89e12af"
  },
  {
    "url": "assets/js/361.d2f5c841.js",
    "revision": "a702def7719d583338928379f37f56d3"
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
    "url": "assets/js/367.8f4db8de.js",
    "revision": "ce0be96802ebca86f5f18211c0df4eec"
  },
  {
    "url": "assets/js/368.45f4bd08.js",
    "revision": "6065a6a7e87be4f0630ead83d7e221cc"
  },
  {
    "url": "assets/js/369.a564603a.js",
    "revision": "74a206b7091a0f95c1fd611ed0e39f6b"
  },
  {
    "url": "assets/js/37.f28f1913.js",
    "revision": "cccaa59ad8d056b19888546e60c16bd2"
  },
  {
    "url": "assets/js/370.83c10eb6.js",
    "revision": "96accca26e81a9fd186cbb3d6c0fd51d"
  },
  {
    "url": "assets/js/371.ad4b9174.js",
    "revision": "94dc165d82a39379fbc00a032dc39ca8"
  },
  {
    "url": "assets/js/372.db502746.js",
    "revision": "d7addd56c601ac4475bc8e03a85e293d"
  },
  {
    "url": "assets/js/373.2b69fc4d.js",
    "revision": "0b0bb5eaf91c04fd3154efece0427a73"
  },
  {
    "url": "assets/js/374.c7b5c9a6.js",
    "revision": "7e1dbd1cdeec2a8495b32441b1f0c6b1"
  },
  {
    "url": "assets/js/375.3c884a83.js",
    "revision": "3c7f3f6860ade3ebc32d087bf21a13c9"
  },
  {
    "url": "assets/js/376.f3bef2e2.js",
    "revision": "98686a7f3e1c81f9b5d08b8ba0e0d5df"
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
    "url": "assets/js/379.0fe7d308.js",
    "revision": "8f34d9d48220622d00c4f7fdd0169ca9"
  },
  {
    "url": "assets/js/38.40019073.js",
    "revision": "710e99ce799e4d9cd352e869d352a5a4"
  },
  {
    "url": "assets/js/380.cff05d33.js",
    "revision": "f183092e8f9be4c1d6b0f9c4a6254900"
  },
  {
    "url": "assets/js/381.0ac740fd.js",
    "revision": "ce1b991231ce7180e897299d6f6126df"
  },
  {
    "url": "assets/js/382.8a19ef67.js",
    "revision": "c51a25babac327e008beee9d24c7e8e9"
  },
  {
    "url": "assets/js/383.e15e6bd1.js",
    "revision": "759c8e9689c4636407d28079a71c9467"
  },
  {
    "url": "assets/js/384.f982747b.js",
    "revision": "a44995d24b3a295af9b25ec054d0df31"
  },
  {
    "url": "assets/js/385.83f1bc2d.js",
    "revision": "29ee7295d73094a7936666a2a607519f"
  },
  {
    "url": "assets/js/386.ccc91c9a.js",
    "revision": "628cef7fada0190aca0f716b49186284"
  },
  {
    "url": "assets/js/387.c3562d27.js",
    "revision": "038b9d7b328ce199be46cebb3428e6bc"
  },
  {
    "url": "assets/js/388.493fc5f0.js",
    "revision": "76134075b48361a388d54a686c2ac5f1"
  },
  {
    "url": "assets/js/389.aa4fae0f.js",
    "revision": "d3f6b2c45b0848d08a05d52c0eada50c"
  },
  {
    "url": "assets/js/39.b14102fe.js",
    "revision": "a013682815ca99c4ab163979c8f20093"
  },
  {
    "url": "assets/js/390.433bf327.js",
    "revision": "c678191c7b6dc106ab47460327a091b9"
  },
  {
    "url": "assets/js/391.bab99ed3.js",
    "revision": "ac83cc0a2964c31f04b969a3b92cac6b"
  },
  {
    "url": "assets/js/392.82c51960.js",
    "revision": "4c861ddd77f15488ceb556aace099c4e"
  },
  {
    "url": "assets/js/393.750087df.js",
    "revision": "14f9c4e8caecd717fe1f33a4d3c2d93b"
  },
  {
    "url": "assets/js/394.918e5dd0.js",
    "revision": "5f50e9a830012958bdfce08b0808cbe0"
  },
  {
    "url": "assets/js/395.b227dc62.js",
    "revision": "dfa0332f2dc7b0dfd49ceadca1ab7d44"
  },
  {
    "url": "assets/js/396.9a6e3a30.js",
    "revision": "728fa78388fe003ed3c1e4f2079b92c6"
  },
  {
    "url": "assets/js/397.2d34a50f.js",
    "revision": "9eb3514978652444591df18ada9cbd99"
  },
  {
    "url": "assets/js/398.1986f555.js",
    "revision": "6a1fc0fe893bf174ee483f04c603b389"
  },
  {
    "url": "assets/js/399.87236c9c.js",
    "revision": "4c16b16ef4edd4e27dbe5f05303e75eb"
  },
  {
    "url": "assets/js/4.9b405ecd.js",
    "revision": "adcc71cbc71a93175f84d6ca0565eb45"
  },
  {
    "url": "assets/js/40.77e50b00.js",
    "revision": "83a8a702782a2eca68fd86cbf02668df"
  },
  {
    "url": "assets/js/400.c41689a8.js",
    "revision": "ff070f930d24efb54d98be1f08670b71"
  },
  {
    "url": "assets/js/401.e22d8b1f.js",
    "revision": "f2564ceba78f8aa2f8702a190e246eca"
  },
  {
    "url": "assets/js/402.e4db2e1a.js",
    "revision": "28a54e47f296119c65af629c61ea96e0"
  },
  {
    "url": "assets/js/403.da1a70b7.js",
    "revision": "36a924dd0d444a59ae3bbd2d8e2ecff4"
  },
  {
    "url": "assets/js/404.79f7e15e.js",
    "revision": "f995af9651cb874c038c6a123100de88"
  },
  {
    "url": "assets/js/405.d3a0031d.js",
    "revision": "8ecec766b0b6cc9e373573007ef8f26d"
  },
  {
    "url": "assets/js/406.7c4cbb59.js",
    "revision": "b5032346249db4fefb8e19e794a7663f"
  },
  {
    "url": "assets/js/407.55316c2f.js",
    "revision": "4660f43a69880dbca1265a2dbd42bc75"
  },
  {
    "url": "assets/js/408.59afef09.js",
    "revision": "01b1441c59b5e7f0f7a891f1e88a8e7d"
  },
  {
    "url": "assets/js/409.6cb10b19.js",
    "revision": "b10e15f4ee0fe018a039e0b97c824cc4"
  },
  {
    "url": "assets/js/41.9b57eef0.js",
    "revision": "89584137e78a08a22684342fb71ea967"
  },
  {
    "url": "assets/js/410.08dd2570.js",
    "revision": "ed8eeee9c15fd237d68a78656c171ef9"
  },
  {
    "url": "assets/js/411.f21292a2.js",
    "revision": "c63a5e9cc78170b1e190382522a4dce7"
  },
  {
    "url": "assets/js/412.6dd71b36.js",
    "revision": "fef7be9dc7f054fafebd3ac54fb407bd"
  },
  {
    "url": "assets/js/413.c16d93cf.js",
    "revision": "28d56c5e8a56e7ca5a5c984ed60c800d"
  },
  {
    "url": "assets/js/414.a31da106.js",
    "revision": "ecfa1437825f165607610fb815e8c6aa"
  },
  {
    "url": "assets/js/415.9c9f8618.js",
    "revision": "776a5f36bcd51acb4ca8690951be4606"
  },
  {
    "url": "assets/js/416.26658adf.js",
    "revision": "a6a64264e04149328bade28f1064531c"
  },
  {
    "url": "assets/js/417.c2356f9b.js",
    "revision": "b223f2170b63ac8e2de56e15b849a69c"
  },
  {
    "url": "assets/js/418.f30fc599.js",
    "revision": "1debee66dfd5c8d5fdc521ab92a6ac9a"
  },
  {
    "url": "assets/js/419.96cc6a22.js",
    "revision": "272cba4eac0a7d91fe19cfb063240858"
  },
  {
    "url": "assets/js/42.fee0a030.js",
    "revision": "0f0f0d8b0e6029bceea69473405d1486"
  },
  {
    "url": "assets/js/420.5e330936.js",
    "revision": "e6f5f3601035b4169fac856be90f09aa"
  },
  {
    "url": "assets/js/421.9435dba7.js",
    "revision": "9549304c3e73559450a6101a35164467"
  },
  {
    "url": "assets/js/422.48fc61a7.js",
    "revision": "0a7ecb143b14327db99c1c1eb3ffa64b"
  },
  {
    "url": "assets/js/423.18799652.js",
    "revision": "3d118a20f5e2ef651d924a7cb068cecf"
  },
  {
    "url": "assets/js/424.c2f39e9e.js",
    "revision": "d200179ec9da10948e915fdae7bbdb82"
  },
  {
    "url": "assets/js/425.9f515c14.js",
    "revision": "05ed336d1155fbf2f3bb3b696e8dc8c7"
  },
  {
    "url": "assets/js/426.09ee2e5b.js",
    "revision": "ec843ccba440bec6f66c9b359c5d06b3"
  },
  {
    "url": "assets/js/427.99cc7a4c.js",
    "revision": "18a6451ad3b75d563d365d2959c108b1"
  },
  {
    "url": "assets/js/428.1e7e8171.js",
    "revision": "ca66d0b0b590e16d3ce28ccaefc0c06e"
  },
  {
    "url": "assets/js/429.571e4b5b.js",
    "revision": "3c8f5fdd2c69ba6c7edd691c81f76928"
  },
  {
    "url": "assets/js/43.5989d92e.js",
    "revision": "e9a58567ad336692dd253fb6dfd5a8ca"
  },
  {
    "url": "assets/js/430.617c1186.js",
    "revision": "3bdffdacb40fced62ab856d37c5d8207"
  },
  {
    "url": "assets/js/431.c58d63a3.js",
    "revision": "f951d67675ece45090c1554298448ba5"
  },
  {
    "url": "assets/js/432.ebcbff69.js",
    "revision": "ae0ba32073fb8ad73a6467949ae7553e"
  },
  {
    "url": "assets/js/433.b323c3fb.js",
    "revision": "ae0ed53b10aca7461e6f9be42616e8dd"
  },
  {
    "url": "assets/js/434.57049885.js",
    "revision": "37f37e0707b8ea7818d9e4cc0222e08c"
  },
  {
    "url": "assets/js/435.634caf51.js",
    "revision": "289af67be2646dc1200c8375c5fd2ce9"
  },
  {
    "url": "assets/js/436.fb36a00c.js",
    "revision": "ce0a42019961495273be742b33b93574"
  },
  {
    "url": "assets/js/437.9f3c61d4.js",
    "revision": "dc8c2db5409e252add5c260a133d112e"
  },
  {
    "url": "assets/js/438.06615eb6.js",
    "revision": "289fb2692df253d32882e0cc1dd7cc80"
  },
  {
    "url": "assets/js/439.ff50b285.js",
    "revision": "be90a4d8dea777f63777383875031a47"
  },
  {
    "url": "assets/js/44.6826d0b1.js",
    "revision": "5e70eed7fa2e9616ed1edf6cff2faed1"
  },
  {
    "url": "assets/js/440.89aaa474.js",
    "revision": "3326887afb1985a632888d4e273a5a9b"
  },
  {
    "url": "assets/js/441.6b0da965.js",
    "revision": "fa646d5b3007e064af10075ed1be72ac"
  },
  {
    "url": "assets/js/442.4a6eced0.js",
    "revision": "aece69f75d054b4cced219031d5c9c16"
  },
  {
    "url": "assets/js/443.1dec3184.js",
    "revision": "d86a40ec420acdf04152193174597b56"
  },
  {
    "url": "assets/js/444.6074dfda.js",
    "revision": "3656ee3ef8b37287c36b373b01d923fa"
  },
  {
    "url": "assets/js/445.ee48f4f4.js",
    "revision": "6b511b57ed5b6294971f68efd3e864aa"
  },
  {
    "url": "assets/js/446.028bbcb1.js",
    "revision": "160f7e10914ad8ee01643ff83d928ed9"
  },
  {
    "url": "assets/js/447.85db77f9.js",
    "revision": "b51f2b2202039a810d73357b33929e70"
  },
  {
    "url": "assets/js/448.c6487dce.js",
    "revision": "4abd3b0d9c91559ff4df1316fd552870"
  },
  {
    "url": "assets/js/449.10fb5f64.js",
    "revision": "85e7d64a5898a36b42b10f50532db986"
  },
  {
    "url": "assets/js/45.77bfaf78.js",
    "revision": "c05d6bbd01c01260316c017045e89a42"
  },
  {
    "url": "assets/js/450.06368320.js",
    "revision": "14bf75c741bc26ac73cfffd656e01dad"
  },
  {
    "url": "assets/js/451.32687f8f.js",
    "revision": "76416bdeb4753eff538f48911fab30a2"
  },
  {
    "url": "assets/js/452.c295693a.js",
    "revision": "f1d545a377e55b6e445f7118865714dd"
  },
  {
    "url": "assets/js/453.9574ad6b.js",
    "revision": "5f02b8661320ed5038cff03a7148132c"
  },
  {
    "url": "assets/js/454.88265125.js",
    "revision": "47279fc4020d4893a1386a9274df3d20"
  },
  {
    "url": "assets/js/455.99141590.js",
    "revision": "db727caf0fa91aa7ab33959109e637f3"
  },
  {
    "url": "assets/js/456.3c00f641.js",
    "revision": "d38353a6235436a87bd8787185dc90bd"
  },
  {
    "url": "assets/js/457.a84fe77b.js",
    "revision": "22471cd621abce69ed7bd59d12757972"
  },
  {
    "url": "assets/js/458.52b1ec2e.js",
    "revision": "ebfd5bb3647795348afa02972e087d96"
  },
  {
    "url": "assets/js/459.46a33af8.js",
    "revision": "d038d3dd912edda86d5d9b40ebd7a8ec"
  },
  {
    "url": "assets/js/46.84bd9dc4.js",
    "revision": "ee79427497bd850da72ffc408f0e021f"
  },
  {
    "url": "assets/js/460.af60fc5b.js",
    "revision": "0349ffe2935b833f49390857c9f735e5"
  },
  {
    "url": "assets/js/461.0ec1cd02.js",
    "revision": "bb949d4d9100243e23abec25dd7501c7"
  },
  {
    "url": "assets/js/462.cabf4efd.js",
    "revision": "cf62222eb2f479e645abe17e11252302"
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
    "url": "assets/js/465.108afcd9.js",
    "revision": "7c9ff5a9fd36a5c06da1231f426287ad"
  },
  {
    "url": "assets/js/466.6e51c7a0.js",
    "revision": "b6b5d31236c70ba0ccd4df050c7fa636"
  },
  {
    "url": "assets/js/467.ea8706d7.js",
    "revision": "fdc553a9e239fd53044277b36522d352"
  },
  {
    "url": "assets/js/468.15545fae.js",
    "revision": "39db357fae1be7b0815c9d1848df9961"
  },
  {
    "url": "assets/js/469.cc506499.js",
    "revision": "2b2067c66dcfaca9c3bcd71290300450"
  },
  {
    "url": "assets/js/47.c004a154.js",
    "revision": "c9eff99060c5ab94e711ef26a7c08478"
  },
  {
    "url": "assets/js/470.7a834781.js",
    "revision": "f81f694528dd1e233f4928d95466eed6"
  },
  {
    "url": "assets/js/471.995d71c7.js",
    "revision": "780d6ccd46a7be5a6c3a56cacedc7e74"
  },
  {
    "url": "assets/js/472.04650bc9.js",
    "revision": "395c025d0a0c5ecc5c3d36fc9e36cd93"
  },
  {
    "url": "assets/js/473.f043b1e8.js",
    "revision": "e60d4a2ee0f0eed4c5c554246e701b14"
  },
  {
    "url": "assets/js/474.ffc81e23.js",
    "revision": "bb8cbd8bbdb166bddb499cf9c445f73d"
  },
  {
    "url": "assets/js/475.a6b14273.js",
    "revision": "150ea8c2f74b9a6b24a043c6f2b2ced3"
  },
  {
    "url": "assets/js/476.a762ab1d.js",
    "revision": "d7a9003075b4f7d53c8c473c189e63ef"
  },
  {
    "url": "assets/js/477.4bc6cd66.js",
    "revision": "217d841b0e044229ca7a8eb76f936189"
  },
  {
    "url": "assets/js/478.8093ce2c.js",
    "revision": "439b5c4069f3320ff610bd5f3802f1a3"
  },
  {
    "url": "assets/js/479.c692ca05.js",
    "revision": "ad13927fb99bdc16ae0f8e8edb154d9a"
  },
  {
    "url": "assets/js/48.f5944d2f.js",
    "revision": "049a1e743ecabf8f612fb47ec2313574"
  },
  {
    "url": "assets/js/480.1af55b60.js",
    "revision": "541eb9b08c39319bc7a4361a011f8738"
  },
  {
    "url": "assets/js/481.bf3f59e3.js",
    "revision": "f0db5cdfd6892bae8fc8d7325e7b6507"
  },
  {
    "url": "assets/js/482.6f586c63.js",
    "revision": "d37c3e82f474300ef2c92bd737f5970b"
  },
  {
    "url": "assets/js/483.df95ebd0.js",
    "revision": "d338b9a1ffe1ed905655a493a0d996c6"
  },
  {
    "url": "assets/js/484.bbf992c7.js",
    "revision": "bcbb8e93979e5dbc244def0718d99003"
  },
  {
    "url": "assets/js/485.568dc14f.js",
    "revision": "0cc839742d7fa465debf27328401f65e"
  },
  {
    "url": "assets/js/486.a76a7ed3.js",
    "revision": "85ef7f9d8be15c81c97c428233a553c4"
  },
  {
    "url": "assets/js/487.fa9557a8.js",
    "revision": "1381c26354887d09000e61a35e412bad"
  },
  {
    "url": "assets/js/488.bf7e0297.js",
    "revision": "22cecfc7d0627575c8e078331eaad657"
  },
  {
    "url": "assets/js/489.92a59621.js",
    "revision": "852e4ac9a205ccd497f31bad517c6eee"
  },
  {
    "url": "assets/js/49.65994c29.js",
    "revision": "ef925fa1c5caa20caaba9990c012749c"
  },
  {
    "url": "assets/js/490.db3913fc.js",
    "revision": "b25561c69fed58cda9841d11789e2a77"
  },
  {
    "url": "assets/js/491.67c96e14.js",
    "revision": "bc825011e372cebafe15ab5c829198f4"
  },
  {
    "url": "assets/js/492.62d6331d.js",
    "revision": "f7d1d6ab1dd7dbe5cdd2703f572baef5"
  },
  {
    "url": "assets/js/493.45534f52.js",
    "revision": "c132b28bcd839c8cca83e32caf4ac499"
  },
  {
    "url": "assets/js/494.d8d3eef9.js",
    "revision": "d0ebe7403b0589594cb3a026fdcb851b"
  },
  {
    "url": "assets/js/495.f45e1026.js",
    "revision": "711c43e584ff08dba13fdd29289fe363"
  },
  {
    "url": "assets/js/496.78a36eb5.js",
    "revision": "7ec15f24b93aa6d56a26b0d0279da919"
  },
  {
    "url": "assets/js/497.641d5d5a.js",
    "revision": "896d63c63c91775332b445761225e811"
  },
  {
    "url": "assets/js/498.000ca77e.js",
    "revision": "6244c1bf9f2a52c575ddbfea583d03a0"
  },
  {
    "url": "assets/js/499.af4147f0.js",
    "revision": "439ef2578879da43ce3599e19d132a88"
  },
  {
    "url": "assets/js/5.59cf532d.js",
    "revision": "0d90e6c2895e8fe9090153d0277c498f"
  },
  {
    "url": "assets/js/50.db73a5e6.js",
    "revision": "923c227d33eea3993439c2d03731c703"
  },
  {
    "url": "assets/js/500.1f074c6e.js",
    "revision": "74f14299a5cdf4de6089032ad4e389dd"
  },
  {
    "url": "assets/js/501.1c55f680.js",
    "revision": "4cba60f661610121c5f2ea0ba04be270"
  },
  {
    "url": "assets/js/502.92ca3cc6.js",
    "revision": "62788e51fc54fd4990cd255d02536543"
  },
  {
    "url": "assets/js/503.2514ea39.js",
    "revision": "4259b0730aab81ba0c3aea079c34adc8"
  },
  {
    "url": "assets/js/504.13943385.js",
    "revision": "0982934a2c12d63ebbe57524be0b87c6"
  },
  {
    "url": "assets/js/505.395b80f3.js",
    "revision": "6f08eed397c6ace1408bd0123da5d0b6"
  },
  {
    "url": "assets/js/506.4896aa73.js",
    "revision": "d999fffe175fd4cdfcaf8f2e3db37928"
  },
  {
    "url": "assets/js/507.d19a7b8c.js",
    "revision": "84eac7b8a3afbaedf722a4890668059d"
  },
  {
    "url": "assets/js/508.5aab606a.js",
    "revision": "ad74c05d489ce23bc721af79eb9f418a"
  },
  {
    "url": "assets/js/509.47c34421.js",
    "revision": "05f51d68cfc136f264097ecbc39a25d7"
  },
  {
    "url": "assets/js/51.eee64fe8.js",
    "revision": "cb3aa18afad3ffa21ee8d670fea1a1d5"
  },
  {
    "url": "assets/js/510.b49f982e.js",
    "revision": "fd68d4208df63827254df53cf0ff167e"
  },
  {
    "url": "assets/js/511.352767e9.js",
    "revision": "ea8630a928a04b7af032bd2e0e0f09bd"
  },
  {
    "url": "assets/js/512.c0833b23.js",
    "revision": "a3e7ef87afd42805e0ce703b4f1fe4b6"
  },
  {
    "url": "assets/js/513.803e7715.js",
    "revision": "c71cfe3c027fe3dc0552895a2b8d6691"
  },
  {
    "url": "assets/js/514.361aa331.js",
    "revision": "57ccb6ffd9925bae4e5549cb17ef0243"
  },
  {
    "url": "assets/js/515.a7af2fb9.js",
    "revision": "60fec0895a40792f70a757c759e29c49"
  },
  {
    "url": "assets/js/516.6332b94c.js",
    "revision": "21bc59762f98966e2d2516bf4e176f0d"
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
    "url": "assets/js/52.20e1498f.js",
    "revision": "30c29cba63a3d7c68e108774a56ab7b6"
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
    "url": "assets/js/55.e2697f7d.js",
    "revision": "62e7ff6f5dc6ef80691c24a248756910"
  },
  {
    "url": "assets/js/56.0fa50fca.js",
    "revision": "3815a25383e5fc23023ae8d79ce5fef0"
  },
  {
    "url": "assets/js/57.5782866e.js",
    "revision": "8a6399aa9040ea1aa4dd1fbd58ac799e"
  },
  {
    "url": "assets/js/58.58b8e494.js",
    "revision": "d69ac6e0da84b3d293412d89552323b9"
  },
  {
    "url": "assets/js/59.962a7561.js",
    "revision": "80d558dec1857c456116aa8915ad1fc7"
  },
  {
    "url": "assets/js/6.5fe62ab3.js",
    "revision": "76c17eb55292065395121011f5a68cb3"
  },
  {
    "url": "assets/js/60.63e58b87.js",
    "revision": "a6d45a2cf4ff5fc822795dc11e7f1f6b"
  },
  {
    "url": "assets/js/61.2fbbd30e.js",
    "revision": "0cd1965d48e7ddc20b860b69866a4527"
  },
  {
    "url": "assets/js/62.23446ab1.js",
    "revision": "760bc97fbccc7c697a21f775f04e5f65"
  },
  {
    "url": "assets/js/63.9ee20d25.js",
    "revision": "12b7a0c1b536010dec51320578d8d0fc"
  },
  {
    "url": "assets/js/64.fbc6e4ea.js",
    "revision": "c42ae5fd078fa5827e428a30c4584bbe"
  },
  {
    "url": "assets/js/65.fe284644.js",
    "revision": "a6c012efa54776b6017c6fbdcc20929a"
  },
  {
    "url": "assets/js/66.7b27345b.js",
    "revision": "8433e6293ba249ee915c935b4ebfb69c"
  },
  {
    "url": "assets/js/67.6e795eaf.js",
    "revision": "d39ca2256360ae6bb1d0348d300ca2e6"
  },
  {
    "url": "assets/js/68.ab5086b8.js",
    "revision": "e126af91a3a0bc3975e1765823431f72"
  },
  {
    "url": "assets/js/69.02f61b8f.js",
    "revision": "e69f0b93624aaa8b553656f6f82c9b50"
  },
  {
    "url": "assets/js/7.cc8f55b1.js",
    "revision": "ace4c14e3c3937e50e7a56f25a74d0bb"
  },
  {
    "url": "assets/js/70.1ab3b153.js",
    "revision": "4c4dbf8e122e863e3c3654137d6e09b8"
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
    "url": "assets/js/74.e246031e.js",
    "revision": "32509454823fed663e79d728563f5ee7"
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
    "url": "assets/js/77.c5f3fec1.js",
    "revision": "28e01ee623431425c467a1924115937b"
  },
  {
    "url": "assets/js/78.86577e82.js",
    "revision": "95eb66f31265b17c4e983d28cc0caa3c"
  },
  {
    "url": "assets/js/79.6025d51a.js",
    "revision": "7f5111fe004a6c7ee9258d50715cdeeb"
  },
  {
    "url": "assets/js/8.e364e9ee.js",
    "revision": "6d714ceec8bbea9cef2aaeaf7d5823dc"
  },
  {
    "url": "assets/js/80.c71a7678.js",
    "revision": "29a8053f74abffdcd2310d7756255b8b"
  },
  {
    "url": "assets/js/81.db5e2015.js",
    "revision": "087db4d9399eefea70aba32e0e058d96"
  },
  {
    "url": "assets/js/82.4a87cf2c.js",
    "revision": "8f4237ebe7988339f00ca78f85ecc1e5"
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
    "url": "assets/js/85.92887cee.js",
    "revision": "5ac67b7fa53936d09fc9717608cd6835"
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
    "url": "assets/js/88.0b8e3ae9.js",
    "revision": "38e0e6b3a02d73329ebb8ebe81c0f868"
  },
  {
    "url": "assets/js/89.68bd467a.js",
    "revision": "79cd840cf7c6201cd995c4464dac4e4e"
  },
  {
    "url": "assets/js/9.5b30a65d.js",
    "revision": "00f8984b0b452ddd75bb72e4257758bd"
  },
  {
    "url": "assets/js/90.354fbc23.js",
    "revision": "a02764afae50337960e11a521a57dc30"
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
    "url": "assets/js/93.bbe7ae04.js",
    "revision": "4b728ca4b37a9ce30db9bb199c78b41e"
  },
  {
    "url": "assets/js/94.874557e7.js",
    "revision": "138da7550b757a2d027173f5535ccd50"
  },
  {
    "url": "assets/js/95.6f518550.js",
    "revision": "b61df46524d7b6fd6f9b4507180ade4e"
  },
  {
    "url": "assets/js/96.8b45075d.js",
    "revision": "595d8e7427b152b974a102da5518de2e"
  },
  {
    "url": "assets/js/97.b39cbbea.js",
    "revision": "74357eb042d82ce53ff4efbd1bacd044"
  },
  {
    "url": "assets/js/98.10b83072.js",
    "revision": "c8edaeb94bfb6398cffb2ef8b8228712"
  },
  {
    "url": "assets/js/99.f7f18b16.js",
    "revision": "027f05cf3392df6ec0714236b2f84f01"
  },
  {
    "url": "assets/js/app.3da02d87.js",
    "revision": "663a9230fc4754c4c237115c6d5cf000"
  },
  {
    "url": "aws/access-keys.html",
    "revision": "90382a0f33b1f5dc298fdf6e1c57208f"
  },
  {
    "url": "aws/architecture.html",
    "revision": "c3f3bb8849628d6734bd7e43caf0a0d7"
  },
  {
    "url": "aws/arn.html",
    "revision": "83c08ca3423071316c8ffe4a4d2ec873"
  },
  {
    "url": "aws/aurora-pg-vs-rds-pg.html",
    "revision": "d21b73e69a62f42c1fd5e728f197713d"
  },
  {
    "url": "aws/aws-abbr.html",
    "revision": "c7fb278b2f5ac14715a1b11c8ca7fb0b"
  },
  {
    "url": "aws/aws-dev-tools.html",
    "revision": "dc5742d4a10ff3db76f108de6eb83c46"
  },
  {
    "url": "aws/aws-doc.html",
    "revision": "43a250c207951cf24932f009ba6ee2b1"
  },
  {
    "url": "aws/aws-outposts.html",
    "revision": "4007a7ca925a46a0dc461095f92ec557"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "462c924b5564baf6de69d0ec923b1c13"
  },
  {
    "url": "aws/cloud.html",
    "revision": "70411bde57b33433ee0a088c9061cc26"
  },
  {
    "url": "aws/dynamodb.html",
    "revision": "0ce8df4b9ca91e3b58629e6ac4269c37"
  },
  {
    "url": "aws/ec2/index.html",
    "revision": "eccf5f58d43bc6e6e3b736b32afc1d28"
  },
  {
    "url": "aws/elb.html",
    "revision": "691623e760e8e4b7c3ba7050bdceca54"
  },
  {
    "url": "aws/global-infra.html",
    "revision": "e3c06cf7662fae34a2008e2603869a8c"
  },
  {
    "url": "aws/misc.html",
    "revision": "5538878643a66535626ca4c260c0ad7b"
  },
  {
    "url": "aws/postgre/index.html",
    "revision": "710ccb8cc4476b683dc6526c85abe734"
  },
  {
    "url": "aws/s3.html",
    "revision": "73ad629a429c64e7769b6b5ed16410d5"
  },
  {
    "url": "aws/sg/index.html",
    "revision": "d5693c76a352bfef093f0c440ab91f35"
  },
  {
    "url": "aws/vpc.html",
    "revision": "6cbf913bedd497e2f635bfc85ce01e4c"
  },
  {
    "url": "common/cache/cache-notes.html",
    "revision": "8015dec3acc2884315ce04781db58744"
  },
  {
    "url": "common/cdn/cdn.html",
    "revision": "c41e782c342e1ff1634ed29ede09a6ee"
  },
  {
    "url": "common/clean-code/clean-code.html",
    "revision": "1d101ebfbe93abedc3cddd98356a63ec"
  },
  {
    "url": "common/clean-code/code-structure.html",
    "revision": "7589c932aa848fb12f9aa675d4194db6"
  },
  {
    "url": "common/clean-code/refactor-catalog.html",
    "revision": "6d173b8a627cb07bca096f51a93e3304"
  },
  {
    "url": "common/clean-code/refactor.html",
    "revision": "9047f6b3cfde1a406c2dfeaf817225c4"
  },
  {
    "url": "common/crawl.html",
    "revision": "25c543ca4836126fb392e0137f941387"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "ade996458971b0955a16a7938224de3a"
  },
  {
    "url": "common/debugging.html",
    "revision": "98e3073f4aef0790e4209c03168fa17c"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "d8bdbc95fe7360ba8fbfc388796fef23"
  },
  {
    "url": "common/document.html",
    "revision": "84a667e42d0e567c3733113cc85d6805"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "6e9a057e3266fa2c9ef17f2fd87db6cf"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "25200af5a3815948fcb7529644ac7cd8"
  },
  {
    "url": "common/index.html",
    "revision": "f292eddcaf0467315ba234cc59d9d5b2"
  },
  {
    "url": "common/notification/index.html",
    "revision": "9a346719f9b9c2b005c30705dac5e56e"
  },
  {
    "url": "common/optimize_be.html",
    "revision": "600de1882d0a2325977746fd0b7534f1"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "f2601fc8e9cafbd2bc071927c2c9c815"
  },
  {
    "url": "common/realtime.html",
    "revision": "d7db0d6f09aa990207baed0fb1eb4841"
  },
  {
    "url": "common/security/software-security.html",
    "revision": "d8274766eb230fbdacad734288709d18"
  },
  {
    "url": "common/seo.html",
    "revision": "d9aeb02555cda618a82350ea12208a8a"
  },
  {
    "url": "common/use-case.html",
    "revision": "55cc12c0ffed351db5cdd86534d3b8f4"
  },
  {
    "url": "css/box-model.html",
    "revision": "09ede609bdba00142d5d50f8912ad68b"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "463ac0791981693f1a055077d952f7e2"
  },
  {
    "url": "css/css-flex.html",
    "revision": "8f44081b5c0b0357c8c31fd199a9bcfd"
  },
  {
    "url": "css/tricks.html",
    "revision": "82e4747cd4e8e1f0dc068fb3b8e34b0c"
  },
  {
    "url": "db/architect.html",
    "revision": "e3574bc4e7b2df489f3396677dacf704"
  },
  {
    "url": "db/cassandra.html",
    "revision": "d530ea2ae8890a2f4f39a8c46fdfe32b"
  },
  {
    "url": "db/cdc.html",
    "revision": "20d53b0815c16887841f98fd0503da84"
  },
  {
    "url": "db/consistent-hashing.html",
    "revision": "2762040c6e985b15528149f11fb015d9"
  },
  {
    "url": "db/couchdb.html",
    "revision": "1057851e21e5d84cff6966b7da3c72d8"
  },
  {
    "url": "db/db-concerns.html",
    "revision": "3b78328234d219c37d03f26089478868"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "63c69a407f119e95b05efa15fbbac41a"
  },
  {
    "url": "db/db-vs-blockchain.html",
    "revision": "6b56bfca7cc43609a04fe7e9569fde42"
  },
  {
    "url": "db/dbms.html",
    "revision": "fdbdda5508202cbbe2a275fb51dc4c2a"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "289b7eda29f89e856f747ba60fda1ee4"
  },
  {
    "url": "db/id-generate.html",
    "revision": "35fba1414a2e329955cfc6c8ff8a2745"
  },
  {
    "url": "db/indexing.html",
    "revision": "a8220a1a0bf531f3a79f34901f8f8363"
  },
  {
    "url": "db/mongodb.html",
    "revision": "bcbc80af0d6392b2522cca686514805c"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "495259e8a66bd36c4e1e62bc09fb3a94"
  },
  {
    "url": "db/nosql.html",
    "revision": "73223b74c1c3ae6ecbe43d39358180b5"
  },
  {
    "url": "db/optimize_db.html",
    "revision": "2a88ed7adb93a1fe5f106b7bfcb1910b"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "86ad06b547992f898a73375be619709b"
  },
  {
    "url": "db/postgre.html",
    "revision": "0665b6d0087808a9907feff81108502c"
  },
  {
    "url": "db/realm.html",
    "revision": "28100ed755a5b8d3e791855b9f0914c3"
  },
  {
    "url": "db/redis.html",
    "revision": "0b59721897fe1b3516a7d54332e526a2"
  },
  {
    "url": "db/storage.html",
    "revision": "41b60d55d22fb3640e50bec937b3c2b6"
  },
  {
    "url": "db/tx-isolation.html",
    "revision": "aa5cd9561c8cc4213330bf14ddaff8f6"
  },
  {
    "url": "db/use-cases.html",
    "revision": "d82006d33090d947f1d3d81d5dd13764"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "d720a6a7d9965a9505f597a3863f4ca4"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "ff05dd9726e244a95ed5a069ba0ac304"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "d22b4bda72d669916e345178a0ed0f28"
  },
  {
    "url": "fp/fp-ts.html",
    "revision": "f902ad56eb7d49e481eb7144d53df36b"
  },
  {
    "url": "fp/functor.html",
    "revision": "6309d76eed3083e4d7ccc9473cda4d97"
  },
  {
    "url": "fp/monad.html",
    "revision": "760746f7f80cb510c932c80042b1f546"
  },
  {
    "url": "geo.html",
    "revision": "cbf2658d6f7b858a693667b731bba31a"
  },
  {
    "url": "go/clean.html",
    "revision": "74810a2c2cbf9c137956eeab4fc11781"
  },
  {
    "url": "go/goroutine.html",
    "revision": "52a1138d6bf1b9abaea8b24d58a88cb4"
  },
  {
    "url": "go/index.html",
    "revision": "ad1212ed28a07910157a53d97bac4375"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "d0cc0ccf69dcbfc1e86c84880778195c"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "c7a481ee63ce074621ac078dc561b481"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "5530277a87d68357a7b8552e4ac58b36"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "cf5d89fd41c4be4d784c76d4acc9bc3e"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "abcfc3c7d86ac641113bc933ed229c0e"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "81bbb94e4f8b96069a1a948620f38419"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "525f20a00e630bfcabb6e13a244d3ada"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "ed89b8e458bc725f648db5654a8a724d"
  },
  {
    "url": "idempotency.html",
    "revision": "66da89452530e29bf8f759d35a62e9e8"
  },
  {
    "url": "index.html",
    "revision": "7ac94fe42cc86b5074a268162822755c"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "a845407ae020b634529570113042985e"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "63515c38681706d268b3566120678151"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "a63efd36d39b0c6ce063be32a77139bb"
  },
  {
    "url": "javascript/closure.html",
    "revision": "098b518e3cab6b471a50008e324d11fe"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "1735ce95026793f3cb32bf1ac43d3503"
  },
  {
    "url": "javascript/eslint.html",
    "revision": "83fa52da735c6ec9876a4b9fb564178d"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "ef0bc29e0247db2a4384682e021adefd"
  },
  {
    "url": "javascript/nestjs/nestjs-cqrs.html",
    "revision": "32eb80039253010cfd0024e83a395b56"
  },
  {
    "url": "javascript/nestjs/nestjs-overview.html",
    "revision": "dce6c649e8e70354e6dac6106bc1f469"
  },
  {
    "url": "javascript/nx.html",
    "revision": "41a7ae0c457de4e89c1fccac7ac5a1b4"
  },
  {
    "url": "javascript/rxjs.html",
    "revision": "20ef9195f00223cb38bf73556177401c"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "bc324f62bfc5fb0092254df7044e714e"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "7bb48590d1d6d0ccad0e7cb36eb12d64"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "341af7265506f02317f6943606b2f1a6"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "5f797ba98abe8828d211e355935b28bc"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "99bcec87e642ff938bc35df6db50837f"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "af7fcd4a436b95b84bf9908b4b76f0fa"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "cce54bfa199e6386c99052519ab5ba13"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "773bf56b68493a5616d98ec83eddc2b4"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "9d24d8118393f7206ed861324c67bc80"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "5e3cbc2dbdeafb1a2c8e807ee3def3ae"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "53db50e93c08589e0e4363e2ee21a932"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "f45c46669070f3ae5e530fc4bcd8c2a2"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "ba2f9bef20b4ce14db39120c2d213a00"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "55fd0d5b3b31819d7a05c8fdb8d26982"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "cbb8002ec479eaa9f652451a3c1da9e6"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "18d657b6c0cfd83e56dee61502ec58e2"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "cf022a1feb9b736d8e43149e21bc8b5c"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "c714820ded7f5b98eb6f13f45d6a5fb6"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "ca1348f0026cb3c1bf6b87e3c26434dd"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "1f85004d5b788f9db0828b7ecc9969ae"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "f697eb5284fabb3535179e1bc5f62b4a"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "7a092ea3a1b4b7a2068b5957c078323b"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "325823ae296edbec68469164d9ab5dcb"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "8be54b92fa67647af9b924773253f206"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "6669bcac04ef9b0341097aac3eba18f3"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "0625a9742931e6da110a37313613cacf"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "1af900c605c579fdf1615e52d238f5eb"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "8f5257224fbe38dd8b038194f893cf14"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "bd8b7c2046a17aeda64994af86f0bc95"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "3592833acafde47cc5b1bc075c082ad7"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "31b8089d7316f26c2df7f295476259cf"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "c27753cefd9e9ced02a9f33e7a198ba4"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "5e65eb4447ad331328677e25e66e2d89"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "f3d27432ca269e80d92550fe5ea95b2e"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "d9517d8993c102c25d91cfd370d29bbe"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "cf2bfd4df0950da08e6785c7141a9f64"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "24f2e2ee81e172dc5b15d2a5862ee09b"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "673854b1bf7e707010f7e3237b96ea76"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "11f2e608dce7d59854ca427b47ff3d88"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "9be11c20e1ef679171d7608c9de91439"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "559156ae7f72efdaab0336a036989841"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "0e0be019182c5684e9d4d8dc57659da9"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "5bf09ebf0225b3524bad587631090a53"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "61cbcf841df6f8aabab00498a3a915ba"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "8318f35a6f9cb19acbbb7afa1289c235"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "3e194114468b478aa7dcc71abe8ae486"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "816cd45689cc95e2b94677ad1778cdfd"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "a7953a879a40cf378f1641081ba1f912"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "f575011b9a111a6e774e75f027798e96"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "b1b3bdaf9e41a118b49d2bf52ff111f0"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "b2f3ddd297d7e946d3b5f8004d28d4d2"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "8cd1f5c062768f1f2c42d21447e61764"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "554a0ef1ec2c3e24e00c7721978587f5"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "0e33800b06288c4a6718226d7f62eb69"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "1b208e4bf5095571e6fb3a807438e68c"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "1badb897af79e3e4b151957d9d1a8a18"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "a9b35fc08d803da04c1e44cf67003244"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "aadc17fd841742018241fe06f56d8465"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "3bd60c4608f72a1b64e6be685af8622f"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "027ac0f264bad0c58078f29e3041d82f"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "86e4b5b5509f9306ca85a85988970e54"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "fc5b9c22c1e8b4029ba36a5cfcb23302"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "5dea68db32a4dce3d084d08ee94a07c8"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "070d9e5eaf3a18d8bf4f15ef3b83dc7d"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "20d7e7905f9e89c4b21a8fe645b2aa6a"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "420870295e95f597631086f268fb8737"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "3172aa2b7ffcda802d7620b3dfb57ed6"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "f2abcb2ea27473f012bbe502c11a2140"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "dd925f9f825dfb3996ba5f623ee8aa50"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "c26c47987ca65f9d9a42c16c85881f5c"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "64ea81a8603e616eab8282e5e2ed1a7a"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "f8c4979bc0d2f6c1ff9f954d7449c755"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "80cae17ec3a57431b48ad5323a969784"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "d834ed4a7f0473aac803bd564c1aff19"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "4c54996e6fefa04e76dd8738fa405814"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "80752303140a3085e7525d0d853de11a"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "91f4ccb2a0f33584b6925c084d1fe0fa"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "050cfef2ac1facc62551e1a69d9ae392"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "2aceb22ad9e1a3463e27b77a284b5fcb"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "0896f345acabe22805bc7364cf4d83aa"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "a31cf0ef13ea2820ea8bde9a6425badf"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "9fccb82ad064be8b45eaa6a8787bc5b1"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "c19dae811baccdcd80ccbcfb9a18c54f"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "ecb8a349c98835384d16051da87b34f6"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "3b2f7ffbf47109795fafdd1643d83071"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "2e31e7981f9ddfa3a0a721ff3a3d56f8"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "f7dc39f3b9d174d7823a2494f18ac2d7"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "229b55933a762cc542c91cda4301aff2"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "09abcb1c4de6487e8b80b7938710126c"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "b76b1a7c53c6d0635ac63b6fe8ef4883"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "d0fce1ccfd50f21501c95fee5c185333"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "29c55548a9ba46c0a2e36dbb254e122c"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "afdc05c0f3c844986fff9d57ba86ff99"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "670062268a52750af8c6034ccb5f52a4"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "c57a20e3bcc5888100b7615c54cfbe9e"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "f30649fdda0c15728719989d03be6edd"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "8790e7d0a6ffa0a0ee0f280c528f2fa3"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "5193839fe3ea5be2392de15df9f922a5"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "8bb5a4eef84570de151b2f8afb456dfa"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "e62faf4d6c7c7b2c080967e2ccf9952a"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "b466af97486b053efc88f90778b89771"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "0e0592120d84920d7d4ff87fd7be6a84"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "d6236ad73c6f5038727f5c25fe6cc47f"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "2cffbdf78a7638d329863642ff4dba2a"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "ef9ba882337b15dce13b18ccb819cd02"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "17ded8520692803408242cc490d82800"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "3191a62fa7c4853f0930c90d2ad8df0c"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "3a0ec2c7b22b2eb800b167e72ee713ee"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "1ab49f24630af873d37a1b7783a7316c"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "e8caa53cd015d481cf6e77b000c3168c"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "e43ee6539702f8dd70f055ea9f8d2898"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "901fc9c372f9c612acae83ad2e3bf943"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "c5ac5d328df0b401ed53985b852a7296"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "dac685c8e9d73a3381198ea832238a94"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "873da33fb494e6f134bd0d3ddeea3ace"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "c7af3ad79886a6544076b3734c1b2d54"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "8ab6d1825921fcdfa569c87c9e1b73b5"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "b450a503567af35ad63360b732e40a11"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "3b8b3271ae1e4fd1b503f1cb24714639"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "de0b12d098ebe8f2cc8ebd51f4983cff"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "503dde6b9b9f9c11e1ea62fa74e4b54e"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "4f7015b5f1209b59a2a119d729f88c14"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "94a53ed856089bdcad40ea07727890c3"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "4ba2816ac9c9adfcbe17d73a87fa5465"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "b3c0395bb1113a64ed439625aa884e96"
  },
  {
    "url": "kungfu/case-study/ad-click/index.html",
    "revision": "6f670cd28f8c3f60c42d1f738ecee328"
  },
  {
    "url": "kungfu/case-study/chat-system/fb-messenger/index.html",
    "revision": "e914b9321aaa9a34b7a6be5801067be2"
  },
  {
    "url": "kungfu/case-study/chat-system/index.html",
    "revision": "89a72f5473bf82a85fd87ec71ccc55e0"
  },
  {
    "url": "kungfu/case-study/chat-system/part2/index.html",
    "revision": "2c2f8fa137661ccbe4a1c9427168b748"
  },
  {
    "url": "kungfu/case-study/chat-system/telegram/index.html",
    "revision": "ab082dbaaa79da5a29ccf4c56306c368"
  },
  {
    "url": "kungfu/case-study/chat-system/whatsapp/index.html",
    "revision": "f9a689f69f5e7bf60213af363b0ff2c7"
  },
  {
    "url": "kungfu/case-study/digital-wallet/index.html",
    "revision": "355bf830e2695854e4b567118b234ff9"
  },
  {
    "url": "kungfu/case-study/dropbox/index.html",
    "revision": "8dee04e8772f850ac1c240792c4581da"
  },
  {
    "url": "kungfu/case-study/email/index.html",
    "revision": "7c73bfcdffdde33e963c40a56b05b2d4"
  },
  {
    "url": "kungfu/case-study/garage-game/index.html",
    "revision": "0d56cf60a2c78138baa17adfd44ec3c9"
  },
  {
    "url": "kungfu/case-study/google-docs/index.html",
    "revision": "1266c2a43d75128c0ff0302e51ed32cb"
  },
  {
    "url": "kungfu/case-study/google-drive/index.html",
    "revision": "6a5fbe36e8d24546e336c230a5993c09"
  },
  {
    "url": "kungfu/case-study/google-maps/index.html",
    "revision": "745973ec24144e82a064c851e3e48979"
  },
  {
    "url": "kungfu/case-study/grab-nearby-drivers/index.html",
    "revision": "1250ca06ef5a869a43843d61d131d421"
  },
  {
    "url": "kungfu/case-study/hotel/index.html",
    "revision": "34aed48ccbbddbe2833b11c540b51680"
  },
  {
    "url": "kungfu/case-study/instagram/index.html",
    "revision": "5f40d9e299e0a3dd5089ac14ff7ea807"
  },
  {
    "url": "kungfu/case-study/instagram/part2/index.html",
    "revision": "1d17590ab5b28bf5ed424d0869491413"
  },
  {
    "url": "kungfu/case-study/instagram/part3/index.html",
    "revision": "616e40b0efbd52f354b16956d00d4e43"
  },
  {
    "url": "kungfu/case-study/metrics/index.html",
    "revision": "49b884d885b2bc9ff32a04756e9a0f2c"
  },
  {
    "url": "kungfu/case-study/nearby-friends/index.html",
    "revision": "031244be43faab83580895005e7fc6dd"
  },
  {
    "url": "kungfu/case-study/new-feed/index.html",
    "revision": "a238ba1cc2d1a30b27d3a3f73db2d61d"
  },
  {
    "url": "kungfu/case-study/new-feed/part2/index.html",
    "revision": "a9b6ea227718acdc27def88a9747bba1"
  },
  {
    "url": "kungfu/case-study/notification/index.html",
    "revision": "e7cb75163e8b7999f89b008ce8a2e7e2"
  },
  {
    "url": "kungfu/case-study/online-game/index.html",
    "revision": "94753a699625117ec83fa72da4085e69"
  },
  {
    "url": "kungfu/case-study/pastebin/index.html",
    "revision": "f23541180226ced1347a7a9cc0bbec6e"
  },
  {
    "url": "kungfu/case-study/payment/index.html",
    "revision": "ba9dbd4cff3d3020197e7281e3d7c577"
  },
  {
    "url": "kungfu/case-study/payment/shopping-cart/index.html",
    "revision": "8d5c37e88d72b09cf61fd8c55ac28f7e"
  },
  {
    "url": "kungfu/case-study/proximity-service/index.html",
    "revision": "b78f04c8ceb860d4f9e74e0af9a5125e"
  },
  {
    "url": "kungfu/case-study/proximity-service/part2/index.html",
    "revision": "b7955001c7b343e6a0abcebb16f3bfe1"
  },
  {
    "url": "kungfu/case-study/search-autocomplete/index.html",
    "revision": "141ec0682b4251a50e987609519aaec2"
  },
  {
    "url": "kungfu/case-study/search-autocomplete/part2/index.html",
    "revision": "8f22d1dfb1e14e43461ebd6063fdfac4"
  },
  {
    "url": "kungfu/case-study/stock-exchange/index.html",
    "revision": "6ffd1d1b360d10a2d7d8c10979f5623f"
  },
  {
    "url": "kungfu/case-study/ticket-master/index.html",
    "revision": "6bad8311a9ff2d11821d1e28e4c9e394"
  },
  {
    "url": "kungfu/case-study/tinder/index.html",
    "revision": "51290854de43cededb2946073e13ffcc"
  },
  {
    "url": "kungfu/case-study/twitter/index.html",
    "revision": "6627bf00038ed79d4df2aa51aa0d57e1"
  },
  {
    "url": "kungfu/case-study/twitter/twitter-search/index.html",
    "revision": "978ea0ddfd3061aab36bd8ae67f42949"
  },
  {
    "url": "kungfu/case-study/uber/index.html",
    "revision": "802b33bac37e792edbdabdd5fbca964c"
  },
  {
    "url": "kungfu/case-study/uber/part2/index.html",
    "revision": "3781be7bb77c1b9867b8f84236fa3ab4"
  },
  {
    "url": "kungfu/case-study/url-shorter/index.html",
    "revision": "4e93f86cfaa09dedfcd88f520b0b9224"
  },
  {
    "url": "kungfu/case-study/url-shorter/part2/index.html",
    "revision": "88bec2693d4493d718795f0b3e6fcd5b"
  },
  {
    "url": "kungfu/case-study/web-crawler/index.html",
    "revision": "4280e60a2ad87586a37296f04f779afe"
  },
  {
    "url": "kungfu/case-study/web-crawler/part2/index.html",
    "revision": "1d8eb48e62b7f68f6919c5e17ebe2e67"
  },
  {
    "url": "kungfu/case-study/youtube/index.html",
    "revision": "fb0399d37f6a13a1a90cd79899f2faa7"
  },
  {
    "url": "kungfu/case-study/youtube/part2/index.html",
    "revision": "75c20214dfd8221119fde92c5cc93efe"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "bc0714bd98e80f9b5e9624e9ec2ec54b"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "8aba17b3bc83bf80e785a4b245516c72"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "be285f1f4b90956feb274e69689fb98d"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "60ce54b8bdc9c0cbe4ee6ddb80032cd1"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "18ffc0f8d6de8bc6c97d31f9e9241266"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "2f73f14c9314fcb14c59686eb302c17b"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "c5bc01c0ad11f4a390d488dd4af6c390"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "f192868226dd8231d4f0fc9f5c202583"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "fda800d1af24dbd9e7f16e049bbbd7cd"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "ab84e9cd473cbc27f7a158f4538a4da1"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "70421c5b99cc76ce40c9e3ccbf3a4fff"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "81ba3d8d348d999f4affaab92a6c01d4"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "4abe056c0b06e180620d7574cf217326"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "1eb5f68e82d0e126fba000b290066af3"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "d6bead46a4b6de052572d077b06a0b3f"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "887f56a913b037c81a54798c7cf1be4c"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "45a259031e98f7657c985166397b26de"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "550098506d2de98c805234005c210890"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "e6af96e11fd1d736184c5e9fc62d0507"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "8c12ff21d00b6fad4f1d74e5f3094c78"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "e9ce277839f94411116a845fdcc82d58"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "2c4233321a1aabda70c644560001318f"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "9970f0d37636f1f8f5e214d260be4ced"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "8defe4cf319704360fd71163105162d1"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "c3c072e0118268e8d67d66482527c3a1"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "101ca8afb9401398da92cddb43112525"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "2af7fd85b872df301a4e613ee95c272f"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "98f0b75e06dae5eca12a4aa348ce37cb"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "801145b0531fa98181a871d4a760b353"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "2af34d5625b82d6b7f28c433c524f0f2"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "8c403823e25ac1615f6c70731ae19e16"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "6e797604d9bd8c4076537763eaf60b22"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "4c2502241a5c66ff9b933a4734984fe5"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "af738398a98339148c6178cbf1e0753c"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "5998fc6248b502f5162118ee65827c82"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "d296f36906ee3e8caaaf86931dd1ad28"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "e2bda85efe12d6893fd961fe1bfdb7b0"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "efff63e8e87d88f4e1ef9673b3b99fa5"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "d679a54266721bf3a58cbec45b8568be"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "c0f39d775c949fb9edf7488b31c74ab2"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "fafdc16a0874b3456e2226b15dd5c0d5"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "d58f9f1bc39c580c8890606fe72b5690"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "781381761b478e9e5813c808fe2a754e"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "d8f887242756ee52a1ab38b5b04c6f83"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "1f83f0b1343cb9d52623bf072f645f39"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "0601335c5fc7f00bebfbfc5f22efe573"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "d2d934df03da66cd9f3456b0d1e719e4"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "2e6544d3fb3843334736f9e634c051fe"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "851c7ebf535a7fc0cc040161ce3d08d5"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "bed8eb73533a6916e30b10ad2b32728c"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "8b2dcabf92c6497de502d909c4d137cc"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "79b6c93219b17bf99997289afe65cdb7"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "837dd6e2f832858ba4717430b12ee35f"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "8891f0ad459b9cba0f140c3ca3f7f506"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "9604e3f37c0a0b0769ec6bd56b9548b1"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "74bb809edc0166c4f73506e453d005fa"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "3823caf29a102ba810f8e992e50cad0e"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "35a08c12659f309b40e3bfa62de993a3"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "6d2d5b2d42f269c156c2ebe539fa771e"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "b5eb847c3ef5ac2c24e8311aacc0b7af"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "902d7da629daf6f4c19560deaf7a1f57"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "6454f382c5d5cb9288efee0c152ab7d1"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "6324aa27d353cc63185f431b24a77d3e"
  },
  {
    "url": "kungfu/template.html",
    "revision": "224133ed3ef8dd04d422dfa45a7f5513"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "570f0c7615143ec811246b45f26038be"
  },
  {
    "url": "network/address.html",
    "revision": "dc6bbaacdabe4d75cd3ee1b4986dbb21"
  },
  {
    "url": "network/devices.html",
    "revision": "bb5e42d98f98994d809fe0739637d37e"
  },
  {
    "url": "network/dns.html",
    "revision": "647acea8d5ada7e38d5f38bb5197bfd6"
  },
  {
    "url": "network/ethernet.html",
    "revision": "d1d3d89c062249f7d847af0265095d1f"
  },
  {
    "url": "network/internet-protocol.html",
    "revision": "06a055d55457403ae36abb95556ed93f"
  },
  {
    "url": "network/nat.html",
    "revision": "f5a0985bb0369e6b67b4a8dae0dff554"
  },
  {
    "url": "network/network-abbr.html",
    "revision": "d841398a44b2cec65c6e194ba738c2d4"
  },
  {
    "url": "network/network.html",
    "revision": "9052386b44e7d2f9a516ee4595363704"
  },
  {
    "url": "network/obtain-ip.html",
    "revision": "66a808cbac0d7631bcbc06a91682be65"
  },
  {
    "url": "network/stream.html",
    "revision": "e887b3881d654458d15a611ea67d2f09"
  },
  {
    "url": "network/tcp.html",
    "revision": "40bb4ed11b3381d71a580df42df4c16a"
  },
  {
    "url": "network/websocket.html",
    "revision": "be255c51e216e6abff44cba49f5b60b2"
  },
  {
    "url": "node/env.html",
    "revision": "89de904e4eecc76bd2ea7ea1e1d08d6e"
  },
  {
    "url": "node/index.html",
    "revision": "16e84e342c4eda39c3770dd653b2a4e7"
  },
  {
    "url": "node/n.html",
    "revision": "62f85b40e0a47d0b6ea4a05a46e66ea3"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "864fc4ffdd73182289683aa0187f8ca6"
  },
  {
    "url": "node/npm.html",
    "revision": "65d471b7459935159538b5d560f1d4ee"
  },
  {
    "url": "node/sequelize.html",
    "revision": "22486b0773976b0a4730f55f6031adc4"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "2d52b4758b05ba96654189f04af2eecd"
  },
  {
    "url": "oop/design-patterns.html",
    "revision": "d15ef05ad68e56865953a78653af357b"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "3785eb77f0c581f13f8b13a6125ea767"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "a1269ec151a13839b4e996a0821e1bc1"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "7452b7a3c384d43326f148ac8625f480"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "98855bb217b66a509e1fb2516df0f4f7"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "273408b4e14a3ec92990e77a7c6f599c"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "fda963463b026549c38ea4ffad94d7fd"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "d40657683915940e15472c1e2d865001"
  },
  {
    "url": "php/clean/di.html",
    "revision": "d003911c5112472b5b09d5681836010d"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "68b02eb91ba0f7da2ea2e4b95eafcaf8"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "3f190197ca52cb3d81c2e3f342adab88"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "5a8912d58db2641b4684cd5a9a0f9a34"
  },
  {
    "url": "php/clean/index.html",
    "revision": "5e679739144279798beda3b9d9ef583b"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "f22852de6ecc4d38df91deab89fe51f0"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "426821700bf5f3fd37d0953d12a7454f"
  },
  {
    "url": "php/composer.html",
    "revision": "ef4056195b6731a6b6aa5509bff059fb"
  },
  {
    "url": "php/crunz.html",
    "revision": "93227951e444015dcfd042ddab5b1bc0"
  },
  {
    "url": "php/laravel/best-practices.html",
    "revision": "69f4a9534b36e339d4ad4cd7ce25e8a5"
  },
  {
    "url": "php/laravel/laravel-notes.html",
    "revision": "8bae8729689251e43f57c706aa3cd45e"
  },
  {
    "url": "php/laravel/laravel-vs-symfony.html",
    "revision": "807199ba14922bddc84dfa8ef834d5ff"
  },
  {
    "url": "php/laravel/patterns.html",
    "revision": "0a9e60502e7dd46badb3e537303d5b4e"
  },
  {
    "url": "php/magic.html",
    "revision": "c56ffa0bdc75c61dc812358c29828e0d"
  },
  {
    "url": "php/notes.html",
    "revision": "35042dc5d6b72294ead98576a49d7302"
  },
  {
    "url": "php/oop.html",
    "revision": "14d445392339eb14b4f71298500d4850"
  },
  {
    "url": "php/php7.html",
    "revision": "df84bb9eeff01a3339cab368a4d71454"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "5a51dcc48208031b25a3556c37582534"
  },
  {
    "url": "php/reflection.html",
    "revision": "85030c8fbdac2fb42024584a380f1978"
  },
  {
    "url": "php/tricks.html",
    "revision": "edd146d8e9f1cf0f432a0fcc024fcbc3"
  },
  {
    "url": "php/wordpress.html",
    "revision": "7533842e51bb2da855f66f22508392fc"
  },
  {
    "url": "quotes.html",
    "revision": "5ab0503b9a7eb3a8f5885e4ba07cb704"
  },
  {
    "url": "react/mobx.html",
    "revision": "3941d072d21e6569b6ff85c7a5fb41a7"
  },
  {
    "url": "react/nextjs.html",
    "revision": "d62e121ef4fec14e84822dceb04ea9f8"
  },
  {
    "url": "react/react-native.html",
    "revision": "9ed3301f5a72c2db184b0e210fb76d55"
  },
  {
    "url": "react/react-vs-vue.html",
    "revision": "7517bf4d145cee133cae7e56a8de6c98"
  },
  {
    "url": "react/react.html",
    "revision": "2a2107592fdd6e8e39dd34553074bece"
  },
  {
    "url": "react/vue_react.html",
    "revision": "26d4718f5a02231087e749fb433ce48b"
  },
  {
    "url": "refactor/notes.html",
    "revision": "f791ca33c1e76d44c88344aa23761aa6"
  },
  {
    "url": "ruby/ruby-notes.html",
    "revision": "ad6751afde1b0672d7625b4dc3ea4b93"
  },
  {
    "url": "ruby/ruby-vs-node.html",
    "revision": "0538b25b44d05b8f3960c0701695fbd0"
  },
  {
    "url": "scaling.html",
    "revision": "6f17a4f56377667b9b0019bba3b75227"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "79388789148334151658c862938597dd"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "2b21be66584fa680b487247a1eadec26"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "d717328719377113487f6c25cf269c5b"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "38445f8c5da60e2b473ee9204eeeb06e"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "7aee87a78937939b0f22bccb7af0ef13"
  },
  {
    "url": "snippets/jest.html",
    "revision": "f5f1f1dcca8847ea9052c96818f495c2"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "bf056d5ab125bdd718750b9217704ff4"
  },
  {
    "url": "snippets/regex.html",
    "revision": "c5ec036f5d87b090520d48dec8dc05ee"
  },
  {
    "url": "tags.html",
    "revision": "1a41e6adef3ddd28d3085c7e869c9d33"
  },
  {
    "url": "terms/12factors.html",
    "revision": "1df72a7c97581229e0778bc2aca40218"
  },
  {
    "url": "terms/architecture.html",
    "revision": "8bd5ac679024f89275f1900c104a7d61"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "742081bd98ed069956cdb4dbeb642dbe"
  },
  {
    "url": "terms/di.html",
    "revision": "fb1bfb1bd8495b3f05a86b5c29992481"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "890a0a2cf64382acf7dccb9b074cfcd2"
  },
  {
    "url": "terms/javascript.html",
    "revision": "1063cf226ad0c587a14547546114aeb3"
  },
  {
    "url": "terms/patterns.html",
    "revision": "12e65cb68665de7c8c0b38d281be00b5"
  },
  {
    "url": "terms/payment/index.html",
    "revision": "77f7f186e7c44c61015f5c7df5f721e0"
  },
  {
    "url": "terms/principles.html",
    "revision": "5efe2a46836fb6c8b977e00c2e3bf1dd"
  },
  {
    "url": "terms/rules.html",
    "revision": "e867d3aad527ab431ec8a9089622920b"
  },
  {
    "url": "terms/testing.html",
    "revision": "995a322c97bbb977daa62999283e456e"
  },
  {
    "url": "TODO.html",
    "revision": "ef742df22b108809693311f8d78d33da"
  },
  {
    "url": "tools/chrome.html",
    "revision": "38601c0e58a3dfb5349129f3508aa953"
  },
  {
    "url": "tools/docker.html",
    "revision": "3487bd7bba73ca59c8caa666fe5afb29"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "4c36784b96ede3c7580e63fac1fa00c0"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "b0c0540cc0e911b95b486895a157d70b"
  },
  {
    "url": "tools/graphql.html",
    "revision": "e52731330583de51e60996ce99e37f50"
  },
  {
    "url": "tools/k8s/k8s.html",
    "revision": "99224195832ba0680dac4fdafd06f5a8"
  },
  {
    "url": "tools/kafka-vs-jetstream.html",
    "revision": "af52dd286364422c1e9e0cd1a1e4a521"
  },
  {
    "url": "tools/kafka.html",
    "revision": "ee6fa807394f2731d70f1acec18a6d7c"
  },
  {
    "url": "tools/kafka/overview/index.html",
    "revision": "2f34e625851e6f3cf756f2b866b7e483"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "aa61767c0963bd87965340afe2290355"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "ae08f6dabbbdd42d56e9fa5f4e175f97"
  },
  {
    "url": "tools/redis.html",
    "revision": "2feecf1d95e664401d7efc8e1d5f2ec5"
  },
  {
    "url": "tools/rfid.html",
    "revision": "5e279c5945930350aa33fe3164ef042c"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "62e59be0da64384389226996f1465cc9"
  },
  {
    "url": "tools/vscode.html",
    "revision": "2a84d58808507142842e7aa2302d01e3"
  },
  {
    "url": "tools/webpack.html",
    "revision": "c25b7c87cb17cfd415577f62d768d7af"
  },
  {
    "url": "tricks/compare.html",
    "revision": "0734b79f215330aa2af9b71ddacde64c"
  },
  {
    "url": "tricks/git.html",
    "revision": "352dbc800900ef11565179c218836983"
  },
  {
    "url": "tricks/linux.html",
    "revision": "7c19e6f028db6f20071f538a883e3ed0"
  },
  {
    "url": "tricks/mac.html",
    "revision": "7ccdb52046b84a81a530e9b7c8343048"
  },
  {
    "url": "tricks/misc.html",
    "revision": "5d4469f178805031080311be4f2d262c"
  },
  {
    "url": "tricks/setup.html",
    "revision": "e01060a1148e044e5cb099d67c797a54"
  },
  {
    "url": "vue/communication.html",
    "revision": "ecfa1fb170d7279a6753e3eba21c9c4d"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "9634762fdef572945dc9764b3bb5aa6e"
  },
  {
    "url": "vue/events.html",
    "revision": "b78a8ace8ad5a9e377aef9914be54d02"
  },
  {
    "url": "vue/references.html",
    "revision": "76f58486dfccfe7d24b2c475248a02b9"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "1d6b00036cddc902742898e2da1c93f8"
  },
  {
    "url": "vue/test.html",
    "revision": "ef6a745e2c6a4887a5c74460ec81555f"
  },
  {
    "url": "vue/tricks.html",
    "revision": "0e32a55ef01b0a84abddf06ad1b48073"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "8bb0b9f4fa87d341e539f9669a0b5766"
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
