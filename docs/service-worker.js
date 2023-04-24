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
    "revision": "df2fe506f013ae745bd6b08043dc38ea"
  },
  {
    "url": "ai/AI-note.html",
    "revision": "87b794ca59523019957d10d0f2cd5de6"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "c48cd952fd86664f4b7859b67daa48d1"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "570446ab5ce92e61880230d1c04173e8"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "b1016239cc8d2a7c36855d72a360661b"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "f3231ca0e5ed216416b2944192324b19"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "0dde705739ad07d4f1dc74e9b28d3ff6"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "36acc26a38e2899917ae9ef3198b4ece"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "d201423833afa5d93ba45fa17303f0ef"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "c0ba92736a6ae6d2b24058ad58f1b8c2"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "08de975c307a326904a5a191db7eca13"
  },
  {
    "url": "algorithm/string.html",
    "revision": "0f38489ef8cfef20a4aaad058baaa666"
  },
  {
    "url": "algorithm/sum100.html",
    "revision": "5027daccc19ea75976f912b6130bc9f2"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "012aae6f8c5f9db63c0f40516a281434"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "b5840bc6951946e44c098094d236e05e"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "97dc5bc288714413c04703d0fa50b29d"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "3ad98c8d51543fd9b498980ca0b3e4e7"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "beff3c4bfeeaafb5b89766383d66176b"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "3a3187578a899ba64a080820e5211129"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "307034cd90fca8645d9e57c9d55ff6a1"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "0d1fe05f1ef03b9da03d78af06ceb2c4"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "71712604af61fac51fca24518aa5ede2"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "7b99add012d477923952d59086b19a9b"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "29e3636c13f9ff856fd268783e067525"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "f498266df3af11b4f2a25423f92807bd"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "348bd7b0bf1189888100f88e6a5055cb"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "d5562b41ca23c535c263af3844fbe43e"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "0d9c122a58c16ea1e2c898e2e1cf6105"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "e86445ab3dcd6ea8d3d605b678c4165b"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "cdc98aa24bb88bd9d39c54d1bf6e595e"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "e5d0689c2bce0ab0aea9d8fa7f63bb3b"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "0abf9d768a4f2abd50e8162f9599a0ce"
  },
  {
    "url": "architect/audit.html",
    "revision": "1b3186562f7c52965483f68e258c2ef8"
  },
  {
    "url": "architect/authenication.html",
    "revision": "99f4a54bc3b1f4b33cd351a3691313f3"
  },
  {
    "url": "architect/authorization.html",
    "revision": "d6179530ea64e2d54d5e9772d11038b1"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "09a6e8e30d6a77dbd12bf6e280cd502b"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "564a1c9d4991279f6b3c8d0a2214147c"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "42e87b3a1455a8ca0e3b2291c63d7204"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "55c32a53aab33c393f2fb8e36ae6417d"
  },
  {
    "url": "architect/ebi.html",
    "revision": "5d5a3bd2b0a5b8d5dedac412d6955769"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "5089fcb26fe6e8f12276db8ee2b54908"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "c947c0f3f10b5cf22fcd0e200adfaed0"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "006c5961c1ba5a6f63a9b419b85c4cfb"
  },
  {
    "url": "architect/index.html",
    "revision": "13018d4a13da604508676e9e386e107e"
  },
  {
    "url": "architect/messaging.html",
    "revision": "9aa89b543db845d2fa031dacb13dc10a"
  },
  {
    "url": "architect/microservices.html",
    "revision": "4ec94d09069201284b286e383df6d71d"
  },
  {
    "url": "architect/mutex.html",
    "revision": "7e8c924cb5d58444e038ed2ad96a37d3"
  },
  {
    "url": "architect/network.html",
    "revision": "ee1093bbd0da361a1aabe736874c9a47"
  },
  {
    "url": "architect/notes.html",
    "revision": "f1c0528526081ca87b8d07209e9ded14"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "43304b6eb028e29bf12cf708716135bc"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "51ba5711eb02be08e385883067f52a1f"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "3f80f472ce3ee7ab8534a90c4d5911c8"
  },
  {
    "url": "architect/refs.html",
    "revision": "e64ece5538d840f81248a10dff40e7d0"
  },
  {
    "url": "architect/restful.html",
    "revision": "0c45c16e25cb12fecec7b8dcd4bb0254"
  },
  {
    "url": "architect/soa.html",
    "revision": "748a0f2e27eb68352f029372fac20e2b"
  },
  {
    "url": "architect/spa.html",
    "revision": "d999d893cccb73d56c28dbf250d0b2e6"
  },
  {
    "url": "architect/terms.html",
    "revision": "844f954cb95890c77820c4194781a4fa"
  },
  {
    "url": "architect/webservice.html",
    "revision": "727b93a9364d3ab2bbe3e6b29432300b"
  },
  {
    "url": "assets/css/0.styles.de900540.css",
    "revision": "2778d53e21fd7dc4d16f65ade896d9e2"
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
    "url": "assets/js/10.a7445b46.js",
    "revision": "c7903cf9732ecd949fc568bd256ed979"
  },
  {
    "url": "assets/js/100.42a4116f.js",
    "revision": "0748d6d7013c0878784c827139d07692"
  },
  {
    "url": "assets/js/101.0f2078e3.js",
    "revision": "38f96dcaf43ecb2fc1d0268f5b9d36bb"
  },
  {
    "url": "assets/js/102.293e422d.js",
    "revision": "5f8c7ae8aaebccbf31c94b65724bc625"
  },
  {
    "url": "assets/js/103.ff5205c9.js",
    "revision": "0912a86ba3f25de110aa3b545ab70cbb"
  },
  {
    "url": "assets/js/104.b9bcc854.js",
    "revision": "3afd13611689e35bde46c25a036d657d"
  },
  {
    "url": "assets/js/105.0c76b3d0.js",
    "revision": "624fdd89c3e9a291bd266708c0603bbd"
  },
  {
    "url": "assets/js/106.0d13f8e6.js",
    "revision": "7656b4c28b1cea7eab76bbd73019058f"
  },
  {
    "url": "assets/js/107.9613f903.js",
    "revision": "36dd0ff894a506580019a3ef5a178f3e"
  },
  {
    "url": "assets/js/108.8501f11f.js",
    "revision": "9312e2408c52175716584f0fd3cbd803"
  },
  {
    "url": "assets/js/109.6bd66912.js",
    "revision": "c0a4f0ed78854fa4d703d2818f085fc7"
  },
  {
    "url": "assets/js/11.14b9fb7b.js",
    "revision": "72e5e0c1d969cfded1658fbce02f51ec"
  },
  {
    "url": "assets/js/110.9883e64f.js",
    "revision": "492710fd47d13738fe88c956aeed5638"
  },
  {
    "url": "assets/js/111.5a39ca8c.js",
    "revision": "75592e086575ee7c65e6f706e6a75d82"
  },
  {
    "url": "assets/js/112.96613925.js",
    "revision": "f72a77f6f525679a283e17bfba2e3147"
  },
  {
    "url": "assets/js/113.2fff88db.js",
    "revision": "754d6af83d07a6077aee54bd04e83a77"
  },
  {
    "url": "assets/js/114.765e8df1.js",
    "revision": "680ce179ddc6aa193f2d78bdf5d8aadb"
  },
  {
    "url": "assets/js/115.4c9ed567.js",
    "revision": "3cd803efffb718ebbd4549d7c54752ca"
  },
  {
    "url": "assets/js/116.8bfadb90.js",
    "revision": "bcbef92b388c224452bd77b5a1d00b57"
  },
  {
    "url": "assets/js/117.cbef7dd6.js",
    "revision": "1ff4219b89ed98fb2a8b432de352309e"
  },
  {
    "url": "assets/js/118.a9e6dbaa.js",
    "revision": "bd879ccdd7f8c4d8106dece74c9a7007"
  },
  {
    "url": "assets/js/119.86c013b4.js",
    "revision": "2b4132a570ed7f55ab487ca89d0fc37b"
  },
  {
    "url": "assets/js/12.de84716f.js",
    "revision": "f2ead625d56c5a1f0cd18d522aa1e21b"
  },
  {
    "url": "assets/js/120.06ff0374.js",
    "revision": "6e47e44841dddda017b93f80ec4c10d1"
  },
  {
    "url": "assets/js/121.284179a7.js",
    "revision": "4280cca5c94f085591a2cb4e76f1050b"
  },
  {
    "url": "assets/js/122.6584aefa.js",
    "revision": "44dec74cf4a4b7555b7e3641de69fd5e"
  },
  {
    "url": "assets/js/123.99c11ffe.js",
    "revision": "08285228fab7015e9eaa4a6d53ef9757"
  },
  {
    "url": "assets/js/124.1239f825.js",
    "revision": "206a6e7e1dfc245080635039b420cabe"
  },
  {
    "url": "assets/js/125.18df353e.js",
    "revision": "3c337e2b5ba4c97cd3882d290d7deaaf"
  },
  {
    "url": "assets/js/126.b6359428.js",
    "revision": "d9e3d06c4c1a3619494dcdea97afae10"
  },
  {
    "url": "assets/js/127.a4ba4249.js",
    "revision": "3de1305f37ca9a55c2feebf88b2c2c05"
  },
  {
    "url": "assets/js/128.b58ca015.js",
    "revision": "9101c67d48a79577135d30c896ff4212"
  },
  {
    "url": "assets/js/129.2dde5237.js",
    "revision": "668ad29c6b55f2739efa333bd1e28c3b"
  },
  {
    "url": "assets/js/13.a158f428.js",
    "revision": "4e9026c341838c2193d4d3a5fb5fdbb0"
  },
  {
    "url": "assets/js/130.168ce7e5.js",
    "revision": "10e0da6a50c00cc243f9d50c73cbde1f"
  },
  {
    "url": "assets/js/131.2e82690e.js",
    "revision": "5ac8dc6ac7c5708b499402a722fc5ea8"
  },
  {
    "url": "assets/js/132.066c2e80.js",
    "revision": "992a2b6475d2ff026e3fbb4ecbde0a0d"
  },
  {
    "url": "assets/js/133.28325307.js",
    "revision": "3f62a827b5c0b06a0024db88307f95f6"
  },
  {
    "url": "assets/js/134.da3244b7.js",
    "revision": "47bdeb0c7d834a75434c84e74a74cfe4"
  },
  {
    "url": "assets/js/135.85ba253f.js",
    "revision": "edb37361feae159c9816ddcb1a300c49"
  },
  {
    "url": "assets/js/136.ad1a4ba8.js",
    "revision": "342c0569a0ec8e152b828971e2923962"
  },
  {
    "url": "assets/js/137.d6042a98.js",
    "revision": "f4671981a53a8e518c2c0b509fab1bdd"
  },
  {
    "url": "assets/js/138.98587600.js",
    "revision": "f03ff3c1c200fc3674786d6f2fcd5d61"
  },
  {
    "url": "assets/js/139.b9a5b5a2.js",
    "revision": "4903086d2ffceaa1b1306940a93f502f"
  },
  {
    "url": "assets/js/14.3693daa5.js",
    "revision": "27b62f693be85b55e7c734d0885184db"
  },
  {
    "url": "assets/js/140.2fb685ce.js",
    "revision": "4c682960bbf17051376475886102d24e"
  },
  {
    "url": "assets/js/141.891b7be0.js",
    "revision": "1f0292eb8d96ff98ad7cc3e7997f0f7c"
  },
  {
    "url": "assets/js/142.b2c80336.js",
    "revision": "39219530ff25773104a466f3321776f4"
  },
  {
    "url": "assets/js/143.bf6eef82.js",
    "revision": "aa4fb5a859cb5bb886000e9298827cd1"
  },
  {
    "url": "assets/js/144.942d98ca.js",
    "revision": "302c33da10f2281b5e757bc2a97ce403"
  },
  {
    "url": "assets/js/145.db0d2f2e.js",
    "revision": "8103bb5cf11b56158148ff0f9599da24"
  },
  {
    "url": "assets/js/146.2dfaaaf7.js",
    "revision": "ae0cdf54c59dc336ae7999d5a6b83630"
  },
  {
    "url": "assets/js/147.af96e628.js",
    "revision": "181a1af243e5ea7b14ceb2d8a2cbcf70"
  },
  {
    "url": "assets/js/148.24880145.js",
    "revision": "94a1b2744ed31ee272fe023d241a453f"
  },
  {
    "url": "assets/js/149.fd8e70c8.js",
    "revision": "75c4b0182a3c0d677885282580dc56d2"
  },
  {
    "url": "assets/js/15.53f59cfd.js",
    "revision": "a8bc7cbe2fc7d02eb9204e41c0c11a18"
  },
  {
    "url": "assets/js/150.9e986776.js",
    "revision": "7713a059e402341e1d64aa182a282144"
  },
  {
    "url": "assets/js/151.aacad2b0.js",
    "revision": "9b1d9c80fe7dc1af7b69db8392d88b2f"
  },
  {
    "url": "assets/js/152.82f4faf2.js",
    "revision": "7300b416393ff6aeae317f3464016471"
  },
  {
    "url": "assets/js/153.0fbccd08.js",
    "revision": "931cf345d556a1a16a2be9db5bb363cc"
  },
  {
    "url": "assets/js/154.884205d9.js",
    "revision": "43aa3f8cfda4323551e0668f088ca176"
  },
  {
    "url": "assets/js/155.7d1386d1.js",
    "revision": "7c688b8b8a0ff079d94d28331e08a9df"
  },
  {
    "url": "assets/js/156.57e3c6b6.js",
    "revision": "b396090548851c5afe07f22b139f9d3f"
  },
  {
    "url": "assets/js/157.394c3fc6.js",
    "revision": "54df2b2507970808fc30cb13826f95d0"
  },
  {
    "url": "assets/js/158.e321aefc.js",
    "revision": "9d2024113fe351db8fbbdc643fc55776"
  },
  {
    "url": "assets/js/159.837c2502.js",
    "revision": "cd796c5b41ef106e08bd3669cc187540"
  },
  {
    "url": "assets/js/16.7f7c8f8c.js",
    "revision": "198fb5599dc85f0286569ea585f21686"
  },
  {
    "url": "assets/js/160.087b8508.js",
    "revision": "dea4674acaa31af0e3b857042962e6ef"
  },
  {
    "url": "assets/js/161.6db79efb.js",
    "revision": "6e8bb2a4ed45f22d7b7c98155eb45caf"
  },
  {
    "url": "assets/js/162.d1d50920.js",
    "revision": "21f95f49bdb92859072b0ce52b81507b"
  },
  {
    "url": "assets/js/163.c066302c.js",
    "revision": "31053a06a4c224c732a67aa2ef79593a"
  },
  {
    "url": "assets/js/164.7dbc5897.js",
    "revision": "98dc4bd1b4688355c9e090d9b7b5951f"
  },
  {
    "url": "assets/js/165.fd09942a.js",
    "revision": "f794e09a2eec56386c73c36347cc1038"
  },
  {
    "url": "assets/js/166.ec50b383.js",
    "revision": "9d9f030d43d607e67cfcf5ae738ca906"
  },
  {
    "url": "assets/js/167.431d6aaf.js",
    "revision": "6f14886061d04d03e0b799fd07c23b58"
  },
  {
    "url": "assets/js/168.00ba8577.js",
    "revision": "143c4288df3dd59f34b2b0cded9dbf05"
  },
  {
    "url": "assets/js/169.c7159251.js",
    "revision": "3d1de2dbd41e68655360f62eb613fedd"
  },
  {
    "url": "assets/js/17.014fcfe1.js",
    "revision": "e940ccba0cf42d8e2b51e51e65905362"
  },
  {
    "url": "assets/js/170.4f624739.js",
    "revision": "6d22810eecb761e8f5cc5372d1e83f86"
  },
  {
    "url": "assets/js/171.a8d37720.js",
    "revision": "15734dea1b4e62611e1aadea6eec74fc"
  },
  {
    "url": "assets/js/172.f6e90d63.js",
    "revision": "279d9ef676e23632f0557a44a067bd9e"
  },
  {
    "url": "assets/js/173.91ce38eb.js",
    "revision": "05cd6a021c8d812c8797359da15bf61f"
  },
  {
    "url": "assets/js/174.fd0ea4cb.js",
    "revision": "694e227b2c4a3e12ba82815d22850a6b"
  },
  {
    "url": "assets/js/175.dba05c27.js",
    "revision": "da6c8207e63615c4e22f77010261b2f1"
  },
  {
    "url": "assets/js/176.c4f5aaf0.js",
    "revision": "4b8eb0084b890a883317d34142a8037a"
  },
  {
    "url": "assets/js/177.14a8f2e8.js",
    "revision": "f8a22445f25b8ef232550e2bd132e971"
  },
  {
    "url": "assets/js/178.e7d048dd.js",
    "revision": "17f799eebb63a87e83a550e578e06932"
  },
  {
    "url": "assets/js/179.2975d8e1.js",
    "revision": "ce37bb96163ebbc06f40d4c745e4a57c"
  },
  {
    "url": "assets/js/18.830f8ec0.js",
    "revision": "ff9b96b00495c05c35e79a4dd21cbbfe"
  },
  {
    "url": "assets/js/180.618d0a12.js",
    "revision": "ae3016943ce5990a9581496c3bd98cc4"
  },
  {
    "url": "assets/js/181.5647c694.js",
    "revision": "4d951ad13d5007b6b0c3717c9b42e562"
  },
  {
    "url": "assets/js/182.747a4cd6.js",
    "revision": "d1bdde94d150f8895243893e37704eba"
  },
  {
    "url": "assets/js/183.47d1534b.js",
    "revision": "ab269526adae6325672758c3f45033ad"
  },
  {
    "url": "assets/js/184.638d04ea.js",
    "revision": "396de1c3dcf0dca3ccf735cb676c439d"
  },
  {
    "url": "assets/js/185.a7c0f36c.js",
    "revision": "74a491c139b4811ddb75f50fd9b3ff21"
  },
  {
    "url": "assets/js/186.75a3aee1.js",
    "revision": "c52e9abce440556b7147307680aa02e1"
  },
  {
    "url": "assets/js/187.7311c186.js",
    "revision": "1226ad2ac561b2fc03b79eac56bb3fda"
  },
  {
    "url": "assets/js/188.eeb1bd9f.js",
    "revision": "c06702d24dbf417ffc6a4c8a6852a56a"
  },
  {
    "url": "assets/js/189.9982528a.js",
    "revision": "5a0a54f90efc4b10a11d7a790a3b3932"
  },
  {
    "url": "assets/js/19.296db807.js",
    "revision": "bc8ca5f986bd5048909bc7e857270c47"
  },
  {
    "url": "assets/js/190.4df3ea98.js",
    "revision": "0d2cdfd5488fa8161f45322aa148d67c"
  },
  {
    "url": "assets/js/191.74220fbb.js",
    "revision": "80fe1a4cf955543c5ab1638dccc85d1c"
  },
  {
    "url": "assets/js/192.4ee3c0fa.js",
    "revision": "979eb6f0af56b63f881196380a22b3aa"
  },
  {
    "url": "assets/js/193.cea560a8.js",
    "revision": "8f6ad80bc663dd5a48c470f04f1f0e29"
  },
  {
    "url": "assets/js/194.e2178113.js",
    "revision": "11dd70a4c93cad3647dd3bae498b2dab"
  },
  {
    "url": "assets/js/195.82969fe9.js",
    "revision": "49820e4ca70fcd574a0814e25bdb7135"
  },
  {
    "url": "assets/js/196.24620581.js",
    "revision": "cd20f056d4628413c0272f11060b2ad9"
  },
  {
    "url": "assets/js/197.0e32ef34.js",
    "revision": "0b3fb896c989015d4a8f2e79373a8abd"
  },
  {
    "url": "assets/js/198.d5a8b06d.js",
    "revision": "a8238526d151b4f0f6b0ad88e3ecfcc6"
  },
  {
    "url": "assets/js/199.a42b26c6.js",
    "revision": "9ca2aac1ab17ae011dac6ca1f02a971c"
  },
  {
    "url": "assets/js/2.3b7e5ad9.js",
    "revision": "142fd338694506b1d61233a448199897"
  },
  {
    "url": "assets/js/20.addc296e.js",
    "revision": "59668ddbcce2d33b9bd9735f7191d90c"
  },
  {
    "url": "assets/js/200.e7e87609.js",
    "revision": "86c42976650550665e60ba4985f3df97"
  },
  {
    "url": "assets/js/201.111c4d46.js",
    "revision": "0a1229b0b17b6eb675ea2b34244537ff"
  },
  {
    "url": "assets/js/202.a3ad660a.js",
    "revision": "c1fd72159970bb3cd667467cafef5d76"
  },
  {
    "url": "assets/js/203.75df1b21.js",
    "revision": "8054ad3115885832defcebcbeb840080"
  },
  {
    "url": "assets/js/204.5910c5d2.js",
    "revision": "17e2f8b2a616134610762f5de9e45279"
  },
  {
    "url": "assets/js/205.799bbbec.js",
    "revision": "45d852f5eea8bb95b7989cd4992201bb"
  },
  {
    "url": "assets/js/206.2d679ace.js",
    "revision": "a73245681907ac8c8b991d1909e738fd"
  },
  {
    "url": "assets/js/207.be23f43b.js",
    "revision": "e9960301902b8b8ce351361a4bd5cc32"
  },
  {
    "url": "assets/js/208.b5e4a896.js",
    "revision": "34da1e228f6c119685478258fa3905f1"
  },
  {
    "url": "assets/js/209.aaeefa4c.js",
    "revision": "2685025c4d38b1b4a501ac547c9f2843"
  },
  {
    "url": "assets/js/21.7bd4cb35.js",
    "revision": "1453d49023165526a28f40d778a842ac"
  },
  {
    "url": "assets/js/210.bab84111.js",
    "revision": "f33c860f191bebfb9011d69049a024a6"
  },
  {
    "url": "assets/js/211.037daf7c.js",
    "revision": "6d943245f2c6803238102ee2e8a7f498"
  },
  {
    "url": "assets/js/212.b6055685.js",
    "revision": "cce2ca89ca12390566270cd646e88f12"
  },
  {
    "url": "assets/js/213.f0245cd4.js",
    "revision": "a07fda27a14964f19eb3c78e6e057e49"
  },
  {
    "url": "assets/js/214.8473a1e8.js",
    "revision": "c46b69a0bdedb7dde428131f1908d154"
  },
  {
    "url": "assets/js/215.53b3c541.js",
    "revision": "674e1cc9651995b3eb50c8f28c1e2573"
  },
  {
    "url": "assets/js/216.04632f22.js",
    "revision": "4276cfca893905059a4fd12fe2a11c74"
  },
  {
    "url": "assets/js/217.06d87e83.js",
    "revision": "04b62cce8c179c9b067a91b26e9c2ad9"
  },
  {
    "url": "assets/js/218.c885526b.js",
    "revision": "3e36f1204f5a88ae97fcbf3972ae223a"
  },
  {
    "url": "assets/js/219.e6683a76.js",
    "revision": "897bad9891d43964e505cff3c362c0fa"
  },
  {
    "url": "assets/js/22.d039e9c7.js",
    "revision": "fe970aa6d08e232fa7567be084bdfc65"
  },
  {
    "url": "assets/js/220.edc44253.js",
    "revision": "d80cb26bfc8afbb528997d011620532a"
  },
  {
    "url": "assets/js/221.44171951.js",
    "revision": "b017f8c6722bdcbfb83bec5527c5c437"
  },
  {
    "url": "assets/js/222.382e5a37.js",
    "revision": "1878d23bb34d04e149519d705379ba61"
  },
  {
    "url": "assets/js/223.dc5b5fb9.js",
    "revision": "f213777807d70798a141a581b4198213"
  },
  {
    "url": "assets/js/224.5f151b64.js",
    "revision": "b2f7066f0198e90b9c2030062bd5b880"
  },
  {
    "url": "assets/js/225.1cd7e353.js",
    "revision": "c5888579053e7a89536d02d0bc97353f"
  },
  {
    "url": "assets/js/226.0d3d80b1.js",
    "revision": "d41610761fe3a88bcd1b3174cf070f01"
  },
  {
    "url": "assets/js/227.23244356.js",
    "revision": "8000f6acfd867bc33f5ad72a0edbd690"
  },
  {
    "url": "assets/js/228.58b7242b.js",
    "revision": "673744f600a130e844cdc9fc9944008a"
  },
  {
    "url": "assets/js/229.66f1b284.js",
    "revision": "34199e42850d271e02625f62cf517c2d"
  },
  {
    "url": "assets/js/23.cfdfa419.js",
    "revision": "85551bf4749b6f6cc5dad8a0a3e4abc9"
  },
  {
    "url": "assets/js/230.3d23681f.js",
    "revision": "46f29511c3802f1767a248785def0192"
  },
  {
    "url": "assets/js/231.65bab8b3.js",
    "revision": "5069c904a92af0547569a392f7e31e35"
  },
  {
    "url": "assets/js/232.08abf5b4.js",
    "revision": "6c8ee01c62dc7ffcd03a181cb91d0602"
  },
  {
    "url": "assets/js/233.28068f2f.js",
    "revision": "1c88c5361590e08e83d6a8204952926a"
  },
  {
    "url": "assets/js/234.aa66f2af.js",
    "revision": "3df9c3334eefebcc336a21660eb890a1"
  },
  {
    "url": "assets/js/235.13d5bd50.js",
    "revision": "efe8e1769713f20c784418df751faa0b"
  },
  {
    "url": "assets/js/236.f6379302.js",
    "revision": "0b2b066e52ea7fa72a13bb6bde988be9"
  },
  {
    "url": "assets/js/237.17b4fc0e.js",
    "revision": "ce966134c46fa82f4faa5a3a813335e3"
  },
  {
    "url": "assets/js/238.0ecb55a3.js",
    "revision": "134187c1cf2e5e8566d0c0fce105d101"
  },
  {
    "url": "assets/js/239.118b71dc.js",
    "revision": "0af1776b3704eeeb9b2e591317bd30f0"
  },
  {
    "url": "assets/js/24.6c349dc0.js",
    "revision": "b8ceb4ade0a5eeeb0e264a9896487ad7"
  },
  {
    "url": "assets/js/240.14db6840.js",
    "revision": "d0366101b295c0a244ee6a272bc5e020"
  },
  {
    "url": "assets/js/241.8de8340f.js",
    "revision": "1735bbc8203091cbaa10933219b6dbce"
  },
  {
    "url": "assets/js/242.92df0aeb.js",
    "revision": "fac6e4afef966339495f743f545d4546"
  },
  {
    "url": "assets/js/243.c80a1733.js",
    "revision": "18eaad61f4e09532c5fe7d7b66fad882"
  },
  {
    "url": "assets/js/244.119e0606.js",
    "revision": "72f346a8022f9c7cab63fa52758280d6"
  },
  {
    "url": "assets/js/245.a348b11d.js",
    "revision": "ccdb7e2bd9cd06afda04fe1b006a555d"
  },
  {
    "url": "assets/js/246.a6de1064.js",
    "revision": "00ed91678d63a2de363f2ed0eafe516e"
  },
  {
    "url": "assets/js/247.a8088058.js",
    "revision": "fce509f16d2422c6740b157cb980a048"
  },
  {
    "url": "assets/js/248.cd8b23b7.js",
    "revision": "0ece17c3c86adb01223b8e6cc36a25d4"
  },
  {
    "url": "assets/js/249.432e2e4c.js",
    "revision": "767cdc87b4c5f700d0998f17bdfd4e72"
  },
  {
    "url": "assets/js/25.bd657438.js",
    "revision": "1d99d8109f458340a91af5cad1c7920a"
  },
  {
    "url": "assets/js/250.c9f072aa.js",
    "revision": "794c6804c97d77a9db9ea92a655d20bd"
  },
  {
    "url": "assets/js/251.381b7c31.js",
    "revision": "2ab1051f3bc998e7263902d114c5b5eb"
  },
  {
    "url": "assets/js/252.3de8bb44.js",
    "revision": "f95fb5998bfb09c768ad6f3cf9fb6b3f"
  },
  {
    "url": "assets/js/253.85136f9d.js",
    "revision": "821953c63fc7080340a3413e20cb228a"
  },
  {
    "url": "assets/js/254.ef6103a1.js",
    "revision": "107d136315e001e8516c95616c843f31"
  },
  {
    "url": "assets/js/255.f5a9c4a2.js",
    "revision": "5eb462aacc939cbe892342866b9b2271"
  },
  {
    "url": "assets/js/256.34ddd0b3.js",
    "revision": "545a574943b9712872743eb0a9faab1a"
  },
  {
    "url": "assets/js/257.5710a3fd.js",
    "revision": "f92f1f00a456ff7be99d995e9dd948c1"
  },
  {
    "url": "assets/js/258.655de47b.js",
    "revision": "9a82fdb2beac50c884d8aad75ed2a76f"
  },
  {
    "url": "assets/js/259.6f54372e.js",
    "revision": "3094821fb45b8b10de84f522f8590f70"
  },
  {
    "url": "assets/js/26.287fc9e6.js",
    "revision": "5da79d6cb76f9dad60540a959d176e4a"
  },
  {
    "url": "assets/js/260.c811ec2a.js",
    "revision": "bab4ed982216e634fd249f223ba4215c"
  },
  {
    "url": "assets/js/261.197b668d.js",
    "revision": "ae0f9b08db719b0386ad567be41db8d3"
  },
  {
    "url": "assets/js/262.95f940d4.js",
    "revision": "b4d85bf14345438266f5649d567a2122"
  },
  {
    "url": "assets/js/263.8899eacb.js",
    "revision": "4218687d1352ce27423628124ffb6171"
  },
  {
    "url": "assets/js/264.b4e3f121.js",
    "revision": "3ccd580c70df83238821050241db2aa0"
  },
  {
    "url": "assets/js/265.63df910b.js",
    "revision": "38ae9578a5f0bcb7a0b90143f269bf5d"
  },
  {
    "url": "assets/js/266.d4ee6941.js",
    "revision": "4ae53d1227b057abda28867f23a135e0"
  },
  {
    "url": "assets/js/267.11895f3a.js",
    "revision": "56c3b851e60b69c261729a8f9e5d843a"
  },
  {
    "url": "assets/js/268.37a191dd.js",
    "revision": "97a6dd3dc5a5f21bfb16dc74cab4fec1"
  },
  {
    "url": "assets/js/269.9e188710.js",
    "revision": "497ea140467138d1f46395fb4041ab5a"
  },
  {
    "url": "assets/js/27.aade15a0.js",
    "revision": "13b5e904be45ee2474cc332d5cb833cb"
  },
  {
    "url": "assets/js/270.dd93a0ee.js",
    "revision": "1ddcff0c405e586661aaf2a08e93e37d"
  },
  {
    "url": "assets/js/271.2d9ed5bc.js",
    "revision": "d7c5e7b95be54e204020edcedcf7b12f"
  },
  {
    "url": "assets/js/272.21247a68.js",
    "revision": "e61e0faea36cc9e51351249a09e99531"
  },
  {
    "url": "assets/js/273.b977b3b8.js",
    "revision": "48b38434ca5b20316a3b48f9dd254465"
  },
  {
    "url": "assets/js/274.1ac8ae7f.js",
    "revision": "7f99cdc60a902ad94c39d3ea640a83d3"
  },
  {
    "url": "assets/js/275.4783c291.js",
    "revision": "55117836a9c04bae9799110ca0dc7e5b"
  },
  {
    "url": "assets/js/276.144f1677.js",
    "revision": "97637104c1323209bb3a12858c5b3f8c"
  },
  {
    "url": "assets/js/277.2ee5f550.js",
    "revision": "65f97739a1e0fb74e0df4116c8bc8442"
  },
  {
    "url": "assets/js/278.a9261f9b.js",
    "revision": "631ed22b7d484974b690b0b50d0a9de5"
  },
  {
    "url": "assets/js/279.26ac3cce.js",
    "revision": "5924098d7dc5c258993a3bb510cdaa15"
  },
  {
    "url": "assets/js/28.2a0a43e2.js",
    "revision": "4d81d9aa33b7036f0d971d6edaff06a6"
  },
  {
    "url": "assets/js/280.853422d3.js",
    "revision": "e390aa5d6daf11f6c0fd6bd8037513f5"
  },
  {
    "url": "assets/js/281.d338a82b.js",
    "revision": "b640b42d57532f079ba8055bf1bd8a50"
  },
  {
    "url": "assets/js/282.0648e945.js",
    "revision": "21dfaf340e5adf19265a8402d41160d4"
  },
  {
    "url": "assets/js/283.89ce04f2.js",
    "revision": "d04e9845149e092c136b9b1f1f08a994"
  },
  {
    "url": "assets/js/284.add38921.js",
    "revision": "9221980534b5e5e43e0b37f2da08b616"
  },
  {
    "url": "assets/js/285.2a23de5b.js",
    "revision": "56daeb3fbe416dbfecdbf47a29c35c86"
  },
  {
    "url": "assets/js/286.50ed7aef.js",
    "revision": "07c0d2c6437747a1917083ecc3c7d914"
  },
  {
    "url": "assets/js/287.9cf9edf7.js",
    "revision": "e0f04482bd5ac87ee4c135d968b677df"
  },
  {
    "url": "assets/js/288.5252c549.js",
    "revision": "b8b7bd66b9892be3cfda0f784267ea89"
  },
  {
    "url": "assets/js/289.fbb55a0f.js",
    "revision": "13465ca6849caba0e03706501802c1ca"
  },
  {
    "url": "assets/js/29.ba238f31.js",
    "revision": "80ebea9df14c1d0af85e034f1a41030a"
  },
  {
    "url": "assets/js/290.e4a06587.js",
    "revision": "dbae0e7f8d0cf2ccb9775dd9afb240b1"
  },
  {
    "url": "assets/js/291.c5f0a91e.js",
    "revision": "c191e6f9d959af275e1d2cadaa73f70d"
  },
  {
    "url": "assets/js/292.56f33289.js",
    "revision": "587dc6f3515d8adb35c1351942c86afe"
  },
  {
    "url": "assets/js/293.fd8fee07.js",
    "revision": "5aa31b5e2b8a925fb611970b1e74598c"
  },
  {
    "url": "assets/js/294.1651af0e.js",
    "revision": "d623f80a66b3a4b5b3bbaf0a8a282f43"
  },
  {
    "url": "assets/js/295.a805d55f.js",
    "revision": "f02890deea66028a1e2296b2d0652c4b"
  },
  {
    "url": "assets/js/296.dfaac41c.js",
    "revision": "f1d621bcedfcfb7c26408309d4d6e64c"
  },
  {
    "url": "assets/js/297.1bae678e.js",
    "revision": "8bebb568361183f9dabe862d5d1fae93"
  },
  {
    "url": "assets/js/298.a39c4943.js",
    "revision": "eb9bebecdc9e298d27d827b3c5e32b73"
  },
  {
    "url": "assets/js/299.6140cec6.js",
    "revision": "52d894e52ec6b7dbc9b0e382f0190e83"
  },
  {
    "url": "assets/js/3.45aa6322.js",
    "revision": "d17cb35a92d2eb7102276a95853bf876"
  },
  {
    "url": "assets/js/30.1a617df9.js",
    "revision": "ba199d59a3ce42038a1e100ee6e40d5c"
  },
  {
    "url": "assets/js/300.f0eb4c3d.js",
    "revision": "5ac9ccd4c5e47d39bd745c6d1ff093fc"
  },
  {
    "url": "assets/js/301.cb58872c.js",
    "revision": "4808ef27a47d0e1915b415314122485c"
  },
  {
    "url": "assets/js/302.4273ed73.js",
    "revision": "cc35a338bc246924c18b378cc109976c"
  },
  {
    "url": "assets/js/303.ab704baf.js",
    "revision": "0b75fec0efa35943f5de2498b44c2989"
  },
  {
    "url": "assets/js/304.672b1470.js",
    "revision": "8030c0869224e52bb1dba32c43aa3f30"
  },
  {
    "url": "assets/js/305.e01d6905.js",
    "revision": "03a53ad74b51d24c8692c7b6c6adfc89"
  },
  {
    "url": "assets/js/306.c83ec1a3.js",
    "revision": "c83769f6269940e751975264c1eb51ae"
  },
  {
    "url": "assets/js/307.c23954e2.js",
    "revision": "d6f9fbf6d23d4b34d3e2b0ee9698e631"
  },
  {
    "url": "assets/js/308.c33c2843.js",
    "revision": "d5dd0e6295a6ab1dbf9e12c06cf93a1a"
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
    "url": "assets/js/310.d3034703.js",
    "revision": "c4a0a8844adaafb9d107b279d4985636"
  },
  {
    "url": "assets/js/311.cf7beaf5.js",
    "revision": "1b90514e40a81b66e1c3c16830ac4236"
  },
  {
    "url": "assets/js/312.4cd901c9.js",
    "revision": "c2fa7f5a51007231f7dcecfb623e3e4a"
  },
  {
    "url": "assets/js/313.0f9b0d5b.js",
    "revision": "8af012666d2b5c0a7c196056b6cc43f9"
  },
  {
    "url": "assets/js/314.e8a37f30.js",
    "revision": "2046243c8c19bc810ed47793b0b60cf4"
  },
  {
    "url": "assets/js/315.3cdd0cd9.js",
    "revision": "876ca8028c70e1e3e34932769010e548"
  },
  {
    "url": "assets/js/316.788789f8.js",
    "revision": "0ec387e682df422f481e637cf8e7eaa8"
  },
  {
    "url": "assets/js/317.2b14359d.js",
    "revision": "d4239a4ee51acb7e290d65504c945797"
  },
  {
    "url": "assets/js/318.ca612340.js",
    "revision": "5e8f9c7f3af8e00d723ea9bd029a3331"
  },
  {
    "url": "assets/js/319.6ae190ff.js",
    "revision": "f6a6bfc5b6efa3fe70f001950e5601b0"
  },
  {
    "url": "assets/js/32.9810b612.js",
    "revision": "7724ff03daff0c35abb06b00de8e6480"
  },
  {
    "url": "assets/js/320.3dacca2d.js",
    "revision": "43c27eb61c9e5cb48aa25b28e1d678b3"
  },
  {
    "url": "assets/js/321.9f2ad22f.js",
    "revision": "2f830eccd93d278dfdcdda7660ea751a"
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
    "url": "assets/js/324.ed9acf04.js",
    "revision": "5a47060e7e504e05cc31a4991d2d151a"
  },
  {
    "url": "assets/js/325.1c9596ca.js",
    "revision": "227dff0837070ee57e53de70fe5e8893"
  },
  {
    "url": "assets/js/326.e8ac4bc6.js",
    "revision": "ba148a1e987660d0e155f3c9be96bf78"
  },
  {
    "url": "assets/js/327.b41c1f32.js",
    "revision": "ea45ef1a3cc42be6500eb51a9dc1e528"
  },
  {
    "url": "assets/js/328.d805055c.js",
    "revision": "867aec57c709b6a60acd19b13303c9d3"
  },
  {
    "url": "assets/js/329.77344796.js",
    "revision": "635a40cce7f0fd2a30cf9aae642b2242"
  },
  {
    "url": "assets/js/33.dd83eb7a.js",
    "revision": "b50ae9a90fcdae113d0437d4d967d648"
  },
  {
    "url": "assets/js/330.afadd7eb.js",
    "revision": "770689d5516c04c0a770f74ca26d3082"
  },
  {
    "url": "assets/js/331.9bdf6397.js",
    "revision": "2977a1438bba0f6857577c7cf35eabd9"
  },
  {
    "url": "assets/js/332.80ba62c5.js",
    "revision": "fc6d8a41a7f08567a4983121617584b9"
  },
  {
    "url": "assets/js/333.c6cb92d2.js",
    "revision": "5d4ac1ca638cb0c0db8d63224ebc6873"
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
    "url": "assets/js/336.8fd4e594.js",
    "revision": "55e85670a45aa3af8431d017c40ea5eb"
  },
  {
    "url": "assets/js/337.27ee4d07.js",
    "revision": "f846dcfadf1cf6c8ff742558d9b91f8f"
  },
  {
    "url": "assets/js/338.645a4ae6.js",
    "revision": "6ae729205cb93968873b0e51db371c68"
  },
  {
    "url": "assets/js/339.4ce50734.js",
    "revision": "7fae1d0725368c66662aecd295099922"
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
    "url": "assets/js/342.707036ec.js",
    "revision": "68608bca982844cad5c39cd6b7132fce"
  },
  {
    "url": "assets/js/343.bd5e86d6.js",
    "revision": "bb6be72adc75b2bc5cee3e24b3c09653"
  },
  {
    "url": "assets/js/344.980d5af3.js",
    "revision": "321b656b2d15d183e6e5e60153f6612c"
  },
  {
    "url": "assets/js/345.06fc74bf.js",
    "revision": "0a41f424d58fdbb036d047505189e56a"
  },
  {
    "url": "assets/js/346.520c6dfa.js",
    "revision": "030adc4a0a19fc3ffe56e5977258e851"
  },
  {
    "url": "assets/js/347.56087730.js",
    "revision": "8784fba334cfff5490e5385065273855"
  },
  {
    "url": "assets/js/348.0e8f3bd6.js",
    "revision": "ab27a90cd2d063b2768448ae1feb3700"
  },
  {
    "url": "assets/js/349.18f318ed.js",
    "revision": "fd642c6a7d2ae526ba204c489ba965aa"
  },
  {
    "url": "assets/js/35.ef83fec7.js",
    "revision": "115544efae718007bf2730550029de9e"
  },
  {
    "url": "assets/js/350.c79bd336.js",
    "revision": "095e09b2c76a8d56ceaadc5e39ce7e37"
  },
  {
    "url": "assets/js/351.370cf37d.js",
    "revision": "6dd5fd416581e2a21bf2045ed7a84dbe"
  },
  {
    "url": "assets/js/352.29001971.js",
    "revision": "43cb1f8d6359afa4e3a2fc0e6158927d"
  },
  {
    "url": "assets/js/353.996dfd28.js",
    "revision": "e331483749a0312441e2ba1f48d77fd6"
  },
  {
    "url": "assets/js/354.a5de22c6.js",
    "revision": "2ab926ca08985f1c0d9b097a24faa7ca"
  },
  {
    "url": "assets/js/355.f48eabc9.js",
    "revision": "94139052a493088ba9e92a47049989a3"
  },
  {
    "url": "assets/js/356.8c8ba0b2.js",
    "revision": "07c4ae793632fd0cc757237c8ec68508"
  },
  {
    "url": "assets/js/357.33bd6a28.js",
    "revision": "bba17809561a9d83076d0b50d4a06baa"
  },
  {
    "url": "assets/js/358.6cf9ba3a.js",
    "revision": "9255c67d28f903a92c39a69b75a0a1fc"
  },
  {
    "url": "assets/js/359.ce7bb247.js",
    "revision": "da04b70cca730abe9862e99fac6cb014"
  },
  {
    "url": "assets/js/36.56347cca.js",
    "revision": "bd42ec7ce287fbdbd59c907e80d065ae"
  },
  {
    "url": "assets/js/360.ac9af986.js",
    "revision": "d6ab93250b3d5935fd9aee17e322c9a7"
  },
  {
    "url": "assets/js/361.15de3859.js",
    "revision": "aa995f62be4890a73f005e400fb9a822"
  },
  {
    "url": "assets/js/362.44d10771.js",
    "revision": "98bdedaefc34eda986eab58f2f2a0248"
  },
  {
    "url": "assets/js/363.1d5faed4.js",
    "revision": "59f12f1e51d487246d94c1f49d517d37"
  },
  {
    "url": "assets/js/364.0d53269e.js",
    "revision": "b7bcce75c6c193f37dd46f9c5c30b82f"
  },
  {
    "url": "assets/js/365.91493097.js",
    "revision": "6d67872eac93b9f870b3ce0881ebdcfd"
  },
  {
    "url": "assets/js/366.72d22aac.js",
    "revision": "13d9de3eec866a2deb5d11c38ca1d128"
  },
  {
    "url": "assets/js/367.286bfd02.js",
    "revision": "13862d72a93b88aef11121240227c250"
  },
  {
    "url": "assets/js/368.9947f630.js",
    "revision": "7822d059db6213d0b093d2955987f453"
  },
  {
    "url": "assets/js/369.f885f3d7.js",
    "revision": "f53eed6c0cb661c10431e6dc2491fb27"
  },
  {
    "url": "assets/js/37.4b59162a.js",
    "revision": "3ed763a8ce94cf74f897d7850a0de5db"
  },
  {
    "url": "assets/js/370.c7c73608.js",
    "revision": "8ce3104a170f5d4a36443ec907901acb"
  },
  {
    "url": "assets/js/371.113cac0a.js",
    "revision": "473ac8f92140f5ae455bfe823c884d4f"
  },
  {
    "url": "assets/js/372.aec58c90.js",
    "revision": "ff2bff59e71d8b7f3c2b07cbf69f76a5"
  },
  {
    "url": "assets/js/373.bac984a2.js",
    "revision": "a4d5af46a8a8d83d5c3414f935c02936"
  },
  {
    "url": "assets/js/374.f730992f.js",
    "revision": "c185599eb7fe3fc1cb38913e88e9d641"
  },
  {
    "url": "assets/js/375.618f9e88.js",
    "revision": "13c330cddaab77ef8164a9a73ade3f0d"
  },
  {
    "url": "assets/js/376.266479fd.js",
    "revision": "c67a9121832098d1371cc31b69904808"
  },
  {
    "url": "assets/js/377.927860f6.js",
    "revision": "31076bd08203e0bcf28f5be20b891f99"
  },
  {
    "url": "assets/js/378.e2e5512f.js",
    "revision": "2ed82bc741a5a547292f18665208cb3e"
  },
  {
    "url": "assets/js/379.94251942.js",
    "revision": "f67c42d851e8ea36c355eae7597f0f8e"
  },
  {
    "url": "assets/js/38.1b7acc71.js",
    "revision": "ecd9f926734d22bfd25388f97cec3f33"
  },
  {
    "url": "assets/js/380.5af42f3f.js",
    "revision": "178e959679536f990de8fd2618de2cc0"
  },
  {
    "url": "assets/js/381.daab3aac.js",
    "revision": "82a0d563b7da492660945899fce436e0"
  },
  {
    "url": "assets/js/382.43b5ca53.js",
    "revision": "b3e58000d25e89645954c852d0af89b5"
  },
  {
    "url": "assets/js/383.96b396d9.js",
    "revision": "eae6b70fc1b1a983c71cd1470bf34ccb"
  },
  {
    "url": "assets/js/384.4872a750.js",
    "revision": "1f97451bc55128963a756d7ea8149b1d"
  },
  {
    "url": "assets/js/385.c0b6716d.js",
    "revision": "be8017eaf5b90784cf920322a997e578"
  },
  {
    "url": "assets/js/386.cfe78d68.js",
    "revision": "6362cd7e7a7bdf2413e45c55717239bb"
  },
  {
    "url": "assets/js/387.9a177189.js",
    "revision": "55f86c7afc990b7199149e04f092874e"
  },
  {
    "url": "assets/js/388.a547b3ca.js",
    "revision": "1ae97749622c205a6ea74ee0db479c70"
  },
  {
    "url": "assets/js/389.199964a8.js",
    "revision": "a6ce3f4ce0720474ce7ea4aff7781759"
  },
  {
    "url": "assets/js/39.752533d4.js",
    "revision": "217639f6d1c82449d03a14c3562c0db5"
  },
  {
    "url": "assets/js/390.5f4ee3f1.js",
    "revision": "83174cf7f519d1e223ace998cfa711fe"
  },
  {
    "url": "assets/js/391.4356cdbf.js",
    "revision": "983d5336833e21068b50be501b4fec94"
  },
  {
    "url": "assets/js/392.f71ce328.js",
    "revision": "b6e9a5018d8e7fae29682dc98c144dfa"
  },
  {
    "url": "assets/js/393.ec3b686a.js",
    "revision": "53d8bb6eff4b789b52350137624fef56"
  },
  {
    "url": "assets/js/394.ce986067.js",
    "revision": "094fa1b10b52e7eb0a6eea482cc8e2bd"
  },
  {
    "url": "assets/js/395.6900823a.js",
    "revision": "6c67f834b3a97ff3b97c336e1461e7d6"
  },
  {
    "url": "assets/js/396.dd61acf3.js",
    "revision": "9b379d12b01772a60f54ce1139038a53"
  },
  {
    "url": "assets/js/397.f6e21f2d.js",
    "revision": "d1f80a1f7874d2035cac77ea0c7bef7d"
  },
  {
    "url": "assets/js/398.8fae7a5e.js",
    "revision": "f17695a3088985e570c83914f72631e7"
  },
  {
    "url": "assets/js/399.b857da30.js",
    "revision": "b82fbfbb9951416d85b3351aac592082"
  },
  {
    "url": "assets/js/4.55a566b2.js",
    "revision": "7c9378af86578a8ec7f774364a80e08e"
  },
  {
    "url": "assets/js/40.063f37b8.js",
    "revision": "be7c3ec7d4ab5832a62cf6851b33e34e"
  },
  {
    "url": "assets/js/400.22328106.js",
    "revision": "3aee1cc30db2e9d806607b0a9551b6b8"
  },
  {
    "url": "assets/js/401.8665c46a.js",
    "revision": "0f1afa5f4a909e75cbf6f2dfe15f6284"
  },
  {
    "url": "assets/js/402.e48abff2.js",
    "revision": "6e7a76c77e35e705adcd26b8347832af"
  },
  {
    "url": "assets/js/403.636bd9d6.js",
    "revision": "7dbcd0194f03dde57915d7f03f67b70e"
  },
  {
    "url": "assets/js/404.a52175a1.js",
    "revision": "606b46618bc6c882d4542df228502456"
  },
  {
    "url": "assets/js/405.677951ba.js",
    "revision": "407d3294c49f3010c9cfa8877ff9630a"
  },
  {
    "url": "assets/js/406.c79da2e5.js",
    "revision": "ae2b2db9f9653e4caec3ff6df2f09c30"
  },
  {
    "url": "assets/js/407.8cfd7f96.js",
    "revision": "0f93207ffd8415fc0fb0ff1036dd5873"
  },
  {
    "url": "assets/js/408.2579d174.js",
    "revision": "6cbb776ffff5e0ea5f10cd0fe459cb65"
  },
  {
    "url": "assets/js/409.50cfffa2.js",
    "revision": "31034840e027b945b2ed086db029c8ae"
  },
  {
    "url": "assets/js/41.ccc0efbd.js",
    "revision": "00d6c25687688c176a06921c8eac8d2d"
  },
  {
    "url": "assets/js/410.07a2a21d.js",
    "revision": "acd48527c3fb5424b888c8cc72cb3ac4"
  },
  {
    "url": "assets/js/411.0981ccde.js",
    "revision": "b194266c54bf283e6eb4d55c2fe2a4c0"
  },
  {
    "url": "assets/js/412.f1c39914.js",
    "revision": "11b45919a3a8581d4d53992167ad5700"
  },
  {
    "url": "assets/js/413.48c49b13.js",
    "revision": "0695ed58755dc740dbbd2c77ededf965"
  },
  {
    "url": "assets/js/414.d24a36e3.js",
    "revision": "dc01a72e64c1cc5aac2a885f2aecac7e"
  },
  {
    "url": "assets/js/415.1c03cf7a.js",
    "revision": "36dba13695d7e232977333748bdb6583"
  },
  {
    "url": "assets/js/416.a934ea3d.js",
    "revision": "f3086d1e1862a4f8581e494acee343f1"
  },
  {
    "url": "assets/js/417.adacfcf6.js",
    "revision": "956e7b2c4629bc23778b38d2f60ccc50"
  },
  {
    "url": "assets/js/418.f879362f.js",
    "revision": "206f57a0414ff0fe9534b143de56f822"
  },
  {
    "url": "assets/js/42.3a5eec46.js",
    "revision": "c6d46ca12d50051579a6525cf926ba38"
  },
  {
    "url": "assets/js/43.675fbe23.js",
    "revision": "b465e9f687ba545b4b19d5de84260c52"
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
    "url": "assets/js/46.ce61a312.js",
    "revision": "43904e80dea11d05f7b834f193b0f262"
  },
  {
    "url": "assets/js/47.78058750.js",
    "revision": "e72fcf40819148e68d31b81a41c88b05"
  },
  {
    "url": "assets/js/48.f3bd2de1.js",
    "revision": "ecadab0a47288df6fd85aef525f03dec"
  },
  {
    "url": "assets/js/49.7360a735.js",
    "revision": "cff82d57581619723f1e6c6696e4f68a"
  },
  {
    "url": "assets/js/5.1aca49d8.js",
    "revision": "5e97db10b8a133a6e6ea30cd2aef00c4"
  },
  {
    "url": "assets/js/50.950150ec.js",
    "revision": "1fae538bcea01de494de895a01177951"
  },
  {
    "url": "assets/js/51.a2f0fe12.js",
    "revision": "36031acba98fa23a5cb36147cd950993"
  },
  {
    "url": "assets/js/52.b97e77ef.js",
    "revision": "73ca3dad87b453a0561a865199b5e1cb"
  },
  {
    "url": "assets/js/53.23cff3c2.js",
    "revision": "403836f81ab9a2edf8fd408fdcf79ddc"
  },
  {
    "url": "assets/js/54.36e28af8.js",
    "revision": "593b7875afc73f0af60cfd18d17cee01"
  },
  {
    "url": "assets/js/55.ac76d5de.js",
    "revision": "15b120135890c8fa2f982e409c905771"
  },
  {
    "url": "assets/js/56.c00499f2.js",
    "revision": "fe922abd463a6ec7e172f4cccc93dadc"
  },
  {
    "url": "assets/js/57.5702a831.js",
    "revision": "c042229d6d7cb1b7e8c1a101f92b2e22"
  },
  {
    "url": "assets/js/58.3eb13552.js",
    "revision": "f432a5f2910ce62921e1667f88120032"
  },
  {
    "url": "assets/js/59.b06ce9c4.js",
    "revision": "32e83c789696c2b9c07fe861c87c42d2"
  },
  {
    "url": "assets/js/6.68491d6f.js",
    "revision": "342b6e17931190146210f490b5b5c377"
  },
  {
    "url": "assets/js/60.2c1f2cf0.js",
    "revision": "8e27eb7c407dae0f0d62a7489e0fb89b"
  },
  {
    "url": "assets/js/61.855888fb.js",
    "revision": "8d0800583fcfba535cb79b13afc801c1"
  },
  {
    "url": "assets/js/62.ad7e665e.js",
    "revision": "3aff231dbcf4432336346b8bd7ee14a7"
  },
  {
    "url": "assets/js/63.0b1d711e.js",
    "revision": "e804d1178cc6beba1dd913843fa2bc89"
  },
  {
    "url": "assets/js/64.19ce10fc.js",
    "revision": "e50738b0a495553e470528a22831dc2c"
  },
  {
    "url": "assets/js/65.d1b4c771.js",
    "revision": "4a3455e9e8d87230548110b86542f011"
  },
  {
    "url": "assets/js/66.980589ad.js",
    "revision": "12065538815ec2090d191ca2d2a59a9d"
  },
  {
    "url": "assets/js/67.ec712f0a.js",
    "revision": "30310440266295ece8eab4e1ea85b0d6"
  },
  {
    "url": "assets/js/68.b287e4f8.js",
    "revision": "fb8f646329b27f6e0eacc597d87d5fef"
  },
  {
    "url": "assets/js/69.9e5997fc.js",
    "revision": "d9a5dc66d576179313d4c1c2f01f5221"
  },
  {
    "url": "assets/js/7.dfbe6fc5.js",
    "revision": "fa36c7b6c62d232677a04e29dc22535c"
  },
  {
    "url": "assets/js/70.95a93720.js",
    "revision": "cd149838fa94b54f74c33e294febf345"
  },
  {
    "url": "assets/js/71.373d87b3.js",
    "revision": "080350c6240877c1264ccef76d5ec22e"
  },
  {
    "url": "assets/js/72.b3507e6c.js",
    "revision": "3708f0b4ce07e089a41082f15a6bfd80"
  },
  {
    "url": "assets/js/73.d2008a82.js",
    "revision": "ccc8ad84fe3fa0f832fe851f563184af"
  },
  {
    "url": "assets/js/74.e6a77591.js",
    "revision": "68e27f20cb6c55f8a3404ec828705380"
  },
  {
    "url": "assets/js/75.dc1b4788.js",
    "revision": "8b9ef4e98961979cc0da37d7d03364dd"
  },
  {
    "url": "assets/js/76.87916e01.js",
    "revision": "972a48ba9d523fe5db3fded213febb8d"
  },
  {
    "url": "assets/js/77.6025333f.js",
    "revision": "fb04cc27dcaf89bc70849abd4c070004"
  },
  {
    "url": "assets/js/78.f9cd6e16.js",
    "revision": "e1b12ef7a054c56d912aa25c7123d6e1"
  },
  {
    "url": "assets/js/79.679653e5.js",
    "revision": "c94fb6247435d6d57bbbb31554f088e1"
  },
  {
    "url": "assets/js/8.00435a43.js",
    "revision": "888875b782cabf08e04b27bc46d36d2a"
  },
  {
    "url": "assets/js/80.63919e12.js",
    "revision": "90c09e4f2c574de909d5aa30035c1075"
  },
  {
    "url": "assets/js/81.fbfa761b.js",
    "revision": "3d7f0ebc07692bc3421bf5b63c47bf3c"
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
    "url": "assets/js/86.c64d578d.js",
    "revision": "0f616d182de56f2ecb5aa1da5326dc8f"
  },
  {
    "url": "assets/js/87.e0ee6640.js",
    "revision": "7fd655b86967911750ecd48a180044f4"
  },
  {
    "url": "assets/js/88.d2c09fad.js",
    "revision": "bb9b7d2c3c0ba90fc369d6929b2b2de9"
  },
  {
    "url": "assets/js/89.6f7b06c1.js",
    "revision": "ad7bf6aa1d1e70ddff3fddd9ced7a9e7"
  },
  {
    "url": "assets/js/9.6d8b760a.js",
    "revision": "c4a67a0ae643b4c578c3fe39640da964"
  },
  {
    "url": "assets/js/90.a9686173.js",
    "revision": "df80421f0dea3f4f72e16c167be9bfdc"
  },
  {
    "url": "assets/js/91.438bebb7.js",
    "revision": "116a91de24c5cf9ded767335b1cde4d1"
  },
  {
    "url": "assets/js/92.657f0a8f.js",
    "revision": "f2c372bbf53bde14103310e317c756a0"
  },
  {
    "url": "assets/js/93.b19e4d13.js",
    "revision": "1b373580212a3c601617ad032c48b246"
  },
  {
    "url": "assets/js/94.d2797e1c.js",
    "revision": "851c2c0870df8370b2a1fdc6710b828f"
  },
  {
    "url": "assets/js/95.ae669f99.js",
    "revision": "d75b48b040696544538dc8dd4cf2b8df"
  },
  {
    "url": "assets/js/96.c2aba3a7.js",
    "revision": "cccc5d5baaec279a89714240af285e96"
  },
  {
    "url": "assets/js/97.4a3e8eb0.js",
    "revision": "4e1251a02cfcee5c29cb40bfc1c6bf0b"
  },
  {
    "url": "assets/js/98.295f1caf.js",
    "revision": "f87c48d8be9b1624e09fac4425c589ba"
  },
  {
    "url": "assets/js/99.0dc6b20c.js",
    "revision": "eac1c9cf597841a0d14886468ccea630"
  },
  {
    "url": "assets/js/app.6fb4816d.js",
    "revision": "a83b206d65403a89f1d25d7211532610"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "2f23bdbd1687092165bf159aa5c2a50e"
  },
  {
    "url": "blockchain/solidity.html",
    "revision": "7b0f2089705b2addc9648d673cda3bcb"
  },
  {
    "url": "common/architecture.html",
    "revision": "7a3c8ea25b89441399df8b46f2817a5d"
  },
  {
    "url": "common/cache/cache-apply.html",
    "revision": "d79a2f4417c4d129ab7fc22ce73aab75"
  },
  {
    "url": "common/code-structure.html",
    "revision": "696c650a13de21cc408b6e28f344a4bd"
  },
  {
    "url": "common/crawl.html",
    "revision": "6bbc8bb7407738a06d6258c7f3b8b401"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "f530aaafa0e8b8cfa40d68e7e20bcc26"
  },
  {
    "url": "common/debugging.html",
    "revision": "2913f73b80af867d6bdbfbbdbc96ff25"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "2efb238be902a562a8337f2e7a495a49"
  },
  {
    "url": "common/document.html",
    "revision": "f495749cc42672a5dc3fac56242a486f"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "7af96b4f80d91370ebffa8e1b57814fa"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "58d4fc397713b868be5677ce65e383a9"
  },
  {
    "url": "common/index.html",
    "revision": "0dcd8be4f802130780590d763cedbaf4"
  },
  {
    "url": "common/optimize_be.html",
    "revision": "5d5f4e809ca120e67e8fd6224dfa69b6"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "0e9f6a0699136b2e369de6da19543813"
  },
  {
    "url": "common/realtime.html",
    "revision": "5747bf4213395588fad936312995736a"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "61b98aaaa4cafa3310b5b4a1cbf07813"
  },
  {
    "url": "common/refactor.html",
    "revision": "e0ee8d3bd25f8d0f39487d3b772f7844"
  },
  {
    "url": "common/security/software-security.html",
    "revision": "af30ed28d79b4c3bb4790039861529c7"
  },
  {
    "url": "common/seo.html",
    "revision": "1a2f4d9f9fe82a80c97218aef261ecc1"
  },
  {
    "url": "common/use-case.html",
    "revision": "648d4849bb6760e602a732f87e801b48"
  },
  {
    "url": "css/box-model.html",
    "revision": "a6ca48eb42c10a37230fdfd69ed5cf4c"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "f82c83f593ddc15c86a70dab6820899f"
  },
  {
    "url": "css/css-flex.html",
    "revision": "2823168b88b53fa3f0a0c78b9a658610"
  },
  {
    "url": "css/tricks.html",
    "revision": "9e43bd1a8c4d040146b494539d232bbd"
  },
  {
    "url": "db/architect.html",
    "revision": "3793acce562af4557b9da44442db2758"
  },
  {
    "url": "db/cassandra.html",
    "revision": "0badcbadc8ed1115d762c6a476b211e5"
  },
  {
    "url": "db/couchdb.html",
    "revision": "c443bc5b236b0a862407c00de7ea3ae2"
  },
  {
    "url": "db/db-concerns.html",
    "revision": "1927b430d423522d07e1fe1d1b724534"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "9fa91a5c64fc502320a07b4335e21ed1"
  },
  {
    "url": "db/db-vs-blockchain.html",
    "revision": "491fc6be4a993affc0c84454ad014e27"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "112da9a622451e21328e435c052df478"
  },
  {
    "url": "db/id-generate.html",
    "revision": "107bb1f8cf41ff4ed363e649d5934b4a"
  },
  {
    "url": "db/mongodb.html",
    "revision": "c925af4609be558fe9819b92a38b30fc"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "3ef72400e2d8d6769ef892ed25b56642"
  },
  {
    "url": "db/nosql.html",
    "revision": "e348b4b120f4010b52280fd39810fff8"
  },
  {
    "url": "db/optimize_db.html",
    "revision": "c4b9aea17c546b938717083418907407"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "7a70ac600ac505f86518cdb91a697173"
  },
  {
    "url": "db/postgre.html",
    "revision": "54b7faa1d25a65697c51d230dec12495"
  },
  {
    "url": "db/redis.html",
    "revision": "e47b8c3e45d0fbd8227ca34cdc36c11a"
  },
  {
    "url": "db/storage.html",
    "revision": "b7adfe167ed3b8db747247dbe852c706"
  },
  {
    "url": "db/tx-isolation.html",
    "revision": "eb93d4b011173a105ab942e1bf6b69e7"
  },
  {
    "url": "db/use-cases.html",
    "revision": "55da64e568042e6cad898fe67f06be3b"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "7890b2c970826d3317eebb6846f60cab"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "5a4d17c0d58feb0da29e3c4f4aeb13d6"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "77a2d0c33b475147c59c16cfcbec8fa6"
  },
  {
    "url": "fp/fp-ts.html",
    "revision": "eabeaaaa388d1c4c638cc8f81b382965"
  },
  {
    "url": "fp/functor.html",
    "revision": "52b5c3ea5c00597a770139ec2881118a"
  },
  {
    "url": "game.html",
    "revision": "dc2294179023afb46fc909fa21d8e232"
  },
  {
    "url": "geo.html",
    "revision": "0fa280b03d4cfd717f846ae45c0a679f"
  },
  {
    "url": "go/clean.html",
    "revision": "1a844cf0b7e47f46f71d4a4f8eb4fe01"
  },
  {
    "url": "go/index.html",
    "revision": "c7c0c6cfb9ef43c355fdf2a6dff305ac"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "60b74fc4caa49a4cc24b234563a7f017"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "1ad1da40e46e924f681233db051d4d2d"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "4374eed66cbb3d15d5d67beca41f6bca"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "71738ea7a495f0b370083087ee98cc53"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "d26c4408e8e8dce43816073703145444"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "7697915d1db14fe3bbd060263568e7a4"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "cb8da57efc5d7d7c0001d923b70b82f0"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "b1ad1c98fcc1683c8d51e09df851ef2c"
  },
  {
    "url": "index.html",
    "revision": "1e37e1f21c96a666a2f95c5d0c407900"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "7dee8f0d9f10c79ec366388bfe9bdd91"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "c4ff9dfe522ba9e5310b78b1a250f112"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "471111e3c126fe37bd785e4f8c903369"
  },
  {
    "url": "javascript/closure.html",
    "revision": "cfecbd9035baa8289cd33403051061fc"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "6213275591e6491df23a8f40f4329dfb"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "5f5054c613cf01d4db999b6ff1b9bc24"
  },
  {
    "url": "javascript/nestjs/nestjs-cqrs.html",
    "revision": "79ecf4b582288a045adba141b8655ef1"
  },
  {
    "url": "javascript/rxjs.html",
    "revision": "275f8e8dcb19bd7fecb115d4701bd1b4"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "5a5da440f44d5bfd1c5f01dba72b530b"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "f00633aa05335feecb7223ef8187a70b"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "03aeda490d4464a7a047a6ee8115d25d"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "f821f9f29d64b1814c77f4d8bad657db"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "cec8279c3c7bd9ec8c5e4ff3d31aea7f"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "d9ced52239ddbf753497565ad5b443c7"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "a7ac179f7e8fe0ec43317ae8feb6ac5a"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "ac792c0fdfe9b39e479c73e2a638aa6c"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "5bb49c3ede5e1536125a071dab20361f"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "6efbcac11711f20c67d1cdc26c7469e9"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "2b418063babdab61ad64876d0429641e"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "d0e545d984d4d86a2f6075a1579f0090"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "0a762c42946bcc1f0138e0ddc191c43d"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "f59bff5a41b829d458859543d0a3437b"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "394f055d1b307386dc7b07c6b57e7559"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "35a89a058d3695643343d95b3a07153a"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "9d4e2a6a2c3c8806b7d82cfdeb07bd05"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "8a64c1ae4b5cb7181bcb084a8e4c7520"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "3084035abc48c626c442c8dbdce84fd9"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "6b4d423277b8ad3f12c4c946f27ea5c4"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "1d8b851608236cea4ef14efd6c1558be"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "e5881056b869c8970819f5c7bd755d29"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "ebe9e5f0f9e50492dfe3ded1d8c04a35"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "014f53d1068c8dc966fb449a3f2b1232"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "dbc63634af786a2c9357f0afa4b6f147"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "bbf714faa8f1bdffbdce46c6084c060d"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "292ae33a677f3cee8bf63ae8de8f53b1"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "51525121fb71c236fec774de8da945a9"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "b1057e27d73abbdcd074c41656125269"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "1ce48d29514f934addf2f4aa11a1efe8"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "f1c2179b4257c87e55e18798814550ff"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "6d4a83bd6bbc0a200cc820acb10e61d6"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "4426da35af30f51e3f15c899be645f28"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "4617168e14876d8c00fb90fa768e30b6"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "05ad57e4ff4bf9f430a0e468bec5504f"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "76e5a1ac83293d53861a456aa1db8d25"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "88a6d5fdfc049463fe4f97d5b276a032"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "55d212b55d3ca25409802491e1e62c6b"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "6ce730c8b4e36326873538cca5359c2f"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "9d4eea6443ff0a68db656b420e28d8cb"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "b4a26e8e406bae78c561b0430e535890"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "786748d207712488dd121bfb8d13392a"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "d4faa12344e91c5ca8f7e4cf247573c8"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "124227936e0060e32a77135fb643d0c9"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "511c96ed1d18f6d2ca5dc9f69b10f56d"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "1939da715816fc02987319266e70247e"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "4c12abdd61f309c101d123da2ffeefea"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "519c007ec051e8bfe6a0952ad6aa44d4"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "05b6fed5fffc2d19e86dd87d757416e2"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "e5b7ba96b97d2d5bb072023aae2d1e2c"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "aa6fa1e8f9818ccb0f94a0c5aa8adcf8"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "26103cd65b32441e9ef4cfdc092a806d"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "90a6fc093670bf422a6023a9fd8b6e51"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "32e3c314288ec1e326df9d6404cd00bd"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "e20f620f48c7849c624f56dffca123aa"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "d120133355dfa36604f54aee4cb81eb8"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "c04cb0e0788a8329fb1e12a73746ca3a"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "82edc76badf17ff3762099c5475cc49b"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "1a9eccf9848db2279b4743607e7c9ed2"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "4a9ea40715ed4192a81e2eb3a38a3f6d"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "bdf0c6499ee93a8d5e3d08dd62c34783"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "628663cc8a454b47c94109f229400c71"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "e8fa08c3ffecc30f525cbb2b736667d0"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "f789f063f9ecfd06a117e0788d725ed3"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "8f3fe2a3cc3f1c5e0c63c24004b868a8"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "b39691ef84ed1444925d63528fc8c0a2"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "216bea3d679224406c3d91d843b5227f"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "08b852dcc927a63842ccabdd7316fafb"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "a1a0ea6bd8b8e6f9a33222f493d78433"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "2a57ef2b59eff879bd73977491e9715c"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "19e9dba43899ad93c481eff53d14bc83"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "d33c6d4a2d05eb57388ac5a8e9ca3410"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "27488d04f571470580e2c6aa9b4d7317"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "fff38d87bf26aaea031fbb8f3632ddd8"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "69ff3cdb4045487752510fd29ec1607b"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "744e7b2897e9a9389cb88a178d762f9d"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "f91a06ffaa5061215a1b963dd6b0310d"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "cc9ae65851e49164528101a5a8e5ea52"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "efd50e97df73fa0f815e4326ccb9387a"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "0592eaae78b305c30caf530182920b31"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "ba4ace22187d0c09725fe48e540163e2"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "99890bbd54a1048451beba0c5c389805"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "a5efa2a0da271345fc0842ec8cfa6109"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "84864f42016db9b26eb9591ab959cea2"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "c372ea6706dee865b1954949d5b34976"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "d9eedb0eaa940e800767f16389144844"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "ddc045ea12527ad3d5af92573f602cc4"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "0abc674ce16df016aa401ddcc29af3aa"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "81ace0a669b1c1fe27af8fdb582d8044"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "dcaf8736ab0d348a2450ddd8258f537c"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "b6e3e5bdf9cf3e2b4a1f5dae3bcd0e8e"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "95135d62ee0751d6688a8669305f8789"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "dcd011cd4d7421d7ffa28de22cb9d66d"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "be97c74fe2d52933c3d94ef3975104c0"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "a9f7c5401637eb9bf02197a86074a0e9"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "b63914514322f5b8ff15404b7c0c2768"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "766d8d13aa989b274155c60fb075a853"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "f3ee2d92e2c40b1c6e87001bc9fdc895"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "388bc050bc415bbbf6a79c9f2da3bcb7"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "7b96b1d7defe713d435a61644463bc7c"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "a9cd130a43839debe6f395401a758433"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "e7c89c2fcc461e119df2f08bb6311bd4"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "f275c78d62556b4c821665d12573d40b"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "99de4dc19a107c32e3354596e4637fc8"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "b525025f82bc3209009e2bcd5d935661"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "fdddf6d428ae64ccc1eca63ff3046c1f"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "bfdff78d40fa0b8782ad88bed3770b22"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "b9c39b00e1758a64da23f3e4242c2443"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "a56271855d84c305c1766d6c65d812d9"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "6033a5b28dacb576a3b3aac3a405f27a"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "99eda16d5f75d77c9ecbeaab9bea9a27"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "55d8db490a08c12bb9b89ef8f65d38ff"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "c2c1ccffe8221338789f47219c0ef6f7"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "9b6e3efcbe95a856c57352a271d1ef41"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "6ce21b5ff2900bae11eeeb667e3c322e"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "006f8d9f70884037597bf249fc64bdc1"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "34480bd0327f32217d71de99765d2ed7"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "e8ff05e3e65cf9014c16973cb7548e95"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "0cdf3ffa245e5bcdedb348002f2696ab"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "17950eb2521d47ab44b305a8784ecbac"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "5356d79e88803fa9c83c428ab766bb24"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "234329e2432607b991ead1fc64cc3386"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "e50bca44c0c3cdffd1faadb25e088e89"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "798a744eee60cb8e2594c9fe59a6a85f"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "463b96395a4f744967ad2f1ed8dea976"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "f6e010807587715540ef883bd99dc2ff"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "2169434dcbe82d266215f54d73bced23"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "9fa49cfa3010d4f285d67106613a978e"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "db4e0ecbc0910139e14965da3518ca42"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "2f8d6d64e4c172792b4a2d5bebc49eb2"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "3ee3b414ea5b0dac3cf8f3a4cae9fbd1"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "6cad61a44535db118537865543072ffe"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "861db1a753bf5014517c8346f23b3bfc"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "584a22999829c973cb88d345b95bfdcd"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "a9070030c497d2a6adccb5eca41b8e83"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "65d301d467bca3d5f6932017c10a8fce"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "58b7a337553a4f991b138f64fc2afd8c"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "a891c6843c7066faba4d0d9e0b6fcdae"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "1071cec4e7a39b745d4041cf0d0ab45b"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "0ae25f45f2444342f7f7f02e573007b1"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "51abeebc71822efa94b9b8316c34295d"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "85260b4c91c180d7ce0f11cfb7e7ce3a"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "3c46ceb29ec40f0e9d967e51769dabf9"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "972e076bb829abd525c9342e967ecc7c"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "cf1620a9e07557bbe3eb51815034aa5f"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "0a189cf0164aca352e7ef79a06bbaad3"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "752638a7b416592d9968f68c40864ac4"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "d830cbcf26202478da1296c56d56984a"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "153390365239bbae943818cdb4c8ed19"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "4378854ed4d91e9a556ee858a9fd09a2"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "070d6ab2f0e64e31b63aef7c0f6e1cda"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "cad709c010508a955453bcb34f211df4"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "a4f98790889c068bc585ed2a5f73d5b0"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "48b6b31c7666618f44ad6f92b7d00be3"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "3712a9d050b069ef146ef5aeb896c7e5"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "a31f7cedd2fca47055b176153f9f91a2"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "0d855dfcaf8f533d4725ad419a10a726"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "6aebc25a5e5d02d361f697feeefb89a3"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "154cc2db08ed77c52cfc58f978a04f6d"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "6d2bd4fb69cc6365b641e4b5581f1998"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "ffb66f5937522cc488c5e97c9f551e1a"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "840a933041983c5d614f5f2c63e5fff0"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "6f86d24ea099f73232609f2a01a3cb95"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "18094f4f19ef6e899f43c457c058e56d"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "085c81288c4bb90250fbfe6c149ceebf"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "a04baa927ce3457dad2c2ec61e28cf5a"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "23d4a58fc894f925e7c8c646b24e402c"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "5753465c997c03a0713e690ad9033886"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "3490fed9aec896d8c606bb2f35c8fe5b"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "822e839aa4d74dcac8c400c21d5a7abd"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "a26b7c51915bee50043c87801e293288"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "03e146c46f7f405f12a342360377a3bc"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "84f86dd1ae26ae77daac69c74cbe39eb"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "01108f7cd330a921ec21bad867c19a72"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "2b32afc5ac92fd0befe1c802598e6435"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "82e82fa1ba9e625a77b8d48564164e24"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "01fb431a7db4bd4e154c0ca0649505f6"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "f3fdbbd10e72cacea087d6ebc439b8f0"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "96926ea0080cf4521ff9054f48ffc538"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "93d9236b72df12b91a81d1417f326a00"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "6b38702d4f3e186dd27a2f879d7eda86"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "f96474e87feeebcb402d0760b1ba0a44"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "598f834e937cf2d3702852458a9c3331"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "7c5b5967f579b416cdaaa42d83d1e0c2"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "b06dd5bc111015cd10859f5f8e407636"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "d0a605496e98110be4e4d51e56f2fb27"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "5d4351646784aaea15583697621fc51c"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "56a7b9e09eae5c0c4c9612fba5535217"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "2d35bcaf6bcb8d493f4a893d90e85943"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "6b640fe20343c6eb63dbaaa49e2a2a42"
  },
  {
    "url": "kungfu/template.html",
    "revision": "84b376f14b3039f27038cb34de8cbd75"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "bf11d2f1046cf85d767000b890cba651"
  },
  {
    "url": "node/env.html",
    "revision": "7e665436e171ad470502d2a4a871c1a1"
  },
  {
    "url": "node/index.html",
    "revision": "cfe40e9dd2a085427eb56d6852c56fad"
  },
  {
    "url": "node/n.html",
    "revision": "fc743cbd93fe9866c893d288d9395259"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "6773e384d84d33664ce873b4890adac1"
  },
  {
    "url": "node/npm.html",
    "revision": "21a16c82ff8d7f5e8c7abd5d3f0ab732"
  },
  {
    "url": "node/sequelize.html",
    "revision": "6a143c999eaa38d678b387875e527c28"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "d59e334d21be6bc0dae91f7c90070856"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "38467bcaa4c10189f9a7c30c7d11532b"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "05bf0a6f780202bcb98e1cffe1dc556d"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "0bec6f3f69a456dead5723ff6e47e9f9"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "86c8c2b0c1356d36af58396c8cf83d9c"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "3be421c620c9d92bea4e1312cf6759c0"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "29e6b96d9197f9b2e24160bb0cfe3945"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "33bc19b45763128b83a86f494e450808"
  },
  {
    "url": "php/clean/di.html",
    "revision": "095859d4002ae01aff325a43ba237d64"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "3f873414983ba1e327f16729a49b3d6e"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "882783844f136e062e40936ff688532e"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "fe926ae44e5f4bd07c75474333787505"
  },
  {
    "url": "php/clean/index.html",
    "revision": "96cc028d0103710af6235ed1f441525e"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "715e8cf844cc0bef8ed6ce3c1dd65eec"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "a52fc5426d00f4a41dd76182bc628460"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "1ab5a1293ae3511d6e14eba6546970d9"
  },
  {
    "url": "php/composer.html",
    "revision": "307252d18aa148b04431e425f4bbc5c2"
  },
  {
    "url": "php/crunz.html",
    "revision": "96877e451eee09dfc6ae162819054de3"
  },
  {
    "url": "php/laravel/best-practices.html",
    "revision": "d4697cef1c7900ec405e5882255ead95"
  },
  {
    "url": "php/laravel/laravel-notes.html",
    "revision": "23450761d45c288554866b4af9b2764a"
  },
  {
    "url": "php/laravel/patterns.html",
    "revision": "1fe0ce2194e549eb216af860185e23b3"
  },
  {
    "url": "php/magic.html",
    "revision": "8c3e832024b28f09b7c19432b40bdb54"
  },
  {
    "url": "php/notes.html",
    "revision": "7814017b9cca41cb2e2c342f2594772b"
  },
  {
    "url": "php/oop.html",
    "revision": "d87f2c5a25bdc864252dd49b8cab3ea0"
  },
  {
    "url": "php/php7.html",
    "revision": "2a7ec913595fc016f48083c73fefbf57"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "75b379bf21c95df95f6562db7d0b124f"
  },
  {
    "url": "php/reflection.html",
    "revision": "93c4624467b55756f2b72d3d2a461110"
  },
  {
    "url": "php/tricks.html",
    "revision": "a3061a4b501ea13579988b9beba074b1"
  },
  {
    "url": "php/wordpress.html",
    "revision": "18f34fa74c1b6836fc109a463eebc86e"
  },
  {
    "url": "quotes.html",
    "revision": "bf62f3ec07dd985de4dd5fd5aae72e98"
  },
  {
    "url": "react/mobx.html",
    "revision": "ada8047f048472c7abd20f9685569cd1"
  },
  {
    "url": "react/nextjs.html",
    "revision": "a3c960737c340a6df25d653bae6a92e9"
  },
  {
    "url": "react/react-vs-vue.html",
    "revision": "525e8f571c326eec156eae1d1d63f00c"
  },
  {
    "url": "react/react.html",
    "revision": "2c77bfa8faa3049306bb2f9647cd5f58"
  },
  {
    "url": "react/vue_react.html",
    "revision": "19ee90727e461000930dc5921d71fce2"
  },
  {
    "url": "refactor/notes.html",
    "revision": "3622637267cf0a61a43075fb3cf58957"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "5ebc216615c10cd895ba90e0edda6dcd"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "c2da6416d08a9ec791ca8c68eb5d050e"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "27a965374f30b531e021dc9b60a0fcc2"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "6b92df205c3d822ec6eba55b0ffc27cf"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "a1201b2872bcf727034c17613a318f78"
  },
  {
    "url": "snippets/jest.html",
    "revision": "11dffbc59aab2507c80d4fdc1df1ddec"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "9affaabb995dd4d4d03a0db95d2ab98f"
  },
  {
    "url": "snippets/regex.html",
    "revision": "be971354ffbf4f835a743619420e51ef"
  },
  {
    "url": "terms/12factors.html",
    "revision": "7aba2ac195d387d82eb2f91e7d62cda2"
  },
  {
    "url": "terms/architecture.html",
    "revision": "53403c246d7ff015c5e4505ac5a07d53"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "c44ddcaba193357082986df1744e0334"
  },
  {
    "url": "terms/di.html",
    "revision": "2c7f839bbf088e9ec9d6278458edba53"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "62b95963a45c2bec6c96ca7646d6ec53"
  },
  {
    "url": "terms/javascript.html",
    "revision": "b5a46b9a82b79021d33e99ccfdc78615"
  },
  {
    "url": "terms/patterns.html",
    "revision": "2818bba7d1e5691a34a8068508aa012e"
  },
  {
    "url": "terms/principles.html",
    "revision": "99fc3d3f8579fd15ec0a60dc9812be8c"
  },
  {
    "url": "terms/rules.html",
    "revision": "cd9aee4a1f8d94b86c326259aab061b4"
  },
  {
    "url": "terms/testing.html",
    "revision": "6d11fabaec77a9cec6383ef6085770ac"
  },
  {
    "url": "tools/chrome.html",
    "revision": "c7bbb15d78480034ac38529d0df55abb"
  },
  {
    "url": "tools/docker.html",
    "revision": "767c3aa15e43d25cd66dea1fb1673385"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "be8e04e4823f0fb16e628e9b7be574f1"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "1a617c3c853573545620c7c89faeb732"
  },
  {
    "url": "tools/graphql.html",
    "revision": "f24ece9eb674bd41eff9c1608fe07517"
  },
  {
    "url": "tools/k8s/k8s.html",
    "revision": "1189a95ef201c347e410916e78c00018"
  },
  {
    "url": "tools/kafka-vs-jetstream.html",
    "revision": "c1c73a0a1397b73f6933ac0b0ed926c2"
  },
  {
    "url": "tools/kafka.html",
    "revision": "08323e973360470a349a28d7b03af95b"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "89e3593296622e17268abd44dfcaae33"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "28f6ba2e06e52c8974c6e056e3de6b37"
  },
  {
    "url": "tools/redis.html",
    "revision": "495cbd5ddefdd9d628ba4641ec580b4a"
  },
  {
    "url": "tools/rfid.html",
    "revision": "e63d727d23619580264d0da8fb56f8a0"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "61ea63957f12df9a858f850809796920"
  },
  {
    "url": "tools/vscode.html",
    "revision": "861a43b937b2c149584d52c2b2857d91"
  },
  {
    "url": "tools/webpack.html",
    "revision": "41a6bc624763532f09898d653f28058c"
  },
  {
    "url": "tricks/compare.html",
    "revision": "9f23e62c68ae26be4df1b2727e4c59e4"
  },
  {
    "url": "tricks/git.html",
    "revision": "92dcb5d4020481295836273003f9aa56"
  },
  {
    "url": "tricks/linux.html",
    "revision": "b33a1de3f71c98bff9c27ae6719e7b1c"
  },
  {
    "url": "tricks/mac.html",
    "revision": "be1cb80fef0a9ca04430cd21a2be8022"
  },
  {
    "url": "tricks/misc.html",
    "revision": "dc2d50179469d66206f498cdb6b8850a"
  },
  {
    "url": "tricks/setup.html",
    "revision": "bcef3dd8f6adeaa8412efd5e2fc8da9c"
  },
  {
    "url": "vue/communication.html",
    "revision": "b36b3031d3ff346b1a5be565e76acfbf"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "702dc8df32ff5333ff62eb4cae06a377"
  },
  {
    "url": "vue/events.html",
    "revision": "e922c1359f8d952fc7a7b6af275f62a6"
  },
  {
    "url": "vue/references.html",
    "revision": "e74e722262462d82a9546bd993a36217"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "396d996e3fba5159b9a1ff6b2e598f03"
  },
  {
    "url": "vue/test.html",
    "revision": "05c5420993fe02aa132911551f0e9876"
  },
  {
    "url": "vue/tricks.html",
    "revision": "1a020664c677ed9eae5b98dea94b1d8f"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "26b37d00b192a5ffbc1fce7e0d3c4d4c"
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
