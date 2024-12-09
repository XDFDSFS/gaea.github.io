import{E as f}from"./entry.5ab618e7.js";import{u as a}from"./user.a56302b2.js";import{n as g,g as u}from"./referral.e15bb7d6.js";import{F as l}from"./Fingerprinter.0e4fb693.js";import{a as d}from"./user.b63ea18e.js";const p=async e=>{const r=a();try{const n=await u();if(n&&n.code===200){const s=n&&n.code===200?n.data:{longitude:-1,latitude:-1,country:"Unknown",country_icon:"Unknown",ip_address:"None",host:""};await r.setPingInfo({...s,browser_id:r.getUuidv4,name:"Unknown Device",network_rate:1,is_connected:1,uptime:0,points:0,ip_score:e||0})}}catch(n){console.error("Error fetching IP:",n)}},P=async()=>{const e=a();if(!e.getUserInfo)return console.warn("User info is not available."),!1;if(!e.getUuidv4)try{const r=await l.getFinalFingerprint(e.getUserInfo.uid);e.setUuidv4(r)}catch(r){return console.error("Error generating fingerprint:",r),!1}try{const r=e.getTimeDifference,n=Date.now(),s=Math.floor((n-r)/1e3)||Math.floor(n/1e3);let i=e.getUserInfo.uid;if(!i){const o=await d();o!=null&&o.data&&(i=o.data.uid)}if(!i)return console.warn("User UID not available."),!1;const t=await g({uid:i,browser_id:e.getUuidv4,timestamp:s,version:e.getVersion||"1.0.0"});if(t&&t.code===200){const{interval:o,score:c}=t.data;e.setPingInterval(o*1e3),e.setPingNetworkInfo(t.data),e.getPingInfo||await p(c)}else return(t==null?void 0:t.code)===410?(e.clearPingIntervalTime(),e.setDisconnect(!0),e.setPingNetworkInfo({}),f.warning(t.msg||"Disconnected"),!1):(console.error("Unexpected response:",t),!1);return!0}catch(r){return console.error("An error occurred during the network ping process:",r),!0}};export{P as n};
