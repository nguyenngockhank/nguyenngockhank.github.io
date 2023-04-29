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
    "revision": "b7ac364ed3402b98f4f92625989e07cb"
  },
  {
    "url": "ai/AI-note.html",
    "revision": "f3de01cc726d5fad618090f0737ef132"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "90ae430f011bf1a398bddd3b3911c578"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "4519dde1fa098b85c8f724b9a99b71a7"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "ecb765e863e5ccc0cbcf30b5add8567f"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "29d5458acf8025c4d1c30ccfc6a6acc3"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "c3c35acbbae0797424a8c982ca4f3898"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "ec211ccb1894b51f405e4dea2ac5c216"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "4c17de481729bce4926dbbb9c29c0d28"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "2353946082b6adbcf89c044803f412d9"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "990e36cb79d0b40e3ea97c2832ec1ae5"
  },
  {
    "url": "algorithm/string.html",
    "revision": "6becfb6e5efcb29ba578b38ebb6b96ca"
  },
  {
    "url": "algorithm/sum100.html",
    "revision": "14826c1591e614b0b26bbf929f4f18d9"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "57a8171059f2cd8570796be9af9fb1ba"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "f8c9196c5016d9ad096af75bfd6499e2"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "eef94bc089d53ac2e20c04ddcdeb9aa4"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "67d9419f36e553f3f9994f3faac68f43"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "a9f2b77335a7de9ccab34767f18ba132"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "f45e63f16132a9ff035ec5e11798039f"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "1773c77fcf37d39700ad75949eb32485"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "c17dd556b2ff38e2ebfbfac5c539f023"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "06cdabbcfb30880d35c5776d33dfd49e"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "21f159d7c6b9905bc3d02761d7e20a5d"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "5a32e787f441ca2f13ac0bfadf9d9385"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "969849ce846c5884ff2daa176804b68a"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "e250a90b85cc7d0fbe9e75200364fb1f"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "4c01cd1d7c9ae9fc2267c8258172d938"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "aaf82d3eebf27c1bafd2d1dc3233d637"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "fd9cdb7983f2582b2670c4d482116e80"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "256da52b76e50aa17d9cd93e208f7b5d"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "6c1bd90c5abac01f8c49a71872683944"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "4bbc33d03f8ded163889105177b86a74"
  },
  {
    "url": "architect/audit.html",
    "revision": "8495161638934296846b8d44535315b8"
  },
  {
    "url": "architect/authenication.html",
    "revision": "1c6f5cef5da678338ffbddcc5be8fa65"
  },
  {
    "url": "architect/authorization.html",
    "revision": "a78cec928bef0343c0a379083e3810cd"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "e152957a9574e546a8bda59dee61f007"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "72ea0cf96cfc51f7704525420b23ef34"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "2a884fbf58c1c5fc651cfce65bf80bf2"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "546876003105f811fb13407be04dd0cc"
  },
  {
    "url": "architect/ebi.html",
    "revision": "c635ce1e9a0328595110eb830cc6ea12"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "3e6bbce5e8f1164996a66802e366ced9"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "821bedf46ce965d58b708f75cc5e3e20"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "327355e9c763ab8b52e657ba2b85b4c6"
  },
  {
    "url": "architect/index.html",
    "revision": "eb9e489d13b9318570a7b7c0bff666c7"
  },
  {
    "url": "architect/jwt-handling.html",
    "revision": "bd2134692ccd0e46d29092a8088f6b64"
  },
  {
    "url": "architect/messaging.html",
    "revision": "317dceb132e590a9bf5cce42512d1f01"
  },
  {
    "url": "architect/microservices.html",
    "revision": "12e7b975192a5aa351d6dd79c3a866ee"
  },
  {
    "url": "architect/mutex.html",
    "revision": "24101cbdba6afe6f9bf4e6172804cd58"
  },
  {
    "url": "architect/notes.html",
    "revision": "0b4513addd93a32c5aa8bdf78d9f458e"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "491e178ed626e90f3017a4efd9eb7119"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "ec4ff9d2abad1343aeae672675b66530"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "563c11c4578aac7696110e067a6679da"
  },
  {
    "url": "architect/refs.html",
    "revision": "d1451890115eb50e69a7d89706edee4b"
  },
  {
    "url": "architect/soa.html",
    "revision": "387f6b3be73830142c118bccd6226367"
  },
  {
    "url": "architect/spa.html",
    "revision": "4ceb7ca458282e1d28210be8d1324915"
  },
  {
    "url": "architect/terms.html",
    "revision": "a2a060f18ce40619651b2b82877a50e1"
  },
  {
    "url": "architect/webservice.html",
    "revision": "e4767cc04911316ab806ddf0b1450a8e"
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
    "url": "assets/img/websocket-load-balancing-issue.6df3eee9.png",
    "revision": "6df3eee9b6848a5987d30c6c5e17de79"
  },
  {
    "url": "assets/img/wp-metadatatable.c1b9b204.png",
    "revision": "c1b9b204a09aaad8283b901339daac87"
  },
  {
    "url": "assets/js/10.04d6f514.js",
    "revision": "c712ab3f18b06c09ddcf1232ea8a6f69"
  },
  {
    "url": "assets/js/100.1743f527.js",
    "revision": "a4d0d854371d8fdc960c05c1e361aee7"
  },
  {
    "url": "assets/js/101.20d1fbab.js",
    "revision": "b1059c33112026a50a0dcd38b8d0ed51"
  },
  {
    "url": "assets/js/102.2063cae7.js",
    "revision": "54d3e73fb5eeaaf90e8e927fb2761e90"
  },
  {
    "url": "assets/js/103.fb8f7dad.js",
    "revision": "7a63e5a8f5420013a6e1ee97e9825da9"
  },
  {
    "url": "assets/js/104.e0fdd8c2.js",
    "revision": "9c9a12c73bc34796c10231c4cb37079c"
  },
  {
    "url": "assets/js/105.4eb62fe8.js",
    "revision": "63ec4ab8842132a1319c78c508ffd78c"
  },
  {
    "url": "assets/js/106.83ead03b.js",
    "revision": "208aef2adf3de20b0eadc59eb572a384"
  },
  {
    "url": "assets/js/107.06c7b690.js",
    "revision": "68aec75b7885c04a10ec276fc6e312ec"
  },
  {
    "url": "assets/js/108.2e15d0ef.js",
    "revision": "01b8070ed3fbea815927e9948b83668f"
  },
  {
    "url": "assets/js/109.d8e33257.js",
    "revision": "484b640678db0f0950ba562172b00403"
  },
  {
    "url": "assets/js/11.149840e3.js",
    "revision": "25fdc4d06a5a20f8b77a9061dc2385c3"
  },
  {
    "url": "assets/js/110.633302c1.js",
    "revision": "8e0a515a1683e3317d4549961fd84e44"
  },
  {
    "url": "assets/js/111.9889134f.js",
    "revision": "db5950e1944961cfe7f494b326d79b0f"
  },
  {
    "url": "assets/js/112.7faf233f.js",
    "revision": "10d0a44aa33a0a4b08e701e86f100880"
  },
  {
    "url": "assets/js/113.830f292d.js",
    "revision": "53e69889059fdd7d27890094efae986a"
  },
  {
    "url": "assets/js/114.39d21f94.js",
    "revision": "33caa6bf2e6b9150c40c6286b7bc22ae"
  },
  {
    "url": "assets/js/115.6fc27ed3.js",
    "revision": "ad203fd347621b5acdcb66d18245a6e1"
  },
  {
    "url": "assets/js/116.acdfa436.js",
    "revision": "c554d93063604136214d60ec93b90542"
  },
  {
    "url": "assets/js/117.21ae213d.js",
    "revision": "ea7c732e2282306cca29227547ea7200"
  },
  {
    "url": "assets/js/118.ba99c97e.js",
    "revision": "bb33d0a4de2118a48b5ffbe3fb11dd68"
  },
  {
    "url": "assets/js/119.b88e4398.js",
    "revision": "b7b7675a29fd09460ba39067445414f3"
  },
  {
    "url": "assets/js/12.95d11043.js",
    "revision": "cc8d1eeb3823083f87146ec0e42c964a"
  },
  {
    "url": "assets/js/120.11d9d727.js",
    "revision": "f786b8b5cd85fbada92cdaf4a4990882"
  },
  {
    "url": "assets/js/121.fa0a3041.js",
    "revision": "7a07327628ceb2f9818f56d1082e951c"
  },
  {
    "url": "assets/js/122.1c43267f.js",
    "revision": "d1e945470fa964b5f072e1b795fe8a76"
  },
  {
    "url": "assets/js/123.ffabd2e0.js",
    "revision": "f45bc51655c992cfcfc4c24cbe9d98da"
  },
  {
    "url": "assets/js/124.94ea835f.js",
    "revision": "959e51b01a0e562227d16ffc74050769"
  },
  {
    "url": "assets/js/125.4e777d51.js",
    "revision": "3dff920cbd9c5a8c27c1ea272e9cad2d"
  },
  {
    "url": "assets/js/126.b476eae0.js",
    "revision": "418bd30ea9905580b1217b7c6e8471d6"
  },
  {
    "url": "assets/js/127.1005f115.js",
    "revision": "116871d00e8407d9c575a656e92a4aa1"
  },
  {
    "url": "assets/js/128.faab44d2.js",
    "revision": "deb44845dfb3cdf83989d59b021b3c6d"
  },
  {
    "url": "assets/js/129.98ed9c31.js",
    "revision": "16b452a7f99fb5cf142f3c9bf20b56f1"
  },
  {
    "url": "assets/js/13.577ce694.js",
    "revision": "0f415854fdf9b11b09cf7e652b428c82"
  },
  {
    "url": "assets/js/130.3deb397b.js",
    "revision": "4266caa250304d1167617df9ed9ed94c"
  },
  {
    "url": "assets/js/131.630877fe.js",
    "revision": "2ee694147360b285e0f5a113fb9e95d6"
  },
  {
    "url": "assets/js/132.5280ca6e.js",
    "revision": "07cc6dcfbee33a3156b7f51f2a5db437"
  },
  {
    "url": "assets/js/133.189c8d83.js",
    "revision": "5b4893eab4be0241b6b5fa38b3485144"
  },
  {
    "url": "assets/js/134.50eca53f.js",
    "revision": "3b9440f3b02a6805e74869cadba0de05"
  },
  {
    "url": "assets/js/135.50b8b967.js",
    "revision": "71cde8376fd4710b556a550188c290da"
  },
  {
    "url": "assets/js/136.71bc7c7d.js",
    "revision": "f3115cf643f09ee829558a301a4081d7"
  },
  {
    "url": "assets/js/137.5e7dca87.js",
    "revision": "fba77062a9c78d518955efcffddb8a0b"
  },
  {
    "url": "assets/js/138.b3061248.js",
    "revision": "2ec8cd55f21bdbbb16f3460069e3fed4"
  },
  {
    "url": "assets/js/139.b453060a.js",
    "revision": "9c1bd884ee4fb439ed9f1f3d6626b307"
  },
  {
    "url": "assets/js/14.682e0ba1.js",
    "revision": "062300adba95b2bce2634985c91718c7"
  },
  {
    "url": "assets/js/140.df9e5c1f.js",
    "revision": "510ef06cd52eccbdf30aef5f60fdc098"
  },
  {
    "url": "assets/js/141.8227faca.js",
    "revision": "cc0f17b71370503e807a99292be1fa61"
  },
  {
    "url": "assets/js/142.770378a0.js",
    "revision": "692d064850c102592c6522436d31986b"
  },
  {
    "url": "assets/js/143.22fd6d13.js",
    "revision": "8b397802e79ccf33c7eadc14ddcef131"
  },
  {
    "url": "assets/js/144.42476b9d.js",
    "revision": "cddcaf182ec83130d0268a18ead08177"
  },
  {
    "url": "assets/js/145.6915b114.js",
    "revision": "013a6ea940689fe33bffda02adf2a701"
  },
  {
    "url": "assets/js/146.c2d5f3a0.js",
    "revision": "42180200e52a2bf156555b9276c5f6cc"
  },
  {
    "url": "assets/js/147.4e2c3757.js",
    "revision": "44490e24bdd3f7626c677995cb5d5448"
  },
  {
    "url": "assets/js/148.2a3ff3de.js",
    "revision": "7d3131e5f9d5160195f547d8b14253e0"
  },
  {
    "url": "assets/js/149.393d7f48.js",
    "revision": "c48510940ab1e8b8cce7c49f2d899e13"
  },
  {
    "url": "assets/js/15.67908360.js",
    "revision": "ef21965a40e0f2125e763cf5efc80451"
  },
  {
    "url": "assets/js/150.240508c6.js",
    "revision": "b35560fbef9fe4a3cae8223a775f18c5"
  },
  {
    "url": "assets/js/151.58b4f74e.js",
    "revision": "6579d46086b293bca4689aa37a162d55"
  },
  {
    "url": "assets/js/152.17a0e926.js",
    "revision": "95aa227ae2f4e5a7e8476457f19817d9"
  },
  {
    "url": "assets/js/153.5c85c306.js",
    "revision": "23cb1c0dfb979449817fc1d2ce3055f5"
  },
  {
    "url": "assets/js/154.c3c7787d.js",
    "revision": "b49c1ff937663fc6c4c327cef17e232c"
  },
  {
    "url": "assets/js/155.f69fc079.js",
    "revision": "93175007b83f354137579846adea5bfd"
  },
  {
    "url": "assets/js/156.64d7a86f.js",
    "revision": "7e9ce3adde52f5e992f48dbec175a4fb"
  },
  {
    "url": "assets/js/157.fd78f84f.js",
    "revision": "8aea807f1d92ed893e4d4f4fc1d58b07"
  },
  {
    "url": "assets/js/158.622019a8.js",
    "revision": "e2c0fa218679f98a1ca675c95e45664e"
  },
  {
    "url": "assets/js/159.425deb23.js",
    "revision": "1d55fea77c01d55f3248eeadbf508671"
  },
  {
    "url": "assets/js/16.64a4ee20.js",
    "revision": "fc73ed451a31cf5474e34d35af2b6c7d"
  },
  {
    "url": "assets/js/160.b3a33f09.js",
    "revision": "bdcb19b36a7f607617763b4c4bfe0f15"
  },
  {
    "url": "assets/js/161.7f236c3a.js",
    "revision": "5e69f7d8bdab01586447528c6300d48d"
  },
  {
    "url": "assets/js/162.66b1d5a0.js",
    "revision": "f159104350f30989c291855583917b8e"
  },
  {
    "url": "assets/js/163.fdc65b0e.js",
    "revision": "d4f736472d2bcda922e0b4a5d248ddba"
  },
  {
    "url": "assets/js/164.0f5456c8.js",
    "revision": "075e537863ebb7cbcc611adfdd2fced5"
  },
  {
    "url": "assets/js/165.c40b6d7d.js",
    "revision": "096868d402bb8bad5ceed69bdc152b8d"
  },
  {
    "url": "assets/js/166.509bf141.js",
    "revision": "9464432f602a21bcff8c836ae7b36a76"
  },
  {
    "url": "assets/js/167.e1ee40b2.js",
    "revision": "82fd0266c15361e7d7a0838a71aa072c"
  },
  {
    "url": "assets/js/168.de702fed.js",
    "revision": "e4f0a2544a60b0ba58f97ccf0859be35"
  },
  {
    "url": "assets/js/169.ca1253c5.js",
    "revision": "0ecda077d906d63f9c12da10d26b7382"
  },
  {
    "url": "assets/js/17.96696c86.js",
    "revision": "9689096cfa3049f38963752316c0b5b4"
  },
  {
    "url": "assets/js/170.45f4a517.js",
    "revision": "ef83b05db6119445b7f373f2a37def80"
  },
  {
    "url": "assets/js/171.f11965ba.js",
    "revision": "b9b718857dc96732732b7857aa596010"
  },
  {
    "url": "assets/js/172.d28fe120.js",
    "revision": "2dfa507b1d3ae89f9eda2cce43b23158"
  },
  {
    "url": "assets/js/173.d3495d0d.js",
    "revision": "93deb756ba0169c697b28ddd2552c756"
  },
  {
    "url": "assets/js/174.48f62557.js",
    "revision": "5c16f13a8cb74d58e59964b524a80e71"
  },
  {
    "url": "assets/js/175.340254b0.js",
    "revision": "529f5f9e46f480a34e74d09fc8d5c81a"
  },
  {
    "url": "assets/js/176.e0b466d1.js",
    "revision": "f1b7a7bceb255d20d8796d9eb49afee3"
  },
  {
    "url": "assets/js/177.32abf4c2.js",
    "revision": "ddbb2a94a77a0417d3a0b747fd98cb28"
  },
  {
    "url": "assets/js/178.df1bfbfd.js",
    "revision": "96d3bde6a2137e9d97f3c1a4db1dbf2f"
  },
  {
    "url": "assets/js/179.5d820b70.js",
    "revision": "c6d6976f94fc2eb0e52e7cca4b2ff02d"
  },
  {
    "url": "assets/js/18.f1ffa2c7.js",
    "revision": "5044b7345dd3ef6addfac91bece7eb9c"
  },
  {
    "url": "assets/js/180.6c424ea9.js",
    "revision": "66d429de28978edf1b0497a29ce65e9b"
  },
  {
    "url": "assets/js/181.b2bb49e3.js",
    "revision": "b3ed5aa89a66e283c8e6f0ae753a9d7a"
  },
  {
    "url": "assets/js/182.89fa43c3.js",
    "revision": "94ad8121f251ee6289d5636b6d042e10"
  },
  {
    "url": "assets/js/183.e5862f12.js",
    "revision": "893be97101f610814f5d445317290ed4"
  },
  {
    "url": "assets/js/184.38bf4ddb.js",
    "revision": "0f1220ff9d3a9a755dfd6b9503649945"
  },
  {
    "url": "assets/js/185.e5cdac13.js",
    "revision": "a10b555c7910b28d0a249e6cd83dde7e"
  },
  {
    "url": "assets/js/186.9d52f5c8.js",
    "revision": "6cd627f43f310f123bd7e1445491129f"
  },
  {
    "url": "assets/js/187.92685458.js",
    "revision": "97071c913d7f49e9d5c4ff03d1b0c370"
  },
  {
    "url": "assets/js/188.90b46da0.js",
    "revision": "e5395a2f4709388d556047b9b534d3c4"
  },
  {
    "url": "assets/js/189.eb9d0c62.js",
    "revision": "8b53c951cce965d4e00de1a6c9480c53"
  },
  {
    "url": "assets/js/19.de41f3a6.js",
    "revision": "68835b0e49181935b1feeb336dcd4edc"
  },
  {
    "url": "assets/js/190.5f8f82af.js",
    "revision": "f7d1d2150e27bedde8b88f421b5da2d4"
  },
  {
    "url": "assets/js/191.929ef26b.js",
    "revision": "a09edb26c34c3bb1bac5cb9915837d1b"
  },
  {
    "url": "assets/js/192.e2a01ea0.js",
    "revision": "502fef175cc9ddd90308b961cd24e952"
  },
  {
    "url": "assets/js/193.4a5ab832.js",
    "revision": "24f3214a7cdcb0d3617d16ac12e53ebd"
  },
  {
    "url": "assets/js/194.15b83b21.js",
    "revision": "c9c24823083df90687bbe79a0b92deae"
  },
  {
    "url": "assets/js/195.9c60657f.js",
    "revision": "d47066cf534d14cc6addc96a7695a37e"
  },
  {
    "url": "assets/js/196.6d9fecd7.js",
    "revision": "dd894e7320ad566418090f4c6aa24e06"
  },
  {
    "url": "assets/js/197.c252baca.js",
    "revision": "dc5ebf22b366b4cbe730fb0bcb0977c2"
  },
  {
    "url": "assets/js/198.89b8f268.js",
    "revision": "caba2fc489cad61bb800237d06760019"
  },
  {
    "url": "assets/js/199.eb5338d5.js",
    "revision": "4b8552f05eee652e3d2fd988206abe14"
  },
  {
    "url": "assets/js/2.797e8bbe.js",
    "revision": "e429e92b34fa81bcc29a5652fa589204"
  },
  {
    "url": "assets/js/20.27c2736f.js",
    "revision": "13d40d622a6559bb844d850e0eca2c10"
  },
  {
    "url": "assets/js/200.3b1a255f.js",
    "revision": "d62207d8aa8818106e939c18c5708155"
  },
  {
    "url": "assets/js/201.67a1e060.js",
    "revision": "9841d9e6a48c799dc80d8bcf342c264c"
  },
  {
    "url": "assets/js/202.6bf0352d.js",
    "revision": "8a2e56958fa7097be69c5c47c7b19624"
  },
  {
    "url": "assets/js/203.00296e11.js",
    "revision": "d2103a06a3fd39d39d8e8c9417c7264e"
  },
  {
    "url": "assets/js/204.e6f09d3c.js",
    "revision": "a9dc3cdab14ed9f74194d6649fd8602d"
  },
  {
    "url": "assets/js/205.3220d21a.js",
    "revision": "838b4ce925a2b350eee89f921da8eda7"
  },
  {
    "url": "assets/js/206.f92a5bab.js",
    "revision": "920e0cd73f9ab307a786ec058e6ab9aa"
  },
  {
    "url": "assets/js/207.5cc25d9d.js",
    "revision": "7b802797994b6212a0f6e6021ba367e9"
  },
  {
    "url": "assets/js/208.eff21bd3.js",
    "revision": "e714b62b526774a9086c39cfb287d981"
  },
  {
    "url": "assets/js/209.a4a28a8e.js",
    "revision": "94f7a47f4fae9804b6b846bee0b0b8d7"
  },
  {
    "url": "assets/js/21.0754acf9.js",
    "revision": "504aa5665db4ac1eec99ed642e62094f"
  },
  {
    "url": "assets/js/210.18add890.js",
    "revision": "977cced91ddcc1a529dd42f7f7d9a49e"
  },
  {
    "url": "assets/js/211.2d1cb5b5.js",
    "revision": "4b44316461f03603bdbd75c70cab9bda"
  },
  {
    "url": "assets/js/212.3d9b8b73.js",
    "revision": "139415f4ca3904b9c562b4779b8f63d9"
  },
  {
    "url": "assets/js/213.0a57e8db.js",
    "revision": "d4cf4285002dad04b614faae7ba84842"
  },
  {
    "url": "assets/js/214.5a3d88e1.js",
    "revision": "e67019bea5199943feef436d70db5ffa"
  },
  {
    "url": "assets/js/215.c838e6d8.js",
    "revision": "a024f81c03a3a409f1bcbae507550946"
  },
  {
    "url": "assets/js/216.3e209495.js",
    "revision": "6f275c4c01ee6f8cd87d15c89ad95fab"
  },
  {
    "url": "assets/js/217.619e1d8e.js",
    "revision": "5707412368cabe1bd913ae51c39a8900"
  },
  {
    "url": "assets/js/218.5f7ed69a.js",
    "revision": "3c0ee7e2a970b65380c09f362a18e471"
  },
  {
    "url": "assets/js/219.dd335482.js",
    "revision": "97307da16e2bf5028c8c039653a19e0f"
  },
  {
    "url": "assets/js/22.a66aa4d3.js",
    "revision": "ca06b0fcbf98bb9343ec0727898936c1"
  },
  {
    "url": "assets/js/220.a47604a0.js",
    "revision": "4858cde2316c163dc85765c38bbc414c"
  },
  {
    "url": "assets/js/221.efa76cd2.js",
    "revision": "360d724c67874093b785a76614a3e677"
  },
  {
    "url": "assets/js/222.0083f1dc.js",
    "revision": "9b4f1cd71969af45ef842b0717c20182"
  },
  {
    "url": "assets/js/223.02396990.js",
    "revision": "2e4bdd3bfb6e5b2a625bc7b1366d8c6a"
  },
  {
    "url": "assets/js/224.eb1c2243.js",
    "revision": "45b45dfd85ebdd702e8742c038fb8155"
  },
  {
    "url": "assets/js/225.fdf50ac9.js",
    "revision": "b1a4500771bf337e41e9ceeec6102acb"
  },
  {
    "url": "assets/js/226.394a671d.js",
    "revision": "c698cdce1ac8e0d675430c883155262e"
  },
  {
    "url": "assets/js/227.ba969e3d.js",
    "revision": "b59c5501cc8b25fd69c19cac0c69e119"
  },
  {
    "url": "assets/js/228.f4accecb.js",
    "revision": "4586636c2ea0ee30394eb1d4f8a2671b"
  },
  {
    "url": "assets/js/229.447b7795.js",
    "revision": "0164378f597fcc313eeade583e654656"
  },
  {
    "url": "assets/js/23.35fdc02e.js",
    "revision": "d82265969251a2b30058a484fa8d8652"
  },
  {
    "url": "assets/js/230.bb3d5c9d.js",
    "revision": "d9fdaa0bb4b295010ed01351119c6069"
  },
  {
    "url": "assets/js/231.633beadf.js",
    "revision": "7791a9fb6f1ebadbc21fccfb809c89bb"
  },
  {
    "url": "assets/js/232.8118f1c8.js",
    "revision": "ea9da4717dfe99a87a8794475e566f9d"
  },
  {
    "url": "assets/js/233.620e577f.js",
    "revision": "48bbb87146d9f5ac2d58d35c4534d176"
  },
  {
    "url": "assets/js/234.ebe05297.js",
    "revision": "072f0140a83341b9d3fd813b13c68e39"
  },
  {
    "url": "assets/js/235.f3de41a0.js",
    "revision": "b3dd0060b414ac083f173c9a83195388"
  },
  {
    "url": "assets/js/236.a3a8653a.js",
    "revision": "a93ddf22cbcc449c99e77b3f47b665c9"
  },
  {
    "url": "assets/js/237.8131229b.js",
    "revision": "848c6f700b84f76eceab27332245fe9d"
  },
  {
    "url": "assets/js/238.87834b50.js",
    "revision": "384c92d1ed422029824ad4af6454a101"
  },
  {
    "url": "assets/js/239.7463d4d3.js",
    "revision": "c813d3da1e1d88f2623aa0d694da8618"
  },
  {
    "url": "assets/js/24.4eba8937.js",
    "revision": "4e9107a99ac3a15f2784c1819888c0e4"
  },
  {
    "url": "assets/js/240.158037fc.js",
    "revision": "88cdac2d64db913a782f9e15c25913f5"
  },
  {
    "url": "assets/js/241.0de014bf.js",
    "revision": "9abe06d4df66dddfd1919ffa0e35e6d2"
  },
  {
    "url": "assets/js/242.1a9d108f.js",
    "revision": "8839341c7566e586aeae7c64c7bcff0b"
  },
  {
    "url": "assets/js/243.e95c18e5.js",
    "revision": "3b78dcf94b3455169d8e4cba5dde67e4"
  },
  {
    "url": "assets/js/244.077b3498.js",
    "revision": "7bf0e80284c8202f163b24fd9be8999a"
  },
  {
    "url": "assets/js/245.82865ef8.js",
    "revision": "b61a7ddb8470fdaeea58959bfa5c5f4f"
  },
  {
    "url": "assets/js/246.4c3ea69b.js",
    "revision": "597e1a502b6cf4330a770b19ec1dc46a"
  },
  {
    "url": "assets/js/247.eac65c22.js",
    "revision": "c6efda7bd649231e42eb1664295b2b5f"
  },
  {
    "url": "assets/js/248.309735cb.js",
    "revision": "e2b378266c7686cb7679e3850390a399"
  },
  {
    "url": "assets/js/249.2f17e029.js",
    "revision": "1f0feeb1c74fdbc7b969de7811ccaefe"
  },
  {
    "url": "assets/js/25.708b28de.js",
    "revision": "e6ed76e227b7d81ee5b7d62514f3bd99"
  },
  {
    "url": "assets/js/250.317d2d32.js",
    "revision": "03e0f2dba31413da5e61f516f77e0b0b"
  },
  {
    "url": "assets/js/251.c4a42541.js",
    "revision": "6bc5cd794fbf49e9aa9fdfcfdd380b82"
  },
  {
    "url": "assets/js/252.67d88495.js",
    "revision": "20df68d592349425366bf9471d0eaa14"
  },
  {
    "url": "assets/js/253.ffb6e6bf.js",
    "revision": "7e77ca7726b0d68e7543c612ddb12e2a"
  },
  {
    "url": "assets/js/254.e1988140.js",
    "revision": "a9f6c42c1eab042c70f4c1103af6088b"
  },
  {
    "url": "assets/js/255.e351e823.js",
    "revision": "9a0b294adc1b5c3c8a185078b0f19083"
  },
  {
    "url": "assets/js/256.866dd54c.js",
    "revision": "d7527c145ef44c7ee6b3c69977f54368"
  },
  {
    "url": "assets/js/257.4084dcd7.js",
    "revision": "fe38159030dfcf4de1abc75aada36b7d"
  },
  {
    "url": "assets/js/258.26723741.js",
    "revision": "976ea42565269bcdec6a860c3db8ad6a"
  },
  {
    "url": "assets/js/259.ed13fa39.js",
    "revision": "d62000ee4e53402b3b03ee93ffcab559"
  },
  {
    "url": "assets/js/26.7c87d14a.js",
    "revision": "68925ad4be03600738a6362b91e14176"
  },
  {
    "url": "assets/js/260.10ae6cd9.js",
    "revision": "e2b827a6c7878b19816ae19e300d8cf5"
  },
  {
    "url": "assets/js/261.35d70aef.js",
    "revision": "087cc313576e9cbaebc6314fc67727db"
  },
  {
    "url": "assets/js/262.d5943787.js",
    "revision": "8a4314ad565198572f64f3b2951a80db"
  },
  {
    "url": "assets/js/263.0d1803f8.js",
    "revision": "3ef1593584ad65312a067c8e7b0fbaae"
  },
  {
    "url": "assets/js/264.fb1eae74.js",
    "revision": "edf22147d5238c8854a781fc0bee4df1"
  },
  {
    "url": "assets/js/265.e08775dc.js",
    "revision": "bb9861d7ab4e79705fefc2968743f0a6"
  },
  {
    "url": "assets/js/266.938515ad.js",
    "revision": "eb622c762739a9a23ea5f6c5ee02d602"
  },
  {
    "url": "assets/js/267.bfcd4f19.js",
    "revision": "2fde276f4aeb6f44239bd99b19e02bd3"
  },
  {
    "url": "assets/js/268.5d286990.js",
    "revision": "45a9b7bf9dd963e40e8d49c3e2b38593"
  },
  {
    "url": "assets/js/269.1073213e.js",
    "revision": "bd9873f28414fb1da1f43383170fb2a9"
  },
  {
    "url": "assets/js/27.47c4100b.js",
    "revision": "6fc961f4de6b4354a6705a15af79daa7"
  },
  {
    "url": "assets/js/270.c0b059bc.js",
    "revision": "a8a86c9f9b4b6e73c256f90c74b77899"
  },
  {
    "url": "assets/js/271.2dd88c8d.js",
    "revision": "a6d395c999f81b05b6bdba06b3b8e25b"
  },
  {
    "url": "assets/js/272.5a19cea4.js",
    "revision": "97eda23b7e493c7fd8a276067f8a6ce8"
  },
  {
    "url": "assets/js/273.01ba5d35.js",
    "revision": "c987afd97aedf57c44a5aee387ae3efa"
  },
  {
    "url": "assets/js/274.ef9f37fd.js",
    "revision": "5d9933b194174afc0007b4bae99a3460"
  },
  {
    "url": "assets/js/275.2e345bcd.js",
    "revision": "8dc18f488fc995abf9cb13133b5e5f18"
  },
  {
    "url": "assets/js/276.f7c9d2df.js",
    "revision": "b79e76c088675f72e46add71768a88d4"
  },
  {
    "url": "assets/js/277.29a775ff.js",
    "revision": "c714f1624ec5d86bfc503e36a7c5a661"
  },
  {
    "url": "assets/js/278.0ed4f855.js",
    "revision": "e26fdcef0b3d5b067ad43b5b09605d10"
  },
  {
    "url": "assets/js/279.b1265cf4.js",
    "revision": "b63ddfb2417ffa69f93a418f66f74f3a"
  },
  {
    "url": "assets/js/28.76de9cc7.js",
    "revision": "acd15d16a1ea1c297955f0ec386a7fe8"
  },
  {
    "url": "assets/js/280.dcf5f482.js",
    "revision": "1a9a5233b37d0152d0a69865329fc246"
  },
  {
    "url": "assets/js/281.265d64fd.js",
    "revision": "080879de79a6384bcdae0d9b5989a08a"
  },
  {
    "url": "assets/js/282.a8ca4a20.js",
    "revision": "0d5c64f0cc0e82ae5c9e8abaf9f913fd"
  },
  {
    "url": "assets/js/283.9bcc3b50.js",
    "revision": "30044494b6c1b683c16e5cdbf526467a"
  },
  {
    "url": "assets/js/284.2c1daef0.js",
    "revision": "c411e7c76d639e039ddb73829b21eb44"
  },
  {
    "url": "assets/js/285.2d635303.js",
    "revision": "ad563a7cfdf944693c148140886370f6"
  },
  {
    "url": "assets/js/286.6813a8a4.js",
    "revision": "f1a3b9c553f7963ccfa6df848fcbc27b"
  },
  {
    "url": "assets/js/287.fe50a578.js",
    "revision": "0c0d9248188a62e747647a13f37c623e"
  },
  {
    "url": "assets/js/288.4ed1dee5.js",
    "revision": "f23256560aeed339eb8ba8fc67fe036c"
  },
  {
    "url": "assets/js/289.c97ee60e.js",
    "revision": "bb1e3a63be6422d65202fdd204a0dfea"
  },
  {
    "url": "assets/js/29.4014aab7.js",
    "revision": "dc92655ff99a5c190844adcc1f442360"
  },
  {
    "url": "assets/js/290.2922d314.js",
    "revision": "28a3130b3e46d2c89e23558f9abe4c5f"
  },
  {
    "url": "assets/js/291.4503503a.js",
    "revision": "74f1a071f149f86ded26eb34648f0479"
  },
  {
    "url": "assets/js/292.e30c376c.js",
    "revision": "5acb929db821fc772c91c97c5d0200cb"
  },
  {
    "url": "assets/js/293.c0d3bacf.js",
    "revision": "0a76c09db99baecfc1a0e5ee35bba9f1"
  },
  {
    "url": "assets/js/294.8ed8ba66.js",
    "revision": "96bb63bec35460b12d1d655e11face95"
  },
  {
    "url": "assets/js/295.44970a84.js",
    "revision": "d614aa7ca7513eee1740e5a7910df3d4"
  },
  {
    "url": "assets/js/296.de09222a.js",
    "revision": "d8fb3de7e6726a160d58946dd7ddad27"
  },
  {
    "url": "assets/js/297.0823e5cb.js",
    "revision": "f67cee995cdf17ab25fef30db96defbc"
  },
  {
    "url": "assets/js/298.f7008561.js",
    "revision": "86315010434d9f8e569604e7976b4de5"
  },
  {
    "url": "assets/js/299.b018a0bf.js",
    "revision": "46e35bd8c7c2380361171a10e3275fd4"
  },
  {
    "url": "assets/js/3.ec8b7a0d.js",
    "revision": "e6ef9b80a23cc00b93a637ae3ba75214"
  },
  {
    "url": "assets/js/30.e6c0f92b.js",
    "revision": "1de56a6fea10c6f7b59e4055b5fec979"
  },
  {
    "url": "assets/js/300.5cad1d16.js",
    "revision": "a4541c85fcebab4552083b6035ba3dfc"
  },
  {
    "url": "assets/js/301.35f0cb6c.js",
    "revision": "67fa8402712f92d363d02bd26f371bb5"
  },
  {
    "url": "assets/js/302.45cd42af.js",
    "revision": "af2da8ee6d4ee489272afe5e91af16c2"
  },
  {
    "url": "assets/js/303.f19cd49f.js",
    "revision": "b3d8d532e458b603db126395582ab53d"
  },
  {
    "url": "assets/js/304.a63fdf2f.js",
    "revision": "4ca4f6102d0d23ebebb7b6609c602eca"
  },
  {
    "url": "assets/js/305.82e68b06.js",
    "revision": "d8fd310f7af00878769f08d5078ac260"
  },
  {
    "url": "assets/js/306.418ef37e.js",
    "revision": "b40393da4e9df0b487cef98ee0630d3e"
  },
  {
    "url": "assets/js/307.6b573ade.js",
    "revision": "150494b6ce4599b6bb051d0e2dd84a23"
  },
  {
    "url": "assets/js/308.67939e72.js",
    "revision": "d3f2fa521af8821cd3d8655b1b6d8d7f"
  },
  {
    "url": "assets/js/309.6e077cdf.js",
    "revision": "de78e0234f0a2cb311abeaca9504139a"
  },
  {
    "url": "assets/js/31.a2de8827.js",
    "revision": "6b8c908654b6f17655ea6b878e7df888"
  },
  {
    "url": "assets/js/310.a6d493a2.js",
    "revision": "a5c384582b741ab726041eb34607d066"
  },
  {
    "url": "assets/js/311.ece38254.js",
    "revision": "cc260c20f1fa379857ff07c4b6a273cb"
  },
  {
    "url": "assets/js/312.ddcd9ab8.js",
    "revision": "c609b4a434c0ea8a507904752ca67f24"
  },
  {
    "url": "assets/js/313.e3abc5ba.js",
    "revision": "1ea744c780e3b005a62d7822a2f68a73"
  },
  {
    "url": "assets/js/314.160600bc.js",
    "revision": "0ca4da44b4e95802ac0d5075a52fc017"
  },
  {
    "url": "assets/js/315.7703baa2.js",
    "revision": "cc4450e064319cd4677298c9ce40139b"
  },
  {
    "url": "assets/js/316.0e260b55.js",
    "revision": "b99f7a08697ff0dea6cfdbfac081f52d"
  },
  {
    "url": "assets/js/317.ff1c3827.js",
    "revision": "fdce099729777cea0927f6440bcf89a5"
  },
  {
    "url": "assets/js/318.8532524b.js",
    "revision": "6837cf5f910efe4f9859a79228f48318"
  },
  {
    "url": "assets/js/319.ec8cb480.js",
    "revision": "d70b84c714d383c126f9fad62cf85a5b"
  },
  {
    "url": "assets/js/32.0084ff0c.js",
    "revision": "1af901bc98678aaa81c9b2916258f8f2"
  },
  {
    "url": "assets/js/320.f3e6809b.js",
    "revision": "cd9a3800590e9b1fce8e96dbe7b93226"
  },
  {
    "url": "assets/js/321.f49e2ce5.js",
    "revision": "ff15965b62c0426a0b7d9de205eb4491"
  },
  {
    "url": "assets/js/322.c89f2612.js",
    "revision": "bd7f793ef16c388afc8fe24656c4e0a2"
  },
  {
    "url": "assets/js/323.fa436cf9.js",
    "revision": "6fae0c649400ef835e65d9ddcf48b0f4"
  },
  {
    "url": "assets/js/324.5eb297e6.js",
    "revision": "9a01060ea14e4636bf567e795cf49f0b"
  },
  {
    "url": "assets/js/325.3c7abc0e.js",
    "revision": "480faf3144d3b3346556f5afd643aeeb"
  },
  {
    "url": "assets/js/326.5bb60dfc.js",
    "revision": "51da4eba1e5620b27c8363eb3b44448d"
  },
  {
    "url": "assets/js/327.280372a4.js",
    "revision": "0f39c11bc37dd280df7a07d718cb5c63"
  },
  {
    "url": "assets/js/328.bd3effd8.js",
    "revision": "ee1721235936e885beaeb3f89904d8bb"
  },
  {
    "url": "assets/js/329.3680be1e.js",
    "revision": "7dbb47299156de4c99e924fb032de20f"
  },
  {
    "url": "assets/js/33.f34b3b76.js",
    "revision": "322f54a4bbc56c3c64e7e8b920b94485"
  },
  {
    "url": "assets/js/330.e5ac5319.js",
    "revision": "4ab689955b944846f5452a208e6cf94e"
  },
  {
    "url": "assets/js/331.33939d5b.js",
    "revision": "e51b412b825fc2ee1ace4be97b440653"
  },
  {
    "url": "assets/js/332.c34e3a13.js",
    "revision": "520f416cc57aaa3a0cad7c1130eea245"
  },
  {
    "url": "assets/js/333.3f3a7bae.js",
    "revision": "86f1fd119b59801b43c4701c54680b9e"
  },
  {
    "url": "assets/js/334.c1dcd77c.js",
    "revision": "d1a82fb3404969f2421a171012dd52b3"
  },
  {
    "url": "assets/js/335.18e6296f.js",
    "revision": "3677293e0c5ce7e05ec2101c637138b9"
  },
  {
    "url": "assets/js/336.3ede53c6.js",
    "revision": "1d8832c1f2e4481f8e05467e0c2a8a8f"
  },
  {
    "url": "assets/js/337.b917c778.js",
    "revision": "a0932565838d05ec2b1ea6730b51a739"
  },
  {
    "url": "assets/js/338.e88e8743.js",
    "revision": "5f734cc5cc54c1e11de8555092ca4bbf"
  },
  {
    "url": "assets/js/339.9917fa55.js",
    "revision": "f0f5fd5270279dfcbdcf0850ec5664d3"
  },
  {
    "url": "assets/js/34.f58122ba.js",
    "revision": "7c1316a855f78f3bc41cb032220708dc"
  },
  {
    "url": "assets/js/340.ecca5a9d.js",
    "revision": "f17479c2830376e615e4cfa7e90e47fe"
  },
  {
    "url": "assets/js/341.c9fbcda8.js",
    "revision": "5cbe06d18b73acb463f3a73d087a0b66"
  },
  {
    "url": "assets/js/342.3627d2dc.js",
    "revision": "d7df2bb12a82fac261261a40d8abd528"
  },
  {
    "url": "assets/js/343.9722f1cd.js",
    "revision": "ec16a58b188717c6432edbe2edb4c679"
  },
  {
    "url": "assets/js/344.c5fef0e0.js",
    "revision": "0617f3dd5462679aa1845fed4e728ba6"
  },
  {
    "url": "assets/js/345.6d30342f.js",
    "revision": "467e87e07bf69374ea3fad98596a0209"
  },
  {
    "url": "assets/js/346.bd5b2946.js",
    "revision": "24ec38c4e9f511e5da7b8f55c7a91400"
  },
  {
    "url": "assets/js/347.58425de8.js",
    "revision": "8d2ca852bb7acaefe7cee84c8a669b42"
  },
  {
    "url": "assets/js/348.7c50e8f6.js",
    "revision": "1991f221d41dc1e60412c22008d2ad3f"
  },
  {
    "url": "assets/js/349.670a6cdd.js",
    "revision": "78ebc02a45f7ebac003d528cbd18d230"
  },
  {
    "url": "assets/js/35.de929929.js",
    "revision": "c79c920bd336abd6af01814e2d127021"
  },
  {
    "url": "assets/js/350.b7b914c4.js",
    "revision": "3189ee390941ebcfcc9b22db8beda14c"
  },
  {
    "url": "assets/js/351.ece3a622.js",
    "revision": "40d60f9d556ec350aa3ac8f3ae7f7423"
  },
  {
    "url": "assets/js/352.847f2010.js",
    "revision": "e5de915e64cd8f841d74af65177c6263"
  },
  {
    "url": "assets/js/353.f98b23a8.js",
    "revision": "6a9e01357af6a36fc973792642d5e73e"
  },
  {
    "url": "assets/js/354.0ff56491.js",
    "revision": "2c57efd0f8647b8ce32bc5d5b5f1a686"
  },
  {
    "url": "assets/js/355.8e309352.js",
    "revision": "4c41507592c3f4128e3714904c5262d1"
  },
  {
    "url": "assets/js/356.9dea90b5.js",
    "revision": "4e0bfa649643d53b1041bae4334bf169"
  },
  {
    "url": "assets/js/357.30b78af0.js",
    "revision": "2c99e9b8bc7605e834bfa26bb8eef7a3"
  },
  {
    "url": "assets/js/358.153e3e8d.js",
    "revision": "2c7c2c9847081ab2bae054eb614dddff"
  },
  {
    "url": "assets/js/359.a7639e40.js",
    "revision": "305510cd489ee566d647361c7fa4f691"
  },
  {
    "url": "assets/js/36.b1dd5283.js",
    "revision": "b72c818d4814839b824b979be25bd4f9"
  },
  {
    "url": "assets/js/360.ba4bfadf.js",
    "revision": "ff1d09eff415cb5f4adb8e01bedc4398"
  },
  {
    "url": "assets/js/361.7b6bf514.js",
    "revision": "d351e0b7e1ce29955a78f901725111b8"
  },
  {
    "url": "assets/js/362.f00b21d6.js",
    "revision": "16f5d70fe6b122f03a44262cf6c08f9c"
  },
  {
    "url": "assets/js/363.07b32947.js",
    "revision": "66d296b94abb12d863f4072ce3f6131a"
  },
  {
    "url": "assets/js/364.3c6f75d6.js",
    "revision": "08a9fcafb27a8fa3d09c9d0d6dc3c783"
  },
  {
    "url": "assets/js/365.fd93af72.js",
    "revision": "2908739bf247fdc53455c80ff1e46b77"
  },
  {
    "url": "assets/js/366.68e83351.js",
    "revision": "2ecb0abaa619effda03b7ad0213de0e9"
  },
  {
    "url": "assets/js/367.3d595d4d.js",
    "revision": "6ae746c438b53fdb28abc1af35434b68"
  },
  {
    "url": "assets/js/368.e77ce07f.js",
    "revision": "af172592df07e6dbfac9239ee155c096"
  },
  {
    "url": "assets/js/369.ca9291bb.js",
    "revision": "bb46874a97d9c7ede702bff0a89b79fa"
  },
  {
    "url": "assets/js/37.33ac0a78.js",
    "revision": "5e1129f405a3ca27607cb4b838985093"
  },
  {
    "url": "assets/js/370.6e63c8e8.js",
    "revision": "8d05b4399c303ec05b7d7924cc029940"
  },
  {
    "url": "assets/js/371.89c2a07c.js",
    "revision": "bf32b47890fa41749fa14191c25a903e"
  },
  {
    "url": "assets/js/372.8aca89ee.js",
    "revision": "d6fc3b7edd0da818ffd1372e6158eed7"
  },
  {
    "url": "assets/js/373.662bb0af.js",
    "revision": "996cc540be9f9eb0b248faeaaf4eeb1e"
  },
  {
    "url": "assets/js/374.a3205737.js",
    "revision": "b18131aa733a1f0b268e2a0258ecb475"
  },
  {
    "url": "assets/js/375.c70f0b26.js",
    "revision": "f5659a1e3c9b8c1123b6ae7f6d02cc50"
  },
  {
    "url": "assets/js/376.9368f3f1.js",
    "revision": "f05301ad4046a697b0f464482e3473fb"
  },
  {
    "url": "assets/js/377.d536ae17.js",
    "revision": "1a63d1d12cd2904be845b316a59d714b"
  },
  {
    "url": "assets/js/378.f97a3c41.js",
    "revision": "8a7330d256cfababcbdcf2509b8e788c"
  },
  {
    "url": "assets/js/379.e18c9b18.js",
    "revision": "ede810ab240d18318e0a54aa0c49e8e7"
  },
  {
    "url": "assets/js/38.018f37c5.js",
    "revision": "906a05ffc0df9d246c997efc2eb37452"
  },
  {
    "url": "assets/js/380.dd916537.js",
    "revision": "9bf3311197bcbd4d17458ca74b5311da"
  },
  {
    "url": "assets/js/381.5261e195.js",
    "revision": "53221b816dd152fe7f9608858f498e96"
  },
  {
    "url": "assets/js/382.a46f79c4.js",
    "revision": "b8863f3fcd2cb47f5deca58dd54e80a8"
  },
  {
    "url": "assets/js/383.9e978c25.js",
    "revision": "c237d1f0182ba13ac5143ea0488c660e"
  },
  {
    "url": "assets/js/384.7d3d9fb2.js",
    "revision": "8f069f983345a5635f04d485dabb4a25"
  },
  {
    "url": "assets/js/385.5c4c59c7.js",
    "revision": "d8d78674bca03668e13e54dbdb869f42"
  },
  {
    "url": "assets/js/386.f341cfc1.js",
    "revision": "4e4a11dbe5c2c48a521f616baae5d9a5"
  },
  {
    "url": "assets/js/387.ad6a2bc4.js",
    "revision": "6e625a96712651beabd718cebc08b618"
  },
  {
    "url": "assets/js/388.24ce44cf.js",
    "revision": "8298569e6488e820a65364e821665f69"
  },
  {
    "url": "assets/js/389.fcac30ca.js",
    "revision": "5143a03d020bdf82262396250fa95557"
  },
  {
    "url": "assets/js/39.6cf811e2.js",
    "revision": "498f81dbca9c45327ac03edeee589c67"
  },
  {
    "url": "assets/js/390.6da94121.js",
    "revision": "7e0ffc1f5acb01e276695e8c5e4e3285"
  },
  {
    "url": "assets/js/391.9f6e087a.js",
    "revision": "ecaa92729a80f7f226c809447decde86"
  },
  {
    "url": "assets/js/392.bfac2e71.js",
    "revision": "e53f43e009ea1e98afc1b24f62208a0b"
  },
  {
    "url": "assets/js/393.552b5479.js",
    "revision": "ef50cabb09dd8e3009c64213a26270a3"
  },
  {
    "url": "assets/js/394.0f6bc253.js",
    "revision": "9985dc39f70214a26abb8ed3d1544de8"
  },
  {
    "url": "assets/js/395.838e3db3.js",
    "revision": "af3f718965f0b3c363fd7917ecddc7d8"
  },
  {
    "url": "assets/js/396.a2bed8e8.js",
    "revision": "e25dace4c484e4801d80ee3148fd8645"
  },
  {
    "url": "assets/js/397.c9ff7b7b.js",
    "revision": "991c43cc5ae3f1b1e1f27fef6b433ac7"
  },
  {
    "url": "assets/js/398.2d289a23.js",
    "revision": "d1c93ed3e55bbe0b69d2bb444ba56636"
  },
  {
    "url": "assets/js/399.25c87313.js",
    "revision": "9680d744132b86a48dd974571fe9aa73"
  },
  {
    "url": "assets/js/4.9ca9f829.js",
    "revision": "4eede6c63003430d1bc30f08d10f42cc"
  },
  {
    "url": "assets/js/40.581c57f1.js",
    "revision": "422bf2daac7353d12fbedab578c898e7"
  },
  {
    "url": "assets/js/400.532f620f.js",
    "revision": "49f73aa8fa0afcdb425caad3a44da4e2"
  },
  {
    "url": "assets/js/401.9ee69e54.js",
    "revision": "a8ad8051769909666041ca7eb26eee74"
  },
  {
    "url": "assets/js/402.329cb563.js",
    "revision": "5a3a50b8cadae54cfd8db87c78e555a6"
  },
  {
    "url": "assets/js/403.48b2d478.js",
    "revision": "6a1762dde1451d4a3817a7a1f48de59d"
  },
  {
    "url": "assets/js/404.1953dd71.js",
    "revision": "60f80c6c74bc39543855e28874f04d52"
  },
  {
    "url": "assets/js/405.d752cf1a.js",
    "revision": "a76a22c1761285baa433d2f3beac7690"
  },
  {
    "url": "assets/js/406.765b75bc.js",
    "revision": "79b61fc0e1b3db282583ea8ba3767cc6"
  },
  {
    "url": "assets/js/407.42d8156e.js",
    "revision": "bf73a9d8f64a09bfb45991fa1680bc81"
  },
  {
    "url": "assets/js/408.e8f2416b.js",
    "revision": "bd143de7530edc0346f79c4bb32d914d"
  },
  {
    "url": "assets/js/409.eb8dd84d.js",
    "revision": "c7c1b1697702b8b66db4ab825d9c9656"
  },
  {
    "url": "assets/js/41.9cb6f10c.js",
    "revision": "4a92a1ab5b01a8c83ecf52f03a1e2a3f"
  },
  {
    "url": "assets/js/410.92453115.js",
    "revision": "a0bac462e1ca0590faa2584668e2814a"
  },
  {
    "url": "assets/js/411.77480c32.js",
    "revision": "aac6bf74488b3445b4cfd193b851b596"
  },
  {
    "url": "assets/js/412.b2567efa.js",
    "revision": "da3d082c2fe07553d8b01bbe976a5f66"
  },
  {
    "url": "assets/js/413.a06138f3.js",
    "revision": "7cd29b806943e0749cd6b5a1a93c32a5"
  },
  {
    "url": "assets/js/414.0da7a5a3.js",
    "revision": "1c99fb326045289dd299ec6ba938ffbd"
  },
  {
    "url": "assets/js/415.05e8fb98.js",
    "revision": "afa27a1c6f643753db367113ee878c4f"
  },
  {
    "url": "assets/js/416.db919978.js",
    "revision": "3af3ad971b0483a29d6185debef52cc2"
  },
  {
    "url": "assets/js/417.0fd46f42.js",
    "revision": "9e0abbd16be337feed07d0244e2546fe"
  },
  {
    "url": "assets/js/418.4ade93fb.js",
    "revision": "0b424f7bc45cc27deda1e383235e64be"
  },
  {
    "url": "assets/js/419.bf3f27e5.js",
    "revision": "52c1a12d00fcf60f0f89f2b8e4b62da4"
  },
  {
    "url": "assets/js/42.f6d1b923.js",
    "revision": "b2c4a8dc2c91a20ceb5ea24405c88a52"
  },
  {
    "url": "assets/js/420.701f18e6.js",
    "revision": "356747bc71381a2bbeee4fb41e692eab"
  },
  {
    "url": "assets/js/421.c061c52f.js",
    "revision": "35ef29168b46b29b50962c8bdf815983"
  },
  {
    "url": "assets/js/422.f0398925.js",
    "revision": "fbf58008c47e81c140f1281a681c975c"
  },
  {
    "url": "assets/js/423.04ef9487.js",
    "revision": "0a99fbf08e0293d7772e9b515ad14adc"
  },
  {
    "url": "assets/js/424.bcc961b5.js",
    "revision": "25076583e82fe3429c57832457ffa289"
  },
  {
    "url": "assets/js/425.bcac7e45.js",
    "revision": "0e19cb5b1e007abe07a3e64098ae9784"
  },
  {
    "url": "assets/js/426.f603afd7.js",
    "revision": "e11874d30569c22c009828aad36b9206"
  },
  {
    "url": "assets/js/427.61c4d3e7.js",
    "revision": "b70111e58d51785a87fed7ebc4020c04"
  },
  {
    "url": "assets/js/428.ae5a9a4c.js",
    "revision": "243a1f26333fafe34278fc393050d0f0"
  },
  {
    "url": "assets/js/429.8f8a8a70.js",
    "revision": "3f540bcc43d2614e6db53139bf5d3a96"
  },
  {
    "url": "assets/js/43.d36985df.js",
    "revision": "ebc9f08988020d084608e1715c007798"
  },
  {
    "url": "assets/js/44.f0c1b7c0.js",
    "revision": "76385c78d2189d77dbf487544bc83964"
  },
  {
    "url": "assets/js/45.f224b5d1.js",
    "revision": "46e2563fe4932e5547109983429d3508"
  },
  {
    "url": "assets/js/46.94c856b0.js",
    "revision": "4158f4c30ebe4f04b9481beb09f07513"
  },
  {
    "url": "assets/js/47.48efb486.js",
    "revision": "87a614623ddaa5895248846c1077a39f"
  },
  {
    "url": "assets/js/48.6fa219f5.js",
    "revision": "91bf5455030cd066d7ccf61bfb2a8e31"
  },
  {
    "url": "assets/js/49.263794bc.js",
    "revision": "f932918f0bb2d3c6f22e4375fc18cb17"
  },
  {
    "url": "assets/js/5.f580e101.js",
    "revision": "8873efb5e2c01615cb0c66458e6c0777"
  },
  {
    "url": "assets/js/50.5c44b26a.js",
    "revision": "c8e6004d6964d598d050e5c0ffba875b"
  },
  {
    "url": "assets/js/51.79e0babd.js",
    "revision": "19645e854a4b269d5c84402b6d949ee8"
  },
  {
    "url": "assets/js/52.835d9d53.js",
    "revision": "ada64c20b0f3e3235a9c08f5389b7a95"
  },
  {
    "url": "assets/js/53.df107612.js",
    "revision": "2a65cdabae048222f82e6154261ae1bb"
  },
  {
    "url": "assets/js/54.3d88c798.js",
    "revision": "ca1f3c3ea66fb942730bbec664ead07d"
  },
  {
    "url": "assets/js/55.8bb2a9ea.js",
    "revision": "2b505785ece14d698f3984f3b1a7f230"
  },
  {
    "url": "assets/js/56.f336f8ec.js",
    "revision": "c8d5bb926e736bed334fd53c4670e850"
  },
  {
    "url": "assets/js/57.8996bea7.js",
    "revision": "a3328b4d1e6c721ce5d752a5ee6be0c3"
  },
  {
    "url": "assets/js/58.f0a28fe0.js",
    "revision": "03f3ff7c5888522a50859ba1df2f0687"
  },
  {
    "url": "assets/js/59.fb35974b.js",
    "revision": "c03d46c14f356647f9b3be7f4ce7067a"
  },
  {
    "url": "assets/js/6.d9b77949.js",
    "revision": "5a3b1c014c25ab80c066d8086d9d5902"
  },
  {
    "url": "assets/js/60.5539f955.js",
    "revision": "1bc1b151f0f15218351869d889ade261"
  },
  {
    "url": "assets/js/61.654ddf02.js",
    "revision": "f7c34919ff7434eb9214426ea2c84923"
  },
  {
    "url": "assets/js/62.4ed5e1c0.js",
    "revision": "fbd13fc2017e46712ca369be48cee959"
  },
  {
    "url": "assets/js/63.740f05bd.js",
    "revision": "97bf3771c836e3e6afa58fbe3b34ebce"
  },
  {
    "url": "assets/js/64.30b5d3ad.js",
    "revision": "85469538b89c14bae38a4adda3e8118f"
  },
  {
    "url": "assets/js/65.6f782852.js",
    "revision": "b748b173ff31b4757008159dc095a26b"
  },
  {
    "url": "assets/js/66.3f1171c2.js",
    "revision": "f8a72f95f93897d054711bfe2260adcd"
  },
  {
    "url": "assets/js/67.794f7ae8.js",
    "revision": "d99337792aee1dbb742c6074ce077a9e"
  },
  {
    "url": "assets/js/68.80f60f83.js",
    "revision": "d9cb44542167b1be0158c2a579c2e231"
  },
  {
    "url": "assets/js/69.d6d4c232.js",
    "revision": "bf72bff2b757814b4844bd77ce96285a"
  },
  {
    "url": "assets/js/7.65df4c13.js",
    "revision": "db4f0c23981a5266a2cc62f9c07a00e5"
  },
  {
    "url": "assets/js/70.aff68b6f.js",
    "revision": "99c2390fa5e96fc2fdb987ce2cd8a8b0"
  },
  {
    "url": "assets/js/71.e04a0b75.js",
    "revision": "ca31007da31bfb5cafef7ba431120212"
  },
  {
    "url": "assets/js/72.f84b4886.js",
    "revision": "bbe60df8fc4a8920f3e848c13ea12eed"
  },
  {
    "url": "assets/js/73.48d0d12d.js",
    "revision": "7f50fff646b6511afe09876d9d36a28e"
  },
  {
    "url": "assets/js/74.99bcedda.js",
    "revision": "9c7cead96e82cdc8237e83980e75c701"
  },
  {
    "url": "assets/js/75.8707157a.js",
    "revision": "3dd1eddad09374005e308f8a6cfe772e"
  },
  {
    "url": "assets/js/76.5af6558a.js",
    "revision": "8a7ce9806ac7e8bb72a95d01275b592d"
  },
  {
    "url": "assets/js/77.27fcd1d6.js",
    "revision": "6ce32813f9607032aedaeae832e4a84d"
  },
  {
    "url": "assets/js/78.145576ec.js",
    "revision": "a81162a5e9aed8addda92fcc6116d3c5"
  },
  {
    "url": "assets/js/79.2c107693.js",
    "revision": "9804315e0eb784ffde9246f9c891614d"
  },
  {
    "url": "assets/js/8.aaab7cf6.js",
    "revision": "ddf8a111381294fadf957d9471e64d82"
  },
  {
    "url": "assets/js/80.accff8ba.js",
    "revision": "8fa6b84919eae9d820ea0356a79531d5"
  },
  {
    "url": "assets/js/81.a902f2e6.js",
    "revision": "f4df8293939a565b580e67402b3df90d"
  },
  {
    "url": "assets/js/82.29ed5651.js",
    "revision": "19d2d41881b1f9fc3605aa743de26e5f"
  },
  {
    "url": "assets/js/83.1b7e23bf.js",
    "revision": "923322292fb4bbfca09b4e3786d0f207"
  },
  {
    "url": "assets/js/84.e148d110.js",
    "revision": "9a3d731c412c63268070d428d984863e"
  },
  {
    "url": "assets/js/85.c2ea834c.js",
    "revision": "5940371e3141b15df6417185b5e72587"
  },
  {
    "url": "assets/js/86.1a8b0e9b.js",
    "revision": "e5fdda1ac06935c3e046d4c675b65456"
  },
  {
    "url": "assets/js/87.c0868ebc.js",
    "revision": "19322981a612b09bfc35e61c916a3f54"
  },
  {
    "url": "assets/js/88.e11c6811.js",
    "revision": "5781b98b6f4785fc670a99b4bad11ec8"
  },
  {
    "url": "assets/js/89.57c79780.js",
    "revision": "ca1a36cb3f4901f34e9bf691de5d34e8"
  },
  {
    "url": "assets/js/9.1944d1ea.js",
    "revision": "d1be4372917aee4944850e91ee280eff"
  },
  {
    "url": "assets/js/90.661964e8.js",
    "revision": "8f55a281cdda752563c713a5b033493d"
  },
  {
    "url": "assets/js/91.b6e03acc.js",
    "revision": "4f44ce617792cb96ac3778f3f6ff158b"
  },
  {
    "url": "assets/js/92.77307131.js",
    "revision": "17a7b88fc104fbf79b453adaa7d959b6"
  },
  {
    "url": "assets/js/93.433f9880.js",
    "revision": "3eb7a670d99a71f09b9905dac4e8f3ac"
  },
  {
    "url": "assets/js/94.89a8a675.js",
    "revision": "e3eb5188d8927d20b0ed7bfe8d7b219b"
  },
  {
    "url": "assets/js/95.5ef98ae9.js",
    "revision": "e847f2583e6b9b23973b3cf9aba29491"
  },
  {
    "url": "assets/js/96.6326ed4e.js",
    "revision": "4b7804031f96d24d33f4d93493c49da0"
  },
  {
    "url": "assets/js/97.06bf8720.js",
    "revision": "bbdedbc28d9d06dd6ed21b2b7a77a7e9"
  },
  {
    "url": "assets/js/98.4d129b78.js",
    "revision": "43dda5815a7651de79e45178533747b0"
  },
  {
    "url": "assets/js/99.3ba9e1c6.js",
    "revision": "38032b3f8bc027dac753960cd619437b"
  },
  {
    "url": "assets/js/app.cb791f1a.js",
    "revision": "71fecc44329e2b34b064eb3976e189bf"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "9ca441b605aaf59d8495720d2f3e61a5"
  },
  {
    "url": "blockchain/solidity.html",
    "revision": "b5e1d84fc2d5cb4e211306fb8fe3df0e"
  },
  {
    "url": "common/architecture.html",
    "revision": "256d8dfc0a3cf388032dc0bc6926d635"
  },
  {
    "url": "common/cache/cache-apply.html",
    "revision": "b8545d2cc888699b64ce375e46ed087f"
  },
  {
    "url": "common/code-structure.html",
    "revision": "8f403339884f0edf8f6c49ac1a36664b"
  },
  {
    "url": "common/crawl.html",
    "revision": "4a11b176ee06154b5daa87d87b9efed2"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "1929d8749fa3de911047c364f1d49a4b"
  },
  {
    "url": "common/debugging.html",
    "revision": "72d191d71579470fa83e85f427fd4122"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "96b0522a601967d9b2a4aee09a6afb75"
  },
  {
    "url": "common/document.html",
    "revision": "1b5d1ca6f54a8cd5201e0d2cbf1a8e7d"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "3f6b30270dcc0835b056022f7b4ce069"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "9f0b89a4ab5192db36c213a594017f3d"
  },
  {
    "url": "common/index.html",
    "revision": "347faa8a01800d8e85992d448921dfa0"
  },
  {
    "url": "common/optimize_be.html",
    "revision": "289980f7f71ee550f9ac88d315e61e8b"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "7a3e606d89bdb84a996c601c163835ba"
  },
  {
    "url": "common/realtime.html",
    "revision": "d4c072510e7c2f4178635c8c392b84ea"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "f3f3eed94d9c8d0f008bc405f7b8f91d"
  },
  {
    "url": "common/refactor.html",
    "revision": "bd68b31fc87bdcc049e4c61c2227fcee"
  },
  {
    "url": "common/security/software-security.html",
    "revision": "30673eaf99e4221e0dd9b5674087f2d3"
  },
  {
    "url": "common/seo.html",
    "revision": "7c99241b97b3d6dcb5a8623f7a28ab56"
  },
  {
    "url": "common/use-case.html",
    "revision": "550643445aa7cbebb7be965452df533e"
  },
  {
    "url": "css/box-model.html",
    "revision": "1a36f47b7976205c03599c3c9a5fa83b"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "216e86189cc28b3b43b7b51fe99b7287"
  },
  {
    "url": "css/css-flex.html",
    "revision": "6d909bfba62f7eda67b8bb84bdf31e05"
  },
  {
    "url": "css/tricks.html",
    "revision": "e46c3eaad9f5baf735cd5e25a8de15c2"
  },
  {
    "url": "db/architect.html",
    "revision": "d6ea19d0b7ef6181bb9ccbe0f5789296"
  },
  {
    "url": "db/cassandra.html",
    "revision": "043d8cdc62150162682c4fc0a05446ef"
  },
  {
    "url": "db/couchdb.html",
    "revision": "16f1e59935f53f6d1cc83cdd0b162b33"
  },
  {
    "url": "db/db-concerns.html",
    "revision": "7ee2e4082b6b8e8847faced3986585b2"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "54ea6ebd67956eecf6fd5284d9799227"
  },
  {
    "url": "db/db-vs-blockchain.html",
    "revision": "7e6d03f3d30c2d0aee3298acab44b9b8"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "d23263a15de23dd129ef017fb3d7fef5"
  },
  {
    "url": "db/id-generate.html",
    "revision": "a7322d10313bf525bf6c2cbb05a1296d"
  },
  {
    "url": "db/mongodb.html",
    "revision": "f19e945a425ce905a3b2acd3653b5a13"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "635e3bb5ce757998a3897e0b19a0d7ae"
  },
  {
    "url": "db/nosql.html",
    "revision": "3f3d4efef883b64c0cb4db5974fce7ec"
  },
  {
    "url": "db/optimize_db.html",
    "revision": "ec93a4bc2dda367ac0178e7949f549c2"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "46ac8adc90b651964b83d57c1334e9a5"
  },
  {
    "url": "db/postgre.html",
    "revision": "7c34b9f0739aca26151388b042d6b8a8"
  },
  {
    "url": "db/realm.html",
    "revision": "b25edcddb7e811cb5f70970acdd28c03"
  },
  {
    "url": "db/redis.html",
    "revision": "6278c115d516b8d1fddb744f39e56da0"
  },
  {
    "url": "db/storage.html",
    "revision": "b6000e8948396d68b2ad62448612173d"
  },
  {
    "url": "db/tx-isolation.html",
    "revision": "301a5f353a1e3c5733fd67c461e783c0"
  },
  {
    "url": "db/use-cases.html",
    "revision": "4dc572aacb1e06426c8bff29676e9d1c"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "78091834204f318cdf8ff741854a331c"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "225fc3048d0ce9c299809a33a4c197dc"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "43e5c612f8455d3ff7936f0fb2b91be4"
  },
  {
    "url": "fp/fp-ts.html",
    "revision": "fdd406b003919afca3fbf75a74f88d7c"
  },
  {
    "url": "fp/functor.html",
    "revision": "e79f37fc21ca96084e1c8a1abfa467e7"
  },
  {
    "url": "fp/monad.html",
    "revision": "e1d8f4106a5a21df384d1ba0e5ff5a7f"
  },
  {
    "url": "game.html",
    "revision": "d87cbee3218d8519017fc2ed7bbf7f76"
  },
  {
    "url": "geo.html",
    "revision": "fafc3e1093a8c1fd554a4802374ca058"
  },
  {
    "url": "go/clean.html",
    "revision": "4a66fff59884d5e75c304c0e25fc742c"
  },
  {
    "url": "go/index.html",
    "revision": "d8251923f3635a93694a519fa096d934"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "5e323ec271aaccce83e4ba6c5cd781b6"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "b10daa2df81a91244cbc5f0f97217fbc"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "b4a5825ac93115e66462d5030f66769e"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "323f63569918d4b5b8b22642523a31d3"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "afccc4709bec613fb2b3123c1b9a4d26"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "46421bccb980d94ea818f6ede841ae58"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "9b6f8623288714c86fbb0d323b6c9e5c"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "e960784611e9cb131f1417286eb77568"
  },
  {
    "url": "index.html",
    "revision": "bfff029534dbaa1bc87f0730ab4c7915"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "4ad99e8f84af55e1034af936498c4690"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "9399c68f67a27a92abdb346bd3566424"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "e92e5d6557c24f4065aeb09a1589e15d"
  },
  {
    "url": "javascript/closure.html",
    "revision": "8a04c9ca8a381ebafbc0b80d7e9de9dd"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "bfd56454a748501a174f6e663f461d7f"
  },
  {
    "url": "javascript/eslint.html",
    "revision": "94634eed9a18a328404d7fdd7ae198d8"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "bb74f3a3af3041896ef2fc52c046869d"
  },
  {
    "url": "javascript/nestjs/nestjs-cqrs.html",
    "revision": "f51fae993a161e54db203b316b2d6f41"
  },
  {
    "url": "javascript/nx.html",
    "revision": "dfdb418bc4bd33b3e8d03644b416109e"
  },
  {
    "url": "javascript/rxjs.html",
    "revision": "ce1543307bfdad61e02fca2cd99a8297"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "d4fe3297475b591066cf1e8178bdb74a"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "d88a82ee5dba3a3d1c5a85ad036e0c4d"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "cb3919c522f4a6bb9ac14f04064bc7da"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "7b1a7734a5c42282f268e174c2b9a04a"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "b1315464f4bd2b55223a8d08693242a1"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "28334d1c3dfbfea3cceb699fd6cae108"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "989218fee82335048ce3a6cc8247efa5"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "ff8b59ede6b9ed979a440a1990e3ddbc"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "3dee4a0cda115c71ff16a74466b6922a"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "ee80ae82ba8f7856f18b7a42be9e6929"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "c31419f262466a18ffdc92923b15bbbf"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "e48c3bce29459c398966f47918e73296"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "56cbfc97b81ab3071f683c033c940d02"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "43ae38e80e7a575bfd80c67447aed5b5"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "bfae8f110722fb946b95bffe0f554c63"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "671309597d9192a2a04b338e55fda941"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "4e0e1b56a6bd0612e9200efd4d429acf"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "86c439318b53431beefa770bc00b2f1e"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "a439a5c8cfdcf6238abc2ed46bef56da"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "c2a4a1a2349c43060c415c25e3f61a01"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "6f451de218cf40aa9a64be9c86a115fd"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "55726d7c8dea4c4cec3ac9ca55f62160"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "b365d68e8ef11940200871b6c51aac0e"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "899aae5cf5c71ca55cb27a8c645be1db"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "c36f2aaed873ff77de1f8d3faf81cb88"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "9eaae85f4bb399d0dac47627b23d5b68"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "232fd62f455b0c44688d833b1fcee527"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "ded2608903224900acda459735a95c23"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "813ad926970711eff38cf1179f15f650"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "f8979c015559bbcceeb650fdf7470945"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "48ee765f11752fb52beead13e4e6ee3b"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "ae2c836134ead13e6ad242f64bcbcbff"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "254e383b9a6eed617532b7b79621506e"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "82842ada53af57364e74992b919ea318"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "8642130dfb754ea616e4d1f1fc81038f"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "8060edda35d16fe447a202302c9b751a"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "4261874259dabd070d044f0ec7ba447b"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "d55a889c817947b1bd3e001ffb23cd36"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "8dfe7a54ca3a55f5231a95b19d7fe0a4"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "2adf01e3c7b7a24f46c72d8b79937336"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "d9201269276bd2379dafe016f2f7ecea"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "0e9506d6f3896239414d363eb5be68f4"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "1a1e8b5e705e174a25c66245d610ada7"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "6651f8357fdc5905a9d3118ec880ccd4"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "e090dc58a101264828155a94503acc41"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "a1f1a02b761e582b0ceff9d9b2fd6928"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "6d02f893a3b43dce3ee615485a9e2aaa"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "913c97cb13ed415b960a525b4a8d2044"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "d28c89abb08558682724fd9238ace8d9"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "8418c39cc11ff1cb582e1efa673597eb"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "789e92084f31ea26d956dbe6193088ec"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "265a376b3fbcee3548f77d25c2617a1e"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "127df7c3afe69baaa2e155b15c7e30ad"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "e25310bd3a0d04543934fc0a27555c94"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "e7f1d822f2a41404e70fe86a62bd182a"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "3d1ccb1458e2f037ec0217a3f0734268"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "05261a7fba639fa6f6248f8cfdf64e43"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "5037e3d0c671814918f51ab3b4bf6c17"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "15f24d3f0f425354287e8bccee041e0c"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "dc1c0e2ef2018633218b47567fc51785"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "9ac49d6e7005ba4f3583c03a4999ca9a"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "266dff419c2c7ecc8a11540b2d61a17e"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "787717d32d4c89ea489f1c6a098cc3e4"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "04df91bc495ab5dac3ef688fad6344a0"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "9fef4747fd101d4a0a4695fbc06c1b2c"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "47d876232ccb66b21b4f68b8a4f39ac3"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "be27deb6f9c3db6307e117a2a16aabb9"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "413adb68f482a6fba139bf2e8badbfc4"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "db2b05465dd2d702f9b319ade180d11c"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "aa309e67bd139be384bb57e1f29a5398"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "a5c17d131620077b332be3e86b217c85"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "12966aa6c3b7a7f6af6e9374192a409a"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "6c6e519e4068089ae2cdf51e356052da"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "9173bc44eb3d4c0b822f786c3c9096eb"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "f6b001d2139607df3f7c9f1ac6606ff0"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "967ae6f178b8848872fa69edf5f8bea3"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "ff0613c4355bd62979615a55bc09f9c9"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "84141b722f6ee2d4cdeb114d29646095"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "19baced345cbcddb781ef65f5010ab39"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "9828ef2971bfe9f4825d61eb42597b32"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "0e4855f937d1327ecbf94ae634cdf323"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "457f0bf9b138067f04b3016bed15cc82"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "4ae446cf60f31a30ce3580d652dcfd71"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "00bd2a02604b143d3a2c73c82712f597"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "5b54d86cfaac6bb7fa1bafb6e8f3c1f4"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "c5e62a6edd3028c80672166926789f0d"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "a505dd572ddf09b71ba9f1c58fe638db"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "59a04f43477b0bad6eb0a6c2ebb55b48"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "dd51e7a1b3cdbbd59bf0f6048dfba6ec"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "450ccc6203ee42b18c4e34c144a1ead0"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "224bf0b5a2a7e79b5d2f4bdbd6d91283"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "716de9672d9adf0d76abe91929553385"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "829b2f3f270059545a208e367f058936"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "3c3dee64a49c08a92e0995aac47ef15e"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "24d972e652c492e8074a2df2539e507b"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "ed3b1d4856749279e1a71a0eea3c2a74"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "baeb156d7a38b1522c07022a9d46c138"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "c6710ee102537141dc8c1fde9aa4d29f"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "d3abd856d3d1964352b93a61a190053f"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "00bec196aa7f6b3ee1a0b20f28c0935d"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "d7432f42090ed682de8ac427c7ced1c6"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "adaadb86afb0729f0f8df3a58439459c"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "3409d4f57d6f271c224a443186f40037"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "48f8e40d179b2132b3ac97c98ab1e8b6"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "cadbbca78a16b0fe1ba813d4647c5f83"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "ec5cfb7777f4dbfc3947eea1fd0a288f"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "36411299883324a4a6ec19439c37f855"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "a591886fac82a5d671b24f8f322cc259"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "c01bf6268942e1e88219b0f1c96d71c8"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "c432d050c7c1d6b130476d08fe115cea"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "ef3c6e4b89e2d8dcc31ef6c65f399e54"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "357701eae0a0958ea2a917424aa6d5d5"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "ddcd3237747832327e91625b83d3013f"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "9e1afc331431b13aafe1945bfc2d17e3"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "ba8a76c1ab13ab5fbc098d852700c29b"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "3898132c91cfda3b66952aaad7c6695b"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "0b90b54757655e16ae7189687dad7cba"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "da9668a74b7cdd842c5c92cb7c3cfc91"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "703a1bc569f168169f50c8585ce60d72"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "89d215745b89bcf18215bda49f9a48ef"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "99f61a138b3b2bd7c510f8f03b373cb3"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "71542f9f56bfabfc5dcbb940476e8c08"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "595104ed9a6e7cf6226b155b9a01f7f2"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "eba45f6a293bc7fcfc8db0983b29a06e"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "3d0deb3dcb739bb519c90b8e01bd21b3"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "d4a5519faedf509e267d68fd44b809ec"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "4a5d721836b5208952794beed03c5985"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "49be4640f941a9ea71b39c76fb223d92"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "0f14c7488f1925104f15fed641cf11a1"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "339dafc223d04c4e2e446c89a9626394"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "03be70030338990b39a29180f838a781"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "6336fcd44bee91cfc2d4dab25073d717"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "a91871fa1f95fce4e1ce0a113d2317e8"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "23f4da83f6c6362ce9387414916514bf"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "8cb8e5dba8308184499f9d2197fb22f4"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "6d06dbda9168e3e3357b1dbc499f57d2"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "3a408fdc9ac32c8094d343c06756749e"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "4ea99aa712cc19f8c9c52e3f935ddbdc"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "cb8ae77dce1e209f379e40185986f22e"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "29ff972ac6ad60ffdeef8db9c6d267bc"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "8132611c40017fcec4563b27d56d7be3"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "b2d5d8c55ba47dc44cd82da7616a93d2"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "8233caeb5c01a1eb543114b53e06fb50"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "9dbeef999e8d530a377f8875448c13b1"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "82d64bc22cc1e065f5540387cb57a9db"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "df4df997e29efa2f8242a81ca2b6cf99"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "63c7e155fbfd684c16157c8cd669d263"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "cbb6d3b9467fb73c83d7ff8651a717f5"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "5f98d92b79c2c3ecb09ba76a318095e6"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "92f3cccdf8ffe174d543cf8552e864a5"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "c150ab508370425a3ad6d825cceeb5e6"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "eef578860f67785f9c1b20917a0da597"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "d3de6acf17e1588aa8b11d4bb263a602"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "d426c8774fbd7e1ad895eabeaa4ea130"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "c052bbbed0755e95a1b671dfe1e8a348"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "3179f3c6c016075be0f7a3f1c2398605"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "72bce4c365e95604575d8607665642fe"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "5afe617a69e3f46f7a238d446ad8a63b"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "4bca0251278981466c002b975c91c0f7"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "62793cffc0913827dacc5d12d5e3cf49"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "2dabfd4dd15317942965ef4f56f041ec"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "7e45dc9c797f6af978f3f59b9e9f3efb"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "7d663bc99a036877f70dd8d568053ba4"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "c028ac5f6a0a1f558dc440d1334ca2e5"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "467be2acc2e980da9def0bd48082b70b"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "df9fe7d7a3704c724485d19864109bd5"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "c2aa1881731eb9b0799633803d60e94e"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "0259669f26983e01d287aef2a1ec5dc8"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "351f91524ca867452e87e67e05eb3ac9"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "d433a66ef44676d351e0911023ff1217"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "dd18ef0f81222f9b9bc7931886f95ed6"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "95a4aacf402f61bc67f1c6e7d7bb2d88"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "03bc9bbeb0854f65645edbdd2c941212"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "0bfa42b226b8721dc06d99de9cc7b616"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "239252ad78983ed883fef4edfab08b4a"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "b2860db90d355d595b7d84cf103c169e"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "da4ff1f357a411f8cb3195ba70aebad9"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "b977631cf76f7666544db00627135035"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "0437576f6c9229b663c70ce8b15ece1e"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "75c0710475df688743afaba709163428"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "e8ad1fd9fd0ccc231cd0e12b9e4f3b51"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "7725af1a38795ab3fa9b2f11b4ccea57"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "d5247e5af508b7d2257906effcf14c6c"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "a5d4fc9fab2f20edab608f0925e63861"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "703f69708d2f9b261e79e2e2c382764f"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "25a91f65a156e83b19759d5abcf0cb00"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "f747067951ef114f5e2bf126ba028acc"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "bb34b7d68e84a57f0089c74302c8cd3e"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "ae89bd6ff6bc4392d4a03526c5c2881f"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "2e4f7f03854a47a0ee7ffeefdb23bd4b"
  },
  {
    "url": "kungfu/template.html",
    "revision": "2ec56815e1a04d6f3a723c1b675703f1"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "4ddd1bff382c59d4e75700f700582a1a"
  },
  {
    "url": "network/network.html",
    "revision": "d566fed03dbdd659592d2604c797998e"
  },
  {
    "url": "network/restful.html",
    "revision": "2484cf91d5177c43bb176bce87cdc570"
  },
  {
    "url": "network/websocket.html",
    "revision": "ae2690db4f5acb63c1eeb1ce51307efb"
  },
  {
    "url": "node/env.html",
    "revision": "69e019bd460bcfe2d47b19aef749a746"
  },
  {
    "url": "node/index.html",
    "revision": "3a0e72eed31f7005abd1027839e8359d"
  },
  {
    "url": "node/n.html",
    "revision": "07c82e08bc02e5b724b40561bb96ec93"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "b3aee83c45e6d27914622eb0002fa839"
  },
  {
    "url": "node/npm.html",
    "revision": "68ebebfc7a809d0fb93957bbdedcea21"
  },
  {
    "url": "node/sequelize.html",
    "revision": "60c10b1f582a1fb1676c69f6227dfcdb"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "d56d1354790d64e62675bfbc624a5a70"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "d563317ffe569cec9e510ba4d56eecc5"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "3d713fd1ecdc5e3f9b58194fe005b158"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "8519e7605cb80d3d5508250764bf09c7"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "a9da7872670f9d4124df4ffc7467b657"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "41ce75257effe6894fc7fe278c8e9ee2"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "6b45bcb52a373ad34ad182f1dad75f6f"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "4ad9e8761f9ecf30968eda22148cdc20"
  },
  {
    "url": "php/clean/di.html",
    "revision": "7a9fe8ac6e83e088fa9e7ec8b05396ab"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "9db48857e79348ff700181184afda911"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "fed6246ab31028403da79bea26cde082"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "1e6e8b5d5e623f28cee6aa2f688f5264"
  },
  {
    "url": "php/clean/index.html",
    "revision": "71141376109248d4874d3edf9613e5ea"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "e64abf64942fd75ac9186c25a1582f67"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "2f99f977215a32edc7bf27599abced07"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "1cd0191f5d51074b9b173dad266a82ec"
  },
  {
    "url": "php/composer.html",
    "revision": "50e172bb034d820d01dadd0de49c84c0"
  },
  {
    "url": "php/crunz.html",
    "revision": "569c1a8d87e43d304d368145fbdf67c5"
  },
  {
    "url": "php/laravel/best-practices.html",
    "revision": "11a2a9d73fc5d55c2866cd831ecc04ac"
  },
  {
    "url": "php/laravel/laravel-notes.html",
    "revision": "9548bf302c5222957f28d73be20c90b5"
  },
  {
    "url": "php/laravel/laravel-vs-symfony.html",
    "revision": "54082d0079160d04a9bf1e01d480518c"
  },
  {
    "url": "php/laravel/patterns.html",
    "revision": "0b1f9b314e4393a6202eb19f2904353a"
  },
  {
    "url": "php/magic.html",
    "revision": "caf0abae86ebccbe23c6225ba26b2698"
  },
  {
    "url": "php/notes.html",
    "revision": "d34fa3685edd5e1bef3059af8495175d"
  },
  {
    "url": "php/oop.html",
    "revision": "b615eb38414bd9a2433e26423ce6cf19"
  },
  {
    "url": "php/php7.html",
    "revision": "56980ff8d8482e1434889fd2b5899494"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "a051542d4c8d4fe3bd294e60995dd6e8"
  },
  {
    "url": "php/reflection.html",
    "revision": "a62212b1ec3f5dd1fc2ae73b00223172"
  },
  {
    "url": "php/tricks.html",
    "revision": "23d2de6437b090522fd989f2793d506b"
  },
  {
    "url": "php/wordpress.html",
    "revision": "cac3a492c4338b98159b5ea22862bf21"
  },
  {
    "url": "quotes.html",
    "revision": "490aeae4c3f716ddc2580f7d05322054"
  },
  {
    "url": "react/mobx.html",
    "revision": "d2899d283ca1b2b29ae499a7aab3684c"
  },
  {
    "url": "react/nextjs.html",
    "revision": "ad19aa945031c6b3d32625b088652293"
  },
  {
    "url": "react/react-native.html",
    "revision": "bbd9088b10b9e725e2fdda258082f6e2"
  },
  {
    "url": "react/react-vs-vue.html",
    "revision": "0fd887a8767f0702facec3564b8e7906"
  },
  {
    "url": "react/react.html",
    "revision": "a3abe7f215b16be4c965fa7d24a6a7fb"
  },
  {
    "url": "react/vue_react.html",
    "revision": "130c045c76dc3de3a97f8778f534c079"
  },
  {
    "url": "refactor/notes.html",
    "revision": "3a04f532d1729fa1dbe1944c9664050b"
  },
  {
    "url": "ruby/ruby-notes.html",
    "revision": "22a415c159dc0e3d7343fb85b89fa8be"
  },
  {
    "url": "ruby/ruby-vs-node.html",
    "revision": "6d0620beab1e4dc568f4f1eee88da305"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "6a4449c5e0abd4b881c7af4e7770aed0"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "fba826f4537d4a2e69691a17550a782a"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "3f1a0b4dc29df20f52bd19efa0927880"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "3a595b69cb05beee31edfbf01efeea0c"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "7669fbc22655988b8d7ff2d6f2ab80ab"
  },
  {
    "url": "snippets/jest.html",
    "revision": "c3b277d37dfbb567564259128668e986"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "0a203aa942251a2384bc36d6c13236bd"
  },
  {
    "url": "snippets/regex.html",
    "revision": "d456fb8140638d9704b00fe272f3ea83"
  },
  {
    "url": "terms/12factors.html",
    "revision": "14e1b9098344318a0bf6ad7976b4a628"
  },
  {
    "url": "terms/architecture.html",
    "revision": "7aab79a6c944cc513571f46e5bbfa109"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "ffb916b205b502c05fe2a3d503f79e1f"
  },
  {
    "url": "terms/di.html",
    "revision": "99bd94187d9ec893f117b11eb60e45ac"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "b138b7803da3b242b1a8626b245eaea0"
  },
  {
    "url": "terms/javascript.html",
    "revision": "a66319ab54c292f89d6868f0ff313e40"
  },
  {
    "url": "terms/patterns.html",
    "revision": "96b233104ab2eeef9745be67de477619"
  },
  {
    "url": "terms/payment.html",
    "revision": "624e19afe5685723ba229d683af4fddc"
  },
  {
    "url": "terms/principles.html",
    "revision": "8cccb7a98bdd6220067564f736e27538"
  },
  {
    "url": "terms/rules.html",
    "revision": "940d83b34dcb6a6fbd262f52be3514ef"
  },
  {
    "url": "terms/testing.html",
    "revision": "9385ef09206af07bc6eeb22805e69293"
  },
  {
    "url": "tools/chrome.html",
    "revision": "4c453236e8e64a0306e940bf70bb26f9"
  },
  {
    "url": "tools/docker.html",
    "revision": "17c4d90071bf4427ec667a476dbb3f46"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "2a3c08f3e00315a0d10fe558b6666320"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "a3d87ecc887af2d5a329fb792d3e91b3"
  },
  {
    "url": "tools/graphql.html",
    "revision": "19a4f1aef0cd4cfeca3680d6a3f84f18"
  },
  {
    "url": "tools/k8s/k8s.html",
    "revision": "69de85ef18a154cc166a4c92706d2175"
  },
  {
    "url": "tools/kafka-vs-jetstream.html",
    "revision": "89dd0a009bed2f7d9d3d0ac34923bd4d"
  },
  {
    "url": "tools/kafka.html",
    "revision": "2300ae98e37d816df7a3b1eebe085b82"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "5368aebffb78095e655d9af765386d43"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "b6e2af7194fbc8a6d1986d2ba0305393"
  },
  {
    "url": "tools/redis.html",
    "revision": "1ef73b5454c039b61168b778a66c0372"
  },
  {
    "url": "tools/rfid.html",
    "revision": "367411b14af0f5b2ffb8d5a96e43eb34"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "287a208855c164aa5059035e7095f8d4"
  },
  {
    "url": "tools/vscode.html",
    "revision": "5617e6162ae61a516b34ff0ee9750f65"
  },
  {
    "url": "tools/webpack.html",
    "revision": "fc4c06086b4df347766966d42c567b68"
  },
  {
    "url": "tricks/compare.html",
    "revision": "2d441c49eb845ecf43ba0700b5315cda"
  },
  {
    "url": "tricks/git.html",
    "revision": "e2f30a88ccef576b7085531386173f1d"
  },
  {
    "url": "tricks/linux.html",
    "revision": "c4a3d212294799912f1a334bc34f71ff"
  },
  {
    "url": "tricks/mac.html",
    "revision": "1185b252d5360201f59403aaf7180867"
  },
  {
    "url": "tricks/misc.html",
    "revision": "32e983d68ec22258cea421cf68371cee"
  },
  {
    "url": "tricks/setup.html",
    "revision": "45da392df0852bd30df93264a7d8ee79"
  },
  {
    "url": "vue/communication.html",
    "revision": "74500527cffa25a328a7ba33515e1ab2"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "9f4fcc5a0c5b947ee081d2aec44794d0"
  },
  {
    "url": "vue/events.html",
    "revision": "7e2a9a191b8aaca5dbc3ec0553cde0a8"
  },
  {
    "url": "vue/references.html",
    "revision": "184997d923ffbd81d5de18085022760a"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "783cc83c70f2d9fc63a532e305fc39c5"
  },
  {
    "url": "vue/test.html",
    "revision": "5af0414ce48ec4233388a19391de8359"
  },
  {
    "url": "vue/tricks.html",
    "revision": "49cea3d6cfcf1621b92455d6e205981e"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "ff0b23503051d79c5077c6c5144aaf63"
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
