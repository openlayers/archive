(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{351:function(e,n,t){"use strict";t.r(n);var a=t(3),i=t(2),o=t(4),s=t(50),r="https://{a-c}.tiles.mapbox.com/v3/mapbox.world-bright/{z}/{x}/{y}.png",c=new o.a({source:new s.a({url:r})}),w=new o.a({source:new s.a({url:r,transition:0}),visible:!1});new a.a({layers:[c,w],target:"map",view:new i.a({center:[0,0],zoom:2,maxZoom:11})});document.getElementById("transition").addEventListener("change",function(e){var n=e.target.checked;c.setVisible(n),w.setVisible(!n)})}},[[351,0]]]);
//# sourceMappingURL=tile-transitions.js.map