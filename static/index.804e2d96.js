import{d as u,$ as y,a as _,a6 as f,h as P,g as h,a7 as i,a8 as v,a9 as L,v as g,aa as x,ab as r,V as b,e as B,ac as T,p as c,ad as k,M as A,ae as N,m as R,B as j,k as w,o as S,b as C,j as O,a4 as V,a5 as I}from"./entry.dece130f.js";import{u as M}from"./user.3805b098.js";import{n as z}from"./ping.05be9f0e.js";import"./Fingerprinter.12e3f5f4.js";import"./index.1735d320.js";import"./referral.18cc4dbe.js";import"./request.bc88cfcc.js";const D=u({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const a=await i[t.name]().then(o=>o.default||o);return()=>r(a,t.layoutProps,e.slots)}}),E=u({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const a=g(),o=y(x),s=o===_()?f():o,n=P(()=>B(t.name)??s.meta.layout??"default"),l=h();e.expose({layoutRef:l});const m=a.deferHydration();return()=>{const d=n.value&&n.value in i,p=s.meta.layoutTransition??v;return L(b,d&&p,{default:()=>r(k,{suspensible:!0,onResolve:()=>{c(m)}},{default:()=>r($,{layoutProps:T(e.attrs,{ref:l}),key:n.value,name:n.value,shouldProvide:!t.name,hasTransition:!!p},e.slots)})}).default()}}}),$=u({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const a=t.name;return t.shouldProvide&&A(N,{isCurrent:o=>a===(o.meta.layout??"default")}),()=>{var o,s;return!a||typeof a=="string"&&!(a in i)?(s=(o=e.slots).default)==null?void 0:s.call(o):r(D,{key:a,layoutProps:t.layoutProps,name:a},e.slots)}}}),F=V(()=>I(()=>import("./entry.dece130f.js").then(t=>t.cg),["./entry.dece130f.js","./entry.199e2fdb.css"],import.meta.url).then(t=>t.default||t)),H={class:"w-full h-full"},X={__name:"index",setup(t){const e=M();return R(async()=>{await c(),e.getDisconnect||e.setPingIntervalTime(z)}),(a,o)=>{const s=F,n=E;return S(),j(n,{name:"index"},{default:w(()=>[C("div",H,[O(s)])]),_:1})}}};export{X as default};