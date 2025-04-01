import{x as V,av as he,at as we,d as Te,ai as Be,aE as Ie,aF as Me,v as I,r as M,L as Se,aG as ne,w as te,f as ke,g as Re,aH as Ae,aI as S,o as c,C as v,m as p,B as K,l as h,b as m,i,n as oe,a0 as F,c as X,P as z,k,t as L,K as N,ar as Oe,q,aq as G,W as Le,a5 as Ve,aA as de,aJ as ce,aK as fe,aL as se,aM as $e,aN as De,aO as ae,az as le,E as W}from"./entry.f2efeee4.js";import{E as Pe,u as re}from"./el-button.ed9095c3.js";import{E as Fe}from"./el-input.f7d47e7b.js";import{a as ze,u as Ne,b as Ue,c as He}from"./el-overlay.f9f46384.js";import{G as y,P as J}from"./request.9f8f1c11.js";import{E as Ke}from"./focus-trap.19bf41a1.js";import{i as Xe}from"./validator.517b8afe.js";const qe='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',Ge=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,ie=e=>Array.from(e.querySelectorAll(qe)).filter(n=>We(n)&&Ge(n)),We=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},j="_trap-focus-children",w=[],ue=e=>{if(w.length===0)return;const n=w[w.length-1][j];if(n.length>0&&e.code===he.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const a=e.shiftKey,s=e.target===n[0],r=e.target===n[n.length-1];s&&a&&(e.preventDefault(),n[n.length-1].focus()),r&&!a&&(e.preventDefault(),n[0].focus())}},je={beforeMount(e){e[j]=ie(e),w.push(e),w.length<=1&&document.addEventListener("keydown",ue)},updated(e){V(()=>{e[j]=ie(e)})},unmounted(){w.shift(),w.length===0&&document.removeEventListener("keydown",ue)}},Je=Te({name:"ElMessageBox",directives:{TrapFocus:je},components:{ElButton:Pe,ElFocusTrap:Ke,ElInput:Fe,ElOverlay:ze,ElIcon:Be,...Ie},inheritAttrs:!1,props:{buttonSize:{type:String,validator:Xe},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:a,zIndex:s,ns:r,size:o}=Me("message-box",I(()=>e.buttonSize)),{t:d}=a,{nextZIndex:f}=s,E=M(!1),t=Se({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:f()}),U=I(()=>{const l=t.type;return{[r.bm("icon",l)]:l&&ne[l]}}),H=re(),u=re(),pe=I(()=>t.icon||ne[t.type]||""),me=I(()=>!!t.message),T=M(),Y=M(),A=M(),D=M(),Q=M(),ge=I(()=>t.confirmButtonClass);te(()=>t.inputValue,async l=>{await V(),e.boxType==="prompt"&&l!==null&&x()},{immediate:!0}),te(()=>E.value,l=>{var g,B;l&&(e.boxType!=="prompt"&&(t.autofocus?A.value=(B=(g=Q.value)==null?void 0:g.$el)!=null?B:T.value:A.value=T.value),t.zIndex=f()),e.boxType==="prompt"&&(l?V().then(()=>{var ee;D.value&&D.value.$el&&(t.autofocus?A.value=(ee=Ee())!=null?ee:T.value:A.value=T.value)}):(t.editorErrorMessage="",t.validateError=!1))});const ve=I(()=>e.draggable);Ne(T,Y,ve),ke(async()=>{await V(),e.closeOnHashChange&&window.addEventListener("hashchange",O)}),Re(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",O)});function O(){E.value&&(E.value=!1,V(()=>{t.action&&n("action",t.action)}))}const Z=()=>{e.closeOnClickModal&&P(t.distinguishCancelAndClose?"close":"cancel")},be=He(Z),ye=l=>{if(t.inputType!=="textarea")return l.preventDefault(),P("confirm")},P=l=>{var g;e.boxType==="prompt"&&l==="confirm"&&!x()||(t.action=l,t.beforeClose?(g=t.beforeClose)==null||g.call(t,l,t,O):O())},x=()=>{if(e.boxType==="prompt"){const l=t.inputPattern;if(l&&!l.test(t.inputValue||""))return t.editorErrorMessage=t.inputErrorMessage||d("el.messagebox.error"),t.validateError=!0,!1;const g=t.inputValidator;if(typeof g=="function"){const B=g(t.inputValue);if(B===!1)return t.editorErrorMessage=t.inputErrorMessage||d("el.messagebox.error"),t.validateError=!0,!1;if(typeof B=="string")return t.editorErrorMessage=B,t.validateError=!0,!1}}return t.editorErrorMessage="",t.validateError=!1,!0},Ee=()=>{const l=D.value.$refs;return l.input||l.textarea},_=()=>{P("close")},Ce=()=>{e.closeOnPressEscape&&_()};return e.lockScroll&&Ue(E),{...Ae(t),ns:r,overlayEvent:be,visible:E,hasMessage:me,typeClass:U,contentId:H,inputId:u,btnSize:o,iconComponent:pe,confirmButtonClasses:ge,rootRef:T,focusStartRef:A,headerRef:Y,inputRef:D,confirmRef:Q,doClose:O,handleClose:_,onCloseRequested:Ce,handleWrapperClick:Z,handleInputEnter:ye,handleAction:P,t:d}}}),Ye=["aria-label","aria-describedby"],Qe=["aria-label"],Ze=["id"];function xe(e,n,a,s,r,o){const d=S("el-icon"),f=S("close"),E=S("el-input"),t=S("el-button"),U=S("el-focus-trap"),H=S("el-overlay");return c(),v(Le,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=u=>e.$emit("vanish")),persisted:""},{default:p(()=>[K(h(H,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:p(()=>[m("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:i(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...u)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...u)),onMousedown:n[9]||(n[9]=(...u)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...u)),onMouseup:n[10]||(n[10]=(...u)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...u))},[h(U,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:p(()=>[m("div",{ref:"rootRef",class:i([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:oe(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=F(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(c(),X("div",{key:0,ref:"headerRef",class:i(e.ns.e("header"))},[m("div",{class:i(e.ns.e("title"))},[e.iconComponent&&e.center?(c(),v(d,{key:0,class:i([e.ns.e("status"),e.typeClass])},{default:p(()=>[(c(),v(z(e.iconComponent)))]),_:1},8,["class"])):k("v-if",!0),m("span",null,L(e.title),1)],2),e.showClose?(c(),X("button",{key:0,type:"button",class:i(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=N(F(u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[h(d,{class:i(e.ns.e("close"))},{default:p(()=>[h(f)]),_:1},8,["class"])],42,Qe)):k("v-if",!0)],2)):k("v-if",!0),m("div",{id:e.contentId,class:i(e.ns.e("content"))},[m("div",{class:i(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(c(),v(d,{key:0,class:i([e.ns.e("status"),e.typeClass])},{default:p(()=>[(c(),v(z(e.iconComponent)))]),_:1},8,["class"])):k("v-if",!0),e.hasMessage?(c(),X("div",{key:1,class:i(e.ns.e("message"))},[Oe(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(c(),v(z(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(c(),v(z(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:p(()=>[q(L(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):k("v-if",!0)],2),K(m("div",{class:i(e.ns.e("input"))},[h(E,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=u=>e.inputValue=u),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:i({invalid:e.validateError}),onKeydown:N(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),m("div",{class:i(e.ns.e("errormsg")),style:oe({visibility:e.editorErrorMessage?"visible":"hidden"})},L(e.editorErrorMessage),7)],2),[[G,e.showInput]])],10,Ze),m("div",{class:i(e.ns.e("btns"))},[e.showCancelButton?(c(),v(t,{key:0,loading:e.cancelButtonLoading,class:i([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=u=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=N(F(u=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:p(()=>[q(L(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):k("v-if",!0),K(h(t,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:i([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=u=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=N(F(u=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:p(()=>[q(L(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[G,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,Ye)]),_:3},8,["z-index","overlay-class","mask"]),[[G,e.visible]])]),_:3})}var _e=we(Je,[["render",xe],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const $=new Map,en=e=>{let n=document.body;return e.appendTo&&(de(e.appendTo)&&(n=document.querySelector(e.appendTo)),le(e.appendTo)&&(n=e.appendTo),le(n)||(n=document.body)),n},nn=(e,n,a=null)=>{const s=h(_e,e,ae(e.message)||ce(e.message)?{default:ae(e.message)?e.message:()=>e.message}:null);return s.appContext=a,fe(s,n),en(e).appendChild(n.firstElementChild),s.component},tn=()=>document.createElement("div"),on=(e,n)=>{const a=tn();e.onVanish=()=>{fe(null,a),$.delete(r)},e.onAction=o=>{const d=$.get(r);let f;e.showInput?f={value:r.inputValue,action:o}:f=o,e.callback?e.callback(f,s.proxy):o==="cancel"||o==="close"?e.distinguishCancelAndClose&&o!=="cancel"?d.reject("close"):d.reject("cancel"):d.resolve(f)};const s=nn(e,a,n),r=s.proxy;for(const o in e)se(e,o)&&!se(r.$props,o)&&(r[o]=e[o]);return r.visible=!0,r};function R(e,n=null){if(!Ve)return Promise.reject();let a;return de(e)||ce(e)?e={message:e}:a=e.callback,new Promise((s,r)=>{const o=on(e,n??R._context);$.set(o,{options:e,callback:a,resolve:s,reject:r})})}const sn=["alert","confirm","prompt"],an={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};sn.forEach(e=>{R[e]=ln(e)});function ln(e){return(n,a,s,r)=>{let o="";return $e(a)?(s=a,o=""):De(a)?o="":o=a,R(Object.assign({title:o,message:n,type:"",...an[e]},s,{boxType:e}),r)}}R.close=()=>{$.forEach((e,n)=>{n.doClose()}),$.clear()};R._context=null;const b=R;b.install=e=>{b._context=e._context,e.config.globalProperties.$msgbox=b,e.config.globalProperties.$messageBox=b,e.config.globalProperties.$alert=b.alert,e.config.globalProperties.$confirm=b.confirm,e.config.globalProperties.$prompt=b.prompt};const rn=b;const Bn=()=>y("/api/mission/list"),In=e=>J("/api/mission/complete-mission",e),un=()=>y("/api/auth/x/connect"),dn=()=>y("/api/auth/discord/connect"),cn=()=>J("/api/auth/email/verify"),fn=()=>y("/api/auth/telegram/connect"),pn=()=>y("/api/auth/galxe/connect"),mn=()=>y("/api/auth/questn/connect"),gn=e=>y(`/api/auth/retweet/connect?id=${e}`),Mn=(e,n)=>y(`/api/transaction/history?page=${e}&limit=${n}`),C=async(e,n,a)=>{try{const s=await e();if(s&&s.code===200)return n(s.data);W.warning(s.msg)}catch{a()}},vn=e=>{rn.alert(e,"",{showConfirmButton:!1,closeOnClickModal:!0})},Sn=async e=>{try{const n={TWITTER:()=>C(un,o=>window.open(o.url,"_blank"),()=>{}),DISCORD:()=>C(dn,o=>window.open(o.url,"_blank"),()=>{W.error("Service Unavailable")}),VERIFY_EMAIL:async()=>await C(await cn,o=>vn(o),()=>W.error("Failed to verify email")),JOIN_TELEGRAM:()=>C(fn,o=>window.open(o.url,"_blank"),()=>{}),JOIN_GALXESPACE:()=>C(pn,o=>window.open(o.url,"_blank"),()=>{}),JOIN_QUESTN:()=>C(mn,o=>window.open(o.url,"_blank"),()=>{}),RETWEET:()=>C(()=>gn(e.id),o=>window.open(o.url,"_blank"),()=>{})},a=["VERIFY_DISCORD","JOIN_DISCORD"],s=["VERIFY_X","FOLLOW_X","FOLLOW_X2","VERIFY_X2"],r=["RETWEET_X"];n[e.code]?await n[e.code]():a.includes(e.code)?await n.DISCORD():s.includes(e.code)?await n.TWITTER():r.includes(e.code)&&await n.RETWEET()}catch{}},kn=e=>J("/api/bind/address",e);export{kn as b,In as c,Sn as j,Bn as m,Mn as t};
