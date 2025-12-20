import{z as ot,w as at,h as nt,A as rt,c as it,_ as P,o as st}from"./entry.83559e40.js";import{u as lt}from"./index.56fac23a.js";import{S as ct,P as mt,W as dt,C as I,V as ft,a as g,B as L,F as v,b as D,A as B,c as U,T as ut,d as ht}from"./three.module.e8748a2b.js";const pt={id:"container",class:"w-full h-full absolute top-0 left-0 cursor-pointer"},b=5e3,W=0,C=5e3,gt=.03,xt={__name:"demo",setup(vt){const F=ot();let M,x,p,y,h,c,d,w,E=null,H=0,R=!1,z=0,A=null;at(()=>F.getParticles,e=>{e!==void 0&&e>=0&&e<S.length&&(N(e),H=e)},{deep:!0});function k(e,o){if(e.length===0)return[];const t=new ht().setFromPoints(e),i=Math.max(...t.getSize(new g).toArray())||1,r=t.getCenter(new g);return e.map(a=>a.clone().sub(r).multiplyScalar(o/i))}function N(e){if(!c||!d)return;const o=S[e](b),t=c.geometry.attributes.position.array,i=d.geometry.attributes.position.array;for(let r=0;r<b;r++){const a=r*3,n=o[r]||new g;t[a]=n.x,t[a+1]=n.y,t[a+2]=n.z,r<W&&(i[a]=n.x,i[a+1]=n.y,i[a+2]=n.z)}c.geometry.attributes.position.needsUpdate=!0,d.geometry.attributes.position.needsUpdate=!0}function G(e){const o=new ut(10,3,200,16,2,3),t=[],i=o.attributes.position;for(let a=0;a<i.count;a++)t.push(new g().fromBufferAttribute(i,a));const r=[];for(let a=0;a<e;a++)r.push(t[a%t.length].clone());return k(r,55)}function K(e){const o=[];let t=.1,i=0,r=0;const a=1.89,n=.005;for(let s=0;s<e*25;s++){const l=-a*t-4*i-4*r-i*i,m=-a*i-4*r-4*t-r*r,u=-a*r-4*t-4*i-t*t;if(t+=l*n,i+=m*n,r+=u*n,s>200&&s%25===0&&o.push(new g(t,i,r)),o.length>=e)break}for(;o.length<e;)o.push(o[Math.floor(Math.random()*o.length)].clone());return k(o,55)}function Y(e){const o=[];let t=.1,i=.1;const r=1.4,a=-2.3,n=2.4,s=-2.1;for(let l=0;l<e;l++){const m=Math.sin(r*i)-Math.cos(a*t),u=Math.sin(n*t)-Math.cos(s*i);t=m,i=u;const f=Math.sin(t*i*.5);o.push(new g(t,i,f))}return k(o,50)}function q(e){const o=[];for(let a=0;a<e*.9;a++){const s=Math.floor(Math.random()*5)*15-5*15/2+Math.random()*15,m=20*(1-(s+5*15/2)/(5*15+5)),u=Math.random()*Math.PI*2,f=Math.random()*m,_=Math.cos(u)*f,et=Math.sin(u)*f;o.push(new g(_,s,et))}for(let a=0;a<e*.1;a++){const n=-37.5+Math.random()*5-2.5,s=Math.random()*Math.PI*2,l=Math.random()*2,m=Math.cos(s)*l,u=Math.sin(s)*l;o.push(new g(m,n,u))}for(o.push(new g(0,5*15/2+3,0));o.length<e;)o.push(new g((Math.random()-.5)*20,(Math.random()-.5)*40,(Math.random()-.5)*20));return k(o,55)}const S=[Y,K,G,q];function J(){const e=new L,o=new Float32Array(C*3),t=new Float32Array(C*3),i=new Float32Array(C),r=new Float32Array(C),a=900;for(let s=0;s<C;s++){const l=s*3,m=Math.random()*2*Math.PI,u=Math.acos(2*Math.random()-1),f=a*Math.cbrt(Math.random());o[l]=f*Math.sin(u)*Math.cos(m),o[l+1]=f*Math.sin(u)*Math.sin(m),o[l+2]=f*Math.cos(u);const _=new I().setHSL(Math.random()*.6,.3+.3*Math.random(),.55+.35*Math.random());t[l]=_.r,t[l+1]=_.g,t[l+2]=_.b,i[s]=.25+Math.pow(Math.random(),4)*2.1,r[s]=Math.random()*Math.PI*2}e.setAttribute("position",new v(o,3)),e.setAttribute("color",new v(t,3)),e.setAttribute("size",new v(i,1)),e.setAttribute("random",new v(r,1));const n=new D({uniforms:{time:{value:0}},vertexShader:`
      attribute float size;
      attribute float random;
      varying vec3 vColor;
      varying float vRnd;
      void main(){
        vColor = color;
        vRnd = random;
        vec4 mv = modelViewMatrix * vec4(position, 1.);
        gl_PointSize = size * (250./-mv.z);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform float time;
      varying vec3 vColor;
      varying float vRnd;
      void main(){
        vec2 uv = gl_PointCoord-.5;
        float d = length(uv);
        float a = 1.-smoothstep(.4,.5,d);
        a *= .7+.3*sin(time*(.6+vRnd*.3)+vRnd*5.);
        if(a<.02)discard;
        gl_FragColor = vec4(vColor,a);
      }
    `,transparent:!0,depthWrite:!1,vertexColors:!0,blending:B});return new U(e,n)}function Z(e,o){const t=new L,i=new Float32Array(e*3),r=new Float32Array(e*3),a=new Float32Array(e),n=new Float32Array(e*3);for(let l=0;l<e;l++){const m=l*3,u=o[Math.random()*o.length|0],f={h:0,s:0,l:0};u.getHSL(f),f.h+=(Math.random()-.5)*.05,f.s=Math.min(1,Math.max(.7,f.s+(Math.random()-.5)*.3)),f.l=Math.min(.9,Math.max(.5,f.l+(Math.random()-.5)*.4));const _=new I().setHSL(f.h,f.s,f.l);r[m]=_.r,r[m+1]=_.g,r[m+2]=_.b,a[l]=.7+Math.random()*1.1,n[m]=Math.random()*10,n[m+1]=Math.random()*Math.PI*2,n[m+2]=.5+.5*Math.random()}t.setAttribute("position",new v(i,3)),t.setAttribute("color",new v(r,3)),t.setAttribute("size",new v(a,1)),t.setAttribute("random",new v(n,3));const s=new D({uniforms:{time:{value:0},hueSpeed:{value:.12}},vertexShader:`
      uniform float time;
      attribute float size;
      attribute vec3 random;
      varying vec3 vCol;
      varying float vR;
      void main(){
        vCol = color;
        vR = random.z;
        vec3 p = position;
        float t = time*.25*random.z;
        float ax = t+random.y, ay = t*.75+random.x;
        float amp = (.6+sin(random.x+t*.6)*.3)*random.z;
        p.x += sin(ax+p.y*.06+random.x*.1)*amp;
        p.y += cos(ay+p.z*.06+random.y*.1)*amp;
        p.z += sin(ax*.85+p.x*.06+random.z*.1)*amp;
        vec4 mv = modelViewMatrix*vec4(p,1.);
        float pulse = .9+.1*sin(time*1.15+random.y);
        gl_PointSize = size*pulse*(350./-mv.z);
        gl_Position = projectionMatrix*mv;
      }
    `,fragmentShader:`
      uniform float time;
      uniform float hueSpeed;
      varying vec3 vCol;
      varying float vR;
      
      vec3 hueShift(vec3 c, float h) {
        const vec3 k = vec3(0.57735);
        float cosA = cos(h);
        float sinA = sin(h);
        return c * cosA + cross(k, c) * sinA + k * dot(k, c) * (1.0 - cosA);
      }
      
      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        
        float core = smoothstep(0.05, 0.0, d);
        float angle = atan(uv.y, uv.x);
        float flare = pow(max(0.0, sin(angle * 6.0 + time * 2.0 * vR)), 4.0);
        flare *= smoothstep(0.5, 0.0, d);
        float glow = smoothstep(0.4, 0.1, d);
        
        float alpha = core * 1.0 + flare * 0.5 + glow * 0.2;
        
        vec3 color = hueShift(vCol, time * hueSpeed);
        vec3 finalColor = mix(color, vec3(1.0, 0.95, 0.9), core);
        finalColor = mix(finalColor, color, flare * 0.5 + glow * 0.5);
        
        if (alpha < 0.01) discard;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `,transparent:!0,depthWrite:!1,vertexColors:!0,blending:B});return new U(t,s)}function Q(e){const o=new L,t=new Float32Array(e*3),i=new Float32Array(e),r=new Float32Array(e*3);for(let n=0;n<e;n++)i[n]=.5+Math.random()*.8,r[n*3]=Math.random()*10,r[n*3+1]=Math.random()*Math.PI*2,r[n*3+2]=.5+.5*Math.random();o.setAttribute("position",new v(t,3)),o.setAttribute("size",new v(i,1)),o.setAttribute("random",new v(r,3));const a=new D({uniforms:{time:{value:0}},vertexShader:`
      uniform float time;
      attribute float size;
      attribute vec3 random;
      void main() {
        vec3 p = position;
        float t = time * 0.25 * random.z;
        float ax = t + random.y, ay = t * 0.75 + random.x;
        float amp = (0.6 + sin(random.x + t * 0.6) * 0.3) * random.z;
        p.x += sin(ax + p.y * 0.06 + random.x * 0.1) * amp;
        p.y += cos(ay + p.z * 0.06 + random.y * 0.1) * amp;
        p.z += sin(ax * 0.85 + p.x * 0.06 + random.z * 0.1) * amp;
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform float time;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        float alpha = 1.0 - smoothstep(0.4, 0.5, d);
        if (alpha < 0.01) discard;
        gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
      }
    `,transparent:!0,depthWrite:!1,blending:B});return new U(o,a)}async function X(){V();const{OrbitControls:e}=await P(()=>import("./OrbitControls.8b0f79c0.js"),["./OrbitControls.8b0f79c0.js","./three.module.e8748a2b.js"],import.meta.url),{EffectComposer:o}=await P(()=>import("./EffectComposer.fab6f54c.js"),["./EffectComposer.fab6f54c.js","./three.module.e8748a2b.js","./CopyShader.dda41788.js","./Pass.1dfb4361.js"],import.meta.url),{RenderPass:t}=await P(()=>import("./RenderPass.ace54276.js"),["./RenderPass.ace54276.js","./three.module.e8748a2b.js","./Pass.1dfb4361.js"],import.meta.url),{UnrealBloomPass:i}=await P(()=>import("./UnrealBloomPass.d49c04d8.js"),["./UnrealBloomPass.d49c04d8.js","./three.module.e8748a2b.js","./Pass.1dfb4361.js","./CopyShader.dda41788.js"],import.meta.url),{AfterimagePass:r}=await P(()=>import("./AfterimagePass.e91e8a20.js"),["./AfterimagePass.e91e8a20.js","./three.module.e8748a2b.js","./Pass.1dfb4361.js","./CopyShader.dda41788.js"],import.meta.url),{Clock:a}=await P(()=>import("./three.module.e8748a2b.js").then(m=>m.e),[],import.meta.url);M=new ct,x=new mt(60,window.innerWidth/window.innerHeight,40,500),x.position.set(0,0,80),p=new dt({antialias:!0,alpha:!0}),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.setSize(window.innerWidth,window.innerHeight);const n=document.getElementById("container");if(n){n.innerHTML="",n.appendChild(p.domElement);const m=n.clientWidth,u=n.clientHeight;x.aspect=m/u,x.updateProjectionMatrix(),p.setSize(m,u)}h=new e(x,p.domElement),h.enablePan=!1,h.enableZoom=!1,h.enableRotate=!1,h.enableDamping=!0,h.dampingFactor=.05,h.screenSpacePanning=!1,h.minDistance=20,h.maxDistance=200,h.target.set(0,0,0),h.autoRotate=!0,h.autoRotateSpeed=.5,w=J(),M.add(w);const s=[16727160,16747520,16773632,53247,11796735,16777215,16728128].map(m=>new I(m));c=Z(b,s),d=Q(W),M.add(c),M.add(d),y=new o(p),y.addPass(new t(M,x)),y.addPass(new i(new ft(window.innerWidth,window.innerHeight),.45,.5,.85));const l=new r;l.uniforms.damp.value=.92,y.addPass(l),$(H),window.addEventListener("resize",O),n&&n.addEventListener("click",j),E=new a}function O(){if(!x||!p||!y)return;const e=document.getElementById("container");if(e){const o=e.clientWidth,t=e.clientHeight;x.aspect=o/t,x.updateProjectionMatrix(),p.setSize(o,t),y.setSize(o,t)}}function j(){R||tt()}function $(e){if(!c||!d)return;const o=S[e](b),t=c.geometry.attributes.position.array,i=d.geometry.attributes.position.array;for(let r=0;r<b;r++){const a=r*3,n=o[r]||new g;t[a]=n.x,t[a+1]=n.y,t[a+2]=n.z,r<W&&(i[a]=n.x,i[a+1]=n.y,i[a+2]=n.z)}c.geometry.attributes.position.needsUpdate=!0,d.geometry.attributes.position.needsUpdate=!0}function tt(){if(!c||!d)return;R=!0,z=0;const e=(F.getParticles+1)%S.length,o=c.geometry.attributes.position.array.slice(),t=S[e](b);F.setParticles(e);const i=new Float32Array(b*3);if(t.length>0){for(let r=0;r<b;r++){const a=r*3,n=t[r];i[a]=n.x,i[a+1]=n.y,i[a+2]=n.z}c.userData={from:o,to:i,next:e},d.userData={from:o,to:i,next:e}}}function T(){if(A=requestAnimationFrame(T),!E||!c||!d||!y)return;const e=E.getDelta(),o=E.getElapsedTime();if(h&&h.update(),c.material.uniforms&&(c.material.uniforms.time.value=o),d.material.uniforms&&(d.material.uniforms.time.value=o),w.material.uniforms&&(w.material.uniforms.time.value=o),R){z+=gt;const t=z>=1?1:1-Math.pow(1-z,3),{from:i,to:r}=c.userData;if(r){const a=c.geometry.attributes.position.array,n=d.geometry.attributes.position.array;for(let s=0;s<a.length;s++){const l=i[s]+(r[s]-i[s])*t;a[s]=l,s<n.length&&(n[s]=l)}c.geometry.attributes.position.needsUpdate=!0,d.geometry.attributes.position.needsUpdate=!0}z>=1&&(H=c.userData.next,R=!1)}y.render(e)}function V(){A&&(cancelAnimationFrame(A),A=null),window.removeEventListener("resize",O);const e=document.getElementById("container");if(e&&e.removeEventListener("click",j),c&&(c.geometry.dispose(),c.material instanceof Array?c.material.forEach(t=>t.dispose()):c.material&&c.material.dispose()),d&&(d.geometry.dispose(),d.material instanceof Array?d.material.forEach(t=>t.dispose()):d.material&&d.material.dispose()),w&&(w.geometry.dispose(),w.material instanceof Array?w.material.forEach(t=>t.dispose()):w.material&&w.material.dispose()),M)for(;M.children.length>0;)M.remove(M.children[0]);p&&p.dispose(),y&&y.passes.forEach(t=>{t.dispose()});const o=document.getElementById("container");o&&(o.innerHTML="")}return nt(()=>{X().then(()=>{T()})}),rt(()=>{V()}),lt(document,"visibilitychange",()=>{document.hidden?A&&(cancelAnimationFrame(A),A=null):A||T()}),(e,o)=>(st(),it("div",pt))}};export{xt as default};
