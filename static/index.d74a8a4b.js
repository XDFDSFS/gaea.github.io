import{b as ee,_ as ie,a as ce,j as de,c as ue,m as fe,E as se,d as te,v as pe}from"./el-loading.0d3a6d86.js";import{a as _e,_ as me}from"./logo.2c079058.js";import{_ as he,E as ge}from"./Btn.vuevuetypescriptsetuptruelang.1213d543.js";import{_ as oe}from"./client-only.12adc9fb.js";import{d as H,f as _,$ as ve,a3 as we,o as m,c as v,i,j as u,b as e,e as o,t as R,Q as q,H as xe,X,Y as N,E as O,ag as J,G as B,m as ye,z as ne,A as ae,a as be,u as Ce,M as $e,q as ke,s as Fe,p as Ie,r as Ee,n as z,h as Pe}from"./entry.5723f427.js";import{u as W}from"./user.a9621c51.js";import{s as le,g as Q,i as L}from"./utils.97ec8898.js";import{m as De,c as Ue,E as Se,a as Ve}from"./el-form.5cfd5b47.js";import{t as K,E as Le}from"./throttle.b5f1c98a.js";import{E as Re,a as Me}from"./el-checkbox.83c7706f.js";import{c as je}from"./passwords.46d2a945.js";import{i as Ae,n as Te,j as Ye}from"./user.da646fc6.js";import{C as Y}from"./index.1735d320.js";import{_ as re}from"./plugin-vueexport-helper.c27b6911.js";import{F as Z}from"./Fingerprinter.49ba4900.js";import"./focus-trap.cc0232eb.js";import"./request.dff42394.js";const Oe=""+globalThis.__publicAssetsURL("images/home/logout.png"),Be={class:"max-h-[90vh] space-y-5 overflow-hidden flex flex-col"},He=e("span",{class:"text-base font-normal text-white"},"User Profile",-1),Xe={class:"flex flex-col items-center space-y-2"},Ne={class:"w-[72px] h-[72px] rounded-full overflow-hidden"},Je=e("div",{class:"image-slot"},[e("img",{src:ee,class:"w-full h-full object-cover"})],-1),We={class:"text-base font-medium text-white"},Ge={class:"text-xs font-normal text-[#999999]"},qe={class:"flex items-center space-x-1 text-[#999999] text-xs font-normal"},ze=e("span",null," UID : ",-1),Qe={class:"hover:text-white cursor-pointer"},Ke=e("span",{class:"iconfont icon-copy text-xs sm:text-sm"},null,-1),Ze={class:"space-y-4"},es={class:"h-11 flex items-center justify-between space-x-8"},ss=e("span",{class:"text-sm font-medium text-[#ffe099]"},"FAQ",-1),ts=e("span",{class:"text-sm font-medium text-[#5CF3FF]"},"About Gaea",-1),os=e("p",{class:"text-xs font-normal text-[#999999]"}," If you need help, feel free to hop on our Discord server and submit a support ticket. ",-1),ns={class:"w-full flex-1 space-y-5 overflow-auto"},as=e("p",{class:"text-base font-medium text-[#ffffffcc]"},"Social Profiles",-1),ls={class:"space-y-4 h-[130px]"},rs={class:"flex items-center space-x-2"},is={key:0,src:ie,alt:"",class:"w-[26px] h-[26px] mr-1"},cs={key:1,src:ce,alt:"",class:"w-8 h-8 mr-1"},ds={class:"text-sm font-medium text-white"},us={class:"flex items-center px-2"},fs={class:"flex items-center justify-between text-sm font-normal text-[#8C866F]"},ps=e("img",{src:Oe,alt:"",class:"w-4 h-4"},null,-1),_s=e("span",{class:"hover:text-[#ffe099]"}," Log out",-1),ms=[ps,_s],hs=H({__name:"UserProfile",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog","changePassWord"],setup(b,{emit:E}){const $=_(!1),F=_(!1);ve("reloadUserInfo");const w=W(),h=_([]),f=_(),a=()=>{E("update:closeDialog")},P=async()=>{f.value=w.getUserInfo,S()},D=s=>{const{social_x_name:t,social_dc_name:n}=w.getUserInfo;if(!L(t)&&s.code==="VERIFY_X")return t;if(!L(n)&&s.code==="VERIFY_DISCORD")return n;if(s.status==="COMPLETED")return"Claimed";if(s.status==="AVAILABLE")return"Claim";{const l=De().find(k=>k.code===s.code);return l?l.title.split("/")[0]:"Unknown"}},A=s=>{const{social_x_name:t,social_dc_name:n}=w.getUserInfo;!L(t)&&s.code==="VERIFY_X"||!L(n)&&s.code==="VERIFY_DISCORD"||s.status!=="COMPLETED"&&(s.status==="AVAILABLE"?K(()=>M(s)):K(()=>de(s.code)))},M=async s=>{try{$.value=!0;const t=await ue({mission_id:`${s.id}`});$.value=!1,t.code===200?S():O.error(t.msg)}catch(t){console.error(t),O.error("An error occurred while completing the mission.")}finally{$.value=!1}},U=s=>{const{social_x_name:t,social_dc_name:n}=w.getUserInfo;return s.code==="VERIFY_X"&&!L(t)&&s.status!=="LOCK"||s.code==="VERIFY_DISCORD"&&!L(n)&&s.status!=="LOCK"?!0:s.status==="COMPLETED"},S=async()=>{try{F.value=!0;const s=await fe();F.value=!1,s.code===200&&(h.value=s.data.filter(t=>t.code==="VERIFY_X"||t.code==="VERIFY_DISCORD"))}catch(s){F.value=!1,console.log(s)}},x=()=>{w.clearUserInfo(),J("/login")};return(s,t)=>{const n=se,l=_e,k=he,V=te,r=oe,c=we("copy"),I=pe;return m(),v("div",null,[i(r,null,{default:u(()=>[i(V,{draggable:"","model-value":s.$props.dialogVisible,"show-close":!1,width:"550px",style:{background:"#121212","border-radius":"10px",padding:"0"},"align-center":"",onClose:a,onOpen:t[1]||(t[1]=y=>P())},{default:u(()=>{var y,C,d,p;return[e("div",Be,[e("div",{class:"flex items-center justify-between"},[He,e("div",{class:"w-5 h-5 bg-[#ffffff52] rounded-full text-center mr-3 leading-5 duration-500 text-[#ffffff99] cursor-pointer hover:scale-105",onClick:a},"×")]),e("div",Xe,[e("div",Ne,[i(n,{src:("showFaces"in s?s.showFaces:o(le))(),fit:"cover"},{error:u(()=>[Je]),_:1},8,["src"])]),e("span",We,R((y=o(f))==null?void 0:y.name),1),e("span",Ge,R((C=o(f))==null?void 0:C.email),1),q((m(),v("div",qe,[ze,e("div",Qe,[xe(R((d=o(f))==null?void 0:d.uid)+" ",1),Ke])])),[[c,(p=o(f))==null?void 0:p.uid]])]),e("div",Ze,[e("div",es,[i(l,{to:`${("getJumpURL"in s?s.getJumpURL:o(Q))()}/home?type=FAQ`,target:"_blank",class:"flex-1 h-full border border-[#8c866f] hover:border-[#ffe099] rounded-lg flex items-center justify-center cursor-pointer"},{default:u(()=>[ss]),_:1},8,["to"]),i(l,{to:`${("getJumpURL"in s?s.getJumpURL:o(Q))()}`,target:"_blank",class:"flex-1 h-full border hover:border-[#5CF3FF] border-[#5cf4ffb6] rounded-lg flex items-center justify-center cursor-pointer"},{default:u(()=>[ts]),_:1},8,["to"])]),os]),e("div",ns,[as,q((m(),v("div",ls,[(m(!0),v(X,null,N(o(h),(g,T)=>(m(),v("div",{class:"w-full py-3 px-4 bg-black rounded-lg flex items-center justify-between",key:T},[e("div",rs,[g.code==="VERIFY_X"?(m(),v("img",is)):(m(),v("img",cs)),e("span",ds,R(g.code==="VERIFY_X"?"X":"Discord"),1)]),e("div",us,[i(k,{title:D(g),disabled:U(g),"hover-title":D(g),onClickHandle:Xs=>A(g)},null,8,["title","disabled","hover-title","onClickHandle"])])]))),128))])),[[I,o(F)]]),e("div",fs,[e("span",{class:"cursor-pointer hover:text-[#ffe099]",onClick:t[0]||(t[0]=()=>{E("changePassWord")})}," Change Password "),e("div",{class:"flex items-center space-x-1 cursor-pointer",onClick:x},ms)])])])]}),_:1},8,["model-value"])]),_:1})])}}}),j=b=>(ne("data-v-61317222"),b=b(),ae(),b),gs={class:"max-h-[90vh] space-y-5 overflow-hidden flex flex-col"},vs=j(()=>e("span",{class:"text-base font-normal text-white"},"Change Password",-1)),ws={class:"w-full flex-1 px-5 pb-5 mt-14"},xs=j(()=>e("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),ys=j(()=>e("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),bs={class:"set_checkbox_sty"},Cs=j(()=>e("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),$s=j(()=>e("span",{class:"text-white"},"Save",-1)),ks=H({__name:"ChangePassword",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(b,{emit:E}){const $=_(),F=W(),w=_(),h=_(!1),f=_(Ue()),a=B({password:"",password_new:"",confirm_Password:"",checkList:[]}),A=B({password:[{required:!0,message:"Enter your Currrent password",trigger:"blur"}],password_new:[{validator:(t,n,l)=>{n===""?l(new Error("Please enter a valide password")):(a.checkList.length!==2&&l(new Error("Your password does not match")),l())},trigger:"blur"}],confirm_Password:[{validator:(t,n,l)=>{n===""?l(new Error("Please input the password again")):n!==a.password_new?l(new Error("Your password does not match")):l()},trigger:"blur"}]}),M=()=>{const{password_new:t}=a,n=je(t);a.checkList=[],n.criteriaMet&&a.checkList.push(f==null?void 0:f.value[0]),n.lengthMet&&a.checkList.push(f==null?void 0:f.value[1])},U=()=>{S($.value),a.checkList=[],E("update:closeDialog")},S=t=>{t&&t.resetFields()},x=async t=>{t&&await t.validate(async n=>{if(n)try{h.value=!0;const l=await Ae({password:Y.SHA256(a.password).toString(Y.enc.Hex).trim(),password_new:Y.SHA256(a.password_new).toString(Y.enc.Hex).trim()});h.value=!1,l.code===200?(O.success(l.data),J("/login")):O.error(l.msg)}catch(l){console.log(l),h.value=!1}})},s=async()=>{w.value=F.getUserInfo};return(t,n)=>{const l=Le,k=Se,V=Re,r=Me,c=ge,I=Ve,y=te,C=oe;return m(),v("div",null,[i(C,null,{default:u(()=>[i(y,{draggable:"","model-value":t.$props.dialogVisible,"show-close":!1,width:"500px",style:{background:"#121212","border-radius":"10px",padding:"0"},"align-center":"",onClose:U,onOpen:n[5]||(n[5]=d=>s())},{default:u(()=>[e("div",gs,[e("div",{class:"flex items-center justify-between"},[vs,e("div",{class:"w-5 h-5 bg-[#ffffff52] rounded-full text-center leading-5 text-[#ffffff99] cursor-pointer",onClick:U},"× ")]),e("div",ws,[i(I,{model:o(a),class:"space-y-8",ref_key:"ruleFormRef",ref:$,rules:o(A),"label-position":"top","hide-required-asterisk":""},{default:u(()=>[i(k,{label:"Currrent password",prop:"password"},{default:u(()=>[i(l,{placeholder:"Enter your Currrent password",type:"password",modelValue:o(a).password,"onUpdate:modelValue":n[0]||(n[0]=d=>o(a).password=d),"show-password":"",oncopy:"return false"},{prefix:u(()=>[xs]),_:1},8,["modelValue"])]),_:1}),i(k,{label:"Password",prop:"password_new",onInput:M},{default:u(()=>[i(l,{placeholder:"Enter your password",type:"password",modelValue:o(a).password_new,"onUpdate:modelValue":n[1]||(n[1]=d=>o(a).password_new=d),"show-password":"",oncopy:"return false"},{prefix:u(()=>[ys]),_:1},8,["modelValue"]),e("div",bs,[i(r,{modelValue:o(a).checkList,"onUpdate:modelValue":n[2]||(n[2]=d=>o(a).checkList=d)},{default:u(()=>[(m(!0),v(X,null,N(o(f),(d,p)=>(m(),ye(V,{label:d,value:d,key:p},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),i(k,{label:"Confirm Password",prop:"confirm_Password"},{default:u(()=>[i(l,{placeholder:"Enter your password",type:"password",modelValue:o(a).confirm_Password,"onUpdate:modelValue":n[3]||(n[3]=d=>o(a).confirm_Password=d),"show-password":"",oncopy:"return false"},{prefix:u(()=>[Cs]),_:1},8,["modelValue"])]),_:1}),i(c,{color:"#D9AF80",round:"",class:"w-full h-full",onClick:n[4]||(n[4]=d=>x(o($))),loading:o(h)},{default:u(()=>[$s]),_:1},8,["loading"])]),_:1},8,["model","rules"])])])]),_:1},8,["model-value"])]),_:1})])}}});const Fs=re(ks,[["__scopeId","data-v-61317222"]]),G=b=>(ne("data-v-57dc6d98"),b=b(),ae(),b),Is={class:"w-full h-screen flex flex-col bg-black"},Es={class:"w-full flex items-center justify-between flex-wrap adaptation-padding py-5"},Ps={class:"flex items-center space-x-10"},Ds={class:"flex justify-center items-center gap-2 sm:gap-4 text-white scale-80 transform origin-left lg:scale-100 lg:gap-6 space-x-4"},Us=["onClick","onMouseenter"],Ss=["src"],Vs={class:"flex items-center space-x-3"},Ls={class:"text-white text-sm sm:text-base"},Rs=G(()=>e("div",{class:"image-slot"},[e("img",{src:ee,class:"w-full h-full object-cover"})],-1)),Ms={class:"w-full flex-1 overflow-auto"},js={key:0,class:"flex items-center w-full h-11 adaptation-padding mb-3 mt-1 announcement-wrapper"},As={class:"announcement-content flex items-center space-x-1 link-style"},Ts=G(()=>e("span",{class:"iconfont icon-jinggao text-[#d9af80] text-xl"},null,-1)),Ys=["innerHTML"],Os=G(()=>e("span",{class:"iconfont icon-del text-white text-xs"},null,-1)),Bs=[Os],Hs=H({__name:"index",setup(b){const E=be(),$=Ce(),F=E.path,w=_(F.replace(/\/$/,"")),h=_(null),f=_(""),a=_(!1),P=_(null),D=_(!1);$e("reloadUserInfo",async()=>{V()});const M=()=>{D.value=!0,h.value&&(h.value.style.animationPlayState="paused")},U=()=>{D.value=!1,h.value&&(h.value.style.animationPlayState="running")},S=B([{title:"Dashboard",path:"/dashboard"},{title:"Mission& Reward",path:"/missions"},{title:"NFT Coming Soon",path:"/"}]),x=W(),s=_(!1),t=_(!1),n=r=>{r.title!=="NFT Coming Soon"&&(w.value=r.path,J(r.path))},l=()=>{s.value=!1,t.value=!0},k=async()=>{const r=await Te();r.code===200&&r.data&&r.data.length>0&&(f.value=r.data[0].announcement,a.value=!0)},V=async()=>{try{if(!x.getToken)return;const r=await Ye();if(r.code===200){const I=Date.now()-r.data.timestamp;await x.setUserInfo({...r.data,timeDifference:I}),localStorage.setItem("gaea_token",x.getToken);const{uid:y}=x.getUserInfo;if(y){if(!x.getUuidv4){const C=await Z.getFinalFingerprint(y);x.setUuidv4(C)}if(!localStorage.getItem("browser_id")){const C=await Z.getFinalFingerprint(y,"plugIn");localStorage.setItem("browser_id",C)}}}}catch(r){console.log(r)}};return ke(async()=>{V(),await Fe(),k()}),(r,c)=>{var d;const I=se,y=hs,C=Fs;return m(),v("div",Is,[e("div",Es,[e("div",Ps,[e("img",{src:me,alt:"",class:"w-36 h-12 cursor-pointer",onClick:c[0]||(c[0]=p=>o($).go(0))}),e("div",Ds,[(m(!0),v(X,null,N(o(S),(p,g)=>(m(),v("div",{key:g,class:z(["flex items-center hover:text-[#9E8654]",{"text-[#9E8654]":o(w)===p.path,"text-white":o(w)!==p.path}]),style:Pe({cursor:g===2?"not-allowed":"pointer"}),onClick:T=>n(p),onMouseenter:T=>P.value=g,onMouseleave:c[1]||(c[1]=T=>P.value=null)},[e("img",{src:`/images/public/menu_${g}${o(w)===p.path||o(P)===g?"_selected":""}.png`,alt:"",class:"w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"},null,8,Ss),e("span",{class:z(["text_family font-bold text-xs sm:text-sm lg:text-base",g===2?"text-[#333]":""])},R(p.title),3)],46,Us))),128))])]),e("div",Vs,[e("div",Ls,R((d=o(x).getUserInfo)==null?void 0:d.name),1),e("div",{class:"w-8 h-8 rounded-full overflow-hidden cursor-pointer",onClick:c[2]||(c[2]=p=>s.value=!0)},[i(I,{src:("showFaces"in r?r.showFaces:o(le))(),fit:"cover"},{error:u(()=>[Rs]),_:1},8,["src"])])])]),e("div",Ms,[o(a)?(m(),v("div",js,[e("div",{class:"w-full h-full multiple-radius relative rounded-lg text-white flex items-center justify-center overflow-hidden",onMouseenter:M,onMouseleave:U},[e("div",{class:"announcement-container flex",ref_key:"announcementContainer",ref:h},[e("div",As,[Ts,e("span",{class:"whitespace-nowrap text-lg",innerHTML:o(f)},null,8,Ys)])],512),e("div",{class:"w-5 h-5 bg-white bg-opacity-20 rounded-full absolute top-1/2 -translate-y-1/2 right-2 flex items-center justify-center flex-shrink-0 cursor-pointer close-button",onClick:c[3]||(c[3]=p=>a.value=!o(a))},Bs)],32)])):Ie("",!0),Ee(r.$slots,"default",{},void 0,!0)]),i(y,{"dialog-visible":o(s),"onUpdate:closeDialog":c[4]||(c[4]=p=>s.value=!1),onChangePassWord:c[5]||(c[5]=p=>l())},null,8,["dialog-visible"]),i(C,{"dialog-visible":o(t),"onUpdate:closeDialog":c[6]||(c[6]=p=>t.value=!1)},null,8,["dialog-visible"])])}}});const it=re(Hs,[["__scopeId","data-v-57dc6d98"]]);export{it as default};
