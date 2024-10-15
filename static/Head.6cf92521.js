import{_ as L,a as M,b as S,E as Y}from"./white-discord.f89d835b.js";import{_ as j}from"./Btn.vuevuetypescriptsetuptruelang.5688fde7.js";import{d as O,r as T,k as P,bG as X,a as r,c,b as e,f as E,w,u as n,z as y,t as b,F as H,m as $,E as l}from"./entry.a7557f9a.js";import{u as N}from"./user.0d421798.js";import{t as F}from"./throttle.299a929b.js";import{j as z,c as G}from"./taskConnect.8010636f.js";import{g as W,b as q}from"./missions.bdcad18f.js";import{b as J}from"./index.85bd6c37.js";import{c as K,a as Q}from"./utils.40a3e9cb.js";import{_ as Z}from"./bi.0ff902cb.js";import"./debounce.92b1e4be.js";import"./el-input.5ed66859.js";import"./use-form-item.0b52438f.js";import"./validator.f05e2c99.js";import"./focus-trap.dc86181d.js";import"./dict.d4f65729.js";import"./client-only.43865359.js";import"./commonjsHelpers.fab00dd9.js";import"./referral.860926a8.js";import"./el-loading.c9ec1f4b.js";import"./dashboard.52a8e5e6.js";import"./-initCloneObject.a1e9ce8a.js";const ss={class:"w-full px-10 py-6 bg-[#0F0F0F] rounded-lg shadow-3d flex items-center justify-between text-white"},es={class:"flex items-center space-x-5"},ts={class:"w-32 h-32 bg-black rounded-full overflow-hidden"},os=e("div",{class:"image-slot"},[e("img",{src:L,class:"w-full h-full object-cover"})],-1),as={class:"space-y-3"},rs={key:0,class:"space-x-1"},cs=e("span",{class:"iconfont icon-copy text-sm text-[#6E6E6E]"},null,-1),ns={key:1,class:"border border-[#ffe09929] space-x-1 rounded px-2 text-[#FFE099] hover:border-[#FFE099]"},is=e("span",{class:"iconfont icon-lianjie text-base"},null,-1),ls=e("span",{class:"text-sm duration-300"},"Connect Wallet",-1),ds=[is,ls],_s={class:"flex items-center space-x-2"},ms={key:0,src:M,alt:"",class:"w-[18px] h-[18px] mr-1"},ps={key:1,src:S,alt:"",class:"w-6 h-6 mr-1"},fs={class:"flex flex-col items-end space-y-2"},us={class:"flex items-center space-x-1"},hs=e("div",{class:"w-10 h-10"},[e("img",{src:Z,alt:"",class:"w-full h-full object-contain"})],-1),gs={class:"px-2 py-1 bg-[#866c50] rounded-lg flex items-center space-x-1 cursor-pointer"},xs=e("span",{class:"iconfont icon-copy"},null,-1),vs=e("span",{class:"text-sm font-medium text-center"},"Copy Referral Link",-1),Es=[xs,vs],ws=e("div",{class:"flex items-center text-[#6E6E6E] text-sm cursor-not-allowed"},[e("span",{class:""},"View records"),e("span",{class:"iconfont icon-gengduo"})],-1),Ns=O({__name:"Head",props:{data:{default:[]},missionData:{default:[]}},emits:["toUpdate"],setup(I,{emit:k}){const _=I,a=N(),d=T(!1),C=P(()=>_.missionData.filter(s=>["VERIFY_X","VERIFY_DISCORD"].includes(s.code))),m=s=>{const{social_x_name:t,social_dc_name:o}=a.getUserInfo;return s.code==="VERIFY_X"&&t||s.code==="VERIFY_DISCORD"&&o||s.status==="COMPLETED"},p=s=>{const{social_x_name:t,social_dc_name:o}=a.getUserInfo;return s.code==="VERIFY_X"&&t?t:s.code==="VERIFY_DISCORD"&&o?o:s.status==="COMPLETED"?"Claimed":s.status==="AVAILABLE"?"Claim":"Add"},D=s=>{m(s)||(s.status==="AVAILABLE"?F(()=>U(s)):F(()=>z(s.code)))},U=async s=>{try{d.value=!0;const t=await G({mission_id:`${s.id}`});d.value=!1,t.code===200?k("toUpdate"):l.error(t.msg)}catch(t){console.error(t),l.error("An error occurred while completing the mission.")}finally{d.value=!1}},V=async()=>{var s;try{if((s=a.getUserInfo)!=null&&s.eth_address)return;const t=await W(),o=await q({address:t});o.code===200?(l.success(o.data),A()):l.error(o.msg)}catch(t){console.log(t)}},A=async()=>{try{const s=await J();s.code===200&&a.setUserInfo(s.data)}catch(s){console.log(s)}};return(s,t)=>{var u,h,g,x,v;const o=Y,R=j,f=X("copy");return r(),c("div",ss,[e("div",es,[e("div",ts,[E(o,{src:("showFaces"in s?s.showFaces:n(K))(),fit:"cover"},{error:w(()=>[os]),_:1},8,["src"])]),e("div",as,[e("div",{class:"flex items-center text-white hover:text-[#FFE099] font-normal text-base cursor-pointer",onClick:V},[(u=n(a).getUserInfo)!=null&&u.eth_address?y((r(),c("div",rs,[e("span",null,b(("stringStar"in s?s.stringStar:n(Q))({value:(h=n(a).getUserInfo)==null?void 0:h.eth_address,characters:"********",start:4})),1),cs])),[[f,(g=n(a).getUserInfo)==null?void 0:g.eth_address]]):(r(),c("div",ns,ds))]),e("div",_s,[(r(!0),c(H,null,$(n(C),(i,B)=>(r(),c("div",{key:B},[E(R,{title:p(i),disabled:!!m(i),"hover-title":p(i),onClickHandle:ys=>D(i)},{default:w(()=>[i.code==="VERIFY_X"?(r(),c("img",ms)):(r(),c("img",ps))]),_:2},1032,["title","disabled","hover-title","onClickHandle"])]))),128))])])]),e("div",fs,[e("div",us,[hs,e("span",null,b(((x=_.data)==null?void 0:x.total_total)||0),1)]),y((r(),c("div",gs,Es)),[[f,(v=n(a).getUserInfo)==null?void 0:v.referral_link]]),ws])])}}});export{Ns as default};
