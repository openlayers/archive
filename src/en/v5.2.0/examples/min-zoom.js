(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{307:function(e,n,o){"use strict";o.r(n);var t=o(1),i=o(0),a=o(3),r=o(4),w=document.getElementById("map");function getMinZoom(){var e=w.clientWidth;return Math.ceil(Math.LOG2E*Math.log(e/256))}var m=getMinZoom(),c=new i.a({center:[0,0],minZoom:m,zoom:m});new t.a({layers:[new a.a({source:new r.b})],target:"map",view:c});window.addEventListener("resize",function(){var e=getMinZoom();e!==c.getMinZoom()&&c.setMinZoom(e)})}},[[307,0]]]);
//# sourceMappingURL=min-zoom.js.map