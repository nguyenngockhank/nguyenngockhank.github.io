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
    "revision": "c74928437340555e0f1ae0627753ca7f"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "9cf1483b00da18fe1ab08229355fe8ea"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "9e0a559735d2dfee21f818fc3a08bc03"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "b81fc7a942e6aab71ce7917f0dfbd706"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "b3f05736f972eac76a29ad7b02bba7c4"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "7ef2922a8cf2986c54286095d9175b83"
  },
  {
    "url": "algorithm/string.html",
    "revision": "ef47c8569a730ac34678ddad2aa92424"
  },
  {
    "url": "architect/authenication.html",
    "revision": "a56742853658211e8ebc34bb58aac3bc"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "18e64b328760ffa00be77ee77c5b6dd6"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "050c7dc19cae95061694dc649cbd5679"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "1737e5dbb8ba74949cf5ba9ba4915c6e"
  },
  {
    "url": "architect/ddd.html",
    "revision": "bd5c916420f3ad15da1a09b74a05ed52"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "a2926bdf746ff976cdf29881624adc30"
  },
  {
    "url": "architect/ebi.html",
    "revision": "81ee9a3f1051c1faa76641b38f53c9f5"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "d8880eb47440ef50f42e2176776b8c93"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "21dcdfef986e53dc0fc152fa2cfde96c"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "7d8002a42537d0be4344bd2b4fe653b5"
  },
  {
    "url": "architect/index.html",
    "revision": "b188bc4267cd6dd822ac3a691257e938"
  },
  {
    "url": "architect/notes.html",
    "revision": "fb64efeddbf26efb20cea883f45ff702"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "8ccba7c32d1ec09f3a1a9cea800a6d99"
  },
  {
    "url": "architect/refs.html",
    "revision": "6a7df7c7de1a90a94b7792ef5d3220fd"
  },
  {
    "url": "architect/soa.html",
    "revision": "6baa4cbb0b8adfa2eb8c47fdd99efb98"
  },
  {
    "url": "architect/spa.html",
    "revision": "d509dd1a95a643ec278df0fdc29460da"
  },
  {
    "url": "architect/use-case.html",
    "revision": "55716c5a744146dad5a322dcb5085b6a"
  },
  {
    "url": "assets/css/0.styles.9897a704.css",
    "revision": "60ae87b9768df621a8a71c6b35d9ccb3"
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
    "url": "assets/js/100.9374a825.js",
    "revision": "caaff0b225393482f9a066926e4da868"
  },
  {
    "url": "assets/js/101.7041c7de.js",
    "revision": "b2e89bc55dbdff5478b04bf39121a349"
  },
  {
    "url": "assets/js/102.2d4277fb.js",
    "revision": "9e34442fde57cf9db24be4094581482b"
  },
  {
    "url": "assets/js/103.bb6baf3c.js",
    "revision": "17aff94641b7d09ad787622e3e42e7b9"
  },
  {
    "url": "assets/js/104.1f83de17.js",
    "revision": "657c6d62a644ddef3d196f84459f9f69"
  },
  {
    "url": "assets/js/105.61ef8248.js",
    "revision": "5faf6f38ce388bb8204869af4bd1c1a8"
  },
  {
    "url": "assets/js/106.36f77b8b.js",
    "revision": "1771a12aef3e7fc9b1128f7f36dee3c6"
  },
  {
    "url": "assets/js/107.65e71c16.js",
    "revision": "f0fb49592f3a15ebe0639c46c94603bd"
  },
  {
    "url": "assets/js/11.3addb440.js",
    "revision": "ace3d78360befd0c3d6b8b8e3d5a074f"
  },
  {
    "url": "assets/js/12.a595948f.js",
    "revision": "9f8385b75a3c131d225ce954457d6506"
  },
  {
    "url": "assets/js/13.00c89919.js",
    "revision": "75b8d978c4525a18fdbcbc3168f21f0d"
  },
  {
    "url": "assets/js/14.83935d00.js",
    "revision": "b261ae24dc2f4eadc2c32c40c7f1751f"
  },
  {
    "url": "assets/js/15.e482a096.js",
    "revision": "81cfc2836b15a0dd446ad0bf594f93b2"
  },
  {
    "url": "assets/js/16.610a919f.js",
    "revision": "af4d22a3f369d9719f31b0581a043eaf"
  },
  {
    "url": "assets/js/17.3bb55b79.js",
    "revision": "567d12d8e0bb90f48d801ded278ca51b"
  },
  {
    "url": "assets/js/18.727c28a1.js",
    "revision": "50dfcd3ec676710f37ab0e9406d4d660"
  },
  {
    "url": "assets/js/19.8fc14d55.js",
    "revision": "cdd09ca3da18a91547a0b42584529a8e"
  },
  {
    "url": "assets/js/2.2442e77f.js",
    "revision": "30b4bb6ac732908ee706e921f49de8f1"
  },
  {
    "url": "assets/js/20.952e5839.js",
    "revision": "0246ba53e305f2660ce58b049ffac4f7"
  },
  {
    "url": "assets/js/21.731458df.js",
    "revision": "1ee125cd77ad8f679df109884c1f35ab"
  },
  {
    "url": "assets/js/22.d53291c5.js",
    "revision": "dff967ce58d1508a7201a88351c09bf6"
  },
  {
    "url": "assets/js/23.2556c08a.js",
    "revision": "6c72336bd24a878d0e07cba570b1e385"
  },
  {
    "url": "assets/js/24.112c9117.js",
    "revision": "124c2e514c3f511536462f71cc74766c"
  },
  {
    "url": "assets/js/25.754645fb.js",
    "revision": "f8d1f638d439f24a1b272fbfc2093cdb"
  },
  {
    "url": "assets/js/26.af00a0a2.js",
    "revision": "21714099270d26e569d359eb5bd8b4fb"
  },
  {
    "url": "assets/js/27.99416439.js",
    "revision": "b18491c7d752f67faf741ed2a323ebde"
  },
  {
    "url": "assets/js/28.f368c942.js",
    "revision": "46548ada3ada7ae6a06ebba2c04c62a0"
  },
  {
    "url": "assets/js/29.4727b71b.js",
    "revision": "0288c351dd260708a77f4548cf7da401"
  },
  {
    "url": "assets/js/3.79cbc6fb.js",
    "revision": "e4316eecf1ab38b17d1c21a165ebefbe"
  },
  {
    "url": "assets/js/30.ff0ecdf9.js",
    "revision": "ddd7ae286d539e9286e53dfae9cd9b96"
  },
  {
    "url": "assets/js/31.838d9454.js",
    "revision": "726c7bbf31109f750d013ccdbdecf172"
  },
  {
    "url": "assets/js/32.f2ccd656.js",
    "revision": "950c14e4af86f992c5a19c14a56a7e40"
  },
  {
    "url": "assets/js/33.3c1b788c.js",
    "revision": "099f251c82885ba776ed3c11eae43860"
  },
  {
    "url": "assets/js/34.8f100f81.js",
    "revision": "d7d640a2750b88f18044368097a38c95"
  },
  {
    "url": "assets/js/35.662ab8aa.js",
    "revision": "90f87a073cebddf4e4ebaf7848d838bc"
  },
  {
    "url": "assets/js/36.bd07f588.js",
    "revision": "5f06a45fcb7ee4f07f02334de5056961"
  },
  {
    "url": "assets/js/37.ce4ec973.js",
    "revision": "c3c3a2ca38a507608561b0737b86074d"
  },
  {
    "url": "assets/js/38.a8368671.js",
    "revision": "44f174d400d5c40c4441480c0ec6d884"
  },
  {
    "url": "assets/js/39.01423f2d.js",
    "revision": "45ebf53694a2f2a7127c041f1c84e352"
  },
  {
    "url": "assets/js/4.2a6ef867.js",
    "revision": "2eaa31ca5e65cad1bfc57636837dea69"
  },
  {
    "url": "assets/js/40.650486e5.js",
    "revision": "bc6ac6c7c935a0898e20773792afdb28"
  },
  {
    "url": "assets/js/41.c2972218.js",
    "revision": "39c0eede112fe1c170ffd98650913c99"
  },
  {
    "url": "assets/js/42.1e40caba.js",
    "revision": "6f2cef244f937dd8a814443fc85d0f6f"
  },
  {
    "url": "assets/js/43.912c62a0.js",
    "revision": "45530b3634c7bd529898d92966fb47ad"
  },
  {
    "url": "assets/js/44.dc5a0311.js",
    "revision": "6f7445d8b2edcbfa80b759b7e0d01e1e"
  },
  {
    "url": "assets/js/45.2675193f.js",
    "revision": "5e770cfe80e9c896a1ab428a2488a24c"
  },
  {
    "url": "assets/js/46.b7120c34.js",
    "revision": "90c61d0de4fc8bc6a30178811a677a0f"
  },
  {
    "url": "assets/js/47.c5b18236.js",
    "revision": "fd148a56d854bcc581027a2bef338866"
  },
  {
    "url": "assets/js/48.d5772194.js",
    "revision": "c844f2d0631082654a67f2f9c8572f50"
  },
  {
    "url": "assets/js/49.2e11640a.js",
    "revision": "1f600ced4216c00430cefecb00d80405"
  },
  {
    "url": "assets/js/5.e9233914.js",
    "revision": "922ea6417d602ddfb82c3acce4a1eb86"
  },
  {
    "url": "assets/js/50.2a30caf2.js",
    "revision": "2f1b02b19a5efa10480cc7e46b0e6fa2"
  },
  {
    "url": "assets/js/51.61ba8d31.js",
    "revision": "e0d1db8efc9573a433f2225ac574486e"
  },
  {
    "url": "assets/js/52.d828a145.js",
    "revision": "9619f5a25173b3828283b926dac23f92"
  },
  {
    "url": "assets/js/53.cab39e7f.js",
    "revision": "77acdd120f7813910a4bd4fde67fad97"
  },
  {
    "url": "assets/js/54.d7fc5403.js",
    "revision": "227094e91c8a9cc3c26a1a341eeb98db"
  },
  {
    "url": "assets/js/55.706cdbc0.js",
    "revision": "15b6dd131f7fe8ba2fe6461dab6cbaad"
  },
  {
    "url": "assets/js/56.0fe53bae.js",
    "revision": "a589a409adf34c4a5cfc9c5fd44d3709"
  },
  {
    "url": "assets/js/57.8fa9f7a5.js",
    "revision": "0d89e41b9a3644f7d51af90bfff414d7"
  },
  {
    "url": "assets/js/58.9bed36d9.js",
    "revision": "adea60868f471a0efd30fdfdb9a51b86"
  },
  {
    "url": "assets/js/59.d3f06375.js",
    "revision": "c456a9d97d74b9c9df3c6b222acb967d"
  },
  {
    "url": "assets/js/6.d6ded208.js",
    "revision": "f33ed66a887e436abffdbeafa2c49fef"
  },
  {
    "url": "assets/js/60.4118960c.js",
    "revision": "49e451b5a6e3f49854fee0f97c52743f"
  },
  {
    "url": "assets/js/61.97ffe617.js",
    "revision": "1ab43ef5f8c003a8b0970187bafb01f8"
  },
  {
    "url": "assets/js/62.c94e5cee.js",
    "revision": "8c57371e7a566ed970245d9febc696d9"
  },
  {
    "url": "assets/js/63.b07e4a40.js",
    "revision": "c603959200c5b55a774ff89a22213e48"
  },
  {
    "url": "assets/js/64.0c27f2ba.js",
    "revision": "7e20ac897d63a2a4641443e9d0da5861"
  },
  {
    "url": "assets/js/65.6b8b7222.js",
    "revision": "1b45d8912b4e48ea3202be158fe5f165"
  },
  {
    "url": "assets/js/66.7743b347.js",
    "revision": "50e434af0a74a5a005727dd0648e24a0"
  },
  {
    "url": "assets/js/67.41bbaef4.js",
    "revision": "27ab8cd5eee535f4e596993d57e0188a"
  },
  {
    "url": "assets/js/68.ea8d906e.js",
    "revision": "bc7ede498c46a84a0d2c94bee07124ef"
  },
  {
    "url": "assets/js/69.561e474f.js",
    "revision": "9aa975adc71d8dc8252f9988e22d2333"
  },
  {
    "url": "assets/js/7.ddaddbfb.js",
    "revision": "d207bbada9e815840a81b6fa27457a27"
  },
  {
    "url": "assets/js/70.8a3b0e2f.js",
    "revision": "79ad302879a8bc52ac84b9ef259bd304"
  },
  {
    "url": "assets/js/71.e291709c.js",
    "revision": "0bddf45c4287ba0e5c850bbe9e9e4b51"
  },
  {
    "url": "assets/js/72.e3167de1.js",
    "revision": "22368a705761b8daa77fb072285ad6db"
  },
  {
    "url": "assets/js/73.df4e7c72.js",
    "revision": "2119fa7e17a8b520a47958de1ee3816e"
  },
  {
    "url": "assets/js/74.4c1906af.js",
    "revision": "89e803a81194b524880661363ce260c2"
  },
  {
    "url": "assets/js/75.03266edf.js",
    "revision": "99cde1107e807eab9ec0e0c757f68e58"
  },
  {
    "url": "assets/js/76.e0a5f384.js",
    "revision": "c0e221a1679c902a4b76975f2f4b2037"
  },
  {
    "url": "assets/js/77.d4ec81e9.js",
    "revision": "17bb2e84872092b93cf3393e974c656f"
  },
  {
    "url": "assets/js/78.3b9aa9ab.js",
    "revision": "ed5dded3366aa2bc69d3f74f6cc343b1"
  },
  {
    "url": "assets/js/79.2facea6d.js",
    "revision": "9f25eb60951495361418e65b2cefec62"
  },
  {
    "url": "assets/js/8.49983aa2.js",
    "revision": "3f5b9d0212e27b158eae23e72ec3a6e2"
  },
  {
    "url": "assets/js/80.43588e59.js",
    "revision": "8cf147eddaa80f3057c4e52649f5e32f"
  },
  {
    "url": "assets/js/81.736ab496.js",
    "revision": "679ab6b8b806a8b971886a1a91c95964"
  },
  {
    "url": "assets/js/82.b8247122.js",
    "revision": "9d8f338b499d6933ea268fba50b61c2f"
  },
  {
    "url": "assets/js/83.7452c6ed.js",
    "revision": "c28f4a77ebcafa53b558780f9755ff7b"
  },
  {
    "url": "assets/js/84.be4e4a2b.js",
    "revision": "663ed6822b7141f1ff945ac6c7e831c2"
  },
  {
    "url": "assets/js/85.c50e72d9.js",
    "revision": "8684231f899953cdbbda6b8a76f52b3d"
  },
  {
    "url": "assets/js/86.2c8ca721.js",
    "revision": "041ddf17e6cbdde9c846ef3e74a0c227"
  },
  {
    "url": "assets/js/87.bac60287.js",
    "revision": "ccc97163f2f8cb2f17013d989bde8643"
  },
  {
    "url": "assets/js/88.d9c08a06.js",
    "revision": "540ddcdd0d529664ba960c5016eb61a9"
  },
  {
    "url": "assets/js/89.547fa694.js",
    "revision": "ff2aaca41b7a8d53e8cbedc644dda57b"
  },
  {
    "url": "assets/js/9.23e27d48.js",
    "revision": "fc69a8e6b5b86f29e863664767e0cd51"
  },
  {
    "url": "assets/js/90.93632bb5.js",
    "revision": "f3d824aaf36bce282315c8e0611fa0ca"
  },
  {
    "url": "assets/js/91.0c19b1c0.js",
    "revision": "bbfe8ec7c7d5e4ebbabfdc8e94645fa7"
  },
  {
    "url": "assets/js/92.5b777b5f.js",
    "revision": "3ea9f97861ffb83224c323753b6bed09"
  },
  {
    "url": "assets/js/93.86863691.js",
    "revision": "5488d2247b7656f744adad928fdec646"
  },
  {
    "url": "assets/js/94.5eea36dc.js",
    "revision": "3991bdece3e320bb71f777f690af69a1"
  },
  {
    "url": "assets/js/95.0e809e13.js",
    "revision": "006c0b6c25b3fe40a329f254134f99eb"
  },
  {
    "url": "assets/js/96.c7a40393.js",
    "revision": "3516046786bb3725e4867f2c99d31f7b"
  },
  {
    "url": "assets/js/97.4509529e.js",
    "revision": "df179180ba8ca8ae814af30e195761e6"
  },
  {
    "url": "assets/js/98.432e2a2b.js",
    "revision": "5f13330faf9ef9e96e4365896eaedff9"
  },
  {
    "url": "assets/js/99.c473b476.js",
    "revision": "51f7ab4e2bee96bc9fc4dbc1bae5a06a"
  },
  {
    "url": "assets/js/app.7ea7ea52.js",
    "revision": "36de995d467853379b992877f2749a68"
  },
  {
    "url": "common/architecture.html",
    "revision": "f856e999dc2f51b2d3a562e3efeccca2"
  },
  {
    "url": "common/crawl.html",
    "revision": "d0ed066e2c0b2193105118b13f304b2b"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "0af7d98b99bd86e8fdbd0f99f2d055cf"
  },
  {
    "url": "common/document.html",
    "revision": "e7943c4c20303c2bb8c256ea9f004b23"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "5f247b9ccbaf088f4f8acb6291ed7a04"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "fdf8a62c5d86f9d9ddef778f6fb783db"
  },
  {
    "url": "common/index.html",
    "revision": "81c62018732baee4c648028e2fa78b03"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "62f7b0c956d76689d3a8d12e9d549240"
  },
  {
    "url": "common/realtime.html",
    "revision": "9e0837fb13fa8d2b9f7983cf9bef8750"
  },
  {
    "url": "common/refactor.html",
    "revision": "16d02bfad8f9d0c09518b447003ef223"
  },
  {
    "url": "common/seo.html",
    "revision": "3cab08d5cbecb63df9cb3fc465bb89bc"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "a7a5f220fdb279dccfa6bef00246e56e"
  },
  {
    "url": "css/tricks.html",
    "revision": "023eb87ed14e23bab1639bc8c794e770"
  },
  {
    "url": "db/architect.html",
    "revision": "3717c8ea664a49bf23ed81a72da4111f"
  },
  {
    "url": "db/cassandra.html",
    "revision": "05ae100e0884a6a5d2164ca679145dcb"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "82dd0988d6d28284010fc2da410fc61f"
  },
  {
    "url": "db/optimize.html",
    "revision": "fb1afa390192119076ff57a027ac7cbb"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "4fac2b86ca35ba386864ec36543e60ec"
  },
  {
    "url": "db/sql_nosql.html",
    "revision": "8837cad173db27587f60b16e2e1d9f43"
  },
  {
    "url": "dev.html",
    "revision": "0e4b8d81ac9f097876e319d7d74f3ee7"
  },
  {
    "url": "index.html",
    "revision": "49cc02aef8bb3987b9fda5e067063e57"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "9657596d00f49712e4509867b1cbac4e"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "4c56c7d90cf0a896c834545318e71156"
  },
  {
    "url": "javascript/closure.html",
    "revision": "35def94a8422ab1d1729e8faf3bab726"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "42a26325793b4a895bfb8418285becd3"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "9fb842e6f47d697559be8d982e96e9de"
  },
  {
    "url": "javascript/react.html",
    "revision": "1f5fa0e0d915ab748aaa68010077f2db"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "39b11010458d9ee7c98b197a2ced189d"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "8e52b22adcf2949496fa68ca1c118732"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "b5e5e56636c0cdab5d9e0c64ef62f113"
  },
  {
    "url": "node/env.html",
    "revision": "22765c98903f47d7b570c65ed2b1ae29"
  },
  {
    "url": "node/index.html",
    "revision": "f8270e91471222662c8794216773c868"
  },
  {
    "url": "node/n.html",
    "revision": "b3ee911d06868b785d18dec76dc8623a"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "21fb6fe6577c812a1256d00cfca9e1c5"
  },
  {
    "url": "node/npm.html",
    "revision": "8aafdfcc87353bf16f275cf93e357c37"
  },
  {
    "url": "node/sequelize.html",
    "revision": "8de948197ec338636f1466af56e53b71"
  },
  {
    "url": "php/composer.html",
    "revision": "51c0a161d4239fe9f5b4cf42dbcca899"
  },
  {
    "url": "php/crunz.html",
    "revision": "083d7854d6d1a96d02e16046bef53513"
  },
  {
    "url": "php/laravel.html",
    "revision": "2f3401f9c077e50500d875f4b51d223d"
  },
  {
    "url": "php/magic.html",
    "revision": "04f947742d4d597fe8c3a6ac06b61d74"
  },
  {
    "url": "php/notes.html",
    "revision": "2e2577a48874421759fd0c428df0c6ac"
  },
  {
    "url": "php/oop.html",
    "revision": "3292d0704ccf0ff8e014e60077005670"
  },
  {
    "url": "php/php7.html",
    "revision": "bc41c532347c9bf2be4a09dfea54a5db"
  },
  {
    "url": "php/reflection.html",
    "revision": "3587b9813513890cc1c5896d4d2bcaaf"
  },
  {
    "url": "php/tricks.html",
    "revision": "0aa952542c60136f16b8ec0a06535677"
  },
  {
    "url": "php/wordpress.html",
    "revision": "7029cab0b80662f2be738ef15ed60aa4"
  },
  {
    "url": "quotes.html",
    "revision": "0483c9b9121fdf256fb35487cf5331b2"
  },
  {
    "url": "refactor/notes.html",
    "revision": "ae3dbfd1f76c6f1fae8dafaf1f25c524"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "57483066ab2a44a21c3ffe1e737b4adc"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "a23d18df32b742ddd60da2d5548da58b"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "10fbf892b31364a40ce186cfedd62508"
  },
  {
    "url": "snippets/regex.html",
    "revision": "2463e94b1ef3503a68cc8917311bcd35"
  },
  {
    "url": "terms/architecture.html",
    "revision": "59717b80b7391b3acf8e0a680cef4a08"
  },
  {
    "url": "terms/ddd.html",
    "revision": "c852ee2981fed1f9cbb7f104aac7282a"
  },
  {
    "url": "terms/javascript.html",
    "revision": "872bf82b15cc6e1215a647e885ead505"
  },
  {
    "url": "terms/oop.html",
    "revision": "5378c830fb450a855ab73bc9c8297679"
  },
  {
    "url": "terms/testing.html",
    "revision": "c07379ed813b029e04e6d236ef64e4de"
  },
  {
    "url": "tools/chrome.html",
    "revision": "c8de7a3644b4261830d8ca7677151baa"
  },
  {
    "url": "tools/docker.html",
    "revision": "120396a210cd29519856747364d83614"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "f4e2a63a7dee37e1c8eff5ac55bea426"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "4e79e859749286f89d20c47d11c02cec"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "79e66c632d7ca050940984eea33994ed"
  },
  {
    "url": "tools/redis.html",
    "revision": "0fd368cf2f0b1f207e90618798f4b84c"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "c6e04a3cb24d81c1651a061fb04f3771"
  },
  {
    "url": "tools/vscode.html",
    "revision": "aac347b327db2705866ca2a162b27801"
  },
  {
    "url": "tricks/compare.html",
    "revision": "bc431ff6685b556af282b45bdfe6fd1c"
  },
  {
    "url": "tricks/git.html",
    "revision": "11298017e8fbe9975e9b7a66b6a6bbe9"
  },
  {
    "url": "tricks/linux.html",
    "revision": "433ae2c8aaa9b1fca4b925e3de78c4be"
  },
  {
    "url": "tricks/mac.html",
    "revision": "ce9acdecb993163570f58fa5f4b6a271"
  },
  {
    "url": "tricks/misc.html",
    "revision": "e51a402007db083d4829d767465b40af"
  },
  {
    "url": "tricks/setup.html",
    "revision": "4c6d6f1ce407f916fd6fd5228e40bd38"
  },
  {
    "url": "vue/communication.html",
    "revision": "4e24f33ec7d056a30b5a8d81eb87ef52"
  },
  {
    "url": "vue/events.html",
    "revision": "96d793b29ade265530fe28e0dbe3fd6c"
  },
  {
    "url": "vue/references.html",
    "revision": "fa76c11d7a17b22b2fe1509633293a03"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "ea5e0794d0df7dda25bc2cad640f997f"
  },
  {
    "url": "vue/tricks.html",
    "revision": "3f607a044d7667135d3c03ac9aab1246"
  },
  {
    "url": "vue/vue_react.html",
    "revision": "dc4c878a285cc6aba5e04659f6c95b59"
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
