import{B as j,f as t,g as n,C as q,w as y}from"./entry.c70ce651.js";const H=j("user",()=>{const a=t(""),l=t({}),u=t(""),v=t(!0),o=t(3e4),s=t(null),r=t(null),I=t(),g=t("1.0.1"),c=t(!1),f=n(()=>a.value),p=n(()=>l.value),w=n(()=>u.value),P=n(()=>v.value),U=n(()=>o.value),m=n(()=>s.value),k=n(()=>r.value),B=n(()=>I.value),C=n(()=>g.value),S=n(()=>c.value),T=e=>{a.value=e},V=e=>{v.value=e},h=e=>{u.value=e},x=e=>{l.value=e},D=e=>{I.value=e},_=e=>{g.value=e},b=e=>{c.value=e},A=e=>{o.value=e},N=e=>{s.value=e},O=e=>{r.value=e},W=e=>{i();const d=()=>{s.value=setInterval(()=>{e()},o.value)};d(),y(o,(E,F)=>{i(),d()})},i=()=>{s.value&&(clearInterval(s.value),s.value=null)};return{token:a,userInfo:l,pingInfo:r,uuidv4:u,interval:o,version:g,updateBrowserId:c,pingIntervalId:s,disconnect:v,invitationCode:I,getToken:f,getUserInfo:p,getUuidv4:w,getPingInfo:k,getDisconnect:P,getPingIntervalId:m,getPingInterval:U,getInvitationCode:B,getVersion:C,getUpdateBrowserId:S,setInvitationCode:D,setVersion:_,setUpdateBrowserId:b,setToken:T,setUserInfo:x,setUuidv4:h,setDisconnect:V,setPingInfo:O,setPingIntervalId:N,clearUserInfo:()=>{a.value="",u.value="",v.value=!0,l.value={},i(),o.value=3e4,localStorage.setItem("gaea_token",""),localStorage.setItem("browser_id",""),r.value=null,c.value=!1},setPingInterval:A,setPingIntervalTime:W,clearPingIntervalTime:i}},{persist:[{paths:["token","userInfo","uuidv4","disconnect","interval","pingIntervalId","invitationCode","pingInfo","version","updateBrowserId"],storage:q.cookiesWithOptions({maxAge:604800})}]});export{H as u};