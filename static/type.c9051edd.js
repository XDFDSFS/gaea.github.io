import{d as w,a as E,r as b,f as C,o as e,c as s,b as t,F as x,C as _,e as o,n as i,t as l,k as p}from"./entry.5ef69f17.js";import{i as S}from"./istpPersonality.74cd3ea6.js";const T={class:"w-full adaptation-padding flex flex-col text-[#EBEBEB] overflow-auto pb-20 card-banner-fitter"},$={class:"w-full pb-[35%] mt-12 bg-black relative border-[1px] border-[#B0B0B0] rounded-lg overflow-hidden"},F=["src"],q={class:"absolute top-1/2 -translate-y-1/2 pl-[8%] space-y-3"},A={class:"w-full h-full flex items-center space-x-1"},I={class:"text-[14px]"},N={class:"text-[46px] font-[700] title-type"},P={class:"w-[60%] text-[20px] break-words description u-line-3"},V={class:"flex flex-col space-y-[82px] mt-[88px] px-40"},j={class:"flex items-center space-x-6"},z=t("div",{class:"w-4 h-4 bg-[#EBEBEB] rotate-45"},null,-1),D={class:"text-[36px] font-[700]"},G={key:0,class:"flex items-center space-x-2"},H={class:"text-[16px] font-[700]"},K={key:1,class:"text-[16px] font-[700] mt-[31px]"},L={key:2,class:"text-[14px] font-[400] text-[#828282]"},M={key:3,class:"flex space-x-1"},R={class:"w-full px-6 py-10 bg-[#171717] flex items-center"},J=t("span",{class:"text-[#EBEBEB] text-[20px]"},"TAKE THE TEST",-1),O=[J],Q=t("div",{class:"text-[16px] font-[400] text-[#828282] mt-4 cursor-pointer"},"Start testing your personality type and get more points rewards",-1),Z=w({__name:"[type]",setup(U){const y=`${E().params.type}`,r=b(),n=b();return C(()=>{var c;r.value=S(`${y}`),n.value=(c=r.value)==null?void 0:c.color}),(c,f)=>{var h,v,m,g,B;return e(),s("div",T,[t("div",$,[t("img",{src:`/images/godhoodId/personalityTypes/${y}-min.png`,alt:"",class:"h-full absolute top-0 right-0 object-right"},null,8,F),t("div",q,[t("div",A,[(e(!0),s(x,null,_((h=o(r))==null?void 0:h.mainBody.tags,(d,u)=>(e(),s("div",{class:"w-fit py-1 px-4 rounded-full",style:i({backgroundColor:o(n)}),key:u},[t("span",I,l(d),1)],4))),128))]),t("div",{class:"text-[80px] font-bold title",style:i({color:o(n)})},l((v=o(r))==null?void 0:v.mainBody.title),5),t("div",N,l((m=o(r))==null?void 0:m.mainBody.type)+" Godhood ",1),t("div",P,l((g=o(r))==null?void 0:g.mainBody.description),1)])]),t("div",V,[(e(!0),s(x,null,_((B=o(r))==null?void 0:B.content,(d,u)=>(e(),s("div",{class:"space-y-[33px]",key:u},[t("div",j,[z,t("p",D,l(d.title),1)]),(e(!0),s(x,null,_(d.contentBlocks,(a,k)=>(e(),s("div",{key:k},[a.type==="quote"?(e(),s("div",G,[t("div",{class:"w-[5px] h-[16px]",style:i({backgroundColor:o(n)})},null,4),t("span",H,l(a.author),1)])):p("",!0),a.type==="quote"?(e(),s("div",K,l(a.text),1)):p("",!0),a.type==="description"?(e(),s("div",L,l(a.text),1)):p("",!0),a.type==="explanatory_note"?(e(),s("div",M,[t("div",{class:"w-[20px] h-auto",style:i({background:o(n)})},null,4),t("div",R,[t("span",{class:"text-[20px] font-[500]",style:i({color:o(n)})},l(a.text),5)])])):p("",!0)]))),128))]))),128)),t("div",null,[t("div",{class:"w-fit py-2 px-3 rounded-full mt-10 cursor-pointer",style:i({backgroundColor:o(n)}),onClick:f[0]||(f[0]=d=>c.$router.push("/godhoodId/theFirstStep"))},O,4),Q])])])}}});export{Z as default};
