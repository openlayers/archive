(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{238:function(e,t){function n(e,t){var n=[],a=[];return null==t&&(t=function(e,t){return n[0]===t?"[Circular ~]":"[Circular ~."+a.slice(0,n.indexOf(t)).join(".")+"]"}),function(r,i){if(n.length>0){var o=n.indexOf(this);~o?n.splice(o+1):n.push(this),~o?a.splice(o,1/0,r):a.push(r),~n.indexOf(i)&&(i=t.call(this,r,i))}else n.push(i);return null==e?i:e.call(this,r,i)}}(e.exports=function(e,t,a,r){return JSON.stringify(e,n(t,r),a)}).getSerialize=n},239:function(e,t,n){e.exports=function(){return new Worker(n.p+"727a93d124255fd9e580.worker.js")}},336:function(e,t,n){"use strict";n.r(t);var a,r,i,o,s,c,l=n(3),d=n(2),u=n(71),p=n(239),h=n.n(p),f=n(18),m=n(25),w=n(58),g=n(148),b=n(238),v=n.n(b),y=n(126),O=new h.a;function S(){if(s){var e=c.viewState,t=s.viewState,n=e.center,a=e.resolution,i=e.rotation,o=t.center,l=t.resolution,d=t.rotation,u=Object(f.d)();i||Object(f.b)(u,(o[0]-n[0])/a,(n[1]-o[1])/a,l/a,l/a,i-d,0,0),r.style.transform=Object(m.b)(u)}}var j=new l.a({layers:[new u.a({render:function(e){return a||((a=document.createElement("div")).style.position="absolute",a.style.width="100%",a.style.height="100%",(r=document.createElement("div")).style.position="absolute",r.style.width="100%",r.style.height="100%",a.appendChild(r),(i=document.createElement("canvas")).style.position="absolute",i.style.left="0",i.style.transformOrigin="top left",r.appendChild(i)),c=e,S(),o?e.animate=!0:(o=!0,O.postMessage({action:"render",frameState:JSON.parse(v()(e))})),a},source:new y.a({attributions:['<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a>','<a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>']})})],target:"map",view:new d.a({resolutions:Object(w.b)({tileSize:512}).getResolutions89,center:[0,0],zoom:2})});j.addControl(new g.a),O.addEventListener("message",(function(e){if("loadImage"===e.data.action){var t=new Image;t.crossOrigin="anonymous",t.addEventListener("load",(function(){createImageBitmap(t,0,0,t.width,t.height).then((function(t){O.postMessage({action:"imageLoaded",image:t,src:e.data.src},[t])}))})),t.src=event.data.src}else"requestRender"===e.data.action?j.render():i&&"rendered"===e.data.action&&(requestAnimationFrame((function(){var t=e.data.imageData;i.width=t.width,i.height=t.height,i.getContext("2d").drawImage(t,0,0),i.style.transform=e.data.transform,s=e.data.frameState,S()})),o=!1)}))}},[[336,0]]]);
//# sourceMappingURL=offscreen-canvas.js.map