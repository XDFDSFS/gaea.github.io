import{d as u,i as y,D as _,H as f,I as P,q as h,r as v,J as i,K as L,L as x,M as g,N as r,T,e as N,O as R,n as c,S as b,Q as w,R as A,u as B,o as S,f as k,w as j,a as C,b as O,g as I,h as D,_ as M}from"./entry.fd3f1e90.js";import{n as V}from"./ping.fd06b65c.js";import"./utils.d8b42fb8.js";import"./dict.d5728e61.js";import"./referral.99a87f34.js";const z=u({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const a=await i[t.name]().then(o=>o.default||o);return()=>r(a,t.layoutProps,e.slots)}}),E=u({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const a=g(),o=y(_),n=o===f()?P():o,s=h(()=>N(t.name)??n.meta.layout??"default"),l=v();e.expose({layoutRef:l});const m=a.deferHydration();return()=>{const d=s.value&&s.value in i,p=n.meta.layoutTransition??L;return x(T,d&&p,{default:()=>r(b,{suspensible:!0,onResolve:()=>{c(m)}},{default:()=>r(H,{layoutProps:R(e.attrs,{ref:l}),key:s.value,name:s.value,shouldProvide:!t.name,hasTransition:!!p},e.slots)})}).default()}}}),H=u({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const a=t.name;return t.shouldProvide&&w(A,{isCurrent:o=>a===(o.meta.layout??"default")}),()=>{var o,n;return!a||typeof a=="string"&&!(a in i)?(n=(o=e.slots).default)==null?void 0:n.call(o):r(z,{key:a,layoutProps:t.layoutProps,name:a},e.slots)}}}),q=D(()=>M(()=>import("./entry.fd3f1e90.js").then(t=>t.cm),["./entry.fd3f1e90.js","./entry.2b64dd0c.css"],import.meta.url).then(t=>t.default||t)),F={class:"w-full h-full"},G={__name:"index",setup(t){const e=B();return S(async()=>{await c(),e.getDisconnect||e.setPingIntervalTime(V)}),(a,o)=>{const n=q,s=E;return C(),k(s,{name:"index"},{default:j(()=>[O("div",F,[I(n)])]),_:1})}}};export{G as default};