import{ak as o,aj as a}from"./entry.8fd751a5.js";import{u as i}from"./user.fd0a50e1.js";import{h as n}from"./user.c4ffafd1.js";import"./request.a73e4916.js";const c=o((s,e)=>{const t=i();if(e.query.token){t.setToken(e.query.token);const r=t.getInvitationCode;return e.query.type==="bind"&&r&&n({referral_code:r}),a(`/${e.query.path}`)}});export{c as default};
