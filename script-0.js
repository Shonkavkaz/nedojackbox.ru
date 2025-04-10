var Do = Object.defineProperty;
var Oo = (t, e, r) => e in t ? Do(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r;
var Se = (t, e, r) => Oo(t, typeof e != "symbol" ? e + "" : e, r);
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        i(s);
    new MutationObserver(s => {
        for (const a of s)
            if (a.type === "childList")
                for (const f of a.addedNodes)
                    f.tagName === "LINK" && f.rel === "modulepreload" && i(f)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(s) {
        const a = {};
        return s.integrity && (a.integrity = s.integrity),
        s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? a.credentials = "include" : s.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin",
        a
    }
    function i(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const a = r(s);
        fetch(s.href, a)
    }
}
)();
var pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Po(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
function ko(t) {
    if (t.__esModule)
        return t;
    var e = t.default;
    if (typeof e == "function") {
        var r = function i() {
            return this instanceof i ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
        };
        r.prototype = e.prototype
    } else
        r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.keys(t).forEach(function(i) {
        var s = Object.getOwnPropertyDescriptor(t, i);
        Object.defineProperty(r, i, s.get ? s : {
            enumerable: !0,
            get: function() {
                return t[i]
            }
        })
    }),
    r
}
var qe = {
    DEBUG: !1,
    LIB_VERSION: "2.53.0"
}, V;
if (typeof window > "u") {
    var Us = {
        hostname: ""
    };
    V = {
        navigator: {
            userAgent: ""
        },
        document: {
            location: Us,
            referrer: ""
        },
        screen: {
            width: 0,
            height: 0
        },
        location: Us
    }
} else
    V = window;
var Vo = 24 * 60 * 60 * 1e3
  , fn = Array.prototype
  , $o = Function.prototype
  , Af = Object.prototype
  , rt = fn.slice
  , Rr = Af.toString
  , un = Af.hasOwnProperty
  , ce = V.console
  , nt = V.navigator
  , z = V.document
  , vr = V.opera
  , Gr = V.screen
  , ke = nt.userAgent
  , Un = $o.bind
  , Ks = fn.forEach
  , ws = fn.indexOf
  , Ns = fn.map
  , Mo = Array.isArray
  , Qn = {}
  , l = {
    trim: function(t) {
        return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
}
  , H = {
    log: function() {
        if (qe.DEBUG && !l.isUndefined(ce) && ce)
            try {
                ce.log.apply(ce, arguments)
            } catch {
                l.each(arguments, function(e) {
                    ce.log(e)
                })
            }
    },
    warn: function() {
        if (qe.DEBUG && !l.isUndefined(ce) && ce) {
            var t = ["Mixpanel warning:"].concat(l.toArray(arguments));
            try {
                ce.warn.apply(ce, t)
            } catch {
                l.each(t, function(r) {
                    ce.warn(r)
                })
            }
        }
    },
    error: function() {
        if (qe.DEBUG && !l.isUndefined(ce) && ce) {
            var t = ["Mixpanel error:"].concat(l.toArray(arguments));
            try {
                ce.error.apply(ce, t)
            } catch {
                l.each(t, function(r) {
                    ce.error(r)
                })
            }
        }
    },
    critical: function() {
        if (!l.isUndefined(ce) && ce) {
            var t = ["Mixpanel error:"].concat(l.toArray(arguments));
            try {
                ce.error.apply(ce, t)
            } catch {
                l.each(t, function(r) {
                    ce.error(r)
                })
            }
        }
    }
}
  , Kn = function(t, e) {
    return function() {
        return arguments[0] = "[" + e + "] " + arguments[0],
        t.apply(H, arguments)
    }
}
  , di = function(t) {
    return {
        log: Kn(H.log, t),
        error: Kn(H.error, t),
        critical: Kn(H.critical, t)
    }
};
l.bind = function(t, e) {
    var r, i;
    if (Un && t.bind === Un)
        return Un.apply(t, rt.call(arguments, 1));
    if (!l.isFunction(t))
        throw new TypeError;
    return r = rt.call(arguments, 2),
    i = function() {
        if (!(this instanceof i))
            return t.apply(e, r.concat(rt.call(arguments)));
        var s = {};
        s.prototype = t.prototype;
        var a = new s;
        s.prototype = null;
        var f = t.apply(a, r.concat(rt.call(arguments)));
        return Object(f) === f ? f : a
    }
    ,
    i
}
;
l.each = function(t, e, r) {
    if (t != null) {
        if (Ks && t.forEach === Ks)
            t.forEach(e, r);
        else if (t.length === +t.length) {
            for (var i = 0, s = t.length; i < s; i++)
                if (i in t && e.call(r, t[i], i, t) === Qn)
                    return
        } else
            for (var a in t)
                if (un.call(t, a) && e.call(r, t[a], a, t) === Qn)
                    return
    }
}
;
l.extend = function(t) {
    return l.each(rt.call(arguments, 1), function(e) {
        for (var r in e)
            e[r] !== void 0 && (t[r] = e[r])
    }),
    t
}
;
l.isArray = Mo || function(t) {
    return Rr.call(t) === "[object Array]"
}
;
l.isFunction = function(t) {
    try {
        return /^\s*\bfunction\b/.test(t)
    } catch {
        return !1
    }
}
;
l.isArguments = function(t) {
    return !!(t && un.call(t, "callee"))
}
;
l.toArray = function(t) {
    return t ? t.toArray ? t.toArray() : l.isArray(t) || l.isArguments(t) ? rt.call(t) : l.values(t) : []
}
;
l.map = function(t, e, r) {
    if (Ns && t.map === Ns)
        return t.map(e, r);
    var i = [];
    return l.each(t, function(s) {
        i.push(e.call(r, s))
    }),
    i
}
;
l.keys = function(t) {
    var e = [];
    return t === null || l.each(t, function(r, i) {
        e[e.length] = i
    }),
    e
}
;
l.values = function(t) {
    var e = [];
    return t === null || l.each(t, function(r) {
        e[e.length] = r
    }),
    e
}
;
l.include = function(t, e) {
    var r = !1;
    return t === null ? r : ws && t.indexOf === ws ? t.indexOf(e) != -1 : (l.each(t, function(i) {
        if (r || (r = i === e))
            return Qn
    }),
    r)
}
;
l.includes = function(t, e) {
    return t.indexOf(e) !== -1
}
;
l.inherit = function(t, e) {
    return t.prototype = new e,
    t.prototype.constructor = t,
    t.superclass = e.prototype,
    t
}
;
l.isObject = function(t) {
    return t === Object(t) && !l.isArray(t)
}
;
l.isEmptyObject = function(t) {
    if (l.isObject(t)) {
        for (var e in t)
            if (un.call(t, e))
                return !1;
        return !0
    }
    return !1
}
;
l.isUndefined = function(t) {
    return t === void 0
}
;
l.isString = function(t) {
    return Rr.call(t) == "[object String]"
}
;
l.isDate = function(t) {
    return Rr.call(t) == "[object Date]"
}
;
l.isNumber = function(t) {
    return Rr.call(t) == "[object Number]"
}
;
l.isElement = function(t) {
    return !!(t && t.nodeType === 1)
}
;
l.encodeDates = function(t) {
    return l.each(t, function(e, r) {
        l.isDate(e) ? t[r] = l.formatDate(e) : l.isObject(e) && (t[r] = l.encodeDates(e))
    }),
    t
}
;
l.timestamp = function() {
    return Date.now = Date.now || function() {
        return +new Date
    }
    ,
    Date.now()
}
;
l.formatDate = function(t) {
    function e(r) {
        return r < 10 ? "0" + r : r
    }
    return t.getUTCFullYear() + "-" + e(t.getUTCMonth() + 1) + "-" + e(t.getUTCDate()) + "T" + e(t.getUTCHours()) + ":" + e(t.getUTCMinutes()) + ":" + e(t.getUTCSeconds())
}
;
l.strip_empty_properties = function(t) {
    var e = {};
    return l.each(t, function(r, i) {
        l.isString(r) && r.length > 0 && (e[i] = r)
    }),
    e
}
;
l.truncate = function(t, e) {
    var r;
    return typeof t == "string" ? r = t.slice(0, e) : l.isArray(t) ? (r = [],
    l.each(t, function(i) {
        r.push(l.truncate(i, e))
    })) : l.isObject(t) ? (r = {},
    l.each(t, function(i, s) {
        r[s] = l.truncate(i, e)
    })) : r = t,
    r
}
;
l.JSONEncode = function() {
    return function(t) {
        var e = t
          , r = function(s) {
            var a = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
              , f = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            };
            return a.lastIndex = 0,
            a.test(s) ? '"' + s.replace(a, function(u) {
                var o = f[u];
                return typeof o == "string" ? o : "\\u" + ("0000" + u.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + s + '"'
        }
          , i = function(s, a) {
            var f = ""
              , u = "    "
              , o = 0
              , c = ""
              , p = ""
              , R = 0
              , x = f
              , g = []
              , m = a[s];
            switch (m && typeof m == "object" && typeof m.toJSON == "function" && (m = m.toJSON(s)),
            typeof m) {
            case "string":
                return r(m);
            case "number":
                return isFinite(m) ? String(m) : "null";
            case "boolean":
            case "null":
                return String(m);
            case "object":
                if (!m)
                    return "null";
                if (f += u,
                g = [],
                Rr.apply(m) === "[object Array]") {
                    for (R = m.length,
                    o = 0; o < R; o += 1)
                        g[o] = i(o, m) || "null";
                    return p = g.length === 0 ? "[]" : f ? `[
` + f + g.join(`,
` + f) + `
` + x + "]" : "[" + g.join(",") + "]",
                    f = x,
                    p
                }
                for (c in m)
                    un.call(m, c) && (p = i(c, m),
                    p && g.push(r(c) + (f ? ": " : ":") + p));
                return p = g.length === 0 ? "{}" : f ? "{" + g.join(",") + x + "}" : "{" + g.join(",") + "}",
                f = x,
                p
            }
        };
        return i("", {
            "": e
        })
    }
}();
l.JSONDecode = function() {
    var t, e, r = {
        '"': '"',
        "\\": "\\",
        "/": "/",
        b: "\b",
        f: "\f",
        n: `
`,
        r: "\r",
        t: "	"
    }, i, s = function(g) {
        var m = new SyntaxError(g);
        throw m.at = t,
        m.text = i,
        m
    }, a = function(g) {
        return g && g !== e && s("Expected '" + g + "' instead of '" + e + "'"),
        e = i.charAt(t),
        t += 1,
        e
    }, f = function() {
        var g, m = "";
        for (e === "-" && (m = "-",
        a("-")); e >= "0" && e <= "9"; )
            m += e,
            a();
        if (e === ".")
            for (m += "."; a() && e >= "0" && e <= "9"; )
                m += e;
        if (e === "e" || e === "E")
            for (m += e,
            a(),
            (e === "-" || e === "+") && (m += e,
            a()); e >= "0" && e <= "9"; )
                m += e,
                a();
        if (g = +m,
        !isFinite(g))
            s("Bad number");
        else
            return g
    }, u = function() {
        var g, m, C = "", B;
        if (e === '"')
            for (; a(); ) {
                if (e === '"')
                    return a(),
                    C;
                if (e === "\\")
                    if (a(),
                    e === "u") {
                        for (B = 0,
                        m = 0; m < 4 && (g = parseInt(a(), 16),
                        !!isFinite(g)); m += 1)
                            B = B * 16 + g;
                        C += String.fromCharCode(B)
                    } else if (typeof r[e] == "string")
                        C += r[e];
                    else
                        break;
                else
                    C += e
            }
        s("Bad string")
    }, o = function() {
        for (; e && e <= " "; )
            a()
    }, c = function() {
        switch (e) {
        case "t":
            return a("t"),
            a("r"),
            a("u"),
            a("e"),
            !0;
        case "f":
            return a("f"),
            a("a"),
            a("l"),
            a("s"),
            a("e"),
            !1;
        case "n":
            return a("n"),
            a("u"),
            a("l"),
            a("l"),
            null
        }
        s('Unexpected "' + e + '"')
    }, p, R = function() {
        var g = [];
        if (e === "[") {
            if (a("["),
            o(),
            e === "]")
                return a("]"),
                g;
            for (; e; ) {
                if (g.push(p()),
                o(),
                e === "]")
                    return a("]"),
                    g;
                a(","),
                o()
            }
        }
        s("Bad array")
    }, x = function() {
        var g, m = {};
        if (e === "{") {
            if (a("{"),
            o(),
            e === "}")
                return a("}"),
                m;
            for (; e; ) {
                if (g = u(),
                o(),
                a(":"),
                Object.hasOwnProperty.call(m, g) && s('Duplicate key "' + g + '"'),
                m[g] = p(),
                o(),
                e === "}")
                    return a("}"),
                    m;
                a(","),
                o()
            }
        }
        s("Bad object")
    };
    return p = function() {
        switch (o(),
        e) {
        case "{":
            return x();
        case "[":
            return R();
        case '"':
            return u();
        case "-":
            return f();
        default:
            return e >= "0" && e <= "9" ? f() : c()
        }
    }
    ,
    function(g) {
        var m;
        return i = g,
        t = 0,
        e = " ",
        m = p(),
        o(),
        e && s("Syntax error"),
        m
    }
}();
l.base64Encode = function(t) {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", r, i, s, a, f, u, o, c, p = 0, R = 0, x = "", g = [];
    if (!t)
        return t;
    t = l.utf8Encode(t);
    do
        r = t.charCodeAt(p++),
        i = t.charCodeAt(p++),
        s = t.charCodeAt(p++),
        c = r << 16 | i << 8 | s,
        a = c >> 18 & 63,
        f = c >> 12 & 63,
        u = c >> 6 & 63,
        o = c & 63,
        g[R++] = e.charAt(a) + e.charAt(f) + e.charAt(u) + e.charAt(o);
    while (p < t.length);
    switch (x = g.join(""),
    t.length % 3) {
    case 1:
        x = x.slice(0, -2) + "==";
        break;
    case 2:
        x = x.slice(0, -1) + "=";
        break
    }
    return x
}
;
l.utf8Encode = function(t) {
    t = (t + "").replace(/\r\n/g, `
`).replace(/\r/g, `
`);
    var e = "", r, i, s = 0, a;
    for (r = i = 0,
    s = t.length,
    a = 0; a < s; a++) {
        var f = t.charCodeAt(a)
          , u = null;
        f < 128 ? i++ : f > 127 && f < 2048 ? u = String.fromCharCode(f >> 6 | 192, f & 63 | 128) : u = String.fromCharCode(f >> 12 | 224, f >> 6 & 63 | 128, f & 63 | 128),
        u !== null && (i > r && (e += t.substring(r, i)),
        e += u,
        r = i = a + 1)
    }
    return i > r && (e += t.substring(r, t.length)),
    e
}
;
l.UUID = function() {
    var t = function() {
        var i = 1 * new Date, s;
        if (V.performance && V.performance.now)
            s = V.performance.now();
        else
            for (s = 0; i == 1 * new Date; )
                s++;
        return i.toString(16) + Math.floor(s).toString(16)
    }
      , e = function() {
        return Math.random().toString(16).replace(".", "")
    }
      , r = function() {
        var i = ke, s, a, f = [], u = 0;
        function o(c, p) {
            var R, x = 0;
            for (R = 0; R < p.length; R++)
                x |= f[R] << R * 8;
            return c ^ x
        }
        for (s = 0; s < i.length; s++)
            a = i.charCodeAt(s),
            f.unshift(a & 255),
            f.length >= 4 && (u = o(u, f),
            f = []);
        return f.length > 0 && (u = o(u, f)),
        u.toString(16)
    };
    return function() {
        var i = (Gr.height * Gr.width).toString(16);
        return t() + "-" + e() + "-" + r() + "-" + i + "-" + t()
    }
}();
var Is = ["ahrefsbot", "ahrefssiteaudit", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
l.isBlockedUA = function(t) {
    var e;
    for (t = t.toLowerCase(),
    e = 0; e < Is.length; e++)
        if (t.indexOf(Is[e]) !== -1)
            return !0;
    return !1
}
;
l.HTTPBuildQuery = function(t, e) {
    var r, i, s = [];
    return l.isUndefined(e) && (e = "&"),
    l.each(t, function(a, f) {
        r = encodeURIComponent(a.toString()),
        i = encodeURIComponent(f),
        s[s.length] = i + "=" + r
    }),
    s.join(e)
}
;
l.getQueryParam = function(t, e) {
    e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var r = "[\\?&]" + e + "=([^&#]*)"
      , i = new RegExp(r)
      , s = i.exec(t);
    if (s === null || s && typeof s[1] != "string" && s[1].length)
        return "";
    var a = s[1];
    try {
        a = decodeURIComponent(a)
    } catch {
        H.error("Skipping decoding for malformed query param: " + a)
    }
    return a.replace(/\+/g, " ")
}
;
l.cookie = {
    get: function(t) {
        for (var e = t + "=", r = z.cookie.split(";"), i = 0; i < r.length; i++) {
            for (var s = r[i]; s.charAt(0) == " "; )
                s = s.substring(1, s.length);
            if (s.indexOf(e) === 0)
                return decodeURIComponent(s.substring(e.length, s.length))
        }
        return null
    },
    parse: function(t) {
        var e;
        try {
            e = l.JSONDecode(l.cookie.get(t)) || {}
        } catch {}
        return e
    },
    set_seconds: function(t, e, r, i, s, a, f) {
        var u = ""
          , o = ""
          , c = "";
        if (f)
            u = "; domain=" + f;
        else if (i) {
            var p = Ds(z.location.hostname);
            u = p ? "; domain=." + p : ""
        }
        if (r) {
            var R = new Date;
            R.setTime(R.getTime() + r * 1e3),
            o = "; expires=" + R.toGMTString()
        }
        a && (s = !0,
        c = "; SameSite=None"),
        s && (c += "; secure"),
        z.cookie = t + "=" + encodeURIComponent(e) + o + "; path=/" + u + c
    },
    set: function(t, e, r, i, s, a, f) {
        var u = ""
          , o = ""
          , c = "";
        if (f)
            u = "; domain=" + f;
        else if (i) {
            var p = Ds(z.location.hostname);
            u = p ? "; domain=." + p : ""
        }
        if (r) {
            var R = new Date;
            R.setTime(R.getTime() + r * 24 * 60 * 60 * 1e3),
            o = "; expires=" + R.toGMTString()
        }
        a && (s = !0,
        c = "; SameSite=None"),
        s && (c += "; secure");
        var x = t + "=" + encodeURIComponent(e) + o + "; path=/" + u + c;
        return z.cookie = x,
        x
    },
    remove: function(t, e, r) {
        l.cookie.set(t, "", -1, e, !1, !1, r)
    }
};
var wn = null
  , Xr = function(t, e) {
    if (wn !== null && !e)
        return wn;
    var r = !0;
    try {
        t = t || window.localStorage;
        var i = "__mplss_" + vi(8)
          , s = "xyz";
        t.setItem(i, s),
        t.getItem(i) !== s && (r = !1),
        t.removeItem(i)
    } catch {
        r = !1
    }
    return wn = r,
    r
};
l.localStorage = {
    is_supported: function(t) {
        var e = Xr(null, t);
        return e || H.error("localStorage unsupported; falling back to cookie store"),
        e
    },
    error: function(t) {
        H.error("localStorage error: " + t)
    },
    get: function(t) {
        try {
            return window.localStorage.getItem(t)
        } catch (e) {
            l.localStorage.error(e)
        }
        return null
    },
    parse: function(t) {
        try {
            return l.JSONDecode(l.localStorage.get(t)) || {}
        } catch {}
        return null
    },
    set: function(t, e) {
        try {
            window.localStorage.setItem(t, e)
        } catch (r) {
            l.localStorage.error(r)
        }
    },
    remove: function(t) {
        try {
            window.localStorage.removeItem(t)
        } catch (e) {
            l.localStorage.error(e)
        }
    }
};
l.register_event = function() {
    var t = function(i, s, a, f, u) {
        if (!i) {
            H.error("No valid element provided to register_event");
            return
        }
        if (i.addEventListener && !f)
            i.addEventListener(s, a, !!u);
        else {
            var o = "on" + s
              , c = i[o];
            i[o] = e(i, a, c)
        }
    };
    function e(i, s, a) {
        var f = function(u) {
            if (u = u || r(window.event),
            !!u) {
                var o = !0, c, p;
                return l.isFunction(a) && (c = a(u)),
                p = s.call(i, u),
                (c === !1 || p === !1) && (o = !1),
                o
            }
        };
        return f
    }
    function r(i) {
        return i && (i.preventDefault = r.preventDefault,
        i.stopPropagation = r.stopPropagation),
        i
    }
    return r.preventDefault = function() {
        this.returnValue = !1
    }
    ,
    r.stopPropagation = function() {
        this.cancelBubble = !0
    }
    ,
    t
}();
var Go = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
l.dom_query = function() {
    function t(s) {
        return s.all ? s.all : s.getElementsByTagName("*")
    }
    var e = /[\t\r\n]/g;
    function r(s, a) {
        var f = " " + a + " ";
        return (" " + s.className + " ").replace(e, " ").indexOf(f) >= 0
    }
    function i(s) {
        if (!z.getElementsByTagName)
            return [];
        var a = s.split(" "), f, u, o, c, p, R, x, g, m, C, B = [z];
        for (R = 0; R < a.length; R++) {
            if (f = a[R].replace(/^\s+/, "").replace(/\s+$/, ""),
            f.indexOf("#") > -1) {
                u = f.split("#"),
                o = u[0];
                var P = u[1]
                  , k = z.getElementById(P);
                if (!k || o && k.nodeName.toLowerCase() != o)
                    return [];
                B = [k];
                continue
            }
            if (f.indexOf(".") > -1) {
                u = f.split("."),
                o = u[0];
                var K = u[1];
                for (o || (o = "*"),
                c = [],
                p = 0,
                x = 0; x < B.length; x++)
                    for (o == "*" ? m = t(B[x]) : m = B[x].getElementsByTagName(o),
                    g = 0; g < m.length; g++)
                        c[p++] = m[g];
                for (B = [],
                C = 0,
                x = 0; x < c.length; x++)
                    c[x].className && l.isString(c[x].className) && r(c[x], K) && (B[C++] = c[x]);
                continue
            }
            var ue = f.match(Go);
            if (ue) {
                o = ue[1];
                var se = ue[2]
                  , de = ue[3]
                  , Q = ue[4];
                for (o || (o = "*"),
                c = [],
                p = 0,
                x = 0; x < B.length; x++)
                    for (o == "*" ? m = t(B[x]) : m = B[x].getElementsByTagName(o),
                    g = 0; g < m.length; g++)
                        c[p++] = m[g];
                B = [],
                C = 0;
                var he;
                switch (de) {
                case "=":
                    he = function(X) {
                        return X.getAttribute(se) == Q
                    }
                    ;
                    break;
                case "~":
                    he = function(X) {
                        return X.getAttribute(se).match(new RegExp("\\b" + Q + "\\b"))
                    }
                    ;
                    break;
                case "|":
                    he = function(X) {
                        return X.getAttribute(se).match(new RegExp("^" + Q + "-?"))
                    }
                    ;
                    break;
                case "^":
                    he = function(X) {
                        return X.getAttribute(se).indexOf(Q) === 0
                    }
                    ;
                    break;
                case "$":
                    he = function(X) {
                        return X.getAttribute(se).lastIndexOf(Q) == X.getAttribute(se).length - Q.length
                    }
                    ;
                    break;
                case "*":
                    he = function(X) {
                        return X.getAttribute(se).indexOf(Q) > -1
                    }
                    ;
                    break;
                default:
                    he = function(X) {
                        return X.getAttribute(se)
                    }
                }
                for (B = [],
                C = 0,
                x = 0; x < c.length; x++)
                    he(c[x]) && (B[C++] = c[x]);
                continue
            }
            for (o = f,
            c = [],
            p = 0,
            x = 0; x < B.length; x++)
                for (m = B[x].getElementsByTagName(o),
                g = 0; g < m.length; g++)
                    c[p++] = m[g];
            B = c
        }
        return B
    }
    return function(s) {
        return l.isElement(s) ? [s] : l.isObject(s) && !l.isUndefined(s.length) ? s : i.call(this, s)
    }
}();
var Xo = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
  , jo = ["dclid", "fbclid", "gclid", "ko_click_id", "li_fat_id", "msclkid", "ttclid", "twclid", "wbraid"];
l.info = {
    campaignParams: function(t) {
        var e = ""
          , r = {};
        return l.each(Xo, function(i) {
            e = l.getQueryParam(z.URL, i),
            e.length ? r[i] = e : t !== void 0 && (r[i] = t)
        }),
        r
    },
    clickParams: function() {
        var t = ""
          , e = {};
        return l.each(jo, function(r) {
            t = l.getQueryParam(z.URL, r),
            t.length && (e[r] = t)
        }),
        e
    },
    marketingParams: function() {
        return l.extend(l.info.campaignParams(), l.info.clickParams())
    },
    searchEngine: function(t) {
        return t.search("https?://(.*)google.([^/?]*)") === 0 ? "google" : t.search("https?://(.*)bing.com") === 0 ? "bing" : t.search("https?://(.*)yahoo.com") === 0 ? "yahoo" : t.search("https?://(.*)duckduckgo.com") === 0 ? "duckduckgo" : null
    },
    searchInfo: function(t) {
        var e = l.info.searchEngine(t)
          , r = e != "yahoo" ? "q" : "p"
          , i = {};
        if (e !== null) {
            i.$search_engine = e;
            var s = l.getQueryParam(t, r);
            s.length && (i.mp_keyword = s)
        }
        return i
    },
    browser: function(t, e, r) {
        return e = e || "",
        r || l.includes(t, " OPR/") ? l.includes(t, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : l.includes(t, "IEMobile") || l.includes(t, "WPDesktop") ? "Internet Explorer Mobile" : l.includes(t, "SamsungBrowser/") ? "Samsung Internet" : l.includes(t, "Edge") || l.includes(t, "Edg/") ? "Microsoft Edge" : l.includes(t, "FBIOS") ? "Facebook Mobile" : l.includes(t, "Chrome") ? "Chrome" : l.includes(t, "CriOS") ? "Chrome iOS" : l.includes(t, "UCWEB") || l.includes(t, "UCBrowser") ? "UC Browser" : l.includes(t, "FxiOS") ? "Firefox iOS" : l.includes(e, "Apple") ? l.includes(t, "Mobile") ? "Mobile Safari" : "Safari" : l.includes(t, "Android") ? "Android Mobile" : l.includes(t, "Konqueror") ? "Konqueror" : l.includes(t, "Firefox") ? "Firefox" : l.includes(t, "MSIE") || l.includes(t, "Trident/") ? "Internet Explorer" : l.includes(t, "Gecko") ? "Mozilla" : ""
    },
    browserVersion: function(t, e, r) {
        var i = l.info.browser(t, e, r)
          , s = {
            "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
            "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
            Chrome: /Chrome\/(\d+(\.\d+)?)/,
            "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
            "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
            Safari: /Version\/(\d+(\.\d+)?)/,
            "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
            Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
            Firefox: /Firefox\/(\d+(\.\d+)?)/,
            "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
            Konqueror: /Konqueror:(\d+(\.\d+)?)/,
            BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
            "Android Mobile": /android\s(\d+(\.\d+)?)/,
            "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
            "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
            Mozilla: /rv:(\d+(\.\d+)?)/
        }
          , a = s[i];
        if (a === void 0)
            return null;
        var f = t.match(a);
        return f ? parseFloat(f[f.length - 2]) : null
    },
    os: function() {
        var t = ke;
        return /Windows/i.test(t) ? /Phone/.test(t) || /WPDesktop/.test(t) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(t) ? "iOS" : /Android/.test(t) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : /Mac/i.test(t) ? "Mac OS X" : /Linux/.test(t) ? "Linux" : /CrOS/.test(t) ? "Chrome OS" : ""
    },
    device: function(t) {
        return /Windows Phone/i.test(t) || /WPDesktop/.test(t) ? "Windows Phone" : /iPad/.test(t) ? "iPad" : /iPod/.test(t) ? "iPod Touch" : /iPhone/.test(t) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : /Android/.test(t) ? "Android" : ""
    },
    referringDomain: function(t) {
        var e = t.split("/");
        return e.length >= 3 ? e[2] : ""
    },
    currentUrl: function() {
        return V.location.href
    },
    properties: function(t) {
        return typeof t != "object" && (t = {}),
        l.extend(l.strip_empty_properties({
            $os: l.info.os(),
            $browser: l.info.browser(ke, nt.vendor, vr),
            $referrer: z.referrer,
            $referring_domain: l.info.referringDomain(z.referrer),
            $device: l.info.device(ke)
        }), {
            $current_url: l.info.currentUrl(),
            $browser_version: l.info.browserVersion(ke, nt.vendor, vr),
            $screen_height: Gr.height,
            $screen_width: Gr.width,
            mp_lib: "web",
            $lib_version: qe.LIB_VERSION,
            $insert_id: vi(),
            time: l.timestamp() / 1e3
        }, l.strip_empty_properties(t))
    },
    people_properties: function() {
        return l.extend(l.strip_empty_properties({
            $os: l.info.os(),
            $browser: l.info.browser(ke, nt.vendor, vr)
        }), {
            $browser_version: l.info.browserVersion(ke, nt.vendor, vr)
        })
    },
    mpPageViewProperties: function() {
        return l.strip_empty_properties({
            current_page_title: z.title,
            current_domain: V.location.hostname,
            current_url_path: V.location.pathname,
            current_url_protocol: V.location.protocol,
            current_url_search: V.location.search
        })
    }
};
var vi = function(t) {
    var e = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    return t ? e.substring(0, t) : e
}
  , Fo = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i
  , qo = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i
  , Ds = function(t) {
    var e = qo
      , r = t.split(".")
      , i = r[r.length - 1];
    (i.length > 4 || i === "com" || i === "org") && (e = Fo);
    var s = t.match(e);
    return s ? s[0] : ""
}
  , jr = null
  , Fr = null;
typeof JSON < "u" && (jr = JSON.stringify,
Fr = JSON.parse);
jr = jr || l.JSONEncode;
Fr = Fr || l.JSONDecode;
l.toArray = l.toArray;
l.isObject = l.isObject;
l.JSONEncode = l.JSONEncode;
l.JSONDecode = l.JSONDecode;
l.isBlockedUA = l.isBlockedUA;
l.isEmptyObject = l.isEmptyObject;
l.info = l.info;
l.info.device = l.info.device;
l.info.browser = l.info.browser;
l.info.browserVersion = l.info.browserVersion;
l.info.properties = l.info.properties;
var Je = function() {};
Je.prototype.create_properties = function() {}
;
Je.prototype.event_handler = function() {}
;
Je.prototype.after_track_handler = function() {}
;
Je.prototype.init = function(t) {
    return this.mp = t,
    this
}
;
Je.prototype.track = function(t, e, r, i) {
    var s = this
      , a = l.dom_query(t);
    if (a.length === 0) {
        H.error("The DOM query (" + t + ") returned 0 elements");
        return
    }
    return l.each(a, function(f) {
        l.register_event(f, this.override_event, function(u) {
            var o = {}
              , c = s.create_properties(r, this)
              , p = s.mp.get_config("track_links_timeout");
            s.event_handler(u, this, o),
            window.setTimeout(s.track_callback(i, c, o, !0), p),
            s.mp.track(e, c, s.track_callback(i, c, o))
        })
    }, this),
    !0
}
;
Je.prototype.track_callback = function(t, e, r, i) {
    i = i || !1;
    var s = this;
    return function() {
        r.callback_fired || (r.callback_fired = !0,
        !(t && t(i, e) === !1) && s.after_track_handler(e, r, i))
    }
}
;
Je.prototype.create_properties = function(t, e) {
    var r;
    return typeof t == "function" ? r = t(e) : r = l.extend({}, t),
    r
}
;
var kt = function() {
    this.override_event = "click"
};
l.inherit(kt, Je);
kt.prototype.create_properties = function(t, e) {
    var r = kt.superclass.create_properties.apply(this, arguments);
    return e.href && (r.url = e.href),
    r
}
;
kt.prototype.event_handler = function(t, e, r) {
    r.new_tab = t.which === 2 || t.metaKey || t.ctrlKey || e.target === "_blank",
    r.href = e.href,
    r.new_tab || t.preventDefault()
}
;
kt.prototype.after_track_handler = function(t, e) {
    e.new_tab || setTimeout(function() {
        window.location = e.href
    }, 0)
}
;
var on = function() {
    this.override_event = "submit"
};
l.inherit(on, Je);
on.prototype.event_handler = function(t, e, r) {
    r.element = e,
    t.preventDefault()
}
;
on.prototype.after_track_handler = function(t, e) {
    setTimeout(function() {
        e.element.submit()
    }, 0)
}
;
var Ho = di("lock")
  , Cf = function(t, e) {
    e = e || {},
    this.storageKey = t,
    this.storage = e.storage || window.localStorage,
    this.pollIntervalMS = e.pollIntervalMS || 100,
    this.timeoutMS = e.timeoutMS || 2e3
};
Cf.prototype.withLock = function(t, e, r) {
    !r && typeof e != "function" && (r = e,
    e = null);
    var i = r || new Date().getTime() + "|" + Math.random()
      , s = new Date().getTime()
      , a = this.storageKey
      , f = this.pollIntervalMS
      , u = this.timeoutMS
      , o = this.storage
      , c = a + ":X"
      , p = a + ":Y"
      , R = a + ":Z"
      , x = function(k) {
        e && e(k)
    }
      , g = function(k) {
        if (new Date().getTime() - s > u) {
            Ho.error("Timeout waiting for mutex on " + a + "; clearing lock. [" + i + "]"),
            o.removeItem(R),
            o.removeItem(p),
            B();
            return
        }
        setTimeout(function() {
            try {
                k()
            } catch (K) {
                x(K)
            }
        }, f * (Math.random() + .1))
    }
      , m = function(k, K) {
        k() ? K() : g(function() {
            m(k, K)
        })
    }
      , C = function() {
        var k = o.getItem(p);
        if (k && k !== i)
            return !1;
        if (o.setItem(p, i),
        o.getItem(p) === i)
            return !0;
        if (!Xr(o, !0))
            throw new Error("localStorage support dropped while acquiring lock");
        return !1
    }
      , B = function() {
        o.setItem(c, i),
        m(C, function() {
            if (o.getItem(c) === i) {
                P();
                return
            }
            g(function() {
                if (o.getItem(p) !== i) {
                    B();
                    return
                }
                m(function() {
                    return !o.getItem(R)
                }, P)
            })
        })
    }
      , P = function() {
        o.setItem(R, "1");
        try {
            t()
        } finally {
            o.removeItem(R),
            o.getItem(p) === i && o.removeItem(p),
            o.getItem(c) === i && o.removeItem(c)
        }
    };
    try {
        if (Xr(o, !0))
            B();
        else
            throw new Error("localStorage support check failed")
    } catch (k) {
        x(k)
    }
}
;
var Os = di("batch")
  , ft = function(t, e) {
    e = e || {},
    this.storageKey = t,
    this.storage = e.storage || window.localStorage,
    this.reportError = e.errorReporter || l.bind(Os.error, Os),
    this.lock = new Cf(t,{
        storage: this.storage
    }),
    this.pid = e.pid || null,
    this.memQueue = []
};
ft.prototype.enqueue = function(t, e, r) {
    var i = {
        id: vi(),
        flushAfter: new Date().getTime() + e * 2,
        payload: t
    };
    this.lock.withLock(l.bind(function() {
        var a;
        try {
            var f = this.readFromStorage();
            f.push(i),
            a = this.saveToStorage(f),
            a && this.memQueue.push(i)
        } catch {
            this.reportError("Error enqueueing item", t),
            a = !1
        }
        r && r(a)
    }, this), l.bind(function(a) {
        this.reportError("Error acquiring storage lock", a),
        r && r(!1)
    }, this), this.pid)
}
;
ft.prototype.fillBatch = function(t) {
    var e = this.memQueue.slice(0, t);
    if (e.length < t) {
        var r = this.readFromStorage();
        if (r.length) {
            var i = {};
            l.each(e, function(f) {
                i[f.id] = !0
            });
            for (var s = 0; s < r.length; s++) {
                var a = r[s];
                if (new Date().getTime() > a.flushAfter && !i[a.id] && (a.orphaned = !0,
                e.push(a),
                e.length >= t))
                    break
            }
        }
    }
    return e
}
;
var Ps = function(t, e) {
    var r = [];
    return l.each(t, function(i) {
        i.id && !e[i.id] && r.push(i)
    }),
    r
};
ft.prototype.removeItemsByID = function(t, e) {
    var r = {};
    l.each(t, function(s) {
        r[s] = !0
    }),
    this.memQueue = Ps(this.memQueue, r);
    var i = l.bind(function() {
        var s;
        try {
            var a = this.readFromStorage();
            if (a = Ps(a, r),
            s = this.saveToStorage(a),
            s) {
                a = this.readFromStorage();
                for (var f = 0; f < a.length; f++) {
                    var u = a[f];
                    if (u.id && r[u.id])
                        return this.reportError("Item not removed from storage"),
                        !1
                }
            }
        } catch {
            this.reportError("Error removing items", t),
            s = !1
        }
        return s
    }, this);
    this.lock.withLock(function() {
        var a = i();
        e && e(a)
    }, l.bind(function(a) {
        var f = !1;
        if (this.reportError("Error acquiring storage lock", a),
        !Xr(this.storage, !0) && (f = i(),
        !f))
            try {
                this.storage.removeItem(this.storageKey)
            } catch (u) {
                this.reportError("Error clearing queue", u)
            }
        e && e(f)
    }, this), this.pid)
}
;
var ks = function(t, e) {
    var r = [];
    return l.each(t, function(i) {
        var s = i.id;
        if (s in e) {
            var a = e[s];
            a !== null && (i.payload = a,
            r.push(i))
        } else
            r.push(i)
    }),
    r
};
ft.prototype.updatePayloads = function(t, e) {
    this.memQueue = ks(this.memQueue, t),
    this.lock.withLock(l.bind(function() {
        var i;
        try {
            var s = this.readFromStorage();
            s = ks(s, t),
            i = this.saveToStorage(s)
        } catch {
            this.reportError("Error updating items", t),
            i = !1
        }
        e && e(i)
    }, this), l.bind(function(i) {
        this.reportError("Error acquiring storage lock", i),
        e && e(!1)
    }, this), this.pid)
}
;
ft.prototype.readFromStorage = function() {
    var t;
    try {
        t = this.storage.getItem(this.storageKey),
        t && (t = Fr(t),
        l.isArray(t) || (this.reportError("Invalid storage entry:", t),
        t = null))
    } catch (e) {
        this.reportError("Error retrieving queue", e),
        t = null
    }
    return t || []
}
;
ft.prototype.saveToStorage = function(t) {
    try {
        return this.storage.setItem(this.storageKey, jr(t)),
        !0
    } catch (e) {
        return this.reportError("Error saving queue", e),
        !1
    }
}
;
ft.prototype.clear = function() {
    this.memQueue = [],
    this.storage.removeItem(this.storageKey)
}
;
var Wo = 10 * 60 * 1e3
  , lr = di("batch")
  , Ge = function(t, e) {
    this.errorReporter = e.errorReporter,
    this.queue = new ft(t,{
        errorReporter: l.bind(this.reportError, this),
        storage: e.storage
    }),
    this.libConfig = e.libConfig,
    this.sendRequest = e.sendRequestFunc,
    this.beforeSendHook = e.beforeSendHook,
    this.stopAllBatching = e.stopAllBatchingFunc,
    this.batchSize = this.libConfig.batch_size,
    this.flushInterval = this.libConfig.batch_flush_interval_ms,
    this.stopped = !this.libConfig.batch_autostart,
    this.consecutiveRemovalFailures = 0,
    this.itemIdsSentSuccessfully = {}
};
Ge.prototype.enqueue = function(t, e) {
    this.queue.enqueue(t, this.flushInterval, e)
}
;
Ge.prototype.start = function() {
    this.stopped = !1,
    this.consecutiveRemovalFailures = 0,
    this.flush()
}
;
Ge.prototype.stop = function() {
    this.stopped = !0,
    this.timeoutID && (clearTimeout(this.timeoutID),
    this.timeoutID = null)
}
;
Ge.prototype.clear = function() {
    this.queue.clear()
}
;
Ge.prototype.resetBatchSize = function() {
    this.batchSize = this.libConfig.batch_size
}
;
Ge.prototype.resetFlush = function() {
    this.scheduleFlush(this.libConfig.batch_flush_interval_ms)
}
;
Ge.prototype.scheduleFlush = function(t) {
    this.flushInterval = t,
    this.stopped || (this.timeoutID = setTimeout(l.bind(this.flush, this), this.flushInterval))
}
;
Ge.prototype.flush = function(t) {
    try {
        if (this.requestInProgress) {
            lr.log("Flush: Request already in progress");
            return
        }
        t = t || {};
        var e = this.libConfig.batch_request_timeout_ms
          , r = new Date().getTime()
          , i = this.batchSize
          , s = this.queue.fillBatch(i)
          , a = []
          , f = {};
        if (l.each(s, function(c) {
            var p = c.payload;
            if (this.beforeSendHook && !c.orphaned && (p = this.beforeSendHook(p)),
            p) {
                p.event && p.properties && (p.properties = l.extend({}, p.properties, {
                    mp_sent_by_lib_version: qe.LIB_VERSION
                }));
                var R = !0
                  , x = c.id;
                x ? (this.itemIdsSentSuccessfully[x] || 0) > 5 && (this.reportError("[dupe] item ID sent too many times, not sending", {
                    item: c,
                    batchSize: s.length,
                    timesSent: this.itemIdsSentSuccessfully[x]
                }),
                R = !1) : this.reportError("[dupe] found item with no ID", {
                    item: c
                }),
                R && a.push(p)
            }
            f[c.id] = p
        }, this),
        a.length < 1) {
            this.resetFlush();
            return
        }
        this.requestInProgress = !0;
        var u = l.bind(function(c) {
            this.requestInProgress = !1;
            try {
                var p = !1;
                if (t.unloading)
                    this.queue.updatePayloads(f);
                else if (l.isObject(c) && c.error === "timeout" && new Date().getTime() - r >= e)
                    this.reportError("Network timeout; retrying"),
                    this.flush();
                else if (l.isObject(c) && c.xhr_req && (c.xhr_req.status >= 500 || c.xhr_req.status === 429 || c.error === "timeout")) {
                    var R = this.flushInterval * 2
                      , x = c.xhr_req.responseHeaders;
                    if (x) {
                        var g = x["Retry-After"];
                        g && (R = parseInt(g, 10) * 1e3 || R)
                    }
                    R = Math.min(Wo, R),
                    this.reportError("Error; retry in " + R + " ms"),
                    this.scheduleFlush(R)
                } else if (l.isObject(c) && c.xhr_req && c.xhr_req.status === 413)
                    if (s.length > 1) {
                        var m = Math.max(1, Math.floor(i / 2));
                        this.batchSize = Math.min(this.batchSize, m, s.length - 1),
                        this.reportError("413 response; reducing batch size to " + this.batchSize),
                        this.resetFlush()
                    } else
                        this.reportError("Single-event request too large; dropping", s),
                        this.resetBatchSize(),
                        p = !0;
                else
                    p = !0;
                p && (this.queue.removeItemsByID(l.map(s, function(C) {
                    return C.id
                }), l.bind(function(C) {
                    C ? (this.consecutiveRemovalFailures = 0,
                    this.flush()) : (this.reportError("Failed to remove items from queue"),
                    ++this.consecutiveRemovalFailures > 5 ? (this.reportError("Too many queue failures; disabling batching system."),
                    this.stopAllBatching()) : this.resetFlush())
                }, this)),
                l.each(s, l.bind(function(C) {
                    var B = C.id;
                    B ? (this.itemIdsSentSuccessfully[B] = this.itemIdsSentSuccessfully[B] || 0,
                    this.itemIdsSentSuccessfully[B]++,
                    this.itemIdsSentSuccessfully[B] > 5 && this.reportError("[dupe] item ID sent too many times", {
                        item: C,
                        batchSize: s.length,
                        timesSent: this.itemIdsSentSuccessfully[B]
                    })) : this.reportError("[dupe] found item with no ID while removing", {
                        item: C
                    })
                }, this)))
            } catch (C) {
                this.reportError("Error handling API response", C),
                this.resetFlush()
            }
        }, this)
          , o = {
            method: "POST",
            verbose: !0,
            ignore_json_errors: !0,
            timeout_ms: e
        };
        t.unloading && (o.transport = "sendBeacon"),
        lr.log("MIXPANEL REQUEST:", a),
        this.sendRequest(a, o, u)
    } catch (c) {
        this.reportError("Error flushing request queue", c),
        this.resetFlush()
    }
}
;
Ge.prototype.reportError = function(t, e) {
    if (lr.error.apply(lr.error, arguments),
    this.errorReporter)
        try {
            e instanceof Error || (e = new Error(t)),
            this.errorReporter(t, e)
        } catch (r) {
            lr.error(r)
        }
}
;
var zo = "__mp_opt_in_out_";
function Jo(t, e) {
    Kf(!0, t, e)
}
function Yo(t, e) {
    Kf(!1, t, e)
}
function Qo(t, e) {
    return Uf(t, e) === "1"
}
function Bf(t, e) {
    if (el(e))
        return H.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'),
        !0;
    var r = Uf(t, e) === "0";
    return r && H.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."),
    r
}
function Tt(t) {
    return Bi(t, function(e) {
        return this.get_config(e)
    })
}
function ut(t) {
    return Bi(t, function(e) {
        return this._get_config(e)
    })
}
function Ht(t) {
    return Bi(t, function(e) {
        return this._get_config(e)
    })
}
function Zo(t, e) {
    e = e || {},
    Ai(e).remove(Ci(t, e), !!e.crossSubdomainCookie, e.cookieDomain)
}
function Ai(t) {
    return t = t || {},
    t.persistenceType === "localStorage" ? l.localStorage : l.cookie
}
function Ci(t, e) {
    return e = e || {},
    (e.persistencePrefix || zo) + t
}
function Uf(t, e) {
    return Ai(e).get(Ci(t, e))
}
function el(t) {
    if (t && t.ignoreDnt)
        return !1;
    var e = t && t.window || V
      , r = e.navigator || {}
      , i = !1;
    return l.each([r.doNotTrack, r.msDoNotTrack, e.doNotTrack], function(s) {
        l.includes([!0, 1, "1", "yes"], s) && (i = !0)
    }),
    i
}
function Kf(t, e, r) {
    if (!l.isString(e) || !e.length) {
        H.error("gdpr." + (t ? "optIn" : "optOut") + " called with an invalid token");
        return
    }
    r = r || {},
    Ai(r).set(Ci(e, r), t ? 1 : 0, l.isNumber(r.cookieExpiration) ? r.cookieExpiration : null, !!r.crossSubdomainCookie, !!r.secureCookie, !!r.crossSiteCookie, r.cookieDomain),
    r.track && t && r.track(r.trackEventName || "$opt_in", r.trackProperties, {
        send_immediately: !0
    })
}
function Bi(t, e) {
    return function() {
        var r = !1;
        try {
            var i = e.call(this, "token")
              , s = e.call(this, "ignore_dnt")
              , a = e.call(this, "opt_out_tracking_persistence_type")
              , f = e.call(this, "opt_out_tracking_cookie_prefix")
              , u = e.call(this, "window");
            i && (r = Bf(i, {
                ignoreDnt: s,
                persistenceType: a,
                persistencePrefix: f,
                window: u
            }))
        } catch (c) {
            H.error("Unexpected error when checking tracking opt-out status: " + c)
        }
        if (!r)
            return t.apply(this, arguments);
        var o = arguments[arguments.length - 1];
        typeof o == "function" && o(0)
    }
}
var st = "$set"
  , Vt = "$set_once"
  , Ie = "$unset"
  , ht = "$add"
  , Me = "$append"
  , xt = "$union"
  , He = "$remove"
  , tl = "$delete"
  , wf = {
    set_action: function(t, e) {
        var r = {}
          , i = {};
        return l.isObject(t) ? l.each(t, function(s, a) {
            this._is_reserved_property(a) || (i[a] = s)
        }, this) : i[t] = e,
        r[st] = i,
        r
    },
    unset_action: function(t) {
        var e = {}
          , r = [];
        return l.isArray(t) || (t = [t]),
        l.each(t, function(i) {
            this._is_reserved_property(i) || r.push(i)
        }, this),
        e[Ie] = r,
        e
    },
    set_once_action: function(t, e) {
        var r = {}
          , i = {};
        return l.isObject(t) ? l.each(t, function(s, a) {
            this._is_reserved_property(a) || (i[a] = s)
        }, this) : i[t] = e,
        r[Vt] = i,
        r
    },
    union_action: function(t, e) {
        var r = {}
          , i = {};
        return l.isObject(t) ? l.each(t, function(s, a) {
            this._is_reserved_property(a) || (i[a] = l.isArray(s) ? s : [s])
        }, this) : i[t] = l.isArray(e) ? e : [e],
        r[xt] = i,
        r
    },
    append_action: function(t, e) {
        var r = {}
          , i = {};
        return l.isObject(t) ? l.each(t, function(s, a) {
            this._is_reserved_property(a) || (i[a] = s)
        }, this) : i[t] = e,
        r[Me] = i,
        r
    },
    remove_action: function(t, e) {
        var r = {}
          , i = {};
        return l.isObject(t) ? l.each(t, function(s, a) {
            this._is_reserved_property(a) || (i[a] = s)
        }, this) : i[t] = e,
        r[He] = i,
        r
    },
    delete_action: function() {
        var t = {};
        return t[tl] = "",
        t
    }
}
  , ie = function() {};
l.extend(ie.prototype, wf);
ie.prototype._init = function(t, e, r) {
    this._mixpanel = t,
    this._group_key = e,
    this._group_id = r
}
;
ie.prototype.set = Ht(function(t, e, r) {
    var i = this.set_action(t, e);
    return l.isObject(t) && (r = e),
    this._send_request(i, r)
});
ie.prototype.set_once = Ht(function(t, e, r) {
    var i = this.set_once_action(t, e);
    return l.isObject(t) && (r = e),
    this._send_request(i, r)
});
ie.prototype.unset = Ht(function(t, e) {
    var r = this.unset_action(t);
    return this._send_request(r, e)
});
ie.prototype.union = Ht(function(t, e, r) {
    l.isObject(t) && (r = e);
    var i = this.union_action(t, e);
    return this._send_request(i, r)
});
ie.prototype.delete = Ht(function(t) {
    var e = this.delete_action();
    return this._send_request(e, t)
});
ie.prototype.remove = Ht(function(t, e, r) {
    var i = this.remove_action(t, e);
    return this._send_request(i, r)
});
ie.prototype._send_request = function(t, e) {
    t.$group_key = this._group_key,
    t.$group_id = this._group_id,
    t.$token = this._get_config("token");
    var r = l.encodeDates(t);
    return this._mixpanel._track_or_batch({
        type: "groups",
        data: r,
        endpoint: this._get_config("api_host") + "/" + this._get_config("api_routes").groups,
        batcher: this._mixpanel.request_batchers.groups
    }, e)
}
;
ie.prototype._is_reserved_property = function(t) {
    return t === "$group_key" || t === "$group_id"
}
;
ie.prototype._get_config = function(t) {
    return this._mixpanel.get_config(t)
}
;
ie.prototype.toString = function() {
    return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id
}
;
ie.prototype.remove = ie.prototype.remove;
ie.prototype.set = ie.prototype.set;
ie.prototype.set_once = ie.prototype.set_once;
ie.prototype.union = ie.prototype.union;
ie.prototype.unset = ie.prototype.unset;
ie.prototype.toString = ie.prototype.toString;
var O = function() {};
l.extend(O.prototype, wf);
O.prototype._init = function(t) {
    this._mixpanel = t
}
;
O.prototype.set = ut(function(t, e, r) {
    var i = this.set_action(t, e);
    return l.isObject(t) && (r = e),
    this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer),
    i[st] = l.extend({}, l.info.people_properties(), i[st]),
    this._send_request(i, r)
});
O.prototype.set_once = ut(function(t, e, r) {
    var i = this.set_once_action(t, e);
    return l.isObject(t) && (r = e),
    this._send_request(i, r)
});
O.prototype.unset = ut(function(t, e) {
    var r = this.unset_action(t);
    return this._send_request(r, e)
});
O.prototype.increment = ut(function(t, e, r) {
    var i = {}
      , s = {};
    return l.isObject(t) ? (l.each(t, function(a, f) {
        if (!this._is_reserved_property(f))
            if (isNaN(parseFloat(a))) {
                H.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                return
            } else
                s[f] = a
    }, this),
    r = e) : (l.isUndefined(e) && (e = 1),
    s[t] = e),
    i[ht] = s,
    this._send_request(i, r)
});
O.prototype.append = ut(function(t, e, r) {
    l.isObject(t) && (r = e);
    var i = this.append_action(t, e);
    return this._send_request(i, r)
});
O.prototype.remove = ut(function(t, e, r) {
    l.isObject(t) && (r = e);
    var i = this.remove_action(t, e);
    return this._send_request(i, r)
});
O.prototype.union = ut(function(t, e, r) {
    l.isObject(t) && (r = e);
    var i = this.union_action(t, e);
    return this._send_request(i, r)
});
O.prototype.track_charge = ut(function(t, e, r) {
    if (!l.isNumber(t) && (t = parseFloat(t),
    isNaN(t))) {
        H.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
        return
    }
    return this.append("$transactions", l.extend({
        $amount: t
    }, e), r)
});
O.prototype.clear_charges = function(t) {
    return this.set("$transactions", [], t)
}
;
O.prototype.delete_user = function() {
    if (!this._identify_called()) {
        H.error("mixpanel.people.delete_user() requires you to call identify() first");
        return
    }
    var t = {
        $delete: this._mixpanel.get_distinct_id()
    };
    return this._send_request(t)
}
;
O.prototype.toString = function() {
    return this._mixpanel.toString() + ".people"
}
;
O.prototype._send_request = function(t, e) {
    t.$token = this._get_config("token"),
    t.$distinct_id = this._mixpanel.get_distinct_id();
    var r = this._mixpanel.get_property("$device_id")
      , i = this._mixpanel.get_property("$user_id")
      , s = this._mixpanel.get_property("$had_persisted_distinct_id");
    r && (t.$device_id = r),
    i && (t.$user_id = i),
    s && (t.$had_persisted_distinct_id = s);
    var a = l.encodeDates(t);
    return this._identify_called() ? this._mixpanel._track_or_batch({
        type: "people",
        data: a,
        endpoint: this._get_config("api_host") + "/" + this._get_config("api_routes").engage,
        batcher: this._mixpanel.request_batchers.people
    }, e) : (this._enqueue(t),
    l.isUndefined(e) || (this._get_config("verbose") ? e({
        status: -1,
        error: null
    }) : e(-1)),
    l.truncate(a, 255))
}
;
O.prototype._get_config = function(t) {
    return this._mixpanel.get_config(t)
}
;
O.prototype._identify_called = function() {
    return this._mixpanel._flags.identify_called === !0
}
;
O.prototype._enqueue = function(t) {
    st in t ? this._mixpanel.persistence._add_to_people_queue(st, t) : Vt in t ? this._mixpanel.persistence._add_to_people_queue(Vt, t) : Ie in t ? this._mixpanel.persistence._add_to_people_queue(Ie, t) : ht in t ? this._mixpanel.persistence._add_to_people_queue(ht, t) : Me in t ? this._mixpanel.persistence._add_to_people_queue(Me, t) : He in t ? this._mixpanel.persistence._add_to_people_queue(He, t) : xt in t ? this._mixpanel.persistence._add_to_people_queue(xt, t) : H.error("Invalid call to _enqueue():", t)
}
;
O.prototype._flush_one_queue = function(t, e, r, i) {
    var s = this
      , a = l.extend({}, this._mixpanel.persistence.load_queue(t))
      , f = a;
    !l.isUndefined(a) && l.isObject(a) && !l.isEmptyObject(a) && (s._mixpanel.persistence._pop_from_people_queue(t, a),
    s._mixpanel.persistence.save(),
    i && (f = i(a)),
    e.call(s, f, function(u, o) {
        u === 0 && s._mixpanel.persistence._add_to_people_queue(t, a),
        l.isUndefined(r) || r(u, o)
    }))
}
;
O.prototype._flush = function(t, e, r, i, s, a, f) {
    var u = this;
    this._flush_one_queue(st, this.set, t),
    this._flush_one_queue(Vt, this.set_once, i),
    this._flush_one_queue(Ie, this.unset, a, function(B) {
        return l.keys(B)
    }),
    this._flush_one_queue(ht, this.increment, e),
    this._flush_one_queue(xt, this.union, s);
    var o = this._mixpanel.persistence.load_queue(Me);
    if (!l.isUndefined(o) && l.isArray(o) && o.length)
        for (var c, p = function(B, P) {
            B === 0 && u._mixpanel.persistence._add_to_people_queue(Me, c),
            l.isUndefined(r) || r(B, P)
        }, R = o.length - 1; R >= 0; R--)
            o = this._mixpanel.persistence.load_queue(Me),
            c = o.pop(),
            u._mixpanel.persistence.save(),
            l.isEmptyObject(c) || u.append(c, p);
    var x = this._mixpanel.persistence.load_queue(He);
    if (!l.isUndefined(x) && l.isArray(x) && x.length)
        for (var g, m = function(B, P) {
            B === 0 && u._mixpanel.persistence._add_to_people_queue(He, g),
            l.isUndefined(f) || f(B, P)
        }, C = x.length - 1; C >= 0; C--)
            x = this._mixpanel.persistence.load_queue(He),
            g = x.pop(),
            u._mixpanel.persistence.save(),
            l.isEmptyObject(g) || u.remove(g, m)
}
;
O.prototype._is_reserved_property = function(t) {
    return t === "$distinct_id" || t === "$token" || t === "$device_id" || t === "$user_id" || t === "$had_persisted_distinct_id"
}
;
O.prototype.set = O.prototype.set;
O.prototype.set_once = O.prototype.set_once;
O.prototype.unset = O.prototype.unset;
O.prototype.increment = O.prototype.increment;
O.prototype.append = O.prototype.append;
O.prototype.remove = O.prototype.remove;
O.prototype.union = O.prototype.union;
O.prototype.track_charge = O.prototype.track_charge;
O.prototype.clear_charges = O.prototype.clear_charges;
O.prototype.delete_user = O.prototype.delete_user;
O.prototype.toString = O.prototype.toString;
var Ui = "__mps"
  , Ki = "__mpso"
  , wi = "__mpus"
  , Ni = "__mpa"
  , Ii = "__mpap"
  , Di = "__mpr"
  , Oi = "__mpu"
  , Nf = "$people_distinct_id"
  , qr = "__alias"
  , hr = "__timers"
  , rl = [Ui, Ki, wi, Ni, Ii, Di, Oi, Nf, qr, hr]
  , $ = function(t) {
    this.props = {},
    this.campaign_params_saved = !1,
    t.persistence_name ? this.name = "mp_" + t.persistence_name : this.name = "mp_" + t.token + "_mixpanel";
    var e = t.persistence;
    e !== "cookie" && e !== "localStorage" && (H.critical("Unknown persistence type " + e + "; falling back to cookie"),
    e = t.persistence = "cookie"),
    e === "localStorage" && l.localStorage.is_supported() ? this.storage = l.localStorage : this.storage = l.cookie,
    this.load(),
    this.update_config(t),
    this.upgrade(),
    this.save()
};
$.prototype.properties = function() {
    var t = {};
    return this.load(),
    l.each(this.props, function(e, r) {
        l.include(rl, r) || (t[r] = e)
    }),
    t
}
;
$.prototype.load = function() {
    if (!this.disabled) {
        var t = this.storage.parse(this.name);
        t && (this.props = l.extend({}, t))
    }
}
;
$.prototype.upgrade = function() {
    var t, e;
    this.storage === l.localStorage ? (t = l.cookie.parse(this.name),
    l.cookie.remove(this.name),
    l.cookie.remove(this.name, !0),
    t && this.register_once(t)) : this.storage === l.cookie && (e = l.localStorage.parse(this.name),
    l.localStorage.remove(this.name),
    e && this.register_once(e))
}
;
$.prototype.save = function() {
    this.disabled || this.storage.set(this.name, l.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain)
}
;
$.prototype.load_prop = function(t) {
    return this.load(),
    this.props[t]
}
;
$.prototype.remove = function() {
    this.storage.remove(this.name, !1, this.cookie_domain),
    this.storage.remove(this.name, !0, this.cookie_domain)
}
;
$.prototype.clear = function() {
    this.remove(),
    this.props = {}
}
;
$.prototype.register_once = function(t, e, r) {
    return l.isObject(t) ? (typeof e > "u" && (e = "None"),
    this.expire_days = typeof r > "u" ? this.default_expiry : r,
    this.load(),
    l.each(t, function(i, s) {
        (!this.props.hasOwnProperty(s) || this.props[s] === e) && (this.props[s] = i)
    }, this),
    this.save(),
    !0) : !1
}
;
$.prototype.register = function(t, e) {
    return l.isObject(t) ? (this.expire_days = typeof e > "u" ? this.default_expiry : e,
    this.load(),
    l.extend(this.props, t),
    this.save(),
    !0) : !1
}
;
$.prototype.unregister = function(t) {
    this.load(),
    t in this.props && (delete this.props[t],
    this.save())
}
;
$.prototype.update_search_keyword = function(t) {
    this.register(l.info.searchInfo(t))
}
;
$.prototype.update_referrer_info = function(t) {
    this.register_once({
        $initial_referrer: t || "$direct",
        $initial_referring_domain: l.info.referringDomain(t) || "$direct"
    }, "")
}
;
$.prototype.get_referrer_info = function() {
    return l.strip_empty_properties({
        $initial_referrer: this.props.$initial_referrer,
        $initial_referring_domain: this.props.$initial_referring_domain
    })
}
;
$.prototype.update_config = function(t) {
    this.default_expiry = this.expire_days = t.cookie_expiration,
    this.set_disabled(t.disable_persistence),
    this.set_cookie_domain(t.cookie_domain),
    this.set_cross_site(t.cross_site_cookie),
    this.set_cross_subdomain(t.cross_subdomain_cookie),
    this.set_secure(t.secure_cookie)
}
;
$.prototype.set_disabled = function(t) {
    this.disabled = t,
    this.disabled ? this.remove() : this.save()
}
;
$.prototype.set_cookie_domain = function(t) {
    t !== this.cookie_domain && (this.remove(),
    this.cookie_domain = t,
    this.save())
}
;
$.prototype.set_cross_site = function(t) {
    t !== this.cross_site && (this.cross_site = t,
    this.remove(),
    this.save())
}
;
$.prototype.set_cross_subdomain = function(t) {
    t !== this.cross_subdomain && (this.cross_subdomain = t,
    this.remove(),
    this.save())
}
;
$.prototype.get_cross_subdomain = function() {
    return this.cross_subdomain
}
;
$.prototype.set_secure = function(t) {
    t !== this.secure && (this.secure = !!t,
    this.remove(),
    this.save())
}
;
$.prototype._add_to_people_queue = function(t, e) {
    var r = this._get_queue_key(t)
      , i = e[t]
      , s = this._get_or_create_queue(st)
      , a = this._get_or_create_queue(Vt)
      , f = this._get_or_create_queue(Ie)
      , u = this._get_or_create_queue(ht)
      , o = this._get_or_create_queue(xt)
      , c = this._get_or_create_queue(He, [])
      , p = this._get_or_create_queue(Me, []);
    r === Ui ? (l.extend(s, i),
    this._pop_from_people_queue(ht, i),
    this._pop_from_people_queue(xt, i),
    this._pop_from_people_queue(Ie, i)) : r === Ki ? (l.each(i, function(R, x) {
        x in a || (a[x] = R)
    }),
    this._pop_from_people_queue(Ie, i)) : r === wi ? l.each(i, function(R) {
        l.each([s, a, u, o], function(x) {
            R in x && delete x[R]
        }),
        l.each(p, function(x) {
            R in x && delete x[R]
        }),
        f[R] = !0
    }) : r === Ni ? (l.each(i, function(R, x) {
        x in s ? s[x] += R : (x in u || (u[x] = 0),
        u[x] += R)
    }, this),
    this._pop_from_people_queue(Ie, i)) : r === Oi ? (l.each(i, function(R, x) {
        l.isArray(R) && (x in o || (o[x] = []),
        o[x] = o[x].concat(R))
    }),
    this._pop_from_people_queue(Ie, i)) : r === Di ? (c.push(i),
    this._pop_from_people_queue(Me, i)) : r === Ii && (p.push(i),
    this._pop_from_people_queue(Ie, i)),
    H.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"),
    H.log(e),
    this.save()
}
;
$.prototype._pop_from_people_queue = function(t, e) {
    var r = this.props[this._get_queue_key(t)];
    l.isUndefined(r) || l.each(e, function(i, s) {
        t === Me || t === He ? l.each(r, function(a) {
            a[s] === i && delete a[s]
        }) : delete r[s]
    }, this)
}
;
$.prototype.load_queue = function(t) {
    return this.load_prop(this._get_queue_key(t))
}
;
$.prototype._get_queue_key = function(t) {
    if (t === st)
        return Ui;
    if (t === Vt)
        return Ki;
    if (t === Ie)
        return wi;
    if (t === ht)
        return Ni;
    if (t === Me)
        return Ii;
    if (t === He)
        return Di;
    if (t === xt)
        return Oi;
    H.error("Invalid queue:", t)
}
;
$.prototype._get_or_create_queue = function(t, e) {
    var r = this._get_queue_key(t);
    return e = l.isUndefined(e) ? {} : e,
    this.props[r] || (this.props[r] = e)
}
;
$.prototype.set_event_timer = function(t, e) {
    var r = this.load_prop(hr) || {};
    r[t] = e,
    this.props[hr] = r,
    this.save()
}
;
$.prototype.remove_event_timer = function(t) {
    var e = this.load_prop(hr) || {}
      , r = e[t];
    return l.isUndefined(r) || (delete this.props[hr][t],
    this.save()),
    r
}
;
var Pi, ye, If = 0, nl = 1, il = function(t) {
    return t
}, xr = function() {}, Be = "mixpanel", Df = "base64", sl = "json", ki = "$device:", It = V.XMLHttpRequest && "withCredentials"in new XMLHttpRequest, Of = !It && ke.indexOf("MSIE") === -1 && ke.indexOf("Mozilla") === -1, Hr = null;
nt.sendBeacon && (Hr = function() {
    return nt.sendBeacon.apply(nt, arguments)
}
);
var Pf = {
    track: "track/",
    engage: "engage/",
    groups: "groups/",
    record: "record/"
}
  , Vs = {
    api_host: "https://api-js.mixpanel.com",
    api_routes: Pf,
    api_method: "POST",
    api_transport: "XHR",
    api_payload_format: Df,
    app_host: "https://mixpanel.com",
    cdn: "https://cdn.mxpnl.com",
    cross_site_cookie: !1,
    cross_subdomain_cookie: !0,
    error_reporter: xr,
    persistence: "cookie",
    persistence_name: "",
    cookie_domain: "",
    cookie_name: "",
    loaded: xr,
    mp_loader: null,
    track_marketing: !0,
    track_pageview: !1,
    skip_first_touch_marketing: !1,
    store_google: !0,
    stop_utm_persistence: !1,
    save_referrer: !0,
    test: !1,
    verbose: !1,
    img: !1,
    debug: !1,
    track_links_timeout: 300,
    cookie_expiration: 365,
    upgrade: !1,
    disable_persistence: !1,
    disable_cookie: !1,
    secure_cookie: !1,
    ip: !0,
    opt_out_tracking_by_default: !1,
    opt_out_persistence_by_default: !1,
    opt_out_tracking_persistence_type: "localStorage",
    opt_out_tracking_cookie_prefix: null,
    property_blacklist: [],
    xhr_headers: {},
    ignore_dnt: !1,
    batch_requests: !0,
    batch_size: 50,
    batch_flush_interval_ms: 5e3,
    batch_request_timeout_ms: 9e4,
    batch_autostart: !0,
    hooks: {},
    record_block_class: new RegExp("^(mp-block|fs-exclude|amp-block|rr-block|ph-no-capture)$"),
    record_block_selector: "img, video",
    record_idle_timeout_ms: 30 * 60 * 1e3,
    record_mask_text_class: new RegExp("^(mp-mask|fs-mask|amp-mask|rr-mask|ph-mask)$"),
    record_mask_text_selector: "*",
    record_max_ms: Vo,
    record_sessions_percent: 0,
    recorder_src: "https://cdn.mxpnl.com/libs/mixpanel-recorder.min.js"
}
  , kf = !1
  , S = function() {}
  , Zn = function(t, e, r) {
    var i, s = r === Be ? ye : ye[r];
    if (s && Pi === If)
        i = s;
    else {
        if (s && !l.isArray(s)) {
            H.error("You have already initialized " + r);
            return
        }
        i = new S
    }
    if (i._cached_groups = {},
    i._init(t, e, r),
    i.people = new O,
    i.people._init(i),
    !i.get_config("skip_first_touch_marketing")) {
        var a = l.info.campaignParams(null)
          , f = {}
          , u = !1;
        l.each(a, function(o, c) {
            f["initial_" + c] = o,
            o && (u = !0)
        }),
        u && i.people.set_once(f)
    }
    return qe.DEBUG = qe.DEBUG || i.get_config("debug"),
    !l.isUndefined(s) && l.isArray(s) && (i._execute_array.call(i.people, s.people),
    i._execute_array(s)),
    i
};
S.prototype.init = function(t, e, r) {
    if (l.isUndefined(r)) {
        this.report_error("You must name your new library: init(token, config, name)");
        return
    }
    if (r === Be) {
        this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
        return
    }
    var i = Zn(t, e, r);
    return ye[r] = i,
    i._loaded(),
    i
}
;
S.prototype._init = function(t, e, r) {
    e = e || {},
    this.__loaded = !0,
    this.config = {};
    var i = {};
    if (!("api_payload_format"in e)) {
        var s = e.api_host || Vs.api_host;
        s.match(/\.mixpanel\.com/) && (i.api_payload_format = sl)
    }
    if (this.set_config(l.extend({}, Vs, i, e, {
        name: r,
        token: t,
        callback_fn: (r === Be ? r : Be + "." + r) + "._jsc"
    })),
    this._jsc = xr,
    this.__dom_loaded_queue = [],
    this.__request_queue = [],
    this.__disabled_events = [],
    this._flags = {
        disable_all_events: !1,
        identify_called: !1
    },
    this.request_batchers = {},
    this._batch_requests = this.get_config("batch_requests"),
    this._batch_requests) {
        if (!l.localStorage.is_supported(!0) || !It)
            this._batch_requests = !1,
            H.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support"),
            l.each(this.get_batcher_configs(), function(o) {
                H.log("Clearing batch queue " + o.queue_key),
                l.localStorage.remove(o.queue_key)
            });
        else if (this.init_batchers(),
        Hr && V.addEventListener) {
            var a = l.bind(function() {
                this.request_batchers.events.stopped || this.request_batchers.events.flush({
                    unloading: !0
                })
            }, this);
            V.addEventListener("pagehide", function(o) {
                o.persisted && a()
            }),
            V.addEventListener("visibilitychange", function() {
                z.visibilityState === "hidden" && a()
            })
        }
    }
    this.persistence = this.cookie = new $(this.config),
    this.unpersisted_superprops = {},
    this._gdpr_init();
    var f = l.UUID();
    this.get_distinct_id() || this.register_once({
        distinct_id: ki + f,
        $device_id: f
    }, "");
    var u = this.get_config("track_pageview");
    u && this._init_url_change_tracking(u),
    this.get_config("record_sessions_percent") > 0 && Math.random() * 100 <= this.get_config("record_sessions_percent") && this.start_session_recording()
}
;
S.prototype.start_session_recording = Tt(function() {
    if (!V.MutationObserver) {
        H.critical("Browser does not support MutationObserver; skipping session recording");
        return
    }
    var t = l.bind(function() {
        this._recorder = this._recorder || new V.__mp_recorder(this),
        this._recorder.startRecording()
    }, this);
    if (l.isUndefined(V.__mp_recorder)) {
        var e = z.createElement("script");
        e.type = "text/javascript",
        e.async = !0,
        e.onload = t,
        e.src = this.get_config("recorder_src"),
        z.head.appendChild(e)
    } else
        t()
});
S.prototype.stop_session_recording = function() {
    this._recorder ? this._recorder.stopRecording() : H.critical("Session recorder module not loaded")
}
;
S.prototype.get_session_recording_properties = function() {
    var t = {};
    if (this._recorder) {
        var e = this._recorder.replayId;
        e && (t.$mp_replay_id = e)
    }
    return t
}
;
S.prototype._loaded = function() {
    if (this.get_config("loaded")(this),
    this._set_default_superprops(),
    this.people.set_once(this.persistence.get_referrer_info()),
    this.get_config("store_google") && this.get_config("stop_utm_persistence")) {
        var t = l.info.campaignParams(null);
        l.each(t, (function(e, r) {
            this.unregister(r)
        }
        ).bind(this))
    }
}
;
S.prototype._set_default_superprops = function() {
    this.persistence.update_search_keyword(z.referrer),
    this.get_config("store_google") && !this.get_config("stop_utm_persistence") && this.register(l.info.campaignParams()),
    this.get_config("save_referrer") && this.persistence.update_referrer_info(z.referrer)
}
;
S.prototype._dom_loaded = function() {
    l.each(this.__dom_loaded_queue, function(t) {
        this._track_dom.apply(this, t)
    }, this),
    this.has_opted_out_tracking() || l.each(this.__request_queue, function(t) {
        this._send_request.apply(this, t)
    }, this),
    delete this.__dom_loaded_queue,
    delete this.__request_queue
}
;
S.prototype._track_dom = function(t, e) {
    if (this.get_config("img"))
        return this.report_error("You can't use DOM tracking functions with img = true."),
        !1;
    if (!kf)
        return this.__dom_loaded_queue.push([t, e]),
        !1;
    var r = new t().init(this);
    return r.track.apply(r, e)
}
;
S.prototype._init_url_change_tracking = function(t) {
    var e = ""
      , r = this.track_pageview();
    if (r && (e = l.info.currentUrl()),
    l.include(["full-url", "url-with-path-and-query-string", "url-with-path"], t)) {
        V.addEventListener("popstate", function() {
            V.dispatchEvent(new Event("mp_locationchange"))
        }),
        V.addEventListener("hashchange", function() {
            V.dispatchEvent(new Event("mp_locationchange"))
        });
        var i = V.history.pushState;
        typeof i == "function" && (V.history.pushState = function(a, f, u) {
            i.call(V.history, a, f, u),
            V.dispatchEvent(new Event("mp_locationchange"))
        }
        );
        var s = V.history.replaceState;
        typeof s == "function" && (V.history.replaceState = function(a, f, u) {
            s.call(V.history, a, f, u),
            V.dispatchEvent(new Event("mp_locationchange"))
        }
        ),
        V.addEventListener("mp_locationchange", (function() {
            var a = l.info.currentUrl()
              , f = !1;
            if (t === "full-url" ? f = a !== e : t === "url-with-path-and-query-string" ? f = a.split("#")[0] !== e.split("#")[0] : t === "url-with-path" && (f = a.split("#")[0].split("?")[0] !== e.split("#")[0].split("?")[0]),
            f) {
                var u = this.track_pageview();
                u && (e = a)
            }
        }
        ).bind(this))
    }
}
;
S.prototype._prepare_callback = function(t, e) {
    if (l.isUndefined(t))
        return null;
    if (It) {
        var r = function(f) {
            t(f, e)
        };
        return r
    } else {
        var i = this._jsc
          , s = "" + Math.floor(Math.random() * 1e8)
          , a = this.get_config("callback_fn") + "[" + s + "]";
        return i[s] = function(f) {
            delete i[s],
            t(f, e)
        }
        ,
        a
    }
}
;
S.prototype._send_request = function(t, e, r, i) {
    var s = !0;
    if (Of)
        return this.__request_queue.push(arguments),
        s;
    var a = {
        method: this.get_config("api_method"),
        transport: this.get_config("api_transport"),
        verbose: this.get_config("verbose")
    }
      , f = null;
    !i && (l.isFunction(r) || typeof r == "string") && (i = r,
    r = null),
    r = l.extend(a, r || {}),
    It || (r.method = "GET");
    var u = r.method === "POST"
      , o = Hr && u && r.transport.toLowerCase() === "sendbeacon"
      , c = r.verbose;
    e.verbose && (c = !0),
    this.get_config("test") && (e.test = 1),
    c && (e.verbose = 1),
    this.get_config("img") && (e.img = 1),
    It || (i ? e.callback = i : (c || this.get_config("test")) && (e.callback = "(function(){})")),
    e.ip = this.get_config("ip") ? 1 : 0,
    e._ = new Date().getTime().toString(),
    u && (f = "data=" + encodeURIComponent(e.data),
    delete e.data),
    t += "?" + l.HTTPBuildQuery(e);
    var p = this;
    if ("img"in e) {
        var R = z.createElement("img");
        R.src = t,
        z.body.appendChild(R)
    } else if (o) {
        try {
            s = Hr(t, f)
        } catch (P) {
            p.report_error(P),
            s = !1
        }
        try {
            i && i(s ? 1 : 0)
        } catch (P) {
            p.report_error(P)
        }
    } else if (It)
        try {
            var x = new XMLHttpRequest;
            x.open(r.method, t, !0);
            var g = this.get_config("xhr_headers");
            if (u && (g["Content-Type"] = "application/x-www-form-urlencoded"),
            l.each(g, function(P, k) {
                x.setRequestHeader(k, P)
            }),
            r.timeout_ms && typeof x.timeout < "u") {
                x.timeout = r.timeout_ms;
                var m = new Date().getTime()
            }
            x.withCredentials = !0,
            x.onreadystatechange = function() {
                if (x.readyState === 4)
                    if (x.status === 200) {
                        if (i)
                            if (c) {
                                var P;
                                try {
                                    P = l.JSONDecode(x.responseText)
                                } catch (K) {
                                    if (p.report_error(K),
                                    r.ignore_json_errors)
                                        P = x.responseText;
                                    else
                                        return
                                }
                                i(P)
                            } else
                                i(Number(x.responseText))
                    } else {
                        var k;
                        x.timeout && !x.status && new Date().getTime() - m >= x.timeout ? k = "timeout" : k = "Bad HTTP status: " + x.status + " " + x.statusText,
                        p.report_error(k),
                        i && i(c ? {
                            status: 0,
                            error: k,
                            xhr_req: x
                        } : 0)
                    }
            }
            ,
            x.send(f)
        } catch (P) {
            p.report_error(P),
            s = !1
        }
    else {
        var C = z.createElement("script");
        C.type = "text/javascript",
        C.async = !0,
        C.defer = !0,
        C.src = t;
        var B = z.getElementsByTagName("script")[0];
        B.parentNode.insertBefore(C, B)
    }
    return s
}
;
S.prototype._execute_array = function(t) {
    var e, r = [], i = [], s = [];
    l.each(t, function(f) {
        f && (e = f[0],
        l.isArray(e) ? s.push(f) : typeof f == "function" ? f.call(this) : l.isArray(f) && e === "alias" ? r.push(f) : l.isArray(f) && e.indexOf("track") !== -1 && typeof this[e] == "function" ? s.push(f) : i.push(f))
    }, this);
    var a = function(f, u) {
        l.each(f, function(o) {
            if (l.isArray(o[0])) {
                var c = u;
                l.each(o, function(p) {
                    c = c[p[0]].apply(c, p.slice(1))
                })
            } else
                this[o[0]].apply(this, o.slice(1))
        }, u)
    };
    a(r, this),
    a(i, this),
    a(s, this)
}
;
S.prototype.are_batchers_initialized = function() {
    return !!this.request_batchers.events
}
;
S.prototype.get_batcher_configs = function() {
    var t = "__mpq_" + this.get_config("token")
      , e = this.get_config("api_routes");
    return this._batcher_configs = this._batcher_configs || {
        events: {
            type: "events",
            endpoint: "/" + e.track,
            queue_key: t + "_ev"
        },
        people: {
            type: "people",
            endpoint: "/" + e.engage,
            queue_key: t + "_pp"
        },
        groups: {
            type: "groups",
            endpoint: "/" + e.groups,
            queue_key: t + "_gr"
        }
    },
    this._batcher_configs
}
;
S.prototype.init_batchers = function() {
    if (!this.are_batchers_initialized()) {
        var t = l.bind(function(r) {
            return new Ge(r.queue_key,{
                libConfig: this.config,
                sendRequestFunc: l.bind(function(i, s, a) {
                    this._send_request(this.get_config("api_host") + r.endpoint, this._encode_data_for_request(i), s, this._prepare_callback(a, i))
                }, this),
                beforeSendHook: l.bind(function(i) {
                    return this._run_hook("before_send_" + r.type, i)
                }, this),
                errorReporter: this.get_config("error_reporter"),
                stopAllBatchingFunc: l.bind(this.stop_batch_senders, this)
            })
        }, this)
          , e = this.get_batcher_configs();
        this.request_batchers = {
            events: t(e.events),
            people: t(e.people),
            groups: t(e.groups)
        }
    }
    this.get_config("batch_autostart") && this.start_batch_senders()
}
;
S.prototype.start_batch_senders = function() {
    this._batchers_were_started = !0,
    this.are_batchers_initialized() && (this._batch_requests = !0,
    l.each(this.request_batchers, function(t) {
        t.start()
    }))
}
;
S.prototype.stop_batch_senders = function() {
    this._batch_requests = !1,
    l.each(this.request_batchers, function(t) {
        t.stop(),
        t.clear()
    })
}
;
S.prototype.push = function(t) {
    this._execute_array([t])
}
;
S.prototype.disable = function(t) {
    typeof t > "u" ? this._flags.disable_all_events = !0 : this.__disabled_events = this.__disabled_events.concat(t)
}
;
S.prototype._encode_data_for_request = function(t) {
    var e = l.JSONEncode(t);
    return this.get_config("api_payload_format") === Df && (e = l.base64Encode(e)),
    {
        data: e
    }
}
;
S.prototype._track_or_batch = function(t, e) {
    var r = l.truncate(t.data, 255)
      , i = t.endpoint
      , s = t.batcher
      , a = t.should_send_immediately
      , f = t.send_request_options || {};
    e = e || xr;
    var u = !0
      , o = l.bind(function() {
        return f.skip_hooks || (r = this._run_hook("before_send_" + t.type, r)),
        r ? (H.log("MIXPANEL REQUEST:"),
        H.log(r),
        this._send_request(i, this._encode_data_for_request(r), f, this._prepare_callback(e, r))) : null
    }, this);
    return this._batch_requests && !a ? s.enqueue(r, function(c) {
        c ? e(1, r) : o()
    }) : u = o(),
    u && r
}
;
S.prototype.track = Tt(function(t, e, r, i) {
    !i && typeof r == "function" && (i = r,
    r = null),
    r = r || {};
    var s = r.transport;
    s && (r.transport = s);
    var a = r.send_immediately;
    if (typeof i != "function" && (i = xr),
    l.isUndefined(t)) {
        this.report_error("No event name provided to mixpanel.track");
        return
    }
    if (this._event_is_disabled(t)) {
        i(0);
        return
    }
    e = l.extend({}, e),
    e.token = this.get_config("token");
    var f = this.persistence.remove_event_timer(t);
    if (!l.isUndefined(f)) {
        var u = new Date().getTime() - f;
        e.$duration = parseFloat((u / 1e3).toFixed(3))
    }
    this._set_default_superprops();
    var o = this.get_config("track_marketing") ? l.info.marketingParams() : {};
    e = l.extend({}, l.info.properties({
        mp_loader: this.get_config("mp_loader")
    }), o, this.persistence.properties(), this.unpersisted_superprops, this.get_session_recording_properties(), e);
    var c = this.get_config("property_blacklist");
    l.isArray(c) ? l.each(c, function(x) {
        delete e[x]
    }) : this.report_error("Invalid value for property_blacklist config: " + c);
    var p = {
        event: t,
        properties: e
    }
      , R = this._track_or_batch({
        type: "events",
        data: p,
        endpoint: this.get_config("api_host") + "/" + this.get_config("api_routes").track,
        batcher: this.request_batchers.events,
        should_send_immediately: a,
        send_request_options: r
    }, i);
    return R
});
S.prototype.set_group = Tt(function(t, e, r) {
    l.isArray(e) || (e = [e]);
    var i = {};
    return i[t] = e,
    this.register(i),
    this.people.set(t, e, r)
});
S.prototype.add_group = Tt(function(t, e, r) {
    var i = this.get_property(t)
      , s = {};
    return i === void 0 ? (s[t] = [e],
    this.register(s)) : i.indexOf(e) === -1 && (i.push(e),
    s[t] = i,
    this.register(s)),
    this.people.union(t, e, r)
});
S.prototype.remove_group = Tt(function(t, e, r) {
    var i = this.get_property(t);
    if (i !== void 0) {
        var s = i.indexOf(e);
        s > -1 && (i.splice(s, 1),
        this.register({
            group_key: i
        })),
        i.length === 0 && this.unregister(t)
    }
    return this.people.remove(t, e, r)
});
S.prototype.track_with_groups = Tt(function(t, e, r, i) {
    var s = l.extend({}, e || {});
    return l.each(r, function(a, f) {
        a != null && (s[f] = a)
    }),
    this.track(t, s, i)
});
S.prototype._create_map_key = function(t, e) {
    return t + "_" + JSON.stringify(e)
}
;
S.prototype._remove_group_from_cache = function(t, e) {
    delete this._cached_groups[this._create_map_key(t, e)]
}
;
S.prototype.get_group = function(t, e) {
    var r = this._create_map_key(t, e)
      , i = this._cached_groups[r];
    return (i === void 0 || i._group_key !== t || i._group_id !== e) && (i = new ie,
    i._init(this, t, e),
    this._cached_groups[r] = i),
    i
}
;
S.prototype.track_pageview = Tt(function(t, e) {
    typeof t != "object" && (t = {}),
    e = e || {};
    var r = e.event_name || "$mp_web_page_view"
      , i = l.extend(l.info.mpPageViewProperties(), l.info.campaignParams(), l.info.clickParams())
      , s = l.extend({}, i, t);
    return this.track(r, s)
});
S.prototype.track_links = function() {
    return this._track_dom.call(this, kt, arguments)
}
;
S.prototype.track_forms = function() {
    return this._track_dom.call(this, on, arguments)
}
;
S.prototype.time_event = function(t) {
    if (l.isUndefined(t)) {
        this.report_error("No event name provided to mixpanel.time_event");
        return
    }
    this._event_is_disabled(t) || this.persistence.set_event_timer(t, new Date().getTime())
}
;
var al = {
    persistent: !0
}
  , Vi = function(t) {
    var e;
    return l.isObject(t) ? e = t : l.isUndefined(t) ? e = {} : e = {
        days: t
    },
    l.extend({}, al, e)
};
S.prototype.register = function(t, e) {
    var r = Vi(e);
    r.persistent ? this.persistence.register(t, r.days) : l.extend(this.unpersisted_superprops, t)
}
;
S.prototype.register_once = function(t, e, r) {
    var i = Vi(r);
    i.persistent ? this.persistence.register_once(t, e, i.days) : (typeof e > "u" && (e = "None"),
    l.each(t, function(s, a) {
        (!this.unpersisted_superprops.hasOwnProperty(a) || this.unpersisted_superprops[a] === e) && (this.unpersisted_superprops[a] = s)
    }, this))
}
;
S.prototype.unregister = function(t, e) {
    e = Vi(e),
    e.persistent ? this.persistence.unregister(t) : delete this.unpersisted_superprops[t]
}
;
S.prototype._register_single = function(t, e) {
    var r = {};
    r[t] = e,
    this.register(r)
}
;
S.prototype.identify = function(t, e, r, i, s, a, f, u) {
    var o = this.get_distinct_id();
    if (t && o !== t) {
        if (typeof t == "string" && t.indexOf(ki) === 0)
            return this.report_error("distinct_id cannot have $device: prefix"),
            -1;
        this.register({
            $user_id: t
        })
    }
    if (!this.get_property("$device_id")) {
        var c = o;
        this.register_once({
            $had_persisted_distinct_id: !0,
            $device_id: c
        }, "")
    }
    t !== o && t !== this.get_property(qr) && (this.unregister(qr),
    this.register({
        distinct_id: t
    })),
    this._flags.identify_called = !0,
    this.people._flush(e, r, i, s, a, f, u),
    t !== o && this.track("$identify", {
        distinct_id: t,
        $anon_distinct_id: o
    }, {
        skip_hooks: !0
    })
}
;
S.prototype.reset = function() {
    this.persistence.clear(),
    this._flags.identify_called = !1;
    var t = l.UUID();
    this.register_once({
        distinct_id: ki + t,
        $device_id: t
    }, "")
}
;
S.prototype.get_distinct_id = function() {
    return this.get_property("distinct_id")
}
;
S.prototype.alias = function(t, e) {
    if (t === this.get_property(Nf))
        return this.report_error("Attempting to create alias for existing People user - aborting."),
        -2;
    var r = this;
    return l.isUndefined(e) && (e = this.get_distinct_id()),
    t !== e ? (this._register_single(qr, t),
    this.track("$create_alias", {
        alias: t,
        distinct_id: e
    }, {
        skip_hooks: !0
    }, function() {
        r.identify(t)
    })) : (this.report_error("alias matches current distinct_id - skipping api call."),
    this.identify(t),
    -1)
}
;
S.prototype.name_tag = function(t) {
    this._register_single("mp_name_tag", t)
}
;
S.prototype.set_config = function(t) {
    if (l.isObject(t)) {
        l.extend(this.config, t);
        var e = t.batch_size;
        e && l.each(this.request_batchers, function(r) {
            r.resetBatchSize()
        }),
        this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name),
        this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie),
        this.persistence && this.persistence.update_config(this.config),
        qe.DEBUG = qe.DEBUG || this.get_config("debug")
    }
}
;
S.prototype.get_config = function(t) {
    return this.config[t]
}
;
S.prototype._run_hook = function(t) {
    var e = (this.config.hooks[t] || il).apply(this, rt.call(arguments, 1));
    return typeof e > "u" && (this.report_error(t + " hook did not return a value"),
    e = null),
    e
}
;
S.prototype.get_property = function(t) {
    return this.persistence.load_prop([t])
}
;
S.prototype.toString = function() {
    var t = this.get_config("name");
    return t !== Be && (t = Be + "." + t),
    t
}
;
S.prototype._event_is_disabled = function(t) {
    return l.isBlockedUA(ke) || this._flags.disable_all_events || l.include(this.__disabled_events, t)
}
;
S.prototype._gdpr_init = function() {
    var t = this.get_config("opt_out_tracking_persistence_type") === "localStorage";
    t && l.localStorage.is_supported() && (!this.has_opted_in_tracking() && this.has_opted_in_tracking({
        persistence_type: "cookie"
    }) && this.opt_in_tracking({
        enable_persistence: !1
    }),
    !this.has_opted_out_tracking() && this.has_opted_out_tracking({
        persistence_type: "cookie"
    }) && this.opt_out_tracking({
        clear_persistence: !1
    }),
    this.clear_opt_in_out_tracking({
        persistence_type: "cookie",
        enable_persistence: !1
    })),
    this.has_opted_out_tracking() ? this._gdpr_update_persistence({
        clear_persistence: !0
    }) : !this.has_opted_in_tracking() && (this.get_config("opt_out_tracking_by_default") || l.cookie.get("mp_optout")) && (l.cookie.remove("mp_optout"),
    this.opt_out_tracking({
        clear_persistence: this.get_config("opt_out_persistence_by_default")
    }))
}
;
S.prototype._gdpr_update_persistence = function(t) {
    var e;
    if (t && t.clear_persistence)
        e = !0;
    else if (t && t.enable_persistence)
        e = !1;
    else
        return;
    !this.get_config("disable_persistence") && this.persistence.disabled !== e && this.persistence.set_disabled(e),
    e ? this.stop_batch_senders() : this._batchers_were_started && this.start_batch_senders()
}
;
S.prototype._gdpr_call_func = function(t, e) {
    return e = l.extend({
        track: l.bind(this.track, this),
        persistence_type: this.get_config("opt_out_tracking_persistence_type"),
        cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
        cookie_expiration: this.get_config("cookie_expiration"),
        cross_site_cookie: this.get_config("cross_site_cookie"),
        cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
        cookie_domain: this.get_config("cookie_domain"),
        secure_cookie: this.get_config("secure_cookie"),
        ignore_dnt: this.get_config("ignore_dnt")
    }, e),
    l.localStorage.is_supported() || (e.persistence_type = "cookie"),
    t(this.get_config("token"), {
        track: e.track,
        trackEventName: e.track_event_name,
        trackProperties: e.track_properties,
        persistenceType: e.persistence_type,
        persistencePrefix: e.cookie_prefix,
        cookieDomain: e.cookie_domain,
        cookieExpiration: e.cookie_expiration,
        crossSiteCookie: e.cross_site_cookie,
        crossSubdomainCookie: e.cross_subdomain_cookie,
        secureCookie: e.secure_cookie,
        ignoreDnt: e.ignore_dnt
    })
}
;
S.prototype.opt_in_tracking = function(t) {
    t = l.extend({
        enable_persistence: !0
    }, t),
    this._gdpr_call_func(Jo, t),
    this._gdpr_update_persistence(t)
}
;
S.prototype.opt_out_tracking = function(t) {
    t = l.extend({
        clear_persistence: !0,
        delete_user: !0
    }, t),
    t.delete_user && this.people && this.people._identify_called() && (this.people.delete_user(),
    this.people.clear_charges()),
    this._gdpr_call_func(Yo, t),
    this._gdpr_update_persistence(t)
}
;
S.prototype.has_opted_in_tracking = function(t) {
    return this._gdpr_call_func(Qo, t)
}
;
S.prototype.has_opted_out_tracking = function(t) {
    return this._gdpr_call_func(Bf, t)
}
;
S.prototype.clear_opt_in_out_tracking = function(t) {
    t = l.extend({
        enable_persistence: !0
    }, t),
    this._gdpr_call_func(Zo, t),
    this._gdpr_update_persistence(t)
}
;
S.prototype.report_error = function(t, e) {
    H.error.apply(H.error, arguments);
    try {
        !e && !(t instanceof Error) && (t = new Error(t)),
        this.get_config("error_reporter")(t, e)
    } catch (r) {
        H.error(r)
    }
}
;
S.prototype.init = S.prototype.init;
S.prototype.reset = S.prototype.reset;
S.prototype.disable = S.prototype.disable;
S.prototype.time_event = S.prototype.time_event;
S.prototype.track = S.prototype.track;
S.prototype.track_links = S.prototype.track_links;
S.prototype.track_forms = S.prototype.track_forms;
S.prototype.track_pageview = S.prototype.track_pageview;
S.prototype.register = S.prototype.register;
S.prototype.register_once = S.prototype.register_once;
S.prototype.unregister = S.prototype.unregister;
S.prototype.identify = S.prototype.identify;
S.prototype.alias = S.prototype.alias;
S.prototype.name_tag = S.prototype.name_tag;
S.prototype.set_config = S.prototype.set_config;
S.prototype.get_config = S.prototype.get_config;
S.prototype.get_property = S.prototype.get_property;
S.prototype.get_distinct_id = S.prototype.get_distinct_id;
S.prototype.toString = S.prototype.toString;
S.prototype.opt_out_tracking = S.prototype.opt_out_tracking;
S.prototype.opt_in_tracking = S.prototype.opt_in_tracking;
S.prototype.has_opted_out_tracking = S.prototype.has_opted_out_tracking;
S.prototype.has_opted_in_tracking = S.prototype.has_opted_in_tracking;
S.prototype.clear_opt_in_out_tracking = S.prototype.clear_opt_in_out_tracking;
S.prototype.get_group = S.prototype.get_group;
S.prototype.set_group = S.prototype.set_group;
S.prototype.add_group = S.prototype.add_group;
S.prototype.remove_group = S.prototype.remove_group;
S.prototype.track_with_groups = S.prototype.track_with_groups;
S.prototype.start_batch_senders = S.prototype.start_batch_senders;
S.prototype.stop_batch_senders = S.prototype.stop_batch_senders;
S.prototype.start_session_recording = S.prototype.start_session_recording;
S.prototype.stop_session_recording = S.prototype.stop_session_recording;
S.prototype.get_session_recording_properties = S.prototype.get_session_recording_properties;
S.prototype.DEFAULT_API_ROUTES = Pf;
$.prototype.properties = $.prototype.properties;
$.prototype.update_search_keyword = $.prototype.update_search_keyword;
$.prototype.update_referrer_info = $.prototype.update_referrer_info;
$.prototype.get_cross_subdomain = $.prototype.get_cross_subdomain;
$.prototype.clear = $.prototype.clear;
var Kt = {}
  , fl = function() {
    l.each(Kt, function(t, e) {
        e !== Be && (ye[e] = t)
    }),
    ye._ = l
}
  , ul = function() {
    ye.init = function(t, e, r) {
        if (r)
            return ye[r] || (ye[r] = Kt[r] = Zn(t, e, r),
            ye[r]._loaded()),
            ye[r];
        var i = ye;
        Kt[Be] ? i = Kt[Be] : t && (i = Zn(t, e, Be),
        i._loaded(),
        Kt[Be] = i),
        ye = i,
        Pi === nl && (V[Be] = ye),
        fl()
    }
}
  , ol = function() {
    function t() {
        t.done || (t.done = !0,
        kf = !0,
        Of = !1,
        l.each(Kt, function(i) {
            i._dom_loaded()
        }))
    }
    function e() {
        try {
            z.documentElement.doScroll("left")
        } catch {
            setTimeout(e, 1);
            return
        }
        t()
    }
    if (z.addEventListener)
        z.readyState === "complete" ? t() : z.addEventListener("DOMContentLoaded", t, !1);
    else if (z.attachEvent) {
        z.attachEvent("onreadystatechange", t);
        var r = !1;
        try {
            r = V.frameElement === null
        } catch {}
        z.documentElement.doScroll && r && e()
    }
    l.register_event(V, "load", t, !0)
};
function ll() {
    return Pi = If,
    ye = new S,
    ul(),
    ye.init(),
    ol(),
    ye
}
var cl = ll()
  , pl = cl;
const $s = Po(pl);
class $i {
    static setup() {
        this.isSetup = !0,
        gtag("config", "G-V1QJVQMYF1", {
            send_page_view: !1
        }),
        $s.init("2e284873b7269f13b850ac994abfd848", {
            debug: "false"
        })
    }
    static ga(e, r) {
        this.isSetup || this.setup(),
        gtag("event", e, r)
    }
    static mp(e, r) {
        this.isSetup || this.setup(),
        $s.track(e, r)
    }
    static pageView(e) {
        this.ga("page_view", {
            page_title: e,
            page_location: `https://nedojack.ru/${e}`
        })
    }
    static gameStarted(e, r) {
        const i = {
            tag: e
        };
        r.isUGC !== void 0 && (i.is_ugc = r.isUGC),
        r.isSequel !== void 0 && (i.is_sequel = r.isSequel),
        r.locale !== void 0 && (i.locale = r.locale),
        r.mode !== void 0 && (i.mode = r.mode),
        r.numberOfPlayer !== void 0 && (i.number_of_players = r.numberOfPlayer),
        this.ga("game_start", i)
    }
    static gameJoined(e, r) {
        this.mp("Game Joined", {
            tag: e,
            ...r
        })
    }
    static bannerClick(e, r) {
        this.ga("banner_click", {
            url: e,
            location: r
        })
    }
    static externalLinkClick(e, r) {
        this.ga("external_link_click", {
            url: e,
            location: r
        })
    }
    static moderatorConnected(e) {
        this.ga("moderator_connected", {
            tag: e
        }),
        this.mp("Moderator Connected", {
            tag: e
        })
    }
    static itemModerated(e, r) {
        this.ga("item_moderated", {
            tag: e,
            was_rejected: r
        }),
        this.mp("Moderator Item", {
            tag: e,
            wasRejected: r
        })
    }
    static playerKicked(e, r) {
        this.ga("player_kicked", {
            tag: e,
            is_lobby: r
        }),
        this.mp("Moderator Kick", {
            tag: e,
            isLobby: r
        })
    }
    static galleryImpression(e, r) {
        this.ga("gallery_impression", {
            category_id: e,
            location: r
        })
    }
    static galleryClick(e, r) {
        this.ga("gallery_click", {
            category_id: e,
            location: r
        }),
        this.mp("Gallery Click", {
            categoryId: e,
            location: r
        })
    }
    static galleryAddToCart(e, r) {
        this.mp("Gallery Add To Cart", {
            categoryId: e,
            ...r
        })
    }
    static galleryCheckout(e, r) {
        this.mp("Gallery Checkout", {
            categoryId: e,
            ...r
        })
    }
    static galleryShare(e, r) {
        this.mp("Gallery Share", {
            categoryId: e,
            ...r
        })
    }
    static galleryWatch(e, r) {
        this.mp("Gallery Watch", {
            categoryId: e,
            ...r
        })
    }
    static galleryDownload(e, r) {
        this.mp("Gallery Download", {
            categoryId: e,
            ...r
        })
    }
}
Se($i, "isSetup", !1);
const El = [{
    name: "Prototype",
    tag: "prototype",
    wrapper: "vue",
    isPublic: !0,
    directory: "internal/prototype"
}, {
    name: "EcastTestClient",
    tag: "ecast-test-client",
    wrapper: "marionette",
    isPublic: !0,
    directory: "internal/ecast-test-client"
}, {
    name: "Quiplash 3",
    tag: "quiplash3-tjsp",
    wrapper: "vue",
    isPublic: !0,
    directory: "tjsp/quiplash3",
    features: ["moderation"],
    categoryId: "quiplash3Game"
}, {
    name: "Tee K.O.",
    tag: "awshirt-tjsp",
    wrapper: "vue",
    isPublic: !0,
    directory: "tjsp/awshirt",
    features: ["moderation"],
    shopItems: ["shirts"],
    categoryId: "TeeKOGame",
    galleryId: "teeko"
}, {
    name: "Trivia Murder Party 2",
    tag: "triviadeath2-tjsp",
    wrapper: "vue",
    isPublic: !0,
    directory: "tjsp/triviadeath2",
    categoryId: "TriviaMurderParty2Game"
}, {
    name: "Quiplash 2 InterLASHional",
    tag: "quiplash2-international",
    wrapper: "marionette",
    isPublic: !0,
    directory: "standalone/quiplash2-international",
    categoryId: "quiplash2-internationalGame"
}, {
    name: "Guesspionage Crowdplay",
    tag: "guesspionage-crowdplay",
    wrapper: "marionette",
    isPublic: !0,
    directory: "standalone/guesspionage-crowdplay"
}, {
    name: "Drawful 2",
    tag: "drawful2",
    wrapper: "marionette",
    isPublic: !0,
    directory: "standalone/drawful2",
    categoryId: "DrawfulGame",
    shopItems: ["shirts"]
}, {
    name: "Drawful 2",
    tag: "drawful2international",
    wrapper: "marionette",
    isPublic: !0,
    directory: "standalone/drawful2-international",
    features: ["moderation"]
}, {
    name: "Acquisitions, Inc.",
    tag: "acquisitions-inc",
    wrapper: "marionette",
    isPublic: !0,
    directory: "standalone/acquisitions-inc"
}, {
    name: "The Jackbox Survey Scramble",
    tag: "bigsurvey",
    wrapper: "vue",
    isPublic: !0,
    directory: "standalone/bigsurvey",
    features: ["moderation", "kicking", "dropInDropOut"],
    categoryId: "BigSurveyGame",
    galleryId: "survey-scramble"
}, {
    name: "You Don't Know Jack 2015",
    tag: "ydkj2015",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp1/ydkj2015"
}, {
    name: "Drawful",
    tag: "drawful",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp1/drawful"
}, {
    name: "Word Spud",
    tag: "wordspud",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp1/wordspud"
}, {
    name: "Lie Swatter",
    tag: "lieswatter",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp1/lieswatter"
}, {
    name: "Fibbage",
    tag: "fibbage",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp1/fibbage"
}, {
    name: "Fibbage 2",
    tag: "fibbage2",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp2/fibbage2"
}, {
    name: "Earwax",
    tag: "earwax",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp2/earwax"
}, {
    name: "Bidiots",
    tag: "auction",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp2/auction"
}, {
    name: "Bomb Corp",
    tag: "bombintern",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp2/bombintern"
}, {
    name: "Quiplash",
    tag: "quiplash",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp2/quiplash"
}, {
    name: "Fakin' It",
    tag: "fakinit",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp3/fakinit"
}, {
    name: "Tee K.O.",
    tag: "awshirt",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp3/awshirt",
    shopItems: ["shirts"],
    galleryId: "teeko"
}, {
    name: "Quiplash 2",
    tag: "quiplash2",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp3/quiplash2",
    categoryId: "Quiplash2Game"
}, {
    name: "Trivia Murder Party",
    tag: "triviadeath",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp3/triviadeath",
    categoryId: "TriviaDeathResults"
}, {
    name: "Guesspionage",
    tag: "pollposition",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp3/pollposition"
}, {
    name: "Fibbage 3",
    tag: "fibbage3",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp4/fibbage3"
}, {
    name: "Survive the Internet",
    tag: "survivetheinternet",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp4/survivetheinternet",
    categoryId: "STIGame"
}, {
    name: "Monster Seeking Monster",
    tag: "monstermingle",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp4/monstermingle",
    categoryId: "MonsterMingleGame"
}, {
    name: "Bracketeering",
    tag: "bracketeering",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp4/bracketeering",
    categoryId: "BRKGame"
}, {
    name: "Civic Doodle",
    tag: "overdrawn",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp4/overdrawn",
    categoryId: "OverdrawnGame",
    shopItems: ["shirts"]
}, {
    name: "You Don't Know Jack: Full Stream",
    tag: "ydkj2018",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp5/ydkj2018",
    categoryId: "YDKJ2018Game"
}, {
    name: "Split the Room",
    tag: "splittheroom",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp5/splittheroom",
    categoryId: "SplitTheRoomGame"
}, {
    name: "Mad Verse City",
    tag: "rapbattle",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp5/rapbattle",
    categoryId: "RapBattleGame"
}, {
    name: "Zeeple Dome",
    tag: "slingshoot",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp5/slingshoot",
    categoryId: "SlingShootGame"
}, {
    name: "Patently Stupid",
    tag: "patentlystupid",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp5/patentlystupid",
    categoryId: "PatentlyStupidGame",
    shopItems: ["mugs"]
}, {
    name: "Trivia Murder Party 2",
    tag: "triviadeath2",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp6/triviadeath2",
    categoryId: "TriviaDeath2Game"
}, {
    name: "Role Models",
    tag: "rolemodels",
    wrapper: "marionette",
    isPublic: !0,
    features: ["camera"],
    directory: "pp6/rolemodels",
    categoryId: "RoleModelsGame",
    shopItems: ["shirts"]
}, {
    name: "Joke Boat",
    tag: "jokeboat",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp6/jokeboat",
    categoryId: "JokeboatGame"
}, {
    name: "Dictionarium",
    tag: "ridictionary",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp6/ridictionary",
    categoryId: "RidictionaryGame"
}, {
    name: "Push the Button",
    tag: "pushthebutton",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp6/pushthebutton",
    categoryId: "PushTheButtonGame"
}, {
    name: "Talking Points",
    tag: "jackbox-talks",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp7/jackboxtalks",
    features: ["camera", "moderation"],
    categoryId: "JackboxTalksGame"
}, {
    name: "Quiplash 3",
    tag: "quiplash3",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp7/quiplash3",
    features: ["moderation"],
    categoryId: "quiplash3Game"
}, {
    name: "The Devils and the Details",
    tag: "everyday",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp7/everyday",
    categoryId: "EverydayGame",
    shopItems: ["mugs"]
}, {
    name: "Champ'd Up",
    tag: "worldchamps",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp7/worldchamps",
    features: ["moderation"],
    categoryId: "WorldChampionsGame",
    shopItems: ["cards"]
}, {
    name: "Blather 'Round",
    tag: "blanky-blank",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp7/blanky-blank",
    categoryId: "BlankyBlankGame"
}, {
    name: "Job Job",
    tag: "apply-yourself",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp8/apply-yourself",
    categoryId: "JobGameGame",
    features: ["moderation", "previews"]
}, {
    name: "Drawful Animate",
    tag: "drawful-animate",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp8/drawful-animate",
    categoryId: "DrawfulAnimateGame",
    features: ["moderation"]
}, {
    name: "The Wheel of Enormous Proportions",
    tag: "the-wheel",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp8/the-wheel",
    categoryId: "TheWheelGame"
}, {
    name: "The Poll Mine",
    tag: "survey-bomb",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp8/survey-bomb",
    categoryId: "SurveyBombGame"
}, {
    name: "Weapons Drawn",
    tag: "murder-detectives",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp8/murder-detectives",
    categoryId: "MurderDetectivesGame",
    features: ["moderation"]
}, {
    name: "Fibbage 4",
    tag: "fourbage",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp9/fourbage",
    features: ["moderation", "kicking"],
    categoryId: "Fibbage4Game"
}, {
    name: "Roomerang",
    tag: "htmf",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp9/htmf",
    features: ["moderation", "kicking"],
    categoryId: "MakeFriendsGame"
}, {
    name: "Junktopia",
    tag: "antique-freak",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp9/antique-freak",
    features: ["moderation", "kicking"],
    categoryId: "AntiqueGameGame"
}, {
    name: "Nonsensory",
    tag: "range-game",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp9/range-game",
    features: ["moderation", "kicking"],
    categoryId: "RangeGameGame"
}, {
    name: "Quixort",
    tag: "lineup",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp9/lineup",
    features: ["kicking", "previews"],
    categoryId: "LineupGame"
}, {
    name: "Tee K.O. 2",
    tag: "awshirt2",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp10/awshirt2",
    features: ["moderation", "kicking"],
    shopItems: ["shirts"],
    categoryId: "TeeKO2Game",
    galleryId: "teeko2"
}, {
    name: "Dodo Re Mi",
    tag: "nopus-opus",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp10/nopus-opus",
    features: ["dropInDropOut", "kicking"],
    categoryId: "NopusOpusGame",
    galleryId: "dodo-re-mi"
}, {
    name: "FixyText",
    tag: "risky-text",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp10/risky-text",
    features: ["moderation", "kicking"],
    categoryId: "FixyTextGame",
    galleryId: "fixytext"
}, {
    name: "Хронолом",
    tag: "time-trivia",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp10/time-trivia",
    features: ["kicking"],
    categoryId: "TimeTriviaGame",
    galleryId: "timejinx"
}, {
    name: "Hypnotorious",
    tag: "us-them",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp10/us-them",
    features: ["moderation", "kicking"],
    categoryId: "StrangersGame",
    galleryId: "hypnotorious"
}, {
    name: "Fakin' It All Night Long",
    tag: "fakinit2",
    wrapper: "vue",
    isPublic: !0,
    directory: "ppad/fakinit2",
    features: ["moderation", "kicking"],
    categoryId: "FakinIt2Game",
    galleryId: "fakin-it-all-night-long"
}, {
    name: "Dirty Drawful",
    tag: "drawful3",
    wrapper: "vue",
    isPublic: !0,
    directory: "ppad/drawful3",
    features: ["moderation", "kicking"],
    categoryId: "Drawful3Game",
    galleryId: "dirty-drawful"
}, {
    name: "Let Me Finish",
    tag: "captcha",
    wrapper: "vue",
    isPublic: !0,
    directory: "ppad/captcha",
    features: ["moderation", "kicking"],
    categoryId: "CAPTCHAGame",
    galleryId: "let-me-finish"
}];
let hl = [];
const Vf = [...El, ...hl]
  , Ms = t => {
    var r;
    return (((r = window == null ? void 0 : window.tv) == null ? void 0 : r.games) || Vf).find(i => i.tag === t || i.galleryId === t || i.categoryId === t)
}
;
function xl() {
    this.__data__ = [],
    this.size = 0
}
var _l = xl;
function Rl(t, e) {
    return t === e || t !== t && e !== e
}
var ln = Rl
  , bl = ln;
function yl(t, e) {
    for (var r = t.length; r--; )
        if (bl(t[r][0], e))
            return r;
    return -1
}
var cn = yl
  , gl = cn
  , ml = Array.prototype
  , Tl = ml.splice;
function Sl(t) {
    var e = this.__data__
      , r = gl(e, t);
    if (r < 0)
        return !1;
    var i = e.length - 1;
    return r == i ? e.pop() : Tl.call(e, r, 1),
    --this.size,
    !0
}
var Ll = Sl
  , dl = cn;
function vl(t) {
    var e = this.__data__
      , r = dl(e, t);
    return r < 0 ? void 0 : e[r][1]
}
var Al = vl
  , Cl = cn;
function Bl(t) {
    return Cl(this.__data__, t) > -1
}
var Ul = Bl
  , Kl = cn;
function wl(t, e) {
    var r = this.__data__
      , i = Kl(r, t);
    return i < 0 ? (++this.size,
    r.push([t, e])) : r[i][1] = e,
    this
}
var Nl = wl
  , Il = _l
  , Dl = Ll
  , Ol = Al
  , Pl = Ul
  , kl = Nl;
function Wt(t) {
    var e = -1
      , r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Wt.prototype.clear = Il;
Wt.prototype.delete = Dl;
Wt.prototype.get = Ol;
Wt.prototype.has = Pl;
Wt.prototype.set = kl;
var pn = Wt
  , Vl = pn;
function $l() {
    this.__data__ = new Vl,
    this.size = 0
}
var Ml = $l;
function Gl(t) {
    var e = this.__data__
      , r = e.delete(t);
    return this.size = e.size,
    r
}
var Xl = Gl;
function jl(t) {
    return this.__data__.get(t)
}
var Fl = jl;
function ql(t) {
    return this.__data__.has(t)
}
var Hl = ql
  , Wl = typeof pe == "object" && pe && pe.Object === Object && pe
  , $f = Wl
  , zl = $f
  , Jl = typeof self == "object" && self && self.Object === Object && self
  , Yl = zl || Jl || Function("return this")()
  , zt = Yl
  , Ql = zt
  , Zl = Ql.Symbol
  , Mf = Zl
  , Gs = Mf
  , Gf = Object.prototype
  , ec = Gf.hasOwnProperty
  , tc = Gf.toString
  , sr = Gs ? Gs.toStringTag : void 0;
function rc(t) {
    var e = ec.call(t, sr)
      , r = t[sr];
    try {
        t[sr] = void 0;
        var i = !0
    } catch {}
    var s = tc.call(t);
    return i && (e ? t[sr] = r : delete t[sr]),
    s
}
var nc = rc
  , ic = Object.prototype
  , sc = ic.toString;
function ac(t) {
    return sc.call(t)
}
var fc = ac
  , Xs = Mf
  , uc = nc
  , oc = fc
  , lc = "[object Null]"
  , cc = "[object Undefined]"
  , js = Xs ? Xs.toStringTag : void 0;
function pc(t) {
    return t == null ? t === void 0 ? cc : lc : js && js in Object(t) ? uc(t) : oc(t)
}
var En = pc;
function Ec(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}
var St = Ec
  , hc = En
  , xc = St
  , _c = "[object AsyncFunction]"
  , Rc = "[object Function]"
  , bc = "[object GeneratorFunction]"
  , yc = "[object Proxy]";
function gc(t) {
    if (!xc(t))
        return !1;
    var e = hc(t);
    return e == Rc || e == bc || e == _c || e == yc
}
var Mi = gc
  , mc = zt
  , Tc = mc["__core-js_shared__"]
  , Sc = Tc
  , Nn = Sc
  , Fs = function() {
    var t = /[^.]+$/.exec(Nn && Nn.keys && Nn.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : ""
}();
function Lc(t) {
    return !!Fs && Fs in t
}
var dc = Lc
  , vc = Function.prototype
  , Ac = vc.toString;
function Cc(t) {
    if (t != null) {
        try {
            return Ac.call(t)
        } catch {}
        try {
            return t + ""
        } catch {}
    }
    return ""
}
var Bc = Cc
  , Uc = Mi
  , Kc = dc
  , wc = St
  , Nc = Bc
  , Ic = /[\\^$.*+?()[\]{}|]/g
  , Dc = /^\[object .+?Constructor\]$/
  , Oc = Function.prototype
  , Pc = Object.prototype
  , kc = Oc.toString
  , Vc = Pc.hasOwnProperty
  , $c = RegExp("^" + kc.call(Vc).replace(Ic, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Mc(t) {
    if (!wc(t) || Kc(t))
        return !1;
    var e = Uc(t) ? $c : Dc;
    return e.test(Nc(t))
}
var Gc = Mc;
function Xc(t, e) {
    return t == null ? void 0 : t[e]
}
var jc = Xc
  , Fc = Gc
  , qc = jc;
function Hc(t, e) {
    var r = qc(t, e);
    return Fc(r) ? r : void 0
}
var Gi = Hc
  , Wc = Gi
  , zc = zt
  , Jc = Wc(zc, "Map")
  , Xf = Jc
  , Yc = Gi
  , Qc = Yc(Object, "create")
  , hn = Qc
  , qs = hn;
function Zc() {
    this.__data__ = qs ? qs(null) : {},
    this.size = 0
}
var e0 = Zc;
function t0(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0,
    e
}
var r0 = t0
  , n0 = hn
  , i0 = "__lodash_hash_undefined__"
  , s0 = Object.prototype
  , a0 = s0.hasOwnProperty;
function f0(t) {
    var e = this.__data__;
    if (n0) {
        var r = e[t];
        return r === i0 ? void 0 : r
    }
    return a0.call(e, t) ? e[t] : void 0
}
var u0 = f0
  , o0 = hn
  , l0 = Object.prototype
  , c0 = l0.hasOwnProperty;
function p0(t) {
    var e = this.__data__;
    return o0 ? e[t] !== void 0 : c0.call(e, t)
}
var E0 = p0
  , h0 = hn
  , x0 = "__lodash_hash_undefined__";
function _0(t, e) {
    var r = this.__data__;
    return this.size += this.has(t) ? 0 : 1,
    r[t] = h0 && e === void 0 ? x0 : e,
    this
}
var R0 = _0
  , b0 = e0
  , y0 = r0
  , g0 = u0
  , m0 = E0
  , T0 = R0;
function Jt(t) {
    var e = -1
      , r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Jt.prototype.clear = b0;
Jt.prototype.delete = y0;
Jt.prototype.get = g0;
Jt.prototype.has = m0;
Jt.prototype.set = T0;
var S0 = Jt
  , Hs = S0
  , L0 = pn
  , d0 = Xf;
function v0() {
    this.size = 0,
    this.__data__ = {
        hash: new Hs,
        map: new (d0 || L0),
        string: new Hs
    }
}
var A0 = v0;
function C0(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}
var B0 = C0
  , U0 = B0;
function K0(t, e) {
    var r = t.__data__;
    return U0(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map
}
var xn = K0
  , w0 = xn;
function N0(t) {
    var e = w0(this, t).delete(t);
    return this.size -= e ? 1 : 0,
    e
}
var I0 = N0
  , D0 = xn;
function O0(t) {
    return D0(this, t).get(t)
}
var P0 = O0
  , k0 = xn;
function V0(t) {
    return k0(this, t).has(t)
}
var $0 = V0
  , M0 = xn;
function G0(t, e) {
    var r = M0(this, t)
      , i = r.size;
    return r.set(t, e),
    this.size += r.size == i ? 0 : 1,
    this
}
var X0 = G0
  , j0 = A0
  , F0 = I0
  , q0 = P0
  , H0 = $0
  , W0 = X0;
function Yt(t) {
    var e = -1
      , r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Yt.prototype.clear = j0;
Yt.prototype.delete = F0;
Yt.prototype.get = q0;
Yt.prototype.has = H0;
Yt.prototype.set = W0;
var z0 = Yt
  , J0 = pn
  , Y0 = Xf
  , Q0 = z0
  , Z0 = 200;
function ep(t, e) {
    var r = this.__data__;
    if (r instanceof J0) {
        var i = r.__data__;
        if (!Y0 || i.length < Z0 - 1)
            return i.push([t, e]),
            this.size = ++r.size,
            this;
        r = this.__data__ = new Q0(i)
    }
    return r.set(t, e),
    this.size = r.size,
    this
}
var tp = ep
  , rp = pn
  , np = Ml
  , ip = Xl
  , sp = Fl
  , ap = Hl
  , fp = tp;
function Qt(t) {
    var e = this.__data__ = new rp(t);
    this.size = e.size
}
Qt.prototype.clear = np;
Qt.prototype.delete = ip;
Qt.prototype.get = sp;
Qt.prototype.has = ap;
Qt.prototype.set = fp;
var up = Qt
  , op = Gi
  , lp = function() {
    try {
        var t = op(Object, "defineProperty");
        return t({}, "", {}),
        t
    } catch {}
}()
  , jf = lp
  , Ws = jf;
function cp(t, e, r) {
    e == "__proto__" && Ws ? Ws(t, e, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
    }) : t[e] = r
}
var Xi = cp
  , pp = Xi
  , Ep = ln;
function hp(t, e, r) {
    (r !== void 0 && !Ep(t[e], r) || r === void 0 && !(e in t)) && pp(t, e, r)
}
var Ff = hp;
function xp(t) {
    return function(e, r, i) {
        for (var s = -1, a = Object(e), f = i(e), u = f.length; u--; ) {
            var o = f[t ? u : ++s];
            if (r(a[o], o, a) === !1)
                break
        }
        return e
    }
}
var _p = xp
  , Rp = _p
  , bp = Rp()
  , yp = bp
  , Wr = {
    exports: {}
};
Wr.exports;
(function(t, e) {
    var r = zt
      , i = e && !e.nodeType && e
      , s = i && !0 && t && !t.nodeType && t
      , a = s && s.exports === i
      , f = a ? r.Buffer : void 0
      , u = f ? f.allocUnsafe : void 0;
    function o(c, p) {
        if (p)
            return c.slice();
        var R = c.length
          , x = u ? u(R) : new c.constructor(R);
        return c.copy(x),
        x
    }
    t.exports = o
}
)(Wr, Wr.exports);
var gp = Wr.exports
  , mp = zt
  , Tp = mp.Uint8Array
  , Sp = Tp
  , zs = Sp;
function Lp(t) {
    var e = new t.constructor(t.byteLength);
    return new zs(e).set(new zs(t)),
    e
}
var dp = Lp
  , vp = dp;
function Ap(t, e) {
    var r = e ? vp(t.buffer) : t.buffer;
    return new t.constructor(r,t.byteOffset,t.length)
}
var Cp = Ap;
function Bp(t, e) {
    var r = -1
      , i = t.length;
    for (e || (e = Array(i)); ++r < i; )
        e[r] = t[r];
    return e
}
var Up = Bp
  , Kp = St
  , Js = Object.create
  , wp = function() {
    function t() {}
    return function(e) {
        if (!Kp(e))
            return {};
        if (Js)
            return Js(e);
        t.prototype = e;
        var r = new t;
        return t.prototype = void 0,
        r
    }
}()
  , Np = wp;
function Ip(t, e) {
    return function(r) {
        return t(e(r))
    }
}
var Dp = Ip
  , Op = Dp
  , Pp = Op(Object.getPrototypeOf, Object)
  , qf = Pp
  , kp = Object.prototype;
function Vp(t) {
    var e = t && t.constructor
      , r = typeof e == "function" && e.prototype || kp;
    return t === r
}
var Hf = Vp
  , $p = Np
  , Mp = qf
  , Gp = Hf;
function Xp(t) {
    return typeof t.constructor == "function" && !Gp(t) ? $p(Mp(t)) : {}
}
var jp = Xp;
function Fp(t) {
    return t != null && typeof t == "object"
}
var br = Fp
  , qp = En
  , Hp = br
  , Wp = "[object Arguments]";
function zp(t) {
    return Hp(t) && qp(t) == Wp
}
var Jp = zp
  , Ys = Jp
  , Yp = br
  , Wf = Object.prototype
  , Qp = Wf.hasOwnProperty
  , Zp = Wf.propertyIsEnumerable
  , eE = Ys(function() {
    return arguments
}()) ? Ys : function(t) {
    return Yp(t) && Qp.call(t, "callee") && !Zp.call(t, "callee")
}
  , zf = eE
  , tE = Array.isArray
  , Jf = tE
  , rE = 9007199254740991;
function nE(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= rE
}
var Yf = nE
  , iE = Mi
  , sE = Yf;
function aE(t) {
    return t != null && sE(t.length) && !iE(t)
}
var ji = aE
  , fE = ji
  , uE = br;
function oE(t) {
    return uE(t) && fE(t)
}
var lE = oE
  , zr = {
    exports: {}
};
function cE() {
    return !1
}
var pE = cE;
zr.exports;
(function(t, e) {
    var r = zt
      , i = pE
      , s = e && !e.nodeType && e
      , a = s && !0 && t && !t.nodeType && t
      , f = a && a.exports === s
      , u = f ? r.Buffer : void 0
      , o = u ? u.isBuffer : void 0
      , c = o || i;
    t.exports = c
}
)(zr, zr.exports);
var Qf = zr.exports
  , EE = En
  , hE = qf
  , xE = br
  , _E = "[object Object]"
  , RE = Function.prototype
  , bE = Object.prototype
  , Zf = RE.toString
  , yE = bE.hasOwnProperty
  , gE = Zf.call(Object);
function mE(t) {
    if (!xE(t) || EE(t) != _E)
        return !1;
    var e = hE(t);
    if (e === null)
        return !0;
    var r = yE.call(e, "constructor") && e.constructor;
    return typeof r == "function" && r instanceof r && Zf.call(r) == gE
}
var TE = mE
  , SE = En
  , LE = Yf
  , dE = br
  , vE = "[object Arguments]"
  , AE = "[object Array]"
  , CE = "[object Boolean]"
  , BE = "[object Date]"
  , UE = "[object Error]"
  , KE = "[object Function]"
  , wE = "[object Map]"
  , NE = "[object Number]"
  , IE = "[object Object]"
  , DE = "[object RegExp]"
  , OE = "[object Set]"
  , PE = "[object String]"
  , kE = "[object WeakMap]"
  , VE = "[object ArrayBuffer]"
  , $E = "[object DataView]"
  , ME = "[object Float32Array]"
  , GE = "[object Float64Array]"
  , XE = "[object Int8Array]"
  , jE = "[object Int16Array]"
  , FE = "[object Int32Array]"
  , qE = "[object Uint8Array]"
  , HE = "[object Uint8ClampedArray]"
  , WE = "[object Uint16Array]"
  , zE = "[object Uint32Array]"
  , ne = {};
ne[ME] = ne[GE] = ne[XE] = ne[jE] = ne[FE] = ne[qE] = ne[HE] = ne[WE] = ne[zE] = !0;
ne[vE] = ne[AE] = ne[VE] = ne[CE] = ne[$E] = ne[BE] = ne[UE] = ne[KE] = ne[wE] = ne[NE] = ne[IE] = ne[DE] = ne[OE] = ne[PE] = ne[kE] = !1;
function JE(t) {
    return dE(t) && LE(t.length) && !!ne[SE(t)]
}
var YE = JE;
function QE(t) {
    return function(e) {
        return t(e)
    }
}
var ZE = QE
  , Jr = {
    exports: {}
};
Jr.exports;
(function(t, e) {
    var r = $f
      , i = e && !e.nodeType && e
      , s = i && !0 && t && !t.nodeType && t
      , a = s && s.exports === i
      , f = a && r.process
      , u = function() {
        try {
            var o = s && s.require && s.require("util").types;
            return o || f && f.binding && f.binding("util")
        } catch {}
    }();
    t.exports = u
}
)(Jr, Jr.exports);
var eh = Jr.exports
  , th = YE
  , rh = ZE
  , Qs = eh
  , Zs = Qs && Qs.isTypedArray
  , nh = Zs ? rh(Zs) : th
  , eu = nh;
function ih(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
        return t[e]
}
var tu = ih
  , sh = Xi
  , ah = ln
  , fh = Object.prototype
  , uh = fh.hasOwnProperty;
function oh(t, e, r) {
    var i = t[e];
    (!(uh.call(t, e) && ah(i, r)) || r === void 0 && !(e in t)) && sh(t, e, r)
}
var lh = oh
  , ch = lh
  , ph = Xi;
function Eh(t, e, r, i) {
    var s = !r;
    r || (r = {});
    for (var a = -1, f = e.length; ++a < f; ) {
        var u = e[a]
          , o = i ? i(r[u], t[u], u, r, t) : void 0;
        o === void 0 && (o = t[u]),
        s ? ph(r, u, o) : ch(r, u, o)
    }
    return r
}
var hh = Eh;
function xh(t, e) {
    for (var r = -1, i = Array(t); ++r < t; )
        i[r] = e(r);
    return i
}
var _h = xh
  , Rh = 9007199254740991
  , bh = /^(?:0|[1-9]\d*)$/;
function yh(t, e) {
    var r = typeof t;
    return e = e ?? Rh,
    !!e && (r == "number" || r != "symbol" && bh.test(t)) && t > -1 && t % 1 == 0 && t < e
}
var ru = yh
  , gh = _h
  , mh = zf
  , Th = Jf
  , Sh = Qf
  , Lh = ru
  , dh = eu
  , vh = Object.prototype
  , Ah = vh.hasOwnProperty;
function Ch(t, e) {
    var r = Th(t)
      , i = !r && mh(t)
      , s = !r && !i && Sh(t)
      , a = !r && !i && !s && dh(t)
      , f = r || i || s || a
      , u = f ? gh(t.length, String) : []
      , o = u.length;
    for (var c in t)
        (e || Ah.call(t, c)) && !(f && (c == "length" || s && (c == "offset" || c == "parent") || a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Lh(c, o))) && u.push(c);
    return u
}
var Bh = Ch;
function Uh(t) {
    var e = [];
    if (t != null)
        for (var r in Object(t))
            e.push(r);
    return e
}
var Kh = Uh
  , wh = St
  , Nh = Hf
  , Ih = Kh
  , Dh = Object.prototype
  , Oh = Dh.hasOwnProperty;
function Ph(t) {
    if (!wh(t))
        return Ih(t);
    var e = Nh(t)
      , r = [];
    for (var i in t)
        i == "constructor" && (e || !Oh.call(t, i)) || r.push(i);
    return r
}
var kh = Ph
  , Vh = Bh
  , $h = kh
  , Mh = ji;
function Gh(t) {
    return Mh(t) ? Vh(t, !0) : $h(t)
}
var nu = Gh
  , Xh = hh
  , jh = nu;
function Fh(t) {
    return Xh(t, jh(t))
}
var qh = Fh
  , ea = Ff
  , Hh = gp
  , Wh = Cp
  , zh = Up
  , Jh = jp
  , ta = zf
  , ra = Jf
  , Yh = lE
  , Qh = Qf
  , Zh = Mi
  , ex = St
  , tx = TE
  , rx = eu
  , na = tu
  , nx = qh;
function ix(t, e, r, i, s, a, f) {
    var u = na(t, r)
      , o = na(e, r)
      , c = f.get(o);
    if (c) {
        ea(t, r, c);
        return
    }
    var p = a ? a(u, o, r + "", t, e, f) : void 0
      , R = p === void 0;
    if (R) {
        var x = ra(o)
          , g = !x && Qh(o)
          , m = !x && !g && rx(o);
        p = o,
        x || g || m ? ra(u) ? p = u : Yh(u) ? p = zh(u) : g ? (R = !1,
        p = Hh(o, !0)) : m ? (R = !1,
        p = Wh(o, !0)) : p = [] : tx(o) || ta(o) ? (p = u,
        ta(u) ? p = nx(u) : (!ex(u) || Zh(u)) && (p = Jh(o))) : R = !1
    }
    R && (f.set(o, p),
    s(p, o, i, a, f),
    f.delete(o)),
    ea(t, r, p)
}
var sx = ix
  , ax = up
  , fx = Ff
  , ux = yp
  , ox = sx
  , lx = St
  , cx = nu
  , px = tu;
function iu(t, e, r, i, s) {
    t !== e && ux(e, function(a, f) {
        if (s || (s = new ax),
        lx(a))
            ox(t, e, f, r, iu, i, s);
        else {
            var u = i ? i(px(t, f), a, f + "", t, e, s) : void 0;
            u === void 0 && (u = a),
            fx(t, f, u)
        }
    }, cx)
}
var Ex = iu;
function hx(t) {
    return t
}
var su = hx;
function xx(t, e, r) {
    switch (r.length) {
    case 0:
        return t.call(e);
    case 1:
        return t.call(e, r[0]);
    case 2:
        return t.call(e, r[0], r[1]);
    case 3:
        return t.call(e, r[0], r[1], r[2])
    }
    return t.apply(e, r)
}
var _x = xx
  , Rx = _x
  , ia = Math.max;
function bx(t, e, r) {
    return e = ia(e === void 0 ? t.length - 1 : e, 0),
    function() {
        for (var i = arguments, s = -1, a = ia(i.length - e, 0), f = Array(a); ++s < a; )
            f[s] = i[e + s];
        s = -1;
        for (var u = Array(e + 1); ++s < e; )
            u[s] = i[s];
        return u[e] = r(f),
        Rx(t, this, u)
    }
}
var yx = bx;
function gx(t) {
    return function() {
        return t
    }
}
var mx = gx
  , Tx = mx
  , sa = jf
  , Sx = su
  , Lx = sa ? function(t, e) {
    return sa(t, "toString", {
        configurable: !0,
        enumerable: !1,
        value: Tx(e),
        writable: !0
    })
}
: Sx
  , dx = Lx
  , vx = 800
  , Ax = 16
  , Cx = Date.now;
function Bx(t) {
    var e = 0
      , r = 0;
    return function() {
        var i = Cx()
          , s = Ax - (i - r);
        if (r = i,
        s > 0) {
            if (++e >= vx)
                return arguments[0]
        } else
            e = 0;
        return t.apply(void 0, arguments)
    }
}
var Ux = Bx
  , Kx = dx
  , wx = Ux
  , Nx = wx(Kx)
  , Ix = Nx
  , Dx = su
  , Ox = yx
  , Px = Ix;
function kx(t, e) {
    return Px(Ox(t, e, Dx), t + "")
}
var Vx = kx
  , $x = ln
  , Mx = ji
  , Gx = ru
  , Xx = St;
function jx(t, e, r) {
    if (!Xx(r))
        return !1;
    var i = typeof e;
    return (i == "number" ? Mx(r) && Gx(e, r.length) : i == "string" && e in r) ? $x(r[e], t) : !1
}
var Fx = jx
  , qx = Vx
  , Hx = Fx;
function Wx(t) {
    return qx(function(e, r) {
        var i = -1
          , s = r.length
          , a = s > 1 ? r[s - 1] : void 0
          , f = s > 2 ? r[2] : void 0;
        for (a = t.length > 3 && typeof a == "function" ? (s--,
        a) : void 0,
        f && Hx(r[0], r[1], f) && (a = s < 3 ? void 0 : a,
        s = 1),
        e = Object(e); ++i < s; ) {
            var u = r[i];
            u && t(e, u, i, a)
        }
        return e
    })
}
var zx = Wx
  , Jx = Ex
  , Yx = zx;
Yx(function(t, e, r) {
    Jx(t, e, r)
});
const Nt = class Nt {
    static get serverUrl() {
        const e = this.getQueryParam("server") ?? this.getQueryParam("s");
        return !e || e === "live" ? "ecast.jackboxgames.com" : e === "local" ? "https://localhost" : e.includes("localhost") ? e : `${e}.jackboxgames.com`
    }
    static isDevelopment() {
        return window.location.hostname === "dev.nedojack.ru" || window.location.hostname === "localhost"
    }
    static isProduction() {
        return window.location.hostname === "nedojack.ru"
    }
    static get isCanvasSupported() {
        const e = document.createElement("canvas");
        return !!(e.getContext && e.getContext("2d"))
    }
    static htmlUnescape(e) {
        return String(e).replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&")
    }
    static htmlEscape(e) {
        return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    static sanitize(e) {
        const r = this.sanitizeInput(e).replace(/'/g, "’");
        return this.htmlEscape(r).trim()
    }
    static sanitizeName(e) {
        return e.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "’")
    }
    static sanitizeInput(e) {
        return e = e.replace("…", "..."),
        e.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FF’]/gi, "")
    }
    static sanitizeEmoji(e) {
        return e.replace(/(\u00a9|\u00ae|[\u2000-\u2017]|[\u2020-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/, "")
    }
    static safeText(e) {
        const r = document.createElement("div");
        return r.textContent = e,
        r.innerHTML
    }
    static htmlTagsToBBCode(e, r) {
        if (!r.length)
            throw new Error("[Utils.htmlTagsToBBCode] No tag pairs were passed in");
        return r.reduce( (i, s) => (i.replaceAll(`<${s[0]}>`, `[${s[1]}]`),
        i.replaceAll(`</${s[0]}>`, `</${s[1]}>`),
        i), e)
    }
    static hexToRgb(e) {
        const r = new ArrayBuffer(4);
        new DataView(r).setUint32(0, parseInt(e.replace("#", ""), 16), !1);
        const s = new Uint8Array(r);
        return `${s[1]},${s[2]},${s[3]}`
    }
    static adjustColor(e, r) {
        let i = !1
          , s = e;
        s[0] === "#" && (s = s.slice(1),
        i = !0);
        const a = parseInt(s, 16)
          , f = Math.min(Math.max(0, (a >> 16) * r), 255)
          , u = Math.min(Math.max(0, (a >> 8 & 255) * r), 255);
        let c = (Math.min(Math.max(0, (a & 255) * r), 255) | u << 8 | f << 16).toString(16);
        for (; c.length < s.length; )
            c = `0${c}`;
        return (i ? "#" : "") + c
    }
    static isInTolerance(e, r, i) {
        return !(Math.abs(e.x - r.x) < i || Math.abs(e.y - r.y) > i)
    }
    static getDistanceBetweenPoints(e, r) {
        const i = [e.x - r.x, e.y - r.y]
          , s = Math.hypot(...i);
        return Math.round(s * 100) / 100
    }
    static getMidpoint(e, r) {
        return {
            x: (e.x + r.x) / 2,
            y: (e.y + r.y) / 2
        }
    }
    static getAngleBetweenPoints(e, r) {
        let s = Math.atan2(r.y - e.y, r.x - e.x) * (180 / Math.PI);
        return s < 0 && (s += 360),
        360 - s
    }
    static getAngularDistance(e, r) {
        let i = (r - e) % 360;
        const s = i < 0 ? 1 : -1;
        return i = Math.abs(i),
        i > 180 ? s * (360 - i) : s * i
    }
    static getVelocity(e, r, i, s) {
        return this.getDistanceBetweenPoints(e, i) / (s - r)
    }
    static isInsideElement(e, r) {
        const i = r.getBoundingClientRect();
        return !(e.x < i.left || e.x > i.left + i.width || e.y < i.top || e.y > i.top + i.height)
    }
    static rotatePoint(e, r, i) {
        const s = i * (Math.PI / 180)
          , a = r.x + (e.x - r.x) * Math.cos(s) - (e.y - r.y) * Math.sin(s)
          , f = r.y + (e.x - r.x) * Math.sin(s) + (e.y - r.y) * Math.cos(s);
        return {
            x: a,
            y: f
        }
    }
    static cyrb128(e) {
        let r = 1779033703
          , i = 3144134277
          , s = 1013904242
          , a = 2773480762;
        for (let f = 0, u; f < e.length; f++)
            u = e.charCodeAt(f),
            r = i ^ Math.imul(r ^ u, 597399067),
            i = s ^ Math.imul(i ^ u, 2869860233),
            s = a ^ Math.imul(s ^ u, 951274213),
            a = r ^ Math.imul(a ^ u, 2716044179);
        return r = Math.imul(s ^ r >>> 18, 597399067),
        i = Math.imul(a ^ i >>> 22, 2869860233),
        s = Math.imul(r ^ s >>> 17, 951274213),
        a = Math.imul(i ^ a >>> 19, 2716044179),
        [(r ^ i ^ s ^ a) >>> 0, (i ^ r) >>> 0, (s ^ r) >>> 0, (a ^ r) >>> 0]
    }
    static sfc32(e, r, i, s) {
        return function() {
            e >>>= 0,
            r >>>= 0,
            i >>>= 0,
            s >>>= 0;
            let f = e + r | 0;
            return e = r ^ r >>> 9,
            r = i + (i << 3) | 0,
            i = i << 21 | i >>> 11,
            s = s + 1 | 0,
            f = f + s | 0,
            i = i + f | 0,
            (f >>> 0) / 4294967296
        }
    }
}
;
Se(Nt, "queryParams", new URLSearchParams(window.location.search)),
Se(Nt, "getQueryParam", e => Nt.queryParams.get(e)),
Se(Nt, "sleep", e => new Promise(r => {
    window.setTimeout(r, e)
}
));
let wt = Nt;
class Yr {
    static get namespace() {
        var e;
        return ((e = window.tv.storage) == null ? void 0 : e.namespace) ?? this.defaultNamespace
    }
    static get isDisabled() {
        var e;
        return ((e = window.tv.storage) == null ? void 0 : e.isDisabled) ?? !1
    }
    static get tag() {
        var e;
        return (e = window.tv.storage) == null ? void 0 : e.tag
    }
    static get code() {
        var e;
        return (e = window.tv.storage) == null ? void 0 : e.code
    }
    static get isSupported() {
        if (this.isDisabled)
            return !1;
        try {
            return window.localStorage ? (window.localStorage.setItem("support-check", "1"),
            window.localStorage.removeItem("support-check"),
            !0) : !1
        } catch {
            return !1
        }
    }
    static setup(e, r) {
        delete window.tv.storage,
        window.tv.storage = {
            namespace: wt.getQueryParam("namespace") ?? wt.getQueryParam("ns") ?? this.defaultNamespace,
            isDisabled: wt.queryParams.has("incognito") || wt.queryParams.has("nc")
        },
        e && (window.tv.storage.tag = e),
        r && (window.tv.storage.code = r.toLowerCase(),
        this.clearCodeScopedKeys(window.tv.storage.code))
    }
    static get(e, r) {
        return this.isSupported ? window.localStorage.getItem(this.getScopedKey(e, r)) : null
    }
    static set(e, r, i="none") {
        if (this.isSupported)
            return window.localStorage.setItem(this.getScopedSetKey(e, i), r)
    }
    static remove(e, r) {
        if (this.isSupported)
            return window.localStorage.removeItem(this.getScopedKey(e, r))
    }
    static setTag(e) {
        const r = e.toLowerCase()
          , i = this.get("tags") ?? "[]"
          , s = r.split("-")[0];
        let a = JSON.parse(i);
        a = a.filter(f => {
            const u = f.split("-")[0];
            return s !== u
        }
        ),
        a.push(r),
        this.set("tags", JSON.stringify(a))
    }
    static getScopedKey(e, r) {
        const i = `${this.namespace}:${e}`
          , s = this.tag ? `${this.namespace}:${e}:tag:${this.tag}` : null
          , a = this.code ? `${this.namespace}:${e}:code:${this.code}` : null;
        if (r === "none")
            return i;
        if (r === "tag") {
            if (!s)
                throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
            return s
        }
        if (r === "code") {
            if (!a)
                throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return a
        }
        return a && window.localStorage.getItem(a) !== null ? a : s && window.localStorage.getItem(s) !== null ? s : i
    }
    static getScopedSetKey(e, r="none") {
        if (r === "tag") {
            if (!this.tag)
                throw new Error('[Storage] requested "room" scope but tv.storage.tag is undefined');
            return `${this.namespace}:${e}:tag:${this.tag}`
        }
        if (r === "code") {
            if (!this.code)
                throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return `${this.namespace}:${e}:code:${this.code}`
        }
        return `${this.namespace}:${e}`
    }
    static clearCodeScopedKeys(e) {
        this.isSupported && Object.keys(window.localStorage).forEach(r => {
            const i = r.split(":code:");
            i.length <= 1 || i[1] !== e && window.localStorage.removeItem(r)
        }
        )
    }
}
Se(Yr, "defaultNamespace", "tv");
var ei = {
    exports: {}
};
(function(t, e) {
    var r = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof pe < "u" && pe
      , i = function() {
        function a() {
            this.fetch = !1,
            this.DOMException = r.DOMException
        }
        return a.prototype = r,
        new a
    }();
    (function(a) {
        (function(f) {
            var u = typeof a < "u" && a || typeof self < "u" && self || typeof u < "u" && u
              , o = {
                searchParams: "URLSearchParams"in u,
                iterable: "Symbol"in u && "iterator"in Symbol,
                blob: "FileReader"in u && "Blob"in u && function() {
                    try {
                        return new Blob,
                        !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData"in u,
                arrayBuffer: "ArrayBuffer"in u
            };
            function c(T) {
                return T && DataView.prototype.isPrototypeOf(T)
            }
            if (o.arrayBuffer)
                var p = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                  , R = ArrayBuffer.isView || function(T) {
                    return T && p.indexOf(Object.prototype.toString.call(T)) > -1
                }
                ;
            function x(T) {
                if (typeof T != "string" && (T = String(T)),
                /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(T) || T === "")
                    throw new TypeError('Invalid character in header field name: "' + T + '"');
                return T.toLowerCase()
            }
            function g(T) {
                return typeof T != "string" && (T = String(T)),
                T
            }
            function m(T) {
                var d = {
                    next: function() {
                        var I = T.shift();
                        return {
                            done: I === void 0,
                            value: I
                        }
                    }
                };
                return o.iterable && (d[Symbol.iterator] = function() {
                    return d
                }
                ),
                d
            }
            function C(T) {
                this.map = {},
                T instanceof C ? T.forEach(function(d, I) {
                    this.append(I, d)
                }, this) : Array.isArray(T) ? T.forEach(function(d) {
                    this.append(d[0], d[1])
                }, this) : T && Object.getOwnPropertyNames(T).forEach(function(d) {
                    this.append(d, T[d])
                }, this)
            }
            C.prototype.append = function(T, d) {
                T = x(T),
                d = g(d);
                var I = this.map[T];
                this.map[T] = I ? I + ", " + d : d
            }
            ,
            C.prototype.delete = function(T) {
                delete this.map[x(T)]
            }
            ,
            C.prototype.get = function(T) {
                return T = x(T),
                this.has(T) ? this.map[T] : null
            }
            ,
            C.prototype.has = function(T) {
                return this.map.hasOwnProperty(x(T))
            }
            ,
            C.prototype.set = function(T, d) {
                this.map[x(T)] = g(d)
            }
            ,
            C.prototype.forEach = function(T, d) {
                for (var I in this.map)
                    this.map.hasOwnProperty(I) && T.call(d, this.map[I], I, this)
            }
            ,
            C.prototype.keys = function() {
                var T = [];
                return this.forEach(function(d, I) {
                    T.push(I)
                }),
                m(T)
            }
            ,
            C.prototype.values = function() {
                var T = [];
                return this.forEach(function(d) {
                    T.push(d)
                }),
                m(T)
            }
            ,
            C.prototype.entries = function() {
                var T = [];
                return this.forEach(function(d, I) {
                    T.push([I, d])
                }),
                m(T)
            }
            ,
            o.iterable && (C.prototype[Symbol.iterator] = C.prototype.entries);
            function B(T) {
                if (T.bodyUsed)
                    return Promise.reject(new TypeError("Already read"));
                T.bodyUsed = !0
            }
            function P(T) {
                return new Promise(function(d, I) {
                    T.onload = function() {
                        d(T.result)
                    }
                    ,
                    T.onerror = function() {
                        I(T.error)
                    }
                }
                )
            }
            function k(T) {
                var d = new FileReader
                  , I = P(d);
                return d.readAsArrayBuffer(T),
                I
            }
            function K(T) {
                var d = new FileReader
                  , I = P(d);
                return d.readAsText(T),
                I
            }
            function ue(T) {
                for (var d = new Uint8Array(T), I = new Array(d.length), j = 0; j < d.length; j++)
                    I[j] = String.fromCharCode(d[j]);
                return I.join("")
            }
            function se(T) {
                if (T.slice)
                    return T.slice(0);
                var d = new Uint8Array(T.byteLength);
                return d.set(new Uint8Array(T)),
                d.buffer
            }
            function de() {
                return this.bodyUsed = !1,
                this._initBody = function(T) {
                    this.bodyUsed = this.bodyUsed,
                    this._bodyInit = T,
                    T ? typeof T == "string" ? this._bodyText = T : o.blob && Blob.prototype.isPrototypeOf(T) ? this._bodyBlob = T : o.formData && FormData.prototype.isPrototypeOf(T) ? this._bodyFormData = T : o.searchParams && URLSearchParams.prototype.isPrototypeOf(T) ? this._bodyText = T.toString() : o.arrayBuffer && o.blob && c(T) ? (this._bodyArrayBuffer = se(T.buffer),
                    this._bodyInit = new Blob([this._bodyArrayBuffer])) : o.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(T) || R(T)) ? this._bodyArrayBuffer = se(T) : this._bodyText = T = Object.prototype.toString.call(T) : this._bodyText = "",
                    this.headers.get("content-type") || (typeof T == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o.searchParams && URLSearchParams.prototype.isPrototypeOf(T) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }
                ,
                o.blob && (this.blob = function() {
                    var T = B(this);
                    if (T)
                        return T;
                    if (this._bodyBlob)
                        return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }
                ,
                this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) {
                        var T = B(this);
                        return T || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                    } else
                        return this.blob().then(k)
                }
                ),
                this.text = function() {
                    var T = B(this);
                    if (T)
                        return T;
                    if (this._bodyBlob)
                        return K(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(ue(this._bodyArrayBuffer));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }
                ,
                o.formData && (this.formData = function() {
                    return this.text().then(fe)
                }
                ),
                this.json = function() {
                    return this.text().then(JSON.parse)
                }
                ,
                this
            }
            var Q = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            function he(T) {
                var d = T.toUpperCase();
                return Q.indexOf(d) > -1 ? d : T
            }
            function X(T, d) {
                if (!(this instanceof X))
                    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                d = d || {};
                var I = d.body;
                if (T instanceof X) {
                    if (T.bodyUsed)
                        throw new TypeError("Already read");
                    this.url = T.url,
                    this.credentials = T.credentials,
                    d.headers || (this.headers = new C(T.headers)),
                    this.method = T.method,
                    this.mode = T.mode,
                    this.signal = T.signal,
                    !I && T._bodyInit != null && (I = T._bodyInit,
                    T.bodyUsed = !0)
                } else
                    this.url = String(T);
                if (this.credentials = d.credentials || this.credentials || "same-origin",
                (d.headers || !this.headers) && (this.headers = new C(d.headers)),
                this.method = he(d.method || this.method || "GET"),
                this.mode = d.mode || this.mode || null,
                this.signal = d.signal || this.signal,
                this.referrer = null,
                (this.method === "GET" || this.method === "HEAD") && I)
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                if (this._initBody(I),
                (this.method === "GET" || this.method === "HEAD") && (d.cache === "no-store" || d.cache === "no-cache")) {
                    var j = /([?&])_=[^&]*/;
                    if (j.test(this.url))
                        this.url = this.url.replace(j, "$1_=" + new Date().getTime());
                    else {
                        var F = /\?/;
                        this.url += (F.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
                    }
                }
            }
            X.prototype.clone = function() {
                return new X(this,{
                    body: this._bodyInit
                })
            }
            ;
            function fe(T) {
                var d = new FormData;
                return T.trim().split("&").forEach(function(I) {
                    if (I) {
                        var j = I.split("=")
                          , F = j.shift().replace(/\+/g, " ")
                          , D = j.join("=").replace(/\+/g, " ");
                        d.append(decodeURIComponent(F), decodeURIComponent(D))
                    }
                }),
                d
            }
            function Qe(T) {
                var d = new C
                  , I = T.replace(/\r?\n[\t ]+/g, " ");
                return I.split("\r").map(function(j) {
                    return j.indexOf(`
`) === 0 ? j.substr(1, j.length) : j
                }).forEach(function(j) {
                    var F = j.split(":")
                      , D = F.shift().trim();
                    if (D) {
                        var W = F.join(":").trim();
                        d.append(D, W)
                    }
                }),
                d
            }
            de.call(X.prototype);
            function oe(T, d) {
                if (!(this instanceof oe))
                    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                d || (d = {}),
                this.type = "default",
                this.status = d.status === void 0 ? 200 : d.status,
                this.ok = this.status >= 200 && this.status < 300,
                this.statusText = d.statusText === void 0 ? "" : "" + d.statusText,
                this.headers = new C(d.headers),
                this.url = d.url || "",
                this._initBody(T)
            }
            de.call(oe.prototype),
            oe.prototype.clone = function() {
                return new oe(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new C(this.headers),
                    url: this.url
                })
            }
            ,
            oe.error = function() {
                var T = new oe(null,{
                    status: 0,
                    statusText: ""
                });
                return T.type = "error",
                T
            }
            ;
            var Re = [301, 302, 303, 307, 308];
            oe.redirect = function(T, d) {
                if (Re.indexOf(d) === -1)
                    throw new RangeError("Invalid status code");
                return new oe(null,{
                    status: d,
                    headers: {
                        location: T
                    }
                })
            }
            ,
            f.DOMException = u.DOMException;
            try {
                new f.DOMException
            } catch {
                f.DOMException = function(d, I) {
                    this.message = d,
                    this.name = I;
                    var j = Error(d);
                    this.stack = j.stack
                }
                ,
                f.DOMException.prototype = Object.create(Error.prototype),
                f.DOMException.prototype.constructor = f.DOMException
            }
            function xe(T, d) {
                return new Promise(function(I, j) {
                    var F = new X(T,d);
                    if (F.signal && F.signal.aborted)
                        return j(new f.DOMException("Aborted","AbortError"));
                    var D = new XMLHttpRequest;
                    function W() {
                        D.abort()
                    }
                    D.onload = function() {
                        var Z = {
                            status: D.status,
                            statusText: D.statusText,
                            headers: Qe(D.getAllResponseHeaders() || "")
                        };
                        Z.url = "responseURL"in D ? D.responseURL : Z.headers.get("X-Request-URL");
                        var we = "response"in D ? D.response : D.responseText;
                        setTimeout(function() {
                            I(new oe(we,Z))
                        }, 0)
                    }
                    ,
                    D.onerror = function() {
                        setTimeout(function() {
                            j(new TypeError("Network request failed"))
                        }, 0)
                    }
                    ,
                    D.ontimeout = function() {
                        setTimeout(function() {
                            j(new TypeError("Network request failed"))
                        }, 0)
                    }
                    ,
                    D.onabort = function() {
                        setTimeout(function() {
                            j(new f.DOMException("Aborted","AbortError"))
                        }, 0)
                    }
                    ;
                    function Le(Z) {
                        try {
                            return Z === "" && u.location.href ? u.location.href : Z
                        } catch {
                            return Z
                        }
                    }
                    D.open(F.method, Le(F.url), !0),
                    F.credentials === "include" ? D.withCredentials = !0 : F.credentials === "omit" && (D.withCredentials = !1),
                    "responseType"in D && (o.blob ? D.responseType = "blob" : o.arrayBuffer && F.headers.get("Content-Type") && F.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (D.responseType = "arraybuffer")),
                    d && typeof d.headers == "object" && !(d.headers instanceof C) ? Object.getOwnPropertyNames(d.headers).forEach(function(Z) {
                        D.setRequestHeader(Z, g(d.headers[Z]))
                    }) : F.headers.forEach(function(Z, we) {
                        D.setRequestHeader(we, Z)
                    }),
                    F.signal && (F.signal.addEventListener("abort", W),
                    D.onreadystatechange = function() {
                        D.readyState === 4 && F.signal.removeEventListener("abort", W)
                    }
                    ),
                    D.send(typeof F._bodyInit > "u" ? null : F._bodyInit)
                }
                )
            }
            return xe.polyfill = !0,
            u.fetch || (u.fetch = xe,
            u.Headers = C,
            u.Request = X,
            u.Response = oe),
            f.Headers = C,
            f.Request = X,
            f.Response = oe,
            f.fetch = xe,
            f
        }
        )({})
    }
    )(i),
    i.fetch.ponyfill = !0,
    delete i.fetch.polyfill;
    var s = r.fetch ? r : i;
    e = s.fetch,
    e.default = s.fetch,
    e.fetch = s.fetch,
    e.Headers = s.Headers,
    e.Request = s.Request,
    e.Response = s.Response,
    t.exports = e
}
)(ei, ei.exports);
var Qx = ei.exports, Zx = Error, e_ = EvalError, t_ = RangeError, r_ = ReferenceError, au = SyntaxError, yr = TypeError, n_ = URIError, i_ = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return !1;
    if (typeof Symbol.iterator == "symbol")
        return !0;
    var e = {}
      , r = Symbol("test")
      , i = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(i) !== "[object Symbol]")
        return !1;
    var s = 42;
    e[r] = s;
    for (r in e)
        return !1;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
        return !1;
    var a = Object.getOwnPropertySymbols(e);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
        return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
        var f = Object.getOwnPropertyDescriptor(e, r);
        if (f.value !== s || f.enumerable !== !0)
            return !1
    }
    return !0
}, aa = typeof Symbol < "u" && Symbol, s_ = i_, a_ = function() {
    return typeof aa != "function" || typeof Symbol != "function" || typeof aa("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : s_()
}, In = {
    __proto__: null,
    foo: {}
}, f_ = Object, u_ = function() {
    return {
        __proto__: In
    }.foo === In.foo && !(In instanceof f_)
}, o_ = "Function.prototype.bind called on incompatible ", l_ = Object.prototype.toString, c_ = Math.max, p_ = "[object Function]", fa = function(e, r) {
    for (var i = [], s = 0; s < e.length; s += 1)
        i[s] = e[s];
    for (var a = 0; a < r.length; a += 1)
        i[a + e.length] = r[a];
    return i
}, E_ = function(e, r) {
    for (var i = [], s = r, a = 0; s < e.length; s += 1,
    a += 1)
        i[a] = e[s];
    return i
}, h_ = function(t, e) {
    for (var r = "", i = 0; i < t.length; i += 1)
        r += t[i],
        i + 1 < t.length && (r += e);
    return r
}, x_ = function(e) {
    var r = this;
    if (typeof r != "function" || l_.apply(r) !== p_)
        throw new TypeError(o_ + r);
    for (var i = E_(arguments, 1), s, a = function() {
        if (this instanceof s) {
            var p = r.apply(this, fa(i, arguments));
            return Object(p) === p ? p : this
        }
        return r.apply(e, fa(i, arguments))
    }, f = c_(0, r.length - i.length), u = [], o = 0; o < f; o++)
        u[o] = "$" + o;
    if (s = Function("binder", "return function (" + h_(u, ",") + "){ return binder.apply(this,arguments); }")(a),
    r.prototype) {
        var c = function() {};
        c.prototype = r.prototype,
        s.prototype = new c,
        c.prototype = null
    }
    return s
}, __ = x_, Fi = Function.prototype.bind || __, R_ = Function.prototype.call, b_ = Object.prototype.hasOwnProperty, y_ = Fi, g_ = y_.call(R_, b_), G, m_ = Zx, T_ = e_, S_ = t_, L_ = r_, $t = au, Dt = yr, d_ = n_, fu = Function, Dn = function(t) {
    try {
        return fu('"use strict"; return (' + t + ").constructor;")()
    } catch {}
}, ct = Object.getOwnPropertyDescriptor;
if (ct)
    try {
        ct({}, "")
    } catch {
        ct = null
    }
var On = function() {
    throw new Dt
}
  , v_ = ct ? function() {
    try {
        return arguments.callee,
        On
    } catch {
        try {
            return ct(arguments, "callee").get
        } catch {
            return On
        }
    }
}() : On
  , At = a_()
  , A_ = u_()
  , _e = Object.getPrototypeOf || (A_ ? function(t) {
    return t.__proto__
}
: null)
  , Bt = {}
  , C_ = typeof Uint8Array > "u" || !_e ? G : _e(Uint8Array)
  , pt = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? G : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? G : ArrayBuffer,
    "%ArrayIteratorPrototype%": At && _e ? _e([][Symbol.iterator]()) : G,
    "%AsyncFromSyncIteratorPrototype%": G,
    "%AsyncFunction%": Bt,
    "%AsyncGenerator%": Bt,
    "%AsyncGeneratorFunction%": Bt,
    "%AsyncIteratorPrototype%": Bt,
    "%Atomics%": typeof Atomics > "u" ? G : Atomics,
    "%BigInt%": typeof BigInt > "u" ? G : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? G : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? G : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? G : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": m_,
    "%eval%": eval,
    "%EvalError%": T_,
    "%Float32Array%": typeof Float32Array > "u" ? G : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? G : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? G : FinalizationRegistry,
    "%Function%": fu,
    "%GeneratorFunction%": Bt,
    "%Int8Array%": typeof Int8Array > "u" ? G : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? G : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? G : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": At && _e ? _e(_e([][Symbol.iterator]())) : G,
    "%JSON%": typeof JSON == "object" ? JSON : G,
    "%Map%": typeof Map > "u" ? G : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !At || !_e ? G : _e(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? G : Promise,
    "%Proxy%": typeof Proxy > "u" ? G : Proxy,
    "%RangeError%": S_,
    "%ReferenceError%": L_,
    "%Reflect%": typeof Reflect > "u" ? G : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? G : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !At || !_e ? G : _e(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? G : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": At && _e ? _e(""[Symbol.iterator]()) : G,
    "%Symbol%": At ? Symbol : G,
    "%SyntaxError%": $t,
    "%ThrowTypeError%": v_,
    "%TypedArray%": C_,
    "%TypeError%": Dt,
    "%Uint8Array%": typeof Uint8Array > "u" ? G : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? G : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? G : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? G : Uint32Array,
    "%URIError%": d_,
    "%WeakMap%": typeof WeakMap > "u" ? G : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? G : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? G : WeakSet
};
if (_e)
    try {
        null.error
    } catch (t) {
        var B_ = _e(_e(t));
        pt["%Error.prototype%"] = B_
    }
var U_ = function t(e) {
    var r;
    if (e === "%AsyncFunction%")
        r = Dn("async function () {}");
    else if (e === "%GeneratorFunction%")
        r = Dn("function* () {}");
    else if (e === "%AsyncGeneratorFunction%")
        r = Dn("async function* () {}");
    else if (e === "%AsyncGenerator%") {
        var i = t("%AsyncGeneratorFunction%");
        i && (r = i.prototype)
    } else if (e === "%AsyncIteratorPrototype%") {
        var s = t("%AsyncGenerator%");
        s && _e && (r = _e(s.prototype))
    }
    return pt[e] = r,
    r
}, ua = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, gr = Fi, Qr = g_, K_ = gr.call(Function.call, Array.prototype.concat), w_ = gr.call(Function.apply, Array.prototype.splice), oa = gr.call(Function.call, String.prototype.replace), Zr = gr.call(Function.call, String.prototype.slice), N_ = gr.call(Function.call, RegExp.prototype.exec), I_ = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, D_ = /\\(\\)?/g, O_ = function(e) {
    var r = Zr(e, 0, 1)
      , i = Zr(e, -1);
    if (r === "%" && i !== "%")
        throw new $t("invalid intrinsic syntax, expected closing `%`");
    if (i === "%" && r !== "%")
        throw new $t("invalid intrinsic syntax, expected opening `%`");
    var s = [];
    return oa(e, I_, function(a, f, u, o) {
        s[s.length] = u ? oa(o, D_, "$1") : f || a
    }),
    s
}, P_ = function(e, r) {
    var i = e, s;
    if (Qr(ua, i) && (s = ua[i],
    i = "%" + s[0] + "%"),
    Qr(pt, i)) {
        var a = pt[i];
        if (a === Bt && (a = U_(i)),
        typeof a > "u" && !r)
            throw new Dt("intrinsic " + e + " exists, but is not available. Please file an issue!");
        return {
            alias: s,
            name: i,
            value: a
        }
    }
    throw new $t("intrinsic " + e + " does not exist!")
}, Zt = function(e, r) {
    if (typeof e != "string" || e.length === 0)
        throw new Dt("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof r != "boolean")
        throw new Dt('"allowMissing" argument must be a boolean');
    if (N_(/^%?[^%]*%?$/, e) === null)
        throw new $t("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var i = O_(e)
      , s = i.length > 0 ? i[0] : ""
      , a = P_("%" + s + "%", r)
      , f = a.name
      , u = a.value
      , o = !1
      , c = a.alias;
    c && (s = c[0],
    w_(i, K_([0, 1], c)));
    for (var p = 1, R = !0; p < i.length; p += 1) {
        var x = i[p]
          , g = Zr(x, 0, 1)
          , m = Zr(x, -1);
        if ((g === '"' || g === "'" || g === "`" || m === '"' || m === "'" || m === "`") && g !== m)
            throw new $t("property names with quotes must have matching quotes");
        if ((x === "constructor" || !R) && (o = !0),
        s += "." + x,
        f = "%" + s + "%",
        Qr(pt, f))
            u = pt[f];
        else if (u != null) {
            if (!(x in u)) {
                if (!r)
                    throw new Dt("base intrinsic for " + e + " exists, but the property is not available.");
                return
            }
            if (ct && p + 1 >= i.length) {
                var C = ct(u, x);
                R = !!C,
                R && "get"in C && !("originalValue"in C.get) ? u = C.get : u = u[x]
            } else
                R = Qr(u, x),
                u = u[x];
            R && !o && (pt[f] = u)
        }
    }
    return u
}, uu = {
    exports: {}
}, Pn, la;
function qi() {
    if (la)
        return Pn;
    la = 1;
    var t = Zt
      , e = t("%Object.defineProperty%", !0) || !1;
    if (e)
        try {
            e({}, "a", {
                value: 1
            })
        } catch {
            e = !1
        }
    return Pn = e,
    Pn
}
var k_ = Zt
  , Pr = k_("%Object.getOwnPropertyDescriptor%", !0);
if (Pr)
    try {
        Pr([], "length")
    } catch {
        Pr = null
    }
var ou = Pr
  , ca = qi()
  , V_ = au
  , Ct = yr
  , pa = ou
  , $_ = function(e, r, i) {
    if (!e || typeof e != "object" && typeof e != "function")
        throw new Ct("`obj` must be an object or a function`");
    if (typeof r != "string" && typeof r != "symbol")
        throw new Ct("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
        throw new Ct("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
        throw new Ct("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
        throw new Ct("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
        throw new Ct("`loose`, if provided, must be a boolean");
    var s = arguments.length > 3 ? arguments[3] : null
      , a = arguments.length > 4 ? arguments[4] : null
      , f = arguments.length > 5 ? arguments[5] : null
      , u = arguments.length > 6 ? arguments[6] : !1
      , o = !!pa && pa(e, r);
    if (ca)
        ca(e, r, {
            configurable: f === null && o ? o.configurable : !f,
            enumerable: s === null && o ? o.enumerable : !s,
            value: i,
            writable: a === null && o ? o.writable : !a
        });
    else if (u || !s && !a && !f)
        e[r] = i;
    else
        throw new V_("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")
}
  , ti = qi()
  , lu = function() {
    return !!ti
};
lu.hasArrayLengthDefineBug = function() {
    if (!ti)
        return null;
    try {
        return ti([], "length", {
            value: 1
        }).length !== 1
    } catch {
        return !0
    }
}
;
var M_ = lu
  , G_ = Zt
  , Ea = $_
  , X_ = M_()
  , ha = ou
  , xa = yr
  , j_ = G_("%Math.floor%")
  , F_ = function(e, r) {
    if (typeof e != "function")
        throw new xa("`fn` is not a function");
    if (typeof r != "number" || r < 0 || r > 4294967295 || j_(r) !== r)
        throw new xa("`length` must be a positive 32-bit integer");
    var i = arguments.length > 2 && !!arguments[2]
      , s = !0
      , a = !0;
    if ("length"in e && ha) {
        var f = ha(e, "length");
        f && !f.configurable && (s = !1),
        f && !f.writable && (a = !1)
    }
    return (s || a || !i) && (X_ ? Ea(e, "length", r, !0, !0) : Ea(e, "length", r)),
    e
};
(function(t) {
    var e = Fi
      , r = Zt
      , i = F_
      , s = yr
      , a = r("%Function.prototype.apply%")
      , f = r("%Function.prototype.call%")
      , u = r("%Reflect.apply%", !0) || e.call(f, a)
      , o = qi()
      , c = r("%Math.max%");
    t.exports = function(x) {
        if (typeof x != "function")
            throw new s("a function is required");
        var g = u(e, f, arguments);
        return i(g, 1 + c(0, x.length - (arguments.length - 1)), !0)
    }
    ;
    var p = function() {
        return u(e, a, arguments)
    };
    o ? o(t.exports, "apply", {
        value: p
    }) : t.exports.apply = p
}
)(uu);
var q_ = uu.exports
  , cu = Zt
  , pu = q_
  , H_ = pu(cu("String.prototype.indexOf"))
  , W_ = function(e, r) {
    var i = cu(e, !!r);
    return typeof i == "function" && H_(e, ".prototype.") > -1 ? pu(i) : i
};
const z_ = {}
  , J_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: z_
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Y_ = ko(J_);
var Hi = typeof Map == "function" && Map.prototype
  , kn = Object.getOwnPropertyDescriptor && Hi ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null
  , en = Hi && kn && typeof kn.get == "function" ? kn.get : null
  , _a = Hi && Map.prototype.forEach
  , Wi = typeof Set == "function" && Set.prototype
  , Vn = Object.getOwnPropertyDescriptor && Wi ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null
  , tn = Wi && Vn && typeof Vn.get == "function" ? Vn.get : null
  , Ra = Wi && Set.prototype.forEach
  , Q_ = typeof WeakMap == "function" && WeakMap.prototype
  , cr = Q_ ? WeakMap.prototype.has : null
  , Z_ = typeof WeakSet == "function" && WeakSet.prototype
  , pr = Z_ ? WeakSet.prototype.has : null
  , eR = typeof WeakRef == "function" && WeakRef.prototype
  , ba = eR ? WeakRef.prototype.deref : null
  , tR = Boolean.prototype.valueOf
  , rR = Object.prototype.toString
  , nR = Function.prototype.toString
  , iR = String.prototype.match
  , zi = String.prototype.slice
  , it = String.prototype.replace
  , sR = String.prototype.toUpperCase
  , ya = String.prototype.toLowerCase
  , Eu = RegExp.prototype.test
  , ga = Array.prototype.concat
  , Ve = Array.prototype.join
  , aR = Array.prototype.slice
  , ma = Math.floor
  , ri = typeof BigInt == "function" ? BigInt.prototype.valueOf : null
  , $n = Object.getOwnPropertySymbols
  , ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null
  , Mt = typeof Symbol == "function" && typeof Symbol.iterator == "object"
  , me = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Mt || !0) ? Symbol.toStringTag : null
  , hu = Object.prototype.propertyIsEnumerable
  , Ta = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
    return t.__proto__
}
: null);
function Sa(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Eu.call(/e/, e))
        return e;
    var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var i = t < 0 ? -ma(-t) : ma(t);
        if (i !== t) {
            var s = String(i)
              , a = zi.call(e, s.length + 1);
            return it.call(s, r, "$&_") + "." + it.call(it.call(a, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return it.call(e, r, "$&_")
}
var ii = Y_
  , La = ii.custom
  , da = _u(La) ? La : null
  , fR = function t(e, r, i, s) {
    var a = r || {};
    if (Ze(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Ze(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var f = Ze(a, "customInspect") ? a.customInspect : !0;
    if (typeof f != "boolean" && f !== "symbol")
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Ze(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Ze(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var u = a.numericSeparator;
    if (typeof e > "u")
        return "undefined";
    if (e === null)
        return "null";
    if (typeof e == "boolean")
        return e ? "true" : "false";
    if (typeof e == "string")
        return bu(e, a);
    if (typeof e == "number") {
        if (e === 0)
            return 1 / 0 / e > 0 ? "0" : "-0";
        var o = String(e);
        return u ? Sa(e, o) : o
    }
    if (typeof e == "bigint") {
        var c = String(e) + "n";
        return u ? Sa(e, c) : c
    }
    var p = typeof a.depth > "u" ? 5 : a.depth;
    if (typeof i > "u" && (i = 0),
    i >= p && p > 0 && typeof e == "object")
        return si(e) ? "[Array]" : "[Object]";
    var R = dR(a, i);
    if (typeof s > "u")
        s = [];
    else if (Ru(s, e) >= 0)
        return "[Circular]";
    function x(Re, xe, T) {
        if (xe && (s = aR.call(s),
        s.push(xe)),
        T) {
            var d = {
                depth: a.depth
            };
            return Ze(a, "quoteStyle") && (d.quoteStyle = a.quoteStyle),
            t(Re, d, i + 1, s)
        }
        return t(Re, a, i + 1, s)
    }
    if (typeof e == "function" && !va(e)) {
        var g = _R(e)
          , m = Ar(e, x);
        return "[Function" + (g ? ": " + g : " (anonymous)") + "]" + (m.length > 0 ? " { " + Ve.call(m, ", ") + " }" : "")
    }
    if (_u(e)) {
        var C = Mt ? it.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : ni.call(e);
        return typeof e == "object" && !Mt ? ar(C) : C
    }
    if (TR(e)) {
        for (var B = "<" + ya.call(String(e.nodeName)), P = e.attributes || [], k = 0; k < P.length; k++)
            B += " " + P[k].name + "=" + xu(uR(P[k].value), "double", a);
        return B += ">",
        e.childNodes && e.childNodes.length && (B += "..."),
        B += "</" + ya.call(String(e.nodeName)) + ">",
        B
    }
    if (si(e)) {
        if (e.length === 0)
            return "[]";
        var K = Ar(e, x);
        return R && !LR(K) ? "[" + ai(K, R) + "]" : "[ " + Ve.call(K, ", ") + " ]"
    }
    if (lR(e)) {
        var ue = Ar(e, x);
        return !("cause"in Error.prototype) && "cause"in e && !hu.call(e, "cause") ? "{ [" + String(e) + "] " + Ve.call(ga.call("[cause]: " + x(e.cause), ue), ", ") + " }" : ue.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Ve.call(ue, ", ") + " }"
    }
    if (typeof e == "object" && f) {
        if (da && typeof e[da] == "function" && ii)
            return ii(e, {
                depth: p - i
            });
        if (f !== "symbol" && typeof e.inspect == "function")
            return e.inspect()
    }
    if (RR(e)) {
        var se = [];
        return _a && _a.call(e, function(Re, xe) {
            se.push(x(xe, e, !0) + " => " + x(Re, e))
        }),
        Aa("Map", en.call(e), se, R)
    }
    if (gR(e)) {
        var de = [];
        return Ra && Ra.call(e, function(Re) {
            de.push(x(Re, e))
        }),
        Aa("Set", tn.call(e), de, R)
    }
    if (bR(e))
        return Mn("WeakMap");
    if (mR(e))
        return Mn("WeakSet");
    if (yR(e))
        return Mn("WeakRef");
    if (pR(e))
        return ar(x(Number(e)));
    if (hR(e))
        return ar(x(ri.call(e)));
    if (ER(e))
        return ar(tR.call(e));
    if (cR(e))
        return ar(x(String(e)));
    if (typeof window < "u" && e === window)
        return "{ [object Window] }";
    if (typeof globalThis < "u" && e === globalThis || typeof pe < "u" && e === pe)
        return "{ [object globalThis] }";
    if (!oR(e) && !va(e)) {
        var Q = Ar(e, x)
          , he = Ta ? Ta(e) === Object.prototype : e instanceof Object || e.constructor === Object
          , X = e instanceof Object ? "" : "null prototype"
          , fe = !he && me && Object(e) === e && me in e ? zi.call(ot(e), 8, -1) : X ? "Object" : ""
          , Qe = he || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : ""
          , oe = Qe + (fe || X ? "[" + Ve.call(ga.call([], fe || [], X || []), ": ") + "] " : "");
        return Q.length === 0 ? oe + "{}" : R ? oe + "{" + ai(Q, R) + "}" : oe + "{ " + Ve.call(Q, ", ") + " }"
    }
    return String(e)
};
function xu(t, e, r) {
    var i = (r.quoteStyle || e) === "double" ? '"' : "'";
    return i + t + i
}
function uR(t) {
    return it.call(String(t), /"/g, "&quot;")
}
function si(t) {
    return ot(t) === "[object Array]" && (!me || !(typeof t == "object" && me in t))
}
function oR(t) {
    return ot(t) === "[object Date]" && (!me || !(typeof t == "object" && me in t))
}
function va(t) {
    return ot(t) === "[object RegExp]" && (!me || !(typeof t == "object" && me in t))
}
function lR(t) {
    return ot(t) === "[object Error]" && (!me || !(typeof t == "object" && me in t))
}
function cR(t) {
    return ot(t) === "[object String]" && (!me || !(typeof t == "object" && me in t))
}
function pR(t) {
    return ot(t) === "[object Number]" && (!me || !(typeof t == "object" && me in t))
}
function ER(t) {
    return ot(t) === "[object Boolean]" && (!me || !(typeof t == "object" && me in t))
}
function _u(t) {
    if (Mt)
        return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol")
        return !0;
    if (!t || typeof t != "object" || !ni)
        return !1;
    try {
        return ni.call(t),
        !0
    } catch {}
    return !1
}
function hR(t) {
    if (!t || typeof t != "object" || !ri)
        return !1;
    try {
        return ri.call(t),
        !0
    } catch {}
    return !1
}
var xR = Object.prototype.hasOwnProperty || function(t) {
    return t in this
}
;
function Ze(t, e) {
    return xR.call(t, e)
}
function ot(t) {
    return rR.call(t)
}
function _R(t) {
    if (t.name)
        return t.name;
    var e = iR.call(nR.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}
function Ru(t, e) {
    if (t.indexOf)
        return t.indexOf(e);
    for (var r = 0, i = t.length; r < i; r++)
        if (t[r] === e)
            return r;
    return -1
}
function RR(t) {
    if (!en || !t || typeof t != "object")
        return !1;
    try {
        en.call(t);
        try {
            tn.call(t)
        } catch {
            return !0
        }
        return t instanceof Map
    } catch {}
    return !1
}
function bR(t) {
    if (!cr || !t || typeof t != "object")
        return !1;
    try {
        cr.call(t, cr);
        try {
            pr.call(t, pr)
        } catch {
            return !0
        }
        return t instanceof WeakMap
    } catch {}
    return !1
}
function yR(t) {
    if (!ba || !t || typeof t != "object")
        return !1;
    try {
        return ba.call(t),
        !0
    } catch {}
    return !1
}
function gR(t) {
    if (!tn || !t || typeof t != "object")
        return !1;
    try {
        tn.call(t);
        try {
            en.call(t)
        } catch {
            return !0
        }
        return t instanceof Set
    } catch {}
    return !1
}
function mR(t) {
    if (!pr || !t || typeof t != "object")
        return !1;
    try {
        pr.call(t, pr);
        try {
            cr.call(t, cr)
        } catch {
            return !0
        }
        return t instanceof WeakSet
    } catch {}
    return !1
}
function TR(t) {
    return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
}
function bu(t, e) {
    if (t.length > e.maxStringLength) {
        var r = t.length - e.maxStringLength
          , i = "... " + r + " more character" + (r > 1 ? "s" : "");
        return bu(zi.call(t, 0, e.maxStringLength), e) + i
    }
    var s = it.call(it.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, SR);
    return xu(s, "single", e)
}
function SR(t) {
    var e = t.charCodeAt(0)
      , r = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
    }[e];
    return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + sR.call(e.toString(16))
}
function ar(t) {
    return "Object(" + t + ")"
}
function Mn(t) {
    return t + " { ? }"
}
function Aa(t, e, r, i) {
    var s = i ? ai(r, i) : Ve.call(r, ", ");
    return t + " (" + e + ") {" + s + "}"
}
function LR(t) {
    for (var e = 0; e < t.length; e++)
        if (Ru(t[e], `
`) >= 0)
            return !1;
    return !0
}
function dR(t, e) {
    var r;
    if (t.indent === "	")
        r = "	";
    else if (typeof t.indent == "number" && t.indent > 0)
        r = Ve.call(Array(t.indent + 1), " ");
    else
        return null;
    return {
        base: r,
        prev: Ve.call(Array(e + 1), r)
    }
}
function ai(t, e) {
    if (t.length === 0)
        return "";
    var r = `
` + e.prev + e.base;
    return r + Ve.call(t, "," + r) + `
` + e.prev
}
function Ar(t, e) {
    var r = si(t)
      , i = [];
    if (r) {
        i.length = t.length;
        for (var s = 0; s < t.length; s++)
            i[s] = Ze(t, s) ? e(t[s], t) : ""
    }
    var a = typeof $n == "function" ? $n(t) : [], f;
    if (Mt) {
        f = {};
        for (var u = 0; u < a.length; u++)
            f["$" + a[u]] = a[u]
    }
    for (var o in t)
        Ze(t, o) && (r && String(Number(o)) === o && o < t.length || Mt && f["$" + o]instanceof Symbol || (Eu.call(/[^\w$]/, o) ? i.push(e(o, t) + ": " + e(t[o], t)) : i.push(o + ": " + e(t[o], t))));
    if (typeof $n == "function")
        for (var c = 0; c < a.length; c++)
            hu.call(t, a[c]) && i.push("[" + e(a[c]) + "]: " + e(t[a[c]], t));
    return i
}
var yu = Zt
  , er = W_
  , vR = fR
  , AR = yr
  , Cr = yu("%WeakMap%", !0)
  , Br = yu("%Map%", !0)
  , CR = er("WeakMap.prototype.get", !0)
  , BR = er("WeakMap.prototype.set", !0)
  , UR = er("WeakMap.prototype.has", !0)
  , KR = er("Map.prototype.get", !0)
  , wR = er("Map.prototype.set", !0)
  , NR = er("Map.prototype.has", !0)
  , Ji = function(t, e) {
    for (var r = t, i; (i = r.next) !== null; r = i)
        if (i.key === e)
            return r.next = i.next,
            i.next = t.next,
            t.next = i,
            i
}
  , IR = function(t, e) {
    var r = Ji(t, e);
    return r && r.value
}
  , DR = function(t, e, r) {
    var i = Ji(t, e);
    i ? i.value = r : t.next = {
        key: e,
        next: t.next,
        value: r
    }
}
  , OR = function(t, e) {
    return !!Ji(t, e)
}
  , PR = function() {
    var e, r, i, s = {
        assert: function(a) {
            if (!s.has(a))
                throw new AR("Side channel does not contain " + vR(a))
        },
        get: function(a) {
            if (Cr && a && (typeof a == "object" || typeof a == "function")) {
                if (e)
                    return CR(e, a)
            } else if (Br) {
                if (r)
                    return KR(r, a)
            } else if (i)
                return IR(i, a)
        },
        has: function(a) {
            if (Cr && a && (typeof a == "object" || typeof a == "function")) {
                if (e)
                    return UR(e, a)
            } else if (Br) {
                if (r)
                    return NR(r, a)
            } else if (i)
                return OR(i, a);
            return !1
        },
        set: function(a, f) {
            Cr && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new Cr),
            BR(e, a, f)) : Br ? (r || (r = new Br),
            wR(r, a, f)) : (i || (i = {
                key: {},
                next: null
            }),
            DR(i, a, f))
        }
    };
    return s
}
  , kR = String.prototype.replace
  , VR = /%20/g
  , Gn = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
}
  , Yi = {
    default: Gn.RFC3986,
    formatters: {
        RFC1738: function(t) {
            return kR.call(t, VR, "+")
        },
        RFC3986: function(t) {
            return String(t)
        }
    },
    RFC1738: Gn.RFC1738,
    RFC3986: Gn.RFC3986
}
  , $R = Yi
  , Xn = Object.prototype.hasOwnProperty
  , lt = Array.isArray
  , Oe = function() {
    for (var t = [], e = 0; e < 256; ++e)
        t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
    return t
}()
  , MR = function(e) {
    for (; e.length > 1; ) {
        var r = e.pop()
          , i = r.obj[r.prop];
        if (lt(i)) {
            for (var s = [], a = 0; a < i.length; ++a)
                typeof i[a] < "u" && s.push(i[a]);
            r.obj[r.prop] = s
        }
    }
}
  , gu = function(e, r) {
    for (var i = r && r.plainObjects ? Object.create(null) : {}, s = 0; s < e.length; ++s)
        typeof e[s] < "u" && (i[s] = e[s]);
    return i
}
  , GR = function t(e, r, i) {
    if (!r)
        return e;
    if (typeof r != "object") {
        if (lt(e))
            e.push(r);
        else if (e && typeof e == "object")
            (i && (i.plainObjects || i.allowPrototypes) || !Xn.call(Object.prototype, r)) && (e[r] = !0);
        else
            return [e, r];
        return e
    }
    if (!e || typeof e != "object")
        return [e].concat(r);
    var s = e;
    return lt(e) && !lt(r) && (s = gu(e, i)),
    lt(e) && lt(r) ? (r.forEach(function(a, f) {
        if (Xn.call(e, f)) {
            var u = e[f];
            u && typeof u == "object" && a && typeof a == "object" ? e[f] = t(u, a, i) : e.push(a)
        } else
            e[f] = a
    }),
    e) : Object.keys(r).reduce(function(a, f) {
        var u = r[f];
        return Xn.call(a, f) ? a[f] = t(a[f], u, i) : a[f] = u,
        a
    }, s)
}
  , XR = function(e, r) {
    return Object.keys(r).reduce(function(i, s) {
        return i[s] = r[s],
        i
    }, e)
}
  , jR = function(t, e, r) {
    var i = t.replace(/\+/g, " ");
    if (r === "iso-8859-1")
        return i.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
        return decodeURIComponent(i)
    } catch {
        return i
    }
}
  , jn = 1024
  , FR = function(e, r, i, s, a) {
    if (e.length === 0)
        return e;
    var f = e;
    if (typeof e == "symbol" ? f = Symbol.prototype.toString.call(e) : typeof e != "string" && (f = String(e)),
    i === "iso-8859-1")
        return escape(f).replace(/%u[0-9a-f]{4}/gi, function(g) {
            return "%26%23" + parseInt(g.slice(2), 16) + "%3B"
        });
    for (var u = "", o = 0; o < f.length; o += jn) {
        for (var c = f.length >= jn ? f.slice(o, o + jn) : f, p = [], R = 0; R < c.length; ++R) {
            var x = c.charCodeAt(R);
            if (x === 45 || x === 46 || x === 95 || x === 126 || x >= 48 && x <= 57 || x >= 65 && x <= 90 || x >= 97 && x <= 122 || a === $R.RFC1738 && (x === 40 || x === 41)) {
                p[p.length] = c.charAt(R);
                continue
            }
            if (x < 128) {
                p[p.length] = Oe[x];
                continue
            }
            if (x < 2048) {
                p[p.length] = Oe[192 | x >> 6] + Oe[128 | x & 63];
                continue
            }
            if (x < 55296 || x >= 57344) {
                p[p.length] = Oe[224 | x >> 12] + Oe[128 | x >> 6 & 63] + Oe[128 | x & 63];
                continue
            }
            R += 1,
            x = 65536 + ((x & 1023) << 10 | c.charCodeAt(R) & 1023),
            p[p.length] = Oe[240 | x >> 18] + Oe[128 | x >> 12 & 63] + Oe[128 | x >> 6 & 63] + Oe[128 | x & 63]
        }
        u += p.join("")
    }
    return u
}
  , qR = function(e) {
    for (var r = [{
        obj: {
            o: e
        },
        prop: "o"
    }], i = [], s = 0; s < r.length; ++s)
        for (var a = r[s], f = a.obj[a.prop], u = Object.keys(f), o = 0; o < u.length; ++o) {
            var c = u[o]
              , p = f[c];
            typeof p == "object" && p !== null && i.indexOf(p) === -1 && (r.push({
                obj: f,
                prop: c
            }),
            i.push(p))
        }
    return MR(r),
    e
}
  , HR = function(e) {
    return Object.prototype.toString.call(e) === "[object RegExp]"
}
  , WR = function(e) {
    return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
}
  , zR = function(e, r) {
    return [].concat(e, r)
}
  , JR = function(e, r) {
    if (lt(e)) {
        for (var i = [], s = 0; s < e.length; s += 1)
            i.push(r(e[s]));
        return i
    }
    return r(e)
}
  , mu = {
    arrayToObject: gu,
    assign: XR,
    combine: zR,
    compact: qR,
    decode: jR,
    encode: FR,
    isBuffer: WR,
    isRegExp: HR,
    maybeMap: JR,
    merge: GR
}
  , Tu = PR
  , kr = mu
  , Er = Yi
  , YR = Object.prototype.hasOwnProperty
  , Su = {
    brackets: function(e) {
        return e + "[]"
    },
    comma: "comma",
    indices: function(e, r) {
        return e + "[" + r + "]"
    },
    repeat: function(e) {
        return e
    }
}
  , Pe = Array.isArray
  , QR = Array.prototype.push
  , Lu = function(t, e) {
    QR.apply(t, Pe(e) ? e : [e])
}
  , ZR = Date.prototype.toISOString
  , Ca = Er.default
  , Ee = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: kr.encode,
    encodeValuesOnly: !1,
    format: Ca,
    formatter: Er.formatters[Ca],
    indices: !1,
    serializeDate: function(e) {
        return ZR.call(e)
    },
    skipNulls: !1,
    strictNullHandling: !1
}
  , eb = function(e) {
    return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
}
  , Fn = {}
  , tb = function t(e, r, i, s, a, f, u, o, c, p, R, x, g, m, C, B, P, k) {
    for (var K = e, ue = k, se = 0, de = !1; (ue = ue.get(Fn)) !== void 0 && !de; ) {
        var Q = ue.get(e);
        if (se += 1,
        typeof Q < "u") {
            if (Q === se)
                throw new RangeError("Cyclic object value");
            de = !0
        }
        typeof ue.get(Fn) > "u" && (se = 0)
    }
    if (typeof p == "function" ? K = p(r, K) : K instanceof Date ? K = g(K) : i === "comma" && Pe(K) && (K = kr.maybeMap(K, function(D) {
        return D instanceof Date ? g(D) : D
    })),
    K === null) {
        if (f)
            return c && !B ? c(r, Ee.encoder, P, "key", m) : r;
        K = ""
    }
    if (eb(K) || kr.isBuffer(K)) {
        if (c) {
            var he = B ? r : c(r, Ee.encoder, P, "key", m);
            return [C(he) + "=" + C(c(K, Ee.encoder, P, "value", m))]
        }
        return [C(r) + "=" + C(String(K))]
    }
    var X = [];
    if (typeof K > "u")
        return X;
    var fe;
    if (i === "comma" && Pe(K))
        B && c && (K = kr.maybeMap(K, c)),
        fe = [{
            value: K.length > 0 ? K.join(",") || null : void 0
        }];
    else if (Pe(p))
        fe = p;
    else {
        var Qe = Object.keys(K);
        fe = R ? Qe.sort(R) : Qe
    }
    var oe = o ? r.replace(/\./g, "%2E") : r
      , Re = s && Pe(K) && K.length === 1 ? oe + "[]" : oe;
    if (a && Pe(K) && K.length === 0)
        return Re + "[]";
    for (var xe = 0; xe < fe.length; ++xe) {
        var T = fe[xe]
          , d = typeof T == "object" && typeof T.value < "u" ? T.value : K[T];
        if (!(u && d === null)) {
            var I = x && o ? T.replace(/\./g, "%2E") : T
              , j = Pe(K) ? typeof i == "function" ? i(Re, I) : Re : Re + (x ? "." + I : "[" + I + "]");
            k.set(e, se);
            var F = Tu();
            F.set(Fn, k),
            Lu(X, t(d, j, i, s, a, f, u, o, i === "comma" && B && Pe(K) ? null : c, p, R, x, g, m, C, B, P, F))
        }
    }
    return X
}
  , rb = function(e) {
    if (!e)
        return Ee;
    if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
        throw new TypeError("Encoder has to be a function.");
    var r = e.charset || Ee.charset;
    if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var i = Er.default;
    if (typeof e.format < "u") {
        if (!YR.call(Er.formatters, e.format))
            throw new TypeError("Unknown format option provided.");
        i = e.format
    }
    var s = Er.formatters[i]
      , a = Ee.filter;
    (typeof e.filter == "function" || Pe(e.filter)) && (a = e.filter);
    var f;
    if (e.arrayFormat in Su ? f = e.arrayFormat : "indices"in e ? f = e.indices ? "indices" : "repeat" : f = Ee.arrayFormat,
    "commaRoundTrip"in e && typeof e.commaRoundTrip != "boolean")
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var u = typeof e.allowDots > "u" ? e.encodeDotInKeys === !0 ? !0 : Ee.allowDots : !!e.allowDots;
    return {
        addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : Ee.addQueryPrefix,
        allowDots: u,
        allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : Ee.allowEmptyArrays,
        arrayFormat: f,
        charset: r,
        charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Ee.charsetSentinel,
        commaRoundTrip: e.commaRoundTrip,
        delimiter: typeof e.delimiter > "u" ? Ee.delimiter : e.delimiter,
        encode: typeof e.encode == "boolean" ? e.encode : Ee.encode,
        encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : Ee.encodeDotInKeys,
        encoder: typeof e.encoder == "function" ? e.encoder : Ee.encoder,
        encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : Ee.encodeValuesOnly,
        filter: a,
        format: i,
        formatter: s,
        serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : Ee.serializeDate,
        skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : Ee.skipNulls,
        sort: typeof e.sort == "function" ? e.sort : null,
        strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Ee.strictNullHandling
    }
}
  , nb = function(t, e) {
    var r = t, i = rb(e), s, a;
    typeof i.filter == "function" ? (a = i.filter,
    r = a("", r)) : Pe(i.filter) && (a = i.filter,
    s = a);
    var f = [];
    if (typeof r != "object" || r === null)
        return "";
    var u = Su[i.arrayFormat]
      , o = u === "comma" && i.commaRoundTrip;
    s || (s = Object.keys(r)),
    i.sort && s.sort(i.sort);
    for (var c = Tu(), p = 0; p < s.length; ++p) {
        var R = s[p];
        i.skipNulls && r[R] === null || Lu(f, tb(r[R], R, u, o, i.allowEmptyArrays, i.strictNullHandling, i.skipNulls, i.encodeDotInKeys, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, c))
    }
    var x = f.join(i.delimiter)
      , g = i.addQueryPrefix === !0 ? "?" : "";
    return i.charsetSentinel && (i.charset === "iso-8859-1" ? g += "utf8=%26%2310003%3B&" : g += "utf8=%E2%9C%93&"),
    x.length > 0 ? g + x : ""
}
  , Gt = mu
  , fi = Object.prototype.hasOwnProperty
  , ib = Array.isArray
  , ae = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: Gt.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictDepth: !1,
    strictNullHandling: !1
}
  , sb = function(t) {
    return t.replace(/&#(\d+);/g, function(e, r) {
        return String.fromCharCode(parseInt(r, 10))
    })
}
  , du = function(t, e) {
    return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
}
  , ab = "utf8=%26%2310003%3B"
  , fb = "utf8=%E2%9C%93"
  , ub = function(e, r) {
    var i = {
        __proto__: null
    }
      , s = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
    s = s.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, f = s.split(r.delimiter, a), u = -1, o, c = r.charset;
    if (r.charsetSentinel)
        for (o = 0; o < f.length; ++o)
            f[o].indexOf("utf8=") === 0 && (f[o] === fb ? c = "utf-8" : f[o] === ab && (c = "iso-8859-1"),
            u = o,
            o = f.length);
    for (o = 0; o < f.length; ++o)
        if (o !== u) {
            var p = f[o], R = p.indexOf("]="), x = R === -1 ? p.indexOf("=") : R + 1, g, m;
            x === -1 ? (g = r.decoder(p, ae.decoder, c, "key"),
            m = r.strictNullHandling ? null : "") : (g = r.decoder(p.slice(0, x), ae.decoder, c, "key"),
            m = Gt.maybeMap(du(p.slice(x + 1), r), function(B) {
                return r.decoder(B, ae.decoder, c, "value")
            })),
            m && r.interpretNumericEntities && c === "iso-8859-1" && (m = sb(m)),
            p.indexOf("[]=") > -1 && (m = ib(m) ? [m] : m);
            var C = fi.call(i, g);
            C && r.duplicates === "combine" ? i[g] = Gt.combine(i[g], m) : (!C || r.duplicates === "last") && (i[g] = m)
        }
    return i
}
  , ob = function(t, e, r, i) {
    for (var s = i ? e : du(e, r), a = t.length - 1; a >= 0; --a) {
        var f, u = t[a];
        if (u === "[]" && r.parseArrays)
            f = r.allowEmptyArrays && (s === "" || r.strictNullHandling && s === null) ? [] : [].concat(s);
        else {
            f = r.plainObjects ? Object.create(null) : {};
            var o = u.charAt(0) === "[" && u.charAt(u.length - 1) === "]" ? u.slice(1, -1) : u
              , c = r.decodeDotInKeys ? o.replace(/%2E/g, ".") : o
              , p = parseInt(c, 10);
            !r.parseArrays && c === "" ? f = {
                0: s
            } : !isNaN(p) && u !== c && String(p) === c && p >= 0 && r.parseArrays && p <= r.arrayLimit ? (f = [],
            f[p] = s) : c !== "__proto__" && (f[c] = s)
        }
        s = f
    }
    return s
}
  , lb = function(e, r, i, s) {
    if (e) {
        var a = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e
          , f = /(\[[^[\]]*])/
          , u = /(\[[^[\]]*])/g
          , o = i.depth > 0 && f.exec(a)
          , c = o ? a.slice(0, o.index) : a
          , p = [];
        if (c) {
            if (!i.plainObjects && fi.call(Object.prototype, c) && !i.allowPrototypes)
                return;
            p.push(c)
        }
        for (var R = 0; i.depth > 0 && (o = u.exec(a)) !== null && R < i.depth; ) {
            if (R += 1,
            !i.plainObjects && fi.call(Object.prototype, o[1].slice(1, -1)) && !i.allowPrototypes)
                return;
            p.push(o[1])
        }
        if (o) {
            if (i.strictDepth === !0)
                throw new RangeError("Input depth exceeded depth option of " + i.depth + " and strictDepth is true");
            p.push("[" + a.slice(o.index) + "]")
        }
        return ob(p, r, i, s)
    }
}
  , cb = function(e) {
    if (!e)
        return ae;
    if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean")
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function")
        throw new TypeError("Decoder has to be a function.");
    if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var r = typeof e.charset > "u" ? ae.charset : e.charset
      , i = typeof e.duplicates > "u" ? ae.duplicates : e.duplicates;
    if (i !== "combine" && i !== "first" && i !== "last")
        throw new TypeError("The duplicates option must be either combine, first, or last");
    var s = typeof e.allowDots > "u" ? e.decodeDotInKeys === !0 ? !0 : ae.allowDots : !!e.allowDots;
    return {
        allowDots: s,
        allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : ae.allowEmptyArrays,
        allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : ae.allowPrototypes,
        allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : ae.allowSparse,
        arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : ae.arrayLimit,
        charset: r,
        charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : ae.charsetSentinel,
        comma: typeof e.comma == "boolean" ? e.comma : ae.comma,
        decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : ae.decodeDotInKeys,
        decoder: typeof e.decoder == "function" ? e.decoder : ae.decoder,
        delimiter: typeof e.delimiter == "string" || Gt.isRegExp(e.delimiter) ? e.delimiter : ae.delimiter,
        depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : ae.depth,
        duplicates: i,
        ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
        interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : ae.interpretNumericEntities,
        parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : ae.parameterLimit,
        parseArrays: e.parseArrays !== !1,
        plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : ae.plainObjects,
        strictDepth: typeof e.strictDepth == "boolean" ? !!e.strictDepth : ae.strictDepth,
        strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : ae.strictNullHandling
    }
}
  , pb = function(t, e) {
    var r = cb(e);
    if (t === "" || t === null || typeof t > "u")
        return r.plainObjects ? Object.create(null) : {};
    for (var i = typeof t == "string" ? ub(t, r) : t, s = r.plainObjects ? Object.create(null) : {}, a = Object.keys(i), f = 0; f < a.length; ++f) {
        var u = a[f]
          , o = lb(u, i[u], r, typeof t == "string");
        s = Gt.merge(s, o, r)
    }
    return r.allowSparse === !0 ? s : Gt.compact(s)
}
  , Eb = nb
  , hb = pb
  , xb = Yi
  , vu = {
    formats: xb,
    parse: hb,
    stringify: Eb
};
let _b = class {
    constructor(e) {
        this.code = e.code,
        this.token = e.token,
        this.host = e.host
    }
}
  , Rb = class {
    constructor(e) {
        this.appId = e.appId,
        this.appTag = e.appTag,
        this.audienceEnabled = e.audienceEnabled,
        this.code = e.code,
        this.host = e.host,
        this.audienceHost = e.audienceHost,
        this.locked = e.locked,
        this.full = e.full,
        this.maxPlayers = e.maxPlayers,
        this.minPlayers = e.minPlayers,
        this.moderationEnabled = e.moderationEnabled,
        this.passwordRequired = e.passwordRequired,
        this.twitchLocked = e.twitchLocked,
        this.locale = e.locale,
        this.keepalive = e.keepalive,
        this.controllerBranch = e.controllerBranch
    }
}
  , bb = class {
    constructor(e) {
        this.connections = e.connections
    }
}
  , yb = class {
    constructor(e) {
        this.cause = e.cause
    }
    whenReceived(e) {
        e.disconnect()
    }
}
  , gb = class {
}
;
var _n = {
    CreateRoomReply: _b,
    GetRoomReply: Rb,
    GetAudienceReply: bb,
    RoomExit: yb,
    RoomLock: gb
};
const Ba = Qx
  , mb = vu
  , {CreateRoomReply: Tb, GetRoomReply: Sb} = _n;
let Lb = class {
    constructor(e) {
        if (!e.host)
            throw new Error("unable to create ecast APIClient: no host provided");
        if (this.host = e.host,
        !e.scheme)
            throw new Error("unable to create ecast APIClient: no scheme provided");
        this.scheme = e.scheme
    }
    url(e, r) {
        if (r) {
            let i = mb.stringify(r);
            return `${this.scheme}://${this.host}/api/v2${e}?${i}`
        }
        return `${this.scheme}://${this.host}/api/v2${e}`
    }
    async createRoom(e) {
        let r = {
            appTag: "test",
            userId: "fart",
            ...e
        }
          , i = this.url("/rooms", r)
          , a = await Ba(i, {
            method: "POST"
        });
        const {body: f, error: u, ok: o} = await a.json();
        if (!o)
            throw new Error(`failed to create room: ${u}`);
        return new Tb({
            code: f.code,
            token: f.token,
            host: f.host
        })
    }
    async getRoom(e) {
        let r = this.url(`/rooms/${e.code}`)
          , s = await (await Ba(r)).json();
        if (!s.ok)
            throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${s.error}`);
        let a = s.body;
        return new Sb({
            appId: a.appId,
            appTag: a.appTag,
            audienceEnabled: a.audienceEnabled,
            code: a.code,
            host: a.host,
            audienceHost: a.audienceHost,
            locked: a.locked,
            full: a.full,
            maxPlayers: a.maxPlayers,
            minPlayers: a.minPlayers,
            moderationEnabled: a.moderationEnabled,
            passwordRequired: a.passwordRequired,
            twitchLocked: a.twitchLocked,
            locale: a.locale,
            keepalive: a.keepalive,
            controllerBranch: a.controllerBranch
        })
    }
}
;
var db = {
    APIClient: Lb
}
  , Ut = null;
typeof WebSocket < "u" ? Ut = WebSocket : typeof MozWebSocket < "u" ? Ut = MozWebSocket : typeof pe < "u" ? Ut = pe.WebSocket || pe.MozWebSocket : typeof window < "u" ? Ut = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ut = self.WebSocket || self.MozWebSocket);
var vb = Ut, Qi = {
    exports: {}
}, Ot = typeof Reflect == "object" ? Reflect : null, Ua = Ot && typeof Ot.apply == "function" ? Ot.apply : function(e, r, i) {
    return Function.prototype.apply.call(e, r, i)
}
, Vr;
Ot && typeof Ot.ownKeys == "function" ? Vr = Ot.ownKeys : Object.getOwnPropertySymbols ? Vr = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
}
: Vr = function(e) {
    return Object.getOwnPropertyNames(e)
}
;
function Ab(t) {
    console && console.warn && console.warn(t)
}
var Au = Number.isNaN || function(e) {
    return e !== e
}
;
function Y() {
    Y.init.call(this)
}
Qi.exports = Y;
Qi.exports.once = Kb;
Y.EventEmitter = Y;
Y.prototype._events = void 0;
Y.prototype._eventsCount = 0;
Y.prototype._maxListeners = void 0;
var Ka = 10;
function Rn(t) {
    if (typeof t != "function")
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}
Object.defineProperty(Y, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return Ka
    },
    set: function(t) {
        if (typeof t != "number" || t < 0 || Au(t))
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        Ka = t
    }
});
Y.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null),
    this._eventsCount = 0),
    this._maxListeners = this._maxListeners || void 0
}
;
Y.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || Au(e))
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e,
    this
}
;
function Cu(t) {
    return t._maxListeners === void 0 ? Y.defaultMaxListeners : t._maxListeners
}
Y.prototype.getMaxListeners = function() {
    return Cu(this)
}
;
Y.prototype.emit = function(e) {
    for (var r = [], i = 1; i < arguments.length; i++)
        r.push(arguments[i]);
    var s = e === "error"
      , a = this._events;
    if (a !== void 0)
        s = s && a.error === void 0;
    else if (!s)
        return !1;
    if (s) {
        var f;
        if (r.length > 0 && (f = r[0]),
        f instanceof Error)
            throw f;
        var u = new Error("Unhandled error." + (f ? " (" + f.message + ")" : ""));
        throw u.context = f,
        u
    }
    var o = a[e];
    if (o === void 0)
        return !1;
    if (typeof o == "function")
        Ua(o, this, r);
    else
        for (var c = o.length, p = Nu(o, c), i = 0; i < c; ++i)
            Ua(p[i], this, r);
    return !0
}
;
function Bu(t, e, r, i) {
    var s, a, f;
    if (Rn(r),
    a = t._events,
    a === void 0 ? (a = t._events = Object.create(null),
    t._eventsCount = 0) : (a.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r),
    a = t._events),
    f = a[e]),
    f === void 0)
        f = a[e] = r,
        ++t._eventsCount;
    else if (typeof f == "function" ? f = a[e] = i ? [r, f] : [f, r] : i ? f.unshift(r) : f.push(r),
    s = Cu(t),
    s > 0 && f.length > s && !f.warned) {
        f.warned = !0;
        var u = new Error("Possible EventEmitter memory leak detected. " + f.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        u.name = "MaxListenersExceededWarning",
        u.emitter = t,
        u.type = e,
        u.count = f.length,
        Ab(u)
    }
    return t
}
Y.prototype.addListener = function(e, r) {
    return Bu(this, e, r, !1)
}
;
Y.prototype.on = Y.prototype.addListener;
Y.prototype.prependListener = function(e, r) {
    return Bu(this, e, r, !0)
}
;
function Cb() {
    if (!this.fired)
        return this.target.removeListener(this.type, this.wrapFn),
        this.fired = !0,
        arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}
function Uu(t, e, r) {
    var i = {
        fired: !1,
        wrapFn: void 0,
        target: t,
        type: e,
        listener: r
    }
      , s = Cb.bind(i);
    return s.listener = r,
    i.wrapFn = s,
    s
}
Y.prototype.once = function(e, r) {
    return Rn(r),
    this.on(e, Uu(this, e, r)),
    this
}
;
Y.prototype.prependOnceListener = function(e, r) {
    return Rn(r),
    this.prependListener(e, Uu(this, e, r)),
    this
}
;
Y.prototype.removeListener = function(e, r) {
    var i, s, a, f, u;
    if (Rn(r),
    s = this._events,
    s === void 0)
        return this;
    if (i = s[e],
    i === void 0)
        return this;
    if (i === r || i.listener === r)
        --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[e],
        s.removeListener && this.emit("removeListener", e, i.listener || r));
    else if (typeof i != "function") {
        for (a = -1,
        f = i.length - 1; f >= 0; f--)
            if (i[f] === r || i[f].listener === r) {
                u = i[f].listener,
                a = f;
                break
            }
        if (a < 0)
            return this;
        a === 0 ? i.shift() : Bb(i, a),
        i.length === 1 && (s[e] = i[0]),
        s.removeListener !== void 0 && this.emit("removeListener", e, u || r)
    }
    return this
}
;
Y.prototype.off = Y.prototype.removeListener;
Y.prototype.removeAllListeners = function(e) {
    var r, i, s;
    if (i = this._events,
    i === void 0)
        return this;
    if (i.removeListener === void 0)
        return arguments.length === 0 ? (this._events = Object.create(null),
        this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete i[e]),
        this;
    if (arguments.length === 0) {
        var a = Object.keys(i), f;
        for (s = 0; s < a.length; ++s)
            f = a[s],
            f !== "removeListener" && this.removeAllListeners(f);
        return this.removeAllListeners("removeListener"),
        this._events = Object.create(null),
        this._eventsCount = 0,
        this
    }
    if (r = i[e],
    typeof r == "function")
        this.removeListener(e, r);
    else if (r !== void 0)
        for (s = r.length - 1; s >= 0; s--)
            this.removeListener(e, r[s]);
    return this
}
;
function Ku(t, e, r) {
    var i = t._events;
    if (i === void 0)
        return [];
    var s = i[e];
    return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? Ub(s) : Nu(s, s.length)
}
Y.prototype.listeners = function(e) {
    return Ku(this, e, !0)
}
;
Y.prototype.rawListeners = function(e) {
    return Ku(this, e, !1)
}
;
Y.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : wu.call(t, e)
}
;
Y.prototype.listenerCount = wu;
function wu(t) {
    var e = this._events;
    if (e !== void 0) {
        var r = e[t];
        if (typeof r == "function")
            return 1;
        if (r !== void 0)
            return r.length
    }
    return 0
}
Y.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Vr(this._events) : []
}
;
function Nu(t, e) {
    for (var r = new Array(e), i = 0; i < e; ++i)
        r[i] = t[i];
    return r
}
function Bb(t, e) {
    for (; e + 1 < t.length; e++)
        t[e] = t[e + 1];
    t.pop()
}
function Ub(t) {
    for (var e = new Array(t.length), r = 0; r < e.length; ++r)
        e[r] = t[r].listener || t[r];
    return e
}
function Kb(t, e) {
    return new Promise(function(r, i) {
        function s(f) {
            t.removeListener(e, a),
            i(f)
        }
        function a() {
            typeof t.removeListener == "function" && t.removeListener("error", s),
            r([].slice.call(arguments))
        }
        Iu(t, e, a, {
            once: !0
        }),
        e !== "error" && wb(t, s, {
            once: !0
        })
    }
    )
}
function wb(t, e, r) {
    typeof t.on == "function" && Iu(t, "error", e, r)
}
function Iu(t, e, r, i) {
    if (typeof t.on == "function")
        i.once ? t.once(e, r) : t.on(e, r);
    else if (typeof t.addEventListener == "function")
        t.addEventListener(e, function s(a) {
            i.once && t.removeEventListener(e, s),
            r(a)
        });
    else
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}
var Nb = Qi.exports;
let Ib = class {
    constructor(e) {
        e && (this.error = e.error,
        this.to = e.to,
        this.opcode = e.opcode)
    }
    toString() {
        return `ObservedError{
	to:${this.to}
	error:${this.error}
	opcode:${this.opcode}
}`
    }
}
  , bn = class extends Error {
    constructor(e) {
        super(e),
        e && (this.code = e.code,
        this.message = e.message)
    }
}
;
class yn extends bn {
    constructor(e) {
        super(e),
        this.code = 1e3,
        this.message = e && e.message ? e.message : "ecast server error"
    }
}
class Db extends yn {
    constructor(e) {
        super(e),
        this.code = 1001,
        this.message = e && e.message ? e.message : "create room failed"
    }
}
class Ob extends yn {
    constructor(e) {
        super(e),
        this.code = 1002,
        this.message = e && e.message ? e.message : "unable to connect to room"
    }
}
class Pb extends yn {
    constructor(e) {
        super(e),
        this.code = 1003,
        this.message = e && e.message ? e.message : "server is shutting down"
    }
}
class J extends bn {
    constructor(e) {
        super(e),
        this.code = 2e3,
        this.message = e && e.message ? e.message : "ecast client error"
    }
}
class kb extends J {
    constructor(e) {
        super(e),
        this.code = 2001,
        this.message = e && e.message ? e.message : "parse error in ecast protocol"
    }
}
class Vb extends J {
    constructor(e) {
        super(e),
        this.code = 2002,
        this.message = e && e.message ? e.message : "missing opcode"
    }
}
class $b extends J {
    constructor(e) {
        super(e),
        this.code = 2003,
        this.message = e && e.message ? e.message : "invalid opcode"
    }
}
class Mb extends J {
    constructor(e) {
        super(e),
        this.code = 2004,
        this.message = e && e.message ? e.message : "invalid arguments"
    }
}
class Gb extends J {
    constructor(e) {
        super(e),
        this.code = 2005,
        this.message = e && e.message ? e.message : "entity not found"
    }
}
class Xb extends J {
    constructor(e) {
        super(e),
        this.code = 2006,
        this.message = e && e.message ? e.message : "an entity already exists with that key"
    }
}
class jb extends J {
    constructor(e) {
        super(e),
        this.code = 2007,
        this.message = e && e.message ? e.message : "the entity is not of the expected type"
    }
}
class Fb extends J {
    constructor(e) {
        super(e),
        this.code = 2008,
        this.message = e && e.message ? e.message : "no such client"
    }
}
class qb extends J {
    constructor(e) {
        super(e),
        this.code = 2009,
        this.message = e && e.message ? e.message : "room is locked"
    }
}
class Hb extends J {
    constructor(e) {
        super(e),
        this.code = 2010,
        this.message = e && e.message ? e.message : "room is full"
    }
}
class Wb extends J {
    constructor(e) {
        super(e),
        this.code = 2011,
        this.message = e && e.message ? e.message : "no such license"
    }
}
class zb extends J {
    constructor(e) {
        super(e),
        this.code = 2012,
        this.message = e && e.message ? e.message : "invalid license"
    }
}
class Jb extends J {
    constructor(e) {
        super(e),
        this.code = 2013,
        this.message = e && e.message ? e.message : "room not found"
    }
}
class Yb extends J {
    constructor(e) {
        super(e),
        this.code = 2014,
        this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class Qb extends J {
    constructor(e) {
        super(e),
        this.code = 2015,
        this.message = e && e.message ? e.message : "twitch login required"
    }
}
class Zb extends J {
    constructor(e) {
        super(e),
        this.code = 2016,
        this.message = e && e.message ? e.message : "no such option"
    }
}
class ey extends J {
    constructor(e) {
        super(e),
        this.code = 2017,
        this.message = e && e.message ? e.message : "password required"
    }
}
class ty extends J {
    constructor(e) {
        super(e),
        this.code = 2018,
        this.message = e && e.message ? e.message : "invalid room password"
    }
}
class ry extends J {
    constructor(e) {
        super(e),
        this.code = 2019,
        this.message = e && e.message ? e.message : "missing name"
    }
}
class ny extends J {
    constructor(e) {
        super(e),
        this.code = 2021,
        this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class iy extends J {
    constructor(e) {
        super(e),
        this.code = 2022,
        this.message = e && e.message ? e.message : "no such filter"
    }
}
class sy extends J {
    constructor(e) {
        super(e),
        this.code = 2023,
        this.message = e && e.message ? e.message : "permission denied"
    }
}
class ay extends J {
    constructor(e) {
        super(e),
        this.code = 2024,
        this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class fy extends J {
    constructor(e) {
        super(e),
        this.code = 2025,
        this.message = e && e.message ? e.message : "illegal operation"
    }
}
class uy extends J {
    constructor(e) {
        super(e),
        this.code = 2026,
        this.message = e && e.message ? e.message : "invalid ACL change"
    }
}
class oy extends J {
    constructor(e) {
        super(e),
        this.code = 2027,
        this.message = e && e.message ? e.message : "room has already ended"
    }
}
class ly extends J {
    constructor(e) {
        super(e),
        this.code = 2028,
        this.message = e && e.message ? e.message : "the entity is locked"
    }
}
class cy extends J {
    constructor(e) {
        super(e),
        this.code = 2420,
        this.message = e && e.message ? e.message : "rate limit exceeded"
    }
}
function py({code: t, message: e}) {
    const r = Ey[t];
    return r ? new r({
        message: e
    }) : new bn({
        message: e
    })
}
var Du = {
    createError: py,
    CallError: bn,
    ObservedError: Ib
};
const Ey = {
    1e3: yn,
    1001: Db,
    1002: Ob,
    1003: Pb,
    2e3: J,
    2001: kb,
    2002: Vb,
    2003: $b,
    2004: Mb,
    2005: Gb,
    2006: Xb,
    2007: jb,
    2008: Fb,
    2009: qb,
    2010: Hb,
    2011: Wb,
    2012: zb,
    2013: Jb,
    2014: Yb,
    2015: Qb,
    2016: Zb,
    2017: ey,
    2018: ty,
    2019: ry,
    2021: ny,
    2022: iy,
    2023: sy,
    2024: ay,
    2025: fy,
    2026: uy,
    2027: oy,
    2028: ly,
    2420: cy
};
let hy = class {
    constructor(e) {
        this.id = e.id,
        this.deviceId = e.deviceId,
        this.name = e.name,
        this.secret = e.secret,
        this.reconnect = e.reconnect,
        this.entities = e.entities,
        this.here = e.here,
        this.profile = e.profile,
        this.replayEnd = e.replayEnd
    }
}
  , xy = class {
    constructor(e) {
        this.id = e.id,
        this.userId = e.userId,
        this.name = e.name,
        this.role = e.role,
        this.reconnect = e.reconnect
    }
}
  , _y = class {
    constructor(e) {
        this.id = e.id,
        this.role = e.role
    }
}
  , Ry = class {
    constructor(e) {
        this.to = e.to,
        this.from = e.from,
        this.body = e.body,
        this.userId = e.userId
    }
}
  , by = class {
    constructor(e) {
        this.id = e.id,
        this.banned = e.banned,
        this.reason = e.reason
    }
}
;
var Zi = {
    ClientConnected: xy,
    ClientDisconnected: _y,
    ClientKicked: by,
    ClientSend: Ry,
    ClientWelcome: hy
};
let yy = class {
    constructor(e) {
        this.choices = e.choices,
        this.key = e.key,
        this.meta = e.meta || {}
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `CountGroup{
	choices: ${this.choices}
	meta:${JSON.stringify(this.meta)}
}`
    }
}
;
var es = {
    CountGroup: yy
};
let gy = class {
    constructor(e) {
        this.key = e.key,
        this.from = e.from,
        this.colors = e.colors,
        this.lines = e.lines,
        this.live = e.live,
        this.maxLayer = e.maxLayer,
        this.maxPoints = e.maxPoints,
        this.size = e.size,
        this.weights = e.weights,
        this.meta = e.meta || {},
        e.acl && (this.acl = e.acl)
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `Doodle{
	key:${this.key}
	colors:${this.colors}
	lines:${this.lines}
	live:${this.live}
	maxLayer:${this.maxLayer}
	maxPoints:${this.maxPoints}
	size:${this.size}
	weights:${this.weights}
	meta:${JSON.stringify(this.meta)}
}`
    }
}
  , my = class {
    constructor(e) {
        this.key = e.key,
        this.from = e.from,
        this.line = e.line
    }
    whenReceived(e) {
        e.entities[this.key].lines.push(this.line)
    }
    toString() {
        return `DoodleLine{
	val:${this.line}
}`
    }
}
  , Ty = class {
    constructor(e) {
        this.key = e.key,
        this.from = e.from,
        this.index = e.index
    }
    whenReceived(e) {
        e.entities[this.key].lines.splice(this.index, 1)
    }
    toString() {
        return `DoodleLineRemoved{
	index:${this.index}
}`
    }
}
;
var ts = {
    DoodleEntity: gy,
    DoodleLine: my,
    DoodleLineRemoved: Ty
};
let Sy = class {
    constructor(e) {
        this.key = e.key,
        this.count = e.count,
        this.meta = e.meta || {}
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `GCounter{
	count:${this.count}
	meta:${this.meta}
}`
    }
}
;
var rs = {
    GCounter: Sy
};
let Ly = class {
    constructor(e) {
        this.pc = e.pc,
        this.opcode = e.opcode,
        this.result = e.result
    }
}
;
var Ou = {
    Notification: Ly
};
let dy = class Pu {
    constructor(e) {
        this.from = e.from,
        this.key = e.key,
        this.val = e.val,
        this.restrictions = e.restrictions,
        this.version = e.version,
        this.meta = e.meta || {},
        e.acl && (this.acl = e.acl)
    }
    whenReceived(e) {
        if (e.entities[this.key] && e.entities[this.key]instanceof Pu && !this.restrictions) {
            e.entities[this.key].val = this.val,
            e.entities[this.key].meta = this.meta,
            e.entities[this.key].version = this.version,
            e.entities[this.key].from = this.from;
            return
        }
        e.entities[this.key] = this
    }
    toString() {
        return `NumberEntity{
	key:${this.key}
	val: ${this.val}
	restrictions: ${JSON.stringify(this.restrictions)}
	meta: ${JSON.stringify(this.meta)}
}`
    }
}
;
var ns = {
    NumberEntity: dy
};
let vy = class {
    constructor(e) {
        this.from = e.from,
        this.key = e.key,
        this.val = e.val,
        this.version = e.version,
        this.meta = e.meta || {},
        e.acl && (this.acl = e.acl)
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `ObjectEntity{
	key:${this.key}
	value: ${JSON.stringify(this.val)}
	meta:${JSON.stringify(this.meta)}
}`
    }
    toBlob() {
        return this.val
    }
}
  , Ay = class {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `ObjectEcho{message: ${this.message}}`
    }
}
;
var is = {
    ObjectEntity: vy,
    ObjectEcho: Ay
};
let Cy = class {
    constructor(e) {
        this.key = e.key,
        this.count = e.count,
        this.meta = e.meta || {}
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `PNCounter{
	count:${this.count}
	meta:${JSON.stringify(this.meta)}
}`
    }
}
;
var ss = {
    PNCounter: Cy
};
let By = class {
    constructor(e) {
        this.pc = e.pc,
        this.re = e.re,
        this.opcode = e.opcode,
        this.result = e.result
    }
}
;
var ku = {
    Reply: By
};
let Uy = class {
    constructor(e) {
        this.seq = e.seq,
        this.opcode = e.opcode,
        this.params = e.params
    }
}
;
var Ky = {
    Request: Uy
};
let wy = class {
    constructor(e) {
        this.key = e.key,
        this.size = e.size,
        this.version = e.version,
        this.from = e.from,
        this.meta = e.meta || {},
        e.acl && (this.acl = e.acl)
    }
    whenRecived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `Stack{
	key:${this.key}
	size:${this.size}
	version:${this.version}
	from:${this.from}
	meta:${this.meta}
}`
    }
}
  , Ny = class {
    constructor(e) {
        this.key = e.key,
        this.val = e.val
    }
    toString() {
        return `StackElement{
	key:${this.key}
	value: ${JSON.stringify(this.val)}
}`
    }
}
  , Iy = class {
    constructor(e) {
        this.key = e.key,
        this.vals = e.vals
    }
    toString() {
        return `StackElements{
	key:${this.key}
	values: ${JSON.stringify(this.vals)}
}`
    }
}
;
var Vu = {
    StackEntity: wy,
    StackElement: Ny,
    StackElements: Iy
};
let Dy = class {
    constructor(e) {
        this.from = e.from,
        this.key = e.key,
        this.text = e.text,
        this.version = e.version,
        this.meta = e.meta || {},
        e.acl && (this.acl = e.acl)
    }
    whenReceived(e) {
        e.entities[this.key] = this,
        e.emit("text " + this.key, this)
    }
    toString() {
        return `TextEntity{
	key: ${this.key}
	text: ${this.text}
	meta:${JSON.stringify(this.meta)}
}`
    }
    toBlob() {
        return JSON.parse(this.text)
    }
}
  , Oy = class {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `TextEcho{
	key: ${this.key}
	message: ${this.message}
}`
    }
}
;
var as = {
    TextEntity: Dy,
    TextEcho: Oy
};
let Py = class {
    constructor(e) {
        this.from = e.from,
        this.key = e.key,
        this.meta = e.meta || {},
        this.root = e.root,
        e.acl && (this.acl = e.acl)
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `TextMap{
	key:${this.key}
	meta:${JSON.stringify(this.meta)}
}`
    }
}
  , ky = class {
    constructor(e) {
        this.from = e.from,
        this.key = e.key,
        this.msg = e.msg
    }
    toString() {
        const e = this.msg ? this.msg.join(", ") : this.msg;
        return `TextMapSynced{
	key:${this.key}
	from:${this.from}
	msg:${e}
}`
    }
}
  , Vy = class {
    constructor(e) {
        this.from = e.from,
        this.key = e.key,
        this.text = e.text,
        this.attributions = e.attributions
    }
    toString() {
        return `TextMapState{
	key: ${this.key}
	from:${this.from}
	text:${this.text}
	attributions:${this.attributions}
}`
    }
}
;
var fs = {
    TextMapEntity: Py,
    TextMapSynced: ky,
    TextMapState: Vy
};
let $y = class {
    constructor(e) {
        this.key = e.key,
        this.elements = e.elements,
        this.limit = e.limit,
        this.meta = e.meta || {}
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `TextRing{
	elements: ${this.elements}
	meta:${JSON.stringify(this.meta)}
}`
    }
}
;
var us = {
    TextRing: $y
};
let My = class {
    constructor(e) {
        this.key = e.key,
        this.artifactId = e.artifactId,
        this.categoryId = e.categoryId,
        this.rootId = e.rootId,
        this.meta = e.meta || {}
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `ArtifactEntity${JSON.stringify(this)}
`
    }
}
;
var $u = {
    ArtifactEntity: My
};
let Gy = class {
    constructor(e) {
        this.key = e.key
    }
    whenReceived(e) {
        delete e.entities[this.key]
    }
    toString() {
        return `DropEntity{
	key:${this.key}
}`
    }
}
;
var Mu = {
    DropEntity: Gy
};
let Xy = class {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `Echo{message: ${this.message}
}`
    }
}
;
var jy = {
    Echo: Xy
};
let Fy = class {
    constructor(e) {
        this.key = e.key,
        this.from = e.from
    }
    whenReceived(e) {
        e.entities[this.key] && (e.entities[this.key].meta.locked = !0)
    }
    toString() {
        return `LockEntity{
	key:${this.key}
}`
    }
}
;
var qy = {
    LockEntity: Fy
};
let Hy = class {
    constructor() {}
    toString() {
        return "OK"
    }
}
;
var Gu = {
    OK: Hy
};
const {ArtifactEntity: Wy} = $u
  , {ClientWelcome: zy, ClientConnected: Jy, ClientDisconnected: Yy, ClientKicked: Qy, ClientSend: Zy} = Zi
  , {CountGroup: eg} = es
  , {DoodleEntity: tg, DoodleLine: rg, DoodleLineRemoved: ng} = ts
  , {StackEntity: ig, StackElement: sg, StackElements: ag} = Vu
  , {DropEntity: fg} = Mu
  , {Echo: ug} = jy
  , {LockEntity: og} = qy
  , {GCounter: lg} = rs
  , {GetAudienceReply: cg, RoomExit: pg, RoomLock: Eg} = _n
  , {Notification: hg} = Ou
  , {OK: xg} = Gu
  , {NumberEntity: _g} = ns
  , {ObjectEcho: Rg, ObjectEntity: bg} = is
  , {PNCounter: wa} = ss
  , {Reply: yg} = ku
  , {TextEcho: gg, TextEntity: mg} = as
  , {TextRing: Tg} = us
  , {createError: Na, ObservedError: Sg} = Du
  , {TextMapEntity: Lg, TextMapSynced: dg, TextMapState: vg} = fs;
function ui(t, e, r) {
    switch (t) {
    case "ok":
        return new xg;
    case "echo":
        return new ug({
            message: e.message
        });
    case "lock":
        return new og({
            key: e.key,
            from: e.from
        });
    case "error":
        return Na({
            code: e.code,
            message: e.msg
        });
    case "error/observed":
        return new Sg({
            to: e.to,
            opcode: e.opcode,
            error: Na({
                code: e.error.code,
                message: e.error.msg
            })
        });
    case "string":
        return e;
    case "text":
        return new mg({
            from: e.from,
            key: e.key,
            text: e.val,
            version: e.version,
            meta: r,
            acl: e.acl
        });
    case "text/echo":
        return new gg({
            message: e.message
        });
    case "object":
        return new bg({
            from: e.from,
            key: e.key,
            val: e.val,
            meta: r,
            acl: e.acl
        });
    case "object/echo":
        return new Rg({
            message: e.message
        });
    case "drop":
        return new fg({
            key: e.key
        });
    case "artifact":
        return new Wy({
            key: e.key,
            artifactId: e.artifactId,
            categoryId: e.categoryId,
            rootId: e.rootId,
            meta: r
        });
    case "client/connected":
        return new Jy({
            id: e.id,
            userId: e.userId,
            name: e.name,
            role: e.role,
            reconnect: e.reconnect
        });
    case "client/disconnected":
        return new Yy({
            id: e.id,
            role: e.role
        });
    case "client/kicked":
        return new Qy({
            id: e.id,
            banned: e.banned,
            reason: e.reason
        });
    case "client/send":
        return new Zy({
            to: e.to,
            from: e.from,
            body: e.body,
            userId: e.userID
        });
    case "client/welcome":
        {
            let i = new zy({
                id: e.id,
                name: e.name,
                secret: e.secret,
                reconnect: e.reconnect,
                here: e.here,
                profile: e.profile,
                replayEnd: e.replayEnd
            });
            if (e.entities) {
                let s = {};
                Object.entries(e.entities).forEach( ([a,f]) => {
                    s[a] = ui(f[0], f[1], f[2])
                }
                ),
                i.entities = s
            }
            return i
        }
    case "doodle":
        return new tg({
            key: e.key,
            from: e.from,
            colors: e.val.colors,
            lines: e.val.lines,
            live: e.val.live,
            maxLayer: e.val.maxLayer,
            maxPoints: e.val.maxPoints,
            size: e.val.size,
            weights: e.val.weights,
            meta: r,
            acl: e.acl
        });
    case "doodle/line":
        return new rg({
            key: e.key,
            from: e.from,
            line: e.val
        });
    case "doodle/line/removed":
        return new ng({
            key: e.key,
            from: e.from,
            index: e.index
        });
    case "stack":
        return new ig({
            key: e.key,
            size: e.size,
            from: e.from,
            version: e.version,
            meta: e.meta,
            acl: e.acl
        });
    case "stack/element":
        return new sg({
            key: e.key,
            val: e.val
        });
    case "stack/elements":
        return new ag({
            key: e.key,
            vals: e.vals
        });
    case "number":
        return new _g({
            key: e.key,
            val: e.val,
            restrictions: e.restrictions,
            from: e.from,
            version: e.version,
            meta: r,
            acl: e.acl
        });
    case "text-map":
        return new Lg({
            key: e.key,
            from: e.from,
            root: e.root,
            meta: r,
            acl: e.acl
        });
    case "text-map/state":
        return new vg({
            key: e.key,
            from: e.from,
            attributions: e.attributions,
            text: e.text
        });
    case "text-map/synced":
        return new dg({
            key: e.key,
            from: e.from,
            msg: e.msg
        });
    case "room/exit":
        return new pg({
            cause: e.cause
        });
    case "room/lock":
        return new Eg;
    case "room/get-audience":
        return new cg({
            connections: e.connections
        });
    case "audience":
        return new wa({
            key: t,
            count: e[1]
        });
    case "audience/count-group":
        return new eg({
            key: e.key,
            choices: e.choices,
            meta: r
        });
    case "audience/text-ring":
        return new Tg({
            key: e.key,
            elements: e.elements,
            meta: r
        });
    case "audience/g-counter":
        return new lg({
            key: e.key,
            count: e.count,
            meta: r
        });
    case "audience/pn-counter":
        return new wa({
            key: e.key,
            count: e.count,
            meta: r
        });
    default:
        return console.error(`failed to parse result of type ${t}: ${JSON.stringify(e, null, 2)}`),
        e
    }
}
function Ag(t) {
    let e = JSON.parse(t.data)
      , r = e.opcode || e.type;
    return e.re ? new yg({
        pc: e.pc,
        re: e.re,
        opcode: r,
        result: ui(r, e.result)
    }) : new hg({
        pc: e.pc,
        opcode: r,
        result: ui(r, e.result)
    })
}
var Cg = {
    parseResponseMessage: Ag
};
const Ia = vb
  , Bg = vu
  , Ug = Nb
  , {CallError: Kg} = Du
  , {ClientWelcome: wg} = Zi
  , {CountGroup: Ng} = es
  , {DoodleEntity: Ig} = ts
  , {GCounter: Dg} = rs
  , {Notification: Da} = Ou
  , {NumberEntity: Og} = ns
  , {ObjectEntity: qn} = is
  , {PNCounter: Pg} = ss
  , {Reply: kg} = ku
  , {Request: Vg} = Ky
  , {StackEntity: $g} = Vu
  , {TextEntity: Hn} = as
  , {TextMapEntity: Mg} = fs
  , {TextRing: Gg} = us
  , {parseResponseMessage: Xg} = Cg
  , jg = 1e3 + Math.floor(Math.random() * 500)
  , Oa = 13e3;
let Fg = class extends Ug {
    constructor(e) {
        if (super(),
        this.debug = e.debug || !1,
        !e.host)
            throw new Error("unable to create ecast WSClient: no host provided");
        if (this.host = e.host,
        !e.code)
            throw new Error("unable to create ecast WSClient: no room code provided");
        if (this.code = e.code,
        e.scheme ? this.scheme = e.scheme : this.scheme = "wss",
        e.secret && e.id)
            this.id = e.id,
            this.secret = e.secret;
        else {
            switch (e.role) {
            case "player":
                if (!e.name)
                    throw new Error("unable to create ecast WSClient: no name provided");
                break;
            case "host":
                if (!e.token)
                    throw new Error("unable to create ecast WSClient: tried to connect with host role but without host token");
                this.token = e.token;
                break;
            case "moderator":
                if (!e.password)
                    throw new Error("unable to create ecast WSClient: tried to connect with moderator role but without password");
                break
            }
            e.password && (this.password = e.password),
            e.twitchToken && (this.twitchToken = e.twitchToken)
        }
        this.name = e.name,
        this.role = e.role,
        this.deviceId = e.deviceId,
        this.userId = e.userId,
        this.conn = null,
        this.seq = 0,
        this.pending = {},
        this.entities = {},
        e.role == "host" && (this.replaySince = e.replaySince || 0,
        this.syncEntities = e.syncEntities || !1)
    }
    connect() {
        const e = {
            id: this.id,
            role: this.role,
            name: this.name,
            format: "json",
            "user-id": this.userId,
            password: this.password
        };
        this.deviceId && (e["device-id"] = this.deviceId),
        this.twitchToken && (e["twitch-token"] = this.twitchToken),
        this.secret && (e.secret = this.secret),
        this.role === "host" && (e["host-token"] = this.token,
        this.replaySince > 0 && (e["replay-since"] = this.replaySince),
        this.syncEntities && (e["sync-entities"] = this.syncEntities));
        const r = Bg.stringify(e)
          , i = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${r}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${r}`;
        return new Promise( (s, a) => {
            let f = !1
              , u = !1
              , o = p => {
                s(p),
                f = !0
            }
              , c = p => {
                a(p),
                f = !0
            }
            ;
            this.conn = new Ia(i,"ecast-v0"),
            this.conn.onmessage = p => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(p.data), null, 2)}`);
                const R = Xg(p);
                if (R instanceof kg)
                    this.onReply(R);
                else if (R instanceof Da) {
                    if (R.result instanceof wg)
                        u = !0,
                        this.id = R.result.id,
                        this.deviceId = R.result.deviceId,
                        this.entities = R.result.entities,
                        this.secret = R.result.secret,
                        R.result.name && (this.name = R.result.name),
                        o(R.result);
                    else if (!f) {
                        c(R.result);
                        return
                    }
                    this.onNotification(R)
                } else
                    console.error(`failed to parse response messsage: ${R}`)
            }
            ,
            this.conn.onerror = p => {
                f ? this.emit("socketError", p) : c(p)
            }
            ,
            this.conn.onclose = p => {
                this.debugLog("onclose", p.code),
                u && p.code === 1006 ? this.reconnect() : this.emit("socketClose", p)
            }
            ,
            this.conn.onopen = p => {
                this.emit("socketOpen", p)
            }
        }
        )
    }
    sleep(e) {
        return new Promise(r => setTimeout(r, e))
    }
    debugLog(...e) {
        this.debug && console.log(`%c[WSClient:${this.name}]`, "background-color:blue;color:white;", ...e)
    }
    async reconnect() {
        this.disconnect(),
        this.debugLog("Attempting to reconnect");
        let e = 1
          , r = jg;
        for (; ; )
            try {
                this.emit("connection", {
                    status: "connecting",
                    attempt: e
                }),
                await this.connect(),
                this.debugLog("reconnected"),
                this.emit("connection", {
                    status: "connected"
                });
                return
            } catch (i) {
                if (this.debugLog("reconnect error", i),
                i.code === 1005 || i.code === 1e3) {
                    this.debugLog("unable to reconnect!", i),
                    this.emit("socketClose", i);
                    return
                }
                if (r >= Oa) {
                    this.debugLog("reconnect failed!", i),
                    this.emit("socketClose", i);
                    return
                }
                e += 1,
                this.debugLog("waiting", r),
                this.emit("connection", {
                    status: "waiting",
                    attempt: e
                }),
                await this.sleep(r),
                r = Math.min(Oa, r * 2)
            }
    }
    disconnect() {
        this.conn && (this.conn.close(),
        this.conn.onmessage = null,
        this.conn.onerror = null,
        this.conn.onopen = null,
        this.conn.onclose = null,
        this.conn = null)
    }
    onReply(e) {
        const r = e.re
          , i = this.pending[r];
        if (!i) {
            const s = new Da(e);
            s.re = r,
            this.emit("notification", s);
            return
        }
        delete this.pending[r],
        e.result instanceof Kg ? i.reject(e.result) : i.resolve(e.result)
    }
    onNotification(e) {
        typeof e.result.whenReceived == "function" && e.result.whenReceived(this),
        this.emit("notification", e),
        this.emit(e.opcode, e.result)
    }
    send(e, r={}) {
        if (!this.conn)
            throw new Error("No connection available");
        if (this.conn.readyState !== Ia.OPEN)
            throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
        const i = ++this.seq
          , s = new Vg({
            seq: i,
            opcode: e,
            params: r
        })
          , a = new Promise( (u, o) => {
            this.pending[i] = {
                resolve: u,
                reject: o,
                request: s
            }
        }
        )
          , f = JSON.stringify(s);
        return this.debugLog(`send -> ${f}`),
        this.conn.send(f),
        a
    }
    lockRoom() {
        return this.send("room/lock")
    }
    startAudience() {
        return this.send("room/start-audience")
    }
    getAudience() {
        return this.send("room/get-audience")
    }
    mail(e, r) {
        return this.send("client/send", {
            from: this.id,
            to: e,
            body: r
        })
    }
    kick(e, r=!1, i) {
        return this.send("client/kick", {
            id: e,
            ban: r,
            reason: i
        })
    }
    async drop(e) {
        const r = await this.send("drop", {
            key: e
        });
        return delete this.entities[e],
        r
    }
    echo(e) {
        return this.send("echo", {
            message: e
        })
    }
    async lock(e) {
        const r = await this.send("lock", {
            key: e
        });
        return this.entities[e].meta.locked = !0,
        r
    }
    async createNumber(e, r={}) {
        let i = {
            key: e
        };
        const {val: s=0, acl: a, min: f, max: u, increment: o, type: c} = r;
        i.val = s,
        a && (i.acl = a),
        f != null && (i.min = f),
        u != null && (i.max = u),
        o && (i.increment = o),
        c && (i.type = c);
        const p = await this.send("number/create", i);
        return this.entities[e] = new Og({
            key: e,
            val: s,
            restrictions: {
                min: f,
                max: u,
                increment: o,
                type: c
            },
            meta: {
                locked: !1
            }
        }),
        p
    }
    async decrementNumber(e) {
        const r = await this.send("number/decrement", {
            key: e
        });
        return this.entities[e].val = r.val,
        r
    }
    async getNumber(e) {
        const r = await this.send("number/get", {
            key: e
        });
        return this.entities[e] ? (this.entities[e].val = r.val,
        this.entities[e].restrictions = r.restrictions) : this.entities[e] = r,
        r
    }
    async incrementNumber(e) {
        const r = await this.send("number/increment", {
            key: e
        });
        return this.entities[e].val = r.val,
        r
    }
    async updateNumber(e, r) {
        const i = await this.send("number/update", {
            key: e,
            val: r
        });
        return this.entities[e].val = r,
        i
    }
    async createObject(e, r, i) {
        const s = {
            key: e,
            val: r
        };
        i && (s.acl = i);
        const a = await this.send("object/create", s);
        return this.entities[e] = new qn({
            key: e,
            val: r,
            meta: {
                locked: !1
            }
        }),
        a
    }
    echoObject(e) {
        return this.send("object/echo", {
            message: e
        })
    }
    async getObject(e) {
        const r = await this.send("object/get", {
            key: e
        });
        return this.entities[e] ? (this.entities[e].val = r.val,
        this.entities[e].version = r.version,
        this.entities[e].from = r.from) : this.entities[e] = r,
        r
    }
    async setObject(e, r, i) {
        const s = {
            key: e,
            val: r
        };
        i && (s.acl = i);
        const a = await this.send("object/set", s);
        return this.entities[e] = new qn({
            key: e,
            val: r,
            meta: {
                locked: !1
            }
        }),
        a
    }
    async updateObject(e, r) {
        const i = await this.send("object/update", {
            key: e,
            val: r
        });
        return this.entities[e] = new qn({
            key: e,
            val: r,
            meta: {
                locked: !1
            }
        }),
        i
    }
    echoText(e) {
        return this.send("text/echo", {
            message: e
        })
    }
    getText(e) {
        return this.send("text/get", {
            key: e
        })
    }
    async createText(e, r, i) {
        const s = {
            key: e,
            val: r
        }
          , {acl: a, accept: f, reject: u} = i;
        a && (s.acl = a),
        f && (s.accept = f),
        u && (s.reject = u);
        const o = await this.send("text/create", s);
        return this.entities[e] = new Hn({
            key: e,
            text: r,
            meta: {
                locked: !1
            }
        }),
        o
    }
    async setText(e, r, i) {
        const s = {
            key: e,
            val: r
        };
        i && (s.acl = i);
        const a = await this.send("text/set", s);
        return this.entities[e] = new Hn({
            key: e,
            text: r,
            meta: {
                locked: !1
            }
        }),
        a
    }
    async updateText(e, r) {
        const i = await this.send("text/update", {
            key: e,
            val: r
        });
        return this.entities[e] = new Hn({
            key: e,
            text: r,
            meta: {
                locked: !1
            }
        }),
        i
    }
    async createTextMap(e, r={}) {
        const {val: i, notifyHost: s, acl: a, accept: f, reject: u} = r;
        let o = {
            key: e
        };
        i && (o.val = r.val),
        s && (o.notifyHost = r.notifyHost),
        a && (o.acl = a),
        f && (o.accept = f),
        u && (o.reject = u);
        const c = await this.send("text-map/create", o);
        return this.entities[e] = new Mg({
            key: e,
            acl: a,
            meta: {
                locked: !1
            }
        }),
        c
    }
    async syncTextMap(e, r) {
        return await this.send("text-map/sync", {
            key: e,
            msg: r
        })
    }
    async getTextMap(e, r) {
        const {includeNodes: i} = r;
        return await this.send("text-map/get", {
            key: e,
            includeNodes: i
        })
    }
    async createDoodle(e, r) {
        let i = {
            key: e
        };
        const {acl: s, colors: a, live: f, maxLayer: u, maxPoints: o, size: c, weights: p} = r;
        s && (i.acl = s),
        a && (i.colors = a),
        i.live = f,
        u != null && (i.maxLayer = u),
        o != null && (i.maxPoints = o),
        c && (i.size = c),
        p && (i.weights = p);
        const R = await this.send("doodle/create", i);
        return this.entities[e] = new Ig({
            key: e,
            colors: a,
            lines: [],
            live: f,
            maxLayer: i.maxLayer || 0,
            maxPoints: i.maxPoints || 0,
            size: c,
            weights: p,
            meta: {
                locked: !1
            }
        }),
        R
    }
    async getDoodle(e) {
        const r = await this.send("doodle/get", {
            key: e
        });
        return this.entities[e] ? this.entities[e].lines = r.lines : this.entities[e] = r,
        r
    }
    async strokeDoodle(e, r) {
        const {color: i, weight: s, layer: a, points: f, brush: u} = r
          , o = {
            color: i,
            weight: s,
            layer: a,
            points: f
        };
        u && (o.brush = u);
        const c = await this.send("doodle/stroke", {
            key: e,
            ...o
        });
        return this.entities[e].lines.push(o),
        c
    }
    async undoDoodle(e) {
        const r = await this.send("doodle/undo", {
            key: e
        });
        return this.entities[e].lines.pop(),
        r
    }
    async createStack(e, r) {
        const i = {
            key: e
        };
        r && (i.acl = r);
        const s = await this.send("stack/create", i);
        return this.entities[e] = new $g({
            key: e,
            size: 0,
            meta: {
                locked: !1
            }
        }),
        s
    }
    pushStack(e, r) {
        return this.send("stack/push", {
            key: e,
            val: r
        })
    }
    bulkPushStack(e, r) {
        return this.send("stack/bulkpush", {
            key: e,
            vals: r
        })
    }
    peekStack(e, r) {
        return this.send("stack/peek", {
            key: e,
            size: r
        })
    }
    popStack(e) {
        return this.send("stack/pop", {
            key: e
        })
    }
    async createCountGroup(e, r) {
        const i = await this.send("audience/count-group/create", {
            name: e,
            options: r
        });
        return this.entities[e] = new Ng({
            key: e,
            choices: r,
            meta: {
                locked: !1
            }
        }),
        i
    }
    incrementCountGroupCounter(e, r, i=1) {
        return this.send("audience/count-group/increment", {
            name: e,
            vote: r,
            times: i
        })
    }
    getCountGroup(e) {
        return this.send("audience/count-group/get", {
            name: e
        })
    }
    async createGCounter(e, r) {
        const i = await this.send("audience/g-counter/create", {
            key: e,
            count: r
        });
        return this.entities[e] = new Dg({
            key: e,
            count: r,
            meta: {
                locked: !1
            }
        }),
        i
    }
    incrementGCounter(e, r) {
        return this.send("audience/g-counter/increment", {
            key: e,
            times: r
        })
    }
    getGCounter(e) {
        return this.send("audience/g-counter/get", {
            key: e
        })
    }
    async createPNCounter(e, r) {
        const i = await this.send("audience/pn-counter/create", {
            key: e,
            count: r
        });
        return this.entities[e] = new Pg({
            key: e,
            count: r,
            meta: {
                locked: !1
            }
        }),
        i
    }
    incrementPNCounter(e, r) {
        return this.send("audience/pn-counter/increment", {
            key: e,
            times: r
        })
    }
    decrementPNCounter(e, r) {
        return this.send("audience/pn-counter/decrement", {
            key: e,
            times: r
        })
    }
    getPNCounter(e) {
        return this.send("audience/pn-counter/get", {
            key: e
        })
    }
    async createTextRing(e, r) {
        const i = {
            key: e
        }
          , {limit: s, accept: a, reject: f} = r;
        s && (i.limit = s),
        a && (i.accept = a),
        f && (i.reject = f);
        const u = await this.send("audience/text-ring/create", i);
        return this.entities[e] = new Gg({
            key: e,
            elements: [],
            limit: s,
            meta: {
                locked: !1
            }
        }),
        u
    }
    getTextRing(e) {
        return this.send("audience/text-ring/get", {
            name: e
        })
    }
    pushTextRing(e, r) {
        return this.send("audience/text-ring/push", {
            name: e,
            text: r
        })
    }
}
;
var qg = {
    WSClient: Fg
};
const {APIClient: Pd} = db
  , {WSClient: kd} = qg
  , {CreateRoomReply: Vd, GetRoomReply: $d} = _n
  , {ClientWelcome: Md, ClientDisconnected: Gd} = Zi
  , {ArtifactEntity: Xd} = $u
  , {GCounter: jd} = rs
  , {NumberEntity: Fd} = ns
  , {TextEntity: qd} = as
  , {DoodleEntity: Hd} = ts
  , {ObjectEntity: Wd} = is
  , {CountGroup: zd} = es
  , {DropEntity: Jd} = Mu
  , {OK: Yd} = Gu
  , {RoomExit: Qd} = _n
  , {TextRing: Zd} = us
  , {TextMapEntity: ev} = fs
  , {PNCounter: tv} = ss;
function Hg(...t) {
    console.log(...t)
}
function Wg(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Pa = {
    exports: {}
};
(function(t, e) {
    (function(r, i) {
        i(e)
    }
    )(pe, function(r) {
        var i = typeof window < "u" ? window : typeof pe < "u" ? pe : typeof self < "u" ? self : {}, s = function(h, y) {
            if (y = y.split(":")[0],
            h = +h,
            !h)
                return !1;
            switch (y) {
            case "http":
            case "ws":
                return h !== 80;
            case "https":
            case "wss":
                return h !== 443;
            case "ftp":
                return h !== 21;
            case "gopher":
                return h !== 70;
            case "file":
                return !1
            }
            return h !== 0
        }, a = Object.prototype.hasOwnProperty, f;
        function u(_) {
            try {
                return decodeURIComponent(_.replace(/\+/g, " "))
            } catch {
                return null
            }
        }
        function o(_) {
            try {
                return encodeURIComponent(_)
            } catch {
                return null
            }
        }
        function c(_) {
            for (var h = /([^=?#&]+)=?([^&]*)/g, y = {}, E; E = h.exec(_); ) {
                var b = u(E[1])
                  , L = u(E[2]);
                b === null || L === null || b in y || (y[b] = L)
            }
            return y
        }
        function p(_, h) {
            h = h || "";
            var y = [], E, b;
            typeof h != "string" && (h = "?");
            for (b in _)
                if (a.call(_, b)) {
                    if (E = _[b],
                    !E && (E === null || E === f || isNaN(E)) && (E = ""),
                    b = o(b),
                    E = o(E),
                    b === null || E === null)
                        continue;
                    y.push(b + "=" + E)
                }
            return y.length ? h + y.join("&") : ""
        }
        var R = p
          , x = c
          , g = {
            stringify: R,
            parse: x
        }
          , m = /[\n\r\t]/g
          , C = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
          , B = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i
          , P = /^[a-zA-Z]:/
          , k = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;
        function K(_) {
            return (_ || "").toString().replace(k, "")
        }
        var ue = [["#", "hash"], ["?", "query"], function(h, y) {
            return Q(y.protocol) ? h.replace(/\\/g, "/") : h
        }
        , ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]]
          , se = {
            hash: 1,
            query: 1
        };
        function de(_) {
            var h;
            typeof window < "u" ? h = window : typeof i < "u" ? h = i : typeof self < "u" ? h = self : h = {};
            var y = h.location || {};
            _ = _ || y;
            var E = {}, b = typeof _, L;
            if (_.protocol === "blob:")
                E = new fe(unescape(_.pathname),{});
            else if (b === "string") {
                E = new fe(_,{});
                for (L in se)
                    delete E[L]
            } else if (b === "object") {
                for (L in _)
                    L in se || (E[L] = _[L]);
                E.slashes === void 0 && (E.slashes = C.test(_.href))
            }
            return E
        }
        function Q(_) {
            return _ === "file:" || _ === "ftp:" || _ === "http:" || _ === "https:" || _ === "ws:" || _ === "wss:"
        }
        function he(_, h) {
            _ = K(_),
            _ = _.replace(m, ""),
            h = h || {};
            var y = B.exec(_), E = y[1] ? y[1].toLowerCase() : "", b = !!y[2], L = !!y[3], v = 0, A;
            return b ? L ? (A = y[2] + y[3] + y[4],
            v = y[2].length + y[3].length) : (A = y[2] + y[4],
            v = y[2].length) : L ? (A = y[3] + y[4],
            v = y[3].length) : A = y[4],
            E === "file:" ? v >= 2 && (A = A.slice(2)) : Q(E) ? A = y[4] : E ? b && (A = A.slice(2)) : v >= 2 && Q(h.protocol) && (A = y[4]),
            {
                protocol: E,
                slashes: b || Q(E),
                slashesCount: v,
                rest: A
            }
        }
        function X(_, h) {
            if (_ === "")
                return h;
            for (var y = (h || "/").split("/").slice(0, -1).concat(_.split("/")), E = y.length, b = y[E - 1], L = !1, v = 0; E--; )
                y[E] === "." ? y.splice(E, 1) : y[E] === ".." ? (y.splice(E, 1),
                v++) : v && (E === 0 && (L = !0),
                y.splice(E, 1),
                v--);
            return L && y.unshift(""),
            (b === "." || b === "..") && y.push(""),
            y.join("/")
        }
        function fe(_, h, y) {
            if (_ = K(_),
            _ = _.replace(m, ""),
            !(this instanceof fe))
                return new fe(_,h,y);
            var E, b, L, v, A, w, re = ue.slice(), be = typeof h, U = this, Bn = 0;
            for (be !== "object" && be !== "string" && (y = h,
            h = null),
            y && typeof y != "function" && (y = g.parse),
            h = de(h),
            b = he(_ || "", h),
            E = !b.protocol && !b.slashes,
            U.slashes = b.slashes || E && h.slashes,
            U.protocol = b.protocol || h.protocol || "",
            _ = b.rest,
            (b.protocol === "file:" && (b.slashesCount !== 2 || P.test(_)) || !b.slashes && (b.protocol || b.slashesCount < 2 || !Q(U.protocol))) && (re[3] = [/(.*)/, "pathname"]); Bn < re.length; Bn++) {
                if (v = re[Bn],
                typeof v == "function") {
                    _ = v(_, U);
                    continue
                }
                L = v[0],
                w = v[1],
                L !== L ? U[w] = _ : typeof L == "string" ? (A = L === "@" ? _.lastIndexOf(L) : _.indexOf(L),
                ~A && (typeof v[2] == "number" ? (U[w] = _.slice(0, A),
                _ = _.slice(A + v[2])) : (U[w] = _.slice(A),
                _ = _.slice(0, A)))) : (A = L.exec(_)) && (U[w] = A[1],
                _ = _.slice(0, A.index)),
                U[w] = U[w] || E && v[3] && h[w] || "",
                v[4] && (U[w] = U[w].toLowerCase())
            }
            y && (U.query = y(U.query)),
            E && h.slashes && U.pathname.charAt(0) !== "/" && (U.pathname !== "" || h.pathname !== "") && (U.pathname = X(U.pathname, h.pathname)),
            U.pathname.charAt(0) !== "/" && Q(U.protocol) && (U.pathname = "/" + U.pathname),
            s(U.port, U.protocol) || (U.host = U.hostname,
            U.port = ""),
            U.username = U.password = "",
            U.auth && (A = U.auth.indexOf(":"),
            ~A ? (U.username = U.auth.slice(0, A),
            U.username = encodeURIComponent(decodeURIComponent(U.username)),
            U.password = U.auth.slice(A + 1),
            U.password = encodeURIComponent(decodeURIComponent(U.password))) : U.username = encodeURIComponent(decodeURIComponent(U.auth)),
            U.auth = U.password ? U.username + ":" + U.password : U.username),
            U.origin = U.protocol !== "file:" && Q(U.protocol) && U.host ? U.protocol + "//" + U.host : "null",
            U.href = U.toString()
        }
        function Qe(_, h, y) {
            var E = this;
            switch (_) {
            case "query":
                typeof h == "string" && h.length && (h = (y || g.parse)(h)),
                E[_] = h;
                break;
            case "port":
                E[_] = h,
                s(h, E.protocol) ? h && (E.host = E.hostname + ":" + h) : (E.host = E.hostname,
                E[_] = "");
                break;
            case "hostname":
                E[_] = h,
                E.port && (h += ":" + E.port),
                E.host = h;
                break;
            case "host":
                E[_] = h,
                /:\d+$/.test(h) ? (h = h.split(":"),
                E.port = h.pop(),
                E.hostname = h.join(":")) : (E.hostname = h,
                E.port = "");
                break;
            case "protocol":
                E.protocol = h.toLowerCase(),
                E.slashes = !y;
                break;
            case "pathname":
            case "hash":
                if (h) {
                    var b = _ === "pathname" ? "/" : "#";
                    E[_] = h.charAt(0) !== b ? b + h : h
                } else
                    E[_] = h;
                break;
            case "username":
            case "password":
                E[_] = encodeURIComponent(h);
                break;
            case "auth":
                var L = h.indexOf(":");
                ~L ? (E.username = h.slice(0, L),
                E.username = encodeURIComponent(decodeURIComponent(E.username)),
                E.password = h.slice(L + 1),
                E.password = encodeURIComponent(decodeURIComponent(E.password))) : E.username = encodeURIComponent(decodeURIComponent(h))
            }
            for (var v = 0; v < ue.length; v++) {
                var A = ue[v];
                A[4] && (E[A[1]] = E[A[1]].toLowerCase())
            }
            return E.auth = E.password ? E.username + ":" + E.password : E.username,
            E.origin = E.protocol !== "file:" && Q(E.protocol) && E.host ? E.protocol + "//" + E.host : "null",
            E.href = E.toString(),
            E
        }
        function oe(_) {
            (!_ || typeof _ != "function") && (_ = g.stringify);
            var h, y = this, E = y.host, b = y.protocol;
            b && b.charAt(b.length - 1) !== ":" && (b += ":");
            var L = b + (y.protocol && y.slashes || Q(y.protocol) ? "//" : "");
            return y.username ? (L += y.username,
            y.password && (L += ":" + y.password),
            L += "@") : y.password ? (L += ":" + y.password,
            L += "@") : y.protocol !== "file:" && Q(y.protocol) && !E && y.pathname !== "/" && (L += "@"),
            E[E.length - 1] === ":" && (E += ":"),
            L += E + y.pathname,
            h = typeof y.query == "object" ? _(y.query) : y.query,
            h && (L += h.charAt(0) !== "?" ? "?" + h : h),
            y.hash && (L += y.hash),
            L
        }
        fe.prototype = {
            set: Qe,
            toString: oe
        },
        fe.extractProtocol = he,
        fe.location = de,
        fe.trimLeft = K,
        fe.qs = g;
        var Re = fe;
        function xe(_, h) {
            setTimeout(function(y) {
                return _.call(y)
            }, 4, h)
        }
        function T(_, h) {
            typeof process < "u" && console[_].call(null, h)
        }
        function d(_, h) {
            _ === void 0 && (_ = []);
            var y = [];
            return _.forEach(function(E) {
                h(E) || y.push(E)
            }),
            y
        }
        function I(_, h) {
            _ === void 0 && (_ = []);
            var y = [];
            return _.forEach(function(E) {
                h(E) && y.push(E)
            }),
            y
        }
        var j = function() {
            this.listeners = {}
        };
        j.prototype.addEventListener = function(h, y) {
            typeof y == "function" && (Array.isArray(this.listeners[h]) || (this.listeners[h] = []),
            I(this.listeners[h], function(E) {
                return E === y
            }).length === 0 && this.listeners[h].push(y))
        }
        ,
        j.prototype.removeEventListener = function(h, y) {
            var E = this.listeners[h];
            this.listeners[h] = d(E, function(b) {
                return b === y
            })
        }
        ,
        j.prototype.dispatchEvent = function(h) {
            for (var y = this, E = [], b = arguments.length - 1; b-- > 0; )
                E[b] = arguments[b + 1];
            var L = h.type
              , v = this.listeners[L];
            return Array.isArray(v) ? (v.forEach(function(A) {
                E.length > 0 ? A.apply(y, E) : A.call(y, h)
            }),
            !0) : !1
        }
        ;
        function F(_) {
            var h = _.indexOf("?");
            return h >= 0 ? _.slice(0, h) : _
        }
        var D = function() {
            this.urlMap = {}
        };
        D.prototype.attachWebSocket = function(h, y) {
            var E = F(y)
              , b = this.urlMap[E];
            if (b && b.server && b.websockets.indexOf(h) === -1)
                return b.websockets.push(h),
                b.server
        }
        ,
        D.prototype.addMembershipToRoom = function(h, y) {
            var E = this.urlMap[F(h.url)];
            E && E.server && E.websockets.indexOf(h) !== -1 && (E.roomMemberships[y] || (E.roomMemberships[y] = []),
            E.roomMemberships[y].push(h))
        }
        ,
        D.prototype.attachServer = function(h, y) {
            var E = F(y)
              , b = this.urlMap[E];
            if (!b)
                return this.urlMap[E] = {
                    server: h,
                    websockets: [],
                    roomMemberships: {}
                },
                h
        }
        ,
        D.prototype.serverLookup = function(h) {
            var y = F(h)
              , E = this.urlMap[y];
            if (E)
                return E.server
        }
        ,
        D.prototype.websocketsLookup = function(h, y, E) {
            var b = F(h), L, v = this.urlMap[b];
            if (L = v ? v.websockets : [],
            y) {
                var A = v.roomMemberships[y];
                L = A || []
            }
            return E ? L.filter(function(w) {
                return w !== E
            }) : L
        }
        ,
        D.prototype.removeServer = function(h) {
            delete this.urlMap[F(h)]
        }
        ,
        D.prototype.removeWebSocket = function(h, y) {
            var E = F(y)
              , b = this.urlMap[E];
            b && (b.websockets = d(b.websockets, function(L) {
                return L === h
            }))
        }
        ,
        D.prototype.removeMembershipFromRoom = function(h, y) {
            var E = this.urlMap[F(h.url)]
              , b = E.roomMemberships[y];
            E && b !== null && (E.roomMemberships[y] = d(b, function(L) {
                return L === h
            }))
        }
        ;
        var W = new D
          , Le = {
            CLOSE_NORMAL: 1e3,
            CLOSE_NO_STATUS: 1005,
            CLOSE_ABNORMAL: 1006
        }
          , Z = {
            CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
            CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
            EVENT: {
                MESSAGE: "Failed to construct 'MessageEvent':",
                CLOSE: "Failed to construct 'CloseEvent':"
            }
        }
          , we = function() {};
        we.prototype.stopPropagation = function() {}
        ,
        we.prototype.stopImmediatePropagation = function() {}
        ,
        we.prototype.initEvent = function(h, y, E) {
            h === void 0 && (h = "undefined"),
            y === void 0 && (y = !1),
            E === void 0 && (E = !1),
            this.type = "" + h,
            this.bubbles = !!y,
            this.cancelable = !!E
        }
        ;
        var So = function(_) {
            function h(y, E) {
                if (E === void 0 && (E = {}),
                _.call(this),
                !y)
                    throw new TypeError(Z.EVENT_ERROR + " 1 argument required, but only 0 present.");
                if (typeof E != "object")
                    throw new TypeError(Z.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                var b = E.bubbles
                  , L = E.cancelable;
                this.type = "" + y,
                this.timeStamp = Date.now(),
                this.target = null,
                this.srcElement = null,
                this.returnValue = !0,
                this.isTrusted = !1,
                this.eventPhase = 0,
                this.defaultPrevented = !1,
                this.currentTarget = null,
                this.cancelable = L ? !!L : !1,
                this.cancelBubble = !1,
                this.bubbles = b ? !!b : !1
            }
            return _ && (h.__proto__ = _),
            h.prototype = Object.create(_ && _.prototype),
            h.prototype.constructor = h,
            h
        }(we)
          , Lo = function(_) {
            function h(y, E) {
                if (E === void 0 && (E = {}),
                _.call(this),
                !y)
                    throw new TypeError(Z.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                if (typeof E != "object")
                    throw new TypeError(Z.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                var b = E.bubbles
                  , L = E.cancelable
                  , v = E.data
                  , A = E.origin
                  , w = E.lastEventId
                  , re = E.ports;
                this.type = "" + y,
                this.timeStamp = Date.now(),
                this.target = null,
                this.srcElement = null,
                this.returnValue = !0,
                this.isTrusted = !1,
                this.eventPhase = 0,
                this.defaultPrevented = !1,
                this.currentTarget = null,
                this.cancelable = L ? !!L : !1,
                this.canncelBubble = !1,
                this.bubbles = b ? !!b : !1,
                this.origin = "" + A,
                this.ports = typeof re > "u" ? null : re,
                this.data = typeof v > "u" ? null : v,
                this.lastEventId = "" + (w || "")
            }
            return _ && (h.__proto__ = _),
            h.prototype = Object.create(_ && _.prototype),
            h.prototype.constructor = h,
            h
        }(we)
          , vo = function(_) {
            function h(y, E) {
                if (E === void 0 && (E = {}),
                _.call(this),
                !y)
                    throw new TypeError(Z.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                if (typeof E != "object")
                    throw new TypeError(Z.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                var b = E.bubbles
                  , L = E.cancelable
                  , v = E.code
                  , A = E.reason
                  , w = E.wasClean;
                this.type = "" + y,
                this.timeStamp = Date.now(),
                this.target = null,
                this.srcElement = null,
                this.returnValue = !0,
                this.isTrusted = !1,
                this.eventPhase = 0,
                this.defaultPrevented = !1,
                this.currentTarget = null,
                this.cancelable = L ? !!L : !1,
                this.cancelBubble = !1,
                this.bubbles = b ? !!b : !1,
                this.code = typeof v == "number" ? parseInt(v, 10) : 0,
                this.reason = "" + (A || ""),
                this.wasClean = w ? !!w : !1
            }
            return _ && (h.__proto__ = _),
            h.prototype = Object.create(_ && _.prototype),
            h.prototype.constructor = h,
            h
        }(we);
        function Ae(_) {
            var h = _.type
              , y = _.target
              , E = new So(h);
            return y && (E.target = y,
            E.srcElement = y,
            E.currentTarget = y),
            E
        }
        function ir(_) {
            var h = _.type
              , y = _.origin
              , E = _.data
              , b = _.target
              , L = new Lo(h,{
                data: E,
                origin: y
            });
            return b && (L.target = b,
            L.srcElement = b,
            L.currentTarget = b),
            L
        }
        function Ne(_) {
            var h = _.code
              , y = _.reason
              , E = _.type
              , b = _.target
              , L = _.wasClean;
            L || (L = h === Le.CLOSE_NORMAL || h === Le.CLOSE_NO_STATUS);
            var v = new vo(E,{
                code: h,
                reason: y,
                wasClean: L
            });
            return b && (v.target = b,
            v.srcElement = b,
            v.currentTarget = b),
            v
        }
        function vs(_, h, y) {
            _.readyState = le.CLOSING;
            var E = W.serverLookup(_.url)
              , b = Ne({
                type: "close",
                target: _.target,
                code: h,
                reason: y
            });
            xe(function() {
                W.removeWebSocket(_, _.url),
                _.readyState = le.CLOSED,
                _.dispatchEvent(b),
                E && E.dispatchEvent(b, E)
            }, _)
        }
        function Ao(_, h, y) {
            _.readyState = le.CLOSING;
            var E = W.serverLookup(_.url)
              , b = Ne({
                type: "close",
                target: _.target,
                code: h,
                reason: y,
                wasClean: !1
            })
              , L = Ae({
                type: "error",
                target: _.target
            });
            xe(function() {
                W.removeWebSocket(_, _.url),
                _.readyState = le.CLOSED,
                _.dispatchEvent(L),
                _.dispatchEvent(b),
                E && E.dispatchEvent(b, E)
            }, _)
        }
        function dr(_) {
            return Object.prototype.toString.call(_) !== "[object Blob]" && !(_ instanceof ArrayBuffer) && (_ = String(_)),
            _
        }
        var vn = new WeakMap;
        function As(_) {
            if (vn.has(_))
                return vn.get(_);
            var h = new Proxy(_,{
                get: function(E, b) {
                    if (b === "close")
                        return function(A) {
                            A === void 0 && (A = {});
                            var w = A.code || Le.CLOSE_NORMAL
                              , re = A.reason || "";
                            vs(h, w, re)
                        }
                        ;
                    if (b === "send")
                        return function(A) {
                            A = dr(A),
                            _.dispatchEvent(ir({
                                type: "message",
                                data: A,
                                origin: this.url,
                                target: _
                            }))
                        }
                        ;
                    var L = function(v) {
                        return v === "message" ? "server::" + v : v
                    };
                    return b === "on" ? function(A, w) {
                        _.addEventListener(L(A), w)
                    }
                    : b === "off" ? function(A, w) {
                        _.removeEventListener(L(A), w)
                    }
                    : b === "target" ? _ : E[b]
                }
            });
            return vn.set(_, h),
            h
        }
        function Co(_) {
            var h = encodeURIComponent(_).match(/%[89ABab]/g);
            return _.length + (h ? h.length : 0)
        }
        function Bo(_) {
            var h = new Re(_)
              , y = h.pathname
              , E = h.protocol
              , b = h.hash;
            if (!_)
                throw new TypeError(Z.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (y || (h.pathname = "/"),
            E === "")
                throw new SyntaxError(Z.CONSTRUCTOR_ERROR + " The URL '" + h.toString() + "' is invalid.");
            if (E !== "ws:" && E !== "wss:")
                throw new SyntaxError(Z.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + E + "' is not allowed.");
            if (b !== "")
                throw new SyntaxError(Z.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + b + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return h.toString()
        }
        function Uo(_) {
            if (_ === void 0 && (_ = []),
            !Array.isArray(_) && typeof _ != "string")
                throw new SyntaxError(Z.CONSTRUCTOR_ERROR + " The subprotocol '" + _.toString() + "' is invalid.");
            typeof _ == "string" && (_ = [_]);
            var h = _.map(function(E) {
                return {
                    count: 1,
                    protocol: E
                }
            }).reduce(function(E, b) {
                return E[b.protocol] = (E[b.protocol] || 0) + b.count,
                E
            }, {})
              , y = Object.keys(h).filter(function(E) {
                return h[E] > 1
            });
            if (y.length > 0)
                throw new SyntaxError(Z.CONSTRUCTOR_ERROR + " The subprotocol '" + y[0] + "' is duplicated.");
            return _
        }
        var le = function(_) {
            function h(E, b) {
                _.call(this),
                this._onopen = null,
                this._onmessage = null,
                this._onerror = null,
                this._onclose = null,
                this.url = Bo(E),
                b = Uo(b),
                this.protocol = b[0] || "",
                this.binaryType = "blob",
                this.readyState = h.CONNECTING;
                var L = As(this)
                  , v = W.attachWebSocket(L, this.url);
                xe(function() {
                    if (this.readyState === h.CONNECTING)
                        if (v)
                            if (v.options.verifyClient && typeof v.options.verifyClient == "function" && !v.options.verifyClient())
                                this.readyState = h.CLOSED,
                                T("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"),
                                W.removeWebSocket(L, this.url),
                                this.dispatchEvent(Ae({
                                    type: "error",
                                    target: this
                                })),
                                this.dispatchEvent(Ne({
                                    type: "close",
                                    target: this,
                                    code: Le.CLOSE_NORMAL
                                }));
                            else {
                                if (v.options.selectProtocol && typeof v.options.selectProtocol == "function") {
                                    var w = v.options.selectProtocol(b)
                                      , re = w !== ""
                                      , be = b.indexOf(w) !== -1;
                                    if (re && !be) {
                                        this.readyState = h.CLOSED,
                                        T("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"),
                                        W.removeWebSocket(L, this.url),
                                        this.dispatchEvent(Ae({
                                            type: "error",
                                            target: this
                                        })),
                                        this.dispatchEvent(Ne({
                                            type: "close",
                                            target: this,
                                            code: Le.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = w
                                }
                                this.readyState = h.OPEN,
                                this.dispatchEvent(Ae({
                                    type: "open",
                                    target: this
                                })),
                                v.dispatchEvent(Ae({
                                    type: "connection"
                                }), L)
                            }
                        else
                            this.readyState = h.CLOSED,
                            this.dispatchEvent(Ae({
                                type: "error",
                                target: this
                            })),
                            this.dispatchEvent(Ne({
                                type: "close",
                                target: this,
                                code: Le.CLOSE_NORMAL
                            })),
                            T("error", "WebSocket connection to '" + this.url + "' failed")
                }, this)
            }
            _ && (h.__proto__ = _),
            h.prototype = Object.create(_ && _.prototype),
            h.prototype.constructor = h;
            var y = {
                onopen: {},
                onmessage: {},
                onclose: {},
                onerror: {}
            };
            return y.onopen.get = function() {
                return this._onopen
            }
            ,
            y.onmessage.get = function() {
                return this._onmessage
            }
            ,
            y.onclose.get = function() {
                return this._onclose
            }
            ,
            y.onerror.get = function() {
                return this._onerror
            }
            ,
            y.onopen.set = function(E) {
                this.removeEventListener("open", this._onopen),
                this._onopen = E,
                this.addEventListener("open", E)
            }
            ,
            y.onmessage.set = function(E) {
                this.removeEventListener("message", this._onmessage),
                this._onmessage = E,
                this.addEventListener("message", E)
            }
            ,
            y.onclose.set = function(E) {
                this.removeEventListener("close", this._onclose),
                this._onclose = E,
                this.addEventListener("close", E)
            }
            ,
            y.onerror.set = function(E) {
                this.removeEventListener("error", this._onerror),
                this._onerror = E,
                this.addEventListener("error", E)
            }
            ,
            h.prototype.send = function(b) {
                var L = this;
                if (this.readyState === h.CONNECTING)
                    throw new Error("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state");
                var v = ir({
                    type: "server::message",
                    origin: this.url,
                    data: dr(b)
                })
                  , A = W.serverLookup(this.url);
                A && xe(function() {
                    L.dispatchEvent(v, b)
                }, A)
            }
            ,
            h.prototype.close = function(b, L) {
                if (b !== void 0 && (typeof b != "number" || b !== 1e3 && (b < 3e3 || b > 4999)))
                    throw new TypeError(Z.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + b + " is neither.");
                if (L !== void 0) {
                    var v = Co(L);
                    if (v > 123)
                        throw new SyntaxError(Z.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === h.CLOSING || this.readyState === h.CLOSED)) {
                    var A = As(this);
                    this.readyState === h.CONNECTING ? Ao(A, b || Le.CLOSE_ABNORMAL, L) : vs(A, b || Le.CLOSE_NO_STATUS, L)
                }
            }
            ,
            Object.defineProperties(h.prototype, y),
            h
        }(j);
        le.CONNECTING = 0,
        le.prototype.CONNECTING = le.CONNECTING,
        le.OPEN = 1,
        le.prototype.OPEN = le.OPEN,
        le.CLOSING = 2,
        le.prototype.CLOSING = le.CLOSING,
        le.CLOSED = 3,
        le.prototype.CLOSED = le.CLOSED;
        var vt = function(_) {
            function h(E, b) {
                var L = this;
                E === void 0 && (E = "socket.io"),
                b === void 0 && (b = ""),
                _.call(this),
                this.binaryType = "blob";
                var v = new Re(E);
                v.pathname || (v.pathname = "/"),
                this.url = v.toString(),
                this.readyState = h.CONNECTING,
                this.protocol = "",
                this.target = this,
                typeof b == "string" || typeof b == "object" && b !== null ? this.protocol = b : Array.isArray(b) && b.length > 0 && (this.protocol = b[0]);
                var A = W.attachWebSocket(this, this.url);
                xe(function() {
                    A ? (this.readyState = h.OPEN,
                    A.dispatchEvent(Ae({
                        type: "connection"
                    }), A, this),
                    A.dispatchEvent(Ae({
                        type: "connect"
                    }), A, this),
                    this.dispatchEvent(Ae({
                        type: "connect",
                        target: this
                    }))) : (this.readyState = h.CLOSED,
                    this.dispatchEvent(Ae({
                        type: "error",
                        target: this
                    })),
                    this.dispatchEvent(Ne({
                        type: "close",
                        target: this,
                        code: Le.CLOSE_NORMAL
                    })),
                    T("error", "Socket.io connection to '" + this.url + "' failed"))
                }, this),
                this.addEventListener("close", function(w) {
                    L.dispatchEvent(Ne({
                        type: "disconnect",
                        target: w.target,
                        code: w.code
                    }))
                })
            }
            _ && (h.__proto__ = _),
            h.prototype = Object.create(_ && _.prototype),
            h.prototype.constructor = h;
            var y = {
                broadcast: {}
            };
            return h.prototype.close = function() {
                if (this.readyState === h.OPEN) {
                    var b = W.serverLookup(this.url);
                    return W.removeWebSocket(this, this.url),
                    this.readyState = h.CLOSED,
                    this.dispatchEvent(Ne({
                        type: "close",
                        target: this,
                        code: Le.CLOSE_NORMAL
                    })),
                    b && b.dispatchEvent(Ne({
                        type: "disconnect",
                        target: this,
                        code: Le.CLOSE_NORMAL
                    }), b),
                    this
                }
            }
            ,
            h.prototype.disconnect = function() {
                return this.close()
            }
            ,
            h.prototype.emit = function(b) {
                for (var L = [], v = arguments.length - 1; v-- > 0; )
                    L[v] = arguments[v + 1];
                if (this.readyState !== h.OPEN)
                    throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var A = ir({
                    type: b,
                    origin: this.url,
                    data: L
                })
                  , w = W.serverLookup(this.url);
                return w && w.dispatchEvent.apply(w, [A].concat(L)),
                this
            }
            ,
            h.prototype.send = function(b) {
                return this.emit("message", b),
                this
            }
            ,
            y.broadcast.get = function() {
                if (this.readyState !== h.OPEN)
                    throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var E = this
                  , b = W.serverLookup(this.url);
                if (!b)
                    throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(v, A) {
                        return b.emit(v, A, {
                            websockets: W.websocketsLookup(E.url, null, E)
                        }),
                        E
                    },
                    to: function(v) {
                        return b.to(v, E)
                    },
                    in: function(v) {
                        return b.in(v, E)
                    }
                }
            }
            ,
            h.prototype.on = function(b, L) {
                return this.addEventListener(b, L),
                this
            }
            ,
            h.prototype.off = function(b, L) {
                this.removeEventListener(b, L)
            }
            ,
            h.prototype.hasListeners = function(b) {
                var L = this.listeners[b];
                return Array.isArray(L) ? !!L.length : !1
            }
            ,
            h.prototype.join = function(b) {
                W.addMembershipToRoom(this, b)
            }
            ,
            h.prototype.leave = function(b) {
                W.removeMembershipFromRoom(this, b)
            }
            ,
            h.prototype.to = function(b) {
                return this.broadcast.to(b)
            }
            ,
            h.prototype.in = function() {
                return this.to.apply(null, arguments)
            }
            ,
            h.prototype.dispatchEvent = function(b) {
                for (var L = this, v = [], A = arguments.length - 1; A-- > 0; )
                    v[A] = arguments[A + 1];
                var w = b.type
                  , re = this.listeners[w];
                if (!Array.isArray(re))
                    return !1;
                re.forEach(function(be) {
                    v.length > 0 ? be.apply(L, v) : be.call(L, b.data ? b.data : b)
                })
            }
            ,
            Object.defineProperties(h.prototype, y),
            h
        }(j);
        vt.CONNECTING = 0,
        vt.OPEN = 1,
        vt.CLOSING = 2,
        vt.CLOSED = 3;
        var An = function(h, y) {
            return new vt(h,y)
        };
        An.connect = function(h, y) {
            return An(h, y)
        }
        ;
        var Ko = function(_) {
            return _.reduce(function(h, y) {
                return h.indexOf(y) > -1 ? h : h.concat(y)
            }, [])
        };
        function Cs() {
            return typeof window < "u" ? window : typeof process == "object" && typeof Wg == "function" && typeof pe == "object" ? pe : this
        }
        var Bs = {
            mock: !0,
            verifyClient: null,
            selectProtocol: null
        }
          , Cn = function(_) {
            function h(y, E) {
                E === void 0 && (E = Bs),
                _.call(this);
                var b = new Re(y);
                b.pathname || (b.pathname = "/"),
                this.url = b.toString(),
                this.originalWebSocket = null;
                var L = W.attachServer(this, this.url);
                if (!L)
                    throw this.dispatchEvent(Ae({
                        type: "error"
                    })),
                    new Error("A mock server is already listening on this url");
                this.options = Object.assign({}, Bs, E),
                this.options.mock && this.mockWebsocket()
            }
            return _ && (h.__proto__ = _),
            h.prototype = Object.create(_ && _.prototype),
            h.prototype.constructor = h,
            h.prototype.mockWebsocket = function() {
                var E = Cs();
                this.originalWebSocket = E.WebSocket,
                E.WebSocket = le
            }
            ,
            h.prototype.restoreWebsocket = function() {
                var E = Cs();
                this.originalWebSocket !== null && (E.WebSocket = this.originalWebSocket),
                this.originalWebSocket = null
            }
            ,
            h.prototype.stop = function(E) {
                E === void 0 && (E = function() {}
                ),
                this.options.mock && this.restoreWebsocket(),
                W.removeServer(this.url),
                typeof E == "function" && E()
            }
            ,
            h.prototype.on = function(E, b) {
                this.addEventListener(E, b)
            }
            ,
            h.prototype.off = function(E, b) {
                this.removeEventListener(E, b)
            }
            ,
            h.prototype.close = function(E) {
                E === void 0 && (E = {});
                var b = E.code
                  , L = E.reason
                  , v = E.wasClean
                  , A = W.websocketsLookup(this.url);
                W.removeServer(this.url),
                A.forEach(function(w) {
                    w.readyState = le.CLOSED,
                    w.dispatchEvent(Ne({
                        type: "close",
                        target: w.target,
                        code: b || Le.CLOSE_NORMAL,
                        reason: L || "",
                        wasClean: v
                    }))
                }),
                this.dispatchEvent(Ne({
                    type: "close"
                }), this)
            }
            ,
            h.prototype.emit = function(E, b, L) {
                var v = this;
                L === void 0 && (L = {});
                var A = L.websockets;
                A || (A = W.websocketsLookup(this.url));
                var w;
                typeof L != "object" || arguments.length > 3 ? (b = Array.prototype.slice.call(arguments, 1, arguments.length),
                w = b.map(function(re) {
                    return dr(re)
                })) : w = dr(b),
                A.forEach(function(re) {
                    var be = re instanceof vt ? b : w;
                    Array.isArray(be) ? re.dispatchEvent.apply(re, [ir({
                        type: E,
                        data: be,
                        origin: v.url,
                        target: re.target
                    })].concat(be)) : re.dispatchEvent(ir({
                        type: E,
                        data: be,
                        origin: v.url,
                        target: re.target
                    }))
                })
            }
            ,
            h.prototype.clients = function() {
                return W.websocketsLookup(this.url)
            }
            ,
            h.prototype.to = function(E, b, L) {
                var v = this;
                L === void 0 && (L = []);
                var A = this
                  , w = Ko(L.concat(W.websocketsLookup(this.url, E, b)));
                return {
                    to: function(re, be) {
                        return v.to.call(v, re, be, w)
                    },
                    emit: function(be, U) {
                        A.emit(be, U, {
                            websockets: w
                        })
                    }
                }
            }
            ,
            h.prototype.in = function() {
                for (var E = [], b = arguments.length; b--; )
                    E[b] = arguments[b];
                return this.to.apply(null, E)
            }
            ,
            h.prototype.simulate = function(E) {
                var b = W.websocketsLookup(this.url);
                E === "error" && b.forEach(function(L) {
                    L.readyState = le.CLOSED,
                    L.dispatchEvent(Ae({
                        type: "error",
                        target: L.target
                    }))
                })
            }
            ,
            h
        }(j);
        Cn.of = function(h) {
            return new Cn(h)
        }
        ;
        var wo = Cn
          , No = le
          , Io = An;
        r.Server = wo,
        r.WebSocket = No,
        r.SocketIO = Io,
        Object.defineProperty(r, "__esModule", {
            value: !0
        })
    })
}
)(Pa, Pa.exports);
var zg = {
    exports: {}
};
(function(t) {
    (function() {
        function e(u, o) {
            var c = u.x - o.x
              , p = u.y - o.y;
            return c * c + p * p
        }
        function r(u, o, c) {
            var p = o.x
              , R = o.y
              , x = c.x - p
              , g = c.y - R;
            if (x !== 0 || g !== 0) {
                var m = ((u.x - p) * x + (u.y - R) * g) / (x * x + g * g);
                m > 1 ? (p = c.x,
                R = c.y) : m > 0 && (p += x * m,
                R += g * m)
            }
            return x = u.x - p,
            g = u.y - R,
            x * x + g * g
        }
        function i(u, o) {
            for (var c = u[0], p = [c], R, x = 1, g = u.length; x < g; x++)
                R = u[x],
                e(R, c) > o && (p.push(R),
                c = R);
            return c !== R && p.push(R),
            p
        }
        function s(u, o, c, p, R) {
            for (var x = p, g, m = o + 1; m < c; m++) {
                var C = r(u[m], u[o], u[c]);
                C > x && (g = m,
                x = C)
            }
            x > p && (g - o > 1 && s(u, o, g, p, R),
            R.push(u[g]),
            c - g > 1 && s(u, g, c, p, R))
        }
        function a(u, o) {
            var c = u.length - 1
              , p = [u[0]];
            return s(u, 0, c, o, p),
            p.push(u[c]),
            p
        }
        function f(u, o, c) {
            if (u.length <= 2)
                return u;
            var p = o !== void 0 ? o * o : 1;
            return u = c ? u : i(u, p),
            u = a(u, p),
            u
        }
        t.exports = f,
        t.exports.default = f
    }
    )()
}
)(zg);
var Xu = {}
  , os = {}
  , ls = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.EXTENDED_PICTOGRAPHIC = t.CLUSTER_BREAK = void 0,
    function(e) {
        e[e.CR = 0] = "CR",
        e[e.LF = 1] = "LF",
        e[e.CONTROL = 2] = "CONTROL",
        e[e.EXTEND = 3] = "EXTEND",
        e[e.REGIONAL_INDICATOR = 4] = "REGIONAL_INDICATOR",
        e[e.SPACINGMARK = 5] = "SPACINGMARK",
        e[e.L = 6] = "L",
        e[e.V = 7] = "V",
        e[e.T = 8] = "T",
        e[e.LV = 9] = "LV",
        e[e.LVT = 10] = "LVT",
        e[e.OTHER = 11] = "OTHER",
        e[e.PREPEND = 12] = "PREPEND",
        e[e.E_BASE = 13] = "E_BASE",
        e[e.E_MODIFIER = 14] = "E_MODIFIER",
        e[e.ZWJ = 15] = "ZWJ",
        e[e.GLUE_AFTER_ZWJ = 16] = "GLUE_AFTER_ZWJ",
        e[e.E_BASE_GAZ = 17] = "E_BASE_GAZ"
    }(t.CLUSTER_BREAK || (t.CLUSTER_BREAK = {})),
    t.EXTENDED_PICTOGRAPHIC = 101
}
)(ls);
var cs = {};
Object.defineProperty(cs, "__esModule", {
    value: !0
});
const M = ls
  , Xe = 0
  , Wn = 1
  , Jg = 2
  , Yg = 3
  , Qg = 4;
class Zg {
    static isSurrogate(e, r) {
        return 55296 <= e.charCodeAt(r) && e.charCodeAt(r) <= 56319 && 56320 <= e.charCodeAt(r + 1) && e.charCodeAt(r + 1) <= 57343
    }
    static codePointAt(e, r) {
        r === void 0 && (r = 0);
        const i = e.charCodeAt(r);
        if (55296 <= i && i <= 56319 && r < e.length - 1) {
            const s = i
              , a = e.charCodeAt(r + 1);
            return 56320 <= a && a <= 57343 ? (s - 55296) * 1024 + (a - 56320) + 65536 : s
        }
        if (56320 <= i && i <= 57343 && r >= 1) {
            const s = e.charCodeAt(r - 1)
              , a = i;
            return 55296 <= s && s <= 56319 ? (s - 55296) * 1024 + (a - 56320) + 65536 : a
        }
        return i
    }
    static shouldBreak(e, r, i, s, a, f) {
        const u = [e].concat(r).concat([i])
          , o = [s].concat(a).concat([f])
          , c = u[u.length - 2]
          , p = i
          , R = f
          , x = u.lastIndexOf(M.CLUSTER_BREAK.REGIONAL_INDICATOR);
        if (x > 0 && u.slice(1, x).every(function(m) {
            return m === M.CLUSTER_BREAK.REGIONAL_INDICATOR
        }) && [M.CLUSTER_BREAK.PREPEND, M.CLUSTER_BREAK.REGIONAL_INDICATOR].indexOf(c) === -1)
            return u.filter(function(m) {
                return m === M.CLUSTER_BREAK.REGIONAL_INDICATOR
            }).length % 2 === 1 ? Yg : Qg;
        if (c === M.CLUSTER_BREAK.CR && p === M.CLUSTER_BREAK.LF)
            return Xe;
        if (c === M.CLUSTER_BREAK.CONTROL || c === M.CLUSTER_BREAK.CR || c === M.CLUSTER_BREAK.LF)
            return Wn;
        if (p === M.CLUSTER_BREAK.CONTROL || p === M.CLUSTER_BREAK.CR || p === M.CLUSTER_BREAK.LF)
            return Wn;
        if (c === M.CLUSTER_BREAK.L && (p === M.CLUSTER_BREAK.L || p === M.CLUSTER_BREAK.V || p === M.CLUSTER_BREAK.LV || p === M.CLUSTER_BREAK.LVT))
            return Xe;
        if ((c === M.CLUSTER_BREAK.LV || c === M.CLUSTER_BREAK.V) && (p === M.CLUSTER_BREAK.V || p === M.CLUSTER_BREAK.T))
            return Xe;
        if ((c === M.CLUSTER_BREAK.LVT || c === M.CLUSTER_BREAK.T) && p === M.CLUSTER_BREAK.T)
            return Xe;
        if (p === M.CLUSTER_BREAK.EXTEND || p === M.CLUSTER_BREAK.ZWJ)
            return Xe;
        if (p === M.CLUSTER_BREAK.SPACINGMARK)
            return Xe;
        if (c === M.CLUSTER_BREAK.PREPEND)
            return Xe;
        const g = o.slice(0, -1).lastIndexOf(M.EXTENDED_PICTOGRAPHIC);
        return g !== -1 && o[g] === M.EXTENDED_PICTOGRAPHIC && u.slice(g + 1, -2).every(function(m) {
            return m === M.CLUSTER_BREAK.EXTEND
        }) && c === M.CLUSTER_BREAK.ZWJ && R === M.EXTENDED_PICTOGRAPHIC ? Xe : r.indexOf(M.CLUSTER_BREAK.REGIONAL_INDICATOR) !== -1 ? Jg : c === M.CLUSTER_BREAK.REGIONAL_INDICATOR && p === M.CLUSTER_BREAK.REGIONAL_INDICATOR ? Xe : Wn
    }
}
cs.default = Zg;
var ps = {};
Object.defineProperty(ps, "__esModule", {
    value: !0
});
class em {
    constructor(e, r) {
        this._index = 0,
        this._str = e,
        this._nextBreak = r
    }
    [Symbol.iterator]() {
        return this
    }
    next() {
        let e;
        if ((e = this._nextBreak(this._str, this._index)) < this._str.length) {
            const r = this._str.slice(this._index, e);
            return this._index = e,
            {
                value: r,
                done: !1
            }
        }
        if (this._index < this._str.length) {
            const r = this._str.slice(this._index);
            return this._index = this._str.length,
            {
                value: r,
                done: !1
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }
}
ps.default = em;
var ju = pe && pe.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
;
Object.defineProperty(os, "__esModule", {
    value: !0
});
const n = ls
  , Ur = ju(cs)
  , tm = ju(ps);
class je {
    static nextBreak(e, r) {
        if (r === void 0 && (r = 0),
        r < 0)
            return 0;
        if (r >= e.length - 1)
            return e.length;
        const i = Ur.default.codePointAt(e, r)
          , s = je.getGraphemeBreakProperty(i)
          , a = je.getEmojiProperty(i)
          , f = []
          , u = [];
        for (let o = r + 1; o < e.length; o++) {
            if (Ur.default.isSurrogate(e, o - 1))
                continue;
            const c = Ur.default.codePointAt(e, o)
              , p = je.getGraphemeBreakProperty(c)
              , R = je.getEmojiProperty(c);
            if (Ur.default.shouldBreak(s, f, p, a, u, R))
                return o;
            f.push(p),
            u.push(R)
        }
        return e.length
    }
    splitGraphemes(e) {
        const r = [];
        let i = 0, s;
        for (; (s = je.nextBreak(e, i)) < e.length; )
            r.push(e.slice(i, s)),
            i = s;
        return i < e.length && r.push(e.slice(i)),
        r
    }
    iterateGraphemes(e) {
        return new tm.default(e,je.nextBreak)
    }
    countGraphemes(e) {
        let r = 0, i = 0, s;
        for (; (s = je.nextBreak(e, i)) < e.length; )
            i = s,
            r++;
        return i < e.length && r++,
        r
    }
    static getGraphemeBreakProperty(e) {
        if (e < 48905) {
            if (e < 44116) {
                if (e < 4141) {
                    if (e < 2818) {
                        if (e < 2363)
                            if (e < 1759) {
                                if (e < 1471) {
                                    if (e < 127) {
                                        if (e < 11) {
                                            if (e < 10) {
                                                if (0 <= e && e <= 9)
                                                    return n.CLUSTER_BREAK.CONTROL
                                            } else if (e === 10)
                                                return n.CLUSTER_BREAK.LF
                                        } else if (e < 13) {
                                            if (11 <= e && e <= 12)
                                                return n.CLUSTER_BREAK.CONTROL
                                        } else if (e < 14) {
                                            if (e === 13)
                                                return n.CLUSTER_BREAK.CR
                                        } else if (14 <= e && e <= 31)
                                            return n.CLUSTER_BREAK.CONTROL
                                    } else if (e < 768) {
                                        if (e < 173) {
                                            if (127 <= e && e <= 159)
                                                return n.CLUSTER_BREAK.CONTROL
                                        } else if (e === 173)
                                            return n.CLUSTER_BREAK.CONTROL
                                    } else if (e < 1155) {
                                        if (768 <= e && e <= 879)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 1425) {
                                        if (1155 <= e && e <= 1161)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (1425 <= e && e <= 1469)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 1552) {
                                    if (e < 1476) {
                                        if (e < 1473) {
                                            if (e === 1471)
                                                return n.CLUSTER_BREAK.EXTEND
                                        } else if (1473 <= e && e <= 1474)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 1479) {
                                        if (1476 <= e && e <= 1477)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 1536) {
                                        if (e === 1479)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (1536 <= e && e <= 1541)
                                        return n.CLUSTER_BREAK.PREPEND
                                } else if (e < 1648) {
                                    if (e < 1564) {
                                        if (1552 <= e && e <= 1562)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 1611) {
                                        if (e === 1564)
                                            return n.CLUSTER_BREAK.CONTROL
                                    } else if (1611 <= e && e <= 1631)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 1750) {
                                    if (e === 1648)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 1757) {
                                    if (1750 <= e && e <= 1756)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 1757)
                                    return n.CLUSTER_BREAK.PREPEND
                            } else if (e < 2075) {
                                if (e < 1840)
                                    if (e < 1770) {
                                        if (e < 1767) {
                                            if (1759 <= e && e <= 1764)
                                                return n.CLUSTER_BREAK.EXTEND
                                        } else if (1767 <= e && e <= 1768)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 1807) {
                                        if (1770 <= e && e <= 1773)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else {
                                        if (e === 1807)
                                            return n.CLUSTER_BREAK.PREPEND;
                                        if (e === 1809)
                                            return n.CLUSTER_BREAK.EXTEND
                                    }
                                else if (e < 2027) {
                                    if (e < 1958) {
                                        if (1840 <= e && e <= 1866)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (1958 <= e && e <= 1968)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2045) {
                                    if (2027 <= e && e <= 2035)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2070) {
                                    if (e === 2045)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (2070 <= e && e <= 2073)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2200) {
                                if (e < 2089) {
                                    if (e < 2085) {
                                        if (2075 <= e && e <= 2083)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (2085 <= e && e <= 2087)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2137) {
                                    if (2089 <= e && e <= 2093)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2192) {
                                    if (2137 <= e && e <= 2139)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (2192 <= e && e <= 2193)
                                    return n.CLUSTER_BREAK.PREPEND
                            } else if (e < 2275) {
                                if (e < 2250) {
                                    if (2200 <= e && e <= 2207)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2274) {
                                    if (2250 <= e && e <= 2273)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 2274)
                                    return n.CLUSTER_BREAK.PREPEND
                            } else if (e < 2307) {
                                if (2275 <= e && e <= 2306)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else {
                                if (e === 2307)
                                    return n.CLUSTER_BREAK.SPACINGMARK;
                                if (e === 2362)
                                    return n.CLUSTER_BREAK.EXTEND
                            }
                        else if (e < 2561) {
                            if (e < 2434) {
                                if (e < 2381) {
                                    if (e < 2366) {
                                        if (e === 2363)
                                            return n.CLUSTER_BREAK.SPACINGMARK;
                                        if (e === 2364)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 2369) {
                                        if (2366 <= e && e <= 2368)
                                            return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 2377) {
                                        if (2369 <= e && e <= 2376)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (2377 <= e && e <= 2380)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 2385) {
                                    if (e < 2382) {
                                        if (e === 2381)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (2382 <= e && e <= 2383)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 2402) {
                                    if (2385 <= e && e <= 2391)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2433) {
                                    if (2402 <= e && e <= 2403)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 2433)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2503) {
                                if (e < 2494) {
                                    if (e < 2492) {
                                        if (2434 <= e && e <= 2435)
                                            return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e === 2492)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2495) {
                                    if (e === 2494)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2497) {
                                    if (2495 <= e && e <= 2496)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (2497 <= e && e <= 2500)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2519) {
                                if (e < 2507) {
                                    if (2503 <= e && e <= 2504)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 2509) {
                                    if (2507 <= e && e <= 2508)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e === 2509)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2530) {
                                if (e === 2519)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2558) {
                                if (2530 <= e && e <= 2531)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e === 2558)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 2691) {
                            if (e < 2631) {
                                if (e < 2620) {
                                    if (e < 2563) {
                                        if (2561 <= e && e <= 2562)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (e === 2563)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 2622) {
                                    if (e === 2620)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2625) {
                                    if (2622 <= e && e <= 2624)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (2625 <= e && e <= 2626)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2672) {
                                if (e < 2635) {
                                    if (2631 <= e && e <= 2632)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2641) {
                                    if (2635 <= e && e <= 2637)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 2641)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2677) {
                                if (2672 <= e && e <= 2673)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2689) {
                                if (e === 2677)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (2689 <= e && e <= 2690)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 2761) {
                            if (e < 2750) {
                                if (e === 2691)
                                    return n.CLUSTER_BREAK.SPACINGMARK;
                                if (e === 2748)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2753) {
                                if (2750 <= e && e <= 2752)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 2759) {
                                if (2753 <= e && e <= 2757)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (2759 <= e && e <= 2760)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 2786) {
                            if (e < 2763) {
                                if (e === 2761)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 2765) {
                                if (2763 <= e && e <= 2764)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e === 2765)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 2810) {
                            if (2786 <= e && e <= 2787)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 2817) {
                            if (2810 <= e && e <= 2815)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e === 2817)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 3315) {
                        if (e < 3076) {
                            if (e < 2946) {
                                if (e < 2887) {
                                    if (e < 2878) {
                                        if (e < 2876) {
                                            if (2818 <= e && e <= 2819)
                                                return n.CLUSTER_BREAK.SPACINGMARK
                                        } else if (e === 2876)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 2880) {
                                        if (2878 <= e && e <= 2879)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 2881) {
                                        if (e === 2880)
                                            return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (2881 <= e && e <= 2884)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2893) {
                                    if (e < 2891) {
                                        if (2887 <= e && e <= 2888)
                                            return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (2891 <= e && e <= 2892)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 2901) {
                                    if (e === 2893)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2914) {
                                    if (2901 <= e && e <= 2903)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (2914 <= e && e <= 2915)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3014) {
                                if (e < 3007) {
                                    if (e === 2946 || e === 3006)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3008) {
                                    if (e === 3007)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 3009) {
                                    if (e === 3008)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (3009 <= e && e <= 3010)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3031) {
                                if (e < 3018) {
                                    if (3014 <= e && e <= 3016)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 3021) {
                                    if (3018 <= e && e <= 3020)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e === 3021)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3072) {
                                if (e === 3031)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3073) {
                                if (e === 3072)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (3073 <= e && e <= 3075)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3262) {
                            if (e < 3146) {
                                if (e < 3134) {
                                    if (e === 3076 || e === 3132)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3137) {
                                    if (3134 <= e && e <= 3136)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3142) {
                                    if (3137 <= e && e <= 3140)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (3142 <= e && e <= 3144)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3201) {
                                if (e < 3157) {
                                    if (3146 <= e && e <= 3149)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3170) {
                                    if (3157 <= e && e <= 3158)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (3170 <= e && e <= 3171)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3202) {
                                if (e === 3201)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3260) {
                                if (3202 <= e && e <= 3203)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e === 3260)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3270) {
                            if (e < 3264) {
                                if (e === 3262)
                                    return n.CLUSTER_BREAK.SPACINGMARK;
                                if (e === 3263)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3266) {
                                if (3264 <= e && e <= 3265)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3267) {
                                if (e === 3266)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (3267 <= e && e <= 3268)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3276) {
                            if (e < 3271) {
                                if (e === 3270)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3274) {
                                if (3271 <= e && e <= 3272)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (3274 <= e && e <= 3275)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3285) {
                            if (3276 <= e && e <= 3277)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3298) {
                            if (3285 <= e && e <= 3286)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (3298 <= e && e <= 3299)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 3551) {
                        if (e < 3406) {
                            if (e < 3391) {
                                if (e < 3330) {
                                    if (e < 3328) {
                                        if (e === 3315)
                                            return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (3328 <= e && e <= 3329)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3387) {
                                    if (3330 <= e && e <= 3331)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 3390) {
                                    if (3387 <= e && e <= 3388)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 3390)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3398) {
                                if (e < 3393) {
                                    if (3391 <= e && e <= 3392)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (3393 <= e && e <= 3396)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3402) {
                                if (3398 <= e && e <= 3400)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3405) {
                                if (3402 <= e && e <= 3404)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e === 3405)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3530) {
                            if (e < 3426) {
                                if (e === 3406)
                                    return n.CLUSTER_BREAK.PREPEND;
                                if (e === 3415)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3457) {
                                if (3426 <= e && e <= 3427)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3458) {
                                if (e === 3457)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (3458 <= e && e <= 3459)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3538) {
                            if (e < 3535) {
                                if (e === 3530)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3536) {
                                if (e === 3535)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (3536 <= e && e <= 3537)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3542) {
                            if (3538 <= e && e <= 3540)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3544) {
                            if (e === 3542)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (3544 <= e && e <= 3550)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 3893) {
                        if (e < 3655) {
                            if (e < 3633) {
                                if (e < 3570) {
                                    if (e === 3551)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (3570 <= e && e <= 3571)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3635) {
                                if (e === 3633)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3636) {
                                if (e === 3635)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (3636 <= e && e <= 3642)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3764)
                            if (e < 3761) {
                                if (3655 <= e && e <= 3662)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else {
                                if (e === 3761)
                                    return n.CLUSTER_BREAK.EXTEND;
                                if (e === 3763)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            }
                        else if (e < 3784) {
                            if (3764 <= e && e <= 3772)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3864) {
                            if (3784 <= e && e <= 3790)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (3864 <= e && e <= 3865)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 3967) {
                        if (e < 3897) {
                            if (e === 3893 || e === 3895)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3902) {
                            if (e === 3897)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3953) {
                            if (3902 <= e && e <= 3903)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (3953 <= e && e <= 3966)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 3981) {
                        if (e < 3968) {
                            if (e === 3967)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3974) {
                            if (3968 <= e && e <= 3972)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (3974 <= e && e <= 3975)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 3993) {
                        if (3981 <= e && e <= 3991)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 4038) {
                        if (3993 <= e && e <= 4028)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e === 4038)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 7204) {
                    if (e < 6448) {
                        if (e < 5938) {
                            if (e < 4226) {
                                if (e < 4157) {
                                    if (e < 4146) {
                                        if (e < 4145) {
                                            if (4141 <= e && e <= 4144)
                                                return n.CLUSTER_BREAK.EXTEND
                                        } else if (e === 4145)
                                            return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 4153) {
                                        if (4146 <= e && e <= 4151)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 4155) {
                                        if (4153 <= e && e <= 4154)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (4155 <= e && e <= 4156)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 4184) {
                                    if (e < 4182) {
                                        if (4157 <= e && e <= 4158)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (4182 <= e && e <= 4183)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 4190) {
                                    if (4184 <= e && e <= 4185)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 4209) {
                                    if (4190 <= e && e <= 4192)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (4209 <= e && e <= 4212)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 4352) {
                                if (e < 4229) {
                                    if (e === 4226)
                                        return n.CLUSTER_BREAK.EXTEND;
                                    if (e === 4228)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 4237) {
                                    if (4229 <= e && e <= 4230)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 4237 || e === 4253)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 4957) {
                                if (e < 4448) {
                                    if (4352 <= e && e <= 4447)
                                        return n.CLUSTER_BREAK.L
                                } else if (e < 4520) {
                                    if (4448 <= e && e <= 4519)
                                        return n.CLUSTER_BREAK.V
                                } else if (4520 <= e && e <= 4607)
                                    return n.CLUSTER_BREAK.T
                            } else if (e < 5906) {
                                if (4957 <= e && e <= 4959)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 5909) {
                                if (5906 <= e && e <= 5908)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e === 5909)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 6089) {
                            if (e < 6070) {
                                if (e < 5970) {
                                    if (e < 5940) {
                                        if (5938 <= e && e <= 5939)
                                            return n.CLUSTER_BREAK.EXTEND
                                    } else if (e === 5940)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 6002) {
                                    if (5970 <= e && e <= 5971)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 6068) {
                                    if (6002 <= e && e <= 6003)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (6068 <= e && e <= 6069)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6078) {
                                if (e < 6071) {
                                    if (e === 6070)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (6071 <= e && e <= 6077)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6086) {
                                if (6078 <= e && e <= 6085)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 6087) {
                                if (e === 6086)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (6087 <= e && e <= 6088)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 6277)
                            if (e < 6155) {
                                if (e < 6109) {
                                    if (6089 <= e && e <= 6099)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 6109)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6158) {
                                if (6155 <= e && e <= 6157)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else {
                                if (e === 6158)
                                    return n.CLUSTER_BREAK.CONTROL;
                                if (e === 6159)
                                    return n.CLUSTER_BREAK.EXTEND
                            }
                        else if (e < 6435) {
                            if (e < 6313) {
                                if (6277 <= e && e <= 6278)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6432) {
                                if (e === 6313)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (6432 <= e && e <= 6434)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 6439) {
                            if (6435 <= e && e <= 6438)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 6441) {
                            if (6439 <= e && e <= 6440)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (6441 <= e && e <= 6443)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 6971) {
                        if (e < 6744)
                            if (e < 6681) {
                                if (e < 6451) {
                                    if (e < 6450) {
                                        if (6448 <= e && e <= 6449)
                                            return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e === 6450)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 6457) {
                                    if (6451 <= e && e <= 6456)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 6679) {
                                    if (6457 <= e && e <= 6459)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (6679 <= e && e <= 6680)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6741) {
                                if (e < 6683) {
                                    if (6681 <= e && e <= 6682)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e === 6683)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6742) {
                                if (e === 6741)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else {
                                if (e === 6742)
                                    return n.CLUSTER_BREAK.EXTEND;
                                if (e === 6743)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            }
                        else if (e < 6771) {
                            if (e < 6754) {
                                if (e < 6752) {
                                    if (6744 <= e && e <= 6750)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 6752)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6757) {
                                if (e === 6754)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6765) {
                                if (6757 <= e && e <= 6764)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (6765 <= e && e <= 6770)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 6912) {
                            if (e < 6783) {
                                if (6771 <= e && e <= 6780)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6832) {
                                if (e === 6783)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (6832 <= e && e <= 6862)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 6916) {
                            if (6912 <= e && e <= 6915)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 6964) {
                            if (e === 6916)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (6964 <= e && e <= 6970)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 7080) {
                        if (e < 7019) {
                            if (e < 6973) {
                                if (e === 6971)
                                    return n.CLUSTER_BREAK.SPACINGMARK;
                                if (e === 6972)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6978) {
                                if (6973 <= e && e <= 6977)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 6979) {
                                if (e === 6978)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (6979 <= e && e <= 6980)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 7073) {
                            if (e < 7040) {
                                if (7019 <= e && e <= 7027)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 7042) {
                                if (7040 <= e && e <= 7041)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e === 7042)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 7074) {
                            if (e === 7073)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 7078) {
                            if (7074 <= e && e <= 7077)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (7078 <= e && e <= 7079)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 7144)
                        if (e < 7083) {
                            if (e < 7082) {
                                if (7080 <= e && e <= 7081)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e === 7082)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 7142) {
                            if (7083 <= e && e <= 7085)
                                return n.CLUSTER_BREAK.EXTEND
                        } else {
                            if (e === 7142)
                                return n.CLUSTER_BREAK.EXTEND;
                            if (e === 7143)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        }
                    else if (e < 7150) {
                        if (e < 7146) {
                            if (7144 <= e && e <= 7145)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 7149) {
                            if (7146 <= e && e <= 7148)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e === 7149)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 7151) {
                        if (e === 7150)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 7154) {
                        if (7151 <= e && e <= 7153)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (7154 <= e && e <= 7155)
                        return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 43346) {
                    if (e < 11647) {
                        if (e < 7415) {
                            if (e < 7380) {
                                if (e < 7220) {
                                    if (e < 7212) {
                                        if (7204 <= e && e <= 7211)
                                            return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (7212 <= e && e <= 7219)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 7222) {
                                    if (7220 <= e && e <= 7221)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 7376) {
                                    if (7222 <= e && e <= 7223)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (7376 <= e && e <= 7378)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 7394) {
                                if (e < 7393) {
                                    if (7380 <= e && e <= 7392)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 7393)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 7405) {
                                if (7394 <= e && e <= 7400)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e === 7405 || e === 7412)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 8205)
                            if (e < 7616) {
                                if (e < 7416) {
                                    if (e === 7415)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (7416 <= e && e <= 7417)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 8203) {
                                if (7616 <= e && e <= 7679)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else {
                                if (e === 8203)
                                    return n.CLUSTER_BREAK.CONTROL;
                                if (e === 8204)
                                    return n.CLUSTER_BREAK.EXTEND
                            }
                        else if (e < 8288) {
                            if (e < 8206) {
                                if (e === 8205)
                                    return n.CLUSTER_BREAK.ZWJ
                            } else if (e < 8232) {
                                if (8206 <= e && e <= 8207)
                                    return n.CLUSTER_BREAK.CONTROL
                            } else if (8232 <= e && e <= 8238)
                                return n.CLUSTER_BREAK.CONTROL
                        } else if (e < 8400) {
                            if (8288 <= e && e <= 8303)
                                return n.CLUSTER_BREAK.CONTROL
                        } else if (e < 11503) {
                            if (8400 <= e && e <= 8432)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (11503 <= e && e <= 11505)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 43043) {
                        if (e < 42612) {
                            if (e < 12330) {
                                if (e < 11744) {
                                    if (e === 11647)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (11744 <= e && e <= 11775)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 12441) {
                                if (12330 <= e && e <= 12335)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 42607) {
                                if (12441 <= e && e <= 12442)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (42607 <= e && e <= 42610)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43010) {
                            if (e < 42654) {
                                if (42612 <= e && e <= 42621)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 42736) {
                                if (42654 <= e && e <= 42655)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (42736 <= e && e <= 42737)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43014) {
                            if (e === 43010)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e === 43014 || e === 43019)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 43188) {
                        if (e < 43047) {
                            if (e < 43045) {
                                if (43043 <= e && e <= 43044)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (43045 <= e && e <= 43046)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43052) {
                            if (e === 43047)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 43136) {
                            if (e === 43052)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (43136 <= e && e <= 43137)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 43263) {
                        if (e < 43204) {
                            if (43188 <= e && e <= 43203)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 43232) {
                            if (43204 <= e && e <= 43205)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (43232 <= e && e <= 43249)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 43302) {
                        if (e === 43263)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 43335) {
                        if (43302 <= e && e <= 43309)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (43335 <= e && e <= 43345)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 43698) {
                    if (e < 43493) {
                        if (e < 43444)
                            if (e < 43392) {
                                if (e < 43360) {
                                    if (43346 <= e && e <= 43347)
                                        return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (43360 <= e && e <= 43388)
                                    return n.CLUSTER_BREAK.L
                            } else if (e < 43395) {
                                if (43392 <= e && e <= 43394)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else {
                                if (e === 43395)
                                    return n.CLUSTER_BREAK.SPACINGMARK;
                                if (e === 43443)
                                    return n.CLUSTER_BREAK.EXTEND
                            }
                        else if (e < 43450) {
                            if (e < 43446) {
                                if (43444 <= e && e <= 43445)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (43446 <= e && e <= 43449)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43452) {
                            if (43450 <= e && e <= 43451)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 43454) {
                            if (43452 <= e && e <= 43453)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (43454 <= e && e <= 43456)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 43573) {
                        if (e < 43567) {
                            if (e < 43561) {
                                if (e === 43493)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (43561 <= e && e <= 43566)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43569) {
                            if (43567 <= e && e <= 43568)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 43571) {
                            if (43569 <= e && e <= 43570)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (43571 <= e && e <= 43572)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 43597) {
                        if (e < 43587) {
                            if (43573 <= e && e <= 43574)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e === 43587 || e === 43596)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 43644) {
                        if (e === 43597)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e === 43644 || e === 43696)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 44006) {
                    if (e < 43756)
                        if (e < 43710) {
                            if (e < 43703) {
                                if (43698 <= e && e <= 43700)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (43703 <= e && e <= 43704)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43713) {
                            if (43710 <= e && e <= 43711)
                                return n.CLUSTER_BREAK.EXTEND
                        } else {
                            if (e === 43713)
                                return n.CLUSTER_BREAK.EXTEND;
                            if (e === 43755)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        }
                    else if (e < 43766) {
                        if (e < 43758) {
                            if (43756 <= e && e <= 43757)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43765) {
                            if (43758 <= e && e <= 43759)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e === 43765)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 44003) {
                        if (e === 43766)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 44005) {
                        if (44003 <= e && e <= 44004)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e === 44005)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 44032)
                    if (e < 44009) {
                        if (e < 44008) {
                            if (44006 <= e && e <= 44007)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e === 44008)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 44012) {
                        if (44009 <= e && e <= 44010)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else {
                        if (e === 44012)
                            return n.CLUSTER_BREAK.SPACINGMARK;
                        if (e === 44013)
                            return n.CLUSTER_BREAK.EXTEND
                    }
                else if (e < 44061) {
                    if (e < 44033) {
                        if (e === 44032)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 44060) {
                        if (44033 <= e && e <= 44059)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 44060)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 44088) {
                    if (44061 <= e && e <= 44087)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 44089) {
                    if (e === 44088)
                        return n.CLUSTER_BREAK.LV
                } else if (44089 <= e && e <= 44115)
                    return n.CLUSTER_BREAK.LVT
            } else if (e < 46497) {
                if (e < 45293) {
                    if (e < 44704) {
                        if (e < 44397) {
                            if (e < 44256) {
                                if (e < 44173) {
                                    if (e < 44144) {
                                        if (e < 44117) {
                                            if (e === 44116)
                                                return n.CLUSTER_BREAK.LV
                                        } else if (44117 <= e && e <= 44143)
                                            return n.CLUSTER_BREAK.LVT
                                    } else if (e < 44145) {
                                        if (e === 44144)
                                            return n.CLUSTER_BREAK.LV
                                    } else if (e < 44172) {
                                        if (44145 <= e && e <= 44171)
                                            return n.CLUSTER_BREAK.LVT
                                    } else if (e === 44172)
                                        return n.CLUSTER_BREAK.LV
                                } else if (e < 44201) {
                                    if (e < 44200) {
                                        if (44173 <= e && e <= 44199)
                                            return n.CLUSTER_BREAK.LVT
                                    } else if (e === 44200)
                                        return n.CLUSTER_BREAK.LV
                                } else if (e < 44228) {
                                    if (44201 <= e && e <= 44227)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e < 44229) {
                                    if (e === 44228)
                                        return n.CLUSTER_BREAK.LV
                                } else if (44229 <= e && e <= 44255)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 44313) {
                                if (e < 44284) {
                                    if (e < 44257) {
                                        if (e === 44256)
                                            return n.CLUSTER_BREAK.LV
                                    } else if (44257 <= e && e <= 44283)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e < 44285) {
                                    if (e === 44284)
                                        return n.CLUSTER_BREAK.LV
                                } else if (e < 44312) {
                                    if (44285 <= e && e <= 44311)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 44312)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 44368) {
                                if (e < 44340) {
                                    if (44313 <= e && e <= 44339)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e < 44341) {
                                    if (e === 44340)
                                        return n.CLUSTER_BREAK.LV
                                } else if (44341 <= e && e <= 44367)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 44369) {
                                if (e === 44368)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 44396) {
                                if (44369 <= e && e <= 44395)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 44396)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 44537) {
                            if (e < 44480) {
                                if (e < 44425) {
                                    if (e < 44424) {
                                        if (44397 <= e && e <= 44423)
                                            return n.CLUSTER_BREAK.LVT
                                    } else if (e === 44424)
                                        return n.CLUSTER_BREAK.LV
                                } else if (e < 44452) {
                                    if (44425 <= e && e <= 44451)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e < 44453) {
                                    if (e === 44452)
                                        return n.CLUSTER_BREAK.LV
                                } else if (44453 <= e && e <= 44479)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 44508) {
                                if (e < 44481) {
                                    if (e === 44480)
                                        return n.CLUSTER_BREAK.LV
                                } else if (44481 <= e && e <= 44507)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 44509) {
                                if (e === 44508)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 44536) {
                                if (44509 <= e && e <= 44535)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 44536)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 44620) {
                            if (e < 44565) {
                                if (e < 44564) {
                                    if (44537 <= e && e <= 44563)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 44564)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 44592) {
                                if (44565 <= e && e <= 44591)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 44593) {
                                if (e === 44592)
                                    return n.CLUSTER_BREAK.LV
                            } else if (44593 <= e && e <= 44619)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 44649) {
                            if (e < 44621) {
                                if (e === 44620)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 44648) {
                                if (44621 <= e && e <= 44647)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 44648)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 44676) {
                            if (44649 <= e && e <= 44675)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 44677) {
                            if (e === 44676)
                                return n.CLUSTER_BREAK.LV
                        } else if (44677 <= e && e <= 44703)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 44985) {
                        if (e < 44844) {
                            if (e < 44761) {
                                if (e < 44732) {
                                    if (e < 44705) {
                                        if (e === 44704)
                                            return n.CLUSTER_BREAK.LV
                                    } else if (44705 <= e && e <= 44731)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e < 44733) {
                                    if (e === 44732)
                                        return n.CLUSTER_BREAK.LV
                                } else if (e < 44760) {
                                    if (44733 <= e && e <= 44759)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 44760)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 44789) {
                                if (e < 44788) {
                                    if (44761 <= e && e <= 44787)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 44788)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 44816) {
                                if (44789 <= e && e <= 44815)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 44817) {
                                if (e === 44816)
                                    return n.CLUSTER_BREAK.LV
                            } else if (44817 <= e && e <= 44843)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 44901) {
                            if (e < 44872) {
                                if (e < 44845) {
                                    if (e === 44844)
                                        return n.CLUSTER_BREAK.LV
                                } else if (44845 <= e && e <= 44871)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 44873) {
                                if (e === 44872)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 44900) {
                                if (44873 <= e && e <= 44899)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 44900)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 44956) {
                            if (e < 44928) {
                                if (44901 <= e && e <= 44927)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 44929) {
                                if (e === 44928)
                                    return n.CLUSTER_BREAK.LV
                            } else if (44929 <= e && e <= 44955)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 44957) {
                            if (e === 44956)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 44984) {
                            if (44957 <= e && e <= 44983)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 44984)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 45152) {
                        if (e < 45068) {
                            if (e < 45013) {
                                if (e < 45012) {
                                    if (44985 <= e && e <= 45011)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 45012)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 45040) {
                                if (45013 <= e && e <= 45039)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 45041) {
                                if (e === 45040)
                                    return n.CLUSTER_BREAK.LV
                            } else if (45041 <= e && e <= 45067)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 45097) {
                            if (e < 45069) {
                                if (e === 45068)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 45096) {
                                if (45069 <= e && e <= 45095)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 45096)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 45124) {
                            if (45097 <= e && e <= 45123)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 45125) {
                            if (e === 45124)
                                return n.CLUSTER_BREAK.LV
                        } else if (45125 <= e && e <= 45151)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 45209) {
                        if (e < 45180) {
                            if (e < 45153) {
                                if (e === 45152)
                                    return n.CLUSTER_BREAK.LV
                            } else if (45153 <= e && e <= 45179)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 45181) {
                            if (e === 45180)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 45208) {
                            if (45181 <= e && e <= 45207)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 45208)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 45264) {
                        if (e < 45236) {
                            if (45209 <= e && e <= 45235)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 45237) {
                            if (e === 45236)
                                return n.CLUSTER_BREAK.LV
                        } else if (45237 <= e && e <= 45263)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 45265) {
                        if (e === 45264)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 45292) {
                        if (45265 <= e && e <= 45291)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 45292)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 45908) {
                    if (e < 45600) {
                        if (e < 45433) {
                            if (e < 45376) {
                                if (e < 45321) {
                                    if (e < 45320) {
                                        if (45293 <= e && e <= 45319)
                                            return n.CLUSTER_BREAK.LVT
                                    } else if (e === 45320)
                                        return n.CLUSTER_BREAK.LV
                                } else if (e < 45348) {
                                    if (45321 <= e && e <= 45347)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e < 45349) {
                                    if (e === 45348)
                                        return n.CLUSTER_BREAK.LV
                                } else if (45349 <= e && e <= 45375)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 45404) {
                                if (e < 45377) {
                                    if (e === 45376)
                                        return n.CLUSTER_BREAK.LV
                                } else if (45377 <= e && e <= 45403)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 45405) {
                                if (e === 45404)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 45432) {
                                if (45405 <= e && e <= 45431)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 45432)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 45516) {
                            if (e < 45461) {
                                if (e < 45460) {
                                    if (45433 <= e && e <= 45459)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 45460)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 45488) {
                                if (45461 <= e && e <= 45487)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 45489) {
                                if (e === 45488)
                                    return n.CLUSTER_BREAK.LV
                            } else if (45489 <= e && e <= 45515)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 45545) {
                            if (e < 45517) {
                                if (e === 45516)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 45544) {
                                if (45517 <= e && e <= 45543)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 45544)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 45572) {
                            if (45545 <= e && e <= 45571)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 45573) {
                            if (e === 45572)
                                return n.CLUSTER_BREAK.LV
                        } else if (45573 <= e && e <= 45599)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 45741) {
                        if (e < 45657) {
                            if (e < 45628) {
                                if (e < 45601) {
                                    if (e === 45600)
                                        return n.CLUSTER_BREAK.LV
                                } else if (45601 <= e && e <= 45627)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 45629) {
                                if (e === 45628)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 45656) {
                                if (45629 <= e && e <= 45655)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 45656)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 45712) {
                            if (e < 45684) {
                                if (45657 <= e && e <= 45683)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 45685) {
                                if (e === 45684)
                                    return n.CLUSTER_BREAK.LV
                            } else if (45685 <= e && e <= 45711)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 45713) {
                            if (e === 45712)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 45740) {
                            if (45713 <= e && e <= 45739)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 45740)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 45824) {
                        if (e < 45769) {
                            if (e < 45768) {
                                if (45741 <= e && e <= 45767)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 45768)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 45796) {
                            if (45769 <= e && e <= 45795)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 45797) {
                            if (e === 45796)
                                return n.CLUSTER_BREAK.LV
                        } else if (45797 <= e && e <= 45823)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 45853) {
                        if (e < 45825) {
                            if (e === 45824)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 45852) {
                            if (45825 <= e && e <= 45851)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 45852)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 45880) {
                        if (45853 <= e && e <= 45879)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 45881) {
                        if (e === 45880)
                            return n.CLUSTER_BREAK.LV
                    } else if (45881 <= e && e <= 45907)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 46189) {
                    if (e < 46048) {
                        if (e < 45965) {
                            if (e < 45936) {
                                if (e < 45909) {
                                    if (e === 45908)
                                        return n.CLUSTER_BREAK.LV
                                } else if (45909 <= e && e <= 45935)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 45937) {
                                if (e === 45936)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 45964) {
                                if (45937 <= e && e <= 45963)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 45964)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 45993) {
                            if (e < 45992) {
                                if (45965 <= e && e <= 45991)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 45992)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 46020) {
                            if (45993 <= e && e <= 46019)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 46021) {
                            if (e === 46020)
                                return n.CLUSTER_BREAK.LV
                        } else if (46021 <= e && e <= 46047)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 46105) {
                        if (e < 46076) {
                            if (e < 46049) {
                                if (e === 46048)
                                    return n.CLUSTER_BREAK.LV
                            } else if (46049 <= e && e <= 46075)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 46077) {
                            if (e === 46076)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 46104) {
                            if (46077 <= e && e <= 46103)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 46104)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 46160) {
                        if (e < 46132) {
                            if (46105 <= e && e <= 46131)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 46133) {
                            if (e === 46132)
                                return n.CLUSTER_BREAK.LV
                        } else if (46133 <= e && e <= 46159)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 46161) {
                        if (e === 46160)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 46188) {
                        if (46161 <= e && e <= 46187)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 46188)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 46356) {
                    if (e < 46272) {
                        if (e < 46217) {
                            if (e < 46216) {
                                if (46189 <= e && e <= 46215)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 46216)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 46244) {
                            if (46217 <= e && e <= 46243)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 46245) {
                            if (e === 46244)
                                return n.CLUSTER_BREAK.LV
                        } else if (46245 <= e && e <= 46271)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 46301) {
                        if (e < 46273) {
                            if (e === 46272)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 46300) {
                            if (46273 <= e && e <= 46299)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 46300)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 46328) {
                        if (46301 <= e && e <= 46327)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 46329) {
                        if (e === 46328)
                            return n.CLUSTER_BREAK.LV
                    } else if (46329 <= e && e <= 46355)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 46413) {
                    if (e < 46384) {
                        if (e < 46357) {
                            if (e === 46356)
                                return n.CLUSTER_BREAK.LV
                        } else if (46357 <= e && e <= 46383)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 46385) {
                        if (e === 46384)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 46412) {
                        if (46385 <= e && e <= 46411)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 46412)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 46468) {
                    if (e < 46440) {
                        if (46413 <= e && e <= 46439)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 46441) {
                        if (e === 46440)
                            return n.CLUSTER_BREAK.LV
                    } else if (46441 <= e && e <= 46467)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 46469) {
                    if (e === 46468)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 46496) {
                    if (46469 <= e && e <= 46495)
                        return n.CLUSTER_BREAK.LVT
                } else if (e === 46496)
                    return n.CLUSTER_BREAK.LV
            } else if (e < 47701) {
                if (e < 47112) {
                    if (e < 46804) {
                        if (e < 46637) {
                            if (e < 46580) {
                                if (e < 46525) {
                                    if (e < 46524) {
                                        if (46497 <= e && e <= 46523)
                                            return n.CLUSTER_BREAK.LVT
                                    } else if (e === 46524)
                                        return n.CLUSTER_BREAK.LV
                                } else if (e < 46552) {
                                    if (46525 <= e && e <= 46551)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e < 46553) {
                                    if (e === 46552)
                                        return n.CLUSTER_BREAK.LV
                                } else if (46553 <= e && e <= 46579)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 46608) {
                                if (e < 46581) {
                                    if (e === 46580)
                                        return n.CLUSTER_BREAK.LV
                                } else if (46581 <= e && e <= 46607)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 46609) {
                                if (e === 46608)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 46636) {
                                if (46609 <= e && e <= 46635)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 46636)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 46720) {
                            if (e < 46665) {
                                if (e < 46664) {
                                    if (46637 <= e && e <= 46663)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 46664)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 46692) {
                                if (46665 <= e && e <= 46691)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 46693) {
                                if (e === 46692)
                                    return n.CLUSTER_BREAK.LV
                            } else if (46693 <= e && e <= 46719)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 46749) {
                            if (e < 46721) {
                                if (e === 46720)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 46748) {
                                if (46721 <= e && e <= 46747)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 46748)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 46776) {
                            if (46749 <= e && e <= 46775)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 46777) {
                            if (e === 46776)
                                return n.CLUSTER_BREAK.LV
                        } else if (46777 <= e && e <= 46803)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 46945) {
                        if (e < 46861) {
                            if (e < 46832) {
                                if (e < 46805) {
                                    if (e === 46804)
                                        return n.CLUSTER_BREAK.LV
                                } else if (46805 <= e && e <= 46831)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 46833) {
                                if (e === 46832)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 46860) {
                                if (46833 <= e && e <= 46859)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 46860)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 46916) {
                            if (e < 46888) {
                                if (46861 <= e && e <= 46887)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 46889) {
                                if (e === 46888)
                                    return n.CLUSTER_BREAK.LV
                            } else if (46889 <= e && e <= 46915)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 46917) {
                            if (e === 46916)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 46944) {
                            if (46917 <= e && e <= 46943)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 46944)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 47028) {
                        if (e < 46973) {
                            if (e < 46972) {
                                if (46945 <= e && e <= 46971)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 46972)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 47e3) {
                            if (46973 <= e && e <= 46999)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 47001) {
                            if (e === 47e3)
                                return n.CLUSTER_BREAK.LV
                        } else if (47001 <= e && e <= 47027)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 47057) {
                        if (e < 47029) {
                            if (e === 47028)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 47056) {
                            if (47029 <= e && e <= 47055)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 47056)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 47084) {
                        if (47057 <= e && e <= 47083)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 47085) {
                        if (e === 47084)
                            return n.CLUSTER_BREAK.LV
                    } else if (47085 <= e && e <= 47111)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 47393) {
                    if (e < 47252) {
                        if (e < 47169) {
                            if (e < 47140) {
                                if (e < 47113) {
                                    if (e === 47112)
                                        return n.CLUSTER_BREAK.LV
                                } else if (47113 <= e && e <= 47139)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 47141) {
                                if (e === 47140)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 47168) {
                                if (47141 <= e && e <= 47167)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 47168)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 47197) {
                            if (e < 47196) {
                                if (47169 <= e && e <= 47195)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 47196)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 47224) {
                            if (47197 <= e && e <= 47223)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 47225) {
                            if (e === 47224)
                                return n.CLUSTER_BREAK.LV
                        } else if (47225 <= e && e <= 47251)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 47309) {
                        if (e < 47280) {
                            if (e < 47253) {
                                if (e === 47252)
                                    return n.CLUSTER_BREAK.LV
                            } else if (47253 <= e && e <= 47279)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 47281) {
                            if (e === 47280)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 47308) {
                            if (47281 <= e && e <= 47307)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 47308)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 47364) {
                        if (e < 47336) {
                            if (47309 <= e && e <= 47335)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 47337) {
                            if (e === 47336)
                                return n.CLUSTER_BREAK.LV
                        } else if (47337 <= e && e <= 47363)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 47365) {
                        if (e === 47364)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 47392) {
                        if (47365 <= e && e <= 47391)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 47392)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 47560) {
                    if (e < 47476) {
                        if (e < 47421) {
                            if (e < 47420) {
                                if (47393 <= e && e <= 47419)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 47420)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 47448) {
                            if (47421 <= e && e <= 47447)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 47449) {
                            if (e === 47448)
                                return n.CLUSTER_BREAK.LV
                        } else if (47449 <= e && e <= 47475)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 47505) {
                        if (e < 47477) {
                            if (e === 47476)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 47504) {
                            if (47477 <= e && e <= 47503)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 47504)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 47532) {
                        if (47505 <= e && e <= 47531)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 47533) {
                        if (e === 47532)
                            return n.CLUSTER_BREAK.LV
                    } else if (47533 <= e && e <= 47559)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 47617) {
                    if (e < 47588) {
                        if (e < 47561) {
                            if (e === 47560)
                                return n.CLUSTER_BREAK.LV
                        } else if (47561 <= e && e <= 47587)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 47589) {
                        if (e === 47588)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 47616) {
                        if (47589 <= e && e <= 47615)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 47616)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 47672) {
                    if (e < 47644) {
                        if (47617 <= e && e <= 47643)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 47645) {
                        if (e === 47644)
                            return n.CLUSTER_BREAK.LV
                    } else if (47645 <= e && e <= 47671)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 47673) {
                    if (e === 47672)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 47700) {
                    if (47673 <= e && e <= 47699)
                        return n.CLUSTER_BREAK.LVT
                } else if (e === 47700)
                    return n.CLUSTER_BREAK.LV
            } else if (e < 48316) {
                if (e < 48008) {
                    if (e < 47841) {
                        if (e < 47784) {
                            if (e < 47729) {
                                if (e < 47728) {
                                    if (47701 <= e && e <= 47727)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 47728)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 47756) {
                                if (47729 <= e && e <= 47755)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 47757) {
                                if (e === 47756)
                                    return n.CLUSTER_BREAK.LV
                            } else if (47757 <= e && e <= 47783)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 47812) {
                            if (e < 47785) {
                                if (e === 47784)
                                    return n.CLUSTER_BREAK.LV
                            } else if (47785 <= e && e <= 47811)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 47813) {
                            if (e === 47812)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 47840) {
                            if (47813 <= e && e <= 47839)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 47840)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 47924) {
                        if (e < 47869) {
                            if (e < 47868) {
                                if (47841 <= e && e <= 47867)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 47868)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 47896) {
                            if (47869 <= e && e <= 47895)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 47897) {
                            if (e === 47896)
                                return n.CLUSTER_BREAK.LV
                        } else if (47897 <= e && e <= 47923)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 47953) {
                        if (e < 47925) {
                            if (e === 47924)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 47952) {
                            if (47925 <= e && e <= 47951)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 47952)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 47980) {
                        if (47953 <= e && e <= 47979)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 47981) {
                        if (e === 47980)
                            return n.CLUSTER_BREAK.LV
                    } else if (47981 <= e && e <= 48007)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 48149) {
                    if (e < 48065) {
                        if (e < 48036) {
                            if (e < 48009) {
                                if (e === 48008)
                                    return n.CLUSTER_BREAK.LV
                            } else if (48009 <= e && e <= 48035)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 48037) {
                            if (e === 48036)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 48064) {
                            if (48037 <= e && e <= 48063)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 48064)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 48120) {
                        if (e < 48092) {
                            if (48065 <= e && e <= 48091)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 48093) {
                            if (e === 48092)
                                return n.CLUSTER_BREAK.LV
                        } else if (48093 <= e && e <= 48119)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 48121) {
                        if (e === 48120)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 48148) {
                        if (48121 <= e && e <= 48147)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 48148)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 48232) {
                    if (e < 48177) {
                        if (e < 48176) {
                            if (48149 <= e && e <= 48175)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 48176)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 48204) {
                        if (48177 <= e && e <= 48203)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 48205) {
                        if (e === 48204)
                            return n.CLUSTER_BREAK.LV
                    } else if (48205 <= e && e <= 48231)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 48261) {
                    if (e < 48233) {
                        if (e === 48232)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 48260) {
                        if (48233 <= e && e <= 48259)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 48260)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 48288) {
                    if (48261 <= e && e <= 48287)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 48289) {
                    if (e === 48288)
                        return n.CLUSTER_BREAK.LV
                } else if (48289 <= e && e <= 48315)
                    return n.CLUSTER_BREAK.LVT
            } else if (e < 48597) {
                if (e < 48456) {
                    if (e < 48373) {
                        if (e < 48344) {
                            if (e < 48317) {
                                if (e === 48316)
                                    return n.CLUSTER_BREAK.LV
                            } else if (48317 <= e && e <= 48343)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 48345) {
                            if (e === 48344)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 48372) {
                            if (48345 <= e && e <= 48371)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 48372)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 48401) {
                        if (e < 48400) {
                            if (48373 <= e && e <= 48399)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 48400)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 48428) {
                        if (48401 <= e && e <= 48427)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 48429) {
                        if (e === 48428)
                            return n.CLUSTER_BREAK.LV
                    } else if (48429 <= e && e <= 48455)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 48513) {
                    if (e < 48484) {
                        if (e < 48457) {
                            if (e === 48456)
                                return n.CLUSTER_BREAK.LV
                        } else if (48457 <= e && e <= 48483)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 48485) {
                        if (e === 48484)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 48512) {
                        if (48485 <= e && e <= 48511)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 48512)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 48568) {
                    if (e < 48540) {
                        if (48513 <= e && e <= 48539)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 48541) {
                        if (e === 48540)
                            return n.CLUSTER_BREAK.LV
                    } else if (48541 <= e && e <= 48567)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 48569) {
                    if (e === 48568)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 48596) {
                    if (48569 <= e && e <= 48595)
                        return n.CLUSTER_BREAK.LVT
                } else if (e === 48596)
                    return n.CLUSTER_BREAK.LV
            } else if (e < 48764) {
                if (e < 48680) {
                    if (e < 48625) {
                        if (e < 48624) {
                            if (48597 <= e && e <= 48623)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 48624)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 48652) {
                        if (48625 <= e && e <= 48651)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 48653) {
                        if (e === 48652)
                            return n.CLUSTER_BREAK.LV
                    } else if (48653 <= e && e <= 48679)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 48709) {
                    if (e < 48681) {
                        if (e === 48680)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 48708) {
                        if (48681 <= e && e <= 48707)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 48708)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 48736) {
                    if (48709 <= e && e <= 48735)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 48737) {
                    if (e === 48736)
                        return n.CLUSTER_BREAK.LV
                } else if (48737 <= e && e <= 48763)
                    return n.CLUSTER_BREAK.LVT
            } else if (e < 48821) {
                if (e < 48792) {
                    if (e < 48765) {
                        if (e === 48764)
                            return n.CLUSTER_BREAK.LV
                    } else if (48765 <= e && e <= 48791)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 48793) {
                    if (e === 48792)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 48820) {
                    if (48793 <= e && e <= 48819)
                        return n.CLUSTER_BREAK.LVT
                } else if (e === 48820)
                    return n.CLUSTER_BREAK.LV
            } else if (e < 48876) {
                if (e < 48848) {
                    if (48821 <= e && e <= 48847)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 48849) {
                    if (e === 48848)
                        return n.CLUSTER_BREAK.LV
                } else if (48849 <= e && e <= 48875)
                    return n.CLUSTER_BREAK.LVT
            } else if (e < 48877) {
                if (e === 48876)
                    return n.CLUSTER_BREAK.LV
            } else if (e < 48904) {
                if (48877 <= e && e <= 48903)
                    return n.CLUSTER_BREAK.LVT
            } else if (e === 48904)
                return n.CLUSTER_BREAK.LV
        } else if (e < 53720) {
            if (e < 51312) {
                if (e < 50108) {
                    if (e < 49493) {
                        if (e < 49212) {
                            if (e < 49045) {
                                if (e < 48988) {
                                    if (e < 48933) {
                                        if (e < 48932) {
                                            if (48905 <= e && e <= 48931)
                                                return n.CLUSTER_BREAK.LVT
                                        } else if (e === 48932)
                                            return n.CLUSTER_BREAK.LV
                                    } else if (e < 48960) {
                                        if (48933 <= e && e <= 48959)
                                            return n.CLUSTER_BREAK.LVT
                                    } else if (e < 48961) {
                                        if (e === 48960)
                                            return n.CLUSTER_BREAK.LV
                                    } else if (48961 <= e && e <= 48987)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e < 49016) {
                                    if (e < 48989) {
                                        if (e === 48988)
                                            return n.CLUSTER_BREAK.LV
                                    } else if (48989 <= e && e <= 49015)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e < 49017) {
                                    if (e === 49016)
                                        return n.CLUSTER_BREAK.LV
                                } else if (e < 49044) {
                                    if (49017 <= e && e <= 49043)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 49044)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 49128) {
                                if (e < 49073) {
                                    if (e < 49072) {
                                        if (49045 <= e && e <= 49071)
                                            return n.CLUSTER_BREAK.LVT
                                    } else if (e === 49072)
                                        return n.CLUSTER_BREAK.LV
                                } else if (e < 49100) {
                                    if (49073 <= e && e <= 49099)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e < 49101) {
                                    if (e === 49100)
                                        return n.CLUSTER_BREAK.LV
                                } else if (49101 <= e && e <= 49127)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 49157) {
                                if (e < 49129) {
                                    if (e === 49128)
                                        return n.CLUSTER_BREAK.LV
                                } else if (e < 49156) {
                                    if (49129 <= e && e <= 49155)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 49156)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 49184) {
                                if (49157 <= e && e <= 49183)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 49185) {
                                if (e === 49184)
                                    return n.CLUSTER_BREAK.LV
                            } else if (49185 <= e && e <= 49211)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 49352) {
                            if (e < 49269) {
                                if (e < 49240) {
                                    if (e < 49213) {
                                        if (e === 49212)
                                            return n.CLUSTER_BREAK.LV
                                    } else if (49213 <= e && e <= 49239)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e < 49241) {
                                    if (e === 49240)
                                        return n.CLUSTER_BREAK.LV
                                } else if (e < 49268) {
                                    if (49241 <= e && e <= 49267)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 49268)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 49297) {
                                if (e < 49296) {
                                    if (49269 <= e && e <= 49295)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 49296)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 49324) {
                                if (49297 <= e && e <= 49323)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 49325) {
                                if (e === 49324)
                                    return n.CLUSTER_BREAK.LV
                            } else if (49325 <= e && e <= 49351)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 49409) {
                            if (e < 49380) {
                                if (e < 49353) {
                                    if (e === 49352)
                                        return n.CLUSTER_BREAK.LV
                                } else if (49353 <= e && e <= 49379)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 49381) {
                                if (e === 49380)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 49408) {
                                if (49381 <= e && e <= 49407)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 49408)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 49464) {
                            if (e < 49436) {
                                if (49409 <= e && e <= 49435)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 49437) {
                                if (e === 49436)
                                    return n.CLUSTER_BREAK.LV
                            } else if (49437 <= e && e <= 49463)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 49465) {
                            if (e === 49464)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 49492) {
                            if (49465 <= e && e <= 49491)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 49492)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 49800) {
                        if (e < 49633) {
                            if (e < 49576) {
                                if (e < 49521) {
                                    if (e < 49520) {
                                        if (49493 <= e && e <= 49519)
                                            return n.CLUSTER_BREAK.LVT
                                    } else if (e === 49520)
                                        return n.CLUSTER_BREAK.LV
                                } else if (e < 49548) {
                                    if (49521 <= e && e <= 49547)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e < 49549) {
                                    if (e === 49548)
                                        return n.CLUSTER_BREAK.LV
                                } else if (49549 <= e && e <= 49575)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 49604) {
                                if (e < 49577) {
                                    if (e === 49576)
                                        return n.CLUSTER_BREAK.LV
                                } else if (49577 <= e && e <= 49603)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 49605) {
                                if (e === 49604)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 49632) {
                                if (49605 <= e && e <= 49631)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 49632)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 49716) {
                            if (e < 49661) {
                                if (e < 49660) {
                                    if (49633 <= e && e <= 49659)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 49660)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 49688) {
                                if (49661 <= e && e <= 49687)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 49689) {
                                if (e === 49688)
                                    return n.CLUSTER_BREAK.LV
                            } else if (49689 <= e && e <= 49715)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 49745) {
                            if (e < 49717) {
                                if (e === 49716)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 49744) {
                                if (49717 <= e && e <= 49743)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 49744)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 49772) {
                            if (49745 <= e && e <= 49771)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 49773) {
                            if (e === 49772)
                                return n.CLUSTER_BREAK.LV
                        } else if (49773 <= e && e <= 49799)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 49941) {
                        if (e < 49857) {
                            if (e < 49828) {
                                if (e < 49801) {
                                    if (e === 49800)
                                        return n.CLUSTER_BREAK.LV
                                } else if (49801 <= e && e <= 49827)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 49829) {
                                if (e === 49828)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 49856) {
                                if (49829 <= e && e <= 49855)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 49856)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 49912) {
                            if (e < 49884) {
                                if (49857 <= e && e <= 49883)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 49885) {
                                if (e === 49884)
                                    return n.CLUSTER_BREAK.LV
                            } else if (49885 <= e && e <= 49911)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 49913) {
                            if (e === 49912)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 49940) {
                            if (49913 <= e && e <= 49939)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 49940)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 50024) {
                        if (e < 49969) {
                            if (e < 49968) {
                                if (49941 <= e && e <= 49967)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 49968)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 49996) {
                            if (49969 <= e && e <= 49995)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 49997) {
                            if (e === 49996)
                                return n.CLUSTER_BREAK.LV
                        } else if (49997 <= e && e <= 50023)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 50053) {
                        if (e < 50025) {
                            if (e === 50024)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 50052) {
                            if (50025 <= e && e <= 50051)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 50052)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 50080) {
                        if (50053 <= e && e <= 50079)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 50081) {
                        if (e === 50080)
                            return n.CLUSTER_BREAK.LV
                    } else if (50081 <= e && e <= 50107)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 50697) {
                    if (e < 50389) {
                        if (e < 50248) {
                            if (e < 50165) {
                                if (e < 50136) {
                                    if (e < 50109) {
                                        if (e === 50108)
                                            return n.CLUSTER_BREAK.LV
                                    } else if (50109 <= e && e <= 50135)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e < 50137) {
                                    if (e === 50136)
                                        return n.CLUSTER_BREAK.LV
                                } else if (e < 50164) {
                                    if (50137 <= e && e <= 50163)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 50164)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 50193) {
                                if (e < 50192) {
                                    if (50165 <= e && e <= 50191)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 50192)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 50220) {
                                if (50193 <= e && e <= 50219)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 50221) {
                                if (e === 50220)
                                    return n.CLUSTER_BREAK.LV
                            } else if (50221 <= e && e <= 50247)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 50305) {
                            if (e < 50276) {
                                if (e < 50249) {
                                    if (e === 50248)
                                        return n.CLUSTER_BREAK.LV
                                } else if (50249 <= e && e <= 50275)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 50277) {
                                if (e === 50276)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 50304) {
                                if (50277 <= e && e <= 50303)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 50304)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 50360) {
                            if (e < 50332) {
                                if (50305 <= e && e <= 50331)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 50333) {
                                if (e === 50332)
                                    return n.CLUSTER_BREAK.LV
                            } else if (50333 <= e && e <= 50359)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 50361) {
                            if (e === 50360)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 50388) {
                            if (50361 <= e && e <= 50387)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 50388)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 50556) {
                        if (e < 50472) {
                            if (e < 50417) {
                                if (e < 50416) {
                                    if (50389 <= e && e <= 50415)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 50416)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 50444) {
                                if (50417 <= e && e <= 50443)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 50445) {
                                if (e === 50444)
                                    return n.CLUSTER_BREAK.LV
                            } else if (50445 <= e && e <= 50471)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 50501) {
                            if (e < 50473) {
                                if (e === 50472)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 50500) {
                                if (50473 <= e && e <= 50499)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 50500)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 50528) {
                            if (50501 <= e && e <= 50527)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 50529) {
                            if (e === 50528)
                                return n.CLUSTER_BREAK.LV
                        } else if (50529 <= e && e <= 50555)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 50613) {
                        if (e < 50584) {
                            if (e < 50557) {
                                if (e === 50556)
                                    return n.CLUSTER_BREAK.LV
                            } else if (50557 <= e && e <= 50583)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 50585) {
                            if (e === 50584)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 50612) {
                            if (50585 <= e && e <= 50611)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 50612)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 50668) {
                        if (e < 50640) {
                            if (50613 <= e && e <= 50639)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 50641) {
                            if (e === 50640)
                                return n.CLUSTER_BREAK.LV
                        } else if (50641 <= e && e <= 50667)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 50669) {
                        if (e === 50668)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 50696) {
                        if (50669 <= e && e <= 50695)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 50696)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 51004) {
                    if (e < 50837) {
                        if (e < 50780) {
                            if (e < 50725) {
                                if (e < 50724) {
                                    if (50697 <= e && e <= 50723)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 50724)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 50752) {
                                if (50725 <= e && e <= 50751)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 50753) {
                                if (e === 50752)
                                    return n.CLUSTER_BREAK.LV
                            } else if (50753 <= e && e <= 50779)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 50808) {
                            if (e < 50781) {
                                if (e === 50780)
                                    return n.CLUSTER_BREAK.LV
                            } else if (50781 <= e && e <= 50807)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 50809) {
                            if (e === 50808)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 50836) {
                            if (50809 <= e && e <= 50835)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 50836)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 50920) {
                        if (e < 50865) {
                            if (e < 50864) {
                                if (50837 <= e && e <= 50863)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 50864)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 50892) {
                            if (50865 <= e && e <= 50891)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 50893) {
                            if (e === 50892)
                                return n.CLUSTER_BREAK.LV
                        } else if (50893 <= e && e <= 50919)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 50949) {
                        if (e < 50921) {
                            if (e === 50920)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 50948) {
                            if (50921 <= e && e <= 50947)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 50948)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 50976) {
                        if (50949 <= e && e <= 50975)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 50977) {
                        if (e === 50976)
                            return n.CLUSTER_BREAK.LV
                    } else if (50977 <= e && e <= 51003)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 51145) {
                    if (e < 51061) {
                        if (e < 51032) {
                            if (e < 51005) {
                                if (e === 51004)
                                    return n.CLUSTER_BREAK.LV
                            } else if (51005 <= e && e <= 51031)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 51033) {
                            if (e === 51032)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 51060) {
                            if (51033 <= e && e <= 51059)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 51060)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 51116) {
                        if (e < 51088) {
                            if (51061 <= e && e <= 51087)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 51089) {
                            if (e === 51088)
                                return n.CLUSTER_BREAK.LV
                        } else if (51089 <= e && e <= 51115)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 51117) {
                        if (e === 51116)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 51144) {
                        if (51117 <= e && e <= 51143)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 51144)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 51228) {
                    if (e < 51173) {
                        if (e < 51172) {
                            if (51145 <= e && e <= 51171)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 51172)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 51200) {
                        if (51173 <= e && e <= 51199)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 51201) {
                        if (e === 51200)
                            return n.CLUSTER_BREAK.LV
                    } else if (51201 <= e && e <= 51227)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 51257) {
                    if (e < 51229) {
                        if (e === 51228)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 51256) {
                        if (51229 <= e && e <= 51255)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 51256)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 51284) {
                    if (51257 <= e && e <= 51283)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 51285) {
                    if (e === 51284)
                        return n.CLUSTER_BREAK.LV
                } else if (51285 <= e && e <= 51311)
                    return n.CLUSTER_BREAK.LVT
            } else if (e < 52516) {
                if (e < 51901) {
                    if (e < 51593) {
                        if (e < 51452) {
                            if (e < 51369) {
                                if (e < 51340) {
                                    if (e < 51313) {
                                        if (e === 51312)
                                            return n.CLUSTER_BREAK.LV
                                    } else if (51313 <= e && e <= 51339)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e < 51341) {
                                    if (e === 51340)
                                        return n.CLUSTER_BREAK.LV
                                } else if (e < 51368) {
                                    if (51341 <= e && e <= 51367)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 51368)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 51397) {
                                if (e < 51396) {
                                    if (51369 <= e && e <= 51395)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 51396)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 51424) {
                                if (51397 <= e && e <= 51423)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 51425) {
                                if (e === 51424)
                                    return n.CLUSTER_BREAK.LV
                            } else if (51425 <= e && e <= 51451)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 51509) {
                            if (e < 51480) {
                                if (e < 51453) {
                                    if (e === 51452)
                                        return n.CLUSTER_BREAK.LV
                                } else if (51453 <= e && e <= 51479)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 51481) {
                                if (e === 51480)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 51508) {
                                if (51481 <= e && e <= 51507)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 51508)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 51564) {
                            if (e < 51536) {
                                if (51509 <= e && e <= 51535)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 51537) {
                                if (e === 51536)
                                    return n.CLUSTER_BREAK.LV
                            } else if (51537 <= e && e <= 51563)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 51565) {
                            if (e === 51564)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 51592) {
                            if (51565 <= e && e <= 51591)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 51592)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 51760) {
                        if (e < 51676) {
                            if (e < 51621) {
                                if (e < 51620) {
                                    if (51593 <= e && e <= 51619)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 51620)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 51648) {
                                if (51621 <= e && e <= 51647)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 51649) {
                                if (e === 51648)
                                    return n.CLUSTER_BREAK.LV
                            } else if (51649 <= e && e <= 51675)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 51705) {
                            if (e < 51677) {
                                if (e === 51676)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 51704) {
                                if (51677 <= e && e <= 51703)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 51704)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 51732) {
                            if (51705 <= e && e <= 51731)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 51733) {
                            if (e === 51732)
                                return n.CLUSTER_BREAK.LV
                        } else if (51733 <= e && e <= 51759)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 51817) {
                        if (e < 51788) {
                            if (e < 51761) {
                                if (e === 51760)
                                    return n.CLUSTER_BREAK.LV
                            } else if (51761 <= e && e <= 51787)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 51789) {
                            if (e === 51788)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 51816) {
                            if (51789 <= e && e <= 51815)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 51816)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 51872) {
                        if (e < 51844) {
                            if (51817 <= e && e <= 51843)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 51845) {
                            if (e === 51844)
                                return n.CLUSTER_BREAK.LV
                        } else if (51845 <= e && e <= 51871)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 51873) {
                        if (e === 51872)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 51900) {
                        if (51873 <= e && e <= 51899)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 51900)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 52208) {
                    if (e < 52041) {
                        if (e < 51984) {
                            if (e < 51929) {
                                if (e < 51928) {
                                    if (51901 <= e && e <= 51927)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 51928)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 51956) {
                                if (51929 <= e && e <= 51955)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 51957) {
                                if (e === 51956)
                                    return n.CLUSTER_BREAK.LV
                            } else if (51957 <= e && e <= 51983)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 52012) {
                            if (e < 51985) {
                                if (e === 51984)
                                    return n.CLUSTER_BREAK.LV
                            } else if (51985 <= e && e <= 52011)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 52013) {
                            if (e === 52012)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 52040) {
                            if (52013 <= e && e <= 52039)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 52040)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 52124) {
                        if (e < 52069) {
                            if (e < 52068) {
                                if (52041 <= e && e <= 52067)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 52068)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 52096) {
                            if (52069 <= e && e <= 52095)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 52097) {
                            if (e === 52096)
                                return n.CLUSTER_BREAK.LV
                        } else if (52097 <= e && e <= 52123)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 52153) {
                        if (e < 52125) {
                            if (e === 52124)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 52152) {
                            if (52125 <= e && e <= 52151)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 52152)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 52180) {
                        if (52153 <= e && e <= 52179)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 52181) {
                        if (e === 52180)
                            return n.CLUSTER_BREAK.LV
                    } else if (52181 <= e && e <= 52207)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 52349) {
                    if (e < 52265) {
                        if (e < 52236) {
                            if (e < 52209) {
                                if (e === 52208)
                                    return n.CLUSTER_BREAK.LV
                            } else if (52209 <= e && e <= 52235)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 52237) {
                            if (e === 52236)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 52264) {
                            if (52237 <= e && e <= 52263)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 52264)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 52320) {
                        if (e < 52292) {
                            if (52265 <= e && e <= 52291)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 52293) {
                            if (e === 52292)
                                return n.CLUSTER_BREAK.LV
                        } else if (52293 <= e && e <= 52319)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 52321) {
                        if (e === 52320)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 52348) {
                        if (52321 <= e && e <= 52347)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 52348)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 52432) {
                    if (e < 52377) {
                        if (e < 52376) {
                            if (52349 <= e && e <= 52375)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 52376)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 52404) {
                        if (52377 <= e && e <= 52403)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 52405) {
                        if (e === 52404)
                            return n.CLUSTER_BREAK.LV
                    } else if (52405 <= e && e <= 52431)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 52461) {
                    if (e < 52433) {
                        if (e === 52432)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 52460) {
                        if (52433 <= e && e <= 52459)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 52460)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 52488) {
                    if (52461 <= e && e <= 52487)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 52489) {
                    if (e === 52488)
                        return n.CLUSTER_BREAK.LV
                } else if (52489 <= e && e <= 52515)
                    return n.CLUSTER_BREAK.LVT
            } else if (e < 53105) {
                if (e < 52797) {
                    if (e < 52656) {
                        if (e < 52573) {
                            if (e < 52544) {
                                if (e < 52517) {
                                    if (e === 52516)
                                        return n.CLUSTER_BREAK.LV
                                } else if (52517 <= e && e <= 52543)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 52545) {
                                if (e === 52544)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 52572) {
                                if (52545 <= e && e <= 52571)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 52572)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 52601) {
                            if (e < 52600) {
                                if (52573 <= e && e <= 52599)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 52600)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 52628) {
                            if (52601 <= e && e <= 52627)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 52629) {
                            if (e === 52628)
                                return n.CLUSTER_BREAK.LV
                        } else if (52629 <= e && e <= 52655)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 52713) {
                        if (e < 52684) {
                            if (e < 52657) {
                                if (e === 52656)
                                    return n.CLUSTER_BREAK.LV
                            } else if (52657 <= e && e <= 52683)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 52685) {
                            if (e === 52684)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 52712) {
                            if (52685 <= e && e <= 52711)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 52712)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 52768) {
                        if (e < 52740) {
                            if (52713 <= e && e <= 52739)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 52741) {
                            if (e === 52740)
                                return n.CLUSTER_BREAK.LV
                        } else if (52741 <= e && e <= 52767)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 52769) {
                        if (e === 52768)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 52796) {
                        if (52769 <= e && e <= 52795)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 52796)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 52964) {
                    if (e < 52880) {
                        if (e < 52825) {
                            if (e < 52824) {
                                if (52797 <= e && e <= 52823)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 52824)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 52852) {
                            if (52825 <= e && e <= 52851)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 52853) {
                            if (e === 52852)
                                return n.CLUSTER_BREAK.LV
                        } else if (52853 <= e && e <= 52879)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 52909) {
                        if (e < 52881) {
                            if (e === 52880)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 52908) {
                            if (52881 <= e && e <= 52907)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 52908)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 52936) {
                        if (52909 <= e && e <= 52935)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 52937) {
                        if (e === 52936)
                            return n.CLUSTER_BREAK.LV
                    } else if (52937 <= e && e <= 52963)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 53021) {
                    if (e < 52992) {
                        if (e < 52965) {
                            if (e === 52964)
                                return n.CLUSTER_BREAK.LV
                        } else if (52965 <= e && e <= 52991)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 52993) {
                        if (e === 52992)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 53020) {
                        if (52993 <= e && e <= 53019)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 53020)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 53076) {
                    if (e < 53048) {
                        if (53021 <= e && e <= 53047)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 53049) {
                        if (e === 53048)
                            return n.CLUSTER_BREAK.LV
                    } else if (53049 <= e && e <= 53075)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 53077) {
                    if (e === 53076)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 53104) {
                    if (53077 <= e && e <= 53103)
                        return n.CLUSTER_BREAK.LVT
                } else if (e === 53104)
                    return n.CLUSTER_BREAK.LV
            } else if (e < 53412) {
                if (e < 53245) {
                    if (e < 53188) {
                        if (e < 53133) {
                            if (e < 53132) {
                                if (53105 <= e && e <= 53131)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 53132)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 53160) {
                            if (53133 <= e && e <= 53159)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 53161) {
                            if (e === 53160)
                                return n.CLUSTER_BREAK.LV
                        } else if (53161 <= e && e <= 53187)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 53216) {
                        if (e < 53189) {
                            if (e === 53188)
                                return n.CLUSTER_BREAK.LV
                        } else if (53189 <= e && e <= 53215)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 53217) {
                        if (e === 53216)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 53244) {
                        if (53217 <= e && e <= 53243)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 53244)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 53328) {
                    if (e < 53273) {
                        if (e < 53272) {
                            if (53245 <= e && e <= 53271)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 53272)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 53300) {
                        if (53273 <= e && e <= 53299)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 53301) {
                        if (e === 53300)
                            return n.CLUSTER_BREAK.LV
                    } else if (53301 <= e && e <= 53327)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 53357) {
                    if (e < 53329) {
                        if (e === 53328)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 53356) {
                        if (53329 <= e && e <= 53355)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 53356)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 53384) {
                    if (53357 <= e && e <= 53383)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 53385) {
                    if (e === 53384)
                        return n.CLUSTER_BREAK.LV
                } else if (53385 <= e && e <= 53411)
                    return n.CLUSTER_BREAK.LVT
            } else if (e < 53553) {
                if (e < 53469) {
                    if (e < 53440) {
                        if (e < 53413) {
                            if (e === 53412)
                                return n.CLUSTER_BREAK.LV
                        } else if (53413 <= e && e <= 53439)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 53441) {
                        if (e === 53440)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 53468) {
                        if (53441 <= e && e <= 53467)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 53468)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 53524) {
                    if (e < 53496) {
                        if (53469 <= e && e <= 53495)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 53497) {
                        if (e === 53496)
                            return n.CLUSTER_BREAK.LV
                    } else if (53497 <= e && e <= 53523)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 53525) {
                    if (e === 53524)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 53552) {
                    if (53525 <= e && e <= 53551)
                        return n.CLUSTER_BREAK.LVT
                } else if (e === 53552)
                    return n.CLUSTER_BREAK.LV
            } else if (e < 53636) {
                if (e < 53581) {
                    if (e < 53580) {
                        if (53553 <= e && e <= 53579)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 53580)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 53608) {
                    if (53581 <= e && e <= 53607)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 53609) {
                    if (e === 53608)
                        return n.CLUSTER_BREAK.LV
                } else if (53609 <= e && e <= 53635)
                    return n.CLUSTER_BREAK.LVT
            } else if (e < 53665) {
                if (e < 53637) {
                    if (e === 53636)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 53664) {
                    if (53637 <= e && e <= 53663)
                        return n.CLUSTER_BREAK.LVT
                } else if (e === 53664)
                    return n.CLUSTER_BREAK.LV
            } else if (e < 53692) {
                if (53665 <= e && e <= 53691)
                    return n.CLUSTER_BREAK.LVT
            } else if (e < 53693) {
                if (e === 53692)
                    return n.CLUSTER_BREAK.LV
            } else if (53693 <= e && e <= 53719)
                return n.CLUSTER_BREAK.LVT
        } else if (e < 70459) {
            if (e < 54897) {
                if (e < 54308) {
                    if (e < 54001) {
                        if (e < 53860) {
                            if (e < 53777) {
                                if (e < 53748) {
                                    if (e < 53721) {
                                        if (e === 53720)
                                            return n.CLUSTER_BREAK.LV
                                    } else if (53721 <= e && e <= 53747)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e < 53749) {
                                    if (e === 53748)
                                        return n.CLUSTER_BREAK.LV
                                } else if (e < 53776) {
                                    if (53749 <= e && e <= 53775)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 53776)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 53805) {
                                if (e < 53804) {
                                    if (53777 <= e && e <= 53803)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 53804)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 53832) {
                                if (53805 <= e && e <= 53831)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 53833) {
                                if (e === 53832)
                                    return n.CLUSTER_BREAK.LV
                            } else if (53833 <= e && e <= 53859)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 53917) {
                            if (e < 53888) {
                                if (e < 53861) {
                                    if (e === 53860)
                                        return n.CLUSTER_BREAK.LV
                                } else if (53861 <= e && e <= 53887)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 53889) {
                                if (e === 53888)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 53916) {
                                if (53889 <= e && e <= 53915)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 53916)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 53972) {
                            if (e < 53944) {
                                if (53917 <= e && e <= 53943)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 53945) {
                                if (e === 53944)
                                    return n.CLUSTER_BREAK.LV
                            } else if (53945 <= e && e <= 53971)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 53973) {
                            if (e === 53972)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 54e3) {
                            if (53973 <= e && e <= 53999)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 54e3)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 54141) {
                        if (e < 54084) {
                            if (e < 54029) {
                                if (e < 54028) {
                                    if (54001 <= e && e <= 54027)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 54028)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 54056) {
                                if (54029 <= e && e <= 54055)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 54057) {
                                if (e === 54056)
                                    return n.CLUSTER_BREAK.LV
                            } else if (54057 <= e && e <= 54083)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 54112) {
                            if (e < 54085) {
                                if (e === 54084)
                                    return n.CLUSTER_BREAK.LV
                            } else if (54085 <= e && e <= 54111)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 54113) {
                            if (e === 54112)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 54140) {
                            if (54113 <= e && e <= 54139)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 54140)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 54224) {
                        if (e < 54169) {
                            if (e < 54168) {
                                if (54141 <= e && e <= 54167)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 54168)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 54196) {
                            if (54169 <= e && e <= 54195)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 54197) {
                            if (e === 54196)
                                return n.CLUSTER_BREAK.LV
                        } else if (54197 <= e && e <= 54223)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 54253) {
                        if (e < 54225) {
                            if (e === 54224)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 54252) {
                            if (54225 <= e && e <= 54251)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 54252)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 54280) {
                        if (54253 <= e && e <= 54279)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 54281) {
                        if (e === 54280)
                            return n.CLUSTER_BREAK.LV
                    } else if (54281 <= e && e <= 54307)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 54589) {
                    if (e < 54448) {
                        if (e < 54365) {
                            if (e < 54336) {
                                if (e < 54309) {
                                    if (e === 54308)
                                        return n.CLUSTER_BREAK.LV
                                } else if (54309 <= e && e <= 54335)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 54337) {
                                if (e === 54336)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 54364) {
                                if (54337 <= e && e <= 54363)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 54364)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 54393) {
                            if (e < 54392) {
                                if (54365 <= e && e <= 54391)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 54392)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 54420) {
                            if (54393 <= e && e <= 54419)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 54421) {
                            if (e === 54420)
                                return n.CLUSTER_BREAK.LV
                        } else if (54421 <= e && e <= 54447)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 54505) {
                        if (e < 54476) {
                            if (e < 54449) {
                                if (e === 54448)
                                    return n.CLUSTER_BREAK.LV
                            } else if (54449 <= e && e <= 54475)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 54477) {
                            if (e === 54476)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 54504) {
                            if (54477 <= e && e <= 54503)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 54504)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 54560) {
                        if (e < 54532) {
                            if (54505 <= e && e <= 54531)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 54533) {
                            if (e === 54532)
                                return n.CLUSTER_BREAK.LV
                        } else if (54533 <= e && e <= 54559)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 54561) {
                        if (e === 54560)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 54588) {
                        if (54561 <= e && e <= 54587)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 54588)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 54756) {
                    if (e < 54672) {
                        if (e < 54617) {
                            if (e < 54616) {
                                if (54589 <= e && e <= 54615)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 54616)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 54644) {
                            if (54617 <= e && e <= 54643)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 54645) {
                            if (e === 54644)
                                return n.CLUSTER_BREAK.LV
                        } else if (54645 <= e && e <= 54671)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 54701) {
                        if (e < 54673) {
                            if (e === 54672)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 54700) {
                            if (54673 <= e && e <= 54699)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 54700)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 54728) {
                        if (54701 <= e && e <= 54727)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 54729) {
                        if (e === 54728)
                            return n.CLUSTER_BREAK.LV
                    } else if (54729 <= e && e <= 54755)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 54813) {
                    if (e < 54784) {
                        if (e < 54757) {
                            if (e === 54756)
                                return n.CLUSTER_BREAK.LV
                        } else if (54757 <= e && e <= 54783)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 54785) {
                        if (e === 54784)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 54812) {
                        if (54785 <= e && e <= 54811)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e === 54812)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 54868) {
                    if (e < 54840) {
                        if (54813 <= e && e <= 54839)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 54841) {
                        if (e === 54840)
                            return n.CLUSTER_BREAK.LV
                    } else if (54841 <= e && e <= 54867)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 54869) {
                    if (e === 54868)
                        return n.CLUSTER_BREAK.LV
                } else if (e < 54896) {
                    if (54869 <= e && e <= 54895)
                        return n.CLUSTER_BREAK.LVT
                } else if (e === 54896)
                    return n.CLUSTER_BREAK.LV
            } else if (e < 69632) {
                if (e < 55216) {
                    if (e < 55037) {
                        if (e < 54980) {
                            if (e < 54925) {
                                if (e < 54924) {
                                    if (54897 <= e && e <= 54923)
                                        return n.CLUSTER_BREAK.LVT
                                } else if (e === 54924)
                                    return n.CLUSTER_BREAK.LV
                            } else if (e < 54952) {
                                if (54925 <= e && e <= 54951)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e < 54953) {
                                if (e === 54952)
                                    return n.CLUSTER_BREAK.LV
                            } else if (54953 <= e && e <= 54979)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 55008) {
                            if (e < 54981) {
                                if (e === 54980)
                                    return n.CLUSTER_BREAK.LV
                            } else if (54981 <= e && e <= 55007)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 55009) {
                            if (e === 55008)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 55036) {
                            if (55009 <= e && e <= 55035)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 55036)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 55120) {
                        if (e < 55065) {
                            if (e < 55064) {
                                if (55037 <= e && e <= 55063)
                                    return n.CLUSTER_BREAK.LVT
                            } else if (e === 55064)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 55092) {
                            if (55065 <= e && e <= 55091)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e < 55093) {
                            if (e === 55092)
                                return n.CLUSTER_BREAK.LV
                        } else if (55093 <= e && e <= 55119)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 55149) {
                        if (e < 55121) {
                            if (e === 55120)
                                return n.CLUSTER_BREAK.LV
                        } else if (e < 55148) {
                            if (55121 <= e && e <= 55147)
                                return n.CLUSTER_BREAK.LVT
                        } else if (e === 55148)
                            return n.CLUSTER_BREAK.LV
                    } else if (e < 55176) {
                        if (55149 <= e && e <= 55175)
                            return n.CLUSTER_BREAK.LVT
                    } else if (e < 55177) {
                        if (e === 55176)
                            return n.CLUSTER_BREAK.LV
                    } else if (55177 <= e && e <= 55203)
                        return n.CLUSTER_BREAK.LVT
                } else if (e < 68097) {
                    if (e < 65279) {
                        if (e < 64286) {
                            if (e < 55243) {
                                if (55216 <= e && e <= 55238)
                                    return n.CLUSTER_BREAK.V
                            } else if (55243 <= e && e <= 55291)
                                return n.CLUSTER_BREAK.T
                        } else if (e < 65024) {
                            if (e === 64286)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 65056) {
                            if (65024 <= e && e <= 65039)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (65056 <= e && e <= 65071)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 66045) {
                        if (e < 65438) {
                            if (e === 65279)
                                return n.CLUSTER_BREAK.CONTROL
                        } else if (e < 65520) {
                            if (65438 <= e && e <= 65439)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (65520 <= e && e <= 65531)
                            return n.CLUSTER_BREAK.CONTROL
                    } else if (e < 66272) {
                        if (e === 66045)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 66422) {
                        if (e === 66272)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (66422 <= e && e <= 66426)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 68325) {
                    if (e < 68108) {
                        if (e < 68101) {
                            if (68097 <= e && e <= 68099)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (68101 <= e && e <= 68102)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 68152) {
                        if (68108 <= e && e <= 68111)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 68159) {
                        if (68152 <= e && e <= 68154)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e === 68159)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 69373) {
                    if (e < 68900) {
                        if (68325 <= e && e <= 68326)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 69291) {
                        if (68900 <= e && e <= 68903)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (69291 <= e && e <= 69292)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 69446) {
                    if (69373 <= e && e <= 69375)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 69506) {
                    if (69446 <= e && e <= 69456)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (69506 <= e && e <= 69509)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 70016) {
                if (e < 69815) {
                    if (e < 69747) {
                        if (e < 69634) {
                            if (e === 69632)
                                return n.CLUSTER_BREAK.SPACINGMARK;
                            if (e === 69633)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 69688) {
                            if (e === 69634)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 69744) {
                            if (69688 <= e && e <= 69702)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e === 69744)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 69762) {
                        if (e < 69759) {
                            if (69747 <= e && e <= 69748)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (69759 <= e && e <= 69761)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 69808) {
                        if (e === 69762)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 69811) {
                        if (69808 <= e && e <= 69810)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (69811 <= e && e <= 69814)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 69888)
                    if (e < 69821) {
                        if (e < 69817) {
                            if (69815 <= e && e <= 69816)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (69817 <= e && e <= 69818)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 69826) {
                        if (e === 69821)
                            return n.CLUSTER_BREAK.PREPEND
                    } else {
                        if (e === 69826)
                            return n.CLUSTER_BREAK.EXTEND;
                        if (e === 69837)
                            return n.CLUSTER_BREAK.PREPEND
                    }
                else if (e < 69933) {
                    if (e < 69927) {
                        if (69888 <= e && e <= 69890)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 69932) {
                        if (69927 <= e && e <= 69931)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e === 69932)
                        return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 69957) {
                    if (69933 <= e && e <= 69940)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 70003) {
                    if (69957 <= e && e <= 69958)
                        return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e === 70003)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 70194) {
                if (e < 70082) {
                    if (e < 70067) {
                        if (e < 70018) {
                            if (70016 <= e && e <= 70017)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e === 70018)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 70070) {
                        if (70067 <= e && e <= 70069)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 70079) {
                        if (70070 <= e && e <= 70078)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (70079 <= e && e <= 70080)
                        return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 70095) {
                    if (e < 70089) {
                        if (70082 <= e && e <= 70083)
                            return n.CLUSTER_BREAK.PREPEND
                    } else if (e < 70094) {
                        if (70089 <= e && e <= 70092)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e === 70094)
                        return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 70188) {
                    if (e === 70095)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 70191) {
                    if (70188 <= e && e <= 70190)
                        return n.CLUSTER_BREAK.SPACINGMARK
                } else if (70191 <= e && e <= 70193)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 70209) {
                if (e < 70197) {
                    if (e < 70196) {
                        if (70194 <= e && e <= 70195)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e === 70196)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 70198) {
                    if (e === 70197)
                        return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 70206) {
                    if (70198 <= e && e <= 70199)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e === 70206)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 70371) {
                if (e < 70367) {
                    if (e === 70209)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 70368) {
                    if (e === 70367)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (70368 <= e && e <= 70370)
                    return n.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 70400) {
                if (70371 <= e && e <= 70378)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 70402) {
                if (70400 <= e && e <= 70401)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (70402 <= e && e <= 70403)
                return n.CLUSTER_BREAK.SPACINGMARK
        } else if (e < 72343) {
            if (e < 71339) {
                if (e < 70841) {
                    if (e < 70512) {
                        if (e < 70471) {
                            if (e < 70463) {
                                if (e < 70462) {
                                    if (70459 <= e && e <= 70460)
                                        return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 70462)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 70464) {
                                if (e === 70463)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 70465) {
                                if (e === 70464)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (70465 <= e && e <= 70468)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 70487) {
                            if (e < 70475) {
                                if (70471 <= e && e <= 70472)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (70475 <= e && e <= 70477)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 70498) {
                            if (e === 70487)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 70502) {
                            if (70498 <= e && e <= 70499)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (70502 <= e && e <= 70508)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 70725) {
                        if (e < 70712) {
                            if (e < 70709) {
                                if (70512 <= e && e <= 70516)
                                    return n.CLUSTER_BREAK.EXTEND
                            } else if (70709 <= e && e <= 70711)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 70720) {
                            if (70712 <= e && e <= 70719)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 70722) {
                            if (70720 <= e && e <= 70721)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (70722 <= e && e <= 70724)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 70832) {
                        if (e < 70726) {
                            if (e === 70725)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e === 70726 || e === 70750)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 70833) {
                        if (e === 70832)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 70835) {
                        if (70833 <= e && e <= 70834)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (70835 <= e && e <= 70840)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 71096) {
                    if (e < 70847)
                        if (e < 70843) {
                            if (e === 70841)
                                return n.CLUSTER_BREAK.SPACINGMARK;
                            if (e === 70842)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 70845) {
                            if (70843 <= e && e <= 70844)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else {
                            if (e === 70845)
                                return n.CLUSTER_BREAK.EXTEND;
                            if (e === 70846)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        }
                    else if (e < 71087) {
                        if (e < 70849) {
                            if (70847 <= e && e <= 70848)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 70850) {
                            if (e === 70849)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (70850 <= e && e <= 70851)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71088) {
                        if (e === 71087)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71090) {
                        if (71088 <= e && e <= 71089)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (71090 <= e && e <= 71093)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 71216) {
                    if (e < 71102) {
                        if (e < 71100) {
                            if (71096 <= e && e <= 71099)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (71100 <= e && e <= 71101)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71103) {
                        if (e === 71102)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 71132) {
                        if (71103 <= e && e <= 71104)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (71132 <= e && e <= 71133)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 71229) {
                    if (e < 71219) {
                        if (71216 <= e && e <= 71218)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 71227) {
                        if (71219 <= e && e <= 71226)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (71227 <= e && e <= 71228)
                        return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 71230) {
                    if (e === 71229)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 71231) {
                    if (e === 71230)
                        return n.CLUSTER_BREAK.SPACINGMARK
                } else if (71231 <= e && e <= 71232)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 71999)
                if (e < 71463) {
                    if (e < 71350) {
                        if (e < 71341) {
                            if (e === 71339)
                                return n.CLUSTER_BREAK.EXTEND;
                            if (e === 71340)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 71342) {
                            if (e === 71341)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 71344) {
                            if (71342 <= e && e <= 71343)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (71344 <= e && e <= 71349)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71453) {
                        if (e === 71350)
                            return n.CLUSTER_BREAK.SPACINGMARK;
                        if (e === 71351)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71458) {
                        if (71453 <= e && e <= 71455)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71462) {
                        if (71458 <= e && e <= 71461)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e === 71462)
                        return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 71984) {
                    if (e < 71727) {
                        if (e < 71724) {
                            if (71463 <= e && e <= 71467)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (71724 <= e && e <= 71726)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 71736) {
                        if (71727 <= e && e <= 71735)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71737) {
                        if (e === 71736)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (71737 <= e && e <= 71738)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 71995) {
                    if (e < 71985) {
                        if (e === 71984)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71991) {
                        if (71985 <= e && e <= 71989)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (71991 <= e && e <= 71992)
                        return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 71997) {
                    if (71995 <= e && e <= 71996)
                        return n.CLUSTER_BREAK.EXTEND
                } else {
                    if (e === 71997)
                        return n.CLUSTER_BREAK.SPACINGMARK;
                    if (e === 71998)
                        return n.CLUSTER_BREAK.EXTEND
                }
            else if (e < 72193)
                if (e < 72145)
                    if (e < 72001) {
                        if (e === 71999)
                            return n.CLUSTER_BREAK.PREPEND;
                        if (e === 72e3)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 72002) {
                        if (e === 72001)
                            return n.CLUSTER_BREAK.PREPEND
                    } else {
                        if (e === 72002)
                            return n.CLUSTER_BREAK.SPACINGMARK;
                        if (e === 72003)
                            return n.CLUSTER_BREAK.EXTEND
                    }
                else if (e < 72156) {
                    if (e < 72148) {
                        if (72145 <= e && e <= 72147)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 72154) {
                        if (72148 <= e && e <= 72151)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (72154 <= e && e <= 72155)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 72160) {
                    if (72156 <= e && e <= 72159)
                        return n.CLUSTER_BREAK.SPACINGMARK
                } else {
                    if (e === 72160)
                        return n.CLUSTER_BREAK.EXTEND;
                    if (e === 72164)
                        return n.CLUSTER_BREAK.SPACINGMARK
                }
            else if (e < 72263) {
                if (e < 72249) {
                    if (e < 72243) {
                        if (72193 <= e && e <= 72202)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (72243 <= e && e <= 72248)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 72250) {
                    if (e === 72249)
                        return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 72251) {
                    if (e === 72250)
                        return n.CLUSTER_BREAK.PREPEND
                } else if (72251 <= e && e <= 72254)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 72281) {
                if (e < 72273) {
                    if (e === 72263)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 72279) {
                    if (72273 <= e && e <= 72278)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (72279 <= e && e <= 72280)
                    return n.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 72324) {
                if (72281 <= e && e <= 72283)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 72330) {
                if (72324 <= e && e <= 72329)
                    return n.CLUSTER_BREAK.PREPEND
            } else if (72330 <= e && e <= 72342)
                return n.CLUSTER_BREAK.EXTEND
        } else if (e < 94033) {
            if (e < 73104) {
                if (e < 72881) {
                    if (e < 72766) {
                        if (e < 72751) {
                            if (e < 72344) {
                                if (e === 72343)
                                    return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (72344 <= e && e <= 72345)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 72752) {
                            if (e === 72751)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 72760) {
                            if (72752 <= e && e <= 72758)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (72760 <= e && e <= 72765)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 72850) {
                        if (e === 72766)
                            return n.CLUSTER_BREAK.SPACINGMARK;
                        if (e === 72767)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 72873) {
                        if (72850 <= e && e <= 72871)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 72874) {
                        if (e === 72873)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (72874 <= e && e <= 72880)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 73018) {
                    if (e < 72884) {
                        if (e < 72882) {
                            if (e === 72881)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (72882 <= e && e <= 72883)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 72885) {
                        if (e === 72884)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 73009) {
                        if (72885 <= e && e <= 72886)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (73009 <= e && e <= 73014)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 73030) {
                    if (e < 73020) {
                        if (e === 73018)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 73023) {
                        if (73020 <= e && e <= 73021)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (73023 <= e && e <= 73029)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 73031) {
                    if (e === 73030)
                        return n.CLUSTER_BREAK.PREPEND
                } else if (e < 73098) {
                    if (e === 73031)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (73098 <= e && e <= 73102)
                    return n.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 73526) {
                if (e < 73459)
                    if (e < 73109) {
                        if (e < 73107) {
                            if (73104 <= e && e <= 73105)
                                return n.CLUSTER_BREAK.EXTEND
                        } else if (73107 <= e && e <= 73108)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 73110) {
                        if (e === 73109)
                            return n.CLUSTER_BREAK.EXTEND
                    } else {
                        if (e === 73110)
                            return n.CLUSTER_BREAK.SPACINGMARK;
                        if (e === 73111)
                            return n.CLUSTER_BREAK.EXTEND
                    }
                else if (e < 73474) {
                    if (e < 73461) {
                        if (73459 <= e && e <= 73460)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 73472) {
                        if (73461 <= e && e <= 73462)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (73472 <= e && e <= 73473)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 73475) {
                    if (e === 73474)
                        return n.CLUSTER_BREAK.PREPEND
                } else if (e < 73524) {
                    if (e === 73475)
                        return n.CLUSTER_BREAK.SPACINGMARK
                } else if (73524 <= e && e <= 73525)
                    return n.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 78896)
                if (e < 73536) {
                    if (e < 73534) {
                        if (73526 <= e && e <= 73530)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (73534 <= e && e <= 73535)
                        return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 73537) {
                    if (e === 73536)
                        return n.CLUSTER_BREAK.EXTEND
                } else {
                    if (e === 73537)
                        return n.CLUSTER_BREAK.SPACINGMARK;
                    if (e === 73538)
                        return n.CLUSTER_BREAK.EXTEND
                }
            else if (e < 92912) {
                if (e < 78912) {
                    if (78896 <= e && e <= 78911)
                        return n.CLUSTER_BREAK.CONTROL
                } else if (e < 78919) {
                    if (e === 78912)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (78919 <= e && e <= 78933)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 92976) {
                if (92912 <= e && e <= 92916)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 94031) {
                if (92976 <= e && e <= 92982)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e === 94031)
                return n.CLUSTER_BREAK.EXTEND
        } else if (e < 121476) {
            if (e < 119143)
                if (e < 113824) {
                    if (e < 94180) {
                        if (e < 94095) {
                            if (94033 <= e && e <= 94087)
                                return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (94095 <= e && e <= 94098)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 94192) {
                        if (e === 94180)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 113821) {
                        if (94192 <= e && e <= 94193)
                            return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (113821 <= e && e <= 113822)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 118576) {
                    if (e < 118528) {
                        if (113824 <= e && e <= 113827)
                            return n.CLUSTER_BREAK.CONTROL
                    } else if (118528 <= e && e <= 118573)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 119141) {
                    if (118576 <= e && e <= 118598)
                        return n.CLUSTER_BREAK.EXTEND
                } else {
                    if (e === 119141)
                        return n.CLUSTER_BREAK.EXTEND;
                    if (e === 119142)
                        return n.CLUSTER_BREAK.SPACINGMARK
                }
            else if (e < 119173) {
                if (e < 119150) {
                    if (e < 119149) {
                        if (119143 <= e && e <= 119145)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (e === 119149)
                        return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 119155) {
                    if (119150 <= e && e <= 119154)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 119163) {
                    if (119155 <= e && e <= 119162)
                        return n.CLUSTER_BREAK.CONTROL
                } else if (119163 <= e && e <= 119170)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 121344) {
                if (e < 119210) {
                    if (119173 <= e && e <= 119179)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 119362) {
                    if (119210 <= e && e <= 119213)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (119362 <= e && e <= 119364)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 121403) {
                if (121344 <= e && e <= 121398)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 121461) {
                if (121403 <= e && e <= 121452)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e === 121461)
                return n.CLUSTER_BREAK.EXTEND
        } else if (e < 123628) {
            if (e < 122907) {
                if (e < 121505) {
                    if (e < 121499) {
                        if (e === 121476)
                            return n.CLUSTER_BREAK.EXTEND
                    } else if (121499 <= e && e <= 121503)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 122880) {
                    if (121505 <= e && e <= 121519)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 122888) {
                    if (122880 <= e && e <= 122886)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (122888 <= e && e <= 122904)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 123023) {
                if (e < 122915) {
                    if (122907 <= e && e <= 122913)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (e < 122918) {
                    if (122915 <= e && e <= 122916)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (122918 <= e && e <= 122922)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 123184) {
                if (e === 123023)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 123566) {
                if (123184 <= e && e <= 123190)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e === 123566)
                return n.CLUSTER_BREAK.EXTEND
        } else if (e < 127995) {
            if (e < 125136) {
                if (e < 124140) {
                    if (123628 <= e && e <= 123631)
                        return n.CLUSTER_BREAK.EXTEND
                } else if (124140 <= e && e <= 124143)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 125252) {
                if (125136 <= e && e <= 125142)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 127462) {
                if (125252 <= e && e <= 125258)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (127462 <= e && e <= 127487)
                return n.CLUSTER_BREAK.REGIONAL_INDICATOR
        } else if (e < 917632) {
            if (e < 917504) {
                if (127995 <= e && e <= 127999)
                    return n.CLUSTER_BREAK.EXTEND
            } else if (e < 917536) {
                if (917504 <= e && e <= 917535)
                    return n.CLUSTER_BREAK.CONTROL
            } else if (917536 <= e && e <= 917631)
                return n.CLUSTER_BREAK.EXTEND
        } else if (e < 917760) {
            if (917632 <= e && e <= 917759)
                return n.CLUSTER_BREAK.CONTROL
        } else if (e < 918e3) {
            if (917760 <= e && e <= 917999)
                return n.CLUSTER_BREAK.EXTEND
        } else if (918e3 <= e && e <= 921599)
            return n.CLUSTER_BREAK.CONTROL;
        return n.CLUSTER_BREAK.OTHER
    }
    static getEmojiProperty(e) {
        if (e < 10160) {
            if (e < 9728) {
                if (e < 9e3) {
                    if (e < 8482) {
                        if (e < 8252) {
                            if (e === 169 || e === 174)
                                return n.EXTENDED_PICTOGRAPHIC
                        } else if (e === 8252 || e === 8265)
                            return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 8596) {
                        if (e === 8482 || e === 8505)
                            return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 8617) {
                        if (8596 <= e && e <= 8601)
                            return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 8986) {
                        if (8617 <= e && e <= 8618)
                            return n.EXTENDED_PICTOGRAPHIC
                    } else if (8986 <= e && e <= 8987)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 9410) {
                    if (e < 9167) {
                        if (e === 9e3 || e === 9096)
                            return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 9193) {
                        if (e === 9167)
                            return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 9208) {
                        if (9193 <= e && e <= 9203)
                            return n.EXTENDED_PICTOGRAPHIC
                    } else if (9208 <= e && e <= 9210)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 9654) {
                    if (e < 9642) {
                        if (e === 9410)
                            return n.EXTENDED_PICTOGRAPHIC
                    } else if (9642 <= e && e <= 9643)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 9664) {
                    if (e === 9654)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 9723) {
                    if (e === 9664)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (9723 <= e && e <= 9726)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 10035) {
                if (e < 10004) {
                    if (e < 9748) {
                        if (e < 9735) {
                            if (9728 <= e && e <= 9733)
                                return n.EXTENDED_PICTOGRAPHIC
                        } else if (9735 <= e && e <= 9746)
                            return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 9872) {
                        if (9748 <= e && e <= 9861)
                            return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 9992) {
                        if (9872 <= e && e <= 9989)
                            return n.EXTENDED_PICTOGRAPHIC
                    } else if (9992 <= e && e <= 10002)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 10013) {
                    if (e === 10004 || e === 10006)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 10017) {
                    if (e === 10013)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e === 10017 || e === 10024)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 10067) {
                if (e < 10055) {
                    if (e < 10052) {
                        if (10035 <= e && e <= 10036)
                            return n.EXTENDED_PICTOGRAPHIC
                    } else if (e === 10052)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 10060) {
                    if (e === 10055)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e === 10060 || e === 10062)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 10083) {
                if (e < 10071) {
                    if (10067 <= e && e <= 10069)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e === 10071)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 10133) {
                if (10083 <= e && e <= 10087)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 10145) {
                if (10133 <= e && e <= 10135)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (e === 10145)
                return n.EXTENDED_PICTOGRAPHIC
        } else if (e < 127489) {
            if (e < 12951) {
                if (e < 11035) {
                    if (e < 10548) {
                        if (e === 10160 || e === 10175)
                            return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 11013) {
                        if (10548 <= e && e <= 10549)
                            return n.EXTENDED_PICTOGRAPHIC
                    } else if (11013 <= e && e <= 11015)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 11093) {
                    if (e < 11088) {
                        if (11035 <= e && e <= 11036)
                            return n.EXTENDED_PICTOGRAPHIC
                    } else if (e === 11088)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 12336) {
                    if (e === 11093)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e === 12336 || e === 12349)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 127340) {
                if (e < 126976) {
                    if (e === 12951 || e === 12953)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 127245) {
                    if (126976 <= e && e <= 127231)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 127279) {
                    if (127245 <= e && e <= 127247)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e === 127279)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 127374) {
                if (e < 127358) {
                    if (127340 <= e && e <= 127345)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (127358 <= e && e <= 127359)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 127377) {
                if (e === 127374)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 127405) {
                if (127377 <= e && e <= 127386)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (127405 <= e && e <= 127461)
                return n.EXTENDED_PICTOGRAPHIC
        } else if (e < 128981) {
            if (e < 127561) {
                if (e < 127535) {
                    if (e < 127514) {
                        if (127489 <= e && e <= 127503)
                            return n.EXTENDED_PICTOGRAPHIC
                    } else if (e === 127514)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 127538) {
                    if (e === 127535)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 127548) {
                    if (127538 <= e && e <= 127546)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (127548 <= e && e <= 127551)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 128326) {
                if (e < 128e3) {
                    if (127561 <= e && e <= 127994)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (128e3 <= e && e <= 128317)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 128640) {
                if (128326 <= e && e <= 128591)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 128884) {
                if (128640 <= e && e <= 128767)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (128884 <= e && e <= 128895)
                return n.EXTENDED_PICTOGRAPHIC
        } else if (e < 129198) {
            if (e < 129096) {
                if (e < 129036) {
                    if (128981 <= e && e <= 129023)
                        return n.EXTENDED_PICTOGRAPHIC
                } else if (129036 <= e && e <= 129039)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 129114) {
                if (129096 <= e && e <= 129103)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 129160) {
                if (129114 <= e && e <= 129119)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (129160 <= e && e <= 129167)
                return n.EXTENDED_PICTOGRAPHIC
        } else if (e < 129340) {
            if (e < 129292) {
                if (129198 <= e && e <= 129279)
                    return n.EXTENDED_PICTOGRAPHIC
            } else if (129292 <= e && e <= 129338)
                return n.EXTENDED_PICTOGRAPHIC
        } else if (e < 129351) {
            if (129340 <= e && e <= 129349)
                return n.EXTENDED_PICTOGRAPHIC
        } else if (e < 130048) {
            if (129351 <= e && e <= 129791)
                return n.EXTENDED_PICTOGRAPHIC
        } else if (130048 <= e && e <= 131069)
            return n.EXTENDED_PICTOGRAPHIC;
        return n.CLUSTER_BREAK.OTHER
    }
}
os.default = je;
var rm = pe && pe.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
;
Object.defineProperty(Xu, "__esModule", {
    value: !0
});
const nm = rm(os);
var im = Xu.default = nm.default;
new im;
const sm = [{
    name: "Loader",
    tag: "@loader",
    directory: "loader",
    isPublic: !0
}, {
    name: "Connect",
    tag: "@connect",
    directory: "connect",
    isPublic: !0
}, {
    name: "Moderator",
    tag: "@moderator",
    directory: "moderator",
    isPublic: !0
}, {
    name: "Tee K.O. Web",
    tag: "@teeko-web",
    directory: "teeko-web",
    isPublic: !0
}];
let am = [];
const fm = [...sm, ...am]
  , Fu = Object.prototype.toString;
function Es(t) {
    switch (Fu.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
        return !0;
    default:
        return _t(t, Error)
    }
}
function tr(t, e) {
    return Fu.call(t) === `[object ${e}]`
}
function qu(t) {
    return tr(t, "ErrorEvent")
}
function ka(t) {
    return tr(t, "DOMError")
}
function um(t) {
    return tr(t, "DOMException")
}
function We(t) {
    return tr(t, "String")
}
function hs(t) {
    return typeof t == "object" && t !== null && "__sentry_template_string__"in t && "__sentry_template_values__"in t
}
function xs(t) {
    return t === null || hs(t) || typeof t != "object" && typeof t != "function"
}
function Xt(t) {
    return tr(t, "Object")
}
function gn(t) {
    return typeof Event < "u" && _t(t, Event)
}
function om(t) {
    return typeof Element < "u" && _t(t, Element)
}
function lm(t) {
    return tr(t, "RegExp")
}
function mn(t) {
    return !!(t && t.then && typeof t.then == "function")
}
function cm(t) {
    return Xt(t) && "nativeEvent"in t && "preventDefault"in t && "stopPropagation"in t
}
function _t(t, e) {
    try {
        return t instanceof e
    } catch {
        return !1
    }
}
function Hu(t) {
    return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue))
}
function Pt(t, e=0) {
    return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0, e)}...`
}
function Va(t, e) {
    if (!Array.isArray(t))
        return "";
    const r = [];
    for (let i = 0; i < t.length; i++) {
        const s = t[i];
        try {
            Hu(s) ? r.push("[VueViewModel]") : r.push(String(s))
        } catch {
            r.push("[value cannot be serialized]")
        }
    }
    return r.join(e)
}
function pm(t, e, r=!1) {
    return We(t) ? lm(e) ? e.test(t) : We(e) ? r ? t === e : t.includes(e) : !1 : !1
}
function Tn(t, e=[], r=!1) {
    return e.some(i => pm(t, i, r))
}
function Em(t, e, r=250, i, s, a, f) {
    if (!a.exception || !a.exception.values || !f || !_t(f.originalException, Error))
        return;
    const u = a.exception.values.length > 0 ? a.exception.values[a.exception.values.length - 1] : void 0;
    u && (a.exception.values = hm(oi(t, e, s, f.originalException, i, a.exception.values, u, 0), r))
}
function oi(t, e, r, i, s, a, f, u) {
    if (a.length >= r + 1)
        return a;
    let o = [...a];
    if (_t(i[s], Error)) {
        $a(f, u);
        const c = t(e, i[s])
          , p = o.length;
        Ma(c, s, p, u),
        o = oi(t, e, r, i[s], s, [c, ...o], c, p)
    }
    return Array.isArray(i.errors) && i.errors.forEach( (c, p) => {
        if (_t(c, Error)) {
            $a(f, u);
            const R = t(e, c)
              , x = o.length;
            Ma(R, `errors[${p}]`, x, u),
            o = oi(t, e, r, c, s, [R, ...o], R, x)
        }
    }
    ),
    o
}
function $a(t, e) {
    t.mechanism = t.mechanism || {
        type: "generic",
        handled: !0
    },
    t.mechanism = {
        ...t.mechanism,
        ...t.type === "AggregateError" && {
            is_exception_group: !0
        },
        exception_id: e
    }
}
function Ma(t, e, r, i) {
    t.mechanism = t.mechanism || {
        type: "generic",
        handled: !0
    },
    t.mechanism = {
        ...t.mechanism,
        type: "chained",
        source: e,
        exception_id: r,
        parent_id: i
    }
}
function hm(t, e) {
    return t.map(r => (r.value && (r.value = Pt(r.value, e)),
    r))
}
function Wu(t) {
    if (t !== void 0)
        return t >= 400 && t < 500 ? "warning" : t >= 500 ? "error" : void 0
}
const Et = "8.38.0"
  , q = globalThis;
function Sn(t, e, r) {
    const i = r || q
      , s = i.__SENTRY__ = i.__SENTRY__ || {}
      , a = s[Et] = s[Et] || {};
    return a[t] || (a[t] = e())
}
const _s = q
  , xm = 80;
function zu(t, e={}) {
    if (!t)
        return "<unknown>";
    try {
        let r = t;
        const i = 5
          , s = [];
        let a = 0
          , f = 0;
        const u = " > "
          , o = u.length;
        let c;
        const p = Array.isArray(e) ? e : e.keyAttrs
          , R = !Array.isArray(e) && e.maxStringLength || xm;
        for (; r && a++ < i && (c = _m(r, p),
        !(c === "html" || a > 1 && f + s.length * o + c.length >= R)); )
            s.push(c),
            f += c.length,
            r = r.parentNode;
        return s.reverse().join(u)
    } catch {
        return "<unknown>"
    }
}
function _m(t, e) {
    const r = t
      , i = [];
    if (!r || !r.tagName)
        return "";
    if (_s.HTMLElement && r instanceof HTMLElement && r.dataset) {
        if (r.dataset.sentryComponent)
            return r.dataset.sentryComponent;
        if (r.dataset.sentryElement)
            return r.dataset.sentryElement
    }
    i.push(r.tagName.toLowerCase());
    const s = e && e.length ? e.filter(f => r.getAttribute(f)).map(f => [f, r.getAttribute(f)]) : null;
    if (s && s.length)
        s.forEach(f => {
            i.push(`[${f[0]}="${f[1]}"]`)
        }
        );
    else {
        r.id && i.push(`#${r.id}`);
        const f = r.className;
        if (f && We(f)) {
            const u = f.split(/\s+/);
            for (const o of u)
                i.push(`.${o}`)
        }
    }
    const a = ["aria-label", "type", "name", "title", "alt"];
    for (const f of a) {
        const u = r.getAttribute(f);
        u && i.push(`[${f}="${u}"]`)
    }
    return i.join("")
}
function Rm() {
    try {
        return _s.document.location.href
    } catch {
        return ""
    }
}
function bm(t) {
    if (!_s.HTMLElement)
        return null;
    let e = t;
    const r = 5;
    for (let i = 0; i < r; i++) {
        if (!e)
            return null;
        if (e instanceof HTMLElement) {
            if (e.dataset.sentryComponent)
                return e.dataset.sentryComponent;
            if (e.dataset.sentryElement)
                return e.dataset.sentryElement
        }
        e = e.parentNode
    }
    return null
}
const rr = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
  , ym = "Sentry Logger "
  , li = ["debug", "info", "warn", "error", "log", "assert", "trace"]
  , rn = {};
function mr(t) {
    if (!("console"in q))
        return t();
    const e = q.console
      , r = {}
      , i = Object.keys(rn);
    i.forEach(s => {
        const a = rn[s];
        r[s] = e[s],
        e[s] = a
    }
    );
    try {
        return t()
    } finally {
        i.forEach(s => {
            e[s] = r[s]
        }
        )
    }
}
function gm() {
    let t = !1;
    const e = {
        enable: () => {
            t = !0
        }
        ,
        disable: () => {
            t = !1
        }
        ,
        isEnabled: () => t
    };
    return rr ? li.forEach(r => {
        e[r] = (...i) => {
            t && mr( () => {
                q.console[r](`${ym}[${r}]:`, ...i)
            }
            )
        }
    }
    ) : li.forEach(r => {
        e[r] = () => {}
    }
    ),
    e
}
const N = Sn("logger", gm)
  , mm = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Tm(t) {
    return t === "http" || t === "https"
}
function Ln(t, e=!1) {
    const {host: r, path: i, pass: s, port: a, projectId: f, protocol: u, publicKey: o} = t;
    return `${u}://${o}${e && s ? `:${s}` : ""}@${r}${a ? `:${a}` : ""}/${i && `${i}/`}${f}`
}
function Sm(t) {
    const e = mm.exec(t);
    if (!e) {
        mr( () => {
            console.error(`Invalid Sentry Dsn: ${t}`)
        }
        );
        return
    }
    const [r,i,s="",a="",f="",u=""] = e.slice(1);
    let o = ""
      , c = u;
    const p = c.split("/");
    if (p.length > 1 && (o = p.slice(0, -1).join("/"),
    c = p.pop()),
    c) {
        const R = c.match(/^\d+/);
        R && (c = R[0])
    }
    return Ju({
        host: a,
        pass: s,
        path: o,
        projectId: c,
        port: f,
        protocol: r,
        publicKey: i
    })
}
function Ju(t) {
    return {
        protocol: t.protocol,
        publicKey: t.publicKey || "",
        pass: t.pass || "",
        host: t.host,
        port: t.port || "",
        path: t.path || "",
        projectId: t.projectId
    }
}
function Lm(t) {
    if (!rr)
        return !0;
    const {port: e, projectId: r, protocol: i} = t;
    return ["protocol", "publicKey", "host", "projectId"].find(f => t[f] ? !1 : (N.error(`Invalid Sentry Dsn: ${f} missing`),
    !0)) ? !1 : r.match(/^\d+$/) ? Tm(i) ? e && isNaN(parseInt(e, 10)) ? (N.error(`Invalid Sentry Dsn: Invalid port ${e}`),
    !1) : !0 : (N.error(`Invalid Sentry Dsn: Invalid protocol ${i}`),
    !1) : (N.error(`Invalid Sentry Dsn: Invalid projectId ${r}`),
    !1)
}
function dm(t) {
    const e = typeof t == "string" ? Sm(t) : Ju(t);
    if (!(!e || !Lm(e)))
        return e
}
class $e extends Error {
    constructor(e, r="warn") {
        super(e),
        this.message = e,
        this.name = new.target.prototype.constructor.name,
        Object.setPrototypeOf(this, new.target.prototype),
        this.logLevel = r
    }
}
function ve(t, e, r) {
    if (!(e in t))
        return;
    const i = t[e]
      , s = r(i);
    typeof s == "function" && Yu(s, i),
    t[e] = s
}
function Rt(t, e, r) {
    try {
        Object.defineProperty(t, e, {
            value: r,
            writable: !0,
            configurable: !0
        })
    } catch {
        rr && N.log(`Failed to add non-enumerable property "${e}" to object`, t)
    }
}
function Yu(t, e) {
    try {
        const r = e.prototype || {};
        t.prototype = e.prototype = r,
        Rt(t, "__sentry_original__", e)
    } catch {}
}
function Rs(t) {
    return t.__sentry_original__
}
function vm(t) {
    return Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
}
function Qu(t) {
    if (Es(t))
        return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...Xa(t)
        };
    if (gn(t)) {
        const e = {
            type: t.type,
            target: Ga(t.target),
            currentTarget: Ga(t.currentTarget),
            ...Xa(t)
        };
        return typeof CustomEvent < "u" && _t(t, CustomEvent) && (e.detail = t.detail),
        e
    } else
        return t
}
function Ga(t) {
    try {
        return om(t) ? zu(t) : Object.prototype.toString.call(t)
    } catch {
        return "<unknown>"
    }
}
function Xa(t) {
    if (typeof t == "object" && t !== null) {
        const e = {};
        for (const r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e
    } else
        return {}
}
function Am(t, e=40) {
    const r = Object.keys(Qu(t));
    r.sort();
    const i = r[0];
    if (!i)
        return "[object has no keys]";
    if (i.length >= e)
        return Pt(i, e);
    for (let s = r.length; s > 0; s--) {
        const a = r.slice(0, s).join(", ");
        if (!(a.length > e))
            return s === r.length ? a : Pt(a, e)
    }
    return ""
}
function Ue(t) {
    return ci(t, new Map)
}
function ci(t, e) {
    if (Cm(t)) {
        const r = e.get(t);
        if (r !== void 0)
            return r;
        const i = {};
        e.set(t, i);
        for (const s of Object.getOwnPropertyNames(t))
            typeof t[s] < "u" && (i[s] = ci(t[s], e));
        return i
    }
    if (Array.isArray(t)) {
        const r = e.get(t);
        if (r !== void 0)
            return r;
        const i = [];
        return e.set(t, i),
        t.forEach(s => {
            i.push(ci(s, e))
        }
        ),
        i
    }
    return t
}
function Cm(t) {
    if (!Xt(t))
        return !1;
    try {
        const e = Object.getPrototypeOf(t).constructor.name;
        return !e || e === "Object"
    } catch {
        return !0
    }
}
const Zu = 50
  , bt = "?"
  , ja = /\(error: (.*)\)/
  , Fa = /captureMessage|captureException/;
function eo(...t) {
    const e = t.sort( (r, i) => r[0] - i[0]).map(r => r[1]);
    return (r, i=0, s=0) => {
        const a = []
          , f = r.split(`
`);
        for (let u = i; u < f.length; u++) {
            const o = f[u];
            if (o.length > 1024)
                continue;
            const c = ja.test(o) ? o.replace(ja, "$1") : o;
            if (!c.match(/\S*Error: /)) {
                for (const p of e) {
                    const R = p(c);
                    if (R) {
                        a.push(R);
                        break
                    }
                }
                if (a.length >= Zu + s)
                    break
            }
        }
        return Um(a.slice(s))
    }
}
function Bm(t) {
    return Array.isArray(t) ? eo(...t) : t
}
function Um(t) {
    if (!t.length)
        return [];
    const e = Array.from(t);
    return /sentryWrapped/.test(Kr(e).function || "") && e.pop(),
    e.reverse(),
    Fa.test(Kr(e).function || "") && (e.pop(),
    Fa.test(Kr(e).function || "") && e.pop()),
    e.slice(0, Zu).map(r => ({
        ...r,
        filename: r.filename || Kr(e).filename,
        function: r.function || bt
    }))
}
function Kr(t) {
    return t[t.length - 1] || {}
}
const zn = "<anonymous>";
function at(t) {
    try {
        return !t || typeof t != "function" ? zn : t.name || zn
    } catch {
        return zn
    }
}
function qa(t) {
    const e = t.exception;
    if (e) {
        const r = [];
        try {
            return e.values.forEach(i => {
                i.stacktrace.frames && r.push(...i.stacktrace.frames)
            }
            ),
            r
        } catch {
            return
        }
    }
}
const $r = {}
  , Ha = {};
function Lt(t, e) {
    $r[t] = $r[t] || [],
    $r[t].push(e)
}
function dt(t, e) {
    if (!Ha[t]) {
        Ha[t] = !0;
        try {
            e()
        } catch (r) {
            rr && N.error(`Error while instrumenting ${t}`, r)
        }
    }
}
function De(t, e) {
    const r = t && $r[t];
    if (r)
        for (const i of r)
            try {
                i(e)
            } catch (s) {
                rr && N.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${at(i)}
Error:`, s)
            }
}
function Km(t) {
    const e = "console";
    Lt(e, t),
    dt(e, wm)
}
function wm() {
    "console"in q && li.forEach(function(t) {
        t in q.console && ve(q.console, t, function(e) {
            return rn[t] = e,
            function(...r) {
                De("console", {
                    args: r,
                    level: t
                });
                const s = rn[t];
                s && s.apply(q.console, r)
            }
        })
    })
}
const pi = q;
function to() {
    if (!("fetch"in pi))
        return !1;
    try {
        return new Headers,
        new Request("http://www.example.com"),
        new Response,
        !0
    } catch {
        return !1
    }
}
function Ei(t) {
    return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
}
function Nm() {
    if (typeof EdgeRuntime == "string")
        return !0;
    if (!to())
        return !1;
    if (Ei(pi.fetch))
        return !0;
    let t = !1;
    const e = pi.document;
    if (e && typeof e.createElement == "function")
        try {
            const r = e.createElement("iframe");
            r.hidden = !0,
            e.head.appendChild(r),
            r.contentWindow && r.contentWindow.fetch && (t = Ei(r.contentWindow.fetch)),
            e.head.removeChild(r)
        } catch (r) {
            rr && N.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r)
        }
    return t
}
const ro = 1e3;
function Tr() {
    return Date.now() / ro
}
function Im() {
    const {performance: t} = q;
    if (!t || !t.now)
        return Tr;
    const e = Date.now() - t.now()
      , r = t.timeOrigin == null ? e : t.timeOrigin;
    return () => (r + t.now()) / ro
}
const ze = Im();
( () => {
    const {performance: t} = q;
    if (!t || !t.now)
        return;
    const e = 3600 * 1e3
      , r = t.now()
      , i = Date.now()
      , s = t.timeOrigin ? Math.abs(t.timeOrigin + r - i) : e
      , a = s < e
      , f = t.timing && t.timing.navigationStart
      , o = typeof f == "number" ? Math.abs(f + r - i) : e
      , c = o < e;
    return a || c ? s <= o ? t.timeOrigin : f : i
}
)();
function Dm(t, e) {
    const r = "fetch";
    Lt(r, t),
    dt(r, () => Om(void 0, e))
}
function Om(t, e=!1) {
    e && !Nm() || ve(q, "fetch", function(r) {
        return function(...i) {
            const {method: s, url: a} = Pm(i)
              , f = {
                args: i,
                fetchData: {
                    method: s,
                    url: a
                },
                startTimestamp: ze() * 1e3
            };
            De("fetch", {
                ...f
            });
            const u = new Error().stack;
            return r.apply(q, i).then(async o => (De("fetch", {
                ...f,
                endTimestamp: ze() * 1e3,
                response: o
            }),
            o), o => {
                throw De("fetch", {
                    ...f,
                    endTimestamp: ze() * 1e3,
                    error: o
                }),
                Es(o) && o.stack === void 0 && (o.stack = u,
                Rt(o, "framesToPop", 1)),
                o
            }
            )
        }
    })
}
function hi(t, e) {
    return !!t && typeof t == "object" && !!t[e]
}
function Wa(t) {
    return typeof t == "string" ? t : t ? hi(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
}
function Pm(t) {
    if (t.length === 0)
        return {
            method: "GET",
            url: ""
        };
    if (t.length === 2) {
        const [r,i] = t;
        return {
            url: Wa(r),
            method: hi(i, "method") ? String(i.method).toUpperCase() : "GET"
        }
    }
    const e = t[0];
    return {
        url: Wa(e),
        method: hi(e, "method") ? String(e.method).toUpperCase() : "GET"
    }
}
let wr = null;
function km(t) {
    const e = "error";
    Lt(e, t),
    dt(e, Vm)
}
function Vm() {
    wr = q.onerror,
    q.onerror = function(t, e, r, i, s) {
        return De("error", {
            column: i,
            error: s,
            line: r,
            msg: t,
            url: e
        }),
        wr && !wr.__SENTRY_LOADER__ ? wr.apply(this, arguments) : !1
    }
    ,
    q.onerror.__SENTRY_INSTRUMENTED__ = !0
}
let Nr = null;
function $m(t) {
    const e = "unhandledrejection";
    Lt(e, t),
    dt(e, Mm)
}
function Mm() {
    Nr = q.onunhandledrejection,
    q.onunhandledrejection = function(t) {
        return De("unhandledrejection", t),
        Nr && !Nr.__SENTRY_LOADER__ ? Nr.apply(this, arguments) : !0
    }
    ,
    q.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}
function Gm() {
    return "npm"
}
function Xm() {
    const t = typeof WeakSet == "function"
      , e = t ? new WeakSet : [];
    function r(s) {
        if (t)
            return e.has(s) ? !0 : (e.add(s),
            !1);
        for (let a = 0; a < e.length; a++)
            if (e[a] === s)
                return !0;
        return e.push(s),
        !1
    }
    function i(s) {
        if (t)
            e.delete(s);
        else
            for (let a = 0; a < e.length; a++)
                if (e[a] === s) {
                    e.splice(a, 1);
                    break
                }
    }
    return [r, i]
}
function Ke() {
    const t = q
      , e = t.crypto || t.msCrypto;
    let r = () => Math.random() * 16;
    try {
        if (e && e.randomUUID)
            return e.randomUUID().replace(/-/g, "");
        e && e.getRandomValues && (r = () => {
            const i = new Uint8Array(1);
            return e.getRandomValues(i),
            i[0]
        }
        )
    } catch {}
    return ("10000000100040008000" + 1e11).replace(/[018]/g, i => (i ^ (r() & 15) >> i / 4).toString(16))
}
function no(t) {
    return t.exception && t.exception.values ? t.exception.values[0] : void 0
}
function et(t) {
    const {message: e, event_id: r} = t;
    if (e)
        return e;
    const i = no(t);
    return i ? i.type && i.value ? `${i.type}: ${i.value}` : i.type || i.value || r || "<unknown>" : r || "<unknown>"
}
function xi(t, e, r) {
    const i = t.exception = t.exception || {}
      , s = i.values = i.values || []
      , a = s[0] = s[0] || {};
    a.value || (a.value = e || ""),
    a.type || (a.type = "Error")
}
function _r(t, e) {
    const r = no(t);
    if (!r)
        return;
    const i = {
        type: "generic",
        handled: !0
    }
      , s = r.mechanism;
    if (r.mechanism = {
        ...i,
        ...s,
        ...e
    },
    e && "data"in e) {
        const a = {
            ...s && s.data,
            ...e.data
        };
        r.mechanism.data = a
    }
}
function za(t) {
    if (t && t.__sentry_captured__)
        return !0;
    try {
        Rt(t, "__sentry_captured__", !0)
    } catch {}
    return !1
}
function io(t) {
    return Array.isArray(t) ? t : [t]
}
function tt(t, e=100, r=1 / 0) {
    try {
        return _i("", t, e, r)
    } catch (i) {
        return {
            ERROR: `**non-serializable** (${i})`
        }
    }
}
function so(t, e=3, r=100 * 1024) {
    const i = tt(t, e);
    return Hm(i) > r ? so(t, e - 1, r) : i
}
function _i(t, e, r=1 / 0, i=1 / 0, s=Xm()) {
    const [a,f] = s;
    if (e == null || ["boolean", "string"].includes(typeof e) || typeof e == "number" && Number.isFinite(e))
        return e;
    const u = jm(t, e);
    if (!u.startsWith("[object "))
        return u;
    if (e.__sentry_skip_normalization__)
        return e;
    const o = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : r;
    if (o === 0)
        return u.replace("object ", "");
    if (a(e))
        return "[Circular ~]";
    const c = e;
    if (c && typeof c.toJSON == "function")
        try {
            const g = c.toJSON();
            return _i("", g, o - 1, i, s)
        } catch {}
    const p = Array.isArray(e) ? [] : {};
    let R = 0;
    const x = Qu(e);
    for (const g in x) {
        if (!Object.prototype.hasOwnProperty.call(x, g))
            continue;
        if (R >= i) {
            p[g] = "[MaxProperties ~]";
            break
        }
        const m = x[g];
        p[g] = _i(g, m, o - 1, i, s),
        R++
    }
    return f(e),
    p
}
function jm(t, e) {
    try {
        if (t === "domain" && e && typeof e == "object" && e._events)
            return "[Domain]";
        if (t === "domainEmitter")
            return "[DomainEmitter]";
        if (typeof global < "u" && e === global)
            return "[Global]";
        if (typeof window < "u" && e === window)
            return "[Window]";
        if (typeof document < "u" && e === document)
            return "[Document]";
        if (Hu(e))
            return "[VueViewModel]";
        if (cm(e))
            return "[SyntheticEvent]";
        if (typeof e == "number" && !Number.isFinite(e))
            return `[${e}]`;
        if (typeof e == "function")
            return `[Function: ${at(e)}]`;
        if (typeof e == "symbol")
            return `[${String(e)}]`;
        if (typeof e == "bigint")
            return `[BigInt: ${String(e)}]`;
        const r = Fm(e);
        return /^HTML(\w*)Element$/.test(r) ? `[HTMLElement: ${r}]` : `[object ${r}]`
    } catch (r) {
        return `**non-serializable** (${r})`
    }
}
function Fm(t) {
    const e = Object.getPrototypeOf(t);
    return e ? e.constructor.name : "null prototype"
}
function qm(t) {
    return ~-encodeURI(t).split(/%..|./).length
}
function Hm(t) {
    return qm(JSON.stringify(t))
}
var Fe;
(function(t) {
    t[t.PENDING = 0] = "PENDING";
    const r = 1;
    t[t.RESOLVED = r] = "RESOLVED";
    const i = 2;
    t[t.REJECTED = i] = "REJECTED"
}
)(Fe || (Fe = {}));
function yt(t) {
    return new Ce(e => {
        e(t)
    }
    )
}
function nn(t) {
    return new Ce( (e, r) => {
        r(t)
    }
    )
}
class Ce {
    constructor(e) {
        Ce.prototype.__init.call(this),
        Ce.prototype.__init2.call(this),
        Ce.prototype.__init3.call(this),
        Ce.prototype.__init4.call(this),
        this._state = Fe.PENDING,
        this._handlers = [];
        try {
            e(this._resolve, this._reject)
        } catch (r) {
            this._reject(r)
        }
    }
    then(e, r) {
        return new Ce( (i, s) => {
            this._handlers.push([!1, a => {
                if (!e)
                    i(a);
                else
                    try {
                        i(e(a))
                    } catch (f) {
                        s(f)
                    }
            }
            , a => {
                if (!r)
                    s(a);
                else
                    try {
                        i(r(a))
                    } catch (f) {
                        s(f)
                    }
            }
            ]),
            this._executeHandlers()
        }
        )
    }
    catch(e) {
        return this.then(r => r, e)
    }
    finally(e) {
        return new Ce( (r, i) => {
            let s, a;
            return this.then(f => {
                a = !1,
                s = f,
                e && e()
            }
            , f => {
                a = !0,
                s = f,
                e && e()
            }
            ).then( () => {
                if (a) {
                    i(s);
                    return
                }
                r(s)
            }
            )
        }
        )
    }
    __init() {
        this._resolve = e => {
            this._setResult(Fe.RESOLVED, e)
        }
    }
    __init2() {
        this._reject = e => {
            this._setResult(Fe.REJECTED, e)
        }
    }
    __init3() {
        this._setResult = (e, r) => {
            if (this._state === Fe.PENDING) {
                if (mn(r)) {
                    r.then(this._resolve, this._reject);
                    return
                }
                this._state = e,
                this._value = r,
                this._executeHandlers()
            }
        }
    }
    __init4() {
        this._executeHandlers = () => {
            if (this._state === Fe.PENDING)
                return;
            const e = this._handlers.slice();
            this._handlers = [],
            e.forEach(r => {
                r[0] || (this._state === Fe.RESOLVED && r[1](this._value),
                this._state === Fe.REJECTED && r[2](this._value),
                r[0] = !0)
            }
            )
        }
    }
}
function Wm(t) {
    const e = [];
    function r() {
        return t === void 0 || e.length < t
    }
    function i(f) {
        return e.splice(e.indexOf(f), 1)[0] || Promise.resolve(void 0)
    }
    function s(f) {
        if (!r())
            return nn(new $e("Not adding Promise because buffer limit was reached."));
        const u = f();
        return e.indexOf(u) === -1 && e.push(u),
        u.then( () => i(u)).then(null, () => i(u).then(null, () => {}
        )),
        u
    }
    function a(f) {
        return new Ce( (u, o) => {
            let c = e.length;
            if (!c)
                return u(!0);
            const p = setTimeout( () => {
                f && f > 0 && u(!1)
            }
            , f);
            e.forEach(R => {
                yt(R).then( () => {
                    --c || (clearTimeout(p),
                    u(!0))
                }
                , o)
            }
            )
        }
        )
    }
    return {
        $: e,
        add: s,
        drain: a
    }
}
function Jn(t) {
    if (!t)
        return {};
    const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!e)
        return {};
    const r = e[6] || ""
      , i = e[8] || "";
    return {
        host: e[4],
        path: e[5],
        protocol: e[2],
        search: r,
        hash: i,
        relative: e[5] + r + i
    }
}
const zm = ["fatal", "error", "warning", "log", "info", "debug"];
function Jm(t) {
    return t === "warn" ? "warning" : zm.includes(t) ? t : "log"
}
const Ym = "sentry-"
  , Qm = /^sentry-/;
function Zm(t) {
    const e = eT(t);
    if (!e)
        return;
    const r = Object.entries(e).reduce( (i, [s,a]) => {
        if (s.match(Qm)) {
            const f = s.slice(Ym.length);
            i[f] = a
        }
        return i
    }
    , {});
    if (Object.keys(r).length > 0)
        return r
}
function eT(t) {
    if (!(!t || !We(t) && !Array.isArray(t)))
        return Array.isArray(t) ? t.reduce( (e, r) => {
            const i = Ja(r);
            return Object.entries(i).forEach( ([s,a]) => {
                e[s] = a
            }
            ),
            e
        }
        , {}) : Ja(t)
}
function Ja(t) {
    return t.split(",").map(e => e.split("=").map(r => decodeURIComponent(r.trim()))).reduce( (e, [r,i]) => (r && i && (e[r] = i),
    e), {})
}
function Sr(t, e=[]) {
    return [t, e]
}
function tT(t, e) {
    const [r,i] = t;
    return [r, [...i, e]]
}
function Ya(t, e) {
    const r = t[1];
    for (const i of r) {
        const s = i[0].type;
        if (e(i, s))
            return !0
    }
    return !1
}
function Ri(t) {
    return q.__SENTRY__ && q.__SENTRY__.encodePolyfill ? q.__SENTRY__.encodePolyfill(t) : new TextEncoder().encode(t)
}
function rT(t) {
    const [e,r] = t;
    let i = JSON.stringify(e);
    function s(a) {
        typeof i == "string" ? i = typeof a == "string" ? i + a : [Ri(i), a] : i.push(typeof a == "string" ? Ri(a) : a)
    }
    for (const a of r) {
        const [f,u] = a;
        if (s(`
${JSON.stringify(f)}
`),
        typeof u == "string" || u instanceof Uint8Array)
            s(u);
        else {
            let o;
            try {
                o = JSON.stringify(u)
            } catch {
                o = JSON.stringify(tt(u))
            }
            s(o)
        }
    }
    return typeof i == "string" ? i : nT(i)
}
function nT(t) {
    const e = t.reduce( (s, a) => s + a.length, 0)
      , r = new Uint8Array(e);
    let i = 0;
    for (const s of t)
        r.set(s, i),
        i += s.length;
    return r
}
function iT(t) {
    const e = typeof t.data == "string" ? Ri(t.data) : t.data;
    return [Ue({
        type: "attachment",
        length: e.length,
        filename: t.filename,
        content_type: t.contentType,
        attachment_type: t.attachmentType
    }), e]
}
const sT = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    statsd: "metric_bucket"
};
function Qa(t) {
    return sT[t]
}
function ao(t) {
    if (!t || !t.sdk)
        return;
    const {name: e, version: r} = t.sdk;
    return {
        name: e,
        version: r
    }
}
function aT(t, e, r, i) {
    const s = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
    return {
        event_id: t.event_id,
        sent_at: new Date().toISOString(),
        ...e && {
            sdk: e
        },
        ...!!r && i && {
            dsn: Ln(i)
        },
        ...s && {
            trace: Ue({
                ...s
            })
        }
    }
}
function fT(t, e, r) {
    const i = [{
        type: "client_report"
    }, {
        timestamp: Tr(),
        discarded_events: t
    }];
    return Sr(e ? {
        dsn: e
    } : {}, [i])
}
const uT = 60 * 1e3;
function oT(t, e=Date.now()) {
    const r = parseInt(`${t}`, 10);
    if (!isNaN(r))
        return r * 1e3;
    const i = Date.parse(`${t}`);
    return isNaN(i) ? uT : i - e
}
function lT(t, e) {
    return t[e] || t.all || 0
}
function cT(t, e, r=Date.now()) {
    return lT(t, e) > r
}
function pT(t, {statusCode: e, headers: r}, i=Date.now()) {
    const s = {
        ...t
    }
      , a = r && r["x-sentry-rate-limits"]
      , f = r && r["retry-after"];
    if (a)
        for (const u of a.trim().split(",")) {
            const [o,c,,,p] = u.split(":", 5)
              , R = parseInt(o, 10)
              , x = (isNaN(R) ? 60 : R) * 1e3;
            if (!c)
                s.all = i + x;
            else
                for (const g of c.split(";"))
                    g === "metric_bucket" ? (!p || p.split(";").includes("custom")) && (s[g] = i + x) : s[g] = i + x
        }
    else
        f ? s.all = i + oT(f, i) : e === 429 && (s.all = i + 60 * 1e3);
    return s
}
function Za() {
    return {
        traceId: Ke(),
        spanId: Ke().substring(16)
    }
}
const ef = new WeakMap;
function ET(t) {
    const e = q._sentryDebugIds;
    if (!e)
        return {};
    let r;
    const i = ef.get(t);
    return i ? r = i : (r = new Map,
    ef.set(t, r)),
    Object.keys(e).reduce( (s, a) => {
        let f;
        const u = r.get(a);
        u ? f = u : (f = t(a),
        r.set(a, f));
        for (let o = f.length - 1; o >= 0; o--) {
            const c = f[o]
              , p = c && c.filename;
            if (c && p) {
                s[p] = e[a];
                break
            }
        }
        return s
    }
    , {})
}
const Ir = q;
function hT() {
    const t = Ir.chrome
      , e = t && t.app && t.app.runtime
      , r = "history"in Ir && !!Ir.history.pushState && !!Ir.history.replaceState;
    return !e && r
}
const ee = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function dn() {
    return bs(q),
    q
}
function bs(t) {
    const e = t.__SENTRY__ = t.__SENTRY__ || {};
    return e.version = e.version || Et,
    e[Et] = e[Et] || {}
}
function xT(t) {
    const e = ze()
      , r = {
        sid: Ke(),
        init: !0,
        timestamp: e,
        started: e,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: () => RT(r)
    };
    return t && jt(r, t),
    r
}
function jt(t, e={}) {
    if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
    !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)),
    t.timestamp = e.timestamp || ze(),
    e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
    e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
    e.sid && (t.sid = e.sid.length === 32 ? e.sid : Ke()),
    e.init !== void 0 && (t.init = e.init),
    !t.did && e.did && (t.did = `${e.did}`),
    typeof e.started == "number" && (t.started = e.started),
    t.ignoreDuration)
        t.duration = void 0;
    else if (typeof e.duration == "number")
        t.duration = e.duration;
    else {
        const r = t.timestamp - t.started;
        t.duration = r >= 0 ? r : 0
    }
    e.release && (t.release = e.release),
    e.environment && (t.environment = e.environment),
    !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
    !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
    typeof e.errors == "number" && (t.errors = e.errors),
    e.status && (t.status = e.status)
}
function _T(t, e) {
    let r = {};
    t.status === "ok" && (r = {
        status: "exited"
    }),
    jt(t, r)
}
function RT(t) {
    return Ue({
        sid: `${t.sid}`,
        init: t.init,
        started: new Date(t.started * 1e3).toISOString(),
        timestamp: new Date(t.timestamp * 1e3).toISOString(),
        status: t.status,
        errors: t.errors,
        did: typeof t.did == "number" || typeof t.did == "string" ? `${t.did}` : void 0,
        duration: t.duration,
        abnormal_mechanism: t.abnormal_mechanism,
        attrs: {
            release: t.release,
            environment: t.environment,
            ip_address: t.ipAddress,
            user_agent: t.userAgent
        }
    })
}
const bi = "_sentrySpan";
function tf(t, e) {
    e ? Rt(t, bi, e) : delete t[bi]
}
function rf(t) {
    return t[bi]
}
const bT = 100;
class ys {
    constructor() {
        this._notifyingListeners = !1,
        this._scopeListeners = [],
        this._eventProcessors = [],
        this._breadcrumbs = [],
        this._attachments = [],
        this._user = {},
        this._tags = {},
        this._extra = {},
        this._contexts = {},
        this._sdkProcessingMetadata = {},
        this._propagationContext = Za()
    }
    clone() {
        const e = new ys;
        return e._breadcrumbs = [...this._breadcrumbs],
        e._tags = {
            ...this._tags
        },
        e._extra = {
            ...this._extra
        },
        e._contexts = {
            ...this._contexts
        },
        e._user = this._user,
        e._level = this._level,
        e._session = this._session,
        e._transactionName = this._transactionName,
        e._fingerprint = this._fingerprint,
        e._eventProcessors = [...this._eventProcessors],
        e._requestSession = this._requestSession,
        e._attachments = [...this._attachments],
        e._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata
        },
        e._propagationContext = {
            ...this._propagationContext
        },
        e._client = this._client,
        e._lastEventId = this._lastEventId,
        tf(e, rf(this)),
        e
    }
    setClient(e) {
        this._client = e
    }
    setLastEventId(e) {
        this._lastEventId = e
    }
    getClient() {
        return this._client
    }
    lastEventId() {
        return this._lastEventId
    }
    addScopeListener(e) {
        this._scopeListeners.push(e)
    }
    addEventProcessor(e) {
        return this._eventProcessors.push(e),
        this
    }
    setUser(e) {
        return this._user = e || {
            email: void 0,
            id: void 0,
            ip_address: void 0,
            username: void 0
        },
        this._session && jt(this._session, {
            user: e
        }),
        this._notifyScopeListeners(),
        this
    }
    getUser() {
        return this._user
    }
    getRequestSession() {
        return this._requestSession
    }
    setRequestSession(e) {
        return this._requestSession = e,
        this
    }
    setTags(e) {
        return this._tags = {
            ...this._tags,
            ...e
        },
        this._notifyScopeListeners(),
        this
    }
    setTag(e, r) {
        return this._tags = {
            ...this._tags,
            [e]: r
        },
        this._notifyScopeListeners(),
        this
    }
    setExtras(e) {
        return this._extra = {
            ...this._extra,
            ...e
        },
        this._notifyScopeListeners(),
        this
    }
    setExtra(e, r) {
        return this._extra = {
            ...this._extra,
            [e]: r
        },
        this._notifyScopeListeners(),
        this
    }
    setFingerprint(e) {
        return this._fingerprint = e,
        this._notifyScopeListeners(),
        this
    }
    setLevel(e) {
        return this._level = e,
        this._notifyScopeListeners(),
        this
    }
    setTransactionName(e) {
        return this._transactionName = e,
        this._notifyScopeListeners(),
        this
    }
    setContext(e, r) {
        return r === null ? delete this._contexts[e] : this._contexts[e] = r,
        this._notifyScopeListeners(),
        this
    }
    setSession(e) {
        return e ? this._session = e : delete this._session,
        this._notifyScopeListeners(),
        this
    }
    getSession() {
        return this._session
    }
    update(e) {
        if (!e)
            return this;
        const r = typeof e == "function" ? e(this) : e
          , [i,s] = r instanceof gt ? [r.getScopeData(), r.getRequestSession()] : Xt(r) ? [e, e.requestSession] : []
          , {tags: a, extra: f, user: u, contexts: o, level: c, fingerprint: p=[], propagationContext: R} = i || {};
        return this._tags = {
            ...this._tags,
            ...a
        },
        this._extra = {
            ...this._extra,
            ...f
        },
        this._contexts = {
            ...this._contexts,
            ...o
        },
        u && Object.keys(u).length && (this._user = u),
        c && (this._level = c),
        p.length && (this._fingerprint = p),
        R && (this._propagationContext = R),
        s && (this._requestSession = s),
        this
    }
    clear() {
        return this._breadcrumbs = [],
        this._tags = {},
        this._extra = {},
        this._user = {},
        this._contexts = {},
        this._level = void 0,
        this._transactionName = void 0,
        this._fingerprint = void 0,
        this._requestSession = void 0,
        this._session = void 0,
        tf(this, void 0),
        this._attachments = [],
        this._propagationContext = Za(),
        this._notifyScopeListeners(),
        this
    }
    addBreadcrumb(e, r) {
        const i = typeof r == "number" ? r : bT;
        if (i <= 0)
            return this;
        const s = {
            timestamp: Tr(),
            ...e
        }
          , a = this._breadcrumbs;
        return a.push(s),
        this._breadcrumbs = a.length > i ? a.slice(-i) : a,
        this._notifyScopeListeners(),
        this
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1]
    }
    clearBreadcrumbs() {
        return this._breadcrumbs = [],
        this._notifyScopeListeners(),
        this
    }
    addAttachment(e) {
        return this._attachments.push(e),
        this
    }
    clearAttachments() {
        return this._attachments = [],
        this
    }
    getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: rf(this)
        }
    }
    setSDKProcessingMetadata(e) {
        return this._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata,
            ...e
        },
        this
    }
    setPropagationContext(e) {
        return this._propagationContext = e,
        this
    }
    getPropagationContext() {
        return this._propagationContext
    }
    captureException(e, r) {
        const i = r && r.event_id ? r.event_id : Ke();
        if (!this._client)
            return N.warn("No client configured on scope - will not capture exception!"),
            i;
        const s = new Error("Sentry syntheticException");
        return this._client.captureException(e, {
            originalException: e,
            syntheticException: s,
            ...r,
            event_id: i
        }, this),
        i
    }
    captureMessage(e, r, i) {
        const s = i && i.event_id ? i.event_id : Ke();
        if (!this._client)
            return N.warn("No client configured on scope - will not capture message!"),
            s;
        const a = new Error(e);
        return this._client.captureMessage(e, r, {
            originalException: e,
            syntheticException: a,
            ...i,
            event_id: s
        }, this),
        s
    }
    captureEvent(e, r) {
        const i = r && r.event_id ? r.event_id : Ke();
        return this._client ? (this._client.captureEvent(e, {
            ...r,
            event_id: i
        }, this),
        i) : (N.warn("No client configured on scope - will not capture event!"),
        i)
    }
    _notifyScopeListeners() {
        this._notifyingListeners || (this._notifyingListeners = !0,
        this._scopeListeners.forEach(e => {
            e(this)
        }
        ),
        this._notifyingListeners = !1)
    }
}
const gt = ys;
function yT() {
    return Sn("defaultCurrentScope", () => new gt)
}
function gT() {
    return Sn("defaultIsolationScope", () => new gt)
}
class mT {
    constructor(e, r) {
        let i;
        e ? i = e : i = new gt;
        let s;
        r ? s = r : s = new gt,
        this._stack = [{
            scope: i
        }],
        this._isolationScope = s
    }
    withScope(e) {
        const r = this._pushScope();
        let i;
        try {
            i = e(r)
        } catch (s) {
            throw this._popScope(),
            s
        }
        return mn(i) ? i.then(s => (this._popScope(),
        s), s => {
            throw this._popScope(),
            s
        }
        ) : (this._popScope(),
        i)
    }
    getClient() {
        return this.getStackTop().client
    }
    getScope() {
        return this.getStackTop().scope
    }
    getIsolationScope() {
        return this._isolationScope
    }
    getStackTop() {
        return this._stack[this._stack.length - 1]
    }
    _pushScope() {
        const e = this.getScope().clone();
        return this._stack.push({
            client: this.getClient(),
            scope: e
        }),
        e
    }
    _popScope() {
        return this._stack.length <= 1 ? !1 : !!this._stack.pop()
    }
}
function Ft() {
    const t = dn()
      , e = bs(t);
    return e.stack = e.stack || new mT(yT(),gT())
}
function TT(t) {
    return Ft().withScope(t)
}
function ST(t, e) {
    const r = Ft();
    return r.withScope( () => (r.getStackTop().scope = t,
    e(t)))
}
function nf(t) {
    return Ft().withScope( () => t(Ft().getIsolationScope()))
}
function LT() {
    return {
        withIsolationScope: nf,
        withScope: TT,
        withSetScope: ST,
        withSetIsolationScope: (t, e) => nf(e),
        getCurrentScope: () => Ft().getScope(),
        getIsolationScope: () => Ft().getIsolationScope()
    }
}
function gs(t) {
    const e = bs(t);
    return e.acs ? e.acs : LT()
}
function Ye() {
    const t = dn();
    return gs(t).getCurrentScope()
}
function nr() {
    const t = dn();
    return gs(t).getIsolationScope()
}
function dT() {
    return Sn("globalScope", () => new gt)
}
function vT(...t) {
    const e = dn()
      , r = gs(e);
    if (t.length === 2) {
        const [i,s] = t;
        return i ? r.withSetScope(i, s) : r.withScope(s)
    }
    return r.withScope(t[0])
}
function Te() {
    return Ye().getClient()
}
const AT = "_sentryMetrics";
function CT(t) {
    const e = t[AT];
    if (!e)
        return;
    const r = {};
    for (const [,[i,s]] of e)
        (r[i] || (r[i] = [])).push(Ue(s));
    return r
}
const BT = "sentry.source"
  , UT = "sentry.sample_rate"
  , KT = "sentry.op"
  , wT = "sentry.origin"
  , NT = 0
  , IT = 1
  , DT = 1;
function OT(t) {
    const {spanId: e, traceId: r} = t.spanContext()
      , {parent_span_id: i} = sn(t);
    return Ue({
        parent_span_id: i,
        span_id: e,
        trace_id: r
    })
}
function sf(t) {
    return typeof t == "number" ? af(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? af(t.getTime()) : ze()
}
function af(t) {
    return t > 9999999999 ? t / 1e3 : t
}
function sn(t) {
    if (kT(t))
        return t.getSpanJSON();
    try {
        const {spanId: e, traceId: r} = t.spanContext();
        if (PT(t)) {
            const {attributes: i, startTime: s, name: a, endTime: f, parentSpanId: u, status: o} = t;
            return Ue({
                span_id: e,
                trace_id: r,
                data: i,
                description: a,
                parent_span_id: u,
                start_timestamp: sf(s),
                timestamp: sf(f) || void 0,
                status: $T(o),
                op: i[KT],
                origin: i[wT],
                _metrics_summary: CT(t)
            })
        }
        return {
            span_id: e,
            trace_id: r
        }
    } catch {
        return {}
    }
}
function PT(t) {
    const e = t;
    return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status
}
function kT(t) {
    return typeof t.getSpanJSON == "function"
}
function VT(t) {
    const {traceFlags: e} = t.spanContext();
    return e === DT
}
function $T(t) {
    if (!(!t || t.code === NT))
        return t.code === IT ? "ok" : t.message || "unknown_error"
}
const MT = "_sentryRootSpan";
function fo(t) {
    return t[MT] || t
}
function GT(t) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__)
        return !1;
    const e = Te()
      , r = e && e.getOptions();
    return !!r && (r.enableTracing || "tracesSampleRate"in r || "tracesSampler"in r)
}
const ms = "production"
  , XT = "_frozenDsc";
function uo(t, e) {
    const r = e.getOptions()
      , {publicKey: i} = e.getDsn() || {}
      , s = Ue({
        environment: r.environment || ms,
        release: r.release,
        public_key: i,
        trace_id: t
    });
    return e.emit("createDsc", s),
    s
}
function jT(t) {
    const e = Te();
    if (!e)
        return {};
    const r = uo(sn(t).trace_id || "", e)
      , i = fo(t)
      , s = i[XT];
    if (s)
        return s;
    const a = i.spanContext().traceState
      , f = a && a.get("sentry.dsc")
      , u = f && Zm(f);
    if (u)
        return u;
    const o = sn(i)
      , c = o.data || {}
      , p = c[UT];
    p != null && (r.sample_rate = `${p}`);
    const R = c[BT]
      , x = o.description;
    return R !== "url" && x && (r.transaction = x),
    GT() && (r.sampled = String(VT(i))),
    e.emit("createDsc", r, i),
    r
}
function FT(t) {
    if (typeof t == "boolean")
        return Number(t);
    const e = typeof t == "string" ? parseFloat(t) : t;
    if (typeof e != "number" || isNaN(e) || e < 0 || e > 1) {
        ee && N.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`);
        return
    }
    return e
}
function qT(t, e) {
    return e && (t.sdk = t.sdk || {},
    t.sdk.name = t.sdk.name || e.name,
    t.sdk.version = t.sdk.version || e.version,
    t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []],
    t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []]),
    t
}
function HT(t, e, r, i) {
    const s = ao(r)
      , a = {
        sent_at: new Date().toISOString(),
        ...s && {
            sdk: s
        },
        ...!!i && e && {
            dsn: Ln(e)
        }
    }
      , f = "aggregates"in t ? [{
        type: "sessions"
    }, t] : [{
        type: "session"
    }, t.toJSON()];
    return Sr(a, [f])
}
function WT(t, e, r, i) {
    const s = ao(r)
      , a = t.type && t.type !== "replay_event" ? t.type : "event";
    qT(t, r && r.sdk);
    const f = aT(t, s, i, e);
    return delete t.sdkProcessingMetadata,
    Sr(f, [[{
        type: a
    }, t]])
}
function yi(t, e, r, i=0) {
    return new Ce( (s, a) => {
        const f = t[i];
        if (e === null || typeof f != "function")
            s(e);
        else {
            const u = f({
                ...e
            }, r);
            ee && f.id && u === null && N.log(`Event processor "${f.id}" dropped event`),
            mn(u) ? u.then(o => yi(t, o, r, i + 1).then(s)).then(null, a) : yi(t, u, r, i + 1).then(s).then(null, a)
        }
    }
    )
}
function zT(t, e) {
    const {fingerprint: r, span: i, breadcrumbs: s, sdkProcessingMetadata: a} = e;
    JT(t, e),
    i && ZT(t, i),
    e1(t, r),
    YT(t, s),
    QT(t, a)
}
function ff(t, e) {
    const {extra: r, tags: i, user: s, contexts: a, level: f, sdkProcessingMetadata: u, breadcrumbs: o, fingerprint: c, eventProcessors: p, attachments: R, propagationContext: x, transactionName: g, span: m} = e;
    fr(t, "extra", r),
    fr(t, "tags", i),
    fr(t, "user", s),
    fr(t, "contexts", a),
    fr(t, "sdkProcessingMetadata", u),
    f && (t.level = f),
    g && (t.transactionName = g),
    m && (t.span = m),
    o.length && (t.breadcrumbs = [...t.breadcrumbs, ...o]),
    c.length && (t.fingerprint = [...t.fingerprint, ...c]),
    p.length && (t.eventProcessors = [...t.eventProcessors, ...p]),
    R.length && (t.attachments = [...t.attachments, ...R]),
    t.propagationContext = {
        ...t.propagationContext,
        ...x
    }
}
function fr(t, e, r) {
    if (r && Object.keys(r).length) {
        t[e] = {
            ...t[e]
        };
        for (const i in r)
            Object.prototype.hasOwnProperty.call(r, i) && (t[e][i] = r[i])
    }
}
function JT(t, e) {
    const {extra: r, tags: i, user: s, contexts: a, level: f, transactionName: u} = e
      , o = Ue(r);
    o && Object.keys(o).length && (t.extra = {
        ...o,
        ...t.extra
    });
    const c = Ue(i);
    c && Object.keys(c).length && (t.tags = {
        ...c,
        ...t.tags
    });
    const p = Ue(s);
    p && Object.keys(p).length && (t.user = {
        ...p,
        ...t.user
    });
    const R = Ue(a);
    R && Object.keys(R).length && (t.contexts = {
        ...R,
        ...t.contexts
    }),
    f && (t.level = f),
    u && t.type !== "transaction" && (t.transaction = u)
}
function YT(t, e) {
    const r = [...t.breadcrumbs || [], ...e];
    t.breadcrumbs = r.length ? r : void 0
}
function QT(t, e) {
    t.sdkProcessingMetadata = {
        ...t.sdkProcessingMetadata,
        ...e
    }
}
function ZT(t, e) {
    t.contexts = {
        trace: OT(e),
        ...t.contexts
    },
    t.sdkProcessingMetadata = {
        dynamicSamplingContext: jT(e),
        ...t.sdkProcessingMetadata
    };
    const r = fo(e)
      , i = sn(r).description;
    i && !t.transaction && t.type === "transaction" && (t.transaction = i)
}
function e1(t, e) {
    t.fingerprint = t.fingerprint ? io(t.fingerprint) : [],
    e && (t.fingerprint = t.fingerprint.concat(e)),
    t.fingerprint && !t.fingerprint.length && delete t.fingerprint
}
function t1(t, e, r, i, s, a) {
    const {normalizeDepth: f=3, normalizeMaxBreadth: u=1e3} = t
      , o = {
        ...e,
        event_id: e.event_id || r.event_id || Ke(),
        timestamp: e.timestamp || Tr()
    }
      , c = r.integrations || t.integrations.map(B => B.name);
    r1(o, t),
    s1(o, c),
    s && s.emit("applyFrameMetadata", e),
    e.type === void 0 && n1(o, t.stackParser);
    const p = f1(i, r.captureContext);
    r.mechanism && _r(o, r.mechanism);
    const R = s ? s.getEventProcessors() : []
      , x = dT().getScopeData();
    if (a) {
        const B = a.getScopeData();
        ff(x, B)
    }
    if (p) {
        const B = p.getScopeData();
        ff(x, B)
    }
    const g = [...r.attachments || [], ...x.attachments];
    g.length && (r.attachments = g),
    zT(o, x);
    const m = [...R, ...x.eventProcessors];
    return yi(m, o, r).then(B => (B && i1(B),
    typeof f == "number" && f > 0 ? a1(B, f, u) : B))
}
function r1(t, e) {
    const {environment: r, release: i, dist: s, maxValueLength: a=250} = e;
    "environment"in t || (t.environment = "environment"in e ? r : ms),
    t.release === void 0 && i !== void 0 && (t.release = i),
    t.dist === void 0 && s !== void 0 && (t.dist = s),
    t.message && (t.message = Pt(t.message, a));
    const f = t.exception && t.exception.values && t.exception.values[0];
    f && f.value && (f.value = Pt(f.value, a));
    const u = t.request;
    u && u.url && (u.url = Pt(u.url, a))
}
function n1(t, e) {
    const r = ET(e);
    try {
        t.exception.values.forEach(i => {
            i.stacktrace.frames.forEach(s => {
                s.filename && (s.debug_id = r[s.filename])
            }
            )
        }
        )
    } catch {}
}
function i1(t) {
    const e = {};
    try {
        t.exception.values.forEach(i => {
            i.stacktrace.frames.forEach(s => {
                s.debug_id && (s.abs_path ? e[s.abs_path] = s.debug_id : s.filename && (e[s.filename] = s.debug_id),
                delete s.debug_id)
            }
            )
        }
        )
    } catch {}
    if (Object.keys(e).length === 0)
        return;
    t.debug_meta = t.debug_meta || {},
    t.debug_meta.images = t.debug_meta.images || [];
    const r = t.debug_meta.images;
    Object.entries(e).forEach( ([i,s]) => {
        r.push({
            type: "sourcemap",
            code_file: i,
            debug_id: s
        })
    }
    )
}
function s1(t, e) {
    e.length > 0 && (t.sdk = t.sdk || {},
    t.sdk.integrations = [...t.sdk.integrations || [], ...e])
}
function a1(t, e, r) {
    if (!t)
        return null;
    const i = {
        ...t,
        ...t.breadcrumbs && {
            breadcrumbs: t.breadcrumbs.map(s => ({
                ...s,
                ...s.data && {
                    data: tt(s.data, e, r)
                }
            }))
        },
        ...t.user && {
            user: tt(t.user, e, r)
        },
        ...t.contexts && {
            contexts: tt(t.contexts, e, r)
        },
        ...t.extra && {
            extra: tt(t.extra, e, r)
        }
    };
    return t.contexts && t.contexts.trace && i.contexts && (i.contexts.trace = t.contexts.trace,
    t.contexts.trace.data && (i.contexts.trace.data = tt(t.contexts.trace.data, e, r))),
    t.spans && (i.spans = t.spans.map(s => ({
        ...s,
        ...s.data && {
            data: tt(s.data, e, r)
        }
    }))),
    i
}
function f1(t, e) {
    if (!e)
        return t;
    const r = t ? t.clone() : new gt;
    return r.update(e),
    r
}
function u1(t, e) {
    return Ye().captureException(t, void 0)
}
function o1(t, e) {
    const r = typeof e == "string" ? e : void 0
      , i = typeof e != "string" ? {
        captureContext: e
    } : void 0;
    return Ye().captureMessage(t, r, i)
}
function oo(t, e) {
    return Ye().captureEvent(t, e)
}
function lo(t) {
    nr().setTags(t)
}
function uf(t) {
    const e = Te()
      , r = nr()
      , i = Ye()
      , {release: s, environment: a=ms} = e && e.getOptions() || {}
      , {userAgent: f} = q.navigator || {}
      , u = xT({
        release: s,
        environment: a,
        user: i.getUser() || r.getUser(),
        ...f && {
            userAgent: f
        },
        ...t
    })
      , o = r.getSession();
    return o && o.status === "ok" && jt(o, {
        status: "exited"
    }),
    co(),
    r.setSession(u),
    i.setSession(u),
    u
}
function co() {
    const t = nr()
      , e = Ye()
      , r = e.getSession() || t.getSession();
    r && _T(r),
    po(),
    t.setSession(),
    e.setSession()
}
function po() {
    const t = nr()
      , e = Ye()
      , r = Te()
      , i = e.getSession() || t.getSession();
    i && r && r.captureSession(i)
}
function of(t=!1) {
    if (t) {
        co();
        return
    }
    po()
}
const l1 = "7";
function c1(t) {
    const e = t.protocol ? `${t.protocol}:` : ""
      , r = t.port ? `:${t.port}` : "";
    return `${e}//${t.host}${r}${t.path ? `/${t.path}` : ""}/api/`
}
function p1(t) {
    return `${c1(t)}${t.projectId}/envelope/`
}
function E1(t, e) {
    return vm({
        sentry_key: t.publicKey,
        sentry_version: l1,
        ...e && {
            sentry_client: `${e.name}/${e.version}`
        }
    })
}
function h1(t, e, r) {
    return e || `${p1(t)}?${E1(t, r)}`
}
const lf = [];
function x1(t) {
    const e = {};
    return t.forEach(r => {
        const {name: i} = r
          , s = e[i];
        s && !s.isDefaultInstance && r.isDefaultInstance || (e[i] = r)
    }
    ),
    Object.values(e)
}
function _1(t) {
    const e = t.defaultIntegrations || []
      , r = t.integrations;
    e.forEach(f => {
        f.isDefaultInstance = !0
    }
    );
    let i;
    Array.isArray(r) ? i = [...e, ...r] : typeof r == "function" ? i = io(r(e)) : i = e;
    const s = x1(i)
      , a = s.findIndex(f => f.name === "Debug");
    if (a > -1) {
        const [f] = s.splice(a, 1);
        s.push(f)
    }
    return s
}
function R1(t, e) {
    const r = {};
    return e.forEach(i => {
        i && Eo(t, i, r)
    }
    ),
    r
}
function cf(t, e) {
    for (const r of e)
        r && r.afterAllSetup && r.afterAllSetup(t)
}
function Eo(t, e, r) {
    if (r[e.name]) {
        ee && N.log(`Integration skipped because it was already installed: ${e.name}`);
        return
    }
    if (r[e.name] = e,
    lf.indexOf(e.name) === -1 && typeof e.setupOnce == "function" && (e.setupOnce(),
    lf.push(e.name)),
    e.setup && typeof e.setup == "function" && e.setup(t),
    typeof e.preprocessEvent == "function") {
        const i = e.preprocessEvent.bind(e);
        t.on("preprocessEvent", (s, a) => i(s, a, t))
    }
    if (typeof e.processEvent == "function") {
        const i = e.processEvent.bind(e)
          , s = Object.assign( (a, f) => i(a, f, t), {
            id: e.name
        });
        t.addEventProcessor(s)
    }
    ee && N.log(`Integration installed: ${e.name}`)
}
const pf = "Not capturing exception because it's already been captured.";
class b1 {
    constructor(e) {
        if (this._options = e,
        this._integrations = {},
        this._numProcessing = 0,
        this._outcomes = {},
        this._hooks = {},
        this._eventProcessors = [],
        e.dsn ? this._dsn = dm(e.dsn) : ee && N.warn("No DSN provided, client will not send events."),
        this._dsn) {
            const r = h1(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
            this._transport = e.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...e.transportOptions,
                url: r
            })
        }
    }
    captureException(e, r, i) {
        const s = Ke();
        if (za(e))
            return ee && N.log(pf),
            s;
        const a = {
            event_id: s,
            ...r
        };
        return this._process(this.eventFromException(e, a).then(f => this._captureEvent(f, a, i))),
        a.event_id
    }
    captureMessage(e, r, i, s) {
        const a = {
            event_id: Ke(),
            ...i
        }
          , f = hs(e) ? e : String(e)
          , u = xs(e) ? this.eventFromMessage(f, r, a) : this.eventFromException(e, a);
        return this._process(u.then(o => this._captureEvent(o, a, s))),
        a.event_id
    }
    captureEvent(e, r, i) {
        const s = Ke();
        if (r && r.originalException && za(r.originalException))
            return ee && N.log(pf),
            s;
        const a = {
            event_id: s,
            ...r
        }
          , u = (e.sdkProcessingMetadata || {}).capturedSpanScope;
        return this._process(this._captureEvent(e, a, u || i)),
        a.event_id
    }
    captureSession(e) {
        typeof e.release != "string" ? ee && N.warn("Discarded session because of missing or non-string release") : (this.sendSession(e),
        jt(e, {
            init: !1
        }))
    }
    getDsn() {
        return this._dsn
    }
    getOptions() {
        return this._options
    }
    getSdkMetadata() {
        return this._options._metadata
    }
    getTransport() {
        return this._transport
    }
    flush(e) {
        const r = this._transport;
        return r ? (this.emit("flush"),
        this._isClientDoneProcessing(e).then(i => r.flush(e).then(s => i && s))) : yt(!0)
    }
    close(e) {
        return this.flush(e).then(r => (this.getOptions().enabled = !1,
        this.emit("close"),
        r))
    }
    getEventProcessors() {
        return this._eventProcessors
    }
    addEventProcessor(e) {
        this._eventProcessors.push(e)
    }
    init() {
        (this._isEnabled() || this._options.integrations.some( ({name: e}) => e.startsWith("Spotlight"))) && this._setupIntegrations()
    }
    getIntegrationByName(e) {
        return this._integrations[e]
    }
    addIntegration(e) {
        const r = this._integrations[e.name];
        Eo(this, e, this._integrations),
        r || cf(this, [e])
    }
    sendEvent(e, r={}) {
        this.emit("beforeSendEvent", e, r);
        let i = WT(e, this._dsn, this._options._metadata, this._options.tunnel);
        for (const a of r.attachments || [])
            i = tT(i, iT(a));
        const s = this.sendEnvelope(i);
        s && s.then(a => this.emit("afterSendEvent", e, a), null)
    }
    sendSession(e) {
        const r = HT(e, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(r)
    }
    recordDroppedEvent(e, r, i) {
        if (this._options.sendClientReports) {
            const s = typeof i == "number" ? i : 1
              , a = `${e}:${r}`;
            ee && N.log(`Recording outcome: "${a}"${s > 1 ? ` (${s} times)` : ""}`),
            this._outcomes[a] = (this._outcomes[a] || 0) + s
        }
    }
    on(e, r) {
        const i = this._hooks[e] = this._hooks[e] || [];
        return i.push(r),
        () => {
            const s = i.indexOf(r);
            s > -1 && i.splice(s, 1)
        }
    }
    emit(e, ...r) {
        const i = this._hooks[e];
        i && i.forEach(s => s(...r))
    }
    sendEnvelope(e) {
        return this.emit("beforeEnvelope", e),
        this._isEnabled() && this._transport ? this._transport.send(e).then(null, r => (ee && N.error("Error while sending envelope:", r),
        r)) : (ee && N.error("Transport disabled"),
        yt({}))
    }
    _setupIntegrations() {
        const {integrations: e} = this._options;
        this._integrations = R1(this, e),
        cf(this, e)
    }
    _updateSessionFromEvent(e, r) {
        let i = !1
          , s = !1;
        const a = r.exception && r.exception.values;
        if (a) {
            s = !0;
            for (const o of a) {
                const c = o.mechanism;
                if (c && c.handled === !1) {
                    i = !0;
                    break
                }
            }
        }
        const f = e.status === "ok";
        (f && e.errors === 0 || f && i) && (jt(e, {
            ...i && {
                status: "crashed"
            },
            errors: e.errors || Number(s || i)
        }),
        this.captureSession(e))
    }
    _isClientDoneProcessing(e) {
        return new Ce(r => {
            let i = 0;
            const s = 1
              , a = setInterval( () => {
                this._numProcessing == 0 ? (clearInterval(a),
                r(!0)) : (i += s,
                e && i >= e && (clearInterval(a),
                r(!1)))
            }
            , s)
        }
        )
    }
    _isEnabled() {
        return this.getOptions().enabled !== !1 && this._transport !== void 0
    }
    _prepareEvent(e, r, i, s=nr()) {
        const a = this.getOptions()
          , f = Object.keys(this._integrations);
        return !r.integrations && f.length > 0 && (r.integrations = f),
        this.emit("preprocessEvent", e, r),
        e.type || s.setLastEventId(e.event_id || r.event_id),
        t1(a, e, r, i, this, s).then(u => {
            if (u === null)
                return u;
            const o = {
                ...s.getPropagationContext(),
                ...i ? i.getPropagationContext() : void 0
            };
            if (!(u.contexts && u.contexts.trace) && o) {
                const {traceId: p, spanId: R, parentSpanId: x, dsc: g} = o;
                u.contexts = {
                    trace: Ue({
                        trace_id: p,
                        span_id: R,
                        parent_span_id: x
                    }),
                    ...u.contexts
                };
                const m = g || uo(p, this);
                u.sdkProcessingMetadata = {
                    dynamicSamplingContext: m,
                    ...u.sdkProcessingMetadata
                }
            }
            return u
        }
        )
    }
    _captureEvent(e, r={}, i) {
        return this._processEvent(e, r, i).then(s => s.event_id, s => {
            if (ee) {
                const a = s;
                a.logLevel === "log" ? N.log(a.message) : N.warn(a)
            }
        }
        )
    }
    _processEvent(e, r, i) {
        const s = this.getOptions()
          , {sampleRate: a} = s
          , f = xo(e)
          , u = ho(e)
          , o = e.type || "error"
          , c = `before send for type \`${o}\``
          , p = typeof a > "u" ? void 0 : FT(a);
        if (u && typeof p == "number" && Math.random() > p)
            return this.recordDroppedEvent("sample_rate", "error", e),
            nn(new $e(`Discarding event because it's not included in the random sample (sampling rate = ${a})`,"log"));
        const R = o === "replay_event" ? "replay" : o
          , g = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
        return this._prepareEvent(e, r, i, g).then(m => {
            if (m === null)
                throw this.recordDroppedEvent("event_processor", R, e),
                new $e("An event processor returned `null`, will not send event.","log");
            if (r.data && r.data.__sentry__ === !0)
                return m;
            const B = g1(this, s, m, r);
            return y1(B, c)
        }
        ).then(m => {
            if (m === null) {
                if (this.recordDroppedEvent("before_send", R, e),
                f) {
                    const k = 1 + (e.spans || []).length;
                    this.recordDroppedEvent("before_send", "span", k)
                }
                throw new $e(`${c} returned \`null\`, will not send event.`,"log")
            }
            const C = i && i.getSession();
            if (!f && C && this._updateSessionFromEvent(C, m),
            f) {
                const P = m.sdkProcessingMetadata && m.sdkProcessingMetadata.spanCountBeforeProcessing || 0
                  , k = m.spans ? m.spans.length : 0
                  , K = P - k;
                K > 0 && this.recordDroppedEvent("before_send", "span", K)
            }
            const B = m.transaction_info;
            if (f && B && m.transaction !== e.transaction) {
                const P = "custom";
                m.transaction_info = {
                    ...B,
                    source: P
                }
            }
            return this.sendEvent(m, r),
            m
        }
        ).then(null, m => {
            throw m instanceof $e ? m : (this.captureException(m, {
                data: {
                    __sentry__: !0
                },
                originalException: m
            }),
            new $e(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${m}`))
        }
        )
    }
    _process(e) {
        this._numProcessing++,
        e.then(r => (this._numProcessing--,
        r), r => (this._numProcessing--,
        r))
    }
    _clearOutcomes() {
        const e = this._outcomes;
        return this._outcomes = {},
        Object.entries(e).map( ([r,i]) => {
            const [s,a] = r.split(":");
            return {
                reason: s,
                category: a,
                quantity: i
            }
        }
        )
    }
    _flushOutcomes() {
        ee && N.log("Flushing outcomes...");
        const e = this._clearOutcomes();
        if (e.length === 0) {
            ee && N.log("No outcomes to send");
            return
        }
        if (!this._dsn) {
            ee && N.log("No dsn provided, will not send outcomes");
            return
        }
        ee && N.log("Sending outcomes:", e);
        const r = fT(e, this._options.tunnel && Ln(this._dsn));
        this.sendEnvelope(r)
    }
}
function y1(t, e) {
    const r = `${e} must return \`null\` or a valid event.`;
    if (mn(t))
        return t.then(i => {
            if (!Xt(i) && i !== null)
                throw new $e(r);
            return i
        }
        , i => {
            throw new $e(`${e} rejected with ${i}`)
        }
        );
    if (!Xt(t) && t !== null)
        throw new $e(r);
    return t
}
function g1(t, e, r, i) {
    const {beforeSend: s, beforeSendTransaction: a, beforeSendSpan: f} = e;
    if (ho(r) && s)
        return s(r, i);
    if (xo(r)) {
        if (r.spans && f) {
            const u = [];
            for (const o of r.spans) {
                const c = f(o);
                c ? u.push(c) : t.recordDroppedEvent("before_send", "span")
            }
            r.spans = u
        }
        if (a) {
            if (r.spans) {
                const u = r.spans.length;
                r.sdkProcessingMetadata = {
                    ...r.sdkProcessingMetadata,
                    spanCountBeforeProcessing: u
                }
            }
            return a(r, i)
        }
    }
    return r
}
function ho(t) {
    return t.type === void 0
}
function xo(t) {
    return t.type === "transaction"
}
function m1(t, e) {
    e.debug === !0 && (ee ? N.enable() : mr( () => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
    }
    )),
    Ye().update(e.initialScope);
    const i = new t(e);
    return T1(i),
    i.init(),
    i
}
function T1(t) {
    Ye().setClient(t)
}
const S1 = 64;
function L1(t, e, r=Wm(t.bufferSize || S1)) {
    let i = {};
    const s = f => r.drain(f);
    function a(f) {
        const u = [];
        if (Ya(f, (R, x) => {
            const g = Qa(x);
            if (cT(i, g)) {
                const m = Ef(R, x);
                t.recordDroppedEvent("ratelimit_backoff", g, m)
            } else
                u.push(R)
        }
        ),
        u.length === 0)
            return yt({});
        const o = Sr(f[0], u)
          , c = R => {
            Ya(o, (x, g) => {
                const m = Ef(x, g);
                t.recordDroppedEvent(R, Qa(g), m)
            }
            )
        }
          , p = () => e({
            body: rT(o)
        }).then(R => (R.statusCode !== void 0 && (R.statusCode < 200 || R.statusCode >= 300) && ee && N.warn(`Sentry responded with status code ${R.statusCode} to sent event.`),
        i = pT(i, R),
        R), R => {
            throw c("network_error"),
            R
        }
        );
        return r.add(p).then(R => R, R => {
            if (R instanceof $e)
                return ee && N.error("Skipped sending event because buffer is full."),
                c("queue_overflow"),
                yt({});
            throw R
        }
        )
    }
    return {
        send: a,
        flush: s
    }
}
function Ef(t, e) {
    if (!(e !== "event" && e !== "transaction"))
        return Array.isArray(t) ? t[1] : void 0
}
function d1(t, e, r=[e], i="npm") {
    const s = t._metadata || {};
    s.sdk || (s.sdk = {
        name: `sentry.javascript.${e}`,
        packages: r.map(a => ({
            name: `${i}:@sentry/${a}`,
            version: Et
        })),
        version: Et
    }),
    t._metadata = s
}
const v1 = 100;
function mt(t, e) {
    const r = Te()
      , i = nr();
    if (!r)
        return;
    const {beforeBreadcrumb: s=null, maxBreadcrumbs: a=v1} = r.getOptions();
    if (a <= 0)
        return;
    const u = {
        timestamp: Tr(),
        ...t
    }
      , o = s ? mr( () => s(u, e)) : u;
    o !== null && (r.emit && r.emit("beforeAddBreadcrumb", o, e),
    i.addBreadcrumb(o, a))
}
let hf;
const A1 = "FunctionToString"
  , xf = new WeakMap
  , C1 = () => ({
    name: A1,
    setupOnce() {
        hf = Function.prototype.toString;
        try {
            Function.prototype.toString = function(...t) {
                const e = Rs(this)
                  , r = xf.has(Te()) && e !== void 0 ? e : this;
                return hf.apply(r, t)
            }
        } catch {}
    },
    setup(t) {
        xf.set(t, !0)
    }
})
  , B1 = C1
  , U1 = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler"]
  , K1 = "InboundFilters"
  , w1 = (t={}) => ({
    name: K1,
    processEvent(e, r, i) {
        const s = i.getOptions()
          , a = I1(t, s);
        return D1(e, a) ? null : e
    }
})
  , N1 = w1;
function I1(t={}, e={}) {
    return {
        allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
        denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
        ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : U1],
        ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || []],
        ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0
    }
}
function D1(t, e) {
    return e.ignoreInternal && M1(t) ? (ee && N.warn(`Event dropped due to being internal Sentry Error.
Event: ${et(t)}`),
    !0) : O1(t, e.ignoreErrors) ? (ee && N.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${et(t)}`),
    !0) : X1(t) ? (ee && N.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${et(t)}`),
    !0) : P1(t, e.ignoreTransactions) ? (ee && N.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${et(t)}`),
    !0) : k1(t, e.denyUrls) ? (ee && N.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${et(t)}.
Url: ${an(t)}`),
    !0) : V1(t, e.allowUrls) ? !1 : (ee && N.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${et(t)}.
Url: ${an(t)}`),
    !0)
}
function O1(t, e) {
    return t.type || !e || !e.length ? !1 : $1(t).some(r => Tn(r, e))
}
function P1(t, e) {
    if (t.type !== "transaction" || !e || !e.length)
        return !1;
    const r = t.transaction;
    return r ? Tn(r, e) : !1
}
function k1(t, e) {
    if (!e || !e.length)
        return !1;
    const r = an(t);
    return r ? Tn(r, e) : !1
}
function V1(t, e) {
    if (!e || !e.length)
        return !0;
    const r = an(t);
    return r ? Tn(r, e) : !0
}
function $1(t) {
    const e = [];
    t.message && e.push(t.message);
    let r;
    try {
        r = t.exception.values[t.exception.values.length - 1]
    } catch {}
    return r && r.value && (e.push(r.value),
    r.type && e.push(`${r.type}: ${r.value}`)),
    e
}
function M1(t) {
    try {
        return t.exception.values[0].type === "SentryError"
    } catch {}
    return !1
}
function G1(t=[]) {
    for (let e = t.length - 1; e >= 0; e--) {
        const r = t[e];
        if (r && r.filename !== "<anonymous>" && r.filename !== "[native code]")
            return r.filename || null
    }
    return null
}
function an(t) {
    try {
        let e;
        try {
            e = t.exception.values[0].stacktrace.frames
        } catch {}
        return e ? G1(e) : null
    } catch {
        return ee && N.error(`Cannot extract url for event ${et(t)}`),
        null
    }
}
function X1(t) {
    return t.type || !t.exception || !t.exception.values || t.exception.values.length === 0 ? !1 : !t.message && !t.exception.values.some(e => e.stacktrace || e.type && e.type !== "Error" || e.value)
}
const j1 = "Dedupe"
  , F1 = () => {
    let t;
    return {
        name: j1,
        processEvent(e) {
            if (e.type)
                return e;
            try {
                if (H1(e, t))
                    return ee && N.warn("Event dropped due to being a duplicate of previously captured event."),
                    null
            } catch {}
            return t = e
        }
    }
}
  , q1 = F1;
function H1(t, e) {
    return e ? !!(W1(t, e) || z1(t, e)) : !1
}
function W1(t, e) {
    const r = t.message
      , i = e.message;
    return !(!r && !i || r && !i || !r && i || r !== i || !Ro(t, e) || !_o(t, e))
}
function z1(t, e) {
    const r = _f(e)
      , i = _f(t);
    return !(!r || !i || r.type !== i.type || r.value !== i.value || !Ro(t, e) || !_o(t, e))
}
function _o(t, e) {
    let r = qa(t)
      , i = qa(e);
    if (!r && !i)
        return !0;
    if (r && !i || !r && i || (r = r,
    i = i,
    i.length !== r.length))
        return !1;
    for (let s = 0; s < i.length; s++) {
        const a = i[s]
          , f = r[s];
        if (a.filename !== f.filename || a.lineno !== f.lineno || a.colno !== f.colno || a.function !== f.function)
            return !1
    }
    return !0
}
function Ro(t, e) {
    let r = t.fingerprint
      , i = e.fingerprint;
    if (!r && !i)
        return !0;
    if (r && !i || !r && i)
        return !1;
    r = r,
    i = i;
    try {
        return r.join("") === i.join("")
    } catch {
        return !1
    }
}
function _f(t) {
    return t.exception && t.exception.values && t.exception.values[0]
}
const te = q;
let gi = 0;
function bo() {
    return gi > 0
}
function J1() {
    gi++,
    setTimeout( () => {
        gi--
    }
    )
}
function qt(t, e={}, r) {
    if (typeof t != "function")
        return t;
    try {
        const s = t.__sentry_wrapped__;
        if (s)
            return typeof s == "function" ? s : t;
        if (Rs(t))
            return t
    } catch {
        return t
    }
    const i = function() {
        const s = Array.prototype.slice.call(arguments);
        try {
            const a = s.map(f => qt(f, e));
            return t.apply(this, a)
        } catch (a) {
            throw J1(),
            vT(f => {
                f.addEventProcessor(u => (e.mechanism && (xi(u, void 0),
                _r(u, e.mechanism)),
                u.extra = {
                    ...u.extra,
                    arguments: s
                },
                u)),
                u1(a)
            }
            ),
            a
        }
    };
    try {
        for (const s in t)
            Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s])
    } catch {}
    Yu(i, t),
    Rt(t, "__sentry_wrapped__", i);
    try {
        Object.getOwnPropertyDescriptor(i, "name").configurable && Object.defineProperty(i, "name", {
            get() {
                return t.name
            }
        })
    } catch {}
    return i
}
const Lr = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function Ts(t, e) {
    const r = Ss(t, e)
      , i = {
        type: tS(e),
        value: rS(e)
    };
    return r.length && (i.stacktrace = {
        frames: r
    }),
    i.type === void 0 && i.value === "" && (i.value = "Unrecoverable error caught"),
    i
}
function Y1(t, e, r, i) {
    const s = Te()
      , a = s && s.getOptions().normalizeDepth
      , f = fS(e)
      , u = {
        __serialized__: so(e, a)
    };
    if (f)
        return {
            exception: {
                values: [Ts(t, f)]
            },
            extra: u
        };
    const o = {
        exception: {
            values: [{
                type: gn(e) ? e.constructor.name : i ? "UnhandledRejection" : "Error",
                value: sS(e, {
                    isUnhandledRejection: i
                })
            }]
        },
        extra: u
    };
    if (r) {
        const c = Ss(t, r);
        c.length && (o.exception.values[0].stacktrace = {
            frames: c
        })
    }
    return o
}
function Yn(t, e) {
    return {
        exception: {
            values: [Ts(t, e)]
        }
    }
}
function Ss(t, e) {
    const r = e.stacktrace || e.stack || ""
      , i = Z1(e)
      , s = eS(e);
    try {
        return t(r, i, s)
    } catch {}
    return []
}
const Q1 = /Minified React error #\d+;/i;
function Z1(t) {
    return t && Q1.test(t.message) ? 1 : 0
}
function eS(t) {
    return typeof t.framesToPop == "number" ? t.framesToPop : 0
}
function yo(t) {
    return typeof WebAssembly < "u" && typeof WebAssembly.Exception < "u" ? t instanceof WebAssembly.Exception : !1
}
function tS(t) {
    const e = t && t.name;
    return !e && yo(t) ? t.message && Array.isArray(t.message) && t.message.length == 2 ? t.message[0] : "WebAssembly.Exception" : e
}
function rS(t) {
    const e = t && t.message;
    return e ? e.error && typeof e.error.message == "string" ? e.error.message : yo(t) && Array.isArray(t.message) && t.message.length == 2 ? t.message[1] : e : "No error message"
}
function nS(t, e, r, i) {
    const s = r && r.syntheticException || void 0
      , a = Ls(t, e, s, i);
    return _r(a),
    a.level = "error",
    r && r.event_id && (a.event_id = r.event_id),
    yt(a)
}
function iS(t, e, r="info", i, s) {
    const a = i && i.syntheticException || void 0
      , f = mi(t, e, a, s);
    return f.level = r,
    i && i.event_id && (f.event_id = i.event_id),
    yt(f)
}
function Ls(t, e, r, i, s) {
    let a;
    if (qu(e) && e.error)
        return Yn(t, e.error);
    if (ka(e) || um(e)) {
        const f = e;
        if ("stack"in e)
            a = Yn(t, e);
        else {
            const u = f.name || (ka(f) ? "DOMError" : "DOMException")
              , o = f.message ? `${u}: ${f.message}` : u;
            a = mi(t, o, r, i),
            xi(a, o)
        }
        return "code"in f && (a.tags = {
            ...a.tags,
            "DOMException.code": `${f.code}`
        }),
        a
    }
    return Es(e) ? Yn(t, e) : Xt(e) || gn(e) ? (a = Y1(t, e, r, s),
    _r(a, {
        synthetic: !0
    }),
    a) : (a = mi(t, e, r, i),
    xi(a, `${e}`),
    _r(a, {
        synthetic: !0
    }),
    a)
}
function mi(t, e, r, i) {
    const s = {};
    if (i && r) {
        const a = Ss(t, r);
        a.length && (s.exception = {
            values: [{
                value: e,
                stacktrace: {
                    frames: a
                }
            }]
        })
    }
    if (hs(e)) {
        const {__sentry_template_string__: a, __sentry_template_values__: f} = e;
        return s.logentry = {
            message: a,
            params: f
        },
        s
    }
    return s.message = e,
    s
}
function sS(t, {isUnhandledRejection: e}) {
    const r = Am(t)
      , i = e ? "promise rejection" : "exception";
    return qu(t) ? `Event \`ErrorEvent\` captured as ${i} with message \`${t.message}\`` : gn(t) ? `Event \`${aS(t)}\` (type=${t.type}) captured as ${i}` : `Object captured as ${i} with keys: ${r}`
}
function aS(t) {
    try {
        const e = Object.getPrototypeOf(t);
        return e ? e.constructor.name : void 0
    } catch {}
}
function fS(t) {
    for (const e in t)
        if (Object.prototype.hasOwnProperty.call(t, e)) {
            const r = t[e];
            if (r instanceof Error)
                return r
        }
}
function uS(t, {metadata: e, tunnel: r, dsn: i}) {
    const s = {
        event_id: t.event_id,
        sent_at: new Date().toISOString(),
        ...e && e.sdk && {
            sdk: {
                name: e.sdk.name,
                version: e.sdk.version
            }
        },
        ...!!r && !!i && {
            dsn: Ln(i)
        }
    }
      , a = oS(t);
    return Sr(s, [a])
}
function oS(t) {
    return [{
        type: "user_report"
    }, t]
}
class lS extends b1 {
    constructor(e) {
        const r = {
            parentSpanIsAlwaysRootSpan: !0,
            ...e
        }
          , i = te.SENTRY_SDK_SOURCE || Gm();
        d1(r, "browser", ["browser"], i),
        super(r),
        r.sendClientReports && te.document && te.document.addEventListener("visibilitychange", () => {
            te.document.visibilityState === "hidden" && this._flushOutcomes()
        }
        )
    }
    eventFromException(e, r) {
        return nS(this._options.stackParser, e, r, this._options.attachStacktrace)
    }
    eventFromMessage(e, r="info", i) {
        return iS(this._options.stackParser, e, r, i, this._options.attachStacktrace)
    }
    captureUserFeedback(e) {
        if (!this._isEnabled()) {
            Lr && N.warn("SDK not enabled, will not capture user feedback.");
            return
        }
        const r = uS(e, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel
        });
        this.sendEnvelope(r)
    }
    _prepareEvent(e, r, i) {
        return e.platform = e.platform || "javascript",
        super._prepareEvent(e, r, i)
    }
}
const cS = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
  , ge = q
  , pS = 1e3;
let Rf, Ti, Si;
function ES(t) {
    const e = "dom";
    Lt(e, t),
    dt(e, hS)
}
function hS() {
    if (!ge.document)
        return;
    const t = De.bind(null, "dom")
      , e = bf(t, !0);
    ge.document.addEventListener("click", e, !1),
    ge.document.addEventListener("keypress", e, !1),
    ["EventTarget", "Node"].forEach(r => {
        const i = ge[r] && ge[r].prototype;
        !i || !i.hasOwnProperty || !i.hasOwnProperty("addEventListener") || (ve(i, "addEventListener", function(s) {
            return function(a, f, u) {
                if (a === "click" || a == "keypress")
                    try {
                        const o = this
                          , c = o.__sentry_instrumentation_handlers__ = o.__sentry_instrumentation_handlers__ || {}
                          , p = c[a] = c[a] || {
                            refCount: 0
                        };
                        if (!p.handler) {
                            const R = bf(t);
                            p.handler = R,
                            s.call(this, a, R, u)
                        }
                        p.refCount++
                    } catch {}
                return s.call(this, a, f, u)
            }
        }),
        ve(i, "removeEventListener", function(s) {
            return function(a, f, u) {
                if (a === "click" || a == "keypress")
                    try {
                        const o = this
                          , c = o.__sentry_instrumentation_handlers__ || {}
                          , p = c[a];
                        p && (p.refCount--,
                        p.refCount <= 0 && (s.call(this, a, p.handler, u),
                        p.handler = void 0,
                        delete c[a]),
                        Object.keys(c).length === 0 && delete o.__sentry_instrumentation_handlers__)
                    } catch {}
                return s.call(this, a, f, u)
            }
        }))
    }
    )
}
function xS(t) {
    if (t.type !== Ti)
        return !1;
    try {
        if (!t.target || t.target._sentryId !== Si)
            return !1
    } catch {}
    return !0
}
function _S(t, e) {
    return t !== "keypress" ? !1 : !e || !e.tagName ? !0 : !(e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable)
}
function bf(t, e=!1) {
    return r => {
        if (!r || r._sentryCaptured)
            return;
        const i = RS(r);
        if (_S(r.type, i))
            return;
        Rt(r, "_sentryCaptured", !0),
        i && !i._sentryId && Rt(i, "_sentryId", Ke());
        const s = r.type === "keypress" ? "input" : r.type;
        xS(r) || (t({
            event: r,
            name: s,
            global: e
        }),
        Ti = r.type,
        Si = i ? i._sentryId : void 0),
        clearTimeout(Rf),
        Rf = ge.setTimeout( () => {
            Si = void 0,
            Ti = void 0
        }
        , pS)
    }
}
function RS(t) {
    try {
        return t.target
    } catch {
        return null
    }
}
let Dr;
function go(t) {
    const e = "history";
    Lt(e, t),
    dt(e, bS)
}
function bS() {
    if (!hT())
        return;
    const t = ge.onpopstate;
    ge.onpopstate = function(...r) {
        const i = ge.location.href
          , s = Dr;
        if (Dr = i,
        De("history", {
            from: s,
            to: i
        }),
        t)
            try {
                return t.apply(this, r)
            } catch {}
    }
    ;
    function e(r) {
        return function(...i) {
            const s = i.length > 2 ? i[2] : void 0;
            if (s) {
                const a = Dr
                  , f = String(s);
                Dr = f,
                De("history", {
                    from: a,
                    to: f
                })
            }
            return r.apply(this, i)
        }
    }
    ve(ge.history, "pushState", e),
    ve(ge.history, "replaceState", e)
}
const Mr = {};
function yS(t) {
    const e = Mr[t];
    if (e)
        return e;
    let r = ge[t];
    if (Ei(r))
        return Mr[t] = r.bind(ge);
    const i = ge.document;
    if (i && typeof i.createElement == "function")
        try {
            const s = i.createElement("iframe");
            s.hidden = !0,
            i.head.appendChild(s);
            const a = s.contentWindow;
            a && a[t] && (r = a[t]),
            i.head.removeChild(s)
        } catch (s) {
            cS && N.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, s)
        }
    return r && (Mr[t] = r.bind(ge))
}
function yf(t) {
    Mr[t] = void 0
}
const or = "__sentry_xhr_v3__";
function gS(t) {
    const e = "xhr";
    Lt(e, t),
    dt(e, mS)
}
function mS() {
    if (!ge.XMLHttpRequest)
        return;
    const t = XMLHttpRequest.prototype;
    t.open = new Proxy(t.open,{
        apply(e, r, i) {
            const s = ze() * 1e3
              , a = We(i[0]) ? i[0].toUpperCase() : void 0
              , f = TS(i[1]);
            if (!a || !f)
                return e.apply(r, i);
            r[or] = {
                method: a,
                url: f,
                request_headers: {}
            },
            a === "POST" && f.match(/sentry_key/) && (r.__sentry_own_request__ = !0);
            const u = () => {
                const o = r[or];
                if (o && r.readyState === 4) {
                    try {
                        o.status_code = r.status
                    } catch {}
                    const c = {
                        endTimestamp: ze() * 1e3,
                        startTimestamp: s,
                        xhr: r
                    };
                    De("xhr", c)
                }
            }
            ;
            return "onreadystatechange"in r && typeof r.onreadystatechange == "function" ? r.onreadystatechange = new Proxy(r.onreadystatechange,{
                apply(o, c, p) {
                    return u(),
                    o.apply(c, p)
                }
            }) : r.addEventListener("readystatechange", u),
            r.setRequestHeader = new Proxy(r.setRequestHeader,{
                apply(o, c, p) {
                    const [R,x] = p
                      , g = c[or];
                    return g && We(R) && We(x) && (g.request_headers[R.toLowerCase()] = x),
                    o.apply(c, p)
                }
            }),
            e.apply(r, i)
        }
    }),
    t.send = new Proxy(t.send,{
        apply(e, r, i) {
            const s = r[or];
            if (!s)
                return e.apply(r, i);
            i[0] !== void 0 && (s.body = i[0]);
            const a = {
                startTimestamp: ze() * 1e3,
                xhr: r
            };
            return De("xhr", a),
            e.apply(r, i)
        }
    })
}
function TS(t) {
    if (We(t))
        return t;
    try {
        return t.toString()
    } catch {}
}
function SS(t, e=yS("fetch")) {
    let r = 0
      , i = 0;
    function s(a) {
        const f = a.body.length;
        r += f,
        i++;
        const u = {
            body: a.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: t.headers,
            keepalive: r <= 6e4 && i < 15,
            ...t.fetchOptions
        };
        if (!e)
            return yf("fetch"),
            nn("No fetch implementation available");
        try {
            return e(t.url, u).then(o => (r -= f,
            i--,
            {
                statusCode: o.status,
                headers: {
                    "x-sentry-rate-limits": o.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": o.headers.get("Retry-After")
                }
            }))
        } catch (o) {
            return yf("fetch"),
            r -= f,
            i--,
            nn(o)
        }
    }
    return L1(t, s)
}
const LS = 30
  , dS = 50;
function Li(t, e, r, i) {
    const s = {
        filename: t,
        function: e === "<anonymous>" ? bt : e,
        in_app: !0
    };
    return r !== void 0 && (s.lineno = r),
    i !== void 0 && (s.colno = i),
    s
}
const vS = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i
  , AS = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
  , CS = /\((\S*)(?::(\d+))(?::(\d+))\)/
  , BS = t => {
    const e = vS.exec(t);
    if (e) {
        const [,i,s,a] = e;
        return Li(i, bt, +s, +a)
    }
    const r = AS.exec(t);
    if (r) {
        if (r[2] && r[2].indexOf("eval") === 0) {
            const f = CS.exec(r[2]);
            f && (r[2] = f[1],
            r[3] = f[2],
            r[4] = f[3])
        }
        const [s,a] = mo(r[1] || bt, r[2]);
        return Li(a, s, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0)
    }
}
  , US = [LS, BS]
  , KS = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
  , wS = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
  , NS = t => {
    const e = KS.exec(t);
    if (e) {
        if (e[3] && e[3].indexOf(" > eval") > -1) {
            const a = wS.exec(e[3]);
            a && (e[1] = e[1] || "eval",
            e[3] = a[1],
            e[4] = a[2],
            e[5] = "")
        }
        let i = e[3]
          , s = e[1] || bt;
        return [s,i] = mo(s, i),
        Li(i, s, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
    }
}
  , IS = [dS, NS]
  , DS = [US, IS]
  , OS = eo(...DS)
  , mo = (t, e) => {
    const r = t.indexOf("safari-extension") !== -1
      , i = t.indexOf("safari-web-extension") !== -1;
    return r || i ? [t.indexOf("@") !== -1 ? t.split("@")[0] : bt, r ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
}
  , Or = 1024
  , PS = "Breadcrumbs"
  , kS = (t={}) => {
    const e = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...t
    };
    return {
        name: PS,
        setup(r) {
            e.console && Km(GS(r)),
            e.dom && ES(MS(r, e.dom)),
            e.xhr && gS(XS(r)),
            e.fetch && Dm(jS(r)),
            e.history && go(FS(r)),
            e.sentry && r.on("beforeSendEvent", $S(r))
        }
    }
}
  , VS = kS;
function $S(t) {
    return function(r) {
        Te() === t && mt({
            category: `sentry.${r.type === "transaction" ? "transaction" : "event"}`,
            event_id: r.event_id,
            level: r.level,
            message: et(r)
        }, {
            event: r
        })
    }
}
function MS(t, e) {
    return function(i) {
        if (Te() !== t)
            return;
        let s, a, f = typeof e == "object" ? e.serializeAttribute : void 0, u = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : void 0;
        u && u > Or && (Lr && N.warn(`\`dom.maxStringLength\` cannot exceed ${Or}, but a value of ${u} was configured. Sentry will use ${Or} instead.`),
        u = Or),
        typeof f == "string" && (f = [f]);
        try {
            const c = i.event
              , p = qS(c) ? c.target : c;
            s = zu(p, {
                keyAttrs: f,
                maxStringLength: u
            }),
            a = bm(p)
        } catch {
            s = "<unknown>"
        }
        if (s.length === 0)
            return;
        const o = {
            category: `ui.${i.name}`,
            message: s
        };
        a && (o.data = {
            "ui.component_name": a
        }),
        mt(o, {
            event: i.event,
            name: i.name,
            global: i.global
        })
    }
}
function GS(t) {
    return function(r) {
        if (Te() !== t)
            return;
        const i = {
            category: "console",
            data: {
                arguments: r.args,
                logger: "console"
            },
            level: Jm(r.level),
            message: Va(r.args, " ")
        };
        if (r.level === "assert")
            if (r.args[0] === !1)
                i.message = `Assertion failed: ${Va(r.args.slice(1), " ") || "console.assert"}`,
                i.data.arguments = r.args.slice(1);
            else
                return;
        mt(i, {
            input: r.args,
            level: r.level
        })
    }
}
function XS(t) {
    return function(r) {
        if (Te() !== t)
            return;
        const {startTimestamp: i, endTimestamp: s} = r
          , a = r.xhr[or];
        if (!i || !s || !a)
            return;
        const {method: f, url: u, status_code: o, body: c} = a
          , p = {
            method: f,
            url: u,
            status_code: o
        }
          , R = {
            xhr: r.xhr,
            input: c,
            startTimestamp: i,
            endTimestamp: s
        }
          , x = Wu(o);
        mt({
            category: "xhr",
            data: p,
            type: "http",
            level: x
        }, R)
    }
}
function jS(t) {
    return function(r) {
        if (Te() !== t)
            return;
        const {startTimestamp: i, endTimestamp: s} = r;
        if (s && !(r.fetchData.url.match(/sentry_key/) && r.fetchData.method === "POST"))
            if (r.error) {
                const a = r.fetchData
                  , f = {
                    data: r.error,
                    input: r.args,
                    startTimestamp: i,
                    endTimestamp: s
                };
                mt({
                    category: "fetch",
                    data: a,
                    level: "error",
                    type: "http"
                }, f)
            } else {
                const a = r.response
                  , f = {
                    ...r.fetchData,
                    status_code: a && a.status
                }
                  , u = {
                    input: r.args,
                    response: a,
                    startTimestamp: i,
                    endTimestamp: s
                }
                  , o = Wu(f.status_code);
                mt({
                    category: "fetch",
                    data: f,
                    type: "http",
                    level: o
                }, u)
            }
    }
}
function FS(t) {
    return function(r) {
        if (Te() !== t)
            return;
        let i = r.from
          , s = r.to;
        const a = Jn(te.location.href);
        let f = i ? Jn(i) : void 0;
        const u = Jn(s);
        (!f || !f.path) && (f = a),
        a.protocol === u.protocol && a.host === u.host && (s = u.relative),
        a.protocol === f.protocol && a.host === f.host && (i = f.relative),
        mt({
            category: "navigation",
            data: {
                from: i,
                to: s
            }
        })
    }
}
function qS(t) {
    return !!t && !!t.target
}
const HS = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
  , WS = "BrowserApiErrors"
  , zS = (t={}) => {
    const e = {
        XMLHttpRequest: !0,
        eventTarget: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0,
        ...t
    };
    return {
        name: WS,
        setupOnce() {
            e.setTimeout && ve(te, "setTimeout", gf),
            e.setInterval && ve(te, "setInterval", gf),
            e.requestAnimationFrame && ve(te, "requestAnimationFrame", YS),
            e.XMLHttpRequest && "XMLHttpRequest"in te && ve(XMLHttpRequest.prototype, "send", QS);
            const r = e.eventTarget;
            r && (Array.isArray(r) ? r : HS).forEach(ZS)
        }
    }
}
  , JS = zS;
function gf(t) {
    return function(...e) {
        const r = e[0];
        return e[0] = qt(r, {
            mechanism: {
                data: {
                    function: at(t)
                },
                handled: !1,
                type: "instrument"
            }
        }),
        t.apply(this, e)
    }
}
function YS(t) {
    return function(e) {
        return t.apply(this, [qt(e, {
            mechanism: {
                data: {
                    function: "requestAnimationFrame",
                    handler: at(t)
                },
                handled: !1,
                type: "instrument"
            }
        })])
    }
}
function QS(t) {
    return function(...e) {
        const r = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(s => {
            s in r && typeof r[s] == "function" && ve(r, s, function(a) {
                const f = {
                    mechanism: {
                        data: {
                            function: s,
                            handler: at(a)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }
                  , u = Rs(a);
                return u && (f.mechanism.data.handler = at(u)),
                qt(a, f)
            })
        }
        ),
        t.apply(this, e)
    }
}
function ZS(t) {
    const e = te
      , r = e[t] && e[t].prototype;
    !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (ve(r, "addEventListener", function(i) {
        return function(s, a, f) {
            try {
                typeof a.handleEvent == "function" && (a.handleEvent = qt(a.handleEvent, {
                    mechanism: {
                        data: {
                            function: "handleEvent",
                            handler: at(a),
                            target: t
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }))
            } catch {}
            return i.apply(this, [s, qt(a, {
                mechanism: {
                    data: {
                        function: "addEventListener",
                        handler: at(a),
                        target: t
                    },
                    handled: !1,
                    type: "instrument"
                }
            }), f])
        }
    }),
    ve(r, "removeEventListener", function(i) {
        return function(s, a, f) {
            const u = a;
            try {
                const o = u && u.__sentry_wrapped__;
                o && i.call(this, s, o, f)
            } catch {}
            return i.call(this, s, u, f)
        }
    }))
}
const eL = "GlobalHandlers"
  , tL = (t={}) => {
    const e = {
        onerror: !0,
        onunhandledrejection: !0,
        ...t
    };
    return {
        name: eL,
        setupOnce() {
            Error.stackTraceLimit = 50
        },
        setup(r) {
            e.onerror && (nL(r),
            mf("onerror")),
            e.onunhandledrejection && (iL(r),
            mf("onunhandledrejection"))
        }
    }
}
  , rL = tL;
function nL(t) {
    km(e => {
        const {stackParser: r, attachStacktrace: i} = To();
        if (Te() !== t || bo())
            return;
        const {msg: s, url: a, line: f, column: u, error: o} = e
          , c = fL(Ls(r, o || s, void 0, i, !1), a, f, u);
        c.level = "error",
        oo(c, {
            originalException: o,
            mechanism: {
                handled: !1,
                type: "onerror"
            }
        })
    }
    )
}
function iL(t) {
    $m(e => {
        const {stackParser: r, attachStacktrace: i} = To();
        if (Te() !== t || bo())
            return;
        const s = sL(e)
          , a = xs(s) ? aL(s) : Ls(r, s, void 0, i, !0);
        a.level = "error",
        oo(a, {
            originalException: s,
            mechanism: {
                handled: !1,
                type: "onunhandledrejection"
            }
        })
    }
    )
}
function sL(t) {
    if (xs(t))
        return t;
    try {
        if ("reason"in t)
            return t.reason;
        if ("detail"in t && "reason"in t.detail)
            return t.detail.reason
    } catch {}
    return t
}
function aL(t) {
    return {
        exception: {
            values: [{
                type: "UnhandledRejection",
                value: `Non-Error promise rejection captured with value: ${String(t)}`
            }]
        }
    }
}
function fL(t, e, r, i) {
    const s = t.exception = t.exception || {}
      , a = s.values = s.values || []
      , f = a[0] = a[0] || {}
      , u = f.stacktrace = f.stacktrace || {}
      , o = u.frames = u.frames || []
      , c = isNaN(parseInt(i, 10)) ? void 0 : i
      , p = isNaN(parseInt(r, 10)) ? void 0 : r
      , R = We(e) && e.length > 0 ? e : Rm();
    return o.length === 0 && o.push({
        colno: c,
        filename: R,
        function: bt,
        in_app: !0,
        lineno: p
    }),
    t
}
function mf(t) {
    Lr && N.log(`Global Handler attached: ${t}`)
}
function To() {
    const t = Te();
    return t && t.getOptions() || {
        stackParser: () => [],
        attachStacktrace: !1
    }
}
const uL = () => ({
    name: "HttpContext",
    preprocessEvent(t) {
        if (!te.navigator && !te.location && !te.document)
            return;
        const e = t.request && t.request.url || te.location && te.location.href
          , {referrer: r} = te.document || {}
          , {userAgent: i} = te.navigator || {}
          , s = {
            ...t.request && t.request.headers,
            ...r && {
                Referer: r
            },
            ...i && {
                "User-Agent": i
            }
        }
          , a = {
            ...t.request,
            ...e && {
                url: e
            },
            headers: s
        };
        t.request = a
    }
})
  , oL = "cause"
  , lL = 5
  , cL = "LinkedErrors"
  , pL = (t={}) => {
    const e = t.limit || lL
      , r = t.key || oL;
    return {
        name: cL,
        preprocessEvent(i, s, a) {
            const f = a.getOptions();
            Em(Ts, f.stackParser, f.maxValueLength, r, e, i, s)
        }
    }
}
  , EL = pL;
function hL(t) {
    return [N1(), B1(), JS(), VS(), rL(), EL(), q1(), uL()]
}
function xL(t={}) {
    const e = {
        defaultIntegrations: hL(),
        release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : te.SENTRY_RELEASE && te.SENTRY_RELEASE.id ? te.SENTRY_RELEASE.id : void 0,
        autoSessionTracking: !0,
        sendClientReports: !0
    };
    return t.defaultIntegrations == null && delete t.defaultIntegrations,
    {
        ...e,
        ...t
    }
}
function _L() {
    const t = typeof te.window < "u" && te;
    if (!t)
        return !1;
    const e = t.chrome ? "chrome" : "browser"
      , r = t[e]
      , i = r && r.runtime && r.runtime.id
      , s = te.location && te.location.href || ""
      , a = ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"]
      , f = !!i && te === te.top && a.some(o => s.startsWith(`${o}//`))
      , u = typeof t.nw < "u";
    return !!i && !f && !u
}
function RL(t={}) {
    const e = xL(t);
    if (!e.skipBrowserExtensionCheck && _L()) {
        mr( () => {
            console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
        }
        );
        return
    }
    Lr && (to() || N.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill."));
    const r = {
        ...e,
        stackParser: Bm(e.stackParser || OS),
        integrations: _1(e),
        transport: e.transport || SS
    }
      , i = m1(lS, r);
    return e.autoSessionTracking && bL(),
    i
}
function bL() {
    if (typeof te.document > "u") {
        Lr && N.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
        return
    }
    uf({
        ignoreDuration: !0
    }),
    of(),
    go( ({from: t, to: e}) => {
        t !== void 0 && t !== e && (uf({
            ignoreDuration: !0
        }),
        of())
    }
    )
}
const yL = "UNABLE TO LOAD. TAP TO TRY AGAIN."
  , gL = {
    RETRY: yL
}
  , mL = "CHARGEMENT IMPOSSIBLE. APPUYEZ POUR RÉESSAYER."
  , TL = {
    RETRY: mL
}
  , SL = "IMPOSSIBILE CARICARE. CLICCA PER RIPROVARE."
  , LL = {
    RETRY: SL
}
  , dL = "LADEN FEHLGESCHLAGEN. DRÜCKEN ZUM ERNEUT VERSUCHEN."
  , vL = {
    RETRY: dL
}
  , AL = "CARGA FALLIDA. TOCA PARA VOLVER A INTENTARLO."
  , CL = {
    RETRY: AL
}
  , BL = "NO SE PUEDE CARGAR. TOCA PARA VOLVER A INTENTARLO."
  , UL = {
    RETRY: BL
}
  , KL = "NÃO FOI POSSÍVEL CARREGAR. TOQUE PARA TENTAR DE NOVO."
  , wL = {
    RETRY: KL
}
  , Tf = {
    en: gL,
    fr: TL,
    it: LL,
    de: vL,
    es: CL,
    "es-XL": UL,
    "pt-BR": wL
};
let NL = class {
    constructor(e) {
        Se(this, "manifest");
        Se(this, "registered", {});
        Se(this, "register", e => {
            this.registered.connect = e.connect,
            this.registered.mount = e.mount,
            this.registered.info = e.info
        }
        );
        Se(this, "load", async e => {
            document.querySelectorAll("[data-tv-prefetch]").forEach(u => u.remove());
            const i = this.getBranchName(e)
              , s = window.tv.manifest.branches[i];
            if (!s)
                throw new Error(`[loader] Unknown branch "${i}" can not be found in manifest`);
            const a = s.bundles[e.app];
            if (!a)
                throw new Error(`[loader] Unknown app "${e.app}" can not be loaded from branch "${i}"`);
            try {
                i === "** hmr **" ? await this.loadHMRBundle(a) : i === "** dist **" ? await this.loadDistBundle(a) : await this.loadS3Bundle(a)
            } catch (u) {
                console.error(`[loader] Unable to load "${e.app}" from branch "${i}":`, u),
                this.showLoaderError();
                return
            }
            if (Hg("[loader] load success", {
                app: e.app,
                appVersion: a.version ?? s.version,
                loaderVersion: window.tv.manifest.loader.version,
                branch: i
            }),
            !e.autoMount)
                return;
            const f = e;
            f.version = a.version ?? s.version,
            this.mount(f)
        }
        );
        Se(this, "connect", (e, r) => {
            if (!this.registered.connect)
                throw new Error("[loader] There is not a registered connect function");
            return this.registered.connect(e, r)
        }
        );
        Se(this, "mount", e => {
            var f, u;
            if (!this.registered.mount) {
                console.error("[loader] There is not a registered app to mount"),
                this.showLoaderError();
                return
            }
            const r = document.getElementsByClassName("loader-status")[0];
            if (r && r.remove(),
            this.registered.unmount && this.registered.unmount(),
            this.registered.info) {
                const o = this.registered.info(e);
                lo({
                    branch: o.branch,
                    "app.tag": o.tag,
                    "app.type": o.type,
                    "app.version": o.version,
                    "app.wrapper": o.wrapper
                }),
                $i.pageView(o.tag)
            }
            Yr.setup(e.app, ((f = e.room) == null ? void 0 : f.code) ?? ((u = e.client) == null ? void 0 : u.code));
            const i = document.querySelectorAll("[data-tv-style]")
              , a = Array.from(document.querySelectorAll("[data-tv-prefetch]")).map(o => {
                const c = document.createElement("link");
                return c.rel = "stylesheet",
                c.href = o.href,
                c.setAttribute("data-tv-style", ""),
                c
            }
            );
            document.head.append(...a),
            i.forEach(o => o.remove()),
            this.registered.unmount = this.registered.mount(e) ?? void 0,
            delete this.registered.connect,
            delete this.registered.mount,
            delete this.registered.info
        }
        );
        Se(this, "debugLoad", async (e, r) => {
            throw new Error("[Loader] Debug controllers are not available in production builds")
        }
        );
        this.manifest = e
    }
    getBranchName(e) {
        var a, f, u, o, c;
        const r = (f = (a = e.match) == null ? void 0 : a.params) == null ? void 0 : f.branch
          , i = Yr.get("preference:branch")
          , s = this.manifest.branches;
        if (r)
            return r === "hmr" ? "** hmr **" : r === "dist" ? "** dist **" : r;
        if (e.branch)
            return e.branch;
        if ((u = s["** hmr **"]) != null && u.bundles[e.app])
            return "** hmr **";
        if (i && ((o = s[i]) != null && o.bundles[e.app]))
            return i;
        if ((c = s["** dist **"]) != null && c.bundles[e.app])
            return "** dist **";
        if (s.main)
            return "main";
        throw new Error("[loader] Could not resolve a branch name and main is not available")
    }
    getS3Url(e, r) {
        return `https://nedojack.ru/${r}/${e}`
    }
    async loadHMRBundle(e) {
        const r = e.file;
        await r()
    }
    loadScript(e) {
        return new Promise( (r, i) => {
            const s = document.createElement("script");
            s.src = e,
            s.async = !0,
            s.type = "module",
            s.crossOrigin = "",
            s.onerror = i,
            s.onload = r,
            s.setAttribute("data-tv-script", ""),
            document.head.append(s)
        }
        )
    }
    async fetchBundle(e, r, i) {
        r.forEach(a => {
            const f = i ? this.getS3Url(a, i) : a
              , u = document.createElement("link");
            i ? u.rel = "prefetch" : (u.rel = "preload",
            u.as = "style"),
            u.href = f,
            u.setAttribute("data-tv-prefetch", ""),
            document.head.append(u)
        }
        );
        const s = i ? this.getS3Url(e, i) : e;
        await this.loadScript(s)
    }
    async loadDistBundle(e) {
        return this.fetchBundle(`/@fs/${e.file}`, e.css)
    }
    async loadS3Bundle(e) {
        return this.fetchBundle(e.file, e.css, e.base)
    }
    showLoaderError() {
        const e = document.getElementsByClassName("loader-status")[0];
        if (!e)
            return;
        const r = document.createElement("p")
          , i = navigator.languages[0]
          , s = Tf[i] ?? Tf.en;
        e.classList.add("error"),
        r.textContent = s.RETRY,
        e.append(r),
        e.addEventListener("click", () => window.location.reload())
    }
}
;
const Sf = {
    EcastEntityNotFound: 2005,
    EcastFilterError: 2021
}
  , IL = ["ceCurrentVideo.currentTime", "chrome-extension", "ResizeObserver", "webkitExitFullScreen", "window.webkit.messageHandlers.selectedTextHandler.postMessage", "promiseResolveThenableJob", "Cannot read property 'then' of undefined", "null is not an object (evaluating 't.scrollHeight')", "Cannot read properties of null (reading 'removeEventListener')"]
  , DL = t => {
    RL({
        dsn: "https://bb026273d98c4b99ab11c1de369f521f@o420318.ingest.sentry.io/6387933",
        debug: "false",
        environment: t.environment,
        release: `tv-mono@${t.loader.version}`,
        ignoreErrors: IL,
        beforeSend: async (e, r) => {
            if (r.originalException) {
                const i = r.originalException;
                if (i.code === Sf.EcastEntityNotFound)
                    return o1("no entity found having key", {
                        extra: {
                            exception: r.originalException
                        }
                    }),
                    null;
                if (i.code === Sf.EcastFilterError)
                    return null
            }
            if (window.tv.onError)
                try {
                    const i = await window.tv.onError(e, r);
                    i && (e.contexts = e.contexts || {},
                    e.contexts.debug = i)
                } catch (i) {
                    console.error("failed to send states to ecast", i)
                }
            return e
        }
    }),
    lo({
        "app.tag": "@loader",
        "app.version": t.loader.version,
        "app.type": t.loader.type,
        branch: t.loader.branch
    })
}
;
let Lf;
async function df() {
    if (!Lf)
        try {
            Lf = await navigator.wakeLock.request("screen")
        } catch (t) {
            console.warn(t)
        }
}
const OL = async () => {
    navigator.wakeLock && (await df(),
    document.addEventListener("visibilitychange", () => {
        document.visibilityState === "visible" && df()
    }
    ))
}
;
function PL(t) {
    let e = "<div>";
    return t ? (e += `   <h1>Debug JSON Index : ${t}</h1>`,
    Object.keys(window.tv.debugMap[t]).forEach(r => {
        e += `    <a href="/${window.tv.debugMap[t][r]}" target="_blank">${r}</a>`
    }
    )) : (e += "   <h1>Debug JSON Index</h1>",
    Object.keys(window.tv.debugMap).sort().forEach(r => {
        e += "    <details>",
        e += `        <summary>${r}</summary>`,
        Object.keys(window.tv.debugMap[r]).forEach(i => {
            e += `        <a href="/${window.tv.debugMap[r][i]}" target="_blank">${i}</a>`
        }
        ),
        e += "    </details>"
    }
    )),
    e += "</div>",
    e
}
function kL() {
    return `
    html {
        padding: 30px;
        background: #4254f4;
        color: #fff;
    }

    body {
        background: #4254f4;
    }

    body .loader-status {
        display: none;
    }

    h1 {
        font-size: 24px;
        padding-bottom: 15px;
    }

    details {
        width: 200px;
    }
    
    a {
        display: block;
        padding-left: 20px;
        color: #d4d8ff;
    }
    `
}
function vf(t) {
    if (!window.tv.debugMap)
        return;
    const e = document.createElement("style");
    e.innerHTML = kL(),
    document.getElementsByTagName("html")[0].append(e);
    const i = document.getElementById("app");
    i.innerHTML = PL(t)
}
function VL() {
    const t = window.tv.manifest;
    let e = "<div>";
    e += `   <h1>Current Manifest : ${t.environment}</h1>`;
    const r = new Date(t.loader.lastUpdated);
    return e += "   <h2>Loader</h2>",
    e += `   <p>last deployed: <strong>${r.toLocaleDateString()} ${r.toLocaleTimeString()}</strong></p>`,
    e += `   <p>branch: <strong>${t.loader.branch}</strong></p>`,
    e += `   <p>version: <strong>${t.loader.version}</strong></p>`,
    e += `   <p>type: <strong>${t.loader.type}</strong></p>`,
    e += "   <h2>Branches</h2>",
    Object.keys(t.branches).sort().forEach(i => {
        const s = t.branches[i]
          , a = new Date(s.lastUpdated);
        e += "    <details>",
        e += "        <summary>",
        e += `            <span class="name">${i}</span>`,
        e += `            <span class="version">${s.version}</span>`,
        e += `            <span class="date">${a.toLocaleDateString()} ${a.toLocaleTimeString()}</span>`,
        e += `            <span class="type">${s.type}</span>`,
        e += `            <span class="type">${Object.keys(s.bundles).length} Apps</span>`,
        e += "        </summary>",
        Object.keys(s.bundles).forEach(f => {
            const u = s.bundles[f];
            u.version ? e += `        <p><span class="name">${f}</span> <span class="version">${u.version}</span></p>` : e += `        <p><span class="name">${f}</span> <span class="version">${s.version}</span></p>`
        }
        ),
        e += "    </details>"
    }
    ),
    e += "</div>",
    e
}
function $L() {
    return `
    html {
        padding: 30px;
        background: #4254f4;
        color: #fff;
    }

    body {
        background: #4254f4;
    }

    body .loader-status {
        display: none;
    }

    h1 {
        font-size: 24px;
    }

    h2 {
        padding-top: 30px;
    }

    details {
        padding: 3px 0;
        border-bottom: 1px solid #a4adfa;
    }

    details span {
        font-size: 14px;
        display: inline-block;
    }

    span.name {
        width: 175px;
    }

    span.version {
        width: 225px;
    }

    span.date {
        width: 225px;
        font-style: italic;
    }

    span.type {
        color: #4254F4;
        font-size: 11px;
        padding: 2px 10px 0px;
        background: #fff;
        border-radius: 10px;
    }
    
    details p {
        padding: 3px 0;
        padding-left: 30px;
        font-size: 14px;
    }

    details p:nth-child(odd) {
        background: rgba(255, 255, 255, 0.1);
    }
    `
}
function ML() {
    if (!window.tv.manifest)
        return;
    const t = document.createElement("style");
    t.innerHTML = $L(),
    document.getElementsByTagName("html")[0].append(t);
    const r = document.getElementById("app");
    r.innerHTML = VL()
}
const GL = {
    routes: [{
        path: "/",
        load: "@connect"
    }, {
        path: ["/past-games", "/past-games/:galleryId"],
        load: "@connect"
    }, {
        path: "/gallery",
        redirect: "/past-games"
    }, {
        path: "/gallery/:galleryId",
        handler: t => ({
            redirect: `/past-games/${t.data.galleryId}`
        })
    }, {
        path: ["/gallery/:galleryId/:artifactId", "/gallery/:galleryId/:artifactId/:itemId"],
        handler: t => {
            const e = Ms(t.data.galleryId);
            return !e || !e.categoryId ? {
                redirect: "/"
            } : (t.data.categoryId = e.categoryId,
            {
                load: e.tag
            })
        }
    }, {
        path: "/render/:galleryId/:artifactId/:renderer",
        handler: t => {
            const e = Ms(t.data.galleryId);
            return !e || !e.categoryId ? {
                redirect: "/"
            } : {
                load: e.tag
            }
        }
    }, {
        path: "/moderator",
        load: "@moderator"
    }, {
        path: ["/moderate", "/moderation", "/moderador", "/moderateur", "/moderatore"],
        redirect: "/moderator"
    }, {
        path: "/manifest",
        handler: () => {
            ML()
        }
    }, {
        path: "/debug",
        handler: () => {
            vf()
        }
    }, {
        path: ["/debug/:app", "/debug/local/:app"],
        handler: t => {
            vf(t.data.app)
        }
    }, {
        path: ["/debug/local/:app/:file", "/debug/local/:app/:file/:marker"],
        debugLoad: "local"
    }, {
        path: ["/debug/cloud/:app/:file", "/debug/cloud/:app/:file/:marker"],
        debugLoad: "cloud"
    }]
}
  , XL = {
    hmrApps: ["teeko-web"],
    hostnames: ["teeko.jackboxgames.com"],
    routes: [{
        path: ["/", "/event"],
        load: "@teeko-web"
    }]
};
class jL {
    constructor(e) {
        Se(this, "hmrApp", "loader");
        Se(this, "sites");
        this.sites = e;
        const r = this.getMatch(window.location.pathname);
        this.executeMatch(r)
    }
    executeMatch(e) {
        var i, s;
        const r = ((s = e == null ? void 0 : (i = e.route).handler) == null ? void 0 : s.call(i, e)) ?? (e == null ? void 0 : e.route);
        if (!e || !r) {
            this.redirect("/", e);
            return
        }
        if (r.debugLoad) {
            window.tv.debugLoad(r.debugLoad, e);
            return
        }
        if (r.load) {
            window.tv.load({
                app: r.load,
                match: e,
                autoMount: e.route.autoMount ?? !0
            });
            return
        }
        if (e.route.redirect) {
            this.redirect(e.route.redirect, e);
            return
        }
        if (!e.route.handler)
            throw console.error(e),
            new Error("[Router] Unable to execute match")
    }
    redirect(e, r) {
        const i = this.getMatch(e);
        if (!i)
            throw new Error("[Router] Redirecting to an unexpected path causes an infinite redirect loop");
        r && (i.hashString || (i.hashString = r.hashString),
        i.params || (i.params = r.params),
        i.queryString || (i.queryString = r.queryString)),
        window.history.replaceState(null, "", e),
        this.executeMatch(i)
    }
    getSite() {
        const e = document.location.hostname;
        return (e === "localhost" || e === "127.0.0.1" ? this.sites.find(i => {
            var s;
            return (s = i.hmrApps) == null ? void 0 : s.includes(this.hmrApp)
        }
        ) : this.sites.find(i => {
            var s;
            return (s = i.hostnames) == null ? void 0 : s.includes(e)
        }
        )) ?? this.sites[0]
    }
    splitPath(e) {
        return e.replace(/^\s*\/*\s*|\s*\/*\s*$/g, "").split("/")
    }
    matchRouteToPath(e, r) {
        if (e.length !== r.length)
            return !1;
        for (let i = 0; i < e.length; i++)
            if (e[i][0] !== ":" && e[i] !== r[i])
                return !1;
        return !0
    }
    getRoute(e, r) {
        const i = this.splitPath(e);
        for (let s = 0; s < r.length; s++) {
            const a = Array.isArray(r[s].path) ? r[s].path : [r[s].path];
            for (let f = 0; f < a.length; f++) {
                const u = this.splitPath(a[f]);
                if (this.matchRouteToPath(u, i))
                    return {
                        route: r[s],
                        parts: u
                    }
            }
        }
        return null
    }
    parseData(e, r) {
        const i = {}
          , s = this.splitPath(e);
        for (let a = 0; a < r.parts.length; a++)
            r.parts[a][0] === ":" && (i[r.parts[a].substring(1)] = s[a]);
        return i
    }
    parseParams() {
        if (!document.location.search)
            return {};
        const e = new URLSearchParams(document.location.search);
        return Object.fromEntries(e)
    }
    getMatch(e) {
        const r = this.getSite()
          , i = this.getRoute(e, r.routes);
        if (!i)
            return null;
        const s = {
            url: document.location.href,
            route: i.route,
            path: i.parts.join("/"),
            parts: i.parts,
            data: this.parseData(e, i),
            params: this.parseParams()
        };
        if (document.location.hash) {
            let a = document.location.hash;
            document.location.hash[0] === "#" && (a = a.substring(1)),
            s.hashString = a
        }
        return document.location.search && (s.queryString = document.location.search),
        s
    }
}
const FL = "production"
  , qL = 1
  , HL = {
    branch: "main",
    sha: "a5a3048a565759e3dba238a9d8d1912c828b6d05",
    lastUpdated: 1733852898122,
    version: "5.682.303",
    type: "production"
}
  , WL = {
    main: {
        sha: "a5a3048a565759e3dba238a9d8d1912c828b6d05",
        lastUpdated: 1733852898122,
        version: "5.682.303",
        type: "production",
        bundles: {
            "@connect": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/@connect",
                version: "5.682.303"
            },
            "the-wheel": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp8/the-wheel",
                version: "5.94.0"
            },
            "drawful-animate": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp8/drawful-animate",
                version: "5.229.113"
            },
            "@moderator": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/@moderator",
                version: "5.610.297"
            },
            "awshirt-tjsp": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/tjsp/awshirt",
                version: "5.673.302"
            },
            "ecast-test-client": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/internal/ecast-test-client",
                version: "5.0.0"
            },
            drawful: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp1/drawful",
                version: "5.0.0"
            },
            fibbage: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp1/fibbage",
                version: "5.0.0"
            },
            lieswatter: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp1/lieswatter",
                version: "5.0.0"
            },
            wordspud: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp1/wordspud",
                version: "5.0.0"
            },
            ydkj2015: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp1/ydkj2015",
                version: "5.0.0"
            },
            auction: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp2/auction",
                version: "5.11.0"
            },
            bombintern: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp2/bombintern",
                version: "5.10.0"
            },
            earwax: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp2/earwax",
                version: "5.23.0"
            },
            fibbage2: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp2/fibbage2",
                version: "5.3.0"
            },
            quiplash: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp2/quiplash",
                version: "5.10.0"
            },
            awshirt: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp3/awshirt",
                version: "5.670.302"
            },
            fakinit: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp3/fakinit",
                version: "5.509.256"
            },
            pollposition: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp3/pollposition",
                version: "5.3.0"
            },
            quiplash2: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp3/quiplash2",
                version: "5.10.0"
            },
            triviadeath: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp3/triviadeath",
                version: "5.10.0"
            },
            bracketeering: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp4/bracketeering",
                version: "5.3.0"
            },
            fibbage3: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp4/fibbage3",
                version: "5.3.0"
            },
            monstermingle: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp4/monstermingle",
                version: "5.3.0"
            },
            overdrawn: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp4/overdrawn",
                version: "5.3.0"
            },
            survivetheinternet: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp4/survivetheinternet",
                version: "5.3.0"
            },
            patentlystupid: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp5/patentlystupid",
                version: "5.3.0"
            },
            rapbattle: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp5/rapbattle",
                version: "5.3.0"
            },
            slingshoot: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp5/slingshoot",
                version: "5.3.0"
            },
            splittheroom: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp5/splittheroom",
                version: "5.3.0"
            },
            ydkj2018: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp5/ydkj2018",
                version: "5.3.0"
            },
            jokeboat: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp6/jokeboat",
                version: "5.3.0"
            },
            pushthebutton: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp6/pushthebutton",
                version: "5.366.138"
            },
            ridictionary: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp6/ridictionary",
                version: "5.3.0"
            },
            rolemodels: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp6/rolemodels",
                version: "5.25.0"
            },
            triviadeath2: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp6/triviadeath2",
                version: "5.456.206"
            },
            "blanky-blank": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp7/blanky-blank",
                version: "5.563.277"
            },
            everyday: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp7/everyday",
                version: "5.3.0"
            },
            "jackbox-talks": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp7/jackboxtalks",
                version: "5.25.0"
            },
            quiplash3: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp7/quiplash3",
                version: "5.359.132"
            },
            worldchamps: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp7/worldchamps",
                version: "5.144.39"
            },
            "acquisitions-inc": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/standalone/acquisitions-inc",
                version: "5.3.0"
            },
            drawful2international: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/standalone/drawful2-international",
                version: "5.3.0"
            },
            drawful2: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/standalone/drawful2",
                version: "5.10.0"
            },
            "guesspionage-crowdplay": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/standalone/guesspionage-crowdplay",
                version: "5.0.0"
            },
            "quiplash2-international": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/standalone/quiplash2-international",
                version: "5.3.0"
            },
            "survey-bomb": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp8/survey-bomb",
                version: "5.94.0"
            },
            "triviadeath2-tjsp": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/tjsp/triviadeath2",
                version: "5.436.189"
            },
            "murder-detectives": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp8/murder-detectives",
                version: "5.431.187"
            },
            "quiplash3-tjsp": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/tjsp/quiplash3",
                version: "5.436.189"
            },
            "apply-yourself": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp8/apply-yourself",
                version: "5.0.0"
            },
            "antique-freak": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp9/antique-freak",
                version: "5.94.0"
            },
            fourbage: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp9/fourbage",
                version: "5.528.271"
            },
            htmf: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp9/htmf",
                version: "5.528.271"
            },
            lineup: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp9/lineup",
                version: "5.297.119"
            },
            "range-game": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp9/range-game",
                version: "5.528.271"
            },
            prototype: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/internal/prototype",
                version: "5.681.303"
            },
            "@teeko-web": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/@teeko-web",
                version: "5.527.271"
            },
            awshirt2: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp10/awshirt2",
                version: "5.664.302"
            },
            "nopus-opus": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp10/nopus-opus",
                version: "5.349.128"
            },
            "risky-text": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp10/risky-text",
                version: "5.356.132"
            },
            "time-trivia": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp10/time-trivia",
                version: "5.348.128"
            },
            "us-them": {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/pp10/us-them",
                version: "5.528.271"
            },
            captcha: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/ppad/captcha",
                version: "5.668.302"
            },
            drawful3: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/ppad/drawful3",
                version: "5.675.302"
            },
            fakinit2: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/ppad/fakinit2",
                version: "5.596.291"
            },
            bigsurvey: {
                file: "script.js",
                css: ["assets/style-0.css"],
                base: "main/standalone/bigsurvey",
                version: "5.677.302"
            }
        }
    }
}
  , zL = {
    environment: FL,
    version: qL,
    loader: HL,
    branches: WL
}
  , ds = zL;
let JL = NL;
const ur = new JL(ds);
window.tv = {
    apps: fm,
    debugLoad: ur.debugLoad,
    load: ur.load,
    games: Vf,
    register: ur.register,
    mount: ur.mount,
    connect: ur.connect,
    manifest: ds
};
DL(ds);
$i.setup();
Yr.setup();
OL();
new jL([GL, XL]);
//# sourceMappingURL=B5_STl5U.js.map
