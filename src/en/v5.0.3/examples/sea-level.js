(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{296:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(2),r=n(5),s=n(75),c=n(4),i=n(159),u=n(52);var l="pk.eyJ1IjoidHNjaGF1YiIsImEiOiJjaW5zYW5lNHkxMTNmdWttM3JyOHZtMmNtIn0.CDIBD8H-G2Gf-cPkIuWtRg",m=new u.a({url:"https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token="+l,crossOrigin:"anonymous",transition:0}),p=new i.a({sources:[m],operation:function(e,t){var n=e[0];return n[3]&&(.1*(256*n[0]*256+256*n[1]+n[2])-1e4<=t.level?(n[0]=145,n[1]=175,n[2]=186,n[3]=255):n[3]=0),n}}),d=new a.a({target:"map",layers:[new r.a({source:new u.a({url:"https://api.mapbox.com/styles/v1/tschaub/ciutc102t00c62js5fqd47kqw/tiles/256/{z}/{x}/{y}?access_token="+l})}),new s.a({opacity:.6,source:p})],view:new o.a({center:Object(c.f)([-122.3267,37.8377]),zoom:11})}),w=document.getElementById("level"),v=document.getElementById("output");w.addEventListener("input",function(){v.innerText=w.value,p.changed()}),v.innerText=w.value,p.on("beforeoperations",function(e){e.data.level=w.value});for(var b=document.getElementsByClassName("location"),g=0,f=b.length;g<f;++g)b[g].addEventListener("click",y);function y(e){var t=e.target.dataset,n=d.getView();n.setCenter(Object(c.f)(t.center.split(",").map(Number))),n.setZoom(Number(t.zoom))}}},[[296,0]]]);
//# sourceMappingURL=sea-level.js.map