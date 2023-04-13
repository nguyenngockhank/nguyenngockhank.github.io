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
    "revision": "80c1cbb80f4b32926d086fb0fb91fbc1"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "517f1f5c6eb2d1ce7225f74af23edf55"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "408bbc1f6e646d4a7333094e51d0873f"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "0c90df28fac029d345fac8ed76cf5f55"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "970c17efdf2c4c7fa7c07ab0691d940e"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "f4456cc6f9563d0d5193785b91e3f4f5"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "a4b84b79d98e7b291457c360a44ccc75"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "a774f9f5caeb13f1bbc38169f59a6a05"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "c846942e7cbc70729e2b116c8de24a53"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "0ca871e01af2456618c2adb044d7704b"
  },
  {
    "url": "algorithm/string.html",
    "revision": "9dc3b9df5fa418d442f2d0f54558075c"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "0b4f7024cc20f5b55c2d5cfe5606289d"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "0e8a70801638d69c8393747abeccdaa4"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "6be2484d9bc425bf8376afde9982a9ff"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "220b982ddbedd9d04a6131f9cb4e4401"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "381df41b01c91473f09ed264a461ec46"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "69abb1f7cf0b919a05c4df71e26a05cc"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "1adb3791e72904066ce50729408844a6"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "dafa2d7a78fdd3fe5705145ccdaffc07"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "b5b552ae990619bf264731f906d45658"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "515136ca63b68f477ce902904fb6d23d"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "2216a3d117ebaa98175953f30aa6b691"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "108fde0c1994c63befd63defe8a52daf"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "1802da99374961497e7fe7ec76a49d57"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "5c0ec9cdec5c217336d5d296a2980470"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "ab8be81bf6dc91097dbcacfb8cb90fb4"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "c2408b21a7a51e9746a020ff90fa9e0d"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "deea78b7811d9194b9db78433d170d2b"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "bf40297d35a9eb13cf65478b2b33138b"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "ec804054ea888da65ba1f30f357b01e0"
  },
  {
    "url": "architect/authenication.html",
    "revision": "127dae1430defea9148cab715e5173ab"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "da84f76ad3eefb198e6d6b69568b8748"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "f0a1ef7433556bbecf47a63461948f23"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "2c7396cd518823e5c05afb37751c1c62"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "9fc37d96b808bfb04a52352b01a6d105"
  },
  {
    "url": "architect/ebi.html",
    "revision": "a91092025e594def0b7fe2c56fe4183c"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "2c7451c29d779231627aee325d55efc3"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "93a85f64c789c4676d939cb7eb4f23ee"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "25de3dd52a395365c4d943645a650fa6"
  },
  {
    "url": "architect/index.html",
    "revision": "c5535f93c4cc6896a8592c101026aabe"
  },
  {
    "url": "architect/messaging.html",
    "revision": "1d56d8fbeb74b8843cf0a686a10c1265"
  },
  {
    "url": "architect/microservices.html",
    "revision": "5c557849bdeae5e6f8c9d0c0ce3941a5"
  },
  {
    "url": "architect/mutex.html",
    "revision": "e47bef59905be3beba6332f649bdbd48"
  },
  {
    "url": "architect/notes.html",
    "revision": "34009ee59bcae3a519f96d339033dba2"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "198c6b856f0ff6533a285e01f9732cff"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "25a71efb87af4aa982ac5f1705034c0a"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "1f7da29fa99d47058d7f0939a699b4cb"
  },
  {
    "url": "architect/refs.html",
    "revision": "4fb29971f13433bcf3787e5483fb8a0a"
  },
  {
    "url": "architect/restful.html",
    "revision": "aa928e46c6031e442c6aef3152221832"
  },
  {
    "url": "architect/soa.html",
    "revision": "b1c24ee9d0c264a4370d1db05ecb189e"
  },
  {
    "url": "architect/spa.html",
    "revision": "9b0b0de0394507b666faa95d05d9296d"
  },
  {
    "url": "architect/terms.html",
    "revision": "93331530da25e19f94300321fe03b3eb"
  },
  {
    "url": "architect/webservice.html",
    "revision": "337c4327dec964a2710d090ace310bc1"
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
    "url": "assets/js/10.7c61479b.js",
    "revision": "f6496ded6aae499241ae7573f5d8f503"
  },
  {
    "url": "assets/js/100.cac4804e.js",
    "revision": "79148872fef8afe72102035e72d4bbb3"
  },
  {
    "url": "assets/js/101.b84b0888.js",
    "revision": "8f2bb9476ee3e975eaea73304f8702aa"
  },
  {
    "url": "assets/js/102.b2dfab42.js",
    "revision": "3262f129985aa044d921fccee1e96463"
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
    "url": "assets/js/105.e94f154e.js",
    "revision": "c41c1678e6114d401e645861a96eb3fd"
  },
  {
    "url": "assets/js/106.4df7f34e.js",
    "revision": "4a322a8ecc2146285f087c3716c78418"
  },
  {
    "url": "assets/js/107.72ce70f5.js",
    "revision": "2018fdf4328af7ae6d3b100a9c4d5f37"
  },
  {
    "url": "assets/js/108.0f4caaa2.js",
    "revision": "ec312c3d7eaae63556f83d86c89acf69"
  },
  {
    "url": "assets/js/109.0906ad02.js",
    "revision": "abc07ddc223095092886eac43175b8ef"
  },
  {
    "url": "assets/js/11.7523b071.js",
    "revision": "1246ba903329525af19b36c7f78fa3e3"
  },
  {
    "url": "assets/js/110.94efb8d0.js",
    "revision": "3d9555438b38413914d875434a3b9fec"
  },
  {
    "url": "assets/js/111.f9dbe780.js",
    "revision": "0d258c389a5ff3aa07e9584ad8d65da1"
  },
  {
    "url": "assets/js/112.ffec2322.js",
    "revision": "782a69481680b8e9600b3724a821de56"
  },
  {
    "url": "assets/js/113.58a335bb.js",
    "revision": "3e30df35fdc1b14f6b053caadc7ca246"
  },
  {
    "url": "assets/js/114.20b7e9c8.js",
    "revision": "df8e3efdd2745a521d23313323e899ca"
  },
  {
    "url": "assets/js/115.3d4a9120.js",
    "revision": "2772e2e17e47630fcefa47c02bca0cf3"
  },
  {
    "url": "assets/js/116.0aa00988.js",
    "revision": "9b6175bafdee10a89b126af648fa5b1d"
  },
  {
    "url": "assets/js/117.2312e4f9.js",
    "revision": "71ebc7815229c826571fccf6340326f9"
  },
  {
    "url": "assets/js/118.c8872f1a.js",
    "revision": "0e416e8c7e4f85541d9e0d40434427e2"
  },
  {
    "url": "assets/js/119.f556b40d.js",
    "revision": "ce921f74a354bc87130ddb5a32ed9193"
  },
  {
    "url": "assets/js/12.c807f20c.js",
    "revision": "c1911d9a7ac4080c216c37d276f93530"
  },
  {
    "url": "assets/js/120.9c14c961.js",
    "revision": "4b23dcc2dcb857a3f06523faaf0c3f89"
  },
  {
    "url": "assets/js/121.51d64739.js",
    "revision": "652f9fb5f11ac6b6f23694c5ff22420a"
  },
  {
    "url": "assets/js/122.b981a5f6.js",
    "revision": "9c76044637adbd03ec41ecba6edbe7f4"
  },
  {
    "url": "assets/js/123.f6eea30b.js",
    "revision": "e396f5637bce1aca3531b1400a24d151"
  },
  {
    "url": "assets/js/124.04a540a3.js",
    "revision": "cce34cc783d44c89fef524b598624265"
  },
  {
    "url": "assets/js/125.bc683ecd.js",
    "revision": "991f7ddc1c9ac56d32205e3b7771cfb4"
  },
  {
    "url": "assets/js/126.7ce229e6.js",
    "revision": "27fda0c36a46deb2fdd1be935504dbde"
  },
  {
    "url": "assets/js/127.14e7be92.js",
    "revision": "4820c7f56887a6df67670ea6dbeaf98c"
  },
  {
    "url": "assets/js/128.1b337dad.js",
    "revision": "9deeafce2e4501598766a50c808fb229"
  },
  {
    "url": "assets/js/129.60230577.js",
    "revision": "81dbd002bcaac1c9b9b684d03dcafcd4"
  },
  {
    "url": "assets/js/13.b1659ed7.js",
    "revision": "601d1a86eec96f41cdaa962cfaa11fb4"
  },
  {
    "url": "assets/js/130.549babd0.js",
    "revision": "f9e195b1df6407f1b875ea2f22aeb345"
  },
  {
    "url": "assets/js/131.c6eb096f.js",
    "revision": "4e52a61bf7512ea505ff9987b29ebbf2"
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
    "url": "assets/js/134.6f80e863.js",
    "revision": "588bd7b2bb30497a14b9d083d3366061"
  },
  {
    "url": "assets/js/135.747be9be.js",
    "revision": "7587ec03880b430d1c49468562ca1d61"
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
    "url": "assets/js/138.41cd96ff.js",
    "revision": "ee05f1c69457520b685951675a45dddb"
  },
  {
    "url": "assets/js/139.c269a929.js",
    "revision": "4a3f72d52cf3c9973376586657ca1cea"
  },
  {
    "url": "assets/js/14.9e5d1b9f.js",
    "revision": "aa55ea94ca4fa32b7c66ad23508da88e"
  },
  {
    "url": "assets/js/140.03d7e945.js",
    "revision": "9f397d16867e8d39db677931e94d7536"
  },
  {
    "url": "assets/js/141.1f421e41.js",
    "revision": "9364cbcf4b54617e26b7c76b8cae5712"
  },
  {
    "url": "assets/js/142.301077ce.js",
    "revision": "e78800a8f9356c0caa5f86623279bfe7"
  },
  {
    "url": "assets/js/143.fb0c9ec3.js",
    "revision": "4069c965ede587eef651571d5f5b1c34"
  },
  {
    "url": "assets/js/144.ff6c7273.js",
    "revision": "8a0b6d1cb124fbf4313dddc4c3186be6"
  },
  {
    "url": "assets/js/145.cea63240.js",
    "revision": "abfa48066006c3b4c881bd27736d1f9d"
  },
  {
    "url": "assets/js/146.04aedde8.js",
    "revision": "50e248d4f2478fdf09844fcdd861eb63"
  },
  {
    "url": "assets/js/147.5b9817c9.js",
    "revision": "8718ff9d287d7cba0747cfe868b618ff"
  },
  {
    "url": "assets/js/148.f22f2b9d.js",
    "revision": "2880f927cfb3377861a9692133f90e57"
  },
  {
    "url": "assets/js/149.2fa5cfd2.js",
    "revision": "45d02717431f449c954ef276aae7a09e"
  },
  {
    "url": "assets/js/15.56c5034d.js",
    "revision": "bcebd705fc567d17715049916f102ec0"
  },
  {
    "url": "assets/js/150.6b4a751e.js",
    "revision": "c492505235aecde56086ee6a1555cae2"
  },
  {
    "url": "assets/js/151.863b83a1.js",
    "revision": "c19b73d3a5fe322819a867705413da50"
  },
  {
    "url": "assets/js/152.8c25e16c.js",
    "revision": "65b57171a6b6fb3c8d5ac12a6adc36d2"
  },
  {
    "url": "assets/js/153.16556300.js",
    "revision": "57bfa86d0d9d30e1c8a1112661d5ca6b"
  },
  {
    "url": "assets/js/154.b9ee2294.js",
    "revision": "02c41ea92efe1f218574a80b66149b7e"
  },
  {
    "url": "assets/js/155.dc2762f4.js",
    "revision": "f8a92fad5975acbfca6621eda6ece3c0"
  },
  {
    "url": "assets/js/156.72363632.js",
    "revision": "4281a78521e78aa2e0c00aa5162a9be5"
  },
  {
    "url": "assets/js/157.42351b56.js",
    "revision": "ffce48ed671222813c99cfa820262709"
  },
  {
    "url": "assets/js/158.1b14bca0.js",
    "revision": "d048f36f1b248d53e276f9bd3de01845"
  },
  {
    "url": "assets/js/159.bae8a109.js",
    "revision": "442e29bc269dc4ade57df9348cc03962"
  },
  {
    "url": "assets/js/16.20e80a97.js",
    "revision": "6980814f38ce12391dc05855f1d20f76"
  },
  {
    "url": "assets/js/160.758b5f0f.js",
    "revision": "8b644e19a6b40dc8f208152c397e69b2"
  },
  {
    "url": "assets/js/161.495b238a.js",
    "revision": "6b85896a227fafaf9e6cca8c466362ff"
  },
  {
    "url": "assets/js/162.722eb6cf.js",
    "revision": "10fdb28ee4de79036c86e1a1e828c0f2"
  },
  {
    "url": "assets/js/163.19ead721.js",
    "revision": "7397d24b302c5d70e2a5ced16af8121e"
  },
  {
    "url": "assets/js/164.b8b24d0f.js",
    "revision": "cfe5a6f820408dac5bf0a89a6937fd0f"
  },
  {
    "url": "assets/js/165.0e4e02bd.js",
    "revision": "fa241944ab77133fa872aafc01ee12d3"
  },
  {
    "url": "assets/js/166.5a5c315d.js",
    "revision": "d59d53d3922af1748590913a16eab108"
  },
  {
    "url": "assets/js/167.d12d80f0.js",
    "revision": "b16373f968e1325bb4db112646ff6c32"
  },
  {
    "url": "assets/js/168.faf1f456.js",
    "revision": "dec6b4b8e0d8c3d2f5b45ddbe85c3873"
  },
  {
    "url": "assets/js/169.39719470.js",
    "revision": "4d0de2d10f1d7584949ddf8a863a0d31"
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
    "url": "assets/js/173.b982528d.js",
    "revision": "156afba3ecd68dc7aa58cb58b49beea1"
  },
  {
    "url": "assets/js/174.987679b6.js",
    "revision": "8837cdccfacad300fe5ad1c8cb718046"
  },
  {
    "url": "assets/js/175.08dc1f14.js",
    "revision": "6439201680801b9d51fd2df11c4d949c"
  },
  {
    "url": "assets/js/176.9f0d374a.js",
    "revision": "c9b9b81d3e0c8cb5c8d522dc7b62dddf"
  },
  {
    "url": "assets/js/177.45f4fe05.js",
    "revision": "c93facb807b8bb89d12134abf87bc0aa"
  },
  {
    "url": "assets/js/178.39bef897.js",
    "revision": "b8a98854389b3e98e6a755e90ae31033"
  },
  {
    "url": "assets/js/179.7bab56e3.js",
    "revision": "6ec97c44617f8219716fde33147c2055"
  },
  {
    "url": "assets/js/18.a5918078.js",
    "revision": "fb6720eec2056c7648dd414f25d14d5c"
  },
  {
    "url": "assets/js/180.b0f628d6.js",
    "revision": "b4c811053ef84fb1b6062f4ce0c141d0"
  },
  {
    "url": "assets/js/181.2d15f764.js",
    "revision": "f2344aba1ef3db99f1c9aad0aab16e6d"
  },
  {
    "url": "assets/js/182.564439d4.js",
    "revision": "3b680c5cb7abdfc8d19affe21c9b6f78"
  },
  {
    "url": "assets/js/183.640d1b37.js",
    "revision": "9d251927b16bd4932eac3457e958460e"
  },
  {
    "url": "assets/js/184.4cc7f872.js",
    "revision": "e6963341a69886e6715a14b84961d57d"
  },
  {
    "url": "assets/js/185.fb892977.js",
    "revision": "f1d1e7cfb5ca0c2c9a5ef39cabeaa6c8"
  },
  {
    "url": "assets/js/186.5510175b.js",
    "revision": "ead1bcd6ca3f14b263239c030d0f556e"
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
    "url": "assets/js/19.5523a674.js",
    "revision": "28980149817a08d6007d256baa915f8a"
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
    "url": "assets/js/192.09a18a6a.js",
    "revision": "dd0357735d29b861a4da94bf65ef2cd6"
  },
  {
    "url": "assets/js/193.669f6ddc.js",
    "revision": "bdf703a4ad0fbbebe7f99ddb429a7533"
  },
  {
    "url": "assets/js/194.4f779797.js",
    "revision": "25bf7297cdf997007ed01818c0637824"
  },
  {
    "url": "assets/js/195.0b6554be.js",
    "revision": "0a9750269fef8af1965727d426a37f1e"
  },
  {
    "url": "assets/js/196.b2596386.js",
    "revision": "4edcf5e4fc579b54feb29129c743a1bf"
  },
  {
    "url": "assets/js/197.d5d8d1e1.js",
    "revision": "826f49d3dca5b15df6cb31132e12120a"
  },
  {
    "url": "assets/js/198.542d05df.js",
    "revision": "8bcbdf953636306b00da4ab599c1a106"
  },
  {
    "url": "assets/js/199.3e95f3e8.js",
    "revision": "2950d1995abfd424c9b30bf60aa3347d"
  },
  {
    "url": "assets/js/2.e1d7af28.js",
    "revision": "4b1acac5646e4bdba3959ae1486c6041"
  },
  {
    "url": "assets/js/20.9dcdad91.js",
    "revision": "ffe3dcda8e3eea0e5464969d4e6f03af"
  },
  {
    "url": "assets/js/200.e974d7bc.js",
    "revision": "6c8e087769725928664f946f0c12f25b"
  },
  {
    "url": "assets/js/201.a99369ce.js",
    "revision": "7520c121a7f99444ecd4b4f6a251f1bd"
  },
  {
    "url": "assets/js/202.3c09e4a6.js",
    "revision": "c087a16bc2acc642683f3cc9bebb3472"
  },
  {
    "url": "assets/js/203.1d22f4b7.js",
    "revision": "aec7db410bd7371d972e01c90c0c5b7d"
  },
  {
    "url": "assets/js/204.14bd35f4.js",
    "revision": "d87784b0eeadaf6681eedda00a7aeb80"
  },
  {
    "url": "assets/js/205.16095cad.js",
    "revision": "6e14e032e4ba8c696484fbb0fcd12726"
  },
  {
    "url": "assets/js/206.d2171bfe.js",
    "revision": "81fce8044f1f33c084e2bf28e590b485"
  },
  {
    "url": "assets/js/207.1eb9f04a.js",
    "revision": "27984a7d75fa0c56d0be4953354d612a"
  },
  {
    "url": "assets/js/208.f25f4a91.js",
    "revision": "29c6a1816950cfc27515d283ac27cf46"
  },
  {
    "url": "assets/js/209.6c20deb3.js",
    "revision": "1d3a362871dfce221f40f027c389a872"
  },
  {
    "url": "assets/js/21.988df0ba.js",
    "revision": "4e69e9088544bb4f1ef07d5934f04214"
  },
  {
    "url": "assets/js/210.ba3a3a0d.js",
    "revision": "4373d9a136a6b543007a31f70bcc2606"
  },
  {
    "url": "assets/js/211.6c264a54.js",
    "revision": "298ebaa5c996af86870559abc89d276f"
  },
  {
    "url": "assets/js/212.92e3a5ef.js",
    "revision": "a1af344f78cd3dc15cdb290c41652fac"
  },
  {
    "url": "assets/js/213.acb76cc6.js",
    "revision": "776c2ba438d6a8f65f7d5b4bd94b86e9"
  },
  {
    "url": "assets/js/214.5ead3853.js",
    "revision": "88d9104fa7108cfe5b6fe0692a6a62e8"
  },
  {
    "url": "assets/js/215.37cb89fa.js",
    "revision": "50972fbad39f19d61dd87bd5c6d08973"
  },
  {
    "url": "assets/js/216.d2808fbc.js",
    "revision": "935878d9c214ab138782801a98fca8ad"
  },
  {
    "url": "assets/js/217.180edb9b.js",
    "revision": "9c4af158506c1179ee43a2c3175a4b96"
  },
  {
    "url": "assets/js/218.707bfb13.js",
    "revision": "7f1a8af82f85e2862469373609dd5988"
  },
  {
    "url": "assets/js/219.7521af0a.js",
    "revision": "6b3fcb4ebfa01914dc66a8e478953c41"
  },
  {
    "url": "assets/js/22.6138cc78.js",
    "revision": "36a2c4085a09f175e11e96e36c76b674"
  },
  {
    "url": "assets/js/220.d40ba8f9.js",
    "revision": "850c3bf0f031e1225cbeb3e837fbdc99"
  },
  {
    "url": "assets/js/221.f02bb114.js",
    "revision": "e4fbfeca3ed95d03c0a019b054c22fbb"
  },
  {
    "url": "assets/js/222.73508cf4.js",
    "revision": "a75bacc85faef9e0fe8a8bd10a8f11ac"
  },
  {
    "url": "assets/js/223.e3bbcdac.js",
    "revision": "cf2f157a121c499a396bdfc50b5c92ab"
  },
  {
    "url": "assets/js/224.7f4f3b50.js",
    "revision": "3f0a01003653c46cc1f886dba9700116"
  },
  {
    "url": "assets/js/225.308bcab2.js",
    "revision": "d1fcdb245796f2c97fd03d35d44cddb0"
  },
  {
    "url": "assets/js/226.dc59e616.js",
    "revision": "e3546749f762baf94e6c85b5fdfb3c06"
  },
  {
    "url": "assets/js/227.29b3590f.js",
    "revision": "570faebcdcfe0c6a5d50ca32b3e411cd"
  },
  {
    "url": "assets/js/228.c725bee3.js",
    "revision": "8497ec4ee7a2a049fe90b8be68967da5"
  },
  {
    "url": "assets/js/229.dcabbea9.js",
    "revision": "d669881819d11a199e98a7a7ebea4b44"
  },
  {
    "url": "assets/js/23.584ae906.js",
    "revision": "2e16334bdfea704e4332ebf4890b47e5"
  },
  {
    "url": "assets/js/230.632c38d2.js",
    "revision": "a6e4c7f8edf8c22cf0a8652efecf1984"
  },
  {
    "url": "assets/js/231.5e1c9838.js",
    "revision": "be4faf59856b933d6d0a4c3f26847587"
  },
  {
    "url": "assets/js/232.dc630f95.js",
    "revision": "022875b52d0485b2a951d9f297eb29b1"
  },
  {
    "url": "assets/js/233.0ceb6d55.js",
    "revision": "fbfe487824d1f9a1045f6eb9351ee485"
  },
  {
    "url": "assets/js/234.d25aba12.js",
    "revision": "a07de2faf90d5cf8167c881f9ebb26f3"
  },
  {
    "url": "assets/js/235.0d3ca9b0.js",
    "revision": "82571536dd5b47524ecdb95fe1723366"
  },
  {
    "url": "assets/js/236.8160ac00.js",
    "revision": "96bdfc5bcbe0dbeed580b14adcce0265"
  },
  {
    "url": "assets/js/237.70fac43e.js",
    "revision": "eed149455299e82d7b481730db3ac5dd"
  },
  {
    "url": "assets/js/238.4c7de903.js",
    "revision": "e42854671bfecb9eb3ee9bf4d17c382a"
  },
  {
    "url": "assets/js/239.11980bbf.js",
    "revision": "a1cbf788b12d36165f17736dc2852cb6"
  },
  {
    "url": "assets/js/24.8daf4c29.js",
    "revision": "df122c36377a3c42d4ca26a4d0df99d8"
  },
  {
    "url": "assets/js/240.cdbe122a.js",
    "revision": "c0c35c405684f584658b570cfca17d9f"
  },
  {
    "url": "assets/js/241.07fc7309.js",
    "revision": "2bb0dbfc6cefaa2e16c51f96921a7d99"
  },
  {
    "url": "assets/js/242.76453370.js",
    "revision": "21d1dcf4869571ed6c0e4e66045651b7"
  },
  {
    "url": "assets/js/243.fb1345e9.js",
    "revision": "ee487895c8bfb17eaab514d0838086c6"
  },
  {
    "url": "assets/js/244.9e974df3.js",
    "revision": "a25d45a9e73d2135079a83a5ac4fd0a7"
  },
  {
    "url": "assets/js/245.b2f5e4cd.js",
    "revision": "7d6ecf86ac36f2ffbb7e85cd7fdf89d7"
  },
  {
    "url": "assets/js/246.b8e563fd.js",
    "revision": "ceb8e40eb244117aa218931d65d2d7d8"
  },
  {
    "url": "assets/js/247.c7c95c8e.js",
    "revision": "5ecbebc47039ee7f20d8fea26351a523"
  },
  {
    "url": "assets/js/248.a58f0c43.js",
    "revision": "fa1fea30f83532af22cd45cfb57834c6"
  },
  {
    "url": "assets/js/249.b0250360.js",
    "revision": "fafb65e97c4aaca0bbf07b7fbe53af5f"
  },
  {
    "url": "assets/js/25.bb527a60.js",
    "revision": "bd0382d073bcfbaed4acee9f2842acca"
  },
  {
    "url": "assets/js/250.5ec7f423.js",
    "revision": "55f99477a2266a3412562b7f3406d25e"
  },
  {
    "url": "assets/js/251.567fd965.js",
    "revision": "e2a191e4876af0ed00a5f6df34577b12"
  },
  {
    "url": "assets/js/252.8d999785.js",
    "revision": "679db0109570abefb1d5bc2e00f38f49"
  },
  {
    "url": "assets/js/253.406eee87.js",
    "revision": "791fa2989cb0a8257f2de68486c94e5a"
  },
  {
    "url": "assets/js/254.8ac52cd4.js",
    "revision": "e213c6342619e33e86c5f97eea48011c"
  },
  {
    "url": "assets/js/255.a91022c4.js",
    "revision": "f45705a67f2e9e57ee19c55ec227c56c"
  },
  {
    "url": "assets/js/256.0726a5b2.js",
    "revision": "564b73bd20fa235fd4aa67ca4cadd051"
  },
  {
    "url": "assets/js/257.803dc073.js",
    "revision": "ef254a4e452a8a4f5e93b81fea0bc5d1"
  },
  {
    "url": "assets/js/258.a62b2666.js",
    "revision": "31ca68faa171e0d337aa4bd412cf4be7"
  },
  {
    "url": "assets/js/259.45af52b5.js",
    "revision": "7ef984bf3a255a46ced8d75f1bb3531a"
  },
  {
    "url": "assets/js/26.2ee671bf.js",
    "revision": "d320857f4e69172d3693db6dba76a528"
  },
  {
    "url": "assets/js/260.eb2d3987.js",
    "revision": "7917c6520d55eb1eb4f0ccdd528817b8"
  },
  {
    "url": "assets/js/261.eafa4049.js",
    "revision": "3d35bb56c0f4e55ba6f2132852357e17"
  },
  {
    "url": "assets/js/262.31222acf.js",
    "revision": "444267a95a597b54a4e1a29612808445"
  },
  {
    "url": "assets/js/263.f6503db6.js",
    "revision": "6508cc9ac1b0476e5eb7727ea4b2f0b2"
  },
  {
    "url": "assets/js/264.c676ff7d.js",
    "revision": "a776c34959faff7f3e0141d9e74d5632"
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
    "url": "assets/js/267.1c0aa350.js",
    "revision": "4290e3d5126130b27acfa408ea32170d"
  },
  {
    "url": "assets/js/268.7ccf3fc9.js",
    "revision": "a1ba4b0e8a3ea5b267ceaf342875e259"
  },
  {
    "url": "assets/js/269.9cefc827.js",
    "revision": "7e83718c833e3eb76850393ac2683f71"
  },
  {
    "url": "assets/js/27.1ed1ddb8.js",
    "revision": "492cb60705806c26ebda7b582bdc05c0"
  },
  {
    "url": "assets/js/270.6ee05dca.js",
    "revision": "1e1b2337d80c348a3eadd424fc13afb8"
  },
  {
    "url": "assets/js/271.f23be3c6.js",
    "revision": "bdddd36d5994633d7672c0fe76542084"
  },
  {
    "url": "assets/js/272.58788f04.js",
    "revision": "00e4c29735130aa4c9e2b467c58e469c"
  },
  {
    "url": "assets/js/273.95cc907e.js",
    "revision": "c372bf435d5bb9630a7e81613e35801d"
  },
  {
    "url": "assets/js/274.347774bb.js",
    "revision": "336e2f8f731d1f13c425251bb5e1cc42"
  },
  {
    "url": "assets/js/275.3dd03bd6.js",
    "revision": "96b72ca5d10f6a4d50acc3d7f743641a"
  },
  {
    "url": "assets/js/276.2fbc40f7.js",
    "revision": "b4a6161cfd73024abf88d2b8ed01c2f0"
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
    "url": "assets/js/279.7e47ac21.js",
    "revision": "a7219c450fc480d15cdaac07b2f906d5"
  },
  {
    "url": "assets/js/28.d1307ae9.js",
    "revision": "1154398a336568221080a6f8a6737cb3"
  },
  {
    "url": "assets/js/280.e4c24058.js",
    "revision": "37e35a6030bba955073c8ec75bf72fda"
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
    "url": "assets/js/284.518d2e86.js",
    "revision": "948f31b7d6700b2418fd303523518bac"
  },
  {
    "url": "assets/js/285.d181c37d.js",
    "revision": "95f58daecaf8dd0db91b658c83429544"
  },
  {
    "url": "assets/js/286.5eb707f4.js",
    "revision": "82ec64357501f80c2c6df685cc1c336f"
  },
  {
    "url": "assets/js/287.bf49f5d9.js",
    "revision": "a34af11dafdc7bafa32f2acb3cf472f9"
  },
  {
    "url": "assets/js/288.c19f9b73.js",
    "revision": "ca9556307c76774f61eec7d6208e4ab0"
  },
  {
    "url": "assets/js/289.4fa42fb6.js",
    "revision": "c669013b4e8346939896e4767b3a760d"
  },
  {
    "url": "assets/js/29.23a1facf.js",
    "revision": "f299afab49417933336bbec5373524cc"
  },
  {
    "url": "assets/js/290.c12c9474.js",
    "revision": "a038a7ce04fab81af641695a89bf828d"
  },
  {
    "url": "assets/js/291.56bee4ff.js",
    "revision": "15af180645e0b08e08efd4ce3244a263"
  },
  {
    "url": "assets/js/292.5ba6abc7.js",
    "revision": "94f4d68ecc612bf439dc1b6038711305"
  },
  {
    "url": "assets/js/293.97426107.js",
    "revision": "5b23c0feecb6bb174ca5be09a53098eb"
  },
  {
    "url": "assets/js/294.43db6064.js",
    "revision": "d3f04baf474359f90f96d03e108800a6"
  },
  {
    "url": "assets/js/295.3e0779e6.js",
    "revision": "ba0be5491098b1f7547051d522acfb7e"
  },
  {
    "url": "assets/js/296.c6be03e9.js",
    "revision": "17202c9b96332b131c089cf4a4386227"
  },
  {
    "url": "assets/js/297.d54c3084.js",
    "revision": "1e0bed5603a94a6f9502880e567c924d"
  },
  {
    "url": "assets/js/298.44e4def7.js",
    "revision": "ca2ea22293eb45d8f28fd8e95bcbaaef"
  },
  {
    "url": "assets/js/299.8714bc6b.js",
    "revision": "9761cb4c9bb14187f5aa64ee90dbcaa2"
  },
  {
    "url": "assets/js/3.fe31879b.js",
    "revision": "8b36aadb6b4a9b6d16efac34ee8d82fe"
  },
  {
    "url": "assets/js/30.752a7267.js",
    "revision": "f4344d7490e922cb3c12b4deffea45db"
  },
  {
    "url": "assets/js/300.9ae0a025.js",
    "revision": "a15493c1720ed1ed73096781eef2ce95"
  },
  {
    "url": "assets/js/301.ac541b45.js",
    "revision": "2f631fd9f3b2b69bfc9cf2eace70e1b9"
  },
  {
    "url": "assets/js/302.bdc2d2c8.js",
    "revision": "d17bbcdbe86520cf5cdb09f06e5ee6ba"
  },
  {
    "url": "assets/js/303.e1b1d883.js",
    "revision": "b5e0eb49d18b48879ce3e916934a76ef"
  },
  {
    "url": "assets/js/304.7042a85a.js",
    "revision": "c316f5d2d174f243349394c7d59b0f71"
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
    "url": "assets/js/307.07e04877.js",
    "revision": "c875d92464ec40cb3219615ba638cb54"
  },
  {
    "url": "assets/js/308.4de50a0f.js",
    "revision": "c565105ef4d362d56b9a51dc91214633"
  },
  {
    "url": "assets/js/309.ed393238.js",
    "revision": "d1902cfbbec6dfa574566591710919c8"
  },
  {
    "url": "assets/js/31.11a4afe2.js",
    "revision": "6812e0e2eaf1e2a9688a0cfd0cdadf47"
  },
  {
    "url": "assets/js/310.bfd83ab5.js",
    "revision": "26d16590600bb9ca701b0581c92a1963"
  },
  {
    "url": "assets/js/311.ff120a3e.js",
    "revision": "14b905174d1487e1e0fe593153953526"
  },
  {
    "url": "assets/js/312.06678c13.js",
    "revision": "719e7ab597fd0d65a499f765334abefe"
  },
  {
    "url": "assets/js/313.c20bae91.js",
    "revision": "0d8d6ac930d8e0701393fd3e17fbe0bd"
  },
  {
    "url": "assets/js/314.9d7f6967.js",
    "revision": "c2a0d5811cd5c72721c39c42de118e6a"
  },
  {
    "url": "assets/js/315.f513cd89.js",
    "revision": "506cba7b1d78a48f9a22b99d283e2d3d"
  },
  {
    "url": "assets/js/316.ca1c150a.js",
    "revision": "63974e5f70db502f4cc97dfca86529a4"
  },
  {
    "url": "assets/js/317.d5f69004.js",
    "revision": "9354dbd76f4a56f3ef243e3a60ae5b51"
  },
  {
    "url": "assets/js/318.fdcf50d3.js",
    "revision": "ea9964ba35d58c52e7918fe294863197"
  },
  {
    "url": "assets/js/319.3e37625c.js",
    "revision": "6e0566c0e7fbd1e7497a56d60179b3c9"
  },
  {
    "url": "assets/js/32.27a4efc5.js",
    "revision": "90a9cfba2ed2141aef5221f7f2c595ab"
  },
  {
    "url": "assets/js/320.3b1d2b01.js",
    "revision": "3c20cce7240979e57bceab0074b53e7c"
  },
  {
    "url": "assets/js/321.32869f6a.js",
    "revision": "8c429ae0271e182e04cb9e77b85cf79e"
  },
  {
    "url": "assets/js/322.5db52be0.js",
    "revision": "e04fc64cc5c2e183e22b0575e06416da"
  },
  {
    "url": "assets/js/323.84d8cb9d.js",
    "revision": "d9fc7966040993ea06185fc7b1204a48"
  },
  {
    "url": "assets/js/324.59d0b351.js",
    "revision": "b05e8edaa2eb68b03b7d11cbbbf5f285"
  },
  {
    "url": "assets/js/325.bff381d0.js",
    "revision": "6f63ada9171a57829f5df94eb21e66ff"
  },
  {
    "url": "assets/js/326.30cb6bf4.js",
    "revision": "7951b97fb4ee1f7ddf93f750bc5ad5e4"
  },
  {
    "url": "assets/js/327.5c8ee914.js",
    "revision": "f72d98901fb4b601404075ae0930b77d"
  },
  {
    "url": "assets/js/328.c3a89cc5.js",
    "revision": "a2f2c930478ab36e8b651e1d2ef8af36"
  },
  {
    "url": "assets/js/329.ca36cc25.js",
    "revision": "013384da5d05c69f7367c3ceec94ea82"
  },
  {
    "url": "assets/js/33.9f09ac5c.js",
    "revision": "139c9235452096a3298a67458ff57f3f"
  },
  {
    "url": "assets/js/330.1e62b1f5.js",
    "revision": "349553ec404568fee48c7788a8952473"
  },
  {
    "url": "assets/js/331.cd8acd85.js",
    "revision": "f296dc5faa32f47ee1ee7de953ef5d96"
  },
  {
    "url": "assets/js/332.55058762.js",
    "revision": "5f7b278f5284ed263d5cd58e37e6cadf"
  },
  {
    "url": "assets/js/333.145b7755.js",
    "revision": "517145785a49dd5c03e64510db560109"
  },
  {
    "url": "assets/js/334.d5bd8414.js",
    "revision": "271fa4238821c0b47a17887524cb92e5"
  },
  {
    "url": "assets/js/335.0725fc60.js",
    "revision": "819ce0ebef35793e26fcacae7b3ef45c"
  },
  {
    "url": "assets/js/336.ab1c25b9.js",
    "revision": "49785315e3af8cd9eb6490f0d85eb3bd"
  },
  {
    "url": "assets/js/337.9ab7400f.js",
    "revision": "ced247f6b698255f3f10562dcd2f0626"
  },
  {
    "url": "assets/js/338.05a911f7.js",
    "revision": "778a58a5bfbae8f4b19a713e3bd9a757"
  },
  {
    "url": "assets/js/339.c3347153.js",
    "revision": "c07a220601cd2d343d36b81f212cbb8b"
  },
  {
    "url": "assets/js/34.fb0679b8.js",
    "revision": "8bcef8853b1c0ef0a0e330fe0e8b9161"
  },
  {
    "url": "assets/js/340.d5af2108.js",
    "revision": "cdfbd171b050f0be859af9d4d53e5786"
  },
  {
    "url": "assets/js/341.34fb3f41.js",
    "revision": "b4ab0f59e5257810d0faef705bffa411"
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
    "url": "assets/js/344.27573fe1.js",
    "revision": "7e410c83fcf5bf9e2a7f60dafc3b50c7"
  },
  {
    "url": "assets/js/345.8408f3fb.js",
    "revision": "9a745e11664035dbd22366e3daa0c639"
  },
  {
    "url": "assets/js/346.2662d2ed.js",
    "revision": "dc33f1f90cdb8d3aa11d3431c5ee3e04"
  },
  {
    "url": "assets/js/347.cacbfde6.js",
    "revision": "41408a6808d709e0ce65fcb4a0b21960"
  },
  {
    "url": "assets/js/348.f73a0d18.js",
    "revision": "147cf70cccdaabbe5f83711def6cab59"
  },
  {
    "url": "assets/js/349.99219a21.js",
    "revision": "575e39201c653721ca3d4b355b4bcd20"
  },
  {
    "url": "assets/js/35.6866ac04.js",
    "revision": "bf139ae861a30869ecf533a2e1daa2be"
  },
  {
    "url": "assets/js/350.cd066551.js",
    "revision": "9187d7fd9a5f36a9ae9f3558e8630ae4"
  },
  {
    "url": "assets/js/351.55db62e2.js",
    "revision": "6e6e7c6eccbf53debeab4272dac33697"
  },
  {
    "url": "assets/js/352.3996eb21.js",
    "revision": "c834c481315acc9d4d236bbabdbeef7b"
  },
  {
    "url": "assets/js/353.15895414.js",
    "revision": "1c672d83a3747c5e966cf159f376360d"
  },
  {
    "url": "assets/js/354.d20bf7d0.js",
    "revision": "cb7b81dc2de6b4c784ad39d811c93363"
  },
  {
    "url": "assets/js/355.9aee0479.js",
    "revision": "c8c704d9ea5a2c6d1312c45eb409090a"
  },
  {
    "url": "assets/js/356.93795bb6.js",
    "revision": "fc7c9c1fe6abe2f1a648fe76dee7d48d"
  },
  {
    "url": "assets/js/357.38b67442.js",
    "revision": "7b72e27f55a50e43dda5f367a92cb495"
  },
  {
    "url": "assets/js/358.c0056ccc.js",
    "revision": "55165c9b51c0300ce1e412016b5ac64c"
  },
  {
    "url": "assets/js/359.6054b889.js",
    "revision": "69a5720ec8ce0168a6f54ea617452abb"
  },
  {
    "url": "assets/js/36.f72265ef.js",
    "revision": "37dc822e82ea4e9144b75be1b3176a40"
  },
  {
    "url": "assets/js/360.b7fe6181.js",
    "revision": "9dfc4b063e961442e42ca6f6b732691b"
  },
  {
    "url": "assets/js/361.3c036daa.js",
    "revision": "0ff56f6122141fcf53b6606dba23db6e"
  },
  {
    "url": "assets/js/362.3f1a1570.js",
    "revision": "841dba7cfedca1e1ed48d8a0a5961e74"
  },
  {
    "url": "assets/js/363.7044547e.js",
    "revision": "e1b95a6622f40ffbddfd6c1b0ff8a3d8"
  },
  {
    "url": "assets/js/364.f332f389.js",
    "revision": "b48d08d88c5a68239966405a6da59232"
  },
  {
    "url": "assets/js/365.2b5d59ba.js",
    "revision": "4dcddfe00b0368e7f45094c3d26187e2"
  },
  {
    "url": "assets/js/366.dd6e4d5e.js",
    "revision": "4dca3490131894d7636e2ea064d13b7c"
  },
  {
    "url": "assets/js/367.bfd6afa5.js",
    "revision": "35fe2953083114f42af18dd92779d66f"
  },
  {
    "url": "assets/js/368.c4a9156f.js",
    "revision": "901d0fa8b09c522e3650b50e6f0f7ad8"
  },
  {
    "url": "assets/js/369.7dc33ee8.js",
    "revision": "3ace85448be66ceaf154d81223dff43d"
  },
  {
    "url": "assets/js/37.3735b153.js",
    "revision": "dc47bd22d3f82f3cae93ca85314350bd"
  },
  {
    "url": "assets/js/370.84289983.js",
    "revision": "b4d17acd8bf910135cec83f342818fd2"
  },
  {
    "url": "assets/js/371.8a6a5cad.js",
    "revision": "417c9a265ef1f33c2e1cd1ffa7ca9216"
  },
  {
    "url": "assets/js/372.b7ac7b3d.js",
    "revision": "64ab34355b8cb95ce90562ce2a8d3186"
  },
  {
    "url": "assets/js/373.4856573b.js",
    "revision": "9ebee1896a48614c80486627914117e6"
  },
  {
    "url": "assets/js/374.224b9704.js",
    "revision": "90fa8ab8ca92d8ed1dd38176d3328f86"
  },
  {
    "url": "assets/js/375.a94668fb.js",
    "revision": "f7d03b49a47ccef49f94c0f7ef025e56"
  },
  {
    "url": "assets/js/376.df4b7de6.js",
    "revision": "c5e3a6016e646c2688d8f277fddbd9e5"
  },
  {
    "url": "assets/js/377.a7002186.js",
    "revision": "26546c8e5b1f2f8711ea93b75aa04a88"
  },
  {
    "url": "assets/js/378.fa07445a.js",
    "revision": "b24c69a8948f0b6b371bd86b5b55c226"
  },
  {
    "url": "assets/js/379.59abc379.js",
    "revision": "24c646ecc9131c6d134bd12335eec041"
  },
  {
    "url": "assets/js/38.66a58a88.js",
    "revision": "6c2d4aabeddfceb40204c9a2451aca85"
  },
  {
    "url": "assets/js/380.523b21bc.js",
    "revision": "3428b45d21f2c57ced93d72191221162"
  },
  {
    "url": "assets/js/381.7fb85f40.js",
    "revision": "6b445041782d379ae2d0cefe8a5d0cf6"
  },
  {
    "url": "assets/js/382.31740204.js",
    "revision": "6f715de59bef686fa93016d6a717bfd6"
  },
  {
    "url": "assets/js/383.f371ca65.js",
    "revision": "b32b3cf446680d16cef8e79f2880cd91"
  },
  {
    "url": "assets/js/384.578a6c77.js",
    "revision": "b78a754d841e6d6716edf17ce0c86761"
  },
  {
    "url": "assets/js/385.2d6adb41.js",
    "revision": "114b954984dac1762a675f4bacad1f77"
  },
  {
    "url": "assets/js/386.20a13375.js",
    "revision": "c3a572eb7e21b59b752b6cd897652a41"
  },
  {
    "url": "assets/js/387.13e06897.js",
    "revision": "85f701c9946a35bd70dd369377dd1823"
  },
  {
    "url": "assets/js/388.f72a1d79.js",
    "revision": "5461f08a3bea9c6d864ee3eac93829b1"
  },
  {
    "url": "assets/js/389.8c524479.js",
    "revision": "12f257932fda518d52cab5a5a746b04d"
  },
  {
    "url": "assets/js/39.cd7c557c.js",
    "revision": "34385844b94500c8132ca21770424f7b"
  },
  {
    "url": "assets/js/390.959b3334.js",
    "revision": "0153bebf0c6c798dd0c17ff712dd6fa5"
  },
  {
    "url": "assets/js/391.d375d902.js",
    "revision": "f5e07c2dcd82f3729c42bd3532ae5e4e"
  },
  {
    "url": "assets/js/392.c77bf77d.js",
    "revision": "4b5c96c668d61b5202d7ef1500415b74"
  },
  {
    "url": "assets/js/393.4e5c3098.js",
    "revision": "caa3036dbaac6b1ab4056297616643a4"
  },
  {
    "url": "assets/js/394.ea8f110c.js",
    "revision": "05d2f12fff9990e6ec2a3081e79c24f7"
  },
  {
    "url": "assets/js/395.a53d78e6.js",
    "revision": "cde5de0bced7c099cbe6d87f7345762f"
  },
  {
    "url": "assets/js/396.591ea555.js",
    "revision": "eae45e8a43550a516efd0c50c88f974c"
  },
  {
    "url": "assets/js/397.d8430a21.js",
    "revision": "36c9f6e2ac6f77ebf226750ce07bf527"
  },
  {
    "url": "assets/js/4.0facb6ce.js",
    "revision": "adb7780fa0f0210abb93de607a887ead"
  },
  {
    "url": "assets/js/40.88d7c045.js",
    "revision": "ec0d85c14f45ef523902c4f0a392aaf2"
  },
  {
    "url": "assets/js/41.00cc854d.js",
    "revision": "a941d92869bfb58524e0dcaa069c2a84"
  },
  {
    "url": "assets/js/42.154cb951.js",
    "revision": "3ba1786a47ff644bde03961cdb2b914d"
  },
  {
    "url": "assets/js/43.217a8ab3.js",
    "revision": "5a7a6995db90935613955fab22e23953"
  },
  {
    "url": "assets/js/44.fe97a21b.js",
    "revision": "4fcf5e6f439d5e844a5d342843a83148"
  },
  {
    "url": "assets/js/45.dad09d22.js",
    "revision": "ba99d2864681afd4772bc0aafb0fde4d"
  },
  {
    "url": "assets/js/46.461fa1e5.js",
    "revision": "da2c0c94edf166a2cee86e3a14b94ce2"
  },
  {
    "url": "assets/js/47.5744d889.js",
    "revision": "9e090836e39597166e749f15dcae1555"
  },
  {
    "url": "assets/js/48.4d937d6f.js",
    "revision": "27e7d76e9b43ac506504c168cd7669ed"
  },
  {
    "url": "assets/js/49.e6ec0f56.js",
    "revision": "e6cd6cd03fc5178162cd7e41035f4750"
  },
  {
    "url": "assets/js/5.99146eaf.js",
    "revision": "a007d4ef437681678f7b3915833db521"
  },
  {
    "url": "assets/js/50.17c3afa3.js",
    "revision": "dc646611d7aa126ce5dd15b2539c2e94"
  },
  {
    "url": "assets/js/51.ef8054ca.js",
    "revision": "847956ba5c8c2fef1ca721db7caeb083"
  },
  {
    "url": "assets/js/52.8a4fe2b2.js",
    "revision": "3efb0c01ab2d9ead26f2eb0cbc4a3079"
  },
  {
    "url": "assets/js/53.0f58e8c2.js",
    "revision": "7630b62c8f15544a80dcb822e5633aad"
  },
  {
    "url": "assets/js/54.0e88d698.js",
    "revision": "9d829c948625b90c0273f0aa52180d65"
  },
  {
    "url": "assets/js/55.cbd42487.js",
    "revision": "4ee6033887d85d9ff7ad2aa51e188f37"
  },
  {
    "url": "assets/js/56.cc88b7cc.js",
    "revision": "70391f5c131892509f01db644e2a82af"
  },
  {
    "url": "assets/js/57.ecd83a9e.js",
    "revision": "4370e89bd4fdefbda394dc358c33f7f1"
  },
  {
    "url": "assets/js/58.eb1a3cbf.js",
    "revision": "6b41bfbec8b9835d09615d02dd1d6f69"
  },
  {
    "url": "assets/js/59.6f011a03.js",
    "revision": "5a532b9727c5a35238ae95bc259a99bb"
  },
  {
    "url": "assets/js/6.76d2d863.js",
    "revision": "a0bb131a81501001caf64295d5009c72"
  },
  {
    "url": "assets/js/60.eac68bc8.js",
    "revision": "0069aefb8e2863b5408e02f34b379961"
  },
  {
    "url": "assets/js/61.7a71c68a.js",
    "revision": "11982dd2212fba13c34b6068f63e5a6a"
  },
  {
    "url": "assets/js/62.2d1cf941.js",
    "revision": "541f252a2e1f327d8fe0d69c22c3553c"
  },
  {
    "url": "assets/js/63.b777586d.js",
    "revision": "da997a5fa143d39712bacfc90de5d7c1"
  },
  {
    "url": "assets/js/64.b132f147.js",
    "revision": "4fe053e01ad9bc5e5761e0613538a563"
  },
  {
    "url": "assets/js/65.5635c617.js",
    "revision": "abab2a37a38344a2e0ce9754fe692dd9"
  },
  {
    "url": "assets/js/66.4772ea61.js",
    "revision": "4aac75825e9dc56c8b1599b72b774f69"
  },
  {
    "url": "assets/js/67.11e798d0.js",
    "revision": "60abd0ef68d83cd1afff6dade77a297a"
  },
  {
    "url": "assets/js/68.13a96c34.js",
    "revision": "6b0ca40aa030b441719d617ee8e01903"
  },
  {
    "url": "assets/js/69.54020205.js",
    "revision": "9cfa098ac00397034c35d8d1a2f117b2"
  },
  {
    "url": "assets/js/7.6ec8dca7.js",
    "revision": "40823acdbe50e962b2047a89bf91a158"
  },
  {
    "url": "assets/js/70.d47a8ae0.js",
    "revision": "6675ce5fa9515d772c69948b79517de9"
  },
  {
    "url": "assets/js/71.d0c0a7f4.js",
    "revision": "44abe8d2efc6fa6c07f4161c46838e00"
  },
  {
    "url": "assets/js/72.17a3e26b.js",
    "revision": "75ca5ce53548ba465a821789a97e3b64"
  },
  {
    "url": "assets/js/73.0393a18f.js",
    "revision": "62dfaa90c8cf5e3f1a229a112404dce4"
  },
  {
    "url": "assets/js/74.78372f3b.js",
    "revision": "bc3cf47a318f211710782a8242f0e6cf"
  },
  {
    "url": "assets/js/75.892f8e88.js",
    "revision": "f5965773ef1659c941f90f3f0b100f24"
  },
  {
    "url": "assets/js/76.a01ad52f.js",
    "revision": "31e5b761396e5213f6af4b0ff45a021a"
  },
  {
    "url": "assets/js/77.66855019.js",
    "revision": "edc97e27b53b7b4ae6eed03e56f1f477"
  },
  {
    "url": "assets/js/78.4da6f270.js",
    "revision": "6a7b6bb9179d2ca3595e7e63d987c31e"
  },
  {
    "url": "assets/js/79.aac91f30.js",
    "revision": "93718ccae1f2ae5146e81de053d18720"
  },
  {
    "url": "assets/js/8.5e7082fa.js",
    "revision": "b4dd2c34dcb5c4508042e637ae035001"
  },
  {
    "url": "assets/js/80.9690459d.js",
    "revision": "bb16248eebe97fa7f5c3180b1a439fd9"
  },
  {
    "url": "assets/js/81.02c2baf7.js",
    "revision": "dd7d8b9b81df5544fa96d1ae81fcfd1e"
  },
  {
    "url": "assets/js/82.94ced274.js",
    "revision": "7ba91446836215f7c6fed7a51ad976c3"
  },
  {
    "url": "assets/js/83.97380e18.js",
    "revision": "ad1432e98f12d01b1f806a1c56e7c1f9"
  },
  {
    "url": "assets/js/84.26dac213.js",
    "revision": "b41a4c20911cfa030c28f19de14d3a9e"
  },
  {
    "url": "assets/js/85.8a922e18.js",
    "revision": "8bd2965edc136c10c563ce9dad74c789"
  },
  {
    "url": "assets/js/86.c2a9b2d1.js",
    "revision": "50d42a659be1ec67fb5ddbdab5885672"
  },
  {
    "url": "assets/js/87.6b19b9d7.js",
    "revision": "18d8b8da2f9b7833cb8213008baeb9eb"
  },
  {
    "url": "assets/js/88.e46cc953.js",
    "revision": "b1cbe17c31e0f387bfd32c975763783b"
  },
  {
    "url": "assets/js/89.4f70480b.js",
    "revision": "4bef606568da670e67651982010f8a80"
  },
  {
    "url": "assets/js/9.de02dac1.js",
    "revision": "fecda11efc415fcd913ace788964cb27"
  },
  {
    "url": "assets/js/90.f1bb57e7.js",
    "revision": "46f162b115a1b88405d68b9cab1a4fd9"
  },
  {
    "url": "assets/js/91.64fdafb1.js",
    "revision": "7ae1ca9ea148394578df3f00a78cccb9"
  },
  {
    "url": "assets/js/92.f7329d75.js",
    "revision": "6756a7e660a187add5518ca5ab02a7fb"
  },
  {
    "url": "assets/js/93.1783d23d.js",
    "revision": "d694466c7b7ae6c756078bbfadb72005"
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
    "url": "assets/js/96.5d9471c3.js",
    "revision": "86262062db3c5cce1918e7c296261ee6"
  },
  {
    "url": "assets/js/97.d1c65daa.js",
    "revision": "ebe33e828a5be1734b3714816091bc69"
  },
  {
    "url": "assets/js/98.3f3640a6.js",
    "revision": "f1c2913be9c4973d49a09bb336e96321"
  },
  {
    "url": "assets/js/99.3ca7c470.js",
    "revision": "7480beb32eead40ed2445f6b6d0c967a"
  },
  {
    "url": "assets/js/app.ec60e275.js",
    "revision": "09042dd202e163281a7ba36da09bc324"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "393ceff24e70353d9ca5888671b375c8"
  },
  {
    "url": "blockchain/solidity.html",
    "revision": "75287686897922fb38432bbf1b106c58"
  },
  {
    "url": "common/architecture.html",
    "revision": "b42544987173cbedb8fd01f552c518bf"
  },
  {
    "url": "common/code-structure.html",
    "revision": "e500ec27ab3856d53b9cc24e6e3f35d6"
  },
  {
    "url": "common/crawl.html",
    "revision": "3b9276fdfb432588f43494837a022b75"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "d6ba21f8f182cb4166cb165eed828b98"
  },
  {
    "url": "common/debugging.html",
    "revision": "b1bf9a04ded38920f381e05ef2e277ad"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "71e3e7ea75e1d1d2693ca6fa08bb18d4"
  },
  {
    "url": "common/document.html",
    "revision": "fc2fd12d057cd8b5b5304bd855101771"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "ffc21dbe0d6806b6b367ad3dc3a57ff6"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "a0e6cff34bd8e9684dcd51a1f6b0a8aa"
  },
  {
    "url": "common/index.html",
    "revision": "f844031c4f19a9a0fc9039faf54a7f2a"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "20a055079489b13c58f51ffededf3cc6"
  },
  {
    "url": "common/realtime.html",
    "revision": "38d02a16e13a5296e2d61c90289a0387"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "6a1e9f738dd6056158af4c32b2e9fb40"
  },
  {
    "url": "common/refactor.html",
    "revision": "01d1556e18605e866b00706eda097bf7"
  },
  {
    "url": "common/seo.html",
    "revision": "45122eb656298cff4065d196afac9652"
  },
  {
    "url": "common/use-case.html",
    "revision": "a58d7987757d1940cec106024a258e4c"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "1276faf354e6698499dcc09ad23bc535"
  },
  {
    "url": "css/tricks.html",
    "revision": "a4370326a1ac7c9c04c90c79ee85c460"
  },
  {
    "url": "db/architect.html",
    "revision": "77779b59ca0377068984244fe49b3a2a"
  },
  {
    "url": "db/cassandra.html",
    "revision": "6d3df87466c6b5a67b6f0cf0fa7de3e4"
  },
  {
    "url": "db/couchdb.html",
    "revision": "d093b2bc82b9113d3b4afe4c91191061"
  },
  {
    "url": "db/db-concerns.html",
    "revision": "b5f55731998cb92d5bf25adf8abedc94"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "886cba4995d769a7f1febafdbd37a570"
  },
  {
    "url": "db/db-vs-blockchain.html",
    "revision": "f408f78d948d90d3b2a5e346e99820b6"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "c5c1e0f8bc6cac712c419a8903fedf04"
  },
  {
    "url": "db/mongodb.html",
    "revision": "b148c6ba9db91c5801eaec09e8a8f4ea"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "edf28f391ff9ae247236d53262960c32"
  },
  {
    "url": "db/nosql.html",
    "revision": "84daf435b65241c01de5a24503a06552"
  },
  {
    "url": "db/optimize.html",
    "revision": "5032caaf15c901e32fc5c6f97417bea6"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "4c263dcdf5ad05617714ccaba5cb10c5"
  },
  {
    "url": "db/postgre.html",
    "revision": "843e217d0d54ae924a054acd3ad4781e"
  },
  {
    "url": "db/redis.html",
    "revision": "a59b385869f5e68e3fedda78c1b28b0e"
  },
  {
    "url": "db/use-cases.html",
    "revision": "d00068ebf07092c61df0fb94d468b249"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "0ef39cf0b5637a646fe412d2b1a76630"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "604275381a569fe36ccbc3bed752c56b"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "410c1f9bf9cdddde0ae39b176826d830"
  },
  {
    "url": "game.html",
    "revision": "0b7567fe6a79d1ee7d7dc8d9ef2184a6"
  },
  {
    "url": "go/clean.html",
    "revision": "2d88c1ff8b3ae688e5546bf277688329"
  },
  {
    "url": "go/index.html",
    "revision": "48d94a045f5bda1b87662a819bb33fb3"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "cf287d1b6af6c7f55140be6a0a428327"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "f209db7e036af0ced2182c55bb228dbd"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "13d71a54c12531e31defd54f50d1b288"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "6490c411664f2f586edc67f784a6184e"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "097b152f5834fd90cfd9f924fe5487b8"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "0bb45bb70f9e7e74641a46f53e31cd4e"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "282b2a1bdbc9e7b9a8a96345520b10c7"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "fa0d0e368593ebec43b455664568bb0f"
  },
  {
    "url": "index.html",
    "revision": "26c75a4a1482a8be275300b7e6805add"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "61977b22580a1b2fc7a7ba6cd79363ed"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "2382365bcd73c70df13e658467509dfe"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "4ebfd02f289c7d2be94bdb8babef946b"
  },
  {
    "url": "javascript/closure.html",
    "revision": "1357bdd1ca5e59ada907f3d8ad9d1da6"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "2adfcc844d87b56e4be023cdc840af2a"
  },
  {
    "url": "javascript/functor.html",
    "revision": "e451674ab5a3251da8cc0aa8a38efab7"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "54d2bb877d9d28e0787ead832bd9c4a2"
  },
  {
    "url": "javascript/react/mobx.html",
    "revision": "f37e35c5a97e84321b8018cfa72a1603"
  },
  {
    "url": "javascript/react/react-vs-vue.html",
    "revision": "2e88380eadb5047c0b0947d0a4ad1116"
  },
  {
    "url": "javascript/react/react.html",
    "revision": "29dd2366977127315a22348976007aa2"
  },
  {
    "url": "javascript/react/vue_react.html",
    "revision": "f069e5d45a24a89a4cedb7f4afc80d50"
  },
  {
    "url": "javascript/rxjs.html",
    "revision": "d1ca4dbf5fc2f90aaa1a078960eaf178"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "50b2b1a0f940b8f3d9d3f2ab10f2c0d7"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "4c1f159afb6eca2151892b7af720d71d"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "04ed9eea5dfaa585364e37fcf702a986"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "63f66f1a05dfb65ac4ce08a04b42944f"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "f444b3912dfab3fe2e1e1be8d90a1f52"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "8c2fbb67c770c51aae3a14701f495799"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "eaa897c6a6d4f0708da16c0acf9acb96"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "97eb07aa2965a956b7ba2dfdbdf8fa00"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "4e10ae0642bc77616edebd964b43abe0"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "03cc4c06ce51ed960ec1bbd819befdfa"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "b9b09488aa95790a118a2b93c6af9c79"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "ba7b8a4c9ddbeaba53fc832693cf4ce3"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "40d5c69a73ff697f44d354e874a49130"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "c770eceff179e423befc777b51a11561"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "08d31640df09e61ec9367bf62e0f036c"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "8f0c47787cd283fab8fc59039534c555"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "78a756f30efb50d795d24ae5c141491b"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "b48bc8d7d5030fe9d626ea301765f22c"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "713358a15b2f37a8d723f6e3dfec4d04"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "b4190e2338d1c27abc793b4c3e75ec61"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "6bab8a65c11ed0cd396f61da091d6a42"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "8dfe05ae65d40e3a17ef161c8efa27cd"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "129bd19389ecb7767d49c326816c2428"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "e68a6e4d5d9e3d313bb648f5141cf1bb"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "0eb3e3882273fb1a11617bf09dce8d82"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "157cb9192f601742e10d314ab7f6ca32"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "c2bdb986efab4ba8b3f9f3f2cf233f18"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "d04821a5c102e2d5519af00f2f77872b"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "b3b2ac6738182c7caeed1e433c9f456d"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "25eb53d85b8416164a96cbe5107b5c7a"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "aaee3ccddd1f54feab0fd776b2f666bc"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "362fa9a11d9da6f907efe3fff6c5c0f7"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "3f882e1bf2d6a5be2f4433a8dfc44518"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "297aaee645a27e430565b3572904c5e8"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "5dd93531ebe75e9988a8a36a810cd321"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "85b3c56d85d82a8bd6371c154fcfee60"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "585cf2d492fe2e53b3a1dc18462ee66e"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "cad72a0b8109090089b404bfbb706948"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "a243022251fd65df6020872886d8efcd"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "3f29438e04e5a3ca556dc83fdcf2153a"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "ce8234b5dcc2d49bead81eacb694cc2d"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "499c6d623e84e6cfdceab84d3e42fa00"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "4f69cedb5e80e5a93e40eab630a986bd"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "e6df54ef11df0302625ef7ee58443200"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "44c61bd3678332c8606153344c85a897"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "0c60d1595d2ea900a16fe7af376a5a99"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "4ff17379d99bf321e9cffef9fb1a691b"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "c37a39205b2fcc16b747a2ea18436225"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "d54ffa11108a11c5df5c32f7d2f55f9a"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "1038b74c1270b789fead0117a76202d8"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "cd648d5909b6ebf6ace140fa7302a429"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "303b22932d348d098eb36cbcec4cb5f0"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "7aaf75904a5f47266c65e0c1eae42b0c"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "b437afb342030d0b9293887d42dd433e"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "4a32dae7b03532f46302a579641f50ef"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "4c36d72874f7820385bd80170d68f4f4"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "0cf6a915243fb622fc6e12613abd7184"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "478a8054fbd2d6a78dc9cc1ab455a8b5"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "c68ea5a207b4ca02d34cb344ee65b304"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "fb80566981b308349858b498ab571e96"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "b88439942b43cc1d6b963122482ff065"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "16470541f04171fac06442e05279db74"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "39babf06c9bd7e3cef537704f479442d"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "24ca9de6aeab7e2e0e00348b3a46d179"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "d4e3503cde9344b69f7007bae188d500"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "0ab909740128df72a02a51f2689d604e"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "59e75c13ddeb254c1b7f838e75fa8806"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "30195904d78a343eb1be75b80f440c4a"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "9ae2b1918c4fec72e56a8189efed78e4"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "dec20ae873ad6129c4075cff9cd5336f"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "15fb6d7c1453fb154ac16f994c44ad2a"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "f98f0babbed6938cd5b4c5c38281a0e8"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "7f5e07223de151386369f39cda3cff57"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "ab48bbe01e99c887d3c3163d0d9559a7"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "1366e6e439b3a90ade407133e77fc9ff"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "6f6fa717574179da56484e9d2bd9bc8c"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "45d04910f93915620b0d440f870bf2c0"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "0162bc664414f5c951df140415140ff4"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "88d28574ebac53f5543dd589ec554528"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "62977de3b3c3f6e519dc77b4bea8fe7a"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "14f50ce36cff5729f0e5bbfcf80cbddc"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "7b5f3b0100af96d603a4d4bad2c9eb4b"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "021243416b97dca157144ba4cdf7d3fa"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "59b8805121897cc0eb789799b0eaf3a5"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "9eb3862ed7eccae10c8e35b31daa8fc3"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "ef04d72b405fc17f67172d9fd44d28e9"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "904b80cebc16d45448a25aff2d08070b"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "070bdd7999cb3e94b2f46be9c7b852bd"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "d671c5af3e74ee2fe371b27e4e5b528d"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "dbaeeda423e65c8821aa699891c90dd7"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "7af4054cd9ea57b7415ddf09620edf01"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "9f39a1895d256fada81856319c08a90b"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "35123c9648a1901c5e91809ce9704d62"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "4629fa2fca50bfe3a3877a2fcc7f9924"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "b6c8ab14de9ef82fe11f0c9c4f796147"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "3a03e03d2c48b7fbc7636c860d1d0fe4"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "770c474be1988e8b0d95d9fb92a73262"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "12efe921879316afd5549095a113dd7b"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "260940c60a92d3838fa6c52f3c514352"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "a6d0ad28230e3f1d613c701a51138f09"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "9d6528d90cd8d4f5f89ec8004683742c"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "56ab5b1e6a9ac38a4e3aadcccd94ab39"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "7b940e5b85caf8f03cbb5850b0fd02b9"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "63e58a63796c7fd3afb559abffe8fb9d"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "4b5a7b6f4b2b21cc96510dd352c7b1f8"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "66a626cce417286b4b687788c034d517"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "489dcfc664b0a017227f7270d438ad79"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "3f2128b6d1ef1c02bcb958de885308e6"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "112c90ea1a18feaf939c1d26eac17fc6"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "2d5eadfb811956b90f5222ef55ce8056"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "ab15386b1e1ff226f98116cd0298ac7a"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "1b6fa2cdb9720d23bba077165a686406"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "239fc11e8de5929a86680e3dde646381"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "0badf09576b061b702aa076566607c97"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "70491a5139289895773dc5b1f088949b"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "e07f1e952221f5f763b4de7705b716ba"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "93a8ca8a6d03f5d9481fffbcd9731a57"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "7aaff7537a6396f5828938b9b26fb479"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "6373eccd3eb7e157793be0a4b757dbf7"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "5d432553a956fe40310949ff25e69731"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "d3954293a8f71c8b0d3bfb5c639278de"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "0efa9f908252195e6f85a51da785833a"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "40ee65040dea865445ce498ae74ade30"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "b7978613d492f2c325b4ddf1b96a192a"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "39df26b1405119ea475d62fe4d402863"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "a8854c61ebef416070bb77a5fa51e932"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "6fd8615bd48eecb92484004d292a74fa"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "afee5640b6d44783cd75ab0a502850e8"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "b6534ee43eb57788cf22c9f7e6cacd86"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "1b0271751ab54c3fb96a2806dc2d5272"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "8f4250805858ed37b1dcb2fd21382682"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "5213d900239052c23095ec52cd328043"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "e29959b157f451180e8d1eef27b87aa1"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "36a51e38108c4166a68da42f9bc5701e"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "ae24183c75465edc882364fb46355040"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "cd26fe58a28591305133f682a1bf7b68"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "58346cc1e82cfee44830132d6557e977"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "216b1a7cbe0b4dcadbc2b5e275232529"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "fa368d503e0b72aa45809428c9dbd6fa"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "374b0c16166d80fe6c968902c59b1acc"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "64d59048c6e448753d0a79daf193f005"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "1369e029db22f1e1c153d27328475caf"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "9021bffd7962d6daffd9a0a6c71b2077"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "330e866303506417007f2da43528151a"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "c2bda3b477be011feb3cff2d9ffe87f1"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "2a72469b8329a627a455d39fa5a99dc2"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "0901cc0b6da5d4c8bf61dd9823fe8f26"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "206bdb7977e3a62c380783ca23208815"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "c52258824bfcf01af1b83f41f63388b5"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "9ef34fe2e72c605136390240d0fdd1cb"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "cb4fdfff60db86a1d6ccc92250e5e45f"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "bcc40f2f028380e587f041fe5abd7b58"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "4644bed03e29b6579d88d67c052fed2c"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "c02bfee856dcde63b552172049e2c5ef"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "c6c9266137b9c21a0d836fc97e24d07d"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "fab547c4fc3c4b8eafc36a00447b9d89"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "a2397ac79860a49faa0fa3e18e52e1ad"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "36b86f1cfabff2851f92006ef112dc4e"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "0dcf969f343131ded062f960df817d0c"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "97e1d497382d3af300305f6bdf9c236c"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "bc4ec5b13d9eb7da60a94b75b401b298"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "ea342fb63efd45bb1414dee3af60cded"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "cab8f89f9f666c60ba14410a9885850a"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "aae9e549e4c2e4467db652037d6cfb65"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "332dd7707d40b635c981b3605c11731a"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "13920196a9dd996580cc57602694c178"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "faea88a6d8126ef0905bb5db6a927f30"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "0f1cf8186bf9e1013b334e3f926ba0fc"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "1ca5116fb5263d3c40b97aebe99c6cb5"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "abd7c3db8a6ad947e34092d2daa1fc3f"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "94dce391e1f69e1963564f4acae9260b"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "4520b58b6efbea41e9181a974435cff9"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "f59636dbac74ba78510e57a6c3189a8f"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "9d0881324bdbbcfa75b88bf117d7e004"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "a47df0d843d3534983b27e25829147f8"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "919850a8d035927ccb4aeea35770821b"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "0b534c603523f138a9c0e1cb2c995135"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "bce71d4378fa15b3a55c995d6deae17c"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "c89aefd08fdff29b635ca7cd606a9b03"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "17070135cfdd647d4eb562ebec800143"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "0cc24d8b4dc202d1f4b01566fd0e2727"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "6ef32ec3427b7491cd1ed3664b19bac7"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "d9731c8243b2f65866c69edbbddec1a3"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "3320d231f02af3f4e48d751d1cafb559"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "0dcd8bb78fbc9a2e81ceb706d81e1bad"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "149248452c8566172baa6fe69b6ee6ab"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "dd1fb58314276623332ae1824f7ad4d5"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "64468ae95b00c493341228cf5b928d97"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "95b2bac712fd1c3676be3a9ac7a07550"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "5595b8d52be22363b8feec1c82771033"
  },
  {
    "url": "kungfu/template.html",
    "revision": "91917764e51be16a0fb024f137e91b41"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "33ec1d86ee5d4bec935850556768cdda"
  },
  {
    "url": "node/env.html",
    "revision": "196872fda392a2ff58d49fb3b35859e0"
  },
  {
    "url": "node/index.html",
    "revision": "350b28f850c035bda8e7d85d849159ad"
  },
  {
    "url": "node/n.html",
    "revision": "e940ab6ed1357109bffbf6e3cc5146e6"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "d97eebd55ed0a6f6a723bb12175f9ffc"
  },
  {
    "url": "node/npm.html",
    "revision": "c8af278691862773ff9204a5001abd04"
  },
  {
    "url": "node/sequelize.html",
    "revision": "2435e10802e76584ec921c1da5738bac"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "1e230217e7acf2281fbba3170b50cb31"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "0888c0e98a828f2578cd7f9ef5a321d6"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "6e7d8ef7b309dc709226a25c4d23b0f0"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "1427aa8677d6bea855e15e4260f2c234"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "551184e2c68c92128d5b14c1f4d43dbe"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "ab1e7b302d16a6ecfc13f303517bfa90"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "1aed061378e7a4e83d8881e821e8a6e3"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "a81781b01c37edebfd7503a9a5867ff5"
  },
  {
    "url": "php/clean/di.html",
    "revision": "0fbf457678040187ad40579f6bc1d6c0"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "e1681fae0f36778cb82f9753b0e79e42"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "17c42e9029b48a028346fb3e950d58fb"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "a040849742d2cf67e2ff29161a6c0885"
  },
  {
    "url": "php/clean/index.html",
    "revision": "8e114dc99b95c4e12073c3ff83912414"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "87d89e4907a1c161da45a3f6d06bf91c"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "968ad29a5331b8175b4f81849cdac59f"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "26b16fbd030d73b48b8b6e62f636b2c2"
  },
  {
    "url": "php/composer.html",
    "revision": "b276df9b448dc79a9eaba42a7064a9ab"
  },
  {
    "url": "php/crunz.html",
    "revision": "45a67873f3a0cc879cea7c2f5c9cda95"
  },
  {
    "url": "php/laravel/best-practices.html",
    "revision": "30dab27f03c712a0b1ffc390b2f94e22"
  },
  {
    "url": "php/laravel/laravel-notes.html",
    "revision": "975f267f643e52e3c89be120e584dd69"
  },
  {
    "url": "php/laravel/patterns.html",
    "revision": "d350ab7fc5a1dce69182f7b2c1a01b63"
  },
  {
    "url": "php/magic.html",
    "revision": "30fd1e393fff8ed6aaf428616b83a0ad"
  },
  {
    "url": "php/notes.html",
    "revision": "07552e3415c4393f7474e757527b9812"
  },
  {
    "url": "php/oop.html",
    "revision": "31e72399b39d998d394fa3680aef4228"
  },
  {
    "url": "php/php7.html",
    "revision": "a92ca3d377a952a754fa199d6e710e21"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "4f47950e6e06776b242af0eb00761cae"
  },
  {
    "url": "php/reflection.html",
    "revision": "f2ab280059c69f57e90ff986a190b922"
  },
  {
    "url": "php/tricks.html",
    "revision": "50532cfaa59788528301352a0c985033"
  },
  {
    "url": "php/wordpress.html",
    "revision": "b1d4daf3379731bb9fa85ca7f8ed8d60"
  },
  {
    "url": "quotes.html",
    "revision": "accd96e5cd63e49a82307f253b868bf6"
  },
  {
    "url": "refactor/notes.html",
    "revision": "8bb93939e25f929b151a32caa404b1bc"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "ac2beeb37c331106bcad5e8a5090c283"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "027d16d8747f396ac883adc89614f085"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "fe9ce7dcd283cc6a041230c59ed74a68"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "a5b0bd3f8f8bd033b7eb47eaef6df713"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "05e8a33f21bb610a2d85c9f66bb8df13"
  },
  {
    "url": "snippets/jest.html",
    "revision": "e913af6316c6882b073e947802c00e02"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "93599d7b425865c7a421005ed6102ded"
  },
  {
    "url": "snippets/regex.html",
    "revision": "475437931b29cd3fcc02cc5165877672"
  },
  {
    "url": "terms/12factors.html",
    "revision": "8653e6368ea71c27a876ee2fa3eb0b0d"
  },
  {
    "url": "terms/architecture.html",
    "revision": "7af7b13192854ea5eae3be98ffafdafc"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "86fe0d0a6f1f54b1a6bc552c7b0a3bca"
  },
  {
    "url": "terms/di.html",
    "revision": "cfec3dc50c5099afd01ac36bf8b963ce"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "cf05f0092c544ec65fa0059ba4e03819"
  },
  {
    "url": "terms/javascript.html",
    "revision": "cfb646e720a88921873d74b2d1560ff5"
  },
  {
    "url": "terms/patterns.html",
    "revision": "050e1f04878fa0c441d25cce1eed798e"
  },
  {
    "url": "terms/principles.html",
    "revision": "3918b4dc7089acebafad3c569c664b48"
  },
  {
    "url": "terms/rules.html",
    "revision": "4a465c0715c21184a48cfc0cbaa3133d"
  },
  {
    "url": "terms/testing.html",
    "revision": "83cdc9b886f7f5bc7f6dc48b3209cfd5"
  },
  {
    "url": "tools/chrome.html",
    "revision": "edf167c1906f2b77ee5bb3e5112c3a64"
  },
  {
    "url": "tools/docker.html",
    "revision": "d90f997c65b094d16f32ce1c9261b6a3"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "53981f38b43d74a81f39455540135c6b"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "776e6511b607bff07ba7e1667202a2dd"
  },
  {
    "url": "tools/graphql.html",
    "revision": "8391dd92442238395d224b801457cc2d"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "ec5192240ff0649c9a529a5865f411d3"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "f0071cbff1482785bea6e7d81757f940"
  },
  {
    "url": "tools/redis.html",
    "revision": "79f2076d1a74aa882f2592f8fff9df12"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "3a1c5190fac0a47e092a37e4c941ca5b"
  },
  {
    "url": "tools/vscode.html",
    "revision": "bc6ad76e41cd210579fac9157a566155"
  },
  {
    "url": "tools/webpack.html",
    "revision": "cbc622c8355af7007d4f5ccd1e750942"
  },
  {
    "url": "tricks/compare.html",
    "revision": "20b943209bb5d8445779933b42e31512"
  },
  {
    "url": "tricks/git.html",
    "revision": "5b015bbec1c1d6257d76cc262708a68c"
  },
  {
    "url": "tricks/linux.html",
    "revision": "5db4fd61a28ef308f9cb0a60513715f6"
  },
  {
    "url": "tricks/mac.html",
    "revision": "78d8c4eeba72380fbf801d05c4fa4499"
  },
  {
    "url": "tricks/misc.html",
    "revision": "8c93f5d498d6aa3cfb9fad3893928b05"
  },
  {
    "url": "tricks/setup.html",
    "revision": "faffba580eaa0496fa0b93f0eea36159"
  },
  {
    "url": "vue/communication.html",
    "revision": "b8897e6e305f480cb7e580f5fdb18d3d"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "af7903d03ff2f1cafe6c9324a9e7effb"
  },
  {
    "url": "vue/events.html",
    "revision": "29276248c65b6e9eedd2d74375d1d837"
  },
  {
    "url": "vue/references.html",
    "revision": "da791d2c1aa475f4a846771af337cfa7"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "72287d0b0e85641ca8606d2b70dd3ca2"
  },
  {
    "url": "vue/test.html",
    "revision": "eaa45e346201269f0bd28fb35579e47f"
  },
  {
    "url": "vue/tricks.html",
    "revision": "7189eca7d0b14738dca751ec79988e8c"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "b9ec9e1e8c9da5dcfc21e5b2015007c1"
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
