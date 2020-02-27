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
    "revision": "36b7241e81f09d82d1a12309da32a06d"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "c14e4571c1a71e5a8ad063b7d888485e"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "d92d917fce43746fe6d75941ee072743"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "ce6b6cceb3e1f2bf798a25d358dba715"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "aeb4619d898571339447222015df3839"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "a272edcdef4639eea61d9fc646ccf48c"
  },
  {
    "url": "algorithm/string.html",
    "revision": "c13149616869ee20a280319f45bdb7e0"
  },
  {
    "url": "architect/authenication.html",
    "revision": "507f02ff09552b9745b76be4173ad051"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "da99794688b1310877079f14a1f48cf9"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "f34f3db4642dc462b1c0b4baf5f8adf9"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "f0d39771083f61143108f6a170b89b8c"
  },
  {
    "url": "architect/ddd.html",
    "revision": "0e3a6b992791938a9f480f078139b881"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "56f5e61ffa6756656b86d189b6737063"
  },
  {
    "url": "architect/ebi.html",
    "revision": "f048b6706363d63552b078d988d4d9b2"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "6bf16db5e42ed5cf0f132d4c5d6d5baf"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "7f505aec7293ab2beee6d228c81895d0"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "6c831f73ad819fd72cd60d33be5e3777"
  },
  {
    "url": "architect/index.html",
    "revision": "8f207214c72c0c2a7064ef83dea2a6ba"
  },
  {
    "url": "architect/notes.html",
    "revision": "d77d97f50a77ca833f9b23b816164448"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "3e834ae3d0c22b37ed1aad6b6f32b73e"
  },
  {
    "url": "architect/refs.html",
    "revision": "ea9e836145b448618d17f0368b17cbb3"
  },
  {
    "url": "architect/soa.html",
    "revision": "cc295845c7c65c59c5310f0f56e9b0af"
  },
  {
    "url": "architect/spa.html",
    "revision": "b8d46a1641e2999bb210b87d924ad52f"
  },
  {
    "url": "architect/use-case.html",
    "revision": "a35fb14b31a33e4401e7a2304064dd87"
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
    "url": "assets/js/100.202cefe3.js",
    "revision": "ddf84b93b54ffc368b2c42541a6e37e8"
  },
  {
    "url": "assets/js/101.a95545cc.js",
    "revision": "89abca9a3872554174888e902a6f9825"
  },
  {
    "url": "assets/js/102.7b1d1cf1.js",
    "revision": "36be11d1bb64f7b13354d5dee6c720f3"
  },
  {
    "url": "assets/js/103.3f041110.js",
    "revision": "c2258a10e5eff2b2612fa781b94504bb"
  },
  {
    "url": "assets/js/104.607e6cec.js",
    "revision": "749f6ee2c41d56551faa83884b3488c8"
  },
  {
    "url": "assets/js/105.6441114d.js",
    "revision": "9e3f96c05b89292ebfa578996d461108"
  },
  {
    "url": "assets/js/106.5bfeb55a.js",
    "revision": "8c7e6a9bfb6e834d6b398a4cd75d7f50"
  },
  {
    "url": "assets/js/107.9fd405ff.js",
    "revision": "af1fb189858476abfbca9e486328a5d7"
  },
  {
    "url": "assets/js/108.a465df8a.js",
    "revision": "f1d7be6ffae7f12bfbc17f631cd01eb7"
  },
  {
    "url": "assets/js/109.fc013fb8.js",
    "revision": "b3756483a3c434eaa9f6c199c74a15bd"
  },
  {
    "url": "assets/js/11.2d342bef.js",
    "revision": "7211ede34cb5202bb744a7b8674a2624"
  },
  {
    "url": "assets/js/110.7e39ee00.js",
    "revision": "7502146480be31c0f33b432fe9c263be"
  },
  {
    "url": "assets/js/111.5fab50ca.js",
    "revision": "e84db7da029f4f587a2588d75706e75c"
  },
  {
    "url": "assets/js/112.62c39984.js",
    "revision": "699c96ddb16c35c7f850ede27075acfa"
  },
  {
    "url": "assets/js/113.93dbbb91.js",
    "revision": "6bf740335213b9ecac694f5e4773df27"
  },
  {
    "url": "assets/js/114.49b024d0.js",
    "revision": "a8693ccd88dce9dd85deaf1bdc016638"
  },
  {
    "url": "assets/js/115.8c479d7e.js",
    "revision": "06858cae4724d735da895aebc18639ed"
  },
  {
    "url": "assets/js/12.9ea81ce6.js",
    "revision": "7cab20206433bfbe6930afb13034a149"
  },
  {
    "url": "assets/js/13.5e6dd85e.js",
    "revision": "38d68a1e09a8a2585e47c44442380abf"
  },
  {
    "url": "assets/js/14.2cc5eeb2.js",
    "revision": "b4908facad62f7c50afe80252a47a9a7"
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
    "url": "assets/js/17.2b71c170.js",
    "revision": "93881fd79e4cce975c3c5052ffa5d4e6"
  },
  {
    "url": "assets/js/18.9452b9ea.js",
    "revision": "67e6828dcafec700731192bfe37d3827"
  },
  {
    "url": "assets/js/19.56f853c5.js",
    "revision": "6c4b7c48a69a24073ea19b8f86ff4c84"
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
    "url": "assets/js/22.2187b143.js",
    "revision": "4fefa601963546f61eea314d4b5e2d36"
  },
  {
    "url": "assets/js/23.01806640.js",
    "revision": "4733291b92db7169942c2c4f04445057"
  },
  {
    "url": "assets/js/24.0f6cfcde.js",
    "revision": "aca771a6436e0d7885605b771cca4e62"
  },
  {
    "url": "assets/js/25.c9d67769.js",
    "revision": "b99f4f5941b33420cf0c3678a1eac15b"
  },
  {
    "url": "assets/js/26.dc20d12d.js",
    "revision": "718ff0b6a7143865eb4e660df9a065e2"
  },
  {
    "url": "assets/js/27.5bc5a1a6.js",
    "revision": "7c4029978eab5e926ac451707074972e"
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
    "url": "assets/js/3.ad9006d4.js",
    "revision": "153e4449dab08c14b6771c6631143d33"
  },
  {
    "url": "assets/js/30.30d0753f.js",
    "revision": "a6e886e38e969bf9fa7eb324611d2374"
  },
  {
    "url": "assets/js/31.4349377b.js",
    "revision": "f792a426347bdf8fa56b10c69245bbe0"
  },
  {
    "url": "assets/js/32.323f807b.js",
    "revision": "56f5e8af6fe7e9401cfd5438e8b0f968"
  },
  {
    "url": "assets/js/33.35f338f4.js",
    "revision": "e75f754dfed6a0ddfddcae6115c4d6f0"
  },
  {
    "url": "assets/js/34.28df4eed.js",
    "revision": "f2f527a7bc9654b30f6f61e11f29ef8d"
  },
  {
    "url": "assets/js/35.6acd5a18.js",
    "revision": "9d7959fd34cdd7c7679c266fa5231df8"
  },
  {
    "url": "assets/js/36.44e6f1a0.js",
    "revision": "4c75ba6834a11cd718e9d8a0e76f0962"
  },
  {
    "url": "assets/js/37.47d05859.js",
    "revision": "b82478cdef0ef5f5dcf4a2fb3cbbbb68"
  },
  {
    "url": "assets/js/38.8e5dc6c3.js",
    "revision": "d63d099ba28dbe1612c820be51b5e614"
  },
  {
    "url": "assets/js/39.5af96fee.js",
    "revision": "d18c7ce6702a41dd9d74e70d09a025a7"
  },
  {
    "url": "assets/js/4.720046d3.js",
    "revision": "41e024b2348fd5162eb49536eb5de93a"
  },
  {
    "url": "assets/js/40.85137ebd.js",
    "revision": "a5299d1f46ebafbdc50b65fab08a77af"
  },
  {
    "url": "assets/js/41.8ff07cd5.js",
    "revision": "e1a831d2f17ae458016e3580aa6d618e"
  },
  {
    "url": "assets/js/42.6a299ab5.js",
    "revision": "4698c8d446d2063f56c468c887b7ee71"
  },
  {
    "url": "assets/js/43.1c452685.js",
    "revision": "62ab9c5ee0f42d21ed553df91cdfffbe"
  },
  {
    "url": "assets/js/44.71f68a78.js",
    "revision": "fe0929f041cd176bedef2d4ab2828efd"
  },
  {
    "url": "assets/js/45.771b6036.js",
    "revision": "061af7f8bd10bdd31422b921e658604f"
  },
  {
    "url": "assets/js/46.68811efe.js",
    "revision": "c8f300a628c0138dcdc19816dc738920"
  },
  {
    "url": "assets/js/47.5494932e.js",
    "revision": "36224f028b1d586f4de79d5c47a7ff97"
  },
  {
    "url": "assets/js/48.159c75d7.js",
    "revision": "41c537d135e13c5269b79012fc92d0b7"
  },
  {
    "url": "assets/js/49.e841a598.js",
    "revision": "3a62661a52820b6e6cc23263b71d62df"
  },
  {
    "url": "assets/js/5.c6429617.js",
    "revision": "2f360fc4b2449cc72c49531ebc276329"
  },
  {
    "url": "assets/js/50.319cdab8.js",
    "revision": "8abf52a8639e8a18771acbd1c2e091ec"
  },
  {
    "url": "assets/js/51.32c97279.js",
    "revision": "d5f23c15342e3f4e87d3a1479323f8f0"
  },
  {
    "url": "assets/js/52.29581be3.js",
    "revision": "86e1f0968945439b5f81741829cd6acc"
  },
  {
    "url": "assets/js/53.45a4988c.js",
    "revision": "36a307a7349752ac6d441af880bcec92"
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
    "url": "assets/js/57.363e93e5.js",
    "revision": "d9995ed7876dde8e3dd31e474225244b"
  },
  {
    "url": "assets/js/58.07b94e37.js",
    "revision": "1eb6156959b8aab2d8d89ea7cd65f89f"
  },
  {
    "url": "assets/js/59.dadd05e2.js",
    "revision": "d6bf219d7ed0ddf1081d21d0fb679d06"
  },
  {
    "url": "assets/js/6.42262525.js",
    "revision": "b52a1e52fbc9dbf15d2feff4cf7152c0"
  },
  {
    "url": "assets/js/60.0527d12f.js",
    "revision": "4feccf71fa8bca100fa2d0d7871990e1"
  },
  {
    "url": "assets/js/61.4cb4b0e4.js",
    "revision": "597655079b88a6cd9788d8178c7044a9"
  },
  {
    "url": "assets/js/62.40c9a20a.js",
    "revision": "6f1bc5012d46d65e5b04a05ff83185b5"
  },
  {
    "url": "assets/js/63.147e64f3.js",
    "revision": "c491748c569618765f0eaaff0a7a43e0"
  },
  {
    "url": "assets/js/64.73d46535.js",
    "revision": "f549fa7d7979e42a2d558fb30e6cec94"
  },
  {
    "url": "assets/js/65.1770abe4.js",
    "revision": "c47732323b0ebdc6abbac8d735e630d0"
  },
  {
    "url": "assets/js/66.6d8131f5.js",
    "revision": "ceb94ab501f815cbeed4c13ee775ed61"
  },
  {
    "url": "assets/js/67.e6ad1054.js",
    "revision": "69039572dbbad86bb51d796d001e85ca"
  },
  {
    "url": "assets/js/68.5519b838.js",
    "revision": "d0345e23a60853b94c3051487659512c"
  },
  {
    "url": "assets/js/69.44249499.js",
    "revision": "c672484fa5e2a66eb318fa67e30b8c26"
  },
  {
    "url": "assets/js/7.87cc1b78.js",
    "revision": "219a0dac2abebf73df2f95e5fe5b5a21"
  },
  {
    "url": "assets/js/70.71c8baa0.js",
    "revision": "8a1861eac36ff79b4820d43115f5c9fc"
  },
  {
    "url": "assets/js/71.8aaf1aab.js",
    "revision": "7f00446cc3ec8ba5b5e711d62dcefa40"
  },
  {
    "url": "assets/js/72.e200b162.js",
    "revision": "35f6504279ea6a1e06452632f1060aa4"
  },
  {
    "url": "assets/js/73.03a1db9d.js",
    "revision": "b33d0d64628682976df0f1ab52fccb2c"
  },
  {
    "url": "assets/js/74.3513dca3.js",
    "revision": "da9d2f4cdb08977d33edcd0ebbc1e8f5"
  },
  {
    "url": "assets/js/75.11da740b.js",
    "revision": "f5cbc2677380f6f407b23de15d894609"
  },
  {
    "url": "assets/js/76.484675c8.js",
    "revision": "9e7581cf159db7fe8220a19be3335055"
  },
  {
    "url": "assets/js/77.2be8febc.js",
    "revision": "24b368b68154fd1b76f4612593acdf41"
  },
  {
    "url": "assets/js/78.d47b83b6.js",
    "revision": "e0e463b3a20f627ece7ac4b8631a8c75"
  },
  {
    "url": "assets/js/79.85e2e8de.js",
    "revision": "dd03e2593d6a08809221e553a932a193"
  },
  {
    "url": "assets/js/8.8443b70c.js",
    "revision": "2cdb7f3fd35b9d5b00a368dc9eda0b55"
  },
  {
    "url": "assets/js/80.00d6c045.js",
    "revision": "b427d5bc19e11e8fccf0fdea4143e106"
  },
  {
    "url": "assets/js/81.a8b7abc7.js",
    "revision": "765c17b3b2a14424abd783889d8a0a03"
  },
  {
    "url": "assets/js/82.2ce573fe.js",
    "revision": "4369c940754db4ea9571e33dc80819a9"
  },
  {
    "url": "assets/js/83.fb10a453.js",
    "revision": "f4a9b729a94ed07d8c499d2a3778f7ef"
  },
  {
    "url": "assets/js/84.e8d02896.js",
    "revision": "8742b6c0b75db71dd404e9a20e73ca1d"
  },
  {
    "url": "assets/js/85.f5cc4bbe.js",
    "revision": "a5e28555c58c8527602c04b8cef78daf"
  },
  {
    "url": "assets/js/86.4b8d0714.js",
    "revision": "e07d9a1fbf9620fb225f113d4de63114"
  },
  {
    "url": "assets/js/87.af804e71.js",
    "revision": "2c5677f9187bd1d0fec05d42426942ff"
  },
  {
    "url": "assets/js/88.694b0539.js",
    "revision": "b732fb1dbdcac858d71cee79184cd902"
  },
  {
    "url": "assets/js/89.8d243e20.js",
    "revision": "dd9c7c1b8cd80edc554293e1a44b8aff"
  },
  {
    "url": "assets/js/9.f71ff884.js",
    "revision": "a783f4696aa72bfa5c9bf3e52236b9da"
  },
  {
    "url": "assets/js/90.3e1c7dbb.js",
    "revision": "be48a46151a64b922815577d110c6a3a"
  },
  {
    "url": "assets/js/91.4cc8e3b2.js",
    "revision": "f68e1bf19e9bbd22cbb7a61002365674"
  },
  {
    "url": "assets/js/92.4f2a5ea2.js",
    "revision": "e686dedee589976109f91310e47e6458"
  },
  {
    "url": "assets/js/93.fd2aaa6c.js",
    "revision": "4266b6977c731ec18a6299e654a067fa"
  },
  {
    "url": "assets/js/94.cc71fd47.js",
    "revision": "4771074f0df450b9c4b8ac949eab99c9"
  },
  {
    "url": "assets/js/95.6346ae80.js",
    "revision": "46533781f17281e05ea74f658198535c"
  },
  {
    "url": "assets/js/96.06fad6a5.js",
    "revision": "58f3e938ce2d7e655d70f38358219f12"
  },
  {
    "url": "assets/js/97.19192b53.js",
    "revision": "871e86ca357ea347ffbacfec7c6c7e19"
  },
  {
    "url": "assets/js/98.c45b351e.js",
    "revision": "acebe53348b7d0c586425031507d0a45"
  },
  {
    "url": "assets/js/99.c8df6c8b.js",
    "revision": "7303c92cf6af62247120d445f9fe3a12"
  },
  {
    "url": "assets/js/app.1ffe9bc1.js",
    "revision": "9974d84fca8455709aa50a653ca7504a"
  },
  {
    "url": "common/architecture.html",
    "revision": "a7cb3e91d45db992f8444186c1a23be7"
  },
  {
    "url": "common/crawl.html",
    "revision": "d96731f4c5ab09c44f319c375a696add"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "8e21ad06720c1b7bce5a1cf2aaf29ebe"
  },
  {
    "url": "common/document.html",
    "revision": "910a909ba91a7db6ecc88849f96e35ee"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "0701e3a3fdce95a906b4a06f0f497b76"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "feed38c343c1236f1de3294737b42fac"
  },
  {
    "url": "common/index.html",
    "revision": "f8e84571314a462a1a82e563e6d136ce"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "a021e709eb52deba5cc6a3ee84f1b990"
  },
  {
    "url": "common/realtime.html",
    "revision": "51f7bda31f8172d8d8ad60259481ed11"
  },
  {
    "url": "common/refactor.html",
    "revision": "dc1924fcd0de6db7108ac62365f10a4c"
  },
  {
    "url": "common/seo.html",
    "revision": "a21c08cef8c511e7a06e0dc119b35c85"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "41f0fb8e5b7ff9e671b585c935830e77"
  },
  {
    "url": "css/tricks.html",
    "revision": "7856ffd4dcf0f097f0714c8a0e4f23c1"
  },
  {
    "url": "db/architect.html",
    "revision": "cb21ae12de0e0c236b46ba32d9c37ed9"
  },
  {
    "url": "db/cassandra.html",
    "revision": "a8c1e5333805c656bc7e56581f8792fb"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "d2dffb837b51fbecb286a57ec3129414"
  },
  {
    "url": "db/optimize.html",
    "revision": "34b8e43d81f68515b485ad805555543d"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "d7f0ba6e0c15517a03c7d9025e6ff1cf"
  },
  {
    "url": "db/sql_nosql.html",
    "revision": "9c7ff419c5985b42fa1ba09949310904"
  },
  {
    "url": "dev.html",
    "revision": "2a596f8650c6d4f85cb214e43d009d3d"
  },
  {
    "url": "index.html",
    "revision": "ffd7fbd072e3008d6c7fd7f473740e8c"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "e4b37d4d7172fdf0d972851124ccde2d"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "4e351abb70ed6f776f8715e50e2449f7"
  },
  {
    "url": "javascript/closure.html",
    "revision": "f0cfadb05f332e1e9e3729eaa7e63e24"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "760a2ba11464e3c984f99aef329960b5"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "2d79857d51db24900bc99a35cb50497e"
  },
  {
    "url": "javascript/react.html",
    "revision": "bf1a43cc34ad7d1e61680acd2cae7a17"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "229fe4082ead5328e6ebf091df31586e"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "199b9f75b272ffd7537aaca0869240e1"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "e965c3aac7a8a2b0a03ece4ab61bff89"
  },
  {
    "url": "node/env.html",
    "revision": "d463bc662e236575ecd081a7d64c8be4"
  },
  {
    "url": "node/index.html",
    "revision": "ec1c78f7a189f2da1bcd09c94fe6bc8d"
  },
  {
    "url": "node/n.html",
    "revision": "f81d0359d7b9456968553daaf46f6567"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "413139b2d507c37135fe41ffc2e23733"
  },
  {
    "url": "node/npm.html",
    "revision": "130ae9271abbccb15b5071435c5569c2"
  },
  {
    "url": "node/sequelize.html",
    "revision": "9ae228f4ad4f356b0807cab357f251d4"
  },
  {
    "url": "php/composer.html",
    "revision": "d4d7768c2776af0942d1e454bd1d4458"
  },
  {
    "url": "php/crunz.html",
    "revision": "079877ed3d200a022d09cea3264d29e5"
  },
  {
    "url": "php/laravel.html",
    "revision": "efe371defb4dd4cf4e6be51984be60ff"
  },
  {
    "url": "php/magic.html",
    "revision": "55ca9a133b7c94ee1327d687b723d426"
  },
  {
    "url": "php/notes.html",
    "revision": "f62452e7074c01110513a63ceb82d528"
  },
  {
    "url": "php/oop.html",
    "revision": "11df6f0002457c84ebe22b7acfd8c415"
  },
  {
    "url": "php/php7.html",
    "revision": "894a8286d90c44978b7f72b6277265a9"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "33ed6ba2792f82c0ee46643f5a4daebf"
  },
  {
    "url": "php/reflection.html",
    "revision": "36dfd627c8bca98dece8d230c0b3a1c4"
  },
  {
    "url": "php/tricks.html",
    "revision": "52837a19d6bccecddb11c36bc964689b"
  },
  {
    "url": "php/wordpress.html",
    "revision": "3b9bba43c7155f10b570f933be184180"
  },
  {
    "url": "quotes.html",
    "revision": "131583e4bf4087a2d263ce2c603725bd"
  },
  {
    "url": "refactor/notes.html",
    "revision": "e04805c76db9488b82cea06c782ba2d5"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "e0fc99b3611894ab2f7e5fe1f99e5ccc"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "784432ee3befb242ae9b3419eea14e89"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "6cddf5cdd0182cbcdc41d16ba585d925"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "313f31e23f046ade79cce36e908a0e21"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "bf358d627b423ee4e45ca37c770dffbe"
  },
  {
    "url": "snippets/patterns.html",
    "revision": "ffe9be583edf13529245f85f7a3d45ea"
  },
  {
    "url": "snippets/regex.html",
    "revision": "ae40a7897703f354b04d876bb0991d74"
  },
  {
    "url": "terms/architecture.html",
    "revision": "82a4d9783e9899d0d3c8c3ea65bcfa2c"
  },
  {
    "url": "terms/ddd.html",
    "revision": "f98625cb514c940344b2bb5be8caf76c"
  },
  {
    "url": "terms/javascript.html",
    "revision": "c12465038681c6572ed22c8cdf380192"
  },
  {
    "url": "terms/oop.html",
    "revision": "032b5f2ca0b7116b1337d39691e0de65"
  },
  {
    "url": "terms/rules.html",
    "revision": "c30620db83a2c0a7bcd83cca41c20615"
  },
  {
    "url": "terms/testing.html",
    "revision": "a6afa23c4a1d30daedb6fcf84da2c10b"
  },
  {
    "url": "tools/chrome.html",
    "revision": "e99a81f8071d3ff4bece4ce2f93c7d7a"
  },
  {
    "url": "tools/docker.html",
    "revision": "8a597e8ef2de4c02100732708f8567bc"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "7bb2a5fd942ffd0dbd0c5f7114ce667a"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "1a46d05d864852b63db5da0a6888167f"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "f505309fd0262db1d0df1b11c8d82c0a"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "ec6a2e39a2f292ed92c7e36fbb714c78"
  },
  {
    "url": "tools/redis.html",
    "revision": "83b1439d04ff8186aa0ee24da897c0b5"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "2dfa73422d8396ebe77fc96a219d43a2"
  },
  {
    "url": "tools/vscode.html",
    "revision": "e036b2eeda10d942da27ee5525cd9fd6"
  },
  {
    "url": "tricks/compare.html",
    "revision": "6bbb552aef032abf13e805228016b2fa"
  },
  {
    "url": "tricks/git.html",
    "revision": "6911f240f1341e9332f134a10ba85b86"
  },
  {
    "url": "tricks/linux.html",
    "revision": "df2270375503961e93d61b46454db8a2"
  },
  {
    "url": "tricks/mac.html",
    "revision": "6c6a6007ec3800313e12e84f785f7ab1"
  },
  {
    "url": "tricks/misc.html",
    "revision": "c0bb693b6c2e03b72ea8666b559d5528"
  },
  {
    "url": "tricks/setup.html",
    "revision": "d7912638a173b4a107bd2dbb53b7d332"
  },
  {
    "url": "vue/communication.html",
    "revision": "b07e444ddd1ee42c687dfb7b9745b98b"
  },
  {
    "url": "vue/events.html",
    "revision": "2eb20add49167581677658dc1bcb3831"
  },
  {
    "url": "vue/references.html",
    "revision": "b3b3bf11e02440b0dc84141591c4b55f"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "683ea484f5710443e623da1bcb0ccc8f"
  },
  {
    "url": "vue/tricks.html",
    "revision": "abb771fa56db47c356eb9444b0232076"
  },
  {
    "url": "vue/vue_react.html",
    "revision": "e5588df792df1cdb6031b9b4c0bc5698"
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
