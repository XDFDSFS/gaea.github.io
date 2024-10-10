import{E as A}from"./el-input.f12a9e47.js";import{C as B,d as J,E as q,a as N,f as K}from"./index.1c7aad60.js";import{_ as z,a as Q}from"./login-successful.87fe156c.js";import{E as X}from"./el-checkbox.54454a83.js";import{_ as Y,a as Z}from"./logo.514d2244.js";import{t as R,E as H}from"./throttle.2a048ab9.js";import{d as U,r as b,h as V,k as j,a as y,c as E,b as e,f as o,w as n,u as s,x as ee,N as te,E as M,p as se,i as oe,j as ae,B as O,o as W,F as L,t as le,e as S}from"./entry.edd7252b.js";import{u as I}from"./user.91b3fc39.js";import{_ as D,a as ne,b as re}from"./bg-kuang.734db4b0.js";import{_ as ce}from"./client-only.562f2b49.js";import"./use-form-item.466063ef.js";import"./-initCloneObject.cf8c15d7.js";import"./dict.898c6748.js";import"./utils.0177354c.js";import"./isEqual.e8c2c707.js";const ie=""+globalThis.__publicAssetsURL("images/login/leaf.png"),f=v=>(se("data-v-d5db03bb"),v=v(),oe(),v),de={class:"w-full h-full flex flex-col py-5"},pe=f(()=>e("div",{class:"w-full h-[80px] mt-32 flex flex-col items-center justify-center"},[e("div",{class:"text-3xl font-normal text-[#FFE099]"},"Let's get start "),e("div",{class:"text-sm font-normal text-[#C6BFAA]"},"Log in your account")],-1)),_e={class:"w-full flex-1 px-12 mt-8"},ue=f(()=>e("span",{class:"iconfont icon-email text-[#FFE099] text-xl"},null,-1)),me=f(()=>e("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),fe={class:"flex items-center justify-between text-white text-opacity-80 font-normal"},he={class:"flex items-center space-x-2"},xe=f(()=>e("span",{class:"text-[12px]"},"Rememebr me",-1)),ge=f(()=>e("span",{class:"duration-300 cursor-pointer text-[12px] show_spw"}," Forgot Password ? ",-1)),we=f(()=>e("img",{src:ie,class:"w-14 h-2 tig opacity-0 duration-300"},null,-1)),be=[ge,we],ve={class:"flex items-center justify-center space-x-3 mt-3"},ye=f(()=>e("span",{class:"text-white"},"Don't have an account?",-1)),ke={class:"text-[#5CF3FF] cursor-pointer"},$e={class:"w-[243px] h-12 absolute left-[118px] -bottom-[17px] z-10 cursor-pointer"},Ee=f(()=>e("img",{src:D,alt:"",class:"absolute top-0 left-0 -z-10 w-full h-full object-cover"},null,-1)),Fe=f(()=>e("span",{class:"text-base font-normal text-[#4E4A3C]"},"CONTINUE",-1)),Pe=U({__name:"Index",emits:["updateDisplay"],setup(v,{emit:p}){const r=b(),h=I(),t=V({email:"",password:"",rememberPassword:!1,recaptcha_token:""}),_=b(!1),F=j(()=>!t.email||!t.password||!t.recaptcha_token);j(()=>F.value?"/images/login/btn_no.png":"/images/login/btn_selected.png");const k=V({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"}],password:[{required:!0,message:"Please enter a valide password",trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),c=async i=>{i&&await i.validate(async(l,$)=>{if(l)try{_.value=!0;const u={username:t.email.trim(),password:B.SHA256(t.password).toString(B.enc.Hex).trim(),remember_me:t.rememberPassword,recaptcha_token:t.recaptcha_token.trim()},a=await J({...u});_.value=!1,a.code===200?(h.setToken(a.data.token),h.setUserInfo(a.data.user_info),te("/dashboard")):(M.error(a.msg),P())}catch(u){console.log(u),_.value=!1,P()}})},x=i=>{t.recaptcha_token=i,r.value.clearValidate("recaptcha_token")},P=()=>{t.recaptcha_token="";const i=document.getElementById("login_recaptcha_token");i&&(i.innerHTML="",window.onloadTurnstileCallback())};return(i,l)=>{const $=A,u=q,a=z,d=X,C=Y,g=N,w=H;return y(),E("div",de,[pe,e("div",_e,[o(g,{model:s(t),class:"",ref_key:"ruleFormRef",ref:r,rules:s(k),"label-position":"top","hide-required-asterisk":""},{default:n(()=>[o(u,{label:"Email or Uername",prop:"email"},{default:n(()=>[o($,{placeholder:"Enter your email or uername",modelValue:s(t).email,"onUpdate:modelValue":l[0]||(l[0]=m=>s(t).email=m)},{prefix:n(()=>[ue]),_:1},8,["modelValue"])]),_:1}),o(u,{label:"Password",prop:"password",class:"mt-8"},{default:n(()=>[o($,{placeholder:"Enter your password",type:"password",modelValue:s(t).password,"onUpdate:modelValue":l[1]||(l[1]=m=>s(t).password=m),"show-password":""},{prefix:n(()=>[me]),_:1},8,["modelValue"])]),_:1}),o(u,{prop:"recaptcha_token",class:"mt-8"},{default:n(()=>[o(a,{onToUpdate:x,id:"login_recaptcha_token"})]),_:1}),e("div",fe,[e("div",he,[o(d,{modelValue:s(t).rememberPassword,"onUpdate:modelValue":l[2]||(l[2]=m=>s(t).rememberPassword=m)},null,8,["modelValue"]),xe]),e("div",{class:"flex flex-col items-center forgot_password",onClick:l[3]||(l[3]=m=>p("updateDisplay",!1))},be)]),e("div",ve,[ye,e("span",ke,[o(C,{to:"/register"},{default:n(()=>[ee("Sign up")]),_:1})])])]),_:1},8,["model","rules"])]),e("div",$e,[o(w,{type:"primary",loading:s(_),onClick:l[4]||(l[4]=m=>("throttle"in i?i.throttle:s(R))(()=>{c(s(r))})),style:{margin:"0",height:"100%",padding:"0","background-color":"transparent",border:"transparent",color:"#4E4A3C"},class:"w-full h-full flex items-center justify-center relative"},{default:n(()=>[Ee,Fe]),_:1},8,["loading"])])])}}});const Ce=ae(Pe,[["__scopeId","data-v-d5db03bb"]]),Te=(v,p,r)=>{const h=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!p||h.test(p))return r();r(new Error("Please enter a valid email address!"))},Ve={class:"w-full px-12 h-full flex flex-col items-center justify-center space-y-12"},je={class:"flex flex-col items-center space-y-1"},Ue=e("span",{class:"text-3xl font-normal text-[#FFE099]"},"Forgot Password",-1),Ie={class:"flex items-center justify-center space-x-3 mt-3"},De=e("span",{class:"text-sm font-normal text-white"}," We will send a recovery link to this email ",-1),Be=e("span",{class:"iconfont icon-email text-[#FFE099] text-xl"},null,-1),Le={class:"w-[243px] h-12 absolute left-[118px] -bottom-[17px] z-10 cursor-pointer"},Se=e("img",{src:D,alt:"",class:"absolute top-0 left-0 -z-10 w-full h-full object-cover"},null,-1),Ae=e("span",{class:"text-base font-normal text-[#4E4A3C]"},"SEND",-1),qe={class:"w-full h-full flex flex-col items-center justify-center space-y-6"},Ne=e("div",{class:"w-[266px] h-72"},[e("img",{src:Q,alt:"",class:"w-full h-full"})],-1),ze={class:"flex flex-col items-center space-y-1"},Re=e("span",{class:"text-base font-normal text-[#FFE099]"}," Send successful ",-1),He={class:"text-sm font-normal text-white"},Me=e("img",{src:D,class:"w-full h-full object-cover"},null,-1),Oe=e("span",{class:"text-base font-normal text-[#4E4A3C] absolute z-10"}," BACK TO LOGIN ",-1),We=[Me,Oe],Ge=U({__name:"ForgotPassWord",emits:["updateDisplay"],setup(v,{emit:p}){const r=b(),h=O(),t=b(!1),_=b(!1),F=I(),k=b(""),c=V({email:"",recaptcha_token:""}),x=b(!1),P=j(()=>!c.email||!c.recaptcha_token);j(()=>P.value?"/images/login/btn_no.png":"/images/login/btn_selected.png");const i=V({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"},{validator:Te,trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),l=async a=>{await a.validate(async(d,C)=>{if(d)try{const g={email:c.email.trim(),recaptcha_token:c.recaptcha_token.trim()};x.value=!0;const w=await K({...g});x.value=!1,w.code===200?(_.value=!0,k.value=w.data):(M.error(w.msg||w.detail.type.msg),u())}catch(g){console.log(g),x.value=!1,u()}})},$=a=>{c.recaptcha_token=a,r.value.clearValidate("recaptcha_token")},u=()=>{c.recaptcha_token="";const a=document.getElementById("forgot_password_recaptcha_token");a&&(a.innerHTML="",window.onloadTurnstileCallback())};return W(async()=>{F.clearUserInfo(),h.query.type==="forgotPassword"&&(t.value=!0)}),(a,d)=>{const C=A,g=q,w=z,m=N,G=H;return y(),E("div",Ve,[s(_)?(y(),E(L,{key:1},[e("div",qe,[Ne,e("div",ze,[Re,e("span",He,le(s(k)),1)])]),e("div",{class:"w-[243px] h-12 absolute left-[118px] -bottom-[17px] z-10 cursor-pointer flex items-center justify-center",onClick:d[3]||(d[3]=T=>p("updateDisplay",!0))},We)],64)):(y(),E(L,{key:0},[e("div",je,[Ue,e("div",Ie,[De,e("span",{class:"text-sm font-normal text-[#5CF3FF] cursor-pointer",onClick:d[0]||(d[0]=T=>p("updateDisplay",!0))}," Log in ")])]),o(m,{model:s(c),class:"w-full",ref_key:"ruleFormRef",ref:r,rules:s(i),"label-position":"top","hide-required-asterisk":""},{default:n(()=>[o(g,{label:"Email",prop:"email"},{default:n(()=>[o(C,{placeholder:"Enter your email",modelValue:s(c).email,"onUpdate:modelValue":d[1]||(d[1]=T=>s(c).email=T)},{prefix:n(()=>[Be]),_:1},8,["modelValue"])]),_:1}),o(g,{prop:"recaptcha_token",class:"mt-10"},{default:n(()=>[o(w,{onToUpdate:$,id:"forgot_password_recaptcha_token"})]),_:1})]),_:1},8,["model","rules"]),e("div",Le,[o(G,{type:"primary",loading:s(x),onClick:d[2]||(d[2]=T=>("throttle"in a?a.throttle:s(R))(()=>{l(s(r))})),style:{margin:"0",height:"100%",padding:"0","background-color":"transparent",border:"transparent",color:"#4E4A3C"},class:"w-full h-full flex items-center justify-center relative"},{default:n(()=>[Se,Ae]),_:1},8,["loading"])])],64))])}}}),Je={class:"w-full h-screen pb-5"},Ke=e("img",{src:ne,class:"w-full h-full fixed inset-0 object-cover -z-10"},null,-1),Qe={class:"w-full h-screen flex flex-col overflow-auto"},Xe=e("div",{class:"w-full h-12 text-base text-white font-normal px-5 flex items-center justify-between"},[e("img",{src:Z,alt:"",class:"w-52 h-16 mt-4"})],-1),Ye={class:"w-full flex-1 flex justify-end overflow-auto pr-32"},Ze={class:"w-[480px] h-[680px] relative sm:scale-50 md:scale-[0.7] xl:scale-[0.8] 2xl:scale-100"},et=e("img",{src:re,class:"w-full h-full absolute top-0 left-0 -z-10 object-left-top"},null,-1),ht=U({__name:"login",setup(v){const p=b(!0),r=O(),h=I(),t=_=>{p.value=_};return W(async()=>{h.clearUserInfo(),r.query.type==="forgotPassword"&&(p.value=!1)}),(_,F)=>{const k=Ce,c=Ge,x=ce;return y(),E("div",Je,[o(x,null,{default:n(()=>[Ke,e("div",Qe,[Xe,e("div",Ye,[e("div",Ze,[et,s(p)?(y(),S(k,{key:0,onUpdateDisplay:t})):(y(),S(c,{key:1,onUpdateDisplay:t}))])])])]),_:1})])}}});export{ht as default};
