(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{240:function(t,e,i){"use strict";i.r(e);var n=i(3),a=i(2),r=i(243),o=i(5),c=i(4),l=i(6),s=i(0),p=i(77),h=i(17),u=i(25),w=i(58),b=i(119),d=i(57),v=function(t,e,i){p.a.call(this,t,h.a.LOADED),this.tileSize_=e,this.text_=i,this.canvas_=null};Object(s.c)(v,p.a),v.prototype.getImage=function(){if(this.canvas_)return this.canvas_;var t=this.tileSize_,e=Object(u.a)(t[0],t[1]);return e.strokeStyle="black",e.strokeRect(.5,.5,t[0]+.5,t[1]+.5),e.fillStyle="black",e.textAlign="center",e.textBaseline="middle",e.font="24px sans-serif",e.fillText(this.text_,t[0]/2,t[1]/2),this.canvas_=e.canvas,e.canvas},v.prototype.load=function(){};var f=function(t){b.b.call(this,{opaque:!1,projection:t.projection,tileGrid:t.tileGrid,wrapX:void 0===t.wrapX||t.wrapX})};Object(s.c)(f,b.b),f.prototype.getTile=function(t,e,i){var n=Object(d.d)(t,e,i);if(this.tileCache.containsKey(n))return this.tileCache.get(n);var a=Object(w.d)(this.tileGrid.getTileSize(t)),r=[t,e,i],o=this.getTileCoordForTileUrlFunction(r),c=o?this.getTileCoordForTileUrlFunction(o).toString():"",l=new v(r,a,c);return this.tileCache.set(n,l),l};var g=f,j=new l.b;new n.a({layers:[new o.a({source:j}),new o.a({source:new g({projection:"EPSG:3857",tileGrid:j.getTileGrid()})})],target:"map",controls:Object(r.a)({attributionOptions:{collapsible:!1}}),view:new a.a({center:Object(c.f)([-.1275,51.507222]),zoom:10})})}},[[240,0]]]);
//# sourceMappingURL=canvas-tiles.js.map