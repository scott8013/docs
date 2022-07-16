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
    "url": "1.InterviewSteps.html",
    "revision": "da43905516199e09b7b951b24d207ee5"
  },
  {
    "url": "10.utils.html",
    "revision": "a0ad59edc40217ca334e4c2972eb87f0"
  },
  {
    "url": "11.loadsh.html",
    "revision": "a544ffea916469a4673694f478c4b882"
  },
  {
    "url": "12.vscode.html",
    "revision": "956cea75a26574733c23b92407b3c337"
  },
  {
    "url": "13.promise.html",
    "revision": "a827722ffa3d78cbef9a2d32b73525d9"
  },
  {
    "url": "15.git.html",
    "revision": "0981c70f77db00d32fe02a2d01b85242"
  },
  {
    "url": "17.huawei.html",
    "revision": "15f6aab00350fccbea6cc50ddb71c963"
  },
  {
    "url": "173635-14729817956499.jpg",
    "revision": "470b442315cd11380c8b3ed51ed18c5f"
  },
  {
    "url": "19.notes.html",
    "revision": "59faab0b9978bebe3f9fd760be4c3f08"
  },
  {
    "url": "2.1.array.html",
    "revision": "ade7bea7bbb9ebfea9086bf7b1b4591e"
  },
  {
    "url": "2.2.this.html",
    "revision": "f74ce24fae9a7f83a5639de1c63fd4d1"
  },
  {
    "url": "2.3.string.html",
    "revision": "2f5c262770d35a8e11eaaa008dfbf980"
  },
  {
    "url": "2.es.html",
    "revision": "f1d9400489dd84115f3915564e9e54ec"
  },
  {
    "url": "20.工程配置(Eslint CommitLint).html",
    "revision": "e4de40aa453eabf5bf85dda22d0dc364"
  },
  {
    "url": "3.vue.html",
    "revision": "89840e3c5a8d3fbe2a713e646f0dbedc"
  },
  {
    "url": "4.1_React_Hooks.html",
    "revision": "b3e4ed66be0659708bed4dea2ed098fb"
  },
  {
    "url": "4.react.html",
    "revision": "e01775c076bd14ea76604ef2a9f427a7"
  },
  {
    "url": "404.html",
    "revision": "b6a05be6c67ecccfcdf74e37e9ad958e"
  },
  {
    "url": "5.webpack.html",
    "revision": "984dd50239ccec7014e2c4c7201b304a"
  },
  {
    "url": "6.css.html",
    "revision": "6dbb2b8b1f207514f13bb8a1ac6769a2"
  },
  {
    "url": "7.1_array.html",
    "revision": "29fe08c6ad1ad078fdb66705915ad6d7"
  },
  {
    "url": "7.2_Stack.html",
    "revision": "bec58603b2ce5dcce3de023b40813e8b"
  },
  {
    "url": "7.3_Queue.html",
    "revision": "3bbfb987634779ebf9bb3d2b9dd3f900"
  },
  {
    "url": "7.arithmetic.html",
    "revision": "5461b3ea77dfd7e2fe931ed45094de29"
  },
  {
    "url": "8.browser.html",
    "revision": "b25c58793d1b45eeb6ad1e6521e0522a"
  },
  {
    "url": "9.http.html",
    "revision": "493b0f7d1cc8776df803a295395f8add"
  },
  {
    "url": "assets/css/0.styles.019551ba.css",
    "revision": "e488d68ad53187fbdccf6a1e965ab6fe"
  },
  {
    "url": "assets/img/async_defer.14d53726.png",
    "revision": "14d53726ac7c29e41771559ac1927118"
  },
  {
    "url": "assets/img/promise_flow.72ab73c3.png",
    "revision": "72ab73c3d3f1fe933fdb614c020316b2"
  },
  {
    "url": "assets/img/prototype.3ee04ff5.png",
    "revision": "3ee04ff512a68800c014b66de0f6b3f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6595661c.js",
    "revision": "1b410eff352b1caab75a9a72de399ade"
  },
  {
    "url": "assets/js/11.5517d0ff.js",
    "revision": "52b603fd627eae90129ae7483fe38b77"
  },
  {
    "url": "assets/js/12.9721ff7b.js",
    "revision": "b388c747bf71dcb3c8344f28a649b1e1"
  },
  {
    "url": "assets/js/13.3a35a8c4.js",
    "revision": "394aa07b6771f1b137992ccd7d1f449e"
  },
  {
    "url": "assets/js/14.3b855bc1.js",
    "revision": "0e43adfdef33f91d9523025ead5d1816"
  },
  {
    "url": "assets/js/15.39ae372c.js",
    "revision": "f5997c0a60cc786350ed0ee4eb546c30"
  },
  {
    "url": "assets/js/16.e2a67d53.js",
    "revision": "9b7ffb200482b4faeb892bb2291d2038"
  },
  {
    "url": "assets/js/17.978cb490.js",
    "revision": "dc60d9ce60dbbd055b983c66b2a457bb"
  },
  {
    "url": "assets/js/18.5959e5d2.js",
    "revision": "ad48f0088410fbaf9b0273ab295b32ca"
  },
  {
    "url": "assets/js/19.6c484b06.js",
    "revision": "46b7479d1626dba17eef8666504d319a"
  },
  {
    "url": "assets/js/20.5743c034.js",
    "revision": "7aeec8ad91e2a60a632ffab7293ea2ee"
  },
  {
    "url": "assets/js/21.2c6e6b5a.js",
    "revision": "2c22704a8c220e82e25694b4189ba0ab"
  },
  {
    "url": "assets/js/22.5ebf9f74.js",
    "revision": "30ad6eeb4ca8eda669718076c9dd7428"
  },
  {
    "url": "assets/js/23.5056eb90.js",
    "revision": "6d0ac987c910fb9b288e4a0a02c90ba6"
  },
  {
    "url": "assets/js/24.382e94d2.js",
    "revision": "7c56eb225ce2014dbcc6045be9364573"
  },
  {
    "url": "assets/js/25.cc43227f.js",
    "revision": "03ece542a267d4fb3166aef806360ba6"
  },
  {
    "url": "assets/js/26.0ad3dc25.js",
    "revision": "40a532a07a56171a656f5d7d543c5a62"
  },
  {
    "url": "assets/js/27.a6a7ad09.js",
    "revision": "aee86f7e1307b75e995541ad3431c8ba"
  },
  {
    "url": "assets/js/28.edfed979.js",
    "revision": "695de69726c3ae847ddb34c8744f9f45"
  },
  {
    "url": "assets/js/29.3cc2a4dd.js",
    "revision": "65d6bd572c22beb1a241c830e8103505"
  },
  {
    "url": "assets/js/3.a75c54ca.js",
    "revision": "6be6d31b570f2792f203d8a8ad2d64a5"
  },
  {
    "url": "assets/js/30.97ebf260.js",
    "revision": "a0e55f5f1a7ec23a79537fe39eff1e42"
  },
  {
    "url": "assets/js/31.158cacab.js",
    "revision": "f3581481d0159d9aabff99a8c0cd189a"
  },
  {
    "url": "assets/js/32.ca4ac246.js",
    "revision": "26c6d5db73bd301c86991581c1e643b0"
  },
  {
    "url": "assets/js/33.e5a75316.js",
    "revision": "9f657e614f0dc28aa7f7db0547292a48"
  },
  {
    "url": "assets/js/34.5f220437.js",
    "revision": "de745c9a4d21f3b50a5e59d8c6f1f0cc"
  },
  {
    "url": "assets/js/4.dd9f74f8.js",
    "revision": "8cbb886240c4862006c9bb7083b3e849"
  },
  {
    "url": "assets/js/5.076d894e.js",
    "revision": "8d34aaedc9dc4484b4cc7a8ecac36e2e"
  },
  {
    "url": "assets/js/6.3d666101.js",
    "revision": "3713ca36f8431faf41cf7ae7e5f02b34"
  },
  {
    "url": "assets/js/7.340cba0c.js",
    "revision": "85f8c1386836d4ac518a629933741b93"
  },
  {
    "url": "assets/js/8.d80eecd5.js",
    "revision": "ba99c54590207f4c6d827a8d1864e847"
  },
  {
    "url": "assets/js/9.f582d5a0.js",
    "revision": "ddd012907c9e779a45f0d627e84c9351"
  },
  {
    "url": "assets/js/app.136dc664.js",
    "revision": "3dbaa9aad0f602c412d72dc123fa31c7"
  },
  {
    "url": "assets/js/vendors~flowchart.a88e3597.js",
    "revision": "98292cb6324aef6354a83d1b4d40b277"
  },
  {
    "url": "async_defer.png",
    "revision": "14d53726ac7c29e41771559ac1927118"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "d51bb08377ffdd6cfc5048df1b2dfd11"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "4c014af3155a6046ed12cff5b4139bba"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "21d9fc176279ced5861e54288c3978b4"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "0b3dede44d6493005131ec00e71bcdcb"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "8741b3927ffe0729c0886e36ee003403"
  },
  {
    "url": "index.html",
    "revision": "4f03267b41c14491b4b34c8734e88f6f"
  },
  {
    "url": "logo.jpg",
    "revision": "d6313ed729722202f0a8d56d2f7dfb2e"
  },
  {
    "url": "logo.png",
    "revision": "a5bdf9a7d6a5648a4463a2b172407bf6"
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
