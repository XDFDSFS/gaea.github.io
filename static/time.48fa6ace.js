var b=Object.defineProperty;var H=(n,t,r)=>t in n?b(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r;var m=(n,t,r)=>(H(n,typeof t!="symbol"?t+"":t,r),r);import{G as E}from"./entry.f70eada7.js";import{C as p}from"./index.2d9eff2e.js";const F=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;function R(n){return typeof n=="string"&&F.test(n)}function L(n){if(!R(n))throw TypeError("Invalid UUID");var t,r=new Uint8Array(16);return r[0]=(t=parseInt(n.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=t&255,r[4]=(t=parseInt(n.slice(9,13),16))>>>8,r[5]=t&255,r[6]=(t=parseInt(n.slice(14,18),16))>>>8,r[7]=t&255,r[8]=(t=parseInt(n.slice(19,23),16))>>>8,r[9]=t&255,r[10]=(t=parseInt(n.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=t&255,r}var f=[];for(var I=0;I<256;++I)f.push((I+256).toString(16).slice(1));function $(n,t=0){return(f[n[t+0]]+f[n[t+1]]+f[n[t+2]]+f[n[t+3]]+"-"+f[n[t+4]]+f[n[t+5]]+"-"+f[n[t+6]]+f[n[t+7]]+"-"+f[n[t+8]]+f[n[t+9]]+"-"+f[n[t+10]]+f[n[t+11]]+f[n[t+12]]+f[n[t+13]]+f[n[t+14]]+f[n[t+15]]).toLowerCase()}function N(n){n=unescape(encodeURIComponent(n));for(var t=[],r=0;r<n.length;++r)t.push(n.charCodeAt(r));return t}var O="6ba7b810-9dad-11d1-80b4-00c04fd430c8",P="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function k(n,t,r){function e(a,s,o,i){var g;if(typeof a=="string"&&(a=N(a)),typeof s=="string"&&(s=L(s)),((g=s)===null||g===void 0?void 0:g.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var c=new Uint8Array(16+a.length);if(c.set(s),c.set(a,s.length),c=r(c),c[6]=c[6]&15|t,c[8]=c[8]&63|128,o){i=i||0;for(var l=0;l<16;++l)o[i+l]=c[l];return o}return $(c)}try{e.name=n}catch{}return e.DNS=O,e.URL=P,e}function J(n,t,r,e){switch(n){case 0:return t&r^~t&e;case 1:return t^r^e;case 2:return t&r^t&e^r&e;case 3:return t^r^e}}function T(n,t){return n<<t|n>>>32-t}function B(n){var t=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof n=="string"){var e=unescape(encodeURIComponent(n));n=[];for(var a=0;a<e.length;++a)n.push(e.charCodeAt(a))}else Array.isArray(n)||(n=Array.prototype.slice.call(n));n.push(128);for(var s=n.length/4+2,o=Math.ceil(s/16),i=new Array(o),g=0;g<o;++g){for(var c=new Uint32Array(16),l=0;l<16;++l)c[l]=n[g*64+l*4]<<24|n[g*64+l*4+1]<<16|n[g*64+l*4+2]<<8|n[g*64+l*4+3];i[g]=c}i[o-1][14]=(n.length-1)*8/Math.pow(2,32),i[o-1][14]=Math.floor(i[o-1][14]),i[o-1][15]=(n.length-1)*8&4294967295;for(var v=0;v<o;++v){for(var h=new Uint32Array(80),U=0;U<16;++U)h[U]=i[v][U];for(var x=16;x<80;++x)h[x]=T(h[x-3]^h[x-8]^h[x-14]^h[x-16],1);for(var u=r[0],d=r[1],w=r[2],A=r[3],C=r[4],S=0;S<80;++S){var D=Math.floor(S/20),M=T(u,5)+J(D,d,w,A)+C+t[D]+h[S]>>>0;C=A,A=w,w=T(d,30)>>>0,d=u,u=M}r[0]=r[0]+u>>>0,r[1]=r[1]+d>>>0,r[2]=r[2]+w>>>0,r[3]=r[3]+A>>>0,r[4]=r[4]+C>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,r[0]&255,r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,r[1]&255,r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,r[2]&255,r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,r[3]&255,r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,r[4]&255]}var G=k("v5",80,B);const K=G;class y{static convertToUUID(t){return K(t,this.NAMESPACE)}static async getStableComponents(t,r,e){try{const s=await t.get();var a=navigator.userAgent+s.visitorId+e;return{userAgent:a}}catch{return{userAgent:a}}}static async hashString(t){if(window.crypto&&window.crypto.subtle)try{const r=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return Array.from(new Uint8Array(r)).map(e=>e.toString(16).padStart(2,"0")).join("")}catch{}return p.SHA256(t).toString(p.enc.Hex)}static async getFingerprint(t,r){try{const a=await(await E(()=>import("./fp.esm.baf107e8.js"),[],import.meta.url)).load(),[s]=await Promise.all([this.getStableComponents(a,t,r)]),o=JSON.stringify({...s}),i=await this.hashString(o);return this.convertToUUID(i)}catch{const a=`fallback-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;return this.convertToUUID(a)}}static async getOrCreateFingerprint(t,r){return await this.getFingerprint(t,r)}static generateUserAgentHash(t){const r=t+this.SALT;return p.SHA256(r).toString(p.enc.Hex).slice(0,8)}static replaceUUIDPrefix(t,r){if(r.length!==8)throw new Error("The new prefix must be 8 characters long");return r+t.slice(8)}static async getFinalFingerprint(t,r="browser"){try{let e=await this.getOrCreateFingerprint(r,t);const a=await this.generateUserAgentHash(t),o=this.replaceUUIDPrefix(e,a).split("-"),i=o.slice(1,4).join(""),g=window.location.origin,c=r==="browser"?i+g:i+this.CHROME,l=p.SHA256(c).toString(p.enc.Hex).slice(0,12);return o[0]+"-"+o[1]+"-"+o[2]+"-"+o[3]+"-"+l}catch{const a=`fallback-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;return this.convertToUUID(a)}}}m(y,"NAMESPACE","10000000-1000-4000-8000-100000000000"),m(y,"SALT","S1gnd6ox2CJ8Laxj"),m(y,"CHROME","chrome-extension://cpjicfogbgognnifjgmenmaldnmeeeib");const j=n=>{const t=Math.floor(n/60),r=n%60;return`${t} h, ${r} m`},q=()=>{const n=new Date,t=n.getUTCFullYear();return Date.UTC(t,n.getUTCMonth(),n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds(),n.getUTCMilliseconds())};export{y as F,j as f,q as g};
