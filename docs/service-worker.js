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
    "revision": "21b6d7ae050a3f03b2517ba1db10eb34"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "846b5fec12e19c4accf8e3f77bb0cf87"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "35d3bb1d27db68ebaef7d52f8bfe6064"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "6ee54491304792caf88d5c32ace9e4ac"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "ec9a9357ba809b4e37dcd3162b03fe5c"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "2b9e58d9d21a2b570113ee7bb77881c9"
  },
  {
    "url": "algorithm/string.html",
    "revision": "e5f5424a810cda84c8bcaa4c333d012a"
  },
  {
    "url": "architect/authenication.html",
    "revision": "12074925262d3b809a338121610a7499"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "8f57919d3909a3039a63fe0ee1c0351b"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "31b5af7288743d9309eb9e8cc69daae3"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "58f4c9bc71e8d7ba6b8f872e68ad9def"
  },
  {
    "url": "architect/ddd.html",
    "revision": "a480560c10469f501b80fa35bd997ecd"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "7024403a4c04e3ca2e92e52a844f8cc0"
  },
  {
    "url": "architect/ebi.html",
    "revision": "b837d81aefb440066b3cdea284a9e1c2"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "eed9014645bb632bf2909a9845c0d940"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "8ed19f74f5bd0f34769ce6abcf323a63"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "67a217356f50beebd1a936a3e3e756b2"
  },
  {
    "url": "architect/index.html",
    "revision": "983eaf627455e7d217a2cde60e0b1058"
  },
  {
    "url": "architect/notes.html",
    "revision": "b801f75e847167213ef5ed18e9f52128"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "893ab0dfc93ba7d1b8e09e0cca6f8a39"
  },
  {
    "url": "architect/refs.html",
    "revision": "2fb9bb99e7454ed55c2e88810d50908e"
  },
  {
    "url": "architect/soa.html",
    "revision": "bdb95d47d4be16f830481272a5c6c01d"
  },
  {
    "url": "architect/spa.html",
    "revision": "0f57703769caf50873c26dec5cc0601b"
  },
  {
    "url": "architect/use-case.html",
    "revision": "b5a269ffca4cdd5a01e92372338253e6"
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
    "url": "assets/js/100.1eb63b74.js",
    "revision": "0ca2efeaef2cd98deb0d42d358096a74"
  },
  {
    "url": "assets/js/101.b7cb9502.js",
    "revision": "b62c2843d5514fedfad16f029a51af6f"
  },
  {
    "url": "assets/js/102.b8967a90.js",
    "revision": "0c1820f95439f0d875cd178a67b7dc3a"
  },
  {
    "url": "assets/js/103.045fead5.js",
    "revision": "6b1bbaa7262e9b0df69a9eb75a176c6b"
  },
  {
    "url": "assets/js/104.9c39c279.js",
    "revision": "2937062406e0157de8783804f3aa49e8"
  },
  {
    "url": "assets/js/105.53d6822b.js",
    "revision": "b2c35f2efe88ac27a73bf25f134d997d"
  },
  {
    "url": "assets/js/106.9eea1338.js",
    "revision": "cf2ff536ea8aa7630b625d8cdd34d3b2"
  },
  {
    "url": "assets/js/107.e56f4051.js",
    "revision": "d1368438c8da4edb70c22089d9d21ae7"
  },
  {
    "url": "assets/js/108.80c320f6.js",
    "revision": "c90638c4fdb559893a2a7749b86882f0"
  },
  {
    "url": "assets/js/109.f6db63e8.js",
    "revision": "e9b49986b0b1ed2206df62d8d9d3ec22"
  },
  {
    "url": "assets/js/11.2d342bef.js",
    "revision": "7211ede34cb5202bb744a7b8674a2624"
  },
  {
    "url": "assets/js/110.d1f612ed.js",
    "revision": "01d628b2dabceb64f82facc097f5085f"
  },
  {
    "url": "assets/js/111.ece4c052.js",
    "revision": "162b8b916f5e5ac705c0135ab2b23079"
  },
  {
    "url": "assets/js/112.1dfbc78e.js",
    "revision": "a25b0a848f319aa0fd7b1b464f3d98d3"
  },
  {
    "url": "assets/js/113.7199cd6c.js",
    "revision": "09dc6ef69e57a48fff97ca1a4b019cc2"
  },
  {
    "url": "assets/js/114.6a84b717.js",
    "revision": "f26370a1b7b8838a8656eff5f8d49787"
  },
  {
    "url": "assets/js/115.b89d8178.js",
    "revision": "d934db2f9101cae243d5e1578350acb7"
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
    "url": "assets/js/14.feafe03a.js",
    "revision": "6e0f841f2a5cb33a7386edd64c9c2185"
  },
  {
    "url": "assets/js/15.e9754829.js",
    "revision": "92cd4301d490d6f5c669386ac2a164c4"
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
    "url": "assets/js/18.9452b9ea.js",
    "revision": "67e6828dcafec700731192bfe37d3827"
  },
  {
    "url": "assets/js/19.a3eb6761.js",
    "revision": "1339c99e416aceb83f86868c0693c0f4"
  },
  {
    "url": "assets/js/2.c7238a5d.js",
    "revision": "32b9484aac113e418abba4bc32e17808"
  },
  {
    "url": "assets/js/20.87999c66.js",
    "revision": "68acbd2c235b8a3394c4a7dbbd683368"
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
    "url": "assets/js/23.d1b9197c.js",
    "revision": "3b68dea05aa6fdce9f1d36786265cb1b"
  },
  {
    "url": "assets/js/24.5af42843.js",
    "revision": "ed36296cfcaebfea4304264915c5b8e7"
  },
  {
    "url": "assets/js/25.547606e0.js",
    "revision": "f5888b235a956caf57dbb80c428bf364"
  },
  {
    "url": "assets/js/26.780f86c8.js",
    "revision": "ef118ecae2670a3c3ccd7c74b273e3ff"
  },
  {
    "url": "assets/js/27.011bda17.js",
    "revision": "6e86cd72d255eb599b803f61f596d912"
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
    "url": "assets/js/3.462111af.js",
    "revision": "c12af414a9729f853a1aa798c3413282"
  },
  {
    "url": "assets/js/30.9da71c0a.js",
    "revision": "ea6c7a322f13995e585108fd7f3abc7c"
  },
  {
    "url": "assets/js/31.b9ded600.js",
    "revision": "c2f1395da022b89cf6de8b9e86b67a46"
  },
  {
    "url": "assets/js/32.073f2a57.js",
    "revision": "208a14eb62394ce8e77df4f7cedfc99d"
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
    "url": "assets/js/35.25ed0d4c.js",
    "revision": "b1a6cb2e99af45cafe39875f6cf6f385"
  },
  {
    "url": "assets/js/36.7d669b9f.js",
    "revision": "90e33c2924d1036e00635a578c34e499"
  },
  {
    "url": "assets/js/37.02f62479.js",
    "revision": "ca7165cc1289a4a4f98758c2044b679e"
  },
  {
    "url": "assets/js/38.f7d11481.js",
    "revision": "c4ab3da2ff8434b9ab230c3c54cb75a1"
  },
  {
    "url": "assets/js/39.5af96fee.js",
    "revision": "d18c7ce6702a41dd9d74e70d09a025a7"
  },
  {
    "url": "assets/js/4.197c7d9d.js",
    "revision": "e6b07e04ce7a5af975fb2a4f92199aa2"
  },
  {
    "url": "assets/js/40.50094787.js",
    "revision": "2039a5fb5b7086d4e21f5311cf656138"
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
    "url": "assets/js/43.46d53213.js",
    "revision": "167d589555501b0e09b5998da9073de2"
  },
  {
    "url": "assets/js/44.f2601328.js",
    "revision": "ece63c14c46596fb7399a710d24282ed"
  },
  {
    "url": "assets/js/45.c6ab8601.js",
    "revision": "0b8edb18c491f5928110d55ce6ecca5e"
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
    "url": "assets/js/49.5961e69d.js",
    "revision": "f83120afa49e24b79338dba0ac38587f"
  },
  {
    "url": "assets/js/5.d6b9a9b2.js",
    "revision": "b62ca144b35d270aea3c9e353a68a4f9"
  },
  {
    "url": "assets/js/50.536eb323.js",
    "revision": "05202a91d60813f4399f87c3cac5798a"
  },
  {
    "url": "assets/js/51.93ec1103.js",
    "revision": "bf81a1b24168619d622713809eba76f1"
  },
  {
    "url": "assets/js/52.e388c84a.js",
    "revision": "277b324c4b4ede12556e55094f9dd8fb"
  },
  {
    "url": "assets/js/53.a52b40ec.js",
    "revision": "d654f303da34b84ad33fea4b95a2b0de"
  },
  {
    "url": "assets/js/54.04d8be90.js",
    "revision": "ec13c42284921bae31d409cbdbe9bc21"
  },
  {
    "url": "assets/js/55.8ac1ebf6.js",
    "revision": "2499a5529ac8b4bb5f4e3a53d36d1034"
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
    "url": "assets/js/6.b3f6c0b3.js",
    "revision": "03438641541015de1378400d2e32ed8f"
  },
  {
    "url": "assets/js/60.232e2ae5.js",
    "revision": "5f427befb4ef483b3825c6d07e63c57c"
  },
  {
    "url": "assets/js/61.1a83622e.js",
    "revision": "71ec26bfa5db6150a638e5d533d00062"
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
    "url": "assets/js/64.9a3ce1f9.js",
    "revision": "6d509c367793f0099ff9aedca9f75ad3"
  },
  {
    "url": "assets/js/65.412f79c9.js",
    "revision": "99bd686691bd16f1f28d0535795ff23e"
  },
  {
    "url": "assets/js/66.44158512.js",
    "revision": "30de087f21fde8bae227cd255da36be4"
  },
  {
    "url": "assets/js/67.619f440a.js",
    "revision": "5625b6c15b5907a2b7cf695ac577eb99"
  },
  {
    "url": "assets/js/68.3d3ec500.js",
    "revision": "3b9ecdb74a4e32323e29a7cb2cc7dbea"
  },
  {
    "url": "assets/js/69.75387194.js",
    "revision": "c284ae411b9f3278ff15c0782e50be43"
  },
  {
    "url": "assets/js/7.01b97afd.js",
    "revision": "900710bf12ac7928d68a3b2f283f586e"
  },
  {
    "url": "assets/js/70.766b62a5.js",
    "revision": "a615ac49d6b07f6562319dbbf4150522"
  },
  {
    "url": "assets/js/71.20ef5ce7.js",
    "revision": "9341ff3dff3335f46221e21c1f4b4857"
  },
  {
    "url": "assets/js/72.420861a2.js",
    "revision": "e1abce31b3046e0460a4a216bd9ad080"
  },
  {
    "url": "assets/js/73.c3e4f1c4.js",
    "revision": "7b134d998aa18896806a486da0ff2f0f"
  },
  {
    "url": "assets/js/74.6a8a2ada.js",
    "revision": "830d146267403bd57045ea7b6a115033"
  },
  {
    "url": "assets/js/75.0e8e4c0c.js",
    "revision": "8c4360df4e37800b207f57823cc886f2"
  },
  {
    "url": "assets/js/76.601073b0.js",
    "revision": "7f2d7618d328fe63994f6ef5cda09f6f"
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
    "url": "assets/js/8.8443b70c.js",
    "revision": "2cdb7f3fd35b9d5b00a368dc9eda0b55"
  },
  {
    "url": "assets/js/80.a7133a4a.js",
    "revision": "b12874b649681a26c25c16db28e2fb71"
  },
  {
    "url": "assets/js/81.1b18f470.js",
    "revision": "43ff98fab1d7442255363f0b411097bf"
  },
  {
    "url": "assets/js/82.098c8ff7.js",
    "revision": "6505f4685e35be21d5bb9040287febec"
  },
  {
    "url": "assets/js/83.79a3239a.js",
    "revision": "2d592c6c5516f9a1ee37d8f6bf8a3166"
  },
  {
    "url": "assets/js/84.8d4fc786.js",
    "revision": "7981be9ccd9b1d0c05e3a2c1c85afc21"
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
    "url": "assets/js/88.f748cee7.js",
    "revision": "5acc4d2074556fab1b433855840b692b"
  },
  {
    "url": "assets/js/89.004a3457.js",
    "revision": "81ca59247e6113599aecc5ad786a602f"
  },
  {
    "url": "assets/js/9.f71ff884.js",
    "revision": "a783f4696aa72bfa5c9bf3e52236b9da"
  },
  {
    "url": "assets/js/90.4c3cd0fb.js",
    "revision": "3222785e43c6f406015aee1ad5ac0227"
  },
  {
    "url": "assets/js/91.c663b57b.js",
    "revision": "4c0333d1af057e3b60bd4fad93481610"
  },
  {
    "url": "assets/js/92.448c1d86.js",
    "revision": "fbe4aa57225b7b2af30d245ec0819916"
  },
  {
    "url": "assets/js/93.320e4589.js",
    "revision": "b47fe7bf49fb9e922de45c3c076a4300"
  },
  {
    "url": "assets/js/94.ee0f7470.js",
    "revision": "14bc949818cbb7d81245b6b980b4ad78"
  },
  {
    "url": "assets/js/95.5ea2ea6f.js",
    "revision": "6c25f06e2165662b337965ff1fee1855"
  },
  {
    "url": "assets/js/96.16af6300.js",
    "revision": "8a4d0dd3036e5fbc6a7c18a68f31259a"
  },
  {
    "url": "assets/js/97.99d06c66.js",
    "revision": "05664d09877f586cd53b247e5d722761"
  },
  {
    "url": "assets/js/98.fb940aee.js",
    "revision": "06801e812a4e8384d22ae08ea3ea4563"
  },
  {
    "url": "assets/js/99.402e29a0.js",
    "revision": "d7c32871d7d2e64295cd4eb9b74ca752"
  },
  {
    "url": "assets/js/app.959a4aab.js",
    "revision": "83cd28624f88f33fde7630386f989eb6"
  },
  {
    "url": "common/architecture.html",
    "revision": "71061e31fca35eaea260c2438ad4abf3"
  },
  {
    "url": "common/crawl.html",
    "revision": "1fb296351191ffa8e776ac7952489c4b"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "4a45a0ac9b73530dd964a867fc3b9322"
  },
  {
    "url": "common/document.html",
    "revision": "22f2827a3f5f215b4e8f36bb67bfd6b6"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "3e7630f087c484444acc6468fff996fa"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "a70c65c86023d85210ae0c3e03c22892"
  },
  {
    "url": "common/index.html",
    "revision": "dbb46077e9cda9c3e2b40c89369c3e90"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "ad9f94b7314f16e26b17c3e2852a89bc"
  },
  {
    "url": "common/realtime.html",
    "revision": "6e59f372dff129c7b6bfdf8b1a627c40"
  },
  {
    "url": "common/refactor.html",
    "revision": "a1ae8a54141d72beb1924ff8c78cd266"
  },
  {
    "url": "common/seo.html",
    "revision": "0b5e4c39fb8fd5ccc61278a200c5002d"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "ae7e5e4aa4b9f86326944162cf1d1458"
  },
  {
    "url": "css/tricks.html",
    "revision": "94180459e02bdc554c590bf4ca5b5fc2"
  },
  {
    "url": "db/architect.html",
    "revision": "68521bde684425febeb51300a44ed587"
  },
  {
    "url": "db/cassandra.html",
    "revision": "c18f1285ac55885df0dedabed46ea998"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "e2bf20c9c56e474cd66f444651827c18"
  },
  {
    "url": "db/optimize.html",
    "revision": "415c97e15c9897d4d828fc2a794c58d2"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "881e0f2e285b129df2a3f59559358503"
  },
  {
    "url": "db/sql_nosql.html",
    "revision": "ad568d7dc0a4c917cb831925df575b23"
  },
  {
    "url": "index.html",
    "revision": "16d9f60125fac4e3111a4eed2af065de"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "319ec055725f4960f2775e663cdfcf07"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "df034179b015782e524360e0bea3db21"
  },
  {
    "url": "javascript/closure.html",
    "revision": "9a1d80543ce9a0b9114cfdd1634eb87a"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "40f586749334ca886828b5f300e3771e"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "54c9c439e463fdbddd2bd4d09bc96a89"
  },
  {
    "url": "javascript/react.html",
    "revision": "b791a33d991e488c2c18e9e48c7aecab"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "2ca498a75ac9391dbce137b5c326848f"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "e112b9d6f15d912fed20c93bc4b236fc"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "b4e3352d46f496b119c8664dd3675bff"
  },
  {
    "url": "node/env.html",
    "revision": "75ba27a6ee153d78227119e929939a09"
  },
  {
    "url": "node/index.html",
    "revision": "b756d24e468f0642916b5146f09f35ca"
  },
  {
    "url": "node/n.html",
    "revision": "2632e2b8562c26783abe44ddfb59ccfe"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "1f495a9f43bd97a38ee39056a7fd80c8"
  },
  {
    "url": "node/npm.html",
    "revision": "a8c0bb27c3b9b290937c123cd01a249c"
  },
  {
    "url": "node/sequelize.html",
    "revision": "140ad8fbdc2bcfcb8cc7c72840b33e8c"
  },
  {
    "url": "php/composer.html",
    "revision": "450053aea9033a109b63534dfd4a7b1a"
  },
  {
    "url": "php/crunz.html",
    "revision": "cde84d2b7f2b6612e8f85e51f899e2a0"
  },
  {
    "url": "php/laravel.html",
    "revision": "c5f909ad8ea9f67a5e4af147af0f3e52"
  },
  {
    "url": "php/magic.html",
    "revision": "39b74969fc0822da2076af33967574d5"
  },
  {
    "url": "php/notes.html",
    "revision": "b17dacd06a871ef22728b70c70a57ed6"
  },
  {
    "url": "php/oop.html",
    "revision": "261b06888082411b6046286264f9710c"
  },
  {
    "url": "php/php7.html",
    "revision": "47d97d8f93376b042085c0ef6b8fb709"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "5741630af016c99d624fc7fc3f6dbd2d"
  },
  {
    "url": "php/reflection.html",
    "revision": "9b9c75e3392348d4437c82c6ddd9c02b"
  },
  {
    "url": "php/tricks.html",
    "revision": "80fcf9786155eb25e49e58c6533e3970"
  },
  {
    "url": "php/wordpress.html",
    "revision": "e7ee86b8aa2451b59fc754494b551814"
  },
  {
    "url": "quotes.html",
    "revision": "f93495e9d5725c55b7c495ef1beca4ae"
  },
  {
    "url": "refactor/notes.html",
    "revision": "6b7b3a911a21902c7877045c2dd291f1"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "5cb5354048546312c017adaa445f1772"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "388a0d9e84f775c37429e4464755172d"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "40f5525097cd8cd53f145faccd5ed013"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "9c04bddab615f2f7ce41cbb46db345e7"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "7d975e082b6f8c6605771746a51e0ef5"
  },
  {
    "url": "snippets/patterns.html",
    "revision": "71cec63e8fe90ab3113a5a75226dcc35"
  },
  {
    "url": "snippets/regex.html",
    "revision": "578abeaf5c2798ef591f6053d53e43e8"
  },
  {
    "url": "terms/architecture.html",
    "revision": "a1d53ec102b6a3c8a42e4c0c5ae9836d"
  },
  {
    "url": "terms/ddd.html",
    "revision": "408e1b7ff3495308d8a0745c27509317"
  },
  {
    "url": "terms/javascript.html",
    "revision": "45691f736791f786906a8c9b6eb3ef34"
  },
  {
    "url": "terms/oop.html",
    "revision": "6663e10cc9f2117cc2d67b041e591a6f"
  },
  {
    "url": "terms/rules.html",
    "revision": "4e30a104e53d6e06043ac0b846e1c48d"
  },
  {
    "url": "terms/testing.html",
    "revision": "8456c841d5e4c3e007b5b0a3903fbb6b"
  },
  {
    "url": "tools/chrome.html",
    "revision": "746c58405ca77654f29b2e4443db51e0"
  },
  {
    "url": "tools/docker.html",
    "revision": "bee4596cd335b04fd86dc9152305a249"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "8e7f4c28d45c15be770352caff4b4805"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "7907c1df90e9b8dcf5e59920a78e4b8e"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "49691182505dfaceedb6d962dca8fd30"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "ad486d54ec874bb041443473350f3311"
  },
  {
    "url": "tools/redis.html",
    "revision": "a1de2179ff77b6aa9b01c2584ea1f5c8"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "1338b8b15826787ef1991a97f806d4a6"
  },
  {
    "url": "tools/vscode.html",
    "revision": "373e658276ac4b8217dd8d95a6314976"
  },
  {
    "url": "tricks/compare.html",
    "revision": "20b43a2f53206352b8022a5d59a8933d"
  },
  {
    "url": "tricks/git.html",
    "revision": "f537b166d314ed7a96160b5d5d0cf483"
  },
  {
    "url": "tricks/linux.html",
    "revision": "901cc44dbdffad97eba4a44ca8e8ff1e"
  },
  {
    "url": "tricks/mac.html",
    "revision": "36519db9b43af2edd58b3df9e1f124e1"
  },
  {
    "url": "tricks/misc.html",
    "revision": "e070eec107baf21901a7ddb927781c80"
  },
  {
    "url": "tricks/setup.html",
    "revision": "6b70dbb1d0ed820c1937d21efb21f70d"
  },
  {
    "url": "vue/communication.html",
    "revision": "5868d9299d79e70ecc27a66a1b4a38aa"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "1db60a2daa7f38deac72cbafe2593e51"
  },
  {
    "url": "vue/events.html",
    "revision": "d3e601768b3099fa76f67b53550f0f23"
  },
  {
    "url": "vue/references.html",
    "revision": "3a504f5ff3e3b9968b849fef89b781fa"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "c3b83f316141166ba7b94b0e556e6106"
  },
  {
    "url": "vue/tricks.html",
    "revision": "45e903355d2eb7f1f95577e7ccbf3625"
  },
  {
    "url": "vue/vue_react.html",
    "revision": "5d7fa4882294179cc61bd5a8c6511d4a"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "e9aca9830ef71f6eef41fec896d0f74c"
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
