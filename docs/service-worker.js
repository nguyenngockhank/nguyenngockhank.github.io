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
    "revision": "9b91bf49c45194dd116a7a626b714297"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "780c49b3ea2fad13b7e4c0de8f5c27e5"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "561ca61ae263db9eed293cbea4564261"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "57f71cc55aadb724d7e1c702e9e7ed48"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "b94a12f8f1ea2037a8b01f91c16f42bd"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "8d174d45c5b2093494ef5e094a11ea3b"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "2ca2aeb6bd14badf37b23694687a264f"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "0211fb720ce60285c965c4977c88006c"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "483a27307d82cbb5542accde2fda522c"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "5eb45516af7a361a7dac425821104865"
  },
  {
    "url": "algorithm/string.html",
    "revision": "431cc971b6119f3de793b46acbaf9dc2"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "7ff0d3d971c4facd859197f2f4787bcc"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "71de974de16740c39586049a20339f86"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "4a9404d8281e7a02bd2f0525e1a2150a"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "cca48dfaccb9b7be3545febce990002d"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "5da8259b1e8c318538d1d1e5b20735da"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "053194c3e255b7df1c4f36c73ec37ecb"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "e6a6bf6afdbf08ef166997bc688b832b"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "3cfd6aead5ac9fb16dd553a19942205d"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "d9d7334a764f3203299c00430e48d73f"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "66769c04447d687689c8f5b23c1a9f62"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "ccfe07ba3c7cfe4640d2cc1144e9279a"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "6c659f449285c58735a7fbe5c3268a9a"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "aeae5ea8d3884d9d0adf5f8db8da37b3"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "0ed76fdb64347bee985fd20a0be9c7b2"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "f8cb667efa6be29616a87f84554c0897"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "6333111ab1142fefa28034713dda6d83"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "5fe82c9cc5c58f46f9138b0405fdc86e"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "2bd9ff0cc4e444a664ba19bd34d8fd21"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "2147a6967cfe7c0780246593a6e680ef"
  },
  {
    "url": "architect/authenication.html",
    "revision": "9385e78d68a975b70ad1bfeef441654f"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "45c45f342f4b3720c05e625080d629a6"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "753faa153629c47abf37277201509c25"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "32d8efb16a05f43eefa731dba490b9e4"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "b29952ce8377af68d5166c2b3f7dc002"
  },
  {
    "url": "architect/ebi.html",
    "revision": "48c789cc735d17a8046489455e89c8e1"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "5d34c08de281de10884de9022f9f7165"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "1b25e6280bc0cd10f1164f04b6916bdd"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "927ae0ad83adbe0f3c7c212a2445d985"
  },
  {
    "url": "architect/index.html",
    "revision": "d623430be6b0922a28bea4bb8e505bf3"
  },
  {
    "url": "architect/messaging.html",
    "revision": "65395fdc5c2b9945c7fdd6f1ab20163f"
  },
  {
    "url": "architect/microservices.html",
    "revision": "9fd473ff47f5cc8e08c8d3e0c550095c"
  },
  {
    "url": "architect/mutex.html",
    "revision": "41b00e298c3dfe607899118b361f3c85"
  },
  {
    "url": "architect/notes.html",
    "revision": "84f476ece45fc964013b1743b22a485f"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "08babced96e9327ec6a7aabb1b6fac88"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "b3ead6178b832bf0afe841dd26823ca7"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "c3aa1cb4a0eac90a4229e82747d9df21"
  },
  {
    "url": "architect/refs.html",
    "revision": "b1f68db3cecfbcc6db2f981f09e61234"
  },
  {
    "url": "architect/restful.html",
    "revision": "f0b5584e105ffa178b62921c4bf21ae7"
  },
  {
    "url": "architect/soa.html",
    "revision": "6818cd8ff44620f7f328a530a0568231"
  },
  {
    "url": "architect/spa.html",
    "revision": "d5baeced18acbf9cb0ea4dcca5fa7744"
  },
  {
    "url": "architect/terms.html",
    "revision": "4d36a2050aba9f714070558f7eff8baf"
  },
  {
    "url": "architect/webservice.html",
    "revision": "1b86f73dbb37a49f0dc73402a915db30"
  },
  {
    "url": "assets/css/0.styles.c12594e8.css",
    "revision": "94cecd422aed64050dac5e02163a3675"
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
    "url": "assets/img/vscode-search-reg.c883a7e7.png",
    "revision": "c883a7e7d8ec8295b228b7a1d65981de"
  },
  {
    "url": "assets/img/wp-metadatatable.c1b9b204.png",
    "revision": "c1b9b204a09aaad8283b901339daac87"
  },
  {
    "url": "assets/js/10.ef520213.js",
    "revision": "55d6b9dda186dd4da883c4acd98b27d7"
  },
  {
    "url": "assets/js/100.33584ec6.js",
    "revision": "8f1bf87aeae656e593b5a2a859a342fb"
  },
  {
    "url": "assets/js/101.0f87e414.js",
    "revision": "c089fcc94a92d490fb97946cd91ece17"
  },
  {
    "url": "assets/js/102.9bd83912.js",
    "revision": "071da9cfbab8391cc6da182e66d08101"
  },
  {
    "url": "assets/js/103.e3c0d47f.js",
    "revision": "cdb5b51fc6d2be96cf8e854428ef6e53"
  },
  {
    "url": "assets/js/104.f62f7eb1.js",
    "revision": "1dc6155851d863ab718c027ff86f27d2"
  },
  {
    "url": "assets/js/105.4bcb66b4.js",
    "revision": "017e5305d93d7696083db7435d6d2ace"
  },
  {
    "url": "assets/js/106.67e01d53.js",
    "revision": "9d9f82363b8eff56b1c5ade22a9649ff"
  },
  {
    "url": "assets/js/107.64d86ec4.js",
    "revision": "4938369bcf5b364c86ac4d26df1b1722"
  },
  {
    "url": "assets/js/108.a692f6c0.js",
    "revision": "e08e70e4ea12bb7ae4c498092f61d25c"
  },
  {
    "url": "assets/js/109.b23c477e.js",
    "revision": "f3e1f583ce360be8601545255dcaacfd"
  },
  {
    "url": "assets/js/11.62390e41.js",
    "revision": "e58ad6ca5bc38fac18fc79ebe5119ecb"
  },
  {
    "url": "assets/js/110.de5a14d0.js",
    "revision": "f44de575db398e2c7b3846410ff1904a"
  },
  {
    "url": "assets/js/111.395c96c9.js",
    "revision": "f2ce719ee8d12601627268692a1240f3"
  },
  {
    "url": "assets/js/112.f3dfda1b.js",
    "revision": "97f3462b78515164467dd61f16c83506"
  },
  {
    "url": "assets/js/113.73e0bfaf.js",
    "revision": "29ffea71ea04f969674a28319f062acb"
  },
  {
    "url": "assets/js/114.590afdc8.js",
    "revision": "33b69246d071a209ef681bac5d7fb24d"
  },
  {
    "url": "assets/js/115.3d22ab62.js",
    "revision": "d5615fc7cc4d98e0787872ffe4dc40c7"
  },
  {
    "url": "assets/js/116.9b45f807.js",
    "revision": "851611072921fbd42c92e3e94e804c18"
  },
  {
    "url": "assets/js/117.ac9ac693.js",
    "revision": "2686ee91475d0d4f4c401bc2a3770286"
  },
  {
    "url": "assets/js/118.68832bcb.js",
    "revision": "c3380e98e5d19e93d024f7f0e89aa180"
  },
  {
    "url": "assets/js/119.5a925dbe.js",
    "revision": "aaee1fca958ceee0bf5dca2990e7c6dd"
  },
  {
    "url": "assets/js/12.b70d1635.js",
    "revision": "1e22b1d4a36e86e589299dcb8fc95ef6"
  },
  {
    "url": "assets/js/120.ffd59874.js",
    "revision": "657db0570d2c29cf36519db588e8ce92"
  },
  {
    "url": "assets/js/121.aad77391.js",
    "revision": "139c9c64af83bac48a1ddb6b81af0fa0"
  },
  {
    "url": "assets/js/122.3c07e0fe.js",
    "revision": "6f1467ef65100b79817eefefe808e657"
  },
  {
    "url": "assets/js/123.7db2a5c3.js",
    "revision": "842cb4c6f14a7b39a3326290f7ebeaeb"
  },
  {
    "url": "assets/js/124.257689dc.js",
    "revision": "ca90d916c052cabd1f8f8a2e32f66475"
  },
  {
    "url": "assets/js/125.f0be1b50.js",
    "revision": "40f4742022e6b952cad18b4c09a6ab8a"
  },
  {
    "url": "assets/js/126.3ad4f908.js",
    "revision": "528c666b845c50bb2904d177af001189"
  },
  {
    "url": "assets/js/127.afde470f.js",
    "revision": "6b1cb9890148ba3372e8187e5e94f04a"
  },
  {
    "url": "assets/js/128.369d5215.js",
    "revision": "9a2d6cbd80eddd3c032084f0dca16c77"
  },
  {
    "url": "assets/js/129.0969b0c5.js",
    "revision": "c9febc0ccea09acbed17724a4ed006f3"
  },
  {
    "url": "assets/js/13.4dc1e481.js",
    "revision": "89608eb009fb56b395de1d215df86ffc"
  },
  {
    "url": "assets/js/130.07d45384.js",
    "revision": "d4fef4c0d86be77076e9471b235df080"
  },
  {
    "url": "assets/js/131.12ec73ca.js",
    "revision": "a994712324656c23dd3d9a8047e7a2bc"
  },
  {
    "url": "assets/js/132.c6ddfd7f.js",
    "revision": "5a4cee52de55b86fafae17f15dcd2fc5"
  },
  {
    "url": "assets/js/133.6645f635.js",
    "revision": "1d5e27bfa95a939ca088e4f2231acc55"
  },
  {
    "url": "assets/js/134.3426bb96.js",
    "revision": "6c445657dc6c8b8e2b863b8a28165df5"
  },
  {
    "url": "assets/js/135.a791734d.js",
    "revision": "177f4b08edcb21c330928e70529e9ee3"
  },
  {
    "url": "assets/js/136.88b08a3f.js",
    "revision": "a505bffbcf3bdfe15dd4232eab6404d6"
  },
  {
    "url": "assets/js/137.01487360.js",
    "revision": "7309e2e9a3dbd5b362330501ff5dff31"
  },
  {
    "url": "assets/js/138.7faa83a6.js",
    "revision": "b6b33cb3a7cfaf572a65bed2a4881098"
  },
  {
    "url": "assets/js/139.499bcd8b.js",
    "revision": "2908b09c3228a0a278e5346634c240cc"
  },
  {
    "url": "assets/js/14.5b039293.js",
    "revision": "64fd2e2fc402bf17e8d42d98443c1847"
  },
  {
    "url": "assets/js/140.8a9e156d.js",
    "revision": "3d3b5b2d5cf3047cef15cd484d3613f9"
  },
  {
    "url": "assets/js/141.350d68d4.js",
    "revision": "add4274d4665d63f2140c3b926a7c9ab"
  },
  {
    "url": "assets/js/142.a57dc343.js",
    "revision": "5201e7587a522391142437c4cf919114"
  },
  {
    "url": "assets/js/143.4cfd129a.js",
    "revision": "fd5df53768b21f47669dc409093b027a"
  },
  {
    "url": "assets/js/144.76ae195a.js",
    "revision": "73eb0e04071a22c8986b3bfd2581a8e9"
  },
  {
    "url": "assets/js/145.69efd03f.js",
    "revision": "4411f41d766c8704b33cec5a45c8ef06"
  },
  {
    "url": "assets/js/146.34eb9b59.js",
    "revision": "6fbadf8475d83d12dbb2b275552378d9"
  },
  {
    "url": "assets/js/147.45d44b18.js",
    "revision": "8a6d1382082f0c9bc9c334984e3a1440"
  },
  {
    "url": "assets/js/148.6ea279c5.js",
    "revision": "752a4e2e0194128e0f15cb7c87c19ab9"
  },
  {
    "url": "assets/js/149.4f3d7c25.js",
    "revision": "4a9625065a233cd063b5b1ea370e160b"
  },
  {
    "url": "assets/js/15.c9af1837.js",
    "revision": "b6d7d7c53dcd9f561bc2ac40f02f9fd4"
  },
  {
    "url": "assets/js/150.5cdd47ce.js",
    "revision": "ffec56a17bd6ec7b6106d5ea99f0b7d6"
  },
  {
    "url": "assets/js/151.897b4499.js",
    "revision": "5ba51950f44977d419afc8cc6aa99629"
  },
  {
    "url": "assets/js/152.f022b645.js",
    "revision": "7aa869eeea9438b6b27b865521aac5b3"
  },
  {
    "url": "assets/js/153.9b00b98d.js",
    "revision": "e6058b59f475dc77d3e4efc4c9ca1bd9"
  },
  {
    "url": "assets/js/154.3c38244d.js",
    "revision": "69807017cb070339037ef774e39c0f98"
  },
  {
    "url": "assets/js/155.f748ffd7.js",
    "revision": "274026c0c3deb3f7f833fb4887304a5b"
  },
  {
    "url": "assets/js/156.aed958fd.js",
    "revision": "623999b8c2fca87ec44c2f7edddc0d89"
  },
  {
    "url": "assets/js/157.12bbe2aa.js",
    "revision": "19ebb98646d4a8561d85afa8c14cd40f"
  },
  {
    "url": "assets/js/158.df5f82ec.js",
    "revision": "c428ad2df3a29baf23fc849e833d5f33"
  },
  {
    "url": "assets/js/159.184fe288.js",
    "revision": "1f32c0a927bafb0ebefb89171202317f"
  },
  {
    "url": "assets/js/16.83899b33.js",
    "revision": "8ac9be31d1ad73bf53768c32d7791a38"
  },
  {
    "url": "assets/js/160.a59bd86c.js",
    "revision": "b3cd3fe1a0863d557778f7f5ce1ca28f"
  },
  {
    "url": "assets/js/161.c567f458.js",
    "revision": "4cb4dd855e13a11693bd3519482e47a4"
  },
  {
    "url": "assets/js/162.10bb7f46.js",
    "revision": "a62a85b88da3d069c1fd11a5d9c074eb"
  },
  {
    "url": "assets/js/163.91637ca8.js",
    "revision": "3a525b7fe2e593102f19f23ef67970de"
  },
  {
    "url": "assets/js/164.c3b9a101.js",
    "revision": "07028c3e2c1808edfc63c0ba1dc0e6d7"
  },
  {
    "url": "assets/js/165.b85f55ba.js",
    "revision": "1ee00439108b3d48a65a35be0e5d7ad8"
  },
  {
    "url": "assets/js/166.4ccd02e7.js",
    "revision": "ab334c61e29396e4db7b08370c2107c9"
  },
  {
    "url": "assets/js/167.7161c738.js",
    "revision": "fe3a1079d91c703b020aa85dd3258016"
  },
  {
    "url": "assets/js/168.61717f1d.js",
    "revision": "4e1b5687441ffb54a2875f791af26cb2"
  },
  {
    "url": "assets/js/169.ab37c840.js",
    "revision": "87a5cc0b36ce7f7026e7bf5aeed18fd5"
  },
  {
    "url": "assets/js/17.43ce75b5.js",
    "revision": "7045bf697a53971df73e7b49960a3ca9"
  },
  {
    "url": "assets/js/170.c3907580.js",
    "revision": "9c2e1901daf2178bc094603870eacb9b"
  },
  {
    "url": "assets/js/171.ef660b1a.js",
    "revision": "1902ccc9da67cf1dc9ba988a3bba0f2a"
  },
  {
    "url": "assets/js/172.7a388e77.js",
    "revision": "f0a51fe0530609ddde32008761cf827b"
  },
  {
    "url": "assets/js/173.30de7d85.js",
    "revision": "b5338da6093dbcedd8f2b9ccaca0555d"
  },
  {
    "url": "assets/js/174.8ae60e1e.js",
    "revision": "f135134c8d2c10c1ff1c867aba0a9650"
  },
  {
    "url": "assets/js/175.ef663409.js",
    "revision": "707c740918c4c81b460933019bd750ee"
  },
  {
    "url": "assets/js/176.5dce3a23.js",
    "revision": "dfaf0c4b890955bdab607060b55fe888"
  },
  {
    "url": "assets/js/177.5074fb83.js",
    "revision": "b6196dfd39a80711ca06a379fb980b31"
  },
  {
    "url": "assets/js/178.5f420cea.js",
    "revision": "34a5a05bf4223a36b09fa14c6594338c"
  },
  {
    "url": "assets/js/179.eef96264.js",
    "revision": "cc37e6437d4c41c81c2ffb8faed393cd"
  },
  {
    "url": "assets/js/18.71ecf393.js",
    "revision": "dd110956e65ffb2f24d23018f2d85b5a"
  },
  {
    "url": "assets/js/180.f91c89a2.js",
    "revision": "dfe5e7dd700c465c91a3c25f28816b60"
  },
  {
    "url": "assets/js/181.9d9ece98.js",
    "revision": "a08ff6ce458b5fe91dd50a83a2475ea3"
  },
  {
    "url": "assets/js/182.20a3261c.js",
    "revision": "d93697a81cdb487768a8e191d2dabe4f"
  },
  {
    "url": "assets/js/183.bbe919d3.js",
    "revision": "b0f08c5db5d1fd84f673d1ca2f7c84df"
  },
  {
    "url": "assets/js/184.b0b8bebd.js",
    "revision": "3c4555999aa447b9b67bc0f481ab4296"
  },
  {
    "url": "assets/js/185.7a12bb51.js",
    "revision": "6952339e4579e71b1a741f99fae00e98"
  },
  {
    "url": "assets/js/186.40e73737.js",
    "revision": "04f9fcbe99785e703769f7f921ca0fc3"
  },
  {
    "url": "assets/js/187.582985ee.js",
    "revision": "468c6156675d0711be210614bf935a11"
  },
  {
    "url": "assets/js/188.40393c97.js",
    "revision": "ab02a461ea70ead4727cc2b62ac95e77"
  },
  {
    "url": "assets/js/189.fda97739.js",
    "revision": "b0af7ba04342bcbb28de8f8de211acce"
  },
  {
    "url": "assets/js/19.d8050ef1.js",
    "revision": "628fd989a7689c357fa33e75277059ba"
  },
  {
    "url": "assets/js/190.74eb6912.js",
    "revision": "6e48100d1c32330bd3777bfc91c0becc"
  },
  {
    "url": "assets/js/191.460d96f8.js",
    "revision": "7d47888a784a9a587f5e8f197bad62ef"
  },
  {
    "url": "assets/js/192.54f10a5b.js",
    "revision": "33777aa412da322c0e00e9b2c0a5e7f2"
  },
  {
    "url": "assets/js/193.1bf6981e.js",
    "revision": "cdd3945826f31476fa208b2cb97acbda"
  },
  {
    "url": "assets/js/194.a7afcad7.js",
    "revision": "17821de451497cfa0c0d3e704de3ccd8"
  },
  {
    "url": "assets/js/195.3551dffc.js",
    "revision": "31e1b3d67178ea3cd961ebaf4b24a269"
  },
  {
    "url": "assets/js/196.6e8e7481.js",
    "revision": "133185812d449d546411bef445374d3f"
  },
  {
    "url": "assets/js/197.4ffffdb7.js",
    "revision": "702e65325e5088a7cde7908b05a18860"
  },
  {
    "url": "assets/js/198.ac2767ca.js",
    "revision": "465ca10b97c83b66f625a0722817420d"
  },
  {
    "url": "assets/js/199.682c9b52.js",
    "revision": "59b7591e490d97ffeba9a9326be75bac"
  },
  {
    "url": "assets/js/2.a62bb108.js",
    "revision": "b4ca45f47f3cbd648a62c52636773d0e"
  },
  {
    "url": "assets/js/20.1dadf824.js",
    "revision": "d6ce48218bb6c96d6428922b651e000b"
  },
  {
    "url": "assets/js/200.4a57e96a.js",
    "revision": "2dbca22910f4948eebfce153ebc7b8d8"
  },
  {
    "url": "assets/js/201.091adbf3.js",
    "revision": "bf9ce3032a53016e73e0d26b43be7b68"
  },
  {
    "url": "assets/js/202.d888d8cf.js",
    "revision": "487feb6254d3a2a35ffb826774fd7178"
  },
  {
    "url": "assets/js/203.089e5b1c.js",
    "revision": "2d3c61de116dc46647e9af04b2b9e195"
  },
  {
    "url": "assets/js/204.27a0e146.js",
    "revision": "1143edcc5372d9f7b20800b09c472df2"
  },
  {
    "url": "assets/js/205.c585f03c.js",
    "revision": "07999fa18f5e708feab090184548cd29"
  },
  {
    "url": "assets/js/206.7b718f47.js",
    "revision": "9d2315e2c1de0d4d919919173cf4aca3"
  },
  {
    "url": "assets/js/207.bc2d808c.js",
    "revision": "e4917f2bb6c375a2cf5eb155b4ab2762"
  },
  {
    "url": "assets/js/208.cfc17105.js",
    "revision": "a7584a91284d0a5905e19e29bf22a9e0"
  },
  {
    "url": "assets/js/209.424c53b2.js",
    "revision": "11be1071e6b9413d6ae26dffcc1db0ca"
  },
  {
    "url": "assets/js/21.5f0331eb.js",
    "revision": "b85505da95aa4e0021d81eb60110d04a"
  },
  {
    "url": "assets/js/210.0f779bb8.js",
    "revision": "fc5381db6157c3519b4d3bbdf14f914f"
  },
  {
    "url": "assets/js/211.2a8a562f.js",
    "revision": "97ac8b1a03f570d92e62eba57996869e"
  },
  {
    "url": "assets/js/212.34aa9b50.js",
    "revision": "a5783534588dab71f9bbf51307ad4a44"
  },
  {
    "url": "assets/js/213.cc593502.js",
    "revision": "3411df05179b187e5c8a55c834fd154c"
  },
  {
    "url": "assets/js/214.30199ee3.js",
    "revision": "b36e5898e90df67ae9e2ba877d327fad"
  },
  {
    "url": "assets/js/215.bad57f51.js",
    "revision": "714988e1bf2c1ec6d34e720b93e14421"
  },
  {
    "url": "assets/js/216.2fec320c.js",
    "revision": "e17c9010d8bc2650ab22a151773ba14d"
  },
  {
    "url": "assets/js/217.5d9f3884.js",
    "revision": "fcf84dc4ffed715a91dedf7f997eaf6b"
  },
  {
    "url": "assets/js/218.c826e2bd.js",
    "revision": "65b4f4070c3d0457c93f23a9e4421b60"
  },
  {
    "url": "assets/js/219.b2934d42.js",
    "revision": "8be7f12105a379612db5f73f4d702a15"
  },
  {
    "url": "assets/js/22.50ebb1d7.js",
    "revision": "bb5be3914c8da6536b7389b0af97eaf2"
  },
  {
    "url": "assets/js/220.ea96efdd.js",
    "revision": "22e63ee8626f7436e3d1cfcabe9df43d"
  },
  {
    "url": "assets/js/221.58353c06.js",
    "revision": "b95a2ddf9628f984422b0c4db5b36882"
  },
  {
    "url": "assets/js/222.85e4ae57.js",
    "revision": "bfa5ad017b001a000414883629f3acb8"
  },
  {
    "url": "assets/js/223.88b49f5a.js",
    "revision": "807c06914de0f243c9f7ae375d678605"
  },
  {
    "url": "assets/js/224.3b2d3602.js",
    "revision": "aa7195cd1f9f7eaa2b934cdde873854b"
  },
  {
    "url": "assets/js/225.e421522d.js",
    "revision": "311ee0785ab62c10f99b7c1e5c55cbc2"
  },
  {
    "url": "assets/js/226.a17f42e2.js",
    "revision": "646257a2b5860a6c38f033f947a4c21a"
  },
  {
    "url": "assets/js/227.38a05afb.js",
    "revision": "fdd61cb7b39a992668677945dd22e4da"
  },
  {
    "url": "assets/js/228.342aedc6.js",
    "revision": "17bdba727d8063df4134fa7d2023b02d"
  },
  {
    "url": "assets/js/229.df1098de.js",
    "revision": "8f20a86821b35a8098e92a28c493ff38"
  },
  {
    "url": "assets/js/23.6da537ca.js",
    "revision": "4730b84531a2ff4adc413bc8cf5836bd"
  },
  {
    "url": "assets/js/230.6e1d6a56.js",
    "revision": "0850030e0100e047d06d4d6823212ce6"
  },
  {
    "url": "assets/js/231.547e0564.js",
    "revision": "d0cc9f96edb37de4c42bf964689df9e4"
  },
  {
    "url": "assets/js/232.85e2afd4.js",
    "revision": "da8177d869271057ba42746a5f37f3c9"
  },
  {
    "url": "assets/js/233.5c7c296c.js",
    "revision": "6b8220cb4bb332190b7be8c912cd0d19"
  },
  {
    "url": "assets/js/234.7fa0b27c.js",
    "revision": "dcb7179f725e6367489b902bb3b1ba80"
  },
  {
    "url": "assets/js/235.56d986de.js",
    "revision": "073e71a0f587c08c7db082a82a6dfdc9"
  },
  {
    "url": "assets/js/236.15e7a863.js",
    "revision": "a861d1be2d3add73d8d641111e999ebc"
  },
  {
    "url": "assets/js/237.5051d7d9.js",
    "revision": "47d7b3e4019eb3eb80df3f9156e2cd2e"
  },
  {
    "url": "assets/js/238.30fc7589.js",
    "revision": "1f2f5c6b52db1c42ba75cf0b8931ee08"
  },
  {
    "url": "assets/js/239.0194ab55.js",
    "revision": "76acd66f964125fba3dac0bce92f11fb"
  },
  {
    "url": "assets/js/24.68ff6061.js",
    "revision": "1f27b476abdb2bd0dcaf413c0d22519e"
  },
  {
    "url": "assets/js/240.a2580fb1.js",
    "revision": "4f9cb1ee359e6ee02d4d93c8ed41f64a"
  },
  {
    "url": "assets/js/241.befc2d1b.js",
    "revision": "e74978f6c075f811425817baac7b1a33"
  },
  {
    "url": "assets/js/242.0086a52c.js",
    "revision": "31df32b3995a03cf0f823fb4ebebb92d"
  },
  {
    "url": "assets/js/243.f5e7b26b.js",
    "revision": "887da0bd6f6366d607aaca70208752c4"
  },
  {
    "url": "assets/js/244.eeb98217.js",
    "revision": "0646a4e9c3e406bd1031a3bd9961187d"
  },
  {
    "url": "assets/js/245.89aeb40f.js",
    "revision": "e6a7297d1b8dd835880f3ecfb36f98fc"
  },
  {
    "url": "assets/js/246.48e63083.js",
    "revision": "69b3ecd13097023a196d31e738b25088"
  },
  {
    "url": "assets/js/247.4cfbaf5b.js",
    "revision": "6bf86e2c74dc65df36ffd80a3679ece3"
  },
  {
    "url": "assets/js/248.b572ee54.js",
    "revision": "95d79714e785d94aefa66e5c29868361"
  },
  {
    "url": "assets/js/249.06948742.js",
    "revision": "2f4b3c89e9e2c8667cce6e4d30bf61cd"
  },
  {
    "url": "assets/js/25.7dbe951f.js",
    "revision": "c6225b558eb84ea6cd4f43ef07cb0a7a"
  },
  {
    "url": "assets/js/250.11091ec5.js",
    "revision": "594821a1bcaa7a92fd626d8c19579c3d"
  },
  {
    "url": "assets/js/251.bf190198.js",
    "revision": "9c20b1ef08d0e7bf1b84a472287aa789"
  },
  {
    "url": "assets/js/252.7dfd3928.js",
    "revision": "5e3d3961addd75062fbb21e054607d15"
  },
  {
    "url": "assets/js/253.2e40b720.js",
    "revision": "1589f5be35ed8331e5a305138942f3e3"
  },
  {
    "url": "assets/js/254.890814ba.js",
    "revision": "9d75a3fcf672f4e9bddde3fc01affd8b"
  },
  {
    "url": "assets/js/255.52456531.js",
    "revision": "ee05c3fc5003eedd1d093054d772c69d"
  },
  {
    "url": "assets/js/256.5034458d.js",
    "revision": "6cdd72d36fda5b35ef7e05f25a86209f"
  },
  {
    "url": "assets/js/257.21bac238.js",
    "revision": "e76f575f9cc52afb4cfe28ec3c189ce4"
  },
  {
    "url": "assets/js/258.c13e07ca.js",
    "revision": "0b11efd26049fb5ad016033b6b29d8be"
  },
  {
    "url": "assets/js/259.9fd53284.js",
    "revision": "5d9c6f5a753564668217e44b69d65412"
  },
  {
    "url": "assets/js/26.8362f2f5.js",
    "revision": "f6e9c0e6f909789f60d85ea06c790987"
  },
  {
    "url": "assets/js/260.92fe4615.js",
    "revision": "271e5c27dab4e6a5c9f212418a483d1d"
  },
  {
    "url": "assets/js/261.19474abf.js",
    "revision": "a860b4204e02b475bab95ef93f55b1cb"
  },
  {
    "url": "assets/js/262.6f47c84f.js",
    "revision": "71ac2c56c8637979feca60bc783c0742"
  },
  {
    "url": "assets/js/263.82552f0c.js",
    "revision": "9ee796bdb538d605c2fcf0fcfa4dcc4a"
  },
  {
    "url": "assets/js/264.8b7b5ab3.js",
    "revision": "a75af52e4a1763933a2b696a3fbb24aa"
  },
  {
    "url": "assets/js/265.933efc20.js",
    "revision": "777f2413e884cde193dccddb0cc8bb8b"
  },
  {
    "url": "assets/js/266.004c96da.js",
    "revision": "74fbe7095329f027298d1ba00b08643f"
  },
  {
    "url": "assets/js/267.89f4a322.js",
    "revision": "9e5fc3e4b9b6b0a6cee47c8eb8d32dac"
  },
  {
    "url": "assets/js/268.9df26bc4.js",
    "revision": "410416ac02e0a14cc193858d6b6b634a"
  },
  {
    "url": "assets/js/269.8177ae07.js",
    "revision": "9402bf2bfbb2cd7ff4a1518c07781ca4"
  },
  {
    "url": "assets/js/27.4adf860a.js",
    "revision": "527fe9c2063908b9938397301b52c80e"
  },
  {
    "url": "assets/js/270.b169800e.js",
    "revision": "178ae943c5da79fb692e472254e8325f"
  },
  {
    "url": "assets/js/271.24a3f772.js",
    "revision": "93091ad0823c67b8e8f947e224978424"
  },
  {
    "url": "assets/js/272.de958685.js",
    "revision": "4616c8e9f43ad70061f555a43d981bf2"
  },
  {
    "url": "assets/js/273.c7b0cd4a.js",
    "revision": "6639a9cf86d78aff7f86cb9ec286b2a6"
  },
  {
    "url": "assets/js/274.9e1d29f3.js",
    "revision": "6c394a4b88d221b3c9e7306b7dee9051"
  },
  {
    "url": "assets/js/275.a85bdd9c.js",
    "revision": "4ca40e322191c9b4697ae9f41a8fd90d"
  },
  {
    "url": "assets/js/276.31a6d351.js",
    "revision": "418d6e6d64c2122a00798313840cf01f"
  },
  {
    "url": "assets/js/277.54a021f1.js",
    "revision": "180523c6884f4212a0921298cc62e167"
  },
  {
    "url": "assets/js/278.b2751b74.js",
    "revision": "3fa2e7faf267c09a8f7712b314f6c425"
  },
  {
    "url": "assets/js/279.be23955b.js",
    "revision": "2a04e57ca124e2e0ed3b1055747b53a9"
  },
  {
    "url": "assets/js/28.04fbe66f.js",
    "revision": "5fc688cbf61afb37b2ed6862fbfae051"
  },
  {
    "url": "assets/js/280.5407ffa7.js",
    "revision": "2d0e8c962866a9f26e8ba33174f6cf4e"
  },
  {
    "url": "assets/js/281.20ee1215.js",
    "revision": "3b47d8f813b27b80591c38f30a2ed25e"
  },
  {
    "url": "assets/js/282.4a76c504.js",
    "revision": "99173f22db104d86bb3748aa4e0ffd17"
  },
  {
    "url": "assets/js/283.4f017775.js",
    "revision": "b14d45420ffd79d490310bf67b329aff"
  },
  {
    "url": "assets/js/284.5ff17606.js",
    "revision": "d4c6e08507496dcea30ae701bbde13c2"
  },
  {
    "url": "assets/js/285.95e09917.js",
    "revision": "e26f825feb6a28199388313b5c0e1f50"
  },
  {
    "url": "assets/js/286.58d67a95.js",
    "revision": "72127a58389e836f223b5e62472eb4ee"
  },
  {
    "url": "assets/js/287.2c551910.js",
    "revision": "07f49ad694bb8fb169c02bd00b50330c"
  },
  {
    "url": "assets/js/288.e3a5bb0e.js",
    "revision": "a85876de96b114e6fef8747c7721b164"
  },
  {
    "url": "assets/js/289.e4776872.js",
    "revision": "a0f71f16a1d551f473c207ee2a21857f"
  },
  {
    "url": "assets/js/29.55cca088.js",
    "revision": "519da0450196f8241ae98ed983b12253"
  },
  {
    "url": "assets/js/290.f1a7d87d.js",
    "revision": "64f4c91e960424b799c05ac0d239ccce"
  },
  {
    "url": "assets/js/291.eccfcaf7.js",
    "revision": "a337f157422a01b81814e53e528b079f"
  },
  {
    "url": "assets/js/292.b9ba7190.js",
    "revision": "01af35c97a464058ffc34e32256297b6"
  },
  {
    "url": "assets/js/293.b6ec8bee.js",
    "revision": "d3acfd2b58678daaa84df8e409bb7f31"
  },
  {
    "url": "assets/js/294.7b3c384e.js",
    "revision": "0e9537a3c85c2e13fb25f6b311a54df5"
  },
  {
    "url": "assets/js/295.7f636768.js",
    "revision": "3bcf8bdb354b7f99b2e29c50f850cae3"
  },
  {
    "url": "assets/js/296.c2b1d482.js",
    "revision": "15b0f40d760775661a12fc8abe3dcf70"
  },
  {
    "url": "assets/js/297.56de1528.js",
    "revision": "5480a4589e0186d52fbab5219aa45318"
  },
  {
    "url": "assets/js/298.bb4f6d30.js",
    "revision": "b3d5cd31717edf3371fabd55072bbc08"
  },
  {
    "url": "assets/js/299.71064a6e.js",
    "revision": "85176a4463b8ffcad1a38760f0ca11e2"
  },
  {
    "url": "assets/js/3.b4994248.js",
    "revision": "c940109dc7b47fc7be1857a38690a960"
  },
  {
    "url": "assets/js/30.b1ca6159.js",
    "revision": "98af35514238b53ff8023d84357d9ec8"
  },
  {
    "url": "assets/js/300.0a3dff3f.js",
    "revision": "379772680b5d6282315bd3343b6a0fef"
  },
  {
    "url": "assets/js/301.a998d187.js",
    "revision": "b89c600ef5199b0f781b64faec4e9bf0"
  },
  {
    "url": "assets/js/302.b0964d5b.js",
    "revision": "482e0b4894b9c4a2c00abc5da681d52b"
  },
  {
    "url": "assets/js/303.97c9991e.js",
    "revision": "aad3125c15a06e577c8a891aafdb2cda"
  },
  {
    "url": "assets/js/304.6a1b3a8e.js",
    "revision": "5548c94d6429c15efac1dcebcb54e082"
  },
  {
    "url": "assets/js/305.8316ee67.js",
    "revision": "4f283d74c18f55d33c704c15c9149bb8"
  },
  {
    "url": "assets/js/306.d7bbb5e8.js",
    "revision": "73051897d5d45c56cb09ab5fd5aa8621"
  },
  {
    "url": "assets/js/307.4f868ff3.js",
    "revision": "b5a0a8d0bef3703f0c6a33b10fddfa07"
  },
  {
    "url": "assets/js/308.55fda1dd.js",
    "revision": "dab3ab0221bbf58335831221d13b4345"
  },
  {
    "url": "assets/js/309.b5095cb7.js",
    "revision": "f96f42dc135e51a63e60338f2bd217e5"
  },
  {
    "url": "assets/js/31.0b30c6a7.js",
    "revision": "c3eb5736e16200c33dfd3d34fd945604"
  },
  {
    "url": "assets/js/310.5e18671f.js",
    "revision": "f9cfa0a84f39e54694d370006ce5746d"
  },
  {
    "url": "assets/js/311.600537de.js",
    "revision": "8909559151ead37d191ca1db4a6a0db0"
  },
  {
    "url": "assets/js/312.8d47f56a.js",
    "revision": "3d5171447b43f9ef4caaca010cdf062c"
  },
  {
    "url": "assets/js/313.49562829.js",
    "revision": "5493eed0cd2e3dc33420417cf1832057"
  },
  {
    "url": "assets/js/314.856057a1.js",
    "revision": "f3421634526a30128454128df87d1646"
  },
  {
    "url": "assets/js/315.2f6490bd.js",
    "revision": "66460c5ced48cc8a0978c97f1a5e2c42"
  },
  {
    "url": "assets/js/316.b700ac57.js",
    "revision": "1cb520fcc527791685a69d085425cf52"
  },
  {
    "url": "assets/js/317.a22b742c.js",
    "revision": "0d7423430d184c57d5a3fff57e481386"
  },
  {
    "url": "assets/js/318.3ea90052.js",
    "revision": "1dc7b992e370f5f870a0af3dc2801711"
  },
  {
    "url": "assets/js/319.dc587bb0.js",
    "revision": "8636f8166c4cf1bf652339dd10aaca04"
  },
  {
    "url": "assets/js/32.4094085a.js",
    "revision": "afb6d7e186ec07e15e8350c629fb8089"
  },
  {
    "url": "assets/js/320.69115d39.js",
    "revision": "c2a1780fc3fb559b659006dd6437d0a1"
  },
  {
    "url": "assets/js/321.3b2c23c8.js",
    "revision": "97c502b20d3ae5a684098863c4f744aa"
  },
  {
    "url": "assets/js/322.3d182c76.js",
    "revision": "587bda015b3cd0755e2469abbb820a2f"
  },
  {
    "url": "assets/js/323.fb5cb744.js",
    "revision": "4d24b9290e10a5af4e06c1778537f2f3"
  },
  {
    "url": "assets/js/324.27670db9.js",
    "revision": "10434850f2849e822a3bde3daa3e8eb2"
  },
  {
    "url": "assets/js/325.f7b7bdfe.js",
    "revision": "7783d4bb2ad4937478c51e8bcbe918ea"
  },
  {
    "url": "assets/js/326.1a8b4e7e.js",
    "revision": "43cd4b0e5ec49700859043c9a0225a9a"
  },
  {
    "url": "assets/js/327.63dbc098.js",
    "revision": "ef5c666062be5c1c07151c62255010ca"
  },
  {
    "url": "assets/js/328.f95679d4.js",
    "revision": "6739fd0ab0b3860b2ca390d7e1605a86"
  },
  {
    "url": "assets/js/329.84dc0a20.js",
    "revision": "eaa7f427368e739707641e307698cd99"
  },
  {
    "url": "assets/js/33.996652ba.js",
    "revision": "20cb0ce8fe20a1cc555a14fb3dcfd719"
  },
  {
    "url": "assets/js/330.eb37695c.js",
    "revision": "6da35a225038ab998933edfbeb8d7dbb"
  },
  {
    "url": "assets/js/331.d2c83f9c.js",
    "revision": "8d1d29ab67093f34d0918c4f37c34809"
  },
  {
    "url": "assets/js/332.f40c5d75.js",
    "revision": "8bfabb35f3de8736a2a1ee4d56f0cb88"
  },
  {
    "url": "assets/js/333.6c0e9339.js",
    "revision": "a0553bde46c0bcac55bbca5e63b412b5"
  },
  {
    "url": "assets/js/334.fb003723.js",
    "revision": "43c008d7839b9d2ff14dfad047c70f56"
  },
  {
    "url": "assets/js/335.a45eccc2.js",
    "revision": "325d8348e2ba0c9a0a4529969816f3c3"
  },
  {
    "url": "assets/js/336.ae30ef3e.js",
    "revision": "06caa3e971972f2110c5603e9c07d0f8"
  },
  {
    "url": "assets/js/337.5a045a64.js",
    "revision": "8a8c16edd48c569ff3158fd744f8aa7b"
  },
  {
    "url": "assets/js/338.6b8f4ae5.js",
    "revision": "4033be3f90ff619cb05f7226e0c68444"
  },
  {
    "url": "assets/js/339.62b0a867.js",
    "revision": "a6d5ea90c73b9373960b4cb948496452"
  },
  {
    "url": "assets/js/34.72b6e6ec.js",
    "revision": "8e48af8f77a0e7eed35a9874a475fd68"
  },
  {
    "url": "assets/js/340.7c258d81.js",
    "revision": "cdbbf97cfba23feabd791829e5e1301e"
  },
  {
    "url": "assets/js/341.ec2b7a86.js",
    "revision": "54a70c854c38cd4622bb4e2d6f3e5b49"
  },
  {
    "url": "assets/js/342.b0caf133.js",
    "revision": "cbad94a3a6d6dcb516f49cbb4337c414"
  },
  {
    "url": "assets/js/343.ed076270.js",
    "revision": "328666fbaf1b25da9e1981ead4f7c26a"
  },
  {
    "url": "assets/js/344.a37ecfe7.js",
    "revision": "49261deb82c965d3318621fde092efef"
  },
  {
    "url": "assets/js/345.c8531f78.js",
    "revision": "4c53dbb89baec71385148daa587124a9"
  },
  {
    "url": "assets/js/346.7a4eaceb.js",
    "revision": "4f022cce077f4b5412b33a37dc006508"
  },
  {
    "url": "assets/js/347.efeb9703.js",
    "revision": "f464fe60e05478d4cd527a2ae91facf8"
  },
  {
    "url": "assets/js/348.e6fe4d86.js",
    "revision": "966281a5d875480edd5e67c3316afbef"
  },
  {
    "url": "assets/js/349.51195b17.js",
    "revision": "bdfcbc6a3b3a57013867bd18ced27fcd"
  },
  {
    "url": "assets/js/35.3ed9c95e.js",
    "revision": "85daf062fb78f25c71b808865d64b620"
  },
  {
    "url": "assets/js/350.e23d816a.js",
    "revision": "4c4a618c57cad6232f28740d647c3a97"
  },
  {
    "url": "assets/js/351.439fbb1c.js",
    "revision": "2771d145ca590e5a400885bd1ebaf004"
  },
  {
    "url": "assets/js/352.d9c95f49.js",
    "revision": "6d17bc6102fe060a57caa9da5f6cd1a4"
  },
  {
    "url": "assets/js/353.cd42052b.js",
    "revision": "1d6e76f88bde32a9965c81c7569e4478"
  },
  {
    "url": "assets/js/354.22da18fd.js",
    "revision": "82ea9aab1a70062d47a08fb37a800540"
  },
  {
    "url": "assets/js/355.87114db4.js",
    "revision": "6b569cec9067111bc9f83bb04018851c"
  },
  {
    "url": "assets/js/356.1877e5a6.js",
    "revision": "5c5cff07f118955313d032429dd05142"
  },
  {
    "url": "assets/js/357.6dede37e.js",
    "revision": "990ae40c10dec1e271307b3bca74c79f"
  },
  {
    "url": "assets/js/358.db797a6d.js",
    "revision": "d22d9e8c3ea53ce27d9080d451c65146"
  },
  {
    "url": "assets/js/359.8cc0fd3d.js",
    "revision": "bb4d823614b7bff75ef1424cb661bd3a"
  },
  {
    "url": "assets/js/36.7a3cdb69.js",
    "revision": "eddc577aa64bef04895049c3b08d6d0b"
  },
  {
    "url": "assets/js/360.4ea0e0b5.js",
    "revision": "2f9bc82b637f2449e9c643e173dda431"
  },
  {
    "url": "assets/js/361.9bfd361b.js",
    "revision": "80296d94fbc46ac09442e5c11898e7ce"
  },
  {
    "url": "assets/js/362.c97809e2.js",
    "revision": "3909772be9faa859fa0fc81b45181c2b"
  },
  {
    "url": "assets/js/363.68ac74c2.js",
    "revision": "a9415f9d9c3295e9e82ae0679dbafd29"
  },
  {
    "url": "assets/js/364.97101dc8.js",
    "revision": "50bdbf3ef9693603bdb58aca60b078bf"
  },
  {
    "url": "assets/js/365.5e82900b.js",
    "revision": "e0464e5fca098ee02b771fb1a5dbfa28"
  },
  {
    "url": "assets/js/366.8d3dd07c.js",
    "revision": "57617332f894c292b0a66f24cb3f637c"
  },
  {
    "url": "assets/js/367.a2835789.js",
    "revision": "4738e13d6c214a80847f44b2435e3961"
  },
  {
    "url": "assets/js/368.6c0fff2b.js",
    "revision": "32aca843654a2ee778ec98efbc923b7d"
  },
  {
    "url": "assets/js/369.e2cdd8a4.js",
    "revision": "ac41e0d36cf2d163071c2beb623fb2f2"
  },
  {
    "url": "assets/js/37.472ee326.js",
    "revision": "1aa11058d15200d164a09686fd67e9de"
  },
  {
    "url": "assets/js/370.3f016371.js",
    "revision": "bd60c79010c5689f2ff0b6e2d126228b"
  },
  {
    "url": "assets/js/371.45eba527.js",
    "revision": "ecc851b6fe086b674eb2a98bd90ce9da"
  },
  {
    "url": "assets/js/372.01c0aafe.js",
    "revision": "375c6bfe5d91bf358ab214f6f5fee8be"
  },
  {
    "url": "assets/js/373.655eb0a7.js",
    "revision": "21a1ebed0f3add64e154d64fc5d8eded"
  },
  {
    "url": "assets/js/374.e4c57dd7.js",
    "revision": "9c87f285cf58188a77749649443d9b46"
  },
  {
    "url": "assets/js/375.4dd04b48.js",
    "revision": "7db8f5f6ca9c4f7348bc662f91aa1a58"
  },
  {
    "url": "assets/js/376.de1d9728.js",
    "revision": "49b6691d6b44c087219428027b81f15a"
  },
  {
    "url": "assets/js/377.cd749741.js",
    "revision": "ba95727143b3a3c72faac052cc3bef68"
  },
  {
    "url": "assets/js/378.cd51c6ca.js",
    "revision": "3b4a2313b327e6a32399cbfc9628fbd2"
  },
  {
    "url": "assets/js/379.d22df0ba.js",
    "revision": "ee8d365dd34a2ee812de646433243635"
  },
  {
    "url": "assets/js/38.9955e1f9.js",
    "revision": "6266eefc17d4de4386cf61635d992330"
  },
  {
    "url": "assets/js/380.eb25bda8.js",
    "revision": "c8b6611416b291e831a3d396dfd0078d"
  },
  {
    "url": "assets/js/381.9ddcba11.js",
    "revision": "b1214a2f5f5ed9272c957e5635f53bb0"
  },
  {
    "url": "assets/js/382.dc3b3f49.js",
    "revision": "e091a2413d9510122151a7e29a1b3aab"
  },
  {
    "url": "assets/js/383.14327036.js",
    "revision": "8c76067bfb9bf855f06175d78626cf33"
  },
  {
    "url": "assets/js/384.2aa82992.js",
    "revision": "6d5e78d7d26f7bcf8223f3860821b231"
  },
  {
    "url": "assets/js/385.8d301225.js",
    "revision": "ca60d59fe4ea111f0e50c7ae240c53b9"
  },
  {
    "url": "assets/js/386.ea922c80.js",
    "revision": "a48d35d38c5c0e85acb1b8797b0af24a"
  },
  {
    "url": "assets/js/387.0fc6dc8f.js",
    "revision": "b094bf4b4bb8d5e3ea19cfd5e3030fad"
  },
  {
    "url": "assets/js/388.907b2e82.js",
    "revision": "de21d7ba0e0ab1b6e94bcda1f763eeae"
  },
  {
    "url": "assets/js/389.db5aeb78.js",
    "revision": "c416104fbfae09e13fc0992d21d0934f"
  },
  {
    "url": "assets/js/39.374de475.js",
    "revision": "41b61bca9a2a4bd25952a6090cd8f986"
  },
  {
    "url": "assets/js/4.82832d6e.js",
    "revision": "a87385fc913b9febddbe495ddb6f5309"
  },
  {
    "url": "assets/js/40.cf46621c.js",
    "revision": "1c4d49fa81a4dc4f0bbe98b5259f1158"
  },
  {
    "url": "assets/js/41.e20e5497.js",
    "revision": "c07a313919a7846243bea81af47fb7c4"
  },
  {
    "url": "assets/js/42.ed817377.js",
    "revision": "903fba803760ec1e77fbb664f726f10f"
  },
  {
    "url": "assets/js/43.3d86579d.js",
    "revision": "4f6e6035649962a5e153893b2ef999a2"
  },
  {
    "url": "assets/js/44.5afdd3ad.js",
    "revision": "1bb944b032f6a37f8d8a48e503ae3cc5"
  },
  {
    "url": "assets/js/45.2159fb1a.js",
    "revision": "ed66640acb9da25ebe5d2b6d10b040c5"
  },
  {
    "url": "assets/js/46.0aaa4936.js",
    "revision": "77edbc73d1319c6580b1514b59359c49"
  },
  {
    "url": "assets/js/47.1a495acb.js",
    "revision": "ca640034bbff32a9738e5143ae8d5099"
  },
  {
    "url": "assets/js/48.72b4148d.js",
    "revision": "83941696b49b03c0b2092c01d96ee678"
  },
  {
    "url": "assets/js/49.7663d5f2.js",
    "revision": "657d0098b42d2d02a6785770338950c3"
  },
  {
    "url": "assets/js/5.e44e22b3.js",
    "revision": "2b0b1be5c3ffe525c152d369ab337926"
  },
  {
    "url": "assets/js/50.21579d4f.js",
    "revision": "1fcba2cbfda74cc544e70a40ce87820b"
  },
  {
    "url": "assets/js/51.bdb3edc8.js",
    "revision": "d35b4d42e10f5f74d74cad0b5f457ea3"
  },
  {
    "url": "assets/js/52.3ddf6645.js",
    "revision": "ba26b61da898d2306071764a2f568d90"
  },
  {
    "url": "assets/js/53.de02836a.js",
    "revision": "ea3d9c2f183c851c4f80317df2248002"
  },
  {
    "url": "assets/js/54.92d18095.js",
    "revision": "f57447a73dd893d2427988d1cf047fcb"
  },
  {
    "url": "assets/js/55.2cf37d59.js",
    "revision": "6f620260767fded054cf76a92d13ee55"
  },
  {
    "url": "assets/js/56.660f13e6.js",
    "revision": "d1d38885f085325a73ab4ac5212dbfd8"
  },
  {
    "url": "assets/js/57.10ea1ab4.js",
    "revision": "92e7e5b083565694e071074b5d98aa69"
  },
  {
    "url": "assets/js/58.1b012c99.js",
    "revision": "87a35f4cda6fa6c32b2c753b774d9db2"
  },
  {
    "url": "assets/js/59.ccde1ac8.js",
    "revision": "e0267cbf464712751c3f0cda8c3056cb"
  },
  {
    "url": "assets/js/6.d37485f8.js",
    "revision": "7f7e5f4ef65d7c42405dd8e42dabe0ac"
  },
  {
    "url": "assets/js/60.72d085de.js",
    "revision": "1e122c107d04e9238a49fee168506363"
  },
  {
    "url": "assets/js/61.dda20e27.js",
    "revision": "b65fa1e9e841b92cc5a1b553e62e00e6"
  },
  {
    "url": "assets/js/62.75125d63.js",
    "revision": "1dfecf21af7ae446682bbbfe1cc32779"
  },
  {
    "url": "assets/js/63.36ceaef2.js",
    "revision": "d1a1c3023f27628e63af9baffc099bda"
  },
  {
    "url": "assets/js/64.e5b7395f.js",
    "revision": "528487b6626afce70d3083b98be7f929"
  },
  {
    "url": "assets/js/65.a548e2c2.js",
    "revision": "b6e650137d65a21ae814680ad0199ae1"
  },
  {
    "url": "assets/js/66.61978375.js",
    "revision": "5eb861c3041fe7449eccb5357cc3887f"
  },
  {
    "url": "assets/js/67.c00d7d40.js",
    "revision": "0df3ffad9ac291553bd7976553521ed7"
  },
  {
    "url": "assets/js/68.645c2720.js",
    "revision": "6e01ac7090fa87ce828716bcf0130e73"
  },
  {
    "url": "assets/js/69.6ab264df.js",
    "revision": "57cda091356cea0c8562d643d10387bc"
  },
  {
    "url": "assets/js/7.d31996e6.js",
    "revision": "6582ca423286ab537a36de4140945852"
  },
  {
    "url": "assets/js/70.152d4b5e.js",
    "revision": "02aab43d46bebb5c2970eb568eedd81f"
  },
  {
    "url": "assets/js/71.27852484.js",
    "revision": "7dababa271f3f96187c2f8aa3c99f364"
  },
  {
    "url": "assets/js/72.46b08dfd.js",
    "revision": "89dfec6dedb86c1ad11b21ff5b84b0e8"
  },
  {
    "url": "assets/js/73.6fb5b9af.js",
    "revision": "9c662b5a25e9e8ca59fdaeaf81f5e01e"
  },
  {
    "url": "assets/js/74.21860dcb.js",
    "revision": "f373c249e2f74f6093d5fb21517144f7"
  },
  {
    "url": "assets/js/75.89708fe5.js",
    "revision": "9ea6a8c68ad53d22535327afddd8daf3"
  },
  {
    "url": "assets/js/76.ff507ab6.js",
    "revision": "63be40eb5df52448f9db4d6e531d8edc"
  },
  {
    "url": "assets/js/77.68fd8f09.js",
    "revision": "0e82ecfd0ce3ffdd604f9caeb4f3b578"
  },
  {
    "url": "assets/js/78.676c1f22.js",
    "revision": "7cd0bc83963d389fec37918d1c923662"
  },
  {
    "url": "assets/js/79.058d2c41.js",
    "revision": "108612d7c2a1e7119b15c801c7d2235f"
  },
  {
    "url": "assets/js/8.7e012b27.js",
    "revision": "b764c8f11bec341e04963c373a276527"
  },
  {
    "url": "assets/js/80.fb433d7e.js",
    "revision": "840cf97d6f8fa4100a009dd2ded29f11"
  },
  {
    "url": "assets/js/81.0bd4fe45.js",
    "revision": "1d3db8ea8f64b88e1ff501339723450c"
  },
  {
    "url": "assets/js/82.850701c8.js",
    "revision": "60b7c5c0095a3d71ed481873d78e3d5c"
  },
  {
    "url": "assets/js/83.f78c3198.js",
    "revision": "03fc170b012c278c8bd87c53853e75f9"
  },
  {
    "url": "assets/js/84.9a2b9c30.js",
    "revision": "446c67880387f8000750c9c39c8b0e49"
  },
  {
    "url": "assets/js/85.ad07e6e4.js",
    "revision": "f8d19211a723dab76e6321c8bf34fea8"
  },
  {
    "url": "assets/js/86.e5cf9df0.js",
    "revision": "273e04960be31338ecba7714652d77fe"
  },
  {
    "url": "assets/js/87.bd01984c.js",
    "revision": "b14187e2d92cc0789ec9d8a783bdbb00"
  },
  {
    "url": "assets/js/88.e9e333b8.js",
    "revision": "8884aedc8d0fb19a64d8068642306da4"
  },
  {
    "url": "assets/js/89.cb9e8bba.js",
    "revision": "335a85e405d7df33f08b66a57096fd01"
  },
  {
    "url": "assets/js/9.baad0012.js",
    "revision": "7fd9bb886c16ff4dc56ac37e28a532ae"
  },
  {
    "url": "assets/js/90.f6ce6b38.js",
    "revision": "e2756ff9cecc2b756cbe5b2280abe94b"
  },
  {
    "url": "assets/js/91.83939649.js",
    "revision": "3f695bc9bf216741abf7f3e1c8995dbd"
  },
  {
    "url": "assets/js/92.15955203.js",
    "revision": "4179bb5141fecb68491de0ab57340d98"
  },
  {
    "url": "assets/js/93.cfbb481a.js",
    "revision": "188713b9b60ce49ef93985502d4ccb73"
  },
  {
    "url": "assets/js/94.f3c77f22.js",
    "revision": "326d5c7c7b376d72dcf819bbd2230b51"
  },
  {
    "url": "assets/js/95.67a93163.js",
    "revision": "43a42e37e09ea3dfb6c9796f2b806314"
  },
  {
    "url": "assets/js/96.42af47fd.js",
    "revision": "0a56c4969ed1644d14a936a2b7f4fe7a"
  },
  {
    "url": "assets/js/97.433d55e8.js",
    "revision": "f964bacbcb8d493aaf1378dcaa12ab79"
  },
  {
    "url": "assets/js/98.e1248d34.js",
    "revision": "97a37de787fa42e0ed35060ee17a1de1"
  },
  {
    "url": "assets/js/99.3faa10c2.js",
    "revision": "139e46db9bd083f149496f8ec8db6b1a"
  },
  {
    "url": "assets/js/app.0bf2a671.js",
    "revision": "59eab3b9d6f3fc92f365c463f4d1593a"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "17f0a7a0ddfc0a1c225015821a84e1e8"
  },
  {
    "url": "common/architecture.html",
    "revision": "1c3b11e7055fc4cb27c80704eb6e4b5d"
  },
  {
    "url": "common/code-structure.html",
    "revision": "5881ef48b0ca0d3ed5913ceca8007f91"
  },
  {
    "url": "common/crawl.html",
    "revision": "7daf77bb82df4ffbe8f3645f37e82473"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "7d272073f51594e3e302c0a8a8466d4b"
  },
  {
    "url": "common/debugging.html",
    "revision": "42b43217fd7b1a05407ce5350bb8a064"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "40eb14bd8ef6c3ce751a49d80e06a482"
  },
  {
    "url": "common/document.html",
    "revision": "a2ed8cbb3ec01f2d3d34354f071a034e"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "3e1b714384bec2e0bd1762179e19071c"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "92bb4933df695bab7506cab4895861a2"
  },
  {
    "url": "common/index.html",
    "revision": "5b7c4d969b8087cb7b61d48ec4579a74"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "04a14162bcaaf2527d4e716a63dc4c56"
  },
  {
    "url": "common/realtime.html",
    "revision": "ae763f545c3e561344151b634382450d"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "462c8e1172b9f034c1b6c2b914e24201"
  },
  {
    "url": "common/refactor.html",
    "revision": "2a05a4f3e42777b8526f56302263c181"
  },
  {
    "url": "common/seo.html",
    "revision": "11ccbd4951e9bf3455fecf248b51c51f"
  },
  {
    "url": "common/use-case.html",
    "revision": "235e5999f91ea6f1f844f2802eb674a7"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "e3b2de7ed670deb8ad65e4e73faa0abb"
  },
  {
    "url": "css/tricks.html",
    "revision": "0cb13a287fefa72b80f9c4b31d3c517a"
  },
  {
    "url": "db/architect.html",
    "revision": "41d80c89e2eafbaa882d09a0ea841e5b"
  },
  {
    "url": "db/cassandra.html",
    "revision": "4689827ea30aa245b56d273360eb9a07"
  },
  {
    "url": "db/couchdb.html",
    "revision": "0f78749e24cf11bfae837afdf3998a76"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "b7d6e00c7dc4114276ecd106de5efa77"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "2f3a8c73f3b139a9698ec68266ba10f9"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "03a02889968c129e144388dd560ad9d3"
  },
  {
    "url": "db/nosql.html",
    "revision": "5d18b511cd69165a82916efeca4a28c1"
  },
  {
    "url": "db/optimize.html",
    "revision": "c688356aef8b80bec9453c8d2ad807e8"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "8cc38e04467cf12d922c7132f5acb20c"
  },
  {
    "url": "db/postgre.html",
    "revision": "1c04f0cbbecc8931ead8650e7270143d"
  },
  {
    "url": "db/redis.html",
    "revision": "a5989f1d8c4008e0a16e5d6ee7159362"
  },
  {
    "url": "db/use-cases.html",
    "revision": "cae8d95e0753cc04633c4b4b0146fa68"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "7b238b17dfd5418dbf0acfe87f9a96c5"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "ab78281d7e7215d63819c2b47e47c995"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "f23e221e08c2af6b077c9137ca3bcdcb"
  },
  {
    "url": "go/clean.html",
    "revision": "30f9e362d3d5d7ca0e84c261bc16d952"
  },
  {
    "url": "go/index.html",
    "revision": "f439318e9a91c1d6cee6d7bc50ede8e0"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "b7161db4e5d070683af88febc7831f68"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "14867bc33611d3a1eacecf36ac6e2edf"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "32eb6a0c154d23079449fb504d64812c"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "f4fc228b28a4b03124f8b715484446db"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "cb90a071e8b8df4ffdcb42e4c95f8b39"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "49bb079672bf224fb40f0fd3025e1831"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "9a0a7239cd1abebd034a1d1db55e5020"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "d7efb407e2aa72b3a7c3e5dcd1a88889"
  },
  {
    "url": "index.html",
    "revision": "718af503eac73f5d45c956be21362159"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "88864e89c30d2d685f70fdaadc895370"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "87c4fd60a1c8e4efd8a0e278fbc4f153"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "b723858a28abb5f9fdffdaf4d7175ea3"
  },
  {
    "url": "javascript/closure.html",
    "revision": "11264a10e439e473397b87a95c53f3c2"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "da1cabb24e6291293ce4b04405fc6564"
  },
  {
    "url": "javascript/functor.html",
    "revision": "e006196ca4bf66742806d325daacc0de"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "38973c75400251aded24ee1576393250"
  },
  {
    "url": "javascript/react/mobx.html",
    "revision": "513f812fc2b3fada2edbb6852073703c"
  },
  {
    "url": "javascript/react/react.html",
    "revision": "a89aefaf9d8596742ad7b15ca3ec1162"
  },
  {
    "url": "javascript/rxjs.html",
    "revision": "823a3731084a86249142b358d0d3b8f6"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "03ac5c61d0c35443904972da2a0341f7"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "21735d9a7025dad35c5f39bbfa7d72a9"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "0e715d95b09782ff1f527ac744ba496e"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "b5b84fd27d457afd79766ef2012d2a14"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "2b446a744e21e64e86ed13dee7030919"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "b73b2216267c471f96afd89842670bae"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "48af34e7f6b1d3305cc7f12254c4ae36"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "902c43217f75a5be122a1caf6647fb88"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "3d34f8bfaabe73b7d56b191acfef4dc1"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "0cdfaa53b7ef2f6bd63a4141306a4b42"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "8d60241e685e624a8a1a8b2635a37f32"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "dcf1524a61345a9f5caf4ce2f86a2083"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "7d84af843ae059ca19929ec7b889fdbe"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "89f4c1c08968feb889870abcd7dbf209"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "286834f4c70495c656834591abc16065"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "a0c821478d6ead66b4673c121edcddea"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "3b6a361f43a36f994b36cf6268bb9aa1"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "016d06a20a5cff4507245c940a79a6a8"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "478c2cd9b45e45e94655cf49e3a32308"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "d8955818b731f521866e3dfc283f8d89"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "08c3a53c28ee8b009c81c7a8cdf97e09"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "533f99d29d59b0e13f89bef63c776257"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "5bd3bb7d5ee71899e6d9bb6e5f0656c9"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "b4f81c841514206293531fb968680ad1"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "227e7844063b256daa25a7f9ab3fbc36"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "be88fe8c9bcf77f2c3d7ae39bd84ff1e"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "a020ee06dcc5b68c4171069636746dd2"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "65bfd5638b7beee004e7010df0054bc7"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "8831694667fa3e86958c62d437b5c64f"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "575ed9475a7badc58990d696eaba286a"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "a8c1475f970f5fa9556f52afb7b864f2"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "ac83e15482c3f697c4d9b681cb646dc9"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "bad0cd6dcedf584bb56570e38bc347cf"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "2d645f8bc2cb0333a28d18c8a8ce942f"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "02c7ba3bc64ced53266b7aa93e4126b5"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "5c253cd5be673d6a62de843021406c41"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "472e9c2b110417c2b9e16a6d3203573d"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "14ff2190513512b7ae4692a1413e0d9e"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "5bd95e9f42f4f7fe12035ef639cc1c64"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "2e69f56d625abd75d23559491c7a8762"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "d7de385a8dc931b93638c5643c37be33"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "2a18d9374bfe47336ab7fdf79071e5eb"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "3dcaeb0bffd0c8b3baff9885b56e87ee"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "cba169ea4b1c6dfa970f5cdc35da61b6"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "69d08c0452019e4dd96c367d3b827a3a"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "79b909c8afa00cfd45a9fc37904be5e1"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "5bfa23c781c84d3ecf424aca658ad84d"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "f3e0cbcd72505fcb2f9f75ee40bf3e6e"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "8480ced1e261e33cb3d3d785e5c34230"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "271694e878a725cae67e50d21b27436b"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "15dc244975f543e2f4a00d5431afa125"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "5fa791e10dfbcec5d7d8736f502f5b96"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "c357b4b658c1b3f2e36e15b1ee84912b"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "8c57c02510045fb8d9af5652d7f4134c"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "572c535e4e66fee3d19a3274eb763805"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "6c306daba5fff3040c8a640bcadc8861"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "7b8790060882fc65be563dd3ff41e07e"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "2fa617ef9938332666f1a05844e9b3d4"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "2cb0f64ffff3b84157ed201f099525ee"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "1676522b3a9bc579c46d65b322a479fd"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "7fb3a9c661d04cecb8728c41c2154762"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "954c8553f3267314fcb0612ba1ab6b67"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "0ecff2627d63316450750c3267eb0716"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "81c8a6b82aeedd01a69c733cee5a52b4"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "6eb4c121614ad3a9dc6d6ab766954b0a"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "d27078ea5a34bcbd976bde11c6f7cc61"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "194d28825f27515d113b01d7ad07bc91"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "2cf07e72f985fee5428d7491b4488f11"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "a3058e434d01d80f66726c1410d85ca0"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "c1e9bfbf44650bf5bcc64dd7475bf333"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "c1ad36a9820e5c3e5b148cee64281112"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "adf939624b7e78160cbde6d488c30842"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "7512df5314a546a85f2cf5e0bb7944b9"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "490a9458ce0c19a135c79d16559ec15c"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "9cd710a3b5ae5365ddcae1d40387f044"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "eda54911bc21246b9b5b64b871f9a6d2"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "82ea9f7140274dde4bd492930f0da794"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "12d49bb447ed4f76dd8f6849c90b89d6"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "d73c29c0054cca59c91c8a0c90066e93"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "2b15242047f022c526001390c8672fe0"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "54d6412594313fafd4862a612810e7c8"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "00480c32b0e7f4a6ede11eea20bd9bec"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "e67ead1cabb7eeedcc9f1683781facd6"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "eab05f70fc205c59480298f49d475ce5"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "1d8c28c838fea444461f668d12663e0a"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "6faeed02096c6309c04e094e0617a513"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "4ef511cd558bb807aeb9d8578d8f4fe2"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "bb510be70ceaab1168f3bfe1f4740c61"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "411623c1eabd782a67552b71a620d713"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "a9f091a748769088c9aae8bdc79acdfa"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "044c9ebb424098a39e4c7fa5d80af1f9"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "314f215d50a2266823ccc04213c918d6"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "22f8313cbbeb1bb780734952e5e82a8d"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "ed166455032efeb3e05de313c40228d1"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "c778be8c902af8d6e55833d0d9d76f88"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "fc5a70c9e7e1121b4545b9d953845172"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "0e0330ad8afc2d2cbbd3c3643a50e2e3"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "524c98040b80fc47fab283abb00690e8"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "7e51eecd6780912c5f39dc4292c34fbb"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "9763cdb23877995634c7203e80074d5b"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "6fdf2798bea8f5945f0ba7edac33bf6f"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "ac60a8c0f0dec817c0eaba33bf0bf6ec"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "565df1f44e4e15f174a74ecb9987e9eb"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "89039706a6d2b3b72ad0204c2927c106"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "87a96674e457bb061c77affb14ca3f07"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "c6be1786a052119f98402bc3452b070d"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "3240a4fa542ada524a44769a3d887d09"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "8c583d53c7ffcecb5f7c5e39114122e1"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "5fb75afcde168c80986e9de3147daf84"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "1334a8ba9c21c0deee2ad072ea435c47"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "a0124c02a77c3d2ec59c0b3311a55474"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "dca27e36e9996bf7f7fd1f3a8621b3e6"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "4ef7f92d642e02e277bed307742f7d84"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "f3ede20a92d32319b94909a0db239b83"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "9589c189736b003b1847d8f567fabe03"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "221aa85e3d431c1de6548ee551995d55"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "2f48e89f853a26c1cd0649dc5d33c72e"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "493b78403fdb9188507f762e7d47a6f4"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "df672715510802db71ab9d2f9aa6be60"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "262cc913c4ddb50f7e2e2f4fc795e173"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "13d35f8387dc179ca3630f697ba1cb51"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "2af5a7b7a18198ff2f70defa65448ffe"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "170bb39ca9218e3e66ad79eff95f1bc8"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "a826989ed725b4153f13c9732142a2af"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "71bea87cce1222669f97d7dfe112176d"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "5511aca95ba93956775b35c39f0e70c1"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "f2f7250872410130272fbb828abe06d0"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "28c5af3c480513c5a1ea4c6275636286"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "979d326cacd147037a19fd02cfc80517"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "fcf63331418dfe07d65d7d67386f4316"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "c0d417ea1c8e3c8696ebfc43f746efc4"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "ede16acf623453389fc604e0f34aab2d"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "b071738ad6a4b78526d0a5d1394af753"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "1f9baf243e6f8fac743c1a57be0fdd4e"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "b62f6fc98d22c5428b5dfeb844ce415c"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "ef87f56705130ff09f3e912dd76009c2"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "8ed676b916a327948aeb7abe5e0de56d"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "223dfba3fec764505c7b1bb4f479cd22"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "2fbd97e4b579d52d21f7c903bba56538"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "2332b103b115ea49e85124bdd337e0f4"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "c6349e48458644d1a063b95ab44c5bac"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "bba41d9e79cb084f1df4ffe22dbe58d9"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "dbfec191b7d872b71b16f56d8a9c8cde"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "47f459ea1bb78e0b5fa2696550e8c92d"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "4a91d5e6a2796a1d415ff8097211576f"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "3743780d5a86fc1961648fe2765c846a"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "e402141ad666762d3e5fe6a876407843"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "c51680d086306420aaaa44a677b1ed20"
  },
  {
    "url": "kungfu/js/vue_react.html",
    "revision": "a313360e37c550cf0934ae43dcd089cf"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "4887d7bcca97f3bdae96f989e323e2e4"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "9aeacb27925d1dbf194a821a75650268"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "eaca3ecebf34026161ecfa5cd6b9e6d2"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "d8cade6caa9e05be4b337764f9bfe7d6"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "5ad321cc0920ef02c229bea427990630"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "2a869bae0b1f383865adcbec20bf28d3"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "0d8d9b7354a1f83f4c1079177949427c"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "196b09c749962b0e75b0d63ddab2942d"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "343be258319023e82b23e4a92da76c80"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "ea41ae871b8f400336360028c9580ead"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "33c65d8e631097924d59fe3b593224a8"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "360833f83307c3fab8e54c427161c7fd"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "6f921f8dee7d125bde6b5a26a4c1cc57"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "fdf13840c0cd3e5f142b0603b26f4dc5"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "79399f81dc2d396b4406d50eb78148f2"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "871b60165bad2a6345ba3f2a5310af89"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "5b9238bd76d1292292d812fd223a1bd1"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "35d9eddd4b5f826b151b025b8108cc45"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "f4c5428e7500f876a802f6c40f9a5e76"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "dfb3391273f78b20bc84346841da890a"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "fe00cfe0ba9aa1b4f4906bcee2fc3043"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "1d0d6e68cc882f2bf6a41170627aec02"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "1b67baa67d91804618054b9a0bcd9c42"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "b85ec1ab6ee69cefa7587b347717cde7"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "8a6ad53e14f932705922b09f6ab7b75b"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "35197e038cbd15e914356d12e1d69fa1"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "f91cf6c5d7875234f30315c6586cdeeb"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "10b4911dc784aa9d05d456dc75d82aff"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "dbcc7f5341903c22a62dc3fcf81d6ebe"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "8b10ee92b926415f7593b41df1306a08"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "0d57e58aeb3f6db37d17c25dbd436679"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "e4de61c8dd27d479a85e6b9622f4252d"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "373d237627a55483b0d508cf6ef4bcc2"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "69591a9dfcc5e84d2b6dde3bb23420ae"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "e9fc967812ef0d47415ed66c9be25083"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "0a3682b616266f1a3854a947d15efc2d"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "e950c95ebbc143247233115897fa7669"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "09a326a6f74683968e3f6c9d54642fa4"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "33e8a679e8c23c3c441cd5a098782b88"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "7620eb075ef75b11cd474076fcde1f9e"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "e6476e34c0c1b1f59798c0f56a865f00"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "63ac0cc2ad823bc4d7ba0b5609155799"
  },
  {
    "url": "kungfu/template.html",
    "revision": "6e420ff25299437b5e9594be02959ec0"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "11e02142462b96a453c4ce4a1b9ae9ae"
  },
  {
    "url": "node/env.html",
    "revision": "7762bac12ee8040bb950fbab536fed74"
  },
  {
    "url": "node/index.html",
    "revision": "da25b9a7ea7f0f42c4cd45e9b0a0312a"
  },
  {
    "url": "node/n.html",
    "revision": "5420cc427cf609a685eef701e8df0f29"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "025ca3fabffa8fb0e00e2b67bd12ce6d"
  },
  {
    "url": "node/npm.html",
    "revision": "2f29766278228f99e1b7e33bbd42e3b8"
  },
  {
    "url": "node/sequelize.html",
    "revision": "3762e1e53256d7c5cd2e3a2c0d9fe13c"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "f315bdfbf370c3c57087a9fff5d7a99f"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "033a7dd02e6db9647ed4a1f247794316"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "aab93e215dafc294286bfdbbdcda340d"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "e7d1bdc3697eaf19a2d3dd5e52f6f32e"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "eb8a5b72f6daa420323b6d96e927451b"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "b5b0c40f4b96578c2a83868d2fdff51c"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "77bf356f841ada853cafd9d29e6d383a"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "88213d1e419e8e67536ea67ea39ae11d"
  },
  {
    "url": "php/clean/di.html",
    "revision": "08e0e4430a1ef5ed464945f05996fd39"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "33c78a58cea959c6bd5af8ded1ee7ab6"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "cc46ab01293f2ecdff41b58a5feead66"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "95bb3ccdcfe7aacbb33ea1dd8502938c"
  },
  {
    "url": "php/clean/index.html",
    "revision": "6975876b799c1decafc337c34944888f"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "fb7018a5b7af0772962d19b9507a5ecb"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "df67478655b9e58bde1f1e918fe1c6a3"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "bad9349aafd39b4ee4cccfd1f6fc5fc8"
  },
  {
    "url": "php/composer.html",
    "revision": "14b540af09df25374ab1cd6968939166"
  },
  {
    "url": "php/crunz.html",
    "revision": "d2a6b7840ac4b31bb1634848afed4608"
  },
  {
    "url": "php/laravel.html",
    "revision": "3baa306ce303bb3039f031238a2b80a1"
  },
  {
    "url": "php/magic.html",
    "revision": "3199e6fa869794634395b3a868b95f08"
  },
  {
    "url": "php/notes.html",
    "revision": "e8fda44e0a3ba5373ee9b0a25106709d"
  },
  {
    "url": "php/oop.html",
    "revision": "6b8d71b2625739eaf5ed03765c4e5edb"
  },
  {
    "url": "php/php7.html",
    "revision": "69a0a5dc182d727ccb48bd07b8ee52b0"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "93447d27545c8fcce426dbe5d3b5e323"
  },
  {
    "url": "php/reflection.html",
    "revision": "87a7014858869dd6bbbc1b77fb6d9305"
  },
  {
    "url": "php/tricks.html",
    "revision": "d34da684681aaeaa23f1c5cbc48ba7c0"
  },
  {
    "url": "php/wordpress.html",
    "revision": "78d8f3329349f63bc83736c632667892"
  },
  {
    "url": "quotes.html",
    "revision": "6ab180fde352f56d475eff5cffd8bfac"
  },
  {
    "url": "refactor/notes.html",
    "revision": "d70ed66e0659069b92c37a31a39eae1f"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "b4e40c11e1dfd0c6d55bba7878c31d97"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "2d1a7a7f3bcdc59ab796ed0570867e26"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "818fa4a849dd4ee56341c556a71eb10f"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "b7ca947b23c83e26eb3ebd154a858dd7"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "bfd3d3e7da0f58b7bbae79b96f697ce1"
  },
  {
    "url": "snippets/jest.html",
    "revision": "e66589289a80978a346e3ea582042deb"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "47687bafc7e0527e78c9006333cef43a"
  },
  {
    "url": "snippets/regex.html",
    "revision": "39aa7ed34f1789f22abf47cf21086863"
  },
  {
    "url": "terms/12factors.html",
    "revision": "c6930f46c53ec6b43114d057781d1900"
  },
  {
    "url": "terms/architecture.html",
    "revision": "bd30d0986c22bf22b82ad69a376fa9a6"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "cc8330d4857edce4e402ce4e621fe7bc"
  },
  {
    "url": "terms/di.html",
    "revision": "fb9ad68d7589660755a331bc6d9dece3"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "d822c2522f5717e60133cf219c0c64d1"
  },
  {
    "url": "terms/javascript.html",
    "revision": "dc91c16ef27e84c52746b6e11e7b3600"
  },
  {
    "url": "terms/patterns.html",
    "revision": "46d009f0f889c18404071f85d922ba54"
  },
  {
    "url": "terms/principles.html",
    "revision": "6f4047d56e915a726286147d9b410548"
  },
  {
    "url": "terms/rules.html",
    "revision": "de17ebfe64ff8d6f91f6d68c3a73a12b"
  },
  {
    "url": "terms/testing.html",
    "revision": "41b0b357a7fb1dc9a7500bbb1e281342"
  },
  {
    "url": "tools/chrome.html",
    "revision": "be810e9a98def88e2f14e13e5a24f51e"
  },
  {
    "url": "tools/docker.html",
    "revision": "bbb1889328d955ce0a78efd39a7d107b"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "6634fd7cacb8333a170a8b07f50a6882"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "543c19c7c99a773d46010c43cf171745"
  },
  {
    "url": "tools/graphql.html",
    "revision": "4c69395d78892cbbc4113cba6012abbb"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "a23e61d03f4654c282e280230f8f2c29"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "2051a727dfd16a8455ba6bfc53fb858b"
  },
  {
    "url": "tools/redis.html",
    "revision": "d71d3c331d0320a931c22d955638e0d6"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "6c3d5c11c56cbcf46780502fdea9f092"
  },
  {
    "url": "tools/vscode.html",
    "revision": "36fe5334cf7a4a0f6c7eeb55c29dfdc6"
  },
  {
    "url": "tools/webpack.html",
    "revision": "430b47e254d42d6a1969675bc1ba1190"
  },
  {
    "url": "tricks/compare.html",
    "revision": "1b1432ebe75d667fcb71ff8802970d39"
  },
  {
    "url": "tricks/git.html",
    "revision": "7e53e3a530196f5e4618c0a5b55f93e9"
  },
  {
    "url": "tricks/linux.html",
    "revision": "14985b9a39bd980bf4dc43cef0526668"
  },
  {
    "url": "tricks/mac.html",
    "revision": "4f1dcc6a88f3e86d9ec3e5f6098e8342"
  },
  {
    "url": "tricks/misc.html",
    "revision": "cefbe716b14a76b18654e6d83787c1c4"
  },
  {
    "url": "tricks/setup.html",
    "revision": "c3de9a87a122e777dd6dd4adf09043dc"
  },
  {
    "url": "vue/communication.html",
    "revision": "cdb13276f2cc82d6fe683daf10e12cff"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "53cfb328ebb5e4729f5ee34d60d69afe"
  },
  {
    "url": "vue/events.html",
    "revision": "4b3fb525db1e46b87c03abc2d340f553"
  },
  {
    "url": "vue/references.html",
    "revision": "d3a3d6fd3b205c13180bcaa8c42cbda3"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "b5ec9eee24086b9201ecfabc9ea83407"
  },
  {
    "url": "vue/test.html",
    "revision": "7a6b44edb3b6b878979cac03cbd01f34"
  },
  {
    "url": "vue/tricks.html",
    "revision": "ed7179d02226bcd52b56fd28065181b1"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "641786ffd8e82d816dfc180143e83365"
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
