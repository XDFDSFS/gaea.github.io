let t;const e=(e,o=3e3,n=!0)=>{n?t||(t=!0,"function"==typeof e&&e(),setTimeout(()=>{t=!1},o)):t||(t=!0,setTimeout(()=>{t=!1,"function"==typeof e&&e()},o))};export{e as t};
