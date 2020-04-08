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
    "revision": "4247ee6fd69a1e8662d0b76a599f1b04"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "78d9cf8f900e8f774144daa4a197a12d"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "0953466a1a6519e0aa1e6fbf7de7a52c"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "d825625213851d5398c70a2b55f5446e"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "313f585fb3270a0f65b2e4df1a87d7de"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "1092d7bff3d19fe05a81d774fad2a13c"
  },
  {
    "url": "algorithm/string.html",
    "revision": "c5a83eaf0d77bccf4783c680e1e38a5e"
  },
  {
    "url": "architect/authenication.html",
    "revision": "8bd08974153135886e437caa1f967e43"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "388d51bab32087da92a0b075f7089e7d"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "a0edea5d66cd6cb94657f02dbb136f79"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "59acb4503701238731ab15b25e2dc0a2"
  },
  {
    "url": "architect/ddd.html",
    "revision": "09c84d817ba05eb3cbee33d932f9bc6f"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "16d296e2ff5419689ced79c82c21ec83"
  },
  {
    "url": "architect/ebi.html",
    "revision": "88775aee1fbfd9756dadecf6f9fea49c"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "97810166215f18379f3dbda1251b4fb5"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "54fba4fae3356e341dec4b73ec5d544a"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "54d3ca02d74c2ebc7ab38ac19a1d48a1"
  },
  {
    "url": "architect/index.html",
    "revision": "81f0d5eb97a5356ce8c1f01bf1166196"
  },
  {
    "url": "architect/notes.html",
    "revision": "b67c90e84d7726241fc013f611cf81f5"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "74748d7d3d4c10ae1528084bde549f55"
  },
  {
    "url": "architect/refs.html",
    "revision": "b961d2643ebd6ebdf9cec37c966710ff"
  },
  {
    "url": "architect/soa.html",
    "revision": "8b5d62dfe8c4830d1f192177ce3cf4cc"
  },
  {
    "url": "architect/spa.html",
    "revision": "23f999aeacc23f9d6e5bdb7bb65e5600"
  },
  {
    "url": "architect/use-case.html",
    "revision": "d3c38773069bfee4a346ee1004aaf7fa"
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
    "url": "assets/js/105.e136c615.js",
    "revision": "5ca1020121cf99be2d51f205af3dc376"
  },
  {
    "url": "assets/js/106.4b4912a9.js",
    "revision": "3b3adc3d42a281f8df8538aa19caee8b"
  },
  {
    "url": "assets/js/107.9fd405ff.js",
    "revision": "af1fb189858476abfbca9e486328a5d7"
  },
  {
    "url": "assets/js/108.f059a340.js",
    "revision": "f23827d35bc286e80eb41efe817f7108"
  },
  {
    "url": "assets/js/109.85408619.js",
    "revision": "d74590a8c2222977ecabb6830306f80f"
  },
  {
    "url": "assets/js/11.2d342bef.js",
    "revision": "7211ede34cb5202bb744a7b8674a2624"
  },
  {
    "url": "assets/js/110.b78c75e8.js",
    "revision": "146c69b91fc38ae54a2c5d8c468f4cb5"
  },
  {
    "url": "assets/js/111.47b2b271.js",
    "revision": "878f702362012af9280da4e27b98ee1f"
  },
  {
    "url": "assets/js/112.22bf7fbe.js",
    "revision": "ba34e9f2422c684cfb97f97badf5ac12"
  },
  {
    "url": "assets/js/113.a0a4d4ce.js",
    "revision": "d512c91c088d8f61d5ef808ffbd777fc"
  },
  {
    "url": "assets/js/114.1e3e5c56.js",
    "revision": "048dd739f6184c7f59b6c1421c431e83"
  },
  {
    "url": "assets/js/115.1479641e.js",
    "revision": "69c90562d88d1b30a02ce558ff0ed6ab"
  },
  {
    "url": "assets/js/116.45cd01aa.js",
    "revision": "f74f93b1302335fe4fcefaf36a1d6c5a"
  },
  {
    "url": "assets/js/12.9ea81ce6.js",
    "revision": "7cab20206433bfbe6930afb13034a149"
  },
  {
    "url": "assets/js/13.df8f7b2e.js",
    "revision": "64e69b588008bf52c2c00f226e3125e7"
  },
  {
    "url": "assets/js/14.ebacf019.js",
    "revision": "f1ec7b328504f27292d9718baf6c8be6"
  },
  {
    "url": "assets/js/15.4be45131.js",
    "revision": "4fa409f1dc9c65c47483b560e225f4f6"
  },
  {
    "url": "assets/js/16.443acf0a.js",
    "revision": "e5de7554ac8e366d4276995aa4d4b5ea"
  },
  {
    "url": "assets/js/17.ace9c590.js",
    "revision": "02391706721f651497cb7f13219df09d"
  },
  {
    "url": "assets/js/18.0afd3e8c.js",
    "revision": "5c2b00317c1f889f60b276e4f2153d85"
  },
  {
    "url": "assets/js/19.5701c086.js",
    "revision": "2ba6efec1a648824db5cf8f8650eaf12"
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
    "url": "assets/js/21.ad112d09.js",
    "revision": "8be9960500f392d67ad32145aee5005b"
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
    "url": "assets/js/24.190c90b1.js",
    "revision": "08b54abcf67daf961a8923c23306b580"
  },
  {
    "url": "assets/js/25.01a6035a.js",
    "revision": "d3d89b1f779f86c894066970ff0be90b"
  },
  {
    "url": "assets/js/26.dc20d12d.js",
    "revision": "718ff0b6a7143865eb4e660df9a065e2"
  },
  {
    "url": "assets/js/27.82370881.js",
    "revision": "0c52f7d55abe0825a36baa6cdee173cb"
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
    "url": "assets/js/3.0eb48801.js",
    "revision": "1e60b47cd6499510a5bcbe6745ec26fd"
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
    "url": "assets/js/34.691723d8.js",
    "revision": "4200af8f07903c37daf91bffb3b3c024"
  },
  {
    "url": "assets/js/35.25ed0d4c.js",
    "revision": "b1a6cb2e99af45cafe39875f6cf6f385"
  },
  {
    "url": "assets/js/36.a635741c.js",
    "revision": "6d6230ce4ef68ea0ef60a4e1683e0ff6"
  },
  {
    "url": "assets/js/37.02f62479.js",
    "revision": "ca7165cc1289a4a4f98758c2044b679e"
  },
  {
    "url": "assets/js/38.78cdf012.js",
    "revision": "9e6ae0143a53fe2c4dc28d86192fe922"
  },
  {
    "url": "assets/js/39.0e9e0c84.js",
    "revision": "0d5783e5da980f72f9a19d38d6514543"
  },
  {
    "url": "assets/js/4.3c6a5f2e.js",
    "revision": "a557b657d76a0f2c7afc58c860b0d190"
  },
  {
    "url": "assets/js/40.0fda6a3c.js",
    "revision": "285d34838f783dab75cccf2f6e089787"
  },
  {
    "url": "assets/js/41.e9680b24.js",
    "revision": "9f67c50c91179f8d9ced67956fe63903"
  },
  {
    "url": "assets/js/42.7e458720.js",
    "revision": "2634f87961c8dab61f154b9f9cdbbefc"
  },
  {
    "url": "assets/js/43.ab261e65.js",
    "revision": "710b855cac73d441f38c7c0a0c79578b"
  },
  {
    "url": "assets/js/44.14b7eba1.js",
    "revision": "ab019e4f00861861eb45f82e3861ab17"
  },
  {
    "url": "assets/js/45.771b6036.js",
    "revision": "061af7f8bd10bdd31422b921e658604f"
  },
  {
    "url": "assets/js/46.e5763732.js",
    "revision": "334743081089797ef94d2a9ac890a594"
  },
  {
    "url": "assets/js/47.5494932e.js",
    "revision": "36224f028b1d586f4de79d5c47a7ff97"
  },
  {
    "url": "assets/js/48.211bd352.js",
    "revision": "311b7cada3ff792472793726a1cb5e28"
  },
  {
    "url": "assets/js/49.5961e69d.js",
    "revision": "f83120afa49e24b79338dba0ac38587f"
  },
  {
    "url": "assets/js/5.d6b9a9b2.js",
    "revision": "b62ca144b35d270aea3c9e353a68a4f9"
  },
  {
    "url": "assets/js/50.8c5d5a49.js",
    "revision": "fc364d2466fa5c60f11e40fc3685e464"
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
    "url": "assets/js/55.7ba41670.js",
    "revision": "fb9be8ef7c7b78c59501738fe18d8053"
  },
  {
    "url": "assets/js/56.3af3367b.js",
    "revision": "05aaf6959490de5d55741a6c3253e1a5"
  },
  {
    "url": "assets/js/57.eb88401d.js",
    "revision": "dd7c347813cd187bf75db3f92a06855e"
  },
  {
    "url": "assets/js/58.1b651132.js",
    "revision": "e5d9fa0ebd7810881eff5f529a799838"
  },
  {
    "url": "assets/js/59.a1f4701e.js",
    "revision": "6eb5a5e402654cd827f527ae0d1710de"
  },
  {
    "url": "assets/js/6.0a5f02d8.js",
    "revision": "7b257ab4167743a4344ab652caca37fe"
  },
  {
    "url": "assets/js/60.04fe1daf.js",
    "revision": "8c842264b44aaebfbeb735ead00c4c21"
  },
  {
    "url": "assets/js/61.32dc8ae4.js",
    "revision": "0c7bf4c8835d0bcba8be21a3c431857f"
  },
  {
    "url": "assets/js/62.9b2f4ae9.js",
    "revision": "c4d00e107eb2afea9cd583712374a99c"
  },
  {
    "url": "assets/js/63.147e64f3.js",
    "revision": "c491748c569618765f0eaaff0a7a43e0"
  },
  {
    "url": "assets/js/64.610273e3.js",
    "revision": "5d2e81c8f4fabe0142c5df06348045bd"
  },
  {
    "url": "assets/js/65.392c52e2.js",
    "revision": "f7a6ea9e73e23989b4dc2a44c8ca8c4e"
  },
  {
    "url": "assets/js/66.222fbd0f.js",
    "revision": "affa2a2a407e8bec43ac2349728394ee"
  },
  {
    "url": "assets/js/67.8888a514.js",
    "revision": "2809adc589859238dcc6a0b9ae0d01f0"
  },
  {
    "url": "assets/js/68.5fae614e.js",
    "revision": "0b6ea48863190cff031a86c61d6f2006"
  },
  {
    "url": "assets/js/69.a176da12.js",
    "revision": "db6b579d5f92d1bce8a8a1619d61b2cb"
  },
  {
    "url": "assets/js/7.b66a7ecd.js",
    "revision": "b30f95c8f88c4b836860c4cf83cc0978"
  },
  {
    "url": "assets/js/70.2a89bc5d.js",
    "revision": "c4be9de14fd0c0bcad7684278eb2dc95"
  },
  {
    "url": "assets/js/71.3eb6fc51.js",
    "revision": "fdb14c261346d8a26dd9575029a210e1"
  },
  {
    "url": "assets/js/72.f0d4f1d7.js",
    "revision": "c685b5950c5dad3c8a5a4310182e702a"
  },
  {
    "url": "assets/js/73.8d5b50f4.js",
    "revision": "1bd8111d65e7ee9f44ba42ef51e1c3d2"
  },
  {
    "url": "assets/js/74.005a7478.js",
    "revision": "3a9169ab6a0de425de98ecd9866ca87d"
  },
  {
    "url": "assets/js/75.f309e507.js",
    "revision": "6050d163aa532ebea7068f34c7bdd5bd"
  },
  {
    "url": "assets/js/76.453fbaa4.js",
    "revision": "03487d308ae7adc793e25dc9102c751f"
  },
  {
    "url": "assets/js/77.bfda015d.js",
    "revision": "4d3dd57bbde93ea56e37856db3aac567"
  },
  {
    "url": "assets/js/78.46d77907.js",
    "revision": "8f5601683e7f55a0edc44dd318616d3f"
  },
  {
    "url": "assets/js/79.85e2e8de.js",
    "revision": "dd03e2593d6a08809221e553a932a193"
  },
  {
    "url": "assets/js/8.1bc6898b.js",
    "revision": "a1ba3ebcd80d9c23a28e7f51dcaf0328"
  },
  {
    "url": "assets/js/80.9a4a7803.js",
    "revision": "e5e9c671d8d79329083f53d798245924"
  },
  {
    "url": "assets/js/81.cfa8cf82.js",
    "revision": "f10d7d72955a94665d59c278a6987008"
  },
  {
    "url": "assets/js/82.45f8d475.js",
    "revision": "ca62e2e1250e97360fdd19a543a4da36"
  },
  {
    "url": "assets/js/83.545ee3f7.js",
    "revision": "d5df8d34b8a48dcbc05ac2a2caba408a"
  },
  {
    "url": "assets/js/84.025af9ea.js",
    "revision": "652efb052c281f8b383d7c8012c488d4"
  },
  {
    "url": "assets/js/85.6dacbb69.js",
    "revision": "87cd52be645585f809c32d1e9e4dfbc6"
  },
  {
    "url": "assets/js/86.33bfb364.js",
    "revision": "dad9bb9d4cad99a1aa61c3c6617c881c"
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
    "url": "assets/js/89.b72f599b.js",
    "revision": "d3aab6719e015044739f1aa58ee916d6"
  },
  {
    "url": "assets/js/9.f71ff884.js",
    "revision": "a783f4696aa72bfa5c9bf3e52236b9da"
  },
  {
    "url": "assets/js/90.25666399.js",
    "revision": "405e33b5170ae6546d01313d071cca85"
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
    "url": "assets/js/93.766b6704.js",
    "revision": "e7906125bb70b968744921ae89f40021"
  },
  {
    "url": "assets/js/94.99605c2e.js",
    "revision": "5820456fe6354bd7e7d20d0ed9e611b7"
  },
  {
    "url": "assets/js/95.24d91d7f.js",
    "revision": "87f62bb26e1254658a8713ce2b33a4cc"
  },
  {
    "url": "assets/js/96.6344aee5.js",
    "revision": "2c2dbec1be2d64297be7b587c2c8f5aa"
  },
  {
    "url": "assets/js/97.af9e9faf.js",
    "revision": "ea381f5bbb4f9523eb55c0959539eff5"
  },
  {
    "url": "assets/js/98.c1b4cafd.js",
    "revision": "03d5205fdaa61422598ce046cb73a4a3"
  },
  {
    "url": "assets/js/99.c8df6c8b.js",
    "revision": "7303c92cf6af62247120d445f9fe3a12"
  },
  {
    "url": "assets/js/app.7e10542c.js",
    "revision": "766fa7d1e0471dc08c2c8f58a770b0b1"
  },
  {
    "url": "common/architecture.html",
    "revision": "a096573ca3cadd0218aba037f412a4d2"
  },
  {
    "url": "common/crawl.html",
    "revision": "ba9c0724d1cc3530b7549f06fa734a0c"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "6f981c3fa34fc854c1be383e7f5dda47"
  },
  {
    "url": "common/document.html",
    "revision": "f63a7552f96102c6eaf59d588f58c939"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "c500b03e7687765467e2d31285774e8c"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "54715e51789f33c1893a08fd1ffbb7c2"
  },
  {
    "url": "common/index.html",
    "revision": "474d3610a18dfea3d9dad9ac8a133b17"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "f10488de1437471258c6a549bf7dea09"
  },
  {
    "url": "common/realtime.html",
    "revision": "41c3c8fc364f4f763793b088c5894dc0"
  },
  {
    "url": "common/refactor.html",
    "revision": "6b3eb6b6793e9c79e1e777d3a8ee7a71"
  },
  {
    "url": "common/seo.html",
    "revision": "1c9d0d388d849717ec642c29cc2a29cb"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "485c177058dece4e4776eff3fff0207c"
  },
  {
    "url": "css/tricks.html",
    "revision": "77e9e168a945ce9fa21faf64602ad7cf"
  },
  {
    "url": "db/architect.html",
    "revision": "16465dee32a8308554cb425a85459542"
  },
  {
    "url": "db/cassandra.html",
    "revision": "bbba93620665f5a0ff0607d65f9d4476"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "7ec96d25025e4c61bed7dbc011256e03"
  },
  {
    "url": "db/optimize.html",
    "revision": "7f5a79b3b727e4c5ddbc86b74407ba9b"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "5d145c6b2d0172fb97d4bdce1e32dd28"
  },
  {
    "url": "db/sql_nosql.html",
    "revision": "45de6eaa9a5c9f9008ca17c2c05c0e96"
  },
  {
    "url": "dev.html",
    "revision": "781cf52703ecf73c515e00fb4d9a0449"
  },
  {
    "url": "index.html",
    "revision": "0da5678c9587e91aaeffcdb2a854fe5b"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "a4a49eb1e2f464324f8a02b97ddbcf43"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "54723391531af6e4e0e9f9dc7e138a6e"
  },
  {
    "url": "javascript/closure.html",
    "revision": "bcba14254fc8f304e4965b91c87bf88d"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "bba3bfc42d57a98a2c6b424222f94a4a"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "df3516ac6073a12259c0640c86bed71c"
  },
  {
    "url": "javascript/react.html",
    "revision": "44c4e03b20184f7fe0b9129379d76c34"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "cccba76aa3c18fd65b4245b6b7f81487"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "b95b9edc2f27ef75a30cc656c3d32888"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "506aa676ea761e1a2d741b4a901f3ad8"
  },
  {
    "url": "node/env.html",
    "revision": "1a2e18b1c8686ec19a6a0fc0c49d76b6"
  },
  {
    "url": "node/index.html",
    "revision": "6b28fd9c3c6ee59b4623fd74476b6f04"
  },
  {
    "url": "node/n.html",
    "revision": "9a80e4c0693d4a77ea1bdca2206f2a77"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "826cf583505a142888a393efa2f8ab25"
  },
  {
    "url": "node/npm.html",
    "revision": "2e5e767f4f102231f324f9bfd4c6ad5d"
  },
  {
    "url": "node/sequelize.html",
    "revision": "a87c99ec14b25f2bca7a56dfd497c1e2"
  },
  {
    "url": "php/composer.html",
    "revision": "5f54a47e39c0e0f3acc28a770b56551d"
  },
  {
    "url": "php/crunz.html",
    "revision": "a2cc93dbb162c39427931b3ca3f9b9af"
  },
  {
    "url": "php/laravel.html",
    "revision": "194b26f55be01773ca415cad074ef15c"
  },
  {
    "url": "php/magic.html",
    "revision": "eb243c9bc15a9ceb637fa6016dbeffc1"
  },
  {
    "url": "php/notes.html",
    "revision": "60c2de59b798934c39d882ced3089caf"
  },
  {
    "url": "php/oop.html",
    "revision": "0121bed5d47af659cda555a509f51a1b"
  },
  {
    "url": "php/php7.html",
    "revision": "8d52e1fbf02cdf45f3009b85758fa33e"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "072ab9b9bb0fdc47fb37d841f2058b57"
  },
  {
    "url": "php/reflection.html",
    "revision": "4d9febf10cd5175b9e15b26fc73b86bd"
  },
  {
    "url": "php/tricks.html",
    "revision": "a656c872891ebf117869494a697c0652"
  },
  {
    "url": "php/wordpress.html",
    "revision": "4aaf746a53398637d6ff13a71b5facbb"
  },
  {
    "url": "quotes.html",
    "revision": "fbf20a022776e1c7f65c41f88aed5e4e"
  },
  {
    "url": "refactor/notes.html",
    "revision": "5d4a75c3a96d1271f2e420b53e535bbd"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "a5b83780061fdac7a3270689416d3371"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "d0941ad43b6e15b7c057fea1ac8cc451"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "46d76ffc04283895a406deb0be589572"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "fe5d5d87f9e547f26aa09628a1b8c6ee"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "5b9e2cc65be0261cb2c764460ecb0c06"
  },
  {
    "url": "snippets/patterns.html",
    "revision": "5a458304e7aeca2113c5c6b3ae88c499"
  },
  {
    "url": "snippets/regex.html",
    "revision": "a0b8c58d088f53a0b65985351c0da4f1"
  },
  {
    "url": "terms/architecture.html",
    "revision": "96870399c5b078ff036cc26c6b8dfe74"
  },
  {
    "url": "terms/ddd.html",
    "revision": "79cc2d2ace36ad0b1b5e43036dbb5379"
  },
  {
    "url": "terms/javascript.html",
    "revision": "b21364c33a778223591212555a534a1b"
  },
  {
    "url": "terms/oop.html",
    "revision": "f60441e0c49e095a7282eda1fa456a0b"
  },
  {
    "url": "terms/rules.html",
    "revision": "389c727bb84aa3b1012e66b1c1fcadff"
  },
  {
    "url": "terms/testing.html",
    "revision": "0ae2efaa8db931b8b25aca6e7ac8dd63"
  },
  {
    "url": "tools/chrome.html",
    "revision": "8250cbc56a334ecc1eab67b4bd182b14"
  },
  {
    "url": "tools/docker.html",
    "revision": "df1bd1e56d94aaef4f9f354dda5d5ab2"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "78b8a9fcff5d814278f034c19718c128"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "7a5ae7bed9e5f74c56b24c4c3b074022"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "8a52a363fb3a116021b1fc8be721e8fe"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "507f0f54ba7de32d33d98f73a1837a64"
  },
  {
    "url": "tools/redis.html",
    "revision": "8b63676e268322f145129d5354d7fde9"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "b7b08e5b4c60ab454722659ec77dcd0f"
  },
  {
    "url": "tools/vscode.html",
    "revision": "77d0147f878ead217532aff4cd53c8ed"
  },
  {
    "url": "tricks/compare.html",
    "revision": "dbb7b7d498218e6a37d51cfa2b2fc6cc"
  },
  {
    "url": "tricks/git.html",
    "revision": "ba921f5c293bc4ad37a32b3192010662"
  },
  {
    "url": "tricks/linux.html",
    "revision": "0e895a96fc13e5d14d0ff439c803ad1f"
  },
  {
    "url": "tricks/mac.html",
    "revision": "5cd373df63d731bda8cfb947808be7ed"
  },
  {
    "url": "tricks/misc.html",
    "revision": "f4f62569b1d3a62fd6c830bc6facf978"
  },
  {
    "url": "tricks/setup.html",
    "revision": "875e50df577f4c3370ce1e9e4baf58af"
  },
  {
    "url": "vue/communication.html",
    "revision": "e3d28f6cf78b46675b3e073112fdb8c6"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "b7f15679292a3eef013593628a0a8b00"
  },
  {
    "url": "vue/events.html",
    "revision": "6fc123283c4c5806b9ff5fcd60864973"
  },
  {
    "url": "vue/references.html",
    "revision": "b6c92f1f7d30c84740d65856c6b9deba"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "383e643c8a9b39c6cd5bdc9625b73c0a"
  },
  {
    "url": "vue/tricks.html",
    "revision": "c4e1ed2f3421eb7e5f474a85ea6a7ea4"
  },
  {
    "url": "vue/vue_react.html",
    "revision": "d9beddd7f39f7d870a7466e9a28849e2"
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
