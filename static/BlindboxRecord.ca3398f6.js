import{_ as k,E as I,a as A}from"./el-scrollbar.5ef469b6.js";import{E as T}from"./el-select.28e240d9.js";import{E as L}from"./el-overlay.d2ee4aec.js";import{_ as V}from"./client-only.66ca7f21.js";import{d as J,r as f,H as b,o as c,B as g,q as l,m as i,b as r,A as P,e as n,l as E,t as x,c as R}from"./entry.f70eada7.js";import"./el-checkbox.5e4a91f0.js";import"./el-popper.babb7146.js";import"./el-form.050da9ce.js";import{v as X}from"./el-loading.1a5b07d9.js";import{m as U}from"./godhead.407dc4b4.js";import"./event.4aec927b.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";import"./Refresh.080ac90e.js";import"./el-button.2b7f6acd.js";import"./metamask.d6489cb7.js";import"./request.c5f78ceb.js";import"./user.28c2b100.js";import"./godhood.6fe2e3e7.js";import"./focus-trap.c0bd6161.js";const H={class:"max-h-[90vh] overflow-hidden flex flex-col"},$={class:"w-full mt-4"},j={key:0,class:"w-full flex items-center justify-end mt-4 px-10"},me=J({__name:"BlindboxRecord",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(q,{emit:h}){const B=f([]),s=f(!1),o=b({page:1,page_size:10}),a=b(JSON.parse(localStorage.getItem("TABLE_BIND_BOX")||JSON.stringify({content:[],totalElements:0}))),_=()=>{o.page=1,o.page_size=10,a.content=[],a.totalElements=0,h("update:closeDialog")},v=e=>{o.page=e,m()},w=e=>{o.page_size=e,m()},y=()=>{a.content=JSON.parse(localStorage.getItem("TABLE_BIND_BOX")||"[]").content,a.totalElements=JSON.parse(localStorage.getItem("TABLE_BIND_BOX")||"[]").totalElements,m()},m=async()=>{try{if(B.value){s.value=!0;const e=await U(o.page,o.page_size);s.value=!1,e&&e&&e.code===200&&(a.content=e.data,a.totalElements=e.total,localStorage.setItem("TABLE_BIND_BOX",JSON.stringify({content:e.data,totalElements:e.total})))}}catch{s.value=!1}};return(e,p)=>{const D=k,d=I,z=A,N=T,S=L,O=V,C=X;return c(),g(O,null,{default:l(()=>[i(S,{class:"border-box",draggable:"","model-value":e.$props.dialogVisible,"show-close":!1,width:"750px",style:{background:"black","border-radius":"10px","padding-bottom":"10px"},"align-center":"",onClose:_,onOpen:y},{default:l(()=>{var u;return[r("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:_}),r("div",H,[r("div",$,[P((c(),g(z,{data:n(a).content,style:{width:"100%"},"max-height":"400px"},{empty:l(()=>[n(s)?E("",!0):(c(),g(D,{key:0,title:"No records available at the moment"}))]),default:l(()=>[i(d,{prop:"updated_time",label:"DATE","min-width":"130px",align:"center"}),i(d,{prop:"type",label:"TYPE","min-width":"130px",align:"center"},{default:l(t=>[r("span",null,x(t.row.type===1?"GodHood ID":t.row.type===2?"Check-in":t.row.type===3?"Referral":"Event"),1)]),_:1}),i(d,{prop:"usd",label:"REWARD","min-width":"130px",align:"center"},{default:l(t=>[r("span",null,x(t.row.usd.toFixed(0)>0?t.row.usd+"USD":t.row.diamond+"Soul"),1)]),_:1})]),_:1},8,["data"])),[[C,n(s)]])]),((u=n(a).content)==null?void 0:u.length)!==0?(c(),R("div",j,[i(N,{"current-page":n(o).page,"onUpdate:currentPage":p[0]||(p[0]=t=>n(o).page=t),background:"",size:"small","page-size":n(o).page_size,"onUpdate:pageSize":p[1]||(p[1]=t=>n(o).page_size=t),"page-sizes":[10,20,50,100],layout:"total, prev, pager, next,sizes",total:n(a).totalElements,onCurrentChange:v,onSizeChange:w},null,8,["current-page","page-size","total"])])):E("",!0)])]}),_:1},8,["model-value"])]),_:1})}}});export{me as default};