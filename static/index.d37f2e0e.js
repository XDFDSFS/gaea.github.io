import{I as u,J as y,bm as _,bn as f,bo as P,p as b,z as h,bp as i,bq as v,br as L,bc as x,b0 as r,V as g,x as N,ae as R,a0 as c,bs as T,H as k,bt as A,b9 as B,r as j,O as w,P as S,N as C,R as O,X as I,bj as V,bk as z}from"./entry.ecabc15b.js";import{n as D}from"./ping.1c80e783.js";import"./utils.93a09b12.js";import"./dict.d5728e61.js";import"./referral.7d7af77b.js";const E=u({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const a=await i[t.name]().then(o=>o.default||o);return()=>r(a,t.layoutProps,e.slots)}}),H=u({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const a=x(),o=y(_),n=o===f()?P():o,s=b(()=>N(t.name)??n.meta.layout??"default"),l=h();e.expose({layoutRef:l});const m=a.deferHydration();return()=>{const d=s.value&&s.value in i,p=n.meta.layoutTransition??v;return L(g,d&&p,{default:()=>r(T,{suspensible:!0,onResolve:()=>{c(m)}},{default:()=>r(M,{layoutProps:R(e.attrs,{ref:l}),key:s.value,name:s.value,shouldProvide:!t.name,hasTransition:!!p},e.slots)})}).default()}}}),M=u({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const a=t.name;return t.shouldProvide&&k(A,{isCurrent:o=>a===(o.meta.layout??"default")}),()=>{var o,n;return!a||typeof a=="string"&&!(a in i)?(n=(o=e.slots).default)==null?void 0:n.call(o):r(E,{key:a,layoutProps:t.layoutProps,name:a},e.slots)}}}),q=V(()=>z(()=>import("./entry.ecabc15b.js").then(t=>t.cn),["./entry.ecabc15b.js","./entry.ffa6719b.css"],import.meta.url).then(t=>t.default||t)),F={class:"w-full h-full"},K={__name:"index",setup(t){const e=B();return j(async()=>{await c(),e.getDisconnect||e.setPingIntervalTime(D)}),(a,o)=>{const n=q,s=H;return C(),w(s,{name:"index"},{default:S(()=>[O("div",F,[I(n)])]),_:1})}}};export{K as default};