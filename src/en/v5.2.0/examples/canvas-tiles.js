(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{389:function(e,t,i){"use strict";i.r(t);var o=i(1),l=i(0),r=i(386),n=i(3),a=i(2),c=i(4),s=i(113),p=i(22),u=i(27),b=i(57),d=i(132),T=i(53),h=function(e){function LabeledTile(t,i,o){e.call(this,t,p.a.LOADED),this.tileSize_=i,this.text_=o,this.canvas_=null}return e&&(LabeledTile.__proto__=e),LabeledTile.prototype=Object.create(e&&e.prototype),LabeledTile.prototype.constructor=LabeledTile,LabeledTile.prototype.getImage=function(){if(this.canvas_)return this.canvas_;var e=this.tileSize_,t=Object(u.a)(e[0],e[1]);return t.strokeStyle="black",t.strokeRect(.5,.5,e[0]+.5,e[1]+.5),t.fillStyle="black",t.textAlign="center",t.textBaseline="middle",t.font="24px sans-serif",t.fillText(this.text_,e[0]/2,e[1]/2),this.canvas_=t.canvas,t.canvas},LabeledTile.prototype.load=function(){},LabeledTile}(s.a),g=function(e){function TileDebug(t){e.call(this,{opaque:!1,projection:t.projection,tileGrid:t.tileGrid,wrapX:void 0===t.wrapX||t.wrapX})}return e&&(TileDebug.__proto__=e),TileDebug.prototype=Object.create(e&&e.prototype),TileDebug.prototype.constructor=TileDebug,TileDebug.prototype.getTile=function(e,t,i){var o=Object(T.d)(e,t,i);if(this.tileCache.containsKey(o))return this.tileCache.get(o);var l=Object(b.d)(this.tileGrid.getTileSize(e)),r=[e,t,i],n=this.getTileCoordForTileUrlFunction(r),a=n?this.getTileCoordForTileUrlFunction(n).toString():"",c=new h(r,l,a);return this.tileCache.set(o,c),c},TileDebug}(d.b),w=new c.b;new o.a({layers:[new n.a({source:w}),new n.a({source:new g({projection:"EPSG:3857",tileGrid:w.getTileGrid()})})],target:"map",controls:Object(r.a)({attributionOptions:{collapsible:!1}}),view:new l.a({center:Object(a.f)([-.1275,51.507222]),zoom:10})})}},[[389,0]]]);
//# sourceMappingURL=canvas-tiles.js.map