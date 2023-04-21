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
    "revision": "e045eda1db271328f6094f05413346bc"
  },
  {
    "url": "ai/AI-note.html",
    "revision": "5fbcda66fa6a37fb2d372e6dbef3a5d1"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "a8672c856686e81c80d7afc37cdec12a"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "d2aca94abdecc69e9b5471b7ee81a9cb"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "dcd9572117be94aae2b6ef75b329083b"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "cb5d40c553b176fce382aacae3ee1135"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "ea90567627af9198f29dba09ef7aa18d"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "cceb3cc67e0c017c0aa840bb6b0d841f"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "d0bb1f403cdf3fd9798407df8e711709"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "157fd2054e50496b3d8e8e4f91c7a092"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "e24d8fc2199f80d3097831fb5121b64c"
  },
  {
    "url": "algorithm/string.html",
    "revision": "84ae8e6ea060694cfdf4503546b51990"
  },
  {
    "url": "algorithm/sum100.html",
    "revision": "60881773db5c6c24a2a177b29b679eb0"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "c0d3bea2b70049939b4693b9824fb8ed"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "6c59b9a7a1dca87869b9e7037a96b3b5"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "238ff57a1eee5f25650b6d5bd0b28a09"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "cc7f0843bc7c1aab5a8eb2eaeee54645"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "d518a5600add4e97181e94df91bf59f9"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "5511217123da67d340f3cb9bc7d852f7"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "0e8912d82e14aba9dabee7a5b36a31c1"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "d6be70561d479b539c310de6f5e8942d"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "57b8c3a1d2eb3ca49ebf0bb980345e3b"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "7084ba18e066b020684a594480876149"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "7650119dbf4cf272a254a982470fc19a"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "e1698265694752d63ca12746b0689b6f"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "18849d619e0467189a2d1b3668296aae"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "c65525870212f61eb21af611c8ed2f12"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "de8956307a025b2fb03bb2071210a61f"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "b23f39e13898631df0930fd8707b21a2"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "3692bc1212c2631bb1dd1d4ec55ee742"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "219160013e0edbfa9a700a902f578ddc"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "51d4c97a4c21e618d9a99d35583e5051"
  },
  {
    "url": "architect/authenication.html",
    "revision": "205275b7861a15f5dd9062a5c01f1df7"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "90f2384774267fbfe3bc084d72b66bb1"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "47c841db4d461b4797a7f52f221065ae"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "6d9d069bfef39c2b1b93cc7f81bbd1b1"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "492d3d879ca8befe9066dbbcb04bb578"
  },
  {
    "url": "architect/ebi.html",
    "revision": "c2e9c8116975c9b4d7426f00730ba6b5"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "2eb5ec3b23400c67c58d6346e2879671"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "d9af0fc70f5fa33b95fa2539fbe0f57b"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "ee55486532141ab3c2ad4b6e063f5de7"
  },
  {
    "url": "architect/index.html",
    "revision": "b8b3235321b41279c025dbc3ae640f8c"
  },
  {
    "url": "architect/messaging.html",
    "revision": "48419df476c34e3f8d6ab79d41d5356c"
  },
  {
    "url": "architect/microservices.html",
    "revision": "6c8e3780542d9d94d873376d888f9890"
  },
  {
    "url": "architect/mutex.html",
    "revision": "befe0670d4f16f1d5ae2a6196acbc91d"
  },
  {
    "url": "architect/notes.html",
    "revision": "68eb93109f42329983de6720c63ba3b3"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "774baa4d8c26128ae4ee5b7e48614742"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "9c9882d2fecb426794de1e25ea4da80d"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "6ff9e86cee76dae7d7595c4bcc10f0a9"
  },
  {
    "url": "architect/refs.html",
    "revision": "80fb58e6472740fb61b6caf46c68595f"
  },
  {
    "url": "architect/restful.html",
    "revision": "e8841a199143a342da8b9b67ce9d8a0d"
  },
  {
    "url": "architect/soa.html",
    "revision": "e38ce036369547acef8fe4691f220b05"
  },
  {
    "url": "architect/spa.html",
    "revision": "350e8d74bd7a22aa9e4e27f5bfd4385d"
  },
  {
    "url": "architect/terms.html",
    "revision": "85413b573aa03d64f511a3b0aa9d2d1e"
  },
  {
    "url": "architect/webservice.html",
    "revision": "03eed4bbc9c930329597de48f9bf4768"
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
    "url": "assets/js/10.70acd111.js",
    "revision": "59a1207b2f79c1f65c88369277bd7d41"
  },
  {
    "url": "assets/js/100.ac90e921.js",
    "revision": "5e73235484f5a37576e7dfbc146e7798"
  },
  {
    "url": "assets/js/101.99dd1f0a.js",
    "revision": "2bb49c434c4d61e86481adc13ef57d48"
  },
  {
    "url": "assets/js/102.2d968aa9.js",
    "revision": "e63ad169c0da81d7099650c79c40b3dd"
  },
  {
    "url": "assets/js/103.e3f3e64a.js",
    "revision": "3c17550e0eb8e5c8c68357e452f28f99"
  },
  {
    "url": "assets/js/104.1ad0f6cf.js",
    "revision": "52cd9aa83cd0a461de0131e7456f0629"
  },
  {
    "url": "assets/js/105.85fc5b94.js",
    "revision": "7c05b057f767f2d6fac00fffecba8e9e"
  },
  {
    "url": "assets/js/106.16e00ee5.js",
    "revision": "89795b0d62ee278b9461210158304502"
  },
  {
    "url": "assets/js/107.edd8204e.js",
    "revision": "bc3164d9f19b761642b73257450cd1a4"
  },
  {
    "url": "assets/js/108.8bfa7e33.js",
    "revision": "9387cc54aa59ccdaa60a0662f1dc3f82"
  },
  {
    "url": "assets/js/109.f24bc636.js",
    "revision": "704f91c6162f02a1f054a26d51a5c123"
  },
  {
    "url": "assets/js/11.6084acc3.js",
    "revision": "c1c2e1378b5c62052973710c45ca5397"
  },
  {
    "url": "assets/js/110.5c7f1017.js",
    "revision": "c488bd8773ec4b02f4d2e849b709650e"
  },
  {
    "url": "assets/js/111.3aa0cd34.js",
    "revision": "56ed323b0eddf3a49a7573e0188130f5"
  },
  {
    "url": "assets/js/112.4ceb9421.js",
    "revision": "b075b19392b7a7d376bc0c4de0d18cd2"
  },
  {
    "url": "assets/js/113.8c653561.js",
    "revision": "7df152c76c75613ff9a7cc28b145372a"
  },
  {
    "url": "assets/js/114.ba026d56.js",
    "revision": "418543c3a6ff5da13a641e01e31b0453"
  },
  {
    "url": "assets/js/115.3cf4fc79.js",
    "revision": "7ccd77ab60673a5a2155c074cee0c752"
  },
  {
    "url": "assets/js/116.c68e6f00.js",
    "revision": "35c15c078cb895fc38716a504770e8d3"
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
    "url": "assets/js/119.0ac37bd0.js",
    "revision": "eca7d032a5fce12616a01a5a027c4794"
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
    "url": "assets/js/121.b832232b.js",
    "revision": "1bb708411ae21add04195f17d12a06e0"
  },
  {
    "url": "assets/js/122.00ca53db.js",
    "revision": "17a9e0d38ac3a285c899d7197bde7835"
  },
  {
    "url": "assets/js/123.35314e04.js",
    "revision": "417dd94bc54b43f4d5fe053218d70963"
  },
  {
    "url": "assets/js/124.bcfdb19b.js",
    "revision": "d18f6b39915817cac1009cab178bc08e"
  },
  {
    "url": "assets/js/125.f465b01a.js",
    "revision": "67d5170410fd56b6b479e9caa99960f3"
  },
  {
    "url": "assets/js/126.1637142b.js",
    "revision": "ad0b3afab94f968e3cf6fc75119457c9"
  },
  {
    "url": "assets/js/127.f28afea3.js",
    "revision": "45fd10269d98192f398e8308040d63e2"
  },
  {
    "url": "assets/js/128.a3e89a02.js",
    "revision": "8f0f4a97d6f1cc36308bdd91e35c5b7f"
  },
  {
    "url": "assets/js/129.ecd0ed3c.js",
    "revision": "abc2810fdd0a1159104e42b8d059a5c3"
  },
  {
    "url": "assets/js/13.f334252c.js",
    "revision": "a884b0a025ffa4a986725e09ceef34d4"
  },
  {
    "url": "assets/js/130.0d1d740e.js",
    "revision": "74413ab0cf476722312b6c6d96ea64d6"
  },
  {
    "url": "assets/js/131.ff46155a.js",
    "revision": "9a010ecb7dcf9c1f278aeaad9885c483"
  },
  {
    "url": "assets/js/132.562b007e.js",
    "revision": "403cbcd575f1a3a10833a2e48054c8f4"
  },
  {
    "url": "assets/js/133.e7fe18ab.js",
    "revision": "4d6a03df3cbf84575a97a1ded85c0e3d"
  },
  {
    "url": "assets/js/134.e943939d.js",
    "revision": "746312179654dbbe2b13314a779e68c9"
  },
  {
    "url": "assets/js/135.a98a49ee.js",
    "revision": "e1ad487ab22009ad0e7b5863680431cf"
  },
  {
    "url": "assets/js/136.bba8ee00.js",
    "revision": "69b3c895ae1aec73f1c9a8bb89bbefb4"
  },
  {
    "url": "assets/js/137.6a758ece.js",
    "revision": "747098c06df3cff9b27dc32dda182376"
  },
  {
    "url": "assets/js/138.93739358.js",
    "revision": "e5cbba2f455c84d231567a88ed217109"
  },
  {
    "url": "assets/js/139.2b35aab5.js",
    "revision": "8a342ef1c439a41875ba6652fc32c1f7"
  },
  {
    "url": "assets/js/14.9f804654.js",
    "revision": "f9a477306e9f77396149ae443139f186"
  },
  {
    "url": "assets/js/140.1daed576.js",
    "revision": "e69f0b2eb8291ed5efdd7793e19d1138"
  },
  {
    "url": "assets/js/141.418a9d54.js",
    "revision": "9fd1ff93d04878ac15c6b9b979bba91b"
  },
  {
    "url": "assets/js/142.6df3092e.js",
    "revision": "5df087739312906e5556066fe0f17d5c"
  },
  {
    "url": "assets/js/143.750fd73a.js",
    "revision": "9d54794dfc3c802456613c843a0095a9"
  },
  {
    "url": "assets/js/144.9da14875.js",
    "revision": "da4586416d88f869ea0f712746ce1edb"
  },
  {
    "url": "assets/js/145.90a2259b.js",
    "revision": "27de84e5c122824505e61e755f0c6646"
  },
  {
    "url": "assets/js/146.83d36d60.js",
    "revision": "1013f401355c13bbc9171af5da485511"
  },
  {
    "url": "assets/js/147.75049aa9.js",
    "revision": "a5b8a24f8cce8ab6343374f5c470be32"
  },
  {
    "url": "assets/js/148.8ff4fab9.js",
    "revision": "37d546366d5d48345d0a28c2f9bb60ef"
  },
  {
    "url": "assets/js/149.9b1436de.js",
    "revision": "546cf3614a2609740924504aea462845"
  },
  {
    "url": "assets/js/15.51b67751.js",
    "revision": "8bc1c8e9c8acef05922273f61e1a39f8"
  },
  {
    "url": "assets/js/150.3bb78005.js",
    "revision": "98a47cfd06f3298adeffe098d0feebf2"
  },
  {
    "url": "assets/js/151.b7fe6be6.js",
    "revision": "5ac18efeecccefdfc2bae582e1aa6f43"
  },
  {
    "url": "assets/js/152.8ffe1308.js",
    "revision": "e4b6d23e7be75eca858f8502226fc66b"
  },
  {
    "url": "assets/js/153.bc5b664d.js",
    "revision": "a85c65cec2ef8d31e2c7f0d59284fac2"
  },
  {
    "url": "assets/js/154.b10ef515.js",
    "revision": "6285d15e82b1e599aec5bca81f78aef0"
  },
  {
    "url": "assets/js/155.4f26274a.js",
    "revision": "527c4d8ed1eeadc8d9816f6d6fbd5173"
  },
  {
    "url": "assets/js/156.a845f5e0.js",
    "revision": "883c43a6d5aeb98a6052d32e02c885d4"
  },
  {
    "url": "assets/js/157.c047a605.js",
    "revision": "f513e39d9095b98808df0a3b89c36349"
  },
  {
    "url": "assets/js/158.70a5cbef.js",
    "revision": "46591460ac9ac92927600d7a3d05b506"
  },
  {
    "url": "assets/js/159.f863754d.js",
    "revision": "734b78b956ff5c8e6b5da946e64e514c"
  },
  {
    "url": "assets/js/16.779a848c.js",
    "revision": "0a5c1a1cba50cb462cf5f09aa777aa58"
  },
  {
    "url": "assets/js/160.81a6ef75.js",
    "revision": "81e5bf3cf03781d4c581291c92c4ce23"
  },
  {
    "url": "assets/js/161.93b9bf39.js",
    "revision": "9d269a8f75f57ef2f7fa86b0c65ec30f"
  },
  {
    "url": "assets/js/162.80d68dff.js",
    "revision": "2c9dcbd87c32966575439b7f4c22b0f9"
  },
  {
    "url": "assets/js/163.150ed729.js",
    "revision": "d90bc6d9b809615c70b5cb44c6e48db2"
  },
  {
    "url": "assets/js/164.9dcc9ba0.js",
    "revision": "f0ce21bab518fb4886e4fddb286bfad7"
  },
  {
    "url": "assets/js/165.c4dc1bbc.js",
    "revision": "9e421eff666e71224060348027f04d7b"
  },
  {
    "url": "assets/js/166.14461163.js",
    "revision": "7e9b1c222e399cf77a65c931748fadc6"
  },
  {
    "url": "assets/js/167.74c87ed8.js",
    "revision": "71df44d39bd5c6c8fa7e4d8984ba2003"
  },
  {
    "url": "assets/js/168.429146d3.js",
    "revision": "1f3b1aeb9511519199971b70e7086988"
  },
  {
    "url": "assets/js/169.fd6c5e1c.js",
    "revision": "6420a87ab3c0995e051af4a7b4fc3c49"
  },
  {
    "url": "assets/js/17.a9f088ca.js",
    "revision": "27bcf308ad7cff27e61706cdf514e41b"
  },
  {
    "url": "assets/js/170.81b75636.js",
    "revision": "44c70de97150b619d969251da28cabbb"
  },
  {
    "url": "assets/js/171.3a741cc1.js",
    "revision": "d008faa6323e21865bc283f0bf27aaf0"
  },
  {
    "url": "assets/js/172.be9548e6.js",
    "revision": "b2a1cf2d42d810fb47fc2327886a5363"
  },
  {
    "url": "assets/js/173.39823a70.js",
    "revision": "18f5e3abf70523e6cd783042df06a266"
  },
  {
    "url": "assets/js/174.5d909b1d.js",
    "revision": "39251d73158f4f27a30acd310bd5b869"
  },
  {
    "url": "assets/js/175.fc72d26d.js",
    "revision": "e8c4bd6ac1d2ed2fb034d53e116b1f88"
  },
  {
    "url": "assets/js/176.5c95b117.js",
    "revision": "af3443f2f8046a385fcdc564f83c2b7c"
  },
  {
    "url": "assets/js/177.acb36661.js",
    "revision": "25747ea7bbb7124ccf651b0b87b2967b"
  },
  {
    "url": "assets/js/178.253f4326.js",
    "revision": "91cba1180a004f5f1de14a5f3234ce46"
  },
  {
    "url": "assets/js/179.57f224e0.js",
    "revision": "e97efd1e5a413b27dcca9bbd392a8e77"
  },
  {
    "url": "assets/js/18.2d1f1207.js",
    "revision": "93bcc668a461e0a94f499aeee86fdd1d"
  },
  {
    "url": "assets/js/180.5c18daf8.js",
    "revision": "1667a3e4fa72eba5270ab98820587c64"
  },
  {
    "url": "assets/js/181.95266617.js",
    "revision": "3264e9bdf1fdcec1e49e0f39c4109972"
  },
  {
    "url": "assets/js/182.ae893659.js",
    "revision": "3d0ad27974a53a84e2234e64166e2d1c"
  },
  {
    "url": "assets/js/183.3f798c94.js",
    "revision": "b53ca7277ad7d2c51b2e7d56e95a2c6a"
  },
  {
    "url": "assets/js/184.3a15307d.js",
    "revision": "969bbc7d6736d8ded6439324972d4c6f"
  },
  {
    "url": "assets/js/185.b64d9569.js",
    "revision": "dd09669349d51a754b446374da1cb00c"
  },
  {
    "url": "assets/js/186.f6fef8c8.js",
    "revision": "4b6db8c2d85a0bf38a79657b7b5bfd21"
  },
  {
    "url": "assets/js/187.00162d77.js",
    "revision": "ceeb90b1773f57c33cf4fe47aef7f324"
  },
  {
    "url": "assets/js/188.0e0300e6.js",
    "revision": "e3889beab6ebfb9af7734facf603c1d5"
  },
  {
    "url": "assets/js/189.8742ea8d.js",
    "revision": "ae00fdff3c42d9391192f996d53fe5a8"
  },
  {
    "url": "assets/js/19.05c4e7e5.js",
    "revision": "c45ea5ef645a133c7947f06ae0eff3c5"
  },
  {
    "url": "assets/js/190.b7d228e9.js",
    "revision": "da54e44b378422c45654e8c870671df6"
  },
  {
    "url": "assets/js/191.5b45f2fe.js",
    "revision": "49a7981a894a18761ce23b4bbda7e2fd"
  },
  {
    "url": "assets/js/192.34e74e21.js",
    "revision": "b1162bb1f0bb0d3db0be6b847d462d53"
  },
  {
    "url": "assets/js/193.4471a20d.js",
    "revision": "47196366a96389bb2300e6a16fc21104"
  },
  {
    "url": "assets/js/194.87266f01.js",
    "revision": "705806a4db71facefa9e434dd41044c7"
  },
  {
    "url": "assets/js/195.2b7d85c4.js",
    "revision": "a1fc45b52cf708541aeac0c4344f989e"
  },
  {
    "url": "assets/js/196.3025a8a9.js",
    "revision": "696b8051db95a39b0893d761ecebcc4a"
  },
  {
    "url": "assets/js/197.be7f1f52.js",
    "revision": "e6bf028ffb54dce6f7cb4f70aaf5b61f"
  },
  {
    "url": "assets/js/198.5aeaf5c9.js",
    "revision": "411096fe7bd4a41fdadd358b07da5f3d"
  },
  {
    "url": "assets/js/199.6869ae80.js",
    "revision": "9a0c3b82db00f1f0e7f5c39a32896adf"
  },
  {
    "url": "assets/js/2.6d883d90.js",
    "revision": "c057457803cfc1187404ecab0ac87a54"
  },
  {
    "url": "assets/js/20.0346a1b3.js",
    "revision": "e343a45c1d7655bfb91662c9761023ce"
  },
  {
    "url": "assets/js/200.561a9314.js",
    "revision": "cd6a8463e9f37ff291ec3be16f7d53b2"
  },
  {
    "url": "assets/js/201.3534e4bd.js",
    "revision": "ef102e2e3b897f37f91cc66df7d4e6e3"
  },
  {
    "url": "assets/js/202.56471691.js",
    "revision": "b10c044ed51ff478a81f67bf396c67e0"
  },
  {
    "url": "assets/js/203.c67e8d17.js",
    "revision": "b9e8d1dcdc898261f16589a56586b955"
  },
  {
    "url": "assets/js/204.b19a25c3.js",
    "revision": "eb476a9a845c80a9e5b08e9f1b1bc117"
  },
  {
    "url": "assets/js/205.c3e1e36d.js",
    "revision": "f7fa8d813f4d9e4b8fd73bcd6eed68e3"
  },
  {
    "url": "assets/js/206.800b84bc.js",
    "revision": "7b9bcec90de19e4c39f6c5f9a4c10f69"
  },
  {
    "url": "assets/js/207.14f9ade5.js",
    "revision": "5cb6f7f169ce85f47ad9ad0c82ec4b6c"
  },
  {
    "url": "assets/js/208.839ad6a4.js",
    "revision": "c2569915eca0f7e54a495aa3da7dbe15"
  },
  {
    "url": "assets/js/209.79d86efd.js",
    "revision": "6445da956f41bd890d01eb88df4b0b9e"
  },
  {
    "url": "assets/js/21.7e920733.js",
    "revision": "a5ea629e8b3e78ad6ff936d345ec040d"
  },
  {
    "url": "assets/js/210.02f2af3f.js",
    "revision": "b0055acd04385d9d60b4168e4b002b7e"
  },
  {
    "url": "assets/js/211.74e878d6.js",
    "revision": "212c5bacbb2e986ab5d8ecabe59fdda6"
  },
  {
    "url": "assets/js/212.198958a3.js",
    "revision": "ca7c03068f03cdf46f7acd1e62caf465"
  },
  {
    "url": "assets/js/213.7cc75204.js",
    "revision": "673d678658f1d2b950b66a8fc0946e67"
  },
  {
    "url": "assets/js/214.261653a3.js",
    "revision": "537284a1f3e8ed8e2f91cd5f504532d4"
  },
  {
    "url": "assets/js/215.c2aa5fb5.js",
    "revision": "72e8031db98ede9274d633de41dffa09"
  },
  {
    "url": "assets/js/216.790c103b.js",
    "revision": "60cc525893e128c714c7868efaee5653"
  },
  {
    "url": "assets/js/217.09ae5195.js",
    "revision": "d4113dfb427034d170cd24bcc1c311ce"
  },
  {
    "url": "assets/js/218.d8a8ec24.js",
    "revision": "55d5c72a719b9f19893626f466d59e93"
  },
  {
    "url": "assets/js/219.2d54c1d1.js",
    "revision": "721f418954823302241dc53cdf904ab6"
  },
  {
    "url": "assets/js/22.a9c63e6f.js",
    "revision": "a08db3327a66c73e103c6365425d10de"
  },
  {
    "url": "assets/js/220.80d5ebf5.js",
    "revision": "1a4e2389be2b4ecc4cafe714d14be053"
  },
  {
    "url": "assets/js/221.49262da1.js",
    "revision": "1da2fc180af12c7ad9d931b05388933a"
  },
  {
    "url": "assets/js/222.3d1a2a45.js",
    "revision": "5ecbfec830f40a6c7ba49ae286e70c14"
  },
  {
    "url": "assets/js/223.6acb607c.js",
    "revision": "98b1bf7b5d756fd082f904c96cc95ae1"
  },
  {
    "url": "assets/js/224.092ceaca.js",
    "revision": "8256ec28654690a77d32fb7da487c92a"
  },
  {
    "url": "assets/js/225.74501eb4.js",
    "revision": "4130f9c99641c71ee0fd50ce7b23b77b"
  },
  {
    "url": "assets/js/226.fb420e1b.js",
    "revision": "e4a3a042feae05b41e7c0cf569590502"
  },
  {
    "url": "assets/js/227.7decb9ff.js",
    "revision": "f9e2b987af6d300e76264bca06831747"
  },
  {
    "url": "assets/js/228.b10ac473.js",
    "revision": "816172b4dfeecd900a8291226217662d"
  },
  {
    "url": "assets/js/229.801a19a8.js",
    "revision": "09233bb9f9d829e2a3c6e33b27229c0d"
  },
  {
    "url": "assets/js/23.c757d960.js",
    "revision": "4314ca7ae223255223b9603b62e241b8"
  },
  {
    "url": "assets/js/230.d792fbd9.js",
    "revision": "2f01a7be3ee68c8ae90e9511e6d93cdc"
  },
  {
    "url": "assets/js/231.1f081b4d.js",
    "revision": "0e85d0844169060b7035fddd4e2c632a"
  },
  {
    "url": "assets/js/232.1c6c68ee.js",
    "revision": "b84476358e5adf67d38f19ac026bb2e8"
  },
  {
    "url": "assets/js/233.c931e6c9.js",
    "revision": "dacb6777403d72a80a0347484b90fcc0"
  },
  {
    "url": "assets/js/234.49c45a80.js",
    "revision": "fb8dcc79ed1e8b8ebe2e1987dd1406c3"
  },
  {
    "url": "assets/js/235.a4157275.js",
    "revision": "12135e14e0f9149c52e4072e7471e947"
  },
  {
    "url": "assets/js/236.cde36c1e.js",
    "revision": "7522666808e94ab3e9bd6cc24c9ed43e"
  },
  {
    "url": "assets/js/237.840f2f30.js",
    "revision": "4234330895ed699c0c71e09633754cb2"
  },
  {
    "url": "assets/js/238.da8886a1.js",
    "revision": "ba291e312b74f0629bab1c60a5b1c309"
  },
  {
    "url": "assets/js/239.5fe4abc8.js",
    "revision": "aeeaafcab6db9a348dd05b352462e373"
  },
  {
    "url": "assets/js/24.a86fbdea.js",
    "revision": "f6b9367f39b2a8461858ef2a5da2ee19"
  },
  {
    "url": "assets/js/240.98acf5c6.js",
    "revision": "b8272178a7f634c204a3f998ea42cf3c"
  },
  {
    "url": "assets/js/241.7e498aa8.js",
    "revision": "a6f08150f59fdfa564910ee3fcabe5ea"
  },
  {
    "url": "assets/js/242.23c3b891.js",
    "revision": "b8adbf528cbffe0451588c5cb06fce5c"
  },
  {
    "url": "assets/js/243.04564d05.js",
    "revision": "189ccdf0e3b87be367997e78df9129a0"
  },
  {
    "url": "assets/js/244.58865e04.js",
    "revision": "2f683c212ec94b7bb02992ea66caba58"
  },
  {
    "url": "assets/js/245.c93f57bc.js",
    "revision": "ba764ae21a7090bb6b04f9b3caf69c51"
  },
  {
    "url": "assets/js/246.d4149d4f.js",
    "revision": "e27dd8917147944587fe02faeeded9c0"
  },
  {
    "url": "assets/js/247.2af22a1f.js",
    "revision": "5c66c1aa1d702be054236b2324edeab3"
  },
  {
    "url": "assets/js/248.9d883237.js",
    "revision": "bb0e56032f799bdd4348931fb3d95a55"
  },
  {
    "url": "assets/js/249.bbf8700e.js",
    "revision": "cc600dfcc681138ca7492dd64761c024"
  },
  {
    "url": "assets/js/25.969cc9d1.js",
    "revision": "fc13c311e1a41b4c02f6ad7ca7668271"
  },
  {
    "url": "assets/js/250.085d8b9f.js",
    "revision": "e3dc80fb65f0e3cb4b6e3cb075c7b535"
  },
  {
    "url": "assets/js/251.c6fd73ed.js",
    "revision": "16ede2e529e3068a4a8a1ee77a9b4a3e"
  },
  {
    "url": "assets/js/252.4206169f.js",
    "revision": "11f6962ebcc790360cee470062a0e223"
  },
  {
    "url": "assets/js/253.1b728ac4.js",
    "revision": "c01310d3bf57c19f285beb70a56e19e0"
  },
  {
    "url": "assets/js/254.0c1dd06d.js",
    "revision": "bb3f2ecc43098bf45de7f69f50bdac29"
  },
  {
    "url": "assets/js/255.db4f0ad5.js",
    "revision": "13d0481cd3fdb307248c48809442ecf0"
  },
  {
    "url": "assets/js/256.72e5feb9.js",
    "revision": "6c15405e7852432330a3e11a55dde90c"
  },
  {
    "url": "assets/js/257.775f7437.js",
    "revision": "58fc7ed7f69a1ed0a7ac2a15e96a05d1"
  },
  {
    "url": "assets/js/258.7894b268.js",
    "revision": "fa1e73cd5bd0e33c3d37be281b06f1b4"
  },
  {
    "url": "assets/js/259.22dc0449.js",
    "revision": "b2cba93c449217c407ddc33b1a65420c"
  },
  {
    "url": "assets/js/26.1c84bb14.js",
    "revision": "83507e32e42a0e8bef6f36c2bf7be40c"
  },
  {
    "url": "assets/js/260.67cff4d6.js",
    "revision": "e8087f4a38fa5d0833ed3c8803265d94"
  },
  {
    "url": "assets/js/261.9bac5dee.js",
    "revision": "466eeb0745db6026f037d2dcec3213ca"
  },
  {
    "url": "assets/js/262.c8ec2b7b.js",
    "revision": "7461d2e7267806fd0c075eb7bca77d18"
  },
  {
    "url": "assets/js/263.11818ae0.js",
    "revision": "87ba975999c600e77326d4e1e67ffe99"
  },
  {
    "url": "assets/js/264.2113b8cf.js",
    "revision": "933812f07228f793e04fe5ab7588fb36"
  },
  {
    "url": "assets/js/265.4e8a2a37.js",
    "revision": "08ef98d269346f5be6eaae19d2a9c2ff"
  },
  {
    "url": "assets/js/266.9865ba4b.js",
    "revision": "70d2d6074a4f8f3ffb86aa20fff2973f"
  },
  {
    "url": "assets/js/267.71904ebd.js",
    "revision": "df928c694250be0250f9d912cd556db0"
  },
  {
    "url": "assets/js/268.e1d30d96.js",
    "revision": "137a45ced723d668816824f4787c2a18"
  },
  {
    "url": "assets/js/269.33b45db8.js",
    "revision": "4d21d67ac33e6d0536cb89fff60ab35f"
  },
  {
    "url": "assets/js/27.92a40732.js",
    "revision": "4398069358d99a6cdddeaaa54bc3c2a0"
  },
  {
    "url": "assets/js/270.c4eb4c69.js",
    "revision": "1302ab73a71c8fd4f03f929b8ef23d57"
  },
  {
    "url": "assets/js/271.e999e6f2.js",
    "revision": "d1c15bfc5d93752e52f8d1c1bff7d7fd"
  },
  {
    "url": "assets/js/272.33b9eba8.js",
    "revision": "7a30ea61d7fbe41468b7ebea82a46f0f"
  },
  {
    "url": "assets/js/273.afd13194.js",
    "revision": "b7243672208cf0cc57de539803b18fc7"
  },
  {
    "url": "assets/js/274.6f107994.js",
    "revision": "355522b9309889d08ed645dc77508c1e"
  },
  {
    "url": "assets/js/275.725b6234.js",
    "revision": "26566836d68aa6d4e7f1ddc9fdfc3db1"
  },
  {
    "url": "assets/js/276.9ec3b7c9.js",
    "revision": "cf572b70e77377c45a9cab5d59e99f98"
  },
  {
    "url": "assets/js/277.2954aeaa.js",
    "revision": "635c27e9552d450f2e72cd2734fdce69"
  },
  {
    "url": "assets/js/278.166524e0.js",
    "revision": "a49ce0a88c3958d7a9fa0ca5ed0a00e6"
  },
  {
    "url": "assets/js/279.535589ef.js",
    "revision": "30901d4024d843e267472381c0ac9cd0"
  },
  {
    "url": "assets/js/28.22dc42a8.js",
    "revision": "4c26d971424cfce0b7404012d37744b1"
  },
  {
    "url": "assets/js/280.0e60afb2.js",
    "revision": "3e7acff99bf79b79520ba2b6f85ccb0b"
  },
  {
    "url": "assets/js/281.21436816.js",
    "revision": "fe756ebb975b70aaf62a9fa0bf0b7062"
  },
  {
    "url": "assets/js/282.98068814.js",
    "revision": "b02ed30a6b6b2086686806cdb311a2d7"
  },
  {
    "url": "assets/js/283.3bedc2f1.js",
    "revision": "0dd2405d64b63c4838a0f41cb9161dd6"
  },
  {
    "url": "assets/js/284.1be51feb.js",
    "revision": "61cc49aa9d299ab0ac7aff36626f47cb"
  },
  {
    "url": "assets/js/285.d6207282.js",
    "revision": "c22cc832fa5e5b2ca81c000d95b3efb3"
  },
  {
    "url": "assets/js/286.8fba1704.js",
    "revision": "fddbaea951a2171bcd9508b1fda82669"
  },
  {
    "url": "assets/js/287.319ed061.js",
    "revision": "f54857655aa0e70fbcf6643759b6f9f4"
  },
  {
    "url": "assets/js/288.72adf0c8.js",
    "revision": "4e2fa0dd865b5d983ab875a6182427ee"
  },
  {
    "url": "assets/js/289.25c711af.js",
    "revision": "fe0f2468a2d63d7fae1ce95343387a5e"
  },
  {
    "url": "assets/js/29.01e32fc6.js",
    "revision": "7539506ed749be8acf937e3095715154"
  },
  {
    "url": "assets/js/290.6ab0fa93.js",
    "revision": "7a361f85a88020aa479f6aa8b36479cc"
  },
  {
    "url": "assets/js/291.71839f04.js",
    "revision": "90d1a96ecfb859262008d334787056f5"
  },
  {
    "url": "assets/js/292.95a44dcd.js",
    "revision": "e157d896c5599134344e86e283c59ee1"
  },
  {
    "url": "assets/js/293.5c52f221.js",
    "revision": "7cc9b5dcb15bfffc1b80b460feab228a"
  },
  {
    "url": "assets/js/294.d6054ad4.js",
    "revision": "262507569f3fd7fa3a5b76973e9f8ec4"
  },
  {
    "url": "assets/js/295.149a1411.js",
    "revision": "7b37438094cadd5d8c0492e928ee3285"
  },
  {
    "url": "assets/js/296.0a39d58a.js",
    "revision": "b513c50bdb9d6c75df1ec10a5e4cd32e"
  },
  {
    "url": "assets/js/297.4e327df5.js",
    "revision": "377e47f3e523fee55e4952a5c07e3c47"
  },
  {
    "url": "assets/js/298.f1f6d174.js",
    "revision": "282309ed8eb02807433e96b367c6fccb"
  },
  {
    "url": "assets/js/299.0658e63c.js",
    "revision": "29b2a09cc805edf078b0e00f11b29669"
  },
  {
    "url": "assets/js/3.07033776.js",
    "revision": "caf5f83f0d15c6eaf19f27876b592b22"
  },
  {
    "url": "assets/js/30.25f9540d.js",
    "revision": "14416969ee59106a91e4aa970ab2bb4f"
  },
  {
    "url": "assets/js/300.b3121107.js",
    "revision": "6e91fafb79e6d2e401c3635c87d1a04b"
  },
  {
    "url": "assets/js/301.2b95ad2f.js",
    "revision": "22aa0526c06651777d73f81f325e0cd9"
  },
  {
    "url": "assets/js/302.47b986c1.js",
    "revision": "670dd653460d264c3428b7ae7a0d7565"
  },
  {
    "url": "assets/js/303.e68880d8.js",
    "revision": "b12e7dc3da1f2d2f3a6919ef0a3c004b"
  },
  {
    "url": "assets/js/304.ad41c411.js",
    "revision": "ca249cf12e4a119b4652ee42515fcf2e"
  },
  {
    "url": "assets/js/305.f6f9ddcb.js",
    "revision": "3bfac9a5262d3dafa17dc28f91afd095"
  },
  {
    "url": "assets/js/306.adfaa31c.js",
    "revision": "f19383b12313de4f2e81836793c2e4be"
  },
  {
    "url": "assets/js/307.17b95592.js",
    "revision": "df53700f1aacb3a53001d2f26801859c"
  },
  {
    "url": "assets/js/308.4a23438f.js",
    "revision": "6c31a4bba9c2d1b123e4ac2170ac64cc"
  },
  {
    "url": "assets/js/309.fa69f866.js",
    "revision": "a49cdd2e06974cb070912a833babd85f"
  },
  {
    "url": "assets/js/31.40aefb1d.js",
    "revision": "06023e52ebba4e046aa7f069ff883dea"
  },
  {
    "url": "assets/js/310.f4f10e3c.js",
    "revision": "018531b9acec59fadc8a8e8f293fff60"
  },
  {
    "url": "assets/js/311.daa0cfd1.js",
    "revision": "fab10a86c56cf373abab569f1f10645e"
  },
  {
    "url": "assets/js/312.fc682ae1.js",
    "revision": "03e24d575284d80dabf875a4ea820aaa"
  },
  {
    "url": "assets/js/313.d0bd2825.js",
    "revision": "9ab9ac4646ea27c6c03b5269416479d0"
  },
  {
    "url": "assets/js/314.96d8b917.js",
    "revision": "695c9f3a1ed70a886753c0910424df14"
  },
  {
    "url": "assets/js/315.cdcec4eb.js",
    "revision": "13c443ba7029ab8f5284693f452e87bd"
  },
  {
    "url": "assets/js/316.39aa2987.js",
    "revision": "4ca721651acf73359e451b197a245dc3"
  },
  {
    "url": "assets/js/317.d0600027.js",
    "revision": "41764e2b9bd03062e1f265cfa563ea00"
  },
  {
    "url": "assets/js/318.b9e69ede.js",
    "revision": "7931544a9513e8756638cfd1229527a8"
  },
  {
    "url": "assets/js/319.421f82c8.js",
    "revision": "ff6c3b51f6c2895b4960253c9ce50ab0"
  },
  {
    "url": "assets/js/32.ab00ab3b.js",
    "revision": "4aa69687030f18dc9e3c05f62f265049"
  },
  {
    "url": "assets/js/320.f4ea8aa2.js",
    "revision": "a4d79530669a0834a83a65baf928ced3"
  },
  {
    "url": "assets/js/321.790a8c0c.js",
    "revision": "8614304bb8fddfda352bf1e17ec60fd3"
  },
  {
    "url": "assets/js/322.bb3dc32b.js",
    "revision": "a2fb5d93ba5e58c00f41ea2bdd80d2a2"
  },
  {
    "url": "assets/js/323.227ec39a.js",
    "revision": "c57b3fc5d64de1585a46c1e23b683dca"
  },
  {
    "url": "assets/js/324.b14ef224.js",
    "revision": "6d7f12435afe994e0bbe5d6ff9ceed14"
  },
  {
    "url": "assets/js/325.4c5fc2d2.js",
    "revision": "1c2189885be0f521c32d3ff7802c4714"
  },
  {
    "url": "assets/js/326.c2bd15f6.js",
    "revision": "40cdfc547245b828c46a5dc2f8f3d635"
  },
  {
    "url": "assets/js/327.b612c125.js",
    "revision": "f11f0aef77e8c372714efd8c560e064c"
  },
  {
    "url": "assets/js/328.78e4c2c0.js",
    "revision": "b331b60acd66ee4f1c3c01a4425aab00"
  },
  {
    "url": "assets/js/329.64c15a66.js",
    "revision": "8d2385950d5c8bc5612e7f210ec62fd2"
  },
  {
    "url": "assets/js/33.1e62ca3b.js",
    "revision": "f04147c4524fa292cd8acd8956bcd1bc"
  },
  {
    "url": "assets/js/330.0dfa716c.js",
    "revision": "c2e10e42dc39d2bf0791d3429b6406c4"
  },
  {
    "url": "assets/js/331.a5879ccf.js",
    "revision": "898f18f4b4541426b45ad51cffd81e1e"
  },
  {
    "url": "assets/js/332.47dc168d.js",
    "revision": "ada571fe3ebd881bd4ee9a963e9ddbb9"
  },
  {
    "url": "assets/js/333.2807ae11.js",
    "revision": "23364c7b331d575f468bce8f719966d3"
  },
  {
    "url": "assets/js/334.c0cdad84.js",
    "revision": "b4fbdf66925d51f2ffb56aacd0a1a4da"
  },
  {
    "url": "assets/js/335.47b98cf2.js",
    "revision": "79034307c04022a167816b71b4cbbabb"
  },
  {
    "url": "assets/js/336.970a5d2d.js",
    "revision": "59a435f84dc55d6395e1b8e4259d77c9"
  },
  {
    "url": "assets/js/337.74c4fde1.js",
    "revision": "cc7d1170f9f25bf7ecdce1250c8067f0"
  },
  {
    "url": "assets/js/338.dc72c937.js",
    "revision": "a79532b9dbb65d9ab26ff4c820e534d6"
  },
  {
    "url": "assets/js/339.e13be6b0.js",
    "revision": "79aa39ef3329b1a584f4a4cdf22a72f1"
  },
  {
    "url": "assets/js/34.2e1b4812.js",
    "revision": "cd5867f4a5a6a0cf0d66b24ec8201dfa"
  },
  {
    "url": "assets/js/340.b3701193.js",
    "revision": "ff88a26975efd148b894f8e7c18ab33d"
  },
  {
    "url": "assets/js/341.4f762960.js",
    "revision": "edaea78b9fc8291269dd2272a559144b"
  },
  {
    "url": "assets/js/342.22a55836.js",
    "revision": "8db6c5b153fca9dd3e6c3ae130fe5be1"
  },
  {
    "url": "assets/js/343.7cc2c341.js",
    "revision": "ed1819c168006e467de0b6f369aedb5c"
  },
  {
    "url": "assets/js/344.a84d74ac.js",
    "revision": "c4d10f9fcf62f4d5172e134d087729b2"
  },
  {
    "url": "assets/js/345.116d944b.js",
    "revision": "53b621e32265ba9e69d1b0b837e153f4"
  },
  {
    "url": "assets/js/346.ca5271f4.js",
    "revision": "c6635a631f4e40ec426983f4efbc6e33"
  },
  {
    "url": "assets/js/347.8640deae.js",
    "revision": "1638e5ab197df6fa289827e81194d6f3"
  },
  {
    "url": "assets/js/348.7185e592.js",
    "revision": "c4afad89d75b0b9b30deb856498b6fd6"
  },
  {
    "url": "assets/js/349.edece56a.js",
    "revision": "f1b29fea194bcf1eff7ad470e66b352b"
  },
  {
    "url": "assets/js/35.768eb05f.js",
    "revision": "ba0ed26e3c9b9964320d2ce13ee64516"
  },
  {
    "url": "assets/js/350.e96edf06.js",
    "revision": "9347b54c0b2a94bf5dd49f885c054c15"
  },
  {
    "url": "assets/js/351.420fd329.js",
    "revision": "542fb9aa5ad99041a23fab9ead975b55"
  },
  {
    "url": "assets/js/352.3ad43be0.js",
    "revision": "835592d364a860133b60c86131f31e9c"
  },
  {
    "url": "assets/js/353.bb392d62.js",
    "revision": "f9d1e7970510b71bb7c312fe48ec4bd9"
  },
  {
    "url": "assets/js/354.a0ed17d0.js",
    "revision": "dad8c052303515483f6f8cee7367e0a5"
  },
  {
    "url": "assets/js/355.2617493e.js",
    "revision": "e94cd6aeb355105330dfdd1b655346c4"
  },
  {
    "url": "assets/js/356.f8a5c376.js",
    "revision": "e85529d8f4f5983f16dd6af06a346704"
  },
  {
    "url": "assets/js/357.cffc71d3.js",
    "revision": "dc9608d37737a6ba3abd88c70242c7ab"
  },
  {
    "url": "assets/js/358.251f3a85.js",
    "revision": "525f687e295756248f1b196cd281b982"
  },
  {
    "url": "assets/js/359.da2c552f.js",
    "revision": "384fd327a38ca6f887ce1a820bfb309a"
  },
  {
    "url": "assets/js/36.994eef91.js",
    "revision": "4a813b1c7eed6208048a37dc5e9e3608"
  },
  {
    "url": "assets/js/360.567b6165.js",
    "revision": "3b3a6ebcdce012dca52bfc205e2551de"
  },
  {
    "url": "assets/js/361.2c4bda5b.js",
    "revision": "4b66a1a3103b5ada1ce4d54ab127bcab"
  },
  {
    "url": "assets/js/362.07ad78b0.js",
    "revision": "9c3894e53224915fc5615200adca73de"
  },
  {
    "url": "assets/js/363.56f3da30.js",
    "revision": "ab0b878b5392e1893bd5eba22d58104c"
  },
  {
    "url": "assets/js/364.b725b850.js",
    "revision": "7959077b83ec7cf51776bcfc6a124aba"
  },
  {
    "url": "assets/js/365.64356fa4.js",
    "revision": "0e92464df7f76b1497a4b291319caf71"
  },
  {
    "url": "assets/js/366.84d17a0f.js",
    "revision": "9751f2d10700df005374f4cae6b2f1cb"
  },
  {
    "url": "assets/js/367.1a02e657.js",
    "revision": "abae428fb37fb09cae0638647e712fa3"
  },
  {
    "url": "assets/js/368.c83dbc45.js",
    "revision": "d571be4b5f52a61a996bf0223a42131b"
  },
  {
    "url": "assets/js/369.f57699b9.js",
    "revision": "ac2a438faa512f1062cdd8e15bf20782"
  },
  {
    "url": "assets/js/37.45c849b7.js",
    "revision": "ab9af222e562bcc05393d7b742d69522"
  },
  {
    "url": "assets/js/370.c292678b.js",
    "revision": "10159818075cd316c2911f8404068390"
  },
  {
    "url": "assets/js/371.a8027106.js",
    "revision": "dee3f2e30f8273cc8566e44bff4ca124"
  },
  {
    "url": "assets/js/372.43637703.js",
    "revision": "9d4b8eca8c4dae6c0086bc71a63d8efe"
  },
  {
    "url": "assets/js/373.d276a132.js",
    "revision": "145645ebf8c44966bf9051238fce7569"
  },
  {
    "url": "assets/js/374.dbe940ac.js",
    "revision": "9ba24d3f3602bf8cb97513adde552bf3"
  },
  {
    "url": "assets/js/375.bbab08a9.js",
    "revision": "1100eeb9d884ba7d37cdcce2af3104da"
  },
  {
    "url": "assets/js/376.72344595.js",
    "revision": "62716f54f2472330ca54ffbe936b8e82"
  },
  {
    "url": "assets/js/377.b8e2e3fe.js",
    "revision": "4e63e5a258f2b5907a4569cf6dcb25c2"
  },
  {
    "url": "assets/js/378.17cfb6a0.js",
    "revision": "38ec5986831f846bf0aeb2fe6d954ee9"
  },
  {
    "url": "assets/js/379.2a9b255f.js",
    "revision": "0ee1b4df58bba148197a3ce8963c16a5"
  },
  {
    "url": "assets/js/38.873a5f60.js",
    "revision": "5b4a5d201ce5357d28cf7ec385153597"
  },
  {
    "url": "assets/js/380.3885a05a.js",
    "revision": "75e3e33106ee10eef10ee6455ebb44fa"
  },
  {
    "url": "assets/js/381.f4c2c3df.js",
    "revision": "95e20cbef91554bcf3940df368764d41"
  },
  {
    "url": "assets/js/382.69317645.js",
    "revision": "69ff841217cc6fe29bf320face6c88a5"
  },
  {
    "url": "assets/js/383.532a5ae7.js",
    "revision": "2f6838524f48c4be0a86e93a08f6631f"
  },
  {
    "url": "assets/js/384.fe78a869.js",
    "revision": "b7fee3f49b1f3104720db648bf3b41b0"
  },
  {
    "url": "assets/js/385.7994a893.js",
    "revision": "3ca7b23169e2acdb63451250cff88f2d"
  },
  {
    "url": "assets/js/386.903033bb.js",
    "revision": "622ede5001d836a294666cd522a8de9e"
  },
  {
    "url": "assets/js/387.4bfc1bbd.js",
    "revision": "c0f18f228110284c75868da5a1287cdb"
  },
  {
    "url": "assets/js/388.23ee7bf8.js",
    "revision": "bdd2f612f1819dbbdb3411599381cc97"
  },
  {
    "url": "assets/js/389.5763103a.js",
    "revision": "0ad30a64981dc27ed09dcd52fb66d28b"
  },
  {
    "url": "assets/js/39.752533d4.js",
    "revision": "217639f6d1c82449d03a14c3562c0db5"
  },
  {
    "url": "assets/js/390.23b1d293.js",
    "revision": "e2357bbb6f67e1fe3aa40c997178387b"
  },
  {
    "url": "assets/js/391.efc8419e.js",
    "revision": "3bd6d8d311dd91dd3f943d67891723c6"
  },
  {
    "url": "assets/js/392.7fe938e3.js",
    "revision": "307130e6c90aba02fcea60bc0e494a92"
  },
  {
    "url": "assets/js/393.0ad1ff68.js",
    "revision": "26c2a2c599b90317e38bd395e6a476b1"
  },
  {
    "url": "assets/js/394.63974eb1.js",
    "revision": "076b606ff2dad92407293f8f14f42a95"
  },
  {
    "url": "assets/js/395.ba3e2b8a.js",
    "revision": "dc4b9414483f42fa7b56b88f9e1880c1"
  },
  {
    "url": "assets/js/396.51927ee4.js",
    "revision": "18422a20b7c1b6d47ec1bb13e93b9909"
  },
  {
    "url": "assets/js/397.3288f0df.js",
    "revision": "2e12fd1bd6451ca8c342a315ccba8e46"
  },
  {
    "url": "assets/js/398.c0ce966f.js",
    "revision": "8fb79747361413e611c3b0869e4f001e"
  },
  {
    "url": "assets/js/399.40bc0a98.js",
    "revision": "43dbcdf0cc139ebda1aeb1252c431058"
  },
  {
    "url": "assets/js/4.6c07f34d.js",
    "revision": "128f88596af107889e7338b5e1697d8c"
  },
  {
    "url": "assets/js/40.026c1d77.js",
    "revision": "d80a3b01ed44151439f6dc870f8300fe"
  },
  {
    "url": "assets/js/400.311126f0.js",
    "revision": "c5cfe81a3b74a504830eb7ee4c1f3f52"
  },
  {
    "url": "assets/js/401.fd21e212.js",
    "revision": "5a863069d7de9fca6a0786f53b4f3592"
  },
  {
    "url": "assets/js/402.1f40aae3.js",
    "revision": "8cf420068ea5419ce1bee46e9acc14f2"
  },
  {
    "url": "assets/js/403.da115949.js",
    "revision": "169f5bb9b14bcb7f6abf4d820b2370c4"
  },
  {
    "url": "assets/js/404.6760a10c.js",
    "revision": "104bbcd7a69d2370010b7a3684c9173a"
  },
  {
    "url": "assets/js/405.4b90b05e.js",
    "revision": "117ec8f6c221b35a0cb02877c71f951e"
  },
  {
    "url": "assets/js/406.128a5577.js",
    "revision": "99bd97969c9bee34ff78fb148c36887f"
  },
  {
    "url": "assets/js/407.487fd337.js",
    "revision": "90eefeebbd78741af245b82a38b21722"
  },
  {
    "url": "assets/js/408.8231de65.js",
    "revision": "9a4cc135baf95b404d889986fb0fd66c"
  },
  {
    "url": "assets/js/409.c76611de.js",
    "revision": "f3a81b845ff82b4bda96a9d03306116a"
  },
  {
    "url": "assets/js/41.325a63a9.js",
    "revision": "b38735e0229dbb0afd1479d805884769"
  },
  {
    "url": "assets/js/410.094fa294.js",
    "revision": "5ebdcb64a3902d47c4d515bde21a2acd"
  },
  {
    "url": "assets/js/411.79eb9c2b.js",
    "revision": "c2fa1cd4f3e42f1810c2ac5481e3aac7"
  },
  {
    "url": "assets/js/412.cb82a19a.js",
    "revision": "72434af52d79ad7d077a3ac9d6bcd100"
  },
  {
    "url": "assets/js/413.26c51e4d.js",
    "revision": "d21ec7bb16075b9e3d89b8159c9e1bd9"
  },
  {
    "url": "assets/js/414.b12eba71.js",
    "revision": "cbf65002ccbeb4939eaa21dba70d0bc1"
  },
  {
    "url": "assets/js/415.badee827.js",
    "revision": "f934f7c74bc76f76d4ef26bc63781890"
  },
  {
    "url": "assets/js/42.b1f20b47.js",
    "revision": "25f5d34f102ae516fc64920b6786c3d8"
  },
  {
    "url": "assets/js/43.9d07d8fe.js",
    "revision": "c34600f321ce27a392a099268fc561f6"
  },
  {
    "url": "assets/js/44.87ee01aa.js",
    "revision": "310334f9e6217193a32dedf8997c043b"
  },
  {
    "url": "assets/js/45.92d6ac5c.js",
    "revision": "94dd34a78860c644c823e8d699ead92d"
  },
  {
    "url": "assets/js/46.a8a688f3.js",
    "revision": "d778884453302cf4f27bb97cf6225eb3"
  },
  {
    "url": "assets/js/47.831958fc.js",
    "revision": "907f699552e406e74d13907928acef5d"
  },
  {
    "url": "assets/js/48.ce173f53.js",
    "revision": "0b7fb1ef6ca8872d50e075dd63dc5600"
  },
  {
    "url": "assets/js/49.0e17b18b.js",
    "revision": "27d312f8ca728e99b1c7c7c6c75b0025"
  },
  {
    "url": "assets/js/5.70f8338d.js",
    "revision": "5967a14b909a10b7a09d339d43444b9b"
  },
  {
    "url": "assets/js/50.90c594b9.js",
    "revision": "b5433bba023dbca9ff5a9ae619509756"
  },
  {
    "url": "assets/js/51.38aa390d.js",
    "revision": "e47da518e193f47a81eed7a6ffbc752f"
  },
  {
    "url": "assets/js/52.ddf4c69c.js",
    "revision": "2f5d582d96f454b30cd2caf643e6d35e"
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
    "url": "assets/js/55.1f0a2eaf.js",
    "revision": "84b6f12c8c4ba3e02954f25975717844"
  },
  {
    "url": "assets/js/56.eae7c241.js",
    "revision": "b2047388190d0eb3effa6229c7544094"
  },
  {
    "url": "assets/js/57.e3280f1e.js",
    "revision": "2ea81761d4ee5fdb99d917b6fcc7c748"
  },
  {
    "url": "assets/js/58.4edffd5c.js",
    "revision": "3438f1e2229fc1af5998d24e5465bb02"
  },
  {
    "url": "assets/js/59.cd2f5838.js",
    "revision": "755399c62bde0dff6a3a85b8f8220995"
  },
  {
    "url": "assets/js/6.9b0fccfc.js",
    "revision": "e70ab4c329012d11d993be73f1d9ef29"
  },
  {
    "url": "assets/js/60.2568eafd.js",
    "revision": "f16383fcb523666ccbeb7bd308136c13"
  },
  {
    "url": "assets/js/61.9ade8c29.js",
    "revision": "cb55deb432a22c32064f755daf5b6205"
  },
  {
    "url": "assets/js/62.8fe79ab5.js",
    "revision": "7170527a1dc21b4589e9424744ef7c5c"
  },
  {
    "url": "assets/js/63.1945f31c.js",
    "revision": "3aa34f9eb737c4c7b3ab608dd09fd8b0"
  },
  {
    "url": "assets/js/64.b16c479b.js",
    "revision": "da75575f3c20ea20a6b8ee8028d29aa2"
  },
  {
    "url": "assets/js/65.43167a05.js",
    "revision": "336f2811c92d1c2c5436f39534a7d5e7"
  },
  {
    "url": "assets/js/66.dfa6c2bc.js",
    "revision": "e630aea8d9709a5725b383932a111254"
  },
  {
    "url": "assets/js/67.53d8742e.js",
    "revision": "feaa3a6c3099f141fc5bbbc30e540084"
  },
  {
    "url": "assets/js/68.afa25692.js",
    "revision": "b70cc16c30ef321cd84cb7d0595f734c"
  },
  {
    "url": "assets/js/69.52c75dd3.js",
    "revision": "bb724363744c5d26b585eecec7189322"
  },
  {
    "url": "assets/js/7.c9bb5070.js",
    "revision": "048529db1f92657f15a2f2766c60bcfa"
  },
  {
    "url": "assets/js/70.849e6314.js",
    "revision": "b550ca42f54cced5b33e5915a83454ed"
  },
  {
    "url": "assets/js/71.9db360d4.js",
    "revision": "9712b240f5db1433c6aa6e4acf51822d"
  },
  {
    "url": "assets/js/72.9193a6cb.js",
    "revision": "90253cd05794146184dc6f90634a35d0"
  },
  {
    "url": "assets/js/73.b52e0552.js",
    "revision": "5c025e88fd6428741414145af1b728ee"
  },
  {
    "url": "assets/js/74.27920396.js",
    "revision": "214fcba567d1677a735964a94463574d"
  },
  {
    "url": "assets/js/75.d94de746.js",
    "revision": "4d8de79ba24eb19592b87d2b2b62695a"
  },
  {
    "url": "assets/js/76.fcc8ded9.js",
    "revision": "907ce35b1aba356da4cf3da0ecf191c3"
  },
  {
    "url": "assets/js/77.c0e1c589.js",
    "revision": "e72c67f1688ad3d1beac8dce5436f8bb"
  },
  {
    "url": "assets/js/78.2e6bb106.js",
    "revision": "91a7f9d87c80e372f68b6dba6802a365"
  },
  {
    "url": "assets/js/79.96d60e65.js",
    "revision": "ddbbb407cd74ed83c14934dcf7082c67"
  },
  {
    "url": "assets/js/8.bf1da1fa.js",
    "revision": "c0a1a431cc1905d78044661db476ca6d"
  },
  {
    "url": "assets/js/80.b8b694a6.js",
    "revision": "ecc34e190ad4058c7e4deb71d1f00a82"
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
    "url": "assets/js/84.5b156b9a.js",
    "revision": "a264dcaa77f07590248efb5b4f42c399"
  },
  {
    "url": "assets/js/85.2610809b.js",
    "revision": "3b7ffece11620433507a08eb55091895"
  },
  {
    "url": "assets/js/86.e9586064.js",
    "revision": "0db9076801fe06ad447d947b16893ad5"
  },
  {
    "url": "assets/js/87.6591a193.js",
    "revision": "5102a5b59054a11f76d150614119783c"
  },
  {
    "url": "assets/js/88.00af7be8.js",
    "revision": "7c43d3091421c8d1b21b6400cc9d611a"
  },
  {
    "url": "assets/js/89.fc7a1224.js",
    "revision": "88d2e52b7af6aadab61acbf3c7e7ec35"
  },
  {
    "url": "assets/js/9.e0978561.js",
    "revision": "233b72bca617860264863763461902a9"
  },
  {
    "url": "assets/js/90.1511d3a2.js",
    "revision": "5ac271a2d78aa443b710a43222060e62"
  },
  {
    "url": "assets/js/91.0cab3d66.js",
    "revision": "9eab9ba0e2a73be8a9435ae0ba853d56"
  },
  {
    "url": "assets/js/92.c4bcb3cf.js",
    "revision": "70e6cbe9b223a6fa090ff86b94ee9728"
  },
  {
    "url": "assets/js/93.45e09863.js",
    "revision": "907aa2da99637bc88df7458b532c4cc6"
  },
  {
    "url": "assets/js/94.2d5f6f8b.js",
    "revision": "0da61e87013f82aa7f6c4f346ea95f1d"
  },
  {
    "url": "assets/js/95.ecb79223.js",
    "revision": "cfcc783ecdad14bf3b0b38dbed609cef"
  },
  {
    "url": "assets/js/96.cb1c2fa0.js",
    "revision": "e86f78bf8701fefb9f2b839828b33e7e"
  },
  {
    "url": "assets/js/97.fe4a73a1.js",
    "revision": "7f7249ad115ee4119f220441b8647eb7"
  },
  {
    "url": "assets/js/98.c87572af.js",
    "revision": "de55be543041247e6883c9f75168fcc4"
  },
  {
    "url": "assets/js/99.31b3d775.js",
    "revision": "3097881754baaa29c8eec03fa5493640"
  },
  {
    "url": "assets/js/app.7059b4a8.js",
    "revision": "0c4fedc3df6a98bf2b556d72f2e45dc0"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "5f55e96ba99e14db896f49a4e9cd3079"
  },
  {
    "url": "blockchain/solidity.html",
    "revision": "42eb75b467fde231ba30d23fc3bc251f"
  },
  {
    "url": "common/architecture.html",
    "revision": "fd082c3254f4d078ea40a6b5e750c289"
  },
  {
    "url": "common/code-structure.html",
    "revision": "b2bc309f5efd762103cb2ef57e42d711"
  },
  {
    "url": "common/crawl.html",
    "revision": "1a640b095df8d8ba20c429097d356178"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "336c1880d020535000e3304a7cf359f2"
  },
  {
    "url": "common/debugging.html",
    "revision": "49e264065a441f2610251ce41ee535c0"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "0ed827e12aa74478aa58f0a6457f8f9e"
  },
  {
    "url": "common/document.html",
    "revision": "b7c4e4ca430b31763cca877d987c14c0"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "59036008d44ca512d1702a375c85e55f"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "8c7510326accea49674a4d6dc65a1add"
  },
  {
    "url": "common/index.html",
    "revision": "85b87367e16796538e5857ae759166f9"
  },
  {
    "url": "common/optimize_be.html",
    "revision": "577d90b406e7498a1ad303fa7a3c4801"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "d65718c912d5bfaa71052df6071e5ffb"
  },
  {
    "url": "common/realtime.html",
    "revision": "74b75295bcfe47fc63e65381412156a3"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "070e73e5946e2b3a91f05593a502a137"
  },
  {
    "url": "common/refactor.html",
    "revision": "facc10fc9aea6cfda57d297c674623d3"
  },
  {
    "url": "common/seo.html",
    "revision": "703b4765b886156a44bf82b4f0d01dd1"
  },
  {
    "url": "common/use-case.html",
    "revision": "3f7464e3c33a0284aa5c89ede26d9c22"
  },
  {
    "url": "css/box-model.html",
    "revision": "621bad2ff1afca52fe519cc2a28177f5"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "922664716373e04d7c69ee39a94fce40"
  },
  {
    "url": "css/css-flex.html",
    "revision": "a260582b908874834327af2559f896a1"
  },
  {
    "url": "css/tricks.html",
    "revision": "589a4168f6a78230ddc57fa4b15e42bf"
  },
  {
    "url": "db/architect.html",
    "revision": "99ace18b3fe5d9d7a3cdac235d54b747"
  },
  {
    "url": "db/cassandra.html",
    "revision": "5d16e00fbd7f4b784025602ce2ad00a1"
  },
  {
    "url": "db/couchdb.html",
    "revision": "acc7afbec368106ec44df74c344a4425"
  },
  {
    "url": "db/db-concerns.html",
    "revision": "486ea820b13a7155397e332afd53c243"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "8e6deff4814d25923fb30fe7d37d3b49"
  },
  {
    "url": "db/db-vs-blockchain.html",
    "revision": "22f75023b8973b881095587bf0a87973"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "01200819242668c579db5122dc843615"
  },
  {
    "url": "db/mongodb.html",
    "revision": "8cd4da3c63eca0c49a75f22bbc113cd5"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "40850cc23f2cc83adce289f53e6f3a68"
  },
  {
    "url": "db/nosql.html",
    "revision": "07beb257643d0f7754051700811db3ac"
  },
  {
    "url": "db/optimize_db.html",
    "revision": "adb702af3add5c014c4b30acfe13019b"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "1c1efae4a122237cd67d82a52d8864d9"
  },
  {
    "url": "db/postgre.html",
    "revision": "2da86573ba0fc2186be8c290c0efaec5"
  },
  {
    "url": "db/redis.html",
    "revision": "d39be74993bf6d37380c9b5392201b27"
  },
  {
    "url": "db/tx-isolation.html",
    "revision": "cee29815d05c68ce51f224513cf58cac"
  },
  {
    "url": "db/use-cases.html",
    "revision": "44df2aabbbdc9d19c23bf87263cba2c6"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "35ded5f26c6b873e204d91fe3b4e0385"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "0c7db3d45172cf61d41a3b11b0b9e339"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "04628daf9df40665daa1908eaf8b22dc"
  },
  {
    "url": "fp/fp-ts.html",
    "revision": "b7e757ea1169b3836099466d1283bb72"
  },
  {
    "url": "fp/functor.html",
    "revision": "4f01a0565e0ef6ffda7e612a9fa890f4"
  },
  {
    "url": "game.html",
    "revision": "5fbcb0e21c498bd7dc0180fbae56ed9b"
  },
  {
    "url": "go/clean.html",
    "revision": "d78267007fedc971ac934a1bf9b3a113"
  },
  {
    "url": "go/index.html",
    "revision": "f99e5e6d9e064e5a54902ac37feeb69a"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "5d383e1f4850c8e3f48d3c3b5b49b2f7"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "67821327055adf4f1658d0c4cf51fff4"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "22b26f3d6be343d0472b355742c58c46"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "4e2919efb569a85244183d341ff87864"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "418eb79d7b43bbd4ad86f3c7cbb80240"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "bb41c57b2a272d6ecc4faad93d65a9a5"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "c9713de26fddacc3c118451f9136b19c"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "a8b035a583de5de183908f564c43880f"
  },
  {
    "url": "index.html",
    "revision": "53f9d8fd719be47fe7c2addbec1a285b"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "b2d658c7fa23788d82385848b21217ed"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "daa999712a61e380ab7f9e8d9d9438b8"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "1156dde80a1d1d20828aef9834a047f5"
  },
  {
    "url": "javascript/closure.html",
    "revision": "4692b2e20af6a5f85f8e75439b329e1c"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "a54234fce39a1db9846c0b30e0f6046d"
  },
  {
    "url": "javascript/eslint.html",
    "revision": "421ea9bd97ee1978c71983bd68e21adc"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "fe245a5e638f8e2093f878b5e46e3cf2"
  },
  {
    "url": "javascript/nestjs/nestjs-cqrs.html",
    "revision": "a61333e66a4f095ea7f4fdcc3cd2731e"
  },
  {
    "url": "javascript/nx.html",
    "revision": "7e748f107c604b903a97d0b16ddacc55"
  },
  {
    "url": "javascript/rxjs.html",
    "revision": "36f55b69451de0ac5f8cfd189d6272ee"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "7f3cb60e340466d92d96d97bf495bc3c"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "fbeec5569a0652bbaade4fcc280442cd"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "87034836eb36c58de37d350ef83dec50"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "7352ea1317dbcc1ebad5beaf8a2c8d8e"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "a54386c231feeb54c0a6e975c6cc78fa"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "cee1cdf7800b44c9c81dfb4d30cd7447"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "5ba64a296f9a35a17bf3e90e33772491"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "1d4db5971c59b863f57cf489bedc7d70"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "82f66e40ba1c15f319548bfdd4df7146"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "fb8c1b55bb51c3cb841858d09807d520"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "28b84068cf18b48b550843733a926b79"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "a1dbf88cb813fe01d1508dff153da1e2"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "32407d5c73c0bf5862bf0b17b74a2daa"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "967c06a0f608870c2f65b9f6f80abcd7"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "625212acc4a320e0f1f8a1a2abc5a3e7"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "b42a0218717847adefd281931cc3d0d9"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "56b7a04112f27cc5d4776e8061bde9af"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "45fd7956018138800bebbd3b834df6fb"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "d04ba9345949e007c9656466df265fb8"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "17a02fd45d02bd64f0d9ed561fbb2944"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "5a177b56f1c23f8004a5021f4402f9b7"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "fdbccb42e8ae93222df2aa60c48dd5d7"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "26de175eb2f035c603bbd4f2b09e3e54"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "05745c970c5d3262e6e8d61bb5f2158a"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "ed2bbae187722fb77214a2cc1953d173"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "b6805f5db40a8d84ac8c049ce92d7c7f"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "774c6fc05cbfac94f7db8ec62e156359"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "255d6819784b4a9f18ef48929cf1dfc5"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "581bb044acd49d4bda5559359a227c56"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "de2ee5f3f94952ca5ab15fd28feae60a"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "c04f78f302b5be9330c69a7cebe70a0e"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "2639fa40a1a89cbeae8ee1f37752400e"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "f643f6ae9caf06d9c528798af3a63290"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "b93e376a0e2906ce78fed1e2bf31d608"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "1caff38626900cb773908f9052ba4b52"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "ab86a914f74195050dec1216849c9f31"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "5c02a1838af0a907b6ef02fe2472476a"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "5e679207969925d7d8150cc7b4569aac"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "6e396ac357a2d5ec91d0f9158a099d31"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "f256f6c47ca5366ff4119aaceb4c2dca"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "e53b0af5c593634a9e503e1583c2d7f1"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "81a50038cfde054ae069f3cd950ebe35"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "c0f39f6ccb4369b6234c062a229e987b"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "18b12ea2a227fbee1cb30e85eb13d5f4"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "318e6de45dda3f68bd9de2858d8d9e48"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "f4b1baae6a4540e78518ac6272248d22"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "cc63b8f08791497a3ea4ec5bca417fb1"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "2cf7d98201bc63a253ff5d92f491da5c"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "5c96260e56d8dd2b1285089d075a1435"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "8e794001a2c11df3f0aa38d9a3c62a6f"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "de5ad1cbb4ed2e288be3a330d14bf5c5"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "eaf76c6a09678c18e00e6ac640cc892e"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "9e68ae7ffc1814b30f3168b919ff6b74"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "de6426db778ea4689ee1c67ac3367df9"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "2f40fd61b89f0d40273fd89935ca7d4a"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "c52a3ad08e5c3c2f86696bda448fda90"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "1eccf053c6295a702f196c46e1e7cdde"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "9c3c010c054100cb99d8e95fb1b74d57"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "02a8788394fc87b560c72f115e72c777"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "2e709a5e0fa8a59a22abfebb9e568d74"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "448fd1a5f0ac380cd502ab03fea26922"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "6c42750579b27f0ee5358e77efdb0c3d"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "e705d11165779f87ad9013852cffe15e"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "eedeb2ccf979ff24570345eff66d6853"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "fe290f634de6fa597c65e2b10edbc657"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "8f17a38ed6753a08c4459b9156bc6a65"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "48b0cc3f386eb45b8115487382cc80f8"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "e8973d29d66c8a6c8ba2d9349fe53ef8"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "95263e71103c58a90d7a4c389633d43f"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "bc46d8bf7c303da87f8f0c9fddf6767d"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "00477cde91abb3eaee60c803c7a968c5"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "dc243ac243c77d49c4dc0171d5437174"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "d7ce1fd09c8c835662b731bade6aee7a"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "903b3a3ab0cd439fbded2f46512c0152"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "acd26ca699e44f6721cb5c40b43ce08e"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "a72335d52aca4671ec5d9175feb2f42f"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "c4886b5c11187a986d4c5a1b6cc5b1a7"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "23c5aaeeb8d57fc556249fb82e6c0574"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "ce37c1f83509fd29fdf049e67e2eaa2f"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "94cd18af46753ccbe40b7be48d4f088c"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "6539341ed93db5a236d1788e2d0ec3b8"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "72ec42d9ab883294150613dca0da5651"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "1d56d9bf014836ce83bcba0dcdd52a9e"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "e00f68cec43c644b504a376b379aa24a"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "6044a7f40a5287be62e885266112f038"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "a80bc76e525fa1bae436fca09189d655"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "b06826c7d8effe062702f3284d086583"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "bff9507cf34228bcb75284c4b0d72bd1"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "15b331e1d1657d3b782a2c4f16763da7"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "44ab0bd132150bbbfa7b88855f3433aa"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "42e600496014646dda12e97e3ab814c3"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "6d58c58864c4f211ad405c683a365cdb"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "0d6fd923edacc1c8f9cb920227c4670f"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "501b680c20315b44862e2ffacc310327"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "da420073a23ae8f89fbf370422190c65"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "eeee1bc93cf92275aa8c84649ccb7d06"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "d575805d64de931cd18d091cd17843c6"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "b081255fda370f68e817c152858bcdd3"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "bd9ed3053dfa59857cd59862532429ed"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "ef77a65307d663c2239e0b2c5d1aca87"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "390d6c036b67555ed81928c8b8158d3f"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "a46f8d732520e20c76d460991e0a5ac6"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "bde783bae764ca17b5b562341db9abb0"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "ea97bb36b5327ac021d8d2a5ae9a3564"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "2eb492710e4fa817e8468d5d5daeab12"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "c13854b6328d905859bb1a97d9273e8a"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "b2aa3829e0de00038ecc93499c2ad891"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "7ca00d85f0a339292909460007b4cc81"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "73cfc3f567fe9903417947052c587c15"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "2c83c9ae137f2047e0871e4910a4f7b4"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "05f12cef615a2182f5e0fa59856b17b6"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "898f98c8c55dced0c08859e695db1f26"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "21669d1042c05cdc569c22d11b3d1d7e"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "8996b74032b032045a7515ea18c60a42"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "f3859bb706bbfd2742c332189515b8f1"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "790f658fe3f1a2076f98fb1a65b89705"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "9c8c6ba1c9270c5610f0a2f3647c0347"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "ff27a1dd29ac632ad767b8373d1593f9"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "6d78a5bbebd603b5ab86f56f5fcc9d81"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "485e68ddcac645c9f7af8c2771825b05"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "16482206ec0fd42406bba330ec3db7c0"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "32f15f6477d24f48b25df19171580af7"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "9c2f5792f06702238c0c13b733710390"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "30474e5d1d29dadf9db1db3874ae1fed"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "b73f8a2ea0cbb1a1b60afcf58d90c53e"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "1327c2debbbe73d62c83e600399e826b"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "1620e6d48bc987a3aa0d7e0cd7a7568d"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "afda742705d09706632302d4368f1cd6"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "591b8fa944a368eaf6bf078566c55d24"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "94b1c5899d74cf9e3a6a2f1790a8ebb3"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "7bd76da971a8df7f46d648d1cc69d9b1"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "41fd0238931609b10abd370b231a2e3e"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "0f496776b6955d7d5955a0ca683877b9"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "e86a3365bf704183a9e07d7964199516"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "d816093ba4b4b99aabd44fef8d596e63"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "565a4a451bca944547fe61db931c3499"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "081548c22fd470d4d15b872775187a2a"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "bbd3ca1bf2d9b326af34fbbff402ebdc"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "d64c47343d1d831c4651627518dbefe1"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "88eb1e6835e9f0a58f292edc86f637cf"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "92bc8a5f60b08ffd2f4daea81c42690d"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "95192e3169932f78a6a55a825f759ce6"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "8ac235bd305dcc56fc716663381ef62b"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "2831fd727ebc906ad8726aa872a2b4d7"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "f93b614a60774b734aa145dd45276d39"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "bcb18de97254b15a0882527c3772e5ea"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "acd31b676174b392d799ebde7ab33d0d"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "c82a0736999aca39348342fcd8e24836"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "f994890a6470b7e4cdac0d6500bf856e"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "aabe59074187c6a19d618afd2c844fa5"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "3d0a4a577c54bd064a030090d6063d5f"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "9193fec75c142fbcd643bf49d037ad5e"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "ffda0727e880ab516fe5226db7b954e1"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "5eecf253421701f671caa0035ee3f519"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "9966865b13cf718c78b64e65ebfd68b5"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "0dff8b9f265e5c4c0820b8c27e4c8143"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "a172a78bc452ff171576d02485759cd3"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "62a186b37e731fe80fb6dddf6b900d2c"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "faf22ac35dd08d6a212b19623db88716"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "7e0a3d17bdc5a10e5a6865937aa8467f"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "8050ae84b6a51b4a203e0f9206960985"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "c1948987eed5c836f3734818734af609"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "4e9e8c19943a79710306f0a7dda3527a"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "8d1c14a7daefaa569e04c3d70ff14fd6"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "fcd69aab972bcd343bb4a1088b7ddebd"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "00b9a3ac9f14bf4029a86cd82890c2c4"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "085e6b635954d1c409a9e64035b2bcb2"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "de8d33c3be9916e06ab96c96c7f25373"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "ff41a5f1124329b185ae2c4ef0ba3029"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "743a8ce325c930431de1aa02ed846438"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "63937325d98d9e45a84d07a238299a07"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "af94ff485e0fcbb83a733285c44e657c"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "cc15f44d6f1de30ed4298ee93d6579eb"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "6df2d100d04503c787f6a48d218259b9"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "969f909cdf2f58c6185fafd2cbda1aca"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "a4d1616278c77b3e6bed687fa257a0b3"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "038a43e0e290d9e6f20e7c50d8cd76e0"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "44efc7bad2ee77f59df7aacc70bdf948"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "9dc3e5f28cbdc56ab94be85f00a0a8bb"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "939563de4f9a826c527de7fb482fcb90"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "cfc3287ef9699b50e9bd2ad566e7ffb5"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "c1492ac16dd338b39549108e672c9119"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "e758fbb718198d4eda434099604075db"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "339a10b3317ed1ac9b1db99fd9e73d94"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "6567fa995ed692d3a6d00737da3f93c6"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "ee1f155aa8ca82a1cae5fa552cb8220a"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "464dc2f7d7e08c356f0ce0e5ae01e3bc"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "c60a0160b9e0adb11e0dd8de4c70fe30"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "3455201baed3653158d1f72c415f5ef6"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "956c5819e2f34d4ffe4c7c174945e15e"
  },
  {
    "url": "kungfu/template.html",
    "revision": "f0cb90c2219d61f07bbca2544123ac40"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "b995cde4606da7f79acfe456dac5ed19"
  },
  {
    "url": "node/env.html",
    "revision": "162ff9356b2283495ee10e3c14a816c5"
  },
  {
    "url": "node/index.html",
    "revision": "b21c6ad1a61d103450377c18c637a094"
  },
  {
    "url": "node/n.html",
    "revision": "4d0a8b0d28a8bc2010488cf15bee6a81"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "529198e5edc9a7849f6ca061d8132e93"
  },
  {
    "url": "node/npm.html",
    "revision": "7e0775379a479c6a43b9f22f9b6fab86"
  },
  {
    "url": "node/sequelize.html",
    "revision": "748898922d94c395ffd070e4fb8eaba3"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "5c0bb9bdfc49ea09ad259776f10f1dd0"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "837e9ca093bd714c2171c1870f87e97b"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "35e349d5c37e7536117121fc8740d5a9"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "94c00ed6a6764f10700390d3a1b4e8d2"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "89622c43ef79b78c6113e484625cb379"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "2416e28e950bb639cf8f6715e81de50c"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "69927dd3f26c3e57df0425e9ca58e1d7"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "03f00baeabb4ecc3e7ba3307c47912ef"
  },
  {
    "url": "php/clean/di.html",
    "revision": "0018ce6edf785cdfee982aed67812658"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "0a1eedb75e53586cd78b831ce47c2f94"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "fef1bb21dc87dfe3b06993af8446915a"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "95c5d65ed8e64aaa45e52cae8babd94c"
  },
  {
    "url": "php/clean/index.html",
    "revision": "6fbd25f055dc79912d61a9d5cb6ee1a2"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "7f270f8f77cdeae6979fcb51a138791a"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "66727a01579ccda0f09fc43556785e40"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "6569e3054fc7d90b10367bf6a1b9db0a"
  },
  {
    "url": "php/composer.html",
    "revision": "f8621ef87c6de97adbd362338d717abf"
  },
  {
    "url": "php/crunz.html",
    "revision": "6fec980eb4b1c763f43823d1549e81c6"
  },
  {
    "url": "php/laravel/best-practices.html",
    "revision": "6ce0790b917c08ac4b22d0ec2ae19123"
  },
  {
    "url": "php/laravel/laravel-notes.html",
    "revision": "6d3c6b00dd0e3417bf63e68030321a87"
  },
  {
    "url": "php/laravel/patterns.html",
    "revision": "149eb4b7d3c29e5ec3f6e0ddbbc5aafa"
  },
  {
    "url": "php/magic.html",
    "revision": "49768f347937911b495c150c92070169"
  },
  {
    "url": "php/notes.html",
    "revision": "2c48da0bd017d865523365a78c1fe430"
  },
  {
    "url": "php/oop.html",
    "revision": "19d26af6e8280dcf84fefaac633dcb41"
  },
  {
    "url": "php/php7.html",
    "revision": "f0bd24b056afe6d1abec25bc868f5589"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "a070858e0cf0593606088026a86de386"
  },
  {
    "url": "php/reflection.html",
    "revision": "998bb98d7351d027fa88a410d00f8c85"
  },
  {
    "url": "php/tricks.html",
    "revision": "77059f7565ff38ebcda8c57661c34dd3"
  },
  {
    "url": "php/wordpress.html",
    "revision": "a506c24591c0909aa562f8ccbd943044"
  },
  {
    "url": "quotes.html",
    "revision": "034c793fe802007a6b4bfc57390e40b5"
  },
  {
    "url": "react/mobx.html",
    "revision": "e6c47ad55c270cdb1f40ee3d5f0b8421"
  },
  {
    "url": "react/nextjs.html",
    "revision": "a21e2cb8423424b3f860d080d0907ac0"
  },
  {
    "url": "react/react-native.html",
    "revision": "87cc681f3c2c4d84b024333c75e846d1"
  },
  {
    "url": "react/react-vs-vue.html",
    "revision": "a49d9eb8439e6120b30b5ebc27f51d7d"
  },
  {
    "url": "react/react.html",
    "revision": "da8dc279a8efd19918844eef8d75c962"
  },
  {
    "url": "react/vue_react.html",
    "revision": "9a68e637c64f8ee6325239e6203de7b7"
  },
  {
    "url": "refactor/notes.html",
    "revision": "eca284cbd0102da5deea0a0e4c6d093b"
  },
  {
    "url": "ruby/ruby-notes.html",
    "revision": "8c4bf66b07e0be04b2b9ff2181688258"
  },
  {
    "url": "ruby/ruby-vs-node.html",
    "revision": "72fee45a19234e959ce5cf08deaa9c5a"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "03c4b0571f3c71f179e3272d06698813"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "4e01a4b31a7c7af992c87258ac3832e2"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "519ef82e0a258cee86bd647f0d9c5e4c"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "1164d7426726ab61cb04bc3d8fe4efd7"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "8ffe7b62eded07fbb3f3b39e60f99e30"
  },
  {
    "url": "snippets/jest.html",
    "revision": "fcc42f6ff8c62b948021769249477ef6"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "89bdef87242925d5c3a20fde0d71c599"
  },
  {
    "url": "snippets/regex.html",
    "revision": "d7752f7e1610662788646d49a4e9c9e8"
  },
  {
    "url": "terms/12factors.html",
    "revision": "f943984df12e449168a28977f484cfab"
  },
  {
    "url": "terms/architecture.html",
    "revision": "faf100e7a9e02211e3fcb2d8a90b8685"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "6942a4b3789a015653e9735c6ca2b9d5"
  },
  {
    "url": "terms/di.html",
    "revision": "b18d1fc3048dd1374d42521682fbd6b7"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "8b367b3f6c9b21168cf911a71086400f"
  },
  {
    "url": "terms/javascript.html",
    "revision": "81e793d06e811c7051b2a9bf098dc182"
  },
  {
    "url": "terms/patterns.html",
    "revision": "5f847a8cd1ff941f70aa3ce0ff955252"
  },
  {
    "url": "terms/principles.html",
    "revision": "77772dbf9a20a5e598435a7b229d65e1"
  },
  {
    "url": "terms/rules.html",
    "revision": "d75fd3b42cf6cf1f0d403303299fdb56"
  },
  {
    "url": "terms/testing.html",
    "revision": "60ac6f2bc21a558e27079b1a3b05f80a"
  },
  {
    "url": "tools/chrome.html",
    "revision": "ab044f15441c8c82524a5a1dcd81b059"
  },
  {
    "url": "tools/docker.html",
    "revision": "fb22655fe208d1d54f02fee9c89a2835"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "198adffc9ba3dab5eef30af0518ac232"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "10fafd89a43e6f652994709b8ff0ba79"
  },
  {
    "url": "tools/graphql.html",
    "revision": "aff096316d47883c0a659b054c5f50b6"
  },
  {
    "url": "tools/k8s/k8s.html",
    "revision": "5bb595ec1b8a086e6765fbb1321633e7"
  },
  {
    "url": "tools/kafka-vs-jetstream.html",
    "revision": "cadc3b18cfee928ee14c8132f0904f86"
  },
  {
    "url": "tools/kafka.html",
    "revision": "4a66424cf3d4917cce901f7930576f22"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "5a5ad16ecb33b2337a996e69d8464e9e"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "6cdb6cfce7051741ed49961b87ad7bef"
  },
  {
    "url": "tools/redis.html",
    "revision": "35bfbc534479a127de5fda8616f35a59"
  },
  {
    "url": "tools/rfid.html",
    "revision": "882e1dcc122c85c2d1812beea7b2585a"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "983328e1009f63595aa1b26a5905f28c"
  },
  {
    "url": "tools/vscode.html",
    "revision": "6997345872c0875241ef060288fa5ad2"
  },
  {
    "url": "tools/webpack.html",
    "revision": "483c3d58cc2bb66b02e427b1d56e7739"
  },
  {
    "url": "tricks/compare.html",
    "revision": "e422e9459504368fced2293b51332b18"
  },
  {
    "url": "tricks/git.html",
    "revision": "14e5e49132177ec43641a127683283e4"
  },
  {
    "url": "tricks/linux.html",
    "revision": "70742612fc7cd7ad7d2cf8705b2f56dd"
  },
  {
    "url": "tricks/mac.html",
    "revision": "f95c4a79820a2705a9044e1f214807aa"
  },
  {
    "url": "tricks/misc.html",
    "revision": "5d9c980d7c6e21cb19eaa0df0ed29ea5"
  },
  {
    "url": "tricks/setup.html",
    "revision": "b13d05b1f87c2c65d0c7acabb4239257"
  },
  {
    "url": "vue/communication.html",
    "revision": "9799ce4b39e7fda866653d0b1ffcaef1"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "014e24494d664e866a40875041436242"
  },
  {
    "url": "vue/events.html",
    "revision": "370d21972957d9fc21b8c4cb1ad8b104"
  },
  {
    "url": "vue/references.html",
    "revision": "b5177fe1d55ea7cbc0f322aa10699739"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "069627a19ac2eb0c72a590b01f5c7f6b"
  },
  {
    "url": "vue/test.html",
    "revision": "da244fe8cac31e7bca6cfa8bec518f4a"
  },
  {
    "url": "vue/tricks.html",
    "revision": "4aef92eafd3862e96cb8f236df3be929"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "76e8d964d57bfe2817993cae493832b1"
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
