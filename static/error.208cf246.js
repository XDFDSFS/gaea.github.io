import{d as l,u as i,a as d,o as p,c as u,b as e,t as a,e as s,_}from"./entry.7f1c9673.js";const x={class:"w-full h-screen bg-black flex flex-col items-center justify-center space-y-4"},f=e("div",{class:"w-[350px] h-[350px]"},[e("img",{src:_,alt:"error",class:"w-full h-full object-contain"})],-1),h={class:"text-white text-3xl font-bold"},b={class:"text-[#666] text-lg font-bold"},k=l({__name:"error",setup(m){const n=i(),t=d(),c=t==null?void 0:t.query.error,o=JSON.parse(atob(c));return console.log(o),(g,r)=>(p(),u("div",x,[f,e("h1",h,a(s(o).code),1),e("p",b,a(s(o).msg),1),e("div",{class:"text-white text-lg font-bold cursor-pointer border border-white px-10 py-1 transition-all duration-300 hover:bg-white hover:text-black",onClick:r[0]||(r[0]=w=>s(n).push("/"))}," HOME ")]))}});export{k as default};
