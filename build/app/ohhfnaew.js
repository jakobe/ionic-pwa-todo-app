/*! Built with http://stenciljs.com */
const{h:t,Context:e}=window.App;import{getOrAppendElement as n,domControllerAsync as o,now as r,pointerCoordX as i,pointerCoordY as s}from"./chunk2.js";import{GestureController as a}from"./chunk3.js";class c{componentDidLoad(){window.addEventListener("swUpdate",()=>{this.toastCtrl.create({message:"New version available",showCloseButton:!0,closeButtonText:"Reload"}).then(t=>{t.present()})})}reload(){window.location.reload()}render(){return t("ion-app",null,t("main",null,t("stencil-router",null,t("stencil-route",{url:"/",component:"app-home",exact:!0}),t("stencil-route",{url:"/profile/:name",component:"app-profile"}))))}static get is(){return"my-app"}static get properties(){return{toastCtrl:{connect:"ion-toast-controller"}}}static get style(){return""}}const l=new Map,h=100;class u{constructor(){this.scrollTime=0,this.hoverCSS=!1,this.useRouter=!1}componentWillLoad(){this.modeCode=this.config.get("mode"),this.useRouter=this.config.getBoolean("useRouter",!1),this.hoverCSS=this.config.getBoolean("hoverCSS",!1)}registerRootNav(t){l.set(t.target.getId(),t.target)}getRootNavs(){const t=[];return l.forEach(e=>{t.push(e)}),t}isEnabled(){return!0}isScrolling(){const t=this.scrollTime;return!(0===t||t<Date.now()&&(this.scrollTime=0,1))}setScrolling(){this.scrollTime=Date.now()+h}getTopNavs(t=-1){return p(t)}getNavByIdOrName(t){const e=Array.from(l.values());for(const n of e){const e=f(n,t);if(e)return e}return null}hardwareBackButtonPressed(){return m("ion-menu-controller").then(t=>!!t.isOpen()&&t.close().then(()=>!0)).then(t=>t||function(){const t=[];return t.push(g("ion-action-sheet-controller")),t.push(g("ion-alert-controller")),t.push(g("ion-loading-controller")),t.push(g("ion-picker-controller")),t.push(g("ion-popover-controller")),t.push(g("ion-toast-controller")),Promise.all(t).then(t=>t.every(t=>!!t))}()).then(t=>t||m("ion-modal-controller").then(t=>!!t.getTop()&&t.dismiss().then(()=>!0))).then(t=>t||function(){let t=null,e=null;return l.forEach(n=>{p(n.navId).map(t=>(function t(e){return e?e.getViews.length>1?e:t(e.parent):null})(t)).filter(t=>!!t).filter(t=>!!t.last()).forEach(n=>{const o=n.last();(!e||o.timestamp>=e.timestamp)&&(e=o,t=n)})}),t?t.pop().then(()=>!0):Promise.resolve(!1)}()).then(t=>t?Promise.resolve():this.exitApp.emit())}appResume(){return null}appPaused(){return null}hostData(){return{class:{[this.modeCode]:!0,"enable-hover":this.hoverCSS}}}render(){return[function(){const t=window;return!!(t.cordova||t.PhoneGap||t.phonegap||t.Capacitor)}()&&t("ion-cordova-platform",null),t("ion-tap-click",null),t("ion-status-tap",null),t("slot",null)]}static get is(){return"ion-app"}static get host(){return{theme:"app"}}static get properties(){return{config:{context:"config"},element:{elementRef:!0},getNavByIdOrName:{method:!0},getRootNavs:{method:!0},getTopNavs:{method:!0},hoverCSS:{state:!0},isEnabled:{method:!0},isScrolling:{method:!0},modeCode:{state:!0},setScrolling:{method:!0},useRouter:{state:!0}}}static get events(){return[{name:"exitApp",method:"exitApp",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"audio,canvas,progress,video{vertical-align:baseline}audio:not([controls]){display:none;height:0}b,strong{font-weight:700}img{max-width:100%;border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{height:1px;border-width:0;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}input,label,select,textarea{font-family:inherit;line-height:normal}textarea{overflow:auto;height:auto;font:inherit;color:inherit}textarea::placeholder{padding-left:2px}form,input,optgroup,select{margin:0;font:inherit;color:inherit}html input[type=button],input[type=reset],input[type=submit]{cursor:pointer;-webkit-appearance:button}[tappable],[tappable] div,[tappable] ion-icon,[tappable] ion-label,[tappable] span,a,a div,a ion-icon,a ion-label,a span,button,button div,button ion-icon,button ion-label,button span,input,textarea{touch-action:manipulation}a ion-label,button ion-label{pointer-events:none}button{border:0;border-radius:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;-webkit-appearance:button}[tappable]{cursor:pointer}a[disabled],button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input[type=checkbox],input[type=radio]{padding:0;box-sizing:border-box}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}.hide,[hidden],template{display:none!important}.sticky{position:sticky;top:0}.click-block{display:none}.click-block-enabled{left:0;right:0;top:0;bottom:0;transform:translate3d(0,-100%,0) translateY(1px);position:absolute;z-index:99999;display:block;opacity:0;contain:strict}.click-block-active{transform:translate3d(0,0,0)}*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}html{width:100%;height:100%;text-size-adjust:100%}body{margin:0;padding:0;position:fixed;overflow:hidden;width:100%;max-width:100%;height:100%;max-height:100%;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-user-drag:none;-ms-content-zooming:none;touch-action:manipulation;word-wrap:break-word;text-size-adjust:none;user-select:none}a{background-color:transparent}.enable-hover a:not(.button):hover{opacity:.7}h1,h2,h3,h4,h5,h6{margin-top:16px;margin-bottom:10px;font-weight:500;line-height:1.2}[padding] h1:first-child,[padding] h2:first-child,[padding] h3:first-child,[padding] h4:first-child,[padding] h5:first-child,[padding] h6:first-child{margin-top:-3px}h1+h2,h1+h3,h2+h3{margin-top:-3px}h1{margin-top:20px;font-size:26px}h2{margin-top:18px;font-size:24px}h3{font-size:22px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}small{font-size:75%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}ion-app{top:0;position:absolute;z-index:0;width:100%;height:100%;contain:layout size style}.ion-page,.page-inner{display:flex;flex-direction:column;justify-content:space-between}.hide-page{opacity:0}[app-viewport],[nav-viewport],[overlay-portal],[tab-portal],ion-action-sheet-controller,ion-alert-controller,ion-animation-controller,ion-loading-controller,ion-menu-controller,ion-modal-controller,ion-nav-controller,ion-picker-controller,ion-route,ion-route-controller,ion-toast-controller{display:none}[text-center]{text-align:center!important}[text-justify]{text-align:justify!important}[text-start]{text-align:left;text-align:start!important}[text-end]{text-align:right;text-align:end!important}[text-left]{text-align:left!important}[text-right]{text-align:right!important}[text-nowrap]{white-space:nowrap!important}[text-wrap]{white-space:normal!important}\@media (min-width:576px){[text-sm-center]{text-align:center!important}[text-sm-justify]{text-align:justify!important}[text-sm-start]{text-align:left;text-align:start!important}[text-sm-end]{text-align:right;text-align:end!important}[text-sm-left]{text-align:left!important}[text-sm-right]{text-align:right!important}[text-sm-nowrap]{white-space:nowrap!important}[text-sm-wrap]{white-space:normal!important}}\@media (min-width:768px){[text-md-center]{text-align:center!important}[text-md-justify]{text-align:justify!important}[text-md-start]{text-align:left;text-align:start!important}[text-md-end]{text-align:right;text-align:end!important}[text-md-left]{text-align:left!important}[text-md-right]{text-align:right!important}[text-md-nowrap]{white-space:nowrap!important}[text-md-wrap]{white-space:normal!important}}\@media (min-width:992px){[text-lg-center]{text-align:center!important}[text-lg-justify]{text-align:justify!important}[text-lg-start]{text-align:left;text-align:start!important}[text-lg-end]{text-align:right;text-align:end!important}[text-lg-left]{text-align:left!important}[text-lg-right]{text-align:right!important}[text-lg-nowrap]{white-space:nowrap!important}[text-lg-wrap]{white-space:normal!important}}\@media (min-width:1200px){[text-xl-center]{text-align:center!important}[text-xl-justify]{text-align:justify!important}[text-xl-start]{text-align:left;text-align:start!important}[text-xl-end]{text-align:right;text-align:end!important}[text-xl-left]{text-align:left!important}[text-xl-right]{text-align:right!important}[text-xl-nowrap]{white-space:nowrap!important}[text-xl-wrap]{white-space:normal!important}}[text-uppercase]{text-transform:uppercase!important}[text-lowercase]{text-transform:lowercase!important}[text-capitalize]{text-transform:capitalize!important}\@media (min-width:576px){[text-sm-uppercase]{text-transform:uppercase!important}[text-sm-lowercase]{text-transform:lowercase!important}[text-sm-capitalize]{text-transform:capitalize!important}}\@media (min-width:768px){[text-md-uppercase]{text-transform:uppercase!important}[text-md-lowercase]{text-transform:lowercase!important}[text-md-capitalize]{text-transform:capitalize!important}}\@media (min-width:992px){[text-lg-uppercase]{text-transform:uppercase!important}[text-lg-lowercase]{text-transform:lowercase!important}[text-lg-capitalize]{text-transform:capitalize!important}}\@media (min-width:1200px){[text-xl-uppercase]{text-transform:uppercase!important}[text-xl-lowercase]{text-transform:lowercase!important}[text-xl-capitalize]{text-transform:capitalize!important}}[float-left]{float:left!important}[float-right]{float:right!important}[float-start]{float:left!important}[float-end]{float:right!important}\@media (min-width:576px){[float-sm-left]{float:left!important}[float-sm-right]{float:right!important}[float-sm-start]{float:left!important}[float-sm-end]{float:right!important}}\@media (min-width:768px){[float-md-left]{float:left!important}[float-md-right]{float:right!important}[float-md-start]{float:left!important}[float-md-end]{float:right!important}}\@media (min-width:992px){[float-lg-left]{float:left!important}[float-lg-right]{float:right!important}[float-lg-start]{float:left!important}[float-lg-end]{float:right!important}}\@media (min-width:1200px){[float-xl-left]{float:left!important}[float-xl-right]{float:right!important}[float-xl-start]{float:left!important}[float-xl-end]{float:right!important}}.app-ios{font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Roboto,sans-serif;font-size:14px;background-color:var(--ion-background-ios-color,var(--ion-background-color,#fff))}.app-ios ion-tabs ion-tabbar:not(.placement-top){padding-bottom:calc(constant(safe-area-inset-bottom) + 0);padding-bottom:calc(env(safe-area-inset-bottom) + 0);height:calc(50px + constant(safe-area-inset-bottom));height:calc(50px + env(safe-area-inset-bottom))}.app-ios ion-footer .toolbar:last-child{padding-bottom:calc(constant(safe-area-inset-bottom) + 4px);padding-bottom:calc(env(safe-area-inset-bottom) + 4px);min-height:calc(44px + constant(safe-area-inset-bottom));min-height:calc(44px + env(safe-area-inset-bottom))}.app-ios .ion-page>.toolbar.statusbar-padding:first-child,.app-ios .ion-page>ion-header>.toolbar.statusbar-padding:first-child,.app-ios ion-menu>.menu-inner>.toolbar.statusbar-padding:first-child,.app-ios ion-menu>.menu-inner>ion-header>.toolbar.statusbar-padding:first-child,.app-ios ion-tab ion-nav .ion-page>ion-header>.toolbar.statusbar-padding:first-child{padding-top:calc(20px + 4px);padding-top:calc(constant(safe-area-inset-top) + 4px);padding-top:calc(env(safe-area-inset-top) + 4px);min-height:calc(44px + 20px);min-height:calc(44px + constant(safe-area-inset-top));min-height:calc(44px + env(safe-area-inset-top))}.app-ios .ion-page>ion-content.statusbar-padding:first-child .scroll-content,.app-ios .ion-page>ion-header>ion-content.statusbar-padding:first-child .scroll-content,.app-ios ion-menu>.menu-inner>ion-content.statusbar-padding:first-child .scroll-content,.app-ios ion-menu>.menu-inner>ion-header>ion-content.statusbar-padding:first-child .scroll-content,.app-ios ion-tab ion-nav .ion-page>ion-header>ion-content.statusbar-padding:first-child .scroll-content{padding-top:20px;padding-top:calc(constant(safe-area-inset-top) + 0px);padding-top:calc(env(safe-area-inset-top) + 0px)}.app-ios .ion-page>ion-content.statusbar-padding:first-child[padding-top] .scroll-content,.app-ios .ion-page>ion-content.statusbar-padding:first-child[padding] .scroll-content,.app-ios .ion-page>ion-header>ion-content.statusbar-padding:first-child[padding-top] .scroll-content,.app-ios .ion-page>ion-header>ion-content.statusbar-padding:first-child[padding] .scroll-content,.app-ios ion-menu>.menu-inner>ion-content.statusbar-padding:first-child[padding-top] .scroll-content,.app-ios ion-menu>.menu-inner>ion-content.statusbar-padding:first-child[padding] .scroll-content,.app-ios ion-menu>.menu-inner>ion-header>ion-content.statusbar-padding:first-child[padding-top] .scroll-content,.app-ios ion-menu>.menu-inner>ion-header>ion-content.statusbar-padding:first-child[padding] .scroll-content,.app-ios ion-tab ion-nav .ion-page>ion-header>ion-content.statusbar-padding:first-child[padding-top] .scroll-content,.app-ios ion-tab ion-nav .ion-page>ion-header>ion-content.statusbar-padding:first-child[padding] .scroll-content{padding-top:calc(16px + 20px);padding-top:calc(constant(safe-area-inset-top) + 0px);padding-top:calc(env(safe-area-inset-top) + 0px)}.app-ios .ion-page>.toolbar.statusbar-padding:first-child ion-segment,.app-ios .ion-page>.toolbar.statusbar-padding:first-child ion-title,.app-ios .ion-page>ion-header>.toolbar.statusbar-padding:first-child ion-segment,.app-ios .ion-page>ion-header>.toolbar.statusbar-padding:first-child ion-title,.app-ios ion-menu>.menu-inner>.toolbar.statusbar-padding:first-child ion-segment,.app-ios ion-menu>.menu-inner>.toolbar.statusbar-padding:first-child ion-title,.app-ios ion-menu>.menu-inner>ion-header>.toolbar.statusbar-padding:first-child ion-segment,.app-ios ion-menu>.menu-inner>ion-header>.toolbar.statusbar-padding:first-child ion-title,.app-ios ion-tab ion-nav .ion-page>ion-header>.toolbar.statusbar-padding:first-child ion-segment,.app-ios ion-tab ion-nav .ion-page>ion-header>.toolbar.statusbar-padding:first-child ion-title{padding-top:20px;padding-top:calc(constant(safe-area-inset-top) + 0px);padding-top:calc(env(safe-area-inset-top) + 0px);height:calc(44px + 20px);height:calc(44px + constant(safe-area-inset-top));height:calc(44px + env(safe-area-inset-top));min-height:calc(44px + 20px);min-height:calc(44px + constant(safe-area-inset-top));min-height:calc(44px + env(safe-area-inset-top))}.app-ios .ion-page>ion-content.statusbar-padding:first-child ion-scroll,.app-ios .ion-page>ion-header>ion-content.statusbar-padding:first-child ion-scroll,.app-ios ion-menu>.menu-inner>ion-content.statusbar-padding:first-child ion-scroll,.app-ios ion-menu>.menu-inner>ion-header>ion-content.statusbar-padding:first-child ion-scroll,.app-ios ion-tab ion-nav .ion-page>ion-header>ion-content.statusbar-padding:first-child ion-scroll{padding-top:20px;padding-top:calc(constant(safe-area-inset-top) + 0px);padding-top:calc(env(safe-area-inset-top) + 0px)}a{color:var(--ion-color-ios-primary,var(--ion-color-primary,#488aff))}.icon-ios-primary{color:var(--ion-color-ios-primary,var(--ion-color-primary,#488aff))}.icon-ios-secondary{color:var(--ion-color-ios-secondary,var(--ion-color-secondary,#32db64))}.icon-ios-tertiary{color:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#f4a942))}.icon-ios-success{color:var(--ion-color-ios-success,var(--ion-color-success,#10dc60))}.icon-ios-warning{color:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00))}.icon-ios-danger{color:var(--ion-color-ios-danger,var(--ion-color-danger,#f53d3d))}.icon-ios-light{color:var(--ion-color-ios-light,var(--ion-color-light,#f4f4f4))}.icon-ios-medium{color:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2))}.icon-ios-dark{color:var(--ion-color-ios-dark,var(--ion-color-dark,#222))}"}static get styleMode(){return"ios"}}function p(t=-1){if(!l.size)return[];if(-1!==t)return d(l.get(t));if(1===l.size)return d(l.values().next().value);let e=[];return l.forEach(t=>{e=e.concat(d(t))}),e}function d(t){let e=[];const n=t.getChildNavs();return n&&n.length?n.forEach(t=>{const n=d(t);e=e.concat(n)}):e.push(t),e}function f(t,e){if(t.navId===e||t.name===e)return t;for(const n of t.getChildNavs()){const t=f(n,e);if(t)return t}return null}function m(t){return n(t).componentOnReady()}function g(t){const e=document.querySelector(t);return e?e.componentOnReady().then(()=>!!e.getTop()):Promise.resolve(!1)}class v{constructor(){this.readyPromise=new Promise(t=>this.readyResolve=t)}ready(){return this.readyPromise}deviceReadyHandler(){this.readyResolve()}exitCordovaApp(){const t=window.navigator.app;t&&t.exitApp&&t.exitApp()}static get is(){return"ion-cordova-platform"}static get properties(){return{exitCordovaApp:{method:!0},ready:{method:!0}}}}class y{constructor(){this.duration=300}statusTap(){return this.tap()}mockTap(){return this.tap()}tap(){return o(this.dom.read,()=>{const t=window.innerWidth,e=window.innerWidth,n=document.elementFromPoint(t/2,e/2);return n?n.closest("ion-scroll"):null}).then(([t])=>t.componentOnReady()).then(t=>o(this.dom.write,()=>t.scrollToTop(this.duration)))}static get is(){return"ion-status-tap"}static get properties(){return{dom:{context:"dom"},duration:{type:Number,attr:"duration"},mockTap:{method:!0}}}}class w{constructor(){this.lastTouch=0,this.lastActivated=0,this.clearDefers=new WeakMap,this.passive=!0,this.attachTo="document"}componentDidLoad(){this.isServer||(this.gestureCtrl=Ionic.gesture=Ionic.gesture||new a,this.app=this.el.closest("ion-app"))}onBodyClick(t){this.shouldCancel()&&(t.preventDefault(),t.stopPropagation())}onTouchStart(t){this.lastTouch=r(t),this.pointerDown(t)}onTouchCancel(t){this.lastTouch=r(t),this.pointerUp(t)}onTouchEnd(t){this.lastTouch=r(t),this.pointerUp(t)}onMouseDown(t){const e=r(t);this.lastTouch<e-T&&this.pointerDown(t)}onMouseUp(t){const e=r(t);this.lastTouch<e-T&&this.pointerUp(t)}scrollStarted(){clearTimeout(this.activeDefer),this.activatableEle&&(this.removeActivated(!1),this.activatableEle=null)}pointerDown(t){this.activatableEle||this.shouldCancel()||this.setActivatedElement(t.target.closest("a,button,[tappable]"),t)}pointerUp(t){this.setActivatedElement(null,t)}setActivatedElement(t,e){const n=this.activatableEle;if(t&&t===n)return;clearTimeout(this.activeDefer),this.activeDefer=null;const o=i(e),r=s(e);if(n){if(this.clearDefers.has(n))throw new Error("internal error");n.classList.contains(b)||this.addActivated(n,o,r),this.removeActivated(!0)}if(t){const e=this.clearDefers.get(t);e&&(clearTimeout(e),this.clearDefers.delete(t)),t.classList.remove(b),this.activeDefer=setTimeout(()=>{this.addActivated(t,o,r),this.activeDefer=null},x)}this.activatableEle=t}addActivated(t,e,n){this.lastActivated=Date.now(),t.classList.add(b);const o=new CustomEvent("ionActivated",{bubbles:!1,detail:{x:e,y:n}});t.dispatchEvent(o)}removeActivated(t){const e=this.activatableEle;if(!e)return;const n=A-Date.now()+this.lastActivated;if(t&&n>0){const t=setTimeout(()=>{e.classList.remove(b),this.clearDefers.delete(e)},A);this.clearDefers.set(e,t)}else e.classList.remove(b)}shouldCancel(){return this.app.isEnabled()?!!this.gestureCtrl.isCaptured()&&(console.debug("click prevent: tap-click (gesture is captured)"),!0):(console.debug("click prevent: appDisabled"),!0)}static get is(){return"ion-tap-click"}static get properties(){return{el:{elementRef:!0},enableListener:{context:"enableListener"},isServer:{context:"isServer"}}}}const b="activated",x=200,A=200,T=2500;var R="/",E="./",O=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function P(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function S(t){return t.replace(/([=!:$/()])/g,"\\$1")}function k(t){return t&&t.sensitive?"":"i"}function C(t,e,n){return t instanceof RegExp?function(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var o=0;o<n.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}(t,e):Array.isArray(t)?function(t,e,n){for(var o=[],r=0;r<t.length;r++)o.push(C(t[r],e,n).source);return new RegExp("(?:"+o.join("|")+")",k(n))}(t,e,n):function(t,e,n){return function(t,e,n){for(var o=(n=n||{}).strict,r=!1!==n.end,i=P(n.delimiter||R),s=n.delimiters||E,a=[].concat(n.endsWith||[]).map(P).concat("$").join("|"),c="",l=!1,h=0;h<t.length;h++){var u=t[h];if("string"==typeof u)c+=P(u),l=h===t.length-1&&s.indexOf(u[u.length-1])>-1;else{var p=P(u.prefix),d=u.repeat?"(?:"+u.pattern+")(?:"+p+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?c+=p+"("+d+")?":c+="(?:"+p+"("+d+"))?":c+=p+"("+d+")"}}return r?(o||(c+="(?:"+i+")?"),c+="$"===a?"$":"(?="+a+")"):(o||(c+="(?:"+i+"(?="+a+"))?"),l||(c+="(?="+i+"|"+a+")")),new RegExp("^"+c,k(n))}(function(t,e){for(var n,o=[],r=0,i=0,s="",a=e&&e.delimiter||R,c=e&&e.delimiters||E,l=!1;null!==(n=O.exec(t));){var h=n[0],u=n[1],p=n.index;if(s+=t.slice(i,p),i=p+h.length,u)s+=u[1],l=!0;else{var d="",f=t[i],m=n[2],g=n[3],v=n[4],y=n[5];if(!l&&s.length){var w=s.length-1;c.indexOf(s[w])>-1&&(d=s[w],s=s.slice(0,w))}s&&(o.push(s),s="",l=!1);var b=""!==d&&void 0!==f&&f!==d,x="+"===y||"*"===y,A="?"===y||"*"===y,T=d||a,k=g||v;o.push({name:m||r++,prefix:d,delimiter:T,optional:A,repeat:x,partial:b,pattern:k?S(k):"[^"+P(T)+"]+?"})}}return(s||i<t.length)&&o.push(s+t.substr(i)),o}(t,n),e,n)}(t,e,n)}const L={},D=1e4;let U=0;class I{constructor(){this.unsubscribe=(()=>{}),this.componentProps={},this.exact=!1,this.group=null,this.groupIndex=null,this.routeRender=null,this.match=null}computeMatch(t){return t||(t=this.activeRouter.get("location").pathname),function(t,e={}){"string"==typeof e&&(e={path:e});const{path:n="/",exact:o=!1,strict:r=!1}=e,{re:i,keys:s}=function(t,e){const n=`${e.end}${e.strict}`,o=L[n]||(L[n]={}),r=JSON.stringify(t);if(o[r])return o[r];const i=[],s={re:C(t,i,e),keys:i};return U<D&&(o[r]=s,U+=1),s}(n,{end:o,strict:r}),a=i.exec(t);if(!a)return null;const[c,...l]=a,h=t===c;return o&&!h?null:{path:n,url:"/"===n&&""===c?"/":c,isExact:h,params:s.reduce((t,e,n)=>(t[e.name]=l[n],t),{})}}(t,{path:this.url,exact:this.exact,strict:!0})}componentWillLoad(){this.unsubscribe=this.activeRouter.subscribe(t=>(this.match=t?null:this.computeMatch(),this.match),this.group,this.groupIndex),this.group||(this.match=this.computeMatch())}componentDidUnload(){this.unsubscribe()}render(){if(!this.activeRouter||!this.match)return null;const e=Object.assign({},this.componentProps,{history:this.activeRouter.get("history"),match:this.match});if(this.routeRender)return this.routeRender(Object.assign({},e,{component:this.component}));if(this.component){const n=this.component;return t(n,Object.assign({},e))}}static get is(){return"stencil-route"}static get properties(){return{activeRouter:{context:"activeRouter"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},exact:{type:Boolean,attr:"exact"},group:{type:String,attr:"group"},groupIndex:{type:Number,attr:"group-index"},location:{context:"location"},match:{state:!0},routeRender:{type:"Any",attr:"route-render"},url:{type:"Any",attr:"url"}}}}function j(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)}function M(t,e){return j(t,e)?t.substr(e.length):t}function B(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function H(t){return"/"===t.charAt(0)?t:"/"+t}function N(t){return"/"===t.charAt(0)?t.substr(1):t}function $(t){const{pathname:e,search:n,hash:o}=t;let r=e||"/";return n&&"?"!==n&&(r+="?"===n.charAt(0)?n:`?${n}`),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:`#${o}`),r}function W(t){return"/"===t.charAt(0)}function F(t,e){for(let n=e,o=n+1,r=t.length;o<r;n+=1,o+=1)t[n]=t[o];t.pop()}function Y(t,e,n,o){let r;"string"==typeof t?(r=function(t){let e=t||"/",n="",o="";const r=e.indexOf("#");-1!==r&&(o=e.substr(r),e=e.substr(0,r));const i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===o?"":o}}(t)).state=e:(void 0===(r=Object.assign({},t)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==e&&void 0===r.state&&(r.state=e));try{r.pathname=decodeURI(r.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}var i;return n&&(r.key=n),o?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=function(t,e=""){const n=t&&t.split("/")||[];let o=e&&e.split("/")||[];const r=t&&W(t),i=e&&W(e),s=r||i;if(t&&W(t)?o=n:n.length&&(o.pop(),o=o.concat(n)),!o.length)return"/";let a;if(o.length){const t=o[o.length-1];a="."===t||".."===t||""===t}else a=!1;let c=0;for(let t=o.length;t>=0;t--){const e=o[t];"."===e?F(o,t):".."===e?(F(o,t),c++):c&&(F(o,t),c--)}if(!s)for(;c--;c)o.unshift("..");!s||""===o[0]||o[0]&&W(o[0])||o.unshift("");let l=o.join("/");return a&&"/"!==l.substr(-1)&&(l+="/"),l}(r.pathname,o.pathname)):r.pathname=o.pathname:r.pathname||(r.pathname="/"),r.query=(i=r.search)?(/^[?#]/.test(i)?i.slice(1):i).split("&").reduce((t,e)=>{let[n,o]=e.split("=");return t[n]=o?decodeURIComponent(o.replace(/\+/g," ")):"",t},{}):{},r}function q(t,...e){t||console.error(...e)}function z(t,...e){t||console.warn(...e)}const G=()=>{let t,e=[];return{setPrompt:e=>(z(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,n,o,r)=>{if(null!=t){const i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof o?o(i,r):(z(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),r(!0)):r(!1!==i)}else r(!0)},appendListener:t=>{let n=!0;const o=(...e)=>{n&&t(...e)};return e.push(o),()=>{n=!1,e=e.filter(t=>t!==o)}},notifyListeners:(...t)=>{e.forEach(e=>e(...t))}}},J=!("undefined"==typeof window||!window.document||!window.document.createElement),V=(t,e,n)=>t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n),K=(t,e,n)=>t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n),Q=(t,e)=>e(window.confirm(t)),X=()=>{try{return window.history.state||{}}catch(t){return{}}},Z={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+N(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:N,decodePath:H},slash:{encodePath:H,decodePath:H}},_=()=>{const t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},tt=t=>{const e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)},et={browser:(t={})=>{q(J,"Browser history needs a DOM");const e=window.history,n=(()=>{const t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history})(),o=!(()=>-1===window.navigator.userAgent.indexOf("Trident"))(),{forceRefresh:r=!1,getUserConfirmation:i=Q,keyLength:s=6}=t,a=t.basename?B(H(t.basename)):"",c=t=>{t=t||{};const{key:e,state:n}=t,{pathname:o,search:r,hash:i}=window.location;let s=o+r+i;return z(!a||j(s,a),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+s+'" to begin with "'+a+'".'),a&&(s=M(s,a)),Y(s,n,e)},l=()=>Math.random().toString(36).substr(2,s),h=G(),u=t=>{Object.assign(R,t),R.length=e.length,h.notifyListeners(R.location,R.action)},p=t=>{(t=>void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS"))(t)||m(c(t.state))},d=()=>{m(c(X()))};let f=!1;const m=t=>{if(f)f=!1,u();else{const e="POP";h.confirmTransitionTo(t,e,i,n=>{n?u({action:e,location:t}):g(t)})}},g=t=>{const e=R.location;let n=y.indexOf(e.key);-1===n&&(n=0);let o=y.indexOf(t.key);-1===o&&(o=0);const r=n-o;r&&(f=!0,b(r))},v=c(X());let y=[v.key];const w=t=>a+$(t),b=t=>{e.go(t)};let x=0;const A=t=>{1===(x+=t)?(V(window,"popstate",p),o&&V(window,"hashchange",d)):0===x&&(K(window,"popstate",p),o&&K(window,"hashchange",d))};let T=!1;const R={length:e.length,action:"POP",location:v,createHref:w,push:(t,o)=>{z(!("object"==typeof t&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const s=Y(t,o,l(),R.location);h.confirmTransitionTo(s,"PUSH",i,t=>{if(!t)return;const o=w(s),{key:i,state:a}=s;if(n)if(e.pushState({key:i,state:a},null,o),r)window.location.href=o;else{const t=y.indexOf(R.location.key),e=y.slice(0,-1===t?0:t+1);e.push(s.key),y=e,u({action:"PUSH",location:s})}else z(void 0===a,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=o})},replace:(t,o)=>{z(!("object"==typeof t&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const s=Y(t,o,l(),R.location);h.confirmTransitionTo(s,"REPLACE",i,t=>{if(!t)return;const o=w(s),{key:i,state:a}=s;if(n)if(e.replaceState({key:i,state:a},null,o),r)window.location.replace(o);else{const t=y.indexOf(R.location.key);-1!==t&&(y[t]=s.key),u({action:"REPLACE",location:s})}else z(void 0===a,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(o)})},go:b,goBack:()=>b(-1),goForward:()=>b(1),block:(t="")=>{const e=h.setPrompt(t);return T||(A(1),T=!0),()=>(T&&(T=!1,A(-1)),e())},listen:t=>{const e=h.appendListener(t);return A(1),()=>{A(-1),e()}}};return R},hash:(t={})=>{q(J,"Hash history needs a DOM");const e=window.history,n=(()=>-1===window.navigator.userAgent.indexOf("Firefox"))(),{getUserConfirmation:o=Q,hashType:r="slash"}=t,i=t.basename?B(H(t.basename)):"",{encodePath:s,decodePath:a}=Z[r],c=()=>{let t=a(_());return z(!i||j(t,i),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+i+'".'),i&&(t=M(t,i)),Y(t)},l=G(),h=t=>{Object.assign(R,t),R.length=e.length,l.notifyListeners(R.location,R.action)};let u=!1,p=null;const d=()=>{const t=_(),e=s(t);if(t!==e)tt(e);else{const t=c(),e=R.location;if(!u&&(ot=t,(nt=e).pathname===ot.pathname&&nt.search===ot.search&&nt.hash===ot.hash&&nt.key===ot.key&&function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every(function(e,o){return t(e,n[o])});const o=typeof e;if(o!==typeof n)return!1;if("object"===o){const o=e.valueOf(),r=n.valueOf();if(o!==e||r!==n)return t(o,r);const i=Object.keys(e),s=Object.keys(n);return i.length===s.length&&i.every(function(o){return t(e[o],n[o])})}return!1}(nt.state,ot.state)))return;if(p===$(t))return;p=null,f(t)}},f=t=>{if(u)u=!1,h();else{const e="POP";l.confirmTransitionTo(t,e,o,n=>{n?h({action:e,location:t}):m(t)})}},m=t=>{const e=R.location;let n=w.lastIndexOf($(e));-1===n&&(n=0);let o=w.lastIndexOf($(t));-1===o&&(o=0);const r=n-o;r&&(u=!0,b(r))},g=_(),v=s(g);g!==v&&tt(v);const y=c();let w=[$(y)];const b=t=>{z(n,"Hash history go(n) causes a full page reload in this browser"),e.go(t)};let x=0;const A=t=>{1===(x+=t)?V(window,"hashchange",d):0===x&&K(window,"hashchange",d)};let T=!1;const R={length:e.length,action:"POP",location:y,createHref:t=>"#"+s(i+$(t)),push:(t,e)=>{z(void 0===e,"Hash history cannot push state; it is ignored");const n=Y(t,void 0,void 0,R.location);l.confirmTransitionTo(n,"PUSH",o,t=>{if(!t)return;const e=$(n),o=s(i+e);if(_()!==o){p=e,(t=>window.location.hash=t)(o);const t=w.lastIndexOf($(R.location)),r=w.slice(0,-1===t?0:t+1);r.push(e),w=r,h({action:"PUSH",location:n})}else z(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),h()})},replace:(t,e)=>{z(void 0===e,"Hash history cannot replace state; it is ignored");const n=Y(t,void 0,void 0,R.location);l.confirmTransitionTo(n,"REPLACE",o,t=>{if(!t)return;const e=$(n),o=s(i+e);_()!==o&&(p=e,tt(o));const r=w.indexOf($(R.location));-1!==r&&(w[r]=e),h({action:"REPLACE",location:n})})},go:b,goBack:()=>b(-1),goForward:()=>b(1),block:(t="")=>{const e=l.setPrompt(t);return T||(A(1),T=!0),()=>(T&&(T=!1,A(-1)),e())},listen:t=>{const e=l.appendListener(t);return A(1),()=>{A(-1),e()}}};return R}};var nt,ot;class rt{constructor(){this.root="/",this.historyType="browser",this.titleSuffix="",this.unsubscribe=(()=>{}),this.match=null}titleSuffixChanged(t){this.activeRouter.set({titleSuffix:t})}computeMatch(t){return{path:this.root,url:this.root,isExact:t===this.root,params:{}}}componentWillLoad(){const t=et[this.historyType]();t.listen(t=>{this.activeRouter.set({location:this.getLocation(t)})}),this.activeRouter.set({location:this.getLocation(t.location),titleSuffix:this.titleSuffix,root:this.root,history:t}),this.unsubscribe=this.activeRouter.subscribe(()=>{this.match=this.computeMatch()}),this.match=this.computeMatch()}getLocation(t){const e=0==t.pathname.indexOf(this.root)?"/"+t.pathname.slice(this.root.length):t.pathname;return Object.assign({},t,{pathname:e})}componentDidUnload(){this.unsubscribe()}render(){return t("slot",null)}static get is(){return"stencil-router"}static get properties(){return{activeRouter:{context:"activeRouter"},historyType:{type:"Any",attr:"history-type"},match:{state:!0},root:{type:String,attr:"root"},titleSuffix:{type:String,attr:"title-suffix",watchCallbacks:["titleSuffixChanged"]}}}}export{c as MyApp,u as IonApp,v as IonCordovaPlatform,y as IonStatusTap,w as IonTapClick,I as StencilRoute,rt as StencilRouter};