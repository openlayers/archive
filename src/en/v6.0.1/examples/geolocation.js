(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{291:function(e,n,t){"use strict";t.r(n);var a=t(24),c=t(168),r=t(3),i=t(2),o=t(26),u=t(5),s=t(22),g=t(9),w=t(10),d=t(11),l=t(48),m=t(23),y=t(19),f=new i.a({center:[0,0],zoom:2}),p=new r.a({layers:[new u.a({source:new g.b})],target:"map",view:f}),h=new c.a({trackingOptions:{enableHighAccuracy:!0},projection:f.getProjection()});function k(e){return document.getElementById(e)}k("track").addEventListener("change",function(){h.setTracking(this.checked)}),h.on("change",function(){k("accuracy").innerText=h.getAccuracy()+" [m]",k("altitude").innerText=h.getAltitude()+" [m]",k("altitudeAccuracy").innerText=h.getAltitudeAccuracy()+" [m]",k("heading").innerText=h.getHeading()+" [rad]",k("speed").innerText=h.getSpeed()+" [m/s]"}),h.on("error",function(e){var n=document.getElementById("info");n.innerHTML=e.message,n.style.display=""});var v=new a.a;h.on("change:accuracyGeometry",function(){v.setGeometry(h.getAccuracyGeometry())});var A=new a.a;A.setStyle(new d.c({image:new l.a({radius:6,fill:new m.a({color:"#3399CC"}),stroke:new y.a({color:"#fff",width:2})})})),h.on("change:position",function(){var e=h.getPosition();A.setGeometry(e?new o.a(e):null)}),new s.a({map:p,source:new w.a({features:[v,A]})})}},[[291,0]]]);
//# sourceMappingURL=geolocation.js.map