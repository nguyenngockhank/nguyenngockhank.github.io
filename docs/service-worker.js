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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1c11a60ee92467a556c02906c5de0eb3"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "faa05ee565e8b0a2efcb751abc2527b8"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "0e1766171421f1880612179321363593"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "c6775791ce8feec000865a269ee4e894"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "863922ab363fd3c8435970bb40126a3f"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "f6d4cc0718394d2339f551413bc7ad42"
  },
  {
    "url": "algorithm/string.html",
    "revision": "e3728b555f73be14540f86c55f95b728"
  },
  {
    "url": "assets/css/0.styles.88febddd.css",
    "revision": "3ebf23d2d9635346bdf17f19b6690058"
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
    "url": "assets/img/joins.9ba0b10d.jpg",
    "revision": "9ba0b10da7976f52b794d7618c62d14c"
  },
  {
    "url": "assets/img/js-coercion.13986b50.png",
    "revision": "13986b50684df9fe6fadbb275f20a6b5"
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
    "url": "assets/js/10.852a4cbf.js",
    "revision": "5154c981e4649e355b3e4fd78c8d60ab"
  },
  {
    "url": "assets/js/11.14cb2654.js",
    "revision": "1d06fe751edece2296e8f7af60e69a81"
  },
  {
    "url": "assets/js/12.a6bb85f9.js",
    "revision": "315d08255af00b1244ddccabaf25f75b"
  },
  {
    "url": "assets/js/13.6d75137e.js",
    "revision": "cf0887dfc90936d3757734992df36690"
  },
  {
    "url": "assets/js/14.d3699d2b.js",
    "revision": "fa972ca32f3699952177b99e0a6583ba"
  },
  {
    "url": "assets/js/15.48c33420.js",
    "revision": "c9bad5da0ec1790a3974c05c07ffa06a"
  },
  {
    "url": "assets/js/16.2f05245c.js",
    "revision": "bdf2102c5d4a02d33a552a360aedd5a2"
  },
  {
    "url": "assets/js/17.0ec806bd.js",
    "revision": "a1d6082f45524fa30c981a7e5341ac27"
  },
  {
    "url": "assets/js/18.3cf3b467.js",
    "revision": "cc81a559ffe6e257a878e0f8ff06c748"
  },
  {
    "url": "assets/js/19.83273de4.js",
    "revision": "88c0a3a437b416327285602212d62cf3"
  },
  {
    "url": "assets/js/2.8e840ff5.js",
    "revision": "e53b015195cdf0b31c0cd458121d9006"
  },
  {
    "url": "assets/js/20.94905d53.js",
    "revision": "cb7f9ebdc081759621950f8d6aa36ed9"
  },
  {
    "url": "assets/js/21.64b0bf45.js",
    "revision": "a4e49224c3c3ffe3630b7b441738c85a"
  },
  {
    "url": "assets/js/22.f6788dee.js",
    "revision": "a7e4f18be8fbb8f3bd085efb0480b920"
  },
  {
    "url": "assets/js/23.7c0086b2.js",
    "revision": "d03010093a93c019ffc0c66795cd02ff"
  },
  {
    "url": "assets/js/24.beb42fb9.js",
    "revision": "329c4bee446e6f9fd0e3353ca0b83c51"
  },
  {
    "url": "assets/js/25.68e09f09.js",
    "revision": "c909338e4dc43bf7525f2a5f56daeebe"
  },
  {
    "url": "assets/js/26.dc18f37c.js",
    "revision": "9d15a43cb71e6f270bdff0d7ad8533eb"
  },
  {
    "url": "assets/js/27.fc618e44.js",
    "revision": "e2738fd6305dca737984082e6a22cdbe"
  },
  {
    "url": "assets/js/28.eaf8f10a.js",
    "revision": "7e2fd543f96ae86a67d99440d671232d"
  },
  {
    "url": "assets/js/29.5ada21cd.js",
    "revision": "94c53a28a4e2af8524ec1498b951f4dd"
  },
  {
    "url": "assets/js/3.dda3a808.js",
    "revision": "815956f0bf57e1608e4e7beba85d0453"
  },
  {
    "url": "assets/js/30.1dcf574b.js",
    "revision": "f734a31e43cccd8404f4fe773a42d07b"
  },
  {
    "url": "assets/js/31.96be12a0.js",
    "revision": "4593d74cdf3fade0bec6f3dd33fbd488"
  },
  {
    "url": "assets/js/32.0bdaf06a.js",
    "revision": "7c10f11c1cdd3a61486645a86679f635"
  },
  {
    "url": "assets/js/33.dd3a12de.js",
    "revision": "8520ef6274f1dfb76f62edf4e7cf74a1"
  },
  {
    "url": "assets/js/34.f54bf86e.js",
    "revision": "3281e334cbcad450b1ed89bd2b895544"
  },
  {
    "url": "assets/js/35.74c70080.js",
    "revision": "606aca8b9a314bca3713b45592c03e61"
  },
  {
    "url": "assets/js/36.dc10a761.js",
    "revision": "ce376bb8b37b9cfd2d7615f3938d4c4e"
  },
  {
    "url": "assets/js/37.4c85dbbd.js",
    "revision": "ed80b4115fee20b67d41cdb2145ad1c0"
  },
  {
    "url": "assets/js/38.58e2242d.js",
    "revision": "61a826379acd571ecb2742b759b5f0ae"
  },
  {
    "url": "assets/js/39.2c8c109d.js",
    "revision": "4e3dc2c71b7336d985c071255d0077b0"
  },
  {
    "url": "assets/js/4.7626d5a2.js",
    "revision": "cbf07f8b6bcd090d6bd55b7b4c85256d"
  },
  {
    "url": "assets/js/40.53ec915a.js",
    "revision": "05c4625a36aa5dc0f4144fa89cbc6b76"
  },
  {
    "url": "assets/js/41.cc6cf278.js",
    "revision": "04e20c19265a19faf90f261f51addf8d"
  },
  {
    "url": "assets/js/42.6d6656a3.js",
    "revision": "ad5eb5da0775992ab7afefbcb444d54d"
  },
  {
    "url": "assets/js/43.2e39ff0f.js",
    "revision": "e3d14b05edee77e809b6680a87d349a8"
  },
  {
    "url": "assets/js/44.89acb3cd.js",
    "revision": "bbac0fc1e0df80be347247b54ce222f2"
  },
  {
    "url": "assets/js/45.6955a9cb.js",
    "revision": "ce933e26e01527adb823ab07ab3961f2"
  },
  {
    "url": "assets/js/46.244f8c92.js",
    "revision": "63961fbbaab70a6add4f64ace04133f7"
  },
  {
    "url": "assets/js/47.ac7080fa.js",
    "revision": "1ec226650265c203b1b6f72f3b59165c"
  },
  {
    "url": "assets/js/48.847f37e6.js",
    "revision": "fa5ba2c4fec93b5ee4d7ec8ca4ef0f73"
  },
  {
    "url": "assets/js/49.79f83196.js",
    "revision": "6d20101fe66f096782e719217e321c4e"
  },
  {
    "url": "assets/js/5.7c3aa358.js",
    "revision": "306ecd3c197d436cae71d2cbf400f21d"
  },
  {
    "url": "assets/js/50.95a17fea.js",
    "revision": "e1896ac9b58c15b0e462acad29ed3a1c"
  },
  {
    "url": "assets/js/51.edf08548.js",
    "revision": "8f2076d17ae7904d6d8372c1ff3a5ff8"
  },
  {
    "url": "assets/js/52.3f952f92.js",
    "revision": "4c7535a27eef2604eb6c8df7718db8e5"
  },
  {
    "url": "assets/js/53.c7fa6d43.js",
    "revision": "6a008210b3d6471614131f823d45e44f"
  },
  {
    "url": "assets/js/54.1d255f1d.js",
    "revision": "15fdb14abce7c8542d16ef57b03a6b2b"
  },
  {
    "url": "assets/js/55.f13bf4d1.js",
    "revision": "c94081efaab145b2560a5ac201c8c629"
  },
  {
    "url": "assets/js/56.519aba4a.js",
    "revision": "3695679de9cf4113ec60d67a532c4cb9"
  },
  {
    "url": "assets/js/57.642c65a1.js",
    "revision": "0c993edf3839f3dd6ed4585bd52fbaf2"
  },
  {
    "url": "assets/js/58.f908fe86.js",
    "revision": "12d79fc2819fd1af7cbb154eeffce75c"
  },
  {
    "url": "assets/js/59.e1a7707f.js",
    "revision": "8f0dd895e10a1d8526173c741a7a5314"
  },
  {
    "url": "assets/js/6.edba699d.js",
    "revision": "392df42d05e3dfceda799f269e66551a"
  },
  {
    "url": "assets/js/60.93833126.js",
    "revision": "1a7a3e456a6467f10ca11229ff4a1c28"
  },
  {
    "url": "assets/js/61.12a0510c.js",
    "revision": "dcea28ed9dc58a64411c11ecd1416b8e"
  },
  {
    "url": "assets/js/62.c99babd3.js",
    "revision": "fe5710283f999788025ffc2772e659b7"
  },
  {
    "url": "assets/js/63.0a43a141.js",
    "revision": "dae4c938d32b21a91952ef4b39d96289"
  },
  {
    "url": "assets/js/64.4d8cb85c.js",
    "revision": "200489814cb240d8ba37614896c45fc5"
  },
  {
    "url": "assets/js/65.19cb7dd2.js",
    "revision": "b7a977f006c58630f4a7a7a18d9b0040"
  },
  {
    "url": "assets/js/66.094a72b2.js",
    "revision": "2d901cece310ee73007c7ca7d636bfa8"
  },
  {
    "url": "assets/js/67.2d27a380.js",
    "revision": "ecd48f6df9e1f15aaa2d1665b05573f7"
  },
  {
    "url": "assets/js/68.20eaa090.js",
    "revision": "1a31f72eefea73833b6ea5208fdc320c"
  },
  {
    "url": "assets/js/7.f8020888.js",
    "revision": "a48ee8e5c162659f03dc1ecabe222d38"
  },
  {
    "url": "assets/js/8.e3fa4aba.js",
    "revision": "5a36bde70cb2326c192995ffd1d70600"
  },
  {
    "url": "assets/js/9.51b3b2c8.js",
    "revision": "9fc6994382895b562b0706b63f9911f8"
  },
  {
    "url": "assets/js/app.cf224ba6.js",
    "revision": "692c32accdeb2e23a517da78b2de1d5e"
  },
  {
    "url": "common/architecture.html",
    "revision": "4ce3e5b84fff974a9eb140c29dd55292"
  },
  {
    "url": "common/authenication.html",
    "revision": "1ccbf63e2f91102a4369d5cbc984c151"
  },
  {
    "url": "common/crawl.html",
    "revision": "676510c8a092708f1d9af4f2975e2ac7"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "a3cd76a6d870583e8c0e35e8007cfb49"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "248dcc6e1d2dc8b65f3517ea3e5b796e"
  },
  {
    "url": "common/index.html",
    "revision": "084c4ea9b93375ecac2fc30a0847a387"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "f099120f61e476ea2a0cb89b04f1c2c0"
  },
  {
    "url": "common/realtime.html",
    "revision": "e7258a57e2f3f36ef65f7983aa3fdb0e"
  },
  {
    "url": "common/refactor.html",
    "revision": "e22d740c1ec63f4403a5131ed03574e7"
  },
  {
    "url": "common/seo.html",
    "revision": "83b799d12df6767328d5eac4a6cbd16e"
  },
  {
    "url": "db/architect.html",
    "revision": "b86ea5383657b81b7ff5dae759fe40f5"
  },
  {
    "url": "db/cassandra.html",
    "revision": "ec2aeece3e4df7590745f90c6ae8c259"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "cea950b4da0b668520d2be4004f2fce8"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "2864c7e4172140b01f09ec710417eb90"
  },
  {
    "url": "db/sql_nosql.html",
    "revision": "7b106530209cdeb71433409d2b2eda1b"
  },
  {
    "url": "index.html",
    "revision": "061d91546ecf4032c5383aab5c136843"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "d1ff20ee5029ffb321acb98b6f74634c"
  },
  {
    "url": "javascript/closure.html",
    "revision": "26fada777d42d8884b08a614bebfa628"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "39ac323098578f72fbf1f6f19dcf378d"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "abd626469449be710b0f273d62a7d9f7"
  },
  {
    "url": "javascript/react.html",
    "revision": "19c8a5451295ca94f144132739ab5c09"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "3a2168824b56d4d1392001ed8d039676"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "4b96c37fa67ff7415d0664cb9c68408b"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "9b43ce344558055f5b4f9dd2fc32a672"
  },
  {
    "url": "node/env.html",
    "revision": "c8a657df108954505dd464ecd3a0ae1b"
  },
  {
    "url": "node/index.html",
    "revision": "6f431b227a696959743e64c8def0611f"
  },
  {
    "url": "node/n.html",
    "revision": "635b54d0160a925ea97762cb6d713da0"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "cda80e8de43ae39999a4873498247416"
  },
  {
    "url": "node/npm.html",
    "revision": "21ad564004866f657cb741ebf70fc5fd"
  },
  {
    "url": "node/sequelize.html",
    "revision": "6105a794a360c67ebb4d63541775dac7"
  },
  {
    "url": "php/index.html",
    "revision": "1ae3dbf6ae4369cb451dfa6d8168bd48"
  },
  {
    "url": "php/laravel.html",
    "revision": "ea207ea7c5c5c57f16c758eea956526c"
  },
  {
    "url": "php/magic.html",
    "revision": "400ad5519575628d8e978fcc8188a9df"
  },
  {
    "url": "php/self_static.html",
    "revision": "a3440ca52b02ba74669011f42dce5a07"
  },
  {
    "url": "php/wordpress.html",
    "revision": "d12d5a25b0d8cc6ac5b15fc6183c004b"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "ede71ec09c7af47c97d35d43fffb564f"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "770570ed9d93c90e6bded589860a925c"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "ae71c856171f9eca3dfcd1de13894ad8"
  },
  {
    "url": "snippets/regex.html",
    "revision": "db4a4a49c85487aeff31bb549a1153ff"
  },
  {
    "url": "snippets/selenium_ide.html",
    "revision": "50f22d80ab71f87a4aec1a8f1f00053d"
  },
  {
    "url": "terms/architecture.html",
    "revision": "507b0849a50744cc6abaaf896dde8ef7"
  },
  {
    "url": "terms/ddd.html",
    "revision": "6999b2b5786648bbf58f525ffdec8740"
  },
  {
    "url": "terms/javascript.html",
    "revision": "e3b20fe7d0ccfdedada5ba4977e9d016"
  },
  {
    "url": "terms/oop.html",
    "revision": "b7aa893c15cc5727bc488d9560663ab9"
  },
  {
    "url": "terms/testing.html",
    "revision": "6036e3b4cb6305ee4e9fb30d03094f8c"
  },
  {
    "url": "tricks/chrome.html",
    "revision": "9a5ee1ddedc7e499bbc1909387204b16"
  },
  {
    "url": "tricks/compare.html",
    "revision": "e86d49d428c9c79031b74814dd4de325"
  },
  {
    "url": "tricks/git.html",
    "revision": "536af8ae1c2b257e2dd11b98ab7cf57f"
  },
  {
    "url": "tricks/linux.html",
    "revision": "ba425e9e603930083d0f644be0147f93"
  },
  {
    "url": "tricks/mac.html",
    "revision": "d054204758c90453f282467b1e2573a8"
  },
  {
    "url": "vue/communication.html",
    "revision": "1aac111c2ca36ec2086c3472e42d1510"
  },
  {
    "url": "vue/events.html",
    "revision": "5a564620cc1a600d73dcafdb476dea83"
  },
  {
    "url": "vue/references.html",
    "revision": "709b6d4de089e6035fcb8ea208152598"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "24496d7015bcdda10b4b5ec3e4304a59"
  },
  {
    "url": "vue/tricks.html",
    "revision": "a392694d177fe2cb451c53f54fab5ab9"
  },
  {
    "url": "vue/vue_react.html",
    "revision": "14d16871cd3b12ef84ff132d692f06d6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
