import{_ as d}from"./Btn.vuevuetypescriptsetuptruelang.1213d543.js";import{E as a,d as u,f as c,o as w,m as f,j as p,b as t,t as h,e as s}from"./entry.5723f427.js";const _=async()=>{try{const e=window.solana;if(!e){window.open("https://phantom.app","_blank");return}if(!e.isPhantom){a.warning("Unable to obtain wallet address");return}const n=await e.connect();if(n.publicKey)return n.publicKey.toString();throw new Error("")}catch(e){return e instanceof Error?e.message.includes("Unexpected error")?a.warning("Please try reconnecting the Phantom wallet. If you haven't created a wallet account yet, please create a new one."):e.message.includes("User rejected the request")?a.warning("The user refused to connect to the wallet, please try connecting again."):a.warning("Unknown error occurred while connecting wallet:"+e.message):a.warning("An error occurred while connecting the wallet"),Promise.reject(e)}},g={class:"w-full h-full space-x-1"},m=t("span",{class:"iconfont icon-lianjie text-sm sm:text-base"},null,-1),b=t("span",{class:"duration-300"},"Solana",-1),y={class:"duration-300 text-white"},P=u({__name:"test",setup(e){const n=c(!1),o=c(""),r=async()=>{n.value=!0;try{o.value=await _(),n.value=!1,console.log("Solana 钱包地址:",o.value)}catch(l){console.error("连接 Solana 钱包时出错:",l)}finally{n.value=!1}};return window.onload=()=>{r()},(l,v)=>{const i=d;return w(),f(i,{class:"btn",style:{width:"auto"},"hover-title":" ",bg:"transparent",hoverBg:"#c79e70",round:!1,border:"1px solid #ffe09929",loading:s(n),disabled:s(n),onClickHandle:r},{default:p(()=>[t("div",g,[m,b,t("span",y,h(s(o)),1)])]),_:1},8,["loading","disabled"])}}});export{P as default};