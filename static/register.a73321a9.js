import{_ as J,a as M,b as O}from"./Footer.vuevuetypescriptsetuptruelang.8583362b.js";import{a as G,E as H}from"./el-input.b0ebf7c2.js";import{E as W,a as z}from"./el-form.66fa2593.js";import{E as Q,a as X}from"./el-checkbox.c0fa87f7.js";import{_ as Z,a as ee}from"./OtherLoginOrRegist.vuevuetypescriptsetuptruelang.558557c4.js";import{d as te,r as _,a as se,W as $,f as oe,o as g,c as y,b as s,e as t,m as n,q as i,ai as w,F as re,C as ae,B as I,l as le,j as ne,a4 as b,E as ie,aj as ce,p as de,h as ue}from"./entry.8fd751a5.js";import{c as pe}from"./passwords.46d2a945.js";import{c as me}from"./dict.2ebd4a6f.js";import{u as fe}from"./user.fd0a50e1.js";import{v as _e,b as he,d as ge}from"./user.c4ffafd1.js";import{t as E}from"./throttle.3832cdac.js";import{g as A}from"./utils.aeaeec7c.js";import{_ as Ee}from"./freecompress-floor1-1.ea3150c2.js";import{C as R}from"./index.1735d320.js";import{_ as ve}from"./plugin-vueexport-helper.c27b6911.js";import"./el-loading.444290f0.js";import"./request.a73e4916.js";const xe=async m=>{try{const d=await(m==null?void 0:m.validate());return Promise.resolve(d)}catch(d){const v=document.getElementsByClassName("is-error");throw v.length>0&&v[0].scrollIntoView({block:"center",behavior:"smooth"}),d}},c=m=>(de("data-v-990777a4"),m=m(),ue(),m),we={class:"w-full overflow-auto bg-black"},ye={class:"w-full h-screen bg-black overflow-auto px-12 pb-6 pt-20 relative"},be=c(()=>s("img",{src:Ee,class:"w-[55%] h-[80vh] object-fill absolute right-16 top-1/2 -translate-y-1/2"},null,-1)),ke=c(()=>s("img",{src:O,alt:"",class:"w-full h-full object-contain"},null,-1)),Ve=[ke],Pe={class:"w-full h-full flex items-center"},De={class:"w-[480px] h-fit overflow-auto relative px-8 pt-6 pb-13"},Ce={key:0,class:"w-full h-full flex flex-col space-y-2"},Ue={class:"flex justify-between space-x-2 mb-6"},Le=c(()=>s("span",{class:"text-sm font-normal text-[#EDEDED]"},"Alrady have an account?",-1)),$e={class:"text-sm font-normal text-[#EDEDED] cursor-pointer flex items-center space-x-6"},Ie=c(()=>s("span",null," Login in",-1)),Ae=c(()=>s("div",{class:"w-6 h-6 rounded-full border bordder-[#EDEDED] hover:bg-[#EDEDED] hover:text-black flex items-center justify-center"},[s("span",{class:"iconfont icon-gengduo11"})],-1)),Re={class:"w-full h-[400px] pb-3 overflow-hidden flex flex-col"},Se=c(()=>s("div",{class:"flex items-center space-x-2"},[s("span",{class:"iconfont icon-email text-[#2E2E2E] text-xl"}),s("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),qe=c(()=>s("div",{class:"flex items-center space-x-2"},[s("span",{class:"iconfont icon--username text-[#2E2E2E] text-xl"}),s("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),je=c(()=>s("div",{class:"flex items-center space-x-2"},[s("span",{class:"iconfont icon-cfmpassword text-[#2E2E2E] text-xl"}),s("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),Be={class:"set_checkbox_sty text-[#2E2E2E]"},Fe=c(()=>s("div",{class:"flex items-center space-x-2"},[s("span",{class:"iconfont icon-cfmpassword text-[#2E2E2E] text-xl"}),s("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),Ke=c(()=>s("div",{class:"flex items-center space-x-2"},[s("span",{class:"iconfont icon-ico text-[#2E2E2E] text-xl"}),s("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),Te={class:"text-opacity-80 text-xs"},Ne={class:"w-full flex justify-center mb-6 mt-3"},Ye=c(()=>s("span",{class:"font-medium"}," Sign up",-1)),Je={key:1,class:"w-full h-full flex flex-col items-center justify-center space-y-12"},Me=c(()=>s("div",{class:"flex flex-col items-center space-y-1"},[s("span",{class:"text-base font-medium text-[#2E2E2E]"}," Registered Successfully "),s("span",{class:"text-sm text-[#EDEDED] font-medium"},"Welcome to the GAEA")],-1)),Oe=c(()=>s("span",{class:"font-medium"},"BACK TO LOGIN",-1)),Ge={class:"adaptation-padding pb-[80px]"},He=te({__name:"register",setup(m){const d=_(),v=_(!1),k=_(!1),x=_(!1),f=_(me()),V=fe(),P=se(),S=_(!0),D=_(0),o=$({email:"",password:"",uername:"",confirm_Password:"",referral_code:"",checkList:[],recaptcha_token:"",doYouAgree:!1}),q=$({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"},{validator:(r,e,a)=>{const u=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!e)return a();if(!u.test(e))return a(new Error("Please enter a valid email address!"));_e({email:e}).then(p=>{p.code===200&&p.success?a():a(new Error(p.msg))}).catch(()=>{a(new Error("Request was aborted."))})},trigger:"blur"}],uername:[{required:!0,message:"Please enter a valide uername",trigger:"blur"},{min:6,message:"Length should be 6",trigger:"blur"},{validator:(r,e,a)=>{e?he({username:e}).then(u=>{u.code===200?a():a(new Error(u.msg))}).catch(()=>{a(new Error)}):a()},trigger:"blur"}],password:[{validator:(r,e,a)=>{e===""?a(new Error("Please enter a valide password")):(o.checkList.length!==2&&a(new Error("Your password does not match")),a())},trigger:"blur"}],confirm_Password:[{validator:(r,e,a)=>{e===""?a(new Error("Please input the password again")):e!==o.password?a(new Error("Your password does not match")):a()},trigger:"blur"}],referral_code:[{required:!0,message:"Invalid referral code",trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),j=()=>{const{password:r}=o,e=pe(r);o.checkList=[],e.criteriaMet&&o.checkList.push(f==null?void 0:f.value[0]),e.lengthMet&&o.checkList.push(f==null?void 0:f.value[1])},C=()=>{D.value+=1},h=async r=>{o.recaptcha_token=window.grecaptcha.getResponse();try{if(!r)return;if(!o.doYouAgree){k.value=!0,setTimeout(()=>{k.value=!1},500);return}await xe(r),x.value=!0;const e={email:o.email.trim(),username:o.uername.trim(),password:R.SHA256(o.password).toString(R.enc.Hex).trim(),referral_code:o.referral_code.trim(),recaptcha_token:o.recaptcha_token.trim()},a=await ge({...e});x.value=!1,a&&a.code===200?v.value=!0:(ie.error(a.msg),C())}catch(e){console.log(e),x.value=!1,C()}};return oe(()=>{o.referral_code=P.query.ref||"",V.clearUserInfo(),V.setInvitationCode(P.query.ref)}),(r,e)=>{const a=J,u=G,p=W,U=Q,B=X,F=Z,K=z,L=H,T=ee,N=M;return g(),y("div",we,[s("div",ye,[be,s("div",{class:"w-40 h-10 cursor-pointer fixed top-5 left-5",onClick:e[0]||(e[0]=l=>r.$router.go(0))},Ve),s("div",Pe,[s("div",De,[t(v)?(g(),y("div",Je,[Me,n(L,{class:"w-full",style:{height:"44px"},color:"#EDEDED",round:"",loading:t(x),onClick:e[14]||(e[14]=l=>("navigateTo"in r?r.navigateTo:t(ce))("/login"))},{default:i(()=>[Oe]),_:1},8,["loading"])])):(g(),y("div",Ce,[s("div",Ue,[Le,s("span",$e,[Ie,n(a,{to:"/login"},{default:i(()=>[Ae]),_:1})])]),s("div",Re,[n(K,{model:t(o),class:"w-full h-full overflow-auto",ref_key:"ruleFormRef",ref:d,rules:t(q),"label-position":"top","hide-required-asterisk":""},{default:i(()=>[n(p,{prop:"email"},{default:i(()=>[n(u,{placeholder:"Enter your email",modelValue:t(o).email,"onUpdate:modelValue":e[1]||(e[1]=l=>t(o).email=l),onKeyup:e[2]||(e[2]=w(l=>("throttle"in r?r.throttle:t(E))(()=>{h(t(d))}),["enter","native"]))},{prefix:i(()=>[Se]),_:1},8,["modelValue"])]),_:1}),n(p,{prop:"uername"},{default:i(()=>[n(u,{placeholder:"Enter your  uername",modelValue:t(o).uername,"onUpdate:modelValue":e[3]||(e[3]=l=>t(o).uername=l),onKeyup:e[4]||(e[4]=w(l=>("throttle"in r?r.throttle:t(E))(()=>{h(t(d))}),["enter","native"]))},{prefix:i(()=>[qe]),_:1},8,["modelValue"])]),_:1}),n(p,{prop:"password",onInput:j},{default:i(()=>[n(u,{maxlength:50,placeholder:"Enter your password",type:"password",modelValue:t(o).password,"onUpdate:modelValue":e[5]||(e[5]=l=>t(o).password=l),onKeyup:e[6]||(e[6]=w(l=>("throttle"in r?r.throttle:t(E))(()=>{h(t(d))}),["enter","native"])),oncopy:"return false","show-password":""},{prefix:i(()=>[je]),_:1},8,["modelValue"]),s("div",Be,[n(B,{modelValue:t(o).checkList,"onUpdate:modelValue":e[7]||(e[7]=l=>t(o).checkList=l)},{default:i(()=>[(g(!0),y(re,null,ae(t(f),(l,Y)=>(g(),I(U,{label:l,value:l,key:Y},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),n(p,{prop:"confirm_Password"},{default:i(()=>[n(u,{maxlength:50,placeholder:"Enter your password",type:"password",onKeyup:e[8]||(e[8]=w(l=>("throttle"in r?r.throttle:t(E))(()=>{h(t(d))}),["enter","native"])),modelValue:t(o).confirm_Password,"onUpdate:modelValue":e[9]||(e[9]=l=>t(o).confirm_Password=l),"show-password":"",oncopy:"return false"},{prefix:i(()=>[Fe]),_:1},8,["modelValue"])]),_:1}),n(p,null,{default:i(()=>[n(u,{maxlength:20,placeholder:"Enter Code",modelValue:t(o).referral_code,"onUpdate:modelValue":e[10]||(e[10]=l=>t(o).referral_code=l),onKeyup:e[11]||(e[11]=w(l=>("throttle"in r?r.throttle:t(E))(()=>{h(t(d))}),["enter","native"]))},{prefix:i(()=>[Ke]),_:1},8,["modelValue"])]),_:1}),n(p,{prop:"recaptcha_token",class:"mt-3 h-[68px]"},{default:i(()=>[t(S)?(g(),I(F,{ref:"recaptcha",key:t(D)})):le("",!0)]),_:1})]),_:1},8,["model","rules"]),s("div",{class:ne(["flex items-center space-x-2 text-[#2E2E2E] set_checkbox_sty px-2",{shake:!t(o).doYouAgree&&t(k)}])},[n(U,{modelValue:t(o).doYouAgree,"onUpdate:modelValue":e[12]||(e[12]=l=>t(o).doYouAgree=l)},null,8,["modelValue"]),s("span",Te,[b(" I have read and agree to "),n(a,{class:"underline underline-offset-4 cursor-pointer",to:`${("getJumpURL"in r?r.getJumpURL:t(A))()}/home?type=termsOfUse`,target:"_blank"},{default:i(()=>[b(" Terms ")]),_:1},8,["to"]),b(" and "),n(a,{class:"underline underline-offset-4 cursor-pointer",to:`${("getJumpURL"in r?r.getJumpURL:t(A))()}/home?type=privacyPolicy`,target:"_blank"},{default:i(()=>[b(" Privacy Policy ")]),_:1},8,["to"])])],2)]),s("div",Ne,[n(L,{class:"w-2/3",style:{height:"44px"},color:"#EDEDED",round:"",onClick:e[13]||(e[13]=l=>("throttle"in r?r.throttle:t(E))(()=>{h(t(d))})),loading:t(x)},{default:i(()=>[Ye]),_:1},8,["loading"])]),n(T)]))])])]),s("div",Ge,[n(N)])])}}});const ht=ve(He,[["__scopeId","data-v-990777a4"]]);export{ht as default};
