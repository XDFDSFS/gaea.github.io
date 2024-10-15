import{a as A,_ as N}from"./logo.f3bfb3d4.js";import{E as V}from"./index.24c07744.js";import{a as q,E as I}from"./el-checkbox.56b827bc.js";import{h as S,C as v,E as T,a as U}from"./index.211e70b4.js";import{_ as $}from"./client-only.dda8ce3b.js";import{d as D,r as m,B as H,h as g,a as u,c as f,f as c,w as i,b as s,x as k,u as l,F as M,m as Y,z as G,E as p,N as J,e as O}from"./entry.c07dde69.js";import"./el-input.7a05f511.js";import{c as Z}from"./passwords.0c085804.js";import{v as K}from"./el-loading.056d9fa1.js";import{c as Q}from"./dict.0e295fe2.js";import{a as W,b as X,_ as ee}from"./bg-kuang.531a237b.js";import"./use-form-item.285f7a3a.js";import"./isEqual.d8f908c0.js";import"./-initCloneObject.78369c73.js";import"./user.4e311bf2.js";const se={class:"w-full h-screen pb-5"},te=s("img",{src:W,class:"w-full h-full fixed inset-0 object-cover -z-10"},null,-1),oe={class:"w-full h-screen flex flex-col overflow-auto"},ae=s("div",{class:"w-full h-12 text-base text-white font-normal px-5 flex items-center justify-between"},[s("img",{src:A,alt:"",class:"w-52 h-16 mt-4"})],-1),re={class:"w-full flex-1 flex justify-end overflow-auto pr-32"},le={class:"w-[480px] h-[680px] relative sm:scale-50 md:scale-[0.7] xl:scale-[0.8] 2xl:scale-100"},ne=s("img",{src:X,class:"w-full h-full absolute top-0 left-0 -z-10 object-left-top"},null,-1),ce={class:"w-full h-full"},ie={class:"w-full h-[80px] mt-32 flex flex-col items-center justify-center space-y-1"},de=s("div",{class:"text-3xl font-normal text-[#FFE099]"},"Let's get start ",-1),ue={class:"flex items-center space-x-2"},pe=s("span",{class:"text-sm font-normal text-[#C6BFAA]"},"Reset your password",-1),_e={class:"text-sm font-normal text-[#5CF3FF] cursor-pointer"},me={class:"w-full flex-1 px-12 mt-8"},fe=s("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1),we={class:"set_checkbox_sty"},he=s("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1),xe=s("img",{src:ee,class:"w-full h-full object-cover"},null,-1),ve={"element-loading-background":"transparent",class:"text-base font-normal text-[#4E4A3C] absolute z-10"},Te=D({__name:"reset",emits:["update:closeDialog"],setup(ge,{emit:ke}){const w=m(),d=m(!1),a=m(Q()),_=H(),o=g({password_new:"",confirm_Password:"",checkList:[]}),b=g({password_new:[{validator:(r,e,t)=>{e===""?t(new Error("Please enter a valide password")):(o.checkList.length!==4&&t(new Error("Your password does not match")),t())},trigger:"blur"}],confirm_Password:[{validator:(r,e,t)=>{e===""?t(new Error("Please input the password again")):e!==o.password_new?t(new Error("Your password does not match")):t()},trigger:"blur"}]}),E=()=>{const{password_new:r}=o,e=Z(r);o.checkList=[],e.lowercase&&o.checkList.push(a==null?void 0:a.value[0]),e.uppercase&&o.checkList.push(a==null?void 0:a.value[1]),e.special&&o.checkList.push(a==null?void 0:a.value[2]),e.characters&&o.checkList.push(a==null?void 0:a.value[3])},y=r=>/^[A-Za-z0-9_-]+$/.test(r),P=r=>{const e=r.split(".");if(console.log(e,"parts"),e.length!==3)return!1;for(const t of e)if(!y(t))return!1;return!0},F=async r=>{r&&await r.validate(async e=>{if(e)try{if(!_.query.token)return p.warning("Invalid link");if(!P(_.query.token))return p.warning("Parameter error");d.value=!0;const t=await S({token:_.query.token||"",password_new:v.SHA256(o.password_new).toString(v.enc.Hex)});d.value=!1,t.code===200?(p.success(t.msg),J("/login")):p.error(t.msg)}catch(t){console.log(t),d.value=!1}})};return(r,e)=>{const t=N,h=V,C=I,L=q,x=T,j=U,B=$,R=K;return u(),f("div",se,[c(B,null,{default:i(()=>[te,s("div",oe,[ae,s("div",re,[s("div",le,[ne,s("div",ce,[s("div",ie,[de,s("div",ue,[pe,s("span",_e,[c(t,{to:"/login"},{default:i(()=>[k("Log in")]),_:1})])])]),s("div",me,[c(j,{model:l(o),class:"space-y-8",ref_key:"ruleFormRef",ref:w,rules:l(b),"label-position":"top","hide-required-asterisk":""},{default:i(()=>[c(x,{label:"Password",prop:"password_new",onInput:E},{default:i(()=>[c(h,{placeholder:"Enter your password",type:"password",modelValue:l(o).password_new,"onUpdate:modelValue":e[0]||(e[0]=n=>l(o).password_new=n),"show-password":"",oncopy:"return false"},{prefix:i(()=>[fe]),_:1},8,["modelValue"]),s("div",we,[c(L,{modelValue:l(o).checkList,"onUpdate:modelValue":e[1]||(e[1]=n=>l(o).checkList=n),class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6"},{default:i(()=>[(u(!0),f(M,null,Y(l(a),(n,z)=>(u(),O(C,{label:n,value:n,key:z},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),c(x,{label:"Confirm Password",prop:"confirm_Password"},{default:i(()=>[c(h,{placeholder:"Enter your password",type:"password",modelValue:l(o).confirm_Password,"onUpdate:modelValue":e[2]||(e[2]=n=>l(o).confirm_Password=n),"show-password":"",oncopy:"return false"},{prefix:i(()=>[he]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),s("div",{class:"w-[243px] h-11 absolute left-[118px] -bottom-4 z-10 flex items-center justify-center cursor-pointer",onClick:e[3]||(e[3]=n=>F(l(w)))},[xe,G((u(),f("span",ve,[k(" Save ")])),[[R,l(d)]])])])])])])]),_:1})])}}});export{Te as default};
