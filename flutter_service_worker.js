'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a02b5207b1b47fc9ebcb521d194f71a5",
".git/config": "c74dc491e376cad4891431de22bda70e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0000a59ac9c6f2ea05ad473df8163ac1",
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
".git/index": "d213505365ce7543063e54000f03f672",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cdcfe0f911adeb1797c42b81fea4f7b7",
".git/logs/refs/heads/main": "f1c8801924c4f7ebe05fd5ff9f4f13c5",
".git/logs/refs/remotes/origin/main": "64e957b9f594c2c7b741f79d9bfd3889",
".git/objects/03/a8546bfaea6cfbf9c30373418d4f66837a473b": "f6fe53e611e25cc9e52b6a77cad850f5",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/4e10f6471007e87a49a98e99f4989df7c15079": "966fe9030c07f587428e60fd0d659531",
".git/objects/08/ae9c909892f3e4e920bc71d00474743ad34ec0": "9df1fd0f3a4f0ce9072e350a929d4630",
".git/objects/08/d15f95ce74ae534f2f81f6861e04ba3162d82e": "0a5a16aa55e259514d163ac4613dbb55",
".git/objects/0c/0fa8a801caf7561c39f2de8e5981ce054473e8": "5ea5491603f976a3d8bee34032992e17",
".git/objects/0e/7fd6ef71aabcf0dd8f9b420c83170eeaa80b10": "3cdbd019d064727414f22151d83181d9",
".git/objects/0f/99a3cfd62f211b95a85c5f23cb6d7b1832a1b8": "be68790c7fd09ceaa8e1390714d24646",
".git/objects/0f/d2ecb414f310550a50c745605d2a567bddb8e2": "116275100c75c87d5d4df53866433243",
".git/objects/10/30ad4adccb0b17e832e97c37504c05a3a58a90": "f8d5db6660ecb8ba5b0361f3023f6e36",
".git/objects/13/de42ce34cf1daa40b133ce0fecbbe7b7650e03": "25b242c5d2994b736adc427ba80966cd",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1a/b6990862ada5291d5989760c2c390c4322a0b1": "c69aa97597c0e63782760450ae2afbd1",
".git/objects/1b/7c5732bfe65c62721adf8f74519a0ce6e06fb4": "fb024cfb8022e7ee947adfce1fc869f1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/3aafb1fff7c6d61822733f8accb8e39856ad08": "3003eab2b98ab4c8f142eb03dfa26f91",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/9c844b2cf50893b42a58e34eafcf4c1cffb88d": "1c825c13e11c4fbb4299eac19639d79e",
".git/objects/27/d8e283afdb0581f73c0dfed623590a696bdeea": "a797ffdaf9273d54f9785c5a050c84fb",
".git/objects/28/e358e17fc3efe51dea28795b336a1d4b98e800": "fe64997911721c10ea1729c60510a480",
".git/objects/2c/a9748b1c4b70bcfd5c629c598f449bcfeb4093": "c3709458dcc09cd5dda3e59a7928b627",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/f965efb812f0ca1d3e8ebb6e3af498368682cd": "448838257b30986e6012280b3cb02589",
".git/objects/36/daf3dd6c704abb28cca4efa3bb1a38ca25e724": "4d7879949bbbc7aa7223585b6a31a9d9",
".git/objects/36/ef70da8f73894f171d35d95d145c0beaf46489": "01d1f0694f503337d3ff64e9b34b9b43",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3f/ca1558f6ffab56f3327dec8f72ae41e62dc291": "48d58ac4339c52f3b3d362e34ab80fd4",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/7577a5aec4a1290f87ec7ab2e281eeef469b03": "5dc1f436407c9ba50a36c0c6f42aa8b7",
".git/objects/41/6b82413e04fd95e37f36ffb23cccbf2d2ca681": "2a6e8c5642c978241b3b82f32358caa4",
".git/objects/42/a057ae71be49597878fd2de6d5e21d6f945dcd": "f82072ab125545e60885050fa6adb0bf",
".git/objects/43/c748f00b2784c0bc9194722d8d4679bdaee4c2": "853e20507dec7fa3c0add62eb5280064",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/7aed514022755d783f683409a01d9728a072d2": "b23b51b86ec270a28a461cd819389a2e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4d/b43371cb27ced778ccba0d3aec599bed05cada": "0b1b905bfeb83774e8b4bdcdd01309ca",
".git/objects/51/438027a97196800e05553efc4936578abf3b8b": "ba4c04c9a92f2948b6e0447612f517f4",
".git/objects/55/73d68e91a15ffe50bd3fa73259126fe0be999a": "2b29a2761aa4b38c9fffa0292f86c2ed",
".git/objects/57/f7dfa7b7049a50274fded0492289c170c40e6d": "9e54e6dfdbca723d01539e562757d11f",
".git/objects/58/69cf8faba63be0b84a2e4ad45541acd61349c2": "ae7be85c8e404a68f6cd5128f13d0b51",
".git/objects/5a/2f828046d75b78ca0d40920d4a977f9bc18629": "1251675c1fbce9eef85b9be8fd0b2102",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5d/0d607220ef304f39646993cc22ba92780ca7d0": "b543a3738c7e6c7076c5681d6fd46d0a",
".git/objects/5d/911135b5057fda2dd1ea5a3dc6bc48b2395648": "4975d052fbf19e0c8b106905e0062087",
".git/objects/5d/efa56112a70f7c5becad96bac3fffaf157a820": "b84cae4b6cc6582f1dde620be1d74dae",
".git/objects/60/ccd025b7011e46de2ad315722d29afb238aad8": "d60129ac51b38db47a254f3ddf76bb3b",
".git/objects/62/260f50e46f1b244771530c2054fab474e1089f": "2258ba4a541fbac232abf6237a6aca73",
".git/objects/62/8ba9cee16e4655f403a60327971af42b3cb662": "1ae3836e245a74deb19c1622793679b8",
".git/objects/64/01d374740522cc55b1b4acd7b1b3ef6ded8db8": "4931d166d005d267bcfa4f9636ea5406",
".git/objects/64/bd6c6a27ffdd2b9351fdeefa2477ae5fcac296": "8e73d02252077208e6be5ae219e03ffd",
".git/objects/67/e243043906afcbd9e7b953de58919679ef2617": "e3cd0a36ce89f12d262a12ba1c103759",
".git/objects/69/462931cbd03ef4c74c78914466cb46f1710eb8": "ce6ff19283984597b1f680129b76817c",
".git/objects/6a/712a0f575354c00c85e35f2aba475e64036d8f": "8a8a2b40905528a9f176ca8c1c8d9e6a",
".git/objects/6a/93f1d29352aac7e1842a6b3295ea64b74ea8a0": "db99ee5b52fd0875b8c54d3ca8f0bcd3",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/403e8bc3e664600354ccc7cfb648856c223672": "e45b9807c383d08f4cd9f814b82f23f5",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/d087e66dc1825a792d3ea62af5923c1fb11312": "9de8ae0edc6d44b0519f9d047eb7ea99",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/0b5cfc03c252c6bc5db11b0269f1b3851e8983": "51631b481ac3836c2461c69cb3cd49ea",
".git/objects/74/dce05d5700bbe89130efb71e1a9173ba596af1": "877b6bc328b6950ef712f76872187f7d",
".git/objects/75/f556265e662529d5a4769a47386da23d7d02bf": "d58ea6b4034a17205c959e38a3cc1aab",
".git/objects/76/44fcfd3bc37c4da55321a0c370bda5f00f1ca5": "4dd1a54db16496fd1b68622945e78b61",
".git/objects/77/de90ab1c3bb2d1aaf0eaacbb1b7d7d70e25c33": "78a4354950324541bb86725f254f89a6",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7d/4f32f49e6511a6854c2e0bbad8179ddb87ad3a": "0cf40a0683112b1328763366eaeccea3",
".git/objects/7e/34be1c8f3fafcee3f8dab539596f09a79c499f": "6194b438888189e503361c8c636115f8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/fff3de0d89062e4faac4c2e54ad21861f2ca96": "65822b10f16643d391647f471fde5df8",
".git/objects/87/3b3d053214516d724b304911fbebdbe7a5dd2f": "1965711f96f14108223bfacc628d2a28",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/874164b36e0c39a988194c8d93563a8363f8fc": "c880cc5a809730af22429b04d8a4f818",
".git/objects/8e/2d2d240f8de8706018888059ed7e2383e36590": "8d84db15bd8f18867c8461fa263ef84f",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/fb44f1d837646eb329ff58b3ec54b3fd9538f0": "e016422e03441148bdfa8237de628971",
".git/objects/93/16a7fa184e70603a9da4ff29f0b11a6b48121e": "60296b2ae4a95452089bd56af35140eb",
".git/objects/93/a327636e323cfb7442cbe00ce9ba5f2f4c5075": "3cdcbedc284ad8b61a309b8a4b38fd69",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/b08806679c8d2b3d41c245ce877c1bf6841402": "c79e318d4f68ef71447298d4d29f9919",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/8938ff7a614870595554371d05d7cad0944065": "b36bcac35b6d571078147e7152aeca5f",
".git/objects/9d/2af4915fe5b166a650c157483ae02fc6cf246f": "a233f9afe011a8beb27c23564b54f4ca",
".git/objects/9e/d055feb08dcccfd47038cf5a75760aac55ce87": "c05f0c90500d1a43804c1cda29f06075",
".git/objects/a2/2a453b8da31c3999db7bb5b4a41bc0fadba445": "47bfbdfbd80c022621e1df555d8ed911",
".git/objects/a4/8a6b59226e67d22288302b96d60be08674939a": "4c94bb986027e25c3d4afd819422b568",
".git/objects/a4/9b76d09921540b602314bae9cb65c4dd6f2d54": "e39167a23752a00ada28edce9092dbb1",
".git/objects/a7/6149888782c4a8a73f2991f617939ee9ba014a": "f63b05087b546ea467e0d50285e58f1e",
".git/objects/a9/59f0c7a3b4e2a7f9a9d83108b06f5984ad0e36": "8297a79f5c095dd33bd3b7797f874225",
".git/objects/aa/993d27f9dc43b1205868a1497ff1235479c8a1": "3bc661724eaa7fb76b123f3f2aac07f6",
".git/objects/ac/282fef57b3a421470c9d13b8a7774ad72263ff": "860984e20c61b1b9c7dde20970d7fdf2",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/b74fd4d343c09ff9726ce0eb824f1219c123fb": "b3432d7a05232589beece681b080ebcd",
".git/objects/b2/62207c9aea2ee49f422cce09de068885219ed3": "c51989c394cda3c53076a21d84cfa4f8",
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
".git/objects/c8/5057258a60e921abe7af5452147cc54e4a0c5c": "9539f333bd6d89d3841c7e1bf745de71",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ce/b50015519079d8bdc6ce64f650c14b93d1ffa6": "f8234d16cb31cb3f874917ca56e70a8f",
".git/objects/cf/e76ca8ae413ce2d13aaf1616cb88fd54b43633": "64d42273886859d13b42b60c329e5284",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/21174ebee705b72dd84a450386be1f62dff4d9": "53bc64f0a7989c65e21be6cc4d171316",
".git/objects/d1/5dd3235ca1452f12e6aabb74f025bc7ab3b7ce": "f6098f154de7d7e7b2370c526452f688",
".git/objects/d1/9841a4ac29d281901800ae1cf097f53de9a183": "0e751916017e6fb252e2f1ceeb995c76",
".git/objects/d1/d3a6c0e6573245f0e925c9aa4899e71584805e": "c19d2c13d43ef820b28ff84e826689d2",
".git/objects/d4/2b01e718f1879e5c8e42802c272149f01eec14": "a57bd6dd20c36aff87a6cf1f3934ae10",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c68fcdccef576bad315528bcec748bbf1778f0": "5aabdc3bec5799e542cb18c5ca6abec2",
".git/objects/d5/4c86b142b9215bd4344c7b16d4ac2d9477a828": "298e35a9ce117ea12f362df2448f9972",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/ddab609f98ad4865061bcb269f6402a5b704c8": "c15ebeecff7a51bcc667abdb3e73f1a6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/05ca59301b1dbfbcf0c21bdd7903531d8d7ed0": "70d28523a0237933fb71a659437502e6",
".git/objects/d9/05649fd456e39db7ee2ef81fc6c9196469d889": "0eeae7d7fd1fb3daff79646f006b6898",
".git/objects/d9/084a28d392a02704321ac5abd6a932691e8bb1": "ea1e256157f2ed210c78045993137d3d",
".git/objects/d9/8af88963bd55b682838456599b7cd41687c5fa": "e492869b7af9899801a17c58ae4b2dfe",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/da333b603a0d51a09c6e4e783928feaa650f86": "2ac4615226d82292d2dc7f3ee82b55d2",
".git/objects/de/f6728d6f42e98e5eac44bc22ad9e6e3bf27a65": "2c54b294f5ced6d44fe4d5ab689ef23b",
".git/objects/df/f7972e12a6f720136d9806c77a43ec27eb5065": "1941a7f6f4aaf052ec524291a6adaac1",
".git/objects/e5/a1f1d2ab23ea6a7fe3dd06db40657ddbd39996": "7c0965f5084eb956cdbb66661421cfde",
".git/objects/e5/ee1c28fd8c183257696a48873252565d275b49": "b9ec7673620189720a25ef096ce371ef",
".git/objects/e7/cfb3d44a2318095370ff621a5c1477e4148d2b": "d7f14da793f9c3367bcc015a6009cc78",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/2a8be15bc558290c089833813aee46510a6d37": "14d2c6410c66144dd2ccb675e4cc7a2f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/d3e83a31d5fbe6a374aeff539c474b09d1cb9a": "d48da829beb66859f64486f666349a35",
".git/objects/f6/88f393fc46e4f416f574749fec6d2d3f91956d": "14809e4c39c3bb380681cce8622f05d2",
".git/objects/f7/d3b0fe3d4da0a6986f2531099c2d52aa262cdb": "59df389065663bd43142d7a30633d2e9",
".git/objects/f9/e105cded6395927238f141bcde816078c607e0": "dedbfc6cb7910bf24670fabef4f5ed00",
".git/objects/fb/b756f160bbed489bfd7cb29cea8d57e90ccbd1": "ca4346d81eff33b5ff130e8f45d06a29",
".git/objects/fc/a06e9cca54f1ddd2cd945cb1eaa7f3910ed049": "59f7acfaa12a9fd4ad345051e9ecb7d5",
".git/objects/fd/0f51e166a4042bbf1fd651aa4717fdc1f1e91f": "e7ac2113821eab62450ee37c28990d71",
".git/objects/fe/5cc881c4cbc68d966b4249c93a972255275cee": "a7feb8722178fc0e478d79cc43b0ddc5",
".git/objects/ff/fc02bda666b12748191ca9302a203c5c8144f3": "b380b28e3765eb7948a78356859a8526",
".git/ORIG_HEAD": "930843010bf43bc9d629932be6bd4ca4",
".git/refs/heads/main": "f6dd7aac75aa74a81a2618cfc683456b",
".git/refs/remotes/origin/main": "f6dd7aac75aa74a81a2618cfc683456b",
"assets/AssetManifest.bin": "9a65d0febed987de91170276fcc9754e",
"assets/AssetManifest.bin.json": "70a445688de63ba066a5f0e9f5ef6812",
"assets/AssetManifest.json": "c475c9db21cee91176c020faf4bd279a",
"assets/assets/images/cachorro1_solto%25201.png": "b21b0261e0888117c9ee94e17e4ddb4b",
"assets/assets/images/cuidados_gerais.png": "372d0b4c88e3081026d2abf1cc71475d",
"assets/assets/images/descricao_raca.png": "b8490c3bc0aabc3e0ee3e6b2ee187fa5",
"assets/assets/images/dog_1.png": "105d6b7896f83f413d6ec7bd7a2348b2",
"assets/assets/images/dog_2.png": "7f6c7b6659f87b9d069d78e142fe4a38",
"assets/assets/images/dog_3.png": "73bb084ee919880a4c6e762f0155cb75",
"assets/assets/images/dog_desenho.png": "5722450a1b976e2470ffb4ee488ca825",
"assets/assets/images/dog_desenho_1.png": "3d90fd2f213d5af6474551b17ad01c26",
"assets/assets/images/Ellipse%252012.png": "448ffc466e4a71906205b132f7ea1739",
"assets/assets/images/Erich_cute_veterinarian__3d_character_46801a17-c31a-4612-95ad-7a8f62ca69cd%25201.png": "0e46d08073a46680bdd6ba286d032fb8",
"assets/assets/images/facebook.png": "f0ee6a5e6fc8f2b5e6ad1040f11bef0e",
"assets/assets/images/Group%25201171274758.png": "35bbd0880818cba0e7347e2d6a8467c6",
"assets/assets/images/img_dog.png": "6af3a071da706bf084d87e3340e91cd9",
"assets/assets/images/img_dog_1.png": "02d67a0fbd75ed1237c1cdde0085c4bf",
"assets/assets/images/instagram.png": "53b50641ba3b43fccbfc739f060151fa",
"assets/assets/images/logoB4p.png": "474c337f762a595b185055ed3b7bf70b",
"assets/assets/images/logoB4p_branco.png": "dd2be85d3abb3fc0dca120a8d79a2b43",
"assets/assets/images/logoB4p_centralizado.png": "3fe188d60505f0b790bc3fea4010c22b",
"assets/assets/images/logo_app_bar.png": "7b76d69a057c833b5bf66edd41b3e9fa",
"assets/assets/images/logo_tracos.png": "782c8c86830aaddce565a23aa18c4c38",
"assets/assets/images/origem_raca.png": "a68f2c815ba9fa7ed296c49fe26286fa",
"assets/assets/images/pelagem.png": "96af2f7072a5af0e1301b8b873ea0cff",
"assets/assets/images/principais_caracteristicas.png": "a950fbec897859b09a421b2fd95ae13f",
"assets/assets/images/tela2_solto%25201.png": "76de5f82f1a247aebce04bbca2766da1",
"assets/assets/images/tela4_solto%25201.png": "b5190c29ac7706938d1366279477a5d3",
"assets/assets/images/tela5%25204.png": "e211ac528619a42b121daadea95247b5",
"assets/assets/images/Vector.png": "36c881a7e97937548d4b34d201d4e090",
"assets/assets/images/voce_sabia.png": "2b08bac2ae1b2952e87235f0543d53d9",
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
"favicon.png": "cae5d38bda343973b4eb78a18ce0dbaa",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "64690fef8dc37b894fd231d8467ff64a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bff99c4c54563b57bd82b662fcbfd6db",
"/": "bff99c4c54563b57bd82b662fcbfd6db",
"main.dart.js": "2eb5d64d6f668ab907ef4a6a37c2dcaf",
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
