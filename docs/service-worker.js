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
    "revision": "e34d133bc042a0c9280bb26459e3975d"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "44d3b390f1efa617cfb4ddedcb7c98af"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "5c9946bba08d415c5e62901a5bd38117"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "b0414cc3450877e44e9ba5a505346660"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "4e0d7882ad53f8947e7d6646ffffd811"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "9d15a2079bd2ef1b84599242f788569d"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "0954cb5317a0420640f2dbf5fc0aaf58"
  },
  {
    "url": "algorithm/string.html",
    "revision": "29109e7432852bd1fb6d3c15627ef775"
  },
  {
    "url": "architect/authenication.html",
    "revision": "f1bc931cbbcf8a68290a7432b4fc607b"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "4629de85d57db280680d18e791b8d436"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "afc8f11dcd8ad854ab3523a691f924b7"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "3e4917eebeb4feaad38cf6b30b4bb25b"
  },
  {
    "url": "architect/ddd.html",
    "revision": "1dfee315cdf5a457ba6b5e521836cc74"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "891e0576f53faa3cbb3fb65df34d47e2"
  },
  {
    "url": "architect/ebi.html",
    "revision": "bbab16fd6422a2aa144f596b6b912dbb"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "4083385938025e869f45c148ebfa859a"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "796eca87196e3562af1fc903e63e09d9"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "7b017d69d09745fcc79e5d258a330ac8"
  },
  {
    "url": "architect/index.html",
    "revision": "0dfa7982da887a1107e7fa35f7bdbc59"
  },
  {
    "url": "architect/mutex.html",
    "revision": "9523d169375c35cd0bacbfeaa7361b08"
  },
  {
    "url": "architect/notes.html",
    "revision": "762b141a54ba64adc9d6e2f4dcdf79ac"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "ad7055e031c0416a47346b7013d4b38a"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "ad6fca1dc1786b00d14c37bd343b5833"
  },
  {
    "url": "architect/refs.html",
    "revision": "94b7b81168a6a3edf14759909141dd22"
  },
  {
    "url": "architect/soa.html",
    "revision": "4ff6aa868ad329c2c719681e4e4a025f"
  },
  {
    "url": "architect/spa.html",
    "revision": "174901ff23b97f704e9277e73677b675"
  },
  {
    "url": "architect/terms.html",
    "revision": "32318ff208b8608fbf040915f6f0ec54"
  },
  {
    "url": "architect/use-case.html",
    "revision": "4080edfef4f530f3fb4148129658a8d0"
  },
  {
    "url": "architect/webservice.html",
    "revision": "052037ec05b975e7b541cc07c9076cee"
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
    "url": "assets/img/97-4.11b25a69.png",
    "revision": "11b25a69c80591126608a21b6360a255"
  },
  {
    "url": "assets/img/97-7.7e904809.png",
    "revision": "7e904809e04b731de7d8a416153d0472"
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
    "url": "assets/img/deadcode-1.e189f987.png",
    "revision": "e189f987bc541fb1b8e6160ca595a2a5"
  },
  {
    "url": "assets/img/deadcode-2.04d38c9f.png",
    "revision": "04d38c9f14b61405dd411cac2c296fb7"
  },
  {
    "url": "assets/img/docker-image-container.8cc9fded.png",
    "revision": "8cc9fdededede928c3c8b8c30824beb3"
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
    "url": "assets/img/nosql-data-model.85556a21.png",
    "revision": "85556a21da9f3bda971db4d4c6147a8b"
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
    "url": "assets/img/polyglot.cdb5e015.png",
    "revision": "cdb5e0159f3f3bfae81a71d28702bd2a"
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
    "url": "assets/img/test-case-fail.203afb2b.png",
    "revision": "203afb2baaf1f986a0c170aeffbe931e"
  },
  {
    "url": "assets/img/test-case-success.285ddcbb.png",
    "revision": "285ddcbb0b85743e46ba2592b15a8bb9"
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
    "url": "assets/js/10.0c22c18e.js",
    "revision": "ea26f10c82c9d080d97d3de7c5e2942a"
  },
  {
    "url": "assets/js/100.8cba43d4.js",
    "revision": "abf70ae3305b690f7a847c6c92fb593c"
  },
  {
    "url": "assets/js/101.cf5dc23e.js",
    "revision": "dcd1c18f0c59f49e24d2d8ac3b0e4328"
  },
  {
    "url": "assets/js/102.9a427f71.js",
    "revision": "c687c8422ca6bb50b39e72272ac2d59c"
  },
  {
    "url": "assets/js/103.b6c39f82.js",
    "revision": "a37070dc6762df9a29548d2d3c97c9d3"
  },
  {
    "url": "assets/js/104.737606a1.js",
    "revision": "b6a7d04eeaaf1a9e7154a2c7e308b148"
  },
  {
    "url": "assets/js/105.1ace4285.js",
    "revision": "d4b90c4a2d10175b152d4c83daacbfa9"
  },
  {
    "url": "assets/js/106.15c69705.js",
    "revision": "5312d0fa44f203d9976a803acb3acda9"
  },
  {
    "url": "assets/js/107.b35c3777.js",
    "revision": "ac6f2fa173a4e259091b72f1f7a9f2fb"
  },
  {
    "url": "assets/js/108.fa45a387.js",
    "revision": "27297c89d8c443c3bbc32865a3e80abd"
  },
  {
    "url": "assets/js/109.54e16755.js",
    "revision": "6010d10e79bb285941e506b47501b725"
  },
  {
    "url": "assets/js/11.56af7241.js",
    "revision": "e3ca98f683054b3985a798e554d9b486"
  },
  {
    "url": "assets/js/110.4859ff28.js",
    "revision": "f7e7b60da64dfd9109904846f137115c"
  },
  {
    "url": "assets/js/111.1853af43.js",
    "revision": "eb58d7f5987519af16fe755fab6d44dc"
  },
  {
    "url": "assets/js/112.d5e2ce30.js",
    "revision": "4b3b0ca93417ae7506d11918b500ceea"
  },
  {
    "url": "assets/js/113.28e671af.js",
    "revision": "0ad9c87936632dfc650c90ed9122bf71"
  },
  {
    "url": "assets/js/114.81fda54b.js",
    "revision": "df45b2a8122d28aa836f7e51f388003e"
  },
  {
    "url": "assets/js/115.98770587.js",
    "revision": "2451a7af4d58d4aba7eb20226750bc45"
  },
  {
    "url": "assets/js/116.d0893a2f.js",
    "revision": "90021af40f55c81c5fa59e72e1dc5a81"
  },
  {
    "url": "assets/js/117.a0190312.js",
    "revision": "2152ebc4409540432120729dd693d4c2"
  },
  {
    "url": "assets/js/118.bd8b2d5b.js",
    "revision": "13df456d1b64ed7b38a49389f5b0489c"
  },
  {
    "url": "assets/js/119.390a329f.js",
    "revision": "fce88f2de99d6ed5377ef3517fe973ae"
  },
  {
    "url": "assets/js/12.63e00f26.js",
    "revision": "44444cf4c50c642c3508ca9e67642331"
  },
  {
    "url": "assets/js/120.1b29081d.js",
    "revision": "eb6bef1869f92253fe8495e41d2d8258"
  },
  {
    "url": "assets/js/121.879da784.js",
    "revision": "0932d58ee693ee6805acff2c8e126cf9"
  },
  {
    "url": "assets/js/122.be9f31ed.js",
    "revision": "2f5de6f9f3a5cfafc18fa5ebd548c06d"
  },
  {
    "url": "assets/js/123.91326167.js",
    "revision": "235faed5d1eeaebf99f28c9913c3c3f2"
  },
  {
    "url": "assets/js/124.4efa5b9e.js",
    "revision": "1fa7ef1bd43dcccb85ec1b549ef3a0f7"
  },
  {
    "url": "assets/js/125.7c74bf75.js",
    "revision": "a314e9b17854daf9750d64e5439acf52"
  },
  {
    "url": "assets/js/126.1d726006.js",
    "revision": "79b602a42a91d2d9f5d8c4abbbd3874a"
  },
  {
    "url": "assets/js/127.26def29f.js",
    "revision": "4d17d8cf0ca092664536f9db3962a14d"
  },
  {
    "url": "assets/js/128.522456ed.js",
    "revision": "0fb109852109823c5d53edbd3b3afdb4"
  },
  {
    "url": "assets/js/129.eb0f4a89.js",
    "revision": "0d5c22385c87dba58c09bb8d1c9c4696"
  },
  {
    "url": "assets/js/13.fb70cafb.js",
    "revision": "ce5d650573e7d7b833a05b8bef72a25f"
  },
  {
    "url": "assets/js/130.0310f7df.js",
    "revision": "37287ac4908da143a4c741142844c099"
  },
  {
    "url": "assets/js/131.07be65b9.js",
    "revision": "fa71bc732af036ae9dbbc8689b803906"
  },
  {
    "url": "assets/js/132.3d699d58.js",
    "revision": "2117150a6e14bd2a7bb3c88605cf344e"
  },
  {
    "url": "assets/js/133.3fca77b1.js",
    "revision": "5027eb3c8647c4c81bae6ca5dca4ada2"
  },
  {
    "url": "assets/js/134.6d25177d.js",
    "revision": "cb3f680a28f47ce7bf7f1da8e0783244"
  },
  {
    "url": "assets/js/135.20917c95.js",
    "revision": "ccf53f4e09f3b84d6e24771c68915bd5"
  },
  {
    "url": "assets/js/136.8ed56e03.js",
    "revision": "c7efafbc46150c839ad04be32963ac03"
  },
  {
    "url": "assets/js/137.1248471c.js",
    "revision": "e1aa789c4530ec056069477db63c3fbc"
  },
  {
    "url": "assets/js/138.badc9d12.js",
    "revision": "cac2eb217243b49e09085c558c60bdfc"
  },
  {
    "url": "assets/js/139.4094788d.js",
    "revision": "9a158df1c2160a885aa9cdae74d57003"
  },
  {
    "url": "assets/js/14.c0552a00.js",
    "revision": "111e2be51b1ec895fa916eb0faa7ff7f"
  },
  {
    "url": "assets/js/140.799ffd7e.js",
    "revision": "6df400d7595bb96deb6ae71daabfffc8"
  },
  {
    "url": "assets/js/141.48a23b62.js",
    "revision": "4bcd9a4458fe7a4a46c86cf8b0a8714f"
  },
  {
    "url": "assets/js/142.9fb8dac2.js",
    "revision": "a885ca69da047bccd4a3034f1b37a499"
  },
  {
    "url": "assets/js/143.c8c5b73e.js",
    "revision": "fd114021f6c1ad616f493f31ba46cbcc"
  },
  {
    "url": "assets/js/144.641a8f67.js",
    "revision": "f986c931639ed77ea2a813b721c3c078"
  },
  {
    "url": "assets/js/145.5daf9afa.js",
    "revision": "e36a2891ef5d778cd7d3d2b60602e6e1"
  },
  {
    "url": "assets/js/146.1510dba2.js",
    "revision": "9226fca9839a93e56681cab4c3c7f0b0"
  },
  {
    "url": "assets/js/147.28c2f76f.js",
    "revision": "79f499fef1b561c24a6de65048049ade"
  },
  {
    "url": "assets/js/148.54a08804.js",
    "revision": "7163cffb0f59e3e6a2ba5e2d57dbfaff"
  },
  {
    "url": "assets/js/149.a1747c3a.js",
    "revision": "7cdf966a48c41c92c170603a11155aa1"
  },
  {
    "url": "assets/js/15.b49517f1.js",
    "revision": "eb181de58da8906d723cf331ffd75269"
  },
  {
    "url": "assets/js/150.f799ec70.js",
    "revision": "ed272aedfa70a525451581ebe40e725c"
  },
  {
    "url": "assets/js/151.edbbde91.js",
    "revision": "a51d5a99d9efadc52679c8c18928f573"
  },
  {
    "url": "assets/js/152.a6b7eb10.js",
    "revision": "6ce0ada2a5f8485cfc0f1f785beb4541"
  },
  {
    "url": "assets/js/153.fff40c8a.js",
    "revision": "1fc8c9897bf800a5022cec7342ab0b62"
  },
  {
    "url": "assets/js/154.59b828bd.js",
    "revision": "0e2679651b25730a8be787c1b650525e"
  },
  {
    "url": "assets/js/155.7741a472.js",
    "revision": "b5a11444d713521779f90d2e7034f9ad"
  },
  {
    "url": "assets/js/16.71cc698a.js",
    "revision": "ba4023d7ec640d1c8da79ce3ab2e0c16"
  },
  {
    "url": "assets/js/17.f4784ec5.js",
    "revision": "1130dcca9eb440338b4e7861295070b3"
  },
  {
    "url": "assets/js/18.a638ea7f.js",
    "revision": "5469cff0c53eb6c829cf98a0f0c69558"
  },
  {
    "url": "assets/js/19.e978e989.js",
    "revision": "0a6f64e0906007d8f58bc78428303650"
  },
  {
    "url": "assets/js/2.9c32d6ee.js",
    "revision": "e3096c8871e7402c373b0ffd4e3e7c9a"
  },
  {
    "url": "assets/js/20.a93714b7.js",
    "revision": "df9351d9461663a4794b84ebaf458d3b"
  },
  {
    "url": "assets/js/21.5f357deb.js",
    "revision": "f610bcfe69364319490a6653c01dbab9"
  },
  {
    "url": "assets/js/22.a8994c9c.js",
    "revision": "4133746d4f99735743172650af2438b2"
  },
  {
    "url": "assets/js/23.775ce537.js",
    "revision": "e50a00480c8576a38417dea354731ad9"
  },
  {
    "url": "assets/js/24.15e55c8d.js",
    "revision": "90cc50da470a6c3df70a75141c084320"
  },
  {
    "url": "assets/js/25.4fc9833e.js",
    "revision": "770ec0c980d94b80c4ca92174c3c5c2f"
  },
  {
    "url": "assets/js/26.c6e20504.js",
    "revision": "fd92dd1a1cc388067c1ee74e8e4ec5a4"
  },
  {
    "url": "assets/js/27.49664f15.js",
    "revision": "ba819e6e21d25f8af083770c3212b03b"
  },
  {
    "url": "assets/js/28.f7d211f2.js",
    "revision": "18cf23a9418c0eada5b53d51c6c9e9b4"
  },
  {
    "url": "assets/js/29.9630473e.js",
    "revision": "d6afb89efbf3342f2e9eb6b8c8bcef90"
  },
  {
    "url": "assets/js/3.d7059bcd.js",
    "revision": "4abe54b4c6ba8ae9d6137044497f3c67"
  },
  {
    "url": "assets/js/30.87d600e2.js",
    "revision": "f5ae852cacb350505e3111c20f431a9a"
  },
  {
    "url": "assets/js/31.c35e2f89.js",
    "revision": "fabba2b9a21c1f2ecffcd2e0c0db9105"
  },
  {
    "url": "assets/js/32.7dac83e3.js",
    "revision": "e82db8b285745cfd376bd721cce20af0"
  },
  {
    "url": "assets/js/33.add7e3ec.js",
    "revision": "0c315a5f2ba93515dbfbedcb0b1b6af9"
  },
  {
    "url": "assets/js/34.1e649bd5.js",
    "revision": "3351e351f854f0de1d5bddb852c58dc4"
  },
  {
    "url": "assets/js/35.41b03c43.js",
    "revision": "e703818f49f02f77d3672b0dc27ca61a"
  },
  {
    "url": "assets/js/36.4f1c23ac.js",
    "revision": "7deb19e639bdfb4e9ca2afaa2e774718"
  },
  {
    "url": "assets/js/37.d4c5ba80.js",
    "revision": "34953147b3ad166c3823e460f6a4ecf2"
  },
  {
    "url": "assets/js/38.0d8720ab.js",
    "revision": "85483aa79924f1e0c3675f44fa63ffce"
  },
  {
    "url": "assets/js/39.e0a856ff.js",
    "revision": "3e0a24e156991c8cf8fda8731036ef35"
  },
  {
    "url": "assets/js/4.1627638d.js",
    "revision": "44d9565a72101fea8c021b4c61e772c5"
  },
  {
    "url": "assets/js/40.fa65c73d.js",
    "revision": "28a4b9820d743ccf6eec1d3ec42fc954"
  },
  {
    "url": "assets/js/41.4a437151.js",
    "revision": "7fa9533df0b900efa66dbec180353f69"
  },
  {
    "url": "assets/js/42.524ef463.js",
    "revision": "73e3664fb956056b4041500144315fdd"
  },
  {
    "url": "assets/js/43.b3efaf30.js",
    "revision": "f98f5fede88bb3afbcf90f6208be3f54"
  },
  {
    "url": "assets/js/44.c5bc3214.js",
    "revision": "8efd6f6ce1530ef792429f061ad63318"
  },
  {
    "url": "assets/js/45.1ddc1069.js",
    "revision": "faa7d5803dcf10af979ceff2fc7e628d"
  },
  {
    "url": "assets/js/46.1c3d6f72.js",
    "revision": "6bf75225048fb1238fbd708c2ffc1c1f"
  },
  {
    "url": "assets/js/47.6bbc8bbc.js",
    "revision": "58a16c59acc5724b39e1f75bdfa02530"
  },
  {
    "url": "assets/js/48.76cdd5d2.js",
    "revision": "5185b525bb68dd5da4e260d55e91c925"
  },
  {
    "url": "assets/js/49.2085d91d.js",
    "revision": "6a3151c22e925cc432de9c2081849aef"
  },
  {
    "url": "assets/js/5.900af00c.js",
    "revision": "21b7e0dead803dbd890c347042de6dbe"
  },
  {
    "url": "assets/js/50.88fc108b.js",
    "revision": "75c2c58e7e95f4374c00c50f1a34ac82"
  },
  {
    "url": "assets/js/51.324dc6e0.js",
    "revision": "570dd2e5f1e8f77e5911fad52b39269b"
  },
  {
    "url": "assets/js/52.444c9cbd.js",
    "revision": "0ddb2c722ba6cb8b8806fee7e37cc83a"
  },
  {
    "url": "assets/js/53.150f508c.js",
    "revision": "2b214589fc934c73081ce37eedf9e0ee"
  },
  {
    "url": "assets/js/54.a1dd91cd.js",
    "revision": "0c239277316a9ac434539127a68456f9"
  },
  {
    "url": "assets/js/55.c56eaa6e.js",
    "revision": "f667720b8f17724cf0b4b3a3e5af9c78"
  },
  {
    "url": "assets/js/56.78dd8ea7.js",
    "revision": "f1901c5fdf2ed24d99c34c70969df431"
  },
  {
    "url": "assets/js/57.bc4c4566.js",
    "revision": "4232e2599a4a7d0635c03c36ed8db13a"
  },
  {
    "url": "assets/js/58.871e741c.js",
    "revision": "89e08c6e4347ea51b39c8ae2def4f071"
  },
  {
    "url": "assets/js/59.7aa29408.js",
    "revision": "3c415caeec361683e710f16f15ba121a"
  },
  {
    "url": "assets/js/6.e98a72b5.js",
    "revision": "dea845174458b098de6280c2d59266eb"
  },
  {
    "url": "assets/js/60.c0692988.js",
    "revision": "824d2cdd9b5f7ad80ed171bb49d8d3b8"
  },
  {
    "url": "assets/js/61.6f754b41.js",
    "revision": "249aaccad88cb0208b33632f1d965f1f"
  },
  {
    "url": "assets/js/62.37f2d7cb.js",
    "revision": "649629b04b614df597fbe00a1e69cbb7"
  },
  {
    "url": "assets/js/63.252aa936.js",
    "revision": "07ac6c53be21a28ebf77647ae45ef8ce"
  },
  {
    "url": "assets/js/64.13789a77.js",
    "revision": "fd806f0bb3e947b8bd09879d87f098ff"
  },
  {
    "url": "assets/js/65.49b2d72d.js",
    "revision": "1c38246d1573263ad7943c7ed7ed0584"
  },
  {
    "url": "assets/js/66.16ffa500.js",
    "revision": "1d9093c548e27041e5ed368f131eb189"
  },
  {
    "url": "assets/js/67.38962fa5.js",
    "revision": "ce9892defabb90418ec7be535ee2cd52"
  },
  {
    "url": "assets/js/68.63036922.js",
    "revision": "b2cec9a35737ebbec7190261ee128fb2"
  },
  {
    "url": "assets/js/69.8ad54625.js",
    "revision": "13fb1fe427df4350083f5f356380090b"
  },
  {
    "url": "assets/js/7.ab93e64f.js",
    "revision": "6807c99a398f9a2473af22d8883b002e"
  },
  {
    "url": "assets/js/70.a0d73a91.js",
    "revision": "34b4b12b4969904d72cc9e0d9d929083"
  },
  {
    "url": "assets/js/71.d15b341b.js",
    "revision": "f7bf4a1e3de095231faf8feb7a29ae58"
  },
  {
    "url": "assets/js/72.cc2a2438.js",
    "revision": "47fc5a6ced3549148d77153568fef522"
  },
  {
    "url": "assets/js/73.2d849b97.js",
    "revision": "193d9189695d8f50c38c4c2a6926fa11"
  },
  {
    "url": "assets/js/74.10e43e50.js",
    "revision": "ee2f79f62e20cf6164a463fce909a5a4"
  },
  {
    "url": "assets/js/75.2744e58f.js",
    "revision": "41514b5c9ef1d76f740f46001ec4a719"
  },
  {
    "url": "assets/js/76.7be28510.js",
    "revision": "54193e2db510c31a8b1cae6e2dc3c6b2"
  },
  {
    "url": "assets/js/77.05b76001.js",
    "revision": "80a4693179aca1610dfe77ce4abdd451"
  },
  {
    "url": "assets/js/78.1c3cec65.js",
    "revision": "f75bce573929870c15d7d561a2c6dff0"
  },
  {
    "url": "assets/js/79.b23290d0.js",
    "revision": "90c23552e1628df507317c200fb60cbc"
  },
  {
    "url": "assets/js/8.143a3751.js",
    "revision": "fd4422b990ddcf6e974a0a27d3110d4d"
  },
  {
    "url": "assets/js/80.8571f013.js",
    "revision": "485b12c3c4a0a439f762c68fd9cb3a2b"
  },
  {
    "url": "assets/js/81.8fbdd0f2.js",
    "revision": "f2d1dce03bb3f18121e1a0280ecc80f9"
  },
  {
    "url": "assets/js/82.6f21f3d1.js",
    "revision": "f96e54575f4ea53f505c38c71bd1d0a6"
  },
  {
    "url": "assets/js/83.8a746e9e.js",
    "revision": "a810028d8062f54f49ec1c6b3556fa19"
  },
  {
    "url": "assets/js/84.67f0b25a.js",
    "revision": "d56f78b69072cd0e72c39d591cb235c1"
  },
  {
    "url": "assets/js/85.aec475c2.js",
    "revision": "2424d3e7922fd828a251065c8401a1c4"
  },
  {
    "url": "assets/js/86.5daddde6.js",
    "revision": "606050aa9c75158a161dcdc564f63093"
  },
  {
    "url": "assets/js/87.c58c694a.js",
    "revision": "dbd343cf4e29dc9e049ce8a15a256b09"
  },
  {
    "url": "assets/js/88.c1490c5a.js",
    "revision": "3be39594f453386ce61c05bb25a73253"
  },
  {
    "url": "assets/js/89.ad7fdae4.js",
    "revision": "e4a2a23e5cc83f2bb78b8a88c4d95173"
  },
  {
    "url": "assets/js/9.5b58cce9.js",
    "revision": "521f384312bece0cc1b43d24d1bdf3c2"
  },
  {
    "url": "assets/js/90.f98a4296.js",
    "revision": "e365601abff93dede3d4b8bb1ff792c0"
  },
  {
    "url": "assets/js/91.d8c68ea8.js",
    "revision": "8dd504a8588843c241ecb3835665e6ae"
  },
  {
    "url": "assets/js/92.83ce780a.js",
    "revision": "7bf9b83258326821c1d877355ee091a9"
  },
  {
    "url": "assets/js/93.cf241a18.js",
    "revision": "e8489776c075edfd068083963a958d4a"
  },
  {
    "url": "assets/js/94.e8fe2ddc.js",
    "revision": "2e6de572f161cd69d2c6a7da28795daf"
  },
  {
    "url": "assets/js/95.a806689a.js",
    "revision": "c159a19f545015d6fa02810cb78baa78"
  },
  {
    "url": "assets/js/96.ccf77164.js",
    "revision": "741a8c1870816de8e0eeb8734ee8b358"
  },
  {
    "url": "assets/js/97.258c6533.js",
    "revision": "865cbed0f75ce0ddf0a05838678a5ddd"
  },
  {
    "url": "assets/js/98.7c0173f8.js",
    "revision": "b75811b4c06a248d874ec1a941c351ed"
  },
  {
    "url": "assets/js/99.780a6144.js",
    "revision": "965215ca48ffdfadb9a5e5db18a4ec59"
  },
  {
    "url": "assets/js/app.1de406c1.js",
    "revision": "0dda273eba2327d6d753bf46e075f74e"
  },
  {
    "url": "common/architecture.html",
    "revision": "2478bac8f9f9989515f4c0233be36955"
  },
  {
    "url": "common/crawl.html",
    "revision": "c587695b94b38b85636b834cae416044"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "54086d21c640dfc038a5371ebc96df47"
  },
  {
    "url": "common/document.html",
    "revision": "e1273ce4929346a1bb1415018320b38f"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "9c4ed0e8f996324e92f4927777085fcc"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "26e7049811ab803b0a6d1b40eb4591c6"
  },
  {
    "url": "common/index.html",
    "revision": "0508c12eccae0ed4fa5f50b89f3815a4"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "5d405b7077a80982ab980e559167fac5"
  },
  {
    "url": "common/realtime.html",
    "revision": "f7f9f42b0973afbbac14f4770276c6ea"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "d52ba6e50f031f01c51eb7e30bebb256"
  },
  {
    "url": "common/refactor.html",
    "revision": "0cf068e6cd88de423ab94aae29c9290c"
  },
  {
    "url": "common/restful.html",
    "revision": "5f16b7bdffca582a5d33faf1452538b8"
  },
  {
    "url": "common/seo.html",
    "revision": "903847151bbb9b1a8d5c8b9388f1cfa3"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "6e2518cdef01bb1b5783282522ef965a"
  },
  {
    "url": "css/tricks.html",
    "revision": "648e4b46d7e02e3a9b1d966ca83cb134"
  },
  {
    "url": "db/architect.html",
    "revision": "fbe8b8f7f63283d627cff7703e8494d7"
  },
  {
    "url": "db/cassandra.html",
    "revision": "33386fe1c5c2156500d6ad1bfcc216ee"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "78f36bb5661ffcb22630b1cd95a55958"
  },
  {
    "url": "db/nosql.html",
    "revision": "c17a9a2c4fb91b339eb2bcd283ac7e2b"
  },
  {
    "url": "db/optimize.html",
    "revision": "2bb6aaa5781642db3176fb90b73897f4"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "5c4b398f88f3b80a2c7c55f9266f7dec"
  },
  {
    "url": "db/postgre.html",
    "revision": "0c6684b01e6c2a50e7e07ac548bd9797"
  },
  {
    "url": "index.html",
    "revision": "0903e67807ebb773e71dda870db2aa8d"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "a7fa3b9a6bdc3d4d7d6480936276f14e"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "e083d10d5994866ea8a2586543c8d84a"
  },
  {
    "url": "javascript/closure.html",
    "revision": "7cb7bf44658c4eea1669da1dfd06c54d"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "4958d96fa8c50b6a0435ec4648cbb84b"
  },
  {
    "url": "javascript/functor.html",
    "revision": "168f8c35d31c980839bae7a770f6d519"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "f8e193a0c5896d44fd08431579992661"
  },
  {
    "url": "javascript/react.html",
    "revision": "adec24c1d547673482896b9c8641db71"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "2fab4a8f7065f3473cd65353252e62d5"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "5050aec1cbecc903206e9027af2a16b1"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "f10bfadee6afdc6a8a646e8317a38b66"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "2bc70272ffa1a730acf837676a2b74cc"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "1075ede69fb05973463b826891bb73eb"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "2df6d6f345c3e57280fead96f114683c"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "fa788a98712d5ad6015e4a8a2b76c9d0"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "1dd38e9769cbfe6cb4865bda4334905e"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "1b90c30dc1039b5ca36b82f6afd9ba41"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "b4a3c8f942e52f831af69779c772b459"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "02bb6056aa2088c20d5627d3bfa129c9"
  },
  {
    "url": "kungfu/js/vue_react.html",
    "revision": "7324a93a87b7e5dcd9196f469be078a0"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "e6abfa3194db286b4ac44e53ab9ba1f6"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "43631af40517c1cae984ae86f0b93d58"
  },
  {
    "url": "kungfu/template.html",
    "revision": "a17dec4c769e34533f11824d2db9929f"
  },
  {
    "url": "node/env.html",
    "revision": "a2dc1d4629a7283c1d7a2fa49662b859"
  },
  {
    "url": "node/index.html",
    "revision": "76dd562459525d1ed3c831764f478b25"
  },
  {
    "url": "node/n.html",
    "revision": "35958c3463f1cb426416fdc70a201c72"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "6cffa70100622d1b702d19679574e984"
  },
  {
    "url": "node/npm.html",
    "revision": "30911110a78cbcc9f5519b2747acc0ef"
  },
  {
    "url": "node/sequelize.html",
    "revision": "ed77990026421c7548d119c767676c00"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "69656fadf6c4be58d6508e7c6f224d1e"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "6b3a2a98a94a9ba2df3b2f083528d016"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "fa04819f15e945432e5b7d468fbc6ff6"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "5f7b70df3c0852ae0939d4123945abc3"
  },
  {
    "url": "php/clean/di.html",
    "revision": "8ffe94319cbd5b509896fbb30722b203"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "b032750af3be4228a4d3022c0870a4c0"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "06aa056975d7016897e6ab3ef879a973"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "f5841e0857fa512fc4bda97379ddee04"
  },
  {
    "url": "php/clean/index.html",
    "revision": "cc9e6082a548512b97a208b3ed69aac6"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "8c621063b2ace0e448b98f4dd25b7946"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "ad82912e1f922552003be2e8c75b8f2b"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "d98d64746a357953167f04624bdfc1fa"
  },
  {
    "url": "php/composer.html",
    "revision": "5c5206e92ea0353b3df1ba516dbd5d8c"
  },
  {
    "url": "php/crunz.html",
    "revision": "3928d62a7f5ffc90949f87f83ea67f3d"
  },
  {
    "url": "php/laravel.html",
    "revision": "321ba0aafb0a0deda09e20ab3bdfb7aa"
  },
  {
    "url": "php/magic.html",
    "revision": "d19010a254ff5878dd29eabf17660d88"
  },
  {
    "url": "php/notes.html",
    "revision": "68cfb54050a7ce6cb020a2e5b4e6ed1d"
  },
  {
    "url": "php/oop.html",
    "revision": "696ee3436b535a46142ca6890acbb73d"
  },
  {
    "url": "php/php7.html",
    "revision": "09e58ec56417f0b909d24c3cf08106ab"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "3954dccb933bcb798aa8f62af726eb38"
  },
  {
    "url": "php/reflection.html",
    "revision": "51f71401a4a37d905f4cf3e7cb5bb9fc"
  },
  {
    "url": "php/tricks.html",
    "revision": "f5c4462900d766cc112e4a61fbe40e28"
  },
  {
    "url": "php/wordpress.html",
    "revision": "0fdd735abaf8f72e46be096f37aceec7"
  },
  {
    "url": "quotes.html",
    "revision": "b75b20e06928fe93ddfdb3d370ea1c54"
  },
  {
    "url": "refactor/notes.html",
    "revision": "def591b7290f83f193fed218c0557d05"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "ea5820e887b2fbb9670bd87dde09c9d7"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "441be108cc39d9e8c8fb6376a28f5fa8"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "8dba626471af96722887bd9f9d8af575"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "4477207c7f857d61b5699e82fc134644"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "f876f274f3997d2393d68375957a3afc"
  },
  {
    "url": "snippets/jest.html",
    "revision": "20b12bf1d946d7c5fd979b1488087626"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "669de8282ab96dbf5a9077f385b9dafa"
  },
  {
    "url": "snippets/patterns.html",
    "revision": "f255a3854ac0c3c6905b28b99e034fc3"
  },
  {
    "url": "snippets/regex.html",
    "revision": "566be4f10b21167f1e62b6cc72e092a8"
  },
  {
    "url": "terms/97things4dev.html",
    "revision": "07b20c77b9f5d08e0e25d1c233e97b8e"
  },
  {
    "url": "terms/architecture.html",
    "revision": "7d923566d0a561142c0a474bf07d5b5f"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "57d567ab119a34052fbe51c9f9b6f3b7"
  },
  {
    "url": "terms/ddd.html",
    "revision": "5e2ebca1dca3ab0d5a257c9cac9a4298"
  },
  {
    "url": "terms/di.html",
    "revision": "3021cc25cdb7c6a2f6f1d3b236094d91"
  },
  {
    "url": "terms/javascript.html",
    "revision": "2724b99a01a111da44080f9ba242ec9e"
  },
  {
    "url": "terms/oop.html",
    "revision": "7411f00cda50154f640a9bfa84790289"
  },
  {
    "url": "terms/principles.html",
    "revision": "467578cf1ca0e59028a554660f3add0d"
  },
  {
    "url": "terms/rules.html",
    "revision": "7925f010d6b2340677d2fbe3cee635e4"
  },
  {
    "url": "terms/testing.html",
    "revision": "20151dcda38ae3eeffde2573df999783"
  },
  {
    "url": "tools/chrome.html",
    "revision": "d1ad08fbdee5a330b959ec4d8ad2b078"
  },
  {
    "url": "tools/docker.html",
    "revision": "9a7c3217740d8d9e79cc74f34a22885f"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "79215ba3699be0d5b2c9733de5dcf4a8"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "f89da66d82736489df0e87b6b492dfc4"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "e0b9ce4d36765cbc2a36207985e0b678"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "4326f3dcd980ac5338d0ad248ad0ad6d"
  },
  {
    "url": "tools/redis.html",
    "revision": "83bc213be6542958e882ebb6dc9cb98e"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "63ca596540593cb44041e159e56a57ba"
  },
  {
    "url": "tools/vscode.html",
    "revision": "4dc25705bd4ffee000730460a89b523a"
  },
  {
    "url": "tricks/compare.html",
    "revision": "717e5f6371b48d59be123db6229c6214"
  },
  {
    "url": "tricks/git.html",
    "revision": "a0c8a8aade105543ef0f873c8a669ce5"
  },
  {
    "url": "tricks/linux.html",
    "revision": "9f29052a6fa9117cabb2e6ce33588345"
  },
  {
    "url": "tricks/mac.html",
    "revision": "e0ef5058cb87ff25f9ab5e006554f55f"
  },
  {
    "url": "tricks/misc.html",
    "revision": "b2509e683a7ec14d9a61470fc7840edf"
  },
  {
    "url": "tricks/setup.html",
    "revision": "fd434181a47052f4bfae74aff0ca6570"
  },
  {
    "url": "vue/communication.html",
    "revision": "6d987db6de6fb6c11f7b09e38d01a2cf"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "90c4b2c121304d4b7986f70622f979b0"
  },
  {
    "url": "vue/events.html",
    "revision": "a21248a27cf9e7582a039036c64d5ba2"
  },
  {
    "url": "vue/references.html",
    "revision": "b6eb0053d1c0abcf2a898268bfbb62cd"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "73a5dbd98c9bd2fa346db2046986f00d"
  },
  {
    "url": "vue/test.html",
    "revision": "2b5f010f8a5571da4e40a27eb9076f29"
  },
  {
    "url": "vue/tricks.html",
    "revision": "f041d0b505897e412db9a7fc833be009"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "29e67fa7ce810afe7b6aa8859f0c0e99"
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
