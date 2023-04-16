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
    "revision": "897c8ed02b3927be19eb8709c8f0df57"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "120e1aeabad3634b88bd3d2bbcaf759e"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "44d98421ddb40a19c80844397a735c67"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "0d3986527b3e2628711d4f8858010721"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "9d9794c7440bd2733d1aba6a4f242929"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "7fc11977e9f1b025d0ee3d82e011fdc8"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "c2b73840b62180d0ffc63ea7285fee50"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "9da856d64ec96ac2699f6b9e2929745e"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "48c581878ad98b052a5ae5cca73ba9f0"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "5cbdd65ffe20eda1550ae55947886f1e"
  },
  {
    "url": "algorithm/string.html",
    "revision": "71f3339c69b6ad5be3f08cd9251898b1"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "59aca8f6fc4fe278cae821fc2df80096"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "0f6ee8426dc8767545ed720fb432a23a"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "f5e4ed824d62b45f720ae028f56b1fa2"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "b9450f0b9922915b0e40ef38ea96fe1c"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "658bb8735bdc0b450617f90c032c50f0"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "ebf857c6fe638c8a4700f7f78300b313"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "1a3e9f13b595ea0c1e346610e0a9d9a0"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "2b82e267cc6611a0421739613c8dc742"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "3ad289316d16c65746d4eb817be2c2aa"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "c76fadb8e1b3f436603459b5dde1f5cd"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "5e947a9d027ea96d35b1ed92c8deeea0"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "256d01844dd8538c043fb5b54882dab6"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "0c11f45f5cafdc4a3c97b628b267ac8c"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "b234f124848e0fda4a7b73ceaedacedc"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "2bd4c6d749f76bcb9bb768e869500445"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "81f1f524ac2e3d25a4c004e25351fc31"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "81914ca1c99a4974b013dafb04b91218"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "b2664918373496090070a16f98b7ff33"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "555f7ed9fa13be7c76f2c9c6d9febd27"
  },
  {
    "url": "architect/authenication.html",
    "revision": "19bfe350706d04e725c68fe2d7b4b276"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "055efb6456c42c97ce51a7bab9a2e947"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "3011aef3077d1435717b07a72937fefa"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "64a3225501c6a9dc288ee90a79cd2ea9"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "6ec38809dbc1b14edd6751ffa44918e1"
  },
  {
    "url": "architect/ebi.html",
    "revision": "d5872efd639e03a40d38383cb83fa27f"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "666367e33b4adf552531f504d6f9a267"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "8a8154f8b17a3fa8142936d4f0edb915"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "f6a024e45bec7bbd87ed9b398b4772e5"
  },
  {
    "url": "architect/index.html",
    "revision": "f910173939f284ea42b22301b27607cc"
  },
  {
    "url": "architect/messaging.html",
    "revision": "416095875c566048beb5fb7a9ea714dd"
  },
  {
    "url": "architect/microservices.html",
    "revision": "387ceb61697fb4f41f9d41c4cab5b531"
  },
  {
    "url": "architect/mutex.html",
    "revision": "b70f5cad64087b0a2385c58bd4098782"
  },
  {
    "url": "architect/notes.html",
    "revision": "d6fc6365a9dc4fff765e2f0741d5871b"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "1c64acd90900bf94691dc75708e69798"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "bf95ddd5b891cce2a87d7a9c17a51e46"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "8299fed2764ab015cc338a95625dea9d"
  },
  {
    "url": "architect/refs.html",
    "revision": "b97410798a13c7f0eb506992765f73de"
  },
  {
    "url": "architect/restful.html",
    "revision": "01249a2b0c348629f847092e022b6d1b"
  },
  {
    "url": "architect/soa.html",
    "revision": "6e91a7791547774c6a91a45c6fa6a598"
  },
  {
    "url": "architect/spa.html",
    "revision": "afdda9d43a3cfa2af723de421539b488"
  },
  {
    "url": "architect/terms.html",
    "revision": "1b9ac17e76ba59e0c55988c0b735e88a"
  },
  {
    "url": "architect/webservice.html",
    "revision": "1f4d7086b8fa26f364abdc7499b0419b"
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
    "url": "assets/img/use-effect.d7adda21.jpeg",
    "revision": "d7adda216f8b08a01d49d7db24bb0490"
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
    "url": "assets/js/10.6aad9852.js",
    "revision": "da31b0c6b2336196b230f241c0cae95b"
  },
  {
    "url": "assets/js/100.e41f497f.js",
    "revision": "3289595617982e06b8701a251891c7b9"
  },
  {
    "url": "assets/js/101.b297289c.js",
    "revision": "9ed2b28e2c1db154ab7cf2fd04e94ac6"
  },
  {
    "url": "assets/js/102.d50a2169.js",
    "revision": "4ca8dbead4b6beddd62ba24f8ff33f75"
  },
  {
    "url": "assets/js/103.004e9ebb.js",
    "revision": "4b2cb77a4634c9b44df537712ac1a1f8"
  },
  {
    "url": "assets/js/104.68eff53c.js",
    "revision": "cd470c4b4cafc00ed34935a74d03f557"
  },
  {
    "url": "assets/js/105.aa2b3100.js",
    "revision": "7005089d4fb4617533d170edf8220c30"
  },
  {
    "url": "assets/js/106.ed88b9d4.js",
    "revision": "3bf97709167b23b9839c042a5df8bfc8"
  },
  {
    "url": "assets/js/107.0a7acc2b.js",
    "revision": "fc69413c10bf21a9d02a3a0eccb1bb97"
  },
  {
    "url": "assets/js/108.d427d82c.js",
    "revision": "c75c1dfaf5c43c22be475a9c5b34a09c"
  },
  {
    "url": "assets/js/109.34542225.js",
    "revision": "b23feb73fb14dbe9b02e03c4916685e0"
  },
  {
    "url": "assets/js/11.68775b61.js",
    "revision": "c9491ae368dd59cc8d519e5d52c4b336"
  },
  {
    "url": "assets/js/110.83c538cf.js",
    "revision": "f61f727cbc5878967540aaba38c1dcbf"
  },
  {
    "url": "assets/js/111.03521d70.js",
    "revision": "d3597153af3b46bf616fdecb9caa4572"
  },
  {
    "url": "assets/js/112.250829a7.js",
    "revision": "f6863c1caa1d958f0c1d0960ae1ac753"
  },
  {
    "url": "assets/js/113.5e79a888.js",
    "revision": "dbf79756de75a48e416d294cb195e3a5"
  },
  {
    "url": "assets/js/114.57fd4380.js",
    "revision": "ef88075c881bc8d6ea163f5bc090cf7d"
  },
  {
    "url": "assets/js/115.c893880d.js",
    "revision": "04fffbe318144ec867a45ddd6762ee90"
  },
  {
    "url": "assets/js/116.0e06cc3d.js",
    "revision": "66231fbe901007976d8dab0e4e86992a"
  },
  {
    "url": "assets/js/117.2165f0e0.js",
    "revision": "2a13a9e68b10de172708e331b905c996"
  },
  {
    "url": "assets/js/118.ea7c78b4.js",
    "revision": "e4991785cb7d8d848cec782e0567eb0a"
  },
  {
    "url": "assets/js/119.a6279c5f.js",
    "revision": "5a0a447030cde341adfc900ba77ef99b"
  },
  {
    "url": "assets/js/12.a3532e99.js",
    "revision": "f1cb9aaff7719222b3c1570b026157b4"
  },
  {
    "url": "assets/js/120.305b771f.js",
    "revision": "43458d32559bb3b8287b69e9f5361521"
  },
  {
    "url": "assets/js/121.319270c5.js",
    "revision": "16c5005b228d5aad93ded284ea72328d"
  },
  {
    "url": "assets/js/122.ed38a709.js",
    "revision": "84dff74e674e8f95c6b9d60bfb8dce0e"
  },
  {
    "url": "assets/js/123.d3d7744e.js",
    "revision": "3078d8eadad337d9e1d94a42dcda0ef6"
  },
  {
    "url": "assets/js/124.840693ba.js",
    "revision": "44581ae3b2585f9e03d90a46e5be3fb6"
  },
  {
    "url": "assets/js/125.46c9b57c.js",
    "revision": "135053f0f46d269c3870c7cd377550f6"
  },
  {
    "url": "assets/js/126.881ccadb.js",
    "revision": "3c82fcb1ac0a7c8c8a93986edf1e30df"
  },
  {
    "url": "assets/js/127.2fb2b7e7.js",
    "revision": "cb8a3f68bae157b32927ab087acc27f9"
  },
  {
    "url": "assets/js/128.36c23192.js",
    "revision": "8d48f218c6f95ff44e3ff93dcdfbcb03"
  },
  {
    "url": "assets/js/129.e7aae9f3.js",
    "revision": "135a57d8518e2749347031f7b7438f75"
  },
  {
    "url": "assets/js/13.b65f2bfc.js",
    "revision": "0c218475e491235d879a0e29ed8fe740"
  },
  {
    "url": "assets/js/130.14bb98d3.js",
    "revision": "070712ce7037f8053488185c827a0bdb"
  },
  {
    "url": "assets/js/131.5daff25d.js",
    "revision": "4d822253e58ebb7ecea392017b7af861"
  },
  {
    "url": "assets/js/132.80aa27fa.js",
    "revision": "24f16afd678f3942a80b75499b3a6f2a"
  },
  {
    "url": "assets/js/133.c2438e25.js",
    "revision": "9b5148b0c9c3717e161b86f6bcd4a127"
  },
  {
    "url": "assets/js/134.c3945470.js",
    "revision": "d416daea447d16cdf628c812b761f697"
  },
  {
    "url": "assets/js/135.4724289c.js",
    "revision": "ff09fce9655a3f5d04c59435992a3f72"
  },
  {
    "url": "assets/js/136.38379a04.js",
    "revision": "e0d93ea9b631a9ecb61ec24948904588"
  },
  {
    "url": "assets/js/137.e0b9d982.js",
    "revision": "01139ca60e067377f393d18ac4a9c96e"
  },
  {
    "url": "assets/js/138.d394bac3.js",
    "revision": "e02acbbeb18b5f3d6b4ee75312e38c09"
  },
  {
    "url": "assets/js/139.95b27498.js",
    "revision": "8f1d3e52b45ce21bb5d1889850554853"
  },
  {
    "url": "assets/js/14.c49cdaed.js",
    "revision": "adb57044e8d8ef58a408d2552bcc8f39"
  },
  {
    "url": "assets/js/140.0f7ac38c.js",
    "revision": "1e1e1356af5e987038298a5e6524ea21"
  },
  {
    "url": "assets/js/141.5c6eeec6.js",
    "revision": "43c86e937a5ae6aa53f8b2b70869a92b"
  },
  {
    "url": "assets/js/142.01f91895.js",
    "revision": "b1169c9918aaf8fcc86d3d3ace91c904"
  },
  {
    "url": "assets/js/143.9202c792.js",
    "revision": "63da1845905a51ab6ea99dd15d15e42f"
  },
  {
    "url": "assets/js/144.b24b4b12.js",
    "revision": "bc83a1b27adf455e4ef2b334d73edcf9"
  },
  {
    "url": "assets/js/145.6327179a.js",
    "revision": "a55d22a49c5d65fb183857d389e50a6e"
  },
  {
    "url": "assets/js/146.3e94e596.js",
    "revision": "8f08d1366dab49f0c4ecc87a37c69555"
  },
  {
    "url": "assets/js/147.47ba5286.js",
    "revision": "ee751f7473bb2889d7cf43b3336e97df"
  },
  {
    "url": "assets/js/148.a296065c.js",
    "revision": "85c0c23bca40e89070d1a08386b222c3"
  },
  {
    "url": "assets/js/149.2bc7b7a5.js",
    "revision": "7938a6699965ad132c0979bfd60e894e"
  },
  {
    "url": "assets/js/15.a1dc633d.js",
    "revision": "7e22aa1cf63217c45182c7865dc4139e"
  },
  {
    "url": "assets/js/150.60a4c71f.js",
    "revision": "70406a53d27c4b04a9f58bf0fdad5a31"
  },
  {
    "url": "assets/js/151.d4dae820.js",
    "revision": "29add8048bcb7b9a91e4599f71318f2e"
  },
  {
    "url": "assets/js/152.852c28cb.js",
    "revision": "f466b3eb153c99d7d1775386f0f1086f"
  },
  {
    "url": "assets/js/153.8579e478.js",
    "revision": "ce3b0b36548e8f717961fc475cb4c52e"
  },
  {
    "url": "assets/js/154.5b6bda69.js",
    "revision": "87bdbc05a6b51e27ff74f69840238c25"
  },
  {
    "url": "assets/js/155.25b99d7f.js",
    "revision": "213263ce27c5634b0e49138b7ce78bed"
  },
  {
    "url": "assets/js/156.f822be1a.js",
    "revision": "ea5578b4196254e10be31323124b66f4"
  },
  {
    "url": "assets/js/157.fd2246fe.js",
    "revision": "6c6aa6bb92ec73cd68b914288978fce7"
  },
  {
    "url": "assets/js/158.53d5bb34.js",
    "revision": "f47d61e9768047f4de3f0c9e6369aae0"
  },
  {
    "url": "assets/js/159.ff2e8333.js",
    "revision": "61413d8082535a708fad674a93c9fb25"
  },
  {
    "url": "assets/js/16.8386f5c3.js",
    "revision": "adf10bc4a8ecd48e2400814ba0a01f02"
  },
  {
    "url": "assets/js/160.95c71d2d.js",
    "revision": "c87dc4274cb7f82021dbef8b5036cb7e"
  },
  {
    "url": "assets/js/161.7cf5bcc2.js",
    "revision": "5e021ab8f6903e22ed6ee5729cbbc922"
  },
  {
    "url": "assets/js/162.187f8ccb.js",
    "revision": "a3308bf253d8c28d4951d4b4745f63c4"
  },
  {
    "url": "assets/js/163.508acf56.js",
    "revision": "dcba82f6ccf5ef25554b5cdf296c3d24"
  },
  {
    "url": "assets/js/164.28b922d7.js",
    "revision": "d233b77d55ab510b026961e804c317ef"
  },
  {
    "url": "assets/js/165.1eac3f38.js",
    "revision": "569be49820fd70635d14ac5667b6fe16"
  },
  {
    "url": "assets/js/166.bb0b4fb2.js",
    "revision": "e435672b9f302ea0af0f2887163b061f"
  },
  {
    "url": "assets/js/167.66fe0085.js",
    "revision": "cb93e54953b9a7746a051d52bd19daaa"
  },
  {
    "url": "assets/js/168.ce4ac4bc.js",
    "revision": "c5668f3d95b56e27dccac2059785bb68"
  },
  {
    "url": "assets/js/169.caa7308d.js",
    "revision": "8283a9bb01c7ae19a9d0dfbd73c6416c"
  },
  {
    "url": "assets/js/17.a8f39217.js",
    "revision": "618c1d0d0fc99614cca4ddf1a88745cc"
  },
  {
    "url": "assets/js/170.317a17ed.js",
    "revision": "c842829259db05e8bd579615d6aa56d1"
  },
  {
    "url": "assets/js/171.2fc8bbbe.js",
    "revision": "ff2cbdc7fb54b2921c8ee540925c9944"
  },
  {
    "url": "assets/js/172.043502d0.js",
    "revision": "b7e779c596701aaf26b629e7c44e0fa7"
  },
  {
    "url": "assets/js/173.38bb47bd.js",
    "revision": "5d1921346712a2375210924a9fde7fa6"
  },
  {
    "url": "assets/js/174.4d2268dc.js",
    "revision": "129c021d5eba249912f8464acd91b66e"
  },
  {
    "url": "assets/js/175.cfd646a2.js",
    "revision": "2757e5121a670a5e9a152448be19d255"
  },
  {
    "url": "assets/js/176.c9fa78e9.js",
    "revision": "54639507b2b2a5675d813e8ed56f3bfe"
  },
  {
    "url": "assets/js/177.3d47b1f3.js",
    "revision": "87b63088f239702564e1662143823b1d"
  },
  {
    "url": "assets/js/178.7137ac1c.js",
    "revision": "f57a5ad697c1a5eaa3f5158ee174c714"
  },
  {
    "url": "assets/js/179.c75fa7b1.js",
    "revision": "df371b86f802fb6941dd1fc03ab5b1e5"
  },
  {
    "url": "assets/js/18.fc488d81.js",
    "revision": "f363f1645d9264493d76c113e31e52d8"
  },
  {
    "url": "assets/js/180.c7dfac8c.js",
    "revision": "fdb3159bf8de617480320854672cbed6"
  },
  {
    "url": "assets/js/181.2d9ad719.js",
    "revision": "c83b83fbe0f8ee340f414257adb0ce66"
  },
  {
    "url": "assets/js/182.d8f01917.js",
    "revision": "129922aa446770cf786719abe206e81a"
  },
  {
    "url": "assets/js/183.988ff7d0.js",
    "revision": "f81dab0bcf1cdc4f6792f8565d509849"
  },
  {
    "url": "assets/js/184.89dcdd59.js",
    "revision": "9ec2695a4df35f01c4a3a2975fd721b9"
  },
  {
    "url": "assets/js/185.9a9cda5f.js",
    "revision": "e1fff3169448e6472c53463a8f44f56a"
  },
  {
    "url": "assets/js/186.3903587b.js",
    "revision": "a28394e07c4b5b7595d38f879a9f76d8"
  },
  {
    "url": "assets/js/187.508fffa8.js",
    "revision": "3b0f0a745416ccc67305ffef497e898b"
  },
  {
    "url": "assets/js/188.9f3f9da7.js",
    "revision": "255e2bc9176d2b10470469fd86b2c1c5"
  },
  {
    "url": "assets/js/189.739dba62.js",
    "revision": "b63527563ce864e748f20fdeaee73b70"
  },
  {
    "url": "assets/js/19.8a639b7d.js",
    "revision": "f2b5827dfad04099a57c331fa625c61a"
  },
  {
    "url": "assets/js/190.ee1c4732.js",
    "revision": "d1000fabc425fcdaef97eb61644e863b"
  },
  {
    "url": "assets/js/191.7fa90d84.js",
    "revision": "112a2389a32b8484eac04c81885df140"
  },
  {
    "url": "assets/js/192.a67d99f2.js",
    "revision": "eeabf876b8c9b206d4164aa6c5fe9b35"
  },
  {
    "url": "assets/js/193.7a2f7372.js",
    "revision": "81f915ab904c33aaef727c5bbc98e231"
  },
  {
    "url": "assets/js/194.1d39ea2e.js",
    "revision": "76de1b9b397fd6178af86d73a62a1941"
  },
  {
    "url": "assets/js/195.6f0592e2.js",
    "revision": "e43c8a7ee091836e79b0a839688a742b"
  },
  {
    "url": "assets/js/196.c147bc9c.js",
    "revision": "1049bfe3f5f7c97ca6cf92feec7532f5"
  },
  {
    "url": "assets/js/197.1e8a4c81.js",
    "revision": "285711685547fad32a34d790cb9abbef"
  },
  {
    "url": "assets/js/198.1eced8cb.js",
    "revision": "06b3c3cb856b979d9c382547c4721f69"
  },
  {
    "url": "assets/js/199.16822314.js",
    "revision": "c6baabd9e0869a5a2550dd55fec08402"
  },
  {
    "url": "assets/js/2.89be0282.js",
    "revision": "8736e447e9090029a3994535607338cd"
  },
  {
    "url": "assets/js/20.8e1bbc7a.js",
    "revision": "aae22d8ca4806c72f162c830545da5e2"
  },
  {
    "url": "assets/js/200.108eea4e.js",
    "revision": "39d956a613379efb763bc3c806a4dc3a"
  },
  {
    "url": "assets/js/201.525722b8.js",
    "revision": "e2234f86e4d3f26d5af013abd526250d"
  },
  {
    "url": "assets/js/202.910d1437.js",
    "revision": "fb377ef10014feba4391b04b04dd8c8e"
  },
  {
    "url": "assets/js/203.3829ea7e.js",
    "revision": "a74de1cbe57d5d33aa21651738ab748f"
  },
  {
    "url": "assets/js/204.53123025.js",
    "revision": "1a74fd59351ab59edd695ee6d511992e"
  },
  {
    "url": "assets/js/205.2094f51b.js",
    "revision": "c4c6b169495e13bb3e966fdbd01b4a66"
  },
  {
    "url": "assets/js/206.1aab36f1.js",
    "revision": "0ce9405407e4cc5a535d411cc969888e"
  },
  {
    "url": "assets/js/207.aa807317.js",
    "revision": "69a87b2b40f2758ce4b00a9cfc4c7144"
  },
  {
    "url": "assets/js/208.c5d1f5b3.js",
    "revision": "1f3a980415b83b86ffec3311fb41d40e"
  },
  {
    "url": "assets/js/209.fc393b82.js",
    "revision": "87aad66970ae9e3c32373d2be93c7008"
  },
  {
    "url": "assets/js/21.5bcda49d.js",
    "revision": "1995291d65ca07bd4def30d8379a330d"
  },
  {
    "url": "assets/js/210.27bd432c.js",
    "revision": "96f1653a8e226558210bfe824fb0d536"
  },
  {
    "url": "assets/js/211.191f0835.js",
    "revision": "74db90bdff36ffa690d8101d604606ec"
  },
  {
    "url": "assets/js/212.1579b335.js",
    "revision": "519b7ef9912ad02277770906778879a4"
  },
  {
    "url": "assets/js/213.fcf35c86.js",
    "revision": "0e7695c3506adb05a3ea80be80030961"
  },
  {
    "url": "assets/js/214.c560f8d9.js",
    "revision": "53d2ef04cbaae0af58675bb5a5f524c1"
  },
  {
    "url": "assets/js/215.c8374c63.js",
    "revision": "bfef3e454ad61b1a8e901e3e97cb2437"
  },
  {
    "url": "assets/js/216.0ffc5a7c.js",
    "revision": "22fff246155c28f0e5883635b5a079da"
  },
  {
    "url": "assets/js/217.b52120c0.js",
    "revision": "7f451e93b0ff4881d3232c3af86a8cf7"
  },
  {
    "url": "assets/js/218.33fced9d.js",
    "revision": "f32a874ecd6f18700689e43dbd44ccff"
  },
  {
    "url": "assets/js/219.dba60e6b.js",
    "revision": "b735c240ec6b057dd806a88e6f0cbead"
  },
  {
    "url": "assets/js/22.10691da6.js",
    "revision": "6322a9c48549bafb5561832ef7785d00"
  },
  {
    "url": "assets/js/220.f888f8ef.js",
    "revision": "24d45ecf77cf44da34d0ed4d693bfd1f"
  },
  {
    "url": "assets/js/221.ffcfaeed.js",
    "revision": "9c8910cab7623762bc811170753e5807"
  },
  {
    "url": "assets/js/222.544adbec.js",
    "revision": "3c22f88066964cade23246818317fa17"
  },
  {
    "url": "assets/js/223.aea58104.js",
    "revision": "f971323bbcf4ffb734dfa8cf69bdeb92"
  },
  {
    "url": "assets/js/224.33971dbf.js",
    "revision": "d68377c6f021221a7455c4f28e11193c"
  },
  {
    "url": "assets/js/225.7aad3652.js",
    "revision": "4d2dd8717371facfb78f4a7de17e0d02"
  },
  {
    "url": "assets/js/226.1cd291e0.js",
    "revision": "06ba4336f7d59b0f1e11bfea880781b5"
  },
  {
    "url": "assets/js/227.3bc651ea.js",
    "revision": "4986f0f4ef31133f7f89c4f5fa813d22"
  },
  {
    "url": "assets/js/228.f3597cb5.js",
    "revision": "aa6630b83cb85603d850932b816f1aa2"
  },
  {
    "url": "assets/js/229.6430975e.js",
    "revision": "e82efc45cd97e5e1f37c9e724754ba52"
  },
  {
    "url": "assets/js/23.64a091e2.js",
    "revision": "34bfa1a0ae10be61ea9d4da3e39a4a81"
  },
  {
    "url": "assets/js/230.2e0e2ff5.js",
    "revision": "e652c86264dd13982c034c632fc9b799"
  },
  {
    "url": "assets/js/231.255d8b5a.js",
    "revision": "a0aaec6758d66f1a095270b1bca158ed"
  },
  {
    "url": "assets/js/232.667db32e.js",
    "revision": "8d4093fed02e9facd9af6724555629d9"
  },
  {
    "url": "assets/js/233.20a87b94.js",
    "revision": "d32cc629640a8c82a00c4cb5c2b8aec1"
  },
  {
    "url": "assets/js/234.50cbac83.js",
    "revision": "182c3a29702c77827baf93c94cfcdf41"
  },
  {
    "url": "assets/js/235.97131bb3.js",
    "revision": "226de2cbd0ad6bf88c8dc27fefba40ae"
  },
  {
    "url": "assets/js/236.3b155509.js",
    "revision": "817a16752fde5f25560eb2643bba9e8e"
  },
  {
    "url": "assets/js/237.3535d4f5.js",
    "revision": "111e97b2dddfc315862666e6c8e50f3f"
  },
  {
    "url": "assets/js/238.01a7efe3.js",
    "revision": "f40776b8d320d13645f3139eb7d18af5"
  },
  {
    "url": "assets/js/239.3be4c310.js",
    "revision": "4f2d180b0bebd0de3d3010a9f2ae0ff0"
  },
  {
    "url": "assets/js/24.6d660109.js",
    "revision": "243639c605be8cd02b1be5d1933f23fc"
  },
  {
    "url": "assets/js/240.fdceb880.js",
    "revision": "7f256ae3fe2e22a64b8a18a8682aa282"
  },
  {
    "url": "assets/js/241.bd7e79d4.js",
    "revision": "acccf4ef62a7786e652638763b79c9a6"
  },
  {
    "url": "assets/js/242.90c377ab.js",
    "revision": "d436e9305443dcfde196baa1d8e371ad"
  },
  {
    "url": "assets/js/243.7c12274f.js",
    "revision": "983cbf7c6f19690adab87b3e4b6a6afd"
  },
  {
    "url": "assets/js/244.382101ef.js",
    "revision": "fc2f530aa3eeff768f26ffe520dd3fd0"
  },
  {
    "url": "assets/js/245.b2aee984.js",
    "revision": "6182ca5739adccb20836ce3032f51bb4"
  },
  {
    "url": "assets/js/246.7df18c58.js",
    "revision": "fad27a3a872aa669a0234f306c42d27a"
  },
  {
    "url": "assets/js/247.69e8c3eb.js",
    "revision": "8c8e9f84fb4127bf73df1ec5532e3753"
  },
  {
    "url": "assets/js/248.c2d646d6.js",
    "revision": "9846cf11efdb0920246742d0066eeb2e"
  },
  {
    "url": "assets/js/249.e95b1e4e.js",
    "revision": "c11ccde974d7c0d3ef939fcab0cfe929"
  },
  {
    "url": "assets/js/25.75bbc50c.js",
    "revision": "2097997bd8fdcc3384295aafa896be13"
  },
  {
    "url": "assets/js/250.520c7b34.js",
    "revision": "f804a0db95a23e663a8edcff4e978d14"
  },
  {
    "url": "assets/js/251.6fa99f22.js",
    "revision": "c01e526b58a60bc83ec771059d42bd33"
  },
  {
    "url": "assets/js/252.2f55c52a.js",
    "revision": "83bca0c9dc729c3c794787907d8708ee"
  },
  {
    "url": "assets/js/253.03f167c7.js",
    "revision": "ffd79767f3375d66297b5ea281ecefe6"
  },
  {
    "url": "assets/js/254.e906f0f2.js",
    "revision": "93753aea1272243a7af694d57f37de8b"
  },
  {
    "url": "assets/js/255.b0a12eca.js",
    "revision": "d49c904f6d19467c615e539ec7441946"
  },
  {
    "url": "assets/js/256.2786bd9c.js",
    "revision": "d822bb57bac2678eda2cfcc845ae479b"
  },
  {
    "url": "assets/js/257.0a7dd020.js",
    "revision": "18a12a640cb4278418aee75721483285"
  },
  {
    "url": "assets/js/258.7249cb9c.js",
    "revision": "745ec4b2a59d60edd92d7e141adb39ee"
  },
  {
    "url": "assets/js/259.c55bfd89.js",
    "revision": "6cc094290a526b9841cf53fc819619cc"
  },
  {
    "url": "assets/js/26.e80cabf5.js",
    "revision": "6d7348e25202da5d0564841e0458c300"
  },
  {
    "url": "assets/js/260.4094b223.js",
    "revision": "e3ec97d5e5adae0c939f865e2a306102"
  },
  {
    "url": "assets/js/261.3805f1f3.js",
    "revision": "0b1c1078bb85962c5b0ba9d132da2cde"
  },
  {
    "url": "assets/js/262.285d263f.js",
    "revision": "47269ddd2f679aedee99e36135fb4bb1"
  },
  {
    "url": "assets/js/263.4f3dbc19.js",
    "revision": "f208008c0ff44c458ef453e1fc04ac25"
  },
  {
    "url": "assets/js/264.4ed6f33e.js",
    "revision": "8bed46c17226779ad50119c58a49af40"
  },
  {
    "url": "assets/js/265.8a142cff.js",
    "revision": "e825c7e8b346a0af41eccd91f8a41351"
  },
  {
    "url": "assets/js/266.ed59f615.js",
    "revision": "1b9060e518cd7e454ba882267a020e8d"
  },
  {
    "url": "assets/js/267.3bb2f4be.js",
    "revision": "144e2b2046c0fada9ff5f12eebb2c3f7"
  },
  {
    "url": "assets/js/268.6904a7c7.js",
    "revision": "939e049aefe28d108f5370c671742d90"
  },
  {
    "url": "assets/js/269.94af382b.js",
    "revision": "ea3caeec14d9663f24f4346f5b088348"
  },
  {
    "url": "assets/js/27.d0271f0f.js",
    "revision": "558741dd096b9ef5351a3ce1b2dcfbf6"
  },
  {
    "url": "assets/js/270.7270b8d9.js",
    "revision": "2e899ea39e40a687cf0f61453007ea1a"
  },
  {
    "url": "assets/js/271.08cbaaed.js",
    "revision": "b6b38c879ebfecdfa6141bb87d0d3af5"
  },
  {
    "url": "assets/js/272.ab70fa3d.js",
    "revision": "27e7429936766acb3519b9edb2cf8f1c"
  },
  {
    "url": "assets/js/273.4ac17838.js",
    "revision": "d77a12e9e888736c9d86a59259b7f515"
  },
  {
    "url": "assets/js/274.0e3395a2.js",
    "revision": "a14c1f3a2b5809c719227db08c34ed78"
  },
  {
    "url": "assets/js/275.b3fd1ceb.js",
    "revision": "801368772a1f884ae90ecbdb336d4cdb"
  },
  {
    "url": "assets/js/276.132b04fc.js",
    "revision": "b745f00580c7ad449b960ad9b51bcfed"
  },
  {
    "url": "assets/js/277.efd078a6.js",
    "revision": "bae95f29b33a02601e906aa9314fc4d9"
  },
  {
    "url": "assets/js/278.33f1318c.js",
    "revision": "9ca7cd797010cf6eaa657c614aa77c8c"
  },
  {
    "url": "assets/js/279.45e6fef4.js",
    "revision": "fb987e0b981e2f0e2f7ae8c6425555ad"
  },
  {
    "url": "assets/js/28.dff6c98e.js",
    "revision": "ab7a4d8d8805118f76d058674ec9258e"
  },
  {
    "url": "assets/js/280.c7459f22.js",
    "revision": "9823829bcb8e2c523f4089256a2b4876"
  },
  {
    "url": "assets/js/281.0aa8e2c5.js",
    "revision": "4446f44330c48491b0c8c6bd46403dd0"
  },
  {
    "url": "assets/js/282.ca55e2c1.js",
    "revision": "9ecc1a79b9833ee7882882b2a39c623c"
  },
  {
    "url": "assets/js/283.59ae8102.js",
    "revision": "a2bc735c7b50b47f1435e1d464941c57"
  },
  {
    "url": "assets/js/284.84062599.js",
    "revision": "685138136d3366b977c7c364355a0ea5"
  },
  {
    "url": "assets/js/285.6509c93a.js",
    "revision": "166a58976b843fc7518702681065b10d"
  },
  {
    "url": "assets/js/286.6294e428.js",
    "revision": "13ff7b1be19752fb0f323579a61d4f22"
  },
  {
    "url": "assets/js/287.81ffbe96.js",
    "revision": "494551d5aced78c80b391a94da95581a"
  },
  {
    "url": "assets/js/288.0f64456a.js",
    "revision": "7da27cc39df020da75b81821d7f7e645"
  },
  {
    "url": "assets/js/289.4ccc53dc.js",
    "revision": "8bd72981176ec455a1c3d966a3b8df05"
  },
  {
    "url": "assets/js/29.0102289e.js",
    "revision": "193dd37616e78a81b7db037ff0799550"
  },
  {
    "url": "assets/js/290.f0e9f4d5.js",
    "revision": "621ebf843242deb8f20a02b4f4b47e1b"
  },
  {
    "url": "assets/js/291.041bebb7.js",
    "revision": "e9c8912b5d6ab2eb39cb14c12261e692"
  },
  {
    "url": "assets/js/292.6b9322c3.js",
    "revision": "f19f66ff0fdec7ae295635f5f145cc08"
  },
  {
    "url": "assets/js/293.19ea56b0.js",
    "revision": "62c36c9506850a1d4a57a95ec9a5d6f2"
  },
  {
    "url": "assets/js/294.035805d9.js",
    "revision": "f8bdc2c409110a2b31311392cea5287b"
  },
  {
    "url": "assets/js/295.86e2dcb7.js",
    "revision": "bcc1996b706941a8fc431a2fa9e61284"
  },
  {
    "url": "assets/js/296.d5ef60a4.js",
    "revision": "936af4b3928d9eee256afda6562be6ec"
  },
  {
    "url": "assets/js/297.b43a8b5d.js",
    "revision": "720279497cae1ba25bc0ea175ad4c551"
  },
  {
    "url": "assets/js/298.350e7fd8.js",
    "revision": "9f80911c3041f0a39a7efa7d0824b2de"
  },
  {
    "url": "assets/js/299.16c7642a.js",
    "revision": "974a366b011642571d69413af783ec0a"
  },
  {
    "url": "assets/js/3.d05a8c16.js",
    "revision": "44d8b2bebe9ce25008382602062861de"
  },
  {
    "url": "assets/js/30.83c87f89.js",
    "revision": "52ee794107207e4a653047063b6113db"
  },
  {
    "url": "assets/js/300.66c69f56.js",
    "revision": "1e11f7c4056737b44bb1132455082fda"
  },
  {
    "url": "assets/js/301.b64c9757.js",
    "revision": "067818058ca376230ca440274d667f43"
  },
  {
    "url": "assets/js/302.9f1b530c.js",
    "revision": "3ccc715da3c2ff76d30b1f04b3377b67"
  },
  {
    "url": "assets/js/303.66380249.js",
    "revision": "7598118c39f837bad599f24370d2c3a9"
  },
  {
    "url": "assets/js/304.476a5412.js",
    "revision": "58d48450398812bfbb9fb7b2f389edbe"
  },
  {
    "url": "assets/js/305.c998be5f.js",
    "revision": "1e6069bcf7f5b76a4421d3d66c2a6b3b"
  },
  {
    "url": "assets/js/306.6b895bf9.js",
    "revision": "e3a9ed19d420fd9165561c8a113b3e47"
  },
  {
    "url": "assets/js/307.47acf023.js",
    "revision": "a5ae07fa71b23fc7fa5c332898bb8c09"
  },
  {
    "url": "assets/js/308.f2fe67f0.js",
    "revision": "52a8d6a209bd853d5710abc4ffbe99c9"
  },
  {
    "url": "assets/js/309.fb190429.js",
    "revision": "df10f94f9e19ec53dee51a0240104e32"
  },
  {
    "url": "assets/js/31.8297a209.js",
    "revision": "2e79d3f24ae6a58b74a3249f732f27ce"
  },
  {
    "url": "assets/js/310.35c687ed.js",
    "revision": "6557d8a5e93b15c986ebdc060f8d7032"
  },
  {
    "url": "assets/js/311.167d1dab.js",
    "revision": "912557b6f605fbdfa9a4e8ee8767e83d"
  },
  {
    "url": "assets/js/312.3669e581.js",
    "revision": "c4c264454613ce2f2190894e40097475"
  },
  {
    "url": "assets/js/313.ce35dbcf.js",
    "revision": "e5a919bb325c89504bc45e935f273693"
  },
  {
    "url": "assets/js/314.f58ad94d.js",
    "revision": "0fb4e4f3e7cbb0ffad6465f7e741144e"
  },
  {
    "url": "assets/js/315.99468119.js",
    "revision": "03f2d85834762efdf7c70a08cc15551d"
  },
  {
    "url": "assets/js/316.f231393b.js",
    "revision": "6077a64f49ea3b1ff2845a2ab72af197"
  },
  {
    "url": "assets/js/317.0c386904.js",
    "revision": "f0ffe53a56be646cc413e860a811de7c"
  },
  {
    "url": "assets/js/318.72b8a753.js",
    "revision": "51ee70146fbca95e1abe7be7b8348e70"
  },
  {
    "url": "assets/js/319.ea4bf78c.js",
    "revision": "45bb0e85e28b6a98c957d669c1bf86c8"
  },
  {
    "url": "assets/js/32.723d8b5d.js",
    "revision": "5c89a3070259fb4ef674c58f68c37981"
  },
  {
    "url": "assets/js/320.0369104f.js",
    "revision": "458352e7b5ba2b6a929ea35cce15dbd1"
  },
  {
    "url": "assets/js/321.b4d913e1.js",
    "revision": "28f996734104c8f2b4d66b02308a7523"
  },
  {
    "url": "assets/js/322.fdef56df.js",
    "revision": "18bac1b6ccb6712edcb38e89730a8088"
  },
  {
    "url": "assets/js/323.16169eb1.js",
    "revision": "0f4f56fd8f7151fcab62a6faf2e2d97d"
  },
  {
    "url": "assets/js/324.6eb2df1c.js",
    "revision": "c6b397392b981f5e81253d1636d1b391"
  },
  {
    "url": "assets/js/325.deec519b.js",
    "revision": "61467370a03fea18d4d2a789b008bf93"
  },
  {
    "url": "assets/js/326.f75bfad8.js",
    "revision": "8a8a31750b70295f5aff263aac2be637"
  },
  {
    "url": "assets/js/327.6c1a8b22.js",
    "revision": "c39380f00cb5c28b1fdf3a7109a1990e"
  },
  {
    "url": "assets/js/328.f31fa395.js",
    "revision": "32c6e5c87b68045412ca4a549431d4e2"
  },
  {
    "url": "assets/js/329.1baa0ffc.js",
    "revision": "6f4f2cc5a3e7bf936569c5379520be9f"
  },
  {
    "url": "assets/js/33.b0ed4fac.js",
    "revision": "b4398b741b3cf7f809a04f2aa4d9ad74"
  },
  {
    "url": "assets/js/330.095ccddd.js",
    "revision": "c48cebb0366172a544ca3b52679416a6"
  },
  {
    "url": "assets/js/331.fe7b1c0a.js",
    "revision": "8f5993b6c416cf303dbc1b83a17829ee"
  },
  {
    "url": "assets/js/332.b9056c00.js",
    "revision": "4a573efd2610a080070b75e030628abf"
  },
  {
    "url": "assets/js/333.3643ed93.js",
    "revision": "77ef05710c01d40422fe1671fb30d646"
  },
  {
    "url": "assets/js/334.cff1afe4.js",
    "revision": "9afcf824982cd7119ffa425ea9eeb14b"
  },
  {
    "url": "assets/js/335.064a4084.js",
    "revision": "cf56e1354e11f3afa95813fdd702bb7e"
  },
  {
    "url": "assets/js/336.985ef256.js",
    "revision": "e96adcee7398ea137c80c217c978cdc2"
  },
  {
    "url": "assets/js/337.a9f4ffad.js",
    "revision": "351ada39a32441799138da2ca8d84da5"
  },
  {
    "url": "assets/js/338.e0f6b4d9.js",
    "revision": "2055cfc66fa48ceddef19f571a672da4"
  },
  {
    "url": "assets/js/339.a858563a.js",
    "revision": "420dd7fb21bb64b3f80765824b1edb2b"
  },
  {
    "url": "assets/js/34.75dfd44b.js",
    "revision": "0e7ea64e2ebba1a5216f0f66f79e1128"
  },
  {
    "url": "assets/js/340.0f4cb18f.js",
    "revision": "0b2c953be0c08c4d0b019ba1ff88d55c"
  },
  {
    "url": "assets/js/341.c3f33e8b.js",
    "revision": "76eec6e9ae4a11030a8a045b01b09e8b"
  },
  {
    "url": "assets/js/342.95f4f75b.js",
    "revision": "f0adad145994b81df972d9d4cd3f7f20"
  },
  {
    "url": "assets/js/343.f2b6c9d0.js",
    "revision": "0130e61515a7cf58fc24aaeccfdc2616"
  },
  {
    "url": "assets/js/344.e8afd0f5.js",
    "revision": "c34c862c2269e854f47e205432bf2d08"
  },
  {
    "url": "assets/js/345.9aeff3c0.js",
    "revision": "1be2ecfe1bf904a6f36f0e6872d758f4"
  },
  {
    "url": "assets/js/346.846932f7.js",
    "revision": "1ce7a06d70f2b1dcb7eb6bdc1b875b4b"
  },
  {
    "url": "assets/js/347.dc6c9695.js",
    "revision": "dfd859ec0288164731ef452fa0dcc7f7"
  },
  {
    "url": "assets/js/348.070de384.js",
    "revision": "134e67a589d741604494792f4f42ea43"
  },
  {
    "url": "assets/js/349.e88d1dde.js",
    "revision": "8233634192c5c66b69f14c678b93938c"
  },
  {
    "url": "assets/js/35.7c9d5fe3.js",
    "revision": "b3d10b8dee057c01ae23b9855a719d63"
  },
  {
    "url": "assets/js/350.0fd9f379.js",
    "revision": "e0ccf19f9f403c71632ea19349d45b34"
  },
  {
    "url": "assets/js/351.99a966fb.js",
    "revision": "679b3be5043a11aceaf8545c9d14d5b9"
  },
  {
    "url": "assets/js/352.3919747c.js",
    "revision": "4e237628ce9ed08a8c0aeb2f33cd766e"
  },
  {
    "url": "assets/js/353.7a8af499.js",
    "revision": "3c314f8d2206b1dec15f2e7d6091c3ba"
  },
  {
    "url": "assets/js/354.78d2f9f6.js",
    "revision": "d0f3a112ca070b0694eb00de2214ae76"
  },
  {
    "url": "assets/js/355.e3efe880.js",
    "revision": "ce866b1f28565cec652594575fa11a26"
  },
  {
    "url": "assets/js/356.72a33374.js",
    "revision": "62bafa0f6ebaec73222b3007630b1281"
  },
  {
    "url": "assets/js/357.e9107863.js",
    "revision": "e5ba3bbb6450ff3b1f2073df2de1cf33"
  },
  {
    "url": "assets/js/358.1d1e685c.js",
    "revision": "e4d854d05d7d4fe9e7460b766353ae50"
  },
  {
    "url": "assets/js/359.b56da52e.js",
    "revision": "6a67480f852ba59c738f2f74ced335a5"
  },
  {
    "url": "assets/js/36.81bbb74a.js",
    "revision": "46de3d18accfd487691117835099fb2a"
  },
  {
    "url": "assets/js/360.c04e52a6.js",
    "revision": "4fe0a26f17554783fa40fbfbf2ad052b"
  },
  {
    "url": "assets/js/361.0d937df7.js",
    "revision": "6069e55b2bb7f7dcef9d4a774a6a1f9d"
  },
  {
    "url": "assets/js/362.e4590dbb.js",
    "revision": "5290ca80e10fd522933834bfb9d203ab"
  },
  {
    "url": "assets/js/363.eba1e2c3.js",
    "revision": "4c1ff1a8421e515d335447304bc9470e"
  },
  {
    "url": "assets/js/364.1cd119c8.js",
    "revision": "128fe62c11d855ac570140634936cdb5"
  },
  {
    "url": "assets/js/365.08b7c655.js",
    "revision": "86f49ad80cae0107907c09fbe1fd72fa"
  },
  {
    "url": "assets/js/366.8533daa8.js",
    "revision": "1893b4cb4f878fc45f7dc84707ed8a7d"
  },
  {
    "url": "assets/js/367.122c9cb3.js",
    "revision": "6400e7aba43097df9869a4591aa8e1d3"
  },
  {
    "url": "assets/js/368.f0624fdb.js",
    "revision": "a9daaa1139d8aa6e5dce9f3da0a80033"
  },
  {
    "url": "assets/js/369.2615f4df.js",
    "revision": "47ed5702249dbf73a1242e6d98bc692c"
  },
  {
    "url": "assets/js/37.ef07cade.js",
    "revision": "a348ee287f3a5d41c439bdbd96cf38de"
  },
  {
    "url": "assets/js/370.1df22304.js",
    "revision": "70721ea20197314e17b96263de16c6aa"
  },
  {
    "url": "assets/js/371.558aa242.js",
    "revision": "d3e9023bd456e9f061457a3462a860ee"
  },
  {
    "url": "assets/js/372.4da5a012.js",
    "revision": "12590f0026d459c38b94df7dbe895cbd"
  },
  {
    "url": "assets/js/373.fab74233.js",
    "revision": "deafb1a7b1f67b816d670685a70de7e9"
  },
  {
    "url": "assets/js/374.ee1fb5e0.js",
    "revision": "e5af5d5e8a4c128c34c788150c6d84c7"
  },
  {
    "url": "assets/js/375.a43dfba9.js",
    "revision": "bd30e3f4de08814ed141f4e6eb6bde5d"
  },
  {
    "url": "assets/js/376.d27f838f.js",
    "revision": "ededd697f1fb120ba207ca52a1f0f1a7"
  },
  {
    "url": "assets/js/377.9cacc416.js",
    "revision": "c521bba07312e8153eff32e2a4c747a0"
  },
  {
    "url": "assets/js/378.42344e2b.js",
    "revision": "20ef24331f4843b708a2ef1d323bd120"
  },
  {
    "url": "assets/js/379.618e5ef5.js",
    "revision": "55bd0bee90e1c77ac7b3812a3c18ca3f"
  },
  {
    "url": "assets/js/38.a500a09e.js",
    "revision": "14ba139bdaf842028c401cbb8f9203ee"
  },
  {
    "url": "assets/js/380.2062629b.js",
    "revision": "5e0688d6ed7783214ecd44368ad97eb4"
  },
  {
    "url": "assets/js/381.f9c28029.js",
    "revision": "2e9ec5cfa444bdaf6944254a4690594c"
  },
  {
    "url": "assets/js/382.aa90e63c.js",
    "revision": "69f7920763a7a71b77fd54a3dc46f642"
  },
  {
    "url": "assets/js/383.34407df4.js",
    "revision": "0cc61bec70fa2f673a158d7ef3275e4a"
  },
  {
    "url": "assets/js/384.7ad2ed55.js",
    "revision": "d7cc8f9a486e91a5fc8bf7e4c1abc8d4"
  },
  {
    "url": "assets/js/385.0b544a58.js",
    "revision": "073ea3b268c17b8bd0f782d8e8def182"
  },
  {
    "url": "assets/js/386.bf50af9d.js",
    "revision": "c72f6f6066f7417272fc94accfff7f10"
  },
  {
    "url": "assets/js/387.8d2973d4.js",
    "revision": "11de2a7534aca91c1339b4c61cdaeb7d"
  },
  {
    "url": "assets/js/388.18fc0ab5.js",
    "revision": "22eaf83d6e1be290b70a3df7e3514ba9"
  },
  {
    "url": "assets/js/389.b4690e49.js",
    "revision": "d739f9447e8a388891c186d9e40905a9"
  },
  {
    "url": "assets/js/39.cb979b74.js",
    "revision": "79cb750737c31ab07c3b516e99c07860"
  },
  {
    "url": "assets/js/390.0daac3ee.js",
    "revision": "5d02bf1c070d2c484ec375631aa36f29"
  },
  {
    "url": "assets/js/391.5fd69ee1.js",
    "revision": "653423a5a88772ffcef8814616d21ca8"
  },
  {
    "url": "assets/js/392.27fffdcb.js",
    "revision": "5fab0fe66c1d99a27c7af4b4c6938a84"
  },
  {
    "url": "assets/js/393.dc32ef16.js",
    "revision": "43e30720f1b44bf5a073f98aa7346b07"
  },
  {
    "url": "assets/js/394.d025b020.js",
    "revision": "73125f0170b9745d9f3e3aed0ad5b9d9"
  },
  {
    "url": "assets/js/395.9f11776c.js",
    "revision": "914c317d393f6de3e02b8087ddfedac2"
  },
  {
    "url": "assets/js/396.55d0d045.js",
    "revision": "52e3a13e1107a63ba0f276941793ada3"
  },
  {
    "url": "assets/js/397.ed6d48e8.js",
    "revision": "39c6f9d3bdba039a2bf8b9d2d01c4a2f"
  },
  {
    "url": "assets/js/398.30b7fc66.js",
    "revision": "9ef71c4c95b96c59c2c02a2363d0ff10"
  },
  {
    "url": "assets/js/399.c4d6585e.js",
    "revision": "7744cd2326524ee3c5aa80308e573244"
  },
  {
    "url": "assets/js/4.47c51a8e.js",
    "revision": "699ef21e56809d1ed374e1ded2de1119"
  },
  {
    "url": "assets/js/40.bdd8944a.js",
    "revision": "563eeaf8e6a12149aa46724741b9c2bd"
  },
  {
    "url": "assets/js/400.4850e978.js",
    "revision": "4b8f510a938e5fcfc0fdfb1ef8e9448e"
  },
  {
    "url": "assets/js/41.5ec0c493.js",
    "revision": "85337b939800cfc9971ddf34c2a44c57"
  },
  {
    "url": "assets/js/42.01722834.js",
    "revision": "a2d329aa534b5824d5f8250f38579b5b"
  },
  {
    "url": "assets/js/43.a7e407f3.js",
    "revision": "27a0e84e558203160ef27821b52cbeb9"
  },
  {
    "url": "assets/js/44.1ab58c99.js",
    "revision": "455166d01bc281ce0e06dafdb81ef41d"
  },
  {
    "url": "assets/js/45.49ad0c9b.js",
    "revision": "27939671f5241c9b4c72603669d815ed"
  },
  {
    "url": "assets/js/46.12157cb5.js",
    "revision": "3688efaba49d4714b251749254df3bf4"
  },
  {
    "url": "assets/js/47.fff91b4a.js",
    "revision": "2f18c69a82502d373a867ce3b92e5802"
  },
  {
    "url": "assets/js/48.8eb16bf8.js",
    "revision": "769a56fa8f7a7f38498923d6bb4e781c"
  },
  {
    "url": "assets/js/49.5e48710c.js",
    "revision": "6320632891750eb2b4c9893eeeecfaab"
  },
  {
    "url": "assets/js/5.abe6ed01.js",
    "revision": "53984c8c71e15b58636b50ab3e0f8e36"
  },
  {
    "url": "assets/js/50.7765e655.js",
    "revision": "7f69f2fc539e6637a07a82db08bd3bc5"
  },
  {
    "url": "assets/js/51.4b96725b.js",
    "revision": "c1635a483eaa368960d94f7c7ffb5a20"
  },
  {
    "url": "assets/js/52.fcbf2b11.js",
    "revision": "f6493e115cf50ea6bd6def8229a19a7d"
  },
  {
    "url": "assets/js/53.349e18a0.js",
    "revision": "749b5a91d1f48b8d40d2007b247caf30"
  },
  {
    "url": "assets/js/54.5217a10f.js",
    "revision": "0c2a0885aa5e8180c3523c3f723d5014"
  },
  {
    "url": "assets/js/55.783bee9f.js",
    "revision": "4debc698497fc2c833816691746f2229"
  },
  {
    "url": "assets/js/56.af19f4b2.js",
    "revision": "f6f8245fc055e317edb991d638065ce5"
  },
  {
    "url": "assets/js/57.d3b39842.js",
    "revision": "4ea855a8f3c92c6d6645d3c2d93f4189"
  },
  {
    "url": "assets/js/58.3ab41441.js",
    "revision": "c286e1f0d764fa68d7c305a101bfa3b1"
  },
  {
    "url": "assets/js/59.94156c77.js",
    "revision": "2291100cc52b56eea91210c3977639e5"
  },
  {
    "url": "assets/js/6.64f902c9.js",
    "revision": "8b62d974cbb0a4cabc0dfe7a78102b9d"
  },
  {
    "url": "assets/js/60.572b5c69.js",
    "revision": "fab1ab3858b7c399ba524ec8408d034c"
  },
  {
    "url": "assets/js/61.dc83c0de.js",
    "revision": "0b8e9964fd77063ded1756d00d64448c"
  },
  {
    "url": "assets/js/62.5436ca5b.js",
    "revision": "aa1cf43153db966be73b0bb0263de77e"
  },
  {
    "url": "assets/js/63.217d6c66.js",
    "revision": "84336b07cc2be66c377bf48b52ae9fe4"
  },
  {
    "url": "assets/js/64.014e0699.js",
    "revision": "6bf4a1f1ed3374d070920fd9b4b67165"
  },
  {
    "url": "assets/js/65.06298e13.js",
    "revision": "5743cc95f0ef968eb538450b74209c13"
  },
  {
    "url": "assets/js/66.010fff3e.js",
    "revision": "ddac327a892ccaf286374922b9473f38"
  },
  {
    "url": "assets/js/67.d5315837.js",
    "revision": "0b4ac32d96631bff7d08fbb015d8a7b9"
  },
  {
    "url": "assets/js/68.2cc68db7.js",
    "revision": "6a742b7f94cb2b764f6611ec671f784e"
  },
  {
    "url": "assets/js/69.80a333ac.js",
    "revision": "6490a14cb52daccbef336628387248e9"
  },
  {
    "url": "assets/js/7.f4d67621.js",
    "revision": "08af7d5e6d49409d1066fdd714fe312d"
  },
  {
    "url": "assets/js/70.2af55fdb.js",
    "revision": "d4afa0187ffaaa745710f6614e12d0db"
  },
  {
    "url": "assets/js/71.aece0d10.js",
    "revision": "29b3d0e575119310d7631bbf8c087a71"
  },
  {
    "url": "assets/js/72.7b346a08.js",
    "revision": "fd636f3053beb67811898c92a0e55665"
  },
  {
    "url": "assets/js/73.c3ecdb60.js",
    "revision": "87c45792a708157676388e5a7fb97294"
  },
  {
    "url": "assets/js/74.9b04956c.js",
    "revision": "c11a27f3630301c1059c0c3660117c4f"
  },
  {
    "url": "assets/js/75.f9e59421.js",
    "revision": "6a83c7e0906cecfbb7e8b4e2b7d1c49e"
  },
  {
    "url": "assets/js/76.516b6903.js",
    "revision": "0fedfa1fac915b6758998e005b6e16aa"
  },
  {
    "url": "assets/js/77.44a809be.js",
    "revision": "22d30ffd8f303b7622698cc8bfea3a87"
  },
  {
    "url": "assets/js/78.000fe389.js",
    "revision": "39b4dd9820779dbc6d3ea44c46536322"
  },
  {
    "url": "assets/js/79.bef55eb3.js",
    "revision": "cf622e409a368d0d79a8d1e8d6000204"
  },
  {
    "url": "assets/js/8.334b1cdf.js",
    "revision": "c819e4ffdb7da7e3a61975cfcfbe6d8c"
  },
  {
    "url": "assets/js/80.839559da.js",
    "revision": "60df55600a747a6966991faad9a45923"
  },
  {
    "url": "assets/js/81.e15a8046.js",
    "revision": "77da0f041bcd49fa4baa762d085b09af"
  },
  {
    "url": "assets/js/82.5370bfc8.js",
    "revision": "784af4b7580e1f35c829d1a546a9028f"
  },
  {
    "url": "assets/js/83.f6309a8f.js",
    "revision": "a5ad6e11560d54854de2ef1d99a28052"
  },
  {
    "url": "assets/js/84.a3454241.js",
    "revision": "5347b443ff4dbdd53978fb90e5a152e8"
  },
  {
    "url": "assets/js/85.9f033220.js",
    "revision": "5ed3d34e8898b53c17f6315b2cdaee7c"
  },
  {
    "url": "assets/js/86.2a6263d3.js",
    "revision": "8b144ecdc1d600a5f099bcaad37caa1b"
  },
  {
    "url": "assets/js/87.d64ecdce.js",
    "revision": "66218c0e1314362e88a384726e37fc30"
  },
  {
    "url": "assets/js/88.025b193b.js",
    "revision": "5f87ce63d748e3ee0dc5df55e4726427"
  },
  {
    "url": "assets/js/89.c7c82631.js",
    "revision": "3f102daac5add76b91721fafef585983"
  },
  {
    "url": "assets/js/9.be067320.js",
    "revision": "d61dbd8c16b69e7d892473c6bfce02a9"
  },
  {
    "url": "assets/js/90.2aa13a57.js",
    "revision": "a7fba08a9b2f412a006596e3f73721d5"
  },
  {
    "url": "assets/js/91.649f2594.js",
    "revision": "8f0c9b671b419f2590cc316ad880b7d9"
  },
  {
    "url": "assets/js/92.c7cd6729.js",
    "revision": "2526863c29c3243d8fba86f812cf68dd"
  },
  {
    "url": "assets/js/93.624e1a8b.js",
    "revision": "397cf675ca1e69f685a1527c4cb8b27c"
  },
  {
    "url": "assets/js/94.625b1622.js",
    "revision": "1f5349c0486ed6154e62945ab577fcd0"
  },
  {
    "url": "assets/js/95.3f2a0852.js",
    "revision": "5f7b05ad7d122605af8eff700d9ed649"
  },
  {
    "url": "assets/js/96.b830c7c5.js",
    "revision": "25c57560df8c74cd3f464b85ca074ffa"
  },
  {
    "url": "assets/js/97.ea2026fb.js",
    "revision": "b3e4d1cd3b3d438ed297c2e3642062dc"
  },
  {
    "url": "assets/js/98.c5713dc0.js",
    "revision": "659bc0d51be36d843b4bb1baed9a6ca2"
  },
  {
    "url": "assets/js/99.81566a21.js",
    "revision": "d42f1709d5a5d82347924346d49ee0c7"
  },
  {
    "url": "assets/js/app.1e4166df.js",
    "revision": "061a8a4fbdae2f0c1994aed2ec967fc9"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "151b8a4bb4de6eedc12aa5e1836c0971"
  },
  {
    "url": "blockchain/solidity.html",
    "revision": "ad7b314a8be8b77c880e6621201be89b"
  },
  {
    "url": "common/architecture.html",
    "revision": "1d49f1719ade7d3daa28553d6a04200d"
  },
  {
    "url": "common/code-structure.html",
    "revision": "6c8e8430756f5142421be7c191c08a0a"
  },
  {
    "url": "common/crawl.html",
    "revision": "ad9ad06f7d06751f445b157074db0982"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "01eb97c1587aaa0b8a7ef28e69b8a4b6"
  },
  {
    "url": "common/debugging.html",
    "revision": "04738a3e4b0c629a71b4e8f47ecb725e"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "0a5fb921e6874d1329688ce6721a6940"
  },
  {
    "url": "common/document.html",
    "revision": "9292e42cd995b7154e08f897df7fb833"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "c2ec2a167456a0f9eeca698b301d5ee6"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "ad9bcb7cfeba14d8ae6842d7873122cb"
  },
  {
    "url": "common/index.html",
    "revision": "91eaa769e865c5ddf6a278de86d5078f"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "b13016fc465c30a8890941183b35fe31"
  },
  {
    "url": "common/realtime.html",
    "revision": "aaf819d0e8dc4715a072a2e7e1b98d24"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "86f65054cd86f149f4c81aad65bdd518"
  },
  {
    "url": "common/refactor.html",
    "revision": "5629432853df6e93cc76a926106c4fa6"
  },
  {
    "url": "common/seo.html",
    "revision": "94dd03a0f75b826184c0b2713a27ed8d"
  },
  {
    "url": "common/use-case.html",
    "revision": "b6906ec3d2b5d368437062ccbb134b34"
  },
  {
    "url": "css/box-model.html",
    "revision": "d67e3627601ca682828598a454b8aaae"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "4504a01283943ae06e67b96f76f7c83a"
  },
  {
    "url": "css/css-flex.html",
    "revision": "6504dd61f937633100e86629492e19ae"
  },
  {
    "url": "css/tricks.html",
    "revision": "35857f72e32d4a578ac62e4dc1dc48cb"
  },
  {
    "url": "db/architect.html",
    "revision": "244b945c0d9f9a1c5241adc01cbd66da"
  },
  {
    "url": "db/cassandra.html",
    "revision": "bb91de6670affaa2a9e74a3a06758e2e"
  },
  {
    "url": "db/couchdb.html",
    "revision": "49e317f3fecb829461a7f39d74787e25"
  },
  {
    "url": "db/db-concerns.html",
    "revision": "f0150d100dde48b560f775071e8945fd"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "e7033bb2885af81a67d2f0b0cf1481d5"
  },
  {
    "url": "db/db-vs-blockchain.html",
    "revision": "0dad0bd6c9683d77f68655bdbf747f59"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "c3502c66e977adb759f24203dc07272f"
  },
  {
    "url": "db/mongodb.html",
    "revision": "f9de3ed406501a653358db88582d08f5"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "3b6948e49d6cbe95eb5f51c7b6ed19fb"
  },
  {
    "url": "db/nosql.html",
    "revision": "505ac9092d72c036edc0445d180a0213"
  },
  {
    "url": "db/optimize.html",
    "revision": "8d6a739f7f0912a5d97ce9c7b8e6f781"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "f688bffe680aef0b7cd0ebc2d35587dc"
  },
  {
    "url": "db/postgre.html",
    "revision": "76565ebc39e315942dd001e3da3a8c8d"
  },
  {
    "url": "db/redis.html",
    "revision": "b0fe35d3044df8f6eef35a6b805533e2"
  },
  {
    "url": "db/use-cases.html",
    "revision": "710f867a7490261c6152930e02271932"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "03453dd49372daf94bb000841aef50d3"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "5440951020f4c2e7aa37a15b72049ccf"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "7fa2aa592ad0d05c4ac1cdbce38d8c09"
  },
  {
    "url": "game.html",
    "revision": "b6380afcc07be01b5a66a4823f7192c8"
  },
  {
    "url": "go/clean.html",
    "revision": "94de6b507a20a2c474a202566d4e27dd"
  },
  {
    "url": "go/index.html",
    "revision": "140005eaa746bd5f8344c8236db444ea"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "dcc79ee427b204059aa060d3e5e06a9a"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "3dcf07152bfcbc9a685fe9ac1a23cbeb"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "948601fe560fb91a2f575fea9656c3db"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "ed0d1ace29e2bdc0afb45c4bc5d37e8f"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "1fb4eb55a55d342ccecd2cbc3a70a4b7"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "eb159bbf69e3f7cc0a38194ba660ca5c"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "5b2b94d80e70f5048a960e8170587d76"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "bbc3384f9e6a5c24b52156cc59523191"
  },
  {
    "url": "index.html",
    "revision": "b18db24d8fce0f6d20bddefc3cd05552"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "848452bd3d40c79f73a83f3fd88eda44"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "0e15f155129207736204bf553e4bcbf2"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "1c8105a9b484431cc6c4ddbca36dd92f"
  },
  {
    "url": "javascript/closure.html",
    "revision": "84a942f8b672787f6899973859dc214d"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "ceea32505b5c989be4c45d3c02a692b8"
  },
  {
    "url": "javascript/functor.html",
    "revision": "bdfa8c1ead19c30957f1c6c691b120b9"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "10e9261fc1d36bc61c8de52fc459ed78"
  },
  {
    "url": "javascript/rxjs.html",
    "revision": "8c1b3abe40acf7dc8fa21cb33db3e12c"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "6ed112bf92ff4954ef2d615325e1fc26"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "4b0faaec9be501322d582d6b8a11707a"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "e61f873e478e4e90c67b8adee4f506ee"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "f27722fc9ca4a4c3b9d41fdef5ef36e2"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "e55998ccdc21e59b336d264aaf313f65"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "e7a61ceb349a9985293bc6faeb36c537"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "fb8e0da50d25bb7bf9c2c324917d305d"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "2d2386a2366411e265075d2491e92ae9"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "3958754cc48cde6eba64c2bd9b3d6cda"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "da26ea24312c90199d0c2facd69cdf1d"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "ebd935ad6c82aa56b5800284c12c486e"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "ee49cbb1dae1173742d0486ec2e8e77e"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "eaab9c3db1b64dba58d2798c205f8538"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "018432c6bff3f63bc580a6ff0e9fb82c"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "fd2fde648ce7eb2f8830f211704b03ab"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "3ef51ce53e898dab36dbf04c4dad6f1b"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "1edfd7b47d2983c6a593fe1451211f74"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "47eab15e982167b3d9b525b6fe57cdff"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "ce0d4dce7f2ba7b297f874ec1566a13a"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "02b9a4b0ee98a480f482ef01ea6b6748"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "d9b398640bfa81ea9b9a673ed61bdcd7"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "945d76a5f1bce5f651ab1d013c228f29"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "bfde0ee5ce263ae74080d3170e7d0a08"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "b546a8874c48f07c981e79fd37b97bc5"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "afd370eecf19d6c2fc9cdd5b659639a2"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "a78f5dd529c64fc0465b06ea23174950"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "38e88808029a3598822142048ed10062"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "6518aa73c80e92d95b2e04eb7246eb48"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "3dca764d45419fc90276b90cfa28ec4c"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "de5b69e0eb360355477bf6240dbf2812"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "04f60eb4f6c062eef66a676174f51399"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "763ac6af480b8b1a57541ad70baff03c"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "df677fcfd8a9d38f09457afe0f0a0b53"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "f2b15c1ff3a00a5e7b5ec69385ddd594"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "d059555c159be970a747718faf11ed10"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "6c1640ecf11f806d102995cacaa459c0"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "d9f0fed58de6bbabab14f9b97e0f8fde"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "e2dd21db7224a5915abfcd1a108a6d85"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "f2bf337a33f5d8b73c45afc9dddc6dfd"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "25f27b420ed85c2763b656eb4f249f8a"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "cce72e2f29ef9c739265cb0ae51e902a"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "2c3528cfdc974126d8e7e3a2a277da6f"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "3c6a01b2f4a93d813ff2ff4f40ab2aed"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "0e4ca6e8279c68eb65eeb633cfc9e6e3"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "0d8798234681869d121369ac60380fa7"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "4c3456fd5b8ad090d75639fb26fccf25"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "71d0b2a0a8cc1a4ca194a4071bd32afd"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "2892a14476fa321f4e5eed344743506d"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "eec765134f03697d0e8f385f916e3a51"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "f5bd4de7f44f3f1668c8f529627d3cea"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "09acc88d7a70d7a220738fd1e97bfcf4"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "29015e68c8ad169a33b9d03236645699"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "e9588fa3f4949921b0f6a544b02cf457"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "ee942e28d63deeb0d94a1bc28729faed"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "3fba8160031e37a62732c0ff2d282259"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "0b3625694a1de278b523261bbcd4554f"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "0909c391a0cf53cd54ca2f366c859ebd"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "0ead7d3bcfe7606b0375183c37f68f21"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "c427b8eb66628c2ec395c3c583dab4b4"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "7f8e564e55e1641ef2c82b285a651f3b"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "d938262fb3813bf7c3648b8db80a37b7"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "bac0747f1274c8d3c7bf5725903bfff8"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "e657b16c8116c29abcd1ea471ac4a7dc"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "39c9583f29e9db884c9c267839945c8a"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "60b79dcec0fe7e5f8a21206b19ce284f"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "2ad4c87149c091e392a138d29af1f839"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "29748082dc1045132cfa84e24d723342"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "ec798d2a860a9e6b28a754db51e93232"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "4d66bd8c2e894bd1d6ccf4d86fb03576"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "4f00412912ffb6ed893e906b25a48ce8"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "ca2df93e9a961a26f13308b6a57fed23"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "bf09fcffd2078366171612d94696111b"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "12bf1efa13249e9a01a756a7ee7cdc1f"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "ffcce2110eaef6b9ddbe560d26d6d135"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "ffd7612f27a8e51b3cdf39d62d7c69fd"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "2aba802e85d830511fc05b767075d0d4"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "b5b5382a35640effc0d478d82544c805"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "d0ed911afd122f9106db14d49e221fd2"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "452a9a29c08c988e4567fdd852005c69"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "1f50e402a1f4c2f5ed9b200114653022"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "61a8acc220ae4acbbc5ed21145cbdc58"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "c4066fbf9c90c621e771aaf795fc7a53"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "efe85cd9ac191b0dfbd0563fb4c8f5a5"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "2c7288f7e115882334c238f5a12df1b5"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "0da9c982786d02af29a4f52b92e608aa"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "b6a5ad469c07683aa2a48740029f4eb8"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "3a0dc47e3172894fd9644d534c87afdb"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "cd0d48c639c75b90b097097ea3c42324"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "4409b4c78be22dc833e843cea5eaeead"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "74523e59c3642e2277180492fb2ee3e1"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "ff388725d9e89d9de8816fcbdb690fe7"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "d9e8079efc3953690d68b5e62f62c035"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "85e9c2c3591380d6b8f850177441d874"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "200e32c1c65208b97f61d68df53e4b43"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "95e7e5cadfb02c3ed89dbe15be21483f"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "51128323f2510d495c1af8b6f8359476"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "9aa4e3af71af01d8149f9855af90848b"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "39aa5cae201bbd6bf4e82269f0f04c06"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "67f9f01ecaa288c87124aa2138cc945c"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "3dd12381896bd3f35579490e9f2bc33f"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "c91b69ed716b99e5047427371f83bbb0"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "b3d8b152de75e8230b248978fbd9c28d"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "88b9fd1d844dff4d87e1651e4a61ef69"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "f72e6c85408d0fcbeff30b5766049d95"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "45b81877ed4239f851b6adb8893a7ab7"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "a6287a5b4d20e51686200afc10fc5fb9"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "b00686b32ff8342675a88b1901e4624f"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "00cec576a917b6b119ceb57c9f616609"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "fb009ce5e9959b4c2f3f3da81414b26d"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "4aa3a8f75d56049d9b7a113d62f44fcf"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "4ebea19f6d42777e8926875d8ec3593c"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "49885c074c4e4a10e638667c7bbc58b7"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "bf2796f420cf2f81ee7e29add59e7a34"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "32d53457abb0103ef84acda7b8cf5b81"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "d264491a23d635d2ee42be8888f9d091"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "efed367a286ef076c44e1f557ea8fcaf"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "6e88e23976bf100ccae0e3541d48d450"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "abf4e68694797e1ca4c3610d3014bb12"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "c14703559a121168e7c09cc0e9a5ef5c"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "cefaf9b13cbc2343b6224d4ba0a9f919"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "31e66d8ef17f0d65c5ed911e00316cc6"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "0b5037c882489a981f5dc90726499c63"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "d4f3d3e28a3c128b08bc24eec92dfcd1"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "03e3bf7a8fed83995c48551e8aac1ef7"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "a091ceef3c4a6dde1137bae9a154db67"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "eadface194d3e742689c9412c4d42602"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "f6a12a9333fb4d4f679c01fbaf02b433"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "6aa2e8718986dc283063343f70cbf033"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "a37b92df5654019bafd4c64ea797f136"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "691f59315999e295f1ecc2f666ca317a"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "142fa18aa71eb13b20971a613d2ea0f0"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "7d6e83860d99c2d7e4aeb5dbfc11cbe4"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "f8f4bafeca37d08a84ad1d1d9df785d5"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "2185346ffcbc964fc252d5d988c7aa7e"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "a05ba32bdcc84f64ac6d27fb05f164a5"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "aea2a4d719775b88ce35239fef61a2f8"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "c9be81b31a40166d16d99d8851a54b42"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "23f7e49a84921b80cddbb0293448a9d8"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "7704eee1ccbff1924a5b6787f55e23df"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "b6e7e2a57226d85dd9194dcd74bb28ba"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "fcc3d36ecc9217bd37a86beb38ecfd33"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "78af928838b904b70c8166382981fd27"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "1b509904ad0b05ca433901243ad0408c"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "7e7d86de7dbf4e652944a03eeb6c5916"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "9b97d5fd12d51325f73ae1a8ce3ff3f0"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "861133a7ad8473d1d8698e3a7925ff36"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "033ca4924b73ae05635c86e59ee116ec"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "9837025b254baa1c00b73f88109a2f30"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "974bedbb014f3d3622f45f106b57b33c"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "3677f4ba15385d1f51d71da856fc7e9c"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "a88b67979e6aa09e55b030a3a7bedbb1"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "257247229fb0a5bf27b1926115de87c1"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "92421401f00f39113c5e74e8da463652"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "a9eecd232acb21d73a4a1fa63162efbd"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "4f7b9d06c82e5c390b12fdf2279283d1"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "8c3cfe078a54e47518384f8e878ea42f"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "e6e4d87e20b9d66f9782f88907267d79"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "640b2867175f2d844eb219e44b2cdf2f"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "dc54d13319ab4feefeadc9f5aecdee77"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "a23da01c3e4d7ce570cf01e765b0af4b"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "1703f3467e7c82e434ac5ab233ea340b"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "0bd9e130af062071803b56ced41875dc"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "176da0e6c249c532c0e122acd3c73938"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "423e9d482e3f3cc115b9bf8e73b2c69b"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "e2bcf5c9814b06ec5af4998aaf26f406"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "d660d55c5d40467f68e2499133a7ba48"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "aca76f2ed77f6f500d23999b6917d595"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "1f121f92c99478ea9357e5c1452ef843"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "fcb452e8af30c13e0da7b060da75b479"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "570365191f6024c921b16576f41be912"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "904b389c7d1b978b91cb84509b064d2a"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "6542bb27bbbb3575bc68ddf573ff0e88"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "de9c45bef57a7fdd514b8f62130b8497"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "131d4a62d9fc0b15e5bc5a4c6a1d601e"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "9a64b0a4ac22fc2afc8f38a8f2bc4549"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "5f32495d908a59121a0d9f622fa6a749"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "bf37d7b5021b2440eb47a04f952adbd8"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "e20cb251347ce2a72db8c8ebd396076a"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "08a5824241259e3376531cf0db9f3963"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "000803da99f56be5d8f8cc1830d3f7cc"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "9c2ad795fe11d64f199a110a12a08103"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "651406746e8294518f9e0ad46dffc56f"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "2f8432b6560a06e3517b7a9caeb22fa2"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "983baccfbb74971a7bd24d5e4c9dc9d7"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "f88f892bb7a25af181bd190406ec6620"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "43ffe4ad79ce9bc38ee8e260a38d7548"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "b5c566193c6e5ecc3530af28752a3a90"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "1358082f16ecc411ae4afb3cbdf69648"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "96553d00b343de73bdb00cb0e2b56bb5"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "774e1bb954c646a39320033f7aa9fe63"
  },
  {
    "url": "kungfu/template.html",
    "revision": "0cea8ab17c5b31c4106908db4d17888f"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "3bcc27dbc99181576e737d2f4ee1811c"
  },
  {
    "url": "node/env.html",
    "revision": "f3773e1429f7f3baed8a0e4c56995c79"
  },
  {
    "url": "node/index.html",
    "revision": "7a89856b4551aba8d8a91261d26c23ff"
  },
  {
    "url": "node/n.html",
    "revision": "b4e231645e9ff095f0c8de42538f3bdd"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "3e5c6bac16e199d4c1823e027d632282"
  },
  {
    "url": "node/npm.html",
    "revision": "b747f4ecaec8edf8af15260361576e29"
  },
  {
    "url": "node/sequelize.html",
    "revision": "5154dac92806266f54b23ef6e9cde169"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "a206c2ce68c4b709203528017fbc281e"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "f0d011c06d4a6b19fd21f1b16e6f097f"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "7e5ca9ca300d1da9d860fc30fd322b9c"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "0721fc856517d3f4c589f8dbe84be4ba"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "501fe0e9df49ad7cedf3b4c8d6f5ed60"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "3e691d575d932c3b8685202c9f1dffc5"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "54e846f1347f6542de9157294102ee84"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "75fb50ffa529b8ff0402bbc0eb561e09"
  },
  {
    "url": "php/clean/di.html",
    "revision": "f95ca8900d7e238ce044763643d6aa5e"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "22bbca06da0cc5190a815286ae70856e"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "0febfc1733ec2d04017efc75980647e2"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "8bf8355b0fac95d6b3312fc540d75d4b"
  },
  {
    "url": "php/clean/index.html",
    "revision": "67d95fd766e9e201dd87a02111b68073"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "ad057d63f3cab978ce5e699be6b238e6"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "006ae9f06f23b218e5b570d569e836fd"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "3160e419a4e240eec609ddc13c0d4a90"
  },
  {
    "url": "php/composer.html",
    "revision": "eddcfd3ce191f835c84ef089427cdfcf"
  },
  {
    "url": "php/crunz.html",
    "revision": "323a8ff6e9103f4528423cfe0f947fa6"
  },
  {
    "url": "php/laravel/best-practices.html",
    "revision": "54d31ce0ad46aaea4e0441e4a1cc44a6"
  },
  {
    "url": "php/laravel/laravel-notes.html",
    "revision": "a069bc0b59d4d12fd65a2f3c21f456c7"
  },
  {
    "url": "php/laravel/patterns.html",
    "revision": "34fcb0514c8b404892369e007da66f56"
  },
  {
    "url": "php/magic.html",
    "revision": "452c96f131bfff7aca957938a2422841"
  },
  {
    "url": "php/notes.html",
    "revision": "4f8147710c3d7ff42ada569fd128a120"
  },
  {
    "url": "php/oop.html",
    "revision": "d2fd99f5a83b7eb48c0602160cf763dd"
  },
  {
    "url": "php/php7.html",
    "revision": "8bf5823c7ba469afc5e1a6ff8e146aae"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "ab77fae70f273525fd4301592d60e546"
  },
  {
    "url": "php/reflection.html",
    "revision": "1cf74d2a942174503a0eb2a3a71ab3cd"
  },
  {
    "url": "php/tricks.html",
    "revision": "f80213bd2cf6c1cd0f2ddb19c93589fd"
  },
  {
    "url": "php/wordpress.html",
    "revision": "4b8fa2fb744032820dc99abefe8e6d64"
  },
  {
    "url": "quotes.html",
    "revision": "734f2eac79ec8525fe06d5e97aa0322e"
  },
  {
    "url": "react/mobx.html",
    "revision": "ce5e5486420b95c0f86433068a31f962"
  },
  {
    "url": "react/nextjs.html",
    "revision": "33d47fd0677c8c52d311eda0935c6d1f"
  },
  {
    "url": "react/react-vs-vue.html",
    "revision": "737691e0c110d554e21d8dc46543fbc3"
  },
  {
    "url": "react/react.html",
    "revision": "c3d2dc34728b9c3cce15a114d046fdaa"
  },
  {
    "url": "react/vue_react.html",
    "revision": "e2f46174725e3d363c715fec75f316a5"
  },
  {
    "url": "refactor/notes.html",
    "revision": "111042d469f9b24763ca13cd19db16bc"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "56e4536c636e41899c31a1ef5c2e72c8"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "ff99c9adf8618fc044049cf0d931850c"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "c5f30c07690f5ebf2cc4eda26de0f079"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "75be4c7ab121398baf8ad7152a234af5"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "4e6a4cd90ed393455589532933b50ee9"
  },
  {
    "url": "snippets/jest.html",
    "revision": "41c0ad4b91b2d1c9a2f49c2cbd6a7521"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "e35b08bcd6aa897903ca6d2874bce8ca"
  },
  {
    "url": "snippets/regex.html",
    "revision": "051871ca220928ed1dfa70b603304c6a"
  },
  {
    "url": "terms/12factors.html",
    "revision": "6695a9129d38ab6f92bdd9563f97399a"
  },
  {
    "url": "terms/architecture.html",
    "revision": "f365fe838724587466fa3583fbd9ce8c"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "1c5ffa2ec0b369deb33bfe383f7bcbbe"
  },
  {
    "url": "terms/di.html",
    "revision": "7122429240cf3b076992aa0dad83141c"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "9ddd37fa5b6580d12e350fc33a46a432"
  },
  {
    "url": "terms/javascript.html",
    "revision": "b327e51f710c7b333b32abd5f925e920"
  },
  {
    "url": "terms/patterns.html",
    "revision": "aa5291222b1336caf1eaa152330c3aa1"
  },
  {
    "url": "terms/principles.html",
    "revision": "d27b6d4f37cd2f5157ffd273286de2b0"
  },
  {
    "url": "terms/rules.html",
    "revision": "b3ff0678d46d40c5bb821c5ffbaf9c7e"
  },
  {
    "url": "terms/testing.html",
    "revision": "b494b8d3d3d7a4d1271a1ab713b0d71a"
  },
  {
    "url": "tools/chrome.html",
    "revision": "95d755af6cc2807b16a60ef94016fe1e"
  },
  {
    "url": "tools/docker.html",
    "revision": "48b75b822b15c0c7adfaf42eb22727b8"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "bfd91bad7a4d4aee74afb8c79eaed8d3"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "3b4de02b0370a874516224abfef2b8c5"
  },
  {
    "url": "tools/graphql.html",
    "revision": "ed9fa7d1b37b9acc8ba808bab350245d"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "e3e4fe7b08b309e6e1d1cdb8fd9b245a"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "36c6c0fa01eafbaf69bdf32aa9e2314b"
  },
  {
    "url": "tools/redis.html",
    "revision": "d3093877e0e08f9c466450fb343dba76"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "76efead5fe31d14a44b6d97282c46f4d"
  },
  {
    "url": "tools/vscode.html",
    "revision": "b046d337c2e717576a17e70cd4c24704"
  },
  {
    "url": "tools/webpack.html",
    "revision": "28c57fab91704582d2b4d207a2b777bf"
  },
  {
    "url": "tricks/compare.html",
    "revision": "e47feee38fd93d4fffc9529f089189d1"
  },
  {
    "url": "tricks/git.html",
    "revision": "37e042c3d1379c89d11e34b4f224a70f"
  },
  {
    "url": "tricks/linux.html",
    "revision": "51b1b6cde3cc5d7bc78b2e003d9870af"
  },
  {
    "url": "tricks/mac.html",
    "revision": "33bf0d5d5e758888edb04bc716be0655"
  },
  {
    "url": "tricks/misc.html",
    "revision": "18bc0538e3f98c9e2f77030e9b243f46"
  },
  {
    "url": "tricks/setup.html",
    "revision": "5104c84f517f9b6d946bc9cd3ab3440b"
  },
  {
    "url": "vue/communication.html",
    "revision": "4ad0758962a585b83476db499130f08b"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "311236f83d65f704fb55445e3221da48"
  },
  {
    "url": "vue/events.html",
    "revision": "81c9e95a686d35e0514fc496e6744aa0"
  },
  {
    "url": "vue/references.html",
    "revision": "4086541d03ea6ddf32dad51364bcae46"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "8f6a0e073384633b500faa2e0fb79d26"
  },
  {
    "url": "vue/test.html",
    "revision": "caa9167089e9c547e5f3b506ce1336bc"
  },
  {
    "url": "vue/tricks.html",
    "revision": "379fb35001f3824f87e66170b6a8483e"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "582a72e3eac94869a057cfc7d7c5b84a"
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
