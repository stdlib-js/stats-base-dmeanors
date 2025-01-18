"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=i(function(h,t){
var y=require('@stdlib/blas-ext-base-dsumors/dist').ndarray;function f(r,e,a,s){return r<=0?NaN:r===1||a===0?e[s]:y(r,e,a,s)/r}t.exports=f
});var v=i(function(k,o){
var p=require('@stdlib/strided-base-stride2offset/dist'),j=n();function x(r,e,a){return j(r,e,a,p(r,a))}o.exports=x
});var m=i(function(w,d){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),R=n();l(q,"ndarray",R);d.exports=q
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=m(),u,c=E(_(__dirname,"./native.js"));O(c)?u=b:u=c;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
