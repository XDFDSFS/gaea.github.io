import{a as T,E as U}from"./el-input.3f41b2b4.js";import{E as B,a as z}from"./el-form.13feccb7.js";import{E as O}from"./el-checkbox.0dcbd30b.js";import{_ as A,a as H}from"./OtherLoginOrRegist.vuevuetypescriptsetuptruelang.5f559f18.js";import{_ as W,a as G,b as J}from"./Footer.vuevuetypescriptsetuptruelang.e0505d67.js";import{d as j,r as g,W as V,o as y,c as $,b as e,m as a,q as i,e as t,ai as I,a4 as Q,aj as X,E as N,p as Y,h as Z,a as K,f as M,F as S,N as ee,t as te,B as L}from"./entry.49fed3a6.js";import{u as R}from"./user.ea2799ef.js";import{a as se,f as oe}from"./user.5e094a50.js";import{t as P}from"./throttle.3832cdac.js";import{C as q}from"./index.1735d320.js";import{_ as ae}from"./plugin-vueexport-helper.c27b6911.js";import{_ as ne}from"./client-only.ae7f7b8d.js";import{_ as le}from"./freecompress-floor1-1.09f20057.js";import"./el-loading.662de1f6.js";import"./request.33870e4f.js";const b=v=>(Y("data-v-96f79e93"),v=v(),Z(),v),re={class:"w-full h-full flex flex-col items-center justify-center Regular"},ie=b(()=>e("div",{class:"w-full flex flex-col py-2 z-[999]"},[e("div",{class:"text-[48px] font-bold text-[#EDEDED] uppercase"},"Let's get start "),e("div",{class:"text-lg font-light text-[#EDEDED] uppercase"},"Log in your account")],-1)),ce={class:"w-full mt-4"},de=b(()=>e("div",{class:"flex items-center space-x-2"},[e("span",{class:"iconfont icon-email text-[#EDEDED] text-xl"}),e("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),pe=b(()=>e("div",{class:"flex items-center space-x-2"},[e("span",{class:"iconfont icon-cfmpassword text-[#EDEDED] text-xl"}),e("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),ue={class:"flex items-center justify-between text-white text-opacity-80 font-normal mb-6"},me={class:"flex items-center space-x-2 set_checkbox_sty text-[#2E2E2E] hover:text-[#EDEDED]"},_e=b(()=>e("span",{class:"text-[12px]"},"Rememebr me",-1)),fe=b(()=>e("span",{class:"duration-300 cursor-pointer text-[12px] text-[#2E2E2E] hover:text-[#EDEDED]"}," Forgot Password ? ",-1)),xe=[fe],he={class:"w-full flex justify-center px-12 mb-2 mt-4"},ge=b(()=>e("span",{class:"text-black Regular font-semibold text-[14px] uppercase"}," Login",-1)),ve={class:"flex items-center justify-center space-x-3 mb-6 text-[12px]"},Ee=b(()=>e("span",{class:"text-[#8F8F8F] z-[999]"},"Don't have an account?",-1)),we={class:"text-[#EDEDED] cursor-pointer z-[999]"},ye=j({__name:"Index",emits:["updateDisplay"],setup(v,{emit:u}){const c=g(),E=R(),n=V({email:"",password:"",rememberPassword:!1,recaptcha_token:""}),m=g(!1),D=V({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"}],password:[{required:!0,message:"Please enter a valide password",trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),x=async s=>{n.recaptcha_token=window.grecaptcha.getResponse(),s&&await s.validate(async(o,w)=>{if(o)try{m.value=!0;const _={username:n.email.trim(),password:q.SHA256(n.password).toString(q.enc.Hex).trim(),remember_me:n.rememberPassword,recaptcha_token:n.recaptcha_token.trim()},l=await se({..._});l&&l.code===200?(E.setToken(l.data.token),X("/dashboard")):(l.msg&&N.error(l.msg),d())}catch(_){console.log(_),d()}finally{m.value=!1}})},d=()=>{n.recaptcha_token="";const s=document.getElementById("login_recaptcha_token");s&&(s.innerHTML="",window.onloadTurnstileCallback())};return(s,o)=>{const w=T,_=B,l=O,r=A,F=U,h=W,f=H,C=z;return y(),$("div",re,[ie,e("div",ce,[a(C,{model:t(n),class:"",ref_key:"ruleFormRef",ref:c,rules:t(D),"label-position":"top","hide-required-asterisk":""},{default:i(()=>[a(_,{label:"Email or Uername",prop:"email"},{default:i(()=>[a(w,{placeholder:"Enter your email or uername",maxlength:50,modelValue:t(n).email,"onUpdate:modelValue":o[0]||(o[0]=p=>t(n).email=p),onKeyup:o[1]||(o[1]=I(p=>("throttle"in s?s.throttle:t(P))(()=>{x(t(c))}),["enter","native"]))},{prefix:i(()=>[de]),_:1},8,["modelValue"])]),_:1}),a(_,{label:"Password",prop:"password"},{default:i(()=>[a(w,{placeholder:"Enter your password",maxlength:50,type:"password",modelValue:t(n).password,"onUpdate:modelValue":o[2]||(o[2]=p=>t(n).password=p),"show-password":"",onKeyup:o[3]||(o[3]=I(p=>("throttle"in s?s.throttle:t(P))(()=>{x(t(c))}),["enter","native"])),oncopy:"return false"},{prefix:i(()=>[pe]),_:1},8,["modelValue"])]),_:1}),e("div",ue,[e("div",me,[a(l,{modelValue:t(n).rememberPassword,"onUpdate:modelValue":o[4]||(o[4]=p=>t(n).rememberPassword=p)},null,8,["modelValue"]),_e]),e("div",{class:"flex flex-col items-center",onClick:o[5]||(o[5]=p=>u("updateDisplay",!1))},xe)]),a(_,{prop:"recaptcha_token"},{default:i(()=>[a(r)]),_:1}),e("div",he,[a(F,{class:"w-full z-[999]",style:{height:"44px"},color:"#EDEDED",round:"",loading:t(m),onClick:o[6]||(o[6]=p=>("throttle"in s?s.throttle:t(P))(()=>{x(t(c))}))},{default:i(()=>[ge]),_:1},8,["loading"])]),e("div",ve,[Ee,e("span",we,[a(h,{to:"/register"},{default:i(()=>[Q("Sign up")]),_:1})])]),a(f)]),_:1},8,["model","rules"])])])}}});const be=ae(ye,[["__scopeId","data-v-96f79e93"]]),De=(v,u,c)=>{const E=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!u||E.test(u))return c();c(new Error("Please enter a valid email address!"))},ke={class:"w-full h-full flex flex-col items-center justify-center space-y-6 Regular"},$e={class:"w-full flex items-center justify-between space-x-2"},Pe=e("span",{class:"text-sm font-normal text-[#EDEDED]"},"Forgot Password",-1),Fe={class:"text-sm font-normal text-[#EDEDED] cursor-pointer flex items-center space-x-6"},Ve=e("span",null," Login in",-1),Ce=e("span",{class:"iconfont icon-gengduo11"},null,-1),Ie=[Ce],je=e("div",{class:"flex items-center space-x-2 text-[#666666]"},[e("span",{class:"iconfont icon-email text-base"}),e("span",{class:"w-[1px] h-[18px] bg-[#666666]"})],-1),Re=e("span",{class:"text-sm font-normal text-[#7A7A7A]"}," We will send a recovery link to this email ",-1),Se={class:"w-full flex justify-center px-12 mb-2 mt-4"},Le=e("span",{class:"font-medium"},"SEND",-1),qe={class:"w-[300px] flex flex-col items-center justify-center space-y-6"},Te={class:"flex flex-col items-center space-y-1 z-[99]"},Ue=e("span",{class:"text-[24px] font-normal text-[#EDEDED]"}," Send successful ",-1),Be={class:"text-sm font-normal text-white"},ze=e("span",{class:"font-medium"},"BACK TO LOGIN",-1),Ae=j({__name:"ForgotPassWord",emits:["updateDisplay"],setup(v,{emit:u}){const c=g(),E=K(),n=g(!1),m=g(!1),D=R(),x=g(""),d=V({email:"",recaptcha_token:""}),s=g(!1),o=V({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"},{validator:De,trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),w=async l=>{d.recaptcha_token=window.grecaptcha.getResponse(),l&&await l.validate(async(r,F)=>{if(r)try{const h={email:d.email.trim(),recaptcha_token:d.recaptcha_token.trim()};s.value=!0;const f=await oe({...h});s.value=!1,f&&f.code===200?(m.value=!0,x.value=f.data):(N.error(f.msg||f.detail.type.msg),_())}catch(h){console.log(h),s.value=!1,_()}})},_=()=>{d.recaptcha_token="";const l=document.getElementById("forgot_password_recaptcha_token");l&&(l.innerHTML="",window.onloadTurnstileCallback())};return M(async()=>{D.clearUserInfo(),E.query.type==="forgotPassword"&&(n.value=!0)}),(l,r)=>{const F=T,h=B,f=A,C=z,p=U;return y(),$("div",ke,[t(m)?(y(),$(S,{key:1},[e("div",qe,[e("div",Te,[Ue,e("span",Be,te(t(x)),1)])]),a(p,{class:"w-fit z-[99]",style:{height:"44px"},color:"#EDEDED",round:"",loading:t(s),onClick:r[5]||(r[5]=k=>u("updateDisplay",!0))},{default:i(()=>[ze]),_:1},8,["loading"])],64)):(y(),$(S,{key:0},[e("div",$e,[Pe,e("span",Fe,[Ve,e("div",{onClick:r[0]||(r[0]=k=>u("updateDisplay",!0)),class:"w-1 h-1 p-2 rounded-full text-[8px] border bordder-[#EDEDED] hover:bg-[#EDEDED] hover:text-black flex items-center justify-center"},Ie)])]),a(C,{onSubmit:r[3]||(r[3]=ee(()=>{},["prevent"])),model:t(d),class:"w-full",ref_key:"ruleFormRef",ref:c,rules:t(o),"label-position":"top","hide-required-asterisk":""},{default:i(()=>[a(h,{label:"Email",prop:"email"},{default:i(()=>[a(F,{placeholder:"Enter your email",modelValue:t(d).email,"onUpdate:modelValue":r[1]||(r[1]=k=>t(d).email=k),onKeyup:r[2]||(r[2]=I(k=>("throttle"in l?l.throttle:t(P))(()=>{w(t(c))}),["enter","native"]))},{prefix:i(()=>[je]),_:1},8,["modelValue"])]),_:1}),Re,a(h,{prop:"recaptcha_token",class:"mt-10"},{default:i(()=>[a(f)]),_:1})]),_:1},8,["model","rules"]),e("div",Se,[a(p,{class:"w-full",style:{height:"44px"},color:"#EDEDED",round:"",loading:t(s),onClick:r[4]||(r[4]=k=>("throttle"in l?l.throttle:t(P))(()=>{w(t(c))}))},{default:i(()=>[Le]),_:1},8,["loading"])])],64))])}}}),Ne={class:"w-full overflow-auto bg-black"},Ke={class:"w-full h-screen bg-black flex flex-col overflow-auto px-12 pb-6 pt-20 relative"},Me=e("img",{src:le,class:"w-[55%] h-[80vh] object-fill absolute right-16 top-1/2 -translate-y-1/2 z-[1]"},null,-1),Oe=e("img",{src:J,alt:"",class:"w-full h-full object-contain"},null,-1),He=[Oe],We={class:"w-full flex-1 flex items-center justify-between overflow-auto relative z-[9999]"},Ge={class:"px-8 h-full rounded-lg"},Je={class:"adaptation-padding pb-[80px]"},pt=j({__name:"login",setup(v){const u=g(!0),c=K(),E=R(),n=m=>{u.value=m};return M(async()=>{E.clearUserInfo(),localStorage.removeItem("np_token"),c.query.type==="forgotPassword"&&(u.value=!1)}),(m,D)=>{const x=be,d=Ae,s=ne,o=G;return y(),$("div",Ne,[e("div",Ke,[Me,e("div",{class:"w-40 h-10 cursor-pointer fixed top-5 left-5",onClick:D[0]||(D[0]=w=>m.$router.go(0))},He),a(s,null,{default:i(()=>[e("div",We,[e("div",Ge,[t(u)?(y(),L(x,{key:0,onUpdateDisplay:n})):(y(),L(d,{key:1,onUpdateDisplay:n}))])])]),_:1})]),e("div",Je,[a(o)])])}}});export{pt as default};