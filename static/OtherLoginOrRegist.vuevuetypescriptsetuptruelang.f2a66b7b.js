import{d,r as p,f as u,o as _,c as h,p as f,h as m,b as i,l as w,m as g,A as v,e as l}from"./entry.a1fec27a.js";import{_ as A}from"./plugin-vueexport-helper.c27b6911.js";import{E as x}from"./el-input.c3a27b4b.js";import{v as E}from"./el-loading.88b47376.js";import{g as y}from"./user.92b181cd.js";import{t as k}from"./throttle.3832cdac.js";const C=c=>(f("data-v-6e75174e"),c=c(),m(),c),B={class:"w-full flex items-center justify-center"},I=C(()=>i("div",{id:"recaptcha-container",class:"g-recaptcha mx-auto","data-sitekey":"6LcsCJQqAAAAAJZKHiz8VZTf8_2E106hkalwleDE","data-action":"LOGIN"},null,-1)),L=[I],N=d({__name:"GoogleAuthentication",setup(c){const o=()=>new Promise((t,n)=>{if(window.grecaptcha&&typeof window.grecaptcha.render=="function")t();else{const a=document.createElement("script");a.src="https://www.google.com/recaptcha/api.js?hl=en",a.async=!0,a.defer=!0,a.onload=()=>{window.grecaptcha&&typeof window.grecaptcha.render=="function"?t():n(new Error("grecaptcha.render is not a function after script load"))},a.onerror=()=>n(new Error("Failed to load reCAPTCHA script")),document.head.appendChild(a)}}),s=()=>{window.grecaptcha&&typeof window.grecaptcha.render=="function"?window.grecaptcha.render("recaptcha-container",{sitekey:"6LcsCJQqAAAAAJZKHiz8VZTf8_2E106hkalwleDE",callback:e,action:"LOGIN"}):console.error("grecaptcha.render is not available")},e=t=>{r.value=t},r=p("");return u(async()=>{try{await o(),s()}catch{}}),(t,n)=>(_(),h("div",B,L))}});const V=A(N,[["__scopeId","data-v-6e75174e"]]),S={className:"w-full space-y-4 flex flex-col items-center  z-[99]"},b=i("div",{className:" text-[10px] font-medium text-[#E6E6E6]  mt-3  z-[99]"},"or Sign with",-1),z={class:"iconfont icon-guge text-[26px] font-bold"},Z=d({__name:"OtherLoginOrRegist",setup(c){const o=p(!1),s=async()=>{try{if(o.value)return;o.value=!0;const e=await y();o.value=!1,e&&e.code===200&&window.open(e.data.url,"_self")}catch(e){console.log(e,"error"),o.value=!1}};return(e,r)=>{const t=x,n=E;return _(),h("div",S,[b,w(t,{class:"z-[99]",color:"#EBEBEB",style:{width:"47px",height:"47px"},circle:"",onClick:r[0]||(r[0]=a=>("throttle"in e?e.throttle:l(k))(()=>{s()}))},{default:g(()=>[v(i("span",z,null,512),[[n,l(o)]])]),_:1})])}}});export{V as _,Z as a};