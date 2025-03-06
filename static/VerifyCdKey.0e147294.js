import{E as B}from"./el-input.381899f3.js";import{E as F,a as I}from"./el-form.8e3257f8.js";import{E as K}from"./el-button.ab67310a.js";import{E as R}from"./el-overlay.87ec9577.js";import{_ as L}from"./client-only.09abea6d.js";import{d as S,u as j,r as u,K as _,o as q,B as N,m as l,l as r,b as t,e as a,E as f,p as $,h as z}from"./entry.2548f2a2.js";import{u as G}from"./godhood.c23ffbf9.js";import{n as H,h as M}from"./godhead.9db5f6fd.js";import{_ as P}from"./plugin-vueexport-helper.c27b6911.js";import"./event.0b4bd4dd.js";import"./focus-trap.ca4bfd80.js";import"./ethers.25604e58.js";import"./user.c5c80964.js";import"./verification.856d912b.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";import"./request.2b8ecaef.js";const y=n=>($("data-v-f6579a66"),n=n(),z(),n),U={class:"max-h-[90vh] overflow-hidden flex flex-col"},A=y(()=>t("div",{class:"flex items-center justify-between px-5"},[t("span",{class:"text-base font-normal text-white"},"Redeem CDkey")],-1)),J={class:"w-full flex-1 px-5 pb-5 mt-5"},O={class:"flex justify-center"},Q=y(()=>t("span",{class:"text-black Regular font-semibold text-[14px]"},"Redeem",-1)),T=S({__name:"VerifyCdKey",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog","update:success"],setup(n,{emit:g}){const x=G();j();const d=u(),i=u(!1),c=_({cdkey:""}),h=_({cdkey:[{required:!0,message:"Enter your CDkey",trigger:"blur"}]}),p=()=>{b(d.value),g("update:closeDialog")},b=e=>{e&&e.resetFields()},E=async e=>{e&&await e.validate(async s=>{if(s)try{i.value=!0;const o=await H({cdkey:c.cdkey.trim()});i.value=!1,o&&o.code===200?(v(),f.success(o.msg)):f.error(o.msg)}catch(o){console.log(o),i.value=!1}})},v=async()=>{try{const e=await M();e&&e.code===200&&x.setBlindboxList(e.data)}catch(e){console.log(e)}};return(e,s)=>{const o=B,k=F,D=K,w=I,C=R,V=L;return q(),N(V,null,{default:l(()=>[r(C,{class:"relative z-[99]","destroy-on-close":"",draggable:"","model-value":e.$props.dialogVisible,"show-close":!1,width:"500px",style:{background:"black","border-radius":"10px","padding-bottom":"18px",border:"1px solid #EDEDED"},"align-center":"",onClose:p},{default:l(()=>[t("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:p}),t("div",U,[A,t("div",J,[r(w,{model:a(c),class:"space-y-4",ref_key:"ruleFormRef",ref:d,rules:a(h),"label-position":"top","hide-required-asterisk":""},{default:l(()=>[r(k,{label:"",prop:"cdkey"},{default:l(()=>[r(o,{style:{height:"35px"},placeholder:"Enter your CDkey",modelValue:a(c).cdkey,"onUpdate:modelValue":s[0]||(s[0]=m=>a(c).cdkey=m)},null,8,["modelValue"])]),_:1}),t("div",O,[r(D,{color:"#EDEDED",round:"",class:"w-1/2 h-full mt-4",onClick:s[1]||(s[1]=m=>E(a(d))),loading:a(i)},{default:l(()=>[Q]),_:1},8,["loading"])])]),_:1},8,["model","rules"])])])]),_:1},8,["model-value"])]),_:1})}}});const me=P(T,[["__scopeId","data-v-f6579a66"]]);export{me as default};
