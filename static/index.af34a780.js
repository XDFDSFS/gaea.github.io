import{b as q,_ as ne,a as ae,j as le,c as re,m as ie,E as z,d as K}from"./el-dialog.8fbcfbfa.js";import{_ as ce,a as de}from"./logo.1fc2a621.js";import{_ as ue}from"./Btn.vuevuetypescriptsetuptruelang.ccd5a5d1.js";import{_ as Z}from"./client-only.1ee69c80.js";import{d as B,g as m,f as O,a4 as fe,o as v,c as w,j as c,k as p,b as e,e as t,t as S,Q as pe,F as _e,X as H,Y as X,aj as N,E as T,D as Y,B as me,aA as he,x as ee,y as se,a as ge,u as ve,m as we,G as xe,r as ye,aB as be,n as G,i as Ce}from"./entry.7f1c9673.js";import{s as te,g as W,i as V}from"./utils.0ab1234e.js";import{m as $e,c as ke,E as Ee,a as Fe}from"./el-form.ea7ef2e4.js";import{t as Q}from"./throttle.a1e10328.js";import{E as Pe}from"./el-input.35acfe81.js";import{E as Ie,a as De}from"./el-checkbox.97703a3b.js";import{E as Ve,_ as oe}from"./plugin-vueexport-helper.542871fb.js";import{c as Se}from"./passwords.46d2a945.js";import{C as j}from"./index.1735d320.js";const Re=""+globalThis.__publicAssetsURL("images/home/logout.png"),Le={class:"max-h-[90vh] space-y-5 overflow-hidden flex flex-col"},Ue=e("span",{class:"text-base font-normal text-white"},"User Profile",-1),Ae={class:"flex flex-col items-center space-y-2"},Me={class:"w-[72px] h-[72px] rounded-full overflow-hidden"},je=e("div",{class:"image-slot"},[e("img",{src:q,class:"w-full h-full object-cover"})],-1),Te={class:"text-base font-medium text-white"},Ye={class:"text-xs font-normal text-[#999999]"},Be={class:"flex items-center space-x-1 text-[#999999] text-xs font-normal"},Oe=e("span",null," UID : ",-1),He={class:"hover:text-white cursor-pointer"},Xe=e("span",{class:"iconfont icon-copy text-xs sm:text-sm"},null,-1),Ne={class:"space-y-4"},Je={class:"h-11 flex items-center justify-between space-x-8"},Ge=e("span",{class:"text-sm font-medium text-[#ffe099]"},"FAQ",-1),We=e("span",{class:"text-sm font-medium text-[#5CF3FF]"},"About Gaea",-1),Qe=e("p",{class:"text-xs font-normal text-[#999999]"}," If you need help, feel free to hop on our Discord server and submit a support ticket. ",-1),qe={class:"w-full flex-1 space-y-5 overflow-auto"},ze=e("p",{class:"text-base font-medium text-[#ffffffcc]"},"Social Profiles",-1),Ke={class:"space-y-4"},Ze={class:"flex items-center space-x-2"},es={key:0,src:ne,alt:"",class:"w-[26px] h-[26px] mr-1"},ss={key:1,src:ae,alt:"",class:"w-8 h-8 mr-1"},ts={class:"text-sm font-medium text-white"},os={class:"w-fit"},ns={class:"flex items-center justify-between text-sm font-normal text-[#8C866F]"},as=e("img",{src:Re,alt:"",class:"w-4 h-4"},null,-1),ls=e("span",{class:"hover:text-[#ffe099]"}," Log out",-1),rs=[as,ls],is=B({__name:"UserProfile",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog","changePassWord"],setup(x,{emit:P}){const y=m(!1),C=O(),b=m([]),_=m(),g=()=>{P("update:closeDialog")},a=async()=>{_.value=C.getUserInfo,k()},$=s=>{const{social_x_name:o,social_dc_name:h}=C.getUserInfo;if(!V(o)&&s.code==="VERIFY_X")return o;if(!V(h)&&s.code==="VERIFY_DISCORD")return h;if(s.status==="COMPLETED")return"Claimed";if(s.status==="AVAILABLE")return"Claim";{const d=$e().find(n=>n.code===s.code);return d?d.title:"Unknown"}},R=s=>{const{social_x_name:o,social_dc_name:h}=C.getUserInfo;!V(o)&&s.code==="VERIFY_X"||!V(h)&&s.code==="VERIFY_DISCORD"||s.status!=="COMPLETED"&&(s.status==="AVAILABLE"?Q(()=>L(s)):Q(()=>le(s.code)))},L=async s=>{try{y.value=!0;const o=await re({mission_id:`${s.id}`});y.value=!1,o.code===200?k():T.error(o.msg)}catch(o){console.error(o),T.error("An error occurred while completing the mission.")}finally{y.value=!1}},U=s=>{const{social_x_name:o,social_dc_name:h}=C.getUserInfo;return s.code==="VERIFY_X"&&!V(o)||s.code==="VERIFY_DISCORD"&&!V(h)?!0:s.status==="COMPLETED"},k=async()=>{try{const s=await ie();s.code===200&&(b.value=s.data.filter(o=>o.code==="VERIFY_X"||o.code==="VERIFY_DISCORD"))}catch(s){console.log(s)}};return(s,o)=>{const h=z,d=ce,n=ue,l=K,u=Z,f=fe("copy");return v(),w("div",null,[c(u,null,{default:p(()=>[c(l,{draggable:"","model-value":s.$props.dialogVisible,"show-close":!1,width:"500px",style:{background:"#121212","border-radius":"10px",padding:"0"},"align-center":"",onClose:g,onOpen:o[2]||(o[2]=E=>a())},{default:p(()=>{var E,I,D,F;return[e("div",Le,[e("div",{class:"flex items-center justify-between"},[Ue,e("div",{class:"w-5 h-5 bg-[#ffffff52] rounded-full text-center leading-5 text-[#ffffff99] cursor-pointer",onClick:g},"×")]),e("div",Ae,[e("div",Me,[c(h,{src:("showFaces"in s?s.showFaces:t(te))(),fit:"cover"},{error:p(()=>[je]),_:1},8,["src"])]),e("span",Te,S((E=t(_))==null?void 0:E.name),1),e("span",Ye,S((I=t(_))==null?void 0:I.email),1),pe((v(),w("div",Be,[Oe,e("div",He,[_e(S((D=t(_))==null?void 0:D.uid)+" ",1),Xe])])),[[f,(F=t(_))==null?void 0:F.uid]])]),e("div",Ne,[e("div",Je,[c(d,{to:`${("getJumpURL"in s?s.getJumpURL:t(W))()}/home?type=FAQ`,target:"_blank",class:"flex-1 h-full border border-[#8c866f] hover:border-[#ffe099] rounded-lg flex items-center justify-center cursor-pointer"},{default:p(()=>[Ge]),_:1},8,["to"]),c(d,{to:`${("getJumpURL"in s?s.getJumpURL:t(W))()}`,target:"_blank",class:"flex-1 h-full border hover:border-[#5CF3FF] border-[#5cf4ffb6] rounded-lg flex items-center justify-center cursor-pointer"},{default:p(()=>[We]),_:1},8,["to"])]),Qe]),e("div",qe,[ze,e("div",Ke,[(v(!0),w(H,null,X(t(b),(r,i)=>(v(),w("div",{class:"w-full py-3 px-4 bg-black rounded-lg flex items-center justify-between",key:i},[e("div",Ze,[r.code==="VERIFY_X"?(v(),w("img",es)):(v(),w("img",ss)),e("span",ts,S(r.code==="VERIFY_X"?"X":"Discord"),1)]),e("div",os,[c(n,{title:$(r),disabled:U(r),"hover-title":$(r),onClickHandle:A=>R(r)},null,8,["title","disabled","hover-title","onClickHandle"])])]))),128))]),e("div",ns,[e("span",{class:"cursor-pointer hover:text-[#ffe099]",onClick:o[0]||(o[0]=()=>{P("changePassWord")})}," Change Password "),e("div",{class:"flex items-center space-x-1 cursor-pointer",onClick:o[1]||(o[1]=r=>("navigateTo"in s?s.navigateTo:t(N))("/login"))},rs)])])])]}),_:1},8,["model-value"])]),_:1})])}}}),M=x=>(ee("data-v-61317222"),x=x(),se(),x),cs={class:"max-h-[90vh] space-y-5 overflow-hidden flex flex-col"},ds=M(()=>e("span",{class:"text-base font-normal text-white"},"Change Password",-1)),us={class:"w-full flex-1 px-5 pb-5 mt-14"},fs=M(()=>e("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),ps=M(()=>e("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),_s={class:"set_checkbox_sty"},ms=M(()=>e("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),hs=M(()=>e("span",{class:"text-white"},"Save",-1)),gs=B({__name:"ChangePassword",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(x,{emit:P}){const y=m(),C=O(),b=m(),_=m(!1),g=m(ke()),a=Y({password:"",password_new:"",confirm_Password:"",checkList:[]}),L=Y({password:[{required:!0,message:"Enter your Currrent password",trigger:"blur"}],password_new:[{validator:(d,n,l)=>{n===""?l(new Error("Please enter a valide password")):(a.checkList.length!==2&&l(new Error("Your password does not match")),l())},trigger:"blur"}],confirm_Password:[{validator:(d,n,l)=>{n===""?l(new Error("Please input the password again")):n!==a.password_new?l(new Error("Your password does not match")):l()},trigger:"blur"}]}),U=()=>{const{password_new:d}=a,n=Se(d);a.checkList=[],n.criteriaMet&&a.checkList.push(g==null?void 0:g.value[0]),n.lengthMet&&a.checkList.push(g==null?void 0:g.value[1])},k=()=>{s(y.value),a.checkList=[],P("update:closeDialog")},s=d=>{d&&d.resetFields()},o=async d=>{d&&await d.validate(async n=>{if(n)try{_.value=!0;const l=await he({password:j.SHA256(a.password).toString(j.enc.Hex).trim(),password_new:j.SHA256(a.password_new).toString(j.enc.Hex).trim()});_.value=!1,l.code===200?(T.success(l.data),N("/login")):T.error(l.msg)}catch(l){console.log(l),_.value=!1}})},h=async()=>{b.value=C.getUserInfo};return(d,n)=>{const l=Pe,u=Ee,f=Ie,E=De,I=Ve,D=Fe,F=K,r=Z;return v(),w("div",null,[c(r,null,{default:p(()=>[c(F,{draggable:"","model-value":d.$props.dialogVisible,"show-close":!1,width:"500px",style:{background:"#121212","border-radius":"10px",padding:"0"},"align-center":"",onClose:k,onOpen:n[5]||(n[5]=i=>h())},{default:p(()=>[e("div",cs,[e("div",{class:"flex items-center justify-between"},[ds,e("div",{class:"w-5 h-5 bg-[#ffffff52] rounded-full text-center leading-5 text-[#ffffff99] cursor-pointer",onClick:k},"× ")]),e("div",us,[c(D,{model:t(a),class:"space-y-8",ref_key:"ruleFormRef",ref:y,rules:t(L),"label-position":"top","hide-required-asterisk":""},{default:p(()=>[c(u,{label:"Currrent password",prop:"password"},{default:p(()=>[c(l,{placeholder:"Enter your Currrent password",type:"password",modelValue:t(a).password,"onUpdate:modelValue":n[0]||(n[0]=i=>t(a).password=i),"show-password":"",oncopy:"return false"},{prefix:p(()=>[fs]),_:1},8,["modelValue"])]),_:1}),c(u,{label:"Password",prop:"password_new",onInput:U},{default:p(()=>[c(l,{placeholder:"Enter your password",type:"password",modelValue:t(a).password_new,"onUpdate:modelValue":n[1]||(n[1]=i=>t(a).password_new=i),"show-password":"",oncopy:"return false"},{prefix:p(()=>[ps]),_:1},8,["modelValue"]),e("div",_s,[c(E,{modelValue:t(a).checkList,"onUpdate:modelValue":n[2]||(n[2]=i=>t(a).checkList=i)},{default:p(()=>[(v(!0),w(H,null,X(t(g),(i,A)=>(v(),me(f,{label:i,value:i,key:A},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),c(u,{label:"Confirm Password",prop:"confirm_Password"},{default:p(()=>[c(l,{placeholder:"Enter your password",type:"password",modelValue:t(a).confirm_Password,"onUpdate:modelValue":n[3]||(n[3]=i=>t(a).confirm_Password=i),"show-password":"",oncopy:"return false"},{prefix:p(()=>[ms]),_:1},8,["modelValue"])]),_:1}),c(I,{color:"#D9AF80",round:"",class:"w-full h-full",onClick:n[4]||(n[4]=i=>o(t(y))),loading:t(_)},{default:p(()=>[hs]),_:1},8,["loading"])]),_:1},8,["model","rules"])])])]),_:1},8,["model-value"])]),_:1})])}}});const vs=oe(gs,[["__scopeId","data-v-61317222"]]),J=x=>(ee("data-v-1015373c"),x=x(),se(),x),ws={class:"w-full h-screen bg-black flex flex-col"},xs={class:"w-full flex items-center justify-between flex-wrap adaptation-padding py-5"},ys={class:"flex items-center space-x-10"},bs={class:"flex justify-center items-center gap-2 sm:gap-4 text-white scale-80 transform origin-left lg:scale-100 lg:gap-6 space-x-4"},Cs=["onClick","onMouseenter"],$s=["src"],ks={class:"flex items-center space-x-3"},Es={class:"text-white text-sm sm:text-base"},Fs=J(()=>e("div",{class:"image-slot"},[e("img",{src:q,class:"w-full h-full object-cover"})],-1)),Ps={class:"w-full flex-1 overflow-auto"},Is={key:0,class:"flex items-center w-full h-11 adaptation-padding mb-3 mt-1 announcement-wrapper"},Ds={class:"announcement-content flex items-center space-x-1 link-style"},Vs=J(()=>e("span",{class:"iconfont icon-jinggao text-[#d9af80] text-xl"},null,-1)),Ss=["innerHTML"],Rs=J(()=>e("span",{class:"iconfont icon-del text-white text-xs"},null,-1)),Ls=[Rs],Us=B({__name:"index",setup(x){const P=ge(),y=ve(),C=P.path,b=m(C.replace(/\/$/,"")),_=m(null),g=m(""),a=m(!1),$=m(null),R=m(!1),L=()=>{R.value=!0,_.value&&(_.value.style.animationPlayState="paused")},U=()=>{R.value=!1,_.value&&(_.value.style.animationPlayState="running")},k=Y([{title:"Dashboard",path:"/dashboard"},{title:"Mission& Reward",path:"/missions"},{title:"NFT Coming Soon",path:"/"}]),s=O(),o=m(!1),h=m(!1),d=u=>{u.title!=="NFT Coming Soon"&&(b.value=u.path,N(u.path))},n=()=>{o.value=!1,h.value=!0},l=async()=>{const u=await be();u.code===200&&u.data&&u.data.length>0&&(g.value=u.data[0].announcement,a.value=!0)};return we(()=>{l()}),(u,f)=>{var F;const E=z,I=is,D=vs;return v(),w("div",ws,[e("div",xs,[e("div",ys,[e("img",{src:de,alt:"",class:"w-36 h-12 cursor-pointer",onClick:f[0]||(f[0]=r=>t(y).go(0))}),e("div",bs,[(v(!0),w(H,null,X(t(k),(r,i)=>(v(),w("div",{key:i,class:G(["flex items-center hover:text-[#9E8654]",{"text-[#9E8654]":t(b)===r.path,"text-white":t(b)!==r.path}]),style:Ce({cursor:i===2?"not-allowed":"pointer"}),onClick:A=>d(r),onMouseenter:A=>$.value=i,onMouseleave:f[1]||(f[1]=A=>$.value=null)},[e("img",{src:`/images/public/menu_${i}${t(b)===r.path||t($)===i?"_selected":""}.png`,alt:"",class:"w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"},null,8,$s),e("span",{class:G(["text_family font-bold text-xs sm:text-sm lg:text-base",i===2?"text-[#333]":""])},S(r.title),3)],46,Cs))),128))])]),e("div",ks,[e("div",Es,S((F=t(s).getUserInfo)==null?void 0:F.name),1),e("div",{class:"w-8 h-8 rounded-full overflow-hidden cursor-pointer",onClick:f[2]||(f[2]=r=>o.value=!0)},[c(E,{src:("showFaces"in u?u.showFaces:t(te))(),fit:"cover"},{error:p(()=>[Fs]),_:1},8,["src"])])])]),e("div",Ps,[t(a)?(v(),w("div",Is,[e("div",{class:"w-full h-full multiple-radius relative rounded-lg text-white flex items-center justify-center overflow-hidden",onMouseenter:L,onMouseleave:U},[e("div",{class:"announcement-container flex",ref_key:"announcementContainer",ref:_},[e("div",Ds,[Vs,e("span",{class:"whitespace-nowrap text-lg",innerHTML:t(g)},null,8,Ss)])],512),e("div",{class:"w-5 h-5 bg-white bg-opacity-20 rounded-full absolute top-1/2 -translate-y-1/2 right-2 flex items-center justify-center flex-shrink-0 cursor-pointer close-button",onClick:f[3]||(f[3]=r=>a.value=!t(a))},Ls)],32)])):xe("",!0),ye(u.$slots,"default",{},void 0,!0)]),c(I,{"dialog-visible":t(o),"onUpdate:closeDialog":f[4]||(f[4]=r=>o.value=!1),onChangePassWord:f[5]||(f[5]=r=>n())},null,8,["dialog-visible"]),c(D,{"dialog-visible":t(h),"onUpdate:closeDialog":f[6]||(f[6]=r=>h.value=!1)},null,8,["dialog-visible"])])}}});const Qs=oe(Us,[["__scopeId","data-v-1015373c"]]);export{Qs as default};
