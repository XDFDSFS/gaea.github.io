import{_ as h}from"./plugin-vueexport-helper.c27b6911.js";import{r as i,f as w,c as u,b as v,o as p}from"./entry.9365d9fc.js";const g=["width","height"],f=["d"],m={__name:"Grid",setup(x){const o=i(window.innerWidth),n=i(window.innerHeight),r=i("");function c(){const l=n.value/10,_=o.value/15;let s=[];for(let e=0;e<=10;e++){let t=e*l;s.push(`M 0 ${t} L ${o.value} ${t}`)}for(let e=0;e<=15;e++){let t=e*_;s.push(`M ${t} 0 L ${t} ${n.value}`)}r.value=s.join(" ")}return w(()=>{c(),window.addEventListener("resize",()=>{o.value=window.innerWidth,n.value=window.innerHeight,c()})}),(d,a)=>(p(),u("svg",{width:o.value,height:n.value,xmlns:"http://www.w3.org/2000/svg"},[v("path",{d:r.value,stroke:"#4d4d4d","stroke-width":"1",fill:"none"},null,8,f)],8,g))}},G=h(m,[["__scopeId","data-v-07acc53c"]]);export{G as default};