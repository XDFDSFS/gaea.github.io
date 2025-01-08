import{am as $,aW as re,aT as ye,aX as x,J as oe,f as ie,a7 as be,g as Ce,aH as F,a9 as Ee,Q,aY as ge,aZ as te,w as j,a_ as Te,a$ as we,b0 as he,b1 as K,K as ee,an as q,d as U,m as z,X as g,af as Se,a3 as ke,as as Ae,Z as se,s as L,o as R,c as P,b as W,j as w,e as n,t as De,q as D,B as Z,a4 as Me,S as Le,l as J,n as ue,Y as ce,b2 as Be,aG as Ie,at as Ne,r as M,b3 as Oe,v as Re,P as $e,b4 as _e,b5 as ne,b6 as Ye,N as He,A as ze,ag as Ue,b7 as Ve,U as We,V as Xe,az as xe,a1 as Ke}from"./entry.f70eada7.js";import{F as Pe,E as Ge}from"./focus-trap.c0bd6161.js";import{t as Fe,U as de}from"./event.4aec927b.js";import{u as le,a as ae}from"./el-button.2b7f6acd.js";const je=(e,t)=>{if(!$)return!1;const o={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(t)],s=re(e,o);return["scroll","auto","overlay"].some(l=>s.includes(l))},ho=(e,t)=>{if(!$)return;let o=e;for(;o;){if([window,document,document.documentElement].includes(o))return window;if(je(o,t))return o;o=o.parentNode}return o};let V;const qe=e=>{var t;if(!$)return 0;if(V!==void 0)return V;const o=document.createElement("div");o.className=`${e}-scrollbar__wrap`,o.style.visibility="hidden",o.style.width="100px",o.style.position="absolute",o.style.top="-9999px",document.body.appendChild(o);const s=o.offsetWidth;o.style.overflow="scroll";const l=document.createElement("div");l.style.width="100%",o.appendChild(l);const u=l.offsetWidth;return(t=o.parentNode)==null||t.removeChild(o),V=s-u,V};function So(e,t){if(!$)return;if(!t){e.scrollTop=0;return}const o=[];let s=t.offsetParent;for(;s!==null&&e!==s&&e.contains(s);)o.push(s),s=s.offsetParent;const l=t.offsetTop+o.reduce((c,m)=>c+m.offsetTop,0),u=l+t.offsetHeight,r=e.scrollTop,a=r+e.clientHeight;l<r?e.scrollTop=l:u>a&&(e.scrollTop=u-e.clientHeight)}const Ze=(...e)=>t=>{e.forEach(o=>{ye(o)?o(t):o.value=t})};var X=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(X||{});const G=e=>{const t=x(e)?e:[e],o=[];return t.forEach(s=>{var l;x(s)?o.push(...G(s)):oe(s)&&x(s.children)?o.push(...G(s.children)):(o.push(s),oe(s)&&((l=s.component)!=null&&l.subTree)&&o.push(...G(s.component.subTree)))}),o},Je=(e,t,o)=>{let s={offsetX:0,offsetY:0};const l=a=>{const c=a.clientX,m=a.clientY,{offsetX:f,offsetY:b}=s,v=e.value.getBoundingClientRect(),d=v.left,E=v.top,B=v.width,_=v.height,Y=document.documentElement.clientWidth,I=document.documentElement.clientHeight,H=-d+f,N=-E+b,h=Y-d-B+f,S=I-E-_+b,O=T=>{const i=Math.min(Math.max(f+T.clientX-c,H),h),C=Math.min(Math.max(b+T.clientY-m,N),S);s={offsetX:i,offsetY:C},e.value.style.transform=`translate(${F(i)}, ${F(C)})`},p=()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",p)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",p)},u=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",l)},r=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",l)};ie(()=>{be(()=>{o.value?u():r()})}),Ce(()=>{r()})},Qe=(e,t={})=>{Ee(e)||Fe("[useLockscreen]","You need to pass a ref param to this function");const o=t.ns||Q("popup"),s=ge(()=>o.bm("parent","hidden"));if(!$||te(document.body,s.value))return;let l=0,u=!1,r="0";const a=()=>{setTimeout(()=>{he(document==null?void 0:document.body,s.value),u&&document&&(document.body.style.width=r)},200)};j(e,c=>{if(!c){a();return}u=!te(document.body,s.value),u&&(r=document.body.style.width),l=qe(o.namespace.value);const m=document.documentElement.clientHeight<document.body.scrollHeight,f=re(document.body,"overflowY");l>0&&(m||f==="scroll")&&u&&(document.body.style.width=`calc(100% - ${l}px)`),Te(document.body,s.value)}),we(()=>a())},fe=e=>{if(!e)return{onClick:K,onMousedown:K,onMouseup:K};let t=!1,o=!1;return{onClick:r=>{t&&o&&e(r),t=o=!1},onMousedown:r=>{t=r.target===r.currentTarget},onMouseup:r=>{o=r.target===r.currentTarget}}},eo=ee({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:q([String,Array,Object])},zIndex:{type:q([String,Number])}}),oo={click:e=>e instanceof MouseEvent},to="overlay";var so=U({name:"ElOverlay",props:eo,emits:oo,setup(e,{slots:t,emit:o}){const s=Q(to),l=c=>{o("click",c)},{onClick:u,onMousedown:r,onMouseup:a}=fe(e.customMaskEvent?void 0:l);return()=>e.mask?z("div",{class:[s.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:u,onMousedown:r,onMouseup:a},[g(t,"default")],X.STYLE|X.CLASS|X.PROPS,["onClick","onMouseup","onMousedown"]):Se("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[g(t,"default")])}});const no=so,me=Symbol("dialogInjectionKey"),ve=ee({center:Boolean,alignCenter:Boolean,closeIcon:{type:ke},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),lo={close:()=>!0},ao=["aria-label"],ro=["id"],io=U({name:"ElDialogContent"}),uo=U({...io,props:ve,emits:lo,setup(e){const t=e,{t:o}=Ae(),{Close:s}=Be,{dialogRef:l,headerRef:u,bodyId:r,ns:a,style:c}=se(me),{focusTrapRef:m}=se(Pe),f=L(()=>[a.b(),a.is("fullscreen",t.fullscreen),a.is("draggable",t.draggable),a.is("align-center",t.alignCenter),{[a.m("center")]:t.center},t.customClass]),b=Ze(m,l),v=L(()=>t.draggable);return Je(l,u,v),(d,E)=>(R(),P("div",{ref:n(b),class:w(n(f)),style:ue(n(c)),tabindex:"-1"},[W("header",{ref_key:"headerRef",ref:u,class:w(n(a).e("header"))},[g(d.$slots,"header",{},()=>[W("span",{role:"heading",class:w(n(a).e("title"))},De(d.title),3)]),d.showClose?(R(),P("button",{key:0,"aria-label":n(o)("el.dialog.close"),class:w(n(a).e("headerbtn")),type:"button",onClick:E[0]||(E[0]=B=>d.$emit("close"))},[z(n(Le),{class:w(n(a).e("close"))},{default:D(()=>[(R(),Z(Me(d.closeIcon||n(s))))]),_:1},8,["class"])],10,ao)):J("v-if",!0)],2),W("div",{id:n(r),class:w(n(a).e("body"))},[g(d.$slots,"default")],10,ro),d.$slots.footer?(R(),P("footer",{key:0,class:w(n(a).e("footer"))},[g(d.$slots,"footer")],2)):J("v-if",!0)],6))}});var co=ce(uo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const fo=ee({...ve,appendToBody:Boolean,beforeClose:{type:q(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),mo={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[de]:e=>Ie(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},vo=(e,t)=>{const s=$e().emit,{nextZIndex:l}=Ne();let u="";const r=le(),a=le(),c=M(!1),m=M(!1),f=M(!1),b=M(e.zIndex||l());let v,d;const E=Oe("namespace",_e),B=L(()=>{const y={},A=`--${E.value}-dialog`;return e.fullscreen||(e.top&&(y[`${A}-margin-top`]=e.top),e.width&&(y[`${A}-width`]=F(e.width))),y}),_=L(()=>e.alignCenter?{display:"flex"}:{});function Y(){s("opened")}function I(){s("closed"),s(de,!1),e.destroyOnClose&&(f.value=!1)}function H(){s("close")}function N(){d==null||d(),v==null||v(),e.openDelay&&e.openDelay>0?{stop:v}=ne(()=>p(),e.openDelay):p()}function h(){v==null||v(),d==null||d(),e.closeDelay&&e.closeDelay>0?{stop:d}=ne(()=>T(),e.closeDelay):T()}function S(){function y(A){A||(m.value=!0,c.value=!1)}e.beforeClose?e.beforeClose(y):h()}function O(){e.closeOnClickModal&&S()}function p(){$&&(c.value=!0)}function T(){c.value=!1}function i(){s("openAutoFocus")}function C(){s("closeAutoFocus")}function k(y){var A;((A=y.detail)==null?void 0:A.focusReason)==="pointer"&&y.preventDefault()}e.lockScroll&&Qe(c);function pe(){e.closeOnPressEscape&&S()}return j(()=>e.modelValue,y=>{y?(m.value=!1,N(),f.value=!0,b.value=e.zIndex?b.value++:l(),Re(()=>{s("open"),t.value&&(t.value.scrollTop=0)})):c.value&&h()}),j(()=>e.fullscreen,y=>{t.value&&(y?(u=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=u)}),ie(()=>{e.modelValue&&(c.value=!0,f.value=!0,N())}),{afterEnter:Y,afterLeave:I,beforeLeave:H,handleClose:S,onModalClick:O,close:h,doClose:T,onOpenAutoFocus:i,onCloseAutoFocus:C,onCloseRequested:pe,onFocusoutPrevented:k,titleId:r,bodyId:a,closed:m,style:B,overlayDialogStyle:_,rendered:f,visible:c,zIndex:b}},po=["aria-label","aria-labelledby","aria-describedby"],yo=U({name:"ElDialog",inheritAttrs:!1}),bo=U({...yo,props:fo,emits:mo,setup(e,{expose:t}){const o=e,s=Ye();ae({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},L(()=>!!s.title)),ae({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},L(()=>!!o.customClass));const l=Q("dialog"),u=M(),r=M(),a=M(),{visible:c,titleId:m,bodyId:f,style:b,overlayDialogStyle:v,rendered:d,zIndex:E,afterEnter:B,afterLeave:_,beforeLeave:Y,handleClose:I,onModalClick:H,onOpenAutoFocus:N,onCloseAutoFocus:h,onCloseRequested:S,onFocusoutPrevented:O}=vo(o,u);He(me,{dialogRef:u,headerRef:r,bodyId:f,ns:l,rendered:d,style:b});const p=fe(H),T=L(()=>o.draggable&&!o.fullscreen);return t({visible:c,dialogContentRef:a}),(i,C)=>(R(),Z(xe,{to:"body",disabled:!i.appendToBody},[z(Xe,{name:"dialog-fade",onAfterEnter:n(B),onAfterLeave:n(_),onBeforeLeave:n(Y),persisted:""},{default:D(()=>[ze(z(n(no),{"custom-mask-event":"",mask:i.modal,"overlay-class":i.modalClass,"z-index":n(E)},{default:D(()=>[W("div",{role:"dialog","aria-modal":"true","aria-label":i.title||void 0,"aria-labelledby":i.title?void 0:n(m),"aria-describedby":n(f),class:w(`${n(l).namespace.value}-overlay-dialog`),style:ue(n(v)),onClick:C[0]||(C[0]=(...k)=>n(p).onClick&&n(p).onClick(...k)),onMousedown:C[1]||(C[1]=(...k)=>n(p).onMousedown&&n(p).onMousedown(...k)),onMouseup:C[2]||(C[2]=(...k)=>n(p).onMouseup&&n(p).onMouseup(...k))},[z(n(Ge),{loop:"",trapped:n(c),"focus-start-el":"container",onFocusAfterTrapped:n(N),onFocusAfterReleased:n(h),onFocusoutPrevented:n(O),onReleaseRequested:n(S)},{default:D(()=>[n(d)?(R(),Z(co,Ue({key:0,ref_key:"dialogContentRef",ref:a},i.$attrs,{"custom-class":i.customClass,center:i.center,"align-center":i.alignCenter,"close-icon":i.closeIcon,draggable:n(T),fullscreen:i.fullscreen,"show-close":i.showClose,title:i.title,onClose:n(I)}),Ve({header:D(()=>[i.$slots.title?g(i.$slots,"title",{key:1}):g(i.$slots,"header",{key:0,close:n(I),titleId:n(m),titleClass:n(l).e("title")})]),default:D(()=>[g(i.$slots,"default")]),_:2},[i.$slots.footer?{name:"footer",fn:D(()=>[g(i.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):J("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,po)]),_:3},8,["mask","overlay-class","z-index"]),[[We,n(c)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var Co=ce(bo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const ko=Ke(Co);export{ko as E,no as a,Qe as b,fe as c,G as f,ho as g,So as s,Je as u};
