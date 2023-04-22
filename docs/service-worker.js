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
    "revision": "8399d1c5c325667a8655132327d91886"
  },
  {
    "url": "ai/AI-note.html",
    "revision": "3992aeb41f4a61c5864c8a4371c3411e"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "7ec4ea0de31f9e37082d4b521220d00d"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "a1f36b8ffd768f7e339e93e92d629fba"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "6caa57f43b4d0382f0539ec5cdb98c73"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "f33e1f5df6304a171f48bd48444b0838"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "f8a3cce854ab7783a3dddcb2f3f575d6"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "14d554d28705fe4d9286d372cef9bec6"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "c24721692a16327000412e4e96bd6f68"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "0cfabb60970d801d0b07466bba646edc"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "0c5be41179e426fb50605dd989c50dd7"
  },
  {
    "url": "algorithm/string.html",
    "revision": "63d3754b5c809532ad4a0a5a050a568b"
  },
  {
    "url": "algorithm/sum100.html",
    "revision": "53897a5ff5b08f38d8de9aa3c9d4df54"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "c1c99caa3d2e533394c88295249fe1d1"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "fa2269fe59e151f5864290385ddb74cf"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "65d17d96a872ec790a6ed70cc1369670"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "d286bb37492053ea258d2afab65a3145"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "8c1e682258a2a436aef9f77f028305f9"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "25fdaa0a6ae6e5597a49fbc27473fe05"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "2e8cfd460bf2b5bd91145c676a294b18"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "4376460fe49726901cc7525bc07b2cd2"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "b2b87bd6c6e46224250815606e31346a"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "d6266ffd259e9028c9badce469c7cc6e"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "f294e0267084726119410f68f0614061"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "1866516547f5027bb5d9136e814cf96d"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "c7ec0dcf0495364ce76efe0f659644c0"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "86d2a2609e7a6017c54c563ecc37de6d"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "f30d9ea053dee370e6b7c8bea9d12e1a"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "78d91f63f1e7400fb931175cd73526de"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "b005d5a5939b0ae170bc440a532c6512"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "fcdb49c73db30343597ceaf9814f79c7"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "a0e365fcb246b35a8a26570aa0ae13cd"
  },
  {
    "url": "architect/authenication.html",
    "revision": "f2444ff95d5aa1f10e10d04a4fbbba4d"
  },
  {
    "url": "architect/authorization.html",
    "revision": "71224422f8435a3ff18725802984aa4f"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "5fb29eb619bdb375ab9e470ce8452d7c"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "8dff328d1268c3483b127cc7239d4ca8"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "9a03a498bac7b73fcde1077ed7b7e771"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "d32193dcc93653879343e8b152bb4748"
  },
  {
    "url": "architect/ebi.html",
    "revision": "8976a24dd3b6cb4fbceb9d21ac7ca30e"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "4ff02571ce83e59cc9cb3364e4c16155"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "3fbb86e1cb0b09e4218c348497e26086"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "70eadf522c1c7f9fbde1ea1a670d4c92"
  },
  {
    "url": "architect/index.html",
    "revision": "ede4569d151206430c5cb85383c59761"
  },
  {
    "url": "architect/messaging.html",
    "revision": "4585ca0c6a0b3a7fe2de2eae9c3fb56c"
  },
  {
    "url": "architect/microservices.html",
    "revision": "4cda9da91065c9453c1557485e73c9e2"
  },
  {
    "url": "architect/mutex.html",
    "revision": "6924f38d0f07b67b5f14c7f2f0ec0831"
  },
  {
    "url": "architect/notes.html",
    "revision": "0ae8a547e8df032cbaa26788582a3b7d"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "c823d28727e1a859b1e97825b677985c"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "3ea69bdde75d7462fcdf69b9a87c3fe6"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "de533bdb8a3dc2b4467b32459cad20d8"
  },
  {
    "url": "architect/refs.html",
    "revision": "18f864485bb4170616c70b81947a8f1b"
  },
  {
    "url": "architect/restful.html",
    "revision": "50b98a27b3e0b18a215e9985fef8316a"
  },
  {
    "url": "architect/soa.html",
    "revision": "0a6262ea75e0f380946abaab0ee8e1db"
  },
  {
    "url": "architect/spa.html",
    "revision": "618beeb309d1d880c4f97a85ffd5691d"
  },
  {
    "url": "architect/terms.html",
    "revision": "1c89316381c352b15f1e9deddf070b6c"
  },
  {
    "url": "architect/webservice.html",
    "revision": "ded4a5613cea170569df61aa9b053345"
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
    "url": "assets/js/10.c5a33867.js",
    "revision": "ce00e5232e0208cf57aeedc67e0841c1"
  },
  {
    "url": "assets/js/100.a7012494.js",
    "revision": "dc1f14aa9c9de929f288a59a0258d2df"
  },
  {
    "url": "assets/js/101.69753649.js",
    "revision": "4419fd508fb0453386860a511e693454"
  },
  {
    "url": "assets/js/102.a93fbca7.js",
    "revision": "3b6ee745ee8b9e4cdd1e9146e4b6e77d"
  },
  {
    "url": "assets/js/103.3e4c5cae.js",
    "revision": "9a9c16a118c9b1da83a46432801b8244"
  },
  {
    "url": "assets/js/104.2d725201.js",
    "revision": "1c29194f0e2ee7348677e750259e7d34"
  },
  {
    "url": "assets/js/105.3f916374.js",
    "revision": "5b368b46d74982bf3123b8f18793444f"
  },
  {
    "url": "assets/js/106.960e1695.js",
    "revision": "3b7a279847d6fb5be2a302d191838dbe"
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
    "url": "assets/js/11.757c1a6e.js",
    "revision": "de7f7cb235dc23796a939ec8c4473758"
  },
  {
    "url": "assets/js/110.7f921750.js",
    "revision": "3edd28e7690bc2e10c5a4d4c2beedc6a"
  },
  {
    "url": "assets/js/111.084a3674.js",
    "revision": "6919e5253344be0efa9d2bcf8750cd89"
  },
  {
    "url": "assets/js/112.713eff45.js",
    "revision": "45a3902d22c9cc4300ca628221b1bd31"
  },
  {
    "url": "assets/js/113.f1117e6c.js",
    "revision": "dc1ea4ea5eda518442c96341d271a766"
  },
  {
    "url": "assets/js/114.faf051ed.js",
    "revision": "496b58bdd6beb647846e8db37fc3d6e9"
  },
  {
    "url": "assets/js/115.132d55d3.js",
    "revision": "5d1776da1c82199e134274f08b590130"
  },
  {
    "url": "assets/js/116.3bf652f9.js",
    "revision": "ef7cd7c09ab1a66797d49da4f9c6a9dd"
  },
  {
    "url": "assets/js/117.050031ba.js",
    "revision": "6ec877b0c8e17d213a71b67e1cc03044"
  },
  {
    "url": "assets/js/118.1bbc0887.js",
    "revision": "ef9f9823db521f2cb6736ac4c8704542"
  },
  {
    "url": "assets/js/119.6dcb86ab.js",
    "revision": "63ba7683540586cb9e6b62864d5b0acf"
  },
  {
    "url": "assets/js/12.c603d60c.js",
    "revision": "3f9b95150cd3b1e13e074412cc9e7ff6"
  },
  {
    "url": "assets/js/120.609a0e8e.js",
    "revision": "e65d40d59004662d93720ae34d11f1a4"
  },
  {
    "url": "assets/js/121.61e05096.js",
    "revision": "cad60f2badb4e8f4810b23353c8be31b"
  },
  {
    "url": "assets/js/122.cb064990.js",
    "revision": "030604ed3350e99f1741aebd78b7db5d"
  },
  {
    "url": "assets/js/123.bd4e0c66.js",
    "revision": "e362a8959c3d8ba8f301e3923c8710f8"
  },
  {
    "url": "assets/js/124.20adde65.js",
    "revision": "f5a6e55257ebd6580226f15a2c225614"
  },
  {
    "url": "assets/js/125.511338aa.js",
    "revision": "5a015e784e14adf3e638c2d4d9ae400f"
  },
  {
    "url": "assets/js/126.10d7e49b.js",
    "revision": "ded9c5d656e269b15b6e698398bbbaf1"
  },
  {
    "url": "assets/js/127.45cbedb5.js",
    "revision": "6817b4b7f07f5f397c302f1c0dfa742a"
  },
  {
    "url": "assets/js/128.e1eacfdc.js",
    "revision": "3a968047fb99962519565c637f5cd772"
  },
  {
    "url": "assets/js/129.8fcf954e.js",
    "revision": "9e0c928476d53bc4665f43c453e2aec8"
  },
  {
    "url": "assets/js/13.3bb5adb1.js",
    "revision": "d63c98a082dc6421c5df7974a402924b"
  },
  {
    "url": "assets/js/130.80e8c41d.js",
    "revision": "bbb468eb4c535e17a0cde2395a64a711"
  },
  {
    "url": "assets/js/131.313eb1d6.js",
    "revision": "e2da3d355e21f1fbefcac4f0a7fafc37"
  },
  {
    "url": "assets/js/132.6bb352c4.js",
    "revision": "a3199bfd6c40f108b7465202600d7a01"
  },
  {
    "url": "assets/js/133.37f0ff8e.js",
    "revision": "10f8f61b79c06ccd1d2420e0feba3167"
  },
  {
    "url": "assets/js/134.061f2243.js",
    "revision": "3d8ffa5ad4a9af90a5bf5803ae0d6ad0"
  },
  {
    "url": "assets/js/135.31acda43.js",
    "revision": "a9b6d7d84668424303d27b059aa32c02"
  },
  {
    "url": "assets/js/136.1c3ce5fd.js",
    "revision": "e22124d8ff579c19ae133499b29288e5"
  },
  {
    "url": "assets/js/137.63312e6d.js",
    "revision": "04e404ef290bad8712914ad2fcf5fbc7"
  },
  {
    "url": "assets/js/138.28aea381.js",
    "revision": "d58a76f680baf00a0f311d124fc0f76f"
  },
  {
    "url": "assets/js/139.fff735da.js",
    "revision": "e4b19e0dfedf25137f04fef1e9415351"
  },
  {
    "url": "assets/js/14.abf42490.js",
    "revision": "8229e529e9e5a089d79832827ba5ddc9"
  },
  {
    "url": "assets/js/140.580d583c.js",
    "revision": "4ccf54412a241ca5d449123743e3d01b"
  },
  {
    "url": "assets/js/141.466e86f9.js",
    "revision": "3563fa3e627ebe4f421519fd5cc4bbfa"
  },
  {
    "url": "assets/js/142.6a69acdf.js",
    "revision": "d181724d6639aeb33351dc33fbe3ce4c"
  },
  {
    "url": "assets/js/143.e4be4da2.js",
    "revision": "05b86c971ffdb0a4d858e2985cf4a333"
  },
  {
    "url": "assets/js/144.9da06951.js",
    "revision": "e88535f972f16f2e6d194fa509256efc"
  },
  {
    "url": "assets/js/145.ff8f5b5b.js",
    "revision": "f0521666721f9c3452d8a6d994b94eb8"
  },
  {
    "url": "assets/js/146.ff94723a.js",
    "revision": "9af978a241dcfb8624517f1e90c9cc9c"
  },
  {
    "url": "assets/js/147.2e24d915.js",
    "revision": "30b803ae901944bbe42b95b2aa668e38"
  },
  {
    "url": "assets/js/148.8c5878b2.js",
    "revision": "a2fc99d59b912b82b39bbcfe8bffeef8"
  },
  {
    "url": "assets/js/149.f217382f.js",
    "revision": "aa3b6bb84c9699a604d03025d8f20a72"
  },
  {
    "url": "assets/js/15.385102f6.js",
    "revision": "ee41c5a49687269ece1832cafc79797c"
  },
  {
    "url": "assets/js/150.1ec41ecf.js",
    "revision": "5eb05990fefcbc3c6f1e99265c5835f6"
  },
  {
    "url": "assets/js/151.bb431fe0.js",
    "revision": "5e2cd2baaa06eb981f2fc76d05e4b388"
  },
  {
    "url": "assets/js/152.aac6a87a.js",
    "revision": "fc7ee4490701fb757702a58a7b3c8794"
  },
  {
    "url": "assets/js/153.4418b4a5.js",
    "revision": "0b1fd42117abfcba2f48188d664d5f1f"
  },
  {
    "url": "assets/js/154.627860ab.js",
    "revision": "d77ba750955ccd4fd3f06f84aaf05df6"
  },
  {
    "url": "assets/js/155.b5af1201.js",
    "revision": "e3ca0c9392e76625816c9d781c706a4e"
  },
  {
    "url": "assets/js/156.aba37a25.js",
    "revision": "9f10d4f25e0a487195b8f8ce243a2790"
  },
  {
    "url": "assets/js/157.dddd32b1.js",
    "revision": "05b9107d148f07baaeff79ad700318db"
  },
  {
    "url": "assets/js/158.8ea1b719.js",
    "revision": "fead2f3c6ff1c83c78f3572f3b1ed89f"
  },
  {
    "url": "assets/js/159.7fa311d1.js",
    "revision": "1019de9c0df0a8b0902175254ec990be"
  },
  {
    "url": "assets/js/16.f270b3b5.js",
    "revision": "58bb85853991a3312c91e13290d91cc8"
  },
  {
    "url": "assets/js/160.adbc0eed.js",
    "revision": "f9f2895eeea94ad42efdf690b77e83ae"
  },
  {
    "url": "assets/js/161.ae0f255f.js",
    "revision": "7742d25c6180878c90e4ba8dccbad602"
  },
  {
    "url": "assets/js/162.c4418062.js",
    "revision": "4ee5854b740fdcd652e687e148acd053"
  },
  {
    "url": "assets/js/163.0ed52828.js",
    "revision": "ab0bed249bf53f73137f555205d8b02e"
  },
  {
    "url": "assets/js/164.dce058be.js",
    "revision": "1485f7a54147987df3336775261da70f"
  },
  {
    "url": "assets/js/165.176fd36c.js",
    "revision": "10a2f4734eb1cca7a412a5b349143bba"
  },
  {
    "url": "assets/js/166.bfbc689b.js",
    "revision": "7eea008c6473e4d31f092293bd752820"
  },
  {
    "url": "assets/js/167.af26d9e7.js",
    "revision": "71bda23dc190bbc68d761306a3b107bc"
  },
  {
    "url": "assets/js/168.946eb86e.js",
    "revision": "97d3ee4df2af3ce5937d65e5187c988f"
  },
  {
    "url": "assets/js/169.46be4d58.js",
    "revision": "cb1651448f0092d117bbeb2ae02e632b"
  },
  {
    "url": "assets/js/17.0833ed2c.js",
    "revision": "10705d62ddca2628ebd35d9e57cfb450"
  },
  {
    "url": "assets/js/170.a13ec85d.js",
    "revision": "ac86710ee8dc7b2ae60faf75533f9f97"
  },
  {
    "url": "assets/js/171.7dbd5384.js",
    "revision": "b8964ba8df8d3aa954d787293702fb9c"
  },
  {
    "url": "assets/js/172.f92de746.js",
    "revision": "a33bccb704ceb33300af5a4d00554db6"
  },
  {
    "url": "assets/js/173.182aa359.js",
    "revision": "9c44ab7fd76668dcec7518b862a5e99c"
  },
  {
    "url": "assets/js/174.c6eb72d6.js",
    "revision": "87488d963e42fa40c08600b0f24cd640"
  },
  {
    "url": "assets/js/175.502d6d1b.js",
    "revision": "2fe5a089af1beaea8ff7e5d75805837a"
  },
  {
    "url": "assets/js/176.2f0702fb.js",
    "revision": "102a1929347c5b71e5c51e48418f7b84"
  },
  {
    "url": "assets/js/177.3b9da590.js",
    "revision": "c82ff66e6322dc43eb7838622330cffa"
  },
  {
    "url": "assets/js/178.a111e142.js",
    "revision": "89f210c91f43cd1026b5bb4669cbc0e1"
  },
  {
    "url": "assets/js/179.d72f5168.js",
    "revision": "971798c619c1308a06ca94449e372e25"
  },
  {
    "url": "assets/js/18.89ab2ef7.js",
    "revision": "859ce52915158551b8ac1595768227bd"
  },
  {
    "url": "assets/js/180.055e3d19.js",
    "revision": "2e599d53984ea4932f6bd668ccd2790c"
  },
  {
    "url": "assets/js/181.ebc4fa35.js",
    "revision": "a68184a425f4036373df6ba51b0fef1c"
  },
  {
    "url": "assets/js/182.29f848fb.js",
    "revision": "16c422f86ada3e5c873d507acb9066d3"
  },
  {
    "url": "assets/js/183.723ea1d4.js",
    "revision": "f445ebfd60b1c0b354c7bbbfa6ea0b68"
  },
  {
    "url": "assets/js/184.5eb846e7.js",
    "revision": "1232649a979c4a35db20e9df0f561a0c"
  },
  {
    "url": "assets/js/185.85c5f2c7.js",
    "revision": "65db3c8ded754f53eb6eaeaa352d3d3e"
  },
  {
    "url": "assets/js/186.56bc9192.js",
    "revision": "a59ac3547dc7040d952594b0b146a6d8"
  },
  {
    "url": "assets/js/187.e965c6e1.js",
    "revision": "957eaec046590971819993126637b3d1"
  },
  {
    "url": "assets/js/188.b1a63090.js",
    "revision": "cffa215eefecaf8b4781f7cd311c3087"
  },
  {
    "url": "assets/js/189.080bde62.js",
    "revision": "8e98ccb9ce0b0b3c0ae20f34204f13fa"
  },
  {
    "url": "assets/js/19.05c4e7e5.js",
    "revision": "c45ea5ef645a133c7947f06ae0eff3c5"
  },
  {
    "url": "assets/js/190.f5eb5230.js",
    "revision": "c68077a0fdcf75372a0e62433a73d1e1"
  },
  {
    "url": "assets/js/191.c2521673.js",
    "revision": "1bca1b6660e416870d19a0ca36625251"
  },
  {
    "url": "assets/js/192.74ab54b1.js",
    "revision": "23be69d5071256cfc1c430720a308dfd"
  },
  {
    "url": "assets/js/193.f3c88e70.js",
    "revision": "bf065ca4206f259b7f2f2d71089465fa"
  },
  {
    "url": "assets/js/194.dd604b6f.js",
    "revision": "057d4c7f76ae009b4670469acb467642"
  },
  {
    "url": "assets/js/195.ff21ba37.js",
    "revision": "4280e748f6e76c7ec3d190ebd0ebe3b2"
  },
  {
    "url": "assets/js/196.15d16c89.js",
    "revision": "872f86573e17d983c9cfe176607e62dc"
  },
  {
    "url": "assets/js/197.fb7112d8.js",
    "revision": "98ca2a0c1f6cfacfc3bdc0044328969f"
  },
  {
    "url": "assets/js/198.ab8b2c01.js",
    "revision": "7234c8d9d189b83115aad9e4aed717a1"
  },
  {
    "url": "assets/js/199.b40494bc.js",
    "revision": "105e45db1f20cead20380c021eacb781"
  },
  {
    "url": "assets/js/2.7a13999e.js",
    "revision": "142fd338694506b1d61233a448199897"
  },
  {
    "url": "assets/js/20.59065f39.js",
    "revision": "3f005c6a0dcd2eba008f3b143b79a438"
  },
  {
    "url": "assets/js/200.a2f95c27.js",
    "revision": "a359f0fcf4fd4740041ecebf9af06ca4"
  },
  {
    "url": "assets/js/201.9bace776.js",
    "revision": "d55cfd0891e2c1c7a7424d4e6e74aa10"
  },
  {
    "url": "assets/js/202.ce3b5134.js",
    "revision": "5567ef14d0b5f5b64f7c88a1fa264c30"
  },
  {
    "url": "assets/js/203.6ad19aa3.js",
    "revision": "6ae376ff79b3026ea90709426599f926"
  },
  {
    "url": "assets/js/204.fbb1d6c7.js",
    "revision": "7f8715beb0708c142501737e7c2f879f"
  },
  {
    "url": "assets/js/205.689b92f6.js",
    "revision": "6874a15c9df37976e0d6630c17055292"
  },
  {
    "url": "assets/js/206.e5a1dc79.js",
    "revision": "10f30a350e13d6f9e9cdac58fc8f245a"
  },
  {
    "url": "assets/js/207.30acbee8.js",
    "revision": "11e02a38e04eb987227c6f136c8d54c0"
  },
  {
    "url": "assets/js/208.2301756f.js",
    "revision": "8e4316d446e1122a4cc5d0db6f96b5df"
  },
  {
    "url": "assets/js/209.3a3f79b6.js",
    "revision": "9fcee192a06f3e32029f76b89a4dc156"
  },
  {
    "url": "assets/js/21.e5feb84f.js",
    "revision": "f3166a124833703e7ef7164fea07c1e0"
  },
  {
    "url": "assets/js/210.7a4627b9.js",
    "revision": "820d6d5cc9777282ae76f4726f9da24f"
  },
  {
    "url": "assets/js/211.d576a6a0.js",
    "revision": "055a9c95a76082f33afa78b50f4985cd"
  },
  {
    "url": "assets/js/212.7a305fbf.js",
    "revision": "b3a363a6901118db7112564af7695436"
  },
  {
    "url": "assets/js/213.324fdc6f.js",
    "revision": "674243bbc836b3a177611457df110929"
  },
  {
    "url": "assets/js/214.1e0d5642.js",
    "revision": "cdbb3ba483834add988ce9fe78db5fb4"
  },
  {
    "url": "assets/js/215.474db771.js",
    "revision": "abac3d557ad4b475ac2722cef99ed651"
  },
  {
    "url": "assets/js/216.8a228ca0.js",
    "revision": "59a8ea39dadfb771a5aa28aec0786c4d"
  },
  {
    "url": "assets/js/217.56aca344.js",
    "revision": "ccc211d58fae2de18b6d1737eb05e1a9"
  },
  {
    "url": "assets/js/218.efb607e2.js",
    "revision": "600f687a139864762f82f28a970866d6"
  },
  {
    "url": "assets/js/219.dfa5ddc6.js",
    "revision": "03f7a81d98a718f29a4b493b1875d447"
  },
  {
    "url": "assets/js/22.cee25e0f.js",
    "revision": "b0ab25f3fbaf040db395c82bdae3824d"
  },
  {
    "url": "assets/js/220.a9ac2de5.js",
    "revision": "115e48b43d33a7cd5c011f8f9821829d"
  },
  {
    "url": "assets/js/221.69134055.js",
    "revision": "f73d2504843dc460e4f3bcfc35c40650"
  },
  {
    "url": "assets/js/222.4c1e9009.js",
    "revision": "a9e12a1f962549ee35b41911a7ba9176"
  },
  {
    "url": "assets/js/223.d6758105.js",
    "revision": "1dbc0111b60d6815dc8f4deee84279cc"
  },
  {
    "url": "assets/js/224.82c5d46b.js",
    "revision": "40ba5b5c801f91c4ec6517f93a497811"
  },
  {
    "url": "assets/js/225.164e444b.js",
    "revision": "59835e535a614a5b358df47b9cb1a595"
  },
  {
    "url": "assets/js/226.de2ffa51.js",
    "revision": "b268938970c6b5bf1f2831ac12169240"
  },
  {
    "url": "assets/js/227.4707866e.js",
    "revision": "e3066c9ca218110985e0a3514f8036ab"
  },
  {
    "url": "assets/js/228.76f363d8.js",
    "revision": "62cf4410b305f728a799286f134effa8"
  },
  {
    "url": "assets/js/229.9b6cc6b2.js",
    "revision": "5ddd88a22ab7b361420956179b702b84"
  },
  {
    "url": "assets/js/23.baa2e339.js",
    "revision": "820f41b396e9cffee19e673d2658b035"
  },
  {
    "url": "assets/js/230.ed969547.js",
    "revision": "29a6c3e8343ca5c47789847da1d1c3b8"
  },
  {
    "url": "assets/js/231.ef4224e3.js",
    "revision": "f5eae94f4b94de6aad454245b8fc3dcc"
  },
  {
    "url": "assets/js/232.d366e684.js",
    "revision": "ca7c4ecc84c8daf8213230b5f5abf6b1"
  },
  {
    "url": "assets/js/233.7e017461.js",
    "revision": "25baae0711aa80d367b51fab86ba1e7c"
  },
  {
    "url": "assets/js/234.0bff43cf.js",
    "revision": "e200562efa0ed2a9c12b8283d72bedc9"
  },
  {
    "url": "assets/js/235.5d2d5e88.js",
    "revision": "4042fb8219cc77a11b8d8f0de60d458e"
  },
  {
    "url": "assets/js/236.086f54e4.js",
    "revision": "5ad4a00d322972ab08d5b4b710fd8206"
  },
  {
    "url": "assets/js/237.76c5100d.js",
    "revision": "d5bbb8309247d45fbd894f7ac4c12b57"
  },
  {
    "url": "assets/js/238.cad7d8d5.js",
    "revision": "a753ce53e93c15cb002051899983ffa8"
  },
  {
    "url": "assets/js/239.ff99791a.js",
    "revision": "55d1c28b1c53ed7f7363d3d6f04aa62c"
  },
  {
    "url": "assets/js/24.48145db2.js",
    "revision": "3966d37c14a5bb78e3aa633d05882ded"
  },
  {
    "url": "assets/js/240.66318790.js",
    "revision": "d15f58e8a8a421e0dd21cad6ae276e42"
  },
  {
    "url": "assets/js/241.20bea8c2.js",
    "revision": "fed342df1596e62b42646536c5d37482"
  },
  {
    "url": "assets/js/242.09f0324b.js",
    "revision": "95298d92d1deef0adb4dd091a19a9607"
  },
  {
    "url": "assets/js/243.e3603aa3.js",
    "revision": "71bc7a5f1c6d2c3c0a17aaeed3edfbe2"
  },
  {
    "url": "assets/js/244.afe16d5c.js",
    "revision": "5576f4b82f63941a0eec3114bbd2da32"
  },
  {
    "url": "assets/js/245.858d6f99.js",
    "revision": "acf5052a47c1dfc37f0b30804e3cf8f8"
  },
  {
    "url": "assets/js/246.e69765bf.js",
    "revision": "dfbb5ef668bb96c97ad520833cac3d48"
  },
  {
    "url": "assets/js/247.401ab718.js",
    "revision": "6d6c348380725fd6cd626f334dff7f44"
  },
  {
    "url": "assets/js/248.d5fa74b4.js",
    "revision": "52be5a2c9e141125bd4e590e431281f1"
  },
  {
    "url": "assets/js/249.c3546eec.js",
    "revision": "0a4eeb6362ad128d946b9e7793dd0a4d"
  },
  {
    "url": "assets/js/25.fd21dfe8.js",
    "revision": "cf2a9a39d6bcb3c6c33829fdae2ebaee"
  },
  {
    "url": "assets/js/250.45055f65.js",
    "revision": "8f78723b7117c43e7060dd3251bbbd07"
  },
  {
    "url": "assets/js/251.83ace26d.js",
    "revision": "dde92c63d5b760430e1bb75f884e885d"
  },
  {
    "url": "assets/js/252.f0d05c3a.js",
    "revision": "288529d34c19ef149722de479ed234bc"
  },
  {
    "url": "assets/js/253.688da92f.js",
    "revision": "e82979827deba67c05149ac78fa7db9e"
  },
  {
    "url": "assets/js/254.bb9155b9.js",
    "revision": "2ae0a334c596f1212970fbbc739cd0c5"
  },
  {
    "url": "assets/js/255.8852da0d.js",
    "revision": "6d5eeedb77a7ef9e2e58862fb047a3cd"
  },
  {
    "url": "assets/js/256.21043b0a.js",
    "revision": "2052487d295c450509a415ea79b081bd"
  },
  {
    "url": "assets/js/257.2619b92a.js",
    "revision": "bc38203df9283a4bdd02db0a01dcd2d0"
  },
  {
    "url": "assets/js/258.f52f4861.js",
    "revision": "a46fd8047f6ec9d7b8eae0198ee42862"
  },
  {
    "url": "assets/js/259.e452ea3e.js",
    "revision": "677b90525cfeca948b072c5343cc1390"
  },
  {
    "url": "assets/js/26.3b59fafc.js",
    "revision": "712fe7ecd6c815447d35ca1a0bc8e048"
  },
  {
    "url": "assets/js/260.c1e39b31.js",
    "revision": "5beb10f8d80749eb483e6453a777fb45"
  },
  {
    "url": "assets/js/261.0e7ef0b4.js",
    "revision": "c6aaeea1d3ad8e6c3b7ffb7dfd602a10"
  },
  {
    "url": "assets/js/262.847e1866.js",
    "revision": "183213bc762b5820a524cc4b26159719"
  },
  {
    "url": "assets/js/263.87656405.js",
    "revision": "10b0edbbec8f32a22f5e632a19d022c0"
  },
  {
    "url": "assets/js/264.bceaaf63.js",
    "revision": "d272f3d9f8688e34e69678113fa93e32"
  },
  {
    "url": "assets/js/265.d20f22e2.js",
    "revision": "5e00cea8d31877e6c3fcc6957278a3f3"
  },
  {
    "url": "assets/js/266.71cf7d37.js",
    "revision": "b4c991ff0d6b421e3766fe62856ae4f7"
  },
  {
    "url": "assets/js/267.71e85297.js",
    "revision": "80d0f7ba9424273d693d8873cfea3efe"
  },
  {
    "url": "assets/js/268.63e966f9.js",
    "revision": "3e5064d801dd7c5c9cb2176f0b7f0c81"
  },
  {
    "url": "assets/js/269.54a971f3.js",
    "revision": "b9a4d1883e0a98bb5367268dfcf90649"
  },
  {
    "url": "assets/js/27.275b9b74.js",
    "revision": "4b6622012ca2aa4849697999770be2d1"
  },
  {
    "url": "assets/js/270.23d4df98.js",
    "revision": "b549d4f770d680edea20641c69b36b69"
  },
  {
    "url": "assets/js/271.ffd5f8e7.js",
    "revision": "8ea0dce0abe9087e8220c2b5a78533de"
  },
  {
    "url": "assets/js/272.6d0e3769.js",
    "revision": "f3dd66f93a89e304e538680082363978"
  },
  {
    "url": "assets/js/273.7133bc5a.js",
    "revision": "228141309750ce37caa1b8f1c6e8d16b"
  },
  {
    "url": "assets/js/274.c6ccad58.js",
    "revision": "265bf9832ed12feb5ae854585cc6953e"
  },
  {
    "url": "assets/js/275.3380b781.js",
    "revision": "d3efd6a594cf8967cb9ff819b5a2f466"
  },
  {
    "url": "assets/js/276.6e88c116.js",
    "revision": "f3ca51f3570448f969d3d06b987b31ea"
  },
  {
    "url": "assets/js/277.6027bdc8.js",
    "revision": "b2e6d430ee610e51d8437f3c95f066ee"
  },
  {
    "url": "assets/js/278.9385c0f0.js",
    "revision": "60c55a1e2bf562f8811aa173fb4c0904"
  },
  {
    "url": "assets/js/279.227d92de.js",
    "revision": "9f875149129aee2fd427c67ac0e5d030"
  },
  {
    "url": "assets/js/28.f37cbd4f.js",
    "revision": "8a726a3494d41f735c2311868221764f"
  },
  {
    "url": "assets/js/280.7a95978f.js",
    "revision": "2b4e354ca5990b9c429265a231cb7852"
  },
  {
    "url": "assets/js/281.8ad4d3b2.js",
    "revision": "e04cb3f13d2023fdb3c4bb1e4b91c63b"
  },
  {
    "url": "assets/js/282.e8ffd76c.js",
    "revision": "e621be91f6ab911b6c083c551e7f728a"
  },
  {
    "url": "assets/js/283.eac9d1bb.js",
    "revision": "73996b13bb3f0184ecc79d96d0442545"
  },
  {
    "url": "assets/js/284.15e717c0.js",
    "revision": "cb2c2b19e130ea5789949373a5d80d5b"
  },
  {
    "url": "assets/js/285.d9367c1f.js",
    "revision": "43917a2f1971f18408561705f96f052b"
  },
  {
    "url": "assets/js/286.e79a21e8.js",
    "revision": "05ffff0b24f65a483875ad08c741d4d6"
  },
  {
    "url": "assets/js/287.caff100c.js",
    "revision": "5682fb7e1b2cb614a444f1f416523026"
  },
  {
    "url": "assets/js/288.30ca2cec.js",
    "revision": "f0fea8d00ef32f040891969558bd8735"
  },
  {
    "url": "assets/js/289.decded51.js",
    "revision": "2fe092cbb478ea964aaa215078ef1f89"
  },
  {
    "url": "assets/js/29.3a01d220.js",
    "revision": "cf6bf9d43ac45f4062ee3abb26b247cf"
  },
  {
    "url": "assets/js/290.1863cd2d.js",
    "revision": "db69facf6468e3b0f7aa468600d5a8c7"
  },
  {
    "url": "assets/js/291.8ab51721.js",
    "revision": "9287f3f4c3564c3b49b04714996c9a29"
  },
  {
    "url": "assets/js/292.3818396a.js",
    "revision": "7e1bb3529ae07f2f51dd850eab763814"
  },
  {
    "url": "assets/js/293.62dc1d1c.js",
    "revision": "c5e1fb984b82e7438888533123b138cb"
  },
  {
    "url": "assets/js/294.dfe80929.js",
    "revision": "5d5523c6c229cb9968c9bf0b8c53f146"
  },
  {
    "url": "assets/js/295.8280574e.js",
    "revision": "f25859f08b9d1d7298b6a7b5062ece85"
  },
  {
    "url": "assets/js/296.cba4cc9a.js",
    "revision": "6c6f702a7f92a883eb8d9c6910d90bb6"
  },
  {
    "url": "assets/js/297.3c29d7ab.js",
    "revision": "6eee2df1c8c3d89287cbf1aa1d70edfa"
  },
  {
    "url": "assets/js/298.9771f2ec.js",
    "revision": "e6283f84dfad470b5b268ae49fd9b5a0"
  },
  {
    "url": "assets/js/299.f5421dae.js",
    "revision": "8e376161c88f104c3670bf09d9204d28"
  },
  {
    "url": "assets/js/3.b41409f9.js",
    "revision": "b766f12ced19c9ea17f7bb66b67957a3"
  },
  {
    "url": "assets/js/30.e691ea1d.js",
    "revision": "d2b86f8a7dd8c2553b4213833fe360e9"
  },
  {
    "url": "assets/js/300.0a44e86a.js",
    "revision": "7112b50415866d78992e7a6ad7ebc95e"
  },
  {
    "url": "assets/js/301.bc791211.js",
    "revision": "e17f4fd2414f25468f94b2924f903b25"
  },
  {
    "url": "assets/js/302.9d2ebcde.js",
    "revision": "945b391c8f60bfed72e244b6f09d78ee"
  },
  {
    "url": "assets/js/303.68c70778.js",
    "revision": "7216c263a10e78d87941ee69477a5ee9"
  },
  {
    "url": "assets/js/304.c5dfd8d0.js",
    "revision": "69d89c43147f6050a6df412f2bb441c0"
  },
  {
    "url": "assets/js/305.9e701eea.js",
    "revision": "cd3c5e8cbedc05317c03e72ff1461ac4"
  },
  {
    "url": "assets/js/306.5df3a8c1.js",
    "revision": "265104c26590f4f072ccb2877442e0e2"
  },
  {
    "url": "assets/js/307.6ff373f8.js",
    "revision": "b94fb720b22af971a88e892c7da180ac"
  },
  {
    "url": "assets/js/308.dcfa7530.js",
    "revision": "c3457470c252dc31bf62c8f451ac1924"
  },
  {
    "url": "assets/js/309.2e4840a3.js",
    "revision": "bce51a4df170159af8930da0a52392f6"
  },
  {
    "url": "assets/js/31.d7e1ff86.js",
    "revision": "88c515cd6d7075253e2997d90ac0f580"
  },
  {
    "url": "assets/js/310.7f56a3cd.js",
    "revision": "8f99841d052e0b27ad0ac5ec35fbfb10"
  },
  {
    "url": "assets/js/311.ea57970d.js",
    "revision": "6c9e41acf39f2022bd92d8d52cafd7e1"
  },
  {
    "url": "assets/js/312.587d0a23.js",
    "revision": "c315edf59c810106eed871d4c4a8fd2f"
  },
  {
    "url": "assets/js/313.d89625e8.js",
    "revision": "33f2add989bb370c1d4de6ed6b2275b0"
  },
  {
    "url": "assets/js/314.8b620f52.js",
    "revision": "d433dd29bf244d70f16ee81146bc45b5"
  },
  {
    "url": "assets/js/315.2357da94.js",
    "revision": "797079f537c9b6ed9364fe77240eb77a"
  },
  {
    "url": "assets/js/316.22db44c1.js",
    "revision": "e4b8315d4f6e092c548ac7d91aaf70b8"
  },
  {
    "url": "assets/js/317.3d58336f.js",
    "revision": "c0a3cdb01890756bbe61dfa829700d63"
  },
  {
    "url": "assets/js/318.fff4fab2.js",
    "revision": "e395915d65354e02f331fbc6ee348946"
  },
  {
    "url": "assets/js/319.22c04180.js",
    "revision": "9fdbdc5cb3a74631d19ec166b5103bd7"
  },
  {
    "url": "assets/js/32.2bfd2f5f.js",
    "revision": "ccf6ce6b342bb0ae9ffc127360ccc6e0"
  },
  {
    "url": "assets/js/320.95364e47.js",
    "revision": "0dcf092bd0c408e867d08c6719603fdd"
  },
  {
    "url": "assets/js/321.db86b208.js",
    "revision": "cafe99868155d2345493c0febcdbd4e9"
  },
  {
    "url": "assets/js/322.c8a841f7.js",
    "revision": "a90ee7d0b6eef63e8d7cac28996389a1"
  },
  {
    "url": "assets/js/323.f5ca9c6e.js",
    "revision": "f0221e8cfb8541265210bbab0b087db5"
  },
  {
    "url": "assets/js/324.970b6736.js",
    "revision": "7305883af6edc5798022c4246eed6313"
  },
  {
    "url": "assets/js/325.64e19b45.js",
    "revision": "ac4efd3164f69b42fe146c9a196f3ccb"
  },
  {
    "url": "assets/js/326.d4841549.js",
    "revision": "c968488e3ced1c65103adda7610433ae"
  },
  {
    "url": "assets/js/327.6668ecec.js",
    "revision": "3eaf65c5f8f1d236f0ddae88a40c09c5"
  },
  {
    "url": "assets/js/328.e712c7e3.js",
    "revision": "56459309955da10172634130af1b295c"
  },
  {
    "url": "assets/js/329.3169eda2.js",
    "revision": "2508ecdad242e6c140fcd9ca15e199f6"
  },
  {
    "url": "assets/js/33.9944f6dc.js",
    "revision": "3c0e00fd8706ab7a2d803e1b38114d95"
  },
  {
    "url": "assets/js/330.3fd32f2d.js",
    "revision": "cacdb1296f661f3ed6d977f2c65da62f"
  },
  {
    "url": "assets/js/331.4fceebdb.js",
    "revision": "44601e35ab729aa6c31c5bd1418b2b6d"
  },
  {
    "url": "assets/js/332.63b5625f.js",
    "revision": "cb44aee03cb37172d491722a09f4c8ab"
  },
  {
    "url": "assets/js/333.4c3d45b7.js",
    "revision": "ce984fa8c56e4e5f028f9bfeb2461f95"
  },
  {
    "url": "assets/js/334.76e51a5e.js",
    "revision": "e02d56bbf66461b146b28201297ff7a0"
  },
  {
    "url": "assets/js/335.72cb8dae.js",
    "revision": "4949602dcfab10c32d2c3dfa83a14c70"
  },
  {
    "url": "assets/js/336.11aa524e.js",
    "revision": "5842bb298266e2ab889ee90bc8e39872"
  },
  {
    "url": "assets/js/337.f99331e6.js",
    "revision": "27fa6d5c397e5c8b1be82de33e9886eb"
  },
  {
    "url": "assets/js/338.e3300822.js",
    "revision": "92377ab914dd1c3478760bc587e5d9af"
  },
  {
    "url": "assets/js/339.73a5af78.js",
    "revision": "c3a16d130c8a9b2bb2250a330c397498"
  },
  {
    "url": "assets/js/34.5fb6a803.js",
    "revision": "3ad5a7eccb259f131174d852a04fbb6f"
  },
  {
    "url": "assets/js/340.1dc1f544.js",
    "revision": "c92aa5dd5bcbc67cafe4337d12538bcd"
  },
  {
    "url": "assets/js/341.9c61af9e.js",
    "revision": "ba02d98ca53e34184b56f1b45b73d3bc"
  },
  {
    "url": "assets/js/342.ae2ead28.js",
    "revision": "5157b7058d3d33171f32043167163dcb"
  },
  {
    "url": "assets/js/343.5703b68d.js",
    "revision": "d642e0e85241d45f0988bcb6e6e79e0b"
  },
  {
    "url": "assets/js/344.640cb31f.js",
    "revision": "496d8e2d0fcaa438d44e957ebad79efc"
  },
  {
    "url": "assets/js/345.3666fc38.js",
    "revision": "19d816d1ac7b59ad41022a46cfdb3597"
  },
  {
    "url": "assets/js/346.9d21b66d.js",
    "revision": "55fe5ed0f67e62cd3720160c974f7adb"
  },
  {
    "url": "assets/js/347.2e69507a.js",
    "revision": "a017df77927c07e4fc3ef2c19de5cb34"
  },
  {
    "url": "assets/js/348.7e8f9e8d.js",
    "revision": "e55c41f0a8e606c81ec499242118eb25"
  },
  {
    "url": "assets/js/349.f0a6e8cd.js",
    "revision": "50b9eb168e2734b687842c4009d89a07"
  },
  {
    "url": "assets/js/35.08cf8026.js",
    "revision": "764f68e7cb422414256a74f5c2a11301"
  },
  {
    "url": "assets/js/350.26fb3721.js",
    "revision": "ee3e63a7673b5f06b683f35eb98f5ca0"
  },
  {
    "url": "assets/js/351.f25bbeb5.js",
    "revision": "c3885d4decdc52b452e4ff60214569fc"
  },
  {
    "url": "assets/js/352.d221200a.js",
    "revision": "8c6f32d99b6a0e0826d5f86c186d9556"
  },
  {
    "url": "assets/js/353.8bb35027.js",
    "revision": "2d08c7ddf3a7d2b3fb397f69b32182ac"
  },
  {
    "url": "assets/js/354.1a913411.js",
    "revision": "0a9f4246f1709090afd5530733a1a957"
  },
  {
    "url": "assets/js/355.d77d0b4f.js",
    "revision": "80885011db99becd141681d4f9890f2f"
  },
  {
    "url": "assets/js/356.7c9e0ba3.js",
    "revision": "8ed8f7c7119de913b3fd6b5bbbe529a3"
  },
  {
    "url": "assets/js/357.5c574926.js",
    "revision": "0aeb6ec7173488d8a647dea3d225a0e3"
  },
  {
    "url": "assets/js/358.95336ae6.js",
    "revision": "db638a9ecb63430e18ba728af8c048af"
  },
  {
    "url": "assets/js/359.2318970b.js",
    "revision": "871a7e3d7999e10cd882b67e12fd641f"
  },
  {
    "url": "assets/js/36.9171b290.js",
    "revision": "12698d58514c3540c55b4f9855bae7b7"
  },
  {
    "url": "assets/js/360.95c44841.js",
    "revision": "39da7b0404ecd572dd0d79d04a2a53c0"
  },
  {
    "url": "assets/js/361.2e01184c.js",
    "revision": "b559da23c9f65c9a8f4555e5251c4b27"
  },
  {
    "url": "assets/js/362.af3cfd93.js",
    "revision": "58ca10fd77447627014d04ed01a715f0"
  },
  {
    "url": "assets/js/363.18900a44.js",
    "revision": "22426e40dec3d83303f3976649fb8c53"
  },
  {
    "url": "assets/js/364.bd3fcc7c.js",
    "revision": "dbd7ba49394f589cea9418a8fecb856c"
  },
  {
    "url": "assets/js/365.42b3d02a.js",
    "revision": "1eccd81d7995cb2549337de57c6dccfe"
  },
  {
    "url": "assets/js/366.db290422.js",
    "revision": "301e5b24735613c64a9b483ae98921f7"
  },
  {
    "url": "assets/js/367.c312b233.js",
    "revision": "8689ef78230c6d4ab97f7902e1af67db"
  },
  {
    "url": "assets/js/368.06cbe488.js",
    "revision": "ce8c6edbe0aaaadd8c21744c851f28cd"
  },
  {
    "url": "assets/js/369.8ca360da.js",
    "revision": "9585c55709eff5593c3f7fcaa5bce9b4"
  },
  {
    "url": "assets/js/37.507d164b.js",
    "revision": "0bdebc6f5203c53a89183cd60dfde0b0"
  },
  {
    "url": "assets/js/370.cb3785c7.js",
    "revision": "6d1e78612a738b2d30235ba77e075ab0"
  },
  {
    "url": "assets/js/371.114181da.js",
    "revision": "3855d00e1d809fe0d03d1a1b31cda6f3"
  },
  {
    "url": "assets/js/372.b663a22e.js",
    "revision": "79971905735d29fbc9ab0ee3f0cd1fd1"
  },
  {
    "url": "assets/js/373.6c60a190.js",
    "revision": "12357bf81032a3296b35c6d91fc65351"
  },
  {
    "url": "assets/js/374.87c9fa7f.js",
    "revision": "19bf4eafa70fc61dd9cc759afd5fa48a"
  },
  {
    "url": "assets/js/375.8b9b365c.js",
    "revision": "7c9be7f8f19986ba039659b27d0c4274"
  },
  {
    "url": "assets/js/376.d6569286.js",
    "revision": "847d470b377bbd74c7197f9b426e55c5"
  },
  {
    "url": "assets/js/377.1319d9e7.js",
    "revision": "4f198823a364bc92c718287330228cb2"
  },
  {
    "url": "assets/js/378.a8b87a50.js",
    "revision": "b5c11f8d4316066d9c1566d8981c6292"
  },
  {
    "url": "assets/js/379.daa61a1d.js",
    "revision": "a087db5f0fa014479d080d41d56f16de"
  },
  {
    "url": "assets/js/38.1b7acc71.js",
    "revision": "ecd9f926734d22bfd25388f97cec3f33"
  },
  {
    "url": "assets/js/380.4eb85837.js",
    "revision": "ec65aaf7845b09ed759bb9588b8b27a1"
  },
  {
    "url": "assets/js/381.1370644d.js",
    "revision": "075fd0451513c555f3a6e37d73a89e36"
  },
  {
    "url": "assets/js/382.43bffcea.js",
    "revision": "ecab542edff046f11bda9bb279a581d1"
  },
  {
    "url": "assets/js/383.3e9eb214.js",
    "revision": "062ec8f198fa8a552ad9afdcfd2779d2"
  },
  {
    "url": "assets/js/384.66c1ceac.js",
    "revision": "575f6e92f41f53095da399ba4ba7a780"
  },
  {
    "url": "assets/js/385.e8939870.js",
    "revision": "71ad7873b97812a4c234f4874f9fc295"
  },
  {
    "url": "assets/js/386.0afd7f63.js",
    "revision": "fc871791bb7091439661cee7131ce87d"
  },
  {
    "url": "assets/js/387.f5d71174.js",
    "revision": "5602a4c01adb44881f307cbff40c06e9"
  },
  {
    "url": "assets/js/388.d280f4dc.js",
    "revision": "9a0aa20b44afdf10248b2ed44d6482a2"
  },
  {
    "url": "assets/js/389.9fc925e5.js",
    "revision": "d78170699b9761364c05374749ad894b"
  },
  {
    "url": "assets/js/39.7e691ab2.js",
    "revision": "de3c27b6fc1e39a76f0d4f8e23cb8360"
  },
  {
    "url": "assets/js/390.f4d9a620.js",
    "revision": "863200294c2a25fad4bcb4173bd339c2"
  },
  {
    "url": "assets/js/391.759c3e6e.js",
    "revision": "015544e9d5e46be60316aae27d7a3dce"
  },
  {
    "url": "assets/js/392.da2fb828.js",
    "revision": "fc1b6398b62a52c702034db8875bbe44"
  },
  {
    "url": "assets/js/393.9ab63e65.js",
    "revision": "dc84ceaae9d016221de670850318fa9e"
  },
  {
    "url": "assets/js/394.05725662.js",
    "revision": "33413fdde08da396286a446d52cfbaed"
  },
  {
    "url": "assets/js/395.1bf50bc6.js",
    "revision": "a013aa467b5b5aa52c3b36c77febabae"
  },
  {
    "url": "assets/js/396.01355a91.js",
    "revision": "c233c1670291be18a1cdf4a9ffe9c53b"
  },
  {
    "url": "assets/js/397.61764907.js",
    "revision": "8017dc2b5a0c37d4915d3dbc05f0b9d8"
  },
  {
    "url": "assets/js/398.9c760169.js",
    "revision": "1f93663a9a9437fb5a9e3c7b21978c4d"
  },
  {
    "url": "assets/js/399.ac4517ad.js",
    "revision": "3e0cea108a0f7789cd3942c569158a15"
  },
  {
    "url": "assets/js/4.9832621f.js",
    "revision": "fba049eee2e158af094a0307965ca039"
  },
  {
    "url": "assets/js/40.7fecb9d4.js",
    "revision": "295911caf5e6c1fc8b765887f6028354"
  },
  {
    "url": "assets/js/400.b38022fe.js",
    "revision": "197f28d2432d49d97f91bf171479ebe0"
  },
  {
    "url": "assets/js/401.c12a58a5.js",
    "revision": "722d428f3493f2c202ea578d8dca7072"
  },
  {
    "url": "assets/js/402.fc63cb0f.js",
    "revision": "f0828bfd3845ec6381da6ed69c82d40f"
  },
  {
    "url": "assets/js/403.a7be31fb.js",
    "revision": "4df7815cce2d4769d0ddd1e8ed700ac2"
  },
  {
    "url": "assets/js/404.5a2824d8.js",
    "revision": "bdbfeb217566a2704271e9da91ee83a1"
  },
  {
    "url": "assets/js/405.b035ec58.js",
    "revision": "4aa6711d520d4ddf9d0f5af2148b10c5"
  },
  {
    "url": "assets/js/406.f5509a50.js",
    "revision": "1e577dc08a20ea029a460c2f73ef5ddb"
  },
  {
    "url": "assets/js/407.b4f63e58.js",
    "revision": "ab3926a60cb470880658ba0cd07ecb11"
  },
  {
    "url": "assets/js/408.a90b6fb3.js",
    "revision": "45215c99a2d30fc57413c063e2165b39"
  },
  {
    "url": "assets/js/409.c494bccc.js",
    "revision": "ea710c24e786def3660942072af2dcf7"
  },
  {
    "url": "assets/js/41.3e201443.js",
    "revision": "8a8ddb9d5690130a3439bf8d27838476"
  },
  {
    "url": "assets/js/410.07d6cec4.js",
    "revision": "ebeec7ca588ca413b995639977a3f81c"
  },
  {
    "url": "assets/js/411.163dcd19.js",
    "revision": "b35725b21debeb9cf37450c828701a81"
  },
  {
    "url": "assets/js/412.fda158bf.js",
    "revision": "973d4c6a1f5d87c3edec3b95d6549f65"
  },
  {
    "url": "assets/js/413.ea5ed386.js",
    "revision": "3c846779d2f631fcd15eae7495d6aa56"
  },
  {
    "url": "assets/js/414.09140f20.js",
    "revision": "3f00d416748f92bd1b5aa2b41babeb70"
  },
  {
    "url": "assets/js/415.aabc25de.js",
    "revision": "01a6b50df18d691008adf986dc586b20"
  },
  {
    "url": "assets/js/416.ac1dbde7.js",
    "revision": "be0718fa4db59fd67f95477bca9b09f9"
  },
  {
    "url": "assets/js/417.5b15a241.js",
    "revision": "248869f6d0c1ad1909f550be9cf720e8"
  },
  {
    "url": "assets/js/42.447f5bb4.js",
    "revision": "63bc04b72107496f40bc6c4664752818"
  },
  {
    "url": "assets/js/43.f36e5c4d.js",
    "revision": "3a70a45743c4f82ce5fa71969db80557"
  },
  {
    "url": "assets/js/44.837b5c92.js",
    "revision": "a879e2696c5f181a6b5bfa612967dd06"
  },
  {
    "url": "assets/js/45.e3d1b88f.js",
    "revision": "c1a55d0ea728d02a133da1f43c97090a"
  },
  {
    "url": "assets/js/46.e9169bd9.js",
    "revision": "ebb23bf982eed4899f27ed5baacd37bd"
  },
  {
    "url": "assets/js/47.81bb28cb.js",
    "revision": "17f68526818df263d07c55c3f62cf673"
  },
  {
    "url": "assets/js/48.7d2fb6ee.js",
    "revision": "e86a0d3a3eb6d5ac38dbf9ccb1e624e2"
  },
  {
    "url": "assets/js/49.0b9923ad.js",
    "revision": "9400a6bf36a36a3796ea8892eaeb656f"
  },
  {
    "url": "assets/js/5.dc90163d.js",
    "revision": "479cb28b27fa0f7aab83fee4c97c84f2"
  },
  {
    "url": "assets/js/50.3c6b2d7d.js",
    "revision": "73e087092bd0d4a7b49dd562039d6c1d"
  },
  {
    "url": "assets/js/51.66098169.js",
    "revision": "7f1423194478fc13535952bce1898ef1"
  },
  {
    "url": "assets/js/52.62ce51de.js",
    "revision": "77b03f5488e6264294330a707bd7720c"
  },
  {
    "url": "assets/js/53.ebefe7c5.js",
    "revision": "99dd4f2816b536e11cc0c97ba6400715"
  },
  {
    "url": "assets/js/54.ca79aa37.js",
    "revision": "deed2228d9023c31f7742713f8332234"
  },
  {
    "url": "assets/js/55.1f0a2eaf.js",
    "revision": "84b6f12c8c4ba3e02954f25975717844"
  },
  {
    "url": "assets/js/56.016bffdf.js",
    "revision": "f6534af74056c07f895872df0675eba2"
  },
  {
    "url": "assets/js/57.4d9dd8a5.js",
    "revision": "003ee4ab906d0a7f9e57785fa5e5b6aa"
  },
  {
    "url": "assets/js/58.d154b61e.js",
    "revision": "e33df4c392f2d0eddb582744ce9c815a"
  },
  {
    "url": "assets/js/59.9a76b5d9.js",
    "revision": "44e8ee84f64eb060b045c6baeb23fbf4"
  },
  {
    "url": "assets/js/6.17cee237.js",
    "revision": "5e1cff2f0317791b616ed699261c796e"
  },
  {
    "url": "assets/js/60.08553638.js",
    "revision": "dae742b48ed6f93b4615983605d05148"
  },
  {
    "url": "assets/js/61.c57fda3d.js",
    "revision": "18f6c4821c2fe0a67f17eac9ee21e982"
  },
  {
    "url": "assets/js/62.c2a1733d.js",
    "revision": "7d05f1f62c8c10c878461314e3fa5d4a"
  },
  {
    "url": "assets/js/63.c23a609d.js",
    "revision": "a0b8e26d5b4afde10c252b3c90718641"
  },
  {
    "url": "assets/js/64.34edf9fe.js",
    "revision": "ba956972683a36ae3e7dc8b696e4c6ba"
  },
  {
    "url": "assets/js/65.cf9be362.js",
    "revision": "38669d4539682b16f1b3353e0c80e2e7"
  },
  {
    "url": "assets/js/66.e8f0c7b4.js",
    "revision": "9f0f1d004d883131f3d1308e61e3ace9"
  },
  {
    "url": "assets/js/67.3a24031c.js",
    "revision": "f337b28a1fec4dbf6d94727757a6322c"
  },
  {
    "url": "assets/js/68.a6d2c16f.js",
    "revision": "f73cff3a9f13ce5584270f1d59048cb9"
  },
  {
    "url": "assets/js/69.25e9bab5.js",
    "revision": "c1f9b19f29caf78931dd16353e4044ae"
  },
  {
    "url": "assets/js/7.2f852040.js",
    "revision": "1eafd9e7105b736e06d9093c68e1ac7b"
  },
  {
    "url": "assets/js/70.0f34969c.js",
    "revision": "f2fc5415a7f46f8950759ff2a6adc766"
  },
  {
    "url": "assets/js/71.58417fac.js",
    "revision": "6873dc98ba663121f01346feed330619"
  },
  {
    "url": "assets/js/72.6c65bfaa.js",
    "revision": "70151cba32113e030579fda71daadec4"
  },
  {
    "url": "assets/js/73.b8da590d.js",
    "revision": "afef78080041e045ccb1e01e69ed371e"
  },
  {
    "url": "assets/js/74.c01be35a.js",
    "revision": "cca4798a21bd2f981aa0631428b9c480"
  },
  {
    "url": "assets/js/75.6518dea0.js",
    "revision": "c75b5d23eecf1576586654596d5c55b5"
  },
  {
    "url": "assets/js/76.cd07572c.js",
    "revision": "362bf2cbc92e76cb0a761885be0c21cc"
  },
  {
    "url": "assets/js/77.ee4c9bcc.js",
    "revision": "d629f7078a8fde9e7dcd697f7f04b167"
  },
  {
    "url": "assets/js/78.8cc574fb.js",
    "revision": "963dd597608c35596ce8504d4803f322"
  },
  {
    "url": "assets/js/79.7fba30e4.js",
    "revision": "c73b1edc79f897d58ac6b167dc88ac40"
  },
  {
    "url": "assets/js/8.eaf5d154.js",
    "revision": "0bdbec96a28e2f2758d753e9a54a9d48"
  },
  {
    "url": "assets/js/80.3bad63f4.js",
    "revision": "df628d08e2094de12ac40be19c3ba93a"
  },
  {
    "url": "assets/js/81.1c3af685.js",
    "revision": "7e8dbdc072bc46b228901034bb8509da"
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
    "url": "assets/js/84.fcafb64a.js",
    "revision": "d68c363b6e9be8b7d3739c8ef14571ee"
  },
  {
    "url": "assets/js/85.624a073f.js",
    "revision": "01708d59d9deec6774356ea09bb4961e"
  },
  {
    "url": "assets/js/86.141bd2f2.js",
    "revision": "2b67e420632c3610c1db325cfc592628"
  },
  {
    "url": "assets/js/87.b79f41f4.js",
    "revision": "d5f71af4c3bfca653f43aadbc00c3490"
  },
  {
    "url": "assets/js/88.bfd5dc40.js",
    "revision": "bff87f770caeae1e3eeb8c7bb9c4ab3a"
  },
  {
    "url": "assets/js/89.5b74a8e9.js",
    "revision": "5ca0788507b6ed97881e17c6d8c34765"
  },
  {
    "url": "assets/js/9.4037009d.js",
    "revision": "d234ba72be2c572b8565eb97517177f2"
  },
  {
    "url": "assets/js/90.a9686173.js",
    "revision": "df80421f0dea3f4f72e16c167be9bfdc"
  },
  {
    "url": "assets/js/91.f915ffa0.js",
    "revision": "0f620ef88bc03efe42dd20d921cbfee3"
  },
  {
    "url": "assets/js/92.bff4fe2c.js",
    "revision": "ba3245eaee44101fb663f654d29b6aab"
  },
  {
    "url": "assets/js/93.ed3e4c64.js",
    "revision": "2a9ee00761d805c8d1e7246fe5c09ce1"
  },
  {
    "url": "assets/js/94.237404b3.js",
    "revision": "a67247c3011ba3482df9b50c14111d2c"
  },
  {
    "url": "assets/js/95.64653313.js",
    "revision": "a1f74cbb0bb6f3ccfad47227b701d4f0"
  },
  {
    "url": "assets/js/96.b5203ed0.js",
    "revision": "cb6c56c0b72da8191f6206d41d7811e9"
  },
  {
    "url": "assets/js/97.e20b0779.js",
    "revision": "0f555cb6de23468497a9752b85290c1a"
  },
  {
    "url": "assets/js/98.4faf5186.js",
    "revision": "b11de8d09c573797fa8ff1704e709e06"
  },
  {
    "url": "assets/js/99.0dc6b20c.js",
    "revision": "eac1c9cf597841a0d14886468ccea630"
  },
  {
    "url": "assets/js/app.c78b5b4d.js",
    "revision": "a5cfd2d58034ca3c6eaee2fc9a2a4e9e"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "f5261528bd38f40586b2fdfff21a36b6"
  },
  {
    "url": "blockchain/solidity.html",
    "revision": "e6177991540c87f03659593b9990fb1c"
  },
  {
    "url": "common/architecture.html",
    "revision": "b82711497dcada0cd99e915213bda6bb"
  },
  {
    "url": "common/code-structure.html",
    "revision": "3897e450ac4d25bc52e287110cd28d44"
  },
  {
    "url": "common/crawl.html",
    "revision": "07d3f98d39c1c322afeb1c4e55ebe4c0"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "b02ae4e455e40da9d35e2b3f6b3a717c"
  },
  {
    "url": "common/debugging.html",
    "revision": "5e5d4282ab10fffa7c68af0076742b50"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "7d41fe65ca0fc2efb3d58dd9ed91ee7b"
  },
  {
    "url": "common/document.html",
    "revision": "763c84e79fee1273dd9a11a4c092a79b"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "5b23a37ef36d42d40068f6078fe9519e"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "12ee27f63f4b47e2062ce68f160eeb58"
  },
  {
    "url": "common/index.html",
    "revision": "a0063615d7275c694addb4f6d68bad3f"
  },
  {
    "url": "common/optimize_be.html",
    "revision": "475cd75de84f9106e955e5460fc1906f"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "930cda740fba7989d212d9117fb4ebc4"
  },
  {
    "url": "common/realtime.html",
    "revision": "36f52eaab8a54a6bd052d53c54c0b090"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "115caeda2e401969d77a15329d1fed13"
  },
  {
    "url": "common/refactor.html",
    "revision": "e970bf193524e6548e1366d943a6835a"
  },
  {
    "url": "common/security/software-security.html",
    "revision": "1dbf9facc8b6213e5b879cf1c8c5a368"
  },
  {
    "url": "common/seo.html",
    "revision": "49c1a130c501632ff02cc6153ce52658"
  },
  {
    "url": "common/use-case.html",
    "revision": "1ae48e9271e99af58c150ed372c44756"
  },
  {
    "url": "css/box-model.html",
    "revision": "f7ca771148bef86005d23bc95ba33620"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "375cc19454fcd4caa21cbd3d57068bbb"
  },
  {
    "url": "css/css-flex.html",
    "revision": "d0b0acac5902b16d54e643db2ef9c768"
  },
  {
    "url": "css/tricks.html",
    "revision": "05352945667de3a2e2fdbccb5f15dec8"
  },
  {
    "url": "db/architect.html",
    "revision": "b4869925567ac275ad8a17ca6960d644"
  },
  {
    "url": "db/cassandra.html",
    "revision": "b7991b6823ac0ed3bedb3a541ae3fe67"
  },
  {
    "url": "db/couchdb.html",
    "revision": "9df57da4313a6b3918bb19275ddbc373"
  },
  {
    "url": "db/db-concerns.html",
    "revision": "ab171be848904967867c7cb10ed1bbda"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "5061abbb2b1469e3f0feaedfbd457ed2"
  },
  {
    "url": "db/db-vs-blockchain.html",
    "revision": "ae95dba2ac41b42aefc10ea0df91dbd3"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "4f0aefce070f398728bc2861f758206a"
  },
  {
    "url": "db/mongodb.html",
    "revision": "b0b89e6479cf5a4ae0b9c28a4631f939"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "37b10cb6ff3bf5bd3318be9188191b91"
  },
  {
    "url": "db/nosql.html",
    "revision": "ce837070206ad6079ea0621e328af1a9"
  },
  {
    "url": "db/optimize_db.html",
    "revision": "785bd196b2aee3aa18f527bceb3e232f"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "9e162b6a66ec7b97b8f104e63e8eb52c"
  },
  {
    "url": "db/postgre.html",
    "revision": "f34d6f2645903b885ab4ee824b2b1542"
  },
  {
    "url": "db/redis.html",
    "revision": "d17af02756c4f253ef6e8e926cd3f97a"
  },
  {
    "url": "db/tx-isolation.html",
    "revision": "1b701acf9e89a8ac37df6a2d16951fc0"
  },
  {
    "url": "db/use-cases.html",
    "revision": "527509c9226f626150e43cec114682bf"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "5a77feea81339c1e10dd95e42ceeaa20"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "7ca00ed91a88d04151428277863f5f75"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "6319bcd805e51a86e16cf4c4fc3f7cf1"
  },
  {
    "url": "fp/fp-ts.html",
    "revision": "b9f46afb5ad71ef6c38b10686233026d"
  },
  {
    "url": "fp/functor.html",
    "revision": "93b63209889ef85325d431e5d0074df0"
  },
  {
    "url": "game.html",
    "revision": "4b0fac304797eb8164e0be2260a3e3e6"
  },
  {
    "url": "go/clean.html",
    "revision": "6f4d9de94f7967ca486b8822c1b709b7"
  },
  {
    "url": "go/index.html",
    "revision": "139f783d12e98695d7496462ae603274"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "523395276c31eaa56d81db25c5de8106"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "1df9d455802ff7b3dd0e9459fae241a0"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "d2e89aff319ef7ae40a33c66f396c913"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "24786268c1176a1aeb3b7a1e5c298d8f"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "202c0ee1d5327b5926d72f7210ae050a"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "259ecdff6d9edc8c179422b2ed63e7b3"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "58631711c00f201661a4d741a1d7813f"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "67ac4aacf5efd06d5bec7d408d7e99f8"
  },
  {
    "url": "index.html",
    "revision": "837660f03b51ad294e103eaa2b7db304"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "f8a750d8b815bdaac8827e831555695e"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "e82784edce0ce523f1f5c2862873b4e7"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "02080af8a0f3553b58814b7ff2ffbcf4"
  },
  {
    "url": "javascript/closure.html",
    "revision": "657190d2f34647760b6d1d54d012bbf0"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "4a0990cd07721977b2f489dfd716d8dd"
  },
  {
    "url": "javascript/eslint.html",
    "revision": "01cf86978a552789db25ba2ba0a006eb"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "a0c0379f35c049852662d1b5b84cd0af"
  },
  {
    "url": "javascript/nestjs/nestjs-cqrs.html",
    "revision": "a6bf31a0643b860c06df31312388b9cb"
  },
  {
    "url": "javascript/nx.html",
    "revision": "a23cec80a3a23e05e56e3224d0c4e606"
  },
  {
    "url": "javascript/rxjs.html",
    "revision": "5785b0e3e3e8371731018b64df372593"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "3189e7ab31536bcc5630bc88373f4923"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "f8c2aa36cce826506a4dc1ee2fe16876"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "6bcd97ee0579169c04b29791f0422ba0"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "15cd994319c1997904209f8507e6c85f"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "8a089e0e3392e99229f022b0072c44c9"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "034a7039ca2774b0fe85e05ea8d74653"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "2237c6b04cf95269ba12c2eebc2e9c53"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "febc72809abeff029ed3dd53e70ffea7"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "d57dd8fb214cfc2a684af9acdd7187ec"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "d7da899a4649a50025083696ab554e25"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "8c92ca7e382ba22de05796c75f7fd81f"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "49cd577cc51a3dc3d4a93ad33e212536"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "766313b0a9c8dd25cb8ad35a9d8fc883"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "fdc050327600d0d2dd3966993ced8e23"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "69590b3610d60fba2f3b153a1282096b"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "a158ba5b9b2bbc40850dd8c10d96c348"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "067c65e4691d4bdd4ab21271519e0fc7"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "42c23a03f48923df3a06137fdacbdd03"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "d3c1cbcbc00da3cc75783cffae9558f4"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "b0542238509b383bb1643a41df9738d6"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "86d206c86f881caba9acf275ea1a6c0d"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "80d457d3934ecf639f70a5f44be5ab81"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "57882a0cdb72234dd80bd17b8384c12e"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "706dbf3b76fc83290253ed552b152db5"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "3b602f92fd2c7319d1c6a12403cbec03"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "0a7d4424bf15271324ce5df601d2a292"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "113c9da56539cc2e4be15f39a65f3ebd"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "c5447159030938a47738fc41fedda616"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "1471adc660686b920bb21b7da2e4f5ac"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "1d4c5f9d7518de7fb288a844f35f5937"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "ebcd9867f66649c8e0d4e04d58af90f5"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "d41d31d52f6973d92416ffe0c471f1e3"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "22a373fae5aae1ab75fc74a12a0392bd"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "c2552819462a332c01643b667d341231"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "f0c80dde102f34e67f15bd177eecac81"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "c633a8365587876a695e4e2668591248"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "c66928b0c3a44c0adefaed0e6f293651"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "6bd3a14fa9d3f0c90ed3818cb838c0c3"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "e305c04f17fa207b973cdfa1ed0d3697"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "95d6331caeace4b56a7d42cecc1ee5f4"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "76d4bcd5b467f8e9ecd26f0226c093d1"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "efafe93b377d0611cad52fe6cba528fa"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "27b4d7e44ab074795180bd575252c293"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "14bc9e78ead14d8e159372f80c564ec8"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "f78e8e0f0f7755632ec0968eb43639c3"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "e00b028ee30600a0fe09b110297f6f18"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "5742dd032775632d5c8e1530c63662a5"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "37faddf8d0d815660f1d65265a97cccc"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "c69235ce8d82c232865407990aa6d230"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "131dee3985f976a007bbb710af1506b3"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "9d08c2f712ec328897e90f597adb064f"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "22969fe0dafd9922530dd18b4b17c5c0"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "c4c5e3d23340df25495fd0634afd78b3"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "2fbf4f3e5569a8359863602d0a275355"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "87ce07317de4b1d0d1cef56ac051b49b"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "cbebb2a985c58c3606fc007458ab4e76"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "edb346808b2b5d2e3e809e95f1f457a1"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "9acacbcd5b5cfdc119b4b7993972d00a"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "63a502ef0062961a68812363b0f5f5c7"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "0a308db0af02f87445f90b906b0ff390"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "0e0ea501ad432af392fb6e28496279bb"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "ab5ff167c5b6862551399f1e1e856db8"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "f60044810760580938f0330b76046669"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "a5945fad2228216470145c4ec10f97eb"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "f0abd828ea2926824d7c9b427733f058"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "cc44b59f9a6c31052052937386da40ca"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "7c59d88edf988fc3275eee1aef841fd0"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "aa48ac098f172e2708525d242bfb56ef"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "84aa129a417d7da52d79c3baec0f7497"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "919dd94324822441bfab251b34b97006"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "5179e2139787f6a3f13b75934c52fa39"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "7746e6474433e16b87465e3f640ddbbc"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "1e7a4d432d86450f9a33c09ea924d86c"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "34faa2f4ab4153f858b3f1474ee03d47"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "03e28606f12dfb5fe2799991ad12212b"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "8457206333b0fb35edf3ed9e6265a182"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "dced2b761b15d0bbbbcd9aabbb31a71a"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "e003f7ceb509c7fc0e5a1c59f247686c"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "e0ab5f2b09af6b4718a76dad28661b06"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "ec37c6993982c2b75cabc68d404aa818"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "e12c73807172a23539c10dbd321bac9d"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "6c4e170987e8b459b1e3b1c76aefe154"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "fb871f9fa6b3a66a612e694484d48c66"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "f8f61d93ff83c5c69e9cbc7edcf7e05d"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "f389fe89530ec3ecef70893f9dbb13cc"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "a43cbae98a0fb61847d28a34240bdb23"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "cbd4401545edad17ef238f2d1d28955a"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "7a35739d64a018e9a51819e97b823a3f"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "be4dca121f230529a915603ced2f6045"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "442da15efee28fd4eb1d830d88a3df42"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "3a6bae602aad3e53c6c973c2c9b9b8bd"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "26d7c7627941b8f21dd125ca424393f7"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "dfeeae7eaaca15e1ad1836395d9cb5ce"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "eceb8409a2e01d2d7d25f9c3b5113cd2"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "ca282111aa22d02c13cf63c836f3cfd9"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "c7e4e7782da23bed62538e7900a6d4ce"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "1b8a036585147cb0698a5cbffe9dfbee"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "778307b25af7756d73c51fad02e4d8ba"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "cd785823344b1adb6e061bae75ba6d94"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "5e68f9387a4dd00a753c1e00610dfa51"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "6b55f9f9d8a6ec09f2b365253300747a"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "f35a6223777063b22161cd409c59cfa4"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "784b721b5ae0897e05cb500e3b705d90"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "64fc3a30e25c294ffc4147d703e83466"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "bc864b4c343639843b6617b6d85d434a"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "e1fb66eed351520418c1185878528287"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "8f616930d77f7e21d9c6b43fdef302d3"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "d1551b086e809e7a9064e6b17cda8c75"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "a78b6cc139abd6e22fd42da479dfb653"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "3c8bbd4fc3b09e5dfaee5c135713c3a2"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "4bce8da69def97a126d922c51d8e4505"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "4a970869a99b0b583f3b0e757bc3f354"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "c3b4be62a572ed0b8fe76afa4e3f5473"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "6e6ceddb2f755969afac8d87e7c6e0e2"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "bd895ce0639932e801cf7011508dd779"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "9e92ae95859813f69f30ffaccb69ea17"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "8a89cadba28d5103cfc23300b1cdaa97"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "2e9309c37c84077a7b2e91957ec39b15"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "88594579ccb5599a6d72aac74885e952"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "4f0fd82afdaa8bd78cbcc4d9e0611ec9"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "8625a3d5281942683b22a384e3245192"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "ae97b5632bca84aa26908ee1284885df"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "a7e0717c7a76a375f020cac8f5a81d3a"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "e9e24e8a3e70205c44d318ac0d247cd4"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "026174ed840ef4f515022bde20e9be9e"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "a136b18ee4b4e2e62ffb175d9c2474f5"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "12f6128faa48cccaf9a5d82be839e77c"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "e0496ed7472cfb50565021bd82717d2a"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "8167bf35133c5a972614275a5829b517"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "cc3082c9b5ba3dfdbc7dc7a1bcaa2963"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "62d46a3f08aaabc001a468ae6a749f2d"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "097c718824d93220fae67e81850f87f9"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "042b109d42d9684e9c5801887a342181"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "3373b7759977f051b98aa41a89e6a76a"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "309862d1d276a0d4636af8563653e800"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "2fe365b7e772edf133ffb0dc477b95ec"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "8cd7751ed134f3048c164426a0e9264a"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "d11c463ad16b98a273141158cfb07a0a"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "9a7e8a4e7d88b9947f2d8564bcb6edae"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "516d1221c82a5a90c01ad8b96a3aaa17"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "cdea236581d206c7b8bcc3f5af804398"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "54c425661b893e31aec2725398676d2d"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "90240d249cafb2c9a8ccbcd6baf8a12d"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "878bbebdb735dddd25d61ada41aa7a9d"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "51ffd74cc504d3fe48a77f0c2da8ea6b"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "ee0ab43bab00a7d1897c191022af4fe2"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "cb1ad1b05c8e1469dc7524d93d2cec3a"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "203353804d0bb0122dd11836c73a6b3b"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "39a7be60e3349b351e7c868931206e90"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "9542a5c1cf512ff11d4eb85f8be360bb"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "6babcad8ba776b8d3667609c6330af38"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "58a3349b83bd25540ec4a16aa0fe1761"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "1f33d4c5a9a9028851f08a00dfb9fbc8"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "6e14b7c9992d1f626c12ca692e03e66d"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "59620139bc3c4c753a85eb66e1e1ef62"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "782c8c75ee20bbdce7c74feffc214652"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "bb1f4025b459ce55ca0c504c10618313"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "af60985ee69e99ca533d9efc24bd4efa"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "29dcb5fe505dc5321f69620842d9c0b4"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "ddb007b96bc2e31759e9227e4cc11cc8"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "687edb38cee7d74ace66be22579b8126"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "cafcd4972b2b54637d8123222c84bc43"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "9691ea28cd02bf7171d9f3248575fb5b"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "8dc94279cd2e1c00845dea886db77ba4"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "f7e47c91d5729712602b343e4aa7f7ee"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "8ac9494f0524c7a95b1836b79e379cdd"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "4dfefff5efd2151ae6b74e19d89ed3d7"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "0e253bb2dc0065ad75e49738d57b311e"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "07cbebea3a48a87b56bf06a5feb71256"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "38d2779fa3e8ea54dcb3c7314648c3c2"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "f9a79897daf0b0d5922ad737f852d4c4"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "b69e5f7e58b0d2bd166030c3b26e2254"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "0f94ca6e7daa87bd191bff3dd76fd740"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "29bd01428177166cd8e782a40e6528e4"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "b6b3c0363937d7aa624387f1227ece04"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "450b699f024fef4e83beed1c04a15cc9"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "a9534d92ed145712bf681bbc976f8bea"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "9ef3f99530984a29c843a9656a285dc2"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "3620ad35be968da1dd1d538cf88815fa"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "477bf901a82b44f73e5acd4fcf22dbef"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "017b4236c7f829dc7813667075cc5559"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "dad10026f9cac34cae94b861ddc399a4"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "4f2b394f24fdc43683525f0935f9d4ca"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "94442b9cbe590479e4b7c77a183c4db4"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "9f55e74c2999adbd02eaaf47da42e789"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "07566b95d9a4db1f8c53094e53a4df31"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "8e26fcbcd263053a0712f689709877e1"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "a4df171e531e6702cd40169c5a3ed401"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "8c48232cc1b6da9dbb0ded050a0a43b9"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "a70f1910c1c57dc8db65563c8f61345e"
  },
  {
    "url": "kungfu/template.html",
    "revision": "971a3d8313df3e04adc894ea0f0fd184"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "0c4ce9fc132f987e69101a04c27490fc"
  },
  {
    "url": "node/env.html",
    "revision": "bd032b214b2564136b043f339f2dd2a0"
  },
  {
    "url": "node/index.html",
    "revision": "7422a5a025ffd93a572fe6814bf594f4"
  },
  {
    "url": "node/n.html",
    "revision": "7f11224554636d8d2244853c9216b7f5"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "c6cf42db90595dd8ebda342e7814d1f8"
  },
  {
    "url": "node/npm.html",
    "revision": "19cac3698ddb6f3f56d161562094b98b"
  },
  {
    "url": "node/sequelize.html",
    "revision": "cba0088f8b5d5deb896fca866df7375f"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "f87d2552a87e2264bf36d1dfb198bccb"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "c3589d241a3906ed175aa9b6c2464677"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "918dcf3cfb03aa04277c3d608e33b255"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "e73f5ff1508a8fd7fc33dab8dd2d035a"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "f9e2f0cb34a5d70cdb1d32e72c5a10bd"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "5f0b32ae633eaa29967c3a62887d65e1"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "4eca34afb5dc84f10527b58d557437fd"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "1a00bff02a4b305fa6c0535d6415a5cc"
  },
  {
    "url": "php/clean/di.html",
    "revision": "4b4d613042f2f66601e7b7ce63abf687"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "9fb6995e27247f53d448a88cbd5677c0"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "20021ff73def464a11e45275c4816db3"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "d15d8756fdd239b5d1bf164ebac08ddb"
  },
  {
    "url": "php/clean/index.html",
    "revision": "941fa78b3e098ba2fc12a13cd85fe242"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "8c3b0115847492e1ba4d925b0661900a"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "214216976697ed2b243b03cc9ee8a89a"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "244a5abbae1cbe74624acafe55d0ad1a"
  },
  {
    "url": "php/composer.html",
    "revision": "83c5876a1d0b84d8cc992ffa54f37a16"
  },
  {
    "url": "php/crunz.html",
    "revision": "1630b8a0c0b649dc2d6547df83e01dc4"
  },
  {
    "url": "php/laravel/best-practices.html",
    "revision": "6efe3de934f3cecf99208495ae1ca67d"
  },
  {
    "url": "php/laravel/laravel-notes.html",
    "revision": "d6b7592a1b525eed2df9a69dd8d3934e"
  },
  {
    "url": "php/laravel/patterns.html",
    "revision": "653ff9b715b3be9acd9d526b767a7798"
  },
  {
    "url": "php/magic.html",
    "revision": "6d1d5255786108219c3f123bed88ded6"
  },
  {
    "url": "php/notes.html",
    "revision": "47c44461715faa3d096e1a6190625b9f"
  },
  {
    "url": "php/oop.html",
    "revision": "4643580826c4afc1514b51bdaecacc15"
  },
  {
    "url": "php/php7.html",
    "revision": "e9938c87e24317185a1c3b28d4e7d224"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "badca39406f1980580cc364a0a44f656"
  },
  {
    "url": "php/reflection.html",
    "revision": "da38f027d8d5f4d8e70750a1a09453a1"
  },
  {
    "url": "php/tricks.html",
    "revision": "1b55d482bd52940ce935af5e0b357f4e"
  },
  {
    "url": "php/wordpress.html",
    "revision": "4d82a28421b158d8d52969007c2d1e91"
  },
  {
    "url": "quotes.html",
    "revision": "f1c9748fc792a06477484d577f7d3af5"
  },
  {
    "url": "react/mobx.html",
    "revision": "e5fe3712bde5617dc602ee415fb031d1"
  },
  {
    "url": "react/nextjs.html",
    "revision": "856540ed13184c7e0bca085e79449992"
  },
  {
    "url": "react/react-native.html",
    "revision": "4b30ccc45e19420f6ef8ed76935cb40e"
  },
  {
    "url": "react/react-vs-vue.html",
    "revision": "245888393eeb2b68ea40956b0bc94977"
  },
  {
    "url": "react/react.html",
    "revision": "b09188cdd9cf6a4d76c9f99456742a0e"
  },
  {
    "url": "react/vue_react.html",
    "revision": "f54d2a34907814196716d964c31ac74d"
  },
  {
    "url": "refactor/notes.html",
    "revision": "ace2b3e39e28681c01a8d638aa25c283"
  },
  {
    "url": "ruby/ruby-notes.html",
    "revision": "96db5a9d345aa091072c943de50bb3df"
  },
  {
    "url": "ruby/ruby-vs-node.html",
    "revision": "537b9a2b40f4d2ab89f6d238e711e2d3"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "8556f60d01ccaacc4d80ff0298fdbe7f"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "88f9046e62b5a5c1f3406cf3403c19fc"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "3e2b7d905fd9be6b609ebc1a072e2a1a"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "277afda84bfab0c12ac87bdadfa640c2"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "1be91d2429ba48d0a419e68ff81041d4"
  },
  {
    "url": "snippets/jest.html",
    "revision": "95cd46976705bda70f813c26f949b5cc"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "cba335dd3dff1baeaf06ee90e2b92bad"
  },
  {
    "url": "snippets/regex.html",
    "revision": "3e1d9e89d95c420a5a6d997c140de048"
  },
  {
    "url": "terms/12factors.html",
    "revision": "1548e875314ff8f523e6a03874ebb983"
  },
  {
    "url": "terms/architecture.html",
    "revision": "7de4d6c2673392daedc891fd1cfe730a"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "f1178481eee6d0486ca3bc7b79e7fb25"
  },
  {
    "url": "terms/di.html",
    "revision": "acaeb3f6b49e2b42c6c6bee7b229f678"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "d5306b8cf7a21f4bb63d62b73ac40a9a"
  },
  {
    "url": "terms/javascript.html",
    "revision": "0589e2dc1539467184ea373905c4349e"
  },
  {
    "url": "terms/patterns.html",
    "revision": "bd01d68d3b15655b9c0c319959c97a43"
  },
  {
    "url": "terms/principles.html",
    "revision": "28032e8d225dbf99fad05505bb228844"
  },
  {
    "url": "terms/rules.html",
    "revision": "86c03c43eb9731f49073f1e255d1246e"
  },
  {
    "url": "terms/testing.html",
    "revision": "66de5cd959571eecdecb49c014470029"
  },
  {
    "url": "tools/chrome.html",
    "revision": "4b2eaeeddbc2d2d1c47ebd021a5ddd24"
  },
  {
    "url": "tools/docker.html",
    "revision": "615a18b8577d1c50dcac540c07c797f8"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "e608cdec9e747eb2e334f54fadbf955e"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "f40efb2178359a363b5760310eec1fab"
  },
  {
    "url": "tools/graphql.html",
    "revision": "7ce69d58c705d3b7890df2f47f34b7f3"
  },
  {
    "url": "tools/k8s/k8s.html",
    "revision": "b3919db03bc5bf388eeb7063075ac1ce"
  },
  {
    "url": "tools/kafka-vs-jetstream.html",
    "revision": "a56e59e9347674f8db1e2ef44541a2b9"
  },
  {
    "url": "tools/kafka.html",
    "revision": "adce8107f3dc0470523fcb5310235a1c"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "75bd9ffdf033eae9f1989449e82213ce"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "fe27e8470b1beb2120da72c7d1c2f5f5"
  },
  {
    "url": "tools/redis.html",
    "revision": "7b2e1d8c3b39295a31b32bdd077d77d6"
  },
  {
    "url": "tools/rfid.html",
    "revision": "f2d1fa764480841cfc4f752430a3cae9"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "363a494a05c07fb9903a627b8a0456dc"
  },
  {
    "url": "tools/vscode.html",
    "revision": "a519747ff5c990972b6d8d970329abee"
  },
  {
    "url": "tools/webpack.html",
    "revision": "d62ff72dec58fefe69ebfc5feadb55a8"
  },
  {
    "url": "tricks/compare.html",
    "revision": "da0c0b9e53a95942535fe89080de75ea"
  },
  {
    "url": "tricks/git.html",
    "revision": "91cffd5abae2c15a45dc15640a43300f"
  },
  {
    "url": "tricks/linux.html",
    "revision": "ae729de86de6372008cd4ff88061adff"
  },
  {
    "url": "tricks/mac.html",
    "revision": "29f1d41c4ee15fa44b036206a7640e41"
  },
  {
    "url": "tricks/misc.html",
    "revision": "2e34ee610faa2011ee897beae4002d14"
  },
  {
    "url": "tricks/setup.html",
    "revision": "394043df93620726d4ba9e8768b67ebb"
  },
  {
    "url": "vue/communication.html",
    "revision": "d8525833016e30a6894238f056d8962f"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "3038bd60798c36c01bce7cb710214cdd"
  },
  {
    "url": "vue/events.html",
    "revision": "b215940a8b7dfdf83f575f3c41f32dea"
  },
  {
    "url": "vue/references.html",
    "revision": "c1d5301400735d4cc528172a0913affd"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "9b250546ba74d585c472374df761e3fa"
  },
  {
    "url": "vue/test.html",
    "revision": "3f97240e14b13aefa1980a6bc0936690"
  },
  {
    "url": "vue/tricks.html",
    "revision": "a2c584bada70123ff658467b65b3ab4b"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "ac517b9b86c30aceb7b09417b10a683c"
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
