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
    "revision": "9a1593298ae816efe74448a8d4d4a907"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "75c3be7b0cba0b7bab48d5dde7fb1d28"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "c998327d4dbd62edd41cdbaa763b1b93"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "b9a30b950b22a90f2ea5b559ba38de63"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "481bfd1cef2a17f4ec8eea00b7dad139"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "298f280ab01e59d58ce796fd15443479"
  },
  {
    "url": "algorithm/string.html",
    "revision": "1842065a8fad29ca7441a70cd9974038"
  },
  {
    "url": "architect/authenication.html",
    "revision": "8128bc6129da19bc2da5799b78a4a56e"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "c5930340ce1f7dff317a0481483ec35a"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "89029dedf03623ba6e18fc7b1c615cbe"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "b045ca7d7aca0eea1bd723c7aab694fe"
  },
  {
    "url": "architect/ddd.html",
    "revision": "893a41fcc995b286f34b8fdd3aca6fe0"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "a78c152f04154072c68b59c123ec245d"
  },
  {
    "url": "architect/ebi.html",
    "revision": "0644c0512fb0796e488c7564f631288a"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "5a69445f6582829cc8e37aa9956b2122"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "a4998bf2101315dfaddde2ec072d2b12"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "e472c6e6b59aa444e2743d2af728f053"
  },
  {
    "url": "architect/index.html",
    "revision": "48eb537e9a07b090190e56f76f202d44"
  },
  {
    "url": "architect/notes.html",
    "revision": "3a34a264e9e996db1ee16ec14c6ac8c7"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "3a776d3563e0c635160e23752467d74b"
  },
  {
    "url": "architect/refs.html",
    "revision": "a2b6d8519a2fefa705b7f2c2e7266887"
  },
  {
    "url": "architect/soa.html",
    "revision": "86528d1f251872e8710bc8b3264d6034"
  },
  {
    "url": "architect/spa.html",
    "revision": "3c8582b176cba6d39b08e748d84385ef"
  },
  {
    "url": "architect/use-case.html",
    "revision": "7c9affd3eb709627af8f09d8c04840fc"
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
    "url": "assets/js/10.ca241997.js",
    "revision": "25d4f81b93d2319ead260c73ea60df33"
  },
  {
    "url": "assets/js/100.ec13b7cc.js",
    "revision": "eb458aa555727c3b49578d2bd7a6824f"
  },
  {
    "url": "assets/js/101.d56859a2.js",
    "revision": "95a87b5bed602d3adaa156afb4d32bb8"
  },
  {
    "url": "assets/js/102.6088861a.js",
    "revision": "cdb59d1cef84b6d2eb74ea5744183e0c"
  },
  {
    "url": "assets/js/103.7e8116b1.js",
    "revision": "8a2dc74c03d431e4e2f1aba74ce7c372"
  },
  {
    "url": "assets/js/104.29d980f6.js",
    "revision": "08e88b4d170bfb4bb997fb3d3624a17d"
  },
  {
    "url": "assets/js/105.f5567ebb.js",
    "revision": "9f315ee1f3651d19ec96b9dce39b9fc3"
  },
  {
    "url": "assets/js/106.289eab3e.js",
    "revision": "390db1843b4b1c3fbcbf92a3d9de5520"
  },
  {
    "url": "assets/js/107.4406c1cf.js",
    "revision": "977e8558863a8b86ef4992cecb623c40"
  },
  {
    "url": "assets/js/108.7d25e337.js",
    "revision": "fd7546dd3f1b9a2913e5f3240da66d10"
  },
  {
    "url": "assets/js/109.41b7ad70.js",
    "revision": "dff181a4453132c1bd7021515d0b002d"
  },
  {
    "url": "assets/js/11.6964ce64.js",
    "revision": "fff45a9a91dab690d777251d38e54611"
  },
  {
    "url": "assets/js/110.09390216.js",
    "revision": "2db90c7931bbc92ec2c0bdba6e007db5"
  },
  {
    "url": "assets/js/111.b509c683.js",
    "revision": "925063d4e407efc0f5e0bdaab864cf18"
  },
  {
    "url": "assets/js/112.4373e86e.js",
    "revision": "fd7fbeef9f75422e142f079a2e67debd"
  },
  {
    "url": "assets/js/113.0f10dd5a.js",
    "revision": "827216e726bb55e24e8c7300729f102b"
  },
  {
    "url": "assets/js/114.f8b52809.js",
    "revision": "96d6adcc0687e11914f7829436c8a6c5"
  },
  {
    "url": "assets/js/115.1c4f4618.js",
    "revision": "964ea0ff11a0e84a5e440fce447b23c7"
  },
  {
    "url": "assets/js/116.5e590bf7.js",
    "revision": "ee3fb61d6dae33ab29f91838493509b4"
  },
  {
    "url": "assets/js/117.d780ef12.js",
    "revision": "da0668d0582fc273b621e579d7f0564c"
  },
  {
    "url": "assets/js/118.e235a7c9.js",
    "revision": "e03362009d061016cd8576fb313106f8"
  },
  {
    "url": "assets/js/119.3fe4fe51.js",
    "revision": "902d251c8e6c010e67ac2305b7eface8"
  },
  {
    "url": "assets/js/12.0ae8c6d7.js",
    "revision": "7e7e979f97ee91a2e4dd8ed3ca38c1fd"
  },
  {
    "url": "assets/js/120.7aae1925.js",
    "revision": "2715b3d266b52c75b1e91614fa903cb8"
  },
  {
    "url": "assets/js/121.dbeb9ffb.js",
    "revision": "4b83ab5650552825b05a9eea39f50ade"
  },
  {
    "url": "assets/js/122.9450ba78.js",
    "revision": "06fcfc2120cec6296a3f8c50a44b07c9"
  },
  {
    "url": "assets/js/123.31a77468.js",
    "revision": "25b68adef2ec63a60410e3cb53becd04"
  },
  {
    "url": "assets/js/124.dd5c96fc.js",
    "revision": "be9f11b3ed773617b32f9b782a71dd53"
  },
  {
    "url": "assets/js/125.277f3037.js",
    "revision": "b2a642a3484f3c3d611f356eef0cd119"
  },
  {
    "url": "assets/js/126.28a20e83.js",
    "revision": "4ccdbcc0fa8b8fcfb84aa7d840f8a9ca"
  },
  {
    "url": "assets/js/127.4f1ee1e6.js",
    "revision": "935e3efbc670daf70032fa8bb37c50a6"
  },
  {
    "url": "assets/js/128.f1291b41.js",
    "revision": "b7964132f9241f039081393c8a4f88e6"
  },
  {
    "url": "assets/js/129.a74bade8.js",
    "revision": "4fea8c76b0a06e781a1e6977181513eb"
  },
  {
    "url": "assets/js/13.0509a484.js",
    "revision": "2dd15e1d57bd9bf037bf81dacc7d62db"
  },
  {
    "url": "assets/js/130.d7736014.js",
    "revision": "9aeea040d42d3fcf099d293a696fe287"
  },
  {
    "url": "assets/js/131.8153d779.js",
    "revision": "2986d271aef501cdf48d809ff30c115d"
  },
  {
    "url": "assets/js/14.74ad4db9.js",
    "revision": "17f2caba29a19021292102e8abe72dd4"
  },
  {
    "url": "assets/js/15.6db48d1e.js",
    "revision": "11ab771f19ac10264ba87b381196065a"
  },
  {
    "url": "assets/js/16.e254fbe0.js",
    "revision": "161c1ad583ab4b36fc84252c9a07a90a"
  },
  {
    "url": "assets/js/17.a661b117.js",
    "revision": "30cbc0e8049b9b2f13d0eb8864e362e0"
  },
  {
    "url": "assets/js/18.9357f7be.js",
    "revision": "a43d0e399eafb10c486d8ffa38b78be0"
  },
  {
    "url": "assets/js/19.70a92df4.js",
    "revision": "bba07461145c7c4b34df36b2bb9ba5ce"
  },
  {
    "url": "assets/js/2.05b5c4fe.js",
    "revision": "4de789025ba888e4d6416f80740cd6ad"
  },
  {
    "url": "assets/js/20.ccc2a629.js",
    "revision": "e0617b90aa9ce6a9c6735829400f415c"
  },
  {
    "url": "assets/js/21.d0ee6c7f.js",
    "revision": "3866df3635964e341a1355f461c9ad42"
  },
  {
    "url": "assets/js/22.57f6e5a0.js",
    "revision": "110b63bd7d06b0725c731d052bdeaf58"
  },
  {
    "url": "assets/js/23.388b7d11.js",
    "revision": "08a36364871fa205917d24bbfb82cd0e"
  },
  {
    "url": "assets/js/24.5cd90c4a.js",
    "revision": "e59959a7f5ba10f3f77cdd1d56fdaa66"
  },
  {
    "url": "assets/js/25.8307ec93.js",
    "revision": "8cc234b67219473835ba115700f91819"
  },
  {
    "url": "assets/js/26.ec3f39c9.js",
    "revision": "24e5d3df2de562f604d9dc228f7ad7fb"
  },
  {
    "url": "assets/js/27.88609330.js",
    "revision": "813e32b89a858b3c6fa7845bee30d057"
  },
  {
    "url": "assets/js/28.7de52309.js",
    "revision": "3dd2a2d3032fefeb1ac7067606d70cfd"
  },
  {
    "url": "assets/js/29.21783f2d.js",
    "revision": "396f62af159553c82f036f431c00b512"
  },
  {
    "url": "assets/js/3.56480cfd.js",
    "revision": "6c21bf97afc38f1d782f8945cd3071c8"
  },
  {
    "url": "assets/js/30.98f6983d.js",
    "revision": "c74f6cc1443d5657b7099290f677da97"
  },
  {
    "url": "assets/js/31.fbfbd98c.js",
    "revision": "ab1430bfd2f15504b9c2b9f29926b3aa"
  },
  {
    "url": "assets/js/32.d186b94e.js",
    "revision": "91e0c2a0c1cc1f7fc275de64c07f28fb"
  },
  {
    "url": "assets/js/33.88ee564b.js",
    "revision": "9fdbd2a8326d64d0161bf2c2e3fb8ba6"
  },
  {
    "url": "assets/js/34.806e7891.js",
    "revision": "5c1ba7f92f288b2457626e7ff598ec7d"
  },
  {
    "url": "assets/js/35.8e752188.js",
    "revision": "f4301afcdb747124ea3460511d56ca4b"
  },
  {
    "url": "assets/js/36.a020ac90.js",
    "revision": "070ff0269ed6c1df3a9b7c8a3fb895c9"
  },
  {
    "url": "assets/js/37.8b7a0c05.js",
    "revision": "d7f8b644a5c111e26ba9efbabd149438"
  },
  {
    "url": "assets/js/38.b2949e85.js",
    "revision": "8a20b38133e1c729ba13bbde66b525e9"
  },
  {
    "url": "assets/js/39.ea043ce0.js",
    "revision": "b49c864f93043d6a7c78bd8087047861"
  },
  {
    "url": "assets/js/4.d8e151b1.js",
    "revision": "6ce706e5218c347d073b3d6958c726b0"
  },
  {
    "url": "assets/js/40.f8d637ff.js",
    "revision": "5581beefcb56121e234611cc14e4ad77"
  },
  {
    "url": "assets/js/41.00727405.js",
    "revision": "e9d42a13dc40d68ec54cc74f3b6f7efe"
  },
  {
    "url": "assets/js/42.f8267913.js",
    "revision": "279c2338e360f3d313d230ef8d5e93e5"
  },
  {
    "url": "assets/js/43.6115b57e.js",
    "revision": "f40117a890657ba9ec6c02a017d7d780"
  },
  {
    "url": "assets/js/44.d3f6a702.js",
    "revision": "5ad65a084c4feb948db2848ffdb35954"
  },
  {
    "url": "assets/js/45.0296f252.js",
    "revision": "d9ade3c2ed409d73f69793104d424482"
  },
  {
    "url": "assets/js/46.068dcff4.js",
    "revision": "89da43fc73f711bf354c15d8426e7dfe"
  },
  {
    "url": "assets/js/47.c7c70896.js",
    "revision": "03c1953c253cf0e7371f9d23e7b3514f"
  },
  {
    "url": "assets/js/48.c48cb983.js",
    "revision": "4f8be5f733c178c98715b7f337159501"
  },
  {
    "url": "assets/js/49.1c26815a.js",
    "revision": "a9bbadadd69f5fc62eec251d9ce08648"
  },
  {
    "url": "assets/js/5.15b4f02e.js",
    "revision": "b250f9925d635b71fbd0f7b8b21fd157"
  },
  {
    "url": "assets/js/50.c6009966.js",
    "revision": "7e36a713170001d239c9f80748b2440f"
  },
  {
    "url": "assets/js/51.0bd306f1.js",
    "revision": "bd1bc07792729b197ea2da456bedd5e4"
  },
  {
    "url": "assets/js/52.bf51bf0b.js",
    "revision": "fd68ee253853b749d30c46ae17146aeb"
  },
  {
    "url": "assets/js/53.6674ef26.js",
    "revision": "4c7f514f150f1985169eeaaf75a29516"
  },
  {
    "url": "assets/js/54.68d6221a.js",
    "revision": "e5ddf9f027b00645d0f67037b13fec6b"
  },
  {
    "url": "assets/js/55.253f4c90.js",
    "revision": "70d60307d8f6e88f004e66bf64394c70"
  },
  {
    "url": "assets/js/56.48f5ff51.js",
    "revision": "595381b3344e1c311a5ebfdbef811845"
  },
  {
    "url": "assets/js/57.aaf609ab.js",
    "revision": "8ceda1fe14f8b3295a5263bc5a6caf14"
  },
  {
    "url": "assets/js/58.966431df.js",
    "revision": "21e59619d53a070d9b11631ee9f6a4aa"
  },
  {
    "url": "assets/js/59.6eb7f62b.js",
    "revision": "c596dfdbe41ebb4f9325ff15683cec76"
  },
  {
    "url": "assets/js/6.10fb9aa1.js",
    "revision": "dfaf8d721f911d85d242021246313b80"
  },
  {
    "url": "assets/js/60.5dc8c176.js",
    "revision": "2c249465987d9713d421fb019aca2230"
  },
  {
    "url": "assets/js/61.593dea03.js",
    "revision": "61b69f44d219fe353b01a2cbb9305c20"
  },
  {
    "url": "assets/js/62.ab427aef.js",
    "revision": "ae9b56ad64c6fe08d1f59408d4ccdb18"
  },
  {
    "url": "assets/js/63.d8734920.js",
    "revision": "b9acce1c086487673abd547ff1e4868e"
  },
  {
    "url": "assets/js/64.f5e6bf8c.js",
    "revision": "6bd2de95e43b541286e594664e52b7bc"
  },
  {
    "url": "assets/js/65.b2d842d4.js",
    "revision": "a21bf8687304aa64c08adc12c0b7ae9f"
  },
  {
    "url": "assets/js/66.d27139f9.js",
    "revision": "da75e12377fc0afe7cd1214d224822d2"
  },
  {
    "url": "assets/js/67.79917624.js",
    "revision": "19472db3b64abf1e87b8941952979089"
  },
  {
    "url": "assets/js/68.9f4f6829.js",
    "revision": "c8c9ea346a0458e70ac0e7f4de7cf9f6"
  },
  {
    "url": "assets/js/69.0d6615fd.js",
    "revision": "2bfaac4ec4d280fa6f26e9bedf33afe0"
  },
  {
    "url": "assets/js/7.09276b0e.js",
    "revision": "f795b04d15a68658076e69706d80611d"
  },
  {
    "url": "assets/js/70.7e0d1d19.js",
    "revision": "3ff5b302eae9af161a0d8744c1933e3e"
  },
  {
    "url": "assets/js/71.661a5468.js",
    "revision": "c7175d8614a7faaa98cd904e7378d90a"
  },
  {
    "url": "assets/js/72.f494e308.js",
    "revision": "26b46cd3b9284f1ef310fa4794bf903a"
  },
  {
    "url": "assets/js/73.b5adca27.js",
    "revision": "31cb97397669d980b0c791221770e0aa"
  },
  {
    "url": "assets/js/74.c7017fda.js",
    "revision": "442c397992216e1003ec4108bccd83de"
  },
  {
    "url": "assets/js/75.23196117.js",
    "revision": "2fb4132db3f59c4e6dbf612a93566a4d"
  },
  {
    "url": "assets/js/76.d0d6e1a8.js",
    "revision": "2d5225ca137eeef094ac3c422e27fc84"
  },
  {
    "url": "assets/js/77.7b91370f.js",
    "revision": "59f0d450f42b70e2b8d99ec37d7db283"
  },
  {
    "url": "assets/js/78.82e3935b.js",
    "revision": "fee99452c75623c82cbd7f2c925b3a93"
  },
  {
    "url": "assets/js/79.f8fbcbaa.js",
    "revision": "5ef4bce9207e43adce8428e1e8efc393"
  },
  {
    "url": "assets/js/8.5b89f54b.js",
    "revision": "ceb1e24a179c21a635acc1c90a307738"
  },
  {
    "url": "assets/js/80.d1f16968.js",
    "revision": "8b932b7b36e6aac089e98272606aa90d"
  },
  {
    "url": "assets/js/81.90f4390e.js",
    "revision": "ebc3b86b3e655e89c5d8c897eb8e15ba"
  },
  {
    "url": "assets/js/82.92ac2d83.js",
    "revision": "a937ba7ae67b96a6e306c21530090bbf"
  },
  {
    "url": "assets/js/83.f5006c3f.js",
    "revision": "f1f9d1e6b74a173ec49b4776c361a5fb"
  },
  {
    "url": "assets/js/84.37f8414f.js",
    "revision": "6d99cfb4f0f730088199fa4e1ac0bcd5"
  },
  {
    "url": "assets/js/85.621cde6e.js",
    "revision": "da6e1631f27b880348455b69fd276e66"
  },
  {
    "url": "assets/js/86.da4e340a.js",
    "revision": "6c5a6dfa755e41798107c1f702dd1979"
  },
  {
    "url": "assets/js/87.19fb65e4.js",
    "revision": "89ec663c20a9dedba55fde237f037564"
  },
  {
    "url": "assets/js/88.7bff247f.js",
    "revision": "8480c71e8529ab71d437d2ad68eb1475"
  },
  {
    "url": "assets/js/89.b3517803.js",
    "revision": "6a0b730c05c76d79f09a13dad04c117d"
  },
  {
    "url": "assets/js/9.c1df9c9c.js",
    "revision": "5c1cefa7d848df3494d1a732468997e1"
  },
  {
    "url": "assets/js/90.1d3f8135.js",
    "revision": "85b34c456fe276647532dbe807f0f430"
  },
  {
    "url": "assets/js/91.1f723e8d.js",
    "revision": "9801be62128e3b495d0ad0d51b8925c2"
  },
  {
    "url": "assets/js/92.0c73a149.js",
    "revision": "bbac495509a27ea2b0791a92fc41c0a3"
  },
  {
    "url": "assets/js/93.832a1c8e.js",
    "revision": "5d38d9ddd39af5a815d9be1e10e7b71e"
  },
  {
    "url": "assets/js/94.567b3001.js",
    "revision": "4682a6873b4d01efa5190ed3534b9f4c"
  },
  {
    "url": "assets/js/95.ee481a28.js",
    "revision": "1eb15ddfb8f027a3b4d2ee501ad05504"
  },
  {
    "url": "assets/js/96.c293835b.js",
    "revision": "fc5ae347f9eaabae96fa35bc49dc1f33"
  },
  {
    "url": "assets/js/97.0d8491f7.js",
    "revision": "23eecc53caf60ed5670793d667e72cbe"
  },
  {
    "url": "assets/js/98.f30f69dd.js",
    "revision": "305c132e5c5a08563e586d6ff0dfdf29"
  },
  {
    "url": "assets/js/99.525fea12.js",
    "revision": "e43708d0f4606592baed602697b348b3"
  },
  {
    "url": "assets/js/app.379f17c5.js",
    "revision": "ba828c4bc7a2ad6e2022efab75c5f218"
  },
  {
    "url": "common/architecture.html",
    "revision": "13f6dbd40a4d8ebf8c7e6a7898d233e9"
  },
  {
    "url": "common/crawl.html",
    "revision": "f2361d7bc65a6b9a873012f947db9304"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "a2cc5ba4aebe9ffb61f33a09697c88f8"
  },
  {
    "url": "common/document.html",
    "revision": "7f7068dca89cb78c3f42d159fbf0e63b"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "f7a818942939ca8eef912ef667f6e3c6"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "d1f6a2efadbff15d9a0dc72401badd4f"
  },
  {
    "url": "common/index.html",
    "revision": "6c58b0e8cfe4d9774b533815eb60696c"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "864f0629f84c852d1a00094ffe29bb06"
  },
  {
    "url": "common/realtime.html",
    "revision": "e10db7867ebaf0053660b027cbae4455"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "63975d71ca7eb5e290d036aede6be840"
  },
  {
    "url": "common/refactor.html",
    "revision": "4418e30608a11defe6f1dc7bb62b1990"
  },
  {
    "url": "common/restful.html",
    "revision": "363ed258098191b3f74272213eae799e"
  },
  {
    "url": "common/seo.html",
    "revision": "bf711b8e25a074b7586c78a562baf8f8"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "909d3d80ce7adbefb09e990edf9ba244"
  },
  {
    "url": "css/tricks.html",
    "revision": "a639dc32025ee1022a4659f7673c311a"
  },
  {
    "url": "db/architect.html",
    "revision": "5cd86c39513a1a13b3e652f9a4ff2937"
  },
  {
    "url": "db/cassandra.html",
    "revision": "964bbf53a6d4337fea8596337bed6810"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "e01ae08e77b80408f7736a1ebad1bb4e"
  },
  {
    "url": "db/optimize.html",
    "revision": "cdc3a8878551c01caf2881a9107e0570"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "9cc8203201b0c13b05a25d9209704ab6"
  },
  {
    "url": "db/sql_nosql.html",
    "revision": "d763f1e6383d621c38d4859a4ef01d42"
  },
  {
    "url": "index.html",
    "revision": "1957db8b7f5f5bb12372c6336b2a8a0d"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "b1ee7b1ccd057d2274522f85177e3920"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "0773651d57581f8522aa043af9f24bfd"
  },
  {
    "url": "javascript/closure.html",
    "revision": "62af8fe185a4fd338748fd8e31bf23c3"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "07e302ecef3e3880f1d006032c784f85"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "9ad1a1ec4d547a4618dc9a2c697d61b2"
  },
  {
    "url": "javascript/react.html",
    "revision": "48f75ed4e5a72fb9c6381fc05237b884"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "5b3431cbbd45e37c8fda31ea9ee5d87c"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "95a49c9597dc6e42f473a3ca68535e12"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "4a0159fcd3a14ec3c081870a6837aa49"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "54a3eac641f13a86faf850ee2298661d"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "d5b59d3704f2931d3f63e6e6aaeead27"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "9216a256ceabcff71b14e1b8e79304d3"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "53fccd50c351da8c0dd1959ccde8fbe7"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "aa5314fde630c8bc6308b6d66c6580b4"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "9c06137c1b267cdd6dcc522503089a88"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "bbeff46e2ab59a468a9bb7bc0bfa5ce5"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "7b83564bbb7f15a18cf1a04c23e260a5"
  },
  {
    "url": "kungfu/js/vue_react.html",
    "revision": "2fc60a5f2b1efede3058bc57876ee426"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "c0cac0e49b7d851eb8f78f8d2a71917c"
  },
  {
    "url": "kungfu/template.html",
    "revision": "5c2d900c7b8fc962851953e5d56c6531"
  },
  {
    "url": "node/env.html",
    "revision": "2c53d7d2f924a565507f630cc34321f6"
  },
  {
    "url": "node/index.html",
    "revision": "ebf5022d15309c231de9766e401fa957"
  },
  {
    "url": "node/n.html",
    "revision": "fbd4880b8e62c6dbe887fd99ec4faaab"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "6d22ceba46744e8089082effde443af3"
  },
  {
    "url": "node/npm.html",
    "revision": "bc8a327bc6d92c937fa7abc43a6b16df"
  },
  {
    "url": "node/sequelize.html",
    "revision": "901c7f8b1361798af59946fc8b95267e"
  },
  {
    "url": "php/composer.html",
    "revision": "43f3ae3c682348ac86913336cc055358"
  },
  {
    "url": "php/crunz.html",
    "revision": "5dd6d33a377a05780e0e46738c0770af"
  },
  {
    "url": "php/laravel.html",
    "revision": "121fcf86c0109a6c0fe60b02f2253c0a"
  },
  {
    "url": "php/magic.html",
    "revision": "8c09e866a29cae38a273641bb6734776"
  },
  {
    "url": "php/notes.html",
    "revision": "5b854d671b5b4500cad14d862059e893"
  },
  {
    "url": "php/oop.html",
    "revision": "31b1bbad187711d4ee2216d26d8415af"
  },
  {
    "url": "php/php7.html",
    "revision": "18b11e276c4ac01198d16d0b255dd0f0"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "c9fbb2f9d40d99ad57de78cec1efbe5b"
  },
  {
    "url": "php/reflection.html",
    "revision": "970a3ab7cd30606867d36e89e22ebfed"
  },
  {
    "url": "php/tricks.html",
    "revision": "18453c90a6ddda78037b65b5fcbfa090"
  },
  {
    "url": "php/wordpress.html",
    "revision": "dad7d9c12231db69c6edd0bbc5cf7acc"
  },
  {
    "url": "quotes.html",
    "revision": "64b68c0c56a2151e9bae033bac64a6ed"
  },
  {
    "url": "refactor/notes.html",
    "revision": "4edecedbe20bd5c5e4b334e3310dbcb4"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "ab4034ed341cc715d683d921bccabaa4"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "b877f22e95e4a6e5b5d98c5ed2018c9d"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "8698b478c5965d169e00ba17a7467c9e"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "076e1717ba82c26fa6312a0e3abbc718"
  },
  {
    "url": "snippets/jest.html",
    "revision": "3e590ff54f5b55e3e91d28299940a638"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "71650cea4a6dc30404f0d354c1e3118e"
  },
  {
    "url": "snippets/patterns.html",
    "revision": "96471e7b661b34aa5a90bfa88a19ec9f"
  },
  {
    "url": "snippets/regex.html",
    "revision": "0909d001005d8b0ade373f0dcfc88bb3"
  },
  {
    "url": "terms/architecture.html",
    "revision": "4b2e035c6d78b962285ac3f8cf881b48"
  },
  {
    "url": "terms/ddd.html",
    "revision": "730ed9bec54e431a913660c8b49e653a"
  },
  {
    "url": "terms/di.html",
    "revision": "3bf922158d7a12f6836e8ff96b0a17c0"
  },
  {
    "url": "terms/javascript.html",
    "revision": "c6afe681fa4ba3e35c71f8e81d38890e"
  },
  {
    "url": "terms/oop.html",
    "revision": "b8347da8e8dbe85fbc33cc814391b36f"
  },
  {
    "url": "terms/rules.html",
    "revision": "6fb1e7dcbdf8790f9309876a1985682c"
  },
  {
    "url": "terms/testing.html",
    "revision": "2b60c936e19788d9428b66c7bf18d838"
  },
  {
    "url": "tools/chrome.html",
    "revision": "57854eee8388e779933ca072613577e6"
  },
  {
    "url": "tools/docker.html",
    "revision": "0c35b295ae54c8a2682437840c0e82a9"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "73e166d856f3b169d86a83b80e3dcb7f"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "33b3674afa0918fb8a608243a3ebeaae"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "3ca743c3b98adf73603c0446f7f3a956"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "169af3eac42b3283e7dd406aacb56dbe"
  },
  {
    "url": "tools/redis.html",
    "revision": "2af479a69ed803509009412dd020f0e8"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "8a273cc320d3311a4fb4153c1a277fc6"
  },
  {
    "url": "tools/vscode.html",
    "revision": "4c10497e0ccb0fd1abf3ff7de0d38ded"
  },
  {
    "url": "tricks/compare.html",
    "revision": "2ffa902f70a6d7da33a6ed0ed853b4c2"
  },
  {
    "url": "tricks/git.html",
    "revision": "f70314181c87efbb125b494da1a5a18b"
  },
  {
    "url": "tricks/linux.html",
    "revision": "cb07a8878b97a84a907ab3a95bc3268f"
  },
  {
    "url": "tricks/mac.html",
    "revision": "5e61aa9df8cf941169d64effa8c857c3"
  },
  {
    "url": "tricks/misc.html",
    "revision": "9132fd36dc20a749e13ce1a92393e63a"
  },
  {
    "url": "tricks/setup.html",
    "revision": "488eb0990850de4213725bbb2ef3ca86"
  },
  {
    "url": "vue/communication.html",
    "revision": "db89fc78aa5440b2d64717a42fb79fe6"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "70abb9330cd8463e414abf933cae679c"
  },
  {
    "url": "vue/events.html",
    "revision": "160f17e3553c9eb47ef66f9589676853"
  },
  {
    "url": "vue/references.html",
    "revision": "4ee8b5c10454655d1385eb5558a5f145"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "482d829f4f11e069aa3cec515e3824d3"
  },
  {
    "url": "vue/test.html",
    "revision": "93b6a2d533f571e9d5c0cdf4ccc75d1b"
  },
  {
    "url": "vue/tricks.html",
    "revision": "0bfd93a758bfcb9286a64666fc64ec0d"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "da606aa596a884f7ecfc90c687ac01e4"
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
