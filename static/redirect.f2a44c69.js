import{ak as o,aj as a}from"./entry.751b5d57.js";import{u as i}from"./user.05d5e88f.js";import{h as n}from"./user.c9786568.js";import"./request.c38445d0.js";const c=o((s,e)=>{const t=i();if(e.query.token){t.setToken(e.query.token);const r=t.getInvitationCode;return e.query.type==="bind"&&r&&n({referral_code:r}),a(`/${e.query.path}`)}});export{c as default};
