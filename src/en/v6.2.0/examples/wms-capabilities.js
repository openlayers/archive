(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{438:function(t,e,n){"use strict";n.r(e);var r=n(141),c=n(168),i=n(6),b=n(0),u=[null,"http://www.opengis.net/wms"],o=Object(b.r)(u,{Service:Object(b.n)((function(t,e){return Object(b.u)({},a,t,e)})),Capability:Object(b.n)((function(t,e){return Object(b.u)({},O,t,e)}))}),O=Object(b.r)(u,{Request:Object(b.n)((function(t,e){return Object(b.u)({},v,t,e)})),Exception:Object(b.n)((function(t,e){return Object(b.u)([],f,t,e)})),Layer:Object(b.n)((function(t,e){return Object(b.u)({},l,t,e)}))}),j=function(t){function e(){t.call(this),this.version=void 0}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.readFromDocument=function(t){for(var e=t.firstChild;e;e=e.nextSibling)if(e.nodeType==Node.ELEMENT_NODE)return this.readFromNode(e);return null},e.prototype.readFromNode=function(t){this.version=t.getAttribute("version").trim();var e=Object(b.u)({version:this.version},o,t,[]);return e||null},e}(c.a),a=Object(b.r)(u,{Name:Object(b.n)(i.h),Title:Object(b.n)(i.h),Abstract:Object(b.n)(i.h),KeywordList:Object(b.n)(R),OnlineResource:Object(b.n)(r.a),ContactInformation:Object(b.n)((function(t,e){return Object(b.u)({},d,t,e)})),Fees:Object(b.n)(i.h),AccessConstraints:Object(b.n)(i.h),LayerLimit:Object(b.n)(i.f),MaxWidth:Object(b.n)(i.f),MaxHeight:Object(b.n)(i.f)}),d=Object(b.r)(u,{ContactPersonPrimary:Object(b.n)((function(t,e){return Object(b.u)({},s,t,e)})),ContactPosition:Object(b.n)(i.h),ContactAddress:Object(b.n)((function(t,e){return Object(b.u)({},h,t,e)})),ContactVoiceTelephone:Object(b.n)(i.h),ContactFacsimileTelephone:Object(b.n)(i.h),ContactElectronicMailAddress:Object(b.n)(i.h)}),s=Object(b.r)(u,{ContactPerson:Object(b.n)(i.h),ContactOrganization:Object(b.n)(i.h)}),h=Object(b.r)(u,{AddressType:Object(b.n)(i.h),Address:Object(b.n)(i.h),City:Object(b.n)(i.h),StateOrProvince:Object(b.n)(i.h),PostCode:Object(b.n)(i.h),Country:Object(b.n)(i.h)}),f=Object(b.r)(u,{Format:Object(b.j)(i.h)}),l=Object(b.r)(u,{Name:Object(b.n)(i.h),Title:Object(b.n)(i.h),Abstract:Object(b.n)(i.h),KeywordList:Object(b.n)(R),CRS:Object(b.m)(i.h),EX_GeographicBoundingBox:Object(b.n)((function(t,e){var n=Object(b.u)({},m,t,e);if(!n)return;var r=n.westBoundLongitude,c=n.southBoundLatitude,i=n.eastBoundLongitude,u=n.northBoundLatitude;if(void 0===r||void 0===c||void 0===i||void 0===u)return;return[r,c,i,u]})),BoundingBox:Object(b.m)((function(t,e){var n=[Object(i.e)(t.getAttribute("minx")),Object(i.e)(t.getAttribute("miny")),Object(i.e)(t.getAttribute("maxx")),Object(i.e)(t.getAttribute("maxy"))],r=[Object(i.e)(t.getAttribute("resx")),Object(i.e)(t.getAttribute("resy"))];return{crs:t.getAttribute("CRS"),extent:n,res:r}})),Dimension:Object(b.m)((function(t,e){return{name:t.getAttribute("name"),units:t.getAttribute("units"),unitSymbol:t.getAttribute("unitSymbol"),default:t.getAttribute("default"),multipleValues:Object(i.b)(t.getAttribute("multipleValues")),nearestValue:Object(i.b)(t.getAttribute("nearestValue")),current:Object(i.b)(t.getAttribute("current")),values:Object(i.h)(t)}})),Attribution:Object(b.n)((function(t,e){return Object(b.u)({},g,t,e)})),AuthorityURL:Object(b.m)((function(t,e){var n=C(t,e);if(n)return n.name=t.getAttribute("name"),n;return})),Identifier:Object(b.m)(i.h),MetadataURL:Object(b.m)((function(t,e){var n=C(t,e);if(n)return n.type=t.getAttribute("type"),n;return})),DataURL:Object(b.m)(C),FeatureListURL:Object(b.m)(C),Style:Object(b.m)((function(t,e){return Object(b.u)({},L,t,e)})),MinScaleDenominator:Object(b.n)(i.d),MaxScaleDenominator:Object(b.n)(i.d),Layer:Object(b.m)((function(t,e){var n=e[e.length-1],r=Object(b.u)({},l,t,e);if(!r)return;var c=Object(i.b)(t.getAttribute("queryable"));void 0===c&&(c=n.queryable);r.queryable=void 0!==c&&c;var u=Object(i.g)(t.getAttribute("cascaded"));void 0===u&&(u=n.cascaded);r.cascaded=u;var o=Object(i.b)(t.getAttribute("opaque"));void 0===o&&(o=n.opaque);r.opaque=void 0!==o&&o;var O=Object(i.b)(t.getAttribute("noSubsets"));void 0===O&&(O=n.noSubsets);r.noSubsets=void 0!==O&&O;var j=Object(i.e)(t.getAttribute("fixedWidth"));j||(j=n.fixedWidth);r.fixedWidth=j;var a=Object(i.e)(t.getAttribute("fixedHeight"));a||(a=n.fixedHeight);r.fixedHeight=a,["Style","CRS","AuthorityURL"].forEach((function(t){if(t in n){var e=r[t]||[];r[t]=e.concat(n[t])}}));return["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"].forEach((function(t){if(!(t in r)){var e=n[t];r[t]=e}})),r}))}),g=Object(b.r)(u,{Title:Object(b.n)(i.h),OnlineResource:Object(b.n)(r.a),LogoURL:Object(b.n)(B)}),m=Object(b.r)(u,{westBoundLongitude:Object(b.n)(i.d),eastBoundLongitude:Object(b.n)(i.d),southBoundLatitude:Object(b.n)(i.d),northBoundLatitude:Object(b.n)(i.d)}),v=Object(b.r)(u,{GetCapabilities:Object(b.n)(w),GetMap:Object(b.n)(w),GetFeatureInfo:Object(b.n)(w)}),p=Object(b.r)(u,{Format:Object(b.m)(i.h),DCPType:Object(b.m)((function(t,e){return Object(b.u)({},A,t,e)}))}),A=Object(b.r)(u,{HTTP:Object(b.n)((function(t,e){return Object(b.u)({},y,t,e)}))}),y=Object(b.r)(u,{Get:Object(b.n)(C),Post:Object(b.n)(C)}),L=Object(b.r)(u,{Name:Object(b.n)(i.h),Title:Object(b.n)(i.h),Abstract:Object(b.n)(i.h),LegendURL:Object(b.m)(B),StyleSheetURL:Object(b.n)(C),StyleURL:Object(b.n)(C)}),x=Object(b.r)(u,{Format:Object(b.n)(i.h),OnlineResource:Object(b.n)(r.a)}),S=Object(b.r)(u,{Keyword:Object(b.j)(i.h)});function C(t,e){return Object(b.u)({},x,t,e)}function w(t,e){return Object(b.u)({},p,t,e)}function B(t,e){var n=C(t,e);if(n){var r=[Object(i.g)(t.getAttribute("width")),Object(i.g)(t.getAttribute("height"))];return n.size=r,n}}function R(t,e){return Object(b.u)([],S,t,e)}var T=new j;fetch("data/ogcsample.xml").then((function(t){return t.text()})).then((function(t){var e=T.read(t);document.getElementById("log").innerText=JSON.stringify(e,null,2)}))}},[[438,0]]]);
//# sourceMappingURL=wms-capabilities.js.map