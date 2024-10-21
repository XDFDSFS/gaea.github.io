import{_ as Y,a as q}from"./logo.ec106598.js";import{E as N}from"./el-input.28fda3a4.js";import{C as F,E as J,a as $}from"./index.fafd129f.js";import{E as H,a as M}from"./el-checkbox.ea76bdf2.js";import{_ as G,a as O}from"./login-successful.796c277b.js";import{E as K}from"./el-button.1c27df59.js";import{d as W,r as h,u as X,H as Z,j as V,o as D,a as g,c as w,b as s,e as a,g as l,w as i,A as x,F as Q,v as ee,s as te,z as se,X as oe,Y as ae,Z as re,E as le,f as ne,V as ie,p as ce,l as de,m as ue}from"./entry.82295edf.js";import{c as me}from"./passwords.0c085804.js";import{c as pe}from"./dict.d5728e61.js";import{g as P}from"./utils.7b1ac4e5.js";import{a as fe,b as _e,_ as C}from"./bg-kuang.6549a564.js";import"./use-form-item.9b482fd6.js";import"./commonjsHelpers.faf16459.js";import"./-initCloneObject.26fc02c5.js";import"./isEqual.0f7785cd.js";const he=async p=>{try{const f=await(p==null?void 0:p.validate());return Promise.resolve(f)}catch(f){const _=document.getElementsByClassName("is-error");throw _.length>0&&_[0].scrollIntoView({block:"center",behavior:"smooth"}),f}},c=p=>(ce("data-v-0e17eb2c"),p=p(),de(),p),ge={class:"w-full h-screen pb-5"},xe=c(()=>s("img",{src:fe,class:"w-full h-full fixed inset-0 object-cover -z-10"},null,-1)),ve={class:"w-full h-full flex flex-col overflow-auto"},we=c(()=>s("div",{class:"w-full h-12 text-base text-white font-normal px-12 flex items-center justify-between"},[s("img",{src:q,alt:"",class:"w-52 h-16 mt-4"})],-1)),be={class:"w-full flex-1 flex justify-end overflow-auto pr-32"},Ee={class:"w-[480px] h-[690px] relative scale-[0.7] sm:scale-50 md:scale-[0.7] xl:scale-[0.8] 2xl:scale-100"},ye=c(()=>s("img",{src:_e,class:"w-full h-full absolute top-0 left-0 -z-10 object-left-top"},null,-1)),ke={key:0,class:"w-full h-full flex flex-col py-5"},Fe={class:"w-full h-[80px] mt-30 flex flex-col items-center justify-center"},Ve=c(()=>s("div",{class:"text-3xl font-normal text-[#FFE099]"},"Sign UP ",-1)),Pe={class:"flex items-center space-x-2"},Ce=c(()=>s("span",{class:"text-sm font-normal text-[#C6BFAA]"},"Alrady have an account?",-1)),Ue={class:"text-sm font-normal text-[#5CF3FF] cursor-pointer"},Ae={class:"w-full flex-1 px-12 pb-3 mt-14 overflow-hidden flex flex-col"},Le=c(()=>s("span",{class:"iconfont icon-email text-[#FFE099] text-xl"},null,-1)),Te=c(()=>s("span",{class:"iconfont icon--username text-[#FFE099] text-xl"},null,-1)),Ie=c(()=>s("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),Se={class:"set_checkbox_sty"},je=c(()=>s("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),Be=c(()=>s("span",{class:"iconfont icon-ico text-[#FFE099] text-xl"},null,-1)),ze={class:"text-opacity-80 text-xs"},Re={class:"w-[243px] h-11 absolute left-[118px] -bottom-4 z-10"},Ye=c(()=>s("img",{src:C,alt:"",class:"absolute top-0 left-0 -z-10 w-full h-full object-cover"},null,-1)),qe=c(()=>s("span",{class:"text-base font-normal text-[#4E4A3C]"},"Sign up",-1)),Ne={key:1,class:"w-full h-full flex flex-col items-center justify-center space-y-12"},Je=se('<div class="w-[266px] h-72" data-v-0e17eb2c><img src="'+O+'" alt="" class="w-full h-full" data-v-0e17eb2c></div><div class="flex flex-col items-center space-y-1" data-v-0e17eb2c><span class="text-base font-normal text-[#FFE099]" data-v-0e17eb2c> Registered Successfully </span><span class="text-sm font-normal text-white" data-v-0e17eb2c>Welcome to the GAEA</span></div>',2),$e={class:"w-[243px] h-11 absolute left-[118px] -bottom-4 z-10"},He=c(()=>s("img",{src:C,alt:"",class:"absolute top-0 left-0 -z-10 w-full h-full object-cover"},null,-1)),Me=c(()=>s("span",{class:"text-base font-normal text-[#4E4A3C]"},"BACK TO LOGIN",-1)),Ge=W({__name:"register",setup(p){const f=h(),_=h(!1),b=h(!1),v=h(!1),d=h(pe()),U=X(),A=Z(),t=V({email:"",password:"",uername:"",confirm_Password:"",referral_code:"",checkList:[],recaptcha_token:"",doYouAgree:!1}),L=V({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"},{validator:(r,e,o)=>{const u=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!e)return o();if(!u.test(e))return o(new Error("Please enter a valid email address!"));oe({email:e}).then(m=>{m.code===200?o():o(new Error(m.msg))}).catch(()=>{o(new Error("Request was aborted."))})},trigger:"blur"}],uername:[{required:!0,message:"Please enter a valide uername",trigger:"blur"},{min:6,message:"Length should be 6",trigger:"blur"},{validator:(r,e,o)=>{e?ae({username:e}).then(u=>{u.code===200?o():o(new Error(u.msg))}).catch(()=>{o(new Error)}):o()},trigger:"blur"}],password:[{validator:(r,e,o)=>{e===""?o(new Error("Please enter a valide password")):(t.checkList.length!==4&&o(new Error("Your password does not match")),o())},trigger:"blur"}],confirm_Password:[{validator:(r,e,o)=>{e===""?o(new Error("Please input the password again")):e!==t.password?o(new Error("Your password does not match")):o()},trigger:"blur"}],referral_code:[{required:!0,message:"Invalid referral code",trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),T=()=>{const{password:r}=t,e=me(r);t.checkList=[],e.lowercase&&t.checkList.push(d==null?void 0:d.value[0]),e.uppercase&&t.checkList.push(d==null?void 0:d.value[1]),e.special&&t.checkList.push(d==null?void 0:d.value[2]),e.characters&&t.checkList.push(d==null?void 0:d.value[3])},I=async r=>{try{if(!r)return;if(!t.doYouAgree){b.value=!0,setTimeout(()=>{b.value=!1},500);return}await he(r),v.value=!0;const e={email:t.email.trim(),username:t.uername.trim(),password:F.SHA256(t.password).toString(F.enc.Hex).trim(),referral_code:t.referral_code.trim(),recaptcha_token:t.recaptcha_token.trim()},o=await re({...e});v.value=!1,o.code===200?_.value=!0:(le.error(o.msg),E())}catch(e){console.log(e),v.value=!1,E()}},S=r=>{t.recaptcha_token=r,f.value.clearValidate("recaptcha_token")},E=()=>{t.recaptcha_token="";const r=document.getElementById("register_recaptcha_token");r&&(r.innerHTML="",window.onloadTurnstileCallback())};return D(()=>{t.referral_code=A.query.ref||"",U.clearUserInfo()}),(r,e)=>{const o=Y,u=N,m=J,y=H,j=M,B=G,z=$,k=K;return g(),w("div",ge,[xe,s("div",ve,[we,s("div",be,[s("div",Ee,[ye,a(_)?(g(),w("div",Ne,[Je,s("div",$e,[l(k,{type:"primary",onClick:e[8]||(e[8]=n=>("navigateTo"in r?r.navigateTo:a(ie))("/login")),style:{margin:"0",height:"100%",padding:"0","background-color":"transparent",border:"transparent",color:"#4E4A3C"},class:"w-full h-full flex items-center justify-center relative"},{default:i(()=>[He,Me]),_:1})])])):(g(),w("div",ke,[s("div",Fe,[Ve,s("div",Pe,[Ce,s("span",Ue,[l(o,{to:"/login"},{default:i(()=>[x("Log in")]),_:1})])])]),s("div",Ae,[l(z,{model:a(t),class:"w-full h-full overflow-auto space-y-7",ref_key:"ruleFormRef",ref:f,rules:a(L),"label-position":"top","hide-required-asterisk":""},{default:i(()=>[l(m,{label:"Email",prop:"email"},{default:i(()=>[l(u,{placeholder:"Enter your email",modelValue:a(t).email,"onUpdate:modelValue":e[0]||(e[0]=n=>a(t).email=n)},{prefix:i(()=>[Le]),_:1},8,["modelValue"])]),_:1}),l(m,{label:"Username",prop:"uername"},{default:i(()=>[l(u,{placeholder:"Enter your  uername",modelValue:a(t).uername,"onUpdate:modelValue":e[1]||(e[1]=n=>a(t).uername=n)},{prefix:i(()=>[Te]),_:1},8,["modelValue"])]),_:1}),l(m,{label:"Password",prop:"password",onInput:T},{default:i(()=>[l(u,{placeholder:"Enter your password",type:"password",modelValue:a(t).password,"onUpdate:modelValue":e[2]||(e[2]=n=>a(t).password=n),oncopy:"return false","show-password":""},{prefix:i(()=>[Ie]),_:1},8,["modelValue"]),s("div",Se,[l(j,{modelValue:a(t).checkList,"onUpdate:modelValue":e[3]||(e[3]=n=>a(t).checkList=n),class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6"},{default:i(()=>[(g(!0),w(Q,null,ee(a(d),(n,R)=>(g(),ne(y,{label:n,value:n,key:R},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),l(m,{label:"Confirm Password",prop:"confirm_Password"},{default:i(()=>[l(u,{placeholder:"Enter your password",type:"password",modelValue:a(t).confirm_Password,"onUpdate:modelValue":e[4]||(e[4]=n=>a(t).confirm_Password=n),"show-password":"",oncopy:"return false"},{prefix:i(()=>[je]),_:1},8,["modelValue"])]),_:1}),l(m,null,{default:i(()=>[l(u,{placeholder:"Enter Code",modelValue:a(t).referral_code,"onUpdate:modelValue":e[5]||(e[5]=n=>a(t).referral_code=n)},{prefix:i(()=>[Be]),_:1},8,["modelValue"])]),_:1}),l(m,{prop:"recaptcha_token",class:"mt-8 h-[68px]"},{default:i(()=>[l(B,{onToUpdate:S,id:"register_recaptcha_token"})]),_:1})]),_:1},8,["model","rules"]),s("div",{class:te(["flex items-center space-x-2 text-white",{shake:!a(t).doYouAgree&&a(b)}])},[l(y,{modelValue:a(t).doYouAgree,"onUpdate:modelValue":e[6]||(e[6]=n=>a(t).doYouAgree=n)},null,8,["modelValue"]),s("span",ze,[x(" I have read and agree to "),l(o,{class:"text-[#FFE099] underline underline-offset-4 cursor-pointer",to:`${("getJumpURL"in r?r.getJumpURL:a(P))()}/home?type=termsOfUse`,target:"_blank"},{default:i(()=>[x(" Terms ")]),_:1},8,["to"]),x(" and "),l(o,{class:"text-[#FFE099] underline underline-offset-4 cursor-pointer",to:`${("getJumpURL"in r?r.getJumpURL:a(P))()}/home?type=privacyPolicy`,target:"_blank"},{default:i(()=>[x(" Privacy Policy ")]),_:1},8,["to"])])],2)]),s("div",Re,[l(k,{type:"primary",loading:a(v),onClick:e[7]||(e[7]=n=>I(a(f))),style:{margin:"0",height:"100%",padding:"0","background-color":"transparent",border:"transparent",color:"#4E4A3C"},class:"w-full h-full flex items-center justify-center relative"},{default:i(()=>[Ye,qe]),_:1},8,["loading"])])]))])])])])}}});const mt=ue(Ge,[["__scopeId","data-v-0e17eb2c"]]);export{mt as default};