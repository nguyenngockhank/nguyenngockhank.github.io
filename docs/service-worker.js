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
    "revision": "a7d1f1a1943a2dc013d38c082359b71f"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "4f6cc791ee86de428bd7ab3cae2379fe"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "d984613e1b01118fce71a32a83415822"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "0079795a0de320b65c2a624ac571726a"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "b5ec9220a692537c1395d0ecd8c77c66"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "fa61ccc4ccb7efe98519d20f8f124b31"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "57f3b2323cf1cec0628a2ca036dba8b3"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "4b517932da658d4946d63bdd3756bf82"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "64c367a048057a72314903c61b527eae"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "d6fae8ed62e55a882cb32489eb4aa367"
  },
  {
    "url": "algorithm/string.html",
    "revision": "5b2e5506ed6b62876e9a1d3ff507e33e"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "b41d07f15d3de3326b4a42fa980ad593"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "f1ed0961cc5d928b9131ce333d377de6"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "ea813c7460022d0382509ff8fd493783"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "a73e906ea799f836fc11002978f22ccc"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "974330c42f4d87e3e9392ad6c79ea261"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "f286b953939919a2f09ae58ac17284db"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "bef279d34d9004185eda5a69fc8ecfa0"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "d76fb82c9a387778b399cf8b276e3359"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "11a1c7c69f008c84224ef5d6bcf6160c"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "82883392896235cb50461a4ff2f6b0c2"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "a7d506424345120ff7647e0eed208ff6"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "3759b79f78097d1c24f1834bd26f550c"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "31c70d443e8d764a97596b499b76e662"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "ad8fb95a7077fffca90ac8be5298ccd9"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "73592661723f96bea4f6b681851a6537"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "35b27654393424718c5bd1c808a2aba7"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "47951bf0a5c1650f4a1c340f45d526cd"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "4709dbdba88cbcfccd44e4d275d14f42"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "c147139569539f8f66722e4020fb1f7a"
  },
  {
    "url": "architect/authenication.html",
    "revision": "01262a592ab66ba0bf77ce227678335e"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "01e0287393bf95c19371eb31f712f5f5"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "bc534bc4f48144bffaf3132e2cd02e8a"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "8c1a81eb0a49cb68ae23bf63d2a3d5bf"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "54ccb5afc908aa8d6e43c791ec7bff34"
  },
  {
    "url": "architect/ebi.html",
    "revision": "03b2ade82cf5f3143bb7de6256f516a9"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "bf939bed189026ff6f078dced86ec784"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "87287fce1b2cafe674c66b204e848334"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "ab30fbfea7334a3c5f10b80ed259896d"
  },
  {
    "url": "architect/index.html",
    "revision": "3f34e02bf4a24757e68139ca30c4b9e4"
  },
  {
    "url": "architect/messaging.html",
    "revision": "6787ae0ca812d6d349f07ba2c0d4c60b"
  },
  {
    "url": "architect/microservices.html",
    "revision": "20f68b43dacb5537fa8fee09ed933481"
  },
  {
    "url": "architect/mutex.html",
    "revision": "c0dd4823af0bc3dd70e5cdfe437eb1f9"
  },
  {
    "url": "architect/notes.html",
    "revision": "0182a8e1a22694a5f82f785f0ff64996"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "e70a62a907991b6aecea1f90abe0353e"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "af9ca1386e1652f4be52226870b4601a"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "d58fe89f050d16d3046739a6ff9d8454"
  },
  {
    "url": "architect/refs.html",
    "revision": "0cc67b2cefa338aab6e5498bb5a73f35"
  },
  {
    "url": "architect/restful.html",
    "revision": "767fd14e212a90c61ba950ae9adb398c"
  },
  {
    "url": "architect/soa.html",
    "revision": "ac1e1f96645b0ddabfda056b258501a7"
  },
  {
    "url": "architect/spa.html",
    "revision": "09d0589780fa46011e1e0d133fc542ec"
  },
  {
    "url": "architect/terms.html",
    "revision": "cd262ff5c61012c19b13668d8cad731f"
  },
  {
    "url": "architect/webservice.html",
    "revision": "59d30802da3cdd461375cfb7312594e8"
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
    "url": "assets/js/10.5023c493.js",
    "revision": "d319fb29b9bbfbe789bbcb7cfc16ba45"
  },
  {
    "url": "assets/js/100.284a981f.js",
    "revision": "1c4e5ffaee5f8ac02545c09dfa271b41"
  },
  {
    "url": "assets/js/101.bd8bcb48.js",
    "revision": "804804229f279781bfc01aab412beb0e"
  },
  {
    "url": "assets/js/102.482ff64f.js",
    "revision": "e32496f6facb8cd48016a752f89bbf45"
  },
  {
    "url": "assets/js/103.13336080.js",
    "revision": "267519ba3401fad56d90ed30a8a6f1e6"
  },
  {
    "url": "assets/js/104.78c8ba0b.js",
    "revision": "faa9622154001e75e90f63263e2cd2b6"
  },
  {
    "url": "assets/js/105.106fff09.js",
    "revision": "feb3aec7430b77c01ee0afe9bd83b937"
  },
  {
    "url": "assets/js/106.f9f0a8b7.js",
    "revision": "28c6e99dc8ac43a95bbd769ab2930dfe"
  },
  {
    "url": "assets/js/107.835564b8.js",
    "revision": "2935ccce01a7308d8d00ef482f392e52"
  },
  {
    "url": "assets/js/108.2eff01a1.js",
    "revision": "43ffc2cc8fcb060c0e8b9174adb6b377"
  },
  {
    "url": "assets/js/109.4966e4a5.js",
    "revision": "39ebd1f796b022e3a7282f8ca871790d"
  },
  {
    "url": "assets/js/11.f47a5c98.js",
    "revision": "aeb39c246b4f004b5870ecf5a632961f"
  },
  {
    "url": "assets/js/110.73d2c6e6.js",
    "revision": "e7da4f0d9002be663cc12e434bc9c2a6"
  },
  {
    "url": "assets/js/111.92fffb03.js",
    "revision": "1995aa08da4cadf615c820386d31e430"
  },
  {
    "url": "assets/js/112.fd20c3c6.js",
    "revision": "8c963991018ac32e3d6802f9ddfc2862"
  },
  {
    "url": "assets/js/113.c8655eb5.js",
    "revision": "3a717e34540fa26e50e4ba22502e2504"
  },
  {
    "url": "assets/js/114.14138359.js",
    "revision": "db192ce38cc0bf6da3e87d8e5af5a02b"
  },
  {
    "url": "assets/js/115.c736f983.js",
    "revision": "fc2e4423f2e1638655b32a0ed0606ae4"
  },
  {
    "url": "assets/js/116.1f006b3a.js",
    "revision": "088decbf340ad0b64d6ae8e62aafce55"
  },
  {
    "url": "assets/js/117.e3a9d496.js",
    "revision": "1ff4053d392cbd920febca6ed6253831"
  },
  {
    "url": "assets/js/118.81a595ef.js",
    "revision": "f0b7bf85acc3259db86def698d8ed7b9"
  },
  {
    "url": "assets/js/119.7e381904.js",
    "revision": "ed0797b60e4eaf80a8bb7573a87329b1"
  },
  {
    "url": "assets/js/12.f307c195.js",
    "revision": "46ceda4a3321a7f8cba85e4a67ca81ce"
  },
  {
    "url": "assets/js/120.22879100.js",
    "revision": "7d0b73415971e63eb0ba62e9c2527bd4"
  },
  {
    "url": "assets/js/121.57012466.js",
    "revision": "1cb4a69961e610f2e7f12e0072bc6494"
  },
  {
    "url": "assets/js/122.c6c4cdb1.js",
    "revision": "866a8507ca595819d23a6605d654c81e"
  },
  {
    "url": "assets/js/123.f2131bbb.js",
    "revision": "c66d41948b91817a3d73ea6920aea3e9"
  },
  {
    "url": "assets/js/124.39b9af6f.js",
    "revision": "9a0c773c39d2429eee94a90f8a5ce2d3"
  },
  {
    "url": "assets/js/125.efb5921e.js",
    "revision": "c4b60c4ebfc964a9382cb3260c41002b"
  },
  {
    "url": "assets/js/126.ef25b1f2.js",
    "revision": "9e4f479c48f5a56da4120bcb569f30b7"
  },
  {
    "url": "assets/js/127.65ef0044.js",
    "revision": "c903a8cc425614609788eefc7874e806"
  },
  {
    "url": "assets/js/128.381c574c.js",
    "revision": "025ce73a46158944216e4535630f7466"
  },
  {
    "url": "assets/js/129.0bc9eb99.js",
    "revision": "bcbacad3047ebf12af64d64c2ac618bd"
  },
  {
    "url": "assets/js/13.dd6ab06d.js",
    "revision": "b1ed4c7cd19f29c91074eef0b9792f6c"
  },
  {
    "url": "assets/js/130.e13a98e6.js",
    "revision": "f472ea521384a5d234c4ac8f2ea3deee"
  },
  {
    "url": "assets/js/131.3ee7c5b9.js",
    "revision": "37e9845fc8257bc5200dfc45a95962e4"
  },
  {
    "url": "assets/js/132.55caabc9.js",
    "revision": "d095d64a7a82a8749c0b67013bbb58d7"
  },
  {
    "url": "assets/js/133.714e6d14.js",
    "revision": "13f93ae11032a32ba7c0d64f3a5bae98"
  },
  {
    "url": "assets/js/134.333503ce.js",
    "revision": "85b7dfabc06541983ac1ca5a350ec7f5"
  },
  {
    "url": "assets/js/135.438ec9e1.js",
    "revision": "4226c6a3b0dfc75fd465e8f8117fb005"
  },
  {
    "url": "assets/js/136.22d22116.js",
    "revision": "a3d23fb52ceda67fbd8449440a49dae2"
  },
  {
    "url": "assets/js/137.1ea3c2bf.js",
    "revision": "54dccc81004af2e88bca3da3e6ccb094"
  },
  {
    "url": "assets/js/138.cf10f8f2.js",
    "revision": "0128d39abd89464ce2a797233878d364"
  },
  {
    "url": "assets/js/139.bfa498ce.js",
    "revision": "6b322e6ef4bf572d22fd3f7b0d67af8b"
  },
  {
    "url": "assets/js/14.934dd6a1.js",
    "revision": "1fa5406588c40b1ff7751943a3983f67"
  },
  {
    "url": "assets/js/140.1330e75a.js",
    "revision": "84dc63691c64e1e898d4318ad0b1a32c"
  },
  {
    "url": "assets/js/141.cd638896.js",
    "revision": "46653bf998cd11feae303040b2692340"
  },
  {
    "url": "assets/js/142.a5dd51d2.js",
    "revision": "fb327aab46b4693434cabe7f8af26ed1"
  },
  {
    "url": "assets/js/143.e2aca1b6.js",
    "revision": "664dc4c669bbfa1169867729ac2d0a60"
  },
  {
    "url": "assets/js/144.28aecb0c.js",
    "revision": "15580f6bf514422ee7ad71f6c662d106"
  },
  {
    "url": "assets/js/145.5d9cfb0f.js",
    "revision": "6ff4f2b8924fc4a5d0590087094ee0e3"
  },
  {
    "url": "assets/js/146.31b921ad.js",
    "revision": "61a226f956a44faece0d5a7f206a63cf"
  },
  {
    "url": "assets/js/147.929ca0f1.js",
    "revision": "5b7d8e790c5ec9b99cd081a3283fbaef"
  },
  {
    "url": "assets/js/148.eb2238e6.js",
    "revision": "a275be7c53d808763107cf22531fa943"
  },
  {
    "url": "assets/js/149.e2a2ef57.js",
    "revision": "78bc1f7724516fa9e1b9f6e9b9339961"
  },
  {
    "url": "assets/js/15.ba146d8d.js",
    "revision": "8db4b5558c42607d49057f946ef31501"
  },
  {
    "url": "assets/js/150.69701526.js",
    "revision": "49291fea38952497d17df56da500f5ad"
  },
  {
    "url": "assets/js/151.8c8bf959.js",
    "revision": "60f652f5a200687c6507e27f07f7fa31"
  },
  {
    "url": "assets/js/152.faabc959.js",
    "revision": "b2e3af94fac7512aad92831bf850b4b1"
  },
  {
    "url": "assets/js/153.7f9bb591.js",
    "revision": "1653738d5f39a7ab6bf12fb7ebcd9959"
  },
  {
    "url": "assets/js/154.0b2385bb.js",
    "revision": "2d3b5b2c95656a558581947ce3e0cf1a"
  },
  {
    "url": "assets/js/155.1a770cd3.js",
    "revision": "87bf0e96495bab0a17fd5a8a9cb05eee"
  },
  {
    "url": "assets/js/156.ba81b7ee.js",
    "revision": "ba60cebc0e537472a3f95ee700c84e4f"
  },
  {
    "url": "assets/js/157.33f72c1f.js",
    "revision": "3ffc2c556d81d8eb129b2818f9a6b40f"
  },
  {
    "url": "assets/js/158.189a0e14.js",
    "revision": "4c064324fb9943db3b38802ccf550184"
  },
  {
    "url": "assets/js/159.d2393949.js",
    "revision": "22b0aa78b98ac2e5a7b9b76459e26eda"
  },
  {
    "url": "assets/js/16.fbc0e33c.js",
    "revision": "383b1942e67f6d5f538aadb191b444e2"
  },
  {
    "url": "assets/js/160.f16a8efd.js",
    "revision": "890a446127f734be345eabbd8087e38d"
  },
  {
    "url": "assets/js/161.8351bc9e.js",
    "revision": "c01a78aa1c5b3cd21500335311ffd034"
  },
  {
    "url": "assets/js/162.c8f8d515.js",
    "revision": "f9e8876736a7aa9ba51305ab0de8fddd"
  },
  {
    "url": "assets/js/163.05f11963.js",
    "revision": "3a94266357ea417f6f054277b7d4aead"
  },
  {
    "url": "assets/js/164.30dd077a.js",
    "revision": "ced683e0df25283565a97359f46e0cd6"
  },
  {
    "url": "assets/js/165.a84ae891.js",
    "revision": "c1241bb746196ac5b8bd871866946dda"
  },
  {
    "url": "assets/js/166.296952ef.js",
    "revision": "cccf8b4de4eee45e15e2e686d9e44e8e"
  },
  {
    "url": "assets/js/167.c5978c49.js",
    "revision": "b57dda400e22e65391a652ebec5455f3"
  },
  {
    "url": "assets/js/168.e02ee7ff.js",
    "revision": "8f71935b3edc14efd9dc99f15e72ae07"
  },
  {
    "url": "assets/js/169.5bf5cd48.js",
    "revision": "fd62fd66c27905533e399687a8e33d18"
  },
  {
    "url": "assets/js/17.ac45b0d9.js",
    "revision": "2d60a7ffe6077cacfb1f2b072aa5f438"
  },
  {
    "url": "assets/js/170.b8908ae9.js",
    "revision": "71a8ca398ec9ab0366acf50ca8883b7f"
  },
  {
    "url": "assets/js/171.bf6e66a1.js",
    "revision": "30c5071c052bf71166caa20611f001ac"
  },
  {
    "url": "assets/js/172.f1ccdde6.js",
    "revision": "2876083ed2fd741b1fdadfcdf7c60e48"
  },
  {
    "url": "assets/js/173.7b7ab2e8.js",
    "revision": "157f5f0bf56f189595954b97efd952db"
  },
  {
    "url": "assets/js/174.cb532ca5.js",
    "revision": "06d6537bc9709a440f423df5e5774d28"
  },
  {
    "url": "assets/js/175.ac29e746.js",
    "revision": "82ff5e6a2d67720ea2e0d0de323d0d13"
  },
  {
    "url": "assets/js/176.650233f1.js",
    "revision": "4684b6289add5e8a20a5d2b58d85f8dc"
  },
  {
    "url": "assets/js/177.a771ee5b.js",
    "revision": "c30f2a5d4fa4a8587a1ad1888f563073"
  },
  {
    "url": "assets/js/178.5010c3a0.js",
    "revision": "2701f1597d68b2a64cb59d4fd51476e4"
  },
  {
    "url": "assets/js/179.ece519fc.js",
    "revision": "73d0905326183ad7b5d7bdab9dc1cd64"
  },
  {
    "url": "assets/js/18.0f9655d5.js",
    "revision": "99523d1f58a20079006f5dea13079c64"
  },
  {
    "url": "assets/js/180.abef5f22.js",
    "revision": "f161ff02375d646c30b60f42470a5768"
  },
  {
    "url": "assets/js/181.64a28d38.js",
    "revision": "dd9c8f10a44ddfe72006fcf00ba03896"
  },
  {
    "url": "assets/js/182.63909734.js",
    "revision": "4666ad45931c0b1119477762e19c7b4d"
  },
  {
    "url": "assets/js/183.9310dd5d.js",
    "revision": "2486e954072d9292d21b4d6c1577d69f"
  },
  {
    "url": "assets/js/184.44b63ca0.js",
    "revision": "4acae58ac5531c86b5e164626da1b3b3"
  },
  {
    "url": "assets/js/185.a1645c38.js",
    "revision": "999f853f81e0922fa8af4b864be2af06"
  },
  {
    "url": "assets/js/186.9e70827f.js",
    "revision": "63048c4dccc2693cc5fe90743d739955"
  },
  {
    "url": "assets/js/187.3b40d84e.js",
    "revision": "c7bfd10a9aa12e624e8bd18ae4cb1412"
  },
  {
    "url": "assets/js/188.afa48289.js",
    "revision": "a3843fc6fd9f7309cd215237ba1e0d30"
  },
  {
    "url": "assets/js/189.e891e567.js",
    "revision": "acde6f82acd118290ac19eb6f981d4e3"
  },
  {
    "url": "assets/js/19.8a639b7d.js",
    "revision": "f2b5827dfad04099a57c331fa625c61a"
  },
  {
    "url": "assets/js/190.83e8bba7.js",
    "revision": "bea30bc0f3ec21e2962aeeedf4b0dcbd"
  },
  {
    "url": "assets/js/191.90f7bb80.js",
    "revision": "c9c0d0a13253fceb7f5efae69e2ef728"
  },
  {
    "url": "assets/js/192.222e5cdd.js",
    "revision": "ba8188afadb900f6d76297752227f723"
  },
  {
    "url": "assets/js/193.a6d159ea.js",
    "revision": "cfbfbfaeedf302cbb8aa05560e1bf9cd"
  },
  {
    "url": "assets/js/194.563cfecb.js",
    "revision": "611d2b0c1f1e3713a3d9ec5261b1dc6d"
  },
  {
    "url": "assets/js/195.d2897b3b.js",
    "revision": "a586c7d9d326ee9a4e3b6da8d9f393dd"
  },
  {
    "url": "assets/js/196.5ddfdec2.js",
    "revision": "01b5cf046f33102af9f01f7d3d1b7e92"
  },
  {
    "url": "assets/js/197.e4bc2354.js",
    "revision": "768c24cd3ef8b506e7de782fa39fc8d9"
  },
  {
    "url": "assets/js/198.260a922a.js",
    "revision": "c2be2497bca9ce1986c714fb329a0dd8"
  },
  {
    "url": "assets/js/199.8ff33dbe.js",
    "revision": "bdf6533184530b0dea04bf6fd0e0d3e4"
  },
  {
    "url": "assets/js/2.de1d5c77.js",
    "revision": "a3a0841b11a36fc262b6d38ddfb38a1a"
  },
  {
    "url": "assets/js/20.34b7e349.js",
    "revision": "fc2a26f383902aa6c84e43ac1ea0409a"
  },
  {
    "url": "assets/js/200.fe8cf14f.js",
    "revision": "c0867356295abaa434290bb67ead0ca6"
  },
  {
    "url": "assets/js/201.a1972b93.js",
    "revision": "754b543310757e311585df8516484879"
  },
  {
    "url": "assets/js/202.3e8a4959.js",
    "revision": "e69305de36a918212366e7a80fad4cc8"
  },
  {
    "url": "assets/js/203.1aa267b3.js",
    "revision": "a39f53af11effdee88256d8c9ba1922c"
  },
  {
    "url": "assets/js/204.6d03fc54.js",
    "revision": "0130ad2ebe7499a523b204cf4043ac08"
  },
  {
    "url": "assets/js/205.c94c0957.js",
    "revision": "f15502bc1d5e48fed61d2cdf4f3a2c29"
  },
  {
    "url": "assets/js/206.4aaea647.js",
    "revision": "f1b34e2e02c9964c66d6cd6a145f3189"
  },
  {
    "url": "assets/js/207.53432dde.js",
    "revision": "51602e10b8e35e70ec594c0eebecd639"
  },
  {
    "url": "assets/js/208.2e2685d4.js",
    "revision": "d1d8d548f5084e23bedc411774eb5d35"
  },
  {
    "url": "assets/js/209.e44362a3.js",
    "revision": "7756f831954657153ed72bd98c1665eb"
  },
  {
    "url": "assets/js/21.c59e0e98.js",
    "revision": "2e6a036f9b7ca585ffee39df36320e28"
  },
  {
    "url": "assets/js/210.11dc1c0f.js",
    "revision": "38ad56ace42b816ac68f00e275e2c767"
  },
  {
    "url": "assets/js/211.38928593.js",
    "revision": "9d8e5bea99883846afc25b956bb36849"
  },
  {
    "url": "assets/js/212.19c32eeb.js",
    "revision": "e42d88cfe126c670de2bdcc1b08cfadc"
  },
  {
    "url": "assets/js/213.6bb90207.js",
    "revision": "c945296660c654d234c1c6957c1ac7d0"
  },
  {
    "url": "assets/js/214.ef46c11c.js",
    "revision": "629035b34344e840b522456103a2d513"
  },
  {
    "url": "assets/js/215.87ebbaa1.js",
    "revision": "0b3ef2c599b1a9a054113228097ea9cc"
  },
  {
    "url": "assets/js/216.3e0b9647.js",
    "revision": "a1e0af01d9351514366148328a282443"
  },
  {
    "url": "assets/js/217.bd724dcc.js",
    "revision": "55f50a6cef990aba68c2ad7d7f00a157"
  },
  {
    "url": "assets/js/218.7dd31ae5.js",
    "revision": "57bf53d63e02b18b74e8928e20985d38"
  },
  {
    "url": "assets/js/219.fd005e52.js",
    "revision": "0653af6c6d4ae4cec4f85aa6ecb6f679"
  },
  {
    "url": "assets/js/22.f9821b9b.js",
    "revision": "b2261774777348d0ce53edac28e329f2"
  },
  {
    "url": "assets/js/220.666e4005.js",
    "revision": "e1e6d0733ed92771bd8521b61d9b0f34"
  },
  {
    "url": "assets/js/221.a8dd5ae3.js",
    "revision": "5288dfbcfee9e5faccaeb6ff09a5e99b"
  },
  {
    "url": "assets/js/222.874715bc.js",
    "revision": "955cc1fc32a7a01201fc2b5b8f89105e"
  },
  {
    "url": "assets/js/223.8ba1487c.js",
    "revision": "d05228f31fa2b7fd7c63d51590a32d15"
  },
  {
    "url": "assets/js/224.6a86e41d.js",
    "revision": "64b643d28b4691147c7544a4b1cc0b29"
  },
  {
    "url": "assets/js/225.92d34f6c.js",
    "revision": "b183a1f38e9846ff8f7ca0e7d785f0be"
  },
  {
    "url": "assets/js/226.4003aa80.js",
    "revision": "7121f54d77ec724b0e8b64bd86917287"
  },
  {
    "url": "assets/js/227.4a90fe5e.js",
    "revision": "9ad218673f7d0c084b10139f2e892f22"
  },
  {
    "url": "assets/js/228.f96aa744.js",
    "revision": "e8a2a2ef6a9f6361f2c86073159354b3"
  },
  {
    "url": "assets/js/229.0bb9d718.js",
    "revision": "5a636e7d95ee6a4d7995358a14c3c9e3"
  },
  {
    "url": "assets/js/23.7f8c26e7.js",
    "revision": "c61c0853f84ed1dc3bb0154621f3f779"
  },
  {
    "url": "assets/js/230.3abadf74.js",
    "revision": "aab68a1cc09f38b2765a8b2eeade2bcc"
  },
  {
    "url": "assets/js/231.f481c052.js",
    "revision": "7051f85051a75ee735187ccfd51927cc"
  },
  {
    "url": "assets/js/232.1ab6c50c.js",
    "revision": "22fcfc9be5c7238868fb1e36eb8f0e7e"
  },
  {
    "url": "assets/js/233.79bd4f9d.js",
    "revision": "acdd1996363298435ed26e6f370d7312"
  },
  {
    "url": "assets/js/234.0920aa15.js",
    "revision": "86c16b620cb3ec5ef086523a76a6882b"
  },
  {
    "url": "assets/js/235.cc7c94cf.js",
    "revision": "908396a3dab16179fcba5fa302946f4e"
  },
  {
    "url": "assets/js/236.e96ebfd6.js",
    "revision": "d3263c16ad8b898327d2d121e9a0d9ff"
  },
  {
    "url": "assets/js/237.8072e640.js",
    "revision": "3a8f545ca6ef787c62570a17b6f62208"
  },
  {
    "url": "assets/js/238.3da34ec8.js",
    "revision": "033e1ee3930b291edaa3b696389f0c7a"
  },
  {
    "url": "assets/js/239.f95e07b0.js",
    "revision": "c4d66c64391a9e7842d3969f38f4e05b"
  },
  {
    "url": "assets/js/24.3338bd23.js",
    "revision": "98166b373ad01815fda26f521e13f17c"
  },
  {
    "url": "assets/js/240.3b721888.js",
    "revision": "5656d35d5786a566f386b6922527d4de"
  },
  {
    "url": "assets/js/241.14ad8beb.js",
    "revision": "1b2a79ccfc2fc36e5c04eac37b252e9c"
  },
  {
    "url": "assets/js/242.53903205.js",
    "revision": "143962b1266e4c8d07f217232f57aa76"
  },
  {
    "url": "assets/js/243.39960f42.js",
    "revision": "99cb9ff8cf8842129efa81565cee693e"
  },
  {
    "url": "assets/js/244.4d638c11.js",
    "revision": "ae4002418a47f5c371d835410a8faa52"
  },
  {
    "url": "assets/js/245.04dd8a3c.js",
    "revision": "e3b7629a7f9dfa319bdb1cefbe6af218"
  },
  {
    "url": "assets/js/246.a37c142d.js",
    "revision": "2b4de8054d2c926ebc2e72ad49065ce8"
  },
  {
    "url": "assets/js/247.9e8fb79c.js",
    "revision": "1a294468110395735e18d29c3f1a6bfe"
  },
  {
    "url": "assets/js/248.dba561a4.js",
    "revision": "cf7870594a2f3d2833a71815cecf180f"
  },
  {
    "url": "assets/js/249.f211299b.js",
    "revision": "6aababbb01e9aa9b2174adcec0a813ef"
  },
  {
    "url": "assets/js/25.468a3b2e.js",
    "revision": "6f34b0324324ed4971b68769147fd795"
  },
  {
    "url": "assets/js/250.b3c6759c.js",
    "revision": "2e22f4d4c530ec6981f9cc37ae4b9c3f"
  },
  {
    "url": "assets/js/251.0db82277.js",
    "revision": "6b45490ce087d6b4b26c387a3901c29e"
  },
  {
    "url": "assets/js/252.8679430e.js",
    "revision": "50a7a4a1e64e64efd3ff4494f045817f"
  },
  {
    "url": "assets/js/253.faefbc64.js",
    "revision": "b0bc54bddcc9cdcdc6c3e40bad1acde8"
  },
  {
    "url": "assets/js/254.aed93289.js",
    "revision": "07b9c59b7625bfd9561ddc4233c85ff2"
  },
  {
    "url": "assets/js/255.5ecb3a43.js",
    "revision": "a98fc742f3dde07e5e48ff930b30948f"
  },
  {
    "url": "assets/js/256.cc3e9853.js",
    "revision": "2c61daaa1dd150d14f2d2996026be0e2"
  },
  {
    "url": "assets/js/257.b7846464.js",
    "revision": "a407709b35cc0cbba9ea1fdef14dbd0e"
  },
  {
    "url": "assets/js/258.ca0e33b0.js",
    "revision": "b3562b11f007139ddcc797e18c6a9e61"
  },
  {
    "url": "assets/js/259.b7bf4388.js",
    "revision": "4785b4e80b3f9f97129b969002d1f2fe"
  },
  {
    "url": "assets/js/26.e421c065.js",
    "revision": "849d6c5bffa9cf1ec87c853a6d44d2e7"
  },
  {
    "url": "assets/js/260.5231851d.js",
    "revision": "137cf90790b2f1190ffdfa86a8a46a74"
  },
  {
    "url": "assets/js/261.933a4915.js",
    "revision": "b1ac900be83822e78d19f518b6103e4d"
  },
  {
    "url": "assets/js/262.382bdc60.js",
    "revision": "ff7a07a49bf0b5800af55bc8dea0867a"
  },
  {
    "url": "assets/js/263.e3c2ccdc.js",
    "revision": "6e8250be28cdfa6ea28dace7223558e2"
  },
  {
    "url": "assets/js/264.26400404.js",
    "revision": "fed97385130a6f9a0f3abd39e0b98b0f"
  },
  {
    "url": "assets/js/265.91af8d06.js",
    "revision": "798e723c0bdd009e267f3394f7c61d36"
  },
  {
    "url": "assets/js/266.797f8075.js",
    "revision": "97c8f8eb0d8f1d1c2cdf302c0e85bb25"
  },
  {
    "url": "assets/js/267.7263c1c9.js",
    "revision": "f80ad5a07fed0366f07f023e2ed2cefe"
  },
  {
    "url": "assets/js/268.9557f12f.js",
    "revision": "da1e366f2c39f7a51fa8efef861d05e1"
  },
  {
    "url": "assets/js/269.829ddaae.js",
    "revision": "b7561d3398314dca2d6d6efcd9085518"
  },
  {
    "url": "assets/js/27.70b852e1.js",
    "revision": "2ba909d35bed1dcab58fb187d99e6ca4"
  },
  {
    "url": "assets/js/270.4e213479.js",
    "revision": "d9a9231a4e04dcbb9adebc213eef20b0"
  },
  {
    "url": "assets/js/271.16b02057.js",
    "revision": "19037c7d927ffc14c00ad8a07bbda993"
  },
  {
    "url": "assets/js/272.9e60b1c3.js",
    "revision": "b2f127e4635e00d1d0b934df8fd51d58"
  },
  {
    "url": "assets/js/273.4a6e548a.js",
    "revision": "2e8d8e98b3bffb60f8c770ebe15fcad0"
  },
  {
    "url": "assets/js/274.8888e585.js",
    "revision": "ff556362a28b873f42a0f32705bddaed"
  },
  {
    "url": "assets/js/275.ee0e6094.js",
    "revision": "0759b1a11dd5da30ed2d55f7bedef0b9"
  },
  {
    "url": "assets/js/276.aa39f70f.js",
    "revision": "9088c0244468792a74d319ada10e95c0"
  },
  {
    "url": "assets/js/277.53a44a06.js",
    "revision": "503548cec2fc98da5f71b1d520bac646"
  },
  {
    "url": "assets/js/278.eeed994d.js",
    "revision": "ab68b44e9fad1a693b3354793b02a1f8"
  },
  {
    "url": "assets/js/279.75063327.js",
    "revision": "00cbb3aeed27f5b90e92e52fa4980203"
  },
  {
    "url": "assets/js/28.109d4d82.js",
    "revision": "6e5f70b2fa9b2dae4c3bc3a4ba086b1e"
  },
  {
    "url": "assets/js/280.0e47e49a.js",
    "revision": "65b39920f48b3cb84f493ce1d6e21082"
  },
  {
    "url": "assets/js/281.d011de44.js",
    "revision": "ed4eb849e8f2ce2b6460fedbbd6c5efc"
  },
  {
    "url": "assets/js/282.84bd9472.js",
    "revision": "1b501ebf92af0fc437477e5f15e4c536"
  },
  {
    "url": "assets/js/283.93328ae1.js",
    "revision": "789053fa204d11e45899e2a0c4397201"
  },
  {
    "url": "assets/js/284.7ebedfbc.js",
    "revision": "dc0d1f634a379ba4b4792c23048e8c3e"
  },
  {
    "url": "assets/js/285.4cc7cf0b.js",
    "revision": "2dc33d9d365a127095189851264680a9"
  },
  {
    "url": "assets/js/286.fa87b3dc.js",
    "revision": "8a7036a78782c355b4f66238fb575f37"
  },
  {
    "url": "assets/js/287.f518fced.js",
    "revision": "b6cc09ff6a909fab065e4c9f5600aaca"
  },
  {
    "url": "assets/js/288.db51c51c.js",
    "revision": "1989a0e20cd6decfc7db5eb2506d45aa"
  },
  {
    "url": "assets/js/289.d2dbad36.js",
    "revision": "12ef4c123984c9b932ebcdbc866d642e"
  },
  {
    "url": "assets/js/29.a56dcea8.js",
    "revision": "c5b6ac9543dbfc18b6278c5f6125f375"
  },
  {
    "url": "assets/js/290.776ae1cf.js",
    "revision": "a448db067508fe70f7855650beabdfed"
  },
  {
    "url": "assets/js/291.ca47e99a.js",
    "revision": "afc8264bbb300860f0028e5ca9f43bd4"
  },
  {
    "url": "assets/js/292.a7c4eb50.js",
    "revision": "2f63d052091869beaf21e43982d31925"
  },
  {
    "url": "assets/js/293.4ceab510.js",
    "revision": "a3899d9b52cc7cf4a5be2be5c42c42ac"
  },
  {
    "url": "assets/js/294.300353f6.js",
    "revision": "4941ef70200081ae8d19049c2d63ef41"
  },
  {
    "url": "assets/js/295.90280d20.js",
    "revision": "4fd18b55db498de293f0f4247c4c963a"
  },
  {
    "url": "assets/js/296.6f7ee40b.js",
    "revision": "9cf7390c8770d17be060e0738ab3a00b"
  },
  {
    "url": "assets/js/297.eefa3f58.js",
    "revision": "f47a3508d66ee9c5e8568dee79ec086b"
  },
  {
    "url": "assets/js/298.fe7172c7.js",
    "revision": "2e5272c368d1a8016be13b2ef6d5cfd3"
  },
  {
    "url": "assets/js/299.fd101421.js",
    "revision": "368497aa0fe3f828aa664c84b6a19eed"
  },
  {
    "url": "assets/js/3.dd80ddf0.js",
    "revision": "6ee07c286672077f2b8285469a63059d"
  },
  {
    "url": "assets/js/30.f2adb12a.js",
    "revision": "6a10c02e9bd8dc64eae4c5b5190e1b65"
  },
  {
    "url": "assets/js/300.eda2553b.js",
    "revision": "1922e054104a0e715c55462bd9626753"
  },
  {
    "url": "assets/js/301.9e5b43f6.js",
    "revision": "f984e96ea470d27918f021270f41543b"
  },
  {
    "url": "assets/js/302.adb69546.js",
    "revision": "9ee787cbc69de85e6b401bdc686a368c"
  },
  {
    "url": "assets/js/303.281c1793.js",
    "revision": "d6b089f6ff6f2e7bcacb8ac6a5fb40bf"
  },
  {
    "url": "assets/js/304.d7bb4674.js",
    "revision": "18e944764b5f480be18beb065aa086bb"
  },
  {
    "url": "assets/js/305.bd7289f2.js",
    "revision": "e18a7defeb8224eabf5c78fb116d6c7a"
  },
  {
    "url": "assets/js/306.4fef0539.js",
    "revision": "29bd2aed5a4f7c734204ebf93eec0b6d"
  },
  {
    "url": "assets/js/307.94e50767.js",
    "revision": "7c1e42238a6e242a21c67b918011c719"
  },
  {
    "url": "assets/js/308.43377094.js",
    "revision": "f479fb7b69af029960f2e8639c1e466f"
  },
  {
    "url": "assets/js/309.7415a250.js",
    "revision": "4e0570c7bb4197d52c1b1a4ca77dd9c8"
  },
  {
    "url": "assets/js/31.b7e926b6.js",
    "revision": "cd6ede7dfccaf5636a49a5ffff45cede"
  },
  {
    "url": "assets/js/310.87aa2a29.js",
    "revision": "e62069f6dc6fd204d1d7a32da61d1351"
  },
  {
    "url": "assets/js/311.da3b491e.js",
    "revision": "f9b867c0dc781f4e17a7ac0507d31daf"
  },
  {
    "url": "assets/js/312.54e77b21.js",
    "revision": "065edbb86a4a6d575118501da7b07d8c"
  },
  {
    "url": "assets/js/313.3c58a0c3.js",
    "revision": "a74dfaab1b688be525c366a54e1b3647"
  },
  {
    "url": "assets/js/314.e2061a51.js",
    "revision": "d38dc96cec3f81ea44cad1405bd7bacc"
  },
  {
    "url": "assets/js/315.93cfea1c.js",
    "revision": "42c2652e69743cf3ff99e9782cf76c7c"
  },
  {
    "url": "assets/js/316.842421f9.js",
    "revision": "aa4aeec14aa44b3b30f9197168d224a3"
  },
  {
    "url": "assets/js/317.0ba13b07.js",
    "revision": "5b526e49936a1c2f11a4bf5bc72cca29"
  },
  {
    "url": "assets/js/318.0c4306e0.js",
    "revision": "78d4aef2b65b6a459bee2dadde427d48"
  },
  {
    "url": "assets/js/319.5fcc15ec.js",
    "revision": "3c443f5d178d0ff52bc54fe6f26ef70a"
  },
  {
    "url": "assets/js/32.9bbab342.js",
    "revision": "2a30e567348b588b6b95ba144a372103"
  },
  {
    "url": "assets/js/320.3597bdec.js",
    "revision": "24d8831c3e1657bea8e3f022c834609e"
  },
  {
    "url": "assets/js/321.4778ca3c.js",
    "revision": "d53fa049f98bfd3d01215e9b866a0a32"
  },
  {
    "url": "assets/js/322.f54fa539.js",
    "revision": "e02513a1dede1cc346a8fa3f6d8606f8"
  },
  {
    "url": "assets/js/323.026494b0.js",
    "revision": "721b57ad8a58f3afab104e1c8f172950"
  },
  {
    "url": "assets/js/324.e9266218.js",
    "revision": "d16cd1569235647df73e0c934576337e"
  },
  {
    "url": "assets/js/325.99e3174d.js",
    "revision": "0ac4cf96db6d47627d2eb7dcd958126e"
  },
  {
    "url": "assets/js/326.65730777.js",
    "revision": "b300d453a80815e389911f32e0e5157d"
  },
  {
    "url": "assets/js/327.1e37ca3a.js",
    "revision": "6d8bb2abbbd4ecc9d9525f817a6261bd"
  },
  {
    "url": "assets/js/328.992b3dba.js",
    "revision": "c01a3543b4f608601347a3aad2d36324"
  },
  {
    "url": "assets/js/329.864ecdf8.js",
    "revision": "4262072014893cb505c8eac7041ee18a"
  },
  {
    "url": "assets/js/33.5733d073.js",
    "revision": "79a0c7ab80989ec50ebe94c43e5f107b"
  },
  {
    "url": "assets/js/330.ed4734fc.js",
    "revision": "4d5202cd957bd2000a82fbdd462ab1ef"
  },
  {
    "url": "assets/js/331.28e39d8a.js",
    "revision": "4a013e1a6d51e7534336ee63ae676dfb"
  },
  {
    "url": "assets/js/332.cf2ca297.js",
    "revision": "be7d659133cee64701d7250e99fb5085"
  },
  {
    "url": "assets/js/333.163bffad.js",
    "revision": "07a910adc452b1a972882db0bde65718"
  },
  {
    "url": "assets/js/334.a181370f.js",
    "revision": "6d34388f5ee7352ccfecc79f851886b5"
  },
  {
    "url": "assets/js/335.c38d01fe.js",
    "revision": "5c62ef63a15d7706895a5a356e318a94"
  },
  {
    "url": "assets/js/336.402dea5a.js",
    "revision": "1465d98882131cb8f7d58af736148676"
  },
  {
    "url": "assets/js/337.3b1a8f77.js",
    "revision": "fed8ef13763512c3c6ed94de20dc606d"
  },
  {
    "url": "assets/js/338.26b3cd16.js",
    "revision": "6b94a88b75f4bdf730ed632b04e12be1"
  },
  {
    "url": "assets/js/339.923469ca.js",
    "revision": "490c27ff75df5201113661a5de5085e9"
  },
  {
    "url": "assets/js/34.d9e94fda.js",
    "revision": "10300271a52d0f457985403d2b261249"
  },
  {
    "url": "assets/js/340.a9e98b7c.js",
    "revision": "8316b3b0a5e3ead8d689407de093fa67"
  },
  {
    "url": "assets/js/341.be674afa.js",
    "revision": "2608a7cab7972d446e7e659589da7df8"
  },
  {
    "url": "assets/js/342.012129a7.js",
    "revision": "fca0a739c28d751bee96cdfa2b413cf3"
  },
  {
    "url": "assets/js/343.6d193363.js",
    "revision": "981272f0f7983240eb9746cd41b286ab"
  },
  {
    "url": "assets/js/344.8394b181.js",
    "revision": "5f8e60365067984031561af27e6edccb"
  },
  {
    "url": "assets/js/345.029df7c9.js",
    "revision": "c266a928dff82cf70912d4f289e7c07f"
  },
  {
    "url": "assets/js/346.5c57ea75.js",
    "revision": "e86fd5779a9e5e5b98b57822ca230e74"
  },
  {
    "url": "assets/js/347.a9b67716.js",
    "revision": "40e90c7ea8d4c2b562afbbcfa557b970"
  },
  {
    "url": "assets/js/348.6d25b058.js",
    "revision": "ee42bb5943ca8a487db339a2d240eda4"
  },
  {
    "url": "assets/js/349.9861a215.js",
    "revision": "e108a9927b8a0320867717768cd3c238"
  },
  {
    "url": "assets/js/35.00e09993.js",
    "revision": "21d24e13a755c51baf20dbadf272bd14"
  },
  {
    "url": "assets/js/350.184590e0.js",
    "revision": "9773f75affebd988ee8fc1088e8c094e"
  },
  {
    "url": "assets/js/351.f1beda9e.js",
    "revision": "6b3d035eaea681042cd2a8b01d03a2ed"
  },
  {
    "url": "assets/js/352.06ae7593.js",
    "revision": "37b90240774c2b36f16aa92fc832b599"
  },
  {
    "url": "assets/js/353.bff6cbd6.js",
    "revision": "c529956ae77defb7ae3afe6afa9775cc"
  },
  {
    "url": "assets/js/354.d58f5973.js",
    "revision": "498c986a3977092d8c3298088937df65"
  },
  {
    "url": "assets/js/355.07628851.js",
    "revision": "b928dafdc5a29876a74cc25c6a060819"
  },
  {
    "url": "assets/js/356.a9ede5bf.js",
    "revision": "8f344f9bd35555b68dcefc772b0c98d2"
  },
  {
    "url": "assets/js/357.42a466e9.js",
    "revision": "749bebfbac62e9d710952c0baea1489c"
  },
  {
    "url": "assets/js/358.0639a64f.js",
    "revision": "7fcddd9c391331b921d1748e5933d735"
  },
  {
    "url": "assets/js/359.f47609df.js",
    "revision": "77bedcb4634495811dee1965c701a28d"
  },
  {
    "url": "assets/js/36.663b3246.js",
    "revision": "a8e1d3416f4a0675a8dc94d6448be3fa"
  },
  {
    "url": "assets/js/360.ac97596e.js",
    "revision": "dc88ae85b4f248ac801dcfc3d87477a9"
  },
  {
    "url": "assets/js/361.c212bd2d.js",
    "revision": "d39054001ac73dcc2f8efec3023f9674"
  },
  {
    "url": "assets/js/362.58e219dd.js",
    "revision": "dd015e185a48ff96e7047998837a6cbe"
  },
  {
    "url": "assets/js/363.618c5d85.js",
    "revision": "62e6dce173ef18a7e8c2b351a960430a"
  },
  {
    "url": "assets/js/364.57836c00.js",
    "revision": "275d6c89b14d73f07cbdf67f1d69377f"
  },
  {
    "url": "assets/js/365.57dc1639.js",
    "revision": "f6b1b3105a069b1377e8602c0d6628cc"
  },
  {
    "url": "assets/js/366.f4ab7b0a.js",
    "revision": "11f7a55e0c06421d147d8c7e2f7cb763"
  },
  {
    "url": "assets/js/367.b00210f0.js",
    "revision": "5cebf2bb42050e234ef57bec8932b613"
  },
  {
    "url": "assets/js/368.799ffaa3.js",
    "revision": "8667ae28774f3503a01d28e205936f58"
  },
  {
    "url": "assets/js/369.6bf5a56e.js",
    "revision": "30599dbad1bc3f5480944e60e276d9f0"
  },
  {
    "url": "assets/js/37.d8307e1b.js",
    "revision": "62f3a1ad3452113e5a54756df87b40b1"
  },
  {
    "url": "assets/js/370.9bcdc35d.js",
    "revision": "e336069aba84312b4de35433a404994e"
  },
  {
    "url": "assets/js/371.78dc5c93.js",
    "revision": "6515401310669b8d0df7438f1385abab"
  },
  {
    "url": "assets/js/372.1c8743dd.js",
    "revision": "d5a008cf961772dff11b0618383326f1"
  },
  {
    "url": "assets/js/373.cb1020cb.js",
    "revision": "fd84c630a14742e7e9ce9fe6d4ba4181"
  },
  {
    "url": "assets/js/374.60be3ad6.js",
    "revision": "37dd728614402deb6456b3cff455afb2"
  },
  {
    "url": "assets/js/375.f340ecfc.js",
    "revision": "889435cf53be687ac37219155367dc6d"
  },
  {
    "url": "assets/js/376.b461221a.js",
    "revision": "62b917ed1a7f79a77653ca410b80c88b"
  },
  {
    "url": "assets/js/377.b2a297c5.js",
    "revision": "549afc271424751755cdaecb54f40a3b"
  },
  {
    "url": "assets/js/378.b7cfc6a0.js",
    "revision": "c17a163241846d0f2072bf9235b47fef"
  },
  {
    "url": "assets/js/379.78eda6c2.js",
    "revision": "90bd90d57361d0a24a72675aef5a9f03"
  },
  {
    "url": "assets/js/38.a500a09e.js",
    "revision": "14ba139bdaf842028c401cbb8f9203ee"
  },
  {
    "url": "assets/js/380.0d83ba2d.js",
    "revision": "e8cb16a546cee563ec77355199cf9230"
  },
  {
    "url": "assets/js/381.5dc998b9.js",
    "revision": "755e01306888fccfc286872627c7baad"
  },
  {
    "url": "assets/js/382.54d228e5.js",
    "revision": "47856895565cd864e2e25f3c4c3deb7e"
  },
  {
    "url": "assets/js/383.6bb87bf8.js",
    "revision": "d84a52804f59f0fc65cac350349bb280"
  },
  {
    "url": "assets/js/384.44c44007.js",
    "revision": "cb97640973af15133c9c93ba28d5eda4"
  },
  {
    "url": "assets/js/385.21be5d2b.js",
    "revision": "3cbae223ea034ea4ca04c2a63e358685"
  },
  {
    "url": "assets/js/386.8b806102.js",
    "revision": "75f93e060f1f792d61d696f0273d7ae6"
  },
  {
    "url": "assets/js/387.6e7fe6e4.js",
    "revision": "e6be1b32b44cf4aeda45ab71a1a25f96"
  },
  {
    "url": "assets/js/388.8507f77d.js",
    "revision": "50e94484513948521455a26448d2c7ab"
  },
  {
    "url": "assets/js/389.43d08259.js",
    "revision": "84e57c4bf11b2ad11f0fad3e7e39102a"
  },
  {
    "url": "assets/js/39.eb4517d8.js",
    "revision": "49ed48ee7688f22bb65c7c8e49580d35"
  },
  {
    "url": "assets/js/390.9f2c5338.js",
    "revision": "75ceae8303976a96bebd1cbbde955d0c"
  },
  {
    "url": "assets/js/391.702f5acd.js",
    "revision": "2556883220fd00a59d4d9ee24d9d4a48"
  },
  {
    "url": "assets/js/392.ecbd8f80.js",
    "revision": "75b94f83e661d0e39c24783c23acef5b"
  },
  {
    "url": "assets/js/393.c03f11ee.js",
    "revision": "4b9eaa61f3588c96e865b4db71235950"
  },
  {
    "url": "assets/js/394.c24eadd7.js",
    "revision": "7aed858d827db23f7d20d7d66a4864be"
  },
  {
    "url": "assets/js/395.81e0a915.js",
    "revision": "6eb6846741ef8159c139c946e2df700d"
  },
  {
    "url": "assets/js/396.f8b12342.js",
    "revision": "07963a18d6b4b8ed8f945335fb4f2d0c"
  },
  {
    "url": "assets/js/397.f82ddde5.js",
    "revision": "94586f38cd1a83e339efc5fccf5b68b6"
  },
  {
    "url": "assets/js/398.6534415a.js",
    "revision": "798e0d8c90f66b6e47090082fffb14a9"
  },
  {
    "url": "assets/js/399.97654893.js",
    "revision": "29f3f6e5128212f7c68c2e9e8340f569"
  },
  {
    "url": "assets/js/4.fb88f924.js",
    "revision": "34fef5a9c942eed4a002cee4ab4e5cee"
  },
  {
    "url": "assets/js/40.2928b57e.js",
    "revision": "590d720b3c90e4b2a1237fe19ec8c32b"
  },
  {
    "url": "assets/js/400.a91a16d7.js",
    "revision": "16cec112da3a6c22248930b427bc83e4"
  },
  {
    "url": "assets/js/401.9cdb26bc.js",
    "revision": "195488a762c893ad3ed7ce995987e4f3"
  },
  {
    "url": "assets/js/402.64abba29.js",
    "revision": "d4220841dffd5936225158fe4e72e47d"
  },
  {
    "url": "assets/js/403.15bbaf7a.js",
    "revision": "00bb94c97c0a608ae4474eed780b94c4"
  },
  {
    "url": "assets/js/404.f1f3a339.js",
    "revision": "b172a406931125ab031a33225a791113"
  },
  {
    "url": "assets/js/405.c395b66b.js",
    "revision": "25e47f6e8a5618cbd1090f7c38b449de"
  },
  {
    "url": "assets/js/406.542537fa.js",
    "revision": "030f57d83b7fd721406f3f3abf5c52d6"
  },
  {
    "url": "assets/js/407.3b823a63.js",
    "revision": "ca5596b5543a4e4b6b7574ee34db5f2b"
  },
  {
    "url": "assets/js/408.fd5547b8.js",
    "revision": "fa01223659791ca606cdc895729483c9"
  },
  {
    "url": "assets/js/41.5ec0c493.js",
    "revision": "85337b939800cfc9971ddf34c2a44c57"
  },
  {
    "url": "assets/js/42.79acb748.js",
    "revision": "ceaa8f3a118551499cb8e6b613ca96cd"
  },
  {
    "url": "assets/js/43.7c93d37b.js",
    "revision": "6ecbc28d0b82a6b788782bddbbdd8e26"
  },
  {
    "url": "assets/js/44.b0ccd5af.js",
    "revision": "2b8e3b46c274412ef45ab2c2d9e109ba"
  },
  {
    "url": "assets/js/45.8db38bc2.js",
    "revision": "f00c19711d135999c59d081b6a4b355b"
  },
  {
    "url": "assets/js/46.77abd87f.js",
    "revision": "ead389e7d12733b7b59b88c79d24ee31"
  },
  {
    "url": "assets/js/47.76142be2.js",
    "revision": "9eec7688a81594342e2054566ffb4e0f"
  },
  {
    "url": "assets/js/48.fb05cc09.js",
    "revision": "b7954b1cdbcd9c32b3259f3d669b94a5"
  },
  {
    "url": "assets/js/49.fcddae31.js",
    "revision": "eb25bbf8f9f752fba9ffce41aae25093"
  },
  {
    "url": "assets/js/5.f7cfc7c2.js",
    "revision": "9d257700099a436bcaf781845e544ae7"
  },
  {
    "url": "assets/js/50.b611f75c.js",
    "revision": "3aa9091f63dea508a3d9b498c41f77ef"
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
    "url": "assets/js/54.c44149cc.js",
    "revision": "b5b02ba1f1c4491ed7486a1daa1cfb02"
  },
  {
    "url": "assets/js/55.95dfdcdd.js",
    "revision": "3133ef11045bac24e8366f01ebf43f3b"
  },
  {
    "url": "assets/js/56.c86aaa7b.js",
    "revision": "e128cce36dad83cc2fa587e7554f6600"
  },
  {
    "url": "assets/js/57.e7741ec4.js",
    "revision": "42d9c512feb99137fb79dca944c5cb76"
  },
  {
    "url": "assets/js/58.2a8944bf.js",
    "revision": "a5d66c404287f257212b9d99661fd1cf"
  },
  {
    "url": "assets/js/59.f139962c.js",
    "revision": "8d0571e10f3a5ffe67b6265ef71d0744"
  },
  {
    "url": "assets/js/6.64f902c9.js",
    "revision": "8b62d974cbb0a4cabc0dfe7a78102b9d"
  },
  {
    "url": "assets/js/60.64268da2.js",
    "revision": "8b010637b88841f68e041e5499410578"
  },
  {
    "url": "assets/js/61.2d7472e1.js",
    "revision": "3ed31ad66a51c7adabc3187b08589c6f"
  },
  {
    "url": "assets/js/62.7c40b969.js",
    "revision": "e3a2847d146ada0b53d3a57572caaf86"
  },
  {
    "url": "assets/js/63.c8f49f0a.js",
    "revision": "2c582a1d9b586f72785dca68acf7a34d"
  },
  {
    "url": "assets/js/64.0c5a4304.js",
    "revision": "bac62575688e80a2ae399c2b1b789d1c"
  },
  {
    "url": "assets/js/65.02fe6f12.js",
    "revision": "910df3be6868dc7d68fd132320ee9fca"
  },
  {
    "url": "assets/js/66.b38c6c7c.js",
    "revision": "3ab6d61d1196f932bfef9786de8fc0ae"
  },
  {
    "url": "assets/js/67.53619ab1.js",
    "revision": "b2640a9b93d88de2bd5aa3946d0645e2"
  },
  {
    "url": "assets/js/68.dbde5dd2.js",
    "revision": "635b2ce59adfc127064305efd1a76cc9"
  },
  {
    "url": "assets/js/69.f1ceea03.js",
    "revision": "24aac08895e43b31aa72f81af817fb71"
  },
  {
    "url": "assets/js/7.c45dc450.js",
    "revision": "bcfe271d4b1c19dbcdf2b05c08fc44cc"
  },
  {
    "url": "assets/js/70.e8101f4b.js",
    "revision": "5b0965549dc2130be91dbfd0f80884dd"
  },
  {
    "url": "assets/js/71.66ec1fb5.js",
    "revision": "a85e0ab2b65fe1c1ac8723c060e3ab20"
  },
  {
    "url": "assets/js/72.3fcd17e2.js",
    "revision": "827a7be3740e08da6bd6f2a98d98f535"
  },
  {
    "url": "assets/js/73.f6f3d102.js",
    "revision": "63f8d444e3b805d11fce0bcf555805f9"
  },
  {
    "url": "assets/js/74.8e81a6ce.js",
    "revision": "d79141b296d4da72abd007f9fc468df6"
  },
  {
    "url": "assets/js/75.f730cc7e.js",
    "revision": "9fcd2f05e63db534b355f48546867dbe"
  },
  {
    "url": "assets/js/76.4412982e.js",
    "revision": "345f67cb6b82440e4f1616dead6ce9e0"
  },
  {
    "url": "assets/js/77.b05e96f3.js",
    "revision": "76a73141bb7fb9b601387557aa770b61"
  },
  {
    "url": "assets/js/78.d0ae109a.js",
    "revision": "7f3ecec062ec22e12cb3e5dc299bac84"
  },
  {
    "url": "assets/js/79.60ef8a47.js",
    "revision": "d446682e31c5a7be40aea5ae05bc6191"
  },
  {
    "url": "assets/js/8.d903e613.js",
    "revision": "95c0b6dce6a6c5b3dfbc56fbc0ecf418"
  },
  {
    "url": "assets/js/80.1d34311b.js",
    "revision": "7266ed3bcbf5fafdf38b8de0bd8dc18f"
  },
  {
    "url": "assets/js/81.194f91af.js",
    "revision": "527fc0ed7fe3cb416654d722197f7176"
  },
  {
    "url": "assets/js/82.7b60cb7d.js",
    "revision": "781b932102b5e2e577a3a497c15f7680"
  },
  {
    "url": "assets/js/83.cc7c0ea6.js",
    "revision": "d0c365a512919bd946731bbac4a44c8a"
  },
  {
    "url": "assets/js/84.798fff8e.js",
    "revision": "d497380074511a07365f0502baead2ae"
  },
  {
    "url": "assets/js/85.5fbd88f7.js",
    "revision": "e7d5cbd70fb09ad5826a049291ffe45c"
  },
  {
    "url": "assets/js/86.959d409b.js",
    "revision": "75c135c0bb6b6a5ae46f20f8855b24e2"
  },
  {
    "url": "assets/js/87.8d9c23ed.js",
    "revision": "62e63bddf815f78e2e9d2bab0de51f77"
  },
  {
    "url": "assets/js/88.f99e1fda.js",
    "revision": "874b04ad19404fddfe50324e7da25f8c"
  },
  {
    "url": "assets/js/89.6d9fbb83.js",
    "revision": "628a8d2b2dbe6c83e78e0e2869345e3d"
  },
  {
    "url": "assets/js/9.28675f80.js",
    "revision": "d89c82a0aad9f456f5049a2fad67bbb7"
  },
  {
    "url": "assets/js/90.a9f09836.js",
    "revision": "a58023b81b2967e19f3d2fecae3440fe"
  },
  {
    "url": "assets/js/91.3d6ce3ab.js",
    "revision": "e298d4d0fff73a5ea5f9b9ed62e15d14"
  },
  {
    "url": "assets/js/92.1e80cb6b.js",
    "revision": "71a2ebcbdb06ce3cfa080558d61cb5fe"
  },
  {
    "url": "assets/js/93.17f0e365.js",
    "revision": "dfd325b587c21fb372ae5fb4daf90443"
  },
  {
    "url": "assets/js/94.16b6e22c.js",
    "revision": "75a3892e98b606f91eb82c3c186c8fe0"
  },
  {
    "url": "assets/js/95.69e7df35.js",
    "revision": "f5c70daf13ac6e5bfd2c78d286892542"
  },
  {
    "url": "assets/js/96.0f73f75d.js",
    "revision": "60e5b12e23ecef7c17a0f7e1a9b73096"
  },
  {
    "url": "assets/js/97.30980d48.js",
    "revision": "d358c3a8226c42972bb8de0595882050"
  },
  {
    "url": "assets/js/98.d98fab0e.js",
    "revision": "a50630ab882df690a454764179dddfe9"
  },
  {
    "url": "assets/js/99.531097f3.js",
    "revision": "f6bfebaa77a4ea3d541fe47aa38f5def"
  },
  {
    "url": "assets/js/app.ed218ff4.js",
    "revision": "f59a9db320300983177f0a2547b70af7"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "c9c677c290b2ebe729828a73debfb1b9"
  },
  {
    "url": "blockchain/solidity.html",
    "revision": "94f418cc3a405d18584a82c756f9aaab"
  },
  {
    "url": "common/architecture.html",
    "revision": "b44fcd65973cde933a8273b8582ad03f"
  },
  {
    "url": "common/code-structure.html",
    "revision": "216e37aab10d32a550e6108d888e7d37"
  },
  {
    "url": "common/crawl.html",
    "revision": "09fd3b98d568941fefef198e2bd94413"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "654443bca6c1bf5cbe13455535df99e7"
  },
  {
    "url": "common/debugging.html",
    "revision": "a2b528fb8e1b1fcc3cf910606b6b4ac5"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "e84c5555394bf48c4f1ce808804aa03a"
  },
  {
    "url": "common/document.html",
    "revision": "898272ebffcdb57f9a513d95ad6e0581"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "e4e511e08d8ede37ee8095305bf7bb89"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "24ee2017dbb1c3d141547b0b9aef2512"
  },
  {
    "url": "common/index.html",
    "revision": "074f92372e5df69da0703e7cef1369fc"
  },
  {
    "url": "common/optimize_be.html",
    "revision": "10523296cf4dd32f96a1e0feb628db05"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "06a7c2f7c9c53e410efff823aeb4ed21"
  },
  {
    "url": "common/realtime.html",
    "revision": "0ab75386b9df0ec142879befe9b88267"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "5ae71f56250237091afe4459bbc5a424"
  },
  {
    "url": "common/refactor.html",
    "revision": "50469ab427a84b86ce947e4697af0747"
  },
  {
    "url": "common/seo.html",
    "revision": "760f570b76c3e4820b810cd4c56056fc"
  },
  {
    "url": "common/use-case.html",
    "revision": "21af091c513eff6d57d9df86da61ef69"
  },
  {
    "url": "css/box-model.html",
    "revision": "18a276bf981223383a8b26a7e9eca7e0"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "eb300c41480f7167e063cc3faa9dfdc1"
  },
  {
    "url": "css/css-flex.html",
    "revision": "4a0aea119c9591caa061eafde8b14e83"
  },
  {
    "url": "css/tricks.html",
    "revision": "1997645b56b2e13b855d57f09e214b2b"
  },
  {
    "url": "db/architect.html",
    "revision": "a8a2788250be4fcededab276a97e7050"
  },
  {
    "url": "db/cassandra.html",
    "revision": "3ffc63a4da9ab8e3e76a51db48e68203"
  },
  {
    "url": "db/couchdb.html",
    "revision": "f000d69b251894a428986f2a6629d81c"
  },
  {
    "url": "db/db-concerns.html",
    "revision": "31b880c41089da9367a5eba178b44837"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "3b834356bf48e8daf0fd6dd8c4b10c64"
  },
  {
    "url": "db/db-vs-blockchain.html",
    "revision": "e5ac97a3e6b6a932343a82cd2abf2672"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "f8b6d2cb0192559a9df85c70c9cd9ac6"
  },
  {
    "url": "db/mongodb.html",
    "revision": "a8aa4b0adbfc59d00742716426934be7"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "58e1e22a67fc7d96ae0f4e72d5a86eb8"
  },
  {
    "url": "db/nosql.html",
    "revision": "10c5cba0337b1fa086260ed49f06d1f0"
  },
  {
    "url": "db/optimize.html",
    "revision": "9cce62abe4021f304e74daf5f5f0df6e"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "92bbcb30ec2779e07490f2b431e6d9e3"
  },
  {
    "url": "db/postgre.html",
    "revision": "0373371d8c4710330f64723fa64826e9"
  },
  {
    "url": "db/redis.html",
    "revision": "1f6f41db940dba72442eb177d3fcac8b"
  },
  {
    "url": "db/use-cases.html",
    "revision": "bba9b4ae0963528f3440f10a46528c21"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "3bca1f6fc5064d57b269838cbfbd300b"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "00acb297b61bfb062eb7b6967d1ce3ff"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "7ca21e3b896c97a0411afc0c1b4ef57f"
  },
  {
    "url": "fp/fp-ts.html",
    "revision": "669356979f544caba9687168cef5e210"
  },
  {
    "url": "fp/functor.html",
    "revision": "8164c260b7e17fa6b1940e9070685359"
  },
  {
    "url": "game.html",
    "revision": "6a36fedb61890b7114442cc2e324a962"
  },
  {
    "url": "go/clean.html",
    "revision": "22157bf255654268e134fd2b6d15f784"
  },
  {
    "url": "go/index.html",
    "revision": "c4547e6f80176b723d824172d67b9172"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "ac7d47e05a0ae3c909f9c84817839527"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "cea79f0e834a9ed48266897fb8113f9d"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "23b816da80a33ab5e346cbd761c61b37"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "78dd0d8e719f7712bf34f39cb554d9ee"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "26e5c215f6e7a1a3455f23b1e9366e9b"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "eae1c4c4943cce65e49350f1a2168c15"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "d00b6c20c65ea6ad70ff7753e37678d6"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "79df41bfd5eb8a236058f3dc8932ff6e"
  },
  {
    "url": "index.html",
    "revision": "0aae7eaf84d01a8bcd1133bf3075a47a"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "7d86b3e4626f02a7035ea7c2c247d9c1"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "0a906b84cfde241e6b7850c0ec3ee15f"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "bd0b4fe1c7fc362355f32bff8081f178"
  },
  {
    "url": "javascript/closure.html",
    "revision": "f4aef24ea0bab40c756b3dbdb50a982f"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "8778a447df1e8ef8394652274354ef75"
  },
  {
    "url": "javascript/eslint.html",
    "revision": "76cd8b2f9f9bcb98f759307252d68a8c"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "f28a2efd91c2185bd2c357907ef28ff9"
  },
  {
    "url": "javascript/nestjs/nestjs-cqrs.html",
    "revision": "38c4a7a73ab4df6b05a5d1c2180a8b70"
  },
  {
    "url": "javascript/nx.html",
    "revision": "53cfe3b2a601fdd111b52862f6f7195e"
  },
  {
    "url": "javascript/rxjs.html",
    "revision": "50bf19fb5fe58be1197bff7bff54bbbc"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "17d6cea7eb94601e3d0d833507e23ebb"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "d18b8d9bb80a528a1952b67628b0fc0b"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "9ddb87d3403415680ec1a1208ef0f37f"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "f353122d7c4e6cc34a59112af8febc88"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "de0c2ec1c54a72a77b86b1bd195ff175"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "26b8838ac4b33521e47264ea86cf6f32"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "9bf7c9e87112ed5403babaf4dd5ae76d"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "7039426d4e5407adcba30f5e8d96460c"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "774bddee28a6075cf7f1f8b243f1ae17"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "b541d36c584b25d8a8856a8a734fa129"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "71e6f67cf7e45a5f9b97bc60f5a962b7"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "2f7de82a95197cea7a3e35b4255a8f95"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "0b10ae60ece8e1a0a2505bb19fafdec4"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "c868d913404585d5e5ce60689dd0dec5"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "f231a7bb8acee3043ba9a9fd4f2f0d1b"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "c22735afbf4215c132659c00fea3fc40"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "5551a1c7e8143307cad50abda0cc603b"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "1c9dfa529a32737ae1eeb006d3d10632"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "46525585407823f4c09c0921084772d1"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "3f115c43d390fb5c0d29626689e1d123"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "4d8197415d902edd9f785f8ee6fe4342"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "43d62b9fda4995d28eb5e28585a284bf"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "495d2b2f0e44e6baafa745d65e2b2e48"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "b15618c89450d389b831544b764d925e"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "96a1817bccf1f378760cdd3b40422af6"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "d62dce94eb1533d5e05f09cf691bc3ac"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "9ccb4a697367935c8a42125ed63e314c"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "ccee989254e96175577f24219595f187"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "fb965412bab7cb3b1985281e107a2e1f"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "8437fe589cee06839b6240273fa0e8a4"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "a7db87375c52d29a295bc2c2010e051d"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "caca306113bf046116ff13fb3aa50573"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "d7edeab7ba067bbf5de41333f1a2bdb7"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "c9543b2131265b42221a398c52428b49"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "b9c3e8f43da34ca2ad12020dab548c06"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "fa184be093ac6cda76061390e8458c02"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "5086b954a7c2129190bbca88e54a9cde"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "ce2d577c50cbafdbbddc4822fa0b2c3b"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "dc25ae194ed190067d6b7ce6fb0c262a"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "ab02c231f5d63b7d2874f1f7ef335ed0"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "b73bde1ecea0d30acbc24a35c76008ff"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "ab3b445ed01ce441f84c756b66190a47"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "b924e548d599e52329cbfe8eaaa3565c"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "95e5d035f921461efdb302460b8be81e"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "849c2faef0a9c3de7de45569a65ac443"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "d4a2473b224341be54d7e0fc58c7baf8"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "ca505e5808e23df52e5d2b8d45db7da7"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "baeb697a97d81dad1d7ccfaa4a34bf5b"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "468630c72716dabc8762ffa3408bbe4b"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "8aad9bc34c5c0fd4376249923eeaef9f"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "50b763e3840890f5d0ece7a70122c4e5"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "764b8fbf7b290d221c1f79a95acaba2c"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "ac3b849e3380e32d1e0ef9ae747a3364"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "20cf70cc33be1dd40d77b0082db63ef3"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "158380812c02a2d585f30fdf9aca4d34"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "d57e5b776fdf57c0880c50519d85e75f"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "45735df4bb79fc0587f3487f2abed73c"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "7d0a92f7a27c7f74f01f1e4dba24f0e2"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "8e3c75c7bf7a74989c3745f3a783334e"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "d4816755a32466e2e093220c21336621"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "7e1cf26d16543ee32371cc373cceb670"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "d5bf513da2cd555c4e2b099b4d505357"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "ddc46db29efa91f33f3353f5e5d4595f"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "69c1791f931d0c2da0879397ee4e1875"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "4e5a1914f780fdacd6446ab210509881"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "5583fa95fc8c39fa73d3d2e607f3fcab"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "135088e6a2276e5bee5bef83d4ff5a33"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "0377e7aa5ee0b9b4b24a9afd2a8721d5"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "3b2c4f0649d3a4b1278630fca59e900c"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "080dad5bb2b7f7e09a3e3c491038109e"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "9855e9ccf0534cdaf8648d04198fee69"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "b516ba8bf788b5f1d4199e65512e6424"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "2d8b36fa1b423f08109d77babdc450cf"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "6b421da93cccf11fa7cb9438caf45750"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "08fc937893d742ea7c8398d84a806cce"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "372d54fc8d6202173b6a6e7bb407828b"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "e9d34d5c804bbebc45f2f6d20816a1ef"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "ea6f1bdc3a90e61f2724ded26e3bf67e"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "811e9109343c36e157bd183fe7965377"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "a148cb3b7856f1bd1ce9d51db358004e"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "bbd6882f8a042918f69a116dde6dbfdd"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "603185d8e2923ee726d54b7946c332ac"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "2f94b995eb0c35967d4f6e568890e032"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "ddba4a1e1200d56bb830da7c38e7c568"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "74c15729d61625a1d3b020b707d8cb7f"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "71506233d693e890d6f7254c20817a43"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "c0111ba4acf4f59d0951e3c0da2374bf"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "94b9db9807a5eb671a6ff37481c4c903"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "8f152f66baef6de059d571fe7a65cbc5"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "2f8be8651172fd930b4261b8bc5abfee"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "6e73bf3513baeb1a67c2b0decf42167e"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "01f57aba6e74c2eaa5aec51b2a9e15bb"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "f8d179ec682ca51a20e41676da61a38e"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "ccefa1eaa14dd1ed973309238516a18a"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "136ae9af7a2842f80589040af0a3c50b"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "20dfd67acc5ce005fcb4de1b764a4bb0"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "93c0b4cbfca7fdb31b000273d02dc733"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "aaa548bc11eb0229210e41bef9d14e5d"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "f1ddb03715007ef48b14d6d5083681d1"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "55bd68e022a4ca2ab787d926b13a732c"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "5acfd4e49114fdd8bb4b69e63154f470"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "4522a3145e7c41673c09f28c01b568dc"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "215ccdc3000b50be6870202ca8a5251b"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "0c462dd216d4484ad8dc831f630ecd18"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "36a6ea7f14996440c1eaa154bc799f8d"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "148cda7d9eb13f444428b48e079ffb40"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "97ef5c3caf865952e05cac9e37ae64e0"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "0f80d775f2a916c98a29d379d042a792"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "d61408df33e2118a9d588cd4b2bf8b73"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "23c0ad7bfadea0ba6c46db95cb713c8f"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "09d78be1b59c1d92e109bf34fbb6aa6c"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "1859ee21e62f44bbb26a76428d46d10a"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "ffdc442496a27c31b81d66b656f3be10"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "3d1c66b29e78d47ec90aa247a64cefed"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "09f6219bd177203fd9bd6476b085a3cf"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "408b07e022ea5e92c975dc27297d3cf5"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "f80c5672ad0a5e90c4ad1225666123d2"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "0f4c55740f23bbdfc7b158adde9a7bbc"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "17f115286711885d2b725e41df421f75"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "e0b6a593c92438ac0fe46e6cedfeafa2"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "0d6820462b0ef3ee164a25a37d7b3935"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "b68278c578e413f0564feb3a20009ad8"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "02b2966f4a9f6b0c8772c5910311d98e"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "806e96e4518aa57f64743c1da5b793d5"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "7d346eb0c45467a8a44d551cd143c6d7"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "314c66ca31f4945c896ea4a482237389"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "a1e4dc62884de25ff40a31252c4bac0d"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "41c9419b27eda0df16b29ba96b56e875"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "872e05e152b8fb87f997e78a086eb404"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "59c9f5a5d09131ac7e4df5afcedaf60d"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "78a7646b58494637f3c1bdff46b00512"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "228a65c37af4de08b0e410b04aa67ecc"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "712f545a51e66c84958c2953b91b213c"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "03d8cadd1e6992e008adc0bee2b7c756"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "3ee308110225745662b6d10a070477c8"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "f1d01ee3532253d32a41d78bd0e19c5a"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "10813bd28613c8942d287c1039ee0d9f"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "841074b52e86924908e9b762a7debc3a"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "38ff1e93ee4fac6213845a0104691156"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "17262e253d8712629647ff15487e0ea6"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "681c5851862375747a1fc4ba8a244eca"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "a79a1bec5ed69756352ec71001472e13"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "f6e151f159d6ed34d92eaee81f0f9045"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "cbd2df876a5afca84bff5ba1e66b1764"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "b181da81c2d74b6556143875eb761590"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "d6501eb5e3e61a3d50de9b48447efc92"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "0bedcc290c8cad72750ce086b73a00d6"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "5446d28c1310eefe09e3524f4a1a6ab9"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "15535aa8d77511a9ed4f8920813da60e"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "54a3a023ba293580edadccb179534f48"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "3848ac0b74f629a07a845bc940768656"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "8b04cfcef92a4ef4c4a451b323686d25"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "5d8ba0c915014ae893a54dfbd5b761c6"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "06523b8fa1876145286a4a8b269a76ef"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "f4777bef65b2394658acc8619d73aed7"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "70b565b7d4a063b0906e8a9a3df4b290"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "6848e5b3892d41ffa4374ad7913de199"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "3774ded4723161deecd23c0b2f421dfb"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "ee2b482733c695b0dbaff03e6e7bd367"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "c592b5b9f14a8940731b128547deca45"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "eaeb991890c9e8a2f3bfcbc336cefff0"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "154f5b2f38dcc869443bab89ff071974"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "8a16e935c70f47496d001c2e20155690"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "868e0e2325de3212655a670d1934aeca"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "af02801ab1278e39aef0f1665611e7e7"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "4589242f838c594750b71af55911f62c"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "8ff53378213f404e3f8490bc53497288"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "c7f8ea0b08bf7dd2d2b3d0142a2bbf7d"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "5acd556863f26a1cd4f946ec0c50e3d2"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "62a97c2595ed9341c4c012b79dca4153"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "1d10d21463a9006384c87910f0e79d12"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "ec629459ac79c0d8542c7b01154dc659"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "1772280c902fa69d842546936025036f"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "f8c13e295761276b0314d3a326628ff4"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "b85ec4c18ac191ace8130cd3c373eb50"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "94587a54ebe304df3f6d6c0d1d6dbd92"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "e02ab7a879a5c69c9d0c7796c7272db0"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "56a21d3381ca71922b54a15807af1764"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "cc734a62c4e70137f924a7c4b7fcf635"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "941c172712dd29107b864db3c1eb4325"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "3b1840e8d36ca1e8f0200f50198a12df"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "915bc7e8737f8333413dd9116a3bad51"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "1da4fb238ab682eb6030518333a54aeb"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "3db01eb31dda639c1642d2611fbfa4d6"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "19575196faf26b31b764df4d9630d410"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "df8ee064139154b9508bcb87cfbdbb44"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "13ed5aeba28383b9f4514598bcd15d41"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "1269ed29a35a8e6c1a390561b57378af"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "452b2d3c6d73fbaee5e678a5930f0ff8"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "e313792de652c079967f21e63b62cdc7"
  },
  {
    "url": "kungfu/template.html",
    "revision": "7069be8cf0b4e19518a9b74dc0e0c4c1"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "2a3488ccb440b1a03036add56ae69e07"
  },
  {
    "url": "node/env.html",
    "revision": "a01152ff0cd03bab0ebb1a975694f83b"
  },
  {
    "url": "node/index.html",
    "revision": "954a7aa0fd880fa5c5178e3e5ff33445"
  },
  {
    "url": "node/n.html",
    "revision": "769eac3815feebb64e5ef286cd10fca8"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "1b6050e0ce90389ee22cab3eca90e89b"
  },
  {
    "url": "node/npm.html",
    "revision": "7bff258a3a0561f9d66d095c6ec0fee0"
  },
  {
    "url": "node/sequelize.html",
    "revision": "e2f7711f388aa9d2b12dccd9c6d67e28"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "47ddf3bcfa9b669da81a8bb6ba0dc340"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "7f16f80922605ff8419954f0311a06da"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "6a69cb7b062d79b2172884abcb17a766"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "a1f7e56e4369bd4a185cca311e186eea"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "027b98abd5b322b003df91b06279b1b2"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "05120e0e276bc71dc61d15a6b3335fd0"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "d6cbe5ea9d616a6812663646b88cb80f"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "9f13af54ed23bc33412a015900f00459"
  },
  {
    "url": "php/clean/di.html",
    "revision": "85b421c102ed08be9e268afcab926f91"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "a50eb4c2d2c6e15250a50efc4beba642"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "2e313993ee4f5be0b7b779498c043047"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "634b23ada59237eb573d26bcb153a5d4"
  },
  {
    "url": "php/clean/index.html",
    "revision": "ba1f645f6ea34e1b5642a11937f6a600"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "48e3f2fbaed9ac0664b6b7fce1480b2f"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "4d176eeca7ca6b7307d6f686bbd1c87a"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "a0eb10bbb26b6bd10573bd5700cf01d5"
  },
  {
    "url": "php/composer.html",
    "revision": "12bcd95d6650c5f32daaf85afe47cefc"
  },
  {
    "url": "php/crunz.html",
    "revision": "4509f3f5e6ada340301b6322debc1fa5"
  },
  {
    "url": "php/laravel/best-practices.html",
    "revision": "7d151b2866b15f03035f54ec38b79518"
  },
  {
    "url": "php/laravel/laravel-notes.html",
    "revision": "6ef0eb35ad9c309a4111ba89e38b4039"
  },
  {
    "url": "php/laravel/patterns.html",
    "revision": "3c375cd59fd7a20887671412e19fb669"
  },
  {
    "url": "php/magic.html",
    "revision": "d4490147147e91ae176fe0976de5fe02"
  },
  {
    "url": "php/notes.html",
    "revision": "04d79cd9cec2893899f084fe3369983b"
  },
  {
    "url": "php/oop.html",
    "revision": "7c2a854ccd93e1c5fd9539f4a7a616ad"
  },
  {
    "url": "php/php7.html",
    "revision": "49724a40b3bc120713e1351216cae4f5"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "8647b24fedc4b72a0672b82858594003"
  },
  {
    "url": "php/reflection.html",
    "revision": "fea6fc66d2f561a2636320b2ecc59f85"
  },
  {
    "url": "php/tricks.html",
    "revision": "fe2ad306c526b6465ba1deee911aa254"
  },
  {
    "url": "php/wordpress.html",
    "revision": "7aa9540a006d29b3f5941916d3c5ce17"
  },
  {
    "url": "quotes.html",
    "revision": "0e2673877310d22f4e7c8a75746fef5c"
  },
  {
    "url": "react/mobx.html",
    "revision": "fb368d2b8669e71c743a8f1a47b96d25"
  },
  {
    "url": "react/nextjs.html",
    "revision": "708081a7613bffb0ec1ce1f940cbf382"
  },
  {
    "url": "react/react-native.html",
    "revision": "21c1d602f7dc46f713c891f42bb5a9b4"
  },
  {
    "url": "react/react-vs-vue.html",
    "revision": "4cc70fbe5431abb96a1da12c3ddfd2b0"
  },
  {
    "url": "react/react.html",
    "revision": "6029b5d727fb2576cf6562328d5257c3"
  },
  {
    "url": "react/vue_react.html",
    "revision": "5015524e71ba41fc55a455f569192c89"
  },
  {
    "url": "refactor/notes.html",
    "revision": "556fc3262d0044d20a49403587fb7e4e"
  },
  {
    "url": "ruby/ruby-notes.html",
    "revision": "0332a7b65f023e51f36471ca8d2da9e0"
  },
  {
    "url": "ruby/ruby-vs-node.html",
    "revision": "37eb30a3bb85c275d21c2a601c2a1ef8"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "6ce586b994438126e527d1d718eaeb8d"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "b52a6549833a5a7d309b53e071236859"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "c9e0595ec422aaba72ba675c1e35c5f4"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "0cbc09c8e6f0629a80cb68ddb19f4f4d"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "0fbaec8491487485f8a675a80ef01710"
  },
  {
    "url": "snippets/jest.html",
    "revision": "e5c18b07fabc8c28abf80b4a0670c422"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "36c969f6d592047b5a0e1b2e7f019b5c"
  },
  {
    "url": "snippets/regex.html",
    "revision": "624ed54ceddc803d3bed7a4425450099"
  },
  {
    "url": "terms/12factors.html",
    "revision": "4a6adf140f1edc9e400d71e22ece740c"
  },
  {
    "url": "terms/architecture.html",
    "revision": "84cf270ce61a7b92334b85f550a075a0"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "3f41754b8875f1ea4fb625a044dd389a"
  },
  {
    "url": "terms/di.html",
    "revision": "888030844464de87d28413c951dbe826"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "688bc9ea1fea987b4f2aa07ebe121840"
  },
  {
    "url": "terms/javascript.html",
    "revision": "636ac2b43a8b497771205244952a8a66"
  },
  {
    "url": "terms/patterns.html",
    "revision": "9a67d84a85115e46db9e2278c9bbaaec"
  },
  {
    "url": "terms/principles.html",
    "revision": "7d04b5448dd9bf2fe21a90946642dc13"
  },
  {
    "url": "terms/rules.html",
    "revision": "d574560b8cf0287fdae111459be5b0fc"
  },
  {
    "url": "terms/testing.html",
    "revision": "84bb60414f53e8d5d172f1764be2713d"
  },
  {
    "url": "tools/chrome.html",
    "revision": "968c156a6861aa26509376245220ba15"
  },
  {
    "url": "tools/docker.html",
    "revision": "9a9361e78800562fb867b70e09691eac"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "1d152601d190b96e734ccfc65c0543c9"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "00a2ff30c3face97a67743a094e8df9a"
  },
  {
    "url": "tools/graphql.html",
    "revision": "6c8300656f8c9eb7f481d36fd272aeb8"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "59b03d50e915202553ee7b75a2ddb1f8"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "6d17d71ace600f534a28ad43de6cf61a"
  },
  {
    "url": "tools/redis.html",
    "revision": "750314dba8d7c29336a7cb044aed3ea1"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "a6175c5174afd7d0e5daa5c98fbe2fce"
  },
  {
    "url": "tools/vscode.html",
    "revision": "d4ab67af057a5269c0eab9e98c64cd78"
  },
  {
    "url": "tools/webpack.html",
    "revision": "f9bfc9643b3b410cc42b0c08dbeea465"
  },
  {
    "url": "tricks/compare.html",
    "revision": "c0c02caaaf4b4c56ba0dc57b7f790ced"
  },
  {
    "url": "tricks/git.html",
    "revision": "754cfbd812a3fa2cb310a7ef717dc56a"
  },
  {
    "url": "tricks/linux.html",
    "revision": "04ddc635c134d623e87f7cefcf5890ef"
  },
  {
    "url": "tricks/mac.html",
    "revision": "7f0baa0646c5e8b0106936cfe5116a85"
  },
  {
    "url": "tricks/misc.html",
    "revision": "04e52fcfb00145e558c6a89d64859ee8"
  },
  {
    "url": "tricks/setup.html",
    "revision": "f6d3d5551e305bc715b48240c3fe5e9c"
  },
  {
    "url": "vue/communication.html",
    "revision": "c985f9262380d27f949a5eb9a506082e"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "6201dd9d781b9673644ff280824ed2ac"
  },
  {
    "url": "vue/events.html",
    "revision": "5fb7bbcd232c62efaf818f186e041484"
  },
  {
    "url": "vue/references.html",
    "revision": "604a5bff5fded2fb5893f081c48eb207"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "8e4654dc966f83d6bedb7131c75a3c91"
  },
  {
    "url": "vue/test.html",
    "revision": "261b7ab5cc8b6a21473aaa603d1b5e87"
  },
  {
    "url": "vue/tricks.html",
    "revision": "0ac1e68e9144de634f134070f0ec734c"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "73f66e04083ecda22e74dc315e5791f6"
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
