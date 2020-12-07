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
    "revision": "c5cce192f4073a0942c37f80da6d8130"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "cdaf5a71a1e748236a16671e0af77217"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "f5e585b8259e4292f9c85f60689a963c"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "d1ee1a053ae9349305e3e79dc1b84cc1"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "203a2d7c5a12d7a0c96f6b0bd05cdf00"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "6dad4ccf9dada08ce440abb2f6bb0101"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "66c2ce6ca3b5cad510514899db3c0055"
  },
  {
    "url": "algorithm/string.html",
    "revision": "8848a12be250be0876457c302d48da89"
  },
  {
    "url": "architect/authenication.html",
    "revision": "26aceee3895f0fff38a3838c181f0661"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "0adb6a5b0644f79a2a784bed0b13831e"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "689b0c60d643b954bcd30de87e968329"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "487622bbf92b03e982227b9831b95eea"
  },
  {
    "url": "architect/ddd.html",
    "revision": "6f7c170f37ba952bacff0c8c3507ce3d"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "4acf31ddc64e62002adbeeb288d1910a"
  },
  {
    "url": "architect/ebi.html",
    "revision": "7485a1796d9d9db90aab27c88af72d20"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "637edb6e0d03df32f7902ba6de778303"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "1d11f63594375365fa85569c239b398a"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "ba2a1d7213c622a3a33821015b76b075"
  },
  {
    "url": "architect/index.html",
    "revision": "d3c6fe64ef7c5d5268a7feb7fb6b940c"
  },
  {
    "url": "architect/mutex.html",
    "revision": "130f2642f06754f579cdcf51d191068d"
  },
  {
    "url": "architect/notes.html",
    "revision": "cbfbae35dad4cbe2154d1a7535243512"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "cc165d5c4c931e9dcb4f2c0a371a0d92"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "852b9f53bddc71e99b86ac4de6c6bf95"
  },
  {
    "url": "architect/refs.html",
    "revision": "05764156b9cff34db7708b8f1ed7acac"
  },
  {
    "url": "architect/soa.html",
    "revision": "ac5c6931614a33a7b942ddc8094f0ba3"
  },
  {
    "url": "architect/spa.html",
    "revision": "8e974b38a7705116b17ef70ebabe7138"
  },
  {
    "url": "architect/terms.html",
    "revision": "d3787dc62f6f5cc621a2f413c42b0ab6"
  },
  {
    "url": "architect/use-case.html",
    "revision": "9cb073ea172a6d3ba2ce5c8b4e970ceb"
  },
  {
    "url": "architect/webservice.html",
    "revision": "243ce3b37c35b7829b7eb576ea31da02"
  },
  {
    "url": "assets/css/0.styles.49740982.css",
    "revision": "2fa2405afce6a09022141a7f3068fe4c"
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
    "url": "assets/img/image--002.e715b54f.jpg",
    "revision": "e715b54f81643d03029a767b12ac4927"
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
    "url": "assets/img/image--005.b90151cf.jpg",
    "revision": "b90151cfaefb2b4a7318badbf7f6222f"
  },
  {
    "url": "assets/img/image--006.9c6c95b6.jpg",
    "revision": "9c6c95b62da5cee8697f50acf538a07a"
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
    "url": "assets/img/image--016.73f6b03d.jpg",
    "revision": "73f6b03dbb2d348ad05b081855fbdcf6"
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
    "url": "assets/img/image--024.c878a00e.jpg",
    "revision": "c878a00e80daabb53fa0a1f8325fcdd9"
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
    "url": "assets/img/image--038.ddac44e3.jpg",
    "revision": "ddac44e3079ce4b91c71eda3c588c022"
  },
  {
    "url": "assets/img/image--039.bd0141cb.jpg",
    "revision": "bd0141cbfe9718639f5d05e44efcd1cf"
  },
  {
    "url": "assets/img/image--040.413484e3.jpg",
    "revision": "413484e3c9e6e0990646b3ba961481b6"
  },
  {
    "url": "assets/img/image--041.a2ea71bc.jpg",
    "revision": "a2ea71bc0c4edfca5582ca011d6bd2d3"
  },
  {
    "url": "assets/img/image--042.c57c62b1.jpg",
    "revision": "c57c62b1f3e4373aab86d8b286ea397b"
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
    "url": "assets/js/10.252b8a2a.js",
    "revision": "87b3598f6a78ea01d9d6e168c59802a7"
  },
  {
    "url": "assets/js/100.98d61af1.js",
    "revision": "5fe0ec362731b18eed7c6edeb14eceb8"
  },
  {
    "url": "assets/js/101.467adbe0.js",
    "revision": "a76066ea168f3daa270c0c8bea049bb0"
  },
  {
    "url": "assets/js/102.e3c324e4.js",
    "revision": "89b12067670896c21b78a712f443be2a"
  },
  {
    "url": "assets/js/103.ef60821d.js",
    "revision": "84d514f6f00765495fadaf182f29905d"
  },
  {
    "url": "assets/js/104.e48a88dd.js",
    "revision": "a12cd8c93615f6d81d70dd7f77683ec7"
  },
  {
    "url": "assets/js/105.5ba00055.js",
    "revision": "cb16ed78aeab20a95f8c064a09240c1a"
  },
  {
    "url": "assets/js/106.d83ccc21.js",
    "revision": "9a09e8a3587cc1ac62b03fcfc77fa99c"
  },
  {
    "url": "assets/js/107.e39c073d.js",
    "revision": "ac00e192c592fd06cbfee2f9223c4b4b"
  },
  {
    "url": "assets/js/108.ee0758e5.js",
    "revision": "9e58d3a237b8daaba3455b53d08067e8"
  },
  {
    "url": "assets/js/109.5dffc3aa.js",
    "revision": "a936f4627ad859d9a6a5ab48c974730c"
  },
  {
    "url": "assets/js/11.b397fc06.js",
    "revision": "4d18dcf5bad66499115a043f6143b520"
  },
  {
    "url": "assets/js/110.f9e049ca.js",
    "revision": "b612d1c0bffd2f19149fb389c186fae0"
  },
  {
    "url": "assets/js/111.12d96319.js",
    "revision": "b1924430bc7e5e4a5ed6f323f67127f7"
  },
  {
    "url": "assets/js/112.2d3c24f9.js",
    "revision": "45180bd933d716382e4187dae3d5eb8d"
  },
  {
    "url": "assets/js/113.dbc6a613.js",
    "revision": "7cb20c0ad2990baf924ee57b46bcb6e7"
  },
  {
    "url": "assets/js/114.170655a9.js",
    "revision": "f414d67998651b8e4842f2820516e7d0"
  },
  {
    "url": "assets/js/115.df2de4db.js",
    "revision": "542b87b316a12093e01e665f8ff3cfdb"
  },
  {
    "url": "assets/js/116.5935c713.js",
    "revision": "396ba11a5566a76816b8cb8c4822827f"
  },
  {
    "url": "assets/js/117.4a8bdc13.js",
    "revision": "fb946d31553dde3df87e68e4954ba087"
  },
  {
    "url": "assets/js/118.d01e1925.js",
    "revision": "31054a474f6828bc6d82fad59990f15b"
  },
  {
    "url": "assets/js/119.72bf1e29.js",
    "revision": "734da33208d2e90cf90d16c79fb06ac2"
  },
  {
    "url": "assets/js/12.486fa73e.js",
    "revision": "f6b37a762631c5fb79d3a72d736cee9a"
  },
  {
    "url": "assets/js/120.e9401329.js",
    "revision": "dd77131de42889d99e89003133e90caa"
  },
  {
    "url": "assets/js/121.c85e95b3.js",
    "revision": "a64cba7daa8dfdb44302616cfa756f42"
  },
  {
    "url": "assets/js/122.34027061.js",
    "revision": "16035c9fee56d0bc8f20c8c7cb75ec7a"
  },
  {
    "url": "assets/js/123.61000a76.js",
    "revision": "4ac38c42b3c7d7f3564cd16218fe38c7"
  },
  {
    "url": "assets/js/124.0baa56ec.js",
    "revision": "d2d084a98440954f17bac155da83ec40"
  },
  {
    "url": "assets/js/125.d2585c2b.js",
    "revision": "6322bd15f1e678fb34b95e4e0115b320"
  },
  {
    "url": "assets/js/126.79304cb4.js",
    "revision": "f40bed18b7c784afef015e0ec08e2cda"
  },
  {
    "url": "assets/js/127.373b5799.js",
    "revision": "49b7b7621a01605698d14155f1310240"
  },
  {
    "url": "assets/js/128.ef27bc82.js",
    "revision": "0070cb6ca966c596914f4b40d2c54c58"
  },
  {
    "url": "assets/js/129.d4d1448c.js",
    "revision": "7e7138d0a0c59284cda35f27f9e909d4"
  },
  {
    "url": "assets/js/13.0042df14.js",
    "revision": "0bbdf1ea447ddf20b81331137c86e411"
  },
  {
    "url": "assets/js/130.fb2979fa.js",
    "revision": "5b1a3951f2c9f3837981217f666b3ff6"
  },
  {
    "url": "assets/js/131.e370221b.js",
    "revision": "cc8abfd611af1145c7d98763081a520b"
  },
  {
    "url": "assets/js/132.4951e028.js",
    "revision": "23aedda8a4cf9fb62cfa0c819ba9d999"
  },
  {
    "url": "assets/js/133.d2f7c10f.js",
    "revision": "10ecb85df527198c0d2473adfe933540"
  },
  {
    "url": "assets/js/134.d9cfc686.js",
    "revision": "5b809c834e2459be38b2bc118c41cc5c"
  },
  {
    "url": "assets/js/135.d057acbe.js",
    "revision": "d0d82d37e3f46c239de2a49afa2523c7"
  },
  {
    "url": "assets/js/136.c687767e.js",
    "revision": "311e4cd4a09c2f519ee0b9f31e39b371"
  },
  {
    "url": "assets/js/137.be30c396.js",
    "revision": "5e439997ea3a999fa8da4dd3bce4976e"
  },
  {
    "url": "assets/js/138.56ba7065.js",
    "revision": "6962fb8d36bf7f82a2dac2fbd3998b02"
  },
  {
    "url": "assets/js/139.cf3424f8.js",
    "revision": "716d458a37a64494ebd72d2693edd9f6"
  },
  {
    "url": "assets/js/14.0cc45a55.js",
    "revision": "54d986cf7cd6e65930ab8e60d8cf4786"
  },
  {
    "url": "assets/js/140.76b03d38.js",
    "revision": "24d630e94ebf217ce60607c2b9eb4e04"
  },
  {
    "url": "assets/js/141.0e1f735c.js",
    "revision": "34a5510832b3f3f929ef96e53fad5716"
  },
  {
    "url": "assets/js/142.941468d7.js",
    "revision": "7fbe04279bcfa5d7b8e2d2abcc0c70e4"
  },
  {
    "url": "assets/js/143.5575c3e7.js",
    "revision": "31115087ace8d0f872117c3808a43dba"
  },
  {
    "url": "assets/js/144.2237340a.js",
    "revision": "12df18bd98f02597397b0c7ba17e830c"
  },
  {
    "url": "assets/js/145.ec1cd31e.js",
    "revision": "f855d53c02b2e4ba0030f4b8bed877b6"
  },
  {
    "url": "assets/js/146.f5dbce22.js",
    "revision": "f68e86c9d579f8b61e0d838d22bf4616"
  },
  {
    "url": "assets/js/147.db512707.js",
    "revision": "b18ab12b166a9c8023a8ba386c57b502"
  },
  {
    "url": "assets/js/148.2802424e.js",
    "revision": "1a87af0fc53ad23ec681057990d58722"
  },
  {
    "url": "assets/js/149.1d514ad2.js",
    "revision": "1f6d3b4e40bd38d5ec4195bc2012da5b"
  },
  {
    "url": "assets/js/15.d73817d3.js",
    "revision": "922e28c476430b42222596328ca059c6"
  },
  {
    "url": "assets/js/150.43631c19.js",
    "revision": "1eda7c6d3717e57edcdcb81e694f356a"
  },
  {
    "url": "assets/js/151.6259affc.js",
    "revision": "7b44517449f5649f0137e0898e9a0cb7"
  },
  {
    "url": "assets/js/152.34641c71.js",
    "revision": "3b980c6e28e16aefbbc52f896c2c1f87"
  },
  {
    "url": "assets/js/153.dad460ab.js",
    "revision": "9c659e4e057a8383f09d089d4e63af7f"
  },
  {
    "url": "assets/js/154.b97b2dfa.js",
    "revision": "6aef50f108afcafc3168feda5bfab7a9"
  },
  {
    "url": "assets/js/155.c5453c61.js",
    "revision": "1445003ff724a8a3bf53dd6f829c6b2b"
  },
  {
    "url": "assets/js/156.6b6bd56a.js",
    "revision": "115833eddd268398d85467fbaf8eff94"
  },
  {
    "url": "assets/js/157.c369ed3c.js",
    "revision": "9b0029dc83fd6a499cd9cf70cd4d9793"
  },
  {
    "url": "assets/js/158.f8540c1a.js",
    "revision": "85c78ec6766f45a438181947164f9018"
  },
  {
    "url": "assets/js/159.de7feef8.js",
    "revision": "904b6c0d0dd1af36771e185b3ca06c4a"
  },
  {
    "url": "assets/js/16.acdde0a4.js",
    "revision": "29e8179d301f52723c3b9a44ee07a08f"
  },
  {
    "url": "assets/js/160.cfd09325.js",
    "revision": "0b2c10a7bde1363f3e46d0005e339787"
  },
  {
    "url": "assets/js/161.5829d639.js",
    "revision": "caab32cad3e9623c36e0a6e621a08522"
  },
  {
    "url": "assets/js/162.290e613e.js",
    "revision": "e9da58c609b60d9e55c8f93b777c59ad"
  },
  {
    "url": "assets/js/163.265b73c4.js",
    "revision": "a9f6eec50cc31715371ef6f309d5fce9"
  },
  {
    "url": "assets/js/164.dc637f78.js",
    "revision": "915941d16e1eb51d79ede4f81d6b8001"
  },
  {
    "url": "assets/js/165.069beb16.js",
    "revision": "c207ced5c2a225bf39c4494b96e5906e"
  },
  {
    "url": "assets/js/166.efebda3d.js",
    "revision": "4fd95b3701149b71f463bd665f09696a"
  },
  {
    "url": "assets/js/167.94f1aa91.js",
    "revision": "673bb465102af7446aa6a0f060583de9"
  },
  {
    "url": "assets/js/168.c1483dcf.js",
    "revision": "939c4afecaa655f65ada67278abc0835"
  },
  {
    "url": "assets/js/169.37251ea9.js",
    "revision": "e83cdd4725accea38b4733eab941adc9"
  },
  {
    "url": "assets/js/17.dfbbc8e4.js",
    "revision": "e71e5811544f7a0e18beb2434b36aa79"
  },
  {
    "url": "assets/js/170.7e36e65b.js",
    "revision": "51b95be2da708d6aa678433808d33bbf"
  },
  {
    "url": "assets/js/171.cc3567ec.js",
    "revision": "9a42575082ec3797d81ca0ab9ab2540b"
  },
  {
    "url": "assets/js/172.a5437497.js",
    "revision": "ff6564b642af9659112ef7e319fcfbd7"
  },
  {
    "url": "assets/js/173.abacb22f.js",
    "revision": "abf7e722e6342783a301a14be2efa802"
  },
  {
    "url": "assets/js/174.3648514b.js",
    "revision": "4923e75473b0e00c2517f030209d8923"
  },
  {
    "url": "assets/js/175.3ca1fc4b.js",
    "revision": "f7bbdac9eac9a70b48e722f8d3a7191b"
  },
  {
    "url": "assets/js/176.426932b3.js",
    "revision": "7cd093fd9a89755238f3504f7021a9c3"
  },
  {
    "url": "assets/js/177.15081840.js",
    "revision": "8a89798a458d025d1907323fe5cf32b7"
  },
  {
    "url": "assets/js/178.b1f8feef.js",
    "revision": "b96a6c8a70a7740003fce9d5af7032ad"
  },
  {
    "url": "assets/js/179.7d4b31ad.js",
    "revision": "f57e3886127ae34bb8efbfe3e0c14bc5"
  },
  {
    "url": "assets/js/18.29379bbe.js",
    "revision": "ec21c008c846ba0a68ec97b814746129"
  },
  {
    "url": "assets/js/180.84e0d185.js",
    "revision": "1b89c3728dc8fb82fcd141c54a661abd"
  },
  {
    "url": "assets/js/181.4732cba6.js",
    "revision": "1e8c4def3775205577694400f4831d93"
  },
  {
    "url": "assets/js/182.f702b2c2.js",
    "revision": "006a9a59a8658c8abf464af2a31ee7c0"
  },
  {
    "url": "assets/js/183.76a90979.js",
    "revision": "60cea42cfa7f0f6378bde912c9e00767"
  },
  {
    "url": "assets/js/184.e1e608b8.js",
    "revision": "0d793cde49fd1a5f47fff9ed5445cac8"
  },
  {
    "url": "assets/js/185.d0fe3154.js",
    "revision": "2da70d6f5b10be5562c3084f099164ff"
  },
  {
    "url": "assets/js/186.611633fb.js",
    "revision": "e35a57282f191fb2fc5985ef18c2aa26"
  },
  {
    "url": "assets/js/187.9e8b60e7.js",
    "revision": "af3b386496aa58022ef9cec1452e65b5"
  },
  {
    "url": "assets/js/188.e1fca7ef.js",
    "revision": "5b4efedd82eb751782b52129316267c4"
  },
  {
    "url": "assets/js/189.ae3a302e.js",
    "revision": "7f1453b5515ae71cd0536f3046767dfd"
  },
  {
    "url": "assets/js/19.11dfe47b.js",
    "revision": "ded5e4500b4971fcfdce39894e9313d9"
  },
  {
    "url": "assets/js/190.7f579751.js",
    "revision": "e9071177b75efb25bb327087891509a9"
  },
  {
    "url": "assets/js/191.167d9aa8.js",
    "revision": "6f91744ef01b3cdc4b5cc56614a87151"
  },
  {
    "url": "assets/js/192.0b97ee31.js",
    "revision": "1cec1abdf45b298a7feee94eb2a2c291"
  },
  {
    "url": "assets/js/193.50ba3277.js",
    "revision": "92022284a9d6811417790e6814d24e66"
  },
  {
    "url": "assets/js/194.32612f6c.js",
    "revision": "79d77ae33946d74d5b65af642a429695"
  },
  {
    "url": "assets/js/195.8c781f71.js",
    "revision": "7186073e641ab4f201a8b8e903d81237"
  },
  {
    "url": "assets/js/196.3a2160dd.js",
    "revision": "be86e5860081a20d8f75fa81a91c9660"
  },
  {
    "url": "assets/js/197.eb541326.js",
    "revision": "5ed1563d25662f184b1a799d9a862abb"
  },
  {
    "url": "assets/js/198.c9fecc0f.js",
    "revision": "15bd4b1e95a0178246b06efb11a71018"
  },
  {
    "url": "assets/js/199.65d541c8.js",
    "revision": "e456f45effb1122283d0924abc413e2b"
  },
  {
    "url": "assets/js/2.623726ed.js",
    "revision": "5f2bdfa23db3cf9114ff2dbd7c9c76b9"
  },
  {
    "url": "assets/js/20.f7e648af.js",
    "revision": "e44331737aabf2cb213cb02981407dae"
  },
  {
    "url": "assets/js/200.0b09fedf.js",
    "revision": "8017300dbcdb88369ae3d1838405d366"
  },
  {
    "url": "assets/js/201.fda0c313.js",
    "revision": "e51b5c70161946e92eeb83472e935ef8"
  },
  {
    "url": "assets/js/202.80dee678.js",
    "revision": "4e944fdf95e9091f664167071c48f287"
  },
  {
    "url": "assets/js/203.68743888.js",
    "revision": "d7450a1c37ea1bba88727f26a34b9494"
  },
  {
    "url": "assets/js/204.144e75c8.js",
    "revision": "3a6a13a80fd52121ae5e2ae262dfd7cc"
  },
  {
    "url": "assets/js/205.79e5fae2.js",
    "revision": "40a835e4e64d1744e8bd1715c3424520"
  },
  {
    "url": "assets/js/206.8a52fc7c.js",
    "revision": "624af91fba8840bf1d7b3e160d49dccb"
  },
  {
    "url": "assets/js/207.f03b6630.js",
    "revision": "c8ee55062512f0d575688feaa6e2c802"
  },
  {
    "url": "assets/js/208.4adc67f1.js",
    "revision": "7e4bf21011cad9c5f4eb113e7014bb66"
  },
  {
    "url": "assets/js/209.d954284a.js",
    "revision": "1ed15c6a865def66ac1b9c3c22a91740"
  },
  {
    "url": "assets/js/21.66cad62f.js",
    "revision": "9e7414013938ee7aaf8f962add3bf58b"
  },
  {
    "url": "assets/js/210.e229b39e.js",
    "revision": "6f65e635922d511eedc825258edb2b2f"
  },
  {
    "url": "assets/js/211.8dd91165.js",
    "revision": "6dfb12a8fb2529b655e4db562a081e13"
  },
  {
    "url": "assets/js/212.3f274ff8.js",
    "revision": "4f0847c3e4fbf8ce855d27190faa1a60"
  },
  {
    "url": "assets/js/213.d42486d0.js",
    "revision": "dff2918cdc2e98d55742d77f3295b8ee"
  },
  {
    "url": "assets/js/214.bf3d27d9.js",
    "revision": "b2dcdc78e4aa6e95b45a52ec70962012"
  },
  {
    "url": "assets/js/215.ef9618f4.js",
    "revision": "0bef04fe094bb4833e33aa3bff40facc"
  },
  {
    "url": "assets/js/216.130026b6.js",
    "revision": "387efd2a2ba0a74926bc8283682b1f97"
  },
  {
    "url": "assets/js/217.b9121be5.js",
    "revision": "5aaf97d313da3668c93d9279dcc5439e"
  },
  {
    "url": "assets/js/218.c6c282ae.js",
    "revision": "a857300002ae42aec3d34cf4360535e7"
  },
  {
    "url": "assets/js/219.50f585ce.js",
    "revision": "d332e267df7161eb7f4e14ab4f173faa"
  },
  {
    "url": "assets/js/22.eaa2a72e.js",
    "revision": "964aea80346ce755ec977d0461a8812c"
  },
  {
    "url": "assets/js/220.3d0cafbf.js",
    "revision": "c3e53bf7dff450eff2f3c40b7d8a2708"
  },
  {
    "url": "assets/js/221.baa327fa.js",
    "revision": "83a3f5176bdba5ec10ac599abe75f796"
  },
  {
    "url": "assets/js/222.3997462a.js",
    "revision": "530386ff4bfc0b4ec305a9022a7859b1"
  },
  {
    "url": "assets/js/223.96b1a33e.js",
    "revision": "7104882889a14df6852f432852573453"
  },
  {
    "url": "assets/js/224.6c9f07ed.js",
    "revision": "83c70370e5e46f6f0ee0b2d1f265606b"
  },
  {
    "url": "assets/js/225.1d0bb56b.js",
    "revision": "10566a3e62c5bc6716f3fa3fb7975987"
  },
  {
    "url": "assets/js/226.b4fa6400.js",
    "revision": "e4c5a8127b55594d69c56a893e06d89f"
  },
  {
    "url": "assets/js/227.a0982245.js",
    "revision": "4ee20cd20def1332fa7e093fbe585da2"
  },
  {
    "url": "assets/js/228.c22af3a4.js",
    "revision": "b6ee7cc468faa212c620082aa1463dfa"
  },
  {
    "url": "assets/js/229.8d24b865.js",
    "revision": "ad90a24512377849eb8d79342827f784"
  },
  {
    "url": "assets/js/23.7f9a219d.js",
    "revision": "1d7b21ebaad4e72b4f97be4c3c458946"
  },
  {
    "url": "assets/js/230.cb64f83c.js",
    "revision": "34ee50ab9608d78c7c034f3a89d888b3"
  },
  {
    "url": "assets/js/231.abb5ae54.js",
    "revision": "5620be966b6d00a92dee8ef72a51a718"
  },
  {
    "url": "assets/js/232.36d27b89.js",
    "revision": "dbd4f225a199a9d794f57a189376a7e2"
  },
  {
    "url": "assets/js/233.38d9f352.js",
    "revision": "86cfda0443af34984894827e898e4f5c"
  },
  {
    "url": "assets/js/234.ebdd297b.js",
    "revision": "4d46341d38e4c10a4ccce1b9bab09066"
  },
  {
    "url": "assets/js/235.466e7add.js",
    "revision": "4f1234465e5774c097f17f5246923b62"
  },
  {
    "url": "assets/js/236.876cd32b.js",
    "revision": "355cfffb812a7d853925dd89b11be5ab"
  },
  {
    "url": "assets/js/237.3a54a6e4.js",
    "revision": "386287b63ec8de0fc0b1d43c2fadfe82"
  },
  {
    "url": "assets/js/238.8d0d13a1.js",
    "revision": "22b157a833b2324e201f9cd0834b8ecf"
  },
  {
    "url": "assets/js/239.7dd70067.js",
    "revision": "74ffa59e2ce1a63626e6b6bf4dd7f616"
  },
  {
    "url": "assets/js/24.dca6b24c.js",
    "revision": "8088361b24c4ae06aa53773e12987f4e"
  },
  {
    "url": "assets/js/240.24df5553.js",
    "revision": "97953969f8e8358c1a9c07a618c35a37"
  },
  {
    "url": "assets/js/241.abc3e36f.js",
    "revision": "b0e545fde64ac5ee4cfc3adffbefb7f3"
  },
  {
    "url": "assets/js/242.41ab2a8f.js",
    "revision": "56ba8872ca4682008bc7abeb2c1d538f"
  },
  {
    "url": "assets/js/243.f1eba953.js",
    "revision": "90adae27ecb94cc94f76ab715d4f44ca"
  },
  {
    "url": "assets/js/244.45b1e97b.js",
    "revision": "b008449c54e90f8c2a7dafcde860fb87"
  },
  {
    "url": "assets/js/245.2cf65af7.js",
    "revision": "81e3701bf848b0ce2a663384d16aa535"
  },
  {
    "url": "assets/js/246.696c0de7.js",
    "revision": "b1b0a5b56d2528fe98a14a76f35dff6d"
  },
  {
    "url": "assets/js/247.3fca7ab2.js",
    "revision": "044c5d3b12ae9acc2f2f2988d7e9b094"
  },
  {
    "url": "assets/js/248.c4841e40.js",
    "revision": "a46a6dede052ed8214ffeb56baa591f1"
  },
  {
    "url": "assets/js/249.d414bbe7.js",
    "revision": "048bb3cb1692a23728a8aba9d77bd808"
  },
  {
    "url": "assets/js/25.81ef2d7d.js",
    "revision": "d320f32890e2f6bda5b639f0936133dc"
  },
  {
    "url": "assets/js/250.2b5d345d.js",
    "revision": "92d4696bff93d99e515fe99dc9aea511"
  },
  {
    "url": "assets/js/251.d8d1573b.js",
    "revision": "338fe354ee3d34d196f7618b00813d72"
  },
  {
    "url": "assets/js/252.8c86c98d.js",
    "revision": "7628e3b15cec93252833d32f53466a82"
  },
  {
    "url": "assets/js/253.641c32e2.js",
    "revision": "7be6c79748b99bf01e09f7ca29b440a4"
  },
  {
    "url": "assets/js/254.bedfc26a.js",
    "revision": "c296f9617b21d534088b3220d42fc3dd"
  },
  {
    "url": "assets/js/255.b341b73b.js",
    "revision": "3e9eb4eb3800a5feb3364ed617e0d0b7"
  },
  {
    "url": "assets/js/256.b92fe8fb.js",
    "revision": "0172e3a98a302d0d57181083de30f715"
  },
  {
    "url": "assets/js/257.39da1358.js",
    "revision": "32709fc9ecfd681f7e245f33a7691540"
  },
  {
    "url": "assets/js/258.8ed616c4.js",
    "revision": "b789a2e279025b635075a89879b1eff9"
  },
  {
    "url": "assets/js/259.f1670e18.js",
    "revision": "eb68ba1c6045ac598289f25e7d7b5b40"
  },
  {
    "url": "assets/js/26.93f69461.js",
    "revision": "868033f2bac2cc6954a933d5d864d7e8"
  },
  {
    "url": "assets/js/260.062c9633.js",
    "revision": "c80e0e39109ceec0b24a2bf6d7222e0a"
  },
  {
    "url": "assets/js/261.840ab9d5.js",
    "revision": "0a4d219a58431eaecd486954ce34831e"
  },
  {
    "url": "assets/js/262.79cc5b41.js",
    "revision": "9e94fe9bdbf0d722ccc37536faec163e"
  },
  {
    "url": "assets/js/263.ae7ae1d8.js",
    "revision": "1d42dec990752d25a0781395686e6254"
  },
  {
    "url": "assets/js/264.c17fca55.js",
    "revision": "8dd0803d81429b5358810bb7c4be95b3"
  },
  {
    "url": "assets/js/265.465b4fdd.js",
    "revision": "53b5eb52db846b1029304c3e7e539b17"
  },
  {
    "url": "assets/js/266.82e7551c.js",
    "revision": "ad60fd30d1ffb11334fe90c7c9663b45"
  },
  {
    "url": "assets/js/267.0d7ff0b7.js",
    "revision": "84035923859df8030656b31889146024"
  },
  {
    "url": "assets/js/268.72d75794.js",
    "revision": "16f32922d4b2d1b1349573e96e63c269"
  },
  {
    "url": "assets/js/269.8b5d28e1.js",
    "revision": "e46f7f4d5536ad734f589095236e5d09"
  },
  {
    "url": "assets/js/27.101a5431.js",
    "revision": "437a477cd43318a4299daa81a160d731"
  },
  {
    "url": "assets/js/270.dd26717a.js",
    "revision": "e809a362915121639b8422e3ef2b5803"
  },
  {
    "url": "assets/js/271.1c93a73a.js",
    "revision": "6ffde4ce45ebe0ff4aea276ddfbb2f14"
  },
  {
    "url": "assets/js/272.2475faaa.js",
    "revision": "2f469364c73f9c14d2976e11f16aec7f"
  },
  {
    "url": "assets/js/273.9470e5eb.js",
    "revision": "e405b137fc7270878e20f0bf86d8ea45"
  },
  {
    "url": "assets/js/274.72916804.js",
    "revision": "4c77d73369cb540c01e83ac2d7851f24"
  },
  {
    "url": "assets/js/275.73ab1b26.js",
    "revision": "a40003c242f905db197f4b888dee3fcb"
  },
  {
    "url": "assets/js/276.b2e466e4.js",
    "revision": "b73f4356fd147a53268f40a59adfb56a"
  },
  {
    "url": "assets/js/277.dd364cad.js",
    "revision": "1b118bc65b7a40b960be2c744337d941"
  },
  {
    "url": "assets/js/278.6f986f64.js",
    "revision": "7aa76e9ff809adce051f72857b5214f1"
  },
  {
    "url": "assets/js/279.e925be9d.js",
    "revision": "260e5f41dcbf3344ece5c07ccab35579"
  },
  {
    "url": "assets/js/28.5482134c.js",
    "revision": "a146cf5a52c672d97f83f0e31ea9cdf0"
  },
  {
    "url": "assets/js/280.1991a29d.js",
    "revision": "ba0784abb0ab02ad81b78f9630e9f313"
  },
  {
    "url": "assets/js/281.1b987a11.js",
    "revision": "42676ea4ccf7c2cfcc952d971c253a21"
  },
  {
    "url": "assets/js/282.9decbc7a.js",
    "revision": "cfe61d5788a92678818c59b2a03cc4ab"
  },
  {
    "url": "assets/js/283.3dd972c1.js",
    "revision": "01d5755b595f10fe2af47012bb440b04"
  },
  {
    "url": "assets/js/284.ef21f511.js",
    "revision": "95b58a7a329061192bc04c56b1e1f2ff"
  },
  {
    "url": "assets/js/285.3fdaae0f.js",
    "revision": "ea2a641eff83fc715759413d6cada51a"
  },
  {
    "url": "assets/js/286.2a9ae31e.js",
    "revision": "4e17013fc41072aa14918d197efbef95"
  },
  {
    "url": "assets/js/287.cd370e07.js",
    "revision": "3b8d28e3c63f087db77e026cd3ed79cf"
  },
  {
    "url": "assets/js/288.c233ca38.js",
    "revision": "0164ac3a70467c5f4d69822a005b022a"
  },
  {
    "url": "assets/js/289.0965d4a2.js",
    "revision": "fbcc5c834c27791f12d798775c052288"
  },
  {
    "url": "assets/js/29.e571e224.js",
    "revision": "8bd83f320ff6bb56f803b348f0549b5a"
  },
  {
    "url": "assets/js/290.1baac16e.js",
    "revision": "1cd6087d5cc1fb4249b7f73210fd1acc"
  },
  {
    "url": "assets/js/291.10ad4eb0.js",
    "revision": "2b38019c94133ff062916e900d52d1c4"
  },
  {
    "url": "assets/js/292.3061dbf3.js",
    "revision": "046878c2453044fad6bb207bf2bbed89"
  },
  {
    "url": "assets/js/293.4c0e14a0.js",
    "revision": "96aa1bda9c36c2260bba0a91eda25868"
  },
  {
    "url": "assets/js/294.fff197b0.js",
    "revision": "6086713e1c021a8335780d580db39c89"
  },
  {
    "url": "assets/js/295.9827df13.js",
    "revision": "f37f1935f0140b9c046886077c409ad9"
  },
  {
    "url": "assets/js/296.4510efc8.js",
    "revision": "a1f11587cc1c81bdb9d5b9738be5e583"
  },
  {
    "url": "assets/js/297.8c6d5944.js",
    "revision": "30f4f9fa44640885611b9a7ecf6eb9ad"
  },
  {
    "url": "assets/js/298.0962830a.js",
    "revision": "375a12277b0ab9846716aede354057d8"
  },
  {
    "url": "assets/js/299.828c8c34.js",
    "revision": "f48d68629be15180aafff0a7e62a65c8"
  },
  {
    "url": "assets/js/3.5156e8b0.js",
    "revision": "65533c5bbf5160126b5de7ce06cdd806"
  },
  {
    "url": "assets/js/30.ec4bf9cc.js",
    "revision": "ee42163b725787523c234e4cde89980a"
  },
  {
    "url": "assets/js/300.ae82c2e4.js",
    "revision": "8a73f26c7a675dbadbfce3a41f3be738"
  },
  {
    "url": "assets/js/301.2500a83a.js",
    "revision": "8c94885cb1d3bfbecfb7f93b9cf6653e"
  },
  {
    "url": "assets/js/302.c95d18c5.js",
    "revision": "953413337359f19938b9e7ed535ffc20"
  },
  {
    "url": "assets/js/303.a4e076e6.js",
    "revision": "4771afa4e17eb331d47fa146989613ca"
  },
  {
    "url": "assets/js/304.59df7e30.js",
    "revision": "66fdc2dbd9775301b0de485b9d29a85f"
  },
  {
    "url": "assets/js/305.44586a68.js",
    "revision": "34d007f70b00bfa6109ccdbdb76e7d6c"
  },
  {
    "url": "assets/js/31.47cf62ad.js",
    "revision": "d63da0a689bdcffae5dab7011e4a9c53"
  },
  {
    "url": "assets/js/32.e83860c5.js",
    "revision": "7291f784ee8170b6f1f619b6a217d553"
  },
  {
    "url": "assets/js/33.30631df4.js",
    "revision": "af8cbe691d96a30997199c51f73cff14"
  },
  {
    "url": "assets/js/34.9542d8c9.js",
    "revision": "96340587f0100e489495ab19417acac4"
  },
  {
    "url": "assets/js/35.c73233f0.js",
    "revision": "c1a4eb67d788b5389c229ffbf1901a21"
  },
  {
    "url": "assets/js/36.f40f2aee.js",
    "revision": "f864433c358d5280a2a6a091c125bbb9"
  },
  {
    "url": "assets/js/37.8f4c6651.js",
    "revision": "0867add75dcfed80d2e5cdef62dfc0b2"
  },
  {
    "url": "assets/js/38.db3fc1fa.js",
    "revision": "d313f4c3cf1ed96cb35b177058858143"
  },
  {
    "url": "assets/js/39.2e4fbed1.js",
    "revision": "423dd31b8b0a12639055834bfc3c16f3"
  },
  {
    "url": "assets/js/4.5d67f627.js",
    "revision": "0c1cdd297ee12a38db644bd6bfa1ad53"
  },
  {
    "url": "assets/js/40.776e7649.js",
    "revision": "b81a6b02716b7c3dd69a1cdab6f7febf"
  },
  {
    "url": "assets/js/41.2b13c0bf.js",
    "revision": "aeaf6525a8e5e023f67932d44b5caa77"
  },
  {
    "url": "assets/js/42.5c65eb07.js",
    "revision": "6cefa9d162c665cac8a46a542544e02f"
  },
  {
    "url": "assets/js/43.26b04f0d.js",
    "revision": "58f6f3432e78b6af35345954ea6774ca"
  },
  {
    "url": "assets/js/44.150218aa.js",
    "revision": "8f9ede3380f6ff322da75e621e354b61"
  },
  {
    "url": "assets/js/45.41db0539.js",
    "revision": "d381f0c505f2839b7617d21abcbdaaf2"
  },
  {
    "url": "assets/js/46.b78f0c05.js",
    "revision": "30b7347b9dda114ade7d72a4ed533435"
  },
  {
    "url": "assets/js/47.c9fe169d.js",
    "revision": "39dfc65791ce3106e74500b6cbf00686"
  },
  {
    "url": "assets/js/48.ed4fc310.js",
    "revision": "46722349ee516c5bf5632ce04206261a"
  },
  {
    "url": "assets/js/49.4441b367.js",
    "revision": "3efd52ab422ccd5ad1e80f6c6ef69862"
  },
  {
    "url": "assets/js/5.e68a97ae.js",
    "revision": "9c7c2c10dc0f82536de773a26808c871"
  },
  {
    "url": "assets/js/50.829c211c.js",
    "revision": "f1e3087beabd73daa8fc5a0102a7b6ab"
  },
  {
    "url": "assets/js/51.ce296027.js",
    "revision": "28f6796b84e62eb0b8491b4ee3b90e33"
  },
  {
    "url": "assets/js/52.48f9164d.js",
    "revision": "86185400a5665fa1be95f60dd9ba9058"
  },
  {
    "url": "assets/js/53.f11a069c.js",
    "revision": "fb2af692d966e7b10ea239149d8f9c84"
  },
  {
    "url": "assets/js/54.1e86b7a3.js",
    "revision": "9539dcb46999bc72f85c5f3727c419d4"
  },
  {
    "url": "assets/js/55.9b97a2a7.js",
    "revision": "85136021563e7cfc623392ec7ae6dbab"
  },
  {
    "url": "assets/js/56.49e3f9cf.js",
    "revision": "063cd0b93d2ebfdf0149cb0a9fc81dd9"
  },
  {
    "url": "assets/js/57.7242644a.js",
    "revision": "96735574ea4688ee61b61e54391d9629"
  },
  {
    "url": "assets/js/58.d8f588d2.js",
    "revision": "63831f6c2d9f89adf56d4a0ca1921862"
  },
  {
    "url": "assets/js/59.233a4681.js",
    "revision": "64e4ae0cbb3882c3ea1b19d514beb3c3"
  },
  {
    "url": "assets/js/6.553af9aa.js",
    "revision": "bb4ee19ad9216d99b1139b8f4b09b4bd"
  },
  {
    "url": "assets/js/60.712f07a1.js",
    "revision": "9de4c799a1ca4267e00af24cb5874629"
  },
  {
    "url": "assets/js/61.60360262.js",
    "revision": "59a3fb3397e803b10068f4928181809f"
  },
  {
    "url": "assets/js/62.5975afbd.js",
    "revision": "cc6a317ce52257281c43af22421d4a7c"
  },
  {
    "url": "assets/js/63.fa2cbe4d.js",
    "revision": "5afdc72e3d9b8bf45c1f1c4895507d12"
  },
  {
    "url": "assets/js/64.48d02cd4.js",
    "revision": "b1c193a3e5a86097702296b3b5b3dacb"
  },
  {
    "url": "assets/js/65.ed934de3.js",
    "revision": "f156a2f25dad4ca82b8936f660c95e1b"
  },
  {
    "url": "assets/js/66.a2f7c304.js",
    "revision": "9774d32e7a957c05ac5f95c02e174357"
  },
  {
    "url": "assets/js/67.d5c80293.js",
    "revision": "97910472e61e407c870e8672d33eeaa3"
  },
  {
    "url": "assets/js/68.ffe740f8.js",
    "revision": "e5defa2366e90338cc0f7bfd262a36c7"
  },
  {
    "url": "assets/js/69.46226238.js",
    "revision": "246bdee6e38651e325d60f9f606fb985"
  },
  {
    "url": "assets/js/7.6c4ba6e1.js",
    "revision": "0ec210d3e97d0731967aec7acf482ee4"
  },
  {
    "url": "assets/js/70.83d2a4b3.js",
    "revision": "5e3be817258aa4110e144c4905363081"
  },
  {
    "url": "assets/js/71.931a4db4.js",
    "revision": "29a37b827631235dc16e530fe4d2f407"
  },
  {
    "url": "assets/js/72.9b7f1862.js",
    "revision": "8e92f4177967a6c619c36a0628a45f35"
  },
  {
    "url": "assets/js/73.7bc7b4a6.js",
    "revision": "168e749ea49b5a150c553680036feda3"
  },
  {
    "url": "assets/js/74.4da89d30.js",
    "revision": "1ab73933ad86d1c88f179636412d9fc7"
  },
  {
    "url": "assets/js/75.1727a3da.js",
    "revision": "e229567b7ae96ab9383188546b4a4273"
  },
  {
    "url": "assets/js/76.1eaa5d35.js",
    "revision": "d00d831610bf0c5b47cb401dc4cef2c9"
  },
  {
    "url": "assets/js/77.9f8f19ed.js",
    "revision": "abcc6b83adcc9f113ab7b1f5aea3517d"
  },
  {
    "url": "assets/js/78.6bf7ee7d.js",
    "revision": "a0f574446e935dc13dadf2511f4acb92"
  },
  {
    "url": "assets/js/79.607e0fcd.js",
    "revision": "f0a11f91aa01b7366d5642ca2f60e364"
  },
  {
    "url": "assets/js/8.9da6af94.js",
    "revision": "c6375ccc9f06306a3ecbdcabbad01507"
  },
  {
    "url": "assets/js/80.97e1d0d7.js",
    "revision": "6f83c7cec6c8cf28dde5cf470fa57af6"
  },
  {
    "url": "assets/js/81.f576d61e.js",
    "revision": "79981283c63159841d9c60115fb3a3f1"
  },
  {
    "url": "assets/js/82.6daf4506.js",
    "revision": "48d09ae5cd916ee526eb010eb809e17e"
  },
  {
    "url": "assets/js/83.a626643a.js",
    "revision": "52812e50d9894fcd5cce2fd9ad79ebc5"
  },
  {
    "url": "assets/js/84.8a852da7.js",
    "revision": "230b3294954dcf492e68948912bbbc55"
  },
  {
    "url": "assets/js/85.b7a999d1.js",
    "revision": "62a0dee599626da72c06afa66feb5d41"
  },
  {
    "url": "assets/js/86.64ab326c.js",
    "revision": "64ea0dd30d678db79e3e3588adcdf903"
  },
  {
    "url": "assets/js/87.3fd8f634.js",
    "revision": "d72cddbc231a2b8a565b26dd40f776ab"
  },
  {
    "url": "assets/js/88.de00a005.js",
    "revision": "8f12395cc35065665b7120e68f5fa316"
  },
  {
    "url": "assets/js/89.ed3fde5d.js",
    "revision": "f507ec53a2a796eed9df5c20305db358"
  },
  {
    "url": "assets/js/9.ffd39152.js",
    "revision": "cf32598733b639cc23cedadb0e26991c"
  },
  {
    "url": "assets/js/90.84b6d855.js",
    "revision": "2deb148269047f4b8bcff1d9e605771d"
  },
  {
    "url": "assets/js/91.44cea406.js",
    "revision": "da70754976512a9d220646ad746dd822"
  },
  {
    "url": "assets/js/92.81cc9fb4.js",
    "revision": "7898ecf23d44fb103c0bdee617573e8f"
  },
  {
    "url": "assets/js/93.99b5658e.js",
    "revision": "9f28c5df07176ad17500907a36f3cabd"
  },
  {
    "url": "assets/js/94.f640c7eb.js",
    "revision": "7aa94d942fe39459ed0b7e5f67b8d878"
  },
  {
    "url": "assets/js/95.b90fb9a0.js",
    "revision": "44a2e12e2cfd9a3c450866aa9ee477a9"
  },
  {
    "url": "assets/js/96.8febe93d.js",
    "revision": "b67f7968532db4fb8c2cbacc9d7ccc6b"
  },
  {
    "url": "assets/js/97.002963f9.js",
    "revision": "0108aaa1d50b9e76bdf075d567ed049a"
  },
  {
    "url": "assets/js/98.91580ef9.js",
    "revision": "2d8dd9e4c64a6e36e8914ae61ffb4daa"
  },
  {
    "url": "assets/js/99.edcb198a.js",
    "revision": "dea3b199988c10261d58143457611847"
  },
  {
    "url": "assets/js/app.5e1c19b2.js",
    "revision": "9b9cd6a8d79c26a6494d3e8e26f0f8e1"
  },
  {
    "url": "common/architecture.html",
    "revision": "7e46e59489b189e4d86c1103d3021793"
  },
  {
    "url": "common/crawl.html",
    "revision": "b90687802431cf8ea12659d4c80cc6d4"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "6cd0281c5136f951015f28a91c9ebb32"
  },
  {
    "url": "common/document.html",
    "revision": "c0d59e62e4b558f4ba29fbb437890502"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "22822071a41b64ba4ae3ba426dda796a"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "7f99a7a87e2ac7ecd7a9387fdea28fe5"
  },
  {
    "url": "common/index.html",
    "revision": "635af266fecb3480e92d8d9abbe128b1"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "3d5f564aa5bc9b54fd5516a27ba7923e"
  },
  {
    "url": "common/realtime.html",
    "revision": "a3dfc14805135de5e0093a4b698627f6"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "e79a62c847962c683ab35044c084b3db"
  },
  {
    "url": "common/refactor.html",
    "revision": "a77609e66855dacc9d2aff81b66ba454"
  },
  {
    "url": "common/restful.html",
    "revision": "92cd435ca0fb3dfcdc68799370ef5fd8"
  },
  {
    "url": "common/seo.html",
    "revision": "5de3dc0913a50beb75b8c62059c5373c"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "7ac6a6f0218b72ae6f5a8ffb82e2f833"
  },
  {
    "url": "css/tricks.html",
    "revision": "99d352a7553c93658756ff16e36cb1f7"
  },
  {
    "url": "db/architect.html",
    "revision": "2b603f2797d69b78bd12afcbc37588d7"
  },
  {
    "url": "db/cassandra.html",
    "revision": "e08b9554c52c0f2e5aa1e4a938e4039c"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "4e70a6c5447e2a17622b4312ed132a73"
  },
  {
    "url": "db/nosql.html",
    "revision": "72ba843a151153140958b2c9ee571889"
  },
  {
    "url": "db/optimize.html",
    "revision": "cef934c3b001a2cc9e4d87af4a4fd05b"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "4d9f1e7286bfcdad1e6eedde7fa9822e"
  },
  {
    "url": "db/postgre.html",
    "revision": "e70ba97ccf96a8b39d2cdf90da324c28"
  },
  {
    "url": "db/use-cases.html",
    "revision": "9b7962091b7ec46e977c99ef6abfbdce"
  },
  {
    "url": "go/index.html",
    "revision": "f60f6a230eeef95e0f957987a1458dc6"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "d3fc44fb5bb185e8af08bd66098a7d3b"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "50fcb5e07389c70673c0ca6ae85707fa"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "6dae1750eedb985a56f983a4f03ae72f"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "084d157c3709da0e838d27007d9e1404"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "230f48aa5a26be180d0581d9f73fa44b"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "1cf47787910ddeca3bd21cf45848183a"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "52d6949b9f461fd4676beff1d679aeb7"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "2bc45484f76f77998fc60776a48ec34c"
  },
  {
    "url": "index.html",
    "revision": "3fff473b70f7750edc2feddcdc5cf33d"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "1675d8de73f14c9be853fe76a3cc8f04"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "c757455a14603e278a76d1795d8f5aab"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "00eeb849adf39ad270732aefbe7f7d6f"
  },
  {
    "url": "javascript/closure.html",
    "revision": "cfdfb3f8f46e9b613dff8ba1da86433f"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "5df9adb0af282d7b03e0addb516b5b36"
  },
  {
    "url": "javascript/functor.html",
    "revision": "ce94d4e4a92d1ab08b74834b874ea5d5"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "90666fc61ec05f300d26989a03bae66c"
  },
  {
    "url": "javascript/react.html",
    "revision": "fd47720a4024e125101df772f54c8e80"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "69d91c1a2b9e451fcfa5cd4f6e2373c7"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "ac2c6e350942670a570e08685f3fcca7"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "8829a5dab6f2b981bb553ac4faf9fa29"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "f7760eb4ebe1c6db1ba7ad5b866f3a8f"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "bc4221e36dacddc8c3e8527b189ef727"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "b69e946d088591766f8450939632be9b"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "aac644bf50f78358ef207e77b0cd7885"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "8fbc872834986f45964e2fbec34c7f9b"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "ca2bc4693ee8ba9a1fe50f04e417c2b6"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "82c5e5b9ed0310a79a40a30a94f0dc24"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "28adee6e922cdd95dacb1d2bbc5b923f"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "7e207036ad807fe003d8dd8f7e289cbc"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "dabdd63f3a1e396c23e506e6f2a46809"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "7aff84e5a204a07bf25d84b8fd8c5ec2"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "3eb056542fb2d0b9e5e6f2780b265bd0"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "62c9694cea69b3df8d0f8de120a582fa"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "4172a9fc021acfc7e271cf42aa24f7fe"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "f6d751588949468bad28f3e4ade8d688"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "bd5a1cd673de0b3c7a4c5a2ba5f5df4a"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "59b4d77758a05fb2e786f4a9114f1323"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "3ab2c5af77d21e927bee1f0ec0df283b"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "0b319de72cf17259f8449abefb60923e"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "6cb2290c9202043122d80670821dc0bc"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "4d6eb6f9a6545329181f296e05e8e1c7"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "55aa2d658dc656b803c49cf3a0991baf"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "c82f369816afc26aa4d07ab8304315c9"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "4a747c30bac124697febc797586b61a7"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "5f7323e4eeeecd793829788ac31d980e"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "8d8963f5110f0f3ed753be91fbdf28fb"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "207a2d522f3bb3bd4509d10c8b9e3e4a"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "616546656d671f33b51e1780b6b7bcd9"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "c2caaaa5abbfb1fbaabc2a5b54c25d4b"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "82e0ac0911e51aaf66d51412cb9f5791"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "b463b285de484c29a4fba4cc3d97fc12"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "6ab0781ac0944042a31b13a02fbedd94"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "b102ba2aba5956dc89a193e0a12db844"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "166eee6c1bd90ff6018fe04c5df29378"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "3c44f14d9a43ce903b53810740c94144"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "3589732809cd53144d23859829aa3824"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "5edf74119daca12e122e7c9b1b54c24a"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "a7b3a52e7d726414cb069e9085b3e5dc"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "b70d51d19289433110796f53012cacfc"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "3e9e939153f5b82fa3b78921cd340055"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "2ab669767908879a42723d77c34406a5"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "35a6c4571d284892b1aec9c069d10eab"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "ecdafa679bd943f523cd347d39e35ae0"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "b0374b7ecc819e498ecf558b6f9ca073"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "c1f9c2eafb4c40b514556c611e9b23e2"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "cbcd1fe1ae30a8d10ec214a15cefe095"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "78cc48aabcdb6bb0d8c8f28542e474ab"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "546967a08d6bc3c7d26009a6adce2ebd"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "dffdaf7aa1f6b6b75cd81441a6ca064b"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "b2eb61c26a3fd5ef17d8788673a9d35b"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "7a63e9550d7bd47bd1cb571a49fa4216"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "22554fa01f980a26fd559cce1ffeecfa"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "706bcfa3cde9fae0312b8ea10bfba096"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "43b7da5dacac527204d7f75695923a9f"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "390af99f1fd69e85bfb1990302eb8256"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "19e04a6b60e4bde30997235983b81e23"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "ac0fdddb71c37ddc160a3348c15ea09d"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "ea00ca0eb1a6e5c2aaf61f39936c1307"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "86f7dd539f600805956f78b267807df7"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "a4463d1c431bd4715e8b3e61ba653b32"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "1ff1e0e38c3b393e3844a8be21df71c8"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "d375e8134eeec4f8a6ed3d921414b946"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "d40becf4551e2764a1ae9d5c655ce9c7"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "f145241e053664396e0ad2557c7d76c6"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "9158cc50fbf1d7766b4dc6623ceed482"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "a9f2e6d8e1c23b536e0dbc303c854bef"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "63c375dac3f9e61795ecf0dfe39b2926"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "c609b64cb536cbbbb235fe6fec1e8f5d"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "763d346f924ea1b5721df39e97a7217b"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "5deeaf4ed7bcf0caba2b2aee1ac01632"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "244399614486d1d9f1f01b4d30d6bb71"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "db190322e528155c206ec10dd86c7954"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "b7513e0c108ec66b96c8d49e8cfaee47"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "6c31c1cf07ae9e9764e38ebc3ecb1751"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "979e576abe9b991b0a4ccf0ee021aa8b"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "45342d1e44803c4fb9312d34cca67b69"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "d47dd6990c01e5a8fe8b9e462a644341"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "0cae84a142d17a9ab2836b9c98a335d2"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "f091aa62b82cb5921d683c5e43b08e93"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "837dc3b3ce8285f3f82cf29ca3be7469"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "d6cd91ae4a4616bd5c08aa5a0c6d63cd"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "d9820b02db46a14705c5fe19e5656b35"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "be57ab238f1deacdd67f7674930e77df"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "75deaefbec673c972c3c2850bb9f3412"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "0fb32fedc97e7d3bcf8e7eea68b21267"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "84ff2347b2b0119f980c1eb0ea152810"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "ccd6cf1f3744b053758b1ad85bc89f99"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "c0ba971de1ecb40d2c429ef608db78c3"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "8a8cb157bf1d8afd0cf37e5d495c4ba2"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "a7bc5a58a3f8d2063424e5666d3c1aa5"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "d023319c20259d3d8191731f6b4caade"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "d36dd825b6ec203f7f89f8c8220ad4f1"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "67135a0eb7b561a17357f1b3787472ea"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "dff275d269d59129402f9a1ab3c367a7"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "4bb23bcde0676d7315506a7e5998c1e4"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "3fb5a72b841420cb8308e5b652f91f3d"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "4bc35b4272daf519460c841543132c11"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "31a17e75d5150df4cf58143856d13ba0"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "0db04a8a50c1bb5d8788b4d29deeb008"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "8702e592a2ac3df6e29ea63bfbf3259e"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "1b3fd9a92d7dbb852480f95d8bcb9727"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "b85eb064f3cfbc1e201da2bfa755b14f"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "66041091bb9f98b3ad920cb7de80e536"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "ab2a7b1e4d9ce173c9dc4e1eec2f9880"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "650d9f4a0499d37ec0fc600895af63a1"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "89c77e10a27bf12355c405aff54d5ce3"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "712ab63b3ff72cd6d00f950897ee81f2"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "334d7cbb474460f63b79c2e60b1cc08c"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "c4f8dc58e0cfc0326ca1d215bfcc0f3c"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "b8fc0506b22901ae3835b795a2ed452e"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "42036c12043d20a53059604ed756d586"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "f941a8b3bba05bd01531f250aa399b00"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "236ec0086a16504bf7f0a9d16f05a736"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "1948f32b2b5430049d3567842fabf66e"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "8a2bcd16c7e33b97ae1fbcac30a3b981"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "2b6fbd25c13d9c5b42098ed86cbd7551"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "b32d72fe5960e1a792338c09e32a4007"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "003cb9c99b02c45254320bbd2c2a5ebd"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "e06a1b38005ee82da21eec62633accc4"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "56cb5a81139a6b2a455a6b2e1513fe69"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "20f122d67b3b8347ff1d34814aa26a89"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "5b3687fbbedc3ee57e5753ae88fccc56"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "6e197c69791d354d1aa73acaa78cdd7b"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "5c2fd9c7d3c84a4b7004163389867cce"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "a26f42e3c5cf928bbab926bad63ae690"
  },
  {
    "url": "kungfu/js/vue_react.html",
    "revision": "a640ecf3db53a0f0bf3c5cc055cfa1f1"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "94be0b2a20999913de55a611c8a789d0"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "7d37059a486cafe0905b05fa68423e76"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "b83e87c898bc578561e34fa2b7fc1d57"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "031f87877487490ad7151a9d81899f20"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "c113244bd09f4b8a77b4bc500d6973ba"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "c41ad29ebfc091b1ec268af3b9068bdf"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "0fc281a231a616e7e6fd5b347a9f74da"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "3336592f7ee4cbce8c20f9cf9d07d339"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "ec77ceb406025bc6f2baabdf895f8e3e"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "4ef19afa4e049828aa5bf2da5709c8fc"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "f8180137222d341743621c9e5d83b48e"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "a23061f931e71eaf2cc72a1d109d9ffd"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "2874e034e774b316199c9073afc66f3f"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "32f306739e87fc2d31f205f93914bc32"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "a2f80d71befbdb424bbb9b63c05883fa"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "3ff7a8d699d84297ed26216124ef8644"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "045ddf496f50fc48967f67b7ca6358fc"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "9427d7f910f7ffbf89cb1fb1685ee15f"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "30b766784ca1906fb8c1fd017131db13"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "a8a449a1e069992920ec8bf4a52f1f43"
  },
  {
    "url": "kungfu/template.html",
    "revision": "f31a8aba76c3d62111b220478fc31418"
  },
  {
    "url": "node/env.html",
    "revision": "1acd40b5eac8e6231e3f986f71eaf87a"
  },
  {
    "url": "node/index.html",
    "revision": "4bc5b917cafae504ab16f40c59978179"
  },
  {
    "url": "node/n.html",
    "revision": "dffa23c577787fca293d7cf421182d2b"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "f35d08cbdf7e5537844a14bb8e6bf5a0"
  },
  {
    "url": "node/npm.html",
    "revision": "fc42c895e7b1b5ad1856a26254327e2e"
  },
  {
    "url": "node/sequelize.html",
    "revision": "26dc8bd24a398157ce4b1afc4c6d3c2f"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "c78044f74112ddd596b40c860ec8bd6a"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "c170fea9fd7b29a209ec9b3e24b13e9f"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "13ac6a844bece733c87ed6a2c615a170"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "8096a4ba91a1601adfff3f8f6558c710"
  },
  {
    "url": "php/clean/di.html",
    "revision": "54ceb259049ba82cbe65be04d7176a2d"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "ec6dd5fb3a405cff072eed162c7d2e44"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "773685f9a6c172750712d650bae00e6f"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "a98f63582ff951cf7705750bfd684fef"
  },
  {
    "url": "php/clean/index.html",
    "revision": "c80e0f556f0184c3e86c49a7df6e4a32"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "96113840e76073c75d61c7ce950547a7"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "1107c2f430416e5167b085c8ef74182e"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "2bcc85d3b7bf4a3c072c8f8014e8c5b5"
  },
  {
    "url": "php/composer.html",
    "revision": "89fc79beee93822912bb1f9eaca160fc"
  },
  {
    "url": "php/crunz.html",
    "revision": "e655206f35efe90f82cae98f3220131a"
  },
  {
    "url": "php/laravel.html",
    "revision": "15ea54c7947644e8717319bc683be1de"
  },
  {
    "url": "php/magic.html",
    "revision": "99c1679ef55ec0d93a7af43e382e02a2"
  },
  {
    "url": "php/notes.html",
    "revision": "5d742d2c9190b60fc4b43957593b7304"
  },
  {
    "url": "php/oop.html",
    "revision": "65dad201594ab66dea9023784378e9e0"
  },
  {
    "url": "php/php7.html",
    "revision": "469fbf827d18f88175b4b21545ad2a3d"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "5d7bbf03d54c11b32b7c6f5ac1864c64"
  },
  {
    "url": "php/reflection.html",
    "revision": "918c1e4405838e1ca952a18ecf5a67eb"
  },
  {
    "url": "php/tricks.html",
    "revision": "22aaddd6308da64c2c8121103050dcd0"
  },
  {
    "url": "php/wordpress.html",
    "revision": "4917a6fb1817047b448680888c324eb5"
  },
  {
    "url": "quotes.html",
    "revision": "34b75eb9aff01e0ba2d5631f2fdba66f"
  },
  {
    "url": "refactor/notes.html",
    "revision": "585df1080731416290e17373a5471fd4"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "18912a6fbc5d835126916ba3a47b8a42"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "5091a2c398c3bd80dec3e75f56549929"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "4e1541cb5a5868cb91a8d292cded569d"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "8aa26d49703e7c84a5dc01034a5961b2"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "8251707eab85e0d6c00b68fed4459f52"
  },
  {
    "url": "snippets/jest.html",
    "revision": "e8fd50487784dfbf212cefec9efa1396"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "e2c8f0eb9ba34f9bb57f951b2a54fb46"
  },
  {
    "url": "snippets/patterns.html",
    "revision": "097eb4ef942c2a1ba7074c46697601b6"
  },
  {
    "url": "snippets/regex.html",
    "revision": "9f1b0582712377521e042b2172b752dd"
  },
  {
    "url": "terms/12factors.html",
    "revision": "f3816f3c845986e4fedcc33da219b447"
  },
  {
    "url": "terms/architecture.html",
    "revision": "a9d802c1ed0c3a8309b5203ade6e692d"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "d8778afa895e83e1cea6ab20b3367ec9"
  },
  {
    "url": "terms/ddd.html",
    "revision": "da45056d250c5132c0342579d39f2a11"
  },
  {
    "url": "terms/di.html",
    "revision": "781f0df32cf2b0b9fcac491e81c61ebc"
  },
  {
    "url": "terms/javascript.html",
    "revision": "e75eb2ed8dcab16caf0688ec7985c160"
  },
  {
    "url": "terms/oop.html",
    "revision": "ab1c796fd0d00e6436c4e686b5014384"
  },
  {
    "url": "terms/principles.html",
    "revision": "f3e3c15e59e60659a42248472d68ca98"
  },
  {
    "url": "terms/rules.html",
    "revision": "33e07383990010580fe369979307fab3"
  },
  {
    "url": "terms/testing.html",
    "revision": "4e31e9123be99788f8ca2998f7863c18"
  },
  {
    "url": "tools/chrome.html",
    "revision": "cf5055658d69762a764a839d3c614a96"
  },
  {
    "url": "tools/docker.html",
    "revision": "93b788a7e17dbd5202008034a57d44cf"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "0b33d51bea31443b2dcd39852283481e"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "2b3136828fecf52727de2ada60421e4b"
  },
  {
    "url": "tools/graphql.html",
    "revision": "67845061832f5dad9e61609e25a89151"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "a4db44a2df7e10cdee1b4da154c2a901"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "08d1dac7604037c24d63b80ff6b85a74"
  },
  {
    "url": "tools/redis.html",
    "revision": "cde153142ad8c97e458c4de7bdd925c7"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "8a47cd5062480781559d316f3f54d8c7"
  },
  {
    "url": "tools/vscode.html",
    "revision": "6cc28571394d234302166e945f78c49c"
  },
  {
    "url": "tools/webpack.html",
    "revision": "0b02c098578e5973edb75be4bc874e13"
  },
  {
    "url": "tricks/compare.html",
    "revision": "ce713fad8385502eeede080b08de7086"
  },
  {
    "url": "tricks/git.html",
    "revision": "fe0b3451652e37848e45032438fb47f7"
  },
  {
    "url": "tricks/linux.html",
    "revision": "7ee7f7762b053cd76205d1d056b1af91"
  },
  {
    "url": "tricks/mac.html",
    "revision": "7f3fc2418c0a42c222be715f86307639"
  },
  {
    "url": "tricks/misc.html",
    "revision": "ccd412849a6d6d0c4837c02292602671"
  },
  {
    "url": "tricks/setup.html",
    "revision": "a5734cb554dbc8499f46d836ae64f9c1"
  },
  {
    "url": "vue/communication.html",
    "revision": "de426c0ca21d47769035f90368ac4995"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "fa8181f73ce805557f67df5118eeccff"
  },
  {
    "url": "vue/events.html",
    "revision": "bd1cad848e6ded1a2b9451b02b2fe5cc"
  },
  {
    "url": "vue/references.html",
    "revision": "e05a53057ba42c19e32ca29b749169c8"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "f78df315f3d6d10155a35dea67acf81b"
  },
  {
    "url": "vue/test.html",
    "revision": "84c7b0de75c776264a9dee1412e8e8e6"
  },
  {
    "url": "vue/tricks.html",
    "revision": "d52de8d238602c5158a289f611324321"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "9ef8b2653b454bfd5f32164f9c0d6146"
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
