const C='triods-mathduel-v12';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return; // let online libraries and servers pass straight through
  const isPage=r.mode==='navigate'||/\/(index\.html)?$/.test(new URL(r.url).pathname);
  if(isPage){
    // newest page when online (so updates arrive), saved copy when offline
    e.respondWith(fetch(r).then(res=>{const copy=res.clone();caches.open(C).then(c=>c.put('./index.html',copy));return res;}).catch(()=>caches.match('./index.html')));
  }else{
    e.respondWith(caches.match(r,{ignoreSearch:true}).then(x=>x||fetch(r)));
  }
});
