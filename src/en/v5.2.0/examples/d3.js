(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{388:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n(0),r=n(6),s=n(3),i=n(72),c=n(2),u=n(71),v=n(163),d=function(t){function ImageCanvasSource(e){t.call(this,{attributions:e.attributions,projection:e.projection,resolutions:e.resolutions,state:e.state}),this.canvasFunction_=e.canvasFunction,this.canvas_=null,this.renderedRevision_=0,this.ratio_=void 0!==e.ratio?e.ratio:1.5}return t&&(ImageCanvasSource.__proto__=t),ImageCanvasSource.prototype=Object.create(t&&t.prototype),ImageCanvasSource.prototype.constructor=ImageCanvasSource,ImageCanvasSource.prototype.getImageInternal=function(t,e,n,o){e=this.findNearestResolution(e);var a=this.canvas_;if(a&&this.renderedRevision_==this.getRevision()&&a.getResolution()==e&&a.getPixelRatio()==n&&Object(r.g)(a.getExtent(),t))return a;t=t.slice(),Object(r.J)(t,this.ratio_);var s=[Object(r.E)(t)/e*n,Object(r.A)(t)/e*n],i=this.canvasFunction_(t,e,n,s,o);return i&&(a=new v.a(t,e,n,i)),this.canvas_=a,this.renderedRevision_=this.getRevision(),a},ImageCanvasSource}(n(94).a),g=new o.a({layers:[new s.a({source:new u.a({layer:"watercolor"})})],target:"map",view:new a.a({center:Object(c.f)([-97,38]),zoom:4})});d3.json("data/topojson/us.json",function(t,e){var n=topojson.feature(e,e.objects.counties),o=new i.a({source:new d({canvasFunction:function(t,e,o,a,s){var i=a[0],u=a[1],v=d3.select(document.createElement("canvas"));v.attr("width",i).attr("height",u);var d=v.node().getContext("2d"),g=d3.geoMercator().scale(1).translate([0,0]),p=d3.geoPath().projection(g),j=p.bounds(n),l=j[1][0]-j[0][0],h=j[1][1]-j[0][1],b=d3.geoBounds(n),w=Object(c.f)(b[0],s),_=Object(c.f)(b[1],s),m=_[0]-w[0];m<0&&(m+=Object(r.E)(s.getExtent()));var f=m/l,O=(_[1]-w[1])/h,I=Math.max(f,O)/(e/o),C=Object(c.l)(Object(r.x)(t),s);return g.scale(I).center(C).translate([i/2,u/2]),(p=p.projection(g).context(d))(n),d.stroke(),v.node()},projection:"EPSG:3857"})});g.addLayer(o)})}},[[388,0]]]);
//# sourceMappingURL=d3.js.map