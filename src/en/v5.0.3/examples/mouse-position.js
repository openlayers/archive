(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{320:function(e,t,n){"use strict";n.r(t);var o=n(3),a=n(2),c=n(243),i=n(202),r=n(26),s=n(5),d=n(6),u=new i.a({coordinateFormat:Object(r.d)(4),projection:"EPSG:4326",className:"custom-mouse-position",target:document.getElementById("mouse-position"),undefinedHTML:"&nbsp;"});new o.a({controls:Object(c.a)({attributionOptions:{collapsible:!1}}).extend([u]),layers:[new s.a({source:new d.b})],target:"map",view:new a.a({center:[0,0],zoom:2})});document.getElementById("projection").addEventListener("change",function(e){u.setProjection(e.target.value)}),document.getElementById("precision").addEventListener("change",function(e){var t=Object(r.d)(e.target.valueAsNumber);u.setCoordinateFormat(t)})}},[[320,0]]]);
//# sourceMappingURL=mouse-position.js.map