import{r as D,bj as $,bC as M,H as b,w as U,z as B,e as g,bD as H,bd as j,bE as z,v as A,L as F,E as k,a1 as T}from"./entry.f2efeee4.js";import{u as C}from"./user.1ee6c517.js";import{u as L}from"./godhood.fb9487a0.js";const G=()=>null;function S(...a){const i=typeof a[a.length-1]=="string"?a.pop():void 0;typeof a[0]!="string"&&a.unshift(i);let[t,n,r={}]=a;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof n!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");r.server=r.server??!0,r.default=r.default??G,r.lazy=r.lazy??!1,r.immediate=r.immediate??!0;const e=B(),l=()=>e.isHydrating?e.payload.data[t]:e.static.data[t],o=()=>l()!==void 0;e._asyncData[t]||(e._asyncData[t]={data:D(l()??r.default()),pending:D(!o()),error:$(e.payload._errors,t),status:D("idle")});const s={...e._asyncData[t]};s.refresh=s.execute=(u={})=>{if(e._asyncDataPromises[t]){if(u.dedupe===!1)return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if((u._initial||e.isHydrating&&u._initial!==!1)&&o())return l();s.pending.value=!0,s.status.value="pending";const d=new Promise((c,f)=>{try{c(n(e))}catch(v){f(v)}}).then(c=>{if(d.cancelled)return e._asyncDataPromises[t];let f=c;r.transform&&(f=r.transform(c)),r.pick&&(f=I(f,r.pick)),s.data.value=f,s.error.value=null,s.status.value="success"}).catch(c=>{if(d.cancelled)return e._asyncDataPromises[t];s.error.value=c,s.data.value=g(r.default()),s.status.value="error"}).finally(()=>{d.cancelled||(s.pending.value=!1,e.payload.data[t]=s.data.value,s.error.value&&(e.payload._errors[t]=H(s.error.value)),delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=d,e._asyncDataPromises[t]};const h=()=>s.refresh({_initial:!0}),_=r.server!==!1&&e.payload.serverRendered;{const u=j();if(u&&!u._nuxtOnBeforeMountCbs){u._nuxtOnBeforeMountCbs=[];const c=u._nuxtOnBeforeMountCbs;u&&(M(()=>{c.forEach(f=>{f()}),c.splice(0,c.length)}),b(()=>c.splice(0,c.length)))}_&&e.isHydrating&&o()?(s.pending.value=!1,s.status.value=s.error.value?"error":"success"):u&&(e.payload.serverRendered&&e.isHydrating||r.lazy)&&r.immediate?u._nuxtOnBeforeMountCbs.push(h):r.immediate&&h(),r.watch&&U(r.watch,()=>s.refresh());const d=e.hook("app:data:refresh",c=>{if(!c||c.includes(t))return s.refresh()});u&&b(d)}const m=Promise.resolve(e._asyncDataPromises[t]).then(()=>s);return Object.assign(m,s),m}function I(a,i){const t={};for(const n of i)t[n]=a[n];return t}function q(a,i,t){const[n={},r]=typeof i=="string"?[{},i]:[i,t],e=n.key||z([r,g(n.baseURL),typeof a=="string"?a:"",g(n.params||n.query)]);if(!e||typeof e!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+e);if(!a)throw new Error("[nuxt] [useFetch] request is missing.");const l=e===r?"$f"+e:e,o=A(()=>{let p=a;return typeof p=="function"&&(p=p()),g(p)});if(!n.baseURL&&typeof o.value=="string"&&o.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:s,lazy:h,default:_,transform:m,pick:u,watch:d,immediate:c,...f}=n,v=F({...f,cache:typeof n.cache=="boolean"?void 0:n.cache}),R={server:s,lazy:h,default:_,transform:m,pick:u,immediate:c,watch:d===!1?[]:[v,o,...d||[]]};let y;return S(l,()=>{var w;return(w=y==null?void 0:y.abort)==null||w.call(y),y=typeof AbortController<"u"?new AbortController:{},typeof o.value=="string"&&o.value.startsWith("/"),(n.$fetch||globalThis.$fetch)(o.value,{signal:y.signal,...v})},R)}const x=()=>{const a=C(),i=L();a.clearUserInfo(),i.clearGodhoodInfo()},K="https://api.gaea.la";let E=!1,W=0;const N=2e4,J=a=>({"Content-Type":"application/json",Authorization:`Bearer ${a}`}),P=a=>{var r,e,l,o,s,h;const i=Date.now(),t=((r=a.data)==null?void 0:r.message)||((e=a.data)==null?void 0:e.msg)||((s=(o=(l=a.data)==null?void 0:l.detail)==null?void 0:o[0])==null?void 0:s.msg)||a.detail||((h=a.data)==null?void 0:h.detail)||"network error",n=a.statusCode;if(!((t==="network error"||n===502)&&i-W<N)&&n!==502){if(n===403){T("/login"),x();return}if(n!==503){k.error(t);return}}},O=async(a,i,t)=>{const n=C(),r=J(n.getToken),e=`${K}${a}`;try{const{data:l,error:o}=await q(e,{...i,headers:r,responseType:t},"$mr5k66ooDp");if(l.value)return l.value;const{statusCode:s}=o.value;if(o.value)return s===401||s===403&&!E?(k.error(o.value.data.detail),E=!0,T("/login"),x(),!1):P(o.value)}catch(l){return P(l)}},Z=(a,i,t="json")=>O(a,{method:"GET",params:i},t),ee=(a,i,t="json")=>O(a,{method:"POST",body:i},t);export{Z as G,ee as P,x as c};
