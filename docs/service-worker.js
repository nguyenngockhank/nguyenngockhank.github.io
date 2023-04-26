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
    "revision": "437233be36869fe56b9d1fce1ac4b438"
  },
  {
    "url": "ai/AI-note.html",
    "revision": "da30546fc2c37e89d1e0e0c7a4d7debc"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "292b0cbb043a5b50c28753f46729f96d"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "0ea98ccc3a08b3f3bfd3465660f25e63"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "c5956d1805c1be6319a7828c165c2844"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "885f9aa0bbc47c97e0bcd2e06c25098f"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "f3b916869aa1650ac098dadfe6ffa271"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "0302915e9cab7a10e22ff25d09eb7a8b"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "3826571c57fbdf293dca4831295d0cf2"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "3d394d9849055afdc79e73fe556d3cb9"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "130f5306900a7030a1c9287db4134279"
  },
  {
    "url": "algorithm/string.html",
    "revision": "afd30f58d55ca12edf78c79fa556c174"
  },
  {
    "url": "algorithm/sum100.html",
    "revision": "43bd5bb2be3bc799e6ae6f201868468f"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "0961281bb5b94d5f0f2bcddf329bc6a3"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "91522f45d28e110cccd71e6535d6ff6a"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "19985d8b0e7dbd992800a7ff82bbc071"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "ff2530d970a7dc05a01769e49d08e25e"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "3e3c27c5651423fb9a5aa39d8b9a3b1b"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "a4ffc8f0677af38be492577bc799235a"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "47b2f07602ce208c257c5f9166dff5e4"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "9563cc1f95b8f1427945f1dbb48e8714"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "2172851ce3ad9290e518b23c724d855a"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "c805c6582b17adbcd4792453d3f92f6f"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "933016e8ebe49e95642e8a49147a9d4a"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "f25b75412356618e80231c8cf83b88ce"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "0811673d43dd05273defae30f0607429"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "63fc6c08793561701156c323cf5c886c"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "f3a8f8ef62c91386a007452e399e6512"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "14a0bfac12285c613df11bf0d9fb34bd"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "c5be30466ea8ff7dd03a58730520f22c"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "b0b2a98f2d34173fd563ab2731a95ad4"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "40d84b0503f58d7a744b80427196950f"
  },
  {
    "url": "architect/audit.html",
    "revision": "5b4a3312272d67dcdaad1310567901be"
  },
  {
    "url": "architect/authenication.html",
    "revision": "588cac95df5582ea058378062d596fb4"
  },
  {
    "url": "architect/authorization.html",
    "revision": "1c2fe22abdf8af3f6857c15cea5f8b22"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "bbe281705329cee65794473b5c6ee4e5"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "e2fcf1389573fd043e6d77c9afe69531"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "96082a4c996c7fe3bae510268565c20c"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "ff2044aa6ac674790bfb780f9a7885b4"
  },
  {
    "url": "architect/ebi.html",
    "revision": "9af0d9097519542ff648b2994e7ec21b"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "65803f499eaa60640d168654271ba224"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "4ca29180dd0c60c7fc5c55a8e806f75d"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "91d4d4f0922b5072de698f3a58d1736c"
  },
  {
    "url": "architect/index.html",
    "revision": "771e00970703f0ddf0a3ed0ef21a4bab"
  },
  {
    "url": "architect/jwt-handling.html",
    "revision": "4e714d45a080fc11bc362747a9ca7a5e"
  },
  {
    "url": "architect/messaging.html",
    "revision": "2ab201d6e0603148a3a3a118ff453494"
  },
  {
    "url": "architect/microservices.html",
    "revision": "92b7b9bf598da88c8c6aaf1cb6e88412"
  },
  {
    "url": "architect/mutex.html",
    "revision": "a3fc37641b4c70a0eedb8f35706755a8"
  },
  {
    "url": "architect/notes.html",
    "revision": "ec34499953510a52e8b1acc673daa1e3"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "1a06d709f6f65ee3bb3f32aaa96c762e"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "c0caa42acb0b35118c648fbfef6f40db"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "dca9039d43f09c989f50e310ecec9b82"
  },
  {
    "url": "architect/refs.html",
    "revision": "b0650d485bc64320f7bc8989a9ab2f3e"
  },
  {
    "url": "architect/soa.html",
    "revision": "87a861f5a748197fb84c2a34d0023a99"
  },
  {
    "url": "architect/spa.html",
    "revision": "9e358075a5b5eb2753e593b69288f474"
  },
  {
    "url": "architect/terms.html",
    "revision": "6382b242e771cb8dea7d321864a79ee5"
  },
  {
    "url": "architect/webservice.html",
    "revision": "850409765ad061cf0bd8796a8db8decf"
  },
  {
    "url": "assets/css/0.styles.63dc0b7d.css",
    "revision": "ca0cbf0fbf5928c321a219e142a7ea09"
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
    "url": "assets/js/10.10c905a7.js",
    "revision": "6013aa1f82e89078ba2ce6b23040a958"
  },
  {
    "url": "assets/js/100.445b1654.js",
    "revision": "43e77f71e4dff53d97b3d53822240031"
  },
  {
    "url": "assets/js/101.a3386301.js",
    "revision": "96c644c7449e4e9dfb9f3663f1f972b8"
  },
  {
    "url": "assets/js/102.50dad645.js",
    "revision": "50947e5119732dadf7427c6c5ea53f2b"
  },
  {
    "url": "assets/js/103.833513ff.js",
    "revision": "010d874f95346917c36d31123162ec34"
  },
  {
    "url": "assets/js/104.b281405e.js",
    "revision": "101b73f9a95c6844dc309e5182694227"
  },
  {
    "url": "assets/js/105.737c0972.js",
    "revision": "075b5d324501ad6ce01b09e5890b93fd"
  },
  {
    "url": "assets/js/106.9bddf5d0.js",
    "revision": "2d11fe054dba88c9b1e15f3066a9ee42"
  },
  {
    "url": "assets/js/107.087a907d.js",
    "revision": "4630e03be6447c17b4411551b416fe61"
  },
  {
    "url": "assets/js/108.6ef539c9.js",
    "revision": "62f798626de1b12884449f1b54899801"
  },
  {
    "url": "assets/js/109.1f9a9c43.js",
    "revision": "65a263035521cf2613da3403df15aed5"
  },
  {
    "url": "assets/js/11.f962bf13.js",
    "revision": "fa25fceff5217ea394a259c0d8ecdeec"
  },
  {
    "url": "assets/js/110.633302c1.js",
    "revision": "8e0a515a1683e3317d4549961fd84e44"
  },
  {
    "url": "assets/js/111.50cde676.js",
    "revision": "f1861c226f1c98af8fd0631be54749db"
  },
  {
    "url": "assets/js/112.febff141.js",
    "revision": "642071036e0dc70f97117f6ff4138830"
  },
  {
    "url": "assets/js/113.0341603a.js",
    "revision": "78ad1e56f6300afdb6948e583d37fd2f"
  },
  {
    "url": "assets/js/114.af84670a.js",
    "revision": "3e995011c01dd646a888109de78479a6"
  },
  {
    "url": "assets/js/115.e0f76b8f.js",
    "revision": "c5d9c334349273ca3bece7d4856ca61e"
  },
  {
    "url": "assets/js/116.4cdac5c9.js",
    "revision": "f7f06263560d001eb1d0db6d9a776da7"
  },
  {
    "url": "assets/js/117.6b71bc0c.js",
    "revision": "174241285171cec52a577a948ddfbf50"
  },
  {
    "url": "assets/js/118.3cd04c5c.js",
    "revision": "e90d81a886604c2693786b83903ff20b"
  },
  {
    "url": "assets/js/119.4385ff74.js",
    "revision": "3fc3ac84d72a847b25943731a4854138"
  },
  {
    "url": "assets/js/12.da6c804b.js",
    "revision": "a6865be71a4a89e9d9caf17b35daa614"
  },
  {
    "url": "assets/js/120.7732e1a2.js",
    "revision": "0d79593aba4f93a851dce76e318bc69a"
  },
  {
    "url": "assets/js/121.fa0a3041.js",
    "revision": "7a07327628ceb2f9818f56d1082e951c"
  },
  {
    "url": "assets/js/122.011ca9b4.js",
    "revision": "e8542c36abcbabafe6173281e18f1357"
  },
  {
    "url": "assets/js/123.8ee1edc8.js",
    "revision": "a51b7983f808b125ff34fefc661219e5"
  },
  {
    "url": "assets/js/124.a9c7789a.js",
    "revision": "f5b5eba40e5208066356b75df074af26"
  },
  {
    "url": "assets/js/125.be963826.js",
    "revision": "0c52586053ef5c11174cb906d50cb085"
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
    "url": "assets/js/128.dd50f341.js",
    "revision": "861a651f5030b5e975e4e33405fea615"
  },
  {
    "url": "assets/js/129.4e32d7e6.js",
    "revision": "df2d0d8f47546732094cddb3bb531091"
  },
  {
    "url": "assets/js/13.d4952ba3.js",
    "revision": "491236d32c3d67bf4fc2bdd7f07db9d4"
  },
  {
    "url": "assets/js/130.3deb397b.js",
    "revision": "4266caa250304d1167617df9ed9ed94c"
  },
  {
    "url": "assets/js/131.21802f1a.js",
    "revision": "caa93ea592833c73997d550653ac4e3f"
  },
  {
    "url": "assets/js/132.5280ca6e.js",
    "revision": "07cc6dcfbee33a3156b7f51f2a5db437"
  },
  {
    "url": "assets/js/133.1c82dcd4.js",
    "revision": "69344e766efaabe7710fb791b348cf5f"
  },
  {
    "url": "assets/js/134.e747dec1.js",
    "revision": "fd9f5001e5c96852f872f1c252abfe12"
  },
  {
    "url": "assets/js/135.8f555e55.js",
    "revision": "231c53235f9fb2c4e77575bb71f0c85a"
  },
  {
    "url": "assets/js/136.5f3b5f80.js",
    "revision": "26957dab76a920c6c1d6da5fca7cf49a"
  },
  {
    "url": "assets/js/137.8df2b838.js",
    "revision": "4aaf644d632d77e5bd8d95e035e0313b"
  },
  {
    "url": "assets/js/138.b3061248.js",
    "revision": "2ec8cd55f21bdbbb16f3460069e3fed4"
  },
  {
    "url": "assets/js/139.53555ca9.js",
    "revision": "dbee68dad3412e12703433a9ead70ed1"
  },
  {
    "url": "assets/js/14.aa9051ab.js",
    "revision": "17c4f2d11c2a42dd53134eb0c60b4562"
  },
  {
    "url": "assets/js/140.bab83ea1.js",
    "revision": "760f67b22d47c68daada697b978e1e10"
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
    "url": "assets/js/143.86467ff4.js",
    "revision": "0499f5de94bc67430a731c096ea436e3"
  },
  {
    "url": "assets/js/144.54f8a5e9.js",
    "revision": "00817f2ccb62034a936d1302b461b61e"
  },
  {
    "url": "assets/js/145.bdaee193.js",
    "revision": "f311f043f1ce87a90b8552881e7e460d"
  },
  {
    "url": "assets/js/146.c2d5f3a0.js",
    "revision": "42180200e52a2bf156555b9276c5f6cc"
  },
  {
    "url": "assets/js/147.df485075.js",
    "revision": "34b135122e194913b3e37d122044c580"
  },
  {
    "url": "assets/js/148.5a021ab1.js",
    "revision": "3c4c9e70bc76778e1739fe14b1f21962"
  },
  {
    "url": "assets/js/149.323e23ce.js",
    "revision": "316d7c04a47771a12bca554b1f479f2d"
  },
  {
    "url": "assets/js/15.0cc6d2ed.js",
    "revision": "6ac56077d7d4ed82aa588eb2c499c926"
  },
  {
    "url": "assets/js/150.240508c6.js",
    "revision": "b35560fbef9fe4a3cae8223a775f18c5"
  },
  {
    "url": "assets/js/151.cd78935b.js",
    "revision": "e8028d9e6f56cf34a6da594ab0a9624b"
  },
  {
    "url": "assets/js/152.d7e1f80e.js",
    "revision": "58b1b8eb691f48b89199084b05945084"
  },
  {
    "url": "assets/js/153.30def699.js",
    "revision": "d7cf207317f543b22668d4ed7ace9d64"
  },
  {
    "url": "assets/js/154.2d0cf055.js",
    "revision": "5f516e481dff8823c2d658bc1beb274b"
  },
  {
    "url": "assets/js/155.c3882641.js",
    "revision": "5584efc952e5e0530a6695c06ad4638f"
  },
  {
    "url": "assets/js/156.cea2d6cd.js",
    "revision": "b279b2ae90a367b8663cb827033ed327"
  },
  {
    "url": "assets/js/157.a2f9a1b9.js",
    "revision": "47033230fb0a74b4caeb5ca7eb93609b"
  },
  {
    "url": "assets/js/158.20aee534.js",
    "revision": "107b74704a40e9fecc3ef4160464f670"
  },
  {
    "url": "assets/js/159.538abf6e.js",
    "revision": "c4192b5d00b17d924b0325ff2715b38e"
  },
  {
    "url": "assets/js/16.5bcffd3b.js",
    "revision": "76bd289d147c39eef19fd7d4130d3a78"
  },
  {
    "url": "assets/js/160.a3f251f9.js",
    "revision": "5aaef1ee47e43413cb665457bf3070ef"
  },
  {
    "url": "assets/js/161.7c048268.js",
    "revision": "65e451fc5149e6f74b54d41ce21cdc3f"
  },
  {
    "url": "assets/js/162.f2a4354f.js",
    "revision": "0c3ac6042a3429ec2ebff326df94ec7a"
  },
  {
    "url": "assets/js/163.4bae8ea1.js",
    "revision": "7cc68b81b31d99f701d514badcf1f6ba"
  },
  {
    "url": "assets/js/164.563a50db.js",
    "revision": "80d39cf297f4062bed6394615a614e63"
  },
  {
    "url": "assets/js/165.f5599a1b.js",
    "revision": "41aeed0387eb3c8f08afbb07c3e04d2d"
  },
  {
    "url": "assets/js/166.97bb34ab.js",
    "revision": "2ba29b9fa8697fcfd74d539147d0b25c"
  },
  {
    "url": "assets/js/167.08ff9ac4.js",
    "revision": "33f3087716e1277137b3731da2842bbf"
  },
  {
    "url": "assets/js/168.0158f639.js",
    "revision": "628c03373f66a9321aa7d04adc5f8607"
  },
  {
    "url": "assets/js/169.dc7a32bb.js",
    "revision": "a98958ee05de37f4afebc725df1a8d73"
  },
  {
    "url": "assets/js/17.f0c84fe1.js",
    "revision": "ed8db548c9cde9941d7ea3fb61f65cb8"
  },
  {
    "url": "assets/js/170.4446b54d.js",
    "revision": "55c6ed661bd27883f296f3f908482f6b"
  },
  {
    "url": "assets/js/171.7c54f5f4.js",
    "revision": "a8baaafde4ff1cb3fe08dc0fdce9ea68"
  },
  {
    "url": "assets/js/172.15eb8b5b.js",
    "revision": "c6abb8b9f998e8d0841e6d9bc35ca28b"
  },
  {
    "url": "assets/js/173.f32bbf27.js",
    "revision": "2b7a3cf9059940e80343194d6031d796"
  },
  {
    "url": "assets/js/174.1a09412a.js",
    "revision": "ddd1697cc1fc77029f5604899a550564"
  },
  {
    "url": "assets/js/175.a0d313eb.js",
    "revision": "fea8ea6abba03e75569986677e2a7641"
  },
  {
    "url": "assets/js/176.a74fbeba.js",
    "revision": "e3b8f1a4c849443705a349816b15fd4f"
  },
  {
    "url": "assets/js/177.273c4157.js",
    "revision": "3d022d14415845e010cb813bd232a68e"
  },
  {
    "url": "assets/js/178.1f9ea38d.js",
    "revision": "261317f7837054bdfbb6321cfc68aec1"
  },
  {
    "url": "assets/js/179.d112eb09.js",
    "revision": "28ddeb1ef808613efae90afeed5b9655"
  },
  {
    "url": "assets/js/18.1308eb06.js",
    "revision": "f5460a6a5bb884df4d500fb9648b7bc0"
  },
  {
    "url": "assets/js/180.3e031443.js",
    "revision": "484e2cb358dbfa9187c9eea83c816d5f"
  },
  {
    "url": "assets/js/181.4eb12d8b.js",
    "revision": "02942eceb1d88bb436fda51b743b722b"
  },
  {
    "url": "assets/js/182.04bf1dc2.js",
    "revision": "d37d16bb8907cb50a409ab73a597ce9a"
  },
  {
    "url": "assets/js/183.ec88e130.js",
    "revision": "7ab4226b2f529e43b16ddaf67b86ddc8"
  },
  {
    "url": "assets/js/184.13d6b082.js",
    "revision": "051e983f8fd908a44209217b40abc00f"
  },
  {
    "url": "assets/js/185.437b8381.js",
    "revision": "f3a0b9109af1a6e71be423f890c7a38a"
  },
  {
    "url": "assets/js/186.2d5847b3.js",
    "revision": "3c6f7b90e44b578d423bc8f3dc3ded1f"
  },
  {
    "url": "assets/js/187.59d5e959.js",
    "revision": "0326e7b8da5412452f18d19d1e4ff00a"
  },
  {
    "url": "assets/js/188.01682605.js",
    "revision": "72b2b222fa4ccb3b28e7df4cb8db2a9b"
  },
  {
    "url": "assets/js/189.2e11c7ff.js",
    "revision": "e8639315ca313eda16feb3b30cf20b3c"
  },
  {
    "url": "assets/js/19.de41f3a6.js",
    "revision": "68835b0e49181935b1feeb336dcd4edc"
  },
  {
    "url": "assets/js/190.050561ec.js",
    "revision": "6a652b41b3ff223150201328911bca64"
  },
  {
    "url": "assets/js/191.807db22e.js",
    "revision": "5e4ccd55569614cba633000bc11a3a18"
  },
  {
    "url": "assets/js/192.d324fb45.js",
    "revision": "e5f522350934aa3808268119cf147595"
  },
  {
    "url": "assets/js/193.5c1eacff.js",
    "revision": "77d18984af53f5bb6a36c76b0d57185e"
  },
  {
    "url": "assets/js/194.62e2b6a4.js",
    "revision": "982bfcca010ab93cf8c2b0e5e5944dda"
  },
  {
    "url": "assets/js/195.62ed808c.js",
    "revision": "d60a0fab6a1b06781b999df0b3bbbf68"
  },
  {
    "url": "assets/js/196.916c420c.js",
    "revision": "8340d6c3e9b5593faef4418b3cbaeeef"
  },
  {
    "url": "assets/js/197.4ffa376d.js",
    "revision": "bb6b3164651df5874ad783fc6a08930b"
  },
  {
    "url": "assets/js/198.4b1d2325.js",
    "revision": "ecae26aff2d36c5eabbb9a376503153e"
  },
  {
    "url": "assets/js/199.724afe75.js",
    "revision": "719376f9da8a0a5ce517512ede4ec323"
  },
  {
    "url": "assets/js/2.797e8bbe.js",
    "revision": "e429e92b34fa81bcc29a5652fa589204"
  },
  {
    "url": "assets/js/20.f3bf0100.js",
    "revision": "1ae47062ba9c1e83d650d23fe03b452f"
  },
  {
    "url": "assets/js/200.9f3e53d0.js",
    "revision": "aee3c3bdfb434326e8fcfd453200b3cc"
  },
  {
    "url": "assets/js/201.9d2f5c8d.js",
    "revision": "9ef8ce5544e1712331352a17ecc3e6da"
  },
  {
    "url": "assets/js/202.81751111.js",
    "revision": "2a6162baf64ce8a4d431220acc01ca2e"
  },
  {
    "url": "assets/js/203.e37c0c74.js",
    "revision": "e1d81957a07a95e3fe9feff3df080c17"
  },
  {
    "url": "assets/js/204.1d4abd90.js",
    "revision": "bf4141f1f5a75bc7fc7d781e9c04bc08"
  },
  {
    "url": "assets/js/205.8633e1f6.js",
    "revision": "8a8e1dbe7cceae08baeea778b6c25967"
  },
  {
    "url": "assets/js/206.881da9d9.js",
    "revision": "92697c34cd545e584e138295b6787326"
  },
  {
    "url": "assets/js/207.25a6dceb.js",
    "revision": "b7cc91f21735be632d7ae9691c600733"
  },
  {
    "url": "assets/js/208.1ccd005c.js",
    "revision": "690fb458c436db7680521f6d317a3fe4"
  },
  {
    "url": "assets/js/209.f98a8c40.js",
    "revision": "bd34b17dfeabd200360bcab1dee15075"
  },
  {
    "url": "assets/js/21.97de1a08.js",
    "revision": "25150f48bcba4c9f23623242b4c001d0"
  },
  {
    "url": "assets/js/210.bfb51593.js",
    "revision": "58a8e57930501a35a67f1a0c8b94753e"
  },
  {
    "url": "assets/js/211.9286cc75.js",
    "revision": "528f0f009e49c749268affbdef441606"
  },
  {
    "url": "assets/js/212.7d148033.js",
    "revision": "629cbc84ad25b7dbfb61c3619f035f28"
  },
  {
    "url": "assets/js/213.f35f0c36.js",
    "revision": "292ef09077a027649170621203167ef7"
  },
  {
    "url": "assets/js/214.93597fb2.js",
    "revision": "f9bfa30e36241b272081e1d285b1b79c"
  },
  {
    "url": "assets/js/215.3f14fd51.js",
    "revision": "370bacee77638414e79d2872efdfe1d5"
  },
  {
    "url": "assets/js/216.fc56fbd2.js",
    "revision": "850876ff5593eecc578dcb4a81495a3b"
  },
  {
    "url": "assets/js/217.bf8a175e.js",
    "revision": "5e4e5096a9e2aa83b375364cb1e371d3"
  },
  {
    "url": "assets/js/218.1b2fe445.js",
    "revision": "72e8ae61ac3dcea60c9414f016c51b53"
  },
  {
    "url": "assets/js/219.cbd35127.js",
    "revision": "5457c935e55c1a1131ff7c996b61b59a"
  },
  {
    "url": "assets/js/22.91ae40ee.js",
    "revision": "7824ebafc99e79f1586f9dc32c0e4de0"
  },
  {
    "url": "assets/js/220.4a2aa7ed.js",
    "revision": "6b7437f7eb0bb88ee087f46bdb795e3a"
  },
  {
    "url": "assets/js/221.fb51d385.js",
    "revision": "3a82c6827083a954cc1f17070402f3f4"
  },
  {
    "url": "assets/js/222.47d10b3f.js",
    "revision": "71df959f3ed351ba5cab2ec6538fda83"
  },
  {
    "url": "assets/js/223.924659e4.js",
    "revision": "a8f9ee38c6cac2b8358fff591693de88"
  },
  {
    "url": "assets/js/224.84614b8a.js",
    "revision": "79de5731794ddb6579eda74bc58c0750"
  },
  {
    "url": "assets/js/225.6864b6e9.js",
    "revision": "53e3b0304bfb6ca97a70f759fa8954ce"
  },
  {
    "url": "assets/js/226.fb37cd78.js",
    "revision": "2e1deb338a5057f5a42f12c67f2430ed"
  },
  {
    "url": "assets/js/227.37d17850.js",
    "revision": "63ba1cf8b6afa644b1c2feb4be644f58"
  },
  {
    "url": "assets/js/228.9352e5e9.js",
    "revision": "ceb21e6279e0d6b95d6f11c348876221"
  },
  {
    "url": "assets/js/229.bb36c001.js",
    "revision": "2f614d4de0aed6d5d925410b54bf12ab"
  },
  {
    "url": "assets/js/23.35fdc02e.js",
    "revision": "d82265969251a2b30058a484fa8d8652"
  },
  {
    "url": "assets/js/230.b7459926.js",
    "revision": "e0becb54822e3011ee06a19603308724"
  },
  {
    "url": "assets/js/231.5db62793.js",
    "revision": "3a865b69923c50e399d00b6283e73d22"
  },
  {
    "url": "assets/js/232.9b955d86.js",
    "revision": "e7dc5b085e132a28c0fdac9a0a054c28"
  },
  {
    "url": "assets/js/233.413ef914.js",
    "revision": "6231d34aa134a0e1ddf1382b112f5c5a"
  },
  {
    "url": "assets/js/234.a6add8bd.js",
    "revision": "4c96609350cf68e1c37a2afd068488fc"
  },
  {
    "url": "assets/js/235.9ceeb666.js",
    "revision": "703c67ff4ec05c1c0c3dab560e30b42e"
  },
  {
    "url": "assets/js/236.4fb24846.js",
    "revision": "47a4421fdef995e4b38821c49fe0b694"
  },
  {
    "url": "assets/js/237.fcd91365.js",
    "revision": "e1b977d79319ac6b7a771f26e6d377e1"
  },
  {
    "url": "assets/js/238.53c702ce.js",
    "revision": "ea807daf786cf4e94fd32f943ea18dd9"
  },
  {
    "url": "assets/js/239.fff47aac.js",
    "revision": "863b7b550a9ad949fcaacb34065e65db"
  },
  {
    "url": "assets/js/24.002eca26.js",
    "revision": "77128b598d49b248be4f627b83507b0b"
  },
  {
    "url": "assets/js/240.1930d025.js",
    "revision": "7fe89cfa1d8f8fb17ed44f6d3dbec90f"
  },
  {
    "url": "assets/js/241.b4b555f1.js",
    "revision": "670b7a4ac13d3b0aa7cd3c770f09d454"
  },
  {
    "url": "assets/js/242.e2cdb931.js",
    "revision": "717eb4788805dc23584620593c59d6fe"
  },
  {
    "url": "assets/js/243.e5d69861.js",
    "revision": "39998b34e63746e70703c797228dcc5d"
  },
  {
    "url": "assets/js/244.e6d1ad9a.js",
    "revision": "fd1d852a8f93c63c6e800864657ccbee"
  },
  {
    "url": "assets/js/245.7780c888.js",
    "revision": "991f88a3383f5379bc5f8c5c94ae1a19"
  },
  {
    "url": "assets/js/246.cc5830cf.js",
    "revision": "dba1418ceeaa96bf6fe090dc93da8043"
  },
  {
    "url": "assets/js/247.bedc680a.js",
    "revision": "fe968fd89eb5868fede67394c0587116"
  },
  {
    "url": "assets/js/248.edd4a568.js",
    "revision": "4c4827a02d0c836d1ff989a36d11f31c"
  },
  {
    "url": "assets/js/249.cb6ff650.js",
    "revision": "1730e9e50e47ec7776c5b0aecd471659"
  },
  {
    "url": "assets/js/25.b6b37daf.js",
    "revision": "3d1fc545874127c91f808322e42b1362"
  },
  {
    "url": "assets/js/250.2d427253.js",
    "revision": "7366d0da99104f0f61f48c6f9abe2052"
  },
  {
    "url": "assets/js/251.9c984624.js",
    "revision": "4ed35bdd9e680494927358aef6539c9d"
  },
  {
    "url": "assets/js/252.0c9879a5.js",
    "revision": "85cf23d644cc4bbccde1b94ceded2526"
  },
  {
    "url": "assets/js/253.86f7332c.js",
    "revision": "8056e7e7a8cdbf436a78063dfd234b10"
  },
  {
    "url": "assets/js/254.66c4a3bd.js",
    "revision": "06208c3992de30b78a0e4e60d9bb4f17"
  },
  {
    "url": "assets/js/255.aea5684b.js",
    "revision": "c76aebf22a832ca9bc751724f57a7319"
  },
  {
    "url": "assets/js/256.9ca4fa90.js",
    "revision": "d4d1b592828dd3ff7e5a3531ec69d0b6"
  },
  {
    "url": "assets/js/257.7ec71b1d.js",
    "revision": "5b19b7e113b6bfa138915762ab09c980"
  },
  {
    "url": "assets/js/258.1a5db6f2.js",
    "revision": "d6b6b4e3e7f82ac50d2d6080bed11f97"
  },
  {
    "url": "assets/js/259.c5a78bd6.js",
    "revision": "8e50da9a9942880175dd8267c6b71bff"
  },
  {
    "url": "assets/js/26.de4b0ffb.js",
    "revision": "cbccab242cb9e5e17cbded2771eef5a5"
  },
  {
    "url": "assets/js/260.171de5f6.js",
    "revision": "1a8b1daf446ba8a0e10b565ef15f59f3"
  },
  {
    "url": "assets/js/261.5805a60f.js",
    "revision": "b75ae6f1a4bcd9638dd6db3f6b99e8ae"
  },
  {
    "url": "assets/js/262.20f73ab9.js",
    "revision": "6eb3ef149a4753fb6ee3e58fa6a8d99c"
  },
  {
    "url": "assets/js/263.a2196e9d.js",
    "revision": "92fed07a644dea089a2f21dc6317e815"
  },
  {
    "url": "assets/js/264.2e012af8.js",
    "revision": "440b05dde7e81bd6e2eef81cd20c24ba"
  },
  {
    "url": "assets/js/265.3a9ab716.js",
    "revision": "dd8c0ef3800e56b07d329c676f79cbb3"
  },
  {
    "url": "assets/js/266.f1702a50.js",
    "revision": "b882e18ee4713df4e57fab92140fc2ae"
  },
  {
    "url": "assets/js/267.4743e656.js",
    "revision": "50d0aba1f2af3f15b3487b96341d2099"
  },
  {
    "url": "assets/js/268.19119e78.js",
    "revision": "685181474a9a55039dea04bdb88bb421"
  },
  {
    "url": "assets/js/269.e3b33bef.js",
    "revision": "05a6ad507568b90e56bcfb9f556ddfec"
  },
  {
    "url": "assets/js/27.888d11a6.js",
    "revision": "39bcac610e500ad5c3fbbd94b92ebcf4"
  },
  {
    "url": "assets/js/270.a0504ce3.js",
    "revision": "d9ba96147f34a33d078c98084451c48b"
  },
  {
    "url": "assets/js/271.b0d5644d.js",
    "revision": "4a888c1a58618128b807bdd4a160d7cf"
  },
  {
    "url": "assets/js/272.7ede2344.js",
    "revision": "467e6017459a99c15165f8a00b42e84e"
  },
  {
    "url": "assets/js/273.b17899a3.js",
    "revision": "da0f5f4e855440661f5bc3da92b62bb9"
  },
  {
    "url": "assets/js/274.1d018ba9.js",
    "revision": "fe9edac1fca0012a9685a9090c7d484a"
  },
  {
    "url": "assets/js/275.087a1c6a.js",
    "revision": "50c721c1feb03ce94c11112d8e61f534"
  },
  {
    "url": "assets/js/276.c11c4c9e.js",
    "revision": "58e45769f696ff3e9bb0a31903f07457"
  },
  {
    "url": "assets/js/277.9b90aff3.js",
    "revision": "0cf0965b93eca7f1cb50ef40bc563d10"
  },
  {
    "url": "assets/js/278.fb261160.js",
    "revision": "ce4bb6460f546af5e6c5a27154d5edd2"
  },
  {
    "url": "assets/js/279.ecf05a11.js",
    "revision": "6f6aa7e03dee728407041e46e560da82"
  },
  {
    "url": "assets/js/28.d0c260f9.js",
    "revision": "d0d089da2948d9971b6c49274a97ec37"
  },
  {
    "url": "assets/js/280.376ddb4b.js",
    "revision": "c13008124d597dd1937f9325005a81c3"
  },
  {
    "url": "assets/js/281.3e60145d.js",
    "revision": "6284a26381da82ffcaf685ccbb814a9e"
  },
  {
    "url": "assets/js/282.26330029.js",
    "revision": "7e860ece1c6ce7a1c0514aa07099ae26"
  },
  {
    "url": "assets/js/283.d67f4eaf.js",
    "revision": "519dd030ea849431dd85ee27856ff719"
  },
  {
    "url": "assets/js/284.92b0eee7.js",
    "revision": "fde96001b09ec3f91dfd31233fe4fe0e"
  },
  {
    "url": "assets/js/285.790c0b29.js",
    "revision": "1f5d09c1fb22d78db0f6d6d8ce467533"
  },
  {
    "url": "assets/js/286.2c8f81d9.js",
    "revision": "8a60b939ce13d7c2ed044caaec657c45"
  },
  {
    "url": "assets/js/287.8a14cb87.js",
    "revision": "6f0a2bd1851a4c057f671d82f013d681"
  },
  {
    "url": "assets/js/288.4e2951ad.js",
    "revision": "389369f0259d9a0b8adb8210c18762df"
  },
  {
    "url": "assets/js/289.a9cd5378.js",
    "revision": "51c4362bf694c3c7d0f07702e91e2824"
  },
  {
    "url": "assets/js/29.326684f5.js",
    "revision": "5d97b9c2f281cee56c8671b350d5af15"
  },
  {
    "url": "assets/js/290.ca9bf795.js",
    "revision": "ee4ef087d5d1250d3629ffa4cafd3428"
  },
  {
    "url": "assets/js/291.3680547e.js",
    "revision": "dc2a3b71c255bcfd99f37e7e21b0d029"
  },
  {
    "url": "assets/js/292.4271acb1.js",
    "revision": "ba667815ddcb9371ea072985f56424a3"
  },
  {
    "url": "assets/js/293.b9243ec1.js",
    "revision": "fb5a85633d530e4703f559abcbd15b01"
  },
  {
    "url": "assets/js/294.84d7a638.js",
    "revision": "09938ec30ecff90b8036008f5aea2901"
  },
  {
    "url": "assets/js/295.da4ae83e.js",
    "revision": "fc0a2c65c09d7e647af3a09e291340c1"
  },
  {
    "url": "assets/js/296.e7e52882.js",
    "revision": "5b10d0855f7b6264d9d8bc8626436d3a"
  },
  {
    "url": "assets/js/297.097d3881.js",
    "revision": "ea9b5990783aa43ef429d75022a0e6df"
  },
  {
    "url": "assets/js/298.fb5daa04.js",
    "revision": "daa2ed7ba5f9ff26c194ffa277d2cfc8"
  },
  {
    "url": "assets/js/299.afcf95f9.js",
    "revision": "d645beec54a0ff4a8e60e0ad830e83a3"
  },
  {
    "url": "assets/js/3.9bd13b33.js",
    "revision": "faaa757dbbbf001fb9aa9a8d88309e47"
  },
  {
    "url": "assets/js/30.67c11ac2.js",
    "revision": "dac27ccb2125127791f7487740ad9a9f"
  },
  {
    "url": "assets/js/300.229922a7.js",
    "revision": "5e50dc23b9b1fccee65322d981429931"
  },
  {
    "url": "assets/js/301.dce4ba35.js",
    "revision": "aa875edcd7d0db27050171dc485455b7"
  },
  {
    "url": "assets/js/302.5140a0f7.js",
    "revision": "99576efa7ea0d4f952036be05efe7dba"
  },
  {
    "url": "assets/js/303.9f13e02e.js",
    "revision": "b1d931b9ed20b1ea88749c6f4e313093"
  },
  {
    "url": "assets/js/304.f1cc43b5.js",
    "revision": "e393746507c281d2e8f07f4dc549d1f3"
  },
  {
    "url": "assets/js/305.30e115bd.js",
    "revision": "11840742d94bab8549b4a71ddfa76078"
  },
  {
    "url": "assets/js/306.99e24d85.js",
    "revision": "fdcc8ecaa08321a5843138c8bd8e6fe8"
  },
  {
    "url": "assets/js/307.f63fb1e9.js",
    "revision": "0e738e30f05aca9be71d28838057d30a"
  },
  {
    "url": "assets/js/308.08f7eb24.js",
    "revision": "3f26c49352983bacce848780ad32b06c"
  },
  {
    "url": "assets/js/309.d6ea89ce.js",
    "revision": "0f3d290f58b3ec505e2ce73647094f17"
  },
  {
    "url": "assets/js/31.a2de8827.js",
    "revision": "6b8c908654b6f17655ea6b878e7df888"
  },
  {
    "url": "assets/js/310.ddeb6d52.js",
    "revision": "6e42974b5c9789c0c13ea74fbcaa485b"
  },
  {
    "url": "assets/js/311.9b8ddcc6.js",
    "revision": "0da011a4b799812619047a202403c13b"
  },
  {
    "url": "assets/js/312.82f63e60.js",
    "revision": "3074a1ca7360e104894c16a4cba03555"
  },
  {
    "url": "assets/js/313.236786e1.js",
    "revision": "0acf537c63d415b40b18b483b3881854"
  },
  {
    "url": "assets/js/314.86478cdb.js",
    "revision": "256bde1fbf48ad05a041a22b90024d8a"
  },
  {
    "url": "assets/js/315.57a5f88e.js",
    "revision": "871dcccb42c8c661c5316b35ea5357c2"
  },
  {
    "url": "assets/js/316.34c08f48.js",
    "revision": "0069bf3b34a2cabe9abc12238662e910"
  },
  {
    "url": "assets/js/317.15ce5265.js",
    "revision": "a9e796b8581c20ad1ab851933ba855c1"
  },
  {
    "url": "assets/js/318.cd12481f.js",
    "revision": "c358974f6ac127d83a901de463781fbf"
  },
  {
    "url": "assets/js/319.11a1c3ae.js",
    "revision": "04366b3d2ae9a297f1007a41a637d965"
  },
  {
    "url": "assets/js/32.bf9609f9.js",
    "revision": "21bb438614bdd852ef49475c3b70fd0e"
  },
  {
    "url": "assets/js/320.a33c74d9.js",
    "revision": "3c160f491a3d0443dbc2f4526e3b2038"
  },
  {
    "url": "assets/js/321.86315368.js",
    "revision": "11d4da8f3278fde3d22856ea5237b467"
  },
  {
    "url": "assets/js/322.ac78ec8e.js",
    "revision": "7c77edf45c7a6a18f709020bf1eccc8f"
  },
  {
    "url": "assets/js/323.402aed49.js",
    "revision": "c69bfd79efd0311e5786e489f002e6b5"
  },
  {
    "url": "assets/js/324.c22a1752.js",
    "revision": "c40817e877cd091d5ce19f8d6691194a"
  },
  {
    "url": "assets/js/325.5e5b96d5.js",
    "revision": "688932330e8fb470a3536bee698f9c53"
  },
  {
    "url": "assets/js/326.02026bc3.js",
    "revision": "6b3e58e5805a9e6fc652a0145eef3468"
  },
  {
    "url": "assets/js/327.7a73da78.js",
    "revision": "07aa35ae2b3502e9db6f6d346ffcb1ff"
  },
  {
    "url": "assets/js/328.87d85418.js",
    "revision": "70e7a91045fd46fce75b2f254cd79752"
  },
  {
    "url": "assets/js/329.5165ab5c.js",
    "revision": "0ba74fd68a9f49e76f55c3381b79385a"
  },
  {
    "url": "assets/js/33.5558573c.js",
    "revision": "efd66a4218fa672e2a2bfacded2cf4e9"
  },
  {
    "url": "assets/js/330.af8690f4.js",
    "revision": "742d6017209360bc576ec643367824d1"
  },
  {
    "url": "assets/js/331.f6d6f085.js",
    "revision": "21fa4ac26646858157b12ecbbf7a0b42"
  },
  {
    "url": "assets/js/332.2fbbec24.js",
    "revision": "7d2d21b6f0f4b3d820a2eb5129e2eec4"
  },
  {
    "url": "assets/js/333.f59e207b.js",
    "revision": "6814bde3494ee0ffd388602401c3d6a4"
  },
  {
    "url": "assets/js/334.c787e742.js",
    "revision": "60cc51ed7b74af1f77e2f66506cd5d63"
  },
  {
    "url": "assets/js/335.b79affc4.js",
    "revision": "f0128eb6a28090702399f0e0cc15d023"
  },
  {
    "url": "assets/js/336.74aa0516.js",
    "revision": "0b73034c50a51a9ecba378fd1f8895b5"
  },
  {
    "url": "assets/js/337.59af6c8c.js",
    "revision": "0816e3ab3c37f6534630b93c3941996f"
  },
  {
    "url": "assets/js/338.a4f7cef8.js",
    "revision": "171c773ef6a31dc316936b21c548cada"
  },
  {
    "url": "assets/js/339.9a0c6e09.js",
    "revision": "47dfb8f05af028437ac6b4adedad370c"
  },
  {
    "url": "assets/js/34.f58122ba.js",
    "revision": "7c1316a855f78f3bc41cb032220708dc"
  },
  {
    "url": "assets/js/340.0ad96056.js",
    "revision": "9d0c79005da598441cf8c3e040620d03"
  },
  {
    "url": "assets/js/341.03a56004.js",
    "revision": "97b334c07b4e4a7789ea3e8a30a0a89e"
  },
  {
    "url": "assets/js/342.c251fa96.js",
    "revision": "dbf9e04ba8c1f76af0bf7e66b0c755de"
  },
  {
    "url": "assets/js/343.86bf6c23.js",
    "revision": "45c7a513976b2c284cba1422ab97ec55"
  },
  {
    "url": "assets/js/344.100b731d.js",
    "revision": "578b97f7a5ce0c40280ff0a754df0a83"
  },
  {
    "url": "assets/js/345.9256d7ef.js",
    "revision": "1537eecd00200a1918d8d86889ed56bc"
  },
  {
    "url": "assets/js/346.6b02b8b3.js",
    "revision": "a64d65a9f76ba72ceeb32a3a2da035e9"
  },
  {
    "url": "assets/js/347.81163878.js",
    "revision": "0cce9afb3acae1fb2a859e0a825de939"
  },
  {
    "url": "assets/js/348.f347aea1.js",
    "revision": "d826179566ffc90ee8d126b65d30480d"
  },
  {
    "url": "assets/js/349.fb7f7fee.js",
    "revision": "0bd401a1fc1023b664107da157e204f5"
  },
  {
    "url": "assets/js/35.efc086f7.js",
    "revision": "6f29f54de0ec9da9f0cd830d212710ee"
  },
  {
    "url": "assets/js/350.8045dd97.js",
    "revision": "c7d80ca0ced38260de5345aadccece49"
  },
  {
    "url": "assets/js/351.cb5dadf7.js",
    "revision": "80bdd97e6cac1b80ecdf18c85770b6ac"
  },
  {
    "url": "assets/js/352.279b5320.js",
    "revision": "cd61298ec7fc23df0e9200d881fb9692"
  },
  {
    "url": "assets/js/353.02cd842e.js",
    "revision": "67074e4a18682d04994062bb2f219741"
  },
  {
    "url": "assets/js/354.e9c6b99e.js",
    "revision": "5ae0e0d3bacde27b2173571aa3a20c87"
  },
  {
    "url": "assets/js/355.15aa9b17.js",
    "revision": "330cfdb87639debc76d37eb8e077d964"
  },
  {
    "url": "assets/js/356.f0231db6.js",
    "revision": "55d843a37f1d9d06fbafe77f76e95680"
  },
  {
    "url": "assets/js/357.ddc16eb4.js",
    "revision": "c4a2f22cc870b6bf42f3ed7cf6f72704"
  },
  {
    "url": "assets/js/358.8195c050.js",
    "revision": "2342bcfc4dba9d7c250e321f62b062b7"
  },
  {
    "url": "assets/js/359.62acb52f.js",
    "revision": "14dfa6f2affd21b9b15611485f235a51"
  },
  {
    "url": "assets/js/36.4e94a204.js",
    "revision": "d9d8b9e38445358b88463d519efddf65"
  },
  {
    "url": "assets/js/360.7371df8e.js",
    "revision": "1f3dcdf8b4406deb5bef5d57e7543008"
  },
  {
    "url": "assets/js/361.08185371.js",
    "revision": "6465ba5d0fa0fb0ee1fe52f13200152d"
  },
  {
    "url": "assets/js/362.41fc9fc7.js",
    "revision": "f18c2aa7fe4858abab075998cade9a76"
  },
  {
    "url": "assets/js/363.fde885f8.js",
    "revision": "c9987efdc56358782e9d0f1ff4e02aba"
  },
  {
    "url": "assets/js/364.d8426962.js",
    "revision": "0e84b65dce2387484367ab65f4b41747"
  },
  {
    "url": "assets/js/365.bec8cfed.js",
    "revision": "a984c08d0ab9211fb8686a0f155f901c"
  },
  {
    "url": "assets/js/366.de7edfa0.js",
    "revision": "65d9e9a2b178ce0bf74ac71718b10f20"
  },
  {
    "url": "assets/js/367.84087928.js",
    "revision": "2460ec585eb53801b32a7fb196360dc0"
  },
  {
    "url": "assets/js/368.2d9bdb5a.js",
    "revision": "3fccc134f7dec57c2b84ac984c8bd4ae"
  },
  {
    "url": "assets/js/369.a8e5eb86.js",
    "revision": "99531e1120214cbf2406758a57e9d6bd"
  },
  {
    "url": "assets/js/37.b3cc7804.js",
    "revision": "8606447abf47f99b4673eb7c13cac8f7"
  },
  {
    "url": "assets/js/370.311a176b.js",
    "revision": "c028df57879e7a3dfc9dd9a65f64944e"
  },
  {
    "url": "assets/js/371.dc14d77c.js",
    "revision": "c6687af4c3049ea73fa2dcdb58b71e45"
  },
  {
    "url": "assets/js/372.f1e6e037.js",
    "revision": "c204f084c9484890ace6491243b4d79b"
  },
  {
    "url": "assets/js/373.747699e0.js",
    "revision": "5cc02bdc8f99e797040071e47f461ba6"
  },
  {
    "url": "assets/js/374.045eb403.js",
    "revision": "686e9c0041cc1ca457339d68a479015d"
  },
  {
    "url": "assets/js/375.2720f3c9.js",
    "revision": "257870f1f0be7714a3ea60a342672181"
  },
  {
    "url": "assets/js/376.01813d7a.js",
    "revision": "9081cb3678b86164bd8ecfb18841eb00"
  },
  {
    "url": "assets/js/377.cd3529f8.js",
    "revision": "eab16f24166feefe4c842a3ee1ae01a3"
  },
  {
    "url": "assets/js/378.b41086c3.js",
    "revision": "3f50d5a2a201bba95dd81f7698f8904c"
  },
  {
    "url": "assets/js/379.6ce153a4.js",
    "revision": "661c468908257efd7cf1b97f88cd27f3"
  },
  {
    "url": "assets/js/38.1b7acc71.js",
    "revision": "ecd9f926734d22bfd25388f97cec3f33"
  },
  {
    "url": "assets/js/380.190ad0d1.js",
    "revision": "3b5fd3a9a375de37e4dc57617111ede8"
  },
  {
    "url": "assets/js/381.f80f5514.js",
    "revision": "df2b10a80277f7c3160750106e118f5b"
  },
  {
    "url": "assets/js/382.24bc6538.js",
    "revision": "d0dc61b9508c732a8e9c8aecac060fc8"
  },
  {
    "url": "assets/js/383.3f724bea.js",
    "revision": "2eeb73506271b71099c227a2e3a65146"
  },
  {
    "url": "assets/js/384.4f95efcb.js",
    "revision": "a7ad1a759acf1f9b8eeb45a1a321c78a"
  },
  {
    "url": "assets/js/385.3b3ed778.js",
    "revision": "0b0d582183879c9ffcdabad12bd8629f"
  },
  {
    "url": "assets/js/386.c626491b.js",
    "revision": "d9d5fab32f1dfe98665138c5fd73ce41"
  },
  {
    "url": "assets/js/387.bf936d04.js",
    "revision": "979faf3c002a825000844423a057fc54"
  },
  {
    "url": "assets/js/388.e33cf4df.js",
    "revision": "24a9ea11158f93a8e7739312d455429b"
  },
  {
    "url": "assets/js/389.7bb0b200.js",
    "revision": "9c07a555bb3c169543aafae97d43cc7d"
  },
  {
    "url": "assets/js/39.303a964e.js",
    "revision": "637b057412de7919e8e8e3403dd0fe5a"
  },
  {
    "url": "assets/js/390.fa144014.js",
    "revision": "3ba7c0327a356e856da0d7c0c53c595a"
  },
  {
    "url": "assets/js/391.13ac84c7.js",
    "revision": "ddf77f85344fac1b0c12f6e3389d8d89"
  },
  {
    "url": "assets/js/392.08b00c8b.js",
    "revision": "7b512419dada86c7ff9c0229ee9f1290"
  },
  {
    "url": "assets/js/393.3a038467.js",
    "revision": "b66b874d8e3e48cb26b148f0856add90"
  },
  {
    "url": "assets/js/394.273717e2.js",
    "revision": "bd1188cb59d335b81d126a0496c11e82"
  },
  {
    "url": "assets/js/395.0a30754d.js",
    "revision": "f6559b8d366b3f6b73d6bf3389df919d"
  },
  {
    "url": "assets/js/396.ac22c5bb.js",
    "revision": "55865a2e34a0dd115be447da60c23d8b"
  },
  {
    "url": "assets/js/397.be935a11.js",
    "revision": "02fd6936c4144b5d2f0e77f2f995588e"
  },
  {
    "url": "assets/js/398.8e147d63.js",
    "revision": "119ecceb35c06bd849c9d24c7bf20ef2"
  },
  {
    "url": "assets/js/399.ef28a35d.js",
    "revision": "953ccf739c7d05ff75a3edd087e6852c"
  },
  {
    "url": "assets/js/4.9cecc191.js",
    "revision": "2a6d0a507a02420ac80b9f6911609427"
  },
  {
    "url": "assets/js/40.581c57f1.js",
    "revision": "422bf2daac7353d12fbedab578c898e7"
  },
  {
    "url": "assets/js/400.2588dc9d.js",
    "revision": "9bce778cf79560ff1360a9af4ee509cc"
  },
  {
    "url": "assets/js/401.df1151c1.js",
    "revision": "f3c379073d23800b534fa5bdf95ebeeb"
  },
  {
    "url": "assets/js/402.cddbf530.js",
    "revision": "647570d7ae8a2ceae0abd9a072a10666"
  },
  {
    "url": "assets/js/403.c4b677f9.js",
    "revision": "9854b6e5d1f8bb492154268d7bc92729"
  },
  {
    "url": "assets/js/404.1477cecf.js",
    "revision": "f1c3aaa3dc76479df723a2ceefda1575"
  },
  {
    "url": "assets/js/405.6185f2c1.js",
    "revision": "aa7fcbe6dfeac751c4c062b8aab80d92"
  },
  {
    "url": "assets/js/406.b5641d26.js",
    "revision": "7699385a2d33e68e85fae5002df686ed"
  },
  {
    "url": "assets/js/407.568675a4.js",
    "revision": "1b7ab92a3b5ca14a715d46d4d859dde9"
  },
  {
    "url": "assets/js/408.e00566b6.js",
    "revision": "d85c4cb6675fdab77892657b95f924dd"
  },
  {
    "url": "assets/js/409.c95a64cf.js",
    "revision": "baacdb4b60b45e99679a43f686cf76fb"
  },
  {
    "url": "assets/js/41.9f62e14f.js",
    "revision": "d5c0b8d902b39f1129d57c1674623b7b"
  },
  {
    "url": "assets/js/410.d8f3c53e.js",
    "revision": "81f8ed67201f96d340cd2a61d5ab932b"
  },
  {
    "url": "assets/js/411.2d639dcd.js",
    "revision": "59be9a3ed4b9a335333fdfeff97eead1"
  },
  {
    "url": "assets/js/412.14936e6f.js",
    "revision": "93f5a470bf03fbeb345189019620cb84"
  },
  {
    "url": "assets/js/413.70dcaa34.js",
    "revision": "63df48709a36d85b2eab26ae51258098"
  },
  {
    "url": "assets/js/414.6d00c5b6.js",
    "revision": "53dac11cb854d751fcb2d8e1e5164531"
  },
  {
    "url": "assets/js/415.41dd364a.js",
    "revision": "c1399f17ff45e2d29e437a6f0b327210"
  },
  {
    "url": "assets/js/416.46043103.js",
    "revision": "973a336d0e26432dfc77827068dd14aa"
  },
  {
    "url": "assets/js/417.22974728.js",
    "revision": "3bf64a0e0dd18882cf669a2cb86100b1"
  },
  {
    "url": "assets/js/418.d031bab0.js",
    "revision": "55a5118f317eb0b8a4008938c4adde80"
  },
  {
    "url": "assets/js/419.8802ba4d.js",
    "revision": "045a29ab0f5b17c05ab034ace17ecb83"
  },
  {
    "url": "assets/js/42.fc3ce364.js",
    "revision": "927c79ee13c9cf0355adc877d03e6e49"
  },
  {
    "url": "assets/js/420.ec532dce.js",
    "revision": "710e4ac195bcfda3e64943f1e0e2c31a"
  },
  {
    "url": "assets/js/421.5121c6fd.js",
    "revision": "bf2bd62438b09737d8fd95aaa5be69d5"
  },
  {
    "url": "assets/js/422.f7c9c8e6.js",
    "revision": "ee6d23c8b89825ba066ba8a400a73373"
  },
  {
    "url": "assets/js/423.2b4b7693.js",
    "revision": "472ec24f5bbd0285928e82e3ae70087a"
  },
  {
    "url": "assets/js/424.049aa42d.js",
    "revision": "de4be2df0acd8cd812039ae179784dcb"
  },
  {
    "url": "assets/js/425.3a90169f.js",
    "revision": "6d8910b84bfdc6bab983c41b05253e3c"
  },
  {
    "url": "assets/js/426.0c959806.js",
    "revision": "2924e48850957b1035fe6fa05a3ee2ed"
  },
  {
    "url": "assets/js/427.204c884a.js",
    "revision": "6c3ca7962d2a7fae11f77992d53410da"
  },
  {
    "url": "assets/js/43.aba8d059.js",
    "revision": "7fcef5001e49edc72581165679a5417e"
  },
  {
    "url": "assets/js/44.f0c1b7c0.js",
    "revision": "76385c78d2189d77dbf487544bc83964"
  },
  {
    "url": "assets/js/45.0ff2c969.js",
    "revision": "7c3d84b6319b40457d6ca9fb0c1fb4e1"
  },
  {
    "url": "assets/js/46.2f70b718.js",
    "revision": "6fbc6f1285fe6f6f9ac0ab8075239f7f"
  },
  {
    "url": "assets/js/47.59555d34.js",
    "revision": "114ec5dbd0416b2fc9a4ebf3f7f26101"
  },
  {
    "url": "assets/js/48.d6621b19.js",
    "revision": "38a5f4341d670b1624f0cfa0f3932e09"
  },
  {
    "url": "assets/js/49.1abd5881.js",
    "revision": "3fc503093e477fda68ded7ea3bdcdf99"
  },
  {
    "url": "assets/js/5.bf82e7c5.js",
    "revision": "0af1d68737f96d29563a48496eab8b28"
  },
  {
    "url": "assets/js/50.a88966a0.js",
    "revision": "4a61e20c3402f0ec679e3d9397b64906"
  },
  {
    "url": "assets/js/51.2fe30b82.js",
    "revision": "5a03875e49454aa2582e9b6fd9f5e0ac"
  },
  {
    "url": "assets/js/52.b97e77ef.js",
    "revision": "73ca3dad87b453a0561a865199b5e1cb"
  },
  {
    "url": "assets/js/53.035aec5e.js",
    "revision": "0e4e652d403ddf224e6bbe5b1ab97938"
  },
  {
    "url": "assets/js/54.e5d7e1a1.js",
    "revision": "4cf7d05ab0f2108d26fed4358edcae73"
  },
  {
    "url": "assets/js/55.4109f758.js",
    "revision": "1f563f79bd9838c964097922fea2fc2d"
  },
  {
    "url": "assets/js/56.cc842bb1.js",
    "revision": "d86f9ce414ae7604299f4ec7a85838cf"
  },
  {
    "url": "assets/js/57.6e836307.js",
    "revision": "b90ead89c37361fa700e26e9428bdd48"
  },
  {
    "url": "assets/js/58.800650c6.js",
    "revision": "88242737674deb7864d1870c3c5e6b61"
  },
  {
    "url": "assets/js/59.ddc0dcd3.js",
    "revision": "6bb905d141db3c41a71169f8b2e6a0aa"
  },
  {
    "url": "assets/js/6.311b87e3.js",
    "revision": "2768ced8e1a48f483de3c1ab9bfd1ea6"
  },
  {
    "url": "assets/js/60.50ac1d88.js",
    "revision": "fe432a8f1f68b79f8568760af63bf4a1"
  },
  {
    "url": "assets/js/61.1d482e1e.js",
    "revision": "46510e1fb750cbc5957b81d2b4965214"
  },
  {
    "url": "assets/js/62.c9a1a1f8.js",
    "revision": "f8ae69c5c639f18f2d5a6d30c5afc734"
  },
  {
    "url": "assets/js/63.5dae0afb.js",
    "revision": "51b596c4ca35e3cbb935fbca26bb5279"
  },
  {
    "url": "assets/js/64.616998dd.js",
    "revision": "3da049cb60bc347e14af7246f48b918b"
  },
  {
    "url": "assets/js/65.3aa61282.js",
    "revision": "ea339bedd17e0717dd0f206398d3c008"
  },
  {
    "url": "assets/js/66.23a97f38.js",
    "revision": "3f08a1d9f23de6fa6154fe513c71cae7"
  },
  {
    "url": "assets/js/67.0ecb3b76.js",
    "revision": "ae37d8cc9b3f1d3effbb016aaa6b3034"
  },
  {
    "url": "assets/js/68.a6690ef6.js",
    "revision": "afb6c0f517f84069be187ff9ad464342"
  },
  {
    "url": "assets/js/69.1df5e538.js",
    "revision": "4d4a9b92717cd62007cfb6ee6b33c53f"
  },
  {
    "url": "assets/js/7.3daa03bc.js",
    "revision": "9b66aca98ec46450ae950ec2dab3f4db"
  },
  {
    "url": "assets/js/70.385752d6.js",
    "revision": "9ac1f97096fc49350fcb3271e8dcb2a1"
  },
  {
    "url": "assets/js/71.ca511673.js",
    "revision": "5b85c2c6d2645e5511524ca4d6fa79ae"
  },
  {
    "url": "assets/js/72.2ab2d53c.js",
    "revision": "802c457710a4c878e29cc46f63e252cd"
  },
  {
    "url": "assets/js/73.6808c440.js",
    "revision": "7313e1d1c9b43e9799dbacad8a86bc4f"
  },
  {
    "url": "assets/js/74.3e81c321.js",
    "revision": "00aa3d94188778f6107ec1d501ed90a9"
  },
  {
    "url": "assets/js/75.ab199f4a.js",
    "revision": "11072f797434f0b90651334e9dc84100"
  },
  {
    "url": "assets/js/76.94a50f42.js",
    "revision": "7ca9aca0d6763705ea2da77557295aff"
  },
  {
    "url": "assets/js/77.bcde07f6.js",
    "revision": "446af12e8912414631ac371fb0a51daa"
  },
  {
    "url": "assets/js/78.8fb3525b.js",
    "revision": "a032732b180236e7f1a2f00c99de75c2"
  },
  {
    "url": "assets/js/79.6fb2aed4.js",
    "revision": "f3f17c6df17dcaed0f654b7a5fbdf65a"
  },
  {
    "url": "assets/js/8.f6f0dabf.js",
    "revision": "f746ed661da79f92a704e2b8f9aabd46"
  },
  {
    "url": "assets/js/80.e37ff3f0.js",
    "revision": "64a79bcd21dec753227e7f71f18bbe6c"
  },
  {
    "url": "assets/js/81.7ad51afa.js",
    "revision": "8e054f2ec099f289010d081faffc500f"
  },
  {
    "url": "assets/js/82.82e5389f.js",
    "revision": "c4dd48e595a569126c8e8109ee0d468e"
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
    "url": "assets/js/85.ccc1fa7e.js",
    "revision": "7e644db40cf15a6d650bec495455b909"
  },
  {
    "url": "assets/js/86.dbec5865.js",
    "revision": "407cd28f810ed0862b8fc49896b67a5f"
  },
  {
    "url": "assets/js/87.dc8b107f.js",
    "revision": "9b2dd50d95773b2186f1ceec14ad5f0b"
  },
  {
    "url": "assets/js/88.7b2af5be.js",
    "revision": "88fbb2efc811f311e0b04ed93e28dd3d"
  },
  {
    "url": "assets/js/89.57c79780.js",
    "revision": "ca1a36cb3f4901f34e9bf691de5d34e8"
  },
  {
    "url": "assets/js/9.4d4d8e36.js",
    "revision": "0951d8e0ad64af8bd4095e20c969b0f5"
  },
  {
    "url": "assets/js/90.4dcd68d0.js",
    "revision": "03a46ff2d88ac255463157b2fc1edc30"
  },
  {
    "url": "assets/js/91.6bf0812b.js",
    "revision": "e9b84d8b594b6719c0cb6f9949095083"
  },
  {
    "url": "assets/js/92.77307131.js",
    "revision": "17a7b88fc104fbf79b453adaa7d959b6"
  },
  {
    "url": "assets/js/93.2bdc5f76.js",
    "revision": "dbdc48014536c0258ef7958ed46268cb"
  },
  {
    "url": "assets/js/94.1488a2d5.js",
    "revision": "99466f21e7020bcfc4346af75858e051"
  },
  {
    "url": "assets/js/95.3f132bfe.js",
    "revision": "fb6610cd3eb661245a783bd6b6a7f60e"
  },
  {
    "url": "assets/js/96.8e73c59c.js",
    "revision": "23fe999336175ad1ccc848a60b74e93c"
  },
  {
    "url": "assets/js/97.c53ffa99.js",
    "revision": "adfae9730ee11eb77e29eff96f3031e0"
  },
  {
    "url": "assets/js/98.4d129b78.js",
    "revision": "43dda5815a7651de79e45178533747b0"
  },
  {
    "url": "assets/js/99.1fa2fde1.js",
    "revision": "3c888cba43aea8fbc4a042bba63dc0b2"
  },
  {
    "url": "assets/js/app.d08c182c.js",
    "revision": "825d7feb3a6df0927757d8851c0116c9"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "a3d8a1e3fed5aa4975f9cf2e2a54ffee"
  },
  {
    "url": "blockchain/solidity.html",
    "revision": "03475f909f23966ef73cc00a80d9b2be"
  },
  {
    "url": "common/architecture.html",
    "revision": "16a02bb4332944c636e39ad1d3bde7c5"
  },
  {
    "url": "common/cache/cache-apply.html",
    "revision": "34247e4359b3e3283455dbad57972201"
  },
  {
    "url": "common/code-structure.html",
    "revision": "2822e6c9525b630fb7530ea706aae1d4"
  },
  {
    "url": "common/crawl.html",
    "revision": "3abd51832602b7acf91b791977344fa6"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "39c8d9e05bbc215404831d5a138b6982"
  },
  {
    "url": "common/debugging.html",
    "revision": "2533093a79197271fa85038bf790f8b5"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "6f4477e088884c3c3a967014943a39ac"
  },
  {
    "url": "common/document.html",
    "revision": "dbd6fcd99f2c5ae8c1f6f42c5ea8e82a"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "8765cbb956381dd0ad9a3e27b19f0a92"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "7f3ec3898b7f9449c61cb66a062edd0b"
  },
  {
    "url": "common/index.html",
    "revision": "9ae6f6491a63fb20d379cec6f96eb70a"
  },
  {
    "url": "common/optimize_be.html",
    "revision": "f595d8d4a47e02777e9dea2f63389b7c"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "0102f4b10db7de8898c965599b6e2d45"
  },
  {
    "url": "common/realtime.html",
    "revision": "2a492d26be9dbd74e927f01ae86ba820"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "1da99744d00005ab42bfdc9fe9e9c00f"
  },
  {
    "url": "common/refactor.html",
    "revision": "cfa79f7abd92dc557cdbef13c159efa6"
  },
  {
    "url": "common/security/software-security.html",
    "revision": "568068c62b9b1e8a22db8faebc6b4491"
  },
  {
    "url": "common/seo.html",
    "revision": "debf50ed2aad5bb3a8c4c2645604ec3f"
  },
  {
    "url": "common/use-case.html",
    "revision": "f03efa706dc1f1c31d0478ab31759444"
  },
  {
    "url": "css/box-model.html",
    "revision": "667dcbf5b4cde39ca0cad587b92059b1"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "d88e2bb3938c33edb66d1b4f3e4a6eb6"
  },
  {
    "url": "css/css-flex.html",
    "revision": "1acf5bd2fdc9e45f27c6be6d670c603c"
  },
  {
    "url": "css/tricks.html",
    "revision": "c7aa3b9b9ba7b88c10a784bab0fa48be"
  },
  {
    "url": "db/architect.html",
    "revision": "1c44aacbeb8452b142c0db01dae853a6"
  },
  {
    "url": "db/cassandra.html",
    "revision": "a6738cc11f74a6a785722d1c63e7f8b7"
  },
  {
    "url": "db/couchdb.html",
    "revision": "b668eee834a8ec73d3fc387d26622e17"
  },
  {
    "url": "db/db-concerns.html",
    "revision": "114ad85c445f6f1ecd9bfa8f712d5f40"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "0defa37032920ddce91442cee93255ec"
  },
  {
    "url": "db/db-vs-blockchain.html",
    "revision": "7553d41b1409ca623b6267cabc01d51e"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "d24be1be287a0d76cd4eec89d02f993a"
  },
  {
    "url": "db/id-generate.html",
    "revision": "df28e912fd539d0054c29aea342757f3"
  },
  {
    "url": "db/mongodb.html",
    "revision": "0c67798680c69882015047fce47c9a76"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "1e09db5da4aadede35a247d8f252d7a4"
  },
  {
    "url": "db/nosql.html",
    "revision": "8f209a2744950df6d67093dd43b69c44"
  },
  {
    "url": "db/optimize_db.html",
    "revision": "5cd9f372305a5c9fd6a3838dae4fd685"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "c85801c2787d436a2e4e6a075c1b97e7"
  },
  {
    "url": "db/postgre.html",
    "revision": "eb564c3464b962d4d0b6b2a7477d8934"
  },
  {
    "url": "db/redis.html",
    "revision": "fb18fb35c16570b1e067d08e60d51ddd"
  },
  {
    "url": "db/storage.html",
    "revision": "fa27b7f730419e356c8da9b46687f523"
  },
  {
    "url": "db/tx-isolation.html",
    "revision": "a00a90c8ac1b5f876485e05f44261461"
  },
  {
    "url": "db/use-cases.html",
    "revision": "0e167a3d1449c5c484d9af69741c3efb"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "bd30029159909ab38b3157d8ac303666"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "550b7bbf0622894c2c3bf2ff2284f71a"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "03ce1d2f646e42db8e7bd7f6eb0fd9f0"
  },
  {
    "url": "fp/fp-ts.html",
    "revision": "1eec6296e3c8ac1c0006f35416d55e86"
  },
  {
    "url": "fp/functor.html",
    "revision": "c0e149eb7136851a16e68555dbbe4b33"
  },
  {
    "url": "game.html",
    "revision": "fe1cfc105073cbc459e2f799994a247a"
  },
  {
    "url": "geo.html",
    "revision": "f2f6386b60842d8cbe8c3038e15a9150"
  },
  {
    "url": "go/clean.html",
    "revision": "d1df20dafb4daab14b680506d20c0cd0"
  },
  {
    "url": "go/index.html",
    "revision": "5830ee534942e8a676dacd84a994f83b"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "9c6f91aa6ff20ff45f99b863cfb6b766"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "383967814d2ef0f3f55dfb2f446eeb08"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "d4899a028deb904d0a7a3f05323a5580"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "5a6fe54c902310a75f12e8292027c8d3"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "0cf3d3afe1686270c11a250b6e9877c9"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "8e55ab3d8b0ea959bae4fa2d71aa7714"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "0e2c05800623155f71f3e812b3fcf1d3"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "b6fd4606278eddf5aa3af727c8412525"
  },
  {
    "url": "index.html",
    "revision": "f1dc6541ac2c435ca46ddaf7112e5d74"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "ef3419ac449ee6e910429a66f32bb2d0"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "9a14afadd62afdf5abe1cbba076dcdcd"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "5614b2f66efbc39fef2a8716f349c7a7"
  },
  {
    "url": "javascript/closure.html",
    "revision": "d0c42dcc951d71010d915c105e1dcbc5"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "29a7bbaf9462a34ffe8d6d54d1db695a"
  },
  {
    "url": "javascript/eslint.html",
    "revision": "8484f8c945083e93e1dd75370ca4b989"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "df0d3798a6afd239048dfb9b278e3cf2"
  },
  {
    "url": "javascript/nestjs/nestjs-cqrs.html",
    "revision": "3409249a0e6d00da6a80b636d32d3270"
  },
  {
    "url": "javascript/nx.html",
    "revision": "99a4cb2569fab7f28f5049cd8e0f4799"
  },
  {
    "url": "javascript/rxjs.html",
    "revision": "f13616b5c3781d968d6b7b03b3e38a51"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "192f7b0025e66946b26061e41b6529fc"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "ccbd5e7c1c69a0afd8a9be242024cdea"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "815e0caef0bff92d0b2d1c4707be1be9"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "12f7175bc843bb41415ceabd21778930"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "9cfe0a2e566e21416aec199d91c9f419"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "3d7d83d6d091b4dffb6ba8baa4b94d16"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "d8c9813437419398996dc25f8e03f755"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "5c32ec520203f6f92e8505bd0865856f"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "cf49e336fd32225ccbd6d208a2bdedb6"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "0ab85d0a045f71cc2f40919d8cb46f53"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "1eea48741cbcc11b93b6b6c7dfe76a84"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "eb50e6c06e8d716d00b3206b84bd8ee3"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "a45c377655f5c39147b982f01705ee2f"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "1248b92f45e0d12597999a247fca4479"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "78679baddb46d7fee8d705d6159e4a55"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "80dc24ce4cc534bb56b79c303a866920"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "b1041325f5c2143a4a6f979cc99b810b"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "bfaced65a9c73e2c8b54030b00e6548f"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "45bad2cae9d3099d874614ae074ecd96"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "bbe82ff0653bad314dd01444ad52aaaf"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "0a9afd1983d0f066e684ecaf629c7953"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "cf800e53b1d07b6795167c67b066ac40"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "658c882b66e61f3615fb798d00260eae"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "fd6ec77427588d981087fc5f2ca86777"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "270c1f4ef4e7e26073024c76798f631d"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "8019cc3e33a23c125d42a4fa0dcdc305"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "180938357c016d8c7d723c5a27340d12"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "e2fc85a7000d5b6c3f13daba71ed04db"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "5ef8f6c8993b562535ffbb8eabb47ed6"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "09a543baa74ad5b72da635c7d7cce714"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "99ba820ebc25389330e43e51d9a6a772"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "5d0b2976548a0fd4ed5423cd15fa039b"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "ed7e64bb73ac8e84a9f0b821d18d14d9"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "1a5808ffaa439ee483905c3fd6cedd96"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "cebca0c822fb4dc1513317d36eea4f75"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "b00673a0d139312a956cf554eb70205b"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "874e1e5c924877bfa314c4e111883f49"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "71332df85951cf4495680f50d5e10c72"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "dab6244fa545d3c88b55db4fb56e0fe8"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "c04d7b788e55476cb5691a8e10545887"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "a3c96b9c506f8df992b900545eb66564"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "d485ef5270d5557a3b56bc9235c86573"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "cc8cebc52219076f389b6d6f819e95b7"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "16c3046016566aadb4106610561b5c35"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "bd5fb999faba1f8b3636d201c4696d6b"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "15e0bd94198a3bb4bb279024e86aa413"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "bf3abb98b6b5e7dd414f1808c1693ae3"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "8691604da6504af140efd062e96ee3d7"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "7a9741adf5fd3696b4467ad3cfb260de"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "16982252ea4fd65369f2844c0e2b253c"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "682a8abf42463429edacf67221cf00b5"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "8b171f96dd9ea12e0ea95810ff66059f"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "7c2144620d5efa8023a4c4f7baafc77b"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "4ba4ce0a4a990f3fb39d2ef599dfbe53"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "17803cacd50c182f01832a0e80c57ae0"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "234c6a1dbbb436954491e390f36f483b"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "8533821ad235a8bf9589491c67c69e28"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "840b98b45acf180fe7d976c10188f935"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "0a1c3f316e779c596d828e9dcd620d97"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "610645013ef4b8b9c42d3eb919d0df44"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "ca87971a1aa1d7106a584b2766dbc749"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "3c14b080142c27abd6c53531f035309f"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "4fe80f8abae6135c203fcbefa1937095"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "96cb4aeeca83803a3ff791546644bd13"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "9bece381e9e0fb1294c8dd60eb9bce8b"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "fae9ce6693c9f598e32b29dadb9e2810"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "27e7865dee232640c0497f148b45e098"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "7ec3f2e44a09ec443eb881ed8b309be8"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "39547cdafb53b4b28ff6b91b31ee53dc"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "a2c5ab930e682fd2c64a43092fcb38ac"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "ce2564ae8ba70502c0363f464b14386f"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "1d492566fd5fa4c76313ebd57845cb18"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "901839085e9561670d4fd501c9482aa4"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "8c2f7a25171aac7321f4e2b56d662ffe"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "7083c528841b611a0719faaf3b8e3bb2"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "286b56555d2526a3eace2da51fdde052"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "33bc0d8beac00705c0fbfbaed14b763c"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "de2fa9d36ce3d3d4dd359bc70c9cf0e2"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "e9bd45394f0e4c1cd0b4a71ef56696f8"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "dd1c83db5795e09060c9fafd3926a951"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "39c822f1fe6fc7786b2ef5512387b357"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "edaf99ae5fabb83f1351e121e53cf096"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "7d4030068545124d4fcaa6de735ddeac"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "a6c6db6e6c122216b9f0e5a11392da51"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "67becc38ef634e7407e2b6ce04869cae"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "9550f93d9e05fbf1e4fa09b3dd2930fc"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "b7cc760d95e75d7e6e4dd17c75902eb4"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "92f6fd3d2068dcc1475c7af62517c1a6"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "7ee33a67ac46389f60e27a3733a252da"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "b841c8e9d37f70e0bfbb0198bf00c0dc"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "c91962ad9d99169b15c5d6a83baed91e"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "369be4fcbe2165d092609184d830d379"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "20a821580823522eb3f6a17480cf166c"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "355bd5be20d6282025d9919d89cdf81f"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "7a14843781ea4dd3bde3108dd7cff8d4"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "3ea7f0c4ecaf66a97953fe885b832530"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "1c84146f052fdec2865ac630ec8cf004"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "4341a584c3c12b99185f77856baca271"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "ff3cb9c20b9758e8343e8ca4e1d9a7c4"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "b77db2d2fbd0a1ac58a89e5133f6485e"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "40f7326a60a14199a31886e34f0edd99"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "e242b29b09afedca31fcfae91ba85c94"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "c7f575e8fefc000e52198604bc37c0e8"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "eccf9992dba4595080d60438b458f7ea"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "ef8e81410e3f7b66cbfa84eeb1e61094"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "2c04d5264cc947ed34284404b3500b19"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "541a4b7c44919e2c8c40e92e57145b7d"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "96a7e2796350fbf0515a22c3b12c6a8e"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "01d6bbd33e32edeebe83bad742c5460b"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "01eeb07a71d517aef5dc965db47dab77"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "553b738b4908f96b7765d293c902fdbc"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "47745216bd94ee3b31fb9cf6eb35d850"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "d806ec7e2e3bc8bdcf90bc345b330bc3"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "485d7c9652fd0274537f68263fbf9ee2"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "2507f2c2905be50db7e55629f1a1a321"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "c6395f2c32e6c469b0ac99a58e1dfa6f"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "d2f871d56095ecf0c422fc25345077ee"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "6c1ba0fd7188105e283ae29a74c5dbc8"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "f933ebbae360710fffd80dd8d14c2481"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "fe61f6e962b5b5f985ebd5b9fdc20bc2"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "914d0210e4f3c27c5b3503ac9385f2a9"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "59408948d923383b90a848f50591038a"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "4331bc0f2f93895b1e5d1e54110413b8"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "961463f94db3d84d72e6182dce80c5cd"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "86c62d6a82f42b0d281ae69ffa733dcc"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "d1762e66f0e3a49a12be6d4613cba384"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "fef0a70636a7abfafdc711d52a466f18"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "0554564f20266655c921ed2fc6d1074a"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "e7df39f4d730a097ed12e7f9485a226f"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "dd210c6d9a18d638a58a6d8c6256dfd4"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "1508c1ba19a68e694624d93be9b05300"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "fcbbb0f68e3d4899ed98e22e4033d9f7"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "b0014f44bdb562309637d993064f7a6c"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "a82ae7ecde7b6ece4ed2410fb24c4a71"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "7706131e21ff64f93a8f11102cf09d91"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "b4a2e9003fc07c6afc4f3a8d4fc742c5"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "529c480c0c2c8394182f43f3b8baa40e"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "a7d4f770e9091fa093d418058e10bafd"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "7968967cba633a0b58cafb0ce381ab27"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "01b78e73ae783913a6d5bbe3ddddea50"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "47eb62ba345a383626953e283a6b4847"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "d3e11d39c8aa4bacf698ef193670ad6a"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "a460649dc1bcc24baadc7cb4cf177bb2"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "ef4ef13fbd951fb7abfeed30d61ebbc3"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "04a1d39facb4773a2ed7006a7bce1d54"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "38eb21ac78ef260fd5fa6bd5f39d3dbd"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "52b8437c1e3a8455e12d43b66b080c60"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "21b011ea2f2a7f766dcf4fa53f763c54"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "1e0449b291e0052cc5bc27847517eba6"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "6e6cd3a344a8ee533f160b637ba04540"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "a91fb0fbdcbdbf26428b496c67e03832"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "4a4883b36f7ad3928c50ae5d5365cb4e"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "fa5898d335d420230a756b3c555a7260"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "d79bdc06b2256475119da997242919a4"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "352c825c3a37fe7b647612a5131e253d"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "9c8c59dbc2486362ae8baad2e3f90458"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "c632cb08e2ca6e5c870cfe63198994ca"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "cfea82f93882ffaa8322f797fe1ddf72"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "1b93f31b362c284eb498dceb04954d26"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "a02b896dc7306ce5907b4fa5dab477ab"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "75fe11bf7706c041f0e97fd6690863aa"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "0d00c0cf6c6849ec9fb5fcc4ca9bef45"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "e66250ad46e3ad8e276d862e0a0947c1"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "dd40d36f6bb7eb017fd542d20e77e0d0"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "83467dec5f7c5639e49a9fbf1e4437e4"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "b02615cfdccee5142514c0f18bcb138e"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "02a304d776444f7c7652e0cac341df23"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "63034e27119f5e0ab2c98773596ac54f"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "21b7c716c58a1cf9aabf4cad31c6b90c"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "7daadee4574865fa120e85dd11a4af2d"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "8c226bf1d6ea0a1ba36d51c14b1bf0f0"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "bd24d65f16bca60d89aa2ccb70d787e9"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "04889c47f3b76db19197cf1d921bef6f"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "76fa1c2f458eabade91866baab099fca"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "75750346394bf88872380b3e116b1ea8"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "e146ed4f70a2a73031a36f0ca8d80cce"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "307ce3e4f060696bf018e6c4ee3e0c6e"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "de14e8f39d6d9b848c4f5fb1b1d33eb7"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "d642a5d3a0e8418f134b0389ab23cb6c"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "ef7d2bd6664342036ba85d03265530f7"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "742284abffd81d2e676b75fc3811e384"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "3958ed1361490eec04743dd9777a196e"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "74a111ff4e94d29a565892803a4deac4"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "1a35aeabc3417d3b025ca5d9feaf8bc8"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "865826e7be65826c1fc6a40f357aed29"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "e30db27b6b040b1b7c587b280d63116c"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "2eabcc326c32c7b841cc2ba062d4b380"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "4b165e3c11ba00f3c320228392067a00"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "ab88f7ffea2fee413dd439f389b3d5c0"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "778479e6e0515a4c8dee595120324683"
  },
  {
    "url": "kungfu/template.html",
    "revision": "11dead2828cba12d9ee0acecd022fed8"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "820f3bc56d69f261535118a5aa143187"
  },
  {
    "url": "network/network.html",
    "revision": "d470d05dcc878b6f9796ac28652ecdfe"
  },
  {
    "url": "network/restful.html",
    "revision": "7eb72bb9506111d691dc08d97267a740"
  },
  {
    "url": "network/websocket.html",
    "revision": "c83ef5e495b264cdc75bf1a254e8cca3"
  },
  {
    "url": "node/env.html",
    "revision": "74ef5d1d18beccb478633bf1bed4554f"
  },
  {
    "url": "node/index.html",
    "revision": "84959dbd7b07b484be64a551f069b798"
  },
  {
    "url": "node/n.html",
    "revision": "55add20b03aec7fd981c0b39fb12f5c4"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "e9ac9cb1b544981f1f511a7edf9ea2a2"
  },
  {
    "url": "node/npm.html",
    "revision": "839a776bab01c0cfc610ec716653f0e9"
  },
  {
    "url": "node/sequelize.html",
    "revision": "55343c881b51f28a20a0cdc0ad9e8ff9"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "dd17d1a3b8b73b55a295e9b132e94c72"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "85eb54795beb91621e532eba08883251"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "5fd3ca5ada4ef93eba9ed73019b00c03"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "193a7f21570cdfb47b0f67e59b20582f"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "dd989605963932647ac4f39bb7e578e5"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "355201b9f5f56db0f18ae0e65fb5f4e4"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "e0d71803844f3a40074a0a4c0caa6818"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "1b8093aaface82febf54d28498b6e741"
  },
  {
    "url": "php/clean/di.html",
    "revision": "121caaae662de3f9541e2ce39911416b"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "88d233e8884e918a2417f31ec2819b5a"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "f6eab49243a678b0282d801613762670"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "702e9752a5984f0b971659f0c3448262"
  },
  {
    "url": "php/clean/index.html",
    "revision": "65a8004e7268b9549cb85a3292842689"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "ccb2d3d4b1075a25f2de18ee49899042"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "15de26d6018f717eb7e8c358bcce5583"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "827267488c9a7cd5e6ad4a572f9157c0"
  },
  {
    "url": "php/composer.html",
    "revision": "f49651c10a395bb90463be0ffae17f04"
  },
  {
    "url": "php/crunz.html",
    "revision": "bc92864b7e71fa6ec468def398c699e3"
  },
  {
    "url": "php/laravel/best-practices.html",
    "revision": "649039c6a20291a36da3cbde33720d3c"
  },
  {
    "url": "php/laravel/laravel-notes.html",
    "revision": "3b8c02dd337810f3403cb5cf840177bc"
  },
  {
    "url": "php/laravel/laravel-vs-symfony.html",
    "revision": "b33b2c9b8c76e18192d9a4ea7bc82bf7"
  },
  {
    "url": "php/laravel/patterns.html",
    "revision": "29cd3b61e762ff09765ca401d4940d31"
  },
  {
    "url": "php/magic.html",
    "revision": "f142666962916614739caa43c2b6e0b0"
  },
  {
    "url": "php/notes.html",
    "revision": "cb8549eae53b6b2f69a264ee28b2dc00"
  },
  {
    "url": "php/oop.html",
    "revision": "f542347603fdd4e41fe8de8ed82976d9"
  },
  {
    "url": "php/php7.html",
    "revision": "157232ca32ae28bfbb9abc8338ce4ab1"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "7a5193994fe2d3fabae11f3133269800"
  },
  {
    "url": "php/reflection.html",
    "revision": "01a177f11f993119b63ba224091a3c5e"
  },
  {
    "url": "php/tricks.html",
    "revision": "ae59ab0c3678f1c61546cd79b0247ae7"
  },
  {
    "url": "php/wordpress.html",
    "revision": "8bbac25cccd2943db714f5b9b7abe367"
  },
  {
    "url": "quotes.html",
    "revision": "2cdcae0a89e193e5becac1f3675574bc"
  },
  {
    "url": "react/mobx.html",
    "revision": "652edb674d03d41fe2a410706d38c6ea"
  },
  {
    "url": "react/nextjs.html",
    "revision": "75b9c1af01d29d19a16fd90e4b894050"
  },
  {
    "url": "react/react-native.html",
    "revision": "2f5bf10cf0c6de3df8ec70633acf852f"
  },
  {
    "url": "react/react-vs-vue.html",
    "revision": "0e82b108be32780ef30b0e2dfc92daf2"
  },
  {
    "url": "react/react.html",
    "revision": "9acc308860c5de375f8e3b3a157ded7c"
  },
  {
    "url": "react/vue_react.html",
    "revision": "4269b6c7d2ad0d81fc9a05f4b9d99b82"
  },
  {
    "url": "refactor/notes.html",
    "revision": "a6048e887ac77ace5d77e3acbad12452"
  },
  {
    "url": "ruby/ruby-notes.html",
    "revision": "857d98324438102971dfb21530960172"
  },
  {
    "url": "ruby/ruby-vs-node.html",
    "revision": "56ffb55c9c4ab663ed33cd8fb29fb93c"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "0afdaa836379d97a3cb62cfda00d39d9"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "c7af5f64f41d90e4116f712b2923354a"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "98f4db3b5b9282635535921fd3f7f5fd"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "ffc3fa0e5a6373860cf04b0163e1f1dd"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "edbe69dcb373855225ad1ac57e0d0459"
  },
  {
    "url": "snippets/jest.html",
    "revision": "6816cd679b60e246c712f5ccf79ef33a"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "ef6082e47f02045035663690b073c7d6"
  },
  {
    "url": "snippets/regex.html",
    "revision": "e0dc6f611e2f328578d1dcb1b41fba8f"
  },
  {
    "url": "terms/12factors.html",
    "revision": "c530ac492effd28e92854f673b40645e"
  },
  {
    "url": "terms/architecture.html",
    "revision": "8ca8cd07e69c409f7cecc37d105c25ea"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "5ab309c0c56a3bf53ddde0e41b69abcf"
  },
  {
    "url": "terms/di.html",
    "revision": "26e98ac50f33bfc8bef927ffad6d45e6"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "fc4931350c40a1a4660543007f9c00e1"
  },
  {
    "url": "terms/javascript.html",
    "revision": "59bb7e97c8055508e7cfba7f0ec8e8be"
  },
  {
    "url": "terms/patterns.html",
    "revision": "f77f03e62e6ccf73de1932abb1ed8d93"
  },
  {
    "url": "terms/payment.html",
    "revision": "9ebfa8528e14d34e3fc5b8f6a685e046"
  },
  {
    "url": "terms/principles.html",
    "revision": "47754c7bb32444000f47316f8ec39f75"
  },
  {
    "url": "terms/rules.html",
    "revision": "a8ce11695c745af8a5f6f917cebb130a"
  },
  {
    "url": "terms/testing.html",
    "revision": "691935a43fcdc217fdf3f279d0c2aa7a"
  },
  {
    "url": "tools/chrome.html",
    "revision": "1db5ded00001b76ffe186e33a3d91a5b"
  },
  {
    "url": "tools/docker.html",
    "revision": "fabc448324da6d7827d1c811b4986b0a"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "2f03fb7a880af1e67ff58970a83fe67f"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "f5ee0e89df6b01867cefc53b2f7840b9"
  },
  {
    "url": "tools/graphql.html",
    "revision": "bed1119904b5948d4e1617382a6b0eb5"
  },
  {
    "url": "tools/k8s/k8s.html",
    "revision": "8f001fe249562657492845fbbe2f4ab1"
  },
  {
    "url": "tools/kafka-vs-jetstream.html",
    "revision": "62bcfe269520d68c1f815cc7a6ed0acc"
  },
  {
    "url": "tools/kafka.html",
    "revision": "fdfc0c466494e28e385f03dcf481cf7d"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "d81b964b2302a69ad9cb4b1b5a4dd2ac"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "e25256047dc961acdb20433a3cd3ec5f"
  },
  {
    "url": "tools/redis.html",
    "revision": "13c48f7c592d53e073abf603f7c78f4b"
  },
  {
    "url": "tools/rfid.html",
    "revision": "65c195c9957c330da51ad5e7b3e780b2"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "38b64a1bc3e82813f4946740ca9e27ba"
  },
  {
    "url": "tools/vscode.html",
    "revision": "3e7813b3883c24f9b17f980f2252e8a9"
  },
  {
    "url": "tools/webpack.html",
    "revision": "ef9f8af645caf2951974fb0d1eeb6368"
  },
  {
    "url": "tricks/compare.html",
    "revision": "a60542b445275e56d29766c5479900c4"
  },
  {
    "url": "tricks/git.html",
    "revision": "a417f3c047266e437069bbfad4b57de0"
  },
  {
    "url": "tricks/linux.html",
    "revision": "938526e836359cf3f24a4254a5dc8882"
  },
  {
    "url": "tricks/mac.html",
    "revision": "610fcdf1e8d1c0355dcbcaa23e0157d7"
  },
  {
    "url": "tricks/misc.html",
    "revision": "1f0294fe6419b68081199c2a5816e6e5"
  },
  {
    "url": "tricks/setup.html",
    "revision": "151bca3d58f67fc34f8f69d6c454551e"
  },
  {
    "url": "vue/communication.html",
    "revision": "dea3a678b7e416791635c60d76685ed9"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "9f8179057ad2ac5abb430a18e909c7a4"
  },
  {
    "url": "vue/events.html",
    "revision": "d38e71703b07f7046cacccdcd216d9e8"
  },
  {
    "url": "vue/references.html",
    "revision": "f4c20fc06e2578ba14fb8e7be464523f"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "a0b6cd02a895fdcee010d3e94a44146f"
  },
  {
    "url": "vue/test.html",
    "revision": "268c3fbee598fa0b6934d80607551e5c"
  },
  {
    "url": "vue/tricks.html",
    "revision": "502db9a663f14d40ab19f1fe864d44eb"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "17ac5a0a4c0ba0af5e941451e2c6ae65"
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
