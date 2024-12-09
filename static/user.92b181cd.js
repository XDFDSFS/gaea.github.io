import{r as D,bg as U,ba as A,X as P,w as $,x as M,e as w,bQ as B,L,bR as F,q as H,W as j,E as T,aj as z}from"./entry.a1fec27a.js";import{u as S}from"./user.db4b302c.js";const q=()=>null;function G(...e){const u=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(u);let[a,n,s={}]=e;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof n!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");s.server=s.server??!0,s.default=s.default??q,s.lazy=s.lazy??!1,s.immediate=s.immediate??!0;const t=M(),l=()=>t.isHydrating?t.payload.data[a]:t.static.data[a],o=()=>l()!==void 0;t._asyncData[a]||(t._asyncData[a]={data:D(l()??s.default()),pending:D(!o()),error:U(t.payload._errors,a),status:D("idle")});const r={...t._asyncData[a]};r.refresh=r.execute=(c={})=>{if(t._asyncDataPromises[a]){if(c.dedupe===!1)return t._asyncDataPromises[a];t._asyncDataPromises[a].cancelled=!0}if((c._initial||t.isHydrating&&c._initial!==!1)&&o())return l();r.pending.value=!0,r.status.value="pending";const h=new Promise((i,d)=>{try{i(n(t))}catch(v){d(v)}}).then(i=>{if(h.cancelled)return t._asyncDataPromises[a];let d=i;s.transform&&(d=s.transform(i)),s.pick&&(d=I(d,s.pick)),r.data.value=d,r.error.value=null,r.status.value="success"}).catch(i=>{if(h.cancelled)return t._asyncDataPromises[a];r.error.value=i,r.data.value=w(s.default()),r.status.value="error"}).finally(()=>{h.cancelled||(r.pending.value=!1,t.payload.data[a]=r.data.value,r.error.value&&(t.payload._errors[a]=B(r.error.value)),delete t._asyncDataPromises[a])});return t._asyncDataPromises[a]=h,t._asyncDataPromises[a]};const p=()=>r.refresh({_initial:!0}),_=s.server!==!1&&t.payload.serverRendered;{const c=L();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const i=c._nuxtOnBeforeMountCbs;c&&(A(()=>{i.forEach(d=>{d()}),i.splice(0,i.length)}),P(()=>i.splice(0,i.length)))}_&&t.isHydrating&&o()?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):c&&(t.payload.serverRendered&&t.isHydrating||s.lazy)&&s.immediate?c._nuxtOnBeforeMountCbs.push(p):s.immediate&&p(),s.watch&&$(s.watch,()=>r.refresh());const h=t.hook("app:data:refresh",i=>{if(!i||i.includes(a))return r.refresh()});c&&P(h)}const g=Promise.resolve(t._asyncDataPromises[a]).then(()=>r);return Object.assign(g,r),g}function I(e,u){const a={};for(const n of u)a[n]=e[n];return a}function W(e,u,a){const[n={},s]=typeof u=="string"?[{},u]:[u,a],t=n.key||F([s,w(n.baseURL),typeof e=="string"?e:"",w(n.params||n.query)]);if(!t||typeof t!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+t);if(!e)throw new Error("[nuxt] [useFetch] request is missing.");const l=t===s?"$f"+t:t,o=H(()=>{let m=e;return typeof m=="function"&&(m=m()),w(m)});if(!n.baseURL&&typeof o.value=="string"&&o.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:r,lazy:p,default:_,transform:g,pick:c,watch:h,immediate:i,...d}=n,v=j({...d,cache:typeof n.cache=="boolean"?void 0:n.cache}),O={server:r,lazy:p,default:_,transform:g,pick:c,immediate:i,watch:h===!1?[]:[v,o,...h||[]]};let y;return G(l,()=>{var E;return(E=y==null?void 0:y.abort)==null||E.call(y),y=typeof AbortController<"u"?new AbortController:{},typeof o.value=="string"&&o.value.startsWith("/"),(n.$fetch||globalThis.$fetch)(o.value,{signal:y.signal,...v})},O)}const K="https://api.gaea.la";let k=!1,x=0;const X=2e4,N=e=>({"Content-Type":"application/json",Authorization:`Bearer ${e}`}),R=e=>{var s,t,l,o,r,p;const u=Date.now(),a=((s=e.data)==null?void 0:s.message)||((t=e.data)==null?void 0:t.msg)||((r=(o=(l=e.data)==null?void 0:l.detail)==null?void 0:o[0])==null?void 0:r.msg)||e.detail||((p=e.data)==null?void 0:p.detail)||"network error",n=e.statusCode;if(!((a==="network error"||n===502)&&u-x<X)&&n!==502){if(n===403)return a;T.error(a),(a==="network error"||n===502)&&(x=u)}},C=async(e,u,a)=>{const n=S(),s=N(n.getToken),t=`${K}${e}`;try{const{data:l,error:o}=await W(t,{...u,headers:s,responseType:a},"$mr5k66ooDp");if(l.value)return l.value;if(o.value)return o.value.statusCode===401&&!k?(T.error(o.value.data.detail),k=!0,z("/"),n.clearUserInfo(),!0):R(o.value)}catch(l){return R(l)}},b=(e,u)=>C(e,{method:"GET",params:u}),f=(e,u,a)=>C(e,{method:"POST",body:u},a),Y=e=>f("/api/auth/login",e),Z=e=>f("/api/auth/register",e),ee=e=>f("/api/auth/forget-password",e),te=()=>f("/api/auth/session"),ae=e=>f("/api/auth/change-password",e),se=e=>f("/api/auth/reset-password",e),re=e=>f("/api/validate/email",e),ne=e=>f("/api/validate/username",e),oe=e=>f("/api/auth/change-email",e),ie=()=>b("/api/notify/announcement"),ue=()=>b("/api/auth/google/auth"),ce=e=>f("/api/bind/referral",e),le=()=>b("/api/auth/unbind/x"),fe=()=>b("/api/auth/unbind/discord"),de=e=>f("/api/auth/unbind/address",e);export{b as G,f as P,te as a,Y as b,oe as c,ne as d,Z as e,ee as f,ue as g,se as h,ce as i,fe as j,le as k,de as l,ae as m,ie as n,re as v};