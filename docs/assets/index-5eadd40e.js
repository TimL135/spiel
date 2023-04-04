(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Ko(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function sn(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=be(s)?ud(s):sn(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(be(t))return t;if(ce(t))return t}}const ad=/;(?![^(]*\))/g,cd=/:([^]+)/,ld=/\/\*.*?\*\//gs;function ud(t){const e={};return t.replace(ld,"").split(ad).forEach(n=>{if(n){const s=n.split(cd);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function jr(t){let e="";if(be(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=jr(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const hd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fd=Ko(hd);function Vl(t){return!!t||t===""}const Ws=t=>be(t)?t:t==null?"":$(t)||ce(t)&&(t.toString===jl||!q(t.toString))?JSON.stringify(t,Ul,2):String(t),Ul=(t,e)=>e&&e.__v_isRef?Ul(t,e.value):Sn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Bl(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!$(e)&&!Hl(e)?String(e):e,re={},In=[],it=()=>{},dd=()=>!1,pd=/^on[^a-z]/,Hr=t=>pd.test(t),zo=t=>t.startsWith("onUpdate:"),Pe=Object.assign,Go=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gd=Object.prototype.hasOwnProperty,Q=(t,e)=>gd.call(t,e),$=Array.isArray,Sn=t=>qr(t)==="[object Map]",Bl=t=>qr(t)==="[object Set]",q=t=>typeof t=="function",be=t=>typeof t=="string",Wo=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",$l=t=>ce(t)&&q(t.then)&&q(t.catch),jl=Object.prototype.toString,qr=t=>jl.call(t),md=t=>qr(t).slice(8,-1),Hl=t=>qr(t)==="[object Object]",Qo=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ur=Ko(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yd=/-(\w)/g,vt=Kr(t=>t.replace(yd,(e,n)=>n?n.toUpperCase():"")),vd=/\B([A-Z])/g,$n=Kr(t=>t.replace(vd,"-$1").toLowerCase()),zr=Kr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ni=Kr(t=>t?`on${zr(t)}`:""),wr=(t,e)=>!Object.is(t,e),hr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Er=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},to=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ac;const wd=()=>ac||(ac=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let et;class Ed{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=et,!e&&et&&(this.index=(et.scopes||(et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=et;try{return et=this,e()}finally{et=n}}}on(){et=this}off(){et=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function bd(t,e=et){e&&e.active&&e.effects.push(t)}function Td(){return et}const Yo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ql=t=>(t.w&$t)>0,Kl=t=>(t.n&$t)>0,Cd=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=$t},_d=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];ql(r)&&!Kl(r)?r.delete(t):e[n++]=r,r.w&=~$t,r.n&=~$t}e.length=n}},no=new WeakMap;let es=0,$t=1;const so=30;let nt;const ln=Symbol(""),ro=Symbol("");class Xo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bd(this,s)}run(){if(!this.active)return this.fn();let e=nt,n=Lt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=nt,nt=this,Lt=!0,$t=1<<++es,es<=so?Cd(this):cc(this),this.fn()}finally{es<=so&&_d(this),$t=1<<--es,nt=this.parent,Lt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){nt===this?this.deferStop=!0:this.active&&(cc(this),this.onStop&&this.onStop(),this.active=!1)}}function cc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Lt=!0;const zl=[];function jn(){zl.push(Lt),Lt=!1}function Hn(){const t=zl.pop();Lt=t===void 0?!0:t}function He(t,e,n){if(Lt&&nt){let s=no.get(t);s||no.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Yo()),Gl(r)}}function Gl(t,e){let n=!1;es<=so?Kl(t)||(t.n|=$t,n=!ql(t)):n=!t.has(nt),n&&(t.add(nt),nt.deps.push(t))}function At(t,e,n,s,r,i){const o=no.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Qo(n)&&a.push(o.get("length")):(a.push(o.get(ln)),Sn(t)&&a.push(o.get(ro)));break;case"delete":$(t)||(a.push(o.get(ln)),Sn(t)&&a.push(o.get(ro)));break;case"set":Sn(t)&&a.push(o.get(ln));break}if(a.length===1)a[0]&&io(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);io(Yo(c))}}function io(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&lc(s);for(const s of n)s.computed||lc(s)}function lc(t,e){(t!==nt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Id=Ko("__proto__,__v_isRef,__isVue"),Wl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wo)),Sd=Jo(),Ad=Jo(!1,!0),Dd=Jo(!0),uc=xd();function xd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=J(this);for(let i=0,o=this.length;i<o;i++)He(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(J)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){jn();const s=J(this)[e].apply(this,n);return Hn(),s}}),t}function Nd(t){const e=J(this);return He(e,"has",t),e.hasOwnProperty(t)}function Jo(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?zd:Zl:e?Jl:Xl).get(s))return s;const o=$(s);if(!t){if(o&&Q(uc,r))return Reflect.get(uc,r,i);if(r==="hasOwnProperty")return Nd}const a=Reflect.get(s,r,i);return(Wo(r)?Wl.has(r):Id(r))||(t||He(s,"get",r),e)?a:Be(a)?o&&Qo(r)?a:a.value:ce(a)?t?eu(a):ta(a):a}}const kd=Ql(),Rd=Ql(!0);function Ql(t=!1){return function(n,s,r,i){let o=n[s];if(hs(o)&&Be(o)&&!Be(r))return!1;if(!t&&(!oo(r)&&!hs(r)&&(o=J(o),r=J(r)),!$(n)&&Be(o)&&!Be(r)))return o.value=r,!0;const a=$(n)&&Qo(s)?Number(s)<n.length:Q(n,s),c=Reflect.set(n,s,r,i);return n===J(i)&&(a?wr(r,o)&&At(n,"set",s,r):At(n,"add",s,r)),c}}function Od(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&At(t,"delete",e,void 0),s}function Md(t,e){const n=Reflect.has(t,e);return(!Wo(e)||!Wl.has(e))&&He(t,"has",e),n}function Ld(t){return He(t,"iterate",$(t)?"length":ln),Reflect.ownKeys(t)}const Yl={get:Sd,set:kd,deleteProperty:Od,has:Md,ownKeys:Ld},Pd={get:Dd,set(t,e){return!0},deleteProperty(t,e){return!0}},Fd=Pe({},Yl,{get:Ad,set:Rd}),Zo=t=>t,Gr=t=>Reflect.getPrototypeOf(t);function Qs(t,e,n=!1,s=!1){t=t.__v_raw;const r=J(t),i=J(e);n||(e!==i&&He(r,"get",e),He(r,"get",i));const{has:o}=Gr(r),a=s?Zo:n?ra:sa;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ys(t,e=!1){const n=this.__v_raw,s=J(n),r=J(t);return e||(t!==r&&He(s,"has",t),He(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Xs(t,e=!1){return t=t.__v_raw,!e&&He(J(t),"iterate",ln),Reflect.get(t,"size",t)}function hc(t){t=J(t);const e=J(this);return Gr(e).has.call(e,t)||(e.add(t),At(e,"add",t,t)),this}function fc(t,e){e=J(e);const n=J(this),{has:s,get:r}=Gr(n);let i=s.call(n,t);i||(t=J(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?wr(e,o)&&At(n,"set",t,e):At(n,"add",t,e),this}function dc(t){const e=J(this),{has:n,get:s}=Gr(e);let r=n.call(e,t);r||(t=J(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&At(e,"delete",t,void 0),i}function pc(){const t=J(this),e=t.size!==0,n=t.clear();return e&&At(t,"clear",void 0,void 0),n}function Js(t,e){return function(s,r){const i=this,o=i.__v_raw,a=J(o),c=e?Zo:t?ra:sa;return!t&&He(a,"iterate",ln),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Zs(t,e,n){return function(...s){const r=this.__v_raw,i=J(r),o=Sn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Zo:e?ra:sa;return!e&&He(i,"iterate",c?ro:ln),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function Ot(t){return function(...e){return t==="delete"?!1:this}}function Vd(){const t={get(i){return Qs(this,i)},get size(){return Xs(this)},has:Ys,add:hc,set:fc,delete:dc,clear:pc,forEach:Js(!1,!1)},e={get(i){return Qs(this,i,!1,!0)},get size(){return Xs(this)},has:Ys,add:hc,set:fc,delete:dc,clear:pc,forEach:Js(!1,!0)},n={get(i){return Qs(this,i,!0)},get size(){return Xs(this,!0)},has(i){return Ys.call(this,i,!0)},add:Ot("add"),set:Ot("set"),delete:Ot("delete"),clear:Ot("clear"),forEach:Js(!0,!1)},s={get(i){return Qs(this,i,!0,!0)},get size(){return Xs(this,!0)},has(i){return Ys.call(this,i,!0)},add:Ot("add"),set:Ot("set"),delete:Ot("delete"),clear:Ot("clear"),forEach:Js(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Zs(i,!1,!1),n[i]=Zs(i,!0,!1),e[i]=Zs(i,!1,!0),s[i]=Zs(i,!0,!0)}),[t,n,e,s]}const[Ud,Bd,$d,jd]=Vd();function ea(t,e){const n=e?t?jd:$d:t?Bd:Ud;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Q(n,r)&&r in s?n:s,r,i)}const Hd={get:ea(!1,!1)},qd={get:ea(!1,!0)},Kd={get:ea(!0,!1)},Xl=new WeakMap,Jl=new WeakMap,Zl=new WeakMap,zd=new WeakMap;function Gd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wd(t){return t.__v_skip||!Object.isExtensible(t)?0:Gd(md(t))}function ta(t){return hs(t)?t:na(t,!1,Yl,Hd,Xl)}function Qd(t){return na(t,!1,Fd,qd,Jl)}function eu(t){return na(t,!0,Pd,Kd,Zl)}function na(t,e,n,s,r){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Wd(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function An(t){return hs(t)?An(t.__v_raw):!!(t&&t.__v_isReactive)}function hs(t){return!!(t&&t.__v_isReadonly)}function oo(t){return!!(t&&t.__v_isShallow)}function tu(t){return An(t)||hs(t)}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function nu(t){return Er(t,"__v_skip",!0),t}const sa=t=>ce(t)?ta(t):t,ra=t=>ce(t)?eu(t):t;function Yd(t){Lt&&nt&&(t=J(t),Gl(t.dep||(t.dep=Yo())))}function Xd(t,e){t=J(t);const n=t.dep;n&&io(n)}function Be(t){return!!(t&&t.__v_isRef===!0)}function Jd(t){return Be(t)?t.value:t}const Zd={get:(t,e,n)=>Jd(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Be(r)&&!Be(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function su(t){return An(t)?t:new Proxy(t,Zd)}var ru;class ep{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ru]=!1,this._dirty=!0,this.effect=new Xo(e,()=>{this._dirty||(this._dirty=!0,Xd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=J(this);return Yd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ru="__v_isReadonly";function tp(t,e,n=!1){let s,r;const i=q(t);return i?(s=t,r=it):(s=t.get,r=t.set),new ep(s,r,i||!r,n)}function Pt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Wr(i,e,n)}return r}function Xe(t,e,n,s){if(q(t)){const i=Pt(t,e,n,s);return i&&$l(i)&&i.catch(o=>{Wr(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Xe(t[i],e,n,s));return r}function Wr(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Pt(c,null,10,[t,o,a]);return}}np(t,n,r,s)}function np(t,e,n,s=!0){console.error(t)}let fs=!1,ao=!1;const Re=[];let pt=0;const Dn=[];let _t=null,en=0;const iu=Promise.resolve();let ia=null;function sp(t){const e=ia||iu;return t?e.then(this?t.bind(this):t):e}function rp(t){let e=pt+1,n=Re.length;for(;e<n;){const s=e+n>>>1;ds(Re[s])<t?e=s+1:n=s}return e}function oa(t){(!Re.length||!Re.includes(t,fs&&t.allowRecurse?pt+1:pt))&&(t.id==null?Re.push(t):Re.splice(rp(t.id),0,t),ou())}function ou(){!fs&&!ao&&(ao=!0,ia=iu.then(cu))}function ip(t){const e=Re.indexOf(t);e>pt&&Re.splice(e,1)}function op(t){$(t)?Dn.push(...t):(!_t||!_t.includes(t,t.allowRecurse?en+1:en))&&Dn.push(t),ou()}function gc(t,e=fs?pt+1:0){for(;e<Re.length;e++){const n=Re[e];n&&n.pre&&(Re.splice(e,1),e--,n())}}function au(t){if(Dn.length){const e=[...new Set(Dn)];if(Dn.length=0,_t){_t.push(...e);return}for(_t=e,_t.sort((n,s)=>ds(n)-ds(s)),en=0;en<_t.length;en++)_t[en]();_t=null,en=0}}const ds=t=>t.id==null?1/0:t.id,ap=(t,e)=>{const n=ds(t)-ds(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function cu(t){ao=!1,fs=!0,Re.sort(ap);const e=it;try{for(pt=0;pt<Re.length;pt++){const n=Re[pt];n&&n.active!==!1&&Pt(n,null,14)}}finally{pt=0,Re.length=0,au(),fs=!1,ia=null,(Re.length||Dn.length)&&cu()}}function cp(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||re;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=s[u]||re;p&&(r=n.map(m=>be(m)?m.trim():m)),d&&(r=n.map(to))}let a,c=s[a=Ni(e)]||s[a=Ni(vt(e))];!c&&i&&(c=s[a=Ni($n(e))]),c&&Xe(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xe(l,t,6,r)}}function lu(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!q(t)){const c=l=>{const u=lu(l,e,!0);u&&(a=!0,Pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ce(t)&&s.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):Pe(o,i),ce(t)&&s.set(t,o),o)}function Qr(t,e){return!t||!Hr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,$n(e))||Q(t,e))}let Ge=null,uu=null;function br(t){const e=Ge;return Ge=t,uu=t&&t.type.__scopeId||null,e}function lp(t,e=Ge,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Ic(-1);const i=br(e);let o;try{o=t(...r)}finally{br(i),s._d&&Ic(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ki(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:p,setupState:m,ctx:A,inheritAttrs:T}=t;let P,j;const te=br(t);try{if(n.shapeFlag&4){const Z=r||s;P=dt(u.call(Z,Z,d,i,m,p,A)),j=c}else{const Z=e;P=dt(Z.length>1?Z(i,{attrs:c,slots:a,emit:l}):Z(i,null)),j=e.props?c:up(c)}}catch(Z){is.length=0,Wr(Z,t,1),P=mt(ot)}let L=P;if(j&&T!==!1){const Z=Object.keys(j),{shapeFlag:le}=L;Z.length&&le&7&&(o&&Z.some(zo)&&(j=hp(j,o)),L=jt(L,j))}return n.dirs&&(L=jt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),P=L,br(te),P}const up=t=>{let e;for(const n in t)(n==="class"||n==="style"||Hr(n))&&((e||(e={}))[n]=t[n]);return e},hp=(t,e)=>{const n={};for(const s in t)(!zo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function fp(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?mc(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==s[p]&&!Qr(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?mc(s,o,l):!0:!!o;return!1}function mc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Qr(n,i))return!0}return!1}function dp({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const pp=t=>t.__isSuspense;function gp(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):op(t)}function mp(t,e){if(de){let n=de.provides;const s=de.parent&&de.parent.provides;s===n&&(n=de.provides=Object.create(s)),n[t]=e}}function fr(t,e,n=!1){const s=de||Ge;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&q(e)?e.call(s.proxy):e}}const er={};function Ri(t,e,n){return hu(t,e,n)}function hu(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=re){const a=Td()===(de==null?void 0:de.scope)?de:null;let c,l=!1,u=!1;if(Be(t)?(c=()=>t.value,l=oo(t)):An(t)?(c=()=>t,s=!0):$(t)?(u=!0,l=t.some(L=>An(L)||oo(L)),c=()=>t.map(L=>{if(Be(L))return L.value;if(An(L))return rn(L);if(q(L))return Pt(L,a,2)})):q(t)?e?c=()=>Pt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),Xe(t,a,3,[p])}:c=it,e&&s){const L=c;c=()=>rn(L())}let d,p=L=>{d=j.onStop=()=>{Pt(L,a,4)}},m;if(gs)if(p=it,e?n&&Xe(e,a,3,[c(),u?[]:void 0,p]):c(),r==="sync"){const L=yg();m=L.__watcherHandles||(L.__watcherHandles=[])}else return it;let A=u?new Array(t.length).fill(er):er;const T=()=>{if(j.active)if(e){const L=j.run();(s||l||(u?L.some((Z,le)=>wr(Z,A[le])):wr(L,A)))&&(d&&d(),Xe(e,a,3,[L,A===er?void 0:u&&A[0]===er?[]:A,p]),A=L)}else j.run()};T.allowRecurse=!!e;let P;r==="sync"?P=T:r==="post"?P=()=>je(T,a&&a.suspense):(T.pre=!0,a&&(T.id=a.uid),P=()=>oa(T));const j=new Xo(c,P);e?n?T():A=j.run():r==="post"?je(j.run.bind(j),a&&a.suspense):j.run();const te=()=>{j.stop(),a&&a.scope&&Go(a.scope.effects,j)};return m&&m.push(te),te}function yp(t,e,n){const s=this.proxy,r=be(t)?t.includes(".")?fu(s,t):()=>s[t]:t.bind(s,s);let i;q(e)?i=e:(i=e.handler,n=e);const o=de;Rn(this);const a=hu(r,i.bind(s),n);return o?Rn(o):un(),a}function fu(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function rn(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Be(t))rn(t.value,e);else if($(t))for(let n=0;n<t.length;n++)rn(t[n],e);else if(Bl(t)||Sn(t))t.forEach(n=>{rn(n,e)});else if(Hl(t))for(const n in t)rn(t[n],e);return t}function vp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mu(()=>{t.isMounted=!0}),yu(()=>{t.isUnmounting=!0}),t}const Qe=[Function,Array],wp={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qe,onEnter:Qe,onAfterEnter:Qe,onEnterCancelled:Qe,onBeforeLeave:Qe,onLeave:Qe,onAfterLeave:Qe,onLeaveCancelled:Qe,onBeforeAppear:Qe,onAppear:Qe,onAfterAppear:Qe,onAppearCancelled:Qe},setup(t,{slots:e}){const n=cg(),s=vp();let r;return()=>{const i=e.default&&pu(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const T of i)if(T.type!==ot){o=T;break}}const a=J(t),{mode:c}=a;if(s.isLeaving)return Oi(o);const l=yc(o);if(!l)return Oi(o);const u=co(l,a,s,n);lo(l,u);const d=n.subTree,p=d&&yc(d);let m=!1;const{getTransitionKey:A}=l.type;if(A){const T=A();r===void 0?r=T:T!==r&&(r=T,m=!0)}if(p&&p.type!==ot&&(!tn(l,p)||m)){const T=co(p,a,s,n);if(lo(p,T),c==="out-in")return s.isLeaving=!0,T.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Oi(o);c==="in-out"&&l.type!==ot&&(T.delayLeave=(P,j,te)=>{const L=du(s,p);L[String(p.key)]=p,P._leaveCb=()=>{j(),P._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=te})}return o}}},Ep=wp;function du(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function co(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:A,onBeforeAppear:T,onAppear:P,onAfterAppear:j,onAppearCancelled:te}=e,L=String(t.key),Z=du(n,t),le=(K,Ce)=>{K&&Xe(K,s,9,Ce)},bt=(K,Ce)=>{const ue=Ce[1];le(K,Ce),$(K)?K.every(qe=>qe.length<=1)&&ue():K.length<=1&&ue()},at={mode:i,persisted:o,beforeEnter(K){let Ce=a;if(!n.isMounted)if(r)Ce=T||a;else return;K._leaveCb&&K._leaveCb(!0);const ue=Z[L];ue&&tn(t,ue)&&ue.el._leaveCb&&ue.el._leaveCb(),le(Ce,[K])},enter(K){let Ce=c,ue=l,qe=u;if(!n.isMounted)if(r)Ce=P||c,ue=j||l,qe=te||u;else return;let ct=!1;const Tt=K._enterCb=Xn=>{ct||(ct=!0,Xn?le(qe,[K]):le(ue,[K]),at.delayedLeave&&at.delayedLeave(),K._enterCb=void 0)};Ce?bt(Ce,[K,Tt]):Tt()},leave(K,Ce){const ue=String(t.key);if(K._enterCb&&K._enterCb(!0),n.isUnmounting)return Ce();le(d,[K]);let qe=!1;const ct=K._leaveCb=Tt=>{qe||(qe=!0,Ce(),Tt?le(A,[K]):le(m,[K]),K._leaveCb=void 0,Z[ue]===t&&delete Z[ue])};Z[ue]=t,p?bt(p,[K,ct]):ct()},clone(K){return co(K,e,n,s)}};return at}function Oi(t){if(Yr(t))return t=jt(t),t.children=null,t}function yc(t){return Yr(t)?t.children?t.children[0]:void 0:t}function lo(t,e){t.shapeFlag&6&&t.component?lo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pu(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ze?(o.patchFlag&128&&r++,s=s.concat(pu(o.children,e,a))):(e||o.type!==ot)&&s.push(a!=null?jt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}const dr=t=>!!t.type.__asyncLoader,Yr=t=>t.type.__isKeepAlive;function bp(t,e){gu(t,"a",e)}function Tp(t,e){gu(t,"da",e)}function gu(t,e,n=de){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Xr(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Yr(r.parent.vnode)&&Cp(s,e,n,r),r=r.parent}}function Cp(t,e,n,s){const r=Xr(e,t,s,!0);vu(()=>{Go(s[e],r)},n)}function Xr(t,e,n=de,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;jn(),Rn(n);const a=Xe(e,n,t,o);return un(),Hn(),a});return s?r.unshift(i):r.push(i),i}}const Rt=t=>(e,n=de)=>(!gs||t==="sp")&&Xr(t,(...s)=>e(...s),n),_p=Rt("bm"),mu=Rt("m"),Ip=Rt("bu"),Sp=Rt("u"),yu=Rt("bum"),vu=Rt("um"),Ap=Rt("sp"),Dp=Rt("rtg"),xp=Rt("rtc");function Np(t,e=de){Xr("ec",t,e)}function kp(t,e){const n=Ge;if(n===null)return t;const s=ei(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=re]=e[i];o&&(q(o)&&(o={mounted:o,updated:o}),o.deep&&rn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Yt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(jn(),Xe(c,n,8,[t.el,a,t,e]),Hn())}}const wu="components";function Rp(t,e){return Mp(wu,t,!0,e)||t}const Op=Symbol();function Mp(t,e,n=!0,s=!1){const r=Ge||de;if(r){const i=r.type;if(t===wu){const a=dg(i,!1);if(a&&(a===e||a===vt(e)||a===zr(vt(e))))return i}const o=vc(r[t]||i[t],e)||vc(r.appContext[t],e);return!o&&s?i:o}}function vc(t,e){return t&&(t[e]||t[vt(e)]||t[zr(vt(e))])}function Mi(t,e,n,s){let r;const i=n&&n[s];if($(t)||be(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ce(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const uo=t=>t?Nu(t)?ei(t)||t.proxy:uo(t.parent):null,rs=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>uo(t.parent),$root:t=>uo(t.root),$emit:t=>t.emit,$options:t=>aa(t),$forceUpdate:t=>t.f||(t.f=()=>oa(t.update)),$nextTick:t=>t.n||(t.n=sp.bind(t.proxy)),$watch:t=>yp.bind(t)}),Li=(t,e)=>t!==re&&!t.__isScriptSetup&&Q(t,e),Lp={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Li(s,e))return o[e]=1,s[e];if(r!==re&&Q(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Q(l,e))return o[e]=3,i[e];if(n!==re&&Q(n,e))return o[e]=4,n[e];ho&&(o[e]=0)}}const u=rs[e];let d,p;if(u)return e==="$attrs"&&He(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==re&&Q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Q(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Li(r,e)?(r[e]=n,!0):s!==re&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==re&&Q(t,o)||Li(e,o)||(a=i[0])&&Q(a,o)||Q(s,o)||Q(rs,o)||Q(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ho=!0;function Pp(t){const e=aa(t),n=t.proxy,s=t.ctx;ho=!1,e.beforeCreate&&wc(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:A,activated:T,deactivated:P,beforeDestroy:j,beforeUnmount:te,destroyed:L,unmounted:Z,render:le,renderTracked:bt,renderTriggered:at,errorCaptured:K,serverPrefetch:Ce,expose:ue,inheritAttrs:qe,components:ct,directives:Tt,filters:Xn}=e;if(l&&Fp(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const he in o){const ne=o[he];q(ne)&&(s[he]=ne.bind(n))}if(r){const he=r.call(n,n);ce(he)&&(t.data=ta(he))}if(ho=!0,i)for(const he in i){const ne=i[he],Wt=q(ne)?ne.bind(n,n):q(ne.get)?ne.get.bind(n,n):it,zs=!q(ne)&&q(ne.set)?ne.set.bind(n):it,Qt=gg({get:Wt,set:zs});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:lt=>Qt.value=lt})}if(a)for(const he in a)Eu(a[he],s,n,he);if(c){const he=q(c)?c.call(n):c;Reflect.ownKeys(he).forEach(ne=>{mp(ne,he[ne])})}u&&wc(u,t,"c");function Ve(he,ne){$(ne)?ne.forEach(Wt=>he(Wt.bind(n))):ne&&he(ne.bind(n))}if(Ve(_p,d),Ve(mu,p),Ve(Ip,m),Ve(Sp,A),Ve(bp,T),Ve(Tp,P),Ve(Np,K),Ve(xp,bt),Ve(Dp,at),Ve(yu,te),Ve(vu,Z),Ve(Ap,Ce),$(ue))if(ue.length){const he=t.exposed||(t.exposed={});ue.forEach(ne=>{Object.defineProperty(he,ne,{get:()=>n[ne],set:Wt=>n[ne]=Wt})})}else t.exposed||(t.exposed={});le&&t.render===it&&(t.render=le),qe!=null&&(t.inheritAttrs=qe),ct&&(t.components=ct),Tt&&(t.directives=Tt)}function Fp(t,e,n=it,s=!1){$(t)&&(t=fo(t));for(const r in t){const i=t[r];let o;ce(i)?"default"in i?o=fr(i.from||r,i.default,!0):o=fr(i.from||r):o=fr(i),Be(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function wc(t,e,n){Xe($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Eu(t,e,n,s){const r=s.includes(".")?fu(n,s):()=>n[s];if(be(t)){const i=e[t];q(i)&&Ri(r,i)}else if(q(t))Ri(r,t.bind(n));else if(ce(t))if($(t))t.forEach(i=>Eu(i,e,n,s));else{const i=q(t.handler)?t.handler.bind(n):e[t.handler];q(i)&&Ri(r,i,t)}}function aa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Tr(c,l,o,!0)),Tr(c,e,o)),ce(e)&&i.set(e,c),c}function Tr(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Tr(t,i,n,!0),r&&r.forEach(o=>Tr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Vp[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Vp={data:Ec,props:Jt,emits:Jt,methods:Jt,computed:Jt,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:Jt,directives:Jt,watch:Bp,provide:Ec,inject:Up};function Ec(t,e){return e?t?function(){return Pe(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function Up(t,e){return Jt(fo(t),fo(e))}function fo(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ue(t,e){return t?[...new Set([].concat(t,e))]:e}function Jt(t,e){return t?Pe(Pe(Object.create(null),t),e):e}function Bp(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=Ue(t[s],e[s]);return n}function $p(t,e,n,s=!1){const r={},i={};Er(i,Zr,1),t.propsDefaults=Object.create(null),bu(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Qd(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function jp(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=J(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Qr(t.emitsOptions,p))continue;const m=e[p];if(c)if(Q(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const A=vt(p);r[A]=po(c,a,A,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{bu(t,e,r,i)&&(l=!0);let u;for(const d in a)(!e||!Q(e,d)&&((u=$n(d))===d||!Q(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=po(c,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!Q(e,d))&&(delete i[d],l=!0)}l&&At(t,"set","$attrs")}function bu(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ur(c))continue;const l=e[c];let u;r&&Q(r,u=vt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Qr(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=J(n),l=a||re;for(let u=0;u<i.length;u++){const d=i[u];n[d]=po(r,c,d,l[d],t,!Q(l,d))}}return o}function po(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&q(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Rn(r),s=l[n]=c.call(null,e),un())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===$n(n))&&(s=!0))}return s}function Tu(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!q(t)){const u=d=>{c=!0;const[p,m]=Tu(d,e,!0);Pe(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ce(t)&&s.set(t,In),In;if($(i))for(let u=0;u<i.length;u++){const d=vt(i[u]);bc(d)&&(o[d]=re)}else if(i)for(const u in i){const d=vt(u);if(bc(d)){const p=i[u],m=o[d]=$(p)||q(p)?{type:p}:Object.assign({},p);if(m){const A=_c(Boolean,m.type),T=_c(String,m.type);m[0]=A>-1,m[1]=T<0||A<T,(A>-1||Q(m,"default"))&&a.push(d)}}}const l=[o,a];return ce(t)&&s.set(t,l),l}function bc(t){return t[0]!=="$"}function Tc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Cc(t,e){return Tc(t)===Tc(e)}function _c(t,e){return $(e)?e.findIndex(n=>Cc(n,t)):q(e)&&Cc(e,t)?0:-1}const Cu=t=>t[0]==="_"||t==="$stable",ca=t=>$(t)?t.map(dt):[dt(t)],Hp=(t,e,n)=>{if(e._n)return e;const s=lp((...r)=>ca(e(...r)),n);return s._c=!1,s},_u=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Cu(r))continue;const i=t[r];if(q(i))e[r]=Hp(r,i,s);else if(i!=null){const o=ca(i);e[r]=()=>o}}},Iu=(t,e)=>{const n=ca(e);t.slots.default=()=>n},qp=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=J(e),Er(e,"_",n)):_u(e,t.slots={})}else t.slots={},e&&Iu(t,e);Er(t.slots,Zr,1)},Kp=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Pe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,_u(e,r)),o=e}else e&&(Iu(t,e),o={default:1});if(i)for(const a in r)!Cu(a)&&!(a in o)&&delete r[a]};function Su(){return{app:null,config:{isNativeTag:dd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zp=0;function Gp(t,e){return function(s,r=null){q(s)||(s=Object.assign({},s)),r!=null&&!ce(r)&&(r=null);const i=Su(),o=new Set;let a=!1;const c=i.app={_uid:zp++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:vg,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&q(l.install)?(o.add(l),l.install(c,...u)):q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const p=mt(s,r);return p.appContext=i,u&&e?e(p,l):t(p,l,d),a=!0,c._container=l,l.__vue_app__=c,ei(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function go(t,e,n,s,r=!1){if($(t)){t.forEach((p,m)=>go(p,e&&($(e)?e[m]:e),n,s,r));return}if(dr(s)&&!r)return;const i=s.shapeFlag&4?ei(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===re?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(be(l)?(u[l]=null,Q(d,l)&&(d[l]=null)):Be(l)&&(l.value=null)),q(c))Pt(c,a,12,[o,u]);else{const p=be(c),m=Be(c);if(p||m){const A=()=>{if(t.f){const T=p?Q(d,c)?d[c]:u[c]:c.value;r?$(T)&&Go(T,i):$(T)?T.includes(i)||T.push(i):p?(u[c]=[i],Q(d,c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,Q(d,c)&&(d[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(A.id=-1,je(A,n)):A()}}}const je=gp;function Wp(t){return Qp(t)}function Qp(t,e){const n=wd();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:m=it,insertStaticContent:A}=t,T=(h,f,g,v=null,y=null,_=null,S=!1,C=null,I=!!f.dynamicChildren)=>{if(h===f)return;h&&!tn(h,f)&&(v=Gs(h),lt(h,y,_,!0),h=null),f.patchFlag===-2&&(I=!1,f.dynamicChildren=null);const{type:w,ref:k,shapeFlag:D}=f;switch(w){case Jr:P(h,f,g,v);break;case ot:j(h,f,g,v);break;case Pi:h==null&&te(f,g,v,S);break;case ze:ct(h,f,g,v,y,_,S,C,I);break;default:D&1?le(h,f,g,v,y,_,S,C,I):D&6?Tt(h,f,g,v,y,_,S,C,I):(D&64||D&128)&&w.process(h,f,g,v,y,_,S,C,I,wn)}k!=null&&y&&go(k,h&&h.ref,_,f||h,!f)},P=(h,f,g,v)=>{if(h==null)s(f.el=a(f.children),g,v);else{const y=f.el=h.el;f.children!==h.children&&l(y,f.children)}},j=(h,f,g,v)=>{h==null?s(f.el=c(f.children||""),g,v):f.el=h.el},te=(h,f,g,v)=>{[h.el,h.anchor]=A(h.children,f,g,v,h.el,h.anchor)},L=({el:h,anchor:f},g,v)=>{let y;for(;h&&h!==f;)y=p(h),s(h,g,v),h=y;s(f,g,v)},Z=({el:h,anchor:f})=>{let g;for(;h&&h!==f;)g=p(h),r(h),h=g;r(f)},le=(h,f,g,v,y,_,S,C,I)=>{S=S||f.type==="svg",h==null?bt(f,g,v,y,_,S,C,I):Ce(h,f,y,_,S,C,I)},bt=(h,f,g,v,y,_,S,C)=>{let I,w;const{type:k,props:D,shapeFlag:R,transition:U,dirs:z}=h;if(I=h.el=o(h.type,_,D&&D.is,D),R&8?u(I,h.children):R&16&&K(h.children,I,null,v,y,_&&k!=="foreignObject",S,C),z&&Yt(h,null,v,"created"),at(I,h,h.scopeId,S,v),D){for(const ee in D)ee!=="value"&&!ur(ee)&&i(I,ee,null,D[ee],_,h.children,v,y,Ct);"value"in D&&i(I,"value",null,D.value),(w=D.onVnodeBeforeMount)&&ht(w,v,h)}z&&Yt(h,null,v,"beforeMount");const se=(!y||y&&!y.pendingBranch)&&U&&!U.persisted;se&&U.beforeEnter(I),s(I,f,g),((w=D&&D.onVnodeMounted)||se||z)&&je(()=>{w&&ht(w,v,h),se&&U.enter(I),z&&Yt(h,null,v,"mounted")},y)},at=(h,f,g,v,y)=>{if(g&&m(h,g),v)for(let _=0;_<v.length;_++)m(h,v[_]);if(y){let _=y.subTree;if(f===_){const S=y.vnode;at(h,S,S.scopeId,S.slotScopeIds,y.parent)}}},K=(h,f,g,v,y,_,S,C,I=0)=>{for(let w=I;w<h.length;w++){const k=h[w]=C?Mt(h[w]):dt(h[w]);T(null,k,f,g,v,y,_,S,C)}},Ce=(h,f,g,v,y,_,S)=>{const C=f.el=h.el;let{patchFlag:I,dynamicChildren:w,dirs:k}=f;I|=h.patchFlag&16;const D=h.props||re,R=f.props||re;let U;g&&Xt(g,!1),(U=R.onVnodeBeforeUpdate)&&ht(U,g,f,h),k&&Yt(f,h,g,"beforeUpdate"),g&&Xt(g,!0);const z=y&&f.type!=="foreignObject";if(w?ue(h.dynamicChildren,w,C,g,v,z,_):S||ne(h,f,C,null,g,v,z,_,!1),I>0){if(I&16)qe(C,f,D,R,g,v,y);else if(I&2&&D.class!==R.class&&i(C,"class",null,R.class,y),I&4&&i(C,"style",D.style,R.style,y),I&8){const se=f.dynamicProps;for(let ee=0;ee<se.length;ee++){const pe=se[ee],Ze=D[pe],En=R[pe];(En!==Ze||pe==="value")&&i(C,pe,Ze,En,y,h.children,g,v,Ct)}}I&1&&h.children!==f.children&&u(C,f.children)}else!S&&w==null&&qe(C,f,D,R,g,v,y);((U=R.onVnodeUpdated)||k)&&je(()=>{U&&ht(U,g,f,h),k&&Yt(f,h,g,"updated")},v)},ue=(h,f,g,v,y,_,S)=>{for(let C=0;C<f.length;C++){const I=h[C],w=f[C],k=I.el&&(I.type===ze||!tn(I,w)||I.shapeFlag&70)?d(I.el):g;T(I,w,k,null,v,y,_,S,!0)}},qe=(h,f,g,v,y,_,S)=>{if(g!==v){if(g!==re)for(const C in g)!ur(C)&&!(C in v)&&i(h,C,g[C],null,S,f.children,y,_,Ct);for(const C in v){if(ur(C))continue;const I=v[C],w=g[C];I!==w&&C!=="value"&&i(h,C,w,I,S,f.children,y,_,Ct)}"value"in v&&i(h,"value",g.value,v.value)}},ct=(h,f,g,v,y,_,S,C,I)=>{const w=f.el=h?h.el:a(""),k=f.anchor=h?h.anchor:a("");let{patchFlag:D,dynamicChildren:R,slotScopeIds:U}=f;U&&(C=C?C.concat(U):U),h==null?(s(w,g,v),s(k,g,v),K(f.children,g,k,y,_,S,C,I)):D>0&&D&64&&R&&h.dynamicChildren?(ue(h.dynamicChildren,R,g,y,_,S,C),(f.key!=null||y&&f===y.subTree)&&Au(h,f,!0)):ne(h,f,g,k,y,_,S,C,I)},Tt=(h,f,g,v,y,_,S,C,I)=>{f.slotScopeIds=C,h==null?f.shapeFlag&512?y.ctx.activate(f,g,v,S,I):Xn(f,g,v,y,_,S,I):tc(h,f,I)},Xn=(h,f,g,v,y,_,S)=>{const C=h.component=ag(h,v,y);if(Yr(h)&&(C.ctx.renderer=wn),lg(C),C.asyncDep){if(y&&y.registerDep(C,Ve),!h.el){const I=C.subTree=mt(ot);j(null,I,f,g)}return}Ve(C,h,f,g,y,_,S)},tc=(h,f,g)=>{const v=f.component=h.component;if(fp(h,f,g))if(v.asyncDep&&!v.asyncResolved){he(v,f,g);return}else v.next=f,ip(v.update),v.update();else f.el=h.el,v.vnode=f},Ve=(h,f,g,v,y,_,S)=>{const C=()=>{if(h.isMounted){let{next:k,bu:D,u:R,parent:U,vnode:z}=h,se=k,ee;Xt(h,!1),k?(k.el=z.el,he(h,k,S)):k=z,D&&hr(D),(ee=k.props&&k.props.onVnodeBeforeUpdate)&&ht(ee,U,k,z),Xt(h,!0);const pe=ki(h),Ze=h.subTree;h.subTree=pe,T(Ze,pe,d(Ze.el),Gs(Ze),h,y,_),k.el=pe.el,se===null&&dp(h,pe.el),R&&je(R,y),(ee=k.props&&k.props.onVnodeUpdated)&&je(()=>ht(ee,U,k,z),y)}else{let k;const{el:D,props:R}=f,{bm:U,m:z,parent:se}=h,ee=dr(f);if(Xt(h,!1),U&&hr(U),!ee&&(k=R&&R.onVnodeBeforeMount)&&ht(k,se,f),Xt(h,!0),D&&xi){const pe=()=>{h.subTree=ki(h),xi(D,h.subTree,h,y,null)};ee?f.type.__asyncLoader().then(()=>!h.isUnmounted&&pe()):pe()}else{const pe=h.subTree=ki(h);T(null,pe,g,v,h,y,_),f.el=pe.el}if(z&&je(z,y),!ee&&(k=R&&R.onVnodeMounted)){const pe=f;je(()=>ht(k,se,pe),y)}(f.shapeFlag&256||se&&dr(se.vnode)&&se.vnode.shapeFlag&256)&&h.a&&je(h.a,y),h.isMounted=!0,f=g=v=null}},I=h.effect=new Xo(C,()=>oa(w),h.scope),w=h.update=()=>I.run();w.id=h.uid,Xt(h,!0),w()},he=(h,f,g)=>{f.component=h;const v=h.vnode.props;h.vnode=f,h.next=null,jp(h,f.props,v,g),Kp(h,f.children,g),jn(),gc(),Hn()},ne=(h,f,g,v,y,_,S,C,I=!1)=>{const w=h&&h.children,k=h?h.shapeFlag:0,D=f.children,{patchFlag:R,shapeFlag:U}=f;if(R>0){if(R&128){zs(w,D,g,v,y,_,S,C,I);return}else if(R&256){Wt(w,D,g,v,y,_,S,C,I);return}}U&8?(k&16&&Ct(w,y,_),D!==w&&u(g,D)):k&16?U&16?zs(w,D,g,v,y,_,S,C,I):Ct(w,y,_,!0):(k&8&&u(g,""),U&16&&K(D,g,v,y,_,S,C,I))},Wt=(h,f,g,v,y,_,S,C,I)=>{h=h||In,f=f||In;const w=h.length,k=f.length,D=Math.min(w,k);let R;for(R=0;R<D;R++){const U=f[R]=I?Mt(f[R]):dt(f[R]);T(h[R],U,g,null,y,_,S,C,I)}w>k?Ct(h,y,_,!0,!1,D):K(f,g,v,y,_,S,C,I,D)},zs=(h,f,g,v,y,_,S,C,I)=>{let w=0;const k=f.length;let D=h.length-1,R=k-1;for(;w<=D&&w<=R;){const U=h[w],z=f[w]=I?Mt(f[w]):dt(f[w]);if(tn(U,z))T(U,z,g,null,y,_,S,C,I);else break;w++}for(;w<=D&&w<=R;){const U=h[D],z=f[R]=I?Mt(f[R]):dt(f[R]);if(tn(U,z))T(U,z,g,null,y,_,S,C,I);else break;D--,R--}if(w>D){if(w<=R){const U=R+1,z=U<k?f[U].el:v;for(;w<=R;)T(null,f[w]=I?Mt(f[w]):dt(f[w]),g,z,y,_,S,C,I),w++}}else if(w>R)for(;w<=D;)lt(h[w],y,_,!0),w++;else{const U=w,z=w,se=new Map;for(w=z;w<=R;w++){const Ke=f[w]=I?Mt(f[w]):dt(f[w]);Ke.key!=null&&se.set(Ke.key,w)}let ee,pe=0;const Ze=R-z+1;let En=!1,rc=0;const Jn=new Array(Ze);for(w=0;w<Ze;w++)Jn[w]=0;for(w=U;w<=D;w++){const Ke=h[w];if(pe>=Ze){lt(Ke,y,_,!0);continue}let ut;if(Ke.key!=null)ut=se.get(Ke.key);else for(ee=z;ee<=R;ee++)if(Jn[ee-z]===0&&tn(Ke,f[ee])){ut=ee;break}ut===void 0?lt(Ke,y,_,!0):(Jn[ut-z]=w+1,ut>=rc?rc=ut:En=!0,T(Ke,f[ut],g,null,y,_,S,C,I),pe++)}const ic=En?Yp(Jn):In;for(ee=ic.length-1,w=Ze-1;w>=0;w--){const Ke=z+w,ut=f[Ke],oc=Ke+1<k?f[Ke+1].el:v;Jn[w]===0?T(null,ut,g,oc,y,_,S,C,I):En&&(ee<0||w!==ic[ee]?Qt(ut,g,oc,2):ee--)}}},Qt=(h,f,g,v,y=null)=>{const{el:_,type:S,transition:C,children:I,shapeFlag:w}=h;if(w&6){Qt(h.component.subTree,f,g,v);return}if(w&128){h.suspense.move(f,g,v);return}if(w&64){S.move(h,f,g,wn);return}if(S===ze){s(_,f,g);for(let D=0;D<I.length;D++)Qt(I[D],f,g,v);s(h.anchor,f,g);return}if(S===Pi){L(h,f,g);return}if(v!==2&&w&1&&C)if(v===0)C.beforeEnter(_),s(_,f,g),je(()=>C.enter(_),y);else{const{leave:D,delayLeave:R,afterLeave:U}=C,z=()=>s(_,f,g),se=()=>{D(_,()=>{z(),U&&U()})};R?R(_,z,se):se()}else s(_,f,g)},lt=(h,f,g,v=!1,y=!1)=>{const{type:_,props:S,ref:C,children:I,dynamicChildren:w,shapeFlag:k,patchFlag:D,dirs:R}=h;if(C!=null&&go(C,null,g,h,!0),k&256){f.ctx.deactivate(h);return}const U=k&1&&R,z=!dr(h);let se;if(z&&(se=S&&S.onVnodeBeforeUnmount)&&ht(se,f,h),k&6)od(h.component,g,v);else{if(k&128){h.suspense.unmount(g,v);return}U&&Yt(h,null,f,"beforeUnmount"),k&64?h.type.remove(h,f,g,y,wn,v):w&&(_!==ze||D>0&&D&64)?Ct(w,f,g,!1,!0):(_===ze&&D&384||!y&&k&16)&&Ct(I,f,g),v&&nc(h)}(z&&(se=S&&S.onVnodeUnmounted)||U)&&je(()=>{se&&ht(se,f,h),U&&Yt(h,null,f,"unmounted")},g)},nc=h=>{const{type:f,el:g,anchor:v,transition:y}=h;if(f===ze){id(g,v);return}if(f===Pi){Z(h);return}const _=()=>{r(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:C}=y,I=()=>S(g,_);C?C(h.el,_,I):I()}else _()},id=(h,f)=>{let g;for(;h!==f;)g=p(h),r(h),h=g;r(f)},od=(h,f,g)=>{const{bum:v,scope:y,update:_,subTree:S,um:C}=h;v&&hr(v),y.stop(),_&&(_.active=!1,lt(S,h,f,g)),C&&je(C,f),je(()=>{h.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Ct=(h,f,g,v=!1,y=!1,_=0)=>{for(let S=_;S<h.length;S++)lt(h[S],f,g,v,y)},Gs=h=>h.shapeFlag&6?Gs(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),sc=(h,f,g)=>{h==null?f._vnode&&lt(f._vnode,null,null,!0):T(f._vnode||null,h,f,null,null,null,g),gc(),au(),f._vnode=h},wn={p:T,um:lt,m:Qt,r:nc,mt:Xn,mc:K,pc:ne,pbc:ue,n:Gs,o:t};let Di,xi;return e&&([Di,xi]=e(wn)),{render:sc,hydrate:Di,createApp:Gp(sc,Di)}}function Xt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Au(t,e,n=!1){const s=t.children,r=e.children;if($(s)&&$(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Mt(r[i]),a.el=o.el),n||Au(o,a)),a.type===Jr&&(a.el=o.el)}}function Yp(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Xp=t=>t.__isTeleport,ze=Symbol(void 0),Jr=Symbol(void 0),ot=Symbol(void 0),Pi=Symbol(void 0),is=[];let st=null;function tt(t=!1){is.push(st=t?null:[])}function Jp(){is.pop(),st=is[is.length-1]||null}let ps=1;function Ic(t){ps+=t}function Du(t){return t.dynamicChildren=ps>0?st||In:null,Jp(),ps>0&&st&&st.push(t),t}function ft(t,e,n,s,r,i){return Du(ye(t,e,n,s,r,i,!0))}function Zp(t,e,n,s,r){return Du(mt(t,e,n,s,r,!0))}function eg(t){return t?t.__v_isVNode===!0:!1}function tn(t,e){return t.type===e.type&&t.key===e.key}const Zr="__vInternal",xu=({key:t})=>t??null,pr=({ref:t,ref_key:e,ref_for:n})=>t!=null?be(t)||Be(t)||q(t)?{i:Ge,r:t,k:e,f:!!n}:t:null;function ye(t,e=null,n=null,s=0,r=null,i=t===ze?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xu(e),ref:e&&pr(e),scopeId:uu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ge};return a?(la(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=be(n)?8:16),ps>0&&!o&&st&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&st.push(c),c}const mt=tg;function tg(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Op)&&(t=ot),eg(t)){const a=jt(t,e,!0);return n&&la(a,n),ps>0&&!i&&st&&(a.shapeFlag&6?st[st.indexOf(t)]=a:st.push(a)),a.patchFlag|=-2,a}if(pg(t)&&(t=t.__vccOpts),e){e=ng(e);let{class:a,style:c}=e;a&&!be(a)&&(e.class=jr(a)),ce(c)&&(tu(c)&&!$(c)&&(c=Pe({},c)),e.style=sn(c))}const o=be(t)?1:pp(t)?128:Xp(t)?64:ce(t)?4:q(t)?2:0;return ye(t,e,n,s,r,o,i,!0)}function ng(t){return t?tu(t)||Zr in t?Pe({},t):t:null}function jt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?rg(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&xu(a),ref:e&&e.ref?n&&r?$(r)?r.concat(pr(e)):[r,pr(e)]:pr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ze?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jt(t.ssContent),ssFallback:t.ssFallback&&jt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function sg(t=" ",e=0){return mt(Jr,null,t,e)}function Sc(t="",e=!1){return e?(tt(),Zp(ot,null,t)):mt(ot,null,t)}function dt(t){return t==null||typeof t=="boolean"?mt(ot):$(t)?mt(ze,null,t.slice()):typeof t=="object"?Mt(t):mt(Jr,null,String(t))}function Mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:jt(t)}function la(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),la(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Zr in e)?e._ctx=Ge:r===3&&Ge&&(Ge.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:Ge},n=32):(e=String(e),s&64?(n=16,e=[sg(e)]):n=8);t.children=e,t.shapeFlag|=n}function rg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=jr([e.class,s.class]));else if(r==="style")e.style=sn([e.style,s.style]);else if(Hr(r)){const i=e[r],o=s[r];o&&i!==o&&!($(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function ht(t,e,n,s=null){Xe(t,e,7,[n,s])}const ig=Su();let og=0;function ag(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||ig,i={uid:og++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ed(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tu(s,r),emitsOptions:lu(s,r),emit:null,emitted:null,propsDefaults:re,inheritAttrs:s.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=cp.bind(null,i),t.ce&&t.ce(i),i}let de=null;const cg=()=>de||Ge,Rn=t=>{de=t,t.scope.on()},un=()=>{de&&de.scope.off(),de=null};function Nu(t){return t.vnode.shapeFlag&4}let gs=!1;function lg(t,e=!1){gs=e;const{props:n,children:s}=t.vnode,r=Nu(t);$p(t,n,r,e),qp(t,s);const i=r?ug(t,e):void 0;return gs=!1,i}function ug(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=nu(new Proxy(t.ctx,Lp));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?fg(t):null;Rn(t),jn();const i=Pt(s,t,0,[t.props,r]);if(Hn(),un(),$l(i)){if(i.then(un,un),e)return i.then(o=>{Ac(t,o,e)}).catch(o=>{Wr(o,t,0)});t.asyncDep=i}else Ac(t,i,e)}else ku(t,e)}function Ac(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=su(e)),ku(t,n)}let Dc;function ku(t,e,n){const s=t.type;if(!t.render){if(!e&&Dc&&!s.render){const r=s.template||aa(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Pe(Pe({isCustomElement:i,delimiters:a},o),c);s.render=Dc(r,l)}}t.render=s.render||it}Rn(t),jn(),Pp(t),Hn(),un()}function hg(t){return new Proxy(t.attrs,{get(e,n){return He(t,"get","$attrs"),e[n]}})}function fg(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=hg(t))},slots:t.slots,emit:t.emit,expose:e}}function ei(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(su(nu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in rs)return rs[n](t)},has(e,n){return n in e||n in rs}}))}function dg(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function pg(t){return q(t)&&"__vccOpts"in t}const gg=(t,e)=>tp(t,e,gs),mg=Symbol(""),yg=()=>fr(mg),vg="3.2.47",wg="http://www.w3.org/2000/svg",nn=typeof document<"u"?document:null,xc=nn&&nn.createElement("template"),Eg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?nn.createElementNS(wg,t):nn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>nn.createTextNode(t),createComment:t=>nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{xc.innerHTML=s?`<svg>${t}</svg>`:t;const a=xc.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function bg(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Tg(t,e,n){const s=t.style,r=be(n);if(n&&!r){if(e&&!be(e))for(const i in e)n[i]==null&&mo(s,i,"");for(const i in n)mo(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Nc=/\s*!important$/;function mo(t,e,n){if($(n))n.forEach(s=>mo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Cg(t,e);Nc.test(n)?t.setProperty($n(s),n.replace(Nc,""),"important"):t[s]=n}}const kc=["Webkit","Moz","ms"],Fi={};function Cg(t,e){const n=Fi[e];if(n)return n;let s=vt(e);if(s!=="filter"&&s in t)return Fi[e]=s;s=zr(s);for(let r=0;r<kc.length;r++){const i=kc[r]+s;if(i in t)return Fi[e]=i}return e}const Rc="http://www.w3.org/1999/xlink";function _g(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Rc,e.slice(6,e.length)):t.setAttributeNS(Rc,e,n);else{const i=fd(e);n==null||i&&!Vl(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ig(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Vl(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function bn(t,e,n,s){t.addEventListener(e,n,s)}function Sg(t,e,n,s){t.removeEventListener(e,n,s)}function Ag(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Dg(e);if(s){const l=i[e]=kg(s,r);bn(t,a,l,c)}else o&&(Sg(t,a,o,c),i[e]=void 0)}}const Oc=/(?:Once|Passive|Capture)$/;function Dg(t){let e;if(Oc.test(t)){e={};let s;for(;s=t.match(Oc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$n(t.slice(2)),e]}let Vi=0;const xg=Promise.resolve(),Ng=()=>Vi||(xg.then(()=>Vi=0),Vi=Date.now());function kg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Xe(Rg(s,n.value),e,5,[s])};return n.value=t,n.attached=Ng(),n}function Rg(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Mc=/^on[a-z]/,Og=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?bg(t,s,r):e==="style"?Tg(t,n,s):Hr(e)?zo(e)||Ag(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Mg(t,e,s,r))?Ig(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),_g(t,e,s,r))};function Mg(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Mc.test(e)&&q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Mc.test(e)&&be(n)?!1:e in t}const Lg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ep.props;const Lc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>hr(e,n):e};function Pg(t){t.target.composing=!0}function Pc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fg={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Lc(r);const i=s||r.props&&r.props.type==="number";bn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=to(a)),t._assign(a)}),n&&bn(t,"change",()=>{t.value=t.value.trim()}),e||(bn(t,"compositionstart",Pg),bn(t,"compositionend",Pc),bn(t,"change",Pc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Lc(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&to(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Vg=Pe({patchProp:Og},Eg);let Fc;function Ug(){return Fc||(Fc=Wp(Vg))}const Bg=(...t)=>{const e=Ug().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=$g(s);if(!r)return;const i=e._component;!q(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function $g(t){return be(t)?document.querySelector(t):t}const Ru=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},jg={},Hg={class:"ground",style:{"background-image":"url('Lava_Animation.webp')"}};function qg(t,e){return tt(),ft("div",Hg)}const Kg=Ru(jg,[["render",qg]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},zg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),s.push(n[u],n[d],n[p],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ou(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||d==null)throw new Gg;const p=i<<2|a>>4;if(s.push(p),l!==64){const m=a<<4&240|l>>2;if(s.push(m),d!==64){const A=l<<6&192|d;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wg=function(t){const e=Ou(t);return Mu.encodeByteArray(e,!0)},Cr=function(t){return Wg(t).replace(/\./g,"")},Qg=function(t){try{return Mu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=()=>Yg().__FIREBASE_DEFAULTS__,Jg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qg(t[1]);return e&&JSON.parse(e)},Lu=()=>{try{return Xg()||Jg()||Zg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},em=t=>{var e,n;return(n=(e=Lu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tm=t=>{const e=em(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},nm=()=>{var t;return(t=Lu())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Cr(JSON.stringify(n)),Cr(JSON.stringify(o)),a].join(".")}function im(){try{return typeof indexedDB=="object"}catch{return!1}}function om(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="FirebaseError";class qn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=am,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pu.prototype.create)}}class Pu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?cm(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new qn(r,a,s)}}function cm(t,e){return t.replace(lm,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const lm=/\{\$([^}]+)}/g;function yo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Vc(i)&&Vc(o)){if(!yo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Vc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t){return t&&t._delegate?t._delegate:t}class ys{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new sm;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fm(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hm(t){return t===Zt?void 0:t}function fm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new um(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const pm={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},gm=Y.INFO,mm={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},ym=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=mm[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fu{constructor(e){this.name=e,this._logLevel=gm,this._logHandler=ym,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const vm=(t,e)=>e.some(n=>t instanceof n);let Uc,Bc;function wm(){return Uc||(Uc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Em(){return Bc||(Bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vu=new WeakMap,vo=new WeakMap,Uu=new WeakMap,Ui=new WeakMap,ua=new WeakMap;function bm(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ft(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vu.set(n,t)}).catch(()=>{}),ua.set(e,t),e}function Tm(t){if(vo.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vo.set(t,e)}let wo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cm(t){wo=t(wo)}function _m(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Bi(this),e,...n);return Uu.set(s,e.sort?e.sort():[e]),Ft(s)}:Em().includes(t)?function(...e){return t.apply(Bi(this),e),Ft(Vu.get(this))}:function(...e){return Ft(t.apply(Bi(this),e))}}function Im(t){return typeof t=="function"?_m(t):(t instanceof IDBTransaction&&Tm(t),vm(t,wm())?new Proxy(t,wo):t)}function Ft(t){if(t instanceof IDBRequest)return bm(t);if(Ui.has(t))return Ui.get(t);const e=Im(t);return e!==t&&(Ui.set(t,e),ua.set(e,t)),e}const Bi=t=>ua.get(t);function Sm(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Ft(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ft(o.result),c.oldVersion,c.newVersion,Ft(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Am=["get","getKey","getAll","getAllKeys","count"],Dm=["put","add","delete","clear"],$i=new Map;function $c(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($i.get(e))return $i.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Dm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Am.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return $i.set(e,i),i}Cm(t=>({...t,get:(e,n,s)=>$c(e,n)||t.get(e,n,s),has:(e,n)=>!!$c(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Nm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Eo="@firebase/app",jc="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new Fu("@firebase/app"),km="@firebase/app-compat",Rm="@firebase/analytics-compat",Om="@firebase/analytics",Mm="@firebase/app-check-compat",Lm="@firebase/app-check",Pm="@firebase/auth",Fm="@firebase/auth-compat",Vm="@firebase/database",Um="@firebase/database-compat",Bm="@firebase/functions",$m="@firebase/functions-compat",jm="@firebase/installations",Hm="@firebase/installations-compat",qm="@firebase/messaging",Km="@firebase/messaging-compat",zm="@firebase/performance",Gm="@firebase/performance-compat",Wm="@firebase/remote-config",Qm="@firebase/remote-config-compat",Ym="@firebase/storage",Xm="@firebase/storage-compat",Jm="@firebase/firestore",Zm="@firebase/firestore-compat",ey="firebase",ty="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="[DEFAULT]",ny={[Eo]:"fire-core",[km]:"fire-core-compat",[Om]:"fire-analytics",[Rm]:"fire-analytics-compat",[Lm]:"fire-app-check",[Mm]:"fire-app-check-compat",[Pm]:"fire-auth",[Fm]:"fire-auth-compat",[Vm]:"fire-rtdb",[Um]:"fire-rtdb-compat",[Bm]:"fire-fn",[$m]:"fire-fn-compat",[jm]:"fire-iid",[Hm]:"fire-iid-compat",[qm]:"fire-fcm",[Km]:"fire-fcm-compat",[zm]:"fire-perf",[Gm]:"fire-perf-compat",[Wm]:"fire-rc",[Qm]:"fire-rc-compat",[Ym]:"fire-gcs",[Xm]:"fire-gcs-compat",[Jm]:"fire-fst",[Zm]:"fire-fst-compat","fire-js":"fire-js",[ey]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Map,To=new Map;function sy(t,e){try{t.container.addComponent(e)}catch(n){dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ir(t){const e=t.name;if(To.has(e))return dn.debug(`There were multiple attempts to register component ${e}.`),!1;To.set(e,t);for(const n of _r.values())sy(n,t);return!0}function ry(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vt=new Pu("app","Firebase",iy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ys("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=ty;function Bu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:bo,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Vt.create("bad-app-name",{appName:String(r)});if(n||(n=nm()),!n)throw Vt.create("no-options");const i=_r.get(r);if(i){if(yo(n,i.options)&&yo(s,i.config))return i;throw Vt.create("duplicate-app",{appName:r})}const o=new dm(r);for(const c of To.values())o.addComponent(c);const a=new oy(n,s,o);return _r.set(r,a),a}function cy(t=bo){const e=_r.get(t);if(!e&&t===bo)return Bu();if(!e)throw Vt.create("no-app",{appName:t});return e}function xn(t,e,n){var s;let r=(s=ny[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dn.warn(a.join(" "));return}Ir(new ys(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="firebase-heartbeat-database",uy=1,vs="firebase-heartbeat-store";let ji=null;function $u(){return ji||(ji=Sm(ly,uy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vs)}}}).catch(t=>{throw Vt.create("idb-open",{originalErrorMessage:t.message})})),ji}async function hy(t){try{return(await $u()).transaction(vs).objectStore(vs).get(ju(t))}catch(e){if(e instanceof qn)dn.warn(e.message);else{const n=Vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dn.warn(n.message)}}}async function Hc(t,e){try{const s=(await $u()).transaction(vs,"readwrite");return await s.objectStore(vs).put(e,ju(t)),s.done}catch(n){if(n instanceof qn)dn.warn(n.message);else{const s=Vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dn.warn(s.message)}}}function ju(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=1024,dy=30*24*60*60*1e3;class py{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new my(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=dy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qc(),{heartbeatsToSend:n,unsentEntries:s}=gy(this._heartbeatsCache.heartbeats),r=Cr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function qc(){return new Date().toISOString().substring(0,10)}function gy(t,e=fy){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Kc(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Kc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class my{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return im()?om().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Kc(t){return Cr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t){Ir(new ys("platform-logger",e=>new xm(e),"PRIVATE")),Ir(new ys("heartbeat",e=>new py(e),"PRIVATE")),xn(Eo,jc,t),xn(Eo,jc,"esm2017"),xn("fire-js","")}yy("");var vy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,ha=ha||{},V=vy||self;function Sr(){}function ti(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ks(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function wy(t){return Object.prototype.hasOwnProperty.call(t,Hi)&&t[Hi]||(t[Hi]=++Ey)}var Hi="closure_uid_"+(1e9*Math.random()>>>0),Ey=0;function by(t,e,n){return t.call.apply(t.bind,arguments)}function Ty(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Me(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Me=by:Me=Ty,Me.apply(null,arguments)}function tr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function De(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function zt(){this.s=this.s,this.o=this.o}var Cy=0;zt.prototype.s=!1;zt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Cy!=0)&&wy(this)};zt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function fa(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function zc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ti(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var _y=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",Sr,e),V.removeEventListener("test",Sr,e)}catch{}return t}();function Ar(t){return/^[\s\xa0]*$/.test(t)}var Gc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function qi(t,e){return t<e?-1:t>e?1:0}function ni(){var t=V.navigator;return t&&(t=t.userAgent)?t:""}function gt(t){return ni().indexOf(t)!=-1}function da(t){return da[" "](t),t}da[" "]=Sr;function Iy(t){var e=Dy;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Sy=gt("Opera"),On=gt("Trident")||gt("MSIE"),qu=gt("Edge"),Co=qu||On,Ku=gt("Gecko")&&!(ni().toLowerCase().indexOf("webkit")!=-1&&!gt("Edge"))&&!(gt("Trident")||gt("MSIE"))&&!gt("Edge"),Ay=ni().toLowerCase().indexOf("webkit")!=-1&&!gt("Edge");function zu(){var t=V.document;return t?t.documentMode:void 0}var Dr;e:{var Ki="",zi=function(){var t=ni();if(Ku)return/rv:([^\);]+)(\)|;)/.exec(t);if(qu)return/Edge\/([\d\.]+)/.exec(t);if(On)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ay)return/WebKit\/(\S+)/.exec(t);if(Sy)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(zi&&(Ki=zi?zi[1]:""),On){var Gi=zu();if(Gi!=null&&Gi>parseFloat(Ki)){Dr=String(Gi);break e}}Dr=Ki}var Dy={};function xy(){return Iy(function(){let t=0;const e=Gc(String(Dr)).split("."),n=Gc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=qi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||qi(r[2].length==0,i[2].length==0)||qi(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var _o;if(V.document&&On){var Wc=zu();_o=Wc||parseInt(Dr,10)||void 0}else _o=void 0;var Ny=_o;function ws(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ku){e:{try{da(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ky[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ws.X.h.call(this)}}De(ws,Le);var ky={2:"touch",3:"pen",4:"mouse"};ws.prototype.h=function(){ws.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Rs="closure_listenable_"+(1e6*Math.random()|0),Ry=0;function Oy(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Ry,this.ba=this.ea=!1}function si(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function pa(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Gu(t){const e={};for(const n in t)e[n]=t[n];return e}const Qc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wu(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Qc.length;i++)n=Qc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ri(t){this.src=t,this.g={},this.h=0}ri.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=So(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Oy(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Io(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Hu(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(si(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function So(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var ga="closure_lm_"+(1e6*Math.random()|0),Wi={};function Qu(t,e,n,s,r){if(s&&s.once)return Xu(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Qu(t,e[i],n,s,r);return null}return n=va(n),t&&t[Rs]?t.N(e,n,ks(s)?!!s.capture:!!s,r):Yu(t,e,n,!1,s,r)}function Yu(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ks(r)?!!r.capture:!!r,a=ya(t);if(a||(t[ga]=a=new ri(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=My(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)_y||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Zu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function My(){function t(n){return e.call(t.src,t.listener,n)}const e=Ly;return t}function Xu(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Xu(t,e[i],n,s,r);return null}return n=va(n),t&&t[Rs]?t.O(e,n,ks(s)?!!s.capture:!!s,r):Yu(t,e,n,!0,s,r)}function Ju(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ju(t,e[i],n,s,r);else s=ks(s)?!!s.capture:!!s,n=va(n),t&&t[Rs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=So(i,n,s,r),-1<n&&(si(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ya(t))&&(e=t.g[e.toString()],t=-1,e&&(t=So(e,n,s,r)),(n=-1<t?e[t]:null)&&ma(n))}function ma(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Rs])Io(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Zu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ya(e))?(Io(n,t),n.h==0&&(n.src=null,e[ga]=null)):si(t)}}}function Zu(t){return t in Wi?Wi[t]:Wi[t]="on"+t}function Ly(t,e){if(t.ba)t=!0;else{e=new ws(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ma(t),t=n.call(s,e)}return t}function ya(t){return t=t[ga],t instanceof ri?t:null}var Qi="__closure_events_fn_"+(1e9*Math.random()>>>0);function va(t){return typeof t=="function"?t:(t[Qi]||(t[Qi]=function(e){return t.handleEvent(e)}),t[Qi])}function Ie(){zt.call(this),this.i=new ri(this),this.P=this,this.I=null}De(Ie,zt);Ie.prototype[Rs]=!0;Ie.prototype.removeEventListener=function(t,e,n,s){Ju(this,t,e,n,s)};function Ae(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Le(e,t);else if(e instanceof Le)e.target=e.target||t;else{var r=e;e=new Le(s,t),Wu(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=nr(o,s,!0,e)&&r}if(o=e.g=t,r=nr(o,s,!0,e)&&r,r=nr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=nr(o,s,!1,e)&&r}Ie.prototype.M=function(){if(Ie.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)si(n[s]);delete t.g[e],t.h--}}this.I=null};Ie.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ie.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function nr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Io(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var wa=V.JSON.stringify;function Py(){var t=nh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Fy{constructor(){this.h=this.g=null}add(e,n){const s=eh.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var eh=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Vy,t=>t.reset());class Vy{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Uy(t){V.setTimeout(()=>{throw t},0)}function th(t,e){Ao||By(),Do||(Ao(),Do=!0),nh.add(t,e)}var Ao;function By(){var t=V.Promise.resolve(void 0);Ao=function(){t.then($y)}}var Do=!1,nh=new Fy;function $y(){for(var t;t=Py();){try{t.h.call(t.g)}catch(n){Uy(n)}var e=eh;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Do=!1}function ii(t,e){Ie.call(this),this.h=t||1,this.g=e||V,this.j=Me(this.lb,this),this.l=Date.now()}De(ii,Ie);x=ii.prototype;x.ca=!1;x.R=null;x.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ae(this,"tick"),this.ca&&(Ea(this),this.start()))}};x.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ea(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}x.M=function(){ii.X.M.call(this),Ea(this),delete this.g};function ba(t,e,n){if(typeof t=="function")n&&(t=Me(t,n));else if(t&&typeof t.handleEvent=="function")t=Me(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function sh(t){t.g=ba(()=>{t.g=null,t.i&&(t.i=!1,sh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jy extends zt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sh(this)}M(){super.M(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Es(t){zt.call(this),this.h=t,this.g={}}De(Es,zt);var Yc=[];function rh(t,e,n,s){Array.isArray(n)||(n&&(Yc[0]=n.toString()),n=Yc);for(var r=0;r<n.length;r++){var i=Qu(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ih(t){pa(t.g,function(e,n){this.g.hasOwnProperty(n)&&ma(e)},t),t.g={}}Es.prototype.M=function(){Es.X.M.call(this),ih(this)};Es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function oi(){this.g=!0}oi.prototype.Aa=function(){this.g=!1};function Hy(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function qy(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function _n(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zy(t,n)+(s?" "+s:"")})}function Ky(t,e){t.info(function(){return"TIMEOUT: "+e})}oi.prototype.info=function(){};function zy(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return wa(n)}catch{return e}}var mn={},Xc=null;function ai(){return Xc=Xc||new Ie}mn.Pa="serverreachability";function oh(t){Le.call(this,mn.Pa,t)}De(oh,Le);function bs(t){const e=ai();Ae(e,new oh(e))}mn.STAT_EVENT="statevent";function ah(t,e){Le.call(this,mn.STAT_EVENT,t),this.stat=e}De(ah,Le);function $e(t){const e=ai();Ae(e,new ah(e,t))}mn.Qa="timingevent";function ch(t,e){Le.call(this,mn.Qa,t),this.size=e}De(ch,Le);function Os(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var ci={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},lh={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ta(){}Ta.prototype.h=null;function Jc(t){return t.h||(t.h=t.i())}function uh(){}var Ms={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ca(){Le.call(this,"d")}De(Ca,Le);function _a(){Le.call(this,"c")}De(_a,Le);var xo;function li(){}De(li,Ta);li.prototype.g=function(){return new XMLHttpRequest};li.prototype.i=function(){return{}};xo=new li;function Ls(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Es(this),this.O=Gy,t=Co?125:void 0,this.T=new ii(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new hh}function hh(){this.i=null,this.g="",this.h=!1}var Gy=45e3,No={},xr={};x=Ls.prototype;x.setTimeout=function(t){this.O=t};function ko(t,e,n){t.K=1,t.v=hi(Dt(e)),t.s=n,t.P=!0,fh(t,null)}function fh(t,e){t.F=Date.now(),Ps(t),t.A=Dt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Eh(n.i,"t",s),t.C=0,n=t.l.H,t.h=new hh,t.g=$h(t.l,n?e:null,!t.s),0<t.N&&(t.L=new jy(Me(t.La,t,t.g),t.N)),rh(t.S,t.g,"readystatechange",t.ib),e=t.H?Gu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),bs(),Hy(t.j,t.u,t.A,t.m,t.U,t.s)}x.ib=function(t){t=t.target;const e=this.L;e&&It(t)==3?e.l():this.La(t)};x.La=function(t){try{if(t==this.g)e:{const u=It(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>u)&&(u!=3||Co||this.g&&(this.h.h||this.g.fa()||nl(this.g)))){this.I||u!=4||e==7||(e==8||0>=d?bs(3):bs(2)),ui(this);var n=this.g.aa();this.Y=n;t:if(dh(this)){var s=nl(this.g);t="";var r=s.length,i=It(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),os(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,qy(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ar(a)){var l=a;break t}}l=null}if(n=l)_n(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ro(this,n);else{this.i=!1,this.o=3,$e(12),on(this),os(this);break e}}this.P?(ph(this,u,o),Co&&this.i&&u==3&&(rh(this.S,this.T,"tick",this.hb),this.T.start())):(_n(this.j,this.m,o,null),Ro(this,o)),u==4&&on(this),this.i&&!this.I&&(u==4?Fh(this.l,this):(this.i=!1,Ps(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,$e(12)):(this.o=0,$e(13)),on(this),os(this)}}}catch{}finally{}};function dh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function ph(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Wy(t,n),r==xr){e==4&&(t.o=4,$e(14),s=!1),_n(t.j,t.m,null,"[Incomplete Response]");break}else if(r==No){t.o=4,$e(15),_n(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else _n(t.j,t.m,r,null),Ro(t,r);dh(t)&&r!=xr&&r!=No&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,$e(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ka(e),e.K=!0,$e(11))):(_n(t.j,t.m,n,"[Invalid Chunked Response]"),on(t),os(t))}x.hb=function(){if(this.g){var t=It(this.g),e=this.g.fa();this.C<e.length&&(ui(this),ph(this,t,e),this.i&&t!=4&&Ps(this))}};function Wy(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?xr:(n=Number(e.substring(n,s)),isNaN(n)?No:(s+=1,s+n>e.length?xr:(e=e.substr(s,n),t.C=s+n,e)))}x.cancel=function(){this.I=!0,on(this)};function Ps(t){t.V=Date.now()+t.O,gh(t,t.O)}function gh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Os(Me(t.gb,t),e)}function ui(t){t.B&&(V.clearTimeout(t.B),t.B=null)}x.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Ky(this.j,this.A),this.K!=2&&(bs(),$e(17)),on(this),this.o=2,os(this)):gh(this,this.V-t)};function os(t){t.l.G==0||t.I||Fh(t.l,t)}function on(t){ui(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ea(t.T),ih(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ro(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Oo(n.h,t))){if(!t.J&&Oo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Rr(n),pi(n);else break e;Na(n),$e(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Os(Me(n.cb,n),6e3));if(1>=Ch(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else an(n,11)}else if((t.J||n.g==t)&&Rr(n),!Ar(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const d=l[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const A=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var i=s.h;i.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ia(i,i.h),i.h=null))}if(s.D){const T=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.za=T,oe(s.F,s.D,T))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Bh(s,s.H?s.ka:null,s.V),o.J){_h(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ui(a),Ps(a)),s.g=o}else Lh(s);0<n.i.length&&gi(n)}else l[0]!="stop"&&l[0]!="close"||an(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?an(n,7):xa(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}bs(4)}catch{}}function Qy(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ti(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Yy(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ti(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function mh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ti(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Yy(t),s=Qy(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var yh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xy(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function hn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof hn){this.h=e!==void 0?e:t.h,Nr(this,t.j),this.s=t.s,this.g=t.g,kr(this,t.m),this.l=t.l,e=t.i;var n=new Ts;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Zc(this,n),this.o=t.o}else t&&(n=String(t).match(yh))?(this.h=!!e,Nr(this,n[1]||"",!0),this.s=ts(n[2]||""),this.g=ts(n[3]||"",!0),kr(this,n[4]),this.l=ts(n[5]||"",!0),Zc(this,n[6]||"",!0),this.o=ts(n[7]||"")):(this.h=!!e,this.i=new Ts(null,this.h))}hn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ns(e,el,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ns(e,el,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ns(n,n.charAt(0)=="/"?ev:Zy,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ns(n,nv)),t.join("")};function Dt(t){return new hn(t)}function Nr(t,e,n){t.j=n?ts(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function kr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Zc(t,e,n){e instanceof Ts?(t.i=e,sv(t.i,t.h)):(n||(e=ns(e,tv)),t.i=new Ts(e,t.h))}function oe(t,e,n){t.i.set(e,n)}function hi(t){return oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ts(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Jy),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Jy(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var el=/[#\/\?@]/g,Zy=/[#\?:]/g,ev=/[#\?]/g,tv=/[#\?@]/g,nv=/#/g;function Ts(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gt(t){t.g||(t.g=new Map,t.h=0,t.i&&Xy(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Ts.prototype;x.add=function(t,e){Gt(this),this.i=null,t=Kn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function vh(t,e){Gt(t),e=Kn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function wh(t,e){return Gt(t),e=Kn(t,e),t.g.has(e)}x.forEach=function(t,e){Gt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};x.oa=function(){Gt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};x.W=function(t){Gt(this);let e=[];if(typeof t=="string")wh(this,t)&&(e=e.concat(this.g.get(Kn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return Gt(this),this.i=null,t=Kn(this,t),wh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Eh(t,e,n){vh(t,e),0<n.length&&(t.i=null,t.g.set(Kn(t,e),fa(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Kn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function sv(t,e){e&&!t.j&&(Gt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(vh(this,s),Eh(this,r,n))},t)),t.j=e}var rv=class{constructor(e,n){this.h=e,this.g=n}};function bh(t){this.l=t||iv,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ga&&V.g.Ga()&&V.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var iv=10;function Th(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ch(t){return t.h?1:t.g?t.g.size:0}function Oo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ia(t,e){t.g?t.g.add(e):t.h=e}function _h(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bh.prototype.cancel=function(){if(this.i=Ih(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ih(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return fa(t.i)}function Sa(){}Sa.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};Sa.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function ov(){this.g=new Sa}function av(t,e,n){const s=n||"";try{mh(t,function(r,i){let o=r;ks(r)&&(o=wa(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function cv(t,e){const n=new oi;if(V.Image){const s=new Image;s.onload=tr(sr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=tr(sr,n,s,"TestLoadImage: error",!1,e),s.onabort=tr(sr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=tr(sr,n,s,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function sr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Fs(t){this.l=t.ac||null,this.j=t.jb||!1}De(Fs,Ta);Fs.prototype.g=function(){return new fi(this.l,this.j)};Fs.prototype.i=function(t){return function(){return t}}({});function fi(t,e){Ie.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Aa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(fi,Ie);var Aa=0;x=fi.prototype;x.open=function(t,e){if(this.readyState!=Aa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Cs(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||V).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=Aa};x.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sh(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Sh(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}x.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vs(this):Cs(this),this.readyState==3&&Sh(this)}};x.Va=function(t){this.g&&(this.response=this.responseText=t,Vs(this))};x.Ua=function(t){this.g&&(this.response=t,Vs(this))};x.ga=function(){this.g&&Vs(this)};function Vs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Cs(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Cs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(fi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var lv=V.JSON.parse;function fe(t){Ie.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ah,this.K=this.L=!1}De(fe,Ie);var Ah="",uv=/^https?$/i,hv=["POST","PUT"];x=fe.prototype;x.Ka=function(t){this.L=t};x.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():xo.g(),this.C=this.u?Jc(this.u):Jc(xo),this.g.onreadystatechange=Me(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){tl(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=V.FormData&&t instanceof V.FormData,!(0<=Hu(hv,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Nh(this),0<this.B&&((this.K=fv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Me(this.qa,this)):this.A=ba(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){tl(this,i)}};function fv(t){return On&&xy()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.qa=function(){typeof ha<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function tl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Dh(t),di(t)}function Dh(t){t.D||(t.D=!0,Ae(t,"complete"),Ae(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ae(this,"complete"),Ae(this,"abort"),di(this))};x.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),di(this,!0)),fe.X.M.call(this)};x.Ha=function(){this.s||(this.F||this.v||this.l?xh(this):this.fb())};x.fb=function(){xh(this)};function xh(t){if(t.h&&typeof ha<"u"&&(!t.C[1]||It(t)!=4||t.aa()!=2)){if(t.v&&It(t)==4)ba(t.Ha,0,t);else if(Ae(t,"readystatechange"),It(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(yh)[1]||null;if(!r&&V.self&&V.self.location){var i=V.self.location.protocol;r=i.substr(0,i.length-1)}s=!uv.test(r?r.toLowerCase():"")}n=s}if(n)Ae(t,"complete"),Ae(t,"success");else{t.m=6;try{var o=2<It(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Dh(t)}}finally{di(t)}}}}function di(t,e){if(t.g){Nh(t);const n=t.g,s=t.C[0]?Sr:null;t.g=null,t.C=null,e||Ae(t,"ready");try{n.onreadystatechange=s}catch{}}}function Nh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function It(t){return t.g?t.g.readyState:0}x.aa=function(){try{return 2<It(this)?this.g.status:-1}catch{return-1}};x.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),lv(e)}};function nl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ah:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Ea=function(){return this.m};x.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function kh(t){let e="";return pa(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Da(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=kh(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):oe(t,e,n))}function Zn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Rh(t){this.Ca=0,this.i=[],this.j=new oi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Zn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Zn("baseRetryDelayMs",5e3,t),this.bb=Zn("retryDelaySeedMs",1e4,t),this.$a=Zn("forwardChannelMaxRetries",2,t),this.ta=Zn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new bh(t&&t.concurrentRequestLimit),this.Fa=new ov,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}x=Rh.prototype;x.ma=8;x.G=1;function xa(t){if(Oh(t),t.G==3){var e=t.U++,n=Dt(t.F);oe(n,"SID",t.I),oe(n,"RID",e),oe(n,"TYPE","terminate"),Us(t,n),e=new Ls(t,t.j,e,void 0),e.K=2,e.v=hi(Dt(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=$h(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ps(e)}Uh(t)}function pi(t){t.g&&(ka(t),t.g.cancel(),t.g=null)}function Oh(t){pi(t),t.u&&(V.clearTimeout(t.u),t.u=null),Rr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function gi(t){Th(t.h)||t.m||(t.m=!0,th(t.Ja,t),t.C=0)}function dv(t,e){return Ch(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Os(Me(t.Ja,t,e),Vh(t,t.C)),t.C++,!0)}x.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ls(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Gu(i),Wu(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Mh(this,r,e),n=Dt(this.F),oe(n,"RID",t),oe(n,"CVER",22),this.D&&oe(n,"X-HTTP-Session-Id",this.D),Us(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(kh(i)))+"&"+e:this.o&&Da(n,this.o,i)),Ia(this.h,r),this.Ya&&oe(n,"TYPE","init"),this.O?(oe(n,"$req",e),oe(n,"SID","null"),r.Z=!0,ko(r,n,null)):ko(r,n,e),this.G=2}}else this.G==3&&(t?sl(this,t):this.i.length==0||Th(this.h)||sl(this))};function sl(t,e){var n;e?n=e.m:n=t.U++;const s=Dt(t.F);oe(s,"SID",t.I),oe(s,"RID",n),oe(s,"AID",t.T),Us(t,s),t.o&&t.s&&Da(s,t.o,t.s),n=new Ls(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Mh(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ia(t.h,n),ko(n,s,e)}function Us(t,e){t.ia&&pa(t.ia,function(n,s){oe(e,s,n)}),t.l&&mh({},function(n,s){oe(e,s,n)})}function Mh(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Me(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{av(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Lh(t){t.g||t.u||(t.Z=1,th(t.Ia,t),t.A=0)}function Na(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Os(Me(t.Ia,t),Vh(t,t.A)),t.A++,!0)}x.Ia=function(){if(this.u=null,Ph(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Os(Me(this.eb,this),t)}};x.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,$e(10),pi(this),Ph(this))};function ka(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function Ph(t){t.g=new Ls(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Dt(t.sa);oe(e,"RID","rpc"),oe(e,"SID",t.I),oe(e,"CI",t.L?"0":"1"),oe(e,"AID",t.T),oe(e,"TYPE","xmlhttp"),Us(t,e),t.o&&t.s&&Da(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=hi(Dt(e)),n.s=null,n.P=!0,fh(n,t)}x.cb=function(){this.v!=null&&(this.v=null,pi(this),Na(this),$e(19))};function Rr(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function Fh(t,e){var n=null;if(t.g==e){Rr(t),ka(t),t.g=null;var s=2}else if(Oo(t.h,e))n=e.D,_h(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ai(),Ae(s,new ch(s,n)),gi(t)}else Lh(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&dv(t,e)||s==2&&Na(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:an(t,5);break;case 4:an(t,10);break;case 3:an(t,6);break;default:an(t,2)}}}function Vh(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function an(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Me(t.kb,t);n||(n=new hn("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||Nr(n,"https"),hi(n)),cv(n.toString(),s)}else $e(2);t.G=0,t.l&&t.l.va(e),Uh(t),Oh(t)}x.kb=function(t){t?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function Uh(t){if(t.G=0,t.la=[],t.l){const e=Ih(t.h);(e.length!=0||t.i.length!=0)&&(zc(t.la,e),zc(t.la,t.i),t.h.i.length=0,fa(t.i),t.i.length=0),t.l.ua()}}function Bh(t,e,n){var s=n instanceof hn?Dt(n):new hn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),kr(s,s.m);else{var r=V.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new hn(null,void 0);s&&Nr(i,s),e&&(i.g=e),r&&kr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&oe(s,n,e),oe(s,"VER",t.ma),Us(t,s),s}function $h(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new fe(new Fs({jb:!0})):new fe(t.ra),e.Ka(t.H),e}function jh(){}x=jh.prototype;x.xa=function(){};x.wa=function(){};x.va=function(){};x.ua=function(){};x.Ra=function(){};function Or(){if(On&&!(10<=Number(Ny)))throw Error("Environmental error: no available transport.")}Or.prototype.g=function(t,e){return new We(t,e)};function We(t,e){Ie.call(this),this.g=new Rh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ar(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ar(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new zn(this)}De(We,Ie);We.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;$e(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Bh(t,null,t.V),gi(t)};We.prototype.close=function(){xa(this.g)};We.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=wa(t),t=n);e.i.push(new rv(e.ab++,t)),e.G==3&&gi(e)};We.prototype.M=function(){this.g.l=null,delete this.j,xa(this.g),delete this.g,We.X.M.call(this)};function Hh(t){Ca.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}De(Hh,Ca);function qh(){_a.call(this),this.status=1}De(qh,_a);function zn(t){this.g=t}De(zn,jh);zn.prototype.xa=function(){Ae(this.g,"a")};zn.prototype.wa=function(t){Ae(this.g,new Hh(t))};zn.prototype.va=function(t){Ae(this.g,new qh)};zn.prototype.ua=function(){Ae(this.g,"b")};Or.prototype.createWebChannel=Or.prototype.g;We.prototype.send=We.prototype.u;We.prototype.open=We.prototype.m;We.prototype.close=We.prototype.close;ci.NO_ERROR=0;ci.TIMEOUT=8;ci.HTTP_ERROR=6;lh.COMPLETE="complete";uh.EventType=Ms;Ms.OPEN="a";Ms.CLOSE="b";Ms.ERROR="c";Ms.MESSAGE="d";Ie.prototype.listen=Ie.prototype.N;fe.prototype.listenOnce=fe.prototype.O;fe.prototype.getLastError=fe.prototype.Oa;fe.prototype.getLastErrorCode=fe.prototype.Ea;fe.prototype.getStatus=fe.prototype.aa;fe.prototype.getResponseJson=fe.prototype.Sa;fe.prototype.getResponseText=fe.prototype.fa;fe.prototype.send=fe.prototype.da;fe.prototype.setWithCredentials=fe.prototype.Ka;var pv=function(){return new Or},gv=function(){return ai()},Yi=ci,mv=lh,yv=mn,rl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},vv=Fs,rr=uh,wv=fe;const il="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gn="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new Fu("@firebase/firestore");function ol(){return pn.logLevel}function N(t,...e){if(pn.logLevel<=Y.DEBUG){const n=e.map(Ra);pn.debug(`Firestore (${Gn}): ${t}`,...n)}}function xt(t,...e){if(pn.logLevel<=Y.ERROR){const n=e.map(Ra);pn.error(`Firestore (${Gn}): ${t}`,...n)}}function Mr(t,...e){if(pn.logLevel<=Y.WARN){const n=e.map(Ra);pn.warn(`Firestore (${Gn}): ${t}`,...n)}}function Ra(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t="Unexpected state"){const e=`FIRESTORE (${Gn}) INTERNAL ASSERTION FAILED: `+t;throw xt(e),new Error(e)}function ie(t,e){t||F()}function H(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ev{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ne.UNAUTHENTICATED))}shutdown(){}}class bv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Tv{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ut,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ut)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ie(typeof s.accessToken=="string"),new Kh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Ne(e)}}class Cv{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class _v{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Cv(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Iv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sv{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.T=n.token,new Iv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Av(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function X(t,e){return t<e?-1:t>e?1:0}function Mn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new we(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new we(0,0))}static max(){return new B(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,s){n===void 0?n=0:n>e.length&&F(),s===void 0?s=e.length-n:s>e.length-n&&F(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return _s.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _s?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ae extends _s{construct(e,n,s){return new ae(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const Dv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends _s{construct(e,n,s){return new Oe(e,n,s)}static isValidIdentifier(e){return Dv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new M(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new M(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(n)}static emptyPath(){return new Oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ae.fromString(e))}static fromName(e){return new O(ae.fromString(e).popFirst(5))}static empty(){return new O(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ae(e.slice()))}}function xv(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=B.fromTimestamp(s===1e9?new we(n+1,0):new we(n,s));return new Ht(r,O.empty(),e)}function Nv(t){return new Ht(t.readTime,t.key,-1)}class Ht{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ht(B.min(),O.empty(),-1)}static max(){return new Ht(B.max(),O.empty(),-1)}}function kv(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ov{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Rv)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function $s(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Oa.ct=-1;function mi(t){return t==null}function Lr(t){return t===0&&1/t==-1/0}function Mv(t){return typeof t=="number"&&Number.isInteger(t)&&!Lr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.comparator=e,this.root=n||Se.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ir(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ir(this.root,e,this.comparator,!1)}getReverseIterator(){return new ir(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ir(this.root,e,this.comparator,!0)}}class ir{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Se.RED,this.left=r??Se.EMPTY,this.right=i??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Se(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Se.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Se(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cl(this.data.getIterator())}getIteratorFrom(e){return new cl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ee(this.comparator);return n.data=e,n}}class cl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new rt([])}unionWith(e){let n=new Ee(Oe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Lv("Invalid base64 string: "+r):r}}(e);return new Fe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const Pv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(t){if(ie(!!t),typeof t=="string"){let e=0;const n=Pv.exec(t);if(ie(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ln(t){return typeof t=="string"?Fe.fromBase64String(t):Fe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qh(t){const e=t.mapValue.fields.__previous_value__;return Wh(e)?Qh(e):e}function Is(t){const e=qt(t.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ss{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ss("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ss&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wh(t)?4:Vv(t)?9007199254740991:10:F()}function wt(t,e){if(t===e)return!0;const n=gn(t);if(n!==gn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Is(t).isEqual(Is(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=qt(s.timestampValue),o=qt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Ln(s.bytesValue).isEqual(Ln(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return me(s.geoPointValue.latitude)===me(r.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return me(s.integerValue)===me(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=me(s.doubleValue),o=me(r.doubleValue);return i===o?Lr(i)===Lr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Mn(t.arrayValue.values||[],e.arrayValue.values||[],wt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(al(i)!==al(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!wt(i[a],o[a])))return!1;return!0}(t,e);default:return F()}}function As(t,e){return(t.values||[]).find(n=>wt(n,e))!==void 0}function Pn(t,e){if(t===e)return 0;const n=gn(t),s=gn(e);if(n!==s)return X(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=me(r.integerValue||r.doubleValue),a=me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ll(t.timestampValue,e.timestampValue);case 4:return ll(Is(t),Is(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Ln(r),a=Ln(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=X(o[c],a[c]);if(l!==0)return l}return X(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=X(me(r.latitude),me(i.latitude));return o!==0?o:X(me(r.longitude),me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Pn(o[c],a[c]);if(l)return l}return X(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===or.mapValue&&i===or.mapValue)return 0;if(r===or.mapValue)return 1;if(i===or.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const d=X(a[u],l[u]);if(d!==0)return d;const p=Pn(o[a[u]],c[l[u]]);if(p!==0)return p}return X(a.length,l.length)}(t.mapValue,e.mapValue);default:throw F()}}function ll(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=qt(t),s=qt(e),r=X(n.seconds,s.seconds);return r!==0?r:X(n.nanos,s.nanos)}function Fn(t){return Mo(t)}function Mo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=qt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ln(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Mo(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Mo(s.fields[a])}`;return i+"}"}(t.mapValue):F();var e,n}function Lo(t){return!!t&&"integerValue"in t}function Ma(t){return!!t&&"arrayValue"in t}function ul(t){return!!t&&"nullValue"in t}function hl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gr(t){return!!t&&"mapValue"in t}function as(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=as(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=as(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Vv(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.value=e}static empty(){return new Ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!gr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=as(n)}setAll(e){let n=Oe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=as(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());gr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];gr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Wn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ye(as(this.value))}}function Yh(t){const e=[];return Wn(t.fields,(n,s)=>{const r=new Oe([n]);if(gr(s)){const i=Yh(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ke(e,0,B.min(),B.min(),B.min(),Ye.empty(),0)}static newFoundDocument(e,n,s,r){return new ke(e,1,n,B.min(),s,r,0)}static newNoDocument(e,n){return new ke(e,2,n,B.min(),B.min(),Ye.empty(),0)}static newUnknownDocument(e,n){return new ke(e,3,n,B.min(),B.min(),Ye.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n){this.position=e,this.inclusive=n}}function fl(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=O.comparator(O.fromName(o.referenceValue),n.key):s=Pn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function dl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n="asc"){this.field=e,this.dir=n}}function Uv(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{}class ve extends Xh{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new $v(e,n,s):n==="array-contains"?new qv(e,s):n==="in"?new Kv(e,s):n==="not-in"?new zv(e,s):n==="array-contains-any"?new Gv(e,s):new ve(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new jv(e,s):new Hv(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Pn(n,this.value)):n!==null&&gn(this.value)===gn(n)&&this.matchesComparison(Pn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Et extends Xh{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Et(e,n)}matches(e){return Jh(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Jh(t){return t.op==="and"}function Zh(t){return Bv(t)&&Jh(t)}function Bv(t){for(const e of t.filters)if(e instanceof Et)return!1;return!0}function Po(t){if(t instanceof ve)return t.field.canonicalString()+t.op.toString()+Fn(t.value);if(Zh(t))return t.filters.map(e=>Po(e)).join(",");{const e=t.filters.map(n=>Po(n)).join(",");return`${t.op}(${e})`}}function ef(t,e){return t instanceof ve?function(n,s){return s instanceof ve&&n.op===s.op&&n.field.isEqual(s.field)&&wt(n.value,s.value)}(t,e):t instanceof Et?function(n,s){return s instanceof Et&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&ef(i,s.filters[o]),!0):!1}(t,e):void F()}function tf(t){return t instanceof ve?function(e){return`${e.field.canonicalString()} ${e.op} ${Fn(e.value)}`}(t):t instanceof Et?function(e){return e.op.toString()+" {"+e.getFilters().map(tf).join(" ,")+"}"}(t):"Filter"}class $v extends ve{constructor(e,n,s){super(e,n,s),this.key=O.fromName(s.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class jv extends ve{constructor(e,n){super(e,"in",n),this.keys=nf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Hv extends ve{constructor(e,n){super(e,"not-in",n),this.keys=nf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>O.fromName(s.referenceValue))}class qv extends ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ma(n)&&As(n.arrayValue,this.value)}}class Kv extends ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&As(this.value.arrayValue,n)}}class zv extends ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(As(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!As(this.value.arrayValue,n)}}class Gv extends ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ma(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>As(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function pl(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Wv(t,e,n,s,r,i,o)}function La(t){const e=H(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Po(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),mi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Fn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Fn(s)).join(",")),e.ft=n}return e.ft}function Pa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Uv(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ef(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dl(t.startAt,e.startAt)&&dl(t.endAt,e.endAt)}function Fo(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Qv(t,e,n,s,r,i,o,a){return new yi(t,e,n,s,r,i,o,a)}function sf(t){return new yi(t)}function gl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Yv(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Xv(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Jv(t){return t.collectionGroup!==null}function Nn(t){const e=H(t);if(e.dt===null){e.dt=[];const n=Xv(e),s=Yv(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new cs(n)),e.dt.push(new cs(Oe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new cs(Oe.keyField(),i))}}}return e.dt}function Nt(t){const e=H(t);if(!e.wt)if(e.limitType==="F")e.wt=pl(e.path,e.collectionGroup,Nn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Nn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new cs(i.field,o))}const s=e.endAt?new Pr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Pr(e.startAt.position,e.startAt.inclusive):null;e.wt=pl(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function Vo(t,e,n){return new yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vi(t,e){return Pa(Nt(t),Nt(e))&&t.limitType===e.limitType}function rf(t){return`${La(Nt(t))}|lt:${t.limitType}`}function Uo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>tf(s)).join(", ")}]`),mi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Fn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Fn(s)).join(",")),`Target(${n})`}(Nt(t))}; limitType=${t.limitType})`}function wi(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):O.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Nn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=fl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Nn(n),s)||n.endAt&&!function(r,i,o){const a=fl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Nn(n),s))}(t,e)}function Zv(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function of(t){return(e,n)=>{let s=!1;for(const r of Nn(t)){const i=ew(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function ew(t,e,n){const s=t.field.isKeyField()?O.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Pn(a,c):F()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Wn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Gh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=new Te(O.comparator);function kt(){return tw}const af=new Te(O.comparator);function ss(...t){let e=af;for(const n of t)e=e.insert(n.key,n);return e}function cf(t){let e=af;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function cn(){return ls()}function lf(){return ls()}function ls(){return new Qn(t=>t.toString(),(t,e)=>t.isEqual(e))}const nw=new Te(O.comparator),sw=new Ee(O.comparator);function G(...t){let e=sw;for(const n of t)e=e.add(n);return e}const rw=new Ee(X);function uf(){return rw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lr(e)?"-0":e}}function ff(t){return{integerValue:""+t}}function iw(t,e){return Mv(e)?ff(e):hf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this._=void 0}}function ow(t,e,n){return t instanceof Fr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Ds?pf(t,e):t instanceof xs?gf(t,e):function(s,r){const i=df(s,r),o=ml(i)+ml(s._t);return Lo(i)&&Lo(s._t)?ff(o):hf(s.serializer,o)}(t,e)}function aw(t,e,n){return t instanceof Ds?pf(t,e):t instanceof xs?gf(t,e):n}function df(t,e){return t instanceof Vr?Lo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Fr extends Ei{}class Ds extends Ei{constructor(e){super(),this.elements=e}}function pf(t,e){const n=mf(e);for(const s of t.elements)n.some(r=>wt(r,s))||n.push(s);return{arrayValue:{values:n}}}class xs extends Ei{constructor(e){super(),this.elements=e}}function gf(t,e){let n=mf(e);for(const s of t.elements)n=n.filter(r=>!wt(r,s));return{arrayValue:{values:n}}}class Vr extends Ei{constructor(e,n){super(),this.serializer=e,this._t=n}}function ml(t){return me(t.integerValue||t.doubleValue)}function mf(t){return Ma(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function cw(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ds&&s instanceof Ds||n instanceof xs&&s instanceof xs?Mn(n.elements,s.elements,wt):n instanceof Vr&&s instanceof Vr?wt(n._t,s._t):n instanceof Fr&&s instanceof Fr}(t.transform,e.transform)}class lw{constructor(e,n){this.version=e,this.transformResults=n}}class St{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new St}static exists(e){return new St(void 0,e)}static updateTime(e){return new St(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bi{}function yf(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wf(t.key,St.none()):new js(t.key,t.data,St.none());{const n=t.data,s=Ye.empty();let r=new Ee(Oe.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new yn(t.key,s,new rt(r.toArray()),St.none())}}function uw(t,e,n){t instanceof js?function(s,r,i){const o=s.value.clone(),a=vl(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof yn?function(s,r,i){if(!mr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=vl(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(vf(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function us(t,e,n,s){return t instanceof js?function(r,i,o,a){if(!mr(r.precondition,i))return o;const c=r.value.clone(),l=wl(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof yn?function(r,i,o,a){if(!mr(r.precondition,i))return o;const c=wl(r.fieldTransforms,a,i),l=i.data;return l.setAll(vf(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return mr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function hw(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=df(s.transform,r||null);i!=null&&(n===null&&(n=Ye.empty()),n.set(s.field,i))}return n||null}function yl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Mn(n,s,(r,i)=>cw(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class js extends bi{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class yn extends bi{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vf(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function vl(t,e,n){const s=new Map;ie(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,aw(o,a,n[r]))}return s}function wl(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,ow(i,o,e))}return s}class wf extends bi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fw extends bi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&uw(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=us(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=us(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=lf();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=yf(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(B.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),G())}isEqual(e){return this.batchId===e.batchId&&Mn(this.mutations,e.mutations,(n,s)=>yl(n,s))&&Mn(this.baseMutations,e.baseMutations,(n,s)=>yl(n,s))}}class Fa{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ie(e.mutations.length===s.length);let r=nw;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Fa(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,W;function mw(t){switch(t){default:return F();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Ef(t){if(t===void 0)return xt("GRPC error has no .code"),E.UNKNOWN;switch(t){case ge.OK:return E.OK;case ge.CANCELLED:return E.CANCELLED;case ge.UNKNOWN:return E.UNKNOWN;case ge.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case ge.INTERNAL:return E.INTERNAL;case ge.UNAVAILABLE:return E.UNAVAILABLE;case ge.UNAUTHENTICATED:return E.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case ge.NOT_FOUND:return E.NOT_FOUND;case ge.ALREADY_EXISTS:return E.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return E.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case ge.ABORTED:return E.ABORTED;case ge.OUT_OF_RANGE:return E.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return E.UNIMPLEMENTED;case ge.DATA_LOSS:return E.DATA_LOSS;default:return F()}}(W=ge||(ge={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ar}static getOrCreateInstance(){return ar===null&&(ar=new Va),ar}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ar=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Hs.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ti(B.min(),r,uf(),kt(),G())}}class Hs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Hs(s,n,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class bf{constructor(e,n){this.targetId=e,this.Et=n}}class Tf{constructor(e,n,s=Fe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class El{constructor(){this.At=0,this.Rt=Tl(),this.vt=Fe.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=G(),n=G(),s=G();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:F()}}),new Hs(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=Tl()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class yw{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=kt(),this.qt=bl(),this.Ut=new Ee(X)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if(Fo(o))if(r===0){const a=new O(o.path);this.Qt(s,a,ke.newNoDocument(a,B.min()))}else ie(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Va.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Fo(a.target)){const c=new O(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,ke.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=G();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Ti(e,n,this.Ut,this.Lt,s);return this.Lt=kt(),this.qt=bl(),this.Ut=new Ee(X),r}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new El,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ee(X),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new El),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function bl(){return new Te(O.comparator)}function Tl(){return new Te(O.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ww=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ew=(()=>({and:"AND",or:"OR"}))();class bw{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ur(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cf(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Tw(t,e){return Ur(t,e.toTimestamp())}function yt(t){return ie(!!t),B.fromTimestamp(function(e){const n=qt(e);return new we(n.seconds,n.nanos)}(t))}function Ua(t,e){return function(n){return new ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function _f(t){const e=ae.fromString(t);return ie(Df(e)),e}function Bo(t,e){return Ua(t.databaseId,e.path)}function Xi(t,e){const n=_f(e);if(n.get(1)!==t.databaseId.projectId)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(If(n))}function $o(t,e){return Ua(t.databaseId,e)}function Cw(t){const e=_f(t);return e.length===4?ae.emptyPath():If(e)}function jo(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function If(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Cl(t,e,n){return{name:Bo(t,e),fields:n.value.mapValue.fields}}function _w(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(ie(l===void 0||typeof l=="string"),Fe.fromBase64String(l||"")):(ie(l===void 0||l instanceof Uint8Array),Fe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:Ef(c.code);return new M(l,c.message||"")}(o);n=new Tf(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Xi(t,s.document.name),i=yt(s.document.updateTime),o=s.document.createTime?yt(s.document.createTime):B.min(),a=new Ye({mapValue:{fields:s.document.fields}}),c=ke.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new yr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Xi(t,s.document),i=s.readTime?yt(s.readTime):B.min(),o=ke.newNoDocument(r,i),a=s.removedTargetIds||[];n=new yr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Xi(t,s.document),i=s.removedTargetIds||[];n=new yr([],i,r,null)}else{if(!("filter"in e))return F();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new gw(r),o=s.targetId;n=new bf(o,i)}}return n}function Iw(t,e){let n;if(e instanceof js)n={update:Cl(t,e.key,e.value)};else if(e instanceof wf)n={delete:Bo(t,e.key)};else if(e instanceof yn)n={update:Cl(t,e.key,e.data),updateMask:Mw(e.fieldMask)};else{if(!(e instanceof fw))return F();n={verify:Bo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Fr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ds)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Vr)return{fieldPath:i.field.canonicalString(),increment:o._t};throw F()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Tw(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:F()}(t,e.precondition)),n}function Sw(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?yt(s.updateTime):yt(r);return i.isEqual(B.min())&&(i=yt(r)),new lw(i,s.transformResults||[])}(n,e))):[]}function Aw(t,e){return{documents:[$o(t,e.path)]}}function Dw(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=$o(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=$o(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Af(Et.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Tn(u.field),direction:kw(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||mi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function xw(t){let e=Cw(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ie(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const d=Sf(u);return d instanceof Et&&Zh(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new cs(Cn(d.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,mi(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(u){const d=!!u.before,p=u.values||[];return new Pr(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const d=!u.before,p=u.values||[];return new Pr(p,d)}(n.endAt)),Qv(e,r,o,i,a,"F",c,l)}function Nw(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return F()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Sf(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Cn(e.unaryFilter.field);return ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Cn(e.unaryFilter.field);return ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Cn(e.unaryFilter.field);return ve.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Cn(e.unaryFilter.field);return ve.create(i,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(e){return ve.create(Cn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Et.create(e.compositeFilter.filters.map(n=>Sf(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(t):F()}function kw(t){return vw[t]}function Rw(t){return ww[t]}function Ow(t){return Ew[t]}function Tn(t){return{fieldPath:t.canonicalString()}}function Cn(t){return Oe.fromServerFormat(t.fieldPath)}function Af(t){return t instanceof ve?function(e){if(e.op==="=="){if(hl(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NAN"}};if(ul(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(hl(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NOT_NAN"}};if(ul(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tn(e.field),op:Rw(e.op),value:e.value}}}(t):t instanceof Et?function(e){const n=e.getFilters().map(s=>Af(s));return n.length===1?n[0]:{compositeFilter:{op:Ow(e.op),filters:n}}}(t):F()}function Mw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Df(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n,s,r,i=B.min(),o=B.min(),a=Fe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.se=e}}function Pw(t){const e=xw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(){this.He=new Vw}addToCollectionParentIndex(e,n){return this.He.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Ht.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Ht.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Vw{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ee(ae.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ee(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Vn(0)}static bn(){return new Vn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this.changes=new Qn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&us(s.mutation,r,rt.empty(),we.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,G()).next(()=>s))}getLocalViewOfDocuments(e,n,s=G()){const r=cn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ss();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=cn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,G()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=kt();const o=ls(),a=ls();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof yn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),us(u.mutation,l,u.mutation.getFieldMask(),we.now())):o.set(l.key,rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var d;return a.set(l,new Bw(u,(d=o.get(l))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ls();let r=new Te((o,a)=>o-a),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||rt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const d=(r.get(a.batchId)||G()).add(c);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,d=lf();u.forEach(p=>{if(!i.has(p)){const m=yf(n.get(p),s.get(p));m!==null&&d.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,d))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Jv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve(cn());let a=-1,c=i;return o.next(l=>b.forEach(l,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,G())).next(u=>({batchId:a,changes:cf(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(s=>{let r=ss();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ss();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(l,u){return new yi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,d)=>{i=i.insert(u,d)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,ke.newInvalidDocument(l)))});let o=ss();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&us(l.mutation,c,rt.empty(),we.now()),wi(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return b.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:yt(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:Pw(s.bundledQuery),readTime:yt(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(){this.overlays=new Te(O.comparator),this.ts=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=cn();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.re(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=cn(),i=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Te((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=cn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=cn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return b.resolve(a)}re(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new pw(n,s));let i=this.ts.get(n);i===void 0&&(i=G(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this.es=new Ee(_e.ns),this.ss=new Ee(_e.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new _e(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new _e(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new O(new ae([])),s=new _e(n,e),r=new _e(n,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new O(new ae([])),s=new _e(n,e),r=new _e(n,e+1);let i=G();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new _e(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class _e{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return O.comparator(e.key,n.key)||X(e.ds,n.ds)}static rs(e,n){return X(e.ds,n.ds)||O.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Ee(_e.ns)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dw(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new _e(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new _e(n,0),r=new _e(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ee(X);return n.forEach(r=>{const i=new _e(r,0),o=new _e(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),b.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;O.isDocumentKey(i)||(i=i.child(""));const o=new _e(new O(i),0);let a=new Ee(X);return this._s.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ds)),!0)},o),b.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ie(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return b.forEach(n.mutations,r=>{const i=new _e(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new _e(n,0),r=this._s.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.Ts=e,this.docs=new Te(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():ke.newInvalidDocument(n))}getEntries(e,n){let s=kt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ke.newInvalidDocument(r))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=kt();const o=n.path,a=new O(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||kv(Nv(u),s)<=0||(r.has(u.key)||wi(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,s,r){F()}Es(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new zw(this)}getSize(e){return b.resolve(this.size)}}class zw extends Uw{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.persistence=e,this.As=new Qn(n=>La(n),Pa),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Ba,this.targetCount=0,this.bs=Vn.vn()}forEachTarget(e,n){return this.As.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),b.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Vn(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Sn(n),b.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Oa(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Gw(this),this.indexManager=new Fw,this.remoteDocumentCache=function(s){return new Kw(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new Lw(n),this.xs=new jw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new qw(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){N("MemoryPersistence","Starting transaction:",e);const r=new Qw(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return b.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class Qw extends Ov{constructor(e){super(),this.currentSequenceNumber=e}}class $a{constructor(e){this.persistence=e,this.$s=new Ba,this.Ms=null}static Fs(e){return new $a(e)}get Bs(){if(this.Ms)return this.Ms;throw F()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),b.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Bs,s=>{const r=O.fromPath(s);return this.Ls(e,r).next(i=>{i||n.removeEntry(r,B.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return b.or([()=>b.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=r}static Di(e,n){let s=G(),r=G();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ja(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ni(e,n).next(i=>i||this.ki(e,n,r,s)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(gl(n))return b.resolve(null);let s=Nt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Vo(n,null,"F"),s=Nt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=G(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,Vo(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,s,r){return gl(n)||r.isEqual(B.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(e,n):(ol()<=Y.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Uo(n)),this.Fi(e,o,n,xv(r,-1)))})}$i(e,n){let s=new Ee(of(e));return n.forEach((r,i)=>{wi(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return ol()<=Y.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Uo(n)),this.xi.getDocumentsMatchingQuery(e,n,Ht.min())}Fi(e,n,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,n,s,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new Te(X),this.qi=new Qn(i=>La(i),Pa),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $w(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function Jw(t,e,n,s){return new Xw(t,e,n,s)}async function xf(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=G();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function Zw(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,d=u.keys();let p=b.resolve();return d.forEach(m=>{p=p.next(()=>l.getEntry(a,m)).next(A=>{const T=c.docVersions.get(m);ie(T!==null),A.version.compareTo(T)<0&&(u.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),l.addEntry(A)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=G();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Nf(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function e0(t,e){const n=H(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,d)=>{const p=r.get(d);if(!p)return;a.push(n.Ds.removeMatchingKeys(i,u.removedDocuments,d).next(()=>n.Ds.addMatchingKeys(i,u.addedDocuments,d)));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(d)?m=m.withResumeToken(Fe.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),r=r.insert(d,m),function(A,T,P){return A.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(p,m,u)&&a.push(n.Ds.updateTargetData(i,m))});let c=kt(),l=G();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(t0(i,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!s.isEqual(B.min())){const u=n.Ds.getLastRemoteSnapshotVersion(i).next(d=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Li=r,i))}function t0(t,e,n){let s=G(),r=G();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=kt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(B.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:r}})}function n0(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function s0(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new fn(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Ho(t,e,n){const s=H(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!$s(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function _l(t,e,n){const s=H(t);let r=B.min(),i=G();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=H(a),d=u.qi.get(l);return d!==void 0?b.resolve(u.Li.get(d)):u.Ds.getTargetData(c,l)}(s,o,Nt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?r:B.min(),n?i:G())).next(a=>(r0(s,Zv(e),a),{documents:a,Wi:i})))}function r0(t,e,n){let s=t.Ui.get(e)||B.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ui.set(e,s)}class Il{constructor(){this.activeTargetIds=uf()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class i0{constructor(){this.Br=new Il,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Il,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cr=null;function Ji(){return cr===null?cr=268435456+Math.round(2147483648*Math.random()):cr++,"0x"+cr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="WebChannelConnection";class l0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,r,i){const o=Ji(),a=this.ao(e,n);N("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(e,a,c,s).then(l=>(N("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Mr("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Gn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=a0[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){const i=Ji();return new Promise((o,a)=>{const c=new wv;c.setWithCredentials(!0),c.listenOnce(mv.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Yi.NO_ERROR:const u=c.getResponseJson();N(xe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Yi.TIMEOUT:N(xe,`RPC '${e}' ${i} timed out`),a(new M(E.DEADLINE_EXCEEDED,"Request time out"));break;case Yi.HTTP_ERROR:const d=c.getStatus();if(N(xe,`RPC '${e}' ${i} failed with status:`,d,"response text:",c.getResponseText()),d>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const A=function(T){const P=T.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(P)>=0?P:E.UNKNOWN}(m.status);a(new M(A,m.message))}else a(new M(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new M(E.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{N(xe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);N(xe,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}wo(e,n,s){const r=Ji(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pv(),a=gv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new vv({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");N(xe,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let d=!1,p=!1;const m=new c0({Wr:T=>{p?N(xe,`Not sending because RPC '${e}' stream ${r} is closed:`,T):(d||(N(xe,`Opening RPC '${e}' stream ${r} transport.`),u.open(),d=!0),N(xe,`RPC '${e}' stream ${r} sending:`,T),u.send(T))},Hr:()=>u.close()}),A=(T,P,j)=>{T.listen(P,te=>{try{j(te)}catch(L){setTimeout(()=>{throw L},0)}})};return A(u,rr.EventType.OPEN,()=>{p||N(xe,`RPC '${e}' stream ${r} transport opened.`)}),A(u,rr.EventType.CLOSE,()=>{p||(p=!0,N(xe,`RPC '${e}' stream ${r} transport closed`),m.so())}),A(u,rr.EventType.ERROR,T=>{p||(p=!0,Mr(xe,`RPC '${e}' stream ${r} transport errored:`,T),m.so(new M(E.UNAVAILABLE,"The operation could not be completed")))}),A(u,rr.EventType.MESSAGE,T=>{var P;if(!p){const j=T.data[0];ie(!!j);const te=j,L=te.error||((P=te[0])===null||P===void 0?void 0:P.error);if(L){N(xe,`RPC '${e}' stream ${r} received error:`,L);const Z=L.status;let le=function(at){const K=ge[at];if(K!==void 0)return Ef(K)}(Z),bt=L.message;le===void 0&&(le=E.INTERNAL,bt="Unknown error status: "+Z+" with message "+L.message),p=!0,m.so(new M(le,bt)),u.close()}else N(xe,`RPC '${e}' stream ${r} received:`,j),m.io(j)}}),A(a,yv.STAT_EVENT,T=>{T.stat===rl.PROXY?N(xe,`RPC '${e}' stream ${r} detected buffering proxy`):T.stat===rl.NOPROXY&&N(xe,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.no()},0),m}}function Zi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){return new bw(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&N("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n,s,r,i,o,a,c){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new kf(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(xt(n.toString()),xt("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{e(()=>{const r=new M(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class u0 extends Rf{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=_w(this.serializer,e),s=function(r){if(!("targetChange"in r))return B.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?B.min():i.readTime?yt(i.readTime):B.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=jo(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=Fo(a)?{documents:Aw(r,a)}:{query:Dw(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Cf(r,i.resumeToken):i.snapshotVersion.compareTo(B.min())>0&&(o.readTime=Ur(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=Nw(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=jo(this.serializer),n.removeTarget=e,this.Fo(n)}}class h0 extends Rf{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=Sw(e.writeResults,e.commitTime),s=yt(e.commitTime);return this.listener.Zo(s,n)}return ie(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=jo(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Iw(this.serializer,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(E.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(E.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class d0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(xt(n),this.ru=!1):N("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{vn(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=H(a);c.du.add(4),await qs(c),c.mu.set("Unknown"),c.du.delete(4),await _i(c)}(this))})}),this.mu=new d0(s,r)}}async function _i(t){if(vn(t))for(const e of t.wu)await e(!0)}async function qs(t){for(const e of t.wu)await e(!1)}function Of(t,e){const n=H(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Ka(n)?qa(n):Yn(n).No()&&Ha(n,e))}function Mf(t,e){const n=H(t),s=Yn(n);n.fu.delete(e),s.No()&&Lf(n,e),n.fu.size===0&&(s.No()?s.$o():vn(n)&&n.mu.set("Unknown"))}function Ha(t,e){t.gu.Ot(e.targetId),Yn(t).jo(e)}function Lf(t,e){t.gu.Ot(e),Yn(t).Wo(e)}function qa(t){t.gu=new yw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Yn(t).start(),t.mu.ou()}function Ka(t){return vn(t)&&!Yn(t).xo()&&t.fu.size>0}function vn(t){return H(t).du.size===0}function Pf(t){t.gu=void 0}async function g0(t){t.fu.forEach((e,n)=>{Ha(t,e)})}async function m0(t,e){Pf(t),Ka(t)?(t.mu.au(e),qa(t)):t.mu.set("Unknown")}async function y0(t,e,n){if(t.mu.set("Online"),e instanceof Tf&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Br(t,s)}else if(e instanceof yr?t.gu.Kt(e):e instanceof bf?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(B.min()))try{const s=await Nf(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.fu.get(c);l&&r.fu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(Fe.EMPTY_BYTE_STRING,c.snapshotVersion)),Lf(r,a);const l=new fn(c.target,a,1,c.sequenceNumber);Ha(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){N("RemoteStore","Failed to raise snapshot:",s),await Br(t,s)}}async function Br(t,e,n){if(!$s(e))throw e;t.du.add(1),await qs(t),t.mu.set("Offline"),n||(n=()=>Nf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await _i(t)})}function Ff(t,e){return e().catch(n=>Br(t,n,e))}async function Ii(t){const e=H(t),n=Kt(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;v0(e);)try{const r=await n0(e.localStore,s);if(r===null){e.lu.length===0&&n.$o();break}s=r.batchId,w0(e,r)}catch(r){await Br(e,r)}Vf(e)&&Uf(e)}function v0(t){return vn(t)&&t.lu.length<10}function w0(t,e){t.lu.push(e);const n=Kt(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Vf(t){return vn(t)&&!Kt(t).xo()&&t.lu.length>0}function Uf(t){Kt(t).start()}async function E0(t){Kt(t).tu()}async function b0(t){const e=Kt(t);for(const n of t.lu)e.Yo(n.mutations)}async function T0(t,e,n){const s=t.lu.shift(),r=Fa.from(s,e,n);await Ff(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ii(t)}async function C0(t,e){e&&Kt(t).Jo&&await async function(n,s){if(r=s.code,mw(r)&&r!==E.ABORTED){const i=n.lu.shift();Kt(n).Oo(),await Ff(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ii(n)}var r}(t,e),Vf(t)&&Uf(t)}async function Al(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const s=vn(n);n.du.add(3),await qs(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await _i(n)}async function _0(t,e){const n=H(t);e?(n.du.delete(2),await _i(n)):e||(n.du.add(2),await qs(n),n.mu.set("Unknown"))}function Yn(t){return t.yu||(t.yu=function(e,n,s){const r=H(e);return r.nu(),new u0(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:g0.bind(null,t),Zr:m0.bind(null,t),zo:y0.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Ka(t)?qa(t):t.mu.set("Unknown")):(await t.yu.stop(),Pf(t))})),t.yu}function Kt(t){return t.pu||(t.pu=function(e,n,s){const r=H(e);return r.nu(),new h0(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:E0.bind(null,t),Zr:C0.bind(null,t),Xo:b0.bind(null,t),Zo:T0.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Ii(t)):(await t.pu.stop(),t.lu.length>0&&(N("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new za(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ga(t,e){if(xt("AsyncQueue",`${e}: ${t}`),$s(t))return new M(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||O.comparator(n.key,s.key):(n,s)=>O.comparator(n.key,s.key),this.keyedMap=ss(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new kn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof kn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new kn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.Iu=new Te(O.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):F():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Un{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Un(e,n,kn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.Eu=void 0,this.listeners=[]}}class S0{constructor(){this.queries=new Qn(e=>rf(e),vi),this.onlineState="Unknown",this.Au=new Set}}async function A0(t,e){const n=H(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new I0),r)try{i.Eu=await n.onListen(s)}catch(o){const a=Ga(o,`Initialization of query '${Uo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&Wa(n)}async function D0(t,e){const n=H(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function x0(t,e){const n=H(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&Wa(n)}function N0(t,e,n){const s=H(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Wa(t){t.Au.forEach(e=>{e.next()})}class k0{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Un(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Un.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.key=e}}class $f{constructor(e){this.key=e}}class R0{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=G(),this.mutatedKeys=G(),this.Ku=of(e),this.Gu=new kn(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new Dl,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,d)=>{const p=r.get(u),m=wi(this.query,d)?d:null,A=!!p&&this.mutatedKeys.has(p.key),T=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let P=!1;p&&m?p.data.isEqual(m.data)?A!==T&&(s.track({type:3,doc:m}),P=!0):this.Wu(p,m)||(s.track({type:2,doc:m}),P=!0,(c&&this.Ku(m,c)>0||l&&this.Ku(m,l)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),P=!0):p&&!m&&(s.track({type:1,doc:p}),P=!0,(c||l)&&(a=!0)),P&&(m?(o=o.add(m),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((l,u)=>function(d,p){const m=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return m(d)-m(p)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Un(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Dl,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=G(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new $f(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new Bf(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=G();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Un.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class O0{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class M0{constructor(e){this.key=e,this.ec=!1}}class L0{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Qn(a=>rf(a),vi),this.ic=new Map,this.rc=new Set,this.oc=new Te(O.comparator),this.uc=new Map,this.cc=new Ba,this.ac={},this.hc=new Map,this.lc=Vn.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function P0(t,e){const n=z0(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await s0(n.localStore,Nt(e));n.isPrimaryClient&&Of(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await F0(n,e,s,a==="current",o.resumeToken)}return r}async function F0(t,e,n,s,r){t.dc=(d,p,m)=>async function(A,T,P,j){let te=T.view.zu(P);te.Mi&&(te=await _l(A.localStore,T.query,!1).then(({documents:le})=>T.view.zu(le,te)));const L=j&&j.targetChanges.get(T.targetId),Z=T.view.applyChanges(te,A.isPrimaryClient,L);return Nl(A,T.targetId,Z.Yu),Z.snapshot}(t,d,p,m);const i=await _l(t.localStore,e,!0),o=new R0(e,i.Wi),a=o.zu(i.documents),c=Hs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Nl(t,n,l.Yu);const u=new O0(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function V0(t,e){const n=H(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!vi(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ho(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Mf(n.remoteStore,s.targetId),qo(n,s.targetId)}).catch(Bs)):(qo(n,s.targetId),await Ho(n.localStore,s.targetId,!0))}async function U0(t,e,n){const s=G0(t);try{const r=await function(i,o){const a=H(i),c=we.now(),l=o.reduce((p,m)=>p.add(m.key),G());let u,d;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=kt(),A=G();return a.Ki.getEntries(p,l).next(T=>{m=T,m.forEach((P,j)=>{j.isValidDocument()||(A=A.add(P))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,m)).next(T=>{u=T;const P=[];for(const j of o){const te=hw(j,u.get(j.key).overlayedDocument);te!=null&&P.push(new yn(j.key,te,Yh(te.value.mapValue),St.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,P,o)}).next(T=>{d=T;const P=T.applyToLocalDocumentSet(u,A);return a.documentOverlayCache.saveOverlays(p,T.batchId,P)})}).then(()=>({batchId:d.batchId,changes:cf(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new Te(X)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ks(s,r.changes),await Ii(s.remoteStore)}catch(r){const i=Ga(r,"Failed to persist write");n.reject(i)}}async function jf(t,e){const n=H(t);try{const s=await e0(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(ie(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?ie(o.ec):r.removedDocuments.size>0&&(ie(o.ec),o.ec=!1))}),await Ks(n,s,e)}catch(s){await Bs(s)}}function xl(t,e,n){const s=H(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=H(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const d of u.listeners)d.Ru(o)&&(c=!0)}),c&&Wa(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function B0(t,e,n){const s=H(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new Te(O.comparator);o=o.insert(i,ke.newNoDocument(i,B.min()));const a=G().add(i),c=new Ti(B.min(),new Map,new Ee(X),o,a);await jf(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Qa(s)}else await Ho(s.localStore,e,!1).then(()=>qo(s,e,n)).catch(Bs)}async function $0(t,e){const n=H(t),s=e.batch.batchId;try{const r=await Zw(n.localStore,e);qf(n,s,null),Hf(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ks(n,r)}catch(r){await Bs(r)}}async function j0(t,e,n){const s=H(t);try{const r=await function(i,o){const a=H(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ie(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);qf(s,e,n),Hf(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ks(s,r)}catch(r){await Bs(r)}}function Hf(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function qf(t,e,n){const s=H(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function qo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||Kf(t,s)})}function Kf(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Mf(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Qa(t))}function Nl(t,e,n){for(const s of n)s instanceof Bf?(t.cc.addReference(s.key,e),H0(t,s)):s instanceof $f?(N("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Kf(t,s.key)):F()}function H0(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(N("SyncEngine","New document in limbo: "+n),t.rc.add(s),Qa(t))}function Qa(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new O(ae.fromString(e)),s=t.lc.next();t.uc.set(s,new M0(n)),t.oc=t.oc.insert(n,s),Of(t.remoteStore,new fn(Nt(sf(n.path)),s,2,Oa.ct))}}async function Ks(t,e,n){const s=H(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=ja.Di(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const l=H(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,d=>b.forEach(d.Vi,p=>l.persistence.referenceDelegate.addReference(u,d.targetId,p)).next(()=>b.forEach(d.Si,p=>l.persistence.referenceDelegate.removeReference(u,d.targetId,p)))))}catch(u){if(!$s(u))throw u;N("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const d=u.targetId;if(!u.fromCache){const p=l.Li.get(d),m=p.snapshotVersion,A=p.withLastLimboFreeSnapshotVersion(m);l.Li=l.Li.insert(d,A)}}}(s.localStore,i))}async function q0(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const s=await xf(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new M(E.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ks(n,s.Qi)}}function K0(t,e){const n=H(t),s=n.uc.get(e);if(s&&s.ec)return G().add(s.key);{let r=G();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function z0(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=K0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=B0.bind(null,e),e.nc.zo=x0.bind(null,e.eventManager),e.nc.wc=N0.bind(null,e.eventManager),e}function G0(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=j0.bind(null,e),e}class kl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ci(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Jw(this.persistence,new Yw,e.initialUser,this.serializer)}createPersistence(e){return new Ww($a.Fs,this.serializer)}createSharedClientState(e){return new i0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class W0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>xl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=q0.bind(null,this.syncEngine),await _0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new S0}createDatastore(e){const n=Ci(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new l0(r));var r;return function(i,o,a,c){return new f0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>xl(this.syncEngine,a,0),o=Sl.D()?new Sl:new o0,new p0(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new L0(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=H(e);N("RemoteStore","RemoteStore shutting down."),n.du.add(5),await qs(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):xt("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ne.UNAUTHENTICATED,this.clientId=zh.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{N("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(N("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ga(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function eo(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await xf(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Rl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await J0(t);N("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Al(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Al(e.remoteStore,i)),t._onlineComponents=e}function X0(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function J0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await eo(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!X0(n))throw n;Mr("Error using user provided cache. Falling back to memory cache: "+n),await eo(t,new kl)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await eo(t,new kl);return t._offlineComponents}async function zf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await Rl(t,t._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await Rl(t,new W0))),t._onlineComponents}function Z0(t){return zf(t).then(e=>e.syncEngine)}async function eE(t){const e=await zf(t),n=e.eventManager;return n.onListen=P0.bind(null,e.syncEngine),n.onUnlisten=V0.bind(null,e.syncEngine),n}function tE(t,e,n={}){const s=new Ut;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Q0({next:d=>{i.enqueueAndForget(()=>D0(r,u)),d.fromCache&&a.source==="server"?c.reject(new M(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),u=new k0(o,l,{includeMetadataChanges:!0,xu:!0});return A0(r,u)}(await eE(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t,e,n){if(!n)throw new M(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nE(t,e,n,s){if(e===!0&&s===!0)throw new M(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ml(t){if(!O.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ll(t){if(O.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ya(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function Ns(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ya(t);throw new M(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,nE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ev;switch(n.type){case"firstParty":return new _v(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ol.get(e);n&&(N("ComponentProvider","Removing Datastore"),Ol.delete(e),n.terminate())}(this),Promise.resolve()}}function sE(t,e,n,s={}){var r;const i=(t=Ns(t,Si))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Mr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ne.MOCK_USER;else{o=rm(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new M(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ne(c)}t._authCredentials=new bv(new Kh(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}}class Ai{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ai(this.firestore,e,this._query)}}class Bt extends Ai{constructor(e,n,s){super(e,n,sf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new O(e))}withConverter(e){return new Bt(this.firestore,e,this._path)}}function rE(t,e,...n){if(t=ms(t),Gf("collection","path",e),t instanceof Si){const s=ae.fromString(e,...n);return Ll(s),new Bt(t,null,s)}{if(!(t instanceof Je||t instanceof Bt))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ae.fromString(e,...n));return Ll(s),new Bt(t.firestore,null,s)}}function iE(t,e,...n){if(t=ms(t),arguments.length===1&&(e=zh.A()),Gf("doc","path",e),t instanceof Si){const s=ae.fromString(e,...n);return Ml(s),new Je(t,null,new O(s))}{if(!(t instanceof Je||t instanceof Bt))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ae.fromString(e,...n));return Ml(s),new Je(t.firestore,t instanceof Bt?t.converter:null,new O(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new kf(this,"async_queue_retry"),this.qc=()=>{const n=Zi();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Zi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Zi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Ut;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!$s(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw xt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=za.createAndSchedule(this,e,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&F()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Xa extends Si{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new oE,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Qf(this),this._firestoreClient.terminate()}}function Fl(t,e){const n=typeof t=="object"?t:cy(),s=typeof t=="string"?t:e||"(default)",r=ry(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=tm("firestore");i&&sE(r,...i)}return r}function Wf(t){return t._firestoreClient||Qf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Qf(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new Fv(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Y0(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bn(Fe.fromBase64String(e))}catch(n){throw new M(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bn(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=/^__.*__$/;class cE{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new yn(e,this.data,this.fieldMask,n,this.fieldTransforms):new js(e,this.data,n,this.fieldTransforms)}}function Xf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class ec{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new ec(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.ea(e),r}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return $r(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Xf(this.Yc)&&aE.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class lE{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ci(e)}ua(e,n,s,r=!1){return new ec({Yc:e,methodName:n,oa:s,path:Oe.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uE(t){const e=t._freezeSettings(),n=Ci(t._databaseId);return new lE(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hE(t,e,n,s,r,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,r);td("Data must be an object, but it was:",o,s);const a=Zf(s,o);let c,l;if(i.merge)c=new rt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const d of i.mergeFields){const p=fE(e,d,n);if(!o.contains(p))throw new M(E.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);pE(u,p)||u.push(p)}c=new rt(u),l=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,l=o.fieldTransforms;return new cE(new Ye(a),c,l)}function Jf(t,e){if(ed(t=ms(t)))return td("Unsupported field value:",e,t),Zf(t,e);if(t instanceof Yf)return function(n,s){if(!Xf(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Jf(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=ms(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return iw(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=we.fromDate(n);return{timestampValue:Ur(s.serializer,r)}}if(n instanceof we){const r=new we(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ur(s.serializer,r)}}if(n instanceof Za)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Bn)return{bytesValue:Cf(s.serializer,n._byteString)};if(n instanceof Je){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ua(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Ya(n)}`)}(t,e)}function Zf(t,e){const n={};return Gh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wn(t,(s,r)=>{const i=Jf(r,e.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function ed(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof Za||t instanceof Bn||t instanceof Je||t instanceof Yf)}function td(t,e,n){if(!ed(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ya(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function fE(t,e,n){if((e=ms(e))instanceof Ja)return e._internalPath;if(typeof e=="string")return nd(t,e);throw $r("Field path arguments must be of type string or ",t,!1,void 0,n)}const dE=new RegExp("[~\\*/\\[\\]]");function nd(t,e,n){if(e.search(dE)>=0)throw $r(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ja(...e.split("."))._internalPath}catch{throw $r(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $r(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new M(E.INVALID_ARGUMENT,a+t+c)}function pE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gE extends sd{data(){return super.data()}}function rd(t,e){return typeof e=="string"?nd(t,e):e instanceof Ja?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yE{convertValue(e,n="none"){switch(gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ln(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){const s={};return Wn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Za(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Qh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Is(e));default:return null}}convertTimestamp(e){const n=qt(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ae.fromString(e);ie(Df(s));const r=new Ss(s.get(1),s.get(3)),i=new O(s.popFirst(5));return r.isEqual(n)||xt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wE extends sd{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(rd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class vr extends wE{data(e={}){return super.data(e)}}class EE{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new lr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new vr(this._firestore,this._userDataWriter,s.key,s,new lr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new vr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new lr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new vr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new lr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:bE(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bE(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}class TE extends yE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,n)}}function CE(t){t=Ns(t,Ai);const e=Ns(t.firestore,Xa),n=Wf(e),s=new TE(e);return mE(t._query),tE(n,t._query).then(r=>new EE(e,s,t,r))}function _E(t,e,n){t=Ns(t,Je);const s=Ns(t.firestore,Xa),r=vE(t.converter,e,n);return IE(s,[hE(uE(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,St.none())])}function IE(t,e){return function(n,s){const r=new Ut;return n.asyncQueue.enqueueAndForget(async()=>U0(await Z0(n),s,r)),r.promise}(Wf(t),e)}(function(t,e=!0){(function(n){Gn=n})(ay),Ir(new ys("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Xa(new Tv(n.getProvider("auth-internal")),new Sv(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ss(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),xn(il,"3.10.0",t),xn(il,"3.10.0","esm2017")})();const SE={components:{Ground:Kg},data(){return{isJumping:!1,isFalling:!1,isPlaying:!1,score:0,lastY:50,pressedKeys:{},x:window.innerWidth-100,y:50,groundHeight:50,obstacles:[],currentTick:0,hp:3,highscores:[],playerName:"",apple:{x:-50,y:0},blockCounter:0}},async mounted(){window.onkeyup=t=>{this.pressedKeys[t.key]=!1},window.onkeydown=t=>{this.pressedKeys[t.key]=!0},this.highscores=await this.getEntries()},computed:{speed(){return Math.round(this.score/700+2)}},methods:{startGame(){this.isPlaying=!0,this.gameloop(),this.score=0,this.y=50,this.x=window.innerWidth-100,this.hp=3,this.obstacles=[],this.blockCounter=0,this.apple={x:-50,y:0}},async checkDeath(){this.y>=window.innerHeight-100&&(this.hp--,this.y=100),this.hp==0&&(this.isPlaying=!1,await this.getEntries(),this.playerName!="test"&&this.createEntry(this.playerName,this.score))},gameloop(){let t=setInterval(()=>{if(this.checkDeath(),this.isPlaying||clearInterval(t),this.score++,this.currentTick%Math.round(90/this.speed+20)==0&&this.spawnObstacle(),this.currentTick++,this.collectHeart(),this.moveObstacle(),this.pressedKeys.ArrowUp&&!this.isJumping&&!this.isFalling){this.isJumping=!0;for(let e=0;e<15;e++)setTimeout(()=>{this.moveUp()},10*e);setTimeout(()=>{this.isJumping=!1,this.isFalling=!0},200)}this.pressedKeys.ArrowDown&&this.moveDown(),this.pressedKeys.ArrowLeft&&this.moveLeft(),this.pressedKeys.ArrowRight&&this.moveRight(),this.isJumping||this.moveDown(),this.y==this.lastY&&(this.isFalling=!1),this.lastY=this.y,this.deleteObstacle()},33.333333333333336)},collectHeart(){this.x<this.apple.x+30&&this.x+50>this.apple.x&&this.y<this.apple.y+30&&this.y+50>this.apple.y&&(this.hp+=1,this.apple.x=-50)},spawnObstacle(){var s;let e=(((s=this.obstacles.at(-1))==null?void 0:s.y)||window.innerHeight-100)+Math.round(Math.random()*100-50);const n={x:window.innerWidth,y:e>window.innerHeight-100?window.innerHeight-100:e<window.innerHeight-500?window.innerHeight-500:e,width:50,height:50};this.obstacles.push(n),this.blockCounter++,this.blockCounter%15==0&&(this.apple.x=n.x+10,this.apple.y=n.y-100)},moveObstacle(){for(let t of this.obstacles)t.x-=this.speed;this.apple.x>-50&&(this.apple.x-=this.speed)},deleteObstacle(){this.obstacles=this.obstacles.filter(t=>t.x>-50)},moveUp(){this.obstacles.every(t=>!(this.x+50>t.x&&t.x+50>this.x&&t.y<this.y&&t.y+60>=this.y))&&(this.y-=10)},moveDown(){this.obstacles.every(t=>!(this.x+50>t.x&&t.x+50>this.x&&t.y>=this.y&&t.y-60<=this.y))&&this.y<window.innerHeight-this.groundHeight-50&&(this.y+=10)},moveLeft(){this.obstacles.every(t=>!(this.y+50>t.y&&t.y+50>this.y&&t.x<this.x&&t.x+60>=this.x))&&this.x>0&&(this.x-=10)},moveRight(){this.obstacles.every(t=>!(this.y+50>t.y&&t.y+50>this.y&&t.x>=this.x&&t.x-60<=this.x))&&this.x+50<window.innerWidth&&(this.x+=10)},async createEntry(t,e){const n=Math.random().toString().substring(2,15),s={name:t,id:n,score:e};return await _E(iE(Fl(),"Highscores",n),s),s},async getEntries(){const t=[];return(await CE(rE(Fl(),"Highscores"))).forEach(n=>{t.push(n)}),t.map(n=>n.data()).map(n=>({...n}))}}};const AE={style:{height:"100vh",overflow:"hidden",position:"relative",width:"100%","background-size":"cover","background-repeat":"no-repeat","background-image":"url('sky.png')"}},DE={key:0,style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},xE={style:{display:"flex","justify-content":"center"}},NE=["disabled"],kE={style:{"max-height":"70vh",overflow:"auto"}},RE=ye("tr",null,[ye("td",null,"Rank"),ye("td",null,"Name"),ye("td",null,"Score")],-1),OE={style:{position:"absolute",top:"15px",left:"15px","text-shadow":`-1px -1px 0px white, 1px 1px 0px white, -1px 1px white,
          1px -1px 0px white`}},ME={style:{position:"absolute",top:"15px",left:"50%",transform:"translateX(-50%)",display:"flex"}},LE={style:{"background-image":"url('heart.png')",width:"50px",height:"50px","background-size":"contain"}};function PE(t,e){const n=Rp("Ground");return tt(),ft("div",AE,[ye("div",{style:sn([{height:"100vh",width:"100vw",position:"absolute",top:"0",left:"0","background-size":"cover","background-image":"url('nightsky.png')"},`opacity:${t.currentTick%2e3<900?0:t.currentTick%2e3<1e3?(t.currentTick%2e3-900)/100:t.currentTick%2e3<1900?1:1-(t.currentTick%2e3-1900)/100}`]),class:jr("nightbg")},null,4),t.isPlaying?Sc("",!0):(tt(),ft("div",DE,[ye("div",xE,[kp(ye("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>t.playerName=s)},null,512),[[Fg,t.playerName]]),ye("button",{onClick:e[1]||(e[1]=(...s)=>t.startGame&&t.startGame(...s)),disabled:!t.playerName},"Start",8,NE)]),ye("div",kE,[ye("table",null,[RE,(tt(!0),ft(ze,null,Mi(t.highscores.sort((s,r)=>r.score-s.score),(s,r)=>(tt(),ft("tr",null,[ye("td",null,Ws(r+1),1),ye("td",null,Ws(s.name),1),ye("td",null,Ws(s.score),1)]))),256))])])])),ye("div",OE,[ye("b",null,Ws(t.score>0?t.score-1:0),1)]),ye("div",ME,[(tt(!0),ft(ze,null,Mi(t.hp,s=>(tt(),ft("div",LE))),256))]),ye("div",{class:"square",style:sn([{top:t.y+"px",left:t.x+"px"},{"background-image":"url('steve.png')"}]),tabindex:"0"},null,4),(tt(!0),ft(ze,null,Mi(t.obstacles,(s,r)=>(tt(),ft("div",{class:"obstacle",key:r,style:sn([{top:s.y+"px",left:s.x+"px"},{"background-image":"url('gras.jpg')"}])},null,4))),128)),t.apple.x>-30?(tt(),ft("div",{key:1,style:sn([{"background-image":"url('Verzauberter_goldener_Apfel.webp')","background-size":"contain",position:"absolute",width:"30px",height:"30px"},{top:t.apple.y+"px",left:t.apple.x+"px"}])},null,4)):Sc("",!0),mt(n)])}const FE=Ru(SE,[["render",PE]]);var VE="firebase",UE="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(VE,UE,"app");const BE={apiKey:"AIzaSyBPZClDg32jRlfXzlDSUSiczMwuSyxkr1g",authDomain:"springstevespring.firebaseapp.com",projectId:"springstevespring",storageBucket:"springstevespring.appspot.com",messagingSenderId:"488261758131",appId:"1:488261758131:web:db824d475c6120c2add4c6"};Bu(BE);Bg(FE).mount("#app");
