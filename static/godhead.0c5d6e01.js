import{P as s,G as n}from"./request.9899458d.js";const a=o=>s("/api/godhood/emotion",o),d=()=>n("/api/godhood/info"),e=()=>n("/api/godhood/blindbox/list"),r=o=>s("/api/godhood/blindbox/open",o),g=o=>s("/api/auth/get_wallet_address",o),p=o=>s("/api/godhood/transfer",o),c=o=>s("/api/godhood/withdraw",o),h=o=>n(`/api/godhood/description?code=${o}`,{},"blob"),l=()=>n("/api/godhood/web3_config"),u=(o,i)=>n(`/api/godhood/blindbox/opened_list?page=${o}&limit=${i}`),b=o=>s("/api/godhood/blindbox/exchange",o),m=(o,i)=>n(`/api/godhood/soul/list?page=${o}&limit=${i}`),x=(o,i)=>n(`/api/godhood/usd/list?page=${o}&limit=${i}`),$=()=>n("/api/signin/list"),f=o=>s("/api/signin/complete",o),w=()=>n("/api/signin/month-statistic"),L=(o,i)=>n(`/api/signin/history?page=${o}&limit=${i}`),P=()=>n("/api/signin/onchain"),_=(o,i)=>n(`/api/ranking/soul?page=${o}&limit=${i}`);export{f as a,$ as b,w as c,h as d,g as e,a as f,d as g,e as h,r as i,p as j,c as k,L as l,m,b as n,u as o,_ as r,P as s,x as u,l as w};
