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
    "revision": "752242159783eaa73201588c656e8081"
  },
  {
    "url": "ai/AI-note.html",
    "revision": "c35d43b0bd1797a37a8c77a6b6cee3f5"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "8637017001113ac47fa4645f86dc303c"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "4851f218d4a092689bb7a82beb536402"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "f15ce5cd45cc001d9041b6f3a443ff2d"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "6ae5a9af1338867ba6df808c96811996"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "27f657f9c8a1c213730929ca10d849a5"
  },
  {
    "url": "algorithm/loadbalancer.html",
    "revision": "bc08118799b911d6bb7097c2bf28609e"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "6b7951b801c51c84bf45f292cd0d7ae9"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "b796db8025083dcf2675fe37bc547b6e"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "a3cbcd3131e23321c125c4edf7a4376e"
  },
  {
    "url": "algorithm/string.html",
    "revision": "4b0c41ba028eef75b0b63f94c1cb2f84"
  },
  {
    "url": "algorithm/sum100.html",
    "revision": "90909833b04fe1b07e9364301467d00a"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "616f640f32e7b30da7dd04e9f82ee544"
  },
  {
    "url": "algorithm/upload-large-file.html",
    "revision": "3207277830c3ff7c38bbb5a2fdeb1451"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "faa2ed69f4951cfe71108f88e5f68f43"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "14c661b32d8f37e1f301ed343e5ecf60"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "54966b4903396371eb66383dafa4aadb"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "f09e4f48099dd32039a95eb9d0d9fadd"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "7169aeea43953f7d4077df170616aa61"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "b0ba19a2a0531d92f64d4682e72c417c"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "b968febfb62a13c1e0b2e835d9be8140"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "d58a8ec0b2eb6b246e9e8390b92207a9"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "d359504cfc429ceaf80b3e5a48f4aef7"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "b75a98baba8c76027206a1dbdeabfec6"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "dc834f969271e72a184fbffe2b7a70fb"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "3dbb8cc3dde0492d5c110f585969f35e"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "a63033abefd873e24e6c966ccdffcf49"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "c58ffbb11754abbb8da8d983446c8d25"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "361d3b92471649200259d6dc34d4ee1c"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "49d6085517f04f7fef588bd291d1f9a1"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "01b47177d5233d37b7bebd34615f2c9b"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "53392f2cbeb8a9c429501923bbd7889c"
  },
  {
    "url": "api/index.html",
    "revision": "8cdf803c0c23f916ec2cc33baddc5e3a"
  },
  {
    "url": "api/rest-compare.html",
    "revision": "b0cd3e17d489cfca1c266d4de074416b"
  },
  {
    "url": "architect/audit.html",
    "revision": "bf471103c295d903d9764cf88f27e163"
  },
  {
    "url": "architect/authenication.html",
    "revision": "966f03ac1ca71e134d4ce8c92600e2d1"
  },
  {
    "url": "architect/authorization.html",
    "revision": "4fc044384542989bcaccaae196d7825a"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "8bdf2a70b2d0dbc802c11dacc96ad9d7"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "81dcd7f8086f03c3b274e177c4836677"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "40dde85b91aaaac047b3e92f9a4b4d21"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "9786e3be4731b8ef7c0b8c7655d867be"
  },
  {
    "url": "architect/ebi.html",
    "revision": "52d294e1d2ee1046785416469e719683"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "96b743d9dcaab684337e31f1a233d84d"
  },
  {
    "url": "architect/fault-tolerance.html",
    "revision": "19d37b67726c65607507d4c3c45f331a"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "1e3997ecd3c7ab743ee1b9c07b612edf"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "b173d873738b99ff55753de1cea60b10"
  },
  {
    "url": "architect/index.html",
    "revision": "2f0dc177f288b22006d9c68c4b9afdc1"
  },
  {
    "url": "architect/jwt-handling.html",
    "revision": "3d77db4c70bba99afd724b172a429d77"
  },
  {
    "url": "architect/messaging.html",
    "revision": "4f76ae0d7f06db8e6a5b502e94bf65a2"
  },
  {
    "url": "architect/microservices.html",
    "revision": "231485fec61c694eaf0c72c1ca729f21"
  },
  {
    "url": "architect/mutex.html",
    "revision": "b1b839d09dee903b9261a06858e98f0e"
  },
  {
    "url": "architect/notes.html",
    "revision": "621df785d03a7c564928196a6edb95a4"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "2f1479e25e6d9b231b3bd672fc992a0c"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "638b06826f21a449ee2dbdbc8d45e91a"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "9eef6a5fd89c1a1e4760f0539a0be0eb"
  },
  {
    "url": "architect/refs.html",
    "revision": "7d2bdcd420261901c68a28462b3b4754"
  },
  {
    "url": "architect/soa.html",
    "revision": "e6e98d6ce65e3f09f2ad1585bfabaa47"
  },
  {
    "url": "architect/spa.html",
    "revision": "0c3c6464db08c601603258da2956ad9d"
  },
  {
    "url": "architect/sync-solution.html",
    "revision": "917b925844a0a9a12d635403918feae4"
  },
  {
    "url": "architect/system-design-cheatshet.html",
    "revision": "30ff492e8d43ac6bce66691db059c0fb"
  },
  {
    "url": "architect/terms.html",
    "revision": "aedcf24fcb67580eced914322c25815e"
  },
  {
    "url": "architect/webservice.html",
    "revision": "ad74cf65590ff86979448fa85fa2fbd2"
  },
  {
    "url": "assets/css/0.styles.0558eedd.css",
    "revision": "9f6c07eaa377a5cf88cd35e89f777064"
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
    "url": "assets/img/f1.4a99f0a7.png",
    "revision": "4a99f0a708a75007bbe5fd3845528758"
  },
  {
    "url": "assets/img/f1.60e24670.jpg",
    "revision": "60e246702961164c5df55307dfebe499"
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
    "url": "assets/img/f10.98438100.png",
    "revision": "984381002be590242493ec1fdb74ba87"
  },
  {
    "url": "assets/img/f10.9a89acbd.png",
    "revision": "9a89acbd3e0619fd3bea18f45891ceec"
  },
  {
    "url": "assets/img/f11.22ec38e3.png",
    "revision": "22ec38e35538445ad061228cbac19a34"
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
    "url": "assets/img/f11.bd648ccd.png",
    "revision": "bd648ccd1d8d5bbc56616b98afeca674"
  },
  {
    "url": "assets/img/f12.808ed4a3.jpg",
    "revision": "808ed4a3cb4a22e26b5067bad99421be"
  },
  {
    "url": "assets/img/f12.cb6ef4bd.png",
    "revision": "cb6ef4bd74bdc0edfe193be50d07cbad"
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
    "url": "assets/img/f13.95b11ea5.jpg",
    "revision": "95b11ea542b7a24397e0f272ba3d1ed9"
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
    "url": "assets/img/f14.2a4f761d.png",
    "revision": "2a4f761dbc013d06fdfe5cd907c8b1c6"
  },
  {
    "url": "assets/img/f14.83202626.png",
    "revision": "83202626fadb0e11fd0bf3eef0418659"
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
    "url": "assets/img/f15.88bbb753.png",
    "revision": "88bbb75337b7232eccad36c3df7c8030"
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
    "url": "assets/img/f17.bc1d0b6d.png",
    "revision": "bc1d0b6dccd41596596a022eb097205f"
  },
  {
    "url": "assets/img/f18.1bc7ab53.svg",
    "revision": "1bc7ab53af2b08730cc7ad1db2a6b02a"
  },
  {
    "url": "assets/img/f19.a9ef0aa4.png",
    "revision": "a9ef0aa4faa51e9d5153860c50af7b1e"
  },
  {
    "url": "assets/img/f2.6bf5f41b.png",
    "revision": "6bf5f41b5d2c8cb0eddcbb99c52349ec"
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
    "url": "assets/img/f3.8c43f4dc.png",
    "revision": "8c43f4dc3ee66828b79e588a7c329fff"
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
    "url": "assets/img/f3.c10b7980.png",
    "revision": "c10b79805f9246ec09910abf03d7c738"
  },
  {
    "url": "assets/img/f4.062f9b82.svg",
    "revision": "062f9b82bd7e24b765caba776c66e63c"
  },
  {
    "url": "assets/img/f4.52b619f6.png",
    "revision": "52b619f6bb28f0b0a99f520764ea508a"
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
    "url": "assets/img/f4.a94f359e.png",
    "revision": "a94f359eb1ea7359d402296b59095e62"
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
    "url": "assets/img/f5.7230a546.png",
    "revision": "7230a54671f8eba0a1cc6c7610224e5e"
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
    "url": "assets/img/f6.5123bd50.png",
    "revision": "5123bd507197700e49753c74c890e199"
  },
  {
    "url": "assets/img/f6.72671fc1.jpg",
    "revision": "72671fc10b3ec9a8280a934c4ef3e5a5"
  },
  {
    "url": "assets/img/f6.f6ac0a42.png",
    "revision": "f6ac0a42861112b0df2fe85797006dd5"
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
    "url": "assets/img/f7.859c7897.png",
    "revision": "859c7897d7f18c68c652401f7587a53d"
  },
  {
    "url": "assets/img/f7.dcb449da.png",
    "revision": "dcb449da463e6e8afce3cfc0f8063521"
  },
  {
    "url": "assets/img/f7.ee1e0a82.png",
    "revision": "ee1e0a82faf82dcf44fa946a6923f57a"
  },
  {
    "url": "assets/img/f8.3a354cd1.png",
    "revision": "3a354cd164558f2945489bff67394a68"
  },
  {
    "url": "assets/img/f8.5b21d202.png",
    "revision": "5b21d20279d6019437ea86b795905e35"
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
    "url": "assets/img/f9.517c90b4.png",
    "revision": "517c90b42b2ad89d00dbbf7b18bd64e7"
  },
  {
    "url": "assets/img/f9.5be780d8.png",
    "revision": "5be780d8c4bee6ce1be3c925f2365371"
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
    "url": "assets/js/10.3a838dce.js",
    "revision": "565d5f29d316cf3216500caf91999a5f"
  },
  {
    "url": "assets/js/100.b0975222.js",
    "revision": "f6b011b7d7c6ad469d3ee59def73095e"
  },
  {
    "url": "assets/js/101.7dad20a5.js",
    "revision": "2d1435fb976d5d98ce6668dae448dd93"
  },
  {
    "url": "assets/js/102.843d0013.js",
    "revision": "1e1a72d8bd793bfcae4ae645e9e45eb5"
  },
  {
    "url": "assets/js/103.ce567f5a.js",
    "revision": "7c5a94d644640600dba54fd953ea639a"
  },
  {
    "url": "assets/js/104.ba256eab.js",
    "revision": "b79363e390bfa97fa171a338d423e263"
  },
  {
    "url": "assets/js/105.0b78a2e2.js",
    "revision": "cf7afef5a94a6caf9303f889aca9e239"
  },
  {
    "url": "assets/js/106.77bf423e.js",
    "revision": "8f72a0df7b4fc564f14830fbc153f308"
  },
  {
    "url": "assets/js/107.16c172f4.js",
    "revision": "534caea0cf1d825911749cb954c94d5a"
  },
  {
    "url": "assets/js/108.94ab5750.js",
    "revision": "16b08a812bb3ffe58e5da498cafc72ea"
  },
  {
    "url": "assets/js/109.2eccd97a.js",
    "revision": "7f2d43a0efa85389d8ff1c66478bd681"
  },
  {
    "url": "assets/js/11.db966435.js",
    "revision": "2a750d7c0d5a7f0ff41b573612c4588e"
  },
  {
    "url": "assets/js/110.c4f902a4.js",
    "revision": "97f18abdb59982bc7c9fb4d92e925d9f"
  },
  {
    "url": "assets/js/111.cba1e784.js",
    "revision": "6e672f1b0c331b1e41ef8d9c7aa943d3"
  },
  {
    "url": "assets/js/112.1b590a8c.js",
    "revision": "9c5d4768e25e5c9aa0872746f574e04f"
  },
  {
    "url": "assets/js/113.3fb6b463.js",
    "revision": "4a2fb7dbc58edb3e0c46652a1bb4157d"
  },
  {
    "url": "assets/js/114.092595c3.js",
    "revision": "9393fc2f1f1e01b4dc5125a89ee46207"
  },
  {
    "url": "assets/js/115.38355923.js",
    "revision": "f1ae049034733907319d0c9a881383aa"
  },
  {
    "url": "assets/js/116.489b0893.js",
    "revision": "2a0fa0920af72f261c5921b4acb11c04"
  },
  {
    "url": "assets/js/117.f4b1000b.js",
    "revision": "16622b5d6148957637d8b4f1d6a6da2b"
  },
  {
    "url": "assets/js/118.1183869c.js",
    "revision": "12dcf7ce9938c70c21263a26ab6e2ab5"
  },
  {
    "url": "assets/js/119.c249ade2.js",
    "revision": "60c13ecfc7848a21310ed3f7286ed6ef"
  },
  {
    "url": "assets/js/12.6ee231f8.js",
    "revision": "440843e87f4f44697936808118259320"
  },
  {
    "url": "assets/js/120.89016efd.js",
    "revision": "731765b94b3fbede841580ce8e9a4bbb"
  },
  {
    "url": "assets/js/121.701615e3.js",
    "revision": "750d0bd243a17efa0cbb8fca250c899a"
  },
  {
    "url": "assets/js/122.964cd8f2.js",
    "revision": "3c26f1d999ba68ea3cbfaec0a5cf0414"
  },
  {
    "url": "assets/js/123.be14cb03.js",
    "revision": "bdcb8a9af3417dad60dcecf89d53a864"
  },
  {
    "url": "assets/js/124.ee7880a3.js",
    "revision": "2d54f8fa8a361a6689801bc78c17443e"
  },
  {
    "url": "assets/js/125.e6408e3d.js",
    "revision": "72a1a1ce0929173cd991ee60813a4ec1"
  },
  {
    "url": "assets/js/126.15df23f3.js",
    "revision": "a684743088c1ba645883c37e6e248f7a"
  },
  {
    "url": "assets/js/127.a9e9c518.js",
    "revision": "6ea40e5a0e16a1d9168a86f83d9308df"
  },
  {
    "url": "assets/js/128.7d23b787.js",
    "revision": "fbbba4c9fc7af2e67e8189211e5ff0d9"
  },
  {
    "url": "assets/js/129.a53812ce.js",
    "revision": "5ad1d6304213a1206fb8932790def744"
  },
  {
    "url": "assets/js/13.d011e367.js",
    "revision": "2c9092031ed7b1bef450b7e1423f02b1"
  },
  {
    "url": "assets/js/130.d041618d.js",
    "revision": "66163608311941b932c9490c2b03394d"
  },
  {
    "url": "assets/js/131.0be06f23.js",
    "revision": "c0236ee6ae09e31579496792ae2edf29"
  },
  {
    "url": "assets/js/132.2ac34d18.js",
    "revision": "bb6c17a07bff2508dd8f6f3afff394e0"
  },
  {
    "url": "assets/js/133.2f243b96.js",
    "revision": "ce43be4b3e59d51a2270698308533758"
  },
  {
    "url": "assets/js/134.b545b91f.js",
    "revision": "1c5050e710b20bc3bf5143dcd5f9d9ea"
  },
  {
    "url": "assets/js/135.ed3e480f.js",
    "revision": "55fe752cd33045288541c18838b8e152"
  },
  {
    "url": "assets/js/136.0feb0bfa.js",
    "revision": "377f49d87b08709a3fc6024ac9116271"
  },
  {
    "url": "assets/js/137.b3a6fa6d.js",
    "revision": "02946b380a5b6dd846b7fad35214161f"
  },
  {
    "url": "assets/js/138.0d4c7676.js",
    "revision": "58081007e07d31729c8088d92ae53fa4"
  },
  {
    "url": "assets/js/139.0d6e56a4.js",
    "revision": "4299e8b077519cc79ddc75988541a3e6"
  },
  {
    "url": "assets/js/14.8329986a.js",
    "revision": "4a560d49ebf77b9689005c77f8840163"
  },
  {
    "url": "assets/js/140.59655dbd.js",
    "revision": "d9149df36e12b069be74c5d00f96fdba"
  },
  {
    "url": "assets/js/141.d59c00e4.js",
    "revision": "dfe3217951b49a27b0ea8814ea45a98e"
  },
  {
    "url": "assets/js/142.208b65b3.js",
    "revision": "8042fd996fea4fcc8dc1e940f322d9d0"
  },
  {
    "url": "assets/js/143.8f596095.js",
    "revision": "854778b38e8d9dd80da41de5722e7ce4"
  },
  {
    "url": "assets/js/144.a6c7ff47.js",
    "revision": "3aa1af6c746c2072d4c228b83f0d7c29"
  },
  {
    "url": "assets/js/145.d2ea79f7.js",
    "revision": "2b96499dc8b0b7be48a327b53d0436a0"
  },
  {
    "url": "assets/js/146.f3859dbe.js",
    "revision": "b9c9df565d5ee44306e6dbffead597d8"
  },
  {
    "url": "assets/js/147.c3be2f3c.js",
    "revision": "169fc120b60e55dd633ad0b16762af3a"
  },
  {
    "url": "assets/js/148.9dc1982d.js",
    "revision": "a6c589d56c9c5619eac30bcc44ca0fc2"
  },
  {
    "url": "assets/js/149.77085359.js",
    "revision": "f9815b918fdba6b9ac35b83db1059b64"
  },
  {
    "url": "assets/js/15.528cf7d4.js",
    "revision": "c2ad0f291ab5c7f1d5d37e3812d047fe"
  },
  {
    "url": "assets/js/150.2704446b.js",
    "revision": "1958859c46365b4fecffa05f93de2c70"
  },
  {
    "url": "assets/js/151.8798ab15.js",
    "revision": "7b9bac902e5749e657694c0c47f9e7a7"
  },
  {
    "url": "assets/js/152.8d46174b.js",
    "revision": "55e671540cda650aafd59e26e18c0e58"
  },
  {
    "url": "assets/js/153.bdba5725.js",
    "revision": "2b643620d384dda9ebec877e566c9409"
  },
  {
    "url": "assets/js/154.bb093f9a.js",
    "revision": "872f319d140bce5074c4b6e0ea87ad96"
  },
  {
    "url": "assets/js/155.c150c00c.js",
    "revision": "33bdd87ad080d51ea7313bfb3ba97d1c"
  },
  {
    "url": "assets/js/156.ad44df2c.js",
    "revision": "627a46c9e751f43992a34139f0e0500f"
  },
  {
    "url": "assets/js/157.48c024b8.js",
    "revision": "f6083c3413798108dea445674d79894c"
  },
  {
    "url": "assets/js/158.b3c3b689.js",
    "revision": "7a85e4d33aa425f8de3a254eff19a2d2"
  },
  {
    "url": "assets/js/159.4fe9521e.js",
    "revision": "59ff91dbeba2edb4add25d198fe9c9e9"
  },
  {
    "url": "assets/js/16.11a9778d.js",
    "revision": "03259cd527c0ba6ffa19a45441a5584f"
  },
  {
    "url": "assets/js/160.1f381d5b.js",
    "revision": "24d708c3486c509fd50dd03cd1433900"
  },
  {
    "url": "assets/js/161.3227530e.js",
    "revision": "b72d3801c57fe6355a4a9de833f44238"
  },
  {
    "url": "assets/js/162.ec782e38.js",
    "revision": "bfd6bf3811a8ae981656a9b8ced9b4bb"
  },
  {
    "url": "assets/js/163.2a92e068.js",
    "revision": "3856e0064c01b9a0f2b0165e56eddb63"
  },
  {
    "url": "assets/js/164.1be9fe83.js",
    "revision": "ec00b555f380a3655abd86782a0eb61f"
  },
  {
    "url": "assets/js/165.df81803f.js",
    "revision": "bce3a7bfdf726db8653310ae0c009018"
  },
  {
    "url": "assets/js/166.7ef925de.js",
    "revision": "ec33bd6bbaa929d1289db1eae011a87b"
  },
  {
    "url": "assets/js/167.3281f993.js",
    "revision": "11c16437a3eaa8887c3f7622f9d26592"
  },
  {
    "url": "assets/js/168.f29cc3c5.js",
    "revision": "165ce5a00372e72da502e25f2406ad76"
  },
  {
    "url": "assets/js/169.dd4b632f.js",
    "revision": "3baebfdc7d10890f308f329233833598"
  },
  {
    "url": "assets/js/17.163eeb15.js",
    "revision": "8e9b898f42c4f91f42c8caf37eee2d65"
  },
  {
    "url": "assets/js/170.c3c97b28.js",
    "revision": "7cca20804c4394b2bbb89c3caee6d8a9"
  },
  {
    "url": "assets/js/171.19c25ab4.js",
    "revision": "516dc6e3de26bcf3035e30946ffc2039"
  },
  {
    "url": "assets/js/172.78ca0b93.js",
    "revision": "234674582898cd424bc3c68d90f44e3f"
  },
  {
    "url": "assets/js/173.f81076b0.js",
    "revision": "f8881c0749421a52f698792378cae392"
  },
  {
    "url": "assets/js/174.0297d06a.js",
    "revision": "b9c93884841791f90d4d2d8799a103f1"
  },
  {
    "url": "assets/js/175.e8a99faa.js",
    "revision": "5c6efdbb61017d2629ab2992beef8c13"
  },
  {
    "url": "assets/js/176.09cc5e5b.js",
    "revision": "310425176e32e86b701098e580968839"
  },
  {
    "url": "assets/js/177.f6b8b2f5.js",
    "revision": "15282864766b3f745dceee3f8f645323"
  },
  {
    "url": "assets/js/178.8bb8cbc6.js",
    "revision": "eb10851ef8b9b19053f5ae889318a1ef"
  },
  {
    "url": "assets/js/179.ef9eebff.js",
    "revision": "a31a0ebc9660c93b08746ca887471a06"
  },
  {
    "url": "assets/js/18.473985e8.js",
    "revision": "620cc9d917f98668d6f777c178bfe93f"
  },
  {
    "url": "assets/js/180.b9a28cb4.js",
    "revision": "02d0fe958b05076704e928059fd2263d"
  },
  {
    "url": "assets/js/181.364ec885.js",
    "revision": "7755699480ccdd54316149c6bb07c9d9"
  },
  {
    "url": "assets/js/182.bc6d88f3.js",
    "revision": "dd27708d21e542cdbd193e2408f12066"
  },
  {
    "url": "assets/js/183.bf843c6b.js",
    "revision": "48951d73696f1149949e496b596c1349"
  },
  {
    "url": "assets/js/184.dcc8acf2.js",
    "revision": "6609d54a483721e0749cc7dee7d308e7"
  },
  {
    "url": "assets/js/185.2df09455.js",
    "revision": "e435284cfa5250832b86ff0d94dafa5b"
  },
  {
    "url": "assets/js/186.cfa57b73.js",
    "revision": "b034079406676b758159fd054626c557"
  },
  {
    "url": "assets/js/187.98da664a.js",
    "revision": "8cedb189fee4b6bf77944dc2d20a7cde"
  },
  {
    "url": "assets/js/188.b150a95a.js",
    "revision": "14cfe3cb53a6a57f3d9902e63dbde72e"
  },
  {
    "url": "assets/js/189.42dae358.js",
    "revision": "00bc5bb432facf38c4cabaf3e5e13a62"
  },
  {
    "url": "assets/js/19.39b69faa.js",
    "revision": "4e84da059714449a15ea366858839d79"
  },
  {
    "url": "assets/js/190.10354de1.js",
    "revision": "48bed02194a0e298e17be68c6abd38ea"
  },
  {
    "url": "assets/js/191.b32a923b.js",
    "revision": "0a8d3827e3571d3812faf8dc3d3d395e"
  },
  {
    "url": "assets/js/192.97a12529.js",
    "revision": "97d942726b161ec2839f59b97a93e91a"
  },
  {
    "url": "assets/js/193.362c4bdc.js",
    "revision": "bdb0c959e95c88264e55b3629dd81257"
  },
  {
    "url": "assets/js/194.b79f8ce5.js",
    "revision": "e61200657adeeccafc0902f551c2c410"
  },
  {
    "url": "assets/js/195.bda4e80b.js",
    "revision": "fe3f8d6517fa26833046af78df2c4398"
  },
  {
    "url": "assets/js/196.2bc0142f.js",
    "revision": "42b5ee34f4f520b315f891eb565de055"
  },
  {
    "url": "assets/js/197.3aae6537.js",
    "revision": "d4052522cee8e75b7ff27724090a58b0"
  },
  {
    "url": "assets/js/198.dd5e5733.js",
    "revision": "f02a00ae1ef461677e509c6b10a82896"
  },
  {
    "url": "assets/js/199.c75514fd.js",
    "revision": "399ab4bed42b7effd622547bf3d359a9"
  },
  {
    "url": "assets/js/2.7e40f83e.js",
    "revision": "92788fe05ac3544c18d4ba14ea5c0fb8"
  },
  {
    "url": "assets/js/20.fd3bda3b.js",
    "revision": "156f23ecfc39caa5d5a05d79a22c2834"
  },
  {
    "url": "assets/js/200.6806d4c5.js",
    "revision": "c8519825b8debc87561cae68b593660b"
  },
  {
    "url": "assets/js/201.c4aa69f9.js",
    "revision": "651335d89a463f20bdff3c4f78905762"
  },
  {
    "url": "assets/js/202.059a0e3f.js",
    "revision": "04863a61c288c85b75fdd9e81ad82932"
  },
  {
    "url": "assets/js/203.82a27c91.js",
    "revision": "aad2f47dd2d8958d6acca776ca1a35a6"
  },
  {
    "url": "assets/js/204.f9db0644.js",
    "revision": "106afe622f5ac7a44398ec3e716d9dc6"
  },
  {
    "url": "assets/js/205.b9a3d894.js",
    "revision": "6d3f52ab22e72dc7d36348344c5716bb"
  },
  {
    "url": "assets/js/206.497ad547.js",
    "revision": "8f73fdcbd9b3f48ab6813708b679113c"
  },
  {
    "url": "assets/js/207.6b12d911.js",
    "revision": "e9cc993a1afaa4e6ba963338f475f2e4"
  },
  {
    "url": "assets/js/208.c3798f55.js",
    "revision": "459656f85013b6d1a5e9d5945b2b1ff7"
  },
  {
    "url": "assets/js/209.74146332.js",
    "revision": "29450d6031888b6daed8cf0dba374085"
  },
  {
    "url": "assets/js/21.f3190f94.js",
    "revision": "2110eedad611ee941eee3e2e0a1208d8"
  },
  {
    "url": "assets/js/210.2a61ee00.js",
    "revision": "8f91dfc448240ecabc9940cf823d12b9"
  },
  {
    "url": "assets/js/211.15ea622c.js",
    "revision": "3110fcdfceb7021c23dc08d41b15e6e7"
  },
  {
    "url": "assets/js/212.04a3be32.js",
    "revision": "306180f323b28bc06f0df3fe1d8acf57"
  },
  {
    "url": "assets/js/213.160a40e7.js",
    "revision": "9a40b926ae527d9056e3ec071c9c4155"
  },
  {
    "url": "assets/js/214.3818301f.js",
    "revision": "9f8dfb27a233fa7ad39cee2352f53ace"
  },
  {
    "url": "assets/js/215.065aae94.js",
    "revision": "c0f32f9f03a3f006dc92dfcc6cc77dee"
  },
  {
    "url": "assets/js/216.94418f50.js",
    "revision": "a5173d480439f172f1ef711ba919648c"
  },
  {
    "url": "assets/js/217.0eba0d98.js",
    "revision": "6ac8fab5ca143ab5b92cc4da38620e11"
  },
  {
    "url": "assets/js/218.7ce686b6.js",
    "revision": "936f89eb02f602cfe19cae27ce564167"
  },
  {
    "url": "assets/js/219.93f89e7b.js",
    "revision": "da0f46fe813dcf3e885ca1d0379480e3"
  },
  {
    "url": "assets/js/22.899a76cc.js",
    "revision": "4ffc92ca0f0848b8d62a497403f6b36c"
  },
  {
    "url": "assets/js/220.680db068.js",
    "revision": "14fa4210abb87fac1462648ad57fa2d7"
  },
  {
    "url": "assets/js/221.bf85f727.js",
    "revision": "f875c25643908cb644f9d36370dd2905"
  },
  {
    "url": "assets/js/222.9452c180.js",
    "revision": "27b7fd8f5e55a36796bb44f2b49e0c2c"
  },
  {
    "url": "assets/js/223.82b27d9d.js",
    "revision": "aaa11d45b036bb8fcf61bbce731d732d"
  },
  {
    "url": "assets/js/224.d7a1fdf5.js",
    "revision": "00a0b3ed23f50a01e4cbfd7045157d3d"
  },
  {
    "url": "assets/js/225.4ec7f7cd.js",
    "revision": "bbc8947c0c47b322a426a542979303ab"
  },
  {
    "url": "assets/js/226.8ac3abca.js",
    "revision": "3ca04ccab68d003a7c8f9ac5519f30a1"
  },
  {
    "url": "assets/js/227.c2223dc9.js",
    "revision": "5a6353ef05050cf0d557bab214713722"
  },
  {
    "url": "assets/js/228.fda650aa.js",
    "revision": "313ffe0cb4267f13939e988894c989e1"
  },
  {
    "url": "assets/js/229.68f82b94.js",
    "revision": "3ef62434040b32c483dfd3a0bb31bade"
  },
  {
    "url": "assets/js/23.aa279cb1.js",
    "revision": "372b66cb5c6ff47c2882471043bcc227"
  },
  {
    "url": "assets/js/230.2d91ede8.js",
    "revision": "82915182d9aca353509e0da51066868a"
  },
  {
    "url": "assets/js/231.c8809cdf.js",
    "revision": "646e8b79e153ba988e24d0865bf951af"
  },
  {
    "url": "assets/js/232.c8822d4b.js",
    "revision": "f5f8dfa5a7817ee37e6f461e9b93d5ee"
  },
  {
    "url": "assets/js/233.957a7783.js",
    "revision": "64999841bd21985c9c3838ad2be0df5c"
  },
  {
    "url": "assets/js/234.e22ec17f.js",
    "revision": "be5a96d01bfefc0ce7b2dae1a80589aa"
  },
  {
    "url": "assets/js/235.2f88f38e.js",
    "revision": "954e366db2effbb5c961c5ddca4da948"
  },
  {
    "url": "assets/js/236.d74802e5.js",
    "revision": "7363552cd1b9954d91ea8daed0f67260"
  },
  {
    "url": "assets/js/237.2ed02fab.js",
    "revision": "3107c89dec383d213bbc45455713c471"
  },
  {
    "url": "assets/js/238.a5fa4144.js",
    "revision": "d9d2b0958360bf3a12f78cca66c63bd7"
  },
  {
    "url": "assets/js/239.828257fc.js",
    "revision": "3fcae8bef021c3671e7e43ed8b9759a6"
  },
  {
    "url": "assets/js/24.4e218852.js",
    "revision": "c9ad11212794f005b4b43488b445e91f"
  },
  {
    "url": "assets/js/240.bafd1e0f.js",
    "revision": "9f646dfbc28e71422075443cd3c97517"
  },
  {
    "url": "assets/js/241.f5a6e0af.js",
    "revision": "ce8de636bee2fc5597496b28f169f0f5"
  },
  {
    "url": "assets/js/242.7baf7ad4.js",
    "revision": "646d2d093dbe18ef4c077066e4801204"
  },
  {
    "url": "assets/js/243.88bc4697.js",
    "revision": "3bfcd13e17c011db0655acd3b8dcf92b"
  },
  {
    "url": "assets/js/244.c1a3f62f.js",
    "revision": "bcab2572315777911cf34201bd6d762e"
  },
  {
    "url": "assets/js/245.26b09dee.js",
    "revision": "9d8b9cff27132a1e4d9320a67687f89b"
  },
  {
    "url": "assets/js/246.04923339.js",
    "revision": "06426956eb0fc6ce01f04a2903cb810b"
  },
  {
    "url": "assets/js/247.14dccb68.js",
    "revision": "c33997a23ab5421e4b70e36f3a77384d"
  },
  {
    "url": "assets/js/248.80a96412.js",
    "revision": "c7e72d7b449a2b86851e3a8b9b397042"
  },
  {
    "url": "assets/js/249.e90b24a8.js",
    "revision": "d159172aedb0c0a6e1a5e27764952cc9"
  },
  {
    "url": "assets/js/25.7a1465b5.js",
    "revision": "89413b0d4303a79c101f1951bc3d82f4"
  },
  {
    "url": "assets/js/250.68f90986.js",
    "revision": "909423882bbd4f5dc69b7e345755ffc6"
  },
  {
    "url": "assets/js/251.9a9ba0d3.js",
    "revision": "505f1c6ec6212c9eb32019da648838b7"
  },
  {
    "url": "assets/js/252.034a6066.js",
    "revision": "771462bb981ed9c3e461782c3edf99dd"
  },
  {
    "url": "assets/js/253.dd8e4460.js",
    "revision": "0e3cc6aafd574d4adbc9ec5fd9b6aca5"
  },
  {
    "url": "assets/js/254.f5e9da8d.js",
    "revision": "b8b98bad51ddd1123d161f6f3979ea7d"
  },
  {
    "url": "assets/js/255.60f79b25.js",
    "revision": "e7f63cb14d2fc8124db7478c0b3338aa"
  },
  {
    "url": "assets/js/256.58f13301.js",
    "revision": "b900de181c55d075b07e18a07373ceb9"
  },
  {
    "url": "assets/js/257.5af787c0.js",
    "revision": "7a161ad912691556ac26498682ca4137"
  },
  {
    "url": "assets/js/258.a4710cd5.js",
    "revision": "8820dcc044a78c0ab30d67e09455895e"
  },
  {
    "url": "assets/js/259.71bce5d7.js",
    "revision": "770256e3b1e9e52d72ed3c2e914bf29d"
  },
  {
    "url": "assets/js/26.7bfae0c9.js",
    "revision": "95f4988da1a97d028ebf9b5b74dfa640"
  },
  {
    "url": "assets/js/260.d7018162.js",
    "revision": "18668d9b8507743749e0a2556916cb3f"
  },
  {
    "url": "assets/js/261.5ba4fb2f.js",
    "revision": "90bcd473a6711792f6b78437c5630633"
  },
  {
    "url": "assets/js/262.8edf90a4.js",
    "revision": "ffbabe12b769dee59825e2cc5cc1d1dc"
  },
  {
    "url": "assets/js/263.ad10d930.js",
    "revision": "28e2477662f76babf437f399b9a0c69b"
  },
  {
    "url": "assets/js/264.8daa1793.js",
    "revision": "c51fe39132516df239e236bd97e17372"
  },
  {
    "url": "assets/js/265.7b6b0f36.js",
    "revision": "b7a487eacdc9311c226dafb7f86ccc61"
  },
  {
    "url": "assets/js/266.e8c0d874.js",
    "revision": "292a42e047957262a66028c407866b51"
  },
  {
    "url": "assets/js/267.4a4a9f96.js",
    "revision": "18d13d010d56a3797a07e68fc9a02554"
  },
  {
    "url": "assets/js/268.65cbdd3b.js",
    "revision": "ce4dd0db381e442b6962cf1f5ecfed68"
  },
  {
    "url": "assets/js/269.2ae59b6c.js",
    "revision": "c2b7adacb1340bd50bf0a9740537ee18"
  },
  {
    "url": "assets/js/27.88706a50.js",
    "revision": "8727af17d0a75aa9fb369f6e928ddd00"
  },
  {
    "url": "assets/js/270.abb1fbc5.js",
    "revision": "ef903254c5867a07351c99354b9ed694"
  },
  {
    "url": "assets/js/271.77d2028d.js",
    "revision": "f0e0b98965f6fcb2132e813f9adbfacd"
  },
  {
    "url": "assets/js/272.42c4967f.js",
    "revision": "b1ad270b5c6eada7e75567f2df9a8f8c"
  },
  {
    "url": "assets/js/273.ed76989c.js",
    "revision": "9f29135a63f0856bca9641999513ebb7"
  },
  {
    "url": "assets/js/274.e4b8cb95.js",
    "revision": "bed3df3d252fe3b1f433c01dd804d92a"
  },
  {
    "url": "assets/js/275.1adf726d.js",
    "revision": "bc2b65f328b5ba49383c5268a6243385"
  },
  {
    "url": "assets/js/276.b5c334e8.js",
    "revision": "ad40e89025d502f578013eb0d57d075f"
  },
  {
    "url": "assets/js/277.b289eb1c.js",
    "revision": "9fd6c2cfab9f91517a292be5278aacf0"
  },
  {
    "url": "assets/js/278.a97c42fd.js",
    "revision": "9d88652e87094f2161c3d5ee974c7254"
  },
  {
    "url": "assets/js/279.cb75a42b.js",
    "revision": "e3f494bd9542edc0cb119a04fc5819d7"
  },
  {
    "url": "assets/js/28.fe2f5f7a.js",
    "revision": "96398e28b64c70f889ace2992b17fd31"
  },
  {
    "url": "assets/js/280.3eff2292.js",
    "revision": "820ba15c3ba5c710fd7f2cb4129d00e3"
  },
  {
    "url": "assets/js/281.d502ba2a.js",
    "revision": "015a9c467ca2a54f7d94accde27e4c9e"
  },
  {
    "url": "assets/js/282.a155ae24.js",
    "revision": "2f33978d03711002eb2dbc92d12c1f64"
  },
  {
    "url": "assets/js/283.010901db.js",
    "revision": "a9817de3b44b88fe93e76778b801cd78"
  },
  {
    "url": "assets/js/284.bb5fb6d0.js",
    "revision": "07286410a5547d9e2812888c0a885475"
  },
  {
    "url": "assets/js/285.a99b3968.js",
    "revision": "bd14b9d14a384ab796f961b5bfef5863"
  },
  {
    "url": "assets/js/286.46f70d48.js",
    "revision": "0d53dadbdd14e1871313c9136636bdd2"
  },
  {
    "url": "assets/js/287.c07b3464.js",
    "revision": "540e1070d2d86a0c161c88a40bff8789"
  },
  {
    "url": "assets/js/288.5a0fadac.js",
    "revision": "618c2e1b3a63ac8b7b8a58e25d308a3a"
  },
  {
    "url": "assets/js/289.f77f4c3e.js",
    "revision": "0913f39482aeaf02df14f755ea7fbe35"
  },
  {
    "url": "assets/js/29.f9608fa9.js",
    "revision": "bca694a2e3692c12b1f87018f9ca522e"
  },
  {
    "url": "assets/js/290.f93c1fc8.js",
    "revision": "462b3d9bd33243b1b72628c0dafe4238"
  },
  {
    "url": "assets/js/291.6e3f610c.js",
    "revision": "8091a32776037a1343b684aea25e001c"
  },
  {
    "url": "assets/js/292.06c92e07.js",
    "revision": "426e13e8657979682da3ae38c9411add"
  },
  {
    "url": "assets/js/293.aa4ae383.js",
    "revision": "ff1735988bb352b276bbf437d9ffbc93"
  },
  {
    "url": "assets/js/294.d8efdb86.js",
    "revision": "e43a374dfe46ca5378c4c0947e5a4117"
  },
  {
    "url": "assets/js/295.6f54035c.js",
    "revision": "aaf927f2b7d036a73a477be8a42c9d8f"
  },
  {
    "url": "assets/js/296.c37371a6.js",
    "revision": "6d93cf4dcdcb9e9ee6fa816481aaaacb"
  },
  {
    "url": "assets/js/297.4b5ca3ae.js",
    "revision": "1b47b507bb2cca1c8eb641bea2da6e1c"
  },
  {
    "url": "assets/js/298.cb046c35.js",
    "revision": "6e71c13b2d2ce5bfa8153fc49646faf3"
  },
  {
    "url": "assets/js/299.d1e309ca.js",
    "revision": "f4a2237b519a3f6f3d43bcf6ef3d4490"
  },
  {
    "url": "assets/js/3.005050bb.js",
    "revision": "ae68d5035b7773a4fb759b1b3b265d2c"
  },
  {
    "url": "assets/js/30.08b245be.js",
    "revision": "d5ba05eda1c82ba37e8fd64985c22eb6"
  },
  {
    "url": "assets/js/300.b454709e.js",
    "revision": "4d7021c23646fc2c06d8b28f6824b9cb"
  },
  {
    "url": "assets/js/301.dd1fb494.js",
    "revision": "686ba660475cd57d5c7a477b9e5da47e"
  },
  {
    "url": "assets/js/302.48841c97.js",
    "revision": "e1eb083a4e0e6f6005aba3cb9ca3cf1a"
  },
  {
    "url": "assets/js/303.c387aa9a.js",
    "revision": "3f6b6127aa02f8a21081447314192bb1"
  },
  {
    "url": "assets/js/304.8935a5a4.js",
    "revision": "058a27ed90f1c60c3378234c8fd249e1"
  },
  {
    "url": "assets/js/305.4166e448.js",
    "revision": "410420eb451ff7437ef8c7e8aaa3ddc9"
  },
  {
    "url": "assets/js/306.e37e6ce6.js",
    "revision": "b75e96a522bba40ab825e3d94023795b"
  },
  {
    "url": "assets/js/307.1b10028e.js",
    "revision": "d2873a5eab40d257f0e8b283a8080976"
  },
  {
    "url": "assets/js/308.14fd03b8.js",
    "revision": "7c2497daf89fcc165c1acd6170d9a5b2"
  },
  {
    "url": "assets/js/309.6bd31a70.js",
    "revision": "45b7d57910e1c06c9a7f2069bf4ef0cb"
  },
  {
    "url": "assets/js/31.7e53b3e8.js",
    "revision": "a6728ce23b2b278fc9eeb3d658927780"
  },
  {
    "url": "assets/js/310.64aa791e.js",
    "revision": "c21d48b13d46dfc61a697ae318215bd1"
  },
  {
    "url": "assets/js/311.248e32a9.js",
    "revision": "e9df27798ab635d772630609c0b75c61"
  },
  {
    "url": "assets/js/312.f6e1952e.js",
    "revision": "49b5e9042c88f114071ff6b6ec9bf954"
  },
  {
    "url": "assets/js/313.d35a1baf.js",
    "revision": "273d53ca43bae3cdbb7cee995a43db8e"
  },
  {
    "url": "assets/js/314.8549bf9c.js",
    "revision": "13a2454930279bbe13b464a0e2cda228"
  },
  {
    "url": "assets/js/315.17043a35.js",
    "revision": "da8c9a1fc1651e9895cf6e6ec7b782cb"
  },
  {
    "url": "assets/js/316.4fefbe96.js",
    "revision": "d2f73e6402773aaf21a04f61ec6c7f11"
  },
  {
    "url": "assets/js/317.1819666c.js",
    "revision": "2cf4be355b5d2358bcb60bf61c7af9c4"
  },
  {
    "url": "assets/js/318.5e2b06bd.js",
    "revision": "fe825fdf4409bbb4780e2f5e3a7b4781"
  },
  {
    "url": "assets/js/319.5788fb15.js",
    "revision": "a247578d1685dabf8b5944b86474a16d"
  },
  {
    "url": "assets/js/32.31600f0f.js",
    "revision": "d5e3c2246ce7a43153ee5dbc93155774"
  },
  {
    "url": "assets/js/320.2a0b7500.js",
    "revision": "7abf50480477bad964b65f84872f8fe7"
  },
  {
    "url": "assets/js/321.bfbc6b29.js",
    "revision": "5f1bd96fc741a9ff5408cbba9f4c6ad2"
  },
  {
    "url": "assets/js/322.383b2003.js",
    "revision": "2af548ab9e705cc7ea79d42961f4fcac"
  },
  {
    "url": "assets/js/323.cf1cdbf8.js",
    "revision": "7f369299ccea5904a65ef2f55182a00d"
  },
  {
    "url": "assets/js/324.21171fdc.js",
    "revision": "2d82cfa05c9602f89f99b096f79e48fc"
  },
  {
    "url": "assets/js/325.a3ff2172.js",
    "revision": "f2326d145b4fd06ff23f3100cb6111b1"
  },
  {
    "url": "assets/js/326.9e1cf40e.js",
    "revision": "18415dcb75fe9b1bebf1424ddb9d47a3"
  },
  {
    "url": "assets/js/327.8660e8c1.js",
    "revision": "039fd187a611a0cee568e410fdee2d5c"
  },
  {
    "url": "assets/js/328.73595e50.js",
    "revision": "8e1ef9ad2dc14a4c8c89d9646dc2fd1c"
  },
  {
    "url": "assets/js/329.1f5cf12e.js",
    "revision": "65cadc15a8adeb46650b753791ebd418"
  },
  {
    "url": "assets/js/33.eda9730b.js",
    "revision": "995c8ea3cd4b9d23eb26e473ca3d4e52"
  },
  {
    "url": "assets/js/330.f49de74f.js",
    "revision": "3d28444bcd6bcea69cd71d55b0f4c34e"
  },
  {
    "url": "assets/js/331.1e3e4fda.js",
    "revision": "de5aab6db154b8b20fb283e0de7ec498"
  },
  {
    "url": "assets/js/332.ee921ae5.js",
    "revision": "bf2143a70735038227981cf63d69ae63"
  },
  {
    "url": "assets/js/333.968294bc.js",
    "revision": "cd379421a304bc59d025bf1d8fce2406"
  },
  {
    "url": "assets/js/334.f16c6e89.js",
    "revision": "8847b57c6702f27dbf9c1cfcb50ebf34"
  },
  {
    "url": "assets/js/335.66959af1.js",
    "revision": "14763a2e704cc976bfe187e4592b8756"
  },
  {
    "url": "assets/js/336.121c5428.js",
    "revision": "d0a2ccd87262f07b9c69299e9a46d9b1"
  },
  {
    "url": "assets/js/337.cc0f4e1e.js",
    "revision": "bbccda12ac5fe8d5fa8d0ca80e56a0ce"
  },
  {
    "url": "assets/js/338.b83af697.js",
    "revision": "01d9da00987558d8fe23602497407ab9"
  },
  {
    "url": "assets/js/339.ee39373f.js",
    "revision": "10c305078d46998951f69e655e599350"
  },
  {
    "url": "assets/js/34.f4507c91.js",
    "revision": "803b80fae6c2b96cd876a1dbc3277461"
  },
  {
    "url": "assets/js/340.91583607.js",
    "revision": "c9506d86f011a041eb03b321ff04999b"
  },
  {
    "url": "assets/js/341.756d97ab.js",
    "revision": "aab4c4cb5403c0b88caa664c1286f23d"
  },
  {
    "url": "assets/js/342.2aa4c618.js",
    "revision": "897381a7d49b266683d54a2d60f5acd1"
  },
  {
    "url": "assets/js/343.10c74add.js",
    "revision": "ac838c3b14cecf8c783e1cf2ccfc9259"
  },
  {
    "url": "assets/js/344.40007075.js",
    "revision": "dbc59544e531ae24fa1aa4b071ea8bc3"
  },
  {
    "url": "assets/js/345.74a94a00.js",
    "revision": "95c23541bc7fd35b5553e47ded31cad7"
  },
  {
    "url": "assets/js/346.0bf5eada.js",
    "revision": "1789a7e8ddda895ed025af7257f576a1"
  },
  {
    "url": "assets/js/347.ea02d8da.js",
    "revision": "d2f3ba429e89cefa5c07003ceede3a58"
  },
  {
    "url": "assets/js/348.5b01a604.js",
    "revision": "cc814d6ff570bb30a59a63b1269dd356"
  },
  {
    "url": "assets/js/349.5a59b71f.js",
    "revision": "639c8f4e6c4b70e53021933090345565"
  },
  {
    "url": "assets/js/35.4fd4de58.js",
    "revision": "e58e7bb1ba226b24ffd5225f7d4057c3"
  },
  {
    "url": "assets/js/350.cb8be9de.js",
    "revision": "c70839cfb5bf52b65362fd0606ccbfb5"
  },
  {
    "url": "assets/js/351.0bc5c110.js",
    "revision": "58c3718f1c2c455ce1b7eca7e3c3d6f3"
  },
  {
    "url": "assets/js/352.bf94c17a.js",
    "revision": "7f996b94ba57f6e2cb09f9b1ab382e62"
  },
  {
    "url": "assets/js/353.17b50361.js",
    "revision": "bab610b38852f6867a68729f51033255"
  },
  {
    "url": "assets/js/354.a426fd01.js",
    "revision": "f4ca9466ea0d569bf03a1c7a120478ca"
  },
  {
    "url": "assets/js/355.1c3e9047.js",
    "revision": "edf5275ce88423a53ca525991a709e59"
  },
  {
    "url": "assets/js/356.e868a3b4.js",
    "revision": "987c6945e3389260cceb2d067419184d"
  },
  {
    "url": "assets/js/357.dd3eab94.js",
    "revision": "2820b87167c2af65173d48dec1fc2d2b"
  },
  {
    "url": "assets/js/358.37606dd1.js",
    "revision": "02e9228d33a02f3edba69fedb2dd89a8"
  },
  {
    "url": "assets/js/359.08acadac.js",
    "revision": "721ebcd50d495f36497a7dd924d8ca6a"
  },
  {
    "url": "assets/js/36.a59c98e5.js",
    "revision": "96b38f388bee38daea63327e4e3e1185"
  },
  {
    "url": "assets/js/360.9037138a.js",
    "revision": "852f60811fd351d388770ba43540481f"
  },
  {
    "url": "assets/js/361.cbd7d78d.js",
    "revision": "92bce0acd0a570e61c69f9747459f3d8"
  },
  {
    "url": "assets/js/362.40bd9fba.js",
    "revision": "03b2a22ade850d3b98bb714c91e00ed8"
  },
  {
    "url": "assets/js/363.83706f06.js",
    "revision": "23ae22856543765cb5048106899763d7"
  },
  {
    "url": "assets/js/364.c02a9d2a.js",
    "revision": "8d8dcd65664743b256db66b017e5fef2"
  },
  {
    "url": "assets/js/365.08051582.js",
    "revision": "082d1d3416dc0d0f827acff325cb68a1"
  },
  {
    "url": "assets/js/366.5ca0479b.js",
    "revision": "b07084923ac7286ecb5cefaccdb17179"
  },
  {
    "url": "assets/js/367.96611892.js",
    "revision": "1980709149a6a025473c7829ebacc290"
  },
  {
    "url": "assets/js/368.bc6f6441.js",
    "revision": "f3a71c263efb4495343c6c92d71e578f"
  },
  {
    "url": "assets/js/369.6c4802d5.js",
    "revision": "f2a58c04165e818562e3dcbdded2514f"
  },
  {
    "url": "assets/js/37.7557b327.js",
    "revision": "279024e3d9cca6c93ba81eef300ded8d"
  },
  {
    "url": "assets/js/370.06a1a57b.js",
    "revision": "ccd51536f990538dec598f74d42fc59f"
  },
  {
    "url": "assets/js/371.fee069b4.js",
    "revision": "74e246c51887f5a936e2870b6122836b"
  },
  {
    "url": "assets/js/372.a0e06ffe.js",
    "revision": "619b19103f7991760edac9b05d546c00"
  },
  {
    "url": "assets/js/373.da8df312.js",
    "revision": "fdcc0074f788bffb3a02cf43f0d8359b"
  },
  {
    "url": "assets/js/374.7f1ab250.js",
    "revision": "f05204fb8891f7a400964eb916f929d2"
  },
  {
    "url": "assets/js/375.34dbf7fd.js",
    "revision": "aeb3f47929f4c6d4871f8dea9332f867"
  },
  {
    "url": "assets/js/376.4dd26577.js",
    "revision": "a3de3081c0a819e05f9ada955cf87f61"
  },
  {
    "url": "assets/js/377.71580512.js",
    "revision": "624aad66789e5b5c5e57d09f0242e606"
  },
  {
    "url": "assets/js/378.85d111ea.js",
    "revision": "879fea96b1a01330a42f805a608693de"
  },
  {
    "url": "assets/js/379.9b21c56d.js",
    "revision": "5c07111dd3b10edcac1d20e6a127fc32"
  },
  {
    "url": "assets/js/38.2b183ea2.js",
    "revision": "a55af763e378979580ec731adb1ba5e2"
  },
  {
    "url": "assets/js/380.9c396722.js",
    "revision": "ea4b4149831420ab1849770ae4b7322e"
  },
  {
    "url": "assets/js/381.233232ab.js",
    "revision": "d5dd6351158a7d1d5a9d9d656cb2ce6a"
  },
  {
    "url": "assets/js/382.6a45f6b4.js",
    "revision": "c7bbbc7df4555bd6b29f45c13d305acc"
  },
  {
    "url": "assets/js/383.8969c8c1.js",
    "revision": "063ac7689eff69272196aef6da8d9b02"
  },
  {
    "url": "assets/js/384.f5c564b2.js",
    "revision": "e42c0c713a3aec4e490db49fb3cab234"
  },
  {
    "url": "assets/js/385.3a1c85d8.js",
    "revision": "1e5433d20c395a6abea6e12b0660190f"
  },
  {
    "url": "assets/js/386.6ef80d7f.js",
    "revision": "f6b5e704a84f985dc1062e4aac2eace1"
  },
  {
    "url": "assets/js/387.a928a25f.js",
    "revision": "1a4a6fa57146589e30731f1ff7bd9138"
  },
  {
    "url": "assets/js/388.9d4aa338.js",
    "revision": "db106c49dfb9f6fe2bd0a8267bc6d315"
  },
  {
    "url": "assets/js/389.3b5d2ae9.js",
    "revision": "60448d73e9cd4d99a925a8a023158bf1"
  },
  {
    "url": "assets/js/39.228aaf04.js",
    "revision": "cf149e13e7731bde24c13cfb9a9edfc2"
  },
  {
    "url": "assets/js/390.b7143873.js",
    "revision": "ae32379af54c03e25cec01c7ec56a12b"
  },
  {
    "url": "assets/js/391.1e219156.js",
    "revision": "798fc101e17edee5eefe3c553da1f303"
  },
  {
    "url": "assets/js/392.15dfce75.js",
    "revision": "d3680c1831f541a54529bc68d6cc94e4"
  },
  {
    "url": "assets/js/393.58f4c0ea.js",
    "revision": "681626c2bb85c4d95788216f9203c61a"
  },
  {
    "url": "assets/js/394.259cd6df.js",
    "revision": "e01cb62bd856f6dbc591ef3c74e0c635"
  },
  {
    "url": "assets/js/395.bf108a19.js",
    "revision": "04121936299399a429f1096c7d06c394"
  },
  {
    "url": "assets/js/396.b2bfed3e.js",
    "revision": "ea6892342e178630fd1d908ddfea5a56"
  },
  {
    "url": "assets/js/397.8816d496.js",
    "revision": "77776bf269c0e0eb54a2b9b956f34fb6"
  },
  {
    "url": "assets/js/398.a3823ad6.js",
    "revision": "c8550a338283917ec2028f8564c74f80"
  },
  {
    "url": "assets/js/399.345967d4.js",
    "revision": "991c185d01fe45205a54129ba8cc18a4"
  },
  {
    "url": "assets/js/4.086f9ce5.js",
    "revision": "436f0a9500ef7c3f8c063a0eaece6335"
  },
  {
    "url": "assets/js/40.7ec4c27c.js",
    "revision": "b2041fe43a89cc930bbe757deed80c2f"
  },
  {
    "url": "assets/js/400.6e0cc726.js",
    "revision": "5e4b9a58ad820f2f38d9b9025a39e931"
  },
  {
    "url": "assets/js/401.0aa28507.js",
    "revision": "d454595d2b8d4139469f4aff86b13c16"
  },
  {
    "url": "assets/js/402.a5bdf5dd.js",
    "revision": "bc208f026527c00752b43e9d85010e75"
  },
  {
    "url": "assets/js/403.db427192.js",
    "revision": "f4a420a8146a7451527775195f9a1871"
  },
  {
    "url": "assets/js/404.5d0e6709.js",
    "revision": "c2d44887266fdc1ae2d1b857219373d4"
  },
  {
    "url": "assets/js/405.b89a22d2.js",
    "revision": "2180c2b2bfffa8c4812d8ddedbae579f"
  },
  {
    "url": "assets/js/406.b2005953.js",
    "revision": "ed9515b57b658308d418efbfde84831d"
  },
  {
    "url": "assets/js/407.6e695a7a.js",
    "revision": "97da44c5f3303226b3815464930bfc3e"
  },
  {
    "url": "assets/js/408.816112de.js",
    "revision": "2451c2da7e0bb5ef9b455d9b97b45cbc"
  },
  {
    "url": "assets/js/409.d6d65aef.js",
    "revision": "4f59c9af1f35b91a47847d7f7a97c454"
  },
  {
    "url": "assets/js/41.0725a04b.js",
    "revision": "2d337b51823b6b363d3686946b150938"
  },
  {
    "url": "assets/js/410.1ea4201b.js",
    "revision": "e368e2f283920ac9fb586626602c53ef"
  },
  {
    "url": "assets/js/411.77df7106.js",
    "revision": "c26dd9dbfcb940e1ccf4e0db7bede25b"
  },
  {
    "url": "assets/js/412.50ad7155.js",
    "revision": "65dd2681a52aa06cc00316f3e1023553"
  },
  {
    "url": "assets/js/413.c786aab8.js",
    "revision": "ef78d0a5d18c3c2a5544376ba3118b42"
  },
  {
    "url": "assets/js/414.ef95845e.js",
    "revision": "d604d69513a21058f56534f557127dbc"
  },
  {
    "url": "assets/js/415.c16153cc.js",
    "revision": "7d757389dc035f0d521dc10ea0c41a6c"
  },
  {
    "url": "assets/js/416.cf788a6d.js",
    "revision": "308fda66289f2e998663ac5cdefa6018"
  },
  {
    "url": "assets/js/417.1bd76410.js",
    "revision": "2c30604606d1cc6de316d32c5e8a57b0"
  },
  {
    "url": "assets/js/418.8d494663.js",
    "revision": "6721c29098f53438624f7952bb8ced48"
  },
  {
    "url": "assets/js/419.068e649a.js",
    "revision": "fa57b512d8931e6816c4c1a7ce417714"
  },
  {
    "url": "assets/js/42.42f15f7d.js",
    "revision": "6e078e1008a9318ae054153f801bae8d"
  },
  {
    "url": "assets/js/420.7c4951e7.js",
    "revision": "7e71fcabe5598a8b22ba9e7ad2a62576"
  },
  {
    "url": "assets/js/421.c4b12448.js",
    "revision": "3b7f3be019e8b159b07a56a9778af7be"
  },
  {
    "url": "assets/js/422.206eafa9.js",
    "revision": "b5adbc98cd3ff81b3b6d8b149eb50496"
  },
  {
    "url": "assets/js/423.f78f297f.js",
    "revision": "3bf3f7359d3dc4e84059bc8f56df876a"
  },
  {
    "url": "assets/js/424.3f6143f6.js",
    "revision": "a0003d061eb6788b3d07ac5065cfd42c"
  },
  {
    "url": "assets/js/425.5f0df00e.js",
    "revision": "786129fe7768f8e504b1d80602b2f712"
  },
  {
    "url": "assets/js/426.e0f4b47a.js",
    "revision": "d8f7390ff8f48a15a70060029dad1789"
  },
  {
    "url": "assets/js/427.072b8868.js",
    "revision": "b712b6e350b4c03af30980b5267b71fc"
  },
  {
    "url": "assets/js/428.bf4cb613.js",
    "revision": "91d89e71820906ff1063d48b29dd5706"
  },
  {
    "url": "assets/js/429.7964192c.js",
    "revision": "9602b635a9784d0770eb032d80ff83d6"
  },
  {
    "url": "assets/js/43.07f6cfab.js",
    "revision": "28e5c34c92a1bdb0a79798a13728b328"
  },
  {
    "url": "assets/js/430.05856ab5.js",
    "revision": "aecfb64b9234a59a6f939f1a87b6afaf"
  },
  {
    "url": "assets/js/431.100c69c0.js",
    "revision": "f0074cda09de10cb48a92399934cc2d0"
  },
  {
    "url": "assets/js/432.50fa2a97.js",
    "revision": "1a62dd7c552c542795965a3acfd0df5e"
  },
  {
    "url": "assets/js/433.0d1f470c.js",
    "revision": "249020b973457a66cab1116838d2577a"
  },
  {
    "url": "assets/js/434.da69a4b7.js",
    "revision": "b3ce3395cf66446a2107d38bcb674eb8"
  },
  {
    "url": "assets/js/435.32d62852.js",
    "revision": "8ddd4a80d7e7c4be50abcd13f492b6a0"
  },
  {
    "url": "assets/js/436.08a9118a.js",
    "revision": "d9b803e496da77e37b20b7f13cced5e1"
  },
  {
    "url": "assets/js/437.77815aa1.js",
    "revision": "9b94d47ddc211aa8a3abd7da3e925c3e"
  },
  {
    "url": "assets/js/438.b4438a32.js",
    "revision": "6ba4eadd8945cce07864ae3eb5cc3c9e"
  },
  {
    "url": "assets/js/439.736a741b.js",
    "revision": "2a05a342895630f53f8e1c3df1558e79"
  },
  {
    "url": "assets/js/44.0d1fbf37.js",
    "revision": "cbfa8979b0bd52c15a4864dfb2cb217e"
  },
  {
    "url": "assets/js/440.1f568251.js",
    "revision": "70f323d2ccb16534ff271dae7d88307f"
  },
  {
    "url": "assets/js/441.d6b78586.js",
    "revision": "b993034618c8bbcd1cf5bdf4dc615bf0"
  },
  {
    "url": "assets/js/442.2c57c62b.js",
    "revision": "a64f65024cda3a0e5df952eccd4c05ab"
  },
  {
    "url": "assets/js/443.357803be.js",
    "revision": "8175500354ff5a2f3c539d207cc333aa"
  },
  {
    "url": "assets/js/444.9e6862b8.js",
    "revision": "beb44036e9e47366ef960e7d4ac93e6f"
  },
  {
    "url": "assets/js/445.a21f3cfd.js",
    "revision": "023d606c7e5cb5ff5aab45acdd31b796"
  },
  {
    "url": "assets/js/446.c322a424.js",
    "revision": "9795bb6e17b8a7c80fb75247cae8758e"
  },
  {
    "url": "assets/js/447.7611fc74.js",
    "revision": "80ddd4346073064ee6ae3ba1b960a2f0"
  },
  {
    "url": "assets/js/448.7fbf5d9f.js",
    "revision": "fd64cc01c3c667585a804a170743db4c"
  },
  {
    "url": "assets/js/449.24678177.js",
    "revision": "c549fd6311de6a6173da96a7043b8741"
  },
  {
    "url": "assets/js/45.ac94bd11.js",
    "revision": "4c2bd8ac4c50500234f7c1866a1b4474"
  },
  {
    "url": "assets/js/450.8db6b550.js",
    "revision": "a59c661c2bee46ddd51aadf1392b2885"
  },
  {
    "url": "assets/js/451.19a27bb5.js",
    "revision": "7d60fc3ea66ec8198a075dbbca5d0ab6"
  },
  {
    "url": "assets/js/452.530cd2f8.js",
    "revision": "af79a3d279846384687c01d63e3f544e"
  },
  {
    "url": "assets/js/453.51cf0c3e.js",
    "revision": "72e656af76b3e3ea1283612d5bb547cb"
  },
  {
    "url": "assets/js/454.b3247f07.js",
    "revision": "f5ceddb815e2bbddd7974cb327dc1940"
  },
  {
    "url": "assets/js/455.e406edcf.js",
    "revision": "4fdac3149b0ace229494a3fb0bb552ac"
  },
  {
    "url": "assets/js/456.84f0bcd3.js",
    "revision": "281c07d29329062977ba4f32c63f4f7d"
  },
  {
    "url": "assets/js/457.e2302f24.js",
    "revision": "8787dd40481d0625b0bb22c4ccb3ba70"
  },
  {
    "url": "assets/js/458.93429860.js",
    "revision": "b1b4f3b01eb2afb86505b3adfd306f61"
  },
  {
    "url": "assets/js/459.04ee37ad.js",
    "revision": "28db7fcdedb85dba60da1d34dfcc0268"
  },
  {
    "url": "assets/js/46.566f4cdd.js",
    "revision": "df16400eaa63f4f8155fa8358660b425"
  },
  {
    "url": "assets/js/460.8bea436c.js",
    "revision": "0568c7948f0c68428eb75163198ac14d"
  },
  {
    "url": "assets/js/461.0d04d174.js",
    "revision": "c8e07917423c574a54b31210292f1025"
  },
  {
    "url": "assets/js/462.82348d9e.js",
    "revision": "b346a9c97f4a7ab249f6c26f575da50b"
  },
  {
    "url": "assets/js/463.51162553.js",
    "revision": "c9b9da9a16348164620de2484155fd2f"
  },
  {
    "url": "assets/js/464.575ffeb3.js",
    "revision": "ca391fc518690136bdfbfb2369e2613d"
  },
  {
    "url": "assets/js/465.96dd6548.js",
    "revision": "c6b3bcf0ad1c13f0361f048c27f87fe8"
  },
  {
    "url": "assets/js/466.e6731d06.js",
    "revision": "b00b7db8d448003d04ed8b4354d93b1b"
  },
  {
    "url": "assets/js/467.d4861049.js",
    "revision": "e40a048f7667c3b285e0c959bde4decc"
  },
  {
    "url": "assets/js/468.1c77122b.js",
    "revision": "be238231d62f68f8c9074d875690f5bc"
  },
  {
    "url": "assets/js/469.ea702da3.js",
    "revision": "bedc8e82d3b8a6183162499494b82152"
  },
  {
    "url": "assets/js/47.357f3c1a.js",
    "revision": "78670e6845a4f00eec98624dac1ea1fa"
  },
  {
    "url": "assets/js/470.7f24ca3c.js",
    "revision": "daa4e012bb9b8984ea0d0ab16787c122"
  },
  {
    "url": "assets/js/471.f35da7a2.js",
    "revision": "bc0f9cbb946d53a22837b02dc8dbd0f4"
  },
  {
    "url": "assets/js/472.843abb27.js",
    "revision": "e3585148302fb03a1836e39f9518da0e"
  },
  {
    "url": "assets/js/473.af46f369.js",
    "revision": "991b062fdbffce35ac803432ad9c8041"
  },
  {
    "url": "assets/js/474.3a43ed21.js",
    "revision": "43800fdc9a756f2dc61350d962d606bf"
  },
  {
    "url": "assets/js/475.7a1a584b.js",
    "revision": "0ecb3dca4eac7ea8177d62a754e1fdcb"
  },
  {
    "url": "assets/js/476.bb125ba7.js",
    "revision": "3d7e7d8909ae5c375250a665e9e9b479"
  },
  {
    "url": "assets/js/477.58e6d6c1.js",
    "revision": "9991c2361b3f143997ffb566897ca7b1"
  },
  {
    "url": "assets/js/48.cde63b1b.js",
    "revision": "c061132767ad61ecd43504da071e7abd"
  },
  {
    "url": "assets/js/49.11767965.js",
    "revision": "8f2ec6fd6beb6829e1204553250d573b"
  },
  {
    "url": "assets/js/5.db8d0113.js",
    "revision": "3e767899f6847362f37dee17b76c7e81"
  },
  {
    "url": "assets/js/50.6b310ec9.js",
    "revision": "18d1726c476f220297d60be83d01968d"
  },
  {
    "url": "assets/js/51.96361b1d.js",
    "revision": "2f643fbabbe90fdab515c41986eae5b6"
  },
  {
    "url": "assets/js/52.ed37d1cb.js",
    "revision": "ae824d3b5ec399cf3d3b7de14eb60e21"
  },
  {
    "url": "assets/js/53.48293b9b.js",
    "revision": "7b2281ae528775463ec4cddaf8a20613"
  },
  {
    "url": "assets/js/54.65ec259f.js",
    "revision": "eb1fb07c69ad88108a2581054bdfe59c"
  },
  {
    "url": "assets/js/55.d2688257.js",
    "revision": "9557feb479b31abbbbc0a77bb7a3bc21"
  },
  {
    "url": "assets/js/56.c2ac3d0f.js",
    "revision": "bfa01bfbbef68b801abd602a527bcf83"
  },
  {
    "url": "assets/js/57.c8d7c564.js",
    "revision": "c49f207a5f1399033eb85abfdf41b0d2"
  },
  {
    "url": "assets/js/58.a6f78ae2.js",
    "revision": "7151f53d1bbf570783bb50012055dd6d"
  },
  {
    "url": "assets/js/59.ea95ac2f.js",
    "revision": "37767382b9c2f68babfdfa3d85918ef3"
  },
  {
    "url": "assets/js/6.1f76f165.js",
    "revision": "60bf5ed305263d5d2a8f0c0ee29489c2"
  },
  {
    "url": "assets/js/60.63160ec0.js",
    "revision": "4b57fc0ce6fbe310bacc8efa474cd7de"
  },
  {
    "url": "assets/js/61.39adfd46.js",
    "revision": "caec84ae4672fc0e0355263c7b6cab40"
  },
  {
    "url": "assets/js/62.65f1acd7.js",
    "revision": "7b4bedc5a22044e011b45b2b6853a76a"
  },
  {
    "url": "assets/js/63.caa2f32c.js",
    "revision": "af8ed71f176b442dde70665751418c01"
  },
  {
    "url": "assets/js/64.abc1f270.js",
    "revision": "8adffce7f655826677aa6391359583e0"
  },
  {
    "url": "assets/js/65.b6d66833.js",
    "revision": "c1a45298753651240c26b4c853a6eaf6"
  },
  {
    "url": "assets/js/66.af43bd42.js",
    "revision": "cab4fc9a2a090c77b068e9e508a73fa7"
  },
  {
    "url": "assets/js/67.be0e1c13.js",
    "revision": "bfb1bd74636518fb306e253a41becfbd"
  },
  {
    "url": "assets/js/68.fd5c7254.js",
    "revision": "948a60b39ebe548355c036e4ee43f296"
  },
  {
    "url": "assets/js/69.4ae5722d.js",
    "revision": "fa46f917752e4b207fc82c9a4efcb3dd"
  },
  {
    "url": "assets/js/7.628e6c2b.js",
    "revision": "051b4936c1c03e0934beecd05e041736"
  },
  {
    "url": "assets/js/70.731cb626.js",
    "revision": "7b09dd15cf89572ea6ee2488e2f73fb1"
  },
  {
    "url": "assets/js/71.779670c2.js",
    "revision": "808dc81608e32449da4832c309d8e58a"
  },
  {
    "url": "assets/js/72.ba6dc297.js",
    "revision": "013b63bdd87126c60241604d62564550"
  },
  {
    "url": "assets/js/73.ea3ba165.js",
    "revision": "4ffff3de3b7738132052cf346dec9ecb"
  },
  {
    "url": "assets/js/74.59df0be0.js",
    "revision": "13c5c0c971241f2650bd9c7362454abd"
  },
  {
    "url": "assets/js/75.713714b0.js",
    "revision": "1c561f0030a7747ee4df791b87f5f81c"
  },
  {
    "url": "assets/js/76.4d54f058.js",
    "revision": "227923d0e41df66c11d0d052debdb008"
  },
  {
    "url": "assets/js/77.6ff0bcd2.js",
    "revision": "cef0eaa0a14dc2dcbea7588b2e9c799a"
  },
  {
    "url": "assets/js/78.e292828b.js",
    "revision": "e451a74a462b487253a94d5aa0dcb157"
  },
  {
    "url": "assets/js/79.39577e05.js",
    "revision": "a7914392851e3c99a8d7441cabcd4101"
  },
  {
    "url": "assets/js/8.889c6fc9.js",
    "revision": "63c017015e45320636f1d0273008b53d"
  },
  {
    "url": "assets/js/80.2929d75f.js",
    "revision": "dc1ce64c8ca9ff4818a26763c0278d72"
  },
  {
    "url": "assets/js/81.9840f471.js",
    "revision": "c09090fc7136728c023005e868ff22d5"
  },
  {
    "url": "assets/js/82.f02dcab3.js",
    "revision": "bf85c606c0698cfcdde2041f1fb4b419"
  },
  {
    "url": "assets/js/83.9c787e45.js",
    "revision": "a3b905a446e7f5913f7b6ede685096d1"
  },
  {
    "url": "assets/js/84.40b122a2.js",
    "revision": "0b5cea74629efb2a4635f703ce0e2503"
  },
  {
    "url": "assets/js/85.9966035b.js",
    "revision": "7f159508b8787cbb83a62415dfd20cd6"
  },
  {
    "url": "assets/js/86.6637d507.js",
    "revision": "f8b5b4d4db8fc938a517fe9a0fe64237"
  },
  {
    "url": "assets/js/87.df099878.js",
    "revision": "b006ba1f3eaff12e4391bd20152bac38"
  },
  {
    "url": "assets/js/88.8834c97b.js",
    "revision": "3f46990e32efe27a7026b7a46c21ac45"
  },
  {
    "url": "assets/js/89.69a398ca.js",
    "revision": "5eaf36657b34a565478848f80bce357d"
  },
  {
    "url": "assets/js/9.ea3ea0e1.js",
    "revision": "5811321bcdc81e7103b041194acef8d2"
  },
  {
    "url": "assets/js/90.294a86d2.js",
    "revision": "2afe161595b1d7d03e378708f55be906"
  },
  {
    "url": "assets/js/91.f171a306.js",
    "revision": "5dd91f00244cfbdf277b54e58cd26a34"
  },
  {
    "url": "assets/js/92.79e5d674.js",
    "revision": "77f66d171218e8b6eb93e272681c9637"
  },
  {
    "url": "assets/js/93.128e7266.js",
    "revision": "c3f695c2c103da7eafe5db44f7a32b78"
  },
  {
    "url": "assets/js/94.be87d809.js",
    "revision": "2c34940f8dee299d5d257b46731af732"
  },
  {
    "url": "assets/js/95.1fd84f40.js",
    "revision": "ec394ca0f76babb430aa20d23acf78af"
  },
  {
    "url": "assets/js/96.90dee942.js",
    "revision": "b2a862ccefbbd847cb2c5c965610b6d2"
  },
  {
    "url": "assets/js/97.e8831378.js",
    "revision": "7acc09dd08a3cc94430a2cf6ef3a516f"
  },
  {
    "url": "assets/js/98.16249ce9.js",
    "revision": "f4079de6c0f6c04bd57fe4a84a6fa151"
  },
  {
    "url": "assets/js/99.3ba17e0e.js",
    "revision": "092e62d49d249b2f3f750e92cdcbc13a"
  },
  {
    "url": "assets/js/app.7bf0b58c.js",
    "revision": "96d9516ce7f13b88f1c66d7125ead672"
  },
  {
    "url": "aws/access-keys.html",
    "revision": "31077c9ee47bf9f4b5269b98f7865279"
  },
  {
    "url": "aws/architecture.html",
    "revision": "a070ebbc6aef2dafcdd3f00a935e5d1c"
  },
  {
    "url": "aws/arn.html",
    "revision": "e3b57340da7648c3294667a9bd6e4d05"
  },
  {
    "url": "aws/aurora-pg-vs-rds-pg.html",
    "revision": "6ff29d3b836f0563664a62762b902f71"
  },
  {
    "url": "aws/aws-abbr.html",
    "revision": "cfef0b74dc9839a18cf2945dde600029"
  },
  {
    "url": "aws/aws-dev-tools.html",
    "revision": "223b05beeaefc8b8656cc31b0913a24e"
  },
  {
    "url": "aws/aws-doc.html",
    "revision": "456839594a398614cd4ef513f7d7c967"
  },
  {
    "url": "aws/aws-outposts.html",
    "revision": "2785e4e2643610292b2a350cbd211b11"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "ea6bb377ed22f7edbcf7326a04a314b0"
  },
  {
    "url": "aws/cloud.html",
    "revision": "ab07e4dee75d0a92264ec25488a7230a"
  },
  {
    "url": "aws/dynamodb.html",
    "revision": "4cb968ed0ec65de9cf7f6f2741e3de92"
  },
  {
    "url": "aws/elb.html",
    "revision": "dd463fd8c80a6100d568a47065726c89"
  },
  {
    "url": "aws/global-infra.html",
    "revision": "63cc1ea913aed76e07dded098adc8791"
  },
  {
    "url": "aws/misc.html",
    "revision": "ecbcd75dbadd3496c8a9c8f380d6a0cc"
  },
  {
    "url": "aws/s3.html",
    "revision": "acb6566c5aa6cc776c99b2f8f9d81b14"
  },
  {
    "url": "aws/vpc.html",
    "revision": "b4468ee962f775e7b3c3e943ee943f26"
  },
  {
    "url": "blockchain/solidity.html",
    "revision": "c4ba4f61f6bb10836572265f6213fa70"
  },
  {
    "url": "common/cache/cache-notes.html",
    "revision": "2cb5fe7d489526eb22069010b3fe4544"
  },
  {
    "url": "common/cdn/cdn.html",
    "revision": "da2991d55656ea2f8ee80c580eb2641d"
  },
  {
    "url": "common/clean-code/clean-code.html",
    "revision": "c541c30b438dc07b7ed130fea4f2faa5"
  },
  {
    "url": "common/clean-code/code-structure.html",
    "revision": "e2bd9de27ad13efa0205f1a02f508558"
  },
  {
    "url": "common/clean-code/refactor-catalog.html",
    "revision": "9f0816e5753f6a2685e710b02d846697"
  },
  {
    "url": "common/clean-code/refactor.html",
    "revision": "5d9f6508e6712d6a28081c8088829999"
  },
  {
    "url": "common/crawl.html",
    "revision": "dd8d6db4dcf2eb4e9908fcc1be6222e6"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "03445ccff7b7001457c41923e6584193"
  },
  {
    "url": "common/debugging.html",
    "revision": "e029b5f7aa3e81874740779bd4a77a44"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "685f58e21ec30b01e1bb3c6a34303ad7"
  },
  {
    "url": "common/document.html",
    "revision": "91a2d70059019bbab16a288fc930e99d"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "0f750d32831a97d3904d32abe6bc6cfc"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "3b9ca58a2b773dac9c82f7e5f6af59f7"
  },
  {
    "url": "common/index.html",
    "revision": "5db392b6010e0ae5380690369e81511c"
  },
  {
    "url": "common/notification/index.html",
    "revision": "b0c4ec88931ba8de8fa25de5e70bc2ad"
  },
  {
    "url": "common/optimize_be.html",
    "revision": "c00e9b126e15cb70db9d1eda9ae4dabc"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "31515e16ad680711628ecc3958cf0f5c"
  },
  {
    "url": "common/realtime.html",
    "revision": "2ad5a6e2f2ee0dcd7fa9dade21257f70"
  },
  {
    "url": "common/security/software-security.html",
    "revision": "2d596ad3800e0320aff001f1dff0b0ed"
  },
  {
    "url": "common/seo.html",
    "revision": "7084a5c8088ff2d22d35c26cd69cab8f"
  },
  {
    "url": "common/use-case.html",
    "revision": "7ce0c5e49488d6df74221d324da7fabe"
  },
  {
    "url": "css/box-model.html",
    "revision": "19cfea10bc82dca226c8cf9664bf56fb"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "b3057144e7e031fc169d3fc280790445"
  },
  {
    "url": "css/css-flex.html",
    "revision": "455e6c93bb07953a481a16b480f78cde"
  },
  {
    "url": "css/tricks.html",
    "revision": "790b68b48cbfa84f80ffc5e9a9be9f5d"
  },
  {
    "url": "db/architect.html",
    "revision": "c364392115822604899749f794e85114"
  },
  {
    "url": "db/cassandra.html",
    "revision": "b76d5a4376a32ff19edadfe8c23746e2"
  },
  {
    "url": "db/consistent-hashing.html",
    "revision": "6eece4a63bd9c71c65d0c7f6cd583ca3"
  },
  {
    "url": "db/couchdb.html",
    "revision": "fecd6ea3bce3875812933e1fa6f97811"
  },
  {
    "url": "db/db-concerns.html",
    "revision": "dceeebecdcb22181d8abca1bcaf426b9"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "913aef012728e531716a033a03886dc5"
  },
  {
    "url": "db/db-vs-blockchain.html",
    "revision": "95c44ba3bced4ebc137e503d83763bda"
  },
  {
    "url": "db/dbms.html",
    "revision": "ea543ea3fd7239fbdfdde01f3ce3487f"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "62522c9a242a4f632e847a809af90e43"
  },
  {
    "url": "db/id-generate.html",
    "revision": "3c9f684b30c582d206e8784441a1c0f5"
  },
  {
    "url": "db/mongodb.html",
    "revision": "fce09928a3b1b109198ed8c441f582e1"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "12c38d9e36808bea6e0809b74cc80177"
  },
  {
    "url": "db/nosql.html",
    "revision": "436e6d278562e5813b52d83153f1bf2c"
  },
  {
    "url": "db/optimize_db.html",
    "revision": "14b7cb1602249fa1d8a9a8833693d616"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "cd5d108b512889eacb39eec04fa90074"
  },
  {
    "url": "db/postgre.html",
    "revision": "22d97f3132e0d6abe6f5e99720c00e2e"
  },
  {
    "url": "db/realm.html",
    "revision": "39ffad157ddf4d3a9ac2c907a177c268"
  },
  {
    "url": "db/redis.html",
    "revision": "495b737369494e50222444366ece1c98"
  },
  {
    "url": "db/storage.html",
    "revision": "b8c70710a42e0333594b1bd4bbecec08"
  },
  {
    "url": "db/tx-isolation.html",
    "revision": "4a967ee58fc7c2be2ad1b3492409f083"
  },
  {
    "url": "db/use-cases.html",
    "revision": "fb9ca6a997d7fc044e7a14826890d373"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "542980d9446209ad61bdcfb7a150efca"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "f1da2634843a2c8424f01cc507400881"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "6cfab068fbea91db0847e3f0059ff072"
  },
  {
    "url": "fp/fp-ts.html",
    "revision": "fbaeda091c76519f7434ca430c18decc"
  },
  {
    "url": "fp/functor.html",
    "revision": "d1d95101cc556b35ba8485fcd25639da"
  },
  {
    "url": "fp/monad.html",
    "revision": "3913d6c736e7531cd7bfaa2f9fae2e04"
  },
  {
    "url": "game.html",
    "revision": "5863db3a12de6fb4902f22f2181cac57"
  },
  {
    "url": "geo.html",
    "revision": "a16abeb2d0c56f6e456cfd84ce8483b5"
  },
  {
    "url": "go/clean.html",
    "revision": "14a518ff7cfb89b930f615985e8ce7fe"
  },
  {
    "url": "go/index.html",
    "revision": "cbed4fcce9f72a7940de2983926ce83e"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "700603509d56c42d6f4dc8c4872cbb09"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "3bea1a4b6e595e186039b7e3fd997799"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "6b84ecaa279b7bf9231bccec078e51ab"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "e9ea5b1bb503c0cd777ab36d09bc2c93"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "99f268f092029801e0a621d438ac2308"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "b4a02b4d8c61a14bac4fdda9da1d72ca"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "175f7fde7ac1b0e460a5e0b8e3922fe3"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "6aff65445930ed95da87b7a2dfd0559b"
  },
  {
    "url": "idempotency.html",
    "revision": "c5be81e466f2970535b3db174e71f9df"
  },
  {
    "url": "index.html",
    "revision": "346eabc4a4278ac44d781618269429c5"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "81c352585f924a969b433c1c75d3d6c4"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "3dc79487e5b1b1b983c6c0c92a0b0266"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "9ea1f519730f9dd96dbc9521630f9cbb"
  },
  {
    "url": "javascript/closure.html",
    "revision": "bddd343ffba62e72d67297ea3d974ab9"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "81f5d4dc4dd45f6f5f3ea17c563f2aa8"
  },
  {
    "url": "javascript/eslint.html",
    "revision": "46779e8949a05acaa0cfb529449ad682"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "9fb88ffb3f1f320d1804f766cf160d98"
  },
  {
    "url": "javascript/nestjs/nestjs-cqrs.html",
    "revision": "12c048babeccfe1ad155922be2ead6e6"
  },
  {
    "url": "javascript/nestjs/nestjs-overview.html",
    "revision": "cf8f4cc131bdd27e37efaf068b0d5e3c"
  },
  {
    "url": "javascript/nx.html",
    "revision": "61d83f18d2d49f736f511f948c8b692d"
  },
  {
    "url": "javascript/rxjs.html",
    "revision": "afe381bc9df15a0dc1ea863bfa6f36ba"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "72aac7fcfe4d4c8abf2c758da581938b"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "ae4625de488c029d1144f4bfb6e4b10c"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "0bb27a101dfc0a0ed593533d57f446bf"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "ec261f10ed60d737a4b969c805838993"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "45aaefb03019dd54457c2065748a29ad"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "b054bd89072aef2a4f14d2f7aca41117"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "d3111c2c82722789b3d9e07341ed3e9b"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "aba79444514a7496e2e3ef3211157db0"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "ed41c8518d0a22dabb8dc901e882c0f1"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "9457e76464c84e9da59bd01e9c860d7f"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "b25952b976587057e50618215ffb3876"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "0d042cff63564ddc7aa44375e1fe1af8"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "bc57060f8e2f778c272f674a6563edb0"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "9c88dffaa3bc1b91517344858cb08b27"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "22f178b5a820ab6979c7bafc82ec1b6f"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "84c44568c56e234edfbc14fa56cf2701"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "324372d5a32d7b878db307af093f05e4"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "94a1885f27e98abecea640df57dbb6ac"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "c72f3a0b410ec330f172de2b14aa6ba0"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "b18b3474f7fb30d6fd4edbf089796f15"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "c804fb24814dbf9b4d665189c9df46ba"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "d52091a22f2c9bd14fd820eda53c8557"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "c586b8a3a2aecbc478cd609dc0156b75"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "0dc766957b2219f7291cea10bb6f15a5"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "2e5ad4635efdeb5c6b843a1ca3048a58"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "016e3a7d47831f3f0f1d7198f7a0add9"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "bf477c20dea03f3d5cb4871aa4af6af4"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "4ee95d25d073d48a1640f7dd133942c8"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "699db9524428dfd629633efc04b9db16"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "e5825d1919d3df37cffa3ebd1ccc2bac"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "2965659142bd170a4c493ada81dbc929"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "36845179ed7b99830b2f6d7259611163"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "d961da8e7998b7d84c3b6b684e117466"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "d62d3423f811bcb4adc0c638c00e64d4"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "7d4114bf71a8c1a626f6b22781a43ccf"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "093ef2f8724f40f0df06905281250bce"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "307d379fa83fd1c20d5fb7945c971f71"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "953cbd58c3462a00a671548a6227f653"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "aecd30603afdd215cffef3522691e966"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "8b4bcad41a181dd36b94dae215af1e72"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "6a1af3f1542312f399e149756105a1bd"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "a296094add87c53853a248c0e11277ee"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "9d538660f306302f23c4c020a2c02649"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "34cbd193f983b2fb718da02e88431528"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "d0fd69fe82e93edd375d3d090ca37912"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "0e5c820b00c73a6494870c7aa4e65f50"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "6ac2a7cd9bbebda3d2f02b1675d14771"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "5cce5f4f387e7f14d4fe60119abf1083"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "3e6708b8f6576b1c6d4b5e872dc5f5c3"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "9bedb9da6078be6511755fcb27b2debb"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "e08e0ac8d6f01e133c3965238564ed2a"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "f4a06fd6d12e5e2a75657c1bece88f43"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "8fb9ba24242577b9371ca01d26b90c20"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "90f43fddec7e094fa4c4d6d5cde71c68"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "ab542fef8dbeaa54b3e005c72a21ed2f"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "a4ae26e7db112c5e7608f582f801ce70"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "f5867251d789eaa9c3e52b97a5cbdbcb"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "ed29bae765d56e113bc8e13fd1778af1"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "151039af389c43f25275ffffa715b743"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "f75915967a1dd6eeb120d0dc4d440380"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "d7c01302cc73dcd021d6dde83d06816d"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "fa96455dc71817c7d615904af5fc8656"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "97cfc092a36f4bd0f25c1397c716b564"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "3d3c56d63c228a64dfadbfb587dfed67"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "d20fa51f7c4a6bc09ae4f1ea1029737e"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "d76806789659489ae8987b70cea9104b"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "2c8d83fa6053e3bf5d1262bb761af737"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "ff5e33ad509b3235fcac517d26508bdf"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "4d0038e65bc4cd70d9c2cf938083fa47"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "fec6d37a51c9ea64db3427d30e3ef25d"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "8b5a985083b7d3177e5d042f0b0bb84c"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "4129d356f3cafebfc672cd010ce3b06d"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "169e3b23d86e60a87145754eda588b31"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "68b225650633f760d3632ff21aaee01c"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "c4a55ae0576b92cad71cae8813aea5bf"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "8206a12ef921ddc2739539e06050aebb"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "b202b8c50b2c88e0de845caccfeb1417"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "43abb55c6148beed2ac0145a2a67b880"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "5026ce6ed1b6f0f96dd6f714f8b46750"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "83a99630da8ce563e8ece0f430c64cea"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "77833557ee801817de7da272000c8b68"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "562f5d7d7e313090779f4f8d6a24db1b"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "50072feb783cd83dcfce581b5a2fb7ed"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "c3fb929dd1c560b006a3c7e2bdb36266"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "c19d3141ae8a809d7917963c39dc8e24"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "3161e9dc3124fd206ae48091910c39d1"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "5bacb4adb5ec3870463d1cab5f8adfcd"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "f85fab0f58eb5b19f4bec973f85caa49"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "2b90b1f5fe1b7c83fe7826e02971c6b5"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "ca75cede0224c82fbaa95041b0f6f465"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "5ca150120504ec0f281b7bd1aa0588ed"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "2f5f9016404519bf40c3fd83bd5b58a7"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "82e18855c9e33d862f03bfdc7dbe85f1"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "343e24abb8fe3dc744c28b3850f8cffe"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "22c5fcd9ea65db703af5d1cec6538018"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "bfe0dce3193a85d54cacb0eb4967f5d4"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "333d4ecce74cac0db031f40e3e2ba53b"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "abd3901cc9857a48952d69b9ae769e30"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "bf047ed910bf18c924b035a4b8f66adb"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "46bd0bad4c5a580360cd93f797a0ad41"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "8ca40d6edf86d791258c000a268180df"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "62075e84473c478efed7fafc6764593e"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "660e273fe3a6c514cb6aa6c22cf88529"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "ffd7624f5c32a867cbf7b70a1995dfda"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "b03fd1eb525e0ebf8b27f3ab1d452f81"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "ab05bebf77054f501efccdf0839c7887"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "666d4009a09a94a0c74625adf248655b"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "9c58c9024ad0a38f1e9c65a25a6c2459"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "6e054fe8ecd38ce66eb463c9df9e7600"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "f9a4e156a0bfccfd057fc66c5916e6e6"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "af2d96741843f95ffb70b494c25a7eb1"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "d1c50eb42e43e63ff8168445dc543a56"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "7e7542beff3743e566392c0299c4c8fd"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "bee3081f733c38f078e880974bc4e6da"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "aa1e4484974c3ffb1601c4d5adb33a15"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "9a5f885ef220cb710f87c9bdc86656db"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "803ff1e29d30c3829c96d7fb2257fd2d"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "5fa929aac3cd30f53f55f7e741caa7b8"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "264d607ded42ac4fb131b5f72aec3465"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "e3dc03b6fd756741b5d600060cb3c57f"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "012e185f8e5da6d94276aa65c4b96c42"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "966786c515dbecd3377b9de0791830cf"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "b81020a8eb871b23b2da5f4ae0b585d0"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "6c05162e95020972262e5f3651f15682"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "7babe40f90b33409a0b305244d051f4f"
  },
  {
    "url": "kungfu/case-study/chat-system/index.html",
    "revision": "6daaf42d11d8e2c304cb6d2f9149aa31"
  },
  {
    "url": "kungfu/case-study/google-drive/index.html",
    "revision": "9168628bb5266cf935bb8012c6874940"
  },
  {
    "url": "kungfu/case-study/new-feed/index.html",
    "revision": "f0c9907de37afce5b083cf98d6ed3afa"
  },
  {
    "url": "kungfu/case-study/notification/index.html",
    "revision": "69f6e35bb914ff6873cead5046313536"
  },
  {
    "url": "kungfu/case-study/payment/index.html",
    "revision": "1bff97803245c7123026c1c888a680c9"
  },
  {
    "url": "kungfu/case-study/search-autocomplete/index.html",
    "revision": "7fbd46fd506584de90217c40630266f5"
  },
  {
    "url": "kungfu/case-study/url-shorter/index.html",
    "revision": "96c749a4087189073ad44d97af747304"
  },
  {
    "url": "kungfu/case-study/web-crawler/index.html",
    "revision": "660cf7b3e1ee16be37838ad456fb28b9"
  },
  {
    "url": "kungfu/case-study/youtube/index.html",
    "revision": "e3272808204a282921f7ad25c27b2f54"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "ed6dc048861baa42b8af79cfd71cf01a"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "016b948f64af522d45908cca828824da"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "f6b85906f436c2e34aec0f7f04303756"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "446c51cd72e32576dda8627d24d150b7"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "c122a2db846806df71118c2fb4ab6b94"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "37c668c0d57c0a62d1b5149a75493db1"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "7ed16e69accd02d1672c795e4174b055"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "1e74a5e24fec6bd2ab42a3cfe621dbe8"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "3972cea2717129f463287494ff7ea3f6"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "1a7d45215272a9aec45bd5c50603b973"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "70a71993fb2eccd56edadac8d607358a"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "a7b26b9a2dc3aa3b07a9e95b3a661540"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "6a23b912218b9ff9574adc49b1a1482d"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "37a60ce89b78b890ba301fc505784bb3"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "4c9bd3165e1e04f17de5edad7f85db92"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "d2f8274f99a26b1d0740712cc77a0b0a"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "7deaf087ef25b93ffa66f94ca0f1b944"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "da63d4ff0a27829471f2a5b3b73ad920"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "f2c9b35bce00c1277b6398462b8c4a13"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "51826d0a1c104a56f74834f039e2cb82"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "e0219448d64b78575b9502ca5afe701c"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "e1e9270b5de3e7ba4ba021d945af6dfd"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "d4293c5928cab876532bd8a5e3eff922"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "32f7f3ce472265aac0c33f6dfc29b591"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "9afa91b5356588d8d27f1a48c22d4d51"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "b960372f07dd7123e28a6218b922256a"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "247891415a1e11d01fb6b0cbeb776f0e"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "40a166c4f499fb16009c1ea2f5d209c5"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "96da3eb78caf148e59cb0527443b0670"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "9827a14d6b356282d1122299f916ae96"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "16be0fd6ea34340a5f4ddae74623864e"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "7b6f7f2c8329d772f02405ff5382e1d2"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "0f6205d0a1dd5e398fe2240da76be80e"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "d59f0a93e1823c37c4f2f0ea7b52faa0"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "19293e28a56c1d4689a5c964787e5f00"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "49c43e5e7822e7560635253a97c4081c"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "ac0c625b97c8b72336a7e7922ec6e020"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "2bcf722ea7ad5d112867cadad5261472"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "8be52cdc86141c54c29f6d09b57a6784"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "3261ebb6fdfe0af5440dffabe3c9d369"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "6894fbc16d32840dc9a9e567c90d33a2"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "eb88b91866faf676f53ca12584c2d0c8"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "8096dc05da10371699ce05ee52e2fecc"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "1a4205907996a706c54be3ca567a84c8"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "b82a11940e72ba50bd8bd6cec30a697b"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "bafa24a6950d18a4227e082002b85f53"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "93472e60035d3c393506aaed7d0b2b7f"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "327f3a328cd77f03540bf6f593d34504"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "72465fd159fdab3ea952cb96f01c1331"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "86563aefa20267caef83bb907a693ef8"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "589964c1fcf983b064e3ac45830e46e2"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "75c302e5aad0128c0098f821b2935df1"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "c3fd6951153f89ae10794021e7e6a1b1"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "400d3f8321b565eb5e7b2b682f1af357"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "744598773b1acfaee98a71c9459f0bdf"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "43fc51cc12858470e12ea1e3c0c8b13c"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "b38a5a588c19d57fb93b198ebaf4f87f"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "72d172518d6145859c9dc917c052e4ee"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "bc5249f121f7c845f410d75e0d677744"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "daf88249a85e926d1077698a890654cd"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "62c73c1a53648071f05beb24e4533f9c"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "41f91e1660e8961d592b737f7a46d826"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "b1b0579401f4d409e6edd1d48bc586e0"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "9933b4148e07aaee4597b48b10406bbf"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "c6d638eee82936672d864e7d9eac65ed"
  },
  {
    "url": "kungfu/template.html",
    "revision": "d566aacaca2133bb386174d6a3f77ac7"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "760039bdb0a21663f7dd7b56ed274d5b"
  },
  {
    "url": "network/address.html",
    "revision": "7b0d57bd3f04050ae4407b1ba53e1657"
  },
  {
    "url": "network/devices.html",
    "revision": "87773727433633759035ce486f9a969a"
  },
  {
    "url": "network/dns.html",
    "revision": "4bd44ee3f22a8d302ee47c8c17edb4f0"
  },
  {
    "url": "network/ethernet.html",
    "revision": "8ccbb1f9ea8a614330c50653a142a587"
  },
  {
    "url": "network/internet-protocol.html",
    "revision": "e068f921f7bd7496038886294e526eac"
  },
  {
    "url": "network/nat.html",
    "revision": "6354868d0b067e6efe5f46d6f93e1179"
  },
  {
    "url": "network/network-abbr.html",
    "revision": "bc6fbcf92917c9fb8decff6ed0ef5dd2"
  },
  {
    "url": "network/network.html",
    "revision": "3517acdcd14e8d52b9d9ae13c3cc820f"
  },
  {
    "url": "network/obtain-ip.html",
    "revision": "cb710bb20d7da9e3975c917d2d2bbee1"
  },
  {
    "url": "network/tcp.html",
    "revision": "eedbb382699d7095c6c293e1ec362ea7"
  },
  {
    "url": "network/websocket.html",
    "revision": "d2b43f60e139690eee1c1c1965db058c"
  },
  {
    "url": "node/env.html",
    "revision": "6fd68fbe2a78468a33f542780b0d49a0"
  },
  {
    "url": "node/index.html",
    "revision": "b888e25dcdedbc80ed76dd123d7d0278"
  },
  {
    "url": "node/n.html",
    "revision": "91ab9a4e2f94f1429bdb175cfad5b7b6"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "53fcb0ef05eaa7f0f879e31cb3b5ddfa"
  },
  {
    "url": "node/npm.html",
    "revision": "4475f9ddfe40833feb158fde05f1bb6f"
  },
  {
    "url": "node/sequelize.html",
    "revision": "2c3e338ff21a6f1fa638de804c892cca"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "71cb9b29c78e4c7ed85a0f100e4276d6"
  },
  {
    "url": "oop/design-patterns.html",
    "revision": "2e86847309524234d316b487570ea731"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "f459e31494a45e1ca52aa47261d5d6e8"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "5ba2fbbe6cd3dc212cf5d00d0a81616a"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "fafb3ad22b8baef9089125953ad99e4a"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "cc4b68e194200acd33cdeaa072f23168"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "9e6183c4956a7948440f84930f263720"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "1deb09590a50918f00ca027bc2eff33c"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "920dbeee9886d496c790ae0c7b3d29e3"
  },
  {
    "url": "php/clean/di.html",
    "revision": "7041f6a85439d2bc0d42609df903ef96"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "41e9a8db2635a1d105f2d29bdf6eb6a0"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "4275ab1c736756727b1fbae2ccd97b15"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "020f750d459c967a2bc156156c9398a5"
  },
  {
    "url": "php/clean/index.html",
    "revision": "f61b9382a9b9d8fa14e3193b6e44d356"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "21b1a2ecf5c14e20705ab02383cd28e7"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "e9e7866030108dd0f964fbd1ddbd21a2"
  },
  {
    "url": "php/composer.html",
    "revision": "8d8d9469367ccc6322ffffdffdfa58a0"
  },
  {
    "url": "php/crunz.html",
    "revision": "db0d2debcec330bda4f0189f323d5362"
  },
  {
    "url": "php/laravel/best-practices.html",
    "revision": "155fbdd2ae7bd4643cc40d43ebc1603f"
  },
  {
    "url": "php/laravel/laravel-notes.html",
    "revision": "a337e8bf8221212aeadb95de9973dc14"
  },
  {
    "url": "php/laravel/laravel-vs-symfony.html",
    "revision": "ace7cfc4f785964f4e17b602970f99cd"
  },
  {
    "url": "php/laravel/patterns.html",
    "revision": "8add0a94af580bcb19404cbc2cb743b1"
  },
  {
    "url": "php/magic.html",
    "revision": "6fd343cc3ba51b99b564f161f0b1d5ca"
  },
  {
    "url": "php/notes.html",
    "revision": "d3362ebb2f7046dda1ad4346632a070a"
  },
  {
    "url": "php/oop.html",
    "revision": "20563a9dd21462345a8104baa52a35e7"
  },
  {
    "url": "php/php7.html",
    "revision": "a70d548e28ba18326de1dc0f6126ec72"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "97fe077b87b7ec01393ef0768e1ec2dd"
  },
  {
    "url": "php/reflection.html",
    "revision": "7adfa3e1213de0d85940ae292112c7c0"
  },
  {
    "url": "php/tricks.html",
    "revision": "6724da459f0019f251cbf3d585d31723"
  },
  {
    "url": "php/wordpress.html",
    "revision": "34e018ef99fa6082bb9b20140e4c46b2"
  },
  {
    "url": "quotes.html",
    "revision": "e42452931c719a9f02c0077407269ac8"
  },
  {
    "url": "react/mobx.html",
    "revision": "3d3c7a50d8c505d8c88b90d15710446a"
  },
  {
    "url": "react/nextjs.html",
    "revision": "e67f2d1f61cf99a600196b87ef8e897a"
  },
  {
    "url": "react/react-native.html",
    "revision": "8e55ad79076ff7a6fc4a68dfe81d9945"
  },
  {
    "url": "react/react-vs-vue.html",
    "revision": "49098b33415edca0cc1660ebb6977a07"
  },
  {
    "url": "react/react.html",
    "revision": "52bd00d5cf0958b240f9ddb986208fd4"
  },
  {
    "url": "react/vue_react.html",
    "revision": "361c03e26561051f7a91b673ff35f207"
  },
  {
    "url": "refactor/notes.html",
    "revision": "dec9bcea5e61f2ae51922fc2d0713a26"
  },
  {
    "url": "ruby/ruby-notes.html",
    "revision": "8e17b2f1a876eaa31a65ee4074cf9a39"
  },
  {
    "url": "ruby/ruby-vs-node.html",
    "revision": "843daedad918dd167ef2e9c031a44bae"
  },
  {
    "url": "scaling.html",
    "revision": "5fa2e295124b8843e415686e5c3e6d54"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "4fc3c34efe1120309e37ad0be3954a79"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "774e263660662dbec84c248668beb426"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "67574bafc63dcb855fdd74514c80907d"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "a33512803a42593575923af3e12080e0"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "1970e45b87f69354ffd7bc248edc6c89"
  },
  {
    "url": "snippets/jest.html",
    "revision": "94b6403166546e2deaaddfd2c7b4db56"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "a6e0efb2c86eaccb69e2937de8be20b0"
  },
  {
    "url": "snippets/regex.html",
    "revision": "b2245234853f09423c45969e06b36af2"
  },
  {
    "url": "tags.html",
    "revision": "ee0587c9ffab52b90532e0c14ea84581"
  },
  {
    "url": "terms/12factors.html",
    "revision": "41fc8d0f64c6ce1c30afc2e28d9686d9"
  },
  {
    "url": "terms/architecture.html",
    "revision": "55beca29f2e8b78a9a85bc1af0245838"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "2e9deb07f336016841a0aade2f6c788b"
  },
  {
    "url": "terms/di.html",
    "revision": "82541c3720c72b3f2c652e0bf56dbfba"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "22f3dd8b743c6f15d66cd106bb984a5a"
  },
  {
    "url": "terms/javascript.html",
    "revision": "c1a6f33ec80ae0306a854661c7bc91c9"
  },
  {
    "url": "terms/patterns.html",
    "revision": "75100c0c35eebf439f18c32ef6dba4b1"
  },
  {
    "url": "terms/payment.html",
    "revision": "3c0478559cad865bcfad21b16fc18241"
  },
  {
    "url": "terms/principles.html",
    "revision": "edd36e9415f328796cd9a89504713af5"
  },
  {
    "url": "terms/rules.html",
    "revision": "d4614926fda296d33e6adf345d37ecbe"
  },
  {
    "url": "terms/testing.html",
    "revision": "2f0e441e8a5067df80af9e3bbc0e2726"
  },
  {
    "url": "tools/chrome.html",
    "revision": "76cec9f9aa86763b6e7fe1a4d57858df"
  },
  {
    "url": "tools/docker.html",
    "revision": "1964dcdd4656b5ae9a34aad655bb0e9d"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "f18cdf60f5b4dd340ea5a9697882e2cf"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "08a7946e9c1c2b7e659c7f6a03d6443e"
  },
  {
    "url": "tools/graphql.html",
    "revision": "f8341f3ad1c93a2c4acf1944e0915e30"
  },
  {
    "url": "tools/k8s/k8s.html",
    "revision": "b9bef39cd7ed7570c9957229e16af94d"
  },
  {
    "url": "tools/kafka-vs-jetstream.html",
    "revision": "7bc76181498e5e3e70f0b46ba9ab5271"
  },
  {
    "url": "tools/kafka.html",
    "revision": "762af748336e0110d9b7923f7ddc62f5"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "181c3822a7cc9d5bb080b179219bb83e"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "d66359837a51dd59158cd4e52cae2454"
  },
  {
    "url": "tools/redis.html",
    "revision": "290c06175b3c9218f46459629e0a3697"
  },
  {
    "url": "tools/rfid.html",
    "revision": "a4d718d61bfb941998c8ed9afed7cc43"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "d8039c7ddfd78dbf07dd8b439a133a5f"
  },
  {
    "url": "tools/vscode.html",
    "revision": "6f0fb98144e4a6f2f694ae38292ad827"
  },
  {
    "url": "tools/webpack.html",
    "revision": "e03457df5ed76834825b6dd7f882086c"
  },
  {
    "url": "tricks/compare.html",
    "revision": "c626b1c28e7e90c17dc7e804cb20d5de"
  },
  {
    "url": "tricks/git.html",
    "revision": "6764dcd222ffaedaba1b3b3e227ed985"
  },
  {
    "url": "tricks/linux.html",
    "revision": "aa3b97901efbc44e0dc6cb7e6a0874ae"
  },
  {
    "url": "tricks/mac.html",
    "revision": "370a5656bd21d7230c28c13fe1405c33"
  },
  {
    "url": "tricks/misc.html",
    "revision": "a499cafb8bbe4851374bfb99c0f3ba89"
  },
  {
    "url": "tricks/setup.html",
    "revision": "38ec7b1c0742ea6ce95d6e1b0da6e73e"
  },
  {
    "url": "vue/communication.html",
    "revision": "cde1ec01b566f19f6f7815e9bc9d3a78"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "61366c75ffdadc9f229163b8ec105af5"
  },
  {
    "url": "vue/events.html",
    "revision": "df8bffc34d586cc9f9cccd4678f88ee9"
  },
  {
    "url": "vue/references.html",
    "revision": "a2d55a64e67f74d1ea8f3b492cae1da0"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "7d67d30b722b2a416c35c914290d4ff0"
  },
  {
    "url": "vue/test.html",
    "revision": "68ebe7f76b67ec68afd51f7ae8031334"
  },
  {
    "url": "vue/tricks.html",
    "revision": "5f15ee122196ce16c5d2502385ae0cf7"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "399dd10f677d13023f9bb8af15e1e81c"
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
