import{d as u,V as y,a as f,a2 as _,s as P,r as h,a3 as i,a4 as v,a5 as L,y as x,a6 as g,a7 as r,a8 as b,e as B,a9 as R,v as m,aa as T,R as A,ab as N,f as k,B as w,m as S,o as j,b as C,l as O,D as V,G as D}from"./entry.5ef69f17.js";import{u as I}from"./user.63bf69d2.js";import{n as z}from"./ping.f105e08b.js";import"./referral.d9bda8e4.js";import"./request.9899458d.js";import"./godhood.79936df8.js";import"./time.8dd23e32.js";import"./index.2d9eff2e.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";import"./user.a21d187b.js";const E=u({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const a=await i[t.name]().then(o=>o.default||o);return()=>r(a,t.layoutProps,e.slots)}}),M=u({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const a=x(),o=y(g),s=o===f()?_():o,n=P(()=>B(t.name)??s.meta.layout??"default"),l=h();e.expose({layoutRef:l});const c=a.deferHydration();return()=>{const d=n.value&&n.value in i,p=s.meta.layoutTransition??v;return L(b,d&&p,{default:()=>r(T,{suspensible:!0,onResolve:()=>{m(c)}},{default:()=>r(F,{layoutProps:R(e.attrs,{ref:l}),key:n.value,name:n.value,shouldProvide:!t.name,hasTransition:!!p},e.slots)})}).default()}}}),F=u({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const a=t.name;return t.shouldProvide&&A(N,{isCurrent:o=>a===(o.meta.layout??"default")}),()=>{var o,s;return!a||typeof a=="string"&&!(a in i)?(s=(o=e.slots).default)==null?void 0:s.call(o):r(E,{key:a,layoutProps:t.layoutProps,name:a},e.slots)}}}),G=V(()=>D(()=>import("./entry.5ef69f17.js").then(t=>t.cd),["./entry.5ef69f17.js","./entry.1361a732.css"],import.meta.url).then(t=>t.default||t)),H={class:"w-full h-full"},tt={__name:"index",setup(t){const e=I();return k(async()=>{await m(),e.getDisconnect||e.setPingIntervalTime(z)}),(a,o)=>{const s=G,n=M;return j(),w(n,{name:"index"},{default:S(()=>[C("div",H,[O(s)])]),_:1})}}};export{tt as default};
