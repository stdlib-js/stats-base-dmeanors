// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r,{ndarray as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsumors@esm/index.mjs";function s(e,n,s){return e<=0?NaN:1===e||0===s?n[0]:r(e,n,s)/e}function t(e,r,s,t){return e<=0?NaN:1===e||0===s?r[t]:n(e,r,s,t)/e}e(s,"ndarray",t);export{s as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
