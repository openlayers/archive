(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{318:function(e,t,n){"use strict";n.r(t);var o=n(3),c=n(2),a=n(243),i=n(1),r=n(5),l=n(4),u=n(6);function w(e,t){document.getElementById(e).value=t.toFixed(2)}function b(e){return e-360*Math.floor((e+180)/360)}new o.a({layers:[new r.a({source:new u.b})],target:"map",controls:Object(a.a)({attributionOptions:{collapsible:!1}}),view:new c.a({center:[0,0],zoom:2})}).on("moveend",function(e){var t=e.map,n=t.getView().calculateExtent(t.getSize()),o=Object(l.l)(Object(i.v)(n)),c=Object(l.l)(Object(i.D)(n));w("left",b(o[0])),w("bottom",o[1]),w("right",b(c[0])),w("top",c[1])})}},[[318,0]]]);
//# sourceMappingURL=moveend.js.map