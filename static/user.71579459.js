import{P as t,G as n}from"./request.d17b4437.js";const e=a=>t("/api/auth/login",a),r=a=>t("/api/auth/register",a),u=a=>t("/api/auth/forget-password",a),i=()=>t("/api/auth/session"),o=a=>t("/api/auth/change-password",a),h=a=>t("/api/auth/reset-password",a),c=a=>t("/api/validate/email",a),d=a=>t("/api/validate/username",a),p=a=>t("/api/auth/change-email",a),g=()=>n("/api/notify/announcement"),l=()=>n("/api/auth/google/auth"),m=a=>t("/api/bind/referral",a),b=()=>n("/api/auth/unbind/x"),f=()=>n("/api/auth/unbind/discord"),w=a=>t("/api/auth/unbind/address",a),v=a=>t("/api/auth/change-username",a);export{i as a,e as b,p as c,d,r as e,u as f,l as g,h,m as i,v as j,f as k,b as l,w as m,o as n,g as o,c as v};
