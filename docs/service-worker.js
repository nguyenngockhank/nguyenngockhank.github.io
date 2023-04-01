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
    "revision": "f0b5296e3e3d58fb068c4080dcfda081"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "1dc65abd25c1f1ae1e374c7576436c1b"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "bd2aef0a61a1da3d6f60c9011ad90c44"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "05359819271ee762f5036649c25f1446"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "88804a4b40570b00173070f731bc1ba8"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "7f75bbcdc49e3684c0c34c3bc96a1aa9"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "713e806796fe1678360c595e8142fce2"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "603b168fe513877db186a7952398c490"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "71a0225d97a1ffa81e7c65f7e6f2e2dc"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "6fea38cb767c0dac9efcf8d6326106bc"
  },
  {
    "url": "algorithm/string.html",
    "revision": "fac78f48436c45e0d394b6ff5f4b805e"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "c93c3dab79d4b25b3c5f61fc34d48818"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "c8d5c2e45be4a1680e84f70bd5d455c4"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "e782ccf53427e2694875c2f50309750a"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "01b4faeff69caf8bec02f5baf605f308"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "d994621c1a8618f1bdb8e54ccd4f1bce"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "e5f9018f05fc3e8bbac10a3c465a473f"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "b6b0590b4955f094db4c5b8a1e61a941"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "8b706ebef24c5727cf88978530ef5fe7"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "46ac214f9d9a027aba1c308e5fa27f38"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "5e3809ed545dc178256b819f6176052d"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "5be43a1d8122b5e03f7aa399e1071a6e"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "55911a30c2de9a294bd4a8cd2af9526a"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "cf1fbcb610a983d7e54560ac8a343bd5"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "220b7f69d5db04b5a511a7a293a5284f"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "e370165505356f8de4194460557ca194"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "d89c8c972bce1963433d08d5a5f000a0"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "68bf35b0965c4d44f31c93fb7986c563"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "a40f54c22de1ce179fed80c19a7bfc1a"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "18048d17d80585b9ada1ece6fc9166fc"
  },
  {
    "url": "architect/authenication.html",
    "revision": "282587028ae48c1becb481e2ac0f4a5d"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "f9fb68cfc5df90c9f9f4bbf2a6073b10"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "80f90552de016863e578c003dc14a5f5"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "4812f6c7cabd986ea81d63cb2f1a270e"
  },
  {
    "url": "architect/ddd.html",
    "revision": "46e77029e996023b2a282fd28fd7182a"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "45ffa38742fc70cee75d6279e89617b0"
  },
  {
    "url": "architect/ebi.html",
    "revision": "62f916a2f8b2e495e6d83c344b8283c9"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "aa65b0d378ab243aba81cb4386b47554"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "1ffe7b3b139439d196b3dbee1383a180"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "6f8079f0509affcdec233693288f8c98"
  },
  {
    "url": "architect/index.html",
    "revision": "4b70b6dae9dd20bda89308a3719c1a76"
  },
  {
    "url": "architect/messaging.html",
    "revision": "891c1cf441b6d248216fa55368919a37"
  },
  {
    "url": "architect/microservices.html",
    "revision": "e9c1a6dc57dc261f9f8a954abfacdb8e"
  },
  {
    "url": "architect/mutex.html",
    "revision": "b6fa8bce58435470dd3eb6ebed44fd1c"
  },
  {
    "url": "architect/notes.html",
    "revision": "d51001d156226d2f83763e312e207344"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "cbcceeba5e9a4aa627dd8a1a13051a8d"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "241016f5bb839f1ae01b4cc5d6465514"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "b9d28084e95f385129901eab2ce2f3b1"
  },
  {
    "url": "architect/refs.html",
    "revision": "3c4444aa071f5fe7d47a7f33b3403a49"
  },
  {
    "url": "architect/restful.html",
    "revision": "1a2635c14bfc11c01408f53250c93446"
  },
  {
    "url": "architect/soa.html",
    "revision": "de3ec0b7b327fd6fe48a6529eac07568"
  },
  {
    "url": "architect/spa.html",
    "revision": "1279122d4f4a97e9b4863f1be2dc8fb9"
  },
  {
    "url": "architect/terms.html",
    "revision": "374a2fd22ac516fae793cb1ca6fad411"
  },
  {
    "url": "architect/webservice.html",
    "revision": "5bdc7947e05075564364fe1e47cf7e15"
  },
  {
    "url": "assets/css/0.styles.07ea931f.css",
    "revision": "0849bef0f578290ccd2dab40dc252d59"
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
    "url": "assets/img/react-lifetime.09f698c7.jpg",
    "revision": "09f698c70d89d72b146653ce67f79c0c"
  },
  {
    "url": "assets/img/release.8458878d.png",
    "revision": "8458878ded8446c6cfc0385236ba7fe3"
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
    "url": "assets/img/strategies.0b9fdaf0.jpg",
    "revision": "0b9fdaf05784ee44b9c82510b8ca62fc"
  },
  {
    "url": "assets/img/stream.b5997343.png",
    "revision": "b599734352be76ead6ff27ed1eb3c126"
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
    "url": "assets/js/10.1db56efd.js",
    "revision": "f9b4be2e413beae311e3e2dadcb5f4d7"
  },
  {
    "url": "assets/js/100.104e2ea5.js",
    "revision": "7c9760587ec0f19c72f09617977df060"
  },
  {
    "url": "assets/js/101.6bc527b5.js",
    "revision": "3867ad36b9fb5d99cd7c8764f6fd07ba"
  },
  {
    "url": "assets/js/102.317c13ba.js",
    "revision": "40e7ba28af50b7fc402c199adb6adb94"
  },
  {
    "url": "assets/js/103.92f69fd9.js",
    "revision": "c1c6029e6876ede6bc4437bebb0e2da6"
  },
  {
    "url": "assets/js/104.0c3fef22.js",
    "revision": "2f5ee3f05797c575f612fa026c201fa7"
  },
  {
    "url": "assets/js/105.174b62e7.js",
    "revision": "3258b650541043c724a0f00e6c3ab27a"
  },
  {
    "url": "assets/js/106.af98fb20.js",
    "revision": "00ee08a520d97b445302b50e24b9005b"
  },
  {
    "url": "assets/js/107.898aa334.js",
    "revision": "f849799099f6cc8e6f0fd205daada3e1"
  },
  {
    "url": "assets/js/108.54d231d0.js",
    "revision": "a3c098518e0e9178d0cd13eaf5410975"
  },
  {
    "url": "assets/js/109.6ea8aea1.js",
    "revision": "2b530a67eb59361d829bf0f1eb254d76"
  },
  {
    "url": "assets/js/11.573ccdc0.js",
    "revision": "25b4c89acc5662838631376e0ce2e092"
  },
  {
    "url": "assets/js/110.08e54034.js",
    "revision": "a23984b124f4bc30b76b2f21a8433a41"
  },
  {
    "url": "assets/js/111.d053948b.js",
    "revision": "9f60dbe543fdb8c4e27471e9018eb34b"
  },
  {
    "url": "assets/js/112.1b6595d0.js",
    "revision": "c59a0109ff6e2106db3e007fc58fa21a"
  },
  {
    "url": "assets/js/113.1f66dbc7.js",
    "revision": "3ec8e9ddbc6067bbc3b55ece2282fb89"
  },
  {
    "url": "assets/js/114.c50b7402.js",
    "revision": "8222d9685645c97ad609ed44bb8ce57a"
  },
  {
    "url": "assets/js/115.1503d2e6.js",
    "revision": "a9809df7ca423a43b72a03f7587c938e"
  },
  {
    "url": "assets/js/116.1fb42e62.js",
    "revision": "efcc6614d2e78bbcff45ba408134a2bc"
  },
  {
    "url": "assets/js/117.64d9312d.js",
    "revision": "3d507a090eaaaa7eb9fb775870f18c53"
  },
  {
    "url": "assets/js/118.bb6a02b6.js",
    "revision": "293de4111e163654c6326edefb5e1bf0"
  },
  {
    "url": "assets/js/119.c5a3362c.js",
    "revision": "2e4a4fd88957264f74784b8bbe25116e"
  },
  {
    "url": "assets/js/12.f9a906a6.js",
    "revision": "22a36a7ff4f704d886b4f323f06ad4ff"
  },
  {
    "url": "assets/js/120.f871c46c.js",
    "revision": "34d3df7ed0e5d50d58373f0a7a8a3bfb"
  },
  {
    "url": "assets/js/121.796001fe.js",
    "revision": "d357eb9c0199324dbbcdb353a655c7f1"
  },
  {
    "url": "assets/js/122.60afe919.js",
    "revision": "9584eecebac204fe06a501f2091ba617"
  },
  {
    "url": "assets/js/123.f75374e9.js",
    "revision": "7c011d85b0ad9c1a73f3ccb0996a7d24"
  },
  {
    "url": "assets/js/124.c9a671f7.js",
    "revision": "3ecdcd9da8e8300b3eae0efb0321db8d"
  },
  {
    "url": "assets/js/125.2b01a92f.js",
    "revision": "59ddc4edb27cf5ec8e8dc48af6ab3cf2"
  },
  {
    "url": "assets/js/126.42a830a1.js",
    "revision": "ebe269f760e85b99c67e4e5910f03fce"
  },
  {
    "url": "assets/js/127.3758375a.js",
    "revision": "d5423679925d8b195b351a8331ecf73c"
  },
  {
    "url": "assets/js/128.0aba7bc9.js",
    "revision": "eb91688438e649980898b8dbf7f9664b"
  },
  {
    "url": "assets/js/129.e89db6d1.js",
    "revision": "3c6f53e506d70dc121a8475092891a14"
  },
  {
    "url": "assets/js/13.e707983d.js",
    "revision": "9f9b286b6257c6e279fa2d69d3a1a86d"
  },
  {
    "url": "assets/js/130.7dafabd1.js",
    "revision": "aed22d33ffd131867189d4819fafe96e"
  },
  {
    "url": "assets/js/131.28631c7d.js",
    "revision": "3ceda9e6a8a02003090e0c36527e22d7"
  },
  {
    "url": "assets/js/132.cc3e486d.js",
    "revision": "af514eaed8ff432971dc33e9dd348408"
  },
  {
    "url": "assets/js/133.40b3c6a3.js",
    "revision": "3803abfb1b3a620584faded3678d0834"
  },
  {
    "url": "assets/js/134.593d1ffe.js",
    "revision": "19726f6d5058adbf4f6230b7c043d6f0"
  },
  {
    "url": "assets/js/135.6893caa9.js",
    "revision": "94d9585f5284689b700cfd7f5cad1179"
  },
  {
    "url": "assets/js/136.2f084ebc.js",
    "revision": "c5f15bf81c92a8cffce95f030fc34a81"
  },
  {
    "url": "assets/js/137.ada86bf6.js",
    "revision": "3ba09f7ee73f3a9f16c0e5cc9385b566"
  },
  {
    "url": "assets/js/138.4b9d9fe1.js",
    "revision": "92d12ae25f2bf23e30dabd6345f8b4bd"
  },
  {
    "url": "assets/js/139.f70bb229.js",
    "revision": "4fb9c4206366d71ee05d3c536ac52067"
  },
  {
    "url": "assets/js/14.b38e12d9.js",
    "revision": "caef7b6fad82f0669a4c6434246efdc7"
  },
  {
    "url": "assets/js/140.1842e9d1.js",
    "revision": "ee45d8a6faf9e33fc5ce790ba9f59016"
  },
  {
    "url": "assets/js/141.779e7934.js",
    "revision": "b047649a0fc31629273ea6e08ab4e055"
  },
  {
    "url": "assets/js/142.004fa619.js",
    "revision": "7886d24f094ee763a981f746435b79d5"
  },
  {
    "url": "assets/js/143.a610a11b.js",
    "revision": "f5f6d1c279fcdf778b2c529d7fa3d038"
  },
  {
    "url": "assets/js/144.59277325.js",
    "revision": "3a021912c63b9622fd4516e49d3afb12"
  },
  {
    "url": "assets/js/145.a4e7ade8.js",
    "revision": "f3fabad26996e9a6bde045987b0ec896"
  },
  {
    "url": "assets/js/146.ebc56ab3.js",
    "revision": "dfee657f71db01389b628bba27faa738"
  },
  {
    "url": "assets/js/147.f86981cc.js",
    "revision": "58dbcc054702f33350c0a1677335da0b"
  },
  {
    "url": "assets/js/148.6a2dc58c.js",
    "revision": "c072213d37306827a2abb94a968307de"
  },
  {
    "url": "assets/js/149.e1a72979.js",
    "revision": "a98ba88f0f9e09937c447952fcb76f58"
  },
  {
    "url": "assets/js/15.77ecef2d.js",
    "revision": "74e503424fef3fe05eedc2d9d0ccea22"
  },
  {
    "url": "assets/js/150.2ba8a027.js",
    "revision": "bb4057514c28c905d4dc3cf7f501c0a6"
  },
  {
    "url": "assets/js/151.893e3025.js",
    "revision": "7d33664d339ceacebfcc96fb35d739c6"
  },
  {
    "url": "assets/js/152.841dcfee.js",
    "revision": "396061f4cb52977db2786e6f260e7adb"
  },
  {
    "url": "assets/js/153.8d6a986f.js",
    "revision": "0065ec05e400d4bb5f866311b000dc43"
  },
  {
    "url": "assets/js/154.f2aeb522.js",
    "revision": "1e5f7d417814920fc120403fbfd35b22"
  },
  {
    "url": "assets/js/155.d9c8aeb3.js",
    "revision": "587ed0891000e2bdf4c574ee1dd4e429"
  },
  {
    "url": "assets/js/156.9afbbb69.js",
    "revision": "c03015bca2b0979774236f2234071e55"
  },
  {
    "url": "assets/js/157.11904bf1.js",
    "revision": "087f4cf1a6d42157c3db8cf9b3d8ffd6"
  },
  {
    "url": "assets/js/158.d08491ef.js",
    "revision": "a4c6d1341f6155ffcf6761662bec53c8"
  },
  {
    "url": "assets/js/159.4ab4f0bc.js",
    "revision": "b6ddcffe1f49d0b69e00ec9d3ec66c6a"
  },
  {
    "url": "assets/js/16.ffe5cb53.js",
    "revision": "58d042346a1c0215ccd739c3433392f7"
  },
  {
    "url": "assets/js/160.e1f397c2.js",
    "revision": "037c6bb0be0f827c413e7572bfa14854"
  },
  {
    "url": "assets/js/161.f7bd4f4e.js",
    "revision": "6c0f54b3dd7224d17a04ceda33791585"
  },
  {
    "url": "assets/js/162.b966a394.js",
    "revision": "4ab192c0cfea06112a2de191d0a8741b"
  },
  {
    "url": "assets/js/163.199bb9c1.js",
    "revision": "2cbe86b5290253e54e52694ae3870ad0"
  },
  {
    "url": "assets/js/164.ec6cfdd6.js",
    "revision": "0cd7226a250cd4a2d080ce4085d443a6"
  },
  {
    "url": "assets/js/165.876d4364.js",
    "revision": "75d45ff15e40421164eda8f7a7a754a3"
  },
  {
    "url": "assets/js/166.fb6f8af1.js",
    "revision": "3c88e8ed258575569d1f217aea4069af"
  },
  {
    "url": "assets/js/167.72981057.js",
    "revision": "a714a8b4767c4df9288e826307682808"
  },
  {
    "url": "assets/js/168.7c2b53ce.js",
    "revision": "ded1f9654ad4edaa92369475815ffc0f"
  },
  {
    "url": "assets/js/169.dae20c3c.js",
    "revision": "08626177c114d3b0fcebfe6ba6b08971"
  },
  {
    "url": "assets/js/17.41a37100.js",
    "revision": "b1e532f213b4a362676bd85fab50d0fc"
  },
  {
    "url": "assets/js/170.3014c810.js",
    "revision": "1a5326bcfd3722791d6ef770815e14bc"
  },
  {
    "url": "assets/js/171.87f5fa96.js",
    "revision": "45b7926ddb85edcbfa908026b2a7d116"
  },
  {
    "url": "assets/js/172.88f62f95.js",
    "revision": "569c27897563d57ac1370e3e629170f5"
  },
  {
    "url": "assets/js/173.1f015d02.js",
    "revision": "aa5ce1a45212e9daa5cbc3962925b4e3"
  },
  {
    "url": "assets/js/174.1564659e.js",
    "revision": "339602be0e24568fb3747845b614a0a5"
  },
  {
    "url": "assets/js/175.e9964c48.js",
    "revision": "3dc861c85aae1ff0fe5f63be301b7759"
  },
  {
    "url": "assets/js/176.efcfce1d.js",
    "revision": "bf81cba524a94277627f398091994fc6"
  },
  {
    "url": "assets/js/177.75ccf798.js",
    "revision": "b7ff61ce9a614c351a237b43afb94482"
  },
  {
    "url": "assets/js/178.60641971.js",
    "revision": "6082a7b30b62a25d595511ae231b9c48"
  },
  {
    "url": "assets/js/179.8f72077d.js",
    "revision": "99e7ed9ce29447d029928fa1a41993db"
  },
  {
    "url": "assets/js/18.30e94042.js",
    "revision": "3b96d49dd09d183a3581502ad82b623d"
  },
  {
    "url": "assets/js/180.a07fee37.js",
    "revision": "0c23748616ccb0cee33d5e193a33f09a"
  },
  {
    "url": "assets/js/181.44a445e2.js",
    "revision": "0f3bfc2a1efaee45ec9c322bd62b1ff8"
  },
  {
    "url": "assets/js/182.48e437bc.js",
    "revision": "97eec1dcd52b924ece65fd4911cde620"
  },
  {
    "url": "assets/js/183.5638032b.js",
    "revision": "7bd51c9397bf84446133be9748c064fa"
  },
  {
    "url": "assets/js/184.b53ae09f.js",
    "revision": "73bb7ad8c26d00c2b157d2d53046d822"
  },
  {
    "url": "assets/js/185.b97ff598.js",
    "revision": "a78591057d3fbefbddf1e53b1fc67cff"
  },
  {
    "url": "assets/js/186.1900c601.js",
    "revision": "0657c66d9a8676cee0940eed17dd4a8b"
  },
  {
    "url": "assets/js/187.6ff4cec6.js",
    "revision": "676db67cd5bd2aed54779a01390cefd4"
  },
  {
    "url": "assets/js/188.040e4e53.js",
    "revision": "d0273b94d74c1bf9cae3e29b5de66f5f"
  },
  {
    "url": "assets/js/189.81fa7a78.js",
    "revision": "855931444062ca6064b2b55e0eeb1aec"
  },
  {
    "url": "assets/js/19.4032b7a4.js",
    "revision": "46407920b2520aa0f437f6f0c10d71bf"
  },
  {
    "url": "assets/js/190.339206f1.js",
    "revision": "b16d90cb1b8fbc990afd39fb1d7f8fa1"
  },
  {
    "url": "assets/js/191.0e6e7e9c.js",
    "revision": "d9243b1b82794c84d92ab2a81b4b57da"
  },
  {
    "url": "assets/js/192.184face1.js",
    "revision": "8c3b159b17d2e07680850003cf9553c6"
  },
  {
    "url": "assets/js/193.89c1ad9e.js",
    "revision": "7fbf184edfbe6f865b8015984eb46f2e"
  },
  {
    "url": "assets/js/194.3a70275e.js",
    "revision": "4e09e540e77b90bb0bd049c51e169fcc"
  },
  {
    "url": "assets/js/195.203fe646.js",
    "revision": "86439c0bd6512a40201dfae24a6a1318"
  },
  {
    "url": "assets/js/196.0c2a2902.js",
    "revision": "a972a4612d9b2c523ff4b902ecdbd4f6"
  },
  {
    "url": "assets/js/197.74963e43.js",
    "revision": "f1a669f9b8cd70f2c99b49ec8d5f46d4"
  },
  {
    "url": "assets/js/198.616bf108.js",
    "revision": "2ded16c4dc11305763adbaebf6d1cf99"
  },
  {
    "url": "assets/js/199.390a7500.js",
    "revision": "eb4427777c2f98ec5b19abcc69d23731"
  },
  {
    "url": "assets/js/2.aed63075.js",
    "revision": "108c77b9e96fe5084565c352b054ab5b"
  },
  {
    "url": "assets/js/20.d48dd7bd.js",
    "revision": "ea44bcefb6ccf52b135d5106ae62ae03"
  },
  {
    "url": "assets/js/200.dc864e53.js",
    "revision": "302661e402d01acfed7367367df70fc3"
  },
  {
    "url": "assets/js/201.5aa4d724.js",
    "revision": "0a0647ea0a684c5b4159377973ee974d"
  },
  {
    "url": "assets/js/202.dd308f1f.js",
    "revision": "be9865f28038f38522118b82e6f84175"
  },
  {
    "url": "assets/js/203.3e0bf208.js",
    "revision": "4388601c22c6ed3aa91f6ceea3649ec6"
  },
  {
    "url": "assets/js/204.07a123b2.js",
    "revision": "104306fd8b2c84d62ca6f7e8b654a78d"
  },
  {
    "url": "assets/js/205.a9475dee.js",
    "revision": "8c5619631114bf57ff8151699b5e2ddc"
  },
  {
    "url": "assets/js/206.dfc50a73.js",
    "revision": "2daf5ba7a8a730eeb97cd7824438363a"
  },
  {
    "url": "assets/js/207.aa32ee90.js",
    "revision": "83425dcc75d45e2f106224da161b79ea"
  },
  {
    "url": "assets/js/208.6fa114ec.js",
    "revision": "9b1118e0787036fbf86ec2fe491209f6"
  },
  {
    "url": "assets/js/209.76be1e6f.js",
    "revision": "9c1b43f152334a31ca2408dd17d688ed"
  },
  {
    "url": "assets/js/21.4ae8ed5f.js",
    "revision": "3a026ee53c2075984b9df3835e347e4a"
  },
  {
    "url": "assets/js/210.219bee87.js",
    "revision": "d75b04c562a1437775d11e65feab8362"
  },
  {
    "url": "assets/js/211.524a4ba3.js",
    "revision": "1a31f43dc299bf1f444dc454ced55a9e"
  },
  {
    "url": "assets/js/212.90016a1d.js",
    "revision": "64d5338bdaa8ef5d37079f23c38d13e2"
  },
  {
    "url": "assets/js/213.0946045d.js",
    "revision": "fca18b33e48458ef436f0e8ba35170f2"
  },
  {
    "url": "assets/js/214.adc4dc18.js",
    "revision": "9fb3af214196d514bd45f231b5b0d5f0"
  },
  {
    "url": "assets/js/215.76140166.js",
    "revision": "81d2dd2ca2051cf3995d7518b8bf36a8"
  },
  {
    "url": "assets/js/216.54cc283f.js",
    "revision": "248533c3ae8faad274783496b828a1b0"
  },
  {
    "url": "assets/js/217.89416cd6.js",
    "revision": "803408113f387d0c4fb690e13b6c8e3d"
  },
  {
    "url": "assets/js/218.2d4cd281.js",
    "revision": "1818cbc50957fcfb68b3954d7d4f01ed"
  },
  {
    "url": "assets/js/219.57e6cbf6.js",
    "revision": "aabfc97f695758837a8ba330090d4f1e"
  },
  {
    "url": "assets/js/22.7425c238.js",
    "revision": "33302ff3d135607ccbd5e8d7905981ba"
  },
  {
    "url": "assets/js/220.b108c912.js",
    "revision": "d4f05e816fce6337996244e8fbe8ed7f"
  },
  {
    "url": "assets/js/221.dc1c2985.js",
    "revision": "8beec60d3f03139f73b744080821d96f"
  },
  {
    "url": "assets/js/222.ad6087ab.js",
    "revision": "e59476c51ebce7cad7122c56ac49624e"
  },
  {
    "url": "assets/js/223.127e9936.js",
    "revision": "4f45d96026eaf713aea4ae3a71ea4d35"
  },
  {
    "url": "assets/js/224.025cc037.js",
    "revision": "20a3e05365392d391e59f3d15e936bfc"
  },
  {
    "url": "assets/js/225.6a2a9cf8.js",
    "revision": "6e00e7207f21d2dc1497d0470a621ae2"
  },
  {
    "url": "assets/js/226.d3c691d5.js",
    "revision": "954fd1982a0ad798f9e874af254a62ae"
  },
  {
    "url": "assets/js/227.40216226.js",
    "revision": "6a77df44a42f8a1fab703a262149faf5"
  },
  {
    "url": "assets/js/228.379761bb.js",
    "revision": "84b32930f03a3b595a44f7a3e54d0a5f"
  },
  {
    "url": "assets/js/229.b03a5e4b.js",
    "revision": "012e81e24d754ad250b76cf3e9ab4387"
  },
  {
    "url": "assets/js/23.bd0ffde2.js",
    "revision": "3ecd068ca59f4c56e4ba76d87af19461"
  },
  {
    "url": "assets/js/230.031c7703.js",
    "revision": "fbbb729434d1a147ab72a67ae2a5c058"
  },
  {
    "url": "assets/js/231.0953d1b9.js",
    "revision": "13910a06dc1ead8b4699532aa8b27ea6"
  },
  {
    "url": "assets/js/232.406301b9.js",
    "revision": "9d566c6b120cc371653b5addb90e6dcf"
  },
  {
    "url": "assets/js/233.663c9ec3.js",
    "revision": "3a56b767117cdc154e81d1e108b9dfbd"
  },
  {
    "url": "assets/js/234.68ea6b2d.js",
    "revision": "f42aaa76f6bc57b8b2a512c59fe4f425"
  },
  {
    "url": "assets/js/235.84afa6ed.js",
    "revision": "4273b70105b2e0c5814a31f8be804ce0"
  },
  {
    "url": "assets/js/236.def1ec13.js",
    "revision": "ea30fc8e5d12c9eef3bc83f2990c41a7"
  },
  {
    "url": "assets/js/237.055e3175.js",
    "revision": "940e6b5c1081956bab7541fa7885141c"
  },
  {
    "url": "assets/js/238.ae3f62e3.js",
    "revision": "dba0cb5d92e317b9a969f24c35da15ac"
  },
  {
    "url": "assets/js/239.2042a9e1.js",
    "revision": "6533953ce8a19a42607f548760876bde"
  },
  {
    "url": "assets/js/24.563021c5.js",
    "revision": "67e49843bbde0d58ef51ce92779c53d2"
  },
  {
    "url": "assets/js/240.bfad6fbc.js",
    "revision": "227f4586f7baf94947fb01b460fe7e96"
  },
  {
    "url": "assets/js/241.260acebe.js",
    "revision": "6537a63bfca0d48f731ba2c31b2a7b83"
  },
  {
    "url": "assets/js/242.0eb93fe0.js",
    "revision": "e4bcfb0ac4eb7bf1c014be30d49d97cc"
  },
  {
    "url": "assets/js/243.5a3b3280.js",
    "revision": "7da78fb80244118c5ff9accf095fe36f"
  },
  {
    "url": "assets/js/244.f1fbb153.js",
    "revision": "53fce8ab34e0392f3dab293aed7abff2"
  },
  {
    "url": "assets/js/245.53a64c8d.js",
    "revision": "7491012463121ba027e9bd36367550da"
  },
  {
    "url": "assets/js/246.d35fe71f.js",
    "revision": "6fb577fc7a3a1f1d0ed9a1940fcb4f17"
  },
  {
    "url": "assets/js/247.edc4b60d.js",
    "revision": "9404720a83c8a82045fe552c8f545649"
  },
  {
    "url": "assets/js/248.a507d1d6.js",
    "revision": "f8da3e330a885f21712947c9d8ac5198"
  },
  {
    "url": "assets/js/249.aff22d82.js",
    "revision": "9e4daeb85b99f874b22a0138501cce02"
  },
  {
    "url": "assets/js/25.773e98a0.js",
    "revision": "46b8c1c148d8c228894627be0f5558fc"
  },
  {
    "url": "assets/js/250.6d2d6a0d.js",
    "revision": "6726c84bc22b3587ded3e79ba4afb04c"
  },
  {
    "url": "assets/js/251.148cb315.js",
    "revision": "aef0aa4047cc125bcdbd8466c60a9608"
  },
  {
    "url": "assets/js/252.74773eb9.js",
    "revision": "d48214d3031499a30238a5d581746862"
  },
  {
    "url": "assets/js/253.5ebd40b7.js",
    "revision": "f6f069ae6a68055ddf3f9b37c5939b03"
  },
  {
    "url": "assets/js/254.1c69c972.js",
    "revision": "65e8a4478bfa15d5a37fa8c91962da63"
  },
  {
    "url": "assets/js/255.70301c59.js",
    "revision": "5eb7f5e16b0c5baf989ee5e1800820fa"
  },
  {
    "url": "assets/js/256.58d34123.js",
    "revision": "a0e55d9c3524e5f6d7301c903c249efb"
  },
  {
    "url": "assets/js/257.5017c036.js",
    "revision": "4357d8cb8f32709c7a8edc58e5509dc2"
  },
  {
    "url": "assets/js/258.f7df31ff.js",
    "revision": "10bf8dfa22b764c1289461be2b757a84"
  },
  {
    "url": "assets/js/259.4b7bc919.js",
    "revision": "5dba52d65f7b8291bf1f5ec08ce5c379"
  },
  {
    "url": "assets/js/26.01505467.js",
    "revision": "e7b9ec67364afa117e1be90ebe1c4ca0"
  },
  {
    "url": "assets/js/260.29dc4d6b.js",
    "revision": "c306db323f0e52fe7783d179ed966ecc"
  },
  {
    "url": "assets/js/261.88e7e4d0.js",
    "revision": "6d81fdd42a7731fcf6cecf1417c13256"
  },
  {
    "url": "assets/js/262.a3f059bb.js",
    "revision": "33585aa104ba50074b7b30fa9f0f8285"
  },
  {
    "url": "assets/js/263.79eba4bb.js",
    "revision": "bedf285baddad38c1161e4df9a8b2936"
  },
  {
    "url": "assets/js/264.f9259c5d.js",
    "revision": "5ce55f9297c817b9ac2c17f9cf4330fb"
  },
  {
    "url": "assets/js/265.846b6b01.js",
    "revision": "de77e40c3c6407c53ebbf778bd0b27b1"
  },
  {
    "url": "assets/js/266.30f5a7b2.js",
    "revision": "7909f1c3ebfb8784def9769b1e811f0c"
  },
  {
    "url": "assets/js/267.bd028934.js",
    "revision": "f58e6f8259713ffd07e667359f07e3c6"
  },
  {
    "url": "assets/js/268.624e0772.js",
    "revision": "03abf160d427c7a2f53691a25aeda195"
  },
  {
    "url": "assets/js/269.b0bc5915.js",
    "revision": "749b3f70b6eb3b8cceb25bccb9bb32c2"
  },
  {
    "url": "assets/js/27.7e344879.js",
    "revision": "428c77bcf9c4b1cd298e5d1c77709d73"
  },
  {
    "url": "assets/js/270.c31890f3.js",
    "revision": "6b7ebca42b257af76782737ff48bb562"
  },
  {
    "url": "assets/js/271.9fc46e4f.js",
    "revision": "e04bfbb4c77b76868eab40e8e7db172e"
  },
  {
    "url": "assets/js/272.c6d0e1d2.js",
    "revision": "0d7b0f66b3388d79d9a82c2c492c6315"
  },
  {
    "url": "assets/js/273.2a2a0b4c.js",
    "revision": "a0a4d5f403de3df1d9b1f9513b65fa7d"
  },
  {
    "url": "assets/js/274.5b51eec2.js",
    "revision": "3019b4a0c9f2fc095faa7bb4a119cadb"
  },
  {
    "url": "assets/js/275.ab1886a7.js",
    "revision": "a24eec1cd34b835d0d0bda686e2d113d"
  },
  {
    "url": "assets/js/276.dc74e7e1.js",
    "revision": "be15cabe2eedeb00134a497fe2d6c816"
  },
  {
    "url": "assets/js/277.5f2a936d.js",
    "revision": "cdc825d620e00ae01b5bb3814154624e"
  },
  {
    "url": "assets/js/278.d036e744.js",
    "revision": "c69a4c5e5c78ad49f1ba729cfe308aee"
  },
  {
    "url": "assets/js/279.e9072aca.js",
    "revision": "62c1330003c1530e17b898f9b08a3abf"
  },
  {
    "url": "assets/js/28.b55645fe.js",
    "revision": "a22dfc972bd4f343e6d8faf60fa3ca64"
  },
  {
    "url": "assets/js/280.4eaf651b.js",
    "revision": "240e4ace713587cfd07d4d889a28588d"
  },
  {
    "url": "assets/js/281.b78849e7.js",
    "revision": "92546a5e586aa5e33561fbc18fc37612"
  },
  {
    "url": "assets/js/282.164f4ce8.js",
    "revision": "c476271af416e688a25c4731e642e7d3"
  },
  {
    "url": "assets/js/283.bd39a884.js",
    "revision": "4b01a23e8d87ac49816203edc9c3e503"
  },
  {
    "url": "assets/js/284.ae3bfdb2.js",
    "revision": "08de2e606e46e52bf0284fb7a5f5ecd5"
  },
  {
    "url": "assets/js/285.c1a4b0cd.js",
    "revision": "2592d2b4ccf19b0e65e742602f4c6bc4"
  },
  {
    "url": "assets/js/286.18299f2c.js",
    "revision": "8e45301ba58312b94aa11d5afcaca91d"
  },
  {
    "url": "assets/js/287.32e0981b.js",
    "revision": "51fc4161f3898d779b2b01a9b2ca383a"
  },
  {
    "url": "assets/js/288.6cbc3d4a.js",
    "revision": "4917eaf701784d33bfa3649c99e0a307"
  },
  {
    "url": "assets/js/289.fa7798fb.js",
    "revision": "b4945c2ae685ad1b9fe20e5465a8a8ad"
  },
  {
    "url": "assets/js/29.c81848ff.js",
    "revision": "b113b6db4e782ceff936d9322f7a6ad3"
  },
  {
    "url": "assets/js/290.75920f7b.js",
    "revision": "1d15b325d353b776329bbf0ceb736002"
  },
  {
    "url": "assets/js/291.f1490f55.js",
    "revision": "8958f09a24d43ea2b2d3977be506eef0"
  },
  {
    "url": "assets/js/292.ae61f0ad.js",
    "revision": "393e32cc4d40a726031f971a182afd7a"
  },
  {
    "url": "assets/js/293.e100da4d.js",
    "revision": "32e12fe72aaf51790b0dd0cac6b67757"
  },
  {
    "url": "assets/js/294.3269e803.js",
    "revision": "3f3f0215cdf74389944e4b85aa611229"
  },
  {
    "url": "assets/js/295.fc908f03.js",
    "revision": "ef05c988c8b46ab3a37fd5a5d33bd329"
  },
  {
    "url": "assets/js/296.bfa29f4e.js",
    "revision": "c656a208f888ae12e093f1e80a3d90d2"
  },
  {
    "url": "assets/js/297.a81a13a3.js",
    "revision": "07e4d9102d80a0756a8c25f08b152f98"
  },
  {
    "url": "assets/js/298.63e2888f.js",
    "revision": "6e01a08d905eef531bc241880b55a1ee"
  },
  {
    "url": "assets/js/299.fe12c0ba.js",
    "revision": "da922c07d4dcf3eba6dae798c312552c"
  },
  {
    "url": "assets/js/3.5b0527c4.js",
    "revision": "bc2b4d3dfcf93afd7bc6fc2afbfb7578"
  },
  {
    "url": "assets/js/30.9f91807f.js",
    "revision": "82d48061888d66327a24ee063891fa9b"
  },
  {
    "url": "assets/js/300.36fc52cb.js",
    "revision": "852f2b3aba98a9ace7f2adcb5f8917db"
  },
  {
    "url": "assets/js/301.4bb4e496.js",
    "revision": "26e11727af454c9787a95855841a0ee1"
  },
  {
    "url": "assets/js/302.20210899.js",
    "revision": "1e36a6c9aa90e8a41478375e32147425"
  },
  {
    "url": "assets/js/303.bf6761b0.js",
    "revision": "aa1a77cd5cd31c1cf54d7cb968da1bee"
  },
  {
    "url": "assets/js/304.3e12643b.js",
    "revision": "c7ad35661be6ba3433d55b12baadbe14"
  },
  {
    "url": "assets/js/305.44c0d10c.js",
    "revision": "05321bb68c9e3de7fe03a0fe999b539b"
  },
  {
    "url": "assets/js/306.111b3197.js",
    "revision": "c7ac564242909f878b3552e21851aa16"
  },
  {
    "url": "assets/js/307.1cae2ae6.js",
    "revision": "025049fd9189dac6a44c8dab01dde2d3"
  },
  {
    "url": "assets/js/308.1c9cd994.js",
    "revision": "0c662488b5adfbc7d3f42fd27612498d"
  },
  {
    "url": "assets/js/309.a3e3d225.js",
    "revision": "c0a879f3825dfba8183db5d296e755eb"
  },
  {
    "url": "assets/js/31.fd697769.js",
    "revision": "07c7862175ae7ab0d78296340b655bae"
  },
  {
    "url": "assets/js/310.df411c7c.js",
    "revision": "ff5f1fd4e0a70a2d9e7b5c2f2230ae1d"
  },
  {
    "url": "assets/js/311.bc3b67cd.js",
    "revision": "54d271ca1e20b35cac09ea5ea5c6213b"
  },
  {
    "url": "assets/js/312.afe61980.js",
    "revision": "aa0f668bae7c1cee4ef95ee2819c518b"
  },
  {
    "url": "assets/js/313.c9855031.js",
    "revision": "9c1947aded13d14d6ac40a8af7510e8f"
  },
  {
    "url": "assets/js/314.15969ce3.js",
    "revision": "0c4a5fa4519e002e1798f229643ff36d"
  },
  {
    "url": "assets/js/315.22e13ec0.js",
    "revision": "d3ca8e7d9d6a9e98ca7efcab36405e98"
  },
  {
    "url": "assets/js/316.0eb0a753.js",
    "revision": "fe0aa90e3533c9f0a66fbefa10f1d82d"
  },
  {
    "url": "assets/js/317.9c08d9b4.js",
    "revision": "fcea6f77e5e9e0bb1ccaab240dc7e9ac"
  },
  {
    "url": "assets/js/318.0c25054b.js",
    "revision": "5113d685715cca03710c87ebaa81e24c"
  },
  {
    "url": "assets/js/319.21ab72d9.js",
    "revision": "7d9c040539ebbe2a53a79baca0730d93"
  },
  {
    "url": "assets/js/32.aa9baf14.js",
    "revision": "ffa08bee8cea8f35fe850581153a37a8"
  },
  {
    "url": "assets/js/320.be8fd008.js",
    "revision": "2108c52445d25c307d773ace6676241e"
  },
  {
    "url": "assets/js/321.0f722b9f.js",
    "revision": "d9cd061a7315f3c9393cc07b0d8bb9bc"
  },
  {
    "url": "assets/js/322.6838f2e2.js",
    "revision": "4a82dcd7b1752fa7fbd29f80f6ab5ae0"
  },
  {
    "url": "assets/js/323.068e0b79.js",
    "revision": "8e55a1169b844224398445b5eb511ca1"
  },
  {
    "url": "assets/js/324.dd05bb52.js",
    "revision": "5bc1cd508b0548c0a236516a3be7eb2c"
  },
  {
    "url": "assets/js/325.65b83b14.js",
    "revision": "37b65e5f602121aab6ccebfdb940d6bc"
  },
  {
    "url": "assets/js/326.63a4fc50.js",
    "revision": "db87c0065981bb6b8b746431721ae51e"
  },
  {
    "url": "assets/js/327.76ee25a1.js",
    "revision": "2aed282799f4391bc24512877dab1687"
  },
  {
    "url": "assets/js/328.a1cd6e86.js",
    "revision": "f8fc49a3f21ca0c1058b0fdc0538dbf4"
  },
  {
    "url": "assets/js/329.5a9a172d.js",
    "revision": "1f61712356ac5ca6c5e7c0f36d2c4fcd"
  },
  {
    "url": "assets/js/33.4b4d0592.js",
    "revision": "09025a1552c0127801c402d2d8d2a350"
  },
  {
    "url": "assets/js/330.8b1da6a9.js",
    "revision": "95357416b5a5c678cd594052cfee73c8"
  },
  {
    "url": "assets/js/331.e37d61f5.js",
    "revision": "382fc04dc49389b85b124ce3e24407c1"
  },
  {
    "url": "assets/js/332.da16f170.js",
    "revision": "26c49bec4b3bafe8b075065af423b6f5"
  },
  {
    "url": "assets/js/333.9ed96550.js",
    "revision": "0f739b24d65e09770a1020b5dcfdf278"
  },
  {
    "url": "assets/js/334.56d21317.js",
    "revision": "f607cf138f1594a83856548367bb37a3"
  },
  {
    "url": "assets/js/335.02658921.js",
    "revision": "7cc07affa01a6c7333fba0a0db99c71c"
  },
  {
    "url": "assets/js/336.8c6c5d49.js",
    "revision": "802e6b03c92a0862624df900028570f5"
  },
  {
    "url": "assets/js/337.9e32b2fb.js",
    "revision": "bdc5a4f93a65d1df38c7543fc4e49cc2"
  },
  {
    "url": "assets/js/338.a9931d99.js",
    "revision": "ecc616b2957fd07e7c5204146a203b7a"
  },
  {
    "url": "assets/js/339.25f7bdce.js",
    "revision": "0720b48315e8db5dab20e3e6316cf1b0"
  },
  {
    "url": "assets/js/34.cd3b1e00.js",
    "revision": "e879ba528db7569198741ca8c3724755"
  },
  {
    "url": "assets/js/340.c1cd6ff1.js",
    "revision": "abafc244e929b3df66ee01cd353a82fb"
  },
  {
    "url": "assets/js/341.4ce51421.js",
    "revision": "71f8c0777169a0e3fe8693456cf600b6"
  },
  {
    "url": "assets/js/342.50dacded.js",
    "revision": "1feaa2fb9219304c1aac812bad82013b"
  },
  {
    "url": "assets/js/343.34509138.js",
    "revision": "7b3546525a49b6b325cd9a26278432fd"
  },
  {
    "url": "assets/js/344.b2164578.js",
    "revision": "c4b02e1822aeab37d40aabbe44353e2f"
  },
  {
    "url": "assets/js/345.d7423ba1.js",
    "revision": "f0dbd0598cf61ee1d16791e294c5285d"
  },
  {
    "url": "assets/js/346.aed0d043.js",
    "revision": "2fda998b728399bfb8bf5b1a2ba8000c"
  },
  {
    "url": "assets/js/347.92f87fe8.js",
    "revision": "13c0d91df7c4cbebf11de2a4f58a7a53"
  },
  {
    "url": "assets/js/348.ff851461.js",
    "revision": "ad8590de9e4c4616e59937cead617687"
  },
  {
    "url": "assets/js/349.3f2adc59.js",
    "revision": "bf48739b50073b360cf93fce634ca97a"
  },
  {
    "url": "assets/js/35.75d823aa.js",
    "revision": "c89caca91b01d7d651fab0eaa2714966"
  },
  {
    "url": "assets/js/350.19b0aac6.js",
    "revision": "c44f9f9119a56daeae4d0fe5fe94d861"
  },
  {
    "url": "assets/js/351.0fc5b028.js",
    "revision": "9f7530fbba6401a2dc3275def1d516db"
  },
  {
    "url": "assets/js/352.bc287403.js",
    "revision": "1ac70180a8080e36197c39d5540f627d"
  },
  {
    "url": "assets/js/353.6d08eb0c.js",
    "revision": "c089033fd3c4bd50852ac38f12a5fc92"
  },
  {
    "url": "assets/js/354.d80f16be.js",
    "revision": "f9f3076df5826104be9a385fd1e6ab19"
  },
  {
    "url": "assets/js/355.7875abfd.js",
    "revision": "bf9fad60e40b5e3c86d81789789b3e64"
  },
  {
    "url": "assets/js/356.7a832193.js",
    "revision": "91deff3a8b6c2f0fd94e2d58b9ca3577"
  },
  {
    "url": "assets/js/357.8f6a3737.js",
    "revision": "c89b26d8231e393cc0e310ac21d916f5"
  },
  {
    "url": "assets/js/358.cc456265.js",
    "revision": "84230e55c46d25ba94948c6215f22807"
  },
  {
    "url": "assets/js/359.d94dfc1f.js",
    "revision": "45c27f61de563a8f76a479094dd5f903"
  },
  {
    "url": "assets/js/36.29fcda9d.js",
    "revision": "65973799ab700ab2d89a170ac5f07284"
  },
  {
    "url": "assets/js/360.ca2b7739.js",
    "revision": "0100a5ae0d0afdea9e321e32e4e8dd3d"
  },
  {
    "url": "assets/js/361.7da84322.js",
    "revision": "fd0c7810da493d698be6e4e30261dbe6"
  },
  {
    "url": "assets/js/362.51e78cc9.js",
    "revision": "cbed2ed31c6cd6990d515b376992d59c"
  },
  {
    "url": "assets/js/363.ca4c74cd.js",
    "revision": "685f2641e0de37253c439fd70985d2bb"
  },
  {
    "url": "assets/js/364.0928e4df.js",
    "revision": "759cda9605119f9cd178d2369d275663"
  },
  {
    "url": "assets/js/365.0649f6d3.js",
    "revision": "aa007dedde1d8430133ecb3b84e295a0"
  },
  {
    "url": "assets/js/366.0f498b79.js",
    "revision": "4af0f45d7b15daa7436e98b360a185e0"
  },
  {
    "url": "assets/js/367.83743134.js",
    "revision": "abf079a59dbe7339bc557fc30cc639a3"
  },
  {
    "url": "assets/js/368.cc4d8f2f.js",
    "revision": "414c8b55a9f4b5355655f528a94656ca"
  },
  {
    "url": "assets/js/369.40b6ee4d.js",
    "revision": "8ac576b3f9f833166507967aa9f0b95d"
  },
  {
    "url": "assets/js/37.ca1b80c9.js",
    "revision": "eac788556c98523e7dd121c7d7e4fb40"
  },
  {
    "url": "assets/js/370.1deea7d8.js",
    "revision": "0daac86b508823cbe30b1b961a9520e5"
  },
  {
    "url": "assets/js/371.9e7a5972.js",
    "revision": "96d7c8354b3f4943b04e07f0af68fc20"
  },
  {
    "url": "assets/js/372.ab627236.js",
    "revision": "d6eb444fb84728feee559bdce901b5ba"
  },
  {
    "url": "assets/js/373.44fae3ce.js",
    "revision": "07b2759f7cec8838cf869920a52cb424"
  },
  {
    "url": "assets/js/374.95a5483c.js",
    "revision": "2c34ff6e3c8d0c3eb9f4c79b08f1d4a1"
  },
  {
    "url": "assets/js/375.6bdd798e.js",
    "revision": "fa8e25b4e70247f4703bb32a018c9aba"
  },
  {
    "url": "assets/js/376.b37e7fd0.js",
    "revision": "ebda04cbba84e3d28d86d7779b9d641b"
  },
  {
    "url": "assets/js/377.b60b7e23.js",
    "revision": "a6e9652f314abcfe1169e0c9adcdf40a"
  },
  {
    "url": "assets/js/378.96d233d3.js",
    "revision": "26aa349a8f71c88b8c7ae5e4573da393"
  },
  {
    "url": "assets/js/379.b4bc8901.js",
    "revision": "8c47bb2c9aca78304a5b130a1c62553f"
  },
  {
    "url": "assets/js/38.d6581dde.js",
    "revision": "8881bd155ac2be9adc9acbfeadfaf29c"
  },
  {
    "url": "assets/js/380.96b5865e.js",
    "revision": "aefa5353043914e4fc5dc900616b3e4d"
  },
  {
    "url": "assets/js/39.8130c999.js",
    "revision": "5e6636591a85497c6832287917ddb68a"
  },
  {
    "url": "assets/js/4.fa9d012a.js",
    "revision": "01287a3a6a54322a443a59560a1e3de8"
  },
  {
    "url": "assets/js/40.cf363a55.js",
    "revision": "9a1058199324c584c31fcc4af7fcba4b"
  },
  {
    "url": "assets/js/41.e760d953.js",
    "revision": "48b363af10731d5ddf47151274829021"
  },
  {
    "url": "assets/js/42.393b347a.js",
    "revision": "02cb69da18be90bebd36122a55429fb0"
  },
  {
    "url": "assets/js/43.114ee809.js",
    "revision": "fa4cb7619b4a9dac9bdfe0e5f54029a7"
  },
  {
    "url": "assets/js/44.ce5e6ddf.js",
    "revision": "3a16f74be310b621be32303eebeefcde"
  },
  {
    "url": "assets/js/45.b4288602.js",
    "revision": "714c4cf2a0fb98bb0fc8d9dc3e369a79"
  },
  {
    "url": "assets/js/46.e25d0ad1.js",
    "revision": "03283ad7eeb19c3557b75ef07fc2ad90"
  },
  {
    "url": "assets/js/47.7af37d0e.js",
    "revision": "831f4f583cc4c1c39c560f4f531ed797"
  },
  {
    "url": "assets/js/48.b42afc8e.js",
    "revision": "61e6ff828a342160613c873a37387f1a"
  },
  {
    "url": "assets/js/49.28365acc.js",
    "revision": "1a08a438e2303be796777e3f9d2a8c97"
  },
  {
    "url": "assets/js/5.fcd9030e.js",
    "revision": "15031be7c3bea777b11e0dd2de55e1ed"
  },
  {
    "url": "assets/js/50.bcd71b9c.js",
    "revision": "bdbd9704fcbc11616b4bd93b75919da3"
  },
  {
    "url": "assets/js/51.d89d62e0.js",
    "revision": "fcd450f3b6aa8033097b4b346b3cae8f"
  },
  {
    "url": "assets/js/52.a6bcbad7.js",
    "revision": "7775ae53ae59099b764eb7b5754a4dfe"
  },
  {
    "url": "assets/js/53.0aad2c27.js",
    "revision": "a3b138d8471b028e6b4c6d4090e4fdd3"
  },
  {
    "url": "assets/js/54.1c85c484.js",
    "revision": "63a2efd9da81e651ca3485f287004b3d"
  },
  {
    "url": "assets/js/55.15b41eda.js",
    "revision": "bb2506ee335081df1d51bd6ce27e12ff"
  },
  {
    "url": "assets/js/56.0e44e8e9.js",
    "revision": "aba5d84f5e398b6e3db878f1c22d801a"
  },
  {
    "url": "assets/js/57.d797cc03.js",
    "revision": "88a2488433a0c22219c2cd2c484bab66"
  },
  {
    "url": "assets/js/58.d93e3f54.js",
    "revision": "b00755009d49bbf12c53990334627793"
  },
  {
    "url": "assets/js/59.ef4b090b.js",
    "revision": "a488a07a635a97668113ee7daefcf80e"
  },
  {
    "url": "assets/js/6.e0d5c49b.js",
    "revision": "b88c52f8aa8e49f10053977fc835dd01"
  },
  {
    "url": "assets/js/60.4273ebdf.js",
    "revision": "05a67a6947c219e8b55e7bc21188b961"
  },
  {
    "url": "assets/js/61.8da284cc.js",
    "revision": "48f8176481f48a46431fc3777f154c64"
  },
  {
    "url": "assets/js/62.4b89228f.js",
    "revision": "6eb52cc36d7425e56fb4acdbeeb92a58"
  },
  {
    "url": "assets/js/63.de661633.js",
    "revision": "849a2404955e42d2d4d275ab6b90771d"
  },
  {
    "url": "assets/js/64.b49a72a2.js",
    "revision": "777c4ff8d7f37c4e7a1cb7fa96e8a0f5"
  },
  {
    "url": "assets/js/65.737e0aa5.js",
    "revision": "28e33579145aa2b93b287f1bc1eb5437"
  },
  {
    "url": "assets/js/66.2874718b.js",
    "revision": "214490e2d4f76135a8a6ba65c89ce606"
  },
  {
    "url": "assets/js/67.a9083719.js",
    "revision": "1f144c5c46e7e69fccc728f0502e950c"
  },
  {
    "url": "assets/js/68.941b305d.js",
    "revision": "10e8ef1459cd7767149155a5f78567c1"
  },
  {
    "url": "assets/js/69.3af6d6ea.js",
    "revision": "334f5837d317210f77a7a7a0bd3439f1"
  },
  {
    "url": "assets/js/7.77f157e0.js",
    "revision": "f7fd31c99c00129870fed260e2f773d4"
  },
  {
    "url": "assets/js/70.461fd42a.js",
    "revision": "12bbddbf749e4707561409f476a3927d"
  },
  {
    "url": "assets/js/71.7bcb99b8.js",
    "revision": "c55355a7ceab10d2d96681c1aa1180f2"
  },
  {
    "url": "assets/js/72.9fe7ba66.js",
    "revision": "6985e83fcbfdb5ada344d9a947781f7d"
  },
  {
    "url": "assets/js/73.3f485c78.js",
    "revision": "aa856f23d4717a14243b39e8118f5003"
  },
  {
    "url": "assets/js/74.18bb8374.js",
    "revision": "4f79b98ca8ecb932d6c8a3c0c3353deb"
  },
  {
    "url": "assets/js/75.eba81594.js",
    "revision": "ed868910b1c179b3ab333bf388ffc707"
  },
  {
    "url": "assets/js/76.b557cf70.js",
    "revision": "c67efd732c6287e1f0936c599cb562b4"
  },
  {
    "url": "assets/js/77.40e43cd6.js",
    "revision": "88021d314ad51e93a8fd1e5453186ce8"
  },
  {
    "url": "assets/js/78.2b14d135.js",
    "revision": "e1a6aff4167782605107483c3032eaa9"
  },
  {
    "url": "assets/js/79.65b18c9b.js",
    "revision": "b1d47c9de94f05fed37d85532670efcc"
  },
  {
    "url": "assets/js/8.e7543629.js",
    "revision": "861c69677593f1078227f185add849a0"
  },
  {
    "url": "assets/js/80.58c0c367.js",
    "revision": "4158d6dbfa0005ff20f8b8a1f41e8589"
  },
  {
    "url": "assets/js/81.0d8bffbd.js",
    "revision": "add84bfae3f0a40dfbbdda9c90a2e1ea"
  },
  {
    "url": "assets/js/82.195be369.js",
    "revision": "db8ec60312663539ee45f01b0b691b0e"
  },
  {
    "url": "assets/js/83.609281a2.js",
    "revision": "cc641c42ac2f909cfbee6d537636a598"
  },
  {
    "url": "assets/js/84.23073b0f.js",
    "revision": "cc628ccbfb8056df0e694f4de22799ea"
  },
  {
    "url": "assets/js/85.77b09d21.js",
    "revision": "815987e49974e37af0d119ad17a4828a"
  },
  {
    "url": "assets/js/86.7407755d.js",
    "revision": "6bf6b9dbf514e6ab88d5237573a1d905"
  },
  {
    "url": "assets/js/87.2dfd4c56.js",
    "revision": "ff37005342cbf9152e51b6adbbf7c537"
  },
  {
    "url": "assets/js/88.a4a57ed3.js",
    "revision": "36a2d0a827d48dcc527b07e6d554ad8e"
  },
  {
    "url": "assets/js/89.cb338e96.js",
    "revision": "fdf48a48fcc98545b562ee91e7f1d3ae"
  },
  {
    "url": "assets/js/9.7437724c.js",
    "revision": "74ec474fcb6236b93bc05229dc121908"
  },
  {
    "url": "assets/js/90.5110041c.js",
    "revision": "697e82eb2cd2039bad3a9ae4e913bbed"
  },
  {
    "url": "assets/js/91.a29ecf1c.js",
    "revision": "e40b7e394ceec63946c6d93d11e86891"
  },
  {
    "url": "assets/js/92.f371b5dd.js",
    "revision": "699afcc4709aa017b6eaea980ad47080"
  },
  {
    "url": "assets/js/93.5ee833e7.js",
    "revision": "524d7cc7942c1c643d42b4492a9be61d"
  },
  {
    "url": "assets/js/94.667177f4.js",
    "revision": "ef16eed8b766e9b6f2e1c597ab7d0cf3"
  },
  {
    "url": "assets/js/95.82f56828.js",
    "revision": "830cef1f993f0e739830e4c30403fef9"
  },
  {
    "url": "assets/js/96.7ce592d9.js",
    "revision": "a33b19e21c56192a58a5d56b8a930b14"
  },
  {
    "url": "assets/js/97.a4b4e94c.js",
    "revision": "2192d9fb029964b8ef109713445d7c69"
  },
  {
    "url": "assets/js/98.22ab773b.js",
    "revision": "168e8eaec43591a96b2f602ea040e78b"
  },
  {
    "url": "assets/js/99.cbc94647.js",
    "revision": "dd367f76307057a8b3dabadc140fa5d3"
  },
  {
    "url": "assets/js/app.89be6087.js",
    "revision": "69ff74d23918e07a17d806e47de01adc"
  },
  {
    "url": "common/architecture.html",
    "revision": "2b697c16efe7f7ea1d5528fd04273b34"
  },
  {
    "url": "common/crawl.html",
    "revision": "c1a0d948bdbbb89ed4c38e0754da90f0"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "f187d09fd54bbfbe62977c83437ba42e"
  },
  {
    "url": "common/debugging.html",
    "revision": "e604ff6670d6e704ccbe25a3f988c818"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "285480a4d975b5ef371b14925f069b0b"
  },
  {
    "url": "common/document.html",
    "revision": "b023f8ec7d546a922833b68048de2d26"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "ab35a588649fef6843d15f00f0169f5c"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "ae2ed35e3ff8af70a9a4266bf5bc4ef9"
  },
  {
    "url": "common/index.html",
    "revision": "d942bfc2c9669ffcfe0dbc39917c54a5"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "32d4ef8c5adc98641ddb51804cc5623f"
  },
  {
    "url": "common/realtime.html",
    "revision": "799967fec8054144aa0d102cd7666f83"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "11a68cebc4ef7d65a49bec40edc0f6f8"
  },
  {
    "url": "common/refactor.html",
    "revision": "86ccc9e534dc7a4ac84d9a6c09f024cc"
  },
  {
    "url": "common/seo.html",
    "revision": "833ffb182957d2e0f60aaf166661549e"
  },
  {
    "url": "common/use-case.html",
    "revision": "49a13f88b434ed30d2638e1332258244"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "be8e8cd035fefe4d00f4db057ec9e71c"
  },
  {
    "url": "css/tricks.html",
    "revision": "8eb72f7a3e9e576a71af8ada51502276"
  },
  {
    "url": "db/architect.html",
    "revision": "998658adf1495073c5331d9cbb96f485"
  },
  {
    "url": "db/cassandra.html",
    "revision": "d8da180faf98594853f1ff96a4e23138"
  },
  {
    "url": "db/couchdb.html",
    "revision": "d7bde4637a4300a742b28a106059f55d"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "58ba9b351a84ef72e64d2f4704e91c7c"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "c560918c92af8a86a1ea830137ac7319"
  },
  {
    "url": "db/nosql.html",
    "revision": "49b813b47eb50649eccdcfd550898df6"
  },
  {
    "url": "db/optimize.html",
    "revision": "a41817e8d04d8df4ce4301d5f181a3f9"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "a05d47458c057e090c1101cd236622dc"
  },
  {
    "url": "db/postgre.html",
    "revision": "9559a45409b3ddd0cb5fdf35ca2b3efe"
  },
  {
    "url": "db/redis.html",
    "revision": "3db5a792c333fab5acd31a6c3ac5a45b"
  },
  {
    "url": "db/use-cases.html",
    "revision": "d0f338713fbd724b0010514858486e86"
  },
  {
    "url": "go/clean.html",
    "revision": "f1658206358df241f2ca7e71aaeb82b1"
  },
  {
    "url": "go/index.html",
    "revision": "e311a72fde0bb9b664606d5f0e71683c"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "bcc6dc48c34d3802ebb0d954741cf080"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "b3d0d404583b6d354d8ffe3223b292f9"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "b6f02803741ca61d9d443d759e73b0de"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "299190117987c235c651a96e2b802fa2"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "ccddda1e21ec1f7442a1f57dfb142c66"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "be83d7662bda23088892c8a5a27a7b7f"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "9c8be7fef093f183549e0dce4210c077"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "129fc4f14af229e624b916aebc825b73"
  },
  {
    "url": "index.html",
    "revision": "9c8e42d9b7f1c3485793834a7bcd6d2e"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "9f89b26e50814fa7d5b73a93da25dbc1"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "fd052833d373fc13dbfba5df7b702463"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "88eed119812c3228a23b29636b86f546"
  },
  {
    "url": "javascript/closure.html",
    "revision": "00352fad4ee1fe5604b0b65832e8fc9f"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "054bc579551d28ee4fa2ca5cd140b5ad"
  },
  {
    "url": "javascript/functor.html",
    "revision": "3fafa7042589f442924abe2ed67b9208"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "db784cf28c2977a18b087a97d4c3539a"
  },
  {
    "url": "javascript/react.html",
    "revision": "e0f2132bc3e86b049909839e4db4475d"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "1c53f85b9ff777d21e4dd349b74d45ed"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "ec2554e5e50ca8c6f6fc58e27a543a86"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "b9f431a0bade7e1288ac1e1e2d4cb6f9"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "d8c53dbb5b816ca1e18f547649221120"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "c6688c836715dc95708cdd97624f3213"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "31addeda6ae2bcb9c72159e7c2a7af0b"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "86f74b3bfefd3cc26abe26e86f576b3f"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "e226ce5a31042f6546fadf27a4ce5867"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "9a116f82c7f52bc30dcbd555466a7081"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "fc1469ec8a492a4be4c9a8608066f9b4"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "6da387cbddff6bdb2bfe1e4b4deda65c"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "1f239ae81aed9544c87897a65f7ece8b"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "f9bcf5c3239ae372045ddddbd4218316"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "69c23fd7b5c50b7d37822e4f5af6404c"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "2591b05a4ba70a117e7e0e056f07bf29"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "369476543b04e1f146735c83dc8dbf18"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "5cb66bc87b1a388789f6b990fa291a5a"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "6706a745e1fadd0a313b2e02355c7811"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "6f70fb76747e6dab46545e551a129b67"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "3c7c5ac6559582cd1fa41dba3cc321a3"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "eb7213b6733976a619b7782528993bd4"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "7934c3b8b0e352e8101ca59bc2480347"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "a3831b01bbeb16e38f9a6c1a5acd1c6c"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "81f7bec2157b0c11bc6a3f4504b24431"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "669fec898fcd119fd9b27806f9120656"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "4c319c1853c833f3614e58360620e650"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "d63c2562f53d83f26435b055352a2da6"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "5b496c330f578c5461a82768f6d34f17"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "8d69c6eea3d8bfd8f8d2d4378a5e64c6"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "786dbdffa242da27131a2d5952b0e008"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "ae8b4899069e88e59e3ad7e81bcf6d4c"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "12ed5f4a335e613323c14be5fa0e2c84"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "c1107fc777d861b315d8f5ad0618b1d4"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "0e070e23e732e9876deb055cb00c7e5d"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "8b711821e2c66eff783632da65c17390"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "538ae3e3bae6e6e3d03483cbf14db19b"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "675e55a19df62e3437bf9922a0782e89"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "df6019d6f870f0f6b7798f90a0cd0a87"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "a1e51b06ffe27ad2e7bd857cc4819878"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "3b4f4440e2d3fffddd3c3b8f72ed52dc"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "6653210c6acb54d227f922582cc937ac"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "60ef128d2b2897bde8fe379b5272af29"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "95d959735fc4c6c05b0acea83c89677e"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "179115586d6143b7f50cc3288596ca6b"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "312b17299b038622834ca41046c5007e"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "31a00fdba11725d09f2c2485804154ee"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "b97abf63ed53db87d9eeac1077a200b0"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "8bb9a0c0f128438fa0cffbd5bff9d187"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "3bc8d0bde0e20c0ce4ffc67bb185c163"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "f3b7a6bff97f31e4862b6ebe1b35c403"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "e5cbc6d8f2eb7802e3ac97dfc2141ab5"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "a54a5f997aeb56dc2112675c9fc4fe9d"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "9987361e6ee699993dfe2d8f334ab171"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "f1c3e36c1eaf0687c799951fe5e589a9"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "ae22c6d2dd769b27f6d5dba269a821fb"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "6985ac304cf3ea408e9abe1ce6e5b79e"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "3bb0c45a75486bbd9ec85d35505eacf7"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "f28cb70f33e801802eee1c5225ab3ed7"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "2dfae6e6b411fb822b5207343131a20e"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "5e961c69dd7f8b85e55b61e3fc46cf00"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "5be2f75de774c2fc6b41e06bcbb27ac1"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "af949628ead930a63f1a9d1b9bdd0336"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "37349010311adc8c8441cda8b61b72a3"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "baeb1985bff2c40b495d265f3d449629"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "345b09ae7dcbdb7662621637cdc86af2"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "d439ee7e0ef77f91cca36b782d120c10"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "5df53c2d756e369a660a6285854f787f"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "8f90940ffef66f706bfe2816ec4b1bee"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "27568a2626b92422f836cc5e14f58c29"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "5c31bdcc7560d397d922e02c3a610776"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "9538d68d3fc35776c744a18e04439f4a"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "8309b4e19fa4ab70dd89114118699e4f"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "d06541ad3742d0c025d32fa18ceafdbb"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "4c0c329ce39b5ea7268ac86bf8de9251"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "ae6edaf5f8825b3db2f57bc5d03fd4ec"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "1a32275846647ff4fe0774fa4601cc0d"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "0797691ad593e2d49eea78f947966b16"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "5c1585ae534c4de9cf70b3f02622d24c"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "54527b58ba6ef6ae02cf2e3bea8bcf37"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "700ec0e51f9c9a7de87a7be6b5d501f7"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "d7270a3f3a1f88e1da4963706b0f512f"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "46f4a80f56e348b5c3b3326f80217a23"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "38e47e2d34757db9279af65e5d265588"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "a6cd1172b1a27928442d37ab409e8593"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "29cf7825e2f7038f65dc4d74664ecda9"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "05db9b92260943fcc24eaad0d9f2fb7a"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "902654e78a9ec3e12b4315c6b634614a"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "187328843795881717d69d06504ff204"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "6d4ccdec69f0f4d44f5d1cad948f7fdd"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "8cccff8865c25194aa4de951545cc565"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "d4a43c35d8ac03b0104b624adaf665bd"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "390ff7811b17554222b5f187645f94c6"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "8166062bc5bfbfed4f5c231483b3821b"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "be0a24e381d6c9dfbbe9a7f23c2c298f"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "8f398f3afbd559a1aad85d02059c4523"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "1670b57dfc44fd39733f5d739f131192"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "c637939a8f8b3237e173a1c8be116a13"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "f19fbf965f863be64a8c497fa37e8752"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "d45e150968a35b3603b60219de0fdb95"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "20ed99a9f09a4c9a518683ca88a520d0"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "d9ed060592a14fcf99be5a2f08dc7191"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "e04547f5eb5ee5c2e23bb92c2ed70426"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "c01cd9784623a7cea476e89005a87142"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "e3cfb8e0bce74091bf2908799164b943"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "75229938b932786cd656a968ffa7ef2d"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "9e7d4e60a0fd66ae999e4a46e2ad2ac6"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "b081b32245c8f17d4308ddafc61a2dbf"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "baae75851db3c2463d7dcd6dbfec7b42"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "acf6a78a3b90955872ca96d6d02dc508"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "af139d5f89e2d50d887c5e8adcd58aa3"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "1831416c306309af0d9eea4e6f351266"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "f5aacb08e113297bb99322877320b8f5"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "d465ad7f70c87d0a8f93be186e516028"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "bd391b3710eb8fb5abe6f124095e1231"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "424d8d2584a1c3f9e08872a21e4f7e7c"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "62e0a0a971e6bf2d5e6de469bb193b02"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "025c81c8fe82c6ece7579242061a9e47"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "644c6fa89a2ae740d28510791a47344d"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "dd80137a9181ac6b581767a90f7c71ad"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "323be74f65fe00fadd0e7e6dc3989d4b"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "525a1fede76d76ae21dca2cbb14522cd"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "253ac9c24366ecc57ef40c23dabd6fe5"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "25639e577d363d8c9f50f8aba060b885"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "809a2c3c6f32497530d0f1403e46e2b0"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "85e0a11291c78daae5241708fb8cabd2"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "194bb16d4dedfa264dd6a5dfa9ab9aab"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "f6818e02c20b2f432421ac10bfeda464"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "2a2ec3e31323085efa320229ba3d84d8"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "d453156d6df27d72b49a2b49b3b5644b"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "5bb46ea9e2329c099f4c0693f5115462"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "d715525cbee8068b654f8910151c9619"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "018ba4fa967e5a250e4bfbe42740afa2"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "90a7aee13b5244d43e4d58c99b7c2360"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "bd43f32c0a485ddcce3550bd558fcbea"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "658299b09c0c7651a29d1a593ef30949"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "36132e84f00a07f5310f3ee34cece0c5"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "f8b499c05aac56c71641a4de574d582c"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "8907e7230a61a401ef33c06bfb2f7d98"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "0e3931f3d72faac4d5c5913708b4e5c8"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "341e76103d2c4089fa9591dae770ae44"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "f0774fea2051fb18e7761fd6620f7bd7"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "a1c3125680f617d5faafa75eed7e8a80"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "48742df72d0df8281e5c59801ebafd2a"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "309a90424cf27821edb59bcda9d050a1"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "08c322db53e1ea4c8f556737aafae50c"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "12b56bbd1f0aff4719df6384893b1820"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "a3cc2e2183eb568a8b1a50980c268627"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "e48e6badbc087678fee0a8c02c0611c4"
  },
  {
    "url": "kungfu/js/vue_react.html",
    "revision": "34981edf9e0e87abc6638c8ad491d0e8"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "b3313d7e1b03e089f538097520835a1d"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "2a1e9d75e3ec9458ecd8f60e5e5189c6"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "9353f45f0716c0ee1a81e7ce98125b6d"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "c6b9157c8a91036fd78448762f16ff65"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "ddcffe5bbe67e0187c6589a1d464a114"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "af64e4608955c99a5dba47de75287d4f"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "70a74f77aab6f900e83e881f82de6d88"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "09abd93e4335f62c1bf696c9e0450a4c"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "172eaa597d13b3e2fe53ae473593bf73"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "06d16f43b9c05d910c241dc5433f480e"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "8548d3a389591fbb4cf0542e5074eea6"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "f62403f638d0c352f7e4e617a4c8b36e"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "ad50a7466d628ae69650c0647e3bbb6e"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "663ea6f2f93c1d01ee8ed48793f309c3"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "0343f40ff126a0feaab69f8cc24225b6"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "e8d690a91ef4adceea16a58652ac3a35"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "2304fdb1d64a9d8f473e47aee204b59c"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "38be31a531eb77560cdf4172bc67230e"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "afe852de3f08952641c7b5cc023b622e"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "d64c0dff7c1c33549009aaf1a662fc70"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "cb9b04f25344a04d1e07ca1bb84326fc"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "3606749822ee2634345a6879307fcce4"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "9af1351e76ed3572fd9cdde00c133808"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "7d7fb3a02e8b0b29da088c8d00b94c7b"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "b32a601acbd01524dab1eb429ba7534a"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "db94f3c87e6082b74025c106c4a33136"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "6747419e120e4b86913b267cb96d22ce"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "4a8d8dccc038adbbbf86e9342ff6e0dc"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "13ef1ee19e0134639adb2e1331176eec"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "204533f0430890930225b17a3812260e"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "185b4f058e142581f6a68ac4eb01f383"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "a2171b2750666a45b2920402913dc65c"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "3ed804c92fad0b27b7313ec70a3e858a"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "eedd23b2fc6ebbfe7a3f7f547b7e9ed5"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "48c7d1315d98ce46fa2a80174bc3b9d4"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "80537080edb1ed58574f51ac588363ea"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "d8857aef56ed1113d84ceeb75afdfef3"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "53255954c23e0b0d597af7be7d7e76e5"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "28844fc0f594d89b9ab1cdc01ea2a29e"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "cad2fd917e8d1a9079e067d44c8bd4b3"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "54851463452e1e0a72d87401695966ad"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "ca3979760786d11d1707866e4e7fdd26"
  },
  {
    "url": "kungfu/template.html",
    "revision": "789b352c1d6c01cd290835722734cb19"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "151473291c4784a15755a36abcd9c2b6"
  },
  {
    "url": "node/env.html",
    "revision": "33190bdbf279c7be23f4fd06ee677def"
  },
  {
    "url": "node/index.html",
    "revision": "ddd1bb3eda68001fdd4104aec8099593"
  },
  {
    "url": "node/n.html",
    "revision": "1a7c974da8fc1a680a32c4673455ab8a"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "41260021cb18819b8670440ba9d2d51f"
  },
  {
    "url": "node/npm.html",
    "revision": "b6c2b997a349c97242ab92a69b998cce"
  },
  {
    "url": "node/sequelize.html",
    "revision": "7df39c8cf827fd3c2122b6fcb3e47c9f"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "de51dfa4ff3e17efeb8f88873b9c3478"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "dd189b466e9ad769b3874d3f561b7141"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "c51116c365046c940126dc8cf8852de3"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "a6d1327f647733459104ae4970a913b7"
  },
  {
    "url": "php/clean/di.html",
    "revision": "70d42121e15004116e6dc1993683a216"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "e29469a7ea8b6ac2c93bae8a95a9a288"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "2b1d29fa11121d763d95fd452be9c0cd"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "6442e9e217c86b92399e55a23bf58cb6"
  },
  {
    "url": "php/clean/index.html",
    "revision": "ee8c70185c01b4a5088d64761cdf2799"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "5e8f21a0ba3fe56a32c646983fb38e03"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "6f8a92591dcc5b0f485d1367c93ad7d5"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "081a6b66d915d43cd917aee15d025458"
  },
  {
    "url": "php/composer.html",
    "revision": "977f7add411cbd541f22ba19d3d28268"
  },
  {
    "url": "php/crunz.html",
    "revision": "88bf65f44a72c903f1639b484e721e2a"
  },
  {
    "url": "php/laravel.html",
    "revision": "7e12d660e1aae1f9e3d8ce94387d42f9"
  },
  {
    "url": "php/magic.html",
    "revision": "b3dd8ceb0b709ea69771ef5df3869d19"
  },
  {
    "url": "php/notes.html",
    "revision": "1ca65785c8fe0a9d2ffcb528254549aa"
  },
  {
    "url": "php/oop.html",
    "revision": "39a030eb62137271416cea5da6b83e8a"
  },
  {
    "url": "php/php7.html",
    "revision": "d6c73a0339731f589c56fb76a6db05ff"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "9a29601575dc9e6591434cf973e81d0d"
  },
  {
    "url": "php/reflection.html",
    "revision": "81b79be644b308d10d6c196afd2772d4"
  },
  {
    "url": "php/tricks.html",
    "revision": "96be64ca16a611ef67ac92a7db2d6afd"
  },
  {
    "url": "php/wordpress.html",
    "revision": "1bc740d661b3da7666c6794c943f5f70"
  },
  {
    "url": "quotes.html",
    "revision": "9037101870b86abd537e7c6fea760d4c"
  },
  {
    "url": "refactor/notes.html",
    "revision": "cd8b65f8cf6f9b4cfe71336dd21d3e90"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "5d1055054d4ab174ac5a9359d2372943"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "9d83b5f32243a9698ddf4fc2e2eaf5dd"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "3f50ccde2ab49b0ea4f656daf747317d"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "232a9ad291065c5fd4392d263155d050"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "0f9dbfffe2a6f882ad4b87d31b552701"
  },
  {
    "url": "snippets/jest.html",
    "revision": "5fad25c5a7776c397c93cd36eddb341c"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "74be43510dad9dec6af062306d93a18e"
  },
  {
    "url": "snippets/regex.html",
    "revision": "74efe0aea54f04147e0b8dcb982fa8f6"
  },
  {
    "url": "terms/12factors.html",
    "revision": "cc6f1a4363930b5adf43d750ffc2cfd8"
  },
  {
    "url": "terms/architecture.html",
    "revision": "2cbcef119c56bd3f24c1bc4467f374c1"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "719b8a94c64fb49dda8e192cb5d79496"
  },
  {
    "url": "terms/ddd.html",
    "revision": "9b6c467bff0927079def0a8b449a45f1"
  },
  {
    "url": "terms/di.html",
    "revision": "1d77caace25785d6208a5258fb3618ae"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "72f6e71b8193058d89552c1aafe2e133"
  },
  {
    "url": "terms/javascript.html",
    "revision": "7ec068d5f054514ce86cb3e26f32dfd5"
  },
  {
    "url": "terms/oop.html",
    "revision": "d5fe8765d2810aea20d6f4d50926abdd"
  },
  {
    "url": "terms/patterns.html",
    "revision": "23c9ed10c67cbcfecfbb5c22a340e4c9"
  },
  {
    "url": "terms/principles.html",
    "revision": "371ec1714a92930b5a909c781acb5768"
  },
  {
    "url": "terms/rules.html",
    "revision": "9f12df8193347a28c0209653f806cddd"
  },
  {
    "url": "terms/testing.html",
    "revision": "d596c5b94ab184c6a1c2c9d1a01b1b71"
  },
  {
    "url": "tools/chrome.html",
    "revision": "862256f7411ed2a5de469ed08981dd3b"
  },
  {
    "url": "tools/docker.html",
    "revision": "e2cce5f4b7255425d5c8ab82c1f2e28d"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "74ce85d27238827077e81a8ddbab534e"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "5c3150631407a6a9a41451c56e2e29b8"
  },
  {
    "url": "tools/graphql.html",
    "revision": "c528027fc56197132129c2e0367ec987"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "05198a2676c2327a3283cb5b3b22eccc"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "15b4231c97e05b0ecb2cf31f4cf07724"
  },
  {
    "url": "tools/redis.html",
    "revision": "4dd27cdc992b3da95e9ae9354acf2953"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "dacf97f3e0b6a7a4e4787c988fcc02ac"
  },
  {
    "url": "tools/vscode.html",
    "revision": "9310c188ec444786e3dc16eb1b944dc8"
  },
  {
    "url": "tools/webpack.html",
    "revision": "38d7a4be935929bb0eee0fd3866bf844"
  },
  {
    "url": "tricks/compare.html",
    "revision": "97747b8dcf2cca99b6d7a6061b8bd78c"
  },
  {
    "url": "tricks/git.html",
    "revision": "ee0bf3b520bbaaced103ce19c3c0f113"
  },
  {
    "url": "tricks/linux.html",
    "revision": "cc257383bc564046f6fd9b79b4cfef6e"
  },
  {
    "url": "tricks/mac.html",
    "revision": "3aaa969cbc9ae3a25e099776d547f0f0"
  },
  {
    "url": "tricks/misc.html",
    "revision": "21efcace7191ed406760e2df633b2fd1"
  },
  {
    "url": "tricks/setup.html",
    "revision": "9c2a059fec1460a09a482fec6c27affe"
  },
  {
    "url": "vue/communication.html",
    "revision": "9c21a95ebd45565d99bfd68c2b94c681"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "66c06e4fdbd3df0b4e622affeae31dd9"
  },
  {
    "url": "vue/events.html",
    "revision": "f020f33598f8baf38e15a8d049135943"
  },
  {
    "url": "vue/references.html",
    "revision": "bbb0632fcba5d6d256d4c27d23cf8b40"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "eb6f81e24b5828c611bb9ecc34b5a9ef"
  },
  {
    "url": "vue/test.html",
    "revision": "83483d0fdab149f302671b935da21947"
  },
  {
    "url": "vue/tricks.html",
    "revision": "34b0684b73d7e5b26e1b33fa86eeac0e"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "d98cc8462d8cd1e7e2a6e09447653b0b"
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
