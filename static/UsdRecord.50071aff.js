import{_ as N,E as R,a as k}from"./el-scrollbar.37d2b7fc.js";import{E as U}from"./el-select.90aa3406.js";import{E as T}from"./el-overlay.af1c623b.js";import{_ as A}from"./client-only.124721c9.js";import{d as L,r as f,H as E,o as p,B as g,q as s,m as i,b as c,A as V,e as a,l as b,t as J,c as P}from"./entry.220f4f03.js";import"./el-checkbox.3bc27618.js";import"./el-popper.9c4b3b2c.js";import"./el-form.bead7c10.js";import{v as I}from"./el-loading.c0982310.js";import{u as $}from"./godhead.446436e3.js";import"./event.35f26023.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";import"./Refresh.16cc6b7d.js";import"./el-button.57d8d1ab.js";import"./metamask.aa582aec.js";import"./request.421b2a54.js";import"./user.87606a22.js";import"./godhood.16f8747a.js";import"./focus-trap.3a2f9190.js";const j={class:"max-h-[90vh] overflow-hidden flex flex-col"},q={class:"w-full mt-4"},H={key:0,class:"w-full flex items-center justify-end mt-4 px-10"},me=L({__name:"UsdRecord",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(M,{emit:h}){const x=f([]),l=f(!1),t=E({page:1,page_size:10}),o=E(JSON.parse(localStorage.getItem("TABLE_USD_RECORD")||JSON.stringify({content:[],totalElements:0}))),_=()=>{t.page=1,t.page_size=10,o.content=[],o.totalElements=0,h("update:closeDialog")},D=e=>{t.page=e,m()},v=e=>{t.page_size=e,m()},y=()=>{o.content=JSON.parse(localStorage.getItem("TABLE_USD_RECORD")||"[]").content,o.totalElements=JSON.parse(localStorage.getItem("TABLE_USD_RECORD")||"[]").totalElements,m()},m=async()=>{try{if(x.value){l.value=!0;const e=await $(t.page,t.page_size);l.value=!1,e&&e&&e.code===200&&(o.content=e.data,o.totalElements=e.total,localStorage.setItem("TABLE_USD_RECORD",JSON.stringify({content:e.data,totalElements:e.total})))}}catch(e){console.log(e),l.value=!1}};return(e,r)=>{const S=N,d=R,C=k,z=U,w=T,B=A,O=I;return p(),g(B,null,{default:s(()=>[i(w,{class:"border-box",draggable:"","model-value":e.$props.dialogVisible,"show-close":!1,width:"750px",style:{background:"black","border-radius":"10px","padding-bottom":"10px"},"align-center":"",onClose:_,onOpen:y},{default:s(()=>{var u;return[c("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:_}),c("div",j,[c("div",q,[V((p(),g(C,{data:a(o).content,style:{width:"100%"},"max-height":"400px"},{empty:s(()=>[a(l)?b("",!0):(p(),g(S,{key:0,title:"No records available at the moment"}))]),default:s(()=>[i(d,{prop:"created_time",label:"DATE","min-width":"130px",align:"center"}),i(d,{prop:"type",label:"TYPE","min-width":"130px",align:"center"},{default:s(n=>[c("span",null,J(n.row.type===1?"Mystery Box":"Referral"),1)]),_:1}),i(d,{prop:"usd",label:"USD","min-width":"130px",align:"center"})]),_:1},8,["data"])),[[O,a(l)]])]),((u=a(o).content)==null?void 0:u.length)!==0?(p(),P("div",H,[i(z,{"current-page":a(t).page,"onUpdate:currentPage":r[0]||(r[0]=n=>a(t).page=n),background:"",size:"small","page-size":a(t).page_size,"onUpdate:pageSize":r[1]||(r[1]=n=>a(t).page_size=n),"page-sizes":[10,20,50,100],layout:"total, prev, pager, next,sizes",total:a(o).totalElements,onCurrentChange:D,onSizeChange:v},null,8,["current-page","page-size","total"])])):b("",!0)])]}),_:1},8,["model-value"])]),_:1})}}});export{me as default};
