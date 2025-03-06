import{c as N,a as l,E as L}from"./el-popper.6b4f971e.js";import{S,d as y,L as g,r as I,R as $,V as M,f as R,e as a,g as U,O as h,ah as c,U as V,b2 as j,s as b,Q as D,b7 as K,o as T,B as H,m as B,c as q,i as z,t as P,k as _,q as F,a9 as J,c7 as Y,Z as G}from"./entry.5f680153.js";const Q=y({inheritAttrs:!1});function W(t,r,n,o,d,p){return g(t.$slots,"default")}var Z=S(Q,[["render",W],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const X=y({name:"ElCollectionItem",inheritAttrs:!1});function x(t,r,n,o,d,p){return g(t.$slots,"default")}var ee=S(X,[["render",x],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const te="data-el-collection-item",oe=t=>{const r=`El${t}Collection`,n=`${r}Item`,o=Symbol(r),d=Symbol(n),p={...Z,name:r,setup(){const v=I(null),f=new Map;$(o,{itemMap:f,getItems:()=>{const i=a(v);if(!i)return[];const s=Array.from(i.querySelectorAll(`[${te}]`));return[...f.values()].sort((E,C)=>s.indexOf(E.ref)-s.indexOf(C.ref))},collectionRef:v})}},m={...ee,name:n,setup(v,{attrs:f}){const u=I(null),i=M(o,void 0);$(d,{collectionItemRef:u}),R(()=>{const s=a(u);s&&i.itemMap.set(s,{ref:s,...f})}),U(()=>{const s=a(u);i.itemMap.delete(s)})}};return{COLLECTION_INJECTION_KEY:o,COLLECTION_ITEM_INJECTION_KEY:d,ElCollection:p,ElCollectionItem:m}},w=h({trigger:N.trigger,effect:{...l.effect,default:"light"},type:{type:c(String)},placement:{type:c(String),default:"bottom"},popperOptions:{type:c(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:c([Number,String]),default:0},maxHeight:{type:c([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:c(Object)},teleported:l.teleported});h({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:V}});h({onKeydown:{type:c(Function)}});oe("Dropdown");const re=h({trigger:N.trigger,placement:w.placement,disabled:N.disabled,visible:l.visible,transition:l.transition,popperOptions:w.popperOptions,tabindex:w.tabindex,content:l.content,popperStyle:l.popperStyle,popperClass:l.popperClass,enterable:{...l.enterable,default:!0},effect:{...l.effect,default:"light"},teleported:l.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),ne={"update:visible":t=>j(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},se="onUpdate:visible",le=y({name:"ElPopover"}),ae=y({...le,props:re,emits:ne,setup(t,{expose:r,emit:n}){const o=t,d=b(()=>o[se]),p=D("popover"),m=I(),v=b(()=>{var e;return(e=a(m))==null?void 0:e.popperRef}),f=b(()=>[{width:K(o.width)},o.popperStyle]),u=b(()=>[p.b(),o.popperClass,{[p.m("plain")]:!!o.content}]),i=b(()=>o.transition===`${p.namespace.value}-fade-in-linear`),s=()=>{var e;(e=m.value)==null||e.hide()},O=()=>{n("before-enter")},E=()=>{n("before-leave")},C=()=>{n("after-enter")},A=()=>{n("update:visible",!1),n("after-leave")};return r({popperRef:v,hide:s}),(e,fe)=>(T(),H(a(L),J({ref_key:"tooltipRef",ref:m},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":a(u),"popper-style":a(f),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":a(i),"onUpdate:visible":a(d),onBeforeShow:O,onBeforeHide:E,onShow:C,onHide:A}),{content:B(()=>[e.title?(T(),q("div",{key:0,class:z(a(p).e("title")),role:"title"},P(e.title),3)):_("v-if",!0),g(e.$slots,"default",{},()=>[F(P(e.content),1)])]),default:B(()=>[e.$slots.reference?g(e.$slots,"reference",{key:0}):_("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var pe=S(ae,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const k=(t,r)=>{const n=r.arg||r.value,o=n==null?void 0:n.popperRef;o&&(o.triggerRef=t)};var ie={mounted(t,r){k(t,r)},updated(t,r){k(t,r)}};const ce="popover",de=Y(ie,ce),ve=G(pe,{directive:de});export{ve as E};
