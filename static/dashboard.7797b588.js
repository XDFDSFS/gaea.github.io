import{d as L,r as i,o as I,n as A,a as u,c as O,b as c,u as e,e as v,w as D,f as a,E as V,g as s,_ as r}from"./entry.99aeaaf8.js";import{_ as R}from"./Btn.vue.1173d430.js";import{u as B}from"./user.a1692524.js";import{e as F,d as M}from"./dashboard.f8b1dfcf.js";import{n as x}from"./ping.79873541.js";import{t as H}from"./throttle.fadae6af.js";import"./request.49292630.js";import"./utils.10eed9a0.js";import"./referral.903c33a9.js";import"./use-form-item.795ba0d3.js";const $=s(()=>r(()=>import("./NoNetworkPing.ad1ed452.js"),["./NoNetworkPing.ad1ed452.js","./entry.99aeaaf8.js","./entry.0de52ed3.css"],import.meta.url).then(t=>t.default||t)),j=s(()=>r(()=>import("./NetworkPing.2833e3f5.js"),["./NetworkPing.2833e3f5.js","./entry.99aeaaf8.js","./entry.0de52ed3.css"],import.meta.url).then(t=>t.default||t)),K=s(()=>r(()=>import("./EarnInfoCard.598e7deb.js"),["./EarnInfoCard.598e7deb.js","./bi.60bf271c.js","./entry.99aeaaf8.js","./entry.0de52ed3.css"],import.meta.url).then(t=>t.default||t)),S=s(()=>r(()=>import("./Map.7358bb45.js"),["./Map.7358bb45.js","./entry.99aeaaf8.js","./entry.0de52ed3.css","./dashboard.f8b1dfcf.js","./request.49292630.js","./user.a1692524.js"],import.meta.url).then(t=>t.default||t)),U=s(()=>r(()=>import("./EarningsStatistics.150cc237.js"),["./EarningsStatistics.150cc237.js","./el-input.20f5167a.js","./entry.99aeaaf8.js","./entry.0de52ed3.css","./use-form-item.795ba0d3.js","./el-input.c43a23be.css","./throttle.fadae6af.js","./throttle.2e70eb9e.css","./isEqual.115ab8a7.js","./statistical_table.732b8318.js","./focus-trap.f6a513c0.js","./statistical_table.36582aa6.css","./debounce.45b48d88.js","./dashboard.f8b1dfcf.js","./request.49292630.js","./user.a1692524.js","./EarningsStatistics.04dc15e9.css"],import.meta.url).then(t=>t.default||t)),Y=s(()=>r(()=>import("./YourNetworks.a71bdad7.js"),["./YourNetworks.a71bdad7.js","./statistical_table.732b8318.js","./entry.99aeaaf8.js","./entry.0de52ed3.css","./el-input.20f5167a.js","./use-form-item.795ba0d3.js","./el-input.c43a23be.css","./focus-trap.f6a513c0.js","./statistical_table.36582aa6.css","./initCloneObject.a37c011d.js.js","./el-checkbox.e4b7e94e.js","./isEqual.115ab8a7.js","./el-checkbox.3ca32550.css","./debounce.45b48d88.js","./throttle.fadae6af.js","./throttle.2e70eb9e.css","./validator.53f4e0c9.js","./dashboard.f8b1dfcf.js","./request.49292630.js","./user.a1692524.js","./YourNetworks.013af945.css"],import.meta.url).then(t=>t.default||t)),q={class:"w-full h-full flex flex-col space-y-5 overflow-auto"},G={class:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-3"},J={class:"col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-2"},Q={class:"w-full h-full min-h-[250px] bg-[#0F0F0F] rounded-lg flex items-center justify-center px-6 py-4 space-x-10 shadow-3d"},W={class:"flex flex-col space-y-3"},it=L({__name:"dashboard",setup(t){const _=i(),l=i([]),n=B(),d=i(!1),p=i(0),w=async()=>{try{const o=await F();o.code===200&&(_.value=o.data)}catch(o){console.log(o)}},m=async()=>{try{const o=await M(0,10,!0);o.code===200&&(l.value=o.data)}catch(o){console.log(o)}},E=async()=>{d.value=!0,await x(),d.value=!1,p.value+=1,await m(),n.setPingIntervalTime(x),n.setDisconnect(!1)},k=()=>{n.setDisconnect(!0),V.success("Disconnect the connection"),n.clearPingIntervalTime()};return I(async()=>{await A(),await m(),await w()}),(o,f)=>{var h,y;const P=R,C=$,N=j,g=K,T=S,b=U,z=Y;return u(),O("div",q,[c("div",G,[c("div",J,[c("div",Q,[e(l).length===0||e(n).getDisconnect===!0?(u(),v(C,{key:0},{default:D(()=>[a(P,{title:"CONNECT",bg:"#D9AF80",hoverTitle:"CONNECT",onClickHandle:f[0]||(f[0]=X=>("throttle"in o?o.throttle:e(H))(()=>{E()})),loading:e(d)},null,8,["loading"])]),_:1})):(u(),v(N,{key:1,data:e(l)},{default:D(()=>[c("span",{class:"px-2 rounded bg-[#303035] text-[#DCDCDC] cursor-pointer",onClick:k},"Disconnect")]),_:1},8,["data"]))])]),c("div",W,[a(g,{num:(h=e(_))==null?void 0:h.today_total},null,8,["num"]),a(g,{icon:"total",title:"Total's Points",num:(y=e(_))==null?void 0:y.total_total},null,8,["num"])]),a(T,{class:"col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2",data:e(n).getDisconnect===!0?[]:e(l)},null,8,["data"])]),a(b),a(z,{refresh:e(p)},null,8,["refresh"])])}}});export{it as default};
