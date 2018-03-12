/*! Built with http://stenciljs.com */
App.loadBundle("./chunk3.js", ["exports"], function (t) { window.App.h, window.App.Context; t.GestureController = /** @class */ (function () {
    function class_1() {
        this.gestureId = 0, this.requestedStart = new Map, this.disabledGestures = new Map, this.disabledScroll = new Set, this.capturedId = null;
    }
    class_1.prototype.createGesture = function (t, e, s) { return new /** @class */ (function () {
        function class_2(t, e, s, r, l) {
            this.gestureDelegateId = e, this.name = s, this.priority = r, this.disableScroll = l, this.ctrl = t;
        }
        class_2.prototype.canStart = function () { return !!this.ctrl && this.ctrl.canStart(this.name); };
        class_2.prototype.start = function () { return !!this.ctrl && this.ctrl.start(this.name, this.gestureDelegateId, this.priority); };
        class_2.prototype.capture = function () { if (!this.ctrl)
            return !1; var t = this.ctrl.capture(this.name, this.gestureDelegateId, this.priority); return t && this.disableScroll && this.ctrl.disableScroll(this.gestureDelegateId), t; };
        class_2.prototype.release = function () { this.ctrl && (this.ctrl.release(this.gestureDelegateId), this.disableScroll && this.ctrl.enableScroll(this.gestureDelegateId)); };
        class_2.prototype.destroy = function () { this.release(), this.ctrl = null; };
        return class_2;
    }())(this, this.newID(), t, e, s); };
    class_1.prototype.createBlocker = function (t) {
        if (t === void 0) { t = {}; }
        return new /** @class */ (function () {
            function class_3(t, e, s, r) {
                this.blockerDelegateId = t, this.disable = s, this.disableScroll = r, this.blocked = !1, this.ctrl = e;
            }
            class_3.prototype.block = function () { if (this.ctrl) {
                if (this.disable)
                    for (var _i = 0, _a = this.disable; _i < _a.length; _i++) {
                        var t_1 = _a[_i];
                        this.ctrl.disableGesture(t_1, this.blockerDelegateId);
                    }
                this.disableScroll && this.ctrl.disableScroll(this.blockerDelegateId), this.blocked = !0;
            } };
            class_3.prototype.unblock = function () { if (this.ctrl) {
                if (this.disable)
                    for (var _i = 0, _a = this.disable; _i < _a.length; _i++) {
                        var t_2 = _a[_i];
                        this.ctrl.enableGesture(t_2, this.blockerDelegateId);
                    }
                this.disableScroll && this.ctrl.enableScroll(this.blockerDelegateId), this.blocked = !1;
            } };
            class_3.prototype.destroy = function () { this.unblock(), this.ctrl = null; };
            return class_3;
        }())(this.newID(), this, t.disable, !!t.disableScroll);
    };
    class_1.prototype.newID = function () { return this.gestureId++; };
    class_1.prototype.start = function (t, e, s) { return this.canStart(t) ? (this.requestedStart.set(e, s), !0) : (this.requestedStart.delete(e), !1); };
    class_1.prototype.capture = function (t, e, s) { if (!this.start(t, e, s))
        return !1; var r = this.requestedStart; var l = -1e4; for (var _i = 0, _a = r.values(); _i < _a.length; _i++) {
        var t_3 = _a[_i];
        l = Math.max(l, t_3);
    } return l === s ? (this.capturedId = e, this.requestedStart.clear(), !0) : (r.delete(e), !1); };
    class_1.prototype.release = function (t) { this.requestedStart.delete(t), this.capturedId && t === this.capturedId && (this.capturedId = null); };
    class_1.prototype.disableGesture = function (t, e) { var s = this.disabledGestures.get(t); s || (s = new Set, this.disabledGestures.set(t, s)), s.add(e); };
    class_1.prototype.enableGesture = function (t, e) { var s = this.disabledGestures.get(t); s && s.delete(e); };
    class_1.prototype.disableScroll = function (t) { this.disabledScroll.add(t); };
    class_1.prototype.enableScroll = function (t) { this.disabledScroll.delete(t); };
    class_1.prototype.canStart = function (t) { return !this.capturedId && !this.isDisabled(t); };
    class_1.prototype.isCaptured = function () { return !!this.capturedId; };
    class_1.prototype.isScrollDisabled = function () { return this.disabledScroll.size > 0; };
    class_1.prototype.isDisabled = function (t) { var e = this.disabledGestures.get(t); return !!(e && e.size > 0); };
    return class_1;
}()), t.BLOCK_ALL = { disable: ["menu-swipe", "goback-swipe"], disableScroll: !0 }; });
