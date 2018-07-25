/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [], r = e.document, i = Object.getPrototypeOf, o = n.slice, a = n.concat, s = n.push, u = n.indexOf, l = {}, c = l.toString, f = l.hasOwnProperty, p = f.toString, d = p.call(Object), h = {}, g = function e(t) {
        return "function" == typeof t && "number" != typeof t.nodeType
    }, y = function e(t) {
        return null != t && t === t.window
    }, v = {type: !0, src: !0, noModule: !0};

    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n) for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }

    var b = "3.3.1", w = function (e, t) {
        return new w.fn.init(e, t)
    }, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1", constructor: w, length: 0, toArray: function () {
            return o.call(this)
        }, get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return w.each(this, e)
        }, map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(o.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: s, sort: n.sort, splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e) {
            m(e)
        }, each: function (e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(T, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        }, map: function (e, t, n) {
            var r, i, o = 0, s = [];
            if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i); else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        }, guid: 1, support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });

    function C(e) {
        var t = !!e && "length" in e && e.length, n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    var E = function (e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ae(), k = ae(), S = ae(), D = function (e, t) {
                return e === t && (f = !0), 0
            }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]", W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), X = new RegExp(W),
            U = new RegExp("^" + R + "$"), V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, re = function () {
                p()
            }, ie = me(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function (e, t) {
                    q.apply(e, H.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) ;
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
                    if (9 === T) {
                        if (!(l = t.getElementById(o))) return r;
                        if (l.id === o) return r.push(l), r
                    } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                } else {
                    if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                    if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r
                    } catch (e) {
                    } finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }

        function ae() {
            var e = [];

            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }

            return t
        }

        function se(e) {
            return e[b] = !0, e
        }

        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            var n = e.split("|"), i = n.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function ce(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function de(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function he(e) {
            return se(function (t) {
                return t = +t, se(function (n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, p = oe.setDocument = function (e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ue(function (e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
            }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
            }), ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
            }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1
            }, D = t ? function (e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o) return ce(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }, d) : d
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {
            }
            return oe(t, d, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()], o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, r = [], i = 0, o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++]) t === e[o] && (i = r.push(o));
                while (i--) e.splice(r[i], 1)
            }
            return c = null, e
        }, i = oe.getText = function (e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else while (t = e[r++]) n += i(t);
            return n
        }, (r = oe.selectors = {
            cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            }, filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode, v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if (1 === p.nodeType && ++x && p === t) {
                                    c[e] = [T, d, x];
                                    break
                                }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        var r, o = i(e, t), a = o.length;
                        while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function (e) {
                        return i(e, 0, n)
                    }) : i
                }
            }, pseudos: {
                not: se(function (e) {
                    var t = [], n = [], r = s(e.replace(B, "$1"));
                    return r[b] ? se(function (e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: se(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }), contains: se(function (e) {
                    return e = e.replace(Z, ee), function (t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }), lang: se(function (e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === h
                }, focus: function (e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: de(!1), disabled: de(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !r.pseudos.empty(e)
                }, header: function (e) {
                    return Y.test(e.nodeName)
                }, input: function (e) {
                    return G.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: he(function () {
                    return [0]
                }), last: he(function (e, t) {
                    return [t - 1]
                }), eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }), gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) r.pseudos[t] = fe(t);
        for (t in{submit: !0, reset: !0}) r.pseudos[t] = pe(t);

        function ye() {
        }

        ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function (e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({value: n, type: i[0].replace(B, " ")}), s = s.slice(n.length));
                for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({value: n, type: a, matches: i}), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        };

        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function me(e, t, n) {
            var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r]) if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function (t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    while (t = t[r]) if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else while (t = t[r]) if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                    if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                    if (c[o] = p, p[2] = e(t, n, u)) return !0
                }
                return !1
            }
        }

        function xe(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n
        }

        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [s] : s, []), y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;
                    while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;
                            while (c--) (f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
            })
        }

        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
                return e === t
            }, s, !0), f = me(function (e) {
                return O(t, e) > -1
            }, s, !0), p = [function (e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null, i
            }]; u < o; u++) if (n = r.relative[e[u].type]) p = [me(xe(p), n)]; else {
                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                    for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
                    return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({value: " " === e[u - 2].type ? "*" : ""})).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                }
                p.push(n)
            }
            return xe(p)
        }

        function Ee(e, t) {
            var n = t.length > 0, i = e.length > 0, o = function (o, a, s, u, c) {
                var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, k = C.length;
                for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                    if (i && f) {
                        h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                        while (y = e[h++]) if (y(f, a || d, s)) {
                            u.push(f);
                            break
                        }
                        c && (T = E)
                    }
                    n && ((f = !y && f) && v--, o && x.push(f))
                }
                if (v += m, n && m !== v) {
                    h = 0;
                    while (y = t[h++]) y(x, b, a, s);
                    if (o) {
                        if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
                        b = we(b)
                    }
                    L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                }
                return c && (T = E, l = w), x
            };
            return n ? se(o) : o
        }

        return s = oe.compile = function (e, t) {
            var n, r = [], i = [], o = S[e + " "];
            if (!o) {
                t || (t = a(e)), n = t.length;
                while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e
            }
            return o
        }, u = oe.select = function (e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o], r.relative[c = l.type]) break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                        break
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function (e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var k = function (e, t, n) {
        var r = [], i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
            if (i && w(e).is(n)) break;
            r.push(e)
        }
        return r
    }, S = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, D = w.expr.match.needsContext;

    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, t, n) {
        return g(t) ? w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function (e) {
            return u.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }

    w.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        }, is: function (e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/, O = {children: !0, contents: !0, next: !0, prev: !0};
    w.fn.extend({
        has: function (e) {
            var t = w(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
            if (!D.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e
    }

    w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return k(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return k(e, "parentNode", n)
        }, next: function (e) {
            return P(e, "nextSibling")
        }, prev: function (e) {
            return P(e, "previousSibling")
        }, nextAll: function (e) {
            return k(e, "nextSibling")
        }, prevAll: function (e) {
            return k(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return k(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return k(e, "previousSibling", n)
        }, siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return S(e.firstChild)
        }, contents: function (e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [], a = [], s = -1, u = function () {
            for (i = i || e.once, r = t = !0; a.length; s = -1) {
                n = a.shift();
                while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
            }
            e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
        }, l = {
            add: function () {
                return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                    w.each(n, function (n, r) {
                        g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                    })
                }(arguments), n && !t && u()), this
            }, remove: function () {
                return w.each(arguments, function (e, t) {
                    var n;
                    while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
                }), this
            }, has: function (e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return i = a = [], o = n = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return i = a = [], n || t || (o = n = ""), this
            }, locked: function () {
                return !!i
            }, fireWith: function (e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return l
    };

    function I(e) {
        return e
    }

    function W(e) {
        throw e
    }

    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    w.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]], r = "pending", i = {
                state: function () {
                    return r
                }, always: function () {
                    return o.done(arguments).fail(arguments), this
                }, "catch": function (e) {
                    return i.then(null, e)
                }, pipe: function () {
                    var e = arguments;
                    return w.Deferred(function (t) {
                        w.each(n, function (n, r) {
                            var i = g(e[r[4]]) && e[r[4]];
                            o[r[1]](function () {
                                var e = i && i.apply(this, arguments);
                                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, then: function (t, r, i) {
                    var o = 0;

                    function a(t, n, r, i) {
                        return function () {
                            var s = this, u = arguments, l = function () {
                                var e, l;
                                if (!(t < o)) {
                                    if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                    l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                }
                            }, c = i ? l : function () {
                                try {
                                    l()
                                } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
                                }
                            };
                            t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                        }
                    }

                    return w.Deferred(function (e) {
                        n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
                    }).promise()
                }, promise: function (e) {
                    return null != e ? w.extend(e, i) : i
                }
            }, o = {};
            return w.each(n, function (e, t) {
                var a = t[2], s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        }, when: function (e) {
            var t = arguments.length, n = t, r = Array(n), i = o.call(arguments), a = w.Deferred(), s = function (e) {
                return function (n) {
                    r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                }
            };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var F = w.Deferred();
    w.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }), w.ready.then = F.then;

    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
    }

    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === x(n)) {
            i = !0;
            for (s in n) z(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                return l.call(w(e), n)
            })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, X = /^-ms-/, U = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }

    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = w.expando + Q.uid++
    }

    Q.uid = 1, Q.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {value: t, configurable: !0}))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n; else for (r in t) i[G(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                    while (n--) delete r[t[n]]
                }
                (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var J = new Q, K = new Q, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;

    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }

    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
            try {
                n = te(n)
            } catch (e) {
            }
            K.set(e, t, n)
        } else n = void 0;
        return n
    }

    w.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e)
        }, data: function (e, t, n) {
            return K.access(e, t, n)
        }, removeData: function (e, t) {
            K.remove(e, t)
        }, _data: function (e, t, n) {
            return J.access(e, t, n)
        }, _removeData: function (e, t) {
            J.remove(e, t)
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                K.set(this, e)
            }) : z(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;
                    if (void 0 !== (n = ne(o, e))) return n
                } else this.each(function () {
                    K.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                K.remove(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t), r = n.length, i = n.shift(), o = w._queueHooks(e, t), a = function () {
                w.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), oe = ["Top", "Right", "Bottom", "Left"], ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
    }, se = function (e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i
    };

    function ue(e, t, n, r) {
        var i, o, a = 20, s = r ? function () {
            return r.cur()
        } : function () {
            return w.css(e, t, "")
        }, u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    var le = {};

    function ce(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }

    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    w.fn.extend({
        show: function () {
            return fe(this, !0)
        }, hide: function () {
            return fe(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }

    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++]) if (r && w.inArray(o, r) > -1) i && i.push(o); else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }

    !function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")), t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement, we = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ce = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0
    }

    function ke() {
        return !1
    }

    function Se() {
        try {
            return r.activeElement
        } catch (e) {
        }
    }

    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke; else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, i, r, n)
        })
    }

    w.event = {
        global: {}, add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }), l = (t = (t || "").match(M) || [""]).length;
                while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
            }
        }, remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--) if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                    while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
                } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t = w.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length), l = (J.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                o.length && s.push({elem: l, handlers: o})
            }
            return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
        }, addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0, configurable: !0, get: g(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                }, set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[w.expando] ? e : new w.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return N(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        }, stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        }, stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (e, t) {
        w.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function (e, t, n, r) {
            return De(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return De(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ae = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }

    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
        }
    }

    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
            var o = e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
        });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
        }
        return e
    }

    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]); else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
        }, cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Y(n)) {
                if (t = n[J.expando]) {
                    if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                    n[J.expando] = void 0
                }
                n[K.expando] && (n[K.expando] = void 0)
            }
        }
    }), w.fn.extend({
        detach: function (e) {
            return Ie(this, e, !0)
        }, remove: function (e) {
            return Ie(this, e)
        }, text: function (e) {
            return z(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return Re(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        }, prepend: function () {
            return Re(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        }, html: function (e) {
            return z(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return Re(this, arguments, function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), $e = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, Be = new RegExp(oe.join("|"), "i");
    !function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }

        var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function () {
                return t(), o
            }, pixelBoxStyles: function () {
                return t(), s
            }, pixelPosition: function () {
                return t(), i
            }, reliableMarginLeft: function () {
                return t(), u
            }, scrollboxSize: function () {
                return t(), a
            }
        }))
    }();

    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    var ze = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ue = {position: "absolute", visibility: "hidden", display: "block"}, Ve = {letterSpacing: "0", fontWeight: "400"}, Ge = ["Webkit", "Moz", "ms"], Ye = r.createElement("div").style;

    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
        while (n--) if ((e = Ge[n] + t) in Ye) return e
    }

    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t
    }

    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }

    function et(e, t, n) {
        var r = $e(e), i = Fe(e, t, r), o = "border-box" === w.css(e, "boxSizing", !1, r), a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }

    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        }, cssNumber: {animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {}, style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t), u = Xe.test(t), l = e.style;
                if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        }, css: function (e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
                    return et(e, t, r)
                })
            }, set: function (e, n, r) {
                var i, o = $e(e), a = "border-box" === w.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
            }
        }
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }), w.fn.extend({
        css: function (e, t) {
            return z(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });

    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i)
    }

    w.Tween = tt, tt.prototype = {
        constructor: tt, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, w.fx = tt.prototype.init, w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;

    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
    }

    function st() {
        return e.setTimeout(function () {
            nt = void 0
        }), nt = Date.now()
    }

    function ut(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s()
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t) if (i = t[r], it.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                if ("show" !== i || !y || void 0 === y[r]) continue;
                g = !0
            }
            d[r] = y && y[r] || w.style(e, r)
        }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {display: l}), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
                g || fe([e]), J.remove(e, "fxshow");
                for (r in d) w.style(e, r, d[r])
            })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function pt(e, t, n) {
        var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i) return !1;
            for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        }, l = s.promise({
            elem: e, props: w.extend({}, t), opts: w.extend(!0, {specialEasing: {}, easing: w.easing._default}, n), originalProperties: t, originalOptions: n, startTime: nt || st(), duration: n.duration, tweens: [], createTween: function (t, n) {
                var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            }, stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++) if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {elem: e, anim: l, queue: l.opts.queue})), l
    }

    w.Animation = w.extend(pt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ie.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match(M);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
        }, prefilters: [ct], prefilter: function (e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
        }
    }), w.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t};
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = w.isEmptyObject(e), o = w.speed(t, n, r), a = function () {
                var t = pt(this, w.extend({}, e), o);
                (i || J.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = w.timers, a = J.get(this);
                if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || w.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0;
                for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
        }
    }), w.each({slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (e, t) {
        w.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), w.timers = [], w.fx.tick = function () {
        var e, t = 0, n = w.timers;
        for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), nt = void 0
    }, w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
        rt || (rt = !0, at())
    }, w.fx.stop = function () {
        rt = null
    }, w.fx.speeds = {slow: 600, fast: 200, _default: 400}, w.fn.delay = function (t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i)
            }
        })
    }, function () {
        var e = r.createElement("input"), t = r.createElement("select").appendChild(r.createElement("option"));
        e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
    }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return z(this, w.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(M);
            if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)
        }
    }), dt = {
        set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return z(this, w.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), h.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    });

    function vt(e) {
        return (e.match(M) || []).join(" ")
    }

    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }

    w.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, mt(this)))
            });
            if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                a = 0;
                while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = vt(r)) && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, mt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                a = 0;
                while (o = t[a++]) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                i !== (s = vt(r)) && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function () {
                var t, i, o, a;
                if (r) {
                    i = 0, o = w(this), a = xt(e);
                    while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++]) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length) return r = g(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                        if (t = w(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                    while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, h.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/, Tt = function (e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r], m = f.call(t, "type") ? t.type : t, x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
            }
        }, simulate: function (e, t, n) {
            var r = w.extend(new w.Event, n, {type: e, isSimulated: !0});
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), h.focusin || w.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
            }
        }
    });
    var Ct = e.location, Et = Date.now(), kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i;

    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function (t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== x(t)) r(e, t); else for (i in t) jt(e + "[" + i + "]", t[i], n, r)
    }

    w.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = g(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return {name: t.name, value: e.replace(Dt, "\r\n")}
                }) : {name: t.name, value: n.replace(Dt, "\r\n")}
            }).get()
        }
    });
    var qt = /%20/g, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm, Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, Rt = /^\/\//, It = {}, Wt = {}, $t = "*/".concat("*"), Bt = r.createElement("a");
    Bt.href = Ct.href;

    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(M) || [];
            if (g(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function _t(e, t, n, r) {
        var i = {}, o = e === Wt;

        function a(s) {
            var u;
            return i[s] = !0, w.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }

        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }

    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents, u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                break
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                t = a(t)
            } catch (e) {
                return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {"*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"},
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(), m = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", E = {
                readyState: 0, getResponseHeader: function (e) {
                    var t;
                    if (c) {
                        if (!s) {
                            s = {};
                            while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
                        }
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                }, getAllResponseHeaders: function () {
                    return c ? a : null
                }, setRequestHeader: function (e, t) {
                    return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                }, overrideMimeType: function (e) {
                    return null == c && (h.mimeType = e), this
                }, statusCode: function (e) {
                    var t;
                    if (e) if (c) E.always(e[E.status]); else for (t in e) x[t] = [x[t], e[t]];
                    return this
                }, abort: function (e) {
                    var t = e || C;
                    return i && i.abort(t), k(0, t), this
                }
            };
            if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, k)
                } catch (e) {
                    if (c) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");

            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
            }

            return E
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({url: e, type: t, dataType: i, data: n, success: r}, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function (e) {
        return w.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return g(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = g(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var Vt = {0: 200, 1223: 204}, Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain) return {
            send: function (i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function (e) {
                    return function () {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            }, abort: function () {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /\b(?:java|ecma)script\b/}, converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = w("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), r.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
        }), "script"
    }), h.createHTMLDocument = function () {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), w.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
    }, w.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({url: e, type: i || "GET", dataType: "html", data: t}).done(function (e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"), f = w(e), p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, w.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {top: t.top + n.pageYOffset, left: t.left + n.pageXOffset}) : {top: 0, left: 0}
        }, position: function () {
            if (this[0]) {
                var e, t, n, r = this[0], i = {top: 0, left: 0};
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect(); else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0)}
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                return e || be
            })
        }
    }), w.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
            return z(this, function (e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
            if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({Height: "height", Width: "width"}, function (e, t) {
        w.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            w.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function (t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }, i.guid = e.guid = e.guid || w.guid++, i
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w
    });
    var Jt = e.jQuery, Kt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
    }, t || (e.jQuery = e.$ = w), w
});

