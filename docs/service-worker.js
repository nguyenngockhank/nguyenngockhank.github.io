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
    "revision": "ab0d8dbfa58555eac525efaae59296c7"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "b40154211f0ac1942efa3f19f32be25e"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "ce39bb0432b227cf9fed71454e37144e"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "d94d57fb4dc152edca08988ef72278e0"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "cb009921ef12d810f9f1c2ab3cacdabe"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "5e2680536e2ddb1adf134707a4125494"
  },
  {
    "url": "algorithm/string.html",
    "revision": "592f669e167466018825b4ef24e02efc"
  },
  {
    "url": "architect/authenication.html",
    "revision": "e725cf60cb3c0963bd0e27b4ef0a0283"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "fa1a3ed670388bd03075a79ac8879e3d"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "3e01df2a8390c0ea2e4ba2637f24f95e"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "f52c7fb04d96b83cb3d4306a1a0cc1b6"
  },
  {
    "url": "architect/ddd.html",
    "revision": "dc7b7b5425f4ad800708ec640142d2fc"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "cf0bedf27eaa2b6486f71998f2ac4195"
  },
  {
    "url": "architect/ebi.html",
    "revision": "fe88f98a3f5dfb3cd667b14408bdd3ca"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "1cfdefc56e1e422a6a72bf17bdf63ff3"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "2b2eb01bac4016d5661bd50e838db07c"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "e6dfe7e6318028004923c319db30c783"
  },
  {
    "url": "architect/index.html",
    "revision": "417614561054e79a78ce6b6906a921dc"
  },
  {
    "url": "architect/notes.html",
    "revision": "8d85f7ea2d095f31d0186c83b6715f5a"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "ef3cef512d4f9770146b1597fd8e0b70"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "09ed3f45de92fc9b05e92c8f93a305f2"
  },
  {
    "url": "architect/refs.html",
    "revision": "3622790406031793e789b78f1dabc833"
  },
  {
    "url": "architect/soa.html",
    "revision": "d36f98ca0b0362649b94c7abb4f74a34"
  },
  {
    "url": "architect/spa.html",
    "revision": "cca6d10418c8d72de20624c05ecd7832"
  },
  {
    "url": "architect/terms.html",
    "revision": "1ef358768368e6bce665cfc5e81e1c95"
  },
  {
    "url": "architect/use-case.html",
    "revision": "1d46a3f0164155efdd6189d92ebb43e2"
  },
  {
    "url": "architect/webservice.html",
    "revision": "034d898e659c42f3d13bea2fe51df9b8"
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
    "url": "assets/img/architecture-stack.8e2d1320.png",
    "revision": "8e2d132089817ea5907912047e3606dd"
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
    "url": "assets/img/joins.9ba0b10d.jpg",
    "revision": "9ba0b10da7976f52b794d7618c62d14c"
  },
  {
    "url": "assets/img/js-coercion.13986b50.png",
    "revision": "13986b50684df9fe6fadbb275f20a6b5"
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
    "url": "assets/img/oauth.a174415e.png",
    "revision": "a174415ed69f5a87fd39b7ce7345f582"
  },
  {
    "url": "assets/img/Onion1.78b66789.png",
    "revision": "78b66789acc8560d3e560aec708eb3b3"
  },
  {
    "url": "assets/img/payload.23c2c700.png",
    "revision": "23c2c700fd9ad46868b969b74cf6c89f"
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
    "url": "assets/img/stream.b5997343.png",
    "revision": "b599734352be76ead6ff27ed1eb3c126"
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
    "url": "assets/img/vscode-search-reg.c883a7e7.png",
    "revision": "c883a7e7d8ec8295b228b7a1d65981de"
  },
  {
    "url": "assets/js/10.2b2d7735.js",
    "revision": "14ed9ebaccbc6cb431405f81a16926c1"
  },
  {
    "url": "assets/js/100.13097783.js",
    "revision": "a33e7903ba444d79e537e02efc171895"
  },
  {
    "url": "assets/js/101.a63d139b.js",
    "revision": "e7ac52f5828399831cfbc79d5d6e2716"
  },
  {
    "url": "assets/js/102.745dcf98.js",
    "revision": "7cf8e62301c8a3d59fd6c92d40d08f7c"
  },
  {
    "url": "assets/js/103.03f696ed.js",
    "revision": "c32eb90aadd1253cc0dc84d3d0626544"
  },
  {
    "url": "assets/js/104.ac7ef6f1.js",
    "revision": "dd10b67a450cf5712e3f6fd4d5128579"
  },
  {
    "url": "assets/js/105.338dea21.js",
    "revision": "7a5b64002a23ae4ca09620e99962f904"
  },
  {
    "url": "assets/js/106.6cc76ca5.js",
    "revision": "55be2c77f8525b8128a679a4787fdf87"
  },
  {
    "url": "assets/js/107.2dcea5cb.js",
    "revision": "6b67fa3d4116eab1ced7bd12c663d5e7"
  },
  {
    "url": "assets/js/108.fb1d3dd5.js",
    "revision": "8b385ba8cd494ff67cd81f6cf9e80bb5"
  },
  {
    "url": "assets/js/109.1ebb5a91.js",
    "revision": "10b5dcc2b30ae0d3f89c3210a04d2acd"
  },
  {
    "url": "assets/js/11.e9e83208.js",
    "revision": "64045e1a928d130b0045e2437e759724"
  },
  {
    "url": "assets/js/110.76f3e09d.js",
    "revision": "a432069c0f69981e11c2b8e0fbc9fa95"
  },
  {
    "url": "assets/js/111.b753fae6.js",
    "revision": "d0d7ae35d29e8d5e6134af900664dd92"
  },
  {
    "url": "assets/js/112.0c42eeb1.js",
    "revision": "a38dfc4f0aa520f69b350118a1f36302"
  },
  {
    "url": "assets/js/113.93dd9e92.js",
    "revision": "76aa39b0af01be1bfce190c1b4bdfd2b"
  },
  {
    "url": "assets/js/114.cf704172.js",
    "revision": "3d7578740692bf86d9f9603225a4a629"
  },
  {
    "url": "assets/js/115.485c413a.js",
    "revision": "98c9d8917bf523a7b1e3be2141dbb286"
  },
  {
    "url": "assets/js/116.ee1581fb.js",
    "revision": "cdb788457764e5cd8a94672221f554ab"
  },
  {
    "url": "assets/js/117.8b92aacc.js",
    "revision": "1ec75421628f24053d31eadc073e1bea"
  },
  {
    "url": "assets/js/118.b61e7aa1.js",
    "revision": "8c5f45fc7c559c9449abf0832daffd33"
  },
  {
    "url": "assets/js/119.9ebc8289.js",
    "revision": "0ab6fbf023d20e1025ecd6fffef24216"
  },
  {
    "url": "assets/js/12.0feb56b2.js",
    "revision": "62523ae5ac5ffd124bd3a63d177b8814"
  },
  {
    "url": "assets/js/120.9313b55a.js",
    "revision": "044c9a4ce18d12d7e86acee7838b84cc"
  },
  {
    "url": "assets/js/121.8adc2367.js",
    "revision": "24c236bd2d923a276eb384f3ceead46e"
  },
  {
    "url": "assets/js/122.d2fa0c6f.js",
    "revision": "b9525ae8da0da1d4cfd9ff783c673561"
  },
  {
    "url": "assets/js/123.ec2b78ab.js",
    "revision": "646455a0fa655278d29357208d712068"
  },
  {
    "url": "assets/js/124.10d65603.js",
    "revision": "fce9d68214828b2684afa4a0c9e63f56"
  },
  {
    "url": "assets/js/125.2f45d40f.js",
    "revision": "14fb80f801f080f29b9e49d152e170f0"
  },
  {
    "url": "assets/js/126.a5ba53e8.js",
    "revision": "368581fdc531ac604fbabf7912f31c01"
  },
  {
    "url": "assets/js/127.855369de.js",
    "revision": "ddeb653d3ad4dfb7cb34ef2f72991421"
  },
  {
    "url": "assets/js/128.d4418cbb.js",
    "revision": "4826e2365a7900264e30bd5bd9d91590"
  },
  {
    "url": "assets/js/129.d9ef1c6a.js",
    "revision": "605c9cc658d1535f056f2b084dff65ac"
  },
  {
    "url": "assets/js/13.0da07ef5.js",
    "revision": "38b8488fd306a46e66a3a772d837c7bc"
  },
  {
    "url": "assets/js/130.ef471562.js",
    "revision": "7320722ece18f0fa8536aa3191f2e122"
  },
  {
    "url": "assets/js/131.735098c7.js",
    "revision": "3e2b0d183c96e41589996e8c6d766e10"
  },
  {
    "url": "assets/js/132.42f3564a.js",
    "revision": "4568db6047908ce6912fc6e05b0c8e4e"
  },
  {
    "url": "assets/js/133.3112ba23.js",
    "revision": "c53c91f5eb66c92e430b95b09e4659aa"
  },
  {
    "url": "assets/js/134.83dda16b.js",
    "revision": "b42dd3e4d1b7f45bf3a46aea9f88e4cd"
  },
  {
    "url": "assets/js/135.e008cf26.js",
    "revision": "cc87b32ac90427a3556f8624efea7529"
  },
  {
    "url": "assets/js/136.65e19fa5.js",
    "revision": "f790c3244131cfdb063737a1c9397719"
  },
  {
    "url": "assets/js/14.4792432a.js",
    "revision": "625fc5eb36fe2d43a21ff0fd7798676f"
  },
  {
    "url": "assets/js/15.1edffe9c.js",
    "revision": "12fba88a54702a0e2eb2889388b35fda"
  },
  {
    "url": "assets/js/16.4221d681.js",
    "revision": "32ccca8ecfdd614c9aff82dfdf58e2a7"
  },
  {
    "url": "assets/js/17.3aa92820.js",
    "revision": "93e39f14c291093a16c779135608399d"
  },
  {
    "url": "assets/js/18.7b683167.js",
    "revision": "11c8ba5cbb3666552320574c0dfaf049"
  },
  {
    "url": "assets/js/19.96ad268b.js",
    "revision": "b733bb5730b329c5a6f86f5329335bbe"
  },
  {
    "url": "assets/js/2.385172a5.js",
    "revision": "994c1304cef383ea61d40740d93b768a"
  },
  {
    "url": "assets/js/20.7aac9e86.js",
    "revision": "1cb06bf2ca6d527a26b66f659605a0b7"
  },
  {
    "url": "assets/js/21.37080066.js",
    "revision": "66ddb35e3b94b483351c6e85b407ea8d"
  },
  {
    "url": "assets/js/22.8c982fa0.js",
    "revision": "198237c9501b52debdbfd5c94c9b7df8"
  },
  {
    "url": "assets/js/23.7162be9d.js",
    "revision": "afd66058594d0563c5beed3b0ab33d87"
  },
  {
    "url": "assets/js/24.0aca083b.js",
    "revision": "d1c8bffc714e612ea95f0fd6f31a316d"
  },
  {
    "url": "assets/js/25.9b8b739f.js",
    "revision": "b44969c9be2123dbc6816693d3284a21"
  },
  {
    "url": "assets/js/26.fa7c6275.js",
    "revision": "3f97117d0ec7ee44b661ceb43f229d0a"
  },
  {
    "url": "assets/js/27.bf371228.js",
    "revision": "ec56c4fab8ad6ecd93713a5a91f2f0ca"
  },
  {
    "url": "assets/js/28.b3a51ea1.js",
    "revision": "4d435cd500b5ae7a03a7a4e3d7b53077"
  },
  {
    "url": "assets/js/29.ca3339c2.js",
    "revision": "d8e0c3e48407f848eefd3f220099eec6"
  },
  {
    "url": "assets/js/3.e913a056.js",
    "revision": "efa9ccdb0e78eb980251ac6431782199"
  },
  {
    "url": "assets/js/30.19eb952f.js",
    "revision": "a9818c9681f4f7c415c231a616df21c1"
  },
  {
    "url": "assets/js/31.231f6c4c.js",
    "revision": "5363542d355f55343c86be89a246085f"
  },
  {
    "url": "assets/js/32.ac9e7c8f.js",
    "revision": "4189d792dea205cb67a950cac9d0f0c4"
  },
  {
    "url": "assets/js/33.f9ae3d01.js",
    "revision": "b72a95d5d65329652632fe1754070d7f"
  },
  {
    "url": "assets/js/34.e2f9025a.js",
    "revision": "9adbbf4d96ee3d29bbd24d8ebac491ff"
  },
  {
    "url": "assets/js/35.59db3eaa.js",
    "revision": "6d21862e9e8366b2afa1a4708fe5e9a3"
  },
  {
    "url": "assets/js/36.187f7f2c.js",
    "revision": "7b306f0652ff911b030224865b919f34"
  },
  {
    "url": "assets/js/37.ca1c0320.js",
    "revision": "7b799e3f3a3bc04aeaedc395b0570283"
  },
  {
    "url": "assets/js/38.5b99520e.js",
    "revision": "ffb336d8ef76f8ace0360c78b031c458"
  },
  {
    "url": "assets/js/39.9f7b5364.js",
    "revision": "e5bd27e0a76f1f5255bb38d81311528c"
  },
  {
    "url": "assets/js/4.d9d66dfe.js",
    "revision": "8df470c07d15f68df2c3c2704e2cdded"
  },
  {
    "url": "assets/js/40.bf4b10c0.js",
    "revision": "513a5f54028f2b861370a346b93c5fee"
  },
  {
    "url": "assets/js/41.6b97c1e9.js",
    "revision": "64b602c32a7c0505889c5fa7f2dbd0c1"
  },
  {
    "url": "assets/js/42.dcc58ebd.js",
    "revision": "d978ed4a98b2b1a00ad8595038f6821f"
  },
  {
    "url": "assets/js/43.006d6767.js",
    "revision": "67a24a79d66b1d686870b7f97975b9ee"
  },
  {
    "url": "assets/js/44.f62c6166.js",
    "revision": "bdb83707c6a8ff7d4cfb3a2c9b0713f2"
  },
  {
    "url": "assets/js/45.e2325c62.js",
    "revision": "0781526bd51e05f0b43b571c3ebd30a8"
  },
  {
    "url": "assets/js/46.d1718180.js",
    "revision": "3ed0aacd7c25cafb7b6c13528903e4c2"
  },
  {
    "url": "assets/js/47.651f4d2d.js",
    "revision": "239123c47c53c455a3d1cfffe24c0034"
  },
  {
    "url": "assets/js/48.7ee3081c.js",
    "revision": "2f373b965d0ecb0e5182b84d7e8053fc"
  },
  {
    "url": "assets/js/49.728a8084.js",
    "revision": "356e9ed4b935cae77fab302227e0bebc"
  },
  {
    "url": "assets/js/5.5fe64894.js",
    "revision": "15cb9b693ad4dfd821ac2ae9296a0700"
  },
  {
    "url": "assets/js/50.96ebe603.js",
    "revision": "acbefd46cb86326d73c5516ee91bdcaf"
  },
  {
    "url": "assets/js/51.e93cad79.js",
    "revision": "9d0d7e321151518a2d7275de414588fc"
  },
  {
    "url": "assets/js/52.a44ac546.js",
    "revision": "95f2d5f916a08a8a746cc3c947d1a328"
  },
  {
    "url": "assets/js/53.cdfbf76b.js",
    "revision": "cc17526ea4ebaedd3fb6c3590843bd9f"
  },
  {
    "url": "assets/js/54.c25ddd86.js",
    "revision": "ac762ec46611c45ae1bb28f84c8a6ab8"
  },
  {
    "url": "assets/js/55.da3139d0.js",
    "revision": "daab03cde113818ca878ef50c2ddf820"
  },
  {
    "url": "assets/js/56.1f213803.js",
    "revision": "13ed85eedc3180ef73e4144170817ee4"
  },
  {
    "url": "assets/js/57.93e04e99.js",
    "revision": "7ba371a43959ff755422f35f013c9474"
  },
  {
    "url": "assets/js/58.d6dcf204.js",
    "revision": "8807687bc575419c243fe4baa64942be"
  },
  {
    "url": "assets/js/59.e4a8f0bb.js",
    "revision": "daec8a02b1b23b7e6023beb1bc44d177"
  },
  {
    "url": "assets/js/6.5e872f29.js",
    "revision": "becfa3ab2718cef9dc506700b752255e"
  },
  {
    "url": "assets/js/60.4af78d7d.js",
    "revision": "28d4594aa15b7de9e19893f642a02855"
  },
  {
    "url": "assets/js/61.e976f224.js",
    "revision": "ed1bb624c0caefd18bc24c09f648cd16"
  },
  {
    "url": "assets/js/62.bd1df8a0.js",
    "revision": "1417b44158fa5b11bc09a15316801222"
  },
  {
    "url": "assets/js/63.95165b6d.js",
    "revision": "0c2770a6980aa76f10820601fa34deec"
  },
  {
    "url": "assets/js/64.644fe6a1.js",
    "revision": "788413caf359bfcc251f61a4b50e9d4f"
  },
  {
    "url": "assets/js/65.ca327746.js",
    "revision": "b45b248f5da66f80ae5969a4925cfb31"
  },
  {
    "url": "assets/js/66.2a833f2a.js",
    "revision": "5ffba848c3950fe287034d65b91d8465"
  },
  {
    "url": "assets/js/67.ecd0c491.js",
    "revision": "f4ff9375fa60b05bf5d62b1460f24ff3"
  },
  {
    "url": "assets/js/68.7f563815.js",
    "revision": "6b140e009a9726a7bcd14614844a140f"
  },
  {
    "url": "assets/js/69.f282d91f.js",
    "revision": "6516267150d92d9539c745edcebd35b5"
  },
  {
    "url": "assets/js/7.dc050a7e.js",
    "revision": "68c8a7318a27b98e4aecc87ce56f7e36"
  },
  {
    "url": "assets/js/70.1184a868.js",
    "revision": "d84da025d5a2e893d91d2431c4222a39"
  },
  {
    "url": "assets/js/71.f1d57cdc.js",
    "revision": "8d7ec49f0593cc8e7b7cd2b622081511"
  },
  {
    "url": "assets/js/72.0b46c721.js",
    "revision": "b0ee8922fbca6f36ffc0a009bc3fcfe6"
  },
  {
    "url": "assets/js/73.4f221966.js",
    "revision": "569854cbc5554d94c68903102251f1fe"
  },
  {
    "url": "assets/js/74.19586feb.js",
    "revision": "84f1f66a5413512eec3c39e66e994f32"
  },
  {
    "url": "assets/js/75.44b17b63.js",
    "revision": "4bf22b62b48e7dd254421a0b0506c12d"
  },
  {
    "url": "assets/js/76.b12fc8a0.js",
    "revision": "da48688ecaebd162248bd525b84cae84"
  },
  {
    "url": "assets/js/77.9c3b9dc1.js",
    "revision": "8312e332da97d483c688cc4cd1f68dd2"
  },
  {
    "url": "assets/js/78.5ae8f4f7.js",
    "revision": "1e47cebfa6c5409835ad9004ce5e8df7"
  },
  {
    "url": "assets/js/79.6f26714f.js",
    "revision": "832ca88c7818244ae223d8bced4d9800"
  },
  {
    "url": "assets/js/8.7eb42226.js",
    "revision": "c266405ce5bb7ab555ec2ffc7c20652e"
  },
  {
    "url": "assets/js/80.501a109d.js",
    "revision": "5287b38c648d8628bfa5812df0b48b47"
  },
  {
    "url": "assets/js/81.1d9bcb26.js",
    "revision": "542a0f5eea7f2cee233ea69814a95bed"
  },
  {
    "url": "assets/js/82.666da7d9.js",
    "revision": "08a474c27526395a0eaf64a9c1d9691b"
  },
  {
    "url": "assets/js/83.2133603a.js",
    "revision": "36e29abef3c013ed2cc73a50c099c086"
  },
  {
    "url": "assets/js/84.749cc060.js",
    "revision": "81499e5ae7c4a1cf88165978f6f0297f"
  },
  {
    "url": "assets/js/85.0007e59e.js",
    "revision": "cfe1e98605617356c4aab13b7b0d4aed"
  },
  {
    "url": "assets/js/86.9eb7fd51.js",
    "revision": "1e6f19bf73a91d04f250e3b8bd94d8cb"
  },
  {
    "url": "assets/js/87.776e7f06.js",
    "revision": "e715d59132f08452b6746e8daa717b52"
  },
  {
    "url": "assets/js/88.591171ea.js",
    "revision": "b2f1af9e71c6fb46d37a4340b41041f4"
  },
  {
    "url": "assets/js/89.86fdedda.js",
    "revision": "ff6fe05d7e7d4c9f5cefb6a32779827c"
  },
  {
    "url": "assets/js/9.fed5ce06.js",
    "revision": "04be1cf4f439789ecb274f532f966586"
  },
  {
    "url": "assets/js/90.4ab9334a.js",
    "revision": "aa8be6b59ba4696023c2f7268c016c78"
  },
  {
    "url": "assets/js/91.15c5a972.js",
    "revision": "11311e410de10c32ed7e5a4a7487e16d"
  },
  {
    "url": "assets/js/92.6f47fbd5.js",
    "revision": "ec839983cc68bcbd5d09b0f543dfd504"
  },
  {
    "url": "assets/js/93.e7f938fb.js",
    "revision": "bb86b81d4774af3d142d3273b4af78b0"
  },
  {
    "url": "assets/js/94.e36d6efb.js",
    "revision": "5ba02e807739cc36287fb36ae0d8340c"
  },
  {
    "url": "assets/js/95.987e7ee9.js",
    "revision": "40eed7e70ca41b89f954a5ac67540340"
  },
  {
    "url": "assets/js/96.32c7c81e.js",
    "revision": "8f6824a51e4938cfe84e9e601795fb41"
  },
  {
    "url": "assets/js/97.a0a92677.js",
    "revision": "663dd7db5bb817b8d1d59f63d6eafe22"
  },
  {
    "url": "assets/js/98.1b95a6a8.js",
    "revision": "4187d4db881b7c60abebe14e27d1410e"
  },
  {
    "url": "assets/js/99.60321ab9.js",
    "revision": "1f1c2f7ee8f6be3093c4f40716454140"
  },
  {
    "url": "assets/js/app.e93f0f9a.js",
    "revision": "26d83ac0205e7bc70a0c26cfac23f9c3"
  },
  {
    "url": "common/architecture.html",
    "revision": "ad87769ee2058c20212df6c0e2337be1"
  },
  {
    "url": "common/crawl.html",
    "revision": "2028adc7886425cf20f29715457c3617"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "611211329a8bd79ffd71519c04555d07"
  },
  {
    "url": "common/document.html",
    "revision": "cd07abfff9bd15268f25ade93d1b39eb"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "8cb608f7777ce358b8a034c7289614e8"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "4f85d27d93492923ec9c5192d755a01c"
  },
  {
    "url": "common/index.html",
    "revision": "1e73c52a7bb341c2d8be874b66f57aae"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "108e4b6b3cbaee7ff4f2c3a6d5aa6c85"
  },
  {
    "url": "common/realtime.html",
    "revision": "b80befe32f06b52646d2c09650bdde8e"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "8a2bc31f0e0b3dc7db4f2528d8324c21"
  },
  {
    "url": "common/refactor.html",
    "revision": "a93c8cc9b1535236f9d7c99afc4c08e2"
  },
  {
    "url": "common/restful.html",
    "revision": "fc2a1d935ecbfc3a41a4ba3c5b4dee35"
  },
  {
    "url": "common/seo.html",
    "revision": "096a1b0e84cc074ea2b0527a988dd11d"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "b536a4791c7f29a144ba9235dc9e30df"
  },
  {
    "url": "css/tricks.html",
    "revision": "9022a3e50d526b31545869c913a310d3"
  },
  {
    "url": "db/architect.html",
    "revision": "f98404e4fb19e897ace9f09f598c2252"
  },
  {
    "url": "db/cassandra.html",
    "revision": "57bcea54abcff1dd4b4c0105b09b62df"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "d8a75c0a041062dfb738337400135e62"
  },
  {
    "url": "db/optimize.html",
    "revision": "8e4cbaab6a39bcf175fcd9bcaea0110a"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "348f6b0d14b9a36dbf8de95a266abba4"
  },
  {
    "url": "db/sql_nosql.html",
    "revision": "01713f1acb965a6cfc10b48ce3d4d91b"
  },
  {
    "url": "index.html",
    "revision": "79c9731f1eb6b859f60a8fc43d0e8b89"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "f4a8d6e356754f5fafd48490a844156b"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "238c01ba1989333abde4663dd55f3e40"
  },
  {
    "url": "javascript/closure.html",
    "revision": "ca33b387c25c3a6faf898ada26a4af09"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "33bd53973ad65323fd8461b86c02ba7b"
  },
  {
    "url": "javascript/functor.html",
    "revision": "701bafd773d35c57b1770356c54beed8"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "13b548a2c6c8c555d9d330365cedc4bc"
  },
  {
    "url": "javascript/react.html",
    "revision": "3108c8be5ebb519884d8b878281b4502"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "e0d44e29506da4b3059d9b0a3f9fd817"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "70ee95bb719aa5239e2a67180d6d35c5"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "8ab8ab64df499b03b096300fda0370ee"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "f26154abf103cb3bc3d6180314edc671"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "5f0c9d8eede991b555058e9e7b6951e2"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "ec3a5c5c78a1051131812738f0a6b58f"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "652de21a22cd4501f6c7593841502f5d"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "429e7bd31b731c7421c6c6ba293fa7cb"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "393d541a3a4ba75055c41ba3e3ba6f68"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "539e9c5fc08a90de80e054d6bca12fd5"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "c5e382bb3cd0045780b04dedd31b9c32"
  },
  {
    "url": "kungfu/js/vue_react.html",
    "revision": "04d6299f6fcce52ccd8438ae04a0d649"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "9292c73c44460ef07fb368916a314f0c"
  },
  {
    "url": "kungfu/template.html",
    "revision": "35cb2f251c2365974b38bd907d5fd3f6"
  },
  {
    "url": "node/env.html",
    "revision": "8e26c4cd65ec9c4b38c4c2f54ad514ab"
  },
  {
    "url": "node/index.html",
    "revision": "47211cd28c4b4b87d1e914d571c0e458"
  },
  {
    "url": "node/n.html",
    "revision": "2ca49a3329be185f391f2e07dd5eb6b8"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "da592efa99dc28dd0ef7179616be7d07"
  },
  {
    "url": "node/npm.html",
    "revision": "b8d303367e56c4a537c8b2436532f8c5"
  },
  {
    "url": "node/sequelize.html",
    "revision": "c25a87b21fbb402e582b7a1880c31037"
  },
  {
    "url": "php/composer.html",
    "revision": "a23a58e3b8d656ad456c7966bc587f98"
  },
  {
    "url": "php/crunz.html",
    "revision": "646a5cf2d701bbe8419247b781085989"
  },
  {
    "url": "php/laravel.html",
    "revision": "1ae36913cdf64f7761c67bc5455bf4d8"
  },
  {
    "url": "php/magic.html",
    "revision": "72e48da7b71cb70efff1311d4e9abb4c"
  },
  {
    "url": "php/notes.html",
    "revision": "62d15b9e72cdc561acd082148ea4cbc0"
  },
  {
    "url": "php/oop.html",
    "revision": "eb8efd65709630b74599b848782e4cc9"
  },
  {
    "url": "php/php7.html",
    "revision": "c903e577174494c5b460df1eb4d7f48b"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "b79f4c702b446de7715483f0b10314d5"
  },
  {
    "url": "php/reflection.html",
    "revision": "b2d77d1f942c8cc0b9b012fa29d50277"
  },
  {
    "url": "php/tricks.html",
    "revision": "3cf8e50f312613a5af8be35b4b0e71d7"
  },
  {
    "url": "php/wordpress.html",
    "revision": "00db25541ba60e89a87583f4f57124fd"
  },
  {
    "url": "quotes.html",
    "revision": "aaf28e0753397bdc6ac2b265e6828e8b"
  },
  {
    "url": "refactor/notes.html",
    "revision": "83e42ac588329781563b12f2816111c3"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "9099886c61060f24b2cb0e860674a748"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "e6ab425107dfc39993d5df633156d2f4"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "43b22e091bf5d3f1ea7644297d0ebf3a"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "1fa48d60599a3aff25459038465d8ef2"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "f89255ea95e1fad241e8950bc2ee1b0e"
  },
  {
    "url": "snippets/jest.html",
    "revision": "93fee0e9b263acc39d0dce0b51ada8f7"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "e87d1e64b0f7af83319643f87ae562dc"
  },
  {
    "url": "snippets/patterns.html",
    "revision": "24a394ad4548095ac490be18363e1e02"
  },
  {
    "url": "snippets/regex.html",
    "revision": "b9295406a4d3a11e53301229cf323608"
  },
  {
    "url": "terms/architecture.html",
    "revision": "e92ee1f211133c79617c2dcb7e553037"
  },
  {
    "url": "terms/ddd.html",
    "revision": "6274e7d45ab5af7ef29dfaa1eb37a2c2"
  },
  {
    "url": "terms/di.html",
    "revision": "a20d8fdc30bade2d1dc78ff19f8b2033"
  },
  {
    "url": "terms/javascript.html",
    "revision": "6b03e479fce1a3ece87020f8a51fff4b"
  },
  {
    "url": "terms/oop.html",
    "revision": "b8726f63c54acd066f777eff1714db97"
  },
  {
    "url": "terms/rules.html",
    "revision": "4634c86ccc6763f40ff6dbe90ba39d68"
  },
  {
    "url": "terms/testing.html",
    "revision": "54fe2cc7c859db69cb1db338f92c030f"
  },
  {
    "url": "tools/chrome.html",
    "revision": "58fa57e2fa143560c04fdbe67dce6ecb"
  },
  {
    "url": "tools/docker.html",
    "revision": "a528e674fca9464caac29e8db7757de7"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "5e500616ba2957d476c8cd762972d3a5"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "c1d249b5ae5c574cb7492a500014e23f"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "e7fc6431811d47a5dc7c2a6320fd0035"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "d84ec8a3114ceeef69949bec53ddbbac"
  },
  {
    "url": "tools/redis.html",
    "revision": "276f089ace68656006fcc810616bac24"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "f197e52f9a63771d595dbf3b603dd278"
  },
  {
    "url": "tools/vscode.html",
    "revision": "a5b48d5148894ad7fd2c5570be3dca86"
  },
  {
    "url": "tricks/compare.html",
    "revision": "4a065da672029671a9a3fa2d29fc7aa6"
  },
  {
    "url": "tricks/git.html",
    "revision": "0e6fd5cbde2c37e5e7249ffada66919b"
  },
  {
    "url": "tricks/linux.html",
    "revision": "b42e5c1adcea328b35e13005b9b5895f"
  },
  {
    "url": "tricks/mac.html",
    "revision": "dbbd2db480f1fffe7e442f8aebfa2c6c"
  },
  {
    "url": "tricks/misc.html",
    "revision": "d50eabfd4e2f3c168e2c86ce30186bc1"
  },
  {
    "url": "tricks/setup.html",
    "revision": "f27f60417a1fa0ccee872c2e0d49df4a"
  },
  {
    "url": "vue/communication.html",
    "revision": "5ea35bcb5af7952d51029742003c7c1b"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "34066b1563643cdecbe020dc677b91be"
  },
  {
    "url": "vue/events.html",
    "revision": "7e831088068738b891ca24800a3962d6"
  },
  {
    "url": "vue/references.html",
    "revision": "ec583b516c1cd311d8514305fdd3144f"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "2909c5457a5d888f027960ac6398f112"
  },
  {
    "url": "vue/test.html",
    "revision": "3e7dedd97a8cc6356259febb1012b9b7"
  },
  {
    "url": "vue/tricks.html",
    "revision": "136af529cd3155908ac63617716119ac"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "11639b5c46b41c397a8025c203368c33"
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
