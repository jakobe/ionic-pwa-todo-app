/*! Built with http://stenciljs.com */
(function(appNamespace,publicPath){"use strict";
(function(publicPath){Context.activeRouter=function(){var e={},t={},n=0,i=[];return{set:function(t){e=Object.assign({},e,t),function(){for(var e=i,t=0;t<e.length;t++){(0,e[t])()}}()},get:function(t){return 0===Object.keys(e).length?{location:{pathname:Context.window.location.pathname,search:Context.window.location.search}}:t?e[t]:e},subscribe:function(e,r,o){if("function"!=typeof e)throw new Error("Expected listener to be a function.");r?function(e,i,r){t[i].listenerList[r]=e,t[i].listenerList.length===t[n].startLength&&t[i].groupedListener()}(e,r,o):i.push(e);var s=!0;return function(){if(s){if(r)!function(e,n){if(t[e].listenerList.splice(n,1),0===t[e].listenerList.length){var r=i.indexOf(t[e].groupedListener);i.splice(r,1),delete t[e]}}(r,o);else{var n=i.indexOf(e);i.splice(n,1)}s=!1}}},createGroup:function(e){return t[n+=1]={},t[n].startLength=e,t[n].listenerList=[],t[n].groupedListener=function(){var e=!1;t[n].listenerList.forEach(function(t){e?t(!0):e=null!==t(!1)})},i.push(t[n].groupedListener),n}}}();
})(publicPath);


(function(publicPath){function isCordova(){var n=window;return!!(n.cordova||n.PhoneGap||n.phonegap||n.Capacitor)}var IPAD="ipad",IPHONE="iphone",IOS="ios",WINDOWS_PHONE=["windows phone"],PLATFORM_CONFIGS=[{name:IPAD,isMatch:function(n,t){return isPlatformMatch(n,t,IPAD,[IPAD],WINDOWS_PHONE)}},{name:IPHONE,isMatch:function(n,t){return isPlatformMatch(n,t,IPHONE,[IPHONE],WINDOWS_PHONE)}},{name:IOS,settings:{mode:IOS,tabsHighlight:!1,statusbarPadding:isCordova()},isMatch:function(n,t){return isPlatformMatch(n,t,IOS,[IPHONE,IPAD,"ipod"],WINDOWS_PHONE)}},{name:"android",settings:{activator:"ripple",mode:"md"},isMatch:function(n,t){return isPlatformMatch(n,t,"android",["android","silk"],WINDOWS_PHONE)}},{name:"core",settings:{mode:"md"}}];function detectPlatforms(n,t,e,o){var r=e.filter(function(e){return e.isMatch&&e.isMatch(n,t)});return r.length||(r=e.filter(function(n){return n.name===o})),r}function isPlatformMatch(n,t,e,o,r){var i=queryParam(n,"ionicplatform");if(i)return i===e;if(t){t=t.toLowerCase();for(var a=0;a<o.length;a++)if(t.indexOf(o[a])>-1){for(var c=0;c<r.length;c++)if(t.indexOf(r[c])>-1)return!1;return!0}}return!1}function queryParam(n,t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var e=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(n);return e?decodeURIComponent(e[1].replace(/\+/g," ")):null}function isDef(n){return void 0!==n&&null!==n}function createConfigController(n,t){function e(e,o){var r=queryParam(window.location.href,"ionic"+e);if(isDef(r))return n[e]="true"===r||"false"!==r&&r;if(isDef(n[e]))return n[e];for(var i=null,a=0;a<t.length;a++)if((i=t[a].settings)&&isDef(i[e]))return i[e];return void 0!==o?o:null}return n=n||{},{get:e,getBoolean:function(n,t){var o=e(n);return null===o?void 0!==t&&t:"string"==typeof o?"true"===o:!!o},getNumber:function(n,t){var o=parseFloat(e(n));return isNaN(o)?void 0!==t?t:NaN:o}}}function createDomControllerClient(n,t,e){var o=[],r=[],i=function(t){return n.requestAnimationFrame(t)};function a(n,c,u,f){try{for(c=t();u=o.shift();)u(n);for(;(u=r.shift())&&(u(n),!(t()-c>8)););}catch(n){f=n}(e=o.length>0||r.length>0)&&i(a),f&&console.error(f)}return{read:function(n){o.push(n),e||(e=!0,i(a))},write:function(n){r.push(n),e||(e=!0,i(a))},raf:i}}var Ionic=window.Ionic=window.Ionic||{};if(!Context.dom){var now=function(){return window.performance.now()};Context.dom=createDomControllerClient(window,now)}Ionic.config=Context.config=createConfigController(Ionic.config,detectPlatforms(window.location.href,window.navigator.userAgent,PLATFORM_CONFIGS,"core")),Ionic.mode=Context.mode=document.documentElement.getAttribute("mode")||Context.config.get("mode","md"),document.documentElement.setAttribute("mode",Ionic.mode);
})(publicPath);
})("App","/build/app/");