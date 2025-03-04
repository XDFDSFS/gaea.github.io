import{_ as V,E as $,a as A}from"./el-scrollbar.4ab05465.js";import{E as H}from"./el-popper.abdd7a3d.js";import{E as j}from"./el-select.95fdfe9a.js";import{E as L}from"./el-overlay.95963552.js";import{_ as M}from"./client-only.b2c121de.js";import{d as Y,r as q,M as x,o as l,B as c,m as n,l as p,b as i,A as F,e as o,k as v,t as m,c as E,i as g}from"./entry.38b91c68.js";import"./el-checkbox.6db892ea.js";import"./el-input.7eda8c8b.js";import{v as G}from"./el-loading.edda49b2.js";import{u as J}from"./user.0d619d1e.js";import{l as K}from"./godhead.84b450df.js";import{h as Q}from"./gaeaAIEmotion.7117b4a8.js";import{e as W,g as b,a as y}from"./dict.0cf4a056.js";import{_ as X}from"./plugin-vueexport-helper.c27b6911.js";import"./event.ee639c25.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";import"./debounce.d38b7e9a.js";import"./el-button.90b23ac7.js";import"./focus-trap.e8e79e4e.js";import"./ethers.71123aa3.js";import"./godhood.210b8630.js";import"./verification.856d912b.js";import"./validator.7c10fef5.js";import"./request.b5d2ea86.js";const Z={class:"max-h-[90vh] overflow-hidden flex flex-col"},ee={class:"w-full mt-4"},te={class:"text-[#EBEBEB]"},oe={key:0,class:"uppercase text-[#EBEBEB]"},ae={key:1,class:"uppercase text-[#EBEBEB]"},ne={class:"text-[#EBEBEB]"},re={key:0,class:"w-full flex items-center justify-end mt-4 px-10"},ie=Y({__name:"EmotionRecord",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(se,{emit:S}){const _=J(),s=q(!1),a=x({page:1,limit:10}),r=x({content:[],totalElements:0}),B=()=>{a.page=1,a.limit=10,r.content=[],r.totalElements=0,S("update:closeDialog")},N=e=>{a.page=e,f()},k=e=>{a.limit=e,f()},C=()=>{f()},z=async()=>{try{s.value=!0;const e=await K(a.page,a.limit);s.value=!1,e&&e&&e.code===200&&(r.content=e.data,r.totalElements=e.total)}catch(e){console.log(e),s.value=!1}},D=async()=>{try{s.value=!0;const e=await Q(a.page,a.limit);s.value=!1,e&&e&&e.code===200&&(r.content=e.data,r.totalElements=e.total)}catch(e){console.log(e),s.value=!1}},f=()=>{_.getUserInfo.role==="user"?z():D()};return(e,d)=>{const T=V,u=$,h=H,O=A,P=j,U=L,I=M,R=G;return l(),c(I,null,{default:n(()=>[p(U,{class:"border-box",draggable:"","model-value":e.$props.dialogVisible,"show-close":!1,width:"750px",style:{background:"rgba(255, 255, 255, 0.08)","backdrop-filter":"blur(15px)",border:"none","border-radius":"10px","padding-bottom":"10px"},"align-center":"",onClose:B,"append-to-body":!0,onOpen:C},{default:n(()=>{var w;return[i("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:B}),i("div",Z,[i("div",ee,[F((l(),c(O,{data:o(r).content,style:{width:"100%"},"max-height":"400px"},{empty:n(()=>[o(s)?v("",!0):(l(),c(T,{key:0,title:"No records available at the moment"}))]),default:n(()=>[p(u,{prop:"date",label:"DATE","min-width":"130px",align:"center"},{default:n(t=>[i("span",te,m(t.row.date),1)]),_:1}),p(u,{prop:"soul",label:"TYPE","min-width":"130px",align:"center"},{default:n(t=>[o(_).getUserInfo.role==="user"?(l(),E("span",oe,m(t.row.soul>1?"on chain":"NOTE"),1)):(l(),E("span",ae,m(("soulRewardSource_"in e?e.soulRewardSource_:o(W))(t.row.type,t.row.status)),1))]),_:1}),p(u,{prop:"detail",label:"EMOTION","min-width":"130px",align:"center"},{default:n(t=>[o(_).getUserInfo.role==="user"?(l(),c(h,{key:0,placement:"right-start",effect:"customized"},{content:n(()=>[i("div",{class:g(["w-fit text-[#EBEBEB] p-2 text-[16px]",`${t.row.detail.split("_")[1]}`])},m(t.row.detail.split("_")[1]),3)]),default:n(()=>[i("div",{class:g(["w-[50px] flex items-center justify-center h-5 cursor-pointer rounded-[3px] mx-auto",`${t.row.detail.split("_")[1]}`])},null,2)]),_:2},1024)):(l(),c(h,{key:1,placement:"right-start",effect:"customized"},{content:n(()=>[i("div",{class:g(["w-fit text-[#EBEBEB] p-2 text-[16px]",` ${("getStringByNumber"in e?e.getStringByNumber:o(b))(("getNumberByString_"in e?e.getNumberByString_:o(y))(t.row.detail,0))}`])},m(("getStringByNumber"in e?e.getStringByNumber:o(b))(("getNumberByString_"in e?e.getNumberByString_:o(y))(t.row.detail,0))),3)]),default:n(()=>[i("div",{class:g(["w-[50px] flex items-center justify-center h-5 cursor-pointer rounded-[3px] mx-auto",`${("getStringByNumber"in e?e.getStringByNumber:o(b))(("getNumberByString_"in e?e.getNumberByString_:o(y))(t.row.detail,0))}`])},null,2)]),_:2},1024))]),_:1}),p(u,{prop:"soul",label:"SOUL POINTS","min-width":"130px",align:"center"},{default:n(t=>[i("span",ne,m(t.row.soul),1)]),_:1})]),_:1},8,["data"])),[[R,o(s)]])]),((w=o(r).content)==null?void 0:w.length)!==0?(l(),E("div",re,[p(P,{"current-page":o(a).page,"onUpdate:currentPage":d[0]||(d[0]=t=>o(a).page=t),background:"",size:"small","page-size":o(a).limit,"onUpdate:pageSize":d[1]||(d[1]=t=>o(a).limit=t),"page-sizes":[10,20,50,100],layout:"total, prev, pager, next,sizes",total:o(r).totalElements,onCurrentChange:N,onSizeChange:k},null,8,["current-page","page-size","total"])])):v("",!0)])]}),_:1},8,["model-value"])]),_:1})}}});const Oe=X(ie,[["__scopeId","data-v-e734f0c2"]]);export{Oe as default};
