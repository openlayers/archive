(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{368:function(e,a,t){"use strict";t.r(a);var n=t(20),o=t(3),r=t(118),w=t(2),c=t(243),i=t(56),s=t(24),b=t(5),d=t(29),u=t(4),p=t(6),m=t(13),l=t(73),f=t(396),v=t(116),O=new o.a({layers:[new b.a({source:new p.b({wrapX:!1})})],controls:Object(c.a)({attributionOptions:{collapsible:!1}}),target:"map",view:new w.a({center:[0,0],zoom:1})}),g=new m.b({wrapX:!1}),j=new d.a({source:g});O.addLayer(j);var y=3e3;g.on("addfeature",function(e){!function(e){var a=(new Date).getTime(),t=O.on("postcompose",function(n){var o=n.vectorContext,w=n.frameState,c=e.getGeometry().clone(),s=w.time-a,b=s/y,d=25*Object(i.b)(b)+5,u=Object(i.b)(1-b),p=new l.c({image:new f.a({radius:d,snapToPixel:!1,stroke:new v.a({color:"rgba(255, 0, 0, "+u+")",width:.25+u})})});o.setStyle(p),o.drawGeometry(c),s>y?Object(r.b)(t):O.render()})}(e.feature)}),window.setInterval(function(){var e=360*Math.random()-180,a=180*Math.random()-90,t=new s.a(Object(u.f)([e,a])),o=new n.a(t);g.addFeature(o)},1e3)}},[[368,0]]]);
//# sourceMappingURL=feature-animation.js.map