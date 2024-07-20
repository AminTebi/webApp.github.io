'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3d5151e0c15b36ee8222aa6971adfaf3",
"index.html": "ea70ab654c4eeab23f998bcfb7d931d0",
"/": "ea70ab654c4eeab23f998bcfb7d931d0",
"firebase-messaging-sw.js": "78cc7600e7caf90f5f858586edf13299",
"main.dart.js": "93cef36699efbd3cbb349d4857e3dbdf",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "d52d28a9f1a187fa6534573e8bf59136",
"icons/Icon-192.jpg": "76d6b9943719ba492cbdbe9f74ffe964",
"icons/Icon-maskable-192.jpg": "76d6b9943719ba492cbdbe9f74ffe964",
"icons/favicon.png": "d52d28a9f1a187fa6534573e8bf59136",
"icons/Icon-maskable-512.jpg": "76d6b9943719ba492cbdbe9f74ffe964",
"icons/Icon-512.jpg": "76d6b9943719ba492cbdbe9f74ffe964",
"manifest.json": "57da41d0e53f3900f7d544fe7bc3cf76",
"assets/AssetManifest.json": "f9d2ea74828fd0f5b8dafbf9aa3d52d4",
"assets/NOTICES": "ef093976e9d5494bcbf7bb96b358e453",
"assets/FontManifest.json": "767d33f0cba1bb52009cdc605c0e4ac3",
"assets/AssetManifest.bin.json": "90d1deadd7b767ac04147179c3ec2166",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8601ce9b207a0d2fe83b2f698ab05867",
"assets/packages/flutter_date_picker_timeline/assets/fonts/nunito.ttf": "d2e691bc4a2b696929172cb3d22ce8ba",
"assets/packages/flutter_date_picker_timeline/assets/fonts/dana.ttf": "00b0aa9472504e0d38d07188e17ea8cd",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "c6ce4b06084a42cd7ee12765d5c285c2",
"assets/fonts/MaterialIcons-Regular.otf": "2e9bb3a3ea13847cf155c55577c46515",
"assets/Assets/cancel.svg": "40517db8ce81a3c74ac7205b1429acdc",
"assets/Assets/Images/dinner.svg": "e65051a0edac100f8c0176003456605f",
"assets/Assets/Images/panel_nudge.svg": "c2d874d347a32245ec895776ed425a0f",
"assets/Assets/Images/sleep_moon.svg": "745862cc24239b8d16839c9f1c336987",
"assets/Assets/Images/purple_divider.svg": "3e59e713af73111b724c68c2fd4717dd",
"assets/Assets/Images/statistics_button_disable.svg": "57ff05360e407ec1958dc5d77a8eca79",
"assets/Assets/Images/glass_of_water.svg": "f29c12965f213c5dd9421654d6c2ae2a",
"assets/Assets/Images/exercise_white_icon.svg": "5aca6789337c5fb3f4006faa5ae27719",
"assets/Assets/Images/statistics_button.svg": "c2c0929e48b94a40bf9e606076b295cb",
"assets/Assets/Images/bottom_navigation_icons/inactive_reports_button.svg": "7430518d503cd47f8ff84fc31ec7ca87",
"assets/Assets/Images/bottom_navigation_icons/active_report_button.svg": "0036f5775d2418d6cb5ce60057682bd9",
"assets/Assets/Images/bottom_navigation_icons/active_explore_button.svg": "59a99c92ff0724633162dadb241c766f",
"assets/Assets/Images/bottom_navigation_icons/active_home_button.svg": "0e11efaaa4b3be1be692ffa85dcad73e",
"assets/Assets/Images/bottom_navigation_icons/inactive_explore_button.svg": "cde2e5f9d304fd3dfd228bbfd5f4978c",
"assets/Assets/Images/bottom_navigation_icons/active_ranking_button.svg": "c4f6bb8513815086ba83f2e1a1d53cea",
"assets/Assets/Images/bottom_navigation_icons/inactive_ranking_button.svg": "2930293b220b73b62ea798329e1ccc54",
"assets/Assets/Images/bottom_navigation_icons/inactive_home_button.svg": "ece793e9db15de81b51a4705535c3205",
"assets/Assets/Images/ZiLuck%2520Homepage.png": "48ff625d091237244fd8226480c6f061",
"assets/Assets/Images/cute_notification.svg": "b75e0d2118d1d12b46a5caeeff8d03a2",
"assets/Assets/Images/lab_test.svg": "f74bff3c28ef01334fca31a9b366272c",
"assets/Assets/Images/bel_icon.svg": "f3ed7362f0075cf2fceaaaf902a8aa1f",
"assets/Assets/Images/add_water.svg": "2d76d3a72e9844ce57e0f1e87dceffcf",
"assets/Assets/Images/ZiLuck_icon.png": "76dc22d488bbc5239bd1d18354fa00e4",
"assets/Assets/Images/cheff.svg": "73c79e9f6dddb56975874c7de7a9121c",
"assets/Assets/Images/three_d_chat_icon.png": "d2d787c579bb456f9d0c02f59d544613",
"assets/Assets/Images/cloud_download.svg": "dbbf738be497f952dc4069b17157bd38",
"assets/Assets/Images/back_arrow.svg": "07ed071ca34cf9a4af1e8c74ef38f13e",
"assets/Assets/Images/ziluck_icon_primary.png": "2014dfc720a74a820c87ce982af2853f",
"assets/Assets/Images/chat_icon.svg": "893937009a31f218e1bbe5467942d1f2",
"assets/Assets/Images/bike.svg": "256b52414e1c00a24970e6ccbe7ce40d",
"assets/Assets/Images/loadingg.png": "e90c432257db966a943ae723a96cd541",
"assets/Assets/Images/appointment.svg": "d65a159f8b1380da93479dbcb573677b",
"assets/Assets/Images/empty_badge.svg": "a39196cfc9c5e04aff81de2b4339f4b8",
"assets/Assets/Images/blood_sugar.svg": "7f29aef9a292e2fbe57b959bac034353",
"assets/Assets/Images/female_profile.png": "16b944d4cbe5291a7fd30a7a2d03a7f7",
"assets/Assets/Images/Why%2520ZiLuck.png": "87a53b7f840d6ab1494f0ae9f02fb06f",
"assets/Assets/Images/green_tick.svg": "c0f0bf8f9f1d80448a4b73589b731e54",
"assets/Assets/Images/silver_badge.svg": "601ed0b6ef4f00540b6a91791268d337",
"assets/Assets/Images/blood_red.svg": "2155e21607dfc686395df5d284637ede",
"assets/Assets/Images/ziluck_icon.svg": "09ffa2682e01feb79f80a420397c830f",
"assets/Assets/Images/Login.svg": "9db9dc961a5b3952215aa0c6fe16cecc",
"assets/Assets/Images/explore_button_disable.svg": "2948e06f3df33a5c2205582d4aa31b1d",
"assets/Assets/Images/splash_icon.png": "2552fddab81975ce1e92729477bf9ef2",
"assets/Assets/Images/Illustration.png": "7286baeaccaf636720d5eaca47febacf",
"assets/Assets/Images/trophy_background.png": "da30c6c5b2c7e2e28c71841967ed5181",
"assets/Assets/Images/tick.svg": "8591511e4224dbf60e627a0d454b8250",
"assets/Assets/Images/home_button.svg": "10ae0cc3b5cb2f30660b3745b4a4df46",
"assets/Assets/Images/Trophy.svg": "41eea1ef6cca1b0c6236543e58d28e31",
"assets/Assets/Images/ranking.svg": "cd418179a8700729305298ac0cb44be9",
"assets/Assets/Images/gold_badge.svg": "208a4f9d5971123b9940e5525e9e2ed9",
"assets/Assets/Images/weight_scale.svg": "acc889aeba6cf6e269c9b3b50801c75f",
"assets/Assets/Images/code_sent.svg": "6f5b908d02b4317440a8389406e5eb74",
"assets/Assets/Images/microbiome_icon.svg": "e10d2f1f499f4b58d80f8d3242c9b521",
"assets/Assets/Images/no_notification.png": "159d63cec2733aeee37764eb25dcbb70",
"assets/Assets/Images/dashed_line.svg": "0975a80efb9c7370501bcff0fac43a36",
"assets/Assets/Images/male_profile.png": "f90cb9434236548288715c3fc441f3c0",
"assets/Assets/Images/coin.svg": "0cbc2f30e55541406cdc9ede10e45e4f",
"assets/Assets/Images/send.svg": "c907b135b46f4c937027cfb0747ec860",
"assets/Assets/Images/stacke_coins.svg": "6cc06aeb9a366cea5dda2f4a65eedf92",
"assets/Assets/Images/accent_profile.svg": "d08c1ea5340aea512b2a9d1849c041b1",
"assets/Assets/Images/insulin_icon.svg": "961ac0c4d4b49e7294d8916f14ee1bd6",
"assets/Assets/Images/breakfast.svg": "5e16a3df79757303818e643c75810498",
"assets/Assets/Images/voice.svg": "0f7d1f0e003a877cf02b01f2ca665723",
"assets/Assets/Images/Google.svg": "fe439e0a10a0466aa407b6cab9ea96ee",
"assets/Assets/Images/more.svg": "70bf5ffe5ea024cc2246a4ab212707c8",
"assets/Assets/Images/lunch.svg": "fca7d8bf4e7348cec744233c5460d40c",
"assets/Assets/Images/primary_profile.svg": "e9ebeaa053aba136c8e6480d1a88a0f1",
"assets/Assets/Images/hello.png": "4f24965fad8862bf1b3dcc9b92777dee",
"assets/Assets/Images/ranking_disabled.svg": "ebfea12cd3990ee64a4600bf02efaf8b",
"assets/Assets/Images/lifestyle_banner.png": "d4f434f9ddf15c9d1ae13448d9302b79",
"assets/Assets/Images/water_bottle.svg": "a994f9a19546dd1e56d837c6054a4acf",
"assets/Assets/Images/bronze_badge.svg": "c6bb5d6e60bb1efdf75662407d85c778",
"assets/Assets/Images/profile.png": "2d04d645813f4198b8632be1f302f02d",
"assets/Assets/Images/blue_minus.svg": "06cddf4cd3d6241c38049aa3a5c499a7",
"assets/Assets/Images/ZiLuck.svg": "fd2ee2b40b53a061c3e0a92ecffd7887",
"assets/Assets/Images/blue_plus.svg": "d3cce48f65abdfb1a0d0b750d14a567b",
"assets/Assets/Images/nutrition_banner.png": "de1ea90286a118f16e6f9447667c7ce6",
"assets/Assets/Images/explore_button.svg": "9e5d01784761dea3cf19121e1ae6561a",
"assets/Assets/Images/round_calendar.svg": "e7cd41f471506f3430e92c102d32056e",
"assets/Assets/Images/exercise.svg": "d718dfff85b48a09ba43414609316bb2",
"assets/Assets/Images/crossbar.svg": "72b1227a9b4058878b33abd8414ff1bd",
"assets/Assets/Images/ZiLuck.png": "4e885403d69020afddc0bd65b0e36cba",
"assets/Assets/Images/profile.svg": "a5b141bb476e07287d107b6c10bd1cf1",
"assets/Assets/Images/HomePage.png": "075c38a9b0dfa6521a2f6cbe9a7a31c6",
"assets/Assets/Images/bell_icon.svg": "00eb5a513265f20d27a0898749359793",
"assets/Assets/Images/Avatars/Woman/happy.png": "74aa4195fd5fb661ed92df8ecba0abdd",
"assets/Assets/Images/Avatars/Woman/verification.png": "9117208e538afcd72c9040600abc5df3",
"assets/Assets/Images/Avatars/Woman/delicious.png": "0f9a433124a1d55bd684fca302511e12",
"assets/Assets/Images/Avatars/Woman/mindblowing.png": "9029505b9ebbf08079e2f7006105ce23",
"assets/Assets/Images/Avatars/Woman/sad.png": "feeb8db0991b0a03e99085cfcfbe7a5e",
"assets/Assets/Images/Avatars/Woman/very_shocked.png": "d4633fed282e54fdbb24d077d26842f1",
"assets/Assets/Images/Avatars/Woman/slow.png": "001ca2fa1e65608e91cadac5cdea1bca",
"assets/Assets/Images/Avatars/Woman/like.png": "776b43644ca132782c34d28068edeb54",
"assets/Assets/Images/Avatars/Woman/grateful.png": "2ff1da33e232b8156133f63f35081185",
"assets/Assets/Images/Avatars/Woman/patiently_waiting.png": "e06a3d6ef8a77bef63ab45437d771a4c",
"assets/Assets/Images/Avatars/Woman/thinking.png": "646d6ade0922e30d6d352a2f59806649",
"assets/Assets/Images/Avatars/Woman/wink.png": "672ac34247734eb55510061df4bc5f58",
"assets/Assets/Images/Avatars/Woman/hello.png": "4f24965fad8862bf1b3dcc9b92777dee",
"assets/Assets/Images/Avatars/Woman/congrats.png": "45f5fd7f557832dc40ae09d7ebd37b84",
"assets/Assets/Images/Avatars/Woman/oh_no.png": "91be25ac14a276de563695e20be3d7dc",
"assets/Assets/Images/Avatars/Woman/shocked.png": "1a49aeead1b89d3ebfbe9a5e8f2391e9",
"assets/Assets/Images/Avatars/Woman/worried.png": "4ed65db9d5469dceffca7bcf1df1161f",
"assets/Assets/Images/Avatars/Woman/problem.png": "eecfb7f9da47f8c2494c078106c44725",
"assets/Assets/Images/Avatars/Woman/cute_sad.png": "a4df604e91577c7396fe6afaceb9e2b7",
"assets/Assets/Images/Avatars/Woman/heaven.png": "0cbbf934b0cb2ea4ad9390b799d7d2e0",
"assets/Assets/Images/blood_pressure.svg": "6288f46029183777a58919a00de5e05d",
"assets/Assets/Images/steps_icon.svg": "a3a347443620c7bd52d6c3fcc4df77f2",
"assets/Assets/Images/image_icon.svg": "111766d2949ece0ade75c5885dd85242",
"assets/Assets/Images/walk.svg": "6478b69a0ce9ff9cf8a8319ef8ac97a8",
"assets/Assets/Images/premium_feature.svg": "0dc3f45c5afe8d6dfbcfb3cb1e3492d4",
"assets/Assets/Images/cloud-download.svg": "dbbf738be497f952dc4069b17157bd38",
"assets/Assets/Images/loading.png": "3b0e376005ebdb7b2a3bab52a2bbefb8",
"assets/Assets/Images/document_icon.svg": "37b3815abf6d74f1cd18535ae86a0e3e",
"assets/Assets/Images/body_vector.svg": "eb7341bbff50303c51cd30278175c7b7",
"assets/Assets/Images/home_button_disable.svg": "b54c929262488156513638fb480c8cec",
"assets/Assets/Images/food.svg": "88a98e30fe57774c727bd8d41d474880",
"assets/Assets/Images/Apple.svg": "ff46ba80e5c0aa4a75e5a40caa3f2aaf",
"assets/Assets/Images/send_rounded.svg": "4923047f011c34b051e47f2980260738",
"assets/Assets/Images/run.svg": "f85bae879847feba746de69eb4245132",
"assets/Assets/Images/moon.svg": "3793704702060c94a61a9faa2b82e537",
"assets/Assets/tick.svg": "05ee7f4c3100bd4e0b442d811dfff1b5",
"assets/Assets/profile_picture_high_res.png": "e7eb8a25349b30420e0c64f8191a3431",
"assets/Assets/Fonts/CircularStd-Book.otf": "6365c40aa59d462f1cc52ccce9635cb4",
"assets/Assets/Fonts/CircularStd-Black.otf": "7f42d8488652eb250af2f484d377dbee",
"assets/Assets/Fonts/CircularStd-Bold.otf": "6baed2bf580964bec9559ad83caee43d",
"assets/Assets/Fonts/CircularStd-BookItalic.otf": "f1e69e389c1b9f463541c6e2f978d2a3",
"assets/Assets/Fonts/YekanBakhFaNum-Regular.otf": "756ad9c1826f0db95045d72ae4c2554d",
"assets/Assets/Fonts/CircularStd-BlackItalic.otf": "0cda47fe41243fb61f2ffd71f3a811b8",
"assets/Assets/Fonts/CircularStd-MediumItalic.otf": "dcb304fd3cf40dbdd46bd67ccc43d6fd",
"assets/Assets/Fonts/CircularStd-BoldItalic.otf": "8bbbf07a96f614a3849b681885be45bf",
"assets/Assets/Fonts/YekanBakhFaNum-SemiBold.otf": "64f58ff80c9949525e87cecabdb811cc",
"assets/Assets/Fonts/YekanBakhFaNum-ExtraBlack.otf": "81b94cfc37d704f58299e82208c9337c",
"assets/Assets/Fonts/YekanBakhFaNum-ExtraBold.otf": "aaf23f7b558400db54e94f2f07d28330",
"assets/Assets/Fonts/YekanBakhFaNum-Light.otf": "f40d4bd9426b73c8afb7b9d1e733dd13",
"assets/Assets/Fonts/CircularStd-Medium.otf": "4fcdd97fadc3a1d9887f816f2aa67f1d",
"assets/Assets/Fonts/CircularStd-Light.otf": "0d87e6913e64a11189278400b4e0ed46",
"assets/Assets/Fonts/CircularStd-Light%2520Italic.otf": "e0e0aee6e0b17f6da833f1c3b95422d1",
"assets/Assets/Animations/confetti.json": "b443daf6a6b38e9f8d7849cca1798f2f",
"assets/Assets/Animations/avacado_loading.json": "e67f6e256c0929266f7e7e0e86e51401",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
