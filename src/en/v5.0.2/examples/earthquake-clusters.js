(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{373:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(2),o=n(1),s=n(105),c=n(50),l=n(100),i=n(29),u=n(4),w=n(227),g=n(13),f=n(75),d=n(122),m=n(117),b=n(76),h=n(113),p=n(402),y=n(88);const k=new d.a({color:"rgba(255, 153, 0, 0.8)"}),j=new m.a({color:"rgba(255, 204, 0, 0.2)",width:1}),x=new d.a({color:"#fff"}),O=new m.a({color:"rgba(0, 0, 0, 0.6)",width:3}),M=new d.a({color:"rgba(255, 255, 255, 0.01)"});function v(e){const t=e.get("name"),n=5+20*(parseFloat(t.substr(2))-5);return new b.c({geometry:e.getGeometry(),image:new h.a({radius1:n,radius2:3,points:5,angle:Math.PI,fill:k,stroke:j})})}let E,S=null;const q=function(e){E=0;const t=S.getSource().getFeatures();let n,a;for(let r=t.length-1;r>=0;--r){const s=(n=t[r]).get("features"),c=Object(o.j)();let l,i;for(l=0,i=s.length;l<i;++l)Object(o.q)(c,s[l].getGeometry().getExtent());E=Math.max(E,i),a=.25*(Object(o.E)(c)+Object(o.A)(c))/e,n.set("radius",a)}};let F;S=new i.a({source:new w.a({distance:40,source:new g.b({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new s.a({extractStyles:!1})})}),style:function(e,t){let n;t!=F&&(q(t),F=t);const a=e.get("features").length;n=a>1?new b.c({image:new p.a({radius:e.get("radius"),fill:new d.a({color:[255,153,0,Math.min(.8,.4+a/E)]})}),text:new y.a({text:a.toString(),fill:x,stroke:O})}):v(e.get("features")[0]);return n}});const G=new u.a({source:new f.a({layer:"toner"})});new a.a({layers:[G,S],interactions:Object(c.a)().extend([new l.a({condition:function(e){return"pointermove"==e.type||"singleclick"==e.type},style:function(e){const t=[new b.c({image:new p.a({radius:e.get("radius"),fill:M})})],n=e.get("features");let a;for(let e=n.length-1;e>=0;--e)a=n[e],t.push(v(a));return t}})]),target:"map",view:new r.a({center:[0,0],zoom:2})})}},[[373,0]]]);
//# sourceMappingURL=earthquake-clusters.js.map