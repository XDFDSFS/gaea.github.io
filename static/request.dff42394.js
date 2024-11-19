import{f as w,bB as C,bH as R,F as k,w as $,y as B,e as g,bI as M,O as U,bJ as F,g as H,G as A,E as D,ag as z}from"./entry.5723f427.js";import{u as L}from"./user.a9621c51.js";const G=()=>null;function I(...a){const c=typeof a[a.length-1]=="string"?a.pop():void 0;typeof a[0]!="string"&&a.unshift(c);let[t,n,r={}]=a;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof n!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");r.server=r.server??!0,r.default=r.default??G,r.lazy=r.lazy??!1,r.immediate=r.immediate??!0;const e=B(),u=()=>e.isHydrating?e.payload.data[t]:e.static.data[t],o=()=>u()!==void 0;e._asyncData[t]||(e._asyncData[t]={data:w(u()??r.default()),pending:w(!o()),error:C(e.payload._errors,t),status:w("idle")});const s={...e._asyncData[t]};s.refresh=s.execute=(l={})=>{if(e._asyncDataPromises[t]){if(l.dedupe===!1)return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if((l._initial||e.isHydrating&&l._initial!==!1)&&o())return u();s.pending.value=!0,s.status.value="pending";const d=new Promise((i,f)=>{try{i(n(e))}catch(v){f(v)}}).then(i=>{if(d.cancelled)return e._asyncDataPromises[t];let f=i;r.transform&&(f=r.transform(i)),r.pick&&(f=S(f,r.pick)),s.data.value=f,s.error.value=null,s.status.value="success"}).catch(i=>{if(d.cancelled)return e._asyncDataPromises[t];s.error.value=i,s.data.value=g(r.default()),s.status.value="error"}).finally(()=>{d.cancelled||(s.pending.value=!1,e.payload.data[t]=s.data.value,s.error.value&&(e.payload._errors[t]=M(s.error.value)),delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=d,e._asyncDataPromises[t]};const h=()=>s.refresh({_initial:!0}),_=r.server!==!1&&e.payload.serverRendered;{const l=U();if(l&&!l._nuxtOnBeforeMountCbs){l._nuxtOnBeforeMountCbs=[];const i=l._nuxtOnBeforeMountCbs;l&&(R(()=>{i.forEach(f=>{f()}),i.splice(0,i.length)}),k(()=>i.splice(0,i.length)))}_&&e.isHydrating&&o()?(s.pending.value=!1,s.status.value=s.error.value?"error":"success"):l&&(e.payload.serverRendered&&e.isHydrating||r.lazy)&&r.immediate?l._nuxtOnBeforeMountCbs.push(h):r.immediate&&h(),r.watch&&$(r.watch,()=>s.refresh());const d=e.hook("app:data:refresh",i=>{if(!i||i.includes(t))return s.refresh()});l&&k(d)}const m=Promise.resolve(e._asyncDataPromises[t]).then(()=>s);return Object.assign(m,s),m}function S(a,c){const t={};for(const n of c)t[n]=a[n];return t}function j(a,c,t){const[n={},r]=typeof c=="string"?[{},c]:[c,t],e=n.key||F([r,g(n.baseURL),typeof a=="string"?a:"",g(n.params||n.query)]);if(!e||typeof e!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+e);if(!a)throw new Error("[nuxt] [useFetch] request is missing.");const u=e===r?"$f"+e:e,o=H(()=>{let p=a;return typeof p=="function"&&(p=p()),g(p)});if(!n.baseURL&&typeof o.value=="string"&&o.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:s,lazy:h,default:_,transform:m,pick:l,watch:d,immediate:i,...f}=n,v=A({...f,cache:typeof n.cache=="boolean"?void 0:n.cache}),x={server:s,lazy:h,default:_,transform:m,pick:l,immediate:i,watch:d===!1?[]:[v,o,...d||[]]};let y;return I(u,()=>{var b;return(b=y==null?void 0:y.abort)==null||b.call(y),y=typeof AbortController<"u"?new AbortController:{},typeof o.value=="string"&&o.value.startsWith("/"),(n.$fetch||globalThis.$fetch)(o.value,{signal:y.signal,...v})},x)}const q="https://api.gaea.la";let E=!1,P=0;const K=3e3,W=a=>({"Content-Type":"application/json",Authorization:`Bearer ${a}`}),T=a=>{var r,e,u,o,s,h;const c=Date.now(),t=((r=a.data)==null?void 0:r.message)||((e=a.data)==null?void 0:e.msg)||((s=(o=(u=a.data)==null?void 0:u.detail)==null?void 0:o[0])==null?void 0:s.msg)||a.detail||((h=a.data)==null?void 0:h.detail)||"network error",n=a.statusCode;if(!((t==="network error"||n===502)&&c-P<K)){if(n===502){D.error("network error");return}else D.error(t);(t==="network error"||n===502)&&(P=c)}},O=async(a,c,t)=>{const n=L(),r=W(n.getToken),e=`${q}${a}`;try{const{data:u,error:o}=await j(e,{...c,headers:r,responseType:t},"$mr5k66ooDp");if(u.value)return u.value;if(o.value){if(o.value.statusCode===401&&!E){D.error(o.value.data.detail),E=!0,z("/"),n.clearUserInfo();return}T(o.value)}}catch(u){throw T(u),u}},V=(a,c)=>O(a,{method:"GET",params:c}),X=(a,c,t)=>O(a,{method:"POST",body:c},t);export{V as G,X as P};
