import{E as g}from"./entry.7bb336ca.js";import{u as i}from"./user.dad97817.js";import{n as f,g as u}from"./referral.ba3c2e7e.js";import{F as d}from"./Fingerprinter.0d892825.js";const m=async e=>{const n=i();try{const t=await u();if(t&&t.code===200){const o=t&&t.code===200?t.data:{longitude:-1,latitude:-1,country:"Unknown",country_icon:"Unknown",ip_address:"None",host:""};await n.setPingInfo({...o,browser_id:n.getUuidv4,name:"Unknown Device",network_rate:1,is_connected:1,uptime:0,points:0,ip_score:e||0})}}catch(t){console.error("Error fetching IP:",t)}},P=async()=>{const e=i();if(!e.getUserInfo)return!1;if(!e.getUuidv4){const n=await d.getFinalFingerprint(e.getUserInfo.uid);e.setUuidv4(n)}try{const n=e.getTimeDifference,t=Date.now(),s=Math.floor((t-n)/1e3)||Math.floor(t/1e3),r=await f({uid:e.getUserInfo.uid,browser_id:e.getUuidv4,timestamp:s,version:e.getVersion||"1.0.0"});if(r&&r.code===200){const{interval:a,score:c}=r.data;e.setPingInterval(a*1e3),e.setPingNetworkInfo(r.data),e.getPingInfo||await m(c)}else if(r.code===410)return e.clearPingIntervalTime(),e.setDisconnect(!0),e.setPingNetworkInfo({}),g.warning(r.msg),!1;return!0}catch(n){return console.error("An error occurred during the network ping process:",n),!0}};export{P as n};
