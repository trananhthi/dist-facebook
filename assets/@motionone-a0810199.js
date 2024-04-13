import{g as le}from"./@emotion-1f636ee4.js";import{_ as Q}from"./tslib-43d931d7.js";import{i as ue}from"./hey-listen-6de657d8.js";class fe{setAnimation(e){this.animation=e,e==null||e.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const st=new WeakMap;function pt(t){return st.has(t)||st.set(t,{transforms:[],values:new Map}),st.get(t)}function de(t,e){return t.has(e)||t.set(e,new fe),t.get(e)}function Ut(t,e){t.indexOf(e)===-1&&t.push(e)}function kt(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Kt=(t,e,n)=>Math.min(Math.max(n,t),e),x={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},D=t=>typeof t=="number",q=t=>Array.isArray(t)&&!D(t[0]),he=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};function Nt(t,e){return q(t)?t[he(0,t.length,e)]:t}const gt=(t,e,n)=>-n*t+n*e+t,mt=()=>{},M=t=>t,Y=(t,e,n)=>e-t===0?1:(n-t)/(e-t);function vt(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const s=Y(0,e,i);t.push(gt(n,1,s))}}function yt(t){const e=[0];return vt(e,t-1),e}function Zt(t,e=yt(t.length),n=M){const i=t.length,s=i-e.length;return s>0&&vt(e,s),r=>{let o=0;for(;o<i-2&&!(r<e[o+1]);o++);let f=Kt(0,1,Y(e[o],e[o+1],r));return f=Nt(n,o)(f),gt(t[o],t[o+1],f)}}const Xt=t=>Array.isArray(t)&&D(t[0]),Z=t=>typeof t=="object"&&!!t.createAnimation,pe=t=>typeof t=="function",wt=t=>typeof t=="string",P={ms:t=>t*1e3,s:t=>t/1e3};function Jt(t,e){return e?t*(1e3/e):0}const ge=["","X","Y","Z"],me=["translate","scale","rotate","skew"],_={x:"translateX",y:"translateY",z:"translateZ"},Mt={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},ve={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:Mt,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:M},skew:Mt},B=new Map,tt=t=>`--motion-${t}`,X=["x","y","z"];me.forEach(t=>{ge.forEach(e=>{X.push(t+e),B.set(tt(t+e),ve[t])})});const ye=(t,e)=>X.indexOf(t)-X.indexOf(e),we=new Set(X),et=t=>we.has(t),Ee=(t,e)=>{_[e]&&(e=_[e]);const{transforms:n}=pt(t);Ut(n,e),t.style.transform=Qt(n)},Qt=t=>t.sort(ye).reduce(Te,"").trim(),Te=(t,e)=>`${t} ${e}(var(${tt(e)}))`,lt=t=>t.startsWith("--"),Dt=new Set;function be(t){if(!Dt.has(t)){Dt.add(t);try{const{syntax:e,initialValue:n}=B.has(t)?B.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:n})}catch{}}}const Yt=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Ae=1e-7,Oe=12;function Se(t,e,n,i,s){let r,o,f=0;do o=e+(n-e)/2,r=Yt(o,i,s)-t,r>0?n=o:e=o;while(Math.abs(r)>Ae&&++f<Oe);return o}function H(t,e,n,i){if(t===e&&n===i)return M;const s=r=>Se(r,0,1,t,n);return r=>r===0||r===1?r:Yt(s(r),e,i)}const xe=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);const i=n*t,s=e==="end"?Math.floor(i):Math.ceil(i);return Kt(0,1,s/t)},Lt={ease:H(.25,.1,.25,1),"ease-in":H(.42,0,1,1),"ease-in-out":H(.42,0,.58,1),"ease-out":H(0,0,.58,1)},Me=/\((.*?)\)/;function ut(t){if(pe(t))return t;if(Xt(t))return H(...t);if(Lt[t])return Lt[t];if(t.startsWith("steps")){const e=Me.exec(t);if(e){const n=e[1].split(",");return xe(parseFloat(n[0]),n[1].trim())}}return M}class De{constructor(e,n=[0,1],{easing:i,duration:s=x.duration,delay:r=x.delay,endDelay:o=x.endDelay,repeat:f=x.repeat,offset:d,direction:c="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=M,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((l,p)=>{this.resolve=l,this.reject=p}),i=i||x.easing,Z(i)){const l=i.createAnimation(n);i=l.easing,n=l.keyframes||n,s=l.duration||s}this.repeat=f,this.easing=q(i)?M:ut(i),this.updateDuration(s);const u=Zt(n,d,q(i)?i.map(ut):M);this.tick=l=>{var p;r=r;let m=0;this.pauseTime!==void 0?m=this.pauseTime:m=(l-this.startTime)*this.rate,this.t=m,m/=1e3,m=Math.max(m-r,0),this.playState==="finished"&&this.pauseTime===void 0&&(m=this.totalDuration);const y=m/this.duration;let h=Math.floor(y),g=y%1;!g&&y>=1&&(g=1),g===1&&h--;const b=h%2;(c==="reverse"||c==="alternate"&&b||c==="alternate-reverse"&&!b)&&(g=1-g);const E=m>=this.totalDuration?1:Math.min(g,1),A=u(this.easing(E));e(A),this.pauseTime===void 0&&(this.playState==="finished"||m>=this.totalDuration+o)?(this.playState="finished",(p=this.resolve)===null||p===void 0||p.call(this,A)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},this.play()}play(){const e=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=e-this.pauseTime:this.startTime||(this.startTime=e),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var e;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(e=this.reject)===null||e===void 0||e.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(e){this.duration=e,this.totalDuration=e*(this.repeat+1)}get currentTime(){return this.t}set currentTime(e){this.pauseTime!==void 0||this.rate===0?this.pauseTime=e:this.startTime=performance.now()-e/this.rate}get playbackRate(){return this.rate}set playbackRate(e){this.rate=e}}const zt=t=>Xt(t)?Le(t):t,Le=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Rt=t=>document.createElement("div").animate(t,{duration:.001}),Ft={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{Rt({opacity:[1]})}catch{return!1}return!0},finished:()=>!!Rt({opacity:[0,1]}).finished},rt={},U={};for(const t in Ft)U[t]=()=>(rt[t]===void 0&&(rt[t]=Ft[t]()),rt[t]);function ze(t,e){for(let n=0;n<t.length;n++)t[n]===null&&(t[n]=n?t[n-1]:e());return t}const te=t=>Array.isArray(t)?t:[t];function J(t){return _[t]&&(t=_[t]),et(t)?tt(t):t}const W={get:(t,e)=>{e=J(e);let n=lt(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!n&&n!==0){const i=B.get(e);i&&(n=i.initialValue)}return n},set:(t,e,n)=>{e=J(e),lt(e)?t.style.setProperty(e,n):t.style[e]=n}};function ee(t,e=!0){if(!(!t||t.playState==="finished"))try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch{}}function Re(){return window.__MOTION_DEV_TOOLS_RECORD}function nt(t,e,n,i={}){const s=Re(),r=i.record!==!1&&s;let o,{duration:f=x.duration,delay:d=x.delay,endDelay:c=x.endDelay,repeat:u=x.repeat,easing:l=x.easing,direction:p,offset:m,allowWebkitAcceleration:y=!1}=i;const h=pt(t);let g=U.waapi();const b=et(e);b&&Ee(t,e);const E=J(e),A=de(h.values,E),T=B.get(E);return ee(A.animation,!(Z(l)&&A.generator)&&i.record!==!1),()=>{const O=()=>{var a,v;return(v=(a=W.get(t,E))!==null&&a!==void 0?a:T==null?void 0:T.initialValue)!==null&&v!==void 0?v:0};let w=ze(te(n),O);if(Z(l)){const a=l.createAnimation(w,O,b,E,A);l=a.easing,a.keyframes!==void 0&&(w=a.keyframes),a.duration!==void 0&&(f=a.duration)}if(lt(E)&&(U.cssRegisterProperty()?be(E):g=!1),g){T&&(w=w.map(S=>D(S)?T.toDefaultUnit(S):S)),w.length===1&&(!U.partialKeyframes()||r)&&w.unshift(O());const a={delay:P.ms(d),duration:P.ms(f),endDelay:P.ms(c),easing:q(l)?void 0:zt(l),direction:p,iterations:u+1,fill:"both"};o=t.animate({[E]:w,offset:m,easing:q(l)?l.map(zt):void 0},a),o.finished||(o.finished=new Promise((S,L)=>{o.onfinish=S,o.oncancel=L}));const v=w[w.length-1];o.finished.then(()=>{W.set(t,E,v),o.cancel()}).catch(mt),y||(o.playbackRate=1.000001)}else if(b){w=w.map(v=>typeof v=="string"?parseFloat(v):v),w.length===1&&w.unshift(parseFloat(O()));const a=v=>{T&&(v=T.toDefaultUnit(v)),W.set(t,E,v)};o=new De(a,w,Object.assign(Object.assign({},i),{duration:f,easing:l}))}else{const a=w[w.length-1];W.set(t,E,T&&D(a)?T.toDefaultUnit(a):a)}return r&&s(t,e,w,{duration:f,delay:d,easing:l,repeat:u,offset:m},"motion-one"),A.setAnimation(o),o}}const Et=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);function it(t,e){var n;return typeof t=="string"?e?((n=e[t])!==null&&n!==void 0||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const Fe=t=>t(),Tt=(t,e,n=x.duration)=>new Proxy({animations:t.map(Fe).filter(Boolean),duration:n,options:e},We),Pe=t=>t.animations[0],We={get:(t,e)=>{const n=Pe(t);switch(e){case"duration":return t.duration;case"currentTime":return P.s((n==null?void 0:n[e])||0);case"playbackRate":case"playState":return n==null?void 0:n[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(Ie)).catch(mt)),t.finished;case"stop":return()=>{t.animations.forEach(i=>ee(i))};case"forEachNative":return i=>{t.animations.forEach(s=>i(s,t))};default:return typeof(n==null?void 0:n[e])>"u"?void 0:()=>t.animations.forEach(i=>i[e]())}},set:(t,e,n)=>{switch(e){case"currentTime":n=P.ms(n);case"currentTime":case"playbackRate":for(let i=0;i<t.animations.length;i++)t.animations[i][e]=n;return!0}return!1}},Ie=t=>t.finished;function _e(t=.1,{start:e=0,from:n=0,easing:i}={}){return(s,r)=>{const o=D(n)?n:Be(n,r),f=Math.abs(o-s);let d=t*f;if(i){const c=r*t;d=ut(i)(d/c)*c}return e+d}}function Be(t,e){if(t==="first")return 0;{const n=e-1;return t==="last"?n:n/2}}function ne(t,e,n){return typeof t=="function"?t(e,n):t}function Ce(t,e,n={}){t=it(t);const i=t.length,s=[];for(let r=0;r<i;r++){const o=t[r];for(const f in e){const d=Et(n,f);d.delay=ne(d.delay,r,i);const c=nt(o,f,e[f],d);s.push(c)}}return Tt(s,n,n.duration)}function Pt(t,e,n,i){var s;return D(e)?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?n:(s=i.get(e))!==null&&s!==void 0?s:t}function $e(t,e,n){for(let i=0;i<t.length;i++){const s=t[i];s.at>e&&s.at<n&&(kt(t,s),i--)}}function je(t,e,n,i,s,r){$e(t,s,r);for(let o=0;o<e.length;o++)t.push({value:e[o],at:gt(s,r,i[o]),easing:Nt(n,o)})}function He(t,e){return t.at===e.at?t.value===null?1:-1:t.at-e.at}function Ve(t,e={}){var n;const i=qe(t,e),s=i.map(r=>nt(...r)).filter(Boolean);return Tt(s,e,(n=i[0])===null||n===void 0?void 0:n[3].duration)}function qe(t,e={}){var{defaultOptions:n={}}=e,i=Q(e,["defaultOptions"]);const s=[],r=new Map,o={},f=new Map;let d=0,c=0,u=0;for(let l=0;l<t.length;l++){const p=t[l];if(wt(p)){f.set(p,c);continue}else if(!Array.isArray(p)){f.set(p.name,Pt(c,p.at,d,f));continue}const[m,y,h={}]=p;h.at!==void 0&&(c=Pt(c,h.at,d,f));let g=0;const b=it(m,o),E=b.length;for(let A=0;A<E;A++){const T=b[A],O=Ge(T,r);for(const w in y){const a=Ue(w,O);let v=te(y[w]);const S=Et(h,w);let{duration:L=n.duration||x.duration,easing:F=n.easing||x.easing}=S;if(Z(F)){const xt=et(w);ue(v.length===2||!xt);const $=F.createAnimation(v,()=>"0",xt);F=$.easing,$.keyframes!==void 0&&(v=$.keyframes),$.duration!==void 0&&(L=$.duration)}const G=ne(h.delay,A,E)||0,At=c+G,Ot=At+L;let{offset:C=yt(v.length)}=S;C.length===1&&C[0]===0&&(C[1]=1);const St=length-v.length;St>0&&vt(C,St),v.length===1&&v.unshift(null),je(a,v,F,C,At,Ot),g=Math.max(G+L,g),u=Math.max(Ot,u)}}d=c,c+=g}return r.forEach((l,p)=>{for(const m in l){const y=l[m];y.sort(He);const h=[],g=[],b=[];for(let E=0;E<y.length;E++){const{at:A,value:T,easing:O}=y[E];h.push(T),g.push(Y(0,u,A)),b.push(O||x.easing)}g[0]!==0&&(g.unshift(0),h.unshift(h[0]),b.unshift("linear")),g[g.length-1]!==1&&(g.push(1),h.push(null)),s.push([p,m,h,Object.assign(Object.assign(Object.assign({},n),{duration:u,easing:b,offset:g}),i)])}}),s}function Ge(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function Ue(t,e){return e[t]||(e[t]=[]),e[t]}const ke=5;function bt(t,e,n){const i=Math.max(e-ke,0);return Jt(n-t(i),e-i)}const I={stiffness:100,damping:10,mass:1},Ke=(t=I.stiffness,e=I.damping,n=I.mass)=>e/(2*Math.sqrt(t*n));function Ne(t,e,n){return t<e&&n>=e||t>e&&n<=e}const ie=({stiffness:t=I.stiffness,damping:e=I.damping,mass:n=I.mass,from:i=0,to:s=1,velocity:r=0,restSpeed:o=2,restDistance:f=.5}={})=>{r=r?P.s(r):0;const d={done:!1,hasReachedTarget:!1,current:i,target:s},c=s-i,u=Math.sqrt(t/n)/1e3,l=Ke(t,e,n);let p;if(l<1){const m=u*Math.sqrt(1-l*l);p=y=>s-Math.exp(-l*u*y)*((-r+l*u*c)/m*Math.sin(m*y)+c*Math.cos(m*y))}else p=m=>s-Math.exp(-u*m)*(c+(-r+u*c)*m);return m=>{d.current=p(m);const y=m===0?r:bt(p,m,d.current),h=Math.abs(y)<=o,g=Math.abs(s-d.current)<=f;return d.done=h&&g,d.hasReachedTarget=Ne(i,s,d.current),d}},Ze=({from:t=0,velocity:e=0,power:n=.8,decay:i=.325,bounceDamping:s,bounceStiffness:r,changeTarget:o,min:f,max:d,restDistance:c=.5,restSpeed:u})=>{i=P.ms(i);const l={hasReachedTarget:!1,done:!1,current:t,target:t},p=a=>f!==void 0&&a<f||d!==void 0&&a>d,m=a=>f===void 0?d:d===void 0||Math.abs(f-a)<Math.abs(d-a)?f:d;let y=n*e;const h=t+y,g=o===void 0?h:o(h);l.target=g,g!==h&&(y=g-t);const b=a=>-y*Math.exp(-a/i),E=a=>g+b(a),A=a=>{const v=b(a),S=E(a);l.done=Math.abs(v)<=c,l.current=l.done?g:S};let T,O;const w=a=>{p(l.current)&&(T=a,O=ie({from:l.current,to:m(l.current),velocity:bt(E,a,l.current),damping:s,stiffness:r,restDistance:c,restSpeed:u}))};return w(0),a=>{let v=!1;return!O&&T===void 0&&(v=!0,A(a),w(a)),T!==void 0&&a>T?(l.hasReachedTarget=!0,O(a-T)):(l.hasReachedTarget=!1,!v&&A(a),l)}},ot=10,Xe=1e4;function Je(t,e=M){let n,i=ot,s=t(0);const r=[e(s.current)];for(;!s.done&&i<Xe;)s=t(i),r.push(e(s.done?s.target:s.current)),n===void 0&&s.hasReachedTarget&&(n=i),i+=ot;const o=i-ot;return r.length===1&&r.push(s.current),{keyframes:r,duration:o/1e3,overshootDuration:(n??o)/1e3}}function se(t){const e=new WeakMap;return(n={})=>{const i=new Map,s=(o=0,f=100,d=0,c=!1)=>{const u=`${o}-${f}-${d}-${c}`;return i.has(u)||i.set(u,t(Object.assign({from:o,to:f,velocity:d,restSpeed:c?.05:2,restDistance:c?.01:.5},n))),i.get(u)},r=o=>(e.has(o)||e.set(o,Je(o)),e.get(o));return{createAnimation:(o,f,d,c,u)=>{var l,p;let m;const y=o.length;if(d&&y<=2&&o.every(Qe)){const g=o[y-1],b=y===1?null:o[0];let E=0,A=0;const T=u==null?void 0:u.generator;if(T){const{animation:a,generatorStartTime:v}=u,S=(a==null?void 0:a.startTime)||v||0,L=(a==null?void 0:a.currentTime)||performance.now()-S,F=T(L).current;A=(l=b)!==null&&l!==void 0?l:F,(y===1||y===2&&o[0]===null)&&(E=bt(G=>T(G).current,L,F))}else A=(p=b)!==null&&p!==void 0?p:parseFloat(f());const O=s(A,g,E,c==null?void 0:c.includes("scale")),w=r(O);m=Object.assign(Object.assign({},w),{easing:"linear"}),u&&(u.generator=O,u.generatorStartTime=performance.now())}else m={easing:"ease",duration:r(s(0,100)).overshootDuration};return m}}}}const Qe=t=>typeof t!="string",Ye=se(ie),tn=se(Ze),en={any:0,all:1};function re(t,e,{root:n,margin:i,amount:s="any"}={}){if(typeof IntersectionObserver>"u")return()=>{};const r=it(t),o=new WeakMap,f=c=>{c.forEach(u=>{const l=o.get(u.target);if(u.isIntersecting!==!!l)if(u.isIntersecting){const p=e(u);typeof p=="function"?o.set(u.target,p):d.unobserve(u.target)}else l&&(l(u),o.delete(u.target))})},d=new IntersectionObserver(f,{root:n,rootMargin:i,threshold:typeof s=="number"?s:en[s]});return r.forEach(c=>d.observe(c)),()=>d.disconnect()}const k=new WeakMap;let z;function nn(t,e){if(e){const{inlineSize:n,blockSize:i}=e[0];return{width:n,height:i}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function sn({target:t,contentRect:e,borderBoxSize:n}){var i;(i=k.get(t))===null||i===void 0||i.forEach(s=>{s({target:t,contentSize:e,get size(){return nn(t,n)}})})}function rn(t){t.forEach(sn)}function on(){typeof ResizeObserver>"u"||(z=new ResizeObserver(rn))}function an(t,e){z||on();const n=it(t);return n.forEach(i=>{let s=k.get(i);s||(s=new Set,k.set(i,s)),s.add(e),z==null||z.observe(i)}),()=>{n.forEach(i=>{const s=k.get(i);s==null||s.delete(e),s!=null&&s.size||z==null||z.unobserve(i)})}}const K=new Set;let V;function cn(){V=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};K.forEach(n=>n(e))},window.addEventListener("resize",V)}function ln(t){return K.add(t),V||cn(),()=>{K.delete(t),!K.size&&V&&(V=void 0)}}function oe(t,e){return typeof t=="function"?ln(t):an(t,e)}const un=50,Wt=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),fn=()=>({time:0,x:Wt(),y:Wt()}),dn={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function It(t,e,n,i){const s=n[e],{length:r,position:o}=dn[e],f=s.current,d=n.time;s.current=t["scroll"+o],s.scrollLength=t["scroll"+r]-t["client"+r],s.offset.length=0,s.offset[0]=0,s.offset[1]=s.scrollLength,s.progress=Y(0,s.scrollLength,s.current);const c=i-d;s.velocity=c>un?0:Jt(s.current-f,c)}function hn(t,e,n){It(t,"x",e,n),It(t,"y",e,n),e.time=n}function pn(t,e){let n={x:0,y:0},i=t;for(;i&&i!==e;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i instanceof SVGGraphicsElement&&"getBBox"in i){const{top:s,left:r}=i.getBBox();for(n.x+=r,n.y+=s;i&&i.tagName!=="svg";)i=i.parentNode}return n}const ae={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},ft={start:0,center:.5,end:1};function _t(t,e,n=0){let i=0;if(ft[t]!==void 0&&(t=ft[t]),wt(t)){const s=parseFloat(t);t.endsWith("px")?i=s:t.endsWith("%")?t=s/100:t.endsWith("vw")?i=s/100*document.documentElement.clientWidth:t.endsWith("vh")?i=s/100*document.documentElement.clientHeight:t=s}return D(t)&&(i=e*t),n+i}const gn=[0,0];function mn(t,e,n,i){let s=Array.isArray(t)?t:gn,r=0,o=0;return D(t)?s=[t,t]:wt(t)&&(t=t.trim(),t.includes(" ")?s=t.split(" "):s=[t,ft[t]?t:"0"]),r=_t(s[0],n,i),o=_t(s[1],e),r-o}const vn={x:0,y:0};function yn(t,e,n){let{offset:i=ae.All}=n;const{target:s=t,axis:r="y"}=n,o=r==="y"?"height":"width",f=s!==t?pn(s,t):vn,d=s===t?{width:t.scrollWidth,height:t.scrollHeight}:{width:s.clientWidth,height:s.clientHeight},c={width:t.clientWidth,height:t.clientHeight};e[r].offset.length=0;let u=!e[r].interpolate;const l=i.length;for(let p=0;p<l;p++){const m=mn(i[p],c[o],d[o],f[r]);!u&&m!==e[r].interpolatorOffsets[p]&&(u=!0),e[r].offset[p]=m}u&&(e[r].interpolate=Zt(yt(l),e[r].offset),e[r].interpolatorOffsets=[...e[r].offset]),e[r].progress=e[r].interpolate(e[r].current)}function wn(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!=t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function En(t,e,n,i={}){const s=i.axis||"y";return{measure:()=>wn(t,i.target,n),update:r=>{hn(t,n,r),(i.offset||i.target)&&yn(t,n,i)},notify:typeof e=="function"?()=>e(n):Tn(e,n[s])}}function Tn(t,e){return t.pause(),t.forEachNative((n,{easing:i})=>{var s,r;if(n.updateDuration)i||(n.easing=M),n.updateDuration(1);else{const o={duration:1e3};i||(o.easing="linear"),(r=(s=n.effect)===null||s===void 0?void 0:s.updateTiming)===null||r===void 0||r.call(s,o)}}),()=>{t.currentTime=e.progress}}const j=new WeakMap,Bt=new WeakMap,at=new WeakMap,Ct=t=>t===document.documentElement?window:t;function bn(t,e={}){var{container:n=document.documentElement}=e,i=Q(e,["container"]);let s=at.get(n);s||(s=new Set,at.set(n,s));const r=fn(),o=En(n,t,r,i);if(s.add(o),!j.has(n)){const c=()=>{const l=performance.now();for(const p of s)p.measure();for(const p of s)p.update(l);for(const p of s)p.notify()};j.set(n,c);const u=Ct(n);window.addEventListener("resize",c,{passive:!0}),n!==document.documentElement&&Bt.set(n,oe(n,c)),u.addEventListener("scroll",c,{passive:!0})}const f=j.get(n),d=requestAnimationFrame(f);return()=>{var c;typeof t!="function"&&t.stop(),cancelAnimationFrame(d);const u=at.get(n);if(!u||(u.delete(o),u.size))return;const l=j.get(n);j.delete(n),l&&(Ct(n).removeEventListener("scroll",l),(c=Bt.get(n))===null||c===void 0||c(),window.removeEventListener("resize",l))}}function An(t,e){return typeof t!=typeof e?!0:Array.isArray(t)&&Array.isArray(e)?!On(t,e):t!==e}function On(t,e){const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Sn(t){return typeof t=="object"}function $t(t,e){if(Sn(t))return t;if(t&&e)return e[t]}let R;function xn(){if(!R)return;const t=R.sort(Dn).map(Ln);t.forEach(jt),t.forEach(jt),R=void 0}function ct(t){R?Ut(R,t):(R=[t],requestAnimationFrame(xn))}function Mn(t){R&&kt(R,t)}const Dn=(t,e)=>t.getDepth()-e.getDepth(),Ln=t=>t.animateUpdates(),jt=t=>t.next(),Ht=(t,e)=>new CustomEvent(t,{detail:{target:e}});function dt(t,e,n){t.dispatchEvent(new CustomEvent(e,{detail:{originalEvent:n}}))}function Vt(t,e,n){t.dispatchEvent(new CustomEvent(e,{detail:{originalEntry:n}}))}const zn={isActive:t=>!!t.inView,subscribe:(t,{enable:e,disable:n},{inViewOptions:i={}})=>{const{once:s}=i,r=Q(i,["once"]);return re(t,o=>{if(e(),Vt(t,"viewenter",o),!s)return f=>{n(),Vt(t,"viewleave",f)}},r)}},qt=(t,e,n)=>i=>{i.pointerType&&i.pointerType!=="mouse"||(n(),dt(t,e,i))},Rn={isActive:t=>!!t.hover,subscribe:(t,{enable:e,disable:n})=>{const i=qt(t,"hoverstart",e),s=qt(t,"hoverend",n);return t.addEventListener("pointerenter",i),t.addEventListener("pointerleave",s),()=>{t.removeEventListener("pointerenter",i),t.removeEventListener("pointerleave",s)}}},Fn={isActive:t=>!!t.press,subscribe:(t,{enable:e,disable:n})=>{const i=r=>{n(),dt(t,"pressend",r),window.removeEventListener("pointerup",i)},s=r=>{e(),dt(t,"pressstart",r),window.addEventListener("pointerup",i)};return t.addEventListener("pointerdown",s),()=>{t.removeEventListener("pointerdown",s),window.removeEventListener("pointerup",i)}}},N={inView:zn,hover:Rn,press:Fn},Gt=["initial","animate",...Object.keys(N),"exit"],ht=new WeakMap;function Pn(t={},e){let n,i=e?e.getDepth()+1:0;const s={initial:!0,animate:!0},r={},o={};for(const h of Gt)o[h]=typeof t[h]=="string"?t[h]:e==null?void 0:e.getContext()[h];const f=t.initial===!1?"animate":"initial";let d=$t(t[f]||o[f],t.variants)||{},c=Q(d,["transition"]);const u=Object.assign({},c);function*l(){var h,g;const b=c;c={};const E={};for(const a of Gt){if(!s[a])continue;const v=$t(t[a]);if(v)for(const S in v)S!=="transition"&&(c[S]=v[S],E[S]=Et((g=(h=v.transition)!==null&&h!==void 0?h:t.transition)!==null&&g!==void 0?g:{},S))}const A=new Set([...Object.keys(c),...Object.keys(b)]),T=[];A.forEach(a=>{var v;c[a]===void 0&&(c[a]=u[a]),An(b[a],c[a])&&((v=u[a])!==null&&v!==void 0||(u[a]=W.get(n,a)),T.push(nt(n,a,c[a],E[a])))}),yield;const O=T.map(a=>a()).filter(Boolean);if(!O.length)return;const w=c;n.dispatchEvent(Ht("motionstart",w)),Promise.all(O.map(a=>a.finished)).then(()=>{n.dispatchEvent(Ht("motioncomplete",w))}).catch(mt)}const p=(h,g)=>()=>{s[h]=g,ct(y)},m=()=>{for(const h in N){const g=N[h].isActive(t),b=r[h];g&&!b?r[h]=N[h].subscribe(n,{enable:p(h,!0),disable:p(h,!1)},t):!g&&b&&(b(),delete r[h])}},y={update:h=>{n&&(t=h,m(),ct(y))},setActive:(h,g)=>{n&&(s[h]=g,ct(y))},animateUpdates:l,getDepth:()=>i,getTarget:()=>c,getOptions:()=>t,getContext:()=>o,mount:h=>(n=h,ht.set(n,y),m(),()=>{ht.delete(n),Mn(y);for(const g in r)r[g]()}),isMounted:()=>!!n};return y}function ce(t){const e={},n=[];for(let i in t){const s=t[i];et(i)&&(_[i]&&(i=_[i]),n.push(i),i=tt(i));let r=Array.isArray(s)?s[0]:s;const o=B.get(i);o&&(r=D(s)?o.toDefaultUnit(s):s),e[i]=r}return n.length&&(e.transform=Qt(n)),e}const Wn=t=>`-${t.toLowerCase()}`,In=t=>t.replace(/[A-Z]/g,Wn);function _n(t={}){const e=ce(t);let n="";for(const i in e)n+=i.startsWith("--")?i:In(i),n+=`: ${e[i]}; `;return n}const Bn=Object.freeze(Object.defineProperty({__proto__:null,ScrollOffset:ae,animate:Ce,animateStyle:nt,createMotionState:Pn,createStyleString:_n,createStyles:ce,getAnimationData:pt,getStyleName:J,glide:tn,inView:re,mountedStates:ht,resize:oe,scroll:bn,spring:Ye,stagger:_e,style:W,timeline:Ve,withControls:Tt},Symbol.toStringTag,{value:"Module"})),Hn=le(Bn);export{Hn as r};
