import{a6 as Ie,q as f,bZ as De,aB as ze,r as T,bt as X,am as q,bR as Ke,bJ as xe,aq as je,aT as We,ar as te,as as we,bO as Ue,a7 as ae,d as ke,bj as Ye,aE as Xe,aj as Se,bH as qe,c9 as Ze,ca as Ge,b8 as Je,n as V,o as Qe,aV as et,C as tt,a4 as at,a as m,c as S,x as y,F as oe,s as b,e as t,af as W,b as F,f as C,w as A,au as U,av as H,O as ne,g as ot,bi as nt,aL as st,ao as lt,t as Y,y as rt,aw as it,aa as Ee,aH as ut}from"./entry.fd3f1e90.js";import{a as ct,e as dt,b as pt,c as ft}from"./use-form-item.dc2e6d51.js";const vt=()=>Ie&&/firefox/i.test(window.navigator.userAgent);function mt(o){return o==null}class yt extends Error{constructor(c){super(c),this.name="ElementPlusError"}}function Ht(o,c){throw new yt(`[${o}] ${c}`)}function Mt(o,c){}const se="update:modelValue",Ot="change",ht=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),bt=["class","style"],gt=/^on[A-Z]/,xt=(o={})=>{const{excludeListeners:c=!1,excludeKeys:i}=o,a=f(()=>((i==null?void 0:i.value)||[]).concat(bt)),r=ze();return r?f(()=>{var l;return De(Object.entries((l=r.proxy)==null?void 0:l.$attrs).filter(([u])=>!a.value.includes(u)&&!(c&&gt.test(u))))}):f(()=>({}))};function wt(o){const c=T();function i(){if(o.value==null)return;const{selectionStart:r,selectionEnd:l,value:u}=o.value;if(r==null||l==null)return;const x=u.slice(0,Math.max(0,r)),d=u.slice(Math.max(0,l));c.value={selectionStart:r,selectionEnd:l,value:u,beforeTxt:x,afterTxt:d}}function a(){if(o.value==null||c.value==null)return;const{value:r}=o.value,{beforeTxt:l,afterTxt:u,selectionStart:x}=c.value;if(l==null||u==null||x==null)return;let d=r.length;if(r.endsWith(u))d=r.length-u.length;else if(r.startsWith(l))d=l.length;else{const g=l[x-1],v=r.indexOf(g,x-1);v!==-1&&(d=v+1)}o.value.setSelectionRange(d,d)}return[i,a]}function St(o,{afterFocus:c,afterBlur:i}={}){const a=ze(),{emit:r}=a,l=X(),u=T(!1),x=v=>{u.value||(u.value=!0,r("focus",v),c==null||c())},d=v=>{var p;v.relatedTarget&&((p=l.value)!=null&&p.contains(v.relatedTarget))||(u.value=!1,r("blur",v),i==null||i())},g=()=>{var v;(v=o.value)==null||v.focus()};return q(l,v=>{v&&v.setAttribute("tabindex","-1")}),Ke(l,"click",g),{wrapperRef:l,isFocused:u,handleFocus:x,handleBlur:d}}let w;const Et=`
  height:0 !important;
  visibility:hidden !important;
  ${vt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Ct=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function It(o){const c=window.getComputedStyle(o),i=c.getPropertyValue("box-sizing"),a=Number.parseFloat(c.getPropertyValue("padding-bottom"))+Number.parseFloat(c.getPropertyValue("padding-top")),r=Number.parseFloat(c.getPropertyValue("border-bottom-width"))+Number.parseFloat(c.getPropertyValue("border-top-width"));return{contextStyle:Ct.map(u=>`${u}:${c.getPropertyValue(u)}`).join(";"),paddingSize:a,borderSize:r,boxSizing:i}}function Ce(o,c=1,i){var a;w||(w=document.createElement("textarea"),document.body.appendChild(w));const{paddingSize:r,borderSize:l,boxSizing:u,contextStyle:x}=It(o);w.setAttribute("style",`${x};${Et}`),w.value=o.value||o.placeholder||"";let d=w.scrollHeight;const g={};u==="border-box"?d=d+l:u==="content-box"&&(d=d-r),w.value="";const v=w.scrollHeight-r;if(xe(c)){let p=v*c;u==="border-box"&&(p=p+r+l),d=Math.max(p,d),g.minHeight=`${p}px`}if(xe(i)){let p=v*i;u==="border-box"&&(p=p+r+l),d=Math.min(p,d)}return g.height=`${d}px`,(a=w.parentNode)==null||a.removeChild(w),w=void 0,g}const zt=je({id:{type:String,default:void 0},size:We,disabled:Boolean,modelValue:{type:te([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:te([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:we},prefixIcon:{type:we},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:te([Object,Array,String]),default:()=>Ue({})}}),kt={[se]:o=>ae(o),input:o=>ae(o),change:o=>ae(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Pt=["role"],Vt=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],Ft=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],Tt=ke({name:"ElInput",inheritAttrs:!1}),Nt=ke({...Tt,props:zt,emits:kt,setup(o,{expose:c,emit:i}){const a=o,r=Ye(),l=Xe(),u=f(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),x=f(()=>[a.type==="textarea"?re.b():s.b(),s.m(Pe.value),s.is("disabled",z.value),s.is("exceed",Ne.value),{[s.b("group")]:l.prepend||l.append,[s.bm("group","append")]:l.append,[s.bm("group","prepend")]:l.prepend,[s.m("prefix")]:l.prefix||a.prefixIcon,[s.m("suffix")]:l.suffix||a.suffixIcon||a.clearable||a.showPassword,[s.bm("suffix","password-clear")]:K.value&&J.value},r.class]),d=f(()=>[s.e("wrapper"),s.is("focus",G.value)]),g=xt({excludeKeys:f(()=>Object.keys(u.value))}),{form:v,formItem:p}=ct(),{inputId:le}=dt(a,{formItemContext:p}),Pe=pt(),z=ft(),s=Se("input"),re=Se("textarea"),M=X(),E=X(),Z=T(!1),N=T(!1),O=T(!1),ie=T(),L=X(a.inputStyle),k=f(()=>M.value||E.value),{wrapperRef:Ve,isFocused:G,handleFocus:_,handleBlur:D}=St(k,{afterBlur(){var e;a.validateEvent&&((e=p==null?void 0:p.validate)==null||e.call(p,"blur").catch(n=>void 0))}}),ue=f(()=>{var e;return(e=v==null?void 0:v.statusIcon)!=null?e:!1}),R=f(()=>(p==null?void 0:p.validateState)||""),ce=f(()=>R.value&&qe[R.value]),Fe=f(()=>O.value?Ze:Ge),Te=f(()=>[r.style,a.inputStyle]),de=f(()=>[a.inputStyle,L.value,{resize:a.resize}]),I=f(()=>mt(a.modelValue)?"":String(a.modelValue)),K=f(()=>a.clearable&&!z.value&&!a.readonly&&!!I.value&&(G.value||Z.value)),J=f(()=>a.showPassword&&!z.value&&!a.readonly&&!!I.value&&(!!I.value||G.value)),P=f(()=>a.showWordLimit&&!!g.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),Q=f(()=>I.value.length),Ne=f(()=>!!P.value&&Q.value>Number(g.value.maxlength)),Re=f(()=>!!l.suffix||!!a.suffixIcon||K.value||a.showPassword||P.value||!!R.value&&ue.value),[$e,Be]=wt(M);Je(E,e=>{if(Ae(),!P.value||a.resize!=="both")return;const n=e[0],{width:h}=n.contentRect;ie.value={right:`calc(100% - ${h+15+6}px)`}});const $=()=>{const{type:e,autosize:n}=a;if(!(!Ie||e!=="textarea"||!E.value))if(n){const h=Ee(n)?n.minRows:void 0,j=Ee(n)?n.maxRows:void 0,ge=Ce(E.value,h,j);L.value={overflowY:"hidden",...ge},V(()=>{E.value.offsetHeight,L.value=ge})}else L.value={minHeight:Ce(E.value).minHeight}},Ae=(e=>{let n=!1;return()=>{var h;if(n||!a.autosize)return;((h=E.value)==null?void 0:h.offsetParent)===null||(e(),n=!0)}})($),B=()=>{const e=k.value,n=a.formatter?a.formatter(I.value):I.value;!e||e.value===n||(e.value=n)},ee=async e=>{$e();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n),!N.value){if(n===I.value){B();return}i(se,n),i("input",n),await V(),B(),Be()}},pe=e=>{i("change",e.target.value)},fe=e=>{i("compositionstart",e),N.value=!0},ve=e=>{var n;i("compositionupdate",e);const h=(n=e.target)==null?void 0:n.value,j=h[h.length-1]||"";N.value=!ht(j)},me=e=>{i("compositionend",e),N.value&&(N.value=!1,ee(e))},He=()=>{O.value=!O.value,ye()},ye=async()=>{var e;await V(),(e=k.value)==null||e.focus()},Me=()=>{var e;return(e=k.value)==null?void 0:e.blur()},Oe=e=>{Z.value=!1,i("mouseleave",e)},Le=e=>{Z.value=!0,i("mouseenter",e)},he=e=>{i("keydown",e)},_e=()=>{var e;(e=k.value)==null||e.select()},be=()=>{i(se,""),i("change",""),i("clear"),i("input","")};return q(()=>a.modelValue,()=>{var e;V(()=>$()),a.validateEvent&&((e=p==null?void 0:p.validate)==null||e.call(p,"change").catch(n=>void 0))}),q(I,()=>B()),q(()=>a.type,async()=>{await V(),B(),$()}),Qe(()=>{!a.formatter&&a.parser,B(),V($)}),c({input:M,textarea:E,ref:k,textareaStyle:de,autosize:et(a,"autosize"),focus:ye,blur:Me,select:_e,clear:be,resizeTextarea:$}),(e,n)=>tt((m(),S("div",ne(t(u),{class:t(x),style:t(Te),role:e.containerRole,onMouseenter:Le,onMouseleave:Oe}),[y(" input "),e.type!=="textarea"?(m(),S(oe,{key:0},[y(" prepend slot "),e.$slots.prepend?(m(),S("div",{key:0,class:b(t(s).be("group","prepend"))},[W(e.$slots,"prepend")],2)):y("v-if",!0),F("div",{ref_key:"wrapperRef",ref:Ve,class:b(t(d))},[y(" prefix slot "),e.$slots.prefix||e.prefixIcon?(m(),S("span",{key:0,class:b(t(s).e("prefix"))},[F("span",{class:b(t(s).e("prefix-inner"))},[W(e.$slots,"prefix"),e.prefixIcon?(m(),C(t(H),{key:0,class:b(t(s).e("icon"))},{default:A(()=>[(m(),C(U(e.prefixIcon)))]),_:1},8,["class"])):y("v-if",!0)],2)],2)):y("v-if",!0),F("input",ne({id:t(le),ref_key:"input",ref:M,class:t(s).e("inner")},t(g),{type:e.showPassword?O.value?"text":"password":e.type,disabled:t(z),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,onCompositionstart:fe,onCompositionupdate:ve,onCompositionend:me,onInput:ee,onFocus:n[0]||(n[0]=(...h)=>t(_)&&t(_)(...h)),onBlur:n[1]||(n[1]=(...h)=>t(D)&&t(D)(...h)),onChange:pe,onKeydown:he}),null,16,Vt),y(" suffix slot "),t(Re)?(m(),S("span",{key:1,class:b(t(s).e("suffix"))},[F("span",{class:b(t(s).e("suffix-inner"))},[!t(K)||!t(J)||!t(P)?(m(),S(oe,{key:0},[W(e.$slots,"suffix"),e.suffixIcon?(m(),C(t(H),{key:0,class:b(t(s).e("icon"))},{default:A(()=>[(m(),C(U(e.suffixIcon)))]),_:1},8,["class"])):y("v-if",!0)],64)):y("v-if",!0),t(K)?(m(),C(t(H),{key:1,class:b([t(s).e("icon"),t(s).e("clear")]),onMousedown:st(t(lt),["prevent"]),onClick:be},{default:A(()=>[ot(t(nt))]),_:1},8,["class","onMousedown"])):y("v-if",!0),t(J)?(m(),C(t(H),{key:2,class:b([t(s).e("icon"),t(s).e("password")]),onClick:He},{default:A(()=>[(m(),C(U(t(Fe))))]),_:1},8,["class"])):y("v-if",!0),t(P)?(m(),S("span",{key:3,class:b(t(s).e("count"))},[F("span",{class:b(t(s).e("count-inner"))},Y(t(Q))+" / "+Y(t(g).maxlength),3)],2)):y("v-if",!0),t(R)&&t(ce)&&t(ue)?(m(),C(t(H),{key:4,class:b([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(R)==="validating")])},{default:A(()=>[(m(),C(U(t(ce))))]),_:1},8,["class"])):y("v-if",!0)],2)],2)):y("v-if",!0)],2),y(" append slot "),e.$slots.append?(m(),S("div",{key:1,class:b(t(s).be("group","append"))},[W(e.$slots,"append")],2)):y("v-if",!0)],64)):(m(),S(oe,{key:1},[y(" textarea "),F("textarea",ne({id:t(le),ref_key:"textarea",ref:E,class:t(re).e("inner")},t(g),{tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(de),"aria-label":e.label,placeholder:e.placeholder,form:a.form,onCompositionstart:fe,onCompositionupdate:ve,onCompositionend:me,onInput:ee,onFocus:n[2]||(n[2]=(...h)=>t(_)&&t(_)(...h)),onBlur:n[3]||(n[3]=(...h)=>t(D)&&t(D)(...h)),onChange:pe,onKeydown:he}),null,16,Ft),t(P)?(m(),S("span",{key:0,style:rt(ie.value),class:b(t(s).e("count"))},Y(t(Q))+" / "+Y(t(g).maxlength),7)):y("v-if",!0)],64))],16,Pt)),[[at,e.type!=="hidden"]])}});var Rt=it(Nt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Lt=ut(Rt);export{Ot as C,Lt as E,se as U,mt as a,Mt as d,ht as i,Ht as t,xt as u};
