(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{290:function(e,t,i){"use strict";i.r(t);var n=i(3),c=i(2),s=(i(50),i(100)),o=i(170),a=i(69),r=i(191),v=i(4),h=i(29),u=i(5),l=i(13),w=i(76),d=i(122),g=i(117),y=i(402);const f=new v.a({source:new u.b}),A=new h.a({source:new l.b,style:new w.c({fill:new d.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new g.a({color:"#ffcc33",width:2}),image:new y.a({radius:7,fill:new d.a({color:"#ffcc33"})})})}),p=new n.a({layers:[f,A],target:"map",view:new c.a({center:[-11e6,46e5],zoom:4})}),m={init:function(){this.select=new s.a,p.addInteraction(this.select),this.modify=new o.a({features:this.select.getFeatures()}),p.addInteraction(this.modify),this.setEvents()},setEvents:function(){const e=this.select.getFeatures();this.select.on("change:active",function(){e.forEach(e.remove,e)})},setActive:function(e){this.select.setActive(e),this.modify.setActive(e)}};m.init();const S=document.getElementById("options-form"),I={init:function(){p.addInteraction(this.Point),this.Point.setActive(!1),p.addInteraction(this.LineString),this.LineString.setActive(!1),p.addInteraction(this.Polygon),this.Polygon.setActive(!1),p.addInteraction(this.Circle),this.Circle.setActive(!1)},Point:new a.c({source:A.getSource(),type:"Point"}),LineString:new a.c({source:A.getSource(),type:"LineString"}),Polygon:new a.c({source:A.getSource(),type:"Polygon"}),Circle:new a.c({source:A.getSource(),type:"Circle"}),getActive:function(){return!!this.activeType&&this[this.activeType].getActive()},setActive:function(e){const t=S.elements["draw-type"].value;e?(this.activeType&&this[this.activeType].setActive(!1),this[t].setActive(!0),this.activeType=t):(this.activeType&&this[this.activeType].setActive(!1),this.activeType=null)}};I.init(),S.onchange=function(e){const t=e.target.getAttribute("name"),i=e.target.value;"draw-type"==t?I.getActive()&&I.setActive(!0):"interaction"==t&&("modify"==i?(I.setActive(!1),m.setActive(!0)):"draw"==i&&(I.setActive(!0),m.setActive(!1)))},I.setActive(!0),m.setActive(!1);const P=new r.a({source:A.getSource()});p.addInteraction(P)}},[[290,0]]]);
//# sourceMappingURL=snap.js.map