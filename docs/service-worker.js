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
    "revision": "1ea9c7b2bae6bc62bcc2896d3654a6fe"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "26c1666060e57b93d450c7fe8e6f74c1"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "f03cf45b6640a9a68435c61dbc0ac797"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "ea0b8586a28dcc980f5480cdeb99337a"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "2a3330ec9c059afbe274c478198e93de"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "4d85ad15b58b3ea30492b143fbd169c8"
  },
  {
    "url": "algorithm/string.html",
    "revision": "fb80b0f2f47becf554f8affedc0c0b4c"
  },
  {
    "url": "architect/authenication.html",
    "revision": "411b84c8be2e344c0e03681850c83395"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "1f941358d545d9dbe60fa94f0c57d40f"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "d66ad2a122c336a7ec0bf0f25882cd7c"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "f160b839f7f0dcac6e94187c195e395a"
  },
  {
    "url": "architect/ddd.html",
    "revision": "7ecc8fc84458c7236b7d83471ee46aed"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "6f60e61ea6fa6e64bba7a2dcf25f8b9c"
  },
  {
    "url": "architect/ebi.html",
    "revision": "ab5f1ea840b88d1dffb44357f112199b"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "e4dae0f485052cfaa576d66d836ad8ae"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "11b390844522da00dae16885d0248996"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "e33d9390152556edb6415bd119f5a79f"
  },
  {
    "url": "architect/index.html",
    "revision": "2fdd10a5069864ef987bfb35201108db"
  },
  {
    "url": "architect/notes.html",
    "revision": "fc18b12d67b3bc196249ac3619034939"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "7800257a869775537c67891934011a8b"
  },
  {
    "url": "architect/refs.html",
    "revision": "007b92cf68feb71e679605cd32c817bd"
  },
  {
    "url": "architect/soa.html",
    "revision": "e3e70209f542baa4b293d9a476e1e455"
  },
  {
    "url": "architect/spa.html",
    "revision": "790f7376fefdeabc613ef125d854efa3"
  },
  {
    "url": "architect/use-case.html",
    "revision": "1b6852da2e01f800178d89e18a9b768a"
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
    "url": "assets/js/10.377dcbe8.js",
    "revision": "b0754f75d93f93bfc4f552fffe9bddb9"
  },
  {
    "url": "assets/js/100.98c5511b.js",
    "revision": "6a4836053dcd8ca7dade5ec62dbcf43b"
  },
  {
    "url": "assets/js/101.c6d81824.js",
    "revision": "243d5f4bc2ac5ff1e7436f2f5587091a"
  },
  {
    "url": "assets/js/102.eb428419.js",
    "revision": "0dd5a0fed244a25ec68047605bb93b1b"
  },
  {
    "url": "assets/js/103.92a26005.js",
    "revision": "a5070306e226dd6222fbba0864767333"
  },
  {
    "url": "assets/js/104.618af488.js",
    "revision": "5e82319a147948c1557c7b283a105efb"
  },
  {
    "url": "assets/js/105.daadee0b.js",
    "revision": "ad6b5ee9d06692911279c7cab5c60bf0"
  },
  {
    "url": "assets/js/106.eecab366.js",
    "revision": "eda7af33db79f969c74a3aa0280af17f"
  },
  {
    "url": "assets/js/107.b42f1b5b.js",
    "revision": "3ba613b73a71fe5fa51a4536d0fba175"
  },
  {
    "url": "assets/js/108.3a5ee209.js",
    "revision": "03fccc1438af09229dd7b2d168fc604d"
  },
  {
    "url": "assets/js/109.8b0949b1.js",
    "revision": "da0ea3399e1abae82d924eda50096755"
  },
  {
    "url": "assets/js/11.f38fcdca.js",
    "revision": "200a74de1885428f7f22876f1f538e3a"
  },
  {
    "url": "assets/js/110.0bee9589.js",
    "revision": "395e4082bcb141e94f81110a414f184e"
  },
  {
    "url": "assets/js/111.7dce725e.js",
    "revision": "9fc7ee7ba722be907128febda0ba8d0f"
  },
  {
    "url": "assets/js/112.e4decda4.js",
    "revision": "4cad1ad74f313c6de00d9891836989ff"
  },
  {
    "url": "assets/js/12.9ea81ce6.js",
    "revision": "7cab20206433bfbe6930afb13034a149"
  },
  {
    "url": "assets/js/13.c4176512.js",
    "revision": "5714c4e237d8f570d9e91c2e360c42a7"
  },
  {
    "url": "assets/js/14.34d72b68.js",
    "revision": "46ec21e3a7ade84a67a14561f91616cb"
  },
  {
    "url": "assets/js/15.e1e83a6d.js",
    "revision": "d1e0aebdd0569367bf62028804ada25c"
  },
  {
    "url": "assets/js/16.02ff0fa5.js",
    "revision": "cdb97c023561ad603185817fb2f4edee"
  },
  {
    "url": "assets/js/17.d88e6fc0.js",
    "revision": "748e62c1acaafa781f6a004c70673fb2"
  },
  {
    "url": "assets/js/18.d73c6095.js",
    "revision": "9854a5db8308bbfca3740b7585843cf9"
  },
  {
    "url": "assets/js/19.2ccf848b.js",
    "revision": "4fd9334a2df055d5e68d4f112ba0b4a7"
  },
  {
    "url": "assets/js/2.184c692c.js",
    "revision": "32b9484aac113e418abba4bc32e17808"
  },
  {
    "url": "assets/js/20.08d9e79b.js",
    "revision": "788c2bf19a44e39b9e5e367d999815fd"
  },
  {
    "url": "assets/js/21.c24c2c87.js",
    "revision": "8d7f5a0f1e982d86dced094baa891b51"
  },
  {
    "url": "assets/js/22.c78fc5f4.js",
    "revision": "c8e6b7c9faf0eb7e36405559d6f453fa"
  },
  {
    "url": "assets/js/23.4273d187.js",
    "revision": "8a6b1753e2e85393f1127f7b4e5360a8"
  },
  {
    "url": "assets/js/24.962d5d67.js",
    "revision": "359921c5913dd24c4647cc6297064ef1"
  },
  {
    "url": "assets/js/25.d9b329f1.js",
    "revision": "803d13ec6a42fdbe7827dc1e8eabb0ca"
  },
  {
    "url": "assets/js/26.ae0088aa.js",
    "revision": "d49063816fe919499e55b2bea68ee2a0"
  },
  {
    "url": "assets/js/27.1868ac50.js",
    "revision": "61b74cf4350121d9d2c249b3539ce133"
  },
  {
    "url": "assets/js/28.d1e91f72.js",
    "revision": "269a347e053da126bae3a142966bcd81"
  },
  {
    "url": "assets/js/29.b6a9f831.js",
    "revision": "2f9f8efd5598c9c7cd486a4f74eeb383"
  },
  {
    "url": "assets/js/3.cbff5257.js",
    "revision": "92112f816575b9d502c508996da31704"
  },
  {
    "url": "assets/js/30.ed12c924.js",
    "revision": "4cef974cbd725eb899a72d530da55429"
  },
  {
    "url": "assets/js/31.a1d43e71.js",
    "revision": "f90bc14ce189c0c13a1095e92afdd7d6"
  },
  {
    "url": "assets/js/32.f52b4e0c.js",
    "revision": "aa4b05ed2683a77e0b46827b1f159a2f"
  },
  {
    "url": "assets/js/33.c404defa.js",
    "revision": "d997f11e9e07b9cae1ee3834a3e8f4e7"
  },
  {
    "url": "assets/js/34.8b986314.js",
    "revision": "38c7382548858ecbaf29b906d33ea8df"
  },
  {
    "url": "assets/js/35.cc82ad17.js",
    "revision": "fe13f1aab9799e08bb4bb317d6eb9f30"
  },
  {
    "url": "assets/js/36.50be75a3.js",
    "revision": "903d5181251880bfae814289da2cc230"
  },
  {
    "url": "assets/js/37.a7fa2c9f.js",
    "revision": "a8345b41521c2ff80b922984d28afe26"
  },
  {
    "url": "assets/js/38.f0fc703f.js",
    "revision": "2911c5eac834644de45af39afb260967"
  },
  {
    "url": "assets/js/39.1a6f9b08.js",
    "revision": "83dacf11d86781057029fe9d24788d7c"
  },
  {
    "url": "assets/js/4.bc4d0aa0.js",
    "revision": "e670a62793a1e19eaffdedefa9f4b103"
  },
  {
    "url": "assets/js/40.37cf759a.js",
    "revision": "ae40e0ef0d83d2af4e389da6d0569175"
  },
  {
    "url": "assets/js/41.5dff97f2.js",
    "revision": "3396a23fc067a123006856cfe55e24bc"
  },
  {
    "url": "assets/js/42.db8e0b43.js",
    "revision": "ee573667ba1895a89eedaa82eb2e03d8"
  },
  {
    "url": "assets/js/43.757dc784.js",
    "revision": "8d474aeace3ae63e4500a0ad4d046ef4"
  },
  {
    "url": "assets/js/44.bc53013e.js",
    "revision": "98c7a419cb15bf4a1b9d18d57773134c"
  },
  {
    "url": "assets/js/45.37eb6c63.js",
    "revision": "e7f0f0a037833a18613e3d05a8c73f59"
  },
  {
    "url": "assets/js/46.1377785e.js",
    "revision": "b5750ece9c4db0270fc1ecf74f8f2a7e"
  },
  {
    "url": "assets/js/47.990b9481.js",
    "revision": "7c63ef92cf3c7975b66cb5bb75b279a3"
  },
  {
    "url": "assets/js/48.d370700d.js",
    "revision": "801fc59f27ee298d1a6294601beb7b2c"
  },
  {
    "url": "assets/js/49.35a5bcbd.js",
    "revision": "6861837fb32e9e7a5c2364498fefdd03"
  },
  {
    "url": "assets/js/5.c069d764.js",
    "revision": "503d2051266cc96643b60c34986094bf"
  },
  {
    "url": "assets/js/50.63c5345f.js",
    "revision": "b7794b8564fb48bd773cab312abba1c1"
  },
  {
    "url": "assets/js/51.b6a11d75.js",
    "revision": "09a085bcc1a5c25034fa9524a0ff6c48"
  },
  {
    "url": "assets/js/52.9f352477.js",
    "revision": "58fb5170cb88d13826f9afe7ba4ff434"
  },
  {
    "url": "assets/js/53.6cbf91d4.js",
    "revision": "978538df70a05211e2c5d01c26939400"
  },
  {
    "url": "assets/js/54.e0d934f2.js",
    "revision": "260dbc152af6d7184c5d573e44ae0da6"
  },
  {
    "url": "assets/js/55.c7a361e2.js",
    "revision": "0afa41b820fefa12388bd4ae917bca91"
  },
  {
    "url": "assets/js/56.512e9ee5.js",
    "revision": "29414888eab094ffb486fa4e829b18d3"
  },
  {
    "url": "assets/js/57.41e16ea7.js",
    "revision": "f1abca5ebb949c651534b3af5a44fdaa"
  },
  {
    "url": "assets/js/58.ca266843.js",
    "revision": "33450bcc3583a0b6417eea723ef86952"
  },
  {
    "url": "assets/js/59.f9d1e8da.js",
    "revision": "c2b1fa535c3fa110dfabb8bb58a75b23"
  },
  {
    "url": "assets/js/6.02f742a1.js",
    "revision": "21b099241a2936c4394516ff25e4d05a"
  },
  {
    "url": "assets/js/60.7f4665d1.js",
    "revision": "22cc99bda6203b0b47cddf0f057e60c0"
  },
  {
    "url": "assets/js/61.d9a806e2.js",
    "revision": "4bff44c250447058ba8a50adcef238b7"
  },
  {
    "url": "assets/js/62.52911789.js",
    "revision": "a53314595888d3014fb08393cabe253c"
  },
  {
    "url": "assets/js/63.e0498a5f.js",
    "revision": "4cf13ce1106a288c1b4ff761dbc050e0"
  },
  {
    "url": "assets/js/64.b5851647.js",
    "revision": "9565b7911211e70e24b3d41cb932813b"
  },
  {
    "url": "assets/js/65.3aaff1cf.js",
    "revision": "f03d04682536e2bf7418419a501e7786"
  },
  {
    "url": "assets/js/66.c876bf10.js",
    "revision": "191966ec5c69bee0d824959354d3384f"
  },
  {
    "url": "assets/js/67.9325ddaa.js",
    "revision": "2de2fb213fc3e6ab1bb1bdd8a50db926"
  },
  {
    "url": "assets/js/68.27ff05f5.js",
    "revision": "16c74ea353d127569420aeba7c079ad3"
  },
  {
    "url": "assets/js/69.fb5be55b.js",
    "revision": "627ae6272256816cff69982db04bafd6"
  },
  {
    "url": "assets/js/7.696f3c6b.js",
    "revision": "f195868b02eda64b5c0749294c76d09a"
  },
  {
    "url": "assets/js/70.6a469020.js",
    "revision": "eeac182c97754ab5d5524fd7289db887"
  },
  {
    "url": "assets/js/71.0410bce8.js",
    "revision": "9a27104f1b8d45f19fe68c8725cd2dfb"
  },
  {
    "url": "assets/js/72.04397bab.js",
    "revision": "38c0e00ab7fe1444b1787f066926bf44"
  },
  {
    "url": "assets/js/73.3928638d.js",
    "revision": "103e136adc7b93eded0ba5abe14a6cfe"
  },
  {
    "url": "assets/js/74.87c02ed2.js",
    "revision": "6cddf493035e6279ab2d37fb283ca11f"
  },
  {
    "url": "assets/js/75.472064b4.js",
    "revision": "ef7b3cee5c4e89bca8e14742f06fba60"
  },
  {
    "url": "assets/js/76.997fc941.js",
    "revision": "b85f469b66acd51ab62cb1ec3c3669ea"
  },
  {
    "url": "assets/js/77.92b2dead.js",
    "revision": "b7b8334d10763453e1b65ca8ce1909b0"
  },
  {
    "url": "assets/js/78.a10e8901.js",
    "revision": "2511cc5bf0c7b11a8b5ac8ce35b58b6c"
  },
  {
    "url": "assets/js/79.8885e9fc.js",
    "revision": "d0f10283144a06e7ccb3af892fab5694"
  },
  {
    "url": "assets/js/8.fad943ed.js",
    "revision": "086f3e8448934546305e586e78050792"
  },
  {
    "url": "assets/js/80.1ca3ceae.js",
    "revision": "5fb967837c42cff099722a122f143598"
  },
  {
    "url": "assets/js/81.310bd695.js",
    "revision": "1badc0878381ada64bb21ce486492de4"
  },
  {
    "url": "assets/js/82.845a6d47.js",
    "revision": "c8bc64f4be1fb8214efbd374ffadf2e6"
  },
  {
    "url": "assets/js/83.aef4e4cd.js",
    "revision": "764172e2e0f995c3f9c690802399debb"
  },
  {
    "url": "assets/js/84.0e52b99e.js",
    "revision": "7cf2d3f7e78120126d196ee0725fd9c2"
  },
  {
    "url": "assets/js/85.b281486d.js",
    "revision": "d4ad1b4a26fc3493e631cfb606a8a847"
  },
  {
    "url": "assets/js/86.18fd1f28.js",
    "revision": "af99748f1f37cc5f9e3708920c067041"
  },
  {
    "url": "assets/js/87.e7cd170f.js",
    "revision": "1d373d4c03042d2499cf26d79bad69a5"
  },
  {
    "url": "assets/js/88.56fccff9.js",
    "revision": "9f47f3f6892e20621be5f50389175ec2"
  },
  {
    "url": "assets/js/89.34cf742d.js",
    "revision": "f42c02ce9f8be170319c72b9b346b108"
  },
  {
    "url": "assets/js/9.e9f91e20.js",
    "revision": "1c6858d421c1e66e4b46327fd1f57502"
  },
  {
    "url": "assets/js/90.58b76aa3.js",
    "revision": "9829a68f3d0482f14f16c4eac4291a3a"
  },
  {
    "url": "assets/js/91.8487a2a8.js",
    "revision": "d35f7d5eea53c91ef3b1d510c7668496"
  },
  {
    "url": "assets/js/92.403d2d9f.js",
    "revision": "21ca631a19d33b19a58bd499645de571"
  },
  {
    "url": "assets/js/93.4857358a.js",
    "revision": "659ab4796a63e33023eaf381d7966c69"
  },
  {
    "url": "assets/js/94.1b0faef3.js",
    "revision": "82146f304767b0aade62047be349aa1a"
  },
  {
    "url": "assets/js/95.67447da8.js",
    "revision": "6baf26ceadcbcf9c662b892911dc8f73"
  },
  {
    "url": "assets/js/96.b53bf89b.js",
    "revision": "02182496b6f97969d1c865a4061a46b4"
  },
  {
    "url": "assets/js/97.5fd8163e.js",
    "revision": "0c50dfa72178a6cffb268d538c817175"
  },
  {
    "url": "assets/js/98.07c77daf.js",
    "revision": "725938389abbdec7329d4987108023ea"
  },
  {
    "url": "assets/js/99.805ed3ee.js",
    "revision": "003fb5dcaa3d4d6011499eae2229c6ca"
  },
  {
    "url": "assets/js/app.69c8d6f5.js",
    "revision": "f552751851f936f3c33cd0bbe470e343"
  },
  {
    "url": "common/architecture.html",
    "revision": "06c492c1165e0f147d8de04efaac85fb"
  },
  {
    "url": "common/crawl.html",
    "revision": "34200aa5878226007bb32427b8f83073"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "aecf7ec34ea23e1074cba2c99c333406"
  },
  {
    "url": "common/document.html",
    "revision": "c9b8e3fb3ffc9fdf63062d859294657e"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "d4ee4e9f6efcde9fa25dc2df261fc7b0"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "72add9a7633f2f2ef60411ad45068053"
  },
  {
    "url": "common/index.html",
    "revision": "4938e57fe59762733aae5a7354c7dc7a"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "dc5a51cd06ebb7de3324664a39468bde"
  },
  {
    "url": "common/realtime.html",
    "revision": "0c1ded62c96da4b2a7b4bac9e6b52b84"
  },
  {
    "url": "common/refactor.html",
    "revision": "2c018c62e2fdc262dedde3079ddd5ff4"
  },
  {
    "url": "common/seo.html",
    "revision": "c8f3771557c2d6071a4670e7c8304238"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "851e02ea2cca9a1329607e244997abf6"
  },
  {
    "url": "css/tricks.html",
    "revision": "c4a0a2ddd2801dcedb703f332606b628"
  },
  {
    "url": "db/architect.html",
    "revision": "f122fb507c9001e2fe78fe532847f8d8"
  },
  {
    "url": "db/cassandra.html",
    "revision": "13fe7c72fee94c565b43343c5282d90f"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "6c77dbbb4d836135faf4582bc956f3b6"
  },
  {
    "url": "db/optimize.html",
    "revision": "1e59d607021af297825a5255c26ea042"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "ff07860190cd4caa60467b2e6e7b6044"
  },
  {
    "url": "db/sql_nosql.html",
    "revision": "d484830676724da1671c1fb593704f9b"
  },
  {
    "url": "dev.html",
    "revision": "c48a3f7e98e016b510b524d281ad3341"
  },
  {
    "url": "index.html",
    "revision": "954d3e90301e48548b5d78ed65ee4da3"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "6d143ef8fe90614dbb8abed65281491c"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "610ef8ebfee78c5f98de76a65193ded4"
  },
  {
    "url": "javascript/closure.html",
    "revision": "41d3749c86c8a399e7387e50ed519fd6"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "5589c5387e0a954e6eb535d6ee234695"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "840b7ff273a40c34b35603255079332d"
  },
  {
    "url": "javascript/react.html",
    "revision": "5bc8ff880203eeeee44640ca71161318"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "3554647fc785e8e3493d813eaee0139c"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "2f2b654c085f9c5c2b33364bcc4ee2f7"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "c11dd999b033a845f17bd697657eb633"
  },
  {
    "url": "node/env.html",
    "revision": "8fd4a81703ee9a2575a10a3c42af3433"
  },
  {
    "url": "node/index.html",
    "revision": "7699c9a20670a3944f5b4b037647d3d9"
  },
  {
    "url": "node/n.html",
    "revision": "7667490c56406c6d54797e87113e61b2"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "3c6ae7aad10807a61c3e7801dd655bae"
  },
  {
    "url": "node/npm.html",
    "revision": "ecb081a423d3d95f90482db64854b09b"
  },
  {
    "url": "node/sequelize.html",
    "revision": "1ba7aa57af194a2adee22556f435de8d"
  },
  {
    "url": "php/composer.html",
    "revision": "9a576d5c3861fc559337928d52aba1fc"
  },
  {
    "url": "php/crunz.html",
    "revision": "992ac6844e37d3a43cd8972414a8c58d"
  },
  {
    "url": "php/laravel.html",
    "revision": "2e6b36627126a55d943e02c5ce2d9d29"
  },
  {
    "url": "php/magic.html",
    "revision": "82b997ada949df7fc9b62c53ae2533ec"
  },
  {
    "url": "php/notes.html",
    "revision": "2805ebf827c104b7f413e7add96c80ac"
  },
  {
    "url": "php/oop.html",
    "revision": "460baa1cc35c27d83cccc7245ac674d7"
  },
  {
    "url": "php/php7.html",
    "revision": "7df204c836af1cd44c65bdc31d5eb779"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "bbd9905fb77d9e46ed9dae49f0add9bb"
  },
  {
    "url": "php/reflection.html",
    "revision": "4a910e46df515e43bfcfa7dbe8a840a5"
  },
  {
    "url": "php/tricks.html",
    "revision": "7b8f3bef3ed055721fd0978306ac4663"
  },
  {
    "url": "php/wordpress.html",
    "revision": "9faa1a924401efb45ce122972be16412"
  },
  {
    "url": "quotes.html",
    "revision": "014da0fc45986e29dad9c8296f9eba6b"
  },
  {
    "url": "refactor/notes.html",
    "revision": "6aae9963806964938e0ecaf413bfb365"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "e0ee1846cdfcc6247dea201d9af7e0e1"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "1021a06c2d8be980f1c917823328faf4"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "20cf32f5b6c851c3bc57f0ccd528436b"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "0cc8475dc9b398302222f7ae998ee31e"
  },
  {
    "url": "snippets/patterns.html",
    "revision": "fe8c15975c8238c3d7766cc4503acb00"
  },
  {
    "url": "snippets/regex.html",
    "revision": "633ddfb7267e8e72d18139c7b5050d31"
  },
  {
    "url": "terms/architecture.html",
    "revision": "c476c952fa187660efc146e910dd34e5"
  },
  {
    "url": "terms/ddd.html",
    "revision": "3851a42fe4887124c6111a4bb8fa226e"
  },
  {
    "url": "terms/javascript.html",
    "revision": "831fc2e423bfd85888ca4d5e96c7a86b"
  },
  {
    "url": "terms/oop.html",
    "revision": "175995b44cae9e7aa379344a258fb987"
  },
  {
    "url": "terms/testing.html",
    "revision": "050f7df05a6a127d2a304a2094934c91"
  },
  {
    "url": "tools/chrome.html",
    "revision": "8d19bde08a35de1d622c64ac354247c5"
  },
  {
    "url": "tools/docker.html",
    "revision": "d9efea19409f15f109f83dcf0aa620c2"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "02c5ac3c7c472224a1baaf7c00deaabb"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "b829606932c7575a82866b47fd6e22e0"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "c6afb39af895a858be7b8cc4f38ab6f0"
  },
  {
    "url": "tools/redis.html",
    "revision": "c29ce5d1db720d34ba7777515bb6ab33"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "0e3b3ff7929df76f86a1ae4b1d5e7ebe"
  },
  {
    "url": "tools/vscode.html",
    "revision": "9b69d7a59840e6972f43a4abaaf083e5"
  },
  {
    "url": "tricks/compare.html",
    "revision": "ce2f349c8a98e867a68f070d4355df05"
  },
  {
    "url": "tricks/git.html",
    "revision": "22bd7ec2a27a5cd63590d379de5240e0"
  },
  {
    "url": "tricks/linux.html",
    "revision": "aef17a339eaebf6906e8381a70c9ba2f"
  },
  {
    "url": "tricks/mac.html",
    "revision": "0d8295de1e7fdae3f67e0e4936f95191"
  },
  {
    "url": "tricks/misc.html",
    "revision": "af9204effbaa49a072172d4a22747375"
  },
  {
    "url": "tricks/setup.html",
    "revision": "7de0e967a960f67ab4033ff55dabe1d7"
  },
  {
    "url": "vue/communication.html",
    "revision": "5019e41a23262e6fc8c13f259ced0ed3"
  },
  {
    "url": "vue/events.html",
    "revision": "7f391a85d1a1bb452829a81b7bfcf46d"
  },
  {
    "url": "vue/references.html",
    "revision": "2c93c3a4ec4bcdf046467fad1fc4e330"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "fda64a39f5bf793e7845cfd7ed52849a"
  },
  {
    "url": "vue/tricks.html",
    "revision": "7c75fb4f6b1f780be3ca025eab40c6df"
  },
  {
    "url": "vue/vue_react.html",
    "revision": "2c082a244fb8e7d6871302a390226f59"
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
