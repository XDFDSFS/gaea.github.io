import{_ as k,E as B,a as T}from"./el-scrollbar.27ff8ced.js";import{E as z}from"./el-select.7fc6250c.js";import{E as R}from"./el-overlay.1d4579a3.js";import{_ as A}from"./client-only.c653ec78.js";import{d as U,r as f,H as E,o as c,A as d,m as s,l as i,b as g,z as V,e as a,k as b,G as P,t as I,c as J}from"./entry.c83031a7.js";import"./el-checkbox.64c38f81.js";import"./el-popper.366d028b.js";import"./el-input.eddbbf96.js";import{v as $}from"./el-loading.90c2f695.js";import{m as j}from"./godhead.bc5f1c97.js";import"./event.2c073216.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";import"./-initCloneObject.4b6762fc.js";import"./debounce.fd45d794.js";import"./el-button.3d193328.js";import"./validator.36d154ec.js";import"./focus-trap.6b69e0dc.js";import"./isNil.c75b1b34.js";import"./request.2e4904dc.js";import"./user.a968ca00.js";import"./godhood.8bf4bbca.js";const G={class:"max-h-[90vh] overflow-hidden flex flex-col"},H={class:"w-full mt-4"},M={key:0,class:"w-full flex items-center justify-end mt-4 px-10"},_t=U({__name:"SoulRecord",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(Y,{emit:h}){const x=f([]),l=f(!1),e=E({page:1,limit:10}),o=E(JSON.parse(localStorage.getItem("TABLE_SOUL_RECORD")||JSON.stringify({content:[],totalElements:0}))),_=()=>{e.page=1,e.limit=10,o.content=[],o.totalElements=0,h("update:closeDialog")},S=t=>{e.page=t,p()},y=t=>{e.limit=t,p()},v=async()=>{o.content=JSON.parse(localStorage.getItem("TABLE_SOUL_RECORD")||"[]").content,o.totalElements=JSON.parse(localStorage.getItem("TABLE_SOUL_RECORD")||"[]").totalElements,await p()},p=async()=>{try{if(x.value){l.value=!0;const t=await j(e.page,e.limit);l.value=!1,t&&t&&t.code===200&&(o.content=t.data,o.totalElements=t.total,localStorage.setItem("TABLE_SOUL_RECORD",JSON.stringify({content:t.data,totalElements:t.total})))}}catch{l.value=!1}};return(t,r)=>{const O=k,m=B,C=T,D=z,w=R,L=A,N=$;return c(),d(L,null,{default:s(()=>[i(w,{class:"border-box",draggable:"","model-value":t.$props.dialogVisible,"show-close":!1,width:"750px",style:{background:"black","border-radius":"10px","padding-bottom":"10px"},"align-center":"",onClose:_,onOpen:v},{default:s(()=>{var u;return[g("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:_}),g("div",G,[g("div",H,[V((c(),d(C,{data:a(o).content,style:{width:"100%"},"max-height":"400px"},{empty:s(()=>[a(l)?b("",!0):(c(),d(O,{key:0,title:"No records available at the moment"}))]),default:s(()=>[i(m,{prop:"updated",label:"DATE","min-width":"130px",align:"center"}),i(m,{prop:"type",label:"TYPE","min-width":"130px",align:"center"},{default:s(n=>[P(I(n.row.type===1?"checked in":"Mystery Box"),1)]),_:1}),i(m,{prop:"soul",label:"SOUL POINTS","min-width":"130px",align:"center"})]),_:1},8,["data"])),[[N,a(l)]])]),((u=a(o).content)==null?void 0:u.length)!==0?(c(),J("div",M,[i(D,{"current-page":a(e).page,"onUpdate:currentPage":r[0]||(r[0]=n=>a(e).page=n),background:"",size:"small","page-size":a(e).limit,"onUpdate:pageSize":r[1]||(r[1]=n=>a(e).limit=n),"page-sizes":[10,20,50,100],layout:"total, prev, pager, next,sizes",total:a(o).totalElements,onCurrentChange:S,onSizeChange:y},null,8,["current-page","page-size","total"])])):b("",!0)])]}),_:1},8,["model-value"])]),_:1})}}});export{_t as default};
