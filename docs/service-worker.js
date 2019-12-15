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
    "revision": "057e1ec7dfca37af2337da146b1b3e1b"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "ca5ced5ea6e6916880c9affead74411c"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "92beba0bf1888e4402d6ce1df8c89c81"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "8c558ca192c12b19689bbb9f95ca5e4a"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "ccd6345ca22e90a69b69461d770c55d5"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "40184b867071871824aea819a257a937"
  },
  {
    "url": "algorithm/string.html",
    "revision": "528c5c5396e7296078c0e8d407f4fd95"
  },
  {
    "url": "architect/authenication.html",
    "revision": "3c4c05496e748bb611b11916487aae5c"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "efcc00f2bcc3112daccd7fe6485b704b"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "6f92540cd1cd929160b68b49173d78c9"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "52b771c722e89ccba49c3d628cb836c4"
  },
  {
    "url": "architect/ddd.html",
    "revision": "f0d9b9e97c992027d7341c64a8f739f7"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "4093ab127d296a9353fb71f8ed6f2ffb"
  },
  {
    "url": "architect/ebi.html",
    "revision": "f47fd24ead29f94766367934ab9a1adc"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "2deceb78f503dd7d9e43ea10c3e16915"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "8799e07c6ca2cc088fa7bc8d662bdb85"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "ca8fa8b3c8b1267d5a3ec42d35f2fb39"
  },
  {
    "url": "architect/index.html",
    "revision": "dfc3fa54d4b97ca3866ab5b2ec14c254"
  },
  {
    "url": "architect/notes.html",
    "revision": "0abe14a3f57e4a7e1eeaa03ab85b7e20"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "5930583d3ad4aeff3c71727c6c793202"
  },
  {
    "url": "architect/refs.html",
    "revision": "a39a7ff1f992b437940b17861880306a"
  },
  {
    "url": "architect/soa.html",
    "revision": "4cd1ef091341b4e3af95b0a3960048ca"
  },
  {
    "url": "architect/spa.html",
    "revision": "790ffdebd1fa24919c6f350a2031bdef"
  },
  {
    "url": "architect/use-case.html",
    "revision": "fdac4d11f8cbda066a43357a4061c043"
  },
  {
    "url": "assets/css/0.styles.34ec9276.css",
    "revision": "aa6419175620fb06224228b36c463bab"
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
    "url": "assets/js/100.50f0a243.js",
    "revision": "0f70f4560738ad076cad461c398947a7"
  },
  {
    "url": "assets/js/101.3d4dc6c5.js",
    "revision": "5a32b23401d498b6315279b975884b99"
  },
  {
    "url": "assets/js/102.c6aa1423.js",
    "revision": "843f45326bd31f064c8387a4680fa409"
  },
  {
    "url": "assets/js/103.2fb1d08a.js",
    "revision": "9e2a13ec4a169496fca491cb7f029176"
  },
  {
    "url": "assets/js/104.60a5488a.js",
    "revision": "9d693d2ed2ffeeefd01b987285295b71"
  },
  {
    "url": "assets/js/105.9362cfd1.js",
    "revision": "4dd8cc7ad4f54c4a410f94e543cf6e38"
  },
  {
    "url": "assets/js/106.309cea19.js",
    "revision": "5bf6ffa4788f19f48f93e174246a73b3"
  },
  {
    "url": "assets/js/107.c52ddfa7.js",
    "revision": "4fa90ee68b711cebf7220f4f0ce51023"
  },
  {
    "url": "assets/js/108.e2324dea.js",
    "revision": "51dc4a4651c276f1e03485d6497e8531"
  },
  {
    "url": "assets/js/11.811034c6.js",
    "revision": "3102b535a84b6b569e23de71bbd4a6d5"
  },
  {
    "url": "assets/js/12.b2119b97.js",
    "revision": "37ee83b18a6ac95064d4e1473fa9da13"
  },
  {
    "url": "assets/js/13.60f2ddad.js",
    "revision": "f00680413b605873710aa01240942da9"
  },
  {
    "url": "assets/js/14.d7f3f7ea.js",
    "revision": "79514a80854663e64d5ed224b4eea72e"
  },
  {
    "url": "assets/js/15.02c1a77b.js",
    "revision": "46b210f51aef258566e03aceec4faab5"
  },
  {
    "url": "assets/js/16.985cdb1d.js",
    "revision": "0752f2f42245cbf02d09fb2c3323563e"
  },
  {
    "url": "assets/js/17.5ddb0155.js",
    "revision": "80b396b3ecbf0f577e404f336959ea8c"
  },
  {
    "url": "assets/js/18.df7b8dbe.js",
    "revision": "283ce076af1ef483b7c338b662354511"
  },
  {
    "url": "assets/js/19.95d592aa.js",
    "revision": "2d6489bd3689fa78a32b8e330d9f0af9"
  },
  {
    "url": "assets/js/2.798c4ec4.js",
    "revision": "30b4bb6ac732908ee706e921f49de8f1"
  },
  {
    "url": "assets/js/20.d6435cfc.js",
    "revision": "93b27e2a786949401949385fc6646259"
  },
  {
    "url": "assets/js/21.731458df.js",
    "revision": "1ee125cd77ad8f679df109884c1f35ab"
  },
  {
    "url": "assets/js/22.d0463220.js",
    "revision": "ee24ac0ef098f9d72f3818a7c7706bc5"
  },
  {
    "url": "assets/js/23.97c34e01.js",
    "revision": "3e2f78b0e6b870a9708b4240b51f65fd"
  },
  {
    "url": "assets/js/24.112c9117.js",
    "revision": "124c2e514c3f511536462f71cc74766c"
  },
  {
    "url": "assets/js/25.3bcb2fdd.js",
    "revision": "60957bf8ba54938f9b9c524da763e436"
  },
  {
    "url": "assets/js/26.f551a572.js",
    "revision": "61155403e919bfdeb87d053fe43d492b"
  },
  {
    "url": "assets/js/27.668e01fc.js",
    "revision": "9385c5a7682d402159c262a388d3db59"
  },
  {
    "url": "assets/js/28.729ae779.js",
    "revision": "0084f1ce52f0096dcb9a1cceace59b85"
  },
  {
    "url": "assets/js/29.ab239e83.js",
    "revision": "2d3f7b530040d6fac1a9e77e726238fe"
  },
  {
    "url": "assets/js/3.9aa01312.js",
    "revision": "1ea7fe9dff5aff4d4d9d82c6c32bcb17"
  },
  {
    "url": "assets/js/30.5ac49f7f.js",
    "revision": "9b8bb61a4b012fd24c87ee566de52a53"
  },
  {
    "url": "assets/js/31.d1260aa1.js",
    "revision": "6c912885a0064908aa170b9f3aa35978"
  },
  {
    "url": "assets/js/32.c47345c6.js",
    "revision": "616cee02c9203f4fd1493542d6ad1ea8"
  },
  {
    "url": "assets/js/33.0c36f540.js",
    "revision": "cf4ad732b170cb28930a104c3198674f"
  },
  {
    "url": "assets/js/34.7ea1c6cf.js",
    "revision": "188cc16d2b6e5852abdc8a93471b9ee8"
  },
  {
    "url": "assets/js/35.77e4475d.js",
    "revision": "9e73a21ae6051ca6f6731125ecdfe337"
  },
  {
    "url": "assets/js/36.46c570b5.js",
    "revision": "17eaaea5ec42bc17297b26a872c86466"
  },
  {
    "url": "assets/js/37.2d06f9ae.js",
    "revision": "47e14015528fd0fabe53df618c2c492a"
  },
  {
    "url": "assets/js/38.285334f7.js",
    "revision": "0b51ec63ffd3709d3896a534d5f3ef60"
  },
  {
    "url": "assets/js/39.6dad9387.js",
    "revision": "5ec2c4db2f188441148e80caab6cd114"
  },
  {
    "url": "assets/js/4.77e50073.js",
    "revision": "9cc7054dc0e710940402fa3e2bd8eb51"
  },
  {
    "url": "assets/js/40.80d0e31a.js",
    "revision": "5ce005737f5f35ac62bf8187288497a1"
  },
  {
    "url": "assets/js/41.4d627928.js",
    "revision": "11f3bfb347783049ba4af4b8adbfbfc0"
  },
  {
    "url": "assets/js/42.05e37f04.js",
    "revision": "c5d48563e34cf30323c2e950baec802a"
  },
  {
    "url": "assets/js/43.17ab339a.js",
    "revision": "9ab0b172eb3847cc11f84ab32dfb2017"
  },
  {
    "url": "assets/js/44.aea33a2d.js",
    "revision": "4bb9a0d4eda5bd80d0338793c49e85b6"
  },
  {
    "url": "assets/js/45.867d1b44.js",
    "revision": "6a575e7517b816fbee0c7e57c56f9989"
  },
  {
    "url": "assets/js/46.38f11b47.js",
    "revision": "677df6ab84ab0fc63c442fad6ec4cb02"
  },
  {
    "url": "assets/js/47.bc97934f.js",
    "revision": "c87f631edd0d71ea8cb59fdbc00e0108"
  },
  {
    "url": "assets/js/48.63111a03.js",
    "revision": "0395c122284eeface7231d902deb226f"
  },
  {
    "url": "assets/js/49.329aa787.js",
    "revision": "9db32bb91865a8a1ceb7ff7d4bcb35be"
  },
  {
    "url": "assets/js/5.9ca46a51.js",
    "revision": "dd9d3f68fb815da674c2b34dd9197cdb"
  },
  {
    "url": "assets/js/50.706d79c0.js",
    "revision": "e53e4f2f27d959a6b12201e92b344aa7"
  },
  {
    "url": "assets/js/51.db121e3b.js",
    "revision": "e64f699d9f31a79e96ce82f35b5fdeb2"
  },
  {
    "url": "assets/js/52.653f436e.js",
    "revision": "142cd7eeb7ba5c8f7a91f7bff6bb756c"
  },
  {
    "url": "assets/js/53.0f4c11a2.js",
    "revision": "4fa177ebf4595f53f39ee5e2251cdde0"
  },
  {
    "url": "assets/js/54.f9963858.js",
    "revision": "af0042c4434c34622ce5014a32e76ecd"
  },
  {
    "url": "assets/js/55.a5cacb33.js",
    "revision": "467ad5fef9ddf068c38abfd6d61cd50c"
  },
  {
    "url": "assets/js/56.38c32a24.js",
    "revision": "25a7b52e005373aeee42d963ce3e2129"
  },
  {
    "url": "assets/js/57.5086e93c.js",
    "revision": "3b9f513a3c35cb6dc8a2da79203fd455"
  },
  {
    "url": "assets/js/58.d0ca2a7e.js",
    "revision": "2168a54cb4950cd3bb9dea9cb62726e6"
  },
  {
    "url": "assets/js/59.371d0ea3.js",
    "revision": "dd15eb53d5ad4cd827a6beace65a6515"
  },
  {
    "url": "assets/js/6.5bc5d43b.js",
    "revision": "d7f22b9388ee6058972c09801735e919"
  },
  {
    "url": "assets/js/60.cf8cd1e9.js",
    "revision": "d286f0ca155eacefeff0a3b800143df0"
  },
  {
    "url": "assets/js/61.336abbce.js",
    "revision": "4f0630802e19622666f96872380f7858"
  },
  {
    "url": "assets/js/62.d2846405.js",
    "revision": "f563b49dec67e5dcd6f33b84e27a71ad"
  },
  {
    "url": "assets/js/63.acf59ab8.js",
    "revision": "ba38830bcf1fa9caff0f5cc4398c6b49"
  },
  {
    "url": "assets/js/64.47e80684.js",
    "revision": "d497de40321cc17e969fb1e90dd03569"
  },
  {
    "url": "assets/js/65.212823a4.js",
    "revision": "5fea116b14f59b5771fb6d1884300d85"
  },
  {
    "url": "assets/js/66.42224a71.js",
    "revision": "fc8e019b7f4d10b05e60b8d271869e89"
  },
  {
    "url": "assets/js/67.f07c0bd6.js",
    "revision": "55373bb0d327610c663ad4f2fcd6101f"
  },
  {
    "url": "assets/js/68.6a2f3945.js",
    "revision": "321dde1b5aa2423130d72a74c1b7f7a9"
  },
  {
    "url": "assets/js/69.c8d3f47a.js",
    "revision": "89a4de49083638b9d3668d6d8f817428"
  },
  {
    "url": "assets/js/7.6ae6b32d.js",
    "revision": "7b8ccefd2771ef842d3802eb480cf883"
  },
  {
    "url": "assets/js/70.9f70fcea.js",
    "revision": "9e193eb54404e711b56621c619a4d71e"
  },
  {
    "url": "assets/js/71.99dbaa61.js",
    "revision": "6e6b2d11e489b490963c995783c9cab0"
  },
  {
    "url": "assets/js/72.b0605dd5.js",
    "revision": "58ba97584f16d9160ed2c4e466ef09df"
  },
  {
    "url": "assets/js/73.caac4a0e.js",
    "revision": "990e0e2487b6482c0b123c6ac419131f"
  },
  {
    "url": "assets/js/74.143e62b4.js",
    "revision": "236c9dece6463471d517d646dd24d60c"
  },
  {
    "url": "assets/js/75.ad5650af.js",
    "revision": "3ad27d5a21f3b9969151fa0307424de4"
  },
  {
    "url": "assets/js/76.23308e67.js",
    "revision": "4ac9288016478563b0e5c10bd8044adf"
  },
  {
    "url": "assets/js/77.46503870.js",
    "revision": "ef85c2447ebbc5713c06895fd9639da5"
  },
  {
    "url": "assets/js/78.ddd1e662.js",
    "revision": "11e1597143a28697b8e90fbfb39ede98"
  },
  {
    "url": "assets/js/79.cf44988a.js",
    "revision": "da15040b08031332808b9c70c1f52da2"
  },
  {
    "url": "assets/js/8.3be39f91.js",
    "revision": "90df499bffe223196bd734b5785e637f"
  },
  {
    "url": "assets/js/80.31f648fb.js",
    "revision": "18a64ef9d6a395d528e463a58849b2f3"
  },
  {
    "url": "assets/js/81.6f49d7f8.js",
    "revision": "e174fce8802402cd1e97ab5041a8de69"
  },
  {
    "url": "assets/js/82.4fb1c5c1.js",
    "revision": "cf6a5a8ba6dd37f5605c8333fe2e7264"
  },
  {
    "url": "assets/js/83.8a095e91.js",
    "revision": "bae1845b5343874225691c6266b08ec0"
  },
  {
    "url": "assets/js/84.5cf8aeb2.js",
    "revision": "3f1360dbffe71e20f53cda18c8debba3"
  },
  {
    "url": "assets/js/85.38ada8a5.js",
    "revision": "178565fb5fd450bfdbd7e5b5a2bb1149"
  },
  {
    "url": "assets/js/86.94640592.js",
    "revision": "f0af04418067ed1421f73ddac6798964"
  },
  {
    "url": "assets/js/87.62c4c47d.js",
    "revision": "0e25c346e3a21a28c523c699da682bdd"
  },
  {
    "url": "assets/js/88.c871ae48.js",
    "revision": "6a78889dcc2dda2fdfac68cd2bba9b1d"
  },
  {
    "url": "assets/js/89.611e6f12.js",
    "revision": "cb52f804f60c22648f2086576c1b6b95"
  },
  {
    "url": "assets/js/9.635938ed.js",
    "revision": "d15c5adbc5caac2d8108a8bd03ef3172"
  },
  {
    "url": "assets/js/90.dfc4007a.js",
    "revision": "8af137174efe7f07e22eb04840f419be"
  },
  {
    "url": "assets/js/91.b676db19.js",
    "revision": "7312ad4eaf3ab064c8fa677cfb7443ef"
  },
  {
    "url": "assets/js/92.3b7864bf.js",
    "revision": "d9bd00f8668de6acd15ab530e6fc874b"
  },
  {
    "url": "assets/js/93.bc85c5e5.js",
    "revision": "1ae1d9bd3a65b42051ab70272ed6740d"
  },
  {
    "url": "assets/js/94.d25bc581.js",
    "revision": "001596ab58fc784864e9cff9ee74eba3"
  },
  {
    "url": "assets/js/95.960b75d2.js",
    "revision": "824d779d020e312d71ee74553a116e41"
  },
  {
    "url": "assets/js/96.b22fada7.js",
    "revision": "d41c68486edd08cf762960ee00eeb010"
  },
  {
    "url": "assets/js/97.8854c625.js",
    "revision": "49b75750213e963391e9c5b2f83ea92a"
  },
  {
    "url": "assets/js/98.26960dfb.js",
    "revision": "35f603e74353123acdcb494ddfbbf9b1"
  },
  {
    "url": "assets/js/99.5b568d9a.js",
    "revision": "b04a6443d9501ae3018a7e9d23492197"
  },
  {
    "url": "assets/js/app.e1ced8c8.js",
    "revision": "e5e667a934b36db324d06d65b044c982"
  },
  {
    "url": "common/architecture.html",
    "revision": "eb3f88e191f8fba93a7840daf11eef4f"
  },
  {
    "url": "common/crawl.html",
    "revision": "4521a46cf066dad4ab74748fec9dca07"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "08cd85468196d6211d3d8e32a6fd518d"
  },
  {
    "url": "common/document.html",
    "revision": "16781561153833dbee7cfdfadb1e3357"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "957b9612f80ba770f3d5b82ab7c7eeb0"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "7ceb8e7ff0ee09e4f9bd2b0b686fe247"
  },
  {
    "url": "common/index.html",
    "revision": "1f53c3f185df7e8d1464159434dfc285"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "0c936cc5f02b46be6d15a9021d18a7ee"
  },
  {
    "url": "common/realtime.html",
    "revision": "88e0bd1d4807c6e6460be9029c292c4b"
  },
  {
    "url": "common/refactor.html",
    "revision": "f430b681bb9690797fe281890a588e21"
  },
  {
    "url": "common/seo.html",
    "revision": "7f7599fef00a07f78d65cfc9237b1824"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "e6ecf8d443bb1ef409bf1036895fec1b"
  },
  {
    "url": "css/tricks.html",
    "revision": "9afce71ae715dd409ba590e3c65dd407"
  },
  {
    "url": "db/architect.html",
    "revision": "33a67659ac001a69dea6a73ecd679820"
  },
  {
    "url": "db/cassandra.html",
    "revision": "bb3759e1b4c29e05c9b5d1a69d8bcef5"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "f415cb525de1e899503e96f34b87cb93"
  },
  {
    "url": "db/optimize.html",
    "revision": "209514750b40358a5d186fbadc7131b2"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "20127f4c0d1481e931bc648d2741790d"
  },
  {
    "url": "db/sql_nosql.html",
    "revision": "0c203d37bca208e35377f4a288c0fecb"
  },
  {
    "url": "dev.html",
    "revision": "7ecb7abb3d3eef8cd8e5fd81d54dcad8"
  },
  {
    "url": "index.html",
    "revision": "5a7652ad7fd85410de82f8d565870015"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "4a6075d3c450794482f5ee71a8774d81"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "cf69c8d8a3d0c11a1d0dc5d17ba5360c"
  },
  {
    "url": "javascript/closure.html",
    "revision": "41309b2126278d8d6c89f0eeeac175d0"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "5d91d1e3cb84dd829c57f0e4e0ec56d9"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "2f201e325d678d911a4542218a469c44"
  },
  {
    "url": "javascript/react.html",
    "revision": "00e7b4f1ddd431677186ac46f0cb482a"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "37322d41dd70252cd238396ffad9c3ad"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "985d17b4a37c729f995975e6304ffacb"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "b3c7860064dc9d6661d8b01ed8f1f11a"
  },
  {
    "url": "node/env.html",
    "revision": "29ab9673be5b0a1729e440267a5b04e7"
  },
  {
    "url": "node/index.html",
    "revision": "ec61ffd3f848f0790114267ee09be115"
  },
  {
    "url": "node/n.html",
    "revision": "b1c8f5a3d31f0ffb8932d81cf2029b82"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "f8f875fffeaccbe0f14b53f927c6b0f1"
  },
  {
    "url": "node/npm.html",
    "revision": "16f1111d344160c51af80d1916beb7cb"
  },
  {
    "url": "node/sequelize.html",
    "revision": "ec4b870dfce7f54c6f1334ddf086c162"
  },
  {
    "url": "php/composer.html",
    "revision": "0461c0b4f0a54278e43a93a4dc68f500"
  },
  {
    "url": "php/crunz.html",
    "revision": "30858d38a1a4f43d33c50389c3039196"
  },
  {
    "url": "php/laravel.html",
    "revision": "2edc7326f62ca2df837d4b462fa86a7f"
  },
  {
    "url": "php/magic.html",
    "revision": "386972aa96fa9f95b091d9008308e2f3"
  },
  {
    "url": "php/notes.html",
    "revision": "fd4ecb61721510e11ce62007b521c02b"
  },
  {
    "url": "php/oop.html",
    "revision": "df64ccf9666a4d64fa7ab3a95729d74f"
  },
  {
    "url": "php/php7.html",
    "revision": "86e87313d51be4d6a4955c63a09b8d3a"
  },
  {
    "url": "php/reflection.html",
    "revision": "22bd1da51f075475a993a5435e6730bd"
  },
  {
    "url": "php/tricks.html",
    "revision": "3041021d9d735d30f9800d58dfd22439"
  },
  {
    "url": "php/wordpress.html",
    "revision": "66758759cc0edfc5602984d11238fc63"
  },
  {
    "url": "quotes.html",
    "revision": "9e8ec2b832420271a11c9d90a5eacf60"
  },
  {
    "url": "refactor/notes.html",
    "revision": "519140936241cd28214e0a4fc81f8842"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "02e62d1fd4fded6c399b5eb794d04305"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "1445ca8ddc2537d731193533c335ea72"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "4e8fffe735464d97f48e746f40d7c082"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "54e304983231fd33c0689acf2772ff56"
  },
  {
    "url": "snippets/regex.html",
    "revision": "78385283a65c6a14f774f6ef8450978c"
  },
  {
    "url": "terms/architecture.html",
    "revision": "87fd698fc4a04143ffcdf6051408360f"
  },
  {
    "url": "terms/ddd.html",
    "revision": "21aed8cebcb402328b5874de066c7667"
  },
  {
    "url": "terms/javascript.html",
    "revision": "180632437df2586206a950f42d00717d"
  },
  {
    "url": "terms/oop.html",
    "revision": "b284902151ebad0494f666afa824f00c"
  },
  {
    "url": "terms/testing.html",
    "revision": "934ea714c7c39df1c12825103fa52a30"
  },
  {
    "url": "tools/chrome.html",
    "revision": "ef7f9c4d17c2a90e184feba0aa484e83"
  },
  {
    "url": "tools/docker.html",
    "revision": "83cd5f0e0e601b2737a830ff3b1e49cb"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "3a1acf2fd963db5e09fffa232505e273"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "61089895755bb4b25491a09fbafe9fc5"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "22a180055a43f933c251b3c9405c8b45"
  },
  {
    "url": "tools/redis.html",
    "revision": "3b7830c9f5f8b9bd42326eb491b30083"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "eebb65b2b033596e2e9f177b55b849b9"
  },
  {
    "url": "tools/vscode.html",
    "revision": "31dd55c9f74ab5967e7abad1052e3318"
  },
  {
    "url": "tricks/compare.html",
    "revision": "45ef9da3de706c24c932d24a834d749e"
  },
  {
    "url": "tricks/git.html",
    "revision": "9579b2173784ce21007293ff0e138ba5"
  },
  {
    "url": "tricks/linux.html",
    "revision": "1c33f4e15a51994f059112fa51227baa"
  },
  {
    "url": "tricks/mac.html",
    "revision": "bc6a934d0eea37f09cf5189282aa43bb"
  },
  {
    "url": "tricks/misc.html",
    "revision": "7bf7a284929f6c8dad45c7a26823b482"
  },
  {
    "url": "tricks/setup.html",
    "revision": "eb8d34c182c7e7db4815f92885827af5"
  },
  {
    "url": "vue/communication.html",
    "revision": "2d18db09c41ace51d4faa1823819add9"
  },
  {
    "url": "vue/events.html",
    "revision": "64e84f3cac4c1228e6dbe7680534f3f4"
  },
  {
    "url": "vue/references.html",
    "revision": "7d377d65e36db8508e781a8462d34e03"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "dce7ab01fad06401a274a680bda1bb13"
  },
  {
    "url": "vue/tricks.html",
    "revision": "772e1a41a7cb5bb5bd880e0dc76b9ab2"
  },
  {
    "url": "vue/vue_react.html",
    "revision": "fee8fd698b306b0a535758887dba1bd5"
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
