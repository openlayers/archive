(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{262:function(e,t,a){"use strict";a.r(t);var n=a(20),o=a(1),r=a(137),w=a(0),c=a(386),i=a(52),s=a(26),b=a(3),d=a(18),u=a(2),p=a(4),m=a(13),f=a(70),l=a(218),v=a(73),O=new o.a({layers:[new b.a({source:new p.b({wrapX:!1})})],controls:Object(c.a)({attributionOptions:{collapsible:!1}}),target:"map",view:new w.a({center:[0,0],zoom:1})}),g=new m.b({wrapX:!1}),j=new d.a({source:g});O.addLayer(j);var y=3e3;g.on("addfeature",function(e){!function(e){var t=(new Date).getTime(),a=O.on("postcompose",function(n){var o=n.vectorContext,w=n.frameState,c=e.getGeometry().clone(),s=w.time-t,b=s/y,d=25*Object(i.b)(b)+5,u=Object(i.b)(1-b),p=new f.c({image:new l.a({radius:d,stroke:new v.a({color:"rgba(255, 0, 0, "+u+")",width:.25+u})})});o.setStyle(p),o.drawGeometry(c),s>y?Object(r.b)(a):O.render()})}(e.feature)}),window.setInterval(function(){var e=360*Math.random()-180,t=180*Math.random()-90,a=new s.a(Object(u.f)([e,t])),o=new n.a(a);g.addFeature(o)},1e3)}},[[262,0]]]);
//# sourceMappingURL=feature-animation.js.map