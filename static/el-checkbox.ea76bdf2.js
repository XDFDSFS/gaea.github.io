import{bU as R,bV as X,bz as be,bv as ve,b1 as me,bB as fe,bW as he,aU as Q,a7 as A,bK as K,az as N,i as I,q as p,aR as z,an as J,n as Y,aC as Z,r as G,b7 as E,aa as ke,bH as M,d as L,aF as _,ak as D,a as C,f as j,w as ee,b as H,s as x,e as u,C as w,c as y,ab as $,bX as V,af as P,F as pe,A as ae,t as ne,x as T,av as le,ax as O,y as ge,ar as xe,as as Ce,Q as ye,a2 as Se,aI as Le,aX as te}from"./entry.82295edf.js";import{U as F,d as oe}from"./el-input.28fda3a4.js";import{c as Be,a as U,b as q,e as se}from"./use-form-item.9b482fd6.js";import{f as Ee,i as Ie}from"./isEqual.0f7785cd.js";import{p as we,o as $e}from"./commonjsHelpers.faf16459.js";function Ve(e){return e}function Fe(e,a,l){switch(l.length){case 0:return e.call(a);case 1:return e.call(a,l[0]);case 2:return e.call(a,l[0],l[1]);case 3:return e.call(a,l[0],l[1],l[2])}return e.apply(a,l)}var Ne=800,ze=16,Ge=Date.now;function Te(e){var a=0,l=0;return function(){var n=Ge(),s=ze-(n-l);if(l=n,s>0){if(++a>=Ne)return arguments[0]}else a=0;return e.apply(void 0,arguments)}}function De(e){return function(){return e}}var Pe=R?function(e,a){return R(e,"toString",{configurable:!0,enumerable:!1,value:De(a),writable:!0})}:Ve;const Oe=Pe;var Ue=Te(Oe);const Re=Ue;var W=Math.max;function Ae(e,a,l){return a=W(a===void 0?e.length-1:a,0),function(){for(var n=arguments,s=-1,d=W(n.length-a,0),c=Array(d);++s<d;)c[s]=n[a+s];s=-1;for(var t=Array(a+1);++s<a;)t[s]=n[s];return t[a]=l(c),Fe(e,this,t)}}function Ke(e){return Re(Ae(e,void 0,Ee),e+"")}function Me(e,a){return e!=null&&a in Object(e)}function He(e,a,l){a=X(a,e);for(var n=-1,s=a.length,d=!1;++n<s;){var c=be(a[n]);if(!(d=e!=null&&l(e,c)))break;e=e[c]}return d||++n!=s?d:(s=e==null?0:e.length,!!s&&we(s)&&ve(c,s)&&(me(e)||$e(e)))}function qe(e,a){return e!=null&&He(e,a,Me)}function We(e,a,l){for(var n=-1,s=a.length,d={};++n<s;){var c=a[n],t=fe(e,c);l(t,c)&&he(d,X(c,e),t)}return d}function Xe(e,a){return We(e,a,function(l,n){return qe(e,n)})}var Qe=Ke(function(e,a){return e==null?{}:Xe(e,a)});const Je=Qe,ue={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:Q,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},ie={[F]:e=>A(e)||K(e)||N(e),change:e=>A(e)||K(e)||N(e)},B=Symbol("checkboxGroupContextKey"),Ye=({model:e,isChecked:a})=>{const l=I(B,void 0),n=p(()=>{var d,c;const t=(d=l==null?void 0:l.max)==null?void 0:d.value,m=(c=l==null?void 0:l.min)==null?void 0:c.value;return!z(t)&&e.value.length>=t&&!a.value||!z(m)&&e.value.length<=m&&a.value});return{isDisabled:Be(p(()=>(l==null?void 0:l.disabled.value)||n.value)),isLimitDisabled:n}},Ze=(e,{model:a,isLimitExceeded:l,hasOwnLabel:n,isDisabled:s,isLabeledByFormItem:d})=>{const c=I(B,void 0),{formItem:t}=U(),{emit:m}=Z();function o(r){var b,v;return r===e.trueLabel||r===!0?(b=e.trueLabel)!=null?b:!0:(v=e.falseLabel)!=null?v:!1}function f(r,b){m("change",o(r),b)}function k(r){if(l.value)return;const b=r.target;m("change",o(b.checked),r)}async function S(r){l.value||!n.value&&!s.value&&d.value&&(r.composedPath().some(h=>h.tagName==="LABEL")||(a.value=o([!1,e.falseLabel].includes(a.value)),await Y(),f(a.value,r)))}const i=p(()=>(c==null?void 0:c.validateEvent)||e.validateEvent);return J(()=>e.modelValue,()=>{i.value&&(t==null||t.validate("change").catch(r=>oe()))}),{handleChange:k,onClickRoot:S}},_e=e=>{const a=G(!1),{emit:l}=Z(),n=I(B,void 0),s=p(()=>z(n)===!1),d=G(!1);return{model:p({get(){var t,m;return s.value?(t=n==null?void 0:n.modelValue)==null?void 0:t.value:(m=e.modelValue)!=null?m:a.value},set(t){var m,o;s.value&&E(t)?(d.value=((m=n==null?void 0:n.max)==null?void 0:m.value)!==void 0&&t.length>(n==null?void 0:n.max.value),d.value===!1&&((o=n==null?void 0:n.changeEvent)==null||o.call(n,t))):(l(F,t),a.value=t)}}),isGroup:s,isLimitExceeded:d}},je=(e,a,{model:l})=>{const n=I(B,void 0),s=G(!1),d=p(()=>{const o=l.value;return N(o)?o:E(o)?ke(e.label)?o.map(M).some(f=>Ie(f,e.label)):o.map(M).includes(e.label):o!=null?o===e.trueLabel:!!o}),c=q(p(()=>{var o;return(o=n==null?void 0:n.size)==null?void 0:o.value}),{prop:!0}),t=q(p(()=>{var o;return(o=n==null?void 0:n.size)==null?void 0:o.value})),m=p(()=>!!(a.default||e.label));return{checkboxButtonSize:c,isChecked:d,isFocused:s,checkboxSize:t,hasOwnLabel:m}},ea=(e,{model:a})=>{function l(){E(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0}e.checked&&l()},re=(e,a)=>{const{formItem:l}=U(),{model:n,isGroup:s,isLimitExceeded:d}=_e(e),{isFocused:c,isChecked:t,checkboxButtonSize:m,checkboxSize:o,hasOwnLabel:f}=je(e,a,{model:n}),{isDisabled:k}=Ye({model:n,isChecked:t}),{inputId:S,isLabeledByFormItem:i}=se(e,{formItemContext:l,disableIdGeneration:f,disableIdManagement:s}),{handleChange:r,onClickRoot:b}=Ze(e,{model:n,isLimitExceeded:d,hasOwnLabel:f,isDisabled:k,isLabeledByFormItem:i});return ea(e,{model:n}),{inputId:S,isLabeledByFormItem:i,isChecked:t,isDisabled:k,isFocused:c,checkboxButtonSize:m,checkboxSize:o,hasOwnLabel:f,model:n,handleChange:r,onClickRoot:b}},aa=["tabindex","role","aria-checked"],na=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],la=["id","aria-hidden","disabled","value","name","tabindex"],ta=L({name:"ElCheckbox"}),oa=L({...ta,props:ue,emits:ie,setup(e){const a=e,l=_(),{inputId:n,isLabeledByFormItem:s,isChecked:d,isDisabled:c,isFocused:t,checkboxSize:m,hasOwnLabel:o,model:f,handleChange:k,onClickRoot:S}=re(a,l),i=D("checkbox"),r=p(()=>[i.b(),i.m(m.value),i.is("disabled",c.value),i.is("bordered",a.border),i.is("checked",d.value)]),b=p(()=>[i.e("input"),i.is("disabled",c.value),i.is("checked",d.value),i.is("indeterminate",a.indeterminate),i.is("focus",t.value)]);return(v,h)=>(C(),j(le(!u(o)&&u(s)?"span":"label"),{class:x(u(r)),"aria-controls":v.indeterminate?v.controls:null,onClick:u(S)},{default:ee(()=>[H("span",{class:x(u(b)),tabindex:v.indeterminate?0:void 0,role:v.indeterminate?"checkbox":void 0,"aria-checked":v.indeterminate?"mixed":void 0},[v.trueLabel||v.falseLabel?w((C(),y("input",{key:0,id:u(n),"onUpdate:modelValue":h[0]||(h[0]=g=>$(f)?f.value=g:null),class:x(u(i).e("original")),type:"checkbox","aria-hidden":v.indeterminate?"true":"false",name:v.name,tabindex:v.tabindex,disabled:u(c),"true-value":v.trueLabel,"false-value":v.falseLabel,onChange:h[1]||(h[1]=(...g)=>u(k)&&u(k)(...g)),onFocus:h[2]||(h[2]=g=>t.value=!0),onBlur:h[3]||(h[3]=g=>t.value=!1)},null,42,na)),[[V,u(f)]]):w((C(),y("input",{key:1,id:u(n),"onUpdate:modelValue":h[4]||(h[4]=g=>$(f)?f.value=g:null),class:x(u(i).e("original")),type:"checkbox","aria-hidden":v.indeterminate?"true":"false",disabled:u(c),value:v.label,name:v.name,tabindex:v.tabindex,onChange:h[5]||(h[5]=(...g)=>u(k)&&u(k)(...g)),onFocus:h[6]||(h[6]=g=>t.value=!0),onBlur:h[7]||(h[7]=g=>t.value=!1)},null,42,la)),[[V,u(f)]]),H("span",{class:x(u(i).e("inner"))},null,2)],10,aa),u(o)?(C(),y("span",{key:0,class:x(u(i).e("label"))},[P(v.$slots,"default"),v.$slots.default?T("v-if",!0):(C(),y(pe,{key:0},[ae(ne(v.label),1)],64))],2)):T("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var sa=O(oa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const ua=["name","tabindex","disabled","true-value","false-value"],ia=["name","tabindex","disabled","value"],ra=L({name:"ElCheckboxButton"}),da=L({...ra,props:ue,emits:ie,setup(e){const a=e,l=_(),{isFocused:n,isChecked:s,isDisabled:d,checkboxButtonSize:c,model:t,handleChange:m}=re(a,l),o=I(B,void 0),f=D("checkbox"),k=p(()=>{var i,r,b,v;const h=(r=(i=o==null?void 0:o.fill)==null?void 0:i.value)!=null?r:"";return{backgroundColor:h,borderColor:h,color:(v=(b=o==null?void 0:o.textColor)==null?void 0:b.value)!=null?v:"",boxShadow:h?`-1px 0 0 0 ${h}`:void 0}}),S=p(()=>[f.b("button"),f.bm("button",c.value),f.is("disabled",d.value),f.is("checked",s.value),f.is("focus",n.value)]);return(i,r)=>(C(),y("label",{class:x(u(S))},[i.trueLabel||i.falseLabel?w((C(),y("input",{key:0,"onUpdate:modelValue":r[0]||(r[0]=b=>$(t)?t.value=b:null),class:x(u(f).be("button","original")),type:"checkbox",name:i.name,tabindex:i.tabindex,disabled:u(d),"true-value":i.trueLabel,"false-value":i.falseLabel,onChange:r[1]||(r[1]=(...b)=>u(m)&&u(m)(...b)),onFocus:r[2]||(r[2]=b=>n.value=!0),onBlur:r[3]||(r[3]=b=>n.value=!1)},null,42,ua)),[[V,u(t)]]):w((C(),y("input",{key:1,"onUpdate:modelValue":r[4]||(r[4]=b=>$(t)?t.value=b:null),class:x(u(f).be("button","original")),type:"checkbox",name:i.name,tabindex:i.tabindex,disabled:u(d),value:i.label,onChange:r[5]||(r[5]=(...b)=>u(m)&&u(m)(...b)),onFocus:r[6]||(r[6]=b=>n.value=!0),onBlur:r[7]||(r[7]=b=>n.value=!1)},null,42,ia)),[[V,u(t)]]),i.$slots.default||i.label?(C(),y("span",{key:2,class:x(u(f).be("button","inner")),style:ge(u(s)?u(k):void 0)},[P(i.$slots,"default",{},()=>[ae(ne(i.label),1)])],6)):T("v-if",!0)],2))}});var de=O(da,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const ca=xe({modelValue:{type:Ce(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Q,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),ba={[F]:e=>E(e),change:e=>E(e)},va=L({name:"ElCheckboxGroup"}),ma=L({...va,props:ca,emits:ba,setup(e,{emit:a}){const l=e,n=D("checkbox"),{formItem:s}=U(),{inputId:d,isLabeledByFormItem:c}=se(l,{formItemContext:s}),t=async o=>{a(F,o),await Y(),a("change",o)},m=p({get(){return l.modelValue},set(o){t(o)}});return ye(B,{...Je(Se(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:m,changeEvent:t}),J(()=>l.modelValue,()=>{l.validateEvent&&(s==null||s.validate("change").catch(o=>oe()))}),(o,f)=>{var k;return C(),j(le(o.tag),{id:u(d),class:x(u(n).b("group")),role:"group","aria-label":u(c)?void 0:o.label||"checkbox-group","aria-labelledby":u(c)?(k=u(s))==null?void 0:k.labelId:void 0},{default:ee(()=>[P(o.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ce=O(ma,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const xa=Le(sa,{CheckboxButton:de,CheckboxGroup:ce});te(de);const Ca=te(ce);export{xa as E,Ca as a,qe as h,Ve as i,Ae as o,Re as s};