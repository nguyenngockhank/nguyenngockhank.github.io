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
    "revision": "cb94ba444521ffe278a08d79f5ce5997"
  },
  {
    "url": "ai/AI-note.html",
    "revision": "bcea5d8228aaf5bc0cc438b00fa0d197"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "ad8f7f7a2beab43e156474f85d2bf2c7"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "38d7c2356ab1c1fead5b5851a397fa9c"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "97b0380193dcaabd347930db5eb2f673"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "02b19cd9f16a578453cca85f13ed5d23"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "d35135abda0cf17b6f922dff43354037"
  },
  {
    "url": "algorithm/loadbalancer.html",
    "revision": "e861b1b6de44859437496fed4370171f"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "7f1f7a9582a35facde6e125745ec1847"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "3eb693297f187e0be6a28a94fba09b0a"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "11dbcfff3d7049cf8f9c0d46e7991715"
  },
  {
    "url": "algorithm/string.html",
    "revision": "6ff4726ab199e4eaf557a0aec0e5f0de"
  },
  {
    "url": "algorithm/sum100.html",
    "revision": "fede60219eec850d1a235c28ce7cc16f"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "dd3ce90b06882e9d03fb98c20fc5a98c"
  },
  {
    "url": "algorithm/upload-large-file.html",
    "revision": "72cc938532f88b6f171a691cb0d54fc7"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "056285ad0968c1ed443afd30ea8ef8d5"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "bdb74f52410f5e229dba2b5192f76279"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "ed5464cc098d9702a43fde9723160c4f"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "0c60eef6b234b094c8380422f8203eba"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "1d49a09d969e4c8714becab5b41429f6"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "202b0599ec594518ae0f043bf94295d1"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "2a00bd3bd584093ac4d3fe15e41853dd"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "de78c3722d23af3794d0ac6f5f1d9488"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "8d19943f1da69895f2264fe4879fa8c3"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "1324b2e11fdb924dc804a013b0df62ea"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "0c72379f5d61d060cdeac34158e77fe6"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "8ec68b699ea64aaf0c69640891bd984c"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "deecb7d7fcf4bdeed5070d7c9265bc1a"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "66c0718d6c3f32558dde0bb60eb1365e"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "29c6922364e7415470983ad5a0c0841a"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "43ed8a395a3260245a838e84cc730f3b"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "80803c38cec274fffc4318d5d5e2c123"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "736ba44e31481af655d15dfb93d90832"
  },
  {
    "url": "api/index.html",
    "revision": "40bffeca0c380fa314bc6a81f5f3650b"
  },
  {
    "url": "api/rest-compare.html",
    "revision": "16f27d7c759fe11661b2363b8ec0eb15"
  },
  {
    "url": "architect/audit.html",
    "revision": "12a54ed2f9b790d6898e17ca9b0aa863"
  },
  {
    "url": "architect/authenication.html",
    "revision": "e83da65fe81283e30ca11bfb86523394"
  },
  {
    "url": "architect/authorization.html",
    "revision": "8d13da6c9bfbd175e008c26d3e74535f"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "695179c25c65e356e29ab984dc33ab2e"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "c6c855b0d35f25c57ef105809422d0a6"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "ae33675f98099bf4bdc09370e3379dba"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "77709858e2915bf8cbb22b529bc08776"
  },
  {
    "url": "architect/ebi.html",
    "revision": "956aa44b3512d54ea470b02aa6fe067e"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "89b84e927f805c369c31ea3cd2c398a5"
  },
  {
    "url": "architect/fault-tolerance.html",
    "revision": "d960bdea536c67df8d786b2fea66b515"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "3b957aa8030e60ca3ec3d7627d1675e3"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "7f47285d4acd63f150267f7532add366"
  },
  {
    "url": "architect/index.html",
    "revision": "9d2504e56b7837f37af641b3e1b9b906"
  },
  {
    "url": "architect/jwt-handling.html",
    "revision": "68ef6ac98fbda05d81280aa54f1e14b9"
  },
  {
    "url": "architect/messaging.html",
    "revision": "5cba465a52b2f634821850ad7e540cf6"
  },
  {
    "url": "architect/microservices.html",
    "revision": "eb92564fc45b2676ba2059d323321c2e"
  },
  {
    "url": "architect/mutex.html",
    "revision": "177ebd003d8ffaaa3ab43669cf155644"
  },
  {
    "url": "architect/notes.html",
    "revision": "1732b719372e3a5a1b4cced55b9b293f"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "22803d3d310b8c3217398c2cdf70480c"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "b8eb804d887305827f96228cebd7788b"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "4c4ae393e7a8616a130fe7d92613c473"
  },
  {
    "url": "architect/refs.html",
    "revision": "4314d8ea2f386b49be5e1e433f4ecdd9"
  },
  {
    "url": "architect/soa.html",
    "revision": "44a7a38c5f6303ffb174daf5cd5a22d4"
  },
  {
    "url": "architect/spa.html",
    "revision": "e5d7dd74db75f131ac0e2b9da771520f"
  },
  {
    "url": "architect/sync-solution.html",
    "revision": "c914ae355475faba77352f53e61ed1db"
  },
  {
    "url": "architect/system-design-cheatshet.html",
    "revision": "7ec917c94c40d78013574aaa598abfd6"
  },
  {
    "url": "architect/terms.html",
    "revision": "4c2a8968accbf7dcdba7c77fb32b2f69"
  },
  {
    "url": "architect/webservice.html",
    "revision": "b14da059dc4deb17f2bce6a890831bb6"
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
    "url": "assets/img/1980s-corba.b490df99.png",
    "revision": "b490df99a574ecc39787ebb68b4bb669"
  },
  {
    "url": "assets/img/1995s-message-queue.1be5adaf.jpg",
    "revision": "1be5adaf2cab8ba952122e603bfc4f75"
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
    "url": "assets/img/25854.8727e9fd.jpg",
    "revision": "8727e9fddbb936624415b56ef1350371"
  },
  {
    "url": "assets/img/25856.1ebc389c.jpg",
    "revision": "1ebc389ce8fb338dc60cf6ae858045e8"
  },
  {
    "url": "assets/img/2PC.85517da0.png",
    "revision": "85517da0f86c5aa7c50ab18ed60962d2"
  },
  {
    "url": "assets/img/399e3-1r-6nkbtqru_qsdg8o7pjjg.a63983b1.png",
    "revision": "a63983b188010534e4d9792c7da1ec94"
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
    "url": "assets/img/7b2e7-1zvstpn2lbfjdporafq4sew.ea5d175a.png",
    "revision": "ea5d175aa59514d8f7559ac4b8256331"
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
    "url": "assets/img/f1.4a99f0a7.png",
    "revision": "4a99f0a708a75007bbe5fd3845528758"
  },
  {
    "url": "assets/img/f1.60e24670.jpg",
    "revision": "60e246702961164c5df55307dfebe499"
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
    "url": "assets/img/f11.f91b1cc7.png",
    "revision": "f91b1cc709f14c0bec563d91706b19e9"
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
    "url": "assets/img/f12.cb6ef4bd.png",
    "revision": "cb6ef4bd74bdc0edfe193be50d07cbad"
  },
  {
    "url": "assets/img/f12.d7559d37.png",
    "revision": "d7559d375c96e0618c0daf7e41d2eb55"
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
    "url": "assets/img/f14.5cedca1c.png",
    "revision": "5cedca1c039661d63b1bdc9ae1a49d31"
  },
  {
    "url": "assets/img/f14.83202626.png",
    "revision": "83202626fadb0e11fd0bf3eef0418659"
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
    "url": "assets/img/f15.b05ac467.png",
    "revision": "b05ac4678482263c3d9ab7bdb4461f8b"
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
    "url": "assets/img/f17.0d64016c.png",
    "revision": "0d64016c0f446928a678a5d5d0585a7b"
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
    "url": "assets/img/f18.0e41b45f.png",
    "revision": "0e41b45f08b823b6c315511d70b07d74"
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
    "url": "assets/img/f18.fe6f3f3e.png",
    "revision": "fe6f3f3e38d2e3c4ce8643b0aaa37ea6"
  },
  {
    "url": "assets/img/f19.09047899.png",
    "revision": "0904789904acb7749f5cde5c002dc65c"
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
    "url": "assets/img/f19.a504e222.png",
    "revision": "a504e222b49741174fd82a524b31bdc0"
  },
  {
    "url": "assets/img/f19.a9ef0aa4.png",
    "revision": "a9ef0aa4faa51e9d5153860c50af7b1e"
  },
  {
    "url": "assets/img/f2.08dab1fd.png",
    "revision": "08dab1fdbbf777d1d2e77440d6b4a271"
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
    "url": "assets/img/f20.223e24df.png",
    "revision": "223e24df495ee418d2cee6372d3b1998"
  },
  {
    "url": "assets/img/f20.33995b31.png",
    "revision": "33995b31a144632d020efb6c3f920f27"
  },
  {
    "url": "assets/img/f20.8edb78bb.png",
    "revision": "8edb78bbdf45dd86cc1ec3caa679ba2d"
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
    "url": "assets/img/f22.bfd48974.png",
    "revision": "bfd489742e8e4dc631f648e05d4cf18d"
  },
  {
    "url": "assets/img/f22.e2f19b2d.png",
    "revision": "e2f19b2de3280d5a32b1ced1de2ab865"
  },
  {
    "url": "assets/img/f23.a6dd89be.png",
    "revision": "a6dd89be8e820b5c96331c606bf197fe"
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
    "url": "assets/img/f26.ba5a78ba.png",
    "revision": "ba5a78babad317e6d18967701628c9fd"
  },
  {
    "url": "assets/img/f27.8d017dc9.png",
    "revision": "8d017dc90cd19e35144d1f055ca3ba3d"
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
    "url": "assets/img/f3.2cc1bebe.png",
    "revision": "2cc1bebe9bb87d719824dd419c77b486"
  },
  {
    "url": "assets/img/f3.3bc52b4d.jpg",
    "revision": "3bc52b4d80e7e5478fd7ec2c528bd4e7"
  },
  {
    "url": "assets/img/f3.8c43f4dc.png",
    "revision": "8c43f4dc3ee66828b79e588a7c329fff"
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
    "url": "assets/img/f3.aa21c9bb.png",
    "revision": "aa21c9bba408840abd63e6eed5fc31d5"
  },
  {
    "url": "assets/img/f3.c10b7980.png",
    "revision": "c10b79805f9246ec09910abf03d7c738"
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
    "url": "assets/img/f3.f31d1c41.png",
    "revision": "f31d1c41f6ad96a23019e5933bd43bfb"
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
    "url": "assets/img/f4.52b619f6.png",
    "revision": "52b619f6bb28f0b0a99f520764ea508a"
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
    "url": "assets/img/f4.8793cff4.jpg",
    "revision": "8793cff47a0c66b575ea35052e11934f"
  },
  {
    "url": "assets/img/f4.9981a00c.png",
    "revision": "9981a00c1a9e0f8e30db9303571699b9"
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
    "url": "assets/img/f5.3d9146a0.png",
    "revision": "3d9146a099db7e60c3b04001fd6e187a"
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
    "url": "assets/img/f6.efa40459.png",
    "revision": "efa4045979ceb96966afd5d140930f7a"
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
    "url": "assets/img/f8.6d9475df.png",
    "revision": "6d9475df1105b902fc7015303b306eb2"
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
    "url": "assets/img/f8.847598a5.png",
    "revision": "847598a59a7663e937e309a4899e61ca"
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
    "url": "assets/img/f9.dbbb765b.png",
    "revision": "dbbb765b2a45834ece3031c5663bb379"
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
    "url": "assets/img/full-kubernetes-model-architecture.6c6c5d1e.png",
    "revision": "6c6c5d1ece1a51de0794a01f30dbcc27"
  },
  {
    "url": "assets/img/graph-1.504cee7a.png",
    "revision": "504cee7ac228cbea6f405774d5848a68"
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
    "url": "assets/img/stream.b5997343.png",
    "revision": "b599734352be76ead6ff27ed1eb3c126"
  },
  {
    "url": "assets/img/subnet-mask-calculator.e16ed44c.png",
    "revision": "e16ed44c0841d45ce17a684882ae48c5"
  },
  {
    "url": "assets/img/summary.b05dfedb.jpeg",
    "revision": "b05dfedb01560f779ae8114dc60aa7c1"
  },
  {
    "url": "assets/img/switch-compare.8011c60d.png",
    "revision": "8011c60d8f61e9ff128f0a8192a47d71"
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
    "url": "assets/img/websocket-load-balancing-issue.6df3eee9.png",
    "revision": "6df3eee9b6848a5987d30c6c5e17de79"
  },
  {
    "url": "assets/img/wp-metadatatable.c1b9b204.png",
    "revision": "c1b9b204a09aaad8283b901339daac87"
  },
  {
    "url": "assets/js/10.505d4212.js",
    "revision": "a9947ac1a1e00f457fb50f704abdd4f0"
  },
  {
    "url": "assets/js/100.ea5510c3.js",
    "revision": "a643119e283e1541ae74efccadcb41d7"
  },
  {
    "url": "assets/js/101.12687c6a.js",
    "revision": "89af173718803b7bb26a20bebe746f5e"
  },
  {
    "url": "assets/js/102.9a3e5213.js",
    "revision": "17ae4956d8c9b7f243a563f72289a2f9"
  },
  {
    "url": "assets/js/103.e8542477.js",
    "revision": "fbcebdbf0f87f883dd985320d7a207d6"
  },
  {
    "url": "assets/js/104.7df81a3c.js",
    "revision": "eafab2b1b98dd236ebd3b1d52f0a3844"
  },
  {
    "url": "assets/js/105.5fbec715.js",
    "revision": "4ade5bbf9f7b4f5aaa55009407594022"
  },
  {
    "url": "assets/js/106.a8762674.js",
    "revision": "2404f7a067334223f49b41542129413f"
  },
  {
    "url": "assets/js/107.9fde1575.js",
    "revision": "2972458030ece78a029cf36a2286fe38"
  },
  {
    "url": "assets/js/108.50324214.js",
    "revision": "d5d6d288cfe1dee60d3ce94b7d39a4e5"
  },
  {
    "url": "assets/js/109.ca8d3c84.js",
    "revision": "2a10db0f7d676a0f383277a98694d9dc"
  },
  {
    "url": "assets/js/11.78625459.js",
    "revision": "a69cebdff479a66068cd218b756f14c9"
  },
  {
    "url": "assets/js/110.0e4d9442.js",
    "revision": "af2271831e9635e12d5f7731fd4e0b43"
  },
  {
    "url": "assets/js/111.3e3d6e69.js",
    "revision": "d0471bebf905f139d3c72fc1fdccd0c2"
  },
  {
    "url": "assets/js/112.f1220bdb.js",
    "revision": "b90d76e562a84ec4b9a46e071ccca564"
  },
  {
    "url": "assets/js/113.39cc1a4d.js",
    "revision": "1b80d5608d0b546fe51c9e526dab83fb"
  },
  {
    "url": "assets/js/114.6055f036.js",
    "revision": "daa15b3baebec24e97f8d8289b2c6a3c"
  },
  {
    "url": "assets/js/115.c308d6c4.js",
    "revision": "5a4b25247f94a42318820b4e5deef2e2"
  },
  {
    "url": "assets/js/116.832b47c3.js",
    "revision": "6ee08e7f353986bd2b2e08227c20c8a2"
  },
  {
    "url": "assets/js/117.82deafef.js",
    "revision": "bb22d8902e96e8616e9c7eb59cabae94"
  },
  {
    "url": "assets/js/118.41488f70.js",
    "revision": "dd9583690f22050b222f7bf7d198c657"
  },
  {
    "url": "assets/js/119.234c7def.js",
    "revision": "2d3d7fae00268efd50bb5b7bea8fa587"
  },
  {
    "url": "assets/js/12.8ff24a73.js",
    "revision": "b243263b070a199b2475fd8afafe346b"
  },
  {
    "url": "assets/js/120.77715001.js",
    "revision": "ea333c77619e6d37b429e887c75e47f8"
  },
  {
    "url": "assets/js/121.d1698262.js",
    "revision": "99071cbb7be33cd529bcb60d31c221ce"
  },
  {
    "url": "assets/js/122.795ab05d.js",
    "revision": "37ab6aa1003f2806e7bced63690339f8"
  },
  {
    "url": "assets/js/123.8fdaea3f.js",
    "revision": "0acc9eba36d32425c01be06e816b08a8"
  },
  {
    "url": "assets/js/124.b63bdaf2.js",
    "revision": "62ed3bcf9780068e48923ec1f0dffa04"
  },
  {
    "url": "assets/js/125.f496bf59.js",
    "revision": "c113565e9d40a68db4637b7a3c217a66"
  },
  {
    "url": "assets/js/126.b4015727.js",
    "revision": "eec723d3f89445693ae219602e2134f3"
  },
  {
    "url": "assets/js/127.32ffce58.js",
    "revision": "2f974343388ce0e58825bf96b10c7910"
  },
  {
    "url": "assets/js/128.764825cc.js",
    "revision": "05accadf13c4d0d9ccbf10d9c85b09eb"
  },
  {
    "url": "assets/js/129.184e72b3.js",
    "revision": "dd0211caf96dd6fadc6404b1961d3a60"
  },
  {
    "url": "assets/js/13.5ac14346.js",
    "revision": "8673a5293da2f328a09c981bac4d4dc0"
  },
  {
    "url": "assets/js/130.a200b839.js",
    "revision": "c4bdb53d17e7297d4a7e49400cc17a8b"
  },
  {
    "url": "assets/js/131.46b839f3.js",
    "revision": "f257ed057aed3284416a8e2ddcf322ca"
  },
  {
    "url": "assets/js/132.02eed4ce.js",
    "revision": "f52d300ea4b8c0dec597b1e1c9d99505"
  },
  {
    "url": "assets/js/133.64711c8e.js",
    "revision": "1091a12abe50b489cba285c56406d546"
  },
  {
    "url": "assets/js/134.0395b10f.js",
    "revision": "01bced0963cc717590983a299dd11b13"
  },
  {
    "url": "assets/js/135.8c275a57.js",
    "revision": "5b544f3f57d36378e52cbf6ca00659d1"
  },
  {
    "url": "assets/js/136.dd4b8d01.js",
    "revision": "2e09234e9aac7e55bad2005975cfaae2"
  },
  {
    "url": "assets/js/137.f905a000.js",
    "revision": "ee8650d818eba9de4e423ef1fa4c0e04"
  },
  {
    "url": "assets/js/138.64db2bc4.js",
    "revision": "4588501ce18c6b562052a928ad31215e"
  },
  {
    "url": "assets/js/139.1373f428.js",
    "revision": "a7247097f22b733b96fe92cff648eab1"
  },
  {
    "url": "assets/js/14.e29b55ca.js",
    "revision": "371c89511486f9bbb00023ee2fc3fb12"
  },
  {
    "url": "assets/js/140.f6b90c65.js",
    "revision": "f5cd32c4064f301f605b9efc27ba91ae"
  },
  {
    "url": "assets/js/141.c228c317.js",
    "revision": "0882e2d6a5f2320af4ee488f0c177c99"
  },
  {
    "url": "assets/js/142.a7e41068.js",
    "revision": "fe601a315f5d0db98628828b0bc74dce"
  },
  {
    "url": "assets/js/143.3732d32e.js",
    "revision": "d2691ec03dfc1394328934e7d46f7b02"
  },
  {
    "url": "assets/js/144.284b153a.js",
    "revision": "9984647092f0e39e3e7efa5f99acfcfa"
  },
  {
    "url": "assets/js/145.c80059d2.js",
    "revision": "31ebb4df52dce5faf9389d92d5c2a4ae"
  },
  {
    "url": "assets/js/146.3d71bfeb.js",
    "revision": "f71dd22c32d532d143a44884a73ead99"
  },
  {
    "url": "assets/js/147.2aa089fa.js",
    "revision": "99265b5fe3b88e1799e98e9965610075"
  },
  {
    "url": "assets/js/148.b2092f64.js",
    "revision": "dbf598a3e9522d652fdfbfcbfe87e8fa"
  },
  {
    "url": "assets/js/149.2f917654.js",
    "revision": "7d186b984f6132e9552153d5d9822d4e"
  },
  {
    "url": "assets/js/15.7ac3afd9.js",
    "revision": "cc250d95e79dca360314ab4b39a4fbd6"
  },
  {
    "url": "assets/js/150.4bb08a3c.js",
    "revision": "cfa5b698705b0dd35ae4b32c4c42d97d"
  },
  {
    "url": "assets/js/151.d88da70a.js",
    "revision": "eacf495a65ac8442e7259379663b8e93"
  },
  {
    "url": "assets/js/152.634faa38.js",
    "revision": "a4540dffaa70e5353f92dcbdbb2ff8ea"
  },
  {
    "url": "assets/js/153.4917a23d.js",
    "revision": "49d713441e88fb758cbf1c1f32feb1ee"
  },
  {
    "url": "assets/js/154.ffa1329d.js",
    "revision": "c654b81b50255ddbafe7de5dfea0e76f"
  },
  {
    "url": "assets/js/155.630596bf.js",
    "revision": "7636bfe58046b31540106af223bd5be3"
  },
  {
    "url": "assets/js/156.b3c8c191.js",
    "revision": "5a0ed89f52c810eb9c3e2f90e774c21e"
  },
  {
    "url": "assets/js/157.32b97fbf.js",
    "revision": "bf60aca7df62960a0b91529985a13922"
  },
  {
    "url": "assets/js/158.ae55277a.js",
    "revision": "517a32e4f28c58dfd9e4ccab820a29a7"
  },
  {
    "url": "assets/js/159.45dbfeee.js",
    "revision": "35355c1faf483ce3e7c9f637c869527e"
  },
  {
    "url": "assets/js/16.5bbc50d5.js",
    "revision": "5dced3999ae1dc7ef852d2e091f5bdc0"
  },
  {
    "url": "assets/js/160.ee8da687.js",
    "revision": "304876bc674514994178e116643b482b"
  },
  {
    "url": "assets/js/161.5634cf1f.js",
    "revision": "cb59dcf7779f5a4eed32b279ed26fd54"
  },
  {
    "url": "assets/js/162.420b741c.js",
    "revision": "799febcffa266d5f533c22e0363b8c2e"
  },
  {
    "url": "assets/js/163.78d87add.js",
    "revision": "fef414717918ae9524e741ff5f4960ee"
  },
  {
    "url": "assets/js/164.1c027a35.js",
    "revision": "2f031dff591cd69da6b65f813271ab54"
  },
  {
    "url": "assets/js/165.b6fa53f4.js",
    "revision": "610fe7957b27dbe54fb5a6bbb3abf082"
  },
  {
    "url": "assets/js/166.e96da792.js",
    "revision": "b3b75faa20a77318e8b155cb49bb2ad2"
  },
  {
    "url": "assets/js/167.bdb0432b.js",
    "revision": "cee38155d26f3a662597cd151234af3f"
  },
  {
    "url": "assets/js/168.67318cea.js",
    "revision": "acf0a036cee399852d1d5543f7207aa2"
  },
  {
    "url": "assets/js/169.006c3f79.js",
    "revision": "66be2f836d190569833aedac98ec0501"
  },
  {
    "url": "assets/js/17.5233238b.js",
    "revision": "2c2a45eb831d8894c818c65fcbe54891"
  },
  {
    "url": "assets/js/170.570d8a5b.js",
    "revision": "a14ea0c1d9ee31908e01b65a11cbf073"
  },
  {
    "url": "assets/js/171.664a7035.js",
    "revision": "5d9111e72846023f4a84bebd25776bd4"
  },
  {
    "url": "assets/js/172.c36b1ae4.js",
    "revision": "6d90b2adc0654985bb38389d3dc779b3"
  },
  {
    "url": "assets/js/173.86505f97.js",
    "revision": "42bda895756c8396c9efec34d42057df"
  },
  {
    "url": "assets/js/174.eef1d0ee.js",
    "revision": "5d798d8be1433895490338e3eed3d95e"
  },
  {
    "url": "assets/js/175.cb008834.js",
    "revision": "bed9ae754b75e51f9694647b87918c43"
  },
  {
    "url": "assets/js/176.2d4df55f.js",
    "revision": "65bd0ff876dc434e5c0b568a05894e2d"
  },
  {
    "url": "assets/js/177.38907c55.js",
    "revision": "6c423fa16350628b392d26061fe69e97"
  },
  {
    "url": "assets/js/178.0d90042a.js",
    "revision": "6886d67911e27dd10a1dc4f91c30b665"
  },
  {
    "url": "assets/js/179.562cdfd5.js",
    "revision": "7402458a714c9144d0f1b7ac75831f02"
  },
  {
    "url": "assets/js/18.3455dda9.js",
    "revision": "2d0c5aca2b2b92f45b5b36877357990b"
  },
  {
    "url": "assets/js/180.c50dd685.js",
    "revision": "f195bed21bb18a5005b3912de88e0a4a"
  },
  {
    "url": "assets/js/181.10a99104.js",
    "revision": "cd9cb95e4f8d1aee019892d4f3d11d0e"
  },
  {
    "url": "assets/js/182.143baf51.js",
    "revision": "658725bec852f95d33e0a9b006350aee"
  },
  {
    "url": "assets/js/183.d0ecc1e4.js",
    "revision": "e77b332796ee2789ecdf63fef82aa530"
  },
  {
    "url": "assets/js/184.be9295c6.js",
    "revision": "8923e9474f978ff282eff67e8bd82d57"
  },
  {
    "url": "assets/js/185.e008d5ec.js",
    "revision": "7961c0f5819366a5f7614e06f6478bd2"
  },
  {
    "url": "assets/js/186.52193572.js",
    "revision": "f7a2cec79f57f124cc84a5d81a83388b"
  },
  {
    "url": "assets/js/187.b5f3d09c.js",
    "revision": "e3d3f0633cba6faabbcc26e7cc2f1804"
  },
  {
    "url": "assets/js/188.a4622dfb.js",
    "revision": "29c0eaf240f4ba6e1322c5ccf8cc988f"
  },
  {
    "url": "assets/js/189.e4154a92.js",
    "revision": "f6a2cad915dbf047b3e7b5981ed0bc47"
  },
  {
    "url": "assets/js/19.82156d2e.js",
    "revision": "d9078c06cae66c653ea56adaa727377e"
  },
  {
    "url": "assets/js/190.24e2b586.js",
    "revision": "f276935b735479152b00a7624b7e715b"
  },
  {
    "url": "assets/js/191.7ef753e3.js",
    "revision": "269f4bfe158f772e5ba6e9f1e81cb5b4"
  },
  {
    "url": "assets/js/192.84f7435b.js",
    "revision": "ef449cf9dea33891bcaf1e4baa9bef38"
  },
  {
    "url": "assets/js/193.9448c378.js",
    "revision": "45708d6cbdde8c8bf0139c6a4cff8920"
  },
  {
    "url": "assets/js/194.e5adc4ca.js",
    "revision": "872bcc6e1226474898f854939dcfb1e1"
  },
  {
    "url": "assets/js/195.f19dd8b1.js",
    "revision": "b90140103ca0a3af3a78bb2e185f6604"
  },
  {
    "url": "assets/js/196.b1789ed7.js",
    "revision": "c27b7f3145271f1c59512b6b16366e61"
  },
  {
    "url": "assets/js/197.d530939c.js",
    "revision": "19ff6c5dce9f801d96ac235c40d7a481"
  },
  {
    "url": "assets/js/198.be626cc9.js",
    "revision": "6d3c93a3802019cc46493d4a54395e1b"
  },
  {
    "url": "assets/js/199.d02b5c1b.js",
    "revision": "1ac61dde02b269efa054ce79b48a4e93"
  },
  {
    "url": "assets/js/2.9d90ad61.js",
    "revision": "4a1170d328e2c3d60f7ebd486253377b"
  },
  {
    "url": "assets/js/20.90b2e45b.js",
    "revision": "ac3016209b3a990990360ce2a787c5da"
  },
  {
    "url": "assets/js/200.bdb433e8.js",
    "revision": "25e06f20c85c3bc8353b6ee59d15a1be"
  },
  {
    "url": "assets/js/201.e3074a91.js",
    "revision": "efd7ac9f45941afa44c93aa47fad1463"
  },
  {
    "url": "assets/js/202.116611e9.js",
    "revision": "4a37b4f98338c3c5a4297f251d3888dc"
  },
  {
    "url": "assets/js/203.06d8f6ba.js",
    "revision": "90b3cc3f079ec5485b8c84dcaacfaa2c"
  },
  {
    "url": "assets/js/204.648b767b.js",
    "revision": "27c3b566df968615de3ab57066cccb3d"
  },
  {
    "url": "assets/js/205.0eb1f6cb.js",
    "revision": "b04d9cdd0fb22884466aa18267189e37"
  },
  {
    "url": "assets/js/206.3277e892.js",
    "revision": "f7bc7b807859ac799778926bff78b265"
  },
  {
    "url": "assets/js/207.93e89af8.js",
    "revision": "e8ab7d0ceb4921420b3bdb3365ce26af"
  },
  {
    "url": "assets/js/208.950abef2.js",
    "revision": "dfc52d49bef3a61009c9634d7e8a0774"
  },
  {
    "url": "assets/js/209.4fac7b1f.js",
    "revision": "4bf76a6d244abb248d511e4a5fca63df"
  },
  {
    "url": "assets/js/21.2ceff923.js",
    "revision": "0ed53889f0b13c87cc3e0bf682efdc1f"
  },
  {
    "url": "assets/js/210.beb01cce.js",
    "revision": "e295f74ee71be70ea2bde1d1b5004938"
  },
  {
    "url": "assets/js/211.1e838b42.js",
    "revision": "c448370a6610f2be11885a99a51517f8"
  },
  {
    "url": "assets/js/212.d317dddb.js",
    "revision": "8a03646736bb25f0ad8dbb0b1067092e"
  },
  {
    "url": "assets/js/213.ad3cfebd.js",
    "revision": "54b74e34a12da79166752832209e4d44"
  },
  {
    "url": "assets/js/214.893e56f3.js",
    "revision": "50c4e1b49172a1e27fdc0bef7142eae7"
  },
  {
    "url": "assets/js/215.54cba78a.js",
    "revision": "cd22caeca5bd4cc08d41b7d5e2d4bd69"
  },
  {
    "url": "assets/js/216.88219c17.js",
    "revision": "273ba2bc0a4afe03df42bdb74ae2f5e4"
  },
  {
    "url": "assets/js/217.7817fd12.js",
    "revision": "c246e9030618327a8b6b7966f507b290"
  },
  {
    "url": "assets/js/218.db6536ff.js",
    "revision": "b1f0beac98d72ecc388ff31838cfb180"
  },
  {
    "url": "assets/js/219.329e7a1e.js",
    "revision": "8a69d99f078be31e9bee3626a363baa2"
  },
  {
    "url": "assets/js/22.939f7748.js",
    "revision": "df684e39667e7a74005cb3f4fe6ffe52"
  },
  {
    "url": "assets/js/220.3ae76f13.js",
    "revision": "588f718963a404b0a18eed04a7e3603d"
  },
  {
    "url": "assets/js/221.35199744.js",
    "revision": "8a9814cdd070fe6e4acf3bd1200d5e6a"
  },
  {
    "url": "assets/js/222.db2b85af.js",
    "revision": "018b05697c51ed3a74eb3758f0c2ae2e"
  },
  {
    "url": "assets/js/223.51c99d9f.js",
    "revision": "fe07ac0d7b01764dee67db62bd20297c"
  },
  {
    "url": "assets/js/224.eac29026.js",
    "revision": "27e6150a77a36e07f6ec089fbc7adfac"
  },
  {
    "url": "assets/js/225.132dd722.js",
    "revision": "dacada16c068dae3590a036c61251786"
  },
  {
    "url": "assets/js/226.6c184a6e.js",
    "revision": "d158677dbfc3d88b751b1fe550cf39ce"
  },
  {
    "url": "assets/js/227.31d8573f.js",
    "revision": "dc9c569deca627152a3e34b21d4f9be6"
  },
  {
    "url": "assets/js/228.dce28ed1.js",
    "revision": "add3d638899550ff6d4f6a562494270d"
  },
  {
    "url": "assets/js/229.40651dad.js",
    "revision": "bd12d7e4ff49ab497dfcd3fbf09eb9ea"
  },
  {
    "url": "assets/js/23.b5e19942.js",
    "revision": "ad1c2ab900262c9ade33fcf701a8f8b9"
  },
  {
    "url": "assets/js/230.9a41e01d.js",
    "revision": "138cff77a9b78b321e28cc5450045d19"
  },
  {
    "url": "assets/js/231.c4b9fcd8.js",
    "revision": "f0d208de91371b77d404c0d8d3f8de19"
  },
  {
    "url": "assets/js/232.8cf1b2cb.js",
    "revision": "db1bb9a9d6962b87861eef241461e798"
  },
  {
    "url": "assets/js/233.eb1ce603.js",
    "revision": "eda837e4c1fe3cabfa58ecc5dde6f7e1"
  },
  {
    "url": "assets/js/234.20f63131.js",
    "revision": "19e91e039e7fdb135bfc6ec602f4fbc2"
  },
  {
    "url": "assets/js/235.4314cd82.js",
    "revision": "aecf3749ad16f002daa7402d9a026646"
  },
  {
    "url": "assets/js/236.44da2704.js",
    "revision": "198c0418bccddd7f35f24db4164697bf"
  },
  {
    "url": "assets/js/237.52365188.js",
    "revision": "d9c2619bce4f1292494007a72fec81e5"
  },
  {
    "url": "assets/js/238.7605be4b.js",
    "revision": "673fb5e7d56374c081d9bb8303995399"
  },
  {
    "url": "assets/js/239.1e3f26f9.js",
    "revision": "4517247a9d51b448523946a691daac8a"
  },
  {
    "url": "assets/js/24.9971113b.js",
    "revision": "64db13ab101933d7c9af5325249bd6b4"
  },
  {
    "url": "assets/js/240.635a4e83.js",
    "revision": "ca859fca9aca1575609c67d67e9e1770"
  },
  {
    "url": "assets/js/241.9b5f5fdf.js",
    "revision": "2186a8c93ce03335f4486c991d98c49c"
  },
  {
    "url": "assets/js/242.11faffa6.js",
    "revision": "b192f2d9f3c63dacf6f608475bdabbf2"
  },
  {
    "url": "assets/js/243.b2745fa8.js",
    "revision": "9f7ac3035b1f9af96b42efe0539be47a"
  },
  {
    "url": "assets/js/244.d45ab82a.js",
    "revision": "bc287ec5949637022869d0731c5b87f7"
  },
  {
    "url": "assets/js/245.c6de455e.js",
    "revision": "3f08125f1ecd014f18972f4badf467f8"
  },
  {
    "url": "assets/js/246.9a37ef7e.js",
    "revision": "22d3134b1c425593e3ba89ac90e19391"
  },
  {
    "url": "assets/js/247.245bcf25.js",
    "revision": "f6c27a3b1a6e59eca74d28173a754e97"
  },
  {
    "url": "assets/js/248.323df515.js",
    "revision": "37edd364445a8e715dd2417b49d077b8"
  },
  {
    "url": "assets/js/249.70d8a842.js",
    "revision": "901e18b63d6ead19aac20ccf6a8c95be"
  },
  {
    "url": "assets/js/25.e26f8b8e.js",
    "revision": "28556db7365b7b6c327941e070506786"
  },
  {
    "url": "assets/js/250.78294594.js",
    "revision": "326e44863d36104ed1cef2ae13c3daf5"
  },
  {
    "url": "assets/js/251.5a434eb0.js",
    "revision": "eea65fbd747ca660fdc25a877c89d54a"
  },
  {
    "url": "assets/js/252.e9258b22.js",
    "revision": "7e7a742e0bacd63a22d4b02ca7a834fc"
  },
  {
    "url": "assets/js/253.b4bd2deb.js",
    "revision": "a8144bbb37ee41078e1f3bfee9cc7ff9"
  },
  {
    "url": "assets/js/254.9991d783.js",
    "revision": "9cd04275dce7da1424dea94c90a82c6e"
  },
  {
    "url": "assets/js/255.cb7c7e83.js",
    "revision": "b0931a5f2561b3618a97c1f5017f4a17"
  },
  {
    "url": "assets/js/256.a254cc16.js",
    "revision": "c44e23c079a86d96ece50b88daa40151"
  },
  {
    "url": "assets/js/257.e4487b60.js",
    "revision": "aa04ce75f0d76510c23f49471cc8108d"
  },
  {
    "url": "assets/js/258.3bba4ebd.js",
    "revision": "38a81d82c667d5e2cb13aa997ae579b2"
  },
  {
    "url": "assets/js/259.b45ee19b.js",
    "revision": "911918179f4104039a7ff69a481eb992"
  },
  {
    "url": "assets/js/26.9d432f5b.js",
    "revision": "46c24ede5fadb4d9e93d9f5b502841d9"
  },
  {
    "url": "assets/js/260.3122fb6d.js",
    "revision": "0ed9f3850d017d69994ae52be092f92f"
  },
  {
    "url": "assets/js/261.13872a8b.js",
    "revision": "060cdece5e476e6b1c49328aeb15de2e"
  },
  {
    "url": "assets/js/262.5d9a24f5.js",
    "revision": "ea6031004d7870910dd16ebe85f90f23"
  },
  {
    "url": "assets/js/263.a8db109e.js",
    "revision": "b340948a2a7a9d53e504f456af44843a"
  },
  {
    "url": "assets/js/264.6b4ef8e4.js",
    "revision": "235bf2f69b815000f80a30b137ca8f5d"
  },
  {
    "url": "assets/js/265.f80780f6.js",
    "revision": "1fcccff3e195e0a8e508800aa91c0283"
  },
  {
    "url": "assets/js/266.040078f4.js",
    "revision": "5826ddc752a263f7e5c82c207520ca3c"
  },
  {
    "url": "assets/js/267.f837f2d4.js",
    "revision": "2f4dd99302b7f60c88e4d491bad9eb13"
  },
  {
    "url": "assets/js/268.8631d5a0.js",
    "revision": "de4e5aea8a80f81cd32c4a80860fb3b2"
  },
  {
    "url": "assets/js/269.160e6285.js",
    "revision": "b675974d720065523f133633edd9a1e5"
  },
  {
    "url": "assets/js/27.08f458ea.js",
    "revision": "7af4bb6b243bdda1bbd8b3dcd7bff592"
  },
  {
    "url": "assets/js/270.a3f204b8.js",
    "revision": "75612c6e4a236e9453b70176983aeb00"
  },
  {
    "url": "assets/js/271.4cae8d54.js",
    "revision": "6e947f82abec8661eb71707ae593d7de"
  },
  {
    "url": "assets/js/272.ca6b164e.js",
    "revision": "8210e36a752f136098523fc8b7c5c743"
  },
  {
    "url": "assets/js/273.f7cbd286.js",
    "revision": "4581cef25a59180c25f2bafd20a7ac3a"
  },
  {
    "url": "assets/js/274.0c384571.js",
    "revision": "0ca9613b03ded52909285620dfd38088"
  },
  {
    "url": "assets/js/275.a3c84495.js",
    "revision": "a1d318f68e5cb4867ed55c9935de0343"
  },
  {
    "url": "assets/js/276.5427923d.js",
    "revision": "6127f97e1badee6d969be4fa7effbbc8"
  },
  {
    "url": "assets/js/277.1ce349dd.js",
    "revision": "c5f193b86268b4bf79e41b21920c3bc8"
  },
  {
    "url": "assets/js/278.db33b814.js",
    "revision": "5e300267cda254a1ce09a31442de76c4"
  },
  {
    "url": "assets/js/279.ebf7b7e2.js",
    "revision": "49a5d7de43c912125233cbf93c7816fb"
  },
  {
    "url": "assets/js/28.f80d3b7d.js",
    "revision": "fc53c5df7e3bba8295722791998f8ceb"
  },
  {
    "url": "assets/js/280.a1f28997.js",
    "revision": "f1babdedc73cfb22b1c49a3f64355384"
  },
  {
    "url": "assets/js/281.54d4dc5c.js",
    "revision": "92ebaa346b814147f1b57a21b9242efe"
  },
  {
    "url": "assets/js/282.1bb89f3c.js",
    "revision": "a850d5d20ab0989421d0a06e5ff27c65"
  },
  {
    "url": "assets/js/283.6560e742.js",
    "revision": "b0c189cd88a0c5aa09aa92970bb9170b"
  },
  {
    "url": "assets/js/284.267d6140.js",
    "revision": "2f1f4d254ef00d86c55e278a7c3a6002"
  },
  {
    "url": "assets/js/285.e33ff702.js",
    "revision": "c4512d884719ae3c10d713ce7d3027d9"
  },
  {
    "url": "assets/js/286.8433007e.js",
    "revision": "e78bc7216a820c52e666832ccce4a6c9"
  },
  {
    "url": "assets/js/287.d0d1b637.js",
    "revision": "39564060580260b76fdbd3ecba7d75cc"
  },
  {
    "url": "assets/js/288.3a57e221.js",
    "revision": "35571fe60b71c0aa5e8f36dd83db4dcd"
  },
  {
    "url": "assets/js/289.ad60d94c.js",
    "revision": "9cac9c6990e00c80f0530af505d397d0"
  },
  {
    "url": "assets/js/29.9863f860.js",
    "revision": "86f7f71e3d8c543f5ce978ff81e5e0e3"
  },
  {
    "url": "assets/js/290.c6a4292a.js",
    "revision": "3661b04e4a18cfbf9eeebe7b22bf6a4b"
  },
  {
    "url": "assets/js/291.ac55be05.js",
    "revision": "074e9fc1fc76f93387ee28e29e14441d"
  },
  {
    "url": "assets/js/292.c53e77c7.js",
    "revision": "5933f1ddc147bdad8358f9dd4d4f0c0f"
  },
  {
    "url": "assets/js/293.846f6823.js",
    "revision": "7fa984879cb78ae67d3c03a30cb4ede8"
  },
  {
    "url": "assets/js/294.c0df0d02.js",
    "revision": "b3481fad76e1f1b641f2a3aeb3c277bd"
  },
  {
    "url": "assets/js/295.511a3ee0.js",
    "revision": "76afe0c2c608b9b3e8741087b5e6dc97"
  },
  {
    "url": "assets/js/296.0efc33cb.js",
    "revision": "59629f28fa778000bf2bfa4236c842cc"
  },
  {
    "url": "assets/js/297.84d8ce88.js",
    "revision": "eb87fee03698502976694c97502e0076"
  },
  {
    "url": "assets/js/298.1ed4e477.js",
    "revision": "4b30135570891ba3b6ddb825ea7cba3b"
  },
  {
    "url": "assets/js/299.f5992804.js",
    "revision": "be0a5be2837746b2da77f38839fd939c"
  },
  {
    "url": "assets/js/3.cac7fcbd.js",
    "revision": "527b3caf84a038f9c82ff7d6fc01a40b"
  },
  {
    "url": "assets/js/30.2447cc70.js",
    "revision": "c82eb6e84015ceaa3ba69d65e9aac175"
  },
  {
    "url": "assets/js/300.4c20cb55.js",
    "revision": "73b22e89cb4415daf76fb7f3637647be"
  },
  {
    "url": "assets/js/301.bc3e9044.js",
    "revision": "2be68da6d9d4b38d478d4c8623bc241e"
  },
  {
    "url": "assets/js/302.9a7247c6.js",
    "revision": "af707e2a61458a51e03a9e3f780d3639"
  },
  {
    "url": "assets/js/303.191cc703.js",
    "revision": "a9837e5229748fff95811b64e0bc2089"
  },
  {
    "url": "assets/js/304.5fb9eb41.js",
    "revision": "83b727ea75176f72af7bd4d27196cae2"
  },
  {
    "url": "assets/js/305.1f22804d.js",
    "revision": "c4a211659956dfdb7ffae062c7397b28"
  },
  {
    "url": "assets/js/306.1b8eda8e.js",
    "revision": "2139201f61d1ba4ca648a79f7e2b77b1"
  },
  {
    "url": "assets/js/307.aa835d0a.js",
    "revision": "d70d90c425f4908c680bbef7ea82cc42"
  },
  {
    "url": "assets/js/308.afe4c609.js",
    "revision": "799dca041022808a05857ed36393065b"
  },
  {
    "url": "assets/js/309.65fd7c5d.js",
    "revision": "e7489616983c14a4c8afa2a4ce296817"
  },
  {
    "url": "assets/js/31.a8d266fd.js",
    "revision": "6cba676f98bd596ee62573864f4e9da3"
  },
  {
    "url": "assets/js/310.261ee3ec.js",
    "revision": "53d1cc24f452080407c6a3e8c8b4d55f"
  },
  {
    "url": "assets/js/311.b6503f00.js",
    "revision": "60dfeefaa43ac86a4920e396afa34b6d"
  },
  {
    "url": "assets/js/312.89cb01a1.js",
    "revision": "4fbcfa0a5d3bc9bf18ef5b68c174116d"
  },
  {
    "url": "assets/js/313.da78c49c.js",
    "revision": "48bde9088bcc99741c8db2c20c745e02"
  },
  {
    "url": "assets/js/314.7b478698.js",
    "revision": "47036d398bba4a561e21fbb301d00bca"
  },
  {
    "url": "assets/js/315.d9753d16.js",
    "revision": "56dbaba09621da886cdc9807bd8ca8ec"
  },
  {
    "url": "assets/js/316.9ec28beb.js",
    "revision": "cb201d1131972c4322a16239ee9e6d11"
  },
  {
    "url": "assets/js/317.fe42713f.js",
    "revision": "1f12ce0c9901bec7a714a35eb0e0f0ff"
  },
  {
    "url": "assets/js/318.1c4662d2.js",
    "revision": "be75bac62158da2d7fb74b4d46a0912d"
  },
  {
    "url": "assets/js/319.ce917bd0.js",
    "revision": "67c12faa15f8c75883b734b6062dcb47"
  },
  {
    "url": "assets/js/32.dcf368ca.js",
    "revision": "bcf28c43a52d5f56d24e9de5aa5fc213"
  },
  {
    "url": "assets/js/320.9dc9b628.js",
    "revision": "07a9e18b925c823a8545d69e03c5fa7a"
  },
  {
    "url": "assets/js/321.215036d7.js",
    "revision": "9b89c39c7c0d33c34671a5da57f71f5b"
  },
  {
    "url": "assets/js/322.078729ff.js",
    "revision": "a48775516edebebabea36b90f466227b"
  },
  {
    "url": "assets/js/323.00fa941b.js",
    "revision": "de8f06092b63ba24fa363422f618d3ce"
  },
  {
    "url": "assets/js/324.b779e246.js",
    "revision": "e12073879b962b6ec84833da1dbf6938"
  },
  {
    "url": "assets/js/325.8a574a6f.js",
    "revision": "33b386ca9495866e3f654a877a2b8803"
  },
  {
    "url": "assets/js/326.251db67a.js",
    "revision": "6462890bec06d375632158e05137bc0e"
  },
  {
    "url": "assets/js/327.77a3fef0.js",
    "revision": "ecdb8f28c35c92cf1d2d21e7aca1bafe"
  },
  {
    "url": "assets/js/328.aa2d8500.js",
    "revision": "3da17f034c227aedd4be3066fd6b5a4d"
  },
  {
    "url": "assets/js/329.6d400c58.js",
    "revision": "4911a987c700643f3197556ebe02ccfd"
  },
  {
    "url": "assets/js/33.e29e202f.js",
    "revision": "fab955cac7377748ba3d88faf7d878e0"
  },
  {
    "url": "assets/js/330.e1de8c08.js",
    "revision": "64af2356e57edeca04e7e71ff44581b8"
  },
  {
    "url": "assets/js/331.7887ce69.js",
    "revision": "e6c7a49a276a4aa0094ef537b8266dc0"
  },
  {
    "url": "assets/js/332.f531736f.js",
    "revision": "5009f9e64dfab644bbb56a05ab5526ad"
  },
  {
    "url": "assets/js/333.8a2977ed.js",
    "revision": "a0d64250a88495470c12fbf2dc9a5f3a"
  },
  {
    "url": "assets/js/334.8d213c2e.js",
    "revision": "9dbcf07a5bd4329f99759be74359f4f0"
  },
  {
    "url": "assets/js/335.7897a2aa.js",
    "revision": "38a6c7ca8a3d5711214f6a6e11b0a7a9"
  },
  {
    "url": "assets/js/336.a7fadd5d.js",
    "revision": "83c311e14c265e68b41c214f0e2bafaa"
  },
  {
    "url": "assets/js/337.78988ef8.js",
    "revision": "6adc75f83394b0258d2027aa1c624be6"
  },
  {
    "url": "assets/js/338.4190c532.js",
    "revision": "d76abbc4b7611adc39a0fde1047c3019"
  },
  {
    "url": "assets/js/339.047074d5.js",
    "revision": "f05b485dde10c245bb2d3821820191c2"
  },
  {
    "url": "assets/js/34.236bafac.js",
    "revision": "2f13a8bf5b93b00853d7c5238c64df3d"
  },
  {
    "url": "assets/js/340.de282513.js",
    "revision": "812303b615e519624b1a314bb238349f"
  },
  {
    "url": "assets/js/341.650d9f1a.js",
    "revision": "f6d72ce21d2aac6082a331ac41aaf2a8"
  },
  {
    "url": "assets/js/342.f5056168.js",
    "revision": "f7fc87cbeafbfb66f6d8b069c52f4c78"
  },
  {
    "url": "assets/js/343.6f90e819.js",
    "revision": "61cb27d5455f87ba25ff0f481e335088"
  },
  {
    "url": "assets/js/344.031ac46f.js",
    "revision": "78aa0cdc058e521af74d21fe9bdad837"
  },
  {
    "url": "assets/js/345.4a5ff305.js",
    "revision": "0ac086059a179308a4b183f34f250877"
  },
  {
    "url": "assets/js/346.b0703500.js",
    "revision": "25d33a1d01b86096517aafc7c1c4ca1d"
  },
  {
    "url": "assets/js/347.e5abd27e.js",
    "revision": "d07f10b3f911f74dd8cf73298d8fb045"
  },
  {
    "url": "assets/js/348.a470bb92.js",
    "revision": "80dec42359418a388a10761604c7a501"
  },
  {
    "url": "assets/js/349.4b075930.js",
    "revision": "f799b3e35d3650b7fc10644ec40b1959"
  },
  {
    "url": "assets/js/35.6891e63b.js",
    "revision": "a995527454feea59483ff8bb2bd20273"
  },
  {
    "url": "assets/js/350.94ceae46.js",
    "revision": "899e30104e9c0ca993aed725b6fe90b0"
  },
  {
    "url": "assets/js/351.37e317a8.js",
    "revision": "d8da54fd9241c0996137866222a71595"
  },
  {
    "url": "assets/js/352.fbe2c32c.js",
    "revision": "a5deb7cccdad9254e6b6fff2d9d98d0a"
  },
  {
    "url": "assets/js/353.781925a4.js",
    "revision": "45249b8dd86d112908f49b98eb46b81d"
  },
  {
    "url": "assets/js/354.d1bc7e42.js",
    "revision": "122a07eb6a9026917aa3a51189f5d2bc"
  },
  {
    "url": "assets/js/355.00300a7d.js",
    "revision": "d65437dbe6b8daa167edcbef8d1487ae"
  },
  {
    "url": "assets/js/356.4765bb58.js",
    "revision": "44645a1492f46b6267188d60bd883a28"
  },
  {
    "url": "assets/js/357.48468683.js",
    "revision": "85b033c78d53c21733f0bcacbf2a66e1"
  },
  {
    "url": "assets/js/358.a1a10f70.js",
    "revision": "0df35f38baf0dc84ef35a3cd26bc9287"
  },
  {
    "url": "assets/js/359.b9592645.js",
    "revision": "3dfba58cabbb61013a66ebca50aeb489"
  },
  {
    "url": "assets/js/36.0bb1fda3.js",
    "revision": "3aab43a28d576a73f49c328e64288b81"
  },
  {
    "url": "assets/js/360.a76822f3.js",
    "revision": "ec60bb4d65163806200f566bea27ba6e"
  },
  {
    "url": "assets/js/361.86ac95ce.js",
    "revision": "4d4a0f86534ad35e52366647678f4069"
  },
  {
    "url": "assets/js/362.0e8000c2.js",
    "revision": "32d0f449adb15371864ec05d8865cb5b"
  },
  {
    "url": "assets/js/363.62cbed0b.js",
    "revision": "c662273dfd48d92f1de3c4f58db26f05"
  },
  {
    "url": "assets/js/364.a913d364.js",
    "revision": "41f99dd23c1810596d1d192230107e6d"
  },
  {
    "url": "assets/js/365.d06e6056.js",
    "revision": "a3181e019a7283295fb5d287ae1b0c09"
  },
  {
    "url": "assets/js/366.979990e9.js",
    "revision": "4fe45d2b4c9fd38f269bfdada9abf156"
  },
  {
    "url": "assets/js/367.7dca8f0e.js",
    "revision": "a78c2753d71861d8527c9991c18ba567"
  },
  {
    "url": "assets/js/368.1ca7635e.js",
    "revision": "91c2238a260c0db4a40e09c4e0976f1d"
  },
  {
    "url": "assets/js/369.d5bc2087.js",
    "revision": "b25ba9cbd26d53ed37eb8b77ff6f0dfa"
  },
  {
    "url": "assets/js/37.4f818c08.js",
    "revision": "0b2b90f93b5b2dbb82c7b6d5f23a0778"
  },
  {
    "url": "assets/js/370.dfbce0d4.js",
    "revision": "2f928ba57b0a1deff156dd84bc63504b"
  },
  {
    "url": "assets/js/371.44bf5d0b.js",
    "revision": "575df79e515711f50f72369a64518a13"
  },
  {
    "url": "assets/js/372.3347030b.js",
    "revision": "484c5af1037490a9f20138a9d17ea6b1"
  },
  {
    "url": "assets/js/373.dc509254.js",
    "revision": "64d748589847caf4d692c1f796a51507"
  },
  {
    "url": "assets/js/374.7d47efba.js",
    "revision": "89374524a3827d490ad6c2f3bc9ede00"
  },
  {
    "url": "assets/js/375.eaa4917b.js",
    "revision": "581f91d3913c800d154732f750255da8"
  },
  {
    "url": "assets/js/376.d47766e0.js",
    "revision": "c35c0ab4590894370e190f19abcfc295"
  },
  {
    "url": "assets/js/377.624ad244.js",
    "revision": "383eb9f37d6574c2d665b69d3568a4fe"
  },
  {
    "url": "assets/js/378.983ea00b.js",
    "revision": "e293d5bba64e3b1986b7488e82458962"
  },
  {
    "url": "assets/js/379.6871a4d3.js",
    "revision": "d6767a4dcbe0790e001c6a7e2b3655de"
  },
  {
    "url": "assets/js/38.a8eb3ed0.js",
    "revision": "d48dc40e1082fb3d7437d9600766b031"
  },
  {
    "url": "assets/js/380.dc536cd0.js",
    "revision": "188315b69b4d7db971f9c7df3ba83ed4"
  },
  {
    "url": "assets/js/381.b3ab3544.js",
    "revision": "90a9b6f558d4646055599662c550d354"
  },
  {
    "url": "assets/js/382.4dd9b93f.js",
    "revision": "065c724d048aaa91401f4e1e0898d31c"
  },
  {
    "url": "assets/js/383.567c72d1.js",
    "revision": "60a9853c4995df078a5a18c8901be763"
  },
  {
    "url": "assets/js/384.1655cb23.js",
    "revision": "7eab81314cb58eaa2311ce3d29c80350"
  },
  {
    "url": "assets/js/385.baae1c50.js",
    "revision": "54f1c93618073f53d1899fb7c0da2f7f"
  },
  {
    "url": "assets/js/386.56d81f99.js",
    "revision": "6f0f419225151c8413b5073655470256"
  },
  {
    "url": "assets/js/387.69934ecf.js",
    "revision": "02e3a5dd0000e93805496fdba78a2d7e"
  },
  {
    "url": "assets/js/388.8390ac67.js",
    "revision": "efd712aad64bf7edaf605d795401d867"
  },
  {
    "url": "assets/js/389.5b15f910.js",
    "revision": "e149a8c9607e76c010af928a7941a68b"
  },
  {
    "url": "assets/js/39.a03dd15d.js",
    "revision": "79be454869e709ff0fcaebcf67043239"
  },
  {
    "url": "assets/js/390.a803dfe5.js",
    "revision": "65f6d108d09508eacad17b1c4ab8d825"
  },
  {
    "url": "assets/js/391.5945b2ba.js",
    "revision": "2298f15c764ea9323ba979faca4f7335"
  },
  {
    "url": "assets/js/392.26e0313e.js",
    "revision": "158ea329625c88832f96f4414d915d03"
  },
  {
    "url": "assets/js/393.871df169.js",
    "revision": "4decec8e1f3cd88d7e0902f6ab35f128"
  },
  {
    "url": "assets/js/394.151812ab.js",
    "revision": "54ec183a9a197c01a716a072b3b328c8"
  },
  {
    "url": "assets/js/395.cd15b3c9.js",
    "revision": "35619fac51e0c761b4b8fb9f7e7342f5"
  },
  {
    "url": "assets/js/396.20a298b3.js",
    "revision": "7b1e899f37e1a0df4e673668687d6561"
  },
  {
    "url": "assets/js/397.1110b4be.js",
    "revision": "c2bb88bea7e0ba8a40c3b203ff30a2eb"
  },
  {
    "url": "assets/js/398.c4e2a955.js",
    "revision": "56871ce8dee288eee25bf995d69111dc"
  },
  {
    "url": "assets/js/399.11993ad1.js",
    "revision": "679322aa7b6da15334c01d6a2de18bfc"
  },
  {
    "url": "assets/js/4.0c7b3a1d.js",
    "revision": "a188fa46f49e5b40e8288a7b6cfae296"
  },
  {
    "url": "assets/js/40.91eb0c34.js",
    "revision": "94f1d3c00cd91f6303b7b33679482fd5"
  },
  {
    "url": "assets/js/400.7d286f8c.js",
    "revision": "23ed51adc16f7a7da4c334c68e516e73"
  },
  {
    "url": "assets/js/401.9443bf19.js",
    "revision": "254c53c49df7c4b8621e431783c949b6"
  },
  {
    "url": "assets/js/402.ff3f1a7f.js",
    "revision": "4da87c16f464d978129e981b63bfd4b8"
  },
  {
    "url": "assets/js/403.7e41b9e8.js",
    "revision": "ea801fe089e2e125f83b2e3537561cff"
  },
  {
    "url": "assets/js/404.6227caef.js",
    "revision": "c2d73f66eac475ab8d2d58e08d06fe27"
  },
  {
    "url": "assets/js/405.27e6aaf8.js",
    "revision": "14cadae8a1fc6103c961c0842758a6a7"
  },
  {
    "url": "assets/js/406.6c6eb56f.js",
    "revision": "890e5ba5201e53a04a3be9ea3d102420"
  },
  {
    "url": "assets/js/407.158750a5.js",
    "revision": "244b9c2d4a7bbd7a16d1a7bd21627dc5"
  },
  {
    "url": "assets/js/408.1258a33b.js",
    "revision": "a7c6f31b16b111d1ff546f449de97c79"
  },
  {
    "url": "assets/js/409.be8117b6.js",
    "revision": "76781d987a29c395e3ff2ffc320a3202"
  },
  {
    "url": "assets/js/41.add6cc7c.js",
    "revision": "5b1fea9661978ef2c9e43b73bd9c1fca"
  },
  {
    "url": "assets/js/410.e8c8f9f8.js",
    "revision": "931ba56611e8346d67c18cfd031e2ae9"
  },
  {
    "url": "assets/js/411.5ff59ebb.js",
    "revision": "8ab23440a03c69d4ce72d3dc5de7e093"
  },
  {
    "url": "assets/js/412.5d53482d.js",
    "revision": "50c16a9deeff3df73b9bb9e34d86f667"
  },
  {
    "url": "assets/js/413.c1cbc650.js",
    "revision": "c6b8db4caa8b19746b98b6246a8e3379"
  },
  {
    "url": "assets/js/414.474cf288.js",
    "revision": "45814f414fba36f7abb8b36422c8f436"
  },
  {
    "url": "assets/js/415.fa25cd66.js",
    "revision": "21288b57b78e71e4127c55e4f9e2254c"
  },
  {
    "url": "assets/js/416.4f3b6737.js",
    "revision": "e49eeac7a6d3dba4f43717f660819e66"
  },
  {
    "url": "assets/js/417.690b7006.js",
    "revision": "5580db10dccf3b4a0bf42b0bcb94cd53"
  },
  {
    "url": "assets/js/418.43e85058.js",
    "revision": "c32410cc06af6c42026efcaceb032101"
  },
  {
    "url": "assets/js/419.b989f3bb.js",
    "revision": "76a439e787c1e84a297256700cd2a5c6"
  },
  {
    "url": "assets/js/42.565b8a5b.js",
    "revision": "1cdb1776117763524658f26a28780a26"
  },
  {
    "url": "assets/js/420.87de9e36.js",
    "revision": "65235f25ad2add5b38034df11e62da54"
  },
  {
    "url": "assets/js/421.57b8c836.js",
    "revision": "c35fc9e5e38a253201eaf659aeb22f61"
  },
  {
    "url": "assets/js/422.21fc685e.js",
    "revision": "fa5e83ad1e83f46b3805c74b4ea027a3"
  },
  {
    "url": "assets/js/423.4670a4e0.js",
    "revision": "bd5f3137ce766ca0d4e78527360dd6f5"
  },
  {
    "url": "assets/js/424.19b4675b.js",
    "revision": "395797f4a075370c310c1275b1793cf8"
  },
  {
    "url": "assets/js/425.3a2969ca.js",
    "revision": "4aeb75a5ca7e55fc87a4de1975b68c1e"
  },
  {
    "url": "assets/js/426.1a452c50.js",
    "revision": "af46d0a9f307b9835beff48282efacc6"
  },
  {
    "url": "assets/js/427.9ae22d50.js",
    "revision": "8b9b74a670236252a757493501e47313"
  },
  {
    "url": "assets/js/428.e953ffba.js",
    "revision": "f6e6132d9202935d4cd6c2335d387138"
  },
  {
    "url": "assets/js/429.dbec33df.js",
    "revision": "7c172ccf15670159c10c2ee5ab79f999"
  },
  {
    "url": "assets/js/43.4ae0b311.js",
    "revision": "49d81551874605b0a829279de7073673"
  },
  {
    "url": "assets/js/430.4b42fe95.js",
    "revision": "75d724501331583a22c98d2f68755476"
  },
  {
    "url": "assets/js/431.ad8a381d.js",
    "revision": "c1159b09f3e7855b909522a0769d23ab"
  },
  {
    "url": "assets/js/432.ed912a7b.js",
    "revision": "834848da198c9c4dfbc8c83b9262567c"
  },
  {
    "url": "assets/js/433.187a60b6.js",
    "revision": "86a85007f04bce602bf6ab2bbb15d625"
  },
  {
    "url": "assets/js/434.39340aa4.js",
    "revision": "5ea404c060c5cd2ce37799f57f76b080"
  },
  {
    "url": "assets/js/435.35660c27.js",
    "revision": "ec671a5e28fc32111a96b5ae1f4a0ebd"
  },
  {
    "url": "assets/js/436.83a5368a.js",
    "revision": "6d59193ec9a4f034e10c84cadf4e5067"
  },
  {
    "url": "assets/js/437.5dc6698e.js",
    "revision": "a547189aef719a9dbfdba9d1bb9492b9"
  },
  {
    "url": "assets/js/438.781e5343.js",
    "revision": "5e0b390e6f65cd5fd0ad014b1d9ef3a3"
  },
  {
    "url": "assets/js/439.37269f59.js",
    "revision": "5d43ad517a4e90043ae757f985230fb6"
  },
  {
    "url": "assets/js/44.b2413436.js",
    "revision": "c5e01dacf62e29ebe1976640b81fa1fb"
  },
  {
    "url": "assets/js/440.7e52299e.js",
    "revision": "2e4c61b91d578bda76a65696093a1fe8"
  },
  {
    "url": "assets/js/441.57f363c8.js",
    "revision": "f11d0ec66f2c20745bc9bb32b4c1471c"
  },
  {
    "url": "assets/js/442.7b7064c4.js",
    "revision": "1f9138c6fafa10fd5644708a59f77483"
  },
  {
    "url": "assets/js/443.c6a7d98f.js",
    "revision": "74f83d22b8f3f09c282e1f916a56e91d"
  },
  {
    "url": "assets/js/444.4bc313bc.js",
    "revision": "a25d78497a70d87860f99c312c3866d6"
  },
  {
    "url": "assets/js/445.fa8bbfcf.js",
    "revision": "59454da30b9a8f25bf0b58c765894877"
  },
  {
    "url": "assets/js/446.2d61e498.js",
    "revision": "fd02fadf0038a4cc87be0e20b500a739"
  },
  {
    "url": "assets/js/447.202ef377.js",
    "revision": "7e59550c65024b62dbf7200454fbffd4"
  },
  {
    "url": "assets/js/448.00f18a20.js",
    "revision": "3c1c07533f888da158b34d91bc63bf9a"
  },
  {
    "url": "assets/js/449.4f96d962.js",
    "revision": "fb1d7c826be0d891307692df3b6e006a"
  },
  {
    "url": "assets/js/45.1ffcdae5.js",
    "revision": "3b16c86185641cd1152986a4023c1286"
  },
  {
    "url": "assets/js/450.9bfa580f.js",
    "revision": "6ec61f1a21a9c5d20089c531961f28d1"
  },
  {
    "url": "assets/js/451.58342385.js",
    "revision": "dbe0385e9c46bc91743633a6df7956e2"
  },
  {
    "url": "assets/js/452.0077fddd.js",
    "revision": "29649114fab2d56f59c3437764146541"
  },
  {
    "url": "assets/js/453.54fee1bd.js",
    "revision": "2d06d00006c5dec7472506481cc61a49"
  },
  {
    "url": "assets/js/454.3ccb422a.js",
    "revision": "b224b07a11e5468a6ca99610a318d1c7"
  },
  {
    "url": "assets/js/455.93ee5de1.js",
    "revision": "a377f6314a364237b362022a9f8bb835"
  },
  {
    "url": "assets/js/456.a1921e9e.js",
    "revision": "1458367efce504396de79a665dd48eb1"
  },
  {
    "url": "assets/js/457.19eb5c70.js",
    "revision": "b63d4bc50e68c1d86b4b70e26456fb37"
  },
  {
    "url": "assets/js/458.aff76769.js",
    "revision": "6c7ac55076e0e79ee3b140534b80f704"
  },
  {
    "url": "assets/js/459.38b59229.js",
    "revision": "2dd830b389862f34c618514ef7072524"
  },
  {
    "url": "assets/js/46.a543c402.js",
    "revision": "071d45cf914493909cbb6824a7f96101"
  },
  {
    "url": "assets/js/460.0e28c5c8.js",
    "revision": "6c778512581d3a02ca30b6f929a9bd8d"
  },
  {
    "url": "assets/js/461.cecfa382.js",
    "revision": "7ffa3a2daefa0df2491ce1bb4b1a5a39"
  },
  {
    "url": "assets/js/462.927bfa85.js",
    "revision": "5ccaf7ac13970d6174e1ad1ec8a72d8c"
  },
  {
    "url": "assets/js/463.e6ffdfa3.js",
    "revision": "a5a8b15c5765a556f43d80e4ff4c0229"
  },
  {
    "url": "assets/js/464.c9533091.js",
    "revision": "6f764bfe3c11ba4c980959d0fe0edbe0"
  },
  {
    "url": "assets/js/465.624fe5bd.js",
    "revision": "7a68d03c1408ddc0d8a128859db727f5"
  },
  {
    "url": "assets/js/466.e061d64f.js",
    "revision": "49cc8ee7852332f7e80e85d148479f87"
  },
  {
    "url": "assets/js/467.18c417ab.js",
    "revision": "0db477cbfbdf07a43eb39fea9a61e466"
  },
  {
    "url": "assets/js/468.a134fb6c.js",
    "revision": "e8ed6629ee9f2c9873cc1169bfe1a1a2"
  },
  {
    "url": "assets/js/469.9aba14c4.js",
    "revision": "baed0c05854503baf0cc7c7e35de2730"
  },
  {
    "url": "assets/js/47.60f18771.js",
    "revision": "45a1bfc916e254ec29ce0176fb4daeba"
  },
  {
    "url": "assets/js/470.d944a68b.js",
    "revision": "f343638ebf04d2d5d262d23f31b94067"
  },
  {
    "url": "assets/js/471.f8a806b9.js",
    "revision": "0dadfcea4868d7d6c41da3d9447c265f"
  },
  {
    "url": "assets/js/472.aa6750b0.js",
    "revision": "7a6eea2eb6dd1c76ae536e9561d6cbdd"
  },
  {
    "url": "assets/js/473.73ace4a2.js",
    "revision": "8424d1ca28bfe7ac1ff4959524090a7e"
  },
  {
    "url": "assets/js/474.554bf85d.js",
    "revision": "ccf2ec0d7f688a7eafbe461ef99721ae"
  },
  {
    "url": "assets/js/475.4c03cf8c.js",
    "revision": "4d51d29bcefdadc4152c7a2b128118fc"
  },
  {
    "url": "assets/js/476.3526ff86.js",
    "revision": "cf3b00fe7ffd16a4b600c4d5ef512777"
  },
  {
    "url": "assets/js/477.bece843d.js",
    "revision": "f593142dc34dbfb520facf5f70c137f7"
  },
  {
    "url": "assets/js/478.96f2cb02.js",
    "revision": "5aa2705b52d0de3f90862a13a55234a5"
  },
  {
    "url": "assets/js/479.dba7b0c5.js",
    "revision": "4e26a9492dce5c97bd2996e33947177e"
  },
  {
    "url": "assets/js/48.19ac2a6c.js",
    "revision": "df3caff91ea4945915837e402116b2e5"
  },
  {
    "url": "assets/js/480.5864368a.js",
    "revision": "ad3f800e0a6d8838814751f4103fbd39"
  },
  {
    "url": "assets/js/481.b12cd936.js",
    "revision": "7a7481e018fdffdc5dd3c351b14a1afc"
  },
  {
    "url": "assets/js/482.0d2a72d4.js",
    "revision": "85b43b80a11d0ab76a6fe5ae251bdfa8"
  },
  {
    "url": "assets/js/483.f891e536.js",
    "revision": "e94654ee7aa685cb29c81ac5fe0c6c15"
  },
  {
    "url": "assets/js/484.5cf7d308.js",
    "revision": "35f2786460fc1a6f2e81c891726c9b2b"
  },
  {
    "url": "assets/js/485.d9f4eea3.js",
    "revision": "f141a565098f33533ac500eee4431570"
  },
  {
    "url": "assets/js/486.f2e3b83d.js",
    "revision": "7ec7019ab26f910ffe2a8a4f81573a2d"
  },
  {
    "url": "assets/js/487.55f02bb3.js",
    "revision": "48774e1abb00eff57229fea39b576e03"
  },
  {
    "url": "assets/js/488.1ed7182f.js",
    "revision": "8a338a7b8b4f4f7cc4b1c8c6bfbc2764"
  },
  {
    "url": "assets/js/49.cf58148d.js",
    "revision": "1eb4902d26376b1f0372f2032e5371c8"
  },
  {
    "url": "assets/js/5.8ca36883.js",
    "revision": "e6d97ab0f6a973301342b76141016187"
  },
  {
    "url": "assets/js/50.eab50073.js",
    "revision": "8cf33028ee5a2442795f634edb8de04d"
  },
  {
    "url": "assets/js/51.596ed29c.js",
    "revision": "d08dabfbff4316bf0b4c6e930dcde349"
  },
  {
    "url": "assets/js/52.3bfb8476.js",
    "revision": "cc001cbce3dee01f113794ebcca49e67"
  },
  {
    "url": "assets/js/53.039474a9.js",
    "revision": "69e66ab3033cdced18da4b31006c66af"
  },
  {
    "url": "assets/js/54.52b6aa7f.js",
    "revision": "a4765bece92a67d0a1841987ba0e2b95"
  },
  {
    "url": "assets/js/55.6eb7adee.js",
    "revision": "e42533b7b10efef9a199f47f3518f55b"
  },
  {
    "url": "assets/js/56.ed3713aa.js",
    "revision": "b2088ff015b23ee899182238285d3c1b"
  },
  {
    "url": "assets/js/57.42b0aa5a.js",
    "revision": "d25f0ba2ce1ecf231e1e85424f66ac7d"
  },
  {
    "url": "assets/js/58.b51a666d.js",
    "revision": "d130d40f4c0c3532361994835f6f1559"
  },
  {
    "url": "assets/js/59.8498b3a2.js",
    "revision": "3f77cbe182057cac643446957ef10b71"
  },
  {
    "url": "assets/js/6.297226b3.js",
    "revision": "2a14c6daf7644927d3bd1b500f25c6d0"
  },
  {
    "url": "assets/js/60.0dc76e20.js",
    "revision": "deebbd45cc486c9a07103ad9e70e0ada"
  },
  {
    "url": "assets/js/61.46644388.js",
    "revision": "6fe5bcf981e43d14591657d2c3202d87"
  },
  {
    "url": "assets/js/62.0cd41845.js",
    "revision": "8cfdf9449fafdef987fe4f233e815160"
  },
  {
    "url": "assets/js/63.e530df29.js",
    "revision": "5c3f1ffbc5493a09ab6188c42de12335"
  },
  {
    "url": "assets/js/64.406af600.js",
    "revision": "34bb124cd34ba4e4292765643db257d4"
  },
  {
    "url": "assets/js/65.422c6719.js",
    "revision": "cc77a43b9062055ce257fc8e11a6492d"
  },
  {
    "url": "assets/js/66.373fbdad.js",
    "revision": "eeedb5cb8a0126e8585402afc1020fb8"
  },
  {
    "url": "assets/js/67.14b7176a.js",
    "revision": "3d213ebde2720a7d1bf338f97b77e5ed"
  },
  {
    "url": "assets/js/68.6e84706d.js",
    "revision": "72b1ee445bbf0edc3e0a1c532f8dfbc8"
  },
  {
    "url": "assets/js/69.56b15269.js",
    "revision": "a586eee305f19db03b9c01d7f4acaa76"
  },
  {
    "url": "assets/js/7.36812790.js",
    "revision": "9f0c8607284c524c61dd3d22ee2c4f21"
  },
  {
    "url": "assets/js/70.0353e73b.js",
    "revision": "bd0eff2ed77a567a7d767d3a0b84c826"
  },
  {
    "url": "assets/js/71.50497ffc.js",
    "revision": "80986f112155552d51edbd5f238a8a07"
  },
  {
    "url": "assets/js/72.fd140fdc.js",
    "revision": "ba5dd1b0491855676a648ce82b61387d"
  },
  {
    "url": "assets/js/73.4c178b24.js",
    "revision": "633882de77410a453b176a9d2776fa8a"
  },
  {
    "url": "assets/js/74.092be53f.js",
    "revision": "f9642614ba197daced9e77314cebe5dd"
  },
  {
    "url": "assets/js/75.9b8f2338.js",
    "revision": "dd3ae9e4d4b064c7d2a6eb032c47f6ef"
  },
  {
    "url": "assets/js/76.49c05a06.js",
    "revision": "6b950c160e0f837ae14c340e8a8457e2"
  },
  {
    "url": "assets/js/77.b012d80c.js",
    "revision": "d47e24c04fabdcf2c8b42a16099f6cbc"
  },
  {
    "url": "assets/js/78.808c5bcf.js",
    "revision": "b68e4a39867a3621840c93c5424ba7b6"
  },
  {
    "url": "assets/js/79.32838d99.js",
    "revision": "b0ff37db669febaa69a6bde1c253e02b"
  },
  {
    "url": "assets/js/8.7c7e772f.js",
    "revision": "ccfe77dd26b019d644c04336f595e4ee"
  },
  {
    "url": "assets/js/80.e0ce79c0.js",
    "revision": "9b6e719e5ef5edb423cf7943ab91e9a5"
  },
  {
    "url": "assets/js/81.34f4a035.js",
    "revision": "393a9b4bb03e59a94d5b42220b22a1aa"
  },
  {
    "url": "assets/js/82.0722b953.js",
    "revision": "62bd032730afb5b74f99e13a6425b9c5"
  },
  {
    "url": "assets/js/83.82fb8591.js",
    "revision": "5d2e0c7a82051891cf259d6d71c4f115"
  },
  {
    "url": "assets/js/84.de07126e.js",
    "revision": "0866bf915e7bf7af900ab842d2d3b80a"
  },
  {
    "url": "assets/js/85.40ce7421.js",
    "revision": "5be70b8dddc3a859cdb5cd3f588062b8"
  },
  {
    "url": "assets/js/86.fbedd1db.js",
    "revision": "121b31c7df1a28e54ed54f5cea67c4da"
  },
  {
    "url": "assets/js/87.9561eee9.js",
    "revision": "2f7788ba3c0a689d52d7d969327900a8"
  },
  {
    "url": "assets/js/88.a8883d31.js",
    "revision": "ff41fcd34362bdfc4354ed019dd1cdec"
  },
  {
    "url": "assets/js/89.1e993397.js",
    "revision": "3bd0aba049c73dfb9d716b07f5da7c17"
  },
  {
    "url": "assets/js/9.c0ed6b6a.js",
    "revision": "63ba724a38667c3a0a8fc95ce159d90e"
  },
  {
    "url": "assets/js/90.2db492a4.js",
    "revision": "88ce07a07d12ea87c2b729e5bf5e3e3b"
  },
  {
    "url": "assets/js/91.f956bdeb.js",
    "revision": "b8b35d2d4e7904d1dff35be48b8c0410"
  },
  {
    "url": "assets/js/92.511b9525.js",
    "revision": "fde4578c491f7558a4907fdd7acec030"
  },
  {
    "url": "assets/js/93.dad80562.js",
    "revision": "5362ce1e7dd453c39b7a377acb256074"
  },
  {
    "url": "assets/js/94.ddbca25c.js",
    "revision": "9f01f2adcb2ca3b2fd5e1642be193a30"
  },
  {
    "url": "assets/js/95.fa81399b.js",
    "revision": "7e80c4d363ae78bbb961ef4764a3e460"
  },
  {
    "url": "assets/js/96.311794b5.js",
    "revision": "06197ec4e440d7681f2f0b653258865b"
  },
  {
    "url": "assets/js/97.2b51c9e1.js",
    "revision": "57732e718bb59a355c6f7a5176a6a5ff"
  },
  {
    "url": "assets/js/98.bc2a8228.js",
    "revision": "9f7baf3953fa62b72fcbd28af1f4796a"
  },
  {
    "url": "assets/js/99.719508fe.js",
    "revision": "79a9c6efebd5fe93eca81d96c7f9186e"
  },
  {
    "url": "assets/js/app.59395c47.js",
    "revision": "4e115afa1b6c0313d7ecc49d04064763"
  },
  {
    "url": "aws/access-keys.html",
    "revision": "89205cf849d1d487c1a1a01f647c7154"
  },
  {
    "url": "aws/architecture.html",
    "revision": "030c1939217c7976e207dc4e2b739774"
  },
  {
    "url": "aws/arn.html",
    "revision": "ad31d59001cc39774c2ac62217cc9e8d"
  },
  {
    "url": "aws/aurora-pg-vs-rds-pg.html",
    "revision": "2a163d80b9fc04631dcd844e588ae59d"
  },
  {
    "url": "aws/aws-abbr.html",
    "revision": "3c81859bb50f25dd323e1b84dcf9803b"
  },
  {
    "url": "aws/aws-dev-tools.html",
    "revision": "794b5e50a54bf7f4f0b920834273ecc2"
  },
  {
    "url": "aws/aws-doc.html",
    "revision": "5dc3df792b9794baa090aa5c56d806e7"
  },
  {
    "url": "aws/aws-outposts.html",
    "revision": "cbee4357651baf80524296cbf2f5716a"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "242b341c1ad70d281faa32a3dec88c44"
  },
  {
    "url": "aws/cloud.html",
    "revision": "1e191ede2df9ea5c22cd2bb1fa7cd9c7"
  },
  {
    "url": "aws/dynamodb.html",
    "revision": "06b1378875af7c54f93e53d85769a827"
  },
  {
    "url": "aws/elb.html",
    "revision": "e2faaa7da211ad46904a7642b444c2e5"
  },
  {
    "url": "aws/global-infra.html",
    "revision": "d5496e815d7393533a41e4b5ace5404a"
  },
  {
    "url": "aws/misc.html",
    "revision": "f12ef9df0745115bfd2e15524e90ec53"
  },
  {
    "url": "aws/postgre/index.html",
    "revision": "6c6356308575d15cfa6c73c5c292db73"
  },
  {
    "url": "aws/s3.html",
    "revision": "e119288567dd0cef3f70e76439a66812"
  },
  {
    "url": "aws/vpc.html",
    "revision": "d6d61bee2d959bf08412c67405b0338a"
  },
  {
    "url": "blockchain/solidity.html",
    "revision": "e81c5c566fcc5ec88e7d132dbc1c94dc"
  },
  {
    "url": "common/cache/cache-notes.html",
    "revision": "8e8adc451438e3621168bc71c3f11f86"
  },
  {
    "url": "common/cdn/cdn.html",
    "revision": "23d178f9ac3fbfebcdac71f5726d2803"
  },
  {
    "url": "common/clean-code/clean-code.html",
    "revision": "09396e5658796554a1e0166a07969119"
  },
  {
    "url": "common/clean-code/code-structure.html",
    "revision": "bfaf4816d6ab0100d02079d00e0057ae"
  },
  {
    "url": "common/clean-code/refactor-catalog.html",
    "revision": "abe9a3b9ba628334f3408e17a8808cda"
  },
  {
    "url": "common/clean-code/refactor.html",
    "revision": "ba31f54857fb5ad690fb53efaa6650a0"
  },
  {
    "url": "common/crawl.html",
    "revision": "a8592c69467e98c29185ad06db5351c5"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "923afec4d2303c41917c2a5d1b459677"
  },
  {
    "url": "common/debugging.html",
    "revision": "3f1bb3e4f80c30da84973441d6cf0e5b"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "566d6374ea9ad339fd105af6dfb76f93"
  },
  {
    "url": "common/document.html",
    "revision": "32cb5db3ff3becec688ac30b83a4a7a8"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "b572fd3efd71add0f84963ecec20ac81"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "8164f748bb7b1942d7eaa610ee6fc5ac"
  },
  {
    "url": "common/index.html",
    "revision": "d2a2ec20c21e858c480f8d6254212b03"
  },
  {
    "url": "common/notification/index.html",
    "revision": "f0ce2e59d2a07cfbd4f1d51f5ff3e573"
  },
  {
    "url": "common/optimize_be.html",
    "revision": "5af4416d0b276a222f975bb57cf952b6"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "2bdd074c68d3e1355e92b0818cd34f01"
  },
  {
    "url": "common/realtime.html",
    "revision": "f30024ce83e52ebdacdf8ec64ad618fa"
  },
  {
    "url": "common/security/software-security.html",
    "revision": "6dca3ac5128c0cf2b4a17d36de7d35da"
  },
  {
    "url": "common/seo.html",
    "revision": "e960264bf859f840256bf81613fea501"
  },
  {
    "url": "common/use-case.html",
    "revision": "63c7cf25a37b95a025954198754f9769"
  },
  {
    "url": "css/box-model.html",
    "revision": "e193a6274e3b02d1844bb01388971e4e"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "283a6372605a0a09c3afd776a9c4c449"
  },
  {
    "url": "css/css-flex.html",
    "revision": "ff7ff4c2f28642cf46581fc206f7f46d"
  },
  {
    "url": "css/tricks.html",
    "revision": "0be0205c4c694b0cef26e02b838877c6"
  },
  {
    "url": "db/architect.html",
    "revision": "ddb2c267fd115efe48b7ae714a2a61ec"
  },
  {
    "url": "db/cassandra.html",
    "revision": "8403513d0a86fa848acb8467c84475c8"
  },
  {
    "url": "db/consistent-hashing.html",
    "revision": "a798dbc33e7d5a687fce276dc126b471"
  },
  {
    "url": "db/couchdb.html",
    "revision": "e7da9e9cfdde0821c6b05875ad67348c"
  },
  {
    "url": "db/db-concerns.html",
    "revision": "3676a359a050f48cdbf236358a116c38"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "dab6962ab3a8fe2194c60a1624dbeb47"
  },
  {
    "url": "db/db-vs-blockchain.html",
    "revision": "c9456f3282ec836737d4a5df14015433"
  },
  {
    "url": "db/dbms.html",
    "revision": "622fe6466ee9008ae97f9e9762a6b7bc"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "37a9798195d40d8e78c2d73fe92da0c8"
  },
  {
    "url": "db/id-generate.html",
    "revision": "73dca761e3af5e20fcbac89482c4bd25"
  },
  {
    "url": "db/mongodb.html",
    "revision": "463da867bd6f38fbe8d1bfa2d5d75f30"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "12bab1c97c3a4a80dbb3b9e82b4c8075"
  },
  {
    "url": "db/nosql.html",
    "revision": "e266f7d80faab4e8626e6fcdeb609832"
  },
  {
    "url": "db/optimize_db.html",
    "revision": "e99b3ab211202072a3c6302fbf728326"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "53d192867c1d5c0ce774cdabceb787a4"
  },
  {
    "url": "db/postgre.html",
    "revision": "9a6870bbcf8f3059f0d1ad87dcdb7c63"
  },
  {
    "url": "db/realm.html",
    "revision": "4a8618f478be5b2f6ad6a4bf1cd3d04c"
  },
  {
    "url": "db/redis.html",
    "revision": "691e40448e29223604eea97239302731"
  },
  {
    "url": "db/storage.html",
    "revision": "0cfd1701b4daaa2143a25e472b316a36"
  },
  {
    "url": "db/tx-isolation.html",
    "revision": "430d332042a5b802fdeec6537057bc9f"
  },
  {
    "url": "db/use-cases.html",
    "revision": "2c4bb37b1baf41d7c39453850503e415"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "7dcd13c7919a282ef7eca0c2cc7e4533"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "91237e1f0665e4f2c802ecb8b94a7290"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "dfb07739ffe2d7d51cad3edcf3b45426"
  },
  {
    "url": "fp/fp-ts.html",
    "revision": "e14206a2521fbac522958fc5bca2b3bf"
  },
  {
    "url": "fp/functor.html",
    "revision": "8c52efe7c6bb66cd1a54bb884d6cbaaa"
  },
  {
    "url": "fp/monad.html",
    "revision": "42db98f925fc9e8c275b348e7fbbd4a5"
  },
  {
    "url": "game.html",
    "revision": "66c7199934d518c5b7b8d57e91ef4093"
  },
  {
    "url": "geo.html",
    "revision": "45a13eccd1be1ed54969d37e191a062f"
  },
  {
    "url": "go/clean.html",
    "revision": "dbfa5d3fc8847e1b04bdd63ae5d273f5"
  },
  {
    "url": "go/index.html",
    "revision": "8c9c7b18093f3e744a54308558c2c5fa"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "177d945beddfc2a24fa8cb2714e5a0ff"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "7b0b332f6aff9989ff70fab959b5bc4f"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "10cbd45717941f99bf4c0715a0f5b6bb"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "c65033e0783ce8926a6f4d39d9498d15"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "cde3f7cd782752c7867abe5396b03fde"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "a234a5b239f796e431d1fcd1d7bbc324"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "a6e8018c42003decf04d248acdf7978a"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "5f8cf6da885a5bfd9f618aed620230a6"
  },
  {
    "url": "idempotency.html",
    "revision": "863396909009b5e200525d2ffd9f211e"
  },
  {
    "url": "index.html",
    "revision": "5379843973f52968cec131b5e13b7e51"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "e50e98b5dc586e24f249979c48fe5f4c"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "6d4e2f29dda28f7d023747eceeeffc47"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "b5ce875c166826c8850ceda1e784130e"
  },
  {
    "url": "javascript/closure.html",
    "revision": "bee02815c9c47ebf5907e11f3fb30799"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "cbb364b4fc0278d122b23747e96ea47b"
  },
  {
    "url": "javascript/eslint.html",
    "revision": "882fe234738dda35be9d65638ea3e486"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "b49b34d4635c753e36603cc6d9e27e78"
  },
  {
    "url": "javascript/nestjs/nestjs-cqrs.html",
    "revision": "67cd1721125e14f00dea8da6d23d660b"
  },
  {
    "url": "javascript/nestjs/nestjs-overview.html",
    "revision": "af98e8734c379fd238df96a92397ed7c"
  },
  {
    "url": "javascript/nx.html",
    "revision": "470b810e33a8b2889bf614c1c739a995"
  },
  {
    "url": "javascript/rxjs.html",
    "revision": "7fdddea4550f812610cec0b30ffe21c1"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "881d7e773f3e4da14d5ac3a5252ccd02"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "9bb85eebd6f5f1a60cce91d781ffbf36"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "88138b33623866251ec48af540bc3f94"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "21dd2c95529c8fe7b14ee75510f554f8"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "c22c63db9f8b8e5c6c1ebd26e57e58f5"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "dec373cbc3aabf7fa36e79d6c7dc83f8"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "38adbe8e5c96268efd5e0e79f4c982fa"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "3897edcbc6347061dffd88170b37b4e7"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "3dbb5e93a57d1d39c69de0fd7e783c0e"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "268bd1ea6abef89c1154f0590c054241"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "ed3556f08a6eff5a5e1557c60b4e5fb6"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "1baa2a9fc8b153489ebedaff1e668dad"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "0d9b6ef1020c81638cc56fca52528b48"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "5456bf4338f81aa0fa7b860e4db2c19c"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "0069c2ddfb1691220d50dda375c297ab"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "c92d743a22323227899faab711a0b489"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "f9c8ad05c5f3747f314fa76c5149f954"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "5106a54b73177bd4d3060596e13be7bb"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "a4997c9f494bfde0d1cae455b1833505"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "fa47f79b995615565a27db1b8707ed11"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "66a458c81875ea6ef20feb3d6bc4a384"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "1b46beeefb89f2350b925dbce39ec74c"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "23e47f06afff31cf9645292bdafac576"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "427618500978e800dd24448b45530f98"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "f4ae93fb827a3f0897fd22dd0c7c03a1"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "c5ba32f59234658d2c24687d514b1e30"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "974c4ef83961654c2efb59b73da77f2c"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "96466a16e7600f53247a5d74b3224c64"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "f19371d552b6132f613634b632eb56f0"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "6f818b3259cde4e34dd9425cc7513e27"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "4116870239856a38ddd91cce3e397043"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "388c4ea319ec0af5f05e786e80e0a4ee"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "a76e040a2a4429bf41464d6a456172a2"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "222d26f00e14e983d6054015a84489a9"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "9f97feff2d5b4dec14c4783871938305"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "17c205d8c973cb2a0dadb813fe177261"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "9a381e623d708dd8342ba26404c0e0da"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "9cfa1f6f7beced5aaead73bf7371c1a3"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "3b35b86767ad20cd852cde65acda836e"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "ad525b12272d67a75f2e8012355b370f"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "fafc5febcaf663e58c720652745ec311"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "8fe497b784b0ce4432222745150228fa"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "6db037bff135a848d610f1a6f6c60419"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "dc301ba75b5dfc5938d1f91b9b2a1d32"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "f1cf577d4c038552d650f314cd4b9657"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "ca7019f1055f61e5471d320686639a6c"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "a975e73c103741f7ca980cd1142f4b1b"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "20e5fe2f7e3a0375608a7d37ea804e3f"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "8a9fd29f19ed04c10304b7b14df592fd"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "29dad0ea71a3125f6459825d994a0504"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "4579b6fdbfb6e67520d7abc0bcac2c50"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "21169d6686c2f0e279b92c06b833c4da"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "e0de938b9d1b3c7d387ca3fd2cc97b55"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "87eeb9a2ab9a0d7d2644ef51b7ed098d"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "ff68fe47102cfb1b60968e2a521d12b2"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "5d1014a59248396db4967c06b59852e0"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "646ca45746e2604cc7fd09fbfceace46"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "58d06267f6ac3764fa7f32a45bc38fa1"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "9ba27c25ed85fe6372f395b699c2d2fd"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "1bc4ade1fedf20211e1bd2fa5a6aed2b"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "83ffba9e20de0cbf82c46380df439cf4"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "9032cfaaeb67cbe7379de735bf4b2fae"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "02cf8f270b5f182081dd07aa74e36cb3"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "5b6b5c80ad1bba61fc009588bf48a3cb"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "70d278da363b8e451583fcf2a6172aab"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "a7d529c408802fc46cd1b98e2d834048"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "054f92c51b7041655d6e059afbe40316"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "69e45311b6437790c3b9da45aed49c9e"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "b2d38acd4f5329a9cb81c922cad08fce"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "212a0be8d7d96e16b275c08fb424d314"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "0d3b4d173c9316c49f2df0c344c02e8d"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "408b0544f1108afee649a8acec1c5169"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "506f9a4dad850e5a88f86a3322bc50ba"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "1ca945d08c0d83d7f663afcfeec03e66"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "7efb57520d67dd7c1e55b899b1a4997d"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "b30c212eb5b8831cd4d8e1dc91e48a0a"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "61e3cd96a7f0a710f2a721222e9825d1"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "9da04125a52a550bdb884d4e65c4f593"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "54615b35db34420067f7d0c1e6800fe8"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "2f557ae6d5e5db0495efeafe52a3e9c6"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "5a990d4f6db419df364e62a3394519dd"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "dfe6ce51e8ad2bfbc9e2a45c45185387"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "1595c82c6235a66d2869e6a26e0edad4"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "51f28eccea703d6b320321963453b97d"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "729f59533655844ae8b53d5b65dc8898"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "2675c4683158721dd2b5c2c735ed8c93"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "90c446d5d310eb956239597caa973387"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "9eff592837481065837f4149cc63420a"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "405b84545dbf2c7ab97e3c9f3b46abb2"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "1cbc57663950822a9ffbc3e115ac4dac"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "eda35fe3c34263f8626a6eb9d09da91e"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "887a3a882871882f16ffc68c4e0601e4"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "b7d175b5de2399975f020e77f791aee0"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "f7984e6ca30f67e08f311cd75a6538ce"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "b7ee2314f706e7905edfad5ce02f4bfc"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "7f216abf647e227fc72d9ab6b523cbd5"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "fbe2c18a63bfa85d03ab22063b97b00d"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "2eeb76902be16a96faa50a5f0f12e62f"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "8cde0c6917852eae72b6789b0ccf4a78"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "c43fcf4dfbb0496f7312cdb73aa5664f"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "68d081d78851197fa7fe7d971370f4ea"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "8fb72ce5a78af7b820cb6aee99069ff2"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "451582f4fa7928eed7a09695e100ecaf"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "c37a0344742d36f95d000e949e6ea8b9"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "25c6d3d07c66050f46b94f54195af0ed"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "a958aca2b9a781fa30d275af0705bdd0"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "3b1528b3deb09a51958e4e9766193969"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "b4b4b4e794c5a30934dcb1c93d0a7aea"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "b30c62110543d8f28529247575e2936b"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "73c4f626527dafbf987e7930a96d89d6"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "21986f8f08646533ed1eafe3aca61dcb"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "8053446be4c7854949c38716b4e13dfc"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "9cc1b7d1ac1e956fc4cdd47e04ac98d4"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "77a30bb3fb65284f4e1995c56f3d9480"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "cc3db3d2c6c42369045bfe6aca402847"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "217b86fdfea8b32b8aca3ec3b1c1fef9"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "4fc12697ab710049cd27735c3b720789"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "c8b3aacff0765064281cf9856ff39d35"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "b24cc35bf815c9cf92e350ee967aefa2"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "3c9d808898e0df1c1abd616ff613b985"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "24638598063213a2c2acd4af360a2f96"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "86cddec5436fccd8e9914ea3e893671d"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "497ad75c8bc0ada471caeee58cef9aa0"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "dfd6e06e5f83c0d5dcdb7307d443c478"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "61199bfd522c7bda06b2df927448d900"
  },
  {
    "url": "kungfu/case-study/chat-system/index.html",
    "revision": "f85339cac8d5e814843c5275c0c3ebfa"
  },
  {
    "url": "kungfu/case-study/chat-system/part2/index.html",
    "revision": "d7f9c5647583dc119e448bb6f77c1f65"
  },
  {
    "url": "kungfu/case-study/chat-system/telegram/index.html",
    "revision": "5f994c044a9ef1e434de4653409648ad"
  },
  {
    "url": "kungfu/case-study/digital-wallet/index.html",
    "revision": "b33005e6276f2d19d88dd73dd59c1779"
  },
  {
    "url": "kungfu/case-study/google-drive/index.html",
    "revision": "9da4129919fb3af6052e1677b00e6127"
  },
  {
    "url": "kungfu/case-study/google-maps/index.html",
    "revision": "40e9ef632612879d6d7ae00738f961eb"
  },
  {
    "url": "kungfu/case-study/instagram/index.html",
    "revision": "88702ca42c5f72a444b06ebb05d5fc40"
  },
  {
    "url": "kungfu/case-study/metrics/index.html",
    "revision": "3c1589d43517333981a68b3e5dac10df"
  },
  {
    "url": "kungfu/case-study/nearby-friends/index.html",
    "revision": "539461829d8058b06e369b15680e2f3c"
  },
  {
    "url": "kungfu/case-study/new-feed/index.html",
    "revision": "5f0a11331eb9ca694b0fda12fad8ae9b"
  },
  {
    "url": "kungfu/case-study/notification/index.html",
    "revision": "dac36810e977eca48557a757334018a5"
  },
  {
    "url": "kungfu/case-study/payment/index.html",
    "revision": "8010fdb330146d2311f7a2925606a3e5"
  },
  {
    "url": "kungfu/case-study/proximity-service/index.html",
    "revision": "996fb4392faa1c6234c3f68081194484"
  },
  {
    "url": "kungfu/case-study/search-autocomplete/index.html",
    "revision": "25ee4a8c3571b605fb15b78b6dbe235a"
  },
  {
    "url": "kungfu/case-study/uber/index.html",
    "revision": "28162f843c0b76e41dce2af25e2e6be9"
  },
  {
    "url": "kungfu/case-study/url-shorter/index.html",
    "revision": "cc7432d2e623a813a4334a6bee69fe42"
  },
  {
    "url": "kungfu/case-study/web-crawler/index.html",
    "revision": "c0b14391bafc7796ddf401eaf29009a4"
  },
  {
    "url": "kungfu/case-study/youtube/index.html",
    "revision": "cd93fcb42fcb0bcc9785a34458a0e9d9"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "347954fd4ee20dfe753a59cb06dca20d"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "410c441a8043cb0bb83e2d0b1645f73c"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "4846558b745f31d78b2baf60f2a6e3c2"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "dcd54be061ff49561bf09b87e45e14c4"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "4d15f9dc47863e94c0431e74c0eb58ca"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "52c6567debf9dc9e0a9b080e2d53f48e"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "0372e9c3c42b1e2940e4e91363c4b2a6"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "7f7d3613bc4b74f4f1cc000d6c26daff"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "10a3e0a4600e8d3063a0e86fa5b18882"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "46538a85e7544fc90982408b65bccbcf"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "81bb35b9b1fb0eccae4f0dbe2994c0e3"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "3113a4ae8421be10ed1d63a3dc448be2"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "1ef5c45510e293737312255f4c7fdc7e"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "9129eef22de553c1862bf4dd9ab176bb"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "1e92ffae7d0d19428da3746b808814b0"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "375027fa6c046bec0753418f47f99fda"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "d109d17168f12a4cb5073e2348bbd16d"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "954208047beb41151910ef95b953b1da"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "0b69f751926f8721d666afbe77e967d2"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "fa0f8c94ae99b3d6520c6d88449fcb15"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "d6810477d2c8d2f62f9e637e9dba685f"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "b6c7c32a4aa55266b2a819c38e8640a4"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "8f2f8b12814e98f7de37f802e5e23659"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "932f4081c7e8a58147af7076bb793799"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "bfdc5f67368e8304970df72fea283919"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "8e5af1fa771e457ea3ccf4829c172508"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "44c79f5a10509ca350928cc36646b956"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "82b15ee2dd93896e2cab5dd863cfc82c"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "5474d8dd78cc7c9b62b1f395d0ac449d"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "a0e7b0a2ad7058f1a0abc04a59d3d0cf"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "bca8660a2dbef16dbad93d2b4b90612b"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "069aec05f4ccdab61ea4badf3527d64f"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "1cadcdc8850ce3ff5b7e8a468cf65be9"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "0e0784d49d903c9317bbf8621a1996f7"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "6432641e1c166349c0e92e81dd12daff"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "1c87d5f9a77f0f4696fe962a1858b24d"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "b9edffe321594f9ff158a3a17e08e4ca"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "a1879b8b98caacf4f5acf56df0612a99"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "6cbd9d4569324a8945e0406bdbc09777"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "216bc3cfe302e5b18195d8ac9455479f"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "0099942e03e0b5ca1c855b655acc0d3d"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "dea325d26be400623cd7291a8a09d8f6"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "877f98cd68e0f048889359cf0690d5b1"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "19b5bc4e0fc486a1d8ec0d1a4e2a8d8b"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "c17f80dc36cf93166fd73ac50c094339"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "5cecfca4abc5919ab61f7368dc22cc41"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "67f178a012b3443c8822b6ff3189eb4e"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "cbb20760649777dcaf6e450c58737738"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "b822508ec05057f4b91b46a866aca1e6"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "605c07b0deea3f33eea9c359bd5f7d24"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "e76b5b4f7a776f075fd3ac04329ae16f"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "7577ba547c7c741b9e1cb4584e934886"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "531f50e27e1923db62a2fff2063fd1c7"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "27ff04c3a520af2621acffb8b3601c72"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "3add4a726820e0493e60e591908cdb76"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "0e2c9fbfa1b23a57822f87d67c86ad08"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "d5ea8b72c607f29ce22c694b309a344b"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "d1c2e4bf6af6fe5beac09457fd5f5485"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "03cf5e8098ac3a9c755868f9a9ef59c9"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "45bc89d5e5a73dd71c5f72e5cc93978a"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "1791e55766bbdc61d5ccea0d5ea39abd"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "03b3ad6c5ce37687ea2db6d227b362f0"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "106ca6e35814d3880307333ad4334a57"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "1a33d12b850c8556014dd8cfc4100d9d"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "c0aac19260375a71e74098d35cf979dd"
  },
  {
    "url": "kungfu/template.html",
    "revision": "b9e69755469ea2f97ce6b6a36244697b"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "e1748e156d35bc65d937b4241725a4f0"
  },
  {
    "url": "network/address.html",
    "revision": "a0dd00f157844c4c2198307a2c36b2c7"
  },
  {
    "url": "network/devices.html",
    "revision": "e4f9d31eb797f73dcee2f472ba625a8b"
  },
  {
    "url": "network/dns.html",
    "revision": "a56888108acc03e97f278411f4d2bd89"
  },
  {
    "url": "network/ethernet.html",
    "revision": "872a5a57f6b02c3c49d9f7ab50035a0b"
  },
  {
    "url": "network/internet-protocol.html",
    "revision": "683fbe424cab00c0d1470dfbcc0bb75c"
  },
  {
    "url": "network/nat.html",
    "revision": "b9770d6d65fdce431d4bed1933696332"
  },
  {
    "url": "network/network-abbr.html",
    "revision": "310814b165ef6654cb99c72edb47d04a"
  },
  {
    "url": "network/network.html",
    "revision": "6df033c31e6ee811628464c4081c52e8"
  },
  {
    "url": "network/obtain-ip.html",
    "revision": "c8be34f9d55fd07a7a98da34dcc07485"
  },
  {
    "url": "network/tcp.html",
    "revision": "594fbf7043eb178d4b6661a7bdc9dedf"
  },
  {
    "url": "network/websocket.html",
    "revision": "f29bf0588f8981529f2de4db9599c429"
  },
  {
    "url": "node/env.html",
    "revision": "34cf8ad87c2da3b7a445ee315ce32b05"
  },
  {
    "url": "node/index.html",
    "revision": "11b373de0dc1457e7e86cf99528738e9"
  },
  {
    "url": "node/n.html",
    "revision": "bb9f654a90b9589c6c7a33d050ee6ed0"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "ab43758f628e356d4fe4be0be5690dcc"
  },
  {
    "url": "node/npm.html",
    "revision": "53a09d6f957a355f46c45f2bba070a88"
  },
  {
    "url": "node/sequelize.html",
    "revision": "82e503b7599aa17b6d68758526f52507"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "a14db77d63253faeae731217aae18b81"
  },
  {
    "url": "oop/design-patterns.html",
    "revision": "b4d0a3d2f068d77ab64141749124f04e"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "3d74e70ed861ea649d695e0eeb244920"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "0f74ed043cd0053319deea98c696b7e9"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "bb5dd47374a6c32e9d98fb5be61b8a20"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "bb31ac7a0deb1441ec9f38cdc05d6951"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "ce851ff50c06fee5edb82e838613be04"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "d1bad94e6862877916d52de8274deae9"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "9694813e5f780dd1541b5cb850a1dafa"
  },
  {
    "url": "php/clean/di.html",
    "revision": "b4a27367fb4728c4637c88a34461f7a2"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "38636cfb11860fcb93f90bcda7756622"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "a9869196b4a4fcd2d3065a840f66f46f"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "8ddadfdff938ba9013872ae7f213a5db"
  },
  {
    "url": "php/clean/index.html",
    "revision": "2e3ba764dd27e986e7e330b765a3e668"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "6d5fbc5e7e7e7b9007e49ddf7cc79deb"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "19edd1b16a50379402692572303f5dad"
  },
  {
    "url": "php/composer.html",
    "revision": "f0180f8527221fcff35ebfd8e95ebf5b"
  },
  {
    "url": "php/crunz.html",
    "revision": "45f670df8a7c09344029faf24eba2bf9"
  },
  {
    "url": "php/laravel/best-practices.html",
    "revision": "8e5a90a0a92ca4e7132fddbb150e9f68"
  },
  {
    "url": "php/laravel/laravel-notes.html",
    "revision": "3496a3e0654ac3def1e19ab50bbba04f"
  },
  {
    "url": "php/laravel/laravel-vs-symfony.html",
    "revision": "c179078e693d4fa036914568d82134ba"
  },
  {
    "url": "php/laravel/patterns.html",
    "revision": "fccce70b33357724e23783493611179d"
  },
  {
    "url": "php/magic.html",
    "revision": "791f4874ba7ea0d43b7776b20e3fb41e"
  },
  {
    "url": "php/notes.html",
    "revision": "b255fe5051e7a5ebd61f871f60bb3e28"
  },
  {
    "url": "php/oop.html",
    "revision": "675665e726b8f65fcd50a324061e522f"
  },
  {
    "url": "php/php7.html",
    "revision": "3f442a6bd86f4624c662379d61f725a4"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "17e6efe7ed3b228f06f1e5f9322ba1e9"
  },
  {
    "url": "php/reflection.html",
    "revision": "5dcf8c2ee4ad4b40b8290365ac64125a"
  },
  {
    "url": "php/tricks.html",
    "revision": "eeddbd603de1f7d395f62e968c5aa91e"
  },
  {
    "url": "php/wordpress.html",
    "revision": "66567a22a3fc08511cb3678779fbbdec"
  },
  {
    "url": "quotes.html",
    "revision": "a628fbf1c9c8681ec42f6b45e0369f06"
  },
  {
    "url": "react/mobx.html",
    "revision": "1ca872941fc067c4c84541dd6d611e44"
  },
  {
    "url": "react/nextjs.html",
    "revision": "cfd0582f702ab365ae4cca5ab1fc2191"
  },
  {
    "url": "react/react-native.html",
    "revision": "bab0b82ee6ac14166a7a1a473d59f4ee"
  },
  {
    "url": "react/react-vs-vue.html",
    "revision": "7549269f53407dd3299fe360a664d0ce"
  },
  {
    "url": "react/react.html",
    "revision": "5a82dbc124946a5c006dbd3d7d36167a"
  },
  {
    "url": "react/vue_react.html",
    "revision": "7284cb5c90ac80236271dc081908c38f"
  },
  {
    "url": "refactor/notes.html",
    "revision": "90cc47506d9e0ea90855f11a2c95c1e7"
  },
  {
    "url": "ruby/ruby-notes.html",
    "revision": "d2401bc09e4f31db45f95f31d3d60f83"
  },
  {
    "url": "ruby/ruby-vs-node.html",
    "revision": "f26e948cb526d353cb0193c52e2ffa58"
  },
  {
    "url": "scaling.html",
    "revision": "39bccdf15d525acade283dec7b722caa"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "924725cc1ee9c4002c7a561e459d1000"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "669f506cb8e847c8e1a1df6660b9b637"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "e7c4e8adc6df462db7d3d6eb7fffb86c"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "19d9e6172c0dd94db3d76d43c7b7d4cd"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "c9b66c19f56c5cae0ddf50ce28b625b0"
  },
  {
    "url": "snippets/jest.html",
    "revision": "e84c7bc615f79c67df5e55a79c8f06ef"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "17e4de0ee9376881ef00cb90c995da7f"
  },
  {
    "url": "snippets/regex.html",
    "revision": "24307cbf0f5ee253485cd31defe87448"
  },
  {
    "url": "tags.html",
    "revision": "f0e40741dc53547e7bad5dd419937be0"
  },
  {
    "url": "terms/12factors.html",
    "revision": "8da386c456f375a69cce229cbb70c954"
  },
  {
    "url": "terms/architecture.html",
    "revision": "629f6a3a4f4526b35c64e7f148756c6d"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "fbdc5acad624c2d457653720986915e4"
  },
  {
    "url": "terms/di.html",
    "revision": "5c0f0915a874ef543d60437492ce721c"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "68f4b175f8c23f15fff853bf6b67e8fa"
  },
  {
    "url": "terms/javascript.html",
    "revision": "fb08330f6d77486ee31270074c018cdc"
  },
  {
    "url": "terms/patterns.html",
    "revision": "1c8e46cbc0e61fb335c98161f1a84c06"
  },
  {
    "url": "terms/payment.html",
    "revision": "1f3e3718f23af5c81083bf264c2930cc"
  },
  {
    "url": "terms/principles.html",
    "revision": "303541614373ad7e00a118f0c733d61e"
  },
  {
    "url": "terms/rules.html",
    "revision": "7fd61897ab5e56ac89d603f80db1245d"
  },
  {
    "url": "terms/testing.html",
    "revision": "9e08ff36802df358244e9a2632744177"
  },
  {
    "url": "tools/chrome.html",
    "revision": "b996e122a2f59c6cdaa0db5775d0b61d"
  },
  {
    "url": "tools/docker.html",
    "revision": "93cf89fc4ca922120cb1484c290fdb9b"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "dd26f800640514a043e32d6a551636d4"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "d7d4fdd392018b793b8f0902b8fd63c3"
  },
  {
    "url": "tools/graphql.html",
    "revision": "35b6ad4da86b6ac15df7a18a84cf65c3"
  },
  {
    "url": "tools/k8s/k8s.html",
    "revision": "d8a40746a7c16f0215dce8e54b5dd0e7"
  },
  {
    "url": "tools/kafka-vs-jetstream.html",
    "revision": "86365606c1745cdd3cd250dfe894147a"
  },
  {
    "url": "tools/kafka.html",
    "revision": "3e26f989fce6c0e20e7670b47bcfb03b"
  },
  {
    "url": "tools/kafka/overview/index.html",
    "revision": "9f581f949a8c8246b6db65731dfe810b"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "1dc6cc8de51c3febc56e7b7b5680f34c"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "412adbf6c06fa4d3b455d29e4d67adaf"
  },
  {
    "url": "tools/redis.html",
    "revision": "da2d9dbccb71a3857a38e0e269c5f537"
  },
  {
    "url": "tools/rfid.html",
    "revision": "654432a50e159414a465c41623d8ac08"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "757c4ee65f3af63026eb3552b93c4d57"
  },
  {
    "url": "tools/vscode.html",
    "revision": "65249a9596a6458f79aa2e5855a12777"
  },
  {
    "url": "tools/webpack.html",
    "revision": "6f0fe492b26375177fd35060e42c49bc"
  },
  {
    "url": "tricks/compare.html",
    "revision": "f34b20c14f6f496a2ded82b26f53df16"
  },
  {
    "url": "tricks/git.html",
    "revision": "e2c3de3ca074dd362a48a4cdedd30e55"
  },
  {
    "url": "tricks/linux.html",
    "revision": "cb2a69125a1bf6a94a8adb99ebcd976d"
  },
  {
    "url": "tricks/mac.html",
    "revision": "a4db43cf6fcf23cccddb7892da2764f1"
  },
  {
    "url": "tricks/misc.html",
    "revision": "c3090ec41c5e5696e79fe80e747921ba"
  },
  {
    "url": "tricks/setup.html",
    "revision": "0519004876ef181930d46ab502056486"
  },
  {
    "url": "vue/communication.html",
    "revision": "46fc14aa7b4549d3d326ce56236214f4"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "285900fc2a46e32eec8f2c258f0016a6"
  },
  {
    "url": "vue/events.html",
    "revision": "4594abe3e99f7863e6e380c1dd10ea82"
  },
  {
    "url": "vue/references.html",
    "revision": "395f64c0f6ae34b8217528c71f66f862"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "8a415bada1b08e7f7363b2d41c8b9bdd"
  },
  {
    "url": "vue/test.html",
    "revision": "de5f15035db7551d0d920bcd588fcf74"
  },
  {
    "url": "vue/tricks.html",
    "revision": "d6c6358743c43bdae840c20458792d8b"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "8c56c079cc324f75dffb7e1f4ab6f098"
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
