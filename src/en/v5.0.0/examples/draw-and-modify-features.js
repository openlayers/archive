(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{379:function(e,n,o){"use strict";o.r(n);var c=o(5),t=o(4),r=o(31),w=o(10),a=o(16),i=o(2);const s=new w.d({source:new a.f}),d=new a.n,u=new w.e({source:d,style:new i.g({fill:new i.c({color:"rgba(255, 255, 255, 0.2)"}),stroke:new i.f({color:"#ffcc33",width:2}),image:new i.b({radius:7,fill:new i.c({color:"#ffcc33"})})})}),l=new c.a({layers:[s,u],target:"map",view:new t.a({center:[-11e6,46e5],zoom:4})}),f=new r.e({source:d});let p,m;l.addInteraction(f);const g=document.getElementById("type");function I(){p=new r.d({source:d,type:g.value}),l.addInteraction(p),m=new r.j({source:d}),l.addInteraction(m)}g.onchange=function(){l.removeInteraction(p),l.removeInteraction(m),I()},I()}},[[379,0]]]);
//# sourceMappingURL=draw-and-modify-features.js.map