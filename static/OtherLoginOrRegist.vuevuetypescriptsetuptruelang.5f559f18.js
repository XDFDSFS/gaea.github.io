import{d as l,f as d,o as s,c as _,p as h,h as u,b as n,r as f,A as m,e as i,B as g,q as w}from"./entry.49fed3a6.js";import{_ as v}from"./plugin-vueexport-helper.c27b6911.js";import{E as x}from"./el-input.3f41b2b4.js";import{v as A}from"./el-loading.662de1f6.js";import{g as E}from"./user.5e094a50.js";import{t as k}from"./throttle.3832cdac.js";const y=c=>(h("data-v-259ac20c"),c=c(),u(),c),C={class:"w-full flex items-center justify-center"},B=y(()=>n("div",{class:"g-recaptcha mx-auto","data-sitekey":"6LcsCJQqAAAAAJZKHiz8VZTf8_2E106hkalwleDE","data-action":"LOGIN"},null,-1)),I=[B],L=l({__name:"GoogleAuthentication",setup(c){const o=()=>{const e=document.createElement("script");e.src="https://www.google.com/recaptcha/api.js?hl=en",e.async=!0,e.defer=!0,e.onload=()=>{a()},document.head.appendChild(e)},a=()=>{window.grecaptcha&&window.grecaptcha.render("recaptcha-container",{sitekey:"6LcsCJQqAAAAAJZKHiz8VZTf8_2E106hkalwleDE",callback:t,action:"LOGIN"})},t=e=>{};return d(()=>{o()}),(e,r)=>(s(),_("div",C,I))}});const D=v(L,[["__scopeId","data-v-259ac20c"]]),S={className:"w-full space-y-4 flex flex-col items-center  z-[99]"},z=n("div",{className:" text-[10px] font-medium text-[#E6E6E6]  mt-3  z-[99]"},"or Sign with",-1),N=n("span",{class:"iconfont icon-guge text-[26px] font-bold"},null,-1),H=l({__name:"OtherLoginOrRegist",setup(c){const o=f(!1),a=async()=>{try{o.value=!0;const t=await E();o.value=!1,t&&t.code===200&&window.open(t.data.url,"_self")}catch(t){console.log(t,"error"),o.value=!1}};return(t,e)=>{const r=x,p=A;return s(),_("div",S,[z,m((s(),g(r,{class:"z-[99]",color:"#fff",style:{width:"47px",height:"47px"},circle:"",onClick:e[0]||(e[0]=$=>("throttle"in t?t.throttle:i(k))(()=>{a()}))},{default:w(()=>[N]),_:1})),[[p,i(o)]])])}}});export{D as _,H as a};
