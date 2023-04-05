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
    "revision": "eb54abd96b562d1fd97e2cb7d6b7e46f"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "0184f955c4bf61d0322ffbbc8ca5db08"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "4e2050a85dfd0c95985ea9e78a93d00f"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "816f561507e3c38667c962bbb64ef3d2"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "92a59b56262289ff8e1239eafb373d58"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "eb461a809f14fcc0d439472e9d5fdedd"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "99e57a38f420bed0d3c453f285629a14"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "32e40ba66f1118aa6f0efbb5e7ba206d"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "204b4e6ee455edb69cb0ca1056b796e0"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "c53c2e743e80fdcea5ec73ac1ce49267"
  },
  {
    "url": "algorithm/string.html",
    "revision": "ae3ab4d052fe689356d584e548db214e"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "62bcb6e94cd936a7acb70699b2ddd620"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "6e81b8c7e69c1b28d8d23fcd28277eaf"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "9ee19df20837a854df3c0ee58dd916fb"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "679d94b206e1adbc2e51acc2baabd55d"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "ce1abd861bdbd37596664cb3ec8f32ff"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "bb137e126f3bd993bb1db1427b528bcc"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "f5f97cc5959793ec020cf3aef8812756"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "9c111600728e19d43a023d5aa4f0c056"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "31e8c991fd92247b6d03f1f8ce4b43aa"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "0567d132e9e9ad1ca80a148da4cf5543"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "a019159d11328d4ee2e590bbb2da96a6"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "4d3bb6a9d380c62c92a0788c33adb648"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "471e12721535da058c800a970065ef38"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "462d7753d50d36332c9523d9c59bef79"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "ac8232cede680b2ee9462c7f2a0d5916"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "a6aa40e7293ed22562322989921e45cc"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "d00361505cb4385352ac85a1961ca7ee"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "fb37dbf60fcf521a80715ff515336398"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "a6e1cbb6e181d3620325a62b5225aaaa"
  },
  {
    "url": "architect/authenication.html",
    "revision": "7ad29ab6c1ffc38d8f28c6dd3fa83c5d"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "130de5e5edfd68cdba34af994a86ab9f"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "e6757a4166042ffd2eece05e72be2edd"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "edfab9b4e6964f34ef1701cedcdaecb8"
  },
  {
    "url": "architect/ddd.html",
    "revision": "66c56464990acff1dd082f8805cf9f5e"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "a8ede1ebb1f3c8988c53afb062a4aee0"
  },
  {
    "url": "architect/ebi.html",
    "revision": "612916f8d104bf7bbe9cd921d296e0ee"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "50dee50640b2ec74604d9de2a60b53e3"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "8c78ea71e24dd7bb3fc4e1c9047ffd32"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "9af303127fec2f45458f61c57f2d54f9"
  },
  {
    "url": "architect/index.html",
    "revision": "09ce6f82275b400287482b380705c7d4"
  },
  {
    "url": "architect/messaging.html",
    "revision": "2174401648c59dc4377f4b819beb0b06"
  },
  {
    "url": "architect/microservices.html",
    "revision": "4b19700fc8b65d5256dc6bf1c7538415"
  },
  {
    "url": "architect/mutex.html",
    "revision": "860ea8d38e8d97a9220dfa4f41a76ac7"
  },
  {
    "url": "architect/notes.html",
    "revision": "0b6c068a935ce5d9efa9e5a093664570"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "6891d9873f53ade942466add99779e4b"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "3f12f40ae969b5889ecfb8fe9aed803a"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "64715df3c8692a935b6d253700518894"
  },
  {
    "url": "architect/refs.html",
    "revision": "dffe5f47e13ebfab891eff17c281f751"
  },
  {
    "url": "architect/restful.html",
    "revision": "85b3480767174d1e59261adf45f734b9"
  },
  {
    "url": "architect/soa.html",
    "revision": "faf7a71f93eb7997f99cede098e92074"
  },
  {
    "url": "architect/spa.html",
    "revision": "1e604af04a06c7c5c47129349d51eb98"
  },
  {
    "url": "architect/terms.html",
    "revision": "dac04bf35ed92e2489c867dcb1f7f14c"
  },
  {
    "url": "architect/webservice.html",
    "revision": "97fc7fea3375d9c5be195c079693552d"
  },
  {
    "url": "assets/css/0.styles.ccb91993.css",
    "revision": "90f74b0bcfa88ada88e33ece691ab0ea"
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
    "url": "assets/js/101.f617671b.js",
    "revision": "e6d06cc47d5176cd37affb9ef04c8de0"
  },
  {
    "url": "assets/js/102.e25d9243.js",
    "revision": "24d78f749c6a5542ba8a0aadaa9d812b"
  },
  {
    "url": "assets/js/103.bb90ced6.js",
    "revision": "e9f950b2d4bb65ee2e0703de1d7d3977"
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
    "url": "assets/js/108.6afac61a.js",
    "revision": "a0746c71e0c942109ac5e5c666e68cd9"
  },
  {
    "url": "assets/js/109.6ea8aea1.js",
    "revision": "2b530a67eb59361d829bf0f1eb254d76"
  },
  {
    "url": "assets/js/11.c9886273.js",
    "revision": "1d7bf909e3775001a10977e5ebffcca9"
  },
  {
    "url": "assets/js/110.d8088601.js",
    "revision": "8f22cf052c661c1b5b7302bd99645038"
  },
  {
    "url": "assets/js/111.a8624a47.js",
    "revision": "81e5a6aa5f0a7eda980155726a434111"
  },
  {
    "url": "assets/js/112.f9ee309c.js",
    "revision": "55472f753a022d06ba366ae4c7c61644"
  },
  {
    "url": "assets/js/113.728100f3.js",
    "revision": "0b5a65408906bfc19edce5abefb1993e"
  },
  {
    "url": "assets/js/114.f2a1ff6a.js",
    "revision": "e7eb798ee28856121f5adc4c1624eb45"
  },
  {
    "url": "assets/js/115.00c11df5.js",
    "revision": "1d3f91fa516916ca05b1d3743c3a7e3e"
  },
  {
    "url": "assets/js/116.6555d45c.js",
    "revision": "3a3485d87e72624406dfff6d8e1e6468"
  },
  {
    "url": "assets/js/117.24bf24c1.js",
    "revision": "b48ceb371edb691fc17680fb234e7cb6"
  },
  {
    "url": "assets/js/118.9c77724b.js",
    "revision": "c70043530bf090941e06108e7ef72ff3"
  },
  {
    "url": "assets/js/119.fc9d1db8.js",
    "revision": "d5b72b31916d271f175ecf88ac15d705"
  },
  {
    "url": "assets/js/12.a5de11c2.js",
    "revision": "ce22576a22192cda7c3ccd7fcff77db2"
  },
  {
    "url": "assets/js/120.456c1e82.js",
    "revision": "8182675732d6d0502f5a53ceaff6cfee"
  },
  {
    "url": "assets/js/121.93c87704.js",
    "revision": "c808b8a9e399a025fd6b968cc8986273"
  },
  {
    "url": "assets/js/122.5aa10f24.js",
    "revision": "e81aced920a932d1c245b724f6d82d45"
  },
  {
    "url": "assets/js/123.6ca0f5af.js",
    "revision": "6664de8301472c02f40ac39232cb0c32"
  },
  {
    "url": "assets/js/124.2f89480a.js",
    "revision": "a6295c57359c989c4224da5dc0479968"
  },
  {
    "url": "assets/js/125.3d28295d.js",
    "revision": "5e42ffe140ce072b84a13f7fcd87a94e"
  },
  {
    "url": "assets/js/126.d1d81386.js",
    "revision": "409373a0259907fa315ceb9c66db6034"
  },
  {
    "url": "assets/js/127.1b1ad131.js",
    "revision": "ed21b04494413cad2f801d0044067634"
  },
  {
    "url": "assets/js/128.b6042d8f.js",
    "revision": "fb649938c420108721ffd0079722e305"
  },
  {
    "url": "assets/js/129.d3cacaa2.js",
    "revision": "48c170cb2f2deed3fb49bed3619c7b1d"
  },
  {
    "url": "assets/js/13.d599e4cc.js",
    "revision": "72d50ed85a76f53d925b3fca6447f473"
  },
  {
    "url": "assets/js/130.84504e1f.js",
    "revision": "3c4b89f5db75896c2425f392a64ce9e0"
  },
  {
    "url": "assets/js/131.8fc0432e.js",
    "revision": "f8e3e5cffb66e563a50bf488c5019d42"
  },
  {
    "url": "assets/js/132.f4508937.js",
    "revision": "9d649a68a31691ca5ee4c530488dcf47"
  },
  {
    "url": "assets/js/133.0198e9cf.js",
    "revision": "e913c006c0342219ef344f5c093ca626"
  },
  {
    "url": "assets/js/134.81626fc4.js",
    "revision": "ded84a0a5004020d75b74e3cbca1074f"
  },
  {
    "url": "assets/js/135.eca636ea.js",
    "revision": "573421a85b4c2793fe866b0382fb47c7"
  },
  {
    "url": "assets/js/136.b37651b1.js",
    "revision": "8663871170484ef720d4568b89dc209c"
  },
  {
    "url": "assets/js/137.0d45954d.js",
    "revision": "51c6cade7d0fdb63812a91e5094b5733"
  },
  {
    "url": "assets/js/138.69a835ee.js",
    "revision": "1d1bc12257b6348aacfd660fccf214c2"
  },
  {
    "url": "assets/js/139.562befd6.js",
    "revision": "1c5022e77bf2f5afad94095be916679d"
  },
  {
    "url": "assets/js/14.e3e9fff8.js",
    "revision": "35717cff0ceeb129dd0b3c37e6c08100"
  },
  {
    "url": "assets/js/140.0763a3fb.js",
    "revision": "14c2a5daf1197690a51f27c4f05bdbdf"
  },
  {
    "url": "assets/js/141.4f11da51.js",
    "revision": "0771e23f9703677fa8b7e642d862d329"
  },
  {
    "url": "assets/js/142.fd1eec79.js",
    "revision": "f30af3998045c180f13af4edd25fb91f"
  },
  {
    "url": "assets/js/143.5d91c605.js",
    "revision": "217a8ee26b59451f9b3cfd80c861f30b"
  },
  {
    "url": "assets/js/144.f98f04c8.js",
    "revision": "73eb1b876da2241d273cdaef5fc2602a"
  },
  {
    "url": "assets/js/145.dc0df5e9.js",
    "revision": "85a49c7248d7590b05f286d1bf235669"
  },
  {
    "url": "assets/js/146.7e93db79.js",
    "revision": "ca09f820ae67722da1f253bfa2bca279"
  },
  {
    "url": "assets/js/147.fd14750a.js",
    "revision": "fd3e886f93250354796a8caad323fa3b"
  },
  {
    "url": "assets/js/148.b2725841.js",
    "revision": "24a2f1eeff27ac79db8efc0cd37a4f00"
  },
  {
    "url": "assets/js/149.dfef70b6.js",
    "revision": "55700e3647f9c5febfc07ede93b2d212"
  },
  {
    "url": "assets/js/15.219d94fb.js",
    "revision": "ae8e3aa0ef48d4cee4409fc085195dce"
  },
  {
    "url": "assets/js/150.d25a2261.js",
    "revision": "056cdd7cbd60ced7c8b3c80cf2e8d727"
  },
  {
    "url": "assets/js/151.94244934.js",
    "revision": "4886d1e8b98d15d2bafe99f73fa06b4d"
  },
  {
    "url": "assets/js/152.568a8fa0.js",
    "revision": "434c04a2a487d2a383f7687a8e3d5f91"
  },
  {
    "url": "assets/js/153.257b17ea.js",
    "revision": "874abaffaeaa63cc2d53c49f8b9006c8"
  },
  {
    "url": "assets/js/154.cbe7aad1.js",
    "revision": "4be8805e297d0598c28e3b4174642922"
  },
  {
    "url": "assets/js/155.3055717d.js",
    "revision": "512fcf5f1804a8050cd068eb21d21e5c"
  },
  {
    "url": "assets/js/156.e5b44fe2.js",
    "revision": "3098815eb7520e217228bd89ff04c252"
  },
  {
    "url": "assets/js/157.aa5059be.js",
    "revision": "1ee65d2a95e7645de0ef38a930110ed2"
  },
  {
    "url": "assets/js/158.3c7e4d55.js",
    "revision": "0cf3faaf8b1a4b3a2efc6071b7a06383"
  },
  {
    "url": "assets/js/159.5a62e96a.js",
    "revision": "06f3d495e3ee56c03e52cb835561a575"
  },
  {
    "url": "assets/js/16.ffe5cb53.js",
    "revision": "58d042346a1c0215ccd739c3433392f7"
  },
  {
    "url": "assets/js/160.16ee7edb.js",
    "revision": "929898351dea30ac4868eb33401224f0"
  },
  {
    "url": "assets/js/161.a50a47ff.js",
    "revision": "6d0b4d80d95d4f4fb8a66d6267ec71b1"
  },
  {
    "url": "assets/js/162.7d4fa351.js",
    "revision": "dd7652ebd8e4e590d9332d38f9f2d142"
  },
  {
    "url": "assets/js/163.410c1ad1.js",
    "revision": "567a7920cd750b8c9153194541cc0363"
  },
  {
    "url": "assets/js/164.f2bfe6f4.js",
    "revision": "8be769a0dee4d053cfd1535c6f005513"
  },
  {
    "url": "assets/js/165.15d64cc1.js",
    "revision": "8e70d266b3a4ec147a0f822a1b7d3af5"
  },
  {
    "url": "assets/js/166.22689556.js",
    "revision": "8e522f31fbf42f18e71dd2c6d4eacd63"
  },
  {
    "url": "assets/js/167.a9af5c82.js",
    "revision": "bacf92630aaa17c930a4453666f4cc71"
  },
  {
    "url": "assets/js/168.a8d7c96e.js",
    "revision": "36960dd3b0b81be88d42e5b7013774a6"
  },
  {
    "url": "assets/js/169.b5d487ea.js",
    "revision": "85c46274ae24a0c57b8c2e115a9eae86"
  },
  {
    "url": "assets/js/17.3b79afde.js",
    "revision": "48303405251618b886c34a98fd13721e"
  },
  {
    "url": "assets/js/170.161a2ef1.js",
    "revision": "9a5c79b2485cdefd0363c28ac13be07a"
  },
  {
    "url": "assets/js/171.51e0c211.js",
    "revision": "01c4b1215546fb03596e37bfa743a746"
  },
  {
    "url": "assets/js/172.f5c86c81.js",
    "revision": "77b6ab08ae40ad4700ae1f066c81e1aa"
  },
  {
    "url": "assets/js/173.4bc8b97a.js",
    "revision": "a1f8d058de8dfbf68dd551a05b87698b"
  },
  {
    "url": "assets/js/174.f868e6af.js",
    "revision": "53e6f685cc8ff92e46876050c4ee3e00"
  },
  {
    "url": "assets/js/175.5b5b797e.js",
    "revision": "e7ffdd52270e89b20a9f410207f3e182"
  },
  {
    "url": "assets/js/176.4fca9f85.js",
    "revision": "4ede6b1cfbbf9a8ff112cb0df0f1d454"
  },
  {
    "url": "assets/js/177.4a4c3c8a.js",
    "revision": "4b9bd2c80e2c0c3eb3d0605c4c37b019"
  },
  {
    "url": "assets/js/178.c4948db0.js",
    "revision": "c676b546983c38f86cee31bd131b0d92"
  },
  {
    "url": "assets/js/179.ac8d9cf1.js",
    "revision": "bbc76f6fabbd5aea7f3ade29d0b07757"
  },
  {
    "url": "assets/js/18.027cf1bf.js",
    "revision": "0b15cf6e7e3cf4c7a5c9bfb1db20fa5a"
  },
  {
    "url": "assets/js/180.124a1079.js",
    "revision": "76ff785b6022dcb6dd74ca71a28540ee"
  },
  {
    "url": "assets/js/181.2e386343.js",
    "revision": "795b12ded5f71b378942f1af3c86b75e"
  },
  {
    "url": "assets/js/182.22bff6c4.js",
    "revision": "cd486f5c107be2ba7ae51c2ee71bc303"
  },
  {
    "url": "assets/js/183.dc4d136b.js",
    "revision": "bb52244b175e13d0950390f8ffa1f381"
  },
  {
    "url": "assets/js/184.fb3e3061.js",
    "revision": "cc7f1aab8bec27d4351c5623931f337a"
  },
  {
    "url": "assets/js/185.e017bd89.js",
    "revision": "e65d64155418092bf5000e62d91c8011"
  },
  {
    "url": "assets/js/186.c7c7f754.js",
    "revision": "89e0acdda01d780bb60a71489c55b98a"
  },
  {
    "url": "assets/js/187.0154b8d1.js",
    "revision": "a11cd49b546bbf3f92f741ff211a30ec"
  },
  {
    "url": "assets/js/188.23f3058a.js",
    "revision": "06970075794bbd2df5bd1eac0129e61c"
  },
  {
    "url": "assets/js/189.fdab4e99.js",
    "revision": "7bc0ab0985e055bf6a9a2a7b452b1304"
  },
  {
    "url": "assets/js/19.9282efdb.js",
    "revision": "8418e090d6654f4fba936fb8334251b2"
  },
  {
    "url": "assets/js/190.d0536a4e.js",
    "revision": "5f297daa4c062b17fbcdfd644a90f766"
  },
  {
    "url": "assets/js/191.9c48bb72.js",
    "revision": "9ac6f3134d7cabbc3326b60e5d4c9337"
  },
  {
    "url": "assets/js/192.aa77f2e7.js",
    "revision": "2d858d796e4deb5ea743e64d2bc9355b"
  },
  {
    "url": "assets/js/193.c422432f.js",
    "revision": "ce315840009a9cf660f7f2cdf5dd6baf"
  },
  {
    "url": "assets/js/194.aa44720a.js",
    "revision": "a5267ae9da38e437db1e12b15a3801bf"
  },
  {
    "url": "assets/js/195.862c80d4.js",
    "revision": "02be056cc6629b63346d766a267ae1d5"
  },
  {
    "url": "assets/js/196.7262d326.js",
    "revision": "e3d6c88c938ff0a92783d0a43afbecea"
  },
  {
    "url": "assets/js/197.1e2145d9.js",
    "revision": "55f144493aef5e9d936a97b1143ce3f3"
  },
  {
    "url": "assets/js/198.7553d2c9.js",
    "revision": "0d8730d4d418ff42518f8019ed1ed113"
  },
  {
    "url": "assets/js/199.4be80975.js",
    "revision": "389897780bcce36117c68d1c80e83ce6"
  },
  {
    "url": "assets/js/2.f0a2c450.js",
    "revision": "108c77b9e96fe5084565c352b054ab5b"
  },
  {
    "url": "assets/js/20.1c932e92.js",
    "revision": "661e65ad0fafdf5b172b1b85d5713276"
  },
  {
    "url": "assets/js/200.76b7528c.js",
    "revision": "03d7613632d75d0c1723da5ead988cb9"
  },
  {
    "url": "assets/js/201.efe951a6.js",
    "revision": "095b757267929350e5b92e8804200100"
  },
  {
    "url": "assets/js/202.cce1f5d6.js",
    "revision": "8731a23f5974e631926120fb3e3f97af"
  },
  {
    "url": "assets/js/203.acd50f1c.js",
    "revision": "f4aef86e6cfbefff0234b1cfd9f5e282"
  },
  {
    "url": "assets/js/204.660e84a5.js",
    "revision": "bac8cd88e04845cacff99607bb1c5fbf"
  },
  {
    "url": "assets/js/205.5a64b8e9.js",
    "revision": "af0318991ba46bd12b3ded36ffdea8f6"
  },
  {
    "url": "assets/js/206.524987e2.js",
    "revision": "a9887282d0af0089a2e437f2d213e47d"
  },
  {
    "url": "assets/js/207.e699123d.js",
    "revision": "179a4287fc3d5f0baaa25fe41d0a099f"
  },
  {
    "url": "assets/js/208.d85c1cb3.js",
    "revision": "0b841c92d8d676d2c72c9ce5972ffd4e"
  },
  {
    "url": "assets/js/209.08e106de.js",
    "revision": "36710183068c114fc55948f3a0037075"
  },
  {
    "url": "assets/js/21.0f85f3c2.js",
    "revision": "9dce8d1bfeccc16f888c2e57378121a3"
  },
  {
    "url": "assets/js/210.19344805.js",
    "revision": "adb8da7006333cac57890ec7013321c4"
  },
  {
    "url": "assets/js/211.7b10a61c.js",
    "revision": "e582d49487e3e1b536ffaddc8f454879"
  },
  {
    "url": "assets/js/212.5d6c7448.js",
    "revision": "ecf1459f3f7eb43a9fe7c097c690d684"
  },
  {
    "url": "assets/js/213.fbf6ced1.js",
    "revision": "6487a8c2b0fb859dc1bfec0bf258380c"
  },
  {
    "url": "assets/js/214.1d0d1332.js",
    "revision": "e76bce210b5d39b26d69be84565f50af"
  },
  {
    "url": "assets/js/215.f89ca270.js",
    "revision": "c044d42f85e7bce51d7659d88896dae9"
  },
  {
    "url": "assets/js/216.c3f04109.js",
    "revision": "a8cd4de3c7104ed6f6e9fdbbb4b4ccaf"
  },
  {
    "url": "assets/js/217.7829faee.js",
    "revision": "180f550720d38c262a80324df93d0215"
  },
  {
    "url": "assets/js/218.6a82494e.js",
    "revision": "19aa959052b22ab666db2fdaac19fac0"
  },
  {
    "url": "assets/js/219.02f3ce4f.js",
    "revision": "f524c735db6a3e051412601adc26eb4e"
  },
  {
    "url": "assets/js/22.8dfe1dc7.js",
    "revision": "ee0ec3e07ac5c695acbee805c7dcea84"
  },
  {
    "url": "assets/js/220.d7aaf181.js",
    "revision": "4c00fda2af1ea0b438fe3531be9e4937"
  },
  {
    "url": "assets/js/221.3f508cfd.js",
    "revision": "5a65cd6774af62516487e9ab560c5797"
  },
  {
    "url": "assets/js/222.579c5528.js",
    "revision": "ec37e4040daec4d5af1c2c92fc5d140e"
  },
  {
    "url": "assets/js/223.eae436df.js",
    "revision": "0395e58c61a3db5f021da35b20fc4790"
  },
  {
    "url": "assets/js/224.16053c25.js",
    "revision": "e34532bb121078b17e5f70145a86d370"
  },
  {
    "url": "assets/js/225.37d92592.js",
    "revision": "128bb4e358c7b252cb14be7ca727658f"
  },
  {
    "url": "assets/js/226.8e28874c.js",
    "revision": "27d83a4b1cabd294630ea46995e81b76"
  },
  {
    "url": "assets/js/227.4eb3947b.js",
    "revision": "01ec5340da4dea3a30800468ba7a1c04"
  },
  {
    "url": "assets/js/228.e7d48e19.js",
    "revision": "094d93855a255ebc17d60b92d4ec9efe"
  },
  {
    "url": "assets/js/229.5ceddfae.js",
    "revision": "ff3a86043f78517ab0843f18aa14be70"
  },
  {
    "url": "assets/js/23.7b0daf86.js",
    "revision": "6b28cf2b60390f7f561a8e17dd9a1867"
  },
  {
    "url": "assets/js/230.c3ce39a7.js",
    "revision": "8da261bdc596996a15fe6fc0138e5a6e"
  },
  {
    "url": "assets/js/231.92839942.js",
    "revision": "e764d34e95d812b73aa4b35668001d81"
  },
  {
    "url": "assets/js/232.1435ddf0.js",
    "revision": "4a96005f27798f1f8a7ddaae626f3fd9"
  },
  {
    "url": "assets/js/233.03ead530.js",
    "revision": "bde012848895f64c97bc2d4ee2b6c37e"
  },
  {
    "url": "assets/js/234.b1569acb.js",
    "revision": "a24510df1f4e7b1d068f21bb7e8160ac"
  },
  {
    "url": "assets/js/235.4d768124.js",
    "revision": "55f4c9d19bee65bc8ab35382cdc3864b"
  },
  {
    "url": "assets/js/236.9e48c64b.js",
    "revision": "f91e23148d8eae20f4e4434197fd2152"
  },
  {
    "url": "assets/js/237.8ce6d255.js",
    "revision": "366917eb6b9f73e4609455b984e4dbdb"
  },
  {
    "url": "assets/js/238.855ce764.js",
    "revision": "3f7845b8389ad8edcb79eb53b36969a0"
  },
  {
    "url": "assets/js/239.a374f03e.js",
    "revision": "31710e47e78e03dac1697795cc07e60b"
  },
  {
    "url": "assets/js/24.1cbd2bc4.js",
    "revision": "364657087a7ead475e050fadd2a5e3af"
  },
  {
    "url": "assets/js/240.75c44846.js",
    "revision": "20582033d187e42b2f83504f8fe66d8d"
  },
  {
    "url": "assets/js/241.ae183ecf.js",
    "revision": "26bc198aa40696adfe386d4309cc6375"
  },
  {
    "url": "assets/js/242.bd7a86d3.js",
    "revision": "baa5861fb0616bd88ecae8f02048d846"
  },
  {
    "url": "assets/js/243.c39e5c36.js",
    "revision": "7628aad329f7517f73db0bdd3229c9e1"
  },
  {
    "url": "assets/js/244.9a83d049.js",
    "revision": "11c602131d74eec354b0f684d0439ad9"
  },
  {
    "url": "assets/js/245.69a76adf.js",
    "revision": "ecc5767a98da173e9de75c190c7cc9ea"
  },
  {
    "url": "assets/js/246.9356e3b5.js",
    "revision": "f006362a8337e3495f5c320e84918aee"
  },
  {
    "url": "assets/js/247.eb2a85e8.js",
    "revision": "d0798f17914271186f2fea8c0e624909"
  },
  {
    "url": "assets/js/248.c7e59520.js",
    "revision": "9445947212ff21e69d42a457380ddf0a"
  },
  {
    "url": "assets/js/249.d16d1f01.js",
    "revision": "786e8930c7f25b29bbfce68226fac2db"
  },
  {
    "url": "assets/js/25.2425bfc8.js",
    "revision": "d3d2f9ceadbf17373012fe1376f1c2cd"
  },
  {
    "url": "assets/js/250.d3ae30dc.js",
    "revision": "43a6bc1c91e3ad3a0508c24c1045646a"
  },
  {
    "url": "assets/js/251.16f7af2c.js",
    "revision": "3258db9349ec2645d0aed4d3418c29e6"
  },
  {
    "url": "assets/js/252.c49a5f1c.js",
    "revision": "89c47c1989083e08a323ef2b74ac09e0"
  },
  {
    "url": "assets/js/253.bd643260.js",
    "revision": "eadef7091d897f5c4579de6cbc9811c2"
  },
  {
    "url": "assets/js/254.d131b510.js",
    "revision": "68bf23e9adbbcaa427333061cc86f388"
  },
  {
    "url": "assets/js/255.a776d09c.js",
    "revision": "b3f73e14ba5e89109d149949b291dfa7"
  },
  {
    "url": "assets/js/256.835b10f6.js",
    "revision": "dc030edf1b013f42d1ee0de4ea06f214"
  },
  {
    "url": "assets/js/257.8596a4e6.js",
    "revision": "a8a2b2c74fdcf904def8a1f24ec471f6"
  },
  {
    "url": "assets/js/258.d32d3e96.js",
    "revision": "206820d54e91b7c408d09620c3a33e34"
  },
  {
    "url": "assets/js/259.648fc917.js",
    "revision": "de231c4929035c49aaa632e3ab3bae9a"
  },
  {
    "url": "assets/js/26.a4ffff61.js",
    "revision": "e25df646f77079c289a1454a0e04c4b7"
  },
  {
    "url": "assets/js/260.9c3ec5cf.js",
    "revision": "f487d5e575afb67d783be76e4566b853"
  },
  {
    "url": "assets/js/261.a0f139b9.js",
    "revision": "b2b4e64d2433f35aac0a3bd7074e517c"
  },
  {
    "url": "assets/js/262.ac4748c1.js",
    "revision": "3b53872e8cca30d908d1510ac91fa21c"
  },
  {
    "url": "assets/js/263.ccb022ab.js",
    "revision": "7a0e17837d6a01d7091007618e5c6663"
  },
  {
    "url": "assets/js/264.3155d468.js",
    "revision": "97dc7785a41c2df1a4b95d22d0ed33a5"
  },
  {
    "url": "assets/js/265.dc443cfe.js",
    "revision": "400e9981d9f76d3d1084676aa23f1ae3"
  },
  {
    "url": "assets/js/266.30b1403d.js",
    "revision": "03b9d8a77426b799924437e248b1bcd6"
  },
  {
    "url": "assets/js/267.d2c510f1.js",
    "revision": "e53b0dd8db08ad90ab367df976a8f0d2"
  },
  {
    "url": "assets/js/268.1d0b8c07.js",
    "revision": "c9c2d8aab143e6b824d63810d712874d"
  },
  {
    "url": "assets/js/269.8030136d.js",
    "revision": "cd4eea36efa37fd011c8c861c277887f"
  },
  {
    "url": "assets/js/27.26367165.js",
    "revision": "6c5731fa819378dfbfa2a1b224bf3c4e"
  },
  {
    "url": "assets/js/270.70abd91b.js",
    "revision": "8675da1dc6c403938058572ffee5d84e"
  },
  {
    "url": "assets/js/271.b6ca1dbc.js",
    "revision": "158a567a1221559c2c45cec2595e3095"
  },
  {
    "url": "assets/js/272.ce3e53a7.js",
    "revision": "85e53f567c85af3823642d9fa9591196"
  },
  {
    "url": "assets/js/273.2e57204c.js",
    "revision": "0ae9922d47afb02b16eef620601b2019"
  },
  {
    "url": "assets/js/274.b126c9da.js",
    "revision": "265a30a3fffcda36951797e3df1d279c"
  },
  {
    "url": "assets/js/275.177d958f.js",
    "revision": "81c0c2a13c613d7ac0fefbad887d802e"
  },
  {
    "url": "assets/js/276.4afa27cf.js",
    "revision": "c8e419aa3d7eea1033207f5b55bb1121"
  },
  {
    "url": "assets/js/277.cbb5b9a2.js",
    "revision": "650d0cb8253ec2f581e9f8f14f10659c"
  },
  {
    "url": "assets/js/278.ecaa2d62.js",
    "revision": "7535cc92ab8f084d5d0024107ec1d326"
  },
  {
    "url": "assets/js/279.5936536d.js",
    "revision": "a17a10e02ff1d4c34cb040873a64164b"
  },
  {
    "url": "assets/js/28.65521d7f.js",
    "revision": "cb277cca3fa67a446445b67a8c834578"
  },
  {
    "url": "assets/js/280.3d05d58a.js",
    "revision": "54e581ff99b815a670b5e7089c7d49b7"
  },
  {
    "url": "assets/js/281.bc54f366.js",
    "revision": "02dbfdbaf26f5697bef85b6d7e68afca"
  },
  {
    "url": "assets/js/282.2d8f2953.js",
    "revision": "ad3817634c31919b53a394b138f34b40"
  },
  {
    "url": "assets/js/283.1fbce883.js",
    "revision": "3756ccf59f9cb9de9aa8db89a664b556"
  },
  {
    "url": "assets/js/284.2100fd09.js",
    "revision": "cb1215ddda23216b24af8d0d4e30b2f1"
  },
  {
    "url": "assets/js/285.da10c042.js",
    "revision": "8d216c4cec95800fe0b3689fcf26862a"
  },
  {
    "url": "assets/js/286.06d6a0b3.js",
    "revision": "94d8acd3697d8d95e19d0764eb7c0b15"
  },
  {
    "url": "assets/js/287.fe79f534.js",
    "revision": "315eded7b73fe12d2268913fd36dacdf"
  },
  {
    "url": "assets/js/288.63166d25.js",
    "revision": "99724683b9b464839f8f7ce2e6b9482c"
  },
  {
    "url": "assets/js/289.71497b58.js",
    "revision": "addda3f5e3a3e02376fb5ad7e0ed5e74"
  },
  {
    "url": "assets/js/29.c81848ff.js",
    "revision": "b113b6db4e782ceff936d9322f7a6ad3"
  },
  {
    "url": "assets/js/290.dcd47a0c.js",
    "revision": "68da89356ce6ae0ae79631c7fbf77add"
  },
  {
    "url": "assets/js/291.6f29ccba.js",
    "revision": "d555e828f31bf10b01cdb2f0dce5eedf"
  },
  {
    "url": "assets/js/292.2d2dd3f7.js",
    "revision": "b9ca28d4f3a609b7e576ecd596756009"
  },
  {
    "url": "assets/js/293.d46a199f.js",
    "revision": "82e33e98a0dbb508507d0f6e20a010e5"
  },
  {
    "url": "assets/js/294.d44e95e0.js",
    "revision": "2cc55cba7965c3caf48eaa022ba0f8cc"
  },
  {
    "url": "assets/js/295.117dd014.js",
    "revision": "e85ce0f621080ffca02428d38fcc2005"
  },
  {
    "url": "assets/js/296.8706e3b1.js",
    "revision": "ed82dea3418d54af9ebad1078235a035"
  },
  {
    "url": "assets/js/297.34f399c0.js",
    "revision": "21e56efdc55a5694bba4dc443c80fea9"
  },
  {
    "url": "assets/js/298.b0f07cb3.js",
    "revision": "c7fe7425dd8ce4131554d29a6e04c368"
  },
  {
    "url": "assets/js/299.44968324.js",
    "revision": "c0868f687d65b509d4cb8e0fc4354364"
  },
  {
    "url": "assets/js/3.c5f65cc7.js",
    "revision": "0b963752bcc1e9e698bf024b155d3b10"
  },
  {
    "url": "assets/js/30.9f91807f.js",
    "revision": "82d48061888d66327a24ee063891fa9b"
  },
  {
    "url": "assets/js/300.c29c28c4.js",
    "revision": "d758fed1fb3458e7927daea5161a4abb"
  },
  {
    "url": "assets/js/301.bb759717.js",
    "revision": "cbf3d4b1f78e91fdaecae4fb1510ed14"
  },
  {
    "url": "assets/js/302.a07c527b.js",
    "revision": "c7b96eaf7c56d83687861da43b9574b5"
  },
  {
    "url": "assets/js/303.a2d21fad.js",
    "revision": "863fa4fc7e66b8cdd56bb81a520b5a62"
  },
  {
    "url": "assets/js/304.d8ec9c2f.js",
    "revision": "b3302b76e2781e08f6a30fc7af1184e7"
  },
  {
    "url": "assets/js/305.27b43c32.js",
    "revision": "4e7bf0188e85a5a8a454c1ac4c23ad4c"
  },
  {
    "url": "assets/js/306.df89d95d.js",
    "revision": "7be382023491c842e39444579f574dea"
  },
  {
    "url": "assets/js/307.4cd03c0e.js",
    "revision": "574bf6375e38dd21c2e21d2ddbfe3003"
  },
  {
    "url": "assets/js/308.afc5d096.js",
    "revision": "20f748cf2cd22ed5978d87cbfd00cea6"
  },
  {
    "url": "assets/js/309.7a0bbd71.js",
    "revision": "8c242910f5be1b841efe5ecf7d5f0b77"
  },
  {
    "url": "assets/js/31.ec00e847.js",
    "revision": "f583435083dcf9a0ffa4626dfe25dbfd"
  },
  {
    "url": "assets/js/310.abb06ee5.js",
    "revision": "62762bb511d4da69530af5b0a811a2f0"
  },
  {
    "url": "assets/js/311.5118d0d1.js",
    "revision": "d23cca797f6da519961c10b03b2a11e0"
  },
  {
    "url": "assets/js/312.a8082c3c.js",
    "revision": "d958e3dd669b30cc03b3be618146523e"
  },
  {
    "url": "assets/js/313.d250e105.js",
    "revision": "b2181f514e3b71bab0554cd957b672de"
  },
  {
    "url": "assets/js/314.ebf718f0.js",
    "revision": "7588e93e3cc26597bbf062157685605f"
  },
  {
    "url": "assets/js/315.ea524796.js",
    "revision": "504a2bcf596f96cfd5640ed05995e7c1"
  },
  {
    "url": "assets/js/316.3e6ca1ce.js",
    "revision": "d0c305bfcfd46e907b5e31ca2239eed1"
  },
  {
    "url": "assets/js/317.ebd4321c.js",
    "revision": "69caab2c86c0f742ab95aa4f38fde529"
  },
  {
    "url": "assets/js/318.6d187592.js",
    "revision": "2c8e616422b07bb5bb7ec95ee79283de"
  },
  {
    "url": "assets/js/319.abdbb312.js",
    "revision": "073029cdc13a888b39c9d1b8a7188978"
  },
  {
    "url": "assets/js/32.b79e72f4.js",
    "revision": "21b2ea32cb12ca5599652e95e560238f"
  },
  {
    "url": "assets/js/320.0f9e2f1a.js",
    "revision": "9eb6f1c80cb0273d76f790d7bd1e450f"
  },
  {
    "url": "assets/js/321.79fbc507.js",
    "revision": "e676fbd987a1e2d58770834141f518fb"
  },
  {
    "url": "assets/js/322.3f82fe01.js",
    "revision": "fe5af792a3787bd86db762c9df8b03c1"
  },
  {
    "url": "assets/js/323.13dbb937.js",
    "revision": "6f2cf66673adbf4b7848f914af8519ab"
  },
  {
    "url": "assets/js/324.8a8129dd.js",
    "revision": "2c2015cc413d904fcc234b4cee440542"
  },
  {
    "url": "assets/js/325.afb280fd.js",
    "revision": "df928ff4076131cade239218eff82cdc"
  },
  {
    "url": "assets/js/326.7f8dc9b2.js",
    "revision": "26cfc1888a686aea25bc8cae83017bf6"
  },
  {
    "url": "assets/js/327.85362497.js",
    "revision": "012aecf85990bc4d7aa44025f2392fe9"
  },
  {
    "url": "assets/js/328.e75656a6.js",
    "revision": "f757174fd484e14ef760ad6e53a34ac5"
  },
  {
    "url": "assets/js/329.dd98774d.js",
    "revision": "09b75efc62f65966a51b50be909e6b24"
  },
  {
    "url": "assets/js/33.c8498908.js",
    "revision": "f8be81c3e6a6b08ca7c511827786a90d"
  },
  {
    "url": "assets/js/330.85aa04ac.js",
    "revision": "b92a627a991cf04e1f08e3da6f0848dc"
  },
  {
    "url": "assets/js/331.735bd943.js",
    "revision": "fd95bee55d6fd964ebfd6a76a3936663"
  },
  {
    "url": "assets/js/332.52fe4855.js",
    "revision": "ba78c6a95b9d2f25afd46fa75c7af116"
  },
  {
    "url": "assets/js/333.e4df6ce4.js",
    "revision": "79cd068fc90ba74bc7ffb75cafe7a2d3"
  },
  {
    "url": "assets/js/334.6f005a20.js",
    "revision": "881b0ce9127ccfb9cc7cd9512a4a62de"
  },
  {
    "url": "assets/js/335.1287cc65.js",
    "revision": "7463836543f2edd5621000bd95fd150b"
  },
  {
    "url": "assets/js/336.ef666d29.js",
    "revision": "1c891e0ded4cb77afd7c79c216e7768b"
  },
  {
    "url": "assets/js/337.a6682c99.js",
    "revision": "d5680d4ac3076cb0942c9a98704de4d8"
  },
  {
    "url": "assets/js/338.586af120.js",
    "revision": "8113d98d601c2ec68b2082d881de0e66"
  },
  {
    "url": "assets/js/339.103eca04.js",
    "revision": "889448d34ac2f184d38af8d00faa45ed"
  },
  {
    "url": "assets/js/34.230e8423.js",
    "revision": "25bd8d5fecf1235bb3a7958ba7ff5725"
  },
  {
    "url": "assets/js/340.c7092b4f.js",
    "revision": "29bb9ab4bb59ca935ea2ff86112cd5b6"
  },
  {
    "url": "assets/js/341.93100ade.js",
    "revision": "8a3217f7948b4fb4f77b2db7c4819f72"
  },
  {
    "url": "assets/js/342.1e3823f3.js",
    "revision": "2ec62827d7812a8e53235b07e362a0ef"
  },
  {
    "url": "assets/js/343.2d083142.js",
    "revision": "334f179da5503f24bf5ad0b5c7c4924d"
  },
  {
    "url": "assets/js/344.84055564.js",
    "revision": "a8ecfc1b3b321f5ba191059ee53ad265"
  },
  {
    "url": "assets/js/345.4afe615d.js",
    "revision": "449837a41b3cd635362b23df2bd4ef4a"
  },
  {
    "url": "assets/js/346.7b236bb9.js",
    "revision": "d3e0544ad4d96921145177df844afd95"
  },
  {
    "url": "assets/js/347.d840d639.js",
    "revision": "a218b39c0beec9d8240b10cc6f8e1357"
  },
  {
    "url": "assets/js/348.4c506cc8.js",
    "revision": "020af0244d73cb75e7aab492e07b58b9"
  },
  {
    "url": "assets/js/349.62493c1e.js",
    "revision": "c9f31f71dbd271c8a5117e9fb059c428"
  },
  {
    "url": "assets/js/35.75cf531e.js",
    "revision": "17b8a20ebb89569eccd488c820a41b86"
  },
  {
    "url": "assets/js/350.a69a2ece.js",
    "revision": "50008f4bcd3f9d5a4d28655108e65b3d"
  },
  {
    "url": "assets/js/351.05529153.js",
    "revision": "3768615832b18d72896073aa7dec0587"
  },
  {
    "url": "assets/js/352.3b68c598.js",
    "revision": "16692d45971f5a2f50eb91d25ebe02d2"
  },
  {
    "url": "assets/js/353.5ac13770.js",
    "revision": "176848fe1f862d80f88ece8548275ddf"
  },
  {
    "url": "assets/js/354.2e3e88b4.js",
    "revision": "5040ebb390ed9f88fe86d937d83d6298"
  },
  {
    "url": "assets/js/355.03df633b.js",
    "revision": "5886bc7949ddf0f776ff064983e761d9"
  },
  {
    "url": "assets/js/356.7f7935b1.js",
    "revision": "78522dc31f7d50ab7ecc0aebf5e96428"
  },
  {
    "url": "assets/js/357.5742a322.js",
    "revision": "41b660d51874db988497db790ecd26a0"
  },
  {
    "url": "assets/js/358.293816d8.js",
    "revision": "d3da188664f316b5d93ec3942f4dda64"
  },
  {
    "url": "assets/js/359.ef0f7fc0.js",
    "revision": "589364834530119c0449e94d3abb5797"
  },
  {
    "url": "assets/js/36.29fcda9d.js",
    "revision": "65973799ab700ab2d89a170ac5f07284"
  },
  {
    "url": "assets/js/360.c4d40ace.js",
    "revision": "c1d8a83142622ec05deec6e0cceb3fcb"
  },
  {
    "url": "assets/js/361.81063c92.js",
    "revision": "dec91a4d4634514712638386a183d83d"
  },
  {
    "url": "assets/js/362.a5703f65.js",
    "revision": "a3b2a1d0110ec64204af828bc077f19c"
  },
  {
    "url": "assets/js/363.022a8a7c.js",
    "revision": "e1f18b5dfed2298d1eda4390bd212ff9"
  },
  {
    "url": "assets/js/364.71e4d761.js",
    "revision": "2a80da963de80fd5ef83cb792eb3ef60"
  },
  {
    "url": "assets/js/365.412c4853.js",
    "revision": "b9208dccfde33d6589c0b9ee90511f4b"
  },
  {
    "url": "assets/js/366.ed7816c2.js",
    "revision": "65e65470979b044582e799bb44cf68af"
  },
  {
    "url": "assets/js/367.eebd1ff0.js",
    "revision": "3ca74037570ab5747b70e85629b7d1db"
  },
  {
    "url": "assets/js/368.8bf60283.js",
    "revision": "2a37e4af4bfa1482776d245bafe4815f"
  },
  {
    "url": "assets/js/369.796a41bd.js",
    "revision": "6e473fc5374a247cfda83dd60ed724f7"
  },
  {
    "url": "assets/js/37.f2e91c13.js",
    "revision": "0d833eab5bb944152eec976a972b600d"
  },
  {
    "url": "assets/js/370.f3e9ff3f.js",
    "revision": "5b65824aca8f152f83644b57916ff4a8"
  },
  {
    "url": "assets/js/371.8c5120a3.js",
    "revision": "71388ac4451430a894d5ad7db5c3e6f0"
  },
  {
    "url": "assets/js/372.19c6cfb1.js",
    "revision": "c90f2e9a67b753fc1055eb3d60475120"
  },
  {
    "url": "assets/js/373.992a0853.js",
    "revision": "605bfd9ff98a5c32c561c7778c809579"
  },
  {
    "url": "assets/js/374.d5d5b441.js",
    "revision": "e5f437bc8ba481ef7c1c9950c34f5151"
  },
  {
    "url": "assets/js/375.bb6b5da3.js",
    "revision": "2715af25df3b643c5ce53ce7ebaa6ba9"
  },
  {
    "url": "assets/js/376.56ab67de.js",
    "revision": "9011beff58e0db685bd7e69230e6a4d5"
  },
  {
    "url": "assets/js/377.54af4f1b.js",
    "revision": "3e5fbfd51022e55bc1fc66ca80d9b5fb"
  },
  {
    "url": "assets/js/378.7ce5fde9.js",
    "revision": "9f98e9a7349f66b3ac7e5a281eb655e4"
  },
  {
    "url": "assets/js/379.fce8bd69.js",
    "revision": "4221d35cc07a62c3b30a3e955537e415"
  },
  {
    "url": "assets/js/38.d6581dde.js",
    "revision": "8881bd155ac2be9adc9acbfeadfaf29c"
  },
  {
    "url": "assets/js/380.e67d7ef7.js",
    "revision": "edc807e304bfbc68e2f57782eaf09c01"
  },
  {
    "url": "assets/js/381.be7f2a3b.js",
    "revision": "5717a73d9d991778022f3389b9a7ac88"
  },
  {
    "url": "assets/js/39.8130c999.js",
    "revision": "5e6636591a85497c6832287917ddb68a"
  },
  {
    "url": "assets/js/4.56f72960.js",
    "revision": "c9a3e65700b4d89959215c154722801c"
  },
  {
    "url": "assets/js/40.cf363a55.js",
    "revision": "9a1058199324c584c31fcc4af7fcba4b"
  },
  {
    "url": "assets/js/41.534e6386.js",
    "revision": "fdb08ae5e9018a685c55daa7ffbc4808"
  },
  {
    "url": "assets/js/42.a9879aff.js",
    "revision": "016d52f5dfb011fcc4197ed869951f6d"
  },
  {
    "url": "assets/js/43.b2e9f26a.js",
    "revision": "1b6e53ce4a785bfce67e780223b9be8d"
  },
  {
    "url": "assets/js/44.103fed43.js",
    "revision": "acf2a6362c8e702a08cb2096df267b80"
  },
  {
    "url": "assets/js/45.61f6e639.js",
    "revision": "1d2657ec6c17bdee13badd2e33003dd2"
  },
  {
    "url": "assets/js/46.afa6f3b5.js",
    "revision": "4ac534e04e22ea278d84148a352912cd"
  },
  {
    "url": "assets/js/47.7af37d0e.js",
    "revision": "831f4f583cc4c1c39c560f4f531ed797"
  },
  {
    "url": "assets/js/48.6219557e.js",
    "revision": "4df56dbc5f1c3e667eb39c154f5d7f61"
  },
  {
    "url": "assets/js/49.15089ff4.js",
    "revision": "0df332487aa80a18cbae7e2c065cd073"
  },
  {
    "url": "assets/js/5.89a9dbec.js",
    "revision": "bdae6bcb09e9e3a9d03212e75f7095db"
  },
  {
    "url": "assets/js/50.322e2f14.js",
    "revision": "1e19f73ee24aeb981c56d78150e69dd5"
  },
  {
    "url": "assets/js/51.d89d62e0.js",
    "revision": "fcd450f3b6aa8033097b4b346b3cae8f"
  },
  {
    "url": "assets/js/52.36accf36.js",
    "revision": "0b5b51c224b7e79c66e2b3b948383a10"
  },
  {
    "url": "assets/js/53.2821e84c.js",
    "revision": "97d3b029105291bef60b4afd5ee946bf"
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
    "url": "assets/js/56.a4fc2e17.js",
    "revision": "c9988740ee63fc7f3e2616a7572ba558"
  },
  {
    "url": "assets/js/57.ac8c2b08.js",
    "revision": "b78157e5b41a1db07223e1a210645580"
  },
  {
    "url": "assets/js/58.b38ff7d5.js",
    "revision": "4d27c17527e18e543d12b1203e8ed12a"
  },
  {
    "url": "assets/js/59.ef4b090b.js",
    "revision": "a488a07a635a97668113ee7daefcf80e"
  },
  {
    "url": "assets/js/6.e13c552b.js",
    "revision": "5cc04fc1136baf97e7d7c223c46e50fc"
  },
  {
    "url": "assets/js/60.bf198692.js",
    "revision": "29dbcdec3ebd1d9049021125a2462f96"
  },
  {
    "url": "assets/js/61.ca09ea7d.js",
    "revision": "538e11f2b38e1abf009fe4ea670827b5"
  },
  {
    "url": "assets/js/62.3a75d4c5.js",
    "revision": "305852c3f46fa0f3ea7dfbb3e5291b6f"
  },
  {
    "url": "assets/js/63.6f358cab.js",
    "revision": "a258b09196c9934e4c1ed6d5c0a94fa5"
  },
  {
    "url": "assets/js/64.9a819b44.js",
    "revision": "e611c6d6ed2552931eb13e036d28e049"
  },
  {
    "url": "assets/js/65.95c776ca.js",
    "revision": "42bf39583a7cc0cde9ccfb58c0e2809c"
  },
  {
    "url": "assets/js/66.da547d54.js",
    "revision": "0d0c30faff09cf44c07c165d9dbe086c"
  },
  {
    "url": "assets/js/67.033b9988.js",
    "revision": "d901074f9b53a235833c9cdde45d8182"
  },
  {
    "url": "assets/js/68.fabe7f67.js",
    "revision": "806ef1747ee2d942e1bb6dca0556572f"
  },
  {
    "url": "assets/js/69.14cbac0a.js",
    "revision": "618e8f9bfd83d28cb044f73a88e0cfbb"
  },
  {
    "url": "assets/js/7.fc70cc0b.js",
    "revision": "bf1ab21a10b8b31eaba51d0ac1e6f6c9"
  },
  {
    "url": "assets/js/70.461fd42a.js",
    "revision": "12bbddbf749e4707561409f476a3927d"
  },
  {
    "url": "assets/js/71.2aec96f8.js",
    "revision": "8edb9dcc0d7a2c9e9f5d4b7112ea213a"
  },
  {
    "url": "assets/js/72.fd669a14.js",
    "revision": "44c57c59ced2edb5143decc8c1d392cb"
  },
  {
    "url": "assets/js/73.6e4b803b.js",
    "revision": "5050e0ce7c9cb894fb5537450218ab0f"
  },
  {
    "url": "assets/js/74.18bb8374.js",
    "revision": "4f79b98ca8ecb932d6c8a3c0c3353deb"
  },
  {
    "url": "assets/js/75.2f58fc21.js",
    "revision": "f53d61a5f721e8255e12f7ef4accdbd9"
  },
  {
    "url": "assets/js/76.00c33e03.js",
    "revision": "d8f06d3233999ff3b104fdd7df41173c"
  },
  {
    "url": "assets/js/77.0fe6858c.js",
    "revision": "d9c6a208e452f3b9ac1cf1885959a4ba"
  },
  {
    "url": "assets/js/78.380cef86.js",
    "revision": "e1dd82d09973c52ae76e4fbeba2455e8"
  },
  {
    "url": "assets/js/79.d63f5022.js",
    "revision": "3d9ea613996d64ea06d98538bcd0af59"
  },
  {
    "url": "assets/js/8.7b7c1c6c.js",
    "revision": "349d0e46538a8df7893b7546c461c6c2"
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
    "url": "assets/js/82.8a6ab210.js",
    "revision": "53c20b0d40c3786f56aaa2a7f5f226a9"
  },
  {
    "url": "assets/js/83.7b5fc0f2.js",
    "revision": "2715e3660495ceae3a493e7bff6dc166"
  },
  {
    "url": "assets/js/84.4bb7e64a.js",
    "revision": "b18afe8462a41dd5ffb66a652f5f5f48"
  },
  {
    "url": "assets/js/85.90217014.js",
    "revision": "97604fc29a1df60fcec5937922b1ff80"
  },
  {
    "url": "assets/js/86.fdffbc23.js",
    "revision": "e3707404c2ba4954e7ebbdaa02571adb"
  },
  {
    "url": "assets/js/87.c14cfff6.js",
    "revision": "bf5b4d8b56615ffdbf908d02800383f3"
  },
  {
    "url": "assets/js/88.8fbf4cd5.js",
    "revision": "dc082de05191cac46272c625684550a3"
  },
  {
    "url": "assets/js/89.7930fd0e.js",
    "revision": "1157472dff70e3773074d0e80ff075a7"
  },
  {
    "url": "assets/js/9.7437724c.js",
    "revision": "74ec474fcb6236b93bc05229dc121908"
  },
  {
    "url": "assets/js/90.f8c2252f.js",
    "revision": "a13509b6d04014af0089401d288fa58f"
  },
  {
    "url": "assets/js/91.a29ecf1c.js",
    "revision": "e40b7e394ceec63946c6d93d11e86891"
  },
  {
    "url": "assets/js/92.a85ab532.js",
    "revision": "94c54bbbae8f2deff5a1eda41dc2e6be"
  },
  {
    "url": "assets/js/93.4a901c42.js",
    "revision": "7431eb3c70781b3c55c539c348bf435a"
  },
  {
    "url": "assets/js/94.9e2e0903.js",
    "revision": "293093b73371c540a8eed89c0d555a4b"
  },
  {
    "url": "assets/js/95.a6b24721.js",
    "revision": "810921630d8575d427d696ee601bf175"
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
    "url": "assets/js/98.31457123.js",
    "revision": "ede957deab8de48c59ee97f71d6ea0f4"
  },
  {
    "url": "assets/js/99.6478e29f.js",
    "revision": "30d8d6fb24d56b58a3b11cc4413265ff"
  },
  {
    "url": "assets/js/app.395e9f26.js",
    "revision": "038d636232cdcad5196240a47568bb33"
  },
  {
    "url": "common/architecture.html",
    "revision": "cef0c5925352d574f9358e0856619acc"
  },
  {
    "url": "common/code-structure.html",
    "revision": "786b73ee2ab4ad5f32c87dcac48be2c2"
  },
  {
    "url": "common/crawl.html",
    "revision": "2db96cd83c0ea9323bfe2fa9af63fc16"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "28c3c6f44cef7f45291f191ac7174ee6"
  },
  {
    "url": "common/debugging.html",
    "revision": "d9b7023e249610fbddba21963d47610e"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "ec4d64143dd96de545693a3d1cf8b410"
  },
  {
    "url": "common/document.html",
    "revision": "097f54ceafd86bed8c2fab52990a98c5"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "f3fc724a7141555e25a46a388f2adfa9"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "860f156843bb09ca0a46c669561a7655"
  },
  {
    "url": "common/index.html",
    "revision": "e0eb8f294c1a06b5e4108fcc24ce5ace"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "8c063f6531003f8e9fa341ee4799dbb3"
  },
  {
    "url": "common/realtime.html",
    "revision": "5aa2c44f3184bf4d82e2030a6b837fed"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "0bde0cec8afe5ec7dd059192649ac449"
  },
  {
    "url": "common/refactor.html",
    "revision": "0f698a817b18da8b3fa7ec05951bfc4c"
  },
  {
    "url": "common/seo.html",
    "revision": "f7f84ce5677fbf7e43a87cd752b00079"
  },
  {
    "url": "common/use-case.html",
    "revision": "dd4084434ca42bde7a3101a243e8c4d4"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "d1a23cd5615ef2d02ee1bb67326e9854"
  },
  {
    "url": "css/tricks.html",
    "revision": "09f94ab81c61f6d3e87c24b517203ea5"
  },
  {
    "url": "db/architect.html",
    "revision": "0027509230f73c5f069ce0f0586cd5fc"
  },
  {
    "url": "db/cassandra.html",
    "revision": "b32ec60dc930c87fe3eb06189ec97dfd"
  },
  {
    "url": "db/couchdb.html",
    "revision": "c81995d94ff15b8ad67dbaa994b5ec5a"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "b939055bde3cc0a14e0ae246df603768"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "70b35171fca40509f6b3492776327f34"
  },
  {
    "url": "db/nosql.html",
    "revision": "0bf85b2b4956266db5c497d8bdc5e9b6"
  },
  {
    "url": "db/optimize.html",
    "revision": "060e75d8ebf94307c068712bd44fb2a8"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "1c63478daf76cef77675b7a28a607dca"
  },
  {
    "url": "db/postgre.html",
    "revision": "ecf75c79203b53ef9bcd2484f86a7a4a"
  },
  {
    "url": "db/redis.html",
    "revision": "acf0a3a8f5ef59b8d5376ba454e523ec"
  },
  {
    "url": "db/use-cases.html",
    "revision": "1fb07ac5121f5fde4ce84fd71001fb9a"
  },
  {
    "url": "go/clean.html",
    "revision": "71ff35e987ea2534c91b3f984d094bc7"
  },
  {
    "url": "go/index.html",
    "revision": "1a0c4cde7029eae463c20a470ce0699d"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "679c34cb763b4b357f02c06c38557b69"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "0b277f30cb0ba2ea3511e0f5305ea9f5"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "f6a502bdfce911f4e75f5334971c9046"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "d58b7dce587a2cd2464dfa61912a9a0b"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "34a0654ecfdd2793f6ddfaa6f7b81621"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "fa3d322864225b5a8b6415725d404cff"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "9d47da5812d8656dac6dc9fd4e066029"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "bba7430eb4caf34f35b2821135d7e89a"
  },
  {
    "url": "index.html",
    "revision": "a65290c34ed4db6303feea804ac8c3f9"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "13be65c3aacf9fa23d757480cb6ddca4"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "a6f08e792eb577cccca82137745c47d9"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "298c351b24920a7496f09a6292639219"
  },
  {
    "url": "javascript/closure.html",
    "revision": "1a0c2b2aa1c093a5f61b3aaa07a891e9"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "e0b2af5bab02b42b9ae8178cc893f10a"
  },
  {
    "url": "javascript/functor.html",
    "revision": "46a0a981c0c2b9904a3b5e95eabe53c0"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "19538b7be15e8c4e55e450a1ed9190a0"
  },
  {
    "url": "javascript/react.html",
    "revision": "974e502b99287a81654dc8d32bdfddf6"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "e1b06e60a3c66c62031b8fd53be989f9"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "87d78b5abe73db9d0159a8fed5de54d9"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "1acc8530c6f883dac9a8f442df30402b"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "dad8d31948aa3e1391c19e05af8cb271"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "7c5681afac1a5dfff318dc802ccf0a5c"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "43bc964ee1e4e385a0e3ef6a6175e3fe"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "a59a26eb166913f805838fbb636c5038"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "a6cc933b67caa5d26ff4fe9b2f8259cf"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "9106db170de8ffb9afc74cd2582f2aa9"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "8e67dc46cc987f5d4643146838e11fd1"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "1609cc70d2bb53c0618d956de79d5053"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "afa2ef59ab005d79178b3e671c0f9d46"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "05a3af87c6d6b43deb3f372951fccb2e"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "67f14635eb3c9c15b0915d558557d0a1"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "c59dbb182afef57d02c90ce331a55d48"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "28ca98641d80aa2500420a695246083c"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "b0a2c847e64d938d8194c54edb256563"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "c06c46d6f8be3e5460e8f0017fbac53d"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "317ede85635909851fce56861188f27d"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "40ee91721beb0fd441aab10427a97cec"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "d0ad40412623521f23388558144be334"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "ba9b53bdfe1f9ba2b60b25b26f8fa65a"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "51456aab324640c0e8318677834897c6"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "4c2a08b76419d5b342e84ad63b0abbf8"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "0e3f9bc54b1361ddb1370cc0b2f03155"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "292cf91a12af57019fd528fdc7cc8319"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "d53f64032dce19614b2150bf7acec69d"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "8a58ed72615c5ba90d7ba801f5809f2b"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "6155b80b0b2b7d4c78ca5d4773f75b60"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "bee9f33c8b79cf876355715dd2a99e23"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "d82570c11a952884f6f80913f36eefb6"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "dc45a5c1fa61e7d737dd5b5429732bcf"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "d280927335ec7924f45b302333f3b6c7"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "1fec7d80d7c4efe902da5304fa275aa7"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "0b1b86c4c0f8972c19512d8b6283db86"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "e4af34e134b873284cf9730c889cfe48"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "fc81ca71200479b56225c15764f2fc37"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "25187e506971521e45af6e1310dca7de"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "5af07567bda20bcab96aebaa1ebb05a6"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "9a0d26a43f14229e75406fd1cf51bb1c"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "f58c805b8aed586653ad56d1a57c9a09"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "fa2088802019b56383fc1912ad1a7795"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "7f68880aaf02133bfbcf573fb733ad86"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "c9a9191aaf97e4a053cbc3f14c8414d0"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "b34ac744b9c12cad502b06dcfd3b8456"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "77db55614770bc3adfae5e36516fbf80"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "0129da94449559cb7efc327ee89d13ce"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "13f2b5311a7db6c79f749dc9bcbeb397"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "3da29370e1bbb0fd57251c957addf4b9"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "84e46075fb4758c6d5d1981ea43b922c"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "b0b071ecaa42f36df2478dbff0dfe22e"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "bf0d06b0caa866cfad5f1b4473426862"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "d53b8fbb3d584ab63d480fc99d07146a"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "6593e2ecf54481daa47d67041d5d5b24"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "54f46cc5d1c08dae6e91ea6b7aa09a7b"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "68ce68477b4b6ab0c716ec3d9d55f5aa"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "147e232a9b1370d0cf25b4ce2f80f452"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "a8d21011218295260ec9a869655ecc7b"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "8331cc43ee1837c3d61cd7e0c255bc5e"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "464b9277e4302327b1ee6d6e42e197b5"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "02ee06ab30857e38ab4d5a59e05d1c15"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "85be46fc8db061cbf00ec68357144833"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "73ffc5ebebf7485828ec1814aabda4d7"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "c510c9a3c33d423ff9327687fb39ac8d"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "c34ee5d3bb907136c5edc53dcc8a4a5a"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "84a7df52976943d88eee5cbbb789ba37"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "9a2cc1940be815944450383365e0a629"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "3930c56aeb92a2cf00d2f4f3baef88eb"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "4caa46ee3e8b855f4cda303bf33a2e71"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "9e0459fed0a2038c99f0374d04c495aa"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "70ec826a85ba427da7302f9132e778e8"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "d6c4e8a1d9fb8f4714229c7faba448ab"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "3ba483c8094867d2056ac862e6610f2a"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "f828cdb8d0a4353b2ac9f8e6ca5ac452"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "e93314df1bcd5869583a03100c754c2f"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "8cca98215c2475c60b02caf6443b5f38"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "ebe968842b51b1e71193fd3bf5785163"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "b932edc6b832794c14f3513c6b17bb1e"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "66529090f42412071343a1110053827b"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "8f64b628fbd5a8a8119a8b928849abaa"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "2c3dae01df8a6ea4c19519b03f5f77d2"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "86e15bc19e63cbb0007e15b60405ec60"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "ed858c04b462b9fb65d6fcded86769ff"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "22578049a9cd41b4ae236c6c653b4c1f"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "4af7cb26cafb5e0898c6b5c4e4c01d51"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "60d9d705d68f3e665ba97c25e34abbec"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "ddf0ec23bdcd001de2f1016af2a3586c"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "47cbe1e6c1cb5686689ef21b24ab201e"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "da06618d7b52f3e1a7b8ea6fc919e9fd"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "87d925c8e37e015a2c638cf699756c23"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "0f09f1a51a7752925423486a9d10ae93"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "c1ab1d32bb7d695bca2279c9845c295f"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "e71370b941548b901413b52ddae11e68"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "88ba382d1e7780ebcf2726a78e0d1943"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "e5e3edefaed026a3ff0767b33d9c1c6a"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "4c58588e147ab38a99d25de5ffe9d077"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "3a4b73039dbb5666a4827fc3caa0fa4d"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "e56eebb55b3dc7237461e4194e0382c3"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "74b9b91b727b7d47582b8901e879a527"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "3a23e2828025621d8b695070fd994cc0"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "0606ce2e4b8f10fe59a63c254ceea5af"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "682c182ceaed747633ef3c54d1cfdf3a"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "70da7e6d5bb6c106086753338e41b727"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "969a7630baa402ff94bdc55a15eec095"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "46ab444d15baaf0ba48b8ad0e2176bc2"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "bd79e3be6db741cc8cd452c3ade82f26"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "2b282b65b48fc616fc16502a9de49ba3"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "1ec571dbe9f9d004e585c60ff8426beb"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "12fdfdb9211c24db4fea7e9f018ee803"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "9c644ce179a0df5e499dfce9711f9ed6"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "72a7b2bdb01ee75e080d35cf2a7db725"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "b755f110fae14c2f0b5dcb807f11e049"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "d8e9826284131e3272559ec2a5549509"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "b9c3d04f16b3336339d3f3f5dd2d0931"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "5e2c74aac7d52e8ed747d42d493655d5"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "b4f1f4f43751beda123a636a3a392283"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "a43a9988b4b59dcb0d836e9b623961a2"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "2247cb1b2a192b6e001908fd8af14f68"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "3d3171d2870300285f7183e2e540e360"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "e35f00e11b3312cb8f7ceee860c0f84d"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "c79764c92ce1535be938b347da16d9df"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "3356ad1f38e973fe9578013314fa3c29"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "031bc3834efa083ac6c3cd2595f89b9a"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "a19ec0a5e3dd53a3f80087ba8476da1a"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "b11232d3ea4b8b2ad3061a75ced92b72"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "f84ed433d4ca94acdc55e770fe3c24aa"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "de02feb01a2d8deac687dc67ff4749ac"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "0c7eeb57d94e896622e29544078c227e"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "2a8328de1b6dce53259e9f4de2e5d310"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "8c9f4d4021b6924bd30c938cafccf3b0"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "891c029bbc191eca845bf18b944bebe0"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "261556b56439184a2ee842fe23376ea3"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "ad1ab0f60c18922a6855972635951b9a"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "6339eeccb87778517749b15bbe244ecb"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "91faba4e1a2615c93c35342dfea74ec0"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "1be02d9119a6328c67f70b7bbc129a9c"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "99f0d254d08b053818a7b16022873fb5"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "4b5140d2718b486fc5d97158e35370d9"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "cb4fde990c8117bfbdee101ca288192b"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "9081b24df53abeeefc11af55429286f2"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "c4abc3327cf7a6f29809900e02a723a1"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "498b1f7ec9500cd2294b92c6deb194c6"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "84f6a436e5bd0e30f209e29e34d336dc"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "314631dec580327a619a4102fc2503a9"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "f7453894e651450b737a2844d7b9bae6"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "5d383549b536756eb1427796c008f67c"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "cc1648433ac4ff0e646203658906852e"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "286d54b092d3b27d12ec58fa2e7798f9"
  },
  {
    "url": "kungfu/js/vue_react.html",
    "revision": "c89b59d6a55aaae2101f3e605b5ffbfe"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "cff3268ca929597b707d647b2fc85c52"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "e0811cf70bea88d64ed4d47bc88a8a99"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "aa36338dcd572c2158e852920440d056"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "125363dde98c3307ffeaa8746b9ac7df"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "990f2335a2d36114b520268488f1d6e7"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "5c785cc65d8460120f8fe5a2e7fe0e4a"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "cb3c08bc45c1335080518cb792aa68f7"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "e21c97f31fa18b30ba7e927e5f477b1f"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "ae6b6a0212abe9e5f13c454ac7568d18"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "a77d7278e4ddb0b7a7b778be84d1346a"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "5a99085b222db802aa42f93858654244"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "eb10c44539d61a4d3a20685166eeff8f"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "7fe955c9e298c3e8b889c8319093784d"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "90ca96dfd837ee235574c6484a824bea"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "983a9d6cfa16267d64ba3d1350f60357"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "69d336fa52e0cfb83356043e77082b30"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "4973b01daba39d0c7be2d6373ec20bc7"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "f59fb911863d5cd17907a5361cd472f7"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "e2e0a76d51d3b9b5eb00fdc6209cf6a6"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "3f4737030876323cddecd8cecb3e69f7"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "412936fdfb03f2ba97e6021851ed3a52"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "bbc7721913bc085cb656527cd20924b9"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "8157b3b72bd6192a0e536e7ba61fefad"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "7a7d6d1f988f4929efe17dbb1363812b"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "2bfdbf750fb7a31dc046dcf2d7640f84"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "856bd53f0ab9d66d193b4ffcf9c0eeeb"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "f462233a2359965de450246a6097f283"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "e3643f4c53b41d139b79e2a74dafcc64"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "dedb1ad38da1b37fc4353d8008b13121"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "7fb2579e86c35e3f6896073e35b6b30b"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "7ce7d225f9a6f0455990ec5d51c75e14"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "9ee945a40520d65c70562d2cf8aea616"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "303173505d5cd81cc6686eeb6df3b858"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "f6e4601455677c731ef0c41c010bce4a"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "2337af5eeec8043ddd79f5f85b70fe7b"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "a138b6d561ee403739d5ba50023d1090"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "4edad1b66f25fd146537cbdb9516f276"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "47508614863aeb6210be8492e15a8223"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "42ac6e284ee183927ab264f08c3d1979"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "172c56540098349c459a7d3fecb2c5ce"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "3037610a39dd679f8ec9b811ebbace9b"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "0660ab2e4c083462b25a69918c4bb676"
  },
  {
    "url": "kungfu/template.html",
    "revision": "5f01204f5e66d898553cffaa7f071bb2"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "e2866b5a0dae46da02aa06ae49177b2c"
  },
  {
    "url": "node/env.html",
    "revision": "b06731bc8802a61f45d36a3c49302a0e"
  },
  {
    "url": "node/index.html",
    "revision": "e0290400cadd924368e33c0a6bd22d6e"
  },
  {
    "url": "node/n.html",
    "revision": "fbff574c3c78039ed83fbb8a16eebbd8"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "bb4a8658325a7f851ea5254c2bdfc120"
  },
  {
    "url": "node/npm.html",
    "revision": "ed5ae7af78e8f61c9bf624cb123c0f1e"
  },
  {
    "url": "node/sequelize.html",
    "revision": "582d921e32946157c53e68ca49a4d1c6"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "c03e7e1fb35fe23c90eec8ebad4446f7"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "e7ff5e4c9f8ffe041179a46e38719d1b"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "ef735a8d1b09b2b2ed954db8b0027b92"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "c12be336a160083f50529d1a9230ab11"
  },
  {
    "url": "php/clean/di.html",
    "revision": "c9f1d08f6ac6d64002a8f3e0d3595dea"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "d4e8768663ec2c2cbc967ea40bbf524f"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "2db7ed527f8a9458efb3eb6bb65976cb"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "f11d7f8515d950d6ae77510f3e9af437"
  },
  {
    "url": "php/clean/index.html",
    "revision": "f58686b8a2578ba54d163589053592a5"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "170fe53bd8c0e89b04295b2315cb2f6d"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "4196c9b781b088b11eddbca016cc60f3"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "06d2d8787338d90ca97a23260df7490d"
  },
  {
    "url": "php/composer.html",
    "revision": "54e80a338809abd481d5d8b40162a67f"
  },
  {
    "url": "php/crunz.html",
    "revision": "fe219ec4b5dbc4608e37b49086883e22"
  },
  {
    "url": "php/laravel.html",
    "revision": "6287a4df29b372792f2a8b37e5cef021"
  },
  {
    "url": "php/magic.html",
    "revision": "c90fe66d8680406d903212826a2b2880"
  },
  {
    "url": "php/notes.html",
    "revision": "eed5e1b3f58c99eabc705e2047beaf28"
  },
  {
    "url": "php/oop.html",
    "revision": "1ab130ed28aba941001120f2aed4fe05"
  },
  {
    "url": "php/php7.html",
    "revision": "16195dcc7dca0e00beb409c607657be4"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "48d10f29213d774ab676145ca5fbd72a"
  },
  {
    "url": "php/reflection.html",
    "revision": "a7413d48b46709410bc84d20e8a18fe0"
  },
  {
    "url": "php/tricks.html",
    "revision": "f8b9166e8e4a637864d479f60c33f955"
  },
  {
    "url": "php/wordpress.html",
    "revision": "df2a510259f8b3887363c3f54fccffbd"
  },
  {
    "url": "quotes.html",
    "revision": "413cf5c42e4759eb7f81c148c1003c48"
  },
  {
    "url": "refactor/notes.html",
    "revision": "5690d2524066bd4e7e4848f746c1645a"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "eead0e89ff3c497349b7c329718967af"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "ade955852a9ebf6ed9729ba9f505db3f"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "cca908686306ede3b3213dab16c22869"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "c49fbca50893d55da98337a4a5c48284"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "00b51746832d47c7444a93bb519951e8"
  },
  {
    "url": "snippets/jest.html",
    "revision": "d7f221f748d9809ccd9a9fb1413d37fe"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "502109d81bd247d0a3419e81100ccc32"
  },
  {
    "url": "snippets/regex.html",
    "revision": "8e22b4744ed5a7be99eccda31eb4df8a"
  },
  {
    "url": "terms/12factors.html",
    "revision": "5dc9d360d4b864ca9a8eb6718e551163"
  },
  {
    "url": "terms/architecture.html",
    "revision": "f978d9e0966f6bc860e273bc950e2923"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "3da835aebf39ddb21bab81449b2db5fa"
  },
  {
    "url": "terms/ddd.html",
    "revision": "5cef8a5486be70f16adac56f104a2733"
  },
  {
    "url": "terms/di.html",
    "revision": "8669e93cba7b417d153a34016b03e8b6"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "8998d77f12151b461ea471e7fbc7ec58"
  },
  {
    "url": "terms/javascript.html",
    "revision": "733f1ceb763902c3108be37e769b25cb"
  },
  {
    "url": "terms/oop.html",
    "revision": "0bab60a268800c5689c8b9495d546b07"
  },
  {
    "url": "terms/patterns.html",
    "revision": "483024930ea55f9bdc02cb77ea2f6a59"
  },
  {
    "url": "terms/principles.html",
    "revision": "e02879da83346029751190ce231103a4"
  },
  {
    "url": "terms/rules.html",
    "revision": "c043f651d411f3a62855bc315f951123"
  },
  {
    "url": "terms/testing.html",
    "revision": "25e588e15b4a15161a2745c1f0fe8386"
  },
  {
    "url": "tools/chrome.html",
    "revision": "3edef56e038ceec6390d232e6509432f"
  },
  {
    "url": "tools/docker.html",
    "revision": "12e7c2449bc4982c3ccb604333981533"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "f75e798b60738cefd70223435021c5d9"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "880bf3a93bbf784316a747b9cf6ed9b3"
  },
  {
    "url": "tools/graphql.html",
    "revision": "bc6a61c5da30b18b6cae14bd4c9f5cfd"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "a527464f407c5d03ca2e26650a20aec4"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "4a156601f0690c4053b458183c6b0460"
  },
  {
    "url": "tools/redis.html",
    "revision": "de21ac62b4773c7f7bfb0a1af60645aa"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "d08540ad8e48fd9f88b89a478cf76efb"
  },
  {
    "url": "tools/vscode.html",
    "revision": "3cdfa20393d3248b4eba6a50a9088de0"
  },
  {
    "url": "tools/webpack.html",
    "revision": "7b87cb90f02ae68ae3348f3c9ff70b7d"
  },
  {
    "url": "tricks/compare.html",
    "revision": "8608e29ecca0afdf2bcd8374cd8cd1c0"
  },
  {
    "url": "tricks/git.html",
    "revision": "8b56741542bd68f32a6acad3b538e697"
  },
  {
    "url": "tricks/linux.html",
    "revision": "1d64e895397c91570e357b2260a2f3c3"
  },
  {
    "url": "tricks/mac.html",
    "revision": "8cea68a851377f31d3da498888912d39"
  },
  {
    "url": "tricks/misc.html",
    "revision": "ab580d6d4a4b3b904551ec3e5c94e116"
  },
  {
    "url": "tricks/setup.html",
    "revision": "1fa6f052750baa76aa9c770061276466"
  },
  {
    "url": "vue/communication.html",
    "revision": "b492f17b1f178c446420c46bc64e1825"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "19a9f1a097149b71e9cb8a966d34c05a"
  },
  {
    "url": "vue/events.html",
    "revision": "07fdb3cd7111abbaa2bad837cfe88b3e"
  },
  {
    "url": "vue/references.html",
    "revision": "fa93cf2de295f5f1e68cdba94a7ee618"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "b38b046da4f7553788f4efb38ea52602"
  },
  {
    "url": "vue/test.html",
    "revision": "e95c15e533d65cf115cc81c8951d39d0"
  },
  {
    "url": "vue/tricks.html",
    "revision": "0b12d30f096e10e4829de6e7ad565a02"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "0218a9843e1dc7e88c7562930bbd9b50"
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
