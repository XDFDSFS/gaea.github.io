import{d,r as _,f,o as i,c as h,p as u,h as m,b as l,A as w,e as p,B as g,q as v}from"./entry.751b5d57.js";import{_ as A}from"./plugin-vueexport-helper.c27b6911.js";import{E as x}from"./el-input.49cfefdb.js";import{v as y}from"./el-loading.f3c822f6.js";import{g as E}from"./user.c9786568.js";import{t as k}from"./throttle.3832cdac.js";const C=c=>(u("data-v-6e75174e"),c=c(),m(),c),B={class:"w-full flex items-center justify-center"},I=C(()=>l("div",{id:"recaptcha-container",class:"g-recaptcha mx-auto","data-sitekey":"6LcsCJQqAAAAAJZKHiz8VZTf8_2E106hkalwleDE","data-action":"LOGIN"},null,-1)),L=[I],S=d({__name:"GoogleAuthentication",setup(c){const a=()=>new Promise((t,n)=>{if(window.grecaptcha&&typeof window.grecaptcha.render=="function")t();else{const o=document.createElement("script");o.src="https://www.google.com/recaptcha/api.js?hl=en",o.async=!0,o.defer=!0,o.onload=()=>{window.grecaptcha&&typeof window.grecaptcha.render=="function"?t():n(new Error("grecaptcha.render is not a function after script load"))},o.onerror=()=>n(new Error("Failed to load reCAPTCHA script")),document.head.appendChild(o)}}),s=()=>{window.grecaptcha&&typeof window.grecaptcha.render=="function"?window.grecaptcha.render("recaptcha-container",{sitekey:"6LcsCJQqAAAAAJZKHiz8VZTf8_2E106hkalwleDE",callback:e,action:"LOGIN"}):console.error("grecaptcha.render is not available")},e=t=>{r.value=t},r=_("");return f(async()=>{try{await a(),s()}catch{}}),(t,n)=>(i(),h("div",B,L))}});const Z=A(S,[["__scopeId","data-v-6e75174e"]]),b={className:"w-full space-y-4 flex flex-col items-center  z-[99]"},z=l("div",{className:" text-[10px] font-medium text-[#E6E6E6]  mt-3  z-[99]"},"or Sign with",-1),N=l("span",{class:"iconfont icon-guge text-[26px] font-bold"},null,-1),q=d({__name:"OtherLoginOrRegist",setup(c){const a=_(!1),s=async()=>{try{a.value=!0;const e=await E();a.value=!1,e&&e.code===200&&window.open(e.data.url,"_self")}catch(e){console.log(e,"error"),a.value=!1}};return(e,r)=>{const t=x,n=y;return i(),h("div",b,[z,w((i(),g(t,{class:"z-[99]",color:"#fff",style:{width:"47px",height:"47px"},circle:"",onClick:r[0]||(r[0]=o=>("throttle"in e?e.throttle:p(k))(()=>{s()}))},{default:v(()=>[N]),_:1})),[[n,p(a)]])])}}});export{Z as _,q as a};
