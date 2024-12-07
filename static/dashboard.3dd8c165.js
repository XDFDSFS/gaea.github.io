import{_ as S}from"./cursor-mask.966f5731.js";import{d as R,r as b,f as M,g as j,o as p,c as f,b as t,n as C,p as Y,h as G,i as ut,w as K,e as _,j as O,t as k,k as _t,l as tt,m as x,q as N,E as Z,s as U,v as nt,x as Q,y as pt,z as gt,A as xt,B as lt,F as it,C as rt}from"./entry.49fed3a6.js";import{_ as W}from"./plugin-vueexport-helper.c27b6911.js";import{_ as et}from"./el-popper.66c2c2a1.js";import{E as bt}from"./el-input.3f41b2b4.js";import{u as st}from"./user.ea2799ef.js";import{n as ct}from"./ping.9d8a1ed0.js";import{t as wt}from"./throttle.3832cdac.js";import{_ as yt}from"./client-only.ae7f7b8d.js";import{n as Et,a as $t,e as kt,r as Bt,b as Dt}from"./dashboard.ea574938.js";import{E as Ct,_ as Rt,a as St,b as It}from"./el-tooltip.7c576fe2.js";import{f as V}from"./utils.aeaeec7c.js";import"./el-checkbox.0dcbd30b.js";import{v as Tt}from"./el-loading.662de1f6.js";import"./referral.6b4cbce4.js";import"./request.33870e4f.js";import"./Fingerprinter.7720d583.js";import"./index.1735d320.js";const L=r=>(Y("data-v-3b54fc05"),r=r(),G(),r),Mt={class:"m-auto gaea_box relative cursor-pointer overflow-hidden z-[1]"},Nt=L(()=>t("svg",{class:"w-full h-full relative z-10",viewBox:"0 0 3712 1024",version:"1.1",fill:"black",xmlns:"http://www.w3.org/2000/svg","p-id":"4297",width:"100%",height:"100%"},[t("mask",{id:"gaea",fill:"black"},[t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"}),t("path",{id:"path",d:"M912.64 422.4V896c-117.76 61.44-247.04 87.04-380.16 87.04-282.88 0-488.96-185.6-488.96-476.16C43.52 216.32 249.6 30.72 532.48 30.72c143.36 0 270.08 32 360.96 116.48l-140.8 153.6c-53.76-56.32-119.04-85.76-220.16-85.76-170.24 0-281.6 122.88-281.6 291.84 0 168.96 111.36 291.84 281.6 291.84 87.04 0 151.04-24.32 188.16-44.8v-147.2H558.08V422.4h354.56z m81.92 537.6L1386.24 53.76h165.12L1945.6 960h-225.28l-78.08-192h-352l-75.52 192h-220.16z m579.84-360.96l-111.36-281.6-110.08 281.6h221.44zM2044.16 960V53.76h615.68v184.32h-416v168.96h392.96v184.32h-392.96v184.32h439.04V960h-638.72z m705.28 0L3141.12 53.76h165.12L3700.48 960H3475.2l-78.08-192h-352l-75.52 192h-220.16z m579.84-360.96l-111.36-281.6-110.08 281.6h221.44z","p-id":"4298",fill:"none",stroke:"black","stroke-width":"5"})]),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:"url(#gaea)",fill:"black"})],-1)),zt=L(()=>t("div",{class:"w-2 h-full bg-[black] absolute z-50 top-0 -left-1"},null,-1)),Lt=L(()=>t("div",{class:"w-2 h-full bg-[black] absolute z-50 top-0 -right-1"},null,-1)),At=L(()=>t("div",{class:"w-full h-2 bg-[black] absolute z-50 bottom-0 -right-1"},null,-1)),Ot=L(()=>t("div",{class:"mask"},null,-1)),Pt=L(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),Ft=[Pt],jt=L(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),Yt=[jt],Gt=L(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),Wt=[Gt],Xt=R({__name:"Gaea",setup(r){const o=b({transform:"translate(0, 0)"});return M(()=>{const e=document.querySelector("#path"),n=e.getTotalLength();e.style.strokeDasharray=n.toString(),e.style.strokeDashoffset=n.toString(),e.classList.add("path-animation");const s=document.querySelector(".gaea_box"),a=l=>{const d=s.getBoundingClientRect(),m=l.clientX-d.left,w=l.clientY-d.top,i=200,u=200,h=d.width-i,y=d.height-u+20,E=Math.max(0,Math.min(m-i/2,h)),B=Math.max(-20,Math.min(w-u/2,y));o.value={transform:`translate(${E}px, ${B}px)`}},c=l=>{requestAnimationFrame(()=>a(l))};document.addEventListener("mousemove",c),j(()=>{document.removeEventListener("mousemove",c)})}),(e,n)=>(p(),f("div",Mt,[Nt,zt,Lt,At,Ot,t("div",{class:"mask-animation",style:C(o.value)},Ft,4),t("div",{class:"mask-animation mask-animation-frist",style:C(o.value)},Yt,4),t("div",{class:"mask-animation mask-animation-second",style:C(o.value)},Wt,4)]))}});const mt=W(Xt,[["__scopeId","data-v-3b54fc05"]]),Ht={class:"w-full h-full absolute top-0 left-0 z-5"},Jt={key:1,class:"w-[160px] aspect-[1/1] cursor-pointer relative"},Vt=_t('<div class="w-full h-full absolute top-0 left-0 z-5 scale-[1.07]"><svg width="100%" height="100%" viewBox="0 0 100 100"><circle class="inner-circle" cx="50" cy="50" r="45" fill="none" stroke-width="2" stroke="#2E2E2E" stroke-dasharray="2,6" transform="rotate(50 50 50)"></circle><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#2E2E2E"><tspan class="text uppercase Regular" style="font-size:30px;"> 0 </tspan></text></svg></div>',1),Kt=[Vt],Ut=R({__name:"ProgressBar",setup(r){const o=st(),e=b(0),n=b(null),s=b(!0),a=b(!1),c=ut(()=>({backgroundImage:`conic-gradient(transparent 0deg, white, white, transparent ${e.value}%)`})),l=()=>{const{score:d}=o.getPingNetworkInfo;a.value?e.value>d?(s.value=!1,e.value-=.05):(clearInterval(n.value),s.value=!1):e.value<100?e.value+=1:(a.value=!0,n.value=setInterval(l,50))};return K(()=>o.getDisconnect,d=>{d||(e.value=0,a.value=!1,s.value=!0,n.value=setInterval(l,40))}),M(()=>{o.getDisconnect||(e.value=0,a.value=!1,s.value=!0,n.value=setInterval(l,40))}),(d,m)=>_(o).getDisconnect?(p(),f("div",Jt,Kt)):(p(),f("div",{key:0,class:"w-[160px] aspect-[1/1] cursor-pointer relative shadow-progress",style:C(_(c))},[t("div",Ht,[t("span",{class:O(["absolute top-1/2 left-1/2 z-[99] -translate-y-1/2 -translate-x-1/2 Regular font-bold",_(s)?"text-[14px] text-[#2E2E2E]":"text-[40px] text-[#EDEDED]"])},k(_(s)?"Connecting":_(e).toFixed(1)),3)])],4))}});const qt={class:"w-full h-full flex items-center justify-center px-8 pb-2 pt-6"},Zt={key:0,class:"flex-1 h-full flex flex-col items-start"},Qt=t("span",{class:"text-[20px] Regular font-bold text-[#EBEBEB] uppercase"},"NETWORK IS CONNECTED",-1),te={class:"flex items-center space-x-2 mt-2"},ee={key:0,class:"w-4 h-3"},se=["src"],oe={class:"text-[10px] Regular u-line-1 text-[#EBEBEB]"},ae=t("span",{class:"text-black Regular font-medium text-[14px]"}," DISCONNECT ",-1),ne={key:1,class:"flex-1 h-full flex flex-col items-start"},le=t("div",{class:"flex flex-col items-start justify-center"},[t("span",{class:"text-[20px] Regular font-bold text-[#EBEBEB] uppercase"},"Network Connection"),t("span",{class:"text-[10px] text-[#EBEBEB] Regular font-light"}," Connect to the network to start earning ")],-1),ie=t("span",{class:"text-black Regular font-medium text-[14px]"}," CONNECTION",-1),re=R({__name:"NetworkPing",props:{data:{default:[]}},setup(r){const o=st(),e=b(!1),n=c=>{if(c)return c.startsWith("http")?c:`https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${c}.svg`},s=async()=>{try{e.value=!0,await ct()&&(o.setPingIntervalTime(ct),o.setDisconnect(!1))}catch{e.value=!1,Z.error("Connection error, please try again later")}finally{e.value=!1}},a=()=>{o.setDisconnect(!0),Z.success("Disconnected successfully"),o.clearPingIntervalTime(),o.setPingInfo(null)};return(c,l)=>{var w,i,u;const d=bt,m=Ut;return p(),f("div",qt,[_(o).getDisconnect?(p(),f("div",ne,[le,x(d,{class:"mt-17 hover:scale-105",round:"",onClick:l[1]||(l[1]=h=>s()),loading:_(e)},{default:N(()=>[ie]),_:1},8,["loading"])])):(p(),f("div",Zt,[Qt,t("div",te,[(w=_(o).getPingInfo)!=null&&w.country_icon?(p(),f("div",ee,[t("img",{src:n((i=_(o).getPingInfo)==null?void 0:i.country_icon),class:"w-full h-full object-cover"},null,8,se)])):tt("",!0),t("span",oe,k((u=_(o).getPingInfo)==null?void 0:u.ip_address),1)]),x(d,{class:"mt-15 hover:scale-105",color:"#B0B0B0",round:"",onClick:l[0]||(l[0]=h=>("throttle"in c?c.throttle:_(wt))(()=>{a()})),loading:_(e)},{default:N(()=>[ae]),_:1},8,["loading"])])),x(m)])}}}),X=r=>(Y("data-v-c29fd60c"),r=r(),G(),r),ce={class:"w-full h-full relative z-10",viewBox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","p-id":"4297",width:"100%",height:"100%"},de=["id"],ue=X(()=>t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"},null,-1)),_e=["id"],pe=["mask"],me=X(()=>t("div",{class:"mask"},null,-1)),he=X(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),fe=[he],ve=X(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),ge=[ve],xe=X(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),be=[xe],we=R({__name:"BrowserChrome",props:{id:{default:"browser_chrome"}},setup(r){const o=r,e=b({transform:"translate(0, 0)"});return M(()=>{const n=document.querySelector(`.${o.id}_G_box`),s=c=>{const l=n.getBoundingClientRect(),d=c.clientX-l.left,m=c.clientY-l.top,w=20,i=20,u=l.width-w,h=l.height-i+20,y=Math.max(0,Math.min(d-w/2,u)),E=Math.max(-20,Math.min(m-i/2,h));e.value={transform:`translate(${y}px, ${E}px)`}},a=c=>{requestAnimationFrame(()=>s(c))};document.addEventListener("mousemove",a),j(()=>{document.removeEventListener("mousemove",a)})}),(n,s)=>(p(),f("div",{class:O(["m-auto relative cursor-pointer overflow-hidden z-[1]",`${n.$props.id}_G_box`])},[(p(),f("svg",ce,[t("mask",{id:`${n.$props.id}_G`,fill:"black"},[ue,t("path",{id:`${n.$props.id}_path`,stroke:"rgba(46, 46, 46, 1.00)","stroke-width":"1.5","stroke-linejoin":"round","stroke-linecap":"round",fill:"none",d:"M50 31.2502C60.3554 31.2502 68.75 39.6447 68.75 50.0001C68.75 60.3556 60.3554 68.7501 50 68.7501C39.6446 68.7501 31.25 60.3556 31.25 50.0001C31.25 39.6447 39.6446 31.2502 50 31.2502ZM50 31.2502L87.2196 31.2502M35.4167 89.0435L61.7581 64.5835M12.5 31.8162L35.1565 61.5668M50 91.6668C73.0119 91.6668 91.6667 73.012 91.6667 50.0001C91.6667 26.9883 73.0119 8.3335 50 8.3335C26.9882 8.3335 8.33337 26.9883 8.33337 50.0001C8.33337 73.012 26.9882 91.6668 50 91.6668Z"},null,8,_e)],8,de),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:`url(#${n.$props.id}_G)`,fill:"black"},null,8,pe)])),me,t("div",{class:"mask-animation",style:C(_(e))},fe,4),t("div",{class:"mask-animation mask-animation-frist",style:C(_(e))},ge,4),t("div",{class:"mask-animation mask-animation-second",style:C(_(e))},be,4)],2))}});const ye=W(we,[["__scopeId","data-v-c29fd60c"]]),A=r=>(Y("data-v-e07ba3c6"),r=r(),G(),r),Ee={class:"w-full h-full relative z-10",viewBox:"0 0 96 96",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","p-id":"4297",width:"100%",height:"100%"},$e=["id"],ke=A(()=>t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"},null,-1)),Be=["id"],De=A(()=>t("path",{fill:"rgba(46, 46, 46, 1.00)",d:"M11 15.25L84.9999 15.25C85.9664 15.25 86.7499 16.0335 86.7499 17L86.7499 62.9999C86.7499 63.9664 85.9664 64.7499 84.9999 64.7499L11 64.7499C10.0335 64.7499 9.25 63.9664 9.25 62.9999L9.25 17C9.25 16.0335 10.0335 15.25 11 15.25ZM11 16.75C10.8619 16.75 10.75 16.8619 10.75 17L10.75 62.9999C10.75 63.138 10.8619 63.2499 11 63.2499L84.9999 63.2499C85.138 63.2499 85.2499 63.138 85.2499 62.9999L85.2499 17C85.2499 16.8619 85.138 16.75 84.9999 16.75L11 16.75Z"},null,-1)),Ce=A(()=>t("path",{stroke:"rgba(46, 46, 46, 1.00)","stroke-width":"1.5","stroke-linejoin":"round","stroke-linecap":"round",d:"M44 54L52 54"},null,-1)),Re=A(()=>t("path",{stroke:"rgba(46, 46, 46, 1.00)","stroke-width":"1.5","stroke-linejoin":"round","stroke-linecap":"round",d:"M28 82L67.9999 82"},null,-1)),Se=["mask"],Ie=A(()=>t("div",{class:"mask"},null,-1)),Te=A(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),Me=[Te],Ne=A(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),ze=[Ne],Le=A(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),Ae=[Le],Oe=R({__name:"Computer",props:{id:{default:"browser_chrome"}},setup(r){const o=r,e=b({transform:"translate(0, 0)"});return M(()=>{const n=document.querySelector(`.${o.id}_G_box`),s=c=>{const l=n.getBoundingClientRect(),d=c.clientX-l.left,m=c.clientY-l.top,w=20,i=20,u=l.width-w,h=l.height-i,y=Math.max(0,Math.min(d-w/2,u)),E=Math.max(0,Math.min(m-i/2,h));e.value={transform:`translate(${y}px, ${E}px)`}},a=c=>{requestAnimationFrame(()=>s(c))};document.addEventListener("mousemove",a),j(()=>{document.removeEventListener("mousemove",a)})}),(n,s)=>(p(),f("div",{class:O(["m-auto relative cursor-pointer overflow-hidden z-[1]",`${n.$props.id}_G_box`])},[(p(),f("svg",Ee,[t("mask",{id:`${n.$props.id}_G`,fill:"black"},[ke,t("rect",{id:`${n.$props.id}_path`,x:"38",y:"64",width:"19.999996185302734",height:"17.99999237060547",stroke:"rgba(46, 46, 46, 1.00)",fill:"none","stroke-width":"2","stroke-linejoin":"round","stroke-linecap":"round"},null,8,Be),De,Ce,Re],8,$e),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:`url(#${n.$props.id}_G)`,fill:"black"},null,8,Se)])),Ie,t("div",{class:"mask-animation",style:C(_(e))},Me,4),t("div",{class:"mask-animation mask-animation-frist",style:C(_(e))},ze,4),t("div",{class:"mask-animation mask-animation-second",style:C(_(e))},Ae,4)],2))}});const Pe=W(Oe,[["__scopeId","data-v-e07ba3c6"]]),Fe={class:"w-full grid grid-cols-2 gap-4"},je={class:"w-[80px] aspect-[1/1] absolute -left-5 -bottom-5"},Ye=t("div",{class:"w-full h-full flex flex-col items-end justify-between py-3 px-3 space-y-5"},[t("span",{class:"u-line-1 Regular text-[14px] text-[#EBEBEB] z-[99]"},"GAEA EXTENSION"),t("span",{class:"font-bold Regular text-[16px] text-[#EBEBEB] z-[99]"},"1.2X REWARDS")],-1),Ge={class:"h-full border-box relative cursor-pointer"},We={class:"w-[80px] aspect-[1/1] absolute -left-5 -bottom-5"},Xe=t("div",{class:"w-full h-full flex flex-col items-end justify-between py-3 px-3 space-y-5"},[t("span",{class:"u-line-1 Regular text-[14px] text-[#4D4D4D] z-[99]"},"GAEA DESKTOP APP"),t("span",{class:"font-bold Regular text-[16px] text-[#4D4D4D] z-[99]"},"1.4X REWARDS")],-1),He=R({__name:"RewardCategory",setup(r){const o=()=>{window.open("https://chromewebstore.google.com/detail/gaea-extension/cpjicfogbgognnifjgmenmaldnmeeeib","_blank")};return(e,n)=>{const s=ye,a=Pe;return p(),f("div",Fe,[t("div",{class:"h-full border-box relative cursor-pointer",onClick:o},[t("div",je,[x(s,{id:"chrome"})]),Ye]),t("div",Ge,[t("div",We,[x(a)]),Xe])])}}}),P=r=>(Y("data-v-0da405e1"),r=r(),G(),r),Je={class:"w-full h-full relative z-10 svg",viewBox:"0 0 980 954",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4297",width:"100%",height:"100%",fill:"#fff"},Ve=["id"],Ke=P(()=>t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"},null,-1)),Ue=["id"],qe=P(()=>t("path",{class:"cls-2",fill:"none",stroke:"black","stroke-width":"3",d:"M507.239,717.264h58.7V595.526s-17.613-115.017,128.27-128.259c21.281,0,41.308-2.174,41.308-2.174s-123.724-16.112-182.383,26.881c7.395-5.419-45.157,26.562-45.157,104.127C507.976,626.8,507.239,725,507.239,717.264Z"},null,-1)),Ze=P(()=>t("path",{"stroke-width":"3",class:"cls-2",fill:"none",stroke:"black",d:"M748.56,273.791s-149.449,1.794-263.062,0c-55.194,2.606-108.4,3.227-163.451,42.978C275.5,352.9,246.923,401.237,235.48,462.919S250.328,617.249,316,669.48c27.607,21.958,91.341,52.339,167.326,49.958,0.856-3.366,0-60.433,0-71.739-65.066,1.734-117.114-25.639-145.663-65.216-25.427-35.251-31.4-80.587-23.914-117.39C346.192,352.541,437.461,343.36,485.5,345.529c56.246-.567,183.336,2.817,241.321-45.651C745.952,281.5,748.56,273.791,748.56,273.791Z"},null,-1)),Qe=["mask"],ts=P(()=>t("div",{class:"mask"},null,-1)),es=P(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),ss=[es],os=P(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),as=[os],ns=P(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),ls=[ns],is=R({__name:"G",props:{id:{default:"today"}},setup(r){const o=r,e=b({transform:"translate(0, 0)"});return M(()=>{const n=document.querySelector(`.${o.id}_G_box`),s=c=>{const l=n.getBoundingClientRect(),d=c.clientX-l.left,m=c.clientY-l.top,w=20,i=20,u=l.width-w,h=l.height-i,y=Math.max(0,Math.min(d-w/2,u)),E=Math.max(0,Math.min(m-i/2,h));e.value={transform:`translate(${y}px, ${E}px)`}},a=c=>{requestAnimationFrame(()=>s(c))};document.addEventListener("mousemove",a),j(()=>{document.removeEventListener("mousemove",a)})}),(n,s)=>(p(),f("div",{class:O(["m-auto relative cursor-pointer overflow-hidden z-[1]",`${n.$props.id}_G_box`])},[(p(),f("svg",Je,[t("mask",{id:`${n.$props.id}_G`,fill:"black"},[Ke,t("circle",{fill:"none",stroke:"black","stroke-width":"3",class:"glow-path",id:`${n.$props.id}_path`,cx:"490.25",cy:"475.375",r:"373.406"},null,8,Ue),qe,Ze],8,Ve),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:`url(#${n.$props.id}_G)`,fill:"black"},null,8,Qe)])),ts,t("div",{class:"mask-animation",style:C(e.value)},ss,4),t("div",{class:"mask-animation mask-animation-frist",style:C(e.value)},as,4),t("div",{class:"mask-animation mask-animation-second",style:C(e.value)},ls,4)],2))}});const rs=W(is,[["__scopeId","data-v-0da405e1"]]),cs={class:"w-full h-full flex-1 flex flex-col items-end justify-between pb-2 pt-6 px-4 space-y-2 border-box relative"},ds={class:"text-[#EBEBEB] text-[14px] text-center uppercase z-[99]"},us={class:"text-[24px] text-[#EBEBEB] font-bold z-[99]"},_s={class:"w-[160px] aspect-[1/1] absolute -left-9 -bottom-9"},ps=R({__name:"EarnInfoCard",props:{num:{default:0},icon:{default:"today"},title:{default:"Today's Points"}},emits:["toUpdate"],setup(r,{emit:o}){const e=r;return(n,s)=>{const a=rs;return p(),f("div",cs,[t("div",ds,k(e.title),1),t("span",us,k(e.num),1),t("div",_s,[x(a,{id:e.icon},null,8,["id"])])])}}});let F=null;const dt=(r,o=500,e=!1)=>{if(F!==null&&clearTimeout(F),e){const n=!F;F=setTimeout(function(){F=null},o),n&&typeof r=="function"&&r()}else F=setTimeout(function(){typeof r=="function"&&r()},o)},ms={class:"w-full h-full min-h-[250px] border-box relative"},hs={class:"absolute top-2 right-4 cursor-pointer z-50"},fs=["id"],vs={class:"text-[#EBEBEB] flex items-center space-x-1"},gs=t("div",{class:"w-2 h-2 bg-[#EBEBEB] rounded-full"},null,-1),xs=t("span",{class:"text-[14px] Regular"},"ONLINE ： ",-1),bs={class:"text-[14px] Regular font-semibold text-[#EBEBEB]"},ws={class:"text-[#4D4D4D] flex items-center space-x-1"},ys=t("div",{class:"w-2 h-2 bg-[#4D4D4D] rounded-full"},null,-1),Es=t("span",{class:"text-[14px] Regular"},"OFFLINE ： ",-1),$s={class:"text-[14px] Regular font-semibold text-[#4D4D4D]"},ks=R({__name:"Map",props:{id:{default:"echartMap"},data:{default:()=>[]}},setup(r){const o=r,{$eChart:e}=Q(),{$worldData:n}=Q(),s=n;e.registerMap("world",s);const a=b(),c=b(!0),l=b(null),d=b(JSON.parse(localStorage.getItem("NETWORK_INFO_LIST")||"{}")),m=b(JSON.parse(localStorage.getItem("NETWORK_COUNTRY")||"[]")),w=v=>{const D=new Map;for(let g=0;g<m.value.length;g++){const I=m.value[g],$=1,H=.1,q=`rgba(235, 235, 235, ${Math.max(H,$-g/m.value.length*($-H))})`;D.has(I.country)||D.set(I.country,{name:I.country,itemStyle:{areaColor:q,borderColor:"none"}})}return{regionsData:Array.from(D.values())}},i=ut(()=>w(o.data)),u=async()=>{a.value&&(a.value.dispose(),a.value=null);const v=document.getElementById(o.id);if(!v||v.clientWidth===0||v.clientHeight===0)return;a.value=e.init(v);const{regionsData:D}=i.value,g={animation:!1,progressive:500,progressiveThreshold:3e3,geo:{type:"map",map:"world",zoom:1.2,roam:!1,scaleLimit:{min:1.2,max:3},itemStyle:{areaColor:"#2E2E2E",borderColor:"none",borderType:"none"},emphasis:{itemStyle:{areaColor:"none"},label:{show:!1,color:"#fff"}},regions:D.map(I=>({...I}))},series:[]};a.value.setOption(g)};K(()=>o.data,()=>{c.value&&dt(u,300)},{deep:!0});const h=async()=>{try{const v=await Et();v&&v.code===200&&(d.value=v.data,localStorage.setItem("NETWORK_INFO_LIST",JSON.stringify(v.data)))}catch(v){console.error("error:",v)}},y=async()=>{try{const v=await $t();v&&v.code===200&&(m.value=v.data,localStorage.setItem("NETWORK_COUNTRY",JSON.stringify(v.data)))}catch(v){console.error("error:",v)}},E=()=>{a.value&&a.value.resize()},B=()=>{a.value&&dt(E(),300)};M(async()=>{c.value=!0,await U(),z(),u(),window.addEventListener("resize",B)});const z=async()=>{await y(),h()};return j(()=>{c.value=!1,a.value&&(a.value.dispose(),a.value=null),l.value&&clearTimeout(l.value),window.removeEventListener("resize",B)}),(v,D)=>{const g=et,I=yt;return p(),f("div",ms,[t("div",hs,[x(g,{onToRefresh:D[0]||(D[0]=$=>z())})]),t("div",{id:v.id,class:"w-full h-full"},null,8,fs),D[1]||(nt(-1),D[1]=t("div",{class:"flex flex-col justify-end space-y-1 absolute bottom-4 left-8 z-50"},[t("div",vs,[gs,xs,x(I,null,{default:N(()=>{var $;return[t("span",bs,k((($=_(d))==null?void 0:$.devices)||0),1)]}),_:1})]),t("div",ws,[ys,Es,x(I,null,{default:N(()=>{var $;return[t("span",$s,k((($=_(d))==null?void 0:$.users)||0),1)]}),_:1})])]),nt(1),D[1])])}}}),Bs=["id"],Ds=R({__name:"ProgressBar",props:{id:{default:""},data:{default:()=>({network_points:0,referral_points:0,earned_points:0,date:""})},maxPoints:{default:200}},setup(r){const o=r,{$eChart:e}=Q(),n=b(["#EBEBEB","#8C8C8C","#2B2B2B"]),s=pt(),a=b(null),c=async()=>{s.value&&s.value.dispose();const d=document.getElementById(o.id);if(!d||d.clientWidth===0||d.clientHeight===0)return;s.value=e.init(d);const m=30,w=o.maxPoints===0?100:Math.ceil(o.maxPoints/100)*100,i=o.data.network_points===0?.1:o.data.network_points,u=o.data.referral_points===0?.1:o.data.referral_points,h=o.data.earned_points===0?.1:o.data.earned_points,y=i+u+h,E=2e3,B=5e3,z=Math.min(E*(i/y),B),v=Math.min(E*(u/y),B),D=Math.min(E*(h/y),B),g=z,I=z+v,$=[{name:"NETWORKS",target:i,color:n.value[0]},{name:"REFERRALS",target:u,color:n.value[1]},{name:"REWARD",target:h,color:n.value[2]}],H={backgroundColor:"black",grid:{top:"1%",left:"1%",right:"1%",bottom:"1%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(150,150,150,0)"}},appendToBody:!0,formatter:ot=>{var at;const q=ot;let J=0;const ft=(at=o.data)==null?void 0:at.date,vt=q.map(T=>{if(T.componentSubType==="bar")return J+=Number(T.value)||0,`
           <div class="flex items-center justify-between mt-2 ">
             <div class="flex items-center space-x-1" style="color: ${T.color};">
               <span class="w-3 h-3 rounded-full" style="background-color: ${T.color};"></span>
               <span >${T.seriesName}</span>
             </div>
             <span style="color: ${T.color};">${typeof T.value=="number"?T.value==.1?0:T.value.toFixed(2):T.value}</span>
           </div>`}).join("");return`
         <div class="bg-black rounded-lg text-white text-xs ">
           <div class="flex items-center  pb-2 space-x-32">
             <span>${V(ft)}</span>
           </div>
           <div class="flex items-center justify-between border-b border-[#2E2E2E] pb-2 space-x-32">
             <span>TOTAL:</span>
             <span class="text-[#EBEBEB]">${typeof J=="number"?J.toFixed(2):J}</span>
           </div>${vt}
         </div>`},textStyle:{color:"#FFFFFF"},borderColor:"#2E2E2E",backgroundColor:"black"},xAxis:{show:!1,type:"value",min:0,max:w,interval:25,splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}},yAxis:[{data:[""],splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}}],series:[{type:"bar",name:$[0].name,barWidth:m,itemStyle:{color:n.value[0],shadowBlur:4,shadowColor:"none"},data:[$[0].target],z:1,stack:"total",animationDuration:z,animationDelay:0},{type:"bar",name:$[1].name,barWidth:m,itemStyle:{color:$[1].color,shadowBlur:4,shadowColor:"none"},data:[$[1].target],z:1,stack:"total",animationDuration:v,animationDelay:g},{type:"bar",name:$[2].name,barWidth:m,itemStyle:{color:$[2].color,shadowBlur:4,shadowColor:"none"},data:[$[2].target],z:1,stack:"total",animationDuration:D,animationDelay:I},{type:"pictorialBar",itemStyle:{color:"#000"},symbolRepeat:"fixed",symbolMargin:4,symbol:"rect",symbolClip:!0,symbolSize:[2,m],symbolPosition:"start",data:[i+u+h],z:2}]};s.value.setOption(H)};K(()=>o.data,c,{deep:!0});const l=()=>{s.value&&(a.value&&clearTimeout(a.value),a.value=setTimeout(()=>{s.value.resize()},300))};return M(async()=>{await U(),setTimeout(c,500),window.addEventListener("resize",l)}),j(()=>{s.value&&(window.removeEventListener("resize",l),s.value.dispose()),a.value&&clearTimeout(a.value)}),(d,m)=>(p(),f("div",{id:d.id,class:"w-full h-full"},null,8,Bs))}}),ht=r=>(Y("data-v-16045ac1"),r=r(),G(),r),Cs={class:"bg-black Regular"},Rs={class:"flex items-center justify-between mt-2 mb-4"},Ss=ht(()=>t("span",{class:"text-[20px] Regular font-bold text-[#EBEBEB] uppercase"},"Networks Statistics",-1)),Is={class:"w-fit"},Ts={class:"border-box py-4 relative"},Ms={class:"absolute top-2 right-4 cursor-pointer z-50"},Ns={class:"text-[#EDEDED] text-[13px] font-medium"},zs={class:"flex items-center"},Ls={class:"flex-1 h-11"},As={class:"text-[#EDEDED] text-[13px] font-medium"},Os=ht(()=>t("span",{class:"flex-1 text-[13px] font-medium uppercase"}," CHECK IN ",-1)),Ps=[Os],Fs={class:"flex-1 text-[13px] font-medium uppercase"},js=_t('<div class="flex items-center text-[12px] space-x-8 mt-4" data-v-16045ac1><div class="flex items-center space-x-1" data-v-16045ac1><span class="w-3 h-3 rounded-full bg-[#EBEBEB]" data-v-16045ac1></span><span class="text-[#EBEBEB]" data-v-16045ac1>NETWORKS </span></div><div class="flex items-center space-x-1" data-v-16045ac1><span class="w-3 h-3 rounded-full bg-[#8C8C8C]" data-v-16045ac1></span><span class="text-[#8C8C8C]" data-v-16045ac1>REFERRALS </span></div><div class="flex items-center space-x-1" data-v-16045ac1><span class="w-3 h-3 rounded-full bg-[#2B2B2B]" data-v-16045ac1></span><span class="text-[#2B2B2B]" data-v-16045ac1>REWARD</span></div></div>',1),Ys=R({__name:"PointsRecord",setup(r){const o=b(),e=new Date,n=new Date(e);n.setDate(e.getDate()-7);const s=b(!1),a=b([n.toISOString().split("T")[0],e.toISOString().split("T")[0]]),c=b(JSON.parse(localStorage.getItem("DAILY_STATISTIC")||"[]")),l=st(),d=()=>{const[i,u]=a.value;if(i&&u){const h=new Date(i);if((new Date(u).getTime()-h.getTime())/(1e3*60*60*24)>30){Z.warning("Please select a date range of no more than 30 days."),a.value=[i,i];return}m()}},m=async()=>{try{if(s.value=!0,a.value){const i=await kt(a.value[0],a.value[1]);i&&i.code===200&&(c.value=i.data,o.value=Math.max(...i.data.map(u=>{const h=u.network_points+u.referral_points+u.earned_points;return parseFloat(h.toFixed(2))})),localStorage.setItem("DAILY_STATISTIC",JSON.stringify(i.data)))}}catch(i){console.log(i)}finally{s.value=!1}},w=i=>{const u=new Date,h=new Date(i);return u.getFullYear()===h.getFullYear()&&u.getMonth()===h.getMonth()&&u.getDate()===h.getDate()};return K(()=>l.getDisconnect,i=>{i||setTimeout(()=>{m()},5e3)}),M(async()=>{await U(),m()}),(i,u)=>{const h=Ct,y=et,E=Rt,B=St,z=Ds,v=It,D=Tt;return p(),f("div",Cs,[t("div",Rs,[Ss,t("div",Is,[x(h,{modelValue:_(a),"onUpdate:modelValue":u[0]||(u[0]=g=>gt(a)?a.value=g:null),type:"daterange","range-separator":"-","start-placeholder":"Start date","end-placeholder":"End date",onChange:d,format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])])]),t("div",Ts,[t("div",Ms,[x(y,{onToRefresh:u[1]||(u[1]=g=>m())})]),xt((p(),lt(v,{data:_(c),style:{width:"100%"},"max-height":"550px"},{empty:N(()=>[x(E)]),default:N(()=>[x(B,{prop:"date",label:"DATE",align:"center","min-width":"120px"},{default:N(g=>[t("span",Ns,k(("formatDate"in i?i.formatDate:_(V))(g.row.date)),1)]),_:1}),x(B,{label:"EARNED POINTS","min-width":"400px",align:"center"},{default:N(g=>[t("div",zs,[t("div",Ls,[_(s)?tt("",!0):(p(),lt(z,{key:0,id:`progressBar_${g.$index+1}`,data:g.row,maxPoints:_(o)},null,8,["id","data","maxPoints"]))]),t("span",As,k((g.row.network_points+g.row.referral_points+g.row.checkin_points).toFixed(2)),1)])]),_:1}),x(B,{label:"CHECK IN",align:"center","min-width":"120px"},{default:N(g=>[w(g.row.date)&&g.row.checkin_points===0?(p(),f("div",{key:0,class:"w-[140px] text-[#EDEDED] border mx-auto border-[#EDEDED] rounded-full py-1 px-2 cursor-pointer flex items-center",onClick:u[2]||(u[2]=I=>i.$router.push("/missions"))},Ps)):(p(),f("div",{key:1,class:O(["w-[140px] text-black mx-auto rounded-full py-1 px-2 flex items-center cursor-not-allowed",g.row.checkin_points===0?"bg-[#2E2E2E]":"bg-[#B0B0B0]"])},[t("span",Fs,k(g.row.checkin_points===0?"expired":"checked in"),1)],2))]),_:1})]),_:1},8,["data"])),[[D,_(s)]])]),js])}}});const Gs=W(Ys,[["__scopeId","data-v-16045ac1"]]),Ws=""+globalThis.__publicAssetsURL("images/dashboard/line.png"),Xs={class:"w-full space-y-4 bg-black pb-[180px]"},Hs=t("span",{class:"text-[20px] Regular font-bold text-[#EBEBEB]"},"GAEA ERA",-1),Js={class:"border-box z-50 relative bg-black"},Vs={class:"grid grid-cols-5"},Ks={key:0,class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[1.5px] bg-[#EBEBEB] z-50"},Us=t("div",{class:"w-full h-8 absolute -top-4 z-10"},[t("img",{src:Ws,class:"w-full h-full",alt:""})],-1),qs={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},Zs=t("div",{class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[2px] bg-[#EBEBEB] z-[999]"},null,-1),Qs={class:"Regular text-[12px]"},to={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},eo=t("div",{class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[2px] bg-[#EBEBEB] z-[999]"},null,-1),so={class:"Regular text-[12px]"},oo={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},ao=t("div",{class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[2px] bg-[#EBEBEB] z-[999]"},null,-1),no={class:"Regular text-[12px]"},lo={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},io=t("div",{class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[2px] bg-[#EBEBEB] z-[999]"},null,-1),ro={class:"Regular text-[12px]"},co={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},uo={class:"Regular text-[12px]"},_o={class:"relative"},po={class:"w-[90%] h-[200px] mx-auto absolute -top-38 left-1/2 -translate-x-1/2 bg-black"},mo=t("div",{class:"h-full absolute top-20 left-0 w-full z-20 rotate-180",style:{background:"linear-gradient(0.7deg, black 50.3%, rgba(23, 25, 97, 0) 80.99%)"}},null,-1),ho=R({__name:"CapturingTheWeb",setup(r){const o=b(["ERA","START / END DATE","REFERRALS","GAEA POINTS","WORKING HOURS"]),e=b([]),n=async()=>{e.value=JSON.parse(localStorage.getItem("REWARD_ERA_INFO"))||[];const s=await Bt();s&&s.code===200&&(e.value=s.data,localStorage.setItem("REWARD_ERA_INFO",JSON.stringify(s.data)))};return M(()=>{n()}),(s,a)=>{const c=mt;return p(),f("div",Xs,[Hs,t("div",Js,[t("div",Vs,[(p(!0),f(it,null,rt(_(o),(l,d)=>(p(),f("div",{class:O(["py-6 text-[#EBEBEB] text-center relative bg-black",{"border-r border-[#B0B0B0] border-opacity-40":(d+1)%5!==0}]),key:d},[(d+1)%5!==0?(p(),f("div",Ks)):tt("",!0),t("span",{class:O(["",d>=5?"Regular text-[12px]":"Regular font-[600] text-[14px]"])},k(l),3)],2))),128))]),(p(!0),f(it,null,rt(_(e),(l,d)=>(p(),f("div",{class:"grid grid-cols-5 relative",key:d},[Us,t("div",qs,[Zs,t("span",Qs,k(l.name),1)]),t("div",to,[eo,t("span",so,k(("formatDate"in s?s.formatDate:_(V))(l.start_date))+" / "+k(l.end_date=="-"?l.end_date:("formatDate"in s?s.formatDate:_(V))(l.end_date)),1)]),t("div",oo,[ao,t("span",no,k(l.referral_points),1)]),t("div",lo,[io,t("span",ro,k(l.total_points),1)]),t("div",co,[t("span",uo,k(l.total_uptime),1)])]))),128))]),t("div",_o,[t("div",po,[x(c),mo])])])}}}),fo={class:"w-full h-full flex flex-col adaptation-padding"},vo={class:"w-[90%] mx-auto overflow-hidden relative"},go=t("div",{class:"absolute bottom-0 left-0 w-full h-full z-20",style:{background:"linear-gradient(0.37deg, black 35.3%, rgba(23, 25, 97, 0) 80.99%)"}},null,-1),xo={class:"w-full h-auto relative z-50 space-y-[49px] -top-26"},bo={class:"w-full h-fit grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-4 bg-black z-20"},wo={class:"flex flex-col col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-2 space-y-4"},yo={class:"w-full min-h-[216px] border-box relative"},Eo={class:"absolute top-2 right-4 cursor-pointer z-50"},$o={class:"h-full flex flex-col justify-between space-y-4"},ko={class:"col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"},Wo=R({__name:"dashboard",setup(r){const o=b(JSON.parse(localStorage.getItem("INTEGRAL_DATA")||"{}")),e=pt([]),n=async()=>{try{const s=await Dt();if(s&&s.code===200){localStorage.setItem("INTEGRAL_DATA",JSON.stringify(s.data)),o.value=s.data;const a=JSON.parse(localStorage.getItem("PLUGIN_DATA_INFO"));localStorage.setItem("PLUGIN_DATA_INFO",JSON.stringify({...a,...s.data}))}}catch(s){console.error("Error fetching data:",s)}};return M(async()=>{await U(),await n()}),(s,a)=>{var y,E;const c=mt,l=et,d=re,m=He,w=ps,i=ks,u=Gs,h=ho;return p(),f("div",fo,[t("div",vo,[x(c),go]),t("div",xo,[t("div",bo,[t("div",wo,[t("div",yo,[t("div",Eo,[x(l,{onToRefresh:a[0]||(a[0]=B=>n())})]),x(d)]),x(m)]),t("div",$o,[x(w,{num:(y=_(o))==null?void 0:y.today_total},null,8,["num"]),x(w,{icon:"total",title:"ERA2 POINTS",num:(E=_(o))==null?void 0:E.total_total,onToUpdate:a[1]||(a[1]=B=>n())},null,8,["num"])]),t("div",ko,[x(i,{data:_(e)},null,8,["data"])])]),x(u),x(h)])])}}});export{Wo as default};
