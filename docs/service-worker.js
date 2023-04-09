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
    "revision": "93a3a66ad08e61937e3b0cbaa3728891"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "61b78529479b763a6494cbed9107216f"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "bf399df98e9172dc45100a71ff560f4f"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "fba3bc3e8d22be1024c9de87fa11e7e5"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "96a744ede30648f1d412ec7ad965b5a6"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "b6dee442b5e171c6ec81b292202de97b"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "78879ba7274c683460a669efd847e964"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "3295e999d61ee0eaeaff742350d14974"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "6271afde53794261fa5035ce516248f7"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "0e037ccc31b3679c16a7fa97f1525208"
  },
  {
    "url": "algorithm/string.html",
    "revision": "f150b770e64a06190485d62498cd547c"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "73bf91c59130bf5d67a5993f50269644"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "754ece7d16b132aafad9122e6a73678e"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "73a2db67633c40dfaad97570a9eb3781"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "cc7eb2a93c7d09fa222658b25563fe0f"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "4b47c4b6cf976aa3cfb0091f89525de6"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "38bd21e4e1ced86b9854cc5f92e7e63b"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "4454a387e783704d425d4f47db9144f6"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "87e8d883843bdc432e79ed582452c2e5"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "2a5045f3aea54693b66db011f041af30"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "60bfaa3a8035936ac4ab3c17c2509919"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "189014acb19424024a2749f3a53a6a52"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "f97dca52b068398cabca21d30b8ccc88"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "7ec62d671b21012e8e7406d1d9f34480"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "f66f3d8fefb6b3dffe56548a0868e851"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "daa642303dfde566ff2d626662d0f7e5"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "a2df49ca269b31f451e682a4d111fb8a"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "d651031b9c9c14563873b6492109fea8"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "86487a7b04e70a692237ed03e1002eb7"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "d8c3aafc9b2a7f36cd584030922b2b10"
  },
  {
    "url": "architect/authenication.html",
    "revision": "4a6a951842a371db9d83018865149fd2"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "2763cb453fe11c20ddc3e923b197949d"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "41a2c03b55561b12cba2975f6d0cd7c5"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "9352216a4001de8128d7a1fdc818e60a"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "4cfc77e836bd2ec0b07fa075a4473cb8"
  },
  {
    "url": "architect/ebi.html",
    "revision": "8ad8b2a69d888c53df2675498a98a727"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "65d9a0643d6facec822c5a3a4365d1d5"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "ae3bf1546fa11b0123bfe37e3a310661"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "53b3809e5fd97ce4e27418dd1234e5ec"
  },
  {
    "url": "architect/index.html",
    "revision": "0423e49300678642a2b00283e38cc844"
  },
  {
    "url": "architect/messaging.html",
    "revision": "751019c7a343e4e07d5ea8ed132f721e"
  },
  {
    "url": "architect/microservices.html",
    "revision": "dede557a7b78710803a6c9f07d6c0e4a"
  },
  {
    "url": "architect/mutex.html",
    "revision": "7a461731808936bd79605b87195f55f0"
  },
  {
    "url": "architect/notes.html",
    "revision": "db9ba4f9f859dc5dcf478d78174e07fd"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "cafa5cdc3ac573c54db626bc469a6eae"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "53fcfd10c55a3000ae1973b794138215"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "a9102731ac51aeede00b218c9a231eec"
  },
  {
    "url": "architect/refs.html",
    "revision": "285582d878c6b8ba791c9eed7fec5fbb"
  },
  {
    "url": "architect/restful.html",
    "revision": "747b430b89bea2a3e79c7763eeda725d"
  },
  {
    "url": "architect/soa.html",
    "revision": "636d7e7e421ea2103cb024acb0447a8c"
  },
  {
    "url": "architect/spa.html",
    "revision": "d5227a374d113d35eae709ea15ffa9ef"
  },
  {
    "url": "architect/terms.html",
    "revision": "8181573090cd984a10e1da23a3574b87"
  },
  {
    "url": "architect/webservice.html",
    "revision": "3af7d5d9f6e09a3ddbcc2e230e4f2a40"
  },
  {
    "url": "assets/css/0.styles.5d974432.css",
    "revision": "13ed0a0184d34fa2ab527f322bdac698"
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
    "url": "assets/js/10.6417fa48.js",
    "revision": "9df47d77f658cfb785293ceadea5963e"
  },
  {
    "url": "assets/js/100.058888bc.js",
    "revision": "1c2a46d6c3e90ed7105488a9ea9c7d52"
  },
  {
    "url": "assets/js/101.425cbb73.js",
    "revision": "32392b18224ed3caaa6d57563c1f345b"
  },
  {
    "url": "assets/js/102.953d6ccc.js",
    "revision": "d75c8956d085e3e8e9168c36e4f7dc32"
  },
  {
    "url": "assets/js/103.cac7b0ac.js",
    "revision": "d1503f41fb1addcdf2a30c57cdbd43eb"
  },
  {
    "url": "assets/js/104.3f0205d1.js",
    "revision": "bf1f4ee29fb8ab3fc17ad13e221d8123"
  },
  {
    "url": "assets/js/105.d2037125.js",
    "revision": "db5383eda80c87dfe99bdcf1548ca6b4"
  },
  {
    "url": "assets/js/106.28a9a5b4.js",
    "revision": "96463a77fcbefa41cb20516f489c46cc"
  },
  {
    "url": "assets/js/107.4de2fdf5.js",
    "revision": "6900112f8eda3844ef027ec564d29ac7"
  },
  {
    "url": "assets/js/108.e2b7915c.js",
    "revision": "e200de7042fead2888149b8bdf8476a3"
  },
  {
    "url": "assets/js/109.b23c477e.js",
    "revision": "f3e1f583ce360be8601545255dcaacfd"
  },
  {
    "url": "assets/js/11.a98676f3.js",
    "revision": "a274254cdbf5916fc0e70c7b93173ffd"
  },
  {
    "url": "assets/js/110.9e8cae2f.js",
    "revision": "fa050aaabb86d779d6b4cf9ccbd69898"
  },
  {
    "url": "assets/js/111.9774c93c.js",
    "revision": "b7ef6e494829646cd5a06c63872f3fe9"
  },
  {
    "url": "assets/js/112.f3dfda1b.js",
    "revision": "97f3462b78515164467dd61f16c83506"
  },
  {
    "url": "assets/js/113.5443d17f.js",
    "revision": "af63b818eb25a7128386eadd2ab9ce94"
  },
  {
    "url": "assets/js/114.8e59c4d5.js",
    "revision": "f16be30ec70b4e34d1e96a42b70893d9"
  },
  {
    "url": "assets/js/115.4b898c73.js",
    "revision": "374bc9c4576ae9c189ccc7813c7393e9"
  },
  {
    "url": "assets/js/116.ee122dee.js",
    "revision": "af54bebd65e7258d04a87e1e02293606"
  },
  {
    "url": "assets/js/117.3b1e2583.js",
    "revision": "17093725f32fc1c2c02a026ac95fc25b"
  },
  {
    "url": "assets/js/118.b6368c78.js",
    "revision": "4215ff17c53c23e7bf315a3f48d052c0"
  },
  {
    "url": "assets/js/119.9e1d9fba.js",
    "revision": "6e0ddea2493ed94e581da62d764172c8"
  },
  {
    "url": "assets/js/12.2810af3f.js",
    "revision": "a553e9978d81e232fe6f32c5e0e52f43"
  },
  {
    "url": "assets/js/120.52ea4a8d.js",
    "revision": "056ea5cc5b2b4e5d8b402ee3e6832980"
  },
  {
    "url": "assets/js/121.0d65e3cf.js",
    "revision": "5e5ce02c4d9e925f53f2ccaa71758661"
  },
  {
    "url": "assets/js/122.ee1441b9.js",
    "revision": "a24cd6cc55013d860e1af4f966529f2b"
  },
  {
    "url": "assets/js/123.214ec549.js",
    "revision": "999e2ef74dfe050bdc2101af4cd07bdc"
  },
  {
    "url": "assets/js/124.5f5baa01.js",
    "revision": "3452492aa81ed8cfa3a30d1b6c65c69b"
  },
  {
    "url": "assets/js/125.e0a31530.js",
    "revision": "876467e2fa6cc8e1433761ccf132be47"
  },
  {
    "url": "assets/js/126.e4fe6937.js",
    "revision": "522043fde0f2d30d52df4ce98e244436"
  },
  {
    "url": "assets/js/127.77d28e35.js",
    "revision": "77953c5955f202e409930287eee81e39"
  },
  {
    "url": "assets/js/128.da4b51e0.js",
    "revision": "9a84c2df04491f0ec446c5f972f40a17"
  },
  {
    "url": "assets/js/129.24105417.js",
    "revision": "61a3da4ae643882f68743af95feac6f3"
  },
  {
    "url": "assets/js/13.44edfa3a.js",
    "revision": "3cb85dd3f98ed7c927afac3f8837d5c7"
  },
  {
    "url": "assets/js/130.7607542f.js",
    "revision": "b1cff5b151c5f5ac8e5f999ebd054d25"
  },
  {
    "url": "assets/js/131.9cbcd1f1.js",
    "revision": "4ce5a0a2dc6fdf493e285bcc6a33ed83"
  },
  {
    "url": "assets/js/132.3c02e5d2.js",
    "revision": "d5e4695119c59ba0fc2a37d91bbd4df4"
  },
  {
    "url": "assets/js/133.7201531a.js",
    "revision": "59a3841c6f67aebf095750c6c9ee1090"
  },
  {
    "url": "assets/js/134.c6d20d7f.js",
    "revision": "8c24a7fc1b9c375cc089252be0a349a0"
  },
  {
    "url": "assets/js/135.becfe799.js",
    "revision": "aeab2c64d5689790023999555f2ea968"
  },
  {
    "url": "assets/js/136.2fd6c5f8.js",
    "revision": "d1f4d66a791d66edc266afea55031a3c"
  },
  {
    "url": "assets/js/137.53d7478d.js",
    "revision": "3156f0b40ab7e19c7c0fa21cd4edeeb6"
  },
  {
    "url": "assets/js/138.a4a17c55.js",
    "revision": "a83c81209f0be52ae2e328fc543ae197"
  },
  {
    "url": "assets/js/139.2ad516d4.js",
    "revision": "20593d10113d40051ca929c860d7507d"
  },
  {
    "url": "assets/js/14.d224d9d1.js",
    "revision": "737f72d89ac67408e72423898e4ce875"
  },
  {
    "url": "assets/js/140.bf6c088f.js",
    "revision": "d6d6413269f89b1d4281b6d6bbecd11e"
  },
  {
    "url": "assets/js/141.06127198.js",
    "revision": "d447289883eb8c863d10667088fcc984"
  },
  {
    "url": "assets/js/142.64f4f4e9.js",
    "revision": "7eaa4a9c02f9741d65ce8ab33ff91d65"
  },
  {
    "url": "assets/js/143.ce00b1b6.js",
    "revision": "dc4ff8ef76fdd00d6e8e7737277af08d"
  },
  {
    "url": "assets/js/144.d89ce116.js",
    "revision": "9acfa3d0703bc5ee1f5a2351afdf650a"
  },
  {
    "url": "assets/js/145.3062f709.js",
    "revision": "a2fe222ef1e1295523c4a19fc424a754"
  },
  {
    "url": "assets/js/146.93d2f462.js",
    "revision": "c2e2d4b136581b1155d2b8f4c48ede49"
  },
  {
    "url": "assets/js/147.0583f6d7.js",
    "revision": "f04c3b8cd927bc41f34f5a859a5e4605"
  },
  {
    "url": "assets/js/148.7b571e2e.js",
    "revision": "38063d57142cb8eb5f32932dba0b714a"
  },
  {
    "url": "assets/js/149.f0bcaeac.js",
    "revision": "de9fb83db4ebe2f5015e98851c1805ab"
  },
  {
    "url": "assets/js/15.4518f0ba.js",
    "revision": "9a4074ce586964714cf1e72d37a9aafc"
  },
  {
    "url": "assets/js/150.426a49f8.js",
    "revision": "c9f3f4489a6956ebe5fa479b2171dd79"
  },
  {
    "url": "assets/js/151.f0ced7a5.js",
    "revision": "80815fc230c79197b81e5930b61d200a"
  },
  {
    "url": "assets/js/152.ed60ed92.js",
    "revision": "95d5d7051c4db47a832cd86c97a83a1f"
  },
  {
    "url": "assets/js/153.1523a7d8.js",
    "revision": "8d8274045763a2c2d618266af3a2fb54"
  },
  {
    "url": "assets/js/154.df1e23fc.js",
    "revision": "dae39ac439e39fe146bbbf68e87009d9"
  },
  {
    "url": "assets/js/155.8d61c3be.js",
    "revision": "d161aae8540a28d5611ce700a172ba4f"
  },
  {
    "url": "assets/js/156.091b06d9.js",
    "revision": "e5d323046400088160a8c75f36c27cca"
  },
  {
    "url": "assets/js/157.48c8247a.js",
    "revision": "6f4cb3c80e9c495ff8a34202a4bce1a2"
  },
  {
    "url": "assets/js/158.ebc2af2b.js",
    "revision": "15a267547a64ef3d624d9cdee8b29197"
  },
  {
    "url": "assets/js/159.f23e850d.js",
    "revision": "dba19bd5506bee70d6e7d226ad5197af"
  },
  {
    "url": "assets/js/16.b693730c.js",
    "revision": "b6974ee52a09103e40c9111d8251dfc6"
  },
  {
    "url": "assets/js/160.03c8cb31.js",
    "revision": "a9594e9acbcafa439dc79737f4f78f69"
  },
  {
    "url": "assets/js/161.da8722f6.js",
    "revision": "33ed09ee36ee0914d95bb684a62835b6"
  },
  {
    "url": "assets/js/162.8feff1da.js",
    "revision": "090582fecd1989bb951398c2b25b23f1"
  },
  {
    "url": "assets/js/163.750de7b2.js",
    "revision": "7a98900199e023c2112e391c4f93fe00"
  },
  {
    "url": "assets/js/164.552c5582.js",
    "revision": "c6d543a50f3db50ef43fb45947b2a090"
  },
  {
    "url": "assets/js/165.9ae779aa.js",
    "revision": "74e9e31077c97e235514a57588d5f1e8"
  },
  {
    "url": "assets/js/166.60b658ca.js",
    "revision": "8f0b9e97a0273617e0ca95347c495ee4"
  },
  {
    "url": "assets/js/167.3766cf8f.js",
    "revision": "b4f78f3789f88245a0217b8790dfc989"
  },
  {
    "url": "assets/js/168.5e23de34.js",
    "revision": "e2b1b05e2e0f6510f0d8750971a44947"
  },
  {
    "url": "assets/js/169.03687e7c.js",
    "revision": "69fa3e7903bdb3f0c1f5390657e96b57"
  },
  {
    "url": "assets/js/17.e0fc8c02.js",
    "revision": "88f9d51d947540f8f0e6564482454954"
  },
  {
    "url": "assets/js/170.3f2c8105.js",
    "revision": "51ed862b64f00883bf09febb6413b91d"
  },
  {
    "url": "assets/js/171.5f5a0062.js",
    "revision": "ae7f8327370d33696368fa19c41a91fb"
  },
  {
    "url": "assets/js/172.4b4d05af.js",
    "revision": "6d6deb65f3942171457e66727981b614"
  },
  {
    "url": "assets/js/173.999ab214.js",
    "revision": "15c1604e80948d5629649dda2ef81a38"
  },
  {
    "url": "assets/js/174.f2ca477f.js",
    "revision": "dbc025a1d2042b91a4258f0329e746dd"
  },
  {
    "url": "assets/js/175.c8809e14.js",
    "revision": "5e78408311a9be3589f5f808b6f2247f"
  },
  {
    "url": "assets/js/176.1ff6088c.js",
    "revision": "ab995ad0fcff6877e6b429628ac82b5c"
  },
  {
    "url": "assets/js/177.f9ea7d3c.js",
    "revision": "816edaea512c0a8a0e4626f7d9d5ff46"
  },
  {
    "url": "assets/js/178.e5a60160.js",
    "revision": "0539ee61e088257a386a978bdb9d16b7"
  },
  {
    "url": "assets/js/179.b38d7a0d.js",
    "revision": "82636050845c0add18ea0a7d755a202f"
  },
  {
    "url": "assets/js/18.95b39c29.js",
    "revision": "a1a523349c67106ca56441b37f204991"
  },
  {
    "url": "assets/js/180.4bbb5a0e.js",
    "revision": "6cd55a9ff8ac25dcf9faa59ae15f8cc2"
  },
  {
    "url": "assets/js/181.20ee8a2c.js",
    "revision": "e6863b0b81b465d858ddc4a79616aaad"
  },
  {
    "url": "assets/js/182.62fd9cda.js",
    "revision": "28239b2bfff9a4a9bbcd37dd0f8b438c"
  },
  {
    "url": "assets/js/183.cb20d365.js",
    "revision": "40f014f2ff22b05f628f0e0eef75ebcf"
  },
  {
    "url": "assets/js/184.6ce50d61.js",
    "revision": "676c60ff19c4b432a05b70dd63a15a00"
  },
  {
    "url": "assets/js/185.552d21e6.js",
    "revision": "1993479371954226423091a87196f23e"
  },
  {
    "url": "assets/js/186.4d586393.js",
    "revision": "6dfec1f865fc552e5b25a93b99cb3840"
  },
  {
    "url": "assets/js/187.78d80f81.js",
    "revision": "eff33483729934e6fa061ddf359590d1"
  },
  {
    "url": "assets/js/188.e979d0cc.js",
    "revision": "32838f3299285862595b0e79d5acc95f"
  },
  {
    "url": "assets/js/189.9c136940.js",
    "revision": "8966f4d8ecf382edd85559a7eb29c21b"
  },
  {
    "url": "assets/js/19.4b9bfdac.js",
    "revision": "604e811fa33ca6b88421de04b9dcc988"
  },
  {
    "url": "assets/js/190.dd478d4b.js",
    "revision": "d31a9beec0191c0a9fe6d5e9e157bf54"
  },
  {
    "url": "assets/js/191.02fcd653.js",
    "revision": "7d6d6180123e9c22c546a6137eda5c56"
  },
  {
    "url": "assets/js/192.a33369a2.js",
    "revision": "34b3894d62b04bfa09e8761a96842baf"
  },
  {
    "url": "assets/js/193.5129c69f.js",
    "revision": "32006c0c28bc8330396841ee0be64e2a"
  },
  {
    "url": "assets/js/194.59f02ce2.js",
    "revision": "c9ad35e540f63b56ee8f017ed6c3418d"
  },
  {
    "url": "assets/js/195.9115ff13.js",
    "revision": "8b51f0a0b47df65a87f2ed5ade33cb1d"
  },
  {
    "url": "assets/js/196.b98d8a6a.js",
    "revision": "b9dbf1f9bc78271fb6dd12ab938b86cb"
  },
  {
    "url": "assets/js/197.95d50d2a.js",
    "revision": "67089209f8e1f5c61fa4c6fb6c22c04c"
  },
  {
    "url": "assets/js/198.846a6855.js",
    "revision": "47b8fc753ab82cef3474c6b513f62e56"
  },
  {
    "url": "assets/js/199.48f3f561.js",
    "revision": "1ab90ca9370899113db93e29880dab05"
  },
  {
    "url": "assets/js/2.4dac6c65.js",
    "revision": "401eec930a96db9de361563dd62b03e2"
  },
  {
    "url": "assets/js/20.e08f52e6.js",
    "revision": "2d11180d7200de89b4e3ff765b3d14ac"
  },
  {
    "url": "assets/js/200.4d2c4ff5.js",
    "revision": "dfa307d83962596acfa2f7a9bbc0ac15"
  },
  {
    "url": "assets/js/201.8f8a0b79.js",
    "revision": "63036d093db05b512e7d6a7563943517"
  },
  {
    "url": "assets/js/202.6aa82812.js",
    "revision": "dc002035dd3dbc06be9840915c71e7c9"
  },
  {
    "url": "assets/js/203.20ee4e06.js",
    "revision": "c20bbfcc2eadfe3890b40c787ac86907"
  },
  {
    "url": "assets/js/204.14ff5985.js",
    "revision": "d23b3ad57f2ba30b38c3e506f12fcbd6"
  },
  {
    "url": "assets/js/205.380ca0c8.js",
    "revision": "f9a9ced36a0b4f899227f21e5888e090"
  },
  {
    "url": "assets/js/206.c7808762.js",
    "revision": "5848f93829722367ac50a87517273e28"
  },
  {
    "url": "assets/js/207.cdfd4a7f.js",
    "revision": "05059e4eba794ac53b2f4629bcc6c8d1"
  },
  {
    "url": "assets/js/208.1062433c.js",
    "revision": "ee094a5597310eead30bc28f6faa88ea"
  },
  {
    "url": "assets/js/209.0b20ec0c.js",
    "revision": "147edbdec0993640cc93498c35a2bf3f"
  },
  {
    "url": "assets/js/21.4f9b46eb.js",
    "revision": "0d97b7c7e759093f5cdad033efff1a2f"
  },
  {
    "url": "assets/js/210.d2eeb83b.js",
    "revision": "f9e86ab03fcd65593ad312065673fe27"
  },
  {
    "url": "assets/js/211.07da344e.js",
    "revision": "72efa9bcf074745409d1a94a6179057d"
  },
  {
    "url": "assets/js/212.af492aee.js",
    "revision": "5ffec720f8bf1265028af1c4c4cb2d25"
  },
  {
    "url": "assets/js/213.a9229e68.js",
    "revision": "2bc5e9a1d36fba43cf1c43ed847d92cc"
  },
  {
    "url": "assets/js/214.0876cd4b.js",
    "revision": "305eaa045307f14602ee3e0082d004db"
  },
  {
    "url": "assets/js/215.76cf0b7b.js",
    "revision": "1e9da671c09d4be45e102f534d8169db"
  },
  {
    "url": "assets/js/216.93cc4ba1.js",
    "revision": "f2e4447f2223f90023304c6f242594cc"
  },
  {
    "url": "assets/js/217.0418ccc9.js",
    "revision": "c51271f55b1f2aaa72d586d2fd446bd1"
  },
  {
    "url": "assets/js/218.62ae8039.js",
    "revision": "d9034eb9437a7c0ca1bd71eff742fa26"
  },
  {
    "url": "assets/js/219.723983e5.js",
    "revision": "d354c49b7fe353cd03a17c84f1190f69"
  },
  {
    "url": "assets/js/22.0693d1c2.js",
    "revision": "46fdf584ac0eeeb878e71b134c9c0357"
  },
  {
    "url": "assets/js/220.475d1451.js",
    "revision": "06054827ead5d30184a323cd24d069e5"
  },
  {
    "url": "assets/js/221.9ec54107.js",
    "revision": "1ea1ba55ef353a3a688648e9e68b461f"
  },
  {
    "url": "assets/js/222.7eb5ca9a.js",
    "revision": "c7c794036fa3deff4a973e8f5e779cce"
  },
  {
    "url": "assets/js/223.26a926a4.js",
    "revision": "4b1caf2905dc397dc44e01b2447e7370"
  },
  {
    "url": "assets/js/224.9aadc364.js",
    "revision": "2c662e3b15ff3c4a742a6187ab602798"
  },
  {
    "url": "assets/js/225.0febfaa7.js",
    "revision": "56b340a4a1f5136ce2af702c3a1154c7"
  },
  {
    "url": "assets/js/226.d5944d2d.js",
    "revision": "a0236295de741f482a692040c9fd57d6"
  },
  {
    "url": "assets/js/227.c0571b42.js",
    "revision": "839384baef8aaba96de5d9c0fb714681"
  },
  {
    "url": "assets/js/228.a8638c73.js",
    "revision": "89c4ff54fced29ef1fc7679efdeff652"
  },
  {
    "url": "assets/js/229.1d65eb65.js",
    "revision": "3794f5dfd5f4939bbac3aa9d2b19b774"
  },
  {
    "url": "assets/js/23.31d13441.js",
    "revision": "8b70f492ad422ffe97706bd9804a98c9"
  },
  {
    "url": "assets/js/230.a700eba6.js",
    "revision": "283252bde06037ecbd6d29c512cb3672"
  },
  {
    "url": "assets/js/231.f776acef.js",
    "revision": "f34b195be30729c7a79f17ac8335cea3"
  },
  {
    "url": "assets/js/232.ff7e9496.js",
    "revision": "ef2212a74c08740e75781fa78a33dd14"
  },
  {
    "url": "assets/js/233.509142b8.js",
    "revision": "98d09fea42820d95ecc62c55f3f25785"
  },
  {
    "url": "assets/js/234.8cc4fbb8.js",
    "revision": "20689a5fd69f62e1dc40528f3b2033b0"
  },
  {
    "url": "assets/js/235.4dc0d3e3.js",
    "revision": "afee9898b482ef53f9bfba81d131165c"
  },
  {
    "url": "assets/js/236.b821807a.js",
    "revision": "c7eacca3e5bf0acdbacfad5b2453112d"
  },
  {
    "url": "assets/js/237.663dec2b.js",
    "revision": "fcfc131bdf38c71c6f6075903f5f0ee7"
  },
  {
    "url": "assets/js/238.c611dc4e.js",
    "revision": "5837f35cab25e79ee0a44b52328366cc"
  },
  {
    "url": "assets/js/239.ce7a6117.js",
    "revision": "0c15fee5eb8a3ac9e7ad329dc06a2798"
  },
  {
    "url": "assets/js/24.bfc13345.js",
    "revision": "de046a557f8a1cf207706823ee3f653a"
  },
  {
    "url": "assets/js/240.b21c9019.js",
    "revision": "feea11234e5bfbebd711a0b9b29bd7ff"
  },
  {
    "url": "assets/js/241.4aa19ab2.js",
    "revision": "af2c9302f8a087ec4633cf478d7d4dbe"
  },
  {
    "url": "assets/js/242.01ae2683.js",
    "revision": "ca9f266c2769e6fa7c030bc12d6d0a0d"
  },
  {
    "url": "assets/js/243.b48f5eaf.js",
    "revision": "7a277e6127123b8672e5d2c466761ce6"
  },
  {
    "url": "assets/js/244.b9618f31.js",
    "revision": "2d48e9214c1a7b6968a97b374d4b17ed"
  },
  {
    "url": "assets/js/245.df2110ef.js",
    "revision": "1c8f848662d206ef48e50adfc9bc0b04"
  },
  {
    "url": "assets/js/246.4b200298.js",
    "revision": "3ba8a2ab45ecbdc1e83c0aa641045866"
  },
  {
    "url": "assets/js/247.e4c1c6e9.js",
    "revision": "fff00e96c7403b99101482c7d4806de0"
  },
  {
    "url": "assets/js/248.57e0a91f.js",
    "revision": "f8f689ec0d637872cc15911c4375f259"
  },
  {
    "url": "assets/js/249.364b00fc.js",
    "revision": "5f92e37dbbabef2125947ab528b65936"
  },
  {
    "url": "assets/js/25.14de34d9.js",
    "revision": "f891b5b48be317662a357a67789239d1"
  },
  {
    "url": "assets/js/250.6c87f230.js",
    "revision": "0aacc6e10831c2d572076abe74719a9b"
  },
  {
    "url": "assets/js/251.3d13d1a5.js",
    "revision": "ef71c41f69d93352c0387b63863bca0c"
  },
  {
    "url": "assets/js/252.9cad660d.js",
    "revision": "073f7fc0ecc8690ea7b9585af4c190e2"
  },
  {
    "url": "assets/js/253.f32c599e.js",
    "revision": "2bb40401cc6b647bf2b5783a188a2948"
  },
  {
    "url": "assets/js/254.7b79a20f.js",
    "revision": "f0f610bb44f76bc83239d5f7f78c459e"
  },
  {
    "url": "assets/js/255.ceaaedd6.js",
    "revision": "60187be0f012846eb6f9b0224d1a824f"
  },
  {
    "url": "assets/js/256.c6cff872.js",
    "revision": "a3838c6907498a408a71b04a1280481d"
  },
  {
    "url": "assets/js/257.6d167be4.js",
    "revision": "78711938f2d242633d551f569b994909"
  },
  {
    "url": "assets/js/258.71e84c50.js",
    "revision": "6b25d76e486ec50aed1bb247db83ab83"
  },
  {
    "url": "assets/js/259.3faf3d48.js",
    "revision": "57229057fb1f1e04b2c1ea3a59c52b1a"
  },
  {
    "url": "assets/js/26.32296663.js",
    "revision": "aeb66b13cc2737abc95a9f669d4a6ab6"
  },
  {
    "url": "assets/js/260.7ae5b935.js",
    "revision": "443f4bfefa3620856f819ec223a823b2"
  },
  {
    "url": "assets/js/261.43dedc9e.js",
    "revision": "85c57ff92b57190d8c67a75a1672d7ad"
  },
  {
    "url": "assets/js/262.916e2404.js",
    "revision": "1120d7a64a428639ab62376a4efcdace"
  },
  {
    "url": "assets/js/263.2948286b.js",
    "revision": "e94f2d3d333fad98241ac85832c50313"
  },
  {
    "url": "assets/js/264.23958cdd.js",
    "revision": "f4984068e6c6520f2ea9b9c30aa78466"
  },
  {
    "url": "assets/js/265.7e9e63e4.js",
    "revision": "0680b10244c1ae6f1e9ac4015e7d9342"
  },
  {
    "url": "assets/js/266.a2239881.js",
    "revision": "8f2fb134b34c4e2647c48290d714a0e2"
  },
  {
    "url": "assets/js/267.cd8f8e9e.js",
    "revision": "a01d9417267765ad083ec5e2bdd99412"
  },
  {
    "url": "assets/js/268.b69192df.js",
    "revision": "e9cd7320ddcf19cb824794b0e8dbb9c7"
  },
  {
    "url": "assets/js/269.2165e801.js",
    "revision": "51e4c6aa294596c9b5e31ae4e799e81a"
  },
  {
    "url": "assets/js/27.2d545524.js",
    "revision": "e960790552d2a5805d34bf4bd021b818"
  },
  {
    "url": "assets/js/270.45ec0360.js",
    "revision": "fd1e34c5169268b85ef7e08631bea004"
  },
  {
    "url": "assets/js/271.316aa30f.js",
    "revision": "49af9092d94241b33be4f69d25839ab3"
  },
  {
    "url": "assets/js/272.dc22126d.js",
    "revision": "7885bb8b8f69a8f66066fb3b8890531b"
  },
  {
    "url": "assets/js/273.13418540.js",
    "revision": "adc5404fb7724bd0c7106f8d23b891b3"
  },
  {
    "url": "assets/js/274.8e49595b.js",
    "revision": "35eea94dba05929ac83c5b85661def6a"
  },
  {
    "url": "assets/js/275.0c03c481.js",
    "revision": "d0c61c4a1ec5994a0d6c53fba52d5483"
  },
  {
    "url": "assets/js/276.a4a62316.js",
    "revision": "7f03f5541317fa0d1d8baff1fced6bba"
  },
  {
    "url": "assets/js/277.2efab64c.js",
    "revision": "b8e7713800acfe53b88f7a6096125f61"
  },
  {
    "url": "assets/js/278.0d787bae.js",
    "revision": "f5e140eef9fbd3367ec83734e334d519"
  },
  {
    "url": "assets/js/279.ae022fdc.js",
    "revision": "072bd7f240a7da2d8525608d5b1aa110"
  },
  {
    "url": "assets/js/28.203bb452.js",
    "revision": "d60ecb94913f2fceb97b01394dd5e05d"
  },
  {
    "url": "assets/js/280.f4bccb60.js",
    "revision": "21a952f7b7a032fdb2796564d11eec61"
  },
  {
    "url": "assets/js/281.2bebe936.js",
    "revision": "e90e0c82fb1b4df798098f2a7ff75d37"
  },
  {
    "url": "assets/js/282.671b163d.js",
    "revision": "20da66c49906f37c162b0709b2940f67"
  },
  {
    "url": "assets/js/283.fc75d096.js",
    "revision": "7c11bef3ff2afb1849c0f8c5f2690828"
  },
  {
    "url": "assets/js/284.5a113909.js",
    "revision": "f83c4784f9b3a1bc0aea4bdbbb2912e4"
  },
  {
    "url": "assets/js/285.72eba0d2.js",
    "revision": "1a3e3479a9d5951c75f1e28817a086eb"
  },
  {
    "url": "assets/js/286.013ffc4d.js",
    "revision": "c3b1bb697bae910e6b800c98f1edd916"
  },
  {
    "url": "assets/js/287.dbdf2ee4.js",
    "revision": "4564e87c07c8a2cf42875e5abb51f326"
  },
  {
    "url": "assets/js/288.b01d3230.js",
    "revision": "759c7bf9f42ca060465a03251797c844"
  },
  {
    "url": "assets/js/289.2d18616a.js",
    "revision": "39a94bd6c711f65d2e8bd595412a9535"
  },
  {
    "url": "assets/js/29.839d2265.js",
    "revision": "bf5bd288cd6b483a357534a693eb7b08"
  },
  {
    "url": "assets/js/290.7d8f778c.js",
    "revision": "77356fb7d8f38846f41f913757f65c09"
  },
  {
    "url": "assets/js/291.7146bd15.js",
    "revision": "31f8d5497ae0c7d5f38f5c85d9026477"
  },
  {
    "url": "assets/js/292.3b06d082.js",
    "revision": "22f4d1b7eb0042726848bcdaf30a2be8"
  },
  {
    "url": "assets/js/293.4502d0d4.js",
    "revision": "f6ba89db574449f44c7801216ce98187"
  },
  {
    "url": "assets/js/294.cdfb0070.js",
    "revision": "9af226fb679bde452e7da35e95bd240c"
  },
  {
    "url": "assets/js/295.fbb5abee.js",
    "revision": "f372574c1fdcaf3821e0c92352fbfcfc"
  },
  {
    "url": "assets/js/296.befc0369.js",
    "revision": "048dae41aa13ed15ea027399ab2358b3"
  },
  {
    "url": "assets/js/297.0fff3455.js",
    "revision": "48794a2146194eca82a24ff9f5e54bcb"
  },
  {
    "url": "assets/js/298.3470e7c2.js",
    "revision": "13da9433f038fc7936a0f18d4c1d3673"
  },
  {
    "url": "assets/js/299.6de52a04.js",
    "revision": "34d633bc76449ad6342f3ca78c3bdec1"
  },
  {
    "url": "assets/js/3.9d937be8.js",
    "revision": "69935f7841dbd17f51670eb6518b7e85"
  },
  {
    "url": "assets/js/30.b675d268.js",
    "revision": "5d25f3fad62ec0436a4182d6aeb67fa7"
  },
  {
    "url": "assets/js/300.2cc707a9.js",
    "revision": "37fcec6e905f8d5cfd2fcb0d29522346"
  },
  {
    "url": "assets/js/301.e62b8fa3.js",
    "revision": "0a84be9af241c56d919f518c564e6fe1"
  },
  {
    "url": "assets/js/302.f49be540.js",
    "revision": "e0987b01e52fb5363b66dd3bd5129377"
  },
  {
    "url": "assets/js/303.af0d1d00.js",
    "revision": "c27237873e507fc83ab276910b2e4817"
  },
  {
    "url": "assets/js/304.81d4356a.js",
    "revision": "878879df033a51ef52367f6a3fa5c400"
  },
  {
    "url": "assets/js/305.78f90072.js",
    "revision": "c814f597f99ee486500ed1028f8912db"
  },
  {
    "url": "assets/js/306.b8d38b75.js",
    "revision": "8569dd2fe3d5200cef52ea4932c57d9e"
  },
  {
    "url": "assets/js/307.b368a0fd.js",
    "revision": "85d06ffb9d613dec7872144199efcb9a"
  },
  {
    "url": "assets/js/308.847eadcc.js",
    "revision": "5aabd156828a5b86e860e915501ac4b5"
  },
  {
    "url": "assets/js/309.6ceb2d95.js",
    "revision": "4c734a7937dc060132d85434ad2a80f9"
  },
  {
    "url": "assets/js/31.e5163d22.js",
    "revision": "14f861c73c8816045d6ce7cd101d604f"
  },
  {
    "url": "assets/js/310.754a0324.js",
    "revision": "d06c63c2fc827ea3c76f7076e5075709"
  },
  {
    "url": "assets/js/311.c62687cc.js",
    "revision": "c4b6f84c597c9bb284545c576d54e2bf"
  },
  {
    "url": "assets/js/312.2ce52854.js",
    "revision": "ccfa58436564c9ea9c98d776e899bede"
  },
  {
    "url": "assets/js/313.44774610.js",
    "revision": "89f23ecf2c329955ab33c066e0fe8b7b"
  },
  {
    "url": "assets/js/314.06a16ab2.js",
    "revision": "8fcdf1e5f795f6294a36f48612264074"
  },
  {
    "url": "assets/js/315.bc597067.js",
    "revision": "f842a9c421df28d20e0dc295a0e44de7"
  },
  {
    "url": "assets/js/316.ccfa0a28.js",
    "revision": "608cf471753c33cdf996e988e69e1bba"
  },
  {
    "url": "assets/js/317.d3a244fb.js",
    "revision": "f17082caea87accf96c32eafc34a26e3"
  },
  {
    "url": "assets/js/318.3e333709.js",
    "revision": "3c69c1599860686b3f74b8d161c0d6a8"
  },
  {
    "url": "assets/js/319.b6f94e6d.js",
    "revision": "bd140d658ff9283caaa4034e585d6647"
  },
  {
    "url": "assets/js/32.cce9dd69.js",
    "revision": "9912a0f40a539879585ec6ee2a6e0f44"
  },
  {
    "url": "assets/js/320.c40336d6.js",
    "revision": "a5b2b8602603e06b8cd7daab2b2c7603"
  },
  {
    "url": "assets/js/321.7a627d38.js",
    "revision": "f0f7acf41ab5e274fae50ac2f76ee74c"
  },
  {
    "url": "assets/js/322.70eb0547.js",
    "revision": "b95e312b4182ac5de06dcf335b454ac5"
  },
  {
    "url": "assets/js/323.2d96a66d.js",
    "revision": "5b8c1687cd326a019832817e88fe31f8"
  },
  {
    "url": "assets/js/324.7f69a914.js",
    "revision": "7757415562b9a08c4b2256ac67f1580b"
  },
  {
    "url": "assets/js/325.a65cf910.js",
    "revision": "eb40cfb33f44dcd72c0ab08dedbbca20"
  },
  {
    "url": "assets/js/326.ef9546a2.js",
    "revision": "350f48c7bd29a3b29940bc7fefe34307"
  },
  {
    "url": "assets/js/327.ecbe680c.js",
    "revision": "7bfe99fbabb601ff666c67a6fadaf6aa"
  },
  {
    "url": "assets/js/328.72bedc97.js",
    "revision": "0b5698571b8ee9ea1bcb6958fbc1a915"
  },
  {
    "url": "assets/js/329.92854acd.js",
    "revision": "124269a369f8f8d3d52a2524c5d37867"
  },
  {
    "url": "assets/js/33.bd518df7.js",
    "revision": "1361ad756ea36c5d476a3b7ca5af9e9b"
  },
  {
    "url": "assets/js/330.741e9fbb.js",
    "revision": "2bee0c1699965f536319f9c9d65d5c16"
  },
  {
    "url": "assets/js/331.cb769256.js",
    "revision": "718ca0501cc55f4cb4251301807dc40f"
  },
  {
    "url": "assets/js/332.d183b223.js",
    "revision": "b32abd213be4d301e670d0cf0f8272dd"
  },
  {
    "url": "assets/js/333.4326db1e.js",
    "revision": "9f98493969e746d510d5dbf6e1e83fc5"
  },
  {
    "url": "assets/js/334.b488d396.js",
    "revision": "0664033615cae6e70d3d16c6ac546a71"
  },
  {
    "url": "assets/js/335.6eb87d76.js",
    "revision": "2a69d527d3bccb5466c8de8a0a6e2369"
  },
  {
    "url": "assets/js/336.07eb31b5.js",
    "revision": "e434c2a3adffdf9a9c18830e1abb165d"
  },
  {
    "url": "assets/js/337.af8838fe.js",
    "revision": "19982ae2b57d6c49737fd3706d727204"
  },
  {
    "url": "assets/js/338.8c90b077.js",
    "revision": "4c323024707f14adf2e6c3f659956e24"
  },
  {
    "url": "assets/js/339.336c07d4.js",
    "revision": "9ba589571366c832868f4ac04167cee2"
  },
  {
    "url": "assets/js/34.8091e01c.js",
    "revision": "aa9694e5060667a62e0b5695e5a103aa"
  },
  {
    "url": "assets/js/340.c445f775.js",
    "revision": "d6053f4082d447ed11c6bad1507e8c98"
  },
  {
    "url": "assets/js/341.d12ca808.js",
    "revision": "2323990329b618f64e2b60dbf637d791"
  },
  {
    "url": "assets/js/342.eee51d99.js",
    "revision": "0e8f660f5e82c759e6793cf9f63968aa"
  },
  {
    "url": "assets/js/343.017b25d0.js",
    "revision": "fb6bb0345fc42109fccb9394e0a63076"
  },
  {
    "url": "assets/js/344.870a6d01.js",
    "revision": "03aaf44512594ebc1b6c285337fe3f45"
  },
  {
    "url": "assets/js/345.07041e0e.js",
    "revision": "8f23ae1489bb277c3a1b0aa8dc01102f"
  },
  {
    "url": "assets/js/346.454b0904.js",
    "revision": "09190f55068e3c633056561390b91881"
  },
  {
    "url": "assets/js/347.e7f71e9b.js",
    "revision": "d482773ca67891d9b0c5ae601a62ead0"
  },
  {
    "url": "assets/js/348.fb2015ef.js",
    "revision": "affefca008d1a87fe87732334a821600"
  },
  {
    "url": "assets/js/349.ad55af30.js",
    "revision": "89c9b16d99195503f85ac9f821e35b88"
  },
  {
    "url": "assets/js/35.7d73379f.js",
    "revision": "3eefe9ad74f201e59186f097edd0a913"
  },
  {
    "url": "assets/js/350.3cbda536.js",
    "revision": "2e6ef675b2987dc436bcce57f5e74c56"
  },
  {
    "url": "assets/js/351.5fc5132b.js",
    "revision": "cbe003a43fc32a06be7b89115196b10f"
  },
  {
    "url": "assets/js/352.4e3fcdb7.js",
    "revision": "b95279e6c329ffa7d1aed2544298daf4"
  },
  {
    "url": "assets/js/353.b7c3f8d5.js",
    "revision": "59cf257411bd2c9f3b52600975314bbf"
  },
  {
    "url": "assets/js/354.46f7d162.js",
    "revision": "82ad43de1ae876fd6cf6f3e9b286d8f8"
  },
  {
    "url": "assets/js/355.7dc5547e.js",
    "revision": "7ca917199fe9d14310c978366a258e1b"
  },
  {
    "url": "assets/js/356.5670c97b.js",
    "revision": "0b9608d38b381a301055b87e70ff879a"
  },
  {
    "url": "assets/js/357.29c0518c.js",
    "revision": "5403d97429e24a9d98f35b4db634bfdd"
  },
  {
    "url": "assets/js/358.5cc18217.js",
    "revision": "5f2da5d6de558b8c4d5bf11e9e6e19b9"
  },
  {
    "url": "assets/js/359.b7d17c9f.js",
    "revision": "34e96192b96f9088238fe70d48586fea"
  },
  {
    "url": "assets/js/36.ef064d6d.js",
    "revision": "845e0770ee7d76a3d0baebd68c6239d7"
  },
  {
    "url": "assets/js/360.9b216f9c.js",
    "revision": "299f5a8ce5d9ef200895b0a852c2cdf5"
  },
  {
    "url": "assets/js/361.8a90ce6b.js",
    "revision": "d4ad41ffa9fbe68f67849ec19205047d"
  },
  {
    "url": "assets/js/362.f22bbd17.js",
    "revision": "34125c05e4ba8c8a616ac08f1698f0b8"
  },
  {
    "url": "assets/js/363.35ff1afb.js",
    "revision": "5d8aa24f5855b1fb577fe8052779b0da"
  },
  {
    "url": "assets/js/364.dfb23edb.js",
    "revision": "70221f8fa12a06fc2819b0cd35d90d1b"
  },
  {
    "url": "assets/js/365.fbb03ace.js",
    "revision": "f9df9751c16f8aacb8fde2976491e1ec"
  },
  {
    "url": "assets/js/366.4f1b3b8a.js",
    "revision": "2344f7ac3cb26610c1999f61127c52b9"
  },
  {
    "url": "assets/js/367.527fbc98.js",
    "revision": "3ca842c5b05a643e2cc5b0e08fab17ab"
  },
  {
    "url": "assets/js/368.bf43399b.js",
    "revision": "cd9822a6e6666ff92878e8e6f472a8ac"
  },
  {
    "url": "assets/js/369.75a55868.js",
    "revision": "39721b0733b588460d9ea52834e3a0f2"
  },
  {
    "url": "assets/js/37.52c877fd.js",
    "revision": "cb7222694b398c2978be186a75b1ae96"
  },
  {
    "url": "assets/js/370.6f293c02.js",
    "revision": "c315fda8b2903a3ac29fd3fc1a77cb24"
  },
  {
    "url": "assets/js/371.0f95b871.js",
    "revision": "ab85bf18fadfaa286345f0fb3342d94c"
  },
  {
    "url": "assets/js/372.c1bd1162.js",
    "revision": "badaed6413f082c77450bf8336078b11"
  },
  {
    "url": "assets/js/373.ebc9e81b.js",
    "revision": "52a21edfe3fd45f972590369d17fb602"
  },
  {
    "url": "assets/js/374.522e3c8b.js",
    "revision": "d3381e79bfdd05b65cdda3e5cdfff915"
  },
  {
    "url": "assets/js/375.bec58ecc.js",
    "revision": "759e13228dade8b41205df5dbc5f67a6"
  },
  {
    "url": "assets/js/376.52db6775.js",
    "revision": "2befd8281b1b0f3cc80befc0c2de0560"
  },
  {
    "url": "assets/js/377.a85175a3.js",
    "revision": "5ca4360fa4d839219cdc55a306c7f472"
  },
  {
    "url": "assets/js/378.b255c2de.js",
    "revision": "bd35831a1b4992d94aaf3012acd307ff"
  },
  {
    "url": "assets/js/379.9ea156c0.js",
    "revision": "1b3c46ed4e22cd8f6d601fc2e255d421"
  },
  {
    "url": "assets/js/38.96a4c718.js",
    "revision": "aa816af37810438f368c9f9678dbf5a0"
  },
  {
    "url": "assets/js/380.d26a831c.js",
    "revision": "35dbf6b26934f30fd8ab23aa2e6af1eb"
  },
  {
    "url": "assets/js/381.304c8b30.js",
    "revision": "c0cbc05363829ee2ac0a278f9f2daba8"
  },
  {
    "url": "assets/js/382.60dd8b99.js",
    "revision": "8e50980c8cdb5b259a369277f83dd451"
  },
  {
    "url": "assets/js/383.007ec00d.js",
    "revision": "b26dd4581e5fb21fc56d5d8521d7ecde"
  },
  {
    "url": "assets/js/384.335c1461.js",
    "revision": "966a8a7176fed3d411c3936e44eb61e4"
  },
  {
    "url": "assets/js/385.5271c3db.js",
    "revision": "84a233681e77b4934a9442b4a964acff"
  },
  {
    "url": "assets/js/386.2c828005.js",
    "revision": "41b1b73491059a323739b0e881d5308f"
  },
  {
    "url": "assets/js/387.2adf8c44.js",
    "revision": "8e3d9b7e99de6064b989eeb8097c157e"
  },
  {
    "url": "assets/js/39.0bcc2eaa.js",
    "revision": "dae22b385d76099b4f3644aaf7c78a85"
  },
  {
    "url": "assets/js/4.82832d6e.js",
    "revision": "a87385fc913b9febddbe495ddb6f5309"
  },
  {
    "url": "assets/js/40.2d10c194.js",
    "revision": "d8ba3588b7710952772265ec83e9635b"
  },
  {
    "url": "assets/js/41.3f851c95.js",
    "revision": "38dd903586c1c1cadc3b90bc074d89a8"
  },
  {
    "url": "assets/js/42.8d41d83c.js",
    "revision": "874a31828b0216e6be26b4ac74b1cdaf"
  },
  {
    "url": "assets/js/43.f9728e1d.js",
    "revision": "2e4173a16bc52794635ac9b9e7c8e696"
  },
  {
    "url": "assets/js/44.74933edc.js",
    "revision": "29df4bd8b1cdd6448cad04e532e56c09"
  },
  {
    "url": "assets/js/45.b5e2c7a9.js",
    "revision": "f294159b9195e800629b6398e1b3638b"
  },
  {
    "url": "assets/js/46.fc916b2c.js",
    "revision": "f89fab6df230a427292e32d923f6fc66"
  },
  {
    "url": "assets/js/47.3e2e07a5.js",
    "revision": "86865d5907ba145149ae1efa75a62351"
  },
  {
    "url": "assets/js/48.f8a199d1.js",
    "revision": "b2d1c3ba5a105dfb0778e6dbbbd296ef"
  },
  {
    "url": "assets/js/49.21077ca3.js",
    "revision": "22bf3ec3cf4958ab93f8a8e3cae1c203"
  },
  {
    "url": "assets/js/5.eba3f479.js",
    "revision": "cd7fc77ce64f5ac9863727c9d5129413"
  },
  {
    "url": "assets/js/50.df9af9fa.js",
    "revision": "16751a29851962b8d8af6b626158bb05"
  },
  {
    "url": "assets/js/51.34e1d894.js",
    "revision": "8dfff34e2cd0b8bb21f73f3da7390cda"
  },
  {
    "url": "assets/js/52.70431526.js",
    "revision": "5848575cc9dc65056d142f05a2c49907"
  },
  {
    "url": "assets/js/53.52f90003.js",
    "revision": "e99e29c46794994a8299009633d3a326"
  },
  {
    "url": "assets/js/54.a5e8da56.js",
    "revision": "55b651df36496b844563824f387da552"
  },
  {
    "url": "assets/js/55.070f7292.js",
    "revision": "2b83ce9486e42660999370e5bd617a50"
  },
  {
    "url": "assets/js/56.27cda0fa.js",
    "revision": "19900325f68440cd35fa2f154fcabc6a"
  },
  {
    "url": "assets/js/57.d0f68a9a.js",
    "revision": "f8411ac0bc450e598ecddc1bf3346082"
  },
  {
    "url": "assets/js/58.acddb31c.js",
    "revision": "eccbf8a75b7f18a6764a36f71cf96203"
  },
  {
    "url": "assets/js/59.354f41d9.js",
    "revision": "a776688374ca3e1208ecf28d9482a11d"
  },
  {
    "url": "assets/js/6.cdc3c764.js",
    "revision": "f6e96f0727c37c9394b8e7ebc8757fbb"
  },
  {
    "url": "assets/js/60.05ecda77.js",
    "revision": "4e3c23bd198a05de00b5f60258d26d12"
  },
  {
    "url": "assets/js/61.4e3df9ba.js",
    "revision": "1165b8d042c17cf5f4d67c46f246450c"
  },
  {
    "url": "assets/js/62.fcd056d4.js",
    "revision": "b2c654571440e73d7dafc33171b3a8cc"
  },
  {
    "url": "assets/js/63.c628419b.js",
    "revision": "e4898e09198959fff51c99195c04872c"
  },
  {
    "url": "assets/js/64.f29a1c44.js",
    "revision": "f44c28a7c2ce994747239b5600f35e1e"
  },
  {
    "url": "assets/js/65.90171d23.js",
    "revision": "18d059efc5d3d772000e5bb443a9e9cb"
  },
  {
    "url": "assets/js/66.8921b703.js",
    "revision": "2017f4619e1101c4ba15d0f5630c807a"
  },
  {
    "url": "assets/js/67.4e742693.js",
    "revision": "cdeb4b612ffb48272b0697529125cc7c"
  },
  {
    "url": "assets/js/68.faac07d9.js",
    "revision": "ec0fe6c13be7eae9aa75e1e54946fb39"
  },
  {
    "url": "assets/js/69.39f84bf8.js",
    "revision": "5dbda65a26b5889b84ffaaf4b3cdd1b7"
  },
  {
    "url": "assets/js/7.70946fab.js",
    "revision": "e5ece5bf96eade5fc219a14542fbaa40"
  },
  {
    "url": "assets/js/70.b58f5dbf.js",
    "revision": "a3b0e081f0f01bd1ec5aabb632831d8f"
  },
  {
    "url": "assets/js/71.30c33153.js",
    "revision": "f0c1e8892775806782f133d69d1ffc35"
  },
  {
    "url": "assets/js/72.e95bd14e.js",
    "revision": "1dd407269f632d6bec5727744a540c53"
  },
  {
    "url": "assets/js/73.11677e39.js",
    "revision": "e0134dfcc9cacf97ce422be5ddff0fc9"
  },
  {
    "url": "assets/js/74.368f4475.js",
    "revision": "d4592d645c38dca64089fbaf39731afa"
  },
  {
    "url": "assets/js/75.fac4e3b9.js",
    "revision": "65472ddc17c3c3afe13cb6d371eabb26"
  },
  {
    "url": "assets/js/76.4afabf87.js",
    "revision": "a7750ef322a671022dbda7ad8cad06f3"
  },
  {
    "url": "assets/js/77.faa6ab6a.js",
    "revision": "bb47ac4065b142eee1fc1fa9b9d7a922"
  },
  {
    "url": "assets/js/78.498cb86d.js",
    "revision": "0bd6b6dc0e2202b8385e32841f7cfbfa"
  },
  {
    "url": "assets/js/79.f0e667f6.js",
    "revision": "832dda847e55cd926e7222ebef5a67e0"
  },
  {
    "url": "assets/js/8.153fdc15.js",
    "revision": "81cd290ef0c488a913650d4536dd8749"
  },
  {
    "url": "assets/js/80.484ac062.js",
    "revision": "2f4284977460af000f9cf4ed781aab0b"
  },
  {
    "url": "assets/js/81.9db90494.js",
    "revision": "5162d6f581655df67fad37813b94a3e7"
  },
  {
    "url": "assets/js/82.48540f38.js",
    "revision": "802f33287946182397d9db1ab6f03e2a"
  },
  {
    "url": "assets/js/83.52fc34da.js",
    "revision": "d72b6f502c67d8840c9845e2142743ff"
  },
  {
    "url": "assets/js/84.f87c6d98.js",
    "revision": "3078438fd9ebd0e99dd9681dd376eb36"
  },
  {
    "url": "assets/js/85.579814d9.js",
    "revision": "0d010cbf2ceb594da5e1fefd30372d08"
  },
  {
    "url": "assets/js/86.4df06969.js",
    "revision": "0576c59d6ed33e1a21ee19da5a8f7dc5"
  },
  {
    "url": "assets/js/87.d1c0cd66.js",
    "revision": "6970b5fa1dab3ea073744bf71bdfdb21"
  },
  {
    "url": "assets/js/88.32ca0859.js",
    "revision": "79fb775e5f6b3b32a13896ec3fa79a90"
  },
  {
    "url": "assets/js/89.10ad1ce1.js",
    "revision": "e77031b09f76d8030f554f651a667aea"
  },
  {
    "url": "assets/js/9.fbe52f4b.js",
    "revision": "ab6901af0ba06c2b0ff450b77eea0101"
  },
  {
    "url": "assets/js/90.0b89e299.js",
    "revision": "f52ddbbf889d85e8edb8c504d6b8611c"
  },
  {
    "url": "assets/js/91.a71afe47.js",
    "revision": "ae0454e0159abf91af46c6103027127c"
  },
  {
    "url": "assets/js/92.85134933.js",
    "revision": "e26e444f46ed657187b10e6fc1a18357"
  },
  {
    "url": "assets/js/93.01e07f81.js",
    "revision": "f69db6979a2a379a9fae7d2f4a12953d"
  },
  {
    "url": "assets/js/94.8793c58d.js",
    "revision": "ccaeb3f56ced385a97e29d36f30fa81c"
  },
  {
    "url": "assets/js/95.9d801258.js",
    "revision": "0f65965af6759b3691aae0a06225e7f2"
  },
  {
    "url": "assets/js/96.fe4d5b0e.js",
    "revision": "8439d4a2f10bbc53354182185eea17c3"
  },
  {
    "url": "assets/js/97.38ed58dd.js",
    "revision": "f566bb92363d79cea8b5b0f9daef6c00"
  },
  {
    "url": "assets/js/98.389dc1a7.js",
    "revision": "d20e4cfb05b12eff978eb093aa5753fc"
  },
  {
    "url": "assets/js/99.2cc5377c.js",
    "revision": "c54328f0e0974274966a55c4cd0af9e3"
  },
  {
    "url": "assets/js/app.45b73fd2.js",
    "revision": "3487753f5b0c3b9e28743655bb581801"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "f596b15ae9dc93e68b82d3da415e5deb"
  },
  {
    "url": "common/architecture.html",
    "revision": "776f3f6664d525715b2068cc229bf81a"
  },
  {
    "url": "common/code-structure.html",
    "revision": "6327a7e6423ef8dd93e7c3dde42aa023"
  },
  {
    "url": "common/crawl.html",
    "revision": "6599df156cc0830dc61b28ebe851c0a1"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "33a47e89792412b6fc5606718d160a58"
  },
  {
    "url": "common/debugging.html",
    "revision": "91824b0bef90da994ac7c0751b897152"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "e7218023901d644833d1d483f0291e6a"
  },
  {
    "url": "common/document.html",
    "revision": "14f99064199e74451c9560f1c41ed7de"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "e280c238f26c736040608e65cc4551d0"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "4e6ec507b5ff3056370b8b91eec8835d"
  },
  {
    "url": "common/index.html",
    "revision": "e1668e56faf7cd3130c5883cec9e03a4"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "50602a1708218bf13067aadd4a900ec8"
  },
  {
    "url": "common/realtime.html",
    "revision": "b85817b68337d68fb7f8bfff179d8b92"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "ae8cb0335d0b03bc3bb15dfcc8bd5296"
  },
  {
    "url": "common/refactor.html",
    "revision": "ecb394a864d841330dd44d9756edaf64"
  },
  {
    "url": "common/seo.html",
    "revision": "a8e8f688a3af468c1ea0d36e0b1f31e5"
  },
  {
    "url": "common/use-case.html",
    "revision": "a4cd7e931a9ab54456a2ac84f7cec1eb"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "fb1331513a6dbaacaffa756153259081"
  },
  {
    "url": "css/tricks.html",
    "revision": "8514f92dfe6e17b946fa12256b69ca54"
  },
  {
    "url": "db/architect.html",
    "revision": "5287f72da53458a64045e291982280d8"
  },
  {
    "url": "db/cassandra.html",
    "revision": "3f09b3c77e6c0801c19870e250d48105"
  },
  {
    "url": "db/couchdb.html",
    "revision": "1a8eaecad2a7239f66ee0b93f1e50cc7"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "d471264b6b87d8a0537b1c356e7f171d"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "37f722cada034fa8ab04d2722b634d5b"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "270cd873c63801e7f9b09311a73e5336"
  },
  {
    "url": "db/nosql.html",
    "revision": "d56721d55da519eb73d72d0a58ad27ab"
  },
  {
    "url": "db/optimize.html",
    "revision": "a2b32cc6b2984f589dea4c8f53224566"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "2f8ca05c07b3ac0def3bfc061601652f"
  },
  {
    "url": "db/postgre.html",
    "revision": "ba92ea2ff9489a14d758fdc1c3aed7a3"
  },
  {
    "url": "db/redis.html",
    "revision": "3dd19ffe00372f8e76235c0d372be14d"
  },
  {
    "url": "db/use-cases.html",
    "revision": "d56a0a387139d24015abbe6423e7c58d"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "68bab84b44916a9014b65a1f7eeab8d9"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "8d2bb74f989a298100003b2995fb4590"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "6998bb3157469f9c603dcfe08487d98d"
  },
  {
    "url": "go/clean.html",
    "revision": "6b5ede9723d7087337b167de22f6fa27"
  },
  {
    "url": "go/index.html",
    "revision": "204991cfc667a9607b231ee593414b72"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "3d0855220839fa436143f1db256afcfe"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "38e4dc45a1fef4523547d1d3d6b704a2"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "60fa21b866fdee8b61abf8750e2cf6fa"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "1c6f06765ee6cf9741d4e875433729fb"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "13a7bae8c9c7e18bd20f051a220e300f"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "dee12daaea193fd7219d62a74830dca1"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "21ed4fe386c07243607ba5dd95d01c45"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "d837dd2abcbeb2303f02c828348f96bc"
  },
  {
    "url": "index.html",
    "revision": "8ef07b62b4881ac31cf9ca78927ceede"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "1b6a303358a73e5d88c4af7ad7644e2d"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "eed9533c86f21eb6437b3a1b51457f22"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "11d4d9cb9034a924461b69d2c45add64"
  },
  {
    "url": "javascript/closure.html",
    "revision": "ceaba28dfe3ba7d41879ac0e92509851"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "95172f95b73023ea852c4eb4e791164a"
  },
  {
    "url": "javascript/functor.html",
    "revision": "e94f8bda4b0208ab28dea7cb36525198"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "2a362a0e6fde5c09ae4caa0846e40299"
  },
  {
    "url": "javascript/react.html",
    "revision": "9972324f6548b2cc4625296a40f6b938"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "05fb192486f01f6ae80416d4f11df916"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "2530c36848c9ab946a3df04140b9c303"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "0258ec63402308ced044e07e72f02aa4"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "6283d107b3e8e19ea834791b0ef94eb7"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "fe0fec6822a7ced90d5323ac88c15933"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "b5e57e3144bd7a126d5b29d8f7819874"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "28cf4ed0a711905a1115baed369e2ac8"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "17794784660e760512f39bf144820838"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "f503799106aaeda8fe0d6f6685c758c1"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "f4023a057e8dd46683087a6fe4f5d11b"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "85015080b00deffaa44b084858dcc042"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "1e7de23e9763cabeaa7f5c0824a4b3a2"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "9a4dec808f2e716501421614862ad5ce"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "c14e849b0bb767f9a9aebefb4cb0f531"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "441c576d34d24aa76a07c2136a66d42a"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "ed07d9981546909aabbf6289dd412796"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "ee83f3a4c7caf62767d5e6649b8a4179"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "512a6ef1893bc5e4f6b598f353d08ea2"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "19090e4fd7eed0310299719759a0fff7"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "3d12e7703c22d3007efe68f948edadd1"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "b4218e5284436832ee3e942d1c5c7a39"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "d707e137b256d2526d360e4338cabb28"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "f59004f7d3902505bd2b1f8387098017"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "16da69a752c9dde00c91dc085939fe6a"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "35ec57765c24950c3306dc22dfc28c01"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "931d195c6768f550b22e578d1ebbdd6c"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "a28da575437f745c4572fbf69021420b"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "9a9a0298ab8cc68cf837041713b57816"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "f0b50cf7556dc9cc74d130e4aaa96e06"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "380ebb49fa48b398d193f0c983ba36da"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "aa13cc83d6ce31616b5ccebbc2cc2216"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "3c67058905953c52bc413c5dd123dc5d"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "c0284c01ab74361e336d2b46c97948bd"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "a96c603162aa1d2e6a1f143ce10a2837"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "d5c9fd3c296f2a1180b35c7a3a607f5c"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "d16841fd5122c83dfa3d9f32fcc5b68c"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "b2ba09cdac8c28b8bb39267da187af1d"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "0317428565cca95eaf07298f7d4f1666"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "8e161497b2420d6360adde4b2f1d65a7"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "dd557fd043938bf29eb32eb4dc110f1a"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "302625addfe0428ac1ce7e5c78abf328"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "e53f9a3cb93db2d02e0079ecbc8a1d62"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "89295be2c3da98684cd73faa705157c2"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "36cc46721e1972011b2cb97919c3deb9"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "e31ebb3ccbbdebce0975174bdede20f7"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "9b96cc5519adaa78d04dc133cad9f27f"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "f6b764d62dde989b52572a6640be5cdb"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "001b43f9905ddc5e5f2334e515aeb347"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "c2cf202f6bc28818547bf5484eb3c162"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "62588644100a7168eb9a0821e6ddd586"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "b7c36a688431f772ec70c8c076364269"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "83f151061072d46ae23952ee5ade561a"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "7eabc27e58015bf6c34915b430284bad"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "0988e2dba2be4b0a1471b9f3e1243ba0"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "7782acf09cb9c4909c75c70c763ed241"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "1b48a1442c0a6466f406efe9a042f652"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "f3c04f2e5ca66725b7db369c0c57bb6c"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "4d474cfe425f9f1db5f6e9d44b5b1c2a"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "b1deefe2d4714a851d29b0270ee45eaf"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "6ae12147f9f3e5e04c0eda8524556f2d"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "42c6ad989682ea6ef5dfc10a8e18876e"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "2d37a2cc110a430d2c53df8bd446891d"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "3d58660531c9ea2be04fa0a8f4f43c12"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "4ab886fc88ce2823de0cb5a885298c1a"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "7ef53293452d3143b5ba0c9b3f70c49d"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "2fb02882385935f924f72d34b9341bf3"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "8a2c26648fdd8d0f6bc2a855119268e2"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "1868040dfd42d6812359be376e27b251"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "c3c2ae45224207e71ec4cf5f7ee1fa8d"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "803161b64d7ae67772604e912d8ef37f"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "2490d07a5df8ec9a99ff37eeff2436ab"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "39f3baafe3a4d699fe56f9aa1a800ece"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "792e0679a7e85e64572a159f56326a57"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "039f1586a80fab2f2206943e591b6a6f"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "50db443d6abbd1e295aaa0506f234314"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "8e73a34038908571306f76d6862e8b0f"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "4305f310992f03f73ba01710377b07dc"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "cb5dec033823c0413d3ec886220e7fea"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "cfe3b92115ecd46cd707661746eba0e6"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "c4f933916b2b82cbbe3ad0f2c3db7536"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "16a81a60baaad3a28ba34efc67f53769"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "ccdd12d866945c44f52e62848b2b366a"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "51f18a771e39e0b961faf77444f742de"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "8ffd257c17a84d11119d901dab6da1f7"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "c8ee2485eb8a80a946f9d927a8516131"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "68264bfe696c54beb3d004327a0a2ad2"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "eb1ccb83d44bcd941d8bb34190425742"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "8b10b0517000493ef63adae515292ff7"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "273ebd96f259bd13fa70c83d827989f2"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "2d4d625c25ad1dd864104aec4b022fe8"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "3637bba26b41392c3003558488e7840b"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "b51520db0f0652dfa98735fb4d52f68b"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "323f6368ad0ef3db8b7ca22b56100eb4"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "b9afa38fafb9267f701d73a923e8d7d6"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "1a5790935014edb11363ed98afb9de9f"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "602bd53cdc15116fb5b782d01d95bf79"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "95e6617d7ff0953a761d5cf13934f33d"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "b2c7d92d5bb5d906a9810a3dd85167be"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "02d663ffdec743f36333cc770a160237"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "927a033358eeaa2e4a1fbe2a5cd92b7c"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "b3771fe057d9eacc45141792d38a10bf"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "121c41de251957329cd43b277d878887"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "aebd1b302402d7db701bf902166e743f"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "6433bef8f381b8302b923b771a8c9ebd"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "5be26e057d1b345ee64010e89ebc6110"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "ca36ec1d46b9951b7f6c69e4f84af89d"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "ab70d3261e29b62c856cacc740f5f4fe"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "32dce78d7f4145a4036dcbfef9647a9a"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "8c6c4a959e37adde42554f486e308a29"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "8165667eba92b169db2399526be28e9b"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "4ee2a845c6e7caa2126f7b0bf923cc14"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "97426330bbc98e3e882ce5dadf15d006"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "04553dc815f5df00e6c40a5a37c2c394"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "aee5eb07a9031d971aaf5c14d33a07d5"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "7784554b125c581830270d8fafc3a5f1"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "b2b13fc1fb5b334216f89bed227e3e12"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "a2c6584d773129e4ef34da2f96a5dc88"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "cd99f23ef499c3d0b8910a36e263b4de"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "8e4da0bcb76c9db53528c2231c4da4b3"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "2802082120b3a759346da924f5d79862"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "42d2c3b11f641437411c6a6a4f967dc5"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "7ef302bd45a1e11a7914f3bf52bcb6c5"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "32ddc84b92a82c8e6370c00a8d9e1c6c"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "338598cc6f2b3a360fbed5319f6fd16a"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "4b2d9d18e93ab79a430caa3c3b375cca"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "57c0bbf83bfaeb9a78c614c0e410edcb"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "a06d1911b57cc67faa4e98d2bc23575b"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "8ffb03d2032bef3881b31c3caeb3f673"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "58bacc284321309b67dce4d1b0828895"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "30bae1bb9257623373c53103207e3139"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "652d3265e8514776212b08731faf51c2"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "1037777f2c4aa0f447e44e6d68621e6d"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "7fe1404e8e9b0e951ba4d9e85d10f28e"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "4d0fb7e4e3c5565095129aef6248c461"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "5051a797cbeaf9fc69432393b42fa227"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "980e3f2b0014bbea0835003e5a45934d"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "8adfbd6e346653c9bca5bdc01dd24a8f"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "a3ed0fd2ee92364a23f1eaa349ef446b"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "8f16747a81301d5e4873911f2c01fa0a"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "423c77935b66e58f889d27213a08bbdc"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "db228242b9dffe91178499be93b3da2b"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "f2bbb9951a3f3f69269a6da692d7c026"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "bbb058fea507a276aef16806b506c4f7"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "6af153388f18730d8c0e9b98d39b22dc"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "15b423c923da731f0a3620d3aef475e3"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "102ab9240d47651f8b84edc96646ce43"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "b7e7b594b8eb61aa5370417d330076e4"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "7c4004c14aca8c09f9aacbc33de79be8"
  },
  {
    "url": "kungfu/js/vue_react.html",
    "revision": "0cc501e1a18ed8d1eb3b7ba3453994cf"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "5e283cb163022652d784d93f60276e6b"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "eaa453c083742b25c6a2012d0a5789ab"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "8f3163e81a74f62ae0616ced216b1fef"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "debf44806ff62c5834c90e9dce3ceb3b"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "385619ad5977e99eedc8e74bc1c109e4"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "7e6096c09825cf8b55dd10b3a92e4d42"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "94f30b10561314f9d2c766b71def4c03"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "8ceb50811a2ba82a804133d2abaf3445"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "891c433484d006c94eb4264ce5a67d99"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "a5637d3a1d1fe5a3551ed700ff6cfe05"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "8542e8e84be8fdfd8ab4a5a9f0c9a622"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "a1af92a02e7e2a6924bd849f8cede457"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "ec4f9729c058043e04ff54a4490ec867"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "a900239f4294f703e91899845f1b0ddb"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "d0b0dce159d3b140b30a7add93dfd2fb"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "0d419b82c6037dd54fe6ed3cf23e2dfa"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "30a8fcf5893432e10c1a5e5d8d613e4a"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "ce15aa67b8f12bd13f3b224ef762d5a9"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "e344240ad96188afca3dfe30646938e5"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "e262130656d41e2010a541024ccbf111"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "1b071f119d1fc2cac2b836e54c435c66"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "7bca3b74e34332721ddb9871fc259d73"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "5338c7cfd1595527fa6311c1aefc6ebb"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "312cea2fd00280cca4a9115aca5314cd"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "dc349942890710b5bf7c5e17e8f2fdff"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "c6140fdd82c742fae262e213f486164a"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "85fb876a778cfe476bcddc9054e91e95"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "0c29cba4c2f95d58599c53644b193281"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "e926d2ec28af1c1be6c5d33e62922ad8"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "8cee432ed3eceb28031243eacbcdbb67"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "d9a771d38786b25e62869111ab23585b"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "07c6187a4d7ce7f686143c95f74dd5e2"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "b1f19e7cb01a8f2b374ec32ce8140ee4"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "82b66e7ad13798141f5a58c1e5dd4d61"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "c09b5d9951aa271ff3cb67f413126680"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "87e90db51b684b84d02af4cced2a71b7"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "ea76c4c4da44ef60f52a985dd49b1936"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "9be50bb119f3953badfc935b2bbd1c34"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "3ebeb06b24571a2ef5768200fdcd91f7"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "93165715c308dde5bdffb60395c4a6c6"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "4db3a480a594a454026237e7e8ba4ca9"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "099024452c99f89cd77269f5fd57a857"
  },
  {
    "url": "kungfu/template.html",
    "revision": "cb650033813ba18d9046bbb2f02754e0"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "01d88b0a094383df5baf3a11b4caf4d9"
  },
  {
    "url": "node/env.html",
    "revision": "162fbba6f8cbe910099eb74b68c6335c"
  },
  {
    "url": "node/index.html",
    "revision": "444aa6ad5bc8a521166296527b3fab5f"
  },
  {
    "url": "node/n.html",
    "revision": "1fe5aded51f38ba696b706198d98fd1e"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "af8a60aa2b423fb908b072742da35959"
  },
  {
    "url": "node/npm.html",
    "revision": "2dbd51565cb68658b95e576915b6b7a7"
  },
  {
    "url": "node/sequelize.html",
    "revision": "2da6589c268736e038abd028ce7c1d0d"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "8b2b7eec6a6fa1fa4cf07b0dd36e4704"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "07f111a9546874c6c5cb7a089a614c45"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "47e1526ba52e2d36887f169d6d43ec5d"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "b1a3c910b23b1e2bb7c5683237d360e1"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "c113a715bd03a16104d61febb26cd41e"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "bd1b065473a47c68c95d73954967215c"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "798d38ff61284380c426dcf2d5867c91"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "5f8bead5211e4447cb3b79481e6d4aef"
  },
  {
    "url": "php/clean/di.html",
    "revision": "a1d98e0d3694383fe5c0741866c261e6"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "7f7c5233c93b4043dd581f96229b4e74"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "de04ce2238bd4acdb7a09e8f4d9b62fc"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "490618b2f5f3643e446eb60cdbcb2af8"
  },
  {
    "url": "php/clean/index.html",
    "revision": "776e23f4ec487093e486099480d49e41"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "ddc05c787880cba4e23f48ec25ad6fca"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "e477975919d3c21460eaaf708e185249"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "0046b69a961d63fd77561b44fe8dc762"
  },
  {
    "url": "php/composer.html",
    "revision": "ad7f312070dce64be0481ad787347766"
  },
  {
    "url": "php/crunz.html",
    "revision": "2b7fbc2a875ccfb97798360bb92f2be9"
  },
  {
    "url": "php/laravel.html",
    "revision": "a9e3ae2157eeae6a717599f80e2ea569"
  },
  {
    "url": "php/magic.html",
    "revision": "1bf69a38b8a31e980863cacc500e979a"
  },
  {
    "url": "php/notes.html",
    "revision": "2b9293b40bb6ff85845411f9c45554f8"
  },
  {
    "url": "php/oop.html",
    "revision": "62c040d7de772d4410d881c936a2e1ce"
  },
  {
    "url": "php/php7.html",
    "revision": "2d09664dabb30b50b05792c1396d1b6b"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "1a6b0f50dd7b451bfb7d1a115898f86b"
  },
  {
    "url": "php/reflection.html",
    "revision": "e6daa6d090569bb6f7d2e6329569a648"
  },
  {
    "url": "php/tricks.html",
    "revision": "2793385f71e4fb8514936ccb2da56a71"
  },
  {
    "url": "php/wordpress.html",
    "revision": "5521317b780292dc87521882611fb3ba"
  },
  {
    "url": "quotes.html",
    "revision": "c88410ea56e44af5b1b306144d01e92a"
  },
  {
    "url": "refactor/notes.html",
    "revision": "af91d48aa877fc73ff4d8429feeb27bb"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "fc91f23a10f5392810ee56eb1c757478"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "c0867dcdf5a5baf2d26f90261779efa4"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "9ac2341c43807dca4343e5081b25f529"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "3ca9ee14449a67f8ea7d5ac4ba9a0bc7"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "8b1855da6c78367f54e5f81605eae930"
  },
  {
    "url": "snippets/jest.html",
    "revision": "d481817961ddb4a9606703da01a1a931"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "3130bddf72d3928ebafeb1accc02bf51"
  },
  {
    "url": "snippets/regex.html",
    "revision": "c4bcbd716d5348ce2185a3586033ff8b"
  },
  {
    "url": "terms/12factors.html",
    "revision": "f488c15bcec36f6b684f19f377489e43"
  },
  {
    "url": "terms/architecture.html",
    "revision": "979483a372be6cea779a7d3abd48cfb9"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "1a586deb1616565c3f8055d4d4ec204a"
  },
  {
    "url": "terms/di.html",
    "revision": "1f98c06ea7fef961aec70c9a873e2912"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "903ff6898790a9508e17f08c01d57e19"
  },
  {
    "url": "terms/javascript.html",
    "revision": "dabdebb06fe8db631b931150bb0f4af7"
  },
  {
    "url": "terms/patterns.html",
    "revision": "09533d6abf1b086c47e2990998b707ae"
  },
  {
    "url": "terms/principles.html",
    "revision": "2c14642cd4119a78e57882d1b6782cdd"
  },
  {
    "url": "terms/rules.html",
    "revision": "b7fe9a1dce5a91948d1761b9d10a3010"
  },
  {
    "url": "terms/testing.html",
    "revision": "93b92639388e66da2be16be58dce4d55"
  },
  {
    "url": "tools/chrome.html",
    "revision": "bd8e0eec7e3f939a7ad77c1245e4fa6a"
  },
  {
    "url": "tools/docker.html",
    "revision": "7fb35b493b7abe20d3daa1452eeed7d3"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "5372d8193a461d690c704f11239ef966"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "6b27f58b0a089a7ecd0de3cac132d756"
  },
  {
    "url": "tools/graphql.html",
    "revision": "9afa55f3d565eb886416c2ebf56f06e1"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "bae18f785f0ca0f1d73ddce67a46c804"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "b79b75bc8e8afc563acc229d76a9ca4f"
  },
  {
    "url": "tools/redis.html",
    "revision": "3924dfd1ebffa61a85a4bf36a5ced825"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "2e21b728aa390de150082311f472a09f"
  },
  {
    "url": "tools/vscode.html",
    "revision": "352e0265973dd57861cbe97e34cb09a8"
  },
  {
    "url": "tools/webpack.html",
    "revision": "0d4ca72545ff4d9f55497b2cfc06a2d7"
  },
  {
    "url": "tricks/compare.html",
    "revision": "c69e9e94c8fe3d26841f2270e111121f"
  },
  {
    "url": "tricks/git.html",
    "revision": "6622ef379edf592dc89baadd95c9b4dd"
  },
  {
    "url": "tricks/linux.html",
    "revision": "3957da65e649cf0262bdfdb5649f7ec6"
  },
  {
    "url": "tricks/mac.html",
    "revision": "36b5e63f74ab2875a7e62731956e00d2"
  },
  {
    "url": "tricks/misc.html",
    "revision": "324affb2df3742b6a4bcb34aec4d9810"
  },
  {
    "url": "tricks/setup.html",
    "revision": "490ce7f2d6d6c321c4a558bf3240b2bc"
  },
  {
    "url": "vue/communication.html",
    "revision": "36bd329717acf288ba6b86abb9df44ff"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "059346a83449da9c22b3b63ae2465206"
  },
  {
    "url": "vue/events.html",
    "revision": "d173b9ba9957f72ace110a5cc9a2b7d6"
  },
  {
    "url": "vue/references.html",
    "revision": "79eecdb4c285173b8e18f11a86f85f79"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "f9f76e2dca9efb97a1d8488e6eb42c41"
  },
  {
    "url": "vue/test.html",
    "revision": "de729591d7636ddb7fc3112a33b558f9"
  },
  {
    "url": "vue/tricks.html",
    "revision": "1a06d432c14bbf386ae3f0b33acb66d8"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "0d8694c8eefcb58ee75e91576d3ddfe8"
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
