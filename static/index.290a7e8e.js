import{d as u,V as y,a as f,a9 as _,i as P,r as h,aa as i,ab as v,ac as L,x,ad as g,ae as r,T,e as b,af as B,s as c,ag as A,J as N,ah as R,f as k,B as w,q as S,o as j,b as C,m as O,a7 as V,a8 as I}from"./entry.daafdf2f.js";import{u as z}from"./user.a5fedc73.js";import{n as D}from"./ping.26a04fb5.js";import"./referral.0812c7d3.js";import"./request.546a83dd.js";import"./Fingerprinter.8b7b1f30.js";import"./index.1735d320.js";const E=u({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const a=await i[t.name]().then(o=>o.default||o);return()=>r(a,t.layoutProps,e.slots)}}),M=u({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const a=x(),o=y(g),s=o===f()?_():o,n=P(()=>b(t.name)??s.meta.layout??"default"),l=h();e.expose({layoutRef:l});const m=a.deferHydration();return()=>{const d=n.value&&n.value in i,p=s.meta.layoutTransition??v;return L(T,d&&p,{default:()=>r(A,{suspensible:!0,onResolve:()=>{c(m)}},{default:()=>r(q,{layoutProps:B(e.attrs,{ref:l}),key:n.value,name:n.value,shouldProvide:!t.name,hasTransition:!!p},e.slots)})}).default()}}}),q=u({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const a=t.name;return t.shouldProvide&&N(R,{isCurrent:o=>a===(o.meta.layout??"default")}),()=>{var o,s;return!a||typeof a=="string"&&!(a in i)?(s=(o=e.slots).default)==null?void 0:s.call(o):r(E,{key:a,layoutProps:t.layoutProps,name:a},e.slots)}}}),F=V(()=>I(()=>import("./entry.daafdf2f.js").then(t=>t.ch),["./entry.daafdf2f.js","./entry.d24fcc4c.css"],import.meta.url).then(t=>t.default||t)),H={class:"w-full h-full"},X={__name:"index",setup(t){const e=z();return k(async()=>{await c(),e.getDisconnect||e.setPingIntervalTime(D)}),(a,o)=>{const s=F,n=M;return j(),w(n,{name:"index"},{default:S(()=>[C("div",H,[O(s)])]),_:1})}}};export{X as default};
