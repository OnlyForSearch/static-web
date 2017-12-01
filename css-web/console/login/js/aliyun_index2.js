!function (t) {
    function n(o) {
        if (e[o])
            return e[o].exports;
        var i = e[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return t[o].call(i.exports, i, i.exports, n),
            i.loaded = !0,
            i.exports
    }

    var e = {};
    return n.m = t,
        n.c = e,
        n.p = "",
        n(0)
}([
    function (t, n, e) {
    "use strict";
    function o(t, n) {
        i(t)
    }

    function i(t) {
        a(".slide-animation").bind("animationend", function (t) {
            t.stopPropagation()
        });
        var n = s.get("login_aliyunid");
        r(n),
            c()
    }

    var a = window.jQuery;
    e(3),
        e(4),
        e(5),
        e(9),
        e(10);
    var r = e(11)
        , s = e(15).CookieHelper
        , c = e(16)
        , l = e(17)
        , m = a(".aliyun-common-topbar-2017");
    m.each(function () {
        var t = a(this).find("textarea.schemaData")
            , n = t.val()
            , i = JSON.parse(n);
        i && (a(".common-topbar-register-btn").attr("href", "//account.aliyun.com/register/register.htm?oauth_callback=" + encodeURIComponent(window.location.href)),
            a(".common-topbar-user-info-dropdown .logout-btn a").attr("href", "//account.aliyun.com/logout/logout.htm?oauth_callback=" + encodeURIComponent(window.location.href)),
            a("#common-topbar-login-btn a").attr("href", "//account.aliyun.com/login/login.htm?qrCodeFirst=false&oauth_callback=" + encodeURIComponent(window.location.href)),
            e(18)(i.allProduct),
            e(20)(i),
            e(23),
            o(a(this), i));
        new l
    }),
        t.exports = o
}
    , , ,
    function (t, n) {
        "use strict";
        /*!
         * jQuery Mousewheel 3.1.13
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         */
        !function (t) {
            t(jQuery)
        }(function (t) {
            function n(n) {
                var r = n || window.event
                    , s = c.call(arguments, 1)
                    , l = 0
                    , d = 0
                    , p = 0
                    , u = 0
                    , h = 0
                    , f = 0;
                if (n = t.event.fix(r),
                        n.type = "mousewheel",
                    "detail" in r && (p = r.detail * -1),
                    "wheelDelta" in r && (p = r.wheelDelta),
                    "wheelDeltaY" in r && (p = r.wheelDeltaY),
                    "wheelDeltaX" in r && (d = r.wheelDeltaX * -1),
                    "axis" in r && r.axis === r.HORIZONTAL_AXIS && (d = p * -1,
                        p = 0),
                        l = 0 === p ? d : p,
                    "deltaY" in r && (p = r.deltaY * -1,
                        l = p),
                    "deltaX" in r && (d = r.deltaX,
                    0 === p && (l = d * -1)),
                    0 !== p || 0 !== d) {
                    if (1 === r.deltaMode) {
                        var v = t.data(this, "mousewheel-line-height");
                        l *= v,
                            p *= v,
                            d *= v
                    } else if (2 === r.deltaMode) {
                        var _ = t.data(this, "mousewheel-page-height");
                        l *= _,
                            p *= _,
                            d *= _
                    }
                    if (u = Math.max(Math.abs(p), Math.abs(d)),
                        (!a || u < a) && (a = u,
                        o(r, u) && (a /= 40)),
                        o(r, u) && (l /= 40,
                            d /= 40,
                            p /= 40),
                            l = Math[l >= 1 ? "floor" : "ceil"](l / a),
                            d = Math[d >= 1 ? "floor" : "ceil"](d / a),
                            p = Math[p >= 1 ? "floor" : "ceil"](p / a),
                        m.settings.normalizeOffset && this.getBoundingClientRect) {
                        var b = this.getBoundingClientRect();
                        h = n.clientX - b.left,
                            f = n.clientY - b.top
                    }
                    return n.deltaX = d,
                        n.deltaY = p,
                        n.deltaFactor = a,
                        n.offsetX = h,
                        n.offsetY = f,
                        n.deltaMode = 0,
                        s.unshift(n, l, d, p),
                    i && clearTimeout(i),
                        i = setTimeout(e, 200),
                        (t.event.dispatch || t.event.handle).apply(this, s)
                }
            }

            function e() {
                a = null
            }

            function o(t, n) {
                return m.settings.adjustOldDeltas && "mousewheel" === t.type && n % 120 === 0
            }

            var i, a, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], c = Array.prototype.slice;
            if (t.event.fixHooks)
                for (var l = r.length; l;)
                    t.event.fixHooks[r[--l]] = t.event.mouseHooks;
            var m = t.event.special.mousewheel = {
                version: "3.1.12",
                setup: function () {
                    if (this.addEventListener)
                        for (var e = s.length; e;)
                            this.addEventListener(s[--e], n, !1);
                    else
                        this.onmousewheel = n;
                    t.data(this, "mousewheel-line-height", m.getLineHeight(this)),
                        t.data(this, "mousewheel-page-height", m.getPageHeight(this))
                },
                teardown: function () {
                    if (this.removeEventListener)
                        for (var e = s.length; e;)
                            this.removeEventListener(s[--e], n, !1);
                    else
                        this.onmousewheel = null;
                    t.removeData(this, "mousewheel-line-height"),
                        t.removeData(this, "mousewheel-page-height")
                },
                getLineHeight: function (n) {
                    var e = t(n)
                        , o = e["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                    return o.length || (o = t("body")),
                    parseInt(o.css("fontSize"), 10) || parseInt(e.css("fontSize"), 10) || 16
                },
                getPageHeight: function (n) {
                    return t(n).height()
                },
                settings: {
                    adjustOldDeltas: !0,
                    normalizeOffset: !0
                }
            };
            t.fn.extend({
                mousewheel: function (t) {
                    return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
                },
                unmousewheel: function (t) {
                    return this.unbind("mousewheel", t)
                }
            })
        })
    }
    ,
    function (t, n) {
        "use strict";
        !function (t) {
            t.fn.navScrollable = function (n) {
                return this.each(function () {
                    t(this).bind("mousewheel", function (n) {
                        t(this).scrollTop(t(this).scrollTop() - n.deltaFactor * n.deltaY),
                            n.stopPropagation(),
                            n.preventDefault()
                    })
                })
            }
        }(jQuery)
    }
    , function (t, n) {
    }
    , , , ,
    function (t, n) {
        "use strict";
        function e() {
            var t = navigator.userAgent.toLowerCase();
            return t.indexOf("msie") != -1 && parseInt(t.split("msie")[1])
        }

        var o = e()
            , i = location.pathname
            , a = location.host;
        o && o < 9 && "www.aliyun.com" == a && "/" == i && (window.location.href = "https://www.taobao.com/markets/tbhome/ali-page-updater")
    }
    ,
    function (t, n) {
        "use strict";
        !function (t) {
            function n(t) {
                0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                try {
                    return decodeURIComponent(t.replace(e, " "))
                } catch (t) {
                }
            }

            var e = /\+/g
                , o = {
                set: function (t, n, e) {
                    if ("number" == typeof e.expires) {
                        var o = new Date;
                        o.setTime(o.getTime() + 24 * e.expires * 60 * 60 * 1e3),
                            e.expires = o.toUTCString()
                    }
                    return document.cookie = [encodeURIComponent(t), "=", encodeURIComponent(n), e.expires ? "; expires=" + e.expires : "", e.path ? "; path=" + e.path : "", e.domain ? "; domain=" + e.domain : "", e.secure ? "; secure" : ""].join("")
                },
                get: function (t) {
                    for (var e, o = document.cookie ? document.cookie.split("; ") : [], i = 0, a = o.length; i < a; i++) {
                        var r = o[i].split("=")
                            , s = decodeURIComponent(r.shift())
                            , c = r.join("=");
                        if (t === s) {
                            e = n(c);
                            break
                        }
                    }
                    return e
                }
            };
            o.get("aliyun_choice") || o.set("aliyun_choice", "CN", {
                domain: ".aliyun.com",
                expires: 30,
                path: "/"
            }),
                t(".common-topbar-site-switch .topbar-site-switch-dropdown li").click(function () {
                    t(this).hasClass("current") && t(".common-topbar-site-switch").removeClass("active");
                    var n = t(this).attr("choice");
                    n && o.set("aliyun_choice", n, {
                        domain: ".aliyun.com",
                        expires: 30,
                        path: "/"
                    })
                }),
                t(".common-topbar-site-switch").mouseenter(function () {
                    t(".common-topbar-site-switch").addClass("active")
                }).mouseleave(function () {
                    t(".common-topbar-site-switch").removeClass("active")
                })
        }(jQuery)
    }
    , function (t, n, e) {
        "use strict";
        t.exports = function (t) {
            var n = window.jQuery;
            window.aliyun_global_observer && aliyun_global_observer.register("topbar", function (e) {
                if (200 == e.code) {
                    if ("www.aliyun.xin" == location.hostname)
                        return location.href = "https://www.aliyun.com";
                    var i = n(".common-topbar-register-btn")
                        , a = n("#common-topbar-login-btn")
                        , r = n(".common-topbar-user-info")
                        , s = n(".common-topbar-top .common-topbar-user-info")
                        , c = (n(".common-topbar-bottom .common-topbar-user-info"),
                        n(".common-topbar-user-info-dropdown"));
                    i.remove(),
                        a.remove(),
                    ("none" !== n(".common-topbar-bottom").css("display") || n(".common-topbar-bottom").is(":visible")) && s.remove();
                    var l = !1;
                    r.show().hover(function () {
                        c.css({
                            top: n(this).offset().top + n(this).outerHeight()
                        }),
                            c.show()
                    }).mouseleave(function () {
                        setTimeout(function () {
                            l || c.hide()
                        }, 600)
                    }),
                        c.mouseenter(function () {
                            l = !0
                        }).mouseleave(function () {
                            l = !1,
                                c.hide()
                        }),
                        n(".common-topbar-user-image-wrapper img").attr({
                            src: "https://account.aliyun.com/common/header.htm?username=" + t
                        });
                    var m = e.data;
                    try {
                        var d = parseInt(m.instanceCount.ecsUnExpiredCountBy7d, 10) + parseInt(m.instanceCount.rdsUnExpiredCountBy7d, 10)
                            , p = parseInt(m.unpaidOrderCount, 10)
                            , u = parseInt(m.messageCount, 10);
                        p < 0 && (p = 0);
                        var h = d + p + u;
                        d && n(".common-topbar-user-info-dropdown #topbar-instance-count").text(d > 99 ? "99+" : d),
                        p && n(".common-topbar-user-info-dropdown #topbar-unpayed-order-count").text(p > 99 ? "99+" : p),
                            h ? n(".common-topbar-user-info .common-topbar-user-message-count").html(h > 99 ? "99+" : h) : n(".common-topbar-user-info .common-topbar-user-message-count").hide(),
                        u && 0 != u && n(".common-topbar-user-info-dropdown #topbar-message-count").html(u > 99 ? "99+" : u),
                            n(".common-topbar-user-info-dropdown .user-uid").text(t),
                            n(".common-topbar-user-info-dropdown #topbar-prepay-money").text(m.prepayMoney ? "￥" + Number(m.prepayMoney).toFixed(2) : "￥0.00"),
                        m.userLevel && n(".common-topbar-user-info-dropdown .user-grade").html(m.userLevel.level || "L0"),
                            n(".common-topbar-user-info-dropdown #topbar-point-number").html(m.pointsNum),
                            m.certified ? (n(".common-topbar-user-info-dropdown .certified").show(),
                                    n(".common-topbar-user-info-dropdown .not-certified").hide()) : (n(".common-topbar-user-info-dropdown .certified").hide(),
                                    n(".common-topbar-user-info-dropdown .not-certified").show()),
                            o(m)
                    } catch (t) {
                        console.log(t)
                    }
                }
            });
            var o = function (t) {
                var o, i = t.bigCustomerInfo;
                i && ("" == i.technicalPhone && "" == i.technicalDingTalkId || i.bigCustomer || (o = e(12)({
                    info: i
                })),
                !i.bigCustomer || "" == i.technicalPhone && "" == i.technicalDingTalkId || (o = e(13)({
                    info: i
                })),
                i.bigCustomer && "" == i.technicalPhone && "" == i.technicalDingTalkId && (o = e(14)({
                    info: i
                })),
                o && n(".common-topbar-user-info-dropdown .top").after(o))
            }
        }
    }
    , function (module, exports) {
        module.exports = function (obj) {
            function print() {
                __p += __j.call(arguments, "")
            }

            obj || (obj = {});
            var __t, __p = "", __j = Array.prototype.join;
            with (obj)
                __p += '<div class="big-customer-info">\n  ',
                    "" != info.technicalPhone ? __p += '\n    <img src="//img.alicdn.com/tfs/TB1Xf5zQVXXXXcHXFXXXXXXXXXX-128-128.png">\n    专属技术经理&nbsp;' + (null == (__t = info.technicalPhone) ? "" : __t) + "\n  " : "" != info.technicalDingNick && (__p += '\n    <img src="//img.alicdn.com/tfs/TB1QQiVQVXXXXcPXXXXXXXXXXXX-128-128.png">\n    专属技术经理&nbsp;' + (null == (__t = info.technicalDingNick) ? "" : __t) + "\n  "),
                    __p += "\n</div>";
            return __p
        }
    }
    , function (module, exports) {
        module.exports = function (obj) {
            function print() {
                __p += __j.call(arguments, "")
            }

            obj || (obj = {});
            var __t, __p = "", __j = Array.prototype.join;
            with (obj)
                __p += '<div>\n  <div class="big-customer-info">\n    ',
                    "" != info.businessPhone ? __p += '\n      <img src="//img.alicdn.com/tfs/TB1Xf5zQVXXXXcHXFXXXXXXXXXX-128-128.png">\n      专属商务经理&nbsp;' + (null == (__t = info.businessPhone) ? "" : __t) + "\n    " : "" != info.businessDingNick && (__p += '\n      <img src="//img.alicdn.com/tfs/TB1QQiVQVXXXXcPXXXXXXXXXXXX-128-128.png">\n      专属商务经理&nbsp;' + (null == (__t = info.businessDingNick) ? "" : __t) + "\n    "),
                    __p += '\n  </div>\n  <div class="big-customer-info">\n    ',
                    "" != info.technicalPhone ? __p += '\n      <img src="//img.alicdn.com/tfs/TB1Xf5zQVXXXXcHXFXXXXXXXXXX-128-128.png">\n      专属技术经理&nbsp;' + (null == (__t = info.technicalPhone) ? "" : __t) + "\n    " : "" != info.technicalDingNick && (__p += '\n      <img src="//img.alicdn.com/tfs/TB1QQiVQVXXXXcPXXXXXXXXXXXX-128-128.png">\n      专属技术经理&nbsp;' + (null == (__t = info.technicalDingNick) ? "" : __t) + "\n    "),
                    __p += "\n  </div>\n</div>";
            return __p
        }
    }
    , function (module, exports) {
        module.exports = function (obj) {
            function print() {
                __p += __j.call(arguments, "")
            }

            obj || (obj = {});
            var __t, __p = "", __j = Array.prototype.join;
            with (obj)
                __p += '<div>\n  <div class="big-customer-info">\n    ',
                    "" != info.businessPhone ? __p += '\n      <img src="//img.alicdn.com/tfs/TB1Xf5zQVXXXXcHXFXXXXXXXXXX-128-128.png">\n      专属商务经理&nbsp;' + (null == (__t = info.businessPhone) ? "" : __t) + "\n    " : "" != info.businessDingNick && (__p += '\n      <img src="//img.alicdn.com/tfs/TB1QQiVQVXXXXcPXXXXXXXXXXXX-128-128.png">\n      专属商务经理&nbsp;' + (null == (__t = info.businessDingNick) ? "" : __t) + "\n    "),
                    __p += '\n  </div>\n  <div class="big-customer-info">\n    <img src="//img.alicdn.com/tfs/TB1gnK6QVXXXXXnXXXXXXXXXXXX-128-128.png">\n    专属技术经理&nbsp;<a href="//www.aliyun.com/support/techsupport">了解企业服务</a>\n  </div>\n</div>';
            return __p
        }
    }
    , function (t, n) {
        "use strict";
        function e(t, n, e) {
            var o = s(t);
            if (0 === o.length || !o.is(":visible") || o.hasClass("slide-in") || o.hasClass("slide-out"))
                return !1;
            var i = o.offset();
            return i.left - 1 <= n && i.left + o.outerWidth() + 2 >= n && i.top - 1 <= e && i.top + o.outerHeight() + 2 >= e
        }

        function o(t) {
            var n = !1
                , e = "Webkit Moz ms O".split(" ")
                , o = document.createElement("div")
                , i = null;
            if (t = t.toLowerCase(),
                void 0 !== o.style[t] && (n = !0),
                n === !1) {
                i = t.charAt(0).toUpperCase() + t.substr(1);
                for (var a = 0; a < e.length; a++)
                    if (void 0 !== o.style[e[a] + i]) {
                        n = !0;
                        break
                    }
            }
            return n
        }

        function i() {
            var t, n = document.createElement("fakeelement"), e = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (t in e)
                if (void 0 !== n.style[t])
                    return e[t]
        }

        function a() {
            var t, n = document.createElement("fakeelement"), e = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
            for (t in e)
                if (void 0 !== n.style[t])
                    return e[t]
        }

        function r(t) {
            var n = document.getElementsByTagName("head").item(0)
                , e = document.createElement("link");
            e.href = t,
                e.rel = "stylesheet",
                e.type = "text/css",
                e.id = "loadCss",
                n.appendChild(e)
        }

        var s = window.jQuery
            , c = i();
        s(".button").click(function () {
            s(this).addClass("animate"),
                s(this).one(c, function (t) {
                })
        });
        var l = function () {
            var t = [];
            return function (n, e, i) {
                if (window.waitting = !0,
                        o("animation")) {
                    var r = i ? s.fn.one : s.fn.bind;
                    (i || t.indexOf(e) < 0) && r.call(s(n), a(), function (t) {
                        e.call(this, t),
                            window.waitting = !1
                    }),
                    !i && t.indexOf(e) < 0 && t.push(e)
                } else
                    e()
            }
        }()
            , m = function () {
            var t = [];
            return function (n, e, a) {
                if (window.waitting = !0,
                        o("transition")) {
                    var r = a ? s.fn.one : s.fn.bind;
                    (a || t.indexOf(e) < 0) && r.call(s(n), i(), function (t) {
                        e.call(this, t),
                            window.waitting = !1
                    }),
                    !a && t.indexOf(e) < 0 && t.push(e)
                } else
                    e()
            }
        }()
            , d = {
            set: function (t, n, e) {
                if ("number" == typeof e.expires) {
                    var o = new Date;
                    o.setTime(o.getTime() + 24 * e.expires * 60 * 60 * 1e3),
                        e.expires = o.toUTCString()
                }
                return document.cookie = [encodeURIComponent(t), "=", encodeURIComponent(n), e.expires ? "; expires=" + e.expires : "", e.path ? "; path=" + e.path : "", e.domain ? "; domain=" + e.domain : "", e.secure ? "; secure" : ""].join("")
            },
            get: function (t) {
                for (var n, e = document.cookie ? document.cookie.split("; ") : [], o = 0, i = e.length; o < i; o++) {
                    var a = e[o].split("=")
                        , r = decodeURIComponent(a.shift())
                        , s = a.join("=");
                    if (t === r) {
                        var c = function (t) {
                                var n = /\+/g;
                                0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                                try {
                                    return decodeURIComponent(t.replace(n, " "))
                                } catch (t) {
                                }
                            }
                            ;
                        n = c(s);
                        break
                    }
                }
                return n
            }
        };
        t.exports = {
            isInElement: e,
            afterAnimation: l,
            afterTransition: m,
            CookieHelper: d,
            loadCss: r
        }
    }
    , function (t, n, e) {
        "use strict";
        var o = e(15);
        t.exports = function () {
            var t = window.jQuery
                , n = location.pathname
                , e = location.host;
            "www.aliyun.com" == e && "/" == n && navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1 && t(".common-topbar-body").css({
                transition: "none"
            }),
            "www.aliyun.com" == e && 0 == n.indexOf("/solution/") && 3 == n.split("/").length && n.indexOf("/customer") < 0 && t(".common-topbar-body").removeClass("no-change"),
            "account.aliyun.com" == e && ("/login/login.htm" == n && (t(".common-topbar-bottom").hide(),
                t(".common-topbar-top .common-topbar-menu").hide()),
            "/register/register.htm" == n && (t(".common-topbar-bottom").hide(),
                t(".common-topbar-top .common-topbar-menu").hide())),
            "finance.aliyun.com" == e && ("/order/waitPaySuccess" != n && "/order/paySuccess" != n && "/order/payFailure" != n && "/order/pay" != n && "/order/list_pay.htm" != n && "/order/post_pay.htm" != n && "/order/list_post_pay.htm" != n && "/order/merge_pay.htm" != n || (t(".common-topbar-bottom").hide(),
                o.loadCss("//g.alicdn.com/??aliyun/www-dpl/0.5.51/knight/css/global.css"),
                setTimeout(function () {
                    var t = document.getElementsByTagName("head").item(0)
                        , n = document.createElement("style");
                    n.innerHTML = ".knight-footer-big{display: none !important;} a.uc-button {color: #fff;line-height: 38px;}",
                        t.appendChild(n)
                }, 500))),
            "et.aliyun.com" == e && 0 == n.indexOf("/brain/industry") && t(".common-topbar-body").removeClass("no-change")
        }
    }
    , function (t, n) {
        "use strict";
        var e = window.jQuery
            , o = function () {
                this.triggerElem = e(".common-topbar-top .dbl-icon-base-Search"),
                    this.searchElem = e(".common-topbar-top .search-input"),
                    this.bind()
            }
            ;
        o.prototype.bind = function () {
            var t = this;
            t.triggerElem.click(function (t) {
                e(this).parents(".common-topbar-search").hasClass("hover") ? e(this).parents(".common-topbar-search").removeClass("hover") : (e(this).parents(".common-topbar-search").addClass("hover"),
                        e(this).parents(".common-topbar-search").find(".search-input").focus())
            }),
                t.searchElem.blur(function (t) {
                    var n = this;
                    setTimeout(function () {
                        e(n).parents(".common-topbar-search").removeClass("hover")
                    }, 100)
                }).keydown(function (t) {
                    if (13 == t.keyCode)
                        if (0 == e.trim(e(this).val()).length) {
                            var n = e(this).attr("placeholder");
                            if (n && n.length > 0) {
                                var o = e.trim(n);
                                if (0 === o.indexOf("【新产品】")) {
                                    var i = o.slice(5);
                                    i && i.length > 0 && (n = e.trim(i))
                                }
                            }
                            window.location.href = "https://www.aliyun.com/ss/?k=" + n
                        } else
                            window.location.href = "https://www.aliyun.com/ss/?k=" + e(this).val()
                })
        }
            ,
            t.exports = o
    }
    , function (t, n, e) {
        "use strict";
        t.exports = function (t) {
            function n(n) {
                for (var o = t, a = i(".common-topbar-dropdown-all-product .all-product-column-wrapper"), r = [], s = e(19), c = 0; c < o.length; c++) {
                    var l = o[c].coordinates[n - 4]
                        , m = l.column
                        , d = l.line
                        , p = r[m - 1] ? r[m - 1] : r[m - 1] = i('<div class="product-column"></div>')
                        , u = p.find(".product-item")
                        , h = i(s(o[c]));
                    1 == d ? h.prependTo(p) : u.length >= d ? h.insertBefore(u[d - 1]) : h.appendTo(p),
                    i(".common-topbar-body").hasClass("active") && h.find(".animate-text").addClass("show")
                }
                a.empty();
                for (var c = 0; c < n; c++)
                    r[c].find(".animate-text").each(function (t, n) {
                        i(n).attr("data-index", t)
                    }),
                        a.append(r[c])
            }

            var o, i = window.jQuery, a = i(window).width(), r = 1281, s = 1724;
            n(a < r ? 4 : a < s ? 5 : 6),
                i(window).resize(function () {
                    o = i(window).width(),
                        a >= s && o < s || a < r && o >= r ? n(5) : a >= r && o < r ? n(4) : a < s && o >= s && n(6),
                        a = o
                })
        }
    }
    , function (module, exports) {
        module.exports = function (obj) {
            function print() {
                __p += __j.call(arguments, "")
            }

            obj || (obj = {});
            var __t, __p = "", __j = Array.prototype.join;
            with (obj) {
                if (__p += '<div class="product-item">\n  <div class="product-item-title animate-text">' + (null == (__t = name) ? "" : __t) + "</div>\n  <ul>\n    ",
                    subItems && subItems.length) {
                    __p += "\n      ";
                    for (var i = 0; i < subItems.length; i++)
                        __p += '\n        <li class="animate-text">\n          <a target="_blank" href="' + (null == (__t = subItems[i].link) ? "" : __t) + '">\n            ' + (null == (__t = subItems[i].name) ? "" : __t) + "\n            ",
                        "new" == subItems[i].tip && (__p += '\n              <img style="width: 28px; margin-left: 2px;vertical-align: text-bottom;" src="//img.alicdn.com/tps/TB1pS2YMVXXXXcCaXXXXXXXXXXX-56-24.png">\n            '),
                            __p += "\n            ",
                        "hot" == subItems[i].tip && (__p += '\n              <img style="width: 28px; margin-left: 2px;vertical-align: text-bottom;" src="//img.alicdn.com/tps/TB1nusxPXXXXXb0aXXXXXXXXXXX-56-24.png">\n            '),
                            __p += "\n          </a>\n        </li>\n      ";
                    __p += '\n      <li class="animate-text line"></li>\n    '
                }
                __p += "\n  </ul>\n</div>"
            }
            return __p
        }
    }
    , function (t, n, e) {
        "use strict";
        var o = window.jQuery
            , i = {
            tpl1: e(21),
            tpl2: e(22)
        };
        t.exports = function (t) {
            var n = t.allNav;
            n.forEach(function (n) {
                var e = n.tplType
                    , a = n.key
                    , r = t[e]
                    , s = r.filter(function (t) {
                    return t.key === a
                });
                s && s.length && o(i[e](s[0])).attr("id", "topbar-" + a).appendTo(".common-topbar-all-nav-dropdown")
            })
        }
    }
    , function (module, exports) {
        module.exports = function (obj) {
            function print() {
                __p += __j.call(arguments, "")
            }

            obj || (obj = {});
            var __t, __p = "", __j = Array.prototype.join;
            with (obj) {
                __p += '<div>\n  <div class="common-topbar-level1-content">\n    <div class="level-inner">\n      ';
                for (var i = 0; i < content.length; i++) {
                    if (__p += '\n        <div class="slide-animation title-text">\n          ',
                            __p += content[i].link ? '\n            <a href="' + (null == (__t = content[i].link) ? "" : __t) + '" target="_blank">' + (null == (__t = content[i].name) ? "" : __t) + "</a>\n          " : "\n            " + (null == (__t = content[i].name) ? "" : __t) + "\n          ",
                            __p += " \n        </div>\n        ",
                            content[i].subItems) {
                        __p += "\n        <ul>\n          ";
                        for (var j = 0; j < content[i].subItems.length; j++)
                            __p += '\n            <li class="slide-animation higher-text">\n              <a href="' + (null == (__t = content[i].subItems[j].link) ? "" : __t) + '" target="_blank">\n                ' + (null == (__t = content[i].subItems[j].name) ? "" : __t) + "\n                ",
                            "new" == content[i].subItems[j].tip && (__p += '\n                  <img style="width: 28px; margin-left: 2px;" src="//img.alicdn.com/tps/TB1pS2YMVXXXXcCaXXXXXXXXXXX-56-24.png">\n                '),
                                __p += "\n                ",
                            "hot" == content[i].subItems[j].tip && (__p += '\n                  <img style="width: 28px; margin-left: 2px;" src="//img.alicdn.com/tps/TB1nusxPXXXXXb0aXXXXXXXXXXX-56-24.png">\n                '),
                                __p += "\n              </a>\n            </li>\n          ";
                        __p += "\n        </ul>\n        "
                    }
                    __p += '\n        <div class="space-line slide-animation"></div>\n      '
                }
                __p += "\n    </div>\n  </div>\n</div>"
            }
            return __p
        }
    }
    , function (module, exports) {
        module.exports = function (obj) {
            function print() {
                __p += __j.call(arguments, "")
            }

            obj || (obj = {});
            var __t, __p = "", __j = Array.prototype.join;
            with (obj) {
                __p += '<div>\n  <div class="common-topbar-level1-content common-topbar-level2-nav">\n    <div class="level-inner">\n      <ul>\n        ';
                for (var i = 0; i < content.length; i++)
                    __p += '\n          <li class="slide-animation inner-text">' + (null == (__t = content[i].name) ? "" : __t) + '<i class="dbl-icon-base-arrow-right icon-indicator"></i></li>\n        ';
                __p += "\n      </ul>\n    </div>\n  </div>\n  ";
                for (var i = 0; i < content.length; i++) {
                    if (__p += '\n    <div class="' + (null == (__t = content[i].relavant && content[i].relavant.length ? "common-topbar-leve2-content expand" : "common-topbar-leve2-content") ? "" : __t) + '">\n      <div class="common-topbar-detail-list">\n        <div class="level-inner">\n          <div class="slide-animation bg-title-text">\n            ',
                            __p += content[i].link ? '\n              <a href="' + (null == (__t = content[i].link) ? "" : __t) + '">' + (null == (__t = content[i].name) ? "" : __t) + "</a>\n            " : "\n              " + (null == (__t = content[i].name) ? "" : __t) + "\n            ",
                            __p += "\n          </div>\n          <ul>\n            ",
                            content[i].complexSubItems) {
                        __p += "\n              ";
                        for (var r = 0; r < content[i].complexSubItems.length; r++)
                            __p += "\n                ",
                                content[i].complexSubItems[r].description ? (__p += '\n                  <li class="slide-animation content-wrapper" style="margin-bottom: 4px;">\n                    <div>\n                      <div class="content-name" style="line-height: 24px;">\n                        <a href="' + (null == (__t = content[i].complexSubItems[r].link) ? "" : __t) + '" target="_blank" style="display:block;">\n                          ' + (null == (__t = content[i].complexSubItems[r].name) ? "" : __t) + "\n                          ",
                                    "new" == content[i].complexSubItems[r].tip && (__p += '\n                            <img style="width: 28px; margin-left: 2px;" src="//img.alicdn.com/tps/TB1pS2YMVXXXXcCaXXXXXXXXXXX-56-24.png">\n                          '),
                                        __p += "\n                          ",
                                    "hot" == content[i].complexSubItems[r].tip && (__p += '\n                            <img style="width: 28px; margin-left: 2px;" src="//img.alicdn.com/tps/TB1nusxPXXXXXb0aXXXXXXXXXXX-56-24.png">\n                          '),
                                        __p += '\n                        </a>\n                      </div>\n                      <div class="content-description">' + (null == (__t = content[i].complexSubItems[r].description) ? "" : __t) + '</div>\n                      <div class="content-child">' + (null == (__t = content[i].complexSubItems[r].child) ? "" : __t) + "</div>\n                    </div>\n                  </li>\n                ") : __p += '\n                  <li class="slide-animation sub-content-title"><div>' + (null == (__t = content[i].complexSubItems[r].name) ? "" : __t) + "</div></li>\n                 ",
                                __p += "\n              ";
                        __p += "\n            "
                    }
                    if (__p += "\n            ",
                            content[i].subItems) {
                        __p += "\n              ";
                        for (var j = 0; j < content[i].subItems.length; j++)
                            __p += '\n                <li class="slide-animation content-wrapper">\n                  <a class="content-link" href="' + (null == (__t = content[i].subItems[j].link) ? "" : __t) + '" target="_blank">\n                    <div class="content-name">\n                      ' + (null == (__t = content[i].subItems[j].name) ? "" : __t) + "\n                      ",
                            "new" == content[i].subItems[j].tip && (__p += '\n                        <img style="width: 28px; margin-left: 2px;" src="//img.alicdn.com/tps/TB1pS2YMVXXXXcCaXXXXXXXXXXX-56-24.png">\n                      '),
                                __p += "\n                      ",
                            "hot" == content[i].subItems[j].tip && (__p += '\n                        <img style="width: 28px; margin-left: 2px;" src="//img.alicdn.com/tps/TB1nusxPXXXXXb0aXXXXXXXXXXX-56-24.png">\n                      '),
                                __p += '\n                    </div>\n                    <div class="content-description">' + (null == (__t = content[i].subItems[j].description) ? "" : __t) + "</div>\n                  </a>\n                </li>\n              ";
                        __p += "\n            "
                    }
                    if (__p += "\n          </ul>\n        </div>\n      </div>\n      ",
                        content[i].relavant && content[i].relavant.length) {
                        if (__p += '\n      <div class="common-topbar-relevant-list">\n        <div class="level-inner">\n          ',
                                content[i].relavant) {
                            __p += "\n            ";
                            for (var k = 0; k < content[i].relavant.length; k++)
                                __p += '\n              <div class="relavant-title">' + (null == (__t = content[i].relavant[k].name) ? "" : __t) + '</div>\n              <div class="space-line slide-animation"></div>\n              <div>' + (null == (__t = content[i].relavant[k].content) ? "" : __t) + "</div>\n            ";
                            __p += " \n          "
                        }
                        __p += "\n        </div>\n      </div>\n      "
                    }
                    __p += "\n    </div>\n  "
                }
                __p += "\n</div>"
            }
            return __p
        }
    }
    , function (t, n, e) {
        "use strict";
        var o, i, a, r = window.jQuery, s = e(15).isInElement, c = e(24), l = e(25), m = new c, d = new l;
        r(".common-topbar-body").bind("mousemove", function (t) {
            i = t.pageY || t.clientY,
                o = t.pageX || t.clientX,
                m.isInTriggerArea(o, i) ? a = setTimeout(function () {
                        m.isInTriggerArea(o, i) && r(".common-topbar-body").hasClass("active") && (m.expand(),
                            d.hide())
                    }, 90) : d.isInTriggerArea(o, i) ? a = setTimeout(function () {
                            d.isInTriggerArea(o, i) && r(".common-topbar-body").hasClass("active") && (d.expand(),
                                m.hide())
                        }, 160) : m.isInTriggerArea(o, i) || m.isInContentArea(o, i) || d.isInTriggerArea(o, i) || d.isInContentArea(o, i) || (a = setTimeout(function () {
                            m.isInTriggerArea(o, i) || m.isInContentArea(o, i) || d.isInTriggerArea(o, i) || d.isInContentArea(o, i) || (m.contract(),
                                d.contract())
                        }, 160))
        }).bind("mouseleave", function (t) {
            var n = t.pageX || t.clientX
                , e = t.pageY || t.clientY;
            (n < 0 || !s(".common-topbar-level1-nav", n, e) && !s(".common-topbar-level1-content", n, e) && !s(".common-topbar-level2-content", n, e)) && (m.contract(),
                d.contract(),
                r(".common-topbar-body").removeClass("active"))
        }).mouseenter(function () {
            r(".common-topbar-body").addClass("active")
        })
    }
    , function (t, n, e) {
        "use strict";
        var o = window.jQuery
            , i = e(15)
            , a = (i.afterTransition,
                i.afterAnimation)
            , r = i.isInElement
            , s = function () {
                this.active = !1,
                    this.triggerElem = o(".all-nav"),
                    this.contentElem = o(".common-topbar-all-nav-dropdown"),
                    this.bind()
            }
            ;
        s.prototype.bind = function () {
            var t = this
                , n = (this.contentElem.find(".common-topbar-level1-nav li"),
                    function (n, e, i, a) {
                        function s() {
                            var t, n, i = !1;
                            return e.each(function (e, a) {
                                r(o(a), c, l) && (i = !0,
                                    t = e,
                                    n = a)
                            }),
                            !!i && {
                                node: n,
                                idx: t,
                                x: c,
                                y: l
                            }
                        }

                        var c, l, m = null, d = null;
                        t.contentElem.mousemove(function (e) {
                            l = e.pageY || e.clientY,
                                c = e.pageX || e.clientX;
                            var p = s();
                            null !== d && d.idx !== p.idx && (d = null ),
                                r(n, c, l) ? (null === m ? p ? i.call(t, p.idx) : a.call(t) : p.idx !== m.idx && (d = p,
                                            setTimeout(function () {
                                                null !== d && (d && r(o(d.node), c, l) ? i.call(t, d.idx) : d !== !1 || s() || a.call(t)),
                                                    d = null
                                            }, d === !1 ? 300 : 200)),
                                        m = p) : (m = null ,
                                        d = null )
                        })
                    }
            );
            this.contentElem.find(".common-topbar-level1-nav").each(function (e, i) {
                n(o(i), o(i).find("li"), t.activateFirstLevelContent, t.deactivateFirstLevelContent)
            }),
                this.contentElem.find(".common-topbar-level2-nav").each(function (e, i) {
                    n(o(i), o(i).find("li"), t.activateSecondLevelContent, t.deactivateSecondLevelContent)
                }),
                this.contentElem.find(".level-inner").navScrollable()
        }
            ,
            s.prototype.isInTriggerArea = function (t, n) {
                return r(this.triggerElem, t, n)
            }
            ,
            s.prototype.isInContentArea = function (t, n) {
                var e = this.contentElem.find(".common-topbar-level1-nav.active")
                    , o = this.contentElem.find(".common-topbar-level1-content.active")
                    , i = this.contentElem.find(".common-topbar-leve2-content.active");
                return r(e, t, n) || r(o, t, n) || r(i, t, n)
            }
            ,
            s.prototype.expand = function () {
                if (!this.active) {
                    this.active = !0,
                        this.triggerElem.addClass("active"),
                        this.contentElem.addClass("active");
                    var t = o(window).height() - this.triggerElem[0].getBoundingClientRect().bottom;
                    this.contentElem.css({
                        height: t
                    });
                    var n = this.contentElem.find(".common-topbar-level1-nav");
                    n.addClass("active slide-in"),
                        a(n, function () {
                            n.removeClass("slide-in")
                        }, !0)
                }
            }
            ,
            s.prototype.contract = function () {
                if (this.active) {
                    this.active = !1;
                    var t = this.contentElem.find(".common-topbar-level1-nav")
                        , n = o(".common-topbar-level1-content.active")
                        , e = this
                        , i = function () {
                            t.addClass("slide-out"),
                                a(t, function () {
                                    e.hide()
                                }, !0)
                        }
                        ;
                    n.length ? this.deactivateFirstLevelContent(i) : i()
                }
            }
            ,
            s.prototype.hide = function () {
                this.active = !1,
                    this.triggerElem.removeClass("active"),
                    this.contentElem.removeClass("active"),
                    this.contentElem.find(".common-topbar-level1-nav").removeClass("active slide-in slide-out"),
                    this.contentElem.find(".common-topbar-level1-content").removeClass("active slide-in slide-out"),
                    this.contentElem.find(".common-topbar-leve2-content").removeClass("active slide-in slide-out"),
                    this.contentElem.find("li").removeClass("active")
            }
            ,
            s.prototype.activateFirstLevelContent = function (t) {
                var n = (this.contentElem.find(".common-topbar-level1-content"),
                    this.contentElem.find(".common-topbar-level1-content.active"))
                    , e = this.contentElem.find(".common-topbar-level1-nav li")
                    , i = o("#topbar-" + o(e[t]).data("key") + " .common-topbar-level1-content");
                n[0] !== i[0] && !this.contentElem.find(".common-topbar-level1-nav").hasClass("slide-in slide-out") && o(".common-topbar-body").hasClass("active") && (o(e.removeClass("active")[t]).addClass("active"),
                    n.length > 0 ? (n.removeClass("active"),
                            i.addClass("active"),
                        n.hasClass("common-topbar-level2-nav") && o(".common-topbar-leve2-content").hasClass("active") && (n.find("li").removeClass("active"),
                            this.deactivateSecondLevelContent())) : (i.addClass("active").addClass("slide-in"),
                            a(i, function () {
                                i.removeClass("slide-in")
                            }, !0)))
            }
            ,
            s.prototype.deactivateFirstLevelContent = function (t) {
                var n = this.contentElem.find(".common-topbar-level1-content.active")
                    , e = this.contentElem.find(".common-topbar-leve2-content.active")
                    , o = this.contentElem.find(".common-topbar-level1-nav li");
                if (n.length) {
                    var i = function () {
                            n.addClass("slide-out"),
                                o.removeClass("active"),
                                a(n, function () {
                                    n.removeClass("slide-out active"),
                                    t && t()
                                }, !0)
                        }
                        ;
                    e.length ? this.deactivateSecondLevelContent(i) : i()
                }
            }
            ,
            s.prototype.activateSecondLevelContent = function (t) {
                var n = this.contentElem.find(".common-topbar-level1-content.active")
                    , e = n.siblings(".common-topbar-leve2-content")
                    , i = n.siblings(".common-topbar-leve2-content.active")
                    , r = o(e[t]);
                if (i[0] !== r[0]) {
                    var s = this.contentElem.find(".common-topbar-level2-nav.active li");
                    o(s.removeClass("active")[t]).addClass("active"),
                        i.length ? (i.removeClass("active"),
                                r.addClass("active")) : (r.addClass("active"),
                                r.addClass("slide-in"),
                                a(r, function () {
                                    r.removeClass("slide-in")
                                }, !0))
                }
            }
            ,
            s.prototype.deactivateSecondLevelContent = function (t) {
                var n = this.contentElem.find(".common-topbar-leve2-content.active")
                    , e = this.contentElem.find(".common-topbar-level2-nav.active li");
                e.removeClass("active"),
                    n.addClass("slide-out"),
                    a(n, function () {
                        n.removeClass("slide-out active"),
                        t && t()
                    }, !0)
            }
            ,
            t.exports = s
    }
    , function (t, n, e) {
        "use strict";
        var o = window.jQuery
            , i = e(15)
            , a = i.afterTransition
            , r = (i.afterAnimation,
            i.isInElement);
        e(26)();
        var s = function () {
                this.active = !1,
                    this.triggerElem = o(".common-topbar-nav-list"),
                    this.contentElem = o(".common-topbar-dropdown"),
                    this.bind()
            }
            ;
        s.prototype.bind = function () {
            var t = this;
            o(".common-topbar-body").bind("dropdown", function (n, e) {
                t.currentIdx = e,
                t.active && e && t.switchContent(e)
            })
        }
            ,
            s.prototype.isInTriggerArea = function (t, n) {
                return r(this.triggerElem, t, n)
            }
            ,
            s.prototype.isInContentArea = function (t, n) {
                return r(this.contentElem, t, n)
            }
            ,
            s.prototype.expand = function () {
                if (!this.active && this.currentIdx) {
                    this.active = !0;
                    var t = this
                        , n = this.currentIdx
                        , e = o(this.triggerElem.find("li")[n - 1])
                        , i = o(".common-topbar-nav-list .line");
                    i.css({
                        width: e.outerWidth(),
                        left: e.position().left
                    }),
                        a(i, function () {
                            t.active && i.addClass("show")
                        }, !0),
                        this.contentElem.show();
                    var r = this.dropDownContentCtrl(n)
                        , s = r.outerHeight();
                    this.contentElem.addClass("expand").css({
                        height: s
                    }),
                        0 == s ? this.contentElem.addClass("static") : a(this.contentElem, function () {
                                t.contentElem.addClass("static")
                            }, !0),
                        this.contentElem.find(".animate-text").addClass("show")
                }
            }
            ,
            s.prototype.contract = function () {
                if (this.active) {
                    var t = this;
                    o(".common-topbar-nav-list .line").css({
                        width: 0
                    });
                    var n = this.contentElem.height() < 5;
                    this.contentElem.css({
                        height: 0
                    }).removeClass("expand").removeClass("static"),
                        this.contentElem.find(".animate-text").removeClass("show"),
                        setTimeout(function () {
                            t.hide()
                        }, n ? 0 : 200)
                }
            }
            ,
            s.prototype.hide = function () {
                this.active = !1,
                    this.currentIdx = void 0,
                    this.contentElem.hide();
                var t = o(".common-topbar-nav-list .line");
                t.css({
                    width: 0
                }).removeClass("show"),
                    o(".common-topbar-dropdown-category-list").hide(),
                    o(".common-topbar-dropdown-all-product").hide(),
                    this.contentElem.css({
                        height: 0
                    }).removeClass("static expand"),
                    this.contentElem.find(".animate-text").removeClass("show")
            }
            ,
            s.prototype.dropDownContentCtrl = function (t) {
                var n = o(2 == t ? ".common-topbar-dropdown-all-product" : o(".common-topbar-dropdown-category-list")[1 == t ? 0 : t - 2]);
                return o(".common-topbar-dropdown-all-product").hide(),
                    o(".common-topbar-dropdown-category-list").hide(),
                    n.show(),
                    n
            }
            ,
            s.prototype.switchContent = function () {
                var t = o(".common-topbar-nav-list .line")
                    , n = o(this.triggerElem.find("li")[this.currentIdx - 1]);
                t.css({
                    width: n.outerWidth(),
                    left: n.position().left
                });
                var e = this;
                a(t, function () {
                    e.dropDownContentCtrl(e.currentIdx),
                        e.contentElem.css({
                            height: e.contentElem.find(".common-topbar-dropdown-inner").outerHeight()
                        })
                }, !0)
            }
            ,
            t.exports = s
    }
    , function (t, n) {
        "use strict";
        t.exports = function () {
            var t = window.jQuery
                , n = {
                coordinate: [],
                timer: {},
                el: {
                    tabsCoordinate: t(".common-topbar-nav-list li"),
                    menuCoordinate: {},
                    menuBody: t(".common-topbar-nav-list")
                },
                init: function () {
                    this.initCoordinate(),
                        this.tactics()
                },
                initCoordinate: function () {
                    var n = this;
                    n.coordinate.length = 0,
                        n.el.menuCoordinate.right = n.el.menuBody.width() + n.el.tabsCoordinate.offset().left,
                        n.el.menuCoordinate.left = n.el.tabsCoordinate.offset().left,
                        n.el.menuCoordinate.top = n.el.tabsCoordinate.offset().top,
                        n.el.menuCoordinate.bottom = n.el.tabsCoordinate.offset().top + n.el.menuBody.height(),
                        n.el.tabsCoordinate.each(function () {
                            t(this).hasClass("line") || n.coordinate.push(t(this).offset().left)
                        })
                },
                tactics: function () {
                    var n = this
                        , e = void 0
                        , o = t(".common-topbar-bottom");
                    o.bind("mousemove", function (t) {
                        e || (e = Date.parse(new Date));
                        var i = t.pageY || t.clientY
                            , a = t.pageX || t.clientX;
                        return i < n.el.menuCoordinate.top + 5 ? (n.timer && clearTimeout(n.timer),
                                o.trigger("dropdown", [!1])) : void (Date.now() - e >= 50 && (n.timer && clearTimeout(n.timer),
                                n.timer = setTimeout(function () {
                                    o.trigger("dropdown", [n.judgment(a, i)])
                                }, 20)))
                    }).bind("mouseenter", function () {
                        n.initCoordinate()
                    }).bind("mouseleave", function () {
                        e = void 0,
                        n.timer && clearTimeout(n.timer)
                    })
                },
                judgment: function (n, e) {
                    var o = this;
                    if (!(e > o.el.menuCoordinate.bottom || e < o.el.menuCoordinate.top)) {
                        if (n > o.el.menuCoordinate.right || n < o.el.menuCoordinate.left)
                            return !1;
                        var i = !1;
                        return t.each(o.coordinate, function (t) {
                            if ((n < o.coordinate[t + 1] || !o.coordinate[t + 1]) && n >= o.coordinate[t])
                                return i = t + 1,
                                    !1
                        }),
                            i
                    }
                }
            };
            n.init()
        }
    }
]);
