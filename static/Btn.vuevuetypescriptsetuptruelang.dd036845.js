import{E as f}from"./el-button.1c27df59.js";import{d as u,r as b,a as p,f as c,w as g,af as m,b as v,s as B,t as k,e as n,y}from"./entry.82295edf.js";const E=u({__name:"Btn",props:{title:{default:""},hoverTitle:{default:"Go"},btnLoading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},bg:{default:"#272C30"},hoverBg:{default:"#c79e70"}},emits:["clickHandle"],setup(s,{emit:d}){const e=s,o=b(!1),r=()=>{d("clickHandle")};return(l,t)=>{const i=f;return p(),c(i,{class:"w-full",color:e.bg,round:"",onMouseenter:t[0]||(t[0]=a=>o.value=!0),onMouseleave:t[1]||(t[1]=a=>o.value=!1),onClick:t[2]||(t[2]=a=>r()),loading:e.btnLoading,disabled:e.btnLoading||e.disabled,style:y({border:"none",backgroundColor:n(o)||e.btnLoading?e.hoverBg:e.bg})},{default:g(()=>[m(l.$slots,"default"),v("div",{class:B(["font-semibold text-base",l.disabled?"text-[#6E6E6E]":"text-white "])},k(n(o)?e.hoverTitle:e.title),3)]),_:3},8,["color","loading","disabled","style"])}}});export{E as _};
