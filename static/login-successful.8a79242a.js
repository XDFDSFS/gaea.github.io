import{c as m}from"./utils.365304bd.js";import{d,f as u,q as f,s as g,v as h,o as _,c as p,i as b,j as w,e as r,b as s}from"./entry.8027e681.js";import{_ as v}from"./plugin-vueexport-helper.c27b6911.js";import{t as x,_ as y}from"./throttle.b222e1dc.js";import{g as T}from"./user.9fb62a56.js";const k=["id"],B=d({__name:"Turnstile",props:{id:{default:"example-container"}},emits:["toUpdate"],setup(i,{emit:o}){const n=i;u();const t=e=>new Promise((l,c)=>{const a=document.createElement("script");a.src=e,a.defer=!0,a.onload=()=>l(!0),a.onerror=()=>c(new Error("Script load error")),document.body.appendChild(a)});return f(async()=>{await g();try{await t("https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"),window.onloadTurnstileCallback=function(){window.turnstile&&window.turnstile.render(`#${n.id}`,{sitekey:m(),language:"en",callback:function(e){o("toUpdate",e)}})}}catch(e){console.log(e)}}),h(()=>{const e=document.getElementById(n.id);e&&(e.innerHTML=""),delete window.onloadTurnstileCallback}),(e,l)=>(_(),p("div",{id:`${n.id}`,class:"w-full turnstile h-[68px] flex items-center justify-center"},null,8,k))}});const H=v(B,[["__scopeId","data-v-2ab66cdc"]]),C=""+globalThis.__publicAssetsURL("images/public/google.png"),N={className:"w-full space-y-2"},D=s("div",{className:"w-full flex items-center space-x-7 "},[s("div",{className:"flex-1 h-[.0625rem] bg-[#D2D2D2]"}),s("div",{className:" text-base font-medium text-white"},"Or sign in with"),s("div",{className:"flex-1 h-[.0625rem] bg-[#D2D2D2]"})],-1),E=s("img",{src:C,class:"w-5 h-5 mr-2"},null,-1),$=s("span",{className:"text-lg ml-2"},"Google",-1),O=d({__name:"OtherLoginOrRegist",setup(i){const o=u(!1),n=async()=>{try{o.value=!0;const t=await T();o.value=!1,t&&t.code===200&&window.open(t.data.url,"_self")}catch(t){console.log(t,"error"),o.value=!1}};return(t,e)=>{const l=y;return _(),p("div",N,[D,b(l,{style:{height:"45px"},round:!1,bg:"transparent",hoverBg:"transparent",border:"1px solid #ffffffaf",hoverBgBorder:"1px solid #FFE099","btn-loading":r(o),disabled:r(o),title:"",hoverColor:"#FFE099","hover-title":"",onClickHandle:e[0]||(e[0]=c=>("throttle"in t?t.throttle:r(x))(()=>{n()}))},{default:w(()=>[E,$]),_:1},8,["btn-loading","disabled"])])}}}),R=""+globalThis.__publicAssetsURL("images/login/login_successful.png");export{H as _,O as a,R as b};
