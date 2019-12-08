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
    "revision": "f12ce298d2b8f995d4dddbc42fe5d8bf"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "f1e34bc0ec287fc3d0ccb051c9514a46"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "b1e3244da36b4d778e177a15c3b87184"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "806d63f4eb28d589aefbfac546eb325d"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "0da951f93cba238eb153acc2d0463c76"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "49d93469cf7eeebcaecdb8f13d127357"
  },
  {
    "url": "algorithm/string.html",
    "revision": "6e92c43ddcdac3d5be12434e3206e0bd"
  },
  {
    "url": "architect/authenication.html",
    "revision": "1eb4cd81c51314fee9fbb41d77004ee6"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "faaef43216f309827f821d8af633188d"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "e8398bf3e4ba4a2e74b94bf2f24ed3c2"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "78abc78cc584fdb692df5bd3fd0ae9e2"
  },
  {
    "url": "architect/ddd.html",
    "revision": "2f518b6d9802203812b2dfda165061b8"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "38967629fa801f449495de4e665b1329"
  },
  {
    "url": "architect/ebi.html",
    "revision": "e326a2855f2bd537b9bcfd6e9ef494e2"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "f59b84d7264dfbd45a091cf970d227cb"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "fd2f7c359e1448c4318eff048317da0c"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "857fad6a15a211e5e390c4aae89818ef"
  },
  {
    "url": "architect/index.html",
    "revision": "43d38c4c87ab5cdb78f39f69b386f03d"
  },
  {
    "url": "architect/notes.html",
    "revision": "94a8ddd55ada55b8f4e389e8c6d834b4"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "a750f8eda96fead6cca7fce358744ad5"
  },
  {
    "url": "architect/refs.html",
    "revision": "e6d57916315af0a72c8bd2e8667f4636"
  },
  {
    "url": "architect/soa.html",
    "revision": "2f37d447e61b4db134cd7f72b5e8d1f6"
  },
  {
    "url": "architect/spa.html",
    "revision": "4a2c14f05cd69610db025ab8a06342cc"
  },
  {
    "url": "architect/use-case.html",
    "revision": "55db0b903d5f238380c69f61bdd5e211"
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
    "url": "assets/js/100.d1999a46.js",
    "revision": "71a1af5cf556c8b952527cdcdb6aaec4"
  },
  {
    "url": "assets/js/101.98972845.js",
    "revision": "1e19a4d821d0e4ba645ef5327bef1179"
  },
  {
    "url": "assets/js/102.6fd5c96a.js",
    "revision": "ba50bbf56c5d82a898e7688a8ba4f08a"
  },
  {
    "url": "assets/js/103.0d286797.js",
    "revision": "80d3208ab3b606b9b87a36f17f0e3b99"
  },
  {
    "url": "assets/js/11.1568c145.js",
    "revision": "e0e2e5f07550a22594db1648bd52d311"
  },
  {
    "url": "assets/js/12.db2f15b6.js",
    "revision": "508d1320a296d136cfef8a5fe3c3746a"
  },
  {
    "url": "assets/js/13.f94adce1.js",
    "revision": "d342e0b4cb1f66289efc4acfe3a9f373"
  },
  {
    "url": "assets/js/14.6ed5b998.js",
    "revision": "babea3b98ef9d88d6efaa8c62c1d0f33"
  },
  {
    "url": "assets/js/15.41076771.js",
    "revision": "b934b1c9dd9c21371df5f276b0b45a38"
  },
  {
    "url": "assets/js/16.0bc97e9f.js",
    "revision": "27ff91235d40c05725ce06a3d26b3505"
  },
  {
    "url": "assets/js/17.77c6e053.js",
    "revision": "99b56d20db0cbf50535cfcbbe7c1ba89"
  },
  {
    "url": "assets/js/18.a136bf97.js",
    "revision": "ce71ddbe5361270c62b0708162b3c4c2"
  },
  {
    "url": "assets/js/19.cf48ef70.js",
    "revision": "80f7590d5df3cbd4e388ad044324eb2d"
  },
  {
    "url": "assets/js/2.798c4ec4.js",
    "revision": "30b4bb6ac732908ee706e921f49de8f1"
  },
  {
    "url": "assets/js/20.fa2f0e35.js",
    "revision": "8347a50b31e3e4f27a9a663e02b5867c"
  },
  {
    "url": "assets/js/21.d00eccda.js",
    "revision": "ed0da47ceef87bcf0a265ae868cbee58"
  },
  {
    "url": "assets/js/22.e7788e78.js",
    "revision": "50b3e83fe4d161716691ecce409f1367"
  },
  {
    "url": "assets/js/23.d2de502b.js",
    "revision": "8a2ef3363322cef2f5b0a3c21b04ab3f"
  },
  {
    "url": "assets/js/24.4caca783.js",
    "revision": "504806174a0a95d858bcc702cb37f353"
  },
  {
    "url": "assets/js/25.c73882c4.js",
    "revision": "4eba43b2b7cb8286d7f30e72b5228ff8"
  },
  {
    "url": "assets/js/26.5ee6fce7.js",
    "revision": "d6e90b967316e9f8c1f5ed51566ca9a5"
  },
  {
    "url": "assets/js/27.0001fede.js",
    "revision": "4c90aac36b4f3db7a4700bc566c8948d"
  },
  {
    "url": "assets/js/28.c7be298e.js",
    "revision": "8d949e43a4909cd6a2e603b9aaa75561"
  },
  {
    "url": "assets/js/29.874c9b20.js",
    "revision": "518666a73abecd95be5e11ddeece5418"
  },
  {
    "url": "assets/js/3.60602474.js",
    "revision": "20e5f4b988b977193e57688d44a6fb0d"
  },
  {
    "url": "assets/js/30.5ac49f7f.js",
    "revision": "9b8bb61a4b012fd24c87ee566de52a53"
  },
  {
    "url": "assets/js/31.c8c8edfb.js",
    "revision": "e18d55b9f6c5b4233e48b1a182c8013e"
  },
  {
    "url": "assets/js/32.77af0d3a.js",
    "revision": "c357f6e79fd1064c6d2e1a55a95b5c1f"
  },
  {
    "url": "assets/js/33.4af7e3f8.js",
    "revision": "17bb9f464d8f34e981666b5b621c3d69"
  },
  {
    "url": "assets/js/34.a38a18b0.js",
    "revision": "fb405cd8f5740820a64e971cd91ab811"
  },
  {
    "url": "assets/js/35.9dc3ace1.js",
    "revision": "385076cda247cde19c4b60adf41702a4"
  },
  {
    "url": "assets/js/36.0d54d6bf.js",
    "revision": "dd3964d7c4a9ef289ba50512218cd074"
  },
  {
    "url": "assets/js/37.87b9babc.js",
    "revision": "64cfba238d70e33175e6eb5ce2e31aa5"
  },
  {
    "url": "assets/js/38.a944c026.js",
    "revision": "c765ef5ae9747e2a4402ddfc84775b0a"
  },
  {
    "url": "assets/js/39.2b80d073.js",
    "revision": "26134d3c6b3cf47afc3c3620177c6c96"
  },
  {
    "url": "assets/js/4.0969c6d7.js",
    "revision": "050b4b920f0ad2e46c770d9d6f2cd09c"
  },
  {
    "url": "assets/js/40.529f32e3.js",
    "revision": "ea38c3154f2bd320f829bf1a3288bec6"
  },
  {
    "url": "assets/js/41.6b604c90.js",
    "revision": "5d9f303c9ef5b134f2116674ceafdd39"
  },
  {
    "url": "assets/js/42.f617a704.js",
    "revision": "f1d446efa7a5814798e6d0c9569b4561"
  },
  {
    "url": "assets/js/43.f9114c50.js",
    "revision": "11998446a74a0636dbfe1a223dbce6c5"
  },
  {
    "url": "assets/js/44.d7b382f7.js",
    "revision": "a1cff22d3b314271ca36cb1846acce6a"
  },
  {
    "url": "assets/js/45.6963b946.js",
    "revision": "3b3f85356e17ee60a325d87e5adc7412"
  },
  {
    "url": "assets/js/46.2fd4b4bf.js",
    "revision": "baf3471ce0ad90dcbc6bb05a7560a8cc"
  },
  {
    "url": "assets/js/47.7f185b41.js",
    "revision": "fcfe9d7c05522206882811f85cd95398"
  },
  {
    "url": "assets/js/48.5492650f.js",
    "revision": "65175a21c0f409cc8ec97885e8d52e86"
  },
  {
    "url": "assets/js/49.d998b78c.js",
    "revision": "781f8286cb3b898f95d1aa733e9a34bf"
  },
  {
    "url": "assets/js/5.53cf3544.js",
    "revision": "693f2f21d7a8418eb9fc9bd5a96a08c9"
  },
  {
    "url": "assets/js/50.b7b80744.js",
    "revision": "76d5d6f608ebe578a126d4b7533745f3"
  },
  {
    "url": "assets/js/51.8124e28d.js",
    "revision": "76ce61bc3ba53bf24451e2aa51ea43d8"
  },
  {
    "url": "assets/js/52.c2d89657.js",
    "revision": "de1223173fb742efc8fcafba0bd726e3"
  },
  {
    "url": "assets/js/53.e8e3b275.js",
    "revision": "02a93402cc5d2f927748d664e52a1379"
  },
  {
    "url": "assets/js/54.e062bd90.js",
    "revision": "15110a88e8f4e0db1d6625db067f74fe"
  },
  {
    "url": "assets/js/55.8e70441a.js",
    "revision": "e110a27a2da82134910980fe3cf9490a"
  },
  {
    "url": "assets/js/56.d7a0487e.js",
    "revision": "44035b3a97629ac0a38235f7a8242d89"
  },
  {
    "url": "assets/js/57.e15cf69d.js",
    "revision": "3f3648d3cc2d9b20991afd25cc07307f"
  },
  {
    "url": "assets/js/58.82f0c9e6.js",
    "revision": "492b252e75ef5131f9e9fee1e27d150a"
  },
  {
    "url": "assets/js/59.b28983b8.js",
    "revision": "0289d0aaf827f9ff21a737f58ac02808"
  },
  {
    "url": "assets/js/6.5bc5d43b.js",
    "revision": "d7f22b9388ee6058972c09801735e919"
  },
  {
    "url": "assets/js/60.c45e3b73.js",
    "revision": "3fb1989a7ecd933634519a5f25ae02ae"
  },
  {
    "url": "assets/js/61.7b3e1b2d.js",
    "revision": "542ad11c44d766655bb83441ba8d97c8"
  },
  {
    "url": "assets/js/62.a76b0bf1.js",
    "revision": "e1d6a96c6223c27479fc59e8b8dbe20d"
  },
  {
    "url": "assets/js/63.a449f90f.js",
    "revision": "0f4ff311fdb251c85bf6048d2374eaab"
  },
  {
    "url": "assets/js/64.a8fd2ba5.js",
    "revision": "7e58068e55173dcd4a43308d327c897f"
  },
  {
    "url": "assets/js/65.c950cdf8.js",
    "revision": "36805feb37a55213c13e52c575195020"
  },
  {
    "url": "assets/js/66.a6a39b4d.js",
    "revision": "f0cd704665aa5d75bbd1b9608f7b75b6"
  },
  {
    "url": "assets/js/67.aca0856e.js",
    "revision": "8c17961d79ee45b3cc5de25a05b79e18"
  },
  {
    "url": "assets/js/68.c6934be4.js",
    "revision": "99301194e026c4b2b000352d0446dea8"
  },
  {
    "url": "assets/js/69.44292211.js",
    "revision": "73d1a401c9795a082b73d4be6c882d36"
  },
  {
    "url": "assets/js/7.ae285ef5.js",
    "revision": "afd81a54d178768c7cfaf63f689eeba6"
  },
  {
    "url": "assets/js/70.39208b11.js",
    "revision": "fd685a2fee2c0cde8160b11f12ab30ea"
  },
  {
    "url": "assets/js/71.390b337d.js",
    "revision": "80c7a17596fda6f8b64aab95acf16cad"
  },
  {
    "url": "assets/js/72.442d257a.js",
    "revision": "d5760ceb67034a65ca7b2b5308abe786"
  },
  {
    "url": "assets/js/73.c2769cb3.js",
    "revision": "d2d8492e6e21774d0aea547dce1f7e25"
  },
  {
    "url": "assets/js/74.2fb446a4.js",
    "revision": "4b3583192475d298221c295fb54ed311"
  },
  {
    "url": "assets/js/75.82d24c13.js",
    "revision": "7765612c710df1424f6bcefbeb8b6b70"
  },
  {
    "url": "assets/js/76.6913bba0.js",
    "revision": "56026858ca684d726d9f7f429802ef2e"
  },
  {
    "url": "assets/js/77.57d7ab54.js",
    "revision": "84822b4ad45ba1bb7a611bc98613a6e7"
  },
  {
    "url": "assets/js/78.47dc31d6.js",
    "revision": "3517e59c0a82a245085f94e637317f4b"
  },
  {
    "url": "assets/js/79.16dca705.js",
    "revision": "c8b037a8a43f780716bce32183085acf"
  },
  {
    "url": "assets/js/8.f49684b1.js",
    "revision": "8f5ec67b3072997e094bf0f6d072a25f"
  },
  {
    "url": "assets/js/80.d0e6c18f.js",
    "revision": "db0cbc6ffb0d8d7e8a14bcdac6303341"
  },
  {
    "url": "assets/js/81.d311dc14.js",
    "revision": "aa94abfa121b3f737464a17ebf164e79"
  },
  {
    "url": "assets/js/82.aac9dfbe.js",
    "revision": "d1e47e3fe35f7db9504ea028c3c4605a"
  },
  {
    "url": "assets/js/83.4cf7f7e0.js",
    "revision": "c70260ea4f4442ac0755b6ec3de87a83"
  },
  {
    "url": "assets/js/84.4627ce76.js",
    "revision": "200e79bef3306a529a22be9c57266311"
  },
  {
    "url": "assets/js/85.5084be48.js",
    "revision": "2fd14f46607afa32d4f8bd3fbbf01d94"
  },
  {
    "url": "assets/js/86.b320246e.js",
    "revision": "1e72fdb0e7dbff636c2766d83b89a809"
  },
  {
    "url": "assets/js/87.35935768.js",
    "revision": "4a69729430265426bd8b3ddb4c165fb6"
  },
  {
    "url": "assets/js/88.bfcc54ad.js",
    "revision": "6c04b0c83c911f6e4bb7849b51b40038"
  },
  {
    "url": "assets/js/89.46835ace.js",
    "revision": "fabf52334fb027c174c43c9eb01dfe4b"
  },
  {
    "url": "assets/js/9.363688b4.js",
    "revision": "fe58d155e2ea4630be5b5d7ae3acd706"
  },
  {
    "url": "assets/js/90.609fc687.js",
    "revision": "f3ed3ddaf9dd5c2e1e6e7f31530c09c6"
  },
  {
    "url": "assets/js/91.1a35de45.js",
    "revision": "c670c8ffb68aed5f79f34bc675e76f8a"
  },
  {
    "url": "assets/js/92.24bc3e6b.js",
    "revision": "60378c8af959f7bb2f7606677c8e8228"
  },
  {
    "url": "assets/js/93.bf12269e.js",
    "revision": "2cce6d628101ac5bdc37cea412d38ee4"
  },
  {
    "url": "assets/js/94.7cfe9f9f.js",
    "revision": "433a5bd6f8e10e538050ce058ee1d1b8"
  },
  {
    "url": "assets/js/95.2a776d0e.js",
    "revision": "8e6304b21fccab92d0510911c8ab740f"
  },
  {
    "url": "assets/js/96.287c3233.js",
    "revision": "08fbcefcfde0801b78b7178c6e6980f8"
  },
  {
    "url": "assets/js/97.760fdcaf.js",
    "revision": "104f73f881bc37b3c2f672714b4ecb59"
  },
  {
    "url": "assets/js/98.108b6a40.js",
    "revision": "92cdafd64130a92bfebf777632a95843"
  },
  {
    "url": "assets/js/99.e2b21a23.js",
    "revision": "1e263891c23966f24dd6050b5d0373a7"
  },
  {
    "url": "assets/js/app.dee5cfb9.js",
    "revision": "d0c27974f9f6344ff1b3107c2e087f65"
  },
  {
    "url": "common/architecture.html",
    "revision": "bc5f036b92140f06e4ee0bf19f38bd5e"
  },
  {
    "url": "common/crawl.html",
    "revision": "a10e30d0b0fc6f36a5f3bb9e1844d037"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "9337a212637c00fd5d66c840058c0f8b"
  },
  {
    "url": "common/document.html",
    "revision": "3a61d9e5fbb6cb806b5159ceffcdd94d"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "7344b7645d5c2949e8be93817bac5a40"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "d0e8fc71186ee3dbd7f2be761d3ba740"
  },
  {
    "url": "common/index.html",
    "revision": "57866c25cfacca8c1d1e943241ca862b"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "f65f88bea6072a50d21220abbf4c5aff"
  },
  {
    "url": "common/realtime.html",
    "revision": "9efd3b1b385300e152393ed0fe891e7e"
  },
  {
    "url": "common/refactor.html",
    "revision": "1d333b292d9c56210aa77e337a69de82"
  },
  {
    "url": "common/seo.html",
    "revision": "8dc15055904cbc330d037361c6c90794"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "07adc298f91da7af2899307e6d083a1f"
  },
  {
    "url": "css/tricks.html",
    "revision": "279dedbd3377daa48e46cd376d6ceb57"
  },
  {
    "url": "db/architect.html",
    "revision": "368b760e4cfdc07ba508885124514da0"
  },
  {
    "url": "db/cassandra.html",
    "revision": "07f827e8b369aba59277a1812584f083"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "0ce2eda0ca40240840adbfe2a325d109"
  },
  {
    "url": "db/optimize.html",
    "revision": "a57a9e31c33e371aeb1d14bb9125f9f5"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "e5e88aea7983db5e6d3ebacf664d52ed"
  },
  {
    "url": "db/sql_nosql.html",
    "revision": "4fd80aa234489b7098d835d22428f6d5"
  },
  {
    "url": "dev.html",
    "revision": "3af18a0cb5e46f8449fb07b9b68e3b35"
  },
  {
    "url": "index.html",
    "revision": "c4a8260a76b64dc3637f2670e9ab126d"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "f240d01d1a2a9a119cebb5ded9e3e8e9"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "03b6ba2b2196f92da1e75894767f9fdb"
  },
  {
    "url": "javascript/closure.html",
    "revision": "e26c3994de21f2311581884d38e2cca3"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "a3132ba06a3b47264e6a5a60fda02bb4"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "625d9be75244e4df104eba4d7cae515b"
  },
  {
    "url": "javascript/react.html",
    "revision": "a96eb4872cec394524fe801fb404de8b"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "2f4a3c33051e115d12da651420119511"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "3297a8032e3066cbef164771faab3efb"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "986a75b976b630866623a9a2a44d5230"
  },
  {
    "url": "node/env.html",
    "revision": "9b986756b103de59e2cc83f78299ccd2"
  },
  {
    "url": "node/index.html",
    "revision": "8908ff58835476d6adab22f79498fd05"
  },
  {
    "url": "node/n.html",
    "revision": "6f6e1237d8b31baa7208d08a4b989336"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "a6664b13602edd70ab39a3009a13bda2"
  },
  {
    "url": "node/npm.html",
    "revision": "fb3268a1acae1786bbc3b89238d3e2fa"
  },
  {
    "url": "node/sequelize.html",
    "revision": "88c6688950372dada9e8456fa9d5752d"
  },
  {
    "url": "php/composer.html",
    "revision": "91d69cea3b25ea2f0edfba0e7388da9b"
  },
  {
    "url": "php/laravel.html",
    "revision": "391c867b3ab151daf1863ec4e0a125c4"
  },
  {
    "url": "php/magic.html",
    "revision": "3bba84df038292a9df174fcfa14df112"
  },
  {
    "url": "php/notes.html",
    "revision": "e20fd9926c5a671d6cb4c31891143669"
  },
  {
    "url": "php/oop.html",
    "revision": "66c0c2e71619df54832784c8ae042f34"
  },
  {
    "url": "php/php7.html",
    "revision": "975860135c4b868e70e227451a323383"
  },
  {
    "url": "php/reflection.html",
    "revision": "9a70adaf781c0502dae67fa6799b7735"
  },
  {
    "url": "php/tricks.html",
    "revision": "0d03f396ebb78eb9f9c35f3dbf11a68d"
  },
  {
    "url": "php/wordpress.html",
    "revision": "5e0c3203577eab2abd7c6754da8a643d"
  },
  {
    "url": "quotes.html",
    "revision": "2e63d327ff7200dcf8f8d703b325e67a"
  },
  {
    "url": "refactor/notes.html",
    "revision": "11024f39ffd9b48582a196c4a56066e1"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "ccf980adcea5cdb86d50686b60e19a75"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "2b1b3b22f9917acaa724c083083b2c0d"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "fcc2e2ef10d096d3f1e7097127f44d0f"
  },
  {
    "url": "snippets/regex.html",
    "revision": "f17910c24f3b06930a9d1cf9c1ffe4fa"
  },
  {
    "url": "terms/architecture.html",
    "revision": "e60a6d8b79e6539d5550087ef918dd80"
  },
  {
    "url": "terms/ddd.html",
    "revision": "1d4a17ff59b94e4f549844e85a3bca60"
  },
  {
    "url": "terms/javascript.html",
    "revision": "367663608e01209135033c961708df35"
  },
  {
    "url": "terms/oop.html",
    "revision": "99b248ea68b26cb41bd185e4d0161b97"
  },
  {
    "url": "terms/testing.html",
    "revision": "aed39a817fa7c71c1bc674ea60125a13"
  },
  {
    "url": "tools/chrome.html",
    "revision": "f66306ab520e597a84ac4ea00f65604f"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "913ef3f773264d06e758dbab40c810e9"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "3dea52b2417309b086ba41143c2e89e4"
  },
  {
    "url": "tools/redis.html",
    "revision": "3430199758802a781561032b325484ad"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "c1c5a311cf7e5ffba3775f09a90abbdd"
  },
  {
    "url": "tools/vscode.html",
    "revision": "d9812c45e784451f6a8bd21383e820ff"
  },
  {
    "url": "tricks/compare.html",
    "revision": "9d555eb5a6218ac0cb7d3905e243cbc1"
  },
  {
    "url": "tricks/git.html",
    "revision": "cd51b891ab6262c84ea7dee1716a5892"
  },
  {
    "url": "tricks/linux.html",
    "revision": "144d9e2b23566af3f1b6673d25381050"
  },
  {
    "url": "tricks/mac.html",
    "revision": "a325bcf280530a6342185bae05b68c7b"
  },
  {
    "url": "tricks/misc.html",
    "revision": "879c926da83e9b7f68388e608397fc13"
  },
  {
    "url": "vue/communication.html",
    "revision": "4e7b64d19f4b88f64531a790ca85d5da"
  },
  {
    "url": "vue/events.html",
    "revision": "3df2259f8817ab750b917ad032e19b4f"
  },
  {
    "url": "vue/references.html",
    "revision": "b9258f853306a081e70c5c3a9ac47a77"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "1f095701390cc783ec6604ff7fe28d46"
  },
  {
    "url": "vue/tricks.html",
    "revision": "df2b3f610d26b2aedc8dc600a39d6aa1"
  },
  {
    "url": "vue/vue_react.html",
    "revision": "2eac67ed254062e2bca729e9a254b5c6"
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
