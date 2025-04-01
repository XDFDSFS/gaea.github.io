import{c as N,a as l,E as L}from"./el-popper.da74467e.js";import{at as S,d as y,ar as g,r as I,Z as $,G as M,f as R,e as a,g as U,a7 as h,a8 as c,bf as j,b3 as D,v as b,af as V,b8 as K,o as T,C as H,m as B,c as q,i as z,t as P,k as _,q as F,X as G,cg as J,ax as Y}from"./entry.f2efeee4.js";const W=y({inheritAttrs:!1});function X(t,r,n,o,f,p){return g(t.$slots,"default")}var Z=S(W,[["render",X],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const Q=y({name:"ElCollectionItem",inheritAttrs:!1});function x(t,r,n,o,f,p){return g(t.$slots,"default")}var ee=S(Q,[["render",x],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const te="data-el-collection-item",oe=t=>{const r=`El${t}Collection`,n=`${r}Item`,o=Symbol(r),f=Symbol(n),p={...Z,name:r,setup(){const v=I(null),d=new Map;$(o,{itemMap:d,getItems:()=>{const i=a(v);if(!i)return[];const s=Array.from(i.querySelectorAll(`[${te}]`));return[...d.values()].sort((C,E)=>s.indexOf(C.ref)-s.indexOf(E.ref))},collectionRef:v})}},m={...ee,name:n,setup(v,{attrs:d}){const u=I(null),i=M(o,void 0);$(f,{collectionItemRef:u}),R(()=>{const s=a(u);s&&i.itemMap.set(s,{ref:s,...d})}),U(()=>{const s=a(u);i.itemMap.delete(s)})}};return{COLLECTION_INJECTION_KEY:o,COLLECTION_ITEM_INJECTION_KEY:f,ElCollection:p,ElCollectionItem:m}},w=h({trigger:N.trigger,effect:{...l.effect,default:"light"},type:{type:c(String)},placement:{type:c(String),default:"bottom"},popperOptions:{type:c(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:c([Number,String]),default:0},maxHeight:{type:c([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:c(Object)},teleported:l.teleported});h({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:j}});h({onKeydown:{type:c(Function)}});oe("Dropdown");const re=h({trigger:N.trigger,placement:w.placement,disabled:N.disabled,visible:l.visible,transition:l.transition,popperOptions:w.popperOptions,tabindex:w.tabindex,content:l.content,popperStyle:l.popperStyle,popperClass:l.popperClass,enterable:{...l.enterable,default:!0},effect:{...l.effect,default:"light"},teleported:l.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),ne={"update:visible":t=>D(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},se="onUpdate:visible",le=y({name:"ElPopover"}),ae=y({...le,props:re,emits:ne,setup(t,{expose:r,emit:n}){const o=t,f=b(()=>o[se]),p=V("popover"),m=I(),v=b(()=>{var e;return(e=a(m))==null?void 0:e.popperRef}),d=b(()=>[{width:K(o.width)},o.popperStyle]),u=b(()=>[p.b(),o.popperClass,{[p.m("plain")]:!!o.content}]),i=b(()=>o.transition===`${p.namespace.value}-fade-in-linear`),s=()=>{var e;(e=m.value)==null||e.hide()},O=()=>{n("before-enter")},C=()=>{n("before-leave")},E=()=>{n("after-enter")},A=()=>{n("update:visible",!1),n("after-leave")};return r({popperRef:v,hide:s}),(e,de)=>(T(),H(a(L),G({ref_key:"tooltipRef",ref:m},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":a(u),"popper-style":a(d),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":a(i),"onUpdate:visible":a(f),onBeforeShow:O,onBeforeHide:C,onShow:E,onHide:A}),{content:B(()=>[e.title?(T(),q("div",{key:0,class:z(a(p).e("title")),role:"title"},P(e.title),3)):_("v-if",!0),g(e.$slots,"default",{},()=>[F(P(e.content),1)])]),default:B(()=>[e.$slots.reference?g(e.$slots,"reference",{key:0}):_("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var pe=S(ae,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const k=(t,r)=>{const n=r.arg||r.value,o=n==null?void 0:n.popperRef;o&&(o.triggerRef=t)};var ie={mounted(t,r){k(t,r)},updated(t,r){k(t,r)}};const ce="popover",fe=J(ie,ce),ve=Y(pe,{directive:fe});export{ve as E};
