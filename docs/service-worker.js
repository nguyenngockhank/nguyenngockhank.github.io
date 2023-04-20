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
    "revision": "7c0fcd05c9854655eeccd6288495383b"
  },
  {
    "url": "ai/AI-note.html",
    "revision": "3d01da7a584b5b3c8d845c2a0fc48922"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "45ebd333acb7fa6dc4f7a33ba7a0f80e"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "3eb2a9bff33dc270971e670195852cb4"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "1e8dbb23356b205a68b69548295ada93"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "171df5ddbf8a60a0998af9e436ac00d0"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "b609f01402761a89bc3ea6d84646a774"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "fc10541271d0f7828aaaeee6788d10a1"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "c5a6a67dc8d43b7bbee8802ad3fac4d0"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "c81f97f5ced44b75dccd3d8451c8fb0c"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "7031861077820b7ae9e9ef8c685edb45"
  },
  {
    "url": "algorithm/string.html",
    "revision": "542dee6564b93f9183a861ceabd72f8b"
  },
  {
    "url": "algorithm/sum100.html",
    "revision": "da00136588bda6eec46b877f5229023d"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "a3f36e330da759e45cf11cf3be84a3b8"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "9e84ce2a70637c0bc2c4df39d2de3680"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "a9d244142adaa927883cf370ce66a9df"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "1e1cf90ecf3383f9620d5f35ce6a8911"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "ccf10ae67d86a8622451097d1f2e775f"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "52a4debb39d45dfe4375d34ac3e89cc4"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "f19b2516703382e28a0fc3cdfbf813ff"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "ff144fac4483b39d81252739059da862"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "38f523e064dfd46d9dfc1c8d66d5ad55"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "0181aa8eaac59aa7776ab0595087ff4c"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "ac77acc71a689ef6216674a1c5db3673"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "f693896432776c8404a2ba3b8d92ecb6"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "040a25ac52f9ad129abbe0fee18abec3"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "75521131cf3708821ea9dfdcb16db10b"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "a9adf873d091fa548f1248657a8e1320"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "60dd362494e917a8aad2bb1e793454c9"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "b13270d50bf8fefc416e435cb165a94d"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "194e843040d22bbc7544d2e722c50417"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "72fb0bf584670dbb6ae323c4e062b58e"
  },
  {
    "url": "architect/authenication.html",
    "revision": "0216a426e87f82e25328ff0ee38597a7"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "93a23afd71076451f5f15dfa555bd984"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "f12022ac65e8963bd831bf11a78692aa"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "df8cc963a3efeeb982c42d66566a5786"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "b2838a8cfdd7ca70a252da3877a0c26c"
  },
  {
    "url": "architect/ebi.html",
    "revision": "261e076a38f14806784acf18aa7b2117"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "26344730e9a5fbfed83311f230657c67"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "f7fad66891f787a7cff97e2f73318842"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "b882ef012f65ea0354b80eba33800baf"
  },
  {
    "url": "architect/index.html",
    "revision": "f1a4f5cb272dcfc179221d7d0b0992db"
  },
  {
    "url": "architect/messaging.html",
    "revision": "05bf9ab3f2bbf5f3d663088f1c924b8b"
  },
  {
    "url": "architect/microservices.html",
    "revision": "7dba4af025888c8c8e0c8afebf96d452"
  },
  {
    "url": "architect/mutex.html",
    "revision": "3b2ffe78046e820c7eb3a58384e28885"
  },
  {
    "url": "architect/notes.html",
    "revision": "c2f8eeda22c1726294f47c8487d87283"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "4e3d97839df471ba50edc2f753c546e2"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "c1dd1fa033310881f517013228a4ddce"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "c3aec6a9da235efba35fd1db53958a45"
  },
  {
    "url": "architect/refs.html",
    "revision": "f4aa34e29f86a0214af35ed518aa50e1"
  },
  {
    "url": "architect/restful.html",
    "revision": "1129cc9caa0cb8b87292276fc18943b7"
  },
  {
    "url": "architect/soa.html",
    "revision": "8394e462cc0e955b46a07778db2456f5"
  },
  {
    "url": "architect/spa.html",
    "revision": "6a3844d91acbf982d973bc4af41e4698"
  },
  {
    "url": "architect/terms.html",
    "revision": "6f83a2ced597fd1e3d2d10a13c2e4c62"
  },
  {
    "url": "architect/webservice.html",
    "revision": "a248d85e466039d2526149b5feb9af59"
  },
  {
    "url": "assets/css/0.styles.cbbef154.css",
    "revision": "94f760ec637642233c09c4487fdf83e8"
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
    "url": "assets/js/10.568692be.js",
    "revision": "9fcc3440d47d8441c217ff54384d57cf"
  },
  {
    "url": "assets/js/100.a005d634.js",
    "revision": "f22afb0928095d3526cc383b3a98ba4b"
  },
  {
    "url": "assets/js/101.57f8f928.js",
    "revision": "e2f4c4a4569b218627303977653cf2e5"
  },
  {
    "url": "assets/js/102.ac7fda77.js",
    "revision": "75e8461a5cb4e51f4d3f120de48fd6e2"
  },
  {
    "url": "assets/js/103.efb2c3f8.js",
    "revision": "d0a4ead123f1e7cc00452611a2076d5e"
  },
  {
    "url": "assets/js/104.1ad0f6cf.js",
    "revision": "52cd9aa83cd0a461de0131e7456f0629"
  },
  {
    "url": "assets/js/105.006e517a.js",
    "revision": "9cce142a8984261fb99eee151252a5ae"
  },
  {
    "url": "assets/js/106.c87a2c4c.js",
    "revision": "88564ce1a017a7e95e7fa9871bcb2d07"
  },
  {
    "url": "assets/js/107.ac5714cb.js",
    "revision": "a8e1205088ed382cea4fee8a24a3477a"
  },
  {
    "url": "assets/js/108.8bfa7e33.js",
    "revision": "9387cc54aa59ccdaa60a0662f1dc3f82"
  },
  {
    "url": "assets/js/109.3be9180a.js",
    "revision": "03547772631c74232e424f75a0ef1035"
  },
  {
    "url": "assets/js/11.8d6fd233.js",
    "revision": "6d0fb2473f9347decc2617b1f8e29611"
  },
  {
    "url": "assets/js/110.c4ff7040.js",
    "revision": "731f247c6e75961af2ccd3284d363c1c"
  },
  {
    "url": "assets/js/111.3aa0cd34.js",
    "revision": "56ed323b0eddf3a49a7573e0188130f5"
  },
  {
    "url": "assets/js/112.6b7d646d.js",
    "revision": "d17ec43700a3fc9edb9922fab3eed386"
  },
  {
    "url": "assets/js/113.8c653561.js",
    "revision": "7df152c76c75613ff9a7cc28b145372a"
  },
  {
    "url": "assets/js/114.c8be4241.js",
    "revision": "266e0365c6c25b59339000fb9f419bad"
  },
  {
    "url": "assets/js/115.cf27225d.js",
    "revision": "8a5cdf3bd129b7f93b5851539c718749"
  },
  {
    "url": "assets/js/116.bcca428f.js",
    "revision": "3c9b9253301065cea879f030bd673a7b"
  },
  {
    "url": "assets/js/117.6095206d.js",
    "revision": "80f01d2e82c621b15aa58b04c38b1f64"
  },
  {
    "url": "assets/js/118.eaf85d07.js",
    "revision": "4177b5fce49e62e5fa5fdc576ccb2b97"
  },
  {
    "url": "assets/js/119.ccf6b42f.js",
    "revision": "2b983b4491fcf5b6acd4a7e45ea50382"
  },
  {
    "url": "assets/js/12.c9e5d1e9.js",
    "revision": "90cae46901cf62e30ce340c0677e2a30"
  },
  {
    "url": "assets/js/120.3bbe4122.js",
    "revision": "1581f752bd4de7de6895b6c5f32a8ac5"
  },
  {
    "url": "assets/js/121.9daa2437.js",
    "revision": "4d6e36ca937b20219dfd42faa3dc703e"
  },
  {
    "url": "assets/js/122.52ef1dbf.js",
    "revision": "62dad13b26292afa9e95b267e843c865"
  },
  {
    "url": "assets/js/123.cb9334f8.js",
    "revision": "d05b899cb784a7fcd6cf4d5521015403"
  },
  {
    "url": "assets/js/124.56f3bf1e.js",
    "revision": "a31499261bd8e46b9c777e55dd19d6ba"
  },
  {
    "url": "assets/js/125.f465b01a.js",
    "revision": "67d5170410fd56b6b479e9caa99960f3"
  },
  {
    "url": "assets/js/126.830caf2a.js",
    "revision": "3cd3a82d5a99f89e192c798b9e582e52"
  },
  {
    "url": "assets/js/127.2f52dc70.js",
    "revision": "1455caad22629b7ba384ae01337f5e45"
  },
  {
    "url": "assets/js/128.19830a13.js",
    "revision": "cbebcfb99136bcc929874203838b4d46"
  },
  {
    "url": "assets/js/129.fa07a35c.js",
    "revision": "ee477c6ba43a251c6edd0ff29838c676"
  },
  {
    "url": "assets/js/13.21982280.js",
    "revision": "40af961b03fd5d30cea428ae64c8821f"
  },
  {
    "url": "assets/js/130.26b57583.js",
    "revision": "340bc230b6a750afd84db4b3db28db94"
  },
  {
    "url": "assets/js/131.12244a03.js",
    "revision": "afd873c61ae2031e22cd7a6a29325595"
  },
  {
    "url": "assets/js/132.562b007e.js",
    "revision": "403cbcd575f1a3a10833a2e48054c8f4"
  },
  {
    "url": "assets/js/133.15cb7ce3.js",
    "revision": "d3ba0bd5889a4f6346888c7156650f88"
  },
  {
    "url": "assets/js/134.aa6c8b3f.js",
    "revision": "6a1bb8fdc2c1d1b540a34ef0c682a8fb"
  },
  {
    "url": "assets/js/135.5d67b919.js",
    "revision": "961b01170b477747f820b493d8aca621"
  },
  {
    "url": "assets/js/136.957257f7.js",
    "revision": "3e38e1d7b826fe43b7ac561d1536ff68"
  },
  {
    "url": "assets/js/137.d82030e3.js",
    "revision": "1de15096fd1d95849858ffcf9ece8d8c"
  },
  {
    "url": "assets/js/138.9e4be863.js",
    "revision": "a07aba83212a1eb54c4be9ca3ff45e42"
  },
  {
    "url": "assets/js/139.84280b80.js",
    "revision": "2ff70700fb8757aeb57dba08d05cb613"
  },
  {
    "url": "assets/js/14.95810498.js",
    "revision": "c76d99deeadf541a56325809bbb5954e"
  },
  {
    "url": "assets/js/140.9f0dbda6.js",
    "revision": "884f449969cd1f4c990248cd08b862ce"
  },
  {
    "url": "assets/js/141.418a9d54.js",
    "revision": "9fd1ff93d04878ac15c6b9b979bba91b"
  },
  {
    "url": "assets/js/142.9c9cb392.js",
    "revision": "6efc218704353b35eb24b4cd21781ba2"
  },
  {
    "url": "assets/js/143.60df14fc.js",
    "revision": "7bcc7519d1dcfba4519776e3778c7a7b"
  },
  {
    "url": "assets/js/144.c405ac13.js",
    "revision": "3bc2b60a42acac3a89366572ef1ebad0"
  },
  {
    "url": "assets/js/145.5b083964.js",
    "revision": "399f15a432cac860fe78e0429d3edbf3"
  },
  {
    "url": "assets/js/146.9a66f98a.js",
    "revision": "c51c131d90a9fd7111ac84f5ebfce642"
  },
  {
    "url": "assets/js/147.10927a8f.js",
    "revision": "efa7baf64aa9d8aa061371c95ca9ae43"
  },
  {
    "url": "assets/js/148.f974a10c.js",
    "revision": "3bb26a7ba54723c22204fb1b7d051820"
  },
  {
    "url": "assets/js/149.24e08a41.js",
    "revision": "0b42172f84657de0e1e61d2a1e7e714a"
  },
  {
    "url": "assets/js/15.cb2e30d6.js",
    "revision": "24212197b88740eca187c6f42db0f20d"
  },
  {
    "url": "assets/js/150.33984e8c.js",
    "revision": "f930a57bee84c2415f30ada135a6c453"
  },
  {
    "url": "assets/js/151.f9804911.js",
    "revision": "2202503631a007a2f3442d3ae0d26d8a"
  },
  {
    "url": "assets/js/152.4c93f191.js",
    "revision": "d373e2d54b968dd1907ddd020e967e89"
  },
  {
    "url": "assets/js/153.11617f23.js",
    "revision": "0519d65fb5c9883f27fad49dc09d0265"
  },
  {
    "url": "assets/js/154.cfc6d6ae.js",
    "revision": "c40016bad80cee2da5bca97a44a0f0dc"
  },
  {
    "url": "assets/js/155.36fa97ba.js",
    "revision": "f12775c6111aac03ec5cfd67726496de"
  },
  {
    "url": "assets/js/156.7540ad54.js",
    "revision": "c6a92282108a5ce306b269450d359cb7"
  },
  {
    "url": "assets/js/157.df881137.js",
    "revision": "26d250f0dcf5b1c05db17a1e338505b9"
  },
  {
    "url": "assets/js/158.d50cab25.js",
    "revision": "c12f2b780d494093e8c35b49996d6ab7"
  },
  {
    "url": "assets/js/159.d15da592.js",
    "revision": "9524f441bbb9378adb12c7d4c5d3bb12"
  },
  {
    "url": "assets/js/16.7475eed5.js",
    "revision": "94179447c634008cf35c3c4e7d0bc0ec"
  },
  {
    "url": "assets/js/160.f0f025bc.js",
    "revision": "6123eaf6f6071f326802e4c36b3728a0"
  },
  {
    "url": "assets/js/161.bee5c118.js",
    "revision": "68632effaebb079e2758d91d2281303e"
  },
  {
    "url": "assets/js/162.138324fd.js",
    "revision": "aa80b56caf06e0ed055e8b20f022932c"
  },
  {
    "url": "assets/js/163.28b4f1cd.js",
    "revision": "6b09471696e3a8871059298a402e4cc0"
  },
  {
    "url": "assets/js/164.86981dda.js",
    "revision": "79b3e377e3c87757e11b0b938c1c7a57"
  },
  {
    "url": "assets/js/165.51baf251.js",
    "revision": "196e50d16ccaad5279293b3dad8368d9"
  },
  {
    "url": "assets/js/166.9d033da8.js",
    "revision": "a43bd90635ff8f73f6ffaa206d037fff"
  },
  {
    "url": "assets/js/167.0775be1b.js",
    "revision": "5762e13027d0393f3abc600d10c357c8"
  },
  {
    "url": "assets/js/168.b182a461.js",
    "revision": "24f8ecf6c47b6641b7dbdcce0d85bb01"
  },
  {
    "url": "assets/js/169.3ce4d864.js",
    "revision": "e75cf5792c8a9901bdd440ba02b3158c"
  },
  {
    "url": "assets/js/17.a383ecc1.js",
    "revision": "dae1c4ce792b811f63e62310973344bf"
  },
  {
    "url": "assets/js/170.33f34694.js",
    "revision": "d035251face7bc8cfc6d9a1986796ee4"
  },
  {
    "url": "assets/js/171.b4c2cced.js",
    "revision": "3e03c5bfa19655f95e5d1c9d62eccff3"
  },
  {
    "url": "assets/js/172.81a73f6f.js",
    "revision": "e62b55b3d44b53728f6aad5e6e0e8741"
  },
  {
    "url": "assets/js/173.81aa6741.js",
    "revision": "9af26f8672a5fec80756fc85e554596e"
  },
  {
    "url": "assets/js/174.007eb227.js",
    "revision": "7cff33f601955d6b96662f4e99436b1f"
  },
  {
    "url": "assets/js/175.869cea52.js",
    "revision": "d18534e0d966a59652b1ad358bfe91f9"
  },
  {
    "url": "assets/js/176.9b3e815f.js",
    "revision": "7c687c9d31315fcc38773ab3a77ec88e"
  },
  {
    "url": "assets/js/177.3f004f0d.js",
    "revision": "f0bf99d85ad32960fcdc27176f3a9183"
  },
  {
    "url": "assets/js/178.911737d1.js",
    "revision": "917260c913de3e9743dd1d6dbee3cb66"
  },
  {
    "url": "assets/js/179.958b668c.js",
    "revision": "5f2fb22d838c1a9644302b3d08e2f0ec"
  },
  {
    "url": "assets/js/18.d16d7b7e.js",
    "revision": "b3c1827b9a2fad2d3d6c67ba31751c89"
  },
  {
    "url": "assets/js/180.e785e744.js",
    "revision": "17153e60708e5c0816a9c83f9295f51b"
  },
  {
    "url": "assets/js/181.0ed6c048.js",
    "revision": "8681d0c8785d0dd411c1ccc3e2b0a318"
  },
  {
    "url": "assets/js/182.b8ae15b3.js",
    "revision": "2088b7377ea484b2c85149a9bd8d5691"
  },
  {
    "url": "assets/js/183.cff43914.js",
    "revision": "5cdcd9e8382b4141806e9b5f5f9ffa29"
  },
  {
    "url": "assets/js/184.3948778d.js",
    "revision": "4af4a134a433e79b1f00b64d8218dbfd"
  },
  {
    "url": "assets/js/185.d10b4c98.js",
    "revision": "85a7083b133ffb3f9c0ebc88befa4eda"
  },
  {
    "url": "assets/js/186.70655748.js",
    "revision": "e9da715ebd8948ddd390ea4102772252"
  },
  {
    "url": "assets/js/187.5dc795ea.js",
    "revision": "8a52b1db4397317a5f53c5354a4aadce"
  },
  {
    "url": "assets/js/188.f724055d.js",
    "revision": "8041d0b92cb81297e4cddfcef43a3fd1"
  },
  {
    "url": "assets/js/189.17912758.js",
    "revision": "166c431cb7ac7f1a9eb893daa480d73d"
  },
  {
    "url": "assets/js/19.1e2a90e1.js",
    "revision": "59e6e77bc2e54e39a72db31833619c30"
  },
  {
    "url": "assets/js/190.aac3e070.js",
    "revision": "41b4c8f079e30638059a376aec9317c7"
  },
  {
    "url": "assets/js/191.e046e00c.js",
    "revision": "57e9b0608e0f6653f3c2366a87025a8b"
  },
  {
    "url": "assets/js/192.5739a422.js",
    "revision": "8839030338680ffc8f32ba037d1b71aa"
  },
  {
    "url": "assets/js/193.96a65073.js",
    "revision": "4489a1e9c9c04b8d7bae4dfa7afb4941"
  },
  {
    "url": "assets/js/194.611930b3.js",
    "revision": "a0b67b7fb0658f8553b6d1ccb272c926"
  },
  {
    "url": "assets/js/195.9d64b1bf.js",
    "revision": "a02e9cc2e034503e8c4e8b21d1769ab9"
  },
  {
    "url": "assets/js/196.a5c7afbb.js",
    "revision": "ab04eac36210570da2ad7db0b6b72f9a"
  },
  {
    "url": "assets/js/197.ae1fff40.js",
    "revision": "07a7e7d3c5edbaad317e26c5f8ccf326"
  },
  {
    "url": "assets/js/198.6740072c.js",
    "revision": "ef18d1abd8ebf3701f2b41ce2a95d21f"
  },
  {
    "url": "assets/js/199.26aeae0e.js",
    "revision": "12150e1c92ed88108f6e9347a03e309e"
  },
  {
    "url": "assets/js/2.6d883d90.js",
    "revision": "c057457803cfc1187404ecab0ac87a54"
  },
  {
    "url": "assets/js/20.281d8d0e.js",
    "revision": "06910da521a31c75634fa35fe84e910f"
  },
  {
    "url": "assets/js/200.86792be5.js",
    "revision": "d8cfd6e83d5ee75773d1632e86d10542"
  },
  {
    "url": "assets/js/201.6156db70.js",
    "revision": "782bdfa3ef1a89073f053f6fa05b80bb"
  },
  {
    "url": "assets/js/202.05dcf927.js",
    "revision": "382406340dfde6c0bfb0a25567799b74"
  },
  {
    "url": "assets/js/203.d0cc4d83.js",
    "revision": "13f0e7ff432625969c2b0e39d8a56980"
  },
  {
    "url": "assets/js/204.6707032e.js",
    "revision": "debd8e8b842077327e8bab4c004deddd"
  },
  {
    "url": "assets/js/205.6aee9abc.js",
    "revision": "1b44932d835434f81f213e29744f9486"
  },
  {
    "url": "assets/js/206.298bf08c.js",
    "revision": "d869088075569c1ed8d87ebc0cb2e0ce"
  },
  {
    "url": "assets/js/207.10aea177.js",
    "revision": "e8395340018f35869357919c582a9d45"
  },
  {
    "url": "assets/js/208.3d46838d.js",
    "revision": "341144dc5d26dac24bdd5fceb6aebc90"
  },
  {
    "url": "assets/js/209.1a267a6e.js",
    "revision": "5b81babfd543e7f87bfabcf66d5b3728"
  },
  {
    "url": "assets/js/21.d5fd1488.js",
    "revision": "2f75144cd2a7e0c0cf852e6aa9a33e5d"
  },
  {
    "url": "assets/js/210.7ac2add8.js",
    "revision": "f53940180ffa409c3908b2f019a3a31d"
  },
  {
    "url": "assets/js/211.9392cd9d.js",
    "revision": "cecfdc743a9ea8f29dab946b2e3c1338"
  },
  {
    "url": "assets/js/212.fe92d63f.js",
    "revision": "e5912f44b011df0367799539ddc73423"
  },
  {
    "url": "assets/js/213.d4135215.js",
    "revision": "c2dbd14bfbbaad875cc93a0ea33cbd99"
  },
  {
    "url": "assets/js/214.c1591b23.js",
    "revision": "26dbbf5db04b16c8c124729f71345bf5"
  },
  {
    "url": "assets/js/215.94c600eb.js",
    "revision": "f546c55166772f56cec8c1b3e0d95742"
  },
  {
    "url": "assets/js/216.43543475.js",
    "revision": "ba65980881b3187f8216ed1bd7d2f318"
  },
  {
    "url": "assets/js/217.b6b79a7b.js",
    "revision": "192063135811c3728fdff9e5f5f393c1"
  },
  {
    "url": "assets/js/218.27287c7b.js",
    "revision": "c627f4ae4bd5efd81b8503c562df6160"
  },
  {
    "url": "assets/js/219.4a7baa80.js",
    "revision": "f3f3517d6ccb888557e0ad8111e573b0"
  },
  {
    "url": "assets/js/22.b06c78ae.js",
    "revision": "859f3d5065ce7f3d6090b6387378c1e7"
  },
  {
    "url": "assets/js/220.99c0b46d.js",
    "revision": "3ed869e9a81cb6fecd855de934c8be98"
  },
  {
    "url": "assets/js/221.dcfbe8ef.js",
    "revision": "e9ef2309859bc8ca952c722eca6285cf"
  },
  {
    "url": "assets/js/222.4bfaeefb.js",
    "revision": "16f696aee23adbfe24fb2596af00960d"
  },
  {
    "url": "assets/js/223.2f7fcfff.js",
    "revision": "6239832ed962e3272f8a15eb10cfd72a"
  },
  {
    "url": "assets/js/224.1ef7405f.js",
    "revision": "ccea72418935cf34c75a5cc8765bd9b0"
  },
  {
    "url": "assets/js/225.749c9f2b.js",
    "revision": "605e18276dffda164abe18ed2b71aa53"
  },
  {
    "url": "assets/js/226.1c1c7e75.js",
    "revision": "c1957fefe6148088729b0aaae6dcc10e"
  },
  {
    "url": "assets/js/227.95fe6e57.js",
    "revision": "90712d149b0db17f6b44e1c9f3b85b46"
  },
  {
    "url": "assets/js/228.aea3bf6b.js",
    "revision": "33cf50399fecbe29f9a232f4b753fd3c"
  },
  {
    "url": "assets/js/229.0437b722.js",
    "revision": "1ebdf8c1e47a3e4bf4efe5bdaa3fb994"
  },
  {
    "url": "assets/js/23.c757d960.js",
    "revision": "4314ca7ae223255223b9603b62e241b8"
  },
  {
    "url": "assets/js/230.3b7ad85b.js",
    "revision": "17afe7808120ba123e122b583efdb567"
  },
  {
    "url": "assets/js/231.d7a6b3c6.js",
    "revision": "6259e219c3f8958f524728fb42f5bc01"
  },
  {
    "url": "assets/js/232.0638831e.js",
    "revision": "de5acad4c4d122086737d4240c9c133e"
  },
  {
    "url": "assets/js/233.c5ac8cd7.js",
    "revision": "addfc9f5b349b31fbd8d8e4dc871f7cb"
  },
  {
    "url": "assets/js/234.3c66cd08.js",
    "revision": "56f30a8e5c55178c24cf1fc0ddc15c12"
  },
  {
    "url": "assets/js/235.f9fdfb09.js",
    "revision": "633e0c4b538074cc052aa481a301ab14"
  },
  {
    "url": "assets/js/236.8bf9f453.js",
    "revision": "992535ea5f3093c4d805b2b7701bd016"
  },
  {
    "url": "assets/js/237.f0eed574.js",
    "revision": "58747a88a96635436f7c54d96305bf70"
  },
  {
    "url": "assets/js/238.96e2801b.js",
    "revision": "9f4f63d973c830c8afd9d56cc38adff4"
  },
  {
    "url": "assets/js/239.1c71837d.js",
    "revision": "f355d63964a7d3817e4238221b1c7d63"
  },
  {
    "url": "assets/js/24.a86fbdea.js",
    "revision": "f6b9367f39b2a8461858ef2a5da2ee19"
  },
  {
    "url": "assets/js/240.cd1fa5ad.js",
    "revision": "1abf1e0776c3949e9b9a48c19070fb23"
  },
  {
    "url": "assets/js/241.9464eb85.js",
    "revision": "26696bf516a90767e9125cd341c7c512"
  },
  {
    "url": "assets/js/242.3c1dbe9e.js",
    "revision": "3cf72348e2fa6623fa667f39ac294c0d"
  },
  {
    "url": "assets/js/243.e1f7a1ea.js",
    "revision": "4554126b084f082da8befe81821fcb24"
  },
  {
    "url": "assets/js/244.3b6e1cb2.js",
    "revision": "1d4e103195e69e7e914999056904fc97"
  },
  {
    "url": "assets/js/245.164ba5a5.js",
    "revision": "f83f1df9e118f9b913485078ca33b3de"
  },
  {
    "url": "assets/js/246.fb213345.js",
    "revision": "33192cdccf84743054820dbb7dbd3423"
  },
  {
    "url": "assets/js/247.7d12ed5e.js",
    "revision": "7fc026eab3eb090030c4ba9338eb9313"
  },
  {
    "url": "assets/js/248.31289f8d.js",
    "revision": "0638c1125b2cc0bf4ceab1c924d115c8"
  },
  {
    "url": "assets/js/249.f5c7991f.js",
    "revision": "6d2b96b500b55fd80d9a859c81caeb25"
  },
  {
    "url": "assets/js/25.d28b30d9.js",
    "revision": "f90969f5e740149f1c9cd5608ee5b026"
  },
  {
    "url": "assets/js/250.9fced7b4.js",
    "revision": "96619bfb7ca7a563f585646239147241"
  },
  {
    "url": "assets/js/251.db3f18aa.js",
    "revision": "6682fd980cb81f87cecbf33b62c87902"
  },
  {
    "url": "assets/js/252.dda7eb9f.js",
    "revision": "ec5a5e25932a2651750ffed6f0225729"
  },
  {
    "url": "assets/js/253.cb8cf2eb.js",
    "revision": "4ad9f87273450f9b28075eec6e1a52c7"
  },
  {
    "url": "assets/js/254.533d6009.js",
    "revision": "53fa7bc3611263820d07bdb38f3c6fd9"
  },
  {
    "url": "assets/js/255.bf930096.js",
    "revision": "8836ab282472503f81e787072a43a4bf"
  },
  {
    "url": "assets/js/256.0b8d4147.js",
    "revision": "ac4a837c85e6a3fa44080a2f6a232e2f"
  },
  {
    "url": "assets/js/257.4ca2a12d.js",
    "revision": "ced072daecd28486fe57f0385aeb5a9d"
  },
  {
    "url": "assets/js/258.289c7df2.js",
    "revision": "1d736ccfe1736dec24564446d4b17726"
  },
  {
    "url": "assets/js/259.008ca007.js",
    "revision": "bc3b8cd22ba439aced66dd47197cb878"
  },
  {
    "url": "assets/js/26.693e36f0.js",
    "revision": "d8a159adf0526c9fa36dd1bf918e89b1"
  },
  {
    "url": "assets/js/260.6f74661e.js",
    "revision": "b6597642a3d295c27cc56c6414158244"
  },
  {
    "url": "assets/js/261.7538539c.js",
    "revision": "b5529ae826c534835189f033c72e16ea"
  },
  {
    "url": "assets/js/262.18c8593a.js",
    "revision": "d8c85761a8379753569b09d8e3cfbd6e"
  },
  {
    "url": "assets/js/263.11e0b93f.js",
    "revision": "b15ab4f3c501f86b4e1ad680bb26cbb0"
  },
  {
    "url": "assets/js/264.728b027e.js",
    "revision": "ae937d663bd3a5e670d10e95c9bc62a2"
  },
  {
    "url": "assets/js/265.c2de2592.js",
    "revision": "b0a16edf0bdedfaa4145bd264b5090b7"
  },
  {
    "url": "assets/js/266.6a41ed9e.js",
    "revision": "c881bf2f59365f60e20bcdef6e7bc5c9"
  },
  {
    "url": "assets/js/267.25affc7d.js",
    "revision": "2c822151e8686c427047d95454226271"
  },
  {
    "url": "assets/js/268.dd0ff72f.js",
    "revision": "3141fd039d8251cee61cb52562e1c090"
  },
  {
    "url": "assets/js/269.2b949ff7.js",
    "revision": "85c8e115a420e91b6a0f45929254dd48"
  },
  {
    "url": "assets/js/27.dab30e61.js",
    "revision": "2366286afae379550f13c4ae99a1c0a7"
  },
  {
    "url": "assets/js/270.3085d5cc.js",
    "revision": "d53201371523af9755e838102c16d854"
  },
  {
    "url": "assets/js/271.4e327142.js",
    "revision": "fe57808a812ed71e9c49de3770c47fcc"
  },
  {
    "url": "assets/js/272.0c515b4c.js",
    "revision": "2ba04a46932658eafaa6f202ac0ea99f"
  },
  {
    "url": "assets/js/273.6c6a5d13.js",
    "revision": "9b7a1e0b87f848b87c43c674bb606506"
  },
  {
    "url": "assets/js/274.d6eb98ae.js",
    "revision": "975f61416930140b86c4035767003aa0"
  },
  {
    "url": "assets/js/275.b838bf24.js",
    "revision": "20b4f226b4d642adb67ee2e773a88675"
  },
  {
    "url": "assets/js/276.ed645b15.js",
    "revision": "bc658618f2922a6d022f63a4b24c7926"
  },
  {
    "url": "assets/js/277.ecd87c08.js",
    "revision": "44ecad79cce0ad7fe83cec5e95872c6e"
  },
  {
    "url": "assets/js/278.de9f7375.js",
    "revision": "889cd86126612564586c4abdeef0fdfd"
  },
  {
    "url": "assets/js/279.2330593c.js",
    "revision": "e3da185dfb6df7cff1689ca757e2a743"
  },
  {
    "url": "assets/js/28.7f62d23e.js",
    "revision": "bfdebd50c96f2641dbb0a6edd332c5d8"
  },
  {
    "url": "assets/js/280.d3e25dc1.js",
    "revision": "d24e0a8898863da463e044e0b68c50ac"
  },
  {
    "url": "assets/js/281.31045c50.js",
    "revision": "9b138786293035d259e2a1a05d7d1ffd"
  },
  {
    "url": "assets/js/282.5c1f218c.js",
    "revision": "f5ab34d54a4c332fb2b3fe53a7b7a6e1"
  },
  {
    "url": "assets/js/283.ce777a61.js",
    "revision": "6d5086691097b356c0ad243ab0ab9e98"
  },
  {
    "url": "assets/js/284.742622cb.js",
    "revision": "347caa0ff92ce532b3455924ab44325e"
  },
  {
    "url": "assets/js/285.fa1b88b8.js",
    "revision": "d0d40ea4e3b4484ad0cb2822f46aa820"
  },
  {
    "url": "assets/js/286.f70dd5fc.js",
    "revision": "63e74f80c1442a6503f516da63f7746c"
  },
  {
    "url": "assets/js/287.671a3a5d.js",
    "revision": "aac8606e3c5cc89c6a5a53c3c569102c"
  },
  {
    "url": "assets/js/288.f6634626.js",
    "revision": "3611d2eed55abca2e35202c934681709"
  },
  {
    "url": "assets/js/289.863c9a0e.js",
    "revision": "5503e31f7bcf940aae70df4083f94762"
  },
  {
    "url": "assets/js/29.b7e16af5.js",
    "revision": "aad71184043a1618e873393e55addc99"
  },
  {
    "url": "assets/js/290.5cdcf7f2.js",
    "revision": "0a0855d5c9b818a85663f9dcdca239e1"
  },
  {
    "url": "assets/js/291.075c5e72.js",
    "revision": "be22489b92d08ec1358563161f31c19b"
  },
  {
    "url": "assets/js/292.92a2c73b.js",
    "revision": "035b247b21e332d0be06234dace667dd"
  },
  {
    "url": "assets/js/293.90bb81d8.js",
    "revision": "7ebe1fe468410cba0c26aeb510b25cc2"
  },
  {
    "url": "assets/js/294.a9a3632f.js",
    "revision": "5dc78c7da29ac147eb086846af36cbf2"
  },
  {
    "url": "assets/js/295.dc14e512.js",
    "revision": "5bde8c5f942e39b403d1bb83f8214d01"
  },
  {
    "url": "assets/js/296.74b78223.js",
    "revision": "9684513dc2a04f6d1a130b40f9567ae7"
  },
  {
    "url": "assets/js/297.306ff138.js",
    "revision": "d9f8b248340dd804f44d8f7e08d6d1c7"
  },
  {
    "url": "assets/js/298.2412af3a.js",
    "revision": "4870aceb3b62e5ad1fc91d490fc355b8"
  },
  {
    "url": "assets/js/299.7b76cd66.js",
    "revision": "018512915f6cf81eec1e01447fe283b2"
  },
  {
    "url": "assets/js/3.32c0ac26.js",
    "revision": "c12c9ed14b78c94b0a6777cbfa943dca"
  },
  {
    "url": "assets/js/30.72ff1647.js",
    "revision": "f2c0018baef2bae048e5b416507e5d85"
  },
  {
    "url": "assets/js/300.eb427bde.js",
    "revision": "ef4319157d74f143356256fe4579e839"
  },
  {
    "url": "assets/js/301.e0eb2b52.js",
    "revision": "79b6f99f1b10f2fe035acea1a980d342"
  },
  {
    "url": "assets/js/302.17def76f.js",
    "revision": "93e9f4ed14fb7a8d18f40cacc21f1bcf"
  },
  {
    "url": "assets/js/303.7f141011.js",
    "revision": "45408fd0a15b5ce3e9cac6f93bfd6e4e"
  },
  {
    "url": "assets/js/304.67d990e1.js",
    "revision": "1cff38a2afa344a8373582bf248107ed"
  },
  {
    "url": "assets/js/305.4724c519.js",
    "revision": "f02ed6a4f6c243249e556398cd9454d1"
  },
  {
    "url": "assets/js/306.e76cf464.js",
    "revision": "5d7c27a02dc66e85325cb257c4bc64d0"
  },
  {
    "url": "assets/js/307.3949cc29.js",
    "revision": "49af2f8318f8b4fc17c012d50e223227"
  },
  {
    "url": "assets/js/308.a276e387.js",
    "revision": "bc32d35661978af3b910609e4b78fe70"
  },
  {
    "url": "assets/js/309.0a3e79fc.js",
    "revision": "6e2fcdd8c114ea857f3b94cf21cb8eaf"
  },
  {
    "url": "assets/js/31.40aefb1d.js",
    "revision": "06023e52ebba4e046aa7f069ff883dea"
  },
  {
    "url": "assets/js/310.96e9ce98.js",
    "revision": "475888e2fdc0fecf75fbaf472056b607"
  },
  {
    "url": "assets/js/311.f0917d12.js",
    "revision": "05b6d8443fd630d5e42c71616aa5cd07"
  },
  {
    "url": "assets/js/312.de558ec6.js",
    "revision": "f499be4998b26e16e70423ceedc5a1a7"
  },
  {
    "url": "assets/js/313.2b34076a.js",
    "revision": "45983d0e4deea4ac958d35074176c932"
  },
  {
    "url": "assets/js/314.3f9503a3.js",
    "revision": "303800c6869dc4b35fdd43f98e4cd65d"
  },
  {
    "url": "assets/js/315.a9e3fc6a.js",
    "revision": "4069c926b3d863f49446aa71ac6e95f1"
  },
  {
    "url": "assets/js/316.168c4705.js",
    "revision": "5898b036f89fe309d2d01e24e5e970fe"
  },
  {
    "url": "assets/js/317.cfa72dee.js",
    "revision": "6bf3a67e5ea827367ecc600a0923bc13"
  },
  {
    "url": "assets/js/318.5e625b57.js",
    "revision": "d8e1b11f00332b9c40a8e2338b16c3ee"
  },
  {
    "url": "assets/js/319.19ab7206.js",
    "revision": "5cbc1b0717de383541a8c1bd01d00473"
  },
  {
    "url": "assets/js/32.ab00ab3b.js",
    "revision": "4aa69687030f18dc9e3c05f62f265049"
  },
  {
    "url": "assets/js/320.7a3b728a.js",
    "revision": "0e809fd1fc27ee4392e036c10b1502a9"
  },
  {
    "url": "assets/js/321.46b47508.js",
    "revision": "d91c58ca112ad9eb4ed2e0493a009f92"
  },
  {
    "url": "assets/js/322.68bfa375.js",
    "revision": "5d2b2388e48a144f9e81cbeb65f6d524"
  },
  {
    "url": "assets/js/323.eb5c6776.js",
    "revision": "2ae348f85c37131e4581e6cbeb782bbd"
  },
  {
    "url": "assets/js/324.6438211f.js",
    "revision": "129ee2ea4710c033941cf2e90a082530"
  },
  {
    "url": "assets/js/325.6053a085.js",
    "revision": "995878763cd18378af63778358a5ca03"
  },
  {
    "url": "assets/js/326.3a33ef5b.js",
    "revision": "e56e98dfacbc99f5c3885304ab83fadc"
  },
  {
    "url": "assets/js/327.6128b901.js",
    "revision": "e34f7845eba6ba82ab168c2aa1d2708f"
  },
  {
    "url": "assets/js/328.fe2f6bf4.js",
    "revision": "5479a93156075a6c168348e3ae1e8543"
  },
  {
    "url": "assets/js/329.e7e39f02.js",
    "revision": "306dc9ce46930ca713867b507d59b939"
  },
  {
    "url": "assets/js/33.1e62ca3b.js",
    "revision": "f04147c4524fa292cd8acd8956bcd1bc"
  },
  {
    "url": "assets/js/330.a02572ed.js",
    "revision": "6d74a991740928b658c97114ea5b8420"
  },
  {
    "url": "assets/js/331.e30d55a9.js",
    "revision": "c13802df5bd27471548646d35d6d01aa"
  },
  {
    "url": "assets/js/332.9122b9f3.js",
    "revision": "754cfa7d95b4a56b44ebacfce542eb4e"
  },
  {
    "url": "assets/js/333.c2a9998f.js",
    "revision": "d3182f3bee9731ca17d4f293035d5c53"
  },
  {
    "url": "assets/js/334.6b913b5b.js",
    "revision": "80831f23b8443bcdcffab4a885a03406"
  },
  {
    "url": "assets/js/335.2cf44274.js",
    "revision": "573bc3caeba22f68b87281c3d6b1429d"
  },
  {
    "url": "assets/js/336.c5a15adc.js",
    "revision": "ab2d7718f3a4298b871ed5b0caa8d4f5"
  },
  {
    "url": "assets/js/337.a526f02f.js",
    "revision": "a977e69219da06fffb4a3d611e46c152"
  },
  {
    "url": "assets/js/338.77e982f1.js",
    "revision": "eb956dadd29d5e87f669b99c2a3329f5"
  },
  {
    "url": "assets/js/339.f05fa1cc.js",
    "revision": "793ad607e7de7ade16cb58fcbb103596"
  },
  {
    "url": "assets/js/34.2e1b4812.js",
    "revision": "cd5867f4a5a6a0cf0d66b24ec8201dfa"
  },
  {
    "url": "assets/js/340.0fdcf2ed.js",
    "revision": "e10ebd6557ad44b6ec224ba27cc240e6"
  },
  {
    "url": "assets/js/341.42cbb5a8.js",
    "revision": "05f708a50139201e292045bd70bf4a23"
  },
  {
    "url": "assets/js/342.d44602be.js",
    "revision": "e35148caa233a063094893de4591170a"
  },
  {
    "url": "assets/js/343.20d52b82.js",
    "revision": "e65a529616b31ec5ab81684e92386d5c"
  },
  {
    "url": "assets/js/344.22d9b692.js",
    "revision": "5e8fcbb0bb405c11a877ca97f35cd048"
  },
  {
    "url": "assets/js/345.dfb20384.js",
    "revision": "cf0d4b2d82d9422ad179dbfd1722f3f1"
  },
  {
    "url": "assets/js/346.21047b91.js",
    "revision": "42c6121d1c2f1c5a813fca26c2b11871"
  },
  {
    "url": "assets/js/347.2d88da79.js",
    "revision": "6507e62e41bef1f40de920beed74b416"
  },
  {
    "url": "assets/js/348.51f9c6f6.js",
    "revision": "ffd188a3cfb74850b1d344a7cd616d8a"
  },
  {
    "url": "assets/js/349.d66172a7.js",
    "revision": "55d476d2e729d3d76e6a06c7208f91a9"
  },
  {
    "url": "assets/js/35.da81d0f0.js",
    "revision": "5c48c5e2fbfb6545ff0f2b1e2e181ef3"
  },
  {
    "url": "assets/js/350.2cf4c916.js",
    "revision": "b7b69a051b576e55d8bdf757b350481b"
  },
  {
    "url": "assets/js/351.077a4199.js",
    "revision": "2070a4e2ac44307755dd60af4cabb221"
  },
  {
    "url": "assets/js/352.15d92a20.js",
    "revision": "1352b992e5e3e01e2b7f030e496c3f53"
  },
  {
    "url": "assets/js/353.4ec0b186.js",
    "revision": "381bbcc679b1dcdb9d12a51cf01dd1c5"
  },
  {
    "url": "assets/js/354.31b7a869.js",
    "revision": "23a24c9cf59c7f04d3fb5a8fa57690e4"
  },
  {
    "url": "assets/js/355.018edda9.js",
    "revision": "427b1e80cc63d643f78d3db1d64f2f90"
  },
  {
    "url": "assets/js/356.b5036483.js",
    "revision": "cdc4761e927012a3acc7947f4efac4a8"
  },
  {
    "url": "assets/js/357.dd8478c4.js",
    "revision": "a70465161a3759768400b38faacfa122"
  },
  {
    "url": "assets/js/358.a9439f8c.js",
    "revision": "df86c947353f02ac8c3400a9f0244197"
  },
  {
    "url": "assets/js/359.3a9834b8.js",
    "revision": "22cf8bc896fd894464522a2462c31618"
  },
  {
    "url": "assets/js/36.994eef91.js",
    "revision": "4a813b1c7eed6208048a37dc5e9e3608"
  },
  {
    "url": "assets/js/360.9e300c4a.js",
    "revision": "446ab27c4446186a9446d4478601a0d7"
  },
  {
    "url": "assets/js/361.17648ce6.js",
    "revision": "fac917804c5d8ea7fa0c941e4ef54a2c"
  },
  {
    "url": "assets/js/362.f9566b72.js",
    "revision": "b199a834526277441418b484ef60c68b"
  },
  {
    "url": "assets/js/363.9ba9d4ae.js",
    "revision": "94a71b02fe0ee35784ceae3669bb7737"
  },
  {
    "url": "assets/js/364.52d9ac32.js",
    "revision": "95a2572c07bed950572caf42e70fd10b"
  },
  {
    "url": "assets/js/365.acb4c3a7.js",
    "revision": "6d92103b63d450e0d34393fc461d3642"
  },
  {
    "url": "assets/js/366.34967266.js",
    "revision": "af77391a7c3a1c4254e95e2a30403270"
  },
  {
    "url": "assets/js/367.49907bcb.js",
    "revision": "f14bade9eb9eba73c4fe5adc5e27d5a0"
  },
  {
    "url": "assets/js/368.3ce7fc43.js",
    "revision": "8233b722e04fd1849e3de968c7e6fc55"
  },
  {
    "url": "assets/js/369.4733e113.js",
    "revision": "4fd5a40ab575e8f734154da074320061"
  },
  {
    "url": "assets/js/37.45c849b7.js",
    "revision": "ab9af222e562bcc05393d7b742d69522"
  },
  {
    "url": "assets/js/370.0acc4d31.js",
    "revision": "7c4f204a117b35b125a6c68ccde7af4b"
  },
  {
    "url": "assets/js/371.ec186f08.js",
    "revision": "dd682358fd56ffe04fc02628abdd3539"
  },
  {
    "url": "assets/js/372.cc361b95.js",
    "revision": "b33cbc091f47311214114e7c6d9e163c"
  },
  {
    "url": "assets/js/373.d66dc4b4.js",
    "revision": "856cbf2ee798d56789ae15cbd36700bc"
  },
  {
    "url": "assets/js/374.d597c4b9.js",
    "revision": "31d39c52a31aabdbfe56c82a8630b89a"
  },
  {
    "url": "assets/js/375.61878b72.js",
    "revision": "9aa80e2e88cce76df083c38c6934a7b6"
  },
  {
    "url": "assets/js/376.f3274f5a.js",
    "revision": "df34e2d606831131d83dd1710cdb4c58"
  },
  {
    "url": "assets/js/377.a33e6465.js",
    "revision": "cf058b8dec12d5940831d0c9b1a1a1cb"
  },
  {
    "url": "assets/js/378.21e4570c.js",
    "revision": "543a2be23246b17abdaefa3ff26ca9b0"
  },
  {
    "url": "assets/js/379.b9c4b383.js",
    "revision": "e7dcd342ba763b6de27a4a9ae775efa8"
  },
  {
    "url": "assets/js/38.018f37c5.js",
    "revision": "906a05ffc0df9d246c997efc2eb37452"
  },
  {
    "url": "assets/js/380.c8007921.js",
    "revision": "b722b7e2c4aaa521ce94eaa8eb69324d"
  },
  {
    "url": "assets/js/381.45cc518c.js",
    "revision": "382571ad47ffd6d237fb64789c89d60d"
  },
  {
    "url": "assets/js/382.4938a107.js",
    "revision": "ecd48c8cca045b285aa2889f68e64b60"
  },
  {
    "url": "assets/js/383.6cb05b23.js",
    "revision": "9dc3012f819bfa0eff28dd9e30d1d6e0"
  },
  {
    "url": "assets/js/384.a0547cff.js",
    "revision": "4270cef32781e640dcd27e7d4579826f"
  },
  {
    "url": "assets/js/385.1da44371.js",
    "revision": "d30e65a46ae205523e9c197c7724671f"
  },
  {
    "url": "assets/js/386.7cf42dab.js",
    "revision": "77457b8ba15f36112f881102da5346c2"
  },
  {
    "url": "assets/js/387.6749d225.js",
    "revision": "0c3331e6b654930a3c32b948e4b986f4"
  },
  {
    "url": "assets/js/388.47771210.js",
    "revision": "ae42c70fabae29f35eeaf19cbd5628c2"
  },
  {
    "url": "assets/js/389.1499bfe9.js",
    "revision": "f1979355966b8b38e2837967f9867fe7"
  },
  {
    "url": "assets/js/39.6cf811e2.js",
    "revision": "498f81dbca9c45327ac03edeee589c67"
  },
  {
    "url": "assets/js/390.e6595d80.js",
    "revision": "d503141db427a1edc1e469c7936a0368"
  },
  {
    "url": "assets/js/391.652481aa.js",
    "revision": "3fc372eb65eec665c0a6dcc4628c3384"
  },
  {
    "url": "assets/js/392.b0ea8611.js",
    "revision": "a99f2626864042f71b80268967d4eaaa"
  },
  {
    "url": "assets/js/393.42d69a50.js",
    "revision": "bd6178fe885f4379bd133ec87ca6b8e1"
  },
  {
    "url": "assets/js/394.473bea1e.js",
    "revision": "96b4257c576b02c3be54d0e4cc6d475f"
  },
  {
    "url": "assets/js/395.6d26a61c.js",
    "revision": "f8647877149e98afce7c0d307ae1d87e"
  },
  {
    "url": "assets/js/396.e1ed6b48.js",
    "revision": "de7a906c9771d558ce579349d2e4f9f3"
  },
  {
    "url": "assets/js/397.f87be3b3.js",
    "revision": "da438634685e8e60fece0dff5f11edad"
  },
  {
    "url": "assets/js/398.4be82197.js",
    "revision": "594538469cf9869ea3bcffb69c5c37d5"
  },
  {
    "url": "assets/js/399.f2245146.js",
    "revision": "25bcb6c68b4554eb21d9122fe9e12ad7"
  },
  {
    "url": "assets/js/4.b8a42ba4.js",
    "revision": "e7a571660e83587ee7e56251081a353a"
  },
  {
    "url": "assets/js/40.c433c748.js",
    "revision": "426c2824c7910e5b7d48043224ebc104"
  },
  {
    "url": "assets/js/400.c7396fe6.js",
    "revision": "4a8f27ca4d2eb5d9937801c3eba22999"
  },
  {
    "url": "assets/js/401.4a21c398.js",
    "revision": "10d5047a582847540888f8913b58a577"
  },
  {
    "url": "assets/js/402.e48e164d.js",
    "revision": "fb13ed664b603e19afc8c846f5ccea76"
  },
  {
    "url": "assets/js/403.d9c796be.js",
    "revision": "1617c30fc64dae21478c751998b54e06"
  },
  {
    "url": "assets/js/404.c9041868.js",
    "revision": "1ae6b027698d2fd9e1e496d2f0a6a8b8"
  },
  {
    "url": "assets/js/405.36945434.js",
    "revision": "75954623f05e384017b2fac4b7f0e6dc"
  },
  {
    "url": "assets/js/406.08e408c4.js",
    "revision": "5a602845bfb12d0d3c7d9f7669f363ce"
  },
  {
    "url": "assets/js/407.e4b12cf8.js",
    "revision": "a0eae687ae1629fc7f50f10886689c58"
  },
  {
    "url": "assets/js/408.c3d70a7b.js",
    "revision": "83fce903111371c77d5ff557216fcffb"
  },
  {
    "url": "assets/js/409.8abc3dba.js",
    "revision": "c39c8c3a1a24cc7d6ef0bea8a7732c11"
  },
  {
    "url": "assets/js/41.cf856d59.js",
    "revision": "983bc6e9337ce8ebb9162596a368a44d"
  },
  {
    "url": "assets/js/410.99b71a60.js",
    "revision": "8644b23396c8e9aef299567f740ff794"
  },
  {
    "url": "assets/js/411.ca3dde7f.js",
    "revision": "3aa8ad52aa7c03c88cd5708908a9342d"
  },
  {
    "url": "assets/js/412.5c38a77c.js",
    "revision": "86c161a4b76f762e91b77c446ed2e48c"
  },
  {
    "url": "assets/js/413.465c2e8b.js",
    "revision": "ce981854dfd7fa53d816d5adb43b1ce6"
  },
  {
    "url": "assets/js/414.7c760e42.js",
    "revision": "625b3b22e024eccfaa61013da4f2426e"
  },
  {
    "url": "assets/js/42.429c9b1b.js",
    "revision": "df3d9dff5cd4792dab206aff31809026"
  },
  {
    "url": "assets/js/43.c05cb070.js",
    "revision": "d95030a6c8ca518838c512348628880f"
  },
  {
    "url": "assets/js/44.6a1bc54a.js",
    "revision": "46c58783d8915298a3d0be31ea18b739"
  },
  {
    "url": "assets/js/45.c7a5a0ca.js",
    "revision": "fe0578e3053aba34e5ce559fd68289a8"
  },
  {
    "url": "assets/js/46.aecb114a.js",
    "revision": "294b47a18759b495b6286816f1e1dd87"
  },
  {
    "url": "assets/js/47.6d21303c.js",
    "revision": "6a1efdb49acf325cb926dd69873d6317"
  },
  {
    "url": "assets/js/48.76a84923.js",
    "revision": "0bf8e5a7b360bd34bf267cb122ed80ed"
  },
  {
    "url": "assets/js/49.bc60a5a1.js",
    "revision": "a08f26b021c9db5da33278946a00c0ae"
  },
  {
    "url": "assets/js/5.d2a7d297.js",
    "revision": "c4baa8aaeecd629c0995c38561aec6d8"
  },
  {
    "url": "assets/js/50.d327cf3d.js",
    "revision": "9fec042d3dd801780ca09c6bc8e51cb4"
  },
  {
    "url": "assets/js/51.2db145f0.js",
    "revision": "dc17e5a7279d5485a55a14c15b92f7f7"
  },
  {
    "url": "assets/js/52.da6c244a.js",
    "revision": "c49b527d56930ba7bf3e235833d26d88"
  },
  {
    "url": "assets/js/53.0c21a7f5.js",
    "revision": "22eba4d5ddf3b448732fbcec159f1ee4"
  },
  {
    "url": "assets/js/54.b2ca2290.js",
    "revision": "ba1d2c11d1233fc8817989f8c76137a9"
  },
  {
    "url": "assets/js/55.ac76d5de.js",
    "revision": "15b120135890c8fa2f982e409c905771"
  },
  {
    "url": "assets/js/56.82a8bb6a.js",
    "revision": "836d1b7621ba544b8304fb63d5824885"
  },
  {
    "url": "assets/js/57.2cb5ba11.js",
    "revision": "a8d6d728565af75f4ec9eaec48f652f8"
  },
  {
    "url": "assets/js/58.76025a1a.js",
    "revision": "48842eb6ea56888d063259e35650698b"
  },
  {
    "url": "assets/js/59.2b1e1493.js",
    "revision": "7ce8be255bf8db2ea19ca6d0e546e942"
  },
  {
    "url": "assets/js/6.c36c853e.js",
    "revision": "12c12776345ed067629cd2986f093fd0"
  },
  {
    "url": "assets/js/60.015ea735.js",
    "revision": "77c8042113f4869ff4147bc29cd3362b"
  },
  {
    "url": "assets/js/61.9ade8c29.js",
    "revision": "cb55deb432a22c32064f755daf5b6205"
  },
  {
    "url": "assets/js/62.e2e1ad2a.js",
    "revision": "a4c8d14d88473b5c077b7181ecd0ed51"
  },
  {
    "url": "assets/js/63.1945f31c.js",
    "revision": "3aa34f9eb737c4c7b3ab608dd09fd8b0"
  },
  {
    "url": "assets/js/64.b48db0f4.js",
    "revision": "80890e2a75e6874a3a296f842c66eed3"
  },
  {
    "url": "assets/js/65.ca839834.js",
    "revision": "233d2ae9936e0c22eb6b981ecb1f172a"
  },
  {
    "url": "assets/js/66.8576dd4a.js",
    "revision": "85857857dd89e4f1a674f38c0b34a207"
  },
  {
    "url": "assets/js/67.2df999c9.js",
    "revision": "2f9a8be2ad387e92b6fbe43c48eeb1b8"
  },
  {
    "url": "assets/js/68.91f58571.js",
    "revision": "4878261180b82e6c08b9a38d4b606a5e"
  },
  {
    "url": "assets/js/69.6512de09.js",
    "revision": "8d0bd78b6b7a41cf38c7c6cf52ab0804"
  },
  {
    "url": "assets/js/7.c9bb5070.js",
    "revision": "048529db1f92657f15a2f2766c60bcfa"
  },
  {
    "url": "assets/js/70.da95f51a.js",
    "revision": "4320637009e5a56e9beb0bc17593d433"
  },
  {
    "url": "assets/js/71.7a6d3717.js",
    "revision": "bb1286ddc336d5c9ef0cf9b481d5afe4"
  },
  {
    "url": "assets/js/72.4b94067e.js",
    "revision": "de9407a3038bacc6e3c8e2f95b48fab5"
  },
  {
    "url": "assets/js/73.55ec84a0.js",
    "revision": "ebbe7d87db0ad54fce4ccf2cfd31dac2"
  },
  {
    "url": "assets/js/74.ed6cd4b9.js",
    "revision": "8585b3d63519ea09105b0659df44302a"
  },
  {
    "url": "assets/js/75.d94de746.js",
    "revision": "4d8de79ba24eb19592b87d2b2b62695a"
  },
  {
    "url": "assets/js/76.bb5c97a3.js",
    "revision": "15b6e99179fce90415aa4c484640e174"
  },
  {
    "url": "assets/js/77.f06b5a81.js",
    "revision": "061fb8d79a653a9c2d94ba03a7b6c4b8"
  },
  {
    "url": "assets/js/78.4fe0f559.js",
    "revision": "0cb28e8fe3ed0120335c1b8899a7cb91"
  },
  {
    "url": "assets/js/79.06973ab1.js",
    "revision": "38e15ab136dd298de8e7b068fffa510b"
  },
  {
    "url": "assets/js/8.af683d2a.js",
    "revision": "dc3ae578f8e4ca5147eb4f64833a5155"
  },
  {
    "url": "assets/js/80.44ac2cb8.js",
    "revision": "72dfed0a7d61589384ddb5965a8f39be"
  },
  {
    "url": "assets/js/81.a8a0fa1c.js",
    "revision": "7eee5c50c503a28a20bb0e15b2fb07a5"
  },
  {
    "url": "assets/js/82.190f9f65.js",
    "revision": "73a259e39d95b61f3a09aa2c1991af25"
  },
  {
    "url": "assets/js/83.66d93c13.js",
    "revision": "9faadc14fe8cf058176390774a0df00f"
  },
  {
    "url": "assets/js/84.741c765d.js",
    "revision": "fcc64450d682dbe90057032e5dac6160"
  },
  {
    "url": "assets/js/85.bb3c2ff2.js",
    "revision": "9518164ae07338c957454991632a02b7"
  },
  {
    "url": "assets/js/86.20c8717a.js",
    "revision": "94859313fa1b4c92118868512de469d8"
  },
  {
    "url": "assets/js/87.93dfd589.js",
    "revision": "d79d3fcafa00ab75fcd48692a2b091c5"
  },
  {
    "url": "assets/js/88.b8b56cf7.js",
    "revision": "553f38b201151aebd76aee837a496583"
  },
  {
    "url": "assets/js/89.1951d769.js",
    "revision": "d7ec9b2eb8ec0c16b652db55e92ce0ed"
  },
  {
    "url": "assets/js/9.abe37851.js",
    "revision": "be7b2616f4dced76b3f01b873e485f59"
  },
  {
    "url": "assets/js/90.ca33b6bd.js",
    "revision": "8573c7107385a42dd566a1fbd1d6858d"
  },
  {
    "url": "assets/js/91.2fb7cdf5.js",
    "revision": "2da67e193dae68148646959615259b18"
  },
  {
    "url": "assets/js/92.c79cc003.js",
    "revision": "243b9b76e6d04abbd0a9242613d5967d"
  },
  {
    "url": "assets/js/93.bbc6e0dd.js",
    "revision": "7bc3bc91021ba1ea59db3bb4dfce39a8"
  },
  {
    "url": "assets/js/94.fa1686ce.js",
    "revision": "117af38fc28a7d5a4c899a44687ccaa3"
  },
  {
    "url": "assets/js/95.c1a90f2f.js",
    "revision": "41087afbf8a68a02328091f4d41ff58e"
  },
  {
    "url": "assets/js/96.a6c068dc.js",
    "revision": "82d9ea39cfaaebc572d5ecf784344c35"
  },
  {
    "url": "assets/js/97.0a859121.js",
    "revision": "dd01f06cf4d690c065e315ffe981fc94"
  },
  {
    "url": "assets/js/98.d09a0b2b.js",
    "revision": "43259535340bd501cdc827217199bf9f"
  },
  {
    "url": "assets/js/99.31b3d775.js",
    "revision": "3097881754baaa29c8eec03fa5493640"
  },
  {
    "url": "assets/js/app.5c96e95c.js",
    "revision": "b680d5e80397ca3d3d2e3ee300cb834d"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "b636c31ac3b8b0f2329d8fa8642c358f"
  },
  {
    "url": "blockchain/solidity.html",
    "revision": "426425069f34532c8fa57c8173e71503"
  },
  {
    "url": "common/architecture.html",
    "revision": "c8a496438c5d916af9d628f245378cb1"
  },
  {
    "url": "common/code-structure.html",
    "revision": "df35e17e9adcd6412d3862ecc4e8d12e"
  },
  {
    "url": "common/crawl.html",
    "revision": "42b4c55acb5eba4cf0034b48e44f3919"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "e3f02770fedf134b6289d687b92202ef"
  },
  {
    "url": "common/debugging.html",
    "revision": "1fdafba47017143819ca0130b395666d"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "ad8478f88af5e7f8d1d544535b01cd76"
  },
  {
    "url": "common/document.html",
    "revision": "8c47bb8b44458d93f7966740bbc93cdb"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "e529070adf65799a42160063f1f998f9"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "6ef24c33b6d7c3ac2242665a25b22f38"
  },
  {
    "url": "common/index.html",
    "revision": "626667a98630ccfd45693cc247d5785d"
  },
  {
    "url": "common/optimize_be.html",
    "revision": "0944eddf9196ded0ee5520b50fb6345b"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "ce62c8b7a5faf2233eaa6123b3fe5d82"
  },
  {
    "url": "common/realtime.html",
    "revision": "e9ab7a7ae5d5d48baecf6a6c1ca13512"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "c2b2627cddcf978f9847412126a911a8"
  },
  {
    "url": "common/refactor.html",
    "revision": "59691549ff15c443cfcc618c20cd9342"
  },
  {
    "url": "common/seo.html",
    "revision": "c80253fe102a278d397b80e9150b97f7"
  },
  {
    "url": "common/use-case.html",
    "revision": "08198a8cf92bdc1d2dce37230d7cfd19"
  },
  {
    "url": "css/box-model.html",
    "revision": "63ad00f35d556402aaf8dbbd8151ac0b"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "8e7a410f966f80555871639ad821db38"
  },
  {
    "url": "css/css-flex.html",
    "revision": "c61a6ea8abc99e9803018c446762cf9b"
  },
  {
    "url": "css/tricks.html",
    "revision": "a560ef02d052f77c1c0ddf31c6e5669f"
  },
  {
    "url": "db/architect.html",
    "revision": "c771e5b4c1616cdcfc4c9fff095ae92f"
  },
  {
    "url": "db/cassandra.html",
    "revision": "829c1c6566eebbe458a7a01f14d86315"
  },
  {
    "url": "db/couchdb.html",
    "revision": "f2ebbad28bfe9ea45355b835c1b1c733"
  },
  {
    "url": "db/db-concerns.html",
    "revision": "20292e00ee83305bc2d67922aa98c990"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "19a99bd85af8d7ee1d54fa65e272374a"
  },
  {
    "url": "db/db-vs-blockchain.html",
    "revision": "0419fe4a59ff48de0533cedab3f9d7f8"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "63b156162c025299346391aca45cab6a"
  },
  {
    "url": "db/mongodb.html",
    "revision": "475b25f84edb0bd7f4c38b60ac00e142"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "b300317653eac60aa3c1ecd4ce1e4dc6"
  },
  {
    "url": "db/nosql.html",
    "revision": "cc19e5325774e10f1803052a047dfc33"
  },
  {
    "url": "db/optimize.html",
    "revision": "f50f17ccdcf940ff0052d3f7a921aa65"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "604127b7594fc1e045df1012d5312a9f"
  },
  {
    "url": "db/postgre.html",
    "revision": "7cc6647101f13d2e520d0ecb216617c0"
  },
  {
    "url": "db/redis.html",
    "revision": "bb0bf9859babcc01cbeb7f9e9b88cf78"
  },
  {
    "url": "db/use-cases.html",
    "revision": "8adb48c1c341e81bc7ca53498133413c"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "2c4686231e06d0be9f16b047d4ada428"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "5554679b401643aac5c7ec12ceb2a23c"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "5c4b670b95b5f3d72c26e9a02839c34b"
  },
  {
    "url": "fp/fp-ts.html",
    "revision": "2e85b1aa742f48f2627cb76a054fd289"
  },
  {
    "url": "fp/functor.html",
    "revision": "043020cb8a23f850f7727356732c47bc"
  },
  {
    "url": "game.html",
    "revision": "4052440cd0af476be8394d8d198b54ae"
  },
  {
    "url": "go/clean.html",
    "revision": "d2ee0552d87f8ee81fe1e3be82c269af"
  },
  {
    "url": "go/index.html",
    "revision": "055ecd78c43545c356e73324472751f4"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "bec8387733f5a2fafad5630e1ef27cd2"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "0f5ab3748df387aa9d0ab9955b4e4a79"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "1ac24b45be2060261726b90ad33d1ae5"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "b8a20bb148f5a2669f7707658ec1a046"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "6669759e939e6ca1fed6a2b55e3b00a3"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "bb88f684a692eba12f86046992b0131b"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "01ea913dadd445cedb44161b24c4440a"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "10650320ca9317ce5414b5fab8bce713"
  },
  {
    "url": "index.html",
    "revision": "3b0d9a24b840c20683ceccf8defb4d1a"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "a4d67d7b52c6d90a81206234d7896bdb"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "6f64cb68cc73e176a8c231ff9d6a9649"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "ca6f16c4d8ffbadbdff678e81dcf3a32"
  },
  {
    "url": "javascript/closure.html",
    "revision": "129df88f06e79da421a01ae5df4abea5"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "41fed308ac4c9cff1a3ba941de88039b"
  },
  {
    "url": "javascript/eslint.html",
    "revision": "f72bbc0c1f7ad39e27aa578d42ef78df"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "3b3d64f1c4ba58140b985db52563dd74"
  },
  {
    "url": "javascript/nestjs/nestjs-cqrs.html",
    "revision": "e2c828612b8470270b8819a94289d2ae"
  },
  {
    "url": "javascript/nx.html",
    "revision": "3a46956248fc87c1ec5280715a1b8b04"
  },
  {
    "url": "javascript/rxjs.html",
    "revision": "8a90bf0b3fad3d36c51fee0b9c8dd0ef"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "5fa6eeed693875d89600bcaddf415e81"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "6dd076c82f11cbf1108db32dd112e7d1"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "2d3c2c98f7a5fa8f7e84c859f1780e01"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "995cc01c5c23b266d4463fe02a76d508"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "bccdcf5ae99ebb1dd76f2f3017ae5f5f"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "682873185a0c0238809f84e97d3b7aa6"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "eb7cc47bd946e37006ad3293a01b0af3"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "760007c888521151573f9d82da4d52fc"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "57646a0dfe9a221726409627f5fbf37e"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "457aa67328441ed5c8d81cf290107226"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "72edf8ab3188b9a8207447bb8e3f3f87"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "7a9840739b6e9a3cb7b4136f0d976677"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "a4b3194fa108988953712c29d0b3ba46"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "04493e932655494fbb4a0d29274f9a4e"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "26b31eb2c8d216d558d7ba1f907bf68c"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "dcee41555b36e12b9bdc861e4e6f69c4"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "7b9b7fd5c12600ff6572411b3fb39d21"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "ec2f8d8f3d89602cc3a68cd0e0b66f49"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "7f3f0356ab44ca17333e41966fc0041a"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "682d28acd28e0a0a365126ee919258dd"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "2b0939d87df6b08e35cccf8fa87d298e"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "23d0740d7e9ed7212ac846b859d87cea"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "b5ebbe8a1c60d0c629c9371eb0abc9e8"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "f32cdf940952a0c9a96295afb27056bd"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "171027329157cf328d143ba97ba9b7be"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "0e9f294b90ded167c10f3176d6876cd0"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "a6993a42930edc5d99dbbe7907db0e68"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "80ac1fd8c31afbdab8c22eb9a2de1d93"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "025e5aff498178cd76f54b0b35f54368"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "b571814e732cf02d569b7fe14b608c56"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "ec2bdf5cedea99649540bbde28a366dd"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "326cce7eddc5bf92dfed006012390f58"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "9bb5b8dcf547766703d1be80a2d52cca"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "70a402cc4874fc91210a79905e11c113"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "bb057b3e17413241d04272ac6d0689bc"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "3bb2189f4172aa207ef1ac64224a0e92"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "2cdddb48f4421f4967d23f2cd3ece3d4"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "8dc411594c8be0b9c3a6d892bb75ed7c"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "113ff00395be1d4a39aa8c16c4f1480d"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "e6215f4c57d5f79b7517c17a86889e83"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "74aee92427110b7f649d459701269569"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "030a042b6bb23dec494673c58ae9f7c6"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "013bd030610dbb60d4af2e88bad67173"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "051a6441b0b3679708865100d83b09ab"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "eda7ed72508382078b690f22b09dad00"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "11dac49bc69180ef569dcec25dd9920e"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "ed5bf4b926ec1598c8c20ba07f9ae041"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "949c217cd6aecbd659992de15cb501d6"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "bb635c989a6397e615621f12bbeaebc7"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "d2b32309988478d3cad34a17343c753e"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "953877d72141b97f9f641a7ccc96ac72"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "09b88ab6c194f7c8d1c69c8130ce3303"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "55bccd9e63b19573d2c7b5807ffde4bf"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "5114e16ff11605f7c157d0ddf50c2c8b"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "04c17a9306b599503a1736e26ceacce7"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "0ba06e9a41c02bd94cf38b560bc0fcf6"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "57c6a20d84014c3923859fc1fb237979"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "5451039df17b06adb31491000d3ac2cd"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "4de233403d8212fc094eccfaf821b524"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "8e2ae0ec297db8ba2478b8ccfe61eac9"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "1d5aedca3e1463eb3c6ceda037bb6d96"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "22f2db37dc0b75f2545a6a3f25179723"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "a7dd2f0fc810fcf1914a5c23cb7a7dc6"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "57869fc22bf24980864eb05171bd24e3"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "64b63fd938337113050737f7fb23bbc3"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "94ebef69a747321467e1de532adaaee2"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "5897e92c14e17acaf9618a469733905b"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "76fb2f34bf361c6e08ef4b08daabd33c"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "fa97f1c5d6d4803e9af92ba203f4e9ee"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "c543ce3a4d54b6e8d5b50f0a341ff5aa"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "affbe866e065cd1a18046944050b26c3"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "ded6882e38c2ab64ebcdc1d5160b42a7"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "6654393431690854f28a92e67451418f"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "9ae899e9e1b8fe5006e7e21daa314581"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "5413313054e6e30072fab69fab9e3353"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "b0851ffa4e3743c23c5572e117a3d7ab"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "7dab99a855a1c1945dfc16f82d95b1d4"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "bbb1b89514475c88b49b1eefe0c4af22"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "703abc84dacc211373046c78bb625f83"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "8616cf68640cb97a17085b2b624505fe"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "84235526a4bd582c6916d8d79bd9464c"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "53e8b777d3262ea9b2beafa2dab860ef"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "ee65141ffaf4dedc5f71f16844f4e4d6"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "6b006b05beab46233f722d820f669dc3"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "599b19961a9bafc01a51821d0bdf7479"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "f6231fecd1980d9dced536a28abf4a4e"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "f11543348af7653cf49ff683ca753a7d"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "d2bdcd89261c7f98d65bb65ca2354daa"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "ded1313b85d3fc10596916a8aefdb998"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "4ab3783a8d817a7b4e1f9f0c0cdcaa13"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "40dff176b7f3615deac3367c9985faae"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "aad53d0f151c4c3e9d618ab80e1f8e36"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "c5895e638c79526d949830b5b1c6a5b0"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "5a6b8951c61de5d0884c51d9c8e463ff"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "582b14a601704c64b38e4803bbe0ee7c"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "8a5f29034bdbc3660bd03d5fabaff42d"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "577bb1addf5249516e1dbf6e35dcc255"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "0b45a2132cf427ecd5942b501653df73"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "e5788634c51e0474b7567c71ed23f4d1"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "407e6278c176ef9b55613bfdd7adb384"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "5d1cd784092a049026e0d287b3d4f155"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "f3ef3de2789baa62a64d874cd6e0ccff"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "3f7e2c630827a50a65371555cfc6eec0"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "328ed2d8a6fb8b74e32d3a1351f22a8a"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "0b7706bf0635db20092fef7013965f0f"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "7adec287c7c6d6be1216401ac9d2c607"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "ef3fbb8157a6dba0dff648e93f9bee8c"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "bb0c89ef222261a15dd35f498cec781f"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "57b0474efc1478757c052c95ab9f6c6d"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "28d87fb7b20531285637f75fab7e4314"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "348259d5ed35cc773f767f3deee01dc0"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "93754d7320e4b5a2157e8ce0d9fbaacf"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "f88721103422add5b9df75c00d522b84"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "a8a5f27ef9f8dc2c8e5a34f92dbec624"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "001891818063124e6e82585fb4bb392f"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "4aedebb8ab2ce2f12d571218e3d35eab"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "d015beec18a2a2c860f77b2ab9ecdeb7"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "f488bd59146ce305903bf1e2ea0f6325"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "f57a7e2f0d8fa37e0af4ffc067c7534e"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "583753bca3fd495dbaf5ae79f75e3803"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "e44ef8b216ade8268941d0e7c61d7882"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "bda7ab7e6e8439ea9674ec886b54aa78"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "05b91b66597d6ed2ea2e3ece8bb7753b"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "de56f335c4a21628fee6ab453bf37990"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "88f992f2577ef4a0b38aa3d1bc536f3c"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "008fc84d608638ed3a9b4ccf1c540c93"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "3912671277f4a2ad99f4c2ce8c0e7901"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "0dcd1a76ac6cb1f1eb057ca94f1fc27c"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "a02f6ef219f343453e75a7246bc5186c"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "c7c7d61414ed6a5d60ef681099e9b148"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "3f201604fa1f02f08d47d304c5ec7788"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "4e6563e81be3eca01bffb17282f219d4"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "d547947066f65e8a38ac3d41ad64f021"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "606f267d83d54b4c424fe953820fb6f9"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "90a5a2352397a3e5324974be92f608de"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "3844e072479635efcb4d6cc659afb319"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "cf8092e0fa4ae940e29c95db70d4801a"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "86d6534c50f63b8cd770f3aa27fa3646"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "e9bcf399e89ef3d92a3adfd9ec1195d7"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "0156eaaea35bda9958591280558eb789"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "7015f5f6cea3aee9e1d7d89a08209b6b"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "98a29e874ae4ec9ff2bc8d9193a5b968"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "41220fdfe5588697797edbd5ba09d431"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "0e7a72fa6f3bd745f993f94e83fdcd55"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "ca6f71fba02590981e63c7e13311d1b0"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "7af6913851106810cd113ca834f4f709"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "e207317e38a01e42cc6db51a3dc28879"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "de87edcdbf622e8e1902b3b6e6f24f22"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "439a8f2bcce96c1f9b8aceaea0b58e09"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "d6016294adfebff3ff7e577c03c57c4c"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "57864a5feffe987c5c9b9ad30548e97d"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "80be05c6108bf255501132c33872729d"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "d5ef51d6619cbb738257a9030198e8ff"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "13edbfa0cdd7e904c7db24ee2dfef5c4"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "87d0a74fb0f777495e9845fdffa3474e"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "3a89eb8b163e2e53e214d5e8baa3e48b"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "00aa921efdac8f9ee3d5ade8196ce65d"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "e7e7161aa70dd916b9fb4b065d39fffd"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "b16739d942e9176f6e75042880f96217"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "f75ea0ffbfffb0a6a1f45db2f4c7869b"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "9ccd4c9e18b8eb835ce063e0bdafac22"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "8e455d00c692d4b7c4b0f4c69f2f4a77"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "16c897dbdc7574baa3a087f6dcf7736b"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "6b779164a71e3eb9ca9c0c42f0c184d6"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "b0f8db49f332d2de5af954d3b9e58cf4"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "2739e8da2dbe4f7332f6e7cedd8a294c"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "c55de44df5eee9a747f0750c51407642"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "566ef3bd8d62201d243a3dec5d1abfe3"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "41a999c82be97e0402de3afe2c8d9a22"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "ea88ca46fb883774c42231e3bfef12b2"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "c2fdbaaa275469a36e029d5073ca5f02"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "6d57cf6672637fa96f76e0b205b3bab1"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "f4ee798a21005f1473a39300fae46a7d"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "3e1de478b87610b6a566fa7f1c712791"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "36c1e34ce6e6f231b6f1e5b541656283"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "1cda2c624eafefc8cddfbccdee9949f2"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "2c5dfe5df243abde2102edd24679df67"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "06d2c231faddc209a6b221b53c61e405"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "02a3f8f65a370c3f03f19eb17957d824"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "9519226076f4294f21d1a1d80925e98f"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "dd147f961033601c4a256a9a72ff6101"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "5b7651fa96675720fcc3d3b63b5a8e02"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "5e93f6f6eb6f57cecc514a53d6883081"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "e81b2e4156969d15749692ff6b62ba08"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "4eeb38a7996720dccb98db467155e6e7"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "fef34d17501b293879e7994a9114e80f"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "baa98c300c989565aa9ae559b0683518"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "4f2605501d740842901c058e80e1a799"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "7acd505199a9ccb5e5b46bff207c0738"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "75609e8b6386d463dd910a3751724c20"
  },
  {
    "url": "kungfu/template.html",
    "revision": "3fd5c8deb0d8d7544a122ff54f22f162"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "6f66c7365a55f28c46b64c60731b43c8"
  },
  {
    "url": "node/env.html",
    "revision": "644b2d0ef0d454f0ab48ea3951281a8c"
  },
  {
    "url": "node/index.html",
    "revision": "4c0fe55904a94e87c8edda3d1621558c"
  },
  {
    "url": "node/n.html",
    "revision": "674ef961c11648de4517c912cb808dbb"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "bdf33ad73db6ac7323d4f290e76bead9"
  },
  {
    "url": "node/npm.html",
    "revision": "7b5fa67247d29fcba4e0a91f90e6f115"
  },
  {
    "url": "node/sequelize.html",
    "revision": "114ba033017d94ccea661b35a07089e2"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "82db23acef66be32bd127bb210792b69"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "0d80b315c6451d929f062c5cfe9bccbc"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "4135e5032105cf48633bed044392a915"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "39ba3d15c40e12851a0c24d59e3110b9"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "9da9076cf0e50794b749409d37945d8f"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "30f74b1384470c436aba2a235f6efb05"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "1666c4852fe491f997900319a48dac73"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "85325717958d7f3e540ef9eca3eeab58"
  },
  {
    "url": "php/clean/di.html",
    "revision": "8086409badf680d7da166169485ceb5e"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "1ab74593200dc05989a092e87589c796"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "1dbdfa0be7cc6522aecc4fb0dbe4aa6c"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "447b61a2527e8a367e8516c50fb1998c"
  },
  {
    "url": "php/clean/index.html",
    "revision": "c84dacb266af936b9ccb8b7de8502371"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "48f79d946774c1267bcb40977852a1bd"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "de8e01202b32aa67d11cf4b899a07220"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "daedf856b45f4d429de61afda21d0cec"
  },
  {
    "url": "php/composer.html",
    "revision": "397677adaa382d9ff96bc8444d49ed7f"
  },
  {
    "url": "php/crunz.html",
    "revision": "b3f8fdce3bb49f6e35a9dedabaf27b94"
  },
  {
    "url": "php/laravel/best-practices.html",
    "revision": "57697d96ef22742e907a4103febd88b9"
  },
  {
    "url": "php/laravel/laravel-notes.html",
    "revision": "c53fc74f1162c76fb178ed5da0067545"
  },
  {
    "url": "php/laravel/patterns.html",
    "revision": "c77a252fd99790e406dc507ed215d6a4"
  },
  {
    "url": "php/magic.html",
    "revision": "4c038d1b148e8d988f8240ef40b8834c"
  },
  {
    "url": "php/notes.html",
    "revision": "401e6775802d725d725d52acda2fd8de"
  },
  {
    "url": "php/oop.html",
    "revision": "4482788f24e1ef7b552ddf90a2f5cb4d"
  },
  {
    "url": "php/php7.html",
    "revision": "68143e627402fb997de5eb27e06824cb"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "c806c1919d247ad56cd5af839d76daf9"
  },
  {
    "url": "php/reflection.html",
    "revision": "b95f4cb4d9d50e8e3594f7b74bbe4b27"
  },
  {
    "url": "php/tricks.html",
    "revision": "7a7133842b25014dacc674eb830e32f4"
  },
  {
    "url": "php/wordpress.html",
    "revision": "832e07cb779637fe7668eb1c6ecde687"
  },
  {
    "url": "quotes.html",
    "revision": "f028cfffe79309d6c4768d45227ba51c"
  },
  {
    "url": "react/mobx.html",
    "revision": "08c9f16e8bf173ddade10e130bd19f1d"
  },
  {
    "url": "react/nextjs.html",
    "revision": "246bc11eda6df309c196bb8261efe0ce"
  },
  {
    "url": "react/react-native.html",
    "revision": "0776c13654e08924d8df42fe7726fa16"
  },
  {
    "url": "react/react-vs-vue.html",
    "revision": "54c7535a78918ae7afc9c60714d71ef9"
  },
  {
    "url": "react/react.html",
    "revision": "caa7f703f0d99e2d8cb7ca7e049a4722"
  },
  {
    "url": "react/vue_react.html",
    "revision": "fc91eec461b3e49876d6b0260192c17b"
  },
  {
    "url": "refactor/notes.html",
    "revision": "519cb08dc33fb665974e704b7bd4b4c0"
  },
  {
    "url": "ruby/ruby-notes.html",
    "revision": "b05bac65bde61a5536fda1c07c68d121"
  },
  {
    "url": "ruby/ruby-vs-node.html",
    "revision": "87ab4e8edbdc3c32d5f1d172c5da1405"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "6c9bee989fedd4ce23864fe1310788a9"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "d79b5a5827a25dc63bc07cb8d589cf01"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "58e673ee3ba7983dcb13f2c88f7d7363"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "62a6260103da8106d96a71d43293fcbb"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "251fc145527c8ed14c6b2134117cd5a1"
  },
  {
    "url": "snippets/jest.html",
    "revision": "208e82d73203347a27df837f0f3a7ed0"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "f776cdbfa2a8c7619ed6db44aed34251"
  },
  {
    "url": "snippets/regex.html",
    "revision": "72d39181eb2aa955b28027f45e71bd44"
  },
  {
    "url": "terms/12factors.html",
    "revision": "31295012b14932b9ff4d9b082d1a9ec2"
  },
  {
    "url": "terms/architecture.html",
    "revision": "3d79d828ed602d4d96bf9fc708c271fc"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "0fc70089553cbb4a68c61c8d75b8f635"
  },
  {
    "url": "terms/di.html",
    "revision": "e1d58aa175f9cef15bc5bf476f40a967"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "b754c21b9018d812bae1feb8c259835f"
  },
  {
    "url": "terms/javascript.html",
    "revision": "83ca7032e0e3ef0adba959fa708dfed6"
  },
  {
    "url": "terms/patterns.html",
    "revision": "e2a022989531840d0ccf564a8cbfe543"
  },
  {
    "url": "terms/principles.html",
    "revision": "a23c8f79157abec1995191c1575bec59"
  },
  {
    "url": "terms/rules.html",
    "revision": "5e6607c880f0bc3cebdf745812bbb858"
  },
  {
    "url": "terms/testing.html",
    "revision": "396ebf854fe6d3383374bfbd675ed050"
  },
  {
    "url": "tools/chrome.html",
    "revision": "8c1cf61e73c0a2fddd70df0f4d77f303"
  },
  {
    "url": "tools/docker.html",
    "revision": "19c28b65407abdbcdf8df87bc4d51a9f"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "494269c539acb90a5c92d081ab271dfc"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "e250a66be4d377c34c349798bd6eb76b"
  },
  {
    "url": "tools/graphql.html",
    "revision": "1773dc9f74eafc659a06bc16971c96c8"
  },
  {
    "url": "tools/k8s/k8s.html",
    "revision": "78f9953989a245fc67ed0bf0961fb612"
  },
  {
    "url": "tools/kafka-vs-jetstream.html",
    "revision": "8279a6848b97b4e28368ea64c28536ec"
  },
  {
    "url": "tools/kafka.html",
    "revision": "8bb8f42be4d6de0978d3d378489261bc"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "3a24f025e68e782fc707dd936c10cee5"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "5c7a97f25a761cf2d467bb91d951038a"
  },
  {
    "url": "tools/redis.html",
    "revision": "5d67b0e238b388733c085bca068e41e0"
  },
  {
    "url": "tools/rfid.html",
    "revision": "20dbb4961c1a358d785480219f504808"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "e2496ebcef065b8b4b5ef9396dc6a316"
  },
  {
    "url": "tools/vscode.html",
    "revision": "d6ba0d6bbf61ad84232ce034c3ad8df9"
  },
  {
    "url": "tools/webpack.html",
    "revision": "83fa8c70705990f3d4a8a72ab9486ae2"
  },
  {
    "url": "tricks/compare.html",
    "revision": "b3e7e0b4b20b9dfdd254ea5c9cc7d101"
  },
  {
    "url": "tricks/git.html",
    "revision": "bcc842800f6c159be806bd44cb5738fd"
  },
  {
    "url": "tricks/linux.html",
    "revision": "78a71a505ce9ea283a88879f4112272c"
  },
  {
    "url": "tricks/mac.html",
    "revision": "705f2af824db1923f4cf27015be45eac"
  },
  {
    "url": "tricks/misc.html",
    "revision": "df83fe884294322e5dcacd6ed3137fef"
  },
  {
    "url": "tricks/setup.html",
    "revision": "8ed003bf50eeaee6521177d0cba09315"
  },
  {
    "url": "vue/communication.html",
    "revision": "b22ee24702bb0a28c2de2697ce31e70e"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "050f233cf00feb851a75d01b98f77b80"
  },
  {
    "url": "vue/events.html",
    "revision": "be00f2a979f78c4f89c15b8c71b7c27c"
  },
  {
    "url": "vue/references.html",
    "revision": "b30241380a188d1f0c81eccfb0cf1d20"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "1dca77be07454b4c999b44fd52890932"
  },
  {
    "url": "vue/test.html",
    "revision": "5d00d9468771c966c1ca56720a5788b0"
  },
  {
    "url": "vue/tricks.html",
    "revision": "14b1021437949379c74fdbb8db271697"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "d76509e71806720e717acac49a40d632"
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
