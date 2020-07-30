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
    "revision": "1f92db912a3067d4ea62d55a3ae6ce79"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "2235f0bbdbb25b838f6e9f5fb4e7439f"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "26cf5942e047b6862dcdfb5ae9dad2dc"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "557958b4ed644973cff5ec89e27bd4e9"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "7eb2e1cb1924295ad075df0a5948f94d"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "ff181f121409f91c3566bb5119dc193e"
  },
  {
    "url": "algorithm/string.html",
    "revision": "aa7ff7f905142202d19ed960c09a22b9"
  },
  {
    "url": "architect/authenication.html",
    "revision": "437822a2a495a8e8e15054177c1e3f8e"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "39b9bfddbebc29a6a6e7746df6b95184"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "725e56f2473736464080ecf6b45ae477"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "7a1118079a2ba14ed53284ef8c631774"
  },
  {
    "url": "architect/ddd.html",
    "revision": "83b21cfc20152c22c5511485d03e7695"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "4c8067ca46b5f99b160c6ce82caea9ae"
  },
  {
    "url": "architect/ebi.html",
    "revision": "be6e8aae3442c6c306489c041d6cd07d"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "7014c6723dc48e3d4a7ae648a463a7a8"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "eff0f6ce9402b5ac3d6569ca3fdea332"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "0bb6080f5a070f8c6ad207a524ac7ad0"
  },
  {
    "url": "architect/index.html",
    "revision": "af7ae4021f1faec3fe2f130be376f11b"
  },
  {
    "url": "architect/notes.html",
    "revision": "f9007bce65817224ac382b4beca955cb"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "8235899f7bd5391d8963d499daa232d6"
  },
  {
    "url": "architect/refs.html",
    "revision": "17acfa6c524a30b88279b8aa8bd32f22"
  },
  {
    "url": "architect/soa.html",
    "revision": "a0b9e35d61827890082599389e8070c4"
  },
  {
    "url": "architect/spa.html",
    "revision": "e53a7c2e7b31003c4fd31b0c7baa6a25"
  },
  {
    "url": "architect/use-case.html",
    "revision": "72db1014f500ba24e89cb1ff5780bb1a"
  },
  {
    "url": "assets/css/0.styles.bf7166b8.css",
    "revision": "98a8e6029fbfaa4f42eea17e16db1da1"
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
    "url": "assets/js/10.1092ff9b.js",
    "revision": "2715ee75488c6bbb5c984fc36a753efa"
  },
  {
    "url": "assets/js/100.72c1fbc0.js",
    "revision": "90434f88a28d78a68a47b9fd3d9000c1"
  },
  {
    "url": "assets/js/101.7c3dd45f.js",
    "revision": "85ee42875861403d60d7ac0d775bbb44"
  },
  {
    "url": "assets/js/102.4ae1de92.js",
    "revision": "f878d4751dc43c905e51e0e56de2f8c1"
  },
  {
    "url": "assets/js/103.3f041110.js",
    "revision": "c2258a10e5eff2b2612fa781b94504bb"
  },
  {
    "url": "assets/js/104.c8f81995.js",
    "revision": "5548784bdc4bf886655e86e992313d48"
  },
  {
    "url": "assets/js/105.c455640d.js",
    "revision": "d2719d2aa174ad35a62b21a2fe321423"
  },
  {
    "url": "assets/js/106.d4a71b31.js",
    "revision": "1b8024934811bb612d8610cf19c780bf"
  },
  {
    "url": "assets/js/107.4c055f76.js",
    "revision": "f583cb982ff50c567f6bfa8d9aa894b7"
  },
  {
    "url": "assets/js/108.e83ff597.js",
    "revision": "53cee443e6692249b321f2dc16798e7c"
  },
  {
    "url": "assets/js/109.1ca271bd.js",
    "revision": "a9bb478e951034110f91c7be4b7a22db"
  },
  {
    "url": "assets/js/11.2d342bef.js",
    "revision": "7211ede34cb5202bb744a7b8674a2624"
  },
  {
    "url": "assets/js/110.ca99664c.js",
    "revision": "f9677a983ef8fd2094dd2094d251e2a4"
  },
  {
    "url": "assets/js/111.b95871b4.js",
    "revision": "1a650446b36f7696920a6ba501b746ce"
  },
  {
    "url": "assets/js/112.0bf7e886.js",
    "revision": "dd59092a40d4a1860fcaef90f8b2909e"
  },
  {
    "url": "assets/js/113.1350eb7d.js",
    "revision": "4140bd181bcb4ee71bd4ffbc33f81a4a"
  },
  {
    "url": "assets/js/114.42ba8796.js",
    "revision": "c7224fb507739f62585949b4598eba82"
  },
  {
    "url": "assets/js/115.0974e592.js",
    "revision": "45549b623686b2dbe4749289ded88212"
  },
  {
    "url": "assets/js/116.2db8bc6d.js",
    "revision": "5c01cd63b3b26b9fa90cccf9de973258"
  },
  {
    "url": "assets/js/117.aafcd841.js",
    "revision": "8e97be3f2c7380a5c866e6d77ed8f524"
  },
  {
    "url": "assets/js/118.72fb8a20.js",
    "revision": "2f602d5d2b22ae57f0dc01d3a1ed3235"
  },
  {
    "url": "assets/js/12.9ea81ce6.js",
    "revision": "7cab20206433bfbe6930afb13034a149"
  },
  {
    "url": "assets/js/13.ecd62c39.js",
    "revision": "b94c6fb2f3fc36a7d7230cb180d98ecd"
  },
  {
    "url": "assets/js/14.caa402c6.js",
    "revision": "a0e3e5732bcbc2fbac421ccbfb07e564"
  },
  {
    "url": "assets/js/15.4be45131.js",
    "revision": "4fa409f1dc9c65c47483b560e225f4f6"
  },
  {
    "url": "assets/js/16.f5f5be78.js",
    "revision": "72239559f34bfb10457b64fa893406b8"
  },
  {
    "url": "assets/js/17.afa57222.js",
    "revision": "32a6a53ea29b7d2b16e8772ef5fb0db2"
  },
  {
    "url": "assets/js/18.4c3de607.js",
    "revision": "2e5f435b7fb6dd68b0b0630e133686ea"
  },
  {
    "url": "assets/js/19.5a0c89e7.js",
    "revision": "3f2c552cc7b4a4cda4ab2ed4ea56c85a"
  },
  {
    "url": "assets/js/2.c7238a5d.js",
    "revision": "32b9484aac113e418abba4bc32e17808"
  },
  {
    "url": "assets/js/20.e7eedee6.js",
    "revision": "fe71153a95ffe22a070f2fe1ce64a8e3"
  },
  {
    "url": "assets/js/21.32c6f402.js",
    "revision": "9b7ea96f7be8f76fac4d4613f3d515f4"
  },
  {
    "url": "assets/js/22.93fd7776.js",
    "revision": "2ee399091189195521910deea0506b2d"
  },
  {
    "url": "assets/js/23.bf7b4416.js",
    "revision": "a218da48bae5e70bf67b162c26c5afcc"
  },
  {
    "url": "assets/js/24.72dbf9d1.js",
    "revision": "d1a5f8d3adde4dabbff5f6898c2ade53"
  },
  {
    "url": "assets/js/25.4ab0d4af.js",
    "revision": "73ce91bba0f4cfec42f99205ed9f8bed"
  },
  {
    "url": "assets/js/26.dc20d12d.js",
    "revision": "718ff0b6a7143865eb4e660df9a065e2"
  },
  {
    "url": "assets/js/27.b66e14e3.js",
    "revision": "08a78194e8f723bcb282f4182608d855"
  },
  {
    "url": "assets/js/28.3708cb2a.js",
    "revision": "a33c8931355bdcccdd43d3de9781f0fb"
  },
  {
    "url": "assets/js/29.13c841d8.js",
    "revision": "e00fdf2931e51aa87372d9ea87918169"
  },
  {
    "url": "assets/js/3.29632288.js",
    "revision": "eff7d82326942101354810eb056dc343"
  },
  {
    "url": "assets/js/30.91c7e8bc.js",
    "revision": "f9031f95039e30ce6f1a417c4ac7b190"
  },
  {
    "url": "assets/js/31.4349377b.js",
    "revision": "f792a426347bdf8fa56b10c69245bbe0"
  },
  {
    "url": "assets/js/32.5569e2f8.js",
    "revision": "4fccaa5b4851e7f03c3d17d293807e45"
  },
  {
    "url": "assets/js/33.49160b86.js",
    "revision": "73066331f2e1135e3cff491515f51c4e"
  },
  {
    "url": "assets/js/34.691723d8.js",
    "revision": "4200af8f07903c37daf91bffb3b3c024"
  },
  {
    "url": "assets/js/35.f6d2a9be.js",
    "revision": "990d4b03cddd241623ff6ffe5141ec7d"
  },
  {
    "url": "assets/js/36.8513615e.js",
    "revision": "bbaf7a5a0d96753fd188514d5b94b0e5"
  },
  {
    "url": "assets/js/37.9869cd1b.js",
    "revision": "c434b61ff78e6e26a571f20fc5caca89"
  },
  {
    "url": "assets/js/38.1fa67f4f.js",
    "revision": "ed5f25ec01e4b05bcc791e736e20dac5"
  },
  {
    "url": "assets/js/39.fad03b00.js",
    "revision": "1122a607decd016c2889c313d3594edd"
  },
  {
    "url": "assets/js/4.50859964.js",
    "revision": "53582e5dfe949d3d0a88b974fd1de3fb"
  },
  {
    "url": "assets/js/40.49e2c888.js",
    "revision": "e64c3175048ed95ccc82ab7ef1adf2a0"
  },
  {
    "url": "assets/js/41.3426cb53.js",
    "revision": "8d620b00468b4c9b3aab5c70ed19ee76"
  },
  {
    "url": "assets/js/42.6a299ab5.js",
    "revision": "4698c8d446d2063f56c468c887b7ee71"
  },
  {
    "url": "assets/js/43.5f0455f0.js",
    "revision": "90d26c0f888d9061c01134ae71f1da13"
  },
  {
    "url": "assets/js/44.71f68a78.js",
    "revision": "fe0929f041cd176bedef2d4ab2828efd"
  },
  {
    "url": "assets/js/45.5f443d9c.js",
    "revision": "7b9c2eea086d1aedd7e6b6def49cf938"
  },
  {
    "url": "assets/js/46.60c3dfe0.js",
    "revision": "27c20c78045b97e2e78bfc0c27fd25dd"
  },
  {
    "url": "assets/js/47.0d5aa64f.js",
    "revision": "01216da08607a87d0c2eba540b58fe70"
  },
  {
    "url": "assets/js/48.159c75d7.js",
    "revision": "41c537d135e13c5269b79012fc92d0b7"
  },
  {
    "url": "assets/js/49.32a67c0d.js",
    "revision": "8083837528ba71e23d3c5481cb5fd150"
  },
  {
    "url": "assets/js/5.7a1af590.js",
    "revision": "20f075ecb15dd6b5218e9aff71fa4d71"
  },
  {
    "url": "assets/js/50.319cdab8.js",
    "revision": "8abf52a8639e8a18771acbd1c2e091ec"
  },
  {
    "url": "assets/js/51.5246384a.js",
    "revision": "b9c54c8afb18e2fc0589e934b3363122"
  },
  {
    "url": "assets/js/52.41b3081e.js",
    "revision": "b49644f0a0230895f30869376eb6f882"
  },
  {
    "url": "assets/js/53.e4d3d7e2.js",
    "revision": "5f02ef3dd78f7e1d0748ed4fc2881c8a"
  },
  {
    "url": "assets/js/54.3a923225.js",
    "revision": "7e34a696dd99e22e97cabf7c3113a383"
  },
  {
    "url": "assets/js/55.09bbe64f.js",
    "revision": "3999258f565d74a4850ec65c527f1067"
  },
  {
    "url": "assets/js/56.ad777094.js",
    "revision": "9110b0848932e7bfb4ee909b4f77d9c9"
  },
  {
    "url": "assets/js/57.63dabf94.js",
    "revision": "6df3d70aa27624eabff29b74fd9fd12f"
  },
  {
    "url": "assets/js/58.03b9e8fa.js",
    "revision": "142bb79a3cb7a9e2972c6099e1fd00c1"
  },
  {
    "url": "assets/js/59.477a37b4.js",
    "revision": "91ce1dbb2f6a27419f64ea0fce96ddba"
  },
  {
    "url": "assets/js/6.dcb2b0d8.js",
    "revision": "f823044ea709d313846a85e822e39b92"
  },
  {
    "url": "assets/js/60.232e2ae5.js",
    "revision": "5f427befb4ef483b3825c6d07e63c57c"
  },
  {
    "url": "assets/js/61.180b61d3.js",
    "revision": "4a754114fab1fd5a50f135351ee9e8a2"
  },
  {
    "url": "assets/js/62.3368d6e7.js",
    "revision": "2bf662c72876e551d83ee68757ee1898"
  },
  {
    "url": "assets/js/63.d96f5c31.js",
    "revision": "fd333e9730c35170ad75c06d3220fdd8"
  },
  {
    "url": "assets/js/64.ab53844a.js",
    "revision": "89fd0395992567731a18e0279b29b54f"
  },
  {
    "url": "assets/js/65.eb653a37.js",
    "revision": "dd22a3151bcacab6f811d3413bd17b72"
  },
  {
    "url": "assets/js/66.6fd33a46.js",
    "revision": "b039e83decff22be114c5ae221341661"
  },
  {
    "url": "assets/js/67.4dda04ba.js",
    "revision": "673dcd214b55c8dd5e0af01f7bbcb67d"
  },
  {
    "url": "assets/js/68.72b99f3a.js",
    "revision": "423ca5e3f163800dd0c52cb05400bb40"
  },
  {
    "url": "assets/js/69.85e900a5.js",
    "revision": "13cd31de7ece46056097d0665d1f6e3a"
  },
  {
    "url": "assets/js/7.f1aa0037.js",
    "revision": "986ca8fa1909a6efea4643839cde90b2"
  },
  {
    "url": "assets/js/70.aff25638.js",
    "revision": "d760b59f0798d7e0f9a086460af45303"
  },
  {
    "url": "assets/js/71.0f6f74a1.js",
    "revision": "3afa2809420c93983315c954ddd5f093"
  },
  {
    "url": "assets/js/72.420861a2.js",
    "revision": "e1abce31b3046e0460a4a216bd9ad080"
  },
  {
    "url": "assets/js/73.9899af37.js",
    "revision": "b2e3e942086556e6558646e2cadfa869"
  },
  {
    "url": "assets/js/74.204b78d5.js",
    "revision": "52c7d4b63d1ecda48a8ccf021b16cd3d"
  },
  {
    "url": "assets/js/75.8b36c048.js",
    "revision": "d04ddfddbb69bd2676f8d294f4e71282"
  },
  {
    "url": "assets/js/76.4704cefd.js",
    "revision": "9fcaf110326c450d484bba85e70218f6"
  },
  {
    "url": "assets/js/77.e747b6a1.js",
    "revision": "857eabb6a4c305162b58abfc9cf32e9e"
  },
  {
    "url": "assets/js/78.fe744883.js",
    "revision": "efc01501a1a8a28406ad210fa20f68ea"
  },
  {
    "url": "assets/js/79.2e290fa3.js",
    "revision": "06491cf6df32d1176a51859ce92ced5c"
  },
  {
    "url": "assets/js/8.8d22534a.js",
    "revision": "fd23e2adde1a44de3be99c6c2a7fd7c2"
  },
  {
    "url": "assets/js/80.a7133a4a.js",
    "revision": "b12874b649681a26c25c16db28e2fb71"
  },
  {
    "url": "assets/js/81.ef27c404.js",
    "revision": "1c650890962ba78d4f651b8fde294574"
  },
  {
    "url": "assets/js/82.4afbf007.js",
    "revision": "62e97319647179f19a40304ed37236dd"
  },
  {
    "url": "assets/js/83.4d856541.js",
    "revision": "474a0ee88a30bc4661a9647551826599"
  },
  {
    "url": "assets/js/84.faffcbbb.js",
    "revision": "6bebc5ba4683fb9b9d0e8213bc7c7007"
  },
  {
    "url": "assets/js/85.02d73b00.js",
    "revision": "c38f925e4031c8542fe524b680c8a05b"
  },
  {
    "url": "assets/js/86.9f629145.js",
    "revision": "39511e323ded074c7fc3ecf9de7a1646"
  },
  {
    "url": "assets/js/87.0a1e9994.js",
    "revision": "8b75d8f5c8e228488695f3dbf8a2056e"
  },
  {
    "url": "assets/js/88.4ee86c39.js",
    "revision": "774b7a5a57176ac8b733beca2c5d9705"
  },
  {
    "url": "assets/js/89.082b8ca3.js",
    "revision": "fe5280f88bdd1107f5cb8c0bb9308e91"
  },
  {
    "url": "assets/js/9.f71ff884.js",
    "revision": "a783f4696aa72bfa5c9bf3e52236b9da"
  },
  {
    "url": "assets/js/90.9ef47246.js",
    "revision": "6121e4dabac184ed10ea8562c9e43bcd"
  },
  {
    "url": "assets/js/91.4cc8e3b2.js",
    "revision": "f68e1bf19e9bbd22cbb7a61002365674"
  },
  {
    "url": "assets/js/92.183c8a8e.js",
    "revision": "00cc585b2ff61315a3d4e3704fb59eab"
  },
  {
    "url": "assets/js/93.d532047e.js",
    "revision": "6e7c4627584cf82f38dcfde88af97056"
  },
  {
    "url": "assets/js/94.471e26ec.js",
    "revision": "b5787a60756630cbb1a8b2846d9f8f17"
  },
  {
    "url": "assets/js/95.bf92f124.js",
    "revision": "223fec7d19da9455ec5356e991c513f7"
  },
  {
    "url": "assets/js/96.06fad6a5.js",
    "revision": "58f3e938ce2d7e655d70f38358219f12"
  },
  {
    "url": "assets/js/97.e922d52c.js",
    "revision": "3d5012d6d8e52cd59c884c3f50467da9"
  },
  {
    "url": "assets/js/98.72e64053.js",
    "revision": "485300a8213d714951b98f0136c4842e"
  },
  {
    "url": "assets/js/99.5d0c5ac2.js",
    "revision": "524d46cddc47dba580bd0e77c161a57f"
  },
  {
    "url": "assets/js/app.245cbe6b.js",
    "revision": "f633fdc58c02342614d01ab3bc0804cf"
  },
  {
    "url": "common/architecture.html",
    "revision": "c705a548459d8b3e1810733ec8779dbe"
  },
  {
    "url": "common/crawl.html",
    "revision": "d1115e510507930fb33436ef98dc6416"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "61e5d631581b67d9d579637abf7182b2"
  },
  {
    "url": "common/document.html",
    "revision": "275cf906653545fa081ad09f8abe195c"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "0ce2a3bb91e43b689cd171269f2de40c"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "4cf07af17e2e43f8c0bf1f71b6e050a9"
  },
  {
    "url": "common/index.html",
    "revision": "ce3ecca749c059dc0a1f442c56518915"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "60ece6a09e77020736a74d91bfce4b88"
  },
  {
    "url": "common/realtime.html",
    "revision": "222080a80aaa801d6085885cd71daf45"
  },
  {
    "url": "common/refactor.html",
    "revision": "0f95dab1f162f4ced1fb3298a6dda107"
  },
  {
    "url": "common/seo.html",
    "revision": "be1722eaf1e42ddbd57a5580565a2d95"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "2a13e0d50592287df5ba871d780a8c5e"
  },
  {
    "url": "css/tricks.html",
    "revision": "87eea329fe7f31a7c9765e90946d362d"
  },
  {
    "url": "db/architect.html",
    "revision": "628d0b437e90984adab675eb3764993e"
  },
  {
    "url": "db/cassandra.html",
    "revision": "2f1f123975e34741791cfa79b944ec55"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "6f5b42e4c3cdb6919f0bf781bd73be68"
  },
  {
    "url": "db/optimize.html",
    "revision": "a19dd8ffd88b013a998a23e8005e3b8b"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "0894f099001ed3d6cb1d567490b61921"
  },
  {
    "url": "db/sql_nosql.html",
    "revision": "e67b0c7a932673365121b732a2234151"
  },
  {
    "url": "index.html",
    "revision": "a970152d161069090e7614c2b0f82ce9"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "5ee1b0f079ec7c672dc86c36b2cda483"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "8380cdd3a36db3feb3d9ca07792e6bbc"
  },
  {
    "url": "javascript/closure.html",
    "revision": "a23075bbe8fe1c4f5ceae87e01b68d8e"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "7282c8a674fd863b04ba38007acbcc7d"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "c7a379718e525a7653b0a112cdd8a1b4"
  },
  {
    "url": "javascript/react.html",
    "revision": "82c766f81830ce5c1397e77acbf09db9"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "29925d5751fce41ebb66b4118e88be4c"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "adbeca372a27676262680991cf3d0064"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "05a7a5f0314d510871becf48465652c7"
  },
  {
    "url": "node/env.html",
    "revision": "87287a2621c7fbf6ac53ab9cd212ae4a"
  },
  {
    "url": "node/index.html",
    "revision": "0e633346cb0a20f05a4a063e622bc5f4"
  },
  {
    "url": "node/n.html",
    "revision": "74fec39e95f38e49df5dde06e24970fc"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "3799beb15766ad32e93600c14c53be7f"
  },
  {
    "url": "node/npm.html",
    "revision": "0246d645949740929f15b69d5abf92dc"
  },
  {
    "url": "node/sequelize.html",
    "revision": "c34dadde2f3c247d7229b26cd618e0f1"
  },
  {
    "url": "php/composer.html",
    "revision": "49ce7c3f663677ee44e541a0b171be6c"
  },
  {
    "url": "php/crunz.html",
    "revision": "b4e3afb7c5e36c1066dd375ee4185bc0"
  },
  {
    "url": "php/laravel.html",
    "revision": "f4f80adb793aaf698c3a05369ae07683"
  },
  {
    "url": "php/magic.html",
    "revision": "d5069b784e8519ccd09b9724de0da269"
  },
  {
    "url": "php/notes.html",
    "revision": "53dcbcebbcce17d12698dd047c67ae3e"
  },
  {
    "url": "php/oop.html",
    "revision": "ce77e2187b08732b7f007cdd1b245dee"
  },
  {
    "url": "php/php7.html",
    "revision": "a47be3d63e79cc918e4371de42fec883"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "c704a03bf957c0b0105cf6fefb748aa0"
  },
  {
    "url": "php/reflection.html",
    "revision": "a57f51a8989935ced6a08f5c0cb09ddd"
  },
  {
    "url": "php/tricks.html",
    "revision": "2351c2a70b6728fca22a8b209e16e480"
  },
  {
    "url": "php/wordpress.html",
    "revision": "f9ffab01960ee2617bf7c6d35aa6da3e"
  },
  {
    "url": "quotes.html",
    "revision": "871543161b79fc470ba3045b75d649e4"
  },
  {
    "url": "refactor/notes.html",
    "revision": "5d949a6bdd6f1268fe089d2ce916a994"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "be57a80c0ca35a5736c7c2475a24ed45"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "221f5860d773b7bbf1c503aef88236d9"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "03ed51fcb862cbe2106316c1ff49202d"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "dfbc4689b6c70140e56a0e2085d197df"
  },
  {
    "url": "snippets/jest.html",
    "revision": "032f1f87efc027f4374ff9511e314f95"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "f42cc190cc29f8d1b2222be97ff2dde9"
  },
  {
    "url": "snippets/patterns.html",
    "revision": "2f1db3b8eb092cf8655f251808d52171"
  },
  {
    "url": "snippets/regex.html",
    "revision": "04fa0a5046627107ea08fa5487e3c324"
  },
  {
    "url": "terms/architecture.html",
    "revision": "5f380c51dfc3c673cd6ac0a6bf85199d"
  },
  {
    "url": "terms/ddd.html",
    "revision": "6fda173af8b0bae476d21a67eb9dac88"
  },
  {
    "url": "terms/javascript.html",
    "revision": "a9ca9ff491e04a109c96fa2d6c313132"
  },
  {
    "url": "terms/oop.html",
    "revision": "1965dff945db647f24ee832f3f66469c"
  },
  {
    "url": "terms/rules.html",
    "revision": "3f5f1140db5320123c61fa7eb2b2b5f6"
  },
  {
    "url": "terms/testing.html",
    "revision": "cb7b1c986160677fa03c404d0a8c5d7b"
  },
  {
    "url": "tools/chrome.html",
    "revision": "019698b7565b520890bd81a2cdd4e2f4"
  },
  {
    "url": "tools/docker.html",
    "revision": "c403cd7a5c0b195a1121da50004e28e9"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "6049760e4744657f4314a00bd439655d"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "f044fc7a7c837411ca6882c773df494b"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "cba7c3ccbcc625fd0aac2c9e156e8f4a"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "dbd297cf26e289ecb549f2d89afb5444"
  },
  {
    "url": "tools/redis.html",
    "revision": "adf3760d87eb095fbec6adebb9272933"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "7f4f417aae718a8c256dfc8920a32c63"
  },
  {
    "url": "tools/vscode.html",
    "revision": "0f83df48362c656d5a9a1d35c6732601"
  },
  {
    "url": "tricks/compare.html",
    "revision": "8b838998ddc270bbd24aa87ecc99c875"
  },
  {
    "url": "tricks/git.html",
    "revision": "b39e26e0cf02ff940bd1a287af065b05"
  },
  {
    "url": "tricks/linux.html",
    "revision": "ef74123d77edb293a904e68b0ce08d4a"
  },
  {
    "url": "tricks/mac.html",
    "revision": "82448e93204ddf89d6a460c688d841d7"
  },
  {
    "url": "tricks/misc.html",
    "revision": "63bf6eea11793b556e00e37906bace38"
  },
  {
    "url": "tricks/setup.html",
    "revision": "e88bde6c51968fcc0b3fdf9af6e9a94c"
  },
  {
    "url": "vue/communication.html",
    "revision": "29398ff57c15c217d2466823b24595e5"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "9b0f9ec000f59ca55b730b6f49b646b2"
  },
  {
    "url": "vue/events.html",
    "revision": "81aae24b7c998936b23abd73089785ae"
  },
  {
    "url": "vue/references.html",
    "revision": "41c63557d0d3935222e13f48bb2fc578"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "95d3156d74aaee9923a092697751de75"
  },
  {
    "url": "vue/test.html",
    "revision": "cc6945050f44b0e224b70bf9d67d50f1"
  },
  {
    "url": "vue/tricks.html",
    "revision": "218575eaa42f0ec8066b6183a99c2652"
  },
  {
    "url": "vue/vue_react.html",
    "revision": "9c71f4bdd53509ae6fcc25d2489164e1"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "805c08b37df7a87ebba6e72d115a3ea4"
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
