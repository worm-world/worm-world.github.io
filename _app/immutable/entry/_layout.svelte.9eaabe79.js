import{C as ve,S as Ne,i as Oe,s as he,e as Ge,b as se,v as Ke,d as J,D as Fe,f as He,g as R,h as f,E as Se,k as u,l as d,m as _,F as Te,G as qe,H as ze,I as Pe,J as je,K as Be,a as $,q as K,y as Je,L as Re,c as I,r as F,z as Qe,n,M as Ue,N as l,A as Xe,B as Ye}from"../chunks/index.3b8d7587.js";function Ze(o){return o<.5?4*o*o*o:.5*Math.pow(2*o-2,3)+1}function et(o){const t=o-1;return t*t*t+1}function tt(o,{delay:t=0,duration:i=400,easing:r=Ze,amount:e=5,opacity:s=0}={}){const a=getComputedStyle(o),c=+a.opacity,v=a.filter==="none"?"":a.filter,E=c*(1-s),[G,U]=ve(e);return{delay:t,duration:i,easing:r,css:(k,p)=>`opacity: ${c-E*p}; filter: ${v} blur(${p*G}${U});`}}function at(o,{delay:t=0,duration:i=400,easing:r=et,x:e=0,y:s=0,opacity:a=0}={}){const c=getComputedStyle(o),v=+c.opacity,E=c.transform==="none"?"":c.transform,G=v*(1-a),[U,k]=ve(e),[p,M]=ve(s);return{delay:t,duration:i,easing:r,css:(O,w)=>`
			transform: ${E} translate(${(1-O)*U}${k}, ${(1-O)*p}${M});
			opacity: ${v-G*w}`}}function Me(o){let t,i,r,e;const s=o[2].default,a=Se(s,o,o[1],null);return{c(){t=u("div"),a&&a.c()},l(c){t=d(c,"DIV",{});var v=_(t);a&&a.l(v),v.forEach(f)},m(c,v){se(c,t,v),a&&a.m(t,null),e=!0},p(c,v){a&&a.p&&(!e||v&2)&&Te(a,s,c,c[1],e?ze(s,c[1],v,null):qe(c[1]),null)},i(c){e||(R(a,c),Pe(()=>{e&&(r&&r.end(1),i=je(t,at,{y:-30,duration:300,delay:0}),i.start())}),e=!0)},o(c){J(a,c),i&&i.invalidate(),r=Be(t,tt,{duration:0}),e=!1},d(c){c&&f(t),a&&a.d(c),c&&r&&r.end()}}}function st(o){let t=o[0],i,r,e=Me(o);return{c(){e.c(),i=Ge()},l(s){e.l(s),i=Ge()},m(s,a){e.m(s,a),se(s,i,a),r=!0},p(s,[a]){a&1&&he(t,t=s[0])?(Ke(),J(e,1,1,Fe),He(),e=Me(s),e.c(),R(e,1),e.m(i.parentNode,i)):e.p(s,a)},i(s){r||(R(e),r=!0)},o(s){J(e),r=!1},d(s){s&&f(i),e.d(s)}}}function lt(o,t,i){let{$$slots:r={},$$scope:e}=t,{refresh:s=""}=t;return o.$$set=a=>{"refresh"in a&&i(0,s=a.refresh),"$$scope"in a&&i(1,e=a.$$scope)},[s,e,r]}class rt extends Ne{constructor(t){super(),Oe(this,t,lt,st,he,{refresh:0})}}function ot(o){let t;const i=o[2].default,r=Se(i,o,o[3],null);return{c(){r&&r.c()},l(e){r&&r.l(e)},m(e,s){r&&r.m(e,s),t=!0},p(e,s){r&&r.p&&(!t||s&8)&&Te(r,i,e,e[3],t?ze(i,e[3],s,null):qe(e[3]),null)},i(e){t||(R(r,e),t=!0)},o(e){J(r,e),t=!1},d(e){r&&r.d(e)}}}function nt(o){let t,i,r,e,s,a,c,v,E,G,U,k,p,M,O,w,g,H,b,le,Q,re,P,D,oe,X,ne,j,V,ie,Y,ce,B,x,fe,Z,ue,S,T,A,de,q,L,N,pe,_e,z,me,W;return A=new rt({props:{refresh:o[0].key.href,$$slots:{default:[ot]},$$scope:{ctx:o}}}),{c(){t=u("link"),i=u("link"),r=$(),e=u("div"),s=u("div"),a=u("img"),v=$(),E=u("h1"),G=K("ormWorld"),U=$(),k=u("div"),p=u("div"),M=u("div"),O=$(),w=u("div"),g=u("ul"),H=u("li"),b=u("a"),le=K("About"),re=$(),P=u("li"),D=u("a"),oe=K("Team"),ne=$(),j=u("li"),V=u("a"),ie=K("Download"),ce=$(),B=u("li"),x=u("a"),fe=K("User Guide"),ue=$(),S=u("div"),T=u("div"),Je(A.$$.fragment),de=$(),q=u("footer"),L=u("div"),N=u("img"),_e=$(),z=u("p"),me=K("Copyright © 2023 - All right reserved"),this.h()},l(m){const h=Re("svelte-1azxr60",document.head);t=d(h,"LINK",{rel:!0,type:!0,href:!0}),i=d(h,"LINK",{rel:!0,type:!0,href:!0}),h.forEach(f),r=I(m),e=d(m,"DIV",{class:!0});var y=_(e);s=d(y,"DIV",{class:!0});var ee=_(s);a=d(ee,"IMG",{src:!0,alt:!0,class:!0}),v=I(ee),E=d(ee,"H1",{class:!0});var ge=_(E);G=F(ge,"ormWorld"),ge.forEach(f),ee.forEach(f),U=I(y),k=d(y,"DIV",{class:!0});var ye=_(k);p=d(ye,"DIV",{class:!0});var te=_(p);M=d(te,"DIV",{class:!0}),_(M).forEach(f),O=I(te),w=d(te,"DIV",{class:!0});var Ee=_(w);g=d(Ee,"UL",{class:!0});var C=_(g);H=d(C,"LI",{});var $e=_(H);b=d($e,"A",{href:!0,class:!0});var Ie=_(b);le=F(Ie,"About"),Ie.forEach(f),$e.forEach(f),re=I(C),P=d(C,"LI",{});var ke=_(P);D=d(ke,"A",{href:!0,class:!0});var we=_(D);oe=F(we,"Team"),we.forEach(f),ke.forEach(f),ne=I(C),j=d(C,"LI",{});var be=_(j);V=d(be,"A",{href:!0,class:!0});var De=_(V);ie=F(De,"Download"),De.forEach(f),be.forEach(f),ce=I(C),B=d(C,"LI",{});var Ve=_(B);x=d(Ve,"A",{href:!0,class:!0});var xe=_(x);fe=F(xe,"User Guide"),xe.forEach(f),Ve.forEach(f),C.forEach(f),Ee.forEach(f),te.forEach(f),ye.forEach(f),ue=I(y),S=d(y,"DIV",{class:!0});var Ae=_(S);T=d(Ae,"DIV",{class:!0});var Le=_(T);Qe(A.$$.fragment,Le),Le.forEach(f),Ae.forEach(f),de=I(y),q=d(y,"FOOTER",{class:!0});var We=_(q);L=d(We,"DIV",{class:!0});var ae=_(L);N=d(ae,"IMG",{src:!0,alt:!0,class:!0}),_e=I(ae),z=d(ae,"P",{class:!0});var Ce=_(z);me=F(Ce,"Copyright © 2023 - All right reserved"),Ce.forEach(f),ae.forEach(f),We.forEach(f),y.forEach(f),this.h()},h(){document.title="WormWorld",n(t,"rel","icon"),n(t,"type","image/svg+xml"),n(t,"href","/favicon/favicon.svg"),n(i,"rel","icon"),n(i,"type","image/png"),n(i,"href","/favicon/favicon.png"),Ue(a.src,c="/worm.svg")||n(a,"src",c),n(a,"alt","W"),n(a,"class","h-24"),n(E,"class","wormworld"),n(s,"class","flex flex-row items-center normal-case text-5xl mt-4"),n(M,"class","flex-1 mr-12"),n(b,"href","/"),n(b,"class",Q=o[1]==""?"text-indigo-400":""),n(D,"href","/team"),n(D,"class",X=o[1]=="team"?"text-indigo-400":""),n(V,"href","/download"),n(V,"class",Y=o[1]=="download"?"text-indigo-400":""),n(x,"href","/guide"),n(x,"class",Z=o[1]=="guide"?"text-indigo-400":""),n(g,"class","menu menu-horizontal px-4"),n(w,"class","flex-none"),n(p,"class","navbar bg-base-100"),n(k,"class","max-w-5xl"),n(T,"class","ml-6 sm:ml-0"),n(S,"class","w-full flex flex-row justify-center items-center"),Ue(N.src,pe="/worm.svg")||n(N,"src",pe),n(N,"alt","WormWorld"),n(N,"class","h-12"),n(z,"class","ml-2"),n(L,"class","flex flex-row"),n(q,"class","footer footer-center p-4 pt-8 text-gray-400"),n(e,"class","w-full flex flex-col items-center")},m(m,h){l(document.head,t),l(document.head,i),se(m,r,h),se(m,e,h),l(e,s),l(s,a),l(s,v),l(s,E),l(E,G),l(e,U),l(e,k),l(k,p),l(p,M),l(p,O),l(p,w),l(w,g),l(g,H),l(H,b),l(b,le),l(g,re),l(g,P),l(P,D),l(D,oe),l(g,ne),l(g,j),l(j,V),l(V,ie),l(g,ce),l(g,B),l(B,x),l(x,fe),l(e,ue),l(e,S),l(S,T),Xe(A,T,null),l(e,de),l(e,q),l(q,L),l(L,N),l(L,_e),l(L,z),l(z,me),W=!0},p(m,[h]){(!W||h&2&&Q!==(Q=m[1]==""?"text-indigo-400":""))&&n(b,"class",Q),(!W||h&2&&X!==(X=m[1]=="team"?"text-indigo-400":""))&&n(D,"class",X),(!W||h&2&&Y!==(Y=m[1]=="download"?"text-indigo-400":""))&&n(V,"class",Y),(!W||h&2&&Z!==(Z=m[1]=="guide"?"text-indigo-400":""))&&n(x,"class",Z);const y={};h&1&&(y.refresh=m[0].key.href),h&8&&(y.$$scope={dirty:h,ctx:m}),A.$set(y)},i(m){W||(R(A.$$.fragment,m),W=!0)},o(m){J(A.$$.fragment,m),W=!1},d(m){f(t),f(i),m&&f(r),m&&f(e),Ye(A)}}}function it(o,t,i){let r,{$$slots:e={},$$scope:s}=t,{data:a}=t;return o.$$set=c=>{"data"in c&&i(0,a=c.data),"$$scope"in c&&i(3,s=c.$$scope)},o.$$.update=()=>{o.$$.dirty&1&&i(1,r=a.key.pathname.split("/").at(-1))},[a,r,e,s]}class ft extends Ne{constructor(t){super(),Oe(this,t,it,nt,he,{data:0})}}export{ft as default};
