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
    "revision": "f3249cf8c0e2ee52f19906f38fc21652"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "334cf1fa40a420f06e32db4a5595dfc0"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "c6b2a4590b137d1ace342fe00b94fdec"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "a0b9041f4f4d59615aad54ee1352dbf5"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "3ae6df49f3785d1b9186bd7c9ce0d77d"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "afc5cea4bf2a18c9b65afa281576765d"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "6801ab7312d6bfd6b73570089f14dd3a"
  },
  {
    "url": "algorithm/string.html",
    "revision": "91f92a779c2a60275963c6a7f3eef3c2"
  },
  {
    "url": "architect/authenication.html",
    "revision": "2d91160375a317f1b5f500af02352192"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "def31e55d19090eaa66ce5af85ae837a"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "7b0900c71caae9877d446858019047e6"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "ad26f07b69deadeb1db8cc9d0412ce68"
  },
  {
    "url": "architect/ddd.html",
    "revision": "e6436284507a78ba86c0a72148ebc510"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "c119e0c966c663a8f5c466d5cf92705e"
  },
  {
    "url": "architect/ebi.html",
    "revision": "9638932ce95de967fa30abe859de64a4"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "f07c21fef47600ed05e726386643a425"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "fe7d496984d0dbb40119c49ad0fe201c"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "cb7270c4f156754b4baf7a94f2d72115"
  },
  {
    "url": "architect/index.html",
    "revision": "fdf2fe176214861719d6a79c19b9b6d2"
  },
  {
    "url": "architect/microservices.html",
    "revision": "1f6e1364b6ffe8c12664bcd700a54dd5"
  },
  {
    "url": "architect/mutex.html",
    "revision": "ed47236c3a2e2f17ab445fa350dacf9d"
  },
  {
    "url": "architect/notes.html",
    "revision": "84abb4f583b80288e67ba6c2db8fe288"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "5dca792cec70271d70ded46f7acd2ca3"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "f5c1cad0b4fc82c3c1a983a56e02a5d8"
  },
  {
    "url": "architect/refs.html",
    "revision": "268cd441ee4ea5b1fd3bcd6b2f7d497a"
  },
  {
    "url": "architect/soa.html",
    "revision": "0bac6aa9f9acb6b3420bddb9015fd03a"
  },
  {
    "url": "architect/spa.html",
    "revision": "67a12d4d6b15bf6cbbbb38626bc0126b"
  },
  {
    "url": "architect/terms.html",
    "revision": "8fdceabc3c1cb1cfc1831fbca7ce5a2a"
  },
  {
    "url": "architect/use-case.html",
    "revision": "aacb40e7c94f230665fd7540e202d0b3"
  },
  {
    "url": "architect/webservice.html",
    "revision": "e8007c4b758b8a38c4ccd035a784e72f"
  },
  {
    "url": "assets/css/0.styles.5d974432.css",
    "revision": "13ed0a0184d34fa2ab527f322bdac698"
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
    "url": "assets/img/attached-resources.4543871f.png",
    "revision": "4543871f00bd6354b099f23bdddb3ddd"
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
    "url": "assets/img/codebase-deploys.3b40fe51.png",
    "revision": "3b40fe51c68cd87b19c79d061c0f9963"
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
    "url": "assets/img/image--002.c18dec8f.jpg",
    "revision": "c18dec8f1ad2819f423c8875e9ceffed"
  },
  {
    "url": "assets/img/image--002.e715b54f.jpg",
    "revision": "e715b54f81643d03029a767b12ac4927"
  },
  {
    "url": "assets/img/image--003.ef282791.jpg",
    "revision": "ef2827913ca5bdddbf1470510bb9a540"
  },
  {
    "url": "assets/img/image--003.f050157c.jpg",
    "revision": "f050157c71786712a34d5190ad8319ab"
  },
  {
    "url": "assets/img/image--004.019ede3e.jpg",
    "revision": "019ede3e94b64c48df0ec924ee1e4285"
  },
  {
    "url": "assets/img/image--004.ed9eb89a.jpg",
    "revision": "ed9eb89acc2ccc7a4f737d6437b89311"
  },
  {
    "url": "assets/img/image--005.b90151cf.jpg",
    "revision": "b90151cfaefb2b4a7318badbf7f6222f"
  },
  {
    "url": "assets/img/image--006.9c6c95b6.jpg",
    "revision": "9c6c95b62da5cee8697f50acf538a07a"
  },
  {
    "url": "assets/img/image--007.7f3c5574.jpg",
    "revision": "7f3c5574df404e3e74b50a95f7d9d900"
  },
  {
    "url": "assets/img/image--007.8a14ae1d.jpg",
    "revision": "8a14ae1d6ae4b25108a423022205d97e"
  },
  {
    "url": "assets/img/image--008.d87c5e12.jpg",
    "revision": "d87c5e1247ddd4f995936d8c550d96a6"
  },
  {
    "url": "assets/img/image--009.292a0ee1.jpg",
    "revision": "292a0ee146465b9dc1db7d277d3ef651"
  },
  {
    "url": "assets/img/image--010.9bd8cb7b.jpg",
    "revision": "9bd8cb7bb618c95fcef9db2fdade9fe2"
  },
  {
    "url": "assets/img/image--011.980c080f.png",
    "revision": "980c080fa4ed98e6e210d6771c75f7bd"
  },
  {
    "url": "assets/img/image--011.b868fd28.jpg",
    "revision": "b868fd2891c78bcfc15a0bb4c339c6ed"
  },
  {
    "url": "assets/img/image--012.606e5ae5.jpg",
    "revision": "606e5ae52517a7bb1d1ab6add997b449"
  },
  {
    "url": "assets/img/image--013.b663b501.jpg",
    "revision": "b663b501d3e5ecdf48500832c7d09ad8"
  },
  {
    "url": "assets/img/image--014.5d836f4d.jpg",
    "revision": "5d836f4ddba49e4eeddab31dadb2f290"
  },
  {
    "url": "assets/img/image--015.fea4418b.jpg",
    "revision": "fea4418bf278e2e5e9e4839c711c1285"
  },
  {
    "url": "assets/img/image--016.47b46824.jpg",
    "revision": "47b4682478f096f8434bc32a74022795"
  },
  {
    "url": "assets/img/image--016.73f6b03d.jpg",
    "revision": "73f6b03dbb2d348ad05b081855fbdcf6"
  },
  {
    "url": "assets/img/image--017.415231f0.png",
    "revision": "415231f02ffad50b2b6a8fa99caf1151"
  },
  {
    "url": "assets/img/image--017.d6e7de30.jpg",
    "revision": "d6e7de302516a4a28e77a360f54c69e0"
  },
  {
    "url": "assets/img/image--018.01e159ef.jpg",
    "revision": "01e159ef860f5b33fe11bd54503dff53"
  },
  {
    "url": "assets/img/image--019.d18fd686.jpg",
    "revision": "d18fd6868f36440f7a5805fe69254865"
  },
  {
    "url": "assets/img/image--020.6f6d6ce9.jpg",
    "revision": "6f6d6ce9acf4c7fad8c12079e571b000"
  },
  {
    "url": "assets/img/image--020.b0b0a3c5.png",
    "revision": "b0b0a3c518ae3757601daaaf323d8c26"
  },
  {
    "url": "assets/img/image--021.a0bc49c0.png",
    "revision": "a0bc49c02081be93772a96f21305516a"
  },
  {
    "url": "assets/img/image--021.e99ad9d0.jpg",
    "revision": "e99ad9d0891c7f825082ade3457acc5f"
  },
  {
    "url": "assets/img/image--022.046763f1.jpg",
    "revision": "046763f176ca6afe5708f08e4c6fc6fd"
  },
  {
    "url": "assets/img/image--023.18f371ec.jpg",
    "revision": "18f371ec4cb4f2797a53772f4033f592"
  },
  {
    "url": "assets/img/image--024.48936cd0.jpg",
    "revision": "48936cd0979f2b35cba13edc8c40163d"
  },
  {
    "url": "assets/img/image--024.c878a00e.jpg",
    "revision": "c878a00e80daabb53fa0a1f8325fcdd9"
  },
  {
    "url": "assets/img/image--025.26429fcd.jpg",
    "revision": "26429fcd3ff7d0885fccbf4cf175c116"
  },
  {
    "url": "assets/img/image--025.46d7abe8.jpg",
    "revision": "46d7abe837f7d0016f5f821b0788c488"
  },
  {
    "url": "assets/img/image--026.237c40e7.jpg",
    "revision": "237c40e7c2056816d25c85a8c54af2cb"
  },
  {
    "url": "assets/img/image--027.270b316f.jpg",
    "revision": "270b316f534c7ea8d98e577d099361dd"
  },
  {
    "url": "assets/img/image--027.f4344e6d.jpg",
    "revision": "f4344e6d2d32f706f26ebd7c6ad4ce7f"
  },
  {
    "url": "assets/img/image--028.823c6807.jpg",
    "revision": "823c6807937a7cff5cfafc50091a70ea"
  },
  {
    "url": "assets/img/image--029.42f2f2ef.jpg",
    "revision": "42f2f2ef615f42f2ce9743a262a391ae"
  },
  {
    "url": "assets/img/image--030.7600d898.jpg",
    "revision": "7600d898027d71cfce71525d3e6b487a"
  },
  {
    "url": "assets/img/image--031.1597fbad.jpg",
    "revision": "1597fbadbd41ad05945e25b1990534d2"
  },
  {
    "url": "assets/img/image--032.b47ef83a.jpg",
    "revision": "b47ef83a66df6a08f627f1f791317508"
  },
  {
    "url": "assets/img/image--033.e1a6c8eb.jpg",
    "revision": "e1a6c8eba11aa33c7b47e61a3cffb8af"
  },
  {
    "url": "assets/img/image--034.4cb90d7b.jpg",
    "revision": "4cb90d7b3e1846b8766a523adb10c33c"
  },
  {
    "url": "assets/img/image--035.ddccddb8.jpg",
    "revision": "ddccddb8f0cf830f2643d2474d92f9ce"
  },
  {
    "url": "assets/img/image--036.8f58626b.jpg",
    "revision": "8f58626b277128f3e365530cb5a58df7"
  },
  {
    "url": "assets/img/image--037.ed55526f.jpg",
    "revision": "ed55526faff38da2bbb34e377f86faea"
  },
  {
    "url": "assets/img/image--038.12aa64d8.jpg",
    "revision": "12aa64d8daf6d1af84b1b2a4f6f9dd73"
  },
  {
    "url": "assets/img/image--038.ddac44e3.jpg",
    "revision": "ddac44e3079ce4b91c71eda3c588c022"
  },
  {
    "url": "assets/img/image--039.bd0141cb.jpg",
    "revision": "bd0141cbfe9718639f5d05e44efcd1cf"
  },
  {
    "url": "assets/img/image--039.f0ed2880.jpg",
    "revision": "f0ed28807b813a14abb3192da40525d8"
  },
  {
    "url": "assets/img/image--040.413484e3.jpg",
    "revision": "413484e3c9e6e0990646b3ba961481b6"
  },
  {
    "url": "assets/img/image--040.df399fe8.jpg",
    "revision": "df399fe821d515bc8f384dbc7c6a8336"
  },
  {
    "url": "assets/img/image--041.29e4a17a.jpg",
    "revision": "29e4a17a1c0e655accaf6c45f64a56cc"
  },
  {
    "url": "assets/img/image--041.a2ea71bc.jpg",
    "revision": "a2ea71bc0c4edfca5582ca011d6bd2d3"
  },
  {
    "url": "assets/img/image--042.9fdac72d.png",
    "revision": "9fdac72d04a1c1a6d6bc9553be77766d"
  },
  {
    "url": "assets/img/image--042.c57c62b1.jpg",
    "revision": "c57c62b1f3e4373aab86d8b286ea397b"
  },
  {
    "url": "assets/img/image--043.01457d8c.png",
    "revision": "01457d8c7e3e330f72cd04553facb50e"
  },
  {
    "url": "assets/img/image--043.d8199a87.jpg",
    "revision": "d8199a87819baf81943832489af065fe"
  },
  {
    "url": "assets/img/image--044.582ae702.jpg",
    "revision": "582ae702c5e4f061e75b4d7261488b42"
  },
  {
    "url": "assets/img/image--046.2c48092e.jpg",
    "revision": "2c48092eb326f2aed04a4011f84c7383"
  },
  {
    "url": "assets/img/image--047.ecd9ee8f.jpg",
    "revision": "ecd9ee8f5590d099bc82945a5db02b10"
  },
  {
    "url": "assets/img/image--048.216f859e.jpg",
    "revision": "216f859e651406e9fc42abc602feccff"
  },
  {
    "url": "assets/img/image--049.f5ec9710.jpg",
    "revision": "f5ec97106d5044028ac19d72e852afd5"
  },
  {
    "url": "assets/img/image--050.4d070bce.jpg",
    "revision": "4d070bce191fc8da0ff13a7d10038836"
  },
  {
    "url": "assets/img/image--051.00405a60.jpg",
    "revision": "00405a60da48abe1e2f051d73fa9e4ec"
  },
  {
    "url": "assets/img/image--052.47116516.jpg",
    "revision": "471165161da98af1cc4b84a21f253e5e"
  },
  {
    "url": "assets/img/image--053.d8ec5d25.jpg",
    "revision": "d8ec5d25ae34a94d096670ca9b4a1e06"
  },
  {
    "url": "assets/img/image--054.8d7de5ee.jpg",
    "revision": "8d7de5eeaea6590c3154b694aa923367"
  },
  {
    "url": "assets/img/image--055.e94b46b1.jpg",
    "revision": "e94b46b1514fc05b95ffb891a0f2b410"
  },
  {
    "url": "assets/img/image--056.a4bb5907.jpg",
    "revision": "a4bb59079cd76939f68e406a4291429e"
  },
  {
    "url": "assets/img/image--057.ed72462c.jpg",
    "revision": "ed72462cb9de170391e78b49c509fe17"
  },
  {
    "url": "assets/img/image--058.367e78e6.jpg",
    "revision": "367e78e640a1ce8f4a78696efd8e381e"
  },
  {
    "url": "assets/img/image--059.e81720bd.jpg",
    "revision": "e81720bd0306319b0979bf5906989376"
  },
  {
    "url": "assets/img/image--060.260f4be5.jpg",
    "revision": "260f4be572e39750e18b52935a4f40c9"
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
    "url": "assets/img/process-types.0c38412f.png",
    "revision": "0c38412f773c32e7a6c0248c500df99d"
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
    "url": "assets/img/release.8458878d.png",
    "revision": "8458878ded8446c6cfc0385236ba7fe3"
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
    "url": "assets/js/10.2d2fa643.js",
    "revision": "5b59d32c60b3db4589ced0af9cea3888"
  },
  {
    "url": "assets/js/100.ba9cff16.js",
    "revision": "73fc5524491baf401ba7e2a33c38b3f4"
  },
  {
    "url": "assets/js/101.d72e3765.js",
    "revision": "bb5dcc27b144e603a1b8fd478c149af9"
  },
  {
    "url": "assets/js/102.1aa133ab.js",
    "revision": "7b726a2ef5898c0359f150d76b722953"
  },
  {
    "url": "assets/js/103.c3186f9c.js",
    "revision": "0e372503807f6aa506d2755b91a3ef6a"
  },
  {
    "url": "assets/js/104.012e6c38.js",
    "revision": "8d036036f33cd9a8b81d4d796ce23531"
  },
  {
    "url": "assets/js/105.bc46bfa3.js",
    "revision": "2e80453f32f1b20c1db075b0f4dd66c4"
  },
  {
    "url": "assets/js/106.f89949e1.js",
    "revision": "43bfd8f6d09b5dddb2dfb5ec1c1ed4bf"
  },
  {
    "url": "assets/js/107.6ddac154.js",
    "revision": "c711f135119af9c682161b0c4af7b4cd"
  },
  {
    "url": "assets/js/108.6d159ab3.js",
    "revision": "d8ad1210a3f3c96274e9f059a03fe428"
  },
  {
    "url": "assets/js/109.804f3fb9.js",
    "revision": "5ed962202be37d21db4b65ab68582920"
  },
  {
    "url": "assets/js/11.6660841c.js",
    "revision": "4584bd907c620a6fb5ab27de45dee3ad"
  },
  {
    "url": "assets/js/110.f53c1951.js",
    "revision": "f1ecf0d5f9a479081f10a781120ad1ff"
  },
  {
    "url": "assets/js/111.b42ef8bd.js",
    "revision": "4e237663d6149bd2d10f3d32fb0164dc"
  },
  {
    "url": "assets/js/112.4b489247.js",
    "revision": "6c388dcd456427feabd08a20bbf68744"
  },
  {
    "url": "assets/js/113.dea46f00.js",
    "revision": "0f81c04a3de5781fef64bfef22950e07"
  },
  {
    "url": "assets/js/114.2e48a074.js",
    "revision": "50259b8330172e4fba2ba2fed9493f91"
  },
  {
    "url": "assets/js/115.9c7684eb.js",
    "revision": "09b26120a3a3b51803bc580c4db14299"
  },
  {
    "url": "assets/js/116.874abd2c.js",
    "revision": "d3180111a7994e0254c02c76e5d553ba"
  },
  {
    "url": "assets/js/117.a49efee5.js",
    "revision": "87be3c867c2f3b23d2175ce49ec405cb"
  },
  {
    "url": "assets/js/118.9f38af9e.js",
    "revision": "e69f8e6b6acaef62b0eda1ec062333f2"
  },
  {
    "url": "assets/js/119.20abe876.js",
    "revision": "e85b0b0fa83a10d8bcee8d5957ea213e"
  },
  {
    "url": "assets/js/12.b0a7194b.js",
    "revision": "e4c30b7450889a3b1d80a40adb60e305"
  },
  {
    "url": "assets/js/120.f2bbaf68.js",
    "revision": "52781af69b8a9d397e721b3934419e86"
  },
  {
    "url": "assets/js/121.70d353c2.js",
    "revision": "2eb7f7b198d5c4e574e30833200319f0"
  },
  {
    "url": "assets/js/122.502723f1.js",
    "revision": "65982b757b5113175211f35a673af5c9"
  },
  {
    "url": "assets/js/123.a5a516b2.js",
    "revision": "8f82a7c1d0ceab14272033b976b594f8"
  },
  {
    "url": "assets/js/124.dada419b.js",
    "revision": "1e6e0210cf52464d99972871a9866520"
  },
  {
    "url": "assets/js/125.2f8d4fd6.js",
    "revision": "a86fc9389c981040d04a3dd5623190fb"
  },
  {
    "url": "assets/js/126.88780a5d.js",
    "revision": "1f9c49dda7caca9f2ef8dc2d82319a92"
  },
  {
    "url": "assets/js/127.d48a77f8.js",
    "revision": "a294f8db32834e2fe1dd0c2ad955b81a"
  },
  {
    "url": "assets/js/128.b67bc329.js",
    "revision": "bccf71f268054e54a63537fe976bb607"
  },
  {
    "url": "assets/js/129.bd39561a.js",
    "revision": "e984dad83607b921f84c9c6fa5073c10"
  },
  {
    "url": "assets/js/13.06dce828.js",
    "revision": "cddf35c79724147d5f4029c55b8d6f29"
  },
  {
    "url": "assets/js/130.05d18c96.js",
    "revision": "7c62da613faec66e567e91c5d5c16e7b"
  },
  {
    "url": "assets/js/131.56c087dc.js",
    "revision": "9eb91d6cb1803f0fdfac9d63a962d97f"
  },
  {
    "url": "assets/js/132.4f8c1351.js",
    "revision": "ddb1239d8db0ad4c28589d5e2375c2af"
  },
  {
    "url": "assets/js/133.5e197b7e.js",
    "revision": "0c4fb549f51d44ae7f3c3e11ac6e0dca"
  },
  {
    "url": "assets/js/134.62cb07c4.js",
    "revision": "d8335695250105a28e2a2eef93c30dbe"
  },
  {
    "url": "assets/js/135.10b660c0.js",
    "revision": "787604568dc85c7039f1a7910144a86b"
  },
  {
    "url": "assets/js/136.b5df89a8.js",
    "revision": "97b5e03eae9081cb2c6609587d881080"
  },
  {
    "url": "assets/js/137.b8300fa6.js",
    "revision": "c6bc0f4ea538dba9f6fdd14e4e14a7a4"
  },
  {
    "url": "assets/js/138.bdbc78f5.js",
    "revision": "206e53120db12268d4ec7ba17ffea964"
  },
  {
    "url": "assets/js/139.11f63e5e.js",
    "revision": "1cc2118e1848f84b5d2bfc3b03086faa"
  },
  {
    "url": "assets/js/14.3b673cd7.js",
    "revision": "1fd834902125e95748330a112139a801"
  },
  {
    "url": "assets/js/140.c1b81e6b.js",
    "revision": "3aa4882958bc5cd287f20448d163503d"
  },
  {
    "url": "assets/js/141.ef540561.js",
    "revision": "14a221d096effa9b726803be198f81d3"
  },
  {
    "url": "assets/js/142.5698602e.js",
    "revision": "8e62b8723a8c4d435d9e6d5ed52429d2"
  },
  {
    "url": "assets/js/143.2799d66b.js",
    "revision": "63a9e7f6a23c65c1625fa645f7abf757"
  },
  {
    "url": "assets/js/144.9be05ec2.js",
    "revision": "e87ea969a141675d3437be3971f62e32"
  },
  {
    "url": "assets/js/145.e60da528.js",
    "revision": "2e78679e308bce4f0464279dc27051e1"
  },
  {
    "url": "assets/js/146.054688dc.js",
    "revision": "1f45a104a612d6c0f4c5ec15482d9da7"
  },
  {
    "url": "assets/js/147.1ec69770.js",
    "revision": "617b9302af94b4d599c2374ba4ef26ce"
  },
  {
    "url": "assets/js/148.d9f96b13.js",
    "revision": "c70f9e45738d80da96f187890e8ebf34"
  },
  {
    "url": "assets/js/149.882742ae.js",
    "revision": "bf52890b59fe34aa76866bccac9d7177"
  },
  {
    "url": "assets/js/15.dbfdd9a8.js",
    "revision": "c202595c462a5a004d170f457db878e2"
  },
  {
    "url": "assets/js/150.1791c4d4.js",
    "revision": "98e390d4dac9e2e2edc84bba4e27e443"
  },
  {
    "url": "assets/js/151.d2ee3036.js",
    "revision": "c143d93ab1c307f55b0bcabce575b93a"
  },
  {
    "url": "assets/js/152.13511b49.js",
    "revision": "edc06b0be4f841689e2627d08af888d1"
  },
  {
    "url": "assets/js/153.0e9955fe.js",
    "revision": "4615638f2cdef70cb9ace259c6b342b3"
  },
  {
    "url": "assets/js/154.843656ed.js",
    "revision": "b1e929ea1f6a8c5a13fc2ef88b82dda2"
  },
  {
    "url": "assets/js/155.ee6750d6.js",
    "revision": "391522152f1843ff96f911902ad98d67"
  },
  {
    "url": "assets/js/156.4f6465f0.js",
    "revision": "e99bc63fd0fc4279374bb9a91d9af329"
  },
  {
    "url": "assets/js/157.50fa0fbd.js",
    "revision": "adf3d5c7a1b88c4943472c5edc007ede"
  },
  {
    "url": "assets/js/158.9b8889cb.js",
    "revision": "3a4228440ac414870d5818521e0b3704"
  },
  {
    "url": "assets/js/159.dee495ad.js",
    "revision": "46185868140dde05e552a4d7a8e643d2"
  },
  {
    "url": "assets/js/16.983f63ec.js",
    "revision": "f6f26699f9e4f9b39c45f58a5a5c06f3"
  },
  {
    "url": "assets/js/160.dd412a1c.js",
    "revision": "eaf687e17b3f68e404dd0146238f4662"
  },
  {
    "url": "assets/js/161.660ded74.js",
    "revision": "6163f200e5729ea76a6f8d0401b8cb2a"
  },
  {
    "url": "assets/js/162.3a9685f9.js",
    "revision": "ea0a73866b09a7ed133b7e4fb47d8c73"
  },
  {
    "url": "assets/js/163.8173cc2f.js",
    "revision": "dd18d57f00e1c328876728e7d8d04970"
  },
  {
    "url": "assets/js/164.68fb5979.js",
    "revision": "825e054db204f6841fef493480f5851a"
  },
  {
    "url": "assets/js/165.da726cc9.js",
    "revision": "0097f34605e61a8b5f5354ae602c2090"
  },
  {
    "url": "assets/js/166.aca9b1db.js",
    "revision": "a4fe8082807a033d12866493a8ddcf4e"
  },
  {
    "url": "assets/js/167.2785cc10.js",
    "revision": "53cdfa239b5dab99f57650249fb62a96"
  },
  {
    "url": "assets/js/168.80c8ebae.js",
    "revision": "55747744d1dacc6e51e6a6610fd7f520"
  },
  {
    "url": "assets/js/169.9f9f1ec7.js",
    "revision": "d5f79678c88a4339c338c16556ae1230"
  },
  {
    "url": "assets/js/17.1511a0ab.js",
    "revision": "738a6ec5d6b9a5a5774d4dd08e0db415"
  },
  {
    "url": "assets/js/170.4b5c57db.js",
    "revision": "218d8c3be44c3c0597efbc357a1ebfef"
  },
  {
    "url": "assets/js/171.2eea4817.js",
    "revision": "2ac75d0594fc2c8e12892c5804440328"
  },
  {
    "url": "assets/js/172.f2c2fc77.js",
    "revision": "b21058a1c016fab82146b31715626121"
  },
  {
    "url": "assets/js/173.598e3379.js",
    "revision": "03ad384b9e872dcdae0ec09efd24a7cc"
  },
  {
    "url": "assets/js/174.c90a66e4.js",
    "revision": "a8d8c207336c039973950ee751c6b624"
  },
  {
    "url": "assets/js/175.3c6e2a39.js",
    "revision": "7f9a133c9eb961d67b8964ec8b166adb"
  },
  {
    "url": "assets/js/176.b7d730df.js",
    "revision": "9a006aac51626dcac9d469d2ac71a48c"
  },
  {
    "url": "assets/js/177.d9e03569.js",
    "revision": "32ef2a199c63f1c23a98e6f6b55ba0e7"
  },
  {
    "url": "assets/js/178.5b8184f6.js",
    "revision": "19d3650930a1d8fa48ba71c8986f4674"
  },
  {
    "url": "assets/js/179.9e57897f.js",
    "revision": "1e43b277a5e8aef8ff5e18caf2319361"
  },
  {
    "url": "assets/js/18.c19e5978.js",
    "revision": "45cbb452949665e9def5c3744aa5ce9a"
  },
  {
    "url": "assets/js/180.d7e197af.js",
    "revision": "2e2eb003f3c2243fd53ca6fc14579c53"
  },
  {
    "url": "assets/js/181.d98e5ff7.js",
    "revision": "8a50e1f025d64aa66a34c28e40769211"
  },
  {
    "url": "assets/js/182.1d616545.js",
    "revision": "b9b424777278d0e7d465346880e0cefe"
  },
  {
    "url": "assets/js/183.56c967b1.js",
    "revision": "4cc8e9588c06ca75c4e052bf0fbd8a72"
  },
  {
    "url": "assets/js/184.d9e5f909.js",
    "revision": "18f5bc5cc3b49dc3e12c2999272ce28c"
  },
  {
    "url": "assets/js/185.a6dae740.js",
    "revision": "408a9707886e6e350e8738fe532f8f99"
  },
  {
    "url": "assets/js/186.10ec19f5.js",
    "revision": "37ada693e2feae7880ce5bae217434ab"
  },
  {
    "url": "assets/js/187.300320d4.js",
    "revision": "542c901518977ed44d8cb0235e9264db"
  },
  {
    "url": "assets/js/188.b2c15856.js",
    "revision": "f1150388ebaaa3680e377d170fba3107"
  },
  {
    "url": "assets/js/189.51e76e74.js",
    "revision": "7cda5897ae1be26df4cfaecf9a8c866f"
  },
  {
    "url": "assets/js/19.5b2d56da.js",
    "revision": "64baca12185f10c77bf953e88b16f8e0"
  },
  {
    "url": "assets/js/190.337a5a38.js",
    "revision": "99e69990c8a2db89585f06120e9f1475"
  },
  {
    "url": "assets/js/191.a428d61a.js",
    "revision": "1905766edc61bd1af3375e865f197a2a"
  },
  {
    "url": "assets/js/192.11247a08.js",
    "revision": "ed7469aff3f95b0c74259939ef305ba7"
  },
  {
    "url": "assets/js/193.fe69c79f.js",
    "revision": "48cb15512813e44c166ee482a3db2fea"
  },
  {
    "url": "assets/js/194.7bbe737d.js",
    "revision": "a33b4730ca2ca8a1446e9cac68f985fa"
  },
  {
    "url": "assets/js/195.91355206.js",
    "revision": "27ba679b274c55aa4551574b237407e8"
  },
  {
    "url": "assets/js/196.c97e7ca6.js",
    "revision": "6480baf7366230a814556f4871b47f8f"
  },
  {
    "url": "assets/js/197.e0a9b0f5.js",
    "revision": "3d93812a8dcc984ea100d8c8a72909a7"
  },
  {
    "url": "assets/js/198.44c806e2.js",
    "revision": "39649e6c654908f958b085a45722f591"
  },
  {
    "url": "assets/js/199.810e115e.js",
    "revision": "5bd402097a1beea9b8f2fb298e99df89"
  },
  {
    "url": "assets/js/2.77a4f111.js",
    "revision": "bd2387533414b3c6ac4873cfa841855d"
  },
  {
    "url": "assets/js/20.dbe7bc73.js",
    "revision": "f04ed23055931eab8e501bb35a6ce86e"
  },
  {
    "url": "assets/js/200.b1078f53.js",
    "revision": "1461421dbaaa311ac4c0e9e8aed5b188"
  },
  {
    "url": "assets/js/201.f4bff529.js",
    "revision": "97f200a15204b6d1a7416bbe7de1c18c"
  },
  {
    "url": "assets/js/202.53a7e788.js",
    "revision": "50e6d9dfb1b308dc49a289e03227c3b1"
  },
  {
    "url": "assets/js/203.fac7af70.js",
    "revision": "351d90c095b7a3664b0e2605dd9540b3"
  },
  {
    "url": "assets/js/204.54839409.js",
    "revision": "f607c2f7a6b3cb4a2ae9de17414729a6"
  },
  {
    "url": "assets/js/205.8f1d01c0.js",
    "revision": "3a063f64082a25e9cc858132bef0a472"
  },
  {
    "url": "assets/js/206.3a62cc4f.js",
    "revision": "ea4dc1a295c2f0499129fb569f75bfd2"
  },
  {
    "url": "assets/js/207.dbb75dca.js",
    "revision": "38a41eaa365a2e3963895d3c7763b055"
  },
  {
    "url": "assets/js/208.3437c5ba.js",
    "revision": "7bb08a8282ef059bb6eacaaec62e14f0"
  },
  {
    "url": "assets/js/209.1c5789c4.js",
    "revision": "7be44692a82f265c4b6bd6ed05fa911c"
  },
  {
    "url": "assets/js/21.2f832169.js",
    "revision": "8c8a97c8cf5659bc823f12be63cc0a95"
  },
  {
    "url": "assets/js/210.d699133c.js",
    "revision": "1593a5e285523a5935283cbe28105a1f"
  },
  {
    "url": "assets/js/211.16aa2168.js",
    "revision": "56878147299a291e047f276d5b2a22ed"
  },
  {
    "url": "assets/js/212.2724b46a.js",
    "revision": "8d8823fc8ae69a1ababf6e762da5801e"
  },
  {
    "url": "assets/js/213.a1ea93c6.js",
    "revision": "42b0e8e67472deb437ff10e1c2ec669e"
  },
  {
    "url": "assets/js/214.eb295de2.js",
    "revision": "a8264b20f2f47ecb7c837413c68a6d2d"
  },
  {
    "url": "assets/js/215.6d0a1d2c.js",
    "revision": "3734c1a50c0c033ef04d91da2a0ee4f3"
  },
  {
    "url": "assets/js/216.99c397dc.js",
    "revision": "82d95ac8f260db09920e90fc2c50b021"
  },
  {
    "url": "assets/js/217.7398e7a7.js",
    "revision": "2d50e13074a3f6f9bbc082c55cb841c4"
  },
  {
    "url": "assets/js/218.5bb1e317.js",
    "revision": "6d74ecf4db4166e39f4acafca3b25c86"
  },
  {
    "url": "assets/js/219.e78cbcfa.js",
    "revision": "26a95ab3a4a0c865ddf0ab679c624b04"
  },
  {
    "url": "assets/js/22.c1901d06.js",
    "revision": "5ecafcb904c5d0ffaa43f8c625d67f2a"
  },
  {
    "url": "assets/js/220.084e4a5e.js",
    "revision": "69f415b43d7eb45a4b3c8d68abe702fb"
  },
  {
    "url": "assets/js/221.f53b37dc.js",
    "revision": "99f67710b80a3f78fcb910edd8a2d057"
  },
  {
    "url": "assets/js/222.04a5a38b.js",
    "revision": "2e0588bf379911e9dc3bcc17e956ee38"
  },
  {
    "url": "assets/js/223.f8f1403d.js",
    "revision": "3945aa69f227ae6b25a1aadcf01dbe49"
  },
  {
    "url": "assets/js/224.0248f6bb.js",
    "revision": "e2856153b385c199d002b1b52dc8680f"
  },
  {
    "url": "assets/js/225.4d558ac6.js",
    "revision": "4e8018a48d99937cc622655954ac895c"
  },
  {
    "url": "assets/js/226.36959233.js",
    "revision": "f7c9343fa889db41e1f61caadc627fb5"
  },
  {
    "url": "assets/js/227.41439635.js",
    "revision": "a9875b96497c5917016b743405149d02"
  },
  {
    "url": "assets/js/228.705667c2.js",
    "revision": "b08ac16b829add640de8c32d44ff46cc"
  },
  {
    "url": "assets/js/229.24a32f44.js",
    "revision": "e4e190181160783156648c071c5b63d4"
  },
  {
    "url": "assets/js/23.0a89a9d3.js",
    "revision": "aebe8931a5c57a9428fa160aba43304e"
  },
  {
    "url": "assets/js/230.215c6ed1.js",
    "revision": "024e343954964ee37aa7b2ec03e893c4"
  },
  {
    "url": "assets/js/231.8102c077.js",
    "revision": "309b7aad7ba7cf0c5551386ba02312e4"
  },
  {
    "url": "assets/js/232.e10f0f8e.js",
    "revision": "513c85d6ede61a917f890bebf36743d8"
  },
  {
    "url": "assets/js/233.bc794254.js",
    "revision": "e77638bcdebd54e3d144cb8fc421a6ce"
  },
  {
    "url": "assets/js/234.072d2681.js",
    "revision": "e987cd42ac2e880548be82152bd849fd"
  },
  {
    "url": "assets/js/235.db59cd63.js",
    "revision": "50a6db171faf9749d13c513ecedbbdc2"
  },
  {
    "url": "assets/js/236.71cb7c9e.js",
    "revision": "ad706132e6d15efb255b1a7d6cb0cbe9"
  },
  {
    "url": "assets/js/237.027283c3.js",
    "revision": "add5107970f696b6dda51d5be89dcf86"
  },
  {
    "url": "assets/js/238.94ef1c7b.js",
    "revision": "aba2e949f1eb9e0b2ab970c2a1469a66"
  },
  {
    "url": "assets/js/239.8636929b.js",
    "revision": "e3dc0d674605e5d5227b047bbd408e9e"
  },
  {
    "url": "assets/js/24.d39dcd82.js",
    "revision": "3e93b1635828f966b5d458448a325a81"
  },
  {
    "url": "assets/js/240.32287feb.js",
    "revision": "6f58fdbdea4555ddd4eb31fbdc6dd7eb"
  },
  {
    "url": "assets/js/241.fb0bbdba.js",
    "revision": "633c1b04dccff7bd22fd83472297fd7a"
  },
  {
    "url": "assets/js/242.05ab6e1b.js",
    "revision": "85b00ce0509699e8e6def654bef3fd6a"
  },
  {
    "url": "assets/js/243.fc126baf.js",
    "revision": "97cd4b343711bf3b1d21aa8fb3a60d96"
  },
  {
    "url": "assets/js/244.41d4619a.js",
    "revision": "8dc1fa6adb1b5927f87878669caa5c40"
  },
  {
    "url": "assets/js/245.b19b0123.js",
    "revision": "2979a9ca46cd987a240fc0b5994e6d96"
  },
  {
    "url": "assets/js/246.ce39d602.js",
    "revision": "223a3d19d520fae744215ef04bba6196"
  },
  {
    "url": "assets/js/247.2beae1af.js",
    "revision": "3eb371730bdd057f80e572e850360125"
  },
  {
    "url": "assets/js/248.a88bc23a.js",
    "revision": "3f07ef274367a7213b7a241540331b9a"
  },
  {
    "url": "assets/js/249.a30d584f.js",
    "revision": "dbd946981d1a8860c4eee527ff9f94f2"
  },
  {
    "url": "assets/js/25.cd1b0080.js",
    "revision": "909e3e13fddae9bd1748412a53cfaa3a"
  },
  {
    "url": "assets/js/250.ef956287.js",
    "revision": "3d40f29d480cd89f59d6b321e3e57a59"
  },
  {
    "url": "assets/js/251.0f69c7cb.js",
    "revision": "e8b78a9f87d2d3673b1b9b6ada0484b4"
  },
  {
    "url": "assets/js/252.06fa8ad2.js",
    "revision": "890d3a014c0bac027ecb978a3436f5fe"
  },
  {
    "url": "assets/js/253.1462c68a.js",
    "revision": "97f3473f3af832a48fad83bcfe6e917d"
  },
  {
    "url": "assets/js/254.f6eba056.js",
    "revision": "bc9790e6a3d39abc05f985cf5d38d3fe"
  },
  {
    "url": "assets/js/255.b0baac97.js",
    "revision": "b7516a89c0fa9a2744e0a8bb5a8c1d51"
  },
  {
    "url": "assets/js/256.dacbda57.js",
    "revision": "240d3945dc1acfa8e142c72d55cb33bc"
  },
  {
    "url": "assets/js/257.db2543dd.js",
    "revision": "9b0dd8d64bb6e80602a1fd530830e9aa"
  },
  {
    "url": "assets/js/258.38cb3135.js",
    "revision": "b9fa7ced9e5c22c174626cdc2271144e"
  },
  {
    "url": "assets/js/259.66ded8f0.js",
    "revision": "0a5ceb63865cee68998f1905f085e9c2"
  },
  {
    "url": "assets/js/26.adbf2979.js",
    "revision": "64a53d1bf5c6e7f9d0e3258eea11080b"
  },
  {
    "url": "assets/js/260.6209b250.js",
    "revision": "92c046d4937d4ac2c3f8bbc7d7e68d31"
  },
  {
    "url": "assets/js/261.048bd1c2.js",
    "revision": "5a4ac2708c55a3b90711199076e95385"
  },
  {
    "url": "assets/js/262.58cbb486.js",
    "revision": "d40bdb0546f576baa252ada1bbe2ab55"
  },
  {
    "url": "assets/js/263.cb5ee6d9.js",
    "revision": "a55d13d7a76a2c5514ccd82bd8dc4eeb"
  },
  {
    "url": "assets/js/264.a19c9f9e.js",
    "revision": "c2262725fb2014572545f6dfa783bcab"
  },
  {
    "url": "assets/js/265.9a4ccd23.js",
    "revision": "3e007bf3ad9cfe2e228445ee2856eb84"
  },
  {
    "url": "assets/js/266.dd873d42.js",
    "revision": "e343468b10cb948f378a160bc296f144"
  },
  {
    "url": "assets/js/267.19aaf8a0.js",
    "revision": "7e175725bacc5e53a3862d1f5b48e4dc"
  },
  {
    "url": "assets/js/268.094581ab.js",
    "revision": "6d086d971823b3a2821bfaa5b3fd865d"
  },
  {
    "url": "assets/js/269.59210295.js",
    "revision": "9b832da090d71a66ba5a02b4496ac59a"
  },
  {
    "url": "assets/js/27.e99d675e.js",
    "revision": "ca62ca8ce9100666e89653da5f0b34fc"
  },
  {
    "url": "assets/js/270.5e1d5b66.js",
    "revision": "38e675c3350884221fb730628e0f5063"
  },
  {
    "url": "assets/js/271.3a823a21.js",
    "revision": "b1e89d8934b41408c5390645ef252433"
  },
  {
    "url": "assets/js/272.af153686.js",
    "revision": "0111e24abc6f7ac74dc3569d041e74b7"
  },
  {
    "url": "assets/js/273.0546d934.js",
    "revision": "8211eac6d19709c4f7a305a1c52877a8"
  },
  {
    "url": "assets/js/274.a0233fc9.js",
    "revision": "8aa7f72196bc425fd8390032786d6c64"
  },
  {
    "url": "assets/js/275.3855b0af.js",
    "revision": "bd1faa6d5ba6eb5f2d74f7af04674cb3"
  },
  {
    "url": "assets/js/276.65cfd64d.js",
    "revision": "f692ea1b5c84a1e11ce4d8b7c0e762e5"
  },
  {
    "url": "assets/js/277.b87358eb.js",
    "revision": "9e427342b46bd66f539fea954e30b315"
  },
  {
    "url": "assets/js/278.20ffbc28.js",
    "revision": "fc21c101613572ba419edd8541903fa6"
  },
  {
    "url": "assets/js/279.d5f94530.js",
    "revision": "c73617c73ee128a397271409a25872d6"
  },
  {
    "url": "assets/js/28.0ed72f23.js",
    "revision": "0070ebe3696cb08e5aebf5c43d1e3a22"
  },
  {
    "url": "assets/js/280.09d68e6f.js",
    "revision": "05ae2a1d0210b3d64cc9b20d9601d0a8"
  },
  {
    "url": "assets/js/281.64da3c66.js",
    "revision": "d21472ef54879c0ffd45ff965e1db718"
  },
  {
    "url": "assets/js/282.237e66dc.js",
    "revision": "3e5d1768c35a5c194b6525bf0d87d22e"
  },
  {
    "url": "assets/js/283.08919e47.js",
    "revision": "fd03745a4aba5aceb339030e1b6df154"
  },
  {
    "url": "assets/js/284.a1df32ac.js",
    "revision": "9637006079beff1e45a053bacda86791"
  },
  {
    "url": "assets/js/285.3df8865d.js",
    "revision": "faa54c8d6735f52101a25903ad0fea94"
  },
  {
    "url": "assets/js/286.c8abf84b.js",
    "revision": "a7f806db4841b055b5d514129b1840bf"
  },
  {
    "url": "assets/js/287.0bdbb15e.js",
    "revision": "3b804222bdb617d0e9b00e6225f1de6b"
  },
  {
    "url": "assets/js/288.55f6e57a.js",
    "revision": "73adb48aade4a875ac7a83ddabd594a4"
  },
  {
    "url": "assets/js/289.7d23b308.js",
    "revision": "d13368095a7ac24c25a655dc2596fb46"
  },
  {
    "url": "assets/js/29.19b3d651.js",
    "revision": "f4b949c3dda8c8298baa92097b4898bb"
  },
  {
    "url": "assets/js/290.46cceb86.js",
    "revision": "12507df3495137cff482a250445c1eb7"
  },
  {
    "url": "assets/js/291.d90bdf3b.js",
    "revision": "bb36bb054a8fb72866a1db71cd6ad37a"
  },
  {
    "url": "assets/js/292.e332d636.js",
    "revision": "2fd02806b7ec93f920804600dd53c252"
  },
  {
    "url": "assets/js/293.81a246a8.js",
    "revision": "0fc0c1222e5b618afd750a1bf4e912c2"
  },
  {
    "url": "assets/js/294.1a277f0b.js",
    "revision": "98b6510b45671da403fb5d658b403ae1"
  },
  {
    "url": "assets/js/295.47067cc8.js",
    "revision": "b5a2f35f60e82be7a10d781fe11dcbf5"
  },
  {
    "url": "assets/js/296.b229b380.js",
    "revision": "63565f705f292aab5176897763684d38"
  },
  {
    "url": "assets/js/297.6d533979.js",
    "revision": "ba1218099c416b68dfb39473f49df956"
  },
  {
    "url": "assets/js/298.ec55887c.js",
    "revision": "e2a8d2935399269174ef738c9cf3c00c"
  },
  {
    "url": "assets/js/299.0f0c448e.js",
    "revision": "62176a54e8b6adcae697b57dc42405c0"
  },
  {
    "url": "assets/js/3.f0fecc1b.js",
    "revision": "769ef20870b74a619ca91998917cd401"
  },
  {
    "url": "assets/js/30.c3585074.js",
    "revision": "1ae08be9d28072f27d9b92cc2c48d8af"
  },
  {
    "url": "assets/js/300.162bbb48.js",
    "revision": "2e23c96c60c6a24f994c0736e5e415d7"
  },
  {
    "url": "assets/js/301.3e4df8a1.js",
    "revision": "967668718f67e9eb9712dd20f1d7339e"
  },
  {
    "url": "assets/js/302.a36142b5.js",
    "revision": "4759fc5646b24e62d73a2b9835e5556e"
  },
  {
    "url": "assets/js/303.2e8b2b87.js",
    "revision": "dd98387f7606fcf0b0106c5d98741185"
  },
  {
    "url": "assets/js/304.3ae8ce9d.js",
    "revision": "82e395a38697109cee9f0b8148751867"
  },
  {
    "url": "assets/js/305.8032e3ce.js",
    "revision": "863e53ddac95ce213fe3d8a6622d8061"
  },
  {
    "url": "assets/js/306.ded5a2e3.js",
    "revision": "a9a69319adcdce5285271d3844cfd6b1"
  },
  {
    "url": "assets/js/307.4e1ae8b1.js",
    "revision": "8bef9b3c87412df0fe51568f371fba7b"
  },
  {
    "url": "assets/js/308.b193d391.js",
    "revision": "130da3ae9361483804a0205b2b1f218a"
  },
  {
    "url": "assets/js/309.0767ff99.js",
    "revision": "e702d02604f4af562614b0431c070557"
  },
  {
    "url": "assets/js/31.a94e58c5.js",
    "revision": "fbc319c18fd814420f86647c88646fe8"
  },
  {
    "url": "assets/js/310.0df4524d.js",
    "revision": "ef665df6bf537587ca528dc6f175a056"
  },
  {
    "url": "assets/js/311.5a485450.js",
    "revision": "2bcceb1338100fcba221b95095337bb5"
  },
  {
    "url": "assets/js/312.4804eb18.js",
    "revision": "f876a2ce9d2641631e269fd2dfc0c118"
  },
  {
    "url": "assets/js/313.ae7e1665.js",
    "revision": "9fbcb710a18690d9f595a41a99c5d12a"
  },
  {
    "url": "assets/js/314.8e0f9727.js",
    "revision": "e742c2765f82ee7669f18b7e84dbec26"
  },
  {
    "url": "assets/js/315.9a842946.js",
    "revision": "6e1f4ae9641bd93f80ff095aca0934b4"
  },
  {
    "url": "assets/js/316.7212b0b4.js",
    "revision": "954199b419fa017bee6f18ab2a45e985"
  },
  {
    "url": "assets/js/317.4371b07d.js",
    "revision": "63dd6e3a4f6b1da5ad184ac597ca940d"
  },
  {
    "url": "assets/js/318.e9d5ca7c.js",
    "revision": "c77c3ccca0f5e30e416921956ad1567b"
  },
  {
    "url": "assets/js/319.192e8fd5.js",
    "revision": "0f27c31214572ab599ac6c7c955ab1be"
  },
  {
    "url": "assets/js/32.d4842f2e.js",
    "revision": "776e6df2d0e47830874547738f51dff4"
  },
  {
    "url": "assets/js/320.742de287.js",
    "revision": "ce126b35633232d35e4e9c583b8ef6ec"
  },
  {
    "url": "assets/js/321.9ff394e3.js",
    "revision": "83247841d751d1b2a242a2680e146dca"
  },
  {
    "url": "assets/js/322.7e5cd098.js",
    "revision": "05bf44787af6f5ef27eec8f2cddd3b0d"
  },
  {
    "url": "assets/js/323.182e3b36.js",
    "revision": "fcab1a94609b8e6fac36f05d3c19f9f6"
  },
  {
    "url": "assets/js/324.d394f163.js",
    "revision": "242310a846fa9b8943b4e2e9dc8cbbf3"
  },
  {
    "url": "assets/js/325.4948679f.js",
    "revision": "c6582f95516939d41c888db331f74193"
  },
  {
    "url": "assets/js/326.9f46a628.js",
    "revision": "bbf45c52b692572eb79d633d4ff605d1"
  },
  {
    "url": "assets/js/327.c2783569.js",
    "revision": "4d80746527cde1509505ad878ed6cc7c"
  },
  {
    "url": "assets/js/328.6a991c84.js",
    "revision": "dfa70c9f8c31d4f33f763b87a632f6b3"
  },
  {
    "url": "assets/js/329.97025b52.js",
    "revision": "b4c6b5cd64b07ba9057b1e1d1cf8b0b7"
  },
  {
    "url": "assets/js/33.a0c8c6cb.js",
    "revision": "45fa35b741467d2875c5bd15dbe0aa92"
  },
  {
    "url": "assets/js/330.55400e6e.js",
    "revision": "ca3259c9fc65165d4ba16afea09a6f12"
  },
  {
    "url": "assets/js/331.32ad1505.js",
    "revision": "3f26959b887f9eec47c67393feb11e7b"
  },
  {
    "url": "assets/js/332.94441856.js",
    "revision": "452d65499704f8ba9ec0f707def9dd3f"
  },
  {
    "url": "assets/js/333.a0b0d673.js",
    "revision": "e3721152e9850abde2333ccdd67bfcc0"
  },
  {
    "url": "assets/js/334.e311c360.js",
    "revision": "5afb6b406fef4304985b2f37faad5511"
  },
  {
    "url": "assets/js/335.ad5ecfc7.js",
    "revision": "2265e5757fe9e238cddb5c2562d6eff0"
  },
  {
    "url": "assets/js/336.e3d47e73.js",
    "revision": "259edc95550ed49c6493598e4b013640"
  },
  {
    "url": "assets/js/337.d9832f3c.js",
    "revision": "bb1c5baa623057f9f18f7646d353b067"
  },
  {
    "url": "assets/js/338.037b454e.js",
    "revision": "207169731c565f4114e6492efd6e1345"
  },
  {
    "url": "assets/js/339.45a117eb.js",
    "revision": "b806f37b9823448bd1569065ab1ea3bd"
  },
  {
    "url": "assets/js/34.f3a51617.js",
    "revision": "450d6b49a9d78418fd551aa7f197dafa"
  },
  {
    "url": "assets/js/340.2ceb84aa.js",
    "revision": "9ade98f6c691ffc9ba540f95224efccd"
  },
  {
    "url": "assets/js/341.f63a247c.js",
    "revision": "b2926235a7996fc02539a949d28483cc"
  },
  {
    "url": "assets/js/342.4dbbc7aa.js",
    "revision": "4e3e5fa404ebcb23b5a71a9cbc8aec58"
  },
  {
    "url": "assets/js/343.7e397a0a.js",
    "revision": "10406204ef2cf698d1d070c8e6f70500"
  },
  {
    "url": "assets/js/344.73ea6936.js",
    "revision": "9970a8e8868a5223c9d9a509fd4c4a1f"
  },
  {
    "url": "assets/js/345.c24f5692.js",
    "revision": "8ea487f3fab5b630ecbf568e5777abbd"
  },
  {
    "url": "assets/js/346.81233004.js",
    "revision": "3943d800eb3f08dce8853513c79d11c7"
  },
  {
    "url": "assets/js/347.decdbdca.js",
    "revision": "2f7d9db3baf1f044c728315b5f465733"
  },
  {
    "url": "assets/js/348.1fff1d3c.js",
    "revision": "60847cf40981b0fb637266a747a8ad27"
  },
  {
    "url": "assets/js/349.909a2624.js",
    "revision": "088117e8df16ff48236cc36a22764f88"
  },
  {
    "url": "assets/js/35.e273d6d0.js",
    "revision": "cca908a109852e16f15c98f367bafc3c"
  },
  {
    "url": "assets/js/36.ea0f125b.js",
    "revision": "4a1e44d26e4617bd5389691de7cad2f4"
  },
  {
    "url": "assets/js/37.25113cb5.js",
    "revision": "0624027f76cc81f6f83ce5ed083e7d6e"
  },
  {
    "url": "assets/js/38.3e622ebc.js",
    "revision": "9af035f89e21c26ec255aa3019d8e45d"
  },
  {
    "url": "assets/js/39.1b9f950b.js",
    "revision": "736492f6db2e3fae66e04cdc80c57417"
  },
  {
    "url": "assets/js/4.c2ed7203.js",
    "revision": "ea8cc8a9dff41a9f0a369d937c47f39c"
  },
  {
    "url": "assets/js/40.1b467222.js",
    "revision": "0d118e8a84196251addf07c7b2a7e89c"
  },
  {
    "url": "assets/js/41.cd6fa45a.js",
    "revision": "e987e982a29832bcbe0dbf855e64ae55"
  },
  {
    "url": "assets/js/42.330150a8.js",
    "revision": "797f42a6ac880fea6ecf305821065b69"
  },
  {
    "url": "assets/js/43.f3c937a7.js",
    "revision": "d63217f934756f66201ae93d8ae9c98f"
  },
  {
    "url": "assets/js/44.09d8cfc1.js",
    "revision": "b7a514aed94f7b8c16b1768bffbcf005"
  },
  {
    "url": "assets/js/45.4d4ba22f.js",
    "revision": "aa6d3fd8ea5053841ee20384693fe276"
  },
  {
    "url": "assets/js/46.d3d33dcd.js",
    "revision": "d9e3dfc427ee4933b38919ac426f53bc"
  },
  {
    "url": "assets/js/47.4645c71e.js",
    "revision": "b882c8e259c09a9ec5d8871999335cba"
  },
  {
    "url": "assets/js/48.b3fc605f.js",
    "revision": "433890b43228516859a104b9225f8f44"
  },
  {
    "url": "assets/js/49.fe7f1b10.js",
    "revision": "798dee5591f6239c3e617ff48ef3b227"
  },
  {
    "url": "assets/js/5.32731d51.js",
    "revision": "b2b76b023f3df31ddb79b273ba5dc290"
  },
  {
    "url": "assets/js/50.a69a03f5.js",
    "revision": "409ddff531d25ea052dabcc5bf937e01"
  },
  {
    "url": "assets/js/51.2247a239.js",
    "revision": "1489c065b0f8aed30e7fd23f0565a9c7"
  },
  {
    "url": "assets/js/52.7748c4eb.js",
    "revision": "7f55148062a578b05e63c0f1b6066398"
  },
  {
    "url": "assets/js/53.cd98f33f.js",
    "revision": "9a48963fb00291419f519de28a7ec47a"
  },
  {
    "url": "assets/js/54.ed80cbc1.js",
    "revision": "aea98a008e761a8c2b5db548dc942d19"
  },
  {
    "url": "assets/js/55.29fc7133.js",
    "revision": "1c85265721db8fa9923d3ac8b8ab38fa"
  },
  {
    "url": "assets/js/56.53ce817b.js",
    "revision": "6f048f23d8d5b565bb5721fb5d8f4a9b"
  },
  {
    "url": "assets/js/57.2565e13f.js",
    "revision": "d3bff48a9bae12e6a1d0e40eca989efe"
  },
  {
    "url": "assets/js/58.dc9eb9d8.js",
    "revision": "7b04bf9081f8a7678143e81c2ebec8de"
  },
  {
    "url": "assets/js/59.ff141678.js",
    "revision": "06aa393ebc29b5d3928f6ecd963b2d8e"
  },
  {
    "url": "assets/js/6.3b3bc4f7.js",
    "revision": "4ebf441b83a8c9865cf810f32c915003"
  },
  {
    "url": "assets/js/60.0b13f161.js",
    "revision": "c4444e28fd24a2132f480e5177a2805a"
  },
  {
    "url": "assets/js/61.3f85f2c5.js",
    "revision": "e1fb8e8e504e50ecf25fa24a5c1dc1ee"
  },
  {
    "url": "assets/js/62.c5991070.js",
    "revision": "dace80c30303d034f8f495f8563cfd68"
  },
  {
    "url": "assets/js/63.5ae731ec.js",
    "revision": "13927817659381f953ad340cbc3576c8"
  },
  {
    "url": "assets/js/64.a235a635.js",
    "revision": "1cb67f94e133cc0d99f8050b3f8ca031"
  },
  {
    "url": "assets/js/65.1b68e14c.js",
    "revision": "80696dbc8925b33cc2a3eccf5ee6ea26"
  },
  {
    "url": "assets/js/66.80d5aea4.js",
    "revision": "76a212ed5b8e9622c3373804793541a8"
  },
  {
    "url": "assets/js/67.fa930da7.js",
    "revision": "886ad009c8027666ad3db0be64fcc116"
  },
  {
    "url": "assets/js/68.8d890f22.js",
    "revision": "345013c1fc985af410f83580e6c379d8"
  },
  {
    "url": "assets/js/69.4515d55a.js",
    "revision": "92fcc6e56eb797bb807082ad62ee2ce5"
  },
  {
    "url": "assets/js/7.33c89092.js",
    "revision": "aceff333de4883eccd692688f056a75b"
  },
  {
    "url": "assets/js/70.8cd5e9af.js",
    "revision": "6f3d248eb88fbbd1620926a54e6debca"
  },
  {
    "url": "assets/js/71.2825c3c8.js",
    "revision": "9850a4b3fbe05a783b6a1102e05d220b"
  },
  {
    "url": "assets/js/72.b7f96f51.js",
    "revision": "6443416c05a96b1d36d3d095f34d1495"
  },
  {
    "url": "assets/js/73.2fc2d624.js",
    "revision": "49e5033f469e905f9012f12756aa10e6"
  },
  {
    "url": "assets/js/74.60133a53.js",
    "revision": "fdf9e5effac6926282ea06c8c59523d7"
  },
  {
    "url": "assets/js/75.fa95c617.js",
    "revision": "01593793cd0bac228f62d108ffbf3541"
  },
  {
    "url": "assets/js/76.52cc39db.js",
    "revision": "d30cb3bdf499f16a33aaf0a769be37bc"
  },
  {
    "url": "assets/js/77.923c6894.js",
    "revision": "6754c86f52dc35bb28aef3ce4b769dea"
  },
  {
    "url": "assets/js/78.2517578e.js",
    "revision": "ebf7ad84365b436b3bf480543daceac1"
  },
  {
    "url": "assets/js/79.ca89577f.js",
    "revision": "80063d988881705acbdd812642124bf7"
  },
  {
    "url": "assets/js/8.e6a856b2.js",
    "revision": "84b61bc9645c2f708fe8ccc4bb0fd1d5"
  },
  {
    "url": "assets/js/80.ef4c891c.js",
    "revision": "7bebfaa8ec01a157d6bdc6543af57e56"
  },
  {
    "url": "assets/js/81.a21b0d92.js",
    "revision": "eeb07f5e384881bfdc26c35f976be535"
  },
  {
    "url": "assets/js/82.eaed8897.js",
    "revision": "04475997482a8a58d0cbf0b10e94535c"
  },
  {
    "url": "assets/js/83.5d4b6b98.js",
    "revision": "a371f53dcec01b1af3f4dcc9505e132b"
  },
  {
    "url": "assets/js/84.70f4c1dc.js",
    "revision": "23f862ca7b232a0b6440761e61b3a9cc"
  },
  {
    "url": "assets/js/85.cea09840.js",
    "revision": "23c5aa93f6332a6c84f1e2a5de6537b4"
  },
  {
    "url": "assets/js/86.a2520a77.js",
    "revision": "9641aa93f02d736615344db54dff1584"
  },
  {
    "url": "assets/js/87.d829c523.js",
    "revision": "bc246cdf0c02b32bfb63dde6c224a400"
  },
  {
    "url": "assets/js/88.581dfced.js",
    "revision": "15f5e7b0b88b7a51dc58e8e98b97af51"
  },
  {
    "url": "assets/js/89.094e79fa.js",
    "revision": "4805c0fab775d7bf5d0e6937ad6af14e"
  },
  {
    "url": "assets/js/9.7bf5745b.js",
    "revision": "293f375a2348cc9ab7002908e5f3f57c"
  },
  {
    "url": "assets/js/90.25088aeb.js",
    "revision": "1bb19f002a5d82590d592f41a262b6cd"
  },
  {
    "url": "assets/js/91.2c1ec0b0.js",
    "revision": "22e992f97369c801257c7d3cfff7c35b"
  },
  {
    "url": "assets/js/92.59b0ecaf.js",
    "revision": "96eacd1206fc8300a94ef450252d4578"
  },
  {
    "url": "assets/js/93.eb2a0307.js",
    "revision": "7e2658c728e38db9707fb3a86d0951a4"
  },
  {
    "url": "assets/js/94.c5168b67.js",
    "revision": "603b6d2b013dc6e9c977a42f1e9a814b"
  },
  {
    "url": "assets/js/95.42c6f3fb.js",
    "revision": "b361475d4dd9a4d6330970c07c26507a"
  },
  {
    "url": "assets/js/96.c3a9b392.js",
    "revision": "27602d120008d1809aa625ef41d3f8a1"
  },
  {
    "url": "assets/js/97.4a0c488e.js",
    "revision": "d143e5d3f212a230bcaea68d1ad93874"
  },
  {
    "url": "assets/js/98.5cdaea7a.js",
    "revision": "3b8a9dd17db4a54b3c47bbd50666981e"
  },
  {
    "url": "assets/js/99.01d6d721.js",
    "revision": "3f0adabf101a6906e8bfae436ab2b96c"
  },
  {
    "url": "assets/js/app.e28ba3f8.js",
    "revision": "d3aa3a0f96105604f758f1c981119c3e"
  },
  {
    "url": "common/architecture.html",
    "revision": "9e65c8797c98f08d07776fab45fe8dbc"
  },
  {
    "url": "common/crawl.html",
    "revision": "8824f205cab62dc673f419450d94f7de"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "ccf83e3bf35543bc191b32dd31263d98"
  },
  {
    "url": "common/document.html",
    "revision": "10534ed1a55b3addecd368a1a5781d4e"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "53ff2a681a6cb5259062f9c7d5e3c368"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "2fea0955eb94415de4a7ad466e708da8"
  },
  {
    "url": "common/index.html",
    "revision": "67c8af1f6484eb0e0cb65e3079181264"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "abfc611bd91f2aad1eeb311099900d37"
  },
  {
    "url": "common/realtime.html",
    "revision": "a0af6dfa6709e4c0480eb2ed8a6eb14d"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "db4938e4126966b4cffe6cb6d4fc1f1d"
  },
  {
    "url": "common/refactor.html",
    "revision": "e631480dcd6aef049a942f4b6bc880a4"
  },
  {
    "url": "common/restful.html",
    "revision": "f1ac157dea35ea8ca35a1ded87bf9adf"
  },
  {
    "url": "common/seo.html",
    "revision": "3e03d2e790e5d9d03dedc7d7ff5f390c"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "c20c3ad68268ebff5ae647113f30fc17"
  },
  {
    "url": "css/tricks.html",
    "revision": "6253d38e8b19490d6342e2a14137887b"
  },
  {
    "url": "db/architect.html",
    "revision": "5c8dd4341a9a2f3e52a23db9f3d5810a"
  },
  {
    "url": "db/cassandra.html",
    "revision": "926884e05e133f44487c5645a8093621"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "9b5e1c5889c2104df1b1ae39db8fbe8e"
  },
  {
    "url": "db/nosql.html",
    "revision": "8740651cdef1107880d7666ddadd15ee"
  },
  {
    "url": "db/optimize.html",
    "revision": "083e5f5296ac6f084746a08b14333d8c"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "259128e6d43f8e894198e3348bd2f77f"
  },
  {
    "url": "db/postgre.html",
    "revision": "d9b22f986012f42c2a3ba1994161d82c"
  },
  {
    "url": "db/use-cases.html",
    "revision": "b74afb9cd104a302b4ede90d770e5386"
  },
  {
    "url": "go/clean.html",
    "revision": "dafb2b05a3551ee336620d84226ac442"
  },
  {
    "url": "go/index.html",
    "revision": "8301cbb3e0bd228d327c51a9e353ccca"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "cffeb0162491eec0755f65fcce3ede98"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "abc605bc6999019c33c70d8971e65c6f"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "b21efad21484a56653f933ae512df0eb"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "b97bf2290be37381cdbd7613715ca4b0"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "6936694fbfd05275105d65b3e50c928a"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "a4663c35768f2658a7c472abe10f9d4f"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "c9ee0cb7a3e5d1542080ff0a02301983"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "c984d461e16c81db15f7b13796b49952"
  },
  {
    "url": "index.html",
    "revision": "3ea5f517a334246eb5fac9545b8bd3a7"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "1e9b9f7044c2d481f9e1b66950681d54"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "539a8b2a30e08e4fb0e0ed0ea58ba144"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "b039964d7c34b6a86f5025535d7bf950"
  },
  {
    "url": "javascript/closure.html",
    "revision": "8422f54c0b52e35898531d5380ba946e"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "b4dc46844f0d89502c42d7abf2f9d98f"
  },
  {
    "url": "javascript/functor.html",
    "revision": "acd7659dd79ea9763bf498676e73f54c"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "b0f566c7d1e30a69642865b7bb152494"
  },
  {
    "url": "javascript/react.html",
    "revision": "e45894e18d01639ec42dad6c3ca226a9"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "6a55483624833760bb3e897053fc4b00"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "1c686fe7e50de27e5d4aa78a89b71cf8"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "67304a8a0155158bc7f13194a0c014f8"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "1774fcaac7eeefcf6e0d60d29883a2b0"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "cba346fbdc8cbac7b82ea5f487fc1cc4"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "4664935a73921aaf103fd9a0cdd3ad03"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "e89c4258b722329738ccee0d767432c4"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "ca09e6521e95c5353e895786dddd5387"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "8d6e6aa9f210456a591cf339b9b6c1b1"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "f9e2ffd12d9a09403128eb5ef987d204"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "202f71193827f6e1272826d0197fd6e8"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "0bba63acf7b4c66fc35e6a05ec734ec3"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "e57029ba65469d33ed3d571e70d17627"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "7339595606d4cc8b03d5ec27b07cda5e"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "6957e48fb9f2d847e7c378359721fa9c"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "6189372fa8fe9d0cfabb2ed09bc6d5cd"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "6fe421937f56c19c5403d3402b20fa8f"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "2eb794a23690bd5ae3b237ddab17f65e"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "fd59c94dc2faaba56bba70ce895eb9c2"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "3c98b7e186b9ebe677ea87d3cb5b2874"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "828f6d013f9240ef9c78610f65393ebf"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "fc0078977e28c0eb95b4b5e0df02ecb1"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "f1b127e57dc50466bc20c31ba422d488"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "0fee90e1bff5e5ea3df0dff1c03a77af"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "fd1c379b5c4c755140ce52840db6b87c"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "88562078ef9511d518a3d51581491f46"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "55caa23bff12bcb760b20361fa553894"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "2c8baca51a4ff2c3f29d4f598dc13086"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "e24315086610174ecdac218a19f10c50"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "40e2ca37824e20fb434d73265776ffcc"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "0739cb8b74c94603985ca9a00e66d0f2"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "9123805e3e7cfd1eb0f6619000012e23"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "1181997005c777b991203ee679e45e8d"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "544a7ede64968d43f23279a92a574f34"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "e84bb37183e88c2678078bb680af5004"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "cb91a934e78e0838653ed0de70a4f727"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "1107f46faca6f68d93cd841c060122cc"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "19cd8192fe45f268fe5267aa7eb9337c"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "7928dd41b95bf884a21bc44a6b6a7251"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "e6d07fc03eb572eda8ce685a03e765b0"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "fabf0400de3dd2c9cacd58f3a52c09fd"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "1797d36f5e3e11f4ea72ed8bc994b8be"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "973d15c57b0c4f631ab5c7db4b7505dc"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "41bec1fee1ae3c4c8ad7fa5c68ab7bab"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "7882fb941fb59dc93271baac915277f4"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "6691159a664432adac2dfbac418c235e"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "713d08fb226a197440dd81eb8e17ce7e"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "0143e06ae04c10932545219a0c94386d"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "a5633689d3a7a4213ead3e511147ba2f"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "d9fc9c8f95a26510863b3dc5c7ce07f9"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "33c4bac2d3f3c72370889e8426a0da5f"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "21782c53d03455250f9b5827bf4e3cea"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "56c892387ed9b38b3472cedb4b7588a2"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "5e0fda604b7487abb08877fd603fcf97"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "a0af82b0d1f753e5a80d815d4de01c6b"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "328be0f1e7b3d8275dc24bfd63445e03"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "44569b4adaf882912af219dd32c7bb37"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "981d1d2619e9799985e69477778e2b37"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "f229f6f838c8034fb693697a6e20750e"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "45036cb6b81b3c124c26aae470f746fe"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "cc0b1aba89a9328d4d016bfce779cf6e"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "523935ce0e8674bb875c678f5d31dc3f"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "30dd354081fdeed3ce717dcd9f635a03"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "3fa3463e8bfbf3a0dce63c364cc99ac4"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "8ca63f102282dc117ee527252866bcca"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "92d4508db2472c26ae7f3b4b4edf1372"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "df536ffc3676434be4dcdca68916831c"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "cc0ff763ab283152e2809efabf53962c"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "ea10b24d758f4cfadd5ca314684063fe"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "0fe990e61746ca009ea31a61b8723870"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "44e8d64c8f7d5ba399ad6a11b9f06977"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "08126731b72e8b10b574c2cea319b529"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "699b18d69d1798280e5c381143065a94"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "9e1c135e94b9ff84543983560db5da0a"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "39e20ca0af26ac11007851b036cd2fa1"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "2dde5c9ff05575e6a8ba5507c5af32bf"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "fe8cea69a08644ce525fa2bb52705ef1"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "cc846b8021cbff2e6cb78859b17087d0"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "af93fe63a7ef3a876e2063aa1901f283"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "afd9fd47e193d49d50291dfe500fb154"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "3008bb9c96e5a5d2155e1b3018b8786f"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "3a1d66568a70a6acfececba0a3575e48"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "ce3a0cffda5ef1ba0a552d9906a5c9a2"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "2dbe85afbe744452c1830a5cc31a7ba8"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "52d468fccc2c4a6cf16bd96f805fe951"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "3713598f05e1f68a89e3664ced29998f"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "54443c5b69d8eac5ccbcfd63f010c427"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "5c90bad35d747adeff957393c6b5cc4a"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "7c15e9256fb95cc68b0d0efb53bba9d0"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "690353b39d53f9dc2c311ae840432a72"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "91f26d50bd4dad7a24593217ff16df2d"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "2b94cec66e0d2101246fab24a29a17ef"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "b8ab2aca6428990b36ee1d27ae59a7b6"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "5ba7892bb53c2a15ad398402be00f933"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "a21176e969cca152e105a1f5b37c76d5"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "aa666145ec1372fe8180e1ed759aceb2"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "8c4ace08d0124dae56705969891eb427"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "35f2af95f57d7555680bd6c14f294366"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "000fbd841f03fabf02070702f13e8578"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "b95f5f828bc5c77c8a448b06c3cc4620"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "6c11f4cf960fd8366b1287347421c3b7"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "e1a02e38b60a947113f393dd80787125"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "c8e9992d5ad850fd539f7c440c1bcb79"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "8bc2c54ae740735fddc9d0bf016e5d0e"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "947610d56ae3d008ac7f6b1887254375"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "d0a5f25a52a2d0e030ed53e7c2d11dfb"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "e3d076516d22cbb9e0a232197e501bef"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "6724d9b838951a20057c3b1aa6dfb17e"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "6444cb1cb94a8164fb0f191163722260"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "9f948ead875de67c91a31f69055bdce2"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "2a938ef0f939822436191527219e136e"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "2ae90f5f7ea8728594cb08314a1e6aed"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "15e4dea886aae9aa0a30d8162df6acd6"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "c30df9ee84c4212606330e532f0784d5"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "0a76ff8bae362f47ce4c7606b10b20f0"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "4acfef58e5dc389bc875894c8cddb6bf"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "fd516be74446b7ca08199ad6c6d75a3e"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "6a736a42cf0d943f692b4a88e3cb4efc"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "5059854f9989de91960494efce58fcc2"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "1fe3cb258e0f895bda6b688796c68ec2"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "6184b3df2ed2d9b902256ff9aaa607d6"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "4c65d8346cb65a30fd44bed116bda6f8"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "15135e25cc3fe9796f58cebfa38c5f04"
  },
  {
    "url": "kungfu/cleancode/0.html",
    "revision": "8f7f8ef1f95c446e3c159ae238ed30f4"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "58bd0bbb9387c3dc2e678484bfb208e4"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "59fabe6be5c10ae643f3ae2fea6a4e3a"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "acb4ac541fda8743c9f16ebd63b7eca9"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "1b08ea22aa3c37c01d2f022b78f6f7b0"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "be33bf538d5190880cea862c879f7e79"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "2b8d11b5d9efd3c46ead098dd8b72cd3"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "8f3d111b3fa05e5560e768cfcfc273c9"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "0cdbca46c928c524b97a7d484cb6d582"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "1418721b5086fce25b4977b6738fef36"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "5eee774d6bf5d34cad12ebb5d1ebc7d2"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "c8f50abb3b6b3440ba123c1fb3869e41"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "a35d52792d7daa3d14931b6fbd4724b6"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "efaecd1dc9cc5929fb1f9bd7e61e2a59"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "3898ae56d5b1e530056e284754ed9fce"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "d35533ec62799e315be509d16225a5b4"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "8793b654e3322712dda4c212b146bcab"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "be8b5bc2c21b4c7594d6f896a8f4da23"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "c41cedbc74ee34f5dbf760ab53214049"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "b4add8d02137909673dd9ee3e8668a44"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "23d11dd38deab45251382aa751df12ec"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "ae1596fefc4b93d189984d0a3fac8a0c"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "32e27df8a64a2085621c0fedadc1a80e"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "d0c6d96dc4ef71551cdb59cc1f8d7262"
  },
  {
    "url": "kungfu/js/vue_react.html",
    "revision": "0b9310fe08edb8401d3be3698b539775"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "f3ee1aaaae7fbc43c35763ffb7eb5d88"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "f8b0ca3b4e9a86d47a39c1b56229efa3"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "2aeb091432eef7410c2fe46a691132d7"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "e9a99e472b410a51bcc7178735b364c3"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "405acfa6146063f24a38736fff6aa9f1"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "8efb08f911857b3c223e32c1ce476f0b"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "b1ee8a46dc6efa7333523b6c5060dcb1"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "d90bdf36f6bdd1ff33961316324734d0"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "298fc6e0566d71701eb02633141ef42f"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "823f1a2f3394718fa43c18652ff7dd52"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "9b6978a024bc65b6c4e0d9f213e1199e"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "8ca7620d60f1423a9f1d8f5b9f6b0e62"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "99cc1f9ee7dd8d8b5ff268e877c1cb7c"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "cad31667ab37c310eb6598ab7f4bb0a2"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "350a85d6e20133c94db6e97b4df9edb9"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "fe892de004ea8e2c82b7e0a19731e8fe"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "17ac441fc1af7592f939b18274c83824"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "219ce7cacd782e11e0539d0b14ec6d0c"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "00aa6bd106d1432e93b12e863a292edb"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "eb961ca3af49d4ae6e74db295d773152"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "a4c2d57ecf72e1acc09012d977b08b83"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "e8e9105b8914ed578becda6883f11839"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "2ea779565d955978956419b3cd285cd2"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "b1cf51e5b05ec2faedfeeef6c2de0bcc"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "b9a3cecdb6ebb21aa7ccf9c818db29d2"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "72f8bf42dbbf673b5e848b756dbcb9a8"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "f6941fea80221a3312da0204e4d06a49"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "40512130c75b1722d3d4122ab3a0d03d"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "28c110e389d496a16708a9c544de9e09"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "ec613cd4478cd951c6da891b74d57405"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "bbe0f8f1c6abb9b554b21923e24636c0"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "bbfe35221c63d65f273048454e90f7ea"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "2ca9321084d3efb8c19ad4f675dce200"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "5de51d4a23e26e4fcd1c128864df7812"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "75c198cfbc3e5526a31f210347071611"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "0076a555f1e10ed89638d4ff5805d3b0"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "3c7df4a64c9da6948dae4aebb57c3073"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "fc68e764e335c8510db63a1259a70ca9"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "1dd5c771128a46f37fe42ed2932829d3"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "5d5eb6738c148be54256f6ab9252160a"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "e08ea9efa10b1e1e6e7cc4a059fcb873"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "c0ab904625e5def91cf76b4bbf439cf1"
  },
  {
    "url": "kungfu/template.html",
    "revision": "784b97136d706218f0d3e44929e39fc0"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "43045e7970be456e3791c5c891462631"
  },
  {
    "url": "node/env.html",
    "revision": "2425e3c3e168a78d0d06495c4bfdb64d"
  },
  {
    "url": "node/index.html",
    "revision": "53700eea6ef8b9e741726c46cda194fd"
  },
  {
    "url": "node/n.html",
    "revision": "154fac0a54dde9f5938a5302d506856d"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "71fb806c431054721536334cf38f6463"
  },
  {
    "url": "node/npm.html",
    "revision": "a22454a8d37f1d2bb60789348e714ab5"
  },
  {
    "url": "node/sequelize.html",
    "revision": "b0f52644a12596b9e1314652a17f36e0"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "4fc1716327d616a2ff91a95d0cd91ab3"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "1922e39d9d223255c691a124ef623c5c"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "f3885eb83e735e83c50af62ee2199fe8"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "7121f74c65cc96b3085068683b48b4b8"
  },
  {
    "url": "php/clean/di.html",
    "revision": "de9cd630bda51abadb269ff90c6247c8"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "cab7560e3ad96f34aa3e7aed29e0e178"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "f760aaa11a927c19b0a85d9c32da3306"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "744f41beecf0241da4c768ba92dd166f"
  },
  {
    "url": "php/clean/index.html",
    "revision": "030359f3996b8ced03206572877105a7"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "275884fda48c2ed6d20b8f0a66cc6b1d"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "51b2a099d0637f6545ae905d495f767f"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "b2f5099679ef1990115ddfba97c70b33"
  },
  {
    "url": "php/composer.html",
    "revision": "2ae7f2007265f992996b918f1d15e4c8"
  },
  {
    "url": "php/crunz.html",
    "revision": "5c99da1685bc13a9140575f7613ed5f2"
  },
  {
    "url": "php/laravel.html",
    "revision": "a430063202e9a4b95d029a88ace4f531"
  },
  {
    "url": "php/magic.html",
    "revision": "a607adf42dc1477c5773c8c6ad7c9ee5"
  },
  {
    "url": "php/notes.html",
    "revision": "053e0dbb0544086bb44603c7c1761f0b"
  },
  {
    "url": "php/oop.html",
    "revision": "9878cd6d11328a95a619a3e2abc4c3fb"
  },
  {
    "url": "php/php7.html",
    "revision": "9b256aa87df12df5bbe9c1169d9caf65"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "303f89adbe137b144e99720ee6557a65"
  },
  {
    "url": "php/reflection.html",
    "revision": "4790cf9c9115f03a1902929aecd37f72"
  },
  {
    "url": "php/tricks.html",
    "revision": "5b3a93cb80bb7d124edc0dfe1b4cca11"
  },
  {
    "url": "php/wordpress.html",
    "revision": "a8eb7fc157ff7d12f9bdf8816de412be"
  },
  {
    "url": "quotes.html",
    "revision": "03cfe6cba0f0ee15a497c46838993cf2"
  },
  {
    "url": "refactor/notes.html",
    "revision": "21658cf6a53a725c919422d6d2ef6a38"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "bd171af8941e90d86b39765e8c496173"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "66a887b795af3ed63504157e58d2c0f1"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "2a67042eeb894e6c0d6ab47601616e15"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "088247d4e6859bcad745ab1f423ecaea"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "964153a3a0611d42294bd33a2c2e6508"
  },
  {
    "url": "snippets/jest.html",
    "revision": "fa67d49d3554094f51d3c0686d120ff0"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "e48600657dbf77365f92144bdf7c1c53"
  },
  {
    "url": "snippets/patterns.html",
    "revision": "6bad175573e7d171af9776e446cb8333"
  },
  {
    "url": "snippets/regex.html",
    "revision": "316b66a766cde1ff2c6af52a927bd2c7"
  },
  {
    "url": "terms/12factors.html",
    "revision": "dd0883d3cfbea21acfad7b1dc53c76aa"
  },
  {
    "url": "terms/architecture.html",
    "revision": "9d662241db3278f064ade1a4e4763613"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "68d4de588a9edc886b78c3be7d38d36d"
  },
  {
    "url": "terms/ddd.html",
    "revision": "baf1d081f8ff492968da27bbf08f29f3"
  },
  {
    "url": "terms/di.html",
    "revision": "4ce164883add1818cc3e151fd338b607"
  },
  {
    "url": "terms/javascript.html",
    "revision": "9049525328c18e66d0b5354d0e02e916"
  },
  {
    "url": "terms/oop.html",
    "revision": "6b685d9dff55f6c4acf4e4e825e4dc5d"
  },
  {
    "url": "terms/principles.html",
    "revision": "1c7530761b6487d57eb9511ed881fe68"
  },
  {
    "url": "terms/rules.html",
    "revision": "9787a63ce5bca37c1b74497292b0df5b"
  },
  {
    "url": "terms/testing.html",
    "revision": "d81070eef1a4dcc9aae52848924cccec"
  },
  {
    "url": "tools/chrome.html",
    "revision": "f1bf3ebd99c0b074f6ab6cd0137a76ad"
  },
  {
    "url": "tools/docker.html",
    "revision": "eaceb278b0736515278998dc3df15969"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "70e06a55110fafc976aa4e13b015c47f"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "d28adbfccb8e710ba3a9e6e81cc49d90"
  },
  {
    "url": "tools/graphql.html",
    "revision": "a9edff32560ac5a7ce05dcbbcade8067"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "af9befda4e8c389607cc920708bb4d94"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "e48e0ec5d5a1c646e728c6e1120ad904"
  },
  {
    "url": "tools/redis.html",
    "revision": "85d553887346a937019e9a70f59806cd"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "d52aaac5ca159951ac2f8183b4885518"
  },
  {
    "url": "tools/vscode.html",
    "revision": "86d2173f4ac628f572e36b1ed8a8de4d"
  },
  {
    "url": "tools/webpack.html",
    "revision": "4483d344e98f0df57f1099d57d93e06c"
  },
  {
    "url": "tricks/compare.html",
    "revision": "ef347b6aad87d2f3cfffb5773273aea8"
  },
  {
    "url": "tricks/git.html",
    "revision": "6fc60441e3a5c733058a4a0fdacaa36a"
  },
  {
    "url": "tricks/linux.html",
    "revision": "cdbdf028a9bcfb7fb2cdda336d50980c"
  },
  {
    "url": "tricks/mac.html",
    "revision": "6ba2f43df21e00171fd531b4a500f405"
  },
  {
    "url": "tricks/misc.html",
    "revision": "eaaaa942bb6265ef2df1185af770a38c"
  },
  {
    "url": "tricks/setup.html",
    "revision": "1a9a9ea0577a6e17417bdd55c476336f"
  },
  {
    "url": "vue/communication.html",
    "revision": "0ff8564ac16fdfc67741d380402933cb"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "ec7aa9b36d4733fd8f8fff981d25e5a3"
  },
  {
    "url": "vue/events.html",
    "revision": "d8f8fe52a80e43f501190142c5e9e1aa"
  },
  {
    "url": "vue/references.html",
    "revision": "bcb34f3c8202ffb818cd722a3467042f"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "ae7b9149d38af8717a523788d6af1845"
  },
  {
    "url": "vue/test.html",
    "revision": "9773cfd371f2fa6c790ab35f7bb365d4"
  },
  {
    "url": "vue/tricks.html",
    "revision": "876fa2684c536427ca951c6cfe48bf3a"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "5da326a6d4753bb7e8305b0631d25c74"
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
