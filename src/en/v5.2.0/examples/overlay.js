(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{314:function(e,n,t){"use strict";t.r(n);var o=t(1),a=t(93),c=t(0),p=t(28),i=t(3),r=t(2),d=t(4),l=new i.a({source:new d.b}),m=new o.a({layers:[l],target:"map",view:new c.a({center:[0,0],zoom:2})}),s=Object(r.f)([16.3725,48.208889]),w=new a.a({position:s,positioning:"center-center",element:document.getElementById("marker"),stopEvent:!1});m.addOverlay(w);var v=new a.a({position:s,element:document.getElementById("vienna")});m.addOverlay(v);var u=new a.a({element:document.getElementById("popup")});m.addOverlay(u),m.on("click",function(e){var n=u.getElement(),t=e.coordinate,o=Object(p.l)(Object(r.l)(t));$(n).popover("destroy"),u.setPosition(t),$(n).popover({placement:"top",animation:!1,html:!0,content:"<p>The location you clicked was:</p><code>"+o+"</code>"}),$(n).popover("show")})}},[[314,0]]]);
//# sourceMappingURL=overlay.js.map