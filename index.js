// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).dmeanors=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function i(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=a(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=a(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function u(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function E(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":l(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,v,"e"),t=g.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),r.alternate&&(t=g.call(t,b,"$1."),t=g.call(t,y,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):f.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function x(r,e,t){var i=e-r.length;return i<0?r:r=t?r+j(i):j(i)+r}var k=String.fromCharCode,S=isNaN,_=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V(r){var e,t,i,n,o,c,l,f,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,f=0;f<r.length;f++)if(u(i=r[f]))c+=i;else{if(e=void 0!==i.precision,!(i=T(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,S(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=E(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),c+=i.arg||"",l+=1}return c}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,i,n;for(t=[],n=0,i=$.exec(r);i;)(e=r.slice(n,$.lastIndex-i[0].length)).length&&t.push(e),t.push(O(i)),n=$.lastIndex,i=$.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function F(r){return"string"==typeof r}function I(r){var e,t;if(!F(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return V.apply(null,e)}var C,R=Object.prototype,P=R.toString,N=R.__defineGetter__,Z=R.__defineSetter__,L=R.__lookupGetter__,W=R.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(L.call(r,e)||W.call(r,e)?(i=r.__proto__,r.__proto__=R,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&N&&N.call(r,e,t.get),o&&Z&&Z.call(r,e,t.set),r};var B=C;function G(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var q=Object,U=/./;function X(r){return"boolean"==typeof r}function M(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var z=M();var D=M();var J=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;var K,Q="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof Q?Q.toStringTag:"";K=D&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i,n,a;if(null==r)return J.call(r);t=r[Y],a=Y,e=null!=(n=r)&&H.call(n,a);try{r[Y]=void 0}catch(e){return J.call(r)}return i=J.call(r),e?r[Y]=t:delete r[Y],i}:function(r){return J.call(r)};var rr=K,er=Boolean,tr=Boolean.prototype.toString;var ir=z&&"symbol"==typeof Symbol.toStringTag;function nr(r){return"object"==typeof r&&(r instanceof er||(ir?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===rr(r)))}function ar(r){return X(r)||nr(r)}function or(r){return"number"==typeof r}function cr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function sr(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+cr(n):cr(n)+r,i&&(r="-"+r)),r}G(ar,"isPrimitive",X),G(ar,"isObject",nr);var ur=String.prototype.toLowerCase,lr=String.prototype.toUpperCase;function fr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!or(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=sr(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=sr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===lr.call(r.specifier)?lr.call(t):ur.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function pr(r){return"string"==typeof r}var gr=Math.abs,dr=String.prototype.toLowerCase,hr=String.prototype.toUpperCase,br=String.prototype.replace,yr=/e\+(\d)$/,wr=/e-(\d)$/,vr=/^(\d+)$/,mr=/^(\d+)e/,Er=/\.0$/,jr=/\.0*e/,xr=/(\..*[^0])0*e/;function kr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!or(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":gr(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=br.call(t,xr,"$1e"),t=br.call(t,jr,"e"),t=br.call(t,Er,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=br.call(t,yr,"e+0$1"),t=br.call(t,wr,"e-0$1"),r.alternate&&(t=br.call(t,vr,"$1."),t=br.call(t,mr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===hr.call(r.specifier)?hr.call(t):dr.call(t)}function Sr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _r(r,e,t){var i=e-r.length;return i<0?r:r=t?r+Sr(i):Sr(i)+r}var Tr=String.fromCharCode,Vr=isNaN,$r=Array.isArray;function Or(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ar(r){var e,t,i,n,a,o,c,s,u;if(!$r(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(pr(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=Or(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Vr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Vr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=fr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Vr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Vr(a)?String(i.arg):Tr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=kr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=sr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=_r(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Fr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ir(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Cr(r){var e,t,i,n;for(t=[],n=0,i=Fr.exec(r);i;)(e=r.slice(n,Fr.lastIndex-i[0].length)).length&&t.push(e),t.push(Ir(i)),n=Fr.lastIndex,i=Fr.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Rr(r){return"string"==typeof r}function Pr(r){var e,t;if(!Rr(r))throw new TypeError(Pr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Cr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Ar.apply(null,e)}function Nr(){return new Function("return this;")()}var Zr="object"==typeof self?self:null,Lr="object"==typeof window?window:null,Wr="object"==typeof global?global:null,Br="object"==typeof globalThis?globalThis:null;var Gr=function(r){if(arguments.length){if(!X(r))throw new TypeError(Pr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Nr()}if(Br)return Br;if(Zr)return Zr;if(Lr)return Lr;if(Wr)return Wr;throw new Error("unexpected error. Unable to resolve global object.")}(),qr=Gr.document&&Gr.document.childNodes,Ur=Int8Array;function Xr(){return/^\s*function\s*([^(]*)/i}var Mr,zr=/^\s*function\s*([^(]*)/i;G(Xr,"REGEXP",zr),Mr=Array.isArray?Array.isArray:function(r){return"[object Array]"===rr(r)};var Dr=Mr;function Jr(r){return null!==r&&"object"==typeof r}var Hr=function(r){if("function"!=typeof r)throw new TypeError(Pr("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!Dr(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(Jr);function Kr(r){var e,t,i,n;if(("Object"===(t=rr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=zr.exec(i.toString()))return e[1]}return Jr(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}G(Jr,"isObjectLikeArray",Hr);var Qr="function"==typeof U||"object"==typeof Ur||"function"==typeof qr?function(r){return Kr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Kr(r).toLowerCase():e};var Yr,re,ee=Object.getPrototypeOf;re=Object.getPrototypeOf,Yr="function"===Qr(re)?ee:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var te=Yr;function ie(r){return null==r?null:(r=q(r),te(r))}function ne(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===rr(r))return!0;r=ie(r)}return!1}function ae(r,e,t){var i,n,a,o;if(i=0,r<=0)return i;if(1===r||0===t)return e[0];if(1===t){if((a=r%6)>0)for(o=0;o<a;o++)i+=e[o];if(r<6)return i;for(o=a;o<r;o+=6)i+=e[o]+e[o+1]+e[o+2]+e[o+3]+e[o+4]+e[o+5];return i}for(n=t<0?(1-r)*t:0,o=0;o<r;o++)i+=e[n],n+=t;return i}G(ae,"ndarray",(function(r,e,t,i){var n,a,o,c;if(n=0,r<=0)return n;if(1===r||0===t)return e[i];if(a=i,1===t){if((o=r%6)>0)for(c=0;c<o;c++)n+=e[a],a+=t;if(r<6)return n;for(c=o;c<r;c+=6)n+=e[a]+e[a+1]+e[a+2]+e[a+3]+e[a+4]+e[a+5],a+=6;return n}for(c=0;c<r;c++)n+=e[a],a+=t;return n}));var oe,ce=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return ne(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),se=oe=ne(ce)?ae:ce;const{ndarray:ue}=oe;function le(r,e,t){return r<=0?NaN:1===r||0===t?e[0]:se(r,e,t)/r}return G(le,"ndarray",(function(r,e,t,i){return r<=0?NaN:1===r||0===t?e[i]:ue(r,e,t,i)/r})),le}));
//# sourceMappingURL=index.js.map
