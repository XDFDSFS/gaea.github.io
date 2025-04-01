import{_ as P,E as R,a as k}from"./el-scrollbar.a5aeed16.js";import{E as B}from"./el-select.0d9a4a6c.js";import{E as z}from"./el-overlay.f9f46384.js";import{_ as A}from"./client-only.9d603998.js";import{d as L,r as E,L as b,o as c,C as _,m as r,l,b as m,B as V,e as o,k as v,t as J,c as U}from"./entry.f2efeee4.js";import"./el-checkbox.6703faf4.js";import"./el-popper.da74467e.js";import"./el-input.f7d47e7b.js";import{v as H}from"./el-loading.0c1d8459.js";import{t as $}from"./metamask.d55703a3.js";import{i as j}from"./dict.de289b0f.js";import{_ as q}from"./plugin-vueexport-helper.c27b6911.js";import"./event.4e3bc3a9.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";import"./el-button.ed9095c3.js";import"./ethers.0cf7be83.js";import"./godhood.fb9487a0.js";import"./user.1ee6c517.js";import"./verification.856d912b.js";import"./godhead.34e2a924.js";import"./request.9f8f1c11.js";import"./validator.517b8afe.js";import"./focus-trap.19bf41a1.js";const F={class:"max-h-[90vh] overflow-hidden flex flex-col mt-5"},G={class:"w-full mt-4"},K={key:0,class:"w-full flex items-center justify-end mt-4 px-10"},M=L({__name:"PointRecord",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(Q,{emit:h}){const d=E([]),i=E(!1),e=b({page:1,limit:10,active:!1}),a=b(JSON.parse(localStorage.getItem("TABLE_POINT_RECORD")||JSON.stringify({content:[],totalElements:0}))),S=()=>{const t=new Date,n=new Date(t);n.setDate(t.getDate()-30),d.value=[n.toISOString().split("T")[0],t.toISOString().split("T")[0]]},u=()=>{e.page=1,e.limit=10,a.content=[],a.totalElements=0,d.value=[],h("update:closeDialog")},x=t=>{e.page=t,g()},D=t=>{e.limit=t,g()},y=()=>{S(),a.content=JSON.parse(localStorage.getItem("TABLE_POINT_RECORD")||"[]").content,a.totalElements=JSON.parse(localStorage.getItem("TABLE_POINT_RECORD")||"[]").totalElements,g()},g=async()=>{try{if(d.value){i.value=!0;const t=await $(e.page,e.limit);i.value=!1,t&&t&&t.code===200&&(a.content=t.data,a.totalElements=t.total,localStorage.setItem("TABLE_POINT_RECORD",JSON.stringify({content:t.data,totalElements:t.total})))}}catch{i.value=!1}};return(t,n)=>{const O=P,p=R,T=k,w=B,C=z,N=A,I=H;return c(),_(N,null,{default:r(()=>[l(C,{class:"border-box",draggable:"","model-value":t.$props.dialogVisible,"show-close":!1,width:"750px",style:{background:"rgba(255, 255, 255, 0.08)","backdrop-filter":"blur(15px)",border:"none","border-radius":"10px","padding-bottom":"10px"},"align-center":"",onClose:u,onOpen:y},{default:r(()=>{var f;return[m("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:u}),m("div",F,[m("div",G,[V((c(),_(T,{data:o(a).content,style:{width:"100%"},"max-height":"400px"},{empty:r(()=>[o(i)?v("",!0):(c(),_(O,{key:0,title:"No records available at the moment"}))]),default:r(()=>[l(p,{prop:"date",label:"DATE","min-width":"130px",align:"center"}),l(p,{prop:"description",label:"DESCRIPTION","min-width":"130px","show-overflow-tooltip":"",align:"center"}),l(p,{prop:"points",label:"POINTS","min-width":"130px",align:"center"}),l(p,{prop:"status",label:"STATUS","min-width":"130px",align:"center"},{default:r(s=>[m("span",null,J(("integralStatus"in t?t.integralStatus:o(j))(s.row.status).description),1)]),_:1})]),_:1},8,["data"])),[[I,o(i)]])]),((f=o(a).content)==null?void 0:f.length)!==0?(c(),U("div",K,[l(w,{"current-page":o(e).page,"onUpdate:currentPage":n[0]||(n[0]=s=>o(e).page=s),background:"",size:"small","page-size":o(e).limit,"onUpdate:pageSize":n[1]||(n[1]=s=>o(e).limit=s),"page-sizes":[10,20,50,100],layout:"total, prev, pager, next,sizes",total:o(a).totalElements,onCurrentChange:x,onSizeChange:D},null,8,["current-page","page-size","total"])])):v("",!0)])]}),_:1},8,["model-value"])]),_:1})}}});const vt=q(M,[["__scopeId","data-v-f5459423"]]);export{vt as default};
