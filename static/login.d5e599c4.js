import{E as q}from"./el-input.35acfe81.js";import{E as R,a as z}from"./el-form.ea7ef2e4.js";import{_ as N,a as J,b as K}from"./login-successful.ee3fbc4e.js";import{E as X}from"./el-checkbox.97703a3b.js";import{_ as Q,a as Y}from"./logo.1fc2a621.js";import{E as O,_ as Z}from"./plugin-vueexport-helper.542871fb.js";import{d as I,g as b,f as D,D as j,h as V,o as y,c as E,b as e,j as o,k as n,e as s,F as ee,ai as te,aj as se,E as H,x as oe,y as ae,a as M,m as W,X as L,t as le,ak as ne,B as S}from"./entry.7f1c9673.js";import{t as G}from"./throttle.a1e10328.js";import{_ as B,a as re,b as ce}from"./bg-kuang.589fdec7.js";import{C as A}from"./index.1735d320.js";import{_ as ie}from"./client-only.1ee69c80.js";import"./utils.0ab1234e.js";import"./el-loading.04d62748.js";const _e=""+globalThis.__publicAssetsURL("images/login/leaf.png"),f=v=>(oe("data-v-9bcc3a9b"),v=v(),ae(),v),de={class:"w-full h-full flex flex-col py-5"},pe=f(()=>e("div",{class:"w-full h-[80px] mt-30 flex flex-col items-center justify-center"},[e("div",{class:"text-3xl font-normal text-[#FFE099]"},"Let's get start "),e("div",{class:"text-sm font-normal text-[#C6BFAA]"},"Log in your account")],-1)),ue={class:"w-full flex-1 px-12 mt-4"},me=f(()=>e("span",{class:"iconfont icon-email text-[#FFE099] text-xl"},null,-1)),fe=f(()=>e("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),he={class:"flex items-center justify-between text-white text-opacity-80 font-normal mt-2"},xe={class:"flex items-center space-x-2"},ge=f(()=>e("span",{class:"text-[12px]"},"Rememebr me",-1)),we=f(()=>e("span",{class:"duration-300 cursor-pointer text-[12px] show_spw"}," Forgot Password ? ",-1)),be=f(()=>e("img",{src:_e,class:"w-14 h-2 tig opacity-0 duration-300"},null,-1)),ve=[we,be],ye={class:"flex items-center justify-center space-x-3"},ke=f(()=>e("span",{class:"text-white"},"Don't have an account?",-1)),$e={class:"text-[#5CF3FF] cursor-pointer"},Ee={class:"w-[243px] h-12 absolute left-[118px] -bottom-[17px] z-10 cursor-pointer"},Fe=f(()=>e("img",{src:B,alt:"",class:"absolute top-0 left-0 -z-10 w-full h-full object-cover"},null,-1)),Pe=f(()=>e("span",{class:"text-base font-normal text-[#4E4A3C]"},"CONTINUE",-1)),Ce=I({__name:"Index",emits:["updateDisplay"],setup(v,{emit:d}){const r=b(),h=D(),t=j({email:"",password:"",rememberPassword:!1,recaptcha_token:""}),p=b(!1),F=V(()=>!t.email||!t.password||!t.recaptcha_token);V(()=>F.value?"/images/login/btn_no.png":"/images/login/btn_selected.png");const k=j({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"}],password:[{required:!0,message:"Please enter a valide password",trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),c=async i=>{i&&await i.validate(async(l,$)=>{if(l)try{p.value=!0;const u={username:t.email.trim(),password:A.SHA256(t.password).toString(A.enc.Hex).trim(),remember_me:t.rememberPassword,recaptcha_token:t.recaptcha_token.trim()},a=await te({...u});a.code===200?(h.setToken(a.data.token),h.setUserInfo(a.data.user_info),localStorage.setItem("gaea_token",a.data.token),se("/dashboard")):(H.error(a.msg),P()),p.value=!1}catch(u){console.log(u),p.value=!1,P()}})},x=i=>{t.recaptcha_token=i,r.value.clearValidate("recaptcha_token")},P=()=>{t.recaptcha_token="";const i=document.getElementById("login_recaptcha_token");i&&(i.innerHTML="",window.onloadTurnstileCallback())};return(i,l)=>{const $=q,u=R,a=N,_=J,C=X,g=Q,w=z,U=O;return y(),E("div",de,[pe,e("div",ue,[o(w,{model:s(t),class:"",ref_key:"ruleFormRef",ref:r,rules:s(k),"label-position":"top","hide-required-asterisk":""},{default:n(()=>[o(u,{label:"Email or Uername",prop:"email"},{default:n(()=>[o($,{placeholder:"Enter your email or uername",modelValue:s(t).email,"onUpdate:modelValue":l[0]||(l[0]=m=>s(t).email=m)},{prefix:n(()=>[me]),_:1},8,["modelValue"])]),_:1}),o(u,{label:"Password",prop:"password"},{default:n(()=>[o($,{placeholder:"Enter your password",type:"password",modelValue:s(t).password,"onUpdate:modelValue":l[1]||(l[1]=m=>s(t).password=m),"show-password":"",oncopy:"return false"},{prefix:n(()=>[fe]),_:1},8,["modelValue"])]),_:1}),o(u,{prop:"recaptcha_token"},{default:n(()=>[o(a,{onToUpdate:x,id:"login_recaptcha_token"})]),_:1}),o(_),e("div",he,[e("div",xe,[o(C,{modelValue:s(t).rememberPassword,"onUpdate:modelValue":l[2]||(l[2]=m=>s(t).rememberPassword=m)},null,8,["modelValue"]),ge]),e("div",{class:"flex flex-col items-center forgot_password",onClick:l[3]||(l[3]=m=>d("updateDisplay",!1))},ve)]),e("div",ye,[ke,e("span",$e,[o(g,{to:"/register"},{default:n(()=>[ee("Sign up")]),_:1})])])]),_:1},8,["model","rules"])]),e("div",Ee,[o(U,{type:"primary",loading:s(p),onClick:l[4]||(l[4]=m=>("throttle"in i?i.throttle:s(G))(()=>{c(s(r))})),style:{margin:"0",height:"100%",padding:"0","background-color":"transparent",border:"transparent",color:"#4E4A3C"},class:"w-full h-full flex items-center justify-center relative"},{default:n(()=>[Fe,Pe]),_:1},8,["loading"])])])}}});const Te=Z(Ce,[["__scopeId","data-v-9bcc3a9b"]]),je=(v,d,r)=>{const h=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!d||h.test(d))return r();r(new Error("Please enter a valid email address!"))},Ve={class:"w-full px-12 h-full flex flex-col items-center justify-center space-y-12"},Ue={class:"flex flex-col items-center space-y-1"},Ie=e("span",{class:"text-3xl font-normal text-[#FFE099]"},"Forgot Password",-1),De={class:"flex items-center justify-center space-x-3 mt-3"},Be=e("span",{class:"text-sm font-normal text-white"}," We will send a recovery link to this email ",-1),Le=e("span",{class:"iconfont icon-email text-[#FFE099] text-xl"},null,-1),Se={class:"w-[243px] h-12 absolute left-[118px] -bottom-[17px] z-10 cursor-pointer"},Ae=e("img",{src:B,alt:"",class:"absolute top-0 left-0 -z-10 w-full h-full object-cover"},null,-1),qe=e("span",{class:"text-base font-normal text-[#4E4A3C]"},"SEND",-1),Re={class:"w-full h-full flex flex-col items-center justify-center space-y-6"},ze=e("div",{class:"w-[266px] h-72"},[e("img",{src:K,alt:"",class:"w-full h-full"})],-1),Ne={class:"flex flex-col items-center space-y-1"},Oe=e("span",{class:"text-base font-normal text-[#FFE099]"}," Send successful ",-1),He={class:"text-sm font-normal text-white"},Me=e("img",{src:B,class:"w-full h-full object-cover"},null,-1),We=e("span",{class:"text-base font-normal text-[#4E4A3C] absolute z-10"}," BACK TO LOGIN ",-1),Ge=[Me,We],Je=I({__name:"ForgotPassWord",emits:["updateDisplay"],setup(v,{emit:d}){const r=b(),h=M(),t=b(!1),p=b(!1),F=D(),k=b(""),c=j({email:"",recaptcha_token:""}),x=b(!1),P=V(()=>!c.email||!c.recaptcha_token);V(()=>P.value?"/images/login/btn_no.png":"/images/login/btn_selected.png");const i=j({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"},{validator:je,trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),l=async a=>{await a.validate(async(_,C)=>{if(_)try{const g={email:c.email.trim(),recaptcha_token:c.recaptcha_token.trim()};x.value=!0;const w=await ne({...g});x.value=!1,w.code===200?(p.value=!0,k.value=w.data):(H.error(w.msg||w.detail.type.msg),u())}catch(g){console.log(g),x.value=!1,u()}})},$=a=>{c.recaptcha_token=a,r.value.clearValidate("recaptcha_token")},u=()=>{c.recaptcha_token="";const a=document.getElementById("forgot_password_recaptcha_token");a&&(a.innerHTML="",window.onloadTurnstileCallback())};return W(async()=>{F.clearUserInfo(),h.query.type==="forgotPassword"&&(t.value=!0)}),(a,_)=>{const C=q,g=R,w=N,U=z,m=O;return y(),E("div",Ve,[s(p)?(y(),E(L,{key:1},[e("div",Re,[ze,e("div",Ne,[Oe,e("span",He,le(s(k)),1)])]),e("div",{class:"w-[243px] h-12 absolute left-[118px] -bottom-[17px] z-10 cursor-pointer flex items-center justify-center",onClick:_[3]||(_[3]=T=>d("updateDisplay",!0))},Ge)],64)):(y(),E(L,{key:0},[e("div",Ue,[Ie,e("div",De,[Be,e("span",{class:"text-sm font-normal text-[#5CF3FF] cursor-pointer",onClick:_[0]||(_[0]=T=>d("updateDisplay",!0))}," Log in ")])]),o(U,{model:s(c),class:"w-full",ref_key:"ruleFormRef",ref:r,rules:s(i),"label-position":"top","hide-required-asterisk":""},{default:n(()=>[o(g,{label:"Email",prop:"email"},{default:n(()=>[o(C,{placeholder:"Enter your email",modelValue:s(c).email,"onUpdate:modelValue":_[1]||(_[1]=T=>s(c).email=T)},{prefix:n(()=>[Le]),_:1},8,["modelValue"])]),_:1}),o(g,{prop:"recaptcha_token",class:"mt-10"},{default:n(()=>[o(w,{onToUpdate:$,id:"forgot_password_recaptcha_token"})]),_:1})]),_:1},8,["model","rules"]),e("div",Se,[o(m,{type:"primary",loading:s(x),onClick:_[2]||(_[2]=T=>("throttle"in a?a.throttle:s(G))(()=>{l(s(r))})),style:{margin:"0",height:"100%",padding:"0","background-color":"transparent",border:"transparent",color:"#4E4A3C"},class:"w-full h-full flex items-center justify-center relative"},{default:n(()=>[Ae,qe]),_:1},8,["loading"])])],64))])}}}),Ke={class:"w-full h-screen pb-5"},Xe=e("img",{src:re,class:"w-full h-full fixed inset-0 object-cover -z-10"},null,-1),Qe={class:"w-full h-screen flex flex-col overflow-auto"},Ye=e("div",{class:"w-full h-12 text-base text-white font-normal px-5 flex items-center justify-between"},[e("img",{src:Y,alt:"",class:"w-52 h-16 mt-4"})],-1),Ze={class:"w-full flex-1 flex justify-end overflow-auto pr-32"},et={class:"w-[480px] h-[680px] relative sm:scale-50 md:scale-[0.7] xl:scale-[0.8] 2xl:scale-100"},tt=e("img",{src:ce,class:"w-full h-full absolute top-0 left-0 -z-10 object-left-top"},null,-1),ft=I({__name:"login",setup(v){const d=b(!0),r=M(),h=D(),t=p=>{d.value=p};return W(async()=>{h.clearUserInfo(),r.query.type==="forgotPassword"&&(d.value=!1)}),(p,F)=>{const k=Te,c=Je,x=ie;return y(),E("div",Ke,[o(x,null,{default:n(()=>[Xe,e("div",Qe,[Ye,e("div",Ze,[e("div",et,[tt,s(d)?(y(),S(k,{key:0,onUpdateDisplay:t})):(y(),S(c,{key:1,onUpdateDisplay:t}))])])])]),_:1})])}}});export{ft as default};
