(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{386:function(e,t,o){"use strict";o.r(t);var n=o(224),r=o(23),a=o(5),i=o(4),s=o(49),c=o(31),u=o(10),h=o(16),l=o(2);const p={Drag:function(){c.h.call(this,{handleDownEvent:p.Drag.prototype.handleDownEvent,handleDragEvent:p.Drag.prototype.handleDragEvent,handleMoveEvent:p.Drag.prototype.handleMoveEvent,handleUpEvent:p.Drag.prototype.handleUpEvent}),this.coordinate_=null,this.cursor_="pointer",this.feature_=null,this.previousCursor_=void 0}};Object(n.a)(p.Drag,c.h),p.Drag.prototype.handleDownEvent=function(e){const t=e.map.forEachFeatureAtPixel(e.pixel,function(e){return e});return t&&(this.coordinate_=e.coordinate,this.feature_=t),!!t},p.Drag.prototype.handleDragEvent=function(e){const t=e.coordinate[0]-this.coordinate_[0],o=e.coordinate[1]-this.coordinate_[1];this.feature_.getGeometry().translate(t,o),this.coordinate_[0]=e.coordinate[0],this.coordinate_[1]=e.coordinate[1]},p.Drag.prototype.handleMoveEvent=function(e){if(this.cursor_){const t=e.map.forEachFeatureAtPixel(e.pixel,function(e){return e}),o=e.map.getTargetElement();t?o.style.cursor!=this.cursor_&&(this.previousCursor_=o.style.cursor,o.style.cursor=this.cursor_):void 0!==this.previousCursor_&&(o.style.cursor=this.previousCursor_,this.previousCursor_=void 0)}},p.Drag.prototype.handleUpEvent=function(){return this.coordinate_=null,this.feature_=null,!1};const d=new r.a(new s.e([0,0])),w=new r.a(new s.a([[-1e7,1e6],[-1e6,3e6]])),v=new r.a(new s.f([[[-3e6,-1e6],[-3e6,1e6],[-1e6,1e6],[-1e6,-1e6],[-3e6,-1e6]]]));new a.a({interactions:Object(c.l)().extend([new p.Drag]),layers:[new u.d({source:new h.l({url:"https://api.tiles.mapbox.com/v3/mapbox.geography-class.json?secure"})}),new u.e({source:new h.n({features:[d,w,v]}),style:new l.g({image:new l.d({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",opacity:.95,src:"data/icon.png"}),stroke:new l.f({width:3,color:[255,0,0,1]}),fill:new l.c({color:[0,0,255,.6]})})})],target:"map",view:new i.a({center:[0,0],zoom:2})})}},[[386,0]]]);
//# sourceMappingURL=custom-interactions.js.map