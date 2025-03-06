import{_ as U,E as k,a as N}from"./el-scrollbar.fa8c90a9.js";import{E as z}from"./el-select.937afd0c.js";import{E as T}from"./el-overlay.87ec9577.js";import{_ as A}from"./client-only.09abea6d.js";import{d as L,r as f,K as b,o as p,B as _,m as s,l as i,b as c,A as V,e as a,k as E,t as I,c as J}from"./entry.2548f2a2.js";import"./el-checkbox.9370e192.js";import"./el-popper.5a969d92.js";import"./el-input.381899f3.js";import{v as P}from"./el-loading.1e653e1f.js";import{u as $}from"./godhead.9db5f6fd.js";import{_ as j}from"./plugin-vueexport-helper.c27b6911.js";import"./event.0b4bd4dd.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";import"./debounce.80a6d9c7.js";import"./el-button.ab67310a.js";import"./ethers.25604e58.js";import"./godhood.c23ffbf9.js";import"./user.c5c80964.js";import"./verification.856d912b.js";import"./validator.6045ba26.js";import"./focus-trap.ca4bfd80.js";import"./request.2b8ecaef.js";const K={class:"max-h-[90vh] overflow-hidden flex flex-col"},M={class:"w-full mt-4"},Y={key:0,class:"w-full flex items-center justify-end mt-4 px-10"},q=L({__name:"UsdRecord",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(F,{emit:x}){const h=f([]),l=f(!1),e=b({page:1,limit:10}),o=b(JSON.parse(localStorage.getItem("TABLE_USD_RECORD")||JSON.stringify({content:[],totalElements:0}))),g=()=>{e.page=1,e.limit=10,o.content=[],o.totalElements=0,x("update:closeDialog")},v=t=>{e.page=t,m()},y=t=>{e.limit=t,m()},D=()=>{o.content=JSON.parse(localStorage.getItem("TABLE_USD_RECORD")||"[]").content,o.totalElements=JSON.parse(localStorage.getItem("TABLE_USD_RECORD")||"[]").totalElements,m()},m=async()=>{try{if(h.value){l.value=!0;const t=await $(e.page,e.limit);l.value=!1,t&&t&&t.code===200&&(o.content=t.data,o.totalElements=t.total,localStorage.setItem("TABLE_USD_RECORD",JSON.stringify({content:t.data,totalElements:t.total})))}}catch(t){console.log(t),l.value=!1}};return(t,r)=>{const S=U,d=k,C=N,w=z,R=T,B=A,O=P;return p(),_(B,null,{default:s(()=>[i(R,{class:"border-box",draggable:"","model-value":t.$props.dialogVisible,"show-close":!1,width:"750px",style:{background:"rgba(255, 255, 255, 0.08)","backdrop-filter":"blur(15px)",border:"none","border-radius":"10px","padding-bottom":"10px"},"align-center":"",onClose:g,onOpen:D},{default:s(()=>{var u;return[c("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:g}),c("div",K,[c("div",M,[V((p(),_(C,{data:a(o).content,style:{width:"100%"},"max-height":"400px"},{empty:s(()=>[a(l)?E("",!0):(p(),_(S,{key:0,title:"No records available at the moment"}))]),default:s(()=>[i(d,{prop:"updated",label:"DATE","min-width":"130px",align:"center"}),i(d,{prop:"type",label:"TYPE","min-width":"130px",align:"center"},{default:s(n=>[c("span",null,I(n.row.type===1?"Referral":"Mystery Box"),1)]),_:1}),i(d,{prop:"usd",label:"USD","min-width":"130px",align:"center"})]),_:1},8,["data"])),[[O,a(l)]])]),((u=a(o).content)==null?void 0:u.length)!==0?(p(),J("div",Y,[i(w,{"current-page":a(e).page,"onUpdate:currentPage":r[0]||(r[0]=n=>a(e).page=n),background:"",size:"small","page-size":a(e).limit,"onUpdate:pageSize":r[1]||(r[1]=n=>a(e).limit=n),"page-sizes":[10,20,50,100],layout:"total, prev, pager, next,sizes",total:a(o).totalElements,onCurrentChange:v,onSizeChange:y},null,8,["current-page","page-size","total"])])):E("",!0)])]}),_:1},8,["model-value"])]),_:1})}}});const ft=j(q,[["__scopeId","data-v-b173fad5"]]);export{ft as default};
