(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{388:function(e,t,o){"use strict";o.r(t);var r=o(20),a=o(3),n=o(2),i=o(22),u=o(40),c=o(168),w=o(19),s=o(32),g=o(62);function A(e,t,o,r,a,n){var i,u;void 0!==a?(i=a,u=void 0!==n?n:0):(i=[],u=0);for(var c=t;c<o;){var w=e[c++];i[u++]=e[c++],i[u++]=w;for(var s=2;s<r;++s)i[u++]=e[c++]}return i.length=u,i}var m=o(83),y=o(6);function B(e){for(var t,o="";e>=32;)t=63+(32|31&e),o+=String.fromCharCode(t),e>>=5;return t=e+63,o+=String.fromCharCode(t)}var k,_,f=function(e){function t(t){e.call(this);var o=t||{};this.dataProjection=Object(y.g)("EPSG:4326"),this.factor_=o.factor?o.factor:1e5,this.geometryLayout_=o.geometryLayout?o.geometryLayout:w.a.XY}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.readFeatureFromText=function(e,t){var o=this.readGeometryFromText(e,t);return new r.a(o)},t.prototype.readFeaturesFromText=function(e,t){return[this.readFeatureFromText(e,t)]},t.prototype.readGeometryFromText=function(e,t){var o=Object(g.b)(this.geometryLayout_),r=function(e,t,o){var r,a=o||1e5,n=new Array(t);for(r=0;r<t;++r)n[r]=0;for(var i=function(e,t){for(var o=t||1e5,r=function(e){for(var t=function(e){for(var t=[],o=0,r=0,a=0,n=e.length;a<n;++a){var i=e.charCodeAt(a)-63;o|=(31&i)<<r,i<32?(t.push(o),o=0,r=0):r+=5}return t}(e),o=0,r=t.length;o<r;++o){var a=t[o];t[o]=1&a?~(a>>1):a>>1}return t}(e),a=0,n=r.length;a<n;++a)r[a]/=o;return r}(e,a),u=0,c=i.length;u<c;)for(r=0;r<t;++r,++u)n[r]+=i[u],i[u]=n[r];return i}(e,o,this.factor_);A(r,0,r.length,o,r);var a=Object(m.a)(r,0,r.length,o);return Object(u.b)(new s.a(a,this.geometryLayout_),!1,this.adaptOptions(t))},t.prototype.writeFeatureText=function(e,t){var o=e.getGeometry();return o?this.writeGeometryText(o,t):(Object(i.a)(!1,40),"")},t.prototype.writeFeaturesText=function(e,t){return this.writeFeatureText(e[0],t)},t.prototype.writeGeometryText=function(e,t){var o=(e=Object(u.b)(e,!0,this.adaptOptions(t))).getFlatCoordinates(),r=e.getStride();return A(o,0,o.length,r,o),function(e,t,o){var r,a=o||1e5,n=new Array(t);for(r=0;r<t;++r)n[r]=0;for(var i=0,u=e.length;i<u;)for(r=0;r<t;++r,++i){var c=e[i],w=c-n[r];n[r]=c,e[i]=w}return function(e,t){for(var o=t||1e5,r=0,a=e.length;r<a;++r)e[r]=Math.round(e[r]*o);return function(e){for(var t=0,o=e.length;t<o;++t){var r=e[t];e[t]=r<0?~(r<<1):r<<1}return function(e){for(var t="",o=0,r=e.length;o<r;++o)t+=B(e[o]);return t}(e)}(e)}(e,a)}(o,r,this.factor_)},t}(c.a),C=o(24),d=o(29),h=o(4),l=o(41),p=o(13),q=o(84),v=o(116),b=o(186),D=o(217),F=o(132),E=["hldhx@lnau`BCG_EaC??cFjAwDjF??uBlKMd@}@z@??aC^yk@z_@se@b[wFdE??wFfE}N","fIoGxB_I\\gG}@eHoCyTmPqGaBaHOoD\\??yVrGotA|N??o[N_STiwAtEmHGeHcAkiA}^","aMyBiHOkFNoI`CcVvM??gG^gF_@iJwC??eCcA]OoL}DwFyCaCgCcCwDcGwHsSoX??wI_E","kUFmq@hBiOqBgTwS??iYse@gYq\\cp@ce@{vA}s@csJqaE}{@iRaqE{lBeRoIwd@_T{]_","Ngn@{PmhEwaA{SeF_u@kQuyAw]wQeEgtAsZ}LiCarAkVwI}D??_}RcjEinPspDwSqCgs@","sPua@_OkXaMeT_Nwk@ob@gV}TiYs[uTwXoNmT{Uyb@wNg]{Nqa@oDgNeJu_@_G}YsFw]k","DuZyDmm@i_@uyIJe~@jCg|@nGiv@zUi_BfNqaAvIow@dEed@dCcf@r@qz@Egs@{Acu@mC","um@yIey@gGig@cK_m@aSku@qRil@we@{mAeTej@}Tkz@cLgr@aHko@qOmcEaJw~C{w@ka","i@qBchBq@kmBS{kDnBscBnFu_Dbc@_~QHeU`IuyDrC_}@bByp@fCyoA?qMbD}{AIkeAgB","k_A_A{UsDke@gFej@qH{o@qGgb@qH{`@mMgm@uQus@kL{_@yOmd@ymBgwE}x@ouBwtA__","DuhEgaKuWct@gp@cnBii@mlBa_@}|Asj@qrCg^eaC}L{dAaJ_aAiOyjByH{nAuYu`GsAw","Xyn@ywMyOyqD{_@cfIcDe}@y@aeBJmwA`CkiAbFkhBlTgdDdPyiB`W}xDnSa}DbJyhCrX","itAhT}x@bE}Z_@qW_Kwv@qKaaAiBgXvIm}A~JovAxCqW~WanB`XewBbK{_A`K}fBvAmi@","xBycBeCauBoF}}@qJioAww@gjHaPopA_NurAyJku@uGmi@cDs[eRaiBkQstAsQkcByNma","CsK_uBcJgbEw@gkB_@ypEqDoqSm@eZcDwjBoGw`BoMegBaU_`Ce_@_uBqb@ytBwkFqiT_","fAqfEwe@mfCka@_eC_UmlB}MmaBeWkkDeHwqAoX}~DcBsZmLcxBqOwqE_DkyAuJmrJ\\o","~CfIewG|YibQxBssB?es@qGciA}RorAoVajA_nAodD{[y`AgPqp@mKwr@ms@umEaW{dAm","b@umAw|@ojBwzDaaJsmBwbEgdCsrFqhAihDquAi`Fux@}_Dui@_eB_u@guCuyAuiHukA_","lKszAu|OmaA{wKm}@clHs_A_rEahCssKo\\sgBsSglAqk@yvDcS_wAyTwpBmPc|BwZknF","oFscB_GsaDiZmyMyLgtHgQonHqT{hKaPg}Dqq@m~Hym@c`EuiBudIabB{hF{pWifx@snA","w`GkFyVqf@y~BkoAi}Lel@wtc@}`@oaXi_C}pZsi@eqGsSuqJ|Lqeb@e]kgPcaAu}SkDw","zGhn@gjYh\\qlNZovJieBqja@ed@siO{[ol\\kCmjMe\\isHorCmec@uLebB}EqiBaCg}","@m@qwHrT_vFps@kkI`uAszIrpHuzYxx@e{Crw@kpDhN{wBtQarDy@knFgP_yCu\\wyCwy","A{kHo~@omEoYmoDaEcPiuAosDagD}rO{{AsyEihCayFilLaiUqm@_bAumFo}DgqA_uByi","@swC~AkzDlhA}xEvcBa}Cxk@ql@`rAo|@~bBq{@``Bye@djDww@z_C_cAtn@ye@nfC_eC","|gGahH~s@w}@``Fi~FpnAooC|u@wlEaEedRlYkrPvKerBfYs}Arg@m}AtrCkzElw@gjBb","h@woBhR{gCwGkgCc[wtCuOapAcFoh@uBy[yBgr@c@iq@o@wvEv@sp@`FajBfCaq@fIipA","dy@ewJlUc`ExGuaBdEmbBpBssArAuqBBg}@s@g{AkB{bBif@_bYmC}r@kDgm@sPq_BuJ_","s@{X_{AsK_d@eM{d@wVgx@oWcu@??aDmOkNia@wFoSmDyMyCkPiBePwAob@XcQ|@oNdCo","SfFwXhEmOnLi\\lbAulB`X_d@|k@au@bc@oc@bqC}{BhwDgcD`l@ed@??bL{G|a@eTje@","oS~]cLr~Bgh@|b@}Jv}EieAlv@sPluD{z@nzA_]`|KchCtd@sPvb@wSb{@ko@f`RooQ~e","[upZbuIolI|gFafFzu@iq@nMmJ|OeJn^{Qjh@yQhc@uJ~j@iGdd@kAp~BkBxO{@|QsAfY","gEtYiGd]}Jpd@wRhVoNzNeK`j@ce@vgK}cJnSoSzQkVvUm^rSgc@`Uql@xIq\\vIgg@~k","Dyq[nIir@jNoq@xNwc@fYik@tk@su@neB}uBhqEesFjoGeyHtCoD|D}Ed|@ctAbIuOzqB","_}D~NgY`\\um@v[gm@v{Cw`G`w@o{AdjAwzBh{C}`Gpp@ypAxn@}mAfz@{bBbNia@??jI","ab@`CuOlC}YnAcV`@_^m@aeB}@yk@YuTuBg^uCkZiGk\\yGeY}Lu_@oOsZiTe[uWi[sl@","mo@soAauAsrBgzBqgAglAyd@ig@asAcyAklA}qAwHkGi{@s~@goAmsAyDeEirB_{B}IsJ","uEeFymAssAkdAmhAyTcVkFeEoKiH}l@kp@wg@sj@ku@ey@uh@kj@}EsFmG}Jk^_r@_f@m","~@ym@yjA??a@cFd@kBrCgDbAUnAcBhAyAdk@et@??kF}D??OL"].join(""),G=new f({factor:1e6}).readGeometry(E,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"}),j=G.getCoordinates(),x=j.length,O=new r.a({type:"route",geometry:G}),T=new r.a({type:"geoMarker",geometry:new C.a(j[0])}),S=new r.a({type:"icon",geometry:new C.a(j[0])}),I=new r.a({type:"icon",geometry:new C.a(j[x-1])}),J={route:new q.c({stroke:new v.a({width:6,color:[237,212,0,.8]})}),icon:new q.c({image:new b.a({anchor:[.5,1],src:"data/icon.png"})}),geoMarker:new q.c({image:new D.a({radius:7,snapToPixel:!1,fill:new F.a({color:"black"}),stroke:new v.a({color:"white",width:2})})})},H=!1,P=document.getElementById("speed"),L=document.getElementById("start-animation"),z=new d.a({source:new p.b({features:[O,T,S,I]}),style:function(e){return H&&"geoMarker"===e.get("type")?null:J[e.get("type")]}}),N=[-5639523.95,-3501274.52],M=new a.a({target:document.getElementById("map"),loadTilesWhileAnimating:!0,view:new n.a({center:N,zoom:10,minZoom:2,maxZoom:19}),layers:[new h.a({source:new l.a({imagerySet:"AerialWithLabels",key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5"})}),z]}),K=function(e){var t=e.vectorContext,o=e.frameState;if(H){var a=o.time-_,n=Math.round(k*a/1e3);if(n>=x)return void Y(!0);var i=new C.a(j[n]),u=new r.a(i);t.drawFeature(u,J.geoMarker)}M.render()};function Y(e){H=!1,L.textContent="Start Animation";var t=e?j[x-1]:j[0];T.getGeometry().setCoordinates(t),M.un("postcompose",K)}L.addEventListener("click",function(){H?Y(!1):(H=!0,_=(new Date).getTime(),k=P.value,L.textContent="Cancel Animation",T.setStyle(null),M.getView().setCenter(N),M.on("postcompose",K),M.render())},!1)}},[[388,0]]]);
//# sourceMappingURL=feature-move-animation.js.map