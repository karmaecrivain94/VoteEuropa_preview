var TWEEN=TWEEN||function(){var a=[];return{getAll:function(){return a},removeAll:function(){a=[]},add:function(b){a.push(b)},remove:function(b){var c=a.indexOf(b);c!==-1&&a.splice(c,1)},update:function(b,c){if(0===a.length)return!1;var d=0;for(b=void 0!==b?b:TWEEN.now();d<a.length;)a[d].update(b)||c?d++:a.splice(d,1);return!0}}}();"undefined"==typeof window&&"undefined"!=typeof process?TWEEN.now=function(){var a=process.hrtime();return 1e3*a[0]+a[1]/1e6}:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?TWEEN.now=window.performance.now.bind(window.performance):void 0!==Date.now?TWEEN.now=Date.now:TWEEN.now=function(){return(new Date).getTime()},TWEEN.Tween=function(a){var h,b=a,c={},d={},e={},f=1e3,g=0,i=!1,j=!1,k=!1,l=0,m=null,n=TWEEN.Easing.Linear.None,o=TWEEN.Interpolation.Linear,p=[],q=null,r=!1,s=null,t=null,u=null;this.to=function(a,b){return d=a,void 0!==b&&(f=b),this},this.start=function(a){TWEEN.add(this),j=!0,r=!1,m=void 0!==a?a:TWEEN.now(),m+=l;for(var f in d){if(d[f]instanceof Array){if(0===d[f].length)continue;d[f]=[b[f]].concat(d[f])}void 0!==b[f]&&(c[f]=b[f],c[f]instanceof Array==!1&&(c[f]*=1),e[f]=c[f]||0)}return this},this.stop=function(){return j?(TWEEN.remove(this),j=!1,null!==u&&u.call(b,b),this.stopChainedTweens(),this):this},this.end=function(){return this.update(m+f),this},this.stopChainedTweens=function(){for(var a=0,b=p.length;a<b;a++)p[a].stop()},this.delay=function(a){return l=a,this},this.repeat=function(a){return g=a,this},this.repeatDelay=function(a){return h=a,this},this.yoyo=function(a){return i=a,this},this.easing=function(a){return n=a,this},this.interpolation=function(a){return o=a,this},this.chain=function(){return p=arguments,this},this.onStart=function(a){return q=a,this},this.onUpdate=function(a){return s=a,this},this.onComplete=function(a){return t=a,this},this.onStop=function(a){return u=a,this},this.update=function(a){var j,u,v;if(a<m)return!0;r===!1&&(null!==q&&q.call(b,b),r=!0),u=(a-m)/f,u=u>1?1:u,v=n(u);for(j in d)if(void 0!==c[j]){var w=c[j]||0,x=d[j];x instanceof Array?b[j]=o(x,v):("string"==typeof x&&(x="+"===x.charAt(0)||"-"===x.charAt(0)?w+parseFloat(x):parseFloat(x)),"number"==typeof x&&(b[j]=w+(x-w)*v))}if(null!==s&&s.call(b,v),1===u){if(g>0){isFinite(g)&&g--;for(j in e){if("string"==typeof d[j]&&(e[j]=e[j]+parseFloat(d[j])),i){var y=e[j];e[j]=d[j],d[j]=y}c[j]=e[j]}return i&&(k=!k),m=void 0!==h?a+h:a+l,!0}null!==t&&t.call(b,b);for(var z=0,A=p.length;z<A;z++)p[z].start(m+f);return!1}return!0}},TWEEN.Easing={Linear:{None:function(a){return a}},Quadratic:{In:function(a){return a*a},Out:function(a){return a*(2-a)},InOut:function(a){return(a*=2)<1?.5*a*a:-.5*(--a*(a-2)-1)}},Cubic:{In:function(a){return a*a*a},Out:function(a){return--a*a*a+1},InOut:function(a){return(a*=2)<1?.5*a*a*a:.5*((a-=2)*a*a+2)}},Quartic:{In:function(a){return a*a*a*a},Out:function(a){return 1- --a*a*a*a},InOut:function(a){return(a*=2)<1?.5*a*a*a*a:-.5*((a-=2)*a*a*a-2)}},Quintic:{In:function(a){return a*a*a*a*a},Out:function(a){return--a*a*a*a*a+1},InOut:function(a){return(a*=2)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2)}},Sinusoidal:{In:function(a){return 1-Math.cos(a*Math.PI/2)},Out:function(a){return Math.sin(a*Math.PI/2)},InOut:function(a){return.5*(1-Math.cos(Math.PI*a))}},Exponential:{In:function(a){return 0===a?0:Math.pow(1024,a-1)},Out:function(a){return 1===a?1:1-Math.pow(2,-10*a)},InOut:function(a){return 0===a?0:1===a?1:(a*=2)<1?.5*Math.pow(1024,a-1):.5*(-Math.pow(2,-10*(a-1))+2)}},Circular:{In:function(a){return 1-Math.sqrt(1-a*a)},Out:function(a){return Math.sqrt(1- --a*a)},InOut:function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)}},Elastic:{In:function(a){return 0===a?0:1===a?1:-Math.pow(2,10*(a-1))*Math.sin(5*(a-1.1)*Math.PI)},Out:function(a){return 0===a?0:1===a?1:Math.pow(2,-10*a)*Math.sin(5*(a-.1)*Math.PI)+1},InOut:function(a){return 0===a?0:1===a?1:(a*=2,a<1?-.5*Math.pow(2,10*(a-1))*Math.sin(5*(a-1.1)*Math.PI):.5*Math.pow(2,-10*(a-1))*Math.sin(5*(a-1.1)*Math.PI)+1)}},Back:{In:function(a){var b=1.70158;return a*a*((b+1)*a-b)},Out:function(a){var b=1.70158;return--a*a*((b+1)*a+b)+1},InOut:function(a){var b=2.5949095;return(a*=2)<1?.5*(a*a*((b+1)*a-b)):.5*((a-=2)*a*((b+1)*a+b)+2)}},Bounce:{In:function(a){return 1-TWEEN.Easing.Bounce.Out(1-a)},Out:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},InOut:function(a){return a<.5?.5*TWEEN.Easing.Bounce.In(2*a):.5*TWEEN.Easing.Bounce.Out(2*a-1)+.5}}},TWEEN.Interpolation={Linear:function(a,b){var c=a.length-1,d=c*b,e=Math.floor(d),f=TWEEN.Interpolation.Utils.Linear;return b<0?f(a[0],a[1],d):b>1?f(a[c],a[c-1],c-d):f(a[e],a[e+1>c?c:e+1],d-e)},Bezier:function(a,b){for(var c=0,d=a.length-1,e=Math.pow,f=TWEEN.Interpolation.Utils.Bernstein,g=0;g<=d;g++)c+=e(1-b,d-g)*e(b,g)*a[g]*f(d,g);return c},CatmullRom:function(a,b){var c=a.length-1,d=c*b,e=Math.floor(d),f=TWEEN.Interpolation.Utils.CatmullRom;return a[0]===a[c]?(b<0&&(e=Math.floor(d=c*(1+b))),f(a[(e-1+c)%c],a[e],a[(e+1)%c],a[(e+2)%c],d-e)):b<0?a[0]-(f(a[0],a[0],a[1],a[1],-d)-a[0]):b>1?a[c]-(f(a[c],a[c],a[c-1],a[c-1],d-c)-a[c]):f(a[e?e-1:0],a[e],a[c<e+1?c:e+1],a[c<e+2?c:e+2],d-e)},Utils:{Linear:function(a,b,c){return(b-a)*c+a},Bernstein:function(a,b){var c=TWEEN.Interpolation.Utils.Factorial;return c(a)/c(b)/c(a-b)},Factorial:function(){var a=[1];return function(b){var c=1;if(a[b])return a[b];for(var d=b;d>1;d--)c*=d;return a[b]=c,c}}(),CatmullRom:function(a,b,c,d,e){var f=.5*(c-a),g=.5*(d-b),h=e*e,i=e*h;return(2*b-2*c+f+g)*i+(-3*b+3*c-2*f-g)*h+f*e+b}}},function(a){"function"==typeof define&&define.amd?define([],function(){return TWEEN}):"undefined"!=typeof module&&"object"==typeof exports?module.exports=TWEEN:void 0!==a&&(a.TWEEN=TWEEN)}(this);