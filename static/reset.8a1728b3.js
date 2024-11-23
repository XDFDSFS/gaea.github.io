import{_ as k,a as j}from"./logo.9c75a44a.js";import{E as A,_ as H,t as I}from"./throttle.b222e1dc.js";import{a as M,E as N}from"./el-checkbox.227d8c9d.js";import{c as S,E as U,a as $}from"./el-form.0b5c3d34.js";import{_ as Y}from"./client-only.4097edae.js";import{d as J,f as u,a as q,H as x,o as f,c as g,i as l,j as i,b as t,K as z,e as a,J as D,Y as G,E as p,ah as K,m as O}from"./entry.8027e681.js";import{c as Z}from"./passwords.46d2a945.js";import{u as Q}from"./user.18e685d3.js";import{e as W}from"./user.9fb62a56.js";import{_ as X}from"./bg-img.9764fc8f.js";import{C as v}from"./index.1735d320.js";import"./request.7dce2d74.js";const ee={class:"w-full h-screen pb-5 bg-black"},se=t("video",{src:X,muted:"",autoplay:"",loop:"",playsinline:"",class:"w-full h-full fixed inset-0 object-cover"},null,-1),te=t("img",{src:k,alt:"",class:"fixed top-8 left-8 w-52 h-16"},null,-1),oe={class:"w-full h-full flex justify-end items-center overflow-auto pr-32"},re={class:"w-[480px] h-fit px-8 pt-6 pb-13 space-y-8 sm:scale-50 md:scale-[0.7] xl:scale-[0.8] 2xl:scale-100 rounded-lg"},ae=t("div",{class:"flex items-center justify-center"},[t("img",{src:k,alt:"",class:"w-52 h-16"})],-1),ne={class:"w-full flex flex-col items-center justify-center space-y-1"},le=t("div",{class:"text-3xl font-normal text-[#FFE099]"},"Let's get start ",-1),ie={class:"flex items-center space-x-2"},ce=t("span",{class:"text-sm font-normal text-[#C6BFAA]"},"Reset your password",-1),de={class:"text-sm font-normal text-[#5CF3FF] cursor-pointer"},pe={class:"w-full flex-1"},_e=t("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1),ue={class:"set_checkbox_sty"},fe=t("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1),me=t("span",{class:"text-lg",style:{"letter-spacing":"0.1em"}},"Save",-1),Te=J({__name:"reset",emits:["update:closeDialog"],setup(we,{emit:he}){const m=u(),d=u(!1),c=u(S());q();const _=Q(),o=x({password_new:"",confirm_Password:"",checkList:[]}),b=x({password_new:[{validator:(r,e,s)=>{e===""?s(new Error("Please enter a valide password")):(o.checkList.length!==2&&s(new Error("Your password does not match")),s())},trigger:"blur"}],confirm_Password:[{validator:(r,e,s)=>{e===""?s(new Error("Please input the password again")):e!==o.password_new?s(new Error("Your password does not match")):s()},trigger:"blur"}]}),y=()=>{const{password_new:r}=o,e=Z(r);o.checkList=[],e.criteriaMet&&o.checkList.push(c==null?void 0:c.value[0]),e.lengthMet&&o.checkList.push(c==null?void 0:c.value[1])},E=r=>/^[A-Za-z0-9_-]+$/.test(r),F=r=>{const e=r.split(".");if(e.length!==3)return!1;for(const s of e)if(!E(s))return!1;return!0},P=async r=>{r&&await r.validate(async e=>{if(e)try{if(!_.getToken)return p.warning("Invalid link");if(!F(_.getToken))return p.warning("Parameter error");d.value=!0;const s=await W({token:_.getToken||"",password_new:v.SHA256(o.password_new).toString(v.enc.Hex)});d.value=!1,s&&s.code===200?(p.success(s.msg),K("/login")):p.error(s.msg)}catch(s){console.log(s),d.value=!1}})};return(r,e)=>{const s=j,w=A,C=N,B=M,h=U,L=$,V=H,R=Y;return f(),g("div",ee,[l(R,null,{default:i(()=>[se,te,t("div",oe,[t("div",re,[ae,t("div",ne,[le,t("div",ie,[ce,t("span",de,[l(s,{to:"/login"},{default:i(()=>[z("Log in")]),_:1})])])]),t("div",pe,[l(L,{model:a(o),class:"space-y-8",ref_key:"ruleFormRef",ref:m,rules:a(b),"label-position":"top","hide-required-asterisk":""},{default:i(()=>[l(h,{label:"Password",prop:"password_new",onInput:y},{default:i(()=>[l(w,{placeholder:"Enter your password",type:"password",modelValue:a(o).password_new,"onUpdate:modelValue":e[0]||(e[0]=n=>a(o).password_new=n),"show-password":"",oncopy:"return false"},{prefix:i(()=>[_e]),_:1},8,["modelValue"]),t("div",ue,[l(B,{modelValue:a(o).checkList,"onUpdate:modelValue":e[1]||(e[1]=n=>a(o).checkList=n)},{default:i(()=>[(f(!0),g(D,null,G(a(c),(n,T)=>(f(),O(C,{label:n,value:n,key:T},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),l(h,{label:"Confirm Password",prop:"confirm_Password"},{default:i(()=>[l(w,{placeholder:"Enter your password",type:"password",modelValue:a(o).confirm_Password,"onUpdate:modelValue":e[2]||(e[2]=n=>a(o).confirm_Password=n),"show-password":"",oncopy:"return false"},{prefix:i(()=>[fe]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),l(V,{style:{height:"45px"},round:!1,bg:"transparent",hoverBg:"transparent",border:"1px solid #ffffffaf",hoverColor:"#FFE099",hoverBgBorder:"1px solid #FFE099","btn-loading":a(d),disabled:a(d),title:"","hover-title":"",onClickHandle:e[3]||(e[3]=n=>("throttle"in r?r.throttle:a(I))(()=>{P(a(m))}))},{default:i(()=>[me]),_:1},8,["btn-loading","disabled"])])])]),_:1})])}}});export{Te as default};
