(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{256:function(t,e,o){"use strict";o.r(e);var a=o(3),s=o(2),r=o(1),n=o(85),c=o(5),i=o(46),u=o(4),p=o(66),d=function(t){function e(e){t.call(this,e),this.features=e.features,this.svg=d3.select(document.createElement("div")).append("svg").style("position","absolute"),this.svg.append("path").datum(this.features).attr("class","boundary")}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getSourceState=function(){return i.a.READY},e.prototype.render=function(t){var e=t.size[0],o=t.size[1],a=t.viewState.projection,s=d3.geoMercator().scale(1).translate([0,0]),n=d3.geoPath().projection(s),c=n.bounds(this.features),i=c[1][0]-c[0][0],p=c[1][1]-c[0][1],d=d3.geoBounds(this.features),h=Object(u.f)(d[0],a),f=Object(u.f)(d[1],a),l=f[0]-h[0];l<0&&(l+=Object(r.E)(a.getExtent()));var w=l/i,j=(f[1]-h[1])/p,v=Math.max(w,j)/t.viewState.resolution,g=Object(u.o)(Object(r.x)(t.extent),a);return s.scale(v).center(g).translate([e/2,o/2]),(n=n.projection(s))(this.features),this.svg.attr("width",e),this.svg.attr("height",o),this.svg.select("path").attr("d",n),this.svg.node()},e}(n.a),h=new a.a({layers:[new c.a({source:new p.a({layer:"watercolor"})})],target:"map",view:new s.a({center:Object(u.f)([-97,38]),zoom:4})});d3.json("data/topojson/us.json").then(function(t){var e=new d({features:topojson.feature(t,t.objects.counties)});h.addLayer(e)})}},[[256,0]]]);
//# sourceMappingURL=d3.js.map