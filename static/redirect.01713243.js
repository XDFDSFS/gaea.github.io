import{a4 as o,a1 as i}from"./entry.fafafeab.js";import{u as a}from"./user.379abf3b.js";import{i as n}from"./user.6d8a9344.js";import"./request.c691c4ac.js";import"./godhood.3a1db842.js";const m=o((s,e)=>{const t=a();if(e.query.token){t.setToken(e.query.token);const r=t.getInvitationCode;return e.query.type==="bind"&&r&&n({referral_code:r}),i(`/${e.query.path}`)}});export{m as default};
