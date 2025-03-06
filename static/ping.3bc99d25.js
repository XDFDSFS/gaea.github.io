import{E as a}from"./entry.5f680153.js";import{u as c}from"./user.9dc4e5ae.js";import{n as g,g as l}from"./referral.75102f19.js";import{F as u,g as d}from"./time.1993da10.js";import{a as m}from"./user.6be3d1b8.js";const p=async e=>{const r=c();try{const n=await l();if(n&&n.code===200){const i=n&&n.code===200?n.data:{country:"Unknown",country_icon:"Unknown",ip_address:"None",host:""};await r.setPingInfo({...i,browser_id:r.getUuidv4,name:"Unknown Device",uptime:0,points:0,ip_score:e||0})}}catch(n){console.error("Error fetching IP:",n)}},h=async()=>{const e=c();if(!e.getUserInfo)return console.warn("User info is not available."),!1;if(!e.getUuidv4)try{const r=await u.getFinalFingerprint(e.getUserInfo.uid);e.setUuidv4(r)}catch(r){return console.error("Error generating fingerprint:",r),!1}try{const r=e.getTimeDifference,n=d(),i=Math.floor((n-r)/1e3)||Math.floor(n/1e3);if(!e.getUserInfo){const o=await m();o!=null&&o.data&&await e.setUserInfo({...o.data})}const{uid:s}=e.getUserInfo;if(!s)return console.log("User UID not available."),!1;const t=await g({uid:s,browser_id:e.getUuidv4,timestamp:i,version:e.getVersion||"1.0.0"});if(t&&t.code===200){const{interval:o,score:f}=t.data;e.setPingInterval(o*1e3),e.setPingNetworkInfo(t.data),e.getPingInfo||await p(f)}else return(t==null?void 0:t.code)===410?(e.clearPingIntervalTime(),e.setDisconnect(!0),e.setPingNetworkInfo({}),a.warning(t.msg||"Disconnected"),!1):(a.error(t.msg),!1);return!0}catch(r){return console.error("An error occurred during the network ping process:",r),!0}};export{h as n};
