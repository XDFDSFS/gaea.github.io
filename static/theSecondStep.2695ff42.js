import{_ as oe}from"./WebglWavMin.40f90f93.js";import{E as O}from"./el-button.8299238a.js";import{_ as se,a as ne,b as ae,c as le}from"./IntpPersonality.vuevuetypescriptsetuptruelang.b7fedf0c.js";import{d as F,r as u,u as Y,K as R,o as d,c as p,l,m as _,b as e,e as s,t as N,F as K,C as q,k as V,q as b,E as k,D as ie,G as ce,f as re,v as de,p as pe,h as ue}from"./entry.a59be4c1.js";import{E as _e}from"./el-popover.e98c74d0.js";import{E as fe}from"./el-input.41db0785.js";import{E as me,a as xe}from"./el-form.4a6c7de6.js";import{E as he}from"./el-overlay.367a4ff8.js";import{_ as ge}from"./client-only.00cd5b7f.js";import"./el-popper.33fbbd39.js";import{u as ve}from"./user.9cc67386.js";import{u as J}from"./godhood.1b043253.js";import{e as we,f as Q,w as ye}from"./godhead.4e5d0942.js";import{s as be,f as Ee,d as Ce,l as $e,k as De}from"./ethers.59fa3fc9.js";import{i as Ie}from"./istpPersonality.74cd3ea6.js";import{_ as ke}from"./plugin-vueexport-helper.c27b6911.js";import"./event.baeb90d9.js";import"./focus-trap.e19c648e.js";import"./request.d17b4437.js";import"./verification.856d912b.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";const Be=""+globalThis.__publicAssetsURL("images/godhoodId/Base_Network_Logo.svg"),Pe=ie(()=>ce(()=>import("./WalletSelection.1a035330.js"),["./WalletSelection.1a035330.js","./el-overlay.367a4ff8.js","./entry.a59be4c1.js","./entry.1361a732.css","./focus-trap.e19c648e.js","./event.baeb90d9.js","./el-button.8299238a.js","./el-button.2e70eb9e.css","./ethers.59fa3fc9.js","./godhood.1b043253.js","./user.9cc67386.js","./verification.856d912b.js","./godhead.4e5d0942.js","./request.d17b4437.js","./-vite-browser-externalcommonjs-proxy.0e49e858.js","./el-overlay.155e27a7.css","./client-only.00cd5b7f.js","./utils.d756be5d.js","./WalletSelection.c4aa2964.css"],import.meta.url).then(f=>f.default||f)),Le={class:"z-[99]"},Te={key:0,class:"flex flex-col items-center mx-auto"},Ae=e("div",{class:"text-[20px] font-sans-[700] text-[#EDEDED]"},"Unlock Your GodHood ID",-1),Se=e("div",{class:"text-[14px] font-[600] text-[#B0B0B0] text-center my-5"},[b(" GodHood ID will record your data on the blockchain"),e("br"),b(" to train AI with human-like characteristics. ")],-1),Ge={class:"w-[117px] h-[164px]"},Ne=["src"],We={class:"mt-6"},Ue={class:"w-[310px] grid grid-cols-2 gap-2"},je=e("div",{class:"h-[28px] bg-[#2E2E2E] rounded-[3px] text-[14px] font-sans-[400] text-[#EDEDED] flex items-center justify-center space-x-2"},[e("span",null,"Price:"),e("span",null,"$10")],-1),ze={class:"h-[28px] cursor-pointer bg-[#2E2E2E] rounded-[3px] text-[14px] px-4 font-sans-[400] text-[#EDEDED] flex items-center justify-center space-x-2"},He=e("div",{class:"w-[15px] h-[15px] rounded-full"},[e("img",{src:Be,alt:"",class:"w-full h-full object-contain"})],-1),Me={class:"flex-1 text-[14px] font-[400] u-line-1"},Re=e("span",{class:"iconfont icon-gengduo hover:rotate-90 duration-500"},null,-1),Ve={key:0,class:"w-[289px] border border-[#EBEBEB] rounded-[9px] space-x-1 space-y-3 px-4 py-3 z-[9999]"},Oe=["onClick"],Fe={class:"text-[#B0B0B0] text-[12px] font-[400]"},Ye={class:"w-full relative"},Ke={key:0,class:"w-5 h-5 absolute top-1/2 text-[24px] -translate-y-1/2 right-5 flex items-center justify-center"},qe={key:0,class:"iconfont icon-tick text-green-500"},Je={key:1,class:"iconfont icon-del text-red-400"},Qe=e("div",{class:"text-[12px] font-[400] text-[#828282] -mt-2 text-center"}," Enter your refer code to unlock a mystery box ",-1),Xe={class:"space-y-2 mt-4 mb-6"},Ze=e("span",{class:"text-[12px] font-[400] text-[#E7E7E7]"},"Pay ",-1),et={key:1,class:"flex flex-col items-center justify-center space-y-4"},tt=e("div",{class:"text-[20px] font-[700] text-[#EBEBEB]"},"Payment Successful",-1),ot=e("div",{class:"text-[14px] font-[600] text-[#B0B0B0] text-center"},[b(" Congratulations! Your payment was successful. Go explore your"),e("br"),b(" benefits now. ")],-1),st={class:"w-[117px] h-[164px]"},nt=["src"],at=e("span",{class:"text-[12px] font-[400] text-[#E7E7E7]"},"View more",-1),lt=F({__name:"MintNft",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(f,{emit:D}){const m=u(!1),i=ve(),W=u(),c=J();Y();const g=u(!1),B=u(!1),v=u(),a=u(!1),t=R({code:""}),U=R({}),w=u(),E=u([]),j=o=>{o&&o.resetFields()},P=()=>{j(W.value),t.code="",v.value="",a.value=!1,D("update:closeDialog"),g.value=!1},z=()=>{var o;E.value=c.getWeb3ConfigData,w.value=(o=E.value)==null?void 0:o[0],c.setweb3ConfigItem(w.value)},L=o=>{try{const n=new URL(o),y=/[?&]ref=([^&]*)/,r=n.search.match(y);return r?r[1]:o}catch{return o}},I=async()=>{if(t.code&&!v.value){const o=L(t.code);t.code=o;const n=await we({referral_code:t.code.trim()});a.value=!0,n&&n.code===200&&n.data&&n.data.eth_address&&(v.value=n.data.eth_address)}},T=o=>{w.value=o,c.setweb3ConfigItem(o)},A=async()=>{try{g.value=!0,await be(c.getAccountWalletItem,w.value.chain_id);const o=await Ee(c.getAccountsWalletAddress),n=await Ce(c.getAccountsWalletAddress);if(n<10)return k.warning(`USDC balance insufficient, current balance is ${n}`);if(o<=1e-4)return k.warning(`ETH balance is insufficient, current balance is ${o}`);if(t.code===i.getUserInfo.referral_code)return k.warning("Cannot use one's own referral code");if(await I(),c.getAccountsWalletAddress){const y=await $e(v.value);if(y){const{eth_address:r,approveHash:$,invierHash:H}=y;setTimeout(async()=>{await C($,H,r)},2e3),await c.setApproveHash("")}}else console.log("Connect wallet")}catch(o){console.log(o),g.value=!1}finally{g.value=!1}},C=async(o,n,y)=>{try{const r=c.getTestCardList,$=await Q({emotion_code:r==null?void 0:r.type,emotion_detail:r});$&&$.code===200&&(B.value=!0)}catch(r){console.log(r)}},S=()=>{m.value=!0};return(o,n)=>{const y=_e,r=fe,$=me,H=xe,M=O,X=he,Z=Pe,ee=ge;return d(),p("div",Le,[l(ee,null,{default:_(()=>[l(X,{class:"border-box",draggable:"","model-value":o.$props.dialogVisible,"show-close":!1,width:"750px",style:{background:"black","border-radius":"10px","padding-bottom":"10px"},"align-center":"",onClose:P,onOpen:z},{default:_(()=>{var G;return[e("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:P}),s(B)?(d(),p("div",et,[tt,ot,e("div",st,[e("img",{src:`/images/godhoodId/id_card/${(G=s(c).getTestCardList)==null?void 0:G.emotion_code}-min.png`,alt:"",class:"w-full h-full object-contain cursor-pointer"},null,8,nt)]),e("div",null,[l(M,{class:"w-[310px] h-[28px] mb-6",color:"#6435E9",onClick:n[1]||(n[1]=x=>o.$router.push("/godhoodId/myResultPreview"))},{default:_(()=>[at]),_:1})])])):(d(),p("div",Te,[Ae,Se,e("div",Ge,[e("img",{src:`/images/godhoodId/id_card/${s(c).getTestCardList.emotion_code}-min.png`,alt:" ",class:"w-full h-full object-contain"},null,8,Ne)]),e("div",We,[e("div",Ue,[je,l(y,{placement:"bottom-start",title:"",width:289,style:{"z-index":"9999",position:"relative"},trigger:"hover",content:""},{reference:_(()=>{var x;return[e("div",ze,[He,e("span",Me,N((x=s(w))==null?void 0:x.network),1),Re])]}),default:_(()=>[s(E)?(d(),p("div",Ve,[(d(!0),p(K,null,q(s(E),(x,te)=>(d(),p("div",{class:"space-y-1",key:te},[e("div",{onClick:kt=>T(x),class:"w-full border border-[#2E2E2E] cursor-pointer rounded-[9px] h-8 flex items-center justify-between px-4 hover:scale-[1.05] duration-700"},[e("span",Fe,N(x.network),1)],8,Oe)]))),128))])):V("",!0)]),_:1})]),l(H,{rules:s(U),model:s(t),class:"w-[310px] my-2"},{default:_(()=>[l($,{label:"",style:{border:"none"}},{default:_(()=>[e("div",Ye,[l(r,{modelValue:s(t).code,"onUpdate:modelValue":n[0]||(n[0]=x=>s(t).code=x),placeholder:"Enter referral code to claim extra rewards",onBlur:I},null,8,["modelValue"]),s(a)?(d(),p("div",Ke,[s(v)?(d(),p("span",qe)):(d(),p("span",Je))])):V("",!0)])]),_:1})]),_:1},8,["rules","model"]),Qe]),e("div",Xe,[l(M,{class:"w-[310px] h-[28px]",color:"#6435E9",onClick:S,loading:s(g)},{default:_(()=>[Ze]),_:1},8,["loading"])])]))]}),_:1},8,["model-value"]),l(Z,{"dialog-visible":s(m),"onUpdate:success":n[2]||(n[2]=G=>A()),"onUpdate:closeDialog":n[3]||(n[3]=G=>m.value=!1)},null,8,["dialog-visible"])]),_:1})])}}}),h=f=>(pe("data-v-680829e8"),f=f(),ue(),f),it={class:"w-full overflow-auto text-[#EBEBEB]"},ct={class:"w-full h-screen fixed inset-0"},rt={class:"w-full h-auto flex items-center justify-between relative pb-28 pt-12 adaptation-padding"},dt={class:"flex-1 h-full flex flex-col justify-between z-20"},pt=h(()=>e("div",{class:"text-[30px] sm:text-[20px] md:text-[30px] lg:text-[50px] xl:text-[50px] 2xl:text-[60px] 3xl:text-[60px] font-[400] mt-12 u-line-1"},[b(" Unlock Your GODHOOD ID "),e("br"),b("Become the God of AI ")],-1)),ut={class:"mt-18 space-y-2"},_t=h(()=>e("p",{class:"text-[20px] font-[400] mb-4"}," GODHOOD ID privileges",-1)),ft={class:"flex items-center space-x-12 mt-14"},mt={class:"button-container"},xt=h(()=>e("div",{class:"border-lines"},[e("span",{class:"line top"}),e("span",{class:"line right"}),e("span",{class:"line bottom"}),e("span",{class:"line left"})],-1)),ht=h(()=>e("span",{class:"iconfont icon-shuaxin1 text-[16px]"},null,-1)),gt=h(()=>e("span",{class:"text-[16px] font-[400]"},"Retest",-1)),vt=[ht,gt],wt={class:"w-[400px] pb-[35%] relative cursor-pointer arrow-icon hover:scale-[1.05] duration-700"},yt=h(()=>e("img",{src:le,alt:"",class:"w-full h-full object-contain absolute top-0 left-0"},null,-1)),bt=["src"],Et={class:"w-full relative z-20 py-12"},Ct=h(()=>e("div",{class:"w-[40px] h-[40px] arrow-icon absolute top-0 left-1/2 -translate-x-1/2 z-[99]"},[e("svg",{t:"1735996705618",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"13657",width:"45",height:"45"},[e("path",{d:"M512 728.576a51.84 51.84 0 0 0 37.888-15.872l326.656-326.656a52.864 52.864 0 0 0 0-75.264 52.864 52.864 0 0 0-75.264 0L512 600.064l-289.28-289.28a52.864 52.864 0 0 0-75.264 0 52.864 52.864 0 0 0 0 75.264l326.656 326.656a53.12 53.12 0 0 0 37.888 15.872z","p-id":"13658",fill:"#515151"})])],-1)),$t=h(()=>e("div",{class:"w-full h-56 absolute -top-20 z-20",style:{background:"linear-gradient(0.37deg, black 21.3%, rgba(23, 25, 97, 0) 80.99%)"}},null,-1)),Dt={class:"adaptation-padding space-y-20 relative z-20 bg-black"},It=F({__name:"theSecondStep",setup(f){const D=u(!1),m=u(!1),i=J(),W=Y(),c=async()=>{if(!i.getIsPayCard){const a=await De();i.setIsPayCard(a)}},g=async()=>{var a;await c();try{if(i.getIsPayCard){m.value=!0;const t=await Q({emotion_code:(a=i.getTestCardList)==null?void 0:a.emotion_code,emotion_detail:i.getTestCardList});m.value=!1,t&&(t.code===200?W.push("/godhoodId/myResultPreview"):k.error(t.msg))}else D.value=!0}catch{m.value=!1}},B=u(["Complete your KYC to unlock the 'New God Passport' for the Silicon-based world and gain access to future airdrops and exclusive perks.","Data collection reward 1.5x.",'Upload emotional coordinates and earn "Soul Points".',"GAEA mystery box opening privilege.","refer friends to buy the Godhood ID to get 1USD and 1 Mystery Box."]),v=async()=>{var a;try{const t=await ye();t&&(t.code===200?i.setWeb3ConfigData((a=t.data)==null?void 0:a.config):k.error(t.msg))}catch(t){console.dir(t)}};return re(async()=>{var a,t;await de(),await v(),document.documentElement.style.setProperty("--btn-color",((t=Ie((a=i.getTestCardList)==null?void 0:a.emotion_code))==null?void 0:t.color)||"rgba(90, 90, 90, 1)")}),(a,t)=>{var L,I,T,A;const U=oe,w=O,E=se,j=ne,P=ae,z=lt;return d(),p("div",it,[e("div",ct,[l(U,{type:(L=s(i).getTestCardList)==null?void 0:L.emotion_code},null,8,["type"])]),e("div",rt,[e("div",dt,[pt,e("div",ut,[_t,(d(!0),p(K,null,q(s(B),(C,S)=>(d(),p("div",{key:S,class:"w-[85%] text-[14px] font-[400] text-[#9C9C9C] flex items-center space-x-2"},[e("span",null,N(S+1)+".",1),e("span",null,N(C),1)]))),128))]),e("div",ft,[e("div",mt,[l(w,{class:"glow-button",onClick:t[0]||(t[0]=C=>g()),loading:s(m)},{default:_(()=>[b(" Mint Now "),xt]),_:1},8,["loading"])]),e("div",{class:"h-fit flex items-center space-x-2 cursor-pointer text-[#B0B0B0] hover:text-[#EBEBEB]",onClick:t[1]||(t[1]=C=>a.$router.push("/godhoodId/theFirstStep"))},vt)])]),e("div",wt,[yt,e("img",{src:`/images/godhoodId/id_card/${(I=s(i).getTestCardList)==null?void 0:I.emotion_code}-min.png`,alt:"",class:"w-full h-full object-contain absolute top-[10%] -left-[20%] preserve_3d"},null,8,bt)])]),e("div",Et,[Ct,$t,e("div",Dt,[l(E,{type:(T=s(i).getTestCardList)==null?void 0:T.emotion_code},null,8,["type"]),l(j,{data:s(i).getTestCardList},null,8,["data"]),l(P,{type:(A=s(i).getTestCardList)==null?void 0:A.emotion_code},null,8,["type"])])]),l(z,{"dialog-visible":s(D),"onUpdate:closeDialog":t[2]||(t[2]=C=>D.value=!1)},null,8,["dialog-visible"])])}}});const Jt=ke(It,[["__scopeId","data-v-680829e8"]]);export{Jt as default};
