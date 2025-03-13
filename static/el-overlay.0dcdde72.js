import{aN as ve,b1 as K,O as Q,f as le,a0 as pe,g as ye,b7 as P,J as be,R as Z,c8 as Ce,af as ae,bL as ee,w as W,aP as Ee,aS as ge,c9 as Te,aR as Se,bh as X,P as J,ah as F,d as H,l as z,M as g,a7 as ke,V as we,am as Ae,D as oe,s as L,o as R,c as x,b as U,i as S,e as o,t as De,m as M,B as j,N as Me,W as he,k as q,n as re,T as ue,ca as Le,b2 as Ie,an as Be,r as h,bv as Ne,v as Oe,U as Re,cb as $e,cc as te,b5 as Ye,S as _e,A as ze,a9 as He,c3 as Ue,av as Ve,a8 as Ke,aw as Xe,Z as xe}from"./entry.7ad1f3e0.js";import{F as Ge,E as Pe}from"./focus-trap.080802a8.js";import{u as We,U as ie}from"./event.d3cdae1c.js";import{u as se,h as ne}from"./el-button.7b6d1fa2.js";import{v as Fe}from"./ethers.677e76c4.js";const je=(...e)=>t=>{e.forEach(n=>{ve(n)?n(t):n.value=t})};var V=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(V||{});const G=e=>{const t=K(e)?e:[e],n=[];return t.forEach(s=>{var r;K(s)?n.push(...G(s)):Q(s)&&K(s.children)?n.push(...G(s.children)):(n.push(s),Q(s)&&((r=s.component)!=null&&r.subTree)&&n.push(...G(s.component.subTree)))}),n},qe=(e,t,n)=>{let s={offsetX:0,offsetY:0};const r=l=>{const c=l.clientX,v=l.clientY,{offsetX:f,offsetY:b}=s,m=e.value.getBoundingClientRect(),i=m.left,E=m.top,I=m.width,$=m.height,Y=document.documentElement.clientWidth,B=document.documentElement.clientHeight,_=-i+f,N=-E+b,k=Y-i-I+f,w=B-E-$+b,O=T=>{const a=Math.min(Math.max(f+T.clientX-c,_),k),C=Math.min(Math.max(b+T.clientY-v,N),w);s={offsetX:a,offsetY:C},e.value.style.transform=`translate(${P(a)}, ${P(C)})`},p=()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",p)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",p)},d=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",r)},u=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",r)};le(()=>{pe(()=>{n.value?d():u()})}),ye(()=>{u()})},Ze=(e,t={})=>{be(e)||We("[useLockscreen]","You need to pass a ref param to this function");const n=t.ns||Z("popup"),s=Ce(()=>n.bm("parent","hidden"));if(!ae||ee(document.body,s.value))return;let r=0,d=!1,u="0";const l=()=>{setTimeout(()=>{Se(document==null?void 0:document.body,s.value),d&&document&&(document.body.style.width=u)},200)};W(e,c=>{if(!c){l();return}d=!ee(document.body,s.value),d&&(u=document.body.style.width),r=Fe(n.namespace.value);const v=document.documentElement.clientHeight<document.body.scrollHeight,f=Ee(document.body,"overflowY");r>0&&(v||f==="scroll")&&d&&(document.body.style.width=`calc(100% - ${r}px)`),ge(document.body,s.value)}),Te(()=>l())},ce=e=>{if(!e)return{onClick:X,onMousedown:X,onMouseup:X};let t=!1,n=!1;return{onClick:u=>{t&&n&&e(u),t=n=!1},onMousedown:u=>{t=u.target===u.currentTarget},onMouseup:u=>{n=u.target===u.currentTarget}}},Je=J({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:F([String,Array,Object])},zIndex:{type:F([String,Number])}}),Qe={click:e=>e instanceof MouseEvent},eo="overlay";var oo=H({name:"ElOverlay",props:Je,emits:Qe,setup(e,{slots:t,emit:n}){const s=Z(eo),r=c=>{n("click",c)},{onClick:d,onMousedown:u,onMouseup:l}=ce(e.customMaskEvent?void 0:r);return()=>e.mask?z("div",{class:[s.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:d,onMousedown:u,onMouseup:l},[g(t,"default")],V.STYLE|V.CLASS|V.PROPS,["onClick","onMouseup","onMousedown"]):ke("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[g(t,"default")])}});const to=oo,de=Symbol("dialogInjectionKey"),fe=J({center:Boolean,alignCenter:Boolean,closeIcon:{type:we},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),so={close:()=>!0},no=["aria-label"],lo=["id"],ao=H({name:"ElDialogContent"}),ro=H({...ao,props:fe,emits:so,setup(e){const t=e,{t:n}=Ae(),{Close:s}=Le,{dialogRef:r,headerRef:d,bodyId:u,ns:l,style:c}=oe(de),{focusTrapRef:v}=oe(Ge),f=L(()=>[l.b(),l.is("fullscreen",t.fullscreen),l.is("draggable",t.draggable),l.is("align-center",t.alignCenter),{[l.m("center")]:t.center},t.customClass]),b=je(v,r),m=L(()=>t.draggable);return qe(r,d,m),(i,E)=>(R(),x("div",{ref:o(b),class:S(o(f)),style:re(o(c)),tabindex:"-1"},[U("header",{ref_key:"headerRef",ref:d,class:S(o(l).e("header"))},[g(i.$slots,"header",{},()=>[U("span",{role:"heading",class:S(o(l).e("title"))},De(i.title),3)]),i.showClose?(R(),x("button",{key:0,"aria-label":o(n)("el.dialog.close"),class:S(o(l).e("headerbtn")),type:"button",onClick:E[0]||(E[0]=I=>i.$emit("close"))},[z(o(he),{class:S(o(l).e("close"))},{default:M(()=>[(R(),j(Me(i.closeIcon||o(s))))]),_:1},8,["class"])],10,no)):q("v-if",!0)],2),U("div",{id:o(u),class:S(o(l).e("body"))},[g(i.$slots,"default")],10,lo),i.$slots.footer?(R(),x("footer",{key:0,class:S(o(l).e("footer"))},[g(i.$slots,"footer")],2)):q("v-if",!0)],6))}});var uo=ue(ro,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const io=J({...fe,appendToBody:Boolean,beforeClose:{type:F(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),co={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ie]:e=>Ie(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},fo=(e,t)=>{const s=Re().emit,{nextZIndex:r}=Be();let d="";const u=se(),l=se(),c=h(!1),v=h(!1),f=h(!1),b=h(e.zIndex||r());let m,i;const E=Ne("namespace",$e),I=L(()=>{const y={},D=`--${E.value}-dialog`;return e.fullscreen||(e.top&&(y[`${D}-margin-top`]=e.top),e.width&&(y[`${D}-width`]=P(e.width))),y}),$=L(()=>e.alignCenter?{display:"flex"}:{});function Y(){s("opened")}function B(){s("closed"),s(ie,!1),e.destroyOnClose&&(f.value=!1)}function _(){s("close")}function N(){i==null||i(),m==null||m(),e.openDelay&&e.openDelay>0?{stop:m}=te(()=>p(),e.openDelay):p()}function k(){m==null||m(),i==null||i(),e.closeDelay&&e.closeDelay>0?{stop:i}=te(()=>T(),e.closeDelay):T()}function w(){function y(D){D||(v.value=!0,c.value=!1)}e.beforeClose?e.beforeClose(y):k()}function O(){e.closeOnClickModal&&w()}function p(){ae&&(c.value=!0)}function T(){c.value=!1}function a(){s("openAutoFocus")}function C(){s("closeAutoFocus")}function A(y){var D;((D=y.detail)==null?void 0:D.focusReason)==="pointer"&&y.preventDefault()}e.lockScroll&&Ze(c);function me(){e.closeOnPressEscape&&w()}return W(()=>e.modelValue,y=>{y?(v.value=!1,N(),f.value=!0,b.value=e.zIndex?b.value++:r(),Oe(()=>{s("open"),t.value&&(t.value.scrollTop=0)})):c.value&&k()}),W(()=>e.fullscreen,y=>{t.value&&(y?(d=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=d)}),le(()=>{e.modelValue&&(c.value=!0,f.value=!0,N())}),{afterEnter:Y,afterLeave:B,beforeLeave:_,handleClose:w,onModalClick:O,close:k,doClose:T,onOpenAutoFocus:a,onCloseAutoFocus:C,onCloseRequested:me,onFocusoutPrevented:A,titleId:u,bodyId:l,closed:v,style:I,overlayDialogStyle:$,rendered:f,visible:c,zIndex:b}},mo=["aria-label","aria-labelledby","aria-describedby"],vo=H({name:"ElDialog",inheritAttrs:!1}),po=H({...vo,props:io,emits:co,setup(e,{expose:t}){const n=e,s=Ye();ne({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},L(()=>!!s.title)),ne({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},L(()=>!!n.customClass));const r=Z("dialog"),d=h(),u=h(),l=h(),{visible:c,titleId:v,bodyId:f,style:b,overlayDialogStyle:m,rendered:i,zIndex:E,afterEnter:I,afterLeave:$,beforeLeave:Y,handleClose:B,onModalClick:_,onOpenAutoFocus:N,onCloseAutoFocus:k,onCloseRequested:w,onFocusoutPrevented:O}=fo(n,d);_e(de,{dialogRef:d,headerRef:u,bodyId:f,ns:r,rendered:i,style:b});const p=ce(_),T=L(()=>n.draggable&&!n.fullscreen);return t({visible:c,dialogContentRef:l}),(a,C)=>(R(),j(Xe,{to:"body",disabled:!a.appendToBody},[z(Ke,{name:"dialog-fade",onAfterEnter:o(I),onAfterLeave:o($),onBeforeLeave:o(Y),persisted:""},{default:M(()=>[ze(z(o(to),{"custom-mask-event":"",mask:a.modal,"overlay-class":a.modalClass,"z-index":o(E)},{default:M(()=>[U("div",{role:"dialog","aria-modal":"true","aria-label":a.title||void 0,"aria-labelledby":a.title?void 0:o(v),"aria-describedby":o(f),class:S(`${o(r).namespace.value}-overlay-dialog`),style:re(o(m)),onClick:C[0]||(C[0]=(...A)=>o(p).onClick&&o(p).onClick(...A)),onMousedown:C[1]||(C[1]=(...A)=>o(p).onMousedown&&o(p).onMousedown(...A)),onMouseup:C[2]||(C[2]=(...A)=>o(p).onMouseup&&o(p).onMouseup(...A))},[z(o(Pe),{loop:"",trapped:o(c),"focus-start-el":"container",onFocusAfterTrapped:o(N),onFocusAfterReleased:o(k),onFocusoutPrevented:o(O),onReleaseRequested:o(w)},{default:M(()=>[o(i)?(R(),j(uo,He({key:0,ref_key:"dialogContentRef",ref:l},a.$attrs,{"custom-class":a.customClass,center:a.center,"align-center":a.alignCenter,"close-icon":a.closeIcon,draggable:o(T),fullscreen:a.fullscreen,"show-close":a.showClose,title:a.title,onClose:o(B)}),Ue({header:M(()=>[a.$slots.title?g(a.$slots,"title",{key:1}):g(a.$slots,"header",{key:0,close:o(B),titleId:o(v),titleClass:o(r).e("title")})]),default:M(()=>[g(a.$slots,"default")]),_:2},[a.$slots.footer?{name:"footer",fn:M(()=>[g(a.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):q("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,mo)]),_:3},8,["mask","overlay-class","z-index"]),[[Ve,o(c)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var yo=ue(po,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const So=xe(yo);export{So as E,to as a,Ze as b,ce as c,G as f,qe as u};
