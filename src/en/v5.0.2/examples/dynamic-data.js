(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{374:function(e,a,n){"use strict";n.r(a);var o=n(3),t=n(2),r=n(72),s=n(24),w=n(4),c=n(5),l=n(76),i=n(402),d=n(122),p=n(117);const m=new o.a({layers:[new w.a({source:new c.b})],target:"map",view:new t.a({center:[0,0],zoom:2})}),h=new l.c({image:new i.a({radius:5,snapToPixel:!1,fill:new d.a({color:"yellow"}),stroke:new p.a({color:"red",width:1})})}),u=new l.c({image:new i.a({radius:2,snapToPixel:!1,fill:new d.a({color:"blue"})})}),y=new l.c({image:new i.a({radius:5,snapToPixel:!1,fill:new d.a({color:"black"})})}),f=2e6;m.on("postcompose",function(e){const a=e.vectorContext,n=e.frameState,o=2*Math.PI*n.time/3e4,t=[];let w;for(w=0;w<200;++w){const e=o+2*Math.PI*w/200,a=9e6*Math.cos(e)+2e6*Math.cos(9e6*e/f),n=9e6*Math.sin(e)+2e6*Math.sin(9e6*e/f);t.push([a,n])}a.setStyle(h),a.drawGeometry(new r.a(t));const c=new s.a(t[t.length-1]);a.setStyle(y),a.drawGeometry(c),a.setStyle(u),a.drawGeometry(c),m.render()}),m.render()}},[[374,0]]]);
//# sourceMappingURL=dynamic-data.js.map