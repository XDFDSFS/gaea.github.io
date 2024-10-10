import{_ as Y,a as M,b as O,E as j}from"./white_discord.316dd377.js";import{_ as B}from"./Btn.vue.1173d430.js";import{d as T,r as P,x as X,k as H,bF as $,a,c as n,b as e,f as v,w as y,u as c,y as I,t as w,F as N,m as W,E as d}from"./entry.99aeaaf8.js";import{u as q}from"./user.a1692524.js";import{b as z,s as G,i}from"./utils.10eed9a0.js";import{t as F}from"./throttle.fadae6af.js";import{j as J,c as K}from"./taskConnect.74825497.js";import{g as Q,b as Z}from"./missions.2c8ccb58.js";import{b as ss}from"./index.7c29e315.js";import{_ as es}from"./bi.60bf271c.js";import"./debounce.45b48d88.js";import"./el-input.20f5167a.js";import"./use-form-item.795ba0d3.js";import"./validator.53f4e0c9.js";import"./focus-trap.f6a513c0.js";import"./request.49292630.js";import"./client-only.55700b0e.js";import"./dict.d5728e61.js";import"./referral.903c33a9.js";import"./el-loading.4041cedb.js";import"./dashboard.f8b1dfcf.js";import"./initCloneObject.a37c011d.js.js";const ts={class:"w-full px-10 py-6 bg-[#0F0F0F] rounded-lg shadow-3d flex items-center justify-between text-white"},os={class:"flex items-center space-x-5"},rs={class:"w-32 h-32 bg-black rounded-full overflow-hidden"},as=e("div",{class:"image-slot"},[e("img",{src:Y,class:"w-full h-full object-cover"})],-1),ns={class:"space-y-3"},cs={key:0,class:"space-x-1"},is=e("span",{class:"iconfont icon-copy text-sm text-[#6E6E6E]"},null,-1),ls={key:1,class:"border border-[#ffe09929] space-x-1 rounded px-2 text-[#FFE099] hover:border-[#FFE099]"},ds=e("span",{class:"iconfont icon-lianjie text-lg"},null,-1),_s=e("span",{class:"text-base duration-300"},"Connect Wallet",-1),fs=[ds,_s],ms={class:"flex items-center space-x-2"},ps={key:0,src:M,alt:"",class:"w-[18px] h-[18px] mr-1"},us={key:1,src:O,alt:"",class:"w-6 h-6 mr-1"},hs={class:"flex flex-col items-end space-y-2"},gs={class:"flex items-center space-x-1"},xs=e("div",{class:"w-10 h-10"},[e("img",{src:es,alt:"",class:"w-full h-full object-contain"})],-1),Es={class:"px-2 py-1 bg-[#866c50] rounded-lg flex items-center space-x-1 cursor-pointer"},vs=e("span",{class:"iconfont icon-copy"},null,-1),ys=e("span",{class:"text-sm font-medium text-center"},"Copy Referral Link",-1),Is=[vs,ys],ws=e("div",{class:"flex items-center text-[#6E6E6E] text-sm cursor-not-allowed"},[e("span",{class:""},"View records"),e("span",{class:"iconfont icon-gengduo"})],-1),qs=T({__name:"Head",props:{data:{default:[]},missionData:{default:[]}},emits:["toUpdate"],setup(b,{emit:D}){const f=b,r=q(),_=P(!1);X();const C=H(()=>s=>s.filter(t=>t.code==="VERIFY_X"||t.code==="VERIFY_DISCORD")),k=s=>{const{social_x_name:t,social_dc_name:o}=r.getUserInfo;return s.code==="VERIFY_X"&&!i(t)||s.code==="VERIFY_DISCORD"&&!i(o)?!0:s.status==="COMPLETED"},m=s=>{const{social_x_name:t,social_dc_name:o}=r.getUserInfo;return!i(t)&&s.code==="VERIFY_X"?t:!i(o)&&s.code==="VERIFY_DISCORD"?o:s.status==="COMPLETED"?"Claimed":s.status==="AVAILABLE"?"Claim":"Add"},R=s=>{const{social_x_name:t,social_dc_name:o}=r.getUserInfo;!i(t)&&s.code==="VERIFY_X"||!i(o)&&s.code==="VERIFY_DISCORD"||s.status!=="COMPLETED"&&(s.status==="AVAILABLE"?F(()=>V(s)):F(()=>J(s.code)))},V=async s=>{try{_.value=!0;const t=await K({mission_id:`${s.id}`});_.value=!1,t.code===200?D("toUpdate"):d.error(t.msg)}catch(t){console.error(t),d.error("An error occurred while completing the mission.")}finally{_.value=!1}},U=async()=>{var s;try{if((s=r.getUserInfo)!=null&&s.eth_address)return;const t=await Q(),o=await Z({address:t});o.code===200?(d.success(o.data),A()):d.error(o.msg)}catch(t){console.log(t)}},A=async()=>{try{const s=await ss();s.code===200&&r.setUserInfo(s.data)}catch(s){console.log(s)}};return(s,t)=>{var u,h,g,x,E;const o=j,L=B,p=$("copy");return a(),n("div",ts,[e("div",os,[e("div",rs,[v(o,{src:("showFaces"in s?s.showFaces:c(z))(),fit:"cover"},{error:y(()=>[as]),_:1},8,["src"])]),e("div",ns,[e("div",{class:"flex items-center text-white hover:text-[#FFE099] font-normal text-base cursor-pointer",onClick:U},[(u=c(r).getUserInfo)!=null&&u.eth_address?I((a(),n("div",cs,[e("span",null,w(("stringStar"in s?s.stringStar:c(G))({value:(h=c(r).getUserInfo)==null?void 0:h.eth_address,characters:"********",start:4})),1),is])),[[p,(g=c(r).getUserInfo)==null?void 0:g.eth_address]]):(a(),n("div",ls,fs))]),e("div",ms,[(a(!0),n(N,null,W(c(C)(f.missionData),(l,S)=>(a(),n("div",{key:S},[v(L,{title:m(l),disabled:k(l),"hover-title":m(l),onClickHandle:Fs=>R(l)},{default:y(()=>[l.code==="VERIFY_X"?(a(),n("img",ps)):(a(),n("img",us))]),_:2},1032,["title","disabled","hover-title","onClickHandle"])]))),128))])])]),e("div",hs,[e("div",gs,[xs,e("span",null,w(((x=f.data)==null?void 0:x.total_total)||0),1)]),I((a(),n("div",Es,Is)),[[p,(E=c(r).getUserInfo)==null?void 0:E.referral_link]]),ws])])}}});export{qs as default};
