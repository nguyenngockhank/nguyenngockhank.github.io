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
    "revision": "861e7c1e3d6b3440b3c8c9c0eb2eea80"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "c87d5b7dadb9d6825799acb065a25c00"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "75fde0f6900e57f7dc23e1f2de354fb9"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "510f152ccbb6def0a536f9b11c179d27"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "3f57c2e5a0c12731bb48ba081ac46495"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "0a2f97c79c2b4d7a8419abc97bc4cc30"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "7f3ef99b3753651bcbb50abb43eb55e4"
  },
  {
    "url": "algorithm/string.html",
    "revision": "65727678b24a9f1e367150ec8796f750"
  },
  {
    "url": "architect/authenication.html",
    "revision": "5f9e1b6ca9c04210d47d073e337c1956"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "8d7b922ebf9387db6620938b5b7e3e5e"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "376dd7d93a5485bb873305572155c370"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "366f0cd0e1d8be99fdd488eb12491598"
  },
  {
    "url": "architect/ddd.html",
    "revision": "4f392fdd1e488a1d153ee288f8cd465b"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "0782b30ee1d2949364d5f8f7738722e5"
  },
  {
    "url": "architect/ebi.html",
    "revision": "85d78a039bec3d3a4a3ad005b6c5d74f"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "69d5e2fe65dfc6ff72fbc601bbca5043"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "d55e801bbe5355653925f3062d834d95"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "c1301392aaae4dd317250bd71b128c3b"
  },
  {
    "url": "architect/index.html",
    "revision": "5fe146c17fd23cf6f5319d8eb777ab27"
  },
  {
    "url": "architect/mutex.html",
    "revision": "e34f31bb35925911056faa12f052ea19"
  },
  {
    "url": "architect/notes.html",
    "revision": "f958c1ccf6c977e99ede4eb84e13db6a"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "7388df934b750bad8515ef89dbe2d050"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "fb7947ec3c84af9cc71a83fe361feb9c"
  },
  {
    "url": "architect/refs.html",
    "revision": "ac58b48822234820b5e6c3ffe6c7471c"
  },
  {
    "url": "architect/soa.html",
    "revision": "dab9b581747256d6f8072962c25f3357"
  },
  {
    "url": "architect/spa.html",
    "revision": "aa4dc8c4316307014ef236c302b9dab7"
  },
  {
    "url": "architect/terms.html",
    "revision": "9af6d46871840e822a4bcc7205270561"
  },
  {
    "url": "architect/use-case.html",
    "revision": "f0343ec2444acabff6cda0b35c6333db"
  },
  {
    "url": "architect/webservice.html",
    "revision": "9cb837ecb60d1bd6358852c2380a5282"
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
    "url": "assets/js/100.8bb8ca04.js",
    "revision": "f7cd77c81e7d2bc1cd2cb97d540b9cdc"
  },
  {
    "url": "assets/js/101.ef0c5b95.js",
    "revision": "a5d4ebecfbb121ecd485b1078e58a3bb"
  },
  {
    "url": "assets/js/102.16e92925.js",
    "revision": "54e55c8f4a4fbddd78fedf2aa8361688"
  },
  {
    "url": "assets/js/103.b0d67d93.js",
    "revision": "d423fbeb2979a360c6dd30a5546d6981"
  },
  {
    "url": "assets/js/104.ab4e92fe.js",
    "revision": "adb1f198488a43d51456bd5c993a4632"
  },
  {
    "url": "assets/js/105.b6c2825f.js",
    "revision": "0ff4856e76ae7c8251ca7d4217d7d739"
  },
  {
    "url": "assets/js/106.2c1d4488.js",
    "revision": "401ab7b70672a63311d14f2d945190d6"
  },
  {
    "url": "assets/js/107.f3c88f35.js",
    "revision": "80d2ea1bcf0c185ca24602d40504871e"
  },
  {
    "url": "assets/js/108.7152e0b1.js",
    "revision": "b47284c8e2d30a0197eabddcd25a6636"
  },
  {
    "url": "assets/js/109.816e5c6b.js",
    "revision": "1a10fa39decf13ea3d5ec53fa66de7fd"
  },
  {
    "url": "assets/js/11.56af7241.js",
    "revision": "e3ca98f683054b3985a798e554d9b486"
  },
  {
    "url": "assets/js/110.52dbd9af.js",
    "revision": "1da231c8ca34c0e2c9526ed61f357042"
  },
  {
    "url": "assets/js/111.2fca956e.js",
    "revision": "7653419826f0d2e81ab338d97da822d3"
  },
  {
    "url": "assets/js/112.66ee2d57.js",
    "revision": "e60d6a86aee3426588faac8d8c6ae84c"
  },
  {
    "url": "assets/js/113.5e2a6f5f.js",
    "revision": "a55bb5c1c157eaaecb5f3bd11747d21d"
  },
  {
    "url": "assets/js/114.a621b085.js",
    "revision": "24a65706397bca608cda2b9b6ba6349e"
  },
  {
    "url": "assets/js/115.dd653bba.js",
    "revision": "09922e460c38a61e336d912003125911"
  },
  {
    "url": "assets/js/116.150d7177.js",
    "revision": "cb2e3f381a50c5ae57481645780cb9ed"
  },
  {
    "url": "assets/js/117.b6b9778f.js",
    "revision": "cf2bf4783e3ad04a38d9b48b337e2edd"
  },
  {
    "url": "assets/js/118.bf09ec65.js",
    "revision": "07ccc9e829a48c19b3e3116be6543ec3"
  },
  {
    "url": "assets/js/119.aa6efcab.js",
    "revision": "669c5f89612400e41d3b6926151d9d65"
  },
  {
    "url": "assets/js/12.63e00f26.js",
    "revision": "44444cf4c50c642c3508ca9e67642331"
  },
  {
    "url": "assets/js/120.61ece3d8.js",
    "revision": "d4e4cb4cb86aea737af4aef486cb08ff"
  },
  {
    "url": "assets/js/121.224f737f.js",
    "revision": "1d21c83dc3a6ae39eb333601562cba1f"
  },
  {
    "url": "assets/js/122.0a7c4092.js",
    "revision": "40f18ea7fe3d02445f401f6ff35bdad2"
  },
  {
    "url": "assets/js/123.3d1e01b0.js",
    "revision": "bcddeeeabd0257aad4e824ae231e04a6"
  },
  {
    "url": "assets/js/124.97b4741c.js",
    "revision": "9ed626935a504b7900bb561bae11c05f"
  },
  {
    "url": "assets/js/125.2ed5bc37.js",
    "revision": "13415a76efa8ac89a16279716deaf7fb"
  },
  {
    "url": "assets/js/126.d915cfe0.js",
    "revision": "f8cc0a42e84ab43fbb419591aae0e495"
  },
  {
    "url": "assets/js/127.31807eb5.js",
    "revision": "06bda30cccb365e6f7886eb01cc65ee5"
  },
  {
    "url": "assets/js/128.3023876e.js",
    "revision": "79bdc651f46766be76e98d834fe26736"
  },
  {
    "url": "assets/js/129.4261f129.js",
    "revision": "80619126d0c65b90f7db74d872b7b9d9"
  },
  {
    "url": "assets/js/13.fb70cafb.js",
    "revision": "ce5d650573e7d7b833a05b8bef72a25f"
  },
  {
    "url": "assets/js/130.10b9fa32.js",
    "revision": "6021211c175b89819c4e839085812555"
  },
  {
    "url": "assets/js/131.79d333db.js",
    "revision": "4825992394535e4f3ff85588f80d9de0"
  },
  {
    "url": "assets/js/132.e96eac45.js",
    "revision": "01a5ecd1080ceb708dfcc410bba33b23"
  },
  {
    "url": "assets/js/133.dbf98224.js",
    "revision": "ce54b86b220158720b5c73782b3f0201"
  },
  {
    "url": "assets/js/134.ad3008ed.js",
    "revision": "8dabb5530cec7839e9de66f50d918ebb"
  },
  {
    "url": "assets/js/135.456f6f7e.js",
    "revision": "e9eecc059a3d195cb43875f79b8b1817"
  },
  {
    "url": "assets/js/136.cab5532d.js",
    "revision": "540cf2a5a8e49a5a46d65cc2cb86860d"
  },
  {
    "url": "assets/js/137.512bb4d5.js",
    "revision": "7130e77425fc1e1b132371c8df9def6b"
  },
  {
    "url": "assets/js/138.7a9f573f.js",
    "revision": "4b634555ef63b30f4414972b988600b9"
  },
  {
    "url": "assets/js/139.ff3e6b1d.js",
    "revision": "e5bb81625eed38eb6a08c5387f386cae"
  },
  {
    "url": "assets/js/14.7b736f84.js",
    "revision": "31c469686b2c376d9c1b4c32d2eff968"
  },
  {
    "url": "assets/js/140.9cd9ab32.js",
    "revision": "a2c9ab8c5666c30eaf0aa444caa3cafc"
  },
  {
    "url": "assets/js/141.942eaf44.js",
    "revision": "5d87b14bdcf89ed33b59e6039e7e36fe"
  },
  {
    "url": "assets/js/142.1e7db84e.js",
    "revision": "802e5d562c6cd7e88505f0cff8644e79"
  },
  {
    "url": "assets/js/143.6d8b977a.js",
    "revision": "2ba209f8b34a8d3a06de695990bcb438"
  },
  {
    "url": "assets/js/144.7f7f38d7.js",
    "revision": "4c51b6959f7612c5ee57d777d9ec1703"
  },
  {
    "url": "assets/js/145.308668e3.js",
    "revision": "ac4956d0fcc1d23330a1e80f048127bc"
  },
  {
    "url": "assets/js/146.0a2eabbe.js",
    "revision": "34c82c7844e0e2c6940e02f21857d94b"
  },
  {
    "url": "assets/js/147.e3735321.js",
    "revision": "89b1b323b963fc189ae33d391d6bec69"
  },
  {
    "url": "assets/js/148.c3e1c3e2.js",
    "revision": "fdbb8c53036d4cdc0420bec13462edea"
  },
  {
    "url": "assets/js/149.c14070ec.js",
    "revision": "0694ca3ba3cfd9a3b393a24daaa50b1c"
  },
  {
    "url": "assets/js/15.b49517f1.js",
    "revision": "eb181de58da8906d723cf331ffd75269"
  },
  {
    "url": "assets/js/150.0da56a74.js",
    "revision": "78c53dc2c323683eb3232cfc4ee2b332"
  },
  {
    "url": "assets/js/151.3b72e5bd.js",
    "revision": "5f59c23615aa59c592cc1805d8146ffc"
  },
  {
    "url": "assets/js/152.76698305.js",
    "revision": "21b0bf5ea6f7435ec145fd770ff342f9"
  },
  {
    "url": "assets/js/153.c69bfac0.js",
    "revision": "a7114f01ac10087178068522baf6dc98"
  },
  {
    "url": "assets/js/154.2706f056.js",
    "revision": "bf06bd337a0a1336581c8f2bfbadc400"
  },
  {
    "url": "assets/js/155.91161ae3.js",
    "revision": "818383c21e4a35f80d8b317dd38414be"
  },
  {
    "url": "assets/js/156.5d3bff6e.js",
    "revision": "381f96561c95273c7f7ce0c65cabd180"
  },
  {
    "url": "assets/js/157.db298c73.js",
    "revision": "258fb9c1e197d6b07db92d8a082c541b"
  },
  {
    "url": "assets/js/158.d55ec5f8.js",
    "revision": "16959418524ce0253fce6d89d8b69f4f"
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
    "url": "assets/js/18.2c772aa0.js",
    "revision": "2fdfa617366dad1f56591f6e3505297f"
  },
  {
    "url": "assets/js/19.d6d8c6dc.js",
    "revision": "451e8ccf2e952da113e3122955da4818"
  },
  {
    "url": "assets/js/2.9c32d6ee.js",
    "revision": "e3096c8871e7402c373b0ffd4e3e7c9a"
  },
  {
    "url": "assets/js/20.d7a53f19.js",
    "revision": "066832dc9e3d5c95e9be6c921e83b6a7"
  },
  {
    "url": "assets/js/21.b414e85a.js",
    "revision": "5a2f01dcd718e523c8c289bc80049e13"
  },
  {
    "url": "assets/js/22.a2077470.js",
    "revision": "e25ef37ea4e64700d7e5c0ae2a3f3cd2"
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
    "url": "assets/js/27.99c3cdb7.js",
    "revision": "d57505037b23ed5595de253d9c14bb77"
  },
  {
    "url": "assets/js/28.d2ffab7c.js",
    "revision": "12e05f2bf89046ca603022421c62bb39"
  },
  {
    "url": "assets/js/29.a8aa454d.js",
    "revision": "25d6310e9b32cdeb552b00e84415f2bf"
  },
  {
    "url": "assets/js/3.d7059bcd.js",
    "revision": "4abe54b4c6ba8ae9d6137044497f3c67"
  },
  {
    "url": "assets/js/30.80cb8a4e.js",
    "revision": "6488377f8452342d015aac06534889dc"
  },
  {
    "url": "assets/js/31.8bf97828.js",
    "revision": "1c6a81372739e453252a2f615db0b574"
  },
  {
    "url": "assets/js/32.5729b58e.js",
    "revision": "57c65e2e9d6892b190800ba130067178"
  },
  {
    "url": "assets/js/33.a2576b6b.js",
    "revision": "80283cd79014aced138081823513c782"
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
    "url": "assets/js/37.7b7516ec.js",
    "revision": "53bfc99ab004e699ff964dc39d367762"
  },
  {
    "url": "assets/js/38.0d8720ab.js",
    "revision": "85483aa79924f1e0c3675f44fa63ffce"
  },
  {
    "url": "assets/js/39.b7bd973a.js",
    "revision": "9d6d10dd466eecef3940b4765e5f398a"
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
    "url": "assets/js/42.e9476855.js",
    "revision": "f3523995cf85c71b2652598f9d7d5cd4"
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
    "url": "assets/js/47.692b91c1.js",
    "revision": "a425fbe2f880f4cd6ea5206dbadbae3c"
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
    "url": "assets/js/55.f4c68cca.js",
    "revision": "c68d7f5aeb463db7726cac8710195090"
  },
  {
    "url": "assets/js/56.f6c61539.js",
    "revision": "55c9a1feef04e9a32728dcf782bcfa8a"
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
    "url": "assets/js/65.5d5a9008.js",
    "revision": "0b905e3054795120b0505ae4c6376605"
  },
  {
    "url": "assets/js/66.725695b1.js",
    "revision": "dd3b3eebca72a5a6d9e1d9d391439a86"
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
    "url": "assets/js/73.6b41431a.js",
    "revision": "d05f1d36c327b96181eea19b94c5afc4"
  },
  {
    "url": "assets/js/74.0422585a.js",
    "revision": "d6b6c278d4971f6c4c612450ea84f05a"
  },
  {
    "url": "assets/js/75.567a4aa8.js",
    "revision": "abf2505b470d49c55adf4606ae17ad68"
  },
  {
    "url": "assets/js/76.98d57f34.js",
    "revision": "14388fff26547a47faf449775ab41b87"
  },
  {
    "url": "assets/js/77.87017d0b.js",
    "revision": "0bde8ff1f2f4a6c676299f30bcc02002"
  },
  {
    "url": "assets/js/78.e0d7139f.js",
    "revision": "12440491b2ad71e26e2c924df32bace3"
  },
  {
    "url": "assets/js/79.a3f39e96.js",
    "revision": "f0fe9d64a38b1e5e00b1269e93fdee46"
  },
  {
    "url": "assets/js/8.93cfe9c2.js",
    "revision": "47d27c911c5a203b6aba8fde06dbf36e"
  },
  {
    "url": "assets/js/80.7a23d90b.js",
    "revision": "f26fa699b056b47e94e1f54e84432d7f"
  },
  {
    "url": "assets/js/81.bd52f4af.js",
    "revision": "9ab4e43080790755a3d20c70cea5ba01"
  },
  {
    "url": "assets/js/82.8b8fd925.js",
    "revision": "b0ebf6d6045c3de6a39cf31b0853c294"
  },
  {
    "url": "assets/js/83.dc8eb0e4.js",
    "revision": "27dd96e65b01633545b0f500ab3ab868"
  },
  {
    "url": "assets/js/84.0676fa9c.js",
    "revision": "6d53358896123621e32bb3dd369bd75f"
  },
  {
    "url": "assets/js/85.41c478ee.js",
    "revision": "fd6edfdd012d5e1716d4228748dc6f82"
  },
  {
    "url": "assets/js/86.b1330adc.js",
    "revision": "aeb21123550d653321520d648b4449c7"
  },
  {
    "url": "assets/js/87.5a82154e.js",
    "revision": "c26d81993862ce57b3dfcb4eea7ae49e"
  },
  {
    "url": "assets/js/88.abf2fc64.js",
    "revision": "a74da520408fef9490d778eb31c66675"
  },
  {
    "url": "assets/js/89.0b0435e7.js",
    "revision": "e78bf75793ab8c6ae22dc526d9e2bc8a"
  },
  {
    "url": "assets/js/9.77d2bd7c.js",
    "revision": "673da11f95cf1c33b189ca847ccd47a5"
  },
  {
    "url": "assets/js/90.6810f9f2.js",
    "revision": "2772d069db3e57174ce8f14f428ec282"
  },
  {
    "url": "assets/js/91.e8bce299.js",
    "revision": "7136a521f02adb8de108274dd87ec3d3"
  },
  {
    "url": "assets/js/92.023edc3e.js",
    "revision": "187ca74d1cb896cdb6485d4f2330983e"
  },
  {
    "url": "assets/js/93.a4f6aaaf.js",
    "revision": "54557a2b7b825371f0fc90114a4edcd5"
  },
  {
    "url": "assets/js/94.cc065b46.js",
    "revision": "07bcc997bfcec86736eac664e6d18153"
  },
  {
    "url": "assets/js/95.4c5b7905.js",
    "revision": "ea75a05a8c00cde4313e8697ddc22593"
  },
  {
    "url": "assets/js/96.4d35b14d.js",
    "revision": "591584179686432107edcd4bb9f4fae1"
  },
  {
    "url": "assets/js/97.b7904e69.js",
    "revision": "1ea0155ad34a5935ca00b2840ce83ece"
  },
  {
    "url": "assets/js/98.d7416254.js",
    "revision": "318d86f9316c60c57c800449db0f488d"
  },
  {
    "url": "assets/js/99.e84275f1.js",
    "revision": "214f8a39aa72e392d7220711972f905d"
  },
  {
    "url": "assets/js/app.eba27ed8.js",
    "revision": "0e812ce2e73c3f06a36e1bb76c17a608"
  },
  {
    "url": "common/architecture.html",
    "revision": "f85ad4c71c17da1f4b956f5620d2106f"
  },
  {
    "url": "common/crawl.html",
    "revision": "527d56a8767860af513258398e7b1e87"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "bd8310bd4c725fd4cf6a24c45b4b5865"
  },
  {
    "url": "common/document.html",
    "revision": "ceebe5bc00524a92a164eadfc028ff45"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "90b199fb9c879b45e9da10d11619581d"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "4cc9ac2b86dc9bd017d6deade32ac195"
  },
  {
    "url": "common/index.html",
    "revision": "65c575f9fb2a9400ef4c5878e3bed380"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "3b74442005b90bd1ec389f2d2ad5ec04"
  },
  {
    "url": "common/realtime.html",
    "revision": "4f284fc7b1a90f6bd5124af1185b7fac"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "63793cfa362ca3c5b540c3ac5871c35a"
  },
  {
    "url": "common/refactor.html",
    "revision": "a3a35752f480fa4b54945ce651f5da6d"
  },
  {
    "url": "common/restful.html",
    "revision": "c9cabb22b6e87319b271c7ce59f8f425"
  },
  {
    "url": "common/seo.html",
    "revision": "ce2b50284052f5e010602c0631ec6ed2"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "8c80f04ca6e7f53ec82722dd1a2f297a"
  },
  {
    "url": "css/tricks.html",
    "revision": "aae7e98192fd9fe14d5f4eec5e8cb51b"
  },
  {
    "url": "db/architect.html",
    "revision": "b93b4d35ca4826b9926416917e3929dd"
  },
  {
    "url": "db/cassandra.html",
    "revision": "373e43d51b674920a7bf37ead2e6bc30"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "a2a2d00ecd243aabca9ecf4b8dcc37f9"
  },
  {
    "url": "db/nosql.html",
    "revision": "f6c0958590bbbc52fbad15773e913ecc"
  },
  {
    "url": "db/optimize.html",
    "revision": "b16c9dfa1547329a73f23784e32193c4"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "a640697ee32da0891c9d820f38b4be3a"
  },
  {
    "url": "db/postgre.html",
    "revision": "637693097b424666bc413f5e06765c1a"
  },
  {
    "url": "index.html",
    "revision": "2e5dad50e1987073d74e07957b1aab19"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "37d5eb4c426ec799b96ef265a9350312"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "b2e296bf052cb00de872ad1f771daea5"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "e2c20fc891ddca415cf910911ed9896c"
  },
  {
    "url": "javascript/closure.html",
    "revision": "04f86738fc76eb47a9ed4db43c8e80b0"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "3890fadb1ed7843f70f362283ae53b7d"
  },
  {
    "url": "javascript/functor.html",
    "revision": "3c62bacb25db6e07e197deb834a5600f"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "5763adaac7bf9a56abdc5b0e96c62983"
  },
  {
    "url": "javascript/react.html",
    "revision": "19d09ca68af577ebab21f9c75aa50409"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "929be239282b52ab4d541c2d082e26f9"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "8bfee7575e5e8c02d1e5193de3b077a5"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "ea9fde11890702b0146a94ab009f3e4f"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "c1ebabd5697394e0de70c3381854e233"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "f2b3b9c1306732864f7ab0b5272c57b8"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "714080aa7366a5a9a7c3812807bc78b3"
  },
  {
    "url": "kungfu/go.html",
    "revision": "dfae1e2e69a472e74cd33a507342ef57"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "334904a721d8427d54fa4735de9e6d5e"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "d768a876c6971970b92c784403ba0dd3"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "c34a141e977ff74da3de734626bc7f12"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "d68c9708137c2f1eeef742e10b0ae49d"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "f68c5ee7802ac500aaed54a0789f45aa"
  },
  {
    "url": "kungfu/js/vue_react.html",
    "revision": "ddec3d9399d2d1ba91c3ffe157b1c811"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "b5a5cc1c638b0fc6f5ab91b85fd54a8e"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "ffbfd370764af1595da62745d3ba3adf"
  },
  {
    "url": "kungfu/template.html",
    "revision": "292c90cdaa0c5bffe54a22204501c944"
  },
  {
    "url": "node/env.html",
    "revision": "ac2ec81bf38f6c26fd68810cd317f5ca"
  },
  {
    "url": "node/index.html",
    "revision": "9751ce6dc2a56f5b53ed92670e9a2589"
  },
  {
    "url": "node/n.html",
    "revision": "6d53a9c27221a7c41bc0838afc110ffa"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "e1762e3a5f2ccbcf0e8d96bc75efd718"
  },
  {
    "url": "node/npm.html",
    "revision": "c191ce2ec5e910232cf9cd4439035f7e"
  },
  {
    "url": "node/sequelize.html",
    "revision": "fe7ab6cbccd8ae74209d5f80948a1da5"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "5eede5b7a191bdf48accddda1fd02e3b"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "ad1e47ea6f4aa0bc7f9b35fc2be2fea2"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "f73aa9be3ada00165502abd31f724d0e"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "ce0b199d8cbb7d78892425c9b3733974"
  },
  {
    "url": "php/clean/di.html",
    "revision": "5810143eb04df0ef4b6dd2ae4852b862"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "a80bdcca91b60d1e9d0e96dfd0466d11"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "d0f78a7b97317fc2d0c943e4b4e5638f"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "beeb74297b99a0d4612e6d71e7f7f266"
  },
  {
    "url": "php/clean/index.html",
    "revision": "91ecba75609d0e6d06fb9e560e377cbb"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "5c6046d159e4769ddde7d29e0b542ece"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "06ab51b3962d0057fa261d0f9268f976"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "f2e3615abb449c30ad0fcc36f8d1f57b"
  },
  {
    "url": "php/composer.html",
    "revision": "1dc7c3b24921bcd6eb539143d1fcb563"
  },
  {
    "url": "php/crunz.html",
    "revision": "949fc289a4c542a94b1c6e6d198017f9"
  },
  {
    "url": "php/laravel.html",
    "revision": "cd23e4ad158886360b2a601051713323"
  },
  {
    "url": "php/magic.html",
    "revision": "e4c56dc17b58b3511aedddc57445f3c9"
  },
  {
    "url": "php/notes.html",
    "revision": "0b817f4d437ae4f8afc51116e14ec2c4"
  },
  {
    "url": "php/oop.html",
    "revision": "e3890a857dc361920da1c6b41ab146c9"
  },
  {
    "url": "php/php7.html",
    "revision": "69b0657e8afdc2829c953e85cd506278"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "fd13911c2d5e08564cd638572beb0213"
  },
  {
    "url": "php/reflection.html",
    "revision": "ae1b48b5b8a5a5ea5b5b7f4a08933965"
  },
  {
    "url": "php/tricks.html",
    "revision": "1e418bbb4935084971059c7543a95fbf"
  },
  {
    "url": "php/wordpress.html",
    "revision": "b418897598006ea32ad607e4255b2f8f"
  },
  {
    "url": "quotes.html",
    "revision": "3b5d9d87cd484357f264160d680f8f73"
  },
  {
    "url": "refactor/notes.html",
    "revision": "c8c141ff7d88707a71bfd0f18af4a919"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "b6497b797562bbc2e54a88bfe7ce57e0"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "6f0e947c908f01710aa5649151e83e69"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "1b31261cac19a1b05b8924a4f0160bf3"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "6c14a402ebfd0e9f73e56e6125012a1e"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "a7a693aa33a5525250c9923596f8652e"
  },
  {
    "url": "snippets/jest.html",
    "revision": "8e8722304b31b901d7e0dfc15525593f"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "185d0130de8b42b47e84868365cdab9f"
  },
  {
    "url": "snippets/patterns.html",
    "revision": "8999607b109b401a0912f7b33a175fce"
  },
  {
    "url": "snippets/regex.html",
    "revision": "cdc9cb1679b793c7ecfd31040fd340d3"
  },
  {
    "url": "terms/97things4dev.html",
    "revision": "7ba1e333f2f6a33bb68e965e0f31a62d"
  },
  {
    "url": "terms/architecture.html",
    "revision": "abf2b74bf8f9a474ac11334345e1475d"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "bf992d6f0f0dbbd55d85c8be3aa4ed74"
  },
  {
    "url": "terms/ddd.html",
    "revision": "3e67c48b1b34e2d99bb02a4f49c0cc16"
  },
  {
    "url": "terms/di.html",
    "revision": "e484bb1f38b611a3e3642b61bb7b0ded"
  },
  {
    "url": "terms/javascript.html",
    "revision": "aa43a7803fb5b62cae12376deb70d1f6"
  },
  {
    "url": "terms/oop.html",
    "revision": "a2bc64e1aaac471301027e2e602a6f29"
  },
  {
    "url": "terms/principles.html",
    "revision": "591f4f69bfb5fcd8d81e31d824437bde"
  },
  {
    "url": "terms/rules.html",
    "revision": "0eab9aa28e13e6646909fa20da2fda0d"
  },
  {
    "url": "terms/testing.html",
    "revision": "a4169a84b244620f0d8cd9d9315e3f30"
  },
  {
    "url": "tools/chrome.html",
    "revision": "41398478b8dc621f5d36dd610f9d71f8"
  },
  {
    "url": "tools/docker.html",
    "revision": "4d3e175df542757292e53603493a0651"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "ed73efaf6f4901a2c8c81be1f81e88c6"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "04a8cd70703a52dc1e99e0a0bffdec3c"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "4bf28840727b5b8b64b9400be5d88618"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "e726e5a82350b80e0ca9588dc34435b6"
  },
  {
    "url": "tools/redis.html",
    "revision": "392937858e749b0ba511f93e9c65bdef"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "b612d551fae08c3c707e5caf6e110d5f"
  },
  {
    "url": "tools/vscode.html",
    "revision": "3cc73330a7eaee2413d81c40613b619e"
  },
  {
    "url": "tools/webpack.html",
    "revision": "7a79b6cde08a09da762867175417d8b3"
  },
  {
    "url": "tricks/compare.html",
    "revision": "4f7b60c1b008d3b3e21534f07534d057"
  },
  {
    "url": "tricks/git.html",
    "revision": "97cf607c1d19f937a7ab216fb772d835"
  },
  {
    "url": "tricks/linux.html",
    "revision": "e5e3c98904feedd4ae9449134185a671"
  },
  {
    "url": "tricks/mac.html",
    "revision": "38ba5dc52506189d0c233d791895f820"
  },
  {
    "url": "tricks/misc.html",
    "revision": "c286790261ddfcb8776a0974d7772f5f"
  },
  {
    "url": "tricks/setup.html",
    "revision": "fc85c1357fa57c3f644f7070ab2e4452"
  },
  {
    "url": "vue/communication.html",
    "revision": "1e55b936d807656c5fab91324ecced2a"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "7f83f0d3c20100b64dc1e3508432933f"
  },
  {
    "url": "vue/events.html",
    "revision": "c142b1577c6f32dc54700413e2a59c73"
  },
  {
    "url": "vue/references.html",
    "revision": "a08a6c0920d0d5563c73e31b2023fe84"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "6d9f3d77d4862ee99b9b7310e5d98746"
  },
  {
    "url": "vue/test.html",
    "revision": "fd3da9c6ecdb56475fd20be592ab47e1"
  },
  {
    "url": "vue/tricks.html",
    "revision": "42c718e6bfd34488733a4b05c2ec56e4"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "3d5d49274e2a934e41a279aa158f6f3c"
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
