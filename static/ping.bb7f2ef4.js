import{E as a}from"./entry.fafafeab.js";import{u as c}from"./user.379abf3b.js";import{n as g,g as u}from"./referral.f1fcd46b.js";import{F as d,g as m}from"./time.2859e811.js";import{a as l}from"./user.6d8a9344.js";const p=async e=>{const r=c();try{const t=await u();if(t&&t.code===200){const i=t&&t.code===200?t.data:{country:"Unknown",country_icon:"Unknown",ip_address:"None",host:""};await r.setPingInfo({...i,browser_id:r.getUuidv4,name:"Unknown Device",uptime:0,points:0,ip_score:e||0})}}catch{}},h=async()=>{const e=c();if(!e.getUserInfo)return!1;if(!e.getUuidv4)try{const r=await d.getFinalFingerprint(e.getUserInfo.uid);e.setUuidv4(r)}catch{return!1}try{const r=e.getTimeDifference,t=m(),i=Math.floor((t-r)/1e3)||Math.floor(t/1e3);if(!e.getUserInfo){const o=await l();o!=null&&o.data&&await e.setUserInfo({...o.data})}const{uid:s}=e.getUserInfo;if(!s)return!1;const n=await g({uid:s,browser_id:e.getUuidv4,timestamp:i,version:e.getVersion||"1.0.0"});if(n&&n.code===200){const{interval:o,score:f}=n.data;e.setPingInterval(o*1e3),e.setPingNetworkInfo(n.data),e.getPingInfo||await p(f)}else return(n==null?void 0:n.code)===410?(e.clearPingIntervalTime(),e.setDisconnect(!0),e.setPingNetworkInfo({}),a.warning(n.msg||"Disconnected"),!1):(a.error(n.msg),!1);return!0}catch{return!0}};export{h as n};
