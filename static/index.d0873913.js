import{d as u,Q as y,bo as _,a as f,bp as b,y as P,G as h,bq as i,br as v,bs as L,be as x,b3 as r,$ as g,e as B,ai as T,a4 as c,bt as A,O as N,bu as R,bb as k,B as w,U as S,V as j,o as C,b as O,a0 as V,bl as I,bm as z}from"./entry.aea712e6.js";import{n as D}from"./ping.f217de0d.js";import"./utils.cf943505.js";import"./dict.2cf83286.js";import"./referral.5d520e7d.js";const E=u({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const a=await i[t.name]().then(o=>o.default||o);return()=>r(a,t.layoutProps,e.slots)}}),M=u({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const a=x(),o=y(_),s=o===f()?b():o,n=P(()=>B(t.name)??s.meta.layout??"default"),l=h();e.expose({layoutRef:l});const m=a.deferHydration();return()=>{const d=n.value&&n.value in i,p=s.meta.layoutTransition??v;return L(g,d&&p,{default:()=>r(A,{suspensible:!0,onResolve:()=>{c(m)}},{default:()=>r(U,{layoutProps:T(e.attrs,{ref:l}),key:n.value,name:n.value,shouldProvide:!t.name,hasTransition:!!p},e.slots)})}).default()}}}),U=u({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const a=t.name;return t.shouldProvide&&N(R,{isCurrent:o=>a===(o.meta.layout??"default")}),()=>{var o,s;return!a||typeof a=="string"&&!(a in i)?(s=(o=e.slots).default)==null?void 0:s.call(o):r(E,{key:a,layoutProps:t.layoutProps,name:a},e.slots)}}}),$=I(()=>z(()=>import("./entry.aea712e6.js").then(t=>t.cn),["./entry.aea712e6.js","./entry.7b99b35e.css"],import.meta.url).then(t=>t.default||t)),q={class:"w-full h-full"},K={__name:"index",setup(t){const e=k();return w(async()=>{await c(),e.getDisconnect||e.setPingIntervalTime(D)}),(a,o)=>{const s=$,n=M;return C(),S(n,{name:"index"},{default:j(()=>[O("div",q,[V(s)])]),_:1})}}};export{K as default};
