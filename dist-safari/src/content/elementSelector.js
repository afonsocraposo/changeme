(function(){"use strict";var ie=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gr(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var de={exports:{}};de.exports,function(r,n){var i=200,m="__lodash_hash_undefined__",u=800,s=16,h=9007199254740991,y="[object Arguments]",L="[object Array]",C="[object AsyncFunction]",re="[object Boolean]",Ke="[object Date]",Pe="[object Error]",X="[object Function]",te="[object GeneratorFunction]",ue="[object Map]",Je="[object Number]",Me="[object Null]",Be="[object Object]",ve="[object Proxy]",er="[object RegExp]",le="[object Set]",l="[object String]",w="[object Undefined]",f="[object WeakMap]",k="[object ArrayBuffer]",v="[object DataView]",A="[object Float32Array]",S="[object Float64Array]",g="[object Int8Array]",x="[object Int16Array]",B="[object Int32Array]",V="[object Uint8Array]",Z="[object Uint8ClampedArray]",I="[object Uint16Array]",we="[object Uint32Array]",Dt=/[\\^$.*+?()[\]{}|]/g,Ft=/^\[object .+?Constructor\]$/,Ht=/^(?:0|[1-9]\d*)$/,E={};E[A]=E[S]=E[g]=E[x]=E[B]=E[V]=E[Z]=E[I]=E[we]=!0,E[y]=E[L]=E[k]=E[re]=E[v]=E[Ke]=E[Pe]=E[X]=E[ue]=E[Je]=E[Be]=E[er]=E[le]=E[l]=E[f]=!1;var jr=typeof ie=="object"&&ie&&ie.Object===Object&&ie,Wt=typeof self=="object"&&self&&self.Object===Object&&self,he=jr||Wt||Function("return this")(),Vr=n&&!n.nodeType&&n,ge=Vr&&!0&&r&&!r.nodeType&&r,zr=ge&&ge.exports===Vr,rr=zr&&jr.process,$r=function(){try{var e=ge&&ge.require&&ge.require("util").types;return e||rr&&rr.binding&&rr.binding("util")}catch{}}(),Gr=$r&&$r.isTypedArray;function qt(e,t,o){switch(o.length){case 0:return e.call(t);case 1:return e.call(t,o[0]);case 2:return e.call(t,o[0],o[1]);case 3:return e.call(t,o[0],o[1],o[2])}return e.apply(t,o)}function jt(e,t){for(var o=-1,a=Array(e);++o<e;)a[o]=t(o);return a}function Vt(e){return function(t){return e(t)}}function zt(e,t){return e==null?void 0:e[t]}function $t(e,t){return function(o){return e(t(o))}}var Gt=Array.prototype,Xt=Function.prototype,Ce=Object.prototype,tr=he["__core-js_shared__"],Ae=Xt.toString,z=Ce.hasOwnProperty,Xr=function(){var e=/[^.]+$/.exec(tr&&tr.keys&&tr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Zr=Ce.toString,Zt=Ae.call(Object),Qt=RegExp("^"+Ae.call(z).replace(Dt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Se=zr?he.Buffer:void 0,Qr=he.Symbol,Yr=he.Uint8Array;Se&&Se.allocUnsafe;var Kr=$t(Object.getPrototypeOf,Object),Jr=Object.create,Yt=Ce.propertyIsEnumerable,Kt=Gt.splice,Q=Qr?Qr.toStringTag:void 0,xe=function(){try{var e=ir(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Jt=Se?Se.isBuffer:void 0,et=Math.max,eo=Date.now,rt=ir(he,"Map"),fe=ir(Object,"create"),ro=function(){function e(){}return function(t){if(!K(t))return{};if(Jr)return Jr(t);e.prototype=t;var o=new e;return e.prototype=void 0,o}}();function Y(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var a=e[t];this.set(a[0],a[1])}}function to(){this.__data__=fe?fe(null):{},this.size=0}function oo(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function no(e){var t=this.__data__;if(fe){var o=t[e];return o===m?void 0:o}return z.call(t,e)?t[e]:void 0}function io(e){var t=this.__data__;return fe?t[e]!==void 0:z.call(t,e)}function so(e,t){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=fe&&t===void 0?m:t,this}Y.prototype.clear=to,Y.prototype.delete=oo,Y.prototype.get=no,Y.prototype.has=io,Y.prototype.set=so;function W(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var a=e[t];this.set(a[0],a[1])}}function mo(){this.__data__=[],this.size=0}function ao(e){var t=this.__data__,o=Te(t,e);if(o<0)return!1;var a=t.length-1;return o==a?t.pop():Kt.call(t,o,1),--this.size,!0}function uo(e){var t=this.__data__,o=Te(t,e);return o<0?void 0:t[o][1]}function lo(e){return Te(this.__data__,e)>-1}function wo(e,t){var o=this.__data__,a=Te(o,e);return a<0?(++this.size,o.push([e,t])):o[a][1]=t,this}W.prototype.clear=mo,W.prototype.delete=ao,W.prototype.get=uo,W.prototype.has=lo,W.prototype.set=wo;function oe(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var a=e[t];this.set(a[0],a[1])}}function ho(){this.size=0,this.__data__={hash:new Y,map:new(rt||W),string:new Y}}function go(e){var t=Ie(this,e).delete(e);return this.size-=t?1:0,t}function fo(e){return Ie(this,e).get(e)}function co(e){return Ie(this,e).has(e)}function yo(e,t){var o=Ie(this,e),a=o.size;return o.set(e,t),this.size+=o.size==a?0:1,this}oe.prototype.clear=ho,oe.prototype.delete=go,oe.prototype.get=fo,oe.prototype.has=co,oe.prototype.set=yo;function ne(e){var t=this.__data__=new W(e);this.size=t.size}function po(){this.__data__=new W,this.size=0}function ko(e){var t=this.__data__,o=t.delete(e);return this.size=t.size,o}function bo(e){return this.__data__.get(e)}function Ro(e){return this.__data__.has(e)}function Eo(e,t){var o=this.__data__;if(o instanceof W){var a=o.__data__;if(!rt||a.length<i-1)return a.push([e,t]),this.size=++o.size,this;o=this.__data__=new oe(a)}return o.set(e,t),this.size=o.size,this}ne.prototype.clear=po,ne.prototype.delete=ko,ne.prototype.get=bo,ne.prototype.has=Ro,ne.prototype.set=Eo;function Lo(e,t){var o=ar(e),a=!o&&mr(e),c=!o&&!a&&st(e),b=!o&&!a&&!c&&at(e),P=o||a||c||b,d=P?jt(e.length,String):[],M=d.length;for(var O in e)P&&(O=="length"||c&&(O=="offset"||O=="parent")||b&&(O=="buffer"||O=="byteLength"||O=="byteOffset")||nt(O,M))||d.push(O);return d}function or(e,t,o){(o!==void 0&&!Ne(e[t],o)||o===void 0&&!(t in e))&&nr(e,t,o)}function Po(e,t,o){var a=e[t];(!(z.call(e,t)&&Ne(a,o))||o===void 0&&!(t in e))&&nr(e,t,o)}function Te(e,t){for(var o=e.length;o--;)if(Ne(e[o][0],t))return o;return-1}function nr(e,t,o){t=="__proto__"&&xe?xe(e,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[t]=o}var Mo=Do();function _e(e){return e==null?e===void 0?w:Me:Q&&Q in Object(e)?Fo(e):zo(e)}function tt(e){return ce(e)&&_e(e)==y}function Bo(e){if(!K(e)||jo(e))return!1;var t=lr(e)?Qt:Ft;return t.test(Zo(e))}function vo(e){return ce(e)&&mt(e.length)&&!!E[_e(e)]}function Co(e){if(!K(e))return Vo(e);var t=it(e),o=[];for(var a in e)a=="constructor"&&(t||!z.call(e,a))||o.push(a);return o}function ot(e,t,o,a,c){e!==t&&Mo(t,function(b,P){if(c||(c=new ne),K(b))Ao(e,t,P,o,ot,a,c);else{var d=a?a(sr(e,P),b,P+"",e,t,c):void 0;d===void 0&&(d=b),or(e,P,d)}},ut)}function Ao(e,t,o,a,c,b,P){var d=sr(e,o),M=sr(t,o),O=P.get(M);if(O){or(e,o,O);return}var _=b?b(d,M,o+"",e,t,P):void 0,ye=_===void 0;if(ye){var wr=ar(M),hr=!wr&&st(M),wt=!wr&&!hr&&at(M);_=M,wr||hr||wt?ar(d)?_=d:Qo(d)?_=No(d):hr?(ye=!1,_=To(M)):wt?(ye=!1,_=Io(M)):_=[]:Yo(M)||mr(M)?(_=d,mr(d)?_=Ko(d):(!K(d)||lr(d))&&(_=Ho(M))):ye=!1}ye&&(P.set(M,_),c(_,M,a,b,P),P.delete(M)),or(e,o,_)}function So(e,t){return Go($o(e,t,lt),e+"")}var xo=xe?function(e,t){return xe(e,"toString",{configurable:!0,enumerable:!1,value:en(t),writable:!0})}:lt;function To(e,t){return e.slice()}function _o(e){var t=new e.constructor(e.byteLength);return new Yr(t).set(new Yr(e)),t}function Io(e,t){var o=_o(e.buffer);return new e.constructor(o,e.byteOffset,e.length)}function No(e,t){var o=-1,a=e.length;for(t||(t=Array(a));++o<a;)t[o]=e[o];return t}function Oo(e,t,o,a){var c=!o;o||(o={});for(var b=-1,P=t.length;++b<P;){var d=t[b],M=void 0;M===void 0&&(M=e[d]),c?nr(o,d,M):Po(o,d,M)}return o}function Uo(e){return So(function(t,o){var a=-1,c=o.length,b=c>1?o[c-1]:void 0,P=c>2?o[2]:void 0;for(b=e.length>3&&typeof b=="function"?(c--,b):void 0,P&&Wo(o[0],o[1],P)&&(b=c<3?void 0:b,c=1),t=Object(t);++a<c;){var d=o[a];d&&e(t,d,a,b)}return t})}function Do(e){return function(t,o,a){for(var c=-1,b=Object(t),P=a(t),d=P.length;d--;){var M=P[++c];if(o(b[M],M,b)===!1)break}return t}}function Ie(e,t){var o=e.__data__;return qo(t)?o[typeof t=="string"?"string":"hash"]:o.map}function ir(e,t){var o=zt(e,t);return Bo(o)?o:void 0}function Fo(e){var t=z.call(e,Q),o=e[Q];try{e[Q]=void 0;var a=!0}catch{}var c=Zr.call(e);return a&&(t?e[Q]=o:delete e[Q]),c}function Ho(e){return typeof e.constructor=="function"&&!it(e)?ro(Kr(e)):{}}function nt(e,t){var o=typeof e;return t=t??h,!!t&&(o=="number"||o!="symbol"&&Ht.test(e))&&e>-1&&e%1==0&&e<t}function Wo(e,t,o){if(!K(o))return!1;var a=typeof t;return(a=="number"?ur(o)&&nt(t,o.length):a=="string"&&t in o)?Ne(o[t],e):!1}function qo(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function jo(e){return!!Xr&&Xr in e}function it(e){var t=e&&e.constructor,o=typeof t=="function"&&t.prototype||Ce;return e===o}function Vo(e){var t=[];if(e!=null)for(var o in Object(e))t.push(o);return t}function zo(e){return Zr.call(e)}function $o(e,t,o){return t=et(t===void 0?e.length-1:t,0),function(){for(var a=arguments,c=-1,b=et(a.length-t,0),P=Array(b);++c<b;)P[c]=a[t+c];c=-1;for(var d=Array(t+1);++c<t;)d[c]=a[c];return d[t]=o(P),qt(e,this,d)}}function sr(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var Go=Xo(xo);function Xo(e){var t=0,o=0;return function(){var a=eo(),c=s-(a-o);if(o=a,c>0){if(++t>=u)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function Zo(e){if(e!=null){try{return Ae.call(e)}catch{}try{return e+""}catch{}}return""}function Ne(e,t){return e===t||e!==e&&t!==t}var mr=tt(function(){return arguments}())?tt:function(e){return ce(e)&&z.call(e,"callee")&&!Yt.call(e,"callee")},ar=Array.isArray;function ur(e){return e!=null&&mt(e.length)&&!lr(e)}function Qo(e){return ce(e)&&ur(e)}var st=Jt||rn;function lr(e){if(!K(e))return!1;var t=_e(e);return t==X||t==te||t==C||t==ve}function mt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=h}function K(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function ce(e){return e!=null&&typeof e=="object"}function Yo(e){if(!ce(e)||_e(e)!=Be)return!1;var t=Kr(e);if(t===null)return!0;var o=z.call(t,"constructor")&&t.constructor;return typeof o=="function"&&o instanceof o&&Ae.call(o)==Zt}var at=Gr?Vt(Gr):vo;function Ko(e){return Oo(e,ut(e))}function ut(e){return ur(e)?Lo(e):Co(e)}var Jo=Uo(function(e,t,o){ot(e,t,o)});function en(e){return function(){return e}}function lt(e){return e}function rn(){return!1}r.exports=Jo}(de,de.exports);var ht=de.exports;const gt=gr(ht);var ft=Object.defineProperty,ct=Object.defineProperties,yt=Object.getOwnPropertyDescriptors,fr=Object.getOwnPropertySymbols,dt=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,cr=(r,n,i)=>n in r?ft(r,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[n]=i,U=(r,n)=>{for(var i in n||(n={}))dt.call(n,i)&&cr(r,i,n[i]);if(fr)for(var i of fr(n))pt.call(n,i)&&cr(r,i,n[i]);return r},$=(r,n)=>ct(r,yt(n)),R=(r,n,i)=>new Promise((m,u)=>{var s=L=>{try{y(i.next(L))}catch(C){u(C)}},h=L=>{try{y(i.throw(L))}catch(C){u(C)}},y=L=>L.done?m(L.value):Promise.resolve(L.value).then(s,h);y((i=i.apply(r,n)).next())});function p(){const r=[];return{hasListener(n){return r.includes(n)},hasListeners(){return r.length>0},addListener(n){r.push(n)},removeListener(n){const i=r.indexOf(n);i>=0&&r.splice(i,1)},removeAllListeners(){r.length=0},trigger(...n){return R(this,null,function*(){return yield Promise.all(r.map(i=>i(...n)))})}}}var D=[],yr=p(),kt={resetState(){D.length=0,yr.removeAllListeners()},clear(r){return R(this,null,function*(){r??(r="");const n=D.findIndex(i=>i.name===r);return n>=0?(D.splice(n,1),!0):!1})},clearAll(){return R(this,null,function*(){const r=D.length>0;return D.length=0,r})},create(r,n){var i,m;let u,s;typeof r=="object"?(u="",s=r):(u=r??"",s=n);const h=D.findIndex(y=>y.name===u);h>=0&&D.splice(h,1),D.push({name:u,scheduledTime:(m=s.when)!=null?m:Date.now()+((i=s.delayInMinutes)!=null?i:0)*6e4,periodInMinutes:s.periodInMinutes})},get(r){return R(this,null,function*(){return r??(r=""),D.find(n=>n.name===r)})},getAll(){return R(this,null,function*(){return D})},onAlarm:yr},se={},dr=p(),pr=p(),kr=p(),br=p();function bt(r,n){return R(this,null,function*(){let i,m;return n==null?(i=String(Math.random()),m=r):(i=r,m=n),Rr(i)&&(yield Er.clear(i)),se[i]=m,i})}function Rr(r){return!!se[r]}var Er={resetState(){se={},dr.removeAllListeners(),pr.removeAllListeners(),kr.removeAllListeners(),br.removeAllListeners()},create:bt,clear(r){return R(this,null,function*(){const n=Rr(r);return delete se[r],n})},getAll(){return R(this,null,function*(){return se})},onClosed:dr,onClicked:pr,onButtonClicked:kr,onShown:br},pe=p(),Lr=p(),Pr=p(),Mr=p(),Br=p(),vr=p(),Cr="test-extension-id",Oe={resetState(){pe.removeAllListeners(),Lr.removeAllListeners(),Pr.removeAllListeners(),Mr.removeAllListeners(),Br.removeAllListeners(),vr.removeAllListeners(),Oe.id=Cr},id:Cr,getURL(r){return`chrome-extension://${Oe.id}/${r.replace(/^\//,"")}`},onInstalled:Lr,onMessage:pe,onStartup:Pr,onSuspend:Mr,onSuspendCanceled:Br,onUpdateAvailable:vr,sendMessage(r,n,i){return R(this,arguments,function*(m,u,s){let h;if(arguments.length===1||arguments.length===2&&typeof u=="object"?h=m:h=u,!pe.hasListeners())throw Error("No listeners available");const y={};return(yield pe.trigger(h,y)).find(C=>!!C)})}},me=p();function ke(r){const n={},i=p();function m(u){return Array.isArray(u)?u:[u]}return{resetState(){i.removeAllListeners();for(const u of Object.keys(n))delete n[u]},clear(){return R(this,null,function*(){var u;const s={};for(const h of Object.keys(n)){const y=(u=n[h])!=null?u:null,L=null;s[h]={oldValue:y,newValue:L},delete n[h]}yield i.trigger(s),yield me.trigger(s,r)})},get(u){return R(this,null,function*(){if(u==null)return U({},n);const s={};return typeof u=="object"&&!Array.isArray(u)?Object.keys(u).forEach(h=>{var y;return s[h]=(y=n[h])!=null?y:u[h]}):m(u).forEach(h=>s[h]=n[h]),s})},remove(u){return R(this,null,function*(){var s;const h={};for(const y of m(u)){const L=(s=n[y])!=null?s:null,C=null;h[y]={oldValue:L,newValue:C},delete n[y]}yield i.trigger(h),yield me.trigger(h,r)})},set(u){return R(this,null,function*(){var s;const h={};for(const[y,L]of Object.entries(JSON.parse(JSON.stringify(u)))){if(L===void 0)continue;const C=(s=n[y])!=null?s:null;h[y]={oldValue:C,newValue:L},L==null?delete n[y]:n[y]=L}yield i.trigger(h),yield me.trigger(h,r)})},onChanged:i}}var Ar=$(U({},ke("local")),{QUOTA_BYTES:5242880}),Sr=$(U({},ke("managed")),{QUOTA_BYTES:5242880}),xr=$(U({},ke("session")),{QUOTA_BYTES:10485760}),Tr=$(U({},ke("sync")),{MAX_ITEMS:512,MAX_WRITE_OPERATIONS_PER_HOUR:1800,MAX_WRITE_OPERATIONS_PER_MINUTE:120,QUOTA_BYTES:102400,QUOTA_BYTES_PER_ITEM:8192,getBytesInUse:()=>{throw Error("Browser.storage.sync.getBytesInUse not implemented.")}}),Rt={resetState(){Ar.resetState(),Sr.resetState(),xr.resetState(),Tr.resetState(),me.removeAllListeners()},local:Ar,managed:Sr,session:xr,sync:Tr,onChanged:me},Ue=p(),_r=p(),De=p(),Ir={id:0,alwaysOnTop:!1,incognito:!1},Nr=1,q=[Ir],J,be,Fe=Nr;function Et(r){be=J,J=r}function Lt(){const r=Fe;return Fe++,r}function Re(r,n){return $(U({},r),{tabs:n!=null&&n.populate?H.filter(i=>i.windowId===r.id).map(ee):void 0,focused:r.id===J})}function Pt(r){if(r!=null)return r=="detached_panel"?"panel":r}var N={resetState(){q.length=1,q[0]=Ir,J=void 0,be=void 0,Fe=Nr,Ue.removeAllListeners(),_r.removeAllListeners(),De.removeAllListeners()},get(r,n){return R(this,null,function*(){const i=q.find(m=>m.id===r);if(i)return Re(i,n)})},getCurrent(r){if(J!=null)return N.get(J,r)},getLastFocused(r){if(be!=null)return N.get(be,r)},getAll(r){return R(this,null,function*(){return q.map(n=>Re(n,r))})},create(r){return R(this,null,function*(){var n;const i={id:Lt(),alwaysOnTop:!1,incognito:(n=r==null?void 0:r.incognito)!=null?n:!1,height:r==null?void 0:r.height,left:r==null?void 0:r.left,state:r==null?void 0:r.state,top:r==null?void 0:r.top,type:Pt(r==null?void 0:r.type),width:r==null?void 0:r.width};q.push(i),r!=null&&r.focused&&Et(i.id);const m=Re(i);return yield Ue.trigger(m),r!=null&&r.focused&&De.trigger(m.id),m})},update(r,n){return R(this,null,function*(){const i=q.find(m=>m.id===r);if(i)return Re(i)})},remove(r){return R(this,null,function*(){const n=q.findIndex(i=>i.id===r);n<0||q.splice(n,1)})},onCreated:Ue,onRemoved:_r,onFocusChanged:De},He=p(),Ee=p(),We=p(),qe=p(),je=p(),Or={id:0,index:0,highlighted:!1,incognito:!1,pinned:!1},Ur=1,H=[Or],G,Ve=Ur;function Mt(r){G=r}function Dr(){const r=Ve;return Ve++,r}function ee(r){return $(U({},r),{active:G===r.id})}var ae={resetState(){H.length=1,H[0]=Or,G=void 0,Ve=Ur,He.removeAllListeners(),Ee.removeAllListeners(),We.removeAllListeners(),qe.removeAllListeners(),je.removeAllListeners()},get(r){return R(this,null,function*(){const n=H.find(i=>i.id===r);if(n)return ee(n)})},getCurrent(){if(G!=null)return ae.get(G)},create(r){return R(this,null,function*(){var n,i,m;const u=r.windowId?yield N.get(r.windowId,{populate:!0}):yield N.getCurrent({populate:!0}),s={highlighted:!1,incognito:!1,index:(i=(n=u.tabs)==null?void 0:n.length)!=null?i:0,pinned:(m=r.pinned)!=null?m:!1,windowId:u.id,id:Dr(),url:r.url},h=ee(s);return yield Ee.trigger(h),h})},duplicate(r,n){return R(this,null,function*(){const i=yield ae.get(r),m=$(U({},i),{id:Dr()}),u=G;n!=null&&n.active&&Mt(m.id);const s=ee(m);return yield Ee.trigger(s),n!=null&&n.active&&(yield He.trigger({tabId:s.id,windowId:s.windowId,previousTabId:u})),s})},query(r){return R(this,null,function*(){const n=yield N.getCurrent(),i=yield N.getLastFocused();return H.filter(m=>{var u;let s=!0;return r.active!=null&&(s=s&&G===m.id),r.attention!=null&&(s=s&&m.attention===r.attention),r.audible!=null&&(s=s&&m.audible===r.audible),r.autoDiscardable!=null&&(s=s&&m.autoDiscardable===r.autoDiscardable),r.camera!=null&&(s=!1),r.cookieStoreId!=null&&(s=s&&m.cookieStoreId===r.cookieStoreId),r.currentWindow!=null&&r.currentWindow&&(s=s&&n.id===m.windowId),r.currentWindow!=null&&!r.currentWindow&&(s=s&&n.id!==m.windowId),r.discarded!=null&&(s=s&&m.discarded===r.discarded),r.hidden!=null&&(s=s&&m.hidden===r.hidden),r.highlighted!=null&&(s=s&&m.highlighted===r.highlighted),r.index!=null&&(s=s&&m.index===r.index),r.lastFocusedWindow!=null&&r.lastFocusedWindow&&(s=s&&i.id===m.windowId),r.lastFocusedWindow!=null&&!r.lastFocusedWindow&&(s=s&&i.id!==m.windowId),r.microphone!=null&&(s=!1),r.muted!=null&&(s=s&&((u=m.mutedInfo)==null?void 0:u.muted)===r.muted),r.openerTabId!=null&&(s=s&&!!m.openerTabId),r.pinned!=null&&(s=s&&m.pinned===r.pinned),r.screen!=null&&(s=!1),r.status!=null&&(s=s&&m.status===r.status),r.title!=null&&(s=s&&m.title==r.title),r.url!=null&&(s=s&&m.url===r.url),r.windowType!=null&&(s=!1),s}).map(ee)})},highlight(r){return R(this,null,function*(){const n=Array.isArray(r.tabs)?r.tabs:[r.tabs];let i;for(const m of n){const u=yield ae.get(m);u&&(i=yield N.get(u.windowId),u.highlighted=!0)}return yield qe.trigger({tabIds:n,windowId:i.id}),i})},update(r,n){return R(this,null,function*(){let i;r!==void 0&&typeof r=="object"?i=r:i=n;let m;typeof r=="number"?m=r:m=(yield N.getCurrent()).tabs.find(C=>C.active).id;const u=yield ae.get(m);if(!u)throw new Error("Tab not found");const s=U(U({},u),i),h=H.findIndex(L=>L.id===m);H[h]=s;const y=ee(s);return yield We.trigger(y.id,i,y),y})},remove(r){return R(this,null,function*(){var n;const i=Array.isArray(r)?r:[r];for(const m of i){const u=H.findIndex(s=>s.id===m);if(u>=0){const[s]=H.splice(u,1),h=yield N.get(s.id,{populate:!0});yield je.trigger(m,{isWindowClosing:!1,windowId:h.id}),(n=h.tabs)!=null&&n.length||(yield N.remove(h.id))}}})},onCreated:Ee,onUpdated:We,onActivated:He,onHighlighted:qe,onRemoved:je},Bt={onBeforeNavigate:p(),onCommitted:p(),onCompleted:p(),onCreatedNavigationTarget:p(),onDOMContentLoaded:p(),onErrorOccurred:p(),onHistoryStateUpdated:p(),onReferenceFragmentUpdated:p(),onTabReplaced:p()},vt={activityLog:{onExtensionActivity:{addListener:()=>{throw Error(`Browser.activityLog.onExtensionActivity.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.activityLog.onExtensionActivity.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.activityLog.onExtensionActivity.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.activityLog.onExtensionActivity.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},alarms:{create:()=>{throw Error(`Browser.alarms.create not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},get:()=>{throw Error(`Browser.alarms.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getAll:()=>{throw Error(`Browser.alarms.getAll not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.alarms.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clearAll:()=>{throw Error(`Browser.alarms.clearAll not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onAlarm:{addListener:()=>{throw Error(`Browser.alarms.onAlarm.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.alarms.onAlarm.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.alarms.onAlarm.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.alarms.onAlarm.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},bookmarks:{get:()=>{throw Error(`Browser.bookmarks.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getChildren:()=>{throw Error(`Browser.bookmarks.getChildren not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getRecent:()=>{throw Error(`Browser.bookmarks.getRecent not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getTree:()=>{throw Error(`Browser.bookmarks.getTree not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getSubTree:()=>{throw Error(`Browser.bookmarks.getSubTree not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},search:()=>{throw Error(`Browser.bookmarks.search not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},create:()=>{throw Error(`Browser.bookmarks.create not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},move:()=>{throw Error(`Browser.bookmarks.move not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},update:()=>{throw Error(`Browser.bookmarks.update not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},remove:()=>{throw Error(`Browser.bookmarks.remove not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeTree:()=>{throw Error(`Browser.bookmarks.removeTree not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onCreated:{addListener:()=>{throw Error(`Browser.bookmarks.onCreated.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.bookmarks.onCreated.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.bookmarks.onCreated.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.bookmarks.onCreated.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onRemoved:{addListener:()=>{throw Error(`Browser.bookmarks.onRemoved.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.bookmarks.onRemoved.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.bookmarks.onRemoved.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.bookmarks.onRemoved.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onChanged:{addListener:()=>{throw Error(`Browser.bookmarks.onChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.bookmarks.onChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.bookmarks.onChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.bookmarks.onChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onMoved:{addListener:()=>{throw Error(`Browser.bookmarks.onMoved.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.bookmarks.onMoved.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.bookmarks.onMoved.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.bookmarks.onMoved.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},action:{setTitle:()=>{throw Error(`Browser.action.setTitle not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getTitle:()=>{throw Error(`Browser.action.getTitle not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getUserSettings:()=>{throw Error(`Browser.action.getUserSettings not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setIcon:()=>{throw Error(`Browser.action.setIcon not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setPopup:()=>{throw Error(`Browser.action.setPopup not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getPopup:()=>{throw Error(`Browser.action.getPopup not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setBadgeText:()=>{throw Error(`Browser.action.setBadgeText not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getBadgeText:()=>{throw Error(`Browser.action.getBadgeText not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setBadgeBackgroundColor:()=>{throw Error(`Browser.action.setBadgeBackgroundColor not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getBadgeBackgroundColor:()=>{throw Error(`Browser.action.getBadgeBackgroundColor not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setBadgeTextColor:()=>{throw Error(`Browser.action.setBadgeTextColor not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getBadgeTextColor:()=>{throw Error(`Browser.action.getBadgeTextColor not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},enable:()=>{throw Error(`Browser.action.enable not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},disable:()=>{throw Error(`Browser.action.disable not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},isEnabled:()=>{throw Error(`Browser.action.isEnabled not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},openPopup:()=>{throw Error(`Browser.action.openPopup not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onClicked:{addListener:()=>{throw Error(`Browser.action.onClicked.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.action.onClicked.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.action.onClicked.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.action.onClicked.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},browserAction:{setTitle:()=>{throw Error(`Browser.browserAction.setTitle not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getTitle:()=>{throw Error(`Browser.browserAction.getTitle not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getUserSettings:()=>{throw Error(`Browser.browserAction.getUserSettings not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setIcon:()=>{throw Error(`Browser.browserAction.setIcon not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setPopup:()=>{throw Error(`Browser.browserAction.setPopup not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getPopup:()=>{throw Error(`Browser.browserAction.getPopup not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setBadgeText:()=>{throw Error(`Browser.browserAction.setBadgeText not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getBadgeText:()=>{throw Error(`Browser.browserAction.getBadgeText not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setBadgeBackgroundColor:()=>{throw Error(`Browser.browserAction.setBadgeBackgroundColor not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getBadgeBackgroundColor:()=>{throw Error(`Browser.browserAction.getBadgeBackgroundColor not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setBadgeTextColor:()=>{throw Error(`Browser.browserAction.setBadgeTextColor not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getBadgeTextColor:()=>{throw Error(`Browser.browserAction.getBadgeTextColor not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},enable:()=>{throw Error(`Browser.browserAction.enable not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},disable:()=>{throw Error(`Browser.browserAction.disable not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},isEnabled:()=>{throw Error(`Browser.browserAction.isEnabled not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},openPopup:()=>{throw Error(`Browser.browserAction.openPopup not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onClicked:{addListener:()=>{throw Error(`Browser.browserAction.onClicked.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserAction.onClicked.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserAction.onClicked.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserAction.onClicked.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},browserSettings:{allowPopupsForUserEvents:{get:()=>{throw Error(`Browser.browserSettings.allowPopupsForUserEvents.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.allowPopupsForUserEvents.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.allowPopupsForUserEvents.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.allowPopupsForUserEvents.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.allowPopupsForUserEvents.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.allowPopupsForUserEvents.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.allowPopupsForUserEvents.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},cacheEnabled:{get:()=>{throw Error(`Browser.browserSettings.cacheEnabled.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.cacheEnabled.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.cacheEnabled.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.cacheEnabled.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.cacheEnabled.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.cacheEnabled.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.cacheEnabled.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},closeTabsByDoubleClick:{get:()=>{throw Error(`Browser.browserSettings.closeTabsByDoubleClick.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.closeTabsByDoubleClick.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.closeTabsByDoubleClick.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.closeTabsByDoubleClick.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.closeTabsByDoubleClick.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.closeTabsByDoubleClick.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.closeTabsByDoubleClick.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},contextMenuShowEvent:{get:()=>{throw Error(`Browser.browserSettings.contextMenuShowEvent.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.contextMenuShowEvent.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.contextMenuShowEvent.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.contextMenuShowEvent.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.contextMenuShowEvent.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.contextMenuShowEvent.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.contextMenuShowEvent.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},homepageOverride:{get:()=>{throw Error(`Browser.browserSettings.homepageOverride.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.homepageOverride.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.homepageOverride.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.homepageOverride.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.homepageOverride.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.homepageOverride.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.homepageOverride.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},imageAnimationBehavior:{get:()=>{throw Error(`Browser.browserSettings.imageAnimationBehavior.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.imageAnimationBehavior.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.imageAnimationBehavior.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.imageAnimationBehavior.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.imageAnimationBehavior.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.imageAnimationBehavior.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.imageAnimationBehavior.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},newTabPageOverride:{get:()=>{throw Error(`Browser.browserSettings.newTabPageOverride.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.newTabPageOverride.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.newTabPageOverride.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.newTabPageOverride.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.newTabPageOverride.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.newTabPageOverride.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.newTabPageOverride.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},newTabPosition:{get:()=>{throw Error(`Browser.browserSettings.newTabPosition.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.newTabPosition.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.newTabPosition.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.newTabPosition.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.newTabPosition.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.newTabPosition.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.newTabPosition.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},openBookmarksInNewTabs:{get:()=>{throw Error(`Browser.browserSettings.openBookmarksInNewTabs.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.openBookmarksInNewTabs.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.openBookmarksInNewTabs.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.openBookmarksInNewTabs.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.openBookmarksInNewTabs.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.openBookmarksInNewTabs.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.openBookmarksInNewTabs.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},openSearchResultsInNewTabs:{get:()=>{throw Error(`Browser.browserSettings.openSearchResultsInNewTabs.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.openSearchResultsInNewTabs.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.openSearchResultsInNewTabs.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.openSearchResultsInNewTabs.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.openSearchResultsInNewTabs.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.openSearchResultsInNewTabs.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.openSearchResultsInNewTabs.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},openUrlbarResultsInNewTabs:{get:()=>{throw Error(`Browser.browserSettings.openUrlbarResultsInNewTabs.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.openUrlbarResultsInNewTabs.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.openUrlbarResultsInNewTabs.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.openUrlbarResultsInNewTabs.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.openUrlbarResultsInNewTabs.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.openUrlbarResultsInNewTabs.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.openUrlbarResultsInNewTabs.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},webNotificationsDisabled:{get:()=>{throw Error(`Browser.browserSettings.webNotificationsDisabled.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.webNotificationsDisabled.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.webNotificationsDisabled.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.webNotificationsDisabled.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.webNotificationsDisabled.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.webNotificationsDisabled.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.webNotificationsDisabled.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},overrideDocumentColors:{get:()=>{throw Error(`Browser.browserSettings.overrideDocumentColors.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.overrideDocumentColors.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.overrideDocumentColors.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.overrideDocumentColors.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.overrideDocumentColors.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.overrideDocumentColors.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.overrideDocumentColors.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},overrideContentColorScheme:{get:()=>{throw Error(`Browser.browserSettings.overrideContentColorScheme.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.overrideContentColorScheme.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.overrideContentColorScheme.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.overrideContentColorScheme.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.overrideContentColorScheme.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.overrideContentColorScheme.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.overrideContentColorScheme.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},useDocumentFonts:{get:()=>{throw Error(`Browser.browserSettings.useDocumentFonts.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.useDocumentFonts.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.useDocumentFonts.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.useDocumentFonts.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.useDocumentFonts.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.useDocumentFonts.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.useDocumentFonts.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},zoomFullPage:{get:()=>{throw Error(`Browser.browserSettings.zoomFullPage.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.zoomFullPage.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.zoomFullPage.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.zoomFullPage.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.zoomFullPage.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.zoomFullPage.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.zoomFullPage.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},zoomSiteSpecific:{get:()=>{throw Error(`Browser.browserSettings.zoomSiteSpecific.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.zoomSiteSpecific.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.zoomSiteSpecific.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.zoomSiteSpecific.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.zoomSiteSpecific.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.zoomSiteSpecific.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.zoomSiteSpecific.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},colorManagement:{mode:{get:()=>{throw Error(`Browser.browserSettings.colorManagement.mode.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.colorManagement.mode.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.colorManagement.mode.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.colorManagement.mode.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.colorManagement.mode.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.colorManagement.mode.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.colorManagement.mode.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},useNativeSRGB:{get:()=>{throw Error(`Browser.browserSettings.colorManagement.useNativeSRGB.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.colorManagement.useNativeSRGB.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.colorManagement.useNativeSRGB.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.colorManagement.useNativeSRGB.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.colorManagement.useNativeSRGB.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.colorManagement.useNativeSRGB.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.colorManagement.useNativeSRGB.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},useWebRenderCompositor:{get:()=>{throw Error(`Browser.browserSettings.colorManagement.useWebRenderCompositor.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.browserSettings.colorManagement.useWebRenderCompositor.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.browserSettings.colorManagement.useWebRenderCompositor.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.browserSettings.colorManagement.useWebRenderCompositor.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.browserSettings.colorManagement.useWebRenderCompositor.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.browserSettings.colorManagement.useWebRenderCompositor.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.browserSettings.colorManagement.useWebRenderCompositor.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}}}},browsingData:{settings:()=>{throw Error(`Browser.browsingData.settings not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},remove:()=>{throw Error(`Browser.browsingData.remove not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeCache:()=>{throw Error(`Browser.browsingData.removeCache not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeCookies:()=>{throw Error(`Browser.browsingData.removeCookies not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeDownloads:()=>{throw Error(`Browser.browsingData.removeDownloads not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeFormData:()=>{throw Error(`Browser.browsingData.removeFormData not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeHistory:()=>{throw Error(`Browser.browsingData.removeHistory not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeLocalStorage:()=>{throw Error(`Browser.browsingData.removeLocalStorage not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removePluginData:()=>{throw Error(`Browser.browsingData.removePluginData not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removePasswords:()=>{throw Error(`Browser.browsingData.removePasswords not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},captivePortal:{getState:()=>{throw Error(`Browser.captivePortal.getState not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getLastChecked:()=>{throw Error(`Browser.captivePortal.getLastChecked not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onStateChanged:{addListener:()=>{throw Error(`Browser.captivePortal.onStateChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.captivePortal.onStateChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.captivePortal.onStateChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.captivePortal.onStateChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onConnectivityAvailable:{addListener:()=>{throw Error(`Browser.captivePortal.onConnectivityAvailable.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.captivePortal.onConnectivityAvailable.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.captivePortal.onConnectivityAvailable.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.captivePortal.onConnectivityAvailable.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},canonicalURL:{get:()=>{throw Error(`Browser.captivePortal.canonicalURL.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.captivePortal.canonicalURL.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.captivePortal.canonicalURL.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.captivePortal.canonicalURL.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.captivePortal.canonicalURL.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.captivePortal.canonicalURL.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.captivePortal.canonicalURL.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}}},clipboard:{setImageData:()=>{throw Error(`Browser.clipboard.setImageData not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},commands:{update:()=>{throw Error(`Browser.commands.update not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},reset:()=>{throw Error(`Browser.commands.reset not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getAll:()=>{throw Error(`Browser.commands.getAll not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onCommand:{addListener:()=>{throw Error(`Browser.commands.onCommand.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.commands.onCommand.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.commands.onCommand.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.commands.onCommand.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onChanged:{addListener:()=>{throw Error(`Browser.commands.onChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.commands.onChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.commands.onChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.commands.onChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},contentScripts:{register:()=>{throw Error(`Browser.contentScripts.register not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},contextualIdentities:{get:()=>{throw Error(`Browser.contextualIdentities.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},query:()=>{throw Error(`Browser.contextualIdentities.query not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},create:()=>{throw Error(`Browser.contextualIdentities.create not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},update:()=>{throw Error(`Browser.contextualIdentities.update not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},remove:()=>{throw Error(`Browser.contextualIdentities.remove not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onUpdated:{addListener:()=>{throw Error(`Browser.contextualIdentities.onUpdated.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.contextualIdentities.onUpdated.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.contextualIdentities.onUpdated.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.contextualIdentities.onUpdated.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onCreated:{addListener:()=>{throw Error(`Browser.contextualIdentities.onCreated.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.contextualIdentities.onCreated.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.contextualIdentities.onCreated.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.contextualIdentities.onCreated.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onRemoved:{addListener:()=>{throw Error(`Browser.contextualIdentities.onRemoved.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.contextualIdentities.onRemoved.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.contextualIdentities.onRemoved.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.contextualIdentities.onRemoved.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},cookies:{get:()=>{throw Error(`Browser.cookies.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getAll:()=>{throw Error(`Browser.cookies.getAll not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.cookies.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},remove:()=>{throw Error(`Browser.cookies.remove not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getAllCookieStores:()=>{throw Error(`Browser.cookies.getAllCookieStores not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChanged:{addListener:()=>{throw Error(`Browser.cookies.onChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.cookies.onChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.cookies.onChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.cookies.onChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},declarativeNetRequest:{updateDynamicRules:()=>{throw Error(`Browser.declarativeNetRequest.updateDynamicRules not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},updateSessionRules:()=>{throw Error(`Browser.declarativeNetRequest.updateSessionRules not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getEnabledRulesets:()=>{throw Error(`Browser.declarativeNetRequest.getEnabledRulesets not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},updateEnabledRulesets:()=>{throw Error(`Browser.declarativeNetRequest.updateEnabledRulesets not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getAvailableStaticRuleCount:()=>{throw Error(`Browser.declarativeNetRequest.getAvailableStaticRuleCount not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getDynamicRules:()=>{throw Error(`Browser.declarativeNetRequest.getDynamicRules not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getSessionRules:()=>{throw Error(`Browser.declarativeNetRequest.getSessionRules not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},isRegexSupported:()=>{throw Error(`Browser.declarativeNetRequest.isRegexSupported not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},testMatchOutcome:()=>{throw Error(`Browser.declarativeNetRequest.testMatchOutcome not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},DYNAMIC_RULESET_ID:"_dynamic",GUARANTEED_MINIMUM_STATIC_RULES:0,MAX_NUMBER_OF_STATIC_RULESETS:0,MAX_NUMBER_OF_ENABLED_STATIC_RULESETS:0,MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES:0,MAX_NUMBER_OF_REGEX_RULES:0,SESSION_RULESET_ID:"_session"},devtools:{inspectedWindow:{eval:()=>{throw Error(`Browser.devtools.inspectedWindow.eval not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},reload:()=>{throw Error(`Browser.devtools.inspectedWindow.reload not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},tabId:0},network:{getHAR:()=>{throw Error(`Browser.devtools.network.getHAR not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onRequestFinished:{addListener:()=>{throw Error(`Browser.devtools.network.onRequestFinished.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.devtools.network.onRequestFinished.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.devtools.network.onRequestFinished.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.devtools.network.onRequestFinished.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onNavigated:{addListener:()=>{throw Error(`Browser.devtools.network.onNavigated.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.devtools.network.onNavigated.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.devtools.network.onNavigated.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.devtools.network.onNavigated.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},panels:{create:()=>{throw Error(`Browser.devtools.panels.create not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onThemeChanged:{addListener:()=>{throw Error(`Browser.devtools.panels.onThemeChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.devtools.panels.onThemeChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.devtools.panels.onThemeChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.devtools.panels.onThemeChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},elements:{createSidebarPane:()=>{throw Error(`Browser.devtools.panels.elements.createSidebarPane not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onSelectionChanged:{addListener:()=>{throw Error(`Browser.devtools.panels.elements.onSelectionChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.devtools.panels.elements.onSelectionChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.devtools.panels.elements.onSelectionChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.devtools.panels.elements.onSelectionChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},sources:{},themeName:""}},dns:{resolve:()=>{throw Error(`Browser.dns.resolve not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},downloads:{download:()=>{throw Error(`Browser.downloads.download not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},search:()=>{throw Error(`Browser.downloads.search not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},pause:()=>{throw Error(`Browser.downloads.pause not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},resume:()=>{throw Error(`Browser.downloads.resume not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},cancel:()=>{throw Error(`Browser.downloads.cancel not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getFileIcon:()=>{throw Error(`Browser.downloads.getFileIcon not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},open:()=>{throw Error(`Browser.downloads.open not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},show:()=>{throw Error(`Browser.downloads.show not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},showDefaultFolder:()=>{throw Error(`Browser.downloads.showDefaultFolder not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},erase:()=>{throw Error(`Browser.downloads.erase not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeFile:()=>{throw Error(`Browser.downloads.removeFile not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onCreated:{addListener:()=>{throw Error(`Browser.downloads.onCreated.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.downloads.onCreated.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.downloads.onCreated.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.downloads.onCreated.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onErased:{addListener:()=>{throw Error(`Browser.downloads.onErased.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.downloads.onErased.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.downloads.onErased.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.downloads.onErased.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onChanged:{addListener:()=>{throw Error(`Browser.downloads.onChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.downloads.onChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.downloads.onChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.downloads.onChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},events:{},experiments:{},extension:{getViews:()=>{throw Error(`Browser.extension.getViews not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getBackgroundPage:()=>{throw Error(`Browser.extension.getBackgroundPage not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},isAllowedIncognitoAccess:()=>{throw Error(`Browser.extension.isAllowedIncognitoAccess not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},isAllowedFileSchemeAccess:()=>{throw Error(`Browser.extension.isAllowedFileSchemeAccess not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},inIncognitoContext:!1},extensionTypes:{},find:{find:()=>{throw Error(`Browser.find.find not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},highlightResults:()=>{throw Error(`Browser.find.highlightResults not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeHighlighting:()=>{throw Error(`Browser.find.removeHighlighting not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},geckoProfiler:{start:()=>{throw Error(`Browser.geckoProfiler.start not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},stop:()=>{throw Error(`Browser.geckoProfiler.stop not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},pause:()=>{throw Error(`Browser.geckoProfiler.pause not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},resume:()=>{throw Error(`Browser.geckoProfiler.resume not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},dumpProfileToFile:()=>{throw Error(`Browser.geckoProfiler.dumpProfileToFile not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getProfile:()=>{throw Error(`Browser.geckoProfiler.getProfile not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getProfileAsArrayBuffer:()=>{throw Error(`Browser.geckoProfiler.getProfileAsArrayBuffer not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getProfileAsGzippedArrayBuffer:()=>{throw Error(`Browser.geckoProfiler.getProfileAsGzippedArrayBuffer not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getSymbols:()=>{throw Error(`Browser.geckoProfiler.getSymbols not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onRunning:{addListener:()=>{throw Error(`Browser.geckoProfiler.onRunning.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.geckoProfiler.onRunning.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.geckoProfiler.onRunning.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.geckoProfiler.onRunning.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},history:{search:()=>{throw Error(`Browser.history.search not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getVisits:()=>{throw Error(`Browser.history.getVisits not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},addUrl:()=>{throw Error(`Browser.history.addUrl not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},deleteUrl:()=>{throw Error(`Browser.history.deleteUrl not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},deleteRange:()=>{throw Error(`Browser.history.deleteRange not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},deleteAll:()=>{throw Error(`Browser.history.deleteAll not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onVisited:{addListener:()=>{throw Error(`Browser.history.onVisited.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.history.onVisited.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.history.onVisited.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.history.onVisited.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onVisitRemoved:{addListener:()=>{throw Error(`Browser.history.onVisitRemoved.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.history.onVisitRemoved.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.history.onVisitRemoved.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.history.onVisitRemoved.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onTitleChanged:{addListener:()=>{throw Error(`Browser.history.onTitleChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.history.onTitleChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.history.onTitleChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.history.onTitleChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},i18n:{getAcceptLanguages:()=>{throw Error(`Browser.i18n.getAcceptLanguages not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getMessage:()=>{throw Error(`Browser.i18n.getMessage not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getUILanguage:()=>{throw Error(`Browser.i18n.getUILanguage not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},detectLanguage:()=>{throw Error(`Browser.i18n.detectLanguage not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},identity:{launchWebAuthFlow:()=>{throw Error(`Browser.identity.launchWebAuthFlow not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getRedirectURL:()=>{throw Error(`Browser.identity.getRedirectURL not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},idle:{queryState:()=>{throw Error(`Browser.idle.queryState not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setDetectionInterval:()=>{throw Error(`Browser.idle.setDetectionInterval not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onStateChanged:{addListener:()=>{throw Error(`Browser.idle.onStateChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.idle.onStateChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.idle.onStateChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.idle.onStateChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},management:{getAll:()=>{throw Error(`Browser.management.getAll not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},get:()=>{throw Error(`Browser.management.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},install:()=>{throw Error(`Browser.management.install not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getSelf:()=>{throw Error(`Browser.management.getSelf not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},uninstallSelf:()=>{throw Error(`Browser.management.uninstallSelf not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setEnabled:()=>{throw Error(`Browser.management.setEnabled not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onDisabled:{addListener:()=>{throw Error(`Browser.management.onDisabled.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.management.onDisabled.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.management.onDisabled.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.management.onDisabled.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onEnabled:{addListener:()=>{throw Error(`Browser.management.onEnabled.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.management.onEnabled.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.management.onEnabled.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.management.onEnabled.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onInstalled:{addListener:()=>{throw Error(`Browser.management.onInstalled.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.management.onInstalled.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.management.onInstalled.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.management.onInstalled.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onUninstalled:{addListener:()=>{throw Error(`Browser.management.onUninstalled.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.management.onUninstalled.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.management.onUninstalled.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.management.onUninstalled.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},manifest:{},contextMenus:{create:()=>{throw Error(`Browser.contextMenus.create not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},update:()=>{throw Error(`Browser.contextMenus.update not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},remove:()=>{throw Error(`Browser.contextMenus.remove not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeAll:()=>{throw Error(`Browser.contextMenus.removeAll not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},overrideContext:()=>{throw Error(`Browser.contextMenus.overrideContext not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},refresh:()=>{throw Error(`Browser.contextMenus.refresh not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getTargetElement:()=>{throw Error(`Browser.contextMenus.getTargetElement not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onClicked:{addListener:()=>{throw Error(`Browser.contextMenus.onClicked.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.contextMenus.onClicked.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.contextMenus.onClicked.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.contextMenus.onClicked.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onShown:{addListener:()=>{throw Error(`Browser.contextMenus.onShown.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.contextMenus.onShown.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.contextMenus.onShown.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.contextMenus.onShown.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onHidden:{addListener:()=>{throw Error(`Browser.contextMenus.onHidden.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.contextMenus.onHidden.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.contextMenus.onHidden.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.contextMenus.onHidden.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},ACTION_MENU_TOP_LEVEL_LIMIT:6},menus:{create:()=>{throw Error(`Browser.menus.create not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},update:()=>{throw Error(`Browser.menus.update not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},remove:()=>{throw Error(`Browser.menus.remove not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeAll:()=>{throw Error(`Browser.menus.removeAll not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},overrideContext:()=>{throw Error(`Browser.menus.overrideContext not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},refresh:()=>{throw Error(`Browser.menus.refresh not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getTargetElement:()=>{throw Error(`Browser.menus.getTargetElement not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onClicked:{addListener:()=>{throw Error(`Browser.menus.onClicked.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.menus.onClicked.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.menus.onClicked.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.menus.onClicked.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onShown:{addListener:()=>{throw Error(`Browser.menus.onShown.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.menus.onShown.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.menus.onShown.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.menus.onShown.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onHidden:{addListener:()=>{throw Error(`Browser.menus.onHidden.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.menus.onHidden.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.menus.onHidden.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.menus.onHidden.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},ACTION_MENU_TOP_LEVEL_LIMIT:6},networkStatus:{getLinkInfo:()=>{throw Error(`Browser.networkStatus.getLinkInfo not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onConnectionChanged:{addListener:()=>{throw Error(`Browser.networkStatus.onConnectionChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.networkStatus.onConnectionChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.networkStatus.onConnectionChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.networkStatus.onConnectionChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},normandyAddonStudy:{getStudy:()=>{throw Error(`Browser.normandyAddonStudy.getStudy not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},endStudy:()=>{throw Error(`Browser.normandyAddonStudy.endStudy not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getClientMetadata:()=>{throw Error(`Browser.normandyAddonStudy.getClientMetadata not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onUnenroll:{addListener:()=>{throw Error(`Browser.normandyAddonStudy.onUnenroll.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.normandyAddonStudy.onUnenroll.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.normandyAddonStudy.onUnenroll.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.normandyAddonStudy.onUnenroll.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},notifications:{create:()=>{throw Error(`Browser.notifications.create not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.notifications.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getAll:()=>{throw Error(`Browser.notifications.getAll not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onClosed:{addListener:()=>{throw Error(`Browser.notifications.onClosed.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.notifications.onClosed.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.notifications.onClosed.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.notifications.onClosed.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onClicked:{addListener:()=>{throw Error(`Browser.notifications.onClicked.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.notifications.onClicked.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.notifications.onClicked.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.notifications.onClicked.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onButtonClicked:{addListener:()=>{throw Error(`Browser.notifications.onButtonClicked.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.notifications.onButtonClicked.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.notifications.onButtonClicked.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.notifications.onButtonClicked.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onShown:{addListener:()=>{throw Error(`Browser.notifications.onShown.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.notifications.onShown.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.notifications.onShown.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.notifications.onShown.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},omnibox:{setDefaultSuggestion:()=>{throw Error(`Browser.omnibox.setDefaultSuggestion not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onInputStarted:{addListener:()=>{throw Error(`Browser.omnibox.onInputStarted.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.omnibox.onInputStarted.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.omnibox.onInputStarted.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.omnibox.onInputStarted.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onInputChanged:{addListener:()=>{throw Error(`Browser.omnibox.onInputChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.omnibox.onInputChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.omnibox.onInputChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.omnibox.onInputChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onInputEntered:{addListener:()=>{throw Error(`Browser.omnibox.onInputEntered.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.omnibox.onInputEntered.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.omnibox.onInputEntered.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.omnibox.onInputEntered.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onInputCancelled:{addListener:()=>{throw Error(`Browser.omnibox.onInputCancelled.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.omnibox.onInputCancelled.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.omnibox.onInputCancelled.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.omnibox.onInputCancelled.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onDeleteSuggestion:{addListener:()=>{throw Error(`Browser.omnibox.onDeleteSuggestion.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.omnibox.onDeleteSuggestion.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.omnibox.onDeleteSuggestion.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.omnibox.onDeleteSuggestion.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},pageAction:{show:()=>{throw Error(`Browser.pageAction.show not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hide:()=>{throw Error(`Browser.pageAction.hide not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},isShown:()=>{throw Error(`Browser.pageAction.isShown not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setTitle:()=>{throw Error(`Browser.pageAction.setTitle not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getTitle:()=>{throw Error(`Browser.pageAction.getTitle not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setIcon:()=>{throw Error(`Browser.pageAction.setIcon not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setPopup:()=>{throw Error(`Browser.pageAction.setPopup not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getPopup:()=>{throw Error(`Browser.pageAction.getPopup not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},openPopup:()=>{throw Error(`Browser.pageAction.openPopup not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onClicked:{addListener:()=>{throw Error(`Browser.pageAction.onClicked.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.pageAction.onClicked.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.pageAction.onClicked.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.pageAction.onClicked.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},permissions:{getAll:()=>{throw Error(`Browser.permissions.getAll not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},contains:()=>{throw Error(`Browser.permissions.contains not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},request:()=>{throw Error(`Browser.permissions.request not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},remove:()=>{throw Error(`Browser.permissions.remove not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onAdded:{addListener:()=>{throw Error(`Browser.permissions.onAdded.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.permissions.onAdded.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.permissions.onAdded.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.permissions.onAdded.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onRemoved:{addListener:()=>{throw Error(`Browser.permissions.onRemoved.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.permissions.onRemoved.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.permissions.onRemoved.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.permissions.onRemoved.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},pkcs11:{isModuleInstalled:()=>{throw Error(`Browser.pkcs11.isModuleInstalled not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},installModule:()=>{throw Error(`Browser.pkcs11.installModule not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},uninstallModule:()=>{throw Error(`Browser.pkcs11.uninstallModule not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getModuleSlots:()=>{throw Error(`Browser.pkcs11.getModuleSlots not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},privacy:{network:{networkPredictionEnabled:{get:()=>{throw Error(`Browser.privacy.network.networkPredictionEnabled.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.privacy.network.networkPredictionEnabled.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.privacy.network.networkPredictionEnabled.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.privacy.network.networkPredictionEnabled.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.privacy.network.networkPredictionEnabled.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.privacy.network.networkPredictionEnabled.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.privacy.network.networkPredictionEnabled.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},peerConnectionEnabled:{get:()=>{throw Error(`Browser.privacy.network.peerConnectionEnabled.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.privacy.network.peerConnectionEnabled.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.privacy.network.peerConnectionEnabled.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.privacy.network.peerConnectionEnabled.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.privacy.network.peerConnectionEnabled.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.privacy.network.peerConnectionEnabled.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.privacy.network.peerConnectionEnabled.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},webRTCIPHandlingPolicy:{get:()=>{throw Error(`Browser.privacy.network.webRTCIPHandlingPolicy.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.privacy.network.webRTCIPHandlingPolicy.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.privacy.network.webRTCIPHandlingPolicy.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.privacy.network.webRTCIPHandlingPolicy.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.privacy.network.webRTCIPHandlingPolicy.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.privacy.network.webRTCIPHandlingPolicy.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.privacy.network.webRTCIPHandlingPolicy.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},tlsVersionRestriction:{get:()=>{throw Error(`Browser.privacy.network.tlsVersionRestriction.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.privacy.network.tlsVersionRestriction.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.privacy.network.tlsVersionRestriction.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.privacy.network.tlsVersionRestriction.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.privacy.network.tlsVersionRestriction.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.privacy.network.tlsVersionRestriction.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.privacy.network.tlsVersionRestriction.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},httpsOnlyMode:{get:()=>{throw Error(`Browser.privacy.network.httpsOnlyMode.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.privacy.network.httpsOnlyMode.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.privacy.network.httpsOnlyMode.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.privacy.network.httpsOnlyMode.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.privacy.network.httpsOnlyMode.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.privacy.network.httpsOnlyMode.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.privacy.network.httpsOnlyMode.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},globalPrivacyControl:{get:()=>{throw Error(`Browser.privacy.network.globalPrivacyControl.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.privacy.network.globalPrivacyControl.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.privacy.network.globalPrivacyControl.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.privacy.network.globalPrivacyControl.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.privacy.network.globalPrivacyControl.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.privacy.network.globalPrivacyControl.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.privacy.network.globalPrivacyControl.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}}},services:{passwordSavingEnabled:{get:()=>{throw Error(`Browser.privacy.services.passwordSavingEnabled.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.privacy.services.passwordSavingEnabled.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.privacy.services.passwordSavingEnabled.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.privacy.services.passwordSavingEnabled.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.privacy.services.passwordSavingEnabled.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.privacy.services.passwordSavingEnabled.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.privacy.services.passwordSavingEnabled.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}}},websites:{hyperlinkAuditingEnabled:{get:()=>{throw Error(`Browser.privacy.websites.hyperlinkAuditingEnabled.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.privacy.websites.hyperlinkAuditingEnabled.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.privacy.websites.hyperlinkAuditingEnabled.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.privacy.websites.hyperlinkAuditingEnabled.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.privacy.websites.hyperlinkAuditingEnabled.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.privacy.websites.hyperlinkAuditingEnabled.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.privacy.websites.hyperlinkAuditingEnabled.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},referrersEnabled:{get:()=>{throw Error(`Browser.privacy.websites.referrersEnabled.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.privacy.websites.referrersEnabled.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.privacy.websites.referrersEnabled.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.privacy.websites.referrersEnabled.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.privacy.websites.referrersEnabled.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.privacy.websites.referrersEnabled.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.privacy.websites.referrersEnabled.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},resistFingerprinting:{get:()=>{throw Error(`Browser.privacy.websites.resistFingerprinting.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.privacy.websites.resistFingerprinting.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.privacy.websites.resistFingerprinting.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.privacy.websites.resistFingerprinting.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.privacy.websites.resistFingerprinting.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.privacy.websites.resistFingerprinting.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.privacy.websites.resistFingerprinting.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},firstPartyIsolate:{get:()=>{throw Error(`Browser.privacy.websites.firstPartyIsolate.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.privacy.websites.firstPartyIsolate.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.privacy.websites.firstPartyIsolate.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.privacy.websites.firstPartyIsolate.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.privacy.websites.firstPartyIsolate.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.privacy.websites.firstPartyIsolate.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.privacy.websites.firstPartyIsolate.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},trackingProtectionMode:{get:()=>{throw Error(`Browser.privacy.websites.trackingProtectionMode.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.privacy.websites.trackingProtectionMode.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.privacy.websites.trackingProtectionMode.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.privacy.websites.trackingProtectionMode.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.privacy.websites.trackingProtectionMode.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.privacy.websites.trackingProtectionMode.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.privacy.websites.trackingProtectionMode.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},cookieConfig:{get:()=>{throw Error(`Browser.privacy.websites.cookieConfig.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.privacy.websites.cookieConfig.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.privacy.websites.cookieConfig.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.privacy.websites.cookieConfig.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.privacy.websites.cookieConfig.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.privacy.websites.cookieConfig.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.privacy.websites.cookieConfig.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}}}},proxy:{onRequest:{addListener:()=>{throw Error(`Browser.proxy.onRequest.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.proxy.onRequest.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.proxy.onRequest.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.proxy.onRequest.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onError:{addListener:()=>{throw Error(`Browser.proxy.onError.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.proxy.onError.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.proxy.onError.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.proxy.onError.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},settings:{get:()=>{throw Error(`Browser.proxy.settings.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.proxy.settings.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.proxy.settings.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.proxy.settings.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.proxy.settings.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.proxy.settings.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.proxy.settings.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}}},runtime:{getBackgroundPage:()=>{throw Error(`Browser.runtime.getBackgroundPage not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},openOptionsPage:()=>{throw Error(`Browser.runtime.openOptionsPage not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getManifest:()=>{throw Error(`Browser.runtime.getManifest not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getURL:()=>{throw Error(`Browser.runtime.getURL not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getFrameId:()=>{throw Error(`Browser.runtime.getFrameId not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setUninstallURL:()=>{throw Error(`Browser.runtime.setUninstallURL not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},reload:()=>{throw Error(`Browser.runtime.reload not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},requestUpdateCheck:()=>{throw Error(`Browser.runtime.requestUpdateCheck not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},connect:()=>{throw Error(`Browser.runtime.connect not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},connectNative:()=>{throw Error(`Browser.runtime.connectNative not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},sendMessage:()=>{throw Error(`Browser.runtime.sendMessage not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},sendNativeMessage:()=>{throw Error(`Browser.runtime.sendNativeMessage not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getBrowserInfo:()=>{throw Error(`Browser.runtime.getBrowserInfo not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getPlatformInfo:()=>{throw Error(`Browser.runtime.getPlatformInfo not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onStartup:{addListener:()=>{throw Error(`Browser.runtime.onStartup.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.runtime.onStartup.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.runtime.onStartup.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.runtime.onStartup.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onInstalled:{addListener:()=>{throw Error(`Browser.runtime.onInstalled.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.runtime.onInstalled.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.runtime.onInstalled.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.runtime.onInstalled.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onSuspend:{addListener:()=>{throw Error(`Browser.runtime.onSuspend.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.runtime.onSuspend.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.runtime.onSuspend.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.runtime.onSuspend.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onSuspendCanceled:{addListener:()=>{throw Error(`Browser.runtime.onSuspendCanceled.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.runtime.onSuspendCanceled.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.runtime.onSuspendCanceled.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.runtime.onSuspendCanceled.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onUpdateAvailable:{addListener:()=>{throw Error(`Browser.runtime.onUpdateAvailable.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.runtime.onUpdateAvailable.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.runtime.onUpdateAvailable.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.runtime.onUpdateAvailable.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onConnect:{addListener:()=>{throw Error(`Browser.runtime.onConnect.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.runtime.onConnect.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.runtime.onConnect.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.runtime.onConnect.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onConnectExternal:{addListener:()=>{throw Error(`Browser.runtime.onConnectExternal.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.runtime.onConnectExternal.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.runtime.onConnectExternal.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.runtime.onConnectExternal.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onMessage:{addListener:()=>{throw Error(`Browser.runtime.onMessage.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.runtime.onMessage.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.runtime.onMessage.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.runtime.onMessage.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onMessageExternal:{addListener:()=>{throw Error(`Browser.runtime.onMessageExternal.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.runtime.onMessageExternal.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.runtime.onMessageExternal.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.runtime.onMessageExternal.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},lastError:{message:""},id:""},scripting:{executeScript:()=>{throw Error(`Browser.scripting.executeScript not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},insertCSS:()=>{throw Error(`Browser.scripting.insertCSS not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeCSS:()=>{throw Error(`Browser.scripting.removeCSS not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},registerContentScripts:()=>{throw Error(`Browser.scripting.registerContentScripts not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getRegisteredContentScripts:()=>{throw Error(`Browser.scripting.getRegisteredContentScripts not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},unregisterContentScripts:()=>{throw Error(`Browser.scripting.unregisterContentScripts not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},updateContentScripts:()=>{throw Error(`Browser.scripting.updateContentScripts not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},search:{get:()=>{throw Error(`Browser.search.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},search:()=>{throw Error(`Browser.search.search not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},query:()=>{throw Error(`Browser.search.query not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},sessions:{forgetClosedTab:()=>{throw Error(`Browser.sessions.forgetClosedTab not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},forgetClosedWindow:()=>{throw Error(`Browser.sessions.forgetClosedWindow not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getRecentlyClosed:()=>{throw Error(`Browser.sessions.getRecentlyClosed not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},restore:()=>{throw Error(`Browser.sessions.restore not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setTabValue:()=>{throw Error(`Browser.sessions.setTabValue not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getTabValue:()=>{throw Error(`Browser.sessions.getTabValue not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeTabValue:()=>{throw Error(`Browser.sessions.removeTabValue not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setWindowValue:()=>{throw Error(`Browser.sessions.setWindowValue not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getWindowValue:()=>{throw Error(`Browser.sessions.getWindowValue not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeWindowValue:()=>{throw Error(`Browser.sessions.removeWindowValue not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChanged:{addListener:()=>{throw Error(`Browser.sessions.onChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.sessions.onChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.sessions.onChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.sessions.onChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},MAX_SESSION_RESULTS:25},sidebarAction:{setTitle:()=>{throw Error(`Browser.sidebarAction.setTitle not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getTitle:()=>{throw Error(`Browser.sidebarAction.getTitle not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setIcon:()=>{throw Error(`Browser.sidebarAction.setIcon not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setPanel:()=>{throw Error(`Browser.sidebarAction.setPanel not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getPanel:()=>{throw Error(`Browser.sidebarAction.getPanel not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},open:()=>{throw Error(`Browser.sidebarAction.open not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},close:()=>{throw Error(`Browser.sidebarAction.close not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},toggle:()=>{throw Error(`Browser.sidebarAction.toggle not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},isOpen:()=>{throw Error(`Browser.sidebarAction.isOpen not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},storage:{onChanged:{addListener:()=>{throw Error(`Browser.storage.onChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.storage.onChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.storage.onChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.storage.onChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},sync:{QUOTA_BYTES:102400,QUOTA_BYTES_PER_ITEM:8192,MAX_ITEMS:512,MAX_WRITE_OPERATIONS_PER_HOUR:1800,MAX_WRITE_OPERATIONS_PER_MINUTE:120,get:()=>{throw Error(`Browser.storage.sync.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getBytesInUse:()=>{throw Error(`Browser.storage.sync.getBytesInUse not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.storage.sync.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},remove:()=>{throw Error(`Browser.storage.sync.remove not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.storage.sync.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChanged:{addListener:()=>{throw Error(`Browser.storage.sync.onChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.storage.sync.onChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.storage.sync.onChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.storage.sync.onChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},local:{QUOTA_BYTES:5242880,get:()=>{throw Error(`Browser.storage.local.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.storage.local.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},remove:()=>{throw Error(`Browser.storage.local.remove not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.storage.local.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChanged:{addListener:()=>{throw Error(`Browser.storage.local.onChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.storage.local.onChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.storage.local.onChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.storage.local.onChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},managed:{QUOTA_BYTES:5242880,get:()=>{throw Error(`Browser.storage.managed.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.storage.managed.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},remove:()=>{throw Error(`Browser.storage.managed.remove not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.storage.managed.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChanged:{addListener:()=>{throw Error(`Browser.storage.managed.onChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.storage.managed.onChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.storage.managed.onChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.storage.managed.onChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},session:{get:()=>{throw Error(`Browser.storage.session.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.storage.session.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},remove:()=>{throw Error(`Browser.storage.session.remove not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.storage.session.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChanged:{addListener:()=>{throw Error(`Browser.storage.session.onChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.storage.session.onChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.storage.session.onChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.storage.session.onChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}}},tabs:{get:()=>{throw Error(`Browser.tabs.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getCurrent:()=>{throw Error(`Browser.tabs.getCurrent not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},connect:()=>{throw Error(`Browser.tabs.connect not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},sendMessage:()=>{throw Error(`Browser.tabs.sendMessage not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},create:()=>{throw Error(`Browser.tabs.create not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},duplicate:()=>{throw Error(`Browser.tabs.duplicate not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},query:()=>{throw Error(`Browser.tabs.query not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},highlight:()=>{throw Error(`Browser.tabs.highlight not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},update:()=>{throw Error(`Browser.tabs.update not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},move:()=>{throw Error(`Browser.tabs.move not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},reload:()=>{throw Error(`Browser.tabs.reload not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},warmup:()=>{throw Error(`Browser.tabs.warmup not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},remove:()=>{throw Error(`Browser.tabs.remove not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},discard:()=>{throw Error(`Browser.tabs.discard not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},detectLanguage:()=>{throw Error(`Browser.tabs.detectLanguage not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},toggleReaderMode:()=>{throw Error(`Browser.tabs.toggleReaderMode not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},captureTab:()=>{throw Error(`Browser.tabs.captureTab not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},captureVisibleTab:()=>{throw Error(`Browser.tabs.captureVisibleTab not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},executeScript:()=>{throw Error(`Browser.tabs.executeScript not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},insertCSS:()=>{throw Error(`Browser.tabs.insertCSS not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeCSS:()=>{throw Error(`Browser.tabs.removeCSS not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setZoom:()=>{throw Error(`Browser.tabs.setZoom not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getZoom:()=>{throw Error(`Browser.tabs.getZoom not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},setZoomSettings:()=>{throw Error(`Browser.tabs.setZoomSettings not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getZoomSettings:()=>{throw Error(`Browser.tabs.getZoomSettings not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},print:()=>{throw Error(`Browser.tabs.print not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},printPreview:()=>{throw Error(`Browser.tabs.printPreview not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},saveAsPDF:()=>{throw Error(`Browser.tabs.saveAsPDF not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},show:()=>{throw Error(`Browser.tabs.show not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hide:()=>{throw Error(`Browser.tabs.hide not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},moveInSuccession:()=>{throw Error(`Browser.tabs.moveInSuccession not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},goForward:()=>{throw Error(`Browser.tabs.goForward not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},goBack:()=>{throw Error(`Browser.tabs.goBack not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onCreated:{addListener:()=>{throw Error(`Browser.tabs.onCreated.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.tabs.onCreated.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.tabs.onCreated.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.tabs.onCreated.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onUpdated:{addListener:()=>{throw Error(`Browser.tabs.onUpdated.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.tabs.onUpdated.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.tabs.onUpdated.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.tabs.onUpdated.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onMoved:{addListener:()=>{throw Error(`Browser.tabs.onMoved.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.tabs.onMoved.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.tabs.onMoved.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.tabs.onMoved.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onActivated:{addListener:()=>{throw Error(`Browser.tabs.onActivated.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.tabs.onActivated.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.tabs.onActivated.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.tabs.onActivated.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onHighlighted:{addListener:()=>{throw Error(`Browser.tabs.onHighlighted.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.tabs.onHighlighted.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.tabs.onHighlighted.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.tabs.onHighlighted.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onDetached:{addListener:()=>{throw Error(`Browser.tabs.onDetached.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.tabs.onDetached.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.tabs.onDetached.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.tabs.onDetached.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onAttached:{addListener:()=>{throw Error(`Browser.tabs.onAttached.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.tabs.onAttached.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.tabs.onAttached.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.tabs.onAttached.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onRemoved:{addListener:()=>{throw Error(`Browser.tabs.onRemoved.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.tabs.onRemoved.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.tabs.onRemoved.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.tabs.onRemoved.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onReplaced:{addListener:()=>{throw Error(`Browser.tabs.onReplaced.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.tabs.onReplaced.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.tabs.onReplaced.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.tabs.onReplaced.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onZoomChange:{addListener:()=>{throw Error(`Browser.tabs.onZoomChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.tabs.onZoomChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.tabs.onZoomChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.tabs.onZoomChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},TAB_ID_NONE:-1},theme:{getCurrent:()=>{throw Error(`Browser.theme.getCurrent not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},update:()=>{throw Error(`Browser.theme.update not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},reset:()=>{throw Error(`Browser.theme.reset not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onUpdated:{addListener:()=>{throw Error(`Browser.theme.onUpdated.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.theme.onUpdated.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.theme.onUpdated.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.theme.onUpdated.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},topSites:{get:()=>{throw Error(`Browser.topSites.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},types:{},urlbar:{closeView:()=>{throw Error(`Browser.urlbar.closeView not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},focus:()=>{throw Error(`Browser.urlbar.focus not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},search:()=>{throw Error(`Browser.urlbar.search not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onBehaviorRequested:{addListener:()=>{throw Error(`Browser.urlbar.onBehaviorRequested.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.urlbar.onBehaviorRequested.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.urlbar.onBehaviorRequested.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.urlbar.onBehaviorRequested.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onEngagement:{addListener:()=>{throw Error(`Browser.urlbar.onEngagement.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.urlbar.onEngagement.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.urlbar.onEngagement.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.urlbar.onEngagement.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onQueryCanceled:{addListener:()=>{throw Error(`Browser.urlbar.onQueryCanceled.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.urlbar.onQueryCanceled.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.urlbar.onQueryCanceled.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.urlbar.onQueryCanceled.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onResultsRequested:{addListener:()=>{throw Error(`Browser.urlbar.onResultsRequested.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.urlbar.onResultsRequested.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.urlbar.onResultsRequested.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.urlbar.onResultsRequested.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onResultPicked:{addListener:()=>{throw Error(`Browser.urlbar.onResultPicked.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.urlbar.onResultPicked.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.urlbar.onResultPicked.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.urlbar.onResultPicked.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},engagementTelemetry:{get:()=>{throw Error(`Browser.urlbar.engagementTelemetry.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},set:()=>{throw Error(`Browser.urlbar.engagementTelemetry.set not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},clear:()=>{throw Error(`Browser.urlbar.engagementTelemetry.clear not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onChange:{addListener:()=>{throw Error(`Browser.urlbar.engagementTelemetry.onChange.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.urlbar.engagementTelemetry.onChange.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.urlbar.engagementTelemetry.onChange.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.urlbar.engagementTelemetry.onChange.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}}},userScripts:{register:()=>{throw Error(`Browser.userScripts.register not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},webNavigation:{getFrame:()=>{throw Error(`Browser.webNavigation.getFrame not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getAllFrames:()=>{throw Error(`Browser.webNavigation.getAllFrames not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onBeforeNavigate:{addListener:()=>{throw Error(`Browser.webNavigation.onBeforeNavigate.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webNavigation.onBeforeNavigate.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webNavigation.onBeforeNavigate.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webNavigation.onBeforeNavigate.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onCommitted:{addListener:()=>{throw Error(`Browser.webNavigation.onCommitted.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webNavigation.onCommitted.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webNavigation.onCommitted.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webNavigation.onCommitted.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onDOMContentLoaded:{addListener:()=>{throw Error(`Browser.webNavigation.onDOMContentLoaded.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webNavigation.onDOMContentLoaded.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webNavigation.onDOMContentLoaded.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webNavigation.onDOMContentLoaded.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onCompleted:{addListener:()=>{throw Error(`Browser.webNavigation.onCompleted.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webNavigation.onCompleted.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webNavigation.onCompleted.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webNavigation.onCompleted.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onErrorOccurred:{addListener:()=>{throw Error(`Browser.webNavigation.onErrorOccurred.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webNavigation.onErrorOccurred.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webNavigation.onErrorOccurred.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webNavigation.onErrorOccurred.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onCreatedNavigationTarget:{addListener:()=>{throw Error(`Browser.webNavigation.onCreatedNavigationTarget.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webNavigation.onCreatedNavigationTarget.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webNavigation.onCreatedNavigationTarget.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webNavigation.onCreatedNavigationTarget.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onReferenceFragmentUpdated:{addListener:()=>{throw Error(`Browser.webNavigation.onReferenceFragmentUpdated.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webNavigation.onReferenceFragmentUpdated.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webNavigation.onReferenceFragmentUpdated.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webNavigation.onReferenceFragmentUpdated.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onTabReplaced:{addListener:()=>{throw Error(`Browser.webNavigation.onTabReplaced.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webNavigation.onTabReplaced.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webNavigation.onTabReplaced.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webNavigation.onTabReplaced.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onHistoryStateUpdated:{addListener:()=>{throw Error(`Browser.webNavigation.onHistoryStateUpdated.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webNavigation.onHistoryStateUpdated.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webNavigation.onHistoryStateUpdated.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webNavigation.onHistoryStateUpdated.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}}},webRequest:{handlerBehaviorChanged:()=>{throw Error(`Browser.webRequest.handlerBehaviorChanged not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},filterResponseData:()=>{throw Error(`Browser.webRequest.filterResponseData not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getSecurityInfo:()=>{throw Error(`Browser.webRequest.getSecurityInfo not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onBeforeRequest:{addListener:()=>{throw Error(`Browser.webRequest.onBeforeRequest.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webRequest.onBeforeRequest.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webRequest.onBeforeRequest.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webRequest.onBeforeRequest.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onBeforeSendHeaders:{addListener:()=>{throw Error(`Browser.webRequest.onBeforeSendHeaders.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webRequest.onBeforeSendHeaders.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webRequest.onBeforeSendHeaders.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webRequest.onBeforeSendHeaders.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onSendHeaders:{addListener:()=>{throw Error(`Browser.webRequest.onSendHeaders.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webRequest.onSendHeaders.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webRequest.onSendHeaders.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webRequest.onSendHeaders.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onHeadersReceived:{addListener:()=>{throw Error(`Browser.webRequest.onHeadersReceived.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webRequest.onHeadersReceived.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webRequest.onHeadersReceived.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webRequest.onHeadersReceived.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onAuthRequired:{addListener:()=>{throw Error(`Browser.webRequest.onAuthRequired.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webRequest.onAuthRequired.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webRequest.onAuthRequired.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webRequest.onAuthRequired.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onResponseStarted:{addListener:()=>{throw Error(`Browser.webRequest.onResponseStarted.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webRequest.onResponseStarted.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webRequest.onResponseStarted.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webRequest.onResponseStarted.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onBeforeRedirect:{addListener:()=>{throw Error(`Browser.webRequest.onBeforeRedirect.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webRequest.onBeforeRedirect.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webRequest.onBeforeRedirect.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webRequest.onBeforeRedirect.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onCompleted:{addListener:()=>{throw Error(`Browser.webRequest.onCompleted.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webRequest.onCompleted.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webRequest.onCompleted.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webRequest.onCompleted.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onErrorOccurred:{addListener:()=>{throw Error(`Browser.webRequest.onErrorOccurred.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.webRequest.onErrorOccurred.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.webRequest.onErrorOccurred.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.webRequest.onErrorOccurred.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES:20},windows:{get:()=>{throw Error(`Browser.windows.get not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getCurrent:()=>{throw Error(`Browser.windows.getCurrent not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getLastFocused:()=>{throw Error(`Browser.windows.getLastFocused not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},getAll:()=>{throw Error(`Browser.windows.getAll not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},create:()=>{throw Error(`Browser.windows.create not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},update:()=>{throw Error(`Browser.windows.update not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},remove:()=>{throw Error(`Browser.windows.remove not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},onCreated:{addListener:()=>{throw Error(`Browser.windows.onCreated.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.windows.onCreated.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.windows.onCreated.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.windows.onCreated.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onRemoved:{addListener:()=>{throw Error(`Browser.windows.onRemoved.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.windows.onRemoved.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.windows.onRemoved.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.windows.onRemoved.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},onFocusChanged:{addListener:()=>{throw Error(`Browser.windows.onFocusChanged.addListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},removeListener:()=>{throw Error(`Browser.windows.onFocusChanged.removeListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListener:()=>{throw Error(`Browser.windows.onFocusChanged.hasListener not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)},hasListeners:()=>{throw Error(`Browser.windows.onFocusChanged.hasListeners not implemented.

Mock the function yourself using your testing framework, or submit a PR with an in-memory implementation.`)}},WINDOW_ID_NONE:-1,WINDOW_ID_CURRENT:-2}},Ct={reset(){var r;for(const[n,i]of Object.entries(Fr))n!=="reset"&&((r=i.resetState)==null||r.call(i))},alarms:kt,notifications:Er,runtime:Oe,storage:Rt,tabs:ae,webNavigation:Bt,windows:N},Fr=gt(vt,Ct),Hr={exports:{}};(function(r,n){(function(i,m){m(r)})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:ie,function(i){if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)i.exports=globalThis.browser;else{const m="The message port closed before a response was received.",u=s=>{const h={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(h).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class y extends WeakMap{constructor(w,f=void 0){super(f),this.createItem=w}get(w){return this.has(w)||this.set(w,this.createItem(w)),super.get(w)}}const L=l=>l&&typeof l=="object"&&typeof l.then=="function",C=(l,w)=>(...f)=>{s.runtime.lastError?l.reject(new Error(s.runtime.lastError.message)):w.singleCallbackArg||f.length<=1&&w.singleCallbackArg!==!1?l.resolve(f[0]):l.resolve(f)},re=l=>l==1?"argument":"arguments",Ke=(l,w)=>function(k,...v){if(v.length<w.minArgs)throw new Error(`Expected at least ${w.minArgs} ${re(w.minArgs)} for ${l}(), got ${v.length}`);if(v.length>w.maxArgs)throw new Error(`Expected at most ${w.maxArgs} ${re(w.maxArgs)} for ${l}(), got ${v.length}`);return new Promise((A,S)=>{if(w.fallbackToNoCallback)try{k[l](...v,C({resolve:A,reject:S},w))}catch(g){console.warn(`${l} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,g),k[l](...v),w.fallbackToNoCallback=!1,w.noCallback=!0,A()}else w.noCallback?(k[l](...v),A()):k[l](...v,C({resolve:A,reject:S},w))})},Pe=(l,w,f)=>new Proxy(w,{apply(k,v,A){return f.call(v,l,...A)}});let X=Function.call.bind(Object.prototype.hasOwnProperty);const te=(l,w={},f={})=>{let k=Object.create(null),v={has(S,g){return g in l||g in k},get(S,g,x){if(g in k)return k[g];if(!(g in l))return;let B=l[g];if(typeof B=="function")if(typeof w[g]=="function")B=Pe(l,l[g],w[g]);else if(X(f,g)){let V=Ke(g,f[g]);B=Pe(l,l[g],V)}else B=B.bind(l);else if(typeof B=="object"&&B!==null&&(X(w,g)||X(f,g)))B=te(B,w[g],f[g]);else if(X(f,"*"))B=te(B,w[g],f["*"]);else return Object.defineProperty(k,g,{configurable:!0,enumerable:!0,get(){return l[g]},set(V){l[g]=V}}),B;return k[g]=B,B},set(S,g,x,B){return g in k?k[g]=x:l[g]=x,!0},defineProperty(S,g,x){return Reflect.defineProperty(k,g,x)},deleteProperty(S,g){return Reflect.deleteProperty(k,g)}},A=Object.create(l);return new Proxy(A,v)},ue=l=>({addListener(w,f,...k){w.addListener(l.get(f),...k)},hasListener(w,f){return w.hasListener(l.get(f))},removeListener(w,f){w.removeListener(l.get(f))}}),Je=new y(l=>typeof l!="function"?l:function(f){const k=te(f,{},{getContent:{minArgs:0,maxArgs:0}});l(k)}),Me=new y(l=>typeof l!="function"?l:function(f,k,v){let A=!1,S,g=new Promise(Z=>{S=function(I){A=!0,Z(I)}}),x;try{x=l(f,k,S)}catch(Z){x=Promise.reject(Z)}const B=x!==!0&&L(x);if(x!==!0&&!B&&!A)return!1;const V=Z=>{Z.then(I=>{v(I)},I=>{let we;I&&(I instanceof Error||typeof I.message=="string")?we=I.message:we="An unexpected error occurred",v({__mozWebExtensionPolyfillReject__:!0,message:we})}).catch(I=>{console.error("Failed to send onMessage rejected reply",I)})};return V(B?x:g),!0}),Be=({reject:l,resolve:w},f)=>{s.runtime.lastError?s.runtime.lastError.message===m?w():l(new Error(s.runtime.lastError.message)):f&&f.__mozWebExtensionPolyfillReject__?l(new Error(f.message)):w(f)},ve=(l,w,f,...k)=>{if(k.length<w.minArgs)throw new Error(`Expected at least ${w.minArgs} ${re(w.minArgs)} for ${l}(), got ${k.length}`);if(k.length>w.maxArgs)throw new Error(`Expected at most ${w.maxArgs} ${re(w.maxArgs)} for ${l}(), got ${k.length}`);return new Promise((v,A)=>{const S=Be.bind(null,{resolve:v,reject:A});k.push(S),f.sendMessage(...k)})},er={devtools:{network:{onRequestFinished:ue(Je)}},runtime:{onMessage:ue(Me),onMessageExternal:ue(Me),sendMessage:ve.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:ve.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},le={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return h.privacy={network:{"*":le},services:{"*":le},websites:{"*":le}},te(s,er,h)};i.exports=u(chrome)}})})(Hr);var At=Hr.exports;const ze=gr(At),St=()=>{var r;try{return typeof chrome<"u"&&!!((r=chrome.runtime)!=null&&r.id)||typeof ze<"u"&&!!ze.runtime}catch{return!1}},xt=(()=>{try{if(St())return ze}catch(r){console.error(r),console.error("webextension-polyfill not available, using fake browser API")}return Fr})();let j=!1,Le=null,T=null,$e="inspector",Ge=!1,Wr="Click on an element to select it. Press ESC to cancel.",F=null;function Tt(){const r=document.createElement("div");return r.id="houdin-element-selector-overlay",r.style.cssText=`
      position: absolute;
      background-color: rgba(74, 144, 226, 0.3);
      border: 2px solid #4A90E2;
      pointer-events: none;
      z-index: 999999;
      box-sizing: border-box;
    `,document.body.appendChild(r),r}function _t(r){if(!T)return;const n=r.getBoundingClientRect(),i=window.pageYOffset||document.documentElement.scrollTop,m=window.pageXOffset||document.documentElement.scrollLeft;T.style.top=`${n.top+i}px`,T.style.left=`${n.left+m}px`,T.style.width=`${n.width}px`,T.style.height=`${n.height}px`}function It(r){if(r.id)return`#${r.id}`;const n=[];for(;r&&r.nodeType===Node.ELEMENT_NODE;){let i=r.nodeName.toLowerCase();if(r.className){const u=r.className.trim().split(/\s+/).filter(Boolean);u.length>0&&(i+="."+u.join("."))}const m=r.parentElement;if(m){const u=Array.from(m.children).filter(s=>s.nodeName===r.nodeName);if(u.length>1){const s=u.indexOf(r)+1;i+=`:nth-child(${s})`}}n.unshift(i),r=m}return n.join(" > ")}function Xe(r){if(!j)return;const n=r.target;n===T||n.id==="houdin-element-selector-overlay"||(Le=n,_t(n))}function Ze(r){if(!j||!Le)return;r.preventDefault(),r.stopPropagation();const n=It(Le);Nt(n,Le),Ot()}function Nt(r,n){const i={selector:r,source:$e,silent:Ge,element:{tagName:n.tagName,className:n.className,id:n.id,textContent:n.textContent}};if(window.dispatchEvent(new CustomEvent("houdinElementSelected",{detail:{type:"elementSelected",data:i}})),!Ge){const m=new CustomEvent("modalDispatch",{detail:{type:"elementSelected",data:i}});window.dispatchEvent(m)}F&&(F({ok:!0,canceled:!1,data:i}),F=null)}function Qe(r){r.key==="Escape"&&Ye()}function Ye(){const r=j;j=!1,T&&(T.remove(),T=null),document.removeEventListener("mousemove",Xe),document.removeEventListener("click",Ze,!0),document.removeEventListener("keydown",Qe),document.body.style.cursor="",r&&(F&&(F({ok:!0,canceled:!0}),F=null),window.dispatchEvent(new CustomEvent("houdinElementSelectionCanceled",{detail:{source:$e}})))}function Ot(){j=!1,T&&(T.remove(),T=null),document.removeEventListener("mousemove",Xe),document.removeEventListener("click",Ze,!0),document.removeEventListener("keydown",Qe),document.body.style.cursor=""}function qr(r){var n;$e=(r==null?void 0:r.source)??"inspector",Ge=(r==null?void 0:r.silent)===!0,Wr=((n=r==null?void 0:r.instruction)==null?void 0:n.trim())||"Click on an element to select it. Press ESC to cancel.",Ut()}function Ut(){if(j){Ye();return}j=!0,T=Tt(),document.body.style.cursor="crosshair",document.addEventListener("mousemove",Xe),document.addEventListener("click",Ze,!0),document.addEventListener("keydown",Qe);const r=document.createElement("div");r.id="houdin-selector-instructions";const n=document.createElement("div");n.style.cssText="position:fixed;top:20px;left:50%;transform:translateX(-50%);background:#333;color:white;padding:10px 20px;border-radius:5px;z-index:1000000;font-family:sans-serif;font-size:14px;",n.textContent=Wr,r.appendChild(n),document.body.appendChild(r),setTimeout(()=>{const i=document.getElementById("houdin-selector-instructions");i&&i.remove()},3e3)}xt.runtime.onMessage.addListener((r,n,i)=>{if(r.type==="START_ELEMENT_SELECTION"){const m=r.data||{};return F&&(F({ok:!0,canceled:!0}),F=null),j&&Ye(),F=i,qr(m),!0}}),window.addEventListener("houdinStartElementSelection",r=>{qr(r.detail)})})();
