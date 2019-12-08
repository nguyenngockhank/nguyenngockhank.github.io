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
    "revision": "e43120fd8a89265edd165a9082203c5c"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "e910045491fe0fe5d9b965062011e40f"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "a5edbe1781c561b2780978acfd86b1b5"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "56cb20821f88a9dfe79b10d21a001645"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "34bcf8111fe8448c2c2f2b4792e9459c"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "47e64b3a737769a0a6c7fe6abe3e1730"
  },
  {
    "url": "algorithm/string.html",
    "revision": "9405af6c584e85837cb3cf50a7acacbc"
  },
  {
    "url": "architect/authenication.html",
    "revision": "c6dfc905daf49fcc5f85b979b090c16c"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "437b03696f9ef5b0d3c24decc8240eee"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "7829beccdb44481213006637669efc2c"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "ef306267158f336fb15c402a3ffb5e25"
  },
  {
    "url": "architect/ddd.html",
    "revision": "239f593eb1a0234951a1deb0309d2c12"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "61197a5650bf7450097f36c3a77fa33f"
  },
  {
    "url": "architect/ebi.html",
    "revision": "6d22c588439591e6b1ee87cbf465601a"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "7e5c9631425de899b7c3c076070ff6fd"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "90442bc81748db6acfb97eda6847ba33"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "bd45fbd1f2be798b9bdf2e71bde236db"
  },
  {
    "url": "architect/index.html",
    "revision": "c79845115105ca22dd33c667da429c7e"
  },
  {
    "url": "architect/notes.html",
    "revision": "7a620360958e65b6cab3cc0532b8145b"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "d162d23faee6a4f4678e91d785404be2"
  },
  {
    "url": "architect/refs.html",
    "revision": "69ceffcf4f1d55caf1b7d283198deafc"
  },
  {
    "url": "architect/soa.html",
    "revision": "dc20fa8941208f59b80a34e083162b68"
  },
  {
    "url": "architect/spa.html",
    "revision": "5e1893877a5a87ce357bdd51a4404240"
  },
  {
    "url": "architect/use-case.html",
    "revision": "422ca56a16a44315ddd22dce1c91a6f8"
  },
  {
    "url": "assets/css/0.styles.07fbd547.css",
    "revision": "2c8e6c910651700361b526db182a15e9"
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
    "url": "assets/js/10.78b142e9.js",
    "revision": "88b1a9a9cfca9972b883c2a799c49723"
  },
  {
    "url": "assets/js/100.c21509a4.js",
    "revision": "b2a8d526826a5ea758b1ffe317a348d3"
  },
  {
    "url": "assets/js/101.f08c60e3.js",
    "revision": "84355c7b5ab39e3f252793a5d2416e3c"
  },
  {
    "url": "assets/js/102.7ef1f2f6.js",
    "revision": "c8eb82635db4f94c44c34920d8900bd5"
  },
  {
    "url": "assets/js/11.c940814c.js",
    "revision": "937fe1c91ed792c152eb893c21d2d57c"
  },
  {
    "url": "assets/js/12.edb1ec61.js",
    "revision": "9f0c8127aeb8590e5a9bdf2fddae7c84"
  },
  {
    "url": "assets/js/13.96202e48.js",
    "revision": "7008d26f8ecbf1a206e92f0c880dc10a"
  },
  {
    "url": "assets/js/14.b6b57c09.js",
    "revision": "305d4396cc19247a088f76130078d06a"
  },
  {
    "url": "assets/js/15.4bef9ce0.js",
    "revision": "67b9f0f2273126c6ea0035d5790e591e"
  },
  {
    "url": "assets/js/16.f8adef25.js",
    "revision": "43b44a39f8409e8d4d5bf7e6ddbce1e8"
  },
  {
    "url": "assets/js/17.32acf503.js",
    "revision": "f383babac876f3e7d10f18cac6bc7427"
  },
  {
    "url": "assets/js/18.d1910122.js",
    "revision": "b1b098812ea075f9a6b4ea5948e12108"
  },
  {
    "url": "assets/js/19.104e272f.js",
    "revision": "b6ee2706db14ffd835e2207fbc3c70e9"
  },
  {
    "url": "assets/js/2.5e38339e.js",
    "revision": "c7b7d404cb99101f84a59af13f7f7e8e"
  },
  {
    "url": "assets/js/20.3159431d.js",
    "revision": "e9e026a9b670793d18d25ffb893c56fc"
  },
  {
    "url": "assets/js/21.42679cfa.js",
    "revision": "327fa50c3b8e9c1384aa5e3ac2b7cad0"
  },
  {
    "url": "assets/js/22.d0d6e3b4.js",
    "revision": "07e90fffb4c2255243317557ff391db9"
  },
  {
    "url": "assets/js/23.7cf082ad.js",
    "revision": "56117bf8a2a02bedb45f42bd8ec9d07f"
  },
  {
    "url": "assets/js/24.56e9123b.js",
    "revision": "37aae5b08b13c84a1c6550c15f73372e"
  },
  {
    "url": "assets/js/25.b681ae45.js",
    "revision": "18db6324e865318d91a074516a13b9f8"
  },
  {
    "url": "assets/js/26.c9d654b9.js",
    "revision": "0e121d27443010e2e5861d21ef51479d"
  },
  {
    "url": "assets/js/27.c0145895.js",
    "revision": "cc137632152f3986a35bc35a11252d9c"
  },
  {
    "url": "assets/js/28.ce986324.js",
    "revision": "d1f328d5c956e8f02918c2034cbe68bb"
  },
  {
    "url": "assets/js/29.92607995.js",
    "revision": "f5896f435009cab2c7e0c7bd991b86bf"
  },
  {
    "url": "assets/js/3.a97092c3.js",
    "revision": "ea87fdf7412e93f708e0d03cfc8d9fb8"
  },
  {
    "url": "assets/js/30.ca4c51f3.js",
    "revision": "53be58f110b834fe22286087500582ce"
  },
  {
    "url": "assets/js/31.4b71374a.js",
    "revision": "71a78c821253fb4024a071f39a66c21c"
  },
  {
    "url": "assets/js/32.cfafccde.js",
    "revision": "780453d0ea8451514478cc0c9102fa30"
  },
  {
    "url": "assets/js/33.926aa9f5.js",
    "revision": "82ba85819ee3a3581109edb66c9fcc91"
  },
  {
    "url": "assets/js/34.75b37cce.js",
    "revision": "84f51f1d6fb63eeb7cbfe4e4a7243e23"
  },
  {
    "url": "assets/js/35.f246a762.js",
    "revision": "8094bee21e4fe4a173b86b9ec873573e"
  },
  {
    "url": "assets/js/36.a98b1b23.js",
    "revision": "6100eabce18010c21effaf067af4a895"
  },
  {
    "url": "assets/js/37.9ae0395a.js",
    "revision": "60c1913d4883ef20fd039f9038ac811a"
  },
  {
    "url": "assets/js/38.e7d0ab5e.js",
    "revision": "e817749a64b82f7720191654faac4e16"
  },
  {
    "url": "assets/js/39.00cd2595.js",
    "revision": "d4337024d9ad70595de9fcdf2f0d6e3e"
  },
  {
    "url": "assets/js/4.73d25469.js",
    "revision": "672d2c9e613223dde209d09ab8dc978e"
  },
  {
    "url": "assets/js/40.4c4607a4.js",
    "revision": "6848980b675ca1b46378643453389741"
  },
  {
    "url": "assets/js/41.80f15004.js",
    "revision": "7aae372cff9d6f967a250cb9828ae808"
  },
  {
    "url": "assets/js/42.99484fe5.js",
    "revision": "e224fa62c7339e1471156efbc0e0dd8e"
  },
  {
    "url": "assets/js/43.fd526a68.js",
    "revision": "df546496ea908d5e096b73426e6e2a20"
  },
  {
    "url": "assets/js/44.263617c7.js",
    "revision": "802f2afc201bec543111d6fe7d138bf5"
  },
  {
    "url": "assets/js/45.72a82efd.js",
    "revision": "113f2220c8128c3595eabf6a99235250"
  },
  {
    "url": "assets/js/46.e8f57204.js",
    "revision": "da34c2abef190164ed963c121e133287"
  },
  {
    "url": "assets/js/47.4383884b.js",
    "revision": "edc9e84be6630b30180443dd09463858"
  },
  {
    "url": "assets/js/48.39307c11.js",
    "revision": "cad1367b0af05d7f6247cd03653764b8"
  },
  {
    "url": "assets/js/49.32a73917.js",
    "revision": "4a554149c7ec3c513e63ac48e6dac0a8"
  },
  {
    "url": "assets/js/5.1a3c071d.js",
    "revision": "f72bca5b471ac5c2c46a254e0d770616"
  },
  {
    "url": "assets/js/50.5cff204f.js",
    "revision": "572b8d60154d3b53ff4e8c9ab9d3c183"
  },
  {
    "url": "assets/js/51.fb2ff2dd.js",
    "revision": "9d10a7108d920d8c3a908ac89f0c93e2"
  },
  {
    "url": "assets/js/52.4741e756.js",
    "revision": "cef044f54eb97b776f2942e51294abc1"
  },
  {
    "url": "assets/js/53.e18514c6.js",
    "revision": "336ae8bb923b440193cd607af71d3872"
  },
  {
    "url": "assets/js/54.810b076f.js",
    "revision": "c6515074b01c11799da9d0a33dc7f28f"
  },
  {
    "url": "assets/js/55.de2ab39a.js",
    "revision": "420c39745298976053eb8eb9b571aff0"
  },
  {
    "url": "assets/js/56.a8647225.js",
    "revision": "205ee9e29850af8ce91a21561b1f0c9d"
  },
  {
    "url": "assets/js/57.53c114b0.js",
    "revision": "5168659ce419124c048676ab2f1a934a"
  },
  {
    "url": "assets/js/58.0a54bc46.js",
    "revision": "c2f0a5471f4c4fd767e5890bf03ba5f9"
  },
  {
    "url": "assets/js/59.626b7076.js",
    "revision": "78c036e5f48fb1662d29464f50b292d7"
  },
  {
    "url": "assets/js/6.3131efa2.js",
    "revision": "cd51eaa92b4194c433bdb154b23f575c"
  },
  {
    "url": "assets/js/60.743a8d12.js",
    "revision": "abab62f407bd6d65f72e3ee28b344132"
  },
  {
    "url": "assets/js/61.bebd2c80.js",
    "revision": "b855668498597ea6617899ad326c5c35"
  },
  {
    "url": "assets/js/62.afb4fdc8.js",
    "revision": "4c076119aaca4e150db49534e5f779dd"
  },
  {
    "url": "assets/js/63.c68722d1.js",
    "revision": "036656e31377f8598f04e4098b5ea9df"
  },
  {
    "url": "assets/js/64.595d7270.js",
    "revision": "b5ea661ea4cbdb882d18f27e8054ef7a"
  },
  {
    "url": "assets/js/65.50c05972.js",
    "revision": "dddf001da8c82080a734dd541fb1d73a"
  },
  {
    "url": "assets/js/66.09108bec.js",
    "revision": "ff30d3ccb95fe47795aa6178795ff49c"
  },
  {
    "url": "assets/js/67.536a4d04.js",
    "revision": "5f1f63207ae7f240675ba462652ea34f"
  },
  {
    "url": "assets/js/68.0fe51a46.js",
    "revision": "15090e4f5e4b76df5f1c3cbbee080cb1"
  },
  {
    "url": "assets/js/69.cfb4ac28.js",
    "revision": "2da3f8f72c463c9dc79e5fc572b2a5fa"
  },
  {
    "url": "assets/js/7.fc8dc67c.js",
    "revision": "7d42918db225baf5af856bcdd34b4969"
  },
  {
    "url": "assets/js/70.9549000c.js",
    "revision": "31d9c398c4228c7531ac42fd1d0bd80c"
  },
  {
    "url": "assets/js/71.d27f5b3e.js",
    "revision": "b18f8dca790b642804bf6267c32cdbf6"
  },
  {
    "url": "assets/js/72.f59089b1.js",
    "revision": "99db1229053dd0ec0fb81bee5429e95d"
  },
  {
    "url": "assets/js/73.fd2372ab.js",
    "revision": "4c1f2f573b352a83fd12d4ae41a34047"
  },
  {
    "url": "assets/js/74.5a47db86.js",
    "revision": "4c23c6e5686790c90a0087bf46e53c3f"
  },
  {
    "url": "assets/js/75.74c541e4.js",
    "revision": "3d6c06d74c3a96a539573df4f20b33f2"
  },
  {
    "url": "assets/js/76.426197f4.js",
    "revision": "4579fa81145b71db7750975abd671ded"
  },
  {
    "url": "assets/js/77.70922351.js",
    "revision": "64e3f8a61ea75d267bc05861e6bf0537"
  },
  {
    "url": "assets/js/78.90697c72.js",
    "revision": "a3d5a738d889d6e8347dcab0cb834d34"
  },
  {
    "url": "assets/js/79.6c4728fb.js",
    "revision": "e971e976aea8e3d8b986161ec533f314"
  },
  {
    "url": "assets/js/8.4faf74e7.js",
    "revision": "3e3efdb6352cb1a83e03f3981eeb38eb"
  },
  {
    "url": "assets/js/80.6c235063.js",
    "revision": "84c7028314c737f5a0bc989c3c83ba70"
  },
  {
    "url": "assets/js/81.05e6ccad.js",
    "revision": "525f2f9dadaed4f07c4b63f2686c957e"
  },
  {
    "url": "assets/js/82.8337b06a.js",
    "revision": "421aecec881790fdebef21f1c8ed4b71"
  },
  {
    "url": "assets/js/83.a4302a65.js",
    "revision": "9a8e3b81b4802a22eb882b2e5b59d63e"
  },
  {
    "url": "assets/js/84.fe0b29aa.js",
    "revision": "be81ac229275388ee4f957390f1729a1"
  },
  {
    "url": "assets/js/85.9904ee93.js",
    "revision": "c03f47ba76554cb172e9cbba3831740c"
  },
  {
    "url": "assets/js/86.2131fe27.js",
    "revision": "4ee2b728eafbe9e0861a3db1136c9fe4"
  },
  {
    "url": "assets/js/87.a116cad9.js",
    "revision": "7c0dccf0fccc9ad60d72c143c67c3588"
  },
  {
    "url": "assets/js/88.6e92cba6.js",
    "revision": "8b40d7f8696d26d8fca9355d504e8518"
  },
  {
    "url": "assets/js/89.09ff2536.js",
    "revision": "698c5d684d7c6e7630a12672ee7c6135"
  },
  {
    "url": "assets/js/9.29d231e8.js",
    "revision": "5685efd3e9bba61a6afe03d29c3401e4"
  },
  {
    "url": "assets/js/90.e5812e64.js",
    "revision": "910c6f939b7121d2a13f0efaaa5cd310"
  },
  {
    "url": "assets/js/91.f0f3c205.js",
    "revision": "5660c2aea298f84a1a69ef5f0c73ca84"
  },
  {
    "url": "assets/js/92.9e82dc85.js",
    "revision": "231eada1159da3eecb92c4e0f0dc451e"
  },
  {
    "url": "assets/js/93.24ca0570.js",
    "revision": "c6e146347d474b475787c9a99ba1e6c1"
  },
  {
    "url": "assets/js/94.e372e9c1.js",
    "revision": "d0c77f80d745c900a4197b8cc7abac5c"
  },
  {
    "url": "assets/js/95.98cfbb00.js",
    "revision": "c67e7588ffd83f2d6b62ea7158ed5ac9"
  },
  {
    "url": "assets/js/96.ca457f3b.js",
    "revision": "a584c55b7e6e352e415e698f68244075"
  },
  {
    "url": "assets/js/97.e04f5c30.js",
    "revision": "8c8184b62fb3cfd7486027121d273e46"
  },
  {
    "url": "assets/js/98.194d0608.js",
    "revision": "aa498059217ea65c0e96c71c6a5847c7"
  },
  {
    "url": "assets/js/99.1f87bc71.js",
    "revision": "f4d81595db1c6fea4818f9592cd8e532"
  },
  {
    "url": "assets/js/app.c8e41eb0.js",
    "revision": "b1c55c4d9a3ae3b8edf2c43bbc7ac5c7"
  },
  {
    "url": "common/architecture.html",
    "revision": "cec918616a08f02f59df1c9bbf2d35c9"
  },
  {
    "url": "common/crawl.html",
    "revision": "75ea3552f2ee02379036f068594cac2e"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "bc7711a820d2ea777e552dca1cdd8e81"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "6faf30c62710bbfe1adc84c5db776cea"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "d9ccb231f23ee04367f6cf593e06c7ac"
  },
  {
    "url": "common/index.html",
    "revision": "a3e46744adc1432e3adac566383c4cd0"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "cb37f25f83d77f28e0b04d18b0c63575"
  },
  {
    "url": "common/realtime.html",
    "revision": "d85347cc083f29db42bda82d00c74ca9"
  },
  {
    "url": "common/refactor.html",
    "revision": "54d4d2038d98c67ce023f11a158ccc45"
  },
  {
    "url": "common/seo.html",
    "revision": "cbe71c3b32493f86ff01b7ab39a0710b"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "8a86afe214a8f7d54c33b639fb7eced1"
  },
  {
    "url": "css/tricks.html",
    "revision": "63ecc5bdc32504eed1f2cf964d2caee3"
  },
  {
    "url": "db/architect.html",
    "revision": "133ac9b7352bb57d4a1c407c3244885f"
  },
  {
    "url": "db/cassandra.html",
    "revision": "d868207cf21f9389dab4f862b9b890ff"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "310ce040f873bd4477f6320bc4ef15c3"
  },
  {
    "url": "db/optimize.html",
    "revision": "b84f5d7facfa7393602efa8d0b161e48"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "1dd5568f4f5e567fe9b91d8cfc4eeb2b"
  },
  {
    "url": "db/sql_nosql.html",
    "revision": "7ca38194aa846f1828917982af114085"
  },
  {
    "url": "dev.html",
    "revision": "6428ec85e81afab55ac729fb83b1865e"
  },
  {
    "url": "index.html",
    "revision": "44c03ae0f0b4a8470e914cb2f8566abc"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "b060671c39b88aa527f45fe325c826c5"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "144660e351a1f715812434d7c5cb0ae4"
  },
  {
    "url": "javascript/closure.html",
    "revision": "5ba32aa735be6cc426e26f390c67cd94"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "9305730d55e2f6f8287499770240b4ce"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "2c90600af7f30237b86687149500f942"
  },
  {
    "url": "javascript/react.html",
    "revision": "73cb368c7f095137808bca6e32899da7"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "0a4a19394346f6d38882f95377b331f1"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "f824030a73136ddef27f4c329b149ad6"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "84ddc75d56b0c57463739e9b695e1cf9"
  },
  {
    "url": "node/env.html",
    "revision": "cd36498812224ebeeebfddfecf0f1548"
  },
  {
    "url": "node/index.html",
    "revision": "feecf83440fbe3354ecf068f10401a80"
  },
  {
    "url": "node/n.html",
    "revision": "efc6b91b59614505ed50e92a458299eb"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "45624ffed8b9a5f8da45202b7cfaba5c"
  },
  {
    "url": "node/npm.html",
    "revision": "71f686c75bf476b5e403881eb5fcc458"
  },
  {
    "url": "node/sequelize.html",
    "revision": "95f59e417acfac742db57ba02a98c5bd"
  },
  {
    "url": "php/composer.html",
    "revision": "76756c20f95bb1ec2de7ca8930346860"
  },
  {
    "url": "php/laravel.html",
    "revision": "2355f7c0be225836622e426f88668729"
  },
  {
    "url": "php/magic.html",
    "revision": "18f491b8601fa68e59ee7873f17614ac"
  },
  {
    "url": "php/notes.html",
    "revision": "de07a7f58bfea4d4f2063ed2f26a6519"
  },
  {
    "url": "php/oop.html",
    "revision": "a3e53a99032fa544d50da9490c35eb9d"
  },
  {
    "url": "php/php7.html",
    "revision": "50475439ffe217a6ef9d9e68e9fbf4be"
  },
  {
    "url": "php/reflection.html",
    "revision": "8abb68fc27fac749233de66f4eb2d008"
  },
  {
    "url": "php/tricks.html",
    "revision": "56d79f1a16330b6611115961584fb25e"
  },
  {
    "url": "php/wordpress.html",
    "revision": "abd7343bd4d9a9885e1c2b0d891a5f96"
  },
  {
    "url": "quotes.html",
    "revision": "f151c8062bccf76e999ec52e9fc4454d"
  },
  {
    "url": "refactor/notes.html",
    "revision": "31cc72c8f143f64c58df5882e6b4328b"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "f5c7c98d080f87742b908c0777a26f9c"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "3656ff27edde3ee0058e3368054f57eb"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "6df6c8593d12de7dbe04478fe8a45a9d"
  },
  {
    "url": "snippets/regex.html",
    "revision": "ff16c023158ac003e458b7a7c143b0a8"
  },
  {
    "url": "terms/architecture.html",
    "revision": "2758f78127b0a1431944cf30eff90339"
  },
  {
    "url": "terms/ddd.html",
    "revision": "df416719fa5d9e1ba281171afbd1d62a"
  },
  {
    "url": "terms/javascript.html",
    "revision": "42253c5766b70e617e153128791bda23"
  },
  {
    "url": "terms/oop.html",
    "revision": "5b2fb060b5bb2f4b6cfb764620f4e14d"
  },
  {
    "url": "terms/testing.html",
    "revision": "8970688ba423ef844cf310ea3e2aae27"
  },
  {
    "url": "tools/chrome.html",
    "revision": "e39e64b016b732c2676f94cd6e288409"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "0c1571bde162ef293c954309b01e8e31"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "0905cc60b5c7808853146cbde201e987"
  },
  {
    "url": "tools/redis.html",
    "revision": "1830ee0936b3536fd181c7734abf1581"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "48d80929042ea2ee53c71999ee300d42"
  },
  {
    "url": "tools/vscode.html",
    "revision": "6794972302ccd5c76b1b045c9b1d8d9d"
  },
  {
    "url": "tricks/compare.html",
    "revision": "be63f54546900d701682db59b8fc2f26"
  },
  {
    "url": "tricks/git.html",
    "revision": "767b35e5eac4bd61f3b398496d3733a6"
  },
  {
    "url": "tricks/linux.html",
    "revision": "8eaa7627e546c3e3d66b64a98b764226"
  },
  {
    "url": "tricks/mac.html",
    "revision": "bd6c9b39a0ef27c1eee47f5eac2bc7cf"
  },
  {
    "url": "tricks/misc.html",
    "revision": "93c7a6373f36c7c2c7cc387c47ce8197"
  },
  {
    "url": "vue/communication.html",
    "revision": "31d20cb11e8fc0c7cc795354c47b3aa0"
  },
  {
    "url": "vue/events.html",
    "revision": "5eaf675fd4808472879f4810d5f085d3"
  },
  {
    "url": "vue/references.html",
    "revision": "ce4ecf285275f020ed8cdba68681ec3c"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "d7b9ab8fc135b527bea1b52f07564754"
  },
  {
    "url": "vue/tricks.html",
    "revision": "9180ade4f8b36b66a843254c9f1d3df4"
  },
  {
    "url": "vue/vue_react.html",
    "revision": "579d20efb1e8bd98c064d537b6043aa3"
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
