(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{323:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a(3),i=a(72),u=a(2),d=a(40),l=a(151);function next4Edges(e){var t=e[0],a=e[1];return[[t+1,a],[t-1,a],[t,a+1],[t,a-1]]}var c,s=new o.a({source:new d.a({key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5",imagerySet:"Aerial"})}),h=new l.a({sources:[s.getSource()],operationType:"image",operation:function(e,t){var a=e[0],n=t.pixel,r=parseInt(t.delta);if(!n)return a;n=n.map(Math.round);for(var o=a.width,i=a.height,u=a.data,d=new Uint8ClampedArray(u),l=4*(n[1]*o+n[0]),c=u[l],s=u[l+1],h=u[l+2],p=[n];p.length;){for(var g=[],v=0,f=p.length;v<f;v++)for(var w=next4Edges(p[v]),b=0,m=w.length;b<m;b++){var x=w[b][0],y=w[b][1];if(x>=0&&x<o&&y>=0&&y<i){var E=4*(y*o+x),C=u[E],M=u[E+1],k=u[E+2];if(0===u[E+3])continue;Math.abs(c-C)<r&&Math.abs(s-M)<r&&Math.abs(h-k)<r&&(d[E]=255,d[E+1]=0,d[E+2]=0,d[E+3]=255,g.push([x,y])),u[E+3]=0}}p=g}return{data:d,width:o,height:i}},lib:{next4Edges:next4Edges}}),p=new i.a({opacity:.7,source:h}),g=new n.a({layers:[s,p],target:"map",view:new r.a({center:Object(u.f)([-119.07,47.65]),zoom:11})});g.on("click",function(e){c=e.coordinate,h.changed()});var v=document.getElementById("threshold");function updateControlValue(){document.getElementById("threshold-value").innerText=v.value}h.on("beforeoperations",function(e){var t=e.data;t.delta=v.value,c&&(t.pixel=g.getPixelFromCoordinate(c))}),updateControlValue(),v.addEventListener("input",function(){updateControlValue(),h.changed()})}},[[323,0]]]);
//# sourceMappingURL=region-growing.js.map