!function (t) {
    function r(e) {
        if (n[e])
            return n[e].exports;
        var i = n[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return t[e].call(i.exports, i, i.exports, r),
            i.loaded = !0,
            i.exports
    }

    var n = {};
    return r.m = t,
        r.c = n,
        r.p = "",
        r(0)
}([function (t, r, n) {
    "use strict";
    function e(t, r) {
        i(t)
    }

    function i(t) {
    }

    n(2);
    var o = jQuery(".aliyun-individuation-hook");
    o.each(function () {
        var t = jQuery(this).find("textarea.schemaData")
            , r = t.val()
            , n = JSON.parse(r);
        n && e(jQuery(this), n)
    }),
        t.exports = e
}
    , , function (t, r) {
    }
]);
KISSY.add("ali-mod/icandoit/0.0.2/index", ["node"], function (n, t) {
    function i() {
        this.init.apply(this, arguments)
    }

    var o = t("node");
    return i.prototype = {
        init: function (n, t) {
            var i = this;
            i._node = o.one(n),
                t ? i.loadData(t) : i.bindEvent()
        },
        loadData: function (n) {
        },
        bindEvent: function () {
        }
    },
        i
});