import{_ as j,a as I}from"./logo.4aaa8a74.js";import{E as T,a as $,b as M}from"./el-form.cbb0a663.js";import{c as S,E as U}from"./el-checkbox.98de4255.js";import{E as A}from"./el-button.546c7c51.js";import{_ as N}from"./client-only.cce2e736.js";import{_ as H,t as Y}from"./Footer.vuevuetypescriptsetuptruelang.b83b402e.js";import{d as q,r as m,a as z,I as g,o as _,c as x,b as s,l,m as i,e as a,F as G,B as J,E as p,ak as O,A as Z}from"./entry.9365d9fc.js";import{c as K}from"./passwords.46d2a945.js";import{c as Q}from"./dict.ce0f2911.js";import{u as W}from"./user.c71e7d42.js";import{h as X}from"./user.6ef7be0b.js";import{C as E}from"./index.2d9eff2e.js";import"./event.585b4dd7.js";import"./request.df259aed.js";import"./godhood.ee72e8bf.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";const ee={class:"w-full overflow-auto bg-black"},se={class:"w-full h-screen pb-5 bg-black"},te=s("img",{src:I,alt:"",class:"w-full h-full object-contain"},null,-1),oe=[te],re={class:"w-full h-full flex justify-end items-center overflow-auto pr-32"},ae={class:"w-[480px] h-fit px-8 pt-6 pb-13 space-y-8 sm:scale-50 md:scale-[0.7] xl:scale-[0.8] 2xl:scale-100 rounded-lg"},ne={class:"w-full flex items-center justify-between py-2"},le=s("div",{class:"text-lg font-light text-[#EDEDED]"},"Reset your password",-1),ie={class:"text-sm font-normal text-[#EDEDED] cursor-pointer flex items-center space-x-6"},ce=s("span",{class:"text-lg font-light"}," Login in",-1),de=s("div",{class:"w-6 h-6 rounded-full border bordder-[#EDEDED] hover:bg-[#EDEDED] hover:text-black flex items-center justify-center"},[s("span",{class:"iconfont icon-gengduo11"})],-1),pe={class:"w-full flex-1"},ue=s("div",{class:"flex items-center space-x-2"},[s("span",{class:"iconfont icon-cfmpassword text-[#2E2E2E] text-xl"}),s("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1),me={class:"set_checkbox_sty"},_e=s("div",{class:"flex items-center space-x-2"},[s("span",{class:"iconfont icon-cfmpassword text-[#2E2E2E] text-xl"}),s("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1),fe={class:"w-full flex justify-center mb-6 mt-3"},we=s("span",{class:"font-medium"}," Save",-1),he={class:"adaptation-padding pb-[80px]"},Se=q({__name:"reset",emits:["update:closeDialog"],setup(ge,{emit:xe}){const f=m(),d=m(!1),c=m(Q());z();const u=W(),o=g({password_new:"",confirm_Password:"",checkList:[]}),v=g({password_new:[{validator:(r,e,t)=>{e===""?t(new Error("Please enter a valide password")):(o.checkList.length!==2&&t(new Error("Your password does not match")),t())},trigger:"blur"},{min:8,max:20,message:"Password length must be between 8 and 20 characters",trigger:"blur"}],confirm_Password:[{validator:(r,e,t)=>{e===""?t(new Error("Please input the password again")):e!==o.password_new?t(new Error("Your password does not match")):t()},trigger:"blur"}]}),b=()=>{const{password_new:r}=o,e=K(r);o.checkList=[],e.criteriaMet&&o.checkList.push(c==null?void 0:c.value[0]),e.lengthMet&&o.checkList.push(c==null?void 0:c.value[1])},k=r=>/^[A-Za-z0-9_-]+$/.test(r),y=r=>{const e=r.split(".");if(e.length!==3)return!1;for(const t of e)if(!k(t))return!1;return!0},P=async r=>{r&&await r.validate(async e=>{if(e){if(d.value)return;try{if(!u.getToken)return p.warning("Invalid link");if(!y(u.getToken))return p.warning("Parameter error");d.value=!0;const t=await X({token:u.getToken||"",password_new:E.SHA256(o.password_new).toString(E.enc.Hex)});d.value=!1,t&&t.code===200?(p.success(t.msg),O("/login")):p.error(t.msg)}catch{d.value=!1}}})};return(r,e)=>{const t=j,w=T,D=U,C=S,h=$,L=M,V=A,B=N,F=H;return _(),x("div",ee,[s("div",se,[s("div",{class:"w-40 h-10 cursor-pointer fixed top-5 left-5",onClick:e[0]||(e[0]=n=>r.$router.go(0))},oe),l(B,null,{default:i(()=>[s("div",re,[s("div",ae,[s("div",ne,[le,s("span",ie,[ce,l(t,{to:"/login"},{default:i(()=>[de]),_:1})])]),s("div",pe,[l(L,{model:a(o),class:"space-y-8",ref_key:"ruleFormRef",ref:f,rules:a(v),"label-position":"top","hide-required-asterisk":""},{default:i(()=>[l(h,{label:"Password",prop:"password_new",onInput:b},{default:i(()=>[l(w,{placeholder:"Enter your password",type:"password",modelValue:a(o).password_new,"onUpdate:modelValue":e[1]||(e[1]=n=>a(o).password_new=n),"show-password":"",oncopy:"return false"},{prefix:i(()=>[ue]),_:1},8,["modelValue"]),s("div",me,[l(C,{modelValue:a(o).checkList,"onUpdate:modelValue":e[2]||(e[2]=n=>a(o).checkList=n)},{default:i(()=>[(_(!0),x(G,null,J(a(c),(n,R)=>(_(),Z(D,{label:n,value:n,key:R},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),l(h,{label:"Confirm Password",prop:"confirm_Password"},{default:i(()=>[l(w,{placeholder:"Enter your password",type:"password",modelValue:a(o).confirm_Password,"onUpdate:modelValue":e[3]||(e[3]=n=>a(o).confirm_Password=n),"show-password":"",oncopy:"return false"},{prefix:i(()=>[_e]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),s("div",fe,[l(V,{class:"w-2/3",style:{height:"44px"},color:"#EDEDED",round:"",onClick:e[4]||(e[4]=n=>("throttle"in r?r.throttle:a(Y))(()=>{P(a(f))})),loading:a(d)},{default:i(()=>[we]),_:1},8,["loading"])])])])]),_:1})]),s("div",he,[l(F)])])}}});export{Se as default};