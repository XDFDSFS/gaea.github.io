import{f as o}from"./entry.843e1310.js";import{m as a}from"./el-form.d9de8522.js";const d=()=>"https://aigaea.net",u=()=>"1x00000000000000000000AA",m=({value:s,characters:e="****",start:t=3,end:r=4})=>{const i=new RegExp("^(.{"+t+"}).*(.{"+r+"})$");return s?s.replace(i,`$1${e}$2`):""},_=s=>typeof s=="number"&&!isNaN(s)?!1:s?Object.keys(s).length<1:!0,n=["celestial_god","dayang_river","galactic_god","god_of_agriculture","god_of_justice","goddess_of_light","memory_goddess","ocean_goddess","shenqi_shen","sun_god","time_goddess","wisdom_god"],f=()=>{const s=o(),t=Number(s.getUserInfo.uid)%n.length;return`/images/public/head/${n[t]}.jpg`},p=s=>{const e=a().find(t=>t.code===s);return e&&e.img?`/images/missions/${e.img}.png?v=1`:"/images/missions/email.png"};export{m as a,p as b,u as c,d as g,_ as i,f as s};