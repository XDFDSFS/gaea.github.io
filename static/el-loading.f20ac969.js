import{r as k,j as B,a1 as N,a2 as V,d as E,a3 as P,N as g,w as O,C as j,g as z,a4 as R,T as q,a5 as x,a6 as D,n as _,a7 as A,a8 as b,a9 as L,aa as I,ab as F,ac as G}from"./entry.82295edf.js";function H(t){let e;const l=k(!1),n=B({...t,originalPosition:"",originalOverflow:"",visible:!1});function a(o){n.text=o}function s(){const o=n.parent,r=u.ns;if(!o.vLoadingAddClassList){let c=o.getAttribute("loading-number");c=Number.parseInt(c)-1,c?o.setAttribute("loading-number",c.toString()):(x(o,r.bm("parent","relative")),o.removeAttribute("loading-number")),x(o,r.bm("parent","hidden"))}i(),m.unmount()}function i(){var o,r;(r=(o=u.$el)==null?void 0:o.parentNode)==null||r.removeChild(u.$el)}function d(){var o;t.beforeClose&&!t.beforeClose()||(l.value=!0,clearTimeout(e),e=window.setTimeout(f,400),n.visible=!1,(o=t.closed)==null||o.call(t))}function f(){if(!l.value)return;const o=n.parent;l.value=!1,o.vLoadingAddClassList=void 0,s()}const m=N(E({name:"ElLoading",setup(o,{expose:r}){const{ns:c,zIndex:S}=P("loading");return r({ns:c,zIndex:S}),()=>{const C=n.spinner||n.svg,T=g("svg",{class:"circular",viewBox:n.svgViewBox?n.svgViewBox:"0 0 50 50",...C?{innerHTML:C}:{}},[g("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),$=n.text?g("p",{class:c.b("text")},[n.text]):void 0;return g(q,{name:c.b("fade"),onAfterLeave:f},{default:O(()=>[j(z("div",{style:{backgroundColor:n.background||""},class:[c.b("mask"),n.customClass,n.fullscreen?"is-fullscreen":""]},[g("div",{class:c.b("spinner")},[T,$])]),[[R,n.visible]])])})}}})),u=m.mount(document.createElement("div"));return{...V(n),setText:a,removeElLoadingChild:i,close:d,handleAfterLeave:f,vm:u,get $el(){return u.$el}}}let p;const K=function(t={}){if(!D)return;const e=M(t);if(e.fullscreen&&p)return p;const l=H({...e,closed:()=>{var a;(a=e.closed)==null||a.call(e),e.fullscreen&&(p=void 0)}});Y(e,e.parent,l),w(e,e.parent,l),e.parent.vLoadingAddClassList=()=>w(e,e.parent,l);let n=e.parent.getAttribute("loading-number");return n?n=`${Number.parseInt(n)+1}`:n="1",e.parent.setAttribute("loading-number",n),e.parent.appendChild(l.$el),_(()=>l.visible.value=e.visible),e.fullscreen&&(p=l),l},M=t=>{var e,l,n,a;let s;return A(t.target)?s=(e=document.querySelector(t.target))!=null?e:document.body:s=t.target||document.body,{parent:s===document.body||t.body?document.body:s,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:s===document.body&&((l=t.fullscreen)!=null?l:!0),lock:(n=t.lock)!=null?n:!1,customClass:t.customClass||"",visible:(a=t.visible)!=null?a:!0,target:s}},Y=async(t,e,l)=>{const{nextZIndex:n}=l.vm.zIndex||l.vm._.exposed.zIndex,a={};if(t.fullscreen)l.originalPosition.value=b(document.body,"position"),l.originalOverflow.value=b(document.body,"overflow"),a.zIndex=n();else if(t.parent===document.body){l.originalPosition.value=b(document.body,"position"),await _();for(const s of["top","left"]){const i=s==="top"?"scrollTop":"scrollLeft";a[s]=`${t.target.getBoundingClientRect()[s]+document.body[i]+document.documentElement[i]-Number.parseInt(b(document.body,`margin-${s}`),10)}px`}for(const s of["height","width"])a[s]=`${t.target.getBoundingClientRect()[s]}px`}else l.originalPosition.value=b(e,"position");for(const[s,i]of Object.entries(a))l.$el.style[s]=i},w=(t,e,l)=>{const n=l.vm.ns||l.vm._.exposed.ns;["absolute","fixed","sticky"].includes(l.originalPosition.value)?x(e,n.bm("parent","relative")):L(e,n.bm("parent","relative")),t.fullscreen&&t.lock?L(e,n.bm("parent","hidden")):x(e,n.bm("parent","hidden"))},y=Symbol("ElLoading"),h=(t,e)=>{var l,n,a,s;const i=e.instance,d=o=>I(e.value)?e.value[o]:void 0,f=o=>{const r=A(o)&&(i==null?void 0:i[o])||o;return r&&k(r)},v=o=>f(d(o)||t.getAttribute(`element-loading-${G(o)}`)),m=(l=d("fullscreen"))!=null?l:e.modifiers.fullscreen,u={text:v("text"),svg:v("svg"),svgViewBox:v("svgViewBox"),spinner:v("spinner"),background:v("background"),customClass:v("customClass"),fullscreen:m,target:(n=d("target"))!=null?n:m?void 0:t,body:(a=d("body"))!=null?a:e.modifiers.body,lock:(s=d("lock"))!=null?s:e.modifiers.lock};t[y]={options:u,instance:K(u)}},Z=(t,e)=>{for(const l of Object.keys(e))F(e[l])&&(e[l].value=t[l])},Q={mounted(t,e){e.value&&h(t,e)},updated(t,e){const l=t[y];e.oldValue!==e.value&&(e.value&&!e.oldValue?h(t,e):e.value&&e.oldValue?I(e.value)&&Z(e.value,l.options):l==null||l.instance.close())},unmounted(t){var e;(e=t[y])==null||e.instance.close()}};export{Q as v};