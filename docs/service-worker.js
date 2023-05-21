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
    "revision": "6530e10068e65dadeb4a466c1305b967"
  },
  {
    "url": "ai/AI-note.html",
    "revision": "061d096716897ef9fb6d4b6f45f0519c"
  },
  {
    "url": "algorithm/authority.html",
    "revision": "107717fb3d697a256e79fd3d8f341f25"
  },
  {
    "url": "algorithm/bakery.html",
    "revision": "4096ffb5e0d69b89b57c72998ec2fc8c"
  },
  {
    "url": "algorithm/breath-first.html",
    "revision": "5723caae90c5a24b0953423e96a55763"
  },
  {
    "url": "algorithm/data_structure.html",
    "revision": "e6ce09319fca6581c3fe862a573664a9"
  },
  {
    "url": "algorithm/dijkstra.html",
    "revision": "7aa394a2e716c0f75bacde56ac05a32d"
  },
  {
    "url": "algorithm/loadbalancer.html",
    "revision": "aeff3f178af09cb80792087363a9fa0f"
  },
  {
    "url": "algorithm/no_if_loop.html",
    "revision": "7da1f23b7375d2b46afdee38448e803d"
  },
  {
    "url": "algorithm/refs.html",
    "revision": "a69c91071305162d50f60dd0985d41d4"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "55b9593c54fb197389ae4bea4d9b1741"
  },
  {
    "url": "algorithm/string.html",
    "revision": "b0b31c7cd78f3fa64b794489679f484a"
  },
  {
    "url": "algorithm/sum100.html",
    "revision": "10ca849b08f86469e22fda8124b129b2"
  },
  {
    "url": "algorithm/terms.html",
    "revision": "5c5a535814c1f47732117a1b789dc5a0"
  },
  {
    "url": "algorithm/upload-large-file.html",
    "revision": "3bc170c2a38724a152589b24cfd1bc3b"
  },
  {
    "url": "api-guidelines/coding-guidelines/api-development-workflow.html",
    "revision": "84bc95aa9f603effab73e0075413c764"
  },
  {
    "url": "api-guidelines/coding-guidelines/decorators-for-endpoints.html",
    "revision": "34e9a25180f1137af4392fe69e2a5704"
  },
  {
    "url": "api-guidelines/coding-guidelines/review-code-api-doc.html",
    "revision": "aacc995e83320bdb164422c9b2532bbe"
  },
  {
    "url": "api-guidelines/conventions/error-responses.html",
    "revision": "d8d48ce3e865db50485325c565a1b320"
  },
  {
    "url": "api-guidelines/conventions/http-status-codes.html",
    "revision": "d55f6bf06eeb6b23d2b073a244a1350e"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/formats.html",
    "revision": "18656a2f410f2e4e624f897b97bd5504"
  },
  {
    "url": "api-guidelines/conventions/json-fields-naming-conventions/json-structure.html",
    "revision": "23ef86c404b399d6d00b17799e4df09f"
  },
  {
    "url": "api-guidelines/conventions/security.html",
    "revision": "b129e109204ef1521bb1c9788cfd95e9"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/index.html",
    "revision": "2b3f2b68c9c506df04e9f9b639dd598d"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/others.html",
    "revision": "6272a71abf0ece359c21aa7006350e4b"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/post-vs-put.html",
    "revision": "ad81faee7196b8a5d1639fddb60e2e97"
  },
  {
    "url": "api-guidelines/conventions/verb-and-uri-rest/request-methods.html",
    "revision": "d85243e1de7bb8caeb8785a1b4e97afa"
  },
  {
    "url": "api-guidelines/overview.html",
    "revision": "4561959110c7b356803dbaa459e942b4"
  },
  {
    "url": "api-guidelines/principles/design-api-first-before-code.html",
    "revision": "02158594b2807db1bac76e0832af2405"
  },
  {
    "url": "api-guidelines/principles/minimal-api-surface.html",
    "revision": "03c7feca567edd5c3e14fd425c985be6"
  },
  {
    "url": "api-guidelines/principles/one-type-of-data-per-api.html",
    "revision": "c6a7fa7e0906c17b33c05fa06181edcb"
  },
  {
    "url": "api-guidelines/principles/robustness-principle.html",
    "revision": "6efaa622b9e5e733238c3f844fb61325"
  },
  {
    "url": "api-guidelines/principles/rules-for-public-api.html",
    "revision": "c55f8cc0b288664358c298a817b74c17"
  },
  {
    "url": "api/index.html",
    "revision": "585d15cdcda5f2a308a669f4271034f3"
  },
  {
    "url": "api/rest-compare.html",
    "revision": "35b4c818c9688e3a0c361bd169e77ed9"
  },
  {
    "url": "architect/audit.html",
    "revision": "3013220c57b89d0d5af36116cfb0b57d"
  },
  {
    "url": "architect/authenication.html",
    "revision": "01a00911495507d3eface2c2763249e5"
  },
  {
    "url": "architect/authorization.html",
    "revision": "9d409c115e5dd51cb023261fa79e6b94"
  },
  {
    "url": "architect/circuit_breaker.html",
    "revision": "d11f09fa718061cc410ba77268b39443"
  },
  {
    "url": "architect/clean_A.html",
    "revision": "d328386c55238a9f4c8f6ec10ab10f8b"
  },
  {
    "url": "architect/cqrs.html",
    "revision": "a701cb1648e8065187bfb546dc8af617"
  },
  {
    "url": "architect/distributed_transaction.html",
    "revision": "2d53b23f700780232a4ad2671748a0c6"
  },
  {
    "url": "architect/ebi.html",
    "revision": "a734697e034a4404791d2a459fbd491f"
  },
  {
    "url": "architect/event_driven_A.html",
    "revision": "1180cd3f31b4d85c510fab31742cf338"
  },
  {
    "url": "architect/fault-tolerance.html",
    "revision": "be61491803431140810533b805994f63"
  },
  {
    "url": "architect/full_stack_software_design.html",
    "revision": "93aa003f3901ae604fb81cac1a4ee943"
  },
  {
    "url": "architect/hexagonal_A.html",
    "revision": "d43ace76e114ac147e1a257cc56d0c1f"
  },
  {
    "url": "architect/index.html",
    "revision": "b59cd5da63d951c93af2a0151c578c9b"
  },
  {
    "url": "architect/jwt-handling.html",
    "revision": "c31b687f1f7ecd38878594d06ea3bd6d"
  },
  {
    "url": "architect/messaging.html",
    "revision": "375a2d201b4787f948c6b833a84b6ca4"
  },
  {
    "url": "architect/microservices.html",
    "revision": "9337903cd82fe4c7891a80b0d5c860ee"
  },
  {
    "url": "architect/mutex.html",
    "revision": "6de4944f743dab8dc8866e61f5072840"
  },
  {
    "url": "architect/notes.html",
    "revision": "54affc5b7bb0ccf05937f4d9e2cc23ee"
  },
  {
    "url": "architect/onion_A.html",
    "revision": "09a1241b294907e40dcfd296402da423"
  },
  {
    "url": "architect/OrchestrationVsChoreography.html",
    "revision": "ec9c3ab0cb94a226a98407806866cb68"
  },
  {
    "url": "architect/philosophy-sw-design.html",
    "revision": "4dc1290e5293f61ba2e4b783f78775bd"
  },
  {
    "url": "architect/refs.html",
    "revision": "ad95b51839361804fc828e5c9dadbcd8"
  },
  {
    "url": "architect/soa.html",
    "revision": "b49f3add47364e91d77609a3660613c4"
  },
  {
    "url": "architect/spa.html",
    "revision": "8782409134e4183548e36808d7422167"
  },
  {
    "url": "architect/sync-solution.html",
    "revision": "00eb739a985cd87dde9062670086ea9a"
  },
  {
    "url": "architect/system-design-cheatshet.html",
    "revision": "665b6543b7a004749ec713ee601540fb"
  },
  {
    "url": "architect/terms.html",
    "revision": "a66b68f449674938ff50e77bc78e0330"
  },
  {
    "url": "architect/webservice.html",
    "revision": "0eb373b3ebbc515e0f4c141ef3506342"
  },
  {
    "url": "assets/css/0.styles.13bbcd8a.css",
    "revision": "9e1d6d86be3b39ed76e2e9e26209219a"
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
    "url": "assets/img/2PC.85517da0.png",
    "revision": "85517da0f86c5aa7c50ab18ed60962d2"
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
    "url": "assets/img/align-content.58d3a6bf.svg",
    "revision": "58d3a6bfe148e18ed9f0eaacebd2cca7"
  },
  {
    "url": "assets/img/align-items.b9a4d0ca.svg",
    "revision": "b9a4d0ca1c73cf53a69e43fc38a07692"
  },
  {
    "url": "assets/img/align-self.f6bd826b.svg",
    "revision": "f6bd826ba3a8499f23a419b1f2acf431"
  },
  {
    "url": "assets/img/anatomy-ip-packet.2a921a9d.svg",
    "revision": "2a921a9dcf1ca73882cd3f11dcabad2f"
  },
  {
    "url": "assets/img/api-architecture-style-comparison.adeb7460.jpeg",
    "revision": "adeb746026c6195847b9f3fafefb1426"
  },
  {
    "url": "assets/img/api-architectures.6c2ea7e0.png",
    "revision": "6c2ea7e0a1ae9af4da66511cee8b1513"
  },
  {
    "url": "assets/img/apns.985fdc67.jpeg",
    "revision": "985fdc675836138a379b472d6bc2e7f8"
  },
  {
    "url": "assets/img/arch-characterics.84687d79.png",
    "revision": "84687d79e464f3bf4de2f06db82cf99f"
  },
  {
    "url": "assets/img/archiecture.3944e8fb.png",
    "revision": "3944e8fb0c086231c0f19b856d3403db"
  },
  {
    "url": "assets/img/architecture-stack.8e2d1320.png",
    "revision": "8e2d132089817ea5907912047e3606dd"
  },
  {
    "url": "assets/img/arpoperation.080126fd.png",
    "revision": "080126fd352de4b0cb08d146715d2aea"
  },
  {
    "url": "assets/img/attached-resources.4543871f.png",
    "revision": "4543871f00bd6354b099f23bdddb3ddd"
  },
  {
    "url": "assets/img/aws-arch.0ea61bb8.png",
    "revision": "0ea61bb815e36c6420226f8fd99e8a4c"
  },
  {
    "url": "assets/img/cache-aside.faf1b6f8.png",
    "revision": "faf1b6f8f4dd053ce49aa012279bb71f"
  },
  {
    "url": "assets/img/cache-mis-attack.4c3d6df9.jpg",
    "revision": "4c3d6df990f8d743c4d2ff97aa75aa3f"
  },
  {
    "url": "assets/img/cache-read-through.1a8af934.png",
    "revision": "1a8af9348b99b536b546038182ec74d9"
  },
  {
    "url": "assets/img/cache-write-around.6ff1e3a9.png",
    "revision": "6ff1e3a98c6573aaf25b62c175231304"
  },
  {
    "url": "assets/img/cache-write-back.4abe7ae4.png",
    "revision": "4abe7ae44708e7aa4cd1212841e46533"
  },
  {
    "url": "assets/img/cache-write-through.bca249c5.png",
    "revision": "bca249c5ac88f067ffb7c85d750841da"
  },
  {
    "url": "assets/img/cdn-works.eb58d3aa.png",
    "revision": "eb58d3aae48533fe16b9463aff47b95f"
  },
  {
    "url": "assets/img/cdn.0fd4c39d.jpeg",
    "revision": "0fd4c39df59fa133e6db04a4a957027f"
  },
  {
    "url": "assets/img/choose-db.07a9b05d.jpeg",
    "revision": "07a9b05d81806a2de77ecfbe8bbada23"
  },
  {
    "url": "assets/img/Choreography.fa1ffff4.jpeg",
    "revision": "fa1ffff41e481efd39e5b766f8ce535c"
  },
  {
    "url": "assets/img/clean-microservice.9b64e8a4.png",
    "revision": "9b64e8a4c85676796f32dfc6919fe2ab"
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
    "url": "assets/img/codefirst-vs-apifirst.f7a6a611.png",
    "revision": "f7a6a61151ce9195476aca4d4769c58c"
  },
  {
    "url": "assets/img/commandbusmatryoshka.ad1a0ff2.jpg",
    "revision": "ad1a0ff2257565c17b7280524dea0e48"
  },
  {
    "url": "assets/img/couch-consistency.00e26a03.png",
    "revision": "00e26a03eab0150fa2f124b6f8bfe1dc"
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
    "url": "assets/img/db-cap.dc9d277f.png",
    "revision": "dc9d277f809dc8e2dfda038ec06c55f9"
  },
  {
    "url": "assets/img/db-vs-bc.07e01a35.jpg",
    "revision": "07e01a35c2f2488e27d7516b9da69838"
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
    "url": "assets/img/digraph-1.3864e6bb.png",
    "revision": "3864e6bb38f90096b9dc8635e567784a"
  },
  {
    "url": "assets/img/dnsresolution.bd8ee40a.png",
    "revision": "bd8ee40ad4d8d3498342664d961b9257"
  },
  {
    "url": "assets/img/docker-image-container.8cc9fded.png",
    "revision": "8cc9fdededede928c3c8b8c30824beb3"
  },
  {
    "url": "assets/img/dp-cheatsheet1.b996a7ec.png",
    "revision": "b996a7ec3bf6c314cf4ac52d33d82e47"
  },
  {
    "url": "assets/img/dp-cheatsheet2.61ca0769.png",
    "revision": "61ca076958fc90c19f8293e7643b079e"
  },
  {
    "url": "assets/img/elbow.854914f2.png",
    "revision": "854914f24e19b27ac064c7ce04ac47f9"
  },
  {
    "url": "assets/img/encapsulation-in-networking-process.003c596d.jpg",
    "revision": "003c596d118f418206fe440fb071ebd0"
  },
  {
    "url": "assets/img/esb-2.20a0d827.gif",
    "revision": "20a0d827ede99e7f026cc8b716164ae7"
  },
  {
    "url": "assets/img/ethernet-frame-format.3cbe85fc.png",
    "revision": "3cbe85fccd2a1a2536b7595bf45c2bdf"
  },
  {
    "url": "assets/img/ethernet-names.c49da6d6.jpeg",
    "revision": "c49da6d66372194cb263487f2791330e"
  },
  {
    "url": "assets/img/ethernet-vs-osi.d4925b58.png",
    "revision": "d4925b58deb678b670ff516b964f7f1b"
  },
  {
    "url": "assets/img/etl-process-diagram.9198b2ca.png",
    "revision": "9198b2cafd9f1ef6104f7e32f74c2e47"
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
    "url": "assets/img/f1.4a99f0a7.png",
    "revision": "4a99f0a708a75007bbe5fd3845528758"
  },
  {
    "url": "assets/img/f1.60e24670.jpg",
    "revision": "60e246702961164c5df55307dfebe499"
  },
  {
    "url": "assets/img/f1.f606c747.png",
    "revision": "f606c74729fb9d03764a5b597fc9b4d7"
  },
  {
    "url": "assets/img/f10.0d741b1a.png",
    "revision": "0d741b1ab4969b7b9df7ac609f23aeb1"
  },
  {
    "url": "assets/img/f10.273008e0.png",
    "revision": "273008e03412fa3d63f45d35f6a64876"
  },
  {
    "url": "assets/img/f10.79c370cd.png",
    "revision": "79c370cd066fa1d9c3aedfb280968f57"
  },
  {
    "url": "assets/img/f10.79fdb237.png",
    "revision": "79fdb237728307e3ea7975da115f56a0"
  },
  {
    "url": "assets/img/f10.7fd4539f.png",
    "revision": "7fd4539fb45e56e6a563a07b86ee0cc2"
  },
  {
    "url": "assets/img/f10.98438100.png",
    "revision": "984381002be590242493ec1fdb74ba87"
  },
  {
    "url": "assets/img/f10.9a89acbd.png",
    "revision": "9a89acbd3e0619fd3bea18f45891ceec"
  },
  {
    "url": "assets/img/f10.f2ac2849.png",
    "revision": "f2ac284961b746aafe8060cbbaa7e40e"
  },
  {
    "url": "assets/img/f11-1.837af6bd.png",
    "revision": "837af6bdf120c0635451a7e575467dee"
  },
  {
    "url": "assets/img/f11-2.7001fc2b.png",
    "revision": "7001fc2b54910f55edd67056de47c74d"
  },
  {
    "url": "assets/img/f11.22da8bac.png",
    "revision": "22da8bac9d5b3360cd8cdd6eb19761fe"
  },
  {
    "url": "assets/img/f11.22ec38e3.png",
    "revision": "22ec38e35538445ad061228cbac19a34"
  },
  {
    "url": "assets/img/f11.63ac50d1.png",
    "revision": "63ac50d1e08831dc8c3becff5b32f6a9"
  },
  {
    "url": "assets/img/f11.77b9d638.png",
    "revision": "77b9d638fff1a6e12f80c017effd9d8b"
  },
  {
    "url": "assets/img/f11.ada82b3c.png",
    "revision": "ada82b3cedf4b6621873fdc82f8e0855"
  },
  {
    "url": "assets/img/f11.bd648ccd.png",
    "revision": "bd648ccd1d8d5bbc56616b98afeca674"
  },
  {
    "url": "assets/img/f11.e9e07cfe.png",
    "revision": "e9e07cfebf64f190933f6e3235b242d8"
  },
  {
    "url": "assets/img/f12.3b247731.png",
    "revision": "3b2477317b24999b7689b333d7db19fd"
  },
  {
    "url": "assets/img/f12.808ed4a3.jpg",
    "revision": "808ed4a3cb4a22e26b5067bad99421be"
  },
  {
    "url": "assets/img/f12.9a453bd8.png",
    "revision": "9a453bd8a6e924efb25537871e6785a8"
  },
  {
    "url": "assets/img/f12.afd4580a.png",
    "revision": "afd4580ab1fc2ecfae654e8f877f8da3"
  },
  {
    "url": "assets/img/f12.cb6ef4bd.png",
    "revision": "cb6ef4bd74bdc0edfe193be50d07cbad"
  },
  {
    "url": "assets/img/f12.e79233b4.png",
    "revision": "e79233b49d5fc4b6ddfc6309df4d8e50"
  },
  {
    "url": "assets/img/f12.e8ffce8f.png",
    "revision": "e8ffce8f5296dc6a1c867591dd39bc09"
  },
  {
    "url": "assets/img/f12.ee6b3b38.png",
    "revision": "ee6b3b38d79b5904d5faf7b95a298fe6"
  },
  {
    "url": "assets/img/f13.383808c3.png",
    "revision": "383808c32c1139b84d11994e146fc751"
  },
  {
    "url": "assets/img/f13.95b11ea5.jpg",
    "revision": "95b11ea542b7a24397e0f272ba3d1ed9"
  },
  {
    "url": "assets/img/f13.a6255bfe.png",
    "revision": "a6255bfebd3f9efa466157f2bdd8c8d0"
  },
  {
    "url": "assets/img/f13.aa336f1f.png",
    "revision": "aa336f1fc63ac1a89cea90012d297762"
  },
  {
    "url": "assets/img/f13.ab6b37ee.png",
    "revision": "ab6b37ee553b4ec6f2162145327e2d1c"
  },
  {
    "url": "assets/img/f13.cba60d4e.png",
    "revision": "cba60d4ef9dfc10e6015c66a87e84e94"
  },
  {
    "url": "assets/img/f13.d75b675d.png",
    "revision": "d75b675d876fb39eb7ce21b82cb3283b"
  },
  {
    "url": "assets/img/f14.04ab2cc4.jpg",
    "revision": "04ab2cc42719a479f974afc12898a5a4"
  },
  {
    "url": "assets/img/f14.2a4f761d.png",
    "revision": "2a4f761dbc013d06fdfe5cd907c8b1c6"
  },
  {
    "url": "assets/img/f14.83202626.png",
    "revision": "83202626fadb0e11fd0bf3eef0418659"
  },
  {
    "url": "assets/img/f14.c0ab5fde.png",
    "revision": "c0ab5fde874c25a8f9c47372db0b6022"
  },
  {
    "url": "assets/img/f14.df99e837.png",
    "revision": "df99e837ffc3b9441eb0e95588f12cb6"
  },
  {
    "url": "assets/img/f14.dfe5de19.png",
    "revision": "dfe5de19ce66b36736c9fc4ac8070cfa"
  },
  {
    "url": "assets/img/f14.ffcbe3e1.png",
    "revision": "ffcbe3e1104b8f14eb7534ef425d31c3"
  },
  {
    "url": "assets/img/f15.2184d595.png",
    "revision": "2184d59557237ba504de4158ce414073"
  },
  {
    "url": "assets/img/f15.645738cd.png",
    "revision": "645738cd4525fb27a2af7d5bc7b768d7"
  },
  {
    "url": "assets/img/f15.88bbb753.png",
    "revision": "88bbb75337b7232eccad36c3df7c8030"
  },
  {
    "url": "assets/img/f15.de436b26.png",
    "revision": "de436b260676145404f8fae1bc4f987a"
  },
  {
    "url": "assets/img/f15.e7df994d.png",
    "revision": "e7df994d1911a8fc602f4c8988f29d89"
  },
  {
    "url": "assets/img/f16.24c4cef8.png",
    "revision": "24c4cef89d703a3d6f3fa6a7388d6f47"
  },
  {
    "url": "assets/img/f17.bc1d0b6d.png",
    "revision": "bc1d0b6dccd41596596a022eb097205f"
  },
  {
    "url": "assets/img/f18.1bc7ab53.svg",
    "revision": "1bc7ab53af2b08730cc7ad1db2a6b02a"
  },
  {
    "url": "assets/img/f19.a9ef0aa4.png",
    "revision": "a9ef0aa4faa51e9d5153860c50af7b1e"
  },
  {
    "url": "assets/img/f2.6bf5f41b.png",
    "revision": "6bf5f41b5d2c8cb0eddcbb99c52349ec"
  },
  {
    "url": "assets/img/f2.9cae2f95.png",
    "revision": "9cae2f958529f1abc930cd8026739c16"
  },
  {
    "url": "assets/img/f2.b40de9a0.png",
    "revision": "b40de9a0b3b5da5e66f522f9b9765fdf"
  },
  {
    "url": "assets/img/f2.c7d452d4.png",
    "revision": "c7d452d42d19943ffaeb76a5acbe445e"
  },
  {
    "url": "assets/img/f2.c8275451.png",
    "revision": "c8275451e545299ab9d6d6c2b344798c"
  },
  {
    "url": "assets/img/f2.cc1e5a99.jpg",
    "revision": "cc1e5a99c1aadd3e4767894b9dd062e4"
  },
  {
    "url": "assets/img/f3.3bc52b4d.jpg",
    "revision": "3bc52b4d80e7e5478fd7ec2c528bd4e7"
  },
  {
    "url": "assets/img/f3.8c43f4dc.png",
    "revision": "8c43f4dc3ee66828b79e588a7c329fff"
  },
  {
    "url": "assets/img/f3.978b4dc7.png",
    "revision": "978b4dc76a846367aa5bd4b1fd0b72a9"
  },
  {
    "url": "assets/img/f3.9da94e01.svg",
    "revision": "9da94e0196ce774c2537b0f783086a13"
  },
  {
    "url": "assets/img/f3.9e64dc1c.png",
    "revision": "9e64dc1cceaa1949e8d69b23b27e18f1"
  },
  {
    "url": "assets/img/f3.c10b7980.png",
    "revision": "c10b79805f9246ec09910abf03d7c738"
  },
  {
    "url": "assets/img/f3.d18ed8eb.png",
    "revision": "d18ed8eb1a5e47ebe8fe922f3e0cd073"
  },
  {
    "url": "assets/img/f4.062f9b82.svg",
    "revision": "062f9b82bd7e24b765caba776c66e63c"
  },
  {
    "url": "assets/img/f4.52b619f6.png",
    "revision": "52b619f6bb28f0b0a99f520764ea508a"
  },
  {
    "url": "assets/img/f4.623cec02.png",
    "revision": "623cec02b44efd61dce3ba24493c80e4"
  },
  {
    "url": "assets/img/f4.8793cff4.jpg",
    "revision": "8793cff47a0c66b575ea35052e11934f"
  },
  {
    "url": "assets/img/f4.a94f359e.png",
    "revision": "a94f359eb1ea7359d402296b59095e62"
  },
  {
    "url": "assets/img/f4.a9fe73df.png",
    "revision": "a9fe73dfd1f52e5b32bb336c94710a36"
  },
  {
    "url": "assets/img/f5.0c69bdf3.png",
    "revision": "0c69bdf3a55085b7d2d7bd0fb583514d"
  },
  {
    "url": "assets/img/f5.151cfc46.svg",
    "revision": "151cfc461c6ac51d7b1b291614358ee6"
  },
  {
    "url": "assets/img/f5.16e9fe44.jpg",
    "revision": "16e9fe44316de8727444edfb1f82f1af"
  },
  {
    "url": "assets/img/f5.3d9146a0.png",
    "revision": "3d9146a099db7e60c3b04001fd6e187a"
  },
  {
    "url": "assets/img/f5.7230a546.png",
    "revision": "7230a54671f8eba0a1cc6c7610224e5e"
  },
  {
    "url": "assets/img/f5.9c17b1f2.png",
    "revision": "9c17b1f29a52f2f47df299cf07bbca93"
  },
  {
    "url": "assets/img/f5.bfe174dc.png",
    "revision": "bfe174dc32fb2d66685b6ce7d5ec6147"
  },
  {
    "url": "assets/img/f5.f99d0833.png",
    "revision": "f99d0833f115242156feb78a4d34899e"
  },
  {
    "url": "assets/img/f5.fbb100d8.png",
    "revision": "fbb100d830cd7c805d96fa54161b7074"
  },
  {
    "url": "assets/img/f5.fdb7c6e5.png",
    "revision": "fdb7c6e5216b2f5d551e9548af86a268"
  },
  {
    "url": "assets/img/f6.207454e2.png",
    "revision": "207454e2f0eabee15c87143a6fce53bd"
  },
  {
    "url": "assets/img/f6.21fddf8e.png",
    "revision": "21fddf8e0ebf3af703e45761276c19e8"
  },
  {
    "url": "assets/img/f6.4a12b927.png",
    "revision": "4a12b927da2711f3f8ace08450f16610"
  },
  {
    "url": "assets/img/f6.5123bd50.png",
    "revision": "5123bd507197700e49753c74c890e199"
  },
  {
    "url": "assets/img/f6.72671fc1.jpg",
    "revision": "72671fc10b3ec9a8280a934c4ef3e5a5"
  },
  {
    "url": "assets/img/f6.a337f2af.png",
    "revision": "a337f2af399686f4485cb4a7e4e3fe6f"
  },
  {
    "url": "assets/img/f6.efa40459.png",
    "revision": "efa4045979ceb96966afd5d140930f7a"
  },
  {
    "url": "assets/img/f6.f6ac0a42.png",
    "revision": "f6ac0a42861112b0df2fe85797006dd5"
  },
  {
    "url": "assets/img/f7.21ef346e.png",
    "revision": "21ef346e13a82bfa8f5aa48aff522c07"
  },
  {
    "url": "assets/img/f7.3b87d38b.png",
    "revision": "3b87d38be8ffc9d7a7c6fbac2a7f6118"
  },
  {
    "url": "assets/img/f7.4d2994b1.png",
    "revision": "4d2994b1c6c138f7a3afc8bab7341c5a"
  },
  {
    "url": "assets/img/f7.4e4e6a9c.png",
    "revision": "4e4e6a9c381656376c6c72aede043a6c"
  },
  {
    "url": "assets/img/f7.59ac3b5d.png",
    "revision": "59ac3b5d13d69a9d0f9db4d0dcf30f95"
  },
  {
    "url": "assets/img/f7.82a2aaca.png",
    "revision": "82a2aaca0869f566887a2e1c4b29746b"
  },
  {
    "url": "assets/img/f7.859c7897.png",
    "revision": "859c7897d7f18c68c652401f7587a53d"
  },
  {
    "url": "assets/img/f7.d9ed1dc3.png",
    "revision": "d9ed1dc3f0a2cae01315b1c6b5464621"
  },
  {
    "url": "assets/img/f7.dcb449da.png",
    "revision": "dcb449da463e6e8afce3cfc0f8063521"
  },
  {
    "url": "assets/img/f7.ebee2491.png",
    "revision": "ebee24914e3fb34ccf8d894b2b80d466"
  },
  {
    "url": "assets/img/f7.ee1e0a82.png",
    "revision": "ee1e0a82faf82dcf44fa946a6923f57a"
  },
  {
    "url": "assets/img/f8.1376bd84.png",
    "revision": "1376bd8454d37ae7cfb6f335c59f0e84"
  },
  {
    "url": "assets/img/f8.3a354cd1.png",
    "revision": "3a354cd164558f2945489bff67394a68"
  },
  {
    "url": "assets/img/f8.53e89476.png",
    "revision": "53e89476d7b8b7e07546ed2cffad08be"
  },
  {
    "url": "assets/img/f8.553842e6.png",
    "revision": "553842e6a275f6b96466a395d05e71c8"
  },
  {
    "url": "assets/img/f8.5b21d202.png",
    "revision": "5b21d20279d6019437ea86b795905e35"
  },
  {
    "url": "assets/img/f8.7353e3c9.png",
    "revision": "7353e3c95e264d3f5b4c62751e6eaca7"
  },
  {
    "url": "assets/img/f8.7ab49e65.png",
    "revision": "7ab49e65126795f7eaa7c77db952a15d"
  },
  {
    "url": "assets/img/f8.847598a5.png",
    "revision": "847598a59a7663e937e309a4899e61ca"
  },
  {
    "url": "assets/img/f8.a3f61daa.png",
    "revision": "a3f61daaf59e03887c29c893742aefa6"
  },
  {
    "url": "assets/img/f8.fce0f651.png",
    "revision": "fce0f65134739a16e6746d5af9955932"
  },
  {
    "url": "assets/img/f9.46f9f257.png",
    "revision": "46f9f257736d3f25218f3aebc6f4bd99"
  },
  {
    "url": "assets/img/f9.517c90b4.png",
    "revision": "517c90b42b2ad89d00dbbf7b18bd64e7"
  },
  {
    "url": "assets/img/f9.5446fa04.png",
    "revision": "5446fa045de679c3060c82f0c3dccea9"
  },
  {
    "url": "assets/img/f9.5be780d8.png",
    "revision": "5be780d8c4bee6ce1be3c925f2365371"
  },
  {
    "url": "assets/img/f9.7c524582.png",
    "revision": "7c524582b2587d1d9cb819b351ef1952"
  },
  {
    "url": "assets/img/f9.9164bc8b.png",
    "revision": "9164bc8b768b04824ada0a4b4592cce3"
  },
  {
    "url": "assets/img/f9.ae8137f0.png",
    "revision": "ae8137f08e575416ba109cab3e10b53a"
  },
  {
    "url": "assets/img/f9.b4782001.png",
    "revision": "b4782001bd241d0d8aada3ad0f35e76d"
  },
  {
    "url": "assets/img/FCM-flow.35e50576.png",
    "revision": "35e505760032e31652d41af0f82b26c7"
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
    "url": "assets/img/figure-14-10-YWOCJMVV.c5f53456.svg",
    "revision": "c5f53456302a6a7946fd098f0865a1a6"
  },
  {
    "url": "assets/img/figure-14-12-FKWX3DRN.3a60e36c.svg",
    "revision": "3a60e36c1a1a60cd3330cfc83a0a5150"
  },
  {
    "url": "assets/img/figure-14-13-LRTFEHXK.a56ca479.png",
    "revision": "a56ca47988c45937a57aa60ecf26150f"
  },
  {
    "url": "assets/img/figure-14-15-DBQMPINY.29a67365.svg",
    "revision": "29a67365453e95be1ab254789d001538"
  },
  {
    "url": "assets/img/figure-14-17-RHMGJC6L.a0cc3fda.svg",
    "revision": "a0cc3fda8db72e8ed8ae7cf60f4417ea"
  },
  {
    "url": "assets/img/figure-14-19-Y5ZPZAJT.d0cece55.svg",
    "revision": "d0cece553431baf13e725578351d240c"
  },
  {
    "url": "assets/img/figure-14-2-DVJHFDA4.2a35d1e1.png",
    "revision": "2a35d1e1b049a80220aa1d0340ab8f3e"
  },
  {
    "url": "assets/img/figure-14-21-AZ4TQFF2.c5d9dc5e.svg",
    "revision": "c5d9dc5e05fc9722b5e649df32eab103"
  },
  {
    "url": "assets/img/figure-14-22-3EM25VLA.dd174d72.svg",
    "revision": "dd174d72c70ad30ae66596382031122b"
  },
  {
    "url": "assets/img/figure-14-23-YQDZDVEV.1da6dd2f.png",
    "revision": "1da6dd2fa74ffa79d133539d061fef3f"
  },
  {
    "url": "assets/img/figure-14-24-LIPZPHHR.6a94dc1e.svg",
    "revision": "6a94dc1eb623e11025858aca7b5b5882"
  },
  {
    "url": "assets/img/figure-14-25-4VSMBFLW.ceafd408.svg",
    "revision": "ceafd408b2744b6a7d483acab2782ae4"
  },
  {
    "url": "assets/img/figure-14-26-DQ2B7KIJ.9fa92e94.svg",
    "revision": "9fa92e940eb515c508b2e82f6a7b7cb3"
  },
  {
    "url": "assets/img/figure-14-27-GVQ6JW3A.8be193f8.png",
    "revision": "8be193f8c5dfbe90f7f575d05a2e6de3"
  },
  {
    "url": "assets/img/figure-14-28-Q7VI7TYL.c61abc74.png",
    "revision": "c61abc74f444ea66ae03e103849f1f96"
  },
  {
    "url": "assets/img/figure-14-3-S2A555CM.f0ad0a6c.png",
    "revision": "f0ad0a6cd295c5713e946c5176fef3a9"
  },
  {
    "url": "assets/img/figure-14-4-ADSJBRI3.3845d787.png",
    "revision": "3845d787870ef595d03e7c64c8db9f74"
  },
  {
    "url": "assets/img/figure-14-5-PWL5A5PM.61c19cb5.png",
    "revision": "61c19cb5544034880c65b22c99686b20"
  },
  {
    "url": "assets/img/figure-14-6-IK5S43FH.edd9e011.png",
    "revision": "edd9e011a2cebe0fc4f6cd9a72c255c6"
  },
  {
    "url": "assets/img/figure-14-7-25E4UND4.76358d77.png",
    "revision": "76358d7741d5be05b3ce35e2907000b4"
  },
  {
    "url": "assets/img/figure-14-8-6TUJKWRP.bb38d060.svg",
    "revision": "bb38d060c9376a7067a2fd31d97a40a7"
  },
  {
    "url": "assets/img/figure-14-9-363XWSRP.ac3569af.svg",
    "revision": "ac3569af620c3a62bfa2a1a18e6dd2f8"
  },
  {
    "url": "assets/img/flex-basis.5afb0c5f.png",
    "revision": "5afb0c5ffbd1fcf77b6b7efd7c73bb28"
  },
  {
    "url": "assets/img/flex-grow.fcb22e38.svg",
    "revision": "fcb22e3847bd746a989fb97a82557de9"
  },
  {
    "url": "assets/img/full-kubernetes-model-architecture.6c6c5d1e.png",
    "revision": "6c6c5d1ece1a51de0794a01f30dbcc27"
  },
  {
    "url": "assets/img/graph-1.504cee7a.png",
    "revision": "504cee7ac228cbea6f405774d5848a68"
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
    "url": "assets/img/image--076.79e7d5da.jpg",
    "revision": "79e7d5da0ad5863688b9ba5cf1e7010d"
  },
  {
    "url": "assets/img/image--077.24802df6.jpg",
    "revision": "24802df6c6a514b19c1868b7bef4266a"
  },
  {
    "url": "assets/img/image--078.c30aaee4.jpg",
    "revision": "c30aaee4e75470e440ebe35bc9b22ab1"
  },
  {
    "url": "assets/img/image--079.846a5f29.jpg",
    "revision": "846a5f29dd45b2072f5bf4c92ee1879e"
  },
  {
    "url": "assets/img/image--080.9c1fad46.jpg",
    "revision": "9c1fad468bc8d5512b483d81885861be"
  },
  {
    "url": "assets/img/image--081.3e82ce45.jpg",
    "revision": "3e82ce45ce5d308ac7f9a2895964aee9"
  },
  {
    "url": "assets/img/ip-classes.81c247d8.png",
    "revision": "81c247d83107627edce6533574342fae"
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
    "url": "assets/img/justify-content.c9b59254.svg",
    "revision": "c9b59254cf6573dc2ffae250f892363d"
  },
  {
    "url": "assets/img/kafka.a7cdfb98.jpg",
    "revision": "a7cdfb98b8a29abc6d0945551610294a"
  },
  {
    "url": "assets/img/kmean.9065804d.png",
    "revision": "9065804d54cb2f7bfbdd97e0ce85729d"
  },
  {
    "url": "assets/img/lan-vs-wan-vs-man-mc-slide1.39d8412f.png",
    "revision": "39d8412fc391770f0d7b5625c9f94738"
  },
  {
    "url": "assets/img/lanmedias.1ab6f9bd.png",
    "revision": "1ab6f9bd03ac652fe1189212172cd8d3"
  },
  {
    "url": "assets/img/lifecycle.75b1eefb.png",
    "revision": "75b1eefb827ff41864187666025c6609"
  },
  {
    "url": "assets/img/mess-models.7a5a8b35.png",
    "revision": "7a5a8b350af68b523c8cfec7b3855cb8"
  },
  {
    "url": "assets/img/mobx.11c6dc10.png",
    "revision": "11c6dc103eeac4a93078ed3f5817fe1f"
  },
  {
    "url": "assets/img/mono-microservices.e7974ac7.jpg",
    "revision": "e7974ac7dc42e1dd136c6fe35ac2342b"
  },
  {
    "url": "assets/img/multipart-upload.59d9588b.png",
    "revision": "59d9588be257fe07cd4b3e6cdfb422c6"
  },
  {
    "url": "assets/img/mysql-string-funcs.fc4eedf0.png",
    "revision": "fc4eedf089d148b5da7f1524c8932602"
  },
  {
    "url": "assets/img/network-device-icon-4.5ca29de7.jpg",
    "revision": "5ca29de71ed5fe0690fcfe04461c69fb"
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
    "url": "assets/img/Orchestration.8fcdf97c.jpeg",
    "revision": "8fcdf97cfa4499657481d950a33cd572"
  },
  {
    "url": "assets/img/otp-flow.908f11d5.png",
    "revision": "908f11d55531713ee74d8af4c067995f"
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
    "url": "assets/img/Polymorphic-table.eb59cbb9.png",
    "revision": "eb59cbb9d01326344dc93c3375c5340a"
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
    "url": "assets/img/react-hooks-2.a24ca501.jpg",
    "revision": "a24ca501f63059c155029c305792163c"
  },
  {
    "url": "assets/img/react-lifetime.09f698c7.jpg",
    "revision": "09f698c70d89d72b146653ce67f79c0c"
  },
  {
    "url": "assets/img/Redis-Cluster-Architecture-Diagram-Outline-01.08e6b53e.svg",
    "revision": "08e6b53e1b5e9052a27b90498bfe1338"
  },
  {
    "url": "assets/img/redux.e9aec858.jpg",
    "revision": "e9aec858427a0bbf1b3a1d08cd28c811"
  },
  {
    "url": "assets/img/release.8458878d.png",
    "revision": "8458878ded8446c6cfc0385236ba7fe3"
  },
  {
    "url": "assets/img/replica-log-strategies.c6a92918.png",
    "revision": "c6a929189f2d76c105d9d24ff3e7b7b3"
  },
  {
    "url": "assets/img/rfid-3.6f384b2a.png",
    "revision": "6f384b2aa9e58c8609f5e992fa9180fa"
  },
  {
    "url": "assets/img/sampleroutetable.5a84069d.png",
    "revision": "5a84069d3f948945cbc0ba287c500dd7"
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
    "url": "assets/img/sql-query-exe-order.079e4224.jpeg",
    "revision": "079e42249984978bab0e418c0f528666"
  },
  {
    "url": "assets/img/sso-youtube-gg.d3ae4f7b.png",
    "revision": "d3ae4f7ba67f60fdf189fc1ede191268"
  },
  {
    "url": "assets/img/strategic-design.9cc43291.png",
    "revision": "9cc43291c42c6f9db396c7064bcfefcc"
  },
  {
    "url": "assets/img/strategies.0b9fdaf0.jpg",
    "revision": "0b9fdaf05784ee44b9c82510b8ca62fc"
  },
  {
    "url": "assets/img/stream.b5997343.png",
    "revision": "b599734352be76ead6ff27ed1eb3c126"
  },
  {
    "url": "assets/img/subnet-mask-calculator.e16ed44c.png",
    "revision": "e16ed44c0841d45ce17a684882ae48c5"
  },
  {
    "url": "assets/img/summary.b05dfedb.jpeg",
    "revision": "b05dfedb01560f779ae8114dc60aa7c1"
  },
  {
    "url": "assets/img/switch-compare.8011c60d.png",
    "revision": "8011c60d8f61e9ff128f0a8192a47d71"
  },
  {
    "url": "assets/img/tactical-design.71e4f952.png",
    "revision": "71e4f95298df881c042608a304c974b2"
  },
  {
    "url": "assets/img/tcpip-osi.4d1d8bf4.jpg",
    "revision": "4d1d8bf4c69f43ec415ecbb547d57781"
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
    "url": "assets/img/upload-a-file-to-s3.ee991fe8.jpeg",
    "revision": "ee991fe85d77718171bb720f7134cf56"
  },
  {
    "url": "assets/img/use-effect.d7adda21.jpeg",
    "revision": "d7adda216f8b08a01d49d7db24bb0490"
  },
  {
    "url": "assets/img/vector-distance-formula.97ff407f.png",
    "revision": "97ff407fa4a76d4880eb8fc08d1d971a"
  },
  {
    "url": "assets/img/vscode-search-reg.c883a7e7.png",
    "revision": "c883a7e7d8ec8295b228b7a1d65981de"
  },
  {
    "url": "assets/img/wanmedias.9be5744f.png",
    "revision": "9be5744f2b4e09f24b5c6b849d2e9931"
  },
  {
    "url": "assets/img/websocket-load-balancing-issue.6df3eee9.png",
    "revision": "6df3eee9b6848a5987d30c6c5e17de79"
  },
  {
    "url": "assets/img/wp-metadatatable.c1b9b204.png",
    "revision": "c1b9b204a09aaad8283b901339daac87"
  },
  {
    "url": "assets/js/10.c5da2f77.js",
    "revision": "1d0c39cd732bf7bc7e3985d0c2555305"
  },
  {
    "url": "assets/js/100.0e8ad9ea.js",
    "revision": "d4c5d71fe0341b4ccae3470f72bc840c"
  },
  {
    "url": "assets/js/101.1cabf069.js",
    "revision": "e4e6eaba44f427eb17012f0c98b71f7c"
  },
  {
    "url": "assets/js/102.c32d1c9f.js",
    "revision": "79c5c92e88856d0ed9af34a15c94d708"
  },
  {
    "url": "assets/js/103.80cec837.js",
    "revision": "86cece00a7a685430bb487c06b1cb2f7"
  },
  {
    "url": "assets/js/104.0761af3f.js",
    "revision": "bfeea5e5ab43a10de5a70ce2a14612eb"
  },
  {
    "url": "assets/js/105.7c64e1a2.js",
    "revision": "02f8eba543c75df97f2ca68132c415ba"
  },
  {
    "url": "assets/js/106.b3258ef1.js",
    "revision": "b6762b5064a5f6156a6563a739efdd89"
  },
  {
    "url": "assets/js/107.90bcd793.js",
    "revision": "e9e1612f5557c58cbb232e3db634c272"
  },
  {
    "url": "assets/js/108.0c590903.js",
    "revision": "c73e267b734693fd5b14e4b97a6e3dda"
  },
  {
    "url": "assets/js/109.3f1d7557.js",
    "revision": "418a47a40abe026a8b4605c0a7d11f28"
  },
  {
    "url": "assets/js/11.39187bf3.js",
    "revision": "5513ca2a9325fd1020b10e9d93861f3f"
  },
  {
    "url": "assets/js/110.776c66a0.js",
    "revision": "5eafadafdc3a7802f44ace7015b937f6"
  },
  {
    "url": "assets/js/111.a2b1d650.js",
    "revision": "55efddf25c2c57c69dcc33dce902e520"
  },
  {
    "url": "assets/js/112.fefe6690.js",
    "revision": "1e2b5078d63491e0ffd7cd0bbc1b3d93"
  },
  {
    "url": "assets/js/113.1ef39a40.js",
    "revision": "78501d06d41c667eb02b8bd4a03f4eae"
  },
  {
    "url": "assets/js/114.81e90654.js",
    "revision": "68f602d532bc614be5ac4cfe0f89a0cc"
  },
  {
    "url": "assets/js/115.b12becf0.js",
    "revision": "855877679a7f8331d6396c5cf818aa42"
  },
  {
    "url": "assets/js/116.e585d5c4.js",
    "revision": "3155710a0cf2d1282714736fa014d8d7"
  },
  {
    "url": "assets/js/117.4e63442e.js",
    "revision": "5c2d79b28522cb300b15a8af481b6aaa"
  },
  {
    "url": "assets/js/118.f764d07a.js",
    "revision": "f7197d39d3028964f22dde166f5c78d7"
  },
  {
    "url": "assets/js/119.2979e3e0.js",
    "revision": "063f28759f0165f2fb5ff67eedafe757"
  },
  {
    "url": "assets/js/12.f46f393a.js",
    "revision": "be7967986ebbf4842ab7d694ebc388b1"
  },
  {
    "url": "assets/js/120.a830ebce.js",
    "revision": "fce37590c8932302ca4104ce5dda2d50"
  },
  {
    "url": "assets/js/121.0d263e8c.js",
    "revision": "b153cd2509c73d600e43ad05b19b9e30"
  },
  {
    "url": "assets/js/122.2e4245bc.js",
    "revision": "8cd819188c113218ca600446bdf02b26"
  },
  {
    "url": "assets/js/123.c57060d9.js",
    "revision": "f2d962192bfaabb24776185cc2e3c11e"
  },
  {
    "url": "assets/js/124.7651c75c.js",
    "revision": "42f01fe2716a7f0182ac0cea2f811332"
  },
  {
    "url": "assets/js/125.44a570fc.js",
    "revision": "7f30781e0422c0133091644dd2a3addf"
  },
  {
    "url": "assets/js/126.a2f295ba.js",
    "revision": "9b31f16edc04e7cff965d275e2d26a9b"
  },
  {
    "url": "assets/js/127.8fd2d47c.js",
    "revision": "be5ac8d61d4721e061db2ccf04022340"
  },
  {
    "url": "assets/js/128.e877aa78.js",
    "revision": "e01df358db4fbf36eb5ddd001b0d57bb"
  },
  {
    "url": "assets/js/129.f8fee193.js",
    "revision": "a0f7138cb449ed42e3404d087198fd42"
  },
  {
    "url": "assets/js/13.d99b4f08.js",
    "revision": "81252ea47d313f8b34ad03315277d7a9"
  },
  {
    "url": "assets/js/130.2987a96b.js",
    "revision": "f801c362b498bb393b6ebaec6b8e0d43"
  },
  {
    "url": "assets/js/131.626ee6d4.js",
    "revision": "a64138420db02795ddfa714e8e4fb631"
  },
  {
    "url": "assets/js/132.f9072fc6.js",
    "revision": "753fc9eb482e1cde79db95aab5fce623"
  },
  {
    "url": "assets/js/133.92683f10.js",
    "revision": "0bbb6c8956219dd77cd2654483f08b52"
  },
  {
    "url": "assets/js/134.c9bc74fa.js",
    "revision": "c87227124ac82acf2ba4b2151fe208dc"
  },
  {
    "url": "assets/js/135.eaffe8fe.js",
    "revision": "bdcde122066dd4e3368535ae93de9537"
  },
  {
    "url": "assets/js/136.1559cf5e.js",
    "revision": "d02289ec69223757f5a8a5c5891d8afa"
  },
  {
    "url": "assets/js/137.8377eb3d.js",
    "revision": "fd4472ebdf595ce3253924bba8962a3e"
  },
  {
    "url": "assets/js/138.8d251cc1.js",
    "revision": "d2e910902b1d1f8539afdf4c3fefb4e3"
  },
  {
    "url": "assets/js/139.90a8feae.js",
    "revision": "3dfe3138d814035a7acf5239cd68d95d"
  },
  {
    "url": "assets/js/14.e26613a6.js",
    "revision": "3d644614be46cfd5a2393fa4e0e51f20"
  },
  {
    "url": "assets/js/140.e82ad2ef.js",
    "revision": "d9cd981b83e8a25a649bd241da10dbef"
  },
  {
    "url": "assets/js/141.1aea30f9.js",
    "revision": "49ef34d5e0135c2d0174f19c0d7f26d1"
  },
  {
    "url": "assets/js/142.3e9776a3.js",
    "revision": "77dca37f3ed0a9f476409b69e1e543e8"
  },
  {
    "url": "assets/js/143.df87b2ac.js",
    "revision": "82afb1d48a90ac0fb991aff459ba601e"
  },
  {
    "url": "assets/js/144.34112238.js",
    "revision": "84350f9166678001fd6280dc364e3491"
  },
  {
    "url": "assets/js/145.82d01839.js",
    "revision": "daa9405c08fb1d8b8057c0f56ed9721b"
  },
  {
    "url": "assets/js/146.29eaa06a.js",
    "revision": "71316de6d59dabd725690ca8258c7640"
  },
  {
    "url": "assets/js/147.a2942eec.js",
    "revision": "547a4970d1c7143832bbc5c1222af41e"
  },
  {
    "url": "assets/js/148.7bbcd2d7.js",
    "revision": "2bacaf3a75bb722c12a9ff998269c4d3"
  },
  {
    "url": "assets/js/149.e54e0d98.js",
    "revision": "2fa79b398c3666a79f7d055a13520f5d"
  },
  {
    "url": "assets/js/15.e5395a4c.js",
    "revision": "92819e6bc54f987eecb7b63ceaa01f12"
  },
  {
    "url": "assets/js/150.fc6da394.js",
    "revision": "e8736bec0f2f45a9918828a3547ed0dc"
  },
  {
    "url": "assets/js/151.67d841d4.js",
    "revision": "81e4a5d505fbd85fa289857c62a63207"
  },
  {
    "url": "assets/js/152.7f563f41.js",
    "revision": "083d986868bada9c77ae83f9f8aa10b4"
  },
  {
    "url": "assets/js/153.02f0a0a7.js",
    "revision": "96fb6a9aa7ca6c40e7ad066bab613417"
  },
  {
    "url": "assets/js/154.735ac950.js",
    "revision": "5b1317b0eb2b7fb04c2da1a157809ccc"
  },
  {
    "url": "assets/js/155.f8c3e26c.js",
    "revision": "3d1f623a768d8fc95255ccdf1fbdda92"
  },
  {
    "url": "assets/js/156.20913196.js",
    "revision": "e6dbd74fa5ff96d1394a233b40df7183"
  },
  {
    "url": "assets/js/157.f019288c.js",
    "revision": "9fe6810e52d637e4765c17f0e3841bbe"
  },
  {
    "url": "assets/js/158.b2e94fe9.js",
    "revision": "f3ff3507a0a25ab58ae3623a9fff1460"
  },
  {
    "url": "assets/js/159.86fe3362.js",
    "revision": "c4b1517dabac90764a2bd198a227f12c"
  },
  {
    "url": "assets/js/16.9ec67dfa.js",
    "revision": "0c7f399ad36feb84f4e191830854fdb0"
  },
  {
    "url": "assets/js/160.0abd5676.js",
    "revision": "fb5dc6b8c198899b6b6667890769fc4b"
  },
  {
    "url": "assets/js/161.9774583c.js",
    "revision": "8c34e6f1942726c5489b81f6c0443afd"
  },
  {
    "url": "assets/js/162.1441f6c3.js",
    "revision": "7a121bf5155cb1e160a31eaaac71ed86"
  },
  {
    "url": "assets/js/163.785ce3a1.js",
    "revision": "1b00e2a996425bc049dd79aefe253397"
  },
  {
    "url": "assets/js/164.886d11a8.js",
    "revision": "625b625cc74277e8ffa2ffe09182988e"
  },
  {
    "url": "assets/js/165.8b5ac9ab.js",
    "revision": "a26573690962f826e4135c4bdd2a9a85"
  },
  {
    "url": "assets/js/166.a8652ef5.js",
    "revision": "80ca8511684bb33209c1acd701f26eab"
  },
  {
    "url": "assets/js/167.66ca682b.js",
    "revision": "8142a4ee79fbe0f036c9820e2a4aa3b4"
  },
  {
    "url": "assets/js/168.f905e03e.js",
    "revision": "a7a8af2bdfe169df9ac1f28c01b799cb"
  },
  {
    "url": "assets/js/169.11b66c24.js",
    "revision": "27cabdc33fc65a71f9e06d546363333d"
  },
  {
    "url": "assets/js/17.82d1e2ed.js",
    "revision": "fbd5e11f7e073a0d16a311a992950d7f"
  },
  {
    "url": "assets/js/170.d2a1aa81.js",
    "revision": "176a8df1b2011f3f4a81e8670cf14a93"
  },
  {
    "url": "assets/js/171.1d4cc014.js",
    "revision": "f9470431dba94f44ffb44d0b230c99b4"
  },
  {
    "url": "assets/js/172.b8f85c2b.js",
    "revision": "79aaad1f634bacc354e6cbd3ceed6d9e"
  },
  {
    "url": "assets/js/173.5b8e4f67.js",
    "revision": "a7346bd9bf522e57dad56e13ce215dd9"
  },
  {
    "url": "assets/js/174.c686a39c.js",
    "revision": "2d8c9d46fb39b0bd0cc2c4af0bf7e139"
  },
  {
    "url": "assets/js/175.90038dc2.js",
    "revision": "866be1396e7f99e45cacf06f18bdab53"
  },
  {
    "url": "assets/js/176.9a624668.js",
    "revision": "5778c69aaedf5d95b814745c9e3e1902"
  },
  {
    "url": "assets/js/177.ca872197.js",
    "revision": "ed912692a1c0bd7746f17cea44c9f842"
  },
  {
    "url": "assets/js/178.d024fb26.js",
    "revision": "eb0b9d56e07a151cd7eca199f066e170"
  },
  {
    "url": "assets/js/179.056c06a7.js",
    "revision": "a27a6131076b2d0e8944e7e15c5e09ed"
  },
  {
    "url": "assets/js/18.a3765075.js",
    "revision": "22fc528f7f0ee3e0da314028e1c4cec3"
  },
  {
    "url": "assets/js/180.5b7ba197.js",
    "revision": "822200fb8a2ab92cef36d51e84ac645b"
  },
  {
    "url": "assets/js/181.a35e2600.js",
    "revision": "03b2348a922d28d0421f2b9365f0230a"
  },
  {
    "url": "assets/js/182.625aa0c3.js",
    "revision": "c64ff9850df8a3b6746d57b239867840"
  },
  {
    "url": "assets/js/183.43eb4702.js",
    "revision": "f9351457d0d79a8f5ec69c792cea9c3d"
  },
  {
    "url": "assets/js/184.9fdbbe7c.js",
    "revision": "3ad213cbc9db90f54766ffe5e4fad9b6"
  },
  {
    "url": "assets/js/185.a1e013e3.js",
    "revision": "184dd2ed5f59efb01be9aae708a5428d"
  },
  {
    "url": "assets/js/186.3011c958.js",
    "revision": "93cedbc9b5af8795582901c77246b74a"
  },
  {
    "url": "assets/js/187.b345eda9.js",
    "revision": "56153d383d6ec5e4e82c908315f88bf8"
  },
  {
    "url": "assets/js/188.b0a0ef93.js",
    "revision": "dbeae123de4797209d05e28b66d56f91"
  },
  {
    "url": "assets/js/189.61c7e898.js",
    "revision": "24a462a3400c4bffff158ff954bceb46"
  },
  {
    "url": "assets/js/19.ea160a8d.js",
    "revision": "a115668a03346602c4eb224a934ae3a4"
  },
  {
    "url": "assets/js/190.51657dca.js",
    "revision": "bfec6808739c12e24d45415eeca3b656"
  },
  {
    "url": "assets/js/191.981f6262.js",
    "revision": "5df0c3ebf80575cee2ed7961aa3a29ee"
  },
  {
    "url": "assets/js/192.ff0b1b22.js",
    "revision": "7599719eec2dbcc1fbe96576ddd0d9c9"
  },
  {
    "url": "assets/js/193.c019a668.js",
    "revision": "95043b81baab87bcdb50531df6395edf"
  },
  {
    "url": "assets/js/194.ede10ef2.js",
    "revision": "93f1424c176978e6b057f530b1223ad7"
  },
  {
    "url": "assets/js/195.3477c67e.js",
    "revision": "1dc21df3cee93772e72b3437a3705006"
  },
  {
    "url": "assets/js/196.013622e4.js",
    "revision": "9861ffa13e5ee57c1cce92db785d7dde"
  },
  {
    "url": "assets/js/197.c3e9e047.js",
    "revision": "44828d155120d0423cb5f803d9b91400"
  },
  {
    "url": "assets/js/198.22a52ac5.js",
    "revision": "e6ab13a1a1fd5b4bd37b3a6d353ce718"
  },
  {
    "url": "assets/js/199.1f4db159.js",
    "revision": "fbbc3ca590845869e4db684ca8848646"
  },
  {
    "url": "assets/js/2.f2696c59.js",
    "revision": "9de129602bc53f0ad1df83581631611c"
  },
  {
    "url": "assets/js/20.c4f804a2.js",
    "revision": "ae5b66657c5c13f0a4ba96684adbd3f7"
  },
  {
    "url": "assets/js/200.ece6b381.js",
    "revision": "6ebd36420a7882868f98f7544e567b7a"
  },
  {
    "url": "assets/js/201.3b750d0b.js",
    "revision": "608c61d7897024dd1282035554b0b2d2"
  },
  {
    "url": "assets/js/202.92899a93.js",
    "revision": "ddd4481750d6e5ff396599932b3a4f14"
  },
  {
    "url": "assets/js/203.559b1566.js",
    "revision": "d9f8c39ef82f804454058982b880d807"
  },
  {
    "url": "assets/js/204.7d8aa9ab.js",
    "revision": "2f3aed56dc89a32bb51631797edfe297"
  },
  {
    "url": "assets/js/205.619877d7.js",
    "revision": "80d7386345ad01cdf431cae754c324d4"
  },
  {
    "url": "assets/js/206.9f6f0802.js",
    "revision": "9aaeedb0f068d18a4d5b3ea49581645f"
  },
  {
    "url": "assets/js/207.37c04937.js",
    "revision": "a8c9cfde3511b4cb00cc4fdc384486b9"
  },
  {
    "url": "assets/js/208.89a4acbf.js",
    "revision": "a0289398f2ea76b0de81c93c797da885"
  },
  {
    "url": "assets/js/209.81ecb47c.js",
    "revision": "5b587d47879da2289cfba7593d1c7691"
  },
  {
    "url": "assets/js/21.f309d151.js",
    "revision": "127a5661c189384bb0521c29a5015f54"
  },
  {
    "url": "assets/js/210.8391f703.js",
    "revision": "cab74fe6e0f61365bc1169a995efb1ad"
  },
  {
    "url": "assets/js/211.7566cf20.js",
    "revision": "015d63de5b58103a7c904e8e688b8651"
  },
  {
    "url": "assets/js/212.3e4ab74f.js",
    "revision": "95d74b3e0ff90ff3c9fd18a7252024aa"
  },
  {
    "url": "assets/js/213.81d91c47.js",
    "revision": "cc144784b7a12342561998e3f528f596"
  },
  {
    "url": "assets/js/214.7aed538e.js",
    "revision": "838f73ffd8c7a490c01276fef2bd4a73"
  },
  {
    "url": "assets/js/215.77b28b18.js",
    "revision": "021ff41ff4e160be5062f6a4f1fbd9f8"
  },
  {
    "url": "assets/js/216.a18c7c2f.js",
    "revision": "842b178b732d173143d5a7326fa52349"
  },
  {
    "url": "assets/js/217.bb7afbf3.js",
    "revision": "b69399f75e5f40df78a54168ece7967f"
  },
  {
    "url": "assets/js/218.4d1acd54.js",
    "revision": "27c7673c3b2fa710691496c880af6e59"
  },
  {
    "url": "assets/js/219.7dce4baf.js",
    "revision": "e06b3b98a8917cf61528081ad5490c53"
  },
  {
    "url": "assets/js/22.01b004a4.js",
    "revision": "ab7af03bfcb6ac3d0911770cdfc37be8"
  },
  {
    "url": "assets/js/220.3e398c56.js",
    "revision": "853746c35ec3afb6c96c4270e8c9137a"
  },
  {
    "url": "assets/js/221.f831db8e.js",
    "revision": "9fc9da36db38862f034296a983bd4366"
  },
  {
    "url": "assets/js/222.7cc31146.js",
    "revision": "8dca10a7ccffd2f982bf6f9554b256ef"
  },
  {
    "url": "assets/js/223.e725290d.js",
    "revision": "a354aa83b1fbfcad24180867db65e20c"
  },
  {
    "url": "assets/js/224.55a794d7.js",
    "revision": "1d649f2059582c97ec3af432969b481c"
  },
  {
    "url": "assets/js/225.5c43feab.js",
    "revision": "2337b2a933affbd85b25d175b1bfbeee"
  },
  {
    "url": "assets/js/226.500b8164.js",
    "revision": "c387c70d698b32cad7789fad77a59dce"
  },
  {
    "url": "assets/js/227.a8bffc75.js",
    "revision": "52b252c8e3655cc2d40b8d4c181ea158"
  },
  {
    "url": "assets/js/228.6c8c0e1d.js",
    "revision": "6acaf336f546185ff0b667a718954523"
  },
  {
    "url": "assets/js/229.2c35ade1.js",
    "revision": "6d0e5d56cc1c1ecca9d136074ab53f38"
  },
  {
    "url": "assets/js/23.b5e4ad11.js",
    "revision": "af43f6f57e318cef12a98c45a03d946f"
  },
  {
    "url": "assets/js/230.d8b2610f.js",
    "revision": "e515e29f22d0122ff22cca7f5fb2c375"
  },
  {
    "url": "assets/js/231.796405f8.js",
    "revision": "057b965d9aa1539a89e462622ace1606"
  },
  {
    "url": "assets/js/232.e4f7f7aa.js",
    "revision": "a38bcddcbae5ac4127844949638ea62c"
  },
  {
    "url": "assets/js/233.bda55224.js",
    "revision": "58767548c3ed29d8ea0c051d9091cb5f"
  },
  {
    "url": "assets/js/234.9c5025bb.js",
    "revision": "c01cd34c70eedae6335e64a9a44161d3"
  },
  {
    "url": "assets/js/235.da9937e0.js",
    "revision": "4f5edf2e0beb4e712e2a719f14f0e0ff"
  },
  {
    "url": "assets/js/236.d7d1da65.js",
    "revision": "370224f05b223f46f286f372c5fcf3cf"
  },
  {
    "url": "assets/js/237.84f71f23.js",
    "revision": "33368a2a1e330ef45064c0a3e8bb8ccc"
  },
  {
    "url": "assets/js/238.816f726d.js",
    "revision": "6fd0f30f68bcfe5af173ecc4552dee78"
  },
  {
    "url": "assets/js/239.41b74f63.js",
    "revision": "d30897b852d64105156c93cf280f9502"
  },
  {
    "url": "assets/js/24.1f89be15.js",
    "revision": "c157590374443407532c03145e38010b"
  },
  {
    "url": "assets/js/240.4f747111.js",
    "revision": "7d21c820bdf08752e253e410422c2c08"
  },
  {
    "url": "assets/js/241.c13e3b0f.js",
    "revision": "7d0d4e1fe6a9e481f20fbdd15023a371"
  },
  {
    "url": "assets/js/242.d4da7ec9.js",
    "revision": "10701eb35a8589785045d006726029b4"
  },
  {
    "url": "assets/js/243.6507cde8.js",
    "revision": "4dace20ba37c8b5db74b27177be7ea24"
  },
  {
    "url": "assets/js/244.cd7b855d.js",
    "revision": "6207bb9fe5c5ec8c82576cb44e5d620d"
  },
  {
    "url": "assets/js/245.acc73c7c.js",
    "revision": "10dd9a1246c9e8d8d77626a9503e3883"
  },
  {
    "url": "assets/js/246.3b3a9dd6.js",
    "revision": "2fc7d4f1ece04732be9288e055227145"
  },
  {
    "url": "assets/js/247.186215b3.js",
    "revision": "ef782c638ffe73cb638164b87432935f"
  },
  {
    "url": "assets/js/248.6fcb990b.js",
    "revision": "5b4bb2b13c24147c3fd5ac721231894d"
  },
  {
    "url": "assets/js/249.c512e2cf.js",
    "revision": "245662e95825b9eb44b7ef942bae8b6b"
  },
  {
    "url": "assets/js/25.5c4d0a71.js",
    "revision": "4fa5582610f8dd9986a4242bc81a122a"
  },
  {
    "url": "assets/js/250.bfc5c0cc.js",
    "revision": "f66758c08c4bb60373cee18cae89ef7d"
  },
  {
    "url": "assets/js/251.7003d3b8.js",
    "revision": "f32ec3a6316876acc2b15eafa871be83"
  },
  {
    "url": "assets/js/252.4b8f4d21.js",
    "revision": "aeb007a41c0fceb8073500cad54c749c"
  },
  {
    "url": "assets/js/253.aa78c85e.js",
    "revision": "65d3686bf6bcafd29c68324fdfe5a53f"
  },
  {
    "url": "assets/js/254.bbff515a.js",
    "revision": "f131f40f16615427379538562f188bb6"
  },
  {
    "url": "assets/js/255.7f8d74e9.js",
    "revision": "cc1fb65e092fed71e36f7914cc94bc7b"
  },
  {
    "url": "assets/js/256.bb66afc4.js",
    "revision": "349d588af8625b5e9d3f45c0a771e55b"
  },
  {
    "url": "assets/js/257.33460e15.js",
    "revision": "b6b0e1b6d6efadbde46850d5fa4dc0ad"
  },
  {
    "url": "assets/js/258.0c2b5631.js",
    "revision": "d7fb83de390570024c78291ded77561f"
  },
  {
    "url": "assets/js/259.50338195.js",
    "revision": "c43b61f942671b114435a3c594eef0b6"
  },
  {
    "url": "assets/js/26.d33d6986.js",
    "revision": "6f6a3d638df98ca62e67c19ce9182b1b"
  },
  {
    "url": "assets/js/260.ba074718.js",
    "revision": "4951cf2fd81d32da84691d50debcb605"
  },
  {
    "url": "assets/js/261.c4d027d7.js",
    "revision": "17ae46c73b9393414c8e7116dcbae4e3"
  },
  {
    "url": "assets/js/262.dfc51f7a.js",
    "revision": "973618a0a047bd6b5f5d1272b90ea6fc"
  },
  {
    "url": "assets/js/263.1a2e1037.js",
    "revision": "f5d77e5492f93605f79c8b6e111d93f1"
  },
  {
    "url": "assets/js/264.cc7e8787.js",
    "revision": "b32b152cafde28cb77a3737731b13b03"
  },
  {
    "url": "assets/js/265.fa60ee11.js",
    "revision": "e2f373795d2cadc4b2b6041d0c2aab05"
  },
  {
    "url": "assets/js/266.92f3b7bb.js",
    "revision": "cc15540b0110d3f47330ec788ea39c18"
  },
  {
    "url": "assets/js/267.40678951.js",
    "revision": "7b921d5c55b3c7a8b332fb797ad6fd8b"
  },
  {
    "url": "assets/js/268.69c9ee92.js",
    "revision": "3f0d75e7952eb401554846d7d58ac670"
  },
  {
    "url": "assets/js/269.0e093e6b.js",
    "revision": "5eae3b013250235d41ee22b045924403"
  },
  {
    "url": "assets/js/27.0db4453d.js",
    "revision": "9e99a68f9185549f24ab8cac3c68f45f"
  },
  {
    "url": "assets/js/270.a8b63a32.js",
    "revision": "e0619d8e44b882cf0458e2eac75af64c"
  },
  {
    "url": "assets/js/271.e4d831a7.js",
    "revision": "b52902b2489a55eba2e542345661b992"
  },
  {
    "url": "assets/js/272.8dacf5f2.js",
    "revision": "6f019f2d1b74998323f0db10374cf122"
  },
  {
    "url": "assets/js/273.25aa09ba.js",
    "revision": "271d9f37b0b1a54d5829f6626bf09f3e"
  },
  {
    "url": "assets/js/274.abb59cb3.js",
    "revision": "33169df876a2b53d9b6f606510ab2a21"
  },
  {
    "url": "assets/js/275.ddb70b32.js",
    "revision": "cbd021966dff0976ed7c5ec967ea5278"
  },
  {
    "url": "assets/js/276.fbc84929.js",
    "revision": "6eb583901341523cb067f0682111c97d"
  },
  {
    "url": "assets/js/277.bff8f364.js",
    "revision": "53ee54fb1b43abbb9b450938dadb9eec"
  },
  {
    "url": "assets/js/278.e54ad703.js",
    "revision": "16f4ec06ffdfa0867650ee5df750a228"
  },
  {
    "url": "assets/js/279.20b967a4.js",
    "revision": "4fe7d20bd92c5ce1038b3fcc599d3df9"
  },
  {
    "url": "assets/js/28.ebf199aa.js",
    "revision": "8b9e68ece5c953b5aaf269c8bfc98e0e"
  },
  {
    "url": "assets/js/280.57738c7e.js",
    "revision": "0974132ca6b85ace2920ed25a9f6840e"
  },
  {
    "url": "assets/js/281.d2f27942.js",
    "revision": "cf4d9236ba4f66e47ca071fb806fe588"
  },
  {
    "url": "assets/js/282.71e2d963.js",
    "revision": "d4f5f14c1ad6de67f004602dd1398dde"
  },
  {
    "url": "assets/js/283.131c0a43.js",
    "revision": "7f92e9f68cb6fd263a29913661944f0f"
  },
  {
    "url": "assets/js/284.08c108cb.js",
    "revision": "b6e6d99f621d9e6869e3ec8e65fc41a7"
  },
  {
    "url": "assets/js/285.73890659.js",
    "revision": "e8d0599f18ca4e20667782bda05ea821"
  },
  {
    "url": "assets/js/286.a89206f9.js",
    "revision": "39c99ddd03537f8a08f5ec26e297ae0a"
  },
  {
    "url": "assets/js/287.c3071e44.js",
    "revision": "6598326006b4df4bc0e73e6e2e194755"
  },
  {
    "url": "assets/js/288.608df782.js",
    "revision": "51da4dbe6d0e1bf8a0f58dbaf2ed084e"
  },
  {
    "url": "assets/js/289.ed964ee8.js",
    "revision": "ecb9b4eb5f2759a95d91de1abf3f0c0a"
  },
  {
    "url": "assets/js/29.79e3a96f.js",
    "revision": "f8adc8fd3611aaa4bcc1da15a99342bf"
  },
  {
    "url": "assets/js/290.68bb33e9.js",
    "revision": "665305c54debd2d873cf4478a0e4b7d2"
  },
  {
    "url": "assets/js/291.f43fc26a.js",
    "revision": "c9909afe28fc0e18de5044680d976090"
  },
  {
    "url": "assets/js/292.c6a415cd.js",
    "revision": "a1838d9d39ee15a935449496047f7350"
  },
  {
    "url": "assets/js/293.ff0c2a8c.js",
    "revision": "3d197107ad4587ad7b474408c4a3f3e0"
  },
  {
    "url": "assets/js/294.169b687c.js",
    "revision": "986b387d14cb40d2a9f73bd56870028e"
  },
  {
    "url": "assets/js/295.71f520d5.js",
    "revision": "c860df7535287c6e10598f68b144213c"
  },
  {
    "url": "assets/js/296.d856994d.js",
    "revision": "a9d9af86d5b685ad512a0937a08603ea"
  },
  {
    "url": "assets/js/297.c3601788.js",
    "revision": "767b3dd3a0ff168cba46bd4f92ae54cf"
  },
  {
    "url": "assets/js/298.dc072f77.js",
    "revision": "b0c7a3ba4d4e6de12d61651ce5b63702"
  },
  {
    "url": "assets/js/299.fa5500db.js",
    "revision": "a436e4bd84c2fcd0007b0512daf939ce"
  },
  {
    "url": "assets/js/3.d10cfb85.js",
    "revision": "4c41f44e715bd72739a898889f96ab58"
  },
  {
    "url": "assets/js/30.6aa5b2af.js",
    "revision": "4e65dad3bd9e927907c5f49eeb539e54"
  },
  {
    "url": "assets/js/300.660562ed.js",
    "revision": "609d9e780d03d3371d16cfda001772f8"
  },
  {
    "url": "assets/js/301.048f2f06.js",
    "revision": "15d9ed6b07ece4ece435bf173e5d1b64"
  },
  {
    "url": "assets/js/302.d7e48930.js",
    "revision": "9e8dd47ebce018e1e421924b73525f00"
  },
  {
    "url": "assets/js/303.1be5591f.js",
    "revision": "11bafafe74b989e823f6e034342bf1ac"
  },
  {
    "url": "assets/js/304.e3e0d744.js",
    "revision": "d41447e827316883cca73eb28a0acd5c"
  },
  {
    "url": "assets/js/305.0ef5d6ab.js",
    "revision": "38e69fdd317a7f2cf034dbfe5d08d60a"
  },
  {
    "url": "assets/js/306.2dd8dc06.js",
    "revision": "fb4bf14c1b8ba9273f17b8052fb21536"
  },
  {
    "url": "assets/js/307.f3bb43dd.js",
    "revision": "222a979ad79b2f9514def4c9826cae1b"
  },
  {
    "url": "assets/js/308.d30b8a33.js",
    "revision": "21942a541edb93408a0d3d62fd7f4a54"
  },
  {
    "url": "assets/js/309.c12c6cd7.js",
    "revision": "5bf0ca44a2f23e4dd2f5182312f66b1d"
  },
  {
    "url": "assets/js/31.5671260e.js",
    "revision": "29673514146ee17c2209372b0e74a8d8"
  },
  {
    "url": "assets/js/310.ad01c35d.js",
    "revision": "4d2566663d48bf561e485660ecf41c28"
  },
  {
    "url": "assets/js/311.82d86ced.js",
    "revision": "afb63374b5e90397b1dc442ca70bf434"
  },
  {
    "url": "assets/js/312.499ceee1.js",
    "revision": "762cb78b6bbb320876a8c381115e1af6"
  },
  {
    "url": "assets/js/313.3d47bfcb.js",
    "revision": "4c9112c3478c6cf0edace171d1c0a321"
  },
  {
    "url": "assets/js/314.e1c34026.js",
    "revision": "2ce27851854fd03d5be9ace68ea25dcb"
  },
  {
    "url": "assets/js/315.73e091c3.js",
    "revision": "daa50068fc32f3454f4424f9e0df72d0"
  },
  {
    "url": "assets/js/316.86113845.js",
    "revision": "3bf62ec6c31e179f030064cca6c410e2"
  },
  {
    "url": "assets/js/317.5d9432af.js",
    "revision": "0c77a8daef7fd9a862b5f40c71475bb4"
  },
  {
    "url": "assets/js/318.2cfbb648.js",
    "revision": "72ce326c76646058e46133d843db56ea"
  },
  {
    "url": "assets/js/319.d6532a60.js",
    "revision": "5160e9fdf7baff45e29236ae0a819d4c"
  },
  {
    "url": "assets/js/32.bee54ac8.js",
    "revision": "62a701a1d56d3e5b75164fd9e5c21822"
  },
  {
    "url": "assets/js/320.06dd8548.js",
    "revision": "fe16d826eb75639d599486489ab57400"
  },
  {
    "url": "assets/js/321.b1130ce9.js",
    "revision": "19cbbfe39a408d5aeff328fe6c7c09e4"
  },
  {
    "url": "assets/js/322.8ef2ebd3.js",
    "revision": "5847d12cd2e66f0015873bc41486ce77"
  },
  {
    "url": "assets/js/323.7ba17031.js",
    "revision": "2995ed07232908e3437e2ad309041bd2"
  },
  {
    "url": "assets/js/324.b3590435.js",
    "revision": "5550d0921265a241d07b0cda2afc3692"
  },
  {
    "url": "assets/js/325.6d4a213c.js",
    "revision": "df731cf5bd4fb55673c2786a2428aaf1"
  },
  {
    "url": "assets/js/326.25766cab.js",
    "revision": "ea077d30e8b6f1ff540eb0c8ef3431ac"
  },
  {
    "url": "assets/js/327.1367f04b.js",
    "revision": "963a70bbe9afc605fcc8560e62348a42"
  },
  {
    "url": "assets/js/328.20eb5c55.js",
    "revision": "a1934b99da6e57d138943ca438b865c8"
  },
  {
    "url": "assets/js/329.7cf5cb61.js",
    "revision": "19f3fbfa0d8917fe7d5612f957c61d33"
  },
  {
    "url": "assets/js/33.f9da1cb1.js",
    "revision": "50d2ce71c9729f175985a5d51296e233"
  },
  {
    "url": "assets/js/330.42c59c33.js",
    "revision": "7da2ecd0af926f35eac82f188f6ac3b8"
  },
  {
    "url": "assets/js/331.4379e4d3.js",
    "revision": "5d58537c38948eaea5be6f6ff0ee07f1"
  },
  {
    "url": "assets/js/332.d27ecac9.js",
    "revision": "57bbfc89181a837a37360afd1f9db8f7"
  },
  {
    "url": "assets/js/333.feebb04e.js",
    "revision": "a50c534129ef47cd8882d820f30d4c0a"
  },
  {
    "url": "assets/js/334.a21924be.js",
    "revision": "2b79d532e46656cbe36761e355c38fec"
  },
  {
    "url": "assets/js/335.f092406a.js",
    "revision": "75bb9b3c8da5de9f983f35140a89cfbe"
  },
  {
    "url": "assets/js/336.e81841b2.js",
    "revision": "a28f9c58de1a080909fe6ff28758dd43"
  },
  {
    "url": "assets/js/337.94a52d1a.js",
    "revision": "4b0696c7a0cd84d0613de4ecd533dbe7"
  },
  {
    "url": "assets/js/338.84368b1a.js",
    "revision": "a15859ad147bb0b904a73692aa765f4d"
  },
  {
    "url": "assets/js/339.0a858303.js",
    "revision": "c3f92447e1a3e3184fc1d6ce434c3bd3"
  },
  {
    "url": "assets/js/34.4f04af4b.js",
    "revision": "3629168ffef6aac9653385ee0b0842b7"
  },
  {
    "url": "assets/js/340.be5863f4.js",
    "revision": "7f9e76eca58af6a22bae83aead625901"
  },
  {
    "url": "assets/js/341.7098b2c3.js",
    "revision": "3f72d98fddd81f540ec98e60d5bbafdf"
  },
  {
    "url": "assets/js/342.32a9d9b3.js",
    "revision": "e6350139c5ae3575f568434ce89540af"
  },
  {
    "url": "assets/js/343.84082a76.js",
    "revision": "56c6c6c1c3ff06c041604953a6994e1d"
  },
  {
    "url": "assets/js/344.d7fef42c.js",
    "revision": "2241d50ac03c6638280b92a51af35b49"
  },
  {
    "url": "assets/js/345.81c0b839.js",
    "revision": "ce511b5e55bb1f3e530ef18f66e8c17d"
  },
  {
    "url": "assets/js/346.a61dc89b.js",
    "revision": "b16c7867205dff385314043bda80b8e8"
  },
  {
    "url": "assets/js/347.182f083b.js",
    "revision": "ac1aa949b8d6d40b735531f2644a0744"
  },
  {
    "url": "assets/js/348.16e95af0.js",
    "revision": "cc3311401a6119eb379194fd74ac1611"
  },
  {
    "url": "assets/js/349.9ca657f2.js",
    "revision": "04eae0af9e881d09310cf3ca6ee6131d"
  },
  {
    "url": "assets/js/35.e65a99e8.js",
    "revision": "993871a8dbfb05d72a50adc4a4f7980f"
  },
  {
    "url": "assets/js/350.285c3489.js",
    "revision": "77346b353f3445bd7130ae99adaa69c3"
  },
  {
    "url": "assets/js/351.7084f656.js",
    "revision": "32f189ce40b0be60023eec7f29540917"
  },
  {
    "url": "assets/js/352.b413b19b.js",
    "revision": "92e577d5adbaa3de1593305869c9f740"
  },
  {
    "url": "assets/js/353.33fb50d0.js",
    "revision": "61e4a85311a6fabf1c11f3b13f22242c"
  },
  {
    "url": "assets/js/354.a0c1f6ef.js",
    "revision": "c042d4342353c743bafc183d4667349e"
  },
  {
    "url": "assets/js/355.ff0c51c4.js",
    "revision": "ca6d2710bf5aff235ddce7a11a3f3471"
  },
  {
    "url": "assets/js/356.4424b46a.js",
    "revision": "4f0071017f7384bda32a4be030987014"
  },
  {
    "url": "assets/js/357.4097a1fa.js",
    "revision": "6ab93475d7b6ea89e2257dcf93fc31bb"
  },
  {
    "url": "assets/js/358.20b5fa93.js",
    "revision": "f4398fff55749e497fe31c1bc1ba36e5"
  },
  {
    "url": "assets/js/359.90a7de9c.js",
    "revision": "28736b31373b3dc31fded7de599d7ea1"
  },
  {
    "url": "assets/js/36.326dc593.js",
    "revision": "9ba13517e2d4411bb409152f5d58da14"
  },
  {
    "url": "assets/js/360.b456e507.js",
    "revision": "cf564eb9035aa647e46989420fc81673"
  },
  {
    "url": "assets/js/361.976d55d6.js",
    "revision": "441b517edb601660586da618e05bb1fe"
  },
  {
    "url": "assets/js/362.0b7b42de.js",
    "revision": "ff13087aaba0777e796083af2e33096d"
  },
  {
    "url": "assets/js/363.fa0c78a2.js",
    "revision": "71052286665fe1a66d0a2e6be9d56bf7"
  },
  {
    "url": "assets/js/364.987973b0.js",
    "revision": "44337edfafba05a890216055cf85fea0"
  },
  {
    "url": "assets/js/365.ae04be31.js",
    "revision": "824bc485c77606788ae109475c4f669f"
  },
  {
    "url": "assets/js/366.ba5225ac.js",
    "revision": "5dc72667072c5ede8ae9cf276fff521a"
  },
  {
    "url": "assets/js/367.d9dbf7b4.js",
    "revision": "f277267231c80f0c9d390ff346944823"
  },
  {
    "url": "assets/js/368.d6ed9273.js",
    "revision": "94a695243f26a5f9351c2d162bfb4042"
  },
  {
    "url": "assets/js/369.2f7b67c6.js",
    "revision": "440d492a17fa025f8c0e730ed271441e"
  },
  {
    "url": "assets/js/37.2907c6f2.js",
    "revision": "a8f1f07f80d43af186687f3306ddb74d"
  },
  {
    "url": "assets/js/370.f97fcd52.js",
    "revision": "6bc44796bebacb26d6aeaede9c1d1bcd"
  },
  {
    "url": "assets/js/371.1a88f91d.js",
    "revision": "d55f01214d2c6bedb44d073eaba5c5c7"
  },
  {
    "url": "assets/js/372.e7fdd8b3.js",
    "revision": "ab7f859bd077e96e652b724460882325"
  },
  {
    "url": "assets/js/373.2be3e2a6.js",
    "revision": "fb9c623f691c6e105ebf963a219eccdd"
  },
  {
    "url": "assets/js/374.8adf8c09.js",
    "revision": "0f93b938afd9006a408e19cc59e8f7d0"
  },
  {
    "url": "assets/js/375.64b315da.js",
    "revision": "f899f6ca87911d366bf1bd8aa6633e34"
  },
  {
    "url": "assets/js/376.b54f57b5.js",
    "revision": "23c68d7307a81b7f447b6118ab2da5e9"
  },
  {
    "url": "assets/js/377.e4e7391e.js",
    "revision": "22cd0faf061dcd89d5ecca8d589bf9f4"
  },
  {
    "url": "assets/js/378.2369f654.js",
    "revision": "7c2d0395898e14f0cf45bc6871c7197c"
  },
  {
    "url": "assets/js/379.71e574cd.js",
    "revision": "ca6105aa0ac7b9321c5962aaf6aa56b7"
  },
  {
    "url": "assets/js/38.bf28efc1.js",
    "revision": "54db583258a56c8309aede705195b761"
  },
  {
    "url": "assets/js/380.3affa06b.js",
    "revision": "c208e4c68309057255f57a6c131bae5c"
  },
  {
    "url": "assets/js/381.30649260.js",
    "revision": "9144fc054f5dae79629da2ee3b618939"
  },
  {
    "url": "assets/js/382.c6de52ec.js",
    "revision": "3ba441d7892d4e89dc836a777ae4a175"
  },
  {
    "url": "assets/js/383.9e4f9964.js",
    "revision": "267834619be5eeed837c4e4523ac52b8"
  },
  {
    "url": "assets/js/384.71a2de98.js",
    "revision": "7c7a1c6432a6c6af1acd76c9839f4642"
  },
  {
    "url": "assets/js/385.c284a968.js",
    "revision": "f4e47ff38e02d4b0cfabfe28c740b5a4"
  },
  {
    "url": "assets/js/386.3fa7ddce.js",
    "revision": "d4401c6f4e0c5ffaca70966fb6b59636"
  },
  {
    "url": "assets/js/387.1d13b7fe.js",
    "revision": "1521f13c2e2b6bfe51d8953a32586177"
  },
  {
    "url": "assets/js/388.15a170bb.js",
    "revision": "092b44f978863c4ad1d0dc7d19f2df56"
  },
  {
    "url": "assets/js/389.be6d5556.js",
    "revision": "c326f81d26775f9bac714b590d5d275b"
  },
  {
    "url": "assets/js/39.cd99011c.js",
    "revision": "44daab8846e4faa68424925b1a8a578c"
  },
  {
    "url": "assets/js/390.7bae1737.js",
    "revision": "dedc5209fa406f0fd2b05ee82117a105"
  },
  {
    "url": "assets/js/391.4e7f7c08.js",
    "revision": "11be6c0257387936c50f6c150f6817ed"
  },
  {
    "url": "assets/js/392.dcdd4aae.js",
    "revision": "7aea0079954319a79cfa078cb3b56101"
  },
  {
    "url": "assets/js/393.cd56d03a.js",
    "revision": "387fe63d5b6340ee3d3e5cff4761cad7"
  },
  {
    "url": "assets/js/394.05a12a63.js",
    "revision": "cde87d648c143587219c23e37a587833"
  },
  {
    "url": "assets/js/395.fe004f8e.js",
    "revision": "6df48f7828106e7d051f952567655594"
  },
  {
    "url": "assets/js/396.871ba02f.js",
    "revision": "189702fb650c74d0cdbe3275fcaf6eaa"
  },
  {
    "url": "assets/js/397.a32d6252.js",
    "revision": "940213a2f828a1de46a0f79336a0c134"
  },
  {
    "url": "assets/js/398.f32993b5.js",
    "revision": "4f7ac31286094b5876bdc6d075492f0c"
  },
  {
    "url": "assets/js/399.cdb375f1.js",
    "revision": "b935b960df658a46d674dba26c5eee73"
  },
  {
    "url": "assets/js/4.3e07fc1a.js",
    "revision": "5ffa60a8f2211ea6572737a54073ddec"
  },
  {
    "url": "assets/js/40.0dd58227.js",
    "revision": "327f8b33aa24d2213fe589ca0b28c1de"
  },
  {
    "url": "assets/js/400.92cb7bba.js",
    "revision": "eea1292ff4898b36743fcb87957ea9bd"
  },
  {
    "url": "assets/js/401.d30bef91.js",
    "revision": "175a25434e3048629bf0f8877e8e063f"
  },
  {
    "url": "assets/js/402.4a5485cc.js",
    "revision": "0ca8d8f33d740abd59a49fea3babe7a1"
  },
  {
    "url": "assets/js/403.65bea800.js",
    "revision": "7f27e3d29a015f184a96e638df8bc08d"
  },
  {
    "url": "assets/js/404.44061a6a.js",
    "revision": "922a2a9466b3bf2915148789d1561da7"
  },
  {
    "url": "assets/js/405.665f4a64.js",
    "revision": "e3eff78b340f48e4627b23f52ab9b870"
  },
  {
    "url": "assets/js/406.9fc2f47b.js",
    "revision": "c45fe1bac5a47fbbfd7760b7eb680e9b"
  },
  {
    "url": "assets/js/407.ad146376.js",
    "revision": "6f0a4e5ebdfaae314e1e84b3794fbfaa"
  },
  {
    "url": "assets/js/408.fbefa30c.js",
    "revision": "171fb93c42a3b84a0ca2ceadb62eda43"
  },
  {
    "url": "assets/js/409.bddf877e.js",
    "revision": "7761db6accb25f37097a508dce117f37"
  },
  {
    "url": "assets/js/41.d7b3205e.js",
    "revision": "fb514138542289c081752614bb6e4337"
  },
  {
    "url": "assets/js/410.a4cead57.js",
    "revision": "89bd0e98df18b23cd4ab981332453db1"
  },
  {
    "url": "assets/js/411.1f3c0ae6.js",
    "revision": "b85be7dc3ebdb86ff1871e43b4e054c3"
  },
  {
    "url": "assets/js/412.e1b9b069.js",
    "revision": "5534d92ebce640f80ecc225f8a3aa552"
  },
  {
    "url": "assets/js/413.12423901.js",
    "revision": "8ebb3ad84f9bb12f91eac59112fa5a2c"
  },
  {
    "url": "assets/js/414.05f2773e.js",
    "revision": "2b4c1715e4dee598855f83699435376b"
  },
  {
    "url": "assets/js/415.9f665d13.js",
    "revision": "20ac3b229a39f6aa6d676ab1782793a3"
  },
  {
    "url": "assets/js/416.a9e1e16a.js",
    "revision": "47e27f6d2ec98fbe6e469f19273ff507"
  },
  {
    "url": "assets/js/417.f547dc3d.js",
    "revision": "a41f68ef5721bc58fc2f0727211228c5"
  },
  {
    "url": "assets/js/418.8732acfd.js",
    "revision": "77cc3733fb3fb5ac7902354f3005f97b"
  },
  {
    "url": "assets/js/419.3aa09cea.js",
    "revision": "74bb9ced021903e94f43982a38484811"
  },
  {
    "url": "assets/js/42.d3160c78.js",
    "revision": "e2853942723dd449909c8f5b5de5ba86"
  },
  {
    "url": "assets/js/420.7870d55d.js",
    "revision": "6ef1a38c115f5871dff199fba5248978"
  },
  {
    "url": "assets/js/421.7c4d3606.js",
    "revision": "3c170e458f586db8c75f8ec27fd45968"
  },
  {
    "url": "assets/js/422.abcb2ca1.js",
    "revision": "3b27172408c960e1f8f0429a9a29c8b6"
  },
  {
    "url": "assets/js/423.64965598.js",
    "revision": "e748d144a1158f55d130f25f4a259535"
  },
  {
    "url": "assets/js/424.41f42730.js",
    "revision": "77a422b45dd7427f57c450927cb186c9"
  },
  {
    "url": "assets/js/425.009761ea.js",
    "revision": "ff323254fd6efad88eeab5c159057169"
  },
  {
    "url": "assets/js/426.ead70727.js",
    "revision": "d1c8f2b75033f68c214506a40d65299a"
  },
  {
    "url": "assets/js/427.668c50fb.js",
    "revision": "3f1bf439b902452e2364b916861fa585"
  },
  {
    "url": "assets/js/428.b1d6d80a.js",
    "revision": "faa4052ac21db86bff8a1c31b1487879"
  },
  {
    "url": "assets/js/429.86d06962.js",
    "revision": "e45d89cf95665019c2531915f8d7e02d"
  },
  {
    "url": "assets/js/43.4f9eecbd.js",
    "revision": "88de5a8409325c6a3277283201e371ce"
  },
  {
    "url": "assets/js/430.084047fe.js",
    "revision": "f3464889b91cc7c0c0f19abf30b08324"
  },
  {
    "url": "assets/js/431.d46bc62a.js",
    "revision": "028484718968001597cf12ebc531be6e"
  },
  {
    "url": "assets/js/432.c1091f70.js",
    "revision": "2761bc43b7e9d90b64a273b42ef6fad9"
  },
  {
    "url": "assets/js/433.987a4a5c.js",
    "revision": "8bdaed51486765999a0cd9e070e9b519"
  },
  {
    "url": "assets/js/434.fd2b2737.js",
    "revision": "e7fe119adeacac053bd3254754f0e56b"
  },
  {
    "url": "assets/js/435.dff3cd1a.js",
    "revision": "e28aec309b28134e435e09932d68081a"
  },
  {
    "url": "assets/js/436.1caede40.js",
    "revision": "f509debd892bc8af06d6f5880c310100"
  },
  {
    "url": "assets/js/437.422399a7.js",
    "revision": "f01cb2c98c0720cc173a33d2e61b9f73"
  },
  {
    "url": "assets/js/438.65732f66.js",
    "revision": "601d3d37d9fb98f1b4c7c6ba42d670e5"
  },
  {
    "url": "assets/js/439.9114f4bc.js",
    "revision": "60eb09cf66060f505ae9cef3a3a59f02"
  },
  {
    "url": "assets/js/44.98a5b843.js",
    "revision": "9dbb9f6de2841b065c67e30a5ab82e25"
  },
  {
    "url": "assets/js/440.1a2dd731.js",
    "revision": "54f5404edf0809dfe8a3b5fb047d102f"
  },
  {
    "url": "assets/js/441.5878adee.js",
    "revision": "9c68a85b1bcb503c24ec4d38f3e5b33e"
  },
  {
    "url": "assets/js/442.5a5c4b93.js",
    "revision": "99eed541b434b6b8f539a65fb8c859a2"
  },
  {
    "url": "assets/js/443.0f184f32.js",
    "revision": "991df141b0648c347c7beca74745a1ed"
  },
  {
    "url": "assets/js/444.3d0503d7.js",
    "revision": "960ec26212ee23380e4afdb54b4a368e"
  },
  {
    "url": "assets/js/445.f912445b.js",
    "revision": "f69aa931965b912f65067a3bb9f104c0"
  },
  {
    "url": "assets/js/446.d4aa9706.js",
    "revision": "60968ea2c7b07d0a5fbdb7441bfa6587"
  },
  {
    "url": "assets/js/447.aa89cab9.js",
    "revision": "99bd48c0a9708bfe3d3bad52c7cda01d"
  },
  {
    "url": "assets/js/448.24fc594f.js",
    "revision": "fe618dfa5d36d76a22f49627f837e077"
  },
  {
    "url": "assets/js/449.c9022587.js",
    "revision": "55c10846c0ff2a209ec398302794a0a7"
  },
  {
    "url": "assets/js/45.064bdfcc.js",
    "revision": "b4ca140cffd214942a5bcb1004f30052"
  },
  {
    "url": "assets/js/450.be6b3c4f.js",
    "revision": "753464266312f0513bd5d3769ec80df3"
  },
  {
    "url": "assets/js/451.7b68e385.js",
    "revision": "3b62ce4f2f3286a70341a6ecf72b240e"
  },
  {
    "url": "assets/js/452.9fcc4eb4.js",
    "revision": "154826029fe718592fa63a804e09c007"
  },
  {
    "url": "assets/js/453.952caddc.js",
    "revision": "4cc71f2b96509506b381203eb50c6e39"
  },
  {
    "url": "assets/js/454.57017ac9.js",
    "revision": "7cf4b7181c6ea2eace83f66e21b92f22"
  },
  {
    "url": "assets/js/455.78e185ce.js",
    "revision": "2e65b815d894b1e17e3fd884969b287d"
  },
  {
    "url": "assets/js/456.63688cdf.js",
    "revision": "2fdb1e39c59281d5650f878bdd2e56f1"
  },
  {
    "url": "assets/js/457.90754f87.js",
    "revision": "bfde70effd15f6e27b4b52f71a428d34"
  },
  {
    "url": "assets/js/458.4d802afc.js",
    "revision": "3fa85aedb281af893f9c0c38d31bb3a6"
  },
  {
    "url": "assets/js/459.16a12bdd.js",
    "revision": "5a7b92af72ad6c866a963796c9d3aba7"
  },
  {
    "url": "assets/js/46.55b2b729.js",
    "revision": "91384bf7e4ae9ff3d1f74e0dc826106b"
  },
  {
    "url": "assets/js/460.6e176afc.js",
    "revision": "c472249c5f08a8e9329c0b5897e2a3c5"
  },
  {
    "url": "assets/js/461.2654eab7.js",
    "revision": "1944aea56984f2877b5f4a175b4b1edd"
  },
  {
    "url": "assets/js/462.a7cfea13.js",
    "revision": "4ae9bf5f73f5a99ff7254d1df66540cb"
  },
  {
    "url": "assets/js/463.63b5d7ec.js",
    "revision": "7e70fa24e6b6584834beda2a155fcda1"
  },
  {
    "url": "assets/js/464.1cbc99a5.js",
    "revision": "25a7c9edd55cd501f30e18b92c7e2d19"
  },
  {
    "url": "assets/js/465.293af625.js",
    "revision": "350d58eafe557b4f1f1407344db60729"
  },
  {
    "url": "assets/js/466.18123f4b.js",
    "revision": "b90404f67cc45566acfaba64338af4d5"
  },
  {
    "url": "assets/js/467.f02a242f.js",
    "revision": "df271c6e5df8bdf2e9458712d7d5b6a8"
  },
  {
    "url": "assets/js/468.e13c38ab.js",
    "revision": "98ed732f880fe1a567807965840cbd5b"
  },
  {
    "url": "assets/js/469.1a4ea210.js",
    "revision": "94289d79ca3c4fb325a6f5be304f2ddc"
  },
  {
    "url": "assets/js/47.5923bde3.js",
    "revision": "8410d2caff9925173b15237a7a729c9f"
  },
  {
    "url": "assets/js/470.34ded08d.js",
    "revision": "c33c7cc1d887b2d779451bcd073a1618"
  },
  {
    "url": "assets/js/471.ddaff6e1.js",
    "revision": "81f4856534f9c3c4d1ee35c1ecfef79c"
  },
  {
    "url": "assets/js/472.40991391.js",
    "revision": "2a0801178e0ecb59b428eb0d91185379"
  },
  {
    "url": "assets/js/473.7171df5d.js",
    "revision": "1898d022b5d2aec12f9d75e86fda5ef9"
  },
  {
    "url": "assets/js/474.4e1fe09e.js",
    "revision": "45462aaa127b36b808f8cdaf8006e4ca"
  },
  {
    "url": "assets/js/475.f5bd727f.js",
    "revision": "28d95524d271f9e7cc7335b0c568597e"
  },
  {
    "url": "assets/js/476.91e784cb.js",
    "revision": "7eea92286856b4521c773033c3ebd0d2"
  },
  {
    "url": "assets/js/477.b4f0db02.js",
    "revision": "768ee3ffb5864c0c68027d8f5d951288"
  },
  {
    "url": "assets/js/478.b841731f.js",
    "revision": "48587e026f961a88d770a0579d827220"
  },
  {
    "url": "assets/js/479.0b06ddb4.js",
    "revision": "78ab25d11e37c28aab851981d522c440"
  },
  {
    "url": "assets/js/48.7b488676.js",
    "revision": "3f5f8f5667f746f0131d6d4bc9f93403"
  },
  {
    "url": "assets/js/480.b29a1442.js",
    "revision": "9b7b1106f722b4f3e167b1b042c62af7"
  },
  {
    "url": "assets/js/481.3c25034c.js",
    "revision": "ddeec1be07a4ea6c70772c8e8c3694e1"
  },
  {
    "url": "assets/js/482.13197758.js",
    "revision": "c768a9feacabbb2db729925ac4877f98"
  },
  {
    "url": "assets/js/49.e2a1edf6.js",
    "revision": "bc77026c5218217031f95259d84c6445"
  },
  {
    "url": "assets/js/5.fd193d36.js",
    "revision": "1b939f073dd45bb289f4d0ff0cba0563"
  },
  {
    "url": "assets/js/50.f608b4cb.js",
    "revision": "201449f1c7b76101876e7f8df1b42d23"
  },
  {
    "url": "assets/js/51.b628c17f.js",
    "revision": "3a2f906fe9d7d7afc173cdfe80dfc41b"
  },
  {
    "url": "assets/js/52.86eda9c6.js",
    "revision": "746ab4fc23c44313a3aea1e3dfe14408"
  },
  {
    "url": "assets/js/53.a76d39e3.js",
    "revision": "5cd580f1381243492cb09aa9598d2c13"
  },
  {
    "url": "assets/js/54.2368c901.js",
    "revision": "5167f392f1829b61f7ef36240760b07c"
  },
  {
    "url": "assets/js/55.ee2e6364.js",
    "revision": "d26385c8d0554551d2fed3f0384d5543"
  },
  {
    "url": "assets/js/56.e53626bb.js",
    "revision": "9275b5110b1ff4cfd27a383c91aa8462"
  },
  {
    "url": "assets/js/57.f4d5ba86.js",
    "revision": "bb95e3d184e19c805a445e7e526cf334"
  },
  {
    "url": "assets/js/58.0f6e9653.js",
    "revision": "2516d0cf3657436a6df9258b8618d8b3"
  },
  {
    "url": "assets/js/59.40ab1a2c.js",
    "revision": "e8b489ceeed3ed46f1927ab7dd9f980d"
  },
  {
    "url": "assets/js/6.52313151.js",
    "revision": "244dfc1505ddd0acd776e5e45c1a19ee"
  },
  {
    "url": "assets/js/60.d0ed38c8.js",
    "revision": "336d59c1b0448999e29695abb69b640d"
  },
  {
    "url": "assets/js/61.c0d230e9.js",
    "revision": "205823bee0e2b5b7ef20fcbb7c36f50e"
  },
  {
    "url": "assets/js/62.cbecb074.js",
    "revision": "b9103623c433a3892b7449f2413da2fb"
  },
  {
    "url": "assets/js/63.cef7b6f9.js",
    "revision": "ef0daf0e08c9a5c3fca242d0f0a4f236"
  },
  {
    "url": "assets/js/64.524f99b1.js",
    "revision": "c1145c8b814671cb935aaf68369928b5"
  },
  {
    "url": "assets/js/65.ddc68b36.js",
    "revision": "20e23e354ccdd3ed7ba6ec28753ab8dc"
  },
  {
    "url": "assets/js/66.c85dff03.js",
    "revision": "36c618f770a52a0239ec186525a86ebd"
  },
  {
    "url": "assets/js/67.4a8745d6.js",
    "revision": "9ce3257c938167245e56d37f6db8d4f1"
  },
  {
    "url": "assets/js/68.7e1a16d4.js",
    "revision": "bf059a87065b1f638a2693e2ce600a07"
  },
  {
    "url": "assets/js/69.3fb0da8c.js",
    "revision": "e323684deb6e1cc268f62fda01d9ec18"
  },
  {
    "url": "assets/js/7.1a7430d8.js",
    "revision": "5bc59ed376566e943bad427802f2ce46"
  },
  {
    "url": "assets/js/70.752a0bd2.js",
    "revision": "f609d349be5cd12acaaed19d1fa61012"
  },
  {
    "url": "assets/js/71.6f3cf8e2.js",
    "revision": "4172d18535e25ebade0842762e2ddc3a"
  },
  {
    "url": "assets/js/72.8e7ce96c.js",
    "revision": "a5d32d2b184cd77929fbad370c3e207e"
  },
  {
    "url": "assets/js/73.85e23564.js",
    "revision": "3166aa97595685f47a76281b407c5857"
  },
  {
    "url": "assets/js/74.d9925d1b.js",
    "revision": "de84285d1a6bb32253f0b9c17a0fa4e5"
  },
  {
    "url": "assets/js/75.2494f7b2.js",
    "revision": "d650735a1dc1dc0df725255294c748ea"
  },
  {
    "url": "assets/js/76.b9c41292.js",
    "revision": "24bae537b03c2d74faf2d5ed0f47980e"
  },
  {
    "url": "assets/js/77.08e82460.js",
    "revision": "3f7a3da899fcdeaa5bf5d43c5e026f5b"
  },
  {
    "url": "assets/js/78.76c89287.js",
    "revision": "6d862b47e0f5e7fa438be76466d1726e"
  },
  {
    "url": "assets/js/79.f286e793.js",
    "revision": "99e19d06f6770816bb5cfff2ddaf4fec"
  },
  {
    "url": "assets/js/8.7114076a.js",
    "revision": "73ec03939bdb9b83e4515dc0f3180636"
  },
  {
    "url": "assets/js/80.06fd79bb.js",
    "revision": "5b397913be002dde9e95a368b2e84cc9"
  },
  {
    "url": "assets/js/81.496a0068.js",
    "revision": "9c447cf0411606b43c601b9896845f5e"
  },
  {
    "url": "assets/js/82.04995b93.js",
    "revision": "26b7fee46394f621e0460639d8dac60a"
  },
  {
    "url": "assets/js/83.eb194afc.js",
    "revision": "a0a5bbb8a8a35ee2c8960fe1e054589f"
  },
  {
    "url": "assets/js/84.1ec1431d.js",
    "revision": "b601ac71dcb3155ac692441869a044aa"
  },
  {
    "url": "assets/js/85.df024844.js",
    "revision": "4af2a7a67f652caafe1fd6ed86550eb5"
  },
  {
    "url": "assets/js/86.cacdf9d1.js",
    "revision": "adbe5987c06c2a57438cbca5734fff33"
  },
  {
    "url": "assets/js/87.02393cf3.js",
    "revision": "2f3cc778851720ecf915694482509562"
  },
  {
    "url": "assets/js/88.35266278.js",
    "revision": "72ed83768edbeb56bfae9064cd86b649"
  },
  {
    "url": "assets/js/89.8154b4a2.js",
    "revision": "5fb907ae43050999e33a481649fce861"
  },
  {
    "url": "assets/js/9.61cfa723.js",
    "revision": "725dd59f22199d3998a68e6513980558"
  },
  {
    "url": "assets/js/90.4223b010.js",
    "revision": "27258e6a450de5f93cde3fc8a054e534"
  },
  {
    "url": "assets/js/91.f4a4f1fa.js",
    "revision": "5403970ab1ccae179b0aefcafba5336b"
  },
  {
    "url": "assets/js/92.47adc9aa.js",
    "revision": "ffd86a0f37d229006a3b53690b02b8b3"
  },
  {
    "url": "assets/js/93.4a33b72f.js",
    "revision": "5c795c3183eb5c85bca5eab96d01c99c"
  },
  {
    "url": "assets/js/94.1c5b281a.js",
    "revision": "28c4a16eb012950a46a16722a8f8ab0a"
  },
  {
    "url": "assets/js/95.1aa1874b.js",
    "revision": "f97f603f4a9cbe0975805f082c2aa5ed"
  },
  {
    "url": "assets/js/96.32f03c78.js",
    "revision": "117d6e7ac3a2b8153df689ce95bfdeac"
  },
  {
    "url": "assets/js/97.2e3f722d.js",
    "revision": "c6b3d3646609137c72c9fffe4ae26525"
  },
  {
    "url": "assets/js/98.d53f48f2.js",
    "revision": "f4f40fc80c1aac1ade311c8cb3beaa4d"
  },
  {
    "url": "assets/js/99.1f0d5e66.js",
    "revision": "7562bf56e451b08d74357d22832060c9"
  },
  {
    "url": "assets/js/app.939c29c1.js",
    "revision": "e05411f373d5a3a48547e948085b20aa"
  },
  {
    "url": "aws/access-keys.html",
    "revision": "1d4b1c6f688cb245e7b259e69c432dea"
  },
  {
    "url": "aws/architecture.html",
    "revision": "b20c73d0a998cc7ebae1d6a3b128e840"
  },
  {
    "url": "aws/arn.html",
    "revision": "7dd98d425d100c416f248d3444267b25"
  },
  {
    "url": "aws/aurora-pg-vs-rds-pg.html",
    "revision": "e08fd9f22ae996737478b20cf63d9c4c"
  },
  {
    "url": "aws/aws-abbr.html",
    "revision": "f794ae6a4ab7b3269ec4eca6de21b555"
  },
  {
    "url": "aws/aws-dev-tools.html",
    "revision": "2d6016b441cf0e57ad25940184f889b4"
  },
  {
    "url": "aws/aws-doc.html",
    "revision": "7a24f6910cb678b9120dc22caeb0cfd1"
  },
  {
    "url": "aws/aws-outposts.html",
    "revision": "ba5ba11bb93b8f70b5ab05ddfdaa320c"
  },
  {
    "url": "aws/aws-services.html",
    "revision": "ae74369a11bf3ea99d1c48a442b1f122"
  },
  {
    "url": "aws/cloud.html",
    "revision": "9938e636af1fcf6730c093286f868a20"
  },
  {
    "url": "aws/dynamodb.html",
    "revision": "85c9a08dc1ea312b15977f9eee0f72fe"
  },
  {
    "url": "aws/elb.html",
    "revision": "b6540976218970072a57f73b295ea4bf"
  },
  {
    "url": "aws/global-infra.html",
    "revision": "8d85c753a8a0fc0dd4386850764ada62"
  },
  {
    "url": "aws/misc.html",
    "revision": "a6fbbcd32738a79ba7935820ea9ad234"
  },
  {
    "url": "aws/postgre/index.html",
    "revision": "ae3808c8f6eb6c2787736540389eb9db"
  },
  {
    "url": "aws/s3.html",
    "revision": "e8d82db67c1bd3241a41ecfa22ce2d44"
  },
  {
    "url": "aws/vpc.html",
    "revision": "ad826b7a9dbe240b68623e3c357faf08"
  },
  {
    "url": "blockchain/solidity.html",
    "revision": "18067857aaa83aedf3371d9d4e662a5e"
  },
  {
    "url": "common/cache/cache-notes.html",
    "revision": "dd6029ee6118ca54098dc1eeff7ce854"
  },
  {
    "url": "common/cdn/cdn.html",
    "revision": "95407e3d0612360af2a6391c2463307c"
  },
  {
    "url": "common/clean-code/clean-code.html",
    "revision": "7e739ba17262be5185540ecfdd6fa769"
  },
  {
    "url": "common/clean-code/code-structure.html",
    "revision": "b5f2ceb1660d9821a8a512498a69ce18"
  },
  {
    "url": "common/clean-code/refactor-catalog.html",
    "revision": "e095ace6d0a4ccaa2b3737030bdb4fba"
  },
  {
    "url": "common/clean-code/refactor.html",
    "revision": "46214490234f358d493e1803fa0e79f9"
  },
  {
    "url": "common/crawl.html",
    "revision": "dc4ad28713d169ab2d1ae66d91ecdb79"
  },
  {
    "url": "common/cross_domain.html",
    "revision": "bdb967664cd6654743f37fdae4d41e51"
  },
  {
    "url": "common/debugging.html",
    "revision": "ef9ad3d0af36b17b27ed64b627994255"
  },
  {
    "url": "common/deployment/deploy-strategies.html",
    "revision": "758b5ed415c3a4fb6b524371e50b2e79"
  },
  {
    "url": "common/document.html",
    "revision": "cfed83eb50ce04fdc77829492de51283"
  },
  {
    "url": "common/draft-sercurity_web.html",
    "revision": "f29bd83b2493784e02848a933c2d3c29"
  },
  {
    "url": "common/event_sourcing-draft.html",
    "revision": "1a5fa47fb56642b6f6eca64aecbb2c2b"
  },
  {
    "url": "common/index.html",
    "revision": "efae5d37ccd25fcadf7a8cc67666a5b6"
  },
  {
    "url": "common/notification/index.html",
    "revision": "29127616343265cb534a8171eadddee6"
  },
  {
    "url": "common/optimize_be.html",
    "revision": "127e423a515363e57d1a77122e31496d"
  },
  {
    "url": "common/optimize_web.html",
    "revision": "effb3f7bb56c10aa87f8f181fe2b9646"
  },
  {
    "url": "common/realtime.html",
    "revision": "a33a6786d1058455d852359f8e2441be"
  },
  {
    "url": "common/security/software-security.html",
    "revision": "84f7702b2a8b5fc55fbd5076f5285602"
  },
  {
    "url": "common/seo.html",
    "revision": "63bf6091821166ae69335a5c714c4428"
  },
  {
    "url": "common/use-case.html",
    "revision": "67a466e1ab3a9fb8c0390b5e5b33f599"
  },
  {
    "url": "css/box-model.html",
    "revision": "8ffcaed817deb622bb77c3646cd5174b"
  },
  {
    "url": "css/cheatsheet.html",
    "revision": "8270a43a7087960590ead8c939295071"
  },
  {
    "url": "css/css-flex.html",
    "revision": "d406241a67f2b535ebba8fbd26f227e3"
  },
  {
    "url": "css/tricks.html",
    "revision": "936573dfe04dfd1e476ecec66d8115f6"
  },
  {
    "url": "db/architect.html",
    "revision": "2093b0c4af25b25b24fd5023e2de3345"
  },
  {
    "url": "db/cassandra.html",
    "revision": "085ff8898106c2415e2ac5d8ef851aac"
  },
  {
    "url": "db/consistent-hashing.html",
    "revision": "5d074d0ba81038c0825ffad9f17df732"
  },
  {
    "url": "db/couchdb.html",
    "revision": "c62bad43ac7231bdb6c39713191bf440"
  },
  {
    "url": "db/db-concerns.html",
    "revision": "e7e1351cc3b678eb2e5038ff495bd66f"
  },
  {
    "url": "db/db-table-design.html",
    "revision": "abaae65c16008249fe7b609fc53bfda6"
  },
  {
    "url": "db/db-vs-blockchain.html",
    "revision": "81699824d2e77f3a84a97fe90d032501"
  },
  {
    "url": "db/dbms.html",
    "revision": "ed8d4d4fee5fcf8f7fbc9070013e7a28"
  },
  {
    "url": "db/elasticsearch.html",
    "revision": "13e003dd5fbf384767fd2a4bf6a17693"
  },
  {
    "url": "db/id-generate.html",
    "revision": "006e606347ef114547390dacddad87c8"
  },
  {
    "url": "db/mongodb.html",
    "revision": "326fdb2c2b761d70f9407c2eed227aaa"
  },
  {
    "url": "db/mysql_snippets.html",
    "revision": "3ae5e7d42d2b63dcef5cd2f8950c984a"
  },
  {
    "url": "db/nosql.html",
    "revision": "a2d610a82a4def4b376164f14ea3911b"
  },
  {
    "url": "db/optimize_db.html",
    "revision": "e8baaf905264f7637a646c5d442c16bf"
  },
  {
    "url": "db/pinterest_shard.html",
    "revision": "019a409a8afcf677e686cc5472b00e50"
  },
  {
    "url": "db/postgre.html",
    "revision": "d4c5ac775c4c92ab961807c7d6b7c18f"
  },
  {
    "url": "db/realm.html",
    "revision": "661170788c6a46df16da95333b72da70"
  },
  {
    "url": "db/redis.html",
    "revision": "34cb20e01400bdec791e9acbb09114b1"
  },
  {
    "url": "db/storage.html",
    "revision": "0d7c6ce7ab0a755d7315254717b70bb2"
  },
  {
    "url": "db/tx-isolation.html",
    "revision": "028789f3a831f902aaf87e114e64ba68"
  },
  {
    "url": "db/use-cases.html",
    "revision": "003b45118d8508fdb3c54c2088318b3c"
  },
  {
    "url": "ddd/ddd-terms.html",
    "revision": "5822b7e762c2b3bbf875dda522d0e490"
  },
  {
    "url": "fp/fp-notes.html",
    "revision": "35bb5e05ba0427411c1ca4713e054bd1"
  },
  {
    "url": "fp/fp-principles.html",
    "revision": "909d6fe8e55f366661649f4edd0f2423"
  },
  {
    "url": "fp/fp-ts.html",
    "revision": "0043b0084af4b9524dc7dcce4987665f"
  },
  {
    "url": "fp/functor.html",
    "revision": "90141d324f3c1751e07e0614111edd19"
  },
  {
    "url": "fp/monad.html",
    "revision": "32254239b63bd9412b88ceb6bbd3f141"
  },
  {
    "url": "game.html",
    "revision": "58e5368fba5daf5ef69a55489a4eb04f"
  },
  {
    "url": "geo.html",
    "revision": "1af1678e49d919073f38a0cf86706a7b"
  },
  {
    "url": "go/clean.html",
    "revision": "81f7b8051a8b68451b56a7724d9773c5"
  },
  {
    "url": "go/index.html",
    "revision": "93db2951803f5fa0df5ca3b125dabc5f"
  },
  {
    "url": "go/the-little-go/c1.html",
    "revision": "f9939ee8b31b6e2d54084244253b2fb8"
  },
  {
    "url": "go/the-little-go/c2.html",
    "revision": "1a87fcde7676d3bc18060f59731be49d"
  },
  {
    "url": "go/the-little-go/c3.html",
    "revision": "4bde4cc10ba65aaf2a24afa0b9970df9"
  },
  {
    "url": "go/the-little-go/c4.html",
    "revision": "f2610c80ef1753fe48644ac0d95d3d66"
  },
  {
    "url": "go/the-little-go/c5.html",
    "revision": "61dba19e8442158c4e32ca471dbe3b16"
  },
  {
    "url": "go/the-little-go/c6.html",
    "revision": "80d8f2dabc032aa313e8e6301c10440f"
  },
  {
    "url": "go/the-little-go/end.html",
    "revision": "15b0412e1dd02171c848f1e51ce94290"
  },
  {
    "url": "go/the-little-go/intro.html",
    "revision": "36c2de6480398b568a7878fe6d173bd3"
  },
  {
    "url": "idempotency.html",
    "revision": "c1614f827283bc705dfd88c9fdd85ae7"
  },
  {
    "url": "index.html",
    "revision": "6cc63431bbfce2327f9b84f96d749968"
  },
  {
    "url": "javascript/axios_jqueryajax.html",
    "revision": "dfbc3d036d82a6f5d915f8bafdb4ea3e"
  },
  {
    "url": "javascript/bookmarklet.html",
    "revision": "2c993944e58a00b0133b17d2ba04cd77"
  },
  {
    "url": "javascript/clean-code.html",
    "revision": "0c70e9058bf909ff39f54790f67a1d40"
  },
  {
    "url": "javascript/closure.html",
    "revision": "6003c0ca39dbb58318c7947619c8aea0"
  },
  {
    "url": "javascript/data_type.html",
    "revision": "bbdab98d13ac36dcc405175d34652861"
  },
  {
    "url": "javascript/eslint.html",
    "revision": "429972f48c4aa31b1a17dcb828b211a4"
  },
  {
    "url": "javascript/hoist.html",
    "revision": "d479a87050ed641cddfc6d3ae1722f37"
  },
  {
    "url": "javascript/nestjs/nestjs-cqrs.html",
    "revision": "093203e8be059b71d2dd8e34e7c040ac"
  },
  {
    "url": "javascript/nestjs/nestjs-overview.html",
    "revision": "7c46072d61daa4bc1e0bb22316037d00"
  },
  {
    "url": "javascript/nx.html",
    "revision": "6a6432ce26233245929f3fb0a8715f9b"
  },
  {
    "url": "javascript/rxjs.html",
    "revision": "85dc251bc115eb6ee42c4fe5456613b2"
  },
  {
    "url": "javascript/stories/es6.html",
    "revision": "aa0e7508a2c75ea785e892abf1327c49"
  },
  {
    "url": "javascript/stories/weird.html",
    "revision": "92a02bb094ab96c77eab829729290b31"
  },
  {
    "url": "javascript/tricks.html",
    "revision": "69a0f82dd9a6221c9b5998836b42d43b"
  },
  {
    "url": "javascript/typescript/syntax.html",
    "revision": "5d19fdb93e26e881000f5aeb1b9864df"
  },
  {
    "url": "javascript/typescript/types.html",
    "revision": "086760b2942da804560c7e99120c4101"
  },
  {
    "url": "kungfu/97things4dev/0.html",
    "revision": "1f0d0ec4f8257e77a6378b7855768709"
  },
  {
    "url": "kungfu/97things4dev/1.html",
    "revision": "21317a0fb3039be0f0aa62e4cc62f45a"
  },
  {
    "url": "kungfu/97things4dev/10.html",
    "revision": "c97e3edeadf2c201f4fcbf9d528e9e74"
  },
  {
    "url": "kungfu/97things4dev/11.html",
    "revision": "962f43c79d5041e8f2ad9c9677faf1ff"
  },
  {
    "url": "kungfu/97things4dev/12.html",
    "revision": "e4197a1cb2ace553d70d1f7ba3c6ab11"
  },
  {
    "url": "kungfu/97things4dev/13.html",
    "revision": "46b087b51be97041b163f1c53583df22"
  },
  {
    "url": "kungfu/97things4dev/14.html",
    "revision": "5c172af9e9e85e211c761019bbac3feb"
  },
  {
    "url": "kungfu/97things4dev/15.html",
    "revision": "4e802280ddc331fea13b6158f7046593"
  },
  {
    "url": "kungfu/97things4dev/16.html",
    "revision": "530914952e63f72cb2dab8eb2f652136"
  },
  {
    "url": "kungfu/97things4dev/17.html",
    "revision": "d4be89b6779cefb0a6a3987afcc66e9a"
  },
  {
    "url": "kungfu/97things4dev/18.html",
    "revision": "9ea94ad9513fcea63965f4c2ce232e84"
  },
  {
    "url": "kungfu/97things4dev/19.html",
    "revision": "d9ec7d8d61ac4d5ca25e6f5221c40d90"
  },
  {
    "url": "kungfu/97things4dev/2.html",
    "revision": "7748044fd05596613802a5411e29281c"
  },
  {
    "url": "kungfu/97things4dev/20.html",
    "revision": "319819e303b89fec22e350bdca19548a"
  },
  {
    "url": "kungfu/97things4dev/21.html",
    "revision": "67d2835477e7737676df2dfd58d3b650"
  },
  {
    "url": "kungfu/97things4dev/22.html",
    "revision": "8feedd50f885abde098724c04bf9c981"
  },
  {
    "url": "kungfu/97things4dev/23.html",
    "revision": "1afa9be447231ac99cf60f95eb986b30"
  },
  {
    "url": "kungfu/97things4dev/24.html",
    "revision": "3cb9ea007a5a51c007ebf1a3c7e32ce3"
  },
  {
    "url": "kungfu/97things4dev/25.html",
    "revision": "d97b73ec254ab2772789574b03feaef7"
  },
  {
    "url": "kungfu/97things4dev/26.html",
    "revision": "fda0f6194993661b8096f80edbb96235"
  },
  {
    "url": "kungfu/97things4dev/27.html",
    "revision": "b745ba5f1e2e698d71557f2b1e744435"
  },
  {
    "url": "kungfu/97things4dev/28.html",
    "revision": "3322d8872a33188525f3f6f634e83cf1"
  },
  {
    "url": "kungfu/97things4dev/29.html",
    "revision": "c20b65e530ea957cbd35d18559c38585"
  },
  {
    "url": "kungfu/97things4dev/3.html",
    "revision": "f97821cfa47e4127e1e7e63ec4012605"
  },
  {
    "url": "kungfu/97things4dev/30.html",
    "revision": "a7605c110a7f6cfc9422028baa5ea6a1"
  },
  {
    "url": "kungfu/97things4dev/31.html",
    "revision": "3aadfd47e2c9c4d99e6ab6ed4ef6d328"
  },
  {
    "url": "kungfu/97things4dev/32.html",
    "revision": "d8dd1c58b6dd10510958ba8424db2cc3"
  },
  {
    "url": "kungfu/97things4dev/33.html",
    "revision": "74b5aa9a249d3bc54868621b5c2ed1bc"
  },
  {
    "url": "kungfu/97things4dev/34.html",
    "revision": "f376a90d17c5bd34e570321d77657968"
  },
  {
    "url": "kungfu/97things4dev/35.html",
    "revision": "5d2f034b12242d700e1116d1be5e0e17"
  },
  {
    "url": "kungfu/97things4dev/36.html",
    "revision": "282466e2dde382d1f0945a91130cd9f2"
  },
  {
    "url": "kungfu/97things4dev/37.html",
    "revision": "34582d78e808563d6a43d5d676ce94ff"
  },
  {
    "url": "kungfu/97things4dev/38.html",
    "revision": "344f2d9a6d1d1f9146fca75e32ebfbe7"
  },
  {
    "url": "kungfu/97things4dev/39.html",
    "revision": "8ec62bb47c0b0a471248dec47bab7ba3"
  },
  {
    "url": "kungfu/97things4dev/4.html",
    "revision": "47e22de81a30e044480f5cbe8f56c764"
  },
  {
    "url": "kungfu/97things4dev/40.html",
    "revision": "ee13e3a524652032421aa4c1d2117958"
  },
  {
    "url": "kungfu/97things4dev/41.html",
    "revision": "c5e26d5b919a7fa7b37d0820fe0d6675"
  },
  {
    "url": "kungfu/97things4dev/42.html",
    "revision": "9d96247149b3160fed7545c6d91266d0"
  },
  {
    "url": "kungfu/97things4dev/43.html",
    "revision": "c99068a661acc9d8caf5aa174780fdab"
  },
  {
    "url": "kungfu/97things4dev/44.html",
    "revision": "70d2dd0c4db84fa3a61967fc464df3e3"
  },
  {
    "url": "kungfu/97things4dev/45.html",
    "revision": "4ffabae0ededab7a547bf368769db959"
  },
  {
    "url": "kungfu/97things4dev/46.html",
    "revision": "0f2c6f2c14215cba4256e7f0499bba58"
  },
  {
    "url": "kungfu/97things4dev/47.html",
    "revision": "96fc55484e5605a9f0d0049bd44b6fcc"
  },
  {
    "url": "kungfu/97things4dev/48.html",
    "revision": "5afd304b1e384c2294910eca0a13b953"
  },
  {
    "url": "kungfu/97things4dev/49.html",
    "revision": "936cc51801cd9eb66b2c697c5c6fce5f"
  },
  {
    "url": "kungfu/97things4dev/5.html",
    "revision": "6b9df380726ad73d94b4b62ad1a1c566"
  },
  {
    "url": "kungfu/97things4dev/50.html",
    "revision": "d5f15ad7f4381cf95c88fe423f1078e8"
  },
  {
    "url": "kungfu/97things4dev/51.html",
    "revision": "a51789434b241b8d7c84702fd055f4e8"
  },
  {
    "url": "kungfu/97things4dev/52.html",
    "revision": "aca55c1af2f6c3523c6b60ca6e70d8ff"
  },
  {
    "url": "kungfu/97things4dev/53.html",
    "revision": "8fc7918f0a7cb1a026b10d720a31cb4a"
  },
  {
    "url": "kungfu/97things4dev/54.html",
    "revision": "b45460658172cb4dea41be13f97019af"
  },
  {
    "url": "kungfu/97things4dev/55.html",
    "revision": "cf59543824b4a998d2ae84047476497c"
  },
  {
    "url": "kungfu/97things4dev/56.html",
    "revision": "d3961fd8a5459c25f1a6750c207ea828"
  },
  {
    "url": "kungfu/97things4dev/57.html",
    "revision": "fe2475dfd63edc95abab94a07afa7603"
  },
  {
    "url": "kungfu/97things4dev/58.html",
    "revision": "f3f667ee8434962aff45e1974ec0f89a"
  },
  {
    "url": "kungfu/97things4dev/59.html",
    "revision": "db1582f75a4e01bb06fe2ca564675f44"
  },
  {
    "url": "kungfu/97things4dev/6.html",
    "revision": "c7ce27bfa41b2b20d15fb1e4cd6120da"
  },
  {
    "url": "kungfu/97things4dev/60.html",
    "revision": "da595c47e69223f692740f2ef9482e0c"
  },
  {
    "url": "kungfu/97things4dev/61.html",
    "revision": "33d1cf78f83840c59c43075dbf4d11aa"
  },
  {
    "url": "kungfu/97things4dev/62.html",
    "revision": "e719dc1293f95da302d9dded4d6f70ff"
  },
  {
    "url": "kungfu/97things4dev/63.html",
    "revision": "5d457c6fce630aa857e93b7d9778ec26"
  },
  {
    "url": "kungfu/97things4dev/64.html",
    "revision": "7dbecca04b37918f83bf2491bd341601"
  },
  {
    "url": "kungfu/97things4dev/65.html",
    "revision": "4ceca30825091fd87ef2b22f0c8c0fda"
  },
  {
    "url": "kungfu/97things4dev/66.html",
    "revision": "55d7b1a87ac2d9d4f9eb1ac016672861"
  },
  {
    "url": "kungfu/97things4dev/67.html",
    "revision": "7d40617f547b5ca73f174cfdb6544b64"
  },
  {
    "url": "kungfu/97things4dev/68.html",
    "revision": "dcb53e620a87fb7675dc637b6ffb387f"
  },
  {
    "url": "kungfu/97things4dev/69.html",
    "revision": "7e06c0637cfc6a8ffd11dcb298917e82"
  },
  {
    "url": "kungfu/97things4dev/7.html",
    "revision": "f3a169a99d195539fc567e95168a0b8e"
  },
  {
    "url": "kungfu/97things4dev/70.html",
    "revision": "e40a534a536b8240b04ec6355e0cc6be"
  },
  {
    "url": "kungfu/97things4dev/71.html",
    "revision": "8a8e95a6c1f9559ad16cce1ab49e035e"
  },
  {
    "url": "kungfu/97things4dev/72.html",
    "revision": "3100b2a8d3296e55b5e11ccc467fd56b"
  },
  {
    "url": "kungfu/97things4dev/73.html",
    "revision": "f4b8b2727c9937be9f77314060a38445"
  },
  {
    "url": "kungfu/97things4dev/74.html",
    "revision": "bd92949a4eb3ae0af9aec23de1ffa9e1"
  },
  {
    "url": "kungfu/97things4dev/75.html",
    "revision": "296865d8ada131c21b6642e37dfca23a"
  },
  {
    "url": "kungfu/97things4dev/76.html",
    "revision": "3bda70fc54000c137bd739f23071a0e2"
  },
  {
    "url": "kungfu/97things4dev/77.html",
    "revision": "a6d4a80719cdee870ac6115fd44920f1"
  },
  {
    "url": "kungfu/97things4dev/78.html",
    "revision": "64e0688e42d795e91c60774dc952c3d2"
  },
  {
    "url": "kungfu/97things4dev/79.html",
    "revision": "8d14fbb1c9ebe7ba137e83c40e5ef341"
  },
  {
    "url": "kungfu/97things4dev/8.html",
    "revision": "ef9e1417e0a4c9026f45849302a0e495"
  },
  {
    "url": "kungfu/97things4dev/80.html",
    "revision": "89fc61d724ad0f657959b64947f21ba0"
  },
  {
    "url": "kungfu/97things4dev/81.html",
    "revision": "7040642184cefeec998a530cadf9dd9f"
  },
  {
    "url": "kungfu/97things4dev/82.html",
    "revision": "b87e9b9659ac0d676138004e1c9b9b52"
  },
  {
    "url": "kungfu/97things4dev/83.html",
    "revision": "c6ce037d32ada8bd9ddb3268df2548af"
  },
  {
    "url": "kungfu/97things4dev/84.html",
    "revision": "c8558970594d37a52c31ab0bbd8808c1"
  },
  {
    "url": "kungfu/97things4dev/85.html",
    "revision": "d5c5d39bffd19d807aa809f0c2e72db1"
  },
  {
    "url": "kungfu/97things4dev/86.html",
    "revision": "8973ec127f5ed8d1f1c51b5578073450"
  },
  {
    "url": "kungfu/97things4dev/87.html",
    "revision": "95df1bec7fb3709123e1073a11ed0e0e"
  },
  {
    "url": "kungfu/97things4dev/88.html",
    "revision": "7b05e7cd4072ba859359ba92aa897297"
  },
  {
    "url": "kungfu/97things4dev/89.html",
    "revision": "c9525a8220c600e297e44425daa2fe6d"
  },
  {
    "url": "kungfu/97things4dev/9.html",
    "revision": "354b820df770a5081dc6e66664a45c31"
  },
  {
    "url": "kungfu/97things4dev/90.html",
    "revision": "47298216761737372ac0df9643dfed0c"
  },
  {
    "url": "kungfu/97things4dev/91.html",
    "revision": "032defb9a60035c6d7a933d58dc5bac1"
  },
  {
    "url": "kungfu/97things4dev/92.html",
    "revision": "ae560225424bb49426fd927385562e67"
  },
  {
    "url": "kungfu/97things4dev/93.html",
    "revision": "bfa65379a6a345a6615fb275514a3973"
  },
  {
    "url": "kungfu/97things4dev/94.html",
    "revision": "05d394fc5c380d64881025cf8450af63"
  },
  {
    "url": "kungfu/97things4dev/95.html",
    "revision": "4684628943fa472a377c7a58eb594f9e"
  },
  {
    "url": "kungfu/97things4dev/96.html",
    "revision": "d158ea931e50a53d5dad0a8cc480a8f7"
  },
  {
    "url": "kungfu/97things4dev/97.html",
    "revision": "edd154dc4ed3556083fed3f5c4863f73"
  },
  {
    "url": "kungfu/artofcode/c0.html",
    "revision": "38b44eb9d3c2389e89d5bd7a2e3b30dd"
  },
  {
    "url": "kungfu/artofcode/c1.html",
    "revision": "44ab7048e699f3b5fb4137c55656b08c"
  },
  {
    "url": "kungfu/artofcode/c10.html",
    "revision": "b53aceee3996d91c4074ec514d5417ee"
  },
  {
    "url": "kungfu/artofcode/c11.html",
    "revision": "31c41265f09537b90e7a501cc284a78f"
  },
  {
    "url": "kungfu/artofcode/c12.html",
    "revision": "b8db80318eef9f9b0d2dc692c9a4b50e"
  },
  {
    "url": "kungfu/artofcode/c13.html",
    "revision": "ccb7cc6db4093e6845edc800b4a9510f"
  },
  {
    "url": "kungfu/artofcode/c14.html",
    "revision": "5029a6684d5299684f0e80028f70bd22"
  },
  {
    "url": "kungfu/artofcode/c15.html",
    "revision": "292aeed51808b086dc3c040b3d1160fe"
  },
  {
    "url": "kungfu/artofcode/c2.html",
    "revision": "e435a618a1e6f33d18cbefad9709c58a"
  },
  {
    "url": "kungfu/artofcode/c3.html",
    "revision": "646c7af97cb061051bd40d92038cd4c4"
  },
  {
    "url": "kungfu/artofcode/c4.html",
    "revision": "9a4d21c9ea055af9c8e9e8ce87e6540b"
  },
  {
    "url": "kungfu/artofcode/c5.html",
    "revision": "382450397ab20b73044eb45d17387d71"
  },
  {
    "url": "kungfu/artofcode/c6.html",
    "revision": "ac6a806eded0fa1ce9618a51164ac7ab"
  },
  {
    "url": "kungfu/artofcode/c7.html",
    "revision": "d1f8a31b1f129c7fab0daa979ae5f8a3"
  },
  {
    "url": "kungfu/artofcode/c8.html",
    "revision": "0f396840f5beac37e0f1bc084a4db148"
  },
  {
    "url": "kungfu/artofcode/c9.html",
    "revision": "3c60dddaff77297640fe951bd88e1a46"
  },
  {
    "url": "kungfu/artofcode/parts.html",
    "revision": "a29a0cc8290290d9e1c2e2cb32937c81"
  },
  {
    "url": "kungfu/basic/boolean.html",
    "revision": "4342e60637be6a06df44b34511da189e"
  },
  {
    "url": "kungfu/basic/comment.html",
    "revision": "b9fdb09f64db62f2327377008a3affaa"
  },
  {
    "url": "kungfu/basic/loop.html",
    "revision": "baa54b863b4b681620d241cd1b384703"
  },
  {
    "url": "kungfu/build-microservices/c10.html",
    "revision": "e734ad35c0a6e88d0c438b7bae9c4514"
  },
  {
    "url": "kungfu/build-microservices/c9.html",
    "revision": "aa9b1268b92048aeeef778b157953890"
  },
  {
    "url": "kungfu/case-study/chat-system/index.html",
    "revision": "f12b5e89c70672caf9694712bd97a51c"
  },
  {
    "url": "kungfu/case-study/chat-system/part2/index.html",
    "revision": "55be8385d82a3b4a1512a49a34287033"
  },
  {
    "url": "kungfu/case-study/google-drive/index.html",
    "revision": "ffa02e85c5280580d8244341033e04d9"
  },
  {
    "url": "kungfu/case-study/instagram/index.html",
    "revision": "5447013ad0a59ec8d2718d2359b401f9"
  },
  {
    "url": "kungfu/case-study/nearby-friends/index.html",
    "revision": "2a91c58c9b8bf5621d90cb6f353aabce"
  },
  {
    "url": "kungfu/case-study/new-feed/index.html",
    "revision": "48a70f6487b975224eada8d642968eb0"
  },
  {
    "url": "kungfu/case-study/notification/index.html",
    "revision": "4dcab86ba846b9e59621796cb13e4a4e"
  },
  {
    "url": "kungfu/case-study/payment/index.html",
    "revision": "d5a1b345c0896556e71265e709f7c85f"
  },
  {
    "url": "kungfu/case-study/search-autocomplete/index.html",
    "revision": "a5b104b99658af9fdc1a2c1b78f9468b"
  },
  {
    "url": "kungfu/case-study/uber/index.html",
    "revision": "a98a0f5e9ad6d2ef2169efb166c8e2b6"
  },
  {
    "url": "kungfu/case-study/url-shorter/index.html",
    "revision": "0168c8c4eab4ee254c40cdb495d2082c"
  },
  {
    "url": "kungfu/case-study/web-crawler/index.html",
    "revision": "5a8e2e8736dec03ed8d7a4fe271709e9"
  },
  {
    "url": "kungfu/case-study/youtube/index.html",
    "revision": "d936116fd932fcdb83e6eb58ea4b9f1d"
  },
  {
    "url": "kungfu/cleancode/c0.html",
    "revision": "6f47ebf2be9213544470a6f702378782"
  },
  {
    "url": "kungfu/cleancode/c1.html",
    "revision": "1fa8e109c8e24c1487cef1e7d41f83d0"
  },
  {
    "url": "kungfu/cleancode/c10.html",
    "revision": "e3ff88f7bc492a85463e08d0e5d7cd20"
  },
  {
    "url": "kungfu/cleancode/c11.html",
    "revision": "aced65e661823ca8edf18e5cfc4dfae4"
  },
  {
    "url": "kungfu/cleancode/c12.html",
    "revision": "40e3f80fe02ceec2a825d409cd3b9145"
  },
  {
    "url": "kungfu/cleancode/c13.html",
    "revision": "cd9837a58e677bacd4852e15d7a642c2"
  },
  {
    "url": "kungfu/cleancode/c14.html",
    "revision": "53f41d90e4f766749343099eff8cd027"
  },
  {
    "url": "kungfu/cleancode/c15.html",
    "revision": "43405e73d2715a595a7ea0d8bfee2377"
  },
  {
    "url": "kungfu/cleancode/c16.html",
    "revision": "8ca1217f724032b180aef387eb8d5b2b"
  },
  {
    "url": "kungfu/cleancode/c17.html",
    "revision": "0b5f74cba05817b0827ecd9040b6220b"
  },
  {
    "url": "kungfu/cleancode/c2.html",
    "revision": "7186e3cd1dd0280c2a1978b31530d230"
  },
  {
    "url": "kungfu/cleancode/c3.html",
    "revision": "c6cb4d4e1bec8497b02989c8c0ba5084"
  },
  {
    "url": "kungfu/cleancode/c4.html",
    "revision": "07732118a588c848d9d4b9d0db332461"
  },
  {
    "url": "kungfu/cleancode/c5.html",
    "revision": "e0d89b1c160f837b7352d6f202763083"
  },
  {
    "url": "kungfu/cleancode/c6.html",
    "revision": "4a6d4b7254360147d13651614ce544e9"
  },
  {
    "url": "kungfu/cleancode/c7.html",
    "revision": "f4f9fbac6ad959794531e3005fcb4502"
  },
  {
    "url": "kungfu/cleancode/c8.html",
    "revision": "544e0ee3559b917ac17c8f1b45b396c9"
  },
  {
    "url": "kungfu/cleancode/c9.html",
    "revision": "8391268fcfebd457bbc139702c37cea9"
  },
  {
    "url": "kungfu/handle/handle_array.html",
    "revision": "ae90aaac6f193d67ecd7504aa8009a75"
  },
  {
    "url": "kungfu/handle/handle_date.html",
    "revision": "52d9f1060729e2bdfffba4dc9342417b"
  },
  {
    "url": "kungfu/handle/handle_number.html",
    "revision": "b39cd9f79d604d5ea06e7e1e51881198"
  },
  {
    "url": "kungfu/handle/handle_string.html",
    "revision": "096f37ff0ff07e9b14989f076930092c"
  },
  {
    "url": "kungfu/handle/mutation.html",
    "revision": "86a0683d16a9fe16c56182253adde25b"
  },
  {
    "url": "kungfu/kungfu.html",
    "revision": "6119346e42e3d4266688d84c61443b78"
  },
  {
    "url": "kungfu/letsgo.html",
    "revision": "42508f812e74434f0bf47f92b1b0359c"
  },
  {
    "url": "kungfu/nosql-distilled/00.html",
    "revision": "dc8164bcf598f0d3c371ce3b099a0630"
  },
  {
    "url": "kungfu/nosql-distilled/c0.html",
    "revision": "dc4360845b4888583ad27b9eefb12c0a"
  },
  {
    "url": "kungfu/nosql-distilled/c1.html",
    "revision": "e20c496a99f678d80a3ff5d33a24cb3d"
  },
  {
    "url": "kungfu/nosql-distilled/c10.html",
    "revision": "03123f9bf2d0f698b3854f1ca93e7266"
  },
  {
    "url": "kungfu/nosql-distilled/c11.html",
    "revision": "c089f57894ca910bdf3c8c8177013bbb"
  },
  {
    "url": "kungfu/nosql-distilled/c12.html",
    "revision": "2cf107756a27c90112c945fea36b5e4e"
  },
  {
    "url": "kungfu/nosql-distilled/c13.html",
    "revision": "8086615064cf3a705fa0b9e18bdf8b1a"
  },
  {
    "url": "kungfu/nosql-distilled/c14.html",
    "revision": "e196b2a86bd1e8e31efea2654fac5873"
  },
  {
    "url": "kungfu/nosql-distilled/c15.html",
    "revision": "791080de1843ba304aa0eb8e3075635e"
  },
  {
    "url": "kungfu/nosql-distilled/c2.html",
    "revision": "e1441daf016f575f34c9de9e3459aee9"
  },
  {
    "url": "kungfu/nosql-distilled/c3.html",
    "revision": "8b850706fa6c4ca4fa1a2e83309ed7c2"
  },
  {
    "url": "kungfu/nosql-distilled/c4.html",
    "revision": "e72a52d532de20c458acbc5af8916309"
  },
  {
    "url": "kungfu/nosql-distilled/c5.html",
    "revision": "55b651b99582fcd46fc2a94c01f9209d"
  },
  {
    "url": "kungfu/nosql-distilled/c6.html",
    "revision": "6f4edc9696079243bdc7a3441b1f5f7e"
  },
  {
    "url": "kungfu/nosql-distilled/c7.html",
    "revision": "9b039cb37af8d252a2d265225dc51a85"
  },
  {
    "url": "kungfu/nosql-distilled/c8.html",
    "revision": "ce5ab346e3307339f7ef42842d4b5baa"
  },
  {
    "url": "kungfu/nosql-distilled/c9.html",
    "revision": "4881f265fea434312d521e48e059f38a"
  },
  {
    "url": "kungfu/operations/arithmetic.html",
    "revision": "35c76a219072681bd7e746a72d441a1a"
  },
  {
    "url": "kungfu/philosophy/0.html",
    "revision": "b22b2d18207152b452c961499dc974e7"
  },
  {
    "url": "kungfu/philosophy/c1.html",
    "revision": "649d851eed3cf7d1aa903914ae8d1388"
  },
  {
    "url": "kungfu/philosophy/c10.html",
    "revision": "f0cfb4050fb654b220afd2afdff4c932"
  },
  {
    "url": "kungfu/philosophy/c11.html",
    "revision": "b4511ff381f477795b7453da99e87082"
  },
  {
    "url": "kungfu/philosophy/c12.html",
    "revision": "15a72c39e82ea3a1f06586de68cec1bb"
  },
  {
    "url": "kungfu/philosophy/c13.html",
    "revision": "7fef49fe4b3959a8dd42e2a499b94db9"
  },
  {
    "url": "kungfu/philosophy/c14.html",
    "revision": "9d14b73864d28b9dce876c5548fba554"
  },
  {
    "url": "kungfu/philosophy/c15.html",
    "revision": "e93f3e1ff071044b33cbcf9078c7b2db"
  },
  {
    "url": "kungfu/philosophy/c16.html",
    "revision": "08c427de31e6cdb5080a1aee11a2a555"
  },
  {
    "url": "kungfu/philosophy/c17.html",
    "revision": "de76ab85f4670001156b909701c99293"
  },
  {
    "url": "kungfu/philosophy/c18.html",
    "revision": "44ed1bf655e7c1087340feaf0eef48d7"
  },
  {
    "url": "kungfu/philosophy/c19.html",
    "revision": "0eeac85db068aa38346b168aba8652fa"
  },
  {
    "url": "kungfu/philosophy/c2.html",
    "revision": "851cfb681fea975e65cd614db193dec5"
  },
  {
    "url": "kungfu/philosophy/c20.html",
    "revision": "63acd7ee04cddda73e868dd60ea6e2a1"
  },
  {
    "url": "kungfu/philosophy/c21.html",
    "revision": "b9e0d3f50e58b26db3f95d20784a299a"
  },
  {
    "url": "kungfu/philosophy/c3.html",
    "revision": "a4da4d284be42df1d372ee024c5d7ac1"
  },
  {
    "url": "kungfu/philosophy/c4.html",
    "revision": "65c8399f4ee997ddb6e2a3c26a8e357c"
  },
  {
    "url": "kungfu/philosophy/c5.html",
    "revision": "04caf02bd5d4d4f8d51531c9c58455b0"
  },
  {
    "url": "kungfu/philosophy/c6.html",
    "revision": "9551dc6dc6e39029f629c144644f2e73"
  },
  {
    "url": "kungfu/philosophy/c7.html",
    "revision": "8e704d6cbdffd39c150950ddfe4b9627"
  },
  {
    "url": "kungfu/philosophy/c8.html",
    "revision": "45e6a0488d54cd54bf9948d9a8f72c1e"
  },
  {
    "url": "kungfu/philosophy/c9.html",
    "revision": "4360b91cdcec21567092b1dac12c76ad"
  },
  {
    "url": "kungfu/template.html",
    "revision": "1988f22d93dbbd866d826c2d35b7e21d"
  },
  {
    "url": "kungfu/tips4sercurity.html",
    "revision": "484f623ff2dcf599135648548e846298"
  },
  {
    "url": "network/address.html",
    "revision": "3f6f68e88e686778f0c425e1fbfa6e33"
  },
  {
    "url": "network/devices.html",
    "revision": "9938baa46321d22dac5512e577db5b7e"
  },
  {
    "url": "network/dns.html",
    "revision": "1252bfcd9f5b5a1a4aea96d090ecd359"
  },
  {
    "url": "network/ethernet.html",
    "revision": "bd502dca161aae2d99178a306a5365a0"
  },
  {
    "url": "network/internet-protocol.html",
    "revision": "0f45d90f2fc10ce0faf938f8669983a6"
  },
  {
    "url": "network/nat.html",
    "revision": "25ad998417c1615af24f7a8a2fbd5788"
  },
  {
    "url": "network/network-abbr.html",
    "revision": "49e822da1b456a35970c5a98ec6e6eb8"
  },
  {
    "url": "network/network.html",
    "revision": "4d6659cafca73feba62d6efda293ad5a"
  },
  {
    "url": "network/obtain-ip.html",
    "revision": "86d789670a4fb7b979be099568ccb0fa"
  },
  {
    "url": "network/tcp.html",
    "revision": "90ad882ffbe04c8583bbd57a8e92d916"
  },
  {
    "url": "network/websocket.html",
    "revision": "3ed479fc9f71667157b0720617719b01"
  },
  {
    "url": "node/env.html",
    "revision": "3d453ef11f265ec71db1fb57a28d669e"
  },
  {
    "url": "node/index.html",
    "revision": "b3e02be6d3081dc352c92ba136d68651"
  },
  {
    "url": "node/n.html",
    "revision": "9c46ded0ebbb9b8bbd0a67940bb9f6d3"
  },
  {
    "url": "node/node_arguments.html",
    "revision": "9396940b307ae38c70460eb0ec4efe57"
  },
  {
    "url": "node/npm.html",
    "revision": "f691392f569d06d626acdd94ebdb8dc1"
  },
  {
    "url": "node/sequelize.html",
    "revision": "321f72b39dc702276c5ed015a68e962e"
  },
  {
    "url": "oop/antipatterns.html",
    "revision": "1e9a18e2f328ea67130806901e239eb8"
  },
  {
    "url": "oop/design-patterns.html",
    "revision": "25db4db2abec6cd3b3a973d43e868f90"
  },
  {
    "url": "oop/oop-terms.html",
    "revision": "f17847670b9804725bf1b2ea3100ac62"
  },
  {
    "url": "oop/oop-vs-fp.html",
    "revision": "0308a10945ef451c08190741c9691bf5"
  },
  {
    "url": "oop/ts-designpatterns.html",
    "revision": "c4165ff7eee9974cbd07f52bce5bae47"
  },
  {
    "url": "php/clean/autoload.html",
    "revision": "caa01ecd4c8f86a8090c61a8bb28d80e"
  },
  {
    "url": "php/clean/cqs.html",
    "revision": "c1c54356a41fe7d45454eda606e37012"
  },
  {
    "url": "php/clean/deadcode.html",
    "revision": "1d389171e76ad43d4b381559774a6f0e"
  },
  {
    "url": "php/clean/dependencies.html",
    "revision": "076e2a3c107be8289b9651b8e2eb46f7"
  },
  {
    "url": "php/clean/di.html",
    "revision": "5334b768b6e0232ecd696fd8a634c86f"
  },
  {
    "url": "php/clean/dip.html",
    "revision": "e60ab55888cc8d1bae1805be5c9f793c"
  },
  {
    "url": "php/clean/early-return.html",
    "revision": "5cd9dbcec34e0427e3eeb119b1fbf1a5"
  },
  {
    "url": "php/clean/fluent-builder.html",
    "revision": "080518af40b7f65dbbefc89307b66c79"
  },
  {
    "url": "php/clean/index.html",
    "revision": "b0f3cd61e30b826e7252d83356555974"
  },
  {
    "url": "php/clean/lod.html",
    "revision": "54970d9e8b000b656ba05770a1becd9d"
  },
  {
    "url": "php/clean/refactor.html",
    "revision": "1a085b4685312da123b5b6e9068bb7f5"
  },
  {
    "url": "php/composer.html",
    "revision": "47628b8e1d4e278ad1b46c90b975aa52"
  },
  {
    "url": "php/crunz.html",
    "revision": "77e2c6e5efb80d0f8d6088d1091130ed"
  },
  {
    "url": "php/laravel/best-practices.html",
    "revision": "0d30225d66f57c7c61f863302d5f5c1e"
  },
  {
    "url": "php/laravel/laravel-notes.html",
    "revision": "48ec0e292f4a784d9505a13edea5cd2c"
  },
  {
    "url": "php/laravel/laravel-vs-symfony.html",
    "revision": "0c23eefdf96d68a525ec27d60f828353"
  },
  {
    "url": "php/laravel/patterns.html",
    "revision": "9b12c25fd7b0fc6b61f0c8041f98ca7b"
  },
  {
    "url": "php/magic.html",
    "revision": "60ef4e46fd698ab963ebe71a0a16607c"
  },
  {
    "url": "php/notes.html",
    "revision": "757b4eeed11e7e98c0a1dbee3be136b3"
  },
  {
    "url": "php/oop.html",
    "revision": "2e209026b35e814cc9c7940bad25fa50"
  },
  {
    "url": "php/php7.html",
    "revision": "335008164d8e09baed8f34758ba8f2af"
  },
  {
    "url": "php/phpdoc.html",
    "revision": "bb0c28feca22c48ba819e5f8e6f14c08"
  },
  {
    "url": "php/reflection.html",
    "revision": "39c0137d79fb1784f2295362cb30c9b3"
  },
  {
    "url": "php/tricks.html",
    "revision": "56b1b71e8c6e11ade452cee0c2cefb69"
  },
  {
    "url": "php/wordpress.html",
    "revision": "339f8bae927f80e907ae076e240d0b6a"
  },
  {
    "url": "quotes.html",
    "revision": "185ecf73a7079ae3a33c296a7421f26f"
  },
  {
    "url": "react/mobx.html",
    "revision": "88fb2177334c653b6260f08c5830ecbf"
  },
  {
    "url": "react/nextjs.html",
    "revision": "ad98951b3680a94e50dd58c4184c7207"
  },
  {
    "url": "react/react-native.html",
    "revision": "5c637d2db15219d1dab0b1564ab4726a"
  },
  {
    "url": "react/react-vs-vue.html",
    "revision": "029656fc06e0aea24ecec0597e36ca4f"
  },
  {
    "url": "react/react.html",
    "revision": "a1c78bfb624c8f5dcb636dd1b7e06ab4"
  },
  {
    "url": "react/vue_react.html",
    "revision": "1f7cb66c97c681eab30bccc2669f4f27"
  },
  {
    "url": "refactor/notes.html",
    "revision": "4b2648cdd29d9cca9346b8065253e388"
  },
  {
    "url": "ruby/ruby-notes.html",
    "revision": "d28d4abf802b1125435ec06eb2461ed2"
  },
  {
    "url": "ruby/ruby-vs-node.html",
    "revision": "166e5fc53f0860126b76c3863a4c7f31"
  },
  {
    "url": "scaling.html",
    "revision": "ab760195e9ecb750fa63450af59ab510"
  },
  {
    "url": "snippets/access_object.html",
    "revision": "ab3c616f4a1b59a3289261552ed18ec8"
  },
  {
    "url": "snippets/async_await.html",
    "revision": "7b78a8628f12b14d43af1544726dad27"
  },
  {
    "url": "snippets/custom_promise_all.html",
    "revision": "8f5797a9c73f3ce4b7683b29c1095d50"
  },
  {
    "url": "snippets/event_storage.html",
    "revision": "de34de596bd1d9a1a1b1a5657e62161e"
  },
  {
    "url": "snippets/firebase.html",
    "revision": "574cdb37be1ffa41e331dfcf860fc0d9"
  },
  {
    "url": "snippets/jest.html",
    "revision": "30b9f026c5d0147966e1e35b2604c3da"
  },
  {
    "url": "snippets/mocha.html",
    "revision": "942d81533caece6797195d8055e478fe"
  },
  {
    "url": "snippets/regex.html",
    "revision": "09f6276500c5e22d877350a22930a841"
  },
  {
    "url": "tags.html",
    "revision": "b6f2b7c3643b7aa3357fc251ad3c299e"
  },
  {
    "url": "terms/12factors.html",
    "revision": "623c115ce5572ff36783c3a62eabe33f"
  },
  {
    "url": "terms/architecture.html",
    "revision": "61a4d6787dd15193c3d476a64a78d09e"
  },
  {
    "url": "terms/concurrent.html",
    "revision": "baf61f240c26185e49e4d92bf9a91466"
  },
  {
    "url": "terms/di.html",
    "revision": "e23447b916970ca396464700f6d9d3b2"
  },
  {
    "url": "terms/fundamental.html",
    "revision": "d81d85292faefb0c02a371c3b2eaacea"
  },
  {
    "url": "terms/javascript.html",
    "revision": "b65b5295d9ed6750d6379e7f66504e03"
  },
  {
    "url": "terms/patterns.html",
    "revision": "5a7004726ba26496e1e6d5434e359c2b"
  },
  {
    "url": "terms/payment.html",
    "revision": "82dc2b845e12449ecd9d9da2b3b766fd"
  },
  {
    "url": "terms/principles.html",
    "revision": "edeb42c05e400f595d314992ff7d057d"
  },
  {
    "url": "terms/rules.html",
    "revision": "d3bee18db4dac1fab58b68f41bd539d1"
  },
  {
    "url": "terms/testing.html",
    "revision": "0629b21b668d8e04303e0fb2a879afb1"
  },
  {
    "url": "tools/chrome.html",
    "revision": "127e7f684d8c29d9edc52c0c710bcf6f"
  },
  {
    "url": "tools/docker.html",
    "revision": "194d1c418999fbc5a580b85d700f936a"
  },
  {
    "url": "tools/elasticsearch.html",
    "revision": "05cb5ad1d522062fab2175e4630b68f5"
  },
  {
    "url": "tools/gg_app_script.html",
    "revision": "d4f18738dc09b5ba809b5905d89035ed"
  },
  {
    "url": "tools/graphql.html",
    "revision": "e18b01b767830cd2d6c1e187cbb9e0b0"
  },
  {
    "url": "tools/k8s/k8s.html",
    "revision": "f83f0cd77d040cfa8027b68f2812f23e"
  },
  {
    "url": "tools/kafka-vs-jetstream.html",
    "revision": "c3997438e9ecfcc0b5d5c16d414ffb24"
  },
  {
    "url": "tools/kafka.html",
    "revision": "0dbdfb277a9d88e26a48deba03bdc803"
  },
  {
    "url": "tools/plantuml.html",
    "revision": "1cfd34155f69fb56299cf61d4389b8d4"
  },
  {
    "url": "tools/puppeteer.html",
    "revision": "1ad0f9e3474871e2beee96216255e430"
  },
  {
    "url": "tools/redis.html",
    "revision": "9dbc8b1e627e90a12cd32172cfacdbef"
  },
  {
    "url": "tools/rfid.html",
    "revision": "0a39e8820e5179ceb8fc3e3a419c64f0"
  },
  {
    "url": "tools/selenium_ide.html",
    "revision": "f5049343c6d072f185778308c61df872"
  },
  {
    "url": "tools/vscode.html",
    "revision": "cee4896eb256100af75861d62659a780"
  },
  {
    "url": "tools/webpack.html",
    "revision": "85ef14df8ce6cce78dea41481945fb6e"
  },
  {
    "url": "tricks/compare.html",
    "revision": "c3e07984dbfb6037ef5ec4c118f5623f"
  },
  {
    "url": "tricks/git.html",
    "revision": "8e61e653c8e44498a17aadb266205d14"
  },
  {
    "url": "tricks/linux.html",
    "revision": "94c364a4eca7c56ab6561256fd15fb8a"
  },
  {
    "url": "tricks/mac.html",
    "revision": "79c855ca605926ff334fac1601311157"
  },
  {
    "url": "tricks/misc.html",
    "revision": "64aa85fca686750c89d9375c1f395bde"
  },
  {
    "url": "tricks/setup.html",
    "revision": "b7e59eb5faecb360d7e94fbd012191b4"
  },
  {
    "url": "vue/communication.html",
    "revision": "7a76ca11cf3005ef8d45f3456a2c5309"
  },
  {
    "url": "vue/dynamic.html",
    "revision": "a28dddc72291325b2b1b0fef559880ed"
  },
  {
    "url": "vue/events.html",
    "revision": "645df1de6c513487d8ddf4e3aa7096b3"
  },
  {
    "url": "vue/references.html",
    "revision": "6e3fa3a09366759906ef151498a4c872"
  },
  {
    "url": "vue/shorthands.html",
    "revision": "b60e34faea7149947b1f1b6cb7f580e3"
  },
  {
    "url": "vue/test.html",
    "revision": "bc20824892a15f30dfaf8158580b3a62"
  },
  {
    "url": "vue/tricks.html",
    "revision": "85f4c6581bd56a1a78d6c883f9d8e14f"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "a1e749b643fa25653d84f763f58c934a"
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
