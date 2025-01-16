import{E as U,a as q,b as R}from"./el-form.6860e615.js";import{E as H}from"./el-checkbox.44f4ace0.js";import{_ as B,a as W}from"./OtherLoginOrRegist.vuevuetypescriptsetuptruelang.9e376ab6.js";import{E as z}from"./el-button.5908491f.js";import{_ as G,a as J,b as X}from"./Footer.vuevuetypescriptsetuptruelang.f2b4386c.js";import{d as S,r as u,X as T,o as g,c as $,b as e,m as n,q as c,e as t,aj as C,D as Q,O as N,ak as Y,E as O,p as Z,h as ee,i as te,a as A,f as K,F as j,t as se,B as I}from"./entry.b8636d5f.js";import{u as oe}from"./user.8cfe7a63.js";import{b as ae,f as ne}from"./user.af534cb3.js";import{t as k}from"./throttle.3832cdac.js";import{C as L}from"./index.2d9eff2e.js";import{c as le}from"./verification.64b14b7b.js";import{c as M}from"./request.124f1f34.js";import{_ as re}from"./client-only.2f64c806.js";import{_ as ie}from"./freecompress-floor1-1.1a1dab33.js";import"./event.ed2678b4.js";import"./utils.b9cfd8d4.js";import"./el-loading.2ba434bb.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";import"./godhood.7b4e004c.js";const v=E=>(Z("data-v-9e364d3e"),E=E(),ee(),E),ce={class:"w-full h-full flex flex-col items-center justify-center Regular"},de=v(()=>e("div",{class:"w-full flex flex-col py-2 z-[999]"},[e("div",{class:"text-[48px] font-bold text-[#EDEDED] uppercase"},"Let's get start "),e("div",{class:"text-lg font-light text-[#EDEDED] uppercase"},"Log in your account")],-1)),pe={class:"w-full mt-4"},ue=v(()=>e("div",{class:"flex items-center space-x-2"},[e("span",{class:"iconfont icon-email text-[#EDEDED] text-xl"}),e("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),me=v(()=>e("div",{class:"flex items-center space-x-2"},[e("span",{class:"iconfont icon-cfmpassword text-[#EDEDED] text-xl"}),e("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),_e={class:"flex items-center justify-between text-white text-opacity-80 font-normal mb-6"},fe={class:"flex items-center space-x-2 set_checkbox_sty text-[#2E2E2E] hover:text-[#EDEDED]"},xe=v(()=>e("span",{class:"text-[12px]"},"Remember me",-1)),he=v(()=>e("span",{class:"duration-300 cursor-pointer text-[12px] text-[#2E2E2E] hover:text-[#EDEDED]"}," Forgot Password ? ",-1)),ge=[he],ve={class:"w-full flex justify-center px-12 mb-2 mt-4"},Ee=v(()=>e("span",{class:"text-black Regular font-semibold text-[14px] uppercase"}," Login",-1)),we={class:"flex items-center justify-center space-x-3 mb-6 text-[12px]"},ye=v(()=>e("span",{class:"text-[#8F8F8F] z-[999]"},"Don't have an account?",-1)),be={class:"text-[#EDEDED] cursor-pointer z-[999]"},De=S({__name:"Index",emits:["updateDisplay"],setup(E,{emit:x}){const p=u();u(!0),u(0);const w=oe(),l=T({email:"",password:"",rememberPassword:!1,recaptcha_token:""}),m=u(!1),y=T({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"}],password:[{required:!0,message:"Please enter a valide password",trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),d=async o=>{o&&(m.value||await o.validate(async(a,D)=>{if(a)try{m.value=!0;const r={username:l.email.trim(),password:L.SHA256(l.password).toString(L.enc.Hex).trim(),remember_me:l.rememberPassword,recaptcha_token:l.recaptcha_token.trim()},s=await ae({...r});s&&s.code===200?(w.setToken(s.data.token),Y("/dashboard")):(O.error(s.msg),b())}catch{b()}finally{m.value=!1}}))},_=o=>{l.recaptcha_token=o,p.value.clearValidate("recaptcha_token")},b=()=>{l.recaptcha_token="";const o=document.getElementById("login_recaptcha_token");o&&(o.innerHTML="",window.onloadTurnstileCallback())};return(o,a)=>{const D=U,r=q,s=H,P=B,h=z,f=G,V=W,F=R;return g(),$("div",ce,[de,e("div",pe,[n(F,{model:t(l),class:"",ref_key:"ruleFormRef",ref:p,rules:t(y),"label-position":"top","hide-required-asterisk":"",onSubmit:a[7]||(a[7]=N(i=>("throttle"in o?o.throttle:t(k))(()=>{d(t(p))}),["prevent"]))},{default:c(()=>[n(r,{label:"Email or username",prop:"email"},{default:c(()=>[n(D,{placeholder:"Enter your email or username",maxlength:50,modelValue:t(l).email,"onUpdate:modelValue":a[0]||(a[0]=i=>t(l).email=i),onKeyup:a[1]||(a[1]=C(i=>("throttle"in o?o.throttle:t(k))(()=>{d(t(p))}),["enter","native"]))},{prefix:c(()=>[ue]),_:1},8,["modelValue"])]),_:1}),n(r,{label:"Password",prop:"password"},{default:c(()=>[n(D,{placeholder:"Enter your password",maxlength:50,type:"password",modelValue:t(l).password,"onUpdate:modelValue":a[2]||(a[2]=i=>t(l).password=i),"show-password":"",onKeyup:a[3]||(a[3]=C(i=>("throttle"in o?o.throttle:t(k))(()=>{d(t(p))}),["enter","native"])),oncopy:"return false"},{prefix:c(()=>[me]),_:1},8,["modelValue"])]),_:1}),e("div",_e,[e("div",fe,[n(s,{modelValue:t(l).rememberPassword,"onUpdate:modelValue":a[4]||(a[4]=i=>t(l).rememberPassword=i)},null,8,["modelValue"]),xe]),e("div",{class:"flex flex-col items-center",onClick:a[5]||(a[5]=i=>x("updateDisplay",!1))},ge)]),n(r,{prop:"recaptcha_token"},{default:c(()=>[n(P,{onToUpdate:_,id:"login_recaptcha_token",class:"mt-2"})]),_:1}),e("div",ve,[n(h,{class:"w-full z-[999]",style:{height:"44px"},color:"#EDEDED",round:"",loading:t(m),onClick:a[6]||(a[6]=i=>("throttle"in o?o.throttle:t(k))(()=>{d(t(p))}))},{default:c(()=>[Ee]),_:1},8,["loading"])]),e("div",we,[ye,e("span",be,[n(f,{to:"/register"},{default:c(()=>[Q("Sign up")]),_:1})])]),n(V)]),_:1},8,["model","rules"])])])}}});const ke=te(De,[["__scopeId","data-v-9e364d3e"]]),$e={class:"w-full h-full flex flex-col items-center justify-center space-y-6 Regular"},Pe={class:"w-full flex items-center justify-between space-x-2"},Fe=e("span",{class:"text-sm font-normal text-[#EDEDED]"},"Forgot Password",-1),Te={class:"text-sm font-normal text-[#EDEDED] cursor-pointer flex items-center space-x-6"},Ve=e("span",null," Login in",-1),Ce=e("span",{class:"iconfont icon-gengduo11"},null,-1),Se=[Ce],je=e("div",{class:"flex items-center space-x-2 text-[#666666]"},[e("span",{class:"iconfont icon-email text-base"}),e("span",{class:"w-[1px] h-[18px] bg-[#666666]"})],-1),Ie=e("span",{class:"text-sm font-normal text-[#7A7A7A]"}," We will send a recovery link to this email ",-1),Le={class:"w-full flex justify-center px-12 mb-2 mt-4"},Ue=e("span",{class:"font-medium"},"SEND",-1),qe={class:"w-[300px] flex flex-col items-center justify-center space-y-6"},Re={class:"flex flex-col items-center space-y-1 z-[99]"},Be=e("span",{class:"text-[24px] font-normal text-[#EDEDED]"}," Send successful ",-1),ze={class:"text-sm font-normal text-white"},Ne=e("span",{class:"font-medium"},"BACK TO LOGIN",-1),Oe=S({__name:"ForgotPassWord",emits:["updateDisplay"],setup(E,{emit:x}){const p=u(),w=A(),l=u(!1),m=u(!1);u(!0),u(0);const y=u(""),d=T({email:"",recaptcha_token:""}),_=u(!1),b=T({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"},{validator:le,trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),o=async r=>{r&&await r.validate(async(s,P)=>{if(s){if(_.value)return;try{const h={email:d.email.trim(),recaptcha_token:d.recaptcha_token.trim()};_.value=!0;const f=await ne({...h});_.value=!1,f&&f.code===200?(m.value=!0,y.value=f.data):(O.error(f.msg||f.detail.type.msg),D())}catch{_.value=!1,D()}}})},a=r=>{d.recaptcha_token=r,p.value.clearValidate("recaptcha_token")},D=()=>{d.recaptcha_token="";const r=document.getElementById("forgot_password_recaptcha_token");r&&(r.innerHTML="",window.onloadTurnstileCallback())};return K(async()=>{M(),w.query.type==="forgotPassword"&&(l.value=!0)}),(r,s)=>{const P=U,h=q,f=B,V=R,F=z;return g(),$("div",$e,[t(m)?(g(),$(j,{key:1},[e("div",qe,[e("div",Re,[Be,e("span",ze,se(t(y)),1)])]),n(F,{class:"w-fit z-[99]",style:{height:"44px"},color:"#EDEDED",round:"",loading:t(_),onClick:s[5]||(s[5]=i=>x("updateDisplay",!0))},{default:c(()=>[Ne]),_:1},8,["loading"])],64)):(g(),$(j,{key:0},[e("div",Pe,[Fe,e("span",Te,[Ve,e("div",{onClick:s[0]||(s[0]=i=>x("updateDisplay",!0)),class:"w-6 h-6 rounded-full border bordder-[#EDEDED] hover:bg-[#EDEDED] hover:text-black flex items-center justify-center"},Se)])]),n(V,{onSubmit:s[3]||(s[3]=N(()=>{},["prevent"])),model:t(d),class:"w-full",ref_key:"ruleFormRef",ref:p,rules:t(b),"label-position":"top","hide-required-asterisk":""},{default:c(()=>[n(h,{label:"Email",prop:"email"},{default:c(()=>[n(P,{placeholder:"Enter your email",modelValue:t(d).email,"onUpdate:modelValue":s[1]||(s[1]=i=>t(d).email=i),onKeyup:s[2]||(s[2]=C(i=>("throttle"in r?r.throttle:t(k))(()=>{o(t(p))}),["enter","native"]))},{prefix:c(()=>[je]),_:1},8,["modelValue"])]),_:1}),Ie,n(h,{prop:"recaptcha_token",class:"mt-10"},{default:c(()=>[n(f,{onToUpdate:a,id:"forgot_password_recaptcha_token"})]),_:1})]),_:1},8,["model","rules"]),e("div",Le,[n(F,{class:"w-full",style:{height:"44px"},color:"#EDEDED",round:"",loading:t(_),onClick:s[4]||(s[4]=i=>("throttle"in r?r.throttle:t(k))(()=>{o(t(p))}))},{default:c(()=>[Ue]),_:1},8,["loading"])])],64))])}}}),Ae={class:"w-full overflow-auto bg-black"},Ke={class:"w-full h-screen bg-black flex flex-col overflow-auto px-12 pb-6 pt-20 relative"},Me=e("img",{src:ie,class:"w-[55%] h-[80vh] object-fill absolute right-16 top-1/2 -translate-y-1/2 z-[1]"},null,-1),He=e("img",{src:X,alt:"",class:"w-full h-full object-contain"},null,-1),We=[He],Ge={class:"w-full flex-1 flex items-center justify-between overflow-auto relative z-[9999]"},Je={class:"px-8 h-full rounded-lg"},Xe={class:"adaptation-padding pb-[80px]"},xt=S({__name:"login",setup(E){const x=u(!0),p=A(),w=l=>{x.value=l};return K(async()=>{M(),localStorage.removeItem("np_token"),p.query.type==="forgotPassword"&&(x.value=!1)}),(l,m)=>{const y=ke,d=Oe,_=re,b=J;return g(),$("div",Ae,[e("div",Ke,[Me,e("div",{class:"w-40 h-10 cursor-pointer fixed top-5 left-5",onClick:m[0]||(m[0]=o=>l.$router.go(0))},We),n(_,null,{default:c(()=>[e("div",Ge,[e("div",Je,[t(x)?(g(),I(y,{key:0,onUpdateDisplay:w})):(g(),I(d,{key:1,onUpdateDisplay:w}))])])]),_:1})]),e("div",Xe,[n(b)])])}}});export{xt as default};