/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-namespace='app']");if(s){publicPath=s.getAttribute('data-path');}
(function(publicPath){Context.activeRouter=function(){let t={},e={},n=0;const i=[];return{set:function(e){t=Object.assign({},t,e),function(){const t=i;for(let e=0;e<t.length;e++){(0,t[e])()}}()},get:function(e){return 0===Object.keys(t).length?{location:{pathname:Context.window.location.pathname,search:Context.window.location.search}}:e?t[e]:t},subscribe:function(t,o,r){if("function"!=typeof t)throw new Error("Expected listener to be a function.");o?function(t,i,o){e[i].listenerList[o]=t,e[i].listenerList.length===e[n].startLength&&e[i].groupedListener()}(t,o,r):i.push(t);let s=!0;return function(){if(s){if(o)!function(t,n){if(e[t].listenerList.splice(n,1),0===e[t].listenerList.length){const n=i.indexOf(e[t].groupedListener);i.splice(n,1),delete e[t]}}(o,r);else{const e=i.indexOf(t);i.splice(e,1)}s=!1}}},createGroup:function(t){return e[n+=1]={},e[n].startLength=t,e[n].listenerList=[],e[n].groupedListener=(()=>{let t=!1;e[n].listenerList.forEach(e=>{t?e(!0):t=null!==e(!1)})}),i.push(e[n].groupedListener),n}}}();
})(publicPath);


