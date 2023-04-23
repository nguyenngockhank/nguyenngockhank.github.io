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
    "revision": "2b462b41babaf63fdef31c94260b6a85"
  },
  {
    "url": "ai/AI-note.html",
    "revision": "02bbcdb3cfdce9cdf25dfe7e193075f7"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "42e5eac1cbcd5087a5ac42bff55af522"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "b691cc21867d5c4655cd16865f46e1d5"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "df69400966aade02f25385bad91066c5"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "0b1024c35760bbb4077931fa030af501"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "b621b5bf9f63f56ef6dd67126a16e644"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "1b95c91806537060bf0af5a4f82c4cda"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "b530ccd85b9137ed8f479816c0fdb68d"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "1101c01c83fdfb547f88f1938c0ffa76"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "3b24944dc2ce3a90efb64948cfba4054"
  },
  {
    "url": "algorithm/string.html",
    "revision": "fdfb381318b5327d57b5394fef61e14f"
  },
  {
    "url": "algorithm/sum100.html",
    "revision": "a43a5eaedf7247ac2ffa2ebb00fec22a"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "8f8eef1571853405575dbb61b012ad04"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "1fbb5cddb2a7f73518321277770b6ed7"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "318970d993a0258d0172ff05d3f4d8ee"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "0edc14bb5138ac93aedf0999149201ad"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "d3ffaa741cf09b7a4830e07ea799bb2a"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "49e88f5dde93cf3c5d69a502d4b62160"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "0eff1c60413b3fc8ac728ea333b62e5f"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "4d85191071211bd45e65daffb274db4f"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "843585d3fed26433873b834dd213ed33"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "8307923fb8205d5b0274274eaf16bb28"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "37d3c4a3bdcd67501ccb7d5de59bb088"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "6bdf495fe8e6c5309a9ad744603cfe8f"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "47de2360f825312c072183246750f902"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "5bfdd1eae01423f6bd5ff00c9c91cee5"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "f476b7f526b7e10eb32229d284f38661"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "49413c81c60f3ec5e75e49b2164a113b"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "888d1e8a0b3a943e4c776d27471d1f32"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "9053146d5328ce8ae1d67e1620c32796"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "4fb50d4479d38dd0b87eb89d3978cf5d"
  },
  {
    "url": "architect/authenication.html",
    "revision": "097557e92b859a66226b2513aec3a30b"
  },
  {
    "url": "architect/authorization.html",
    "revision": "ee07bb3b12fcae8d0b069a4c2ba3463b"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "e83ee00a236975dd9ce9d0b4205451b6"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "1871a84efb001aab43b4a9584de99efd"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "7a1d47f2a3210209f60faf5c5624dfe1"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "0d1572f3cffe8ce308f3efd723a9e711"
  },
  {
    "url": "architect/ebi.html",
    "revision": "3654ecdd31ed8fafb24de0e95b0d14fe"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "3fdf3668c23546e818918507403e66fa"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "2b32621e142922475e95a20df1cdd808"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "1c1b9c9b49594db3385a6c39b88c31c1"
  },
  {
    "url": "architect/index.html",
    "revision": "590f7292b5601bff4a93b0c30a9ea3a1"
  },
  {
    "url": "architect/jwt-handling.html",
    "revision": "4b49767a71d03d22558a3de41066981c"
  },
  {
    "url": "architect/messaging.html",
    "revision": "566bcfa1741adcf56511477be0376c76"
  },
  {
    "url": "architect/microservices.html",
    "revision": "121e3d3f01b4962aaa965d849d28c051"
  },
  {
    "url": "architect/mutex.html",
    "revision": "75734d9966c754082c8a02608d30ede8"
  },
  {
    "url": "architect/notes.html",
    "revision": "5df123ab3f4e57035a347be0205d3e62"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "f6380878769342ab6acb6f4d00e00dd8"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "1ae39ad8d4b24ad7113d96af101de458"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "f03dc437380f1a1b370f92ddf7449e77"
  },
  {
    "url": "architect/refs.html",
    "revision": "98b2b6127cd921ed5a2f95bbec2410e5"
  },
  {
    "url": "architect/restful.html",
    "revision": "6ff053c86162a15c967027ff77f836fb"
  },
  {
    "url": "architect/soa.html",
    "revision": "ec48690cde008d7f69e01e8bbfc7694e"
  },
  {
    "url": "architect/spa.html",
    "revision": "8176e7885539f4ccbf50dccd7745cf0a"
  },
  {
    "url": "architect/terms.html",
    "revision": "52d8c938957f2501b3b250967c915c37"
  },
  {
    "url": "architect/webservice.html",
    "revision": "9edfee68e34cd8024b81ca95e48ab55a"
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
    "url": "assets/img/api-architecture-style-comparison.adeb7460.jpeg",
    "revision": "adeb746026c6195847b9f3fafefb1426"
  },
  {
    "url": "assets/img/architecture-stack.8e2d1320.png",
    "revision": "8e2d132089817ea5907912047e3606dd"
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
    "url": "assets/img/docker-image-container.8cc9fded.png",
    "revision": "8cc9fdededede928c3c8b8c30824beb3"
  },
  {
    "url": "assets/img/elbow.854914f2.png",
    "revision": "854914f24e19b27ac064c7ce04ac47f9"
  },
  {
    "url": "assets/img/esb-2.20a0d827.gif",
    "revision": "20a0d827ede99e7f026cc8b716164ae7"
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
    "url": "assets/img/kmean.9065804d.png",
    "revision": "9065804d54cb2f7bfbdd97e0ce85729d"
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
    "url": "assets/img/mysql-string-funcs.fc4eedf0.png",
    "revision": "fc4eedf089d148b5da7f1524c8932602"
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
    "url": "assets/img/tactical-design.71e4f952.png",
    "revision": "71e4f95298df881c042608a304c974b2"
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
    "url": "assets/img/wp-metadatatable.c1b9b204.png",
    "revision": "c1b9b204a09aaad8283b901339daac87"
  },
  {
    "url": "assets/js/10.c5f55a0f.js",
    "revision": "77f310d771d46a22f9f885d10e618771"
  },
  {
    "url": "assets/js/100.7ab720ae.js",
    "revision": "04fd395d7c914f7829ac4ab3937ca95b"
  },
  {
    "url": "assets/js/101.c37d02a3.js",
    "revision": "7be24644b5b5c9a56cdfaf9ba806c995"
  },
  {
    "url": "assets/js/102.a93fbca7.js",
    "revision": "3b6ee745ee8b9e4cdd1e9146e4b6e77d"
  },
  {
    "url": "assets/js/103.b4df452e.js",
    "revision": "41a8b434280734316bd309bbd1e61daa"
  },
  {
    "url": "assets/js/104.1e4f348b.js",
    "revision": "cd6e9acb257a2600f39634b258cb5a96"
  },
  {
    "url": "assets/js/105.3f916374.js",
    "revision": "5b368b46d74982bf3123b8f18793444f"
  },
  {
    "url": "assets/js/106.e5929d31.js",
    "revision": "53966fc9c449bb0b519c59911050d3b6"
  },
  {
    "url": "assets/js/107.81a92c50.js",
    "revision": "9bccec07951991b6f5a08ec42b87c6c7"
  },
  {
    "url": "assets/js/108.8501f11f.js",
    "revision": "9312e2408c52175716584f0fd3cbd803"
  },
  {
    "url": "assets/js/109.25e4c1a4.js",
    "revision": "101d1a8292fe964ce0fdcdc010804212"
  },
  {
    "url": "assets/js/11.149840e3.js",
    "revision": "25fdc4d06a5a20f8b77a9061dc2385c3"
  },
  {
    "url": "assets/js/110.7f921750.js",
    "revision": "3edd28e7690bc2e10c5a4d4c2beedc6a"
  },
  {
    "url": "assets/js/111.b700e6a4.js",
    "revision": "1b7de44bf6f80c4e5a16ada32f98ed34"
  },
  {
    "url": "assets/js/112.713eff45.js",
    "revision": "45a3902d22c9cc4300ca628221b1bd31"
  },
  {
    "url": "assets/js/113.281d5462.js",
    "revision": "f5d41e36d1dd625d82ab5a12e7d4d785"
  },
  {
    "url": "assets/js/114.24ea8610.js",
    "revision": "4717585ef5880ac8b8e944afb4dcf544"
  },
  {
    "url": "assets/js/115.41a1c7d4.js",
    "revision": "0295f73fb8768eeddd336319886ac0a2"
  },
  {
    "url": "assets/js/116.718c3de2.js",
    "revision": "06b82835d76d539a4b18bfbd73cd75fe"
  },
  {
    "url": "assets/js/117.cdd1b67f.js",
    "revision": "2f5aea36dec4cfe366c77f4b0fc6789b"
  },
  {
    "url": "assets/js/118.75a63be2.js",
    "revision": "541fdb0a0721696e284b91abffcd5d65"
  },
  {
    "url": "assets/js/119.f4ebd85f.js",
    "revision": "e26848473223099497152587b39abda1"
  },
  {
    "url": "assets/js/12.829db166.js",
    "revision": "cda7efd20e90ef9cfc452bba14b50bec"
  },
  {
    "url": "assets/js/120.f1ad099c.js",
    "revision": "a59bc4b07c880150016462f65d304de2"
  },
  {
    "url": "assets/js/121.3f41b547.js",
    "revision": "2470ed700c18942548145f8fc492d43b"
  },
  {
    "url": "assets/js/122.98d4c94d.js",
    "revision": "1eaf82a6a15c6e32c53429f964203b48"
  },
  {
    "url": "assets/js/123.59d0b5e6.js",
    "revision": "207f0278f49ff53ffb720189684737e1"
  },
  {
    "url": "assets/js/124.4e36d69d.js",
    "revision": "3356257df6eb793f0a9b9f28e38c9826"
  },
  {
    "url": "assets/js/125.bc3f8bbe.js",
    "revision": "71a928ec7586824cafb58cbb8122779d"
  },
  {
    "url": "assets/js/126.d1341426.js",
    "revision": "a93d4a06498edfbdcc159dd496211f1f"
  },
  {
    "url": "assets/js/127.d2b02577.js",
    "revision": "ff67dc816ddcf41668f9a81056b1abd9"
  },
  {
    "url": "assets/js/128.7749777d.js",
    "revision": "040f3a1943a0efbbae457998279a2b10"
  },
  {
    "url": "assets/js/129.e2f7cfba.js",
    "revision": "62fb9ef7fafe0eec9cb5304b616e20c0"
  },
  {
    "url": "assets/js/13.369aa46e.js",
    "revision": "d29e7a16b09ec9afee3113f2a5af47a8"
  },
  {
    "url": "assets/js/130.c9e36a77.js",
    "revision": "e806e4fad5b5964b86d5572d698f7d56"
  },
  {
    "url": "assets/js/131.d4c65069.js",
    "revision": "29359511d199329d7d92478921c525eb"
  },
  {
    "url": "assets/js/132.75fec3cd.js",
    "revision": "97b4b06d645c36d5374c08caecaacfb3"
  },
  {
    "url": "assets/js/133.fdac588b.js",
    "revision": "6a8fcc2c06572e7372eb074d1659e7b2"
  },
  {
    "url": "assets/js/134.ea97d761.js",
    "revision": "6d72ed0011b5ef527048fd8aa715c37e"
  },
  {
    "url": "assets/js/135.2ba90718.js",
    "revision": "550f9b6db3db82b7cdde961c58a04320"
  },
  {
    "url": "assets/js/136.78a69ae7.js",
    "revision": "2ad53046f08a6172dff3128a1121ccd0"
  },
  {
    "url": "assets/js/137.9b14feaa.js",
    "revision": "6e97db04939f77af2f408e1a4f2b2696"
  },
  {
    "url": "assets/js/138.fba2beab.js",
    "revision": "abee11b3827c4b112641599be89aea88"
  },
  {
    "url": "assets/js/139.273c7b2d.js",
    "revision": "95c01a7a2cb3c318d116802d8f7f01b8"
  },
  {
    "url": "assets/js/14.625e9e9a.js",
    "revision": "9026a63d20ca6f54df1e0deec3bbf2c6"
  },
  {
    "url": "assets/js/140.75aafc5d.js",
    "revision": "ffdd7a069a93af4305316ca43a59d3c0"
  },
  {
    "url": "assets/js/141.b364ff32.js",
    "revision": "e61cbc5ccc52930acbfd4b46b53ebc3d"
  },
  {
    "url": "assets/js/142.87052823.js",
    "revision": "963b9d1988c2dfb03ffc5ef79b64d84e"
  },
  {
    "url": "assets/js/143.946ef278.js",
    "revision": "d1698ce8d781e3c42ecfc46b7ae35d14"
  },
  {
    "url": "assets/js/144.ae39933e.js",
    "revision": "ce78754685c1057ec800a59d4cdc1ce7"
  },
  {
    "url": "assets/js/145.2257e5d8.js",
    "revision": "bdd533a3efd100b4cf7e39356b4335bb"
  },
  {
    "url": "assets/js/146.43aa97df.js",
    "revision": "3dfb1ba30e4749a7c216a903f85594dd"
  },
  {
    "url": "assets/js/147.31cc91a6.js",
    "revision": "616c642009fedeb09b244a5b2cab14f9"
  },
  {
    "url": "assets/js/148.212ae536.js",
    "revision": "d0cf21af1bd68cf687d853046147f8e0"
  },
  {
    "url": "assets/js/149.972f4644.js",
    "revision": "8e4da93adbb00b7bdd052af136d40e17"
  },
  {
    "url": "assets/js/15.a1841f7f.js",
    "revision": "0d33826b604339d8c5704448b3ccbbff"
  },
  {
    "url": "assets/js/150.e81e1c4b.js",
    "revision": "076d39e1228efb51544e9fdf5b2c8698"
  },
  {
    "url": "assets/js/151.bc5a9903.js",
    "revision": "2e7dc80738cc4c625721351086d92a7b"
  },
  {
    "url": "assets/js/152.6e170c5a.js",
    "revision": "fc48bebda9b5e0b5545accd8d52e213e"
  },
  {
    "url": "assets/js/153.f1e4f76b.js",
    "revision": "0d3a025730e2ba14acb705d877472ff9"
  },
  {
    "url": "assets/js/154.406e5450.js",
    "revision": "7ff97f53ab864c2aef78833a29809bff"
  },
  {
    "url": "assets/js/155.4a5f83fd.js",
    "revision": "223cc2292c94dbb71239209064d37eed"
  },
  {
    "url": "assets/js/156.ace4ceb0.js",
    "revision": "b3b027c6b6ff7795bdc6b82ba1060a7c"
  },
  {
    "url": "assets/js/157.652e3f2e.js",
    "revision": "46c25270754443c1be47b4c19d33fa83"
  },
  {
    "url": "assets/js/158.4877ec08.js",
    "revision": "4bcf554892d141f915eb2f9fa000da5a"
  },
  {
    "url": "assets/js/159.56a66264.js",
    "revision": "11029a18f6c050b4d0f6ab7d9cee1dc3"
  },
  {
    "url": "assets/js/16.231e7144.js",
    "revision": "d9642f64fe309045dc4dc3e9dcd3733a"
  },
  {
    "url": "assets/js/160.9caeada4.js",
    "revision": "c3f4f201f1af6121e59ef7c4816d54e0"
  },
  {
    "url": "assets/js/161.ddcc74d4.js",
    "revision": "85bde9aa748562768b0075c22f9aec74"
  },
  {
    "url": "assets/js/162.38ef800f.js",
    "revision": "d63a85d1f702de772018d66e4c929165"
  },
  {
    "url": "assets/js/163.147fc59c.js",
    "revision": "53aedb72d8a6414974fefbd346a3b004"
  },
  {
    "url": "assets/js/164.2e222564.js",
    "revision": "58333ca5319d7ce9001bee5108cedcb4"
  },
  {
    "url": "assets/js/165.fd1e5180.js",
    "revision": "72da1b3562355bb875c7a83e1774d6f8"
  },
  {
    "url": "assets/js/166.b98a6749.js",
    "revision": "656ffaee2e66f02591a5d3204139d1f0"
  },
  {
    "url": "assets/js/167.172e177f.js",
    "revision": "7c80cb0cfc03d8c0837aefa39fd22c3e"
  },
  {
    "url": "assets/js/168.396028c7.js",
    "revision": "59a47a21a6874794924a2d2ea2bbe8c6"
  },
  {
    "url": "assets/js/169.8bd40ec5.js",
    "revision": "ad60fc1650fad538502d3e83ddf9f4ca"
  },
  {
    "url": "assets/js/17.5485e858.js",
    "revision": "3e39ed5f536bef2030fc5ad0dcb0b037"
  },
  {
    "url": "assets/js/170.737b6ee9.js",
    "revision": "9ac7949acc8250204dd0c6551111cc01"
  },
  {
    "url": "assets/js/171.0c4b9715.js",
    "revision": "3e5edbe65dc3766d19271ecfc489ba05"
  },
  {
    "url": "assets/js/172.4d13c457.js",
    "revision": "e6d06d413e12f425027c06202c3d6397"
  },
  {
    "url": "assets/js/173.de0c6b44.js",
    "revision": "69eef5af367478bd16d8e5c074129189"
  },
  {
    "url": "assets/js/174.51694501.js",
    "revision": "6eac04b5c808c0d56da20e6231774350"
  },
  {
    "url": "assets/js/175.831f94d6.js",
    "revision": "24b7dbafb241de6c6ab2cb71f968c968"
  },
  {
    "url": "assets/js/176.099810ec.js",
    "revision": "acae1d5b2be486d7aa00239daaeb55dd"
  },
  {
    "url": "assets/js/177.14a8f2e8.js",
    "revision": "f8a22445f25b8ef232550e2bd132e971"
  },
  {
    "url": "assets/js/178.276f0f3f.js",
    "revision": "0f92ccde87ee19e47a8517bb197b3d3c"
  },
  {
    "url": "assets/js/179.59bedee1.js",
    "revision": "ccd0708425789f0c1db1a5b0162ea5a9"
  },
  {
    "url": "assets/js/18.204742d0.js",
    "revision": "c1f0c954cc2d86d311bd31fe7555c54a"
  },
  {
    "url": "assets/js/180.618d0a12.js",
    "revision": "ae3016943ce5990a9581496c3bd98cc4"
  },
  {
    "url": "assets/js/181.a851a820.js",
    "revision": "c46447f4a31a479a8fee4bdd6587e29b"
  },
  {
    "url": "assets/js/182.3ee41ba5.js",
    "revision": "1d5ef9cdd5e6f19d8be3f3c595602d15"
  },
  {
    "url": "assets/js/183.3478d38f.js",
    "revision": "aa958f67a40d1096510a14f06315b5e9"
  },
  {
    "url": "assets/js/184.638d04ea.js",
    "revision": "396de1c3dcf0dca3ccf735cb676c439d"
  },
  {
    "url": "assets/js/185.ae209cc8.js",
    "revision": "f76c3c877ccf03c0d4602f5cd532f3de"
  },
  {
    "url": "assets/js/186.12502fb1.js",
    "revision": "361502c96b6a1da32c3c996e64b14c8e"
  },
  {
    "url": "assets/js/187.3b350c5e.js",
    "revision": "587cadddf1a63b77c98fa1f64c9743e6"
  },
  {
    "url": "assets/js/188.2cd45152.js",
    "revision": "eb8b8bdd1721793b7e61924afe504dc3"
  },
  {
    "url": "assets/js/189.2a1bcebe.js",
    "revision": "2562cb87fcf266d7b1ec36cbdc395c06"
  },
  {
    "url": "assets/js/19.05c4e7e5.js",
    "revision": "c45ea5ef645a133c7947f06ae0eff3c5"
  },
  {
    "url": "assets/js/190.381306ad.js",
    "revision": "b276d26b90d2be115b68c671e2dabeb0"
  },
  {
    "url": "assets/js/191.7a5637ef.js",
    "revision": "b25fe62b4298edd329cab99fb126ad75"
  },
  {
    "url": "assets/js/192.c70b93f9.js",
    "revision": "24263b82b07e29521c430951aae4ffed"
  },
  {
    "url": "assets/js/193.130e0261.js",
    "revision": "738583eade32799b083e142954805274"
  },
  {
    "url": "assets/js/194.9b53621a.js",
    "revision": "a220af6f1f2147db8e2ba15938098239"
  },
  {
    "url": "assets/js/195.82969fe9.js",
    "revision": "49820e4ca70fcd574a0814e25bdb7135"
  },
  {
    "url": "assets/js/196.6aafdd35.js",
    "revision": "ab22ae7f01b15cf3fcf95339866c983a"
  },
  {
    "url": "assets/js/197.daf1fa58.js",
    "revision": "222d3d2a632073d8cbf01ca48a9d7174"
  },
  {
    "url": "assets/js/198.72f88903.js",
    "revision": "0c41093bed6960a4bcdc25af81adf28a"
  },
  {
    "url": "assets/js/199.019c623f.js",
    "revision": "f1f62e8ce4549cf84e50249e04bf2299"
  },
  {
    "url": "assets/js/2.7a13999e.js",
    "revision": "142fd338694506b1d61233a448199897"
  },
  {
    "url": "assets/js/20.addc296e.js",
    "revision": "59668ddbcce2d33b9bd9735f7191d90c"
  },
  {
    "url": "assets/js/200.364ec175.js",
    "revision": "8e7fda05be08ec958567f985ebe767f7"
  },
  {
    "url": "assets/js/201.49f8aa9a.js",
    "revision": "7e24b647d6043663fe611ebcb07a9765"
  },
  {
    "url": "assets/js/202.afbc2db8.js",
    "revision": "89fd6cc63cca0f4d7ee023186b9f533e"
  },
  {
    "url": "assets/js/203.d5a8e44f.js",
    "revision": "26254abcbe72d5efd38c4f6fbece781b"
  },
  {
    "url": "assets/js/204.230b8103.js",
    "revision": "a914d4f4600cbed2e6ebac7657879366"
  },
  {
    "url": "assets/js/205.1d974ddd.js",
    "revision": "d0b99f3da9d0616594894f75649a23cf"
  },
  {
    "url": "assets/js/206.0fa61ee8.js",
    "revision": "06dc07983e6de6c2603227c6b77ff704"
  },
  {
    "url": "assets/js/207.b4d32d55.js",
    "revision": "2a8a908601f06e44da72982c79c4c9bc"
  },
  {
    "url": "assets/js/208.53808aa9.js",
    "revision": "1223a8703043ce416786d4ab9ec74f19"
  },
  {
    "url": "assets/js/209.9af4566f.js",
    "revision": "dc219438d353686bf257bae912f97edf"
  },
  {
    "url": "assets/js/21.66931386.js",
    "revision": "c7ab6fd6a533571441a260632274b335"
  },
  {
    "url": "assets/js/210.2f79d615.js",
    "revision": "dbe27fb23dd9a76d6e4bb1c3302f793c"
  },
  {
    "url": "assets/js/211.066a3dd6.js",
    "revision": "d28d96feedd5ba31c22d78e43dddfd0c"
  },
  {
    "url": "assets/js/212.b431f0ce.js",
    "revision": "030ff63040849b2379b10ebea1f6e676"
  },
  {
    "url": "assets/js/213.64114a19.js",
    "revision": "9298deb694cb87293eca62e337a62645"
  },
  {
    "url": "assets/js/214.5be4c79d.js",
    "revision": "db7c87f77cfa070e2b9c2b25b66f3b8b"
  },
  {
    "url": "assets/js/215.5374ca6e.js",
    "revision": "ea4929d98a689a812801e426f01679a3"
  },
  {
    "url": "assets/js/216.83eb1ca0.js",
    "revision": "2f774545049d35d90c6f371dbf45914e"
  },
  {
    "url": "assets/js/217.9c144762.js",
    "revision": "62f5ff45da0ef9b0ec8a6844a8f518e2"
  },
  {
    "url": "assets/js/218.c6226a35.js",
    "revision": "eaa7db3f52cf13c290b1cf3c387eaadb"
  },
  {
    "url": "assets/js/219.498143f8.js",
    "revision": "8e671933a6d87aab8334324768990fa1"
  },
  {
    "url": "assets/js/22.779d9960.js",
    "revision": "92df6a8eae43f5d8991670f40a6139de"
  },
  {
    "url": "assets/js/220.a6a7528f.js",
    "revision": "4ebfe73898875ddd519ac3a9563611db"
  },
  {
    "url": "assets/js/221.2054fc16.js",
    "revision": "36ba5195c36ac3034b285858b32ae9eb"
  },
  {
    "url": "assets/js/222.3af7dbc0.js",
    "revision": "61dd9baf34d8c79db084631bbba53999"
  },
  {
    "url": "assets/js/223.2dff0402.js",
    "revision": "ab51e6dddbcb1cc3f173997f244a0116"
  },
  {
    "url": "assets/js/224.bfba14c5.js",
    "revision": "46759e534a6aa1de2872e149dad2b632"
  },
  {
    "url": "assets/js/225.92858883.js",
    "revision": "ea3b930d0967454c3f8bd5692c29cc1a"
  },
  {
    "url": "assets/js/226.1030e15b.js",
    "revision": "a67eb05ad499da7e322d072bf584bf6d"
  },
  {
    "url": "assets/js/227.7c6295c5.js",
    "revision": "69fa4fa616e8262b95ecaa69eb2c2935"
  },
  {
    "url": "assets/js/228.22bb2e61.js",
    "revision": "49e5923cb17bf25a946d0ac5e66639e5"
  },
  {
    "url": "assets/js/229.9db580fc.js",
    "revision": "0a3ab87d142eaf88b4d938bd332a9663"
  },
  {
    "url": "assets/js/23.f353067d.js",
    "revision": "8a9fee0d6a0e68e60087985eb02d426c"
  },
  {
    "url": "assets/js/230.1af619eb.js",
    "revision": "f42c2e1513cade4c24b2157e6c94b2c4"
  },
  {
    "url": "assets/js/231.66116849.js",
    "revision": "adef769167a14ea49de31bd529db7451"
  },
  {
    "url": "assets/js/232.21df3855.js",
    "revision": "9de7003bf60f4d9c8c2835c0ad9701b4"
  },
  {
    "url": "assets/js/233.d9b6140f.js",
    "revision": "d25b81ed49088121f15460ed7456b5b1"
  },
  {
    "url": "assets/js/234.39a9aedb.js",
    "revision": "fd2768c3eaf88355e3d7c334e702afc7"
  },
  {
    "url": "assets/js/235.e01ccb5f.js",
    "revision": "13205b9ee096e378e0261fc849c5aca7"
  },
  {
    "url": "assets/js/236.f3841d1c.js",
    "revision": "fd3dca7922f75dbf449816c677a60c4b"
  },
  {
    "url": "assets/js/237.e93e8ed0.js",
    "revision": "9a23b79f179b201538d9fd1f82b4af64"
  },
  {
    "url": "assets/js/238.0ecb55a3.js",
    "revision": "134187c1cf2e5e8566d0c0fce105d101"
  },
  {
    "url": "assets/js/239.beafac9f.js",
    "revision": "0689645d139109f6bf161d9901b04fc1"
  },
  {
    "url": "assets/js/24.4b67e339.js",
    "revision": "b7e1e748d8453c632bf9c27529cfa8af"
  },
  {
    "url": "assets/js/240.b10037e7.js",
    "revision": "9e960820e05ef02835a8967ee0aa6d3c"
  },
  {
    "url": "assets/js/241.fe25b4a2.js",
    "revision": "4388347d1955075b5f1f50017803d4b0"
  },
  {
    "url": "assets/js/242.92df0aeb.js",
    "revision": "fac6e4afef966339495f743f545d4546"
  },
  {
    "url": "assets/js/243.e2a1bbcd.js",
    "revision": "447b45e62e33e4d86022de8a2f67ec02"
  },
  {
    "url": "assets/js/244.2b7d86bd.js",
    "revision": "171d83084ac742ee471990166cc1749b"
  },
  {
    "url": "assets/js/245.18e9623d.js",
    "revision": "c3a812b75eec197ac355a50d10d3f763"
  },
  {
    "url": "assets/js/246.cd80ad49.js",
    "revision": "2c87e928b1fb0bcd827be3e6c56424f9"
  },
  {
    "url": "assets/js/247.dfb45324.js",
    "revision": "8c5ff96aab796e3fe9fbf8dfa6d6ecd5"
  },
  {
    "url": "assets/js/248.683a76e2.js",
    "revision": "2b6a1ebd669eabbb930b5771d09f5518"
  },
  {
    "url": "assets/js/249.d7694b7d.js",
    "revision": "f5aef2b0d975f8e926b5e5874a49b1d4"
  },
  {
    "url": "assets/js/25.27297a82.js",
    "revision": "6485561ba0a1e3edee6614ca3fa4b29f"
  },
  {
    "url": "assets/js/250.b6626aa1.js",
    "revision": "31d7dea151976fe916aba82a1f944c04"
  },
  {
    "url": "assets/js/251.13bc65f7.js",
    "revision": "14799cbdafdd82c53677578052592d8b"
  },
  {
    "url": "assets/js/252.552a03f0.js",
    "revision": "25b7b94402e7c393d90bbfd0b8a2f1b9"
  },
  {
    "url": "assets/js/253.8a2807b7.js",
    "revision": "9c049deb808b64803f7896181d935d43"
  },
  {
    "url": "assets/js/254.2b0b51e1.js",
    "revision": "720c5e71be893eb32c163d9c6f8f5ffe"
  },
  {
    "url": "assets/js/255.6e9677bf.js",
    "revision": "950a7ec1e0f0a8a4188f46852920a95c"
  },
  {
    "url": "assets/js/256.34ddd0b3.js",
    "revision": "545a574943b9712872743eb0a9faab1a"
  },
  {
    "url": "assets/js/257.c340a2fe.js",
    "revision": "d27b43c8b0993af4238a485d9379b1c9"
  },
  {
    "url": "assets/js/258.655de47b.js",
    "revision": "9a82fdb2beac50c884d8aad75ed2a76f"
  },
  {
    "url": "assets/js/259.a1becd2f.js",
    "revision": "b81446f06533dc02570c5b39e58f769d"
  },
  {
    "url": "assets/js/26.ffb63e55.js",
    "revision": "ea798308d822652d7e7fd955d94a954e"
  },
  {
    "url": "assets/js/260.6e4b6ebd.js",
    "revision": "fe412d7652777c5f60446e61aa3200f0"
  },
  {
    "url": "assets/js/261.1d3f62c0.js",
    "revision": "3c7b35c25ac9ddc8b48cd21a88f64339"
  },
  {
    "url": "assets/js/262.95f940d4.js",
    "revision": "b4d85bf14345438266f5649d567a2122"
  },
  {
    "url": "assets/js/263.1e1448c6.js",
    "revision": "9fad623f56c67079394b5bfdbc560e20"
  },
  {
    "url": "assets/js/264.2a2752f2.js",
    "revision": "f5b760bd90d68144ba484cd4d0eec4fe"
  },
  {
    "url": "assets/js/265.63df910b.js",
    "revision": "38ae9578a5f0bcb7a0b90143f269bf5d"
  },
  {
    "url": "assets/js/266.61c83210.js",
    "revision": "a293a57bb7963922589e351a0b563e96"
  },
  {
    "url": "assets/js/267.453d5ff5.js",
    "revision": "415704cc98fc968955bd958af2e21aa7"
  },
  {
    "url": "assets/js/268.3cc87e70.js",
    "revision": "13260fe68646d8c243acf67f53adb2ff"
  },
  {
    "url": "assets/js/269.c756079b.js",
    "revision": "baa0f83f79e073cbfab9a7a9bb30e2df"
  },
  {
    "url": "assets/js/27.499ed214.js",
    "revision": "09c87062b2cb543297a90c6bfaaa05f7"
  },
  {
    "url": "assets/js/270.e04f498a.js",
    "revision": "2fcb6cb4a997dbf6cee40c423fb06bc9"
  },
  {
    "url": "assets/js/271.0432aceb.js",
    "revision": "3b2a3d9f37f2f103542f08f8a7bc9362"
  },
  {
    "url": "assets/js/272.c90a2fef.js",
    "revision": "b057f3de51ab38ae179cfbf3393d8cda"
  },
  {
    "url": "assets/js/273.155cf7e1.js",
    "revision": "f438eacc47bb87d029b73001b63431dc"
  },
  {
    "url": "assets/js/274.1245665a.js",
    "revision": "d154ce16e212eabec4ea7ef7a3da0c24"
  },
  {
    "url": "assets/js/275.a71bb527.js",
    "revision": "a0b4881cac2b2e182e6097d118e6f0f4"
  },
  {
    "url": "assets/js/276.144f1677.js",
    "revision": "97637104c1323209bb3a12858c5b3f8c"
  },
  {
    "url": "assets/js/277.b291dad6.js",
    "revision": "06e7b4dfbfae2f4a33f9d65ad08e2e97"
  },
  {
    "url": "assets/js/278.a9261f9b.js",
    "revision": "631ed22b7d484974b690b0b50d0a9de5"
  },
  {
    "url": "assets/js/279.46a773f5.js",
    "revision": "ab4f122492ddd75a87c131c87abf7e16"
  },
  {
    "url": "assets/js/28.04ada537.js",
    "revision": "b338bcfbaa7e526afe7d8ec441f921da"
  },
  {
    "url": "assets/js/280.aa395eb0.js",
    "revision": "28d0d7ecb8174ba2d204a22924c4eed0"
  },
  {
    "url": "assets/js/281.001a68fe.js",
    "revision": "7f1508d88ee4940da54c95a56d86b823"
  },
  {
    "url": "assets/js/282.48948e72.js",
    "revision": "689ae0b5f81c73b2559c3232bf62baf5"
  },
  {
    "url": "assets/js/283.a922f77e.js",
    "revision": "c1e1ed3d750d4bac98d38d22fe749aa0"
  },
  {
    "url": "assets/js/284.9e774478.js",
    "revision": "39ce7124a508483d3d3f81df523117fd"
  },
  {
    "url": "assets/js/285.fa9b4a30.js",
    "revision": "8046ce138002275460d5bd6fae5274d8"
  },
  {
    "url": "assets/js/286.7b0e6e4d.js",
    "revision": "3e97e1ad2aa5f02555310eb738bab5d0"
  },
  {
    "url": "assets/js/287.c0203ae6.js",
    "revision": "e17b61d23132b60dccfb6d8bdd19bbe7"
  },
  {
    "url": "assets/js/288.f8770aad.js",
    "revision": "c23e55a4b03a00f8b55b4bee6a151da6"
  },
  {
    "url": "assets/js/289.b4de7df0.js",
    "revision": "c28e865260b1fde98e101e0db72de9fd"
  },
  {
    "url": "assets/js/29.e55258c7.js",
    "revision": "7c6aa3a9164633ff88048155e13c6965"
  },
  {
    "url": "assets/js/290.58275e95.js",
    "revision": "3b0d454985f64ac155b59c7b56dabf1d"
  },
  {
    "url": "assets/js/291.8318a1bb.js",
    "revision": "cc2d6e91afd04a8aa3af646853868c9d"
  },
  {
    "url": "assets/js/292.d22fdabc.js",
    "revision": "a6914336a208b0ac2e2e65d8501c8c24"
  },
  {
    "url": "assets/js/293.2e61fbfe.js",
    "revision": "551a5c1bb91271cfc11aadc29303777a"
  },
  {
    "url": "assets/js/294.1651af0e.js",
    "revision": "d623f80a66b3a4b5b3bbaf0a8a282f43"
  },
  {
    "url": "assets/js/295.0f548bba.js",
    "revision": "77f31bb0cbdebec58a5b41acab6c034c"
  },
  {
    "url": "assets/js/296.8f32d115.js",
    "revision": "af08582c94b159f5eb947146d2b8d2b9"
  },
  {
    "url": "assets/js/297.c6f271db.js",
    "revision": "6c6029993a5e63898bfcf235d90b27cc"
  },
  {
    "url": "assets/js/298.f6cb8d84.js",
    "revision": "6b214791144bea315bcea5d76d676e70"
  },
  {
    "url": "assets/js/299.6140cec6.js",
    "revision": "52d894e52ec6b7dbc9b0e382f0190e83"
  },
  {
    "url": "assets/js/3.773f8fa1.js",
    "revision": "2797484e21e57b9e9f26f6f102cef6d9"
  },
  {
    "url": "assets/js/30.1a617df9.js",
    "revision": "ba199d59a3ce42038a1e100ee6e40d5c"
  },
  {
    "url": "assets/js/300.c2035067.js",
    "revision": "bd28f29bf199418cd24d7159af1a95a5"
  },
  {
    "url": "assets/js/301.9ac154c9.js",
    "revision": "f0eab5752e61d92921b04f08fd3f1fdf"
  },
  {
    "url": "assets/js/302.4273ed73.js",
    "revision": "cc35a338bc246924c18b378cc109976c"
  },
  {
    "url": "assets/js/303.49d52c1d.js",
    "revision": "5bef692b13fa7cbb5a65e1fcad4e31b1"
  },
  {
    "url": "assets/js/304.0aad1e51.js",
    "revision": "1f3c440c6ba639c8c0df022700d5d937"
  },
  {
    "url": "assets/js/305.e01d6905.js",
    "revision": "03a53ad74b51d24c8692c7b6c6adfc89"
  },
  {
    "url": "assets/js/306.2a07d24b.js",
    "revision": "b60ffcf4b5bf5440688058f38819c14d"
  },
  {
    "url": "assets/js/307.c1b9744f.js",
    "revision": "6485ef639feaf8a2e642548a88a85e71"
  },
  {
    "url": "assets/js/308.3233c686.js",
    "revision": "5d696fe0da672c50b5119306f55e1d9e"
  },
  {
    "url": "assets/js/309.bbf5d6f6.js",
    "revision": "8b7ddbea5e4ba3dea7e1bc8d92e6b416"
  },
  {
    "url": "assets/js/31.d7e1ff86.js",
    "revision": "88c515cd6d7075253e2997d90ac0f580"
  },
  {
    "url": "assets/js/310.5ffa878c.js",
    "revision": "b3d2fa15bd02c70cefa463aa528df858"
  },
  {
    "url": "assets/js/311.41e90133.js",
    "revision": "a4b4e23942a8c73828e2881265813da4"
  },
  {
    "url": "assets/js/312.183b1c91.js",
    "revision": "fe095a1da6f974164980f019380647a5"
  },
  {
    "url": "assets/js/313.f1d7fb4c.js",
    "revision": "b4d60a6fcebf15e9a5830ed8243ebc80"
  },
  {
    "url": "assets/js/314.3c4bd526.js",
    "revision": "eb88f085127f6694ef89311f4f118e34"
  },
  {
    "url": "assets/js/315.289835c5.js",
    "revision": "f3f283b68561f1123b8b4f92dc72b5b1"
  },
  {
    "url": "assets/js/316.dad42d14.js",
    "revision": "a0b947f234a7cb8906cf8efcd2cf8dfa"
  },
  {
    "url": "assets/js/317.9c0f0aef.js",
    "revision": "5564c5e6342fa68dcf3bf0e5d8e8ac80"
  },
  {
    "url": "assets/js/318.3c6d225e.js",
    "revision": "10703f9a61e221f0b57b2cb59e8ec924"
  },
  {
    "url": "assets/js/319.82849f37.js",
    "revision": "224593d00fa355fb0d28b0249ada44e5"
  },
  {
    "url": "assets/js/32.2bfd2f5f.js",
    "revision": "ccf6ce6b342bb0ae9ffc127360ccc6e0"
  },
  {
    "url": "assets/js/320.19247495.js",
    "revision": "6756ce27b987713ffc5b686807b3ce17"
  },
  {
    "url": "assets/js/321.24228ffa.js",
    "revision": "08751a22cb79d0e18614f4be1b248407"
  },
  {
    "url": "assets/js/322.b7ab390c.js",
    "revision": "f1d3022ef637807df822568a8c72b253"
  },
  {
    "url": "assets/js/323.047a5e3f.js",
    "revision": "1ae5a1709eb6774c58259df1d4abbd58"
  },
  {
    "url": "assets/js/324.8e323d8a.js",
    "revision": "13aa22aff88aec34907bde6d82a58b6a"
  },
  {
    "url": "assets/js/325.1fbd348c.js",
    "revision": "c6a9ce90351855829c9d1ecc484b41ce"
  },
  {
    "url": "assets/js/326.4dae7b32.js",
    "revision": "4a710853e7028825468094718a224948"
  },
  {
    "url": "assets/js/327.b41c1f32.js",
    "revision": "ea45ef1a3cc42be6500eb51a9dc1e528"
  },
  {
    "url": "assets/js/328.1f75cd31.js",
    "revision": "c567b42f9aaa344373b3152f99fd325e"
  },
  {
    "url": "assets/js/329.f060c752.js",
    "revision": "f2b18311fb7e1c87e8fc41582d722fac"
  },
  {
    "url": "assets/js/33.9944f6dc.js",
    "revision": "3c0e00fd8706ab7a2d803e1b38114d95"
  },
  {
    "url": "assets/js/330.e8834b00.js",
    "revision": "fdc2f07b1b597da2191357631a84e493"
  },
  {
    "url": "assets/js/331.0ae7632d.js",
    "revision": "b2336f36192a8eb6dad68b5f6b68fb9a"
  },
  {
    "url": "assets/js/332.7275b4dd.js",
    "revision": "67dfc9f45a1f9fb638f5a6664bfccc1d"
  },
  {
    "url": "assets/js/333.ece13b8c.js",
    "revision": "5809e0389a82602c8c0fc1cda0d744da"
  },
  {
    "url": "assets/js/334.12059013.js",
    "revision": "1aaf23eec4198f95e3650022b980b24f"
  },
  {
    "url": "assets/js/335.5d22b7a7.js",
    "revision": "7adfa57978105ccc981a79cce2f03af5"
  },
  {
    "url": "assets/js/336.be1756be.js",
    "revision": "027c5ab3825749bfdcdc144ff76a5415"
  },
  {
    "url": "assets/js/337.f058796f.js",
    "revision": "d7fbdb706c34ee70fea6c2b19e6c0f6a"
  },
  {
    "url": "assets/js/338.043872f5.js",
    "revision": "62251907dbadb9fd797aa4c455b26e6f"
  },
  {
    "url": "assets/js/339.c6fc7bd3.js",
    "revision": "2ec5a45e0143fd744372703e5c942a1f"
  },
  {
    "url": "assets/js/34.5fb6a803.js",
    "revision": "3ad5a7eccb259f131174d852a04fbb6f"
  },
  {
    "url": "assets/js/340.be653c3f.js",
    "revision": "08fb8a3d73f0f5da166cb7035baa4491"
  },
  {
    "url": "assets/js/341.24edea6a.js",
    "revision": "fde862684015193f2a1b428824b13c20"
  },
  {
    "url": "assets/js/342.1409d7fa.js",
    "revision": "c0a4f236d327c8c02c5a5f25b61ad211"
  },
  {
    "url": "assets/js/343.bd5e86d6.js",
    "revision": "bb6be72adc75b2bc5cee3e24b3c09653"
  },
  {
    "url": "assets/js/344.0bde4896.js",
    "revision": "cb467b2662237ac98802b68ce194c2e8"
  },
  {
    "url": "assets/js/345.55212ace.js",
    "revision": "5ba40d82f79d7cce24eb97e1882ab6fe"
  },
  {
    "url": "assets/js/346.15507f6b.js",
    "revision": "8061ceacd04079e6ce46bf3fe314665a"
  },
  {
    "url": "assets/js/347.fcb6f566.js",
    "revision": "737ac188c6a69b75d493dcad715292c1"
  },
  {
    "url": "assets/js/348.7b6055fc.js",
    "revision": "1d7c399215eb506aef86beedbc34aeea"
  },
  {
    "url": "assets/js/349.18f318ed.js",
    "revision": "fd642c6a7d2ae526ba204c489ba965aa"
  },
  {
    "url": "assets/js/35.12708d37.js",
    "revision": "ef3c167e10da0b044de6c78217f11b86"
  },
  {
    "url": "assets/js/350.c245d00a.js",
    "revision": "33756ecb7dab8afa97f2827db2cffc12"
  },
  {
    "url": "assets/js/351.1265a3d9.js",
    "revision": "909c02864be1d86367ee9c33f6dd8c7a"
  },
  {
    "url": "assets/js/352.fddb3e84.js",
    "revision": "a378f1c4ed022b6898b44f57a2fb0fa9"
  },
  {
    "url": "assets/js/353.7971f243.js",
    "revision": "64e8c9bfe8f720bc13518269d609d779"
  },
  {
    "url": "assets/js/354.1674de7a.js",
    "revision": "1896f5109fe977c0806e697faa214265"
  },
  {
    "url": "assets/js/355.e4883ba0.js",
    "revision": "fa612c87949d844720b901bd16817512"
  },
  {
    "url": "assets/js/356.8c8ba0b2.js",
    "revision": "07c4ae793632fd0cc757237c8ec68508"
  },
  {
    "url": "assets/js/357.dc6c3ef5.js",
    "revision": "04c44b9eaf2ed29ddba20fc4073923e3"
  },
  {
    "url": "assets/js/358.48aa4fcb.js",
    "revision": "9c4881455c073698b66e9508de7a61fd"
  },
  {
    "url": "assets/js/359.3bfd1278.js",
    "revision": "b06e837bf16d377c30d04db2ec1351aa"
  },
  {
    "url": "assets/js/36.9171b290.js",
    "revision": "12698d58514c3540c55b4f9855bae7b7"
  },
  {
    "url": "assets/js/360.9f3e81da.js",
    "revision": "0b1aaea441bf7417ce27296691094d5f"
  },
  {
    "url": "assets/js/361.586fc995.js",
    "revision": "71c3dff2713290a6417d9e75a855ac91"
  },
  {
    "url": "assets/js/362.ffd961b7.js",
    "revision": "afb17493c7e66bfb45279185625efb5a"
  },
  {
    "url": "assets/js/363.a8655845.js",
    "revision": "da51c0550d048ee7c48c82b2f5e5ea21"
  },
  {
    "url": "assets/js/364.d68e2f2f.js",
    "revision": "c46516ff27263f568c77dcd0e26eabe3"
  },
  {
    "url": "assets/js/365.53fa8c1f.js",
    "revision": "fbdb3d4cbf312f09543b3e40f9317337"
  },
  {
    "url": "assets/js/366.9ddb6ce3.js",
    "revision": "d9bb63032d7b1362e427fe819092b031"
  },
  {
    "url": "assets/js/367.286bfd02.js",
    "revision": "13862d72a93b88aef11121240227c250"
  },
  {
    "url": "assets/js/368.cfbcf1f2.js",
    "revision": "c1610f61a3e5f5c2ec17a1d1dd7de940"
  },
  {
    "url": "assets/js/369.00f9ed4e.js",
    "revision": "515f601d0544882384558a4e7dfa4744"
  },
  {
    "url": "assets/js/37.507d164b.js",
    "revision": "0bdebc6f5203c53a89183cd60dfde0b0"
  },
  {
    "url": "assets/js/370.bc6d8562.js",
    "revision": "41cce4cd3ecec062bcb10d57a6614fa8"
  },
  {
    "url": "assets/js/371.4127255a.js",
    "revision": "81fe5dc23ebf6c7dd8c7c7c6016765b7"
  },
  {
    "url": "assets/js/372.10cd3cad.js",
    "revision": "007a86d95e2a36d598421d4e197e789b"
  },
  {
    "url": "assets/js/373.4680330e.js",
    "revision": "e4c4df84414170846f7352ea6d885619"
  },
  {
    "url": "assets/js/374.0a4e4d5e.js",
    "revision": "6d50c62091cad0adabba94c2f43e4086"
  },
  {
    "url": "assets/js/375.a7e9b540.js",
    "revision": "97361d57764bb7814b0ce30db4a926da"
  },
  {
    "url": "assets/js/376.9e7c58d5.js",
    "revision": "7f4cb9d5bb6070c0bd5ca03c7a885202"
  },
  {
    "url": "assets/js/377.6e9306b8.js",
    "revision": "980d8c708cc6c8c3ddcf619d0173bbc9"
  },
  {
    "url": "assets/js/378.5b088ed5.js",
    "revision": "a701f5c5c808a0ac38e66aa0de82a692"
  },
  {
    "url": "assets/js/379.9031f86d.js",
    "revision": "e561ca8000d40f3da05cb6ee1754c526"
  },
  {
    "url": "assets/js/38.873a5f60.js",
    "revision": "5b4a5d201ce5357d28cf7ec385153597"
  },
  {
    "url": "assets/js/380.142695fd.js",
    "revision": "6f1a9bf70d09c1d34ba9965cd59bcd6d"
  },
  {
    "url": "assets/js/381.42967890.js",
    "revision": "30a8bf4964384d27f94e885a90ae62e4"
  },
  {
    "url": "assets/js/382.fcd399ac.js",
    "revision": "ed51ab746dc9bbb2a8d069e4d3e62b6a"
  },
  {
    "url": "assets/js/383.f676a239.js",
    "revision": "543f83b03511f1b18aae88187fbe37db"
  },
  {
    "url": "assets/js/384.2c3240a5.js",
    "revision": "fa2373b37eff70dac31ce4cd4a84e4de"
  },
  {
    "url": "assets/js/385.79e22854.js",
    "revision": "d91afd1aff52efe1b71fe278d8763c92"
  },
  {
    "url": "assets/js/386.202eb42e.js",
    "revision": "4d86b623208b7f7a5025b560c2d96285"
  },
  {
    "url": "assets/js/387.032a294d.js",
    "revision": "8b057d51815ec9b4ce4391b0550cdfdc"
  },
  {
    "url": "assets/js/388.fc4466e5.js",
    "revision": "de98d257d77d71660494959eb5494aae"
  },
  {
    "url": "assets/js/389.f534cf73.js",
    "revision": "b31eb4f5c501b95a1f8624112f8d26be"
  },
  {
    "url": "assets/js/39.752533d4.js",
    "revision": "217639f6d1c82449d03a14c3562c0db5"
  },
  {
    "url": "assets/js/390.9ae82fba.js",
    "revision": "7035d434f4aac093821c9a736001627a"
  },
  {
    "url": "assets/js/391.eb674ad1.js",
    "revision": "157e5352dfe05dab48969601281c3a86"
  },
  {
    "url": "assets/js/392.9e0abaf2.js",
    "revision": "d92ebcc5e36c9a6b356da3029acc6542"
  },
  {
    "url": "assets/js/393.73f01bab.js",
    "revision": "0395aa587d786cf2fc558aa8f1e25b6c"
  },
  {
    "url": "assets/js/394.52840c1b.js",
    "revision": "1b9a846f9f5a5425c415ba70db5c7ccf"
  },
  {
    "url": "assets/js/395.ff6e2d13.js",
    "revision": "69527d103ecd10f3811e7ca803044489"
  },
  {
    "url": "assets/js/396.a7e4089f.js",
    "revision": "6fed0edf0bc530c1c5c1d45146b328b0"
  },
  {
    "url": "assets/js/397.29f2b369.js",
    "revision": "3c5462ca3c8beb6391b54c22999a2e12"
  },
  {
    "url": "assets/js/398.fbff851e.js",
    "revision": "9cec1220e131fb7213cdc1c30f03d666"
  },
  {
    "url": "assets/js/399.987aba2d.js",
    "revision": "7e49d742a2f2107a49240fbd25325f28"
  },
  {
    "url": "assets/js/4.ff1c500e.js",
    "revision": "f18a55200b2ad869fa2be266bd532fe1"
  },
  {
    "url": "assets/js/40.2a966d06.js",
    "revision": "dfc09d34fd0f7295b7cde8ce9ba06fd8"
  },
  {
    "url": "assets/js/400.b07178c7.js",
    "revision": "e69fe4e5763873c39013eeb7c59f1f14"
  },
  {
    "url": "assets/js/401.8a3ab8fe.js",
    "revision": "fcc6014d4bfb5b79bd1cba41d54be3da"
  },
  {
    "url": "assets/js/402.a36068af.js",
    "revision": "b208c09409e2788d7aecae828e3c6e4d"
  },
  {
    "url": "assets/js/403.f35e4eef.js",
    "revision": "f5447038c3eb9fc43be1798a2fa070b0"
  },
  {
    "url": "assets/js/404.08849bef.js",
    "revision": "18f944a5e56d8080d6590c70c37f1cd0"
  },
  {
    "url": "assets/js/405.72113cfd.js",
    "revision": "ec7ebcc026f0570ed455907fb60eaa4a"
  },
  {
    "url": "assets/js/406.0cc59b54.js",
    "revision": "b1a2912aa78ad6fb3b474912692c4a43"
  },
  {
    "url": "assets/js/407.8c752b16.js",
    "revision": "d414f3e6a15809d7d2aaf79964a610f7"
  },
  {
    "url": "assets/js/408.2bb74a8a.js",
    "revision": "e2cf6f6a6f0246de627115aa455d1d53"
  },
  {
    "url": "assets/js/409.219df2e4.js",
    "revision": "9f1ed5fc9e5660c5052b57926b6c5dae"
  },
  {
    "url": "assets/js/41.3fedc3a6.js",
    "revision": "ba34022c1c015d68bcbb8178ef72ed85"
  },
  {
    "url": "assets/js/410.b54166d1.js",
    "revision": "b0faf7bf7fa7c2407a80ad785c7579c1"
  },
  {
    "url": "assets/js/411.7a698c7d.js",
    "revision": "18666462ba18debb8e78a54f225a93f8"
  },
  {
    "url": "assets/js/412.7641639b.js",
    "revision": "b8411a22f5c3339aded42b6332465f5c"
  },
  {
    "url": "assets/js/413.ec85767a.js",
    "revision": "2779e09d1a22071f7bf97261d09bf533"
  },
  {
    "url": "assets/js/414.fb0871f0.js",
    "revision": "86714a014207a2cca19687fc4df5aa94"
  },
  {
    "url": "assets/js/415.4b9d5a2d.js",
    "revision": "179354e78268abe5db3852c69ebf32c7"
  },
  {
    "url": "assets/js/416.88f26f5d.js",
    "revision": "138fe4536c1c27b400f2fdd91033963a"
  },
  {
    "url": "assets/js/417.b70688ae.js",
    "revision": "2a36e78bf93d18eb8a25ff8bf8d05bf4"
  },
  {
    "url": "assets/js/418.480325f0.js",
    "revision": "9947cb9b9a8dff5a89b548e7d78e50a3"
  },
  {
    "url": "assets/js/419.064d9745.js",
    "revision": "755d9d55f3e7818984052d1b147d276c"
  },
  {
    "url": "assets/js/42.6db779ed.js",
    "revision": "c1f7d13354321509aa40bfc16fc71a29"
  },
  {
    "url": "assets/js/420.f3566784.js",
    "revision": "a9a2a90cc09020821d5a4860ba835df9"
  },
  {
    "url": "assets/js/421.c8f606e2.js",
    "revision": "5fc50067827459037fb6a5d6aebec480"
  },
  {
    "url": "assets/js/422.7fabcfe4.js",
    "revision": "5858c4fcfa6a51a7bd29a21bccdc8f49"
  },
  {
    "url": "assets/js/43.20480240.js",
    "revision": "340a882777bad3e151d6348543f8b53d"
  },
  {
    "url": "assets/js/44.5ff1f07b.js",
    "revision": "c3df0d2fca97139304bce3d2e691c573"
  },
  {
    "url": "assets/js/45.9792149f.js",
    "revision": "a55cbb2659ca1b96471486bdfc7c1e7f"
  },
  {
    "url": "assets/js/46.702c800d.js",
    "revision": "77cfb7b8d3de4bc87bf4741acf80e086"
  },
  {
    "url": "assets/js/47.3303e58d.js",
    "revision": "55027342432c65dbc818974efadbdfc0"
  },
  {
    "url": "assets/js/48.a1935e22.js",
    "revision": "ccf9a52b105e0519f88c78e85b0f5b87"
  },
  {
    "url": "assets/js/49.cff998aa.js",
    "revision": "8dc225fdd2200ba5bcf0122d8affe34b"
  },
  {
    "url": "assets/js/5.fff6dc7e.js",
    "revision": "01f5056a467aee8aaf6181dcae2f5a45"
  },
  {
    "url": "assets/js/50.a8117da6.js",
    "revision": "d664e1c5bb24e0c33174fb3d692c481d"
  },
  {
    "url": "assets/js/51.25378fc2.js",
    "revision": "8178101060b7e88090642c49ba770216"
  },
  {
    "url": "assets/js/52.da6c244a.js",
    "revision": "c49b527d56930ba7bf3e235833d26d88"
  },
  {
    "url": "assets/js/53.93f7d0c2.js",
    "revision": "9608d01c623f5f70f28f82077a9b2c42"
  },
  {
    "url": "assets/js/54.8719d825.js",
    "revision": "40789bed8e693d3ecabe6c1ac4a1b9d5"
  },
  {
    "url": "assets/js/55.abaf6d29.js",
    "revision": "4e8be641b8b7c673d140411e6f396c16"
  },
  {
    "url": "assets/js/56.156d1048.js",
    "revision": "56a1501cb78b08f1b22564b558f59542"
  },
  {
    "url": "assets/js/57.e3280f1e.js",
    "revision": "2ea81761d4ee5fdb99d917b6fcc7c748"
  },
  {
    "url": "assets/js/58.3eb13552.js",
    "revision": "f432a5f2910ce62921e1667f88120032"
  },
  {
    "url": "assets/js/59.78e45ee2.js",
    "revision": "21355ed3bb81ef1ec0f9d1f96804aaf8"
  },
  {
    "url": "assets/js/6.0a18b058.js",
    "revision": "690112f9c03947609ec2bb50beb70fb3"
  },
  {
    "url": "assets/js/60.b6407d4b.js",
    "revision": "2bbe46cd7762e90f3537e0813a3a4dd9"
  },
  {
    "url": "assets/js/61.72e3ba76.js",
    "revision": "895d2d029d09f9acc27a70639a2cb5a0"
  },
  {
    "url": "assets/js/62.ad2bfaa6.js",
    "revision": "48a0b60961cb899b3b40de127dc38efa"
  },
  {
    "url": "assets/js/63.e9d8f12f.js",
    "revision": "b3594bfa8ee71adca68203576eb950de"
  },
  {
    "url": "assets/js/64.176bb926.js",
    "revision": "cfa2cd60e132940554d73ed611eefb60"
  },
  {
    "url": "assets/js/65.60967b89.js",
    "revision": "c165df6f454dbce98064b7e3595ca524"
  },
  {
    "url": "assets/js/66.f9e6da18.js",
    "revision": "200c892c33a4a69b49d39fae9bda00ef"
  },
  {
    "url": "assets/js/67.6bdcfe32.js",
    "revision": "882ce3997565502109021210beeabbfa"
  },
  {
    "url": "assets/js/68.ef7d1777.js",
    "revision": "70c2541b9b0d2e76e890e6298b8dbc0c"
  },
  {
    "url": "assets/js/69.f98e9659.js",
    "revision": "e7c31cc555c727cac4b66cadc66ac3a6"
  },
  {
    "url": "assets/js/7.0c49ca1f.js",
    "revision": "7d3e3148305d9e182d4933d95c0fcc18"
  },
  {
    "url": "assets/js/70.b2ba3766.js",
    "revision": "02ee9fb875941288029fdbac1d18fe48"
  },
  {
    "url": "assets/js/71.1d749581.js",
    "revision": "e94b164fe797da9ca216db8550cad6cb"
  },
  {
    "url": "assets/js/72.cccb84ce.js",
    "revision": "ada58f18eff2b9aff106651f18e45774"
  },
  {
    "url": "assets/js/73.1bd14a40.js",
    "revision": "64381c140213f216ec7a8fa51156e593"
  },
  {
    "url": "assets/js/74.e6a77591.js",
    "revision": "68e27f20cb6c55f8a3404ec828705380"
  },
  {
    "url": "assets/js/75.99016e99.js",
    "revision": "ab63c48f4794093b574cb8f0ccff37c7"
  },
  {
    "url": "assets/js/76.3424f309.js",
    "revision": "f184e776f5e5257a1c05a1d1c3beb62c"
  },
  {
    "url": "assets/js/77.9f466297.js",
    "revision": "cb344e764fb2980505cf4b687c483439"
  },
  {
    "url": "assets/js/78.986cedda.js",
    "revision": "29416b63f465b4cca4596971c16f052d"
  },
  {
    "url": "assets/js/79.00aec4d3.js",
    "revision": "fbb533e93b21d491e30d42967e1ddca7"
  },
  {
    "url": "assets/js/8.efaf98ed.js",
    "revision": "77efc0ccf720c60a15643ae3b5f0f9ce"
  },
  {
    "url": "assets/js/80.fdf2c839.js",
    "revision": "d7e78ef93f94e5dc5af41d21d93d60cb"
  },
  {
    "url": "assets/js/81.7e4c9fc5.js",
    "revision": "b7125821f2e26862f9963bca83b5131d"
  },
  {
    "url": "assets/js/82.68dd97dd.js",
    "revision": "9c23de9b1e04d86adfb2d6da92840060"
  },
  {
    "url": "assets/js/83.2550caf4.js",
    "revision": "d92826dde7b532a6b085d0e9ca46165f"
  },
  {
    "url": "assets/js/84.f4eaed25.js",
    "revision": "8ebab8f5a892a51a3bd20f51b18dd6b5"
  },
  {
    "url": "assets/js/85.ee81fa67.js",
    "revision": "a7629190b6d0e7442038c82344f7512c"
  },
  {
    "url": "assets/js/86.8c7c6518.js",
    "revision": "329166e4e0fecb2f49dac17fed4682d0"
  },
  {
    "url": "assets/js/87.a0e0f740.js",
    "revision": "209ee88624fb7a79cd446b4726b9291f"
  },
  {
    "url": "assets/js/88.4bec5040.js",
    "revision": "8664c2b4478837fc7e892f902ed5aca3"
  },
  {
    "url": "assets/js/89.54a58191.js",
    "revision": "b596eb412c4b7eeafed647041293aaf6"
  },
  {
    "url": "assets/js/9.7d428bc1.js",
    "revision": "ae4c6bd182bcf09c743671591380617b"
  },
  {
    "url": "assets/js/90.15e59b8a.js",
    "revision": "9fb4aecfeab73b5663ef7c01adf4c0e6"
  },
  {
    "url": "assets/js/91.4c44f254.js",
    "revision": "e4eed71352f53757098807336fcc94ab"
  },
  {
    "url": "assets/js/92.94fcdee8.js",
    "revision": "4257db5d5cc72a2ed7c811e01930e190"
  },
  {
    "url": "assets/js/93.5126f06a.js",
    "revision": "887d4b541ea0b43f517f74f0abe5cef6"
  },
  {
    "url": "assets/js/94.28d9255a.js",
    "revision": "6456efa4a189b154fc9d97e9bb8e07cd"
  },
  {
    "url": "assets/js/95.7f2d28ff.js",
    "revision": "2f072356957c30a7a7cc6d08ca480a81"
  },
  {
    "url": "assets/js/96.c2aba3a7.js",
    "revision": "cccc5d5baaec279a89714240af285e96"
  },
  {
    "url": "assets/js/97.c70db803.js",
    "revision": "c7479f9ceb4d443b9454c64fd8a26e5b"
  },
  {
    "url": "assets/js/98.fd09fc8c.js",
    "revision": "cff6690f98f9c1a8499c886d64dedcce"
  },
  {
    "url": "assets/js/99.ec049c6e.js",
    "revision": "7cbbf273eb89513992a941f51a17399c"
  },
  {
    "url": "assets/js/app.daaf0348.js",
    "revision": "f6ba23269fbd6c220b6b240b8e9f944b"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "bcef05612ef5f7c1c96c8d1b8c91a441"
  },
  {
    "url": "blockchain/solidity.html",
    "revision": "4dda9de84363c3d6c23c94212e4e3f25"
  },
  {
    "url": "common/architecture.html",
    "revision": "b1fbf2c522324ec23e59170d388a2cbb"
  },
  {
    "url": "common/cache/cache-apply.html",
    "revision": "57b291eee556b113e33a55b563915181"
  },
  {
    "url": "common/code-structure.html",
    "revision": "d59b6da361057ba19c82f2ecf1227da2"
  },
  {
    "url": "common/crawl.html",
    "revision": "495d5d2df2db1d365e847fe691670b1e"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "841557a9b395565f5abd43feaadb5fe3"
  },
  {
    "url": "common/debugging.html",
    "revision": "19a7020760a4d2ce324011c75bfc99c9"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "82e5b83de87f689b062dc19cf6cddd23"
  },
  {
    "url": "common/document.html",
    "revision": "ca812d1e073b44a0dbc62ed020a9381a"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "80aa220db083eec2c5f92e3a72f07b55"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "dcbd6c370ebbc197905f5144e83428e1"
  },
  {
    "url": "common/index.html",
    "revision": "9cc6aac252a0f2c1a53ea4c50eace459"
  },
  {
    "url": "common/optimize_be.html",
    "revision": "99821769589c46ad6fe6a305911f2437"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "0aadc1dc207e79f161aaece8ead77c58"
  },
  {
    "url": "common/realtime.html",
    "revision": "bf1241c5504ada63540998148f6e0206"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "0aadb86b0c26a0048a44a9e73dd15974"
  },
  {
    "url": "common/refactor.html",
    "revision": "b1807ae1f158d2500da6014bddba0c6b"
  },
  {
    "url": "common/security/software-security.html",
    "revision": "9ac59f326fe75b3a751b699b21718ce1"
  },
  {
    "url": "common/seo.html",
    "revision": "951f1e7b934cc2daf77e889bc22adb9d"
  },
  {
    "url": "common/use-case.html",
    "revision": "ef9fe27126a5c70097ca1f03db639231"
  },
  {
    "url": "css/box-model.html",
    "revision": "68223871294931521c6878957931295b"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "9c9e4c1228db7c98b6ed959bb2c899b0"
  },
  {
    "url": "css/css-flex.html",
    "revision": "5331dc61307179045881d4c60b42e940"
  },
  {
    "url": "css/tricks.html",
    "revision": "e149faec743a5bde51a6dbde9e188bac"
  },
  {
    "url": "db/architect.html",
    "revision": "cf2dac8913bb88d2692eda5a57085244"
  },
  {
    "url": "db/cassandra.html",
    "revision": "9eb04399f469c60aeb6ed0f940b7351d"
  },
  {
    "url": "db/couchdb.html",
    "revision": "5c263f4dabf0c0da71841e1865cd13f1"
  },
  {
    "url": "db/db-concerns.html",
    "revision": "9b121d76a6282923eb5e467fa2f5a652"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "3b41b8977d5e2d6d9d4120df313e8da4"
  },
  {
    "url": "db/db-vs-blockchain.html",
    "revision": "569d8d077e59acf25532e2ae22566417"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "cda9c1ff10e5382b60d95ae08e9486ac"
  },
  {
    "url": "db/id-generate.html",
    "revision": "27ac24319ff1b4a2a81aa0d05b7a61fc"
  },
  {
    "url": "db/mongodb.html",
    "revision": "927bc304c643319a44c0e303f604f8e9"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "bc5c3274b5ae12966e9fbef2399c9daa"
  },
  {
    "url": "db/nosql.html",
    "revision": "1e64a6c5ba5f4e26c88cd221e0a53787"
  },
  {
    "url": "db/optimize_db.html",
    "revision": "f3abc6f45236e2b8c453b8e562a82ede"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "b9fb646eac55ba1dceafdde0618d1842"
  },
  {
    "url": "db/postgre.html",
    "revision": "92d8ef32855fd1cb22d7ef664413b28f"
  },
  {
    "url": "db/redis.html",
    "revision": "44f48dbf0e54cfe6fad304d168a8f52d"
  },
  {
    "url": "db/storage.html",
    "revision": "2c1c84b76d1be082b2ae0468049e2274"
  },
  {
    "url": "db/tx-isolation.html",
    "revision": "dadbdde680c71df26e99657c201acaa8"
  },
  {
    "url": "db/use-cases.html",
    "revision": "402a6e53635f3805f0478fababa3831f"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "d4b447e6dfb8c41655be7a4281918623"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "970ad71f543dab831ce126df77b7b1fe"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "da76983cec5e70ad06d446293e3ced6e"
  },
  {
    "url": "fp/fp-ts.html",
    "revision": "b136c115c6a9481a6bafe2b50973832d"
  },
  {
    "url": "fp/functor.html",
    "revision": "366f779fd6bea37376d24d162f949232"
  },
  {
    "url": "game.html",
    "revision": "e300ee31d1777ceedb7a5964e88a13f5"
  },
  {
    "url": "go/clean.html",
    "revision": "de9e609e422efa8b5f8a34d043841d6f"
  },
  {
    "url": "go/index.html",
    "revision": "55d1661ba4adce8962b77b6a05784723"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "ece00863431fa420d84e1589b0c2432b"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "157f82a9815915b37ec8535f1e93e564"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "a6cd9135122e65a592ce40756df5a414"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "152438487b0ba0920783099640880a36"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "175a3b18d5faf63cafcbee02e2a3e421"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "d1eac7756f8538f491771fe966948390"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "328f2fb0aaf61a63b2708b675ce557d8"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "2fa121d2246cd464b78c45f05e333098"
  },
  {
    "url": "index.html",
    "revision": "31d632059026f54b3078186b3dda4cc4"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "a447559164e820e2ba3e49c0ec0f3cef"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "1382d459abcc6fe17f4609fdd2680e04"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "2eb3eec97c42e9dea958ff049e51a374"
  },
  {
    "url": "javascript/closure.html",
    "revision": "5b1a218322aaae89b8ece2fce47eed0b"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "aa51619153e44a3f5ef7016ae032b9ab"
  },
  {
    "url": "javascript/eslint.html",
    "revision": "6e85fa09b760afe0513df76252e0d789"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "4a39f0ec85088d74ca062c031a0eed2c"
  },
  {
    "url": "javascript/nestjs/nestjs-cqrs.html",
    "revision": "0c943aae9ff39934468d97a72f382a60"
  },
  {
    "url": "javascript/nx.html",
    "revision": "2489b7bfcf50822a71244911acea115f"
  },
  {
    "url": "javascript/rxjs.html",
    "revision": "981a0b68148fcb1d4a4af7db4330dd8b"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "e71b82032e9d8dcd3e019fcbf51d6944"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "a9d44c57d0d6dab9069b61c1f83cf27c"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "d68bd56f8b319df3acaa4fea8f01cbe9"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "d9feda06d342de1cb5f6cfc7fe7a3b6b"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "7754ad597124865849f2628c3bb8de4e"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "9d95f1f796bb1e9a5c9bee5b8a1487af"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "dac90809a23ac65f97b792546f5c6f1e"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "0617f08bb014e42a76531f3f71cc00c9"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "ddbd4bbacfeba7eb985644929437a034"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "9c3241101b8837736b3e742702cac2de"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "b72f7cb231991cf4b51d361635b96f08"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "9cd0365a4fcdebf9b1f82f8eed29ce17"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "0237608be8fea6a9c23420d42228c38d"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "0ff2ca74d08ec0c73b47e76b1bb2ee99"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "423b0fe5385788419e310916d838a03f"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "855bd5a93be815a59f5fdf6730698973"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "573f1fe8402c60506ff861a0c1e65752"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "604bcf3b8bb4247102270ae0c36999d4"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "9be996d0097f8adce04e76e36e0ac3a4"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "77e6d654e55595ec91c9b1a68cd40697"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "ec9be48a33559baaa9899e9d28ceba3b"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "d11ed04d736a39055ab607e2cec13e04"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "61a8def767a5d89c1a9300a0caa3305d"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "bbfa406bb7a6a0bec61cbf2d41df6611"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "930e3fa4ee9b27eb936a9f167473489d"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "439bc031c095b45e619cbf9ddc09ef56"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "cdeeb970eaf513bfd77a3df3b62776ce"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "cb274a7885c3227f2107c8521f31c226"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "a2f56ae17b0f4336ce72f59867f71b88"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "97c6966867cfdc69c7f357daf0fd4dd6"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "e7d76d235a4fcc6dce01eb5a9d325dc1"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "8858c450d04746ae8bd559a4d3cf5200"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "bd7a643404bcd897185eff316300ead8"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "83d8564457d7950e25162b0c2f21e6c3"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "0a89399dc2bec28f1b7d135a98b526cc"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "aafc5cdcfaba6182ccf051def3881297"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "6a82c04d4dfd905a116f5337cb04e8ab"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "576dd2932783aa06fc205f1b609d548f"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "8dba11d28db3a0bcd665dd4be74ba206"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "5e987726fc36135da444ec2dea8b3452"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "c64d33dbc78741d95704d7e75a4ea08b"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "94be9bd40d3266a8b8e2910a9b5ab6d0"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "57bc69a1edd113fdcf01ca097ccab724"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "40eca1c21f10acb47e1f4100186dc9af"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "298b62c074901bb3fec605faa7713313"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "f44bb83fd22b2860a815927a83e03af3"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "da7e4e944b16706b21ec8a637908fdcc"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "2e18441cf83994bcf4c2ad1615d9a6ce"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "66483dc9fb1c77f30929e19438a28eb1"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "0d54d3836d76370e1f0a524a77e19fc6"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "29afc23f1f561e3eafff2c39d52144b2"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "bce81c1d940c15876a790acd6dd7acd8"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "15cddb6e638bf331b552aa3c0167f83c"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "8f559b64d8433e3dbb6e9aab3bf8422e"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "728ee39f03a68277938be4d55cbdd911"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "773717172cb0f0a7e69ac31ef094c9b5"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "ff7c13affaf5f4b8833d08026c881dc9"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "4f7ac0a50c8aa2c2251c22ba2d70c45a"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "887aa58c8beccde8721cd6accb39c2a9"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "1bef9d38252d6f927d346c8c0d75fb57"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "ce34925843ad6c086d0752662937d4b9"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "676e7a01ba377a68017f3f9311138c8e"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "f66384063d1e974ae80744ded7fcd36b"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "07f0e8f9eb339b45775dbecd77c4c7a1"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "1a9ae2b8541bb4382d11b58aa2ef8f03"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "9fe5adcaf49275b5119ed391f8eabfc7"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "6424fbda22c1e87af39ae82ae85f7009"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "7a0d15aa5fe218c8740f029b00613f4c"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "5098555c7c8378102d167bf1ca8aaf40"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "218ce2e459c5750b0eabb6d3af0b83c9"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "f1a1072ddf964ea2d3089466ef998723"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "fa81180fea9cbb8600c43f03f4917f2d"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "0ce2e372aba6994c3c1abc127c9f2f4b"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "0d873229b5ddc47c86e9a1b2ed130b76"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "89841ae169d620d878813316e35e2fe7"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "608909edcf231b136657067651e06fbb"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "7186f98bfb80c173690b3138f452c0ec"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "9514548d519be58f6f14a03116726698"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "d11307670c58f7bdb5e7d90dd95a9d29"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "f5f95320c33dbce3adbb54b6bff2e774"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "1b99fd86a235655cbc418d3a901d87cd"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "17a81139be7c55542337cef0155d8507"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "023a6359639c18917df5ed3d0089b1ba"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "18f970527e1427f64011216ae0657cb7"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "1bd698b78e84475e548fec1953fca95e"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "99322cafcd943a6ffc6e98a8143c4998"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "ece30d623afb57574c8c3259907db292"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "b3c35eaefb0765dda0ff69a0e9600bb2"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "8f57833933e3f2f4f38ef6c7a7c2501b"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "990f266f3476f3a984b15c500c3a4443"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "7a6b23f313ecdc19b16bcfc417ce7951"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "ee254ce0962283329875e5b854af70a3"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "b86456e5a9bf3b8d9a93da585e7db0fa"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "3ae86a0f5d9ef3731aa06d608f7814a6"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "cda865271c0b2fc7b0a393aa9ca8a092"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "fd3712719a85ee74b77509f9f17c2747"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "afa40c020e8ab3973d20a879955e6940"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "92d479bbf327c111b3c8640730434d4d"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "c94fb427c6c57329c506cd15dd8ed258"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "cbfd9d1bd2fe2e3a4ae04798a8870e46"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "0596160c6a3ef9dd1d50f762ecc9cf9a"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "e4612feeed6156b62321def6b4fb4e29"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "b2cc853e6fef1333f22adece17194b36"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "2fc3c5a3701d7d9280aef17c292fe1b4"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "4be89e616e78a214e18e3f1146f15f7a"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "61d03be85c1e55361b14dd26e33644ce"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "52ca0378a5bfaa98f3aadaa00e5b0566"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "28d881bb5262978356f4bbc25df9d5c6"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "b6db707422f3cdeba8aae730a0018dd4"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "908aaf31353e2d48ffa685ae638bd0b2"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "2f4bd6e9d505a0368cb27d277af85ce9"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "3a5b5803e5eb683c08f963f230d07c74"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "d7c9aae502113e35f9656fed48215b36"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "b7c8d97d01f8afd9b45b12a62a92cec3"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "3e08923ef584dfc9e40975266186737e"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "8662acd8bf6e598ca216cd7f2d2d4412"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "2086630049675d160b15b70a012e30ed"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "f36ed50646029c9c6424d8af07310711"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "13f50f4d0eb469b9d92c8546c60820f1"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "90575de23658576ee7ae4f8a9dd305cc"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "dbcd3f09f2741a4846a8e64e5a39757d"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "3d41e20dde411866356157684d18c9da"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "3bbf111de92788e467845ae1a0e18082"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "0b4553d6d93b8004125201493786941d"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "ea88dead450b70acfd0438a559f02c7f"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "5bd5e47a1fc7cdb6d19b88b446cde260"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "df072655df0aa41e8bfd6f36858fb600"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "fe44195c13a16ddd04d2c79b7e2a3c22"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "8a87f2775731a6cf902b2ebc07f9c34e"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "d78875b7dedd21b2fcbbb41a1534d5ce"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "2048d5a2621ceb56fc5059a70c1f86fa"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "1897d28f5d1acc63192b32d335fc2c8c"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "7543999f133a23ca9df546f5b4bf2ae1"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "58b3227544d29994047177183fd6d61a"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "041e32d43abc3924ac33eecb6f6ea0dd"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "08a4e6d9a00e544784b7dc352be886d0"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "a481f5ada2ff55f1b6172847cc9706ea"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "e5b18acf55f990ac78f961975149dc38"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "0a7c728f5532732659bd8437e44f664b"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "2dc7ea2497d3ae8eac84dc2cd3857505"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "4ab479915bca1b8193e3adb2caa10399"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "be66ab3e6f5ab01bc6421fd98e02f4c0"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "6dd3349eb160ad041ab05e461c55b6e1"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "79173fb680204ecf58aa0d462b5f34a6"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "cf98ce21647c38131fcac1eff04787c9"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "123f72255234f0ce10ff41cc64cf5ec0"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "7654128827f5a54537acd268421f185e"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "9bc449d9091851142a2a9e760b88112c"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "d487b3a7747e77377634b67b3184ff98"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "c605921a944a0ca667a982b8f3dd2921"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "5092c25b36b55f9fd16616f26fa6644e"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "a0399b03ddf2cad6ede22cc51f94b5ae"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "2aa9d349ee82f22b114ac471ad4ea9ae"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "ef908b7b319c514742a7622cae6f0cc1"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "a9b1d9372853984d8ca36608f5f6bcaf"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "1f936c35269c8ec77c5fcd8c038e4dac"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "6e0b77ee434152141a3d0b643ce51249"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "88334fa9a1d32eb5c592d6d9af8f1a79"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "8bfcc349888d431e4933c8982bf03f58"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "d61c9a8d0c009a417afeae2d376f4db7"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "5e73d0eb0496d4406b1b17a04f7d80ea"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "143350c2f8a4f740e2f2ecb33f770477"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "071a388c34c8cd8c33e5c6e80da29ead"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "3b19362849ab291f35dff7e41fd43cc5"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "7b0fe84604e2e8dbac4aa10e14794540"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "56dc0f0666786fcf50edcea6250dd949"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "2108f1fe0eeed29fb31998ec3802c292"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "d49238715349c619a172dbc6157eece0"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "a77ad15a4c16a63b77b76b9ee5c05c63"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "2dccf580ca07296c37f9afdebcaa66f2"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "1e291f8832fb249d0607a5a7fe223633"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "62453e931b02e9e250bef8ff3368baf8"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "f77246814167c0dc6fe4730fb5d38e61"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "6d82ac561e0088b47c67db361f2eb4e3"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "5cf2b238d3333aafcd175bafeb326fee"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "5805fbf32403be6bf906062ccb8d5cb5"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "07bb7e4cc722346503b76aec6182d517"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "c45d0349a55dc885de5a7a7ddd8b22f4"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "adda98e778e63237b9e92f2e7985a8e9"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "316d9f401fa9182f0c17ca85bf23c24e"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "1511eb26441fba7a5a76c9ebd5df73da"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "75e1595d02f7abe650041043d4790d9a"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "c1e724a1e21dc662059081ab31a5aa4d"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "4f74572a58f554112d23dbeea54bca30"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "2028c770f2059338f9a81efd4e75c1d8"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "328e3243bf89524a19adc6c17e4e098f"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "feababa601aebf13a1281ad3ac6730d1"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "d428d8c09b4cfca4c82ef80ce92228d3"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "34578cef72c0f3a2d2c74583cc8cb33c"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "244f9dc173b0b95c0306cf5395ac153c"
  },
  {
    "url": "kungfu/template.html",
    "revision": "d5b4128a9b6757de221e7bbab7488e7e"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "4bfd770029239c7db6fac72c1566b9cf"
  },
  {
    "url": "node/env.html",
    "revision": "9545a8a0fae47aacfa6a9d7cd770622b"
  },
  {
    "url": "node/index.html",
    "revision": "feeac3e8209a920ff07dc2c13df9928d"
  },
  {
    "url": "node/n.html",
    "revision": "15486b930533d5116b7f9bedfd830f17"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "1fc71fdf5c23b55cb9a2a3b83189c9cd"
  },
  {
    "url": "node/npm.html",
    "revision": "63b6600bb8d413ccc5bd4a6df5fbe6b1"
  },
  {
    "url": "node/sequelize.html",
    "revision": "28593eeb7975d4de6878b507d0e75a02"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "46406ddc885bc69710ea4efca67059d4"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "e155896299098b0c76d3323bde297e05"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "a0c8dab2ff38921f9e4807ca222f5906"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "61c2efcd95df50bcf97d09b81e78d04b"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "d678da4a840d7cc800a9e190eb31e7e2"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "91bfa14c15206b67304db579fedde0f5"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "d40ccfba6c5410a1654f6c396fdbe901"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "1163a3fa8e877557156893365fb8f331"
  },
  {
    "url": "php/clean/di.html",
    "revision": "2ed6696f2d64e126d6e39cd74157142a"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "8617aee9d8979a53b950f76f8b87307c"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "9c755737ddd53e1a2976cb7b7a1915e9"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "0e6fa4bbf09951b19814b175a26bb696"
  },
  {
    "url": "php/clean/index.html",
    "revision": "d30c365352df2d78cfa621a57f40eb55"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "fdc3bb1da69b1336bae968b0052c4545"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "a8c9f8ee1862551fd01695624eb4edea"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "dd0e8efe6ec505470204e3704e149695"
  },
  {
    "url": "php/composer.html",
    "revision": "ca229f49f0b807b3b5c870badd076534"
  },
  {
    "url": "php/crunz.html",
    "revision": "e2d74191df769f80d0f6bea1ac2cc85b"
  },
  {
    "url": "php/laravel/best-practices.html",
    "revision": "b6d20a44c65260cd397303231ad30a03"
  },
  {
    "url": "php/laravel/laravel-notes.html",
    "revision": "8f06164fb67fa06cad7e16a34667f998"
  },
  {
    "url": "php/laravel/patterns.html",
    "revision": "a0f8aced6953204a939ab5fb791204bc"
  },
  {
    "url": "php/magic.html",
    "revision": "8d872c7d097e12c2d150be04918bcd24"
  },
  {
    "url": "php/notes.html",
    "revision": "0331f0f4ac175e842f9588d95d3c2b39"
  },
  {
    "url": "php/oop.html",
    "revision": "3f735b9113aa4234a425a5a12c2fc6c8"
  },
  {
    "url": "php/php7.html",
    "revision": "d9739af8358fcb7b0d1ce64a237e1032"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "d371ff7e4c7b3a3616a447dca5757311"
  },
  {
    "url": "php/reflection.html",
    "revision": "b19576100917153b08a6ae4c88b7f46e"
  },
  {
    "url": "php/tricks.html",
    "revision": "c36a1b05a3925d5dc37be3f59ddb2a10"
  },
  {
    "url": "php/wordpress.html",
    "revision": "6103de7e9e83fd7f7a2227194a33e0b4"
  },
  {
    "url": "quotes.html",
    "revision": "676e5d0e2767575fbc82853c7f010aa2"
  },
  {
    "url": "react/mobx.html",
    "revision": "6552409060e4d6099871ca6ca540bc64"
  },
  {
    "url": "react/nextjs.html",
    "revision": "35ac3cdef1f983eeed2b333f4890126d"
  },
  {
    "url": "react/react-native.html",
    "revision": "a94fff0c1befa543840f2330b7cb6f81"
  },
  {
    "url": "react/react-vs-vue.html",
    "revision": "eea34bc14f27f6d7d069d29a41186088"
  },
  {
    "url": "react/react.html",
    "revision": "5a1632137409c99495bc2dcac6ca0edc"
  },
  {
    "url": "react/vue_react.html",
    "revision": "743fcf374a8de1021ce65538d1c4b53b"
  },
  {
    "url": "refactor/notes.html",
    "revision": "d7ca6bf6e2cfc678b393df4c97a3e371"
  },
  {
    "url": "ruby/ruby-notes.html",
    "revision": "b136a1a6497a311a863758961c8cfcd7"
  },
  {
    "url": "ruby/ruby-vs-node.html",
    "revision": "e1a4631d87e0fbf59b3d8c66b88c65cb"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "765c6d3cba8b9887947ec54c17b184ce"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "ef8756cf3138f2fcff5b24950d2feb8f"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "42d0bece7b2310f45379063192726a02"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "267b28b7d48b43f0d2c33dc6a546e4b3"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "e2f5103e69dce164ac05ccf259e1f7aa"
  },
  {
    "url": "snippets/jest.html",
    "revision": "3096d3fa1ddaf29bd4b3629cabc8b77d"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "6699ba4cbf2a5fd0fe8fe5fa91674428"
  },
  {
    "url": "snippets/regex.html",
    "revision": "01d89421e2de22981ae3114b5ec56f48"
  },
  {
    "url": "terms/12factors.html",
    "revision": "020c16110c005a86dcaf971df0e7bc26"
  },
  {
    "url": "terms/architecture.html",
    "revision": "8762b67529401fbe12f788ddc2e8815d"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "5cc72317b387bd9628f68e3bd1ebccca"
  },
  {
    "url": "terms/di.html",
    "revision": "d0fbce4d032a9e9304f51d7bdb7a23a8"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "19909bf1766a11ccfc96d6a7029f781a"
  },
  {
    "url": "terms/javascript.html",
    "revision": "306ca42aed451c4c8c2a2bf3e9690ae0"
  },
  {
    "url": "terms/patterns.html",
    "revision": "cfdda5aa9cc076118c03bc10219768a6"
  },
  {
    "url": "terms/payment.html",
    "revision": "9f41197a8be252220545ba9c3e766990"
  },
  {
    "url": "terms/principles.html",
    "revision": "731e5f262c806380d569bde8e8ad9182"
  },
  {
    "url": "terms/rules.html",
    "revision": "7ca6027adcb95070601a1765c1433bde"
  },
  {
    "url": "terms/testing.html",
    "revision": "832aebf2439300bc69b34dc509aaf74c"
  },
  {
    "url": "tools/chrome.html",
    "revision": "f06b4203724d55d944baeaae7d83998a"
  },
  {
    "url": "tools/docker.html",
    "revision": "5f70fd1193c67bbc19a889527f2ea29f"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "35d3b17051519f1699d13e4947fc5dec"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "f244a406108e39cfee57057b8598ff25"
  },
  {
    "url": "tools/graphql.html",
    "revision": "4127b718f5c5e5fff2db22bf500dd30d"
  },
  {
    "url": "tools/k8s/k8s.html",
    "revision": "a80209d8ebfc6802cb5b4167a2fd89f2"
  },
  {
    "url": "tools/kafka-vs-jetstream.html",
    "revision": "083690f1c939d438e60e888e1da6b9c7"
  },
  {
    "url": "tools/kafka.html",
    "revision": "12b2c4acca135146b8b8c614ac9a2933"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "2a8ddc0d490c2f97bc1b0d051aba9013"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "41cf2f337db61c51f5f7e3a1d148a9bd"
  },
  {
    "url": "tools/redis.html",
    "revision": "fd316597755e666aa874bb434f7551d0"
  },
  {
    "url": "tools/rfid.html",
    "revision": "17142022b40778e10107df82754a760c"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "6a61ae0f3cd4774c482b50bd68fcfd24"
  },
  {
    "url": "tools/vscode.html",
    "revision": "23e2e54aa968af0ed759338d4fedbc77"
  },
  {
    "url": "tools/webpack.html",
    "revision": "e650b53840afcb7392c4ce9f2984f775"
  },
  {
    "url": "tricks/compare.html",
    "revision": "98af0dd05d86e8074f80d8f81e5bdb06"
  },
  {
    "url": "tricks/git.html",
    "revision": "89dbc8d26b716706e71e0dd12b10230e"
  },
  {
    "url": "tricks/linux.html",
    "revision": "5117e508fc426bae6e950f5007de01a1"
  },
  {
    "url": "tricks/mac.html",
    "revision": "c4729bf0fa3c9e2dafaaad680ada1635"
  },
  {
    "url": "tricks/misc.html",
    "revision": "c90bec258f5b55cf572944f2f1c33fe9"
  },
  {
    "url": "tricks/setup.html",
    "revision": "8f422a21ec9bb0934b8cd7c61ffd63f2"
  },
  {
    "url": "vue/communication.html",
    "revision": "5d2ec9864cdb2b553ddc371fef239385"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "679915f19ea841533d8567ccc3bbf7da"
  },
  {
    "url": "vue/events.html",
    "revision": "5b165fb47ed30f5988f59af3081b6e8d"
  },
  {
    "url": "vue/references.html",
    "revision": "84a502103764aae3abb7026b84f08fc7"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "11b75bfbd8bd1c414883b1e68ce79b0e"
  },
  {
    "url": "vue/test.html",
    "revision": "af363069247f6ffa0bff188f9ea44890"
  },
  {
    "url": "vue/tricks.html",
    "revision": "77443e81b28674c1d2ee076b7adb8071"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "6f75498a5c2f62a06506e029e214a076"
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
