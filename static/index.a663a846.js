import{af as ie,ag as ct,O as qe,ah as be,ai as Ke,P as Ie,d as Q,aj as We,ak as dt,al as ut,am as Ze,Q as Qe,an as pt,r as p,ao as ft,z as mt,s as M,w as ge,v as ke,f as ve,o as u,B as oe,l as i,m as _,b as t,i as T,e,n as ye,ac as _t,k as V,W as se,Y as gt,c as b,F as le,ap as vt,aq as ht,ar as xt,as as wt,J as bt,at as yt,au as Et,C as he,A as ne,av as It,I as ue,a8 as kt,aw as Bt,S as et,ax as ce,ay as re,az as Ct,Z as tt,aA as Dt,t as Z,a9 as $t,aB as St,aC as Ut,aD as Lt,p as Be,h as Ce,V as Pt,a1 as At,K as Tt,q as xe,E as ae,ad as De,G as Rt,H as Nt,M as Ee,a as Ot,u as Ft,R as Vt}from"./entry.38b91c68.js";import{d as zt}from"./debounce.d38b7e9a.js";import{u as Mt,E as st}from"./el-input.7eda8c8b.js";import{p as jt,b as Yt}from"./ethers.71123aa3.js";import{_ as $e}from"./plugin-vueexport-helper.c27b6911.js";import{_ as Wt,a as Xt}from"./logo.d162d421.js";import{_ as Ht}from"./Refresh.6ec34ad5.js";import Jt from"./Wallet.2bb091ba.js";import{E as Gt}from"./el-popover.05a6d97a.js";import qt from"./Discord.fa2c1449.js";import Kt from"./Twitter.228edca1.js";import{E as Se}from"./el-overlay.95963552.js";import{_ as Ue}from"./client-only.b2c121de.js";import"./el-popper.abdd7a3d.js";import{v as Zt}from"./el-loading.edda49b2.js";import{u as Le}from"./godhood.210b8630.js";import{u as Pe}from"./user.0d619d1e.js";import{b as ot,g as Xe,s as He,i as me}from"./utils.3483a21f.js";import{m as Qt,d as es}from"./dict.0cf4a056.js";import{j as ts,k as ss,l as os,m as Je,n as ns,o as as,a as ls}from"./user.72ffb000.js";import{j as rs,m as is,b as cs}from"./metamask.388f1000.js";import{c as ds}from"./request.b5d2ea86.js";import{E as us,a as ps}from"./el-form.c75d4474.js";import{E as fs,a as ms}from"./el-checkbox.6db892ea.js";import{E as _s}from"./el-button.90b23ac7.js";import{c as gs}from"./passwords.46d2a945.js";import{C as _e}from"./index.2d9eff2e.js";import{F as Ge,g as vs}from"./time.19a4b904.js";import{g as hs}from"./referral.08537e0c.js";import{E as xs}from"./index.e07496a1.js";import"./event.ee639c25.js";import"./verification.856d912b.js";import"./godhead.84b450df.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";import"./focus-trap.e8e79e4e.js";import"./validator.7c10fef5.js";const ws=(f,k)=>{if(!ie||!f||!k)return!1;const d=f.getBoundingClientRect();let c;return k instanceof Element?c=k.getBoundingClientRect():c={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},d.top<c.bottom&&d.bottom>c.top&&d.right>c.left&&d.left<c.right};var bs="Expected a function";function we(f,k,d){var c=!0,D=!0;if(typeof f!="function")throw new TypeError(bs);return ct(d)&&(c="leading"in d?!!d.leading:c,D="trailing"in d?!!d.trailing:D),zt(f,k,{leading:c,maxWait:k,trailing:D})}const ys=qe({urlList:{type:be(Array),default:()=>Ke([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),Es={close:()=>!0,switch:f=>Ie(f)},Is=["src"],ks=Q({name:"ElImageViewer"}),Bs=Q({...ks,props:ys,emits:Es,setup(f,{expose:k,emit:d}){const c=f,D={CONTAIN:{name:"contain",icon:We(dt)},ORIGINAL:{name:"original",icon:We(ut)}},{t:w}=Ze(),n=Qe("image-viewer"),{nextZIndex:g}=pt(),R=p(),C=p([]),L=ft(),A=p(!0),$=p(c.initialIndex),S=mt(D.CONTAIN),l=p({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),U=M(()=>{const{urlList:o}=c;return o.length<=1}),B=M(()=>$.value===0),x=M(()=>$.value===c.urlList.length-1),y=M(()=>c.urlList[$.value]),X=M(()=>[n.e("btn"),n.e("prev"),n.is("disabled",!c.infinite&&B.value)]),Y=M(()=>[n.e("btn"),n.e("next"),n.is("disabled",!c.infinite&&x.value)]),K=M(()=>{const{scale:o,deg:h,offsetX:I,offsetY:F,enableTransition:G}=l.value;let j=I/o,q=F/o;switch(h%360){case 90:case-270:[j,q]=[q,-j];break;case 180:case-180:[j,q]=[-j,-q];break;case 270:case-90:[j,q]=[-q,j];break}const te={transform:`scale(${o}) rotate(${h}deg) translate(${j}px, ${q}px)`,transition:G?"transform .3s":""};return S.value.name===D.CONTAIN.name&&(te.maxWidth=te.maxHeight="100%"),te}),H=M(()=>Ie(c.zIndex)?c.zIndex:g());function z(){m(),d("close")}function v(){const o=we(I=>{switch(I.code){case re.esc:c.closeOnPressEscape&&z();break;case re.space:ee();break;case re.left:r();break;case re.up:a("zoomIn");break;case re.right:P();break;case re.down:a("zoomOut");break}}),h=we(I=>{const F=I.deltaY||I.deltaX;a(F<0?"zoomIn":"zoomOut",{zoomRate:c.zoomRate,enableTransition:!1})});L.run(()=>{ce(document,"keydown",o),ce(document,"wheel",h)})}function m(){L.stop()}function E(){A.value=!1}function N(o){A.value=!1,o.target.alt=w("el.image.error")}function W(o){if(A.value||o.button!==0||!R.value)return;l.value.enableTransition=!1;const{offsetX:h,offsetY:I}=l.value,F=o.pageX,G=o.pageY,j=we(te=>{l.value={...l.value,offsetX:h+te.pageX-F,offsetY:I+te.pageY-G}}),q=ce(document,"mousemove",j);ce(document,"mouseup",()=>{q()}),o.preventDefault()}function J(){l.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ee(){if(A.value)return;const o=Ct(D),h=Object.values(D),I=S.value.name,G=(h.findIndex(j=>j.name===I)+1)%o.length;S.value=D[o[G]],J()}function s(o){const h=c.urlList.length;$.value=(o+h)%h}function r(){B.value&&!c.infinite||s($.value-1)}function P(){x.value&&!c.infinite||s($.value+1)}function a(o,h={}){if(A.value)return;const{zoomRate:I,rotateDeg:F,enableTransition:G}={zoomRate:c.zoomRate,rotateDeg:90,enableTransition:!0,...h};switch(o){case"zoomOut":l.value.scale>.2&&(l.value.scale=Number.parseFloat((l.value.scale/I).toFixed(3)));break;case"zoomIn":l.value.scale<7&&(l.value.scale=Number.parseFloat((l.value.scale*I).toFixed(3)));break;case"clockwise":l.value.deg+=F;break;case"anticlockwise":l.value.deg-=F;break}l.value.enableTransition=G}return ge(y,()=>{ke(()=>{const o=C.value[0];o!=null&&o.complete||(A.value=!0)})}),ge($,o=>{J(),d("switch",o)}),ve(()=>{var o,h;v(),(h=(o=R.value)==null?void 0:o.focus)==null||h.call(o)}),k({setActiveItem:s}),(o,h)=>(u(),oe(Bt,{to:"body",disabled:!o.teleported},[i(kt,{name:"viewer-fade",appear:""},{default:_(()=>[t("div",{ref_key:"wrapper",ref:R,tabindex:-1,class:T(e(n).e("wrapper")),style:ye({zIndex:e(H)})},[t("div",{class:T(e(n).e("mask")),onClick:h[0]||(h[0]=_t(I=>o.hideOnClickModal&&z(),["self"]))},null,2),V(" CLOSE "),t("span",{class:T([e(n).e("btn"),e(n).e("close")]),onClick:z},[i(e(se),null,{default:_(()=>[i(e(gt))]),_:1})],2),V(" ARROW "),e(U)?V("v-if",!0):(u(),b(le,{key:0},[t("span",{class:T(e(X)),onClick:r},[i(e(se),null,{default:_(()=>[i(e(vt))]),_:1})],2),t("span",{class:T(e(Y)),onClick:P},[i(e(se),null,{default:_(()=>[i(e(ht))]),_:1})],2)],64)),V(" ACTIONS "),t("div",{class:T([e(n).e("btn"),e(n).e("actions")])},[t("div",{class:T(e(n).e("actions__inner"))},[i(e(se),{onClick:h[1]||(h[1]=I=>a("zoomOut"))},{default:_(()=>[i(e(xt))]),_:1}),i(e(se),{onClick:h[2]||(h[2]=I=>a("zoomIn"))},{default:_(()=>[i(e(wt))]),_:1}),t("i",{class:T(e(n).e("actions__divider"))},null,2),i(e(se),{onClick:ee},{default:_(()=>[(u(),oe(bt(e(S).icon)))]),_:1}),t("i",{class:T(e(n).e("actions__divider"))},null,2),i(e(se),{onClick:h[3]||(h[3]=I=>a("anticlockwise"))},{default:_(()=>[i(e(yt))]),_:1}),i(e(se),{onClick:h[4]||(h[4]=I=>a("clockwise"))},{default:_(()=>[i(e(Et))]),_:1})],2)],2),V(" CANVAS "),t("div",{class:T(e(n).e("canvas"))},[(u(!0),b(le,null,he(o.urlList,(I,F)=>ne((u(),b("img",{ref_for:!0,ref:G=>C.value[F]=G,key:I,src:I,style:ye(e(K)),class:T(e(n).e("img")),onLoad:E,onError:N,onMousedown:W},null,46,Is)),[[It,F===$.value]])),128))],2),ue(o.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var Cs=et(Bs,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const Ds=tt(Cs),$s=qe({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:be([String,Object])},previewSrcList:{type:be(Array),default:()=>Ke([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),Ss={load:f=>f instanceof Event,error:f=>f instanceof Event,switch:f=>Ie(f),close:()=>!0,show:()=>!0},Us=["src","loading"],Ls={key:0},Ps=Q({name:"ElImage",inheritAttrs:!1}),As=Q({...Ps,props:$s,emits:Ss,setup(f,{emit:k}){const d=f;let c="";const{t:D}=Ze(),w=Qe("image"),n=Dt(),g=Mt(),R=p(),C=p(!1),L=p(!0),A=p(!1),$=p(),S=p(),l=ie&&"loading"in HTMLImageElement.prototype;let U,B;const x=M(()=>[w.e("inner"),Y.value&&w.e("preview"),L.value&&w.is("loading")]),y=M(()=>n.style),X=M(()=>{const{fit:a}=d;return ie&&a?{objectFit:a}:{}}),Y=M(()=>{const{previewSrcList:a}=d;return Array.isArray(a)&&a.length>0}),K=M(()=>{const{previewSrcList:a,initialIndex:o}=d;let h=o;return o>a.length-1&&(h=0),h}),H=M(()=>d.loading==="eager"?!1:!l&&d.loading==="lazy"||d.lazy),z=()=>{ie&&(L.value=!0,C.value=!1,R.value=d.src)};function v(a){L.value=!1,C.value=!1,k("load",a)}function m(a){L.value=!1,C.value=!0,k("error",a)}function E(){ws($.value,S.value)&&(z(),J())}const N=Lt(E,200,!0);async function W(){var a;if(!ie)return;await ke();const{scrollContainer:o}=d;St(o)?S.value=o:Ut(o)&&o!==""?S.value=(a=document.querySelector(o))!=null?a:void 0:$.value&&(S.value=jt($.value)),S.value&&(U=ce(S,"scroll",N),setTimeout(()=>E(),100))}function J(){!ie||!S.value||!N||(U==null||U(),S.value=void 0)}function ee(a){if(a.ctrlKey){if(a.deltaY<0)return a.preventDefault(),!1;if(a.deltaY>0)return a.preventDefault(),!1}}function s(){Y.value&&(B=ce("wheel",ee,{passive:!1}),c=document.body.style.overflow,document.body.style.overflow="hidden",A.value=!0,k("show"))}function r(){B==null||B(),document.body.style.overflow=c,A.value=!1,k("close")}function P(a){k("switch",a)}return ge(()=>d.src,()=>{H.value?(L.value=!0,C.value=!1,J(),W()):z()}),ve(()=>{H.value?W():z()}),(a,o)=>(u(),b("div",{ref_key:"container",ref:$,class:T([e(w).b(),a.$attrs.class]),style:ye(e(y))},[C.value?ue(a.$slots,"error",{key:0},()=>[t("div",{class:T(e(w).e("error"))},Z(e(D)("el.image.error")),3)]):(u(),b(le,{key:1},[R.value!==void 0?(u(),b("img",$t({key:0},e(g),{src:R.value,loading:a.loading,style:e(X),class:e(x),onClick:s,onLoad:v,onError:m}),null,16,Us)):V("v-if",!0),L.value?(u(),b("div",{key:1,class:T(e(w).e("wrapper"))},[ue(a.$slots,"placeholder",{},()=>[t("div",{class:T(e(w).e("placeholder"))},null,2)])],2)):V("v-if",!0)],64)),e(Y)?(u(),b(le,{key:2},[A.value?(u(),oe(e(Ds),{key:0,"z-index":a.zIndex,"initial-index":e(K),infinite:a.infinite,"zoom-rate":a.zoomRate,"url-list":a.previewSrcList,"hide-on-click-modal":a.hideOnClickModal,teleported:a.previewTeleported,"close-on-press-escape":a.closeOnPressEscape,onClose:r,onSwitch:P},{default:_(()=>[a.$slots.viewer?(u(),b("div",Ls,[ue(a.$slots,"viewer")])):V("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):V("v-if",!0)],64)):V("v-if",!0)],6))}});var Ts=et(As,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const nt=tt(Ts),Rs=f=>(Be("data-v-63503bbd"),f=f(),Ce(),f),Ns={id:"mar",class:"w-full h-11 mb-3 mt-2 multiple-radius rounded-lg px-3 flex items-center"},Os={class:"w-full overflow-hidden relative",id:"PackagingShell"},Fs=Rs(()=>t("span",{class:"iconfont icon-jinggao text-[#EBEBEB] text-lg"},null,-1)),Vs=["innerHTML"],zs=Q({__name:"Announcement",props:{text:{default:""}},setup(f){const k=f;ve(()=>{d()});const d=()=>{const w=document.getElementById("scrollingContent"),n=document.getElementById("PackagingShell"),g=w.offsetWidth,R=n.offsetWidth,C=g/R*35;w.style.animationDuration=`${C}s`},c=()=>{const w=document.getElementById("scrollingContent");w.style.animationPlayState="paused"},D=()=>{const w=document.getElementById("scrollingContent");w.style.animationPlayState="running"};return(w,n)=>(u(),b("div",Ns,[t("div",Os,[t("div",{class:"scrolling-content whitespace-nowrap flex items-center justify-center space-x-1 link-style",id:"scrollingContent",onMouseenter:c,onMouseleave:D},[Fs,t("span",{class:"whitespace-nowrap Regular text-[14px] text-[#EBEBEB]",innerHTML:k.text},null,8,Vs)],32)])]))}});const Ms=$e(zs,[["__scopeId","data-v-63503bbd"]]);const at=""+globalThis.__publicAssetsURL("images/public/head/god.png"),js=Rt(()=>Nt(()=>import("./WalletSelection.8a7aa24b.js"),["./WalletSelection.8a7aa24b.js","./el-overlay.95963552.js","./entry.38b91c68.js","./entry.0f1f1b54.css","./focus-trap.e8e79e4e.js","./event.ee639c25.js","./el-button.90b23ac7.js","./el-button.2e70eb9e.css","./ethers.71123aa3.js","./godhood.210b8630.js","./user.0d619d1e.js","./verification.856d912b.js","./godhead.84b450df.js","./request.b5d2ea86.js","./-vite-browser-externalcommonjs-proxy.0e49e858.js","./el-overlay.155e27a7.css","./client-only.b2c121de.js","./utils.3483a21f.js","./WalletSelection.c4aa2964.css"],import.meta.url).then(f=>f.default||f)),Ys={class:"z-[99]"},Ws={class:"space-y-6 overflow-hidden flex flex-col"},Xs={class:"flex items-center space-x-6"},Hs={class:"w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-[#ebebeb9e]"},Js=t("div",{class:"image-slot"},[t("img",{src:at,class:"w-full h-full object-cover"})],-1),Gs={class:"flex flex-col space-y-2"},qs={class:"space-y-2"},Ks={class:""},Zs=t("span",{class:"iconfont icon-edit text-[10px]"},null,-1),Qs={class:"flex items-center space-x-1 text-[#B0B0B0] text-xs font-normal"},eo=t("span",null," UID : ",-1),to={class:"hover:text-white cursor-pointer"},so=t("span",{class:"iconfont icon-copy text-xs sm:text-sm"},null,-1),oo={class:"text-xs font-normal text-[#B0B0B0]"},no={class:"space-y-4"},ao={class:"h-11 flex items-center justify-between space-x-8"},lo=t("span",{class:"text-sm font-medium text-[#E5E5E5] uppercase"},"FAQ",-1),ro=t("span",{class:"text-sm font-medium text-[#E5E5E5] uppercase"},"About Gaea",-1),io=t("p",{class:"text-[11px] font-normal text-[#B0B0B0]"}," If you need help, feel free to hop on our Discord server and submit a support ticket. ",-1),co={class:"w-full flex-1 overflow-auto"},uo={class:"flex items-center justify-end mb-4 text-[#B0B0B0]"},po={class:"space-y-4"},fo={class:"w-full py-3 px-4 rounded-lg border-box flex items-center justify-between cursor-pointer"},mo={class:"flex items-center space-x-2"},_o=t("span",{class:"text-sm font-medium text-[#B0B0B0]"},"Wallet",-1),go={key:0,class:"space-x-1 flex items-center"},vo={class:"cursor-pointer"},ho={class:"text-[#B0B0B0]"},xo=t("span",{class:"iconfont icon-copy text-xs sm:text-sm text-[#B0B0B0]"},null,-1),wo=t("span",{class:"iconfont icon-i-more text-lg cursor-pointer"},null,-1),bo=t("span",{class:"text-[#EBEBEB] text-[12px] cursor-pointer"}," Update Wallet ",-1),yo=[bo],Eo={class:"flex items-center space-x-2"},Io={class:"text-sm font-medium text-[#B0B0B0]"},ko={class:"flex items-center justify-centerpx-2"},Bo={class:"flex items-center space-x-2"},Co={key:0,class:"text-[#B0B0B0]"},Do=["onClick"],$o=t("span",{class:"iconfont icon-i-more text-lg cursor-pointer"},null,-1),So={class:"w-full border border-[#EDEDED] rounded-[9px] h-8 flex items-center justify-center px-4 hover:scale-[1.05] duration-700"},Uo=["onClick"],Lo={class:"flex items-center justify-between text-sm font-normal mt-8"},Po={class:"text-[#B0B0B0] hover:text-[#EBEBEB] space-x-1 cursor-pointer duration-500"},Ao=t("span",{class:"iconfont icon-cfmpassword"},null,-1),To=t("span",{class:"iconfont icon-tuichu"},null,-1),Ro=t("span",null," Log out",-1),No=[To,Ro],Oo=Q({__name:"UserProfile",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog","changePassWord"],setup(f,{emit:k}){const d=Le();p(!1);const c=p(!1),D=p(!1),w=Pt("reloadUserInfo"),n=Pe(),g=p(),R=p(!1),C=p(),L=p(!1),A=p(!1);p(!1);const $=p(!1),S=p(null),l=p(!0),U=p(""),B=()=>{k("update:closeDialog")},x=async()=>{C.value=n.getUserInfo,U.value=C.value.name,l.value=!0,await E(N()),g.value.length===0&&await W()},y=s=>{const{social_x_name:r,social_dc_name:P}=n.getUserInfo;if(!me(r)&&s.code==="VERIFY_X")return r;if(!me(P)&&s.code==="VERIFY_DISCORD")return P;if(s.status==="COMPLETED")return"Claimed";if(s.status==="AVAILABLE")return"Claim";{const a=Qt().find(o=>o.code===s.code);return a?a.title.split("/")[0]:"Unknown"}},X=()=>{Y()},Y=async()=>{if(C.value.name===U.value){l.value=!0;return}const s=await ts({username:U.value});s&&s.code===200?(ae.success(s.msg),C.value.name=U.value,l.value=!0):ae.warning(s.msg)},K=async s=>{S.value=s.id,A.value=!0,await rs(s).finally(()=>{A.value=!1})},H=async()=>{await w(),await W(),g.value.length===0&&N()},z=s=>{const{social_x_name:r,social_dc_name:P}=n.getUserInfo;return!me(r)&&s.code==="VERIFY_X"||!me(P)&&s.code==="VERIFY_DISCORD"},v=async s=>{try{if(L.value=!0,s.code==="VERIFY_DISCORD"){const r=await ss();r&&r.code===200&&n.setUserInfo({...n.getUserInfo,social_dc_name:""})}if(s.code==="VERIFY_X"){const r=await os();r&&r.code===200&&n.setUserInfo({...n.getUserInfo,social_x_name:""})}}catch(r){console.error(r)}finally{L.value=!1}},m=async()=>{var s,r,P,a;$.value=!0;try{const o=[];(s=n.getUserInfo)!=null&&s.sol_address&&o.push(Je({address:(r=n.getUserInfo)==null?void 0:r.sol_address})),(P=n.getUserInfo)!=null&&P.eth_address&&o.push(Je({address:(a=n.getUserInfo)==null?void 0:a.eth_address})),(await Promise.all(o)).forEach(I=>{I&&(I.code===200?w():ae.warning(I.msg))})}catch(o){console.error(o)}finally{$.value=!1}},E=s=>{const r=["VERIFY_X","VERIFY_DISCORD"];g.value=s.filter(P=>r.includes(P.code))},N=()=>JSON.parse(localStorage.getItem("MISSION_DATA")||"[]"),W=async()=>{R.value=!0;try{const s=await is(),r=s&&s.code===200?s.data:N();localStorage.setItem("MISSION_DATA",JSON.stringify(r)),E(r)}catch(s){console.error(s)}finally{R.value=!1}},J=async()=>{try{D.value=!0;const s=await cs({address:d.getAccountsWalletAddress});s&&(s.code===200?(ae.success(s.data),w()):s.msg&&ae.error(s.msg))}catch(s){D.value=!1,console.log(s)}finally{D.value=!1}},ee=()=>{De("/login"),ds()};return(s,r)=>{const P=nt,a=st,o=Wt,h=Ht,I=Jt,F=Gt,G=qt,j=Kt,q=Se,te=js,lt=Ue,Te=At("copy"),fe=Zt;return u(),b("div",Ys,[i(lt,null,{default:_(()=>[i(q,{draggable:"","model-value":s.$props.dialogVisible,"show-close":!1,width:"550px",style:{background:"black","border-radius":"10px",padding:"20px 30px",border:"1px solid #EDEDED"},"align-center":"",onClose:B,onOpen:r[4]||(r[4]=de=>x())},{default:_(()=>{var de,Re,Ne,Oe,Fe,Ve,ze,Me,je,Ye;return[t("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:B}),t("div",Ws,[t("div",Xs,[t("div",Hs,[i(P,{src:("showFaces"in s?s.showFaces:e(ot))(),fit:"cover"},{error:_(()=>[Js]),_:1},8,["src"])]),t("div",Gs,[t("div",qs,[e(l)?(u(),b("div",{key:0,class:"text-[#B0B0B0] cursor-pointer hover:text-[#EBEBEB] space-x-1 flex items-center",onClick:r[0]||(r[0]=O=>l.value=!1)},[t("span",Ks,Z((de=e(C))==null?void 0:de.name),1),Zs])):(u(),oe(a,{key:1,class:"w-full h-8 text-[#EBEBEBD]",style:{border:"none"},modelValue:e(U),"onUpdate:modelValue":r[1]||(r[1]=O=>Tt(U)?U.value=O:null),disabled:e(l),onBlur:Y},{suffix:_(()=>[t("span",{class:T(["iconfont icon-edit text-xs cursor-pointer leading-[12px] hover:text-white",e(l)?"text-[#333]":"text-white border-white"]),onClick:X},null,2)]),_:1},8,["modelValue","disabled"])),ne((u(),b("div",Qs,[eo,t("div",to,[xe(Z((Re=e(C))==null?void 0:Re.uid)+" ",1),so])])),[[Te,(Ne=e(C))==null?void 0:Ne.uid]])]),t("span",oo,Z((Oe=e(C))==null?void 0:Oe.email),1)])]),t("div",no,[t("div",ao,[i(o,{to:`${("getJumpURL"in s?s.getJumpURL:e(Xe))()}/home?type=FAQ`,target:"_blank",class:"flex-1 h-full border-box rounded-lg flex items-center justify-center cursor-pointer"},{default:_(()=>[lo]),_:1},8,["to"]),i(o,{to:`${("getJumpURL"in s?s.getJumpURL:e(Xe))()}`,target:"_blank",class:"flex-1 h-full border-box rounded-lg flex items-center justify-center cursor-pointer"},{default:_(()=>[ro]),_:1},8,["to"])]),io]),t("div",co,[t("div",uo,[i(h,{onToRefresh:H})]),ne((u(),b("div",po,[t("div",fo,[t("div",mo,[i(I,{color:"#B0B0B0"}),_o]),(Fe=e(n).getUserInfo)!=null&&Fe.sol_address||(Ve=e(n).getUserInfo)!=null&&Ve.eth_address?(u(),b("div",go,[ne((u(),b("div",vo,[t("span",ho,Z(("stringStar"in s?s.stringStar:e(He))({value:((ze=e(n).getUserInfo)==null?void 0:ze.sol_address)||((Me=e(n).getUserInfo)==null?void 0:Me.eth_address),characters:"********",start:4})),1),xo])),[[Te,((je=e(n).getUserInfo)==null?void 0:je.sol_address)||((Ye=e(n).getUserInfo)==null?void 0:Ye.eth_address)]]),i(F,{placement:"right",title:"",width:40,style:{},trigger:"click",content:""},{reference:_(()=>[wo]),default:_(()=>[ne((u(),b("div",{class:"w-full border border-[#EDEDED] rounded-[9px] h-8 flex items-center justify-center px-4 hover:scale-[1.05] duration-700",onClick:m},yo)),[[fe,e($)]])]),_:1})])):(u(),b("span",{key:1,class:"text-[#B0B0B0] hover:text-[#EDEDED] cursor-pointer",onClick:r[2]||(r[2]=O=>c.value=!0)}," Connect "))]),(u(!0),b(le,null,he(e(g),(O,rt)=>(u(),b("div",{class:"w-full py-3 px-4 rounded-lg border-box flex items-center justify-between",key:rt},[t("div",Eo,[O.code!=="VERIFY_X"?(u(),oe(G,{key:0})):(u(),oe(j,{key:1})),t("span",Io,Z(O.code==="VERIFY_X"?"X":"Discord"),1)]),t("div",ko,[t("div",Bo,[y(O)!=="Connect"?(u(),b("div",Co,Z(("stringStar"in s?s.stringStar:e(He))({value:y(O),characters:"********",start:10})),1)):V("",!0),O.status==="COMPLETED"&&!z(O)||y(O)==="Connect"?ne((u(),b("div",{key:1,class:"text-[#B0B0B0] hover:text-[#EDEDED] cursor-pointer",onClick:it=>K(O)},[xe(" Connect ")],8,Do)),[[fe,e(A)&&e(S)===O.id]]):V("",!0)]),z(O)?(u(),oe(F,{key:0,placement:"right",title:"",width:40,style:{},trigger:"click",content:""},{reference:_(()=>[$o]),default:_(()=>[t("div",So,[ne((u(),b("span",{class:"text-[#EBEBEB] text-[12px] cursor-pointer",onClick:it=>v(O)},[xe(Z(O.code==="VERIFY_X"?"Update X":"Update Discord"),1)],8,Uo)),[[fe,e(L)]])])]),_:2},1024)):V("",!0)])]))),128))])),[[fe,e(R)]]),t("div",Lo,[t("div",Po,[Ao,t("span",{class:"cursor-pointer",onClick:r[3]||(r[3]=()=>{k("changePassWord")})}," Change Password ")]),t("div",{class:"text-[#B0B0B0] hover:text-[#EBEBEB] space-x-1 cursor-pointer duration-500",onClick:ee},No)])])])]}),_:1},8,["model-value"]),i(te,{"dialog-visible":e(c),"onUpdate:success":r[5]||(r[5]=de=>J()),"onUpdate:closeDialog":r[6]||(r[6]=de=>c.value=!1)},null,8,["dialog-visible"])]),_:1})])}}}),pe=f=>(Be("data-v-098eb72d"),f=f(),Ce(),f),Fo={class:"z-[99]"},Vo={class:"space-y-5 overflow-hidden flex flex-col px-6"},zo=pe(()=>t("span",{class:"text-base font-normal text-[#EDEDED] px-5"},"Change Password",-1)),Mo={class:"w-full flex-1 px-5 pb-5 mt-14"},jo=pe(()=>t("div",{class:"flex items-center space-x-2 text-[#666666]"},[t("span",{class:"iconfont icon-cfmpassword text-base"}),t("span",{class:"w-[1px] h-[18px] bg-[#666666]"})],-1)),Yo=pe(()=>t("div",{class:"flex items-center space-x-2 text-[#666666]"},[t("span",{class:"iconfont icon-cfmpassword text-base"}),t("span",{class:"w-[1px] h-[18px] bg-[#666666]"})],-1)),Wo={class:"set_checkbox_sty"},Xo=pe(()=>t("div",{class:"flex items-center space-x-2 text-[#666666]"},[t("span",{class:"iconfont icon-cfmpassword text-base"}),t("span",{class:"w-[1px] h-[18px] bg-[#666666]"})],-1)),Ho={class:"flex justify-center"},Jo=pe(()=>t("span",{class:"text-black Regular font-semibold text-[14px]"},"Save",-1)),Go=Q({__name:"ChangePassword",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(f,{emit:k}){const d=p(),c=Pe(),D=p(),w=p(!1),n=p(es()),g=Ee({password:"",password_new:"",confirm_Password:"",checkList:[]}),L=Ee({password:[{required:!0,message:"Enter your Currrent password",trigger:"blur"}],password_new:[{validator:(B,x,y)=>{x===""?y(new Error("Please enter a valide password")):(g.checkList.length!==2&&y(new Error("Your password does not match")),y())},trigger:"blur"}],confirm_Password:[{validator:(B,x,y)=>{x===""?y(new Error("Please input the password again")):x!==g.password_new?y(new Error("Your password does not match")):y()},trigger:"blur"}]}),A=()=>{const{password_new:B}=g,x=gs(B);g.checkList=[],x.criteriaMet&&g.checkList.push(n==null?void 0:n.value[0]),x.lengthMet&&g.checkList.push(n==null?void 0:n.value[1])},$=()=>{S(d.value),g.checkList=[],k("update:closeDialog")},S=B=>{B&&B.resetFields()},l=async B=>{B&&await B.validate(async x=>{if(x)try{w.value=!0;const y=await ns({password:_e.SHA256(g.password).toString(_e.enc.Hex).trim(),password_new:_e.SHA256(g.password_new).toString(_e.enc.Hex).trim()});w.value=!1,y&&(y.code===200?(ae.success(y.data),De("/login")):ae.error(y.msg))}catch(y){console.log(y),w.value=!1}})},U=async()=>{D.value=c.getUserInfo};return(B,x)=>{const y=st,X=us,Y=fs,K=ms,H=_s,z=ps,v=Se,m=Ue;return u(),b("div",Fo,[i(m,null,{default:_(()=>[i(v,{class:"relative z-50",draggable:"","model-value":B.$props.dialogVisible,"show-close":!1,width:"550px",style:{background:"black","border-radius":"10px",border:"1px solid #EDEDED","padding-bottom":"18px"},"align-center":"",onClose:$,onOpen:x[5]||(x[5]=E=>U())},{default:_(()=>[t("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:$}),t("div",Vo,[zo,t("div",Mo,[i(z,{model:e(g),class:"space-y-3",ref_key:"ruleFormRef",ref:d,rules:e(L),"label-position":"top","hide-required-asterisk":""},{default:_(()=>[i(X,{label:"Currrent password",prop:"password"},{default:_(()=>[i(y,{style:{height:"35px"},maxlength:50,placeholder:"Enter your Currrent password",type:"password",modelValue:e(g).password,"onUpdate:modelValue":x[0]||(x[0]=E=>e(g).password=E),"show-password":"",oncopy:"return false"},{prefix:_(()=>[jo]),_:1},8,["modelValue"])]),_:1}),i(X,{label:"Password",prop:"password_new",onInput:A},{default:_(()=>[i(y,{style:{height:"35px"},maxlength:50,placeholder:"Enter your password",type:"password",modelValue:e(g).password_new,"onUpdate:modelValue":x[1]||(x[1]=E=>e(g).password_new=E),"show-password":"",oncopy:"return false"},{prefix:_(()=>[Yo]),_:1},8,["modelValue"]),t("div",Wo,[i(K,{modelValue:e(g).checkList,"onUpdate:modelValue":x[2]||(x[2]=E=>e(g).checkList=E)},{default:_(()=>[(u(!0),b(le,null,he(e(n),(E,N)=>(u(),oe(Y,{label:E,value:E,key:N},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),i(X,{label:"Confirm Password",prop:"confirm_Password"},{default:_(()=>[i(y,{style:{height:"35px"},maxlength:50,placeholder:"Enter your password",type:"password",modelValue:e(g).confirm_Password,"onUpdate:modelValue":x[3]||(x[3]=E=>e(g).confirm_Password=E),"show-password":"",oncopy:"return false"},{prefix:_(()=>[Xo]),_:1},8,["modelValue"])]),_:1}),t("div",Ho,[i(H,{color:"#EDEDED",round:"",class:"w-1/2 h-full mx-auto mt-6",onClick:x[4]||(x[4]=E=>l(e(d))),loading:e(w)},{default:_(()=>[Jo]),_:1},8,["loading"])])]),_:1},8,["model","rules"])])])]),_:1},8,["model-value"])]),_:1})])}}});const qo=$e(Go,[["__scopeId","data-v-098eb72d"]]),Ko={class:"text-[#EBEBEB] py-6 px-6 flex space-x-2"},Zo=t("p",{class:"text-[#EBEBEB]"},"Transaction failed:",-1),Qo={class:"underline underline-offset-4"},en=["href"],tn=Q({__name:"Error",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(f,{emit:k}){const d=Le(),c=()=>{k("update:closeDialog"),d.setDialogError({show:!1,url:""})};return(D,w)=>{const n=Se,g=Ue;return u(),b("div",null,[i(g,null,{default:_(()=>[i(n,{class:"border-box",draggable:"","model-value":D.$props.dialogVisible,"show-close":!1,width:"350px",style:{background:"black","border-radius":"10px","padding-bottom":"10px"},"align-center":"",onClose:c},{default:_(()=>[t("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:c}),t("div",Ko,[Zo,t("div",Qo,[t("a",{target:"_blank",href:e(d).getDialogError.url}," Check the reason ",8,en)])])]),_:1},8,["model-value"])]),_:1})])}}}),sn=""+globalThis.__publicAssetsURL("images/public/hot.png"),Ae=f=>(Be("data-v-3a0eb34b"),f=f(),Ce(),f),on={class:"w-full h-screen flex flex-col bg-black overflow-hidden"},nn={class:"w-full h-[80px] flex items-center justify-between flex-wrap adaptation-padding py-5 pointer-events-auto relative z-20"},an={class:"flex items-center space-x-10"},ln=Ae(()=>t("img",{src:Xt,alt:"",class:"w-full h-full object-contain"},null,-1)),rn=[ln],cn={class:"flex justify-center items-center gap-2 sm:gap-4 transform rigin-left scale-80 lg:scale-100 lg:gap-6 space-x-4"},dn=["onClick","onMouseenter"],un={class:"flex items-center space-x-1"},pn={key:0,class:"w-[28px] h-[16px]"},fn=Ae(()=>t("img",{src:sn,class:"w-full h-full object-contain"},null,-1)),mn=[fn],_n={class:"uppercase font-bold text-[14px] u-line-1"},gn={class:"flex items-center space-x-3 absolute right-[10%]"},vn={class:"text-[#EBEBEB]"},hn=Ae(()=>t("div",{class:"image-slot"},[t("img",{src:at,class:"w-full h-full object-cover"})],-1)),xn={class:"w-full flex-1 flex flex-col body-container overflow-auto scroll-smooth",ref:"targetElement"},wn={key:0,class:"flex items-center w-full h-11 adaptation-padding mb-5 mt-4"},bn=Q({__name:"index",setup(f){const k=p(),d=Ot(),c=Ft(),D=p(d.path),w=p(localStorage.getItem("ANNOUNCEMENT")||""),n=p(!1),g=p(!1),R=p(null),C=Le(),L=p(D.value.replace(/\/$/,"")),A=p(!1);Vt("reloadUserInfo",async()=>{K()});const S=Ee([{title:"Dashboard",path:"/dashboard"},{title:"training",path:"/emotionalCheckIn",tips:!0},{title:"GODHOOD",path:"/godhoodId"},{title:"Mission& Reward",path:"/missions"}]),l=Pe(),U=p(!1),B=p(!1),x=p(),y=v=>{L.value=v.path,De(v.path)},X=()=>{U.value=!1,B.value=!0},Y=async()=>{const v=await as();v&&v.code===200&&v.data&&v.data.length>0&&(w.value=v.data[0].announcement,localStorage.setItem("ANNOUNCEMENT",w.value),n.value=!0)},K=async()=>{try{if(!l.getToken)return;const v=await ls();if(v&&v.code===200){await l.setUserInfo({...v.data}),localStorage.setItem("gaea_token",l.getToken);const m=JSON.parse(localStorage.getItem("PLUGIN_DATA_INFO"));localStorage.setItem("PLUGIN_DATA_INFO",JSON.stringify({...m,...v.data}));const{uid:E}=l.getUserInfo;if(E){if(!l.getUuidv4||!l.getUpdateBrowserId){const N=await Ge.getFinalFingerprint(E);l.setUuidv4(N)}if(!localStorage.getItem("browser_id")||!l.getUpdateBrowserId){const N=await Ge.getFinalFingerprint(E,"plugIn");localStorage.setItem("browser_id",N)}l.setUpdateBrowserId(!0)}}}catch(v){console.log(v)}},H=async()=>{var v;try{clearTimeout(k.value);const m=await hs();if(m&&m.code===200){const E=m&&m.code===200?m.data:{country:"Unknown",country_icon:"Unknown",ip_address:"None",host:""};await l.setPingInfo({...l.getPingInfo,...E});const W=vs()-((v=m.data)==null?void 0:v.timestamp);l.setTimeDifference(W);const J=JSON.parse(localStorage.getItem("PLUGIN_DATA_INFO"));localStorage.setItem("PLUGIN_DATA_INFO",JSON.stringify({...J,version:l.getVersion,timeDifference:W}))}}catch(m){console.log(m)}finally{k.value=setTimeout(()=>{H()},1e3*600*18)}},z=async()=>{var v;try{if(d.path==="/godhoodId"&&(x.value=xs.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"})),!C.getIsPayCard){const m=await Yt();C.setIsPayCard(m)}}catch(m){console.log(m)}finally{(v=x.value)==null||v.close()}};return ve(async()=>{await ke(),H(),await K(),Y(),z()}),ge(()=>d.path,()=>{L.value=d.path.replace(/\/$/,"")}),(v,m)=>{const E=nt,N=Ms,W=Oo,J=qo,ee=tn;return u(),b("div",on,[t("div",nn,[t("div",an,[t("div",{class:"w-40 h-10 cursor-pointer",onClick:m[0]||(m[0]=s=>e(c).go(0))},rn),t("div",cn,[(u(!0),b(le,null,he(e(S),(s,r)=>(u(),b("div",{key:r,class:T(["flex items-center hover:text-[#EBEBEB] cursor-pointer",e(L)===s.path?"text-[#EBEBEB]":"text-[#b0b0b0]"]),onClick:P=>y(s),onMouseenter:P=>R.value=r,onMouseleave:m[1]||(m[1]=P=>R.value=null)},[t("div",un,[s.title==="training"?(u(),b("div",pn,mn)):V("",!0),t("span",_n,Z(s.tips&&e(l).getUserInfo.role==="user"?"Emotional Coordinates":s.title),1)])],42,dn))),128))])]),t("div",gn,[t("span",vn,Z(e(l).getUserInfo.name),1),t("div",{class:"w-8 h-8 rounded-full overflow-hidden cursor-pointer bg-black border-2 border-[#ebebeb9e]",onClick:m[2]||(m[2]=s=>U.value=!0)},[i(E,{src:("showFaces"in v?v.showFaces:e(ot))(),fit:"fill"},{error:_(()=>[hn]),_:1},8,["src"])])])]),t("div",xn,[e(n)?(u(),b("div",wn,[i(N,{text:e(w)},null,8,["text"])])):V("",!0),t("div",{class:T(["w-full flex-1",e(A)?"layouts_style":""])},[ue(v.$slots,"default",{},void 0,!0)],2)],512),i(W,{"dialog-visible":e(U),"onUpdate:closeDialog":m[3]||(m[3]=s=>U.value=!1),onChangePassWord:m[4]||(m[4]=s=>X())},null,8,["dialog-visible"]),i(J,{"dialog-visible":e(B),"onUpdate:closeDialog":m[5]||(m[5]=s=>B.value=!1)},null,8,["dialog-visible"]),i(ee,{"dialog-visible":e(C).getDialogError.show,"onUpdate:closeDialog":m[6]||(m[6]=s=>g.value=!1)},null,8,["dialog-visible"])])}}});const na=$e(bn,[["__scopeId","data-v-3a0eb34b"]]);export{na as default};