(function(publicPath){const n=["windows phone"],t=[{name:"ipad",isMatch:(t,o)=>e(t,o,"ipad",["ipad"],n)},{name:"iphone",isMatch:(t,o)=>e(t,o,"iphone",["iphone"],n)},{name:"ios",settings:{mode:"ios",tabsHighlight:!1,statusbarPadding:function(){const n=window;return!!(n.cordova||n.PhoneGap||n.phonegap||n.Capacitor)}()},isMatch:(t,o)=>e(t,o,"ios",["iphone","ipad","ipod"],n)},{name:"android",settings:{activator:"ripple",mode:"md"},isMatch:(t,o)=>e(t,o,"android",["android","silk"],n)},{name:"core",settings:{mode:"md"}}];function e(n,t,e,i,r){const c=o(n,"ionicplatform");if(c)return c===e;if(t){t=t.toLowerCase();for(let n=0;n<i.length;n++)if(t.indexOf(i[n])>-1){for(let n=0;n<r.length;n++)if(t.indexOf(r[n])>-1)return!1;return!0}}return!1}function o(n,t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");const e=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(n);return e?decodeURIComponent(e[1].replace(/\+/g," ")):null}function i(n){return void 0!==n&&null!==n}const r=window.Ionic=window.Ionic||{};if(!Context.dom){const n=()=>window.performance.now();Context.dom=function(n,t,e){const o=[],i=[],r=t=>n.requestAnimationFrame(t);function c(n,a,d,u){try{for(a=t();d=o.shift();)d(n);for(;(d=i.shift())&&(d(n),!(t()-a>8)););}catch(n){u=n}(e=o.length>0||i.length>0)&&r(c),u&&console.error(u)}return{read:n=>{o.push(n),e||(e=!0,r(c))},write:n=>{i.push(n),e||(e=!0,r(c))},raf:r}}(window,n)}r.config=Context.config=function(n,t){function e(e,r){const c=o(window.location.href,`ionic${e}`);if(i(c))return n[e]="true"===c||"false"!==c&&c;if(i(n[e]))return n[e];let a=null;for(let n=0;n<t.length;n++)if((a=t[n].settings)&&i(a[e]))return a[e];return void 0!==r?r:null}return n=n||{},{get:e,getBoolean:function(n,t){const o=e(n);return null===o?void 0!==t&&t:"string"==typeof o?"true"===o:!!o},getNumber:function(n,t){const o=parseFloat(e(n));return isNaN(o)?void 0!==t?t:NaN:o}}}(r.config,function(n,t,e,o){let i=e.filter(e=>e.isMatch&&e.isMatch(n,t));return i.length||(i=e.filter(n=>"core"===n.name)),i}(window.location.href,window.navigator.userAgent,t)),r.mode=Context.mode=document.documentElement.getAttribute("mode")||Context.config.get("mode","md"),document.documentElement.setAttribute("mode",r.mode);
})(publicPath);
(function(n,t,e,o,i){"use strict";function c(n,t,e,o,i,c,f){let s=e.n+(o||j),r=e[s];if(r||(r=e[s=e.n+j]),r){let o=t.t;if(t.e)if(1===e.encapsulation)o=i.shadowRoot;else for(;i=t.o(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=n.i.get(o)||{};if(!c[s]){f=r.content.cloneNode(!0);const e=o.querySelectorAll("[data-styles]");t.c(o,f,e.length&&e[e.length-1].nextSibling||o.f),c[s]=!0,n.i.set(o,c)}}}function f(n){return{s:n[0],r:n[1],l:!!n[2],u:!!n[3],a:!!n[4]}}function s(n,t){if(x(t)){if(n===Boolean||3===n)return"false"!==t&&(""===t||!!t);if(n===Number||4===n)return parseFloat(t)}return t}function r(n,t,e,o){const i=n.p.get(t);i&&((o=i.$activeLoading)&&((e=o.indexOf(t))>-1&&o.splice(e,1),!o.length&&i.$initLoad()),n.p.delete(t))}function l(n,t,e){let o,i=!1,c=!1;for(var f=arguments.length;f-- >2;)P.push(arguments[f]);for(;P.length;)if((e=P.pop())&&void 0!==e.pop)for(f=e.length;f--;)P.push(e[f]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].d+=e:void 0===o?o=[c?u(e):e]:o.push(c?u(e):e),i=c;const s=new L;if(s.m=n,s.v=o,t&&(s.b=t,s.y=t.w,s.M=t.ref,t.className&&(t.class=t.className),"object"==typeof t.class)){for(f in t.class)t.class[f]&&P.push(f);t.class=P.join(" "),P.length=0}return s}function u(n){const t=new L;return t.d=n,t}function a(n,t){n.g.has(t)||(n.g.set(t,!0),n.k.add(()=>{(function n(t,e,o,i,c){if(t.g.delete(e),!t.C.has(e)){let f;if(i=t.W.get(e),o=!i){if((c=t.p.get(e))&&!c.$rendered)return void(c.$onRender=c.$onRender||[]).push(()=>{n(t,e)});i=function f(n,t,e,o,i,c){try{(function f(n,t,e,o,i,c){for(c in n.j.set(o,e),n.O.has(e)||n.O.set(e,{}),(i=Object.assign({color:{type:String}},t.properties)).mode={type:String},i)d(n,i[c],e,o,c)})(n,o=n.x(t).N,t,e=new o),function s(n,t,e){if(t){const o=n.j.get(e);t.forEach(t=>{e[t.method]={emit:e=>{n.S(o,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,o.events,e);try{if(i=n.T.get(t)){for(c=0;c<i.length;c+=2)e[i[c]](i[c+1]);n.T.delete(t)}}catch(e){n.A(e,2,t)}}catch(o){e={},n.A(o,7,t,!0)}return n.W.set(t,e),e}(t,e);try{i.componentWillLoad&&(f=i.componentWillLoad())}catch(n){t.A(n,3,e)}}else try{i.componentWillUpdate&&(f=i.componentWillUpdate())}catch(n){t.A(n,5,e)}f&&f.then?f.then(()=>p(t,e,i,o)):p(t,e,i,o)}})(n,t)}))}function p(n,t,e,o){(function i(n,t,e,o,c){try{const i=t.N.host;if(o.render||o.hostData||i){n.L=!0;const f=o.render&&o.render();let s;s=o.hostData&&o.hostData(),n.L=!1,i&&(s=Object.keys(i).reduce((n,t)=>{switch(t){case"theme":n.class=n.class||{},n.class=Object.assign(n.class,function e(n,t,o){return o.split(" ").reduce((e,o)=>(e[o]=!0,n&&(e[`${o}-${n}`]=!0,t&&(e[`${o}-${t}`]=!0,e[`${o}-${n}-${t}`]=!0)),e),{})}(o.mode,o.color,i.theme))}return n},s||{}));const r=n.P.get(e)||new L;r.R=e,n.P.set(e,n.render(r,l(null,s,f),c,n.q.get(e),n.B.get(e),t.N.encapsulation))}n.D(n,n.H,t,o.mode,e),e.$rendered=!0,e.$onRender&&(e.$onRender.forEach(n=>n()),e.$onRender=null)}catch(t){n.L=!1,n.A(t,8,e,!0)}})(n,n.x(t),t,e,!o);try{o&&t.$initLoad()}catch(e){n.A(e,6,t,!0)}}function d(n,t,e,o,i){if(t.type||t.state){const c=n.O.get(e);if(!t.state){if(t.attr&&(void 0===c[i]||""===c[i])){const o=n.H.F(e,t.attr);null!=o&&(c[i]=s(t.type,o))}e.hasOwnProperty(i)&&(void 0===c[i]&&(c[i]=e[i]),delete e[i])}o.hasOwnProperty(i)&&void 0===c[i]&&(c[i]=o[i]),t.watchCallbacks&&(c[R+i]=t.watchCallbacks.slice()),v(o,i,function c(t){return(t=n.O.get(n.j.get(this)))&&t[i]},function f(e,o){(o=n.j.get(this))&&(t.state||t.mutable)&&m(n,o,i,e)})}else if(t.elementRef)h(o,i,e);else if(t.method)h(e,i,o[i].bind(o));else if(t.context){const c=n.z(t.context);void 0!==c&&h(o,i,c.I&&c.I(e)||c)}else t.connect&&h(o,i,n.Q(t.connect))}function m(n,t,e,o,i,c,f){(i=n.O.get(t))||n.O.set(t,i={});const s=i[e];if(o!==s&&(i[e]=o,c=n.W.get(t))){if(f=i[R+e])for(let n=0;n<f.length;n++)try{c[f[n]].call(c,o,s,e)}catch(n){}!n.L&&t.$rendered&&a(n,t)}}function h(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function v(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function b(n,t,e,o,i){const c=11===e.R.nodeType&&e.R.host?e.R.host:e.R,f=t&&t.b||E,s=e.b||E;for(i in f)s&&null!=s[i]||null==f[i]||y(n,c,i,f[i],void 0,o);for(i in s)i in f&&s[i]===("value"===i||"checked"===i?c[i]:f[i])||y(n,c,i,f[i],s[i],o)}function y(n,t,e,o,i,c,f,s){if("class"!==e||c)if("style"===e){for(f in o=o||E,i=i||E,o)i[f]||(t.style[f]="");for(f in i)i[f]!==o[f]&&(t.style[f]=i[f])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.x(t);o&&o.U&&o.U[e]?w(t,e,i):"ref"!==e&&(w(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(f=e!==(e=e.replace(/^xlink\:?/,"")),1!==q[e]||i&&"false"!==i?"function"!=typeof i&&(f?t.setAttributeNS(B,T(e),i):t.setAttribute(e,i)):f?t.removeAttributeNS(B,T(e)):t.removeAttribute(e));else e=T(e.substring(2)),i?i!==o&&n.H.G(t,e,i):n.H.J(t,e);else if(o!==i){const n=null==o||""===o?O:o.trim().split(/\s+/),e=null==i||""===i?O:i.trim().split(/\s+/);let c=null==t.className||""===t.className?O:t.className.trim().split(/\s+/);for(f=0,s=n.length;f<s;f++)-1===e.indexOf(n[f])&&(c=c.filter(t=>t!==n[f]));for(f=0,s=e.length;f<s;f++)-1===n.indexOf(e[f])&&(c=[...c,e[f]]);t.className=c.join(" ")}}function w(n,t,e){try{n[t]=e}catch(n){}}function $(n,t){function e(o,i,c){let f=0;if("function"==typeof o.m&&(o=o.m(Object.assign({},o.b,{K:o.v}))),!u&&"slot"===o.m){if(r||l){a&&t.V(i,a+"-slot","");const e=o.b&&o.b.name;let c;if(c=x(e)?l&&l[e]:r,x(c)){for(n.X=!0;f<c.length;f++)t.Y(c[f]),t.Z(i,c[f]);n.X=!1}}return null}if(x(o.d))o.R=t._(o.d);else{const i=o.R=D||"svg"===o.m?t.nn("http://www.w3.org/2000/svg",o.m):t.tn(o.m);D="svg"===o.m||"foreignObject"!==o.m&&D,b(n,null,o,D),null!==a&&i.en!==a&&t.V(i,i.en=a,"");const c=o.v;if(c){let n;for(;f<c.length;++f)(n=e(c[f],i))&&t.Z(i,n)}"svg"===o.m&&(D=!1)}return o.R}function o(n,o,i,c,f,s,r){const l=n.$defaultHolder&&t.o(n.$defaultHolder)||n;for(;c<=f;++c)r=i[c],x(r)&&(s=x(r.d)?t._(r.d):e(r,n),x(s)&&(r.R=s,t.c(l,s,o)))}function i(n,e,o){for(;e<=o;++e)x(n[e])&&t.Y(n[e].R)}function c(n,t){return n.m===t.m&&n.y===t.y}function f(n,t,e){const o={};let i,c,f;for(i=t;i<=e;++i)null!=(f=n[i])&&void 0!==(c=f.y)&&(o.on=i);return o}let s,r,l,u,a;return function u(p,d,m,h,v,y,w){return s=m,r=h,l=v,a="scoped"===y||"shadow"===y&&!t.e?"data-"+t.in(p.R):null,s||a&&t.V(p.R,a+"-host",""),function s(r,l){const u=l.R=r.R,a=r.v,p=l.v;let d;if(D=l.R&&null!=l.R.parentElement&&void 0!==l.R.cn,D="svg"===l.m||"foreignObject"!==l.m&&D,S(l.d))"slot"!==l.m&&b(n,r,l,D),x(a)&&x(p)?function m(n,r,l){let u,a,p,d,m=0,h=0,v=r.length-1,b=r[0],y=r[v],w=l.length-1,$=l[0],M=l[w];for(;m<=v&&h<=w;)null==b?b=r[++m]:null==y?y=r[--v]:null==$?$=l[++h]:null==M?M=l[--w]:c(b,$)?(s(b,$),b=r[++m],$=l[++h]):c(y,M)?(s(y,M),y=r[--v],M=l[--w]):c(b,M)?(s(b,M),t.c(n,b.R,t.fn(y.R)),b=r[++m],M=l[--w]):c(y,$)?(s(y,$),t.c(n,y.R,b.R),y=r[--v],$=l[++h]):(S(u)&&(u=f(r,m,v)),a=u[$.y],S(a)?(d=e($,n),$=l[++h]):((p=r[a]).m!==$.m?d=e($,n):(s(p,$),r[a]=void 0,d=p.R),$=l[++h]),d&&t.c(b.R&&b.R.parentNode||n,d,b.R));m>v?o(n,null==l[w+1]?null:l[w+1].R,l,h,w):h>w&&i(r,m,v)}(u,a,p):x(p)?(x(r.d)&&t.sn(u,""),o(u,null,p,0,p.length-1)):x(a)&&i(a,0,a.length-1);else if(d=n.q.get(u)){const e=d[0].parentElement;t.sn(e,l.d),n.q.set(u,[e.childNodes[0]])}else r.d!==l.d&&t.sn(u,l.d);"svg"===l.m&&D&&(D=!1)}(p,d),d}}function M(n,t){n&&(n.M&&n.M(t?null:n.R),n.v&&n.v.forEach(n=>{M(n,t)}))}function g(n,t,e,o,i){const c=n.rn(t);let f,s,r,l;if(i&&1===c){(s=n.F(t,W))&&(r=s.split("."))[0]===o&&((l=new L).m=n.in(l.R=t),e.v||(e.v=[]),e.v[r[1]]=l,e=l,i=""!==r[2]);for(let c=0;c<t.childNodes.length;c++)g(n,t.childNodes[c],e,o,i)}else 3===c&&(f=t.previousSibling)&&8===n.rn(f)&&"s"===(r=n.ln(f).split("."))[0]&&r[1]===o&&((l=u(n.ln(t))).R=t,e.v||(e.v=[]),e.v[r[2]]=l)}function k(n,t,e,o){return function(){const i=arguments;return function c(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.un.querySelector(e)),i||(i=t[e]=n.tn(e),n.Z(n.un,i)),i.componentOnReady(o)})}(n,t,e).then(n=>n[o].apply(n,i))}}const C="data-ssrv",W="data-ssrc",j="$",E={},O=[],N={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},x=n=>void 0!==n&&null!==n,S=n=>void 0===n||null===n,T=n=>n.toLowerCase(),A=()=>{};class L{}const P=[],R="wc-",q={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},B="http://www.w3.org/1999/xlink";let D=!1;const H=n[o]=n[o]||{};{const o=function F(t,e,o,i,u,p){const d={html:{}},b={},y=function w(n,t){const e=new WeakMap,o={an:t.documentElement,t:t.head,un:t.body,pn:!1,rn:n=>n.nodeType,tn:n=>t.createElement(n),nn:(n,e)=>t.createElementNS(n,e),_:n=>t.createTextNode(n),dn:n=>t.createComment(n),c:(n,t,e)=>n.insertBefore(t,e),Y:n=>n.remove(),Z:(n,t)=>n.appendChild(t),mn:n=>n.childNodes,o:n=>n.parentNode,fn:n=>n.nextSibling,in:n=>T(n.tagName),ln:n=>n.textContent,sn:(n,t)=>n.textContent=t,F:(n,t)=>n.getAttribute(t),V:(n,t,e)=>n.setAttribute(t,e),hn:(n,t,e,o)=>n.setAttributeNS(t,e,o),vn:(n,t)=>n.removeAttribute(t),bn:(e,i)=>"child"===i?e.firstElementChild:"parent"===i?o.yn(e):"body"===i?o.un:"document"===i?t:"window"===i?n:e,G:(n,t,i,c,f,s,r,l)=>{const u=t;let a=n,p=e.get(n);if(p&&p[u]&&p[u](),"string"==typeof s?a=o.bn(n,s):"object"==typeof s?a=s:(l=t.split(":")).length>1&&(a=o.bn(n,l[0]),t=l[1]),!a)return;let d=i;(l=t.split(".")).length>1&&(t=l[0],d=(n=>{n.keyCode===N[l[1]]&&i(n)})),r=o.pn?{capture:!!c,passive:!!f}:!!c,a.addEventListener(t,d,r),p||e.set(n,p={}),p[u]=(()=>{a&&a.removeEventListener(t,d,r),p[u]=null})},J:(n,t)=>{const o=e.get(n);o&&(t?o[t]&&o[t]():Object.keys(o).forEach(n=>{o[n]&&o[n]()}))},wn:(t,e,o)=>t&&t.dispatchEvent(new n.CustomEvent(e,o))};try{n.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>o.pn=!0}))}catch(n){}return o.yn=((n,t)=>(t=o.o(n))&&11===o.rn(t)?t.host:t),o}(o,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.publicPath=u,t.enableListener=((n,t,e,o,i)=>(function c(n,t,e,o,i,f){if(t){const c=n.j.get(t),s=n.x(c);if(s&&s.$n)if(o){const o=s.$n.find(n=>n.s===e);o&&n.H.G(c,e,n=>t[o.r](n),o.a,void 0===f?o.u:!!f,i)}else n.H.J(c,e)}})(E,n,t,e,o,i)),t.emit=((n,e,o)=>y.wn(n,t.eventNameFn?t.eventNameFn(e):e,o)),e.h=l,e.Context=t;const W=o.$definedCmps=o.$definedCmps||{},E={Mn:function O(n,e){e.mode||(e.mode=y.F(e,"mode")||t.mode),y.F(e,C)||function o(n,t){return n&&1===t.encapsulation}(y.e,n)||function i(n,t,e,o,c,f,s,r,l){for(e.$defaultHolder||t.c(e,e.$defaultHolder=t.dn(""),o[0]),l=0;l<o.length;l++)c=o[l],1===t.rn(c)&&null!=(f=t.F(c,"slot"))?(r=r||{})[f]?r[f].push(c):r[f]=[c]:s?s.push(c):s=[c];n.q.set(e,s),n.B.set(e,r)}(E,y,e,e.childNodes),y.e||1!==n.encapsulation||(e.shadowRoot=e)},H:y,gn:function x(n,t){if(!W[n.n]){W[n.n]=!0,function e(n,t,o,i){o.connectedCallback=function(){(function e(n,t,o){n.kn.has(o)||(n.kn.set(o,!0),function i(n,t){const e=n.x(t);e.$n&&e.$n.forEach(e=>{e.l||n.H.G(t,e.s,function o(n,t,e,i){return o=>{(i=n.W.get(t))?i[e](o):((i=n.T.get(t)||[]).push(e,o),n.T.set(t,i))}}(n,t,e.r),e.a,e.u)})}(n,o)),n.C.delete(o),n.Cn.has(o)||(n.Cn.set(o,!0),function c(n,t,e){for(e=t;e=n.H.yn(e);)if(n.Wn(e)){n.jn.has(t)||(n.p.set(t,e),(e.$activeLoading=e.$activeLoading||[]).push(t));break}}(n,o),n.k.add(()=>{n.Mn(t,o),n.loadBundle(t,o.mode,()=>a(n,o))},3))})(n,t,this)},o.attributeChangedCallback=function(n,e,o){(function i(n,t,e,o,c,f){if(o!==c&&n)for(f in e=T(e),n)if(n[f].En===e){t[f]=s(n[f].On,c);break}})(t.U,this,n,e,o)},o.disconnectedCallback=function(){(function t(n,e,o){!n.X&&function i(n,t){for(;t;){if(!n.o(t))return 9!==n.rn(t);t=n.o(t)}}(n.H,e)&&(n.C.set(e,!0),r(n,e),M(n.P.get(e),!0),n.H.J(e),n.kn.delete(e),(o=n.W.get(e))&&o.componentDidUnload&&o.componentDidUnload())})(n,this)},o.componentOnReady=function(t,e){return t||(e=new Promise(n=>t=n)),function o(n,t,e,i){n.C.has(t)||(n.jn.has(t)?e(t):((i=n.Nn.get(t)||[]).push(e),n.Nn.set(t,i)))}(n,this,t),e},o.$initLoad=function(){(function t(n,e,o,i,c){if(!n.jn.has(e)&&(i=n.W.get(e))&&!n.C.has(e)&&(!e.$activeLoading||!e.$activeLoading.length)){delete e.$activeLoading,n.jn.set(e,!0);try{M(n.P.get(e)),(c=n.Nn.get(e))&&(c.forEach(n=>n(e)),n.Nn.delete(e)),i.componentDidLoad&&i.componentDidLoad()}catch(t){n.A(t,4,e)}e.classList.add(o),r(n,e)}})(n,this,i)},o.xn=function(){a(n,this)},function c(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].Sn;1===i||2===i?v(e,o,function t(){return(n.O.get(this)||{})[o]},function t(e){m(n,this,o,e)}):6===i&&h(e,o,A)})}(n,t.U,o)}(E,n,t.prototype,p);{const e=[];for(const t in n.U)n.U[t].En&&e.push(n.U[t].En);t.observedAttributes=e}o.customElements.define(n.n,t)}},S:t.emit,x:n=>d[y.in(n)],z:n=>t[n],isClient:!0,Wn:n=>!(!W[y.in(n)]&&!E.x(n)),loadBundle:function S(n,t,e){if(n.N)e();else{const o="string"==typeof n.Tn?n.Tn:n.Tn[t],i=u+o+(function o(n,t){return 2===t.encapsulation||1===t.encapsulation&&!n}(y.e,n)?".sc":"")+".js";import(i).then(t=>{try{n.N=t[(n=>T(n).split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""))(n.n)],function o(n,t,e){const o=e.style;if(o){const i=e.is+(e.styleMode||j);if(!t[i]){const e=n.tn("template");t[i]=e,e.innerHTML=`<style>${o}</style>`,n.Z(n.t,e)}}}(y,n,n.N)}catch(t){n.N=class{}}e()}).catch(n=>void 0)}},A:(n,t,e)=>void 0,Q:n=>(function t(n,e,o){return{create:k(n,e,o,"create"),componentOnReady:k(n,e,o,"componentOnReady")}})(y,b,n),k:function P(t,e,o){function i(){for(;u.length>0;)u.shift()();e=!1}function c(n){for(n=s(),i();a.length>0&&s()-n<40;)a.shift()();(o=a.length>0)&&r(f)}function f(n){for(i(),n=4+s();a.length>0&&s()<n;)a.shift()();(o=a.length>0)&&r(c)}const s=()=>t.performance.now(),r=t=>n.requestAnimationFrame(t),l=Promise.resolve(),u=[],a=[];return{add:(n,t)=>{3===t?(u.push(n),e||(e=!0,l.then(i))):(a.push(n),o||(o=!0,r(c)))}}}(o),An:n=>(n||[]).map(n=>(function t(n,e,o,i){const c={n:n[0],U:{color:{En:"color"}}};c.Tn=n[1];const s=n[3];if(s)for(o=0;o<s.length;o++)i=s[o],c.U[i[0]]={Sn:i[1],En:"string"==typeof i[2]?i[2]:i[2]?i[0]:0,On:i[3]};return c.encapsulation=n[4],n[5]&&(c.$n=n[5].map(f)),e[c.n]=c})(n,d)),p:new WeakMap,i:new WeakMap,q:new WeakMap,Cn:new WeakMap,kn:new WeakMap,jn:new WeakMap,j:new WeakMap,W:new WeakMap,C:new WeakMap,g:new WeakMap,B:new WeakMap,Nn:new WeakMap,T:new WeakMap,P:new WeakMap,O:new WeakMap};E.render=$(E,y);const R=y.an;return R.$rendered=!0,R.$activeLoading=[],R.$initLoad=(()=>E.jn.set(R,!0)),function q(n,t,e){const o=e.querySelectorAll(`[${C}]`),i=o.length;let c,f,s,r,l,u;if(i>0)for(n.jn.set(e,!0),r=0;r<i;r++)for(c=o[r],f=t.F(c,C),(s=new L).m=t.in(s.R=c),n.P.set(c,s),l=0,u=c.childNodes.length;l<u;l++)g(t,c.childNodes[l],s,f,!0)}(E,y,R),E.D=c,E}(e,H,n,t,i,hydratedCssClass);o.An(H.components).forEach(n=>o.gn(n,class extends HTMLElement{}))}})(window,document,Context,appNamespace,publicPath);
})({},"App","hydrated","/build/app/");