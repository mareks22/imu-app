(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function $g(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ep={exports:{}},qa={},tp={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),Kg=Symbol.for("react.portal"),Zg=Symbol.for("react.fragment"),Qg=Symbol.for("react.strict_mode"),Jg=Symbol.for("react.profiler"),e_=Symbol.for("react.provider"),t_=Symbol.for("react.context"),n_=Symbol.for("react.forward_ref"),i_=Symbol.for("react.suspense"),r_=Symbol.for("react.memo"),s_=Symbol.for("react.lazy"),Lf=Symbol.iterator;function o_(t){return t===null||typeof t!="object"?null:(t=Lf&&t[Lf]||t["@@iterator"],typeof t=="function"?t:null)}var np={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ip=Object.assign,rp={};function hs(t,e,n){this.props=t,this.context=e,this.refs=rp,this.updater=n||np}hs.prototype.isReactComponent={};hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sp(){}sp.prototype=hs.prototype;function Mc(t,e,n){this.props=t,this.context=e,this.refs=rp,this.updater=n||np}var Ec=Mc.prototype=new sp;Ec.constructor=Mc;ip(Ec,hs.prototype);Ec.isPureReactComponent=!0;var Pf=Array.isArray,op=Object.prototype.hasOwnProperty,Tc={current:null},ap={key:!0,ref:!0,__self:!0,__source:!0};function lp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)op.call(e,i)&&!ap.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:po,type:t,key:s,ref:o,props:r,_owner:Tc.current}}function a_(t,e){return{$$typeof:po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wc(t){return typeof t=="object"&&t!==null&&t.$$typeof===po}function l_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bf=/\/+/g;function vl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?l_(""+t.key):e.toString(36)}function ua(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case po:case Kg:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+vl(o,0):i,Pf(r)?(n="",t!=null&&(n=t.replace(bf,"$&/")+"/"),ua(r,e,n,"",function(u){return u})):r!=null&&(wc(r)&&(r=a_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(bf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Pf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+vl(s,a);o+=ua(s,e,n,l,r)}else if(l=o_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+vl(s,a++),o+=ua(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function To(t,e,n){if(t==null)return t;var i=[],r=0;return ua(t,i,"","",function(s){return e.call(n,s,r++)}),i}function u_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Bt={current:null},ca={transition:null},c_={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:ca,ReactCurrentOwner:Tc};Oe.Children={map:To,forEach:function(t,e,n){To(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return To(t,function(){e++}),e},toArray:function(t){return To(t,function(e){return e})||[]},only:function(t){if(!wc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=hs;Oe.Fragment=Zg;Oe.Profiler=Jg;Oe.PureComponent=Mc;Oe.StrictMode=Qg;Oe.Suspense=i_;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c_;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ip({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Tc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)op.call(e,l)&&!ap.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:po,type:t.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(t){return t={$$typeof:t_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:e_,_context:t},t.Consumer=t};Oe.createElement=lp;Oe.createFactory=function(t){var e=lp.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:n_,render:t}};Oe.isValidElement=wc;Oe.lazy=function(t){return{$$typeof:s_,_payload:{_status:-1,_result:t},_init:u_}};Oe.memo=function(t,e){return{$$typeof:r_,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=ca.transition;ca.transition={};try{t()}finally{ca.transition=e}};Oe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Oe.useCallback=function(t,e){return Bt.current.useCallback(t,e)};Oe.useContext=function(t){return Bt.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return Bt.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return Bt.current.useEffect(t,e)};Oe.useId=function(){return Bt.current.useId()};Oe.useImperativeHandle=function(t,e,n){return Bt.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return Bt.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return Bt.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return Bt.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return Bt.current.useReducer(t,e,n)};Oe.useRef=function(t){return Bt.current.useRef(t)};Oe.useState=function(t){return Bt.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return Bt.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return Bt.current.useTransition()};Oe.version="18.2.0";tp.exports=Oe;var Ys=tp.exports;const f_=$g(Ys);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_=Ys,h_=Symbol.for("react.element"),p_=Symbol.for("react.fragment"),m_=Object.prototype.hasOwnProperty,g_=d_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,__={key:!0,ref:!0,__self:!0,__source:!0};function up(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)m_.call(e,i)&&!__.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:h_,type:t,key:s,ref:o,props:r,_owner:g_.current}}qa.Fragment=p_;qa.jsx=up;qa.jsxs=up;ep.exports=qa;var gi=ep.exports,Su={},cp={exports:{}},on={},fp={exports:{}},dp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,B){var z=b.length;b.push(B);e:for(;0<z;){var re=z-1>>>1,U=b[re];if(0<r(U,B))b[re]=B,b[z]=U,z=re;else break e}}function n(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var B=b[0],z=b.pop();if(z!==B){b[0]=z;e:for(var re=0,U=b.length,K=U>>>1;re<K;){var $=2*(re+1)-1,ce=b[$],ue=$+1,me=b[ue];if(0>r(ce,z))ue<U&&0>r(me,ce)?(b[re]=me,b[ue]=z,re=ue):(b[re]=ce,b[$]=z,re=$);else if(ue<U&&0>r(me,z))b[re]=me,b[ue]=z,re=ue;else break e}}return B}function r(b,B){var z=b.sortIndex-B.sortIndex;return z!==0?z:b.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,h=null,d=3,m=!1,x=!1,v=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var B=n(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=b)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function S(b){if(v=!1,g(b),!x)if(n(l)!==null)x=!0,Z(T);else{var B=n(u);B!==null&&j(S,B.startTime-b)}}function T(b,B){x=!1,v&&(v=!1,c(P),P=-1),m=!0;var z=d;try{for(g(B),h=n(l);h!==null&&(!(h.expirationTime>B)||b&&!q());){var re=h.callback;if(typeof re=="function"){h.callback=null,d=h.priorityLevel;var U=re(h.expirationTime<=B);B=t.unstable_now(),typeof U=="function"?h.callback=U:h===n(l)&&i(l),g(B)}else i(l);h=n(l)}if(h!==null)var K=!0;else{var $=n(u);$!==null&&j(S,$.startTime-B),K=!1}return K}finally{h=null,d=z,m=!1}}var R=!1,C=null,P=-1,y=5,w=-1;function q(){return!(t.unstable_now()-w<y)}function J(){if(C!==null){var b=t.unstable_now();w=b;var B=!0;try{B=C(!0,b)}finally{B?F():(R=!1,C=null)}}else R=!1}var F;if(typeof _=="function")F=function(){_(J)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,G=H.port2;H.port1.onmessage=J,F=function(){G.postMessage(null)}}else F=function(){p(J,0)};function Z(b){C=b,R||(R=!0,F())}function j(b,B){P=p(function(){b(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,Z(T))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var z=d;d=B;try{return b()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,B){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var z=d;d=b;try{return B()}finally{d=z}},t.unstable_scheduleCallback=function(b,B,z){var re=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?re+z:re):z=re,b){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=z+U,b={id:f++,callback:B,priorityLevel:b,startTime:z,expirationTime:U,sortIndex:-1},z>re?(b.sortIndex=z,e(u,b),n(l)===null&&b===n(u)&&(v?(c(P),P=-1):v=!0,j(S,z-re))):(b.sortIndex=U,e(l,b),x||m||(x=!0,Z(T))),b},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(b){var B=d;return function(){var z=d;d=B;try{return b.apply(this,arguments)}finally{d=z}}}})(dp);fp.exports=dp;var v_=fp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp=Ys,sn=v_;function Q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pp=new Set,qs={};function pr(t,e){ns(t,e),ns(t+"Capture",e)}function ns(t,e){for(qs[t]=e,t=0;t<e.length;t++)pp.add(e[t])}var ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=Object.prototype.hasOwnProperty,x_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uf={},Df={};function S_(t){return yu.call(Df,t)?!0:yu.call(Uf,t)?!1:x_.test(t)?Df[t]=!0:(Uf[t]=!0,!1)}function y_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M_(t,e,n,i){if(e===null||typeof e>"u"||y_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ht(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){At[t]=new Ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];At[e]=new Ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){At[t]=new Ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){At[t]=new Ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){At[t]=new Ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){At[t]=new Ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){At[t]=new Ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){At[t]=new Ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){At[t]=new Ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ac=/[\-:]([a-z])/g;function Rc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ac,Rc);At[e]=new Ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ac,Rc);At[e]=new Ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ac,Rc);At[e]=new Ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){At[t]=new Ht(t,1,!1,t.toLowerCase(),null,!1,!1)});At.xlinkHref=new Ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){At[t]=new Ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cc(t,e,n,i){var r=At.hasOwnProperty(e)?At[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(M_(e,n,r,i)&&(n=null),i||r===null?S_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var li=hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wo=Symbol.for("react.element"),Nr=Symbol.for("react.portal"),Fr=Symbol.for("react.fragment"),Lc=Symbol.for("react.strict_mode"),Mu=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),gp=Symbol.for("react.context"),Pc=Symbol.for("react.forward_ref"),Eu=Symbol.for("react.suspense"),Tu=Symbol.for("react.suspense_list"),bc=Symbol.for("react.memo"),pi=Symbol.for("react.lazy"),_p=Symbol.for("react.offscreen"),If=Symbol.iterator;function Ss(t){return t===null||typeof t!="object"?null:(t=If&&t[If]||t["@@iterator"],typeof t=="function"?t:null)}var tt=Object.assign,xl;function Us(t){if(xl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xl=e&&e[1]||""}return`
`+xl+t}var Sl=!1;function yl(t,e){if(!t||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Us(t):""}function E_(t){switch(t.tag){case 5:return Us(t.type);case 16:return Us("Lazy");case 13:return Us("Suspense");case 19:return Us("SuspenseList");case 0:case 2:case 15:return t=yl(t.type,!1),t;case 11:return t=yl(t.type.render,!1),t;case 1:return t=yl(t.type,!0),t;default:return""}}function wu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fr:return"Fragment";case Nr:return"Portal";case Mu:return"Profiler";case Lc:return"StrictMode";case Eu:return"Suspense";case Tu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gp:return(t.displayName||"Context")+".Consumer";case mp:return(t._context.displayName||"Context")+".Provider";case Pc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bc:return e=t.displayName||null,e!==null?e:wu(t.type)||"Memo";case pi:e=t._payload,t=t._init;try{return wu(t(e))}catch{}}return null}function T_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wu(e);case 8:return e===Lc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Di(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function w_(t){var e=vp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ao(t){t._valueTracker||(t._valueTracker=w_(t))}function xp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=vp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ma(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Au(t,e){var n=e.checked;return tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Di(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sp(t,e){e=e.checked,e!=null&&Cc(t,"checked",e,!1)}function Ru(t,e){Sp(t,e);var n=Di(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cu(t,e.type,Di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ff(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cu(t,e,n){(e!=="number"||Ma(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ds=Array.isArray;function qr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Di(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Lu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Q(91));return tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Of(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Q(92));if(Ds(n)){if(1<n.length)throw Error(Q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Di(n)}}function yp(t,e){var n=Di(e.value),i=Di(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function zf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Mp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ro,Ep=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ro=Ro||document.createElement("div"),Ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $s(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A_=["Webkit","ms","Moz","O"];Object.keys(Os).forEach(function(t){A_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Os[e]=Os[t]})});function Tp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Os.hasOwnProperty(t)&&Os[t]?(""+e).trim():e+"px"}function wp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Tp(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var R_=tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bu(t,e){if(e){if(R_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Q(62))}}function Uu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Du=null;function Uc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Iu=null,$r=null,Kr=null;function kf(t){if(t=_o(t)){if(typeof Iu!="function")throw Error(Q(280));var e=t.stateNode;e&&(e=Ja(e),Iu(t.stateNode,t.type,e))}}function Ap(t){$r?Kr?Kr.push(t):Kr=[t]:$r=t}function Rp(){if($r){var t=$r,e=Kr;if(Kr=$r=null,kf(t),e)for(t=0;t<e.length;t++)kf(e[t])}}function Cp(t,e){return t(e)}function Lp(){}var Ml=!1;function Pp(t,e,n){if(Ml)return t(e,n);Ml=!0;try{return Cp(t,e,n)}finally{Ml=!1,($r!==null||Kr!==null)&&(Lp(),Rp())}}function Ks(t,e){var n=t.stateNode;if(n===null)return null;var i=Ja(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Q(231,e,typeof n));return n}var Nu=!1;if(ri)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{Nu=!1}function C_(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var zs=!1,Ea=null,Ta=!1,Fu=null,L_={onError:function(t){zs=!0,Ea=t}};function P_(t,e,n,i,r,s,o,a,l){zs=!1,Ea=null,C_.apply(L_,arguments)}function b_(t,e,n,i,r,s,o,a,l){if(P_.apply(this,arguments),zs){if(zs){var u=Ea;zs=!1,Ea=null}else throw Error(Q(198));Ta||(Ta=!0,Fu=u)}}function mr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bf(t){if(mr(t)!==t)throw Error(Q(188))}function U_(t){var e=t.alternate;if(!e){if(e=mr(t),e===null)throw Error(Q(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bf(r),t;if(s===i)return Bf(r),e;s=s.sibling}throw Error(Q(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?t:e}function Up(t){return t=U_(t),t!==null?Dp(t):null}function Dp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dp(t);if(e!==null)return e;t=t.sibling}return null}var Ip=sn.unstable_scheduleCallback,Hf=sn.unstable_cancelCallback,D_=sn.unstable_shouldYield,I_=sn.unstable_requestPaint,ot=sn.unstable_now,N_=sn.unstable_getCurrentPriorityLevel,Dc=sn.unstable_ImmediatePriority,Np=sn.unstable_UserBlockingPriority,wa=sn.unstable_NormalPriority,F_=sn.unstable_LowPriority,Fp=sn.unstable_IdlePriority,$a=null,On=null;function O_(t){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot($a,t,void 0,(t.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:B_,z_=Math.log,k_=Math.LN2;function B_(t){return t>>>=0,t===0?32:31-(z_(t)/k_|0)|0}var Co=64,Lo=4194304;function Is(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Aa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Is(a):(s&=o,s!==0&&(i=Is(s)))}else o=n&~r,o!==0?i=Is(o):s!==0&&(i=Is(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ln(e),r=1<<n,i|=t[n],e&=~r;return i}function H_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ln(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=H_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ou(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Op(){var t=Co;return Co<<=1,!(Co&4194240)&&(Co=64),t}function El(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ln(e),t[e]=n}function V_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ln(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ic(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ln(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ge=0;function zp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kp,Nc,Bp,Hp,Gp,zu=!1,Po=[],Ei=null,Ti=null,wi=null,Zs=new Map,Qs=new Map,_i=[],W_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gf(t,e){switch(t){case"focusin":case"focusout":Ei=null;break;case"dragenter":case"dragleave":Ti=null;break;case"mouseover":case"mouseout":wi=null;break;case"pointerover":case"pointerout":Zs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(e.pointerId)}}function Ms(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=_o(e),e!==null&&Nc(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function X_(t,e,n,i,r){switch(e){case"focusin":return Ei=Ms(Ei,t,e,n,i,r),!0;case"dragenter":return Ti=Ms(Ti,t,e,n,i,r),!0;case"mouseover":return wi=Ms(wi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Zs.set(s,Ms(Zs.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Qs.set(s,Ms(Qs.get(s)||null,t,e,n,i,r)),!0}return!1}function Vp(t){var e=Zi(t.target);if(e!==null){var n=mr(e);if(n!==null){if(e=n.tag,e===13){if(e=bp(n),e!==null){t.blockedOn=e,Gp(t.priority,function(){Bp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ku(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Du=i,n.target.dispatchEvent(i),Du=null}else return e=_o(n),e!==null&&Nc(e),t.blockedOn=n,!1;e.shift()}return!0}function Vf(t,e,n){fa(t)&&n.delete(e)}function j_(){zu=!1,Ei!==null&&fa(Ei)&&(Ei=null),Ti!==null&&fa(Ti)&&(Ti=null),wi!==null&&fa(wi)&&(wi=null),Zs.forEach(Vf),Qs.forEach(Vf)}function Es(t,e){t.blockedOn===e&&(t.blockedOn=null,zu||(zu=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,j_)))}function Js(t){function e(r){return Es(r,t)}if(0<Po.length){Es(Po[0],t);for(var n=1;n<Po.length;n++){var i=Po[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ei!==null&&Es(Ei,t),Ti!==null&&Es(Ti,t),wi!==null&&Es(wi,t),Zs.forEach(e),Qs.forEach(e),n=0;n<_i.length;n++)i=_i[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<_i.length&&(n=_i[0],n.blockedOn===null);)Vp(n),n.blockedOn===null&&_i.shift()}var Zr=li.ReactCurrentBatchConfig,Ra=!0;function Y_(t,e,n,i){var r=Ge,s=Zr.transition;Zr.transition=null;try{Ge=1,Fc(t,e,n,i)}finally{Ge=r,Zr.transition=s}}function q_(t,e,n,i){var r=Ge,s=Zr.transition;Zr.transition=null;try{Ge=4,Fc(t,e,n,i)}finally{Ge=r,Zr.transition=s}}function Fc(t,e,n,i){if(Ra){var r=ku(t,e,n,i);if(r===null)Dl(t,e,i,Ca,n),Gf(t,i);else if(X_(r,t,e,n,i))i.stopPropagation();else if(Gf(t,i),e&4&&-1<W_.indexOf(t)){for(;r!==null;){var s=_o(r);if(s!==null&&kp(s),s=ku(t,e,n,i),s===null&&Dl(t,e,i,Ca,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Dl(t,e,i,null,n)}}var Ca=null;function ku(t,e,n,i){if(Ca=null,t=Uc(i),t=Zi(t),t!==null)if(e=mr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ca=t,null}function Wp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N_()){case Dc:return 1;case Np:return 4;case wa:case F_:return 16;case Fp:return 536870912;default:return 16}default:return 16}}var xi=null,Oc=null,da=null;function Xp(){if(da)return da;var t,e=Oc,n=e.length,i,r="value"in xi?xi.value:xi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return da=r.slice(t,1<i?1-i:void 0)}function ha(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bo(){return!0}function Wf(){return!1}function an(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bo:Wf,this.isPropagationStopped=Wf,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),e}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zc=an(ps),go=tt({},ps,{view:0,detail:0}),$_=an(go),Tl,wl,Ts,Ka=tt({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ts&&(Ts&&t.type==="mousemove"?(Tl=t.screenX-Ts.screenX,wl=t.screenY-Ts.screenY):wl=Tl=0,Ts=t),Tl)},movementY:function(t){return"movementY"in t?t.movementY:wl}}),Xf=an(Ka),K_=tt({},Ka,{dataTransfer:0}),Z_=an(K_),Q_=tt({},go,{relatedTarget:0}),Al=an(Q_),J_=tt({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),ev=an(J_),tv=tt({},ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nv=an(tv),iv=tt({},ps,{data:0}),jf=an(iv),rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function av(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ov[t])?!!e[t]:!1}function kc(){return av}var lv=tt({},go,{key:function(t){if(t.key){var e=rv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(t){return t.type==="keypress"?ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uv=an(lv),cv=tt({},Ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yf=an(cv),fv=tt({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),dv=an(fv),hv=tt({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),pv=an(hv),mv=tt({},Ka,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gv=an(mv),_v=[9,13,27,32],Bc=ri&&"CompositionEvent"in window,ks=null;ri&&"documentMode"in document&&(ks=document.documentMode);var vv=ri&&"TextEvent"in window&&!ks,jp=ri&&(!Bc||ks&&8<ks&&11>=ks),qf=String.fromCharCode(32),$f=!1;function Yp(t,e){switch(t){case"keyup":return _v.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Or=!1;function xv(t,e){switch(t){case"compositionend":return qp(e);case"keypress":return e.which!==32?null:($f=!0,qf);case"textInput":return t=e.data,t===qf&&$f?null:t;default:return null}}function Sv(t,e){if(Or)return t==="compositionend"||!Bc&&Yp(t,e)?(t=Xp(),da=Oc=xi=null,Or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jp&&e.locale!=="ko"?null:e.data;default:return null}}var yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yv[t.type]:e==="textarea"}function $p(t,e,n,i){Ap(i),e=La(e,"onChange"),0<e.length&&(n=new zc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Bs=null,eo=null;function Mv(t){om(t,0)}function Za(t){var e=Br(t);if(xp(e))return t}function Ev(t,e){if(t==="change")return e}var Kp=!1;if(ri){var Rl;if(ri){var Cl="oninput"in document;if(!Cl){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),Cl=typeof Zf.oninput=="function"}Rl=Cl}else Rl=!1;Kp=Rl&&(!document.documentMode||9<document.documentMode)}function Qf(){Bs&&(Bs.detachEvent("onpropertychange",Zp),eo=Bs=null)}function Zp(t){if(t.propertyName==="value"&&Za(eo)){var e=[];$p(e,eo,t,Uc(t)),Pp(Mv,e)}}function Tv(t,e,n){t==="focusin"?(Qf(),Bs=e,eo=n,Bs.attachEvent("onpropertychange",Zp)):t==="focusout"&&Qf()}function wv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Za(eo)}function Av(t,e){if(t==="click")return Za(e)}function Rv(t,e){if(t==="input"||t==="change")return Za(e)}function Cv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bn=typeof Object.is=="function"?Object.is:Cv;function to(t,e){if(bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!yu.call(e,r)||!bn(t[r],e[r]))return!1}return!0}function Jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ed(t,e){var n=Jf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jf(n)}}function Qp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jp(){for(var t=window,e=Ma();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ma(t.document)}return e}function Hc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Lv(t){var e=Jp(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qp(n.ownerDocument.documentElement,n)){if(i!==null&&Hc(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ed(n,s);var o=ed(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Pv=ri&&"documentMode"in document&&11>=document.documentMode,zr=null,Bu=null,Hs=null,Hu=!1;function td(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hu||zr==null||zr!==Ma(i)||(i=zr,"selectionStart"in i&&Hc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hs&&to(Hs,i)||(Hs=i,i=La(Bu,"onSelect"),0<i.length&&(e=new zc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=zr)))}function Uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var kr={animationend:Uo("Animation","AnimationEnd"),animationiteration:Uo("Animation","AnimationIteration"),animationstart:Uo("Animation","AnimationStart"),transitionend:Uo("Transition","TransitionEnd")},Ll={},em={};ri&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function Qa(t){if(Ll[t])return Ll[t];if(!kr[t])return t;var e=kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in em)return Ll[t]=e[n];return t}var tm=Qa("animationend"),nm=Qa("animationiteration"),im=Qa("animationstart"),rm=Qa("transitionend"),sm=new Map,nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fi(t,e){sm.set(t,e),pr(e,[t])}for(var Pl=0;Pl<nd.length;Pl++){var bl=nd[Pl],bv=bl.toLowerCase(),Uv=bl[0].toUpperCase()+bl.slice(1);Fi(bv,"on"+Uv)}Fi(tm,"onAnimationEnd");Fi(nm,"onAnimationIteration");Fi(im,"onAnimationStart");Fi("dblclick","onDoubleClick");Fi("focusin","onFocus");Fi("focusout","onBlur");Fi(rm,"onTransitionEnd");ns("onMouseEnter",["mouseout","mouseover"]);ns("onMouseLeave",["mouseout","mouseover"]);ns("onPointerEnter",["pointerout","pointerover"]);ns("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ns));function id(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,b_(i,e,void 0,t),t.currentTarget=null}function om(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;id(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;id(r,a,u),s=l}}}if(Ta)throw t=Fu,Ta=!1,Fu=null,t}function $e(t,e){var n=e[ju];n===void 0&&(n=e[ju]=new Set);var i=t+"__bubble";n.has(i)||(am(e,t,2,!1),n.add(i))}function Ul(t,e,n){var i=0;e&&(i|=4),am(n,t,i,e)}var Do="_reactListening"+Math.random().toString(36).slice(2);function no(t){if(!t[Do]){t[Do]=!0,pp.forEach(function(n){n!=="selectionchange"&&(Dv.has(n)||Ul(n,!1,t),Ul(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Do]||(e[Do]=!0,Ul("selectionchange",!1,e))}}function am(t,e,n,i){switch(Wp(e)){case 1:var r=Y_;break;case 4:r=q_;break;default:r=Fc}n=r.bind(null,e,n,t),r=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Dl(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Zi(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Pp(function(){var u=s,f=Uc(n),h=[];e:{var d=sm.get(t);if(d!==void 0){var m=zc,x=t;switch(t){case"keypress":if(ha(n)===0)break e;case"keydown":case"keyup":m=uv;break;case"focusin":x="focus",m=Al;break;case"focusout":x="blur",m=Al;break;case"beforeblur":case"afterblur":m=Al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Z_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=dv;break;case tm:case nm:case im:m=ev;break;case rm:m=pv;break;case"scroll":m=$_;break;case"wheel":m=gv;break;case"copy":case"cut":case"paste":m=nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Yf}var v=(e&4)!==0,p=!v&&t==="scroll",c=v?d!==null?d+"Capture":null:d;v=[];for(var _=u,g;_!==null;){g=_;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,c!==null&&(S=Ks(_,c),S!=null&&v.push(io(_,S,g)))),p)break;_=_.return}0<v.length&&(d=new m(d,x,null,n,f),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Du&&(x=n.relatedTarget||n.fromElement)&&(Zi(x)||x[si]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?Zi(x):null,x!==null&&(p=mr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(v=Xf,S="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=Yf,S="onPointerLeave",c="onPointerEnter",_="pointer"),p=m==null?d:Br(m),g=x==null?d:Br(x),d=new v(S,_+"leave",m,n,f),d.target=p,d.relatedTarget=g,S=null,Zi(f)===u&&(v=new v(c,_+"enter",x,n,f),v.target=g,v.relatedTarget=p,S=v),p=S,m&&x)t:{for(v=m,c=x,_=0,g=v;g;g=_r(g))_++;for(g=0,S=c;S;S=_r(S))g++;for(;0<_-g;)v=_r(v),_--;for(;0<g-_;)c=_r(c),g--;for(;_--;){if(v===c||c!==null&&v===c.alternate)break t;v=_r(v),c=_r(c)}v=null}else v=null;m!==null&&rd(h,d,m,v,!1),x!==null&&p!==null&&rd(h,p,x,v,!0)}}e:{if(d=u?Br(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var T=Ev;else if(Kf(d))if(Kp)T=Rv;else{T=wv;var R=Tv}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=Av);if(T&&(T=T(t,u))){$p(h,T,n,f);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&Cu(d,"number",d.value)}switch(R=u?Br(u):window,t){case"focusin":(Kf(R)||R.contentEditable==="true")&&(zr=R,Bu=u,Hs=null);break;case"focusout":Hs=Bu=zr=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,td(h,n,f);break;case"selectionchange":if(Pv)break;case"keydown":case"keyup":td(h,n,f)}var C;if(Bc)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Or?Yp(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(jp&&n.locale!=="ko"&&(Or||P!=="onCompositionStart"?P==="onCompositionEnd"&&Or&&(C=Xp()):(xi=f,Oc="value"in xi?xi.value:xi.textContent,Or=!0)),R=La(u,P),0<R.length&&(P=new jf(P,t,null,n,f),h.push({event:P,listeners:R}),C?P.data=C:(C=qp(n),C!==null&&(P.data=C)))),(C=vv?xv(t,n):Sv(t,n))&&(u=La(u,"onBeforeInput"),0<u.length&&(f=new jf("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=C))}om(h,e)})}function io(t,e,n){return{instance:t,listener:e,currentTarget:n}}function La(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ks(t,n),s!=null&&i.unshift(io(t,s,r)),s=Ks(t,e),s!=null&&i.push(io(t,s,r))),t=t.return}return i}function _r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ks(n,s),l!=null&&o.unshift(io(n,l,a))):r||(l=Ks(n,s),l!=null&&o.push(io(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Iv=/\r\n?/g,Nv=/\u0000|\uFFFD/g;function sd(t){return(typeof t=="string"?t:""+t).replace(Iv,`
`).replace(Nv,"")}function Io(t,e,n){if(e=sd(e),sd(t)!==e&&n)throw Error(Q(425))}function Pa(){}var Gu=null,Vu=null;function Wu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xu=typeof setTimeout=="function"?setTimeout:void 0,Fv=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,Ov=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(t){return od.resolve(null).then(t).catch(zv)}:Xu;function zv(t){setTimeout(function(){throw t})}function Il(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Js(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Js(e)}function Ai(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ad(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ms=Math.random().toString(36).slice(2),Fn="__reactFiber$"+ms,ro="__reactProps$"+ms,si="__reactContainer$"+ms,ju="__reactEvents$"+ms,kv="__reactListeners$"+ms,Bv="__reactHandles$"+ms;function Zi(t){var e=t[Fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[si]||n[Fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ad(t);t!==null;){if(n=t[Fn])return n;t=ad(t)}return e}t=n,n=t.parentNode}return null}function _o(t){return t=t[Fn]||t[si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Br(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Q(33))}function Ja(t){return t[ro]||null}var Yu=[],Hr=-1;function Oi(t){return{current:t}}function Ze(t){0>Hr||(t.current=Yu[Hr],Yu[Hr]=null,Hr--)}function je(t,e){Hr++,Yu[Hr]=t.current,t.current=e}var Ii={},Dt=Oi(Ii),Xt=Oi(!1),ar=Ii;function is(t,e){var n=t.type.contextTypes;if(!n)return Ii;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function jt(t){return t=t.childContextTypes,t!=null}function ba(){Ze(Xt),Ze(Dt)}function ld(t,e,n){if(Dt.current!==Ii)throw Error(Q(168));je(Dt,e),je(Xt,n)}function lm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Q(108,T_(t)||"Unknown",r));return tt({},n,i)}function Ua(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ii,ar=Dt.current,je(Dt,t),je(Xt,Xt.current),!0}function ud(t,e,n){var i=t.stateNode;if(!i)throw Error(Q(169));n?(t=lm(t,e,ar),i.__reactInternalMemoizedMergedChildContext=t,Ze(Xt),Ze(Dt),je(Dt,t)):Ze(Xt),je(Xt,n)}var Kn=null,el=!1,Nl=!1;function um(t){Kn===null?Kn=[t]:Kn.push(t)}function Hv(t){el=!0,um(t)}function zi(){if(!Nl&&Kn!==null){Nl=!0;var t=0,e=Ge;try{var n=Kn;for(Ge=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Kn=null,el=!1}catch(r){throw Kn!==null&&(Kn=Kn.slice(t+1)),Ip(Dc,zi),r}finally{Ge=e,Nl=!1}}return null}var Gr=[],Vr=0,Da=null,Ia=0,un=[],cn=0,lr=null,Qn=1,Jn="";function ji(t,e){Gr[Vr++]=Ia,Gr[Vr++]=Da,Da=t,Ia=e}function cm(t,e,n){un[cn++]=Qn,un[cn++]=Jn,un[cn++]=lr,lr=t;var i=Qn;t=Jn;var r=32-Ln(i)-1;i&=~(1<<r),n+=1;var s=32-Ln(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Qn=1<<32-Ln(e)+r|n<<r|i,Jn=s+t}else Qn=1<<s|n<<r|i,Jn=t}function Gc(t){t.return!==null&&(ji(t,1),cm(t,1,0))}function Vc(t){for(;t===Da;)Da=Gr[--Vr],Gr[Vr]=null,Ia=Gr[--Vr],Gr[Vr]=null;for(;t===lr;)lr=un[--cn],un[cn]=null,Jn=un[--cn],un[cn]=null,Qn=un[--cn],un[cn]=null}var tn=null,en=null,Qe=!1,wn=null;function fm(t,e){var n=hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tn=t,en=Ai(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tn=t,en=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=lr!==null?{id:Qn,overflow:Jn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tn=t,en=null,!0):!1;default:return!1}}function qu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $u(t){if(Qe){var e=en;if(e){var n=e;if(!cd(t,e)){if(qu(t))throw Error(Q(418));e=Ai(n.nextSibling);var i=tn;e&&cd(t,e)?fm(i,n):(t.flags=t.flags&-4097|2,Qe=!1,tn=t)}}else{if(qu(t))throw Error(Q(418));t.flags=t.flags&-4097|2,Qe=!1,tn=t}}}function fd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tn=t}function No(t){if(t!==tn)return!1;if(!Qe)return fd(t),Qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wu(t.type,t.memoizedProps)),e&&(e=en)){if(qu(t))throw dm(),Error(Q(418));for(;e;)fm(t,e),e=Ai(e.nextSibling)}if(fd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){en=Ai(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}en=null}}else en=tn?Ai(t.stateNode.nextSibling):null;return!0}function dm(){for(var t=en;t;)t=Ai(t.nextSibling)}function rs(){en=tn=null,Qe=!1}function Wc(t){wn===null?wn=[t]:wn.push(t)}var Gv=li.ReactCurrentBatchConfig;function En(t,e){if(t&&t.defaultProps){e=tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Na=Oi(null),Fa=null,Wr=null,Xc=null;function jc(){Xc=Wr=Fa=null}function Yc(t){var e=Na.current;Ze(Na),t._currentValue=e}function Ku(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qr(t,e){Fa=t,Xc=Wr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Wt=!0),t.firstContext=null)}function mn(t){var e=t._currentValue;if(Xc!==t)if(t={context:t,memoizedValue:e,next:null},Wr===null){if(Fa===null)throw Error(Q(308));Wr=t,Fa.dependencies={lanes:0,firstContext:t}}else Wr=Wr.next=t;return e}var Qi=null;function qc(t){Qi===null?Qi=[t]:Qi.push(t)}function hm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,qc(e)):(n.next=r.next,r.next=n),e.interleaved=n,oi(t,i)}function oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mi=!1;function $c(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ni(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ri(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Be&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,oi(t,n)}return r=i.interleaved,r===null?(e.next=e,qc(i)):(e.next=r.next,r.next=e),i.interleaved=e,oi(t,n)}function pa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ic(t,n)}}function dd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Oa(t,e,n,i){var r=t.updateQueue;mi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,v=a;switch(d=e,m=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){h=x.call(m,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,d=typeof x=="function"?x.call(m,h,d):x,d==null)break e;h=tt({},h,d);break e;case 2:mi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=h):f=f.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);cr|=o,t.lanes=o,t.memoizedState=h}}function hd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Q(191,r));r.call(i)}}}var mm=new hp.Component().refs;function Zu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tl={isMounted:function(t){return(t=t._reactInternals)?mr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=kt(),r=Li(t),s=ni(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ri(t,s,r),e!==null&&(Pn(e,t,r,i),pa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=kt(),r=Li(t),s=ni(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ri(t,s,r),e!==null&&(Pn(e,t,r,i),pa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kt(),i=Li(t),r=ni(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ri(t,r,i),e!==null&&(Pn(e,t,i,n),pa(e,t,i))}};function pd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!to(n,i)||!to(r,s):!0}function gm(t,e,n){var i=!1,r=Ii,s=e.contextType;return typeof s=="object"&&s!==null?s=mn(s):(r=jt(e)?ar:Dt.current,i=e.contextTypes,s=(i=i!=null)?is(t,r):Ii),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function md(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&tl.enqueueReplaceState(e,e.state,null)}function Qu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=mm,$c(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=mn(s):(s=jt(e)?ar:Dt.current,r.context=is(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tl.enqueueReplaceState(r,r.state,null),Oa(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var i=n.stateNode}if(!i)throw Error(Q(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===mm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,t))}return t}function Fo(t,e){throw t=Object.prototype.toString.call(e),Error(Q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gd(t){var e=t._init;return e(t._payload)}function _m(t){function e(c,_){if(t){var g=c.deletions;g===null?(c.deletions=[_],c.flags|=16):g.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c,_){for(c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function r(c,_){return c=Pi(c,_),c.index=0,c.sibling=null,c}function s(c,_,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<_?(c.flags|=2,_):g):(c.flags|=2,_)):(c.flags|=1048576,_)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,_,g,S){return _===null||_.tag!==6?(_=Gl(g,c.mode,S),_.return=c,_):(_=r(_,g),_.return=c,_)}function l(c,_,g,S){var T=g.type;return T===Fr?f(c,_,g.props.children,S,g.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===pi&&gd(T)===_.type)?(S=r(_,g.props),S.ref=ws(c,_,g),S.return=c,S):(S=Sa(g.type,g.key,g.props,null,c.mode,S),S.ref=ws(c,_,g),S.return=c,S)}function u(c,_,g,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Vl(g,c.mode,S),_.return=c,_):(_=r(_,g.children||[]),_.return=c,_)}function f(c,_,g,S,T){return _===null||_.tag!==7?(_=tr(g,c.mode,S,T),_.return=c,_):(_=r(_,g),_.return=c,_)}function h(c,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Gl(""+_,c.mode,g),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case wo:return g=Sa(_.type,_.key,_.props,null,c.mode,g),g.ref=ws(c,null,_),g.return=c,g;case Nr:return _=Vl(_,c.mode,g),_.return=c,_;case pi:var S=_._init;return h(c,S(_._payload),g)}if(Ds(_)||Ss(_))return _=tr(_,c.mode,g,null),_.return=c,_;Fo(c,_)}return null}function d(c,_,g,S){var T=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(c,_,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wo:return g.key===T?l(c,_,g,S):null;case Nr:return g.key===T?u(c,_,g,S):null;case pi:return T=g._init,d(c,_,T(g._payload),S)}if(Ds(g)||Ss(g))return T!==null?null:f(c,_,g,S,null);Fo(c,g)}return null}function m(c,_,g,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(g)||null,a(_,c,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case wo:return c=c.get(S.key===null?g:S.key)||null,l(_,c,S,T);case Nr:return c=c.get(S.key===null?g:S.key)||null,u(_,c,S,T);case pi:var R=S._init;return m(c,_,g,R(S._payload),T)}if(Ds(S)||Ss(S))return c=c.get(g)||null,f(_,c,S,T,null);Fo(_,S)}return null}function x(c,_,g,S){for(var T=null,R=null,C=_,P=_=0,y=null;C!==null&&P<g.length;P++){C.index>P?(y=C,C=null):y=C.sibling;var w=d(c,C,g[P],S);if(w===null){C===null&&(C=y);break}t&&C&&w.alternate===null&&e(c,C),_=s(w,_,P),R===null?T=w:R.sibling=w,R=w,C=y}if(P===g.length)return n(c,C),Qe&&ji(c,P),T;if(C===null){for(;P<g.length;P++)C=h(c,g[P],S),C!==null&&(_=s(C,_,P),R===null?T=C:R.sibling=C,R=C);return Qe&&ji(c,P),T}for(C=i(c,C);P<g.length;P++)y=m(C,c,P,g[P],S),y!==null&&(t&&y.alternate!==null&&C.delete(y.key===null?P:y.key),_=s(y,_,P),R===null?T=y:R.sibling=y,R=y);return t&&C.forEach(function(q){return e(c,q)}),Qe&&ji(c,P),T}function v(c,_,g,S){var T=Ss(g);if(typeof T!="function")throw Error(Q(150));if(g=T.call(g),g==null)throw Error(Q(151));for(var R=T=null,C=_,P=_=0,y=null,w=g.next();C!==null&&!w.done;P++,w=g.next()){C.index>P?(y=C,C=null):y=C.sibling;var q=d(c,C,w.value,S);if(q===null){C===null&&(C=y);break}t&&C&&q.alternate===null&&e(c,C),_=s(q,_,P),R===null?T=q:R.sibling=q,R=q,C=y}if(w.done)return n(c,C),Qe&&ji(c,P),T;if(C===null){for(;!w.done;P++,w=g.next())w=h(c,w.value,S),w!==null&&(_=s(w,_,P),R===null?T=w:R.sibling=w,R=w);return Qe&&ji(c,P),T}for(C=i(c,C);!w.done;P++,w=g.next())w=m(C,c,P,w.value,S),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?P:w.key),_=s(w,_,P),R===null?T=w:R.sibling=w,R=w);return t&&C.forEach(function(J){return e(c,J)}),Qe&&ji(c,P),T}function p(c,_,g,S){if(typeof g=="object"&&g!==null&&g.type===Fr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case wo:e:{for(var T=g.key,R=_;R!==null;){if(R.key===T){if(T=g.type,T===Fr){if(R.tag===7){n(c,R.sibling),_=r(R,g.props.children),_.return=c,c=_;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===pi&&gd(T)===R.type){n(c,R.sibling),_=r(R,g.props),_.ref=ws(c,R,g),_.return=c,c=_;break e}n(c,R);break}else e(c,R);R=R.sibling}g.type===Fr?(_=tr(g.props.children,c.mode,S,g.key),_.return=c,c=_):(S=Sa(g.type,g.key,g.props,null,c.mode,S),S.ref=ws(c,_,g),S.return=c,c=S)}return o(c);case Nr:e:{for(R=g.key;_!==null;){if(_.key===R)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(c,_.sibling),_=r(_,g.children||[]),_.return=c,c=_;break e}else{n(c,_);break}else e(c,_);_=_.sibling}_=Vl(g,c.mode,S),_.return=c,c=_}return o(c);case pi:return R=g._init,p(c,_,R(g._payload),S)}if(Ds(g))return x(c,_,g,S);if(Ss(g))return v(c,_,g,S);Fo(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(c,_.sibling),_=r(_,g),_.return=c,c=_):(n(c,_),_=Gl(g,c.mode,S),_.return=c,c=_),o(c)):n(c,_)}return p}var ss=_m(!0),vm=_m(!1),vo={},zn=Oi(vo),so=Oi(vo),oo=Oi(vo);function Ji(t){if(t===vo)throw Error(Q(174));return t}function Kc(t,e){switch(je(oo,e),je(so,t),je(zn,vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pu(e,t)}Ze(zn),je(zn,e)}function os(){Ze(zn),Ze(so),Ze(oo)}function xm(t){Ji(oo.current);var e=Ji(zn.current),n=Pu(e,t.type);e!==n&&(je(so,t),je(zn,n))}function Zc(t){so.current===t&&(Ze(zn),Ze(so))}var Je=Oi(0);function za(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fl=[];function Qc(){for(var t=0;t<Fl.length;t++)Fl[t]._workInProgressVersionPrimary=null;Fl.length=0}var ma=li.ReactCurrentDispatcher,Ol=li.ReactCurrentBatchConfig,ur=0,et=null,ft=null,vt=null,ka=!1,Gs=!1,ao=0,Vv=0;function Ct(){throw Error(Q(321))}function Jc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bn(t[n],e[n]))return!1;return!0}function ef(t,e,n,i,r,s){if(ur=s,et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ma.current=t===null||t.memoizedState===null?Yv:qv,t=n(i,r),Gs){s=0;do{if(Gs=!1,ao=0,25<=s)throw Error(Q(301));s+=1,vt=ft=null,e.updateQueue=null,ma.current=$v,t=n(i,r)}while(Gs)}if(ma.current=Ba,e=ft!==null&&ft.next!==null,ur=0,vt=ft=et=null,ka=!1,e)throw Error(Q(300));return t}function tf(){var t=ao!==0;return ao=0,t}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?et.memoizedState=vt=t:vt=vt.next=t,vt}function gn(){if(ft===null){var t=et.alternate;t=t!==null?t.memoizedState:null}else t=ft.next;var e=vt===null?et.memoizedState:vt.next;if(e!==null)vt=e,ft=t;else{if(t===null)throw Error(Q(310));ft=t,t={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},vt===null?et.memoizedState=vt=t:vt=vt.next=t}return vt}function lo(t,e){return typeof e=="function"?e(t):e}function zl(t){var e=gn(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((ur&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,et.lanes|=f,cr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,bn(i,e.memoizedState)||(Wt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,et.lanes|=s,cr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kl(t){var e=gn(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);bn(s,e.memoizedState)||(Wt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Sm(){}function ym(t,e){var n=et,i=gn(),r=e(),s=!bn(i.memoizedState,r);if(s&&(i.memoizedState=r,Wt=!0),i=i.queue,nf(Tm.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||vt!==null&&vt.memoizedState.tag&1){if(n.flags|=2048,uo(9,Em.bind(null,n,i,r,e),void 0,null),xt===null)throw Error(Q(349));ur&30||Mm(n,e,r)}return r}function Mm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Em(t,e,n,i){e.value=n,e.getSnapshot=i,wm(e)&&Am(t)}function Tm(t,e,n){return n(function(){wm(e)&&Am(t)})}function wm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bn(t,n)}catch{return!0}}function Am(t){var e=oi(t,1);e!==null&&Pn(e,t,1,-1)}function _d(t){var e=In();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:t},e.queue=t,t=t.dispatch=jv.bind(null,et,t),[e.memoizedState,t]}function uo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Rm(){return gn().memoizedState}function ga(t,e,n,i){var r=In();et.flags|=t,r.memoizedState=uo(1|e,n,void 0,i===void 0?null:i)}function nl(t,e,n,i){var r=gn();i=i===void 0?null:i;var s=void 0;if(ft!==null){var o=ft.memoizedState;if(s=o.destroy,i!==null&&Jc(i,o.deps)){r.memoizedState=uo(e,n,s,i);return}}et.flags|=t,r.memoizedState=uo(1|e,n,s,i)}function vd(t,e){return ga(8390656,8,t,e)}function nf(t,e){return nl(2048,8,t,e)}function Cm(t,e){return nl(4,2,t,e)}function Lm(t,e){return nl(4,4,t,e)}function Pm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bm(t,e,n){return n=n!=null?n.concat([t]):null,nl(4,4,Pm.bind(null,e,t),n)}function rf(){}function Um(t,e){var n=gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jc(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Dm(t,e){var n=gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jc(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Im(t,e,n){return ur&21?(bn(n,e)||(n=Op(),et.lanes|=n,cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Wt=!0),t.memoizedState=n)}function Wv(t,e){var n=Ge;Ge=n!==0&&4>n?n:4,t(!0);var i=Ol.transition;Ol.transition={};try{t(!1),e()}finally{Ge=n,Ol.transition=i}}function Nm(){return gn().memoizedState}function Xv(t,e,n){var i=Li(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Fm(t))Om(e,n);else if(n=hm(t,e,n,i),n!==null){var r=kt();Pn(n,t,i,r),zm(n,e,i)}}function jv(t,e,n){var i=Li(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fm(t))Om(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,bn(a,o)){var l=e.interleaved;l===null?(r.next=r,qc(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=hm(t,e,r,i),n!==null&&(r=kt(),Pn(n,t,i,r),zm(n,e,i))}}function Fm(t){var e=t.alternate;return t===et||e!==null&&e===et}function Om(t,e){Gs=ka=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zm(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ic(t,n)}}var Ba={readContext:mn,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useInsertionEffect:Ct,useLayoutEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useMutableSource:Ct,useSyncExternalStore:Ct,useId:Ct,unstable_isNewReconciler:!1},Yv={readContext:mn,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:mn,useEffect:vd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ga(4194308,4,Pm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ga(4194308,4,t,e)},useInsertionEffect:function(t,e){return ga(4,2,t,e)},useMemo:function(t,e){var n=In();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=In();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Xv.bind(null,et,t),[i.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:_d,useDebugValue:rf,useDeferredValue:function(t){return In().memoizedState=t},useTransition:function(){var t=_d(!1),e=t[0];return t=Wv.bind(null,t[1]),In().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=et,r=In();if(Qe){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=e(),xt===null)throw Error(Q(349));ur&30||Mm(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,vd(Tm.bind(null,i,s,t),[t]),i.flags|=2048,uo(9,Em.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=In(),e=xt.identifierPrefix;if(Qe){var n=Jn,i=Qn;n=(i&~(1<<32-Ln(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Vv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},qv={readContext:mn,useCallback:Um,useContext:mn,useEffect:nf,useImperativeHandle:bm,useInsertionEffect:Cm,useLayoutEffect:Lm,useMemo:Dm,useReducer:zl,useRef:Rm,useState:function(){return zl(lo)},useDebugValue:rf,useDeferredValue:function(t){var e=gn();return Im(e,ft.memoizedState,t)},useTransition:function(){var t=zl(lo)[0],e=gn().memoizedState;return[t,e]},useMutableSource:Sm,useSyncExternalStore:ym,useId:Nm,unstable_isNewReconciler:!1},$v={readContext:mn,useCallback:Um,useContext:mn,useEffect:nf,useImperativeHandle:bm,useInsertionEffect:Cm,useLayoutEffect:Lm,useMemo:Dm,useReducer:kl,useRef:Rm,useState:function(){return kl(lo)},useDebugValue:rf,useDeferredValue:function(t){var e=gn();return ft===null?e.memoizedState=t:Im(e,ft.memoizedState,t)},useTransition:function(){var t=kl(lo)[0],e=gn().memoizedState;return[t,e]},useMutableSource:Sm,useSyncExternalStore:ym,useId:Nm,unstable_isNewReconciler:!1};function as(t,e){try{var n="",i=e;do n+=E_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Bl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ju(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Kv=typeof WeakMap=="function"?WeakMap:Map;function km(t,e,n){n=ni(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ga||(Ga=!0,uc=i),Ju(t,e)},n}function Bm(t,e,n){n=ni(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ju(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ju(t,e),typeof i!="function"&&(Ci===null?Ci=new Set([this]):Ci.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Kv;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=c0.bind(null,t,e,n),e.then(t,t))}function Sd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yd(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ni(-1,1),e.tag=2,Ri(n,e,1))),n.lanes|=1),t)}var Zv=li.ReactCurrentOwner,Wt=!1;function Ot(t,e,n,i){e.child=t===null?vm(e,null,n,i):ss(e,t.child,n,i)}function Md(t,e,n,i,r){n=n.render;var s=e.ref;return Qr(e,r),i=ef(t,e,n,i,s,r),n=tf(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ai(t,e,r)):(Qe&&n&&Gc(e),e.flags|=1,Ot(t,e,i,r),e.child)}function Ed(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!df(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Hm(t,e,s,i,r)):(t=Sa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:to,n(o,i)&&t.ref===e.ref)return ai(t,e,r)}return e.flags|=1,t=Pi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Hm(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(to(s,i)&&t.ref===e.ref)if(Wt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Wt=!0);else return e.lanes=t.lanes,ai(t,e,r)}return ec(t,e,n,i,r)}function Gm(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(jr,Jt),Jt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,je(jr,Jt),Jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,je(jr,Jt),Jt|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,je(jr,Jt),Jt|=i;return Ot(t,e,r,n),e.child}function Vm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ec(t,e,n,i,r){var s=jt(n)?ar:Dt.current;return s=is(e,s),Qr(e,r),n=ef(t,e,n,i,s,r),i=tf(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ai(t,e,r)):(Qe&&i&&Gc(e),e.flags|=1,Ot(t,e,n,r),e.child)}function Td(t,e,n,i,r){if(jt(n)){var s=!0;Ua(e)}else s=!1;if(Qr(e,r),e.stateNode===null)_a(t,e),gm(e,n,i),Qu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=mn(u):(u=jt(n)?ar:Dt.current,u=is(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&md(e,o,i,u),mi=!1;var d=e.memoizedState;o.state=d,Oa(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Xt.current||mi?(typeof f=="function"&&(Zu(e,n,f,i),l=e.memoizedState),(a=mi||pd(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,pm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:En(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=mn(l):(l=jt(n)?ar:Dt.current,l=is(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&md(e,o,i,l),mi=!1,d=e.memoizedState,o.state=d,Oa(e,i,o,r);var x=e.memoizedState;a!==h||d!==x||Xt.current||mi?(typeof m=="function"&&(Zu(e,n,m,i),x=e.memoizedState),(u=mi||pd(e,n,u,i,d,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return tc(t,e,n,i,s,r)}function tc(t,e,n,i,r,s){Vm(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ud(e,n,!1),ai(t,e,s);i=e.stateNode,Zv.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ss(e,t.child,null,s),e.child=ss(e,null,a,s)):Ot(t,e,a,s),e.memoizedState=i.state,r&&ud(e,n,!0),e.child}function Wm(t){var e=t.stateNode;e.pendingContext?ld(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ld(t,e.context,!1),Kc(t,e.containerInfo)}function wd(t,e,n,i,r){return rs(),Wc(r),e.flags|=256,Ot(t,e,n,i),e.child}var nc={dehydrated:null,treeContext:null,retryLane:0};function ic(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xm(t,e,n){var i=e.pendingProps,r=Je.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),je(Je,r&1),t===null)return $u(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sl(o,i,0,null),t=tr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ic(n),e.memoizedState=nc,t):sf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Qv(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Pi(a,s):(s=tr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ic(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nc,i}return s=t.child,t=s.sibling,i=Pi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function sf(t,e){return e=sl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oo(t,e,n,i){return i!==null&&Wc(i),ss(e,t.child,null,n),t=sf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qv(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Bl(Error(Q(422))),Oo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=sl({mode:"visible",children:i.children},r,0,null),s=tr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ss(e,t.child,null,o),e.child.memoizedState=ic(o),e.memoizedState=nc,s);if(!(e.mode&1))return Oo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Q(419)),i=Bl(s,i,void 0),Oo(t,e,o,i)}if(a=(o&t.childLanes)!==0,Wt||a){if(i=xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,oi(t,r),Pn(i,t,r,-1))}return ff(),i=Bl(Error(Q(421))),Oo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=f0.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,en=Ai(r.nextSibling),tn=e,Qe=!0,wn=null,t!==null&&(un[cn++]=Qn,un[cn++]=Jn,un[cn++]=lr,Qn=t.id,Jn=t.overflow,lr=e),e=sf(e,i.children),e.flags|=4096,e)}function Ad(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ku(t.return,e,n)}function Hl(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function jm(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ot(t,e,i.children,n),i=Je.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ad(t,n,e);else if(t.tag===19)Ad(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(je(Je,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&za(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Hl(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&za(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Hl(e,!0,n,null,s);break;case"together":Hl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _a(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ai(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Q(153));if(e.child!==null){for(t=e.child,n=Pi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jv(t,e,n){switch(e.tag){case 3:Wm(e),rs();break;case 5:xm(e);break;case 1:jt(e.type)&&Ua(e);break;case 4:Kc(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;je(Na,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(je(Je,Je.current&1),e.flags|=128,null):n&e.child.childLanes?Xm(t,e,n):(je(Je,Je.current&1),t=ai(t,e,n),t!==null?t.sibling:null);je(Je,Je.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return jm(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),je(Je,Je.current),i)break;return null;case 22:case 23:return e.lanes=0,Gm(t,e,n)}return ai(t,e,n)}var Ym,rc,qm,$m;Ym=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rc=function(){};qm=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ji(zn.current);var s=null;switch(n){case"input":r=Au(t,r),i=Au(t,i),s=[];break;case"select":r=tt({},r,{value:void 0}),i=tt({},i,{value:void 0}),s=[];break;case"textarea":r=Lu(t,r),i=Lu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Pa)}bu(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$m=function(t,e,n,i){n!==i&&(e.flags|=4)};function As(t,e){if(!Qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function e0(t,e,n){var i=e.pendingProps;switch(Vc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(e),null;case 1:return jt(e.type)&&ba(),Lt(e),null;case 3:return i=e.stateNode,os(),Ze(Xt),Ze(Dt),Qc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(No(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wn!==null&&(dc(wn),wn=null))),rc(t,e),Lt(e),null;case 5:Zc(e);var r=Ji(oo.current);if(n=e.type,t!==null&&e.stateNode!=null)qm(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return Lt(e),null}if(t=Ji(zn.current),No(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Fn]=e,i[ro]=s,t=(e.mode&1)!==0,n){case"dialog":$e("cancel",i),$e("close",i);break;case"iframe":case"object":case"embed":$e("load",i);break;case"video":case"audio":for(r=0;r<Ns.length;r++)$e(Ns[r],i);break;case"source":$e("error",i);break;case"img":case"image":case"link":$e("error",i),$e("load",i);break;case"details":$e("toggle",i);break;case"input":Nf(i,s),$e("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},$e("invalid",i);break;case"textarea":Of(i,s),$e("invalid",i)}bu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Io(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Io(i.textContent,a,t),r=["children",""+a]):qs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$e("scroll",i)}switch(n){case"input":Ao(i),Ff(i,s,!0);break;case"textarea":Ao(i),zf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Pa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Fn]=e,t[ro]=i,Ym(t,e,!1,!1),e.stateNode=t;e:{switch(o=Uu(n,i),n){case"dialog":$e("cancel",t),$e("close",t),r=i;break;case"iframe":case"object":case"embed":$e("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ns.length;r++)$e(Ns[r],t);r=i;break;case"source":$e("error",t),r=i;break;case"img":case"image":case"link":$e("error",t),$e("load",t),r=i;break;case"details":$e("toggle",t),r=i;break;case"input":Nf(t,i),r=Au(t,i),$e("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=tt({},i,{value:void 0}),$e("invalid",t);break;case"textarea":Of(t,i),r=Lu(t,i),$e("invalid",t);break;default:r=i}bu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?wp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ep(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$s(t,l):typeof l=="number"&&$s(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&$e("scroll",t):l!=null&&Cc(t,s,l,o))}switch(n){case"input":Ao(t),Ff(t,i,!1);break;case"textarea":Ao(t),zf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Di(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?qr(t,!!i.multiple,s,!1):i.defaultValue!=null&&qr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Pa)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Lt(e),null;case 6:if(t&&e.stateNode!=null)$m(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Q(166));if(n=Ji(oo.current),Ji(zn.current),No(e)){if(i=e.stateNode,n=e.memoizedProps,i[Fn]=e,(s=i.nodeValue!==n)&&(t=tn,t!==null))switch(t.tag){case 3:Io(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Io(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Fn]=e,e.stateNode=i}return Lt(e),null;case 13:if(Ze(Je),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qe&&en!==null&&e.mode&1&&!(e.flags&128))dm(),rs(),e.flags|=98560,s=!1;else if(s=No(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[Fn]=e}else rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Lt(e),s=!1}else wn!==null&&(dc(wn),wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Je.current&1?dt===0&&(dt=3):ff())),e.updateQueue!==null&&(e.flags|=4),Lt(e),null);case 4:return os(),rc(t,e),t===null&&no(e.stateNode.containerInfo),Lt(e),null;case 10:return Yc(e.type._context),Lt(e),null;case 17:return jt(e.type)&&ba(),Lt(e),null;case 19:if(Ze(Je),s=e.memoizedState,s===null)return Lt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)As(s,!1);else{if(dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=za(t),o!==null){for(e.flags|=128,As(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return je(Je,Je.current&1|2),e.child}t=t.sibling}s.tail!==null&&ot()>ls&&(e.flags|=128,i=!0,As(s,!1),e.lanes=4194304)}else{if(!i)if(t=za(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),As(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Qe)return Lt(e),null}else 2*ot()-s.renderingStartTime>ls&&n!==1073741824&&(e.flags|=128,i=!0,As(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ot(),e.sibling=null,n=Je.current,je(Je,i?n&1|2:n&1),e):(Lt(e),null);case 22:case 23:return cf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Jt&1073741824&&(Lt(e),e.subtreeFlags&6&&(e.flags|=8192)):Lt(e),null;case 24:return null;case 25:return null}throw Error(Q(156,e.tag))}function t0(t,e){switch(Vc(e),e.tag){case 1:return jt(e.type)&&ba(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return os(),Ze(Xt),Ze(Dt),Qc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zc(e),null;case 13:if(Ze(Je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Q(340));rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ze(Je),null;case 4:return os(),null;case 10:return Yc(e.type._context),null;case 22:case 23:return cf(),null;case 24:return null;default:return null}}var zo=!1,Ut=!1,n0=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Xr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){rt(t,e,i)}else n.current=null}function sc(t,e,n){try{n()}catch(i){rt(t,e,i)}}var Rd=!1;function i0(t,e){if(Gu=Ra,t=Jp(),Hc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vu={focusedElem:t,selectionRange:n},Ra=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,p=x.memoizedState,c=e.stateNode,_=c.getSnapshotBeforeUpdate(e.elementType===e.type?v:En(e.type,v),p);c.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(S){rt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return x=Rd,Rd=!1,x}function Vs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&sc(e,n,s)}r=r.next}while(r!==i)}}function il(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function oc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Km(t){var e=t.alternate;e!==null&&(t.alternate=null,Km(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Fn],delete e[ro],delete e[ju],delete e[kv],delete e[Bv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zm(t){return t.tag===5||t.tag===3||t.tag===4}function Cd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ac(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pa));else if(i!==4&&(t=t.child,t!==null))for(ac(t,e,n),t=t.sibling;t!==null;)ac(t,e,n),t=t.sibling}function lc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(lc(t,e,n),t=t.sibling;t!==null;)lc(t,e,n),t=t.sibling}var Mt=null,Tn=!1;function ui(t,e,n){for(n=n.child;n!==null;)Qm(t,e,n),n=n.sibling}function Qm(t,e,n){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount($a,n)}catch{}switch(n.tag){case 5:Ut||Xr(n,e);case 6:var i=Mt,r=Tn;Mt=null,ui(t,e,n),Mt=i,Tn=r,Mt!==null&&(Tn?(t=Mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Mt.removeChild(n.stateNode));break;case 18:Mt!==null&&(Tn?(t=Mt,n=n.stateNode,t.nodeType===8?Il(t.parentNode,n):t.nodeType===1&&Il(t,n),Js(t)):Il(Mt,n.stateNode));break;case 4:i=Mt,r=Tn,Mt=n.stateNode.containerInfo,Tn=!0,ui(t,e,n),Mt=i,Tn=r;break;case 0:case 11:case 14:case 15:if(!Ut&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sc(n,e,o),r=r.next}while(r!==i)}ui(t,e,n);break;case 1:if(!Ut&&(Xr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){rt(n,e,a)}ui(t,e,n);break;case 21:ui(t,e,n);break;case 22:n.mode&1?(Ut=(i=Ut)||n.memoizedState!==null,ui(t,e,n),Ut=i):ui(t,e,n);break;default:ui(t,e,n)}}function Ld(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new n0),e.forEach(function(i){var r=d0.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Mt=a.stateNode,Tn=!1;break e;case 3:Mt=a.stateNode.containerInfo,Tn=!0;break e;case 4:Mt=a.stateNode.containerInfo,Tn=!0;break e}a=a.return}if(Mt===null)throw Error(Q(160));Qm(s,o,r),Mt=null,Tn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){rt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jm(e,t),e=e.sibling}function Jm(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vn(e,t),Dn(t),i&4){try{Vs(3,t,t.return),il(3,t)}catch(v){rt(t,t.return,v)}try{Vs(5,t,t.return)}catch(v){rt(t,t.return,v)}}break;case 1:vn(e,t),Dn(t),i&512&&n!==null&&Xr(n,n.return);break;case 5:if(vn(e,t),Dn(t),i&512&&n!==null&&Xr(n,n.return),t.flags&32){var r=t.stateNode;try{$s(r,"")}catch(v){rt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Sp(r,s),Uu(a,o);var u=Uu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?wp(r,h):f==="dangerouslySetInnerHTML"?Ep(r,h):f==="children"?$s(r,h):Cc(r,f,h,u)}switch(a){case"input":Ru(r,s);break;case"textarea":yp(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?qr(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?qr(r,!!s.multiple,s.defaultValue,!0):qr(r,!!s.multiple,s.multiple?[]:"",!1))}r[ro]=s}catch(v){rt(t,t.return,v)}}break;case 6:if(vn(e,t),Dn(t),i&4){if(t.stateNode===null)throw Error(Q(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){rt(t,t.return,v)}}break;case 3:if(vn(e,t),Dn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Js(e.containerInfo)}catch(v){rt(t,t.return,v)}break;case 4:vn(e,t),Dn(t);break;case 13:vn(e,t),Dn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(lf=ot())),i&4&&Ld(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ut=(u=Ut)||f,vn(e,t),Ut=u):vn(e,t),Dn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(fe=t,f=t.child;f!==null;){for(h=fe=f;fe!==null;){switch(d=fe,m=d.child,d.tag){case 0:case 11:case 14:case 15:Vs(4,d,d.return);break;case 1:Xr(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){rt(i,n,v)}}break;case 5:Xr(d,d.return);break;case 22:if(d.memoizedState!==null){bd(h);continue}}m!==null?(m.return=d,fe=m):bd(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Tp("display",o))}catch(v){rt(t,t.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){rt(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:vn(e,t),Dn(t),i&4&&Ld(t);break;case 21:break;default:vn(e,t),Dn(t)}}function Dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Zm(n)){var i=n;break e}n=n.return}throw Error(Q(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($s(r,""),i.flags&=-33);var s=Cd(t);lc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Cd(t);ac(t,a,o);break;default:throw Error(Q(161))}}catch(l){rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function r0(t,e,n){fe=t,eg(t)}function eg(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||zo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ut;a=zo;var u=Ut;if(zo=o,(Ut=l)&&!u)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?Ud(r):l!==null?(l.return=o,fe=l):Ud(r);for(;s!==null;)fe=s,eg(s),s=s.sibling;fe=r,zo=a,Ut=u}Pd(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):Pd(t)}}function Pd(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ut||il(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ut)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:En(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Js(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}Ut||e.flags&512&&oc(e)}catch(d){rt(e,e.return,d)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function bd(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function Ud(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{il(4,e)}catch(l){rt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){rt(e,r,l)}}var s=e.return;try{oc(e)}catch(l){rt(e,s,l)}break;case 5:var o=e.return;try{oc(e)}catch(l){rt(e,o,l)}}}catch(l){rt(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var s0=Math.ceil,Ha=li.ReactCurrentDispatcher,of=li.ReactCurrentOwner,pn=li.ReactCurrentBatchConfig,Be=0,xt=null,ct=null,Tt=0,Jt=0,jr=Oi(0),dt=0,co=null,cr=0,rl=0,af=0,Ws=null,Gt=null,lf=0,ls=1/0,$n=null,Ga=!1,uc=null,Ci=null,ko=!1,Si=null,Va=0,Xs=0,cc=null,va=-1,xa=0;function kt(){return Be&6?ot():va!==-1?va:va=ot()}function Li(t){return t.mode&1?Be&2&&Tt!==0?Tt&-Tt:Gv.transition!==null?(xa===0&&(xa=Op()),xa):(t=Ge,t!==0||(t=window.event,t=t===void 0?16:Wp(t.type)),t):1}function Pn(t,e,n,i){if(50<Xs)throw Xs=0,cc=null,Error(Q(185));mo(t,n,i),(!(Be&2)||t!==xt)&&(t===xt&&(!(Be&2)&&(rl|=n),dt===4&&vi(t,Tt)),Yt(t,i),n===1&&Be===0&&!(e.mode&1)&&(ls=ot()+500,el&&zi()))}function Yt(t,e){var n=t.callbackNode;G_(t,e);var i=Aa(t,t===xt?Tt:0);if(i===0)n!==null&&Hf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hf(n),e===1)t.tag===0?Hv(Dd.bind(null,t)):um(Dd.bind(null,t)),Ov(function(){!(Be&6)&&zi()}),n=null;else{switch(zp(i)){case 1:n=Dc;break;case 4:n=Np;break;case 16:n=wa;break;case 536870912:n=Fp;break;default:n=wa}n=lg(n,tg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tg(t,e){if(va=-1,xa=0,Be&6)throw Error(Q(327));var n=t.callbackNode;if(Jr()&&t.callbackNode!==n)return null;var i=Aa(t,t===xt?Tt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Wa(t,i);else{e=i;var r=Be;Be|=2;var s=ig();(xt!==t||Tt!==e)&&($n=null,ls=ot()+500,er(t,e));do try{l0();break}catch(a){ng(t,a)}while(1);jc(),Ha.current=s,Be=r,ct!==null?e=0:(xt=null,Tt=0,e=dt)}if(e!==0){if(e===2&&(r=Ou(t),r!==0&&(i=r,e=fc(t,r))),e===1)throw n=co,er(t,0),vi(t,i),Yt(t,ot()),n;if(e===6)vi(t,i);else{if(r=t.current.alternate,!(i&30)&&!o0(r)&&(e=Wa(t,i),e===2&&(s=Ou(t),s!==0&&(i=s,e=fc(t,s))),e===1))throw n=co,er(t,0),vi(t,i),Yt(t,ot()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Q(345));case 2:Yi(t,Gt,$n);break;case 3:if(vi(t,i),(i&130023424)===i&&(e=lf+500-ot(),10<e)){if(Aa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Xu(Yi.bind(null,t,Gt,$n),e);break}Yi(t,Gt,$n);break;case 4:if(vi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ln(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ot()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*s0(i/1960))-i,10<i){t.timeoutHandle=Xu(Yi.bind(null,t,Gt,$n),i);break}Yi(t,Gt,$n);break;case 5:Yi(t,Gt,$n);break;default:throw Error(Q(329))}}}return Yt(t,ot()),t.callbackNode===n?tg.bind(null,t):null}function fc(t,e){var n=Ws;return t.current.memoizedState.isDehydrated&&(er(t,e).flags|=256),t=Wa(t,e),t!==2&&(e=Gt,Gt=n,e!==null&&dc(e)),t}function dc(t){Gt===null?Gt=t:Gt.push.apply(Gt,t)}function o0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!bn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vi(t,e){for(e&=~af,e&=~rl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ln(e),i=1<<n;t[n]=-1,e&=~i}}function Dd(t){if(Be&6)throw Error(Q(327));Jr();var e=Aa(t,0);if(!(e&1))return Yt(t,ot()),null;var n=Wa(t,e);if(t.tag!==0&&n===2){var i=Ou(t);i!==0&&(e=i,n=fc(t,i))}if(n===1)throw n=co,er(t,0),vi(t,e),Yt(t,ot()),n;if(n===6)throw Error(Q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yi(t,Gt,$n),Yt(t,ot()),null}function uf(t,e){var n=Be;Be|=1;try{return t(e)}finally{Be=n,Be===0&&(ls=ot()+500,el&&zi())}}function fr(t){Si!==null&&Si.tag===0&&!(Be&6)&&Jr();var e=Be;Be|=1;var n=pn.transition,i=Ge;try{if(pn.transition=null,Ge=1,t)return t()}finally{Ge=i,pn.transition=n,Be=e,!(Be&6)&&zi()}}function cf(){Jt=jr.current,Ze(jr)}function er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Fv(n)),ct!==null)for(n=ct.return;n!==null;){var i=n;switch(Vc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ba();break;case 3:os(),Ze(Xt),Ze(Dt),Qc();break;case 5:Zc(i);break;case 4:os();break;case 13:Ze(Je);break;case 19:Ze(Je);break;case 10:Yc(i.type._context);break;case 22:case 23:cf()}n=n.return}if(xt=t,ct=t=Pi(t.current,null),Tt=Jt=e,dt=0,co=null,af=rl=cr=0,Gt=Ws=null,Qi!==null){for(e=0;e<Qi.length;e++)if(n=Qi[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Qi=null}return t}function ng(t,e){do{var n=ct;try{if(jc(),ma.current=Ba,ka){for(var i=et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ka=!1}if(ur=0,vt=ft=et=null,Gs=!1,ao=0,of.current=null,n===null||n.return===null){dt=1,co=e,ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Sd(o);if(m!==null){m.flags&=-257,yd(m,o,a,s,e),m.mode&1&&xd(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){xd(s,u,e),ff();break e}l=Error(Q(426))}}else if(Qe&&a.mode&1){var p=Sd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),yd(p,o,a,s,e),Wc(as(l,a));break e}}s=l=as(l,a),dt!==4&&(dt=2),Ws===null?Ws=[s]:Ws.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=km(s,l,e);dd(s,c);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ci===null||!Ci.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Bm(s,a,e);dd(s,S);break e}}s=s.return}while(s!==null)}sg(n)}catch(T){e=T,ct===n&&n!==null&&(ct=n=n.return);continue}break}while(1)}function ig(){var t=Ha.current;return Ha.current=Ba,t===null?Ba:t}function ff(){(dt===0||dt===3||dt===2)&&(dt=4),xt===null||!(cr&268435455)&&!(rl&268435455)||vi(xt,Tt)}function Wa(t,e){var n=Be;Be|=2;var i=ig();(xt!==t||Tt!==e)&&($n=null,er(t,e));do try{a0();break}catch(r){ng(t,r)}while(1);if(jc(),Be=n,Ha.current=i,ct!==null)throw Error(Q(261));return xt=null,Tt=0,dt}function a0(){for(;ct!==null;)rg(ct)}function l0(){for(;ct!==null&&!D_();)rg(ct)}function rg(t){var e=ag(t.alternate,t,Jt);t.memoizedProps=t.pendingProps,e===null?sg(t):ct=e,of.current=null}function sg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=t0(n,e),n!==null){n.flags&=32767,ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{dt=6,ct=null;return}}else if(n=e0(n,e,Jt),n!==null){ct=n;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=t}while(e!==null);dt===0&&(dt=5)}function Yi(t,e,n){var i=Ge,r=pn.transition;try{pn.transition=null,Ge=1,u0(t,e,n,i)}finally{pn.transition=r,Ge=i}return null}function u0(t,e,n,i){do Jr();while(Si!==null);if(Be&6)throw Error(Q(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(V_(t,s),t===xt&&(ct=xt=null,Tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ko||(ko=!0,lg(wa,function(){return Jr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=pn.transition,pn.transition=null;var o=Ge;Ge=1;var a=Be;Be|=4,of.current=null,i0(t,n),Jm(n,t),Lv(Vu),Ra=!!Gu,Vu=Gu=null,t.current=n,r0(n),I_(),Be=a,Ge=o,pn.transition=s}else t.current=n;if(ko&&(ko=!1,Si=t,Va=r),s=t.pendingLanes,s===0&&(Ci=null),O_(n.stateNode),Yt(t,ot()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ga)throw Ga=!1,t=uc,uc=null,t;return Va&1&&t.tag!==0&&Jr(),s=t.pendingLanes,s&1?t===cc?Xs++:(Xs=0,cc=t):Xs=0,zi(),null}function Jr(){if(Si!==null){var t=zp(Va),e=pn.transition,n=Ge;try{if(pn.transition=null,Ge=16>t?16:t,Si===null)var i=!1;else{if(t=Si,Si=null,Va=0,Be&6)throw Error(Q(331));var r=Be;for(Be|=4,fe=t.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var f=fe;switch(f.tag){case 0:case 11:case 15:Vs(8,f,s)}var h=f.child;if(h!==null)h.return=f,fe=h;else for(;fe!==null;){f=fe;var d=f.sibling,m=f.return;if(Km(f),f===u){fe=null;break}if(d!==null){d.return=m,fe=d;break}fe=m}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var p=v.sibling;v.sibling=null,v=p}while(v!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vs(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,fe=c;break e}fe=s.return}}var _=t.current;for(fe=_;fe!==null;){o=fe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,fe=g;else e:for(o=_;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:il(9,a)}}catch(T){rt(a,a.return,T)}if(a===o){fe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,fe=S;break e}fe=a.return}}if(Be=r,zi(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot($a,t)}catch{}i=!0}return i}finally{Ge=n,pn.transition=e}}return!1}function Id(t,e,n){e=as(n,e),e=km(t,e,1),t=Ri(t,e,1),e=kt(),t!==null&&(mo(t,1,e),Yt(t,e))}function rt(t,e,n){if(t.tag===3)Id(t,t,n);else for(;e!==null;){if(e.tag===3){Id(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ci===null||!Ci.has(i))){t=as(n,t),t=Bm(e,t,1),e=Ri(e,t,1),t=kt(),e!==null&&(mo(e,1,t),Yt(e,t));break}}e=e.return}}function c0(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=kt(),t.pingedLanes|=t.suspendedLanes&n,xt===t&&(Tt&n)===n&&(dt===4||dt===3&&(Tt&130023424)===Tt&&500>ot()-lf?er(t,0):af|=n),Yt(t,e)}function og(t,e){e===0&&(t.mode&1?(e=Lo,Lo<<=1,!(Lo&130023424)&&(Lo=4194304)):e=1);var n=kt();t=oi(t,e),t!==null&&(mo(t,e,n),Yt(t,n))}function f0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),og(t,n)}function d0(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Q(314))}i!==null&&i.delete(e),og(t,n)}var ag;ag=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xt.current)Wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Wt=!1,Jv(t,e,n);Wt=!!(t.flags&131072)}else Wt=!1,Qe&&e.flags&1048576&&cm(e,Ia,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;_a(t,e),t=e.pendingProps;var r=is(e,Dt.current);Qr(e,n),r=ef(null,e,i,t,r,n);var s=tf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(i)?(s=!0,Ua(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$c(e),r.updater=tl,e.stateNode=r,r._reactInternals=e,Qu(e,i,t,n),e=tc(null,e,i,!0,s,n)):(e.tag=0,Qe&&s&&Gc(e),Ot(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(_a(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=p0(i),t=En(i,t),r){case 0:e=ec(null,e,i,t,n);break e;case 1:e=Td(null,e,i,t,n);break e;case 11:e=Md(null,e,i,t,n);break e;case 14:e=Ed(null,e,i,En(i.type,t),n);break e}throw Error(Q(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:En(i,r),ec(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:En(i,r),Td(t,e,i,r,n);case 3:e:{if(Wm(e),t===null)throw Error(Q(387));i=e.pendingProps,s=e.memoizedState,r=s.element,pm(t,e),Oa(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=as(Error(Q(423)),e),e=wd(t,e,i,n,r);break e}else if(i!==r){r=as(Error(Q(424)),e),e=wd(t,e,i,n,r);break e}else for(en=Ai(e.stateNode.containerInfo.firstChild),tn=e,Qe=!0,wn=null,n=vm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rs(),i===r){e=ai(t,e,n);break e}Ot(t,e,i,n)}e=e.child}return e;case 5:return xm(e),t===null&&$u(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Wu(i,r)?o=null:s!==null&&Wu(i,s)&&(e.flags|=32),Vm(t,e),Ot(t,e,o,n),e.child;case 6:return t===null&&$u(e),null;case 13:return Xm(t,e,n);case 4:return Kc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ss(e,null,i,n):Ot(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:En(i,r),Md(t,e,i,r,n);case 7:return Ot(t,e,e.pendingProps,n),e.child;case 8:return Ot(t,e,e.pendingProps.children,n),e.child;case 12:return Ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,je(Na,i._currentValue),i._currentValue=o,s!==null)if(bn(s.value,o)){if(s.children===r.children&&!Xt.current){e=ai(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ni(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ku(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Q(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ku(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ot(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qr(e,n),r=mn(r),i=i(r),e.flags|=1,Ot(t,e,i,n),e.child;case 14:return i=e.type,r=En(i,e.pendingProps),r=En(i.type,r),Ed(t,e,i,r,n);case 15:return Hm(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:En(i,r),_a(t,e),e.tag=1,jt(i)?(t=!0,Ua(e)):t=!1,Qr(e,n),gm(e,i,r),Qu(e,i,r,n),tc(null,e,i,!0,t,n);case 19:return jm(t,e,n);case 22:return Gm(t,e,n)}throw Error(Q(156,e.tag))};function lg(t,e){return Ip(t,e)}function h0(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(t,e,n,i){return new h0(t,e,n,i)}function df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function p0(t){if(typeof t=="function")return df(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pc)return 11;if(t===bc)return 14}return 2}function Pi(t,e){var n=t.alternate;return n===null?(n=hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")df(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fr:return tr(n.children,r,s,e);case Lc:o=8,r|=8;break;case Mu:return t=hn(12,n,e,r|2),t.elementType=Mu,t.lanes=s,t;case Eu:return t=hn(13,n,e,r),t.elementType=Eu,t.lanes=s,t;case Tu:return t=hn(19,n,e,r),t.elementType=Tu,t.lanes=s,t;case _p:return sl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mp:o=10;break e;case gp:o=9;break e;case Pc:o=11;break e;case bc:o=14;break e;case pi:o=16,i=null;break e}throw Error(Q(130,t==null?t:typeof t,""))}return e=hn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function tr(t,e,n,i){return t=hn(7,t,i,e),t.lanes=n,t}function sl(t,e,n,i){return t=hn(22,t,i,e),t.elementType=_p,t.lanes=n,t.stateNode={isHidden:!1},t}function Gl(t,e,n){return t=hn(6,t,null,e),t.lanes=n,t}function Vl(t,e,n){return e=hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function m0(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function hf(t,e,n,i,r,s,o,a,l){return t=new m0(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(s),t}function g0(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ug(t){if(!t)return Ii;t=t._reactInternals;e:{if(mr(t)!==t||t.tag!==1)throw Error(Q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Q(171))}if(t.tag===1){var n=t.type;if(jt(n))return lm(t,n,e)}return e}function cg(t,e,n,i,r,s,o,a,l){return t=hf(n,i,!0,t,r,s,o,a,l),t.context=ug(null),n=t.current,i=kt(),r=Li(n),s=ni(i,r),s.callback=e??null,Ri(n,s,r),t.current.lanes=r,mo(t,r,i),Yt(t,i),t}function ol(t,e,n,i){var r=e.current,s=kt(),o=Li(r);return n=ug(n),e.context===null?e.context=n:e.pendingContext=n,e=ni(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ri(r,e,o),t!==null&&(Pn(t,r,o,s),pa(t,r,o)),o}function Xa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Nd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pf(t,e){Nd(t,e),(t=t.alternate)&&Nd(t,e)}function _0(){return null}var fg=typeof reportError=="function"?reportError:function(t){console.error(t)};function mf(t){this._internalRoot=t}al.prototype.render=mf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Q(409));ol(t,e,null,null)};al.prototype.unmount=mf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fr(function(){ol(null,t,null,null)}),e[si]=null}};function al(t){this._internalRoot=t}al.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_i.length&&e!==0&&e<_i[n].priority;n++);_i.splice(n,0,t),n===0&&Vp(t)}};function gf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fd(){}function v0(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Xa(o);s.call(u)}}var o=cg(e,i,t,0,null,!1,!1,"",Fd);return t._reactRootContainer=o,t[si]=o.current,no(t.nodeType===8?t.parentNode:t),fr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Xa(l);a.call(u)}}var l=hf(t,0,!1,null,null,!1,!1,"",Fd);return t._reactRootContainer=l,t[si]=l.current,no(t.nodeType===8?t.parentNode:t),fr(function(){ol(e,l,n,i)}),l}function ul(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Xa(o);a.call(l)}}ol(e,o,t,r)}else o=v0(n,e,t,r,i);return Xa(o)}kp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Is(e.pendingLanes);n!==0&&(Ic(e,n|1),Yt(e,ot()),!(Be&6)&&(ls=ot()+500,zi()))}break;case 13:fr(function(){var i=oi(t,1);if(i!==null){var r=kt();Pn(i,t,1,r)}}),pf(t,1)}};Nc=function(t){if(t.tag===13){var e=oi(t,134217728);if(e!==null){var n=kt();Pn(e,t,134217728,n)}pf(t,134217728)}};Bp=function(t){if(t.tag===13){var e=Li(t),n=oi(t,e);if(n!==null){var i=kt();Pn(n,t,e,i)}pf(t,e)}};Hp=function(){return Ge};Gp=function(t,e){var n=Ge;try{return Ge=t,e()}finally{Ge=n}};Iu=function(t,e,n){switch(e){case"input":if(Ru(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ja(i);if(!r)throw Error(Q(90));xp(i),Ru(i,r)}}}break;case"textarea":yp(t,n);break;case"select":e=n.value,e!=null&&qr(t,!!n.multiple,e,!1)}};Cp=uf;Lp=fr;var x0={usingClientEntryPoint:!1,Events:[_o,Br,Ja,Ap,Rp,uf]},Rs={findFiberByHostInstance:Zi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},S0={bundleType:Rs.bundleType,version:Rs.version,rendererPackageName:Rs.rendererPackageName,rendererConfig:Rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Up(t),t===null?null:t.stateNode},findFiberByHostInstance:Rs.findFiberByHostInstance||_0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{$a=Bo.inject(S0),On=Bo}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x0;on.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gf(e))throw Error(Q(200));return g0(t,e,null,n)};on.createRoot=function(t,e){if(!gf(t))throw Error(Q(299));var n=!1,i="",r=fg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hf(t,1,!1,null,null,n,!1,i,r),t[si]=e.current,no(t.nodeType===8?t.parentNode:t),new mf(e)};on.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Q(188)):(t=Object.keys(t).join(","),Error(Q(268,t)));return t=Up(e),t=t===null?null:t.stateNode,t};on.flushSync=function(t){return fr(t)};on.hydrate=function(t,e,n){if(!ll(e))throw Error(Q(200));return ul(null,t,e,!0,n)};on.hydrateRoot=function(t,e,n){if(!gf(t))throw Error(Q(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=fg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=cg(e,null,t,1,n??null,r,!1,s,o),t[si]=e.current,no(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new al(e)};on.render=function(t,e,n){if(!ll(e))throw Error(Q(200));return ul(null,t,e,!1,n)};on.unmountComponentAtNode=function(t){if(!ll(t))throw Error(Q(40));return t._reactRootContainer?(fr(function(){ul(null,null,t,!1,function(){t._reactRootContainer=null,t[si]=null})}),!0):!1};on.unstable_batchedUpdates=uf;on.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ll(n))throw Error(Q(200));if(t==null||t._reactInternals===void 0)throw Error(Q(38));return ul(t,e,n,!1,i)};on.version="18.2.0-next-9e3b772b8-20220608";function dg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dg)}catch(t){console.error(t)}}dg(),cp.exports=on;var y0=cp.exports,Od=y0;Su.createRoot=Od.createRoot,Su.hydrateRoot=Od.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _f="153",M0=0,zd=1,E0=2,hg=1,T0=2,qn=3,Ni=0,qt=1,Zn=2,bi=0,es=1,kd=2,Bd=3,Hd=4,w0=5,Ir=100,A0=101,R0=102,Gd=103,Vd=104,C0=200,L0=201,P0=202,b0=203,pg=204,mg=205,U0=206,D0=207,I0=208,N0=209,F0=210,O0=0,z0=1,k0=2,hc=3,B0=4,H0=5,G0=6,V0=7,gg=0,W0=1,X0=2,ii=0,j0=1,Y0=2,q0=3,$0=4,K0=5,_g=300,us=301,cs=302,pc=303,mc=304,cl=306,gc=1e3,Rn=1001,_c=1002,zt=1003,Wd=1004,Wl=1005,fn=1006,Z0=1007,fo=1008,Ui=1009,Q0=1010,J0=1011,vf=1012,vg=1013,yi=1014,Mi=1015,ho=1016,xg=1017,Sg=1018,nr=1020,ex=1021,Cn=1023,tx=1024,nx=1025,ir=1026,fs=1027,ix=1028,yg=1029,rx=1030,Mg=1031,Eg=1033,Xl=33776,jl=33777,Yl=33778,ql=33779,Xd=35840,jd=35841,Yd=35842,qd=35843,sx=36196,$d=37492,Kd=37496,Zd=37808,Qd=37809,Jd=37810,eh=37811,th=37812,nh=37813,ih=37814,rh=37815,sh=37816,oh=37817,ah=37818,lh=37819,uh=37820,ch=37821,$l=36492,ox=36283,fh=36284,dh=36285,hh=36286,Tg=3e3,rr=3001,ax=3200,lx=3201,ux=0,cx=1,sr="",Le="srgb",Bn="srgb-linear",wg="display-p3",Kl=7680,fx=519,dx=512,hx=513,px=514,mx=515,gx=516,_x=517,vx=518,xx=519,ph=35044,mh="300 es",vc=1035,ei=2e3,ja=2001;class gs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zl=Math.PI/180,xc=180/Math.PI;function xo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[t&255]+Pt[t>>8&255]+Pt[t>>16&255]+Pt[t>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[n&63|128]+Pt[n>>8&255]+"-"+Pt[n>>16&255]+Pt[n>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Vt(t,e,n){return Math.max(e,Math.min(n,t))}function Sx(t,e){return(t%e+e)%e}function Ql(t,e,n){return(1-n)*t+n*e}function gh(t){return(t&t-1)===0&&t!==0}function Sc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ho(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,n=0){We.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class be{constructor(e,n,i,r,s,o,a,l,u){be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],m=i[5],x=i[8],v=r[0],p=r[3],c=r[6],_=r[1],g=r[4],S=r[7],T=r[2],R=r[5],C=r[8];return s[0]=o*v+a*_+l*T,s[3]=o*p+a*g+l*R,s[6]=o*c+a*S+l*C,s[1]=u*v+f*_+h*T,s[4]=u*p+f*g+h*R,s[7]=u*c+f*S+h*C,s[2]=d*v+m*_+x*T,s[5]=d*p+m*g+x*R,s[8]=d*c+m*S+x*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*o-a*u,d=a*l-f*s,m=u*s-o*l,x=n*h+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*u-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=m*v,e[7]=(i*l-u*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Jl.makeScale(e,n)),this}rotate(e){return this.premultiply(Jl.makeRotation(-e)),this}translate(e,n){return this.premultiply(Jl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jl=new be;function Ag(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ya(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const _h={};function js(t){t in _h||(_h[t]=!0,console.warn(t))}function ts(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function eu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const yx=new be().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Mx=new be().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ex(t){return t.convertSRGBToLinear().applyMatrix3(Mx)}function Tx(t){return t.applyMatrix3(yx).convertLinearToSRGB()}const wx={[Bn]:t=>t,[Le]:t=>t.convertSRGBToLinear(),[wg]:Ex},Ax={[Bn]:t=>t,[Le]:t=>t.convertLinearToSRGB(),[wg]:Tx},xn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Bn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=wx[e],r=Ax[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let vr;class Rg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vr===void 0&&(vr=Ya("canvas")),vr.width=e.width,vr.height=e.height;const i=vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ya("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ts(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ts(n[i]/255)*255):n[i]=ts(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rx=0;class Cg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=xo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(tu(r[o].image)):s.push(tu(r[o]))}else s=tu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function tu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Rg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cx=0;class nn extends gs{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=Rn,r=Rn,s=fn,o=fo,a=Cn,l=Ui,u=nn.DEFAULT_ANISOTROPY,f=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=xo(),this.name="",this.source=new Cg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===rr?Le:sr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_g)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gc:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case _c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gc:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case _c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Le?rr:Tg}set encoding(e){js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===rr?Le:sr}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=_g;nn.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,n=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],m=l[5],x=l[9],v=l[2],p=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(x+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,S=(m+1)/2,T=(c+1)/2,R=(f+d)/4,C=(h+v)/4,P=(x+p)/4;return g>S&&g>T?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=R/i,s=C/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=P/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-x)*(p-x)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(h-v)/_,this.z=(d-f)/_,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dr extends gs{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(js("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===rr?Le:sr),this.texture=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:fn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Cg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lg extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lx extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class So{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=x,e[n+3]=v;return}if(h!==v||l!==d||u!==m||f!==x){let p=1-a;const c=l*d+u*m+f*x+h*v,_=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const T=Math.sqrt(g),R=Math.atan2(T,c*_);p=Math.sin(p*R)/T,a=Math.sin(a*R)/T}const S=a*_;if(l=l*p+d*S,u=u*p+m*S,f=f*p+x*S,h=h*p+v*S,p===1-a){const T=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=T,u*=T,f*=T,h*=T}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o],d=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+f*h+l*m-u*d,e[n+1]=l*x+f*d+u*h-a*m,e[n+2]=u*x+f*m+a*d-l*h,e[n+3]=f*x-a*h-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*f*h+u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h-d*m*x;break;case"YXZ":this._x=d*f*h+u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h+d*m*x;break;case"ZXY":this._x=d*f*h-u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h-d*m*x;break;case"ZYX":this._x=d*f*h-u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h+d*m*x;break;case"YZX":this._x=d*f*h+u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h-d*m*x;break;case"XZY":this._x=d*f*h-u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,f=l*i+a*n-s*r,h=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=u*l+d*-s+f*-a-h*-o,this.y=f*l+d*-o+h*-s-u*-a,this.z=h*l+d*-a+u*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nu.copy(this).projectOnVector(e),this.sub(nu)}reflect(e){return this.sub(nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nu=new O,vh=new So;class yo{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox),xr.applyMatrix4(e.matrixWorld),this.union(xr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Vn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Vn)}else r.boundingBox===null&&r.computeBoundingBox(),xr.copy(r.boundingBox),xr.applyMatrix4(e.matrixWorld),this.union(xr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),Go.subVectors(this.max,Cs),Sr.subVectors(e.a,Cs),yr.subVectors(e.b,Cs),Mr.subVectors(e.c,Cs),ci.subVectors(yr,Sr),fi.subVectors(Mr,yr),Gi.subVectors(Sr,Mr);let n=[0,-ci.z,ci.y,0,-fi.z,fi.y,0,-Gi.z,Gi.y,ci.z,0,-ci.x,fi.z,0,-fi.x,Gi.z,0,-Gi.x,-ci.y,ci.x,0,-fi.y,fi.x,0,-Gi.y,Gi.x,0];return!iu(n,Sr,yr,Mr,Go)||(n=[1,0,0,0,1,0,0,0,1],!iu(n,Sr,yr,Mr,Go))?!1:(Vo.crossVectors(ci,fi),n=[Vo.x,Vo.y,Vo.z],iu(n,Sr,yr,Mr,Go))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new O,new O,new O,new O,new O,new O,new O,new O],Vn=new O,xr=new yo,Sr=new O,yr=new O,Mr=new O,ci=new O,fi=new O,Gi=new O,Cs=new O,Go=new O,Vo=new O,Vi=new O;function iu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Vi.fromArray(t,s);const a=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),l=e.dot(Vi),u=n.dot(Vi),f=i.dot(Vi);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const Px=new yo,Ls=new O,ru=new O;class xf{constructor(e=new O,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Px.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const n=Ls.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ls,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(ru)),this.expandByPoint(Ls.copy(e.center).sub(ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new O,su=new O,Wo=new O,di=new O,ou=new O,Xo=new O,au=new O;class bx{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Wn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,n),Wn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){su.copy(e).add(n).multiplyScalar(.5),Wo.copy(n).sub(e).normalize(),di.copy(this.origin).sub(su);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Wo),a=di.dot(this.direction),l=-di.dot(Wo),u=di.lengthSq(),f=Math.abs(1-o*o);let h,d,m,x;if(f>0)if(h=o*l-a,d=o*a-l,x=s*f,h>=0)if(d>=-x)if(d<=x){const v=1/f;h*=v,d*=v,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(su).addScaledVector(Wo,d),m}intersectSphere(e,n){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),r=Wn.dot(Wn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,n,i,r,s){ou.subVectors(n,e),Xo.subVectors(i,e),au.crossVectors(ou,Xo);let o=this.direction.dot(au),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(Xo.crossVectors(di,Xo));if(l<0)return null;const u=a*this.direction.dot(ou.cross(di));if(u<0||l+u>o)return null;const f=-a*di.dot(au);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,n,i,r,s,o,a,l,u,f,h,d,m,x,v,p){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,h,d,m,x,v,p)}set(e,n,i,r,s,o,a,l,u,f,h,d,m,x,v,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=m,c[7]=x,c[11]=v,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Er.setFromMatrixColumn(e,0).length(),s=1/Er.setFromMatrixColumn(e,1).length(),o=1/Er.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,m=o*h,x=a*f,v=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=m+x*u,n[5]=d-v*u,n[9]=-a*l,n[2]=v-d*u,n[6]=x+m*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,x=u*f,v=u*h;n[0]=d+v*a,n[4]=x*a-m,n[8]=o*u,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-x,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,x=u*f,v=u*h;n[0]=d-v*a,n[4]=-o*h,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*f,n[9]=v-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*h,x=a*f,v=a*h;n[0]=l*f,n[4]=x*u-m,n[8]=d*u+v,n[1]=l*h,n[5]=v*u+d,n[9]=m*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,x=a*l,v=a*u;n[0]=l*f,n[4]=v-d*h,n[8]=x*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*h+x,n[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,m=o*u,x=a*l,v=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+v,n[5]=o*f,n[9]=m*h-x,n[2]=x*h-m,n[6]=a*f,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ux,e,Dx)}lookAt(e,n,i){const r=this.elements;return Zt.subVectors(e,n),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),hi.crossVectors(i,Zt),hi.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),hi.crossVectors(i,Zt)),hi.normalize(),jo.crossVectors(Zt,hi),r[0]=hi.x,r[4]=jo.x,r[8]=Zt.x,r[1]=hi.y,r[5]=jo.y,r[9]=Zt.y,r[2]=hi.z,r[6]=jo.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],m=i[13],x=i[2],v=i[6],p=i[10],c=i[14],_=i[3],g=i[7],S=i[11],T=i[15],R=r[0],C=r[4],P=r[8],y=r[12],w=r[1],q=r[5],J=r[9],F=r[13],H=r[2],G=r[6],Z=r[10],j=r[14],b=r[3],B=r[7],z=r[11],re=r[15];return s[0]=o*R+a*w+l*H+u*b,s[4]=o*C+a*q+l*G+u*B,s[8]=o*P+a*J+l*Z+u*z,s[12]=o*y+a*F+l*j+u*re,s[1]=f*R+h*w+d*H+m*b,s[5]=f*C+h*q+d*G+m*B,s[9]=f*P+h*J+d*Z+m*z,s[13]=f*y+h*F+d*j+m*re,s[2]=x*R+v*w+p*H+c*b,s[6]=x*C+v*q+p*G+c*B,s[10]=x*P+v*J+p*Z+c*z,s[14]=x*y+v*F+p*j+c*re,s[3]=_*R+g*w+S*H+T*b,s[7]=_*C+g*q+S*G+T*B,s[11]=_*P+g*J+S*Z+T*z,s[15]=_*y+g*F+S*j+T*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],m=e[14],x=e[3],v=e[7],p=e[11],c=e[15];return x*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*m-i*l*m)+v*(+n*l*m-n*u*d+s*o*d-r*o*m+r*u*f-s*l*f)+p*(+n*u*h-n*a*m-s*o*h+i*o*m+s*a*f-i*u*f)+c*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],m=e[11],x=e[12],v=e[13],p=e[14],c=e[15],_=h*p*u-v*d*u+v*l*m-a*p*m-h*l*c+a*d*c,g=x*d*u-f*p*u-x*l*m+o*p*m+f*l*c-o*d*c,S=f*v*u-x*h*u+x*a*m-o*v*m-f*a*c+o*h*c,T=x*h*l-f*v*l-x*a*d+o*v*d+f*a*p-o*h*p,R=n*_+i*g+r*S+s*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=_*C,e[1]=(v*d*s-h*p*s-v*r*m+i*p*m+h*r*c-i*d*c)*C,e[2]=(a*p*s-v*l*s+v*r*u-i*p*u-a*r*c+i*l*c)*C,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*m-i*l*m)*C,e[4]=g*C,e[5]=(f*p*s-x*d*s+x*r*m-n*p*m-f*r*c+n*d*c)*C,e[6]=(x*l*s-o*p*s-x*r*u+n*p*u+o*r*c-n*l*c)*C,e[7]=(o*d*s-f*l*s+f*r*u-n*d*u-o*r*m+n*l*m)*C,e[8]=S*C,e[9]=(x*h*s-f*v*s-x*i*m+n*v*m+f*i*c-n*h*c)*C,e[10]=(o*v*s-x*a*s+x*i*u-n*v*u-o*i*c+n*a*c)*C,e[11]=(f*a*s-o*h*s-f*i*u+n*h*u+o*i*m-n*a*m)*C,e[12]=T*C,e[13]=(f*v*r-x*h*r+x*i*d-n*v*d-f*i*p+n*h*p)*C,e[14]=(x*a*r-o*v*r-x*i*l+n*v*l+o*i*p-n*a*p)*C,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,h=a+a,d=s*u,m=s*f,x=s*h,v=o*f,p=o*h,c=a*h,_=l*u,g=l*f,S=l*h,T=i.x,R=i.y,C=i.z;return r[0]=(1-(v+c))*T,r[1]=(m+S)*T,r[2]=(x-g)*T,r[3]=0,r[4]=(m-S)*R,r[5]=(1-(d+c))*R,r[6]=(p+_)*R,r[7]=0,r[8]=(x+g)*C,r[9]=(p-_)*C,r[10]=(1-(d+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Er.set(r[0],r[1],r[2]).length();const o=Er.set(r[4],r[5],r[6]).length(),a=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const u=1/s,f=1/o,h=1/a;return Sn.elements[0]*=u,Sn.elements[1]*=u,Sn.elements[2]*=u,Sn.elements[4]*=f,Sn.elements[5]*=f,Sn.elements[6]*=f,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,n.setFromRotationMatrix(Sn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ei){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,x;if(a===ei)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ja)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ei){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*u,m=(i+r)*f;let x,v;if(a===ei)x=(o+s)*h,v=-2*h;else if(a===ja)x=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Er=new O,Sn=new wt,Ux=new O(0,0,0),Dx=new O(1,1,1),hi=new O,jo=new O,Zt=new O,xh=new wt,Sh=new So;class fl{constructor(e=0,n=0,i=0,r=fl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fl.DEFAULT_ORDER="XYZ";class Pg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ix=0;const yh=new O,Tr=new So,Xn=new wt,Yo=new O,Ps=new O,Nx=new O,Fx=new So,Mh=new O(1,0,0),Eh=new O(0,1,0),Th=new O(0,0,1),Ox={type:"added"},wh={type:"removed"};class rn extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new O,n=new fl,i=new So,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new be}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Pg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Tr.setFromAxisAngle(e,n),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,n){return Tr.setFromAxisAngle(e,n),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(Mh,e)}rotateY(e){return this.rotateOnAxis(Eh,e)}rotateZ(e){return this.rotateOnAxis(Th,e)}translateOnAxis(e,n){return yh.copy(e).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mh,e)}translateY(e){return this.translateOnAxis(Eh,e)}translateZ(e){return this.translateOnAxis(Th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Yo.copy(e):Yo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Ps,Yo,this.up):Xn.lookAt(Yo,Ps,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),Tr.setFromRotationMatrix(Xn),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ox)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(wh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,Nx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Fx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new O(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new O,jn=new O,lu=new O,Yn=new O,wr=new O,Ar=new O,Ah=new O,uu=new O,cu=new O,fu=new O;let qo=!1;class An{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),yn.subVectors(e,n),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){yn.subVectors(r,n),jn.subVectors(i,n),lu.subVectors(e,n);const o=yn.dot(yn),a=yn.dot(jn),l=yn.dot(lu),u=jn.dot(jn),f=jn.dot(lu),h=o*u-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(u*l-a*f)*d,x=(o*f-a*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Yn),Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getUV(e,n,i,r,s,o,a,l){return qo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qo=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Yn),l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l}static isFrontFacing(e,n,i,r){return yn.subVectors(i,n),jn.subVectors(e,n),yn.cross(jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),yn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return An.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return qo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qo=!0),An.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return An.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;wr.subVectors(r,i),Ar.subVectors(s,i),uu.subVectors(e,i);const l=wr.dot(uu),u=Ar.dot(uu);if(l<=0&&u<=0)return n.copy(i);cu.subVectors(e,r);const f=wr.dot(cu),h=Ar.dot(cu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(wr,o);fu.subVectors(e,s);const m=wr.dot(fu),x=Ar.dot(fu);if(x>=0&&m<=x)return n.copy(s);const v=m*u-l*x;if(v<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Ar,a);const p=f*x-m*h;if(p<=0&&h-f>=0&&m-x>=0)return Ah.subVectors(s,r),a=(h-f)/(h-f+(m-x)),n.copy(r).addScaledVector(Ah,a);const c=1/(p+v+d);return o=v*c,a=d*c,n.copy(i).addScaledVector(wr,o).addScaledVector(Ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let zx=0;class dl extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=es,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=pg,this.blendDst=mg,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=hc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kl,this.stencilZFail=Kl,this.stencilZPass=Kl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},$o={h:0,s:0,l:0};function du(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Le){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=xn.workingColorSpace){return this.r=e,this.g=n,this.b=i,xn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=xn.workingColorSpace){if(e=Sx(e,1),n=Vt(n,0,1),i=Vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=du(o,s,e+1/3),this.g=du(o,s,e),this.b=du(o,s,e-1/3)}return xn.toWorkingColorSpace(this,r),this}setStyle(e,n=Le){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Le){const i=bg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=eu(e.r),this.g=eu(e.g),this.b=eu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Le){return xn.fromWorkingColorSpace(bt.copy(this),e),Math.round(Vt(bt.r*255,0,255))*65536+Math.round(Vt(bt.g*255,0,255))*256+Math.round(Vt(bt.b*255,0,255))}getHexString(e=Le){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=xn.workingColorSpace){xn.fromWorkingColorSpace(bt.copy(this),n);const i=bt.r,r=bt.g,s=bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=xn.workingColorSpace){return xn.fromWorkingColorSpace(bt.copy(this),n),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Le){xn.fromWorkingColorSpace(bt.copy(this),e);const n=bt.r,i=bt.g,r=bt.b;return e!==Le?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mn),Mn.h+=e,Mn.s+=n,Mn.l+=i,this.setHSL(Mn.h,Mn.s,Mn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mn),e.getHSL($o);const i=Ql(Mn.h,$o.h,n),r=Ql(Mn.s,$o.s,n),s=Ql(Mn.l,$o.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Ke;Ke.NAMES=bg;class Sf extends dl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new O,Ko=new We;class kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ph,this.updateRange={offset:0,count:-1},this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ko.fromBufferAttribute(this,n),Ko.applyMatrix3(e),this.setXY(n,Ko.x,Ko.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ut.fromBufferAttribute(this,n),ut.applyMatrix3(e),this.setXYZ(n,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ut.fromBufferAttribute(this,n),ut.applyMatrix4(e),this.setXYZ(n,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ut.fromBufferAttribute(this,n),ut.applyNormalMatrix(e),this.setXYZ(n,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ut.fromBufferAttribute(this,n),ut.transformDirection(e),this.setXYZ(n,ut.x,ut.y,ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ho(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ho(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ho(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ho(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ph&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ug extends kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Dg extends kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class or extends kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let kx=0;const ln=new wt,hu=new rn,Rr=new O,Qt=new yo,bs=new yo,_t=new O;class gr extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ag(e)?Dg:Ug)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,n,i){return ln.makeTranslation(e,n,i),this.applyMatrix4(ln),this}scale(e,n,i){return ln.makeScale(e,n,i),this.applyMatrix4(ln),this}lookAt(e){return hu.lookAt(e),hu.updateMatrix(),this.applyMatrix4(hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new or(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Qt.min,bs.min),Qt.expandByPoint(_t),_t.addVectors(Qt.max,bs.max),Qt.expandByPoint(_t)):(Qt.expandByPoint(bs.min),Qt.expandByPoint(bs.max))}Qt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)_t.fromBufferAttribute(a,u),l&&(Rr.fromBufferAttribute(e,u),_t.add(Rr)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let w=0;w<a;w++)u[w]=new O,f[w]=new O;const h=new O,d=new O,m=new O,x=new We,v=new We,p=new We,c=new O,_=new O;function g(w,q,J){h.fromArray(r,w*3),d.fromArray(r,q*3),m.fromArray(r,J*3),x.fromArray(o,w*2),v.fromArray(o,q*2),p.fromArray(o,J*2),d.sub(h),m.sub(h),v.sub(x),p.sub(x);const F=1/(v.x*p.y-p.x*v.y);isFinite(F)&&(c.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(F),_.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(F),u[w].add(c),u[q].add(c),u[J].add(c),f[w].add(_),f[q].add(_),f[J].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let w=0,q=S.length;w<q;++w){const J=S[w],F=J.start,H=J.count;for(let G=F,Z=F+H;G<Z;G+=3)g(i[G+0],i[G+1],i[G+2])}const T=new O,R=new O,C=new O,P=new O;function y(w){C.fromArray(s,w*3),P.copy(C);const q=u[w];T.copy(q),T.sub(C.multiplyScalar(C.dot(q))).normalize(),R.crossVectors(P,q);const F=R.dot(f[w])<0?-1:1;l[w*4]=T.x,l[w*4+1]=T.y,l[w*4+2]=T.z,l[w*4+3]=F}for(let w=0,q=S.length;w<q;++w){const J=S[w],F=J.start,H=J.count;for(let G=F,Z=F+H;G<Z;G+=3)y(i[G+0]),y(i[G+1]),y(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,u=new O,f=new O,h=new O;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)_t.fromBufferAttribute(e,n),_t.normalize(),e.setXYZ(n,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let m=0,x=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*f;for(let c=0;c<f;c++)d[x++]=u[m++]}return new kn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rh=new wt,Wi=new bx,Zo=new xf,Ch=new O,Cr=new O,Lr=new O,Pr=new O,pu=new O,Qo=new O,Jo=new We,ea=new We,ta=new We,Lh=new O,Ph=new O,bh=new O,na=new O,ia=new O;class ti extends rn{constructor(e=new gr,n=new Sf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],h=s[l];f!==0&&(pu.fromBufferAttribute(h,e),o?Qo.addScaledVector(pu,f):Qo.addScaledVector(pu.sub(n),f))}n.add(Qo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(s),Wi.copy(e.ray).recast(e.near),!(Zo.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Zo,Ch)===null||Wi.origin.distanceToSquared(Ch)>(e.far-e.near)**2))&&(Rh.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(Rh),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Wi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const p=d[x],c=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,T=g;S<T;S+=3){const R=a.getX(S),C=a.getX(S+1),P=a.getX(S+2);r=ra(this,c,e,i,u,f,h,R,C,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=x,c=v;p<c;p+=3){const _=a.getX(p),g=a.getX(p+1),S=a.getX(p+2);r=ra(this,o,e,i,u,f,h,_,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const p=d[x],c=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,T=g;S<T;S+=3){const R=S,C=S+1,P=S+2;r=ra(this,c,e,i,u,f,h,R,C,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=x,c=v;p<c;p+=3){const _=p,g=p+1,S=p+2;r=ra(this,o,e,i,u,f,h,_,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Bx(t,e,n,i,r,s,o,a){let l;if(e.side===qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ni,a),l===null)return null;ia.copy(a),ia.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ia);return u<n.near||u>n.far?null:{distance:u,point:ia.clone(),object:t}}function ra(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Cr),t.getVertexPosition(l,Lr),t.getVertexPosition(u,Pr);const f=Bx(t,e,n,i,Cr,Lr,Pr,na);if(f){r&&(Jo.fromBufferAttribute(r,a),ea.fromBufferAttribute(r,l),ta.fromBufferAttribute(r,u),f.uv=An.getInterpolation(na,Cr,Lr,Pr,Jo,ea,ta,new We)),s&&(Jo.fromBufferAttribute(s,a),ea.fromBufferAttribute(s,l),ta.fromBufferAttribute(s,u),f.uv1=An.getInterpolation(na,Cr,Lr,Pr,Jo,ea,ta,new We),f.uv2=f.uv1),o&&(Lh.fromBufferAttribute(o,a),Ph.fromBufferAttribute(o,l),bh.fromBufferAttribute(o,u),f.normal=An.getInterpolation(na,Cr,Lr,Pr,Lh,Ph,bh,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new O,materialIndex:0};An.getNormal(Cr,Lr,Pr,h.normal),f.face=h}return f}class _s extends gr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new or(u,3)),this.setAttribute("normal",new or(f,3)),this.setAttribute("uv",new or(h,2));function x(v,p,c,_,g,S,T,R,C,P,y){const w=S/C,q=T/P,J=S/2,F=T/2,H=R/2,G=C+1,Z=P+1;let j=0,b=0;const B=new O;for(let z=0;z<Z;z++){const re=z*q-F;for(let U=0;U<G;U++){const K=U*w-J;B[v]=K*_,B[p]=re*g,B[c]=H,u.push(B.x,B.y,B.z),B[v]=0,B[p]=0,B[c]=R>0?1:-1,f.push(B.x,B.y,B.z),h.push(U/C),h.push(1-z/P),j+=1}}for(let z=0;z<P;z++)for(let re=0;re<C;re++){const U=d+re+G*z,K=d+re+G*(z+1),$=d+(re+1)+G*(z+1),ce=d+(re+1)+G*z;l.push(U,K,ce),l.push(K,$,ce),b+=6}a.addGroup(m,b,y),m+=b,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ft(t){const e={};for(let n=0;n<t.length;n++){const i=ds(t[n]);for(const r in i)e[r]=i[r]}return e}function Hx(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ig(t){return t.getRenderTarget()===null?t.outputColorSpace:Bn}const Gx={clone:ds,merge:Ft};var Vx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends dl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vx,this.fragmentShader=Wx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=Hx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ng extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends Ng{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xc*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Zl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const br=-90,Ur=1;class Xx extends rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new dn(br,Ur,e,n);r.layers=this.layers,this.add(r);const s=new dn(br,Ur,e,n);s.layers=this.layers,this.add(s);const o=new dn(br,Ur,e,n);o.layers=this.layers,this.add(o);const a=new dn(br,Ur,e,n);a.layers=this.layers,this.add(a);const l=new dn(br,Ur,e,n);l.layers=this.layers,this.add(l);const u=new dn(br,Ur,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,f=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=ii,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(f),e.toneMapping=h,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Fg extends nn{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:us,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jx extends dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(js("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===rr?Le:sr),this.texture=new Fg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:fn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _s(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:bi});s.uniforms.tEquirect.value=n;const o=new ti(r,s),a=n.minFilter;return n.minFilter===fo&&(n.minFilter=fn),new Xx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const mu=new O,Yx=new O,qx=new be;class qi{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=mu.subVectors(i,n).cross(Yx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(mu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||qx.getNormalMatrix(e),r=this.coplanarPoint(mu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new xf,sa=new O;class Og{constructor(e=new qi,n=new qi,i=new qi,r=new qi,s=new qi,o=new qi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],x=r[9],v=r[10],p=r[11],c=r[12],_=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,p-m,S-c).normalize(),i[1].setComponents(l+s,d+u,p+m,S+c).normalize(),i[2].setComponents(l+o,d+f,p+x,S+_).normalize(),i[3].setComponents(l-o,d-f,p-x,S-_).normalize(),i[4].setComponents(l-a,d-h,p-v,S-g).normalize(),n===ei)i[5].setComponents(l+a,d+h,p+v,S+g).normalize();else if(n===ja)i[5].setComponents(a,h,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(sa.x=r.normal.x>0?e.max.x:e.min.x,sa.y=r.normal.y>0?e.max.y:e.min.y,sa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function $x(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,d=u.usage,m=t.createBuffer();t.bindBuffer(f,m),t.bufferData(f,h,d),u.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,f,h){const d=f.array,m=f.updateRange;t.bindBuffer(h,u),m.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,r(u,f)):h.version<u.version&&(s(h.buffer,u,f),h.version=u.version)}return{get:o,remove:a,update:l}}class yf extends gr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=n/l,m=[],x=[],v=[],p=[];for(let c=0;c<f;c++){const _=c*d-o;for(let g=0;g<u;g++){const S=g*h-s;x.push(S,-_,0),v.push(0,0,1),p.push(g/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const g=_+u*c,S=_+u*(c+1),T=_+1+u*(c+1),R=_+1+u*c;m.push(g,S,R),m.push(S,T,R)}this.setIndex(m),this.setAttribute("position",new or(x,3)),this.setAttribute("normal",new or(v,3)),this.setAttribute("uv",new or(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yf(e.width,e.height,e.widthSegments,e.heightSegments)}}var Kx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nS="vec3 transformed = vec3( position );",iS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_S=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MS="gl_FragColor = linearToOutputTexel( gl_FragColor );",ES=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,US=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,NS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,XS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,$S=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,QS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,JS=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ty=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ny=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ry=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ay=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ly=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,uy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,cy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,py=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,my=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_y=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,My=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ly=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Py=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,by=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ky=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,By=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hy=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gy=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vy=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ky=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zy=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Jy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,iM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sM=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,EM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pe={alphamap_fragment:Kx,alphamap_pars_fragment:Zx,alphatest_fragment:Qx,alphatest_pars_fragment:Jx,aomap_fragment:eS,aomap_pars_fragment:tS,begin_vertex:nS,beginnormal_vertex:iS,bsdfs:rS,iridescence_fragment:sS,bumpmap_pars_fragment:oS,clipping_planes_fragment:aS,clipping_planes_pars_fragment:lS,clipping_planes_pars_vertex:uS,clipping_planes_vertex:cS,color_fragment:fS,color_pars_fragment:dS,color_pars_vertex:hS,color_vertex:pS,common:mS,cube_uv_reflection_fragment:gS,defaultnormal_vertex:_S,displacementmap_pars_vertex:vS,displacementmap_vertex:xS,emissivemap_fragment:SS,emissivemap_pars_fragment:yS,encodings_fragment:MS,encodings_pars_fragment:ES,envmap_fragment:TS,envmap_common_pars_fragment:wS,envmap_pars_fragment:AS,envmap_pars_vertex:RS,envmap_physical_pars_fragment:kS,envmap_vertex:CS,fog_vertex:LS,fog_pars_vertex:PS,fog_fragment:bS,fog_pars_fragment:US,gradientmap_pars_fragment:DS,lightmap_fragment:IS,lightmap_pars_fragment:NS,lights_lambert_fragment:FS,lights_lambert_pars_fragment:OS,lights_pars_begin:zS,lights_toon_fragment:BS,lights_toon_pars_fragment:HS,lights_phong_fragment:GS,lights_phong_pars_fragment:VS,lights_physical_fragment:WS,lights_physical_pars_fragment:XS,lights_fragment_begin:jS,lights_fragment_maps:YS,lights_fragment_end:qS,logdepthbuf_fragment:$S,logdepthbuf_pars_fragment:KS,logdepthbuf_pars_vertex:ZS,logdepthbuf_vertex:QS,map_fragment:JS,map_pars_fragment:ey,map_particle_fragment:ty,map_particle_pars_fragment:ny,metalnessmap_fragment:iy,metalnessmap_pars_fragment:ry,morphcolor_vertex:sy,morphnormal_vertex:oy,morphtarget_pars_vertex:ay,morphtarget_vertex:ly,normal_fragment_begin:uy,normal_fragment_maps:cy,normal_pars_fragment:fy,normal_pars_vertex:dy,normal_vertex:hy,normalmap_pars_fragment:py,clearcoat_normal_fragment_begin:my,clearcoat_normal_fragment_maps:gy,clearcoat_pars_fragment:_y,iridescence_pars_fragment:vy,output_fragment:xy,packing:Sy,premultiplied_alpha_fragment:yy,project_vertex:My,dithering_fragment:Ey,dithering_pars_fragment:Ty,roughnessmap_fragment:wy,roughnessmap_pars_fragment:Ay,shadowmap_pars_fragment:Ry,shadowmap_pars_vertex:Cy,shadowmap_vertex:Ly,shadowmask_pars_fragment:Py,skinbase_vertex:by,skinning_pars_vertex:Uy,skinning_vertex:Dy,skinnormal_vertex:Iy,specularmap_fragment:Ny,specularmap_pars_fragment:Fy,tonemapping_fragment:Oy,tonemapping_pars_fragment:zy,transmission_fragment:ky,transmission_pars_fragment:By,uv_pars_fragment:Hy,uv_pars_vertex:Gy,uv_vertex:Vy,worldpos_vertex:Wy,background_vert:Xy,background_frag:jy,backgroundCube_vert:Yy,backgroundCube_frag:qy,cube_vert:$y,cube_frag:Ky,depth_vert:Zy,depth_frag:Qy,distanceRGBA_vert:Jy,distanceRGBA_frag:eM,equirect_vert:tM,equirect_frag:nM,linedashed_vert:iM,linedashed_frag:rM,meshbasic_vert:sM,meshbasic_frag:oM,meshlambert_vert:aM,meshlambert_frag:lM,meshmatcap_vert:uM,meshmatcap_frag:cM,meshnormal_vert:fM,meshnormal_frag:dM,meshphong_vert:hM,meshphong_frag:pM,meshphysical_vert:mM,meshphysical_frag:gM,meshtoon_vert:_M,meshtoon_frag:vM,points_vert:xM,points_frag:SM,shadow_vert:yM,shadow_frag:MM,sprite_vert:EM,sprite_frag:TM},ie={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},Nn={basic:{uniforms:Ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Ft([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Ft([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Ft([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Ft([ie.points,ie.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Ft([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Ft([ie.common,ie.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Ft([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Ft([ie.sprite,ie.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Ft([ie.common,ie.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Ft([ie.lights,ie.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Nn.physical={uniforms:Ft([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const oa={r:0,b:0,g:0};function wM(t,e,n,i,r,s,o){const a=new Ke(0);let l=s===!0?0:1,u,f,h=null,d=0,m=null;function x(p,c){let _=!1,g=c.isScene===!0?c.background:null;switch(g&&g.isTexture&&(g=(c.backgroundBlurriness>0?n:e).get(g)),g===null?v(a,l):g&&g.isColor&&(v(g,1),_=!0),t.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),_=!0;break}(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===cl)?(f===void 0&&(f=new ti(new _s(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:ds(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=g.colorSpace!==Le,(h!==g||d!==g.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,h=g,d=g.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new ti(new yf(2,2),new hr({name:"BackgroundMaterial",uniforms:ds(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=g.colorSpace!==Le,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function v(p,c){p.getRGB(oa,Ig(t)),i.buffers.color.setClear(oa.r,oa.g,oa.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),l=c,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:x}}function AM(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,f=!1;function h(H,G,Z,j,b){let B=!1;if(o){const z=v(j,Z,G);u!==z&&(u=z,m(u.object)),B=c(H,j,Z,b),B&&_(H,j,Z,b)}else{const z=G.wireframe===!0;(u.geometry!==j.id||u.program!==Z.id||u.wireframe!==z)&&(u.geometry=j.id,u.program=Z.id,u.wireframe=z,B=!0)}b!==null&&n.update(b,t.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,P(H,G,Z,j),b!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(b).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(H){return i.isWebGL2?t.bindVertexArray(H):s.bindVertexArrayOES(H)}function x(H){return i.isWebGL2?t.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function v(H,G,Z){const j=Z.wireframe===!0;let b=a[H.id];b===void 0&&(b={},a[H.id]=b);let B=b[G.id];B===void 0&&(B={},b[G.id]=B);let z=B[j];return z===void 0&&(z=p(d()),B[j]=z),z}function p(H){const G=[],Z=[],j=[];for(let b=0;b<r;b++)G[b]=0,Z[b]=0,j[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:j,object:H,attributes:{},index:null}}function c(H,G,Z,j){const b=u.attributes,B=G.attributes;let z=0;const re=Z.getAttributes();for(const U in re)if(re[U].location>=0){const $=b[U];let ce=B[U];if(ce===void 0&&(U==="instanceMatrix"&&H.instanceMatrix&&(ce=H.instanceMatrix),U==="instanceColor"&&H.instanceColor&&(ce=H.instanceColor)),$===void 0||$.attribute!==ce||ce&&$.data!==ce.data)return!0;z++}return u.attributesNum!==z||u.index!==j}function _(H,G,Z,j){const b={},B=G.attributes;let z=0;const re=Z.getAttributes();for(const U in re)if(re[U].location>=0){let $=B[U];$===void 0&&(U==="instanceMatrix"&&H.instanceMatrix&&($=H.instanceMatrix),U==="instanceColor"&&H.instanceColor&&($=H.instanceColor));const ce={};ce.attribute=$,$&&$.data&&(ce.data=$.data),b[U]=ce,z++}u.attributes=b,u.attributesNum=z,u.index=j}function g(){const H=u.newAttributes;for(let G=0,Z=H.length;G<Z;G++)H[G]=0}function S(H){T(H,0)}function T(H,G){const Z=u.newAttributes,j=u.enabledAttributes,b=u.attributeDivisors;Z[H]=1,j[H]===0&&(t.enableVertexAttribArray(H),j[H]=1),b[H]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,G),b[H]=G)}function R(){const H=u.newAttributes,G=u.enabledAttributes;for(let Z=0,j=G.length;Z<j;Z++)G[Z]!==H[Z]&&(t.disableVertexAttribArray(Z),G[Z]=0)}function C(H,G,Z,j,b,B,z){z===!0?t.vertexAttribIPointer(H,G,Z,b,B):t.vertexAttribPointer(H,G,Z,j,b,B)}function P(H,G,Z,j){if(i.isWebGL2===!1&&(H.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const b=j.attributes,B=Z.getAttributes(),z=G.defaultAttributeValues;for(const re in B){const U=B[re];if(U.location>=0){let K=b[re];if(K===void 0&&(re==="instanceMatrix"&&H.instanceMatrix&&(K=H.instanceMatrix),re==="instanceColor"&&H.instanceColor&&(K=H.instanceColor)),K!==void 0){const $=K.normalized,ce=K.itemSize,ue=n.get(K);if(ue===void 0)continue;const me=ue.buffer,Ue=ue.type,Ee=ue.bytesPerElement,mt=i.isWebGL2===!0&&(Ue===t.INT||Ue===t.UNSIGNED_INT||K.gpuType===vg);if(K.isInterleavedBufferAttribute){const ze=K.data,I=ze.stride,St=K.offset;if(ze.isInstancedInterleavedBuffer){for(let ye=0;ye<U.locationSize;ye++)T(U.location+ye,ze.meshPerAttribute);H.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let ye=0;ye<U.locationSize;ye++)S(U.location+ye);t.bindBuffer(t.ARRAY_BUFFER,me);for(let ye=0;ye<U.locationSize;ye++)C(U.location+ye,ce/U.locationSize,Ue,$,I*Ee,(St+ce/U.locationSize*ye)*Ee,mt)}else{if(K.isInstancedBufferAttribute){for(let ze=0;ze<U.locationSize;ze++)T(U.location+ze,K.meshPerAttribute);H.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ze=0;ze<U.locationSize;ze++)S(U.location+ze);t.bindBuffer(t.ARRAY_BUFFER,me);for(let ze=0;ze<U.locationSize;ze++)C(U.location+ze,ce/U.locationSize,Ue,$,ce*Ee,ce/U.locationSize*ze*Ee,mt)}}else if(z!==void 0){const $=z[re];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(U.location,$);break;case 3:t.vertexAttrib3fv(U.location,$);break;case 4:t.vertexAttrib4fv(U.location,$);break;default:t.vertexAttrib1fv(U.location,$)}}}}R()}function y(){J();for(const H in a){const G=a[H];for(const Z in G){const j=G[Z];for(const b in j)x(j[b].object),delete j[b];delete G[Z]}delete a[H]}}function w(H){if(a[H.id]===void 0)return;const G=a[H.id];for(const Z in G){const j=G[Z];for(const b in j)x(j[b].object),delete j[b];delete G[Z]}delete a[H.id]}function q(H){for(const G in a){const Z=a[G];if(Z[H.id]===void 0)continue;const j=Z[H.id];for(const b in j)x(j[b].object),delete j[b];delete Z[H.id]}}function J(){F(),f=!0,u!==l&&(u=l,m(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:F,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:q,initAttributes:g,enableAttribute:S,disableUnusedAttributes:R}}function RM(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,h){if(h===0)return;let d,m;if(r)d=t,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,u,f,h),n.update(f,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function CM(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,S=o||e.has("OES_texture_float"),T=g&&S,R=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:R}}function LM(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new qi,a=new be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const x=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,c=t.get(h);if(!r||x===null||x.length===0||s&&!p)s?f(null):u();else{const _=s?0:i,g=_*4;let S=c.clippingState||null;l.value=S,S=f(x,d,g,m);for(let T=0;T!==g;++T)S[T]=n[T];c.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,x){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const c=m+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<c)&&(p=new Float32Array(c));for(let g=0,S=m;g!==v;++g,S+=4)o.copy(h[g]).applyMatrix4(_,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function PM(t){let e=new WeakMap;function n(o,a){return a===pc?o.mapping=us:a===mc&&(o.mapping=cs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===pc||a===mc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new jx(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class bM extends Ng{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Yr=4,Uh=[.125,.215,.35,.446,.526,.582],Ki=20,gu=new bM,Dh=new Ke;let _u=null;const $i=(1+Math.sqrt(5))/2,Dr=1/$i,Ih=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,$i,Dr),new O(0,$i,-Dr),new O(Dr,0,$i),new O(-Dr,0,$i),new O($i,Dr,0),new O(-$i,Dr,0)];class Nh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){_u=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_u),e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===us||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_u=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ho,format:Cn,colorSpace:Bn,depthBuffer:!1},r=Fh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UM(s)),this._blurMaterial=DM(s,e,n)}return r}_compileMaterial(e){const n=new ti(this._lodPlanes[0],e);this._renderer.compile(n,gu)}_sceneToCubeUV(e,n,i,r){const a=new dn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Dh),f.toneMapping=ii,f.autoClear=!1;const m=new Sf({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),x=new ti(new _s,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Dh),v=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):_===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;aa(r,_*g,c>2?g:0,g,g),f.setRenderTarget(r),v&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===us||e.mapping===cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ti(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;aa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,gu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ih[(r-1)%Ih.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new ti(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ki-1),v=s/x,p=isFinite(s)?1+Math.floor(f*v):Ki;p>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ki}`);const c=[];let _=0;for(let C=0;C<Ki;++C){const P=C/v,y=Math.exp(-P*P/2);c.push(y),C===0?_+=y:C<p&&(_+=2*y)}for(let C=0;C<c.length;C++)c[C]=c[C]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=x,d.mipInt.value=g-i;const S=this._sizeLods[r],T=3*S*(r>g-Yr?r-g+Yr:0),R=4*(this._cubeSize-S);aa(n,T,R,3*S,2*S),l.setRenderTarget(n),l.render(h,gu)}}function UM(t){const e=[],n=[],i=[];let r=t;const s=t-Yr+1+Uh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Yr?l=Uh[o-t+Yr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,x=6,v=3,p=2,c=1,_=new Float32Array(v*x*m),g=new Float32Array(p*x*m),S=new Float32Array(c*x*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,P=R>2?0:-1,y=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];_.set(y,v*x*R),g.set(d,p*x*R);const w=[R,R,R,R,R,R];S.set(w,c*x*R)}const T=new gr;T.setAttribute("position",new kn(_,v)),T.setAttribute("uv",new kn(g,p)),T.setAttribute("faceIndex",new kn(S,c)),e.push(T),r>Yr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Fh(t,e,n){const i=new dr(t,e,n);return i.texture.mapping=cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function aa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function DM(t,e,n){const i=new Float32Array(Ki),r=new O(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Oh(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function zh(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Mf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===pc||l===mc,f=l===us||l===cs;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Nh(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Nh(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function NM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function FM(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let p=0,c=v.length;p<c;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const v=m[x];for(let p=0,c=v.length;p<c;p++)e.update(v[p],t.ARRAY_BUFFER)}}function u(h){const d=[],m=h.index,x=h.attributes.position;let v=0;if(m!==null){const _=m.array;v=m.version;for(let g=0,S=_.length;g<S;g+=3){const T=_[g+0],R=_[g+1],C=_[g+2];d.push(T,R,R,C,C,T)}}else{const _=x.array;v=x.version;for(let g=0,S=_.length/3-1;g<S;g+=3){const T=g+0,R=g+1,C=g+2;d.push(T,R,R,C,C,T)}}const p=new(Ag(d)?Dg:Ug)(d,1);p.version=v;const c=s.get(h);c&&e.remove(c),s.set(h,p)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function OM(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function f(d,m){t.drawElements(s,m,a,d*l),n.update(m,s,1)}function h(d,m,x){if(x===0)return;let v,p;if(r)v=t,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,a,d*l,x),n.update(m,s,x)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h}function zM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function kM(t,e){return t[0]-e[0]}function BM(t,e){return Math.abs(e[1])-Math.abs(t[1])}function HM(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Et,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=x!==void 0?x.length:0;let p=s.get(f);if(p===void 0||p.count!==v){let G=function(){F.dispose(),s.delete(f),f.removeEventListener("dispose",G)};var m=G;p!==void 0&&p.texture.dispose();const g=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,T=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let y=0;g===!0&&(y=1),S===!0&&(y=2),T===!0&&(y=3);let w=f.attributes.position.count*y,q=1;w>e.maxTextureSize&&(q=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const J=new Float32Array(w*q*4*v),F=new Lg(J,w,q,v);F.type=Mi,F.needsUpdate=!0;const H=y*4;for(let Z=0;Z<v;Z++){const j=R[Z],b=C[Z],B=P[Z],z=w*q*4*Z;for(let re=0;re<j.count;re++){const U=re*H;g===!0&&(o.fromBufferAttribute(j,re),J[z+U+0]=o.x,J[z+U+1]=o.y,J[z+U+2]=o.z,J[z+U+3]=0),S===!0&&(o.fromBufferAttribute(b,re),J[z+U+4]=o.x,J[z+U+5]=o.y,J[z+U+6]=o.z,J[z+U+7]=0),T===!0&&(o.fromBufferAttribute(B,re),J[z+U+8]=o.x,J[z+U+9]=o.y,J[z+U+10]=o.z,J[z+U+11]=B.itemSize===4?o.w:1)}}p={count:v,texture:F,size:new We(w,q)},s.set(f,p),f.addEventListener("dispose",G)}let c=0;for(let g=0;g<d.length;g++)c+=d[g];const _=f.morphTargetsRelative?1:1-c;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let v=i[f.id];if(v===void 0||v.length!==x){v=[];for(let S=0;S<x;S++)v[S]=[S,0];i[f.id]=v}for(let S=0;S<x;S++){const T=v[S];T[0]=S,T[1]=d[S]}v.sort(BM);for(let S=0;S<8;S++)S<x&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(kM);const p=f.morphAttributes.position,c=f.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const T=a[S],R=T[0],C=T[1];R!==Number.MAX_SAFE_INTEGER&&C?(p&&f.getAttribute("morphTarget"+S)!==p[R]&&f.setAttribute("morphTarget"+S,p[R]),c&&f.getAttribute("morphNormal"+S)!==c[R]&&f.setAttribute("morphNormal"+S,c[R]),r[S]=C,_+=C):(p&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),c&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),r[S]=0)}const g=f.morphTargetsRelative?1:1-_;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function GM(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);return r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const kg=new nn,Bg=new Lg,Hg=new Lx,Gg=new Fg,kh=[],Bh=[],Hh=new Float32Array(16),Gh=new Float32Array(9),Vh=new Float32Array(4);function vs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=kh[r];if(s===void 0&&(s=new Float32Array(r),kh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hl(t,e){let n=Bh[e];n===void 0&&(n=new Int32Array(e),Bh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function VM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function WM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ht(n,e))return;t.uniform2fv(this.addr,e),pt(n,e)}}function XM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ht(n,e))return;t.uniform3fv(this.addr,e),pt(n,e)}}function jM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ht(n,e))return;t.uniform4fv(this.addr,e),pt(n,e)}}function YM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),pt(n,e)}else{if(ht(n,i))return;Vh.set(i),t.uniformMatrix2fv(this.addr,!1,Vh),pt(n,i)}}function qM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),pt(n,e)}else{if(ht(n,i))return;Gh.set(i),t.uniformMatrix3fv(this.addr,!1,Gh),pt(n,i)}}function $M(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),pt(n,e)}else{if(ht(n,i))return;Hh.set(i),t.uniformMatrix4fv(this.addr,!1,Hh),pt(n,i)}}function KM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ZM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ht(n,e))return;t.uniform2iv(this.addr,e),pt(n,e)}}function QM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ht(n,e))return;t.uniform3iv(this.addr,e),pt(n,e)}}function JM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ht(n,e))return;t.uniform4iv(this.addr,e),pt(n,e)}}function eE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ht(n,e))return;t.uniform2uiv(this.addr,e),pt(n,e)}}function nE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ht(n,e))return;t.uniform3uiv(this.addr,e),pt(n,e)}}function iE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ht(n,e))return;t.uniform4uiv(this.addr,e),pt(n,e)}}function rE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||kg,r)}function sE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Hg,r)}function oE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Gg,r)}function aE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Bg,r)}function lE(t){switch(t){case 5126:return VM;case 35664:return WM;case 35665:return XM;case 35666:return jM;case 35674:return YM;case 35675:return qM;case 35676:return $M;case 5124:case 35670:return KM;case 35667:case 35671:return ZM;case 35668:case 35672:return QM;case 35669:case 35673:return JM;case 5125:return eE;case 36294:return tE;case 36295:return nE;case 36296:return iE;case 35678:case 36198:case 36298:case 36306:case 35682:return rE;case 35679:case 36299:case 36307:return sE;case 35680:case 36300:case 36308:case 36293:return oE;case 36289:case 36303:case 36311:case 36292:return aE}}function uE(t,e){t.uniform1fv(this.addr,e)}function cE(t,e){const n=vs(e,this.size,2);t.uniform2fv(this.addr,n)}function fE(t,e){const n=vs(e,this.size,3);t.uniform3fv(this.addr,n)}function dE(t,e){const n=vs(e,this.size,4);t.uniform4fv(this.addr,n)}function hE(t,e){const n=vs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pE(t,e){const n=vs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mE(t,e){const n=vs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gE(t,e){t.uniform1iv(this.addr,e)}function _E(t,e){t.uniform2iv(this.addr,e)}function vE(t,e){t.uniform3iv(this.addr,e)}function xE(t,e){t.uniform4iv(this.addr,e)}function SE(t,e){t.uniform1uiv(this.addr,e)}function yE(t,e){t.uniform2uiv(this.addr,e)}function ME(t,e){t.uniform3uiv(this.addr,e)}function EE(t,e){t.uniform4uiv(this.addr,e)}function TE(t,e,n){const i=this.cache,r=e.length,s=hl(n,r);ht(i,s)||(t.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||kg,s[o])}function wE(t,e,n){const i=this.cache,r=e.length,s=hl(n,r);ht(i,s)||(t.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Hg,s[o])}function AE(t,e,n){const i=this.cache,r=e.length,s=hl(n,r);ht(i,s)||(t.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Gg,s[o])}function RE(t,e,n){const i=this.cache,r=e.length,s=hl(n,r);ht(i,s)||(t.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Bg,s[o])}function CE(t){switch(t){case 5126:return uE;case 35664:return cE;case 35665:return fE;case 35666:return dE;case 35674:return hE;case 35675:return pE;case 35676:return mE;case 5124:case 35670:return gE;case 35667:case 35671:return _E;case 35668:case 35672:return vE;case 35669:case 35673:return xE;case 5125:return SE;case 36294:return yE;case 36295:return ME;case 36296:return EE;case 35678:case 36198:case 36298:case 36306:case 35682:return TE;case 35679:case 36299:case 36307:return wE;case 35680:case 36300:case 36308:case 36293:return AE;case 36289:case 36303:case 36311:case 36292:return RE}}class LE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=lE(n.type)}}class PE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=CE(n.type)}}class bE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const vu=/(\w+)(\])?(\[|\.)?/g;function Wh(t,e){t.seq.push(e),t.map[e.id]=e}function UE(t,e,n){const i=t.name,r=i.length;for(vu.lastIndex=0;;){const s=vu.exec(i),o=vu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Wh(n,u===void 0?new LE(a,t,e):new PE(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new bE(a),Wh(n,h)),n=h}}}class ya{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);UE(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Xh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let DE=0;function IE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function NE(t){switch(t){case Bn:return["Linear","( value )"];case Le:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function jh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+IE(t.getShaderSource(e),o)}else return r}function FE(t,e){const n=NE(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function OE(t,e){let n;switch(e){case j0:n="Linear";break;case Y0:n="Reinhard";break;case q0:n="OptimizedCineon";break;case $0:n="ACESFilmic";break;case K0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function zE(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fs).join(`
`)}function kE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function BE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Fs(t){return t!==""}function Yh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HE=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(t){return t.replace(HE,GE)}function GE(t,e){const n=Pe[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return yc(n)}const VE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $h(t){return t.replace(VE,WE)}function WE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kh(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===hg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===T0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function jE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case us:case cs:e="ENVMAP_TYPE_CUBE";break;case cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function qE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case gg:e="ENVMAP_BLENDING_MULTIPLY";break;case W0:e="ENVMAP_BLENDING_MIX";break;case X0:e="ENVMAP_BLENDING_ADD";break}return e}function $E(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function KE(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=XE(n),u=jE(n),f=YE(n),h=qE(n),d=$E(n),m=n.isWebGL2?"":zE(n),x=kE(s),v=r.createProgram();let p,c,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Fs).join(`
`),p.length>0&&(p+=`
`),c=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Fs).join(`
`),c.length>0&&(c+=`
`)):(p=[Kh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),c=[m,Kh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ii?"#define TONE_MAPPING":"",n.toneMapping!==ii?Pe.tonemapping_pars_fragment:"",n.toneMapping!==ii?OE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,FE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fs).join(`
`)),o=yc(o),o=Yh(o,n),o=qh(o,n),a=yc(a),a=Yh(a,n),a=qh(a,n),o=$h(o),a=$h(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",n.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const g=_+p+o,S=_+c+a,T=Xh(r,r.VERTEX_SHADER,g),R=Xh(r,r.FRAGMENT_SHADER,S);if(r.attachShader(v,T),r.attachShader(v,R),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),t.debug.checkShaderErrors){const y=r.getProgramInfoLog(v).trim(),w=r.getShaderInfoLog(T).trim(),q=r.getShaderInfoLog(R).trim();let J=!0,F=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,T,R);else{const H=jh(r,T,"vertex"),G=jh(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+H+`
`+G)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(w===""||q==="")&&(F=!1);F&&(this.diagnostics={runnable:J,programLog:y,vertexShader:{log:w,prefix:p},fragmentShader:{log:q,prefix:c}})}r.deleteShader(T),r.deleteShader(R);let C;this.getUniforms=function(){return C===void 0&&(C=new ya(r,v)),C};let P;return this.getAttributes=function(){return P===void 0&&(P=BE(r,v)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=DE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=R,this}let ZE=0;class QE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new JE(e),n.set(e,i)),i}}class JE{constructor(e){this.id=ZE++,this.code=e,this.usedTimes=0}}function eT(t,e,n,i,r,s,o){const a=new Pg,l=new QE,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return y===0?"uv":`uv${y}`}function p(y,w,q,J,F){const H=J.fog,G=F.geometry,Z=y.isMeshStandardMaterial?J.environment:null,j=(y.isMeshStandardMaterial?n:e).get(y.envMap||Z),b=j&&j.mapping===cl?j.image.height:null,B=x[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const z=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,re=z!==void 0?z.length:0;let U=0;G.morphAttributes.position!==void 0&&(U=1),G.morphAttributes.normal!==void 0&&(U=2),G.morphAttributes.color!==void 0&&(U=3);let K,$,ce,ue;if(B){const at=Nn[B];K=at.vertexShader,$=at.fragmentShader}else K=y.vertexShader,$=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),ue=l.getFragmentShaderID(y);const me=t.getRenderTarget(),Ue=F.isInstancedMesh===!0,Ee=!!y.map,mt=!!y.matcap,ze=!!j,I=!!y.aoMap,St=!!y.lightMap,ye=!!y.bumpMap,De=!!y.normalMap,Te=!!y.displacementMap,Ye=!!y.emissiveMap,Fe=!!y.metalnessMap,Re=!!y.roughnessMap,Ve=y.anisotropy>0,yt=y.clearcoat>0,Rt=y.iridescence>0,A=y.sheen>0,M=y.transmission>0,W=Ve&&!!y.anisotropyMap,ee=yt&&!!y.clearcoatMap,te=yt&&!!y.clearcoatNormalMap,oe=yt&&!!y.clearcoatRoughnessMap,ge=Rt&&!!y.iridescenceMap,ae=Rt&&!!y.iridescenceThicknessMap,Y=A&&!!y.sheenColorMap,_e=A&&!!y.sheenRoughnessMap,ve=!!y.specularMap,Se=!!y.specularColorMap,he=!!y.specularIntensityMap,pe=M&&!!y.transmissionMap,Ie=M&&!!y.thicknessMap,Xe=!!y.gradientMap,L=!!y.alphaMap,se=y.alphaTest>0,k=!!y.extensions,ne=!!G.attributes.uv1,le=!!G.attributes.uv2,He=!!G.attributes.uv3;return{isWebGL2:f,shaderID:B,shaderType:y.type,shaderName:y.name,vertexShader:K,fragmentShader:$,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Bn,map:Ee,matcap:mt,envMap:ze,envMapMode:ze&&j.mapping,envMapCubeUVHeight:b,aoMap:I,lightMap:St,bumpMap:ye,normalMap:De,displacementMap:d&&Te,emissiveMap:Ye,normalMapObjectSpace:De&&y.normalMapType===cx,normalMapTangentSpace:De&&y.normalMapType===ux,metalnessMap:Fe,roughnessMap:Re,anisotropy:Ve,anisotropyMap:W,clearcoat:yt,clearcoatMap:ee,clearcoatNormalMap:te,clearcoatRoughnessMap:oe,iridescence:Rt,iridescenceMap:ge,iridescenceThicknessMap:ae,sheen:A,sheenColorMap:Y,sheenRoughnessMap:_e,specularMap:ve,specularColorMap:Se,specularIntensityMap:he,transmission:M,transmissionMap:pe,thicknessMap:Ie,gradientMap:Xe,opaque:y.transparent===!1&&y.blending===es,alphaMap:L,alphaTest:se,combine:y.combine,mapUv:Ee&&v(y.map.channel),aoMapUv:I&&v(y.aoMap.channel),lightMapUv:St&&v(y.lightMap.channel),bumpMapUv:ye&&v(y.bumpMap.channel),normalMapUv:De&&v(y.normalMap.channel),displacementMapUv:Te&&v(y.displacementMap.channel),emissiveMapUv:Ye&&v(y.emissiveMap.channel),metalnessMapUv:Fe&&v(y.metalnessMap.channel),roughnessMapUv:Re&&v(y.roughnessMap.channel),anisotropyMapUv:W&&v(y.anisotropyMap.channel),clearcoatMapUv:ee&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(y.sheenRoughnessMap.channel),specularMapUv:ve&&v(y.specularMap.channel),specularColorMapUv:Se&&v(y.specularColorMap.channel),specularIntensityMapUv:he&&v(y.specularIntensityMap.channel),transmissionMapUv:pe&&v(y.transmissionMap.channel),thicknessMapUv:Ie&&v(y.thicknessMap.channel),alphaMapUv:L&&v(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(De||Ve),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:ne,vertexUv2s:le,vertexUv3s:He,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(Ee||L),fog:!!H,useFog:y.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:U,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&q.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:ii,useLegacyLights:t.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Zn,flipSided:y.side===qt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:k&&y.extensions.derivatives===!0,extensionFragDepth:k&&y.extensions.fragDepth===!0,extensionDrawBuffers:k&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:k&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function c(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const q in y.defines)w.push(q),w.push(y.defines[q]);return y.isRawShaderMaterial===!1&&(_(w,y),g(w,y),w.push(t.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function _(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function g(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),y.push(a.mask)}function S(y){const w=x[y.type];let q;if(w){const J=Nn[w];q=Gx.clone(J.uniforms)}else q=y.uniforms;return q}function T(y,w){let q;for(let J=0,F=u.length;J<F;J++){const H=u[J];if(H.cacheKey===w){q=H,++q.usedTimes;break}}return q===void 0&&(q=new KE(t,w,y,s),u.push(q)),q}function R(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:S,acquireProgram:T,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:P}}function tT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function nT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Zh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,m,x,v,p){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:m,groupOrder:x,renderOrder:h.renderOrder,z:v,group:p},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=m,c.groupOrder=x,c.renderOrder=h.renderOrder,c.z=v,c.group=p),e++,c}function a(h,d,m,x,v,p){const c=o(h,d,m,x,v,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(h,d,m,x,v,p){const c=o(h,d,m,x,v,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||nT),i.length>1&&i.sort(d||Zh),r.length>1&&r.sort(d||Zh)}function f(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function iT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Qh,t.set(i,[o])):r>=s.length?(o=new Qh,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function rT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Ke};break;case"SpotLight":n={position:new O,direction:new O,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function sT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let oT=0;function aT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function lT(t,e){const n=new rT,i=sT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new O);const s=new O,o=new wt,a=new wt;function l(f,h){let d=0,m=0,x=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let v=0,p=0,c=0,_=0,g=0,S=0,T=0,R=0,C=0,P=0;f.sort(aT);const y=h===!0?Math.PI:1;for(let q=0,J=f.length;q<J;q++){const F=f[q],H=F.color,G=F.intensity,Z=F.distance,j=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=H.r*G*y,m+=H.g*G*y,x+=H.b*G*y;else if(F.isLightProbe)for(let b=0;b<9;b++)r.probe[b].addScaledVector(F.sh.coefficients[b],G);else if(F.isDirectionalLight){const b=n.get(F);if(b.color.copy(F.color).multiplyScalar(F.intensity*y),F.castShadow){const B=F.shadow,z=i.get(F);z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,r.directionalShadow[v]=z,r.directionalShadowMap[v]=j,r.directionalShadowMatrix[v]=F.shadow.matrix,S++}r.directional[v]=b,v++}else if(F.isSpotLight){const b=n.get(F);b.position.setFromMatrixPosition(F.matrixWorld),b.color.copy(H).multiplyScalar(G*y),b.distance=Z,b.coneCos=Math.cos(F.angle),b.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),b.decay=F.decay,r.spot[c]=b;const B=F.shadow;if(F.map&&(r.spotLightMap[C]=F.map,C++,B.updateMatrices(F),F.castShadow&&P++),r.spotLightMatrix[c]=B.matrix,F.castShadow){const z=i.get(F);z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,r.spotShadow[c]=z,r.spotShadowMap[c]=j,R++}c++}else if(F.isRectAreaLight){const b=n.get(F);b.color.copy(H).multiplyScalar(G),b.halfWidth.set(F.width*.5,0,0),b.halfHeight.set(0,F.height*.5,0),r.rectArea[_]=b,_++}else if(F.isPointLight){const b=n.get(F);if(b.color.copy(F.color).multiplyScalar(F.intensity*y),b.distance=F.distance,b.decay=F.decay,F.castShadow){const B=F.shadow,z=i.get(F);z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,z.shadowCameraNear=B.camera.near,z.shadowCameraFar=B.camera.far,r.pointShadow[p]=z,r.pointShadowMap[p]=j,r.pointShadowMatrix[p]=F.shadow.matrix,T++}r.point[p]=b,p++}else if(F.isHemisphereLight){const b=n.get(F);b.skyColor.copy(F.color).multiplyScalar(G*y),b.groundColor.copy(F.groundColor).multiplyScalar(G*y),r.hemi[g]=b,g++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const w=r.hash;(w.directionalLength!==v||w.pointLength!==p||w.spotLength!==c||w.rectAreaLength!==_||w.hemiLength!==g||w.numDirectionalShadows!==S||w.numPointShadows!==T||w.numSpotShadows!==R||w.numSpotMaps!==C)&&(r.directional.length=v,r.spot.length=c,r.rectArea.length=_,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=R+C-P,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=P,w.directionalLength=v,w.pointLength=p,w.spotLength=c,w.rectAreaLength=_,w.hemiLength=g,w.numDirectionalShadows=S,w.numPointShadows=T,w.numSpotShadows=R,w.numSpotMaps=C,r.version=oT++)}function u(f,h){let d=0,m=0,x=0,v=0,p=0;const c=h.matrixWorldInverse;for(let _=0,g=f.length;_<g;_++){const S=f[_];if(S.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(c),d++}else if(S.isSpotLight){const T=r.spot[x];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(c),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(c),x++}else if(S.isRectAreaLight){const T=r.rectArea[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(c),a.identity(),o.copy(S.matrixWorld),o.premultiply(c),a.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(c),m++}else if(S.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(c),p++}}}return{setup:l,setupView:u,state:r}}function Jh(t,e){const n=new lT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function uT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Jh(t,e),n.set(s,[l])):o>=a.length?(l=new Jh(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class cT extends dl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ax,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fT extends dl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pT(t,e,n){let i=new Og;const r=new We,s=new We,o=new Et,a=new cT({depthPacking:lx}),l=new fT,u={},f=n.maxTextureSize,h={[Ni]:qt,[qt]:Ni,[Zn]:Zn},d=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:dT,fragmentShader:hT}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new gr;x.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ti(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hg;let c=this.type;this.render=function(T,R,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const P=t.getRenderTarget(),y=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),q=t.state;q.setBlending(bi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const J=c!==qn&&this.type===qn,F=c===qn&&this.type!==qn;for(let H=0,G=T.length;H<G;H++){const Z=T[H],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const b=j.getFrameExtents();if(r.multiply(b),s.copy(j.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/b.x),r.x=s.x*b.x,j.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/b.y),r.y=s.y*b.y,j.mapSize.y=s.y)),j.map===null||J===!0||F===!0){const z=this.type!==qn?{minFilter:zt,magFilter:zt}:{};j.map!==null&&j.map.dispose(),j.map=new dr(r.x,r.y,z),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}t.setRenderTarget(j.map),t.clear();const B=j.getViewportCount();for(let z=0;z<B;z++){const re=j.getViewport(z);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),q.viewport(o),j.updateMatrices(Z,z),i=j.getFrustum(),S(R,C,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===qn&&_(j,C),j.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(P,y,w)};function _(T,R){const C=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new dr(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(R,null,C,d,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(R,null,C,m,v,null)}function g(T,R,C,P){let y=null;const w=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)y=w;else if(y=C.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const q=y.uuid,J=R.uuid;let F=u[q];F===void 0&&(F={},u[q]=F);let H=F[J];H===void 0&&(H=y.clone(),F[J]=H),y=H}if(y.visible=R.visible,y.wireframe=R.wireframe,P===qn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const q=t.properties.get(y);q.light=C}return y}function S(T,R,C,P,y){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===qn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const J=e.update(T),F=T.material;if(Array.isArray(F)){const H=J.groups;for(let G=0,Z=H.length;G<Z;G++){const j=H[G],b=F[j.materialIndex];if(b&&b.visible){const B=g(T,b,P,y);t.renderBufferDirect(C,null,J,B,T,j)}}}else if(F.visible){const H=g(T,F,P,y);t.renderBufferDirect(C,null,J,H,T,null)}}const q=T.children;for(let J=0,F=q.length;J<F;J++)S(q[J],R,C,P,y)}}function mT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const se=new Et;let k=null;const ne=new Et(0,0,0,0);return{setMask:function(le){k!==le&&!L&&(t.colorMask(le,le,le,le),k=le)},setLocked:function(le){L=le},setClear:function(le,He,nt,at,ki){ki===!0&&(le*=at,He*=at,nt*=at),se.set(le,He,nt,at),ne.equals(se)===!1&&(t.clearColor(le,He,nt,at),ne.copy(se))},reset:function(){L=!1,k=null,ne.set(-1,0,0,0)}}}function s(){let L=!1,se=null,k=null,ne=null;return{setTest:function(le){le?me(t.DEPTH_TEST):Ue(t.DEPTH_TEST)},setMask:function(le){se!==le&&!L&&(t.depthMask(le),se=le)},setFunc:function(le){if(k!==le){switch(le){case O0:t.depthFunc(t.NEVER);break;case z0:t.depthFunc(t.ALWAYS);break;case k0:t.depthFunc(t.LESS);break;case hc:t.depthFunc(t.LEQUAL);break;case B0:t.depthFunc(t.EQUAL);break;case H0:t.depthFunc(t.GEQUAL);break;case G0:t.depthFunc(t.GREATER);break;case V0:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}k=le}},setLocked:function(le){L=le},setClear:function(le){ne!==le&&(t.clearDepth(le),ne=le)},reset:function(){L=!1,se=null,k=null,ne=null}}}function o(){let L=!1,se=null,k=null,ne=null,le=null,He=null,nt=null,at=null,ki=null;return{setTest:function(it){L||(it?me(t.STENCIL_TEST):Ue(t.STENCIL_TEST))},setMask:function(it){se!==it&&!L&&(t.stencilMask(it),se=it)},setFunc:function(it,Un,It){(k!==it||ne!==Un||le!==It)&&(t.stencilFunc(it,Un,It),k=it,ne=Un,le=It)},setOp:function(it,Un,It){(He!==it||nt!==Un||at!==It)&&(t.stencilOp(it,Un,It),He=it,nt=Un,at=It)},setLocked:function(it){L=it},setClear:function(it){ki!==it&&(t.clearStencil(it),ki=it)},reset:function(){L=!1,se=null,k=null,ne=null,le=null,He=null,nt=null,at=null,ki=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,h=new WeakMap;let d={},m={},x=new WeakMap,v=[],p=null,c=!1,_=null,g=null,S=null,T=null,R=null,C=null,P=null,y=!1,w=null,q=null,J=null,F=null,H=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,j=0;const b=t.getParameter(t.VERSION);b.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(b)[1]),Z=j>=1):b.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(b)[1]),Z=j>=2);let B=null,z={};const re=t.getParameter(t.SCISSOR_BOX),U=t.getParameter(t.VIEWPORT),K=new Et().fromArray(re),$=new Et().fromArray(U);function ce(L,se,k,ne){const le=new Uint8Array(4),He=t.createTexture();t.bindTexture(L,He),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<k;nt++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(se,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(se+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return He}const ue={};ue[t.TEXTURE_2D]=ce(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=ce(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ue[t.TEXTURE_2D_ARRAY]=ce(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=ce(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),me(t.DEPTH_TEST),l.setFunc(hc),Te(!1),Ye(zd),me(t.CULL_FACE),ye(bi);function me(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function Ue(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Ee(L,se){return m[L]!==se?(t.bindFramebuffer(L,se),m[L]=se,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=se),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=se)),!0):!1}function mt(L,se){let k=v,ne=!1;if(L)if(k=x.get(se),k===void 0&&(k=[],x.set(se,k)),L.isWebGLMultipleRenderTargets){const le=L.texture;if(k.length!==le.length||k[0]!==t.COLOR_ATTACHMENT0){for(let He=0,nt=le.length;He<nt;He++)k[He]=t.COLOR_ATTACHMENT0+He;k.length=le.length,ne=!0}}else k[0]!==t.COLOR_ATTACHMENT0&&(k[0]=t.COLOR_ATTACHMENT0,ne=!0);else k[0]!==t.BACK&&(k[0]=t.BACK,ne=!0);ne&&(n.isWebGL2?t.drawBuffers(k):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}function ze(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const I={[Ir]:t.FUNC_ADD,[A0]:t.FUNC_SUBTRACT,[R0]:t.FUNC_REVERSE_SUBTRACT};if(i)I[Gd]=t.MIN,I[Vd]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(I[Gd]=L.MIN_EXT,I[Vd]=L.MAX_EXT)}const St={[C0]:t.ZERO,[L0]:t.ONE,[P0]:t.SRC_COLOR,[pg]:t.SRC_ALPHA,[F0]:t.SRC_ALPHA_SATURATE,[I0]:t.DST_COLOR,[U0]:t.DST_ALPHA,[b0]:t.ONE_MINUS_SRC_COLOR,[mg]:t.ONE_MINUS_SRC_ALPHA,[N0]:t.ONE_MINUS_DST_COLOR,[D0]:t.ONE_MINUS_DST_ALPHA};function ye(L,se,k,ne,le,He,nt,at){if(L===bi){c===!0&&(Ue(t.BLEND),c=!1);return}if(c===!1&&(me(t.BLEND),c=!0),L!==w0){if(L!==_||at!==y){if((g!==Ir||R!==Ir)&&(t.blendEquation(t.FUNC_ADD),g=Ir,R=Ir),at)switch(L){case es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kd:t.blendFunc(t.ONE,t.ONE);break;case Bd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Bd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,T=null,C=null,P=null,_=L,y=at}return}le=le||se,He=He||k,nt=nt||ne,(se!==g||le!==R)&&(t.blendEquationSeparate(I[se],I[le]),g=se,R=le),(k!==S||ne!==T||He!==C||nt!==P)&&(t.blendFuncSeparate(St[k],St[ne],St[He],St[nt]),S=k,T=ne,C=He,P=nt),_=L,y=!1}function De(L,se){L.side===Zn?Ue(t.CULL_FACE):me(t.CULL_FACE);let k=L.side===qt;se&&(k=!k),Te(k),L.blending===es&&L.transparent===!1?ye(bi):ye(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ne=L.stencilWrite;u.setTest(ne),ne&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Re(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):Ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Te(L){w!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),w=L)}function Ye(L){L!==M0?(me(t.CULL_FACE),L!==q&&(L===zd?t.cullFace(t.BACK):L===E0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ue(t.CULL_FACE),q=L}function Fe(L){L!==J&&(Z&&t.lineWidth(L),J=L)}function Re(L,se,k){L?(me(t.POLYGON_OFFSET_FILL),(F!==se||H!==k)&&(t.polygonOffset(se,k),F=se,H=k)):Ue(t.POLYGON_OFFSET_FILL)}function Ve(L){L?me(t.SCISSOR_TEST):Ue(t.SCISSOR_TEST)}function yt(L){L===void 0&&(L=t.TEXTURE0+G-1),B!==L&&(t.activeTexture(L),B=L)}function Rt(L,se,k){k===void 0&&(B===null?k=t.TEXTURE0+G-1:k=B);let ne=z[k];ne===void 0&&(ne={type:void 0,texture:void 0},z[k]=ne),(ne.type!==L||ne.texture!==se)&&(B!==k&&(t.activeTexture(k),B=k),t.bindTexture(L,se||ue[L]),ne.type=L,ne.texture=se)}function A(){const L=z[B];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(L){K.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function he(L){$.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function pe(L,se){let k=h.get(se);k===void 0&&(k=new WeakMap,h.set(se,k));let ne=k.get(L);ne===void 0&&(ne=t.getUniformBlockIndex(se,L.name),k.set(L,ne))}function Ie(L,se){const ne=h.get(se).get(L);f.get(se)!==ne&&(t.uniformBlockBinding(se,ne,L.__bindingPointIndex),f.set(se,ne))}function Xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},B=null,z={},m={},x=new WeakMap,v=[],p=null,c=!1,_=null,g=null,S=null,T=null,R=null,C=null,P=null,y=!1,w=null,q=null,J=null,F=null,H=null,K.set(0,0,t.canvas.width,t.canvas.height),$.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:me,disable:Ue,bindFramebuffer:Ee,drawBuffers:mt,useProgram:ze,setBlending:ye,setMaterial:De,setFlipSided:Te,setCullFace:Ye,setLineWidth:Fe,setPolygonOffset:Re,setScissorTest:Ve,activeTexture:yt,bindTexture:Rt,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:_e,texImage3D:ve,updateUBOMapping:pe,uniformBlockBinding:Ie,texStorage2D:ae,texStorage3D:Y,texSubImage2D:ee,texSubImage3D:te,compressedTexSubImage2D:oe,compressedTexSubImage3D:ge,scissor:Se,viewport:he,reset:Xe}}function gT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const p=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return c?new OffscreenCanvas(A,M):Ya("canvas")}function g(A,M,W,ee){let te=1;if((A.width>ee||A.height>ee)&&(te=ee/Math.max(A.width,A.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const oe=M?Sc:Math.floor,ge=oe(te*A.width),ae=oe(te*A.height);v===void 0&&(v=_(ge,ae));const Y=W?_(ge,ae):v;return Y.width=ge,Y.height=ae,Y.getContext("2d").drawImage(A,0,0,ge,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ge+"x"+ae+")."),Y}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return gh(A.width)&&gh(A.height)}function T(A){return a?!1:A.wrapS!==Rn||A.wrapT!==Rn||A.minFilter!==zt&&A.minFilter!==fn}function R(A,M){return A.generateMipmaps&&M&&A.minFilter!==zt&&A.minFilter!==fn}function C(A){t.generateMipmap(A)}function P(A,M,W,ee,te=!1){if(a===!1)return M;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe=M;return M===t.RED&&(W===t.FLOAT&&(oe=t.R32F),W===t.HALF_FLOAT&&(oe=t.R16F),W===t.UNSIGNED_BYTE&&(oe=t.R8)),M===t.RG&&(W===t.FLOAT&&(oe=t.RG32F),W===t.HALF_FLOAT&&(oe=t.RG16F),W===t.UNSIGNED_BYTE&&(oe=t.RG8)),M===t.RGBA&&(W===t.FLOAT&&(oe=t.RGBA32F),W===t.HALF_FLOAT&&(oe=t.RGBA16F),W===t.UNSIGNED_BYTE&&(oe=ee===Le&&te===!1?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(oe=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(oe=t.RGB5_A1)),(oe===t.R16F||oe===t.R32F||oe===t.RG16F||oe===t.RG32F||oe===t.RGBA16F||oe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function y(A,M,W){return R(A,W)===!0||A.isFramebufferTexture&&A.minFilter!==zt&&A.minFilter!==fn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function w(A){return A===zt||A===Wd||A===Wl?t.NEAREST:t.LINEAR}function q(A){const M=A.target;M.removeEventListener("dispose",q),F(M),M.isVideoTexture&&x.delete(M)}function J(A){const M=A.target;M.removeEventListener("dispose",J),G(M)}function F(A){const M=i.get(A);if(M.__webglInit===void 0)return;const W=A.source,ee=p.get(W);if(ee){const te=ee[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&H(A),Object.keys(ee).length===0&&p.delete(W)}i.remove(A)}function H(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const W=A.source,ee=p.get(W);delete ee[M.__cacheKey],o.memory.textures--}function G(A){const M=A.texture,W=i.get(A),ee=i.get(M);if(ee.__webglTexture!==void 0&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)t.deleteFramebuffer(W.__webglFramebuffer[te]),W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer[te]);else{if(t.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&t.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let te=0;te<W.__webglColorRenderbuffer.length;te++)W.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(W.__webglColorRenderbuffer[te]);W.__webglDepthRenderbuffer&&t.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let te=0,oe=M.length;te<oe;te++){const ge=i.get(M[te]);ge.__webglTexture&&(t.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(M[te])}i.remove(M),i.remove(A)}let Z=0;function j(){Z=0}function b(){const A=Z;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),Z+=1,A}function B(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function z(A,M){const W=i.get(A);if(A.isVideoTexture&&yt(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(W,A,M);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+M)}function re(A,M){const W=i.get(A);if(A.version>0&&W.__version!==A.version){Ee(W,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+M)}function U(A,M){const W=i.get(A);if(A.version>0&&W.__version!==A.version){Ee(W,A,M);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+M)}function K(A,M){const W=i.get(A);if(A.version>0&&W.__version!==A.version){mt(W,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+M)}const $={[gc]:t.REPEAT,[Rn]:t.CLAMP_TO_EDGE,[_c]:t.MIRRORED_REPEAT},ce={[zt]:t.NEAREST,[Wd]:t.NEAREST_MIPMAP_NEAREST,[Wl]:t.NEAREST_MIPMAP_LINEAR,[fn]:t.LINEAR,[Z0]:t.LINEAR_MIPMAP_NEAREST,[fo]:t.LINEAR_MIPMAP_LINEAR},ue={[dx]:t.NEVER,[xx]:t.ALWAYS,[hx]:t.LESS,[mx]:t.LEQUAL,[px]:t.EQUAL,[vx]:t.GEQUAL,[gx]:t.GREATER,[_x]:t.NOTEQUAL};function me(A,M,W){if(W?(t.texParameteri(A,t.TEXTURE_WRAP_S,$[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,$[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,$[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ce[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ce[M.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Rn||M.wrapT!==Rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,w(M.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==zt&&M.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===zt||M.minFilter!==Wl&&M.minFilter!==fo||M.type===Mi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ho&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(A,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Ue(A,M){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",q));const ee=M.source;let te=p.get(ee);te===void 0&&(te={},p.set(ee,te));const oe=B(M);if(oe!==A.__cacheKey){te[oe]===void 0&&(te[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),te[oe].usedTimes++;const ge=te[A.__cacheKey];ge!==void 0&&(te[A.__cacheKey].usedTimes--,ge.usedTimes===0&&H(M)),A.__cacheKey=oe,A.__webglTexture=te[oe].texture}return W}function Ee(A,M,W){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const te=Ue(A,M),oe=M.source;n.bindTexture(ee,A.__webglTexture,t.TEXTURE0+W);const ge=i.get(oe);if(oe.version!==ge.__version||te===!0){n.activeTexture(t.TEXTURE0+W),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ae=T(M)&&S(M.image)===!1;let Y=g(M.image,ae,!1,f);Y=Rt(M,Y);const _e=S(Y)||a,ve=s.convert(M.format,M.colorSpace);let Se=s.convert(M.type),he=P(M.internalFormat,ve,Se,M.colorSpace);me(ee,M,_e);let pe;const Ie=M.mipmaps,Xe=a&&M.isVideoTexture!==!0,L=ge.__version===void 0||te===!0,se=y(M,Y,_e);if(M.isDepthTexture)he=t.DEPTH_COMPONENT,a?M.type===Mi?he=t.DEPTH_COMPONENT32F:M.type===yi?he=t.DEPTH_COMPONENT24:M.type===nr?he=t.DEPTH24_STENCIL8:he=t.DEPTH_COMPONENT16:M.type===Mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ir&&he===t.DEPTH_COMPONENT&&M.type!==vf&&M.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=yi,Se=s.convert(M.type)),M.format===fs&&he===t.DEPTH_COMPONENT&&(he=t.DEPTH_STENCIL,M.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=nr,Se=s.convert(M.type))),L&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,he,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,he,Y.width,Y.height,0,ve,Se,null));else if(M.isDataTexture)if(Ie.length>0&&_e){Xe&&L&&n.texStorage2D(t.TEXTURE_2D,se,he,Ie[0].width,Ie[0].height);for(let k=0,ne=Ie.length;k<ne;k++)pe=Ie[k],Xe?n.texSubImage2D(t.TEXTURE_2D,k,0,0,pe.width,pe.height,ve,Se,pe.data):n.texImage2D(t.TEXTURE_2D,k,he,pe.width,pe.height,0,ve,Se,pe.data);M.generateMipmaps=!1}else Xe?(L&&n.texStorage2D(t.TEXTURE_2D,se,he,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Y.width,Y.height,ve,Se,Y.data)):n.texImage2D(t.TEXTURE_2D,0,he,Y.width,Y.height,0,ve,Se,Y.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xe&&L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,he,Ie[0].width,Ie[0].height,Y.depth);for(let k=0,ne=Ie.length;k<ne;k++)pe=Ie[k],M.format!==Cn?ve!==null?Xe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,k,0,0,0,pe.width,pe.height,Y.depth,ve,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,k,he,pe.width,pe.height,Y.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,k,0,0,0,pe.width,pe.height,Y.depth,ve,Se,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,k,he,pe.width,pe.height,Y.depth,0,ve,Se,pe.data)}else{Xe&&L&&n.texStorage2D(t.TEXTURE_2D,se,he,Ie[0].width,Ie[0].height);for(let k=0,ne=Ie.length;k<ne;k++)pe=Ie[k],M.format!==Cn?ve!==null?Xe?n.compressedTexSubImage2D(t.TEXTURE_2D,k,0,0,pe.width,pe.height,ve,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,k,he,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?n.texSubImage2D(t.TEXTURE_2D,k,0,0,pe.width,pe.height,ve,Se,pe.data):n.texImage2D(t.TEXTURE_2D,k,he,pe.width,pe.height,0,ve,Se,pe.data)}else if(M.isDataArrayTexture)Xe?(L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,he,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ve,Se,Y.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,Y.width,Y.height,Y.depth,0,ve,Se,Y.data);else if(M.isData3DTexture)Xe?(L&&n.texStorage3D(t.TEXTURE_3D,se,he,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ve,Se,Y.data)):n.texImage3D(t.TEXTURE_3D,0,he,Y.width,Y.height,Y.depth,0,ve,Se,Y.data);else if(M.isFramebufferTexture){if(L)if(Xe)n.texStorage2D(t.TEXTURE_2D,se,he,Y.width,Y.height);else{let k=Y.width,ne=Y.height;for(let le=0;le<se;le++)n.texImage2D(t.TEXTURE_2D,le,he,k,ne,0,ve,Se,null),k>>=1,ne>>=1}}else if(Ie.length>0&&_e){Xe&&L&&n.texStorage2D(t.TEXTURE_2D,se,he,Ie[0].width,Ie[0].height);for(let k=0,ne=Ie.length;k<ne;k++)pe=Ie[k],Xe?n.texSubImage2D(t.TEXTURE_2D,k,0,0,ve,Se,pe):n.texImage2D(t.TEXTURE_2D,k,he,ve,Se,pe);M.generateMipmaps=!1}else Xe?(L&&n.texStorage2D(t.TEXTURE_2D,se,he,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Se,Y)):n.texImage2D(t.TEXTURE_2D,0,he,ve,Se,Y);R(M,_e)&&C(ee),ge.__version=oe.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function mt(A,M,W){if(M.image.length!==6)return;const ee=Ue(A,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+W);const oe=i.get(te);if(te.version!==oe.__version||ee===!0){n.activeTexture(t.TEXTURE0+W),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ge=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,Y=[];for(let k=0;k<6;k++)!ge&&!ae?Y[k]=g(M.image[k],!1,!0,u):Y[k]=ae?M.image[k].image:M.image[k],Y[k]=Rt(M,Y[k]);const _e=Y[0],ve=S(_e)||a,Se=s.convert(M.format,M.colorSpace),he=s.convert(M.type),pe=P(M.internalFormat,Se,he,M.colorSpace),Ie=a&&M.isVideoTexture!==!0,Xe=oe.__version===void 0||ee===!0;let L=y(M,_e,ve);me(t.TEXTURE_CUBE_MAP,M,ve);let se;if(ge){Ie&&Xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,L,pe,_e.width,_e.height);for(let k=0;k<6;k++){se=Y[k].mipmaps;for(let ne=0;ne<se.length;ne++){const le=se[ne];M.format!==Cn?Se!==null?Ie?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,0,0,le.width,le.height,Se,le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,pe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,0,0,le.width,le.height,Se,he,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,pe,le.width,le.height,0,Se,he,le.data)}}}else{se=M.mipmaps,Ie&&Xe&&(se.length>0&&L++,n.texStorage2D(t.TEXTURE_CUBE_MAP,L,pe,Y[0].width,Y[0].height));for(let k=0;k<6;k++)if(ae){Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Y[k].width,Y[k].height,Se,he,Y[k].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,pe,Y[k].width,Y[k].height,0,Se,he,Y[k].data);for(let ne=0;ne<se.length;ne++){const He=se[ne].image[k].image;Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,0,0,He.width,He.height,Se,he,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,pe,He.width,He.height,0,Se,he,He.data)}}else{Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Se,he,Y[k]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,pe,Se,he,Y[k]);for(let ne=0;ne<se.length;ne++){const le=se[ne];Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,0,0,Se,he,le.image[k]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,pe,Se,he,le.image[k])}}}R(M,ve)&&C(t.TEXTURE_CUBE_MAP),oe.__version=te.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ze(A,M,W,ee,te){const oe=s.convert(W.format,W.colorSpace),ge=s.convert(W.type),ae=P(W.internalFormat,oe,ge,W.colorSpace);i.get(M).__hasExternalTextures||(te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,0,ae,M.width,M.height,M.depth,0,oe,ge,null):n.texImage2D(te,0,ae,M.width,M.height,0,oe,ge,null)),n.bindFramebuffer(t.FRAMEBUFFER,A),Ve(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,te,i.get(W).__webglTexture,0,Re(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,te,i.get(W).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function I(A,M,W){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let ee=t.DEPTH_COMPONENT16;if(W||Ve(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===Mi?ee=t.DEPTH_COMPONENT32F:te.type===yi&&(ee=t.DEPTH_COMPONENT24));const oe=Re(M);Ve(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,ee,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,ee,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,ee,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const ee=Re(M);W&&Ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,M.width,M.height):Ve(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const ee=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<ee.length;te++){const oe=ee[te],ge=s.convert(oe.format,oe.colorSpace),ae=s.convert(oe.type),Y=P(oe.internalFormat,ge,ae,oe.colorSpace),_e=Re(M);W&&Ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,Y,M.width,M.height):Ve(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,Y,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Y,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function St(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,te=Re(M);if(M.depthTexture.format===ir)Ve(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===fs)Ve(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ye(A){const M=i.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");St(M.__webglFramebuffer,A)}else if(W){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=t.createRenderbuffer(),I(M.__webglDepthbuffer[ee],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),I(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(A,M,W){const ee=i.get(A);M!==void 0&&ze(ee.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),W!==void 0&&ye(A)}function Te(A){const M=A.texture,W=i.get(A),ee=i.get(M);A.addEventListener("dispose",J),A.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,o.memory.textures++);const te=A.isWebGLCubeRenderTarget===!0,oe=A.isWebGLMultipleRenderTargets===!0,ge=S(A)||a;if(te){W.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)W.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(W.__webglFramebuffer=t.createFramebuffer(),oe)if(r.drawBuffers){const ae=A.texture;for(let Y=0,_e=ae.length;Y<_e;Y++){const ve=i.get(ae[Y]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ve(A)===!1){const ae=oe?M:[M];W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Y=0;Y<ae.length;Y++){const _e=ae[Y];W.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[Y]);const ve=s.convert(_e.format,_e.colorSpace),Se=s.convert(_e.type),he=P(_e.internalFormat,ve,Se,_e.colorSpace,A.isXRRenderTarget===!0),pe=Re(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,he,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,W.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),I(W.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),me(t.TEXTURE_CUBE_MAP,M,ge);for(let ae=0;ae<6;ae++)ze(W.__webglFramebuffer[ae],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae);R(M,ge)&&C(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){const ae=A.texture;for(let Y=0,_e=ae.length;Y<_e;Y++){const ve=ae[Y],Se=i.get(ve);n.bindTexture(t.TEXTURE_2D,Se.__webglTexture),me(t.TEXTURE_2D,ve,ge),ze(W.__webglFramebuffer,A,ve,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D),R(ve,ge)&&C(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ae=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ae,ee.__webglTexture),me(ae,M,ge),ze(W.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,ae),R(M,ge)&&C(ae),n.unbindTexture()}A.depthBuffer&&ye(A)}function Ye(A){const M=S(A)||a,W=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0,te=W.length;ee<te;ee++){const oe=W[ee];if(R(oe,M)){const ge=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ae=i.get(oe).__webglTexture;n.bindTexture(ge,ae),C(ge),n.unbindTexture()}}}function Fe(A){if(a&&A.samples>0&&Ve(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],W=A.width,ee=A.height;let te=t.COLOR_BUFFER_BIT;const oe=[],ge=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(A),Y=A.isWebGLMultipleRenderTargets===!0;if(Y)for(let _e=0;_e<M.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){oe.push(t.COLOR_ATTACHMENT0+_e),A.depthBuffer&&oe.push(ge);const ve=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(ve===!1&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),Y&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[_e]),ve===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ge]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ge])),Y){const Se=i.get(M[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,W,ee,0,0,W,ee,te,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,oe)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let _e=0;_e<M.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,ae.__webglColorRenderbuffer[_e]);const ve=i.get(M[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Re(A){return Math.min(h,A.samples)}function Ve(A){const M=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function yt(A){const M=o.render.frame;x.get(A)!==M&&(x.set(A,M),A.update())}function Rt(A,M){const W=A.colorSpace,ee=A.format,te=A.type;return A.isCompressedTexture===!0||A.format===vc||W!==Bn&&W!==sr&&(W===Le?a===!1?e.has("EXT_sRGB")===!0&&ee===Cn?(A.format=vc,A.minFilter=fn,A.generateMipmaps=!1):M=Rg.sRGBToLinear(M):(ee!==Cn||te!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}this.allocateTextureUnit=b,this.resetTextureUnits=j,this.setTexture2D=z,this.setTexture2DArray=re,this.setTexture3D=U,this.setTextureCube=K,this.rebindTextures=De,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=Ve}function _T(t,e,n){const i=n.isWebGL2;function r(s,o=sr){let a;if(s===Ui)return t.UNSIGNED_BYTE;if(s===xg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Sg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Q0)return t.BYTE;if(s===J0)return t.SHORT;if(s===vf)return t.UNSIGNED_SHORT;if(s===vg)return t.INT;if(s===yi)return t.UNSIGNED_INT;if(s===Mi)return t.FLOAT;if(s===ho)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ex)return t.ALPHA;if(s===Cn)return t.RGBA;if(s===tx)return t.LUMINANCE;if(s===nx)return t.LUMINANCE_ALPHA;if(s===ir)return t.DEPTH_COMPONENT;if(s===fs)return t.DEPTH_STENCIL;if(s===vc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ix)return t.RED;if(s===yg)return t.RED_INTEGER;if(s===rx)return t.RG;if(s===Mg)return t.RG_INTEGER;if(s===Eg)return t.RGBA_INTEGER;if(s===Xl||s===jl||s===Yl||s===ql)if(o===Le)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Xl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Xl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ql)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xd||s===jd||s===Yd||s===qd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Xd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$d||s===Kd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===$d)return o===Le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Kd)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zd||s===Qd||s===Jd||s===eh||s===th||s===nh||s===ih||s===rh||s===sh||s===oh||s===ah||s===lh||s===uh||s===ch)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Zd)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qd)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jd)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===eh)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===th)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===nh)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ih)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===rh)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sh)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===oh)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ah)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lh)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===uh)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ch)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$l)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===$l)return o===Le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===ox||s===fh||s===dh||s===hh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===$l)return a.COMPRESSED_RED_RGTC1_EXT;if(s===fh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===dh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===nr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class vT extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class la extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xT={type:"move"};class xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new la,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new la,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new la,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const p=n.getJointPose(v,i),c=this._getHandJoint(u,v);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,x=.005;u.inputState.pinching&&d>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new la;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class ST extends nn{constructor(e,n,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:ir,f!==ir&&f!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ir&&(i=yi),i===void 0&&f===fs&&(i=nr),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class yT extends gs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,m=null,x=null;const v=n.getContextAttributes();let p=null,c=null;const _=[],g=[];let S=null;const T=new dn;T.layers.enable(1),T.viewport=new Et;const R=new dn;R.layers.enable(2),R.viewport=new Et;const C=[T,R],P=new vT;P.layers.enable(1),P.layers.enable(2);let y=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(U){S=U},this.getController=function(U){let K=_[U];return K===void 0&&(K=new xu,_[U]=K),K.getTargetRaySpace()},this.getControllerGrip=function(U){let K=_[U];return K===void 0&&(K=new xu,_[U]=K),K.getGripSpace()},this.getHand=function(U){let K=_[U];return K===void 0&&(K=new xu,_[U]=K),K.getHandSpace()};function q(U){const K=g.indexOf(U.inputSource);if(K===-1)return;const $=_[K];$!==void 0&&($.update(U.inputSource,U.frame,u||o),$.dispatchEvent({type:U.type,data:U.inputSource}))}function J(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",F);for(let U=0;U<_.length;U++){const K=g[U];K!==null&&(g[U]=null,_[U].disconnect(K))}y=null,w=null,e.setRenderTarget(p),m=null,d=null,h=null,r=null,c=null,re.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(U){u=U},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",J),r.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:m}),c=new dr(m.framebufferWidth,m.framebufferHeight,{format:Cn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,$=null,ce=null;v.depth&&(ce=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=v.stencil?fs:ir,$=v.stencil?nr:yi);const ue={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(ue),r.updateRenderState({layers:[d]}),c=new dr(d.textureWidth,d.textureHeight,{format:Cn,type:Ui,depthTexture:new ST(d.textureWidth,d.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const me=e.properties.get(c);me.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(U){for(let K=0;K<U.removed.length;K++){const $=U.removed[K],ce=g.indexOf($);ce>=0&&(g[ce]=null,_[ce].disconnect($))}for(let K=0;K<U.added.length;K++){const $=U.added[K];let ce=g.indexOf($);if(ce===-1){for(let me=0;me<_.length;me++)if(me>=g.length){g.push($),ce=me;break}else if(g[me]===null){g[me]=$,ce=me;break}if(ce===-1)break}const ue=_[ce];ue&&ue.connect($)}}const H=new O,G=new O;function Z(U,K,$){H.setFromMatrixPosition(K.matrixWorld),G.setFromMatrixPosition($.matrixWorld);const ce=H.distanceTo(G),ue=K.projectionMatrix.elements,me=$.projectionMatrix.elements,Ue=ue[14]/(ue[10]-1),Ee=ue[14]/(ue[10]+1),mt=(ue[9]+1)/ue[5],ze=(ue[9]-1)/ue[5],I=(ue[8]-1)/ue[0],St=(me[8]+1)/me[0],ye=Ue*I,De=Ue*St,Te=ce/(-I+St),Ye=Te*-I;K.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ye),U.translateZ(Te),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Fe=Ue+Te,Re=Ee+Te,Ve=ye-Ye,yt=De+(ce-Ye),Rt=mt*Ee/Re*Fe,A=ze*Ee/Re*Fe;U.projectionMatrix.makePerspective(Ve,yt,Rt,A,Fe,Re),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function j(U,K){K===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(K.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCameraXR=function(U){if(r===null)return U;S&&(U=S),P.near=R.near=T.near=U.near,P.far=R.far=T.far=U.far,(y!==P.near||w!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),y=P.near,w=P.far);const K=U.parent,$=P.cameras;j(P,K);for(let ce=0;ce<$.length;ce++)j($[ce],K);return $.length===2?Z(P,T,R):P.projectionMatrix.copy(T.projectionMatrix),S&&b(P,K),P};function b(U,K){const $=S;K===null?$.matrix.copy(U.matrixWorld):($.matrix.copy(K.matrixWorld),$.matrix.invert(),$.matrix.multiply(U.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0);const ce=$.children;for(let ue=0,me=ce.length;ue<me;ue++)ce[ue].updateMatrixWorld(!0);$.projectionMatrix.copy(U.projectionMatrix),$.projectionMatrixInverse.copy(U.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=xc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)};let B=null;function z(U,K){if(f=K.getViewerPose(u||o),x=K,f!==null){const $=f.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let ce=!1;$.length!==P.cameras.length&&(P.cameras.length=0,ce=!0);for(let ue=0;ue<$.length;ue++){const me=$[ue];let Ue=null;if(m!==null)Ue=m.getViewport(me);else{const mt=h.getViewSubImage(d,me);Ue=mt.viewport,ue===0&&(e.setRenderTargetTextures(c,mt.colorTexture,d.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(c))}let Ee=C[ue];Ee===void 0&&(Ee=new dn,Ee.layers.enable(ue),Ee.viewport=new Et,C[ue]=Ee),Ee.matrix.fromArray(me.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(me.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ue===0&&(P.matrix.copy(Ee.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),ce===!0&&P.cameras.push(Ee)}}for(let $=0;$<_.length;$++){const ce=g[$],ue=_[$];ce!==null&&ue!==void 0&&ue.update(ce,K,u||o)}B&&B(U,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}const re=new zg;re.setAnimationLoop(z),this.setAnimationLoop=function(U){B=U},this.dispose=function(){}}}function MT(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,Ig(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,_,g,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),h(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),d(p,c),c.isMeshPhysicalMaterial&&m(p,c,S)):c.isMeshMatcapMaterial?(s(p,c),x(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),v(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,_,g):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===qt&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===qt&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const _=e.get(c).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const g=t.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*g,n(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,_,g){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*_,p.scale.value=g*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function h(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function d(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,_){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===qt&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,c){c.matcap&&(p.matcap.value=c.matcap)}function v(p,c){const _=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ET(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const S=g.program;i.uniformBlockBinding(_,S)}function u(_,g){let S=r[_.id];S===void 0&&(x(_),S=f(_),r[_.id]=S,_.addEventListener("dispose",p));const T=g.program;i.updateUBOMapping(_,T);const R=e.render.frame;s[_.id]!==R&&(d(_),s[_.id]=R)}function f(_){const g=h();_.__bindingPointIndex=g;const S=t.createBuffer(),T=_.__size,R=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,T,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],S=_.uniforms,T=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let R=0,C=S.length;R<C;R++){const P=S[R];if(m(P,R,T)===!0){const y=P.__offset,w=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let J=0;J<w.length;J++){const F=w[J],H=v(F);typeof F=="number"?(P.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,y+q,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=F.elements[0],P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=F.elements[0],P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=F.elements[0]):(F.toArray(P.__data,q),q+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,y,P.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,S){const T=_.value;if(S[g]===void 0){if(typeof T=="number")S[g]=T;else{const R=Array.isArray(T)?T:[T],C=[];for(let P=0;P<R.length;P++)C.push(R[P].clone());S[g]=C}return!0}else if(typeof T=="number"){if(S[g]!==T)return S[g]=T,!0}else{const R=Array.isArray(S[g])?S[g]:[S[g]],C=Array.isArray(T)?T:[T];for(let P=0;P<R.length;P++){const y=R[P];if(y.equals(C[P])===!1)return y.copy(C[P]),!0}}return!1}function x(_){const g=_.uniforms;let S=0;const T=16;let R=0;for(let C=0,P=g.length;C<P;C++){const y=g[C],w={boundary:0,storage:0},q=Array.isArray(y.value)?y.value:[y.value];for(let J=0,F=q.length;J<F;J++){const H=q[J],G=v(H);w.boundary+=G.boundary,w.storage+=G.storage}if(y.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=S,C>0){R=S%T;const J=T-R;R!==0&&J-w.boundary<0&&(S+=T-R,y.__offset=S)}S+=w.storage}return R=S%T,R>0&&(S+=T-R),_.__size=S,_.__cache={},this}function v(_){const g={boundary:0,storage:0};return typeof _=="number"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function c(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}function TT(){const t=Ya("canvas");return t.style.display="block",t}class Vg{constructor(e={}){const{canvas:n=TT(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const c=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Le,this.useLegacyLights=!0,this.toneMapping=ii,this.toneMappingExposure=1;const g=this;let S=!1,T=0,R=0,C=null,P=-1,y=null;const w=new Et,q=new Et;let J=null;const F=new Ke(0);let H=0,G=n.width,Z=n.height,j=1,b=null,B=null;const z=new Et(0,0,G,Z),re=new Et(0,0,G,Z);let U=!1;const K=new Og;let $=!1,ce=!1,ue=null;const me=new wt,Ue=new We,Ee=new O,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return C===null?j:1}let I=i;function St(E,N){for(let V=0;V<E.length;V++){const D=E[V],X=n.getContext(D,N);if(X!==null)return X}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_f}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",k,!1),n.addEventListener("webglcontextcreationerror",ne,!1),I===null){const N=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&N.shift(),I=St(N,E),I===null)throw St(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ye,De,Te,Ye,Fe,Re,Ve,yt,Rt,A,M,W,ee,te,oe,ge,ae,Y,_e,ve,Se,he,pe,Ie;function Xe(){ye=new NM(I),De=new CM(I,ye,e),ye.init(De),he=new _T(I,ye,De),Te=new mT(I,ye,De),Ye=new zM(I),Fe=new tT,Re=new gT(I,ye,Te,Fe,De,he,Ye),Ve=new PM(g),yt=new IM(g),Rt=new $x(I,De),pe=new AM(I,ye,Rt,De),A=new FM(I,Rt,Ye,pe),M=new GM(I,A,Rt,Ye),_e=new HM(I,De,Re),ge=new LM(Fe),W=new eT(g,Ve,yt,ye,De,pe,ge),ee=new MT(g,Fe),te=new iT,oe=new uT(ye,De),Y=new wM(g,Ve,yt,Te,M,d,l),ae=new pT(g,M,De),Ie=new ET(I,Ye,De,Te),ve=new RM(I,ye,Ye,De),Se=new OM(I,ye,Ye,De),Ye.programs=W.programs,g.capabilities=De,g.extensions=ye,g.properties=Fe,g.renderLists=te,g.shadowMap=ae,g.state=Te,g.info=Ye}Xe();const L=new yT(g,I);this.xr=L,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(G,Z,!1))},this.getSize=function(E){return E.set(G,Z)},this.setSize=function(E,N,V=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,Z=N,n.width=Math.floor(E*j),n.height=Math.floor(N*j),V===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(G*j,Z*j).floor()},this.setDrawingBufferSize=function(E,N,V){G=E,Z=N,j=V,n.width=Math.floor(E*V),n.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(z)},this.setViewport=function(E,N,V,D){E.isVector4?z.set(E.x,E.y,E.z,E.w):z.set(E,N,V,D),Te.viewport(w.copy(z).multiplyScalar(j).floor())},this.getScissor=function(E){return E.copy(re)},this.setScissor=function(E,N,V,D){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,N,V,D),Te.scissor(q.copy(re).multiplyScalar(j).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(E){Te.setScissorTest(U=E)},this.setOpaqueSort=function(E){b=E},this.setTransparentSort=function(E){B=E},this.getClearColor=function(E){return E.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(E=!0,N=!0,V=!0){let D=0;if(E){let X=!1;if(C!==null){const de=C.texture.format;X=de===Eg||de===Mg||de===yg}if(X){const de=C.texture.type,xe=de===Ui||de===yi||de===vf||de===nr||de===xg||de===Sg,Me=Y.getClearColor(),we=Y.getClearAlpha(),Ne=Me.r,Ae=Me.g,Ce=Me.b,qe=Fe.get(C).__webglFramebuffer;xe?(m[0]=Ne,m[1]=Ae,m[2]=Ce,m[3]=we,I.clearBufferuiv(I.COLOR,qe,m)):(x[0]=Ne,x[1]=Ae,x[2]=Ce,x[3]=we,I.clearBufferiv(I.COLOR,qe,x))}else D|=I.COLOR_BUFFER_BIT}N&&(D|=I.DEPTH_BUFFER_BIT),V&&(D|=I.STENCIL_BUFFER_BIT),I.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",k,!1),n.removeEventListener("webglcontextcreationerror",ne,!1),te.dispose(),oe.dispose(),Fe.dispose(),Ve.dispose(),yt.dispose(),M.dispose(),pe.dispose(),Ie.dispose(),W.dispose(),L.dispose(),L.removeEventListener("sessionstart",it),L.removeEventListener("sessionend",Un),ue&&(ue.dispose(),ue=null),It.stop()};function se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Ye.autoReset,N=ae.enabled,V=ae.autoUpdate,D=ae.needsUpdate,X=ae.type;Xe(),Ye.autoReset=E,ae.enabled=N,ae.autoUpdate=V,ae.needsUpdate=D,ae.type=X}function ne(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function le(E){const N=E.target;N.removeEventListener("dispose",le),He(N)}function He(E){nt(E),Fe.remove(E)}function nt(E){const N=Fe.get(E).programs;N!==void 0&&(N.forEach(function(V){W.releaseProgram(V)}),E.isShaderMaterial&&W.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,D,X,de){N===null&&(N=mt);const xe=X.isMesh&&X.matrixWorld.determinant()<0,Me=Xg(E,N,V,D,X);Te.setMaterial(D,xe);let we=V.index,Ne=1;D.wireframe===!0&&(we=A.getWireframeAttribute(V),Ne=2);const Ae=V.drawRange,Ce=V.attributes.position;let qe=Ae.start*Ne,st=(Ae.start+Ae.count)*Ne;de!==null&&(qe=Math.max(qe,de.start*Ne),st=Math.min(st,(de.start+de.count)*Ne)),we!==null?(qe=Math.max(qe,0),st=Math.min(st,we.count)):Ce!=null&&(qe=Math.max(qe,0),st=Math.min(st,Ce.count));const _n=st-qe;if(_n<0||_n===1/0)return;pe.setup(X,D,Me,V,we);let Hn,lt=ve;if(we!==null&&(Hn=Rt.get(we),lt=Se,lt.setIndex(Hn)),X.isMesh)D.wireframe===!0?(Te.setLineWidth(D.wireframeLinewidth*ze()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(X.isLine){let ke=D.linewidth;ke===void 0&&(ke=1),Te.setLineWidth(ke*ze()),X.isLineSegments?lt.setMode(I.LINES):X.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else X.isPoints?lt.setMode(I.POINTS):X.isSprite&&lt.setMode(I.TRIANGLES);if(X.isInstancedMesh)lt.renderInstances(qe,_n,X.count);else if(V.isInstancedBufferGeometry){const ke=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,pl=Math.min(V.instanceCount,ke);lt.renderInstances(qe,_n,pl)}else lt.render(qe,_n)},this.compile=function(E,N){function V(D,X,de){D.transparent===!0&&D.side===Zn&&D.forceSinglePass===!1?(D.side=qt,D.needsUpdate=!0,Eo(D,X,de),D.side=Ni,D.needsUpdate=!0,Eo(D,X,de),D.side=Zn):Eo(D,X,de)}p=oe.get(E),p.init(),_.push(p),E.traverseVisible(function(D){D.isLight&&D.layers.test(N.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights(g.useLegacyLights),E.traverse(function(D){const X=D.material;if(X)if(Array.isArray(X))for(let de=0;de<X.length;de++){const xe=X[de];V(xe,E,D)}else V(X,E,D)}),_.pop(),p=null};let at=null;function ki(E){at&&at(E)}function it(){It.stop()}function Un(){It.start()}const It=new zg;It.setAnimationLoop(ki),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(E){at=E,L.setAnimationLoop(E),E===null?It.stop():It.start()},L.addEventListener("sessionstart",it),L.addEventListener("sessionend",Un),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(N=L.updateCameraXR(N)),E.isScene===!0&&E.onBeforeRender(g,E,N,C),p=oe.get(E,_.length),p.init(),_.push(p),me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(me),ce=this.localClippingEnabled,$=ge.init(this.clippingPlanes,ce),v=te.get(E,c.length),v.init(),c.push(v),Ef(E,N,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(b,B),$===!0&&ge.beginShadows();const V=p.state.shadowsArray;if(ae.render(V,E,N),$===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,Y.render(v,E),p.setupLights(g.useLegacyLights),N.isArrayCamera){const D=N.cameras;for(let X=0,de=D.length;X<de;X++){const xe=D[X];Tf(v,E,xe,xe.viewport)}}else Tf(v,E,N);C!==null&&(Re.updateMultisampleRenderTarget(C),Re.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(g,E,N),pe.resetDefaultState(),P=-1,y=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,c.pop(),c.length>0?v=c[c.length-1]:v=null};function Ef(E,N,V,D){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){D&&Ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(me);const xe=M.update(E),Me=E.material;Me.visible&&v.push(E,xe,Me,V,Ee.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||K.intersectsObject(E))){E.isSkinnedMesh&&E.skeleton.frame!==Ye.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ye.render.frame);const xe=M.update(E),Me=E.material;if(D&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ee.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ee.copy(xe.boundingSphere.center)),Ee.applyMatrix4(E.matrixWorld).applyMatrix4(me)),Array.isArray(Me)){const we=xe.groups;for(let Ne=0,Ae=we.length;Ne<Ae;Ne++){const Ce=we[Ne],qe=Me[Ce.materialIndex];qe&&qe.visible&&v.push(E,xe,qe,V,Ee.z,Ce)}}else Me.visible&&v.push(E,xe,Me,V,Ee.z,null)}}const de=E.children;for(let xe=0,Me=de.length;xe<Me;xe++)Ef(de[xe],N,V,D)}function Tf(E,N,V,D){const X=E.opaque,de=E.transmissive,xe=E.transparent;p.setupLightsView(V),$===!0&&ge.setGlobalState(g.clippingPlanes,V),de.length>0&&Wg(X,de,N,V),D&&Te.viewport(w.copy(D)),X.length>0&&Mo(X,N,V),de.length>0&&Mo(de,N,V),xe.length>0&&Mo(xe,N,V),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Wg(E,N,V,D){const X=De.isWebGL2;ue===null&&(ue=new dr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?ho:Ui,minFilter:fo,samples:X&&a===!0?4:0})),g.getDrawingBufferSize(Ue),X?ue.setSize(Ue.x,Ue.y):ue.setSize(Sc(Ue.x),Sc(Ue.y));const de=g.getRenderTarget();g.setRenderTarget(ue),g.getClearColor(F),H=g.getClearAlpha(),H<1&&g.setClearColor(16777215,.5),g.clear();const xe=g.toneMapping;g.toneMapping=ii,Mo(E,V,D),Re.updateMultisampleRenderTarget(ue),Re.updateRenderTargetMipmap(ue);let Me=!1;for(let we=0,Ne=N.length;we<Ne;we++){const Ae=N[we],Ce=Ae.object,qe=Ae.geometry,st=Ae.material,_n=Ae.group;if(st.side===Zn&&Ce.layers.test(D.layers)){const Hn=st.side;st.side=qt,st.needsUpdate=!0,wf(Ce,V,D,qe,st,_n),st.side=Hn,st.needsUpdate=!0,Me=!0}}Me===!0&&(Re.updateMultisampleRenderTarget(ue),Re.updateRenderTargetMipmap(ue)),g.setRenderTarget(de),g.setClearColor(F,H),g.toneMapping=xe}function Mo(E,N,V){const D=N.isScene===!0?N.overrideMaterial:null;for(let X=0,de=E.length;X<de;X++){const xe=E[X],Me=xe.object,we=xe.geometry,Ne=D===null?xe.material:D,Ae=xe.group;Me.layers.test(V.layers)&&wf(Me,N,V,we,Ne,Ae)}}function wf(E,N,V,D,X,de){E.onBeforeRender(g,N,V,D,X,de),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(g,N,V,D,E,de),X.transparent===!0&&X.side===Zn&&X.forceSinglePass===!1?(X.side=qt,X.needsUpdate=!0,g.renderBufferDirect(V,N,D,X,E,de),X.side=Ni,X.needsUpdate=!0,g.renderBufferDirect(V,N,D,X,E,de),X.side=Zn):g.renderBufferDirect(V,N,D,X,E,de),E.onAfterRender(g,N,V,D,X,de)}function Eo(E,N,V){N.isScene!==!0&&(N=mt);const D=Fe.get(E),X=p.state.lights,de=p.state.shadowsArray,xe=X.state.version,Me=W.getParameters(E,X.state,de,N,V),we=W.getProgramCacheKey(Me);let Ne=D.programs;D.environment=E.isMeshStandardMaterial?N.environment:null,D.fog=N.fog,D.envMap=(E.isMeshStandardMaterial?yt:Ve).get(E.envMap||D.environment),Ne===void 0&&(E.addEventListener("dispose",le),Ne=new Map,D.programs=Ne);let Ae=Ne.get(we);if(Ae!==void 0){if(D.currentProgram===Ae&&D.lightsStateVersion===xe)return Af(E,Me),Ae}else Me.uniforms=W.getUniforms(E),E.onBuild(V,Me,g),E.onBeforeCompile(Me,g),Ae=W.acquireProgram(Me,we),Ne.set(we,Ae),D.uniforms=Me.uniforms;const Ce=D.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=ge.uniform),Af(E,Me),D.needsLights=Yg(E),D.lightsStateVersion=xe,D.needsLights&&(Ce.ambientLightColor.value=X.state.ambient,Ce.lightProbe.value=X.state.probe,Ce.directionalLights.value=X.state.directional,Ce.directionalLightShadows.value=X.state.directionalShadow,Ce.spotLights.value=X.state.spot,Ce.spotLightShadows.value=X.state.spotShadow,Ce.rectAreaLights.value=X.state.rectArea,Ce.ltc_1.value=X.state.rectAreaLTC1,Ce.ltc_2.value=X.state.rectAreaLTC2,Ce.pointLights.value=X.state.point,Ce.pointLightShadows.value=X.state.pointShadow,Ce.hemisphereLights.value=X.state.hemi,Ce.directionalShadowMap.value=X.state.directionalShadowMap,Ce.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ce.spotShadowMap.value=X.state.spotShadowMap,Ce.spotLightMatrix.value=X.state.spotLightMatrix,Ce.spotLightMap.value=X.state.spotLightMap,Ce.pointShadowMap.value=X.state.pointShadowMap,Ce.pointShadowMatrix.value=X.state.pointShadowMatrix);const qe=Ae.getUniforms(),st=ya.seqWithValue(qe.seq,Ce);return D.currentProgram=Ae,D.uniformsList=st,Ae}function Af(E,N){const V=Fe.get(E);V.outputColorSpace=N.outputColorSpace,V.instancing=N.instancing,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Xg(E,N,V,D,X){N.isScene!==!0&&(N=mt),Re.resetTextureUnits();const de=N.fog,xe=D.isMeshStandardMaterial?N.environment:null,Me=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Bn,we=(D.isMeshStandardMaterial?yt:Ve).get(D.envMap||xe),Ne=D.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ae=!!V.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),Ce=!!V.morphAttributes.position,qe=!!V.morphAttributes.normal,st=!!V.morphAttributes.color,_n=D.toneMapped?g.toneMapping:ii,Hn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,lt=Hn!==void 0?Hn.length:0,ke=Fe.get(D),pl=p.state.lights;if($===!0&&(ce===!0||E!==y)){const $t=E===y&&D.id===P;ge.setState(D,E,$t)}let gt=!1;D.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==pl.state.version||ke.outputColorSpace!==Me||X.isInstancedMesh&&ke.instancing===!1||!X.isInstancedMesh&&ke.instancing===!0||X.isSkinnedMesh&&ke.skinning===!1||!X.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==we||D.fog===!0&&ke.fog!==de||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ge.numPlanes||ke.numIntersection!==ge.numIntersection)||ke.vertexAlphas!==Ne||ke.vertexTangents!==Ae||ke.morphTargets!==Ce||ke.morphNormals!==qe||ke.morphColors!==st||ke.toneMapping!==_n||De.isWebGL2===!0&&ke.morphTargetsCount!==lt)&&(gt=!0):(gt=!0,ke.__version=D.version);let Bi=ke.currentProgram;gt===!0&&(Bi=Eo(D,N,X));let Rf=!1,xs=!1,ml=!1;const Nt=Bi.getUniforms(),Hi=ke.uniforms;if(Te.useProgram(Bi.program)&&(Rf=!0,xs=!0,ml=!0),D.id!==P&&(P=D.id,xs=!0),Rf||y!==E){if(Nt.setValue(I,"projectionMatrix",E.projectionMatrix),De.logarithmicDepthBuffer&&Nt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),y!==E&&(y=E,xs=!0,ml=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const $t=Nt.map.cameraPosition;$t!==void 0&&$t.setValue(I,Ee.setFromMatrixPosition(E.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Nt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||X.isSkinnedMesh)&&Nt.setValue(I,"viewMatrix",E.matrixWorldInverse)}if(X.isSkinnedMesh){Nt.setOptional(I,X,"bindMatrix"),Nt.setOptional(I,X,"bindMatrixInverse");const $t=X.skeleton;$t&&(De.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Nt.setValue(I,"boneTexture",$t.boneTexture,Re),Nt.setValue(I,"boneTextureSize",$t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const gl=V.morphAttributes;if((gl.position!==void 0||gl.normal!==void 0||gl.color!==void 0&&De.isWebGL2===!0)&&_e.update(X,V,Bi),(xs||ke.receiveShadow!==X.receiveShadow)&&(ke.receiveShadow=X.receiveShadow,Nt.setValue(I,"receiveShadow",X.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Hi.envMap.value=we,Hi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),xs&&(Nt.setValue(I,"toneMappingExposure",g.toneMappingExposure),ke.needsLights&&jg(Hi,ml),de&&D.fog===!0&&ee.refreshFogUniforms(Hi,de),ee.refreshMaterialUniforms(Hi,D,j,Z,ue),ya.upload(I,ke.uniformsList,Hi,Re)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(ya.upload(I,ke.uniformsList,Hi,Re),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Nt.setValue(I,"center",X.center),Nt.setValue(I,"modelViewMatrix",X.modelViewMatrix),Nt.setValue(I,"normalMatrix",X.normalMatrix),Nt.setValue(I,"modelMatrix",X.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const $t=D.uniformsGroups;for(let _l=0,qg=$t.length;_l<qg;_l++)if(De.isWebGL2){const Cf=$t[_l];Ie.update(Cf,Bi),Ie.bind(Cf,Bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bi}function jg(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Yg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,N,V){Fe.get(E.texture).__webglTexture=N,Fe.get(E.depthTexture).__webglTexture=V;const D=Fe.get(E);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=V===void 0,D.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const V=Fe.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,V=0){C=E,T=N,R=V;let D=!0,X=null,de=!1,xe=!1;if(E){const we=Fe.get(E);we.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(I.FRAMEBUFFER,null),D=!1):we.__webglFramebuffer===void 0?Re.setupRenderTarget(E):we.__hasExternalTextures&&Re.rebindTextures(E,Fe.get(E.texture).__webglTexture,Fe.get(E.depthTexture).__webglTexture);const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(xe=!0);const Ae=Fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(X=Ae[N],de=!0):De.isWebGL2&&E.samples>0&&Re.useMultisampledRTT(E)===!1?X=Fe.get(E).__webglMultisampledFramebuffer:X=Ae,w.copy(E.viewport),q.copy(E.scissor),J=E.scissorTest}else w.copy(z).multiplyScalar(j).floor(),q.copy(re).multiplyScalar(j).floor(),J=U;if(Te.bindFramebuffer(I.FRAMEBUFFER,X)&&De.drawBuffers&&D&&Te.drawBuffers(E,X),Te.viewport(w),Te.scissor(q),Te.setScissorTest(J),de){const we=Fe.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,V)}else if(xe){const we=Fe.get(E.texture),Ne=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.__webglTexture,V||0,Ne)}P=-1},this.readRenderTargetPixels=function(E,N,V,D,X,de,xe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){Te.bindFramebuffer(I.FRAMEBUFFER,Me);try{const we=E.texture,Ne=we.format,Ae=we.type;if(Ne!==Cn&&he.convert(Ne)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Ae===ho&&(ye.has("EXT_color_buffer_half_float")||De.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ae!==Ui&&he.convert(Ae)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ae===Mi&&(De.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-D&&V>=0&&V<=E.height-X&&I.readPixels(N,V,D,X,he.convert(Ne),he.convert(Ae),de)}finally{const we=C!==null?Fe.get(C).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(E,N,V=0){const D=Math.pow(2,-V),X=Math.floor(N.image.width*D),de=Math.floor(N.image.height*D);Re.setTexture2D(N,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,E.x,E.y,X,de),Te.unbindTexture()},this.copyTextureToTexture=function(E,N,V,D=0){const X=N.image.width,de=N.image.height,xe=he.convert(V.format),Me=he.convert(V.type);Re.setTexture2D(V,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment),N.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,D,E.x,E.y,X,de,xe,Me,N.image.data):N.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,D,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,xe,N.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,D,E.x,E.y,xe,Me,N.image),D===0&&V.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(E,N,V,D,X=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=E.max.x-E.min.x+1,xe=E.max.y-E.min.y+1,Me=E.max.z-E.min.z+1,we=he.convert(D.format),Ne=he.convert(D.type);let Ae;if(D.isData3DTexture)Re.setTexture3D(D,0),Ae=I.TEXTURE_3D;else if(D.isDataArrayTexture)Re.setTexture2DArray(D,0),Ae=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const Ce=I.getParameter(I.UNPACK_ROW_LENGTH),qe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),st=I.getParameter(I.UNPACK_SKIP_PIXELS),_n=I.getParameter(I.UNPACK_SKIP_ROWS),Hn=I.getParameter(I.UNPACK_SKIP_IMAGES),lt=V.isCompressedTexture?V.mipmaps[0]:V.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,lt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,E.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,E.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,E.min.z),V.isDataTexture||V.isData3DTexture?I.texSubImage3D(Ae,X,N.x,N.y,N.z,de,xe,Me,we,Ne,lt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ae,X,N.x,N.y,N.z,de,xe,Me,we,lt.data)):I.texSubImage3D(Ae,X,N.x,N.y,N.z,de,xe,Me,we,Ne,lt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,qe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,st),I.pixelStorei(I.UNPACK_SKIP_ROWS,_n),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Hn),X===0&&D.generateMipmaps&&I.generateMipmap(Ae),Te.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Re.setTextureCube(E,0):E.isData3DTexture?Re.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Re.setTexture2DArray(E,0):Re.setTexture2D(E,0),Te.unbindTexture()},this.resetState=function(){T=0,R=0,C=null,Te.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Le?rr:Tg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===rr?Le:Bn}}class wT extends Vg{}wT.prototype.isWebGL1Renderer=!0;class AT extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_f}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_f);const RT=()=>{const t=Ys.useRef(null);return Ys.useEffect(()=>{let e,n,i,r;const s=()=>{e=new AT,n=new dn(75,window.innerWidth/window.innerHeight,.1,1e3),n.position.z=5,i=new Vg({canvas:t.current}),i.setSize(1e3,1e3),i.setClearColor(16777215);const l=new _s(1,3,1),u=new Sf({color:28160});r=new ti(l,u),e.add(r)},o=()=>{requestAnimationFrame(o),robothubApi.onNotificationWithkey("rSchema/number",l=>{const u=l.payload.value.y,f=l.payload.value.x,h=l.payload.value.z;r.rotation.y=+u,r.rotation.x=+f,r.rotation.z=+h}),i.render(e,n)},a=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return s(),o(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a),i.dispose()}},[]),gi.jsx("canvas",{ref:t})};function CT(){return gi.jsxs(gi.Fragment,{children:[gi.jsx("h1",{children:"Hellooooo"}),gi.jsx("div",{style:{height:"100vh"},children:gi.jsx(RT,{})})]})}Su.createRoot(document.getElementById("root")).render(gi.jsx(f_.StrictMode,{children:gi.jsx(CT,{})}));
