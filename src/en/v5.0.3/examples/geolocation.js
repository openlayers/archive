(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{359:function(e,n,t){"use strict";t.r(n);var a=t(20),c=t(174),r=t(3),o=t(2),i=t(243),s=t(24),u=t(5),g=t(29),w=t(6),d=t(13),l=t(73),m=t(396),y=t(128),p=t(116),f=new o.a({center:[0,0],zoom:2}),h=new r.a({layers:[new u.a({source:new w.b})],target:"map",controls:Object(i.a)({attributionOptions:{collapsible:!1}}),view:f}),b=new c.a({trackingOptions:{enableHighAccuracy:!0},projection:f.getProjection()});function k(e){return document.getElementById(e)}k("track").addEventListener("change",function(){b.setTracking(this.checked)}),b.on("change",function(){k("accuracy").innerText=b.getAccuracy()+" [m]",k("altitude").innerText=b.getAltitude()+" [m]",k("altitudeAccuracy").innerText=b.getAltitudeAccuracy()+" [m]",k("heading").innerText=b.getHeading()+" [rad]",k("speed").innerText=b.getSpeed()+" [m/s]"}),b.on("error",function(e){var n=document.getElementById("info");n.innerHTML=e.message,n.style.display=""});var v=new a.a;b.on("change:accuracyGeometry",function(){v.setGeometry(b.getAccuracyGeometry())});var A=new a.a;A.setStyle(new l.c({image:new m.a({radius:6,fill:new y.a({color:"#3399CC"}),stroke:new p.a({color:"#fff",width:2})})})),b.on("change:position",function(){var e=b.getPosition();A.setGeometry(e?new s.a(e):null)}),new g.a({map:h,source:new d.b({features:[v,A]})})}},[[359,0]]]);
//# sourceMappingURL=geolocation.js.map