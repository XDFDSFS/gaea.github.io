import{d as u,A as y,B as _,C as f,k as P,r as h,D as i,G as v,H as L,I as x,P as g,J as r,T,u as A,K as B,n as c,S as b,L as k,M as w,o as N,e as R,w as S,a as C,b as j,f as I,g as O,_ as D}from"./entry.c07dde69.js";import{u as M}from"./user.4e311bf2.js";import{n as V}from"./ping.7e71be9e.js";import"./utils.399a31c4.js";import"./dict.0e295fe2.js";import"./referral.e080c87e.js";const z=u({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const a=await i[t.name]().then(o=>o.default||o);return()=>r(a,t.layoutProps,e.slots)}}),E=u({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const a=x(),o=y(g),n=o===_()?f():o,s=P(()=>A(t.name)??n.meta.layout??"default"),l=h();e.expose({layoutRef:l});const m=a.deferHydration();return()=>{const d=s.value&&s.value in i,p=n.meta.layoutTransition??v;return L(T,d&&p,{default:()=>r(b,{suspensible:!0,onResolve:()=>{c(m)}},{default:()=>r(H,{layoutProps:B(e.attrs,{ref:l}),key:s.value,name:s.value,shouldProvide:!t.name,hasTransition:!!p},e.slots)})}).default()}}}),H=u({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const a=t.name;return t.shouldProvide&&k(w,{isCurrent:o=>a===(o.meta.layout??"default")}),()=>{var o,n;return!a||typeof a=="string"&&!(a in i)?(n=(o=e.slots).default)==null?void 0:n.call(o):r(z,{key:a,layoutProps:t.layoutProps,name:a},e.slots)}}}),F=O(()=>D(()=>import("./entry.c07dde69.js").then(t=>t.ce),["./entry.c07dde69.js","./entry.c0aabe7b.css"],import.meta.url).then(t=>t.default||t)),G={class:"w-full h-full"},W={__name:"index",setup(t){const e=M();return N(async()=>{await c(),e.getDisconnect||e.setPingIntervalTime(V)}),(a,o)=>{const n=F,s=E;return C(),R(s,{name:"index"},{default:S(()=>[j("div",G,[I(n)])]),_:1})}}};export{W as default};