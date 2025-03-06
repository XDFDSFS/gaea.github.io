import{_ as k}from"./WebglWavMin.0408fceb.js";import{E as P}from"./el-button.9bca8878.js";import{d as M,r as d,u as F,f as N,g as L,o as n,c as h,l as J,b as s,i as z,e as r,F as R,C as A,B as y,m as g,v as D,E as H,n as Y,p as j,h as q}from"./entry.5ef69f17.js";import{u as O}from"./godhood.79936df8.js";import{g as W}from"./godhead.0c5d6e01.js";import{_ as G}from"./plugin-vueexport-helper.c27b6911.js";import"./istpPersonality.74cd3ea6.js";import"./request.9899458d.js";import"./user.63bf69d2.js";const U=""+globalThis.__publicAssetsURL("images/godhoodId/id_card/chassis_circle.svg"),v=u=>(j("data-v-0fc3e444"),u=u(),q(),u),V={class:"w-full h-screen fixed bottom-0 left-0 flex flex-col items-center justify-end z-[10]"},K={class:"absolute bottom-0 aspect-[1/1] round-card"},Q={class:"w-full h-full top-[64%] absolute rounded-full"},X={class:"card-wrapper"},Z=["onMouseover","onClick"],ee=["src"],te=v(()=>s("img",{src:U,alt:"",class:"w-full h-full absolute top-0 left-0 object-fill"},null,-1)),oe=v(()=>s("span",{class:"text-[15px] font-[500]"},"My GODHOOD",-1)),se={key:1},ae=v(()=>s("span",{class:"text-[15px] font-[500]"}," Mint Now ",-1)),ne=v(()=>s("span",{class:"text-[15px] font-[500]"}," TAKE THE TEST ",-1)),le=5,re=M({__name:"index",setup(u){const x=d(["ENFJ","ENTJ","ESFJ","ESFP","ENFP","ENTP","ESTJ","ESTP","INFJ","INTJ","ISFJ","ISFP","INFP","INTP","ISTJ","ISTP"]),m=d(null),f=d(!1),p=d(0),E=F(),l=O(),i=d(.1),S=e=>{m.value=e,f.value=!0},w=()=>{m.value=null,f.value=!1},T=e=>{const o=e*22.5,t=-170,a=m.value===e?1.05:1;return{transform:`rotate(-${o}deg) translateY(${t}%) scale(${a})`,transition:"transform 0.5s ease"}},b=async()=>{p.value=0;const e=document.querySelector(".semi-circle-container");e&&(e.style.animation="none",await D(()=>{e.style.transform="translate(0, 0)",setTimeout(()=>{e.style.animation="moveCircle 5s infinite alternate"},0)})),f.value=!1,m.value=null;for(let o=x.value.length-1;o>=0;o--){const t=document.querySelector(`.card:nth-child(${o+1})`);t&&(t.style.transform="rotate(0deg) translateY(-170%)",t.style.transition="transform 0.8s ease")}setTimeout(()=>{E.push("/godhoodId/theFirstStep")},600)},C=e=>{e.preventDefault();const o=e.deltaY;i.value=Math.min(i.value+.1,le),p.value+=o*i.value;const t=document.querySelector(".semi-circle-container");t?(t.style.animation="none",t.style.transition=`transform ${i.value}s linear`,t.style.transform=`rotate(${p.value}deg)`):console.error("Semi-circle container not found"),setTimeout(()=>{t&&(i.value=.1,t.style.animation="",t.style.transition="none",t.style.transform=`rotate(${p.value}deg)`,t.style.transition="transform 60s linear infinite")},1e3)},B=async()=>{try{const e=await W();if(e)if(e.code===200&&e.data){const{mood:o,godhood:t,invite_user:a}=e.data;if(o){const _=o||l.getMyCardList;l.setMyCardList(_)}l.setPointAllToday({...t,invite_user:a})}else H.error(e.msg)}catch(e){console.log(e)}finally{}};return N(()=>{window.addEventListener("wheel",C,{passive:!1}),B()}),L(()=>{window.removeEventListener("wheel",C)}),(e,o)=>{var _;const t=k,a=P;return n(),h("div",V,[J(t),s("div",K,[s("div",Q,[s("div",{class:z(["w-full h-full semi-circle-container",{"stop-rotation":r(f)}])},[s("div",X,[(n(!0),h(R,null,A(r(x),(c,I)=>(n(),h("div",{class:"w-[20%] aspect-[1/2] card duration-500 cursor-pointer",key:c,onMouseover:$=>S(I),onMouseleave:w,onClick:$=>e.$router.push(`/godhoodId/intpPersonality/${c}`),style:Y(T(I))},[s("img",{src:`/images/godhoodId/id_card/${c}-min.png`,alt:"",class:"w-full h-full object-contain"},null,8,ee)],44,Z))),128))])],2),te,r(l).getIsPayCard&&((_=r(l).getMyCardList)!=null&&_.emotion_code)?(n(),y(a,{key:0,class:"w-[187px] absolute left-1/2 -translate-x-1/2 top-[30%] hover:scale-[1.01] duration-500",style:{height:"40px","border-radius":"70px"},color:"#EBEBEB",round:"",size:"small",onClick:o[0]||(o[0]=c=>e.$router.push("/godhoodId/myResultPreview"))},{default:g(()=>[oe]),_:1})):(n(),h("div",se,[r(l).getTestCardList?(n(),y(a,{key:0,class:"w-[187px] absolute left-1/2 -translate-x-1/2 top-[30%] hover:scale-[1.01] duration-500",style:{height:"40px","border-radius":"70px"},color:"#EBEBEB",round:"",size:"small",onClick:o[1]||(o[1]=c=>r(E).push("/godhoodId/theSecondStep"))},{default:g(()=>[ae]),_:1})):(n(),y(a,{key:1,class:"w-[187px] absolute left-1/2 -translate-x-1/2 top-[30%] hover:scale-[1.01] duration-500",style:{height:"40px","border-radius":"70px"},color:"#EBEBEB",round:"",size:"small",onClick:b},{default:g(()=>[ne]),_:1}))]))])])])}}});const ve=G(re,[["__scopeId","data-v-0fc3e444"]]);export{ve as default};
