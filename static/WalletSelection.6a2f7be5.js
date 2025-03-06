var R=Object.defineProperty;var $=(n,o,e)=>o in n?R(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e;var y=(n,o,e)=>($(n,typeof o!="symbol"?o+"":o,e),e);import{E as V}from"./el-overlay.290d8508.js";import{_ as j}from"./client-only.ddc63fee.js";import{d as N,r as d,a1 as L,o as i,B as z,m as E,l as F,b as s,c as u,F as O,C as T,e as r,t as x,k as P,A as U,q as G}from"./entry.5f680153.js";import{u as Y}from"./godhood.9b9f1686.js";import{E as Z}from"./ethers.3c469c52.js";import{s as H}from"./utils.d756be5d.js";import"./focus-trap.d1fa2b90.js";import"./event.cc9fe503.js";import"./el-button.1acc5de8.js";import"./user.9dc4e5ae.js";import"./verification.856d912b.js";import"./godhead.a44ac79d.js";import"./request.0688ebab.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";class J extends Event{constructor(){super("eip6963:requestProvider")}}const w="dAppDefaultWalletProviderRdns";class K extends Z{constructor(){super();y(this,"providerDetails");this.providerDetails=[]}log(e){}providerReceived(e){this.providerDetails.push(e),this.emit("providerDetailsUpdated"),this.log(`updated wallet provider details from '${e.info.name}' extension`)}subscribe(){window.addEventListener("eip6963:announceProvider",e=>{this.log(`received 'announceProvider' emitted by ${e.detail.info.name} / ${e.detail.info.rdns}`),this.providerReceived(e.detail)})}requestProviders(){return this.log("emitting 'requestProvider' event"),this.providerDetails=[],window.dispatchEvent(new J),{success:!0}}storeDefaultProviderRdns(e){window.localStorage.setItem(w,e),this.log(`stored default provider rdns '${e}' in local storage.`)}readDefaultProviderRdns(){const e=window.localStorage.getItem(w);return this.log(`read default provider rdns '${e}' from local storage.`),e}removeDefaultProvider(){window.localStorage.removeItem(w),this.log("removed default provider rdns from local storage")}}const M={class:"w-full space-x-1 space-y-3 px-4 pb-4 z-[10] mx-auto"},Q=s("span",{class:"text-[#EBEBEB] text-[14px]"},"Connect",-1),X={class:"w-full border border-[#2E2E2E] rounded-[9px] h-8 flex items-center justify-between px-4 hover:scale-[1.05] duration-700 cursor-pointer"},ee={class:"flex items-center justify-center space-x-2"},te={class:"flex-shrink-0"},se=["src"],oe={class:"text-[#B0B0B0] text-[12px] font-[400]"},re=["onClick"],ne={key:0,class:"relative block w-2 h-2 bg-green-300 rounded-full shadow-inner shadow-green-500"},ae=s("span",{class:"absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-halo"},null,-1),le=[ae],ie={key:0,class:"z-10 flex items-center justify-between px-2 pt-2 relative",style:{opacity:"1",transform:"translateY(0%) translateZ(0px)"}},ce={class:"select-none"},de=s("span",{class:"iconfont icon-copy text-xs sm:text-sm text-[#6E6E6E]"},null,-1),ke=N({__name:"WalletSelection",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog","update:success"],setup(n,{emit:o}){const e=d(),b=Y(),D=d(),c=new K,p=d([]),B=d(null),a=d(null),_=()=>{p.value=[],o("update:closeDialog"),e.value=null,D.value=null},k=async()=>{p.value=[],A(),q(),c.subscribe(),C()},C=()=>{c.requestProviders()},A=()=>{const t=c.readDefaultProviderRdns();return B.value=t,t},q=()=>{c.on("providerDetailsUpdated",()=>{const t=c.providerDetails;p.value=t.filter((v,l,h)=>l===h.findIndex(g=>g.info.name===v.info.name))})},S=async(t,v)=>{e.value=v,b.setAccountWalletItem(t.provider);try{const l=await t.provider.request({method:"eth_requestAccounts"});W(l)}catch(l){console.error(`error getting account: ${l}`)}},W=t=>{I(t[0])},I=t=>{a.value=t.toLowerCase(),b.setAccountsWalletAddress(a.value),setTimeout(async()=>{t&&(o("update:success"),_())},1e3)};return(t,v)=>{const l=V,h=j,g=L("copy");return i(),z(h,null,{default:E(()=>[F(l,{class:"border-box","destroy-on-close":"",draggable:"","model-value":t.$props.dialogVisible,"show-close":!1,width:"389px","append-to-body":!0,style:{background:"black","border-radius":"10px","padding-bottom":"10px"},"align-center":"",onClose:_,onOpen:k},{default:E(()=>[s("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:_}),s("div",M,[Q,(i(!0),u(O,null,T(r(p),(m,f)=>(i(),u("div",{class:"",key:m.info.name},[s("div",X,[s("div",ee,[s("div",te,[s("img",{class:"w-5 h-5 rounded-full",src:m.info.icon,alt:"Provider image",style:{filter:"grayscale(100%) brightness(1)"}},null,8,se)]),s("span",oe,x(m.info.name),1)]),s("div",{class:"text-[#EBEBEB] text-[10px] cursor-pointer hover:underline underline-offset-4 duration-500 flex items-center space-x-1",onClick:ue=>S(m,f)},[s("span",null,x(r(e)===f&&r(a)?"Connected":"Connect"),1),r(e)===f&&r(a)?(i(),u("div",ne,le)):P("",!0)],8,re)]),r(e)===f&&r(a)?(i(),u("div",ie,[U((i(),u("p",ce,[G(x(("stringStar"in t?t.stringStar:r(H))({value:r(a),characters:"********",start:4})),1)])),[[g,r(a)]]),de])):P("",!0)]))),128))])]),_:1},8,["model-value"])]),_:1})}}});export{ke as default};
