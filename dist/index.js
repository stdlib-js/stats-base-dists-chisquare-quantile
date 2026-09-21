"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(o){throw (r=0, o)}};};var u=t(function(p,a){
var s=require('@stdlib/stats-base-dists-gamma-quantile/dist');function f(e,r){return s(e,r/2,.5)}a.exports=f
});var c=t(function(x,i){
var q=require('@stdlib/stats-base-dists-gamma-quantile/dist').factory;function y(e){return q(e/2,.5)}i.exports=y
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=u(),v=c();m(n,"factory",v);module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
