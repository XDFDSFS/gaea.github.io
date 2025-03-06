import{f as O,af as $,g as R,ay as X,r as _,S as te,d as ne,R as se,w as C,e as T,L as oe,v as M,aC as ce}from"./entry.5ef69f17.js";import{i as re}from"./event.23bb5b2b.js";let p=[];const j=e=>{const n=e;n.key===X.esc&&p.forEach(s=>s(n))},ae=e=>{O(()=>{p.length===0&&document.addEventListener("keydown",j),$&&p.push(e)}),R(()=>{p=p.filter(n=>n!==e),p.length===0&&$&&document.removeEventListener("keydown",j)})},h="focus-trap.focus-after-trapped",g="focus-trap.focus-after-released",ue="focus-trap.focusout-prevented",q={cancelable:!0,bubbles:!1},ie={cancelable:!0,bubbles:!1},W="focusAfterTrapped",J="focusAfterReleased",fe=Symbol("elFocusTrap"),k=_(),P=_(0),N=_(0);let F=0;const Z=e=>{const n=[],s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0||o===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)n.push(s.currentNode);return n},Y=(e,n)=>{for(const s of e)if(!de(s,n))return s},de=(e,n)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},le=e=>{const n=Z(e),s=Y(n,e),o=Y(n.reverse(),e);return[s,o]},ve=e=>e instanceof HTMLInputElement&&"select"in e,l=(e,n)=>{if(e&&e.focus){const s=document.activeElement;e.focus({preventScroll:!0}),N.value=window.performance.now(),e!==s&&ve(e)&&n&&e.select()}};function z(e,n){const s=[...e],o=e.indexOf(n);return o!==-1&&s.splice(o,1),s}const pe=()=>{let e=[];return{push:o=>{const r=e[0];r&&o!==r&&r.pause(),e=z(e,o),e.unshift(o)},remove:o=>{var r,f;e=z(e,o),(f=(r=e[0])==null?void 0:r.resume)==null||f.call(r)}}},Ee=(e,n=!1)=>{const s=document.activeElement;for(const o of e)if(l(o,n),document.activeElement!==s)return},G=pe(),me=()=>P.value>N.value,b=()=>{k.value="pointer",P.value=window.performance.now()},Q=()=>{k.value="keyboard",P.value=window.performance.now()},Te=()=>(O(()=>{F===0&&(document.addEventListener("mousedown",b),document.addEventListener("touchstart",b),document.addEventListener("keydown",Q)),F++}),R(()=>{F--,F<=0&&(document.removeEventListener("mousedown",b),document.removeEventListener("touchstart",b),document.removeEventListener("keydown",Q))}),{focusReason:k,lastUserFocusTimestamp:P,lastAutomatedFocusTimestamp:N}),y=e=>new CustomEvent(ue,{...ie,detail:e}),Fe=ne({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[W,J,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:n}){const s=_();let o,r;const{focusReason:f}=Te();ae(t=>{e.trapped&&!v.paused&&n("release-requested",t)});const v={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},E=t=>{if(!e.loop&&!e.trapped||v.paused)return;const{key:c,altKey:a,ctrlKey:u,metaKey:i,currentTarget:H,shiftKey:V}=t,{loop:B}=e,ee=c===X.tab&&!a&&!u&&!i,m=document.activeElement;if(ee&&m){const S=H,[L,w]=le(S);if(L&&w){if(!V&&m===w){const d=y({focusReason:f.value});n("focusout-prevented",d),d.defaultPrevented||(t.preventDefault(),B&&l(L,!0))}else if(V&&[L,S].includes(m)){const d=y({focusReason:f.value});n("focusout-prevented",d),d.defaultPrevented||(t.preventDefault(),B&&l(w,!0))}}else if(m===S){const d=y({focusReason:f.value});n("focusout-prevented",d),d.defaultPrevented||t.preventDefault()}}};se(fe,{focusTrapRef:s,onKeydown:E}),C(()=>e.focusTrapEl,t=>{t&&(s.value=t)},{immediate:!0}),C([s],([t],[c])=>{t&&(t.addEventListener("keydown",E),t.addEventListener("focusin",U),t.addEventListener("focusout",K)),c&&(c.removeEventListener("keydown",E),c.removeEventListener("focusin",U),c.removeEventListener("focusout",K))});const I=t=>{n(W,t)},A=t=>n(J,t),U=t=>{const c=T(s);if(!c)return;const a=t.target,u=t.relatedTarget,i=a&&c.contains(a);e.trapped||u&&c.contains(u)||(o=u),i&&n("focusin",t),!v.paused&&e.trapped&&(i?r=a:l(r,!0))},K=t=>{const c=T(s);if(!(v.paused||!c))if(e.trapped){const a=t.relatedTarget;!re(a)&&!c.contains(a)&&setTimeout(()=>{if(!v.paused&&e.trapped){const u=y({focusReason:f.value});n("focusout-prevented",u),u.defaultPrevented||l(r,!0)}},0)}else{const a=t.target;a&&c.contains(a)||n("focusout",t)}};async function D(){await M();const t=T(s);if(t){G.push(v);const c=t.contains(document.activeElement)?o:document.activeElement;if(o=c,!t.contains(c)){const u=new Event(h,q);t.addEventListener(h,I),t.dispatchEvent(u),u.defaultPrevented||M(()=>{let i=e.focusStartEl;ce(i)||(l(i),document.activeElement!==i&&(i="first")),i==="first"&&Ee(Z(t),!0),(document.activeElement===c||i==="container")&&l(t)})}}}function x(){const t=T(s);if(t){t.removeEventListener(h,I);const c=new CustomEvent(g,{...q,detail:{focusReason:f.value}});t.addEventListener(g,A),t.dispatchEvent(c),!c.defaultPrevented&&(f.value=="keyboard"||!me()||t.contains(document.activeElement))&&l(o??document.body),t.removeEventListener(g,A),G.remove(v)}}return O(()=>{e.trapped&&D(),C(()=>e.trapped,t=>{t?D():x()})}),R(()=>{e.trapped&&x()}),{onKeydown:E}}});function be(e,n,s,o,r,f){return oe(e.$slots,"default",{handleKeydown:e.onKeydown})}var Se=te(Fe,[["render",be],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{Se as E,fe as F};
