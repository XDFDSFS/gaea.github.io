import{a as B,_ as I}from"./logo.9b8a3722.js";import{E as N}from"./el-input.85b7f9c7.js";import{d as V,E as q}from"./el-checkbox.5b9a554d.js";import{C as v,E as S,a as T}from"./index.dc30873d.js";import{_ as U}from"./client-only.8170ed19.js";import{I as Y,z as f,bn as $,a1 as g,N as u,W as m,X as c,P as i,R as s,az as b,x as l,Y as D,ay as H,Q as M,ba as _,bA as O,bv as G,O as J}from"./entry.ecabc15b.js";import{c as Q}from"./passwords.0c085804.js";import{v as W}from"./el-loading.f1daef84.js";import{c as X}from"./dict.d5728e61.js";import{a as Z,b as K,_ as ee}from"./bg-kuang.6be283f6.js";const se={class:"w-full h-screen pb-5"},te=s("img",{src:Z,class:"w-full h-full fixed inset-0 object-cover -z-10"},null,-1),oe={class:"w-full h-screen flex flex-col overflow-auto"},ae=s("div",{class:"w-full h-12 text-base text-white font-normal px-5 flex items-center justify-between"},[s("img",{src:B,alt:"",class:"w-52 h-16 mt-4"})],-1),re={class:"w-full flex-1 flex justify-end overflow-auto pr-32"},le={class:"w-[480px] h-[680px] relative sm:scale-50 md:scale-[0.7] xl:scale-[0.8] 2xl:scale-100"},ne=s("img",{src:K,class:"w-full h-full absolute top-0 left-0 -z-10 object-left-top"},null,-1),ce={class:"w-full h-full"},ie={class:"w-full h-[80px] mt-32 flex flex-col items-center justify-center space-y-1"},de=s("div",{class:"text-3xl font-normal text-[#FFE099]"},"Let's get start ",-1),ue={class:"flex items-center space-x-2"},_e=s("span",{class:"text-sm font-normal text-[#C6BFAA]"},"Reset your password",-1),pe={class:"text-sm font-normal text-[#5CF3FF] cursor-pointer"},fe={class:"w-full flex-1 px-12 mt-8"},me=s("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1),we={class:"set_checkbox_sty"},he=s("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1),xe=s("img",{src:ee,class:"w-full h-full object-cover"},null,-1),ve={"element-loading-background":"transparent",class:"text-base font-normal text-[#4E4A3C] absolute z-10"},Ie=Y({__name:"reset",emits:["update:closeDialog"],setup(ge,{emit:be}){const w=f(),d=f(!1),a=f(X()),p=$(),o=g({password_new:"",confirm_Password:"",checkList:[]}),k=g({password_new:[{validator:(r,e,t)=>{e===""?t(new Error("Please enter a valide password")):(o.checkList.length!==4&&t(new Error("Your password does not match")),t())},trigger:"blur"}],confirm_Password:[{validator:(r,e,t)=>{e===""?t(new Error("Please input the password again")):e!==o.password_new?t(new Error("Your password does not match")):t()},trigger:"blur"}]}),E=()=>{const{password_new:r}=o,e=Q(r);o.checkList=[],e.lowercase&&o.checkList.push(a==null?void 0:a.value[0]),e.uppercase&&o.checkList.push(a==null?void 0:a.value[1]),e.special&&o.checkList.push(a==null?void 0:a.value[2]),e.characters&&o.checkList.push(a==null?void 0:a.value[3])},y=r=>/^[A-Za-z0-9_-]+$/.test(r),P=r=>{const e=r.split(".");if(console.log(e,"parts"),e.length!==3)return!1;for(const t of e)if(!y(t))return!1;return!0},F=async r=>{r&&await r.validate(async e=>{if(e)try{if(!p.query.token)return _.warning("Invalid link");if(!P(p.query.token))return _.warning("Parameter error");d.value=!0;const t=await O({token:p.query.token||"",password_new:v.SHA256(o.password_new).toString(v.enc.Hex)});d.value=!1,t.code===200?(_.success(t.msg),G("/login")):_.error(t.msg)}catch(t){console.log(t),d.value=!1}})};return(r,e)=>{const t=I,h=N,C=q,L=V,x=S,R=T,j=U,z=W;return u(),m("div",se,[c(j,null,{default:i(()=>[te,s("div",oe,[ae,s("div",re,[s("div",le,[ne,s("div",ce,[s("div",ie,[de,s("div",ue,[_e,s("span",pe,[c(t,{to:"/login"},{default:i(()=>[b("Log in")]),_:1})])])]),s("div",fe,[c(R,{model:l(o),class:"space-y-8",ref_key:"ruleFormRef",ref:w,rules:l(k),"label-position":"top","hide-required-asterisk":""},{default:i(()=>[c(x,{label:"Password",prop:"password_new",onInput:E},{default:i(()=>[c(h,{placeholder:"Enter your password",type:"password",modelValue:l(o).password_new,"onUpdate:modelValue":e[0]||(e[0]=n=>l(o).password_new=n),"show-password":"",oncopy:"return false"},{prefix:i(()=>[me]),_:1},8,["modelValue"]),s("div",we,[c(L,{modelValue:l(o).checkList,"onUpdate:modelValue":e[1]||(e[1]=n=>l(o).checkList=n),class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6"},{default:i(()=>[(u(!0),m(D,null,H(l(a),(n,A)=>(u(),J(C,{label:n,value:n,key:A},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),c(x,{label:"Confirm Password",prop:"confirm_Password"},{default:i(()=>[c(h,{placeholder:"Enter your password",type:"password",modelValue:l(o).confirm_Password,"onUpdate:modelValue":e[2]||(e[2]=n=>l(o).confirm_Password=n),"show-password":"",oncopy:"return false"},{prefix:i(()=>[he]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),s("div",{class:"w-[243px] h-11 absolute left-[118px] -bottom-4 z-10 flex items-center justify-center cursor-pointer",onClick:e[3]||(e[3]=n=>F(l(w)))},[xe,M((u(),m("span",ve,[b(" Save ")])),[[z,l(d)]])])])])])])]),_:1})])}}});export{Ie as default};