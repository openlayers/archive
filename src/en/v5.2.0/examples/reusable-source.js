(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{330:function(e,a,t){"use strict";t.r(a);var o=t(1),p=t(0),l=t(3),n=["https://{a-c}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-jan/{z}/{x}/{y}.png","https://{a-c}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-bathy-jan/{z}/{x}/{y}.png","https://{a-c}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-jul/{z}/{x}/{y}.png","https://{a-c}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-bathy-jul/{z}/{x}/{y}.png"],b=new(t(51).a);new o.a({target:"map",layers:[new l.a({source:b})],view:new p.a({center:[0,0],zoom:2})});function updateUrl(e){b.setUrl(n[e])}for(var m=document.getElementsByClassName("switcher"),r=0,s=m.length;r<s;++r){var c=m[r];c.addEventListener("click",updateUrl.bind(null,Number(c.value)))}updateUrl(0)}},[[330,0]]]);
//# sourceMappingURL=reusable-source.js.map