import{bB as x,r as t,s as o,bC as H,w as K}from"./entry.c9471e81.js";const z=x("user",()=>{const l=t(""),r=t({}),s=t(""),v=t(!0),a=t(600),n=t(null),c=t(null),m=t(),S=t("1.0.1"),I=t(!1),i=t(0),u=t(),d=o(()=>l.value),T=o(()=>r.value),f=o(()=>s.value),_=o(()=>v.value),R=o(()=>a.value),E=o(()=>n.value),N=o(()=>c.value),D=o(()=>m.value),p=o(()=>S.value),O=o(()=>I.value),U=o(()=>i.value),w=o(()=>u.value),B=e=>{l.value=e},C=e=>{v.value=e},L=e=>{s.value=e},P=e=>{r.value=e},k=e=>{m.value=e},F=e=>{S.value=e},W=e=>{i.value=e},V=e=>{I.value=e},b=e=>{u.value=e},h=e=>{a.value=e},G=e=>{n.value=e},M=e=>{c.value=e},Y=e=>{g();const A=()=>{n.value=setInterval(()=>{e()},a.value)};A(),K(a,(j,q)=>{g(),A()})},g=()=>{n.value&&(clearInterval(n.value),n.value=null)};return{token:l,userInfo:r,pingInfo:c,uuidv4:s,interval:a,version:S,updateBrowserId:I,pingIntervalId:n,pingNetworkInfo:u,disconnect:v,invitationCode:m,timeDifference:i,getToken:d,getUserInfo:T,getUuidv4:f,getPingInfo:N,getDisconnect:_,getPingIntervalId:E,getPingInterval:R,getInvitationCode:D,getVersion:p,getUpdateBrowserId:O,getTimeDifference:U,getPingNetworkInfo:w,setInvitationCode:k,setVersion:F,setUpdateBrowserId:V,setToken:B,setUserInfo:P,setUuidv4:L,setDisconnect:C,setPingInfo:M,setPingIntervalId:G,clearUserInfo:()=>{l.value="",s.value="",v.value=!0,r.value={},u.value={},g(),i.value=0,a.value=3e4,localStorage.removeItem("gaea_token"),localStorage.removeItem("browser_id"),localStorage.removeItem("REFERRAL_INFO_DATA"),localStorage.removeItem("REFERRAL_REWARDS"),localStorage.removeItem("MISSION_DATA"),localStorage.removeItem("TABLE_DATA_ARR_HISTORY"),localStorage.removeItem("INTEGRAL_DATA"),localStorage.removeItem("DAILY_STATISTIC"),localStorage.removeItem("NETWORK_INFO_LIST"),localStorage.removeItem("ANNOUNCEMENT"),localStorage.removeItem("TABLE_DATA_ARR"),localStorage.removeItem("REWARD_ERA_INFO"),localStorage.removeItem("PLUGIN_DATA_INFO"),localStorage.removeItem("NETWORK_COUNTRY"),localStorage.removeItem("TABLE_SOUL_RECORD"),localStorage.removeItem("TABLE_USD_RECORD"),localStorage.removeItem("TABLE_BIND_BOX"),localStorage.removeItem("version"),localStorage.removeItem("updateBrowserId"),localStorage.removeItem("CURRENT_CHAT_MESSAGE"),c.value=null,I.value=!1},setPingInterval:h,setPingIntervalTime:Y,setPingNetworkInfo:b,clearPingIntervalTime:g,setTimeDifference:W}},{persist:[{paths:["userInfo","token","uuidv4","disconnect","interval","pingIntervalId","invitationCode","pingInfo","version","updateBrowserId","pingNetworkInfo","timeDifference"],storage:H.cookiesWithOptions({maxAge:604800})}]});export{z as u};
