if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const a=e=>c(e,r),s={module:{uri:r},exports:f,require:a};i[r]=Promise.all(d.map((e=>s[e]||a(e)))).then((e=>(n(...e),f)))}}define(["./workbox-1c3383c2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.cbfc4d72.png",revision:"032bc7d807514f1eb6efb000f9fdff26"},{url:"camera-scanner.42ef82b0.png",revision:"6379ba2fd5e1e6b16874979a282077b8"},{url:"es.b356f8c4.js",revision:"c604c793c32119ed7fa74432c0d831ba"},{url:"es.b356f8c4.js.map",revision:"70f46172db2399ee66dc64cc6c5de326"},{url:"es.d8418a5f.js",revision:"0ab9f2844895f6e2cbf5a7f0857ba6a2"},{url:"es.d8418a5f.js.map",revision:"bd445899dfa18e2edd9df27d87424691"},{url:"favicon.a05bdb0a.ico",revision:"ece89efb9e6bf43b4a1a4bddc3e6c0ee"},{url:"icon-large.cd373832.png",revision:"52b2012c4056f0da66ea3ed518dd8e10"},{url:"icon-medium.ede1e868.png",revision:"03ee967b5d869e1ae1e8e63ed13edbf2"},{url:"icon-small.81a93e10.png",revision:"70955d3c62fbbfeec3ce088f908d6f57"},{url:"image-scanner.82276613.png",revision:"c878ced18794653941259faa24e9d41c"},{url:"index.1c6092ce.css",revision:"688b3453fad664b965b4f09e675da9d6"},{url:"index.1c6092ce.css.map",revision:"fdc351cc3e8744ab0aefc43724129b1a"},{url:"index.6dd2425c.js",revision:"5f9eaec0fbd3ee72134537ddf27d73de"},{url:"index.6dd2425c.js.map",revision:"69832fcfb0136dc3eed4809df908a7a7"},{url:"index.98a7b582.js",revision:"3fa2ad8d96c4c904414f858a549cdb14"},{url:"index.98a7b582.js.map",revision:"075a517ce0210c3eb84f9da7e2f21645"},{url:"index.9b9a314e.js",revision:"9ea7126cff922271fc488def4cf30c5e"},{url:"index.9b9a314e.js.map",revision:"9844ccf28a9585555d8c21789be14277"},{url:"index.bb1ce697.js",revision:"82f689cbc7405307d1eb42c297e81360"},{url:"index.bb1ce697.js.map",revision:"a581e787ac4468ce653d4028ea2d6f76"},{url:"index.html",revision:"fdf83ae63918268a7c1529c99ecf6cb0"},{url:"index.runtime.27633823.js",revision:"754c3d07f1440257357bd44851010d97"},{url:"index.runtime.27633823.js.map",revision:"85a967abf7cc3b38db11be3c375783ef"},{url:"index.runtime.9cb45ad1.js",revision:"01eba6497f3f52fcd9c4883f4f641e9f"},{url:"index.runtime.9cb45ad1.js.map",revision:"e2e30f4a0347280740ba265e3a2c2eaa"},{url:"manifest.webmanifest",revision:"d7bd1470f20cc3f518b91def065661ae"},{url:"spinner-light.4452ed29.svg",revision:"609c6274c68c19f6badaf5488b6aeef2"}],{})}));
//# sourceMappingURL=service-worker.js.map
