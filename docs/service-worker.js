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
    "revision": "0648b0e4d9458dde77a287145a96e68b"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "d53f8c863180d8d08113869220ba9460"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "a0d2fb3862b40d3797770cec44880e07"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "369527eaf40779f35a456f9b2ecb0abd"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "f01368f8fc62b8ad0170714b4cf9dd76"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "0a598670e50955e5b0561798f566ee5f"
  },
  {
    "url": "algorithm/string.html",
    "revision": "a0029d14a10f072766b1b74aa7623a66"
  },
  {
    "url": "architect/authenication.html",
    "revision": "61402eebbeff689e957c1fdaa047efb7"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "cf999b98a31bdb19ddab1a38578d1428"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "a9e7c880d8c0144d0051bacab4623d30"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "2a348b3d3d7258004a58eae703889c57"
  },
  {
    "url": "architect/ddd.html",
    "revision": "5160049aba0a3ce76e518d9eb2f90382"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "921d02c7c36a35bb85d79a81874ab9c4"
  },
  {
    "url": "architect/ebi.html",
    "revision": "052f3c0c84233fead9f25b9cef50cb48"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "a20ae5a8aeaaf42f9724329af382a970"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "190baeaf1bde262ffc837fe7893844a2"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "038102c76b1265ea81ab6a4f7e8485e5"
  },
  {
    "url": "architect/index.html",
    "revision": "dbf28170ca36a6d9584ba70e20158085"
  },
  {
    "url": "architect/notes.html",
    "revision": "31144fa4c4a1d6fb3b4d414d3d8da88e"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "2e80bd137d05b2a8e59df4d1d66e0792"
  },
  {
    "url": "architect/refs.html",
    "revision": "e45cd8e6f1354e0bd99bbc8b16cae66f"
  },
  {
    "url": "architect/soa.html",
    "revision": "430679bcb66fae09fd5d1b45594c3ea9"
  },
  {
    "url": "architect/spa.html",
    "revision": "6c9940a1f638045799dcf07c869fc0ec"
  },
  {
    "url": "architect/use-case.html",
    "revision": "3b54c3eb77c5d73a05fefcd5605f4338"
  },
  {
    "url": "assets/css/0.styles.9897a704.css",
    "revision": "60ae87b9768df621a8a71c6b35d9ccb3"
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
    "url": "assets/js/10.385cac93.js",
    "revision": "b6c531377dd9877d591a69667b2b63bc"
  },
  {
    "url": "assets/js/100.cfcf0bd7.js",
    "revision": "3c5deaa5484b58dc893cdfdf2d7fe875"
  },
  {
    "url": "assets/js/101.1ea3cf05.js",
    "revision": "7e138b13fd765e8eb4ecb487e9d6c797"
  },
  {
    "url": "assets/js/102.eb2df365.js",
    "revision": "d9ab5f3cb0b48f8980518ab2ebedb215"
  },
  {
    "url": "assets/js/103.b5938c8c.js",
    "revision": "539bac8516e10765c5c4c3f72204db7d"
  },
  {
    "url": "assets/js/104.475a8840.js",
    "revision": "82b724a11677343ebc51a9ed7be4e93a"
  },
  {
    "url": "assets/js/105.cdea37b9.js",
    "revision": "106d11424e2e697f7c5048141b76b0d8"
  },
  {
    "url": "assets/js/106.a5445e63.js",
    "revision": "eeabaa2172320d8a5907156773858e73"
  },
  {
    "url": "assets/js/107.93ea826a.js",
    "revision": "9f9babd2a7e88bb7a6887b146d4871af"
  },
  {
    "url": "assets/js/108.8b9f0c64.js",
    "revision": "b7c552c1d576a59ba58ecd7ae23996c7"
  },
  {
    "url": "assets/js/109.8314863d.js",
    "revision": "769f921782412f7a5a8469b7983336b0"
  },
  {
    "url": "assets/js/11.908e989b.js",
    "revision": "c33d63a8a0e5c129f293aa9cfa1fa286"
  },
  {
    "url": "assets/js/12.6ec860e9.js",
    "revision": "30460323e5fa90c0051dd7e1f07cd101"
  },
  {
    "url": "assets/js/13.b6375179.js",
    "revision": "6cc139d249fc707cfdd251ff8d87082f"
  },
  {
    "url": "assets/js/14.f3200f94.js",
    "revision": "3a97c9b0bb113e639b0afb13f5a2e25c"
  },
  {
    "url": "assets/js/15.900a779e.js",
    "revision": "ced5a39edfb3da71151038b4c8fa3944"
  },
  {
    "url": "assets/js/16.f6e1ec89.js",
    "revision": "d6ead69cbb31ca1d0abcf1a390c84f63"
  },
  {
    "url": "assets/js/17.5d56c76e.js",
    "revision": "432bd3d8868c52dce03daa6ed43f7b83"
  },
  {
    "url": "assets/js/18.727c28a1.js",
    "revision": "50dfcd3ec676710f37ab0e9406d4d660"
  },
  {
    "url": "assets/js/19.ea010848.js",
    "revision": "a3cf4a8e04b4fb78e476a4107baa98ae"
  },
  {
    "url": "assets/js/2.2442e77f.js",
    "revision": "30b4bb6ac732908ee706e921f49de8f1"
  },
  {
    "url": "assets/js/20.0fcd6d29.js",
    "revision": "334890724e2f322ffcecad332e6ca576"
  },
  {
    "url": "assets/js/21.731458df.js",
    "revision": "1ee125cd77ad8f679df109884c1f35ab"
  },
  {
    "url": "assets/js/22.a533f4e6.js",
    "revision": "db767d4167cb05a02e6d1f7b08536fd4"
  },
  {
    "url": "assets/js/23.299b4028.js",
    "revision": "e984ccfb41e12b7170b752a807cf30f0"
  },
  {
    "url": "assets/js/24.112c9117.js",
    "revision": "124c2e514c3f511536462f71cc74766c"
  },
  {
    "url": "assets/js/25.754645fb.js",
    "revision": "f8d1f638d439f24a1b272fbfc2093cdb"
  },
  {
    "url": "assets/js/26.af00a0a2.js",
    "revision": "21714099270d26e569d359eb5bd8b4fb"
  },
  {
    "url": "assets/js/27.8600ae88.js",
    "revision": "3a786b8864fb0482667a3c7f4e7d861b"
  },
  {
    "url": "assets/js/28.03df79e6.js",
    "revision": "663543f201d41fe7e1f06f84ad3210d0"
  },
  {
    "url": "assets/js/29.0a1cafd6.js",
    "revision": "153bb1852e02fab503c1ae941d608802"
  },
  {
    "url": "assets/js/3.d0582a46.js",
    "revision": "94f02433d290b036e06a3b189f9931ef"
  },
  {
    "url": "assets/js/30.ff0ecdf9.js",
    "revision": "ddd7ae286d539e9286e53dfae9cd9b96"
  },
  {
    "url": "assets/js/31.77a02d97.js",
    "revision": "fd66c4240070bf85a107ba8ff2da2b04"
  },
  {
    "url": "assets/js/32.4b87124f.js",
    "revision": "96f46844a69fa58701a406194a35ceb7"
  },
  {
    "url": "assets/js/33.da717345.js",
    "revision": "4029724191438201dae42b438431a1ef"
  },
  {
    "url": "assets/js/34.8c096813.js",
    "revision": "519503489a974d10f2e464380c11894b"
  },
  {
    "url": "assets/js/35.bc811f92.js",
    "revision": "83392b7946fd4900d43c37c70d17f39a"
  },
  {
    "url": "assets/js/36.d82c93d1.js",
    "revision": "0154f24500f094cf9190df6878e7ff02"
  },
  {
    "url": "assets/js/37.aba5a4e1.js",
    "revision": "e3302b956b9b026839b4a441fa8d1027"
  },
  {
    "url": "assets/js/38.a8368671.js",
    "revision": "44f174d400d5c40c4441480c0ec6d884"
  },
  {
    "url": "assets/js/39.c0e920a9.js",
    "revision": "841e23d82644e7ef790ecdb2856f9558"
  },
  {
    "url": "assets/js/4.2fe57f90.js",
    "revision": "d316e9d1d4f1488488068d9ad4cfde06"
  },
  {
    "url": "assets/js/40.b2543421.js",
    "revision": "714b519818376521a525dd7f77069e20"
  },
  {
    "url": "assets/js/41.bee7da05.js",
    "revision": "0f349f941d60ac0d5b0231dd51504f09"
  },
  {
    "url": "assets/js/42.cf16570f.js",
    "revision": "b293a67302688f6be19cbaa3ea4c3869"
  },
  {
    "url": "assets/js/43.f083525d.js",
    "revision": "b469686e6e8f2cd8dbeda8a39c0be372"
  },
  {
    "url": "assets/js/44.818442a8.js",
    "revision": "46bea8affe3d55e9aace47b83e318a5c"
  },
  {
    "url": "assets/js/45.92aeb0e1.js",
    "revision": "d7de38621eb5c19f5d69be6d3bec919f"
  },
  {
    "url": "assets/js/46.52362823.js",
    "revision": "55acf206f53dfd998b6586b6bde2967f"
  },
  {
    "url": "assets/js/47.c3e8f840.js",
    "revision": "c08a448dbc5dd679625d6c3bb2f900a0"
  },
  {
    "url": "assets/js/48.87184ce3.js",
    "revision": "a174d128308ae705419539eaa54856c8"
  },
  {
    "url": "assets/js/49.4398b5bd.js",
    "revision": "3226a0612ec4152879f35bce1b6dddf1"
  },
  {
    "url": "assets/js/5.26f61f28.js",
    "revision": "048df19e60abadba045690cc77a3980e"
  },
  {
    "url": "assets/js/50.8b23dd2c.js",
    "revision": "f48cb58a62b2abae57c91d7b8c18eca6"
  },
  {
    "url": "assets/js/51.706d7f6c.js",
    "revision": "c466bcdbcb63453ea48fc49b03b09e2e"
  },
  {
    "url": "assets/js/52.f6a2f532.js",
    "revision": "fea9490ada165988935719a42618d7a5"
  },
  {
    "url": "assets/js/53.1d97a606.js",
    "revision": "f2dd415f758ed963ff8d4c6d7f6aef61"
  },
  {
    "url": "assets/js/54.63a309e4.js",
    "revision": "a50e70d4fcf1dd06ff25ee004e4f88f4"
  },
  {
    "url": "assets/js/55.bdaaa44a.js",
    "revision": "57d88df75b552fc772a3a6d6645f37e4"
  },
  {
    "url": "assets/js/56.6a3cb48b.js",
    "revision": "b2c2db865f40fe76d1094975d43c6161"
  },
  {
    "url": "assets/js/57.bb8761ed.js",
    "revision": "439b66b90b7f54d4dbedddb0b19fdbc9"
  },
  {
    "url": "assets/js/58.05b99baf.js",
    "revision": "fb27f6c336ee27cab824e2e2bfd1ba1d"
  },
  {
    "url": "assets/js/59.7b8acc52.js",
    "revision": "6090e364db4da120ddecf199a0671850"
  },
  {
    "url": "assets/js/6.427f40ed.js",
    "revision": "acd6e4d4963dceb90d8817f821091a97"
  },
  {
    "url": "assets/js/60.92d908b4.js",
    "revision": "ed388a5150ea2e435e97bdeacd5ba5f8"
  },
  {
    "url": "assets/js/61.3839b0ba.js",
    "revision": "f7998c273649c5835ea3360283d76cae"
  },
  {
    "url": "assets/js/62.25243e92.js",
    "revision": "0529c9f1734032e791b7975993849e7b"
  },
  {
    "url": "assets/js/63.284eb76d.js",
    "revision": "1c6bc7ed0904943ec6db35368457ac32"
  },
  {
    "url": "assets/js/64.8e84d394.js",
    "revision": "3af54d22ad3cef009584598c9504663a"
  },
  {
    "url": "assets/js/65.7590e148.js",
    "revision": "6be6edc570f6e495de43856f86b630c2"
  },
  {
    "url": "assets/js/66.7743b347.js",
    "revision": "50e434af0a74a5a005727dd0648e24a0"
  },
  {
    "url": "assets/js/67.a36f41c4.js",
    "revision": "4fb77fd34b756a3d0c4cb553b1608b3a"
  },
  {
    "url": "assets/js/68.015cf63f.js",
    "revision": "4be12433668c9b73cbd699cfa293762a"
  },
  {
    "url": "assets/js/69.90b55fcf.js",
    "revision": "4882143ee2be97549f9c361d2203a192"
  },
  {
    "url": "assets/js/7.0def1e5a.js",
    "revision": "21e907e7da39e32f829115de09c553b3"
  },
  {
    "url": "assets/js/70.f75a6416.js",
    "revision": "f8ccc9a4f28d8e5730bd44df3d533fc3"
  },
  {
    "url": "assets/js/71.3832d8c6.js",
    "revision": "d689dd7f5f8825e2f9625b8b4d839e7c"
  },
  {
    "url": "assets/js/72.e3167de1.js",
    "revision": "22368a705761b8daa77fb072285ad6db"
  },
  {
    "url": "assets/js/73.ca1b203c.js",
    "revision": "179a69d72dc9edf86a3210755e136585"
  },
  {
    "url": "assets/js/74.33d41b7c.js",
    "revision": "b0b20172b69c0631220c41682148501a"
  },
  {
    "url": "assets/js/75.bce9deaf.js",
    "revision": "5d42922e26f20884287d03498f16fa87"
  },
  {
    "url": "assets/js/76.278ffc59.js",
    "revision": "e33e165f97d08ce572f5419327a06439"
  },
  {
    "url": "assets/js/77.1949a5d9.js",
    "revision": "2e222a78891dc4741a21b982815bea94"
  },
  {
    "url": "assets/js/78.09af3129.js",
    "revision": "9d9fd23f9847ce2e9c6dafef0d73fc54"
  },
  {
    "url": "assets/js/79.f1a99238.js",
    "revision": "a01a91584108f5d654fac9ab6cabd069"
  },
  {
    "url": "assets/js/8.32829f15.js",
    "revision": "63901ff7a3b6ae582f34df279f079ca7"
  },
  {
    "url": "assets/js/80.45fa1cd0.js",
    "revision": "9e4b2044b753891e6ed8098b7cd0f5d0"
  },
  {
    "url": "assets/js/81.5228083a.js",
    "revision": "50150967fee78b96bf306f00285f9e58"
  },
  {
    "url": "assets/js/82.f064257b.js",
    "revision": "141a6701763ca4f2aee69a55d06b3720"
  },
  {
    "url": "assets/js/83.61fafeda.js",
    "revision": "ca54c3043c57927309885796faf9ce27"
  },
  {
    "url": "assets/js/84.1799b50c.js",
    "revision": "d3ac7aaaf168a0aa297b29018cb41852"
  },
  {
    "url": "assets/js/85.376f4454.js",
    "revision": "370003abef8c6baff83832af64a89133"
  },
  {
    "url": "assets/js/86.d96f00f8.js",
    "revision": "631346d023cae0d035e92f4bfb72066f"
  },
  {
    "url": "assets/js/87.a7ae6bc4.js",
    "revision": "28eab06ce6b46f74372b14afde882b16"
  },
  {
    "url": "assets/js/88.f70e5a7c.js",
    "revision": "f6634e3d9e3e6bf71f800b3f693d8fa5"
  },
  {
    "url": "assets/js/89.60d19424.js",
    "revision": "260c25641119df74591365f59b65714f"
  },
  {
    "url": "assets/js/9.23e27d48.js",
    "revision": "fc69a8e6b5b86f29e863664767e0cd51"
  },
  {
    "url": "assets/js/90.21475423.js",
    "revision": "bae912debb7415843ae16e64390130a5"
  },
  {
    "url": "assets/js/91.28793417.js",
    "revision": "a7efb5649d0d8f728b026063dd32a044"
  },
  {
    "url": "assets/js/92.6a1ee41a.js",
    "revision": "17cc3cc4d406754443849e116357782a"
  },
  {
    "url": "assets/js/93.807d2b5c.js",
    "revision": "a12363ca6e575f1403ec691dee735bf1"
  },
  {
    "url": "assets/js/94.30c55a10.js",
    "revision": "88c42e4c9e28a0b9860994190700e0b9"
  },
  {
    "url": "assets/js/95.af2ca27a.js",
    "revision": "785a393d49fda46ff762ffcc31bafed8"
  },
  {
    "url": "assets/js/96.678474c7.js",
    "revision": "df3c27329d10cfecfd3f1d676f1b4400"
  },
  {
    "url": "assets/js/97.0b3a5c48.js",
    "revision": "24fc80bc239845c7ae7596d39989dd1a"
  },
  {
    "url": "assets/js/98.d7419e69.js",
    "revision": "45be3edee964a1f6a1bc0260256b7e98"
  },
  {
    "url": "assets/js/99.2b665fdb.js",
    "revision": "aae903896e6e84b19ace5971bcb046cb"
  },
  {
    "url": "assets/js/app.9894b8c8.js",
    "revision": "c333bd30ffc5062ee409c5d8d9ff3ce2"
  },
  {
    "url": "common/architecture.html",
    "revision": "5e851fb73fce17ee2036132094c93853"
  },
  {
    "url": "common/crawl.html",
    "revision": "f3d792378cf51de2ab7a632d2183cb98"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "6714f4367e568c182ed47d26ee96efeb"
  },
  {
    "url": "common/document.html",
    "revision": "75de7abd9ceca0608287abb424102e89"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "3adf851aef5251e84f3bec912fb3092c"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "280616e13cf0777c9b6115446ec404bb"
  },
  {
    "url": "common/index.html",
    "revision": "502d3e7d3dfe34dc270848d9d9ce6b6b"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "29a8d390ce33c036d93edbdbb762f286"
  },
  {
    "url": "common/realtime.html",
    "revision": "53e89dc98411a221417f0e9123b83f49"
  },
  {
    "url": "common/refactor.html",
    "revision": "96e73e1d5d57cf42e5eefb176b72e752"
  },
  {
    "url": "common/seo.html",
    "revision": "76ee72f18ee2b43f707d5fb6ba6ed164"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "469b5cfa35a3a9e3baaa1ce52b238a15"
  },
  {
    "url": "css/tricks.html",
    "revision": "0f1eda2873e4e9870ec8ad5d1c24b442"
  },
  {
    "url": "db/architect.html",
    "revision": "70c8c042baa952cbfcf723ece8f66f45"
  },
  {
    "url": "db/cassandra.html",
    "revision": "a9d9015fbb0607a7bb66b0769cba1d37"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "8bcb356fea92cbce5bab5f06fb6cb66b"
  },
  {
    "url": "db/optimize.html",
    "revision": "f36f277f79ef9792cbd10022d79fb83f"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "e734415a740c6e8e24e28630ea38eaab"
  },
  {
    "url": "db/sql_nosql.html",
    "revision": "3ffb167fecf70d1ef270410347033cc5"
  },
  {
    "url": "dev.html",
    "revision": "c05a7b669274c24628e33d955f86537d"
  },
  {
    "url": "index.html",
    "revision": "14cf4f68f6cfd46dc7433ac8be4b84dc"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "16eb58db16d183704c5b7a522fbd0b90"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "ed3db47880736a7cc184bf79f480c724"
  },
  {
    "url": "javascript/closure.html",
    "revision": "1920fc6364b65a60707cb189d5d97b55"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "e7bc416c71738824bc027efdffc747a7"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "a9917162ec1c39b3c6fcc74f8b364bbf"
  },
  {
    "url": "javascript/react.html",
    "revision": "66449d6920d69add6b23b87d123c8c1c"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "07739ee27551c038862186855b70bad8"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "f6b3a3d94f47c949867da36f813bc7f8"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "5dde74f3eeb0e86637164036cbb321cb"
  },
  {
    "url": "node/env.html",
    "revision": "457cbaa6f4dd222df95c890bb34c6f2f"
  },
  {
    "url": "node/index.html",
    "revision": "0bfbe8edd9f0571355911f0fe4fe247b"
  },
  {
    "url": "node/n.html",
    "revision": "a6078cd4806ac910feb20079e9a2770b"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "523a563e736d6cead0712fa9c6d51521"
  },
  {
    "url": "node/npm.html",
    "revision": "a06266fa472cf53d43d85eb4fe27d641"
  },
  {
    "url": "node/sequelize.html",
    "revision": "c4abaa71824794b4cec5ac29009adb04"
  },
  {
    "url": "php/composer.html",
    "revision": "9a36f7680984babf0ed932a2dd38db93"
  },
  {
    "url": "php/crunz.html",
    "revision": "1c5c2da126edb9ec8bf76b88a41b7257"
  },
  {
    "url": "php/laravel.html",
    "revision": "68d4c1b410eac2054781626c3c41f054"
  },
  {
    "url": "php/magic.html",
    "revision": "b153dcf24a10a113ee3059d3a23528b3"
  },
  {
    "url": "php/notes.html",
    "revision": "f08911fb99d66ae9eeebdd1764954d19"
  },
  {
    "url": "php/oop.html",
    "revision": "e8f5e357cd22fe2a0babf559e4849664"
  },
  {
    "url": "php/php7.html",
    "revision": "23daa9d2b16329e9c497245061266cfa"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "8f485684e05742ed0dcb40e4c9d90b9e"
  },
  {
    "url": "php/reflection.html",
    "revision": "2beb810b339a36e1a21fe7dedfa63b30"
  },
  {
    "url": "php/tricks.html",
    "revision": "7e29878da930f903ea7fa1dc5abeecff"
  },
  {
    "url": "php/wordpress.html",
    "revision": "a0028111ec37572395823373184ce7ee"
  },
  {
    "url": "quotes.html",
    "revision": "1716968e3116145dbc8cc53537fca56f"
  },
  {
    "url": "refactor/notes.html",
    "revision": "72c7919fc927ded7699c3c5805efb758"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "66b9267e78bd342784751e982f59cf99"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "e7ed21c4cfeea0263442717c95e9fb54"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "3612ad897cccdc242f7180ec96c54ad0"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "bea1f8cc839258ed07548ddeb7baecfc"
  },
  {
    "url": "snippets/regex.html",
    "revision": "4635001b9faab3be20a41958655c0bec"
  },
  {
    "url": "terms/architecture.html",
    "revision": "fd321ffc28fff33a111deda2c8356fc9"
  },
  {
    "url": "terms/ddd.html",
    "revision": "dbb40bd6168bc36b8ba4c215d21373c2"
  },
  {
    "url": "terms/javascript.html",
    "revision": "ba803f730213775f7bdbfc3a710e35ee"
  },
  {
    "url": "terms/oop.html",
    "revision": "9018265ce7be36848f6993eabb274340"
  },
  {
    "url": "terms/testing.html",
    "revision": "1b8e1ed31f51faf7ff7e0511a7482684"
  },
  {
    "url": "tools/chrome.html",
    "revision": "27a63cab9545d05adf09d490e952e1fd"
  },
  {
    "url": "tools/docker.html",
    "revision": "ef05a83cf686321d349c059f529476ad"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "6e851135e90d692229e07597d29bb443"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "83281126da9e5714b3cb42b9c253d38c"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "0d7d4d0214c1fdc2dc9d4d2145c280e9"
  },
  {
    "url": "tools/redis.html",
    "revision": "ed03755267963d364ea0527938d7a05a"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "0650eedd236845d54a32155f6d6b1d22"
  },
  {
    "url": "tools/vscode.html",
    "revision": "2ebe8c8e420cda9d1daa4678ce8b9c87"
  },
  {
    "url": "tricks/compare.html",
    "revision": "b1f27ab892edc29188cd89cd56ba7867"
  },
  {
    "url": "tricks/git.html",
    "revision": "af763f2d6b8909934445c07280f653f9"
  },
  {
    "url": "tricks/linux.html",
    "revision": "c6b0910c250ae15175ced03877ec9aa1"
  },
  {
    "url": "tricks/mac.html",
    "revision": "b72f210636a8b63a7e865b82ef22bc4b"
  },
  {
    "url": "tricks/misc.html",
    "revision": "f1dca3a9d94fff87ffec25d81d8341e7"
  },
  {
    "url": "tricks/setup.html",
    "revision": "96010c3bdc3122f512c77bcdb894f763"
  },
  {
    "url": "vue/communication.html",
    "revision": "176b6f93832bda919c14e46d90c811d9"
  },
  {
    "url": "vue/events.html",
    "revision": "b637b42b6bcfcbc1d0a437ff9df3a357"
  },
  {
    "url": "vue/references.html",
    "revision": "ea52eab6a7754591e9a1ed35e893dbf7"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "b13317cad83dd9d3b1de8cff2bbdfda8"
  },
  {
    "url": "vue/tricks.html",
    "revision": "6ccaf4373e41890488de60a1cbadecf7"
  },
  {
    "url": "vue/vue_react.html",
    "revision": "ac4c218d727c2b08d10ae6dc327faf3e"
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
