import{_ as d}from"./plugin-vueexport-helper.c27b6911.js";import{c as r,b as t,t as n,o,p as _,h as i}from"./entry.9365d9fc.js";const p={data(){return{progress:70}},computed:{dashOffset(){const e=2*Math.PI*54;return e-this.progress/100*e}}},f=s=>(_("data-v-430fe82d"),s=s(),i(),s),h={class:"progress-ring"},l={width:"120",height:"120",viewBox:"0 0 120 120"},u=f(()=>t("circle",{class:"progress-ring-background",cx:"60",cy:"60",r:"54","stroke-width":"12"},null,-1)),g=["stroke-dashoffset"],k={class:"progress-text"};function m(s,e,v,x,c,a){return o(),r("div",h,[(o(),r("svg",l,[u,t("circle",{class:"progress-ring-bar",cx:"60",cy:"60",r:"54","stroke-width":"12","stroke-dasharray":"339.292","stroke-dashoffset":a.dashOffset,stroke:"#4db8ff",fill:"transparent",transform:"rotate(-90 60 60)"},null,8,g)])),t("div",k,n(c.progress)+"%",1)])}const I=d(p,[["render",m],["__scopeId","data-v-430fe82d"]]);export{I as default};