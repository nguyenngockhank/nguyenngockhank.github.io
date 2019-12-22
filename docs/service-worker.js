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
    "revision": "4ecfc9e375ae9e23e20021c2b2ae778d"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "446e4223d32cc7cfb0803058274c3487"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "dbdcfb31b959022d710aa6845f9dd7ec"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "ed21f226a35f58ac0c71ad47658a8f15"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "53cbde2aad955b6cb81a3234d83394fa"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "ce47cbb46893eba2eca3decbd247b5b5"
  },
  {
    "url": "algorithm/string.html",
    "revision": "a3715c1a16142f1f22138aed9846a044"
  },
  {
    "url": "architect/authenication.html",
    "revision": "ff4c313b01c855947bbe41d736e9d259"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "fedb8e6dbc0788469a40ad8caa84f6d2"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "a9a238edfd1a3079985a061d878bf495"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "f22e75deaf49ed9bc555ab963133219e"
  },
  {
    "url": "architect/ddd.html",
    "revision": "7efb314a9060ca9ed65c1f0ee8957570"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "cbe0c8381d5b550e5d6c5f37505d8af3"
  },
  {
    "url": "architect/ebi.html",
    "revision": "a78590a1ac0dae3faca4a93b8c5b2bf9"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "c470487e2abc18b86884ed6b62f134a4"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "dff3c76a4a7c46482bb5e8e8cda9ef60"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "4b8da5d717b92fb75af46bf3bb00a77e"
  },
  {
    "url": "architect/index.html",
    "revision": "625cda402aad9e718a54e12b9815ed35"
  },
  {
    "url": "architect/notes.html",
    "revision": "e9849830391e5f5c778737e947f065db"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "1961f19cc8c07e9db89600523d8ab349"
  },
  {
    "url": "architect/refs.html",
    "revision": "4a8f289ed66bf37422848ea5580f14d5"
  },
  {
    "url": "architect/soa.html",
    "revision": "ffabad9f5f98696486c6fcba49d9ba58"
  },
  {
    "url": "architect/spa.html",
    "revision": "5c860a698bbcc7ab1c42e8d74daf707f"
  },
  {
    "url": "architect/use-case.html",
    "revision": "d558b7961c1668beb999246850d1bbb3"
  },
  {
    "url": "assets/css/0.styles.878170be.css",
    "revision": "046dc68db088b96a3a1f63d71b7d3b9d"
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
    "url": "assets/img/vscode-search-reg.c883a7e7.png",
    "revision": "c883a7e7d8ec8295b228b7a1d65981de"
  },
  {
    "url": "assets/js/10.b29a1393.js",
    "revision": "04992767a354d891b29182a26882e209"
  },
  {
    "url": "assets/js/100.e6ed2844.js",
    "revision": "50baca724cde7569cc4e66b5cbfa30e4"
  },
  {
    "url": "assets/js/101.fd6b2759.js",
    "revision": "99741074184c6a783962a942f9e9a9b5"
  },
  {
    "url": "assets/js/102.400652bb.js",
    "revision": "33a1b7ddc3977c796e5da57555d0c899"
  },
  {
    "url": "assets/js/103.23431643.js",
    "revision": "20b116930127ca6d306f3a74bba56a58"
  },
  {
    "url": "assets/js/104.8dceba92.js",
    "revision": "05ad0e14c1ad0cef9e1bf9da84e8be2b"
  },
  {
    "url": "assets/js/105.1e9b205b.js",
    "revision": "8d21a437200dfd8e4c000ecfc78b9eac"
  },
  {
    "url": "assets/js/106.dea307fd.js",
    "revision": "130cec67cc936bfe8995475c9da7dbd9"
  },
  {
    "url": "assets/js/107.fec04cd5.js",
    "revision": "1e9b7b3fc0b324901cc08cd548b4d94e"
  },
  {
    "url": "assets/js/108.c304211c.js",
    "revision": "15b423fee67f77358d78ba37f23df09f"
  },
  {
    "url": "assets/js/109.520fdbe7.js",
    "revision": "3fa3c930bb7121bd41b7bb3502b3bec1"
  },
  {
    "url": "assets/js/11.d817f866.js",
    "revision": "57f29a157b8e6f87f9adda32e42bf961"
  },
  {
    "url": "assets/js/110.e0134525.js",
    "revision": "4c6b5e6df8877aae7443a6e0f46c5085"
  },
  {
    "url": "assets/js/111.8beeb9b7.js",
    "revision": "4e3a61ecfcb0726b73edf7b40c74e850"
  },
  {
    "url": "assets/js/12.d024b529.js",
    "revision": "3adfa7e1c877e3d29fe6e8050ca00557"
  },
  {
    "url": "assets/js/13.d62cbc58.js",
    "revision": "2be17a3379cd43f7d99a4ba02fc3a151"
  },
  {
    "url": "assets/js/14.2567355d.js",
    "revision": "415a2a2cd0b5ebd561b8e079a87edd47"
  },
  {
    "url": "assets/js/15.5f66e2e7.js",
    "revision": "ce2525b5f7be62ba21f0d1e04db6d455"
  },
  {
    "url": "assets/js/16.88e89f09.js",
    "revision": "42004072dcba9a79ae5f5b4fa306cf83"
  },
  {
    "url": "assets/js/17.8cfbc297.js",
    "revision": "fa5878cbd4c2f34dd60fc419cc38023b"
  },
  {
    "url": "assets/js/18.4d4c9e42.js",
    "revision": "08b4080e6e83544538327551a7f5e6dc"
  },
  {
    "url": "assets/js/19.61628c2c.js",
    "revision": "9fadebac838cdb9cb63614e18dc4622e"
  },
  {
    "url": "assets/js/2.ea3f587d.js",
    "revision": "73708cf276b271195fc1f163c54db7da"
  },
  {
    "url": "assets/js/20.13ae6a55.js",
    "revision": "789c323e8372ce89639bc32b1ce2d568"
  },
  {
    "url": "assets/js/21.3fcfa0ea.js",
    "revision": "10595d9bd69e16bbbe89fc7e34e2c1f1"
  },
  {
    "url": "assets/js/22.5ece6aa7.js",
    "revision": "81be187b833b480130bc8f32ca48198d"
  },
  {
    "url": "assets/js/23.3b5d9764.js",
    "revision": "b5e74c0db9e5ccbc7d3d7b6e7927d2b6"
  },
  {
    "url": "assets/js/24.084365ec.js",
    "revision": "a2e37ed805b2d08f1eef707d460e38e3"
  },
  {
    "url": "assets/js/25.31892394.js",
    "revision": "787dcd574a2e6513d47ad0f2e97e8ad7"
  },
  {
    "url": "assets/js/26.9e2ca525.js",
    "revision": "ba506646e1790e4dca530a089406e0d3"
  },
  {
    "url": "assets/js/27.8a608e29.js",
    "revision": "cf8c3b7c509ee39d7e4eeab8ef209af2"
  },
  {
    "url": "assets/js/28.2d4796ca.js",
    "revision": "f9a29a65c7db0cf64966fe91aa4aef49"
  },
  {
    "url": "assets/js/29.cf4bbaaf.js",
    "revision": "5a4ece1de8e05b71525b246107d504f3"
  },
  {
    "url": "assets/js/3.5c32a4d4.js",
    "revision": "2cdcd04319fb925615e379f732be2838"
  },
  {
    "url": "assets/js/30.55b051e6.js",
    "revision": "a8768fa4feef2c138c5516fd6fb7dc38"
  },
  {
    "url": "assets/js/31.1e5914d9.js",
    "revision": "eaf21f006891460700ae179f6d071abc"
  },
  {
    "url": "assets/js/32.55f3b153.js",
    "revision": "69424f7b58a88c0aa83d10b43bedfa04"
  },
  {
    "url": "assets/js/33.1c5b1e7e.js",
    "revision": "0316dc07133ca1a17c384907dabd67a8"
  },
  {
    "url": "assets/js/34.04658ac8.js",
    "revision": "bfda867c0f4b8a6f9d420af649078a6e"
  },
  {
    "url": "assets/js/35.875ddd6e.js",
    "revision": "3854f8f06b79cb243cddac503ff3c410"
  },
  {
    "url": "assets/js/36.7259e31f.js",
    "revision": "0502496bb6ae7814d5bd2f1ca0b16b70"
  },
  {
    "url": "assets/js/37.7709dcce.js",
    "revision": "f60bb1b4e857a9fa06e75644b119f7b9"
  },
  {
    "url": "assets/js/38.63e911d4.js",
    "revision": "12d5c33f823f844d53032c572b472871"
  },
  {
    "url": "assets/js/39.8adc78ec.js",
    "revision": "59807d2394e6203ca09c8cf4334b6a7c"
  },
  {
    "url": "assets/js/4.e8bbb465.js",
    "revision": "a25b49226ec00b11ba5d5f339700f32d"
  },
  {
    "url": "assets/js/40.37d5b8d8.js",
    "revision": "05657f04e5df306b1a43272f2aa6a2ba"
  },
  {
    "url": "assets/js/41.c2f7c477.js",
    "revision": "a49e22753338526870d52e8b4512c666"
  },
  {
    "url": "assets/js/42.daa59dae.js",
    "revision": "0f4420295697913f86e00dd1b5c0d072"
  },
  {
    "url": "assets/js/43.e05affa8.js",
    "revision": "504a18b7645c2b7b22f6f714708d2c0c"
  },
  {
    "url": "assets/js/44.2d25e4f5.js",
    "revision": "41aadabc482f4729a103dd4e20765950"
  },
  {
    "url": "assets/js/45.483d4d6d.js",
    "revision": "1c6ea541e31787a477cdc4ef434a489e"
  },
  {
    "url": "assets/js/46.3232648d.js",
    "revision": "81a5cc047bb4d0d388542d33a7a25b95"
  },
  {
    "url": "assets/js/47.007e57e9.js",
    "revision": "edcd0c09cc44c528182993673877842d"
  },
  {
    "url": "assets/js/48.2928489f.js",
    "revision": "de5e5fc63e6209592eef5c5cbdddae5b"
  },
  {
    "url": "assets/js/49.edbb2449.js",
    "revision": "07a959260c46f46949d5cda46e8a04d3"
  },
  {
    "url": "assets/js/5.7269fb07.js",
    "revision": "5eda2762f72b93c7bad57136e516dcb3"
  },
  {
    "url": "assets/js/50.5295d927.js",
    "revision": "5e18d5df9d6bb1f13156fc3c3df40fff"
  },
  {
    "url": "assets/js/51.34ee4f3d.js",
    "revision": "caab3343409f3110d784d1fce656b5d5"
  },
  {
    "url": "assets/js/52.0990c3a3.js",
    "revision": "c7ed0a9f9d1c2607e92aab10cc0d79f3"
  },
  {
    "url": "assets/js/53.06ce512b.js",
    "revision": "df51aae675a3c494c7775f96c53b9024"
  },
  {
    "url": "assets/js/54.a1ecfd64.js",
    "revision": "bb31e72a0d2c584925e99b925eacfdda"
  },
  {
    "url": "assets/js/55.ce9a8715.js",
    "revision": "538ee3ef481467afab9dc5a1e2ebd3cc"
  },
  {
    "url": "assets/js/56.dded88a0.js",
    "revision": "1534d788fb600246b021b39af7bab5dc"
  },
  {
    "url": "assets/js/57.6099ab99.js",
    "revision": "9dc067b2ea7fd92921c21d9cdc4e7032"
  },
  {
    "url": "assets/js/58.3ae93c55.js",
    "revision": "6f18fa3510a1f60cd59911a65740cfc1"
  },
  {
    "url": "assets/js/59.92e0ee54.js",
    "revision": "122362d0a1604933d694da386bcab6f4"
  },
  {
    "url": "assets/js/6.3f5e85a1.js",
    "revision": "883ed3d985a2d159d1f40b6db1353700"
  },
  {
    "url": "assets/js/60.ce43a545.js",
    "revision": "c7e08e00c9d1a366cabf9a41994e3289"
  },
  {
    "url": "assets/js/61.9afa83f1.js",
    "revision": "4199ff8c41350072ab664a2cc8501fd0"
  },
  {
    "url": "assets/js/62.4b36c0be.js",
    "revision": "17b3279c47b6332018bcd5317c5a95e0"
  },
  {
    "url": "assets/js/63.eec434a6.js",
    "revision": "7928c2445743f857b43376c0e1f47de7"
  },
  {
    "url": "assets/js/64.6948baca.js",
    "revision": "5f2807a05d60f9629fc50fa530d26cec"
  },
  {
    "url": "assets/js/65.28492faa.js",
    "revision": "fd1ade2dba8815e776c330c9c89490ee"
  },
  {
    "url": "assets/js/66.2ffe3d16.js",
    "revision": "9cdc7268e7ec48f9857cc442a4506791"
  },
  {
    "url": "assets/js/67.e6ad1054.js",
    "revision": "69039572dbbad86bb51d796d001e85ca"
  },
  {
    "url": "assets/js/68.a03d2608.js",
    "revision": "bfe812be56e52a6385a2be36c3e3a975"
  },
  {
    "url": "assets/js/69.dfa20c1b.js",
    "revision": "0f32cc452a1bf93b67e7c29f6048ae00"
  },
  {
    "url": "assets/js/7.39b54be0.js",
    "revision": "c1d24525f9f591feca31c5e73b42fbd2"
  },
  {
    "url": "assets/js/70.024fadce.js",
    "revision": "d36dae0188644d825b0f53016e36fa7b"
  },
  {
    "url": "assets/js/71.8465422c.js",
    "revision": "7792365722a5dcb8640746b1c22d9ede"
  },
  {
    "url": "assets/js/72.0d8b395b.js",
    "revision": "07c51b65bf7d179b33e48834cf5665c0"
  },
  {
    "url": "assets/js/73.dc8fac91.js",
    "revision": "06cf9c56c63a3e65e8c4abf443fd6c5b"
  },
  {
    "url": "assets/js/74.1b31303b.js",
    "revision": "150e35a620069b09954bd6b99c695346"
  },
  {
    "url": "assets/js/75.52691b46.js",
    "revision": "6c2e17ae8f3cb20a1007ad14dc2bc6c5"
  },
  {
    "url": "assets/js/76.f0108ee0.js",
    "revision": "79d25f4baa76dd24ba1165add6b4ed79"
  },
  {
    "url": "assets/js/77.1aa9e6d6.js",
    "revision": "ae19a04a7a2113dcfed18280a11d21bc"
  },
  {
    "url": "assets/js/78.c0b7bb73.js",
    "revision": "550bd7befa6f504cddce31ea3522d209"
  },
  {
    "url": "assets/js/79.75c874bf.js",
    "revision": "888a17c28d0f3476b1f024ab9cac706e"
  },
  {
    "url": "assets/js/8.67c5157b.js",
    "revision": "3ead1cb33b2e2602accc1bdbc6ae483a"
  },
  {
    "url": "assets/js/80.52798d9c.js",
    "revision": "c956e4f197fe8dea402ef64c07a264ee"
  },
  {
    "url": "assets/js/81.f520759a.js",
    "revision": "df0a5e8ea6093387e6fd3a1589df8e7f"
  },
  {
    "url": "assets/js/82.9dd95391.js",
    "revision": "5ce075670c6be1349dbc31e6f3982fbf"
  },
  {
    "url": "assets/js/83.9ef2e9be.js",
    "revision": "07cb2e3e3782d7a7531e845237ccab61"
  },
  {
    "url": "assets/js/84.209ceaac.js",
    "revision": "798017bad831d188cf22eaf6f30255e8"
  },
  {
    "url": "assets/js/85.3c2f0c93.js",
    "revision": "ff6ad34ef1838d603fac3b1f887ea207"
  },
  {
    "url": "assets/js/86.78046beb.js",
    "revision": "bf3281da6ebdc3b9bc0684d4d4ddbbb6"
  },
  {
    "url": "assets/js/87.c76245ad.js",
    "revision": "9faffc7677aa17847ef879833513abf8"
  },
  {
    "url": "assets/js/88.56fccff9.js",
    "revision": "9f47f3f6892e20621be5f50389175ec2"
  },
  {
    "url": "assets/js/89.4e3dbcb5.js",
    "revision": "06aada1f76cd573534dc0dc7ce6abf19"
  },
  {
    "url": "assets/js/9.e97617a7.js",
    "revision": "fbef51013f17bb71be8a7129edb89782"
  },
  {
    "url": "assets/js/90.90aebf47.js",
    "revision": "7ec66141153d3e5fdd55823489c52e72"
  },
  {
    "url": "assets/js/91.6f6705d1.js",
    "revision": "ae5f90fd6f62efd52775f7a14d1357c4"
  },
  {
    "url": "assets/js/92.6f087313.js",
    "revision": "f57e9edde71d6474ce733782a821200f"
  },
  {
    "url": "assets/js/93.2376f255.js",
    "revision": "165ce02a797f21e0e3d04bc481652041"
  },
  {
    "url": "assets/js/94.48b11072.js",
    "revision": "f847592735afde69b063bd0b490099e8"
  },
  {
    "url": "assets/js/95.febdf1ff.js",
    "revision": "ae2812fd8543254bc3c2fdfb70a4d351"
  },
  {
    "url": "assets/js/96.1c8f7cc8.js",
    "revision": "ec607ab43d3e5c59e256e2b30a5197f3"
  },
  {
    "url": "assets/js/97.bf0ac180.js",
    "revision": "b78fa86c37862ee159f3242e52032728"
  },
  {
    "url": "assets/js/98.d388b136.js",
    "revision": "630022481062aeb4edeea5334cff3adc"
  },
  {
    "url": "assets/js/99.7825bf4a.js",
    "revision": "2e81f4ce8b6305d5f824c5409c029cde"
  },
  {
    "url": "assets/js/app.fb8bf499.js",
    "revision": "b194be34e2cdda49d510cb85f3cdca39"
  },
  {
    "url": "common/architecture.html",
    "revision": "569b18c86bec095df73afcbb64e83f88"
  },
  {
    "url": "common/crawl.html",
    "revision": "57fb5c0eba0afc5269cc317bec519ee2"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "45c28a6ededf3822afcc34f491bb1f9d"
  },
  {
    "url": "common/document.html",
    "revision": "f1249689463c22c3f03e5bb328ed727b"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "f1d64215b7318e54aa03e12077db2d29"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "c00248679f5a403c9e931126b790610f"
  },
  {
    "url": "common/index.html",
    "revision": "1940df75998c9b225718fc8859892216"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "0de9129bf4008b9ff32e9a963cf64cf7"
  },
  {
    "url": "common/realtime.html",
    "revision": "a56d2ee2a3e5788c0698c85fd459eacc"
  },
  {
    "url": "common/refactor.html",
    "revision": "4116487e7da192405207632952063312"
  },
  {
    "url": "common/seo.html",
    "revision": "8061bc1e3e2bf6ff00d1868964f51101"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "2359c8629c66cd5c66883098ad848232"
  },
  {
    "url": "css/tricks.html",
    "revision": "e87e7e155c48a198cef49894a6ad4213"
  },
  {
    "url": "db/architect.html",
    "revision": "24fff68c63c8b586815d28ecb433d93e"
  },
  {
    "url": "db/cassandra.html",
    "revision": "490f7640bb23fc8f1f5bf5a590fe0a83"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "f44410bedfa2483201692848f2828094"
  },
  {
    "url": "db/optimize.html",
    "revision": "c6f820fac438ac329528301871199562"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "8d5f7d11e4acafe5022cc7d636087264"
  },
  {
    "url": "db/sql_nosql.html",
    "revision": "b956cbc1f90c5cfeb9731a8ac4568135"
  },
  {
    "url": "dev.html",
    "revision": "b77813a0dcac5d8f79dfdd4f1d916126"
  },
  {
    "url": "index.html",
    "revision": "dfbb2ae3cdb9497f2127b230acfccaa7"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "080be3d60546a9eecd678d9388b7e4e8"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "c7f838ae416b5cb5f077d759e6e38ff3"
  },
  {
    "url": "javascript/closure.html",
    "revision": "2d51cb1567c50cbc2949eeb56440bf34"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "465282a9c558f6e6fb323e085c5a81c7"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "5f199559849d341bf5262b948e69ca4c"
  },
  {
    "url": "javascript/react.html",
    "revision": "f551c2af90fde699335dd56a2e14d355"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "b029d43cede58cf20fe882283e572f45"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "a5e2baa096411addb1051a5ce8659f24"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "b1ad1dcb25bf18413ad406125948cb86"
  },
  {
    "url": "node/env.html",
    "revision": "dfb9914157ef05d7748b98f0960a56f4"
  },
  {
    "url": "node/index.html",
    "revision": "81ae654ae1355b8fdf0f0425c691d319"
  },
  {
    "url": "node/n.html",
    "revision": "c97794a2ddac69e29a4c461cde0aaf06"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "62a6ae4cc348b92390e52d72e90f0b6e"
  },
  {
    "url": "node/npm.html",
    "revision": "af4a5edfbf32c2a207ea2107494816b5"
  },
  {
    "url": "node/sequelize.html",
    "revision": "bd1934225d05045be6b993a303500cfc"
  },
  {
    "url": "php/composer.html",
    "revision": "2c3a1c70d53ba00d382696533b874232"
  },
  {
    "url": "php/crunz.html",
    "revision": "bb500035b37ee08764a3726872c27aed"
  },
  {
    "url": "php/laravel.html",
    "revision": "4a386ea23a5b7bd7bdd101f292eb8acb"
  },
  {
    "url": "php/magic.html",
    "revision": "20ea0b95376303cdef36e155bdfa5ef8"
  },
  {
    "url": "php/notes.html",
    "revision": "fbab3ed1affd0d9809f1b5aa85061caf"
  },
  {
    "url": "php/oop.html",
    "revision": "46375d371592e19f665eb97a4ddca74e"
  },
  {
    "url": "php/php7.html",
    "revision": "51435ef724a2a4ee5ce44cdd1936775e"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "0a3fd281777735a380bb54cc84b68b14"
  },
  {
    "url": "php/reflection.html",
    "revision": "a9c445b49d82cdbff550a4b92af94eeb"
  },
  {
    "url": "php/tricks.html",
    "revision": "ada3a1fe55986e59569ec5e109220c49"
  },
  {
    "url": "php/wordpress.html",
    "revision": "354ebd85461402ce4579bda41b71626b"
  },
  {
    "url": "quotes.html",
    "revision": "1a136cc23d2b0480262626c3ddc68a1c"
  },
  {
    "url": "refactor/notes.html",
    "revision": "777eb735830425040e79ed67d2362898"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "8752dd760b6fcb4ce6fcf9277f5b81cb"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "bc62879566cf879b81d938a1de992316"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "1d175e48499e171c3824f7cb6246061a"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "7cfd130536a1550b031ed3e05f7fe032"
  },
  {
    "url": "snippets/regex.html",
    "revision": "f138fefba446bcf55179aa8bfce515b2"
  },
  {
    "url": "terms/architecture.html",
    "revision": "d0858bcad23e90c1f8a0083547e51d61"
  },
  {
    "url": "terms/ddd.html",
    "revision": "c943de0e9c288f5f1c0c24b3c880f7d4"
  },
  {
    "url": "terms/javascript.html",
    "revision": "1e06a2862467e5f2a694f72c07c3be8d"
  },
  {
    "url": "terms/oop.html",
    "revision": "049d7a702dce85c13f37ccfff60118ce"
  },
  {
    "url": "terms/testing.html",
    "revision": "b4fc2759288893c24d2ac617c7af4aec"
  },
  {
    "url": "tools/chrome.html",
    "revision": "09d55edca4c495de2658aad8b125f211"
  },
  {
    "url": "tools/docker.html",
    "revision": "6fd43a9d9bf96c9d957b210fcd3aee91"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "5531872dbe1972be339c970131ddbe31"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "ab891826a1c15e98e5eb8ebcf4d74faa"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "7684dc41c7001bf7af1a5bc558727971"
  },
  {
    "url": "tools/redis.html",
    "revision": "dda369881fb58e7acc3b5f9801ca44b9"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "42ae683daab4c6a2accaa47758db92ec"
  },
  {
    "url": "tools/vscode.html",
    "revision": "b32c44a5c338832b2606aa7acd940f51"
  },
  {
    "url": "tricks/compare.html",
    "revision": "e3fab5725260aed43629b0454d1b28f4"
  },
  {
    "url": "tricks/git.html",
    "revision": "cc7a22d95fcd591fe06253f8b598ed0f"
  },
  {
    "url": "tricks/linux.html",
    "revision": "41bbc955a20c26346e1fa243c8b22b14"
  },
  {
    "url": "tricks/mac.html",
    "revision": "5c76e4bf725f8ca72f4248b042ee46bc"
  },
  {
    "url": "tricks/misc.html",
    "revision": "0d6cf93077be6b1f833f8026ae167611"
  },
  {
    "url": "tricks/setup.html",
    "revision": "dabf3ab11cdcd2968d42d04a147b6bd4"
  },
  {
    "url": "vue/communication.html",
    "revision": "8d7ce5071090c9475238d19179bde668"
  },
  {
    "url": "vue/events.html",
    "revision": "10351c3c0867665346c6944c57301255"
  },
  {
    "url": "vue/references.html",
    "revision": "84581eed632d118f710e37fccc5ea755"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "04efcbca79c7efd1713f2676334a8120"
  },
  {
    "url": "vue/tricks.html",
    "revision": "b584c9c2ace222337f87566bfff57589"
  },
  {
    "url": "vue/vue_react.html",
    "revision": "e6d8a6e503e55fed60ee315121de9cf3"
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
