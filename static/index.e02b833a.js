import{d as D,r as s,f as G,o as l,c as u,b as t,F as k,C as $,e as d,t as U,u as W,s as X,g as K,l as F,k as Q,n as L,B as S,m as T,j as Z,v as ee,E as te,p as oe,h as se,q as z}from"./entry.7ad1f3e0.js";import{_ as J}from"./plugin-vueexport-helper.c27b6911.js";import{_ as ae}from"./WebglWavMin.44a62966.js";import{E as le}from"./el-button.7b6d1fa2.js";import{u as ne}from"./godhood.1e9fd54c.js";import{g as re}from"./godhead.3e520b6a.js";import"./istpPersonality.74cd3ea6.js";import"./request.bfee4605.js";import"./user.946852de.js";const ie={class:"w-[380px] h-[50px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[20] flex items-center justify-between scale-[0.5]"},ce={class:"hfull"},de={class:"content_box_frist"},ue={class:"content_box_second"},ve={class:"progress_txt text-[#EBEBEB]"},y=16,me=D({__name:"Progress",setup(p){const n=s(0),v=s(!1),m=s(0),x=()=>{n.value<y&&(m.value=Math.floor(n.value/y*100),n.value===Math.floor(y/2)&&!v.value?(v.value=!0,setTimeout(()=>{n.value++,v.value=!1},1e3)):n.value++)};return G(()=>{const b=setInterval(()=>{x(),n.value>=y&&(m.value=99,clearInterval(b))},200)}),(b,w)=>(l(),u("div",ie,[t("div",ce,[t("div",de,[(l(),u(k,null,$(y,r=>t("div",{key:"box-"+r,class:"box"})),64))]),t("div",ue,[(l(!0),u(k,null,$(d(n),r=>(l(),u("div",{key:"progress-box-"+r,class:"box"}))),128))])]),t("span",ve,U(d(m))+"%",1)]))}});const fe=J(me,[["__scopeId","data-v-f89fbd1c"]]),_e=""+globalThis.__publicAssetsURL("images/godhoodId/id_card/GH.svg"),E=p=>(oe("data-v-ea925184"),p=p(),se(),p),pe={class:"w-full h-screen fixed bottom-0 left-0 flex flex-col items-center justify-end z-[10]"},xe={key:0,class:"absolute inset-0 w-full h-full bg-black z-[50]"},he=E(()=>t("div",{class:"w-full flex flex-col items-center justify-center absolute top-[80px] text-[#EBEBEB] z-[20]"},[t("div",{class:"text-[45px] font-bold"},"EXCLUSIVE GODHOOD ID "),t("div",{class:"text-[16px] text-[#434242] text-center"},[z(" Complete KYC to unlock the"),t("br"),z("Human God Passport of the Silicon World. ")])],-1)),ge={class:"absolute bottom-0 aspect-[1/1] round-card"},ye={class:"w-full h-full top-[64%] absolute rounded-full"},Ee=Z('<p class="text-[#EBEBEB] text-[1rem] sm:text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text[2rem] 2xl:text-[2.2rem] 3xl:text-[2.5rem] 4xl:[3rem] font-bold absolute top-[13%] left-1/2 -translate-x-1/2" data-v-ea925184>PRIVILEGE </p><div class="w-full flex items-center justify-center text-[#EBEBEB] absolute z-[20] top-[23%] text-[0.3rem] sm:text-[0.3rem] md:text-[0.5rem] lg:text-[0.7rem] xl:text[0.5rem] 2xl:text-[1rem] 3xl:text-[1.2rem] 4xl:text-[1.5rem]" data-v-ea925184><div class="title u-line-1" style="--d:-1;" data-v-ea925184> 1: AI training qualification and 2X Soul points acquisition. </div><div class="title" style="--d:0;" data-v-ea925184> 2: Obtain 1 box and the qualification to open a sub-box. </div><div class="title u-line-1" style="--d:1;" data-v-ea925184> 3: Data collection rewards increased to 1.5X. </div><div class="title u-line-1" style="--d:2;" data-v-ea925184> 4: Unlock additional check-in rewards. </div><div class="title u-line-1" style="--d:3;" data-v-ea925184> 5: Gain a higher allocation ratio for future treasure investments. </div></div>',2),be={class:"card-wrapper"},Ie=["onMouseover","onClick"],we=["src"],Be=E(()=>t("img",{src:_e,alt:"",class:"w-full h-full absolute top-0 left-0 object-fill"},null,-1)),Ce=E(()=>t("span",{class:"text-[15px] font-[500]"},"My GODHOOD",-1)),Se={key:1},Te=E(()=>t("span",{class:"text-[15px] font-[500]"}," Mint Now ",-1)),ke=E(()=>t("span",{class:"text-[15px] font-[500]"}," TAKE THE TEST ",-1)),$e=D({__name:"index",setup(p){const n=s(!0),v=s(["ENFJ","ENTJ","ESFJ","ESFP","ENFP","ENTP","ESTJ","ESTP","INFJ","INTJ","ISFJ","ISFP","INFP","INTP","ISTJ","ISTP"]),m=s(null),x=s(!1),b=s(0),w=W(),r=ne(),B=s(0),i=s(.05),h=s(!1),f=s(null),I=s(!0),j=X(()=>({transform:`rotate(${B.value}deg)`,transition:h.value?"none":`transform ${i.value}s linear infinite`})),q=e=>{m.value=e,x.value=!0,I.value=!1},A=()=>{m.value=null,x.value=!1,I.value=!0,i.value=.05,f.value&&clearTimeout(f.value),C()},H=e=>{const o=e*22.5,a=-170,_=m.value===e?1.05:1;return{transform:`rotate(-${o}deg) translateY(${a}%) scale(${_})`,transition:"transform 0.5s ease"}},O=async()=>{B.value=0,i.value=.05,h.value=!1,I.value=!1,f.value&&clearTimeout(f.value),b.value=0;const e=document.querySelector(".semi-circle-container_");e&&(e.style.animation="none",await ee(()=>{e.style.transform="translate(0, 0)",setTimeout(()=>{e.style.animation="moveCircle 5s infinite alternate"},0)})),x.value=!1,m.value=null;for(let o=v.value.length-1;o>=0;o--){const a=document.querySelector(`.card:nth-child(${o+1})`);a&&(a.style.transform="rotate(0deg) translateY(-170%)",a.style.transition="transform 0.8s ease")}setTimeout(()=>{w.push("/godhoodId/theFirstStep")},300)},P=e=>{e.preventDefault(),h.value=!0,e.deltaY>0?i.value+=.05:i.value=Math.max(.1,i.value-.05),f.value&&clearTimeout(f.value),f.value=setTimeout(()=>{h.value=!1,i.value=.05},1e3)},V=async()=>{try{const e=await re();if(e)if(e.code===200&&e.data){const{mood:o,godhood:a,invite_user:_}=e.data;if(o){const c=o||r.getMyCardList;r.setMyCardList(c)}r.setPointAllToday({...a,invite_user:_})}else te.error(e.msg)}catch{}finally{}},R=()=>{let e=0;const o=v.value.length-1,a=()=>{e++,e===o&&setTimeout(()=>{n.value=!1},1e3)};v.value.forEach(_=>{const c=new Image;c.src=`/images/godhoodId/id_card/${_}-min.png`,c.onload=a,c.onerror=a})},C=()=>{I.value&&(B.value+=i.value,h.value||(i.value=.05),requestAnimationFrame(C))};return G(async()=>{window.addEventListener("wheel",P,{passive:!1}),R(),C(),await V()}),K(()=>{window.removeEventListener("wheel",P),clearTimeout(f.value)}),(e,o)=>{var M;const a=fe,_=ae,c=le;return l(),u("div",pe,[d(n)?(l(),u("div",xe,[F(a)])):Q("",!0),F(_),he,t("div",ge,[t("div",ye,[Ee,t("div",{class:"w-full h-full semi-circle-container_",style:L(d(j))},[t("div",be,[(l(!0),u(k,null,$(d(v),(g,N)=>(l(),u("div",{class:"w-[20%] aspect-[1/2] card duration-500 cursor-pointer",key:g,onMouseover:Y=>q(N),onMouseleave:A,onClick:Y=>e.$router.push(`/godhoodId/intpPersonality/${g}`),style:L(H(N))},[t("img",{src:`/images/godhoodId/id_card/${g}-min.png`,alt:"",class:"w-full h-full object-contain"},null,8,we)],44,Ie))),128))])],4),Be,d(r).getIsPayCard&&((M=d(r).getMyCardList)!=null&&M.emotion_code)?(l(),S(c,{key:0,class:"w-[187px] absolute left-1/2 -translate-x-1/2 top-[30%] hover:scale-[1.01] duration-500",style:{height:"40px","border-radius":"70px"},color:"#EBEBEB",round:"",size:"small",onClick:o[0]||(o[0]=g=>e.$router.push("/godhoodId/myResultPreview"))},{default:T(()=>[Ce]),_:1})):(l(),u("div",Se,[d(r).getTestCardList?(l(),S(c,{key:0,class:"w-[187px] absolute left-1/2 -translate-x-1/2 top-[30%] hover:scale-[1.01] duration-500",style:{height:"40px","border-radius":"70px"},color:"#EBEBEB",round:"",size:"small",onClick:o[1]||(o[1]=g=>d(w).push("/godhoodId/theSecondStep"))},{default:T(()=>[Te]),_:1})):(l(),S(c,{key:1,class:"w-[187px] absolute left-1/2 -translate-x-1/2 top-[30%] hover:scale-[1.01] duration-500",style:{height:"40px","border-radius":"70px"},color:"#EBEBEB",round:"",size:"small",onClick:O},{default:T(()=>[ke]),_:1}))]))])])])}}});const je=J($e,[["__scopeId","data-v-ea925184"]]);export{je as default};
