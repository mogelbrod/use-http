parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"J4Nk":[function(require,module,exports) {
"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function o(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}module.exports=o()?Object.assign:function(o,c){for(var a,i,s=n(o),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))t.call(a,u)&&(s[u]=a[u]);if(r){i=r(a);for(var b=0;b<i.length;b++)e.call(a,i[b])&&(s[i[b]]=a[i[b]])}}return s};
},{}],"awqi":[function(require,module,exports) {
"use strict";var e=require("object-assign"),t="function"==typeof Symbol&&Symbol.for,r=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,o=t?Symbol.for("react.fragment"):60107,u=t?Symbol.for("react.strict_mode"):60108,l=t?Symbol.for("react.profiler"):60114,f=t?Symbol.for("react.provider"):60109,c=t?Symbol.for("react.context"):60110,i=t?Symbol.for("react.concurrent_mode"):60111,a=t?Symbol.for("react.forward_ref"):60112,s=t?Symbol.for("react.suspense"):60113,p=t?Symbol.for("react.memo"):60115,y=t?Symbol.for("react.lazy"):60116,d="function"==typeof Symbol&&Symbol.iterator;function v(e,t,r,n,o,u,l,f){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,u,l,f],i=0;(e=Error(t.replace(/%s/g,function(){return c[i++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}function m(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);v(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function _(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}function S(){}function k(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=_.prototype;var g=k.prototype=new S;g.constructor=k,e(g,_.prototype),g.isPureReactComponent=!0;var $={current:null},x={current:null},C=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var o=void 0,u={},l=null,f=null;if(null!=t)for(o in void 0!==t.ref&&(f=t.ref),void 0!==t.key&&(l=""+t.key),t)C.call(t,o)&&!w.hasOwnProperty(o)&&(u[o]=t[o]);var c=arguments.length-2;if(1===c)u.children=n;else if(1<c){for(var i=Array(c),a=0;a<c;a++)i[a]=arguments[a+2];u.children=i}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:r,type:e,key:l,ref:f,props:u,_owner:x.current}}function R(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}function j(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}var O=/\/+/g,A=[];function I(e,t,r,n){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function U(e,t,o,u){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var f=!1;if(null===e)f=!0;else switch(l){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case r:case n:f=!0}}if(f)return o(u,e,""===t?"."+F(e,0):t),1;if(f=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var i=t+F(l=e[c],c);f+=U(l,i,o,u)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=d&&e[d]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),c=0;!(l=e.next()).done;)f+=U(l=l.value,i=t+F(l,c++),o,u);else"object"===l&&m("31","[object Object]"===(o=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":o,"");return f}function q(e,t,r){return null==e?0:U(e,"",t,r)}function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?j(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function V(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,n,r,function(e){return e}):null!=e&&(E(e)&&(e=R(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(O,"$&/")+"/")+r)),n.push(e))}function D(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(O,"$&/")+"/"),q(e,V,t=I(t,u,n,o)),M(t)}function T(){var e=$.current;return null===e&&m("321"),e}var N={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return D(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;q(e,L,t=I(null,null,t,r)),M(t)},count:function(e){return q(e,function(){return null},null)},toArray:function(e){var t=[];return D(e,t,null,function(e){return e}),t},only:function(e){return E(e)||m("143"),e}},createRef:function(){return{current:null}},Component:_,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:a,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return T().useCallback(e,t)},useContext:function(e,t){return T().useContext(e,t)},useEffect:function(e,t){return T().useEffect(e,t)},useImperativeHandle:function(e,t,r){return T().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return T().useLayoutEffect(e,t)},useMemo:function(e,t){return T().useMemo(e,t)},useReducer:function(e,t,r){return T().useReducer(e,t,r)},useRef:function(e){return T().useRef(e)},useState:function(e){return T().useState(e)},Fragment:o,StrictMode:u,Suspense:s,createElement:P,cloneElement:function(t,n,o){null==t&&m("267",t);var u=void 0,l=e({},t.props),f=t.key,c=t.ref,i=t._owner;if(null!=n){void 0!==n.ref&&(c=n.ref,i=x.current),void 0!==n.key&&(f=""+n.key);var a=void 0;for(u in t.type&&t.type.defaultProps&&(a=t.type.defaultProps),n)C.call(n,u)&&!w.hasOwnProperty(u)&&(l[u]=void 0===n[u]&&void 0!==a?a[u]:n[u])}if(1===(u=arguments.length-2))l.children=o;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];l.children=a}return{$$typeof:r,type:t.type,key:f,ref:c,props:l,_owner:i}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.8.6",unstable_ConcurrentMode:i,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:$,ReactCurrentOwner:x,assign:e}},z={default:N},B=z&&N||z;module.exports=B.default||B;
},{"object-assign":"J4Nk"}],"1n8/":[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react.production.min.js");
},{"./cjs/react.production.min.js":"awqi"}],"RaX2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useFetch=p,exports.default=void 0;var e=require("react");function t(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t,r,n,o,u,a){try{var c=e[u](a),l=c.value}catch(i){return void r(i)}c.done?t(l):Promise.resolve(l).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(o,u){var a=e.apply(t,r);function c(e){n(a,o,u,c,l,"next",e)}function l(e){n(a,o,u,c,l,"throw",e)}c(void 0)})}}function u(e,t){return l(e)||c(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(l){o=!0,u=l}finally{try{n||null==c.return||c.return()}finally{if(o)throw u}}return r}function l(e){if(Array.isArray(e))return e}function i(e,t){if(null==e)return{};var r,n,o=s(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function s(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var f=function(e){return e===Object(e)&&"[object Array]"!==Object.prototype.toString.call(e)};function p(r,n){var a=null,c={},l=!1,s="",p="GET",b=function(e){e.url,e.onMount,e.timeout,e.baseUrl;var t=i(e,["url","onMount","timeout","baseUrl"]);c=t,e.url&&(a=e.url),e.onMount&&(l=e.onMount),e.method&&(p=e.method),e.baseUrl&&(s=e.baseUrl)};"string"==typeof r?(a=r,f(n)&&b(n)):f(r)&&b(r);var y=u((0,e.useState)(null),2),v=y[0],d=y[1],h=u((0,e.useState)(l),2),O=h[0],g=h[1],m=u((0,e.useState)(null),2),x=m[0],j=m[1],w=(0,e.useCallback)(function(e){return function(){var r=o(regeneratorRuntime.mark(function r(n,o){var u,l,i,p;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u="",l={},f(n)&&"get"!==e.toLowerCase()?l.body=JSON.stringify(n):s&&"string"==typeof n&&(a=s+n,f(o)&&(l.body=JSON.stringify(o))),"string"==typeof n&&"string"==typeof o&&(u=o),r.prev=4,g(!0),r.next=8,fetch(a+u,t({method:e},c,l));case 8:return i=r.sent,p=null,r.prev=10,r.next=13,i.json();case 13:p=r.sent,r.next=27;break;case 16:return r.prev=16,r.t0=r.catch(10),r.prev=18,r.next=21,i.text();case 21:p=r.sent,r.next=27;break;case 24:r.prev=24,r.t1=r.catch(18),j("Currently only supports JSON and Text response types: ".concat(r.t1));case 27:d(p),g(!1),r.next=34;break;case 31:r.prev=31,r.t2=r.catch(4),j(r.t2);case 34:case"end":return r.stop()}},r,null,[[4,31],[10,16],[18,24]])}));return function(e,t){return r.apply(this,arguments)}}()},[a]),S=(0,e.useCallback)(w("GET")),k=(0,e.useCallback)(w("POST")),P=(0,e.useCallback)(w("PATCH")),C=(0,e.useCallback)(w("PUT")),E=(0,e.useCallback)(w("DELETE")),T={get:S,post:k,patch:P,put:C,del:E,delete:E};return(0,e.useEffect)(function(){l&&T[p.toLowerCase()]()},[]),Object.assign([v,O,x,T],t({data:v,loading:O,error:x,request:T},T))}var b=p;exports.default=b;
},{"react":"1n8/"}],"EAVJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useGet=void 0;var e=t(require("./useFetch"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){n(e,t,r[t])})}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=function(t,n){var o=(0,e.default)(t,r({method:"GET"},n)),u=o.data,a=o.loading,c=o.error,i=o.get;return Object.assign([u,a,c,i],{data:u,loading:a,error:c,get:i})};exports.useGet=o;
},{"./useFetch":"RaX2"}],"mBUV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.usePost=void 0;var e=t(require("./useFetch"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){o(e,t,r[t])})}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var n=function(t,o){var n=(0,e.default)(t,r({method:"POST"},o)),u=n.data,a=n.loading,c=n.error,i=n.post;return Object.assign([u,a,c,i],{data:u,loading:a,error:c,post:i})};exports.usePost=n;
},{"./useFetch":"RaX2"}],"E8X0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.usePut=void 0;var e=t(require("./useFetch"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){n(e,t,r[t])})}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=function(t,n){var o=(0,e.default)(t,r({method:"PUT"},n)),u=o.data,a=o.loading,c=o.error,i=o.put;return Object.assign([u,a,c,i],{data:u,loading:a,error:c,put:i})};exports.usePut=o;
},{"./useFetch":"RaX2"}],"oGgw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.usePatch=void 0;var e=t(require("./useFetch"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){n(e,t,r[t])})}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=function(t,n){var o=(0,e.default)(t,r({method:"PATCH"},n)),u=o.data,a=o.loading,c=o.error,i=o.patch;return Object.assign([u,a,c,i],{data:u,loading:a,error:c,patch:i})};exports.usePatch=o;
},{"./useFetch":"RaX2"}],"UP5p":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useDelete=void 0;var e=t(require("./useFetch"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){n(e,t,r[t])})}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=function(t,n){var o=(0,e.default)(t,r({method:"DELETE"},n)),u=o.data,l=o.loading,a=o.error,c=o.del;return Object.assign([u,l,a,c],{data:u,loading:l,error:a,del:c,delete:c})};exports.useDelete=o;
},{"./useFetch":"RaX2"}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={};Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return t.default}});var t=a(require("./useFetch"));Object.keys(t).forEach(function(r){"default"!==r&&"__esModule"!==r&&(Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(exports,r,{enumerable:!0,get:function(){return t[r]}}))});var r=require("./useGet");Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return r[t]}}))});var o=require("./usePost");Object.keys(o).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return o[t]}}))});var n=require("./usePut");Object.keys(n).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return n[t]}}))});var u=require("./usePatch");Object.keys(u).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return u[t]}}))});var c=require("./useDelete");function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}Object.keys(c).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return c[t]}}))});
},{"./useFetch":"RaX2","./useGet":"EAVJ","./usePost":"mBUV","./usePut":"E8X0","./usePatch":"oGgw","./useDelete":"UP5p"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map