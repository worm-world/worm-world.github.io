import{S as w,i as B,s as b,E as p,U as m,e as u,V as v,m as h,h as r,n as f,b as d,N as g,F as y,G as k,H as E,g as I,d as q,q as S,r as C,u as F}from"./index.3b8d7587.js";function c(n){let e,a;return{c(){e=m("title"),a=S(n[0])},l(l){e=v(l,"title",{});var t=h(e);a=C(t,n[0]),t.forEach(r)},m(l,t){d(l,e,t),g(e,a)},p(l,t){t&1&&F(a,l[0])},d(l){l&&r(e)}}}function G(n){let e,a,l,t=n[0]&&c(n);const _=n[3].default,i=p(_,n,n[2],null);return{c(){e=m("svg"),t&&t.c(),a=u(),i&&i.c(),this.h()},l(s){e=v(s,"svg",{xmlns:!0,viewBox:!0,class:!0});var o=h(e);t&&t.l(o),a=u(),i&&i.l(o),o.forEach(r),this.h()},h(){f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"viewBox",n[1]),f(e,"class","svelte-c8tyih")},m(s,o){d(s,e,o),t&&t.m(e,null),g(e,a),i&&i.m(e,null),l=!0},p(s,[o]){s[0]?t?t.p(s,o):(t=c(s),t.c(),t.m(e,a)):t&&(t.d(1),t=null),i&&i.p&&(!l||o&4)&&y(i,_,s,s[2],l?E(_,s[2],o,null):k(s[2]),null),(!l||o&2)&&f(e,"viewBox",s[1])},i(s){l||(I(i,s),l=!0)},o(s){q(i,s),l=!1},d(s){s&&r(e),t&&t.d(),i&&i.d(s)}}}function H(n,e,a){let{$$slots:l={},$$scope:t}=e,{title:_=null}=e,{viewBox:i}=e;return n.$$set=s=>{"title"in s&&a(0,_=s.title),"viewBox"in s&&a(1,i=s.viewBox),"$$scope"in s&&a(2,t=s.$$scope)},[_,i,t,l]}class U extends w{constructor(e){super(),B(this,e,H,G,b,{title:0,viewBox:1})}}export{U as I};