(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{365:function(t,n,e){"use strict";e.r(n);var o=e(23),i=e(5),a=e(4),c=e(40),s=e(36),r=e(22);const u=Math.cos(Math.PI/6),w=1e7*Math.sin(Math.PI/6),p=1e7*u,h=new c.a([[0,1e7],[p,-w],[-p,-w],[0,1e7]]),l=new o.a(h),x=new s.a({source:new r.b({features:[l]})});new i.a({layers:[x],target:"map",view:new a.a({center:[0,0],zoom:1})});function f(t){const n=t.next,e=t.point,o=t.next.point,i=o[0]-e[0],a=o[1]-e[1],c={point:[e[0]+i/3,e[1]+a/3]},s=Math.sqrt(i*i+a*a)/(2*u),r=Math.atan2(a,i)+Math.PI/6,w={point:[e[0]+s*Math.cos(r),e[1]+s*Math.sin(r)]},p={point:[o[0]-i/3,o[1]-a/3]};t.next=c,c.next=w,w.next=p,p.next=n}const d=document.getElementById("depth");function m(){!function(t){const n=h.clone(),e=function(t){const n={point:t[0]},e=t.length;for(let o=0,i=n;o<e-1;++o)i.next={point:t[o+1]},i=i.next;return n}(n.getCoordinates());for(let n=0;n<t;++n){let t=e;for(;t.next;){const n=t.next;f(t),t=n}}const o=function(t){const n=[t.point];for(let e=t,o=1;e.next;e=e.next,++o)n[o]=e.next.point;return n}(e);document.getElementById("count").innerHTML=o.length,n.setCoordinates(o),l.setGeometry(n)}(Number(d.value))}let M;d.onchange=function(){window.clearTimeout(M),M=window.setTimeout(m,200)},m()}},[[365,0]]]);
//# sourceMappingURL=fractal.js.map