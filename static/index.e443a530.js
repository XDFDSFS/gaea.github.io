import{d as u,$ as y,a as f,a6 as _,g as P,f as h,a7 as i,a8 as v,a9 as L,y as x,aa as g,ab as r,V as b,e as T,ac as A,s as c,ad as B,M as N,ae as R,q as j,m as k,j as w,o as S,b as C,i as O,a4 as V,a5 as I}from"./entry.02a4ea65.js";import{u as M}from"./user.6e433532.js";import{n as z}from"./ping.f188e953.js";import"./referral.aebcb5c1.js";import"./request.92b21585.js";import"./Fingerprinter.cc5e5a79.js";import"./index.1735d320.js";const D=u({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const a=await i[t.name]().then(o=>o.default||o);return()=>r(a,t.layoutProps,e.slots)}}),E=u({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const a=x(),o=y(g),s=o===f()?_():o,n=P(()=>T(t.name)??s.meta.layout??"default"),l=h();e.expose({layoutRef:l});const m=a.deferHydration();return()=>{const d=n.value&&n.value in i,p=s.meta.layoutTransition??v;return L(b,d&&p,{default:()=>r(B,{suspensible:!0,onResolve:()=>{c(m)}},{default:()=>r($,{layoutProps:A(e.attrs,{ref:l}),key:n.value,name:n.value,shouldProvide:!t.name,hasTransition:!!p},e.slots)})}).default()}}}),$=u({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const a=t.name;return t.shouldProvide&&N(R,{isCurrent:o=>a===(o.meta.layout??"default")}),()=>{var o,s;return!a||typeof a=="string"&&!(a in i)?(s=(o=e.slots).default)==null?void 0:s.call(o):r(D,{key:a,layoutProps:t.layoutProps,name:a},e.slots)}}}),q=V(()=>I(()=>import("./entry.02a4ea65.js").then(t=>t.cf),["./entry.02a4ea65.js","./entry.2fee42cb.css"],import.meta.url).then(t=>t.default||t)),F={class:"w-full h-full"},X={__name:"index",setup(t){const e=M();return j(async()=>{await c(),e.getDisconnect||e.setPingIntervalTime(z)}),(a,o)=>{const s=q,n=E;return S(),k(n,{name:"index"},{default:w(()=>[C("div",F,[O(s)])]),_:1})}}};export{X as default};