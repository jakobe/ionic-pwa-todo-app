/*! Built with http://stenciljs.com */
App.loadBundle("./chunk2.js", ["exports"], function (e) { function n(e) { return e.parentElement ? e.parentElement : e.parentNode && e.parentNode.host ? e.parentNode.host : null; } window.App.h, window.App.Context, e.getPageElement = function (e) { var t = e.closest("ion-tabs"); return t || (e.closest("ion-page,.ion-page,page-inner") || n(e)); }, e.debounce = function (e, n) {
    if (n === void 0) { n = 0; }
    var t;
    return function () {
        var o = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            o[_i] = arguments[_i];
        }
        clearTimeout(t), t = setTimeout.apply(void 0, [e, n].concat(o));
    };
}, e.applyStyles = function (e, n) { var t = Object.keys(n); if (e)
    for (var o = 0; o < t.length; o++)
        e.style[t[o]] = n[t[o]]; }, e.assert = function (e, n) { e || console.error(n); }, e.getElementReference = function (e, t) { return "child" === t ? e.firstElementChild : "parent" === t ? n(e) || e : "body" === t ? e.ownerDocument.body : "document" === t ? e.ownerDocument : "window" === t ? e.ownerDocument.defaultView : e; }, e.now = function (e) { return e.timeStamp || Date.now(); }, e.updateDetail = function (e, n) { var t = 0, o = 0; if (e) {
    var n_1 = e.changedTouches;
    if (n_1 && n_1.length > 0) {
        var e_1 = n_1[0];
        t = e_1.clientX, o = e_1.clientY;
    }
    else
        void 0 !== e.pageX && (t = e.pageX, o = e.pageY);
} n.currentX = t, n.currentY = o; }, e.domControllerAsync = function (e, n) { return new Promise(function (t) { e(function () { if (!n)
    return t(); Promise.resolve(n()).then(function () {
    var e = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
    }
    t(e);
}); }); }); }, e.playAnimationAsync = function (e) { return new Promise(function (n) { e.onFinish(function (e) { n(e); }), e.play(); }); }, e.getOrAppendElement = function (e) { var n = document.querySelector(e); if (n)
    return n; var t = document.createElement(e); return document.body.appendChild(t), t; }, e.pointerCoordX = function (e) { if (e) {
    var n_2 = e.changedTouches;
    if (n_2 && n_2.length > 0)
        return n_2[0].clientX;
    if (void 0 !== e.pageX)
        return e.pageX;
} return 0; }, e.pointerCoordY = function (e) { if (e) {
    var n_3 = e.changedTouches;
    if (n_3 && n_3.length > 0)
        return n_3[0].clientY;
    if (void 0 !== e.pageY)
        return e.pageY;
} return 0; }; });
