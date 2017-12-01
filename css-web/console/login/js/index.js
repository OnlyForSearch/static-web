!function (t) {
    function n(i) {
        if (e[i])

        var o = e[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(o.exports, o, o.exports, n),
            o.loaded = !0,
            o.exports
    }

    var e = {};
    return n.m = t, n.c = e, n.p = "", n(0)
}([
    function (t, n, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
                default: t
            }
    }

    function o() {
        var t = "http://" + window.location.host + window.location.pathname;
        if (!u(t)) {
            s();
            var n = new r.default(h);
            n.addItem(h.presaleCall[0], l),
                n.addItem(h.doctor[0], d),
                n.addItem(h.feedback[0])
        }
    }

    var a = e(2)
        , r = i(a);
    e(11),
        e(13);
    var c = e(10)
        , s = e(14)
        , u = e(15)
        , l = e(16)
        , d = e(17)
        , h = {};
    try {
        h = JSON.parse(c(".aliyun-common-xiaoyun-2017 textarea").text())
    } catch (t) {
        console.error("小云助手schema数据解析错误")
    }
    new o,
        t.exports = o
}
    , ,
    function (t, n, e) {
        "use strict";
        function i(t) {
            return t && t.__esModule ? t : {
                    default: t
                }
        }

        function o(t, n) {
            if (!(t instanceof n))
                throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
            n.default = void 0;
        var a = function () {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var i = n[e];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                    "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i)
                }
            }

            return function (n, e, i) {
                return e && t(n.prototype, e),
                i && t(n, i),
                    n
            }
        }()
            , r = e(3)
            , c = i(r)
            , s = e(4)
            , u = i(s)
            , l = e(10)
            , d = function () {
            function t() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                o(this, t),
                    this.outputObject = {},
                    this.schemaData = {},
                e && l(".module-wrap").addClass("debug"),
                    this.schemaData = n,
                    this.init(),
                    this.initEvent()
            }

            return a(t, [{
                key: "init",
                value: function () {
                    this.$boxContainer = l(".xiaoyun-help-entry"),
                        this.$xiaoyunPanel = l(".xiaoyun-panel"),
                        this.$content = this.$boxContainer.find(".panel-content"),
                        this.$boxContainer.css({
                            visibility: "visible"
                        }),
                        this.loadImg()
                }
            }, {
                key: "addItem",
                value: function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                            return !0
                        }
                        , e = t.whiteList;
                    n(e) && this.$content.append((0,
                        c.default)(t))
                }
            }, {
                key: "loadImg",
                value: function () {
                    var t = this.schemaData.advanceImg
                        , n = void 0 === t ? [] : t;
                    0 != n.length && (this.advanceImgBlock = new u.default(this.$boxContainer, n[0], {
                        sideWrapSelector: ".xxxxx"
                    }),
                        this.advanceImgBlock.loadImage())
                }
            }, {
                key: "initEvent",
                value: function () {
                    var t = this;
                    l("body").on("cloud-add-item", function (n, e) {
                        t.addItem(e)
                    });
                    var n = null;
                    this.$boxContainer.on("mouseenter", function (e) {
                        var i = l(e.target);
                        (i.hasClass("xiaoyun-entry-button") || i.parent().hasClass("xiaoyun-entry-button") || i.hasClass("xiaoyun-panel")) && (n && clearTimeout(n),
                            t.$boxContainer.addClass("active"))
                    }).on("mouseleave", function (e) {
                        n = setTimeout(function () {
                            t.$boxContainer.removeClass("active")
                        }, 250)
                    }),
                        this.$boxContainer.on("click", ".panel-close", function () {
                            t.$boxContainer.removeClass("active")
                        })
                }
            }]),
                t
        }();
        n.default = d,
            t.exports = n.default
    },
    function (module, exports) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __t, __p = "", __e = _.escape;
            with (obj)
                __p += '<li >\n          <div class="content-icon">\n            <img src="' + __e(logo) + '" alt="">\n          </div>\n          <div class="content-main">\n            <a target="_blank" href="' + __e(link) + '">\n              <div>\n                <div class="content-title">\n                  ' + __e(title) + '\n                </div>\n                <div class="content-desc">\n                  ' + (null == (__t = desc) ? "" : __t) + "\n                </div>\n              </div>\n            </a>\n          </div>\n        </li>";
            return __p
        }
    },
    function (t, n, e) {
        "use strict";
        function i(t) {
            return t && t.__esModule ? t : {
                    default: t
                }
        }

        function o(t, n) {
            if (!(t instanceof n))
                throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
            n.default = void 0;
        var a = function () {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var i = n[e];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                    "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i)
                }
            }

            return function (n, e, i) {
                return e && t(n.prototype, e),
                i && t(n, i),
                    n
            }
        }();
        e(5);
        var r = e(9)
            , c = i(r)
            , s = "xiaoyun_advance_image_storage"
            , u = e(10)
            , l = function () {
            function t(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                o(this, t),
                    this.imageData = e,
                    this.wrapNode = u(n),
                    this.configs = i;
                e.imgSrc,
                    e.imageLink
            }

            return a(t, [{
                key: "loadImage",
                value: function () {
                    var t = this.imageData
                        , n = t.imgSrc
                        , e = (t.imageLink,
                        this.configs.sideWrapSelector);
                    return n ? void (this.checkUserAction(n) || (this.el = u((0,
                            c.default)({
                            data: this.imageData
                        })),
                        this.wrapNode && (this.wrapNode.append(this.el),
                            this.wrapNode.find(e).hide(),
                            this.initEvent()))) : void console.log("imgSrc is not defined or empty")
                }
            }, {
                key: "checkUserAction",
                value: function (t) {
                    var n = sessionStorage.getItem(s);
                    return !!n && t == n
                }
            }, {
                key: "setUserAction",
                value: function (t) {
                    sessionStorage.setItem(s, t)
                }
            }, {
                key: "closeImage",
                value: function () {
                    var t = this.imageData
                        , n = t.imgSrc
                        , e = (t.imageLink,
                        this.configs.sideWrapSelector);
                    this.wrapNode && (this.el.remove(),
                        this.wrapNode.find(e).show(),
                        this.setUserAction(n))
                }
            }, {
                key: "initEvent",
                value: function () {
                    var t = this;
                    this.el.find(".advance-image-close").on("click", function () {
                        t.closeImage()
                    })
                }
            }]),
                t
        }();
        n.default = l,
            t.exports = n.default
    },
    function (t, n) { },
    , , ,
    function (module, exports) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __t, __p = "";
            with (obj)
                __p += '<div class="advance-image">\n  <a href="javascript:void(0);" class="advance-image-close"><img src="//img.alicdn.com/tfs/TB16TmMRpXXXXclXXXXXXXXXXXX-28-28.png" alt=""></a>\n  <a href="' + (null == (__t = data.link) ? "" : __t) + '" target="_blank" class="advance-image-content"><img src="' + (null == (__t = data.imgSrc) ? "" : __t) + '" /></a>\n</div>';
            return __p
        }
    },
    function (t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var e = window.jQuery || window.Zepto || window.$ || {};
        e.fn && (e.fn.on || (e.fn.on = e.fn.bind)),
            n.default = e,
            t.exports = n.default
    },
    function (t, n) { }
    , ,
    function (t, n) {
        "use strict";
        window._ || (window._ = {
            escape: function (t) {
                function n(t) {
                    return e[t]
                }

                var e = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "`": "&#96;"
                }
                    , i = /[&<>"'`]/g;
                return t = null == t ? "" : String(t),
                    t && (i.lastIndex = 0,
                        i.test(t)) ? t.replace(i, n) : t
            }
        }),
        Array.prototype.forEach || (Array.prototype.forEach = function (t, n) {
                var e, i;
                if (null == this)
                    throw new TypeError("this is null or not defined");
                var o = Object(this)
                    , a = o.length >>> 0;
                if ("function" != typeof t)
                    throw new TypeError(t + " is not a function");
                for (arguments.length > 1 && (e = n),
                         i = 0; i < a;) {
                    var r;
                    i in o && (r = o[i],
                        t.call(e, r, i, o)),
                        i++
                }
            }
        )
    },
    function (t, n, e) {
        "use strict";
        var i = e(10);
        t.exports = function () {
            var t = i(document);
            i(window).scroll(function () {
                return t.scrollTop() > 500 ? i("#J_gotoTop").show() : i("#J_gotoTop").hide()
            }),
                i("body").on("click", "#J_gotoTop", function () {
                    i(window).scrollTop(0)
                })
        }
    },
    function (t, n, e) {
        "use strict";
        e(10);
        window.CHCONFIG || (window.CHCONFIG = {});
        var i = ".com"
            , o = null
            , a = window.CHCONFIG.showXiaoYun || !1
            , r = ["^http://market.aliyun" + i, "^http://awdc.aliyun" + i + "$", "^http://buy.aliyun" + i + "$", "^http://buy.aliyun" + i + "/postpay_vm$", "^http://batest.gein.cn", "^http://aliyun.gein.cn", "^http://ba.hichina.com", "^http://icptest.gein.cn:8780", "^http://www.aliyun" + i + "/act/contactservice.html$", "^http://i.aliyun" + i, "^http://order.aliyun" + i, "^http://finance.aliyun" + i, "^http://buy.aliyun" + i, "^http://msc.aliyun" + i, "^http://message.aliyun" + i, "^http://bsn.aliyun" + i, "^http://workorder.aliyun" + i, "^http://yq.aliyun" + i, "^http://check.aliyun.com/domain/bulk-search/basic.htm$", "^http://check.aliyun.com/domain/bulk-search/advance.htm$"]
            , c = r.length;
        t.exports = function (t) {
            for (var n, e, i = 0; i < c; i++) {
                if (n = r[i],
                        e = new RegExp(n, ["i"]),
                    "/" == t.substr(t.length - 1) && (t = t.substring(0, t.length - 1)),
                        t.match(e))
                    return o = n,
                        !0;
                if (a)
                    return o = n,
                        !0
            }
            return !1
        }
    },
    function (t, n, e) {
        "use strict";
        var i = (e(10),
            [{
                host: "www.aliyun.com",
                pathname: "/"
            }]);
        t.exports = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i
                , n = window.location
                , e = n.host
                , o = n.pathname
                , a = !0;
            return t.forEach(function (t, n) {
                var i = t.host
                    , r = t.pathname;
                e === i && o === r && (a = !1)
            }),
                a
        }
    },
    function (t, n, e) {
        "use strict";
        var i = (e(10),
            [{
                host: "www.aliyun.com",
                pathname: "/"
            }]);
        t.exports = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i
                , n = window.location
                , e = n.host
                , o = n.pathname
                , a = !0;
            return t.forEach(function (t, n) {
                var i = t.host
                    , r = t.pathname;
                e === i && o === r && (a = !1)
            }),
                a
        }
    }
]);
