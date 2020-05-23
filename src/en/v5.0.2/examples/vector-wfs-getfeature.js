(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{245:function(t,e,r){"use strict";r.r(e);var o=r(3),n=r(2),i=r(0),s=r(22);const a=function(t){this.tagName_=t};a.prototype.getTagName=function(){return this.tagName_};var c=a;const p=function(t,e){c.call(this,t),this.conditions=Array.prototype.slice.call(arguments,1),Object(s.a)(this.conditions.length>=2,57)};Object(i.c)(p,c);var u=p;const l=function(t){const e=["And"].concat(Array.prototype.slice.call(arguments));u.apply(this,e)};Object(i.c)(l,u);var h=l;const m=function(t,e,r){c.call(this,"BBOX"),this.geometryName=t,this.extent=e,this.srsName=r};Object(i.c)(m,c);var b=m;const f=function(t,e,r,o){c.call(this,t),this.geometryName=e||"the_geom",this.geometry=r,this.srsName=o};Object(i.c)(f,c);var d=f;const O=function(t,e,r){d.call(this,"Contains",t,e,r)};Object(i.c)(O,d);const g=function(t,e){c.call(this,t),this.propertyName=e};Object(i.c)(g,c);var y=g;const j=function(t,e,r){y.call(this,"During",t),this.begin=e,this.end=r};Object(i.c)(j,y);const w=function(t,e,r,o){y.call(this,t,e),this.expression=r,this.matchCase=o};Object(i.c)(w,y);var _=w;const S=function(t,e,r){_.call(this,"PropertyIsEqualTo",t,e,r)};Object(i.c)(S,_);var E=S;const N=function(t,e){_.call(this,"PropertyIsGreaterThan",t,e)};Object(i.c)(N,_);const R=function(t,e){_.call(this,"PropertyIsGreaterThanOrEqualTo",t,e)};Object(i.c)(R,_);const P=function(t,e,r){d.call(this,"Intersects",t,e,r)};Object(i.c)(P,d);const v=function(t,e,r){y.call(this,"PropertyIsBetween",t),this.lowerBoundary=e,this.upperBoundary=r};Object(i.c)(v,y);const C=function(t,e,r,o,n,i){y.call(this,"PropertyIsLike",t),this.pattern=e,this.wildCard=void 0!==r?r:"*",this.singleChar=void 0!==o?o:".",this.escapeChar=void 0!==n?n:"!",this.matchCase=i};Object(i.c)(C,y);var A=C;const M=function(t){y.call(this,"PropertyIsNull",t)};Object(i.c)(M,y);const T=function(t,e){_.call(this,"PropertyIsLessThan",t,e)};Object(i.c)(T,_);const L=function(t,e){_.call(this,"PropertyIsLessThanOrEqualTo",t,e)};Object(i.c)(L,_);const I=function(t){c.call(this,"Not"),this.condition=t};Object(i.c)(I,c);const F=function(t,e,r){_.call(this,"PropertyIsNotEqualTo",t,e,r)};Object(i.c)(F,_);const x=function(t){const e=["Or"].concat(Array.prototype.slice.call(arguments));u.apply(this,e)};Object(i.c)(x,u);const G=function(t,e,r){d.call(this,"Within",t,e,r)};Object(i.c)(G,d);function U(t){const e=[null].concat(Array.prototype.slice.call(arguments));return new(Function.prototype.bind.apply(h,e))}var Z=r(187),D=r(15),B=r(1),Y=r(40),q=r(48),V=r(7),z=r(91),k=r(19),W=r(32),X=r(73),H=r(87),J=r(36),K=r(14),Q=r(8),$=r(6);const tt=q.a+" http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd",et=function(t){const e=t||{};q.b.call(this,e),this.surface_=void 0!==e.surface&&e.surface,this.curve_=void 0!==e.curve&&e.curve,this.multiCurve_=void 0===e.multiCurve||e.multiCurve,this.multiSurface_=void 0===e.multiSurface||e.multiSurface,this.schemaLocation=e.schemaLocation?e.schemaLocation:tt,this.hasZ=void 0!==e.hasZ&&e.hasZ};Object(i.c)(et,q.b),et.prototype.readMultiCurve_=function(t,e){const r=Object($.u)([],this.MULTICURVE_PARSERS_,t,e,this);if(r){const t=new X.a(null);return t.setLineStrings(r),t}},et.prototype.readMultiSurface_=function(t,e){const r=Object($.u)([],this.MULTISURFACE_PARSERS_,t,e,this);if(r){const t=new H.a(null);return t.setPolygons(r),t}},et.prototype.curveMemberParser_=function(t,e){Object($.t)(this.CURVEMEMBER_PARSERS_,t,e,this)},et.prototype.surfaceMemberParser_=function(t,e){Object($.t)(this.SURFACEMEMBER_PARSERS_,t,e,this)},et.prototype.readPatch_=function(t,e){return Object($.u)([null],this.PATCHES_PARSERS_,t,e,this)},et.prototype.readSegment_=function(t,e){return Object($.u)([null],this.SEGMENTS_PARSERS_,t,e,this)},et.prototype.readPolygonPatch_=function(t,e){return Object($.u)([null],this.FLAT_LINEAR_RINGS_PARSERS_,t,e,this)},et.prototype.readLineStringSegment_=function(t,e){return Object($.u)([null],this.GEOMETRY_FLAT_COORDINATES_PARSERS_,t,e,this)},et.prototype.interiorParser_=function(t,e){const r=Object($.u)(void 0,this.RING_PARSERS,t,e,this);if(r){e[e.length-1].push(r)}},et.prototype.exteriorParser_=function(t,e){const r=Object($.u)(void 0,this.RING_PARSERS,t,e,this);if(r){e[e.length-1][0]=r}},et.prototype.readSurface_=function(t,e){const r=Object($.u)([null],this.SURFACE_PARSERS_,t,e,this);if(r&&r[0]){const t=new J.b(null),e=r[0],o=[e.length];let n,i;for(n=1,i=r.length;n<i;++n)Object(D.c)(e,r[n]),o.push(e.length);return t.setFlatCoordinates(k.a.XYZ,e,o),t}},et.prototype.readCurve_=function(t,e){const r=Object($.u)([null],this.CURVE_PARSERS_,t,e,this);if(r){const t=new W.a(null);return t.setFlatCoordinates(k.a.XYZ,r),t}},et.prototype.readEnvelope_=function(t,e){const r=Object($.u)([null],this.ENVELOPE_PARSERS_,t,e,this);return Object(B.k)(r[1][0],r[1][1],r[2][0],r[2][1])},et.prototype.readFlatPos_=function(t,e){let r=Object($.e)(t,!1);const o=/^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/,n=[];let i;for(;i=o.exec(r);)n.push(parseFloat(i[1])),r=r.substr(i[0].length);if(""!==r)return;const s=e[0].srsName;let a="enu";if(s){a=Object(Q.g)(s).getAxisOrientation()}if("neu"===a){let t,e;for(t=0,e=n.length;t<e;t+=3){const e=n[t],r=n[t+1];n[t]=r,n[t+1]=e}}const c=n.length;return 2==c&&n.push(0),0!==c?n:void 0},et.prototype.readFlatPosList_=function(t,e){const r=Object($.e)(t,!1).replace(/^\s*|\s*$/g,""),o=e[0],n=o.srsName,i=o.srsDimension;let s="enu";if(n){s=Object(Q.g)(n).getAxisOrientation()}const a=r.split(/\s+/);let c,p,u,l=2;t.getAttribute("srsDimension")?l=Object(V.g)(t.getAttribute("srsDimension")):t.getAttribute("dimension")?l=Object(V.g)(t.getAttribute("dimension")):t.parentNode.getAttribute("srsDimension")?l=Object(V.g)(t.parentNode.getAttribute("srsDimension")):i&&(l=Object(V.g)(i));const h=[];for(let t=0,e=a.length;t<e;t+=l)c=parseFloat(a[t]),p=parseFloat(a[t+1]),u=3===l?parseFloat(a[t+2]):0,"en"===s.substr(0,2)?h.push(c,p,u):h.push(p,c,u);return h},et.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS_={"http://www.opengis.net/gml":{pos:Object($.o)(et.prototype.readFlatPos_),posList:Object($.o)(et.prototype.readFlatPosList_)}},et.prototype.FLAT_LINEAR_RINGS_PARSERS_={"http://www.opengis.net/gml":{interior:et.prototype.interiorParser_,exterior:et.prototype.exteriorParser_}},et.prototype.GEOMETRY_PARSERS_={"http://www.opengis.net/gml":{Point:Object($.o)(q.b.prototype.readPoint),MultiPoint:Object($.o)(q.b.prototype.readMultiPoint),LineString:Object($.o)(q.b.prototype.readLineString),MultiLineString:Object($.o)(q.b.prototype.readMultiLineString),LinearRing:Object($.o)(q.b.prototype.readLinearRing),Polygon:Object($.o)(q.b.prototype.readPolygon),MultiPolygon:Object($.o)(q.b.prototype.readMultiPolygon),Surface:Object($.o)(et.prototype.readSurface_),MultiSurface:Object($.o)(et.prototype.readMultiSurface_),Curve:Object($.o)(et.prototype.readCurve_),MultiCurve:Object($.o)(et.prototype.readMultiCurve_),Envelope:Object($.o)(et.prototype.readEnvelope_)}},et.prototype.MULTICURVE_PARSERS_={"http://www.opengis.net/gml":{curveMember:Object($.j)(et.prototype.curveMemberParser_),curveMembers:Object($.j)(et.prototype.curveMemberParser_)}},et.prototype.MULTISURFACE_PARSERS_={"http://www.opengis.net/gml":{surfaceMember:Object($.j)(et.prototype.surfaceMemberParser_),surfaceMembers:Object($.j)(et.prototype.surfaceMemberParser_)}},et.prototype.CURVEMEMBER_PARSERS_={"http://www.opengis.net/gml":{LineString:Object($.j)(q.b.prototype.readLineString),Curve:Object($.j)(et.prototype.readCurve_)}},et.prototype.SURFACEMEMBER_PARSERS_={"http://www.opengis.net/gml":{Polygon:Object($.j)(q.b.prototype.readPolygon),Surface:Object($.j)(et.prototype.readSurface_)}},et.prototype.SURFACE_PARSERS_={"http://www.opengis.net/gml":{patches:Object($.o)(et.prototype.readPatch_)}},et.prototype.CURVE_PARSERS_={"http://www.opengis.net/gml":{segments:Object($.o)(et.prototype.readSegment_)}},et.prototype.ENVELOPE_PARSERS_={"http://www.opengis.net/gml":{lowerCorner:Object($.j)(et.prototype.readFlatPosList_),upperCorner:Object($.j)(et.prototype.readFlatPosList_)}},et.prototype.PATCHES_PARSERS_={"http://www.opengis.net/gml":{PolygonPatch:Object($.o)(et.prototype.readPolygonPatch_)}},et.prototype.SEGMENTS_PARSERS_={"http://www.opengis.net/gml":{LineStringSegment:Object($.o)(et.prototype.readLineStringSegment_)}},et.prototype.writePos_=function(t,e,r){const o=r[r.length-1],n=o.hasZ,i=n?3:2;t.setAttribute("srsDimension",i);const s=o.srsName;let a="enu";s&&(a=Object(Q.g)(s).getAxisOrientation());const c=e.getCoordinates();let p;if(p="en"===a.substr(0,2)?c[0]+" "+c[1]:c[1]+" "+c[0],n){p+=" "+(c[2]||0)}Object(V.n)(t,p)},et.prototype.getCoords_=function(t,e,r){let o="enu";e&&(o=Object(Q.g)(e).getAxisOrientation());let n="en"===o.substr(0,2)?t[0]+" "+t[1]:t[1]+" "+t[0];if(r){n+=" "+(t[2]||0)}return n},et.prototype.writePosList_=function(t,e,r){const o=r[r.length-1],n=o.hasZ,i=n?3:2;t.setAttribute("srsDimension",i);const s=o.srsName,a=e.getCoordinates(),c=a.length,p=new Array(c);let u;for(let t=0;t<c;++t)u=a[t],p[t]=this.getCoords_(u,s,n);Object(V.n)(t,p.join(" "))},et.prototype.writePoint_=function(t,e,r){const o=r[r.length-1].srsName;o&&t.setAttribute("srsName",o);const n=Object($.d)(t.namespaceURI,"pos");t.appendChild(n),this.writePos_(n,e,r)},et.prototype.writeEnvelope=function(t,e,r){const o=r[r.length-1].srsName;o&&t.setAttribute("srsName",o);const n=[e[0]+" "+e[1],e[2]+" "+e[3]];Object($.v)({node:t},this.ENVELOPE_SERIALIZERS_,$.b,n,r,["lowerCorner","upperCorner"],this)},et.prototype.writeLinearRing_=function(t,e,r){const o=r[r.length-1].srsName;o&&t.setAttribute("srsName",o);const n=Object($.d)(t.namespaceURI,"posList");t.appendChild(n),this.writePosList_(n,e,r)},et.prototype.RING_NODE_FACTORY_=function(t,e,r){const o=e[e.length-1],n=o.node,i=o.exteriorWritten;return void 0===i&&(o.exteriorWritten=!0),Object($.d)(n.namespaceURI,void 0!==i?"interior":"exterior")},et.prototype.writeSurfaceOrPolygon_=function(t,e,r){const o=r[r.length-1],n=o.hasZ,i=o.srsName;if("PolygonPatch"!==t.nodeName&&i&&t.setAttribute("srsName",i),"Polygon"===t.nodeName||"PolygonPatch"===t.nodeName){const o=e.getLinearRings();Object($.v)({node:t,hasZ:n,srsName:i},this.RING_SERIALIZERS_,this.RING_NODE_FACTORY_,o,r,void 0,this)}else if("Surface"===t.nodeName){const o=Object($.d)(t.namespaceURI,"patches");t.appendChild(o),this.writeSurfacePatches_(o,e,r)}},et.prototype.writeCurveOrLineString_=function(t,e,r){const o=r[r.length-1].srsName;if("LineStringSegment"!==t.nodeName&&o&&t.setAttribute("srsName",o),"LineString"===t.nodeName||"LineStringSegment"===t.nodeName){const o=Object($.d)(t.namespaceURI,"posList");t.appendChild(o),this.writePosList_(o,e,r)}else if("Curve"===t.nodeName){const o=Object($.d)(t.namespaceURI,"segments");t.appendChild(o),this.writeCurveSegments_(o,e,r)}},et.prototype.writeMultiSurfaceOrPolygon_=function(t,e,r){const o=r[r.length-1],n=o.hasZ,i=o.srsName,s=o.surface;i&&t.setAttribute("srsName",i);const a=e.getPolygons();Object($.v)({node:t,hasZ:n,srsName:i,surface:s},this.SURFACEORPOLYGONMEMBER_SERIALIZERS_,this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_,a,r,void 0,this)},et.prototype.writeMultiPoint_=function(t,e,r){const o=r[r.length-1],n=o.srsName,i=o.hasZ;n&&t.setAttribute("srsName",n);const s=e.getPoints();Object($.v)({node:t,hasZ:i,srsName:n},this.POINTMEMBER_SERIALIZERS_,Object($.q)("pointMember"),s,r,void 0,this)},et.prototype.writeMultiCurveOrLineString_=function(t,e,r){const o=r[r.length-1],n=o.hasZ,i=o.srsName,s=o.curve;i&&t.setAttribute("srsName",i);const a=e.getLineStrings();Object($.v)({node:t,hasZ:n,srsName:i,curve:s},this.LINESTRINGORCURVEMEMBER_SERIALIZERS_,this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_,a,r,void 0,this)},et.prototype.writeRing_=function(t,e,r){const o=Object($.d)(t.namespaceURI,"LinearRing");t.appendChild(o),this.writeLinearRing_(o,e,r)},et.prototype.writeSurfaceOrPolygonMember_=function(t,e,r){const o=this.GEOMETRY_NODE_FACTORY_(e,r);o&&(t.appendChild(o),this.writeSurfaceOrPolygon_(o,e,r))},et.prototype.writePointMember_=function(t,e,r){const o=Object($.d)(t.namespaceURI,"Point");t.appendChild(o),this.writePoint_(o,e,r)},et.prototype.writeLineStringOrCurveMember_=function(t,e,r){const o=this.GEOMETRY_NODE_FACTORY_(e,r);o&&(t.appendChild(o),this.writeCurveOrLineString_(o,e,r))},et.prototype.writeSurfacePatches_=function(t,e,r){const o=Object($.d)(t.namespaceURI,"PolygonPatch");t.appendChild(o),this.writeSurfaceOrPolygon_(o,e,r)},et.prototype.writeCurveSegments_=function(t,e,r){const o=Object($.d)(t.namespaceURI,"LineStringSegment");t.appendChild(o),this.writeCurveOrLineString_(o,e,r)},et.prototype.writeGeometryElement=function(t,e,r){const o=r[r.length-1],n=Object(K.a)({},o);let i;n.node=t,i=Array.isArray(e)?o.dataProjection?Object(Q.n)(e,o.featureProjection,o.dataProjection):e:Object(Y.b)(e,!0,o),Object($.v)(n,this.GEOMETRY_SERIALIZERS_,this.GEOMETRY_NODE_FACTORY_,[i],r,void 0,this)},et.prototype.writeFeatureElement=function(t,e,r){const o=e.getId();o&&t.setAttribute("fid",o);const n=r[r.length-1],i=n.featureNS,s=e.getGeometryName();n.serializers||(n.serializers={},n.serializers[i]={});const a=e.getProperties(),c=[],p=[];for(const t in a){const e=a[t];null!==e&&(c.push(t),p.push(e),t==s||e instanceof z.a?t in n.serializers[i]||(n.serializers[i][t]=Object($.l)(this.writeGeometryElement,this)):t in n.serializers[i]||(n.serializers[i][t]=Object($.l)(V.n)))}const u=Object(K.a)({},n);u.node=t,Object($.v)(u,n.serializers,Object($.q)(void 0,i),p,r,c)},et.prototype.writeFeatureMembers_=function(t,e,r){const o=r[r.length-1],n=o.featureType,i=o.featureNS,s={};s[i]={},s[i][n]=Object($.l)(this.writeFeatureElement,this);const a=Object(K.a)({},o);a.node=t,Object($.v)(a,s,Object($.q)(n,i),e,r)};const rt={MultiLineString:"lineStringMember",MultiCurve:"curveMember",MultiPolygon:"polygonMember",MultiSurface:"surfaceMember"};et.prototype.MULTIGEOMETRY_MEMBER_NODE_FACTORY_=function(t,e,r){const o=e[e.length-1].node;return Object($.d)("http://www.opengis.net/gml",rt[o.nodeName])},et.prototype.GEOMETRY_NODE_FACTORY_=function(t,e,r){const o=e[e.length-1],n=o.multiSurface,i=o.surface,s=o.curve,a=o.multiCurve;let c;return Array.isArray(t)?c="Envelope":"MultiPolygon"===(c=t.getType())&&!0===n?c="MultiSurface":"Polygon"===c&&!0===i?c="Surface":"LineString"===c&&!0===s?c="Curve":"MultiLineString"===c&&!0===a&&(c="MultiCurve"),Object($.d)("http://www.opengis.net/gml",c)},et.prototype.writeGeometryNode=function(t,e){e=this.adaptOptions(e);const r=Object($.d)("http://www.opengis.net/gml","geom"),o={node:r,hasZ:this.hasZ,srsName:this.srsName,curve:this.curve_,surface:this.surface_,multiSurface:this.multiSurface_,multiCurve:this.multiCurve_};return e&&Object(K.a)(o,e),this.writeGeometryElement(r,t,[o]),r},et.prototype.writeFeatures,et.prototype.writeFeaturesNode=function(t,e){e=this.adaptOptions(e);const r=Object($.d)("http://www.opengis.net/gml","featureMembers");r.setAttributeNS($.c,"xsi:schemaLocation",this.schemaLocation);const o={srsName:this.srsName,hasZ:this.hasZ,curve:this.curve_,surface:this.surface_,multiSurface:this.multiSurface_,multiCurve:this.multiCurve_,featureNS:this.featureNS,featureType:this.featureType};return e&&Object(K.a)(o,e),this.writeFeatureMembers_(r,t,[o]),r},et.prototype.RING_SERIALIZERS_={"http://www.opengis.net/gml":{exterior:Object($.l)(et.prototype.writeRing_),interior:Object($.l)(et.prototype.writeRing_)}},et.prototype.ENVELOPE_SERIALIZERS_={"http://www.opengis.net/gml":{lowerCorner:Object($.l)(V.n),upperCorner:Object($.l)(V.n)}},et.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS_={"http://www.opengis.net/gml":{surfaceMember:Object($.l)(et.prototype.writeSurfaceOrPolygonMember_),polygonMember:Object($.l)(et.prototype.writeSurfaceOrPolygonMember_)}},et.prototype.POINTMEMBER_SERIALIZERS_={"http://www.opengis.net/gml":{pointMember:Object($.l)(et.prototype.writePointMember_)}},et.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS_={"http://www.opengis.net/gml":{lineStringMember:Object($.l)(et.prototype.writeLineStringOrCurveMember_),curveMember:Object($.l)(et.prototype.writeLineStringOrCurveMember_)}},et.prototype.GEOMETRY_SERIALIZERS_={"http://www.opengis.net/gml":{Curve:Object($.l)(et.prototype.writeCurveOrLineString_),MultiCurve:Object($.l)(et.prototype.writeMultiCurveOrLineString_),Point:Object($.l)(et.prototype.writePoint_),MultiPoint:Object($.l)(et.prototype.writeMultiPoint_),LineString:Object($.l)(et.prototype.writeCurveOrLineString_),MultiLineString:Object($.l)(et.prototype.writeMultiCurveOrLineString_),LinearRing:Object($.l)(et.prototype.writeLinearRing_),Polygon:Object($.l)(et.prototype.writeSurfaceOrPolygon_),MultiPolygon:Object($.l)(et.prototype.writeMultiSurfaceOrPolygon_),Surface:Object($.l)(et.prototype.writeSurfaceOrPolygon_),MultiSurface:Object($.l)(et.prototype.writeMultiSurfaceOrPolygon_),Envelope:Object($.l)(et.prototype.writeEnvelope)}};var ot=et,nt=r(93);const it="feature",st="http://www.w3.org/2000/xmlns/",at="http://www.opengis.net/ogc",ct="http://www.opengis.net/wfs",pt="http://www.opengis.net/fes",ut={"1.1.0":"http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd","1.0.0":"http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.0.0/wfs.xsd"},lt=function(t){const e=t||{};this.featureType_=e.featureType,this.featureNS_=e.featureNS,this.gmlFormat_=e.gmlFormat?e.gmlFormat:new ot,this.schemaLocation_=e.schemaLocation?e.schemaLocation:ut["1.1.0"],nt.a.call(this)};Object(i.c)(lt,nt.a),lt.prototype.getFeatureType=function(){return this.featureType_},lt.prototype.setFeatureType=function(t){this.featureType_=t},lt.prototype.readFeatures,lt.prototype.readFeaturesFromNode=function(t,e){const r={featureType:this.featureType_,featureNS:this.featureNS_};Object(K.a)(r,this.getReadOptions(t,e||{}));const o=[r];this.gmlFormat_.FEATURE_COLLECTION_PARSERS[q.a].featureMember=Object($.j)(q.b.prototype.readFeaturesInternal);let n=Object($.u)([],this.gmlFormat_.FEATURE_COLLECTION_PARSERS,t,o,this.gmlFormat_);return n||(n=[]),n},lt.prototype.readTransactionResponse=function(t){if(Object($.g)(t))return this.readTransactionResponseFromDocument(t);if(Object($.h)(t))return this.readTransactionResponseFromNode(t);if("string"==typeof t){const e=Object($.s)(t);return this.readTransactionResponseFromDocument(e)}},lt.prototype.readFeatureCollectionMetadata=function(t){if(Object($.g)(t))return this.readFeatureCollectionMetadataFromDocument(t);if(Object($.h)(t))return this.readFeatureCollectionMetadataFromNode(t);if("string"==typeof t){const e=Object($.s)(t);return this.readFeatureCollectionMetadataFromDocument(e)}},lt.prototype.readFeatureCollectionMetadataFromDocument=function(t){for(let e=t.firstChild;e;e=e.nextSibling)if(e.nodeType==Node.ELEMENT_NODE)return this.readFeatureCollectionMetadataFromNode(e)};const ht={"http://www.opengis.net/gml":{boundedBy:Object($.n)(q.b.prototype.readGeometryElement,"bounds")}};lt.prototype.readFeatureCollectionMetadataFromNode=function(t){const e={},r=Object(V.g)(t.getAttribute("numberOfFeatures"));return e.numberOfFeatures=r,Object($.u)(e,ht,t,[],this.gmlFormat_)};const mt={"http://www.opengis.net/wfs":{totalInserted:Object($.n)(V.f),totalUpdated:Object($.n)(V.f),totalDeleted:Object($.n)(V.f)}};const bt={"http://www.opengis.net/ogc":{FeatureId:Object($.j)(function(t,e){return t.getAttribute("fid")})}};const ft={"http://www.opengis.net/wfs":{Feature:function(t,e){Object($.t)(bt,t,e)}}};const dt={"http://www.opengis.net/wfs":{TransactionSummary:Object($.n)(function(t,e){return Object($.u)({},mt,t,e)},"transactionSummary"),InsertResults:Object($.n)(function(t,e){return Object($.u)([],ft,t,e)},"insertIds")}};lt.prototype.readTransactionResponseFromDocument=function(t){for(let e=t.firstChild;e;e=e.nextSibling)if(e.nodeType==Node.ELEMENT_NODE)return this.readTransactionResponseFromNode(e)},lt.prototype.readTransactionResponseFromNode=function(t){return Object($.u)({},dt,t,[])};const Ot={"http://www.opengis.net/wfs":{PropertyName:Object($.l)(V.n)}};function gt(t,e,r){const o=Object($.d)(at,"Filter"),n=Object($.d)(at,"FeatureId");o.appendChild(n),n.setAttribute("fid",e),t.appendChild(o)}function yt(t,e){const r=(t=t||it)+":";return 0===e.indexOf(r)?e:r+e}const jt={"http://www.opengis.net/wfs":{Insert:Object($.l)(function(t,e,r){const o=r[r.length-1],n=o.featureType,i=o.featureNS,s=o.gmlVersion,a=Object($.d)(i,n);t.appendChild(a),2===s?Z.a.prototype.writeFeatureElement(a,e,r):ot.prototype.writeFeatureElement(a,e,r)}),Update:Object($.l)(function(t,e,r){const o=r[r.length-1];Object(s.a)(void 0!==e.getId(),27);const n=o.featureType,i=o.featurePrefix,a=o.featureNS,c=yt(i,n),p=e.getGeometryName();t.setAttribute("typeName",c),t.setAttributeNS(st,"xmlns:"+i,a);const u=e.getId();if(void 0!==u){const n=e.getKeys(),i=[];for(let t=0,r=n.length;t<r;t++){const r=e.get(n[t]);if(void 0!==r){let e=n[t];r instanceof z.a&&(e=p),i.push({name:e,value:r})}}Object($.v)({gmlVersion:o.gmlVersion,node:t,hasZ:o.hasZ,srsName:o.srsName},jt,Object($.q)("Property"),i,r),gt(t,u)}}),Delete:Object($.l)(function(t,e,r){const o=r[r.length-1];Object(s.a)(void 0!==e.getId(),26);const n=o.featureType,i=o.featurePrefix,a=o.featureNS,c=yt(i,n);t.setAttribute("typeName",c),t.setAttributeNS(st,"xmlns:"+i,a);const p=e.getId();void 0!==p&&gt(t,p)}),Property:Object($.l)(function(t,e,r){const o=Object($.d)(ct,"Name"),n=r[r.length-1].gmlVersion;if(t.appendChild(o),Object(V.n)(o,e.name),void 0!==e.value&&null!==e.value){const o=Object($.d)(ct,"Value");t.appendChild(o),e.value instanceof z.a?2===n?Z.a.prototype.writeGeometryElement(o,e.value,r):ot.prototype.writeGeometryElement(o,e.value,r):Object(V.n)(o,e.value)}}),Native:Object($.l)(function(t,e,r){e.vendorId&&t.setAttribute("vendorId",e.vendorId);void 0!==e.safeToIgnore&&t.setAttribute("safeToIgnore",e.safeToIgnore);void 0!==e.value&&Object(V.n)(t,e.value)})}};const wt={"http://www.opengis.net/wfs":{Query:Object($.l)(function(t,e,r){const o=r[r.length-1],n=o.featurePrefix,i=o.featureNS,s=o.propertyNames,a=o.srsName;let c;c=n?yt(n,e):e;t.setAttribute("typeName",c),a&&t.setAttribute("srsName",a);i&&t.setAttributeNS(st,"xmlns:"+n,i);const p=Object(K.a)({},o);p.node=t,Object($.v)(p,Ot,Object($.q)("PropertyName"),s,r);const u=o.filter;if(u){const e=Object($.d)(at,"Filter");t.appendChild(e),_t(e,u,r)}})},"http://www.opengis.net/ogc":{During:Object($.l)(function(t,e,r){const o=Object($.d)(pt,"ValueReference");Object(V.n)(o,e.propertyName),t.appendChild(o);const n=Object($.d)(q.a,"TimePeriod");t.appendChild(n);const i=Object($.d)(q.a,"begin");n.appendChild(i),vt(i,e.begin);const s=Object($.d)(q.a,"end");n.appendChild(s),vt(s,e.end)}),And:Object($.l)(St),Or:Object($.l)(St),Not:Object($.l)(function(t,e,r){const o={node:t},n=e.condition;Object($.v)(o,wt,Object($.q)(n.getTagName()),[n],r)}),BBOX:Object($.l)(function(t,e,r){r[r.length-1].srsName=e.srsName,Rt(t,e.geometryName),ot.prototype.writeGeometryElement(t,e.extent,r)}),Contains:Object($.l)(function(t,e,r){r[r.length-1].srsName=e.srsName,Rt(t,e.geometryName),ot.prototype.writeGeometryElement(t,e.geometry,r)}),Intersects:Object($.l)(function(t,e,r){r[r.length-1].srsName=e.srsName,Rt(t,e.geometryName),ot.prototype.writeGeometryElement(t,e.geometry,r)}),Within:Object($.l)(function(t,e,r){r[r.length-1].srsName=e.srsName,Rt(t,e.geometryName),ot.prototype.writeGeometryElement(t,e.geometry,r)}),PropertyIsEqualTo:Object($.l)(Et),PropertyIsNotEqualTo:Object($.l)(Et),PropertyIsLessThan:Object($.l)(Et),PropertyIsLessThanOrEqualTo:Object($.l)(Et),PropertyIsGreaterThan:Object($.l)(Et),PropertyIsGreaterThanOrEqualTo:Object($.l)(Et),PropertyIsNull:Object($.l)(function(t,e,r){Rt(t,e.propertyName)}),PropertyIsBetween:Object($.l)(function(t,e,r){Rt(t,e.propertyName);const o=Object($.d)(at,"LowerBoundary");t.appendChild(o),Pt(o,""+e.lowerBoundary);const n=Object($.d)(at,"UpperBoundary");t.appendChild(n),Pt(n,""+e.upperBoundary)}),PropertyIsLike:Object($.l)(function(t,e,r){t.setAttribute("wildCard",e.wildCard),t.setAttribute("singleChar",e.singleChar),t.setAttribute("escapeChar",e.escapeChar),void 0!==e.matchCase&&t.setAttribute("matchCase",e.matchCase.toString());Rt(t,e.propertyName),Pt(t,""+e.pattern)})}};function _t(t,e,r){const o={node:t};Object($.v)(o,wt,Object($.q)(e.getTagName()),[e],r)}function St(t,e,r){const o={node:t},n=e.conditions;for(let t=0,e=n.length;t<e;++t){const e=n[t];Object($.v)(o,wt,Object($.q)(e.getTagName()),[e],r)}}function Et(t,e,r){void 0!==e.matchCase&&t.setAttribute("matchCase",e.matchCase.toString()),Rt(t,e.propertyName),Pt(t,""+e.expression)}function Nt(t,e,r){const o=Object($.d)(at,t);Object(V.n)(o,r),e.appendChild(o)}function Rt(t,e){Nt("PropertyName",t,e)}function Pt(t,e){Nt("Literal",t,e)}function vt(t,e){const r=Object($.d)(q.a,"TimeInstant");t.appendChild(r);const o=Object($.d)(q.a,"timePosition");r.appendChild(o),Object(V.n)(o,e)}lt.prototype.writeGetFeature=function(t){const e=Object($.d)(ct,"GetFeature");let r;if(e.setAttribute("service","WFS"),e.setAttribute("version","1.1.0"),t&&(t.handle&&e.setAttribute("handle",t.handle),t.outputFormat&&e.setAttribute("outputFormat",t.outputFormat),void 0!==t.maxFeatures&&e.setAttribute("maxFeatures",t.maxFeatures),t.resultType&&e.setAttribute("resultType",t.resultType),void 0!==t.startIndex&&e.setAttribute("startIndex",t.startIndex),void 0!==t.count&&e.setAttribute("count",t.count),r=t.filter,t.bbox)){Object(s.a)(t.geometryName,12);const e=function(t,e,r){return new b(t,e,r)}(t.geometryName,t.bbox,t.srsName);r=r?U(r,e):e}e.setAttributeNS($.c,"xsi:schemaLocation",this.schemaLocation_);const o={node:e,srsName:t.srsName,featureNS:t.featureNS?t.featureNS:this.featureNS_,featurePrefix:t.featurePrefix,geometryName:t.geometryName,filter:r,propertyNames:t.propertyNames?t.propertyNames:[]};return Object(s.a)(Array.isArray(t.featureTypes),11),function(t,e,r){const o=r[r.length-1],n=Object(K.a)({},o);n.node=t,Object($.v)(n,wt,Object($.q)("Query"),e,r)}(e,t.featureTypes,[o]),e},lt.prototype.writeTransaction=function(t,e,r,o){const n=[],i=Object($.d)(ct,"Transaction"),s=o.version?o.version:"1.1.0",a="1.0.0"===s?2:3;let c,p;i.setAttribute("service","WFS"),i.setAttribute("version",s),o&&(c=o.gmlOptions?o.gmlOptions:{},o.handle&&i.setAttribute("handle",o.handle));const u=ut[s];i.setAttributeNS($.c,"xsi:schemaLocation",u);const l=o.featurePrefix?o.featurePrefix:it;return t&&(p={node:i,featureNS:o.featureNS,featureType:o.featureType,featurePrefix:l,gmlVersion:a,hasZ:o.hasZ,srsName:o.srsName},Object(K.a)(p,c),Object($.v)(p,jt,Object($.q)("Insert"),t,n)),e&&(p={node:i,featureNS:o.featureNS,featureType:o.featureType,featurePrefix:l,gmlVersion:a,hasZ:o.hasZ,srsName:o.srsName},Object(K.a)(p,c),Object($.v)(p,jt,Object($.q)("Update"),e,n)),r&&Object($.v)({node:i,featureNS:o.featureNS,featureType:o.featureType,featurePrefix:l,gmlVersion:a,srsName:o.srsName},jt,Object($.q)("Delete"),r,n),o.nativeElements&&Object($.v)({node:i,featureNS:o.featureNS,featureType:o.featureType,featurePrefix:l,gmlVersion:a,srsName:o.srsName},jt,Object($.q)("Native"),o.nativeElements,n),i},lt.prototype.readProjection,lt.prototype.readProjectionFromDocument=function(t){for(let e=t.firstChild;e;e=e.nextSibling)if(e.nodeType==Node.ELEMENT_NODE)return this.readProjectionFromNode(e);return null},lt.prototype.readProjectionFromNode=function(t){if(t.firstElementChild&&t.firstElementChild.firstElementChild)for(let e=(t=t.firstElementChild.firstElementChild).firstElementChild;e;e=e.nextElementSibling)if(0!==e.childNodes.length&&(1!==e.childNodes.length||3!==e.firstChild.nodeType)){const t=[{}];return this.gmlFormat_.readGeometryElement(e,t),Object(Q.g)(t.pop().srsName)}return null};var Ct=lt,At=r(28),Mt=r(29),Tt=r(4),Lt=r(43),It=r(13),Ft=r(76),xt=r(117);const Gt=new It.b,Ut=new Mt.a({source:Gt,style:new Ft.c({stroke:new xt.a({color:"rgba(0, 0, 255, 1.0)",width:2})})}),Zt=new Tt.a({source:new Lt.a({imagerySet:"Aerial",key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5"})}),Dt=new o.a({layers:[Zt,Ut],target:document.getElementById("map"),view:new n.a({center:[-8908887.277395891,5381918.072437216],maxZoom:19,zoom:12})}),Bt=(new Ct).writeGetFeature({srsName:"EPSG:3857",featureNS:"http://openstreemap.org",featurePrefix:"osm",featureTypes:["water_areas"],outputFormat:"application/json",filter:U(function(t,e,r,o,n,i){return new A(t,e,r,o,n,i)}("name","Mississippi*"),function(t,e,r){return new E(t,e,r)}("waterway","riverbank"))});fetch("https://ahocevar.com/geoserver/wfs",{method:"POST",body:(new XMLSerializer).serializeToString(Bt)}).then(function(t){return t.json()}).then(function(t){const e=(new At.a).readFeatures(t);Gt.addFeatures(e),Dt.getView().fit(Gt.getExtent())})}},[[245,0]]]);
//# sourceMappingURL=vector-wfs-getfeature.js.map