import{_ as z,a as ne,b as le,E as Q}from"./white-discord.dabef96b.js";import{_ as ae,a as re}from"./logo.b30c2410.js";import{_ as ie}from"./Btn.vuevuetypescriptsetuptruelang.74948789.js";import{j as ce,c as de,m as ue,E as K}from"./taskConnect.19083cf5.js";import{_ as Z}from"./client-only.c412b70d.js";import{d as B,G as _,bb as H,o as w,c as x,a0 as i,V as p,b as e,e as t,t as L,a1 as O,aB as X,bw as J,bc as T,a5 as Y,U as fe,bG as pe,bf as ee,bg as se,a as _e,u as me,B as he,a9 as ge,a7 as we,bH as ve,X as G,Y as xe}from"./entry.aea712e6.js";import{c as te,g as W,i as I}from"./utils.cf943505.js";import{m as be,c as ye}from"./dict.2cf83286.js";import{t as q}from"./throttle.a1e10328.js";import{E as Ce}from"./el-input.4acba0e6.js";import{C as j,E as $e,a as ke}from"./index.93f5aedd.js";import{E as Ee,d as Fe}from"./el-checkbox.a63e5d7d.js";import{E as Pe,_ as oe}from"./plugin-vueexport-helper.6a63323a.js";import{c as Ie}from"./passwords.0c085804.js";const De=""+globalThis.__publicAssetsURL("images/home/logout.png"),Se={class:"max-h-[90vh] space-y-5 overflow-hidden flex flex-col"},Re=e("span",{class:"text-base font-normal text-white"},"User Profile",-1),Ve={class:"flex flex-col items-center space-y-2"},Ue={class:"w-[72px] h-[72px] rounded-full overflow-hidden"},Le=e("div",{class:"image-slot"},[e("img",{src:z,class:"w-full h-full object-cover"})],-1),Ae={class:"text-base font-medium text-white"},Me={class:"text-xs font-normal text-[#999999]"},je={class:"space-y-4"},Te={class:"h-11 flex items-center justify-between space-x-8"},Ye=e("span",{class:"text-sm font-medium text-[#ffe099]"},"FAQ",-1),Be=e("span",{class:"text-sm font-medium text-[#5CF3FF]"},"About Gaea",-1),He=e("p",{class:"text-xs font-normal text-[#999999]"}," If you need help, feel free to hop on our Discord server and submit a support ticket. ",-1),Oe={class:"w-full flex-1 space-y-5 overflow-auto"},Xe=e("p",{class:"text-base font-medium text-[#ffffffcc]"},"Social Profiles",-1),Je={class:"space-y-4"},Ne={class:"flex items-center space-x-2"},Ge={key:0,src:ne,alt:"",class:"w-[26px] h-[26px] mr-1"},We={key:1,src:le,alt:"",class:"w-8 h-8 mr-1"},qe={class:"text-sm font-medium text-white"},ze={class:"w-fit"},Qe={class:"flex items-center justify-between text-sm font-normal text-[#8C866F]"},Ke=e("img",{src:De,alt:"",class:"w-4 h-4"},null,-1),Ze=e("span",null," Log out",-1),es=[Ke,Ze],ss=B({__name:"UserProfile",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog","changePassWord"],setup(b,{emit:F}){const y=_(!1),$=H(),C=_([]),m=_(),c=()=>{F("update:closeDialog")},l=async()=>{m.value=$.getUserInfo,E()},k=s=>{const{social_x_name:n,social_dc_name:h}=$.getUserInfo;if(!I(n)&&s.code==="VERIFY_X")return n;if(!I(h)&&s.code==="VERIFY_DISCORD")return h;if(s.status==="COMPLETED")return"Claimed";if(s.status==="AVAILABLE")return"Claim";{const d=be().find(o=>o.code===s.code);return d?d.title:"Unknown"}},D=s=>{const{social_x_name:n,social_dc_name:h}=$.getUserInfo;!I(n)&&s.code==="VERIFY_X"||!I(h)&&s.code==="VERIFY_DISCORD"||s.status!=="COMPLETED"&&(s.status==="AVAILABLE"?q(()=>S(s)):q(()=>ce(s.code)))},S=async s=>{try{y.value=!0;const n=await de({mission_id:`${s.id}`});y.value=!1,n.code===200?E():T.error(n.msg)}catch(n){console.error(n),T.error("An error occurred while completing the mission.")}finally{y.value=!1}},R=s=>{const{social_x_name:n,social_dc_name:h}=$.getUserInfo;return s.code==="VERIFY_X"&&!I(n)||s.code==="VERIFY_DISCORD"&&!I(h)?!0:s.status==="COMPLETED"},E=async()=>{try{const s=await ue();s.code===200&&(C.value=s.data.filter(n=>n.code==="VERIFY_X"||n.code==="VERIFY_DISCORD"))}catch(s){console.log(s)}};return(s,n)=>{const h=Q,d=ae,o=ie,a=K,f=Z;return w(),x("div",null,[i(f,null,{default:p(()=>[i(a,{draggable:"","model-value":s.$props.dialogVisible,"show-close":!1,width:"500px",style:{background:"#121212","border-radius":"10px",padding:"0"},"align-center":"",onClose:c,onOpen:n[2]||(n[2]=r=>l())},{default:p(()=>{var r,P;return[e("div",Se,[e("div",{class:"flex items-center justify-between"},[Re,e("div",{class:"w-5 h-5 bg-[#ffffff52] rounded-full text-center leading-5 text-[#ffffff99] cursor-pointer",onClick:c},"×")]),e("div",Ve,[e("div",Ue,[i(h,{src:("showFaces"in s?s.showFaces:t(te))(),fit:"cover"},{error:p(()=>[Le]),_:1},8,["src"])]),e("span",Ae,L((r=t(m))==null?void 0:r.name),1),e("span",Me,L((P=t(m))==null?void 0:P.email),1)]),e("div",je,[e("div",Te,[i(d,{to:`${("getJumpURL"in s?s.getJumpURL:t(W))()}/home?type=FAQ`,target:"_blank",class:"flex-1 h-full border border-[#8c866f] rounded-lg flex items-center justify-center cursor-pointer"},{default:p(()=>[Ye]),_:1},8,["to"]),i(d,{to:`${("getJumpURL"in s?s.getJumpURL:t(W))()}`,target:"_blank",class:"flex-1 h-full border border-[#5CF3FF] rounded-lg flex items-center justify-center cursor-pointer"},{default:p(()=>[Be]),_:1},8,["to"])]),He]),e("div",Oe,[Xe,e("div",Je,[(w(!0),x(O,null,X(t(C),(v,V)=>(w(),x("div",{class:"w-full py-3 px-4 bg-black rounded-lg flex items-center justify-between",key:V},[e("div",Ne,[v.code==="VERIFY_X"?(w(),x("img",Ge)):(w(),x("img",We)),e("span",qe,L(v.code==="VERIFY_X"?"X":"Discord"),1)]),e("div",ze,[i(o,{title:k(v),disabled:R(v),"hover-title":k(v),onClickHandle:U=>D(v)},null,8,["title","disabled","hover-title","onClickHandle"])])]))),128))]),e("div",Qe,[e("span",{class:"cursor-pointer",onClick:n[0]||(n[0]=()=>{F("changePassWord")})},"Change Password"),e("div",{class:"flex items-center space-x-1 cursor-pointer",onClick:n[1]||(n[1]=v=>("navigateTo"in s?s.navigateTo:t(J))("/login"))},es)])])])]}),_:1},8,["model-value"])]),_:1})])}}}),A=b=>(ee("data-v-698d4b56"),b=b(),se(),b),ts={class:"max-h-[90vh] space-y-5 overflow-hidden flex flex-col"},os=A(()=>e("span",{class:"text-base font-normal text-white"},"Change Password",-1)),ns={class:"w-full flex-1 px-5 pb-5 mt-14"},ls=A(()=>e("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),as=A(()=>e("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),rs={class:"set_checkbox_sty"},is=A(()=>e("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),cs=A(()=>e("span",{class:"text-white"},"Save",-1)),ds=B({__name:"ChangePassword",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(b,{emit:F}){const y=_(),$=H(),C=_(),m=_(!1),c=_(ye()),l=Y({password:"",password_new:"",confirm_Password:"",checkList:[]}),S=Y({password:[{required:!0,message:"Enter your Currrent password",trigger:"blur"}],password_new:[{validator:(d,o,a)=>{o===""?a(new Error("Please enter a valide password")):(l.checkList.length!==4&&a(new Error("Your password does not match")),a())},trigger:"blur"}],confirm_Password:[{validator:(d,o,a)=>{o===""?a(new Error("Please input the password again")):o!==l.password_new?a(new Error("Your password does not match")):a()},trigger:"blur"}]}),R=()=>{const{password_new:d}=l,o=Ie(d);l.checkList=[],o.lowercase&&l.checkList.push(c==null?void 0:c.value[0]),o.uppercase&&l.checkList.push(c==null?void 0:c.value[1]),o.special&&l.checkList.push(c==null?void 0:c.value[2]),o.characters&&l.checkList.push(c==null?void 0:c.value[3])},E=()=>{s(y.value),l.checkList=[],F("update:closeDialog")},s=d=>{d&&d.resetFields()},n=async d=>{d&&await d.validate(async o=>{if(o)try{m.value=!0;const a=await pe({password:j.SHA256(l.password).toString(j.enc.Hex).trim(),password_new:j.SHA256(l.password_new).toString(j.enc.Hex).trim()});m.value=!1,a.code===200?(T.success(a.data),J("/login")):T.error(a.msg)}catch(a){console.log(a),m.value=!1}})},h=async()=>{C.value=$.getUserInfo};return(d,o)=>{const a=Ce,f=$e,r=Ee,P=Fe,v=Pe,V=ke,U=K,g=Z;return w(),x("div",null,[i(g,null,{default:p(()=>[i(U,{draggable:"","model-value":d.$props.dialogVisible,"show-close":!1,width:"500px",style:{background:"#121212","border-radius":"10px",padding:"0"},"align-center":"",onClose:E,onOpen:o[5]||(o[5]=u=>h())},{default:p(()=>[e("div",ts,[e("div",{class:"flex items-center justify-between"},[os,e("div",{class:"w-5 h-5 bg-[#ffffff52] rounded-full text-center leading-5 text-[#ffffff99] cursor-pointer",onClick:E},"× ")]),e("div",ns,[i(V,{model:t(l),class:"space-y-8",ref_key:"ruleFormRef",ref:y,rules:t(S),"label-position":"top","hide-required-asterisk":""},{default:p(()=>[i(f,{label:"Currrent password",prop:"password"},{default:p(()=>[i(a,{placeholder:"Enter your Currrent password",type:"password",modelValue:t(l).password,"onUpdate:modelValue":o[0]||(o[0]=u=>t(l).password=u),"show-password":"",oncopy:"return false"},{prefix:p(()=>[ls]),_:1},8,["modelValue"])]),_:1}),i(f,{label:"Password",prop:"password_new",onInput:R},{default:p(()=>[i(a,{placeholder:"Enter your password",type:"password",modelValue:t(l).password_new,"onUpdate:modelValue":o[1]||(o[1]=u=>t(l).password_new=u),"show-password":"",oncopy:"return false"},{prefix:p(()=>[as]),_:1},8,["modelValue"]),e("div",rs,[i(P,{modelValue:t(l).checkList,"onUpdate:modelValue":o[2]||(o[2]=u=>t(l).checkList=u),class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6"},{default:p(()=>[(w(!0),x(O,null,X(t(c),(u,M)=>(w(),fe(r,{label:u,value:u,key:M},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),i(f,{label:"Confirm Password",prop:"confirm_Password"},{default:p(()=>[i(a,{placeholder:"Enter your password",type:"password",modelValue:t(l).confirm_Password,"onUpdate:modelValue":o[3]||(o[3]=u=>t(l).confirm_Password=u),"show-password":"",oncopy:"return false"},{prefix:p(()=>[is]),_:1},8,["modelValue"])]),_:1}),i(v,{color:"#D9AF80",round:"",class:"w-full h-full",onClick:o[4]||(o[4]=u=>n(t(y))),loading:t(m)},{default:p(()=>[cs]),_:1},8,["loading"])]),_:1},8,["model","rules"])])])]),_:1},8,["model-value"])]),_:1})])}}});const us=oe(ds,[["__scopeId","data-v-698d4b56"]]),N=b=>(ee("data-v-f22d71ee"),b=b(),se(),b),fs={class:"w-full h-screen bg-black flex flex-col"},ps={class:"w-full flex items-center justify-between px-20 py-5"},_s={class:"flex items-center space-x-10"},ms={class:"flex justify-center items-center gap-2 sm:gap-4 text-white scale-80 transform origin-left lg:scale-100 lg:gap-6 space-x-4"},hs=["onClick","onMouseenter"],gs=["src"],ws={class:"flex items-center space-x-3"},vs={class:"text-white text-sm sm:text-base"},xs=N(()=>e("div",{class:"image-slot"},[e("img",{src:z,class:"w-full h-full object-cover"})],-1)),bs={class:"w-full flex-1 overflow-auto"},ys={key:0,class:"flex items-center w-full h-11 px-20 mb-3 mt-1 announcement-wrapper"},Cs={class:"announcement-content flex items-center space-x-1 link-style"},$s=N(()=>e("span",{class:"iconfont icon-jinggao text-[#d9af80] text-xl"},null,-1)),ks=["innerHTML"],Es=N(()=>e("span",{class:"iconfont icon-del text-white text-xs"},null,-1)),Fs=[Es],Ps=B({__name:"index",setup(b){const F=_e(),y=me(),$=F.path,C=_($.replace(/\/$/,"")),m=_(null),c=_(""),l=_(!1),k=_(null),D=_(!1),S=()=>{D.value=!0,m.value&&(m.value.style.animationPlayState="paused")},R=()=>{D.value=!1,m.value&&(m.value.style.animationPlayState="running")},E=Y([{title:"Dashboard",path:"/dashboard"},{title:"Mission& Reward",path:"/missions"},{title:"NFT Coming Soon",path:"/"}]),s=H(),n=_(!1),h=_(!1),d=f=>{f.title!=="NFT Coming Soon"&&(C.value=f.path,J(f.path))},o=()=>{n.value=!1,h.value=!0},a=async()=>{const f=await ve();f.code===200&&f.data&&f.data.length>0&&(c.value=f.data[0].announcement,l.value=!0)};return he(()=>{a()}),(f,r)=>{var U;const P=Q,v=ss,V=us;return w(),x("div",fs,[e("div",ps,[e("div",_s,[e("img",{src:re,alt:"",class:"w-36 h-12 cursor-pointer",onClick:r[0]||(r[0]=g=>t(y).go(0))}),e("div",ms,[(w(!0),x(O,null,X(t(E),(g,u)=>(w(),x("div",{key:u,class:G(["flex items-center hover:text-[#9E8654]",{"text-[#9E8654]":t(C)===g.path,"text-white":t(C)!==g.path}]),style:xe({cursor:u===2?"not-allowed":"pointer"}),onClick:M=>d(g),onMouseenter:M=>k.value=u,onMouseleave:r[1]||(r[1]=M=>k.value=null)},[e("img",{src:`/images/public/menu_${u}${t(C)===g.path||t(k)===u?"_selected":""}.png`,alt:"",class:"w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"},null,8,gs),e("span",{class:G(["text_family font-bold text-xs sm:text-sm lg:text-base",u===2?"text-[#333]":""])},L(g.title),3)],46,hs))),128))])]),e("div",ws,[e("div",vs,L((U=t(s).getUserInfo)==null?void 0:U.name),1),e("div",{class:"w-8 h-8 rounded-full overflow-hidden cursor-pointer",onClick:r[2]||(r[2]=g=>n.value=!0)},[i(P,{src:("showFaces"in f?f.showFaces:t(te))(),fit:"cover"},{error:p(()=>[xs]),_:1},8,["src"])])])]),e("div",bs,[t(l)?(w(),x("div",ys,[e("div",{class:"w-full h-full multiple-radius relative rounded-lg text-white flex items-center justify-center overflow-hidden",onMouseenter:S,onMouseleave:R},[e("div",{class:"announcement-container flex",ref_key:"announcementContainer",ref:m},[e("div",Cs,[$s,e("span",{class:"whitespace-nowrap text-lg",innerHTML:t(c)},null,8,ks)])],512),e("div",{class:"w-5 h-5 bg-white bg-opacity-20 rounded-full absolute top-1/2 -translate-y-1/2 right-2 flex items-center justify-center flex-shrink-0 cursor-pointer close-button",onClick:r[3]||(r[3]=g=>l.value=!t(l))},Fs)],32)])):ge("",!0),we(f.$slots,"default",{},void 0,!0)]),i(v,{"dialog-visible":t(n),"onUpdate:closeDialog":r[4]||(r[4]=g=>n.value=!1),onChangePassWord:r[5]||(r[5]=g=>o())},null,8,["dialog-visible"]),i(V,{"dialog-visible":t(h),"onUpdate:closeDialog":r[6]||(r[6]=g=>h.value=!1)},null,8,["dialog-visible"])])}}});const Os=oe(Ps,[["__scopeId","data-v-f22d71ee"]]);export{Os as default};