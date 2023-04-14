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
    "revision": "06132e2231efac14bd37a188a26c713d"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "76be1e0b58d2e6b87e563eb74ec7c16c"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "14305c0b998aa9b8d5cf4f74c911785a"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "931951ae02063718d1f791fa1ffb9697"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "0f93e2690f3c910fdbbb264a4c4aaf68"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "adaa584aa38e88846b1ff7f1350a528d"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "79ded7981fba1e935d5471e5cadd12f9"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "62df106dc853f4a408cba794a7bdcd60"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "1368c7ea12a781a8a572fcc1fcb4321a"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "c8d5c3cc3c2fd0b2a01877992188bc39"
  },
  {
    "url": "algorithm/string.html",
    "revision": "2a57679348752e9347206b3eb1161916"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "e1a173118d70e5db0dbb5791cf565a3b"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "c763a507563f8b1fa600eb2af65ba7d3"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "4f3f7af4f9cdda56326dbd70da37d736"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "a00b2d24772fdc53822d4737f56756df"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "89fe3b95827bb8a551d145b198535197"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "658c699e8dc14eed95daca70c14293dd"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "6c0cafb6ba462474221344304481636a"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "30ae018cb76474ef49e8079fb06e4858"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "c86a48e54a945a7f905668edb9874666"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "230cb896ff33c87f710fa1b801f38ed4"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "637b90ca65cd2a58439812a74a6821ed"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "f66fa97500f5508a7e83effcf146c670"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "65fe610120eed76c3a1f265d5789ae79"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "93613d5d360084a11f42044c7b868bb2"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "a78199d6e13ad9562461f9bb46cc1373"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "7d1cfe1d0a9fdce1f03d919ce76df74f"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "84c5a6bb1de523731254d8b684eebe16"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "8a07edf46eff90ccc430d0ee9ce14dd8"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "2a2cff17704321833307b9b2fd0195af"
  },
  {
    "url": "architect/authenication.html",
    "revision": "78dd5d1c9b72fb3ba31c19e711484126"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "69d090fe8d22be794cb5032d66c77fc7"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "0c310d12dbb5ca688c9ed8cefc454f43"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "31cc11772900e9f6f5032746b5b4813e"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "3bdecc0ead9fab2b6e7df974640ec3fa"
  },
  {
    "url": "architect/ebi.html",
    "revision": "a2a792ba1e5fd29da4a967527a355787"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "d6b9dc660e42061cbd4c96a5220d8da4"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "d473ec2f6c0f6229453327c9d643805a"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "78dcbcd508834bbd70cf8e8c7fea416e"
  },
  {
    "url": "architect/index.html",
    "revision": "e6f82e67b058d15fb232b6be96fc0372"
  },
  {
    "url": "architect/messaging.html",
    "revision": "7c143f32c9d3a1170eeeedaaee00a543"
  },
  {
    "url": "architect/microservices.html",
    "revision": "5736210628223c2c7ff5e3ed13a11c02"
  },
  {
    "url": "architect/mutex.html",
    "revision": "5db03e3009c6ddfbfaec38587389ca1c"
  },
  {
    "url": "architect/notes.html",
    "revision": "7eec0641dea596f4caf789403f316550"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "768f717e8bcf9cef9d0394b09af02422"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "946d2dcb7849524f08daeac361b42633"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "3aeaf5db0e09903da721a05c21541b69"
  },
  {
    "url": "architect/refs.html",
    "revision": "37ac4be3458c35400c50ad035cb34266"
  },
  {
    "url": "architect/restful.html",
    "revision": "79367707e3f8813236e284d8fe178a01"
  },
  {
    "url": "architect/soa.html",
    "revision": "0f6fab2e5f3f485ef31db0ee16c5615e"
  },
  {
    "url": "architect/spa.html",
    "revision": "166c28ff23b1a842a65c61d4baa3874a"
  },
  {
    "url": "architect/terms.html",
    "revision": "465b785ad2b4fe6bc14d7aabfbdf6d2b"
  },
  {
    "url": "architect/webservice.html",
    "revision": "63519dcb9d6f63b5fde8d6868234b333"
  },
  {
    "url": "assets/css/0.styles.9de2ae6b.css",
    "revision": "6019bf8a332b2e4c99c9c9ee4c2694fe"
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
    "url": "assets/js/10.fa10563e.js",
    "revision": "4ffc10d623c0b371e96841cdcda7f1a6"
  },
  {
    "url": "assets/js/100.1285fc37.js",
    "revision": "ecdfb72d6ff387667dc9341703219c4a"
  },
  {
    "url": "assets/js/101.5853f0c8.js",
    "revision": "884cf7f43d6f615a1bc40306612a4ca2"
  },
  {
    "url": "assets/js/102.14947f08.js",
    "revision": "e00ebdae4741f2feabb358424e185a80"
  },
  {
    "url": "assets/js/103.eedef73f.js",
    "revision": "7dedfd9f8b51e3c4affe26b81308a13f"
  },
  {
    "url": "assets/js/104.6ebf28a1.js",
    "revision": "457d5ff4e71e7382bdc6e475d81862b0"
  },
  {
    "url": "assets/js/105.8247eca9.js",
    "revision": "052d681aac34e389ff0883aa616dc40c"
  },
  {
    "url": "assets/js/106.e0a92f60.js",
    "revision": "ffdf5349dd9bf737eec2f3f737191767"
  },
  {
    "url": "assets/js/107.a2e95d69.js",
    "revision": "9db70157698a8f5b13a3931386685729"
  },
  {
    "url": "assets/js/108.b8ab5ee7.js",
    "revision": "5fda42a3ba554f5234566062c79916a5"
  },
  {
    "url": "assets/js/109.cb32bc5a.js",
    "revision": "4ce61e5e4151df628b27d80ce9917f10"
  },
  {
    "url": "assets/js/11.aa3cf9ad.js",
    "revision": "2a4c634b6452cbd8a4ffe653ee11d70d"
  },
  {
    "url": "assets/js/110.99c64cc9.js",
    "revision": "83f91dc35ba235842ea50ee1acb995f1"
  },
  {
    "url": "assets/js/111.002cfac3.js",
    "revision": "2499aff2c62a5aee948413f23fc59064"
  },
  {
    "url": "assets/js/112.d9742a7e.js",
    "revision": "17f881b8e17d6fabdbaf43b6a9ed3174"
  },
  {
    "url": "assets/js/113.58a335bb.js",
    "revision": "3e30df35fdc1b14f6b053caadc7ca246"
  },
  {
    "url": "assets/js/114.18758f73.js",
    "revision": "47db9c5af03b219533c0f1aae724f123"
  },
  {
    "url": "assets/js/115.b36f109c.js",
    "revision": "ad1465a282e1a281e6505307f43c212b"
  },
  {
    "url": "assets/js/116.32435e71.js",
    "revision": "14968d16935bedb0da7ac1a4d4674a9a"
  },
  {
    "url": "assets/js/117.2312e4f9.js",
    "revision": "71ebc7815229c826571fccf6340326f9"
  },
  {
    "url": "assets/js/118.5ab01db6.js",
    "revision": "0c54233ab7f5f899a824eb2baa60d5d0"
  },
  {
    "url": "assets/js/119.9817ed4a.js",
    "revision": "7e5523f0691f4b5bc7bffa0f37e536c8"
  },
  {
    "url": "assets/js/12.d0f92ed9.js",
    "revision": "024d47bb3585fa5a74a092f74318b6f6"
  },
  {
    "url": "assets/js/120.fdf7dec9.js",
    "revision": "05f87cdbe3fe31511cd243469e6f1b01"
  },
  {
    "url": "assets/js/121.0dc435c3.js",
    "revision": "81d6613bf7e5fb3b5fa688b50c06e617"
  },
  {
    "url": "assets/js/122.b8a9e5c0.js",
    "revision": "fedca2c71289aad9d9b718440537a19b"
  },
  {
    "url": "assets/js/123.ccf994de.js",
    "revision": "302bbf4c6e7b9859274b5ff7d336dbe9"
  },
  {
    "url": "assets/js/124.76f86d43.js",
    "revision": "2fbf53c3c60baea4579cc5144ad80aa5"
  },
  {
    "url": "assets/js/125.6daf95f7.js",
    "revision": "977d39580c2ca7172175228883750ff2"
  },
  {
    "url": "assets/js/126.9432a96f.js",
    "revision": "52252cd40f740dd8187aa7215f82ff90"
  },
  {
    "url": "assets/js/127.51451f58.js",
    "revision": "c41c1e6dc679fc282c25b0bb8ff7e7be"
  },
  {
    "url": "assets/js/128.f1e09719.js",
    "revision": "c190bee59de8c9012709d049f2b70b0b"
  },
  {
    "url": "assets/js/129.fdfd1091.js",
    "revision": "ae7a030a5cfa74c1887818c6f1fc1e0a"
  },
  {
    "url": "assets/js/13.43ee630e.js",
    "revision": "c68e324c71d4944b52f864951ec95ce5"
  },
  {
    "url": "assets/js/130.231eab6a.js",
    "revision": "37fd4d2d1c09257bc59e613370360037"
  },
  {
    "url": "assets/js/131.34f1f6c4.js",
    "revision": "deeaa0819d96305fface696755effe37"
  },
  {
    "url": "assets/js/132.21190964.js",
    "revision": "7e20c7de6902e3a9c0bb665d8f5b7a2a"
  },
  {
    "url": "assets/js/133.c395b3ac.js",
    "revision": "f7f32837076bf3ec29e261a84567f221"
  },
  {
    "url": "assets/js/134.fb189893.js",
    "revision": "4bfc46934349aafdf4e81ec419b809de"
  },
  {
    "url": "assets/js/135.4b6791c6.js",
    "revision": "32dc704f4370cad6df23ad6c4e260774"
  },
  {
    "url": "assets/js/136.544b786c.js",
    "revision": "663d6b9f0d357716b7d97676d320dc37"
  },
  {
    "url": "assets/js/137.85c65403.js",
    "revision": "d28355af80095ddada2747ed62b07f81"
  },
  {
    "url": "assets/js/138.42f114c5.js",
    "revision": "43e9cda1521e590a00e3810d2e060439"
  },
  {
    "url": "assets/js/139.ec6f6d37.js",
    "revision": "2830287b7b56d71097fb2bdba55a11b2"
  },
  {
    "url": "assets/js/14.ec42c48a.js",
    "revision": "9d708ea2f0da3c600c7c1dfbe8165f54"
  },
  {
    "url": "assets/js/140.fd31af8e.js",
    "revision": "915b0ad579073040777ac86b22fde376"
  },
  {
    "url": "assets/js/141.d643e3eb.js",
    "revision": "67ac49e173cc1f2ae6054fbbee37433d"
  },
  {
    "url": "assets/js/142.ae20c135.js",
    "revision": "277c03356e67654b765d2bea260c7290"
  },
  {
    "url": "assets/js/143.cc72af2f.js",
    "revision": "45351147fc331a1591957faa2db16bd5"
  },
  {
    "url": "assets/js/144.a843d071.js",
    "revision": "ad06741a02e45623a39d48bdc467e5f3"
  },
  {
    "url": "assets/js/145.07ed48eb.js",
    "revision": "c19eca91ab4319f3bd33df5df9a4fc2d"
  },
  {
    "url": "assets/js/146.04aedde8.js",
    "revision": "50e248d4f2478fdf09844fcdd861eb63"
  },
  {
    "url": "assets/js/147.e625ac6e.js",
    "revision": "0e93ceefd32b6ae0ffb6b9d7e4cb922c"
  },
  {
    "url": "assets/js/148.f22f2b9d.js",
    "revision": "2880f927cfb3377861a9692133f90e57"
  },
  {
    "url": "assets/js/149.935d7310.js",
    "revision": "81960943621ea5d447c9ed793525965c"
  },
  {
    "url": "assets/js/15.a4bfdc8f.js",
    "revision": "76d1a9872c70034fc04f8a80813d02a7"
  },
  {
    "url": "assets/js/150.5eaca133.js",
    "revision": "acd3c0584accb31a51b510e1e7b7ebca"
  },
  {
    "url": "assets/js/151.b963602f.js",
    "revision": "77538fc8bac33ae3f83df61a0c219b66"
  },
  {
    "url": "assets/js/152.9d04049c.js",
    "revision": "e85f68d878099aac708bab86c4501834"
  },
  {
    "url": "assets/js/153.1e2c4fd9.js",
    "revision": "84fe88f10e16bdd33d34081f3f393de5"
  },
  {
    "url": "assets/js/154.e7e8375d.js",
    "revision": "db44fd1ae23ffd16f23d392e9a7302ef"
  },
  {
    "url": "assets/js/155.653946ea.js",
    "revision": "549e52dee0825c907d1f9dd40d7be27f"
  },
  {
    "url": "assets/js/156.bff4286e.js",
    "revision": "54f136028f964facd8fdc14aa881558d"
  },
  {
    "url": "assets/js/157.be42958e.js",
    "revision": "6474d96d489c1c7f35060ed9a4a6d7b2"
  },
  {
    "url": "assets/js/158.ebd25524.js",
    "revision": "611739c344eba951bbd4d65f9d7d50fc"
  },
  {
    "url": "assets/js/159.aed67247.js",
    "revision": "f0688162caf2e1f095c87801405548a2"
  },
  {
    "url": "assets/js/16.4720c27c.js",
    "revision": "d7e047b52a5b18656e21e2bef29b4c2a"
  },
  {
    "url": "assets/js/160.23a56918.js",
    "revision": "ca5426415876b95b1b536a357f0169a9"
  },
  {
    "url": "assets/js/161.6405715b.js",
    "revision": "33596ca722083d3f3313973bdcacaf4d"
  },
  {
    "url": "assets/js/162.c9c90eb1.js",
    "revision": "4a8ea069d538f27a52e0694bf0f1f36d"
  },
  {
    "url": "assets/js/163.23da8012.js",
    "revision": "063050eaa0f7d0b0c321abd0934b1a3c"
  },
  {
    "url": "assets/js/164.8d92da6e.js",
    "revision": "58feefbd001e9c38c39fcac83fafb452"
  },
  {
    "url": "assets/js/165.6df05987.js",
    "revision": "d36ceb3eaa48d3e323fa699a17c441ee"
  },
  {
    "url": "assets/js/166.bbc329a8.js",
    "revision": "a8cfce0977c2ba73e07ed65ff234b10a"
  },
  {
    "url": "assets/js/167.5bfd5893.js",
    "revision": "62e90f37b32fb7793f27d8e11b642338"
  },
  {
    "url": "assets/js/168.7e40ae08.js",
    "revision": "8b07d65cf740aa501741f87b8030e777"
  },
  {
    "url": "assets/js/169.c9c786d3.js",
    "revision": "f73c385132afc18b73a6d033e41265da"
  },
  {
    "url": "assets/js/17.b5e43039.js",
    "revision": "c0ceed5ed15caeccb5a3f551b83391cd"
  },
  {
    "url": "assets/js/170.7cc35885.js",
    "revision": "f2d8868ab8abef51a61e461b1d273b1a"
  },
  {
    "url": "assets/js/171.a1050fe3.js",
    "revision": "56e4a9b65b9e0216f47c7216952f3fe6"
  },
  {
    "url": "assets/js/172.88dc7f11.js",
    "revision": "d9c987f776ffb06b33c8ae16f10aabdc"
  },
  {
    "url": "assets/js/173.268dd864.js",
    "revision": "c5d81573a43d2548f00ca0106d4a1889"
  },
  {
    "url": "assets/js/174.428b02cc.js",
    "revision": "d2f3abca2ccb2773f3e7e013c328933f"
  },
  {
    "url": "assets/js/175.b23a7b13.js",
    "revision": "ab232fc1926b4784d29908a78cc0eab0"
  },
  {
    "url": "assets/js/176.9f0d374a.js",
    "revision": "c9b9b81d3e0c8cb5c8d522dc7b62dddf"
  },
  {
    "url": "assets/js/177.ac5fab21.js",
    "revision": "87475343891dc0170dcda8f1b069c67b"
  },
  {
    "url": "assets/js/178.0ade85af.js",
    "revision": "c3aad2fdf4b2b1725367713d4e49892a"
  },
  {
    "url": "assets/js/179.a314811e.js",
    "revision": "4a6d9dea9e5899246a476c5c570aec12"
  },
  {
    "url": "assets/js/18.236eac9b.js",
    "revision": "4b8ae342b30eba040294da85d99a33a3"
  },
  {
    "url": "assets/js/180.72ffa286.js",
    "revision": "ff86b87f2a9479d61a7a1c5d8ccccad6"
  },
  {
    "url": "assets/js/181.34c8698c.js",
    "revision": "071f5dd634fcdf043a5e5539a571fec9"
  },
  {
    "url": "assets/js/182.204dd43e.js",
    "revision": "8c83544cd62321b07130059df662714f"
  },
  {
    "url": "assets/js/183.268b0c50.js",
    "revision": "a4d1bcfaa510e184a3606de0efd917c3"
  },
  {
    "url": "assets/js/184.990ef22b.js",
    "revision": "0b27c766f5837a142d047b5ed5dd1811"
  },
  {
    "url": "assets/js/185.ccfe060a.js",
    "revision": "a1c0d517cd15278955315c4d5443a20e"
  },
  {
    "url": "assets/js/186.2dfc1f76.js",
    "revision": "a29869053ec71104f65ecbcd71ee11b0"
  },
  {
    "url": "assets/js/187.d3531344.js",
    "revision": "7b6f940145397b9f802d8ca71787db53"
  },
  {
    "url": "assets/js/188.0dd4e3dd.js",
    "revision": "59c047102f9c8c1f360ec60c9b304fff"
  },
  {
    "url": "assets/js/189.8cac3ad9.js",
    "revision": "61eb2604c7af5b6762db46971cfd1921"
  },
  {
    "url": "assets/js/19.870da1b6.js",
    "revision": "e3075001f06e6bbeffafc8703eb53782"
  },
  {
    "url": "assets/js/190.3a78b67f.js",
    "revision": "8b2529880798a7483deb66832b24183b"
  },
  {
    "url": "assets/js/191.29f4869a.js",
    "revision": "58140aa841829b46c1dc51ab5d45ca3a"
  },
  {
    "url": "assets/js/192.4683553c.js",
    "revision": "75e1a7ef1441f04f05e3fa96e8fb665a"
  },
  {
    "url": "assets/js/193.f2009a4f.js",
    "revision": "94f97869490e718781d66f732fa5d5f8"
  },
  {
    "url": "assets/js/194.7a6419c5.js",
    "revision": "d9a4e9dbdad17ccb00b02ec8e863947f"
  },
  {
    "url": "assets/js/195.a0595b65.js",
    "revision": "55a1db81c77200685af38b1ad2e325aa"
  },
  {
    "url": "assets/js/196.7cea88b1.js",
    "revision": "e5c570648ae80a80695f0387a6343fb1"
  },
  {
    "url": "assets/js/197.610962f7.js",
    "revision": "4d8708ff0a2a298355b95a393a690aa6"
  },
  {
    "url": "assets/js/198.1b9cf97c.js",
    "revision": "51478f93a70992a86c2e532bee81ae10"
  },
  {
    "url": "assets/js/199.ae7edb4b.js",
    "revision": "84a9f74215e3462f92d055b8b206df28"
  },
  {
    "url": "assets/js/2.526906d0.js",
    "revision": "4b1acac5646e4bdba3959ae1486c6041"
  },
  {
    "url": "assets/js/20.ac99c917.js",
    "revision": "cbcbad50f28e0d6dc7e8d16412a9e5a6"
  },
  {
    "url": "assets/js/200.d5b21697.js",
    "revision": "64645df3ef4528c38b6c4668342e57ed"
  },
  {
    "url": "assets/js/201.c8522e37.js",
    "revision": "585da39ab9b1b3e56181eb77d571b24f"
  },
  {
    "url": "assets/js/202.10970081.js",
    "revision": "7926fd6a3339c425dd932483d5762312"
  },
  {
    "url": "assets/js/203.1d22f4b7.js",
    "revision": "aec7db410bd7371d972e01c90c0c5b7d"
  },
  {
    "url": "assets/js/204.c86ec1dc.js",
    "revision": "d9584bed78f2aeaa504576dbe1020cba"
  },
  {
    "url": "assets/js/205.c8459f20.js",
    "revision": "b3183b46b078d0694ffabb6242b213ea"
  },
  {
    "url": "assets/js/206.a64e9c88.js",
    "revision": "d7a2e2bc4895cdc2017797d20b59c206"
  },
  {
    "url": "assets/js/207.b826a43b.js",
    "revision": "6f40ccbb62acf1e93be9eecec02e9d44"
  },
  {
    "url": "assets/js/208.451c57f7.js",
    "revision": "2ea391362a688b5c38d922b186eb4e04"
  },
  {
    "url": "assets/js/209.a4e10d56.js",
    "revision": "df00ceb31a51bcd12812d2ff3b3433d5"
  },
  {
    "url": "assets/js/21.9700635a.js",
    "revision": "0299ec39fbc6a7e010fc979fc9c3c815"
  },
  {
    "url": "assets/js/210.1243fca4.js",
    "revision": "ffbe07be4e3058fd0b49dcb9438bfea9"
  },
  {
    "url": "assets/js/211.ab599b51.js",
    "revision": "699cfec8ca11c962dff1c56438e0ed88"
  },
  {
    "url": "assets/js/212.2b446545.js",
    "revision": "dbb5654f61d4d84e9ab086fb41a0c2d9"
  },
  {
    "url": "assets/js/213.2d04c674.js",
    "revision": "eb7edd687e6c0d595fe471fb400e56e1"
  },
  {
    "url": "assets/js/214.4255eca7.js",
    "revision": "9fd6058805a300070ffee8fbe9c77788"
  },
  {
    "url": "assets/js/215.4a287c2e.js",
    "revision": "d51b5cff26346a3041503b9718ed5911"
  },
  {
    "url": "assets/js/216.d2808fbc.js",
    "revision": "935878d9c214ab138782801a98fca8ad"
  },
  {
    "url": "assets/js/217.1e5d1994.js",
    "revision": "40c813c9578c42935c315f0eb65a259d"
  },
  {
    "url": "assets/js/218.912dcf28.js",
    "revision": "7b1b986e8e25573339d135c0d0de89b2"
  },
  {
    "url": "assets/js/219.f24c3ffa.js",
    "revision": "bf36d740dbc9a255dc62e4c5fcd47a7f"
  },
  {
    "url": "assets/js/22.99d0535e.js",
    "revision": "acd6e7d28358ed0f737ed70164e30ec4"
  },
  {
    "url": "assets/js/220.ddbe9954.js",
    "revision": "e8733314a20f4ce0fbefa0d5402d9235"
  },
  {
    "url": "assets/js/221.fae86b84.js",
    "revision": "ce22b86a45ac45d95ebfef8447e7581e"
  },
  {
    "url": "assets/js/222.1e01304b.js",
    "revision": "483bf72eeba3b7304bfc5321c0beeca5"
  },
  {
    "url": "assets/js/223.2293b384.js",
    "revision": "c4fc3f883b7c58c070c29cf2a2a963df"
  },
  {
    "url": "assets/js/224.cf0edbe9.js",
    "revision": "115fbdd05aa20b220a109321bd883d6d"
  },
  {
    "url": "assets/js/225.99e6607a.js",
    "revision": "6440d5dd24517bbaaa65a6917f023664"
  },
  {
    "url": "assets/js/226.70c727bb.js",
    "revision": "2167c3ce50a7080232159bfdfff624ae"
  },
  {
    "url": "assets/js/227.29b3590f.js",
    "revision": "570faebcdcfe0c6a5d50ca32b3e411cd"
  },
  {
    "url": "assets/js/228.4580803f.js",
    "revision": "8b155acb2e63add99c849bde389243ba"
  },
  {
    "url": "assets/js/229.a1af2972.js",
    "revision": "79a317cb778272697bcdb94c15cb5a88"
  },
  {
    "url": "assets/js/23.0a1fef30.js",
    "revision": "0441e1f203d04d64f68c810cb3e1e5a9"
  },
  {
    "url": "assets/js/230.e530df89.js",
    "revision": "d1964c152efe3e9dcfd2dcc80b0c4717"
  },
  {
    "url": "assets/js/231.695d8d4c.js",
    "revision": "6eb68f0b9791336f89f3ff35aaef871b"
  },
  {
    "url": "assets/js/232.723797c5.js",
    "revision": "c2a8570b4e9a773d4bce696a783cec4c"
  },
  {
    "url": "assets/js/233.4214e3ea.js",
    "revision": "c62e98a145c4741268fc99a2680c7148"
  },
  {
    "url": "assets/js/234.b9c78ac4.js",
    "revision": "5477512461e721f0998a3ae2643cd4a4"
  },
  {
    "url": "assets/js/235.d670a834.js",
    "revision": "5b175f34763f881e8f7f04b971d5ec8b"
  },
  {
    "url": "assets/js/236.8160ac00.js",
    "revision": "96bdfc5bcbe0dbeed580b14adcce0265"
  },
  {
    "url": "assets/js/237.d797f3c2.js",
    "revision": "f5abf1a1b14bf84be0a651025a660193"
  },
  {
    "url": "assets/js/238.96cb118a.js",
    "revision": "23743e68448010d6903dfe4bb6a1dac3"
  },
  {
    "url": "assets/js/239.9366b744.js",
    "revision": "990505ff2c981065153aeecb232aecf6"
  },
  {
    "url": "assets/js/24.5d9db548.js",
    "revision": "4e3d7dbe29d46181c7261909ec12997d"
  },
  {
    "url": "assets/js/240.34eb748a.js",
    "revision": "643133fce8ac29abb11d35b251aafd79"
  },
  {
    "url": "assets/js/241.07fc7309.js",
    "revision": "2bb0dbfc6cefaa2e16c51f96921a7d99"
  },
  {
    "url": "assets/js/242.c8e348dc.js",
    "revision": "7ee68cd665fcfa8cddb59c846fee5abd"
  },
  {
    "url": "assets/js/243.232f7f10.js",
    "revision": "00a5cb1a248645ca5b7350848842684f"
  },
  {
    "url": "assets/js/244.9c363e8e.js",
    "revision": "010f95e1d980fd83133b4486f75f3415"
  },
  {
    "url": "assets/js/245.d331d3a2.js",
    "revision": "d2140582f389b87cc2724d0fb9e61676"
  },
  {
    "url": "assets/js/246.d0b4ebd9.js",
    "revision": "30ab9d7e2a71857720a90cfe53a6ecf4"
  },
  {
    "url": "assets/js/247.1c62806d.js",
    "revision": "1b15647f0d7687e2a7db908bc78b4b14"
  },
  {
    "url": "assets/js/248.15994b86.js",
    "revision": "918d4df8762daa7ee2cefc7c40a6ef0d"
  },
  {
    "url": "assets/js/249.23ae8c2b.js",
    "revision": "0bca59ced6adcdb8461bc965169bd257"
  },
  {
    "url": "assets/js/25.17083267.js",
    "revision": "b3cf5f077ddb4d68e1306b57eee8cd7a"
  },
  {
    "url": "assets/js/250.a0ef65c9.js",
    "revision": "6ea105db9690c7c081257b96381d4701"
  },
  {
    "url": "assets/js/251.a39b3f09.js",
    "revision": "96142a4ab13d9819aed8c9fd641ca064"
  },
  {
    "url": "assets/js/252.a4263213.js",
    "revision": "1aad234f0a1831b3a7f146caf6cd08a5"
  },
  {
    "url": "assets/js/253.d58d446a.js",
    "revision": "3c4284f1682d5571143d8e4ea16c1c67"
  },
  {
    "url": "assets/js/254.2ced0654.js",
    "revision": "2874f38c55084412c99359ff6897b058"
  },
  {
    "url": "assets/js/255.a9eb57fa.js",
    "revision": "4f8ed96370f7d8c60fa4fe705bc8963e"
  },
  {
    "url": "assets/js/256.675f310f.js",
    "revision": "bbb5348b61697bd29641d62deb3a77de"
  },
  {
    "url": "assets/js/257.9451bb0e.js",
    "revision": "5c00f98a421da0307ce293aaf2de3fee"
  },
  {
    "url": "assets/js/258.a62b2666.js",
    "revision": "31ca68faa171e0d337aa4bd412cf4be7"
  },
  {
    "url": "assets/js/259.46629270.js",
    "revision": "84c58d6f5095f6ac8ea4117ef4c97515"
  },
  {
    "url": "assets/js/26.45e7ccba.js",
    "revision": "1fab513c3c97849b8de9ad1ec48183d2"
  },
  {
    "url": "assets/js/260.eb2d3987.js",
    "revision": "7917c6520d55eb1eb4f0ccdd528817b8"
  },
  {
    "url": "assets/js/261.943e787c.js",
    "revision": "c4675e953b9c2b2af5f973cc694f73f0"
  },
  {
    "url": "assets/js/262.b2b08a96.js",
    "revision": "196dae97590edd55419cca08a706450f"
  },
  {
    "url": "assets/js/263.f6503db6.js",
    "revision": "6508cc9ac1b0476e5eb7727ea4b2f0b2"
  },
  {
    "url": "assets/js/264.6e25c871.js",
    "revision": "a1001864ee77fc8b11747f5db6c2b28e"
  },
  {
    "url": "assets/js/265.7dcd4ace.js",
    "revision": "d2db3cd59a47f7f969de3583b86e1807"
  },
  {
    "url": "assets/js/266.db70cf1c.js",
    "revision": "8b7e4b2eafbe2c17a85b73cda8295938"
  },
  {
    "url": "assets/js/267.e38d7f38.js",
    "revision": "2677f0b9cc16db378b2c939813d3be57"
  },
  {
    "url": "assets/js/268.b195c270.js",
    "revision": "385ff3e21c0b39e70133c04ea0656ad0"
  },
  {
    "url": "assets/js/269.9cefc827.js",
    "revision": "7e83718c833e3eb76850393ac2683f71"
  },
  {
    "url": "assets/js/27.c3368cd5.js",
    "revision": "527cf55feaaf3e423bdb1f725ab6c40a"
  },
  {
    "url": "assets/js/270.e0c6427b.js",
    "revision": "c2c00e6e0c7c4bd78de2e19e4a22b5df"
  },
  {
    "url": "assets/js/271.9523f2a5.js",
    "revision": "231a20ca33af04b5950b8bd02bddabce"
  },
  {
    "url": "assets/js/272.b302333f.js",
    "revision": "1beff6c676414f73ce395b2d9c77c081"
  },
  {
    "url": "assets/js/273.405b8ff3.js",
    "revision": "d1aef84f4066be4446fa0b7cf256e4c3"
  },
  {
    "url": "assets/js/274.8a7bf25a.js",
    "revision": "27193f226cdf8ad8b5551bd77104be36"
  },
  {
    "url": "assets/js/275.7b286891.js",
    "revision": "c2ea0a029e6ffb3c63e9ec716592dbd7"
  },
  {
    "url": "assets/js/276.cfb37ecb.js",
    "revision": "cf9aa93bb36a596d21fa021b55893d13"
  },
  {
    "url": "assets/js/277.cf4b7bb3.js",
    "revision": "9ba3124399e1b3f635cec35c82d3d886"
  },
  {
    "url": "assets/js/278.e7a6ed43.js",
    "revision": "087b468eec00806b8b2c961b201e3388"
  },
  {
    "url": "assets/js/279.d481e512.js",
    "revision": "34b138860997cb375385353a56496989"
  },
  {
    "url": "assets/js/28.4b0df9a1.js",
    "revision": "8a9e6c8e200d3c0d30a75db2527cf69c"
  },
  {
    "url": "assets/js/280.4bffb29d.js",
    "revision": "4d7b33b7c9f07af73de66e9732320c70"
  },
  {
    "url": "assets/js/281.f0c660a8.js",
    "revision": "dca6276c60f1aa3fbe7574bf0425ff3e"
  },
  {
    "url": "assets/js/282.de8bd472.js",
    "revision": "897eb0cedfbaa755f48bb14ac4526c95"
  },
  {
    "url": "assets/js/283.2794fafc.js",
    "revision": "c70e1a16562189500dc4fa2988316a8a"
  },
  {
    "url": "assets/js/284.b757c094.js",
    "revision": "9575bc3550317c8381f50b8f22ee07d6"
  },
  {
    "url": "assets/js/285.dff4b65e.js",
    "revision": "b107cb5f4fa0fc63b380abda09a4bce9"
  },
  {
    "url": "assets/js/286.cace995c.js",
    "revision": "0b9f4711f28bf1c0c7eddbc68ac7ac76"
  },
  {
    "url": "assets/js/287.2f88f092.js",
    "revision": "473ee5e20cc8c0c572a00e232b59fc21"
  },
  {
    "url": "assets/js/288.8c1751fb.js",
    "revision": "7e65f93118c02e5ebc1e4a49a917cbaf"
  },
  {
    "url": "assets/js/289.1ba781ca.js",
    "revision": "196e537b548643cfad636432ae91d99d"
  },
  {
    "url": "assets/js/29.23a1facf.js",
    "revision": "f299afab49417933336bbec5373524cc"
  },
  {
    "url": "assets/js/290.198c374e.js",
    "revision": "f866964b100e9aaf220e23f053bf8606"
  },
  {
    "url": "assets/js/291.394d0dac.js",
    "revision": "a8ec2a705d6f80967cf4a7b372ba28c7"
  },
  {
    "url": "assets/js/292.5c10d93d.js",
    "revision": "93ba827a30aedeef1fde3848ca3bde73"
  },
  {
    "url": "assets/js/293.f6c45566.js",
    "revision": "f2ae9c112112add10cceb0aa834db6d6"
  },
  {
    "url": "assets/js/294.9c57a899.js",
    "revision": "c1a652658c67622e7b0c5b10ab83b18a"
  },
  {
    "url": "assets/js/295.b60e9918.js",
    "revision": "deb91a8c7d0fb589b7fa02e421a66af8"
  },
  {
    "url": "assets/js/296.bb2bdcc0.js",
    "revision": "5a375221a55ee61eca5fa240f97d2642"
  },
  {
    "url": "assets/js/297.59e1a4d3.js",
    "revision": "be9332e76580f925bb74b85956bccb94"
  },
  {
    "url": "assets/js/298.f29aa7a9.js",
    "revision": "13a845b04391f525bf261ee5f4ad2cfc"
  },
  {
    "url": "assets/js/299.de6fd03b.js",
    "revision": "9da743fa46ebce8b9588ddfafa473f74"
  },
  {
    "url": "assets/js/3.40b35a08.js",
    "revision": "9af125cff634c56cbda1fd383fded9eb"
  },
  {
    "url": "assets/js/30.ea3abbe2.js",
    "revision": "39d59756c48b6cfc6821358ea57c15ab"
  },
  {
    "url": "assets/js/300.4f79bd3c.js",
    "revision": "780e1dce06c4a1ddde03aa9cd3106e8d"
  },
  {
    "url": "assets/js/301.ac541b45.js",
    "revision": "2f631fd9f3b2b69bfc9cf2eace70e1b9"
  },
  {
    "url": "assets/js/302.cd146d2c.js",
    "revision": "74da9a436f2c5ed262d5b684d6ed356d"
  },
  {
    "url": "assets/js/303.752ab7e9.js",
    "revision": "cc529f723aae696f4144bc91ab15eba2"
  },
  {
    "url": "assets/js/304.1946aa84.js",
    "revision": "56197828999ac0e45bc646fe0d86476d"
  },
  {
    "url": "assets/js/305.db246717.js",
    "revision": "fdeba6708907eb8160cccece56570a7e"
  },
  {
    "url": "assets/js/306.d66540a4.js",
    "revision": "57d38380ab3422f091c37a6ba67cadff"
  },
  {
    "url": "assets/js/307.5cdc219b.js",
    "revision": "2bbbcb5c84fb586b5c1a5399299b8a8a"
  },
  {
    "url": "assets/js/308.88fec5bf.js",
    "revision": "2a3bb3f47f5b5157d30ffa83931d61d8"
  },
  {
    "url": "assets/js/309.ed393238.js",
    "revision": "d1902cfbbec6dfa574566591710919c8"
  },
  {
    "url": "assets/js/31.b578ec38.js",
    "revision": "4cbc9ee70187210ac4578c9fd4130eb9"
  },
  {
    "url": "assets/js/310.7678da7c.js",
    "revision": "649e751a6ace2f1d24cabaedb1d70da2"
  },
  {
    "url": "assets/js/311.ff120a3e.js",
    "revision": "14b905174d1487e1e0fe593153953526"
  },
  {
    "url": "assets/js/312.263c55a8.js",
    "revision": "201445751ccc36a278309a17d610e358"
  },
  {
    "url": "assets/js/313.dad7e8cb.js",
    "revision": "71baa0d5b601e584f09078cac6f0fb52"
  },
  {
    "url": "assets/js/314.e5aa750e.js",
    "revision": "256e6c95c79286dc68159c11ae5bdbce"
  },
  {
    "url": "assets/js/315.f513cd89.js",
    "revision": "506cba7b1d78a48f9a22b99d283e2d3d"
  },
  {
    "url": "assets/js/316.9d103024.js",
    "revision": "2e2a22543fff392a20e67ec03980386a"
  },
  {
    "url": "assets/js/317.42aa493a.js",
    "revision": "8b131703d7b356fdbffb24c91e6672ad"
  },
  {
    "url": "assets/js/318.d4ba5809.js",
    "revision": "56e821f2d36a95928e34ac871f8f770b"
  },
  {
    "url": "assets/js/319.e0150713.js",
    "revision": "9d13e62489c52bbeb7bc9ef7f0dc508f"
  },
  {
    "url": "assets/js/32.27a4efc5.js",
    "revision": "90a9cfba2ed2141aef5221f7f2c595ab"
  },
  {
    "url": "assets/js/320.daf9d0e8.js",
    "revision": "b79643e07a09d84a77de96d41a8e0db9"
  },
  {
    "url": "assets/js/321.32869f6a.js",
    "revision": "8c429ae0271e182e04cb9e77b85cf79e"
  },
  {
    "url": "assets/js/322.ee28b063.js",
    "revision": "569c2166c09aa4cc690ac914bf63f354"
  },
  {
    "url": "assets/js/323.ba3c8ef0.js",
    "revision": "377e792ad2a92ff9483af58fc9a6dc0b"
  },
  {
    "url": "assets/js/324.f3216097.js",
    "revision": "de5e7ec62680a373697aaf422ec9aab6"
  },
  {
    "url": "assets/js/325.49270213.js",
    "revision": "f666c180c23ec3345e1a119c94bca46f"
  },
  {
    "url": "assets/js/326.9cffb867.js",
    "revision": "360a7194b64db3bc9db897dce97b0311"
  },
  {
    "url": "assets/js/327.5c8ee914.js",
    "revision": "f72d98901fb4b601404075ae0930b77d"
  },
  {
    "url": "assets/js/328.fc9b44fd.js",
    "revision": "96f1eea92c75fb82d983135aaff1319c"
  },
  {
    "url": "assets/js/329.ca36cc25.js",
    "revision": "013384da5d05c69f7367c3ceec94ea82"
  },
  {
    "url": "assets/js/33.4571a7ca.js",
    "revision": "b6e3f787c0c686f27e7ed1ca6081590e"
  },
  {
    "url": "assets/js/330.1646e0df.js",
    "revision": "db9094291f2d86dee11d2c67ffe56eb1"
  },
  {
    "url": "assets/js/331.d36e23c8.js",
    "revision": "cd6b8f4455d68f1d37a457053029f4ce"
  },
  {
    "url": "assets/js/332.b8c06e40.js",
    "revision": "83092939f7d1e2fb00ed3161df02b67e"
  },
  {
    "url": "assets/js/333.b31b0760.js",
    "revision": "f5ca3dd292d697925da8d638be055b74"
  },
  {
    "url": "assets/js/334.ded77a92.js",
    "revision": "a278540eecc919c2ac54b8a5e3cf99bf"
  },
  {
    "url": "assets/js/335.ecd63800.js",
    "revision": "28ee12893949539364dab6645880ff19"
  },
  {
    "url": "assets/js/336.cfc3a1b1.js",
    "revision": "25379f57fca797721bc829dc397e79e2"
  },
  {
    "url": "assets/js/337.ec1a805a.js",
    "revision": "d7954fbfdc6ca2c0e66e4eaa602501a4"
  },
  {
    "url": "assets/js/338.c6297685.js",
    "revision": "e5ec63410fab8202264fa7788a0d3d02"
  },
  {
    "url": "assets/js/339.6f7d7fad.js",
    "revision": "3efa6161b09f7fd79a2ab07a6bf155c4"
  },
  {
    "url": "assets/js/34.88d9d4a7.js",
    "revision": "19ca7891e103392357a6d6bd7dadc256"
  },
  {
    "url": "assets/js/340.450165c2.js",
    "revision": "952a9446a28ac2441255cefefaef3feb"
  },
  {
    "url": "assets/js/341.f083938a.js",
    "revision": "b32fd50afa5b7d97a34da731e86da3b4"
  },
  {
    "url": "assets/js/342.60795545.js",
    "revision": "240dd098ec5ddc721cafa9ddfe3df7d6"
  },
  {
    "url": "assets/js/343.98612b34.js",
    "revision": "5ab70ac48768d5a52aeafdb5b49cbfd8"
  },
  {
    "url": "assets/js/344.e87e5e75.js",
    "revision": "06a61ee0f3decddb4a3a60e26ff7fb45"
  },
  {
    "url": "assets/js/345.4dd90f7d.js",
    "revision": "071fe9553d88c15a9f659239c1dbe59a"
  },
  {
    "url": "assets/js/346.50264d34.js",
    "revision": "6629257d8b94e82d8080d497f1c43bde"
  },
  {
    "url": "assets/js/347.bd806f45.js",
    "revision": "a1228328929059bb821bf5f3b8d46c18"
  },
  {
    "url": "assets/js/348.7be25205.js",
    "revision": "68c485f03518eeb90815ff6b31be4816"
  },
  {
    "url": "assets/js/349.b2c73e42.js",
    "revision": "0e8143359910eaf926b13127642043c9"
  },
  {
    "url": "assets/js/35.8449084a.js",
    "revision": "1e2efaa0cc4dd8be936ad841c0280520"
  },
  {
    "url": "assets/js/350.2a9facf4.js",
    "revision": "5f947ec56f3b2e52706b9cc0b189d6af"
  },
  {
    "url": "assets/js/351.55db62e2.js",
    "revision": "6e6e7c6eccbf53debeab4272dac33697"
  },
  {
    "url": "assets/js/352.bc85525c.js",
    "revision": "37cbbe6ab3dd11ef420b8b38be6234ca"
  },
  {
    "url": "assets/js/353.95415983.js",
    "revision": "6a4f4ba158c806e8f5fc6c1f531fe52c"
  },
  {
    "url": "assets/js/354.c9e70894.js",
    "revision": "c9c041d04b9568ff8d3fcfe9debfc8c9"
  },
  {
    "url": "assets/js/355.bf285a39.js",
    "revision": "cfe85b8fe73efd599673d91aef949047"
  },
  {
    "url": "assets/js/356.94004127.js",
    "revision": "464704871af1427933e4b2e14617ebed"
  },
  {
    "url": "assets/js/357.8d1b7093.js",
    "revision": "fdd733f914920a4474035f401ee4a84a"
  },
  {
    "url": "assets/js/358.47a8bca5.js",
    "revision": "76dc96c14c76dc804102e33354215958"
  },
  {
    "url": "assets/js/359.e365992d.js",
    "revision": "34e305876c2f705eda4af2349c3fbb39"
  },
  {
    "url": "assets/js/36.be0e7ab3.js",
    "revision": "dda20344891dfbc3381c8d23b4d3cb1d"
  },
  {
    "url": "assets/js/360.6a833e9c.js",
    "revision": "4f0a9c621b71bb146fb45aeac841f648"
  },
  {
    "url": "assets/js/361.51d965f2.js",
    "revision": "1fbaf0eb5e47c3cff1b666582fdda1ae"
  },
  {
    "url": "assets/js/362.a982aca0.js",
    "revision": "4cbbce0249362e35b652728556c6fa88"
  },
  {
    "url": "assets/js/363.a9f41bfb.js",
    "revision": "d806702b9c35e8e26b10b03b44e603cd"
  },
  {
    "url": "assets/js/364.fa7f3a11.js",
    "revision": "8fd010dd3b5f9b543b81e18238215fa4"
  },
  {
    "url": "assets/js/365.2d874e0c.js",
    "revision": "38b91eb9c47e2508dc72dae6c604ec48"
  },
  {
    "url": "assets/js/366.339d2f72.js",
    "revision": "7b6d5949f77925441186343059cb81d2"
  },
  {
    "url": "assets/js/367.af01c250.js",
    "revision": "9f8608d1feb579a82b2f2e1e6c6747cd"
  },
  {
    "url": "assets/js/368.1ec7ea39.js",
    "revision": "bc6905907884c3752c0324ba93bb727c"
  },
  {
    "url": "assets/js/369.d0ef873a.js",
    "revision": "2b3c952f8b6e2e0322bc9f807759f3f8"
  },
  {
    "url": "assets/js/37.71f83c40.js",
    "revision": "c09b7db584a3688e5166a1423ddf1b0f"
  },
  {
    "url": "assets/js/370.e4404cd5.js",
    "revision": "89d932f2ea3d6d75bb17e48c01e43698"
  },
  {
    "url": "assets/js/371.5143139f.js",
    "revision": "d6aaf5d0814e324ea6ba65e30bd10e60"
  },
  {
    "url": "assets/js/372.a81c477d.js",
    "revision": "5c92c5f146328b4164641f170c739beb"
  },
  {
    "url": "assets/js/373.c6297bf7.js",
    "revision": "d0136ae6bfd9c10355f85fab8c48fd38"
  },
  {
    "url": "assets/js/374.832d2967.js",
    "revision": "cf5e4fa2e79c59c4c76ad90ed27c0fff"
  },
  {
    "url": "assets/js/375.342af9ec.js",
    "revision": "c51a05408c7427ab7214c107758766e8"
  },
  {
    "url": "assets/js/376.a735b2b5.js",
    "revision": "64a7915d67c407a082086149d2bc7c08"
  },
  {
    "url": "assets/js/377.5a021fd0.js",
    "revision": "e0f37c005b0e4704dda19deae51ca405"
  },
  {
    "url": "assets/js/378.612799df.js",
    "revision": "978363c30a82d8a89239014ec308646d"
  },
  {
    "url": "assets/js/379.bd063b33.js",
    "revision": "ffed2166da9cd6be8d7f4a417f62e595"
  },
  {
    "url": "assets/js/38.5361a0f1.js",
    "revision": "64bc44f839dafec54f630b70af81f850"
  },
  {
    "url": "assets/js/380.f138c36c.js",
    "revision": "8833701f09de4872b5fc5385a0555f21"
  },
  {
    "url": "assets/js/381.10d17cfe.js",
    "revision": "88b285de743040716c98e5342db43efa"
  },
  {
    "url": "assets/js/382.7c4da1b1.js",
    "revision": "da0244eab9f4fc1100bfb820439ae2f9"
  },
  {
    "url": "assets/js/383.62bc6801.js",
    "revision": "d7b13b4f3d3c8a9d620727795c74d47f"
  },
  {
    "url": "assets/js/384.6067baee.js",
    "revision": "18eb6e9115bd351314c1a3d6e4cceb95"
  },
  {
    "url": "assets/js/385.d3209a2e.js",
    "revision": "7bdf1e5e4a7b5fc9cf6fbbc714049c36"
  },
  {
    "url": "assets/js/386.bd4ebb52.js",
    "revision": "9ba8a0b5a3cb4cea0d36fa57102b2e0a"
  },
  {
    "url": "assets/js/387.d1116f8d.js",
    "revision": "1c29179ed9fe26818b35fc105e749b43"
  },
  {
    "url": "assets/js/388.e9316907.js",
    "revision": "ae3228e7463bbc3a7dec6a39a1cb0c75"
  },
  {
    "url": "assets/js/389.6bfe2e52.js",
    "revision": "1f497c50c4d7b84b0e660445f7636eb7"
  },
  {
    "url": "assets/js/39.cd7c557c.js",
    "revision": "34385844b94500c8132ca21770424f7b"
  },
  {
    "url": "assets/js/390.bf3f99d9.js",
    "revision": "89be3feba226846b3b5263bdf0432e4b"
  },
  {
    "url": "assets/js/391.2fcbd148.js",
    "revision": "01edd79f6b951af76799310588642e84"
  },
  {
    "url": "assets/js/392.461f96ad.js",
    "revision": "654edf8a4c2f0b94c0d7fe93e412ec33"
  },
  {
    "url": "assets/js/393.f75e4515.js",
    "revision": "9093a6b6bf5d7f469684df92e4a098b9"
  },
  {
    "url": "assets/js/394.ea8f110c.js",
    "revision": "05d2f12fff9990e6ec2a3081e79c24f7"
  },
  {
    "url": "assets/js/395.6dffc1a5.js",
    "revision": "67a925232ea32667ac202f30c8c5b77b"
  },
  {
    "url": "assets/js/396.183754ea.js",
    "revision": "e5e8e988e2c814b80b463b59b11ccbbf"
  },
  {
    "url": "assets/js/397.d8430a21.js",
    "revision": "36c9f6e2ac6f77ebf226750ce07bf527"
  },
  {
    "url": "assets/js/4.bb198850.js",
    "revision": "172c543cd4234eb03866b27489a7ec07"
  },
  {
    "url": "assets/js/40.88d7c045.js",
    "revision": "ec0d85c14f45ef523902c4f0a392aaf2"
  },
  {
    "url": "assets/js/41.8afa73ad.js",
    "revision": "51c8d114728fc5caa0e1826eb8f4441e"
  },
  {
    "url": "assets/js/42.08d86b17.js",
    "revision": "b51e5014afb04ede535b1c7949168064"
  },
  {
    "url": "assets/js/43.ad9212f0.js",
    "revision": "2e12d461b986018e244a799ae2b25d91"
  },
  {
    "url": "assets/js/44.330c3f54.js",
    "revision": "e447de4c93edf38d5608cfd3d28b6b7b"
  },
  {
    "url": "assets/js/45.f9e5e6de.js",
    "revision": "f8356f2c7866d814926721712d0e846d"
  },
  {
    "url": "assets/js/46.b855dace.js",
    "revision": "7c9a2ab727ba0d743cd2170f1b66052c"
  },
  {
    "url": "assets/js/47.a54231b5.js",
    "revision": "13a93a8750f25677911ebd7d78336455"
  },
  {
    "url": "assets/js/48.1d44e820.js",
    "revision": "265be42367a57a3c7eb9707199482c58"
  },
  {
    "url": "assets/js/49.f435f2ce.js",
    "revision": "75583c235a652f7049ad552597c3401a"
  },
  {
    "url": "assets/js/5.d96c2cae.js",
    "revision": "0bd2a9a7f778d67a461a9522d1eb978d"
  },
  {
    "url": "assets/js/50.aacc85df.js",
    "revision": "eebb3f06cfb27664f87503a0c4eacb6c"
  },
  {
    "url": "assets/js/51.cbfc17f8.js",
    "revision": "528a9820284a52de2406c3974e67442b"
  },
  {
    "url": "assets/js/52.c0af5d3d.js",
    "revision": "f634147dc3d0d98d14c7a68e7635e1c7"
  },
  {
    "url": "assets/js/53.b6dfb9db.js",
    "revision": "b4badf94517562141bf0747897442165"
  },
  {
    "url": "assets/js/54.0e88d698.js",
    "revision": "9d829c948625b90c0273f0aa52180d65"
  },
  {
    "url": "assets/js/55.85fe3606.js",
    "revision": "c908e09cd567892ba0e9403a753f39cd"
  },
  {
    "url": "assets/js/56.21ea4af3.js",
    "revision": "75442a236aaf11a8c31cf81a3e7641b4"
  },
  {
    "url": "assets/js/57.b6ed4e5b.js",
    "revision": "37edec1e2bb9df41f8c75de48b8b309e"
  },
  {
    "url": "assets/js/58.238a7199.js",
    "revision": "a59f7ea4a41a0f2852e0c3a66e2a45cf"
  },
  {
    "url": "assets/js/59.aa0be92d.js",
    "revision": "de6b651da58d4b4e2c3af26a2c5b5d53"
  },
  {
    "url": "assets/js/6.3f1f8516.js",
    "revision": "888c4271e2bf3b1f31aab6f753ea4b52"
  },
  {
    "url": "assets/js/60.c530ad85.js",
    "revision": "05c6dc01a31297812d7960ab22e3f35c"
  },
  {
    "url": "assets/js/61.b7bb4fc1.js",
    "revision": "dba7b8463a9ec99a59adbb8e746b4f6e"
  },
  {
    "url": "assets/js/62.1bd3da8d.js",
    "revision": "6b3d8452ab8cd62486441f168e77a387"
  },
  {
    "url": "assets/js/63.48eeed72.js",
    "revision": "f341126995c8ace035c1b9dbbb44f754"
  },
  {
    "url": "assets/js/64.35fef648.js",
    "revision": "7bf97f1bfb2587306d000533441abb75"
  },
  {
    "url": "assets/js/65.038d84fb.js",
    "revision": "23bc40a5ef48808bcd26ebe864335a2d"
  },
  {
    "url": "assets/js/66.4772ea61.js",
    "revision": "4aac75825e9dc56c8b1599b72b774f69"
  },
  {
    "url": "assets/js/67.d38c334c.js",
    "revision": "5a8fb8de2e442ae97d475aac0235d4e3"
  },
  {
    "url": "assets/js/68.fb69368d.js",
    "revision": "f644adea382e10fe5ef080bc02257629"
  },
  {
    "url": "assets/js/69.98912038.js",
    "revision": "b0bfef2c1c4b1d6f450e1c90d811ca0f"
  },
  {
    "url": "assets/js/7.e8bc5ea0.js",
    "revision": "cc19fe2c3f17a58fa851148f6bc34f9e"
  },
  {
    "url": "assets/js/70.77ab8ef9.js",
    "revision": "cf865cd8ffbd57db8d8a124c9e04c50a"
  },
  {
    "url": "assets/js/71.eed4b067.js",
    "revision": "f5f3dea1d38c08c06102647c8dde1868"
  },
  {
    "url": "assets/js/72.08a0c35f.js",
    "revision": "b9bd7d9eabfb90f4f384c2b290bc37dc"
  },
  {
    "url": "assets/js/73.0393a18f.js",
    "revision": "62dfaa90c8cf5e3f1a229a112404dce4"
  },
  {
    "url": "assets/js/74.ace0fff7.js",
    "revision": "5d107157045918bd50967dbb210945a6"
  },
  {
    "url": "assets/js/75.e17971a5.js",
    "revision": "da24e0484ac910a5b232b9a372e2acb7"
  },
  {
    "url": "assets/js/76.a01ad52f.js",
    "revision": "31e5b761396e5213f6af4b0ff45a021a"
  },
  {
    "url": "assets/js/77.fe9247e6.js",
    "revision": "605f52b9837fd2ad6560acf91088e964"
  },
  {
    "url": "assets/js/78.d5e59b83.js",
    "revision": "8200f5c013e323cafb56a95d8cdd822d"
  },
  {
    "url": "assets/js/79.31265661.js",
    "revision": "bb99ab810a9b657e4117681624cb2b4b"
  },
  {
    "url": "assets/js/8.c0439ff1.js",
    "revision": "d62fd5e84fe4cfcf35499a12b41920e0"
  },
  {
    "url": "assets/js/80.9364a150.js",
    "revision": "4d7a442cae21486e3d59527a5b80e5ab"
  },
  {
    "url": "assets/js/81.d7ac007c.js",
    "revision": "15317c2324d4a4d8574c9652ac3d748e"
  },
  {
    "url": "assets/js/82.4bd40746.js",
    "revision": "4f74a42e974dc133180a77ef09dd48aa"
  },
  {
    "url": "assets/js/83.649e9f37.js",
    "revision": "ae8eaf074a6ec06481839adae39b2e34"
  },
  {
    "url": "assets/js/84.81500b75.js",
    "revision": "dd32ad53d5f2fa7afb7d9ff15d722c39"
  },
  {
    "url": "assets/js/85.8a922e18.js",
    "revision": "8bd2965edc136c10c563ce9dad74c789"
  },
  {
    "url": "assets/js/86.6f524833.js",
    "revision": "f7184286dc09749e96462e0c97afb51b"
  },
  {
    "url": "assets/js/87.6b19b9d7.js",
    "revision": "18d8b8da2f9b7833cb8213008baeb9eb"
  },
  {
    "url": "assets/js/88.2d3f4509.js",
    "revision": "221a213f5361afa6611c794377b1738f"
  },
  {
    "url": "assets/js/89.c29a296e.js",
    "revision": "6bf0c3ccfe946e3294407a03f0a0e36b"
  },
  {
    "url": "assets/js/9.684c5531.js",
    "revision": "c071ae35ec2b50ee9c5f9cc7410bf39b"
  },
  {
    "url": "assets/js/90.949d6b86.js",
    "revision": "57b89056dd6fc0a61b2ae00aa8afbf6b"
  },
  {
    "url": "assets/js/91.cb3a04a1.js",
    "revision": "4155ab87412fe9a8046da94f6a54b2ee"
  },
  {
    "url": "assets/js/92.7821d0b6.js",
    "revision": "143be713c063fa2056e39b07e85e040d"
  },
  {
    "url": "assets/js/93.0d8d0a3d.js",
    "revision": "ece0a6e4bfb7a63ee768c832500f948d"
  },
  {
    "url": "assets/js/94.0f496731.js",
    "revision": "e0a943fd94f046e8a967943adb1aacb8"
  },
  {
    "url": "assets/js/95.d1fe4cb1.js",
    "revision": "84da735bdd9806fab74c53cce5edf3a4"
  },
  {
    "url": "assets/js/96.27a96f5e.js",
    "revision": "3d7a62d40bea4a08ee07ed753f3d10a3"
  },
  {
    "url": "assets/js/97.646b2acd.js",
    "revision": "772375798a65fe9be6d66795e60eaad4"
  },
  {
    "url": "assets/js/98.520a2157.js",
    "revision": "967ad7bbfe04d32e0f45430205a6c702"
  },
  {
    "url": "assets/js/99.86cf0382.js",
    "revision": "b1d7c588cbed77480b7e7c120460bd4c"
  },
  {
    "url": "assets/js/app.59c49612.js",
    "revision": "31d65f617b1949fd03c6b202a3139ef5"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "cfea763ede7fd20c722a691a00d68a9a"
  },
  {
    "url": "blockchain/solidity.html",
    "revision": "b5d3bd6629bfeb961e8f810fe79ffa58"
  },
  {
    "url": "common/architecture.html",
    "revision": "b16868e11842f69da2585fb02ac4ff22"
  },
  {
    "url": "common/code-structure.html",
    "revision": "f6b36d273244a73c3d67bca62b5e714b"
  },
  {
    "url": "common/crawl.html",
    "revision": "fcb3dcec704dc6c52a5c8c4728cdb156"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "2c673787f646024f02e03bb50c3580f9"
  },
  {
    "url": "common/debugging.html",
    "revision": "8484e3779f35c8010485a5d9b9651c88"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "1b1cf3a6028c2e204c7b572758b103e3"
  },
  {
    "url": "common/document.html",
    "revision": "e150beb214debbe1bdb8834db0c1184a"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "f78b763c5195ddbe8e04804e0b95ae66"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "00688b7ee3692f10557012459ffe3114"
  },
  {
    "url": "common/index.html",
    "revision": "d528f1c67905997a9ef890775a3b5db1"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "644843915db58ba48d0df4114fdf976f"
  },
  {
    "url": "common/realtime.html",
    "revision": "0a016114948452c78de8595f8bd016f9"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "88b187b18f5c4ff8929701b97546d9f4"
  },
  {
    "url": "common/refactor.html",
    "revision": "a9b9fa646855f2a82a226223d1948995"
  },
  {
    "url": "common/seo.html",
    "revision": "f155eb2f1ae96c0aa4b5ac6d83255797"
  },
  {
    "url": "common/use-case.html",
    "revision": "9607724dcf81e58facaa8196786f9bdf"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "f7167a7f7788581cbaafa47bdfbd6a7f"
  },
  {
    "url": "css/tricks.html",
    "revision": "7252f4934daa2f9d4fc8a61e21131a48"
  },
  {
    "url": "db/architect.html",
    "revision": "5866132b3778c6071670497449f9d9de"
  },
  {
    "url": "db/cassandra.html",
    "revision": "adde3db904bdb86774bca58d3221d29c"
  },
  {
    "url": "db/couchdb.html",
    "revision": "cfc1296915b277ce198de2698512001f"
  },
  {
    "url": "db/db-concerns.html",
    "revision": "5082e8bd817de95032b5056219c8d47f"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "37618e885b5eac31e5239aedeba18b00"
  },
  {
    "url": "db/db-vs-blockchain.html",
    "revision": "96c292619cb5f25779c1900b400e2fec"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "4f12d831026f2bc5d4300980cb6ddb67"
  },
  {
    "url": "db/mongodb.html",
    "revision": "07da5d031e816201fd52b09d573135d3"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "a2bd354ba442f3beb0d81892c0017fd2"
  },
  {
    "url": "db/nosql.html",
    "revision": "53c2af9ab3d9101920099bd8dec4f657"
  },
  {
    "url": "db/optimize.html",
    "revision": "2fd66e8dac3661c5b53486e829e64ad7"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "8680dd342d16a3bf91855d2d2dde4226"
  },
  {
    "url": "db/postgre.html",
    "revision": "c0050463c23ae7b81e445c5a5534a9cf"
  },
  {
    "url": "db/redis.html",
    "revision": "0de34bb95a352c0d02c32295f2d7b90f"
  },
  {
    "url": "db/use-cases.html",
    "revision": "3a775194c2666473fb401dc552deacb5"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "cf2ce18da7cbba6d6f3bc0246a2356bb"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "412cdb69f065b7329a29edd9730b7316"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "6f43758e00998e440e802d335026e122"
  },
  {
    "url": "game.html",
    "revision": "7185e5906327dda785fdc64559706a37"
  },
  {
    "url": "go/clean.html",
    "revision": "0ff920554ef642545c80e2e1f6592ac9"
  },
  {
    "url": "go/index.html",
    "revision": "0471ef14f357aa1d9a61f22796a6a781"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "f77ae0fb881e6fb82e47d6792a627d77"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "169eba8a4be3b44a9e35566e139b539c"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "fc4af12fa1c66938f0c0a1c6fea006b1"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "a6fc0cbd5d947734897ef397334e1b56"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "e07618e43fb9075cbe16368cfccdc79a"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "f4237fcb1ba1e0da146c888a9b937c9b"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "6f5b91acbedf0ae4e30fb1458311a743"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "99596563565047ca17497d895e211031"
  },
  {
    "url": "index.html",
    "revision": "a478a7f7acee14fe11b307e7304d3bcb"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "d12c26a2a57bc50c18db2a2fb7dc3d12"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "7bba293ddb912c62286982887a153ff5"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "21db071b238be5ce77e9b38e4e15718f"
  },
  {
    "url": "javascript/closure.html",
    "revision": "eaa77e6c706ce1260a6fe8d8a0230a36"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "60a394f9c3f930eb960e5a5071b6d874"
  },
  {
    "url": "javascript/functor.html",
    "revision": "dfe39f6e4ef0b6b5295945931cbc6c5f"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "09529bf4b5da8ca0f462c5b9a0c2a84e"
  },
  {
    "url": "javascript/react/mobx.html",
    "revision": "08b492f3f5b65176724f1729005651d9"
  },
  {
    "url": "javascript/react/react-vs-vue.html",
    "revision": "8dcde315007b2dbc8256886c9c30dee9"
  },
  {
    "url": "javascript/react/react.html",
    "revision": "4f303f5b570607fb2d2b4063925a49eb"
  },
  {
    "url": "javascript/react/vue_react.html",
    "revision": "80f1569a04318f302d50bbcbdc4be948"
  },
  {
    "url": "javascript/rxjs.html",
    "revision": "a719b58ef71679a8b27eb7243adece7f"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "7eccc1d694893564f1a2e66f0cdd58ee"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "3c45e8475198812ed8a93609a02b12f7"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "eea880726d15343bba5209943e543d06"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "c1048b9412c046732987a7d5b35c8e23"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "042ab7ecc94ac328840b6129fca691a9"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "9d7046a7eeaca6ec3b1a9bf6a35bb814"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "1b1c1f081da29444feeb61ca4db9ae45"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "2d649130fd4a50c295ff1a3bc0e110ad"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "f92ec81bcac7379c4446c850202761b1"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "1c541e7f79220f862c1ed596e2a29a65"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "f991ca57450a1fe9487c779ffc6b433c"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "89352e588326a4383743e0d4057181e2"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "02d36b7bf0078e8e2897f7f2102a1989"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "99fdda8dccd426b871e9f6a31a51edab"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "36c45c0a232269f57ff154323c00df16"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "28d25bcfbd9a7d68af6e9d4cd5ce9185"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "861e5db53e94cece4579eed99c1f4e96"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "1c69b8beeed1b30c15cf6e3c1608f194"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "e4472f653ab11671d460d16501a7821e"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "d8a9b8d7cee1e1e2d5d4db6036f727cb"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "0d9d7c249799298bf72bd1db8d564b96"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "a6a1501467af4cc6b4870e0879f2659d"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "f54f6d2aa64358149df112fc64242855"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "98f7c11bc2d06fee692887baa98f0515"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "da9babcdc7578a359d9737cb576bd878"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "b67af6aaedc9ce18d0acda2ba5bd69d3"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "3805b3628e194b6a9c81e5506839ecbb"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "67c6eacd5a583bc269eec0745f46e8d7"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "ec6b278a1003847418e2f2b68c704d1b"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "c5b76e31301d9ffd1214b9c42b58f0ef"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "7f0c5183aaa09ddfe2cb95a77dc574fc"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "1b7bd1c06b5f911768537dd43ce7a237"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "50d0658abfbdf590e6a0aa9da12a4476"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "f5772d9c8efdb106e61ccd6495d2b95b"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "0dca70a0e19d0e80e4f399d34d8c357c"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "8d665bfb532828b64988367db5a58e2e"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "6040a3db5db6410c78a3b414df3f09c7"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "f626a7babfab82b0cdc6bb150296a345"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "c55ac62e3faaaa3995de157bf4e490f7"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "e62534a2f698b6b066154a06961b08fe"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "64414c4a879950974d57baf03549e652"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "cbde68a62ade25c04cf7831e0270947e"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "69111757a915557769130e14b11e984c"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "1b0f4ed3a10ffde0d77d1e1d156be2c8"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "394af10e6d85e5dbb7cb6a17aa9f7e64"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "615bd35de6c06c50bf225f4053000209"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "f09a7a6b1b2bda146dd48b4878f92cb1"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "1c5fcd8900eeb95229b6bd3113a8576d"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "6d30f31e376bfc065e56f9094d87eac4"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "7b48e37d794d44f99e1887fdf7df953a"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "a1c30ae3e5ddc79fc9f3d172d6eeaae7"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "1d6e58e5066397e0d76b0af3e8735161"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "8ba45551cd09092b0c554183dd7d8b79"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "5785a307bc59c3bb6089052b286376d0"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "f55d3d4e61a8cc475f8358cf6ce8ce14"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "557d7393b38fd863b547d1f3beb7d943"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "3cf7c7f00f2676b701706d8db36a4496"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "6ec26e3cb64b4d088863a34b47228085"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "decb17dace30653ae18f5ced68d9f70a"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "b34b13860f6f54bb5568eb20f5f08144"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "9608d22d0c35689e0d27d07a37f39875"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "d2063efd1f309d0dcbb11fdbf1f4319b"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "4ea2dc9e6aced409b8e033aba7fc29f3"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "def074027f0d28a0e9c1f2c317c03947"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "c28a70d6cfa16b2b8aa44cdfda0978d7"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "31e078de994a7ba814e624ed3dc16646"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "5638906e4917da35709e9e7145166c98"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "8f021f4c33b62c8e68fb763b86143131"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "6978eac8f3cf2a20da46595db2de5d71"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "ec3689a278c4969103bb9d8bed6020d8"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "6e213c414e49ea538505af7e9750a90c"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "3326c3ab52aa5b380d622417fb6c6528"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "b6125626edffc37b427bcc51a15f1474"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "411221319f48ed8dbceb4fe31753ed1a"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "2efecfa20c7c9cfe473dd6ea9878a028"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "249430c1d6e04f92dc045299feec005a"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "05db438e3adf9c15f8937a5f59768777"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "b0bf650c2f7695196c4499b19effc664"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "96469c922fa2b0348a172fccb11a2fc6"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "de2528e953531eca8cf5f17cd7580acc"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "b751ea43d4d5d75e81911f0c2f3115ba"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "15c2d5a140e8ef5cf4f54c581d2efda9"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "6d3a738b680e184f96489368be8dd47a"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "efe6ba0e28e0f426a3b123e4b30eda72"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "2461f200ac8e0cfe0dd60e9865242d20"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "843922936bede2ab8d78a344cc58d168"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "0949054593fafba07afc4aca904514a7"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "0d096c3717c4fb35f354249aaa648f47"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "99475d0c324c343129e34f26cd136a20"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "7f13e03a8e36d557cf2b28930643beca"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "b2496ce9e63f034c0034d5a5956fec5c"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "db1d10d8956d5ac3b99ddd954b08564d"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "d963cd49c3ddc9b7f68dcd5e80fd5cb8"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "859b1794bd771c1aa5471a756999ff5c"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "4895cd31c3b2f9443fdffac4b6df3d66"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "e2863ccbc1d83f771244da5a8539de1f"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "fa1daf8a3ff148984f226735b44274ae"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "d6ce94b31fda16f24b09d52910f2836a"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "f34aab7a400a9e6eca7bd446075a7820"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "b4373d2ae82b93bf59bebe938b09b34c"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "a47da1d1b74dabb0e7e9dd64713d8784"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "6a5fb59a16512541a1cd3fbf95b4fa2d"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "1979fd15e66293e7c703268f264c7b35"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "523709e5a248026f05e7ca7b79b812e0"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "3874ed73fb1fb62cce949a76eb502837"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "739533b716db254d8fe58e0be96d774b"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "7c6712ec53ee5cd011a7c70ce33e90bf"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "1e65c2035211eff1411abf2e40285e71"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "d364e01d9e2ae923348463a97caea5ca"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "cade43cfeef14344eb82de7d24313847"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "c896da57132820edd5189e3ce6e3cd3b"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "1f3e7c4b98d1eb6c028bc80daf4ac7a5"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "905f8ac49497f4530e845715e1e2be77"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "7d1bb50d94e3e532b097caae63ab6777"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "f60b8b222a21cc67ae335e39d3dfccc1"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "43390ef975a1ce08f5c7ae2c689ad463"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "c26a140902bb25486360e0bd8e6cef7c"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "db0074232a2c35ef8ca539982cedc241"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "361efcd5b2f635ceaea59916d087d199"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "64825c1c8e7ed600c8390e10c52ac577"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "7cff2af752829c25160636eae0f61fc2"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "fc56d3240a819370664aad9beab9c0e4"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "f48d7bee2ed1bd4958a0cdf5c25cc1a0"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "c388d11363d21c1470566cc71667853a"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "5e44dbff660436b990efcfccf1bf5c0e"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "558b21a3d8e07b49ffa865c0faec46f3"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "0adb1f7bc88204847b2264a189bb40d2"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "f3a65956617a282b360d59b049eee97b"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "e237e354c609116b4fe5678006c2e9a1"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "f6b4ed517942ea6e2d283d137fe34961"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "ef0f49a5a4a8c0c3f3632d1050efbba8"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "9dfec0fe3ee06fa9fbdc51dfac999e16"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "186f12b98470b21a06d864769e2d1135"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "08337c9573f903adb13349c5b6b66b44"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "b006a27045bcbdae4f26bada8842cae2"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "0a10c663fe37a582cecc624c46cbded5"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "91b682d341d62e645b7d56666dd380a3"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "960de2bf82c87616673450e1dd63ec77"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "d6e15b290d4ff352fc8b3c7384992a9b"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "2e96a296fdfb0c15092b6ebd0e25e868"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "f102020088905ff1048e3a6180b85dda"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "290ccfd0006bcb5cda8b8a076d7bfd8a"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "cc0dc6244133babdb5aad10e03bb4a0c"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "a2e163a642955d9e59d851944ef86e1f"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "70e358422ecad280c76ab263802362e1"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "6d4a71505c90641b2c72ee82bc2e9e97"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "08fed6577e0f0823dd669ed5e9995729"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "f70e0d2c7d6cd60b2c76f41e272386c4"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "ae96caf04817d02919e2736754f6cca6"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "3f14ded024fa9d4c95f8b8413e161138"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "a8a83a44bdb7945511155a3148f4e72e"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "73bf966a2b733b5f5048f2e2f907d3e9"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "6b82330ff74d1978ae4d609fb5f44f7a"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "6c64052f0f37afce02a007d2c755e45c"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "b100657ee0c4974b1bfddbcd5ed5c2e0"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "dbe86d0b86c400e83cbf9a70db0f60b0"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "a32754720def6af6b1052e8d0315177f"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "9164bcded46ad6c922d416aa9cc8ed88"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "02c62c2c16e105a49fb5f2718cc92c39"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "bc168e51c0102e5456cd28dd79be4a14"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "d5f734bc9f9c41a708f8c6b57df8b8b2"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "50db37b5e3d5876884217532e5cdfa8b"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "525e1e67c921e780564694e8e0ad4a47"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "cdabc3fc4fd956dbbd5c49aae92de55e"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "164412bc2606e90bbaef6c0f9f12e72b"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "1edac21a36c099a8b051cd97d550dd73"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "1b52f206958b3bc59539a334aeb77995"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "123a62b3b0701436410b9f3ab2cfbf41"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "f75c46a3f403003c8df6bbf476884b19"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "9407bc95bde0f689aa2135d3210d9216"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "56ab9e6bfb64066a4dc579c8eb48fbff"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "d928a8c9bcb63e5f59c779b7f5218cf2"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "04a044b5e304da83c93d86acb5d619c6"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "0f5f72d4f1d4c6827a8d906569288ca1"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "3d3dc6f0e87ff2c596a46a4a9e3296f9"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "54b4dc0f0fcada24a6f3529aeda2ae3b"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "179bb5d1978a00ad78e4929f569dba28"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "6550b96cf075769c4551860e5f86ad61"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "b123aae479f7fb1186d2a2850207e1a9"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "148ca51e8386ac7396f164c07900bf5f"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "9b60dc3876c31f0d3b27e2a4dc1c3b7c"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "1fe23f84b5dee98d25d1e13155f20be1"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "d14321420b25565d52c96dd0680097d6"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "93e3c7044998f66ec12796e9dd8aec28"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "60f7e57955b98c3fc541a8156fafc82d"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "111f36e4ecb82b0b90133b073f93dd17"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "38031cc7a6d866d6acefd5da5d10233c"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "c9fc2da60508da50762839599df5ddbb"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "a13fce152501336345c067196d67b3fb"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "cb4c0f0267af0eef677fd30fc23bd6d3"
  },
  {
    "url": "kungfu/template.html",
    "revision": "2cfdc4dc248fa77a11a7ce6cf952d866"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "097716883bbe2500c6a539e319ed8c3e"
  },
  {
    "url": "node/env.html",
    "revision": "77d4cfde1a04bd7be723d8e5e409bf1f"
  },
  {
    "url": "node/index.html",
    "revision": "fca265fb71c3fe801e13f69cee3a4433"
  },
  {
    "url": "node/n.html",
    "revision": "a19899014106ba5a3b1d30349a8330b0"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "792263cee8bc0ceb5e63afbae6a0401a"
  },
  {
    "url": "node/npm.html",
    "revision": "ef8fde4415d70e94814d4ff2fc0414cd"
  },
  {
    "url": "node/sequelize.html",
    "revision": "2df898377e7a0c09ca1a2decf434052e"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "9005a49b830cb3e31873b30d565ab8a9"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "0ace27c302f89fc994ba0dcee14c9183"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "4fc853f0c7acfac3bc74425f1023524c"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "baae6d0ff2e16f2fdf2ff29c5a8c2472"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "f33a1d13940c2b7afc8658faf54fc867"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "353d2cb7eeaad6456d52a18f565f14fe"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "108a853f2d2ceeed59638a836d37e725"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "417a4e21f10f878bf419c3d61036ebed"
  },
  {
    "url": "php/clean/di.html",
    "revision": "5d73bd304b2aeece31030820b2b083bf"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "89f00eac238fffb9ba0095412f84ad6d"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "aad6a448136be4ca164d3aec3f51a371"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "5417fd8f1b7d7b32aaeee93c669e6a6b"
  },
  {
    "url": "php/clean/index.html",
    "revision": "b5b2e7ba75dea2111c88dbaa059a8d60"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "b377e49053c2d08c500394c462784114"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "2485e0b7572bd70a871e78afd5f63580"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "37b5fe923f86ff5a74b21dd0073a49db"
  },
  {
    "url": "php/composer.html",
    "revision": "a2d56c7bf340c6f48e5ba5173d1edb6d"
  },
  {
    "url": "php/crunz.html",
    "revision": "7e4ca19ee04e89b59157e8247b221b14"
  },
  {
    "url": "php/laravel/best-practices.html",
    "revision": "e30895f9c199f361e083316be72c6831"
  },
  {
    "url": "php/laravel/laravel-notes.html",
    "revision": "eb7271e66bfec100b30826cbf397139d"
  },
  {
    "url": "php/laravel/patterns.html",
    "revision": "0e4c205d64cae0d758efcb10912868ef"
  },
  {
    "url": "php/magic.html",
    "revision": "e881c6d3a526aa56da1d8d7eb42487d0"
  },
  {
    "url": "php/notes.html",
    "revision": "81bb6602dd8ba89a69ed32bf4a2d19cf"
  },
  {
    "url": "php/oop.html",
    "revision": "f78d311b0143005ba5195d52009f6c8e"
  },
  {
    "url": "php/php7.html",
    "revision": "d7f5690d806ba8868987ac77ac7d9659"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "21997e2767279f56afb6589c5ebae873"
  },
  {
    "url": "php/reflection.html",
    "revision": "44f17b58a24cc7a95f8970702c121309"
  },
  {
    "url": "php/tricks.html",
    "revision": "d029f85e5e4b870c942dd2a7a9eecf60"
  },
  {
    "url": "php/wordpress.html",
    "revision": "58e18c9247b3e011432df0c3ceb58e04"
  },
  {
    "url": "quotes.html",
    "revision": "1817a5a1fab5f4cd7cb7c0944fb8dcb4"
  },
  {
    "url": "refactor/notes.html",
    "revision": "5acab80837773219cfb1af273904d4c7"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "6185e09724ed0b028c0b93d21531f916"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "deedbeaa7f0878d477955b32bc53196c"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "04a7377ffa4e40a193e57700aec31bd5"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "819254a8f3a3116694c39abb28b40386"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "34d6ccee2e09144901054b7378667e83"
  },
  {
    "url": "snippets/jest.html",
    "revision": "ad1842e6972f05f907b58808e494a750"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "41c00b8b49e4b7c5f2a1076f8a4628f5"
  },
  {
    "url": "snippets/regex.html",
    "revision": "b10b602cadfe3517ff9ddbc9356961bc"
  },
  {
    "url": "terms/12factors.html",
    "revision": "f8196c7dfe7fa8504ea4b0f360de38e4"
  },
  {
    "url": "terms/architecture.html",
    "revision": "9b0d6311e969053e86af53b11018f8d8"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "15126ab45d53fc31fcab9455559693b5"
  },
  {
    "url": "terms/di.html",
    "revision": "9dd6f3004f157ae511f293af7d481d9d"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "57a49d1e8a9ee3efc9bfd0f4f6dabdc7"
  },
  {
    "url": "terms/javascript.html",
    "revision": "0ea6efbe52c1367db6d4879b8be953ca"
  },
  {
    "url": "terms/patterns.html",
    "revision": "983c68103d388bf3e64de384906cd26d"
  },
  {
    "url": "terms/principles.html",
    "revision": "b7388d5c042cbb8fa55b876773f96335"
  },
  {
    "url": "terms/rules.html",
    "revision": "977646a4bed8e7a979787b705f2a2830"
  },
  {
    "url": "terms/testing.html",
    "revision": "707f43fef9196ca43d2f6c1632a30427"
  },
  {
    "url": "tools/chrome.html",
    "revision": "64c702c4a1d850495ca7b0be41a1369d"
  },
  {
    "url": "tools/docker.html",
    "revision": "0441faa3098efe1a8eced901075f079d"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "003e8e76d0f781e8826cb96c56c85a4f"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "d99936413a887c07b1f8cf21ad3b8e12"
  },
  {
    "url": "tools/graphql.html",
    "revision": "964c8bf1cbdff8d76026a97e9fb29e70"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "4025e152bff51c7fc4801a617cc22d25"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "851181f24963765dcc885caa7f6ace9c"
  },
  {
    "url": "tools/redis.html",
    "revision": "bea969ec533ea8fc017d4daa904c1d1a"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "283236bcc71ec5007d55550114e3c461"
  },
  {
    "url": "tools/vscode.html",
    "revision": "ea330738fbbda3acf8afcffe4b0f55dc"
  },
  {
    "url": "tools/webpack.html",
    "revision": "017e459a92107ee98ccd3363858f30cf"
  },
  {
    "url": "tricks/compare.html",
    "revision": "abae51dbb91052effc4a2e288dd377d6"
  },
  {
    "url": "tricks/git.html",
    "revision": "d030b476962085a6d7f159506b331a2d"
  },
  {
    "url": "tricks/linux.html",
    "revision": "e6bd750ff3ec165b355563e2d76f2c8a"
  },
  {
    "url": "tricks/mac.html",
    "revision": "f99b4278b3039c4fecb822eab05e2e43"
  },
  {
    "url": "tricks/misc.html",
    "revision": "c4dce9ededf1dcb9847a8c542d54b230"
  },
  {
    "url": "tricks/setup.html",
    "revision": "27da8246bcf63dbfd93054356b1a392b"
  },
  {
    "url": "vue/communication.html",
    "revision": "047fd81f810c0cbd6ddcc33aa7b2a599"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "e335885362693d2d3a71e57caf821926"
  },
  {
    "url": "vue/events.html",
    "revision": "00cc1724080c03af0b10fa5f8e833ecf"
  },
  {
    "url": "vue/references.html",
    "revision": "0fba2a87d063f6db466c746d082c86a9"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "ca763370ae46d20cc197e03a9cf58f04"
  },
  {
    "url": "vue/test.html",
    "revision": "dd603e1f0c288882c83c5bf253065e0d"
  },
  {
    "url": "vue/tricks.html",
    "revision": "6cd149128009f3befd5917d09cacfa50"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "c7676757a63f722af14d98987297f177"
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
