(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const J=r=>document.querySelector(r),Li=r=>[...document.querySelectorAll(r)],Er=matchMedia("(prefers-reduced-motion: reduce)").matches,$u=matchMedia("(pointer: coarse)").matches;function Wm(r,e={}){let t=!1;return new IntersectionObserver(([n])=>t=n.isIntersecting,e).observe(r),()=>t}function Bi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Sp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ks={duration:.5,overwrite:!1,delay:0},ju,sn,Et,ri=1e8,_t=1/ri,su=Math.PI*2,Xm=su/4,Ym=0,Mp=Math.sqrt,qm=Math.cos,$m=Math.sin,jt=function(e){return typeof e=="string"},Pt=function(e){return typeof e=="function"},Xi=function(e){return typeof e=="number"},Ku=function(e){return typeof e>"u"},Ri=function(e){return typeof e=="object"},Pn=function(e){return e!==!1},Zu=function(){return typeof window<"u"},_a=function(e){return Pt(e)||jt(e)},yp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,ou=/(?:-?\.?\d|\.)+/gi,Ep=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Os=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ic=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Tp=/[+-]=-?[.\d]+/,bp=/[^,'"\[\]\s]+/gi,jm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,At,vi,au,Ju,Zn={},xl={},wp,Ap=function(e){return(xl=ss(e,Zn))&&kn},Qu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ko=function(e,t){return!t&&console.warn(e)},Cp=function(e,t){return e&&(Zn[e]=t)&&xl&&(xl[e]=t)||Zn},Zo=function(){return 0},Km={suppressEvents:!0,isStart:!0,kill:!1},il={suppressEvents:!0,kill:!1},Zm={suppressEvents:!0},eh={},dr=[],lu={},Rp,Xn={},rc={},zh=30,rl=[],th="",nh=function(e){var t=e[0],n,i;if(Ri(t)||Pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=rl.length;i--&&!rl[i].targetTest(t););n=rl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Qp(e[i],n)))||e.splice(i,1);return e},qr=function(e){return e._gsap||nh(si(e))[0]._gsap},Pp=function(e,t,n){return(n=e[t])&&Pt(n)?e[t]():Ku(n)&&e.getAttribute&&e.getAttribute(t)||n},Ln=function(e,t){return(e=e.split(",")).forEach(t)||e},Lt=function(e){return Math.round(e*1e5)/1e5||0},$t=function(e){return Math.round(e*1e7)/1e7||0},zs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Jm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Sl=function(){var e=dr.length,t=dr.slice(0),n,i;for(lu={},dr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Lp=function(e,t,n,i){dr.length&&!sn&&Sl(),e.render(t,n,sn&&t<0&&(e._initted||e._startAt)),dr.length&&!sn&&Sl()},Dp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(bp).length<2?t:jt(e)?e.trim():e},Up=function(e){return e},li=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Qm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ss=function(e,t){for(var n in t)e[n]=t[n];return e},Hh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ri(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ml=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Uo=function(e){var t=e.parent||At,n=e.keyframes?Qm(on(e.keyframes)):li;if(Pn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},eg=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Ip=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Hl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},xr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},$r=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},tg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},cu=function(e,t,n,i){return e._startAt&&(sn?e._startAt.revert(il):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},ng=function r(e){return!e||e._ts&&r(e.parent)},Gh=function(e){return e._repeat?Zs(e._tTime,e=e.duration()+e._rDelay)*e:0},Zs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},yl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Gl=function(e){return e._end=$t(e._start+(e._tDur/Math.abs(e._ts||e._rts||_t)||0))},Vl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=$t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Gl(e),n._dirty||$r(n,e)),e},Np=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=yl(e.rawTime(),t),(!t._dur||fa(0,t.totalDuration(),n)-t._tTime>_t)&&t.render(n,!0)),$r(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-_t}},yi=function(e,t,n,i){return t.parent&&xr(t),t._start=$t((Xi(n)?n:n||e!==At?Qn(e,n,t):e._time)+t._delay),t._end=$t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ip(e,t,"_first","_last",e._sort?"_start":0),uu(t)||(e._recent=t),i||Np(e,t),e._ts<0&&Vl(e,e._tTime),e},Op=function(e,t){return(Zn.ScrollTrigger||Qu("scrollTrigger",t))&&Zn.ScrollTrigger.create(t,e)},Fp=function(e,t,n,i,s){if(rh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Rp!==qn.frame)return dr.push(e),e._lazy=[s,i],1},ig=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},uu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},rg=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&ig(e)&&!(!e._initted&&uu(e))||(e._ts<0||e._dp._ts<0)&&!uu(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=fa(0,e._tDur,t),u=Zs(l,o),e._yoyo&&u&1&&(a=1-a),u!==Zs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||sn||i||e._zTime===_t||!t&&e._zTime){if(!e._initted&&Fp(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?_t:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&cu(e,t,n,!0),e._onUpdate&&!n&&jn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&jn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&xr(e,1),!n&&!sn&&(jn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},sg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Js=function(e,t,n,i){var s=e._repeat,a=$t(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:$t(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Vl(e,e._tTime=e._tDur*o),e.parent&&Gl(e),n||$r(e.parent,e),e},Vh=function(e){return e instanceof Mn?$r(e):Js(e,e._dur)},og={_start:0,endTime:Zo,totalDuration:Zo},Qn=function r(e,t,n){var i=e.labels,s=e._recent||og,a=e.duration()>=ri?s.endTime(!1):e._dur,o,l,c;return jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(on(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Io=function(e,t,n){var i=Xi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Pn(l.vars.inherit)&&l.parent;a.immediateRender=Pn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Ot(t[0],a,t[s+1])},Tr=function(e,t){return e||e===0?t(e):t},fa=function(e,t,n){return n<e?e:n>t?t:n},rn=function(e,t){return!jt(e)||!(t=jm.exec(e))?"":t[1]},ag=function(e,t,n){return Tr(n,function(i){return fa(e,t,i)})},hu=[].slice,kp=function(e,t){return e&&Ri(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ri(e[0]))&&!e.nodeType&&e!==vi},lg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return jt(i)&&!t||kp(i,1)?(s=n).push.apply(s,si(i)):n.push(i)})||n},si=function(e,t,n){return Et&&!t&&Et.selector?Et.selector(e):jt(e)&&!n&&(au||!Qs())?hu.call((t||Ju).querySelectorAll(e),0):on(e)?lg(e,n):kp(e)?hu.call(e,0):e?[e]:[]},fu=function(e){return e=si(e)[0]||Ko("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return si(t,n.querySelectorAll?n:n===e?Ko("Invalid scope")||Ju.createElement("div"):e)}},Bp=function(e){return e.sort(function(){return .5-Math.random()})},zp=function(e){if(Pt(e))return e;var t=Ri(e)?e:{each:e},n=jr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return jt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,m=a[g],p,M,v,S,y,A,E,P,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,ri])[1],!x){for(E=-ri;E<(E=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=a[g]=[],p=l?Math.min(x,g)*u-.5:i%x,M=x===ri?0:l?g*h/x-.5:i/x|0,E=0,P=ri,A=0;A<g;A++)v=A%x-p,S=M-(A/x|0),m[A]=y=c?Math.abs(c==="y"?S:v):Mp(v*v+S*S),y>E&&(E=y),y<P&&(P=y);i==="random"&&Bp(m),m.max=E-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=rn(t.amount||t.each)||0,n=n&&g<0?Kp(n):n}return g=(m[f]-m.min)/m.max||0,$t(m.b+(n?n(g):g)*m.v)+m.u}},du=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=$t(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Xi(n)?0:rn(n))}},Hp=function(e,t){var n=on(e),i,s;return!n&&Ri(e)&&(i=n=e.radius||ri,e.values?(e=si(e.values),(s=!Xi(e[0]))&&(i*=i)):e=du(e.increment)),Tr(t,n?Pt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ri,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,s||u===a||Xi(a)?u:u+rn(a)}:du(e))},Gp=function(e,t,n,i){return Tr(on(e)?!t:n===!0?!!(n=0):!i,function(){return on(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},cg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},ug=function(e,t){return function(n){return e(parseFloat(n))+(t||rn(n))}},hg=function(e,t,n){return Wp(e,t,0,1,n)},Vp=function(e,t,n){return Tr(n,function(i){return e[~~t(i)]})},fg=function r(e,t,n){var i=t-e;return on(e)?Vp(e,r(0,e.length),t):Tr(n,function(s){return(i+(s-e)%i)%i+e})},dg=function r(e,t,n){var i=t-e,s=i*2;return on(e)?Vp(e,r(0,e.length-1),t):Tr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Jo=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?bp:ou),n+=e.substr(t,i-t)+Gp(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Wp=function(e,t,n,i,s){var a=t-e,o=i-n;return Tr(s,function(l){return n+((l-e)/a*o||0)})},pg=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=jt(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(on(e)&&!on(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=ss(on(e)?[]:{},e));if(!u){for(l in t)ih.call(o,e,l,"get",t[l]);s=function(_){return ah(_,o)||(a?e.p:e)}}}return Tr(n,s)},Wh=function(e,t,n){var i=e.labels,s=ri,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},jn=function(e,t,n){var i=e.vars,s=i[t],a=Et,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&dr.length&&Sl(),o&&(Et=o),u=l?s.apply(c,l):s.call(c),Et=a,u},Mo=function(e){return xr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!sn),e.progress()<1&&jn(e,"onInterrupt"),e},Fs,Xp=[],Yp=function(e){if(e)if(e=!e.name&&e.default||e,Zu()||e.headless){var t=e.name,n=Pt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Zo,render:ah,add:ih,kill:Pg,modifier:Rg,rawVars:0},a={targetTest:0,get:0,getSetter:oh,aliases:{},register:0};if(Qs(),e!==i){if(Xn[t])return;li(i,li(Ml(e,s),a)),ss(i.prototype,ss(s,Ml(e,a))),Xn[i.prop=t]=i,e.targetTest&&(rl.push(i),eh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Cp(t,i),e.register&&e.register(kn,i,Dn)}else Xp.push(e)},pt=255,yo={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},sc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*pt+.5|0},qp=function(e,t,n){var i=e?Xi(e)?[e>>16,e>>8&pt,e&pt]:0:yo.black,s,a,o,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),yo[e])i=yo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&pt,i&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(ou),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=sc(l+1/3,s,a),i[1]=sc(l,s,a),i[2]=sc(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Ep),n&&i.length<4&&(i[3]=1),i}else i=e.match(ou)||yo.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/pt,a=i[1]/pt,o=i[2]/pt,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},$p=function(e){var t=[],n=[],i=-1;return e.split(pr).forEach(function(s){var a=s.match(Os)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Xh=function(e,t,n){var i="",s=(e+i).match(pr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=qp(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=$p(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(pr,"1").split(Os),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(pr),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},pr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in yo)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),mg=/hsl[a]?\(/,jp=function(e){var t=e.join(" "),n;if(pr.lastIndex=0,pr.test(t))return n=mg.test(t),e[1]=Xh(e[1],n),e[0]=Xh(e[0],n,$p(e[1])),!0},Qo,qn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,d,_=function g(m){var p=r()-i,M=m===!0,v,S,y,A;if((p>e||p<0)&&(n+=p-t),i+=p,y=i-n,v=y-a,(v>0||M)&&(A=++h.frame,f=y-h.time*1e3,h.time=y=y/1e3,a+=v+(v>=s?4:s-v),S=1),M||(l=c(g)),S)for(d=0;d<o.length;d++)o[d](y,f,A,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){wp&&(!au&&Zu()&&(vi=au=window,Ju=vi.document||{},Zn.gsap=kn,(vi.gsapVersions||(vi.gsapVersions=[])).push(kn.version),Ap(xl||vi.GreenSockGlobals||!vi.gsap&&vi||{}),Xp.forEach(Yp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},Qo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Qo=0,c=Zo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,M){var v=p?function(S,y,A,E){m(S,y,A,E),h.remove(v)}:m;return h.remove(m),o[M?"unshift":"push"](v),Qs(),v},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h}(),Qs=function(){return!Qo&&qn.wake()},at={},gg=/^[\d.\-M][\d.\-,\s]/,_g=/["']/g,vg=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(_g,"").trim():+c,i=l.substr(o+1).trim();return t},xg=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Sg=function(e){var t=(e+"").split("("),n=at[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[vg(t[1])]:xg(e).split(",").map(Dp)):at._CE&&gg.test(e)?at._CE("",e):n},Kp=function(e){return function(t){return 1-e(1-t)}},Zp=function r(e,t){for(var n=e._first,i;n;)n instanceof Mn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},jr=function(e,t){return e&&(Pt(e)?e:at[e]||Sg(e))||t},hs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Ln(e,function(o){at[o]=Zn[o]=s,at[a=o.toLowerCase()]=n;for(var l in s)at[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[o+"."+l]=s[l]}),s},Jp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},oc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/su*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*$m((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Jp(o);return s=su/s,l.config=function(c,u){return r(e,c,u)},l},ac=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Jp(n);return i.config=function(s){return r(e,s)},i};Ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;hs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;hs("Elastic",oc("in"),oc("out"),oc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};hs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);hs("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});hs("Circ",function(r){return-(Mp(1-r*r)-1)});hs("Sine",function(r){return r===1?1:-qm(r*Xm)+1});hs("Back",ac("in"),ac("out"),ac());at.SteppedEase=at.steps=Zn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-_t;return function(o){return((i*fa(0,a,o)|0)+s)*n}}};Ks.ease=at["quad.out"];Ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return th+=r+","+r+"Params,"});var Qp=function(e,t){this.id=Ym++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Pp,this.set=t?t.getSetter:oh},ea=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Js(this,+t.duration,1,1),this.data=t.data,Et&&(this._ctx=Et,Et.data.push(this)),Qo||qn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Js(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Qs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Vl(this,n),!s._dp||s.parent||Np(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&yi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===_t||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Lp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Gh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Gh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Zs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-_t?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?yl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-_t?0:this._rts,this.totalTime(fa(-Math.abs(this._delay),this._tDur,s),i!==!1),Gl(this),tg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_t&&(this._tTime-=_t)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&yi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Pn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?yl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Zm);var i=sn;return sn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),sn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Vh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Vh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Qn(this,n),Pn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Pn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-_t:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-_t,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-_t)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=Pt(n)?n:Up,o=function(){var c=i.then;i.then=null,Pt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Mo(this)},r}();li(ea.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_t,_prom:0,_ps:!1,_rts:1});var Mn=function(r){Sp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Pn(n.sortChildren),At&&yi(n.parent||At,Bi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Op(Bi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Io(0,arguments,this),this},t.from=function(i,s,a){return Io(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Io(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Uo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ot(i,s,Qn(this,a),1),this},t.call=function(i,s,a){return yi(this,Ot.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ot(i,a,Qn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Uo(a).immediateRender=Pn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Uo(o).immediateRender=Pn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:$t(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,M,v,S,y,A,E;if(this!==At&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,S=this._start,v=this._ts,p=!v,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=$t(u%m),u===l?(g=this._repeat,f=c):(g=~~(u/m),g&&g===u/m&&(f=c,g--),f>c&&(f=c)),y=Zs(this._tTime,m),!o&&this._tTime&&y!==g&&this._tTime-y*m-this._dur<=0&&(y=g),A&&g&1&&(f=c-f,E=1),g!==y&&!this._lock){var P=A&&y&1,x=P===(A&&g&1);if(g<y&&(P=!P),o=P?0:u%c?c:u,this._lock=1,this.render(o||(E?0:$t(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&jn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Zp(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=sg(this,$t(o),$t(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!g&&(jn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=-_t);break}}d=_}else{d=this._last;for(var T=i<0?i:f;d;){if(_=d._prev,(d._act||T<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,a||sn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=T?-_t:_t);break}}d=_}}if(M&&!s&&(this.pause(),M.render(f>=o?0:-_t)._zTime=f>=o?1:-1,this._ts))return this._start=S,Gl(this),this.render(i,s,a);this._onUpdate&&!s&&jn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&xr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(jn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Xi(s)||(s=Qn(this,s,i)),!(i instanceof ea)){if(on(i))return i.forEach(function(o){return a.add(o,s)}),this;if(jt(i))return this.addLabel(i,s);if(Pt(i))i=Ot.delayedCall(0,i);else return this}return this!==i?yi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ri);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ot?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return jt(i)?this.removeLabel(i):Pt(i)?this.killTweensOf(i):(Hl(this,i),i===this._recent&&(this._recent=this._last),$r(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$t(qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Qn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Ot.delayedCall(0,s||Zo,a);return o.data="isPause",this._hasPause=1,yi(this,o,Qn(this,i))},t.removePause=function(i){var s=this._first;for(i=Qn(this,i);s;)s._start===i&&s.data==="isPause"&&xr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)rr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=si(i),l=this._first,c=Xi(s),u;l;)l instanceof Ot?Jm(l._targets,o)&&(c?(!rr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Qn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Ot.to(a,li({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||_t,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Js(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,li({startAt:{time:Qn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Wh(this,Qn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Wh(this,Qn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+_t)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return $r(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),$r(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=ri,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,yi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Js(a,a===At&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(At._ts&&(Lp(At,yl(i,At)),Rp=qn.frame),qn.frame>=zh){zh+=Kn.autoSleep||120;var s=At._first;if((!s||!s._ts)&&Kn.autoSleep&&qn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||qn.sleep()}}},e}(ea);li(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Mg=function(e,t,n,i,s,a,o){var l=new Dn(this._pt,e,t,0,1,s0,null,s),c=0,u=0,h,f,d,_,g,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Jo(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),f=n.match(ic)||[];h=ic.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?zs(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=ic.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Tp.test(i)||p)&&(l.e=0),this._pt=l,l},ih=function(e,t,n,i,s,a,o,l,c,u){Pt(i)&&(i=i(s||0,e,a));var h=e[t],f=n!=="get"?n:Pt(h)?c?e[t.indexOf("set")||!Pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Pt(h)?c?wg:i0:sh,_;if(jt(i)&&(~i.indexOf("random(")&&(i=Jo(i)),i.charAt(1)==="="&&(_=zs(f,i)+(rn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||pu)return!isNaN(f*i)&&i!==""?(_=new Dn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Cg:r0,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&Qu(t,i),Mg.call(this,e,t,f,i,d,l||Kn.stringFilter,c))},yg=function(e,t,n,i,s){if(Pt(e)&&(e=No(e,s,t,n,i)),!Ri(e)||e.style&&e.nodeType||on(e)||yp(e))return jt(e)?No(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=No(e[o],s,t,n,i);return a},e0=function(e,t,n,i,s,a){var o,l,c,u;if(Xn[e]&&(o=new Xn[e]).init(s,o.rawVars?t[e]:yg(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Dn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Fs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},rr,pu,rh=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!ju,S=e.timeline,y,A,E,P,x,T,F,U,$,L,k,Y,O;if(S&&(!f||!s)&&(s="none"),e._ease=jr(s,Ks.ease),e._yEase=h?Kp(jr(h===!0?s:h,Ks.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||f&&!i.stagger){if(U=m[0]?qr(m[0]).harness:0,Y=U&&i[U.prop],y=Ml(i,eh),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?il:Km),g._lazy=0),a){if(xr(e._startAt=Ot.set(m,li({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Pn(l),startAt:null,delay:0,onUpdate:c&&function(){return jn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn||!o&&!d)&&e._startAt.revert(il),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),E=li({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Pn(l),immediateRender:o,stagger:0,parent:p},y),Y&&(E[U.prop]=Y),xr(e._startAt=Ot.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn?e._startAt.revert(il):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,_t,_t);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Pn(l)||l&&!_,A=0;A<m.length;A++){if(x=m[A],F=x._gsap||nh(m)[A]._gsap,e._ptLookup[A]=L={},lu[F.id]&&dr.length&&Sl(),k=M===m?A:M.indexOf(x),U&&($=new U).init(x,Y||y,e,k,M)!==!1&&(e._pt=P=new Dn(e._pt,x,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(Z){L[Z]=P}),$.priority&&(T=1)),!U||Y)for(E in y)Xn[E]&&($=e0(E,y,e,k,x,M))?$.priority&&(T=1):L[E]=P=ih.call(e,x,E,"get",y[E],k,M,0,i.stringFilter);e._op&&e._op[A]&&e.kill(x,e._op[A]),v&&e._pt&&(rr=e,At.killTweensOf(x,L,e.globalTime(t)),O=!e.parent,rr=0),e._pt&&l&&(lu[F.id]=1)}T&&o0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,f&&t<=0&&S.render(ri,!0,!0)},Eg=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return pu=1,e.vars[t]="+=0",rh(e,o),pu=0,l?Ko(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Lt(n)+rn(h.e)),h.b&&(h.b=u.s+rn(h.b))},Tg=function(e,t){var n=e[0]?qr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ss({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},bg=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(on(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},No=function(e,t,n,i,s){return Pt(e)?e.call(t,n,i,s):jt(e)&&~e.indexOf("random(")?Jo(e):e},t0=th+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",n0={};Ln(t0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return n0[r]=1});var Ot=function(r){Sp(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Uo(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=i.parent||At,v=(on(n)||yp(n)?Xi(n[0]):"length"in i)?[n]:si(n),S,y,A,E,P,x,T,F;if(o._targets=v.length?nh(v):Ko("GSAP target "+n+" not found. https://gsap.com",!Kn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||_a(c)||_a(u)){if(i=o.vars,S=o.timeline=new Mn({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:v}),S.kill(),S.parent=S._dp=Bi(o),S._start=0,f||_a(c)||_a(u)){if(E=v.length,T=f&&zp(f),Ri(f))for(P in f)~t0.indexOf(P)&&(F||(F={}),F[P]=f[P]);for(y=0;y<E;y++)A=Ml(i,n0),A.stagger=0,p&&(A.yoyoEase=p),F&&ss(A,F),x=v[y],A.duration=+No(c,Bi(o),y,x,v),A.delay=(+No(u,Bi(o),y,x,v)||0)-o._delay,!f&&E===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),S.to(x,A,T?T(y,x,v):0),S._ease=at.none;S.duration()?c=u=0:o.timeline=0}else if(_){Uo(li(S.vars.defaults,{ease:"none"})),S._ease=jr(_.ease||i.ease||"none");var U=0,$,L,k;if(on(_))_.forEach(function(Y){return S.to(v,Y,">")}),S.duration();else{A={};for(P in _)P==="ease"||P==="easeEach"||bg(P,_[P],A,_.easeEach);for(P in A)for($=A[P].sort(function(Y,O){return Y.t-O.t}),U=0,y=0;y<$.length;y++)L=$[y],k={ease:L.e,duration:(L.t-(y?$[y-1].t:0))/100*c},k[P]=L.v,S.to(v,k,U),U+=k.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return d===!0&&!ju&&(rr=Bi(o),At.killTweensOf(v),rr=0),yi(M,Bi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===$t(M._time)&&Pn(h)&&ng(Bi(o))&&M.data!=="nested")&&(o._tTime=-_t,o.render(Math.max(0,-u)||0)),m&&Op(Bi(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-_t&&!u?l:i<_t?0:i,f,d,_,g,m,p,M,v,S;if(!c)rg(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(f=$t(h%g),h===l?(_=this._repeat,f=c):(_=~~(h/g),_&&_===$t(h/g)&&(f=c,_--),f>c&&(f=c)),p=this._yoyo&&_&1,p&&(S=this._yEase,f=c-f),m=Zs(this._tTime,g),f===o&&!a&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(v&&this._yEase&&Zp(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=a=1,this.render($t(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Fp(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!o&&!s&&!_&&(jn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&cu(this,i,s,a),jn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&jn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&cu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&xr(this,1),!s&&!(u&&!o)&&(h||o||p)&&(jn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Qo||qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||rh(this,c),u=this._ease(c/this._dur),Eg(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Vl(this,0),this.parent||Ip(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Mo(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,rr&&rr.vars.overwrite!==!0)._first||Mo(this),this.parent&&a!==this.timeline.totalDuration()&&Js(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?si(i):o,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!s||s==="all")&&eg(o,l))return s==="all"&&(this._pt=0),Mo(this);for(h=this._op=this._op||[],s!=="all"&&(jt(s)&&(g={},Ln(s,function(M){return g[M]=1}),s=g),s=Tg(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(h[p]=s,_=f,d={}):(d=h[p]=h[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Hl(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Mo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Io(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Io(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return At.killTweensOf(i,s,a)},e}(ea);li(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ln("staggerTo,staggerFrom,staggerFromTo",function(r){Ot[r]=function(){var e=new Mn,t=hu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var sh=function(e,t,n){return e[t]=n},i0=function(e,t,n){return e[t](n)},wg=function(e,t,n,i){return e[t](i.fp,n)},Ag=function(e,t,n){return e.setAttribute(t,n)},oh=function(e,t){return Pt(e[t])?i0:Ku(e[t])&&e.setAttribute?Ag:sh},r0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Cg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},s0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ah=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Rg=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Pg=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Hl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Lg=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},o0=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Dn=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||r0,this.d=l||this,this.set=c||sh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Lg,this.m=n,this.mt=s,this.tween=i},r}();Ln(th+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return eh[r]=1});Zn.TweenMax=Zn.TweenLite=Ot;Zn.TimelineLite=Zn.TimelineMax=Mn;At=new Mn({sortChildren:!1,defaults:Ks,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kn.stringFilter=jp;var Kr=[],sl={},Dg=[],Yh=0,Ug=0,lc=function(e){return(sl[e]||Dg).map(function(t){return t()})},mu=function(){var e=Date.now(),t=[];e-Yh>2&&(lc("matchMediaInit"),Kr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=vi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),lc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Yh=e,lc("matchMedia"))},a0=function(){function r(t,n){this.selector=n&&fu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ug++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Pt(n)&&(s=i,i=n,n=Pt);var a=this,o=function(){var c=Et,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=fu(s)),Et=a,h=i.apply(a,arguments),Pt(h)&&a._r.push(h),Et=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Pt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Et;Et=null,n(this),Et=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ot&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ot)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Kr.length;a--;)Kr[a].id===this.id&&Kr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),Ig=function(){function r(t){this.contexts=[],this.scope=t,Et&&Et.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ri(n)||(n={matches:n});var a=new a0(0,s||this.scope),o=a.conditions={},l,c,u;Et&&!a.selector&&(a.selector=Et.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=vi.matchMedia(n[c]),l&&(Kr.indexOf(a)<0&&Kr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(mu):l.addEventListener("change",mu)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),El={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Yp(i)})},timeline:function(e){return new Mn(e)},getTweensOf:function(e,t){return At.getTweensOf(e,t)},getProperty:function(e,t,n,i){jt(e)&&(e=si(e)[0]);var s=qr(e||{}).get,a=n?Up:Dp;return n==="native"&&(n=""),e&&(t?a((Xn[t]&&Xn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Xn[o]&&Xn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=si(e),e.length>1){var i=e.map(function(u){return kn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=Xn[t],o=qr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Fs._pt=0,h.init(e,n?u+n:u,Fs,0,[e]),h.render(1,h),Fs._pt&&ah(1,Fs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=kn.to(e,ss((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return At.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=jr(e.ease,Ks.ease)),Hh(Ks,e||{})},config:function(e){return Hh(Kn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Xn[o]&&!Zn[o]&&Ko(t+" effect requires "+o+" plugin.")}),rc[t]=function(o,l,c){return n(si(o),li(l||{},s),c)},a&&(Mn.prototype[t]=function(o,l,c){return this.add(rc[t](o,Ri(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){at[e]=jr(t)},parseEase:function(e,t){return arguments.length?jr(e,t):at},getById:function(e){return At.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Mn(e),i,s;for(n.smoothChildTiming=Pn(e.smoothChildTiming),At.remove(n),n._dp=0,n._time=n._tTime=At._time,i=At._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ot&&i.vars.onComplete===i._targets[0]))&&yi(n,i,i._start-i._delay),i=s;return yi(At,n,0),n},context:function(e,t){return e?new a0(e,t):Et},matchMedia:function(e){return new Ig(e)},matchMediaRefresh:function(){return Kr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||mu()},addEventListener:function(e,t){var n=sl[e]||(sl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=sl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:fg,wrapYoyo:dg,distribute:zp,random:Gp,snap:Hp,normalize:hg,getUnit:rn,clamp:ag,splitColor:qp,toArray:si,selector:fu,mapRange:Wp,pipe:cg,unitize:ug,interpolate:pg,shuffle:Bp},install:Ap,effects:rc,ticker:qn,updateRoot:Mn.updateRoot,plugins:Xn,globalTimeline:At,core:{PropTween:Dn,globals:Cp,Tween:Ot,Timeline:Mn,Animation:ea,getCache:qr,_removeLinkedListItem:Hl,reverting:function(){return sn},context:function(e){return e&&Et&&(Et.data.push(e),e._ctx=Et),Et},suppressOverwrites:function(e){return ju=e}}};Ln("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return El[r]=Ot[r]});qn.add(Mn.updateRoot);Fs=El.to({},{duration:0});var Ng=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Og=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Ng(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},cc=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(jt(s)&&(l={},Ln(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Og(o,s)}}}},kn=El.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},cc("roundProps",du),cc("modifiers"),cc("snap",Hp))||El;Ot.version=Mn.version=kn.version="3.12.5";wp=1;Zu()&&Qs();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qh,sr,Hs,lh,Gr,$h,ch,Fg=function(){return typeof window<"u"},Yi={},Ur=180/Math.PI,Gs=Math.PI/180,fs=Math.atan2,jh=1e8,uh=/([A-Z])/g,kg=/(left|right|width|margin|padding|x)/i,Bg=/[\s,\(]\S/,bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},gu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zg=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Hg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Gg=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},l0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},c0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Vg=function(e,t,n){return e.style[t]=n},Wg=function(e,t,n){return e.style.setProperty(t,n)},Xg=function(e,t,n){return e._gsap[t]=n},Yg=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},qg=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},$g=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Rt="transform",Un=Rt+"Origin",jg=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Yi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=bi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=zi(i,o)}):this.tfm[e]=a.x?a[e]:zi(i,e),e===Un&&(this.tfm.zOrigin=a.zOrigin);else return bi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Rt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Un,t,"")),e=Rt}(s||t)&&this.props.push(e,t,s[e])},u0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Kg=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(uh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ch(),(!s||!s.isStart)&&!n[Rt]&&(u0(n),i.zOrigin&&n[Un]&&(n[Un]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},h0=function(e,t){var n={target:e,props:[],revert:Kg,save:jg};return e._gsap||kn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},f0,_u=function(e,t){var n=sr.createElementNS?sr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):sr.createElement(e);return n&&n.style?n:sr.createElement(e)},Ai=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(uh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,eo(t)||t,1)||""},Kh="O,Moz,ms,Ms,Webkit".split(","),eo=function(e,t,n){var i=t||Gr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Kh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Kh[a]:"")+e},vu=function(){Fg()&&window.document&&(qh=window,sr=qh.document,Hs=sr.documentElement,Gr=_u("div")||{style:{}},_u("div"),Rt=eo(Rt),Un=Rt+"Origin",Gr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",f0=!!eo("perspective"),ch=kn.core.reverting,lh=1)},uc=function r(e){var t=_u("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Hs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Hs.removeChild(t),this.style.cssText=s,a},Zh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},d0=function(e){var t;try{t=e.getBBox()}catch{t=uc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===uc||(t=uc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Zh(e,["x","cx","x1"])||0,y:+Zh(e,["y","cy","y1"])||0,width:0,height:0}:t},p0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&d0(e))},os=function(e,t){if(t){var n=e.style,i;t in Yi&&t!==Un&&(t=Rt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(uh,"-$1").toLowerCase())):n.removeAttribute(t)}},or=function(e,t,n,i,s,a){var o=new Dn(e._pt,t,n,0,1,a?c0:l0);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Jh={deg:1,rad:1,turn:1},Zg={grid:1,flex:1},Sr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Gr.style,l=kg.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,m,p;if(i===a||!s||Jh[i]||Jh[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&p0(e),(d||a==="%")&&(Yi[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Lt(d?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(f?a:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===sr||!g.appendChild)&&(g=sr.body),m=g._gsap,m&&d&&m.width&&l&&m.time===qn.time&&!m.uncache)return Lt(s/m.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,_=e[u],M?e.style[t]=M:os(e,t)}else(d||a==="%")&&!Zg[Ai(g,"display")]&&(o.position=Ai(e,"position")),g===e&&(o.position="static"),g.appendChild(Gr),_=Gr[u],g.removeChild(Gr),o.position="absolute";return l&&d&&(m=qr(g),m.time=qn.time,m.width=g[u]),Lt(f?_*s/h:_&&s?h/_*s:0)},zi=function(e,t,n,i){var s;return lh||vu(),t in bi&&t!=="transform"&&(t=bi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Yi[t]&&t!=="transform"?(s=na(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:bl(Ai(e,Un))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Tl[t]&&Tl[t](e,t,n)||Ai(e,t)||Pp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Sr(e,t,s,n)+n:s},Jg=function(e,t,n,i){if(!n||n==="none"){var s=eo(t,e,1),a=s&&Ai(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Ai(e,"borderTopColor"))}var o=new Dn(this._pt,e.style,t,0,1,s0),l=0,c=0,u,h,f,d,_,g,m,p,M,v,S,y;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=Ai(e,t)||i,g?e.style[t]=g:os(e,t)),u=[n,i],jp(u),n=u[0],i=u[1],f=n.match(Os)||[],y=i.match(Os)||[],y.length){for(;h=Os.exec(i);)m=h[0],M=i.substring(l,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,S=g.substr((d+"").length),m.charAt(1)==="="&&(m=zs(d,m)+S),p=parseFloat(m),v=m.substr((p+"").length),l=Os.lastIndex-v.length,v||(v=v||Kn.units[t]||S,l===i.length&&(i+=v,o.e+=v)),S!==v&&(d=Sr(e,t,g,v)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?c0:l0;return Tp.test(i)&&(o.e=0),this._pt=o,o},Qh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qg=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Qh[n]||n,t[1]=Qh[i]||i,t.join(" ")},e_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Yi[o]&&(l=1,o=o==="transformOrigin"?Un:Rt),os(n,o);l&&(os(n,Rt),a&&(a.svg&&n.removeAttribute("transform"),na(n,1),a.uncache=1,u0(i)))}},Tl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Dn(e._pt,t,n,0,0,e_);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},ta=[1,0,0,1,0,0],m0={},g0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ef=function(e){var t=Ai(e,Rt);return g0(t)?ta:t.substr(7).match(Ep).map(Lt)},hh=function(e,t){var n=e._gsap||qr(e),i=e.style,s=ef(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ta:s):(s===ta&&!e.offsetParent&&e!==Hs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Hs.appendChild(e)),s=ef(e),l?i.display=l:os(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Hs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},xu=function(e,t,n,i,s,a){var o=e._gsap,l=s||hh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],v=t.split(" "),S=parseFloat(v[0])||0,y=parseFloat(v[1])||0,A,E,P,x;n?l!==ta&&(E=d*m-_*g)&&(P=S*(m/E)+y*(-g/E)+(g*M-m*p)/E,x=S*(-_/E)+y*(d/E)-(d*M-_*p)/E,S=P,y=x):(A=d0(e),S=A.x+(~v[0].indexOf("%")?S/100*A.width:S),y=A.y+(~(v[1]||v[0]).indexOf("%")?y/100*A.height:y)),i||i!==!1&&o.smooth?(p=S-c,M=y-u,o.xOffset=h+(p*d+M*g)-p,o.yOffset=f+(p*_+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=y,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Un]="0px 0px",a&&(or(a,o,"xOrigin",c,S),or(a,o,"yOrigin",u,y),or(a,o,"xOffset",h,o.xOffset),or(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+y)},na=function(e,t){var n=e._gsap||new Qp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Ai(e,Un)||"0",u,h,f,d,_,g,m,p,M,v,S,y,A,E,P,x,T,F,U,$,L,k,Y,O,Z,K,C,I,q,he,ae,fe;return u=h=f=g=m=p=M=v=S=0,d=_=1,n.svg=!!(e.getCTM&&p0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Rt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Rt]!=="none"?l[Rt]:"")),i.scale=i.rotate=i.translate="none"),E=hh(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),xu(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,E)),y=n.xOrigin||0,A=n.yOrigin||0,E!==ta&&(F=E[0],U=E[1],$=E[2],L=E[3],u=k=E[4],h=Y=E[5],E.length===6?(d=Math.sqrt(F*F+U*U),_=Math.sqrt(L*L+$*$),g=F||U?fs(U,F)*Ur:0,M=$||L?fs($,L)*Ur+g:0,M&&(_*=Math.abs(Math.cos(M*Gs))),n.svg&&(u-=y-(y*F+A*$),h-=A-(y*U+A*L))):(fe=E[6],he=E[7],C=E[8],I=E[9],q=E[10],ae=E[11],u=E[12],h=E[13],f=E[14],P=fs(fe,q),m=P*Ur,P&&(x=Math.cos(-P),T=Math.sin(-P),O=k*x+C*T,Z=Y*x+I*T,K=fe*x+q*T,C=k*-T+C*x,I=Y*-T+I*x,q=fe*-T+q*x,ae=he*-T+ae*x,k=O,Y=Z,fe=K),P=fs(-$,q),p=P*Ur,P&&(x=Math.cos(-P),T=Math.sin(-P),O=F*x-C*T,Z=U*x-I*T,K=$*x-q*T,ae=L*T+ae*x,F=O,U=Z,$=K),P=fs(U,F),g=P*Ur,P&&(x=Math.cos(P),T=Math.sin(P),O=F*x+U*T,Z=k*x+Y*T,U=U*x-F*T,Y=Y*x-k*T,F=O,k=Z),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Lt(Math.sqrt(F*F+U*U+$*$)),_=Lt(Math.sqrt(Y*Y+fe*fe)),P=fs(k,Y),M=Math.abs(P)>2e-4?P*Ur:0,S=ae?1/(ae<0?-ae:ae):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!g0(Ai(e,Rt)),O&&e.setAttribute("transform",O))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Lt(d),n.scaleY=Lt(_),n.rotation=Lt(g)+o,n.rotationX=Lt(m)+o,n.rotationY=Lt(p)+o,n.skewX=M+o,n.skewY=v+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Un]=bl(c)),n.xOffset=n.yOffset=0,n.force3D=Kn.force3D,n.renderTransform=n.svg?n_:f0?_0:t_,n.uncache=0,n},bl=function(e){return(e=e.split(" "))[0]+" "+e[1]},hc=function(e,t,n){var i=rn(t);return Lt(parseFloat(t)+parseFloat(Sr(e,"x",n+"px",i)))+i},t_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,_0(e,t)},Ar="0deg",po="0px",Cr=") ",_0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,v=n.zOrigin,S="",y=p==="auto"&&e&&e!==1||p===!0;if(v&&(h!==Ar||u!==Ar)){var A=parseFloat(u)*Gs,E=Math.sin(A),P=Math.cos(A),x;A=parseFloat(h)*Gs,x=Math.cos(A),a=hc(M,a,E*x*-v),o=hc(M,o,-Math.sin(A)*-v),l=hc(M,l,P*x*-v+v)}m!==po&&(S+="perspective("+m+Cr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(y||a!==po||o!==po||l!==po)&&(S+=l!==po||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Cr),c!==Ar&&(S+="rotate("+c+Cr),u!==Ar&&(S+="rotateY("+u+Cr),h!==Ar&&(S+="rotateX("+h+Cr),(f!==Ar||d!==Ar)&&(S+="skew("+f+", "+d+Cr),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Cr),M.style[Rt]=S||"translate(0, 0)"},n_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,v=parseFloat(a),S=parseFloat(o),y,A,E,P,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Gs,c*=Gs,y=Math.cos(l)*h,A=Math.sin(l)*h,E=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Gs,x=Math.tan(c-u),x=Math.sqrt(1+x*x),E*=x,P*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),y*=x,A*=x)),y=Lt(y),A=Lt(A),E=Lt(E),P=Lt(P)):(y=h,P=f,A=E=0),(v&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(v=Sr(d,"x",a,"px"),S=Sr(d,"y",o,"px")),(_||g||m||p)&&(v=Lt(v+_-(_*y+g*E)+m),S=Lt(S+g-(_*A+g*P)+p)),(i||s)&&(x=d.getBBox(),v=Lt(v+i/100*x.width),S=Lt(S+s/100*x.height)),x="matrix("+y+","+A+","+E+","+P+","+v+","+S+")",d.setAttribute("transform",x),M&&(d.style[Rt]=x)},i_=function(e,t,n,i,s){var a=360,o=jt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ur:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*jh)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*jh)%a-~~(c/a)*a)),e._pt=f=new Dn(e._pt,t,n,i,c,zg),f.e=u,f.u="deg",e._props.push(n),f},tf=function(e,t){for(var n in t)e[n]=t[n];return e},r_=function(e,t,n){var i=tf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Rt]=t,o=na(n,1),os(n,Rt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Rt],a[Rt]=t,o=na(n,1),a[Rt]=c);for(l in Yi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=rn(c),_=rn(u),h=d!==_?Sr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Dn(e._pt,o,l,h,f-h,gu),e._pt.u=_||0,e._props.push(l));tf(o,i)};Ln("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Tl[e>1?"border"+r:r]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(_){return zi(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,h)}});var v0={name:"css",register:vu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,m,p,M,v,S,y,A,E,P;lh||vu(),this.styles=this.styles||h0(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Xn[g]&&e0(g,t,n,i,e,s)))){if(d=typeof u,_=Tl[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Jo(u)),_)_(this,e,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",pr.lastIndex=0,pr.test(c)||(m=rn(c),p=rn(u)),p?m!==p&&(c=Sr(e,g,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),P.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],jt(c)&&~c.indexOf("random(")&&(c=Jo(c)),rn(c+"")||c==="auto"||(c+=Kn.units[g]||rn(zi(e,g))||""),(c+"").charAt(1)==="="&&(c=zi(e,g))):c=zi(e,g),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in bi&&(g==="autoAlpha"&&(f===1&&zi(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,o.visibility),or(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=bi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Yi,v){if(this.styles.save(g),S||(y=e._gsap,y.renderTransform&&!t.parseTransform||na(e,t.parseTransform),A=t.smoothOrigin!==!1&&y.smooth,S=this._pt=new Dn(this._pt,o,Rt,0,1,y.renderTransform,y,0,-1),S.dep=1),g==="scale")this._pt=new Dn(this._pt,y,"scaleY",y.scaleY,(M?zs(y.scaleY,M+h):h)-y.scaleY||0,gu),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Un,0,o[Un]),u=Qg(u),y.svg?xu(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==y.zOrigin&&or(this,y,"zOrigin",y.zOrigin,p),or(this,o,g,bl(c),bl(u)));continue}else if(g==="svgOrigin"){xu(e,u,1,A,0,this);continue}else if(g in m0){i_(this,y,g,f,M?zs(f,M+u):u);continue}else if(g==="smoothOrigin"){or(this,y,"smooth",y.smooth,u);continue}else if(g==="force3D"){y[g]=u;continue}else if(g==="transform"){r_(this,u,e);continue}}else g in o||(g=eo(g)||g);if(v||(h||h===0)&&(f||f===0)&&!Bg.test(u)&&g in o)m=(c+"").substr((f+"").length),h||(h=0),p=rn(u)||(g in Kn.units?Kn.units[g]:m),m!==p&&(f=Sr(e,g,c,p)),this._pt=new Dn(this._pt,v?y:o,g,f,(M?zs(f,M+h):h)-f,!v&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Gg:gu),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Hg);else if(g in o)Jg.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,i,s);else if(g!=="parseTransform"){Qu(g,u);continue}v||(g in o?P.push(g,0,o[g]):P.push(g,1,c||e[g])),a.push(g)}}E&&o0(this)},render:function(e,t){if(t.tween._time||!ch())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:zi,aliases:bi,getSetter:function(e,t,n){var i=bi[t];return i&&i.indexOf(",")<0&&(t=i),t in Yi&&t!==Un&&(e._gsap.x||zi(e,"x"))?n&&$h===n?t==="scale"?Yg:Xg:($h=n||{})&&(t==="scale"?qg:$g):e.style&&!Ku(e.style[t])?Vg:~t.indexOf("-")?Wg:oh(e,t)},core:{_removeProperty:os,_getMatrix:hh}};kn.utils.checkPrefix=eo;kn.core.getStyleSaver=h0;(function(r,e,t,n){var i=Ln(r+","+e+","+t,function(s){Yi[s]=1});Ln(e,function(s){Kn.units[s]="deg",m0[s]=1}),bi[i[13]]=r+","+e,Ln(n,function(s){var a=s.split(":");bi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Kn.units[r]="px"});kn.registerPlugin(v0);var $e=kn.registerPlugin(v0)||kn;$e.core.Tween;function s_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function o_(r,e,t){return e&&s_(r.prototype,e),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Kt,ol,$n,ar,lr,Vs,x0,Ir,Oo,S0,Gi,fi,M0,y0=function(){return Kt||typeof window<"u"&&(Kt=window.gsap)&&Kt.registerPlugin&&Kt},E0=1,ks=[],tt=[],Ci=[],Fo=Date.now,Su=function(e,t){return t},a_=function(){var e=Oo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,tt),i.push.apply(i,Ci),tt=n,Ci=i,Su=function(a,o){return t[a](o)}},mr=function(e,t){return~Ci.indexOf(e)&&Ci[Ci.indexOf(e)+1][t]},ko=function(e){return!!~S0.indexOf(e)},un=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},va="scrollLeft",xa="scrollTop",Mu=function(){return Gi&&Gi.isPressed||tt.cache++},wl=function(e,t){var n=function i(s){if(s||s===0){E0&&($n.history.scrollRestoration="manual");var a=Gi&&Gi.isPressed;s=i.v=Math.round(s)||(Gi&&Gi.iOS?1:0),e(s),i.cacheID=tt.cache,a&&Su("ss",s)}else(t||tt.cache!==i.cacheID||Su("ref"))&&(i.cacheID=tt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},yn={s:va,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:wl(function(r){return arguments.length?$n.scrollTo(r,zt.sc()):$n.pageXOffset||ar[va]||lr[va]||Vs[va]||0})},zt={s:xa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:yn,sc:wl(function(r){return arguments.length?$n.scrollTo(yn.sc(),r):$n.pageYOffset||ar[xa]||lr[xa]||Vs[xa]||0})},wn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Kt.utils.toArray)(e)[0]||(typeof e=="string"&&Kt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Mr=function(e,t){var n=t.s,i=t.sc;ko(e)&&(e=ar.scrollingElement||lr);var s=tt.indexOf(e),a=i===zt.sc?1:2;!~s&&(s=tt.push(e)-1),tt[s+a]||un(e,"scroll",Mu);var o=tt[s+a],l=o||(tt[s+a]=wl(mr(e,n),!0)||(ko(e)?i:wl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Kt.getProperty(e,"scrollBehavior")==="smooth"),l},yu=function(e,t,n){var i=e,s=e,a=Fo(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=Fo();g||m-a>l?(s=i,i=_,o=a,a=m):n?i+=_:i=s+(_-s)/(m-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},f=function(_){var g=o,m=s,p=Fo();return(_||_===0)&&_!==i&&u(_),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-g)*1e3};return{update:u,reset:h,getVelocity:f}},mo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},nf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},T0=function(){Oo=Kt.core.globals().ScrollTrigger,Oo&&Oo.core&&a_()},b0=function(e){return Kt=e||y0(),!ol&&Kt&&typeof document<"u"&&document.body&&($n=window,ar=document,lr=ar.documentElement,Vs=ar.body,S0=[$n,ar,lr,Vs],Kt.utils.clamp,M0=Kt.core.context||function(){},Ir="onpointerenter"in Vs?"pointer":"mouse",x0=Dt.isTouch=$n.matchMedia&&$n.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in $n||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,fi=Dt.eventTypes=("ontouchstart"in lr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in lr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return E0=0},500),T0(),ol=1),ol};yn.op=zt;tt.cache=0;var Dt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){ol||b0(Kt)||console.warn("Please gsap.registerPlugin(Observer)"),Oo||T0();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,v=n.onPress,S=n.onRelease,y=n.onRight,A=n.onLeft,E=n.onUp,P=n.onDown,x=n.onChangeX,T=n.onChangeY,F=n.onChange,U=n.onToggleX,$=n.onToggleY,L=n.onHover,k=n.onHoverEnd,Y=n.onMove,O=n.ignoreCheck,Z=n.isNormalizer,K=n.onGestureStart,C=n.onGestureEnd,I=n.onWheel,q=n.onEnable,he=n.onDisable,ae=n.onClick,fe=n.scrollSpeed,Ee=n.capture,De=n.allowClicks,Te=n.lockAxis,Pe=n.onLockAxis;this.target=o=wn(o)||lr,this.vars=n,d&&(d=Kt.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,fe=fe||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat($n.getComputedStyle(Vs).lineHeight)||22);var lt,Ue,z,Ve,me,we,Ae,V=this,Be=0,He=0,nt=n.passive||!u,Ke=Mr(o,yn),vt=Mr(o,zt),R=Ke(),b=vt(),B=~a.indexOf("touch")&&!~a.indexOf("pointer")&&fi[0]==="pointerdown",re=ko(o),Q=o.ownerDocument||ar,te=[0,0,0],ge=[0,0,0],se=0,pe=function(){return se=Fo()},_e=function(Me,Re){return(V.event=Me)&&d&&~d.indexOf(Me.target)||Re&&B&&Me.pointerType!=="touch"||O&&O(Me,Re)},it=function(){V._vx.reset(),V._vy.reset(),Ue.pause(),h&&h(V)},ie=function(){var Me=V.deltaX=nf(te),Re=V.deltaY=nf(ge),oe=Math.abs(Me)>=i,Oe=Math.abs(Re)>=i;F&&(oe||Oe)&&F(V,Me,Re,te,ge),oe&&(y&&V.deltaX>0&&y(V),A&&V.deltaX<0&&A(V),x&&x(V),U&&V.deltaX<0!=Be<0&&U(V),Be=V.deltaX,te[0]=te[1]=te[2]=0),Oe&&(P&&V.deltaY>0&&P(V),E&&V.deltaY<0&&E(V),T&&T(V),$&&V.deltaY<0!=He<0&&$(V),He=V.deltaY,ge[0]=ge[1]=ge[2]=0),(Ve||z)&&(Y&&Y(V),z&&(M(V),z=!1),Ve=!1),we&&!(we=!1)&&Pe&&Pe(V),me&&(I(V),me=!1),lt=0},st=function(Me,Re,oe){te[oe]+=Me,ge[oe]+=Re,V._vx.update(Me),V._vy.update(Re),c?lt||(lt=requestAnimationFrame(ie)):ie()},ze=function(Me,Re){Te&&!Ae&&(V.axis=Ae=Math.abs(Me)>Math.abs(Re)?"x":"y",we=!0),Ae!=="y"&&(te[2]+=Me,V._vx.update(Me,!0)),Ae!=="x"&&(ge[2]+=Re,V._vy.update(Re,!0)),c?lt||(lt=requestAnimationFrame(ie)):ie()},Ie=function(Me){if(!_e(Me,1)){Me=mo(Me,u);var Re=Me.clientX,oe=Me.clientY,Oe=Re-V.x,Ne=oe-V.y,We=V.isDragging;V.x=Re,V.y=oe,(We||Math.abs(V.startX-Re)>=s||Math.abs(V.startY-oe)>=s)&&(M&&(z=!0),We||(V.isDragging=!0),ze(Oe,Ne),We||m&&m(V))}},Le=V.onPress=function(xe){_e(xe,1)||xe&&xe.button||(V.axis=Ae=null,Ue.pause(),V.isPressed=!0,xe=mo(xe),Be=He=0,V.startX=V.x=xe.clientX,V.startY=V.y=xe.clientY,V._vx.reset(),V._vy.reset(),un(Z?o:Q,fi[1],Ie,nt,!0),V.deltaX=V.deltaY=0,v&&v(V))},ee=V.onRelease=function(xe){if(!_e(xe,1)){cn(Z?o:Q,fi[1],Ie,!0);var Me=!isNaN(V.y-V.startY),Re=V.isDragging,oe=Re&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Oe=mo(xe);!oe&&Me&&(V._vx.reset(),V._vy.reset(),u&&De&&Kt.delayedCall(.08,function(){if(Fo()-se>300&&!xe.defaultPrevented){if(xe.target.click)xe.target.click();else if(Q.createEvent){var Ne=Q.createEvent("MouseEvents");Ne.initMouseEvent("click",!0,!0,$n,1,Oe.screenX,Oe.screenY,Oe.clientX,Oe.clientY,!1,!1,!1,!1,0,null),xe.target.dispatchEvent(Ne)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,h&&Re&&!Z&&Ue.restart(!0),p&&Re&&p(V),S&&S(V,oe)}},Ye=function(Me){return Me.touches&&Me.touches.length>1&&(V.isGesturing=!0)&&K(Me,V.isDragging)},D=function(){return(V.isGesturing=!1)||C(V)},ue=function(Me){if(!_e(Me)){var Re=Ke(),oe=vt();st((Re-R)*fe,(oe-b)*fe,1),R=Re,b=oe,h&&Ue.restart(!0)}},ne=function(Me){if(!_e(Me)){Me=mo(Me,u),I&&(me=!0);var Re=(Me.deltaMode===1?l:Me.deltaMode===2?$n.innerHeight:1)*_;st(Me.deltaX*Re,Me.deltaY*Re,0),h&&!Z&&Ue.restart(!0)}},j=function(Me){if(!_e(Me)){var Re=Me.clientX,oe=Me.clientY,Oe=Re-V.x,Ne=oe-V.y;V.x=Re,V.y=oe,Ve=!0,h&&Ue.restart(!0),(Oe||Ne)&&ze(Oe,Ne)}},le=function(Me){V.event=Me,L(V)},Ce=function(Me){V.event=Me,k(V)},et=function(Me){return _e(Me)||mo(Me,u)&&ae(V)};Ue=V._dc=Kt.delayedCall(f||.25,it).pause(),V.deltaX=V.deltaY=0,V._vx=yu(0,50,!0),V._vy=yu(0,50,!0),V.scrollX=Ke,V.scrollY=vt,V.isDragging=V.isGesturing=V.isPressed=!1,M0(this),V.enable=function(xe){return V.isEnabled||(un(re?Q:o,"scroll",Mu),a.indexOf("scroll")>=0&&un(re?Q:o,"scroll",ue,nt,Ee),a.indexOf("wheel")>=0&&un(o,"wheel",ne,nt,Ee),(a.indexOf("touch")>=0&&x0||a.indexOf("pointer")>=0)&&(un(o,fi[0],Le,nt,Ee),un(Q,fi[2],ee),un(Q,fi[3],ee),De&&un(o,"click",pe,!0,!0),ae&&un(o,"click",et),K&&un(Q,"gesturestart",Ye),C&&un(Q,"gestureend",D),L&&un(o,Ir+"enter",le),k&&un(o,Ir+"leave",Ce),Y&&un(o,Ir+"move",j)),V.isEnabled=!0,xe&&xe.type&&Le(xe),q&&q(V)),V},V.disable=function(){V.isEnabled&&(ks.filter(function(xe){return xe!==V&&ko(xe.target)}).length||cn(re?Q:o,"scroll",Mu),V.isPressed&&(V._vx.reset(),V._vy.reset(),cn(Z?o:Q,fi[1],Ie,!0)),cn(re?Q:o,"scroll",ue,Ee),cn(o,"wheel",ne,Ee),cn(o,fi[0],Le,Ee),cn(Q,fi[2],ee),cn(Q,fi[3],ee),cn(o,"click",pe,!0),cn(o,"click",et),cn(Q,"gesturestart",Ye),cn(Q,"gestureend",D),cn(o,Ir+"enter",le),cn(o,Ir+"leave",Ce),cn(o,Ir+"move",j),V.isEnabled=V.isPressed=V.isDragging=!1,he&&he(V))},V.kill=V.revert=function(){V.disable();var xe=ks.indexOf(V);xe>=0&&ks.splice(xe,1),Gi===V&&(Gi=0)},ks.push(V),Z&&ko(o)&&(Gi=V),V.enable(g)},o_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Dt.version="3.12.5";Dt.create=function(r){return new Dt(r)};Dt.register=b0;Dt.getAll=function(){return ks.slice()};Dt.getById=function(r){return ks.filter(function(e){return e.vars.id===r})[0]};y0()&&Kt.registerPlugin(Dt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ve,Us,ot,bt,di,Mt,w0,Al,ia,Bo,Eo,Sa,en,Wl,Eu,gn,rf,sf,Is,A0,fc,C0,pn,Tu,R0,P0,tr,bu,fh,Ws,dh,Cl,wu,dc,Ma=1,nn=Date.now,pc=nn(),ai=0,To=0,of=function(e,t,n){var i=Wn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},af=function(e,t){return t&&(!Wn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},l_=function r(){return To&&requestAnimationFrame(r)},lf=function(){return Wl=1},cf=function(){return Wl=0},xi=function(e){return e},bo=function(e){return Math.round(e*1e5)/1e5||0},L0=function(){return typeof window<"u"},D0=function(){return ve||L0()&&(ve=window.gsap)&&ve.registerPlugin&&ve},as=function(e){return!!~w0.indexOf(e)},U0=function(e){return(e==="Height"?dh:ot["inner"+e])||di["client"+e]||Mt["client"+e]},I0=function(e){return mr(e,"getBoundingClientRect")||(as(e)?function(){return hl.width=ot.innerWidth,hl.height=dh,hl}:function(){return Hi(e)})},c_=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=mr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?U0(s):e["client"+s])||0}},u_=function(e,t){return!t||~Ci.indexOf(e)?I0(e):function(){return hl}},wi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=mr(e,n))?a()-I0(e)()[s]:as(e)?(di[n]||Mt[n])-U0(i):e[n]-e["offset"+i])},ya=function(e,t){for(var n=0;n<Is.length;n+=3)(!t||~t.indexOf(Is[n+1]))&&e(Is[n],Is[n+1],Is[n+2])},Wn=function(e){return typeof e=="string"},En=function(e){return typeof e=="function"},wo=function(e){return typeof e=="number"},Nr=function(e){return typeof e=="object"},go=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},mc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ds=Math.abs,N0="left",O0="top",ph="right",mh="bottom",Zr="width",Jr="height",zo="Right",Ho="Left",Go="Top",Vo="Bottom",Nt="padding",ei="margin",to="Width",gh="Height",Bt="px",ti=function(e){return ot.getComputedStyle(e)},h_=function(e){var t=ti(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},uf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Hi=function(e,t){var n=t&&ti(e)[Eu]!=="matrix(1, 0, 0, 1, 0, 0)"&&ve.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Rl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},F0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},f_=function(e){return function(t){return ve.utils.snap(F0(e),t)}},_h=function(e){var t=ve.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},d_=function(e){return function(t,n){return _h(F0(e))(t,n.direction)}},Ea=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},qt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Yt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ta=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},hf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ba={toggleActions:"play",anticipatePin:0},Pl={top:0,left:0,center:.5,bottom:1,right:1},al=function(e,t){if(Wn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Pl?Pl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},wa=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=bt.createElement("div"),g=as(n)||mr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?Mt:n,M=e.indexOf("start")!==-1,v=M?c:u,S="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(S+=(i===zt?ph:mh)+":"+(a+parseFloat(f))+"px;"),o&&(S+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=S,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],ll(_,0,i,M),_},ll=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+to]=1,s["border"+o+to]=0,s[n.p]=t+"px",ve.set(e,s)},Je=[],Au={},ra,ff=function(){return nn()-ai>34&&(ra||(ra=requestAnimationFrame(Wi)))},ps=function(){(!pn||!pn.isPressed||pn.startX>Mt.clientWidth)&&(tt.cache++,pn?ra||(ra=requestAnimationFrame(Wi)):Wi(),ai||cs("scrollStart"),ai=nn())},gc=function(){P0=ot.innerWidth,R0=ot.innerHeight},Ao=function(){tt.cache++,!en&&!C0&&!bt.fullscreenElement&&!bt.webkitFullscreenElement&&(!Tu||P0!==ot.innerWidth||Math.abs(ot.innerHeight-R0)>ot.innerHeight*.25)&&Al.restart(!0)},ls={},p_=[],k0=function r(){return Yt(Ge,"scrollEnd",r)||Vr(!0)},cs=function(e){return ls[e]&&ls[e].map(function(t){return t()})||p_},Vn=[],B0=function(e){for(var t=0;t<Vn.length;t+=5)(!e||Vn[t+4]&&Vn[t+4].query===e)&&(Vn[t].style.cssText=Vn[t+1],Vn[t].getBBox&&Vn[t].setAttribute("transform",Vn[t+2]||""),Vn[t+3].uncache=1)},vh=function(e,t){var n;for(gn=0;gn<Je.length;gn++)n=Je[gn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Cl=!0,t&&B0(t),t||cs("revert")},z0=function(e,t){tt.cache++,(t||!_n)&&tt.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),Wn(e)&&(ot.history.scrollRestoration=fh=e)},_n,Qr=0,df,m_=function(){if(df!==Qr){var e=df=Qr;requestAnimationFrame(function(){return e===Qr&&Vr(!0)})}},H0=function(){Mt.appendChild(Ws),dh=!pn&&Ws.offsetHeight||ot.innerHeight,Mt.removeChild(Ws)},pf=function(e){return ia(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Vr=function(e,t){if(ai&&!e&&!Cl){qt(Ge,"scrollEnd",k0);return}H0(),_n=Ge.isRefreshing=!0,tt.forEach(function(i){return En(i)&&++i.cacheID&&(i.rec=i())});var n=cs("refreshInit");A0&&Ge.sort(),t||vh(),tt.forEach(function(i){En(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Je.slice(0).forEach(function(i){return i.refresh()}),Cl=!1,Je.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),wu=1,pf(!0),Je.forEach(function(i){var s=wi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),pf(!1),wu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),tt.forEach(function(i){En(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),z0(fh,1),Al.pause(),Qr++,_n=2,Wi(2),Je.forEach(function(i){return En(i.vars.onRefresh)&&i.vars.onRefresh(i)}),_n=Ge.isRefreshing=!1,cs("refresh")},Cu=0,cl=1,Wo,Wi=function(e){if(e===2||!_n&&!Cl){Ge.isUpdating=!0,Wo&&Wo.update(0);var t=Je.length,n=nn(),i=n-pc>=50,s=t&&Je[0].scroll();if(cl=Cu>s?-1:1,_n||(Cu=s),i&&(ai&&!Wl&&n-ai>200&&(ai=0,cs("scrollEnd")),Eo=pc,pc=n),cl<0){for(gn=t;gn-- >0;)Je[gn]&&Je[gn].update(0,i);cl=1}else for(gn=0;gn<t;gn++)Je[gn]&&Je[gn].update(0,i);Ge.isUpdating=!1}ra=0},Ru=[N0,O0,mh,ph,ei+Vo,ei+zo,ei+Go,ei+Ho,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ul=Ru.concat([Zr,Jr,"boxSizing","max"+to,"max"+gh,"position",ei,Nt,Nt+Go,Nt+zo,Nt+Vo,Nt+Ho]),g_=function(e,t,n){Xs(n);var i=e._gsap;if(i.spacerIsNative)Xs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},_c=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Ru.length,a=t.style,o=e.style,l;s--;)l=Ru[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[mh]=o[ph]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Zr]=Rl(e,yn)+Bt,a[Jr]=Rl(e,zt)+Bt,a[Nt]=o[ei]=o[O0]=o[N0]="0",Xs(i),o[Zr]=o["max"+to]=n[Zr],o[Jr]=o["max"+gh]=n[Jr],o[Nt]=n[Nt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},__=/([A-Z])/g,Xs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||ve.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(__,"-$1").toLowerCase())}},Aa=function(e){for(var t=ul.length,n=e.style,i=[],s=0;s<t;s++)i.push(ul[s],n[ul[s]]);return i.t=e,i},v_=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},hl={left:0,top:0},mf=function(e,t,n,i,s,a,o,l,c,u,h,f,d,_){En(e)&&(e=e(l)),Wn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?al("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,M;if(d&&d.seek(0),isNaN(e)||(e=+e),wo(e))d&&(e=ve.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&ll(o,n,i,!0);else{En(t)&&(t=t(l));var v=(e||"0").split(" "),S,y,A,E;M=wn(t,l)||Mt,S=Hi(M)||{},(!S||!S.left&&!S.top)&&ti(M).display==="none"&&(E=M.style.display,M.style.display="block",S=Hi(M),E?M.style.display=E:M.style.removeProperty("display")),y=al(v[0],S[i.d]),A=al(v[1]||"0",n),e=S[i.p]-c[i.p]-u+y+s-A,o&&ll(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var P=e+n,x=a._isStart;m="scroll"+i.d2,ll(a,P,i,x&&P>20||!x&&(h?Math.max(Mt[m],di[m]):a.parentNode[m])<=P+1),h&&(c=Hi(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Bt))}return d&&M&&(m=Hi(M),d.seek(f),p=Hi(M),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},x_=/(webkit|moz|length|cssText|inset)/i,gf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===Mt){e._stOrig=s.cssText,o=ti(e);for(a in o)!+a&&!x_.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;ve.core.getCache(e).uncache=1,t.appendChild(e)}},G0=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=a,a}},Ca=function(e,t,n){var i={};i[t.p]="+="+n,ve.set(e,i)},_f=function(e,t){var n=Mr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,_={};c=c||n();var g=G0(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){tt.cache++,a.tween&&Wi()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=ve.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},qt(e,"wheel",n.wheelHandler),Ge.isTouch&&qt(e,"touchmove",n.wheelHandler),s},Ge=function(){function r(t,n){Us||r.register(ve)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),bu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!To){this.update=this.refresh=this.kill=xi;return}n=uf(Wn(n)||wo(n)||n.nodeType?{trigger:n}:n,ba);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,v=s.once,S=s.snap,y=s.pinReparent,A=s.pinSpacer,E=s.containerAnimation,P=s.fastScrollEnd,x=s.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?yn:zt,F=!h&&h!==0,U=wn(n.scroller||ot),$=ve.core.getCache(U),L=as(U),k=("pinType"in n?n.pinType:mr(U,"pinType")||L&&"fixed")==="fixed",Y=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=F&&n.toggleActions.split(" "),Z="markers"in n?n.markers:ba.markers,K=L?0:parseFloat(ti(U)["border"+T.p2+to])||0,C=this,I=n.onRefreshInit&&function(){return n.onRefreshInit(C)},q=c_(U,L,T),he=u_(U,L),ae=0,fe=0,Ee=0,De=Mr(U,T),Te,Pe,lt,Ue,z,Ve,me,we,Ae,V,Be,He,nt,Ke,vt,R,b,B,re,Q,te,ge,se,pe,_e,it,ie,st,ze,Ie,Le,ee,Ye,D,ue,ne,j,le,Ce;if(C._startClamp=C._endClamp=!1,C._dir=T,m*=45,C.scroller=U,C.scroll=E?E.time.bind(E):De,Ue=De(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(A0=1,n.refreshPriority===-9999&&(Wo=C)),$.tweenScroll=$.tweenScroll||{top:_f(U,zt),left:_f(U,yn)},C.tweenTo=Te=$.tweenScroll[T.p],C.scrubDuration=function(oe){Ye=wo(oe)&&oe,Ye?ee?ee.duration(oe):ee=ve.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ye,paused:!0,onComplete:function(){return p&&p(C)}}):(ee&&ee.progress(1).kill(),ee=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),Ie=0,l||(l=i.vars.id)),S&&((!Nr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in Mt.style&&ve.set(L?[Mt,di]:U,{scrollBehavior:"auto"}),tt.forEach(function(oe){return En(oe)&&oe.target===(L?bt.scrollingElement||di:U)&&(oe.smooth=!1)}),lt=En(S.snapTo)?S.snapTo:S.snapTo==="labels"?f_(i):S.snapTo==="labelsDirectional"?d_(i):S.directional!==!1?function(oe,Oe){return _h(S.snapTo)(oe,nn()-fe<500?0:Oe.direction)}:ve.utils.snap(S.snapTo),D=S.duration||{min:.1,max:2},D=Nr(D)?Bo(D.min,D.max):Bo(D,D),ue=ve.delayedCall(S.delay||Ye/2||.1,function(){var oe=De(),Oe=nn()-fe<500,Ne=Te.tween;if((Oe||Math.abs(C.getVelocity())<10)&&!Ne&&!Wl&&ae!==oe){var We=(oe-Ve)/Ke,Tt=i&&!F?i.totalProgress():We,Ze=Oe?0:(Tt-Le)/(nn()-Eo)*1e3||0,mt=ve.utils.clamp(-We,1-We,ds(Ze/2)*Ze/.185),Ft=We+(S.inertia===!1?0:mt),xt,gt,ut=S,Bn=ut.onStart,w=ut.onInterrupt,N=ut.onComplete;if(xt=lt(Ft,C),wo(xt)||(xt=Ft),gt=Math.round(Ve+xt*Ke),oe<=me&&oe>=Ve&&gt!==oe){if(Ne&&!Ne._initted&&Ne.data<=ds(gt-oe))return;S.inertia===!1&&(mt=xt-We),Te(gt,{duration:D(ds(Math.max(ds(Ft-Tt),ds(xt-Tt))*.185/Ze/.05||0)),ease:S.ease||"power3",data:ds(gt-oe),onInterrupt:function(){return ue.restart(!0)&&w&&w(C)},onComplete:function(){C.update(),ae=De(),i&&(ee?ee.resetTo("totalProgress",xt,i._tTime/i._tDur):i.progress(xt)),Ie=Le=i&&!F?i.totalProgress():C.progress,M&&M(C),N&&N(C)}},oe,mt*Ke,gt-oe-mt*Ke),Bn&&Bn(C,Te.tween)}}else C.isActive&&ae!==oe&&ue.restart(!0)}).pause()),l&&(Au[l]=C),f=C.trigger=wn(f||d!==!0&&d),Ce=f&&f._gsap&&f._gsap.stRevert,Ce&&(Ce=Ce(C)),d=d===!0?f:wn(d),Wn(o)&&(o={targets:f,className:o}),d&&(_===!1||_===ei||(_=!_&&d.parentNode&&d.parentNode.style&&ti(d.parentNode).display==="flex"?!1:Nt),C.pin=d,Pe=ve.core.getCache(d),Pe.spacer?vt=Pe.pinState:(A&&(A=wn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Pe.spacerIsNative=!!A,A&&(Pe.spacerState=Aa(A))),Pe.spacer=B=A||bt.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),Pe.pinState=vt=Aa(d)),n.force3D!==!1&&ve.set(d,{force3D:!0}),C.spacer=B=Pe.spacer,ze=ti(d),pe=ze[_+T.os2],Q=ve.getProperty(d),te=ve.quickSetter(d,T.a,Bt),_c(d,B,ze),b=Aa(d)),Z){He=Nr(Z)?uf(Z,hf):hf,V=wa("scroller-start",l,U,T,He,0),Be=wa("scroller-end",l,U,T,He,0,V),re=V["offset"+T.op.d2];var et=wn(mr(U,"content")||U);we=this.markerStart=wa("start",l,et,T,He,re,0,E),Ae=this.markerEnd=wa("end",l,et,T,He,re,0,E),E&&(le=ve.quickSetter([we,Ae],T.a,Bt)),!k&&!(Ci.length&&mr(U,"fixedMarkers")===!0)&&(h_(L?Mt:U),ve.set([V,Be],{force3D:!0}),it=ve.quickSetter(V,T.a,Bt),st=ve.quickSetter(Be,T.a,Bt))}if(E){var xe=E.vars.onUpdate,Me=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){C.update(0,0,1),xe&&xe.apply(E,Me||[])})}if(C.previous=function(){return Je[Je.indexOf(C)-1]},C.next=function(){return Je[Je.indexOf(C)+1]},C.revert=function(oe,Oe){if(!Oe)return C.kill(!0);var Ne=oe!==!1||!C.enabled,We=en;Ne!==C.isReverted&&(Ne&&(ne=Math.max(De(),C.scroll.rec||0),Ee=C.progress,j=i&&i.progress()),we&&[we,Ae,V,Be].forEach(function(Tt){return Tt.style.display=Ne?"none":"block"}),Ne&&(en=C,C.update(Ne)),d&&(!y||!C.isActive)&&(Ne?g_(d,B,vt):_c(d,B,ti(d),_e)),Ne||C.update(Ne),en=We,C.isReverted=Ne)},C.refresh=function(oe,Oe,Ne,We){if(!((en||!C.enabled)&&!Oe)){if(d&&oe&&ai){qt(r,"scrollEnd",k0);return}!_n&&I&&I(C),en=C,Te.tween&&!Ne&&(Te.tween.kill(),Te.tween=0),ee&&ee.pause(),g&&i&&i.revert({kill:!1}).invalidate(),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Tt=q(),Ze=he(),mt=E?E.duration():wi(U,T),Ft=Ke<=.01,xt=0,gt=We||0,ut=Nr(Ne)?Ne.end:n.end,Bn=n.endTrigger||f,w=Nr(Ne)?Ne.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),N=C.pinnedContainer=n.pinnedContainer&&wn(n.pinnedContainer,C),W=f&&Math.max(0,Je.indexOf(C))||0,G=W,X,ce,Se,Fe,ye,be,ke,Xe,yt,kt,ht,an,dt;for(Z&&Nr(Ne)&&(an=ve.getProperty(V,T.p),dt=ve.getProperty(Be,T.p));G--;)be=Je[G],be.end||be.refresh(0,1)||(en=C),ke=be.pin,ke&&(ke===f||ke===d||ke===N)&&!be.isReverted&&(kt||(kt=[]),kt.unshift(be),be.revert(!0,!0)),be!==Je[G]&&(W--,G--);for(En(w)&&(w=w(C)),w=of(w,"start",C),Ve=mf(w,f,Tt,T,De(),we,V,C,Ze,K,k,mt,E,C._startClamp&&"_startClamp")||(d?-.001:0),En(ut)&&(ut=ut(C)),Wn(ut)&&!ut.indexOf("+=")&&(~ut.indexOf(" ")?ut=(Wn(w)?w.split(" ")[0]:"")+ut:(xt=al(ut.substr(2),Tt),ut=Wn(w)?w:(E?ve.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ve):Ve)+xt,Bn=f)),ut=of(ut,"end",C),me=Math.max(Ve,mf(ut||(Bn?"100% 0":mt),Bn,Tt,T,De()+xt,Ae,Be,C,Ze,K,k,mt,E,C._endClamp&&"_endClamp"))||-.001,xt=0,G=W;G--;)be=Je[G],ke=be.pin,ke&&be.start-be._pinPush<=Ve&&!E&&be.end>0&&(X=be.end-(C._startClamp?Math.max(0,be.start):be.start),(ke===f&&be.start-be._pinPush<Ve||ke===N)&&isNaN(w)&&(xt+=X*(1-be.progress)),ke===d&&(gt+=X));if(Ve+=xt,me+=xt,C._startClamp&&(C._startClamp+=xt),C._endClamp&&!_n&&(C._endClamp=me||-.001,me=Math.min(me,wi(U,T))),Ke=me-Ve||(Ve-=.01)&&.001,Ft&&(Ee=ve.utils.clamp(0,1,ve.utils.normalize(Ve,me,ne))),C._pinPush=gt,we&&xt&&(X={},X[T.a]="+="+xt,N&&(X[T.p]="-="+De()),ve.set([we,Ae],X)),d&&!(wu&&C.end>=wi(U,T)))X=ti(d),Fe=T===zt,Se=De(),ge=parseFloat(Q(T.a))+gt,!mt&&me>1&&(ht=(L?bt.scrollingElement||di:U).style,ht={style:ht,value:ht["overflow"+T.a.toUpperCase()]},L&&ti(Mt)["overflow"+T.a.toUpperCase()]!=="scroll"&&(ht.style["overflow"+T.a.toUpperCase()]="scroll")),_c(d,B,X),b=Aa(d),ce=Hi(d,!0),Xe=k&&Mr(U,Fe?yn:zt)(),_?(_e=[_+T.os2,Ke+gt+Bt],_e.t=B,G=_===Nt?Rl(d,T)+Ke+gt:0,G&&(_e.push(T.d,G+Bt),B.style.flexBasis!=="auto"&&(B.style.flexBasis=G+Bt)),Xs(_e),N&&Je.forEach(function(qe){qe.pin===N&&qe.vars.pinSpacing!==!1&&(qe._subPinOffset=!0)}),k&&De(ne)):(G=Rl(d,T),G&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=G+Bt)),k&&(ye={top:ce.top+(Fe?Se-Ve:Xe)+Bt,left:ce.left+(Fe?Xe:Se-Ve)+Bt,boxSizing:"border-box",position:"fixed"},ye[Zr]=ye["max"+to]=Math.ceil(ce.width)+Bt,ye[Jr]=ye["max"+gh]=Math.ceil(ce.height)+Bt,ye[ei]=ye[ei+Go]=ye[ei+zo]=ye[ei+Vo]=ye[ei+Ho]="0",ye[Nt]=X[Nt],ye[Nt+Go]=X[Nt+Go],ye[Nt+zo]=X[Nt+zo],ye[Nt+Vo]=X[Nt+Vo],ye[Nt+Ho]=X[Nt+Ho],R=v_(vt,ye,y),_n&&De(0)),i?(yt=i._initted,fc(1),i.render(i.duration(),!0,!0),se=Q(T.a)-ge+Ke+gt,ie=Math.abs(Ke-se)>1,k&&ie&&R.splice(R.length-2,2),i.render(0,!0,!0),yt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),fc(0)):se=Ke,ht&&(ht.value?ht.style["overflow"+T.a.toUpperCase()]=ht.value:ht.style.removeProperty("overflow-"+T.a));else if(f&&De()&&!E)for(ce=f.parentNode;ce&&ce!==Mt;)ce._pinOffset&&(Ve-=ce._pinOffset,me-=ce._pinOffset),ce=ce.parentNode;kt&&kt.forEach(function(qe){return qe.revert(!1,!0)}),C.start=Ve,C.end=me,Ue=z=_n?ne:De(),!E&&!_n&&(Ue<ne&&De(ne),C.scroll.rec=0),C.revert(!1,!0),fe=nn(),ue&&(ae=-1,ue.restart(!0)),en=0,i&&F&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(Ft||Ee!==C.progress||E||g)&&(i&&!F&&i.totalProgress(E&&Ve<-.001&&!Ee?ve.utils.normalize(Ve,me,0):Ee,!0),C.progress=Ft||(Ue-Ve)/Ke===Ee?0:Ee),d&&_&&(B._pinOffset=Math.round(C.progress*se)),ee&&ee.invalidate(),isNaN(an)||(an-=ve.getProperty(V,T.p),dt-=ve.getProperty(Be,T.p),Ca(V,T,an),Ca(we,T,an-(We||0)),Ca(Be,T,dt),Ca(Ae,T,dt-(We||0))),Ft&&!_n&&C.update(),u&&!_n&&!nt&&(nt=!0,u(C),nt=!1)}},C.getVelocity=function(){return(De()-z)/(nn()-Eo)*1e3||0},C.endAnimation=function(){go(C.callbackAnimation),i&&(ee?ee.progress(1):i.paused()?F||go(i,C.direction<0,1):go(i,i.reversed()))},C.labelToScroll=function(oe){return i&&i.labels&&(Ve||C.refresh()||Ve)+i.labels[oe]/i.duration()*Ke||0},C.getTrailing=function(oe){var Oe=Je.indexOf(C),Ne=C.direction>0?Je.slice(0,Oe).reverse():Je.slice(Oe+1);return(Wn(oe)?Ne.filter(function(We){return We.vars.preventOverlaps===oe}):Ne).filter(function(We){return C.direction>0?We.end<=Ve:We.start>=me})},C.update=function(oe,Oe,Ne){if(!(E&&!Ne&&!oe)){var We=_n===!0?ne:C.scroll(),Tt=oe?0:(We-Ve)/Ke,Ze=Tt<0?0:Tt>1?1:Tt||0,mt=C.progress,Ft,xt,gt,ut,Bn,w,N,W;if(Oe&&(z=Ue,Ue=E?De():We,S&&(Le=Ie,Ie=i&&!F?i.totalProgress():Ze)),m&&d&&!en&&!Ma&&ai&&(!Ze&&Ve<We+(We-z)/(nn()-Eo)*m?Ze=1e-4:Ze===1&&me>We+(We-z)/(nn()-Eo)*m&&(Ze=.9999)),Ze!==mt&&C.enabled){if(Ft=C.isActive=!!Ze&&Ze<1,xt=!!mt&&mt<1,w=Ft!==xt,Bn=w||!!Ze!=!!mt,C.direction=Ze>mt?1:-1,C.progress=Ze,Bn&&!en&&(gt=Ze&&!mt?0:Ze===1?1:mt===1?2:3,F&&(ut=!w&&O[gt+1]!=="none"&&O[gt+1]||O[gt],W=i&&(ut==="complete"||ut==="reset"||ut in i))),x&&(w||W)&&(W||h||!i)&&(En(x)?x(C):C.getTrailing(x).forEach(function(Se){return Se.endAnimation()})),F||(ee&&!en&&!Ma?(ee._dp._time-ee._start!==ee._time&&ee.render(ee._dp._time-ee._start),ee.resetTo?ee.resetTo("totalProgress",Ze,i._tTime/i._tDur):(ee.vars.totalProgress=Ze,ee.invalidate().restart())):i&&i.totalProgress(Ze,!!(en&&(fe||oe)))),d){if(oe&&_&&(B.style[_+T.os2]=pe),!k)te(bo(ge+se*Ze));else if(Bn){if(N=!oe&&Ze>mt&&me+1>We&&We+1>=wi(U,T),y)if(!oe&&(Ft||N)){var G=Hi(d,!0),X=We-Ve;gf(d,Mt,G.top+(T===zt?X:0)+Bt,G.left+(T===zt?0:X)+Bt)}else gf(d,B);Xs(Ft||N?R:b),ie&&Ze<1&&Ft||te(ge+(Ze===1&&!N?se:0))}}S&&!Te.tween&&!en&&!Ma&&ue.restart(!0),o&&(w||v&&Ze&&(Ze<1||!dc))&&ia(o.targets).forEach(function(Se){return Se.classList[Ft||v?"add":"remove"](o.className)}),a&&!F&&!oe&&a(C),Bn&&!en?(F&&(W&&(ut==="complete"?i.pause().totalProgress(1):ut==="reset"?i.restart(!0).pause():ut==="restart"?i.restart(!0):i[ut]()),a&&a(C)),(w||!dc)&&(c&&w&&mc(C,c),Y[gt]&&mc(C,Y[gt]),v&&(Ze===1?C.kill(!1,1):Y[gt]=0),w||(gt=Ze===1?1:3,Y[gt]&&mc(C,Y[gt]))),P&&!Ft&&Math.abs(C.getVelocity())>(wo(P)?P:2500)&&(go(C.callbackAnimation),ee?ee.progress(1):go(i,ut==="reverse"?1:!Ze,1))):F&&a&&!en&&a(C)}if(st){var ce=E?We/E.duration()*(E._caScrollDist||0):We;it(ce+(V._isFlipped?1:0)),st(ce)}le&&le(-We/E.duration()*(E._caScrollDist||0))}},C.enable=function(oe,Oe){C.enabled||(C.enabled=!0,qt(U,"resize",Ao),L||qt(U,"scroll",ps),I&&qt(r,"refreshInit",I),oe!==!1&&(C.progress=Ee=0,Ue=z=ae=De()),Oe!==!1&&C.refresh())},C.getTween=function(oe){return oe&&Te?Te.tween:ee},C.setPositions=function(oe,Oe,Ne,We){if(E){var Tt=E.scrollTrigger,Ze=E.duration(),mt=Tt.end-Tt.start;oe=Tt.start+mt*oe/Ze,Oe=Tt.start+mt*Oe/Ze}C.refresh(!1,!1,{start:af(oe,Ne&&!!C._startClamp),end:af(Oe,Ne&&!!C._endClamp)},We),C.update()},C.adjustPinSpacing=function(oe){if(_e&&oe){var Oe=_e.indexOf(T.d)+1;_e[Oe]=parseFloat(_e[Oe])+oe+Bt,_e[1]=parseFloat(_e[1])+oe+Bt,Xs(_e)}},C.disable=function(oe,Oe){if(C.enabled&&(oe!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,Oe||ee&&ee.pause(),ne=0,Pe&&(Pe.uncache=1),I&&Yt(r,"refreshInit",I),ue&&(ue.pause(),Te.tween&&Te.tween.kill()&&(Te.tween=0)),!L)){for(var Ne=Je.length;Ne--;)if(Je[Ne].scroller===U&&Je[Ne]!==C)return;Yt(U,"resize",Ao),L||Yt(U,"scroll",ps)}},C.kill=function(oe,Oe){C.disable(oe,Oe),ee&&!Oe&&ee.kill(),l&&delete Au[l];var Ne=Je.indexOf(C);Ne>=0&&Je.splice(Ne,1),Ne===gn&&cl>0&&gn--,Ne=0,Je.forEach(function(We){return We.scroller===C.scroller&&(Ne=1)}),Ne||_n||(C.scroll.rec=0),i&&(i.scrollTrigger=null,oe&&i.revert({kill:!1}),Oe||i.kill()),we&&[we,Ae,V,Be].forEach(function(We){return We.parentNode&&We.parentNode.removeChild(We)}),Wo===C&&(Wo=0),d&&(Pe&&(Pe.uncache=1),Ne=0,Je.forEach(function(We){return We.pin===d&&Ne++}),Ne||(Pe.spacer=0)),n.onKill&&n.onKill(C)},Je.push(C),C.enable(!1,!1),Ce&&Ce(C),i&&i.add&&!Ke){var Re=C.update;C.update=function(){C.update=Re,Ve||me||C.refresh()},ve.delayedCall(.01,C.update),Ke=.01,Ve=me=0}else C.refresh();d&&m_()},r.register=function(n){return Us||(ve=n||D0(),L0()&&window.document&&r.enable(),Us=To),Us},r.defaults=function(n){if(n)for(var i in n)ba[i]=n[i];return ba},r.disable=function(n,i){To=0,Je.forEach(function(a){return a[i?"kill":"disable"](n)}),Yt(ot,"wheel",ps),Yt(bt,"scroll",ps),clearInterval(Sa),Yt(bt,"touchcancel",xi),Yt(Mt,"touchstart",xi),Ea(Yt,bt,"pointerdown,touchstart,mousedown",lf),Ea(Yt,bt,"pointerup,touchend,mouseup",cf),Al.kill(),ya(Yt);for(var s=0;s<tt.length;s+=3)Ta(Yt,tt[s],tt[s+1]),Ta(Yt,tt[s],tt[s+2])},r.enable=function(){if(ot=window,bt=document,di=bt.documentElement,Mt=bt.body,ve&&(ia=ve.utils.toArray,Bo=ve.utils.clamp,bu=ve.core.context||xi,fc=ve.core.suppressOverwrites||xi,fh=ot.history.scrollRestoration||"auto",Cu=ot.pageYOffset,ve.core.globals("ScrollTrigger",r),Mt)){To=1,Ws=document.createElement("div"),Ws.style.height="100vh",Ws.style.position="absolute",H0(),l_(),Dt.register(ve),r.isTouch=Dt.isTouch,tr=Dt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Tu=Dt.isTouch===1,qt(ot,"wheel",ps),w0=[ot,bt,di,Mt],ve.matchMedia?(r.matchMedia=function(l){var c=ve.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},ve.addEventListener("matchMediaInit",function(){return vh()}),ve.addEventListener("matchMediaRevert",function(){return B0()}),ve.addEventListener("matchMedia",function(){Vr(0,1),cs("matchMedia")}),ve.matchMedia("(orientation: portrait)",function(){return gc(),gc})):console.warn("Requires GSAP 3.11.0 or later"),gc(),qt(bt,"scroll",ps);var n=Mt.style,i=n.borderTopStyle,s=ve.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Hi(Mt),zt.m=Math.round(a.top+zt.sc())||0,yn.m=Math.round(a.left+yn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Sa=setInterval(ff,250),ve.delayedCall(.5,function(){return Ma=0}),qt(bt,"touchcancel",xi),qt(Mt,"touchstart",xi),Ea(qt,bt,"pointerdown,touchstart,mousedown",lf),Ea(qt,bt,"pointerup,touchend,mouseup",cf),Eu=ve.utils.checkPrefix("transform"),ul.push(Eu),Us=nn(),Al=ve.delayedCall(.2,Vr).pause(),Is=[bt,"visibilitychange",function(){var l=ot.innerWidth,c=ot.innerHeight;bt.hidden?(rf=l,sf=c):(rf!==l||sf!==c)&&Ao()},bt,"DOMContentLoaded",Vr,ot,"load",Vr,ot,"resize",Ao],ya(qt),Je.forEach(function(l){return l.enable(0,1)}),o=0;o<tt.length;o+=3)Ta(Yt,tt[o],tt[o+1]),Ta(Yt,tt[o],tt[o+2])}},r.config=function(n){"limitCallbacks"in n&&(dc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Sa)||(Sa=i)&&setInterval(ff,i),"ignoreMobileResize"in n&&(Tu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ya(Yt)||ya(qt,n.autoRefreshEvents||"none"),C0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=wn(n),a=tt.indexOf(s),o=as(s);~a&&tt.splice(a,o?6:2),i&&(o?Ci.unshift(ot,i,Mt,i,di,i):Ci.unshift(s,i))},r.clearMatchMedia=function(n){Je.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Wn(n)?wn(n):n).getBoundingClientRect(),o=a[s?Zr:Jr]*i||0;return s?a.right-o>0&&a.left+o<ot.innerWidth:a.bottom-o>0&&a.top+o<ot.innerHeight},r.positionInViewport=function(n,i,s){Wn(n)&&(n=wn(n));var a=n.getBoundingClientRect(),o=a[s?Zr:Jr],l=i==null?o/2:i in Pl?Pl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ot.innerWidth:(a.top+l)/ot.innerHeight},r.killAll=function(n){if(Je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ls.killAll||[];ls={},i.forEach(function(s){return s()})}},r}();Ge.version="3.12.5";Ge.saveStyles=function(r){return r?ia(r).forEach(function(e){if(e&&e.style){var t=Vn.indexOf(e);t>=0&&Vn.splice(t,5),Vn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ve.core.getCache(e),bu())}}):Vn};Ge.revert=function(r,e){return vh(!r,e)};Ge.create=function(r,e){return new Ge(r,e)};Ge.refresh=function(r){return r?Ao():(Us||Ge.register())&&Vr(!0)};Ge.update=function(r){return++tt.cache&&Wi(r===!0?2:0)};Ge.clearScrollMemory=z0;Ge.maxScroll=function(r,e){return wi(r,e?yn:zt)};Ge.getScrollFunc=function(r,e){return Mr(wn(r),e?yn:zt)};Ge.getById=function(r){return Au[r]};Ge.getAll=function(){return Je.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ge.isScrolling=function(){return!!ai};Ge.snapDirectional=_h;Ge.addEventListener=function(r,e){var t=ls[r]||(ls[r]=[]);~t.indexOf(e)||t.push(e)};Ge.removeEventListener=function(r,e){var t=ls[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ge.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var h=[],f=[],d=ve.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&En(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return En(s)&&(s=s(),qt(Ge,"refresh",function(){return s=e.batchMax()})),ia(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ge.create(c))}),t};var vf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},vc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Dt.isTouch?" pinch-zoom":""):"none",e===di&&r(Mt,t)},Ra={auto:1,scroll:1},S_=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||ve.core.getCache(s),o=nn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==Mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ra[(l=ti(s)).overflowY]||Ra[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!as(s)&&(Ra[(l=ti(s)).overflowY]||Ra[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},V0=function(e,t,n,i){return Dt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&S_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&qt(bt,Dt.eventTypes[0],Sf,!1,!0)},onDisable:function(){return Yt(bt,Dt.eventTypes[0],Sf,!0)}})},M_=/(input|label|select|textarea)/i,xf,Sf=function(e){var t=M_.test(e.target.tagName);(t||xf)&&(e._gsapAllow=!0,xf=t)},y_=function(e){Nr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=wn(e.target)||di,u=ve.core.globals().ScrollSmoother,h=u&&u.get(),f=tr&&(e.content&&wn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Mr(c,zt),_=Mr(c,yn),g=1,m=(Dt.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,p=0,M=En(i)?function(){return i(o)}:function(){return i||2.8},v,S,y=V0(c,e.type,!0,s),A=function(){return S=!1},E=xi,P=xi,x=function(){l=wi(c,zt),P=Bo(tr?1:0,l),n&&(E=Bo(0,wi(c,yn))),v=Qr},T=function(){f._gsap.y=bo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},F=function(){if(S){requestAnimationFrame(A);var Z=bo(o.deltaY/2),K=P(d.v-Z);if(f&&K!==d.v+d.offset){d.offset=K-d.v;var C=bo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",d.cacheID=tt.cache,Wi()}return!0}d.offset&&T(),S=!0},U,$,L,k,Y=function(){x(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return f&&ve.set(f,{y:"+=0"}),e.ignoreCheck=function(O){return tr&&O.type==="touchmove"&&F()||g>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){S=!1;var O=g;g=bo((ot.visualViewport&&ot.visualViewport.scale||1)/m),U.pause(),O!==g&&vc(c,g>1.01?!0:n?!1:"x"),$=_(),L=d(),x(),v=Qr},e.onRelease=e.onGestureStart=function(O,Z){if(d.offset&&T(),!Z)k.restart(!0);else{tt.cache++;var K=M(),C,I;n&&(C=_(),I=C+K*.05*-O.velocityX/.227,K*=vf(_,C,I,wi(c,yn)),U.vars.scrollX=E(I)),C=d(),I=C+K*.05*-O.velocityY/.227,K*=vf(d,C,I,wi(c,zt)),U.vars.scrollY=P(I),U.invalidate().duration(K).play(.01),(tr&&U.vars.scrollY>=l||C>=l-1)&&ve.to({},{onUpdate:Y,duration:K})}a&&a(O)},e.onWheel=function(){U._ts&&U.pause(),nn()-p>1e3&&(v=0,p=nn())},e.onChange=function(O,Z,K,C,I){if(Qr!==v&&x(),Z&&n&&_(E(C[2]===Z?$+(O.startX-O.x):_()+Z-C[1])),K){d.offset&&T();var q=I[2]===K,he=q?L+O.startY-O.y:d()+K-I[1],ae=P(he);q&&he!==ae&&(L+=ae-he),d(ae)}(K||Z)&&Wi()},e.onEnable=function(){vc(c,n?!1:"x"),Ge.addEventListener("refresh",Y),qt(ot,"resize",Y),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),y.enable()},e.onDisable=function(){vc(c,!0),Yt(ot,"resize",Y),Ge.removeEventListener("refresh",Y),y.kill()},e.lockAxis=e.lockAxis!==!1,o=new Dt(e),o.iOS=tr,tr&&!d()&&d(1),tr&&ve.ticker.add(xi),k=o._dc,U=ve.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:G0(d,d(),function(){return U.pause()})},onUpdate:Wi,onComplete:k.vars.onComplete}),o};Ge.sort=function(r){return Je.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Ge.observe=function(r){return new Dt(r)};Ge.normalizeScroll=function(r){if(typeof r>"u")return pn;if(r===!0&&pn)return pn.enable();if(r===!1){pn&&pn.kill(),pn=r;return}var e=r instanceof Dt?r:y_(r);return pn&&pn.target===e.target&&pn.kill(),as(e.target)&&(pn=e),e};Ge.core={_getVelocityProp:yu,_inputObserver:V0,_scrollers:tt,_proxies:Ci,bridge:{ss:function(){ai||cs("scrollStart"),ai=nn()},ref:function(){return en}}};D0()&&ve.registerPlugin(Ge);function W0(r,e,t){return Math.max(r,Math.min(e,t))}class E_{constructor(){this.isRunning=!1,this.value=0,this.from=0,this.to=0,this.currentTime=0}advance(e){var t;if(!this.isRunning)return;let n=!1;if(this.duration&&this.easing){this.currentTime+=e;const i=W0(0,this.currentTime/this.duration,1);n=i>=1;const s=n?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=function(s,a,o,l){return function(u,h,f){return(1-f)*u+f*h}(s,a,1-Math.exp(-o*l))}(this.value,this.to,60*this.lerp,e),Math.round(this.value)===this.to&&(this.value=this.to,n=!0)):(this.value=this.to,n=!0);n&&this.stop(),(t=this.onUpdate)===null||t===void 0||t.call(this,this.value,n)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:i,easing:s,onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=o}}class T_{constructor(e,t,{autoResize:n=!0,debounce:i=250}={}){this.wrapper=e,this.content=t,this.width=0,this.height=0,this.scrollHeight=0,this.scrollWidth=0,this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)},n&&(this.debouncedResize=function(a,o){let l;return function(...c){let u=this;clearTimeout(l),l=setTimeout(()=>{l=void 0,a.apply(u,c)},o)}}(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)===null||e===void 0||e.disconnect(),(t=this.contentResizeObserver)===null||t===void 0||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class X0{constructor(){this.events={}}emit(e,...t){var n;let i=this.events[e]||[];for(let s=0,a=i.length;s<a;s++)(n=i[s])===null||n===void 0||n.call(i,...t)}on(e,t){var n;return!((n=this.events[e])===null||n===void 0)&&n.push(t)||(this.events[e]=[t]),()=>{var i;this.events[e]=(i=this.events[e])===null||i===void 0?void 0:i.filter(s=>t!==s)}}off(e,t){var n;this.events[e]=(n=this.events[e])===null||n===void 0?void 0:n.filter(i=>t!==i)}destroy(){this.events={}}}const Mf=100/6,$i={passive:!1};class b_{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=t,this.touchStart={x:0,y:0},this.lastDelta={x:0,y:0},this.window={width:0,height:0},this.emitter=new X0,this.onTouchStart=n=>{const{clientX:i,clientY:s}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=i,this.touchStart.y=s,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})},this.onTouchMove=n=>{const{clientX:i,clientY:s}=n.targetTouches?n.targetTouches[0]:n,a=-(i-this.touchStart.x)*this.options.touchMultiplier,o=-(s-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=i,this.touchStart.y=s,this.lastDelta={x:a,y:o},this.emitter.emit("scroll",{deltaX:a,deltaY:o,event:n})},this.onTouchEnd=n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})},this.onWheel=n=>{let{deltaX:i,deltaY:s,deltaMode:a}=n;i*=a===1?Mf:a===2?this.window.width:1,s*=a===1?Mf:a===2?this.window.height:1,i*=this.options.wheelMultiplier,s*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:n})},this.onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}},window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,$i),this.element.addEventListener("touchstart",this.onTouchStart,$i),this.element.addEventListener("touchmove",this.onTouchMove,$i),this.element.addEventListener("touchend",this.onTouchEnd,$i)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,$i),this.element.removeEventListener("touchstart",this.onTouchStart,$i),this.element.removeEventListener("touchmove",this.onTouchMove,$i),this.element.removeEventListener("touchend",this.onTouchEnd,$i)}}class w_{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:i=!0,syncTouch:s=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:o=35,duration:l,easing:c=S=>Math.min(1,1.001-Math.pow(2,-10*S)),lerp:u=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:d="vertical",touchMultiplier:_=1,wheelMultiplier:g=1,autoResize:m=!0,prevent:p,virtualScroll:M,__experimental__naiveDimensions:v=!1}={}){this._isScrolling=!1,this._isStopped=!1,this._isLocked=!1,this._preventNextNativeScrollEvent=!1,this._resetVelocityTimeout=null,this.time=0,this.userData={},this.lastVelocity=0,this.velocity=0,this.direction=0,this.animate=new E_,this.emitter=new X0,this.onPointerDown=S=>{S.button===1&&this.reset()},this.onVirtualScroll=S=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(S)===!1)return;const{deltaX:y,deltaY:A,event:E}=S;if(this.emitter.emit("virtual-scroll",{deltaX:y,deltaY:A,event:E}),E.ctrlKey)return;const P=E.type.includes("touch"),x=E.type.includes("wheel");if(this.isTouching=E.type==="touchstart"||E.type==="touchmove",this.options.syncTouch&&P&&E.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const T=y===0&&A===0,F=this.options.gestureOrientation==="vertical"&&A===0||this.options.gestureOrientation==="horizontal"&&y===0;if(T||F)return;let U=E.composedPath();U=U.slice(0,U.indexOf(this.rootElement));const $=this.options.prevent;if(U.find(O=>{var Z,K,C,I,q;return O instanceof HTMLElement&&(typeof $=="function"&&$?.(O)||((Z=O.hasAttribute)===null||Z===void 0?void 0:Z.call(O,"data-lenis-prevent"))||P&&((K=O.hasAttribute)===null||K===void 0?void 0:K.call(O,"data-lenis-prevent-touch"))||x&&((C=O.hasAttribute)===null||C===void 0?void 0:C.call(O,"data-lenis-prevent-wheel"))||((I=O.classList)===null||I===void 0?void 0:I.contains("lenis"))&&!(!((q=O.classList)===null||q===void 0)&&q.contains("lenis-stopped")))}))return;if(this.isStopped||this.isLocked)return void E.preventDefault();if(!(this.options.syncTouch&&P||this.options.smoothWheel&&x))return this.isScrolling="native",void this.animate.stop();E.preventDefault();let L=A;this.options.gestureOrientation==="both"?L=Math.abs(A)>Math.abs(y)?A:y:this.options.gestureOrientation==="horizontal"&&(L=y);const k=P&&this.options.syncTouch,Y=P&&E.type==="touchend"&&Math.abs(L)>5;Y&&(L=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+L,Object.assign({programmatic:!1},k?{lerp:Y?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent)this._preventNextNativeScrollEvent=!1;else if(this.isScrolling===!1||this.isScrolling==="native"){const S=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-S,this.direction=Math.sign(this.animatedScroll-S),this.isScrolling="native",this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}},window.lenisVersion="1.1.13",e&&e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:i,syncTouch:s,syncTouchLerp:a,touchInertiaMultiplier:o,duration:l,easing:c,lerp:u,infinite:h,gestureOrientation:d,orientation:f,touchMultiplier:_,wheelMultiplier:g,autoResize:m,prevent:p,virtualScroll:M,__experimental__naiveDimensions:v},this.dimensions=new T_(e,t,{autoResize:m}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new b_(n,{touchMultiplier:_,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:n=!1,lock:i=!1,duration:s=this.options.duration,easing:a=this.options.easing,lerp:o=this.options.lerp,onStart:l,onComplete:c,force:u=!1,programmatic:h=!0,userData:f}={}){if(!this.isStopped&&!this.isLocked||u){if(typeof e=="string"&&["top","left","start"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let d;if(typeof e=="string"?d=document.querySelector(e):e instanceof HTMLElement&&e?.nodeType&&(d=e),d){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?g.left:g.top}const _=d.getBoundingClientRect();e=(this.isHorizontal?_.left:_.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):e=W0(0,e,this.limit),e===this.targetScroll)return l?.(this),void(c==null||c(this));if(this.userData=f??{},n)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),void(this.userData={});h||(this.targetScroll=e),this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:a,lerp:o,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(d,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),h&&(this.targetScroll=d),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?function(t,n){return(t%n+n)%n}(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}}$e.registerPlugin(Ge);const cr=Er?null:new w_({lerp:.085,smoothWheel:!0});cr&&(cr.on("scroll",Ge.update),$e.ticker.add(r=>cr.raf(r*1e3)),$e.ticker.lagSmoothing(0),cr.stop());const xh=()=>cr?.stop(),Xl=()=>cr?.start();function Sh(r,e=1.4){cr?cr.scrollTo(r,{duration:e}):typeof r=="number"?scrollTo({top:r,behavior:"smooth"}):r.scrollIntoView({behavior:"smooth"})}function Y0(r,e,t=1.2){const n=Ge.getAll().find(i=>i.trigger===r&&i.pin);n&&Sh(n.start+(n.end-n.start)*e+2,t)}const mn={x:innerWidth/2,y:innerHeight/2,nx:0,ny:0,inside:!1};function A_(){const r=J("#cur"),e=J("#curl");let t=mn.x,n=mn.y;addEventListener("pointermove",i=>{mn.x=i.clientX,mn.y=i.clientY,mn.inside=!0,mn.nx=i.clientX/innerWidth*2-1,mn.ny=i.clientY/innerHeight*2-1;const s=i.target.closest?.("[data-cursor]");r.classList.toggle("big",!!s),s&&(e.textContent=s.dataset.cursor)},{passive:!0}),document.addEventListener("pointerleave",()=>mn.inside=!1),function i(){t+=(mn.x-t)*.22,n+=(mn.y-n)*.22,r.style.transform=`translate(${t}px, ${n}px)`,requestAnimationFrame(i)}()}let ms=null;const nr={on:!0};function da(){if(!ms)try{ms=new(window.AudioContext||window.webkitAudioContext)}catch{}return ms&&ms.state==="suspended"&&ms.resume(),ms}function In(r){if(!nr.on)return;const e=da();if(!e)return;const t=e.currentTime,n=e.createGain();if(n.connect(e.destination),r==="static"){const a=e.createBuffer(1,e.sampleRate*.35,e.sampleRate),o=a.getChannelData(0);for(let u=0;u<o.length;u++)o[u]=(Math.random()*2-1)*(1-u/o.length);const l=e.createBufferSource(),c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=2400,c.Q.value=.6,l.buffer=a,l.connect(c),c.connect(n),n.gain.setValueAtTime(.05,t),l.start(t);return}const i=e.createOscillator();i.type="square",i.frequency.setValueAtTime(r==="key"?1800+Math.random()*600:880,t),r==="blip"&&i.frequency.exponentialRampToValueAtTime(1760,t+.06),n.gain.setValueAtTime(r==="key"?.006:.025,t),n.gain.exponentialRampToValueAtTime(1e-4,t+(r==="key"?.025:.09)),i.connect(n),i.start(t),i.stop(t+.12)}const Mh=[{name:"green",hex:"#41ff8b",rgb:[65,255,139]},{name:"amber",hex:"#ffb547",rgb:[255,181,71]},{name:"blue",hex:"#6ad8ff",rgb:[106,216,255]},{name:"white",hex:"#e8f1ff",rgb:[232,241,255]}];let Ll=0;try{Ll=Math.max(0,Mh.findIndex(r=>r.name===localStorage.getItem("phos")))}catch{}const q0=[],yh=()=>Mh[Ll],C_=r=>q0.push(r);function yf(){const r=yh(),e=document.documentElement.style;e.setProperty("--phos",r.hex),e.setProperty("--phos-rgb",r.rgb.join(",")),J("#phosName").textContent=r.name,q0.forEach(t=>t(r.hex))}function R_(){J("#phosBtn").addEventListener("click",()=>{Ll=(Ll+1)%Mh.length;try{localStorage.setItem("phos",yh().name)}catch{}yf(),In("blip")}),yf()}const xc={email:"olukayodedayo100@gmail.com",whatsapp:"2348188441180"},Eh={intro:{text:"Connection established. Hi, I'm Mujeeb Adebowale, a senior software engineer in Lagos. At Chipper Cash I work on the card issuing and payments infrastructure behind card spending across Africa. If it has to be correct at three in the morning, it's my kind of problem. Scroll down. The logs are open."},whoami:{text:"I'm Mujeeb Adebowale. Senior software engineer at Chipper Cash, on card issuing and payments. Before that I led a team at Maxng, built backend services at Casha, and started full-stack at The People Practice."},stack:{text:"TypeScript and Go, on Node and NestJS. Postgres for anything that has to balance, Redis for locks and idempotency, Mongo where documents fit, and React when ops needs a console. Lately, LLM apps with embeddings, pgvector and function calling."},builds:{text:"After hours I'm building Peguin, a Mac app that gives your standup update for you; and Dopple, a multi-tenant platform for running a school. Scroll to the builds to watch both running."},hire:{text:"Send me the role and the hardest problem on your team. If it involves money moving correctly at scale, I'm interested. My contact details are at the bottom of the page."},help:{text:"Ask me something. Try whoami, stack, builds, or hire."}},P_=[["chipper","Chipper Cash","now"],["maxng","Maxng","23–25"],["casha","Casha!","21–23"],["tpp","The People Practice","18–21"]],L_=["TypeScript","Go","Python","Node.js","NestJS","Next.js","React","GraphQL","PostgreSQL","Redis","MongoDB","Supabase","Docker","AWS","pgvector","LangChain","Card issuing","Chargebacks","Settlement","TDD"],Ef={youtubeId:"e8GzTXRAJ30",title:"Tems · Free Mind"},wt={speaking:!1,mouthTarget:0,mouth:0,glitch:0,el:null,analyser:null,buf:null};let fl=0;const D_=()=>J("#caption");function Co(r,e){D_().innerHTML=`<span class="said">${r.slice(0,e)}</span><span class="rest">${r.slice(e)}</span>`}function Pu(r){J("#tapeT1").textContent=r?"transmitting…":"play holotape",J("#playIcon").innerHTML=r?'<path d="M3 2h4v12H3zM9 2h4v12H9z"/>':'<path d="M4 2l10 6-10 6z"/>'}function $0(){wt.speaking=!1,clearInterval(fl),wt.el&&(wt.el.pause(),wt.el=null),Pu(!1)}function Th(r){const e=Eh[r]??{text:r},t=e.text;$0(),wt.glitch=1,In("static"),Co(t,0),Pu(!0),wt.speaking=!0,J("#tapeT2").textContent=`msg · ${r}`;const n=()=>{wt.speaking=!1,clearInterval(fl),Co(t,t.length),Pu(!1)};if(e.audio&&nr.on){const a=wt.el=new Audio(e.audio),o=da();if(o){const l=o.createMediaElementSource(a);wt.analyser=o.createAnalyser(),wt.analyser.fftSize=512,wt.buf=new Uint8Array(wt.analyser.fftSize),l.connect(wt.analyser),wt.analyser.connect(o.destination)}a.onended=n,a.play().catch(n),fl=window.setInterval(()=>{a.duration&&Co(t,Math.floor(t.length*a.currentTime/a.duration))},50);return}const i=16,s=performance.now();fl=window.setInterval(()=>{const a=Math.min(t.length,Math.floor((performance.now()-s)/1e3*i));Co(t,a);const o=t[a]||" ";wt.mouthTarget=/[aeiou]/i.test(o)?.55+Math.random()*.4:/[ ,.:;]/.test(o)?0:.25+Math.random()*.2,a>=t.length&&n()},1e3/i)}function Tf(r){const e=r.trim().toLowerCase();if(!e)return;da();const t=Object.keys(Eh).find(n=>e.includes(n))??(/(who|about|you)/.test(e)?"whoami":/(tech|stack|tools|language)/.test(e)?"stack":/(project|side|build)/.test(e)?"builds":/(hire|job|role|work|contact|email)/.test(e)?"hire":"help");Th(t)}function U_(r){const e=wt;if(e.analyser&&e.el&&!e.el.paused){e.analyser.getByteTimeDomainData(e.buf);let n=0;for(const i of e.buf){const s=(i-128)/128;n+=s*s}e.mouthTarget=Math.min(1,Math.sqrt(n/e.buf.length)*6)}else e.speaking||(e.mouthTarget*=.7);e.mouth+=(e.mouthTarget-e.mouth)*.4,e.glitch*=.96;const t=J("#eq").children;for(let n=0;n<t.length;n++){const i=e.speaking?(e.mouth*.75+Math.random()*.25)*(.4+.6*Math.sin(n*.7+r*9)**2):.06+.04*Math.sin(n+r*2);t[n].style.height=8+i*92+"%",t[n].style.opacity=e.speaking?"0.9":"0.35"}}function I_(){J("#playBtn").addEventListener("click",()=>{da(),wt.speaking?$0():Th("intro")}),Co(Eh.intro.text,0);const r=J("#eq");for(let e=0;e<28;e++)r.appendChild(document.createElement("i"));J("#tform").addEventListener("submit",e=>{e.preventDefault();const t=J("#tin");Tf(t.value),t.value=""}),J("#tin").addEventListener("keydown",()=>In("key")),Li("[data-cmd]").forEach(e=>e.addEventListener("click",()=>Tf(e.dataset.cmd)))}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bh="158",N_=0,bf=1,O_=2,j0=1,F_=2,Fi=3,yr=0,Nn=1,Ei=2,gr=0,Ys=1,Fr=2,wf=3,Af=4,k_=5,kr=100,B_=101,z_=102,Cf=103,Rf=104,H_=200,G_=201,V_=202,W_=203,Lu=204,Du=205,X_=206,Y_=207,q_=208,$_=209,j_=210,K_=211,Z_=212,J_=213,Q_=214,e1=0,t1=1,n1=2,Dl=3,i1=4,r1=5,s1=6,o1=7,K0=0,a1=1,l1=2,_r=0,c1=1,u1=2,h1=3,f1=4,d1=5,Z0=300,no=301,io=302,Uu=303,Iu=304,Yl=306,Nu=1e3,mi=1001,Ou=1002,vn=1003,Pf=1004,Sc=1005,ni=1006,p1=1007,sa=1008,vr=1009,m1=1010,g1=1011,wh=1012,J0=1013,ur=1014,hr=1015,oa=1016,Q0=1017,em=1018,es=1020,_1=1021,gi=1023,v1=1024,x1=1025,ts=1026,ro=1027,S1=1028,tm=1029,M1=1030,nm=1031,im=1033,Mc=33776,yc=33777,Ec=33778,Tc=33779,Lf=35840,Df=35841,Uf=35842,If=35843,y1=36196,Nf=37492,Of=37496,Ff=37808,kf=37809,Bf=37810,zf=37811,Hf=37812,Gf=37813,Vf=37814,Wf=37815,Xf=37816,Yf=37817,qf=37818,$f=37819,jf=37820,Kf=37821,bc=36492,Zf=36494,Jf=36495,E1=36283,Qf=36284,ed=36285,td=36286,rm=3e3,ns=3001,T1=3200,b1=3201,w1=0,A1=1,ii="",Ht="srgb",qi="srgb-linear",Ah="display-p3",ql="display-p3-linear",Ul="linear",St="srgb",Il="rec709",Nl="p3",gs=7680,nd=519,C1=512,R1=513,P1=514,L1=515,D1=516,U1=517,I1=518,N1=519,id=35044,O1=35048,rd="300 es",Fu=1035,Vi=2e3,Ol=2001;class ao{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sd=1234567;const Xo=Math.PI/180,aa=180/Math.PI;function lo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[r&255]+Jt[r>>8&255]+Jt[r>>16&255]+Jt[r>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Sn(r,e,t){return Math.max(e,Math.min(t,r))}function Ch(r,e){return(r%e+e)%e}function F1(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function k1(r,e,t){return r!==e?(t-r)/(e-r):0}function Yo(r,e,t){return(1-t)*r+t*e}function B1(r,e,t,n){return Yo(r,e,1-Math.exp(-t*n))}function z1(r,e=1){return e-Math.abs(Ch(r,e*2)-e)}function H1(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function G1(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function V1(r,e){return r+Math.floor(Math.random()*(e-r+1))}function W1(r,e){return r+Math.random()*(e-r)}function X1(r){return r*(.5-Math.random())}function Y1(r){r!==void 0&&(sd=r);let e=sd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function q1(r){return r*Xo}function $1(r){return r*aa}function ku(r){return(r&r-1)===0&&r!==0}function j1(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Fl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function K1(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*_,l*d,o*c);break;case"YXY":r.set(l*d,o*u,l*_,o*c);break;case"ZYZ":r.set(l*_,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ns(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const od={DEG2RAD:Xo,RAD2DEG:aa,generateUUID:lo,clamp:Sn,euclideanModulo:Ch,mapLinear:F1,inverseLerp:k1,lerp:Yo,damp:B1,pingpong:z1,smoothstep:H1,smootherstep:G1,randInt:V1,randFloat:W1,randFloatSpread:X1,seededRandom:Y1,degToRad:q1,radToDeg:$1,isPowerOfTwo:ku,ceilPowerOfTwo:j1,floorPowerOfTwo:Fl,setQuaternionFromProperEuler:K1,normalize:hn,denormalize:Ns};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,i,s,a,o,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],M=i[1],v=i[4],S=i[7],y=i[2],A=i[5],E=i[8];return s[0]=a*g+o*M+l*y,s[3]=a*m+o*v+l*A,s[6]=a*p+o*S+l*E,s[1]=c*g+u*M+h*y,s[4]=c*m+u*v+h*A,s[7]=c*p+u*S+h*E,s[2]=f*g+d*M+_*y,s[5]=f*m+d*v+_*A,s[8]=f*p+d*S+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(wc.makeScale(e,t)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,t){return this.premultiply(wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new Qe;function sm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function kl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Z1(){const r=kl("canvas");return r.style.display="block",r}const ad={};function qo(r){r in ad||(ad[r]=!0,console.warn(r))}const ld=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cd=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pa={[qi]:{transfer:Ul,primaries:Il,toReference:r=>r,fromReference:r=>r},[Ht]:{transfer:St,primaries:Il,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ql]:{transfer:Ul,primaries:Nl,toReference:r=>r.applyMatrix3(cd),fromReference:r=>r.applyMatrix3(ld)},[Ah]:{transfer:St,primaries:Nl,toReference:r=>r.convertSRGBToLinear().applyMatrix3(cd),fromReference:r=>r.applyMatrix3(ld).convertLinearToSRGB()}},J1=new Set([qi,ql]),ft={enabled:!0,_workingColorSpace:qi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!J1.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Pa[e].toReference,i=Pa[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Pa[r].primaries},getTransfer:function(r){return r===ii?Ul:Pa[r].transfer}};function qs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ac(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let _s;class om{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_s===void 0&&(_s=kl("canvas")),_s.width=e.width,_s.height=e.height;const n=_s.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=qs(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qs(t[n]/255)*255):t[n]=qs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Q1=0;class am{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=lo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Cc(i[a].image)):s.push(Cc(i[a]))}else s=Cc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Cc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?om.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ev=0;class On extends ao{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,n=mi,i=mi,s=ni,a=sa,o=gi,l=vr,c=On.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=lo(),this.name="",this.source=new am(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ns?Ht:ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Z0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nu:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Ou:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nu:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Ou:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ht?ns:rm}set encoding(e){qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ns?Ht:ii}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Z0;On.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,n=0,i=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(d+1)/2,y=(p+1)/2,A=(u+f)/4,E=(h+g)/4,P=(_+m)/4;return v>S&&v>y?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=E/n):S>y?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=P/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=E/s,i=P/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(h-g)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tv extends ao{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(qo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ns?Ht:ii),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new On(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new am(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends tv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lm extends On{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nv extends On{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pa{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=1-o;const p=l*f+c*d+u*_+h*g,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const y=Math.sqrt(v),A=Math.atan2(y,p*M);m=Math.sin(m*A)/y,o=Math.sin(o*A)/y}const S=o*M;if(l=l*m+f*S,c=c*m+d*S,u=u*m+_*S,h=h*m+g*S,m===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-o*d,e[t+2]=c*_+u*d+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ud.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ud.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new H,ud=new pa;class ma{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ci):ci.fromBufferAttribute(s,a),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),La.copy(n.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),Da.subVectors(this.max,_o),vs.subVectors(e.a,_o),xs.subVectors(e.b,_o),Ss.subVectors(e.c,_o),ji.subVectors(xs,vs),Ki.subVectors(Ss,xs),Rr.subVectors(vs,Ss);let t=[0,-ji.z,ji.y,0,-Ki.z,Ki.y,0,-Rr.z,Rr.y,ji.z,0,-ji.x,Ki.z,0,-Ki.x,Rr.z,0,-Rr.x,-ji.y,ji.x,0,-Ki.y,Ki.x,0,-Rr.y,Rr.x,0];return!Pc(t,vs,xs,Ss,Da)||(t=[1,0,0,0,1,0,0,0,1],!Pc(t,vs,xs,Ss,Da))?!1:(Ua.crossVectors(ji,Ki),t=[Ua.x,Ua.y,Ua.z],Pc(t,vs,xs,Ss,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new H,new H,new H,new H,new H,new H,new H,new H],ci=new H,La=new ma,vs=new H,xs=new H,Ss=new H,ji=new H,Ki=new H,Rr=new H,_o=new H,Da=new H,Ua=new H,Pr=new H;function Pc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Pr.fromArray(r,s);const o=i.x*Math.abs(Pr.x)+i.y*Math.abs(Pr.y)+i.z*Math.abs(Pr.z),l=e.dot(Pr),c=t.dot(Pr),u=n.dot(Pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const iv=new ma,vo=new H,Lc=new H;class co{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):iv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const t=vo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(vo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(Lc)),this.expandByPoint(vo.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new H,Dc=new H,Ia=new H,Zi=new H,Uc=new H,Na=new H,Ic=new H;class $l{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Dc.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(Dc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ia),o=Zi.dot(this.direction),l=-Zi.dot(Ia),c=Zi.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*l-o,f=a*o-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Dc).addScaledVector(Ia,f),d}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const n=Ui.dot(this.direction),i=Ui.dot(Ui)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,n,i,s){Uc.subVectors(t,e),Na.subVectors(n,e),Ic.crossVectors(Uc,Na);let a=this.direction.dot(Ic),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zi.subVectors(this.origin,e);const l=o*this.direction.dot(Na.crossVectors(Zi,Na));if(l<0)return null;const c=o*this.direction.dot(Uc.cross(Zi));if(c<0||l+c>a)return null;const u=-o*Zi.dot(Ic);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,n,i,s,a,o,l,c,u,h,f,d,_,g,m){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,f,d,_,g,m)}set(e,t,n,i,s,a,o,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ms.setFromMatrixColumn(e,0).length(),s=1/Ms.setFromMatrixColumn(e,1).length(),a=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*o,t[4]=-a*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=a*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rv,e,sv)}lookAt(e,t,n){const i=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Ji.crossVectors(n,Hn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Ji.crossVectors(n,Hn)),Ji.normalize(),Oa.crossVectors(Hn,Ji),i[0]=Ji.x,i[4]=Oa.x,i[8]=Hn.x,i[1]=Ji.y,i[5]=Oa.y,i[9]=Hn.y,i[2]=Ji.z,i[6]=Oa.z,i[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],v=n[7],S=n[11],y=n[15],A=i[0],E=i[4],P=i[8],x=i[12],T=i[1],F=i[5],U=i[9],$=i[13],L=i[2],k=i[6],Y=i[10],O=i[14],Z=i[3],K=i[7],C=i[11],I=i[15];return s[0]=a*A+o*T+l*L+c*Z,s[4]=a*E+o*F+l*k+c*K,s[8]=a*P+o*U+l*Y+c*C,s[12]=a*x+o*$+l*O+c*I,s[1]=u*A+h*T+f*L+d*Z,s[5]=u*E+h*F+f*k+d*K,s[9]=u*P+h*U+f*Y+d*C,s[13]=u*x+h*$+f*O+d*I,s[2]=_*A+g*T+m*L+p*Z,s[6]=_*E+g*F+m*k+p*K,s[10]=_*P+g*U+m*Y+p*C,s[14]=_*x+g*$+m*O+p*I,s[3]=M*A+v*T+S*L+y*Z,s[7]=M*E+v*F+S*k+y*K,s[11]=M*P+v*U+S*Y+y*C,s[15]=M*x+v*$+S*O+y*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*d-n*l*d)+g*(+t*l*d-t*c*f+s*a*f-i*a*d+i*c*u-s*l*u)+m*(+t*c*h-t*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],M=h*m*c-g*f*c+g*l*d-o*m*d-h*l*p+o*f*p,v=_*f*c-u*m*c-_*l*d+a*m*d+u*l*p-a*f*p,S=u*g*c-_*h*c+_*o*d-a*g*d-u*o*p+a*h*p,y=_*h*l-u*g*l-_*o*f+a*g*f+u*o*m-a*h*m,A=t*M+n*v+i*S+s*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=M*E,e[1]=(g*f*s-h*m*s-g*i*d+n*m*d+h*i*p-n*f*p)*E,e[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*E,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*d-n*l*d)*E,e[4]=v*E,e[5]=(u*m*s-_*f*s+_*i*d-t*m*d-u*i*p+t*f*p)*E,e[6]=(_*l*s-a*m*s-_*i*c+t*m*c+a*i*p-t*l*p)*E,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*d+t*l*d)*E,e[8]=S*E,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*p-t*h*p)*E,e[10]=(a*g*s-_*o*s+_*n*c-t*g*c-a*n*p+t*o*p)*E,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*d-t*o*d)*E,e[12]=y*E,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*m+t*h*m)*E,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*m-t*o*m)*E,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,_=s*h,g=a*u,m=a*h,p=o*h,M=l*c,v=l*u,S=l*h,y=n.x,A=n.y,E=n.z;return i[0]=(1-(g+p))*y,i[1]=(d+S)*y,i[2]=(_-v)*y,i[3]=0,i[4]=(d-S)*A,i[5]=(1-(f+p))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(_+v)*E,i[9]=(m-M)*E,i[10]=(1-(f+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ms.set(i[0],i[1],i[2]).length();const a=Ms.set(i[4],i[5],i[6]).length(),o=Ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ui.copy(this);const c=1/s,u=1/a,h=1/o;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=u,ui.elements[5]*=u,ui.elements[6]*=u,ui.elements[8]*=h,ui.elements[9]*=h,ui.elements[10]*=h,t.setFromRotationMatrix(ui),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Vi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(o===Vi)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ol)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Vi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),f=(t+e)*c,d=(n+i)*u;let _,g;if(o===Vi)_=(a+s)*h,g=-2*h;else if(o===Ol)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ms=new H,ui=new Gt,rv=new H(0,0,0),sv=new H(1,1,1),Ji=new H,Oa=new H,Hn=new H,hd=new Gt,fd=new pa;class jl{constructor(e=0,t=0,n=0,i=jl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fd.setFromEuler(this),this.setFromQuaternion(fd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jl.DEFAULT_ORDER="XYZ";class Rh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ov=0;const dd=new H,ys=new pa,Ii=new Gt,Fa=new H,xo=new H,av=new H,lv=new pa,pd=new H(1,0,0),md=new H(0,1,0),gd=new H(0,0,1),cv={type:"added"},uv={type:"removed"};class Tn extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new H,t=new jl,n=new pa,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Qe}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(pd,e)}rotateY(e){return this.rotateOnAxis(md,e)}rotateZ(e){return this.rotateOnAxis(gd,e)}translateOnAxis(e,t){return dd.copy(e).applyQuaternion(this.quaternion),this.position.add(dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pd,e)}translateY(e){return this.translateOnAxis(md,e)}translateZ(e){return this.translateOnAxis(gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fa.copy(e):Fa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(xo,Fa,this.up):Ii.lookAt(Fa,xo,this.up),this.quaternion.setFromRotationMatrix(Ii),i&&(Ii.extractRotation(i.matrixWorld),ys.setFromRotationMatrix(Ii),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,av),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,lv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tn.DEFAULT_UP=new H(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new H,Ni=new H,Nc=new H,Oi=new H,Es=new H,Ts=new H,_d=new H,Oc=new H,Fc=new H,kc=new H;let ka=!1;class pi{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hi.subVectors(e,t),i.cross(hi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hi.subVectors(i,t),Ni.subVectors(n,t),Nc.subVectors(e,t);const a=hi.dot(hi),o=hi.dot(Ni),l=hi.dot(Nc),c=Ni.dot(Ni),u=Ni.dot(Nc),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Oi),Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getUV(e,t,n,i,s,a,o,l){return ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ka=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Oi),l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(a,Oi.y),l.addScaledVector(o,Oi.z),l}static isFrontFacing(e,t,n,i){return hi.subVectors(n,t),Ni.subVectors(e,t),hi.cross(Ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),hi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ka=!0),pi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return pi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Es.subVectors(i,n),Ts.subVectors(s,n),Oc.subVectors(e,n);const l=Es.dot(Oc),c=Ts.dot(Oc);if(l<=0&&c<=0)return t.copy(n);Fc.subVectors(e,i);const u=Es.dot(Fc),h=Ts.dot(Fc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Es,a);kc.subVectors(e,s);const d=Es.dot(kc),_=Ts.dot(kc);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Ts,o);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return _d.subVectors(s,i),o=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(_d,o);const p=1/(m+g+f);return a=g*p,o=f*p,t.copy(n).addScaledVector(Es,a).addScaledVector(Ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Bc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=Ch(e,1),t=Sn(t,0,1),n=Sn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Bc(a,s,e+1/3),this.g=Bc(a,s,e),this.b=Bc(a,s,e-1/3)}return ft.toWorkingColorSpace(this,i),this}setStyle(e,t=Ht){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=cm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}copyLinearToSRGB(e){return this.r=Ac(e.r),this.g=Ac(e.g),this.b=Ac(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return ft.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Sn(Qt.r*255,0,255))*65536+Math.round(Sn(Qt.g*255,0,255))*256+Math.round(Sn(Qt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,i=Qt.g,s=Qt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Ht){ft.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,i=Qt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Ba);const n=Yo(Qi.h,Ba.h,t),i=Yo(Qi.s,Ba.s,t),s=Yo(Qi.l,Ba.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new rt;rt.NAMES=cm;let hv=0;class uo extends ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=Ys,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lu,this.blendDst=Du,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==yr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lu&&(n.blendSrc=this.blendSrc),this.blendDst!==Du&&(n.blendDst=this.blendDst),this.blendEquation!==kr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kl extends uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=K0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new H,za=new ct;class An{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=id,this.updateRange={offset:0,count:-1},this.gpuType=hr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)za.fromBufferAttribute(this,t),za.applyMatrix3(e),this.setXY(t,za.x,za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ns(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==id&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class um extends An{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hm extends An{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Fn extends An{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fv=0;const Jn=new Gt,zc=new Tn,bs=new H,Gn=new ma,So=new ma,Xt=new H;class Cn extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sm(e)?hm:um)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];So.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(Gn.min,So.min),Gn.expandByPoint(Xt),Xt.addVectors(Gn.max,So.max),Gn.expandByPoint(Xt)):(Gn.expandByPoint(So.min),Gn.expandByPoint(So.max))}Gn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Xt.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),Xt.add(bs)),i=Math.max(i,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new H,u[T]=new H;const h=new H,f=new H,d=new H,_=new ct,g=new ct,m=new ct,p=new H,M=new H;function v(T,F,U){h.fromArray(i,T*3),f.fromArray(i,F*3),d.fromArray(i,U*3),_.fromArray(a,T*2),g.fromArray(a,F*2),m.fromArray(a,U*2),f.sub(h),d.sub(h),g.sub(_),m.sub(_);const $=1/(g.x*m.y-m.x*g.y);isFinite($)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar($),M.copy(d).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar($),c[T].add(p),c[F].add(p),c[U].add(p),u[T].add(M),u[F].add(M),u[U].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let T=0,F=S.length;T<F;++T){const U=S[T],$=U.start,L=U.count;for(let k=$,Y=$+L;k<Y;k+=3)v(n[k+0],n[k+1],n[k+2])}const y=new H,A=new H,E=new H,P=new H;function x(T){E.fromArray(s,T*3),P.copy(E);const F=c[T];y.copy(F),y.sub(E.multiplyScalar(E.dot(F))).normalize(),A.crossVectors(P,F);const $=A.dot(u[T])<0?-1:1;l[T*4]=y.x,l[T*4+1]=y.y,l[T*4+2]=y.z,l[T*4+3]=$}for(let T=0,F=S.length;T<F;++T){const U=S[T],$=U.start,L=U.count;for(let k=$,Y=$+L;k<Y;k+=3)x(n[k+0]),x(n[k+1]),x(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new An(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vd=new Gt,Lr=new $l,Ha=new co,xd=new H,ws=new H,As=new H,Cs=new H,Hc=new H,Ga=new H,Va=new ct,Wa=new ct,Xa=new ct,Sd=new H,Md=new H,yd=new H,Ya=new H,qa=new H;class oi extends Tn{constructor(e=new Cn,t=new Kl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ga.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Hc.fromBufferAttribute(h,e),a?Ga.addScaledVector(Hc,u):Ga.addScaledVector(Hc.sub(t),u))}t.add(Ga)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(Ha.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Ha,xd)===null||Lr.origin.distanceToSquared(xd)>(e.far-e.near)**2))&&(vd.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(vd),!(n.boundingBox!==null&&Lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,y=v;S<y;S+=3){const A=o.getX(S),E=o.getX(S+1),P=o.getX(S+2);i=$a(this,p,e,n,c,u,h,A,E,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);i=$a(this,a,e,n,c,u,h,M,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,y=v;S<y;S+=3){const A=S,E=S+1,P=S+2;i=$a(this,p,e,n,c,u,h,A,E,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=m,v=m+1,S=m+2;i=$a(this,a,e,n,c,u,h,M,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function dv(r,e,t,n,i,s,a,o){let l;if(e.side===Nn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===yr,o),l===null)return null;qa.copy(o),qa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(qa);return c<t.near||c>t.far?null:{distance:c,point:qa.clone(),object:r}}function $a(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ws),r.getVertexPosition(l,As),r.getVertexPosition(c,Cs);const u=dv(r,e,t,n,ws,As,Cs,Ya);if(u){i&&(Va.fromBufferAttribute(i,o),Wa.fromBufferAttribute(i,l),Xa.fromBufferAttribute(i,c),u.uv=pi.getInterpolation(Ya,ws,As,Cs,Va,Wa,Xa,new ct)),s&&(Va.fromBufferAttribute(s,o),Wa.fromBufferAttribute(s,l),Xa.fromBufferAttribute(s,c),u.uv1=pi.getInterpolation(Ya,ws,As,Cs,Va,Wa,Xa,new ct),u.uv2=u.uv1),a&&(Sd.fromBufferAttribute(a,o),Md.fromBufferAttribute(a,l),yd.fromBufferAttribute(a,c),u.normal=pi.getInterpolation(Ya,ws,As,Cs,Sd,Md,yd,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new H,materialIndex:0};pi.getNormal(ws,As,Cs,h.normal),u.face=h}return u}class ga extends Cn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Fn(c,3)),this.setAttribute("normal",new Fn(u,3)),this.setAttribute("uv",new Fn(h,2));function _(g,m,p,M,v,S,y,A,E,P,x){const T=S/E,F=y/P,U=S/2,$=y/2,L=A/2,k=E+1,Y=P+1;let O=0,Z=0;const K=new H;for(let C=0;C<Y;C++){const I=C*F-$;for(let q=0;q<k;q++){const he=q*T-U;K[g]=he*M,K[m]=I*v,K[p]=L,c.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[p]=A>0?1:-1,u.push(K.x,K.y,K.z),h.push(q/E),h.push(1-C/P),O+=1}}for(let C=0;C<P;C++)for(let I=0;I<E;I++){const q=f+I+k*C,he=f+I+k*(C+1),ae=f+(I+1)+k*(C+1),fe=f+(I+1)+k*C;l.push(q,he,fe),l.push(he,ae,fe),Z+=6}o.addGroup(d,Z,x),d+=Z,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function so(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function fn(r){const e={};for(let t=0;t<r.length;t++){const n=so(r[t]);for(const i in n)e[i]=n[i]}return e}function pv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function fm(r){return r.getRenderTarget()===null?r.outputColorSpace:ft.workingColorSpace}const mv={clone:so,merge:fn};var gv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_v=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gv,this.fragmentShader=_v,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=pv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class dm extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yn extends dm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Rs=-90,Ps=1;class vv extends Tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yn(Rs,Ps,e,t);i.layers=this.layers,this.add(i);const s=new Yn(Rs,Ps,e,t);s.layers=this.layers,this.add(s);const a=new Yn(Rs,Ps,e,t);a.layers=this.layers,this.add(a);const o=new Yn(Rs,Ps,e,t);o.layers=this.layers,this.add(o);const l=new Yn(Rs,Ps,e,t);l.layers=this.layers,this.add(l);const c=new Yn(Rs,Ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ol)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class pm extends On{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:no,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xv extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(qo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ns?Ht:ii),this.texture=new pm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ga(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:so(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:gr});s.uniforms.tEquirect.value=t;const a=new oi(i,s),o=t.minFilter;return t.minFilter===sa&&(t.minFilter=ni),new vv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Gc=new H,Sv=new H,Mv=new Qe;class ir{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Gc.subVectors(n,t).cross(Sv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mv.getNormalMatrix(e),i=this.coplanarPoint(Gc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new co,ja=new H;class mm{constructor(e=new ir,t=new ir,n=new ir,i=new ir,s=new ir,a=new ir){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],M=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-s,f-c,m-d,S-p).normalize(),n[1].setComponents(l+s,f+c,m+d,S+p).normalize(),n[2].setComponents(l+a,f+u,m+_,S+M).normalize(),n[3].setComponents(l-a,f-u,m-_,S-M).normalize(),n[4].setComponents(l-o,f-h,m-g,S-v).normalize(),t===Vi)n[5].setComponents(l+o,f+h,m+g,S+v).normalize();else if(t===Ol)n[5].setComponents(o,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ja.x=i.normal.x>0?e.max.x:e.min.x,ja.y=i.normal.y>0?e.max.y:e.min.y,ja.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gm(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function yv(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;r.bindBuffer(h,c),d.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class oo extends Cn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const M=p*f-a;for(let v=0;v<c;v++){const S=v*h-s;_.push(S,-M,0),g.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const v=M+c*p,S=M+c*(p+1),y=M+1+c*(p+1),A=M+1+c*p;d.push(v,S,A),d.push(S,y,A)}this.setIndex(d),this.setAttribute("position",new Fn(_,3)),this.setAttribute("normal",new Fn(g,3)),this.setAttribute("uv",new Fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ev=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Av=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Iv=`#ifdef USE_IRIDESCENCE
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
#endif`,Nv=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wv=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,Xv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yv=`vec3 transformedNormal = objectNormal;
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
#endif`,qv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Qv=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ax=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lx=`#ifdef USE_GRADIENTMAP
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
}`,cx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ux=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#endif`,Sx=`struct PhysicalMaterial {
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Mx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lx=`#if defined( USE_POINTS_UV )
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
#endif`,Dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ix=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nx=`#ifdef USE_MORPHNORMALS
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
#endif`,Ox=`#ifdef USE_MORPHTARGETS
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
#endif`,Fx=`#ifdef USE_MORPHTARGETS
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
#endif`,kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,Bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vx=`#ifdef USE_NORMALMAP
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
#endif`,Wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,s2=`float getShadowMask() {
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
}`,o2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a2=`#ifdef USE_SKINNING
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
#endif`,l2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c2=`#ifdef USE_SKINNING
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
#endif`,u2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,p2=`#ifdef USE_TRANSMISSION
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
#endif`,m2=`#ifdef USE_TRANSMISSION
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
#endif`,g2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E2=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,T2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w2=`#include <common>
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
}`,A2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,C2=`#define DISTANCE
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
}`,R2=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,P2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D2=`uniform float scale;
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
}`,U2=`uniform vec3 diffuse;
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I2=`#include <common>
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
}`,N2=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O2=`#define LAMBERT
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
}`,F2=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k2=`#define MATCAP
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
}`,B2=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z2=`#define NORMAL
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
}`,H2=`#define NORMAL
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
}`,G2=`#define PHONG
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
}`,V2=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W2=`#define STANDARD
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
}`,X2=`#define STANDARD
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y2=`#define TOON
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
}`,q2=`#define TOON
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$2=`uniform float size;
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
}`,j2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K2=`#include <common>
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
}`,Z2=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,J2=`uniform float rotation;
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
}`,Q2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Ev,alphahash_pars_fragment:Tv,alphamap_fragment:bv,alphamap_pars_fragment:wv,alphatest_fragment:Av,alphatest_pars_fragment:Cv,aomap_fragment:Rv,aomap_pars_fragment:Pv,begin_vertex:Lv,beginnormal_vertex:Dv,bsdfs:Uv,iridescence_fragment:Iv,bumpmap_pars_fragment:Nv,clipping_planes_fragment:Ov,clipping_planes_pars_fragment:Fv,clipping_planes_pars_vertex:kv,clipping_planes_vertex:Bv,color_fragment:zv,color_pars_fragment:Hv,color_pars_vertex:Gv,color_vertex:Vv,common:Wv,cube_uv_reflection_fragment:Xv,defaultnormal_vertex:Yv,displacementmap_pars_vertex:qv,displacementmap_vertex:$v,emissivemap_fragment:jv,emissivemap_pars_fragment:Kv,colorspace_fragment:Zv,colorspace_pars_fragment:Jv,envmap_fragment:Qv,envmap_common_pars_fragment:ex,envmap_pars_fragment:tx,envmap_pars_vertex:nx,envmap_physical_pars_fragment:px,envmap_vertex:ix,fog_vertex:rx,fog_pars_vertex:sx,fog_fragment:ox,fog_pars_fragment:ax,gradientmap_pars_fragment:lx,lightmap_fragment:cx,lightmap_pars_fragment:ux,lights_lambert_fragment:hx,lights_lambert_pars_fragment:fx,lights_pars_begin:dx,lights_toon_fragment:mx,lights_toon_pars_fragment:gx,lights_phong_fragment:_x,lights_phong_pars_fragment:vx,lights_physical_fragment:xx,lights_physical_pars_fragment:Sx,lights_fragment_begin:Mx,lights_fragment_maps:yx,lights_fragment_end:Ex,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:bx,logdepthbuf_pars_vertex:wx,logdepthbuf_vertex:Ax,map_fragment:Cx,map_pars_fragment:Rx,map_particle_fragment:Px,map_particle_pars_fragment:Lx,metalnessmap_fragment:Dx,metalnessmap_pars_fragment:Ux,morphcolor_vertex:Ix,morphnormal_vertex:Nx,morphtarget_pars_vertex:Ox,morphtarget_vertex:Fx,normal_fragment_begin:kx,normal_fragment_maps:Bx,normal_pars_fragment:zx,normal_pars_vertex:Hx,normal_vertex:Gx,normalmap_pars_fragment:Vx,clearcoat_normal_fragment_begin:Wx,clearcoat_normal_fragment_maps:Xx,clearcoat_pars_fragment:Yx,iridescence_pars_fragment:qx,opaque_fragment:$x,packing:jx,premultiplied_alpha_fragment:Kx,project_vertex:Zx,dithering_fragment:Jx,dithering_pars_fragment:Qx,roughnessmap_fragment:e2,roughnessmap_pars_fragment:t2,shadowmap_pars_fragment:n2,shadowmap_pars_vertex:i2,shadowmap_vertex:r2,shadowmask_pars_fragment:s2,skinbase_vertex:o2,skinning_pars_vertex:a2,skinning_vertex:l2,skinnormal_vertex:c2,specularmap_fragment:u2,specularmap_pars_fragment:h2,tonemapping_fragment:f2,tonemapping_pars_fragment:d2,transmission_fragment:p2,transmission_pars_fragment:m2,uv_pars_fragment:g2,uv_pars_vertex:_2,uv_vertex:v2,worldpos_vertex:x2,background_vert:S2,background_frag:M2,backgroundCube_vert:y2,backgroundCube_frag:E2,cube_vert:T2,cube_frag:b2,depth_vert:w2,depth_frag:A2,distanceRGBA_vert:C2,distanceRGBA_frag:R2,equirect_vert:P2,equirect_frag:L2,linedashed_vert:D2,linedashed_frag:U2,meshbasic_vert:I2,meshbasic_frag:N2,meshlambert_vert:O2,meshlambert_frag:F2,meshmatcap_vert:k2,meshmatcap_frag:B2,meshnormal_vert:z2,meshnormal_frag:H2,meshphong_vert:G2,meshphong_frag:V2,meshphysical_vert:W2,meshphysical_frag:X2,meshtoon_vert:Y2,meshtoon_frag:q2,points_vert:$2,points_frag:j2,shadow_vert:K2,shadow_frag:Z2,sprite_vert:J2,sprite_frag:Q2},de={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Si={basic:{uniforms:fn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:fn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new rt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:fn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:fn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:fn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new rt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:fn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:fn([de.points,de.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:fn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:fn([de.common,de.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:fn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:fn([de.sprite,de.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:fn([de.common,de.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:fn([de.lights,de.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Si.physical={uniforms:fn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Ka={r:0,b:0,g:0};function eS(r,e,t,n,i,s,a){const o=new rt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(m,p){let M=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?g(o,l):v&&v.isColor&&(g(v,1),M=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Yl)?(u===void 0&&(u=new oi(new ga(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:so(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=ft.getTransfer(v.colorSpace)!==St,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new oi(new oo(2,2),new Pi({name:"BackgroundMaterial",uniforms:so(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ft.getTransfer(v.colorSpace)!==St,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Ka,fm(r)),n.buffers.color.setClear(Ka.r,Ka.g,Ka.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function tS(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function h(L,k,Y,O,Z){let K=!1;if(a){const C=g(O,Y,k);c!==C&&(c=C,d(c.object)),K=p(L,O,Y,Z),K&&M(L,O,Y,Z)}else{const C=k.wireframe===!0;(c.geometry!==O.id||c.program!==Y.id||c.wireframe!==C)&&(c.geometry=O.id,c.program=Y.id,c.wireframe=C,K=!0)}Z!==null&&t.update(Z,r.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,P(L,k,Y,O),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,k,Y){const O=Y.wireframe===!0;let Z=o[L.id];Z===void 0&&(Z={},o[L.id]=Z);let K=Z[k.id];K===void 0&&(K={},Z[k.id]=K);let C=K[O];return C===void 0&&(C=m(f()),K[O]=C),C}function m(L){const k=[],Y=[],O=[];for(let Z=0;Z<i;Z++)k[Z]=0,Y[Z]=0,O[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Y,attributeDivisors:O,object:L,attributes:{},index:null}}function p(L,k,Y,O){const Z=c.attributes,K=k.attributes;let C=0;const I=Y.getAttributes();for(const q in I)if(I[q].location>=0){const ae=Z[q];let fe=K[q];if(fe===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(fe=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(fe=L.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;C++}return c.attributesNum!==C||c.index!==O}function M(L,k,Y,O){const Z={},K=k.attributes;let C=0;const I=Y.getAttributes();for(const q in I)if(I[q].location>=0){let ae=K[q];ae===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor));const fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),Z[q]=fe,C++}c.attributes=Z,c.attributesNum=C,c.index=O}function v(){const L=c.newAttributes;for(let k=0,Y=L.length;k<Y;k++)L[k]=0}function S(L){y(L,0)}function y(L,k){const Y=c.newAttributes,O=c.enabledAttributes,Z=c.attributeDivisors;Y[L]=1,O[L]===0&&(r.enableVertexAttribArray(L),O[L]=1),Z[L]!==k&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),Z[L]=k)}function A(){const L=c.newAttributes,k=c.enabledAttributes;for(let Y=0,O=k.length;Y<O;Y++)k[Y]!==L[Y]&&(r.disableVertexAttribArray(Y),k[Y]=0)}function E(L,k,Y,O,Z,K,C){C===!0?r.vertexAttribIPointer(L,k,Y,Z,K):r.vertexAttribPointer(L,k,Y,O,Z,K)}function P(L,k,Y,O){if(n.isWebGL2===!1&&(L.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Z=O.attributes,K=Y.getAttributes(),C=k.defaultAttributeValues;for(const I in K){const q=K[I];if(q.location>=0){let he=Z[I];if(he===void 0&&(I==="instanceMatrix"&&L.instanceMatrix&&(he=L.instanceMatrix),I==="instanceColor"&&L.instanceColor&&(he=L.instanceColor)),he!==void 0){const ae=he.normalized,fe=he.itemSize,Ee=t.get(he);if(Ee===void 0)continue;const De=Ee.buffer,Te=Ee.type,Pe=Ee.bytesPerElement,lt=n.isWebGL2===!0&&(Te===r.INT||Te===r.UNSIGNED_INT||he.gpuType===J0);if(he.isInterleavedBufferAttribute){const Ue=he.data,z=Ue.stride,Ve=he.offset;if(Ue.isInstancedInterleavedBuffer){for(let me=0;me<q.locationSize;me++)y(q.location+me,Ue.meshPerAttribute);L.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let me=0;me<q.locationSize;me++)S(q.location+me);r.bindBuffer(r.ARRAY_BUFFER,De);for(let me=0;me<q.locationSize;me++)E(q.location+me,fe/q.locationSize,Te,ae,z*Pe,(Ve+fe/q.locationSize*me)*Pe,lt)}else{if(he.isInstancedBufferAttribute){for(let Ue=0;Ue<q.locationSize;Ue++)y(q.location+Ue,he.meshPerAttribute);L.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ue=0;Ue<q.locationSize;Ue++)S(q.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,De);for(let Ue=0;Ue<q.locationSize;Ue++)E(q.location+Ue,fe/q.locationSize,Te,ae,fe*Pe,fe/q.locationSize*Ue*Pe,lt)}}else if(C!==void 0){const ae=C[I];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(q.location,ae);break;case 3:r.vertexAttrib3fv(q.location,ae);break;case 4:r.vertexAttrib4fv(q.location,ae);break;default:r.vertexAttrib1fv(q.location,ae)}}}}A()}function x(){U();for(const L in o){const k=o[L];for(const Y in k){const O=k[Y];for(const Z in O)_(O[Z].object),delete O[Z];delete k[Y]}delete o[L]}}function T(L){if(o[L.id]===void 0)return;const k=o[L.id];for(const Y in k){const O=k[Y];for(const Z in O)_(O[Z].object),delete O[Z];delete k[Y]}delete o[L.id]}function F(L){for(const k in o){const Y=o[k];if(Y[L.id]===void 0)continue;const O=Y[L.id];for(const Z in O)_(O[Z].object),delete O[Z];delete Y[L.id]}}function U(){$(),u=!0,c!==l&&(c=l,d(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:$,dispose:x,releaseStatesOfGeometry:T,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:S,disableUnusedAttributes:A}}function nS(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=r,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function iS(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=a||e.has("OES_texture_float"),y=v&&S,A=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:y,maxSamples:A}}function rS(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ir,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,v=M*4;let S=p.clippingState||null;l.value=S,S=u(_,f,v,d);for(let y=0;y!==v;++y)S[y]=t[y];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=d;v!==g;++v,S+=4)a.copy(h[v]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function sS(r){let e=new WeakMap;function t(a,o){return o===Uu?a.mapping=no:o===Iu&&(a.mapping=io),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Uu||o===Iu)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new xv(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class oS extends dm{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bs=4,Ed=[.125,.215,.35,.446,.526,.582],Br=20,Vc=new oS,Td=new rt;let Wc=null,Xc=0,Yc=0;const Or=(1+Math.sqrt(5))/2,Ls=1/Or,bd=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Or,Ls),new H(0,Or,-Ls),new H(Ls,0,Or),new H(-Ls,0,Or),new H(Or,Ls,0),new H(-Or,Ls,0)];class wd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,Xc,Yc),e.scissorTest=!1,Za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:oa,format:gi,colorSpace:qi,depthBuffer:!1},i=Ad(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ad(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aS(s)),this._blurMaterial=lS(s,e,t)}return i}_compileMaterial(e){const t=new oi(this._lodPlanes[0],e);this._renderer.compile(t,Vc)}_sceneToCubeUV(e,t,n,i){const o=new Yn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Td),u.toneMapping=_r,u.autoClear=!1;const d=new Kl({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),_=new oi(new ga,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(Td),g=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;Za(i,M*v,p>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===no||e.mapping===io;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cd());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new oi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Za(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Vc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=bd[(i-1)%bd.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new oi(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Br-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Br;m>Br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Br}`);const p=[];let M=0;for(let E=0;E<Br;++E){const P=E/g,x=Math.exp(-P*P/2);p.push(x),E===0?M+=x:E<m&&(M+=2*x)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const S=this._sizeLods[i],y=3*S*(i>v-Bs?i-v+Bs:0),A=4*(this._cubeSize-S);Za(t,y,A,3*S,2*S),l.setRenderTarget(t),l.render(h,Vc)}}function aS(r){const e=[],t=[],n=[];let i=r;const s=r-Bs+1+Ed.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Bs?l=Ed[a-r+Bs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*d),v=new Float32Array(m*_*d),S=new Float32Array(p*_*d);for(let A=0;A<d;A++){const E=A%3*2/3-1,P=A>2?0:-1,x=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];M.set(x,g*_*A),v.set(f,m*_*A);const T=[A,A,A,A,A,A];S.set(T,p*_*A)}const y=new Cn;y.setAttribute("position",new An(M,g)),y.setAttribute("uv",new An(v,m)),y.setAttribute("faceIndex",new An(S,p)),e.push(y),i>Bs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ad(r,e,t){const n=new us(r,e,t);return n.texture.mapping=Yl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Za(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function lS(r,e,t){const n=new Float32Array(Br),i=new H(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Cd(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Rd(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Ph(){return`

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
	`}function cS(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Uu||l===Iu,u=l===no||l===io;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new wd(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new wd(r));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function uS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hS(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let v=0,S=M.length;v<S;v+=3){const y=M[v+0],A=M[v+1],E=M[v+2];f.push(y,A,A,E,E,y)}}else if(_!==void 0){const M=_.array;g=_.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const y=v+0,A=v+1,E=v+2;f.push(y,A,A,E,E,y)}}else return;const m=new(sm(f)?hm:um)(f,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function fS(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){r.drawElements(s,d,o,f*l),t.update(d,s,1)}function h(f,d,_){if(_===0)return;let g,m;if(i)g=r,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,d,o,f*l,_),t.update(d,s,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function dS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function pS(r,e){return r[0]-e[0]}function mS(r,e){return Math.abs(e[1])-Math.abs(r[1])}function gS(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Zt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let k=function(){$.dispose(),s.delete(u),u.removeEventListener("dispose",k)};var d=k;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let x=0;v===!0&&(x=1),S===!0&&(x=2),y===!0&&(x=3);let T=u.attributes.position.count*x,F=1;T>e.maxTextureSize&&(F=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const U=new Float32Array(T*F*4*g),$=new lm(U,T,F,g);$.type=hr,$.needsUpdate=!0;const L=x*4;for(let Y=0;Y<g;Y++){const O=A[Y],Z=E[Y],K=P[Y],C=T*F*4*Y;for(let I=0;I<O.count;I++){const q=I*L;v===!0&&(a.fromBufferAttribute(O,I),U[C+q+0]=a.x,U[C+q+1]=a.y,U[C+q+2]=a.z,U[C+q+3]=0),S===!0&&(a.fromBufferAttribute(Z,I),U[C+q+4]=a.x,U[C+q+5]=a.y,U[C+q+6]=a.z,U[C+q+7]=0),y===!0&&(a.fromBufferAttribute(K,I),U[C+q+8]=a.x,U[C+q+9]=a.y,U[C+q+10]=a.z,U[C+q+11]=K.itemSize===4?a.w:1)}}m={count:g,texture:$,size:new ct(T,F)},s.set(u,m),u.addEventListener("dispose",k)}let p=0;for(let v=0;v<f.length;v++)p+=f[v];const M=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let S=0;S<_;S++)g[S]=[S,0];n[u.id]=g}for(let S=0;S<_;S++){const y=g[S];y[0]=S,y[1]=f[S]}g.sort(mS);for(let S=0;S<8;S++)S<_&&g[S][1]?(o[S][0]=g[S][0],o[S][1]=g[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(pS);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let M=0;for(let S=0;S<8;S++){const y=o[S],A=y[0],E=y[1];A!==Number.MAX_SAFE_INTEGER&&E?(m&&u.getAttribute("morphTarget"+S)!==m[A]&&u.setAttribute("morphTarget"+S,m[A]),p&&u.getAttribute("morphNormal"+S)!==p[A]&&u.setAttribute("morphNormal"+S,p[A]),i[S]=E,M+=E):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const v=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function _S(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const _m=new On,vm=new lm,xm=new nv,Sm=new pm,Pd=[],Ld=[],Dd=new Float32Array(16),Ud=new Float32Array(9),Id=new Float32Array(4);function ho(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Pd[i];if(s===void 0&&(s=new Float32Array(i),Pd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Vt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Zl(r,e){let t=Ld[e];t===void 0&&(t=new Int32Array(e),Ld[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function vS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function xS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2fv(this.addr,e),Wt(t,e)}}function SS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;r.uniform3fv(this.addr,e),Wt(t,e)}}function MS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4fv(this.addr,e),Wt(t,e)}}function yS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Id.set(n),r.uniformMatrix2fv(this.addr,!1,Id),Wt(t,n)}}function ES(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Ud.set(n),r.uniformMatrix3fv(this.addr,!1,Ud),Wt(t,n)}}function TS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Dd.set(n),r.uniformMatrix4fv(this.addr,!1,Dd),Wt(t,n)}}function bS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function wS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2iv(this.addr,e),Wt(t,e)}}function AS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3iv(this.addr,e),Wt(t,e)}}function CS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4iv(this.addr,e),Wt(t,e)}}function RS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function PS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2uiv(this.addr,e),Wt(t,e)}}function LS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3uiv(this.addr,e),Wt(t,e)}}function DS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4uiv(this.addr,e),Wt(t,e)}}function US(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||_m,i)}function IS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xm,i)}function NS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Sm,i)}function OS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vm,i)}function FS(r){switch(r){case 5126:return vS;case 35664:return xS;case 35665:return SS;case 35666:return MS;case 35674:return yS;case 35675:return ES;case 35676:return TS;case 5124:case 35670:return bS;case 35667:case 35671:return wS;case 35668:case 35672:return AS;case 35669:case 35673:return CS;case 5125:return RS;case 36294:return PS;case 36295:return LS;case 36296:return DS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return IS;case 35680:case 36300:case 36308:case 36293:return NS;case 36289:case 36303:case 36311:case 36292:return OS}}function kS(r,e){r.uniform1fv(this.addr,e)}function BS(r,e){const t=ho(e,this.size,2);r.uniform2fv(this.addr,t)}function zS(r,e){const t=ho(e,this.size,3);r.uniform3fv(this.addr,t)}function HS(r,e){const t=ho(e,this.size,4);r.uniform4fv(this.addr,t)}function GS(r,e){const t=ho(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function VS(r,e){const t=ho(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function WS(r,e){const t=ho(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function XS(r,e){r.uniform1iv(this.addr,e)}function YS(r,e){r.uniform2iv(this.addr,e)}function qS(r,e){r.uniform3iv(this.addr,e)}function $S(r,e){r.uniform4iv(this.addr,e)}function jS(r,e){r.uniform1uiv(this.addr,e)}function KS(r,e){r.uniform2uiv(this.addr,e)}function ZS(r,e){r.uniform3uiv(this.addr,e)}function JS(r,e){r.uniform4uiv(this.addr,e)}function QS(r,e,t){const n=this.cache,i=e.length,s=Zl(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||_m,s[a])}function eM(r,e,t){const n=this.cache,i=e.length,s=Zl(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||xm,s[a])}function tM(r,e,t){const n=this.cache,i=e.length,s=Zl(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Sm,s[a])}function nM(r,e,t){const n=this.cache,i=e.length,s=Zl(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||vm,s[a])}function iM(r){switch(r){case 5126:return kS;case 35664:return BS;case 35665:return zS;case 35666:return HS;case 35674:return GS;case 35675:return VS;case 35676:return WS;case 5124:case 35670:return XS;case 35667:case 35671:return YS;case 35668:case 35672:return qS;case 35669:case 35673:return $S;case 5125:return jS;case 36294:return KS;case 36295:return ZS;case 36296:return JS;case 35678:case 36198:case 36298:case 36306:case 35682:return QS;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}class rM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=FS(t.type)}}class sM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=iM(t.type)}}class oM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function Nd(r,e){r.seq.push(e),r.map[e.id]=e}function aM(r,e,t){const n=r.name,i=n.length;for(qc.lastIndex=0;;){const s=qc.exec(n),a=qc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Nd(t,c===void 0?new rM(o,r,e):new sM(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new oM(o),Nd(t,h)),t=h}}}class dl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);aM(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Od(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const lM=37297;let cM=0;function uM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function hM(r){const e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(r);let n;switch(e===t?n="":e===Nl&&t===Il?n="LinearDisplayP3ToLinearSRGB":e===Il&&t===Nl&&(n="LinearSRGBToLinearDisplayP3"),r){case qi:case ql:return[n,"LinearTransferOETF"];case Ht:case Ah:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Fd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+uM(r.getShaderSource(e),a)}else return i}function fM(r,e){const t=hM(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function dM(r,e){let t;switch(e){case c1:t="Linear";break;case u1:t="Reinhard";break;case h1:t="OptimizedCineon";break;case f1:t="ACESFilmic";break;case d1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ro).join(`
`)}function mM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ro(r){return r!==""}function kd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _M=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bu(r){return r.replace(_M,xM)}const vM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xM(r,e){let t=je[e];if(t===void 0){const n=vM.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bu(t)}const SM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zd(r){return r.replace(SM,MM)}function MM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Hd(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===j0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===F_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function EM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case io:e="ENVMAP_MODE_REFRACTION";break}return e}function bM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case K0:e="ENVMAP_BLENDING_MULTIPLY";break;case a1:e="ENVMAP_BLENDING_MIX";break;case l1:e="ENVMAP_BLENDING_ADD";break}return e}function wM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function AM(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=yM(t),c=EM(t),u=TM(t),h=bM(t),f=wM(t),d=t.isWebGL2?"":pM(t),_=mM(s),g=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ro).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ro).join(`
`),p.length>0&&(p+=`
`)):(m=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),p=[d,Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_r?"#define TONE_MAPPING":"",t.toneMapping!==_r?je.tonemapping_pars_fragment:"",t.toneMapping!==_r?dM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,fM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ro).join(`
`)),a=Bu(a),a=kd(a,t),a=Bd(a,t),o=Bu(o),o=kd(o,t),o=Bd(o,t),a=zd(a),o=zd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+m+a,S=M+p+o,y=Od(i,i.VERTEX_SHADER,v),A=Od(i,i.FRAGMENT_SHADER,S);i.attachShader(g,y),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(F){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(g).trim(),$=i.getShaderInfoLog(y).trim(),L=i.getShaderInfoLog(A).trim();let k=!0,Y=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,y,A);else{const O=Fd(i,y,"vertex"),Z=Fd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+O+`
`+Z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):($===""||L==="")&&(Y=!1);Y&&(F.diagnostics={runnable:k,programLog:U,vertexShader:{log:$,prefix:m},fragmentShader:{log:L,prefix:p}})}i.deleteShader(y),i.deleteShader(A),P=new dl(i,g),x=gM(i,g)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(g,lM)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=A,this}let CM=0;class RM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new PM(e),t.set(e,n)),n}}class PM{constructor(e){this.id=CM++,this.code=e,this.usedTimes=0}}function LM(r,e,t,n,i,s,a){const o=new Rh,l=new RM,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===0?"uv":`uv${x}`}function m(x,T,F,U,$){const L=U.fog,k=$.geometry,Y=x.isMeshStandardMaterial?U.environment:null,O=(x.isMeshStandardMaterial?t:e).get(x.envMap||Y),Z=O&&O.mapping===Yl?O.image.height:null,K=_[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const C=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,I=C!==void 0?C.length:0;let q=0;k.morphAttributes.position!==void 0&&(q=1),k.morphAttributes.normal!==void 0&&(q=2),k.morphAttributes.color!==void 0&&(q=3);let he,ae,fe,Ee;if(K){const xe=Si[K];he=xe.vertexShader,ae=xe.fragmentShader}else he=x.vertexShader,ae=x.fragmentShader,l.update(x),fe=l.getVertexShaderID(x),Ee=l.getFragmentShaderID(x);const De=r.getRenderTarget(),Te=$.isInstancedMesh===!0,Pe=!!x.map,lt=!!x.matcap,Ue=!!O,z=!!x.aoMap,Ve=!!x.lightMap,me=!!x.bumpMap,we=!!x.normalMap,Ae=!!x.displacementMap,V=!!x.emissiveMap,Be=!!x.metalnessMap,He=!!x.roughnessMap,nt=x.anisotropy>0,Ke=x.clearcoat>0,vt=x.iridescence>0,R=x.sheen>0,b=x.transmission>0,B=nt&&!!x.anisotropyMap,re=Ke&&!!x.clearcoatMap,Q=Ke&&!!x.clearcoatNormalMap,te=Ke&&!!x.clearcoatRoughnessMap,ge=vt&&!!x.iridescenceMap,se=vt&&!!x.iridescenceThicknessMap,pe=R&&!!x.sheenColorMap,_e=R&&!!x.sheenRoughnessMap,it=!!x.specularMap,ie=!!x.specularColorMap,st=!!x.specularIntensityMap,ze=b&&!!x.transmissionMap,Ie=b&&!!x.thicknessMap,Le=!!x.gradientMap,ee=!!x.alphaMap,Ye=x.alphaTest>0,D=!!x.alphaHash,ue=!!x.extensions,ne=!!k.attributes.uv1,j=!!k.attributes.uv2,le=!!k.attributes.uv3;let Ce=_r;return x.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(Ce=r.toneMapping),{isWebGL2:u,shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:he,fragmentShader:ae,defines:x.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:Te,instancingColor:Te&&$.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:De===null?r.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:qi,map:Pe,matcap:lt,envMap:Ue,envMapMode:Ue&&O.mapping,envMapCubeUVHeight:Z,aoMap:z,lightMap:Ve,bumpMap:me,normalMap:we,displacementMap:f&&Ae,emissiveMap:V,normalMapObjectSpace:we&&x.normalMapType===A1,normalMapTangentSpace:we&&x.normalMapType===w1,metalnessMap:Be,roughnessMap:He,anisotropy:nt,anisotropyMap:B,clearcoat:Ke,clearcoatMap:re,clearcoatNormalMap:Q,clearcoatRoughnessMap:te,iridescence:vt,iridescenceMap:ge,iridescenceThicknessMap:se,sheen:R,sheenColorMap:pe,sheenRoughnessMap:_e,specularMap:it,specularColorMap:ie,specularIntensityMap:st,transmission:b,transmissionMap:ze,thicknessMap:Ie,gradientMap:Le,opaque:x.transparent===!1&&x.blending===Ys,alphaMap:ee,alphaTest:Ye,alphaHash:D,combine:x.combine,mapUv:Pe&&g(x.map.channel),aoMapUv:z&&g(x.aoMap.channel),lightMapUv:Ve&&g(x.lightMap.channel),bumpMapUv:me&&g(x.bumpMap.channel),normalMapUv:we&&g(x.normalMap.channel),displacementMapUv:Ae&&g(x.displacementMap.channel),emissiveMapUv:V&&g(x.emissiveMap.channel),metalnessMapUv:Be&&g(x.metalnessMap.channel),roughnessMapUv:He&&g(x.roughnessMap.channel),anisotropyMapUv:B&&g(x.anisotropyMap.channel),clearcoatMapUv:re&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Q&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(x.sheenRoughnessMap.channel),specularMapUv:it&&g(x.specularMap.channel),specularColorMapUv:ie&&g(x.specularColorMap.channel),specularIntensityMapUv:st&&g(x.specularIntensityMap.channel),transmissionMapUv:ze&&g(x.transmissionMap.channel),thicknessMapUv:Ie&&g(x.thicknessMap.channel),alphaMapUv:ee&&g(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(we||nt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:ne,vertexUv2s:j,vertexUv3s:le,pointsUvs:$.isPoints===!0&&!!k.attributes.uv&&(Pe||ee),fog:!!L,useFog:x.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:$.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ce,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ei,flipSided:x.side===Nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ue&&x.extensions.derivatives===!0,extensionFragDepth:ue&&x.extensions.fragDepth===!0,extensionDrawBuffers:ue&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)T.push(F),T.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(M(T,x),v(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function M(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function S(x){const T=_[x.type];let F;if(T){const U=Si[T];F=mv.clone(U.uniforms)}else F=x.uniforms;return F}function y(x,T){let F;for(let U=0,$=c.length;U<$;U++){const L=c[U];if(L.cacheKey===T){F=L,++F.usedTimes;break}}return F===void 0&&(F=new AM(r,T,x,s),c.push(F)),F}function A(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function E(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:y,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:P}}function DM(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function UM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Gd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Vd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,f,d,_,g,m){const p=a(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,_,g,m){const p=a(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||UM),n.length>1&&n.sort(f||Gd),i.length>1&&i.sort(f||Gd)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function IM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Vd,r.set(n,[a])):i>=s.length?(a=new Vd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function NM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new rt};break;case"SpotLight":t={position:new H,direction:new H,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function OM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let FM=0;function kM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function BM(r,e){const t=new NM,n=OM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new H);const s=new H,a=new Gt,o=new Gt;function l(u,h){let f=0,d=0,_=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let g=0,m=0,p=0,M=0,v=0,S=0,y=0,A=0,E=0,P=0,x=0;u.sort(kM);const T=h===!0?Math.PI:1;for(let U=0,$=u.length;U<$;U++){const L=u[U],k=L.color,Y=L.intensity,O=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=k.r*Y*T,d+=k.g*Y*T,_+=k.b*Y*T;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],Y);x++}else if(L.isDirectionalLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const C=L.shadow,I=n.get(L);I.shadowBias=C.bias,I.shadowNormalBias=C.normalBias,I.shadowRadius=C.radius,I.shadowMapSize=C.mapSize,i.directionalShadow[g]=I,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=L.shadow.matrix,S++}i.directional[g]=K,g++}else if(L.isSpotLight){const K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(k).multiplyScalar(Y*T),K.distance=O,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[p]=K;const C=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,C.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[p]=C.matrix,L.castShadow){const I=n.get(L);I.shadowBias=C.bias,I.shadowNormalBias=C.normalBias,I.shadowRadius=C.radius,I.shadowMapSize=C.mapSize,i.spotShadow[p]=I,i.spotShadowMap[p]=Z,A++}p++}else if(L.isRectAreaLight){const K=t.get(L);K.color.copy(k).multiplyScalar(Y),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=K,M++}else if(L.isPointLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*T),K.distance=L.distance,K.decay=L.decay,L.castShadow){const C=L.shadow,I=n.get(L);I.shadowBias=C.bias,I.shadowNormalBias=C.normalBias,I.shadowRadius=C.radius,I.shadowMapSize=C.mapSize,I.shadowCameraNear=C.camera.near,I.shadowCameraFar=C.camera.far,i.pointShadow[m]=I,i.pointShadowMap[m]=Z,i.pointShadowMatrix[m]=L.shadow.matrix,y++}i.point[m]=K,m++}else if(L.isHemisphereLight){const K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(Y*T),K.groundColor.copy(L.groundColor).multiplyScalar(Y*T),i.hemi[v]=K,v++}}M>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=_;const F=i.hash;(F.directionalLength!==g||F.pointLength!==m||F.spotLength!==p||F.rectAreaLength!==M||F.hemiLength!==v||F.numDirectionalShadows!==S||F.numPointShadows!==y||F.numSpotShadows!==A||F.numSpotMaps!==E||F.numLightProbes!==x)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=M,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=A+E-P,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=x,F.directionalLength=g,F.pointLength=m,F.spotLength=p,F.rectAreaLength=M,F.hemiLength=v,F.numDirectionalShadows=S,F.numPointShadows=y,F.numSpotShadows=A,F.numSpotMaps=E,F.numLightProbes=x,i.version=FM++)}function c(u,h){let f=0,d=0,_=0,g=0,m=0;const p=h.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const S=u[M];if(S.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(S.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),_++}else if(S.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Wd(r,e){const t=new BM(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function zM(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Wd(r,e),t.set(s,[l])):a>=o.length?(l=new Wd(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class HM extends uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GM extends uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WM=`uniform sampler2D shadow_pass;
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
}`;function XM(r,e,t){let n=new mm;const i=new ct,s=new ct,a=new Zt,o=new HM({depthPacking:b1}),l=new GM,c={},u=t.maxTextureSize,h={[yr]:Nn,[Nn]:yr,[Ei]:Ei},f=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:VM,fragmentShader:WM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Cn;_.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new oi(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=j0;let p=this.type;this.render=function(y,A,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const P=r.getRenderTarget(),x=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),F=r.state;F.setBlending(gr),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=p!==Fi&&this.type===Fi,$=p===Fi&&this.type!==Fi;for(let L=0,k=y.length;L<k;L++){const Y=y[L],O=Y.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const Z=O.getFrameExtents();if(i.multiply(Z),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,O.mapSize.y=s.y)),O.map===null||U===!0||$===!0){const C=this.type!==Fi?{minFilter:vn,magFilter:vn}:{};O.map!==null&&O.map.dispose(),O.map=new us(i.x,i.y,C),O.map.texture.name=Y.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();const K=O.getViewportCount();for(let C=0;C<K;C++){const I=O.getViewport(C);a.set(s.x*I.x,s.y*I.y,s.x*I.z,s.y*I.w),F.viewport(a),O.updateMatrices(Y,C),n=O.getFrustum(),S(A,E,O.camera,Y,this.type)}O.isPointLightShadow!==!0&&this.type===Fi&&M(O,E),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(P,x,T)};function M(y,A){const E=e.update(g);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new us(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(A,null,E,f,g,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(A,null,E,d,g,null)}function v(y,A,E,P){let x=null;const T=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(T!==void 0)x=T;else if(x=E.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=x.uuid,U=A.uuid;let $=c[F];$===void 0&&($={},c[F]=$);let L=$[U];L===void 0&&(L=x.clone(),$[U]=L),x=L}if(x.visible=A.visible,x.wireframe=A.wireframe,P===Fi?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:h[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,E.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=r.properties.get(x);F.light=E}return x}function S(y,A,E,P,x){if(y.visible===!1)return;if(y.layers.test(A.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===Fi)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const U=e.update(y),$=y.material;if(Array.isArray($)){const L=U.groups;for(let k=0,Y=L.length;k<Y;k++){const O=L[k],Z=$[O.materialIndex];if(Z&&Z.visible){const K=v(y,Z,P,x);r.renderBufferDirect(E,null,U,K,y,O)}}}else if($.visible){const L=v(y,$,P,x);r.renderBufferDirect(E,null,U,L,y,null)}}const F=y.children;for(let U=0,$=F.length;U<$;U++)S(F[U],A,E,P,x)}}function YM(r,e,t){const n=t.isWebGL2;function i(){let D=!1;const ue=new Zt;let ne=null;const j=new Zt(0,0,0,0);return{setMask:function(le){ne!==le&&!D&&(r.colorMask(le,le,le,le),ne=le)},setLocked:function(le){D=le},setClear:function(le,Ce,et,xe,Me){Me===!0&&(le*=xe,Ce*=xe,et*=xe),ue.set(le,Ce,et,xe),j.equals(ue)===!1&&(r.clearColor(le,Ce,et,xe),j.copy(ue))},reset:function(){D=!1,ne=null,j.set(-1,0,0,0)}}}function s(){let D=!1,ue=null,ne=null,j=null;return{setTest:function(le){le?Pe(r.DEPTH_TEST):lt(r.DEPTH_TEST)},setMask:function(le){ue!==le&&!D&&(r.depthMask(le),ue=le)},setFunc:function(le){if(ne!==le){switch(le){case e1:r.depthFunc(r.NEVER);break;case t1:r.depthFunc(r.ALWAYS);break;case n1:r.depthFunc(r.LESS);break;case Dl:r.depthFunc(r.LEQUAL);break;case i1:r.depthFunc(r.EQUAL);break;case r1:r.depthFunc(r.GEQUAL);break;case s1:r.depthFunc(r.GREATER);break;case o1:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ne=le}},setLocked:function(le){D=le},setClear:function(le){j!==le&&(r.clearDepth(le),j=le)},reset:function(){D=!1,ue=null,ne=null,j=null}}}function a(){let D=!1,ue=null,ne=null,j=null,le=null,Ce=null,et=null,xe=null,Me=null;return{setTest:function(Re){D||(Re?Pe(r.STENCIL_TEST):lt(r.STENCIL_TEST))},setMask:function(Re){ue!==Re&&!D&&(r.stencilMask(Re),ue=Re)},setFunc:function(Re,oe,Oe){(ne!==Re||j!==oe||le!==Oe)&&(r.stencilFunc(Re,oe,Oe),ne=Re,j=oe,le=Oe)},setOp:function(Re,oe,Oe){(Ce!==Re||et!==oe||xe!==Oe)&&(r.stencilOp(Re,oe,Oe),Ce=Re,et=oe,xe=Oe)},setLocked:function(Re){D=Re},setClear:function(Re){Me!==Re&&(r.clearStencil(Re),Me=Re)},reset:function(){D=!1,ue=null,ne=null,j=null,le=null,Ce=null,et=null,xe=null,Me=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},d={},_=new WeakMap,g=[],m=null,p=!1,M=null,v=null,S=null,y=null,A=null,E=null,P=null,x=new rt(0,0,0),T=0,F=!1,U=null,$=null,L=null,k=null,Y=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,K=0;const C=r.getParameter(r.VERSION);C.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(C)[1]),Z=K>=1):C.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),Z=K>=2);let I=null,q={};const he=r.getParameter(r.SCISSOR_BOX),ae=r.getParameter(r.VIEWPORT),fe=new Zt().fromArray(he),Ee=new Zt().fromArray(ae);function De(D,ue,ne,j){const le=new Uint8Array(4),Ce=r.createTexture();r.bindTexture(D,Ce),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let et=0;et<ne;et++)n&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(ue,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(ue+et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return Ce}const Te={};Te[r.TEXTURE_2D]=De(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=De(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Te[r.TEXTURE_2D_ARRAY]=De(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=De(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(r.DEPTH_TEST),l.setFunc(Dl),Be(!1),He(bf),Pe(r.CULL_FACE),Ae(gr);function Pe(D){f[D]!==!0&&(r.enable(D),f[D]=!0)}function lt(D){f[D]!==!1&&(r.disable(D),f[D]=!1)}function Ue(D,ue){return d[D]!==ue?(r.bindFramebuffer(D,ue),d[D]=ue,n&&(D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ue),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ue)),!0):!1}function z(D,ue){let ne=g,j=!1;if(D)if(ne=_.get(ue),ne===void 0&&(ne=[],_.set(ue,ne)),D.isWebGLMultipleRenderTargets){const le=D.texture;if(ne.length!==le.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let Ce=0,et=le.length;Ce<et;Ce++)ne[Ce]=r.COLOR_ATTACHMENT0+Ce;ne.length=le.length,j=!0}}else ne[0]!==r.COLOR_ATTACHMENT0&&(ne[0]=r.COLOR_ATTACHMENT0,j=!0);else ne[0]!==r.BACK&&(ne[0]=r.BACK,j=!0);j&&(t.isWebGL2?r.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Ve(D){return m!==D?(r.useProgram(D),m=D,!0):!1}const me={[kr]:r.FUNC_ADD,[B_]:r.FUNC_SUBTRACT,[z_]:r.FUNC_REVERSE_SUBTRACT};if(n)me[Cf]=r.MIN,me[Rf]=r.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(me[Cf]=D.MIN_EXT,me[Rf]=D.MAX_EXT)}const we={[H_]:r.ZERO,[G_]:r.ONE,[V_]:r.SRC_COLOR,[Lu]:r.SRC_ALPHA,[j_]:r.SRC_ALPHA_SATURATE,[q_]:r.DST_COLOR,[X_]:r.DST_ALPHA,[W_]:r.ONE_MINUS_SRC_COLOR,[Du]:r.ONE_MINUS_SRC_ALPHA,[$_]:r.ONE_MINUS_DST_COLOR,[Y_]:r.ONE_MINUS_DST_ALPHA,[K_]:r.CONSTANT_COLOR,[Z_]:r.ONE_MINUS_CONSTANT_COLOR,[J_]:r.CONSTANT_ALPHA,[Q_]:r.ONE_MINUS_CONSTANT_ALPHA};function Ae(D,ue,ne,j,le,Ce,et,xe,Me,Re){if(D===gr){p===!0&&(lt(r.BLEND),p=!1);return}if(p===!1&&(Pe(r.BLEND),p=!0),D!==k_){if(D!==M||Re!==F){if((v!==kr||A!==kr)&&(r.blendEquation(r.FUNC_ADD),v=kr,A=kr),Re)switch(D){case Ys:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fr:r.blendFunc(r.ONE,r.ONE);break;case wf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Af:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ys:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case wf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Af:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,y=null,E=null,P=null,x.set(0,0,0),T=0,M=D,F=Re}return}le=le||ue,Ce=Ce||ne,et=et||j,(ue!==v||le!==A)&&(r.blendEquationSeparate(me[ue],me[le]),v=ue,A=le),(ne!==S||j!==y||Ce!==E||et!==P)&&(r.blendFuncSeparate(we[ne],we[j],we[Ce],we[et]),S=ne,y=j,E=Ce,P=et),(xe.equals(x)===!1||Me!==T)&&(r.blendColor(xe.r,xe.g,xe.b,Me),x.copy(xe),T=Me),M=D,F=!1}function V(D,ue){D.side===Ei?lt(r.CULL_FACE):Pe(r.CULL_FACE);let ne=D.side===Nn;ue&&(ne=!ne),Be(ne),D.blending===Ys&&D.transparent===!1?Ae(gr):Ae(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const j=D.stencilWrite;c.setTest(j),j&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ke(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Pe(r.SAMPLE_ALPHA_TO_COVERAGE):lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){U!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),U=D)}function He(D){D!==N_?(Pe(r.CULL_FACE),D!==$&&(D===bf?r.cullFace(r.BACK):D===O_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):lt(r.CULL_FACE),$=D}function nt(D){D!==L&&(Z&&r.lineWidth(D),L=D)}function Ke(D,ue,ne){D?(Pe(r.POLYGON_OFFSET_FILL),(k!==ue||Y!==ne)&&(r.polygonOffset(ue,ne),k=ue,Y=ne)):lt(r.POLYGON_OFFSET_FILL)}function vt(D){D?Pe(r.SCISSOR_TEST):lt(r.SCISSOR_TEST)}function R(D){D===void 0&&(D=r.TEXTURE0+O-1),I!==D&&(r.activeTexture(D),I=D)}function b(D,ue,ne){ne===void 0&&(I===null?ne=r.TEXTURE0+O-1:ne=I);let j=q[ne];j===void 0&&(j={type:void 0,texture:void 0},q[ne]=j),(j.type!==D||j.texture!==ue)&&(I!==ne&&(r.activeTexture(ne),I=ne),r.bindTexture(D,ue||Te[D]),j.type=D,j.texture=ue)}function B(){const D=q[I];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function re(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(D){fe.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),fe.copy(D))}function Ie(D){Ee.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Ee.copy(D))}function Le(D,ue){let ne=h.get(ue);ne===void 0&&(ne=new WeakMap,h.set(ue,ne));let j=ne.get(D);j===void 0&&(j=r.getUniformBlockIndex(ue,D.name),ne.set(D,j))}function ee(D,ue){const j=h.get(ue).get(D);u.get(ue)!==j&&(r.uniformBlockBinding(ue,j,D.__bindingPointIndex),u.set(ue,j))}function Ye(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},I=null,q={},d={},_=new WeakMap,g=[],m=null,p=!1,M=null,v=null,S=null,y=null,A=null,E=null,P=null,x=new rt(0,0,0),T=0,F=!1,U=null,$=null,L=null,k=null,Y=null,fe.set(0,0,r.canvas.width,r.canvas.height),Ee.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:lt,bindFramebuffer:Ue,drawBuffers:z,useProgram:Ve,setBlending:Ae,setMaterial:V,setFlipSided:Be,setCullFace:He,setLineWidth:nt,setPolygonOffset:Ke,setScissorTest:vt,activeTexture:R,bindTexture:b,unbindTexture:B,compressedTexImage2D:re,compressedTexImage3D:Q,texImage2D:ie,texImage3D:st,updateUBOMapping:Le,uniformBlockBinding:ee,texStorage2D:_e,texStorage3D:it,texSubImage2D:te,texSubImage3D:ge,compressedTexSubImage2D:se,compressedTexSubImage3D:pe,scissor:ze,viewport:Ie,reset:Ye}}function qM(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,b){return p?new OffscreenCanvas(R,b):kl("canvas")}function v(R,b,B,re){let Q=1;if((R.width>re||R.height>re)&&(Q=re/Math.max(R.width,R.height)),Q<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const te=b?Fl:Math.floor,ge=te(Q*R.width),se=te(Q*R.height);g===void 0&&(g=M(ge,se));const pe=B?M(ge,se):g;return pe.width=ge,pe.height=se,pe.getContext("2d").drawImage(R,0,0,ge,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ge+"x"+se+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function S(R){return ku(R.width)&&ku(R.height)}function y(R){return o?!1:R.wrapS!==mi||R.wrapT!==mi||R.minFilter!==vn&&R.minFilter!==ni}function A(R,b){return R.generateMipmaps&&b&&R.minFilter!==vn&&R.minFilter!==ni}function E(R){r.generateMipmap(R)}function P(R,b,B,re,Q=!1){if(o===!1)return b;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=b;if(b===r.RED&&(B===r.FLOAT&&(te=r.R32F),B===r.HALF_FLOAT&&(te=r.R16F),B===r.UNSIGNED_BYTE&&(te=r.R8)),b===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(te=r.R8UI),B===r.UNSIGNED_SHORT&&(te=r.R16UI),B===r.UNSIGNED_INT&&(te=r.R32UI),B===r.BYTE&&(te=r.R8I),B===r.SHORT&&(te=r.R16I),B===r.INT&&(te=r.R32I)),b===r.RG&&(B===r.FLOAT&&(te=r.RG32F),B===r.HALF_FLOAT&&(te=r.RG16F),B===r.UNSIGNED_BYTE&&(te=r.RG8)),b===r.RGBA){const ge=Q?Ul:ft.getTransfer(re);B===r.FLOAT&&(te=r.RGBA32F),B===r.HALF_FLOAT&&(te=r.RGBA16F),B===r.UNSIGNED_BYTE&&(te=ge===St?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)}return(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(R,b,B){return A(R,B)===!0||R.isFramebufferTexture&&R.minFilter!==vn&&R.minFilter!==ni?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function T(R){return R===vn||R===Pf||R===Sc?r.NEAREST:r.LINEAR}function F(R){const b=R.target;b.removeEventListener("dispose",F),$(b),b.isVideoTexture&&_.delete(b)}function U(R){const b=R.target;b.removeEventListener("dispose",U),k(b)}function $(R){const b=n.get(R);if(b.__webglInit===void 0)return;const B=R.source,re=m.get(B);if(re){const Q=re[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(R),Object.keys(re).length===0&&m.delete(B)}n.remove(R)}function L(R){const b=n.get(R);r.deleteTexture(b.__webglTexture);const B=R.source,re=m.get(B);delete re[b.__cacheKey],a.memory.textures--}function k(R){const b=R.texture,B=n.get(R),re=n.get(b);if(re.__webglTexture!==void 0&&(r.deleteTexture(re.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(B.__webglFramebuffer[Q]))for(let te=0;te<B.__webglFramebuffer[Q].length;te++)r.deleteFramebuffer(B.__webglFramebuffer[Q][te]);else r.deleteFramebuffer(B.__webglFramebuffer[Q]);B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer[Q])}else{if(Array.isArray(B.__webglFramebuffer))for(let Q=0;Q<B.__webglFramebuffer.length;Q++)r.deleteFramebuffer(B.__webglFramebuffer[Q]);else r.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&r.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Q=0;Q<B.__webglColorRenderbuffer.length;Q++)B.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(B.__webglColorRenderbuffer[Q]);B.__webglDepthRenderbuffer&&r.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let Q=0,te=b.length;Q<te;Q++){const ge=n.get(b[Q]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(b[Q])}n.remove(b),n.remove(R)}let Y=0;function O(){Y=0}function Z(){const R=Y;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),Y+=1,R}function K(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function C(R,b){const B=n.get(R);if(R.isVideoTexture&&Ke(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const re=R.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(B,R,b);return}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+b)}function I(R,b){const B=n.get(R);if(R.version>0&&B.__version!==R.version){Pe(B,R,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+b)}function q(R,b){const B=n.get(R);if(R.version>0&&B.__version!==R.version){Pe(B,R,b);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+b)}function he(R,b){const B=n.get(R);if(R.version>0&&B.__version!==R.version){lt(B,R,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+b)}const ae={[Nu]:r.REPEAT,[mi]:r.CLAMP_TO_EDGE,[Ou]:r.MIRRORED_REPEAT},fe={[vn]:r.NEAREST,[Pf]:r.NEAREST_MIPMAP_NEAREST,[Sc]:r.NEAREST_MIPMAP_LINEAR,[ni]:r.LINEAR,[p1]:r.LINEAR_MIPMAP_NEAREST,[sa]:r.LINEAR_MIPMAP_LINEAR},Ee={[C1]:r.NEVER,[N1]:r.ALWAYS,[R1]:r.LESS,[L1]:r.LEQUAL,[P1]:r.EQUAL,[I1]:r.GEQUAL,[D1]:r.GREATER,[U1]:r.NOTEQUAL};function De(R,b,B){if(B?(r.texParameteri(R,r.TEXTURE_WRAP_S,ae[b.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ae[b.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ae[b.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,fe[b.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,fe[b.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(b.wrapS!==mi||b.wrapT!==mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,T(b.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==vn&&b.minFilter!==ni&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===vn||b.minFilter!==Sc&&b.minFilter!==sa||b.type===hr&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===oa&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(R,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Te(R,b){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",F));const re=b.source;let Q=m.get(re);Q===void 0&&(Q={},m.set(re,Q));const te=K(b);if(te!==R.__cacheKey){Q[te]===void 0&&(Q[te]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[te].usedTimes++;const ge=Q[R.__cacheKey];ge!==void 0&&(Q[R.__cacheKey].usedTimes--,ge.usedTimes===0&&L(b)),R.__cacheKey=te,R.__webglTexture=Q[te].texture}return B}function Pe(R,b,B){let re=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(re=r.TEXTURE_3D);const Q=Te(R,b),te=b.source;t.bindTexture(re,R.__webglTexture,r.TEXTURE0+B);const ge=n.get(te);if(te.version!==ge.__version||Q===!0){t.activeTexture(r.TEXTURE0+B);const se=ft.getPrimaries(ft.workingColorSpace),pe=b.colorSpace===ii?null:ft.getPrimaries(b.colorSpace),_e=b.colorSpace===ii||se===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const it=y(b)&&S(b.image)===!1;let ie=v(b.image,it,!1,u);ie=vt(b,ie);const st=S(ie)||o,ze=s.convert(b.format,b.colorSpace);let Ie=s.convert(b.type),Le=P(b.internalFormat,ze,Ie,b.colorSpace,b.isVideoTexture);De(re,b,st);let ee;const Ye=b.mipmaps,D=o&&b.isVideoTexture!==!0,ue=ge.__version===void 0||Q===!0,ne=x(b,ie,st);if(b.isDepthTexture)Le=r.DEPTH_COMPONENT,o?b.type===hr?Le=r.DEPTH_COMPONENT32F:b.type===ur?Le=r.DEPTH_COMPONENT24:b.type===es?Le=r.DEPTH24_STENCIL8:Le=r.DEPTH_COMPONENT16:b.type===hr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ts&&Le===r.DEPTH_COMPONENT&&b.type!==wh&&b.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ur,Ie=s.convert(b.type)),b.format===ro&&Le===r.DEPTH_COMPONENT&&(Le=r.DEPTH_STENCIL,b.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=es,Ie=s.convert(b.type))),ue&&(D?t.texStorage2D(r.TEXTURE_2D,1,Le,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,Le,ie.width,ie.height,0,ze,Ie,null));else if(b.isDataTexture)if(Ye.length>0&&st){D&&ue&&t.texStorage2D(r.TEXTURE_2D,ne,Le,Ye[0].width,Ye[0].height);for(let j=0,le=Ye.length;j<le;j++)ee=Ye[j],D?t.texSubImage2D(r.TEXTURE_2D,j,0,0,ee.width,ee.height,ze,Ie,ee.data):t.texImage2D(r.TEXTURE_2D,j,Le,ee.width,ee.height,0,ze,Ie,ee.data);b.generateMipmaps=!1}else D?(ue&&t.texStorage2D(r.TEXTURE_2D,ne,Le,ie.width,ie.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie.width,ie.height,ze,Ie,ie.data)):t.texImage2D(r.TEXTURE_2D,0,Le,ie.width,ie.height,0,ze,Ie,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){D&&ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Le,Ye[0].width,Ye[0].height,ie.depth);for(let j=0,le=Ye.length;j<le;j++)ee=Ye[j],b.format!==gi?ze!==null?D?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,ee.width,ee.height,ie.depth,ze,ee.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,Le,ee.width,ee.height,ie.depth,0,ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,ee.width,ee.height,ie.depth,ze,Ie,ee.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,Le,ee.width,ee.height,ie.depth,0,ze,Ie,ee.data)}else{D&&ue&&t.texStorage2D(r.TEXTURE_2D,ne,Le,Ye[0].width,Ye[0].height);for(let j=0,le=Ye.length;j<le;j++)ee=Ye[j],b.format!==gi?ze!==null?D?t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,ee.width,ee.height,ze,ee.data):t.compressedTexImage2D(r.TEXTURE_2D,j,Le,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage2D(r.TEXTURE_2D,j,0,0,ee.width,ee.height,ze,Ie,ee.data):t.texImage2D(r.TEXTURE_2D,j,Le,ee.width,ee.height,0,ze,Ie,ee.data)}else if(b.isDataArrayTexture)D?(ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Le,ie.width,ie.height,ie.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ze,Ie,ie.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,ie.width,ie.height,ie.depth,0,ze,Ie,ie.data);else if(b.isData3DTexture)D?(ue&&t.texStorage3D(r.TEXTURE_3D,ne,Le,ie.width,ie.height,ie.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ze,Ie,ie.data)):t.texImage3D(r.TEXTURE_3D,0,Le,ie.width,ie.height,ie.depth,0,ze,Ie,ie.data);else if(b.isFramebufferTexture){if(ue)if(D)t.texStorage2D(r.TEXTURE_2D,ne,Le,ie.width,ie.height);else{let j=ie.width,le=ie.height;for(let Ce=0;Ce<ne;Ce++)t.texImage2D(r.TEXTURE_2D,Ce,Le,j,le,0,ze,Ie,null),j>>=1,le>>=1}}else if(Ye.length>0&&st){D&&ue&&t.texStorage2D(r.TEXTURE_2D,ne,Le,Ye[0].width,Ye[0].height);for(let j=0,le=Ye.length;j<le;j++)ee=Ye[j],D?t.texSubImage2D(r.TEXTURE_2D,j,0,0,ze,Ie,ee):t.texImage2D(r.TEXTURE_2D,j,Le,ze,Ie,ee);b.generateMipmaps=!1}else D?(ue&&t.texStorage2D(r.TEXTURE_2D,ne,Le,ie.width,ie.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ze,Ie,ie)):t.texImage2D(r.TEXTURE_2D,0,Le,ze,Ie,ie);A(b,st)&&E(re),ge.__version=te.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function lt(R,b,B){if(b.image.length!==6)return;const re=Te(R,b),Q=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);const te=n.get(Q);if(Q.version!==te.__version||re===!0){t.activeTexture(r.TEXTURE0+B);const ge=ft.getPrimaries(ft.workingColorSpace),se=b.colorSpace===ii?null:ft.getPrimaries(b.colorSpace),pe=b.colorSpace===ii||ge===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const _e=b.isCompressedTexture||b.image[0].isCompressedTexture,it=b.image[0]&&b.image[0].isDataTexture,ie=[];for(let j=0;j<6;j++)!_e&&!it?ie[j]=v(b.image[j],!1,!0,c):ie[j]=it?b.image[j].image:b.image[j],ie[j]=vt(b,ie[j]);const st=ie[0],ze=S(st)||o,Ie=s.convert(b.format,b.colorSpace),Le=s.convert(b.type),ee=P(b.internalFormat,Ie,Le,b.colorSpace),Ye=o&&b.isVideoTexture!==!0,D=te.__version===void 0||re===!0;let ue=x(b,st,ze);De(r.TEXTURE_CUBE_MAP,b,ze);let ne;if(_e){Ye&&D&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,ee,st.width,st.height);for(let j=0;j<6;j++){ne=ie[j].mipmaps;for(let le=0;le<ne.length;le++){const Ce=ne[le];b.format!==gi?Ie!==null?Ye?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,ee,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,0,0,Ce.width,Ce.height,Ie,Le,Ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,ee,Ce.width,Ce.height,0,Ie,Le,Ce.data)}}}else{ne=b.mipmaps,Ye&&D&&(ne.length>0&&ue++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,ee,ie[0].width,ie[0].height));for(let j=0;j<6;j++)if(it){Ye?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ie[j].width,ie[j].height,Ie,Le,ie[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ee,ie[j].width,ie[j].height,0,Ie,Le,ie[j].data);for(let le=0;le<ne.length;le++){const et=ne[le].image[j].image;Ye?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,0,0,et.width,et.height,Ie,Le,et.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,ee,et.width,et.height,0,Ie,Le,et.data)}}else{Ye?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ie,Le,ie[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ee,Ie,Le,ie[j]);for(let le=0;le<ne.length;le++){const Ce=ne[le];Ye?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,0,0,Ie,Le,Ce.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,ee,Ie,Le,Ce.image[j])}}}A(b,ze)&&E(r.TEXTURE_CUBE_MAP),te.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ue(R,b,B,re,Q,te){const ge=s.convert(B.format,B.colorSpace),se=s.convert(B.type),pe=P(B.internalFormat,ge,se,B.colorSpace);if(!n.get(b).__hasExternalTextures){const it=Math.max(1,b.width>>te),ie=Math.max(1,b.height>>te);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,pe,it,ie,b.depth,0,ge,se,null):t.texImage2D(Q,te,pe,it,ie,0,ge,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),nt(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,Q,n.get(B).__webglTexture,0,He(b)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,Q,n.get(B).__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function z(R,b,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let re=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(B||nt(b)){const Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===hr?re=r.DEPTH_COMPONENT32F:Q.type===ur&&(re=r.DEPTH_COMPONENT24));const te=He(b);nt(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,re,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,te,re,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,re,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){const re=He(b);B&&nt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,b.width,b.height):nt(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const re=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<re.length;Q++){const te=re[Q],ge=s.convert(te.format,te.colorSpace),se=s.convert(te.type),pe=P(te.internalFormat,ge,se,te.colorSpace),_e=He(b);B&&nt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,pe,b.width,b.height):nt(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,pe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,pe,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ve(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),C(b.depthTexture,0);const re=n.get(b.depthTexture).__webglTexture,Q=He(b);if(b.depthTexture.format===ts)nt(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0);else if(b.depthTexture.format===ro)nt(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function me(R){const b=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ve(b.__webglFramebuffer,R)}else if(B){b.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[re]),b.__webglDepthbuffer[re]=r.createRenderbuffer(),z(b.__webglDepthbuffer[re],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),z(b.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(R,b,B){const re=n.get(R);b!==void 0&&Ue(re.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&me(R)}function Ae(R){const b=R.texture,B=n.get(R),re=n.get(b);R.addEventListener("dispose",U),R.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=b.version,a.memory.textures++);const Q=R.isWebGLCubeRenderTarget===!0,te=R.isWebGLMultipleRenderTargets===!0,ge=S(R)||o;if(Q){B.__webglFramebuffer=[];for(let se=0;se<6;se++)if(o&&b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[se]=[];for(let pe=0;pe<b.mipmaps.length;pe++)B.__webglFramebuffer[se][pe]=r.createFramebuffer()}else B.__webglFramebuffer[se]=r.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let se=0;se<b.mipmaps.length;se++)B.__webglFramebuffer[se]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(te)if(i.drawBuffers){const se=R.texture;for(let pe=0,_e=se.length;pe<_e;pe++){const it=n.get(se[pe]);it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&nt(R)===!1){const se=te?b:[b];B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pe=0;pe<se.length;pe++){const _e=se[pe];B.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[pe]);const it=s.convert(_e.format,_e.colorSpace),ie=s.convert(_e.type),st=P(_e.internalFormat,it,ie,_e.colorSpace,R.isXRRenderTarget===!0),ze=He(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,st,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,B.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),z(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),De(r.TEXTURE_CUBE_MAP,b,ge);for(let se=0;se<6;se++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)Ue(B.__webglFramebuffer[se][pe],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe);else Ue(B.__webglFramebuffer[se],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);A(b,ge)&&E(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const se=R.texture;for(let pe=0,_e=se.length;pe<_e;pe++){const it=se[pe],ie=n.get(it);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture),De(r.TEXTURE_2D,it,ge),Ue(B.__webglFramebuffer,R,it,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,0),A(it,ge)&&E(r.TEXTURE_2D)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?se=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,re.__webglTexture),De(se,b,ge),o&&b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)Ue(B.__webglFramebuffer[pe],R,b,r.COLOR_ATTACHMENT0,se,pe);else Ue(B.__webglFramebuffer,R,b,r.COLOR_ATTACHMENT0,se,0);A(b,ge)&&E(se),t.unbindTexture()}R.depthBuffer&&me(R)}function V(R){const b=S(R)||o,B=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let re=0,Q=B.length;re<Q;re++){const te=B[re];if(A(te,b)){const ge=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,se=n.get(te).__webglTexture;t.bindTexture(ge,se),E(ge),t.unbindTexture()}}}function Be(R){if(o&&R.samples>0&&nt(R)===!1){const b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],B=R.width,re=R.height;let Q=r.COLOR_BUFFER_BIT;const te=[],ge=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=n.get(R),pe=R.isWebGLMultipleRenderTargets===!0;if(pe)for(let _e=0;_e<b.length;_e++)t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let _e=0;_e<b.length;_e++){te.push(r.COLOR_ATTACHMENT0+_e),R.depthBuffer&&te.push(ge);const it=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(it===!1&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),pe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,se.__webglColorRenderbuffer[_e]),it===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ge]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ge])),pe){const ie=n.get(b[_e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,B,re,0,0,B,re,Q,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<b.length;_e++){t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,se.__webglColorRenderbuffer[_e]);const it=n.get(b[_e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,it,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function He(R){return Math.min(h,R.samples)}function nt(R){const b=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ke(R){const b=a.render.frame;_.get(R)!==b&&(_.set(R,b),R.update())}function vt(R,b){const B=R.colorSpace,re=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Fu||B!==qi&&B!==ii&&(ft.getTransfer(B)===St?o===!1?e.has("EXT_sRGB")===!0&&re===gi?(R.format=Fu,R.minFilter=ni,R.generateMipmaps=!1):b=om.sRGBToLinear(b):(re!==gi||Q!==vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}this.allocateTextureUnit=Z,this.resetTextureUnits=O,this.setTexture2D=C,this.setTexture2DArray=I,this.setTexture3D=q,this.setTextureCube=he,this.rebindTextures=we,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=nt}function $M(r,e,t){const n=t.isWebGL2;function i(s,a=ii){let o;const l=ft.getTransfer(a);if(s===vr)return r.UNSIGNED_BYTE;if(s===Q0)return r.UNSIGNED_SHORT_4_4_4_4;if(s===em)return r.UNSIGNED_SHORT_5_5_5_1;if(s===m1)return r.BYTE;if(s===g1)return r.SHORT;if(s===wh)return r.UNSIGNED_SHORT;if(s===J0)return r.INT;if(s===ur)return r.UNSIGNED_INT;if(s===hr)return r.FLOAT;if(s===oa)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===_1)return r.ALPHA;if(s===gi)return r.RGBA;if(s===v1)return r.LUMINANCE;if(s===x1)return r.LUMINANCE_ALPHA;if(s===ts)return r.DEPTH_COMPONENT;if(s===ro)return r.DEPTH_STENCIL;if(s===Fu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===S1)return r.RED;if(s===tm)return r.RED_INTEGER;if(s===M1)return r.RG;if(s===nm)return r.RG_INTEGER;if(s===im)return r.RGBA_INTEGER;if(s===Mc||s===yc||s===Ec||s===Tc)if(l===St)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Mc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ec)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Mc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ec)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lf||s===Df||s===Uf||s===If)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Lf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Df)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Uf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===If)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===y1)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Nf||s===Of)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Nf)return l===St?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Of)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ff||s===kf||s===Bf||s===zf||s===Hf||s===Gf||s===Vf||s===Wf||s===Xf||s===Yf||s===qf||s===$f||s===jf||s===Kf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ff)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kf)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bf)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zf)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hf)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gf)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vf)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wf)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Xf)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Yf)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qf)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$f)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===jf)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kf)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bc||s===Zf||s===Jf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===bc)return l===St?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===E1||s===Qf||s===ed||s===td)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===bc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Qf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ed)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===td)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===es?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class jM extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Po extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KM={type:"move"};class $c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(KM)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Po;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ZM extends On{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:ts,u!==ts&&u!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ts&&(n=ur),n===void 0&&u===ro&&(n=es),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class JM extends ao{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const M=[],v=[],S=new Yn;S.layers.enable(1),S.viewport=new Zt;const y=new Yn;y.layers.enable(2),y.viewport=new Zt;const A=[S,y],E=new jM;E.layers.enable(1),E.layers.enable(2);let P=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let q=M[I];return q===void 0&&(q=new $c,M[I]=q),q.getTargetRaySpace()},this.getControllerGrip=function(I){let q=M[I];return q===void 0&&(q=new $c,M[I]=q),q.getGripSpace()},this.getHand=function(I){let q=M[I];return q===void 0&&(q=new $c,M[I]=q),q.getHandSpace()};function T(I){const q=v.indexOf(I.inputSource);if(q===-1)return;const he=M[q];he!==void 0&&(he.update(I.inputSource,I.frame,c||a),he.dispatchEvent({type:I.type,data:I.inputSource}))}function F(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",U);for(let I=0;I<M.length;I++){const q=v[I];q!==null&&(v[I]=null,M[I].disconnect(q))}P=null,x=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,C.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",F),i.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:d}),p=new us(d.framebufferWidth,d.framebufferHeight,{format:gi,type:vr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let q=null,he=null,ae=null;g.depth&&(ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=g.stencil?ro:ts,he=g.stencil?es:ur);const fe={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(fe),i.updateRenderState({layers:[f]}),p=new us(f.textureWidth,f.textureHeight,{format:gi,type:vr,depthTexture:new ZM(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ee=e.properties.get(p);Ee.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),C.setContext(i),C.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function U(I){for(let q=0;q<I.removed.length;q++){const he=I.removed[q],ae=v.indexOf(he);ae>=0&&(v[ae]=null,M[ae].disconnect(he))}for(let q=0;q<I.added.length;q++){const he=I.added[q];let ae=v.indexOf(he);if(ae===-1){for(let Ee=0;Ee<M.length;Ee++)if(Ee>=v.length){v.push(he),ae=Ee;break}else if(v[Ee]===null){v[Ee]=he,ae=Ee;break}if(ae===-1)break}const fe=M[ae];fe&&fe.connect(he)}}const $=new H,L=new H;function k(I,q,he){$.setFromMatrixPosition(q.matrixWorld),L.setFromMatrixPosition(he.matrixWorld);const ae=$.distanceTo(L),fe=q.projectionMatrix.elements,Ee=he.projectionMatrix.elements,De=fe[14]/(fe[10]-1),Te=fe[14]/(fe[10]+1),Pe=(fe[9]+1)/fe[5],lt=(fe[9]-1)/fe[5],Ue=(fe[8]-1)/fe[0],z=(Ee[8]+1)/Ee[0],Ve=De*Ue,me=De*z,we=ae/(-Ue+z),Ae=we*-Ue;q.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ae),I.translateZ(we),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const V=De+we,Be=Te+we,He=Ve-Ae,nt=me+(ae-Ae),Ke=Pe*Te/Be*V,vt=lt*Te/Be*V;I.projectionMatrix.makePerspective(He,nt,Ke,vt,V,Be),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function Y(I,q){q===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(q.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;E.near=y.near=S.near=I.near,E.far=y.far=S.far=I.far,(P!==E.near||x!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,x=E.far);const q=I.parent,he=E.cameras;Y(E,q);for(let ae=0;ae<he.length;ae++)Y(he[ae],q);he.length===2?k(E,S,y):E.projectionMatrix.copy(S.projectionMatrix),O(I,E,q)};function O(I,q,he){he===null?I.matrix.copy(q.matrixWorld):(I.matrix.copy(he.matrixWorld),I.matrix.invert(),I.matrix.multiply(q.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(q.projectionMatrix),I.projectionMatrixInverse.copy(q.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=aa*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)};let Z=null;function K(I,q){if(u=q.getViewerPose(c||a),_=q,u!==null){const he=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ae=!1;he.length!==E.cameras.length&&(E.cameras.length=0,ae=!0);for(let fe=0;fe<he.length;fe++){const Ee=he[fe];let De=null;if(d!==null)De=d.getViewport(Ee);else{const Pe=h.getViewSubImage(f,Ee);De=Pe.viewport,fe===0&&(e.setRenderTargetTextures(p,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(p))}let Te=A[fe];Te===void 0&&(Te=new Yn,Te.layers.enable(fe),Te.viewport=new Zt,A[fe]=Te),Te.matrix.fromArray(Ee.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ee.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(De.x,De.y,De.width,De.height),fe===0&&(E.matrix.copy(Te.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ae===!0&&E.cameras.push(Te)}}for(let he=0;he<M.length;he++){const ae=v[he],fe=M[he];ae!==null&&fe!==void 0&&fe.update(ae,q,c||a)}Z&&Z(I,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),_=null}const C=new gm;C.setAnimationLoop(K),this.setAnimationLoop=function(I){Z=I},this.dispose=function(){}}}function QM(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fm(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ey(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function c(M,v){let S=i[M.id];S===void 0&&(_(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",m));const y=v.program;n.updateUBOMapping(M,y);const A=e.render.frame;s[M.id]!==A&&(f(M),s[M.id]=A)}function u(M){const v=h();M.__bindingPointIndex=v;const S=r.createBuffer(),y=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,y,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=i[M.id],S=M.uniforms,y=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,E=S.length;A<E;A++){const P=S[A];if(d(P,A,y)===!0){const x=P.__offset,T=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let U=0;U<T.length;U++){const $=T[U],L=g($);typeof $=="number"?(P.__data[0]=$,r.bufferSubData(r.UNIFORM_BUFFER,x+F,P.__data)):$.isMatrix3?(P.__data[0]=$.elements[0],P.__data[1]=$.elements[1],P.__data[2]=$.elements[2],P.__data[3]=$.elements[0],P.__data[4]=$.elements[3],P.__data[5]=$.elements[4],P.__data[6]=$.elements[5],P.__data[7]=$.elements[0],P.__data[8]=$.elements[6],P.__data[9]=$.elements[7],P.__data[10]=$.elements[8],P.__data[11]=$.elements[0]):($.toArray(P.__data,F),F+=L.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,x,P.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,v,S){const y=M.value;if(S[v]===void 0){if(typeof y=="number")S[v]=y;else{const A=Array.isArray(y)?y:[y],E=[];for(let P=0;P<A.length;P++)E.push(A[P].clone());S[v]=E}return!0}else if(typeof y=="number"){if(S[v]!==y)return S[v]=y,!0}else{const A=Array.isArray(S[v])?S[v]:[S[v]],E=Array.isArray(y)?y:[y];for(let P=0;P<A.length;P++){const x=A[P];if(x.equals(E[P])===!1)return x.copy(E[P]),!0}}return!1}function _(M){const v=M.uniforms;let S=0;const y=16;let A=0;for(let E=0,P=v.length;E<P;E++){const x=v[E],T={boundary:0,storage:0},F=Array.isArray(x.value)?x.value:[x.value];for(let U=0,$=F.length;U<$;U++){const L=F[U],k=g(L);T.boundary+=k.boundary,T.storage+=k.storage}if(x.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=S,E>0){A=S%y;const U=y-A;A!==0&&U-T.boundary<0&&(S+=y-A,x.__offset=S)}S+=T.storage}return A=S%y,A>0&&(S+=y-A),M.__size=S,M.__cache={},this}function g(M){const v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Lh{constructor(e={}){const{canvas:t=Z1(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this._useLegacyLights=!1,this.toneMapping=_r,this.toneMappingExposure=1;const v=this;let S=!1,y=0,A=0,E=null,P=-1,x=null;const T=new Zt,F=new Zt;let U=null;const $=new rt(0);let L=0,k=t.width,Y=t.height,O=1,Z=null,K=null;const C=new Zt(0,0,k,Y),I=new Zt(0,0,k,Y);let q=!1;const he=new mm;let ae=!1,fe=!1,Ee=null;const De=new Gt,Te=new ct,Pe=new H,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return E===null?O:1}let z=n;function Ve(w,N){for(let W=0;W<w.length;W++){const G=w[W],X=t.getContext(G,N);if(X!==null)return X}return null}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bh}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ue,!1),z===null){const N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),z=Ve(N,w),z===null)throw Ve(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let me,we,Ae,V,Be,He,nt,Ke,vt,R,b,B,re,Q,te,ge,se,pe,_e,it,ie,st,ze,Ie;function Le(){me=new uS(z),we=new iS(z,me,e),me.init(we),st=new $M(z,me,we),Ae=new YM(z,me,we),V=new dS(z),Be=new DM,He=new qM(z,me,Ae,Be,we,st,V),nt=new sS(v),Ke=new cS(v),vt=new yv(z,we),ze=new tS(z,me,vt,we),R=new hS(z,vt,V,ze),b=new _S(z,R,vt,V),_e=new gS(z,we,He),ge=new rS(Be),B=new LM(v,nt,Ke,me,we,ze,ge),re=new QM(v,Be),Q=new IM,te=new zM(me,we),pe=new eS(v,nt,Ke,Ae,b,f,l),se=new XM(v,b,we),Ie=new ey(z,V,we,Ae),it=new nS(z,me,V,we),ie=new fS(z,me,V,we),V.programs=B.programs,v.capabilities=we,v.extensions=me,v.properties=Be,v.renderLists=Q,v.shadowMap=se,v.state=Ae,v.info=V}Le();const ee=new JM(v,z);this.xr=ee,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(k,Y,!1))},this.getSize=function(w){return w.set(k,Y)},this.setSize=function(w,N,W=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,Y=N,t.width=Math.floor(w*O),t.height=Math.floor(N*O),W===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(k*O,Y*O).floor()},this.setDrawingBufferSize=function(w,N,W){k=w,Y=N,O=W,t.width=Math.floor(w*W),t.height=Math.floor(N*W),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(C)},this.setViewport=function(w,N,W,G){w.isVector4?C.set(w.x,w.y,w.z,w.w):C.set(w,N,W,G),Ae.viewport(T.copy(C).multiplyScalar(O).floor())},this.getScissor=function(w){return w.copy(I)},this.setScissor=function(w,N,W,G){w.isVector4?I.set(w.x,w.y,w.z,w.w):I.set(w,N,W,G),Ae.scissor(F.copy(I).multiplyScalar(O).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(w){Ae.setScissorTest(q=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(w=!0,N=!0,W=!0){let G=0;if(w){let X=!1;if(E!==null){const ce=E.texture.format;X=ce===im||ce===nm||ce===tm}if(X){const ce=E.texture.type,Se=ce===vr||ce===ur||ce===wh||ce===es||ce===Q0||ce===em,Fe=pe.getClearColor(),ye=pe.getClearAlpha(),be=Fe.r,ke=Fe.g,Xe=Fe.b;Se?(d[0]=be,d[1]=ke,d[2]=Xe,d[3]=ye,z.clearBufferuiv(z.COLOR,0,d)):(_[0]=be,_[1]=ke,_[2]=Xe,_[3]=ye,z.clearBufferiv(z.COLOR,0,_))}else G|=z.COLOR_BUFFER_BIT}N&&(G|=z.DEPTH_BUFFER_BIT),W&&(G|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Q.dispose(),te.dispose(),Be.dispose(),nt.dispose(),Ke.dispose(),b.dispose(),ze.dispose(),Ie.dispose(),B.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Me),ee.removeEventListener("sessionend",Re),Ee&&(Ee.dispose(),Ee=null),oe.stop()};function Ye(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=V.autoReset,N=se.enabled,W=se.autoUpdate,G=se.needsUpdate,X=se.type;Le(),V.autoReset=w,se.enabled=N,se.autoUpdate=W,se.needsUpdate=G,se.type=X}function ue(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ne(w){const N=w.target;N.removeEventListener("dispose",ne),j(N)}function j(w){le(w),Be.remove(w)}function le(w){const N=Be.get(w).programs;N!==void 0&&(N.forEach(function(W){B.releaseProgram(W)}),w.isShaderMaterial&&B.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,W,G,X,ce){N===null&&(N=lt);const Se=X.isMesh&&X.matrixWorld.determinant()<0,Fe=gt(w,N,W,G,X);Ae.setMaterial(G,Se);let ye=W.index,be=1;if(G.wireframe===!0){if(ye=R.getWireframeAttribute(W),ye===void 0)return;be=2}const ke=W.drawRange,Xe=W.attributes.position;let yt=ke.start*be,kt=(ke.start+ke.count)*be;ce!==null&&(yt=Math.max(yt,ce.start*be),kt=Math.min(kt,(ce.start+ce.count)*be)),ye!==null?(yt=Math.max(yt,0),kt=Math.min(kt,ye.count)):Xe!=null&&(yt=Math.max(yt,0),kt=Math.min(kt,Xe.count));const ht=kt-yt;if(ht<0||ht===1/0)return;ze.setup(X,G,Fe,W,ye);let an,dt=it;if(ye!==null&&(an=vt.get(ye),dt=ie,dt.setIndex(an)),X.isMesh)G.wireframe===!0?(Ae.setLineWidth(G.wireframeLinewidth*Ue()),dt.setMode(z.LINES)):dt.setMode(z.TRIANGLES);else if(X.isLine){let qe=G.linewidth;qe===void 0&&(qe=1),Ae.setLineWidth(qe*Ue()),X.isLineSegments?dt.setMode(z.LINES):X.isLineLoop?dt.setMode(z.LINE_LOOP):dt.setMode(z.LINE_STRIP)}else X.isPoints?dt.setMode(z.POINTS):X.isSprite&&dt.setMode(z.TRIANGLES);if(X.isInstancedMesh)dt.renderInstances(yt,ht,X.count);else if(W.isInstancedBufferGeometry){const qe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ql=Math.min(W.instanceCount,qe);dt.renderInstances(yt,ht,Ql)}else dt.render(yt,ht)};function Ce(w,N,W){w.transparent===!0&&w.side===Ei&&w.forceSinglePass===!1?(w.side=Nn,w.needsUpdate=!0,mt(w,N,W),w.side=yr,w.needsUpdate=!0,mt(w,N,W),w.side=Ei):mt(w,N,W)}this.compile=function(w,N,W=null){W===null&&(W=w),m=te.get(W),m.init(),M.push(m),W.traverseVisible(function(X){X.isLight&&X.layers.test(N.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),w!==W&&w.traverseVisible(function(X){X.isLight&&X.layers.test(N.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(v._useLegacyLights);const G=new Set;return w.traverse(function(X){const ce=X.material;if(ce)if(Array.isArray(ce))for(let Se=0;Se<ce.length;Se++){const Fe=ce[Se];Ce(Fe,W,X),G.add(Fe)}else Ce(ce,W,X),G.add(ce)}),M.pop(),m=null,G},this.compileAsync=function(w,N,W=null){const G=this.compile(w,N,W);return new Promise(X=>{function ce(){if(G.forEach(function(Se){Be.get(Se).currentProgram.isReady()&&G.delete(Se)}),G.size===0){X(w);return}setTimeout(ce,10)}me.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let et=null;function xe(w){et&&et(w)}function Me(){oe.stop()}function Re(){oe.start()}const oe=new gm;oe.setAnimationLoop(xe),typeof self<"u"&&oe.setContext(self),this.setAnimationLoop=function(w){et=w,ee.setAnimationLoop(w),w===null?oe.stop():oe.start()},ee.addEventListener("sessionstart",Me),ee.addEventListener("sessionend",Re),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(N),N=ee.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,N,E),m=te.get(w,M.length),m.init(),M.push(m),De.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),he.setFromProjectionMatrix(De),fe=this.localClippingEnabled,ae=ge.init(this.clippingPlanes,fe),g=Q.get(w,p.length),g.init(),p.push(g),Oe(w,N,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Z,K),this.info.render.frame++,ae===!0&&ge.beginShadows();const W=m.state.shadowsArray;if(se.render(W,w,N),ae===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(g,w),m.setupLights(v._useLegacyLights),N.isArrayCamera){const G=N.cameras;for(let X=0,ce=G.length;X<ce;X++){const Se=G[X];Ne(g,w,Se,Se.viewport)}}else Ne(g,w,N);E!==null&&(He.updateMultisampleRenderTarget(E),He.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(v,w,N),ze.resetDefaultState(),P=-1,x=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Oe(w,N,W,G){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||he.intersectsSprite(w)){G&&Pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(De);const Se=b.update(w),Fe=w.material;Fe.visible&&g.push(w,Se,Fe,W,Pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||he.intersectsObject(w))){const Se=b.update(w),Fe=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pe.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Pe.copy(Se.boundingSphere.center)),Pe.applyMatrix4(w.matrixWorld).applyMatrix4(De)),Array.isArray(Fe)){const ye=Se.groups;for(let be=0,ke=ye.length;be<ke;be++){const Xe=ye[be],yt=Fe[Xe.materialIndex];yt&&yt.visible&&g.push(w,Se,yt,W,Pe.z,Xe)}}else Fe.visible&&g.push(w,Se,Fe,W,Pe.z,null)}}const ce=w.children;for(let Se=0,Fe=ce.length;Se<Fe;Se++)Oe(ce[Se],N,W,G)}function Ne(w,N,W,G){const X=w.opaque,ce=w.transmissive,Se=w.transparent;m.setupLightsView(W),ae===!0&&ge.setGlobalState(v.clippingPlanes,W),ce.length>0&&We(X,ce,N,W),G&&Ae.viewport(T.copy(G)),X.length>0&&Tt(X,N,W),ce.length>0&&Tt(ce,N,W),Se.length>0&&Tt(Se,N,W),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function We(w,N,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const ce=we.isWebGL2;Ee===null&&(Ee=new us(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?oa:vr,minFilter:sa,samples:ce?4:0})),v.getDrawingBufferSize(Te),ce?Ee.setSize(Te.x,Te.y):Ee.setSize(Fl(Te.x),Fl(Te.y));const Se=v.getRenderTarget();v.setRenderTarget(Ee),v.getClearColor($),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Fe=v.toneMapping;v.toneMapping=_r,Tt(w,W,G),He.updateMultisampleRenderTarget(Ee),He.updateRenderTargetMipmap(Ee);let ye=!1;for(let be=0,ke=N.length;be<ke;be++){const Xe=N[be],yt=Xe.object,kt=Xe.geometry,ht=Xe.material,an=Xe.group;if(ht.side===Ei&&yt.layers.test(G.layers)){const dt=ht.side;ht.side=Nn,ht.needsUpdate=!0,Ze(yt,W,G,kt,ht,an),ht.side=dt,ht.needsUpdate=!0,ye=!0}}ye===!0&&(He.updateMultisampleRenderTarget(Ee),He.updateRenderTargetMipmap(Ee)),v.setRenderTarget(Se),v.setClearColor($,L),v.toneMapping=Fe}function Tt(w,N,W){const G=N.isScene===!0?N.overrideMaterial:null;for(let X=0,ce=w.length;X<ce;X++){const Se=w[X],Fe=Se.object,ye=Se.geometry,be=G===null?Se.material:G,ke=Se.group;Fe.layers.test(W.layers)&&Ze(Fe,N,W,ye,be,ke)}}function Ze(w,N,W,G,X,ce){w.onBeforeRender(v,N,W,G,X,ce),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(v,N,W,G,w,ce),X.transparent===!0&&X.side===Ei&&X.forceSinglePass===!1?(X.side=Nn,X.needsUpdate=!0,v.renderBufferDirect(W,N,G,X,w,ce),X.side=yr,X.needsUpdate=!0,v.renderBufferDirect(W,N,G,X,w,ce),X.side=Ei):v.renderBufferDirect(W,N,G,X,w,ce),w.onAfterRender(v,N,W,G,X,ce)}function mt(w,N,W){N.isScene!==!0&&(N=lt);const G=Be.get(w),X=m.state.lights,ce=m.state.shadowsArray,Se=X.state.version,Fe=B.getParameters(w,X.state,ce,N,W),ye=B.getProgramCacheKey(Fe);let be=G.programs;G.environment=w.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(w.isMeshStandardMaterial?Ke:nt).get(w.envMap||G.environment),be===void 0&&(w.addEventListener("dispose",ne),be=new Map,G.programs=be);let ke=be.get(ye);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===Se)return xt(w,Fe),ke}else Fe.uniforms=B.getUniforms(w),w.onBuild(W,Fe,v),w.onBeforeCompile(Fe,v),ke=B.acquireProgram(Fe,ye),be.set(ye,ke),G.uniforms=Fe.uniforms;const Xe=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=ge.uniform),xt(w,Fe),G.needsLights=Bn(w),G.lightsStateVersion=Se,G.needsLights&&(Xe.ambientLightColor.value=X.state.ambient,Xe.lightProbe.value=X.state.probe,Xe.directionalLights.value=X.state.directional,Xe.directionalLightShadows.value=X.state.directionalShadow,Xe.spotLights.value=X.state.spot,Xe.spotLightShadows.value=X.state.spotShadow,Xe.rectAreaLights.value=X.state.rectArea,Xe.ltc_1.value=X.state.rectAreaLTC1,Xe.ltc_2.value=X.state.rectAreaLTC2,Xe.pointLights.value=X.state.point,Xe.pointLightShadows.value=X.state.pointShadow,Xe.hemisphereLights.value=X.state.hemi,Xe.directionalShadowMap.value=X.state.directionalShadowMap,Xe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xe.spotShadowMap.value=X.state.spotShadowMap,Xe.spotLightMatrix.value=X.state.spotLightMatrix,Xe.spotLightMap.value=X.state.spotLightMap,Xe.pointShadowMap.value=X.state.pointShadowMap,Xe.pointShadowMatrix.value=X.state.pointShadowMatrix),G.currentProgram=ke,G.uniformsList=null,ke}function Ft(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=dl.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function xt(w,N){const W=Be.get(w);W.outputColorSpace=N.outputColorSpace,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function gt(w,N,W,G,X){N.isScene!==!0&&(N=lt),He.resetTextureUnits();const ce=N.fog,Se=G.isMeshStandardMaterial?N.environment:null,Fe=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:qi,ye=(G.isMeshStandardMaterial?Ke:nt).get(G.envMap||Se),be=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Xe=!!W.morphAttributes.position,yt=!!W.morphAttributes.normal,kt=!!W.morphAttributes.color;let ht=_r;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ht=v.toneMapping);const an=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,dt=an!==void 0?an.length:0,qe=Be.get(G),Ql=m.state.lights;if(ae===!0&&(fe===!0||w!==x)){const zn=w===x&&G.id===P;ge.setState(G,w,zn)}let Ut=!1;G.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ql.state.version||qe.outputColorSpace!==Fe||X.isInstancedMesh&&qe.instancing===!1||!X.isInstancedMesh&&qe.instancing===!0||X.isSkinnedMesh&&qe.skinning===!1||!X.isSkinnedMesh&&qe.skinning===!0||X.isInstancedMesh&&qe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&qe.instancingColor===!1&&X.instanceColor!==null||qe.envMap!==ye||G.fog===!0&&qe.fog!==ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ge.numPlanes||qe.numIntersection!==ge.numIntersection)||qe.vertexAlphas!==be||qe.vertexTangents!==ke||qe.morphTargets!==Xe||qe.morphNormals!==yt||qe.morphColors!==kt||qe.toneMapping!==ht||we.isWebGL2===!0&&qe.morphTargetsCount!==dt)&&(Ut=!0):(Ut=!0,qe.__version=G.version);let br=qe.currentProgram;Ut===!0&&(br=mt(G,N,X));let kh=!1,fo=!1,ec=!1;const ln=br.getUniforms(),wr=qe.uniforms;if(Ae.useProgram(br.program)&&(kh=!0,fo=!0,ec=!0),G.id!==P&&(P=G.id,fo=!0),kh||x!==w){ln.setValue(z,"projectionMatrix",w.projectionMatrix),ln.setValue(z,"viewMatrix",w.matrixWorldInverse);const zn=ln.map.cameraPosition;zn!==void 0&&zn.setValue(z,Pe.setFromMatrixPosition(w.matrixWorld)),we.logarithmicDepthBuffer&&ln.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ln.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,fo=!0,ec=!0)}if(X.isSkinnedMesh){ln.setOptional(z,X,"bindMatrix"),ln.setOptional(z,X,"bindMatrixInverse");const zn=X.skeleton;zn&&(we.floatVertexTextures?(zn.boneTexture===null&&zn.computeBoneTexture(),ln.setValue(z,"boneTexture",zn.boneTexture,He),ln.setValue(z,"boneTextureSize",zn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const tc=W.morphAttributes;if((tc.position!==void 0||tc.normal!==void 0||tc.color!==void 0&&we.isWebGL2===!0)&&_e.update(X,W,br),(fo||qe.receiveShadow!==X.receiveShadow)&&(qe.receiveShadow=X.receiveShadow,ln.setValue(z,"receiveShadow",X.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(wr.envMap.value=ye,wr.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),fo&&(ln.setValue(z,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&ut(wr,ec),ce&&G.fog===!0&&re.refreshFogUniforms(wr,ce),re.refreshMaterialUniforms(wr,G,O,Y,Ee),dl.upload(z,Ft(qe),wr,He)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(dl.upload(z,Ft(qe),wr,He),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ln.setValue(z,"center",X.center),ln.setValue(z,"modelViewMatrix",X.modelViewMatrix),ln.setValue(z,"normalMatrix",X.normalMatrix),ln.setValue(z,"modelMatrix",X.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const zn=G.uniformsGroups;for(let nc=0,Vm=zn.length;nc<Vm;nc++)if(we.isWebGL2){const Bh=zn[nc];Ie.update(Bh,br),Ie.bind(Bh,br)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return br}function ut(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Bn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,N,W){Be.get(w.texture).__webglTexture=N,Be.get(w.depthTexture).__webglTexture=W;const G=Be.get(w);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=W===void 0,G.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,N){const W=Be.get(w);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,W=0){E=w,y=N,A=W;let G=!0,X=null,ce=!1,Se=!1;if(w){const ye=Be.get(w);ye.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(z.FRAMEBUFFER,null),G=!1):ye.__webglFramebuffer===void 0?He.setupRenderTarget(w):ye.__hasExternalTextures&&He.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);const be=w.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(Se=!0);const ke=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[N])?X=ke[N][W]:X=ke[N],ce=!0):we.isWebGL2&&w.samples>0&&He.useMultisampledRTT(w)===!1?X=Be.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?X=ke[W]:X=ke,T.copy(w.viewport),F.copy(w.scissor),U=w.scissorTest}else T.copy(C).multiplyScalar(O).floor(),F.copy(I).multiplyScalar(O).floor(),U=q;if(Ae.bindFramebuffer(z.FRAMEBUFFER,X)&&we.drawBuffers&&G&&Ae.drawBuffers(w,X),Ae.viewport(T),Ae.scissor(F),Ae.setScissorTest(U),ce){const ye=Be.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,W)}else if(Se){const ye=Be.get(w.texture),be=N||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ye.__webglTexture,W||0,be)}P=-1},this.readRenderTargetPixels=function(w,N,W,G,X,ce,Se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Fe=Fe[Se]),Fe){Ae.bindFramebuffer(z.FRAMEBUFFER,Fe);try{const ye=w.texture,be=ye.format,ke=ye.type;if(be!==gi&&st.convert(be)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=ke===oa&&(me.has("EXT_color_buffer_half_float")||we.isWebGL2&&me.has("EXT_color_buffer_float"));if(ke!==vr&&st.convert(ke)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===hr&&(we.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-G&&W>=0&&W<=w.height-X&&z.readPixels(N,W,G,X,st.convert(be),st.convert(ke),ce)}finally{const ye=E!==null?Be.get(E).__webglFramebuffer:null;Ae.bindFramebuffer(z.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(w,N,W=0){const G=Math.pow(2,-W),X=Math.floor(N.image.width*G),ce=Math.floor(N.image.height*G);He.setTexture2D(N,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,w.x,w.y,X,ce),Ae.unbindTexture()},this.copyTextureToTexture=function(w,N,W,G=0){const X=N.image.width,ce=N.image.height,Se=st.convert(W.format),Fe=st.convert(W.type);He.setTexture2D(W,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment),N.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,G,w.x,w.y,X,ce,Se,Fe,N.image.data):N.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,G,w.x,w.y,N.mipmaps[0].width,N.mipmaps[0].height,Se,N.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,G,w.x,w.y,Se,Fe,N.image),G===0&&W.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(w,N,W,G,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=w.max.x-w.min.x+1,Se=w.max.y-w.min.y+1,Fe=w.max.z-w.min.z+1,ye=st.convert(G.format),be=st.convert(G.type);let ke;if(G.isData3DTexture)He.setTexture3D(G,0),ke=z.TEXTURE_3D;else if(G.isDataArrayTexture)He.setTexture2DArray(G,0),ke=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);const Xe=z.getParameter(z.UNPACK_ROW_LENGTH),yt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),kt=z.getParameter(z.UNPACK_SKIP_PIXELS),ht=z.getParameter(z.UNPACK_SKIP_ROWS),an=z.getParameter(z.UNPACK_SKIP_IMAGES),dt=W.isCompressedTexture?W.mipmaps[0]:W.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,dt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,dt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,w.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,w.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,w.min.z),W.isDataTexture||W.isData3DTexture?z.texSubImage3D(ke,X,N.x,N.y,N.z,ce,Se,Fe,ye,be,dt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(ke,X,N.x,N.y,N.z,ce,Se,Fe,ye,dt.data)):z.texSubImage3D(ke,X,N.x,N.y,N.z,ce,Se,Fe,ye,be,dt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Xe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,yt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,kt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ht),z.pixelStorei(z.UNPACK_SKIP_IMAGES,an),X===0&&G.generateMipmaps&&z.generateMipmap(ke),Ae.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?He.setTextureCube(w,0):w.isData3DTexture?He.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?He.setTexture2DArray(w,0):He.setTexture2D(w,0),Ae.unbindTexture()},this.resetState=function(){y=0,A=0,E=null,Ae.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ah?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===ql?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ht?ns:rm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ns?Ht:qi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ty extends Lh{}ty.prototype.isWebGL1Renderer=!0;class Dh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new rt(e),this.near=t,this.far=n}clone(){return new Dh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mm extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ym extends uo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xd=new H,Yd=new H,qd=new Gt,jc=new $l,Ja=new co;class Em extends Tn{constructor(e=new Cn,t=new ym){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Xd.fromBufferAttribute(t,i-1),Yd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Xd.distanceTo(Yd);e.setAttribute("lineDistance",new Fn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(i),Ja.radius+=s,e.ray.intersectsSphere(Ja)===!1)return;qd.copy(i).invert(),jc.copy(e.ray).applyMatrix4(qd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new H,u=new H,h=new H,f=new H,d=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,a.start),M=Math.min(_.count,a.start+a.count);for(let v=p,S=M-1;v<S;v+=d){const y=_.getX(v),A=_.getX(v+1);if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,A),jc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let v=p,S=M-1;v<S;v+=d){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),jc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const $d=new H,jd=new H;class Kd extends Em{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)$d.fromBufferAttribute(t,i),jd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$d.distanceTo(jd);e.setAttribute("lineDistance",new Fn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tm extends uo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zd=new Gt,zu=new $l,Qa=new co,el=new H;class Kc extends Tn{constructor(e=new Cn,t=new Tm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(i),Qa.radius+=s,e.ray.intersectsSphere(Qa)===!1)return;Zd.copy(i).invert(),zu.copy(e.ray).applyMatrix4(Zd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=f,g=d;_<g;_++){const m=c.getX(_);el.fromBufferAttribute(h,m),Jd(el,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=f,g=d;_<g;_++)el.fromBufferAttribute(h,_),Jd(el,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Jd(r,e,t,n,i,s,a){const o=zu.distanceSqToPoint(r);if(o<t){const l=new H;zu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Hu extends On{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Uh extends Cn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let _=0;const g=[],m=n/2;let p=0;M(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Fn(h,3)),this.setAttribute("normal",new Fn(f,3)),this.setAttribute("uv",new Fn(d,2));function M(){const S=new H,y=new H;let A=0;const E=(t-e)/n;for(let P=0;P<=s;P++){const x=[],T=P/s,F=T*(t-e)+e;for(let U=0;U<=i;U++){const $=U/i,L=$*l+o,k=Math.sin(L),Y=Math.cos(L);y.x=F*k,y.y=-T*n+m,y.z=F*Y,h.push(y.x,y.y,y.z),S.set(k,E,Y).normalize(),f.push(S.x,S.y,S.z),d.push($,1-T),x.push(_++)}g.push(x)}for(let P=0;P<i;P++)for(let x=0;x<s;x++){const T=g[x][P],F=g[x+1][P],U=g[x+1][P+1],$=g[x][P+1];u.push(T,F,$),u.push(F,U,$),A+=6}c.addGroup(p,A,0),p+=A}function v(S){const y=_,A=new ct,E=new H;let P=0;const x=S===!0?e:t,T=S===!0?1:-1;for(let U=1;U<=i;U++)h.push(0,m*T,0),f.push(0,T,0),d.push(.5,.5),_++;const F=_;for(let U=0;U<=i;U++){const L=U/i*l+o,k=Math.cos(L),Y=Math.sin(L);E.x=x*Y,E.y=m*T,E.z=x*k,h.push(E.x,E.y,E.z),f.push(0,T,0),A.x=k*.5+.5,A.y=Y*.5*T+.5,d.push(A.x,A.y),_++}for(let U=0;U<i;U++){const $=y+U,L=F+U;S===!0?u.push(L,L+1,$):u.push(L+1,L,$),P+=3}c.addGroup(p,P,S===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bm{constructor(e,t,n=0,i=1/0){this.ray=new $l(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Rh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Gu(e,this,n,t),n.sort(Qd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Gu(e[i],this,n,t);return n.sort(Qd),n}}function Qd(r,e){return r.distance-e.distance}function Gu(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)Gu(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);let xn,wm=0,Am=!1,Ih=!0;const ny=()=>Ih,iy=()=>Am=!0,ry=r=>xn?.scatter(r);async function Cm(r){const e=await fetch(r);if(!e.ok)throw new Error(`${r}: ${e.status}`);return new Uint8Array(await e.arrayBuffer())}async function sy(){const r=await Cm("assets/holo.wasm"),{instance:e}=await WebAssembly.instantiate(r,{});return xn=e.exports,r.length}async function oy(r){const e=new Int16Array((await Cm("assets/portrait.bin")).buffer),t=Math.min(r,e.length/5,xn.max_points()),n=xn.memory.buffer,i=new Float32Array(n,xn.home_ptr(),t*3),s=new Float32Array(n,xn.shade_ptr(),t),a=new Float32Array(n,xn.jaw_ptr(),t);for(let o=0;o<t;o++)i[o*3]=e[o*5]/1e4,i[o*3+1]=e[o*5+1]/1e4,i[o*3+2]=e[o*5+2]/1e4,s[o]=e[o*5+3]/1e4,a[o]=e[o*5+4]/1e4*.45;return xn.set_count(t),xn.scatter(3),wm=t}let Wr,ki,Xr,fr,zr,pl,ml,gl,_l,Hr;const vl=[];let Rm=!1;const ay=`
  attribute float shade; attribute float rnd; uniform float uTime, uSize, uRefl; varying float vS, vY, vR;
  void main(){ vec3 p = position; vY = p.y; vS = shade; vR = rnd;
    if (uRefl > .5) p.x += sin(p.y * 22. + uTime * 1.8) * .012;           // reflection ripples
    vec4 mv = modelViewMatrix * vec4(p, 1.);
    gl_PointSize = uSize * (.5 + shade * .6) * (.8 + rnd * .5) / -mv.z; gl_Position = projectionMatrix * mv; }`,ly=`
  uniform vec3 uColor; uniform float uTime, uOp, uRefl, uSpeak; varying float vS, vY, vR;
  void main(){ vec2 c = gl_PointCoord - .5; float d = length(c); if (d > .5) discard;
    float a = smoothstep(.5, .05, d);
    float scan = .66 + .34 * sin(vY * 170. - uTime * 9.);                  // scanlines
    float band = fract(uTime * .16) * 2.6 - 1.3;
    float sweep = exp(-pow((vY - band) * 9., 2.)) * 1.4;                   // bright band sweeping up
    float fl = .9 + .1 * sin(uTime * 61. + vR * 6.);                       // flicker
    vec3 col = uColor * (vS * 1.15 * scan * (1. + uSpeak * .25) + sweep) + vec3(.75) * (sweep * .2 + smoothstep(.9, 1.25, vS) * .4);
    float al = a * uOp * fl * (.45 + vS * .55);
    if (uRefl > .5) al *= .14 * clamp(1. - (vY + 1.) / 1.6, 0., 1.);
    gl_FragColor = vec4(col, al); }`;function cy(){const r=J("#gl"),e=yh().hex;Wr=new Lh({canvas:r,antialias:!1,powerPreference:"high-performance"}),Wr.setPixelRatio(Math.min(devicePixelRatio,1.75)),Wr.setClearColor(198148,1),ki=new Mm,ki.fog=new Dh(198148,5,14),Xr=new Yn(30,1,.05,60);const t=xn.max_points(),n=new Cn;ml=new An(new Float32Array(xn.memory.buffer,xn.pos_ptr(),t*3),3),ml.setUsage(O1),n.setAttribute("position",ml),n.setAttribute("shade",new An(new Float32Array(xn.memory.buffer,xn.shade_ptr(),t),1));const i=new Float32Array(t);for(let v=0;v<t;v++)i[v]=Math.random();n.setAttribute("rnd",new An(i,1)),n.setDrawRange(0,wm),n.boundingSphere=new co(new H,4);const s=v=>new Pi({uniforms:{uColor:{value:new rt(e)},uTime:{value:0},uSize:{value:10*Wr.getPixelRatio()},uOp:{value:1},uRefl:{value:v},uSpeak:{value:0}},vertexShader:ay,fragmentShader:ly,transparent:!0,depthWrite:!1,blending:Fr});zr=s(0),pl=s(1),fr=new Po,ki.add(fr);const a=new Kc(n,zr);a.frustumCulled=!1,fr.add(a);const o=new Kc(n,pl);o.frustumCulled=!1,o.scale.y=-1,o.position.y=-2,fr.add(o);const l=v=>new ym({color:new rt(e),transparent:!0,opacity:v,blending:Fr,depthWrite:!1}),c=(v,S,y,A=!1)=>{const E=new Cn,P=[];for(let T=0;T<=S;T++){const F=T/S*Math.PI*2;P.push(Math.cos(F)*v,0,Math.sin(F)*v)}E.setAttribute("position",new Fn(P,3));const x=A?new Kd(E,l(y)):new Em(E,l(y));x.position.y=-1,ki.add(x),vl.push(x)};c(.72,96,.7),c(.88,48,.35,!0),c(1.15,180,.18),c(1.7,240,.08);const u=new Cn,h=[];for(let v=0;v<120;v++){const S=v/120*Math.PI*2,y=v%10?.04:.1;h.push(Math.cos(S)*1.3,0,Math.sin(S)*1.3,Math.cos(S)*(1.3+y),0,Math.sin(S)*(1.3+y))}u.setAttribute("position",new Fn(h,3));const f=new Kd(u,l(.35));f.position.y=-1,ki.add(f),vl.push(f),_l=new oi(new Uh(1.05,.6,2.15,64,1,!0),new Pi({uniforms:{uColor:zr.uniforms.uColor,uTime:zr.uniforms.uTime},vertexShader:"varying vec2 vUv; varying vec3 vN; void main(){ vUv = uv; vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:"uniform vec3 uColor; uniform float uTime; varying vec2 vUv; varying vec3 vN; void main(){ float edge = pow(1. - abs(vN.z), 2.); float a = (1. - vUv.y) * (1. - vUv.y) * .045 + edge * (1. - vUv.y) * .045; a *= .85 + .15 * sin(vUv.x * 80. + uTime * 2.); gl_FragColor = vec4(uColor, a); }",transparent:!0,depthWrite:!1,side:Ei,blending:Fr})),_l.position.y=.06,ki.add(_l);const d=document.createElement("canvas");d.width=d.height=128;const _=d.getContext("2d"),g=_.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,"rgba(255,255,255,.9)"),g.addColorStop(.25,"rgba(255,255,255,.25)"),g.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=g,_.fillRect(0,0,128,128),Hr=new oi(new oo(2.6,2.6),new Kl({map:new Hu(d),color:new rt(e),transparent:!0,opacity:.3,depthWrite:!1,blending:Fr})),Hr.rotation.x=-Math.PI/2,Hr.position.y=-1.01,ki.add(Hr);const m=$u?300:700,p=new Float32Array(m*3);for(let v=0;v<m;v++)p[v*3]=(Math.random()-.5)*9,p[v*3+1]=Math.random()*5-1.5,p[v*3+2]=(Math.random()-.5)*7-1;const M=new Cn;M.setAttribute("position",new An(p,3)),gl=new Kc(M,new Tm({color:new rt(e),size:.012,transparent:!0,opacity:.5,blending:Fr,depthWrite:!1})),ki.add(gl),C_(v=>{const S=new rt(v);zr.uniforms.uColor.value.copy(S),pl.uniforms.uColor.value.copy(S),vl.forEach(y=>y.material.color.copy(S)),Hr.material.color.copy(S),gl.material.color.copy(S)}),addEventListener("resize",ep),ep(),new IntersectionObserver(([v])=>Ih=v.isIntersecting).observe(J("#hero")),Rm=!0}function ep(){if(!Wr)return;const r=J("#hero").getBoundingClientRect();Wr.setSize(r.width,r.height,!1),Xr.aspect=r.width/r.height,Xr.updateProjectionMatrix()}const tp=new bm,uy=new ir(new H(0,0,1),0),tl=new H,np=new ct;let Zc=4,Vu=0,Ds=0;const er={x:0,y:0};function Pm(r){const e=Math.min((r-Vu)/1e3,.05);if(Vu=r,Ds+=e,er.x+=(mn.nx-er.x)*.06,er.y+=(mn.ny-er.y)*.06,U_(Ds),Zc+=((Am?70:4)-Zc)*.02,Rm&&Ih){const t=J("#hero").getBoundingClientRect(),n=Math.min(1,Math.max(0,-t.top/t.height)),i=innerWidth<760,s=i?0:-.15;Xr.position.set(er.x*.2,.1+n*1.6-er.y*.12,(i?5.6:4.5)+n*3),Xr.lookAt(0,(i?.55:.02)-n*.6,0),fr.position.x=s,fr.rotation.y=er.x*.28+Math.sin(Ds*.3)*.05,fr.rotation.x=er.y*.06;let a=0,o=0,l=0;mn.inside&&(np.set(mn.x/innerWidth*2-1,-((mn.y-t.top)/t.height)*2+1),tp.setFromCamera(np,Xr),tp.ray.intersectPlane(uy,tl)&&(fr.worldToLocal(tl),o=tl.x,l=tl.y,a=.22)),xn.step(e,Ds,wt.mouth,o,l,a,.1+wt.glitch*.8+(wt.speaking?.12:0),Zc),ml.needsUpdate=!0,zr.uniforms.uTime.value=Ds,pl.uniforms.uTime.value=Ds,zr.uniforms.uSpeak.value=wt.mouth,Hr.material.opacity=.3*(1+wt.mouth*.5),Hr.position.x=s,_l.position.x=s,vl.forEach((u,h)=>{u.rotation.y+=e*(h%2?-.12:.18)*(1+h*.2),u.position.x=s});const c=gl.geometry.attributes.position;for(let u=0;u<c.count;u++){let h=c.getY(u)+e*.05;h>3.5&&(h=-1.5),c.setY(u,h)}c.needsUpdate=!0,Wr.render(ki,Xr)}requestAnimationFrame(Pm)}function hy(){requestAnimationFrame(r=>{Vu=r,Pm(r)})}let Nh=Er,Lm=!1,Dm=!1,ip=!1;const fy="SHA256:"+Array.from(crypto.getRandomValues(new Uint8Array(24)),r=>"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[r&63]).join(""),dy=new Date().toLocaleString("en-GB",{timeZone:"Africa/Lagos",weekday:"short",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),Jc=[["$ ","ssh guest@lagos-01",1],["",`<span class="d">The authenticity of host 'lagos-01' can't be established.
ED25519 key fingerprint is ${fy}.</span>`,0],["","Are you sure you want to continue connecting (yes/no)? ",0,"yes"],["",`<span class="d">Warning: Permanently added 'lagos-01' (ED25519) to the list of known hosts.</span>`,0],["","guest@lagos-01's password: ",0,"••••••••"],["",`<span class="d">Last login: ${dy} WAT</span>`,0],["",`
<span class="inv">PERSONNEL RECORD · MUJEEB</span>`,0],["","> loading holo.wasm ............ ",0,"@wasm"],["","> decoding portrait ............ ",0,"@pts"],["","> warming projector ............ ",0,"ok"]],Lo=r=>new Promise(e=>setTimeout(e,Nh?0:r));async function rp(r,e){for(let t=0;t<e.length;t++){if(Nh){r.insertAdjacentText("beforeend",e.slice(t));return}r.insertAdjacentText("beforeend",e[t]),Math.random()<.5&&In("key"),await Lo(12+Math.random()*30)}}function py(r){J("#pct").textContent=String(Math.round(r)).padStart(3,"0")+"%",J("#bootbar").style.width=r+"%"}async function my(){const r=J("#bootLog"),e=document.createElement("span");e.className="caret";let t=0;const n=sy().then(i=>t=i);for(let i=0;i<Jc.length;i++){const[s,a,o,l]=Jc[i],c=document.createElement("div");if(r.appendChild(c),c.appendChild(e),s&&c.insertAdjacentText("afterbegin",s),o?(e.remove(),await rp(c,a),c.appendChild(e),await Lo(160)):e.insertAdjacentHTML("beforebegin",a),l){await Lo(240);let u=l;if(u==="@wasm"&&(await n,u=`ok (${(t/1024).toFixed(1)} KB, rust)`),u==="@pts"){await n;const h=performance.now();u=`ok (${(await oy($u?26e3:46e3)).toLocaleString()} pts, ${Math.max(1,Math.round(performance.now()-h))} ms)`}e.remove(),await rp(c,u),c.appendChild(e)}py(Math.min(100,(i+1)/Jc.length*100)),await Lo(i<2?110:80)}e.remove(),r.insertAdjacentHTML("beforeend",`
<span class="inv">CONNECTED</span> <span class="d">press any key, or wait…</span>`),await Lo(650),gy()}function gy(){if(!ip){ip=Lm=!0;try{cy()}catch(r){console.warn("WebGL unavailable",r)}ry(4.2),$e.timeline({defaults:{ease:"power3.inOut"}}).to("#boot",{clipPath:"ellipse(160% 0% at 50% 0%)",duration:Er?.01:1.1}).set("#boot",{display:"none"}).fromTo("#crtline",{opacity:1,scaleX:0},{scaleX:1,duration:.25,ease:"power2.out"},"-=.55").to("#crtline",{scaleY:400,opacity:0,duration:.4,ease:"power2.in"}).add(()=>{document.body.classList.remove("booting"),Xl(),iy(),Ge.refresh(),In("static")},"-=.5").from(".giant .ln > span",{yPercent:110,duration:1.2,ease:"expo.out"},"-=.35").from(".role .ln > span",{yPercent:110,duration:1,ease:"expo.out"},"-=1").from(".stamp > *, .holotape > *, .hero-meta",{y:14,opacity:0,stagger:.06,duration:.7,ease:"power2.out"},"-=.9").add(()=>{Dm&&setTimeout(()=>Th("intro"),1400)}),hy()}}function _y(){const r=()=>{da(),Dm=!0,Lm||(Nh=!0)};addEventListener("keydown",r,{once:!0}),J("#boot").addEventListener("pointerdown",r,{once:!0}),J("#skip").addEventListener("click",e=>{e.stopPropagation(),r()})}const vy=new Intl.DateTimeFormat("en-GB",{timeZone:"Africa/Lagos",hour:"2-digit",minute:"2-digit"});function sp(){const r=vy.format(new Date);J("#clock").textContent=r,J("#bootclock").textContent="lagos "+r;const e=new Date,t=Math.floor((+e-+new Date(e.getFullYear(),0,0))/864e5);J("#dayline").textContent=`${e.toLocaleDateString("en-GB",{weekday:"short",month:"short",day:"2-digit"})} · day ${String(t).padStart(3,"0")}`}function xy(){const e=document.createElement("canvas");e.width=e.height=180;const t=e.getContext("2d"),n=t.createImageData(180,180),i=n.data;for(let o=0;o<i.length;o+=4){const l=Math.random()*255;i[o]=i[o+1]=i[o+2]=l,i[o+3]=255}t.putImageData(n,0,0);const s=J("#grain");if(s.style.backgroundImage=`url(${e.toDataURL()})`,Er)return;let a=0;(function o(){ny()&&a++%3===0&&(s.style.transform=`translate(${Math.random()*180|0}px, ${Math.random()*180|0}px)`),requestAnimationFrame(o)})()}function Sy(){sp(),setInterval(sp,15e3),xy(),R_(),I_(),_y()}let Yr=null,My=null,Um=!1;function yy(r){return My??=new Promise(e=>{const t=document.createElement("div");t.id="ytMusic",t.setAttribute("aria-hidden","true"),t.style.cssText="position:fixed;width:1px;height:1px;left:-9999px;top:0;opacity:0;pointer-events:none",document.body.appendChild(t);const n=window;n.onYouTubeIframeAPIReady=()=>{new n.YT.Player(t,{width:1,height:1,videoId:r,playerVars:{autoplay:1,loop:1,playlist:r,controls:0,playsinline:1},events:{onReady:s=>{Yr=s.target,Um&&Yr.mute(),e(Yr)}}})};const i=document.createElement("script");i.src="https://www.youtube.com/iframe_api",document.head.appendChild(i)})}const Wu={play(r){yy(r).then(e=>e.playVideo())},pause(){Yr?.pauseVideo()},mute(r){Um=r,Yr&&(r?Yr.mute():Yr.unMute())}},Ey=()=>Li("section[data-sec]");let Qc="";function Ty(){const r=innerHeight/2;let e=Qc;for(const t of Ey()){const n=t.getBoundingClientRect();if(n.top<=r&&n.bottom>r){e=t.dataset.sec;break}}e!==Qc&&(Qc=e,Li(".nav ul a").forEach(t=>t.classList.toggle("on",t.dataset.sec===e)))}function by(){Li('a[href^="#"]').forEach(r=>r.addEventListener("click",e=>{const t=document.querySelector(r.getAttribute("href"));t&&(e.preventDefault(),Sh(t,1.6))}))}function wy(){const r=J("#sndBtn");r.addEventListener("click",()=>{nr.on=!nr.on,Wu.mute(!nr.on),r.textContent=nr.on?"sound on":"sound off",r.setAttribute("aria-pressed",String(nr.on)),nr.on||wt.el?.pause()})}function Ay(){J(".nav .right").insertAdjacentHTML("afterbegin",'<button class="pill menuBtn" id="menuBtn" type="button" aria-expanded="false" aria-controls="mmenu">index</button>');const r=J("#mmenu"),e=J("#menuBtn"),t="calc(100% - 40px) 34px";let n=!1;const i=s=>{n=s,e.setAttribute("aria-expanded",String(s)),e.textContent=s?"close":"index",r.setAttribute("aria-hidden",String(!s)),s?(r.classList.add("open"),xh(),$e.fromTo(r,{clipPath:`circle(0% at ${t})`},{clipPath:`circle(150% at ${t})`,duration:.8,ease:"expo.inOut"}),$e.fromTo("#mmenu a",{y:40,opacity:0},{y:0,opacity:1,stagger:.05,duration:.7,ease:"expo.out",delay:.2})):(Xl(),$e.to(r,{clipPath:`circle(0% at ${t})`,duration:.6,ease:"expo.inOut",onComplete:()=>r.classList.remove("open")}))};e.addEventListener("click",()=>i(!n)),r.querySelectorAll("a").forEach(s=>s.addEventListener("click",a=>{a.preventDefault(),a.stopImmediatePropagation();const o=J(s.getAttribute("href"));i(!1),setTimeout(()=>Sh(o,1.4),350)}))}function Cy(){Ay(),by(),wy(),$e.to("#paper",{borderRadius:"0% 0% 0 0 / 0vw 0vw 0 0",ease:"none",scrollTrigger:{trigger:"#paper",start:"top bottom",end:"top 20%",scrub:!0}})}const op="█▓▒░<>/\\[]{}#$%&01=+*";function Bl(r,e,t=700){const n=performance.now();(function i(s){const a=Math.min(1,(s-n)/t);r.textContent=[...e].map((o,l)=>o===" "?" ":l/e.length<a?o:op[Math.random()*op.length|0]).join(""),a<1&&requestAnimationFrame(i)})(n)}function Ry(r){r.classList.remove("split"),r.dataset.src?r.innerHTML=r.dataset.src:r.dataset.src=r.innerHTML;for(const e of[...r.children]){const t=[];for(const o of[...e.childNodes]){if(o.nodeType!==Node.TEXT_NODE){t.push(o);continue}for(const l of o.textContent.split(/(\s+)/))if(l)if(/^\s+$/.test(l))t.push(document.createTextNode(" "));else{const c=document.createElement("span");c.textContent=l,t.push(c)}}e.textContent="",t.forEach(o=>e.appendChild(o));const n=[];let i=null,s=null;const a=parseFloat(getComputedStyle(e).fontSize)*.5;for(const o of t){if(o.nodeType===Node.TEXT_NODE){s?.push(o);continue}const l=o.getBoundingClientRect(),c=l.top+l.height/2;(i===null||Math.abs(c-i)>a)&&(i=c,s=[],n.push(s)),s.push(o)}e.textContent="";for(const o of n){const l=document.createElement("span"),c=document.createElement("span");for(l.className="lnm";o.length&&o[o.length-1].nodeType===Node.TEXT_NODE;)o.pop();o.forEach(u=>c.appendChild(u)),l.appendChild(c),e.appendChild(l)}}return r.classList.add("split"),[...r.querySelectorAll(".lnm > span")]}const Py={chipper:{n:"Chipper Cash",m:"C",c:"#3d2fd1"},maxng:{n:"Maxng",m:"Mx",c:"#0f6b5c"},casha:{n:"Casha!",m:"C!",c:"#ff5a1f"},tpp:{n:"The People Practice",m:"TPP",c:"#1d1f22"},funaab:{n:"FUNAAB",m:"FU",c:"#0f7a3d"},decagon:{n:"Decagon",m:"D",c:"#0b1f3a"},anthropic:{n:"Anthropic",m:"A\\",c:"#d97757"},scrumstudy:{n:"SCRUMstudy",m:"S",c:"#1c64b4"},nysc:{n:"NYSC",m:"NY",c:"#1f6b2e"},paper:{n:"Publication",m:"§",c:"#2f5bff"}};function Jl(r,e){const t=Py[r]??{m:"?",c:"#0d100e",n:r};return`<span class="logo" style="--c:${t.c}" title="${t.n}"><b>${t.m}</b><img src="logos/${r}.png" alt="${t.n} logo" onerror="this.remove()" loading="lazy"></span>`}function Ly(r){const e={};return Promise.all(r.map(t=>new Promise(n=>{const i=new Image;i.onload=()=>{e[t]=i,n()},i.onerror=()=>n(),i.src=`logos/${t}.png`}))).then(()=>e)}const ap=r=>r.map((e,t)=>`${e}${t<r.length-1?'<span class="sep">•</span>':""}`);function Dy(){J("#ckCos").innerHTML="<p>"+ap(P_.map(([r,e,t])=>`${Jl(r)}${e}<small>${t}</small>`)).map(r=>`<span class="co">${r}</span>`).join(" ")+"</p>",J("#ckSkills").innerHTML="<p>"+ap(L_).map(r=>`<span class="it">${r}</span>`).join(" ")+"</p>"}function Uy(){const r=J("#ckName");r.innerHTML=[...r.textContent].map(e=>`<span class="ch">${e}</span>`).join(""),$e.fromTo(".ck-card img",{yPercent:-8,scale:1.12},{yPercent:8,scale:1,ease:"none",scrollTrigger:{trigger:".ck-card",start:"top bottom",end:"bottom top",scrub:!0}}),$e.fromTo(".ck-card",{clipPath:"inset(14% 8% 0% 8% round 40px)"},{clipPath:"inset(0% 0% 0% 0% round 22px)",ease:"none",scrollTrigger:{trigger:".ck-card",start:"top 95%",end:"top 30%",scrub:!0}}),$e.fromTo("#ckName",{yPercent:55},{yPercent:-6,ease:"none",scrollTrigger:{trigger:".ck-card",start:"center bottom",end:"bottom 30%",scrub:!0}}),$e.fromTo("#ckName .ch",{yPercent:100},{yPercent:0,stagger:.05,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:"#ckName",start:"top 92%"}}),$e.from(".ck-tag",{opacity:0,y:16,duration:1,ease:"power3.out",scrollTrigger:{trigger:".ck-tag",start:"top 92%"}})}function Iy(){let r=!1;const e=()=>{for(const n of Li(".ck-row")){const i=Ry(n.querySelector(".ck-lines")),s=n.querySelector(".ck-rule"),a=[n.querySelector(".ck-idx"),n.querySelector(".ck-k")];r||($e.set(s,{scaleX:0}),$e.set(a,{opacity:0}),Ge.create({trigger:n,start:"top 82%",once:!0,onEnter:()=>{$e.to(s,{scaleX:1,duration:1.4,ease:"expo.inOut"}),$e.to(a,{opacity:1,duration:.8,delay:.3}),$e.fromTo(n.querySelectorAll(".lnm > span"),{yPercent:105},{yPercent:0,stagger:.08,duration:1.1,ease:"expo.out",delay:.35}),n.dataset.shown="1"}})),n.dataset.shown||$e.set(i,{yPercent:105})}r=!0};document.fonts.ready.then(e);let t=innerWidth;addEventListener("resize",()=>{Math.abs(innerWidth-t)<40||(t=innerWidth,e())})}function Ny(){Dy(),Uy(),Iy()}const is=[{co:"Chipper Cash",logo:"chipper",sub:"01/2025 – now",role:"Senior Software Engineer",area:"Card issuing & payments",k:"card + payments infrastructure",body:["Card and payment services that are safe to retry","Scheduled billing that charges exactly once","Internal tools for disputes and chargebacks","Ops tooling for card operations at scale"],tint:"#eef1ec"},{co:"Maxng",logo:"maxng",sub:"12/2023 – 2025",role:"Senior Software Engineer III",area:"Lagos · team lead",k:"led a fintech build",body:["NestJS, TypeScript, PostgreSQL","Drove TDD adoption: 30% fewer bugs","Reliability work on Postgres and MongoDB","20% lift in customer satisfaction"],tint:"#ece9e5"},{co:"Casha!",logo:"casha",sub:"10/2021 – 11/2023",role:"Backend Engineer",area:"Lagos · fintech",k:"backend services",body:["Node.js, TypeScript, NestJS, MongoDB","SQL and NoSQL data stores","Unit, integration and e2e testing","Presented findings to senior execs"],tint:"#e6eaee"},{co:"The People Practice",logo:"tpp",sub:"10/2018 – 08/2021",role:"Full Stack Engineer",area:"Lagos",k:"full-stack product work",body:["Built changes to design specifications","Shipped application modules","Internal tools for team communication"],tint:"#ebeee6"}],$s=[{t:"Exactly-once billing",tags:"billing · idempotency · scheduled jobs",f:"billing",p:"A scheduled charge should never run twice, even when a job retries across a boundary like midnight. Keying each charge to its account and billing period turns a repeat run into a safe no-op."},{t:"Five workers, one key",tags:"redis · distributed locks · concurrency",f:"lock",p:"When several workers race for the same resource, only one should do the work. A short-lived lock lets one worker win while the others wait and reuse its result."},{t:"Bulk operations, safely",tags:"ops tooling · validation · batching",f:"revoke",p:"Operators often work from messy pasted lists. Good tooling cleans and validates every entry, flags what doesn't belong and runs the rest in small batches behind a confirmation step."},{t:"Deadline-aware queues",tags:"queues · internal tools · prioritisation",f:"disputes",p:"Some work has hard deadlines. A queue sorted by time left, with everything needed to act in one place, keeps the most urgent item on top."}],Oy=[["TypeScript",0],["Go",0],["Python",0],["Node.js",0],["NestJS",0],["Next.js",0],["PostgreSQL",0],["Redis",0],["MongoDB",0],["GraphQL",0],["React",0],["Docker",0],["AWS",0],["pgvector",0],["LangChain",0],["Card issuing",1],["Chargebacks",1],["Settlement",1],["Billing jobs",1],["Idempotency",1],["TDD",1]];let lp=-1;function Fy(){let r="";for(let e=0;e<180;e++){const t=e/180*Math.PI*2,n=e%15===0,i=n?78:84,s=90;r+=`<line x1="${(Math.cos(t)*i).toFixed(2)}" y1="${(Math.sin(t)*i).toFixed(2)}" x2="${(Math.cos(t)*s).toFixed(2)}" y2="${(Math.sin(t)*s).toFixed(2)}" stroke="${n?"var(--ink)":"#b9beb6"}" stroke-width="${n?1.4:.45}" stroke-linecap="round"/>`}J("#ticks").innerHTML=r}function cp(r){const e=-Math.PI/2,t=e+Math.max(.001,r)*Math.PI*2,n=96;return`M ${Math.cos(e)*n} ${Math.sin(e)*n} A ${n} ${n} 0 ${r>.5?1:0} 1 ${Math.cos(t)*n} ${Math.sin(t)*n}`}function up(r){if(r===lp)return;lp=r;const e=is[r];Bl(J("#lgCo"),e.co),Bl(J("#lgRole"),e.role,500),J("#lgLogo").innerHTML=Jl(e.logo),J("#lgSub").textContent=e.sub,J("#lgArea").textContent=e.area,J("#lgCount").textContent=`0${r+1} / 0${is.length}`,J("#lgScreen").innerHTML=`<span class="k">${e.k}</span><ul>${e.body.map(t=>`<li>${t}</li>`).join("")}</ul>`,$e.fromTo("#lgScreen > *",{y:12,opacity:0},{y:0,opacity:1,stagger:.05,duration:.5,ease:"power2.out"}),J("#logs").style.setProperty("--tint",e.tint)}function ky(){const r=J("#logs .toggle");r.innerHTML='<button type="button" class="on" data-v="latest">latest</button><button type="button" data-v="index">index</button>',J("#logs").insertAdjacentHTML("beforeend",`<div id="logIndex" aria-hidden="true">${is.map((i,s)=>`<button type="button" class="li-row" data-i="${s}">${Jl(i.logo)}<b>${i.co}</b><span>${i.role} · ${i.area}</span><i>${i.sub}</i></button>`).join("")}</div>`);const e=J("#logIndex"),t=[...r.children],n=i=>{t.forEach(a=>a.classList.toggle("on",a.dataset.v===i));const s=i==="index";e.setAttribute("aria-hidden",String(!s)),s?(e.classList.add("open"),$e.fromTo(e,{opacity:0},{opacity:1,duration:.35}),$e.fromTo(".li-row",{y:30,opacity:0},{y:0,opacity:1,stagger:.06,duration:.7,ease:"expo.out"})):$e.to(e,{opacity:0,duration:.25,onComplete:()=>e.classList.remove("open")})};t.forEach(i=>i.addEventListener("click",()=>n(i.dataset.v))),e.addEventListener("click",i=>{const s=i.target.closest(".li-row");s&&(n("latest"),Y0(J("#logs"),(+s.dataset.i+.5)/is.length,1.1))})}function By(){J("#lgCo").parentElement.insertAdjacentHTML("afterbegin",'<span class="lg-logo" id="lgLogo"></span>'),Fy(),up(0),J("#arc").setAttribute("d",cp(.02)),Ge.create({trigger:"#logs",start:"top top",end:"+="+is.length*70+"%",pin:!0,scrub:!0,onUpdate:r=>{const e=r.progress;J("#ticks").setAttribute("transform",`rotate(${e*150})`),J("#arc").setAttribute("d",cp(.02+e*.98)),up(Math.min(is.length-1,Math.floor(e*is.length)))}}),ky()}const _i=r=>`rgba(236,240,236,${r})`,hp=r=>r<0?0:r>1?1:1-Math.pow(1-r,3);function Ct(r,e,t,n,i,s=15,a="left"){r.fillStyle=_i(i),r.font=`${s}px VT323, monospace`,r.textAlign=a,r.textBaseline="middle",r.fillText(e,t,n)}function la(r,e,t,n,i,s,a=0){r.strokeStyle=_i(s),r.lineWidth=1,r.beginPath(),r.roundRect?r.roundRect(e,t,n,i,4):r.rect(e,t,n,i),a&&(r.fillStyle=_i(a),r.fill()),r.stroke()}function zy(r,e,t,n){const i=n%7,s=e*.46;r.setLineDash([3,5]),r.strokeStyle=_i(.3),r.beginPath(),r.moveTo(s,34),r.lineTo(s,t-16),r.stroke(),r.setLineDash([]),Ct(r,"OCT 31 23:59:58",s-10,22,.5,15,"right"),Ct(r,"NOV 01 00:00:01",s+10,22,.5);const a=e-18-e*.3;la(r,a,t/2-46,e*.3,92,.5),Ct(r,"LEDGER.CHARGES",a+10,t/2-30,.5),[{y:t*.42,s:.3,l:"RUN #1"},{y:t*.72,s:2.6,l:"RUN #2 RETRY"}].forEach((o,l)=>{const c=hp((i-o.s)/1.5),u=16,h=a-130,f=u+(h-u)*c,d=l===1&&i>o.s+1.5,_=d?h-hp((i-o.s-1.6)/.9)*110:f;la(r,_,o.y-13,116,26,d?.4:.9,d?0:.1),Ct(r,o.l,_+58,o.y,d?.45:1,15,"center"),c>=1&&l===0&&(Ct(r,"charge:acct_7f3a:2026-10",a+10,t/2-4,1),Ct(r,"OK  CHARGED  N1,000.00",a+10,t/2+18,.8)),d&&Ct(r,"409 KEY EXISTS · SKIPPED",h+110,o.y+28,Math.sin(n*12)>0?1:.5,15,"right")})}function Hy(r,e,t,n){const i=e*.64,s=t/2,a=5,o=1.8,l=Math.floor(n/o)%a,c=n%o/o;la(r,i-76,s-38,152,76,.8,.06),Ct(r,"REDIS",i,s-20,.55,15,"center"),Ct(r,"lock:resource",i,s,1,15,"center"),Ct(r,"ttl 5s",i,s+20,.7,15,"center");for(let u=0;u<a;u++){const h=30+u*((t-60)/(a-1)),f=30,d=u===l;r.beginPath(),r.arc(f,h,9,0,7),r.fillStyle=_i(d?1:.06),r.fill(),r.strokeStyle=_i(d?1:.4),r.stroke(),Ct(r,"W"+(u+1),f+16,h,d?1:.5),r.strokeStyle=_i(d?.9:.18),r.setLineDash(d?[]:[3,6]),r.beginPath(),r.moveTo(f+40,h),r.quadraticCurveTo(i-120,h,i-78,s),r.stroke(),r.setLineDash([]),Ct(r,d?"OK  HOLDS 5s":"nil retry",e-10,h,d?1:.35,15,"right")}r.strokeStyle=_i(1),r.lineWidth=2,r.beginPath(),r.arc(i,s,52,-Math.PI/2,-Math.PI/2+Math.PI*2*(1-c)),r.stroke(),r.lineWidth=1}const fp=Array.from({length:36},(r,e)=>{const t=crypto.randomUUID?crypto.randomUUID():"3f2a9c1e-77b0-4c2d-9e51-0b6d3a1f8e"+(10+e),n=e%7;return n===3?{s:"item-"+(1e3+e),ok:!1}:n===5?{s:"  "+t.toUpperCase()+"\\r",ok:!0}:{s:t+(n===1?" \\r\\n":""),ok:!0}});function Gy(r,e,t,n){const s=(t-40)/7,a=n*1.1,o=Math.floor(a),l=a-o;Ct(r,"PASTED INPUT",14,18,.45),Ct(r,"NORMALISED",e*.46,18,.45);for(let g=-1;g<7;g++){const m=fp[(o+g+360)%fp.length],p=40+(g+1-l)*s;if(p<32||p>t-6)continue;Ct(r,m.s.slice(0,24)+(m.s.length>24?"…":""),14,p,.55);const M=m.s.replace(/\\r|\\n/g,"").trim().toLowerCase();Ct(r,m.ok?M.slice(0,16)+"…":"X NOT A UUID",e*.46,p,m.ok?1:Math.sin(n*10)>0?.9:.4)}const c=Math.floor(n*.95),u=c%25,h=Math.floor(c/25),f=96,d=e-f-14,_=t/2-44;la(r,d,_,f,88,.8),r.fillStyle=_i(.18),r.fillRect(d+1,_+87-86*u/25,f-2,86*u/25),Ct(r,u+"/25",d+f/2,_+34,1,22,"center"),Ct(r,"BATCH #"+(h+1),d+f/2,_+60,.6,15,"center"),u<2&&h&&Ct(r,"SENT x25",d+f/2,_+106,1,15,"center")}const Vy=["review","follow-up","approval","reconcile","report","handover"],dp=Vy.map((r,e)=>({r,id:"task_"+(14864+e*917).toString(16),due:20+e*31+e%2*17,left:0,y:void 0}));function Wy(r,e,t,n){dp.forEach(a=>{a.left=a.due-n*9%200,a.left<2&&(a.left+=200)});const i=[...dp].sort((a,o)=>a.left-o.left);i.forEach((a,o)=>a.y=a.y===void 0?o:a.y+(o-a.y)*.12);const s=(t-36)/5.4;Ct(r,"DEADLINE-AWARE QUEUE",14,16,.45);for(const a of i){const o=32+a.y*s;if(o>t-8)continue;const l=a.left<48,c=o+(s-7)/2;la(r,10,o,e-20,s-7,l?.9:.25,l?.08:0),Ct(r,a.id,22,c,1),Ct(r,a.r,e*.3,c,.55);const u=e*.18,h=Math.min(a.left/200,1);r.fillStyle=_i(.12),r.fillRect(e-70-u,c-2,u,4),r.fillStyle=_i(l?1:.7),r.fillRect(e-70-u,c-2,u*h,4),Ct(r,Math.round(a.left)+"h",e-22,c,l?Math.sin(n*8)>0?1:.5:.7,15,"right")}}const Xy={billing:zy,lock:Hy,revoke:Gy,disputes:Wy};let Do=0,Im=[];function pp(r){const e=Math.min(innerHeight*.64,560),t=innerWidth<900?e*.42:e*.52;Im.forEach((n,i)=>{const s=i-r,a=Math.abs(s);n.style.transform=`translateY(${s*t-30}px)`,n.style.filter=`blur(${Math.min(a*7,12).toFixed(1)}px)`,n.style.opacity=Math.max(0,1-a*.55).toFixed(3)}),Do=Math.round(r),[...J("#caseDots").children].forEach((n,i)=>n.classList.toggle("on",i===Do)),J("#caseN").textContent=`0${Do+1}/0${$s.length}`,J("#caseLab").textContent=`replay · ${$s[Do].f}.log`}function Yy(r){const e=Math.min(devicePixelRatio,2),t=r.clientWidth,n=r.clientHeight;r.width!==Math.round(t*e)&&(r.width=Math.round(t*e),r.height=Math.round(n*e));const i=r.getContext("2d");return i.setTransform(e,0,0,e,0,0),i.clearRect(0,0,t,n),[i,t,n]}function Nm(r){const[e,t,n]=Yy(J("#caseCv"));Xy[$s[Do].f](e,t,n,r)}const qy=()=>{const r=J("#cases").getBoundingClientRect();return r.bottom>0&&r.top<innerHeight};function $y(){const r=J("#caseList"),e=J("#caseDots");for(const t of $s)r.insertAdjacentHTML("beforeend",`<article class="citem"><h3>${t.t}</h3><div class="tags">${t.tags}</div><p>${t.p}</p></article>`),e.appendChild(document.createElement("i"));Im=[...r.children],pp(0),Ge.create({trigger:"#cases",start:"top top",end:"+="+$s.length*70+"%",pin:!0,scrub:!0,onUpdate:t=>pp(t.progress*($s.length-1))}),Nm(2)}const jy={path:"M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"},Ky={path:"M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"},Zy={path:"M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-3.378L2.953 6.777v10.448l9.049 5.224 9.047-5.224V6.777zm0 1.601 7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0 6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z"},Jy={path:"M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27 3.432-3.432a2.284 2.284 0 0 1 3.277 0 2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273 3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432-3.271-3.272-3.433 3.433a2.284 2.284 0 0 1-3.277 0 2.28 2.28 0 0 1 0-3.276L12 12z"},Qy={path:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},eE={path:"M14.131.047c-.173 0-.334.037-.483.087.316.21.49.49.576.806.007.043.019.074.025.117a.681.681 0 0 1 .013.112c.024.545-.143.614-.26.936-.18.415-.13.861.086 1.22a.74.74 0 0 0 .074.137c-.235-1.568 1.073-1.803 1.314-2.293.019-.428-.334-.713-.613-.911a1.37 1.37 0 0 0-.732-.21zM16.102.4c-.024.143-.006.106-.012.18-.006.05-.006.112-.012.161-.013.05-.025.1-.044.149-.012.05-.03.1-.05.149l-.067.142c-.02.025-.031.05-.05.075l-.037.055a2.152 2.152 0 0 1-.093.124c-.037.038-.068.081-.112.112v.006c-.037.031-.074.068-.118.1-.13.099-.278.173-.415.266-.043.03-.087.056-.124.093a.906.906 0 0 0-.118.099c-.043.037-.074.074-.111.118-.031.037-.068.08-.093.124a1.582 1.582 0 0 0-.087.13c-.025.05-.043.093-.068.142-.019.05-.037.093-.05.143a2.007 2.007 0 0 0-.043.155c-.006.025-.006.056-.012.08-.007.025-.007.05-.013.075 0 .05-.006.105-.006.155 0 .037 0 .074.006.111 0 .05.006.1.019.155.006.05.018.1.03.15.02.049.032.098.05.148.013.03.031.062.044.087l-1.426-.552c-.241-.068-.477-.13-.719-.186l-.39-.093c-.372-.074-.75-.13-1.128-.167-.013 0-.019-.006-.031-.006A11.082 11.082 0 0 0 8.9 2.855c-.378.025-.756.074-1.134.136a12.45 12.45 0 0 0-.837.174l-.279.074c-.092.037-.18.08-.266.118l-.205.093c-.012.006-.024.006-.03.012-.063.031-.118.056-.174.087a2.738 2.738 0 0 0-.236.118c-.043.018-.086.043-.124.062a.559.559 0 0 1-.055.03c-.056.032-.112.063-.162.094a1.56 1.56 0 0 0-.148.093c-.044.03-.087.055-.124.086-.006.007-.013.007-.019.013-.037.025-.08.056-.118.087l-.012.012-.093.074c-.012.007-.025.019-.037.025-.031.025-.062.056-.093.08-.006.013-.019.02-.025.025-.037.038-.074.069-.111.106-.007 0-.007.006-.013.012a1.742 1.742 0 0 0-.111.106c-.007.006-.007.012-.013.012a1.454 1.454 0 0 0-.093.1c-.012.012-.03.024-.043.036a1.374 1.374 0 0 1-.106.112c-.006.012-.018.019-.024.03-.05.05-.093.1-.143.15l-.018.018c-.1.106-.205.211-.317.304-.111.1-.229.192-.347.273a3.777 3.777 0 0 1-.762.421c-.13.056-.267.106-.403.149-.26.056-.527.161-.756.18-.05 0-.105.012-.155.018l-.155.037-.149.056c-.05.019-.099.044-.148.068-.044.031-.093.056-.137.087a1.011 1.011 0 0 0-.124.106c-.043.03-.087.074-.124.111-.037.043-.074.08-.105.124-.031.05-.068.093-.093.143a1.092 1.092 0 0 0-.087.142c-.025.056-.05.106-.068.161-.019.05-.037.106-.056.161-.012.05-.025.1-.03.15 0 .005-.007.012-.007.018-.012.056-.012.13-.019.167C.006 7.95 0 7.986 0 8.03a.657.657 0 0 0 .074.31v.006c.019.037.044.075.069.112.024.037.05.074.08.111.031.031.068.069.106.1a.906.906 0 0 0 .117.099c.149.13.186.173.378.272.031.019.062.031.1.05.006 0 .012.006.018.006 0 .013 0 .019.006.031a1.272 1.272 0 0 0 .08.298c.02.037.032.074.05.111.007.013.013.025.02.031.024.05.049.093.073.137l.093.13c.031.037.069.08.106.118.037.037.074.068.118.105 0 0 .006.006.012.006.037.031.074.062.112.087a.986.986 0 0 0 .136.08c.043.025.093.05.142.069a.73.73 0 0 0 .124.043c.007.006.013.006.025.012.025.007.056.013.08.019-.018.335-.024.65.026.762.055.124.328-.254.6-.688-.036.428-.061.93 0 1.079.069.155.44-.329.763-.862 4.395-1.016 8.405 2.02 8.826 6.31-.08-.67-.905-1.041-1.283-.948-.186.458-.502 1.047-1.01 1.413.043-.41.025-.83-.062-1.24a4.009 4.009 0 0 1-.769 1.562c-.588.043-1.177-.242-1.487-.67-.025-.018-.031-.055-.05-.08-.018-.043-.037-.087-.05-.13a.515.515 0 0 1-.037-.13c-.006-.044-.006-.087-.006-.137v-.093a.992.992 0 0 1 .031-.13c.013-.043.025-.086.044-.13.024-.043.043-.087.074-.13.105-.298.105-.54-.087-.682a.706.706 0 0 0-.118-.062c-.024-.006-.055-.018-.08-.025l-.05-.018a.847.847 0 0 0-.13-.031.472.472 0 0 0-.13-.019 1.01 1.01 0 0 0-.136-.012c-.031 0-.062.006-.093.006a.484.484 0 0 0-.137.019c-.043.006-.086.012-.13.024a1.068 1.068 0 0 0-.13.044c-.043.018-.08.037-.124.056-.037.018-.074.043-.118.062-1.444.942-.582 3.148.403 3.787-.372.068-.75.148-.855.229l-.013.012c.267.161.546.298.837.416.397.13.818.247 1.004.297v.006a5.996 5.996 0 0 0 1.562.112c2.746-.192 4.996-2.281 5.405-5.033l.037.161c.019.112.043.23.056.347v.006c.012.056.018.112.025.162v.024c.006.056.012.112.012.162.006.068.012.136.012.204v.1c0 .03.007.067.007.098 0 .038-.007.075-.007.112v.087c0 .043-.006.08-.006.124 0 .025 0 .05-.006.08 0 .044-.006.087-.006.137-.006.018-.006.037-.006.055l-.02.143c0 .019 0 .037-.005.056-.007.062-.019.118-.025.18v.012l-.037.174v.018l-.037.167c0 .007-.007.02-.007.025a1.663 1.663 0 0 1-.043.168v.018c-.019.062-.037.118-.05.174-.006.006-.006.012-.006.012l-.056.186c-.024.062-.043.118-.068.18-.025.062-.043.124-.068.18-.025.062-.05.117-.074.18h-.007c-.024.055-.05.117-.08.173a.302.302 0 0 1-.019.043c-.006.006-.006.013-.012.019a5.867 5.867 0 0 1-1.742 2.082c-.05.031-.099.069-.149.106-.012.012-.03.018-.043.03a2.603 2.603 0 0 1-.136.094l.018.037h.007l.26-.037h.006c.161-.025.322-.056.483-.087.044-.006.093-.019.137-.031l.087-.019c.043-.006.086-.018.13-.024.037-.013.074-.02.111-.031.62-.15 1.221-.354 1.798-.595a9.926 9.926 0 0 1-3.85 3.142c.714-.05 1.426-.167 2.114-.366a9.903 9.903 0 0 0 5.857-4.68 9.893 9.893 0 0 1-1.667 3.986 9.758 9.758 0 0 0 1.655-1.376 9.824 9.824 0 0 0 2.61-5.268c.21.98.272 1.99.18 2.987 4.474-6.241.371-12.712-1.346-14.416-.006-.013-.012-.019-.012-.031-.006.006-.006.006-.006.012 0-.006 0-.006-.007-.012 0 .074-.006.148-.012.223a8.34 8.34 0 0 1-.062.415c-.03.136-.068.273-.105.41-.044.13-.093.266-.15.396a5.322 5.322 0 0 1-.185.378 4.735 4.735 0 0 1-.477.688c-.093.111-.192.21-.292.31a3.994 3.994 0 0 1-.18.155l-.142.124a3.459 3.459 0 0 1-.347.241 4.295 4.295 0 0 1-.366.211c-.13.062-.26.118-.39.174a4.364 4.364 0 0 1-.818.223c-.143.025-.285.037-.422.05a4.914 4.914 0 0 1-.297.012 4.66 4.66 0 0 1-.422-.025 3.137 3.137 0 0 1-.421-.062 3.136 3.136 0 0 1-.415-.105h-.007c.137-.013.273-.025.41-.05a4.493 4.493 0 0 0 .818-.223c.136-.05.266-.112.39-.174.13-.062.248-.13.372-.204.118-.08.235-.161.347-.248.112-.087.217-.18.316-.279.105-.093.198-.198.291-.304.093-.111.18-.223.26-.334.013-.019.026-.044.038-.062.062-.1.124-.199.18-.298a4.272 4.272 0 0 0 .334-.775c.044-.13.075-.266.106-.403.025-.142.05-.278.062-.415.012-.142.025-.285.025-.421 0-.1-.007-.199-.013-.298a6.726 6.726 0 0 0-.05-.415 4.493 4.493 0 0 0-.092-.415c-.044-.13-.087-.267-.137-.397-.05-.13-.111-.26-.173-.384-.069-.124-.137-.248-.211-.366a6.843 6.843 0 0 0-.248-.34c-.093-.106-.186-.212-.285-.317a3.878 3.878 0 0 0-.161-.155c-.28-.217-.57-.421-.862-.607a1.154 1.154 0 0 0-.124-.062 2.415 2.415 0 0 0-.589-.26Z"},tE={path:"M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"},nE={path:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"},iE={path:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"},rE={path:"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"},sE={path:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},oE={path:"M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z"},aE={path:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},mp={TypeScript:aE.path,Go:Ky.path,Python:rE.path,"Node.js":nE.path,NestJS:eE.path,"Next.js":tE.path,PostgreSQL:iE.path,Redis:oE.path,MongoDB:Qy.path,GraphQL:Zy.path,React:sE.path,Docker:jy.path,LangChain:Jy.path},gp={AWS:"M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.2 4.4 4.4 0 0 0 7 18z",pgvector:"M4 20 19 5m0 0h-6m6 0v6M4 20h15M4 20V5","Card issuing":"M3 6h18v12H3zM3 10h18M6 15h4",Chargebacks:"M9 5 4 10l5 5M4 10h10a5 5 0 0 1 0 10h-3",Settlement:"M4 8h15l-3-3M20 16H5l3 3","Billing jobs":"M12 3a9 9 0 1 0 0 18 9 9 0 1 0 0-18M12 7v5l3 2",Idempotency:"M6 11h12v9H6zM9 11V8a3 3 0 0 1 6 0v3",TDD:"M12 3a9 9 0 1 0 0 18 9 9 0 1 0 0-18M8 12l3 3 5-6"};function lE(r){return mp[r]?`<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="${mp[r]}"/></svg>`:gp[r]?`<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${gp[r]}"/></svg>`:""}const Mi=[];let bn,Om=()=>!1;function Fm(r){const e=bn.clientWidth,t=bn.clientHeight,n=1400;for(const i of Mi)i.grab||(i.vy+=n*r,i.vx*=.995,i.x+=i.vx*r,i.y+=i.vy*r);for(let i=0;i<3;i++){for(let s=0;s<Mi.length;s++)for(let a=s+1;a<Mi.length;a++){const o=Mi[s],l=Mi[a],c=l.x-o.x,u=l.y-o.y,h=Math.hypot(c,u)||.01,f=o.r+l.r;if(h>=f)continue;const d=(f-h)/2,_=c/h,g=u/h,m=o.grab?0:l.grab?1:.5,p=1-m;o.x-=_*d*2*m,o.y-=g*d*2*m,l.x+=_*d*2*p,l.y+=g*d*2*p;const M=(l.vx-o.vx)*_+(l.vy-o.vy)*g;if(M<0){const v=M*.6;o.grab||(o.vx+=_*v,o.vy+=g*v),l.grab||(l.vx-=_*v,l.vy-=g*v)}}for(const s of Mi)s.x<s.r&&(s.x=s.r,s.vx*=-.5),s.x>e-s.r&&(s.x=e-s.r,s.vx*=-.5),s.y>t-s.r&&(s.y=t-s.r,s.vy*=-.35,s.vx*=.96)}}function km(){for(const r of Mi)r.el.style.transform=`translate(${r.x-r.r}px, ${r.y-r.r}px)`}function cE(){Om()&&!Er&&(Fm(1/60),km())}function uE(){bn=J("#pit");const r=bn.clientWidth,e=bn.clientHeight,t=r<600;for(const[o,l]of Oy){const c=(t?40:58)+(o.length>9?t?8:14:0),u=document.createElement("div");u.className="bub"+(l?" domain":""),u.innerHTML=`${lE(o)}<span>${o}</span>`,u.dataset.cursor="drag",u.style.width=u.style.height=c*2+"px",u.style.setProperty("--i",Math.round(c*.5)+"px"),bn.appendChild(u),Mi.push({el:u,r:c,x:c+Math.random()*(r-2*c),y:-Math.random()*e*1.2,vx:(Math.random()-.5)*60,vy:0,grab:!1})}for(let o=0;o<600;o++)Fm(1/60);km();let n=null,i=0,s=0;bn.addEventListener("pointerdown",o=>{const l=o.target.closest(".bub");if(!l)return;n=Mi.find(u=>u.el===l),n.grab=!0,l.classList.add("grab"),l.setPointerCapture(o.pointerId);const c=bn.getBoundingClientRect();i=o.clientX-c.left,s=o.clientY-c.top,In("blip")}),bn.addEventListener("pointermove",o=>{if(!n)return;const l=bn.getBoundingClientRect(),c=o.clientX-l.left,u=o.clientY-l.top;n.vx=(c-i)*40,n.vy=(u-s)*40,n.x=c,n.y=u,i=c,s=u});const a=()=>{n&&(n.grab=!1,n.el.classList.remove("grab"),n=null)};bn.addEventListener("pointerup",a),bn.addEventListener("pointercancel",a),Om=Wm(bn),Ge.create({trigger:bn,start:"top 70%",once:!0,onEnter:()=>{Er||Mi.forEach(o=>{o.y=-o.r-Math.random()*500,o.vy=0})}})}const Xu=[{name:"Peguin",split:3,year:"2026 · in beta",tags:["Electron","Node","Claude","ElevenLabs","BullMQ"],what:"A Mac app that writes your standup update from your commits, PRs and Claude Code prompts, joins Google Meet or Zoom as “your name (AI)”, says it's an AI, gives the update out loud and answers follow-ups only from your notes.",clips:[{src:"demos/penguin-app.mp4",label:"the app",w:1280,h:800},{src:"demos/penguin-web.mp4",label:"peguin.co",w:1280,h:800}],site:"https://www.peguin.co"},{name:"Dopple",split:3,year:"2026 · v1",tags:["NestJS","Postgres RLS","React","Next.js","NATS"],what:"A multi-tenant school platform. Every school gets its own address, its own data boundary and its own bank account for fees: live classes, timetables, exams, attendance and payments on shared infrastructure.",clips:[{src:"demos/dopple-app.mp4",label:"school app",w:1280,h:800},{src:"demos/dopple-site.mp4",label:"marketing site",w:1280,h:800}]}],hE=!!document.createElement("video").canPlayType('video/mp4; codecs="avc1.640028"'),Bm=r=>hE?r:r.replace(/\.mp4$/,".webm");function fE(){const r=J("#euList");Xu.forEach((e,t)=>{const n=e.name.slice(0,e.split),i=e.name.slice(e.split);r.insertAdjacentHTML("beforeend",`<article class="eu-row" data-i="${t}" aria-label="${e.name}">
      <div class="eu-stick"><i class="eu-plus tl"></i><i class="eu-plus tr"></i><i class="eu-plus bl"></i><i class="eu-plus br"></i>
        <span class="eu-count">0${t+1} / 0${Xu.length}</span>
        <h3 class="eu-name"><span class="h">${n}</span><span class="eu-win"><video muted loop playsinline preload="none" data-src="${Bm(e.clips[0].src)}" aria-label="${e.name} demo"></video></span><span class="h">${i}</span></h3>
        <div class="eu-foot"><div class="eu-tags">${e.tags.map(s=>`<span>${s}</span>`).join("")}<span>${e.year}</span></div><p class="eu-what">${e.what}</p><div class="eu-acts"><button class="eu-view" type="button" data-cursor="watch">view project ↗</button>${e.site?`<a class="eu-view" href="${e.site}" target="_blank" rel="noopener">visit ${e.site.replace(/^https?:\/\/(www\.)?/,"")} ↗</a>`:""}</div></div>
      </div></article>`)})}function _p(){for(const r of Li(".eu-name")){r.style.fontSize="";const e=[...r.querySelectorAll(".h")].reduce((n,i)=>n+i.offsetWidth,0),t=innerWidth*.9;e>t&&(r.style.fontSize=parseFloat(getComputedStyle(r).fontSize)*t/e+"px")}}function dE(r,e){const t=r.querySelector(".eu-name"),n=r.querySelector(".eu-win"),i=r.querySelector("video"),s=r.querySelector(".eu-foot"),a=()=>{const o=parseFloat(getComputedStyle(t).fontSize)*1.08;return Math.min(o*1.6,innerWidth*(innerWidth<760?.62:.42))};r.querySelector(".eu-view").addEventListener("click",()=>Yu(e)),n.addEventListener("click",()=>Yu(e)),n.style.cursor="pointer",Ge.create({trigger:r,start:"top top",end:"bottom bottom",scrub:!0,onToggle:o=>{if(!o.isActive)return i.pause();i.src||(i.src=i.dataset.src),i.play().catch(()=>{})},onUpdate:o=>{const l=o.progress,c=1-Math.pow(1-Math.min(1,l/.42),3);n.style.width=a()*c+"px";const u=Math.max(0,(l-.5)/.5),h=u*u*(3-2*u),f=parseFloat(getComputedStyle(t).fontSize)*1.08,d=a()||1,_=Math.max(innerWidth*.86/d,innerHeight*.72/f),g=n.offsetLeft+n.offsetWidth/2;t.style.transformOrigin=g+"px 50%",$e.set(t,{scale:1+(_-1)*h,x:(t.offsetWidth/2-g)*h}),$e.set(s,{opacity:1-h*1.6,y:h*30})}}),$e.from(t.querySelectorAll(".h"),{yPercent:40,opacity:0,duration:1.2,ease:"expo.out",stagger:.08,scrollTrigger:{trigger:r,start:"top 70%"}})}function Yu(r,e=0){const t=Xu[r],n=J("#lbVideo");J("#lbTitle").textContent=t.name,J("#lbTabs").innerHTML=t.clips.map((i,s)=>`<button type="button" class="${s===e?"on":""}" data-c="${s}">${i.label}</button>`).join(""),Li("#lbTabs button").forEach(i=>i.addEventListener("click",()=>Yu(r,+i.dataset.c))),n.src=Bm(t.clips[e].src),n.style.margin="0 auto",J("#lb").hidden=!1,xh(),n.play().catch(()=>{})}function eu(){J("#lb").hidden=!0,J("#lbVideo").pause(),Xl()}function pE(){const r=J("#lb");J("#lbClose").addEventListener("click",eu),r.addEventListener("click",e=>{e.target===r&&eu()}),addEventListener("keydown",e=>{e.key==="Escape"&&!r.hidden&&eu()})}function mE(){const r=J("#wkUnplug"),e=J("#wkNow");let t=!1;const n=i=>{t=i,i?Wu.play(Ef.youtubeId):Wu.pause(),e.hidden=!i,e.textContent=`♪ now playing · ${Ef.title}`,r.textContent=i?"■ stop music":"♪ play music",r.setAttribute("aria-pressed",String(i))};r.addEventListener("click",()=>n(!t)),new IntersectionObserver(([i])=>{!i.isIntersecting&&t&&n(!1)},{rootMargin:"-35% 0px -35% 0px"}).observe(J("#works"))}function gE(){fE(),document.fonts.ready.then(_p),addEventListener("resize",_p),Li(".eu-row").forEach(dE),pE(),mE(),$e.from(".eu-lede p",{y:40,opacity:0,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:".eu-lede",start:"top 85%"}}),$e.from(".eu-num",{xPercent:-30,opacity:0,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:".eu-num",start:"top 85%"}})}const Rn=[{slug:"education",k:"file 01 · education",logo:"funaab",t:"BSc, Mathematical Science",org:"Federal University of Agriculture, Abeokuta",caption:"Federal University of Agriculture, Abeokuta · 2014–2019",meta:[["dates","2014 – 2019"],["where","Abeokuta, Nigeria"],["focus","Statistics"]],text:["A Bachelor of Science in Mathematical Science at the Federal University of Agriculture, Abeokuta, with statistics as the focus."],list:[["Degree","Bachelor of Science, Mathematical Science"],["Certificate","Bachelor's degree, Statistics"],["Research","Published paper on life expectancy in Nigeria (2018), file 03"]],doc:{src:"certs/funaab-degree.jpg",alt:"Degree certificate: Bachelor of Science in Statistics, Second Class Upper Division, Federal University of Agriculture, Abeokuta, 10 May 2019",note:"Bachelor of Science in Statistics, Second Class Upper Division · 10 May 2019. Web copy, watermarked."},poster:{bg:"#0b7a3b",accent:"#f4c430",paper:"#fff6dc",ink:"#0c2614",logos:["funaab"],motif:"rings",motifColor:"#f4c430",kicker:"Federal University of Agriculture, Abeokuta",big:"BSc",bigSize:260,field:"Mathematical Science",meaning:"A degree in mathematics with a focus on statistics.",foot:"2014 — 2019 · Abeokuta"}},{slug:"training",k:"file 02 · training",logo:"decagon",t:"Diploma, Software Engineering",org:"Decagon Training Institute",caption:"Decagon Institute, Lagos · engineering and leadership · 2019–2020",meta:[["dates","2019 – 2020"],["where","Lagos, Nigeria"],["cohort","SQ009"]],text:["A software engineering diploma from Decagon in Lagos, taken through its Software Engineering and Leadership Training Program."],list:[["Diploma","Software Engineering"],["Programme","Software Engineering and Leadership Training Program"]],poster:{bg:"#232a5c",accent:"#3bb54a",paper:"#f3f6ff",ink:"#0e1230",logos:["decagon"],motif:"stripes",motifColor:"#3bb54a",kicker:"Decagon Training Institute · Lagos",big:"DIPLOMA",bigSize:200,field:"Software Engineering",meaning:"Intensive software engineering and leadership training, cohort SQ009.",foot:"2019 — 2020 · Lagos"}},{slug:"publication",k:"file 03 · publication",logo:"paper",t:"Life expectancy in Nigeria",org:"Multivariate Analysis on Life Expectancy in Nigeria Using Regression Models",caption:"Published paper · a multivariate regression study · 2018",meta:[["year","2018"],["credit","A.M.O"],["method","Multivariate regression"]],text:["The study looks at the socio-economic and health factors behind life expectancy in Nigeria, using advanced regression models.","It measures how income levels, access to healthcare and education affect life expectancy, with implications for policy-making and public health."],list:[["Variables","Income levels, healthcare access, education"],["Approach","Multivariate analysis with regression models"],["Use","Evidence for policy-making and public health initiatives"]],poster:{bg:"#2f5bff",accent:"#ffd23f",paper:"#ffffff",ink:"#0b1b4d",icon:"paper",motif:"rings",motifColor:"#ffffff",kicker:"Published paper · 2018",big:"PAPER",bigSize:230,field:"Life expectancy in Nigeria",meaning:"A regression study of how income, healthcare access and education affect life expectancy in Nigeria.",foot:"2018 · A.M.O"}},{slug:"certificates",k:"file 04 · certificates",logo:"anthropic",t:"Claude Code & Scrum",org:"Anthropic Skilljar · SCRUMstudy",caption:"Claude Code in Action · Claude Code 101 · Scrum Fundamentals Certified",meta:[["anthropic","2 courses"],["scrum","SFC"],["training","SQ009"]],text:["Certificates I keep on file: AI-assisted engineering from Anthropic, Scrum from SCRUMstudy, and the Decagon training programme."],list:[["Anthropic Skilljar","Claude Code in Action"],["Anthropic Skilljar","Claude Code 101"],["SCRUMstudy","Scrum Fundamentals Certified (SFC)"],["Decagon","Software Engineering and Leadership Training Program, SQ009"],["FUNAAB","Bachelor's degree, Statistics"]],doc:{src:"certs/scrum-sfc.jpg",alt:"SCRUMstudy certificate: Scrum Fundamentals Certified, granted 22 September 2021, certificate ID 873930",note:"Scrum Fundamentals Certified (SFC™), SCRUMstudy · granted 22 September 2021 · certificate ID 873930."},poster:{bg:"#d97757",accent:"#fff4ec",paper:"#fff4ec",ink:"#2a140b",logos:["anthropic","scrumstudy"],motif:"stripes",motifColor:"#2a140b",kicker:"Anthropic Skilljar · SCRUMstudy",big:"CERTIFIED",bigSize:170,field:"Claude Code & Scrum",meaning:"Claude Code in Action and Claude Code 101 from Anthropic, and Scrum Fundamentals Certified from SCRUMstudy.",foot:"On record · verified"}},{slug:"service",k:"file 05 · service",logo:"nysc",t:"NYSC, Kano",org:"National Youth Service Corps · Volunteer",caption:"Service year · community health and education outreach in Kusala · 2019–2020",meta:[["dates","2019 – 2020"],["where","Kusala, Kano"],["role","Volunteer"]],text:["My national service year was in Kusala, Kano, where I volunteered on skills, public health and education programmes alongside local leaders and organisations."],list:[["SAED programmes","Skills Acquisition and Entrepreneurship Development work that gave local youth practical skills for self-reliance."],["Community sensitisation","Programmes on public health, education and environmental awareness in rural communities."],["Outreach & advocacy","Workshops and seminars on hygiene, nutrition and sustainable farming."],["Leadership & teamwork","Designed and ran community development projects with other corps members."]],poster:{bg:"#c9b47e",accent:"#0c7a43",paper:"#fffaf0",ink:"#1d2a12",logos:["nysc"],motif:"rings",motifColor:"#0c7a43",kicker:"National Youth Service Corps · Volunteer",big:"SERVICE",bigSize:200,field:"Kusala, Kano",meaning:"A national service year on skills, public health and education programmes with local communities.",foot:"2019 — 2020 · Kano"}}],Oh=1024,Fh=1434,dn=Oh,Ti=Fh,js=(r,e,t="Archivo")=>`${r} ${e}px "${t}", "Arial Black", Impact, sans-serif`;function vp(r,e){try{r.fontStretch=e}catch{}}const _E=r=>()=>(r=r*16807%2147483647)/2147483647;function vE(r,e,t,n,i,s,a,o={}){vp(r,"expanded"),r.font=js(900,s),r.textBaseline="alphabetic",r.textAlign="center";const l=[...e],c=l.map(f=>r.measureText(f).width),u=i/c.reduce((f,d)=>f+d,0);r.save(),r.translate(t-i/2,n),r.scale(u,1);let h=0;l.forEach((f,d)=>{const _=(o.amp||0)*Math.sin(d*1.9+(o.seed||0)),g=(o.bounce||0)*Math.sin(d*2.3+(o.seed||0)*1.3);r.save(),r.translate(h+c[d]/2,g),r.rotate(_),o.shadow&&(r.fillStyle=o.shadow,r.fillText(f,o.sx||10,o.sy||10)),r.fillStyle=a,r.fillText(f,0,0),r.restore(),h+=c[d]}),r.restore(),vp(r,"normal")}function tu(r,e,t,n,i,s,a=.22,o=700){r.font=js(o,i),r.fillStyle=s,r.textAlign="left",r.textBaseline="alphabetic";const l=[...e.toUpperCase()],c=l.map(h=>r.measureText(h).width);let u=t-(c.reduce((h,f)=>h+f,0)+a*i*(l.length-1))/2;l.forEach((h,f)=>{r.fillText(h,u,n),u+=c[f]+a*i})}function nu(r,e,t){const n=[];let i="";for(const s of e.split(" ")){const a=i?i+" "+s:s;r.measureText(a).width>t&&i?(n.push(i),i=s):i=a}return i&&n.push(i),n}function qu(r,e,t,n,i,s){r.beginPath(),r.moveTo(e+s,t),r.arcTo(e+n,t,e+n,t+i,s),r.arcTo(e+n,t+i,e,t+i,s),r.arcTo(e,t+i,e,t,s),r.arcTo(e,t,e+n,t,s),r.closePath()}function xE(r){const e=_E(7);for(let t=0;t<9e3;t++)r.fillStyle=e()>.5?"rgba(255,255,255,.05)":"rgba(0,0,0,.05)",r.fillRect(e()*dn,e()*Ti,2,2)}function SE(r,e,t,n,i,s,a){r.save(),r.shadowColor="rgba(0,0,0,.18)",r.shadowBlur=30,r.shadowOffsetY=12,qu(r,n-s/2,i-s/2,s,s,36),r.fillStyle="#fff",r.fill(),r.restore();const o=e[t];o?(r.save(),qu(r,n-s/2,i-s/2,s,s,36),r.clip(),r.drawImage(o,n-s/2,i-s/2,s,s),r.restore()):(r.fillStyle=a,r.font=js(900,s*.3),r.textAlign="center",r.textBaseline="middle",r.fillText(t.slice(0,2).toUpperCase(),n,i))}function ME(r){r.save(),r.translate(dn/2,250),r.rotate(-.06),r.shadowColor="rgba(0,0,0,.2)",r.shadowBlur=30,r.shadowOffsetY=12,r.fillStyle="#fff",r.fillRect(-120,-150,240,300),r.shadowColor="transparent",r.fillStyle="#0b1b4d";for(let e=0;e<5;e++)r.fillRect(-90,-110+e*26,e===0?180:150-e*8,10);r.strokeStyle="#2f5bff",r.lineWidth=8,r.beginPath(),r.moveTo(-90,110),r.lineTo(-40,70),r.lineTo(10,85),r.lineTo(90,20),r.stroke(),r.fillStyle="#ffd23f";for(const[e,t]of[[-90,110],[-40,70],[10,85],[90,20]])r.beginPath(),r.arc(e,t,11,0,7),r.fill();r.restore()}function yE(r,e,t){if(r.save(),e==="rings"){r.globalAlpha=.14,r.strokeStyle=t,r.lineWidth=22;for(let n=120;n<1100;n+=70)r.beginPath(),r.arc(dn/2,250,n,0,7),r.stroke()}else{r.globalAlpha=.12,r.fillStyle=t;for(let n=-Ti;n<dn;n+=90)r.beginPath(),r.moveTo(n,Ti),r.lineTo(n+40,Ti),r.lineTo(n+40+Ti,0),r.lineTo(n+Ti,0),r.fill()}r.restore()}function EE(r,e,t,n){if(r.clearRect(0,0,dn,Ti),r.fillStyle=e.bg,r.fillRect(0,0,dn,Ti),yE(r,e.motif,e.motifColor),e.logos?.length){const c=e.logos.length,u=c>1?250:300,h=40,f=c*u+(c-1)*h;e.logos.forEach((d,_)=>SE(r,t,d,dn/2-f/2+u/2+_*(u+h),250,u,e.ink))}else ME(r);r.font=js(700,26);const i=nu(r,e.kicker.toUpperCase(),820);i.forEach((c,u)=>tu(r,c,dn/2,470+u*40,26,e.paper,.18));const s=470+i.length*40;vE(r,e.big,dn/2,s+190,Math.min(880,e.big.length*150),e.bigSize,e.accent,{amp:.05,bounce:12,seed:n,shadow:e.ink,sx:10,sy:12}),r.font='italic 400 76px "Instrument Serif", Georgia, serif',r.fillStyle=e.paper,r.textAlign="center",r.textBaseline="alphabetic";const a=nu(r,e.field,860);a.forEach((c,u)=>r.fillText(c,dn/2,s+290+u*76));const o=s+290+(a.length-1)*76+60;r.font=js(500,34);const l=nu(r,e.meaning,760);qu(r,90,o,dn-180,96+l.length*44,26),r.fillStyle=e.paper,r.fill(),tu(r,"What it means",dn/2,o+52,22,e.bg,.3),r.fillStyle=e.ink,r.textAlign="center",r.font=js(500,34),l.forEach((c,u)=>r.fillText(c,dn/2,o+100+u*44)),r.fillStyle=e.ink,r.fillRect(0,Ti-110,dn,110),tu(r,e.foot,dn/2,Ti-46,28,e.paper,.3),xE(r)}const TE=["900 100px Archivo","700 30px Archivo","500 30px Archivo","400 30px 'Instrument Serif'","italic 400 30px 'Instrument Serif'"];let zm=-1,ca=!1;function Hm(r){const e=Rn[r];zm=r;const t=J("#recImg");t.src=ha[r].toDataURL("image/jpeg",.86),t.alt=`Poster: ${e.t}`,J("#recN").textContent=`file 0${r+1} / 0${Rn.length}`,J("#recK").innerHTML=Jl(e.logo)+`<span>${e.k}</span>`,J("#recTitle").textContent=e.t,J("#recOrg").textContent=e.org,J("#recMeta").innerHTML=e.meta.map(([i,s])=>`<div><dt>${i}</dt><dd>${s}</dd></div>`).join(""),J("#recText").innerHTML=e.text.map(i=>`<p>${i}</p>`).join(""),J("#recList").innerHTML=e.list.map(([i,s],a)=>`<li><span>0${a+1}</span><span><b>${i}.</b> ${s}</span></li>`).join("");const n=J("#recDoc");n.hidden=!e.doc,e.doc&&(J("#recDocImg").src=e.doc.src,J("#recDocImg").alt=e.doc.alt,J("#recDocLink").href=e.doc.src,J("#recDocNote").textContent=e.doc.note),J("#recNextT").textContent=Rn[(r+1)%Rn.length].t,J("#rec").scrollTop=0,$e.fromTo("#recImg",{rotationX:-28,y:40,opacity:0},{rotationX:0,y:0,opacity:1,duration:1.4,ease:"elastic.out(1, .55)",delay:.15}),$e.fromTo(["#recK","#recTitle","#recOrg","#recMeta","#recText","#recList","#recDoc","#recNext"],{y:40,opacity:0},{y:0,opacity:1,stagger:.07,duration:1,ease:"expo.out",delay:.2})}function ua(r,e=!0){Hm(r),ca||(ca=!0,J("#rec").classList.add("open"),xh(),document.documentElement.style.overflow="hidden",$e.fromTo("#rec",{clipPath:"inset(100% 0 0 0)"},{clipPath:"inset(0% 0 0 0)",duration:.9,ease:"expo.inOut"}),In("blip")),e&&history.pushState({rec:r},"","#record/"+Rn[r].slug),J("#recBack").focus({preventScroll:!0})}function iu(r=!1){ca&&(ca=!1,document.documentElement.style.overflow="",$e.to("#rec",{clipPath:"inset(0 0 100% 0)",duration:.7,ease:"expo.inOut",onComplete:()=>{J("#rec").classList.remove("open"),Xl()}}),r||history.pushState({},"",location.pathname+location.search))}function bE(){J("#recBack").addEventListener("click",()=>iu()),J("#recNext").addEventListener("click",()=>{const r=(zm+1)%Rn.length;$e.to(".rec-body",{opacity:0,duration:.25,onComplete:()=>{Hm(r),$e.set(".rec-body",{opacity:1}),history.replaceState({rec:r},"","#record/"+Rn[r].slug)}})}),addEventListener("keydown",r=>{r.key==="Escape"&&ca&&iu()}),addEventListener("popstate",r=>{const e=r.state;e&&e.rec!=null?ua(e.rec,!1):iu(!0)}),addEventListener("load",()=>{const r=location.hash.match(/^#record\/(\w+)/);if(!r)return;const e=Rn.findIndex(t=>t.slug===r[1]);e>=0&&setTimeout(()=>ua(e,!1),1200)})}const rs=Rn.length,ha=Rn.map(()=>{const r=document.createElement("canvas");return r.width=Oh,r.height=Fh,r}),tn={target:0,smooth:0,velocity:0};let $o=-1;function zl(r){if(r===$o)return;const e=r>$o?1:-1;$o=r,J("#pstN").textContent=`0${r+1} / 0${rs}`,J("#pstT").innerHTML=`<span>${Rn[r].t.replace(/&/g,"&amp;")}</span>`,J("#pstS").textContent=Rn[r].caption,$e.fromTo("#pstT span",{yPercent:110*e},{yPercent:0,duration:.8,ease:"expo.out"}),$e.fromTo("#pstS",{opacity:0,y:8},{opacity:1,y:0,duration:.6,ease:"power2.out"}),In("blip")}const wE=`
  uniform float uTime, uVel, uSeed, uHover; uniform vec2 uMouse;
  varying vec2 vUv; varying vec3 vPos;
  float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
  float crumple(vec2 p){ float a = 0., w = .5; for (int i = 0; i < 5; i++) { a += w * abs(n(p) * 2. - 1.); p *= 2.07; w *= .5; } return a; }
  void main(){
    vUv = uv; vec3 p = position;
    p.z += (crumple(uv * vec2(3.2, 4.4) + uSeed * 7.) - .45) * .085;      // creased paper, fixed per poster
    float hang = pow(1. - uv.y, 1.6);                                       // pinned along the top edge
    p.z += sin(uv.y * 3.4 + uTime * 1.3 + uSeed * 5.) * .035 * (.4 + hang); // breathing in a draught
    p.z += uVel * hang * 1.1; p.x += -uVel * hang * .35;                   // swings as the wall slides
    float d = distance(uv, uMouse);
    p.z += uHover * .16 * exp(-d * d * 18.) * sin(d * 26. - uTime * 6.);    // ripple under the pointer
    vec4 mv = modelViewMatrix * vec4(p, 1.); vPos = mv.xyz; gl_Position = projectionMatrix * mv;
  }`,AE=`
  uniform sampler2D uMap; uniform float uDim;
  varying vec2 vUv; varying vec3 vPos;
  void main(){
    vec3 nrm = normalize(cross(dFdx(vPos), dFdy(vPos)));                    // faceted normal from the creases
    vec3 L = normalize(vec3(-.45, .65, .9));
    float diff = clamp(dot(nrm, L), 0., 1.), spec = pow(clamp(dot(reflect(-L, nrm), vec3(0., 0., 1.)), 0., 1.), 24.);
    vec3 col = texture2D(uMap, vUv).rgb * (.62 + .48 * diff) + spec * .1;
    col = mix(col, col * .9 + .06, uDim);                                    // posters off-centre sit back a little
    gl_FragColor = vec4(col, 1.);
    #include <colorspace_fragment>
  }`;function CE(){const r=J("#cabinet"),e=J("#postergl"),t=new Lh({canvas:e,antialias:!0,alpha:!0});t.setPixelRatio(Math.min(devicePixelRatio,1.75)),t.outputColorSpace=Ht;const n=new Mm,i=new Yn(28,1,.1,100);i.position.set(0,0,10);const s=2,a=s*Fh/Oh,o=2.75,l=(()=>{const p=document.createElement("canvas");p.width=p.height=128;const M=p.getContext("2d"),v=M.createRadialGradient(64,64,8,64,64,64);return v.addColorStop(0,"rgba(13,16,14,.5)"),v.addColorStop(1,"rgba(13,16,14,0)"),M.fillStyle=v,M.fillRect(0,0,128,128),new Hu(p)})(),c=new oo(s,a,64,90),u=ha.map((p,M)=>{const v=new Hu(p);v.colorSpace=Ht,v.anisotropy=t.capabilities.getMaxAnisotropy();const S=new Pi({vertexShader:wE,fragmentShader:AE,extensions:{derivatives:!0},uniforms:{uMap:{value:v},uTime:{value:0},uVel:{value:0},uSeed:{value:M*1.37+.3},uHover:{value:0},uMouse:{value:new ct(.5,.5)},uDim:{value:0}}}),y=new oi(c,S);y.userData.i=M;const A=new oi(new oo(s*1.5,a*1.25),new Kl({map:l,transparent:!0,depthWrite:!1}));return n.add(A,y),{mesh:y,mat:S,shadow:A,hover:0}}),h=()=>{const p=r.clientWidth,M=r.clientHeight;t.setSize(p,M,!1),i.aspect=p/M,i.updateProjectionMatrix();const v=2*Math.tan(od.degToRad(i.fov/2));i.position.z=Math.max(a/.58/v,s/.62/v/i.aspect)};h(),addEventListener("resize",h);const f=new bm,d=new ct;let _=null;e.addEventListener("pointermove",p=>{const M=e.getBoundingClientRect();d.set((p.clientX-M.left)/M.width*2-1,-((p.clientY-M.top)/M.height)*2+1),f.setFromCamera(d,i);const v=f.intersectObjects(u.map(S=>S.mesh))[0];_=v?v.object.userData.i:null,v&&u[_].mat.uniforms.uMouse.value.copy(v.uv),e.style.cursor=v?"pointer":""}),e.addEventListener("pointerleave",()=>_=null),e.addEventListener("click",()=>{_!=null&&(_===$o?ua(_):Y0(r,_/(rs-1)))});let g=!1;new IntersectionObserver(([p])=>g=p.isIntersecting,{rootMargin:"100px"}).observe(r);let m=performance.now();$e.ticker.add(()=>{const p=performance.now(),M=Math.min(.05,(p-m)/1e3);if(m=p,!g)return;const v=tn.smooth;tn.smooth+=(tn.target-tn.smooth)*Math.min(1,M*7),tn.velocity+=((tn.smooth-v)/Math.max(M,.001)-tn.velocity)*Math.min(1,M*6);const S=tn.smooth*(rs-1)*o,y=p/1e3;u.forEach((A,E)=>{const P=E*o-S,x=Math.max(0,1-Math.abs(P)/o),T=.84+x*.2;A.mesh.position.set(P,.12+Math.sin(y*.8+E)*.02,x*.3),A.mesh.scale.setScalar(T),A.mesh.rotation.set(0,-P*.06,Math.sin(E*2.1)*.03*(1-x*.6)),A.shadow.position.set(P+.18,.02,-.25),A.shadow.scale.setScalar(T),A.hover+=((_===E?1:0)-A.hover)*Math.min(1,M*5);const F=A.mat.uniforms;F.uTime.value=y,F.uVel.value=od.clamp(tn.velocity*.09,-.6,.6),F.uHover.value=A.hover,F.uDim.value=1-x}),zl(Math.round(tn.smooth*(rs-1))),t.render(n,i)}),zl(0)}function RE(){const r=J("#cabinet");J("#postergl").remove();const e=document.createElement("div");e.className="pst-fallback",ha.forEach((t,n)=>{t.style.cursor="pointer",t.addEventListener("click",()=>ua(n)),e.appendChild(t)}),r.appendChild(e),$e.ticker.add(()=>{tn.smooth+=(tn.target-tn.smooth)*.12;const t=ha[0].getBoundingClientRect().width,n=t+innerWidth*.06;e.style.transform=`translate(${-t/2-tn.smooth*(rs-1)*n}px, -46%)`,zl(Math.round(tn.smooth*(rs-1)))}),zl(0)}async function PE(){J("#pstOpen").addEventListener("click",()=>ua(Math.max(0,$o))),Ge.create({trigger:"#cabinet",start:"top top",end:"+="+rs*75+"%",pin:!0,scrub:!0,onUpdate:n=>tn.target=n.progress});const r=[...new Set(Rn.flatMap(n=>n.poster.logos??[]))];await document.fonts.ready,await Promise.all(TE.map(n=>document.fonts.load(n).catch(()=>{})));const e=await Ly(r);Rn.forEach((n,i)=>EE(ha[i].getContext("2d"),n.poster,e,i+1)),(()=>{try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}})()?CE():RE()}const LE={doc:'<path fill="#fff" stroke="#000" d="M3.5 1.5h7l3 3v10h-10z"/><path fill="#c0c0c0" stroke="#000" d="M10.5 1.5v3h3"/><path stroke="#000080" d="M5 7h6M5 9h6M5 11h4"/>',folder:'<path fill="#ffd94a" stroke="#000" d="M1.5 4.5v9h13v-8h-7l-1-1z"/><path stroke="#fff3b0" d="M2.5 6.5h11"/>',term:'<path fill="#c0c0c0" stroke="#000" d="M1.5 2.5h13v10h-13z"/><path fill="#030604" d="M2.5 3.5h11v8h-11z"/><path stroke="#41ff8b" d="M4 6l2 1.5L4 9M7 10h3"/><path fill="#808080" d="M5 13h6v1.5H5z"/>',mail:'<path fill="#fff" stroke="#000" d="M1.5 4.5h13v8h-13z"/><path fill="none" stroke="#000080" d="M1.5 4.5l6.5 5 6.5-5"/>',peguin:'<ellipse cx="8" cy="9" rx="4.5" ry="5.5" fill="#111"/><ellipse cx="8" cy="10" rx="2.8" ry="4" fill="#fff"/><circle cx="6.8" cy="6" r=".8" fill="#fff"/><circle cx="9.2" cy="6" r=".8" fill="#fff"/><path fill="#ff9f1a" d="M7 7.3h2L8 8.6z"/><path fill="#ff9f1a" d="M4.8 14.2h2.4v1H4.8zM8.8 14.2h2.4v1H8.8z"/>'};function DE(){for(const r of Li("[data-ic]"))r.innerHTML=`<svg viewBox="0 0 16 16" shape-rendering="crispEdges">${LE[r.dataset.ic]??""}</svg>`}function UE(){const r=J("#w95win"),e=J("#w95tab"),t=n=>{r.hidden=!n,e.classList.toggle("on",n)};Li("#w95win [data-act]").forEach(n=>n.addEventListener("click",()=>{In("blip");const i=n.dataset.act;i==="max"&&r.classList.toggle("max"),i==="min"&&t(!1),i==="close"&&(t(!1),e.hidden=!0,r.classList.remove("max"))})),e.addEventListener("click",()=>{In("blip"),t(r.hidden)}),J("#w95open").addEventListener("click",()=>{In("blip"),e.hidden=!1,t(!0)})}function IE(){const r=J("#w95dl"),e=J("#w95copy"),t=J("#cpFill"),n=J("#cpEta");let i=0,s=!1;const a=o=>{clearInterval(i),clearTimeout(i),e.hidden=!0,e.classList.remove("run"),o&&(s=!0,r.click())};r.addEventListener("click",o=>{if(s){s=!1;return}if(Er||(o.preventDefault(),!e.hidden))return;In("blip");const l=2400,c=performance.now();e.hidden=!1,e.classList.add("run"),t.style.width="0%";const u=e.querySelector(".cp-anim");u.style.setProperty("--span",u.clientWidth-70+"px"),i=window.setInterval(()=>{const h=Math.min(1,(performance.now()-c)/l);t.style.width=Math.floor(h*20)*5+"%";const f=Math.ceil((1-h)*l/1e3);n.textContent=h<1?`Estimated time left: ${f} second${f===1?"":"s"} (it's ${new Date().getFullYear()})`:"Done.",h>=1&&(clearInterval(i),i=window.setTimeout(()=>a(!0),250))},80)}),J("#cpCancel").addEventListener("click",()=>{In("blip"),a(!1)})}function NE(){const r=J("#w95clock"),e=()=>r.textContent=new Date().toLocaleTimeString("en-GB",{timeZone:"Africa/Lagos",hour:"2-digit",minute:"2-digit"});e(),setInterval(e,3e4)}function OE(){DE(),UE(),IE(),NE()}function FE(){const r=J("#mail");r.textContent=xc.email,r.href="mailto:"+xc.email;const e=J("#card");e.addEventListener("pointermove",i=>{const s=e.getBoundingClientRect();e.style.setProperty("--mx",i.clientX-s.left+"px"),e.style.setProperty("--my",i.clientY-s.top+"px")});const t=J("#connect");t.addEventListener("pointerenter",()=>Bl(t,"Let's connect",600)),Ge.create({trigger:t,start:"top 80%",once:!0,onEnter:()=>Bl(t,"Let's connect",1100)});const n=J("#writeBtn");n.href=`https://wa.me/${xc.whatsapp}?text=${encodeURIComponent("Hi Mujeeb, I found you through your portfolio.")}`,$u||(n.addEventListener("pointermove",i=>{const s=n.getBoundingClientRect();$e.to(n,{x:(i.clientX-s.left-s.width/2)*.35,y:(i.clientY-s.top-s.height/2)*.35,duration:.4})}),n.addEventListener("pointerleave",()=>$e.to(n,{x:0,y:0,duration:.7,ease:"elastic.out(1,.4)"}))),n.addEventListener("click",()=>In("blip"))}let jo,nl=0,xp=scrollY,ru=0;function kE(){jo=J("#marq"),jo.innerHTML+=jo.innerHTML}function BE(){const r=scrollY;ru+=(r-xp-ru)*.1,xp=r,nl-=1.1+Math.abs(ru)*.25;const e=jo.scrollWidth/2;-nl>e&&(nl+=e),jo.style.transform=`translateX(${nl}px)`}document.body.classList.add("booting");A_();Sy();Cy();Ny();By();$y();uE();gE();PE().then(()=>Ge.refresh());bE();OE();FE();kE();function Gm(r){BE(),Ty(),!Er&&qy()&&Nm(r/1e3),cE(),requestAnimationFrame(Gm)}requestAnimationFrame(Gm);my();
