import{bL as D,r as e,s,bM as P}from"./entry.220f4f03.js";const z=D("godhood",()=>{const a=e(!1),o=e(),l=e(),n=e(),c=e(),u=e(),r=e(),i=e(),d=e(),v=e({show:!1,url:""}),g=e([]),C=s(()=>a.value),f=s(()=>o.value),A=s(()=>l.value),m=s(()=>n.value),b=s(()=>c.value),p=s(()=>u.value),I=s(()=>r.value),y=s(()=>i.value),L=s(()=>d.value),W=s(()=>v.value),h=s(()=>g.value);return{dialogError:v,isPayCard:a,blindboxList:g,myCardList:o,testCardList:l,pointAllToday:n,accountsWalletAddress:c,accountWalletItem:i,approveHash:d,web3ConfigData:r,web3ConfigItem:u,getIsPayCard:C,getMyCardList:f,getTestCardList:A,getPointAllToday:m,getAccountsWalletAddress:b,getWeb3ConfigItem:p,getAccountWalletItem:y,getApproveHash:L,getWeb3ConfigData:I,getBlindboxList:h,getDialogError:W,setIsPayCard:t=>{a.value=t},setMyCardList:t=>{o.value=t},setPointAllToday:t=>{n.value=t},setAccountsWalletAddress:t=>{c.value=t},setTestCardList:t=>{l.value=t},setweb3ConfigItem:t=>{u.value=t},setAccountWalletItem:t=>{i.value=t},setWeb3ConfigData:t=>{r.value=t},setDialogError:t=>{v.value=t},setApproveHash:t=>{d.value=t},setBlindboxList:t=>{g.value=t},clearGodhoodInfo:()=>{a.value=!1,o.value=null,l.value=null,n.value=null,u.value=null,r.value=null,i.value=null,d.value=null,c.value=null,v.value={show:!1,url:""},g.value=[],localStorage.setItem("hasGiftedBox","false"),localStorage.setItem("lastGiftedDate",null)}}},{persist:[{paths:["accountWalletItem","accountsWalletAddress","pointAllToday","isPayCard","myCardList","testCardList","web3ConfigItem","web3ConfigData"],storage:P.cookiesWithOptions({maxAge:604800})}]});export{z as u};
