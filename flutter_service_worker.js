'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f7fa44c536b992c1b2dc3e3e2bb7490d",
".git/config": "c74dc491e376cad4891431de22bda70e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "384dd136603a80ac599e23dc3c22c711",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9e70775d3e35c30e45d3ce2ff5abdd22",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "526fd0b22f892a7cd875af57bc4718b8",
".git/logs/refs/heads/main": "aff21c89ba9d35db0afb6f860463d06d",
".git/logs/refs/remotes/origin/main": "daa901eaf82f28db9b5d7334789b9c34",
".git/objects/03/a8546bfaea6cfbf9c30373418d4f66837a473b": "f6fe53e611e25cc9e52b6a77cad850f5",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/4e10f6471007e87a49a98e99f4989df7c15079": "966fe9030c07f587428e60fd0d659531",
".git/objects/08/ae9c909892f3e4e920bc71d00474743ad34ec0": "9df1fd0f3a4f0ce9072e350a929d4630",
".git/objects/0c/0fa8a801caf7561c39f2de8e5981ce054473e8": "5ea5491603f976a3d8bee34032992e17",
".git/objects/0f/99a3cfd62f211b95a85c5f23cb6d7b1832a1b8": "be68790c7fd09ceaa8e1390714d24646",
".git/objects/10/30ad4adccb0b17e832e97c37504c05a3a58a90": "f8d5db6660ecb8ba5b0361f3023f6e36",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1b/7c5732bfe65c62721adf8f74519a0ce6e06fb4": "fb024cfb8022e7ee947adfce1fc869f1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/3aafb1fff7c6d61822733f8accb8e39856ad08": "3003eab2b98ab4c8f142eb03dfa26f91",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/9c844b2cf50893b42a58e34eafcf4c1cffb88d": "1c825c13e11c4fbb4299eac19639d79e",
".git/objects/27/d8e283afdb0581f73c0dfed623590a696bdeea": "a797ffdaf9273d54f9785c5a050c84fb",
".git/objects/2c/a9748b1c4b70bcfd5c629c598f449bcfeb4093": "c3709458dcc09cd5dda3e59a7928b627",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/ef70da8f73894f171d35d95d145c0beaf46489": "01d1f0694f503337d3ff64e9b34b9b43",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3f/ca1558f6ffab56f3327dec8f72ae41e62dc291": "48d58ac4339c52f3b3d362e34ab80fd4",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/7577a5aec4a1290f87ec7ab2e281eeef469b03": "5dc1f436407c9ba50a36c0c6f42aa8b7",
".git/objects/43/c748f00b2784c0bc9194722d8d4679bdaee4c2": "853e20507dec7fa3c0add62eb5280064",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/7aed514022755d783f683409a01d9728a072d2": "b23b51b86ec270a28a461cd819389a2e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4d/b43371cb27ced778ccba0d3aec599bed05cada": "0b1b905bfeb83774e8b4bdcdd01309ca",
".git/objects/58/69cf8faba63be0b84a2e4ad45541acd61349c2": "ae7be85c8e404a68f6cd5128f13d0b51",
".git/objects/5a/2f828046d75b78ca0d40920d4a977f9bc18629": "1251675c1fbce9eef85b9be8fd0b2102",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5d/0d607220ef304f39646993cc22ba92780ca7d0": "b543a3738c7e6c7076c5681d6fd46d0a",
".git/objects/5d/911135b5057fda2dd1ea5a3dc6bc48b2395648": "4975d052fbf19e0c8b106905e0062087",
".git/objects/62/260f50e46f1b244771530c2054fab474e1089f": "2258ba4a541fbac232abf6237a6aca73",
".git/objects/67/e243043906afcbd9e7b953de58919679ef2617": "e3cd0a36ce89f12d262a12ba1c103759",
".git/objects/69/462931cbd03ef4c74c78914466cb46f1710eb8": "ce6ff19283984597b1f680129b76817c",
".git/objects/6a/712a0f575354c00c85e35f2aba475e64036d8f": "8a8a2b40905528a9f176ca8c1c8d9e6a",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/0b5cfc03c252c6bc5db11b0269f1b3851e8983": "51631b481ac3836c2461c69cb3cd49ea",
".git/objects/74/dce05d5700bbe89130efb71e1a9173ba596af1": "877b6bc328b6950ef712f76872187f7d",
".git/objects/75/f556265e662529d5a4769a47386da23d7d02bf": "d58ea6b4034a17205c959e38a3cc1aab",
".git/objects/76/44fcfd3bc37c4da55321a0c370bda5f00f1ca5": "4dd1a54db16496fd1b68622945e78b61",
".git/objects/77/de90ab1c3bb2d1aaf0eaacbb1b7d7d70e25c33": "78a4354950324541bb86725f254f89a6",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7e/34be1c8f3fafcee3f8dab539596f09a79c499f": "6194b438888189e503361c8c636115f8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/fff3de0d89062e4faac4c2e54ad21861f2ca96": "65822b10f16643d391647f471fde5df8",
".git/objects/87/3b3d053214516d724b304911fbebdbe7a5dd2f": "1965711f96f14108223bfacc628d2a28",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/2d2d240f8de8706018888059ed7e2383e36590": "8d84db15bd8f18867c8461fa263ef84f",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/fb44f1d837646eb329ff58b3ec54b3fd9538f0": "e016422e03441148bdfa8237de628971",
".git/objects/93/a327636e323cfb7442cbe00ce9ba5f2f4c5075": "3cdcbedc284ad8b61a309b8a4b38fd69",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/8938ff7a614870595554371d05d7cad0944065": "b36bcac35b6d571078147e7152aeca5f",
".git/objects/a2/2a453b8da31c3999db7bb5b4a41bc0fadba445": "47bfbdfbd80c022621e1df555d8ed911",
".git/objects/a4/9b76d09921540b602314bae9cb65c4dd6f2d54": "e39167a23752a00ada28edce9092dbb1",
".git/objects/a7/6149888782c4a8a73f2991f617939ee9ba014a": "f63b05087b546ea467e0d50285e58f1e",
".git/objects/ac/282fef57b3a421470c9d13b8a7774ad72263ff": "860984e20c61b1b9c7dde20970d7fdf2",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/b74fd4d343c09ff9726ce0eb824f1219c123fb": "b3432d7a05232589beece681b080ebcd",
".git/objects/b3/92b494206fbed99ecc5166e65c73446f1df747": "a3b03d0f015c417783667aeab4473eca",
".git/objects/b4/1d836c54e76584400d32967ff084c495145703": "b5d7dde789cf1bdd8f1bb9e74fdebee1",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/cc3d6176065c06edd3a2fde1bb86d8730d5d27": "ae1d1e81a136f4273d7d5f5e4aaf547c",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/a729eb0cd76aa5ab637c5f087a0e5ef76b3bfe": "1382e2607e63dc1f3b9237530da38a51",
".git/objects/bc/f16b8f5ded10cf86d263b12934c3767d3eda8f": "007eb88e6c81a5d543f102c6184775d8",
".git/objects/be/3b5e12799ff5dc443a365825dfdc238a31f7b0": "297aa2b88fa28971da161255eee9b7a5",
".git/objects/c3/b5c19680b22fe40e273d01081f1b6bf99092ac": "a43d74e8309be554b72ab5559f48a67c",
".git/objects/c5/293560f6751e1679227ec917df35a7ddb6c04e": "43dd53622c69ea126d4923946b9d96c3",
".git/objects/c5/c3db4b2f8e5a31cb3d2f54deef930b8998a06c": "8232a4a0b5d948e6b950e66960f6d7aa",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ce/b50015519079d8bdc6ce64f650c14b93d1ffa6": "f8234d16cb31cb3f874917ca56e70a8f",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/21174ebee705b72dd84a450386be1f62dff4d9": "53bc64f0a7989c65e21be6cc4d171316",
".git/objects/d1/5dd3235ca1452f12e6aabb74f025bc7ab3b7ce": "f6098f154de7d7e7b2370c526452f688",
".git/objects/d4/2b01e718f1879e5c8e42802c272149f01eec14": "a57bd6dd20c36aff87a6cf1f3934ae10",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c68fcdccef576bad315528bcec748bbf1778f0": "5aabdc3bec5799e542cb18c5ca6abec2",
".git/objects/d5/4c86b142b9215bd4344c7b16d4ac2d9477a828": "298e35a9ce117ea12f362df2448f9972",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/ddab609f98ad4865061bcb269f6402a5b704c8": "c15ebeecff7a51bcc667abdb3e73f1a6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/05649fd456e39db7ee2ef81fc6c9196469d889": "0eeae7d7fd1fb3daff79646f006b6898",
".git/objects/d9/084a28d392a02704321ac5abd6a932691e8bb1": "ea1e256157f2ed210c78045993137d3d",
".git/objects/d9/8af88963bd55b682838456599b7cd41687c5fa": "e492869b7af9899801a17c58ae4b2dfe",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/da333b603a0d51a09c6e4e783928feaa650f86": "2ac4615226d82292d2dc7f3ee82b55d2",
".git/objects/de/f6728d6f42e98e5eac44bc22ad9e6e3bf27a65": "2c54b294f5ced6d44fe4d5ab689ef23b",
".git/objects/df/f7972e12a6f720136d9806c77a43ec27eb5065": "1941a7f6f4aaf052ec524291a6adaac1",
".git/objects/e7/cfb3d44a2318095370ff621a5c1477e4148d2b": "d7f14da793f9c3367bcc015a6009cc78",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/2a8be15bc558290c089833813aee46510a6d37": "14d2c6410c66144dd2ccb675e4cc7a2f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ff/fc02bda666b12748191ca9302a203c5c8144f3": "b380b28e3765eb7948a78356859a8526",
".git/ORIG_HEAD": "930843010bf43bc9d629932be6bd4ca4",
".git/refs/heads/main": "444be4ef45c0385b4ae3452d27c779ef",
".git/refs/remotes/origin/main": "444be4ef45c0385b4ae3452d27c779ef",
"assets/AssetManifest.bin": "e331b98e493cb0773e444ad8459977aa",
"assets/AssetManifest.bin.json": "0cc68207d691ed32d5b82f64a1d775ef",
"assets/AssetManifest.json": "fd41d24f5266f6c62ff48082b24d1a74",
"assets/assets/images/logo_app_bar.png": "7b76d69a057c833b5bf66edd41b3e9fa",
"assets/assets/json/data_racas_cao.json": "13e06e6c1f1529368106d931607d0996",
"assets/assets/json/data_raca_gato.json": "e9ce77355e56bb87ea8b117c6e781666",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "a89060001d9c3079f0351f7725586aa1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "324014d2b34b45d941a5e346b49f4aa7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3bb187cb7eded379c2834f7123171f12",
"/": "3bb187cb7eded379c2834f7123171f12",
"main.dart.js": "1d62382d676aae7e5b86bd79be184c13",
"manifest.json": "87685db0e5eca13aec3d7865adee9891",
"version.json": "30c405d9f1a36e66b970170a440daf2b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
