import{a5 as ie,a6 as _t,a7 as qe,a8 as be,a9 as Ke,aa as Ie,d as ee,ab as Xe,ac as gt,ad as vt,ae as Ze,af as Qe,ag as ht,r as c,ah as xt,A as wt,v as z,w as ve,x as ke,f as he,o as i,C as oe,l,m as g,b as t,i as R,e,n as Ee,a0 as yt,k as O,ai as se,aj as bt,c as x,F as le,ak as Et,al as It,am as kt,an as Bt,P as Ct,ao as Dt,ap as $t,D as xe,B as ne,aq as St,ar as ue,W as Ut,as as Lt,at as et,au as ce,av as re,aw as Pt,ax as tt,ay as At,t as K,X as Rt,az as Tt,aA as Nt,aB as Ot,p as Be,h as Ce,G as Ft,L as fe,N as Vt,aC as st,q as we,a2 as We,O as He,aD as _e,E as ae,a1 as De,I as zt,_ as Mt,a as jt,u as Yt,Z as Xt}from"./entry.f2efeee4.js";import{d as Wt}from"./el-popper.da74467e.js";import{u as Ht,E as ot}from"./el-input.f7d47e7b.js";import{r as Gt,l as Jt}from"./ethers.0cf7be83.js";import{_ as $e}from"./plugin-vueexport-helper.c27b6911.js";import{E as nt,a as at}from"./el-form.914e3e3e.js";import{t as qt,_ as Kt,a as Zt}from"./logo.0e1bab21.js";import{_ as Qt}from"./Refresh.c2be47a7.js";import es from"./Wallet.21a751da.js";import{E as ts}from"./el-popover.a2aba083.js";import ss from"./Discord.f729cf87.js";import os from"./Twitter.11ca2f87.js";import{E as Se}from"./el-overlay.f9f46384.js";import{_ as Ue}from"./client-only.9d603998.js";import{v as ns}from"./el-loading.0c1d8459.js";import{u as Le}from"./godhood.fb9487a0.js";import{u as Pe}from"./user.1ee6c517.js";import{m as as,d as ls}from"./dict.de289b0f.js";import{f as rs}from"./confit.3a7ee973.js";import{j as is,k as cs,l as ds,m as Ge,n as us,o as fs,a as ps}from"./user.c23b279a.js";import{j as ms,m as _s,b as gs}from"./metamask.d55703a3.js";import{c as vs}from"./request.9f8f1c11.js";import{E as hs,a as xs}from"./el-checkbox.6703faf4.js";import{E as ws}from"./el-button.ed9095c3.js";import{c as ys}from"./passwords.46d2a945.js";import{C as ge}from"./index.2d9eff2e.js";import{F as Je,g as bs}from"./time.b55f1229.js";import{g as Es}from"./referral.8794145b.js";import"./event.4e3bc3a9.js";import"./focus-trap.19bf41a1.js";import"./verification.856d912b.js";import"./godhead.34e2a924.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";import"./validator.517b8afe.js";const Is=(f,I)=>{if(!ie||!f||!I)return!1;const r=f.getBoundingClientRect();let d;return I instanceof Element?d=I.getBoundingClientRect():d={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},r.top<d.bottom&&r.bottom>d.top&&r.right>d.left&&r.left<d.right};var ks="Expected a function";function ye(f,I,r){var d=!0,C=!0;if(typeof f!="function")throw new TypeError(ks);return _t(r)&&(d="leading"in r?!!r.leading:d,C="trailing"in r?!!r.trailing:C),Wt(f,I,{leading:d,maxWait:I,trailing:C})}const Bs=qe({urlList:{type:be(Array),default:()=>Ke([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),Cs={close:()=>!0,switch:f=>Ie(f)},Ds=["src"],$s=ee({name:"ElImageViewer"}),Ss=ee({...$s,props:Bs,emits:Cs,setup(f,{expose:I,emit:r}){const d=f,C={CONTAIN:{name:"contain",icon:Xe(gt)},ORIGINAL:{name:"original",icon:Xe(vt)}},{t:w}=Ze(),u=Qe("image-viewer"),{nextZIndex:a}=ht(),T=c(),U=c([]),B=xt(),L=c(!0),D=c(d.initialIndex),$=wt(C.CONTAIN),p=c({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),S=z(()=>{const{urlList:n}=d;return n.length<=1}),y=z(()=>D.value===0),v=z(()=>D.value===d.urlList.length-1),k=z(()=>d.urlList[D.value]),G=z(()=>[u.e("btn"),u.e("prev"),u.is("disabled",!d.infinite&&y.value)]),M=z(()=>[u.e("btn"),u.e("next"),u.is("disabled",!d.infinite&&v.value)]),q=z(()=>{const{scale:n,deg:m,offsetX:b,offsetY:V,enableTransition:N}=p.value;let X=b/n,J=V/n;switch(m%360){case 90:case-270:[X,J]=[J,-X];break;case 180:case-180:[X,J]=[-X,-J];break;case 270:case-90:[X,J]=[-J,X];break}const Q={transform:`scale(${n}) rotate(${m}deg) translate(${X}px, ${J}px)`,transition:N?"transform .3s":""};return $.value.name===C.CONTAIN.name&&(Q.maxWidth=Q.maxHeight="100%"),Q}),W=z(()=>Ie(d.zIndex)?d.zIndex:a());function j(){_(),r("close")}function h(){const n=ye(b=>{switch(b.code){case re.esc:d.closeOnPressEscape&&j();break;case re.space:te();break;case re.left:Z();break;case re.up:s("zoomIn");break;case re.right:o();break;case re.down:s("zoomOut");break}}),m=ye(b=>{const V=b.deltaY||b.deltaX;s(V<0?"zoomIn":"zoomOut",{zoomRate:d.zoomRate,enableTransition:!1})});B.run(()=>{ce(document,"keydown",n),ce(document,"wheel",m)})}function _(){B.stop()}function E(){L.value=!1}function F(n){L.value=!1,n.target.alt=w("el.image.error")}function H(n){if(L.value||n.button!==0||!T.value)return;p.value.enableTransition=!1;const{offsetX:m,offsetY:b}=p.value,V=n.pageX,N=n.pageY,X=ye(Q=>{p.value={...p.value,offsetX:m+Q.pageX-V,offsetY:b+Q.pageY-N}}),J=ce(document,"mousemove",X);ce(document,"mouseup",()=>{J()}),n.preventDefault()}function Y(){p.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function te(){if(L.value)return;const n=Pt(C),m=Object.values(C),b=$.value.name,N=(m.findIndex(X=>X.name===b)+1)%n.length;$.value=C[n[N]],Y()}function P(n){const m=d.urlList.length;D.value=(n+m)%m}function Z(){y.value&&!d.infinite||P(D.value-1)}function o(){v.value&&!d.infinite||P(D.value+1)}function s(n,m={}){if(L.value)return;const{zoomRate:b,rotateDeg:V,enableTransition:N}={zoomRate:d.zoomRate,rotateDeg:90,enableTransition:!0,...m};switch(n){case"zoomOut":p.value.scale>.2&&(p.value.scale=Number.parseFloat((p.value.scale/b).toFixed(3)));break;case"zoomIn":p.value.scale<7&&(p.value.scale=Number.parseFloat((p.value.scale*b).toFixed(3)));break;case"clockwise":p.value.deg+=V;break;case"anticlockwise":p.value.deg-=V;break}p.value.enableTransition=N}return ve(k,()=>{ke(()=>{const n=U.value[0];n!=null&&n.complete||(L.value=!0)})}),ve(D,n=>{Y(),r("switch",n)}),he(()=>{var n,m;h(),(m=(n=T.value)==null?void 0:n.focus)==null||m.call(n)}),I({setActiveItem:P}),(n,m)=>(i(),oe(Lt,{to:"body",disabled:!n.teleported},[l(Ut,{name:"viewer-fade",appear:""},{default:g(()=>[t("div",{ref_key:"wrapper",ref:T,tabindex:-1,class:R(e(u).e("wrapper")),style:Ee({zIndex:e(W)})},[t("div",{class:R(e(u).e("mask")),onClick:m[0]||(m[0]=yt(b=>n.hideOnClickModal&&j(),["self"]))},null,2),O(" CLOSE "),t("span",{class:R([e(u).e("btn"),e(u).e("close")]),onClick:j},[l(e(se),null,{default:g(()=>[l(e(bt))]),_:1})],2),O(" ARROW "),e(S)?O("v-if",!0):(i(),x(le,{key:0},[t("span",{class:R(e(G)),onClick:Z},[l(e(se),null,{default:g(()=>[l(e(Et))]),_:1})],2),t("span",{class:R(e(M)),onClick:o},[l(e(se),null,{default:g(()=>[l(e(It))]),_:1})],2)],64)),O(" ACTIONS "),t("div",{class:R([e(u).e("btn"),e(u).e("actions")])},[t("div",{class:R(e(u).e("actions__inner"))},[l(e(se),{onClick:m[1]||(m[1]=b=>s("zoomOut"))},{default:g(()=>[l(e(kt))]),_:1}),l(e(se),{onClick:m[2]||(m[2]=b=>s("zoomIn"))},{default:g(()=>[l(e(Bt))]),_:1}),t("i",{class:R(e(u).e("actions__divider"))},null,2),l(e(se),{onClick:te},{default:g(()=>[(i(),oe(Ct(e($).icon)))]),_:1}),t("i",{class:R(e(u).e("actions__divider"))},null,2),l(e(se),{onClick:m[3]||(m[3]=b=>s("anticlockwise"))},{default:g(()=>[l(e(Dt))]),_:1}),l(e(se),{onClick:m[4]||(m[4]=b=>s("clockwise"))},{default:g(()=>[l(e($t))]),_:1})],2)],2),O(" CANVAS "),t("div",{class:R(e(u).e("canvas"))},[(i(!0),x(le,null,xe(n.urlList,(b,V)=>ne((i(),x("img",{ref_for:!0,ref:N=>U.value[V]=N,key:b,src:b,style:Ee(e(q)),class:R(e(u).e("img")),onLoad:E,onError:F,onMousedown:H},null,46,Ds)),[[St,V===D.value]])),128))],2),ue(n.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var Us=et(Ss,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const Ls=tt(Us),Ps=qe({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:be([String,Object])},previewSrcList:{type:be(Array),default:()=>Ke([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),As={load:f=>f instanceof Event,error:f=>f instanceof Event,switch:f=>Ie(f),close:()=>!0,show:()=>!0},Rs=["src","loading"],Ts={key:0},Ns=ee({name:"ElImage",inheritAttrs:!1}),Os=ee({...Ns,props:Ps,emits:As,setup(f,{emit:I}){const r=f;let d="";const{t:C}=Ze(),w=Qe("image"),u=At(),a=Ht(),T=c(),U=c(!1),B=c(!0),L=c(!1),D=c(),$=c(),p=ie&&"loading"in HTMLImageElement.prototype;let S,y;const v=z(()=>[w.e("inner"),M.value&&w.e("preview"),B.value&&w.is("loading")]),k=z(()=>u.style),G=z(()=>{const{fit:s}=r;return ie&&s?{objectFit:s}:{}}),M=z(()=>{const{previewSrcList:s}=r;return Array.isArray(s)&&s.length>0}),q=z(()=>{const{previewSrcList:s,initialIndex:n}=r;let m=n;return n>s.length-1&&(m=0),m}),W=z(()=>r.loading==="eager"?!1:!p&&r.loading==="lazy"||r.lazy),j=()=>{ie&&(B.value=!0,U.value=!1,T.value=r.src)};function h(s){B.value=!1,U.value=!1,I("load",s)}function _(s){B.value=!1,U.value=!0,I("error",s)}function E(){Is(D.value,$.value)&&(j(),Y())}const F=Ot(E,200,!0);async function H(){var s;if(!ie)return;await ke();const{scrollContainer:n}=r;Tt(n)?$.value=n:Nt(n)&&n!==""?$.value=(s=document.querySelector(n))!=null?s:void 0:D.value&&($.value=Gt(D.value)),$.value&&(S=ce($,"scroll",F),setTimeout(()=>E(),100))}function Y(){!ie||!$.value||!F||(S==null||S(),$.value=void 0)}function te(s){if(s.ctrlKey){if(s.deltaY<0)return s.preventDefault(),!1;if(s.deltaY>0)return s.preventDefault(),!1}}function P(){M.value&&(y=ce("wheel",te,{passive:!1}),d=document.body.style.overflow,document.body.style.overflow="hidden",L.value=!0,I("show"))}function Z(){y==null||y(),document.body.style.overflow=d,L.value=!1,I("close")}function o(s){I("switch",s)}return ve(()=>r.src,()=>{W.value?(B.value=!0,U.value=!1,Y(),H()):j()}),he(()=>{W.value?H():j()}),(s,n)=>(i(),x("div",{ref_key:"container",ref:D,class:R([e(w).b(),s.$attrs.class]),style:Ee(e(k))},[U.value?ue(s.$slots,"error",{key:0},()=>[t("div",{class:R(e(w).e("error"))},K(e(C)("el.image.error")),3)]):(i(),x(le,{key:1},[T.value!==void 0?(i(),x("img",Rt({key:0},e(a),{src:T.value,loading:s.loading,style:e(G),class:e(v),onClick:P,onLoad:h,onError:_}),null,16,Rs)):O("v-if",!0),B.value?(i(),x("div",{key:1,class:R(e(w).e("wrapper"))},[ue(s.$slots,"placeholder",{},()=>[t("div",{class:R(e(w).e("placeholder"))},null,2)])],2)):O("v-if",!0)],64)),e(M)?(i(),x(le,{key:2},[L.value?(i(),oe(e(Ls),{key:0,"z-index":s.zIndex,"initial-index":e(q),infinite:s.infinite,"zoom-rate":s.zoomRate,"url-list":s.previewSrcList,"hide-on-click-modal":s.hideOnClickModal,teleported:s.previewTeleported,"close-on-press-escape":s.closeOnPressEscape,onClose:Z,onSwitch:o},{default:g(()=>[s.$slots.viewer?(i(),x("div",Ts,[ue(s.$slots,"viewer")])):O("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):O("v-if",!0)],64)):O("v-if",!0)],6))}});var Fs=et(Os,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const lt=tt(Fs),Vs=f=>(Be("data-v-63503bbd"),f=f(),Ce(),f),zs={id:"mar",class:"w-full h-11 mb-3 mt-2 multiple-radius rounded-lg px-3 flex items-center"},Ms={class:"w-full overflow-hidden relative",id:"PackagingShell"},js=Vs(()=>t("span",{class:"iconfont icon-jinggao text-[#EBEBEB] text-lg"},null,-1)),Ys=["innerHTML"],Xs=ee({__name:"Announcement",props:{text:{default:""}},setup(f){const I=f;he(()=>{r()});const r=()=>{const w=document.getElementById("scrollingContent"),u=document.getElementById("PackagingShell"),a=w.offsetWidth,T=u.offsetWidth,U=a/T*35;w.style.animationDuration=`${U}s`},d=()=>{const w=document.getElementById("scrollingContent");w.style.animationPlayState="paused"},C=()=>{const w=document.getElementById("scrollingContent");w.style.animationPlayState="running"};return(w,u)=>(i(),x("div",zs,[t("div",Ms,[t("div",{class:"scrolling-content whitespace-nowrap flex items-center justify-center space-x-1 link-style",id:"scrollingContent",onMouseenter:d,onMouseleave:C},[js,t("span",{class:"whitespace-nowrap Regular text-[14px] text-[#EBEBEB]",innerHTML:I.text},null,8,Ys)],32)])]))}});const Ws=$e(Xs,[["__scopeId","data-v-63503bbd"]]);const rt=""+globalThis.__publicAssetsURL("images/public/head/god.png"),Hs=zt(()=>Mt(()=>import("./WalletSelection.f70caa22.js"),["./WalletSelection.f70caa22.js","./el-overlay.f9f46384.js","./entry.f2efeee4.js","./entry.92cd5714.css","./focus-trap.19bf41a1.js","./event.4e3bc3a9.js","./el-button.ed9095c3.js","./el-button.2e70eb9e.css","./ethers.0cf7be83.js","./godhood.fb9487a0.js","./user.1ee6c517.js","./verification.856d912b.js","./godhead.34e2a924.js","./request.9f8f1c11.js","./-vite-browser-externalcommonjs-proxy.0e49e858.js","./el-overlay.155e27a7.css","./client-only.9d603998.js","./WalletSelection.c4aa2964.css"],import.meta.url).then(f=>f.default||f)),Gs={class:"z-[99]"},Js={class:"space-y-6 overflow-hidden flex flex-col"},qs={class:"flex items-center space-x-6"},Ks={class:"w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-[#ebebeb9e]"},Zs=t("div",{class:"image-slot"},[t("img",{src:rt,class:"w-full h-full object-cover"})],-1),Qs={class:"flex flex-col space-y-2"},eo={class:""},to={class:""},so=t("span",{class:"iconfont icon-edit text-[10px]"},null,-1),oo={class:"flex items-center space-x-1 text-[#B0B0B0] text-xs font-normal"},no=t("span",null," UID : ",-1),ao={class:"hover:text-white cursor-pointer"},lo=t("span",{class:"iconfont icon-copy text-xs sm:text-sm"},null,-1),ro={class:"text-xs font-normal text-[#B0B0B0]"},io={class:"space-y-4"},co={class:"h-11 flex items-center justify-between space-x-8"},uo=t("span",{class:"text-sm font-medium text-[#E5E5E5] uppercase"},"FAQ",-1),fo=t("span",{class:"text-sm font-medium text-[#E5E5E5] uppercase"},"About Gaea",-1),po=t("p",{class:"text-[11px] font-normal text-[#B0B0B0]"}," If you need help, feel free to hop on our Discord server and submit a support ticket. ",-1),mo={class:"w-full flex-1 overflow-auto"},_o={class:"flex items-center justify-end mb-4 text-[#B0B0B0]"},go={class:"space-y-4"},vo={class:"w-full py-3 px-4 rounded-lg border-box flex items-center justify-between cursor-pointer"},ho={class:"flex items-center space-x-2"},xo=t("span",{class:"text-sm font-medium text-[#B0B0B0]"},"Wallet",-1),wo={key:0,class:"space-x-1 flex items-center"},yo={class:"cursor-pointer"},bo={class:"text-[#B0B0B0]"},Eo=t("span",{class:"iconfont icon-copy text-xs sm:text-sm text-[#B0B0B0]"},null,-1),Io=t("span",{class:"iconfont icon-i-more text-lg cursor-pointer"},null,-1),ko=t("span",{class:"text-[#EBEBEB] text-[12px] cursor-pointer"}," Update Wallet ",-1),Bo=[ko],Co={class:"flex items-center space-x-2"},Do={class:"text-sm font-medium text-[#B0B0B0]"},$o={class:"flex items-center justify-centerpx-2"},So={class:"flex items-center space-x-2"},Uo={key:0,class:"text-[#B0B0B0]"},Lo=["onClick"],Po=t("span",{class:"iconfont icon-i-more text-lg cursor-pointer"},null,-1),Ao={class:"w-full border border-[#EDEDED] rounded-[9px] h-8 flex items-center justify-center px-4 hover:scale-[1.05] duration-700"},Ro=["onClick"],To={class:"flex items-center justify-between text-sm font-normal mt-8"},No={class:"text-[#B0B0B0] hover:text-[#EBEBEB] space-x-1 cursor-pointer duration-500"},Oo=t("span",{class:"iconfont icon-cfmpassword"},null,-1),Fo=t("span",{class:"iconfont icon-tuichu"},null,-1),Vo=t("span",null," Log out",-1),zo=[Fo,Vo],Mo=ee({__name:"UserProfile",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog","changePassWord"],setup(f,{emit:I}){const r=c(),d=Le();c(!1);const C=c(!1),w=c(!1),u=Ft("reloadUserInfo"),a=Pe(),T=c([{id:3,code:"VERIFY_DISCORD"},{id:101,code:"VERIFY_X2"}]),U=c(!1),B=c(),L=c(!1),D=c(!1);c(!1);const $=c(!1),p=c(null),S=c(!0);c("");const y=fe({username:""}),v=()=>{I("update:closeDialog")},k=fe({username:[{required:!0,message:"Please enter a valide username",trigger:"blur"},{min:6,message:"Length should be 6",trigger:"blur"}]}),G=async()=>{B.value=a.getUserInfo,y.username=B.value.name,S.value=!0,await H(Y())},M=o=>{const{social_x_name:s,social_dc_name:n}=a.getUserInfo;if(!_e(s)&&o.code==="VERIFY_X2")return s;if(!_e(n)&&o.code==="VERIFY_DISCORD")return n;if(o.status===2)return"Claimed";if(o.status===1)return"Claim";{const m=as().find(b=>b.code===o.code);return m?m.title.split("/")[0]:"Unknown"}},q=async o=>{W(o)},W=async o=>{if(!o)return;if(await rs(o),B.value.name===y.username){S.value=!0;return}const s=await is({username:y.username});s&&s.code===200?(ae.success(s.msg),B.value.name=y.username,S.value=!0):ae.warning(s.msg)},j=async o=>{p.value=o.id,D.value=!0,await ms(o).finally(()=>{D.value=!1})},h=async()=>{await u(),await te(),T.value.length===0&&Y()},_=o=>{const{social_x_name:s,social_dc_name:n}=a.getUserInfo;return!_e(s)&&o.code==="VERIFY_X2"||!_e(n)&&o.code==="VERIFY_DISCORD"},E=async o=>{try{if(L.value=!0,o.code==="VERIFY_DISCORD"){const s=await cs();s&&s.code===200&&a.setUserInfo({...a.getUserInfo,social_dc_name:""})}if(o.code==="VERIFY_X2"){const s=await ds();s&&s.code===200&&a.setUserInfo({...a.getUserInfo,social_x_name:""})}}catch{}finally{L.value=!1}},F=async()=>{var o,s,n,m;$.value=!0;try{const b=[];(o=a.getUserInfo)!=null&&o.sol_address&&b.push(Ge({address:(s=a.getUserInfo)==null?void 0:s.sol_address})),(n=a.getUserInfo)!=null&&n.eth_address&&b.push(Ge({address:(m=a.getUserInfo)==null?void 0:m.eth_address})),(await Promise.all(b)).forEach(N=>{N&&(N.code===200?u():ae.warning(N.msg))})}catch{}finally{$.value=!1}},H=o=>{},Y=()=>JSON.parse(localStorage.getItem("MISSION_DATA")||"[]"),te=async()=>{U.value=!0;try{const o=await _s(),s=o&&o.code===200?o.data:Y();localStorage.setItem("MISSION_DATA",JSON.stringify(s)),H(s)}catch{}finally{U.value=!1}},P=async()=>{try{w.value=!0;const o=await gs({address:d.getAccountsWalletAddress});o&&(o.code===200?(ae.success(o.data),u()):o.msg&&ae.error(o.msg))}catch{w.value=!1}finally{w.value=!1}},Z=async()=>{await De("/login"),vs()};return(o,s)=>{const n=lt,m=ot,b=nt,V=at,N=Kt,X=Qt,J=es,Q=ts,it=ss,ct=os,dt=Se,ut=Hs,ft=Ue,Re=Vt("copy"),me=ns;return i(),x("div",Gs,[l(ft,null,{default:g(()=>[l(dt,{draggable:"","model-value":o.$props.dialogVisible,"show-close":!1,width:"550px",style:{background:"black","border-radius":"10px",padding:"20px 30px",border:"1px solid #EDEDED"},"align-center":"",onClose:v,onOpen:s[6]||(s[6]=de=>G())},{default:g(()=>{var de,Te,Ne,Oe,Fe,Ve,ze,Me,je,Ye;return[t("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:v}),t("div",Js,[t("div",qs,[t("div",Ks,[l(n,{src:("showFaces"in o?o.showFaces:e(st))(),fit:"cover"},{error:g(()=>[Zs]),_:1},8,["src"])]),t("div",Qs,[t("div",eo,[e(S)?(i(),x("div",{key:0,class:"text-[#B0B0B0] cursor-pointer hover:text-[#EBEBEB] space-x-1 flex items-center mb-2",onClick:s[0]||(s[0]=A=>S.value=!1)},[t("span",to,K((de=e(B))==null?void 0:de.name),1),so])):(i(),oe(V,{key:1,model:e(y),class:"w-full h-full overflow-auto",ref_key:"ruleFormRef",ref:r,rules:e(k),"label-position":"top","hide-required-asterisk":""},{default:g(()=>[l(b,{prop:"username"},{default:g(()=>[l(m,{class:"w-full h-8 text-[#EBEBEBD]",style:{border:"none"},modelValue:e(y).username,"onUpdate:modelValue":s[2]||(s[2]=A=>e(y).username=A),disabled:e(S),onBlur:s[3]||(s[3]=A=>W(e(r)))},{suffix:g(()=>[t("span",{class:R(["iconfont icon-edit text-xs cursor-pointer leading-[12px] hover:text-white",e(S)?"text-[#333]":"text-white border-white"]),onClick:s[1]||(s[1]=A=>("throttle"in o?o.throttle:e(qt))(()=>{q(e(r))}))},null,2)]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1},8,["model","rules"])),ne((i(),x("div",oo,[no,t("div",ao,[we(K((Te=e(B))==null?void 0:Te.uid)+" ",1),lo])])),[[Re,(Ne=e(B))==null?void 0:Ne.uid]])]),t("span",ro,K((Oe=e(B))==null?void 0:Oe.email),1)])]),t("div",io,[t("div",co,[l(N,{to:`${("getJumpURL"in o?o.getJumpURL:e(We))()}/home?type=FAQ`,target:"_blank",class:"flex-1 h-full border-box rounded-lg flex items-center justify-center cursor-pointer"},{default:g(()=>[uo]),_:1},8,["to"]),l(N,{to:`${("getJumpURL"in o?o.getJumpURL:e(We))()}`,target:"_blank",class:"flex-1 h-full border-box rounded-lg flex items-center justify-center cursor-pointer"},{default:g(()=>[fo]),_:1},8,["to"])]),po]),t("div",mo,[t("div",_o,[l(X,{onToRefresh:h})]),ne((i(),x("div",go,[t("div",vo,[t("div",ho,[l(J,{color:"#B0B0B0"}),xo]),(Fe=e(a).getUserInfo)!=null&&Fe.sol_address||(Ve=e(a).getUserInfo)!=null&&Ve.eth_address?(i(),x("div",wo,[ne((i(),x("div",yo,[t("span",bo,K(("stringStar"in o?o.stringStar:e(He))({value:((ze=e(a).getUserInfo)==null?void 0:ze.sol_address)||((Me=e(a).getUserInfo)==null?void 0:Me.eth_address),characters:"********",start:4})),1),Eo])),[[Re,((je=e(a).getUserInfo)==null?void 0:je.sol_address)||((Ye=e(a).getUserInfo)==null?void 0:Ye.eth_address)]]),l(Q,{placement:"right",title:"",width:40,style:{},trigger:"click",content:""},{reference:g(()=>[Io]),default:g(()=>[ne((i(),x("div",{class:"w-full border border-[#EDEDED] rounded-[9px] h-8 flex items-center justify-center px-4 hover:scale-[1.05] duration-700",onClick:F},Bo)),[[me,e($)]])]),_:1})])):(i(),x("span",{key:1,class:"text-[#B0B0B0] hover:text-[#EDEDED] cursor-pointer",onClick:s[4]||(s[4]=A=>C.value=!0)}," Connect "))]),(i(!0),x(le,null,xe(e(T),(A,pt)=>(i(),x("div",{class:"w-full py-3 px-4 rounded-lg border-box flex items-center justify-between",key:pt},[t("div",Co,[A.code!=="VERIFY_X2"?(i(),oe(it,{key:0})):(i(),oe(ct,{key:1})),t("span",Do,K(A.code==="VERIFY_X2"?"X":"Discord"),1)]),t("div",$o,[t("div",So,[M(A)!=="Connect"?(i(),x("div",Uo,K(("stringStar"in o?o.stringStar:e(He))({value:M(A),characters:"********",start:10})),1)):O("",!0),A.status===2&&!_(A)||M(A)==="Connect"?ne((i(),x("div",{key:1,class:"text-[#B0B0B0] hover:text-[#EDEDED] cursor-pointer",onClick:mt=>j(A)},[we(" Connect ")],8,Lo)),[[me,e(D)&&e(p)===A.id]]):O("",!0)]),_(A)?(i(),oe(Q,{key:0,placement:"right",title:"",width:40,style:{},trigger:"click",content:""},{reference:g(()=>[Po]),default:g(()=>[t("div",Ao,[ne((i(),x("span",{class:"text-[#EBEBEB] text-[12px] cursor-pointer",onClick:mt=>E(A)},[we(K(A.code==="VERIFY_X2"?"Update X":"Update Discord"),1)],8,Ro)),[[me,e(L)]])])]),_:2},1024)):O("",!0)])]))),128))])),[[me,e(U)]]),t("div",To,[t("div",No,[Oo,t("span",{class:"cursor-pointer",onClick:s[5]||(s[5]=()=>{I("changePassWord")})}," Change Password ")]),t("div",{class:"text-[#B0B0B0] hover:text-[#EBEBEB] space-x-1 cursor-pointer duration-500",onClick:Z},zo)])])])]}),_:1},8,["model-value"]),l(ut,{"dialog-visible":e(C),"onUpdate:success":s[7]||(s[7]=de=>P()),"onUpdate:closeDialog":s[8]||(s[8]=de=>C.value=!1)},null,8,["dialog-visible"])]),_:1})])}}}),pe=f=>(Be("data-v-098eb72d"),f=f(),Ce(),f),jo={class:"z-[99]"},Yo={class:"space-y-5 overflow-hidden flex flex-col px-6"},Xo=pe(()=>t("span",{class:"text-base font-normal text-[#EDEDED] px-5"},"Change Password",-1)),Wo={class:"w-full flex-1 px-5 pb-5 mt-14"},Ho=pe(()=>t("div",{class:"flex items-center space-x-2 text-[#666666]"},[t("span",{class:"iconfont icon-cfmpassword text-base"}),t("span",{class:"w-[1px] h-[18px] bg-[#666666]"})],-1)),Go=pe(()=>t("div",{class:"flex items-center space-x-2 text-[#666666]"},[t("span",{class:"iconfont icon-cfmpassword text-base"}),t("span",{class:"w-[1px] h-[18px] bg-[#666666]"})],-1)),Jo={class:"set_checkbox_sty"},qo=pe(()=>t("div",{class:"flex items-center space-x-2 text-[#666666]"},[t("span",{class:"iconfont icon-cfmpassword text-base"}),t("span",{class:"w-[1px] h-[18px] bg-[#666666]"})],-1)),Ko={class:"flex justify-center"},Zo=pe(()=>t("span",{class:"text-black Regular font-semibold text-[14px]"},"Save",-1)),Qo=ee({__name:"ChangePassword",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(f,{emit:I}){const r=c(),d=Pe(),C=c(),w=c(!1),u=c(ls()),a=fe({password:"",password_new:"",confirm_Password:"",checkList:[]}),B=fe({password:[{required:!0,message:"Enter your Currrent password",trigger:"blur"}],password_new:[{validator:(y,v,k)=>{v===""?k(new Error("Please enter a valide password")):(a.checkList.length!==2&&k(new Error("Your password does not match")),k())},trigger:"blur"}],confirm_Password:[{validator:(y,v,k)=>{v===""?k(new Error("Please input the password again")):v!==a.password_new?k(new Error("Your password does not match")):k()},trigger:"blur"}]}),L=()=>{const{password_new:y}=a,v=ys(y);a.checkList=[],v.criteriaMet&&a.checkList.push(u==null?void 0:u.value[0]),v.lengthMet&&a.checkList.push(u==null?void 0:u.value[1])},D=()=>{$(r.value),a.checkList=[],I("update:closeDialog")},$=y=>{y&&y.resetFields()},p=async y=>{y&&await y.validate(async v=>{if(v)try{w.value=!0;const k=await us({password:ge.SHA256(a.password).toString(ge.enc.Hex).trim(),password_new:ge.SHA256(a.password_new).toString(ge.enc.Hex).trim()});w.value=!1,k&&(k.code===200?(ae.success(k.data),De("/login")):ae.error(k.msg))}catch{w.value=!1}})},S=async()=>{C.value=d.getUserInfo};return(y,v)=>{const k=ot,G=nt,M=hs,q=xs,W=ws,j=at,h=Se,_=Ue;return i(),x("div",jo,[l(_,null,{default:g(()=>[l(h,{class:"relative z-50",draggable:"","model-value":y.$props.dialogVisible,"show-close":!1,width:"550px",style:{background:"black","border-radius":"10px",border:"1px solid #EDEDED","padding-bottom":"18px"},"align-center":"",onClose:D,onOpen:v[5]||(v[5]=E=>S())},{default:g(()=>[t("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:D}),t("div",Yo,[Xo,t("div",Wo,[l(j,{model:e(a),class:"space-y-3",ref_key:"ruleFormRef",ref:r,rules:e(B),"label-position":"top","hide-required-asterisk":""},{default:g(()=>[l(G,{label:"Currrent password",prop:"password"},{default:g(()=>[l(k,{style:{height:"35px"},maxlength:50,placeholder:"Enter your Currrent password",type:"password",modelValue:e(a).password,"onUpdate:modelValue":v[0]||(v[0]=E=>e(a).password=E),"show-password":"",oncopy:"return false"},{prefix:g(()=>[Ho]),_:1},8,["modelValue"])]),_:1}),l(G,{label:"Password",prop:"password_new",onInput:L},{default:g(()=>[l(k,{style:{height:"35px"},maxlength:50,placeholder:"Enter your password",type:"password",modelValue:e(a).password_new,"onUpdate:modelValue":v[1]||(v[1]=E=>e(a).password_new=E),"show-password":"",oncopy:"return false"},{prefix:g(()=>[Go]),_:1},8,["modelValue"]),t("div",Jo,[l(q,{modelValue:e(a).checkList,"onUpdate:modelValue":v[2]||(v[2]=E=>e(a).checkList=E)},{default:g(()=>[(i(!0),x(le,null,xe(e(u),(E,F)=>(i(),oe(M,{label:E,value:E,key:F},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),l(G,{label:"Confirm Password",prop:"confirm_Password"},{default:g(()=>[l(k,{style:{height:"35px"},maxlength:50,placeholder:"Enter your password",type:"password",modelValue:e(a).confirm_Password,"onUpdate:modelValue":v[3]||(v[3]=E=>e(a).confirm_Password=E),"show-password":"",oncopy:"return false"},{prefix:g(()=>[qo]),_:1},8,["modelValue"])]),_:1}),t("div",Ko,[l(W,{color:"#EDEDED",round:"",class:"w-1/2 h-full mx-auto mt-6",onClick:v[4]||(v[4]=E=>p(e(r))),loading:e(w)},{default:g(()=>[Zo]),_:1},8,["loading"])])]),_:1},8,["model","rules"])])])]),_:1},8,["model-value"])]),_:1})])}}});const en=$e(Qo,[["__scopeId","data-v-098eb72d"]]),tn={class:"text-[#EBEBEB] py-6 px-6 flex space-x-2"},sn=t("p",{class:"text-[#EBEBEB]"},"Transaction failed:",-1),on={class:"underline underline-offset-4"},nn=["href"],an=ee({__name:"Error",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(f,{emit:I}){const r=Le(),d=()=>{I("update:closeDialog"),r.setDialogError({show:!1,url:""})};return(C,w)=>{const u=Se,a=Ue;return i(),x("div",null,[l(a,null,{default:g(()=>[l(u,{class:"border-box",draggable:"","model-value":C.$props.dialogVisible,"show-close":!1,width:"350px",style:{background:"black","border-radius":"10px","padding-bottom":"10px"},"align-center":"",onClose:d},{default:g(()=>[t("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:d}),t("div",tn,[sn,t("div",on,[t("a",{target:"_blank",href:e(r).getDialogError.url}," Check the reason ",8,nn)])])]),_:1},8,["model-value"])]),_:1})])}}}),ln=""+globalThis.__publicAssetsURL("images/public/hot.png"),Ae=f=>(Be("data-v-4b3e5c44"),f=f(),Ce(),f),rn={class:"w-full h-screen flex flex-col bg-black overflow-hidden"},cn={class:"w-full h-[80px] flex items-center justify-between flex-wrap adaptation-padding py-5 pointer-events-auto relative z-20"},dn={class:"flex items-center space-x-10"},un=Ae(()=>t("img",{src:Zt,alt:"",class:"w-full h-full object-contain"},null,-1)),fn=[un],pn={class:"flex justify-center items-center gap-2 sm:gap-4 transform rigin-left scale-80 lg:scale-100 lg:gap-6 space-x-4"},mn=["onClick","onMouseenter"],_n={key:0,class:"flex items-center space-x-1"},gn={key:0,class:"w-[28px] h-[16px]"},vn=Ae(()=>t("img",{src:ln,class:"w-full h-full object-contain"},null,-1)),hn=[vn],xn={class:"uppercase font-bold text-[14px] u-line-1"},wn={class:"flex items-center space-x-3 absolute right-[10%]"},yn={class:"text-[#EBEBEB]"},bn=Ae(()=>t("div",{class:"image-slot"},[t("img",{src:rt,class:"w-full h-full object-cover"})],-1)),En={class:"w-full flex-1 flex flex-col body-container overflow-auto scroll-smooth",ref:"targetElement"},In={key:0,class:"flex items-center w-full h-11 adaptation-padding mb-5 mt-4"},kn=ee({__name:"index",setup(f){const I=c(),r=jt(),d=Yt(),C=c(r.path),w=c(localStorage.getItem("ANNOUNCEMENT")||""),u=c(!1),a=c(!1),T=c(null),U=Le(),B=c(C.value.replace(/\/$/,"")),L=c(!1);Xt("reloadUserInfo",async()=>{q()});const $=fe([{title:"Dashboard",path:"/dashboard"},{title:"training",path:"/emotionalCheckIn",tips:!0},{title:"GODHOOD",path:"/godhoodId"},{title:"Mission& Reward",path:"/missions"}]),p=Pe(),S=c(!1),y=c(!1),v=c(),k=h=>{B.value=h.path,De(h.path)},G=()=>{S.value=!1,y.value=!0},M=async()=>{const h=await fs();h&&h.code===200&&h.data&&h.data.length>0&&(w.value=h.data[0].announcement,localStorage.setItem("ANNOUNCEMENT",w.value),u.value=!0)},q=async()=>{try{if(!p.getToken)return;const h=await ps();if(h&&h.code===200){await p.setUserInfo({...h.data}),localStorage.setItem("gaea_token",p.getToken);const _=JSON.parse(localStorage.getItem("PLUGIN_DATA_INFO"));localStorage.setItem("PLUGIN_DATA_INFO",JSON.stringify({..._,...h.data}));const{uid:E}=p.getUserInfo;if(E){if(!p.getUuidv4||!p.getUpdateBrowserId){const F=await Je.getFinalFingerprint(E);p.setUuidv4(F)}if(!localStorage.getItem("browser_id")||!p.getUpdateBrowserId){const F=await Je.getFinalFingerprint(E,"plugIn");localStorage.setItem("browser_id",F)}p.setUpdateBrowserId(!0)}}}catch{}},W=async()=>{var h;try{clearTimeout(I.value);const _=await Es();if(_&&_.code===200){const E=_&&_.code===200?_.data:{country:"Unknown",country_icon:"Unknown",ip_address:"None",host:""};await p.setPingInfo({...p.getPingInfo,...E});const H=bs()-((h=_.data)==null?void 0:h.timestamp);p.setTimeDifference(H);const Y=JSON.parse(localStorage.getItem("PLUGIN_DATA_INFO"));localStorage.setItem("PLUGIN_DATA_INFO",JSON.stringify({...Y,version:p.getVersion,timeDifference:H}))}}catch{}finally{I.value=setTimeout(()=>{W()},1e3*600*18)}},j=async()=>{var h;try{if(!U.getIsPayCard){const _=await Jt();U.setIsPayCard(_)}}catch{}finally{(h=v.value)==null||h.close()}};return he(async()=>{await ke(),W(),await q(),M(),j()}),ve(()=>r.path,()=>{B.value=r.path.replace(/\/$/,"")}),(h,_)=>{const E=lt,F=Ws,H=Mo,Y=en,te=an;return i(),x("div",rn,[t("div",cn,[t("div",dn,[t("div",{class:"w-40 h-10 cursor-pointer",onClick:_[0]||(_[0]=P=>e(d).go(0))},fn),t("div",pn,[(i(!0),x(le,null,xe(e($),(P,Z)=>(i(),x("div",{key:Z,class:R(["flex items-center hover:text-[#EBEBEB] cursor-pointer",e(B)===P.path?"text-[#EBEBEB]":"text-[#b0b0b0]"]),onClick:o=>k(P),onMouseenter:o=>T.value=Z,onMouseleave:_[1]||(_[1]=o=>T.value=null)},[e(p).getUserInfo?(i(),x("div",_n,[P.title==="training"?(i(),x("div",gn,hn)):O("",!0),t("span",xn,K(P.title),1)])):O("",!0)],42,mn))),128))])]),t("div",wn,[t("span",yn,K(e(p).getUserInfo.name),1),t("div",{class:"w-8 h-8 rounded-full overflow-hidden cursor-pointer bg-black border-2 border-[#ebebeb9e]",onClick:_[2]||(_[2]=P=>S.value=!0)},[l(E,{src:("showFaces"in h?h.showFaces:e(st))(),fit:"fill"},{error:g(()=>[bn]),_:1},8,["src"])])])]),t("div",En,[e(u)?(i(),x("div",In,[l(F,{text:e(w)},null,8,["text"])])):O("",!0),t("div",{class:R(["w-full flex-1",e(L)?"layouts_style":""])},[ue(h.$slots,"default",{},void 0,!0)],2)],512),l(H,{"dialog-visible":e(S),"onUpdate:closeDialog":_[3]||(_[3]=P=>S.value=!1),onChangePassWord:_[4]||(_[4]=P=>G())},null,8,["dialog-visible"]),l(Y,{"dialog-visible":e(y),"onUpdate:closeDialog":_[5]||(_[5]=P=>y.value=!1)},null,8,["dialog-visible"]),l(te,{"dialog-visible":e(U).getDialogError.show,"onUpdate:closeDialog":_[6]||(_[6]=P=>a.value=!1)},null,8,["dialog-visible"])])}}});const la=$e(kn,[["__scopeId","data-v-4b3e5c44"]]);export{la as default};
