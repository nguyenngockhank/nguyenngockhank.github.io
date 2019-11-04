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
    "revision": "655a26588d96aa652f550b0e56ffc28d"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "2606e89efac7067c4ea4123cca340e58"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "e18f14135f0b6037bb2f74a532c6d71f"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "2b85c1efe156cd698d6cd836bab6defd"
  },
  {
    "url": "algorithm/rate_limit.html",
    "revision": "e1e0546f00fdba3a5a46243f08dcd687"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "2566dc5e344ec4411f713e1e9707fee2"
  },
  {
    "url": "algorithm/string.html",
    "revision": "43aa3f16203a686463108d5c65adefd8"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "575d5e2c85c19d2493c6973a2437fa61"
  },
  {
    "url": "architect/clean_architecture.html",
    "revision": "d0a7c7de25aa342dad555a193ebb8fda"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "a99cbd2f33264712eb94174bcf7ba543"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "a52b0f5aed4eabc56da584a6434e1075"
  },
  {
    "url": "architect/overview.html",
    "revision": "2637ca93b983d770b26dab3548157598"
  },
  {
    "url": "architect/refs.html",
    "revision": "f1e4c4ffdd1aeb82cfea7430fedbd85f"
  },
  {
    "url": "assets/css/0.styles.88febddd.css",
    "revision": "3ebf23d2d9635346bdf17f19b6690058"
  },
  {
    "url": "assets/img/100-explicit-architecture.5eb5f993.png",
    "revision": "5eb5f99384a8b66e6147ec04fda5bb4d"
  },
  {
    "url": "assets/img/cleanarchitecture.94e85674.jpg",
    "revision": "94e85674bfa3db95b7c344812a09bfa8"
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
    "url": "assets/js/10.6e6232e6.js",
    "revision": "807b888a976f18ff75b1414a1f24bc2a"
  },
  {
    "url": "assets/js/11.f6ba47af.js",
    "revision": "a4549ac20cf1ce121630388c4d44f46c"
  },
  {
    "url": "assets/js/12.7906167c.js",
    "revision": "762079d73191518c7fff4970a5c6c5e3"
  },
  {
    "url": "assets/js/13.f783358b.js",
    "revision": "49ea51267124ed80a7092aeb0c107ba9"
  },
  {
    "url": "assets/js/14.20c32397.js",
    "revision": "53ab2e63ff3da9a99426d80d5fdfb871"
  },
  {
    "url": "assets/js/15.6e291d30.js",
    "revision": "374a784275311383601c85c9ca259fe4"
  },
  {
    "url": "assets/js/16.b1d064d9.js",
    "revision": "6c5e2a6e121a4a93bece8b7e3037a93e"
  },
  {
    "url": "assets/js/17.2588ba73.js",
    "revision": "f90e85cf323ca73975f6e6891c5a81c4"
  },
  {
    "url": "assets/js/18.4a4fd35c.js",
    "revision": "540adf34a2aba34cf95367e796f3c0f5"
  },
  {
    "url": "assets/js/19.e4f088fb.js",
    "revision": "30907ea1b65566c0aa18d2371407dfc0"
  },
  {
    "url": "assets/js/2.4c7f1823.js",
    "revision": "16643a1804f2084ba118e91f84e7f48f"
  },
  {
    "url": "assets/js/20.6b261b0d.js",
    "revision": "15aa290e9ee8c382b86d74d1a2037cba"
  },
  {
    "url": "assets/js/21.a85d7e00.js",
    "revision": "e2666c78dbad844a7d8973806c891974"
  },
  {
    "url": "assets/js/22.c91dc496.js",
    "revision": "e1af1a96e1fe37efd26f52da2ee4a8e3"
  },
  {
    "url": "assets/js/23.08b27c39.js",
    "revision": "8cb530530773f7ea92d1c8e040c00301"
  },
  {
    "url": "assets/js/24.8d1d50e3.js",
    "revision": "ed2e76f6c0c56d3a546322d28dfd49eb"
  },
  {
    "url": "assets/js/25.ed6c50ad.js",
    "revision": "ac725be683870d8b9c55a613ed2ccc85"
  },
  {
    "url": "assets/js/26.36ad3a36.js",
    "revision": "d99fa52e03c6329920e713411d798581"
  },
  {
    "url": "assets/js/27.0fcaed90.js",
    "revision": "a85c567354facbf84affdf9147e0ee7b"
  },
  {
    "url": "assets/js/28.235d2deb.js",
    "revision": "9065442da8556c57529dffeb09cf9436"
  },
  {
    "url": "assets/js/29.6aabb1e9.js",
    "revision": "801557b06f6f91a438a091e4cbd0f4f9"
  },
  {
    "url": "assets/js/3.f39341d1.js",
    "revision": "f0202b75f96fc0abf439892402af7f09"
  },
  {
    "url": "assets/js/30.cfd9e12c.js",
    "revision": "90b23c3eac66cdf7340c13b3795b3218"
  },
  {
    "url": "assets/js/31.5612d474.js",
    "revision": "4ec259c5d348f1e106e45951bc72bc13"
  },
  {
    "url": "assets/js/32.0026b62a.js",
    "revision": "87669d667659b738d85b0f439ed58f84"
  },
  {
    "url": "assets/js/33.2e79b63e.js",
    "revision": "1dbc4b1ecf3ad531ac4067660a30f70c"
  },
  {
    "url": "assets/js/34.da811443.js",
    "revision": "21e2350703bab31d43f8069e4bb4c8d3"
  },
  {
    "url": "assets/js/35.52166947.js",
    "revision": "ee12b5d52d15caefcc496cfcb5ab00b5"
  },
  {
    "url": "assets/js/36.068c51d5.js",
    "revision": "3049e0037bc53cac42a28fe621efeba3"
  },
  {
    "url": "assets/js/37.ef5cb5a4.js",
    "revision": "b6ad42fd00530ec1879a52e3485bd828"
  },
  {
    "url": "assets/js/38.0657feaa.js",
    "revision": "829aac3c3e24f78ef687d4e8227ca62f"
  },
  {
    "url": "assets/js/39.80209a57.js",
    "revision": "f1e3530e9aeb6c144f7e13d4c2e1790b"
  },
  {
    "url": "assets/js/4.9648b2e2.js",
    "revision": "44f45095eb14a643e8fa4e0bb0d8894a"
  },
  {
    "url": "assets/js/40.b53cc3d1.js",
    "revision": "125e99cf8d3f86b70ebc10daaad066aa"
  },
  {
    "url": "assets/js/41.86f96583.js",
    "revision": "e9a0e64de38e2bc80bef69d3a6d35337"
  },
  {
    "url": "assets/js/42.bd716991.js",
    "revision": "1fe630cd39479ccf5be8134669d0da6d"
  },
  {
    "url": "assets/js/43.663474c5.js",
    "revision": "c3f6dee7c43daefcbff9e16075b145bc"
  },
  {
    "url": "assets/js/44.a269e541.js",
    "revision": "31f6e10cf658e182b44b2c1cde870851"
  },
  {
    "url": "assets/js/45.89538420.js",
    "revision": "4654d94d32feb824512e673f7c4fd0de"
  },
  {
    "url": "assets/js/46.a98a0f2d.js",
    "revision": "7b53f658829e2281f2dbf664fb5b8322"
  },
  {
    "url": "assets/js/47.4d1280bc.js",
    "revision": "029ae9486bd872c747dba95dbe0bf40b"
  },
  {
    "url": "assets/js/48.36c81895.js",
    "revision": "2f649e823e166b3be3a0110267915e31"
  },
  {
    "url": "assets/js/49.d7ad0a21.js",
    "revision": "76a22a9f319dd8b25e1c2f3fbcbc2f21"
  },
  {
    "url": "assets/js/5.6e7ea6ca.js",
    "revision": "8f5cc0e5642a967615dbf5932da07384"
  },
  {
    "url": "assets/js/50.07337f42.js",
    "revision": "e9ae42d7cd343ca7bbdd3025669b4e31"
  },
  {
    "url": "assets/js/51.3aa96afd.js",
    "revision": "22331dbacaa4fcf42c5af5e81786a814"
  },
  {
    "url": "assets/js/52.82a63ca2.js",
    "revision": "174d48dd68e197260d9e3566dbd3008e"
  },
  {
    "url": "assets/js/53.a41ad87d.js",
    "revision": "6214f30ab5f24b0fbc5e5c4743c6cc45"
  },
  {
    "url": "assets/js/54.140bd78d.js",
    "revision": "1d7b605f7749fec0c9489158e7294067"
  },
  {
    "url": "assets/js/55.e0663fae.js",
    "revision": "1034ba4a29c003cce1a7a68862b44d3c"
  },
  {
    "url": "assets/js/56.3dc7fb79.js",
    "revision": "7a858707b100ee0cba984da43738cd50"
  },
  {
    "url": "assets/js/57.edaba683.js",
    "revision": "344eb66ec39901d0d70fdbff2a565a28"
  },
  {
    "url": "assets/js/58.50603d78.js",
    "revision": "eb8295c062bab9679f3d1672d468722e"
  },
  {
    "url": "assets/js/59.6adfca6a.js",
    "revision": "a51101c29a401ffeb2b8d99c86706b0a"
  },
  {
    "url": "assets/js/6.1e582e27.js",
    "revision": "26d07e80fd62b794cd26e0d6fe7f0a5f"
  },
  {
    "url": "assets/js/60.feec09eb.js",
    "revision": "e3154dedaa08e35954efbf9ee245cd86"
  },
  {
    "url": "assets/js/61.2cf9946b.js",
    "revision": "96fcee5094f46a00213dc9bc2ca8b2dc"
  },
  {
    "url": "assets/js/62.91d714e3.js",
    "revision": "39d22b230c4c40ad69d82bdcf4c3a7ec"
  },
  {
    "url": "assets/js/63.7c8344e1.js",
    "revision": "a7b767de0f91c0a422454ff6f505a669"
  },
  {
    "url": "assets/js/64.939942dd.js",
    "revision": "bb1b08a4f671b7f09792d41e2f952aeb"
  },
  {
    "url": "assets/js/65.668fe918.js",
    "revision": "ff6b8faff354594e56543314fd80c497"
  },
  {
    "url": "assets/js/66.deee077d.js",
    "revision": "a1e7ad0dc44dc7d5db23195298b89472"
  },
  {
    "url": "assets/js/67.91ea3bc7.js",
    "revision": "d9959f540f60e3682898868c7f0048b8"
  },
  {
    "url": "assets/js/68.c45121cf.js",
    "revision": "dff304e4c4fac3be0f8fc5aa5f0559f8"
  },
  {
    "url": "assets/js/69.4d0e404b.js",
    "revision": "1729a10bad61edebae914952fa4d1595"
  },
  {
    "url": "assets/js/7.7c511a84.js",
    "revision": "cc3cb2db586dc00c62301debd2c94347"
  },
  {
    "url": "assets/js/70.4ca394e7.js",
    "revision": "2d455a5561bbe2bad31e05a10bdc3c87"
  },
  {
    "url": "assets/js/71.ce325e89.js",
    "revision": "d887de7277007939adceb460928e3594"
  },
  {
    "url": "assets/js/72.38f21dd7.js",
    "revision": "1d5983ca26a416627921fcd2a6bd8abc"
  },
  {
    "url": "assets/js/73.02c2df74.js",
    "revision": "98fef8696586663d683dd269a5fb1a1b"
  },
  {
    "url": "assets/js/74.c0acd3fb.js",
    "revision": "4e6238ef7e3c54f07da29b339ca8e045"
  },
  {
    "url": "assets/js/75.3a40c88f.js",
    "revision": "e04473a2bc67cee57ddbc80c9aedafa8"
  },
  {
    "url": "assets/js/76.fb9bd61c.js",
    "revision": "202e3bfd906bf83966450d1f5360241a"
  },
  {
    "url": "assets/js/77.186bc467.js",
    "revision": "f81a49a229a9484e13f7d12756d7cf75"
  },
  {
    "url": "assets/js/78.1821ffab.js",
    "revision": "367578be4fbc418048a71ba5a0d64d55"
  },
  {
    "url": "assets/js/79.63f42777.js",
    "revision": "ef898b2478ca54c3a9af6bf42dc663da"
  },
  {
    "url": "assets/js/8.ed017daf.js",
    "revision": "152bb5ebf94e02ea5c5577615a07800c"
  },
  {
    "url": "assets/js/80.bf739ef9.js",
    "revision": "12cb15e3455db71e69f677f1c29f9410"
  },
  {
    "url": "assets/js/81.cab4ab3a.js",
    "revision": "c478c62449e7985f4e1ddb3703bf2353"
  },
  {
    "url": "assets/js/82.cb2e287d.js",
    "revision": "3de13fd60ff10931099b03e122fd33f9"
  },
  {
    "url": "assets/js/83.bf62e610.js",
    "revision": "19fecb82bffd82b4462e4a52d98f6889"
  },
  {
    "url": "assets/js/84.f387bcf5.js",
    "revision": "67daf7df4f6dee7939e6c96620a6c990"
  },
  {
    "url": "assets/js/85.7e3513a5.js",
    "revision": "ecbc087bd4969cfb1b1bd88143544332"
  },
  {
    "url": "assets/js/86.45a0caa7.js",
    "revision": "efc695d32284d4401736c93a0e035728"
  },
  {
    "url": "assets/js/9.4a6aacd7.js",
    "revision": "72a865b7066b090ded8ee02762644f5d"
  },
  {
    "url": "assets/js/app.d7c28b0b.js",
    "revision": "d3d704b179876af092cd18623e49a9ed"
  },
  {
    "url": "common/architecture.html",
    "revision": "776bd1999980c009be576704086de013"
  },
  {
    "url": "common/authenication.html",
    "revision": "d9c3b23875a648b0e1940d79db17b7cb"
  },
  {
    "url": "common/crawl.html",
    "revision": "658846e2841a05d380728bbec78a8f34"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "9b1eaa8ca3e17bb44164780f4f130b30"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "646e3112d5b50ba754f56789016ca4ec"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "58ed9c6b299d042cc543f8bebbebdabd"
  },
  {
    "url": "common/index.html",
    "revision": "06796f453893a4215dc1c8c6ec523b2b"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "33ea14d8ca449c8e13bfa21736b4412d"
  },
  {
    "url": "common/realtime.html",
    "revision": "a464621fee567fb29f317e47fcfe0c3d"
  },
  {
    "url": "common/refactor.html",
    "revision": "913492c7848d6ae37f56f92fc889c171"
  },
  {
    "url": "common/seo.html",
    "revision": "62606098c361a7cfb2dfd9eca25ffde9"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "af5847657790df433e2e5ccdbdb9b756"
  },
  {
    "url": "css/tricks.html",
    "revision": "719d4387e8febaee7909e93eb2cfd703"
  },
  {
    "url": "db/architect.html",
    "revision": "af053c3c2bf40606fcdfc80b87f11c01"
  },
  {
    "url": "db/cassandra.html",
    "revision": "56a5e561dda30893d29b37f951b20b50"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "aaca33777da9a351dd3c3839269c93ec"
  },
  {
    "url": "db/optimize.html",
    "revision": "6a061867105618701d64658f40b7aa52"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "dd295c5f37c38014c3ade9943a466a37"
  },
  {
    "url": "db/sql_nosql.html",
    "revision": "9e0c5b6c3e15334927e583eac63b64cc"
  },
  {
    "url": "index.html",
    "revision": "7eab51a8c6c3c9b49f32d86aa6bc2ad9"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "1d88ea241e71f067f5ffdc9f236eb31c"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "6f56e5a7ea56f3ddcdf8defff8b60259"
  },
  {
    "url": "javascript/closure.html",
    "revision": "1b28df6542093152659055ab182181fb"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "708ab8d9e5f4ce45694abea3c35f3dde"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "ddb559fe16c3e6d8858240974e62e793"
  },
  {
    "url": "javascript/react.html",
    "revision": "07799a8ea22935aa06f239366f1e1f23"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "ad60f8020d97577dad5952c8d81ac949"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "f6ec0f925f11415099f5070b7fddaa2a"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "a5807ab9a3ebe97a11b7bd6e153f2c87"
  },
  {
    "url": "node/env.html",
    "revision": "b6e8bdd89f8ceae348c24d88c6659b13"
  },
  {
    "url": "node/index.html",
    "revision": "e3ac04bd0d462c2348196385184c1fb0"
  },
  {
    "url": "node/n.html",
    "revision": "093bbbcb789746c9c2e3485dbb713a7a"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "e95e31501a79dd70263df92a7429d419"
  },
  {
    "url": "node/npm.html",
    "revision": "dfb49e853ea39642a8588ceb369c23a7"
  },
  {
    "url": "node/sequelize.html",
    "revision": "f51b76dfe1548c27426b50716db541dd"
  },
  {
    "url": "php/laravel.html",
    "revision": "73ac765e06fabd874c49c4a88dcc1ad8"
  },
  {
    "url": "php/magic.html",
    "revision": "5402a35b461baf4225fd23bc46dff6bd"
  },
  {
    "url": "php/notes.html",
    "revision": "376d69e6f836ea99aa8b42d93c2f689a"
  },
  {
    "url": "php/oop.html",
    "revision": "db2b4b7a7d61b5cdc77034dae7168c44"
  },
  {
    "url": "php/php7.html",
    "revision": "ef0fec964aa9564def44ff533cdc678b"
  },
  {
    "url": "php/reflection.html",
    "revision": "72c67d72639a6e694c42416bbb0747fb"
  },
  {
    "url": "php/tricks.html",
    "revision": "357bf727721c2665f8d54d2349ed8a5f"
  },
  {
    "url": "php/wordpress.html",
    "revision": "5754a45192be9ca825b2d9771d6b79a4"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "5fc8eca01ad9c4f9e78e6bc0f53412c7"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "fc8be73b7733c8a688d0e9d405e2a5dc"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "956dda8d6c89c0186c18dfce7ac36a8d"
  },
  {
    "url": "snippets/regex.html",
    "revision": "ce05569900237019067ad889748480a5"
  },
  {
    "url": "terms/architecture.html",
    "revision": "189637bf9706987cb3c691b2e8a9ea77"
  },
  {
    "url": "terms/ddd.html",
    "revision": "9b4c740e6a47de9c260afa1a1581dfec"
  },
  {
    "url": "terms/javascript.html",
    "revision": "9b8e1f141bd798e581b72d3a60f5f431"
  },
  {
    "url": "terms/oop.html",
    "revision": "e37c1ae87b5b85b3850c173f18d9e909"
  },
  {
    "url": "terms/testing.html",
    "revision": "083dc9cfff32d535511ddbc514ff7b0a"
  },
  {
    "url": "tools/chrome.html",
    "revision": "1c95067ff43dc0d7f5b2a15bdc89fe1f"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "698ee62032e59a86476caab680cb9837"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "8545acad9c8a7b151bb08dea14b097b0"
  },
  {
    "url": "tools/redis.html",
    "revision": "40944f82b427c91868331e35701e6b77"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "05cc50963134b4753a6d475817a161f0"
  },
  {
    "url": "tricks/compare.html",
    "revision": "8c20e2c4484e1e833a51570853cc4ef7"
  },
  {
    "url": "tricks/git.html",
    "revision": "c1189e016a2f52374e30705cc6ae8fa7"
  },
  {
    "url": "tricks/linux.html",
    "revision": "60ff2eb37a737c3d5c2ac4f35414ec05"
  },
  {
    "url": "tricks/mac.html",
    "revision": "6c6f337307bc6a5bdfa3e5e930c6490b"
  },
  {
    "url": "tricks/misc.html",
    "revision": "5e44dbf99c68644b679850269f151d1e"
  },
  {
    "url": "vue/communication.html",
    "revision": "8a60a47137e6978fbf21b5b6f4d1c62a"
  },
  {
    "url": "vue/events.html",
    "revision": "784d9ad59ec594dc596052957ebfc7e2"
  },
  {
    "url": "vue/references.html",
    "revision": "68a3353deb3fe9b17724877b22ae20e9"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "8f0d6a43584ccceadfe7dfb67367cc54"
  },
  {
    "url": "vue/tricks.html",
    "revision": "8365f40e170a3edf2cb7cb5f6d6e9e60"
  },
  {
    "url": "vue/vue_react.html",
    "revision": "31f9abfb6a19f59c67ee84ca221dcfb6"
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
