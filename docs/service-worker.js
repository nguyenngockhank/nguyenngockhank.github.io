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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "da262240a2ee09a49c59463e1fc9afca"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "e65d51a7a595677fd962a721cb5a954c"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "9d4047864e1a8b8c082fd3ec8cc088fc"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "228bcb68a40577fa67cd3dc14d325a78"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "928eae2731f8be9f1ae89e1f9e196007"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "2499d3ef6b9f09f5bdc209cc28db7a8e"
  },
  {
    "url": "algorithm/string.html",
    "revision": "e914e0df96fabbb735ea9395fbb12da9"
  },
  {
    "url": "architect/authenication.html",
    "revision": "8b826a180b3f5fa1419a83ec9a7ebe32"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "b91ecda0a894ad349d391b1cfe432a17"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "5da84ea77eabe21d6825d4cc93262c02"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "a7fd04559adf17049915b45b0c2c7290"
  },
  {
    "url": "architect/ddd.html",
    "revision": "3a18d3c6bf8ee04ada3e07a13a89e9c3"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "f1dda9b8037fe99321be35a871944c87"
  },
  {
    "url": "architect/ebi.html",
    "revision": "1f3308710d2e078ad2831dbb3032ecf2"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "e4125507d6ecb12018b7cc793bf08519"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "890d35515095873de5c3d71a038c080d"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "d53df90a0d2272e3d36e4acb389bbd44"
  },
  {
    "url": "architect/index.html",
    "revision": "4165495be0f406062509b16b42794b66"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "eabdc64377e4b4d888f7c8ef50793ba7"
  },
  {
    "url": "architect/refs.html",
    "revision": "8aea04f1acfbb08657f74eb8d809b026"
  },
  {
    "url": "architect/soa.html",
    "revision": "23bdedf0c083d926ca66f8c885be41e5"
  },
  {
    "url": "architect/spa.html",
    "revision": "680dc5efff8e0067209dc878834060d4"
  },
  {
    "url": "assets/css/0.styles.896513ce.css",
    "revision": "a565a2cbc7dcb3e8e3de88878f9a9bdd"
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
    "url": "assets/img/uml-example.e9d72b25.png",
    "revision": "e9d72b2550f27dc89e62b3423d67e319"
  },
  {
    "url": "assets/js/10.8a09d65f.js",
    "revision": "9118c35877178ccf2508e1ab2d4a838d"
  },
  {
    "url": "assets/js/11.e0771e3c.js",
    "revision": "f6a5e424413189f1ad431974ead09553"
  },
  {
    "url": "assets/js/12.ab5925ab.js",
    "revision": "a6462e4c4eebe5b9429fe1ff8c399e3f"
  },
  {
    "url": "assets/js/13.d338b320.js",
    "revision": "76eedbff91c9120738614677863541aa"
  },
  {
    "url": "assets/js/14.129a4654.js",
    "revision": "831bce788399ed5c508def9da6697671"
  },
  {
    "url": "assets/js/15.56651ce5.js",
    "revision": "5d2ea7ff2c33a00b467bc33dcd2bda48"
  },
  {
    "url": "assets/js/16.31454f7b.js",
    "revision": "2a33b1d26cda3fec6e6e169765b47809"
  },
  {
    "url": "assets/js/17.73394aad.js",
    "revision": "d56df359cdf2bc9d4a53fa38a98dac00"
  },
  {
    "url": "assets/js/18.2331699e.js",
    "revision": "ff267c69ba2f6d9e3fd90e078bdf7d59"
  },
  {
    "url": "assets/js/19.d50bb841.js",
    "revision": "c9f9f8242c07a8a7bbb19c0cc05bf2f2"
  },
  {
    "url": "assets/js/2.fe3cdcd8.js",
    "revision": "4b83ab75c5fe3c634dbb80f21922d9b9"
  },
  {
    "url": "assets/js/20.05f5e90d.js",
    "revision": "1d3bf343c41f19f6e8d6e712040ed1dd"
  },
  {
    "url": "assets/js/21.86b56b68.js",
    "revision": "2e8a5529d99b3d18b4ea92f4e1cd60a3"
  },
  {
    "url": "assets/js/22.2c0f6241.js",
    "revision": "fb683c10e04558be67f99faed37c42fd"
  },
  {
    "url": "assets/js/23.5d51c4c1.js",
    "revision": "27bad73b4d98186336d0b1787da18a80"
  },
  {
    "url": "assets/js/24.968e4daf.js",
    "revision": "1b719469819fa868b3817a99decd0367"
  },
  {
    "url": "assets/js/25.5f065df9.js",
    "revision": "e80d70c3d6d1753911339deb09a86c13"
  },
  {
    "url": "assets/js/26.4eaedcd1.js",
    "revision": "09735307fe56568164d7f0949f5010f5"
  },
  {
    "url": "assets/js/27.675d8916.js",
    "revision": "934c7b59a90df9310df9daaa4d2b4b08"
  },
  {
    "url": "assets/js/28.86746058.js",
    "revision": "542a04694974048a49a8110f9eaee75b"
  },
  {
    "url": "assets/js/29.70f83d88.js",
    "revision": "4eb02668a85616be1ca150943754629b"
  },
  {
    "url": "assets/js/3.02970cf7.js",
    "revision": "89f60d25e79c84efb5f94c59cb42e5a3"
  },
  {
    "url": "assets/js/30.60d91bd4.js",
    "revision": "2d6f47023fb6facb633e7ea8a635b0fc"
  },
  {
    "url": "assets/js/31.b5278eed.js",
    "revision": "82b70913c253982eb6d803c80f7ea9f7"
  },
  {
    "url": "assets/js/32.327a3185.js",
    "revision": "6dc0f7ba79a85562dafc256789e327e3"
  },
  {
    "url": "assets/js/33.589e2a26.js",
    "revision": "b4a854975fe8ce86681c1db02d3c0494"
  },
  {
    "url": "assets/js/34.512fd5c4.js",
    "revision": "e1d1d2f75a097eeb8be69ae917ff0b34"
  },
  {
    "url": "assets/js/35.18b7a9cd.js",
    "revision": "59d12e7e55f07f1cfac355215caed9ea"
  },
  {
    "url": "assets/js/36.62ffe138.js",
    "revision": "3a533912f675e5760be829277e4496ef"
  },
  {
    "url": "assets/js/37.29aa1448.js",
    "revision": "2441574940f5ab1430373ef8298a79f2"
  },
  {
    "url": "assets/js/38.a1adb12e.js",
    "revision": "2007b93d78f281a977ac15bd60604da1"
  },
  {
    "url": "assets/js/39.095846d1.js",
    "revision": "be994b56a9e3f76b54dccec35cbc3696"
  },
  {
    "url": "assets/js/4.452533fa.js",
    "revision": "93ac2fb77053c3dbdb12c64778028fe8"
  },
  {
    "url": "assets/js/40.256939a4.js",
    "revision": "bce0f8966448154474cc6de82d285a71"
  },
  {
    "url": "assets/js/41.373d3eca.js",
    "revision": "065a530d11dbe6f802c59ef9ea8082f5"
  },
  {
    "url": "assets/js/42.5992c2c5.js",
    "revision": "a35eabee80fe3231eb31e335e7af8dc6"
  },
  {
    "url": "assets/js/43.fbd823f9.js",
    "revision": "aaba8a8cd962e3a9e4b8c4076f6c4170"
  },
  {
    "url": "assets/js/44.2fff2792.js",
    "revision": "b7eedcdc4f1b78db9e786da1f0586f35"
  },
  {
    "url": "assets/js/45.468001d5.js",
    "revision": "a8a9fb845308e293996156f0c4ccae49"
  },
  {
    "url": "assets/js/46.ca645f69.js",
    "revision": "79ef0cc8cb65b3a1d016e8b9a30bcb68"
  },
  {
    "url": "assets/js/47.3be53927.js",
    "revision": "210ce1dfbd3858df4bcbf221fdb86be0"
  },
  {
    "url": "assets/js/48.c32b1459.js",
    "revision": "a28310d748af150ee4d39444d5c0c6fa"
  },
  {
    "url": "assets/js/49.519d687d.js",
    "revision": "6cdf8c509781240fcb875d45a9e6977d"
  },
  {
    "url": "assets/js/5.1fdaa1a9.js",
    "revision": "b7e8edda8681460ab6d282a7d4e8dc45"
  },
  {
    "url": "assets/js/50.11bc63d2.js",
    "revision": "cd6552b7d4affc319950987f93962a18"
  },
  {
    "url": "assets/js/51.ac4be5f5.js",
    "revision": "3beb9e8940ed1264a99600c3c5b04b17"
  },
  {
    "url": "assets/js/52.84d067e5.js",
    "revision": "374f97ca438ad864b644c9b4b2b5cc4a"
  },
  {
    "url": "assets/js/53.291f8c6a.js",
    "revision": "ed51868bf6c2785fac658dbf10ec8eb4"
  },
  {
    "url": "assets/js/54.1738f437.js",
    "revision": "7acc6a79b2cd29cd783f4a0001510cd0"
  },
  {
    "url": "assets/js/55.3d317c45.js",
    "revision": "3ab2aa627adb21a9f0ff399a93adae42"
  },
  {
    "url": "assets/js/56.118ca45a.js",
    "revision": "50faaaa479955ec8043371e865ac7b52"
  },
  {
    "url": "assets/js/57.34832709.js",
    "revision": "220efa1ac5aaec975f0c8136215ccd11"
  },
  {
    "url": "assets/js/58.8185cb60.js",
    "revision": "e9e07ba58400728a5368ba1a011881c5"
  },
  {
    "url": "assets/js/59.b1de71e9.js",
    "revision": "aa645cfec842435d13f3b82984e77ea1"
  },
  {
    "url": "assets/js/6.91a5261f.js",
    "revision": "83eb226c1e634f37d73011e5a71f0b1a"
  },
  {
    "url": "assets/js/60.c0824c33.js",
    "revision": "2fa6f90bce94c9e66703faea0bbda289"
  },
  {
    "url": "assets/js/61.9756305e.js",
    "revision": "171f4567ebdb4d60f0e0d5b6858c8342"
  },
  {
    "url": "assets/js/62.1bc2a54c.js",
    "revision": "9178ad982856fc6f5603c2571baf8a45"
  },
  {
    "url": "assets/js/63.034c64d0.js",
    "revision": "06d4cd5306931969874ef2d8115adb74"
  },
  {
    "url": "assets/js/64.2b57c1a3.js",
    "revision": "fd8a548c405e6e6d0ec327b681f5d212"
  },
  {
    "url": "assets/js/65.4697637a.js",
    "revision": "7cce872fd7e1b076fd49df6b3cb46043"
  },
  {
    "url": "assets/js/66.962f47cf.js",
    "revision": "1dec338d9680a37dfdbb0c68bc000034"
  },
  {
    "url": "assets/js/67.99f825aa.js",
    "revision": "07307c21473a7e5fb2deca12577c7b22"
  },
  {
    "url": "assets/js/68.7fe6400b.js",
    "revision": "47a62f4e41ca5d6feaa7c55580c6d228"
  },
  {
    "url": "assets/js/69.1b63ec1d.js",
    "revision": "7c597c1df199e1fe4d60d06eca8e5266"
  },
  {
    "url": "assets/js/7.07cb398a.js",
    "revision": "1532ebb6e7b848b70a7aef212adf8cdc"
  },
  {
    "url": "assets/js/70.78b0d2dd.js",
    "revision": "3734bc3d04f4babc1e9931e31de2cde3"
  },
  {
    "url": "assets/js/71.61177b51.js",
    "revision": "f5e332f74410fda6a2bbd1c4d12189a6"
  },
  {
    "url": "assets/js/72.c17ca823.js",
    "revision": "228c56446fb00e6ab65e4640ddf6ad9a"
  },
  {
    "url": "assets/js/73.4c29e688.js",
    "revision": "f70082b413af9eeab9deefe69444f82b"
  },
  {
    "url": "assets/js/74.88e9be90.js",
    "revision": "40d3dfd9540ac2eb27571f71f86710e7"
  },
  {
    "url": "assets/js/75.d8fcd24c.js",
    "revision": "ef4f796e2939f9dca2ccf1fae28b8f33"
  },
  {
    "url": "assets/js/76.f988a2ff.js",
    "revision": "ec3f4dc8b0d0fef8c5f6bb1558f818f3"
  },
  {
    "url": "assets/js/77.32127f01.js",
    "revision": "04e6b32a01a18018e940b8899bb96b78"
  },
  {
    "url": "assets/js/78.5bceb3e5.js",
    "revision": "45d522e6dd6d90a9d45a93bcc1eefb41"
  },
  {
    "url": "assets/js/79.84b330fa.js",
    "revision": "793d235f9574a7d08a1b8648355220ca"
  },
  {
    "url": "assets/js/8.d75638d3.js",
    "revision": "135955e29ff279565f95c68785752b66"
  },
  {
    "url": "assets/js/80.8888d32f.js",
    "revision": "aea1d5c219f3f82ca80e13c00147ae57"
  },
  {
    "url": "assets/js/81.1b2dc056.js",
    "revision": "f7c8ac4161fdad66220635d1295c9bc4"
  },
  {
    "url": "assets/js/82.9c695048.js",
    "revision": "5e0916b414ca15f18e63aed2352449ac"
  },
  {
    "url": "assets/js/83.45ca7a6b.js",
    "revision": "2f02f2e36088164ff910a3000a20122c"
  },
  {
    "url": "assets/js/84.6cd0ea48.js",
    "revision": "7d7cbd89017e707b5732c90bf8afdc3b"
  },
  {
    "url": "assets/js/85.1bec7d2d.js",
    "revision": "562f37bcaf131dcf3e6a66a8d7106643"
  },
  {
    "url": "assets/js/86.de6e88a3.js",
    "revision": "0c8c55cbb15e0ce8fabb28ecdce56db1"
  },
  {
    "url": "assets/js/87.d32ad764.js",
    "revision": "57bd34d90a36a48d9edf907b2025b9d9"
  },
  {
    "url": "assets/js/88.bad70549.js",
    "revision": "86ce90a04921597bded0b56d56374649"
  },
  {
    "url": "assets/js/89.1dbc099e.js",
    "revision": "63343eacb7ba72263836b39f328cde34"
  },
  {
    "url": "assets/js/9.91c9e560.js",
    "revision": "a16fc0da736c957bd74bd17aa1bd3c13"
  },
  {
    "url": "assets/js/90.2d2953c5.js",
    "revision": "4304a87b9f38237e7918748a8e64178e"
  },
  {
    "url": "assets/js/91.4a7c8956.js",
    "revision": "ca7cccaa58eb311b0831952091c2a0cc"
  },
  {
    "url": "assets/js/92.d724ab44.js",
    "revision": "546401c6b557b69768ec76188d3ee857"
  },
  {
    "url": "assets/js/93.8cd71e1f.js",
    "revision": "4e605c9b23ddbc03fdde01c6da2b63ee"
  },
  {
    "url": "assets/js/94.238b7ed0.js",
    "revision": "6b1acb5e87dfa79c6ac53896280a9fa1"
  },
  {
    "url": "assets/js/95.00ee92bf.js",
    "revision": "022900e6ddde04c4e6a7bce7422bd0f2"
  },
  {
    "url": "assets/js/96.8f225dab.js",
    "revision": "f9c4afaa8500129852f2bc5e4a79e752"
  },
  {
    "url": "assets/js/97.ce2876a5.js",
    "revision": "8420542d24454041709d5c95a31df605"
  },
  {
    "url": "assets/js/98.a5eb651c.js",
    "revision": "fb9c3c42d3dd14cd5ab59fef3337070b"
  },
  {
    "url": "assets/js/99.002c03d5.js",
    "revision": "2094fd5cfd1886957669522467713e9a"
  },
  {
    "url": "assets/js/app.972804bf.js",
    "revision": "4ecc5215fd6a3966a924b130a88acedc"
  },
  {
    "url": "common/architecture.html",
    "revision": "0b725054db5cdf9ef3ffdec505937b36"
  },
  {
    "url": "common/crawl.html",
    "revision": "7f39bf2154476d1d9e4113e5f825fc0d"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "943a0d81c9d477cf912a8fe300e9d2e8"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "a041afce1c96efa025f78222c085edbc"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "07cab82a02458ab816af8a768b9ab6ed"
  },
  {
    "url": "common/index.html",
    "revision": "0bfc1081f47b4f211032e4d5ad2cdeea"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "42a0f22815b5ec997f54cd08b1928ac7"
  },
  {
    "url": "common/realtime.html",
    "revision": "f8cef1523741f9326ff9d9fc55b2028e"
  },
  {
    "url": "common/refactor.html",
    "revision": "9115971bb81d9bc2e3235126e5fbdb1b"
  },
  {
    "url": "common/seo.html",
    "revision": "660cbc6680ce20af0a319d95612e122e"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "020804f6587188471ac5e343b57009b4"
  },
  {
    "url": "css/tricks.html",
    "revision": "f052670bdca24c80d62b632b5fd9b650"
  },
  {
    "url": "db/architect.html",
    "revision": "85935ac555bb294d26ab753dddce4744"
  },
  {
    "url": "db/cassandra.html",
    "revision": "1079897ed664b0863002fc38cb662a2c"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "f8361f80e09ee8e70c9c6296195c3af9"
  },
  {
    "url": "db/optimize.html",
    "revision": "04404d83b22455db670304663f54a026"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "92d63571bfa8694b4c640a09084d5c82"
  },
  {
    "url": "db/sql_nosql.html",
    "revision": "80ecd039229297021126ef1581ec3dd1"
  },
  {
    "url": "index.html",
    "revision": "b1c57099e1a20aa78a142c948c8fc7fe"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "a8f372d0cec6cb4fb36681ec389da9d8"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "f18903841ded1761382f75def53d76dc"
  },
  {
    "url": "javascript/closure.html",
    "revision": "d8e4b7a7287c74cdd5a9c886e25171b6"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "dfc441209b403c843805c66e68af0b40"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "299b00f64d80cfc94c2038b4f10c7dc8"
  },
  {
    "url": "javascript/react.html",
    "revision": "6fc7aa26e9345e957ffada3c92406fcf"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "56a189f799f73c33cd3b2804d04e270d"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "8c15339ed741a6df35e7eeaaa4efbdd0"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "99f6d24fadf3f36c55eced5a5908a216"
  },
  {
    "url": "node/env.html",
    "revision": "e6cd918a40ea7e205310930328a2795b"
  },
  {
    "url": "node/index.html",
    "revision": "f4679e282746039e3d257c883da4e2fc"
  },
  {
    "url": "node/n.html",
    "revision": "2c0a0872f5d29a6c71df38057d8b8d5c"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "d0829a0882fde36a6b037d0da352630d"
  },
  {
    "url": "node/npm.html",
    "revision": "c5682264813fe9af9af95d8e5ff31a18"
  },
  {
    "url": "node/sequelize.html",
    "revision": "fc36136af564c1b9915fd6e51a8d67ae"
  },
  {
    "url": "php/composer.html",
    "revision": "0e4ea7413851b8c3b395616a1a026355"
  },
  {
    "url": "php/laravel.html",
    "revision": "5814b53b9dd8ea17044c93198904f206"
  },
  {
    "url": "php/magic.html",
    "revision": "465eeff8d88e9ba2152af834c3c114ae"
  },
  {
    "url": "php/notes.html",
    "revision": "bda5228e9e948fc24062166725c09646"
  },
  {
    "url": "php/oop.html",
    "revision": "dbdaa3a706fc9d255b5576320f0689c7"
  },
  {
    "url": "php/php7.html",
    "revision": "a8902301ef87703320d4a8aea2706d22"
  },
  {
    "url": "php/reflection.html",
    "revision": "e4cdc984cc7f9bc0891beb98a27cc15d"
  },
  {
    "url": "php/tricks.html",
    "revision": "4bf1b8c421e468bde3cd18a4519ff31a"
  },
  {
    "url": "php/wordpress.html",
    "revision": "0552dd489cc0ecc862bb440fb5ed83ab"
  },
  {
    "url": "quotes.html",
    "revision": "1a2f503bd12d810883cdc11c44a4889c"
  },
  {
    "url": "refactor/notes.html",
    "revision": "4d1c998cab3531cf0effebcf31250fa3"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "466c6b6d22d0bc827499d7b9aa39d757"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "ca39d0d88c039bb50bedd5b239b5db67"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "3ef1a7f1b8f87f56324e9a526f09bbad"
  },
  {
    "url": "snippets/regex.html",
    "revision": "44271e215fd3c2336ba43caf399ecf8a"
  },
  {
    "url": "terms/architecture.html",
    "revision": "31c2762d471d475c802a7138b61bf9a5"
  },
  {
    "url": "terms/ddd.html",
    "revision": "050221afc8f810bd47d962c1d17e3b9f"
  },
  {
    "url": "terms/javascript.html",
    "revision": "ab44155c5399104e866ca1f9e99f0915"
  },
  {
    "url": "terms/oop.html",
    "revision": "2ebb6ae4c5a480bbadd848fc786e08ac"
  },
  {
    "url": "terms/testing.html",
    "revision": "5486f9840d26a82cbd33a18e633dee5b"
  },
  {
    "url": "tools/chrome.html",
    "revision": "d7b1b26df406c4ac0861d4a67b63b04a"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "97d0a1ad5e3e77a67bc8919fe3cde97a"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "8825894d40384ec7b9cec517db303552"
  },
  {
    "url": "tools/redis.html",
    "revision": "b0fb5f65902d316920a9bb3bb9fcf8db"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "a5c1f083233e658d6c4e87d2dda9a63d"
  },
  {
    "url": "tools/vscode.html",
    "revision": "1be87e5a61778932e3880bb5481ec2b0"
  },
  {
    "url": "tricks/compare.html",
    "revision": "03dc2b11db7c3a2ac73d62b2a52f68b3"
  },
  {
    "url": "tricks/git.html",
    "revision": "19305708b0f6dcf310753da39e2ded43"
  },
  {
    "url": "tricks/linux.html",
    "revision": "e731d2978a983082d53f1904553a1ead"
  },
  {
    "url": "tricks/mac.html",
    "revision": "5e488f72d3a00a133cd54b12d94e0d96"
  },
  {
    "url": "tricks/misc.html",
    "revision": "73a89d6ac8aabbe3600eab42e74c959c"
  },
  {
    "url": "vue/communication.html",
    "revision": "789aa86e52801fd8a9854f517c81f631"
  },
  {
    "url": "vue/events.html",
    "revision": "f03c89d60e61c9ebc30937cd878922a2"
  },
  {
    "url": "vue/references.html",
    "revision": "898f77de74b0b5852bd8bf8764734ec6"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "71b46c9a3d4049c4f13c17feee26ba6b"
  },
  {
    "url": "vue/tricks.html",
    "revision": "e0ec8d80b9847f343d7683242682c72e"
  },
  {
    "url": "vue/vue_react.html",
    "revision": "be221b46df8db7afc045762c14ee320e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
