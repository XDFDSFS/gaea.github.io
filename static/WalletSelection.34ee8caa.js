import C from"./Obk.74fbb649.js";import w from"./phantom.6b1cfd63.js";import W from"./Metamask.e3438604.js";import{E as V}from"./el-overlay.af1c623b.js";import{_ as A}from"./client-only.124721c9.js";import{d as O,r as d,o as t,B as r,q as E,m as M,b as e,c as u,F as N,C as P,e as l,l as i,t as h}from"./entry.220f4f03.js";import{u as j}from"./godhood.16f8747a.js";import{a as F,e as I}from"./ethers.9f6d307d.js";import"./focus-trap.3a2f9190.js";import"./event.35f26023.js";import"./el-button.57d8d1ab.js";import"./user.87606a22.js";import"./verification.64b14b7b.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";const S={class:"w-full space-x-1 space-y-3 px-4 z-[10] mx-auto"},$=e("span",{class:"text-[#EBEBEB] text-[14px]"},"Connect",-1),q={class:"w-full border border-[#2E2E2E] rounded-[9px] h-8 flex items-center justify-between px-4 hover:scale-[1.05] duration-700"},z={class:"flex items-center justify-center space-x-2"},G={class:"text-[#B0B0B0] text-[12px] font-[400]"},K=["onClick"],L={key:0,class:"iconfont icon-tick text-green-400"},ce=O({__name:"WalletSelection",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog","update:success"],setup(X,{emit:_}){const m=d([]),n=d(),f=j(),o=d(),p=()=>{_("update:closeDialog"),n.value=null,o.value=null},g=async()=>{const s=await F();m.value=s||[]},k=async(s,x)=>{n.value=x,o.value=await I(s),o.value&&(f.setAccountsWalletAddress(o.value),f.setAccountWalletItem(s),n.value=null,_("update:success"),p())};return(s,x)=>{const v=C,b=w,D=W,y=V,B=A;return t(),r(B,null,{default:E(()=>[M(y,{class:"border-box",draggable:"","model-value":s.$props.dialogVisible,"show-close":!1,width:"389px",style:{background:"black","border-radius":"10px","padding-bottom":"10px"},"align-center":"",onClose:p,onOpen:g},{default:E(()=>[e("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:p}),e("div",S,[$,(t(!0),u(N,null,P(l(m),(a,c)=>(t(),u("div",{class:"space-y-1",key:c},[e("div",q,[e("div",z,[a.name==="OKX Wallet"?(t(),r(v,{key:0,color:"#EDEDED"})):i("",!0),a.name==="Phantom"?(t(),r(b,{key:1,color:"#EDEDED"})):i("",!0),a.name==="MetaMask"?(t(),r(D,{key:2,color:"#EDEDED"})):i("",!0),e("span",G,h(a.name),1)]),e("span",{class:"text-[#EBEBEB] text-[10px] cursor-pointer hover:underline underline-offset-4 duration-500 flex items-center space-x-1",onClick:H=>k(a,c)},[e("span",null,h(l(n)===c&&l(o)?"Connected":"Connect"),1),l(n)===c&&l(o)?(t(),u("span",L)):i("",!0)],8,K)])]))),128))])]),_:1},8,["model-value"])]),_:1})}}});export{ce as default};