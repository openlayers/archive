(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{397:function(t,e,o){"use strict";o.r(e);var a=o(1),i=o(0),n=o(3),r=o(12),s=o(45),p=function(t){function CartoDB(e){t.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,maxZoom:void 0!==e.maxZoom?e.maxZoom:18,minZoom:e.minZoom,projection:e.projection,state:s.a.LOADING,wrapX:e.wrapX}),this.account_=e.account,this.mapId_=e.map||"",this.config_=e.config||{},this.templateCache_={},this.initializeMap_()}return t&&(CartoDB.__proto__=t),CartoDB.prototype=Object.create(t&&t.prototype),CartoDB.prototype.constructor=CartoDB,CartoDB.prototype.getConfig=function(){return this.config_},CartoDB.prototype.updateConfig=function(t){Object(r.a)(this.config_,t),this.initializeMap_()},CartoDB.prototype.setConfig=function(t){this.config_=t||{},this.initializeMap_()},CartoDB.prototype.initializeMap_=function(){var t=JSON.stringify(this.config_);if(this.templateCache_[t])this.applyTemplate_(this.templateCache_[t]);else{var e="https://"+this.account_+".carto.com/api/v1/map";this.mapId_&&(e+="/named/"+this.mapId_);var o=new XMLHttpRequest;o.addEventListener("load",this.handleInitResponse_.bind(this,t)),o.addEventListener("error",this.handleInitError_.bind(this)),o.open("POST",e),o.setRequestHeader("Content-type","application/json"),o.send(JSON.stringify(this.config_))}},CartoDB.prototype.handleInitResponse_=function(t,e){var o=e.target;if(!o.status||o.status>=200&&o.status<300){var a;try{a=JSON.parse(o.responseText)}catch(t){return void this.setState(s.a.ERROR)}this.applyTemplate_(a),this.templateCache_[t]=a,this.setState(s.a.READY)}else this.setState(s.a.ERROR)},CartoDB.prototype.handleInitError_=function(t){this.setState(s.a.ERROR)},CartoDB.prototype.applyTemplate_=function(t){var e="https://"+t.cdn_url.https+"/"+this.account_+"/api/v1/map/"+t.layergroupid+"/{z}/{x}/{y}.png";this.setUrl(e)},CartoDB}(o(51).a),c=o(4),h={layers:[{type:"cartodb",options:{cartocss_version:"2.1.1",cartocss:"#layer { polygon-fill: #F00; }",sql:"select * from european_countries_e where area > 0"}}]},u=new p({account:"documentation",config:h});new a.a({layers:[new n.a({source:new c.b}),new n.a({source:u})],target:"map",view:new i.a({center:[0,0],zoom:2})});document.getElementById("country-area").addEventListener("change",function(){!function(t){h.layers[0].options.sql="select * from european_countries_e where area > "+t,u.setConfig(h)}(this.value)})}},[[397,0]]]);
//# sourceMappingURL=cartodb.js.map