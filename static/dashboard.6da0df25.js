import{_ as S}from"./cursor-mask.0ef987cd.js";import{d as C,r as b,f as N,g as Y,o as h,c as f,b as t,n as R,p as G,h as W,i as _t,w as U,e as p,t as k,j as O,k as st,l as ot,m as g,q as L,E as pt,s as q,v as lt,x as et,y as mt,z as gt,A as bt,B as it,F as rt,C as ct}from"./entry.de4ebc31.js";import{_ as X}from"./plugin-vueexport-helper.c27b6911.js";import{_ as Z}from"./el-popper.a3489116.js";import{E as wt}from"./el-input.4a3df176.js";import{u as Q}from"./user.38286bf2.js";import{n as dt}from"./ping.86355ffd.js";import{_ as yt}from"./client-only.5448d9a9.js";import{n as Et,a as $t,e as kt,r as Bt,b as Dt}from"./dashboard.3758a0f3.js";import{E as Ct,_ as Rt,a as St,b as It}from"./el-tooltip.04df853c.js";import{f as K}from"./utils.aeaeec7c.js";import"./el-checkbox.23458b9e.js";import{v as Tt}from"./el-loading.25e5204d.js";import"./referral.e6d29d7e.js";import"./user.f883fa23.js";import"./Fingerprinter.673420ab.js";import"./index.1735d320.js";const A=n=>(G("data-v-3b54fc05"),n=n(),W(),n),Mt={class:"m-auto gaea_box relative cursor-pointer overflow-hidden z-[1]"},Nt=A(()=>t("svg",{class:"w-full h-full relative z-10",viewBox:"0 0 3712 1024",version:"1.1",fill:"black",xmlns:"http://www.w3.org/2000/svg","p-id":"4297",width:"100%",height:"100%"},[t("mask",{id:"gaea",fill:"black"},[t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"}),t("path",{id:"path",d:"M912.64 422.4V896c-117.76 61.44-247.04 87.04-380.16 87.04-282.88 0-488.96-185.6-488.96-476.16C43.52 216.32 249.6 30.72 532.48 30.72c143.36 0 270.08 32 360.96 116.48l-140.8 153.6c-53.76-56.32-119.04-85.76-220.16-85.76-170.24 0-281.6 122.88-281.6 291.84 0 168.96 111.36 291.84 281.6 291.84 87.04 0 151.04-24.32 188.16-44.8v-147.2H558.08V422.4h354.56z m81.92 537.6L1386.24 53.76h165.12L1945.6 960h-225.28l-78.08-192h-352l-75.52 192h-220.16z m579.84-360.96l-111.36-281.6-110.08 281.6h221.44zM2044.16 960V53.76h615.68v184.32h-416v168.96h392.96v184.32h-392.96v184.32h439.04V960h-638.72z m705.28 0L3141.12 53.76h165.12L3700.48 960H3475.2l-78.08-192h-352l-75.52 192h-220.16z m579.84-360.96l-111.36-281.6-110.08 281.6h221.44z","p-id":"4298",fill:"none",stroke:"black","stroke-width":"5"})]),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:"url(#gaea)",fill:"black"})],-1)),zt=A(()=>t("div",{class:"w-2 h-full bg-[black] absolute z-50 top-0 -left-1"},null,-1)),Lt=A(()=>t("div",{class:"w-2 h-full bg-[black] absolute z-50 top-0 -right-1"},null,-1)),At=A(()=>t("div",{class:"w-full h-2 bg-[black] absolute z-50 bottom-0 -right-1"},null,-1)),Pt=A(()=>t("div",{class:"mask"},null,-1)),Ot=A(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),jt=[Ot],Ft=A(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),Yt=[Ft],Gt=A(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),Wt=[Gt],Xt=C({__name:"Gaea",setup(n){const o=b({transform:"translate(0, 0)"});return N(()=>{const s=document.querySelector("#path"),l=s.getTotalLength();s.style.strokeDasharray=l.toString(),s.style.strokeDashoffset=l.toString(),s.classList.add("path-animation");const a=document.querySelector(".gaea_box"),e=d=>{const c=a.getBoundingClientRect(),_=d.clientX-c.left,w=d.clientY-c.top,i=200,u=200,m=c.width-i,y=c.height-u+20,E=Math.max(0,Math.min(_-i/2,m)),B=Math.max(-20,Math.min(w-u/2,y));o.value={transform:`translate(${E}px, ${B}px)`}},r=d=>{requestAnimationFrame(()=>e(d))};document.addEventListener("mousemove",r),Y(()=>{document.removeEventListener("mousemove",r)})}),(s,l)=>(h(),f("div",Mt,[Nt,zt,Lt,At,Pt,t("div",{class:"mask-animation",style:R(o.value)},jt,4),t("div",{class:"mask-animation mask-animation-frist",style:R(o.value)},Yt,4),t("div",{class:"mask-animation mask-animation-second",style:R(o.value)},Wt,4)]))}});const ht=X(Xt,[["__scopeId","data-v-3b54fc05"]]),Ht={key:0,class:"relative w-[150px] h-[150px]"},Vt=st('<div class="absolute inset-0 flex items-center justify-center"><div class="w-[130px] h-[130px] rounded-full border-1 border-[#EDEDED] opacity-50 animate-ping [animation-duration:2s]"></div></div><div class="absolute inset-0 flex items-center justify-center"><div class="w-[110px] h-[110px] rounded-full border-1 border-[#EDEDED] opacity-75 animate-ping [animation-duration:2s]"></div></div><div class="absolute inset-0 flex items-center justify-center"><div class="w-[90px] h-[90px] rounded-full border-1 border-[#EDEDED] animate-ping [animation-duration:2s]"></div></div><div class="absolute inset-0 flex items-center justify-center"><div class="w-[70px] h-[70px] rounded-full"></div></div>',4),Jt={key:1,class:"w-[150px] h-[150px] cursor-pointer relative"},Kt=st('<div class="w-full h-full absolute top-0 left-0 z-5 scale-[1.07]"><svg width="100%" height="100%" viewBox="0 0 100 100"><circle class="inner-circle" cx="50" cy="50" r="45" fill="none" stroke-width="2" stroke="#2E2E2E" stroke-dasharray="2,6" transform="rotate(50 50 50)"></circle><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#2E2E2E"><tspan class="text uppercase Regular" style="font-size:28px;"> 0 </tspan></text></svg></div>',1),Ut=[Kt],qt=C({__name:"ProgressBar",setup(n){const o=Q(),s=b(0),l=b(null),a=b(!0),e=b(!1);_t(()=>({backgroundImage:`conic-gradient(transparent 0deg, white, white, transparent ${s.value}%)`}));const r=()=>{const{score:d}=o.getPingNetworkInfo;e.value?s.value>d?(a.value=!1,s.value-=.05):(clearInterval(l.value),a.value=!1):s.value<100?s.value+=1:(e.value=!0,l.value=setInterval(r,50))};return U(()=>o.getDisconnect,d=>{d||(s.value=0,e.value=!1,a.value=!0,l.value=setInterval(r,40))}),N(()=>{o.getDisconnect||(s.value=0,e.value=!1,a.value=!0,l.value=setInterval(r,40))}),(d,c)=>p(o).getDisconnect?(h(),f("div",Jt,Ut)):(h(),f("div",Ht,[Vt,t("span",{class:O(["absolute top-1/2 left-1/2 z-[99] -translate-y-1/2 -translate-x-1/2 Regular font-bold",p(a)?"text-[14px] text-[#2E2E2E]":"text-[28px] text-[#edededa2]"])},k(p(a)||p(s)===100?"Connecting":p(s).toFixed(1)),3)]))}});const Zt=n=>{const o=Math.floor(n/60),s=n%60;return`${o} h, ${s} m`},z=n=>(G("data-v-219d5541"),n=n(),W(),n),Qt={class:"w-full h-full flex items-center justify-center px-8 pb-2 pt-6"},te={key:0,class:"flex-1 h-full flex flex-col items-start"},ee=z(()=>t("span",{class:"text-[20px] Regular font-bold text-[#EBEBEB] uppercase"},"NETWORK IS CONNECTED",-1)),se={class:"grid grid-cols-2 mt-6 gap-5"},oe={class:"flex flex-col justify-start space-y-1"},ae=z(()=>t("span",{class:"text-[#EDEDED] text-[12px]"},"Verified IP",-1)),ne={class:"flex items-center space-x-2"},le={key:0,class:"w-4 h-3"},ie=["src"],re={class:"flex-1 text-[10px] Regular u-line-1 text-[#B0B0B0]"},ce={class:"flex items-center justify-start space-x-3"},de=z(()=>t("span",{class:"iconfont icon-shijian text-[#B0B0B0] text-[18px]"},null,-1)),ue={class:"flex flex-col"},_e=z(()=>t("span",{class:"text-[#EBEBEB] text-[12px]"},"Today's Time",-1)),pe={class:"text-[#B0B0B0] text-[10px]"},me={class:"flex items-center"},he=z(()=>t("span",{class:"w-2 h-2 bg-green-500 rounded-full mr-2 glow-effect"},null,-1)),fe=z(()=>t("span",{class:"text-[#EBEBEB] Regular font-medium text-[12px] py-3"}," Connected ",-1)),ve={class:"flex items-center justify-start space-x-3"},xe=z(()=>t("span",{class:"iconfont icon-zuzhijiegou1 text-[#B0B0B0] text-[18px]"},null,-1)),ge={class:"flex flex-col justify-between"},be=z(()=>t("span",{class:"text-[#EBEBEB] text-[12px]"},"Connected Host",-1)),we={class:"text-[#B0B0B0] text-[10px]"},ye={key:1,class:"flex-1 h-full flex flex-col items-start"},Ee=z(()=>t("div",{class:"flex flex-col items-start justify-center"},[t("span",{class:"text-[20px] Regular font-bold text-[#EBEBEB] uppercase"},"Network Connection"),t("span",{class:"text-[10px] text-[#EBEBEB] Regular font-light"}," Connect to the network to start earning ")],-1)),$e=z(()=>t("span",{class:"text-black Regular font-medium text-[14px]"}," CONNECTION",-1)),ke=C({__name:"NetworkPing",props:{data:{default:[]}},setup(n){const o=Q(),s=b(!1),l=e=>{if(e)return e.startsWith("http")?e:`https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${e}.svg`},a=async()=>{try{s.value=!0,await dt()&&(o.setPingIntervalTime(dt),o.setDisconnect(!1))}catch{s.value=!1,pt.error("Connection error, please try again later")}finally{s.value=!1}};return(e,r)=>{var _,w,i,u,m;const d=wt,c=qt;return h(),f("div",Qt,[p(o).getDisconnect?(h(),f("div",ye,[Ee,g(d,{class:"mt-17 hover:scale-105",round:"",onClick:r[0]||(r[0]=y=>a()),loading:p(s)},{default:L(()=>[$e]),_:1},8,["loading"])])):(h(),f("div",te,[ee,t("div",se,[t("div",oe,[ae,t("div",ne,[(_=p(o).getPingInfo)!=null&&_.country_icon?(h(),f("div",le,[t("img",{src:l((w=p(o).getPingInfo)==null?void 0:w.country_icon),class:"w-full h-full object-cover"},null,8,ie)])):ot("",!0),t("span",re,k((i=p(o).getPingInfo)==null?void 0:i.ip_address),1)])]),t("div",ce,[de,t("div",ue,[_e,t("span",pe,k(("formatTime"in e?e.formatTime:p(Zt))(((u=p(o).getPingInfo)==null?void 0:u.today_uptime)||0)),1)])]),t("div",me,[g(d,{class:"",color:"#333",round:"",size:"small"},{default:L(()=>[he,fe]),_:1})]),t("div",ve,[xe,t("div",ge,[be,t("span",we,k((m=p(o).getPingInfo)==null?void 0:m.host),1)])])])])),g(c)])}}});const Be=X(ke,[["__scopeId","data-v-219d5541"]]),H=n=>(G("data-v-c29fd60c"),n=n(),W(),n),De={class:"w-full h-full relative z-10",viewBox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","p-id":"4297",width:"100%",height:"100%"},Ce=["id"],Re=H(()=>t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"},null,-1)),Se=["id"],Ie=["mask"],Te=H(()=>t("div",{class:"mask"},null,-1)),Me=H(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),Ne=[Me],ze=H(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),Le=[ze],Ae=H(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),Pe=[Ae],Oe=C({__name:"BrowserChrome",props:{id:{default:"browser_chrome"}},setup(n){const o=n,s=b({transform:"translate(0, 0)"});return N(()=>{const l=document.querySelector(`.${o.id}_G_box`),a=r=>{const d=l.getBoundingClientRect(),c=r.clientX-d.left,_=r.clientY-d.top,w=20,i=20,u=d.width-w,m=d.height-i+20,y=Math.max(0,Math.min(c-w/2,u)),E=Math.max(-20,Math.min(_-i/2,m));s.value={transform:`translate(${y}px, ${E}px)`}},e=r=>{requestAnimationFrame(()=>a(r))};document.addEventListener("mousemove",e),Y(()=>{document.removeEventListener("mousemove",e)})}),(l,a)=>(h(),f("div",{class:O(["m-auto relative cursor-pointer overflow-hidden z-[1]",`${l.$props.id}_G_box`])},[(h(),f("svg",De,[t("mask",{id:`${l.$props.id}_G`,fill:"black"},[Re,t("path",{id:`${l.$props.id}_path`,stroke:"rgba(46, 46, 46, 1.00)","stroke-width":"1.5","stroke-linejoin":"round","stroke-linecap":"round",fill:"none",d:"M50 31.2502C60.3554 31.2502 68.75 39.6447 68.75 50.0001C68.75 60.3556 60.3554 68.7501 50 68.7501C39.6446 68.7501 31.25 60.3556 31.25 50.0001C31.25 39.6447 39.6446 31.2502 50 31.2502ZM50 31.2502L87.2196 31.2502M35.4167 89.0435L61.7581 64.5835M12.5 31.8162L35.1565 61.5668M50 91.6668C73.0119 91.6668 91.6667 73.012 91.6667 50.0001C91.6667 26.9883 73.0119 8.3335 50 8.3335C26.9882 8.3335 8.33337 26.9883 8.33337 50.0001C8.33337 73.012 26.9882 91.6668 50 91.6668Z"},null,8,Se)],8,Ce),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:`url(#${l.$props.id}_G)`,fill:"black"},null,8,Ie)])),Te,t("div",{class:"mask-animation",style:R(p(s))},Ne,4),t("div",{class:"mask-animation mask-animation-frist",style:R(p(s))},Le,4),t("div",{class:"mask-animation mask-animation-second",style:R(p(s))},Pe,4)],2))}});const je=X(Oe,[["__scopeId","data-v-c29fd60c"]]),P=n=>(G("data-v-e07ba3c6"),n=n(),W(),n),Fe={class:"w-full h-full relative z-10",viewBox:"0 0 96 96",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","p-id":"4297",width:"100%",height:"100%"},Ye=["id"],Ge=P(()=>t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"},null,-1)),We=["id"],Xe=P(()=>t("path",{fill:"rgba(46, 46, 46, 1.00)",d:"M11 15.25L84.9999 15.25C85.9664 15.25 86.7499 16.0335 86.7499 17L86.7499 62.9999C86.7499 63.9664 85.9664 64.7499 84.9999 64.7499L11 64.7499C10.0335 64.7499 9.25 63.9664 9.25 62.9999L9.25 17C9.25 16.0335 10.0335 15.25 11 15.25ZM11 16.75C10.8619 16.75 10.75 16.8619 10.75 17L10.75 62.9999C10.75 63.138 10.8619 63.2499 11 63.2499L84.9999 63.2499C85.138 63.2499 85.2499 63.138 85.2499 62.9999L85.2499 17C85.2499 16.8619 85.138 16.75 84.9999 16.75L11 16.75Z"},null,-1)),He=P(()=>t("path",{stroke:"rgba(46, 46, 46, 1.00)","stroke-width":"1.5","stroke-linejoin":"round","stroke-linecap":"round",d:"M44 54L52 54"},null,-1)),Ve=P(()=>t("path",{stroke:"rgba(46, 46, 46, 1.00)","stroke-width":"1.5","stroke-linejoin":"round","stroke-linecap":"round",d:"M28 82L67.9999 82"},null,-1)),Je=["mask"],Ke=P(()=>t("div",{class:"mask"},null,-1)),Ue=P(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),qe=[Ue],Ze=P(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),Qe=[Ze],ts=P(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),es=[ts],ss=C({__name:"Computer",props:{id:{default:"browser_chrome"}},setup(n){const o=n,s=b({transform:"translate(0, 0)"});return N(()=>{const l=document.querySelector(`.${o.id}_G_box`),a=r=>{const d=l.getBoundingClientRect(),c=r.clientX-d.left,_=r.clientY-d.top,w=20,i=20,u=d.width-w,m=d.height-i,y=Math.max(0,Math.min(c-w/2,u)),E=Math.max(0,Math.min(_-i/2,m));s.value={transform:`translate(${y}px, ${E}px)`}},e=r=>{requestAnimationFrame(()=>a(r))};document.addEventListener("mousemove",e),Y(()=>{document.removeEventListener("mousemove",e)})}),(l,a)=>(h(),f("div",{class:O(["m-auto relative cursor-pointer overflow-hidden z-[1]",`${l.$props.id}_G_box`])},[(h(),f("svg",Fe,[t("mask",{id:`${l.$props.id}_G`,fill:"black"},[Ge,t("rect",{id:`${l.$props.id}_path`,x:"38",y:"64",width:"19.999996185302734",height:"17.99999237060547",stroke:"rgba(46, 46, 46, 1.00)",fill:"none","stroke-width":"2","stroke-linejoin":"round","stroke-linecap":"round"},null,8,We),Xe,He,Ve],8,Ye),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:`url(#${l.$props.id}_G)`,fill:"black"},null,8,Je)])),Ke,t("div",{class:"mask-animation",style:R(p(s))},qe,4),t("div",{class:"mask-animation mask-animation-frist",style:R(p(s))},Qe,4),t("div",{class:"mask-animation mask-animation-second",style:R(p(s))},es,4)],2))}});const os=X(ss,[["__scopeId","data-v-e07ba3c6"]]),as={class:"w-full grid grid-cols-2 gap-4"},ns={class:"w-[80px] aspect-[1/1] absolute -left-5 -bottom-5"},ls=t("div",{class:"w-full h-full flex flex-col items-end justify-between py-3 px-3 space-y-5"},[t("span",{class:"u-line-1 Regular text-[14px] text-[#EBEBEB] z-[99]"},"GAEA EXTENSION"),t("span",{class:"font-bold Regular text-[16px] text-[#EBEBEB] z-[99]"},"1.2X REWARDS")],-1),is={class:"h-full border-box relative cursor-pointer"},rs={class:"w-[80px] aspect-[1/1] absolute -left-5 -bottom-5"},cs=t("div",{class:"w-full h-full flex flex-col items-end justify-between py-3 px-3 space-y-5"},[t("span",{class:"u-line-1 Regular text-[14px] text-[#4D4D4D] z-[99]"},"GAEA DESKTOP APP"),t("span",{class:"font-bold Regular text-[16px] text-[#4D4D4D] z-[99]"},"1.4X REWARDS")],-1),ds=C({__name:"RewardCategory",setup(n){const o=()=>{window.open("https://chromewebstore.google.com/detail/gaea-extension/cpjicfogbgognnifjgmenmaldnmeeeib","_blank")};return(s,l)=>{const a=je,e=os;return h(),f("div",as,[t("div",{class:"h-full border-box relative cursor-pointer",onClick:o},[t("div",ns,[g(a,{id:"chrome"})]),ls]),t("div",is,[t("div",rs,[g(e)]),cs])])}}}),j=n=>(G("data-v-0da405e1"),n=n(),W(),n),us={class:"w-full h-full relative z-10 svg",viewBox:"0 0 980 954",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4297",width:"100%",height:"100%",fill:"#fff"},_s=["id"],ps=j(()=>t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"},null,-1)),ms=["id"],hs=j(()=>t("path",{class:"cls-2",fill:"none",stroke:"black","stroke-width":"3",d:"M507.239,717.264h58.7V595.526s-17.613-115.017,128.27-128.259c21.281,0,41.308-2.174,41.308-2.174s-123.724-16.112-182.383,26.881c7.395-5.419-45.157,26.562-45.157,104.127C507.976,626.8,507.239,725,507.239,717.264Z"},null,-1)),fs=j(()=>t("path",{"stroke-width":"3",class:"cls-2",fill:"none",stroke:"black",d:"M748.56,273.791s-149.449,1.794-263.062,0c-55.194,2.606-108.4,3.227-163.451,42.978C275.5,352.9,246.923,401.237,235.48,462.919S250.328,617.249,316,669.48c27.607,21.958,91.341,52.339,167.326,49.958,0.856-3.366,0-60.433,0-71.739-65.066,1.734-117.114-25.639-145.663-65.216-25.427-35.251-31.4-80.587-23.914-117.39C346.192,352.541,437.461,343.36,485.5,345.529c56.246-.567,183.336,2.817,241.321-45.651C745.952,281.5,748.56,273.791,748.56,273.791Z"},null,-1)),vs=["mask"],xs=j(()=>t("div",{class:"mask"},null,-1)),gs=j(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),bs=[gs],ws=j(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),ys=[ws],Es=j(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),$s=[Es],ks=C({__name:"G",props:{id:{default:"today"}},setup(n){const o=n,s=b({transform:"translate(0, 0)"});return N(()=>{const l=document.querySelector(`.${o.id}_G_box`),a=r=>{const d=l.getBoundingClientRect(),c=r.clientX-d.left,_=r.clientY-d.top,w=20,i=20,u=d.width-w,m=d.height-i,y=Math.max(0,Math.min(c-w/2,u)),E=Math.max(0,Math.min(_-i/2,m));s.value={transform:`translate(${y}px, ${E}px)`}},e=r=>{requestAnimationFrame(()=>a(r))};document.addEventListener("mousemove",e),Y(()=>{document.removeEventListener("mousemove",e)})}),(l,a)=>(h(),f("div",{class:O(["m-auto relative cursor-pointer overflow-hidden z-[1]",`${l.$props.id}_G_box`])},[(h(),f("svg",us,[t("mask",{id:`${l.$props.id}_G`,fill:"black"},[ps,t("circle",{fill:"none",stroke:"black","stroke-width":"3",class:"glow-path",id:`${l.$props.id}_path`,cx:"490.25",cy:"475.375",r:"373.406"},null,8,ms),hs,fs],8,_s),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:`url(#${l.$props.id}_G)`,fill:"black"},null,8,vs)])),xs,t("div",{class:"mask-animation",style:R(s.value)},bs,4),t("div",{class:"mask-animation mask-animation-frist",style:R(s.value)},ys,4),t("div",{class:"mask-animation mask-animation-second",style:R(s.value)},$s,4)],2))}});const Bs=X(ks,[["__scopeId","data-v-0da405e1"]]),Ds={class:"w-full h-full flex-1 flex flex-col items-end justify-between pb-2 pt-6 px-4 space-y-2 border-box relative"},Cs={class:"text-[#EBEBEB] text-[14px] text-center uppercase z-[99]"},Rs={class:"text-[24px] text-[#EBEBEB] font-bold z-[99]"},Ss={class:"w-[160px] aspect-[1/1] absolute -left-9 -bottom-9"},Is=C({__name:"EarnInfoCard",props:{num:{default:0},icon:{default:"today"},title:{default:"Today's Points"}},emits:["toUpdate"],setup(n,{emit:o}){const s=n;return(l,a)=>{const e=Bs;return h(),f("div",Ds,[t("div",Cs,k(s.title),1),t("span",Rs,k(s.num),1),t("div",Ss,[g(e,{id:s.icon},null,8,["id"])])])}}});let F=null;const ut=(n,o=500,s=!1)=>{if(F!==null&&clearTimeout(F),s){const l=!F;F=setTimeout(function(){F=null},o),l&&typeof n=="function"&&n()}else F=setTimeout(function(){typeof n=="function"&&n()},o)},Ts={class:"w-full h-full min-h-[250px] border-box relative"},Ms={class:"absolute top-2 right-4 cursor-pointer z-50"},Ns=["id"],zs={class:"text-[#EBEBEB] flex items-center space-x-1"},Ls=t("div",{class:"w-2 h-2 bg-[#EBEBEB] rounded-full"},null,-1),As=t("span",{class:"text-[14px] Regular"},"ONLINE ： ",-1),Ps={class:"text-[14px] Regular font-semibold text-[#EBEBEB]"},Os={class:"text-[#4D4D4D] flex items-center space-x-1"},js=t("div",{class:"w-2 h-2 bg-[#4D4D4D] rounded-full"},null,-1),Fs=t("span",{class:"text-[14px] Regular"},"OFFLINE ： ",-1),Ys={class:"text-[14px] Regular font-semibold text-[#4D4D4D]"},Gs=C({__name:"Map",props:{id:{default:"echartMap"},data:{default:()=>[]}},setup(n){const o=n,{$eChart:s}=et(),{$worldData:l}=et(),a=l;s.registerMap("world",a);const e=b(),r=b(!0),d=b(null),c=b(JSON.parse(localStorage.getItem("NETWORK_INFO_LIST")||"{}")),_=b(JSON.parse(localStorage.getItem("NETWORK_COUNTRY")||"[]")),w=v=>{const D=new Map;for(let x=0;x<_.value.length;x++){const I=_.value[x],$=1,V=.1,tt=`rgba(235, 235, 235, ${Math.max(V,$-x/_.value.length*($-V))})`;D.has(I.country)||D.set(I.country,{name:I.country,itemStyle:{areaColor:tt,borderColor:"none"}})}return{regionsData:Array.from(D.values())}},i=_t(()=>w(o.data)),u=async()=>{e.value&&(e.value.dispose(),e.value=null);const v=document.getElementById(o.id);if(!v||v.clientWidth===0||v.clientHeight===0)return;e.value=s.init(v);const{regionsData:D}=i.value,x={animation:!1,progressive:500,progressiveThreshold:3e3,geo:{type:"map",map:"world",zoom:1.2,roam:!1,scaleLimit:{min:1.2,max:3},itemStyle:{areaColor:"#2E2E2E",borderColor:"none",borderType:"none"},emphasis:{itemStyle:{areaColor:"none"},label:{show:!1,color:"#fff"}},regions:D.map(I=>({...I}))},series:[]};e.value.setOption(x)};U(()=>o.data,()=>{r.value&&ut(u,300)},{deep:!0});const m=async()=>{try{const v=await Et();v&&v.code===200&&(c.value=v.data,localStorage.setItem("NETWORK_INFO_LIST",JSON.stringify(v.data)))}catch(v){console.error("error:",v)}},y=async()=>{try{const v=await $t();v&&v.code===200&&(_.value=v.data,localStorage.setItem("NETWORK_COUNTRY",JSON.stringify(v.data)))}catch(v){console.error("error:",v)}},E=()=>{e.value&&e.value.resize()},B=()=>{e.value&&ut(E(),300)};N(async()=>{r.value=!0,await q(),T(),u(),window.addEventListener("resize",B)});const T=async()=>{await y(),m()};return Y(()=>{r.value=!1,e.value&&(e.value.dispose(),e.value=null),d.value&&clearTimeout(d.value),window.removeEventListener("resize",B)}),(v,D)=>{const x=Z,I=yt;return h(),f("div",Ts,[t("div",Ms,[g(x,{onToRefresh:D[0]||(D[0]=$=>T())})]),t("div",{id:v.id,class:"w-full h-full"},null,8,Ns),D[1]||(lt(-1),D[1]=t("div",{class:"flex flex-col justify-end space-y-1 absolute bottom-4 left-8 z-50"},[t("div",zs,[Ls,As,g(I,null,{default:L(()=>{var $;return[t("span",Ps,k((($=p(c))==null?void 0:$.devices)||0),1)]}),_:1})]),t("div",Os,[js,Fs,g(I,null,{default:L(()=>{var $;return[t("span",Ys,k((($=p(c))==null?void 0:$.users)||0),1)]}),_:1})])]),lt(1),D[1])])}}}),Ws=["id"],Xs=C({__name:"ProgressBar",props:{id:{default:""},data:{default:()=>({network_points:0,referral_points:0,earned_points:0,date:""})},maxPoints:{default:200}},setup(n){const o=n,{$eChart:s}=et(),l=b(["#EBEBEB","#8C8C8C","#2B2B2B"]),a=mt(),e=b(null),r=async()=>{a.value&&a.value.dispose();const c=document.getElementById(o.id);if(!c||c.clientWidth===0||c.clientHeight===0)return;a.value=s.init(c);const _=30,w=o.maxPoints===0?100:Math.ceil(o.maxPoints/100)*100||0,i=o.data.network_points||0,u=o.data.referral_points||0,m=o.data.earned_points||0,y=i+u+m||0,E=2e3,B=5e3,T=Math.min(E*(i/y),B),v=Math.min(E*(u/y),B),D=Math.min(E*(m/y),B),x=T,I=T+v,$=[{name:"NETWORKS",target:i,color:l.value[0]},{name:"REFERRALS",target:u,color:l.value[1]},{name:"REWARD",target:m,color:l.value[2]}],V={backgroundColor:"black",grid:{top:"1%",left:"1%",right:"1%",bottom:"1%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(150,150,150,0)"}},appendToBody:!0,formatter:at=>{var nt;const tt=at;let J=0;const vt=(nt=o.data)==null?void 0:nt.date,xt=tt.map(M=>{if(M.componentSubType==="bar")return J+=Number(M.value)||0,`
           <div class="flex items-center justify-between mt-2 ">
             <div class="flex items-center space-x-1" style="color: ${M.color};">
               <span class="w-3 h-3 rounded-full" style="background-color: ${M.color};"></span>
               <span >${M.seriesName}</span>
             </div>
             <span style="color: ${M.color};">${typeof M.value=="number"?M.value==.1?0:M.value.toFixed(2):M.value}</span>
           </div>`}).join("");return`
         <div class="bg-black rounded-lg text-white text-xs ">
           <div class="flex items-center  pb-2 space-x-32">
             <span>${K(vt)}</span>
           </div>
           <div class="flex items-center justify-between border-b border-[#2E2E2E] pb-2 space-x-32">
             <span>TOTAL:</span>
             <span class="text-[#EBEBEB]">${typeof J=="number"?J.toFixed(2):J}</span>
           </div>${xt}
         </div>`},textStyle:{color:"#FFFFFF"},borderColor:"#2E2E2E",backgroundColor:"black"},xAxis:{show:!1,type:"value",min:0,max:w,interval:25,splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}},yAxis:[{data:[""],splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}}],series:[{type:"bar",name:$[0].name,barWidth:_,itemStyle:{color:l.value[0],shadowBlur:4,shadowColor:"none"},data:[$[0].target],z:1,stack:"total",animationDuration:T,animationDelay:0},{type:"bar",name:$[1].name,barWidth:_,itemStyle:{color:$[1].color,shadowBlur:4,shadowColor:"none"},data:[$[1].target],z:1,stack:"total",animationDuration:v,animationDelay:x},{type:"bar",name:$[2].name,barWidth:_,itemStyle:{color:$[2].color,shadowBlur:4,shadowColor:"none"},data:[$[2].target],z:1,stack:"total",animationDuration:D,animationDelay:I},{type:"pictorialBar",itemStyle:{color:"#000"},symbolRepeat:"fixed",symbolMargin:4,symbol:"rect",symbolClip:!0,symbolSize:[2,_],symbolPosition:"start",data:[i+u+m],z:2}]};a.value.setOption(V)};U(()=>o.data,r,{deep:!0});const d=()=>{a.value&&(e.value&&clearTimeout(e.value),e.value=setTimeout(()=>{a.value.resize()},300))};return N(async()=>{await q(),setTimeout(r,500),window.addEventListener("resize",d)}),Y(()=>{a.value&&(window.removeEventListener("resize",d),a.value.dispose()),e.value&&clearTimeout(e.value)}),(c,_)=>(h(),f("div",{id:c.id,class:"w-full h-full"},null,8,Ws))}}),ft=n=>(G("data-v-67d863c1"),n=n(),W(),n),Hs={class:"bg-black Regular"},Vs={class:"flex items-center justify-between mt-2 mb-4"},Js=ft(()=>t("span",{class:"text-[20px] Regular font-bold text-[#EBEBEB] uppercase"},"Networks Statistics",-1)),Ks={class:"w-fit"},Us={class:"border-box py-4 relative"},qs={class:"absolute top-2 right-4 cursor-pointer z-50"},Zs={class:"text-[#EDEDED] text-[13px] font-medium"},Qs={class:"flex items-center"},to={class:"flex-1 h-11"},eo={class:"text-[#EDEDED] text-[13px] font-medium"},so=ft(()=>t("span",{class:"flex-1 text-[13px] font-medium uppercase"}," CHECK IN ",-1)),oo=[so],ao={class:"flex-1 text-[13px] font-medium uppercase"},no=st('<div class="flex items-center text-[12px] space-x-8 mt-4" data-v-67d863c1><div class="flex items-center space-x-1" data-v-67d863c1><span class="w-3 h-3 rounded-full bg-[#EBEBEB]" data-v-67d863c1></span><span class="text-[#EBEBEB]" data-v-67d863c1>NETWORKS </span></div><div class="flex items-center space-x-1" data-v-67d863c1><span class="w-3 h-3 rounded-full bg-[#8C8C8C]" data-v-67d863c1></span><span class="text-[#8C8C8C]" data-v-67d863c1>REFERRALS </span></div><div class="flex items-center space-x-1" data-v-67d863c1><span class="w-3 h-3 rounded-full bg-[#2B2B2B]" data-v-67d863c1></span><span class="text-[#2B2B2B]" data-v-67d863c1>REWARD</span></div></div>',1),lo=C({__name:"PointsRecord",setup(n){const o=b(),s=new Date,l=new Date(s);l.setDate(s.getDate()-7);const a=b(!1),e=b([l.toISOString().split("T")[0],s.toISOString().split("T")[0]]),r=b(JSON.parse(localStorage.getItem("DAILY_STATISTIC")||"[]")),d=Q(),c=()=>{const[i,u]=e.value;if(i&&u){const m=new Date(i);if((new Date(u).getTime()-m.getTime())/(1e3*60*60*24)>30){pt.warning("Please select a date range of no more than 30 days."),e.value=[i,i];return}_()}},_=async()=>{try{if(a.value=!0,e.value){const i=await kt(e.value[0],e.value[1]);i&&i.code===200&&(r.value=i.data,o.value=Math.max(...i.data.map(u=>{const m=u.network_points+u.referral_points+u.earned_points;return parseFloat(m.toFixed(2))})),localStorage.setItem("DAILY_STATISTIC",JSON.stringify(i.data)))}}catch(i){console.log(i)}finally{a.value=!1}},w=i=>{const u=new Date,m=new Date(i);return u.getFullYear()===m.getFullYear()&&u.getMonth()===m.getMonth()&&u.getDate()===m.getDate()};return U(()=>d.getDisconnect,i=>{i||setTimeout(()=>{_()},5e3)}),N(async()=>{await q(),_()}),(i,u)=>{const m=Ct,y=Z,E=Rt,B=St,T=Xs,v=It,D=Tt;return h(),f("div",Hs,[t("div",Vs,[Js,t("div",Ks,[g(m,{modelValue:p(e),"onUpdate:modelValue":u[0]||(u[0]=x=>gt(e)?e.value=x:null),type:"daterange","range-separator":"-","start-placeholder":"Start date","end-placeholder":"End date",onChange:c,format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])])]),t("div",Us,[t("div",qs,[g(y,{onToRefresh:u[1]||(u[1]=x=>_())})]),bt((h(),it(v,{data:p(r),style:{width:"90%"},"max-height":"550px"},{empty:L(()=>[g(E)]),default:L(()=>[g(B,{prop:"date",label:"DATE",align:"center","min-width":"120px"},{default:L(x=>[t("span",Zs,k(("formatDate"in i?i.formatDate:p(K))(x.row.date)),1)]),_:1}),g(B,{label:"EARNED POINTS","min-width":"400px",align:"center"},{default:L(x=>[t("div",Qs,[t("div",to,[p(a)?ot("",!0):(h(),it(T,{key:0,id:`progressBar_${x.$index+1}`,data:x.row,maxPoints:p(o)},null,8,["id","data","maxPoints"]))]),t("span",eo,k((x.row.network_points+x.row.referral_points+x.row.checkin_points).toFixed(2)),1)])]),_:1}),g(B,{label:"CHECK IN",align:"center","min-width":"120px"},{default:L(x=>[w(x.row.date)&&x.row.checkin_points===0?(h(),f("div",{key:0,class:"w-[140px] text-[#EDEDED] border mx-auto border-[#EDEDED] rounded-full py-1 px-2 cursor-pointer flex items-center",onClick:u[2]||(u[2]=I=>i.$router.push("/missions"))},oo)):(h(),f("div",{key:1,class:O(["w-[140px] text-black mx-auto rounded-full py-1 px-2 flex items-center cursor-not-allowed",x.row.checkin_points===0?"bg-[#2E2E2E]":"bg-[#B0B0B0]"])},[t("span",ao,k(x.row.checkin_points===0?"expired":"checked in"),1)],2))]),_:1})]),_:1},8,["data"])),[[D,p(a)]])]),no])}}});const io=X(lo,[["__scopeId","data-v-67d863c1"]]),ro=""+globalThis.__publicAssetsURL("images/dashboard/line.png"),co={class:"w-full space-y-4 bg-black pb-[180px]"},uo=t("span",{class:"text-[20px] Regular font-bold text-[#EBEBEB]"},"GAEA ERA",-1),_o={class:"border-box z-50 relative bg-black"},po={class:"absolute top-2 right-4 cursor-pointer z-50"},mo={class:"grid grid-cols-5"},ho={key:0,class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[1.5px] bg-[#EBEBEB] z-50"},fo=t("div",{class:"w-full h-8 absolute -top-4 z-10"},[t("img",{src:ro,class:"w-full h-full",alt:""})],-1),vo={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},xo=t("div",{class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[2px] bg-[#EBEBEB] z-[999]"},null,-1),go={class:"Regular text-[12px]"},bo={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},wo=t("div",{class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[2px] bg-[#EBEBEB] z-[999]"},null,-1),yo={class:"Regular text-[12px]"},Eo={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},$o=t("div",{class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[2px] bg-[#EBEBEB] z-[999]"},null,-1),ko={class:"Regular text-[12px]"},Bo={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},Do=t("div",{class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[2px] bg-[#EBEBEB] z-[999]"},null,-1),Co={class:"Regular text-[12px]"},Ro={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},So={class:"Regular text-[12px]"},Io={class:"relative"},To={class:"w-[90%] h-[200px] mx-auto absolute -top-38 left-1/2 -translate-x-1/2 bg-black"},Mo=t("div",{class:"h-full absolute top-20 left-0 w-full z-20 rotate-180",style:{background:"linear-gradient(0.7deg, black 50.3%, rgba(23, 25, 97, 0) 80.99%)"}},null,-1),No=C({__name:"CapturingTheWeb",setup(n){const o=b(["ERA","START / END DATE","REFERRALS","GAEA POINTS","WORKING HOURS"]),s=b([]),l=async()=>{s.value=JSON.parse(localStorage.getItem("REWARD_ERA_INFO"))||[];const a=await Bt();a&&a.code===200&&(s.value=a.data,localStorage.setItem("REWARD_ERA_INFO",JSON.stringify(a.data)))};return N(()=>{l()}),(a,e)=>{const r=Z,d=ht;return h(),f("div",co,[uo,t("div",_o,[t("div",po,[g(r,{onToRefresh:e[0]||(e[0]=c=>l())})]),t("div",mo,[(h(!0),f(rt,null,ct(p(o),(c,_)=>(h(),f("div",{class:O(["py-6 text-[#EBEBEB] text-center relative bg-black",{"border-r border-[#B0B0B0] border-opacity-40":(_+1)%5!==0}]),key:_},[(_+1)%5!==0?(h(),f("div",ho)):ot("",!0),t("span",{class:O(["",_>=5?"Regular text-[12px]":"Regular font-[600] text-[14px]"])},k(c),3)],2))),128))]),(h(!0),f(rt,null,ct(p(s),(c,_)=>(h(),f("div",{class:"grid grid-cols-5 relative",key:_},[fo,t("div",vo,[xo,t("span",go,k(c.name),1)]),t("div",bo,[wo,t("span",yo,k(("formatDate"in a?a.formatDate:p(K))(c.start_date))+" / "+k(c.end_date=="-"?c.end_date:("formatDate"in a?a.formatDate:p(K))(c.end_date)),1)]),t("div",Eo,[$o,t("span",ko,k(c.referral_points),1)]),t("div",Bo,[Do,t("span",Co,k(c.total_points),1)]),t("div",Ro,[t("span",So,k(c.total_uptime),1)])]))),128))]),t("div",Io,[t("div",To,[g(d),Mo])])])}}}),zo={class:"w-full h-full flex flex-col adaptation-padding"},Lo={class:"w-[90%] mx-auto overflow-hidden relative"},Ao=t("div",{class:"absolute bottom-0 left-0 w-full h-full z-20",style:{background:"linear-gradient(0.37deg, black 35.3%, rgba(23, 25, 97, 0) 80.99%)"}},null,-1),Po={class:"w-full h-auto relative z-50 space-y-[49px] -top-26"},Oo={class:"w-full h-fit grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-4 bg-black z-20"},jo={class:"flex flex-col col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-2 space-y-4"},Fo={class:"w-full min-h-[216px] border-box relative"},Yo={class:"absolute top-2 right-4 cursor-pointer z-50"},Go={class:"h-full flex flex-col justify-between space-y-4"},Wo={class:"col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"},ra=C({__name:"dashboard",setup(n){const o=Q(),s=b(JSON.parse(localStorage.getItem("INTEGRAL_DATA")||"{}")),l=mt([]),a=async()=>{try{const e=await Dt();if(e&&e.code===200){localStorage.setItem("INTEGRAL_DATA",JSON.stringify(e.data)),s.value=e.data;const r=JSON.parse(localStorage.getItem("PLUGIN_DATA_INFO"));localStorage.setItem("PLUGIN_DATA_INFO",JSON.stringify({...r,...e.data})),await o.setPingInfo({...o.getPingInfo,today_uptime:e.data.today_uptime})}}catch(e){console.error("Error fetching data:",e)}};return N(async()=>{await q(),await a()}),(e,r)=>{var E,B;const d=ht,c=Z,_=Be,w=ds,i=Is,u=Gs,m=io,y=No;return h(),f("div",zo,[t("div",Lo,[g(d),Ao]),t("div",Po,[t("div",Oo,[t("div",jo,[t("div",Fo,[t("div",Yo,[g(c,{onToRefresh:r[0]||(r[0]=T=>a())})]),g(_)]),g(w)]),t("div",Go,[g(i,{num:(E=p(s))==null?void 0:E.today_total},null,8,["num"]),g(i,{icon:"total",title:"ERA2 POINTS",num:(B=p(s))==null?void 0:B.total_total,onToUpdate:r[1]||(r[1]=T=>a())},null,8,["num"])]),t("div",Wo,[g(u,{data:p(l)},null,8,["data"])])]),g(m),g(y)])])}}});export{ra as default};