/*! jQuery UI Virtual Keyboard v1.28.4 */
/*
Author: Jeremy Satterfield
Maintained: Rob Garrison (Mottie on github)
Licensed under the MIT License

An on-screen virtual keyboard embedded within the browser window which
will popup when a specified entry field is focused. The user can then
type and preview their input before Accepting or Canceling.

This plugin adds default class names to match jQuery UI theme styling.
Bootstrap & custom themes may also be applied - See
https://github.com/Mottie/Keyboard#themes

Requires:
	jQuery v1.4.3+
	Caret plugin (included)
Optional:
	jQuery UI (position utility only) & CSS theme
	jQuery mousewheel

Setup/Usage:
	Please refer to https://github.com/Mottie/Keyboard/wiki

-----------------------------------------
Caret code modified from jquery.caret.1.02.js
Licensed under the MIT License:
http://www.opensource.org/licenses/mit-license.php
-----------------------------------------
*/
/*jshint browser:true, jquery:true, unused:false */
/*global require:false, define:false, module:false */
;(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function ($) {
    'use strict';
    var $keyboard = $.keyboard = function (el, options) {
        var o, base = this;

        base.version = '1.28.4';

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data('keyboard', base);

        base.init = function () {
            base.initialized = false;
            var k, position, tmp,
                kbcss = $keyboard.css,
                kbevents = $keyboard.events;
            base.settings = options || {};
            // shallow copy position to prevent performance issues; see #357
            if (options && options.position) {
                position = $.extend({}, options.position);
                options.position = null;
            }
            base.options = o = $.extend(true, {}, $keyboard.defaultOptions, options);
            if (position) {
                o.position = position;
                options.position = position;
            }

            // keyboard is active (not destroyed);
            base.el.active = true;
            // unique keyboard namespace
            base.namespace = '.keyboard' + Math.random().toString(16).slice(2);
            // extension namespaces added here (to unbind listeners on base.$el upon destroy)
            base.extensionNamespace = [];
            // Shift and Alt key toggles, sets is true if a layout has more than one keyset
            // used for mousewheel message
            base.shiftActive = base.altActive = base.metaActive = base.sets = base.capsLock = false;
            // Class names of the basic key set - meta keysets are handled by the keyname
            base.rows = ['', '-shift', '-alt', '-alt-shift'];

            base.inPlaceholder = base.$el.attr('placeholder') || '';
            // html 5 placeholder/watermark
            base.watermark = $keyboard.watermark && base.inPlaceholder !== '';
            // convert mouse repeater rate (characters per second) into a time in milliseconds.
            base.repeatTime = 1000 / (o.repeatRate || 20);
            // delay in ms to prevent mousedown & touchstart from both firing events at the same time
            o.preventDoubleEventTime = o.preventDoubleEventTime || 100;
            // flag indication that a keyboard is open
            base.isOpen = false;
            // is mousewheel plugin loaded?
            base.wheel = $.isFunction($.fn.mousewheel);
            // special character in regex that need to be escaped
            base.escapeRegex = /[-\/\\^$*+?.()|[\]{}]/g;
            // detect contenteditable
            base.isContentEditable = !/(input|textarea)/i.test(base.el.nodeName) &&
                base.el.isContentEditable;

            // keyCode of keys always allowed to be typed
            k = $keyboard.keyCodes;
            // base.alwaysAllowed = [20,33,34,35,36,37,38,39,40,45,46];
            base.alwaysAllowed = [
                k.capsLock,
                k.pageUp,
                k.pageDown,
                k.end,
                k.home,
                k.left,
                k.up,
                k.right,
                k.down,
                k.insert,
                k.delete
            ];
            base.$keyboard = [];
            // keyboard enabled; set to false on destroy
            base.enabled = true;

            base.checkCaret = (o.lockInput || $keyboard.checkCaretSupport());

            // disable problematic usePreview for contenteditable
            if (base.isContentEditable) {
                o.usePreview = false;
            }

            base.last = {
                start: 0,
                end: 0,
                key: '',
                val: '',
                preVal: '',
                layout: '',
                virtual: true,
                keyset: [false, false, false], // [shift, alt, meta]
                wheel_$Keys: [],
                wheelIndex: 0,
                wheelLayers: []
            };
            // used when building the keyboard - [keyset element, row, index]
            base.temp = ['', 0, 0];

            // Callbacks
            $.each([
                kbevents.kbInit,
                kbevents.kbBeforeVisible,
                kbevents.kbVisible,
                kbevents.kbHidden,
                kbevents.inputCanceled,
                kbevents.inputAccepted,
                kbevents.kbBeforeClose,
                kbevents.inputRestricted
            ], function (i, callback) {
                if ($.isFunction(o[callback])) {
                    // bind callback functions within options to triggered events
                    base.$el.bind(callback + base.namespace + 'callbacks', o[callback]);
                }
            });

            // Close with esc key & clicking outside
            if (o.alwaysOpen) {
                o.stayOpen = true;
            }

            tmp = $(document);
            if (base.el.ownerDocument !== document) {
                tmp = tmp.add(base.el.ownerDocument);
            }

            var bindings = 'keyup checkkeyboard mousedown touchstart ';
            if (o.closeByClickEvent) {
                bindings += 'click ';
            }
            // debounce bindings... see #542
            tmp.bind(bindings.split(' ').join(base.namespace + ' '), function (e) {
                clearTimeout(base.timer3);
                base.timer3 = setTimeout(function () {
                    base.checkClose(e);
                }, 1);
            });

            // Display keyboard on focus
            base.$el
                .addClass(kbcss.input + ' ' + o.css.input)
                .attr({
                    'aria-haspopup': 'true',
                    'role': 'textbox'
                });

            // set lockInput if the element is readonly; or make the element readonly if lockInput is set
            if (o.lockInput || base.el.readOnly) {
                o.lockInput = true;
                base.$el
                    .addClass(kbcss.locked)
                    .attr({
                        'readonly': 'readonly'
                    });
            }
            // add disabled/readonly class - dynamically updated on reveal
            if (base.isUnavailable()) {
                base.$el.addClass(kbcss.noKeyboard);
            }
            if (o.openOn) {
                base.bindFocus();
            }

            // Add placeholder if not supported by the browser
            if (
                !base.watermark &&
                base.getValue(base.$el) === '' &&
                base.inPlaceholder !== '' &&
                base.$el.attr('placeholder') !== ''
            ) {
                // css watermark style (darker text)
                base.$el.addClass(kbcss.placeholder);
                base.setValue(base.inPlaceholder, base.$el);
            }

            base.$el.trigger(kbevents.kbInit, [base, base.el]);

            // initialized with keyboard open
            if (o.alwaysOpen) {
                base.reveal();
            }
            base.initialized = true;
        };

        base.toggle = function () {
            if (!base.hasKeyboard()) {
                return;
            }
            var $toggle = base.$keyboard.find('.' + $keyboard.css.keyToggle),
                locked = !base.enabled;
            // prevent physical keyboard from working
            base.preview.readonly = locked || base.options.lockInput;
            // disable all buttons
            base.$keyboard
                .toggleClass($keyboard.css.keyDisabled, locked)
                .find('.' + $keyboard.css.keyButton)
                .not($toggle)
                .attr('aria-disabled', locked)
                .each(function () {
                    this.disabled = locked;
                });
            $toggle.toggleClass($keyboard.css.keyDisabled, locked);
            // stop auto typing
            if (locked && base.typing_options) {
                base.typing_options.text = '';
            }
            // allow chaining
            return base;
        };

        base.setCurrent = function () {
            var kbcss = $keyboard.css,
                // close any "isCurrent" keyboard (just in case they are always open)
                $current = $('.' + kbcss.isCurrent),
                kb = $current.data('keyboard');
            // close keyboard, if not self
            if (!$.isEmptyObject(kb) && kb.el !== base.el) {
                kb.close(kb.options.autoAccept ? 'true' : false);
            }
            $current.removeClass(kbcss.isCurrent);
            // ui-keyboard-has-focus is applied in case multiple keyboards have
            // alwaysOpen = true and are stacked
            $('.' + kbcss.hasFocus).removeClass(kbcss.hasFocus);

            base.$el.addClass(kbcss.isCurrent);
            base.$keyboard.addClass(kbcss.hasFocus);
            base.isCurrent(true);
            base.isOpen = true;
        };

        base.isUnavailable = function () {
            return (
                base.$el.is(':disabled') || (
                    !base.options.activeOnReadonly &&
                    base.$el.attr('readonly') &&
                    !base.$el.hasClass($keyboard.css.locked)
                )
            );
        };

        base.isCurrent = function (set) {
            var cur = $keyboard.currentKeyboard || false;
            if (set) {
                cur = $keyboard.currentKeyboard = base.el;
            } else if (set === false && cur === base.el) {
                cur = $keyboard.currentKeyboard = '';
            }
            return cur === base.el;
        };

        base.hasKeyboard = function () {
            return base.$keyboard && base.$keyboard.length > 0;
        };

        base.isVisible = function () {
            return base.hasKeyboard() ? base.$keyboard.is(':visible') : false;
        };

        base.setFocus = function () {
            var $el = base.$preview || base.$el;
            if (!o.noFocus) {
                $el.focus();
            }
            if (base.isContentEditable) {
                $keyboard.setEditableCaret($el, base.last.start, base.last.end);
            } else {
                $keyboard.caret($el, base.last);
            }
        };

        base.focusOn = function () {
            if (!base && base.el.active) {
                // keyboard was destroyed
                return;
            }
            if (!base.isVisible()) {
                clearTimeout(base.timer);
                base.reveal();
            } else {
                // keyboard already open, make it the current keyboard
                base.setCurrent();
            }
        };

        // add redraw method to make API more clear
        base.redraw = function (layout) {
            if (layout) {
                // allow updating the layout by calling redraw
                base.options.layout = layout;
            }
            // update keyboard after a layout change
            if (base.$keyboard.length) {

                base.last.preVal = '' + base.last.val;
                base.saveLastChange();
                base.setValue(base.last.val, base.$el);

                base.removeKeyboard();
                base.shiftActive = base.altActive = base.metaActive = false;
            }
            base.isOpen = o.alwaysOpen;
            base.reveal(true);
            return base;
        };

        base.reveal = function (redraw) {
            var temp,
                alreadyOpen = base.isOpen,
                kbcss = $keyboard.css;
            base.opening = !alreadyOpen;
            // remove all 'extra' keyboards by calling close function
            $('.' + kbcss.keyboard).not('.' + kbcss.alwaysOpen).each(function () {
                var kb = $(this).data('keyboard');
                if (!$.isEmptyObject(kb)) {
                    // this closes previous keyboard when clicking another input - see #515
                    kb.close(kb.options.autoAccept ? 'true' : false);
                }
            });

            // Don't open if disabled
            if (base.isUnavailable()) {
                return;
            }
            base.$el.removeClass(kbcss.noKeyboard);

            // Unbind focus to prevent recursion - openOn may be empty if keyboard is opened externally
            if (o.openOn) {
                base.$el.unbind($.trim((o.openOn + ' ').split(/\s+/).join(base.namespace + ' ')));
            }

            // build keyboard if it doesn't exist; or attach keyboard if it was removed, but not cleared
            if (!base.$keyboard || base.$keyboard &&
                (!base.$keyboard.length || $.contains(base.el.ownerDocument.body, base.$keyboard[0]))) {
                base.startup();
            }

            // clear watermark
            if (!base.watermark && base.getValue() === base.inPlaceholder) {
                base.$el.removeClass(kbcss.placeholder);
                base.setValue('', base.$el);
            }
            // save starting content, in case we cancel
            base.originalContent = base.isContentEditable ?
                base.$el.html() :
                base.getValue(base.$el);
            if (base.el !== base.preview && !base.isContentEditable) {
                base.setValue(base.originalContent);
            }

            // disable/enable accept button
            if (o.acceptValid && o.checkValidOnInit) {
                base.checkValid();
            }

            if (o.resetDefault) {
                base.shiftActive = base.altActive = base.metaActive = false;
            }
            base.showSet();

            // beforeVisible event
            if (!base.isVisible()) {
                base.$el.trigger($keyboard.events.kbBeforeVisible, [base, base.el]);
            }
            if (
                base.initialized ||
                o.initialFocus ||
                ( !o.initialFocus && base.$el.hasClass($keyboard.css.initialFocus) )
            ) {
                base.setCurrent();
            }
            // update keyboard - enabled or disabled?
            base.toggle();

            // show keyboard
            base.$keyboard.show();

            // adjust keyboard preview window width - save width so IE won't keep expanding (fix issue #6)
            if (o.usePreview && $keyboard.msie) {
                if (typeof base.width === 'undefined') {
                    base.$preview.hide(); // preview is 100% browser width in IE7, so hide the damn thing
                    base.width = Math.ceil(base.$keyboard.width()); // set input width to match the widest keyboard row
                    base.$preview.show();
                }
                base.$preview.width(base.width);
            }

            base.reposition();

            base.checkDecimal();

            // get preview area line height
            // add roughly 4px to get line height from font height, works well for font-sizes from 14-36px
            // needed for textareas
            base.lineHeight = parseInt(base.$preview.css('lineHeight'), 10) ||
                parseInt(base.$preview.css('font-size'), 10) + 4;

            if (o.caretToEnd) {
                temp = base.isContentEditable ? $keyboard.getEditableLength(base.el) : base.originalContent.length;
                base.saveCaret(temp, temp);
            }

            // IE caret haxx0rs
            if ($keyboard.allie) {
                // sometimes end = 0 while start is > 0
                if (base.last.end === 0 && base.last.start > 0) {
                    base.last.end = base.last.start;
                }
                // IE will have start -1, end of 0 when not focused (see demo: https://jsfiddle.net/Mottie/fgryQ/3/)
                if (base.last.start < 0) {
                    // ensure caret is at the end of the text (needed for IE)
                    base.last.start = base.last.end = base.originalContent.length;
                }
            }

            if (alreadyOpen || redraw) {
                // restore caret position (userClosed)
                $keyboard.caret(base.$preview, base.last);
                base.opening = false;
                return base;
            }

            // opening keyboard flag; delay allows switching between keyboards without immediately closing
            // the keyboard
            base.timer2 = setTimeout(function () {
                var undef;
                base.opening = false;
                // Number inputs don't support selectionStart and selectionEnd
                // Number/email inputs don't support selectionStart and selectionEnd
                if (!/(number|email)/i.test(base.el.type) && !o.caretToEnd) {
                    // caret position is always 0,0 in webkit; and nothing is focused at this point... odd
                    // save caret position in the input to transfer it to the preview
                    // inside delay to get correct caret position
                    base.saveCaret(undef, undef, base.$el);
                }
                if (o.initialFocus || base.$el.hasClass($keyboard.css.initialFocus)) {
                    $keyboard.caret(base.$preview, base.last);
                }
                // save event time for keyboards with stayOpen: true
                base.last.eventTime = new Date().getTime();
                base.$el.trigger($keyboard.events.kbVisible, [base, base.el]);
                base.timer = setTimeout(function () {
                    // get updated caret information after visible event - fixes #331
                    if (base) { // Check if base exists, this is a case when destroy is called, before timers fire
                        base.saveCaret();
                    }
                }, 200);
            }, 10);
            // return base to allow chaining in typing extension
            return base;
        };

        base.updateLanguage = function () {
            // change language if layout is named something like 'french-azerty-1'
            var layouts = $keyboard.layouts,
                lang = o.language || layouts[o.layout] && layouts[o.layout].lang &&
                    layouts[o.layout].lang || [o.language || 'en'],
                kblang = $keyboard.language;

            // some languages include a dash, e.g. 'en-gb' or 'fr-ca'
            // allow o.language to be a string or array...
            // array is for future expansion where a layout can be set for multiple languages
            lang = ($.isArray(lang) ? lang[0] : lang);
            base.language = lang;
            lang = lang.split('-')[0];

            // set keyboard language
            o.display = $.extend(true, {},
                kblang.en.display,
                kblang[lang] && kblang[lang].display || {},
                base.settings.display
            );
            o.combos = $.extend(true, {},
                kblang.en.combos,
                kblang[lang] && kblang[lang].combos || {},
                base.settings.combos
            );
            o.wheelMessage = kblang[lang] && kblang[lang].wheelMessage || kblang.en.wheelMessage;
            // rtl can be in the layout or in the language definition; defaults to false
            o.rtl = layouts[o.layout] && layouts[o.layout].rtl || kblang[lang] && kblang[lang].rtl || false;

            // save default regex (in case loading another layout changes it)
            base.regex = kblang[lang] && kblang[lang].comboRegex || $keyboard.comboRegex;
            // determine if US '.' or European ',' system being used
            base.decimal = /^\./.test(o.display.dec);
            base.$el
                .toggleClass('rtl', o.rtl)
                .css('direction', o.rtl ? 'rtl' : '');
        };

        base.startup = function () {
            var kbcss = $keyboard.css;
            // ensure base.$preview is defined; but don't overwrite it if keyboard is always visible
            if (!((o.alwaysOpen || o.userClosed) && base.$preview)) {
                base.makePreview();
            }
            if (!base.hasKeyboard()) {
                // custom layout - create a unique layout name based on the hash
                if (o.layout === 'custom') {
                    o.layoutHash = 'custom' + base.customHash();
                }
                base.layout = o.layout === 'custom' ? o.layoutHash : o.layout;
                base.last.layout = base.layout;

                base.updateLanguage();
                if (typeof $keyboard.builtLayouts[base.layout] === 'undefined') {
                    if ($.isFunction(o.create)) {
                        // create must call buildKeyboard() function; or create it's own keyboard
                        base.$keyboard = o.create(base);
                    } else if (!base.$keyboard.length) {
                        base.buildKeyboard(base.layout, true);
                    }
                }
                base.$keyboard = $keyboard.builtLayouts[base.layout].$keyboard.clone();
                base.$keyboard.data('keyboard', base);
                if ((base.el.id || '') !== '') {
                    // add ID to keyboard for styling purposes
                    base.$keyboard.attr('id', base.el.id + $keyboard.css.idSuffix);
                }

                base.makePreview();
            }

            // Add layout and laguage data-attibutes
            base.$keyboard
                .attr('data-' + kbcss.keyboard + '-layout', o.layout)
                .attr('data-' + kbcss.keyboard + '-language', base.language);

            base.$decBtn = base.$keyboard.find('.' + kbcss.keyPrefix + 'dec');
            // add enter to allowed keys; fixes #190
            if (o.enterNavigation || base.el.nodeName === 'TEXTAREA') {
                base.alwaysAllowed.push(13);
            }

            base.bindKeyboard();

            base.$keyboard.appendTo(o.appendLocally ? base.$el.parent() : o.appendTo || 'body');

            base.bindKeys();

            // reposition keyboard on window resize
            if (o.reposition && $.ui && $.ui.position && o.appendTo === 'body') {
                $(window).bind('resize' + base.namespace, function () {
                    base.reposition();
                });
            }

        };

        base.reposition = function () {
            base.position = $.isEmptyObject(o.position) ? false : o.position;
            // position after keyboard is visible (required for UI position utility)
            // and appropriately sized
            if ($.ui && $.ui.position && base.position) {
                base.position.of =
                    // get single target position
                    base.position.of ||
                    // OR target stored in element data (multiple targets)
                    base.$el.data('keyboardPosition') ||
                    // OR default @ element
                    base.$el;
                base.position.collision = base.position.collision || 'flipfit flipfit';
                base.position.at = o.usePreview ? o.position.at : o.position.at2;
                if (base.isVisible()) {
                    base.$keyboard.position(base.position);
                }
            }
            // make chainable
            return base;
        };

        base.makePreview = function () {
            if (o.usePreview) {
                var indx, attrs, attr, removedAttr,
                    kbcss = $keyboard.css;
                base.$preview = base.$el.clone(false)
                    .data('keyboard', base)
                    .removeClass(kbcss.placeholder + ' ' + kbcss.input)
                    .addClass(kbcss.preview + ' ' + o.css.input)
                    .attr('tabindex', '-1')
                    .show(); // for hidden inputs
                base.preview = base.$preview[0];

                // Switch the number input field to text so the caret positioning will work again
                if (base.preview.type === 'number') {
                    base.preview.type = 'text';
                }

                // remove extraneous attributes.
                removedAttr = /^(data-|id|aria-haspopup)/i;
                attrs = base.$preview.get(0).attributes;
                for (indx = attrs.length - 1; indx >= 0; indx--) {
                    attr = attrs[indx] && attrs[indx].name;
                    if (removedAttr.test(attr)) {
                        // remove data-attributes - see #351
                        base.preview.removeAttribute(attr);
                    }
                }
                // build preview container and append preview display
                $('<div />')
                    .addClass(kbcss.wrapper)
                    .append(base.$preview)
                    .prependTo(base.$keyboard);
            } else {
                base.$preview = base.$el;
                base.preview = base.el;
            }
        };

        // Added in v1.26.8 to allow chaining of the caret function, e.g.
        // keyboard.reveal().caret(4,5).insertText('test').caret('end');
        base.caret = function (param1, param2) {
            var result = $keyboard.caret(base.$preview, param1, param2),
                wasSetCaret = result instanceof $;
            // Caret was set, save last position & make chainable
            if (wasSetCaret) {
                base.saveCaret(result.start, result.end);
                return base;
            }
            // return caret position if using .caret()
            return result;
        };

        base.saveCaret = function (start, end, $el) {
            if (base.isCurrent()) {
                var p;
                if (typeof start === 'undefined') {
                    // grab & save current caret position
                    p = $keyboard.caret($el || base.$preview);
                } else {
                    p = $keyboard.caret($el || base.$preview, start, end);
                }
                base.last.start = typeof start === 'undefined' ? p.start : start;
                base.last.end = typeof end === 'undefined' ? p.end : end;
            }
        };

        base.saveLastChange = function (val) {
            base.last.val = val || base.getValue(base.$preview || base.$el);
            if (base.isContentEditable) {
                base.last.elms = base.el.cloneNode(true);
            }
        };

        base.setScroll = function () {
            // Set scroll so caret & current text is in view
            // needed for virtual keyboard typing, NOT manual typing - fixes #23
            if (!base.isContentEditable && base.last.virtual) {

                var scrollWidth, clientWidth, adjustment, direction,
                    isTextarea = base.preview.nodeName === 'TEXTAREA',
                    value = base.last.val.substring(0, Math.max(base.last.start, base.last.end));

                if (!base.$previewCopy) {
                    // clone preview
                    base.$previewCopy = base.$preview.clone()
                        .removeAttr('id') // fixes #334
                        .css({
                            position: 'absolute',
                            left: 0,
                            zIndex: -10,
                            visibility: 'hidden'
                        })
                        .addClass($keyboard.css.inputClone);
                    // prevent submitting content on form submission
                    base.$previewCopy[0].disabled = true;
                    if (!isTextarea) {
                        // make input zero-width because we need an accurate scrollWidth
                        base.$previewCopy.css({
                            'white-space': 'pre',
                            'width': 0
                        });
                    }
                    if (o.usePreview) {
                        // add clone inside of preview wrapper
                        base.$preview.after(base.$previewCopy);
                    } else {
                        // just slap that thing in there somewhere
                        base.$keyboard.prepend(base.$previewCopy);
                    }
                }

                if (isTextarea) {
                    // need the textarea scrollHeight, so set the clone textarea height to be the line height
                    base.$previewCopy
                        .height(base.lineHeight)
                        .val(value);
                    // set scrollTop for Textarea
                    base.preview.scrollTop = base.lineHeight *
                        (Math.floor(base.$previewCopy[0].scrollHeight / base.lineHeight) - 1);
                } else {
                    // add non-breaking spaces
                    base.$previewCopy.val(value.replace(/\s/g, '\xa0'));

                    // if scrollAdjustment option is set to "c" or "center" then center the caret
                    adjustment = /c/i.test(o.scrollAdjustment) ? base.preview.clientWidth / 2 : o.scrollAdjustment;
                    scrollWidth = base.$previewCopy[0].scrollWidth - 1;

                    // set initial state as moving right
                    if (typeof base.last.scrollWidth === 'undefined') {
                        base.last.scrollWidth = scrollWidth;
                        base.last.direction = true;
                    }
                    // if direction = true; we're scrolling to the right
                    direction = base.last.scrollWidth === scrollWidth ?
                        base.last.direction :
                        base.last.scrollWidth < scrollWidth;
                    clientWidth = base.preview.clientWidth - adjustment;

                    // set scrollLeft for inputs; try to mimic the inherit caret positioning + scrolling:
                    // hug right while scrolling right...
                    if (direction) {
                        if (scrollWidth < clientWidth) {
                            base.preview.scrollLeft = 0;
                        } else {
                            base.preview.scrollLeft = scrollWidth - clientWidth;
                        }
                    } else {
                        // hug left while scrolling left...
                        if (scrollWidth >= base.preview.scrollWidth - clientWidth) {
                            base.preview.scrollLeft = base.preview.scrollWidth - adjustment;
                        } else if (scrollWidth - adjustment > 0) {
                            base.preview.scrollLeft = scrollWidth - adjustment;
                        } else {
                            base.preview.scrollLeft = 0;
                        }
                    }

                    base.last.scrollWidth = scrollWidth;
                    base.last.direction = direction;
                }
            }
        };

        base.bindFocus = function () {
            if (o.openOn) {
                // make sure keyboard isn't destroyed
                // Check if base exists, this is a case when destroy is called, before timers have fired
                if (base && base.el.active) {
                    base.$el.bind(o.openOn + base.namespace, function () {
                        base.focusOn();
                    });
                    // remove focus from element (needed for IE since blur doesn't seem to work)
                    if ($(':focus')[0] === base.el) {
                        base.$el.blur();
                    }
                }
            }
        };

        base.bindKeyboard = function () {
            var evt,
                keyCodes = $keyboard.keyCodes,
                layout = $keyboard.builtLayouts[base.layout],
                namespace = base.namespace + 'keybindings';
            base.$preview
                .unbind(base.namespace)
                .bind('click' + namespace + ' touchstart' + namespace, function () {
                    if (o.alwaysOpen && !base.isCurrent()) {
                        base.reveal();
                    }
                    // update last caret position after user click, use at least 150ms or it doesn't work in IE
                    base.timer2 = setTimeout(function () {
                        if (base) {
                            base.saveCaret();
                        }
                    }, 150);

                })
                .bind('keypress' + namespace, function (e) {
                    if (o.lockInput) {
                        return false;
                    }
                    if (!base.isCurrent()) {
                        return;
                    }

                    var k = e.charCode || e.which,
                        // capsLock can only be checked while typing a-z
                        k1 = k >= keyCodes.A && k <= keyCodes.Z,
                        k2 = k >= keyCodes.a && k <= keyCodes.z,
                        str = base.last.key = String.fromCharCode(k);
                    // check, that keypress wasn't rise by functional key
                    // space is first typing symbol in UTF8 table
                    if (k < keyCodes.space) { //see #549
                        return;
                    }
                    base.last.virtual = false;
                    base.last.event = e;
                    base.last.$key = []; // not a virtual keyboard key
                    if (base.checkCaret) {
                        base.saveCaret();
                    }

                    // update capsLock
                    if (k !== keyCodes.capsLock && (k1 || k2)) {
                        base.capsLock = (k1 && !e.shiftKey) || (k2 && e.shiftKey);
                        // if shifted keyset not visible, then show it
                        if (base.capsLock && !base.shiftActive) {
                            base.shiftActive = true;
                            base.showSet();
                        }
                    }

                    // restrict input - keyCode in keypress special keys:
                    // see http://www.asquare.net/javascript/tests/KeyCode.html
                    if (o.restrictInput) {
                        // allow navigation keys to work - Chrome doesn't fire a keypress event (8 = bksp)
                        if ((e.which === keyCodes.backSpace || e.which === 0) &&
                            $.inArray(e.keyCode, base.alwaysAllowed)) {
                            return;
                        }
                        // quick key check
                        if ($.inArray(str, layout.acceptedKeys) === -1) {
                            e.preventDefault();
                            // copy event object in case e.preventDefault() breaks when changing the type
                            evt = $.extend({}, e);
                            evt.type = $keyboard.events.inputRestricted;
                            base.$el.trigger(evt, [base, base.el]);
                        }
                    } else if ((e.ctrlKey || e.metaKey) &&
                        (e.which === keyCodes.A || e.which === keyCodes.C || e.which === keyCodes.V ||
                            (e.which >= keyCodes.X && e.which <= keyCodes.Z))) {
                        // Allow select all (ctrl-a), copy (ctrl-c), paste (ctrl-v) & cut (ctrl-x) &
                        // redo (ctrl-y)& undo (ctrl-z); meta key for mac
                        return;
                    }
                    // Mapped Keys - allows typing on a regular keyboard and the mapped key is entered
                    // Set up a key in the layout as follows: 'm(a):label'; m = key to map, (a) = actual keyboard key
                    // to map to (optional), ':label' = title/tooltip (optional)
                    // example: \u0391 or \u0391(A) or \u0391:alpha or \u0391(A):alpha
                    if (layout.hasMappedKeys && layout.mappedKeys.hasOwnProperty(str)) {
                        base.last.key = layout.mappedKeys[str];
                        base.insertText(base.last.key);
                        e.preventDefault();
                    }
                    if (typeof o.beforeInsert === 'function') {
                        base.insertText(base.last.key);
                        e.preventDefault();
                    }
                    base.checkMaxLength();

                })
                .bind('keyup' + namespace, function (e) {
                    if (!base.isCurrent()) {
                        return;
                    }
                    base.last.virtual = false;
                    switch (e.which) {
                        // Insert tab key
                        case keyCodes.tab:
                            // Added a flag to prevent from tabbing into an input, keyboard opening, then adding the tab
                            // to the keyboard preview area on keyup. Sadly it still happens if you don't release the tab
                            // key immediately because keydown event auto-repeats
                            if (base.tab && o.tabNavigation && !o.lockInput) {
                                base.shiftActive = e.shiftKey;
                                // when switching inputs, the tab keyaction returns false
                                var notSwitching = $keyboard.keyaction.tab(base);
                                base.tab = false;
                                if (!notSwitching) {
                                    return false;
                                }
                            } else {
                                e.preventDefault();
                            }
                            break;

                        // Escape will hide the keyboard
                        case keyCodes.escape:
                            if (!o.ignoreEsc) {
                                base.close(o.autoAccept && o.autoAcceptOnEsc ? 'true' : false);
                            }
                            return false;
                    }

                    // throttle the check combo function because fast typers will have an incorrectly positioned caret
                    clearTimeout(base.throttled);
                    base.throttled = setTimeout(function () {
                        // fix error in OSX? see issue #102
                        if (base && base.isVisible()) {
                            base.checkCombos();
                        }
                    }, 100);

                    base.checkMaxLength();

                    base.last.preVal = '' + base.last.val;
                    base.saveLastChange();

                    // don't alter "e" or the "keyup" event never finishes processing; fixes #552
                    var event = $.Event($keyboard.events.kbChange);
                    // base.last.key may be empty string (shift, enter, tab, etc) when keyboard is first visible
                    // use e.key instead, if browser supports it
                    event.action = base.last.key;
                    base.$el.trigger(event, [base, base.el]);

                    // change callback is no longer bound to the input element as the callback could be
                    // called during an external change event with all the necessary parameters (issue #157)
                    if ($.isFunction(o.change)) {
                        event.type = $keyboard.events.inputChange;
                        o.change(event, base, base.el);
                        return false;
                    }
                    if (o.acceptValid && o.autoAcceptOnValid) {
                        if (
                            $.isFunction(o.validate) &&
                            o.validate(base, base.getValue(base.$preview))
                        ) {
                            base.$preview.blur();
                            base.accept();
                        }
                    }
                })
                .bind('keydown' + namespace, function (e) {
                    base.last.keyPress = e.which;
                    // ensure alwaysOpen keyboards are made active
                    if (o.alwaysOpen && !base.isCurrent()) {
                        base.reveal();
                    }
                    // prevent tab key from leaving the preview window
                    if (e.which === keyCodes.tab) {
                        // allow tab to pass through - tab to next input/shift-tab for prev
                        base.tab = true;
                        return false;
                    }
                    if (o.lockInput || e.timeStamp === base.last.timeStamp) {
                        return !o.lockInput;
                    }

                    base.last.timeStamp = e.timeStamp; // fixes #659
                    base.last.virtual = false;
                    switch (e.which) {

                        case keyCodes.backSpace:
                            $keyboard.keyaction.bksp(base, null, e);
                            e.preventDefault();
                            break;

                        case keyCodes.enter:
                            $keyboard.keyaction.enter(base, null, e);
                            break;

                        // Show capsLock
                        case keyCodes.capsLock:
                            base.shiftActive = base.capsLock = !base.capsLock;
                            base.showSet();
                            break;

                        case keyCodes.V:
                            // prevent ctrl-v/cmd-v
                            if (e.ctrlKey || e.metaKey) {
                                if (o.preventPaste) {
                                    e.preventDefault();
                                    return;
                                }
                                base.checkCombos(); // check pasted content
                            }
                            break;
                    }
                })
                .bind('mouseup touchend '.split(' ').join(namespace + ' '), function () {
                    base.last.virtual = true;
                    base.saveCaret();
                });

            // prevent keyboard event bubbling
            base.$keyboard.bind('mousedown click touchstart '.split(' ').join(base.namespace + ' '), function (e) {
                e.stopPropagation();
                if (!base.isCurrent()) {
                    base.reveal();
                    $(base.el.ownerDocument).trigger('checkkeyboard' + base.namespace);
                }
                base.setFocus();
            });

            // If preventing paste, block context menu (right click)
            if (o.preventPaste) {
                base.$preview.bind('contextmenu' + base.namespace, function (e) {
                    e.preventDefault();
                });
                base.$el.bind('contextmenu' + base.namespace, function (e) {
                    e.preventDefault();
                });
            }

        };

        base.bindButton = function (events, handler) {
            var button = '.' + $keyboard.css.keyButton,
                callback = function (e) {
                    e.stopPropagation();
                    // save closest keyboard wrapper/input to check in checkClose function
                    e.$target = $(this).closest('.' + $keyboard.css.keyboard + ', .' + $keyboard.css.input);
                    handler.call(this, e);
                };
            if ($.fn.on) {
                // jQuery v1.7+
                base.$keyboard.on(events, button, callback);
            } else if ($.fn.delegate) {
                // jQuery v1.4.2 - 3.0.0
                base.$keyboard.delegate(button, events, callback);
            }
            return base;
        };

        base.unbindButton = function (namespace) {
            if ($.fn.off) {
                // jQuery v1.7+
                base.$keyboard.off(namespace);
            } else if ($.fn.undelegate) {
                // jQuery v1.4.2 - 3.0.0 (namespace only added in v1.6)
                base.$keyboard.undelegate('.' + $keyboard.css.keyButton, namespace);
            }
            return base;
        };

        base.bindKeys = function () {
            var kbcss = $keyboard.css;
            base
                .unbindButton(base.namespace + ' ' + base.namespace + 'kb')
                // Change hover class and tooltip - moved this touchstart before option.keyBinding touchstart
                // to prevent mousewheel lag/duplication - Fixes #379 & #411
                .bindButton('mouseenter mouseleave touchstart '.split(' ').join(base.namespace + ' '), function (e) {
                    if ((o.alwaysOpen || o.userClosed) && e.type !== 'mouseleave' && !base.isCurrent()) {
                        base.reveal();
                        base.setFocus();
                    }
                    if (!base.isCurrent() || this.disabled) {
                        return;
                    }
                    var $keys, txt,
                        last = base.last,
                        $this = $(this),
                        type = e.type;

                    if (o.useWheel && base.wheel) {
                        $keys = base.getLayers($this);
                        txt = ($keys.length ? $keys.map(function () {
                            return $(this).attr('data-value') || '';
                        })
                            .get() : '') || [$this.text()];
                        last.wheel_$Keys = $keys;
                        last.wheelLayers = txt;
                        last.wheelIndex = $.inArray($this.attr('data-value'), txt);
                    }

                    if ((type === 'mouseenter' || type === 'touchstart') && base.el.type !== 'password' &&
                        !$this.hasClass(o.css.buttonDisabled)) {
                        $this.addClass(o.css.buttonHover);
                        if (o.useWheel && base.wheel) {
                            $this.attr('title', function (i, t) {
                                // show mouse wheel message
                                return (base.wheel && t === '' && base.sets && txt.length > 1 && type !== 'touchstart') ?
                                    o.wheelMessage : t;
                            });
                        }
                    }
                    if (type === 'mouseleave') {
                        // needed or IE flickers really bad
                        $this.removeClass((base.el.type === 'password') ? '' : o.css.buttonHover);
                        if (o.useWheel && base.wheel) {
                            last.wheelIndex = 0;
                            last.wheelLayers = [];
                            last.wheel_$Keys = [];
                            $this
                                .attr('title', function (i, t) {
                                    return (t === o.wheelMessage) ? '' : t;
                                })
                                .html($this.attr('data-html')); // restore original button text
                        }
                    }
                })
                // keyBinding = 'mousedown touchstart' by default
                .bindButton(o.keyBinding.split(' ').join(base.namespace + ' ') + base.namespace + ' ' +
                    $keyboard.events.kbRepeater, function (e) {
                    e.preventDefault();
                    // prevent errors when external triggers attempt to 'type' - see issue #158
                    if (!base.$keyboard.is(':visible') || this.disabled) {
                        return false;
                    }
                    var action,
                        last = base.last,
                        $key = $(this),
                        // prevent mousedown & touchstart from both firing events at the same time - see #184
                        timer = new Date().getTime();

                    if (o.useWheel && base.wheel) {
                        // get keys from other layers/keysets (shift, alt, meta, etc) that line up by data-position
                        // target mousewheel selected key
                        $key = last.wheel_$Keys && last.wheelIndex > -1 ? last.wheel_$Keys.eq(last.wheelIndex) : $key;
                    }
                    action = $key.attr('data-action');
                    if (timer - (last.eventTime || 0) < o.preventDoubleEventTime) {
                        return;
                    }
                    last.eventTime = timer;
                    last.event = e;
                    last.virtual = true;
                    last.$key = $key;
                    last.key = $key.attr('data-value');
                    last.keyPress = '';
                    // Start caret in IE when not focused (happens with each virtual keyboard button click
                    base.setFocus();
                    if (/^meta/.test(action)) {
                        action = 'meta';
                    }
                    // keyaction is added as a string, override original action & text
                    if (action === last.key && typeof $keyboard.keyaction[action] === 'string') {
                        last.key = action = $keyboard.keyaction[action];
                    } else if (action in $keyboard.keyaction && $.isFunction($keyboard.keyaction[action])) {
                        // stop processing if action returns false (close & cancel)
                        if ($keyboard.keyaction[action](base, this, e) === false) {
                            return false;
                        }
                        action = null; // prevent inserting action name
                    }
                    // stop processing if keyboard closed and keyaction did not return false - see #536
                    if (!base.hasKeyboard()) {
                        return false;
                    }
                    if (typeof action !== 'undefined' && action !== null) {
                        last.key = $(this).hasClass(kbcss.keyAction) ? action : last.key;
                        base.insertText(last.key);
                        if (!base.capsLock && !o.stickyShift && !e.shiftKey) {
                            base.shiftActive = false;
                            base.showSet($key.attr('data-name'));
                        }
                    }
                    // set caret if caret moved by action function; also, attempt to fix issue #131
                    $keyboard.caret(base.$preview, last);
                    base.checkCombos();
                    e = $.extend({}, e, $.Event($keyboard.events.kbChange));
                    e.target = base.el;
                    e.action = last.key;
                    base.$el.trigger(e, [base, base.el]);
                    last.preVal = '' + last.val;
                    base.saveLastChange();

                    if ($.isFunction(o.change)) {
                        e.type = $keyboard.events.inputChange;
                        o.change(e, base, base.el);
                        // return false to prevent reopening keyboard if base.accept() was called
                        return false;
                    }

                })
                // using 'kb' namespace for mouse repeat functionality to keep it separate
                // I need to trigger a 'repeater.keyboard' to make it work
                .bindButton('mouseup' + base.namespace + ' ' + 'mouseleave touchend touchmove touchcancel '.split(' ')
                    .join(base.namespace + 'kb '), function (e) {
                    base.last.virtual = true;
                    var offset,
                        $this = $(this);
                    if (e.type === 'touchmove') {
                        // if moving within the same key, don't stop repeating
                        offset = $this.offset();
                        offset.right = offset.left + $this.outerWidth();
                        offset.bottom = offset.top + $this.outerHeight();
                        if (e.originalEvent.touches[0].pageX >= offset.left &&
                            e.originalEvent.touches[0].pageX < offset.right &&
                            e.originalEvent.touches[0].pageY >= offset.top &&
                            e.originalEvent.touches[0].pageY < offset.bottom) {
                            return true;
                        }
                    } else if (/(mouseleave|touchend|touchcancel)/i.test(e.type)) {
                        $this.removeClass(o.css.buttonHover); // needed for touch devices
                    } else {
                        if (!o.noFocus && base.isCurrent() && base.isVisible()) {
                            base.$preview.focus();
                        }
                        if (base.checkCaret) {
                            $keyboard.caret(base.$preview, base.last);
                        }
                    }
                    base.mouseRepeat = [false, ''];
                    clearTimeout(base.repeater); // make sure key repeat stops!
                    if (o.acceptValid && o.autoAcceptOnValid) {
                        if (
                            $.isFunction(o.validate) &&
                            o.validate(base, base.getValue())
                        ) {
                            base.$preview.blur();
                            base.accept();
                        }
                    }
                    return false;
                })
                // prevent form submits when keyboard is bound locally - issue #64
                .bindButton('click' + base.namespace, function () {
                    return false;
                })
                // Allow mousewheel to scroll through other keysets of the same (non-action) key
                .bindButton('mousewheel' + base.namespace, base.throttleEvent(function (e, delta) {
                    var $btn = $(this);
                    // no mouse repeat for action keys (shift, ctrl, alt, meta, etc)
                    if (!$btn || $btn.hasClass(kbcss.keyAction) || base.last.wheel_$Keys[0] !== this) {
                        return;
                    }
                    if (o.useWheel && base.wheel) {
                        // deltaY used by newer versions of mousewheel plugin
                        delta = delta || e.deltaY;
                        var n,
                            txt = base.last.wheelLayers || [];
                        if (txt.length > 1) {
                            n = base.last.wheelIndex + (delta > 0 ? -1 : 1);
                            if (n > txt.length - 1) {
                                n = 0;
                            }
                            if (n < 0) {
                                n = txt.length - 1;
                            }
                        } else {
                            n = 0;
                        }
                        base.last.wheelIndex = n;
                        $btn.html(txt[n]);
                        return false;
                    }
                }, 30))
                .bindButton('mousedown touchstart '.split(' ').join(base.namespace + 'kb '), function () {
                    var $btn = $(this);
                    // no mouse repeat for action keys (shift, ctrl, alt, meta, etc)
                    if (
                        !$btn || (
                            $btn.hasClass(kbcss.keyAction) &&
                            // mouse repeated action key exceptions
                            !$btn.is('.' + kbcss.keyPrefix + ('tab bksp space enter'.split(' ').join(',.' + kbcss.keyPrefix)))
                        )
                    ) {
                        return;
                    }
                    if (o.repeatRate !== 0) {
                        // save the key, make sure we are repeating the right one (fast typers)
                        base.mouseRepeat = [true, $btn];
                        setTimeout(function () {
                            // don't repeat keys if it is disabled - see #431
                            if (base && base.mouseRepeat[0] && base.mouseRepeat[1] === $btn && !$btn[0].disabled) {
                                base.repeatKey($btn);
                            }
                        }, o.repeatDelay);
                    }
                    return false;
                });
        };

        // No call on tailing event
        base.throttleEvent = function (cb, time) {
            var interm;
            return function () {
                if (!interm) {
                    cb.apply(this, arguments);
                    interm = true;
                    setTimeout(function () {
                        interm = false;
                    }, time);
                }
            }
        }

        base.execCommand = function (cmd, str) {
            base.el.ownerDocument.execCommand(cmd, false, str);
            base.el.normalize();
            if (o.reposition) {
                base.reposition();
            }
        };

        base.getValue = function ($el) {
            $el = $el || base.$preview;
            return $el[base.isContentEditable ? 'text' : 'val']();
        };

        base.setValue = function (txt, $el) {
            $el = $el || base.$preview;
            if (base.isContentEditable) {
                if (txt !== $el.text()) {
                    $keyboard.replaceContent($el, txt);
                    base.saveCaret();
                }
            } else {
                $el.val(txt);
            }
            return base;
        };

        // Insert text at caret/selection - thanks to Derek Wickwire for fixing this up!
        base.insertText = function (txt) {
            if (!base.$preview) {
                return base;
            }
            if (typeof o.beforeInsert === 'function') {
                txt = o.beforeInsert(base.last.event, base, base.el, txt);
            }
            if (typeof txt === 'undefined' || txt === false) {
                base.last.key = '';
                return base;
            }
            if (base.isContentEditable) {
                return base.insertContentEditable(txt);
            }
            var t,
                bksp = false,
                isBksp = txt === '\b',
                // use base.$preview.val() instead of base.preview.value (val.length includes carriage returns in IE).
                val = base.getValue(),
                pos = $keyboard.caret(base.$preview),
                len = val.length; // save original content length

            // silly IE caret hacks... it should work correctly, but navigating using arrow keys in a textarea
            // is still difficult
            // in IE, pos.end can be zero after input loses focus
            if (pos.end < pos.start) {
                pos.end = pos.start;
            }
            if (pos.start > len) {
                pos.end = pos.start = len;
            }

            if (base.preview.nodeName === 'TEXTAREA') {
                // This makes sure the caret moves to the next line after clicking on enter (manual typing works fine)
                if ($keyboard.msie && val.substr(pos.start, 1) === '\n') {
                    pos.start += 1;
                    pos.end += 1;
                }
            }

            t = pos.start;
            if (txt === '{d}') {
                txt = '';
                pos.end += 1;
            }

            if (isBksp) {
                txt = '';
                bksp = isBksp && t === pos.end && t > 0;
            }
            val = val.substr(0, t - (bksp ? 1 : 0)) + txt + val.substr(pos.end);
            t += bksp ? -1 : txt.length;

            base.setValue(val);
            base.saveCaret(t, t); // save caret in case of bksp
            base.setScroll();
            // see #506.. allow chaining of insertText
            return base;
        };

        base.insertContentEditable = function (txt) {
            base.$preview.focus();
            base.execCommand('insertText', txt);
            base.saveCaret();
            return base;
        };

        // check max length
        base.checkMaxLength = function () {
            if (!base.$preview) {
                return;
            }
            var start, caret,
                val = base.getValue(),
                len = base.isContentEditable ? $keyboard.getEditableLength(base.el) : val.length;
            if (o.maxLength !== false && len > o.maxLength) {
                start = $keyboard.caret(base.$preview).start;
                caret = Math.min(start, o.maxLength);

                // prevent inserting new characters when maxed #289
                if (!o.maxInsert) {
                    val = base.last.val;
                    caret = start - 1; // move caret back one
                }
                base.setValue(val.substring(0, o.maxLength));
                // restore caret on change, otherwise it ends up at the end.
                base.saveCaret(caret, caret);
            }
            if (base.$decBtn.length) {
                base.checkDecimal();
            }
            // allow chaining
            return base;
        };

        // mousedown repeater
        base.repeatKey = function (key) {
            key.trigger($keyboard.events.kbRepeater);
            if (base.mouseRepeat[0]) {
                base.repeater = setTimeout(function () {
                    if (base) {
                        base.repeatKey(key);
                    }
                }, base.repeatTime);
            }
        };

        base.getKeySet = function () {
            var sets = [];
            if (base.altActive) {
                sets.push('alt');
            }
            if (base.shiftActive) {
                sets.push('shift');
            }
            if (base.metaActive) {
                // base.metaActive contains the string name of the
                // current meta keyset
                sets.push(base.metaActive);
            }
            return sets.length ? sets.join('+') : 'normal';
        };

        // make it easier to switch keysets via API
        // showKeySet('shift+alt+meta1')
        base.showKeySet = function (str) {
            if (typeof str === 'string') {
                base.last.keyset = [base.shiftActive, base.altActive, base.metaActive];
                base.shiftActive = /shift/i.test(str);
                base.altActive = /alt/i.test(str);
                if (/\bmeta/.test(str)) {
                    base.metaActive = true;
                    base.showSet(str.match(/\bmeta[\w-]+/i)[0]);
                } else {
                    base.metaActive = false;
                    base.showSet();
                }
            } else {
                base.showSet(str);
            }
            // allow chaining
            return base;
        };

        base.showSet = function (name) {
            if (!base.hasKeyboard()) {
                return;
            }
            o = base.options; // refresh options
            var kbcss = $keyboard.css,
                prefix = '.' + kbcss.keyPrefix,
                active = o.css.buttonActive,
                key = '',
                toShow = (base.shiftActive ? 1 : 0) + (base.altActive ? 2 : 0);
            if (!base.shiftActive) {
                base.capsLock = false;
            }
            // check meta key set
            if (base.metaActive) {
                // remove "-shift" and "-alt" from meta name if it exists
                if (base.shiftActive) {
                    name = (name || '').replace('-shift', '');
                }
                if (base.altActive) {
                    name = (name || '').replace('-alt', '');
                }
                // the name attribute contains the meta set name 'meta99'
                key = (/^meta/i.test(name)) ? name : '';
                // save active meta keyset name
                if (key === '') {
                    key = (base.metaActive === true) ? '' : base.metaActive;
                } else {
                    base.metaActive = key;
                }
                // if meta keyset doesn't have a shift or alt keyset, then show just the meta key set
                if ((!o.stickyShift && base.last.keyset[2] !== base.metaActive) ||
                    ((base.shiftActive || base.altActive) &&
                        !base.$keyboard.find('.' + kbcss.keySet + '-' + key + base.rows[toShow]).length)) {
                    base.shiftActive = base.altActive = false;
                }
            } else if (!o.stickyShift && base.last.keyset[2] !== base.metaActive && base.shiftActive) {
                // switching from meta key set back to default, reset shift & alt if using stickyShift
                base.shiftActive = base.altActive = false;
            }
            toShow = (base.shiftActive ? 1 : 0) + (base.altActive ? 2 : 0);
            key = (toShow === 0 && !base.metaActive) ? '-normal' : (key === '') ? '' : '-' + key;
            if (!base.$keyboard.find('.' + kbcss.keySet + key + base.rows[toShow]).length) {
                // keyset doesn't exist, so restore last keyset settings
                base.shiftActive = base.last.keyset[0];
                base.altActive = base.last.keyset[1];
                base.metaActive = base.last.keyset[2];
                return;
            }
            base.$keyboard
                .find(prefix + 'alt,' + prefix + 'shift,.' + kbcss.keyAction + '[class*=meta]')
                .removeClass(active)
                .end()
                .find(prefix + 'alt')
                .toggleClass(active, base.altActive)
                .end()
                .find(prefix + 'shift')
                .toggleClass(active, base.shiftActive)
                .end()
                .find(prefix + 'lock')
                .toggleClass(active, base.capsLock)
                .end()
                .find('.' + kbcss.keySet)
                .hide()
                .end()
                .find('.' + (kbcss.keyAction + prefix + key).replace('--', '-'))
                .addClass(active);

            // show keyset using inline-block ( extender layout will then line up )
            base.$keyboard.find('.' + kbcss.keySet + key + base.rows[toShow])[0].style.display = 'inline-block';
            if (base.metaActive) {
                base.$keyboard.find(prefix + base.metaActive)
                // base.metaActive contains the string "meta#" or false
                // without the !== false, jQuery UI tries to transition the classes
                    .toggleClass(active, base.metaActive !== false);
            }
            base.last.keyset = [base.shiftActive, base.altActive, base.metaActive];
            base.$el.trigger($keyboard.events.kbKeysetChange, [base, base.el]);
            if (o.reposition) {
                base.reposition();
            }
        };

        // check for key combos (dead keys)
        base.checkCombos = function () {
            // return val for close function
            if (!(
                    base.isVisible() || (
                        base.hasKeyboard() &&
                        base.$keyboard.hasClass($keyboard.css.hasFocus)
                    )
                )) {
                return base.getValue(base.$preview || base.$el);
            }
            var r, t, t2, repl,
                // use base.$preview.val() instead of base.preview.value
                // (val.length includes carriage returns in IE).
                val = base.getValue(),
                pos = $keyboard.caret(base.$preview),
                layout = $keyboard.builtLayouts[base.layout],
                max = base.isContentEditable ? $keyboard.getEditableLength(base.el) : val.length,
                // save original content length
                len = max;
            // return if val is empty; fixes #352
            if (val === '') {
                // check valid on empty string - see #429
                if (o.acceptValid) {
                    base.checkValid();
                }
                return val;
            }

            // silly IE caret hacks... it should work correctly, but navigating using arrow keys in a textarea
            // is still difficult
            // in IE, pos.end can be zero after input loses focus
            if (pos.end < pos.start) {
                pos.end = pos.start;
            }
            if (pos.start > len) {
                pos.end = pos.start = len;
            }
            // This makes sure the caret moves to the next line after clicking on enter (manual typing works fine)
            if ($keyboard.msie && val.substr(pos.start, 1) === '\n') {
                pos.start += 1;
                pos.end += 1;
            }

            if (o.useCombos) {
                // keep 'a' and 'o' in the regex for ae and oe ligature (æ,œ)
                // thanks to KennyTM: http://stackoverflow.com/q/4275077
                // original regex /([`\'~\^\"ao])([a-z])/mig moved to $.keyboard.comboRegex
                if ($keyboard.msie) {
                    // old IE may not have the caret positioned correctly, so just check the whole thing
                    val = val.replace(base.regex, function (s, accent, letter) {
                        return (o.combos.hasOwnProperty(accent)) ? o.combos[accent][letter] || s : s;
                    });
                    // prevent combo replace error, in case the keyboard closes - see issue #116
                } else if (base.$preview.length) {
                    // Modern browsers - check for combos from last two characters left of the caret
                    t = pos.start - (pos.start - 2 >= 0 ? 2 : 0);
                    // target last two characters
                    $keyboard.caret(base.$preview, t, pos.end);
                    // do combo replace
                    t = $keyboard.caret(base.$preview);
                    repl = function (txt) {
                        return (txt || '').replace(base.regex, function (s, accent, letter) {
                            return (o.combos.hasOwnProperty(accent)) ? o.combos[accent][letter] || s : s;
                        });
                    };
                    t2 = repl(t.text);
                    // add combo back
                    // prevent error if caret doesn't return a function
                    if (t && t.replaceStr && t2 !== t.text) {
                        if (base.isContentEditable) {
                            $keyboard.replaceContent(el, repl);
                        } else {
                            base.setValue(t.replaceStr(t2));
                        }
                    }
                    val = base.getValue();
                }
            }

            // check input restrictions - in case content was pasted
            if (o.restrictInput && val !== '') {
                t = layout.acceptedKeys.length;

                r = layout.acceptedKeysRegex;
                if (!r) {
                    t2 = $.map(layout.acceptedKeys, function (v) {
                        // escape any special characters
                        return v.replace(base.escapeRegex, '\\$&');
                    });
                    r = layout.acceptedKeysRegex = new RegExp('(' + t2.join('|') + ')', 'g');
                }

                // only save matching keys
                t2 = val.match(r);
                if (t2) {
                    val = t2.join('');
                } else {
                    // no valid characters
                    val = '';
                    len = 0;
                }
            }

            // save changes, then reposition caret
            pos.start += max - len;
            pos.end += max - len;

            base.setValue(val);
            base.saveCaret(pos.start, pos.end);
            // set scroll to keep caret in view
            base.setScroll();
            base.checkMaxLength();

            if (o.acceptValid) {
                base.checkValid();
            }
            return val; // return text, used for keyboard closing section
        };

        // Toggle accept button classes, if validating
        base.checkValid = function () {
            var kbcss = $keyboard.css,
                $accept = base.$keyboard.find('.' + kbcss.keyPrefix + 'accept'),
                valid = true;
            if ($.isFunction(o.validate)) {
                valid = o.validate(base, base.getValue(), false);
            }
            // toggle accept button classes; defined in the css
            $accept
                .toggleClass(kbcss.inputInvalid, !valid)
                .toggleClass(kbcss.inputValid, valid)
                // update title to indicate that the entry is valid or invalid
                .attr('title', $accept.attr('data-title') + ' (' + o.display[valid ? 'valid' : 'invalid'] + ')');
        };

        // Decimal button for num pad - only allow one (not used by default)
        base.checkDecimal = function () {
            // Check US '.' or European ',' format
            if ((base.decimal && /\./g.test(base.preview.value)) ||
                (!base.decimal && /\,/g.test(base.preview.value))) {
                base.$decBtn
                    .attr({
                        'disabled': 'disabled',
                        'aria-disabled': 'true'
                    })
                    .removeClass(o.css.buttonHover)
                    .addClass(o.css.buttonDisabled);
            } else {
                base.$decBtn
                    .removeAttr('disabled')
                    .attr({
                        'aria-disabled': 'false'
                    })
                    .addClass(o.css.buttonDefault)
                    .removeClass(o.css.buttonDisabled);
            }
        };

        // get other layer values for a specific key
        base.getLayers = function ($el) {
            var kbcss = $keyboard.css,
                key = $el.attr('data-pos'),
                $keys = $el.closest('.' + kbcss.keyboard)
                    .find('button[data-pos="' + key + '"]');
            return $keys.filter(function () {
                return $(this)
                    .find('.' + kbcss.keyText)
                    .text() !== '';
            })
                .add($el);
        };

        // Go to next or prev inputs
        // goToNext = true, then go to next input; if false go to prev
        // isAccepted is from autoAccept option or true if user presses shift+enter
        base.switchInput = function (goToNext, isAccepted) {
            if ($.isFunction(o.switchInput)) {
                o.switchInput(base, goToNext, isAccepted);
            } else {
                // base.$keyboard may be an empty array - see #275 (apod42)
                if (base.$keyboard.length) {
                    base.$keyboard.hide();
                }
                var kb,
                    stopped = false,
                    all = $('button, input, select, textarea, a, [contenteditable]')
                        .filter(':visible')
                        .not(':disabled'),
                    indx = all.index(base.$el) + (goToNext ? 1 : -1);
                if (base.$keyboard.length) {
                    base.$keyboard.show();
                }
                if (indx > all.length - 1) {
                    stopped = o.stopAtEnd;
                    indx = 0; // go to first input
                }
                if (indx < 0) {
                    stopped = o.stopAtEnd;
                    indx = all.length - 1; // stop or go to last
                }
                if (!stopped) {
                    isAccepted = base.close(isAccepted);
                    if (!isAccepted) {
                        return;
                    }
                    kb = all.eq(indx).data('keyboard');
                    if (kb && kb.options.openOn.length) {
                        kb.focusOn();
                    } else {
                        all.eq(indx).focus();
                    }
                }
            }
            return false;
        };

        // Close the keyboard, if visible. Pass a status of true, if the content was accepted
        // (for the event trigger).
        base.close = function (accepted) {
            if (base.isOpen && base.$keyboard.length) {
                clearTimeout(base.throttled);
                var kbcss = $keyboard.css,
                    kbevents = $keyboard.events,
                    val = accepted ? base.checkCombos() : base.originalContent;
                // validate input if accepted
                if (accepted && $.isFunction(o.validate) && !o.validate(base, val, true)) {
                    val = base.originalContent;
                    accepted = false;
                    if (o.cancelClose) {
                        return;
                    }
                }
                base.isCurrent(false);
                base.isOpen = o.alwaysOpen || o.userClosed;
                if (base.isContentEditable && !accepted) {
                    // base.originalContent stores the HTML
                    base.$el.html(val);
                } else {
                    base.setValue(val, base.$el);
                }
                base.$el
                    .removeClass(kbcss.isCurrent + ' ' + kbcss.inputAutoAccepted)
                    // add 'ui-keyboard-autoaccepted' to inputs - see issue #66
                    .addClass((accepted || false) ? accepted === true ? '' : kbcss.inputAutoAccepted : '')
                    // trigger default change event - see issue #146
                    .trigger(kbevents.inputChange);
                // don't trigger an empty event - see issue #463
                if (!o.alwaysOpen) {
                    // don't trigger beforeClose if keyboard is always open
                    base.$el.trigger(kbevents.kbBeforeClose, [base, base.el, (accepted || false)]);
                }
                // save caret after updating value (fixes userClosed issue with changing focus)
                $keyboard.caret(base.$preview, base.last);

                base.$el
                    .trigger(((accepted || false) ? kbevents.inputAccepted : kbevents.inputCanceled), [base, base.el])
                    .trigger((o.alwaysOpen) ? kbevents.kbInactive : kbevents.kbHidden, [base, base.el])
                    .blur();

                // base is undefined if keyboard was destroyed - fixes #358
                if (base) {
                    // add close event time
                    base.last.eventTime = new Date().getTime();
                    if (!(o.alwaysOpen || o.userClosed && accepted === 'true') && base.$keyboard.length) {
                        // free up memory
                        base.removeKeyboard();
                        // rebind input focus - delayed to fix IE issue #72
                        base.timer = setTimeout(function () {
                            if (base) {
                                base.bindFocus();
                            }
                        }, 500);
                    }
                    if (!base.watermark && base.el.value === '' && base.inPlaceholder !== '') {
                        base.$el.addClass(kbcss.placeholder);
                        base.setValue(base.inPlaceholder, base.$el);
                    }
                }
            }
            return !!accepted;
        };

        base.accept = function () {
            return base.close(true);
        };

        base.checkClose = function (e) {
            if (base.opening) {
                return;
            }
            var kbcss = $.keyboard.css,
                $target = e.$target || $(e.target).closest('.' + $keyboard.css.keyboard + ', .' + $keyboard.css.input);
            if (!$target.length) {
                $target = $(e.target);
            }
            // needed for IE to allow switching between keyboards smoothly
            if ($target.length && $target.hasClass(kbcss.keyboard)) {
                var kb = $target.data('keyboard');
                // only trigger on self
                if (
                    kb !== base &&
                    !kb.$el.hasClass(kbcss.isCurrent) &&
                    kb.options.openOn &&
                    e.type === o.openOn
                ) {
                    kb.focusOn();
                }
            } else {
                base.escClose(e, $target);
            }
        };

        // callback functions called to check if the keyboard needs to be closed
        // e.g. on escape or clicking outside the keyboard
        base.escCloseCallback = {
            // keep keyboard open if alwaysOpen or stayOpen is true - fixes mutliple
            // always open keyboards or single stay open keyboard
            keepOpen: function () {
                return !base.isOpen;
            }
        };

        base.escClose = function (e, $el) {
            if (!base.isOpen) {
                return;
            }
            if (e && e.type === 'keyup') {
                return (e.which === $keyboard.keyCodes.escape && !o.ignoreEsc) ?
                    base.close(o.autoAccept && o.autoAcceptOnEsc ? 'true' : false) :
                    '';
            }
            var shouldStayOpen = false,
                $target = $el.length && $el || $(e.target);
            $.each(base.escCloseCallback, function (i, callback) {
                if (typeof callback === 'function') {
                    shouldStayOpen = shouldStayOpen || callback($target);
                }
            });
            if (shouldStayOpen) {
                return;
            }
            // ignore autoaccept if using escape - good idea?
            if (!base.isCurrent() && base.isOpen || base.isOpen && $target[0] !== base.el) {
                // don't close if stayOpen is set; but close if a different keyboard is being opened
                if ((o.stayOpen || o.userClosed) && !$target.hasClass($keyboard.css.input)) {
                    return;
                }
                // stop propogation in IE - an input getting focus doesn't open a keyboard if one is already open
                if ($keyboard.allie) {
                    e.preventDefault();
                }
                if (o.closeByClickEvent) {
                    // only close the keyboard if the user is clicking on an input or if they cause a click
                    // event (touchstart/mousedown will not force the close with this setting)
                    var name = $target[0] && $target[0].nodeName.toLowerCase();
                    if (name === 'input' || name === 'textarea' || e.type === 'click') {
                        base.close(o.autoAccept ? 'true' : false);
                    }
                } else {
                    // send 'true' instead of a true (boolean), the input won't get a 'ui-keyboard-autoaccepted'
                    // class name - see issue #66
                    base.close(o.autoAccept ? 'true' : false);
                }
            }
        };

        // Build default button
        base.keyBtn = $('<button />')
            .attr({
                'role': 'button',
                'type': 'button',
                'aria-disabled': 'false',
                'tabindex': '-1'
            })
            .addClass($keyboard.css.keyButton);

        // convert key names into a class name
        base.processName = function (name) {
            var index, n,
                process = (name || '').replace(/[^a-z0-9-_]/gi, ''),
                len = process.length,
                newName = [];
            if (len > 1 && name === process) {
                // return name if basic text
                return name;
            }
            // return character code sequence
            len = name.length;
            if (len) {
                for (index = 0; index < len; index++) {
                    n = name[index];
                    // keep '-' and '_'... so for dash, we get two dashes in a row
                    newName.push(/[a-z0-9-_]/i.test(n) ?
                        (/[-_]/.test(n) && index !== 0 ? '' : n) :
                        (index === 0 ? '' : '-') + n.charCodeAt(0)
                    );
                }
                return newName.join('');
            }
            return name;
        };

        base.processKeys = function (name) {
            var tmp,
                // Don't split colons followed by //, e.g. https://; Fixes #555
                parts = name.split(/:(?!\/\/)/),
                data = {
                    name: null,
                    map: '',
                    title: ''
                };
            /* map defined keys
		format 'key(A):Label_for_key_(ignore_parentheses_here)'
			'key' = key that is seen (can any character(s); but it might need to be escaped using '\'
			or entered as unicode '\u####'
			'(A)' = the actual key on the real keyboard to remap
			':Label_for_key' ends up in the title/tooltip
		Examples:
			'\u0391(A):alpha', 'x(y):this_(might)_cause_problems
			or edge cases of ':(x)', 'x(:)', 'x(()' or 'x())'
		Enhancement (if I can get alt keys to work):
			A mapped key will include the mod key, e.g. 'x(alt-x)' or 'x(alt-shift-x)'
		*/
            if (/\(.+\)/.test(parts[0]) || /^:\(.+\)/.test(name) || /\([(:)]\)/.test(name)) {
                // edge cases 'x(:)', 'x(()' or 'x())'
                if (/\([(:)]\)/.test(name)) {
                    tmp = parts[0].match(/([^(]+)\((.+)\)/);
                    if (tmp && tmp.length) {
                        data.name = tmp[1];
                        data.map = tmp[2];
                        data.title = parts.length > 1 ? parts.slice(1).join(':') : '';
                    } else {
                        // edge cases 'x(:)', ':(x)' or ':(:)'
                        data.name = name.match(/([^(]+)/)[0];
                        if (data.name === ':') {
                            // ':(:):test' => parts = [ '', '(', ')', 'title' ] need to slice 1
                            parts = parts.slice(1);
                        }
                        if (tmp === null) {
                            // 'x(:):test' => parts = [ 'x(', ')', 'title' ] need to slice 2
                            data.map = ':';
                            parts = parts.slice(2);
                        }
                        data.title = parts.length ? parts.join(':') : '';
                    }
                } else {
                    // example: \u0391(A):alpha; extract 'A' from '(A)'
                    data.map = name.match(/\(([^()]+?)\)/)[1];
                    // remove '(A)', left with '\u0391:alpha'
                    name = name.replace(/\(([^()]+)\)/, '');
                    tmp = name.split(':');
                    // get '\u0391' from '\u0391:alpha'
                    if (tmp[0] === '') {
                        data.name = ':';
                        parts = parts.slice(1);
                    } else {
                        data.name = tmp[0];
                    }
                    data.title = parts.length > 1 ? parts.slice(1).join(':') : '';
                }
            } else {
                // find key label
                // corner case of '::;' reduced to ':;', split as ['', ';']
                if (name !== '' && parts[0] === '') {
                    data.name = ':';
                    parts = parts.slice(1);
                } else {
                    data.name = parts[0];
                }
                data.title = parts.length > 1 ? parts.slice(1).join(':') : '';
            }
            data.title = $.trim(data.title).replace(/_/g, ' ');
            return data;
        };

        // Add key function
        // keyName = the name of the function called in $.keyboard.keyaction when the button is clicked
        // name = name added to key, or cross-referenced in the display options
        // base.temp[0] = keyset to attach the new button
        // regKey = true when it is not an action key
        base.addKey = function (keyName, action, regKey) {
            var keyClass, tmp, keys,
                data = {},
                txt = base.processKeys(regKey ? keyName : action),
                kbcss = $keyboard.css;

            if (!regKey && o.display[txt.name]) {
                keys = base.processKeys(o.display[txt.name]);
                // action contained in "keyName" (e.g. keyName = "accept",
                // action = "a" (use checkmark instead of text))
                keys.action = base.processKeys(keyName).name;
            } else {
                // when regKey is true, keyName is the same as action
                keys = txt;
                keys.action = txt.name;
            }

            data.name = base.processName(txt.name);
            if (keys.name !== '') {
                if (keys.map !== '') {
                    $keyboard.builtLayouts[base.layout].mappedKeys[keys.map] = keys.name;
                    $keyboard.builtLayouts[base.layout].acceptedKeys.push(keys.name);
                } else if (regKey) {
                    $keyboard.builtLayouts[base.layout].acceptedKeys.push(keys.name);
                }
            }

            if (regKey) {
                keyClass = data.name === '' ? '' : kbcss.keyPrefix + data.name;
            } else {
                // Action keys will have the 'ui-keyboard-actionkey' class
                keyClass = kbcss.keyAction + ' ' + kbcss.keyPrefix + keys.action;
            }
            // '\u2190'.length = 1 because the unicode is converted, so if more than one character,
            // add the wide class
            keyClass += (keys.name.length > 2 ? ' ' + kbcss.keyWide : '') + ' ' + o.css.buttonDefault;

            data.html = '<span class="' + kbcss.keyText + '">' +
                // this prevents HTML from being added to the key
                keys.name.replace(/[\u00A0-\u9999]/gim, function (i) {
                    return '&#' + i.charCodeAt(0) + ';';
                }) +
                '</span>';

            data.$key = base.keyBtn
                .clone()
                .attr({
                    'data-value': regKey ? keys.name : keys.action, // value
                    'data-name': keys.action,
                    'data-pos': base.temp[1] + ',' + base.temp[2],
                    'data-action': keys.action,
                    'data-html': data.html
                })
                // add 'ui-keyboard-' + data.name for all keys
                //  (e.g. 'Bksp' will have 'ui-keyboard-bskp' class)
                // any non-alphanumeric characters will be replaced with
                //  their decimal unicode value
                //  (e.g. '~' is a regular key, class = 'ui-keyboard-126'
                //  (126 is the unicode decimal value - same as &#126;)
                //  See https://en.wikipedia.org/wiki/List_of_Unicode_characters#Control_codes
                .addClass(keyClass)
                .html(data.html)
                .appendTo(base.temp[0]);

            if (keys.map) {
                data.$key.attr('data-mapped', keys.map);
            }
            if (keys.title || txt.title) {
                data.$key.attr({
                    'data-title': txt.title || keys.title, // used to allow adding content to title
                    'title': txt.title || keys.title
                });
            }

            if (typeof o.buildKey === 'function') {
                data = o.buildKey(base, data);
                // copy html back to attributes
                tmp = data.$key.html();
                data.$key.attr('data-html', tmp);
            }
            return data.$key;
        };

        base.customHash = function (layout) {
            /*jshint bitwise:false */
            var i, array, hash, character, len,
                arrays = [],
                merged = [];
            // pass layout to allow for testing
            layout = typeof layout === 'undefined' ? o.customLayout : layout;
            // get all layout arrays
            for (array in layout) {
                if (layout.hasOwnProperty(array)) {
                    arrays.push(layout[array]);
                }
            }
            // flatten array
            merged = merged.concat.apply(merged, arrays).join(' ');
            // produce hash name - http://stackoverflow.com/a/7616484/145346
            hash = 0;
            len = merged.length;
            if (len === 0) {
                return hash;
            }
            for (i = 0; i < len; i++) {
                character = merged.charCodeAt(i);
                hash = ((hash << 5) - hash) + character;
                hash = hash & hash; // Convert to 32bit integer
            }
            return hash;
        };

        base.buildKeyboard = function (name, internal) {
            // o.display is empty when this is called from the scramble extension (when alwaysOpen:true)
            if ($.isEmptyObject(o.display)) {
                // set keyboard language
                base.updateLanguage();
            }
            var index, row, $row, currentSet,
                kbcss = $keyboard.css,
                sets = 0,
                layout = $keyboard.builtLayouts[name || base.layout || o.layout] = {
                    mappedKeys: {},
                    acceptedKeys: []
                },
                acceptedKeys = layout.acceptedKeys = o.restrictInclude ?
                    ('' + o.restrictInclude).split(/\s+/) || [] :
                    [],
                // using $layout temporarily to hold keyboard popup classnames
                $layout = kbcss.keyboard + ' ' + o.css.popup + ' ' + o.css.container +
                    (o.alwaysOpen || o.userClosed ? ' ' + kbcss.alwaysOpen : ''),

                container = $('<div />')
                    .addClass($layout)
                    .attr({
                        'role': 'textbox'
                    })
                    .hide();

            // allow adding "{space}" as an accepted key - Fixes #627
            index = $.inArray('{space}', acceptedKeys);
            if (index > -1) {
                acceptedKeys[index] = ' ';
            }

            // verify layout or setup custom keyboard
            if ((internal && o.layout === 'custom') || !$keyboard.layouts.hasOwnProperty(o.layout)) {
                o.layout = 'custom';
                $layout = $keyboard.layouts.custom = o.customLayout || {
                    'normal': ['{cancel}']
                };
            } else {
                $layout = $keyboard.layouts[internal ? o.layout : name || base.layout || o.layout];
            }

            // Main keyboard building loop
            $.each($layout, function (set, keySet) {
                // skip layout name & lang settings
                if (set !== '' && !/^(name|lang|rtl)$/i.test(set)) {
                    // keep backwards compatibility for change from default to normal naming
                    if (set === 'default') {
                        set = 'normal';
                    }
                    sets++;
                    $row = $('<div />')
                        .attr('name', set) // added for typing extension
                        .addClass(kbcss.keySet + ' ' + kbcss.keySet + '-' + set)
                        .appendTo(container)
                        .toggle(set === 'normal');

                    for (row = 0; row < keySet.length; row++) {
                        // remove extra spaces before spliting (regex probably could be improved)
                        currentSet = $.trim(keySet[row]).replace(/\{(\.?)[\s+]?:[\s+]?(\.?)\}/g, '{$1:$2}');
                        base.buildRow($row, row, currentSet.split(/\s+/), acceptedKeys);
                        $row.find('.' + kbcss.keyButton + ',.' + kbcss.keySpacer)
                            .filter(':last')
                            .after('<br class="' + kbcss.endRow + '"/>');
                    }
                }
            });

            if (sets > 1) {
                base.sets = true;
            }
            layout.hasMappedKeys = !($.isEmptyObject(layout.mappedKeys));
            layout.$keyboard = container;
            return container;
        };

        base.buildRow = function ($row, row, keys, acceptedKeys) {
            var t, txt, key, isAction, action, margin,
                kbcss = $keyboard.css;
            for (key = 0; key < keys.length; key++) {
                // used by addKey function
                base.temp = [$row, row, key];
                isAction = false;

                // ignore empty keys
                if (keys[key].length === 0) {
                    continue;
                }

                // process here if it's an action key
                if (/^\{\S+\}$/.test(keys[key])) {
                    action = keys[key].match(/^\{(\S+)\}$/)[1];
                    // add active class if there are double exclamation points in the name
                    if (/\!\!/.test(action)) {
                        action = action.replace('!!', '');
                        isAction = true;
                    }

                    // add empty space
                    if (/^sp:((\d+)?([\.|,]\d+)?)(em|px)?$/i.test(action)) {
                        // not perfect globalization, but allows you to use {sp:1,1em}, {sp:1.2em} or {sp:15px}
                        margin = parseFloat(action
                            .replace(/,/, '.')
                            .match(/^sp:((\d+)?([\.|,]\d+)?)(em|px)?$/i)[1] || 0
                        );
                        $('<span class="' + kbcss.keyText + '"></span>')
                        // previously {sp:1} would add 1em margin to each side of a 0 width span
                        // now Firefox doesn't seem to render 0px dimensions, so now we set the
                        // 1em margin x 2 for the width
                            .width((action.match(/px/i) ? margin + 'px' : (margin * 2) + 'em'))
                            .addClass(kbcss.keySpacer)
                            .appendTo($row);
                    }

                    // add empty button
                    if (/^empty(:((\d+)?([\.|,]\d+)?)(em|px)?)?$/i.test(action)) {
                        margin = (/:/.test(action)) ? parseFloat(action
                            .replace(/,/, '.')
                            .match(/^empty:((\d+)?([\.|,]\d+)?)(em|px)?$/i)[1] || 0
                        ) : '';
                        base
                            .addKey('', ' ', true)
                            .addClass(o.css.buttonDisabled + ' ' + o.css.buttonEmpty)
                            .attr('aria-disabled', true)
                            .width(margin ? (action.match('px') ? margin + 'px' : (margin * 2) + 'em') : '');
                        continue;
                    }

                    // meta keys
                    if (/^meta[\w-]+\:?(\w+)?/i.test(action)) {
                        base
                            .addKey(action.split(':')[0], action)
                            .addClass(kbcss.keyHasActive);
                        continue;
                    }

                    // switch needed for action keys with multiple names/shortcuts or
                    // default will catch all others
                    txt = action.split(':');
                    switch (txt[0].toLowerCase()) {

                        case 'a':
                        case 'accept':
                            base
                                .addKey('accept', action)
                                .addClass(o.css.buttonAction + ' ' + kbcss.keyAction);
                            break;

                        case 'alt':
                        case 'altgr':
                            base
                                .addKey('alt', action)
                                .addClass(kbcss.keyHasActive);
                            break;

                        case 'b':
                        case 'bksp':
                            base.addKey('bksp', action);
                            break;

                        case 'c':
                        case 'cancel':
                            base
                                .addKey('cancel', action)
                                .addClass(o.css.buttonAction + ' ' + kbcss.keyAction);
                            break;

                        // toggle combo/diacritic key
                        /*jshint -W083 */
                        case 'combo':
                            base
                                .addKey('combo', action)
                                .addClass(kbcss.keyHasActive)
                                .attr('title', function (indx, title) {
                                    // add combo key state to title
                                    return title + ' ' + o.display[o.useCombos ? 'active' : 'disabled'];
                                })
                                .toggleClass(o.css.buttonActive, o.useCombos);
                            break;

                        // Decimal - unique decimal point (num pad layout)
                        case 'dec':
                            acceptedKeys.push((base.decimal) ? '.' : ',');
                            base.addKey('dec', action);
                            break;

                        case 'e':
                        case 'enter':
                            base
                                .addKey('enter', action)
                                .addClass(o.css.buttonAction + ' ' + kbcss.keyAction);
                            break;

                        case 'lock':
                            base
                                .addKey('lock', action)
                                .addClass(kbcss.keyHasActive);
                            break;

                        case 's':
                        case 'shift':
                            base
                                .addKey('shift', action)
                                .addClass(kbcss.keyHasActive);
                            break;

                        // Change sign (for num pad layout)
                        case 'sign':
                            acceptedKeys.push('-');
                            base.addKey('sign', action);
                            break;

                        case 'space':
                            acceptedKeys.push(' ');
                            base.addKey('space', action);
                            break;

                        case 't':
                        case 'tab':
                            base.addKey('tab', action);
                            break;

                        default:
                            if ($keyboard.keyaction.hasOwnProperty(txt[0])) {
                                base
                                    .addKey(txt[0], action)
                                    .toggleClass(o.css.buttonAction + ' ' + kbcss.keyAction, isAction);
                            }

                    }

                } else {

                    // regular button (not an action key)
                    t = keys[key];
                    base.addKey(t, t, true);
                }
            }
        };

        base.removeBindings = function (namespace) {
            $(document).unbind(namespace);
            if (base.el.ownerDocument !== document) {
                $(base.el.ownerDocument).unbind(namespace);
            }
            $(window).unbind(namespace);
            base.$el.unbind(namespace);
        };

        base.removeKeyboard = function () {
            base.$decBtn = [];
            // base.$preview === base.$el when o.usePreview is false - fixes #442
            if (o.usePreview) {
                base.$preview.removeData('keyboard');
            }
            base.$preview.unbind(base.namespace + 'keybindings');
            base.preview = null;
            base.$preview = null;
            base.$previewCopy = null;
            base.$keyboard.removeData('keyboard');
            base.$keyboard.remove();
            base.$keyboard = [];
            base.isOpen = false;
            base.isCurrent(false);
        };

        base.destroy = function (callback) {
            var index,
                kbcss = $keyboard.css,
                len = base.extensionNamespace.length,
                tmp = [
                    kbcss.input,
                    kbcss.locked,
                    kbcss.placeholder,
                    kbcss.noKeyboard,
                    kbcss.alwaysOpen,
                    o.css.input,
                    kbcss.isCurrent
                ].join(' ');
            clearTimeout(base.timer);
            clearTimeout(base.timer2);
            clearTimeout(base.timer3);
            if (base.$keyboard.length) {
                base.removeKeyboard();
            }
            base.removeBindings(base.namespace);
            base.removeBindings(base.namespace + 'callbacks');
            for (index = 0; index < len; index++) {
                base.removeBindings(base.extensionNamespace[index]);
            }
            base.el.active = false;

            base.$el
                .removeClass(tmp)
                .removeAttr('aria-haspopup')
                .removeAttr('role')
                .removeData('keyboard');
            base = null;

            if (typeof callback === 'function') {
                callback();
            }
        };

        // Run initializer
        base.init();

    }; // end $.keyboard definition

    // event.which & ASCII values
    $keyboard.keyCodes = {
        backSpace: 8,
        tab: 9,
        enter: 13,
        capsLock: 20,
        escape: 27,
        space: 32,
        pageUp: 33,
        pageDown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        insert: 45,
        delete: 46,
        // event.which keyCodes (uppercase letters)
        A: 65,
        Z: 90,
        V: 86,
        C: 67,
        X: 88,

        // ASCII lowercase a & z
        a: 97,
        z: 122
    };

    $keyboard.css = {
        // keyboard id suffix
        idSuffix: '_keyboard',
        // class name to set initial focus
        initialFocus: 'keyboard-init-focus',
        // element class names
        input: 'ui-keyboard-input',
        inputClone: 'ui-keyboard-preview-clone',
        wrapper: 'ui-keyboard-preview-wrapper',
        preview: 'ui-keyboard-preview',
        keyboard: 'ui-keyboard',
        keySet: 'ui-keyboard-keyset',
        keyButton: 'ui-keyboard-button',
        keyWide: 'ui-keyboard-widekey',
        keyPrefix: 'ui-keyboard-',
        keyText: 'ui-keyboard-text', // span with button text
        keyHasActive: 'ui-keyboard-hasactivestate',
        keyAction: 'ui-keyboard-actionkey',
        keySpacer: 'ui-keyboard-spacer', // empty keys
        keyToggle: 'ui-keyboard-toggle',
        keyDisabled: 'ui-keyboard-disabled',
        // Class for BRs with a div wrapper inside of contenteditable
        divWrapperCE: 'ui-keyboard-div-wrapper',
        // states
        locked: 'ui-keyboard-lockedinput',
        alwaysOpen: 'ui-keyboard-always-open',
        noKeyboard: 'ui-keyboard-nokeyboard',
        placeholder: 'ui-keyboard-placeholder',
        hasFocus: 'ui-keyboard-has-focus',
        isCurrent: 'ui-keyboard-input-current',
        // validation & autoaccept
        inputValid: 'ui-keyboard-valid-input',
        inputInvalid: 'ui-keyboard-invalid-input',
        inputAutoAccepted: 'ui-keyboard-autoaccepted',
        endRow: 'ui-keyboard-button-endrow' // class added to <br>
    };

    $keyboard.events = {
        // keyboard events
        kbChange: 'keyboardChange',
        kbBeforeClose: 'beforeClose',
        kbBeforeVisible: 'beforeVisible',
        kbVisible: 'visible',
        kbInit: 'initialized',
        kbInactive: 'inactive',
        kbHidden: 'hidden',
        kbRepeater: 'repeater',
        kbKeysetChange: 'keysetChange',
        // input events
        inputAccepted: 'accepted',
        inputCanceled: 'canceled',
        inputChange: 'change',
        inputRestricted: 'restricted'
    };

    // Action key function list
    $keyboard.keyaction = {
        accept: function (base) {
            base.close(true); // same as base.accept();
            return false; // return false prevents further processing
        },
        alt: function (base) {
            base.altActive = !base.altActive;
            base.showSet();
        },
        bksp: function (base) {
            if (base.isContentEditable) {
                base.execCommand('delete');
                // save new caret position
                base.saveCaret();
            } else {
                // the script looks for the '\b' string and initiates a backspace
                base.insertText('\b');
            }
        },
        cancel: function (base) {
            base.close();
            return false; // return false prevents further processing
        },
        clear: function (base) {
            base.$preview[base.isContentEditable ? 'text' : 'val']('');
            if (base.$decBtn.length) {
                base.checkDecimal();
            }
        },
        combo: function (base) {
            var o = base.options,
                c = !o.useCombos,
                $combo = base.$keyboard.find('.' + $keyboard.css.keyPrefix + 'combo');
            o.useCombos = c;
            $combo
                .toggleClass(o.css.buttonActive, c)
                // update combo key state
                .attr('title', $combo.attr('data-title') + ' (' + o.display[c ? 'active' : 'disabled'] + ')');
            if (c) {
                base.checkCombos();
            }
            return false;
        },
        dec: function (base) {
            base.insertText((base.decimal) ? '.' : ',');
        },
        del: function (base) {
            if (base.isContentEditable) {
                base.execCommand('forwardDelete');
            } else {
                // the script looks for the '{d}' string and initiates a delete
                base.insertText('{d}');
            }
        },
        // resets to base keyset (deprecated because "default" is a reserved word)
        'default': function (base) {
            base.shiftActive = base.altActive = base.metaActive = false;
            base.showSet();
        },
        // el is the pressed key (button) object; it is null when the real keyboard enter is pressed
        enter: function (base, el, e) {
            var tag = base.el.nodeName,
                o = base.options;
            // shift+enter in textareas
            if (e.shiftKey) {
                // textarea, input & contenteditable - enterMod + shift + enter = accept,
                //  then go to prev; base.switchInput(goToNext, autoAccept)
                // textarea & input - shift + enter = accept (no navigation)
                return (o.enterNavigation) ? base.switchInput(!e[o.enterMod], true) : base.close(true);
            }
            // input only - enterMod + enter to navigate
            if (o.enterNavigation && (tag !== 'TEXTAREA' || e[o.enterMod])) {
                return base.switchInput(!e[o.enterMod], o.autoAccept ? 'true' : false);
            }
            // pressing virtual enter button inside of a textarea - add a carriage return
            // e.target is span when clicking on text and button at other times
            if (tag === 'TEXTAREA' && $(e.target).closest('button').length) {
                // IE8 fix (space + \n) - fixes #71 thanks Blookie!
                base.insertText(($keyboard.msie ? ' ' : '') + '\n');
            }
            if (base.isContentEditable && !o.enterNavigation) {
                base.execCommand('insertHTML', '<div><br class="' + $keyboard.css.divWrapperCE + '"></div>');
                // Using backspace on wrapped BRs will now shift the textnode inside of the wrapped BR
                // Although not ideal, the caret is moved after the block - see the wiki page for
                // more details: https://github.com/Mottie/Keyboard/wiki/Contenteditable#limitations
                // move caret after a delay to allow rendering of HTML
                setTimeout(function () {
                    $keyboard.keyaction.right(base);
                    base.saveCaret();
                }, 0);
            }
        },
        // caps lock key
        lock: function (base) {
            base.last.keyset[0] = base.shiftActive = base.capsLock = !base.capsLock;
            base.showSet();
        },
        left: function (base) {
            var p = $keyboard.caret(base.$preview);
            if (p.start - 1 >= 0) {
                // move both start and end of caret (prevents text selection) & save caret position
                base.last.start = base.last.end = p.start - 1;
                $keyboard.caret(base.$preview, base.last);
                base.setScroll();
            }
        },
        meta: function (base, el) {
            var $el = $(el);
            base.metaActive = !$el.hasClass(base.options.css.buttonActive);
            base.showSet($el.attr('data-name'));
        },
        next: function (base) {
            base.switchInput(true, base.options.autoAccept);
            return false;
        },
        // same as 'default' - resets to base keyset
        normal: function (base) {
            base.shiftActive = base.altActive = base.metaActive = false;
            base.showSet();
        },
        prev: function (base) {
            base.switchInput(false, base.options.autoAccept);
            return false;
        },
        right: function (base) {
            var p = $keyboard.caret(base.$preview),
                len = base.isContentEditable ? $keyboard.getEditableLength(base.el) : base.getValue().length;
            if (p.end + 1 <= len) {
                // move both start and end of caret to end position
                // (prevents text selection) && save caret position
                base.last.start = base.last.end = p.end + 1;
                $keyboard.caret(base.$preview, base.last);
                base.setScroll();
            }
        },
        shift: function (base) {
            base.last.keyset[0] = base.shiftActive = !base.shiftActive;
            base.showSet();
        },
        sign: function (base) {
            if (/^[+-]?\d*\.?\d*$/.test(base.getValue())) {
                var caret,
                    p = $keyboard.caret(base.$preview),
                    val = base.getValue(),
                    len = base.isContentEditable ? $keyboard.getEditableLength(base.el) : val.length;
                base.setValue(val * -1);
                caret = len - val.length;
                base.last.start = p.start + caret;
                base.last.end = p.end + caret;
                $keyboard.caret(base.$preview, base.last);
                base.setScroll();
            }
        },
        space: function (base) {
            base.insertText(' ');
        },
        tab: function (base) {
            var tag = base.el.nodeName,
                o = base.options;
            if (tag !== 'TEXTAREA') {
                if (o.tabNavigation) {
                    return base.switchInput(!base.shiftActive, true);
                } else if (tag === 'INPUT') {
                    // ignore tab key in input
                    return false;
                }
            }
            base.insertText('\t');
        },
        toggle: function (base) {
            base.enabled = !base.enabled;
            base.toggle();
        },
        // *** Special action keys: NBSP & zero-width characters ***
        // Non-breaking space
        NBSP: '\u00a0',
        // zero width space
        ZWSP: '\u200b',
        // Zero width non-joiner
        ZWNJ: '\u200c',
        // Zero width joiner
        ZWJ: '\u200d',
        // Left-to-right Mark
        LRM: '\u200e',
        // Right-to-left Mark
        RLM: '\u200f'
    };

    // Default keyboard layouts
    $keyboard.builtLayouts = {};
    $keyboard.layouts = {
        'alpha': {
            'normal': [
                '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
                '{tab} a b c d e f g h i j [ ] \\',
                'k l m n o p q r s ; \' {enter}',
                '{shift} t u v w x y z , . / {shift}',
                '{accept} {space} {cancel}'
            ],
            'shift': [
                '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
                '{tab} A B C D E F G H I J { } |',
                'K L M N O P Q R S : " {enter}',
                '{shift} T U V W X Y Z < > ? {shift}',
                '{accept} {space} {cancel}'
            ]
        },
        'qwerty': {
            'normal': [
                '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
                '{tab} q w e r t y u i o p [ ] \\',
                'a s d f g h j k l ; \' {enter}',
                '{shift} z x c v b n m , . / {shift}',
                '{accept} {space} {cancel}'
            ],
            'shift': [
                '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
                '{tab} Q W E R T Y U I O P { } |',
                'A S D F G H J K L : " {enter}',
                '{shift} Z X C V B N M < > ? {shift}',
                '{accept} {space} {cancel}'
            ]
        },
        'international': {
            'normal': [
                '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
                '{tab} q w e r t y u i o p [ ] \\',
                'a s d f g h j k l ; \' {enter}',
                '{shift} z x c v b n m , . / {shift}',
                '{accept} {alt} {space} {alt} {cancel}'
            ],
            'shift': [
                '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
                '{tab} Q W E R T Y U I O P { } |',
                'A S D F G H J K L : " {enter}',
                '{shift} Z X C V B N M < > ? {shift}',
                '{accept} {alt} {space} {alt} {cancel}'
            ],
            'alt': [
                '~ \u00a1 \u00b2 \u00b3 \u00a4 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00d7 {bksp}',
                '{tab} \u00e4 \u00e5 \u00e9 \u00ae \u00fe \u00fc \u00fa \u00ed \u00f3 \u00f6 \u00ab \u00bb \u00ac',
                '\u00e1 \u00df \u00f0 f g h j k \u00f8 \u00b6 \u00b4 {enter}',
                '{shift} \u00e6 x \u00a9 v b \u00f1 \u00b5 \u00e7 > \u00bf {shift}',
                '{accept} {alt} {space} {alt} {cancel}'
            ],
            'alt-shift': [
                '~ \u00b9 \u00b2 \u00b3 \u00a3 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00f7 {bksp}',
                '{tab} \u00c4 \u00c5 \u00c9 \u00ae \u00de \u00dc \u00da \u00cd \u00d3 \u00d6 \u00ab \u00bb \u00a6',
                '\u00c4 \u00a7 \u00d0 F G H J K \u00d8 \u00b0 \u00a8 {enter}',
                '{shift} \u00c6 X \u00a2 V B \u00d1 \u00b5 \u00c7 . \u00bf {shift}',
                '{accept} {alt} {space} {alt} {cancel}'
            ]
        },
        'colemak': {
            'normal': [
                '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
                '{tab} q w f p g j l u y ; [ ] \\',
                '{bksp} a r s t d h n e i o \' {enter}',
                '{shift} z x c v b k m , . / {shift}',
                '{accept} {space} {cancel}'
            ],
            'shift': [
                '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
                '{tab} Q W F P G J L U Y : { } |',
                '{bksp} A R S T D H N E I O " {enter}',
                '{shift} Z X C V B K M < > ? {shift}',
                '{accept} {space} {cancel}'
            ]
        },
        'dvorak': {
            'normal': [
                '` 1 2 3 4 5 6 7 8 9 0 [ ] {bksp}',
                '{tab} \' , . p y f g c r l / = \\',
                'a o e u i d h t n s - {enter}',
                '{shift} ; q j k x b m w v z {shift}',
                '{accept} {space} {cancel}'
            ],
            'shift': [
                '~ ! @ # $ % ^ & * ( ) { } {bksp}',
                '{tab} " < > P Y F G C R L ? + |',
                'A O E U I D H T N S _ {enter}',
                '{shift} : Q J K X B M W V Z {shift}',
                '{accept} {space} {cancel}'
            ]
        },
        'num': {
            'normal': [
                '= ( ) {b}',
                '{clear} / * -',
                '7 8 9 +',
                '4 5 6 {sign}',
                '1 2 3 %',
                '0 {dec} {a} {c}'
            ]
        }
    };

    $keyboard.language = {
        en: {
            display: {
                // check mark - same action as accept
                'a': '\u2714:Accept (Shift+Enter)',
                'accept': 'Accept:Accept (Shift+Enter)',
                // other alternatives \u2311
                'alt': 'Alt:\u2325 AltGr',
                // Left arrow (same as &larr;)
                'b': '\u232b:Backspace',
                'bksp': 'Bksp:Backspace',
                // big X, close - same action as cancel
                'c': '\u2716:Cancel (Esc)',
                'cancel': 'Cancel:Cancel (Esc)',
                // clear num pad
                'clear': 'C:Clear',
                'combo': '\u00f6:Toggle Combo Keys',
                // decimal point for num pad (optional), change '.' to ',' for European format
                'dec': '.:Decimal',
                // down, then left arrow - enter symbol
                'e': '\u23ce:Enter',
                'empty': '\u00a0',
                'enter': 'Enter:Enter \u23ce',
                // left arrow (move caret)
                'left': '\u2190',
                // caps lock
                'lock': 'Lock:\u21ea Caps Lock',
                'next': 'Next \u21e8',
                'prev': '\u21e6 Prev',
                // right arrow (move caret)
                'right': '\u2192',
                // thick hollow up arrow
                's': '\u21e7:Shift',
                'shift': 'Shift:Shift',
                // +/- sign for num pad
                'sign': '\u00b1:Change Sign',
                'space': '\u00a0:Space',
                // right arrow to bar (used since this virtual keyboard works with one directional tabs)
                't': '\u21e5:Tab',
                // \u21b9 is the true tab symbol (left & right arrows)
                'tab': '\u21e5 Tab:Tab',
                // replaced by an image
                'toggle': ' ',

                // added to titles of keys
                // accept key status when acceptValid:true
                'valid': 'valid',
                'invalid': 'invalid',
                // combo key states
                'active': 'active',
                'disabled': 'disabled'
            },

            // Message added to the key title while hovering, if the mousewheel plugin exists
            wheelMessage: 'Use mousewheel to see other keys',

            comboRegex: /([`\'~\^\"ao])([a-z])/mig,
            combos: {
                // grave
                '`': {
                    a: '\u00e0', A: '\u00c0', e: '\u00e8', E: '\u00c8', i: '\u00ec', I: '\u00cc', o: '\u00f2',
                    O: '\u00d2', u: '\u00f9', U: '\u00d9', y: '\u1ef3', Y: '\u1ef2'
                },
                // acute & cedilla
                "'": {
                    a: '\u00e1', A: '\u00c1', e: '\u00e9', E: '\u00c9', i: '\u00ed', I: '\u00cd', o: '\u00f3',
                    O: '\u00d3', u: '\u00fa', U: '\u00da', y: '\u00fd', Y: '\u00dd'
                },
                // umlaut/trema
                '"': {
                    a: '\u00e4', A: '\u00c4', e: '\u00eb', E: '\u00cb', i: '\u00ef', I: '\u00cf', o: '\u00f6',
                    O: '\u00d6', u: '\u00fc', U: '\u00dc', y: '\u00ff', Y: '\u0178'
                },
                // circumflex
                '^': {
                    a: '\u00e2', A: '\u00c2', e: '\u00ea', E: '\u00ca', i: '\u00ee', I: '\u00ce', o: '\u00f4',
                    O: '\u00d4', u: '\u00fb', U: '\u00db', y: '\u0177', Y: '\u0176'
                },
                // tilde
                '~': {
                    a: '\u00e3', A: '\u00c3', e: '\u1ebd', E: '\u1ebc', i: '\u0129', I: '\u0128', o: '\u00f5',
                    O: '\u00d5', u: '\u0169', U: '\u0168', y: '\u1ef9', Y: '\u1ef8', n: '\u00f1', N: '\u00d1'
                }
            }
        }
    };

    $keyboard.defaultOptions = {
        // set this to ISO 639-1 language code to override language set by the layout
        // http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
        // language defaults to 'en' if not found
        language: null,
        rtl: false,

        // *** choose layout & positioning ***
        layout: 'qwerty',
        customLayout: null,

        position: {
            // optional - null (attach to input/textarea) or a jQuery object (attach elsewhere)
            of: null,
            my: 'center top',
            at: 'center top',
            // used when 'usePreview' is false (centers the keyboard at the bottom of the input/textarea)
            at2: 'center bottom'
        },

        // allow jQuery position utility to reposition the keyboard on window resize
        reposition: true,

        // preview added above keyboard if true, original input/textarea used if false
        usePreview: true,

        // if true, the keyboard will always be visible
        alwaysOpen: false,

        // give the preview initial focus when the keyboard becomes visible
        initialFocus: true,

        // avoid changing the focus (hardware keyboard probably won't work)
        noFocus: false,

        // if true, keyboard will remain open even if the input loses focus, but closes on escape
        // or when another keyboard opens.
        stayOpen: false,

        // Prevents the keyboard from closing when the user clicks or presses outside the keyboard
        // the `autoAccept` option must also be set to true when this option is true or changes are lost
        userClosed: false,

        // if true, keyboard will not close if you press escape.
        ignoreEsc: false,

        // if true, keyboard will only closed on click event instead of mousedown and touchstart
        closeByClickEvent: false,

        css: {
            // input & preview
            input: 'ui-widget-content ui-corner-all',
            // keyboard container
            container: 'ui-widget-content ui-widget ui-corner-all ui-helper-clearfix',
            // keyboard container extra class (same as container, but separate)
            popup: '',
            // default state
            buttonDefault: 'ui-state-default ui-corner-all',
            // hovered button
            buttonHover: 'ui-state-hover',
            // Action keys (e.g. Accept, Cancel, Tab, etc); this replaces 'actionClass' option
            buttonAction: 'ui-state-active',
            // Active keys (e.g. shift down, meta keyset active, combo keys active)
            buttonActive: 'ui-state-active',
            // used when disabling the decimal button {dec} when a decimal exists in the input area
            buttonDisabled: 'ui-state-disabled',
            buttonEmpty: 'ui-keyboard-empty'
        },

        // *** Useability ***
        // Auto-accept content when clicking outside the keyboard (popup will close)
        autoAccept: false,
        // Auto-accept content even if the user presses escape (only works if `autoAccept` is `true`)
        autoAcceptOnEsc: false,

        // Prevents direct input in the preview window when true
        lockInput: false,

        // Prevent keys not in the displayed keyboard from being typed in
        restrictInput: false,
        // Additional allowed characters while restrictInput is true
        restrictInclude: '', // e.g. 'a b foo \ud83d\ude38'

        // Check input against validate function, if valid the accept button gets a class name of
        // 'ui-keyboard-valid-input'. If invalid, the accept button gets a class name of
        // 'ui-keyboard-invalid-input'
        acceptValid: false,
        // Auto-accept when input is valid; requires `acceptValid` set `true` & validate callback
        autoAcceptOnValid: false,
        // Check validation on keyboard initialization. If false, the "Accept" key state (color)
        // will not change to show if the content is valid, or not
        checkValidOnInit: true,

        // if acceptValid is true & the validate function returns a false, this option will cancel
        // a keyboard close only after the accept button is pressed
        cancelClose: true,

        // tab to go to next, shift-tab for previous (default behavior)
        tabNavigation: false,

        // enter for next input; shift+enter accepts content & goes to next
        // shift + 'enterMod' + enter ('enterMod' is the alt as set below) will accept content and go
        // to previous in a textarea
        enterNavigation: false,
        // mod key options: 'ctrlKey', 'shiftKey', 'altKey', 'metaKey' (MAC only)
        enterMod: 'altKey', // alt-enter to go to previous; shift-alt-enter to accept & go to previous

        // if true, the next button will stop on the last keyboard input/textarea; prev button stops at first
        // if false, the next button will wrap to target the first input/textarea; prev will go to the last
        stopAtEnd: true,

        // Set this to append the keyboard after the input/textarea (appended to the input/textarea parent).
        // This option works best when the input container doesn't have a set width & when the 'tabNavigation'
        // option is true.
        appendLocally: false,
        // When appendLocally is false, the keyboard will be appended to this object
        appendTo: 'body',

        // Wrap all <br>s inside of a contenteditable in a div; without wrapping, the caret
        // position will not be accurate
        wrapBRs: true,

        // If false, the shift key will remain active until the next key is (mouse) clicked on; if true it will
        // stay active until pressed again
        stickyShift: true,

        // Prevent pasting content into the area
        preventPaste: false,

        // caret placed at the end of any text when keyboard becomes visible
        caretToEnd: false,

        // caret stays this many pixels from the edge of the input while scrolling left/right;
        // use "c" or "center" to center the caret while scrolling
        scrollAdjustment: 10,

        // Set the max number of characters allowed in the input, setting it to false disables this option
        maxLength: false,
        // allow inserting characters @ caret when maxLength is set
        maxInsert: true,

        // Mouse repeat delay - when clicking/touching a virtual keyboard key, after this delay the key will
        // start repeating
        repeatDelay: 500,

        // Mouse repeat rate - after the repeatDelay, this is the rate (characters per second) at which the
        // key is repeated Added to simulate holding down a real keyboard key and having it repeat. I haven't
        // calculated the upper limit of this rate, but it is limited to how fast the javascript can process
        // the keys. And for me, in Firefox, it's around 20.
        repeatRate: 20,

        // resets the keyboard to the default keyset when visible
        resetDefault: true,

        // Event (namespaced) on the input to reveal the keyboard. To disable it, just set it to ''.
        openOn: 'focus',

        // enable the keyboard on readonly inputs
        activeOnReadonly: false,

        // Event (namepaced) for when the character is added to the input (clicking on the keyboard)
        keyBinding: 'mousedown touchstart',

        // enable/disable mousewheel functionality
        // enabling still depends on the mousewheel plugin
        useWheel: true,

        // combos (emulate dead keys : http://en.wikipedia.org/wiki/Keyboard_layout#US-International)
        // if user inputs `a the script converts it to à, ^o becomes ô, etc.
        useCombos: true,

        /*
			// *** Methods ***
			// commenting these out to reduce the size of the minified version
			// Callbacks - attach a function to any of these callbacks as desired
			initialized   : function(e, keyboard, el) {},
			beforeVisible : function(e, keyboard, el) {},
			visible       : function(e, keyboard, el) {},
			beforeInsert  : function(e, keyboard, el, textToAdd) { return textToAdd; },
			change        : function(e, keyboard, el) {},
			beforeClose   : function(e, keyboard, el, accepted) {},
			accepted      : function(e, keyboard, el) {},
			canceled      : function(e, keyboard, el) {},
			restricted    : function(e, keyboard, el) {},
			hidden        : function(e, keyboard, el) {},
			// called instead of base.switchInput
			switchInput   : function(keyboard, goToNext, isAccepted) {},
			// used if you want to create a custom layout or modify the built-in keyboard
			create        : function(keyboard) { return keyboard.buildKeyboard(); },

			// build key callback
			buildKey : function( keyboard, data ) {
				/ *
				data = {
				// READ ONLY
				isAction : [boolean] true if key is an action key
				name     : [string]  key class name suffix ( prefix = 'ui-keyboard-' );
														 may include decimal ascii value of character
				value    : [string]  text inserted (non-action keys)
				title    : [string]  title attribute of key
				action   : [string]  keyaction name
				html     : [string]  HTML of the key; it includes a <span> wrapping the text
				// use to modify key HTML
				$key     : [object]  jQuery selector of key which is already appended to keyboard
				}
				* /
				return data;
			},
		*/

        // this callback is called, if the acceptValid is true, and just before the 'beforeClose' to check
        // the value if the value is valid, return true and the keyboard will continue as it should
        // (close if not always open, etc). If the value is not valid, return false and clear the keyboard
        // value ( like this "keyboard.$preview.val('');" ), if desired. The validate function is called after
        // each input, the 'isClosing' value will be false; when the accept button is clicked,
        // 'isClosing' is true
        validate: function (/* keyboard, value, isClosing */) {
            return true;
        }

    };

    // for checking combos
    $keyboard.comboRegex = /([`\'~\^\"ao])([a-z])/mig;

    // store current keyboard element; used by base.isCurrent()
    $keyboard.currentKeyboard = '';

    $('<!--[if lte IE 8]><script>jQuery("body").addClass("oldie");</script><![endif]--><!--[if IE]>' +
        '<script>jQuery("body").addClass("ie");</script><![endif]-->')
        .appendTo('body')
        .remove();
    $keyboard.msie = $('body').hasClass('oldie'); // Old IE flag, used for caret positioning
    $keyboard.allie = $('body').hasClass('ie');

    $keyboard.watermark = (typeof (document.createElement('input').placeholder) !== 'undefined');

    $keyboard.checkCaretSupport = function () {
        if (typeof $keyboard.checkCaret !== 'boolean') {
            // Check if caret position is saved when input is hidden or loses focus
            // (*cough* all versions of IE and I think Opera has/had an issue as well
            var $temp = $('<div style="height:0px;width:0px;overflow:hidden;position:fixed;top:0;left:-100px;">' +
                '<input type="text" value="testing"/></div>').prependTo('body'); // stop page scrolling
            $keyboard.caret($temp.find('input'), 3, 3);
            // Also save caret position of the input if it is locked
            $keyboard.checkCaret = $keyboard.caret($temp.find('input').hide().show()).start !== 3;
            $temp.remove();
        }
        return $keyboard.checkCaret;
    };

    $keyboard.caret = function ($el, param1, param2) {
        if (!$el || !$el.length || $el.is(':hidden') || $el.css('visibility') === 'hidden') {
            return {};
        }
        var start, end, txt, pos,
            kb = $el.data('keyboard'),
            noFocus = kb && kb.options.noFocus,
            formEl = /(textarea|input)/i.test($el[0].nodeName);
        if (!noFocus) {
            $el.focus();
        }
        // set caret position
        if (typeof param1 !== 'undefined') {
            // allow setting caret using ( $el, { start: x, end: y } )
            if (typeof param1 === 'object' && 'start' in param1 && 'end' in param1) {
                start = param1.start;
                end = param1.end;
            } else if (typeof param2 === 'undefined') {
                param2 = param1; // set caret using start position
            }
            // set caret using ( $el, start, end );
            if (typeof param1 === 'number' && typeof param2 === 'number') {
                start = param1;
                end = param2;
            } else if (param1 === 'start') {
                start = end = 0;
            } else if (typeof param1 === 'string') {
                // unknown string setting, move caret to end
                start = end = 'end';
            }

            // *** SET CARET POSITION ***
            // modify the line below to adapt to other caret plugins
            return formEl ?
                $el.caret(start, end, noFocus) :
                $keyboard.setEditableCaret($el, start, end);
        }
        // *** GET CARET POSITION ***
        // modify the line below to adapt to other caret plugins
        if (formEl) {
            // modify the line below to adapt to other caret plugins
            pos = $el.caret();
        } else {
            // contenteditable
            pos = $keyboard.getEditableCaret($el[0]);
        }
        start = pos.start;
        end = pos.end;

        // *** utilities ***
        txt = formEl && $el[0].value || $el.text() || '';
        return {
            start: start,
            end: end,
            // return selected text
            text: txt.substring(start, end),
            // return a replace selected string method
            replaceStr: function (str) {
                return txt.substring(0, start) + str + txt.substring(end, txt.length);
            }
        };
    };

    $keyboard.isTextNode = function (el) {
        return el && el.nodeType === 3;
    };

    $keyboard.isBlock = function (el, node) {
        var win = el.ownerDocument.defaultView;
        if (
            node && node.nodeType === 1 && node !== el &&
            win.getComputedStyle(node).display === 'block'
        ) {
            return 1;
        }
        return 0;
    };

    // Wrap all BR's inside of contenteditable
    $keyboard.wrapBRs = function (container) {
        var $el = $(container).find('br:not(.' + $keyboard.css.divWrapperCE + ')');
        if ($el.length) {
            $.each($el, function (i, el) {
                var len = el.parentNode.childNodes.length;
                if (
                    // wrap BRs if not solo child
                len !== 1 ||
                // Or if BR is wrapped by a span
                len === 1 && !$keyboard.isBlock(container, el.parentNode)
                ) {
                    $(el).addClass($keyboard.css.divWrapperCE).wrap('<div>');
                }
            });
        }
    };

    $keyboard.getEditableCaret = function (container) {
        container = $(container)[0];
        if (!container.isContentEditable) {
            return {};
        }
        var end, text,
            options = ($(container).data('keyboard') || {}).options,
            doc = container.ownerDocument,
            range = doc.getSelection().getRangeAt(0),
            result = pathToNode(range.startContainer, range.startOffset),
            start = result.position;
        if (options.wrapBRs !== false) {
            $keyboard.wrapBRs(container);
        }

        function pathToNode(endNode, offset) {
            var node, adjust,
                txt = '',
                done = false,
                position = 0,
                nodes = $.makeArray(container.childNodes);

            function checkBlock(val) {
                if (val) {
                    position += val;
                    txt += options && options.replaceCR || '\n';
                }
            }

            while (!done && nodes.length) {
                node = nodes.shift();
                if (node === endNode) {
                    done = true;
                }

                // Add one if previous sibling was a block node (div, p, etc)
                adjust = $keyboard.isBlock(container, node.previousSibling);
                checkBlock(adjust);

                if ($keyboard.isTextNode(node)) {
                    position += done ? offset : node.length;
                    txt += node.textContent;
                    if (done) {
                        return {position: position, text: txt};
                    }
                } else if (!done && node.childNodes) {
                    nodes = $.makeArray(node.childNodes).concat(nodes);
                }
                // Add one if we're inside a block node (div, p, etc)
                // and previous sibling was a text node
                adjust = $keyboard.isTextNode(node.previousSibling) && $keyboard.isBlock(container, node);
                checkBlock(adjust);
            }
            return {position: position, text: txt};
        }

        // check of start and end are the same
        if (range.endContainer === range.startContainer && range.endOffset === range.startOffset) {
            end = start;
            text = '';
        } else {
            result = pathToNode(range.endContainer, range.endOffset);
            end = result.position;
            text = result.text.substring(start, end);
        }
        return {
            start: start,
            end: end,
            text: text
        };
    };

    $keyboard.getEditableLength = function (container) {
        var result = $keyboard.setEditableCaret(container, 'getMax');
        // if not a number, the container is not a contenteditable element
        return typeof result === 'number' ? result : null;
    };

    $keyboard.setEditableCaret = function (container, start, end) {
        container = $(container)[0];
        if (!container.isContentEditable) {
            return {};
        }
        var doc = container.ownerDocument,
            range = doc.createRange(),
            sel = doc.getSelection(),
            options = ($(container).data('keyboard') || {}).options,
            s = start,
            e = end,
            text = '',
            result = findNode(start === 'getMax' ? 'end' : start);

        function findNode(offset) {
            if (offset === 'end') {
                // Set some value > content length; but return max
                offset = container.innerHTML.length;
            } else if (offset < 0) {
                offset = 0;
            }
            var node, check,
                txt = '',
                done = false,
                position = 0,
                last = 0,
                max = 0,
                nodes = $.makeArray(container.childNodes);

            function updateText(val) {
                txt += val ? options && options.replaceCR || '\n' : '';
                return val > 0;
            }

            function checkDone(adj) {
                var val = position + adj;
                last = max;
                max += adj;
                if (offset - val >= 0) {
                    position = val;
                    return offset - position <= 0;
                }
                return offset - val <= 0;
            }

            while (!done && nodes.length) {
                node = nodes.shift();
                // Add one if the previous sibling was a block node (div, p, etc)
                check = $keyboard.isBlock(container, node.previousSibling);
                if (updateText(check) && checkDone(check)) {
                    done = true;
                }
                // Add one if we're inside a block node (div, p, etc)
                check = $keyboard.isTextNode(node.previousSibling) && $keyboard.isBlock(container, node);
                if (updateText(check) && checkDone(check)) {
                    done = true;
                }
                if ($keyboard.isTextNode(node)) {
                    txt += node.textContent;
                    if (checkDone(node.length)) {
                        check = offset - position === 0 && position - last >= 1 ? node.length : offset - position;
                        return {
                            node: node,
                            offset: check,
                            position: offset,
                            text: txt
                        };
                    }
                } else if (!done && node.childNodes) {
                    nodes = $.makeArray(node.childNodes).concat(nodes);
                }
            }
            return nodes.length ?
                {node: node, offset: offset - position, position: offset, text: txt} :
                // Offset is larger than content, return max
                {node: node, offset: node && node.length || 0, position: max, text: txt};
        }

        if (result.node) {
            s = result.position; // Adjust if start > content length
            if (start === 'getMax') {
                return s;
            }
            range.setStart(result.node, result.offset);
            // Only find end if > start and is defined... this allows passing
            // setEditableCaret(el, 'end') or setEditableCaret(el, 10, 'end');
            if (typeof end !== 'undefined' && end !== start) {
                result = findNode(end);
            }
            if (result.node) {
                e = result.position; // Adjust if end > content length
                range.setEnd(result.node, result.offset);
                text = s === e ? '' : result.text.substring(s, e);
            }
            sel.removeAllRanges();
            sel.addRange(range);
        }
        return {
            start: s,
            end: e,
            text: text
        };
    };

    $keyboard.replaceContent = function (el, param) {
        el = $(el)[0];
        var node, i, str,
            type = typeof param,
            caret = $keyboard.getEditableCaret(el).start,
            charIndex = 0,
            nodeStack = [el];
        while ((node = nodeStack.pop())) {
            if ($keyboard.isTextNode(node)) {
                if (type === 'function') {
                    if (caret >= charIndex && caret <= charIndex + node.length) {
                        node.textContent = param(node.textContent);
                    }
                } else if (type === 'string') {
                    // maybe not the best method, but it works for simple changes
                    str = param.substring(charIndex, charIndex + node.length);
                    if (str !== node.textContent) {
                        node.textContent = str;
                    }
                }
                charIndex += node.length;
            } else if (node && node.childNodes) {
                i = node.childNodes.length;
                while (i--) {
                    nodeStack.push(node.childNodes[i]);
                }
            }
        }
        i = $keyboard.getEditableCaret(el);
        $keyboard.setEditableCaret(el, i.start, i.start);
    };

    $.fn.keyboard = function (options) {
        return this.each(function () {
            if (!$(this).data('keyboard')) {
                /*jshint nonew:false */
                (new $.keyboard(this, options));
            }
        });
    };

    $.fn.getkeyboard = function () {
        return this.data('keyboard');
    };

    /* Copyright (c) 2010 C. F., Wong (<a href="http://cloudgen.w0ng.hk">Cloudgen Examplet Store</a>)
	 * Licensed under the MIT License:
	 * http://www.opensource.org/licenses/mit-license.php
	 * Highly modified from the original
	 */

    $.fn.caret = function (start, end, noFocus) {
        if (
            typeof this[0] === 'undefined' ||
            this.is(':hidden') ||
            this.css('visibility') === 'hidden' ||
            !/(INPUT|TEXTAREA)/.test(this[0].nodeName)
        ) {
            return this;
        }
        var selRange, range, stored_range, txt, val,
            $el = this,
            el = $el[0],
            selection = el.ownerDocument.selection,
            sTop = el.scrollTop,
            ss = false,
            supportCaret = true;
        try {
            ss = 'selectionStart' in el;
        } catch (err) {
            supportCaret = false;
        }
        if (supportCaret && typeof start !== 'undefined') {
            if (!/(email|number)/i.test(el.type)) {
                if (ss) {
                    el.selectionStart = start;
                    el.selectionEnd = end;
                } else {
                    selRange = el.createTextRange();
                    selRange.collapse(true);
                    selRange.moveStart('character', start);
                    selRange.moveEnd('character', end - start);
                    selRange.select();
                }
            }
            // must be visible or IE8 crashes; IE9 in compatibility mode works fine - issue #56
            if (!noFocus && ($el.is(':visible') || $el.css('visibility') !== 'hidden')) {
                el.focus();
            }
            el.scrollTop = sTop;
            return this;
        }
        if (/(email|number)/i.test(el.type)) {
            // fix suggested by raduanastase (https://github.com/Mottie/Keyboard/issues/105#issuecomment-40456535)
            start = end = $el.val().length;
        } else if (ss) {
            start = el.selectionStart;
            end = el.selectionEnd;
        } else if (selection) {
            if (el.nodeName === 'TEXTAREA') {
                val = $el.val();
                range = selection.createRange();
                stored_range = range.duplicate();
                stored_range.moveToElementText(el);
                stored_range.setEndPoint('EndToEnd', range);
                // thanks to the awesome comments in the rangy plugin
                start = stored_range.text.replace(/\r/g, '\n').length;
                end = start + range.text.replace(/\r/g, '\n').length;
            } else {
                val = $el.val().replace(/\r/g, '\n');
                range = selection.createRange().duplicate();
                range.moveEnd('character', val.length);
                start = (range.text === '' ? val.length : val.lastIndexOf(range.text));
                range = selection.createRange().duplicate();
                range.moveStart('character', -val.length);
                end = range.text.length;
            }
        } else {
            // caret positioning not supported
            start = end = (el.value || '').length;
        }
        txt = (el.value || '');
        return {
            start: start,
            end: end,
            text: txt.substring(start, end),
            replace: function (str) {
                return txt.substring(0, start) + str + txt.substring(end, txt.length);
            }
        };
    };
    console.log($keyboard);
    return $keyboard;

}));

$(function () {
    $('input').keyboard({
        layout: 'international',
        css: {
            input: 'form-control input-sm dark',
            container: 'center-block well',
            buttonDefault: 'btn btn-default',
            buttonHover: 'btn-primary',
            buttonAction: 'active',
            buttonDisabled: 'disabled'
        }
    })
});





