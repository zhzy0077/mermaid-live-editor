function w(){}const dt=t=>t;function ht(t,n){for(const e in n)t[e]=n[e];return t}function Y(t){return t()}function K(){return Object.create(null)}function v(t){t.forEach(Y)}function F(t){return typeof t=="function"}function Gt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let S;function It(t,n){return S||(S=document.createElement("a")),S.href=n,t===S.href}function mt(t){return Object.keys(t).length===0}function Z(t,...n){if(t==null)return w;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function Wt(t){let n;return Z(t,e=>n=e)(),n}function Jt(t,n,e){t.$$.on_destroy.push(Z(n,e))}function Kt(t,n,e,i){if(t){const r=tt(t,n,e,i);return t[0](r)}}function tt(t,n,e,i){return t[1]&&i?ht(e.ctx.slice(),t[1](i(n))):e.ctx}function Qt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(n.dirty.length,r.length);for(let l=0;l<s;l+=1)o[l]=n.dirty[l]|r[l];return o}return n.dirty|r}return n.dirty}function Ut(t,n,e,i,r,o){if(r){const s=tt(n,e,i,o);t.p(s,r)}}function Vt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function Xt(t){return t??""}function Yt(t,n,e){return t.set(e),n}const nt=typeof window<"u";let pt=nt?()=>window.performance.now():()=>Date.now(),G=nt?t=>requestAnimationFrame(t):w;const $=new Set;function et(t){$.forEach(n=>{n.c(t)||($.delete(n),n.f())}),$.size!==0&&G(et)}function gt(t){let n;return $.size===0&&G(et),{promise:new Promise(e=>{$.add(n={c:t,f:e})}),abort(){$.delete(n)}}}let H=!1;function yt(){H=!0}function bt(){H=!1}function xt(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const _=n[u];_.claim_order!==void 0&&c.push(_)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,_=(r>0&&n[e[r]].claim_order<=u?r+1:xt(1,r,h=>n[e[h]].claim_order,u))-1;i[c]=e[_]+1;const a=_+1;e[a]=c,r=Math.max(a,r)}const o=[],s=[];let l=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(o.push(n[c-1]);l>=c;l--)s.push(n[l]);l--}for(;l>=0;l--)s.push(n[l]);o.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<o.length&&s[c].claim_order>=o[u].claim_order;)u++;const _=u<o.length?o[u]:null;t.insertBefore(s[c],_)}}function Et(t,n){t.appendChild(n)}function it(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function wt(t){const n=I("style");return vt(it(t),n),n.sheet}function vt(t,n){return Et(t.head||t,n),n.sheet}function Nt(t,n){if(H){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function Tt(t,n,e){t.insertBefore(n,e||null)}function At(t,n,e){H&&!e?Nt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function Zt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function I(t){return document.createElement(t)}function rt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function tn(){return W(" ")}function nn(){return W("")}function en(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function rn(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function sn(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function ln(t){let n;return{p(...e){n=e,n.forEach(i=>t.push(i))},r(){n.forEach(e=>t.splice(t.indexOf(e),1))}}}function cn(t){return t===""?null:+t}function Mt(t){return Array.from(t.childNodes)}function st(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function lt(t,n,e,i,r=!1){st(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ct(t,n,e,i){return lt(t,r=>r.nodeName===n,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];e[l.name]||o.push(l.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(n))}function on(t,n,e){return ct(t,n,e,I)}function un(t,n,e){return ct(t,n,e,rt)}function kt(t,n){return lt(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>W(n),!0)}function an(t){return kt(t," ")}function Q(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function fn(t,n){const e=Q(t,"HTML_TAG_START",0),i=Q(t,"HTML_TAG_END",e);if(e===i)return new U(void 0,n);st(t);const r=t.splice(e,i-e+1);A(r[0]),A(r[r.length-1]);const o=r.slice(1,r.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new U(o,n)}function _n(t,n){n=""+n,t.data!==n&&(t.data=n)}function dn(t,n){t.value=n??""}function hn(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function mn(t,n,e){t.classList[e?"add":"remove"](n)}function ot(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}class St{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=rt(e.nodeName):this.e=I(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)Tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(A)}}class U extends St{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)At(this.t,this.n[e],n)}}function pn(t,n){return new t(n)}const L=new Map;let P=0;function Ct(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}function Lt(t,n){const e={stylesheet:wt(n),rules:{}};return L.set(t,e),e}function V(t,n,e,i,r,o,s,l=0){const c=16.666/i;let u=`{
`;for(let g=0;g<=1;g+=c){const y=n+(e-n)*o(g);u+=g*100+`%{${s(y,1-y)}}
`}const _=u+`100% {${s(e,1-e)}}
}`,a=`__svelte_${Ct(_)}_${l}`,h=it(t),{stylesheet:f,rules:d}=L.get(h)||Lt(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,P+=1,a}function Pt(t,n){const e=(t.style.animation||"").split(", "),i=e.filter(n?o=>o.indexOf(n)<0:o=>o.indexOf("__svelte")===-1),r=e.length-i.length;r&&(t.style.animation=i.join(", "),P-=r,P||jt())}function jt(){G(()=>{P||(L.forEach(t=>{const{ownerNode:n}=t.stylesheet;n&&A(n)}),L.clear())})}let M;function T(t){M=t}function J(){if(!M)throw new Error("Function called outside component initialization");return M}function gn(t){J().$$.on_mount.push(t)}function yn(t){J().$$.after_update.push(t)}function bn(){const t=J();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const o=ot(n,e,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}function xn(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const x=[],X=[];let E=[];const B=[],ut=Promise.resolve();let z=!1;function at(){z||(z=!0,ut.then(ft))}function $n(){return at(),ut}function j(t){E.push(t)}function En(t){B.push(t)}const R=new Set;let b=0;function ft(){if(b!==0)return;const t=M;do{try{for(;b<x.length;){const n=x[b];b++,T(n),Ht(n.$$)}}catch(n){throw x.length=0,b=0,n}for(T(null),x.length=0,b=0;X.length;)X.pop()();for(let n=0;n<E.length;n+=1){const e=E[n];R.has(e)||(R.add(e),e())}E.length=0}while(x.length);for(;B.length;)B.pop()();z=!1,R.clear(),T(t)}function Ht(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}function Ot(t){const n=[],e=[];E.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),E=n}let N;function Dt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function q(t,n,e){t.dispatchEvent(ot(`${n?"intro":"outro"}${e}`))}const C=new Set;let p;function wn(){p={r:0,c:[],p}}function vn(){p.r||v(p.c),p=p.p}function Rt(t,n){t&&t.i&&(C.delete(t),t.i(n))}function Nn(t,n,e,i){if(t&&t.o){if(C.has(t))return;C.add(t),p.c.push(()=>{C.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}const qt={duration:0};function Tn(t,n,e,i){const r={direction:"both"};let o=n(t,e,r),s=i?0:1,l=null,c=null,u=null;function _(){u&&Pt(t,u)}function a(f,d){const m=f.b-s;return d*=Math.abs(m),{a:s,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:g=dt,tick:y=w,css:O}=o||qt,D={start:pt()+d,b:f};f||(D.group=p,p.r+=1),l||c?c=D:(O&&(_(),u=V(t,s,f,m,d,g,O)),f&&y(0,1),l=a(D,m),j(()=>q(t,f,"start")),gt(k=>{if(c&&k>c.start&&(l=a(c,m),c=null,q(t,l.b,"start"),O&&(_(),u=V(t,s,l.b,l.duration,0,g,o.css))),l){if(k>=l.end)y(s=l.b,1-s),q(t,l.b,"end"),c||(l.b?_():--l.group.r||v(l.group.c)),l=null;else if(k>=l.start){const _t=k-l.start;s=l.a+l.d*g(_t/l.duration),y(s,1-s)}}return!!(l||c)}))}return{run(f){F(o)?Dt().then(()=>{o=o(r),h(f)}):h(f)},end(){_(),l=c=null}}}function An(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Mn(t){t&&t.c()}function kn(t,n){t&&t.l(n)}function Bt(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||j(()=>{const s=t.$$.on_mount.map(Y).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),o.forEach(j)}function zt(t,n){const e=t.$$;e.fragment!==null&&(Ot(e.after_update),v(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Ft(t,n){t.$$.dirty[0]===-1&&(x.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Sn(t,n,e,i,r,o,s,l=[-1]){const c=M;T(t);const u=t.$$={fragment:null,ctx:[],props:o,update:w,not_equal:r,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:K(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};s&&s(u.root);let _=!1;if(u.ctx=e?e(t,n.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return u.ctx&&r(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),_&&Ft(t,a)),h}):[],u.update(),_=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){yt();const a=Mt(n.target);u.fragment&&u.fragment.l(a),a.forEach(A)}else u.fragment&&u.fragment.c();n.intro&&Rt(t.$$.fragment),Bt(t,n.target,n.anchor,n.customElement),bt(),ft()}T(c)}class Cn{$destroy(){zt(this,1),this.$destroy=w}$on(n,e){if(!F(e))return w;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!mt(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{dn as $,Bt as A,zt as B,Kt as C,Ut as D,Vt as E,Qt as F,Jt as G,Nt as H,w as I,rt as J,un as K,Zt as L,mn as M,en as N,v as O,It as P,Xt as Q,dt as R,Cn as S,rn as T,bn as U,j as V,Tn as W,An as X,En as Y,xn as Z,ln as _,tn as a,cn as a0,Wt as a1,Yt as a2,U as a3,fn as a4,Z as a5,F as a6,At as b,an as c,Nn as d,nn as e,vn as f,Rt as g,A as h,Sn as i,yn as j,I as k,on as l,Mt as m,sn as n,gn as o,hn as p,W as q,kt as r,Gt as s,$n as t,_n as u,wn as v,X as w,pn as x,Mn as y,kn as z};
