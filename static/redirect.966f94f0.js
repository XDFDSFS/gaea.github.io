import{ak as o,aj as a}from"./entry.a1fec27a.js";import{u as i}from"./user.db4b302c.js";import{i as n}from"./user.92b181cd.js";const p=o((s,e)=>{const t=i();if(e.query.token){t.setToken(e.query.token);const r=t.getInvitationCode;return e.query.type==="bind"&&r&&n({referral_code:r}),a(`/${e.query.path}`)}});export{p as default};