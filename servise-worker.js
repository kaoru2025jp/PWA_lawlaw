self.addEventListener("install", (event) => {
  console.log("Service Worker: Installed");
});

self.addEventListener("fetch", (event) => {
  // 必要ならキャッシュ処理を追加
});