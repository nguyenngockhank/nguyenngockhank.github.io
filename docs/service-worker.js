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
    "revision": "eb1c908c060b69091c29e5d8abf7b9f5"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "d3039c3a3956d580d418aac66d923f77"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "5cba92464ad53b43f41bcd9887902833"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "7055a839c018279ba0dff572aec359bb"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "023edb0d6f841497f337629f5ec3f4b8"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "15fa679d6b8dd79a067fad45e76bb6ea"
  },
  {
    "url": "algorithm/string.html",
    "revision": "891ba5e62a979277fe526fabaf2391a8"
  },
  {
    "url": "architect/authenication.html",
    "revision": "c2661dc3d132594edd5875b06c5ebf73"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "7ca83eb2eeb8915bf3edbe19ddd5c814"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "1b383f0ed1046e3eb06853746c271cc5"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "08f13eacce3e407d6d911dacfde9508b"
  },
  {
    "url": "architect/ddd.html",
    "revision": "977f6ebbb7801994f469ae7c190bfab4"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "e1211f7d5cfc4cb2b3ab38e43637d2da"
  },
  {
    "url": "architect/ebi.html",
    "revision": "a8e1be3f80e5770648012f709599dd06"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "511493cc18a7e689629ec9d14aec1416"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "86dbf53409e81c7b53fd50212e43d7a7"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "ea78a9631cd8e171c2bfa59cb78177e9"
  },
  {
    "url": "architect/index.html",
    "revision": "584bbe532ae7ea25f28b02e18275e1fc"
  },
  {
    "url": "architect/notes.html",
    "revision": "2fb648d71cda4f1129478af77ecc65f8"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "2d7347134bdea10c1a8b4e480cc1df62"
  },
  {
    "url": "architect/refs.html",
    "revision": "d28a6c617e13070c0a0a883092d397cf"
  },
  {
    "url": "architect/soa.html",
    "revision": "35aeb864da828e0d986f2040f245c99e"
  },
  {
    "url": "architect/spa.html",
    "revision": "9804ee6c575b68f193c609ccc4b2a3a5"
  },
  {
    "url": "architect/use-case.html",
    "revision": "8abf6ba1fb36bb0778e4153237ad737b"
  },
  {
    "url": "assets/css/0.styles.15db6eca.css",
    "revision": "f145b0801b2a52b6f6bc6424d08ea33a"
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
    "url": "assets/img/9c897-15aa2cnrij2fvo0rztjczhq.ef6a2f23.png",
    "revision": "ef6a2f232e0105bdefb4faab61ce0b12"
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
    "url": "assets/img/commandbusmatryoshka.ad1a0ff2.jpg",
    "revision": "ad1a0ff2257565c17b7280524dea0e48"
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
    "url": "assets/img/esb-2.20a0d827.gif",
    "revision": "20a0d827ede99e7f026cc8b716164ae7"
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
    "url": "assets/img/hexagonal_original.8737083e.gif",
    "revision": "8737083ec4593abbff4ea7ce9b5e9518"
  },
  {
    "url": "assets/img/hexagonal-arch-4-ports-adapters2.8fdf0f05.png",
    "revision": "8fdf0f051ea9c4a19ee730080506d4cc"
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
    "url": "assets/img/mysql-string-funcs.fc4eedf0.png",
    "revision": "fc4eedf089d148b5da7f1524c8932602"
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
    "url": "assets/img/ravioli.879c03ea.png",
    "revision": "879c03ea16af21239ba8397e4088ca78"
  },
  {
    "url": "assets/img/react-lifetime.09f698c7.jpg",
    "revision": "09f698c70d89d72b146653ce67f79c0c"
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
    "url": "assets/img/uml-diagram-types.bc0f2e36.png",
    "revision": "bc0f2e368d87390eeb9d488a9008c877"
  },
  {
    "url": "assets/img/uml-example.e9d72b25.png",
    "revision": "e9d72b2550f27dc89e62b3423d67e319"
  },
  {
    "url": "assets/img/vscode-search-reg.c883a7e7.png",
    "revision": "c883a7e7d8ec8295b228b7a1d65981de"
  },
  {
    "url": "assets/js/10.ca241997.js",
    "revision": "25d4f81b93d2319ead260c73ea60df33"
  },
  {
    "url": "assets/js/100.272ef389.js",
    "revision": "e2b3fc92155648f6ea707eddff7f5e79"
  },
  {
    "url": "assets/js/101.63d90042.js",
    "revision": "22af381168386ec1dda2b67806f2a1d4"
  },
  {
    "url": "assets/js/102.193325e1.js",
    "revision": "7dbd3f89565e470b59f43865cb855d89"
  },
  {
    "url": "assets/js/103.eae4b766.js",
    "revision": "b67d24e7befc576676238650b7b70868"
  },
  {
    "url": "assets/js/104.5a1b19dd.js",
    "revision": "64555006395187561e155bc1ec78ec42"
  },
  {
    "url": "assets/js/105.e131f1a1.js",
    "revision": "6074fc494008e2a126762e3a0bed4ac8"
  },
  {
    "url": "assets/js/106.81aca899.js",
    "revision": "e8af3ece5539289ca7219b3efc9d2786"
  },
  {
    "url": "assets/js/107.3a551180.js",
    "revision": "2fd2b45d373e48245bbce0916521a453"
  },
  {
    "url": "assets/js/108.5c6a7825.js",
    "revision": "65317f3b5f0fd05b6cf44cce9a4f7c6c"
  },
  {
    "url": "assets/js/109.4d848ea1.js",
    "revision": "4c0bbb90fe2d44f43b52e2783274672f"
  },
  {
    "url": "assets/js/11.6964ce64.js",
    "revision": "fff45a9a91dab690d777251d38e54611"
  },
  {
    "url": "assets/js/110.75b740e6.js",
    "revision": "4b610c71ff6674ea38f587fd579d4a98"
  },
  {
    "url": "assets/js/111.270ea07b.js",
    "revision": "68311f206298dd802ac68dd3ed110cf8"
  },
  {
    "url": "assets/js/112.e9d47727.js",
    "revision": "f878689e391cd551e0e04e3181473025"
  },
  {
    "url": "assets/js/113.1a1da373.js",
    "revision": "80e093df22dbb1fdba7bd36a93af2518"
  },
  {
    "url": "assets/js/114.773e42e1.js",
    "revision": "df01d64eba1ab781b9c6bbf2c34c584a"
  },
  {
    "url": "assets/js/115.f724aaeb.js",
    "revision": "b0883d501f20de35222f2284b4eca2aa"
  },
  {
    "url": "assets/js/116.92784ebe.js",
    "revision": "bd7a088321ed173f6da68dc66623f7fc"
  },
  {
    "url": "assets/js/117.d556cee0.js",
    "revision": "6209e1a88a7241eee0c2f97499b1726c"
  },
  {
    "url": "assets/js/118.2762f10a.js",
    "revision": "5f8b24e91d16d35983c1ed969daddbbd"
  },
  {
    "url": "assets/js/119.d0eab5e4.js",
    "revision": "d7fe1db8dac09a72217e8c6a927e283f"
  },
  {
    "url": "assets/js/12.0ae8c6d7.js",
    "revision": "7e7e979f97ee91a2e4dd8ed3ca38c1fd"
  },
  {
    "url": "assets/js/120.ea2cae49.js",
    "revision": "90b1f730e88d6179d0f7ef18b19ca072"
  },
  {
    "url": "assets/js/121.11f5883e.js",
    "revision": "e1bab5fb76fbfabd5235bee6722adf8b"
  },
  {
    "url": "assets/js/122.c1f2eab2.js",
    "revision": "8f07c12941e619fd961f2caab48e2026"
  },
  {
    "url": "assets/js/123.025f087f.js",
    "revision": "fbf136ea4b8cb6300f77757ac65c7e90"
  },
  {
    "url": "assets/js/124.62cfce9b.js",
    "revision": "44f1c4fe7cfe96c3bf08da93aaa3112b"
  },
  {
    "url": "assets/js/125.eb8c4fe7.js",
    "revision": "49c92f535b0d6a0fe570a9286f32a320"
  },
  {
    "url": "assets/js/126.728280e6.js",
    "revision": "14ea79e6e88b6cad5b6da5f9d77b4809"
  },
  {
    "url": "assets/js/127.414dc528.js",
    "revision": "6b4075a641441338634b9f18c538a3b4"
  },
  {
    "url": "assets/js/128.0f7700ac.js",
    "revision": "e2985a94904587b3fa8adc159cfde1e6"
  },
  {
    "url": "assets/js/129.3bcad115.js",
    "revision": "e8d519d9db2ee5b845c2010d57ccbe2d"
  },
  {
    "url": "assets/js/13.6725a5e7.js",
    "revision": "c0d8b67633d320add61ea786e82f8cc3"
  },
  {
    "url": "assets/js/14.74ad4db9.js",
    "revision": "17f2caba29a19021292102e8abe72dd4"
  },
  {
    "url": "assets/js/15.45a5dc56.js",
    "revision": "5d68621b27d4c1701b104bb3124b02ef"
  },
  {
    "url": "assets/js/16.c606b69a.js",
    "revision": "4cf77960fab2c176bdde25060989508f"
  },
  {
    "url": "assets/js/17.bf623251.js",
    "revision": "c4c09cdec6b447c224c3fdc889b59d48"
  },
  {
    "url": "assets/js/18.75257c26.js",
    "revision": "5daf7ac67bc43b6b54777d418c8b9059"
  },
  {
    "url": "assets/js/19.70a92df4.js",
    "revision": "bba07461145c7c4b34df36b2bb9ba5ce"
  },
  {
    "url": "assets/js/2.05b5c4fe.js",
    "revision": "4de789025ba888e4d6416f80740cd6ad"
  },
  {
    "url": "assets/js/20.ccc2a629.js",
    "revision": "e0617b90aa9ce6a9c6735829400f415c"
  },
  {
    "url": "assets/js/21.89bdb90e.js",
    "revision": "f96b02ef6ce98bba2f52ba9255feb251"
  },
  {
    "url": "assets/js/22.56bf62bf.js",
    "revision": "b3ff1bd5025614887bcd461ac165ddfc"
  },
  {
    "url": "assets/js/23.f78ab2bf.js",
    "revision": "baf74021e47b5b87d8b801c01638315d"
  },
  {
    "url": "assets/js/24.5cd90c4a.js",
    "revision": "e59959a7f5ba10f3f77cdd1d56fdaa66"
  },
  {
    "url": "assets/js/25.7dfc949b.js",
    "revision": "4996761256314222d34c44170328ec40"
  },
  {
    "url": "assets/js/26.95b65b68.js",
    "revision": "73d277f60d1caebd059cbc874dd08d22"
  },
  {
    "url": "assets/js/27.74a1e28a.js",
    "revision": "f81f1f9233f07c849c08f68477362111"
  },
  {
    "url": "assets/js/28.7de52309.js",
    "revision": "3dd2a2d3032fefeb1ac7067606d70cfd"
  },
  {
    "url": "assets/js/29.21783f2d.js",
    "revision": "396f62af159553c82f036f431c00b512"
  },
  {
    "url": "assets/js/3.56480cfd.js",
    "revision": "6c21bf97afc38f1d782f8945cd3071c8"
  },
  {
    "url": "assets/js/30.d6f2db03.js",
    "revision": "6c3025e6f89e852c7c67add623fcf1cb"
  },
  {
    "url": "assets/js/31.853c28b0.js",
    "revision": "bf82bb826cc81bd4943c08593c94c14a"
  },
  {
    "url": "assets/js/32.d186b94e.js",
    "revision": "91e0c2a0c1cc1f7fc275de64c07f28fb"
  },
  {
    "url": "assets/js/33.88ee564b.js",
    "revision": "9fdbd2a8326d64d0161bf2c2e3fb8ba6"
  },
  {
    "url": "assets/js/34.806e7891.js",
    "revision": "5c1ba7f92f288b2457626e7ff598ec7d"
  },
  {
    "url": "assets/js/35.8e752188.js",
    "revision": "f4301afcdb747124ea3460511d56ca4b"
  },
  {
    "url": "assets/js/36.70ff4d1e.js",
    "revision": "8f57f14f04189511a0207bdfdcb9cc0b"
  },
  {
    "url": "assets/js/37.8b7a0c05.js",
    "revision": "d7f8b644a5c111e26ba9efbabd149438"
  },
  {
    "url": "assets/js/38.b2949e85.js",
    "revision": "8a20b38133e1c729ba13bbde66b525e9"
  },
  {
    "url": "assets/js/39.ea043ce0.js",
    "revision": "b49c864f93043d6a7c78bd8087047861"
  },
  {
    "url": "assets/js/4.5773b811.js",
    "revision": "4c5302927e4688bb456d7a7571bfa91a"
  },
  {
    "url": "assets/js/40.f8d637ff.js",
    "revision": "5581beefcb56121e234611cc14e4ad77"
  },
  {
    "url": "assets/js/41.00727405.js",
    "revision": "e9d42a13dc40d68ec54cc74f3b6f7efe"
  },
  {
    "url": "assets/js/42.f8267913.js",
    "revision": "279c2338e360f3d313d230ef8d5e93e5"
  },
  {
    "url": "assets/js/43.6115b57e.js",
    "revision": "f40117a890657ba9ec6c02a017d7d780"
  },
  {
    "url": "assets/js/44.d3f6a702.js",
    "revision": "5ad65a084c4feb948db2848ffdb35954"
  },
  {
    "url": "assets/js/45.88a7ca63.js",
    "revision": "49c0b35e903e634c56bb9733e74ab457"
  },
  {
    "url": "assets/js/46.068dcff4.js",
    "revision": "89da43fc73f711bf354c15d8426e7dfe"
  },
  {
    "url": "assets/js/47.c7c70896.js",
    "revision": "03c1953c253cf0e7371f9d23e7b3514f"
  },
  {
    "url": "assets/js/48.c48cb983.js",
    "revision": "4f8be5f733c178c98715b7f337159501"
  },
  {
    "url": "assets/js/49.1c26815a.js",
    "revision": "a9bbadadd69f5fc62eec251d9ce08648"
  },
  {
    "url": "assets/js/5.15b4f02e.js",
    "revision": "b250f9925d635b71fbd0f7b8b21fd157"
  },
  {
    "url": "assets/js/50.c6009966.js",
    "revision": "7e36a713170001d239c9f80748b2440f"
  },
  {
    "url": "assets/js/51.688db3a2.js",
    "revision": "c01270a03c0879c4621ff29602d27225"
  },
  {
    "url": "assets/js/52.bc008b0e.js",
    "revision": "d3b56a2be564264446be44a804004410"
  },
  {
    "url": "assets/js/53.906bc93f.js",
    "revision": "c409ef9bc8532d1b2a432863684e220e"
  },
  {
    "url": "assets/js/54.7a17f2b3.js",
    "revision": "01ca8e21ef8405895bb290a5d44afa87"
  },
  {
    "url": "assets/js/55.94390983.js",
    "revision": "6f146fcacc34dc0b45724598b4bdcc95"
  },
  {
    "url": "assets/js/56.c4ecda64.js",
    "revision": "aa1ca38e6f9d456743633941c3c09c0a"
  },
  {
    "url": "assets/js/57.12d88a1e.js",
    "revision": "9867d8b32396285ce44bc936c2d836c2"
  },
  {
    "url": "assets/js/58.d8acaf01.js",
    "revision": "adb0658aa598d647c711b99a3e2099f9"
  },
  {
    "url": "assets/js/59.654b433b.js",
    "revision": "35b7973f3a9e7df6ad6c3d953d767a61"
  },
  {
    "url": "assets/js/6.10fb9aa1.js",
    "revision": "dfaf8d721f911d85d242021246313b80"
  },
  {
    "url": "assets/js/60.8e36f871.js",
    "revision": "3013c6d60577ddcd9a5987fb0cf00ada"
  },
  {
    "url": "assets/js/61.6f922747.js",
    "revision": "c3bf1a269ce6a7a76fb110ddc15907c2"
  },
  {
    "url": "assets/js/62.644911f5.js",
    "revision": "bc24dcedfc03705f08eef68d7d7638f2"
  },
  {
    "url": "assets/js/63.386fa2dc.js",
    "revision": "f5a837bd5f3a71b6983f22f45a92da13"
  },
  {
    "url": "assets/js/64.1013043b.js",
    "revision": "c4aaf33dcdc5636027da3850bcefcbf3"
  },
  {
    "url": "assets/js/65.213fa3c7.js",
    "revision": "f842d985b43333fd627652eb255c7f46"
  },
  {
    "url": "assets/js/66.c6a7b017.js",
    "revision": "461432f3b3709134ecce7bdf1ef47b98"
  },
  {
    "url": "assets/js/67.6e8f9d6d.js",
    "revision": "7fb9ecbba4373d9bae483f513d84f790"
  },
  {
    "url": "assets/js/68.0d87e841.js",
    "revision": "92e0eaa2b639becf5386ca06a89747f5"
  },
  {
    "url": "assets/js/69.60139204.js",
    "revision": "26bdb0075cac25a8d7e53c30a66574b3"
  },
  {
    "url": "assets/js/7.09276b0e.js",
    "revision": "f795b04d15a68658076e69706d80611d"
  },
  {
    "url": "assets/js/70.cb057cae.js",
    "revision": "86b3854a2dc2ef3de451784236c9fde1"
  },
  {
    "url": "assets/js/71.1a87ea5b.js",
    "revision": "da95b2ace10bc95098e4467fb6ff0245"
  },
  {
    "url": "assets/js/72.0201a74f.js",
    "revision": "184275e387a761bf501fd2bdcb792482"
  },
  {
    "url": "assets/js/73.22e308f6.js",
    "revision": "9215fba6f0d9fbbc8746ea75c84c994b"
  },
  {
    "url": "assets/js/74.bbf09501.js",
    "revision": "b5b61ae9ddbf64bf1d6b1d9acaf36d46"
  },
  {
    "url": "assets/js/75.ea1431e7.js",
    "revision": "28b2f8c3d8271788480c42e4381b86c8"
  },
  {
    "url": "assets/js/76.7a9d2aca.js",
    "revision": "d806768f6d9dc4020cf423a22d75f9e8"
  },
  {
    "url": "assets/js/77.c1ac373b.js",
    "revision": "4e5a188727104f802ad85907118a5b8b"
  },
  {
    "url": "assets/js/78.1f85cc65.js",
    "revision": "a4cf6accc78e0ae38da9224fb4e200bf"
  },
  {
    "url": "assets/js/79.94fd30a6.js",
    "revision": "3a6c2ec5d9f4d281611febd450a26508"
  },
  {
    "url": "assets/js/8.4614a6b1.js",
    "revision": "615d1709555936df83230f193920fc8a"
  },
  {
    "url": "assets/js/80.6bb331a8.js",
    "revision": "7fbd5766b8b55d690adacfd1b12ebbae"
  },
  {
    "url": "assets/js/81.a4b6da90.js",
    "revision": "4c859858e61596064c4157784ced5ccd"
  },
  {
    "url": "assets/js/82.0d83497c.js",
    "revision": "f158ebe246f9bed60e8c61373e8936ab"
  },
  {
    "url": "assets/js/83.da5e00ee.js",
    "revision": "1b82a02db316cab9bc15334e1bca2186"
  },
  {
    "url": "assets/js/84.0a3017cf.js",
    "revision": "198beb51b0a96562dfb2e9a39f4f9f7b"
  },
  {
    "url": "assets/js/85.84de3569.js",
    "revision": "6432663f2efa85f4b70ab03d6454dbb7"
  },
  {
    "url": "assets/js/86.3cef8889.js",
    "revision": "11fba09a1d6191ac0e37da297b6aabd8"
  },
  {
    "url": "assets/js/87.d7fb7759.js",
    "revision": "a48ebf59ff024b4d000ae714cab580aa"
  },
  {
    "url": "assets/js/88.184cdc15.js",
    "revision": "9b4aa3921e9cb62bc3b0be2388d0507a"
  },
  {
    "url": "assets/js/89.0de0c3e6.js",
    "revision": "6acf1be81738d798fcb82a5cf401d212"
  },
  {
    "url": "assets/js/9.c1df9c9c.js",
    "revision": "5c1cefa7d848df3494d1a732468997e1"
  },
  {
    "url": "assets/js/90.499a5389.js",
    "revision": "d12e37efebfdacd31e0e5105dd45f534"
  },
  {
    "url": "assets/js/91.6d3f405a.js",
    "revision": "754c2bad8a7dfa173084905579039830"
  },
  {
    "url": "assets/js/92.0cb99628.js",
    "revision": "eb807542bf211760e44d290b579d1932"
  },
  {
    "url": "assets/js/93.525ddf5b.js",
    "revision": "913d8eb1f9ce6dbe950a8b292956c82a"
  },
  {
    "url": "assets/js/94.379184b0.js",
    "revision": "a75fd9e84807e3af48599a0105cadf13"
  },
  {
    "url": "assets/js/95.60508ca1.js",
    "revision": "f4d2e0ffe812724d7b518e9e5400fffa"
  },
  {
    "url": "assets/js/96.c4702063.js",
    "revision": "a80f849a7f47aa7e1597229703f61209"
  },
  {
    "url": "assets/js/97.d03a560e.js",
    "revision": "767cb73ba4140e2c4d69faa2246d3e75"
  },
  {
    "url": "assets/js/98.ac13659e.js",
    "revision": "ca86ef876a7bd23b55373e4d762cc3b3"
  },
  {
    "url": "assets/js/99.6e73eb41.js",
    "revision": "4313d181453da96cadf5ceb89091956a"
  },
  {
    "url": "assets/js/app.ca96e69f.js",
    "revision": "46f2e8c76c2a927b96ede6136d1ebeac"
  },
  {
    "url": "common/architecture.html",
    "revision": "769b05a5fa91483b41c26889ec057761"
  },
  {
    "url": "common/crawl.html",
    "revision": "39b2462ed590429983822375ca4a5232"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "9cb6e6a2a2007c2cf5d58a1c79c3eb6a"
  },
  {
    "url": "common/document.html",
    "revision": "0e31bf59aea5ac97970dda3bf7b4acb9"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "5ef88f7d3b17ff9f4b2fd62927c6be7d"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "0fb3f1e3ec25c1a0dbe20526f5ff7c3f"
  },
  {
    "url": "common/index.html",
    "revision": "36834911c210edbc96d36ebcb2b0ecaf"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "2492463f6659081e4edd5d36b9c388e7"
  },
  {
    "url": "common/realtime.html",
    "revision": "eef83b5bc01c7cc7f41d1f64377f6938"
  },
  {
    "url": "common/refactor.html",
    "revision": "66dc7721ad91cebb8dbc1b6d5153c1b7"
  },
  {
    "url": "common/restful.html",
    "revision": "c30bee6f27fe07bb47b70595ee842b9f"
  },
  {
    "url": "common/seo.html",
    "revision": "d8e9eeeaf57fddd7b1b7b42e7fc43aa2"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "0f521b06c6439729527e95ef5c0ae7fc"
  },
  {
    "url": "css/tricks.html",
    "revision": "a6fd16cac4950adb3c07f5c11c0212ac"
  },
  {
    "url": "db/architect.html",
    "revision": "8c0d10b7fb544842e93daaaf8fc670c0"
  },
  {
    "url": "db/cassandra.html",
    "revision": "336aeaea7f127f0c6ed13bd82079984b"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "a570412d73eda4244a7fa491a0a90699"
  },
  {
    "url": "db/optimize.html",
    "revision": "b91dc664ecf69749bcd38078e7e3bef8"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "f22ba729e6d20f6a95122782677ac0ad"
  },
  {
    "url": "db/sql_nosql.html",
    "revision": "5c164a1ed3081cfc18170ae9e60869d4"
  },
  {
    "url": "index.html",
    "revision": "5caf4ad5bae53dd3b5c09ed8a391efb5"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "7da6b418fe4d8f092b8280b3653b3589"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "df20dd9d5508805520271b5afac1b3ea"
  },
  {
    "url": "javascript/closure.html",
    "revision": "47a364087ade5510eeb92378ebd0bd7d"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "7c01b917aa05ff0c09c0c1543a588d11"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "95fca653bb27be77fe5b288ea5324cd6"
  },
  {
    "url": "javascript/react.html",
    "revision": "8fa2d1f4fb77a29529f82155f258b9e6"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "004dc7608dfcba11f618d73d54084add"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "83d37b047445b4438a20dc04e2f55c07"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "a5b95639af6d4ed5437a8808804cb4b8"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "217c876bb13137f5c72701070645a261"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "e8e55d0130c58e777750a9829c4d30de"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "548f2d28a37a0b9c6ded8a6a78d3294c"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "9816ce28c8fc4f9454e0b255d3e9d637"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "6038eee3bb81d0cad2fa66d9fde90fcf"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "a8577fc565f16078d25305649dbce653"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "144b09582e0a2f66cd3bee4ec54d1fcf"
  },
  {
    "url": "kungfu/js/vue_react.html",
    "revision": "c8570e42d7f10e81893aed8f16a90e4d"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "68cf951a8d7ff8a9ad80e32c81c103ac"
  },
  {
    "url": "kungfu/template.html",
    "revision": "5c79d75344972d18b5571b1837cc43ac"
  },
  {
    "url": "node/env.html",
    "revision": "417388e189cc7819718dd8da4124fba2"
  },
  {
    "url": "node/index.html",
    "revision": "9faec636a4ad984c91f639e840d710dd"
  },
  {
    "url": "node/n.html",
    "revision": "08bc363d93c274020271c7154a852627"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "368175b0af9933d8eec4b3cb4a3876b3"
  },
  {
    "url": "node/npm.html",
    "revision": "597bee53dc32af0d1c1efad7596bb857"
  },
  {
    "url": "node/sequelize.html",
    "revision": "dec755cb5e282773d5a8226afdbfc1c0"
  },
  {
    "url": "php/composer.html",
    "revision": "e4d0277b4bbc5cd30b377d4146503111"
  },
  {
    "url": "php/crunz.html",
    "revision": "be17aa64e907b83598c1fa8919cb539c"
  },
  {
    "url": "php/laravel.html",
    "revision": "f290bbe4a123e1100e986d0d1f3daad7"
  },
  {
    "url": "php/magic.html",
    "revision": "e0ebb1bbfa627845c320c158d983f0a9"
  },
  {
    "url": "php/notes.html",
    "revision": "1c5c76f4bba50e919fbf1bb911fbf602"
  },
  {
    "url": "php/oop.html",
    "revision": "9ebd55d697eb24d3d4ee8e83fb359b62"
  },
  {
    "url": "php/php7.html",
    "revision": "4a98b4a970aed8e772bfe928f57ebc35"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "d4d854f525c0fde70b58a86fc1ce01b0"
  },
  {
    "url": "php/reflection.html",
    "revision": "4d8b9f5f6bcc16817c4e5e25d63838e7"
  },
  {
    "url": "php/tricks.html",
    "revision": "bf17f37421735dc942fce39204038e59"
  },
  {
    "url": "php/wordpress.html",
    "revision": "cacb66ca6b001837d9f24e803eb62e6a"
  },
  {
    "url": "quotes.html",
    "revision": "b155ecbcb22a90e39ac63fcd937442c0"
  },
  {
    "url": "refactor/notes.html",
    "revision": "7730cc5cbf1fc25ae2a7e1df0dc81616"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "47d31986e7c0ff206843c9eea6109cce"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "54af7d2d5f94a243d43ff166aef0f2cf"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "c4936c24e3bb6211472b6475472173ba"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "e5b1ee427a8c74be2d3f192c06fee980"
  },
  {
    "url": "snippets/jest.html",
    "revision": "58023c75210ad001678bf9085d712d24"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "0aee8235b301a6ac415629eda243c19b"
  },
  {
    "url": "snippets/patterns.html",
    "revision": "17a7b16a8ac5dc8521f9eb868aed971c"
  },
  {
    "url": "snippets/regex.html",
    "revision": "63bcf78341451b43d31f426a619d9700"
  },
  {
    "url": "terms/architecture.html",
    "revision": "9201e02b329d2b8615b38f73e4750814"
  },
  {
    "url": "terms/ddd.html",
    "revision": "b1ac6963425fde25adf8f8c8141c6178"
  },
  {
    "url": "terms/di.html",
    "revision": "8fcca6bd51ac47f201c11da0bdefd796"
  },
  {
    "url": "terms/javascript.html",
    "revision": "da90778dadf0e0ea8ec7a82d2b4b12df"
  },
  {
    "url": "terms/oop.html",
    "revision": "28abf4268b3a5aad6bf2f8e9ccd71196"
  },
  {
    "url": "terms/rules.html",
    "revision": "fda41b47d389fd81d00591db642cc920"
  },
  {
    "url": "terms/testing.html",
    "revision": "cea7b0132fbd39b08a4e1b12e367f08c"
  },
  {
    "url": "tools/chrome.html",
    "revision": "e919d3726d75b524758879fc71c14930"
  },
  {
    "url": "tools/docker.html",
    "revision": "c61e96d5a1e50cb53b8d145ed9f8dedc"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "30cccbdd718a2ce876942236d6c7dcf6"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "ccea373c716121937d1dc67a88a75772"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "8a22f78bd4380762cd7e1a62cbd151af"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "b3dafcdd7b24ebe1cf193238df7cccac"
  },
  {
    "url": "tools/redis.html",
    "revision": "572279d872b882b38b176fe3afe43035"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "23f3d9a89cea8678394799f898840eed"
  },
  {
    "url": "tools/vscode.html",
    "revision": "313d3579d71244e7e1fe220d76d33336"
  },
  {
    "url": "tricks/compare.html",
    "revision": "0859b06318ab432ecc073b5a4e54c4f0"
  },
  {
    "url": "tricks/git.html",
    "revision": "5acc8137f59fa5591c5b14329c8590c6"
  },
  {
    "url": "tricks/linux.html",
    "revision": "8751627bb00597fbc90928adbc4a0739"
  },
  {
    "url": "tricks/mac.html",
    "revision": "2bf89974813e5ae5a044ce5d2bf58518"
  },
  {
    "url": "tricks/misc.html",
    "revision": "4677319f88ec9f9f8a9c075467dec97d"
  },
  {
    "url": "tricks/setup.html",
    "revision": "a5f441d3498f819e9597ab4b36c8937b"
  },
  {
    "url": "vue/communication.html",
    "revision": "24c867b300a10999a3cc4fa2cede866e"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "81611b4251d784c058755d168485c23d"
  },
  {
    "url": "vue/events.html",
    "revision": "28272dfe6d60e785e8978aea2c4b4916"
  },
  {
    "url": "vue/references.html",
    "revision": "8aef4c49e56fa97ccc5123776baebff1"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "a0dfbf16dabae9c512f25ce62960977a"
  },
  {
    "url": "vue/test.html",
    "revision": "b710590fd5463c8692219a81eb6c9949"
  },
  {
    "url": "vue/tricks.html",
    "revision": "7c2dac49eb5464bfa562f88b58dd596d"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "ba182e9bdc8b59e79ea1630615344ce7"
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
