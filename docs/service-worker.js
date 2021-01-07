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
    "revision": "0ef32199fe685b35572410fecb6dfa18"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "218a79fc80f5331258864cfc619a2ec7"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "c2aacb26fbe1ea5eb38a822e9ab47513"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "52a5d7c6924e416f92d9a73f0ce8a613"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "4fe8ed74ffd34e04dc3a3158e9fec0bd"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "2d47bcacd350a0463f47e3bf74586f41"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "6e80a4e5fb7293a62648e647b131ffbc"
  },
  {
    "url": "algorithm/string.html",
    "revision": "19475e0657173e606d2cf34681256491"
  },
  {
    "url": "architect/authenication.html",
    "revision": "602f7032cfdcee470914cab31a278fe9"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "2acf4c79e0ed7dd5d26a6368844be7a9"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "7a16d68b25ec60e19e0a27fe24f4c346"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "83daa0c44e16fbc0401b3bf1ca04c67c"
  },
  {
    "url": "architect/ddd.html",
    "revision": "6bc251c2a99927da2db69e21f2bea971"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "6aec611c10e6d868cf8e057011fdb714"
  },
  {
    "url": "architect/ebi.html",
    "revision": "0bbd65c739ba108537a169e523fd1a4e"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "215d989a7282c0a448c1f11508bbac40"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "59d58ef6edb1208e70e94b5b5477fb2e"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "8c10eaefedfbf4b8882742fca19b9109"
  },
  {
    "url": "architect/index.html",
    "revision": "5f809a0d4713022edea8a825ee94696e"
  },
  {
    "url": "architect/microservices.html",
    "revision": "d869cd04398c2cf2fd2efa2bf9d7eeb4"
  },
  {
    "url": "architect/mutex.html",
    "revision": "cf18a8bcfacc1c4a2acc147f8d537e99"
  },
  {
    "url": "architect/notes.html",
    "revision": "d2245b449b167dbd931eddff36c9e072"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "f2cd38d3769f59423586b29a0906587c"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "0bbde4328356d364e5ed7e838d92696f"
  },
  {
    "url": "architect/refs.html",
    "revision": "cf04c3d28e953ec59d3471c8f48e9db5"
  },
  {
    "url": "architect/soa.html",
    "revision": "8a845fd6767be5060a488f94c4f14231"
  },
  {
    "url": "architect/spa.html",
    "revision": "491f0aabcef6843061e0d6f0f29fdc84"
  },
  {
    "url": "architect/terms.html",
    "revision": "3956a6e8c91ca40cbef9a8d2c8205dc7"
  },
  {
    "url": "architect/use-case.html",
    "revision": "ddb7c5e72f8c2dd85623acd80f02bcf3"
  },
  {
    "url": "architect/webservice.html",
    "revision": "6b839bc50ec267506c48b12a14d579ab"
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
    "url": "assets/js/10.3bc0296d.js",
    "revision": "ccbf93e9e7ef6ca81f23b656ddca1df7"
  },
  {
    "url": "assets/js/100.09646610.js",
    "revision": "74633694f08a1b7fad46e2d5d674ec3b"
  },
  {
    "url": "assets/js/101.716ae88a.js",
    "revision": "5157ffa69142c329909082517245ac75"
  },
  {
    "url": "assets/js/102.e27b18c1.js",
    "revision": "bf2707b5abd0fadb2ac8094ca04a4195"
  },
  {
    "url": "assets/js/103.4215a5b2.js",
    "revision": "b88921251584cb8658a414ba45377869"
  },
  {
    "url": "assets/js/104.e5fc1c82.js",
    "revision": "56a782d4ef4c33fdaeef8dd73038eabd"
  },
  {
    "url": "assets/js/105.9c61f6d7.js",
    "revision": "c1401fc651c188767f42fe93f526fdea"
  },
  {
    "url": "assets/js/106.c370d954.js",
    "revision": "9b54dd51fa0774f108608cd2dc9bab49"
  },
  {
    "url": "assets/js/107.6221cc29.js",
    "revision": "ac8ad9aa51e710f129969ba798aa5f56"
  },
  {
    "url": "assets/js/108.f4b50fac.js",
    "revision": "75f288d2ea3acf6d20332ba81109bbe4"
  },
  {
    "url": "assets/js/109.3722e16d.js",
    "revision": "70e0b5193656361cf54510c6642943f0"
  },
  {
    "url": "assets/js/11.4550aeaa.js",
    "revision": "e6b69271f691053b86b0709d8dd71db3"
  },
  {
    "url": "assets/js/110.27e542f4.js",
    "revision": "ede13d306b44ae20bdf1774fd22ef370"
  },
  {
    "url": "assets/js/111.45c83fd2.js",
    "revision": "615302880ac0102e1a994a638153f5d4"
  },
  {
    "url": "assets/js/112.3eda8e32.js",
    "revision": "ad94b719e0ef044be8d5b94fa1769aa3"
  },
  {
    "url": "assets/js/113.d773e5e0.js",
    "revision": "66d9e15d0f1f4138dab7d1721be1c39a"
  },
  {
    "url": "assets/js/114.ba22d1b4.js",
    "revision": "7627944f3fd95f4aa6327e37671c04da"
  },
  {
    "url": "assets/js/115.bdac4f09.js",
    "revision": "0bc49b012f8eb7584d260e340ddabf53"
  },
  {
    "url": "assets/js/116.6e4cf075.js",
    "revision": "5c80dc22b2315cec758b4eafc26c75b0"
  },
  {
    "url": "assets/js/117.47bf8b36.js",
    "revision": "e0b2da3769734addb81662d7c45222df"
  },
  {
    "url": "assets/js/118.12abf96b.js",
    "revision": "8a25ae7f6cef27f83c4a4f248fc437bd"
  },
  {
    "url": "assets/js/119.02d2abc0.js",
    "revision": "d77552119b175167a45c5dd8eac931f6"
  },
  {
    "url": "assets/js/12.771eed8c.js",
    "revision": "c8526997f8b5acf89030ddac39850fc4"
  },
  {
    "url": "assets/js/120.d6e9397b.js",
    "revision": "9e0b13846cbe7c77a5c319d89c766a4f"
  },
  {
    "url": "assets/js/121.8d20c4dd.js",
    "revision": "4ca18fcdc4597b5c60cd2f71f578da8e"
  },
  {
    "url": "assets/js/122.1a880a03.js",
    "revision": "f2357f558f292659c6991a227f88a717"
  },
  {
    "url": "assets/js/123.39336fd3.js",
    "revision": "d5ac5ee908c38856ae2d9c9ab08c8b12"
  },
  {
    "url": "assets/js/124.185a4f7d.js",
    "revision": "816df2902474cb1462f17fc2864e4be7"
  },
  {
    "url": "assets/js/125.e1e486d9.js",
    "revision": "509f04f009786fe05bacdb37c02643b1"
  },
  {
    "url": "assets/js/126.d5079cdd.js",
    "revision": "d358224373a7e471f1c5c888ec5729a3"
  },
  {
    "url": "assets/js/127.c7baebb0.js",
    "revision": "239bfa3ffe74f792626f0ce3417ba782"
  },
  {
    "url": "assets/js/128.c5a3158b.js",
    "revision": "f0637e8b0d966f96ef9046ece198615e"
  },
  {
    "url": "assets/js/129.c850311d.js",
    "revision": "69f86b6d3553be758b1550b51caeff34"
  },
  {
    "url": "assets/js/13.9aa30592.js",
    "revision": "4ef7600e9765aa724b9576fdbd456dd9"
  },
  {
    "url": "assets/js/130.12bce806.js",
    "revision": "c1dccc6066a65955311414e624eba20b"
  },
  {
    "url": "assets/js/131.305ba40a.js",
    "revision": "4697ed45013b3887ca2bbc29cfc1ed02"
  },
  {
    "url": "assets/js/132.259603f2.js",
    "revision": "e2970ab789d4e9db8bcfdbf6460bb83c"
  },
  {
    "url": "assets/js/133.8efb61c6.js",
    "revision": "f34cbc3ce71755ab9101fcff55987ac7"
  },
  {
    "url": "assets/js/134.e2069346.js",
    "revision": "7d13de322d3eebbcabc4996872812a34"
  },
  {
    "url": "assets/js/135.df0c4c8c.js",
    "revision": "048e3c1d7e4fe4b3269b6ec19e6baa8f"
  },
  {
    "url": "assets/js/136.acc0d18f.js",
    "revision": "e7ff098ce3bb560c1d1725ab2763eeed"
  },
  {
    "url": "assets/js/137.f954b974.js",
    "revision": "2ba5df01afa492f20b970bebb55b14f1"
  },
  {
    "url": "assets/js/138.57c33371.js",
    "revision": "a85d84c3fc2279d94c03745963512dd0"
  },
  {
    "url": "assets/js/139.592af968.js",
    "revision": "5a25c2b772765860a0d48192178fc775"
  },
  {
    "url": "assets/js/14.2425a9b6.js",
    "revision": "4357a2660329801220a0aeb1c5bad1a8"
  },
  {
    "url": "assets/js/140.349388a0.js",
    "revision": "2e8a3e849211103472f7972ee34d7bfa"
  },
  {
    "url": "assets/js/141.d085fee5.js",
    "revision": "9390f9330b6f6af15d8916de1e9ca365"
  },
  {
    "url": "assets/js/142.1bd567da.js",
    "revision": "d18f2c25908d6cdbb5b32bbe54f9c223"
  },
  {
    "url": "assets/js/143.94a35574.js",
    "revision": "46c6d4b3146e442f43d315bf53add6b7"
  },
  {
    "url": "assets/js/144.cedb9fc5.js",
    "revision": "98a53af8d69f774c617fdbac61eb266d"
  },
  {
    "url": "assets/js/145.c03c6857.js",
    "revision": "74cf1d6b5c961376a6a18b21fffadb11"
  },
  {
    "url": "assets/js/146.15983ce9.js",
    "revision": "cf6347d0baf56b06db227c90498a132c"
  },
  {
    "url": "assets/js/147.a981a38b.js",
    "revision": "a79b4a6607ceb6cffb266686abd48a6e"
  },
  {
    "url": "assets/js/148.a353c22f.js",
    "revision": "b9ce503d994d2d866ebb7d7fb75efac8"
  },
  {
    "url": "assets/js/149.a533ff89.js",
    "revision": "90217368ea2c3a17b48d748cb20643b1"
  },
  {
    "url": "assets/js/15.04f87bf8.js",
    "revision": "efa50b0f54574fa6a20223ad741d4b30"
  },
  {
    "url": "assets/js/150.17ae9c55.js",
    "revision": "c51d1c3bb91fdb7c09f848421bec2ca3"
  },
  {
    "url": "assets/js/151.50f81f8c.js",
    "revision": "66feb3ee39c522d9ba165c7cf499a3b5"
  },
  {
    "url": "assets/js/152.3c5f365e.js",
    "revision": "d906791dc62d923f06f9a68afb301ac3"
  },
  {
    "url": "assets/js/153.4e53bac9.js",
    "revision": "0c7ff910d5e99ec3dc94e22a2ca16537"
  },
  {
    "url": "assets/js/154.d31fed95.js",
    "revision": "a3a1d7bbd66fe49e68b1adaf8cf72d20"
  },
  {
    "url": "assets/js/155.e24b49b1.js",
    "revision": "cdd52e3b7ac85162fff58723cd7de0a6"
  },
  {
    "url": "assets/js/156.cce67386.js",
    "revision": "8a7bc8240d47fea5bf1ed5992ed81017"
  },
  {
    "url": "assets/js/157.695b85a9.js",
    "revision": "d11d8a0885e55466c3c9bcbf161846fd"
  },
  {
    "url": "assets/js/158.5681a41d.js",
    "revision": "5aab48245aef13266e8d433ea3c040f9"
  },
  {
    "url": "assets/js/159.e2f1a906.js",
    "revision": "209f339514fb109cd1b67df385fc92c1"
  },
  {
    "url": "assets/js/16.2338b048.js",
    "revision": "260d06941cdad403b21e7700c8947144"
  },
  {
    "url": "assets/js/160.74927ae3.js",
    "revision": "8f8ad55a3b5d95818da4a60476bf15bc"
  },
  {
    "url": "assets/js/161.a1cc4a23.js",
    "revision": "117a98e834fb78d6b4e8773fe250259d"
  },
  {
    "url": "assets/js/162.7fa86510.js",
    "revision": "21bdcf48ffdea155252d0d5df42d8b5d"
  },
  {
    "url": "assets/js/163.d91ad9e2.js",
    "revision": "20323013576bcd5f594f05800b1cf765"
  },
  {
    "url": "assets/js/164.eccf834a.js",
    "revision": "bd258bd98e480101ffcf1445c8259e02"
  },
  {
    "url": "assets/js/165.a2f9edd5.js",
    "revision": "6dc3dfe6288b54d94c77053a7bf79c78"
  },
  {
    "url": "assets/js/166.c1114cef.js",
    "revision": "b6fae86b97ccb930de1435ed1573da00"
  },
  {
    "url": "assets/js/167.2cab60fb.js",
    "revision": "a87297d49b761090f0d63c2ae4656de8"
  },
  {
    "url": "assets/js/168.3f976468.js",
    "revision": "c1a671c47d6273df31ae2549cc37291a"
  },
  {
    "url": "assets/js/169.78db2521.js",
    "revision": "fa0d9db5d8da1c32c8ad9d3dbc1ad2d7"
  },
  {
    "url": "assets/js/17.662779a8.js",
    "revision": "ebc66e3bb4a737d6262eae242cdf5401"
  },
  {
    "url": "assets/js/170.94a730c3.js",
    "revision": "5fd85d6893047f686943a61157769669"
  },
  {
    "url": "assets/js/171.a4b783ca.js",
    "revision": "bb0507980a6e1165fa34c15a0bc4c2f4"
  },
  {
    "url": "assets/js/172.2456a26e.js",
    "revision": "764abf681dd2379d5846ca1646e43199"
  },
  {
    "url": "assets/js/173.16d5742b.js",
    "revision": "5448cde40da0bed5db6353a56934ef6c"
  },
  {
    "url": "assets/js/174.4608294b.js",
    "revision": "1747a22d0be72a88455e723c7970f216"
  },
  {
    "url": "assets/js/175.a85d2c32.js",
    "revision": "e31009e2ee0c10acf37b46da392c79c4"
  },
  {
    "url": "assets/js/176.0936651c.js",
    "revision": "383ce79b8916b9ba55391512168bc93a"
  },
  {
    "url": "assets/js/177.cd62f13b.js",
    "revision": "7574c4ad2efe19b5a279800a35562410"
  },
  {
    "url": "assets/js/178.e8a031ef.js",
    "revision": "69b0a5f7c643597057dd863d24762bab"
  },
  {
    "url": "assets/js/179.ce28fc51.js",
    "revision": "2353cace52d9d598c5e4a474eb72f787"
  },
  {
    "url": "assets/js/18.b70b72f7.js",
    "revision": "cbbcc29f0257c5bc040f8c0e3a9b03ee"
  },
  {
    "url": "assets/js/180.a043b473.js",
    "revision": "3b5fd034fd6a26fc143396694efdb9d3"
  },
  {
    "url": "assets/js/181.f7cb7d87.js",
    "revision": "e718a593031bafcd261caa32c267992e"
  },
  {
    "url": "assets/js/182.9289b20a.js",
    "revision": "fd97f3e36b036a5ebe476846ec1d6682"
  },
  {
    "url": "assets/js/183.a04715bd.js",
    "revision": "3676d13aa9cfa50af8058e00b2503499"
  },
  {
    "url": "assets/js/184.4c68b101.js",
    "revision": "4239f1fb3d79f242e196c33da9f5dc4f"
  },
  {
    "url": "assets/js/185.d7c56b8e.js",
    "revision": "35e3eb248dbf379967190927c46e7e38"
  },
  {
    "url": "assets/js/186.7fc4d623.js",
    "revision": "601a5971971f3dcab785bdad000376ea"
  },
  {
    "url": "assets/js/187.23d9c360.js",
    "revision": "89f4a9bf9ea3ba936b876c71652c08ef"
  },
  {
    "url": "assets/js/188.3e85ba40.js",
    "revision": "1c907c5dfd24f809a0d25c3def4d4a97"
  },
  {
    "url": "assets/js/189.e796b8b5.js",
    "revision": "11edd360ba30a60c1bdca2edbc096648"
  },
  {
    "url": "assets/js/19.4fc5f3f7.js",
    "revision": "cbac65d89498aef78a34eae606aa3cf3"
  },
  {
    "url": "assets/js/190.04ef638f.js",
    "revision": "4e69bad53ddfc1a441eab48dc58062bc"
  },
  {
    "url": "assets/js/191.0d2d6f8b.js",
    "revision": "db6cf71001409a38f57010f40fc3465e"
  },
  {
    "url": "assets/js/192.91b58684.js",
    "revision": "7098de2e9eea79eff318b087e80d778e"
  },
  {
    "url": "assets/js/193.a9248e1e.js",
    "revision": "f1e8b182324579676ecdf8aab6ea78d7"
  },
  {
    "url": "assets/js/194.d0cdfbd2.js",
    "revision": "52c2793a61bad06d1eab836663049b17"
  },
  {
    "url": "assets/js/195.45d7a7ab.js",
    "revision": "9c90f778e93b1ca5cef8f806287de901"
  },
  {
    "url": "assets/js/196.f621b0e8.js",
    "revision": "faab963ae923e1e26f48d0c47d6c80dc"
  },
  {
    "url": "assets/js/197.318c2984.js",
    "revision": "f78bd57e360db796a3fe1ba6d6465176"
  },
  {
    "url": "assets/js/198.f9b12284.js",
    "revision": "8193139a5a809f76b3d2418fe7836120"
  },
  {
    "url": "assets/js/199.8412dd43.js",
    "revision": "3c1d44d6d677555da97698fe2117dbd9"
  },
  {
    "url": "assets/js/2.581a40d3.js",
    "revision": "af74f9f61cc40a692e52b89f35e98315"
  },
  {
    "url": "assets/js/20.93a97a33.js",
    "revision": "e2d90fc206d70dc9a5a7696287abcb42"
  },
  {
    "url": "assets/js/200.6592ecb3.js",
    "revision": "248ff6f2a2b4a2ce9d8de2650a70a25e"
  },
  {
    "url": "assets/js/201.268a931b.js",
    "revision": "969181954b298ae69d071525d30eb02d"
  },
  {
    "url": "assets/js/202.b3bfc417.js",
    "revision": "5bd649c04820d7cc1f8b7e92b04ab8db"
  },
  {
    "url": "assets/js/203.10db931b.js",
    "revision": "3036779603132a9ea63d99ed20e438d1"
  },
  {
    "url": "assets/js/204.3c886580.js",
    "revision": "dd6ae97c195612e7a357cd573bfc8f93"
  },
  {
    "url": "assets/js/205.f8418e24.js",
    "revision": "24ba1cebf1e553810d734dd528c18ceb"
  },
  {
    "url": "assets/js/206.ee794bd4.js",
    "revision": "0a25f0686852e72453c0a5de69084b00"
  },
  {
    "url": "assets/js/207.576cbe3b.js",
    "revision": "00ceda2a62e8b258046f794be990d39e"
  },
  {
    "url": "assets/js/208.7e7ac56b.js",
    "revision": "a183c1d9179d55f0bfe1284b751fa895"
  },
  {
    "url": "assets/js/209.f6efdc58.js",
    "revision": "ddd4dd0c476977abbf0b387383c86967"
  },
  {
    "url": "assets/js/21.76eb09a9.js",
    "revision": "c937905fdf73ad4d9b89414f94172b35"
  },
  {
    "url": "assets/js/210.7aceb8c5.js",
    "revision": "4fe3ce259e4d6afe85e5de537a600abb"
  },
  {
    "url": "assets/js/211.0d522a53.js",
    "revision": "e625037faa4e0b5dd51e45b908e6bd01"
  },
  {
    "url": "assets/js/212.47bb685f.js",
    "revision": "c614563f5cf26bc37293544620919396"
  },
  {
    "url": "assets/js/213.5dde5936.js",
    "revision": "26ca495627d2d7322edcf714436387bd"
  },
  {
    "url": "assets/js/214.04189faf.js",
    "revision": "772cb0f04e8c9bbbbf439cce610faffa"
  },
  {
    "url": "assets/js/215.c99f36a8.js",
    "revision": "ceecd128be11094ea44c0499c10502cf"
  },
  {
    "url": "assets/js/216.995ac2f8.js",
    "revision": "902b8196fdcc5f75e32f626575b837c6"
  },
  {
    "url": "assets/js/217.91988e60.js",
    "revision": "f566f8cf39d8b5bc1ea65bb0fb289147"
  },
  {
    "url": "assets/js/218.a9b0c0bf.js",
    "revision": "a2d8b84566f5a086092f0cb268dc693b"
  },
  {
    "url": "assets/js/219.0069a8c1.js",
    "revision": "2e2fa828baf963ab2db33af52c69649c"
  },
  {
    "url": "assets/js/22.e2904719.js",
    "revision": "c0511f67570a9187f655aa6893ead969"
  },
  {
    "url": "assets/js/220.4af5d25b.js",
    "revision": "d11b2c6d6d1ef9a9bd43b151d7c2c152"
  },
  {
    "url": "assets/js/221.e7acf94a.js",
    "revision": "381e4be7a95f66efdcfb3cc5113e7408"
  },
  {
    "url": "assets/js/222.2a75d6be.js",
    "revision": "660973cf5fe8703d3c036b5858f78694"
  },
  {
    "url": "assets/js/223.c44c0b66.js",
    "revision": "cd2959bbecc94cd1a0031bcc389e41c5"
  },
  {
    "url": "assets/js/224.a62b0fa3.js",
    "revision": "e835d9b3dc2071c87071f1b160c4241a"
  },
  {
    "url": "assets/js/225.84d5fe3b.js",
    "revision": "dbdff256f520dc44676720898e26933d"
  },
  {
    "url": "assets/js/226.ea1a0f6f.js",
    "revision": "65996fa3e46c440347bed03aa416ce02"
  },
  {
    "url": "assets/js/227.7f15a235.js",
    "revision": "3d6b106ecdd03c41bb30ab13163937e9"
  },
  {
    "url": "assets/js/228.28e11596.js",
    "revision": "67e9425988a97945a7fe3c1aeac180bf"
  },
  {
    "url": "assets/js/229.5a5fd925.js",
    "revision": "9ea096cd8d0cdb5e27e08e31f7e20820"
  },
  {
    "url": "assets/js/23.87c3b570.js",
    "revision": "221902e4545e7c44423da64b556b2ec7"
  },
  {
    "url": "assets/js/230.233bfe47.js",
    "revision": "b893933ec18025bb2cef271af57c0d59"
  },
  {
    "url": "assets/js/231.19b75819.js",
    "revision": "45713b825fb8928d2b517d741835eda3"
  },
  {
    "url": "assets/js/232.79d0867a.js",
    "revision": "c546f1568be970275042f2771c388e40"
  },
  {
    "url": "assets/js/233.de16dc8c.js",
    "revision": "876a650c7335cc46358d8792044ab48a"
  },
  {
    "url": "assets/js/234.59bd6112.js",
    "revision": "77882ad5eab960bd2727e6e31aaa3359"
  },
  {
    "url": "assets/js/235.4ebd65e1.js",
    "revision": "9270e06803ea60096f62a49a496ee8ea"
  },
  {
    "url": "assets/js/236.a9af3645.js",
    "revision": "168b8a66735f6dd8c587ed7f56aa07b7"
  },
  {
    "url": "assets/js/237.fbf66dac.js",
    "revision": "e29d562fbbb84d2bcf6a277d0cea5187"
  },
  {
    "url": "assets/js/238.9bcf342b.js",
    "revision": "df1225abcdcd0e32b9f2ac0833e2d4c0"
  },
  {
    "url": "assets/js/239.7f77414c.js",
    "revision": "741cd173e478c9c7f67487624b173797"
  },
  {
    "url": "assets/js/24.8c7605e3.js",
    "revision": "46718748788496dc0efee0303c237b0f"
  },
  {
    "url": "assets/js/240.9a9aabad.js",
    "revision": "9aee5e3d99b9632694eb1e5dc5a25f77"
  },
  {
    "url": "assets/js/241.5555e712.js",
    "revision": "227e38d07553b63d0f7319ad3d9d5f11"
  },
  {
    "url": "assets/js/242.506593e5.js",
    "revision": "22a70c38a4ddd9dafdddadf3c294bed5"
  },
  {
    "url": "assets/js/243.8fb79ce5.js",
    "revision": "ad86e77646eb35a3bd4813c987220656"
  },
  {
    "url": "assets/js/244.08aab89f.js",
    "revision": "cfb32b4d4706f65d4e0812abd6bdf873"
  },
  {
    "url": "assets/js/245.ec4336f4.js",
    "revision": "379fc6ee8ef8c3fc7cc141d1b5a8e372"
  },
  {
    "url": "assets/js/246.6f9cf4d3.js",
    "revision": "d0a762201af9d15bf4614453174e5323"
  },
  {
    "url": "assets/js/247.0a19fa52.js",
    "revision": "869943312296392ac328cfea2200793e"
  },
  {
    "url": "assets/js/248.4e607ef2.js",
    "revision": "9291d28ca50ba967a94b85092017f924"
  },
  {
    "url": "assets/js/249.2af98bf3.js",
    "revision": "59072dc2af7b69297e635161dcc0303f"
  },
  {
    "url": "assets/js/25.2cb6dbde.js",
    "revision": "4a951a7b3ec299b333cf1cedd25053f3"
  },
  {
    "url": "assets/js/250.087f6e5b.js",
    "revision": "fa4ce6fb1bddfa8ab0f45f868fb6c7b2"
  },
  {
    "url": "assets/js/251.1e06ec10.js",
    "revision": "93702af27e535618e7ede03ade5bb839"
  },
  {
    "url": "assets/js/252.8cd0e8e2.js",
    "revision": "11572ae952858c442736dcb36d89dd11"
  },
  {
    "url": "assets/js/253.85284fdd.js",
    "revision": "57e98028ff65a7ebe301798293712aeb"
  },
  {
    "url": "assets/js/254.dab947fa.js",
    "revision": "aa5fcc33ca56df8030009a113aee1ee4"
  },
  {
    "url": "assets/js/255.dc08d102.js",
    "revision": "f9ea1f9d34a767c30fb228eb85c82db1"
  },
  {
    "url": "assets/js/256.3ce8e245.js",
    "revision": "a27ec54218bd75f83e54527e5694b327"
  },
  {
    "url": "assets/js/257.1491e1af.js",
    "revision": "dfca8ab539a0fe58f31bbe42ec34aa8f"
  },
  {
    "url": "assets/js/258.281e2411.js",
    "revision": "36f70eefdf428fb4fa1a359d464044ec"
  },
  {
    "url": "assets/js/259.16b0330f.js",
    "revision": "48c4eae66749a168680b6aafd65424d5"
  },
  {
    "url": "assets/js/26.5b52ac3e.js",
    "revision": "7a5b413ca6ce0691b8da335fc42aaff5"
  },
  {
    "url": "assets/js/260.e69bcc59.js",
    "revision": "6bacaad93854dffa15eca837381743eb"
  },
  {
    "url": "assets/js/261.8ff1f0d9.js",
    "revision": "12a16bc6757291869e7377a24c6d9131"
  },
  {
    "url": "assets/js/262.31a42a4d.js",
    "revision": "797b66fe0eef41c3d6e93ca15dca26ab"
  },
  {
    "url": "assets/js/263.9699e968.js",
    "revision": "d7decc44bfe2cd51dcda14f184a81b0e"
  },
  {
    "url": "assets/js/264.71de9e03.js",
    "revision": "f909336082f28a5d3806365b9ccc511f"
  },
  {
    "url": "assets/js/265.7c7eb641.js",
    "revision": "8d81acc1b9c9027560cdd52346d5d9c8"
  },
  {
    "url": "assets/js/266.d4d3785c.js",
    "revision": "fca050edc24a821938efe2447b30fcc9"
  },
  {
    "url": "assets/js/267.aa677679.js",
    "revision": "7e62cb588f11e1c5f4014c2af6cef9aa"
  },
  {
    "url": "assets/js/268.26a49b6b.js",
    "revision": "04e2f0bf01d10037d20b0070e55a73fd"
  },
  {
    "url": "assets/js/269.4339fbf7.js",
    "revision": "036de97cd577d9dc40278f830151b85c"
  },
  {
    "url": "assets/js/27.9e200b9b.js",
    "revision": "12ecd178c1d9e962ac3d841e750f2040"
  },
  {
    "url": "assets/js/270.fe4eda2d.js",
    "revision": "9d8d57c69ebee2c0de79aaa744217869"
  },
  {
    "url": "assets/js/271.04e59188.js",
    "revision": "544d111e229512ee200770fad12776a0"
  },
  {
    "url": "assets/js/272.1d28f7d4.js",
    "revision": "8cb68eb928b3a9caae35f1a2879312ec"
  },
  {
    "url": "assets/js/273.9e9c28bf.js",
    "revision": "8ef89ce8612ee824ef9b837adcdbf389"
  },
  {
    "url": "assets/js/274.2ed09bbe.js",
    "revision": "d057c040085b80317f05db7496e1a02a"
  },
  {
    "url": "assets/js/275.7a72bf0c.js",
    "revision": "0fb07db0c761546fb9fce0efa56688c2"
  },
  {
    "url": "assets/js/276.7b79e1d9.js",
    "revision": "3b54fc1c3f509bc481d59c88f5ffd5c6"
  },
  {
    "url": "assets/js/277.f6da04c0.js",
    "revision": "c5d6b6980c9d3e8563b1f17a7f46a08b"
  },
  {
    "url": "assets/js/278.f74e3fcc.js",
    "revision": "8e434c116c91a64cecd26190a9d95780"
  },
  {
    "url": "assets/js/279.bb77917c.js",
    "revision": "c3b2ea0703c08925abb0ec4b07930ba7"
  },
  {
    "url": "assets/js/28.e4969239.js",
    "revision": "ed13bb79ea2c1c0aae84b36446ee63f5"
  },
  {
    "url": "assets/js/280.e9d2b083.js",
    "revision": "7df3b219ec19c8b256a6d90ca8ba7809"
  },
  {
    "url": "assets/js/281.8986d6b0.js",
    "revision": "61e6baf61e61226106ebcb5101df0af9"
  },
  {
    "url": "assets/js/282.ba1807c6.js",
    "revision": "9693b254c5a921225625a25423bb001c"
  },
  {
    "url": "assets/js/283.daeaa9cf.js",
    "revision": "2817468dc589eed7f18ed5d676e1678f"
  },
  {
    "url": "assets/js/284.a0934cf8.js",
    "revision": "a29ea48db9da4cc4e00d0a0e0763d445"
  },
  {
    "url": "assets/js/285.9b0af535.js",
    "revision": "394d10eb37395f637b16398a24937ba7"
  },
  {
    "url": "assets/js/286.2bf70f17.js",
    "revision": "2c4892b9fe78eb6edabe7b6248a620d1"
  },
  {
    "url": "assets/js/287.c3fc28a1.js",
    "revision": "a4a703e9d43622ee412d486eee92fe94"
  },
  {
    "url": "assets/js/288.4dec54d1.js",
    "revision": "dbefdc1c1b9d851ca2f8f504a85227de"
  },
  {
    "url": "assets/js/289.52a20535.js",
    "revision": "157e9d54289c0865f221926f0a3b79b1"
  },
  {
    "url": "assets/js/29.fa7cedbd.js",
    "revision": "a960ba133a74515617c022cf30032530"
  },
  {
    "url": "assets/js/290.114a9c40.js",
    "revision": "05f5b59633834d993c7da7d56f8724f2"
  },
  {
    "url": "assets/js/291.b9934952.js",
    "revision": "a7c911ec9dfa64b4663d3a3aa50ed974"
  },
  {
    "url": "assets/js/292.b1ffb118.js",
    "revision": "7c8fa18136edac5eab685f0f8eea8039"
  },
  {
    "url": "assets/js/293.a6b5eb62.js",
    "revision": "fb57a74e8f2dbb4130a3b8e9258fd1f8"
  },
  {
    "url": "assets/js/294.3518c7f4.js",
    "revision": "92b39d60325801161da88c4bcb21c065"
  },
  {
    "url": "assets/js/295.e6978c5b.js",
    "revision": "86efd0ffadf210351985ff7f125c687e"
  },
  {
    "url": "assets/js/296.dd5a5a81.js",
    "revision": "bc1bdad4f3f0474e8e420d5142cf516f"
  },
  {
    "url": "assets/js/297.af557df6.js",
    "revision": "4af71d94f9bbab3a30a245714af86dd4"
  },
  {
    "url": "assets/js/298.d59cd42e.js",
    "revision": "956eab5b64ec072b7565a6f31e9bdbd9"
  },
  {
    "url": "assets/js/299.c080a472.js",
    "revision": "9570ecf907bf4742002be19e4d38631c"
  },
  {
    "url": "assets/js/3.49231581.js",
    "revision": "b4e14917d6a16d0d8a1b15760eb8473e"
  },
  {
    "url": "assets/js/30.405781d6.js",
    "revision": "1a5dc2ce54fea471479368af5ced5b09"
  },
  {
    "url": "assets/js/300.8cfb7cad.js",
    "revision": "946ce593299504d88b49f9e0c13320ca"
  },
  {
    "url": "assets/js/301.41d130b7.js",
    "revision": "8531a2665ab7a11aa2c559b10502e1c2"
  },
  {
    "url": "assets/js/302.810c5b71.js",
    "revision": "aadd31a895bf0d994246b5fbde4b5bd2"
  },
  {
    "url": "assets/js/303.df865c58.js",
    "revision": "4f062ad1c04687cee8957906ecd0df5a"
  },
  {
    "url": "assets/js/304.4dc92e2b.js",
    "revision": "fe72c22272f5e328f5451af3edfde0eb"
  },
  {
    "url": "assets/js/305.b21ba045.js",
    "revision": "7ee06ba89664e7c040a1bf50fd614197"
  },
  {
    "url": "assets/js/306.99500c79.js",
    "revision": "446aa1fd0b45a41b8db989f7229ec534"
  },
  {
    "url": "assets/js/307.7c8cca34.js",
    "revision": "83982d8e1f62371b0f354a7f01901d16"
  },
  {
    "url": "assets/js/308.2017dc12.js",
    "revision": "34fc04b8b225bf5e966f52ee653e3e19"
  },
  {
    "url": "assets/js/309.5e125a38.js",
    "revision": "bd9ec7357cb9060a8dd09c37fd721e0b"
  },
  {
    "url": "assets/js/31.a9f2c0e2.js",
    "revision": "3696e77224a56e92730030239af92aa7"
  },
  {
    "url": "assets/js/310.dbfd6a2f.js",
    "revision": "eab0f1afbd844b0614ab1e46308e47b5"
  },
  {
    "url": "assets/js/311.26b25b11.js",
    "revision": "98930780a1d4f95f8438eee8c9915ff5"
  },
  {
    "url": "assets/js/312.6180e79d.js",
    "revision": "c6c9b6e311e98015ad2632510e5440b4"
  },
  {
    "url": "assets/js/313.f49229be.js",
    "revision": "708dc1329323757f99176088e0c921cf"
  },
  {
    "url": "assets/js/314.ec6c4980.js",
    "revision": "f011244301cdc9ea26db6d9c8cf6a3b4"
  },
  {
    "url": "assets/js/315.1644e868.js",
    "revision": "cc49724528bd185827ee91f0c40117d2"
  },
  {
    "url": "assets/js/316.b562513b.js",
    "revision": "9987316d22be9f5cc1697d389d22953c"
  },
  {
    "url": "assets/js/317.a14a07f0.js",
    "revision": "cb00164653792f647f0037f530264014"
  },
  {
    "url": "assets/js/318.a7520983.js",
    "revision": "1e30a4c5ffbd6ad1da0ce3fc04b639ae"
  },
  {
    "url": "assets/js/319.56c15682.js",
    "revision": "f6e784af04beaa62958fbb3fadab1998"
  },
  {
    "url": "assets/js/32.9c50315b.js",
    "revision": "63e82a02ff6b768e0dbcc03da3d1d13f"
  },
  {
    "url": "assets/js/320.b39083bf.js",
    "revision": "f6980f74e3557ef49e28a619fa304206"
  },
  {
    "url": "assets/js/321.b1f2835f.js",
    "revision": "e37835ed0bc685263a835d60362f0c4c"
  },
  {
    "url": "assets/js/322.a2372199.js",
    "revision": "8852af9961c9c9e40a3d7fe1523bddc2"
  },
  {
    "url": "assets/js/323.548c9efa.js",
    "revision": "952b84d0e915b2a020f833d2e7339e97"
  },
  {
    "url": "assets/js/324.f5f3c731.js",
    "revision": "893a37ff706e8d4593b6fc7b1346038b"
  },
  {
    "url": "assets/js/325.38e9d812.js",
    "revision": "286c06734dff5b556a6ecf2c7eeedd4f"
  },
  {
    "url": "assets/js/326.6135a4de.js",
    "revision": "e94b5554b3e3e0fc8ca56b135beb3703"
  },
  {
    "url": "assets/js/327.32558cbf.js",
    "revision": "1cd2c3e89493dd042c43dfd0fb48b06e"
  },
  {
    "url": "assets/js/328.ce10a10a.js",
    "revision": "d62c09fa859cbe693653a32113dd433f"
  },
  {
    "url": "assets/js/329.becaa2db.js",
    "revision": "3bb5ea7a5c25e0f9afc5fae116c75bc9"
  },
  {
    "url": "assets/js/33.1e7cc4b5.js",
    "revision": "4b1c6f401ed13ff138c98fdb77708b84"
  },
  {
    "url": "assets/js/330.ce0adfba.js",
    "revision": "e1d4bc598123b1ae7bed30605b71b667"
  },
  {
    "url": "assets/js/331.2f00c4aa.js",
    "revision": "be25c3cd97356fd6cb25478c175d4a80"
  },
  {
    "url": "assets/js/332.65dc51a8.js",
    "revision": "4e4de2fbdd4cf19e8b08c5015742bd72"
  },
  {
    "url": "assets/js/333.9931a405.js",
    "revision": "34a0461c8588ffaf99964d05007198c3"
  },
  {
    "url": "assets/js/334.f146915d.js",
    "revision": "1d7bbf306201d3f9ba2143c02d235069"
  },
  {
    "url": "assets/js/335.4ba9e0ed.js",
    "revision": "f5532273948fc95325166bdf8b51f85d"
  },
  {
    "url": "assets/js/336.5e7eeb13.js",
    "revision": "8df92ddf214f48c719f54ee341456e4c"
  },
  {
    "url": "assets/js/337.4e1f421d.js",
    "revision": "40c7e5e5735777f1f5e5654f3f52d2f3"
  },
  {
    "url": "assets/js/338.75ffde77.js",
    "revision": "f8e47908164aa312345f2213dc2eb724"
  },
  {
    "url": "assets/js/339.6fa47429.js",
    "revision": "1a2a7beab8a5ec22c1e2023dd99c200c"
  },
  {
    "url": "assets/js/34.d1e11481.js",
    "revision": "2b8777c2ad9ff47a04f7be961d56a573"
  },
  {
    "url": "assets/js/340.4a966c46.js",
    "revision": "80df0f5e895913bfc3f296c2d8f22df1"
  },
  {
    "url": "assets/js/341.a003230c.js",
    "revision": "5bed9f3d4984edb1b021c22d081ed903"
  },
  {
    "url": "assets/js/342.7af5ac1c.js",
    "revision": "3fa312ede6296dae42853bc3651aa8cc"
  },
  {
    "url": "assets/js/343.917e0f5b.js",
    "revision": "b8b92a58b424a2a1c7bba0db48eb3fba"
  },
  {
    "url": "assets/js/344.1a93466a.js",
    "revision": "c07977e515f049a6871adfa821605492"
  },
  {
    "url": "assets/js/345.d14e2b35.js",
    "revision": "c23d3e95f2591780fcc9df497a41e190"
  },
  {
    "url": "assets/js/346.66755fd4.js",
    "revision": "f577e3bd9c5373a46d77f6b8c104e876"
  },
  {
    "url": "assets/js/347.ed356e6a.js",
    "revision": "62a9f507fc08323e8c1a8554fa0ef276"
  },
  {
    "url": "assets/js/348.9913b92d.js",
    "revision": "a3f6eebead6b43ec4eb2b3566e0b6c1b"
  },
  {
    "url": "assets/js/349.0f9bf649.js",
    "revision": "92c141c3002b68e64a45c173e026407a"
  },
  {
    "url": "assets/js/35.bc49f88f.js",
    "revision": "cbb0489128caa572ffa850a13a58d4c3"
  },
  {
    "url": "assets/js/36.4ecd3aa3.js",
    "revision": "999140fec6850136b96bfecc683f7429"
  },
  {
    "url": "assets/js/37.fb71b8c4.js",
    "revision": "b2985847c8dd15953c2b7bccc0c7a20c"
  },
  {
    "url": "assets/js/38.882e6cdc.js",
    "revision": "2109f6e5e339c3deafe5c7ae8e8f87ce"
  },
  {
    "url": "assets/js/39.7838c883.js",
    "revision": "cc3dfdb4ed31c7a2055f6350f9924704"
  },
  {
    "url": "assets/js/4.b946ca35.js",
    "revision": "dccb2bd8dcc96bea9abf2a10ff8e0c5c"
  },
  {
    "url": "assets/js/40.f895f6b4.js",
    "revision": "3a8cd66f4dd1a51c3df30cc18f64290f"
  },
  {
    "url": "assets/js/41.4b14b03f.js",
    "revision": "ad4d1e3bf441bd2b9e5ac1e9f2136278"
  },
  {
    "url": "assets/js/42.cd327535.js",
    "revision": "0163661d2681b2676c819c8bb089d4fc"
  },
  {
    "url": "assets/js/43.aa2784dd.js",
    "revision": "e7380fadc2e34f0508f50c6e15e0bbaf"
  },
  {
    "url": "assets/js/44.6ab04c7c.js",
    "revision": "0da41707a4c2b60158166f6e7451c0ab"
  },
  {
    "url": "assets/js/45.d0b0c5b3.js",
    "revision": "0bb053dfbb739732e47e9c6c95132966"
  },
  {
    "url": "assets/js/46.9213d26d.js",
    "revision": "98320f46110af33718d769e30f7698d6"
  },
  {
    "url": "assets/js/47.9a1a743c.js",
    "revision": "71a59ee8bae018816ba1393874c6b94a"
  },
  {
    "url": "assets/js/48.06daa6d4.js",
    "revision": "2bfd1021a3fe21d8e608fc392c80d3bc"
  },
  {
    "url": "assets/js/49.e08c8a3a.js",
    "revision": "13a49821266662c2ff043c79c02401a9"
  },
  {
    "url": "assets/js/5.d3258255.js",
    "revision": "fee95d99f170dd0b693c7dcdccaa28c2"
  },
  {
    "url": "assets/js/50.3833bcf9.js",
    "revision": "906607ac3ec56f5b6dc7dae7b3b3f309"
  },
  {
    "url": "assets/js/51.63d0e240.js",
    "revision": "ac4e7dc6a7ce29a619c881e821b5019b"
  },
  {
    "url": "assets/js/52.1ef81121.js",
    "revision": "af885cb9698f33b114462781e2a9e083"
  },
  {
    "url": "assets/js/53.9c740b53.js",
    "revision": "22fa8f795d7df1048e721dfb0aa88ccc"
  },
  {
    "url": "assets/js/54.396b84d0.js",
    "revision": "75b247250c88452575ef8c529b048ca7"
  },
  {
    "url": "assets/js/55.019afc04.js",
    "revision": "a7cc8e8511f44df48feb461a03afecd9"
  },
  {
    "url": "assets/js/56.03b9350f.js",
    "revision": "4a840eebc98b0156dfff162198410541"
  },
  {
    "url": "assets/js/57.2238aef9.js",
    "revision": "6a70a5b9e724824506e17abb242e7765"
  },
  {
    "url": "assets/js/58.8a52daea.js",
    "revision": "fd138d36a8dbcc155081e525dddd37de"
  },
  {
    "url": "assets/js/59.1bc367d1.js",
    "revision": "3918bb7b4da9f3ab12f8f5c981964806"
  },
  {
    "url": "assets/js/6.bed7f3df.js",
    "revision": "ac6089e67e22e897ab86715d20756473"
  },
  {
    "url": "assets/js/60.53e252c9.js",
    "revision": "ee71a836e72a50847ac6d03146bcba4e"
  },
  {
    "url": "assets/js/61.6db50de8.js",
    "revision": "a9241f13cd9fd39fc29cf9c56a5dc5c1"
  },
  {
    "url": "assets/js/62.22c1f1d5.js",
    "revision": "8432b13c3c593121e5b2a9ea7f3b77b6"
  },
  {
    "url": "assets/js/63.49720f5f.js",
    "revision": "d5390f7a5ede2957130fef96c25f5dfd"
  },
  {
    "url": "assets/js/64.3fa48995.js",
    "revision": "f659841a88e9ff58642ffb847c95ab08"
  },
  {
    "url": "assets/js/65.e1597264.js",
    "revision": "d580e3761d7d89ea7f2cabe87f78ff1b"
  },
  {
    "url": "assets/js/66.2a8b980d.js",
    "revision": "9726dec972bf35f22f1653d673103085"
  },
  {
    "url": "assets/js/67.4ebb0077.js",
    "revision": "281dbcde6cf4b7420a9519979db66daa"
  },
  {
    "url": "assets/js/68.6209732a.js",
    "revision": "d7dac1ac29167d9a39da89f49fff283a"
  },
  {
    "url": "assets/js/69.71fed328.js",
    "revision": "9dc4668a70e77f48319cf4f555424008"
  },
  {
    "url": "assets/js/7.74947deb.js",
    "revision": "81d274d01c40cd6b3c3b933f2401ca25"
  },
  {
    "url": "assets/js/70.255027e2.js",
    "revision": "e8ac82da0f2b8a3510b6dc17879b0d76"
  },
  {
    "url": "assets/js/71.f1fec663.js",
    "revision": "ccfd7a285aa0a56e41e6ca02e5d5341f"
  },
  {
    "url": "assets/js/72.2db0491f.js",
    "revision": "98f251875b5f29657478b1f57b3325fa"
  },
  {
    "url": "assets/js/73.90ff8e93.js",
    "revision": "815286195b6b90e438835146d2227b31"
  },
  {
    "url": "assets/js/74.76043b0d.js",
    "revision": "9cb67bbccddb386d4ffc40aad18e8a5c"
  },
  {
    "url": "assets/js/75.1bba4947.js",
    "revision": "954773f028daa38953161ced409c2c74"
  },
  {
    "url": "assets/js/76.9c4536ad.js",
    "revision": "43db936ba4dd38e8f1b262742196cd49"
  },
  {
    "url": "assets/js/77.df8cb471.js",
    "revision": "1c4e7152dadcc54bfd0595f5266d3e36"
  },
  {
    "url": "assets/js/78.9a50896b.js",
    "revision": "2231eefca8685a928b387f7b72629aee"
  },
  {
    "url": "assets/js/79.fac5d637.js",
    "revision": "0c0fcd66eb1db7a3c435e9c4efbd75d3"
  },
  {
    "url": "assets/js/8.e2680002.js",
    "revision": "7d49235d0e876fcd916d316e701d4628"
  },
  {
    "url": "assets/js/80.c0f70e82.js",
    "revision": "b56933dc02112b3dea16f47d869f2f3e"
  },
  {
    "url": "assets/js/81.94f9eae8.js",
    "revision": "ade79c70ca7acb6c83cf6dd6bed76428"
  },
  {
    "url": "assets/js/82.5368b9cd.js",
    "revision": "87333d681ce094ed656999cfe200a65e"
  },
  {
    "url": "assets/js/83.5948f1af.js",
    "revision": "31f1c2fd8ab84ebe57a0342bb6d64e7b"
  },
  {
    "url": "assets/js/84.b514e51d.js",
    "revision": "6aa2caef4924f3112e8b58cfbb9da95d"
  },
  {
    "url": "assets/js/85.6de048eb.js",
    "revision": "7a8ae877672e501ef6881516b80a6f7b"
  },
  {
    "url": "assets/js/86.44b300b6.js",
    "revision": "a0bcaf53b868eacaf1e0973ed0fd8438"
  },
  {
    "url": "assets/js/87.89d417f4.js",
    "revision": "731cfa3a31cda02c1cc768a59e97e4b6"
  },
  {
    "url": "assets/js/88.c61ffc7e.js",
    "revision": "3c8391856408aa41d0d8c7b7a4418f7e"
  },
  {
    "url": "assets/js/89.ceabcff5.js",
    "revision": "d637bfea69e532853b988a4ba802245d"
  },
  {
    "url": "assets/js/9.182c3163.js",
    "revision": "24dfcb539fd3bc715cf5bced41dba39f"
  },
  {
    "url": "assets/js/90.09f5116f.js",
    "revision": "89ca9087198726841a6a0827c7ecc5c3"
  },
  {
    "url": "assets/js/91.6e16c685.js",
    "revision": "fbf1ce337ac2859bda8fe3ff333e990e"
  },
  {
    "url": "assets/js/92.07e5a964.js",
    "revision": "0fc5c44758af4f46063c7e3f487a408c"
  },
  {
    "url": "assets/js/93.804cb9ea.js",
    "revision": "cf5454ec0f4ea6261ca2992a504d4a09"
  },
  {
    "url": "assets/js/94.aff37b2a.js",
    "revision": "ffb404fa7830b5369750fa28c4c4e09b"
  },
  {
    "url": "assets/js/95.e2038327.js",
    "revision": "9009f1c1ec928f1e2e0f482cce69c258"
  },
  {
    "url": "assets/js/96.f6bd43f1.js",
    "revision": "660ccadb7bc5e374d928eeb959a9bf9b"
  },
  {
    "url": "assets/js/97.7d51cb57.js",
    "revision": "82c46feafbef3c18c42f7dc6239119c8"
  },
  {
    "url": "assets/js/98.81d58e89.js",
    "revision": "0a30a1ba919b4941c40d1bf2a8824c63"
  },
  {
    "url": "assets/js/99.ecb3cc24.js",
    "revision": "7aafb255b205415a5b73ee5a9cd05625"
  },
  {
    "url": "assets/js/app.9fb419d0.js",
    "revision": "2908baf0c31f1ee86967ed5c1131368d"
  },
  {
    "url": "common/architecture.html",
    "revision": "3073b96e3b2e952801cd42a47e8a94b4"
  },
  {
    "url": "common/crawl.html",
    "revision": "6abbd8ba8c1a401d3b7ec087987f83c7"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "02dcb62c5fcd091d814bf14d984e911e"
  },
  {
    "url": "common/document.html",
    "revision": "b1bceaa0f4add14d34708ea89ab0767e"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "b51f5fcccb383c345652299f2732fb08"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "2eb20c5373b33b49c9a6fa34c85f43b6"
  },
  {
    "url": "common/index.html",
    "revision": "067892637b49736898ed2c19c73fdfea"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "5989380e17d34cf2342251ae5d9137b9"
  },
  {
    "url": "common/realtime.html",
    "revision": "2a0ca0c0ce6ba1d47e2cbd25bbfe57ca"
  },
  {
    "url": "common/refactor-catalog.html",
    "revision": "1bbf80441e09212717569803ddedc7c2"
  },
  {
    "url": "common/refactor.html",
    "revision": "aeaf4788bad1ca5529a1e913d6803f6d"
  },
  {
    "url": "common/restful.html",
    "revision": "a674ea5cc6cdd307981e4dc2b879f91b"
  },
  {
    "url": "common/seo.html",
    "revision": "b41a350d4e13fe752f3778b9c0dd2ef9"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "1d6887139c5263fe6f8d3a21b33b47b1"
  },
  {
    "url": "css/tricks.html",
    "revision": "bf5df2f9522d52fcc41fc66ee54247d5"
  },
  {
    "url": "db/architect.html",
    "revision": "fbc4748e84810fdce0b96e8902bf8cd3"
  },
  {
    "url": "db/cassandra.html",
    "revision": "af64f80ef0fc895afbfcdc9d67243850"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "163961c8a25a8ed9295634c121ba1301"
  },
  {
    "url": "db/nosql.html",
    "revision": "0c11af957d9935ed22a3c9591d6ae70e"
  },
  {
    "url": "db/optimize.html",
    "revision": "0d4a280a1c3bd462cac80dade5b6b084"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "a461fa79bc037e2050194e8d23f33361"
  },
  {
    "url": "db/postgre.html",
    "revision": "5930756c1ebcf7d00aa2f4fc5882a57c"
  },
  {
    "url": "db/use-cases.html",
    "revision": "72c8686e6229053ce8197bfdaff9d240"
  },
  {
    "url": "go/clean.html",
    "revision": "145ba908f7611c4a294873316ac469d2"
  },
  {
    "url": "go/index.html",
    "revision": "9a20f2734ce6f7d087e9210ad55431e0"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "902afdd0269356c06c129792e851747c"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "57c6a42d4776088d4ec91bdd300f4a84"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "d47d0d1fee6cb15922c0ef739d794e3a"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "35ec02e58877d508f535958034d1b08d"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "e738181920b2651754a714afd7159e5c"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "cee65600bc55bba60f2b6f4b32bd4ef6"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "f794eb10e6dcc042826e8218d6cf020b"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "ee3dd7b6613458c83597d69181cb9750"
  },
  {
    "url": "index.html",
    "revision": "42ec82615af6273fbae64fa927ffc5d6"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "497d644f182ae604c2912aeca64f204a"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "41984c74b930fed412ff6e8cc7ee80a1"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "4c411fd66cb83254d77423b4f9ee6eff"
  },
  {
    "url": "javascript/closure.html",
    "revision": "eab9393b99337aa8376739fcfd7dd716"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "40f55962888c4e7c5eff48d359de9bee"
  },
  {
    "url": "javascript/functor.html",
    "revision": "8373e7cd85358b31af0e5e31b3895227"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "fe39404342c03f39ee381a75eef2d6cb"
  },
  {
    "url": "javascript/react.html",
    "revision": "c92b8ae1557a6ba9063ce98a902349ac"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "3c900d5435763121964b6eaffa44f016"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "c6d4b4e7b450cdd44dfe3f1d566243f4"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "10d196e11f1abced3f2a9fc59ad36331"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "9129ea84f35601891d6e955dbd3ca4b0"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "4c4f4d9768419bf7a2da4d0dc9a7e48e"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "24f63f986eefe8b43765f28e66fd43a6"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "a06a37a6c35fb97a6aa97517a4cb1f8a"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "0f84abb57c9841e6207b6f3e0382dd61"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "b170765fa0a2ffee81becbbac4ec7fa0"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "2f330eade1202e48d52bfec05a66a5aa"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "ea5ffc3c39d085ec04e16114d29b1586"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "10276e0fdf2f13bbd8519c16e22ecb46"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "d3379af715b4560d95da46179ed874c4"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "19457397bd84ca3a08516642117f611a"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "7d14331b939c9be3568581842f04e107"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "85e0191e30d6ecc98f2519dac2c50aec"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "76f7ffc7d277f347bf789f01bbeb2ae0"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "6d68bc13a1a166958f34bb1e6adabbff"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "491492379532ccde7430f1e0af00811b"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "ad6c30ae96f9ef2a6a666266c634a4d2"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "e3ac838dd14c9abc8e5a72af7220a83a"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "8642392aafda75c13d6bdfe834b834a6"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "485638b952dffe994b3aec90829bb7ad"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "a41a9187dab529f261305ec2fe343c7f"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "9c3f8c27b0e85c03e5b129f9a440e2ac"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "43cb969bfa1b4ca3ece5e61a9a3677a1"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "bacfee48755244390b7184fb63004e9f"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "6e57615fdb4e4076efb3ffab1352f39a"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "2b898d4045a4f72d1f739cb68d26ad0b"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "769f1a6ade51935b5779676188367ed9"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "d0ac698f6cd2668f8574a148cdc8b143"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "bc01a0d3222fb7a46ce6fc09a6c4b9d2"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "279de8cd288d5214364fc4306eec0283"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "49cf0ba7361632a31e36f929df620570"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "cbc19a22d3bcbbba7013435c6480a353"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "f50e0f811989639e8a10c8b6dece972b"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "179bc96040a54fa86e484e32934f789b"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "53a0d268e2c79daec3383579200825a4"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "d4ecbc02cf33aef4e8f8c5e63c0688f3"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "d99b4007ce5d55e432de6fd8a21cd785"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "8650c9b7c2ef3d5402443e898f57a919"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "8e20946890a3cae262a5e5e2068e4dff"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "08e2765683f4a7aab57aa9cd5bd8d461"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "44d7576e4fcab10a2785897622959ab2"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "2162fdaebaa2a2b5af32979c1f85f321"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "d888b769b8e4754b9f51bdd362a57325"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "553fa318fdfbcda0f0e382020dbba451"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "76993d48a6c86f9e74356ff989ee4ebe"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "24e017b90ffaf33d0645606a722f8d14"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "0dac8c3bdfa9dea22800cd45180dbaad"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "e225f40a67e2b9107bd10d0e04d08ae5"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "39f341f3289c351b08dcfd34f8162983"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "f8f117354f66c9ddb479843e1f5e5461"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "9bcf24bf7e53b0bc0ee3ad960a9fa617"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "8eeae6a069c2baceb8f8319489cb483c"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "46c4fd1125bce1391e1c57a99575d8ad"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "4103b8ff15b1a4cdf6f5ae64384661e4"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "b96e892ff71237e7dbe3096593afb71a"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "9ddf13046e5dc723e806593f76c0f632"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "833fdb7bb66acbb34900b2bb10393f49"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "16a5afc3b7650ba0c01c1afb8802fd0f"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "649243778137a4916255f5276da83b79"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "6fe551ed17e4ee27431ee93d58367eb4"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "8647abd80161a7f5f3dcfda9fed96b0d"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "16fb3f82945f6dffb7bd5adae18a0693"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "70bb4743ad593983e6edfc6a22898052"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "082765cbf85a9c6499c4441640e0b6f8"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "47437c94ef8d80924c4ecf537dbb1898"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "5ed30a1f78473312c7c9638052ae8c6c"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "38941bff74c1d12223a7e48df411383d"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "f100b9636ce370dd94a2a83926391e03"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "34a6d4b14f1a3a10b35fc1b9fb6e744d"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "3058296cd035a2c40e2c426eab56544d"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "4be8dadfb3202b03cbb51528003aab26"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "9027bf107cda806ec6de2e54945e8ddf"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "6576377ae8f396da3632869cbc8cddc5"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "b7fbbea3c2c7a0d28ac79285f50f4a0b"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "aae2590b83620aa62f557b5d71198d52"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "4da8a2d29e01bf2b3a6c7fb18a47885e"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "4ed22e278963736cf164816e9c4bbdf0"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "ed3ea2c2b20de6ab60b159351ef993d3"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "72df6b5753d8829fe9a2ccbd55506576"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "4ec18d7f2b5a95a3665a62c3766cbb04"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "21abe329358fdb06f13334840e8c59e7"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "ec831af0afefffe61bae86a4288bf1cf"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "dd8d5cf0af4fd25f7cafb863c7e976c4"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "2f0ad4b5bfaafb3772c9e066e11642a6"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "f3ea6c9fc0a051a683c2ced7ec1990d8"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "0bcdc6c95e9128d2594ec242a8430d6c"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "9fbd98687a2e018314c300489ad58289"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "254587f9e3566884797be0529a17d3d3"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "f07dc6571021dfad0b3ec1ceb9918b5a"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "9a1804c7a486f4de7dbc1ee6c8ba4ca0"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "988347d42ebfa5267337cc015b739653"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "c863233b0d76fc06b66dc51b17921b77"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "07b56faa7d2989e0dfe2e94192cc0dc7"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "e3d5775511d27fae2c69723f20fe5f4a"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "67b64e339503e0a4efebd1bc3c37e5e1"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "c76d35872840d057f0f0f7ade90630cc"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "206adc4d222de5687e2ed73733f775f3"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "435675decd81a39a08640358f16cf65f"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "6d73ceb15098248b386f41c7a8b43ce2"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "2451635d30881330f6e3ec5ebe0963ff"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "8dbb93e89e200f5363ff939a8c1f70b6"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "bad0e3eabbefc4b28b24dc918cb0fa89"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "79391b19c17c8130b70f83f0018ed760"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "a607f34b49da2744b7cc68a5e15e4b26"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "53168012fa9a7bbc848b0bd57c096259"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "7e0065eab38177812f8bf735f19792c6"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "3101a5229733bac7d75e233d49df3db8"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "e0d8eb1a74eec3238aaf051165279950"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "6859a8b6b3d0e46b03680a5551ae3a46"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "364bea615a11cf686363ec17306b09f9"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "eb98e620b09ee741ac08d0b0d91d777d"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "453bf724278b493cc2a52e7affa7d0c8"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "c0eeae77adc7e4ab376bbbcb8893d5eb"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "7f7066dcfd2bdd3fb62ffd8b7ced3b03"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "a9b93c505478dd102d20614820a4420b"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "4ea0ae7128fb409eec5fc06af28b0e69"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "aeb421b82d96773edbd9a5837158ec6f"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "31bdba3febd40fce2488c6297410fb80"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "fa15fc49c1242ff107fedcc80001849b"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "ebb2b82e1476e82a6d0094dfd6a2203b"
  },
  {
    "url": "kungfu/cleancode/0.html",
    "revision": "1149538a7376569cf3140c4b9757e9c4"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "36c2ee4602856ffa6bc3c378d89be33e"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "180fea24969ea95e2e6cfdeff0537a36"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "1cfc511b0e8fb9c18956e7fa9882b060"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "ae97437a4a4705a5eb85a5d4f25cddac"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "5c4cbeafabc4d716a8b0451870e0262f"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "0cb5d3cd9cd977fb2e750e00125adb02"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "b66511f495616981317ec09618054ebc"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "348d61acfe95b0810fe7ff394f679506"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "3686317e4637a1d6175be95ba7109f90"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "54c0d22e9adac69873855c1ba1216abd"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "926e79ae2b65c65214d44bbbdfbc9ab2"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "4ee0450b6b9027eabaf22c9d09df9c0e"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "b981fb02309695d94c2c7538d97d5dda"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "ddf997020a4ec87cc129c4ec62799894"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "1baeffcbc0aed2262950e1918d95d113"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "829b28684a53deccf4bb3a88e44df76e"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "c28276e650b8705ed9cc6dfa337f7834"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "9e075bcdc2b1376f37fef1e30692fc28"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "5c5e9438a95e8edc3096f4152bbfa381"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "b3162f31df094fcc9dd0427e6f26cbb0"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "c889a37f1ff083493afa3e195e4cb92b"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "9cc058d601191b979f4b82154007fad5"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "d67f300871fa52ce8018f10aaafd7a68"
  },
  {
    "url": "kungfu/js/vue_react.html",
    "revision": "903d9c66e14e0437f9f6363d98894e03"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "80d07a3d2f35a86dbe9b07a2c2de5155"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "37dd30cbc350f61e9bea65e25cd473d3"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "ba9dbd8e38d719e198ebb31736335473"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "2298ce6f1bbfd990ea2d2ca2dd2776a9"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "a62903da79c4a5309c94378f1460db85"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "e9bed3cd85307406411b852068dcd2a8"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "60ab51daede25c039524ccc910dc63ce"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "984db769063c0246837f2c259af46066"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "0e32788bafe513a41b165c2a75be5423"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "a7c5a3283e006b5832e9f16d8675ee22"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "865bfe0d45c81df039dffcae263735b2"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "b1e112c22eb27400f156dce49bdc4f48"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "f6a397657715b387dc78378a555926b4"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "5390f1b208e785c3070344f33f571a88"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "eaedcbe13fc603b6173a54bfae0272bd"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "baca7adc6dfa675ba2c96c9510936998"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "24413ebf6e61436f2023844748fc1942"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "d04e9dfe75791b2b3ae19cc42cc2929a"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "990d8ea62a24fee672bdc4e6693ce0d9"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "688c13c76e8043e14c1451c2fd8ead41"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "d663bb9f367842b28f8b240bf346daba"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "6745e62520af89945bb6508fbf02ebed"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "d73b48bbb05495678b701fafa7d3ae93"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "91ef1156b6945806168288c34318a786"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "291cebefacd49d4ea31437ccc8f6b3f2"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "90a33baff770bbab8b5276543d839144"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "f75eb9dd3227007a935d27122a2e79d7"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "6cde6ab200830b4ab4fe7cc5aa62cdd2"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "e55b3b03e9bfb0fb4f411ea09a25a9cd"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "5719eff41797b6a9f5e86d45844f61fb"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "100f73bffc33907aecc4f03177f4d6ef"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "56daafb1b2cf5d9d9361750b0a4fc22b"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "02b3266c378641bf4decb6f0cfdabdc1"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "f787e3b0659d957596c954fe4ae13fa2"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "95c00219bea9ad68b066649781374825"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "e57f8de787749da139e4331c1e8e8c41"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "a07429682e1d849ddff73acf36eff3c2"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "3dbeb5926ab691c9c6c4481b5a37302e"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "5241c005d9972d7d313e30b200de598b"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "dc1cc3bed39d69dbb281ae7ac41e23ba"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "f64848d9cd1df3e8ad8b699075e9372c"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "d4ddfce6c5065a994171533846828fc8"
  },
  {
    "url": "kungfu/template.html",
    "revision": "edb35b200683ffb575b0bcb2e520af6a"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "b18bb3086a8cb374863fdffeb45b30bb"
  },
  {
    "url": "node/env.html",
    "revision": "14585cbd23865f10173867461eac3e16"
  },
  {
    "url": "node/index.html",
    "revision": "615d4e9c545eeddef1c09ab08e202029"
  },
  {
    "url": "node/n.html",
    "revision": "d647bca97f56190e942357ab56f63e00"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "c4568935da0b5a1d8ed4e97fd8754a79"
  },
  {
    "url": "node/npm.html",
    "revision": "d9aa66c189146d6ad826864a77db45fa"
  },
  {
    "url": "node/sequelize.html",
    "revision": "085fca22d5a3d9ef89c5b224fd21ad1c"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "0009f3daba17d7600a430ec5e3389add"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "df252c41d8a05013e33ec50d37e6a0bf"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "e264c75a4960169a1433f1224421e448"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "2de45e0887b276ec97d47fee9df863f4"
  },
  {
    "url": "php/clean/di.html",
    "revision": "5abb2b92252bd470ac5cfc5e2578bc13"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "ef65394607b52597c1653b822737d9a0"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "8279afac1af2491e5ad0b565fab1cdc4"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "4f49ec8682feffa5b7600bd4976e54a2"
  },
  {
    "url": "php/clean/index.html",
    "revision": "ea64b8afb4bc8637e828767426576fd8"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "43018b23d50db88091b931cf3d0a4070"
  },
  {
    "url": "php/clean/module-communication.html",
    "revision": "12051524b28d633d1216a9dd8180d033"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "1bf769bb6bd81f68e212cdbc31b3d9a2"
  },
  {
    "url": "php/composer.html",
    "revision": "8f2998cc92daea44b4ca365962d6e134"
  },
  {
    "url": "php/crunz.html",
    "revision": "72121b499697a3292d0729ddbffd85f3"
  },
  {
    "url": "php/laravel.html",
    "revision": "0bc3cdca3b0945139e57a0ad351711dc"
  },
  {
    "url": "php/magic.html",
    "revision": "0f70541ffaf903ad631a1148fa5fa958"
  },
  {
    "url": "php/notes.html",
    "revision": "f0c1d6aeefb7913522fc91c034c87f93"
  },
  {
    "url": "php/oop.html",
    "revision": "757e83bd805d62069e1256600a0e2baf"
  },
  {
    "url": "php/php7.html",
    "revision": "5e1be38232177e0047e18bfcabd13ea3"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "90699b8757ed30a2f15ee82483c6ddb4"
  },
  {
    "url": "php/reflection.html",
    "revision": "2b4850a912b4b4be5a765ef55916b201"
  },
  {
    "url": "php/tricks.html",
    "revision": "f8cd864d0e534d962304bd75537032a4"
  },
  {
    "url": "php/wordpress.html",
    "revision": "d6fc93f797cace298b58fd137822daae"
  },
  {
    "url": "quotes.html",
    "revision": "2216043de3ffb36f75d068c6edaa4cf4"
  },
  {
    "url": "refactor/notes.html",
    "revision": "84663c459dcc6cea03acf95bde540872"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "bb5d7263846df27d27d73dc4e361f4ad"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "1036409920bb032d622d74512044d432"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "f3db1f972dd9468c99807957bd49f66a"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "86a2ae4ac71aed7702ea784d3b9ff2fb"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "3cc7e3478a5c86acc66ccc54a8c18a95"
  },
  {
    "url": "snippets/jest.html",
    "revision": "9a8a06ce1fc5cd9438aba21ea25734ad"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "72756ba091da525dd3d6453c96272f5e"
  },
  {
    "url": "snippets/patterns.html",
    "revision": "8a3f9ab15e53c193d98c0f42737c105a"
  },
  {
    "url": "snippets/regex.html",
    "revision": "af566d835f19275983e9bfd9e4e92969"
  },
  {
    "url": "terms/12factors.html",
    "revision": "8f6c8624e56696283ce5a7c77a40ad61"
  },
  {
    "url": "terms/architecture.html",
    "revision": "a27fc666e8f255a9d4cf21b32fc68c6f"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "b08408df3521dc4627e33a6134eab682"
  },
  {
    "url": "terms/ddd.html",
    "revision": "d76cbab0ce4d8331977c2349effd063e"
  },
  {
    "url": "terms/di.html",
    "revision": "c4ba24343e626bcc88ce7b105bef3e86"
  },
  {
    "url": "terms/javascript.html",
    "revision": "db211b857406402ad522f6d4ba442263"
  },
  {
    "url": "terms/oop.html",
    "revision": "2be6fcf6548882be0cb448f58f6dcf86"
  },
  {
    "url": "terms/principles.html",
    "revision": "efa2123d70c5ea93009d576ffc4782fd"
  },
  {
    "url": "terms/rules.html",
    "revision": "545adb89d59f89e8abf978ac4add2b28"
  },
  {
    "url": "terms/testing.html",
    "revision": "463f93797ba943273d9c43f6ad51a57c"
  },
  {
    "url": "tools/chrome.html",
    "revision": "c1ee4ad1c9aa946ef4f2e5a7b61315dc"
  },
  {
    "url": "tools/docker.html",
    "revision": "4045080fb9b976f4dbf27d4555cdf7d8"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "8d6d8f4ac6e378b5e5493fc32030b10a"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "5666e7204adb2c8e79fd0b5efacf429f"
  },
  {
    "url": "tools/graphql.html",
    "revision": "a4c5622d03e22a7fa2a9305479cfa570"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "5681d4c1fc554f49a79532147ec22e2c"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "e634fd369819dde3f06f3901306133c1"
  },
  {
    "url": "tools/redis.html",
    "revision": "acafed9c574c55b7b734c18949f238c9"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "9bc79d193ae3b91211fc6ceffac9e7e4"
  },
  {
    "url": "tools/vscode.html",
    "revision": "105633c98650db76f6932efa629645a8"
  },
  {
    "url": "tools/webpack.html",
    "revision": "5f7da99b5e616876fe3213d347653d45"
  },
  {
    "url": "tricks/compare.html",
    "revision": "a66d1103de41705caa301f53fb21a7be"
  },
  {
    "url": "tricks/git.html",
    "revision": "1a47d64aeabba07a4ee213b4253849bb"
  },
  {
    "url": "tricks/linux.html",
    "revision": "051b4c75ef9b9a6f4be8f742d0de23f9"
  },
  {
    "url": "tricks/mac.html",
    "revision": "4266a28379b6d6d85b01fba5c130f84d"
  },
  {
    "url": "tricks/misc.html",
    "revision": "fee7fb3307fab63008de1df9d1583310"
  },
  {
    "url": "tricks/setup.html",
    "revision": "3c260dc20474a1cd0fcfca78b1f04ab4"
  },
  {
    "url": "vue/communication.html",
    "revision": "ef9c707770f4df5c2084bd4713ebf77f"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "6dcf647350e9e44365d20624dccb6eff"
  },
  {
    "url": "vue/events.html",
    "revision": "8e1f7b5987e65b50fbcdc55cf52f2546"
  },
  {
    "url": "vue/references.html",
    "revision": "0f026bd9a8d023fdfaba43dcd22b50ac"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "f9ebf170632da4bb91d15548a02bff6c"
  },
  {
    "url": "vue/test.html",
    "revision": "3e645ed8b80a9e32128f877bd0dfab97"
  },
  {
    "url": "vue/tricks.html",
    "revision": "a8f5e6a01f11ea1c96a0c61a0ddea99e"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "ed4094bdd96d5b1e92b5d884ca876f37"
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
