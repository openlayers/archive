(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{345:function(e,n,o){"use strict";o.r(n);var t=o(3),a=o(78),c=o(2),p=o(31),i=o(5),r=o(4),d=o(9),l=new i.a({source:new d.b}),m=new t.a({layers:[l],target:"map",view:new c.a({center:[0,0],zoom:2})}),s=Object(r.f)([16.3725,48.208889]),w=new a.a({position:s,positioning:"center-center",element:document.getElementById("marker"),stopEvent:!1});m.addOverlay(w);var v=new a.a({position:s,element:document.getElementById("vienna")});m.addOverlay(v);var u=new a.a({element:document.getElementById("popup")});m.addOverlay(u),m.on("click",(function(e){var n=u.getElement(),o=e.coordinate,t=Object(p.l)(Object(r.o)(o));$(n).popover("destroy"),u.setPosition(o),$(n).popover({placement:"top",animation:!1,html:!0,content:"<p>The location you clicked was:</p><code>"+t+"</code>"}),$(n).popover("show")}))}},[[345,0]]]);
//# sourceMappingURL=overlay.js.map