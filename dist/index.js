"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=i(function(g,s){
var f=require('@stdlib/blas-ext-base-dsumors/dist');function p(r,e,a){return r<=0?NaN:r===1||a===0?e[0]:f(r,e,a)/r}s.exports=p
});var v=i(function(h,o){
var y=require('@stdlib/blas-ext-base-dsumors/dist').ndarray;function j(r,e,a,n){return r<=0?NaN:r===1||a===0?e[n]:y(r,e,a,n)/r}o.exports=j
});var m=i(function(k,d){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=t(),x=v();l(q,"ndarray",x);d.exports=q
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=m(),u,c=_(R(__dirname,"./native.js"));E(c)?u=O:u=c;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
