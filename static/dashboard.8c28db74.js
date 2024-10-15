import{d as I,r as i,u as A,o as O,n as V,a as u,c as R,b as c,e,f as v,w as D,g as a,E as x,h as s,_ as r}from"./entry.fd3f1e90.js";import{_ as B}from"./Btn.vuevuetypescriptsetuptruelang.2ee057a3.js";import{e as F,d as M}from"./dashboard.3bbf6b00.js";import{n as E}from"./ping.fd06b65c.js";import{t as H}from"./throttle.a1e10328.js";import"./el-button.f4261407.js";import"./use-form-item.dc2e6d51.js";import"./utils.d8b42fb8.js";import"./dict.d5728e61.js";import"./referral.99a87f34.js";const $=s(()=>r(()=>import("./NoNetworkPing.c4a0a15e.js"),["./NoNetworkPing.c4a0a15e.js","./entry.fd3f1e90.js","./entry.2b64dd0c.css"],import.meta.url).then(t=>t.default||t)),j=s(()=>r(()=>import("./NetworkPing.68c0da2f.js"),["./NetworkPing.68c0da2f.js","./el-input.02296272.js","./entry.fd3f1e90.js","./entry.2b64dd0c.css","./use-form-item.dc2e6d51.js","./el-input.c43a23be.css","./dashboard.3bbf6b00.js"],import.meta.url).then(t=>t.default||t)),K=s(()=>r(()=>import("./EarnInfoCard.5c4fb552.js"),["./EarnInfoCard.5c4fb552.js","./bi.dd890321.js","./entry.fd3f1e90.js","./entry.2b64dd0c.css"],import.meta.url).then(t=>t.default||t)),S=s(()=>r(()=>import("./Map.d8957421.js"),["./Map.d8957421.js","./client-only.bab1b30b.js","./entry.fd3f1e90.js","./entry.2b64dd0c.css","./dashboard.3bbf6b00.js","./Map.2eb68a26.css"],import.meta.url).then(t=>t.default||t)),U=s(()=>r(()=>import("./EarningsStatistics.8134ef18.js"),["./EarningsStatistics.8134ef18.js","./commonjsHelpers.c32fecef.js","./entry.fd3f1e90.js","./entry.2b64dd0c.css","./el-button.f4261407.js","./use-form-item.dc2e6d51.js","./el-button.2e70eb9e.css","./el-input.02296272.js","./el-input.c43a23be.css","./isEqual.3081ff54.js","./statistical-table.8eeda32f.js","./focus-trap.4a590bbc.js","./statistical-table.36582aa6.css","./debounce.f0ebf63c.js","./dashboard.3bbf6b00.js","./EarningsStatistics.04dc15e9.css"],import.meta.url).then(t=>t.default||t)),Y=s(()=>r(()=>import("./YourNetworks.0b26e479.js"),["./YourNetworks.0b26e479.js","./statistical-table.8eeda32f.js","./entry.fd3f1e90.js","./entry.2b64dd0c.css","./el-input.02296272.js","./use-form-item.dc2e6d51.js","./el-input.c43a23be.css","./focus-trap.4a590bbc.js","./statistical-table.36582aa6.css","./commonjsHelpers.c32fecef.js","./-initCloneObject.e9d915eb.js","./el-checkbox.5ba35eff.js","./isEqual.3081ff54.js","./el-checkbox.3ca32550.css","./debounce.f0ebf63c.js","./el-button.f4261407.js","./el-button.2e70eb9e.css","./validator.de7b8815.js","./dashboard.3bbf6b00.js","./YourNetworks.013af945.css"],import.meta.url).then(t=>t.default||t)),q={class:"w-full h-full flex flex-col space-y-5 overflow-auto px-20"},G={class:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-3"},J={class:"col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-2"},Q={class:"w-full h-full min-h-[250px] bg-[#0F0F0F] rounded-lg flex items-center justify-center px-6 py-4 space-x-10 shadow-3d"},W={class:"flex flex-col space-y-3"},it=I({__name:"dashboard",setup(t){const _=i(),l=i([]),n=A(),d=i(!1),p=i(0),w=async()=>{try{const o=await F();o.code===200&&(_.value=o.data)}catch(o){console.log(o)}},m=async()=>{try{const o=await M(0,10,!0);o.code===200&&(l.value=o.data)}catch(o){console.log(o)}},P=async()=>{try{d.value=!0,await E()&&(p.value+=1,await m(),n.setPingIntervalTime(E),n.setDisconnect(!1))}catch{x.error("Connection error, please try again later")}finally{d.value=!1}},k=()=>{n.setDisconnect(!0),x.success("Disconnect the connection"),n.clearPingIntervalTime()};return O(async()=>{await V(),await Promise.all([m(),w()])}),(o,f)=>{var g,y;const C=B,N=$,T=j,h=K,b=S,z=U,L=Y;return u(),R("div",q,[c("div",G,[c("div",J,[c("div",Q,[e(l).length===0||e(n).getDisconnect===!0?(u(),v(N,{key:0},{default:D(()=>[a(C,{title:"CONNECT",bg:"#D9AF80",hoverTitle:"CONNECT",onClickHandle:f[0]||(f[0]=X=>("throttle"in o?o.throttle:e(H))(()=>{P()})),loading:e(d)},null,8,["loading"])]),_:1})):(u(),v(T,{key:1,data:e(l)},{default:D(()=>[c("span",{class:"px-2 rounded bg-[#303035] text-[#DCDCDC] cursor-pointer",onClick:k},"Disconnect")]),_:1},8,["data"]))])]),c("div",W,[a(h,{num:(g=e(_))==null?void 0:g.today_total},null,8,["num"]),a(h,{icon:"total",title:"Total's Points",num:(y=e(_))==null?void 0:y.total_total},null,8,["num"])]),a(b,{data:e(n).getDisconnect===!0?[]:e(l),class:"col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"},null,8,["data"])]),a(z),a(L,{refresh:e(p)},null,8,["refresh"])])}}});export{it as default};
