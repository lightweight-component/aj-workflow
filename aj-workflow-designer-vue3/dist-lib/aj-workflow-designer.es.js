import { Fragment as e, Teleport as t, computed as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createTextVNode as s, createVNode as c, defineComponent as l, nextTick as u, normalizeClass as d, onBeforeUnmount as f, onMounted as p, openBlock as m, ref as h, renderList as g, renderSlot as _, toDisplayString as v, vModelDynamic as y, vModelText as b, vShow as x, watch as S, withCtx as C, withDirectives as w, withModifiers as T } from "vue";
//#region \0rolldown/runtime.js
var E = Object.create, D = Object.defineProperty, O = Object.getOwnPropertyDescriptor, k = Object.getOwnPropertyNames, A = Object.getPrototypeOf, j = Object.prototype.hasOwnProperty, M = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), N = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = k(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !j.call(e, s) && s !== n && D(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = O(t, s)) || r.enumerable
	});
	return e;
}, P = /* @__PURE__ */ ((e, t, n) => (n = e == null ? {} : E(A(e)), N(t || !e || !e.__esModule || !j.call(e, "default") ? D(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)))((/* @__PURE__ */ M(((e, t) => {
	(function(n, r) {
		typeof e == "object" && typeof t == "object" ? t.exports = r() : typeof define == "function" && define.amd ? define([], r) : typeof e == "object" ? e.Raphael = r() : n.Raphael = r();
	})(window, function() {
		return function(e) {
			var t = {};
			function n(r) {
				if (t[r]) return t[r].exports;
				var i = t[r] = {
					i: r,
					l: !1,
					exports: {}
				};
				return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
			}
			return n.m = e, n.c = t, n.d = function(e, t, r) {
				n.o(e, t) || Object.defineProperty(e, t, {
					enumerable: !0,
					get: r
				});
			}, n.r = function(e) {
				typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
			}, n.t = function(e, t) {
				if (1 & t && (e = n(e)), 8 & t || 4 & t && typeof e == "object" && e && e.__esModule) return e;
				var r = Object.create(null);
				if (n.r(r), Object.defineProperty(r, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && typeof e != "string") for (var i in e) n.d(r, i, function(t) {
					return e[t];
				}.bind(null, i));
				return r;
			}, n.n = function(e) {
				var t = e && e.__esModule ? function() {
					return e.default;
				} : function() {
					return e;
				};
				return n.d(t, "a", t), t;
			}, n.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}, n.p = "", n(n.s = 1);
		}([
			function(e, t, n) {
				var r = [n(2)], i;
				(i = function(e) {
					function t(r) {
						if (t.is(r, "function")) return n ? r() : e.on("raphael.DOMload", r);
						if (t.is(r, O)) return t._engine.create[d](t, r.splice(0, 3 + t.is(r[0], D))).add(r);
						var i = Array.prototype.slice.call(arguments, 0);
						if (t.is(i[i.length - 1], "function")) {
							var a = i.pop();
							return n ? a.call(t._engine.create[d](t, i)) : e.on("raphael.DOMload", function() {
								a.call(t._engine.create[d](t, i));
							});
						}
						return t._engine.create[d](t, arguments);
					}
					t.version = "2.3.0", t.eve = e;
					var n, r, i = /[, ]+/, a = {
						circle: 1,
						rect: 1,
						path: 1,
						ellipse: 1,
						text: 1,
						image: 1
					}, o = /\{(\d+)\}/g, s = "hasOwnProperty", c = {
						doc: document,
						win: window
					}, l = {
						was: Object.prototype[s].call(c.win, "Raphael"),
						is: c.win.Raphael
					}, u = function() {
						this.ca = this.customAttributes = {};
					}, d = "apply", f = "concat", p = "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch, m = "", h = " ", g = String, _ = "split", v = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[_](h), y = {
						mousedown: "touchstart",
						mousemove: "touchmove",
						mouseup: "touchend"
					}, b = g.prototype.toLowerCase, x = Math, S = x.max, C = x.min, w = x.abs, T = x.pow, E = x.PI, D = "number", O = "array", k = Object.prototype.toString, A = (t._ISURL = /^url\(['"]?(.+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i), j = {
						NaN: 1,
						Infinity: 1,
						"-Infinity": 1
					}, M = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, N = x.round, P = parseFloat, F = parseInt, I = g.prototype.toUpperCase, L = t._availableAttrs = {
						"arrow-end": "none",
						"arrow-start": "none",
						blur: 0,
						"clip-rect": "0 0 1e9 1e9",
						cursor: "default",
						cx: 0,
						cy: 0,
						fill: "#fff",
						"fill-opacity": 1,
						font: "10px \"Arial\"",
						"font-family": "\"Arial\"",
						"font-size": "10",
						"font-style": "normal",
						"font-weight": 400,
						gradient: 0,
						height: 0,
						href: "http://raphaeljs.com/",
						"letter-spacing": 0,
						opacity: 1,
						path: "M0,0",
						r: 0,
						rx: 0,
						ry: 0,
						src: "",
						stroke: "#000",
						"stroke-dasharray": "",
						"stroke-linecap": "butt",
						"stroke-linejoin": "butt",
						"stroke-miterlimit": 0,
						"stroke-opacity": 1,
						"stroke-width": 1,
						target: "_blank",
						"text-anchor": "middle",
						title: "Raphael",
						transform: "",
						width: 0,
						x: 0,
						y: 0,
						class: ""
					}, R = t._availableAnimAttrs = {
						blur: D,
						"clip-rect": "csv",
						cx: D,
						cy: D,
						fill: "colour",
						"fill-opacity": D,
						"font-size": D,
						height: D,
						opacity: D,
						path: "path",
						r: D,
						rx: D,
						ry: D,
						stroke: "colour",
						"stroke-opacity": D,
						"stroke-width": D,
						transform: "transform",
						width: D,
						x: D,
						y: D
					}, z = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/, B = {
						hs: 1,
						rg: 1
					}, V = /,?([achlmqrstvxz]),?/gi, H = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, ee = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, U = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi, W = (t._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}), G = function(e, t) {
						return P(e) - P(t);
					}, te = function(e) {
						return e;
					}, ne = t._rectPath = function(e, t, n, r, i) {
						return i ? [
							[
								"M",
								e + i,
								t
							],
							[
								"l",
								n - 2 * i,
								0
							],
							[
								"a",
								i,
								i,
								0,
								0,
								1,
								i,
								i
							],
							[
								"l",
								0,
								r - 2 * i
							],
							[
								"a",
								i,
								i,
								0,
								0,
								1,
								-i,
								i
							],
							[
								"l",
								2 * i - n,
								0
							],
							[
								"a",
								i,
								i,
								0,
								0,
								1,
								-i,
								-i
							],
							[
								"l",
								0,
								2 * i - r
							],
							[
								"a",
								i,
								i,
								0,
								0,
								1,
								i,
								-i
							],
							["z"]
						] : [
							[
								"M",
								e,
								t
							],
							[
								"l",
								n,
								0
							],
							[
								"l",
								0,
								r
							],
							[
								"l",
								-n,
								0
							],
							["z"]
						];
					}, re = function(e, t, n, r) {
						return r ??= n, [
							[
								"M",
								e,
								t
							],
							[
								"m",
								0,
								-r
							],
							[
								"a",
								n,
								r,
								0,
								1,
								1,
								0,
								2 * r
							],
							[
								"a",
								n,
								r,
								0,
								1,
								1,
								0,
								-2 * r
							],
							["z"]
						];
					}, K = t._getPath = {
						path: function(e) {
							return e.attr("path");
						},
						circle: function(e) {
							var t = e.attrs;
							return re(t.cx, t.cy, t.r);
						},
						ellipse: function(e) {
							var t = e.attrs;
							return re(t.cx, t.cy, t.rx, t.ry);
						},
						rect: function(e) {
							var t = e.attrs;
							return ne(t.x, t.y, t.width, t.height, t.r);
						},
						image: function(e) {
							var t = e.attrs;
							return ne(t.x, t.y, t.width, t.height);
						},
						text: function(e) {
							var t = e._getBBox();
							return ne(t.x, t.y, t.width, t.height);
						},
						set: function(e) {
							var t = e._getBBox();
							return ne(t.x, t.y, t.width, t.height);
						}
					}, ie = t.mapPath = function(e, t) {
						if (!t) return e;
						var n, r, i, a, o, s, c;
						for (i = 0, o = (e = je(e)).length; i < o; i++) for (a = 1, s = (c = e[i]).length; a < s; a += 2) n = t.x(c[a], c[a + 1]), r = t.y(c[a], c[a + 1]), c[a] = n, c[a + 1] = r;
						return e;
					};
					if (t._g = c, t.type = c.win.SVGAngle || c.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", t.type == "VML") {
						var ae, oe = c.doc.createElement("div");
						if (oe.innerHTML = "<v:shape adj=\"1\"/>", (ae = oe.firstChild).style.behavior = "url(#default#VML)", !ae || typeof ae.adj != "object") return t.type = m;
						oe = null;
					}
					function se(e) {
						if (typeof e == "function" || Object(e) !== e) return e;
						var t = new e.constructor();
						for (var n in e) e[s](n) && (t[n] = se(e[n]));
						return t;
					}
					t.svg = !(t.vml = t.type == "VML"), t._Paper = u, t.fn = r = u.prototype = t.prototype, t._id = 0, t.is = function(e, t) {
						return (t = b.call(t)) == "finite" ? !j[s](+e) : t == "array" ? e instanceof Array : t == "null" && e === null || t == typeof e && e !== null || t == "object" && e === Object(e) || t == "array" && Array.isArray && Array.isArray(e) || k.call(e).slice(8, -1).toLowerCase() == t;
					}, t.angle = function(e, n, r, i, a, o) {
						if (a == null) {
							var s = e - r, c = n - i;
							return s || c ? (180 + 180 * x.atan2(-c, -s) / E + 360) % 360 : 0;
						}
						return t.angle(e, n, a, o) - t.angle(r, i, a, o);
					}, t.rad = function(e) {
						return e % 360 * E / 180;
					}, t.deg = function(e) {
						return Math.round(180 * e / E % 360 * 1e3) / 1e3;
					}, t.snapTo = function(e, n, r) {
						if (r = t.is(r, "finite") ? r : 10, t.is(e, O)) {
							for (var i = e.length; i--;) if (w(e[i] - n) <= r) return e[i];
						} else {
							var a = n % (e = +e);
							if (a < r) return n - a;
							if (a > e - r) return n - a + e;
						}
						return n;
					};
					var ce, le;
					t.createUUID = (ce = /[xy]/g, le = function(e) {
						var t = 16 * x.random() | 0;
						return (e == "x" ? t : 3 & t | 8).toString(16);
					}, function() {
						return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(ce, le).toUpperCase();
					}), t.setWindow = function(n) {
						e("raphael.setWindow", t, c.win, n), c.win = n, c.doc = c.win.document, t._engine.initWin && t._engine.initWin(c.win);
					};
					var ue = function(e) {
						if (t.vml) {
							var n, r = /^\s+|\s+$/g;
							try {
								var i = new ActiveXObject("htmlfile");
								i.write("<body>"), i.close(), n = i.body;
							} catch {
								n = createPopup().document.body;
							}
							var a = n.createTextRange();
							ue = q(function(e) {
								try {
									n.style.color = g(e).replace(r, m);
									var t = a.queryCommandValue("ForeColor");
									return "#" + ("000000" + (t = (255 & t) << 16 | 65280 & t | (16711680 & t) >>> 16).toString(16)).slice(-6);
								} catch {
									return "none";
								}
							});
						} else {
							var o = c.doc.createElement("i");
							o.title = "Raphaël Colour Picker", o.style.display = "none", c.doc.body.appendChild(o), ue = q(function(e) {
								return o.style.color = e, c.doc.defaultView.getComputedStyle(o, m).getPropertyValue("color");
							});
						}
						return ue(e);
					}, de = function() {
						return "hsb(" + [
							this.h,
							this.s,
							this.b
						] + ")";
					}, fe = function() {
						return "hsl(" + [
							this.h,
							this.s,
							this.l
						] + ")";
					}, pe = function() {
						return this.hex;
					}, me = function(e, n, r) {
						if (n == null && t.is(e, "object") && "r" in e && "g" in e && "b" in e && (r = e.b, n = e.g, e = e.r), n == null && t.is(e, "string")) {
							var i = t.getRGB(e);
							e = i.r, n = i.g, r = i.b;
						}
						return (e > 1 || n > 1 || r > 1) && (e /= 255, n /= 255, r /= 255), [
							e,
							n,
							r
						];
					}, he = function(e, n, r, i) {
						var a = {
							r: e *= 255,
							g: n *= 255,
							b: r *= 255,
							hex: t.rgb(e, n, r),
							toString: pe
						};
						return t.is(i, "finite") && (a.opacity = i), a;
					};
					function q(e, t, n) {
						return function r() {
							var i = Array.prototype.slice.call(arguments, 0), a = i.join("␀"), o = r.cache = r.cache || {}, c = r.count = r.count || [];
							return o[s](a) ? (function(e, t) {
								for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return e.push(e.splice(n, 1)[0]);
							}(c, a), n ? n(o[a]) : o[a]) : (c.length >= 1e3 && delete o[c.shift()], c.push(a), o[a] = e[d](t, i), n ? n(o[a]) : o[a]);
						};
					}
					t.color = function(e) {
						var n;
						return t.is(e, "object") && "h" in e && "s" in e && "b" in e ? (n = t.hsb2rgb(e), e.r = n.r, e.g = n.g, e.b = n.b, e.hex = n.hex) : t.is(e, "object") && "h" in e && "s" in e && "l" in e ? (n = t.hsl2rgb(e), e.r = n.r, e.g = n.g, e.b = n.b, e.hex = n.hex) : (t.is(e, "string") && (e = t.getRGB(e)), t.is(e, "object") && "r" in e && "g" in e && "b" in e ? (n = t.rgb2hsl(e), e.h = n.h, e.s = n.s, e.l = n.l, n = t.rgb2hsb(e), e.v = n.b) : (e = { hex: "none" }).r = e.g = e.b = e.h = e.s = e.v = e.l = -1), e.toString = pe, e;
					}, t.hsb2rgb = function(e, t, n, r) {
						var i, a, o, s, c;
						return this.is(e, "object") && "h" in e && "s" in e && "b" in e && (n = e.b, t = e.s, r = e.o, e = e.h), s = (c = n * t) * (1 - w((e = (e *= 360) % 360 / 60) % 2 - 1)), i = a = o = n - c, he(i += [
							c,
							s,
							0,
							0,
							s,
							c
						][e = ~~e], a += [
							s,
							c,
							c,
							s,
							0,
							0
						][e], o += [
							0,
							0,
							s,
							c,
							c,
							s
						][e], r);
					}, t.hsl2rgb = function(e, t, n, r) {
						var i, a, o, s, c;
						return this.is(e, "object") && "h" in e && "s" in e && "l" in e && (n = e.l, t = e.s, e = e.h), (e > 1 || t > 1 || n > 1) && (e /= 360, t /= 100, n /= 100), s = (c = 2 * t * (n < .5 ? n : 1 - n)) * (1 - w((e = (e *= 360) % 360 / 60) % 2 - 1)), i = a = o = n - c / 2, he(i += [
							c,
							s,
							0,
							0,
							s,
							c
						][e = ~~e], a += [
							s,
							c,
							c,
							s,
							0,
							0
						][e], o += [
							0,
							0,
							s,
							c,
							c,
							s
						][e], r);
					}, t.rgb2hsb = function(e, t, n) {
						var r, i;
						return e = (n = me(e, t, n))[0], t = n[1], n = n[2], {
							h: (((i = (r = S(e, t, n)) - C(e, t, n)) == 0 ? null : r == e ? (t - n) / i : r == t ? (n - e) / i + 2 : (e - t) / i + 4) + 360) % 6 * 60 / 360,
							s: i == 0 ? 0 : i / r,
							b: r,
							toString: de
						};
					}, t.rgb2hsl = function(e, t, n) {
						var r, i, a, o;
						return e = (n = me(e, t, n))[0], t = n[1], n = n[2], r = ((i = S(e, t, n)) + (a = C(e, t, n))) / 2, {
							h: (((o = i - a) == 0 ? null : i == e ? (t - n) / o : i == t ? (n - e) / o + 2 : (e - t) / o + 4) + 360) % 6 * 60 / 360,
							s: o == 0 ? 0 : r < .5 ? o / (2 * r) : o / (2 - 2 * r),
							l: r,
							toString: fe
						};
					}, t._path2string = function() {
						return this.join(",").replace(V, "$1");
					}, t._preload = function(e, t) {
						var n = c.doc.createElement("img");
						n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function() {
							t.call(this), this.onload = null, c.doc.body.removeChild(this);
						}, n.onerror = function() {
							c.doc.body.removeChild(this);
						}, c.doc.body.appendChild(n), n.src = e;
					};
					function ge() {
						return this.hex;
					}
					function _e(e, t) {
						for (var n = [], r = 0, i = e.length; i - 2 * !t > r; r += 2) {
							var a = [
								{
									x: +e[r - 2],
									y: +e[r - 1]
								},
								{
									x: +e[r],
									y: +e[r + 1]
								},
								{
									x: +e[r + 2],
									y: +e[r + 3]
								},
								{
									x: +e[r + 4],
									y: +e[r + 5]
								}
							];
							t ? r ? i - 4 == r ? a[3] = {
								x: +e[0],
								y: +e[1]
							} : i - 2 == r && (a[2] = {
								x: +e[0],
								y: +e[1]
							}, a[3] = {
								x: +e[2],
								y: +e[3]
							}) : a[0] = {
								x: +e[i - 2],
								y: +e[i - 1]
							} : i - 4 == r ? a[3] = a[2] : r || (a[0] = {
								x: +e[r],
								y: +e[r + 1]
							}), n.push([
								"C",
								(-a[0].x + 6 * a[1].x + a[2].x) / 6,
								(-a[0].y + 6 * a[1].y + a[2].y) / 6,
								(a[1].x + 6 * a[2].x - a[3].x) / 6,
								(a[1].y + 6 * a[2].y - a[3].y) / 6,
								a[2].x,
								a[2].y
							]);
						}
						return n;
					}
					t.getRGB = q(function(e) {
						if (!e || (e = g(e)).indexOf("-") + 1) return {
							r: -1,
							g: -1,
							b: -1,
							hex: "none",
							error: 1,
							toString: ge
						};
						if (e == "none") return {
							r: -1,
							g: -1,
							b: -1,
							hex: "none",
							toString: ge
						};
						!B[s](e.toLowerCase().substring(0, 2)) && e.charAt() != "#" && (e = ue(e));
						var n, r, i, a, o, c, l = e.match(A);
						return l ? (l[2] && (i = F(l[2].substring(5), 16), r = F(l[2].substring(3, 5), 16), n = F(l[2].substring(1, 3), 16)), l[3] && (i = F((o = l[3].charAt(3)) + o, 16), r = F((o = l[3].charAt(2)) + o, 16), n = F((o = l[3].charAt(1)) + o, 16)), l[4] && (c = l[4][_](z), n = P(c[0]), c[0].slice(-1) == "%" && (n *= 2.55), r = P(c[1]), c[1].slice(-1) == "%" && (r *= 2.55), i = P(c[2]), c[2].slice(-1) == "%" && (i *= 2.55), l[1].toLowerCase().slice(0, 4) == "rgba" && (a = P(c[3])), c[3] && c[3].slice(-1) == "%" && (a /= 100)), l[5] ? (c = l[5][_](z), n = P(c[0]), c[0].slice(-1) == "%" && (n *= 2.55), r = P(c[1]), c[1].slice(-1) == "%" && (r *= 2.55), i = P(c[2]), c[2].slice(-1) == "%" && (i *= 2.55), (c[0].slice(-3) == "deg" || c[0].slice(-1) == "°") && (n /= 360), l[1].toLowerCase().slice(0, 4) == "hsba" && (a = P(c[3])), c[3] && c[3].slice(-1) == "%" && (a /= 100), t.hsb2rgb(n, r, i, a)) : l[6] ? (c = l[6][_](z), n = P(c[0]), c[0].slice(-1) == "%" && (n *= 2.55), r = P(c[1]), c[1].slice(-1) == "%" && (r *= 2.55), i = P(c[2]), c[2].slice(-1) == "%" && (i *= 2.55), (c[0].slice(-3) == "deg" || c[0].slice(-1) == "°") && (n /= 360), l[1].toLowerCase().slice(0, 4) == "hsla" && (a = P(c[3])), c[3] && c[3].slice(-1) == "%" && (a /= 100), t.hsl2rgb(n, r, i, a)) : ((l = {
							r: n,
							g: r,
							b: i,
							toString: ge
						}).hex = "#" + (16777216 | i | r << 8 | n << 16).toString(16).slice(1), t.is(a, "finite") && (l.opacity = a), l)) : {
							r: -1,
							g: -1,
							b: -1,
							hex: "none",
							error: 1,
							toString: ge
						};
					}, t), t.hsb = q(function(e, n, r) {
						return t.hsb2rgb(e, n, r).hex;
					}), t.hsl = q(function(e, n, r) {
						return t.hsl2rgb(e, n, r).hex;
					}), t.rgb = q(function(e, t, n) {
						function r(e) {
							return e + .5 | 0;
						}
						return "#" + (16777216 | r(n) | r(t) << 8 | r(e) << 16).toString(16).slice(1);
					}), t.getColor = function(e) {
						var t = this.getColor.start = this.getColor.start || {
							h: 0,
							s: 1,
							b: e || .75
						}, n = this.hsb2rgb(t.h, t.s, t.b);
						return t.h += .075, t.h > 1 && (t.h = 0, t.s -= .2, t.s <= 0 && (this.getColor.start = {
							h: 0,
							s: 1,
							b: t.b
						})), n.hex;
					}, t.getColor.reset = function() {
						delete this.start;
					}, t.parsePathString = function(e) {
						if (!e) return null;
						var n = ve(e);
						if (n.arr) return Y(n.arr);
						var r = {
							a: 7,
							c: 6,
							h: 1,
							l: 2,
							m: 2,
							r: 4,
							q: 4,
							s: 4,
							t: 2,
							v: 1,
							z: 0
						}, i = [];
						return t.is(e, O) && t.is(e[0], O) && (i = Y(e)), i.length || g(e).replace(H, function(e, t, n) {
							var a = [], o = t.toLowerCase();
							if (n.replace(U, function(e, t) {
								t && a.push(+t);
							}), o == "m" && a.length > 2 && (i.push([t][f](a.splice(0, 2))), o = "l", t = t == "m" ? "l" : "L"), o == "r") i.push([t][f](a));
							else for (; a.length >= r[o] && (i.push([t][f](a.splice(0, r[o]))), r[o]););
						}), i.toString = t._path2string, n.arr = Y(i), i;
					}, t.parseTransformString = q(function(e) {
						if (!e) return null;
						var n = [];
						return t.is(e, O) && t.is(e[0], O) && (n = Y(e)), n.length || g(e).replace(ee, function(e, t, r) {
							var i = [];
							b.call(t), r.replace(U, function(e, t) {
								t && i.push(+t);
							}), n.push([t][f](i));
						}), n.toString = t._path2string, n;
					}, this, function(e) {
						if (!e) return e;
						for (var t = [], n = 0; n < e.length; n++) {
							for (var r = [], i = 0; i < e[n].length; i++) r.push(e[n][i]);
							t.push(r);
						}
						return t;
					});
					var ve = function(e) {
						var t = ve.ps = ve.ps || {};
						return t[e] ? t[e].sleep = 100 : t[e] = { sleep: 100 }, setTimeout(function() {
							for (var n in t) t[s](n) && n != e && (t[n].sleep--, !t[n].sleep && delete t[n]);
						}), t[e];
					};
					function ye(e, t, n, r, i) {
						return e * (e * (-3 * t + 9 * n - 9 * r + 3 * i) + 6 * t - 12 * n + 6 * r) - 3 * t + 3 * n;
					}
					function be(e, t, n, r, i, a, o, s, c) {
						c ??= 1;
						for (var l = (c = c > 1 ? 1 : c < 0 ? 0 : c) / 2, u = [
							-.1252,
							.1252,
							-.3678,
							.3678,
							-.5873,
							.5873,
							-.7699,
							.7699,
							-.9041,
							.9041,
							-.9816,
							.9816
						], d = [
							.2491,
							.2491,
							.2335,
							.2335,
							.2032,
							.2032,
							.1601,
							.1601,
							.1069,
							.1069,
							.0472,
							.0472
						], f = 0, p = 0; p < 12; p++) {
							var m = l * u[p] + l, h = ye(m, e, n, i, o), g = ye(m, t, r, a, s), _ = h * h + g * g;
							f += d[p] * x.sqrt(_);
						}
						return l * f;
					}
					function J(e, t, n, r, i, a, o, s) {
						if (!(S(e, n) < C(i, o) || C(e, n) > S(i, o) || S(t, r) < C(a, s) || C(t, r) > S(a, s))) {
							var c = (e - n) * (a - s) - (t - r) * (i - o);
							if (c) {
								var l = ((e * r - t * n) * (i - o) - (e - n) * (i * s - a * o)) / c, u = ((e * r - t * n) * (a - s) - (t - r) * (i * s - a * o)) / c, d = +l.toFixed(2), f = +u.toFixed(2);
								if (!(d < +C(e, n).toFixed(2) || d > +S(e, n).toFixed(2) || d < +C(i, o).toFixed(2) || d > +S(i, o).toFixed(2) || f < +C(t, r).toFixed(2) || f > +S(t, r).toFixed(2) || f < +C(a, s).toFixed(2) || f > +S(a, s).toFixed(2))) return {
									x: l,
									y: u
								};
							}
						}
					}
					function xe(e, n, r) {
						var i = t.bezierBBox(e), a = t.bezierBBox(n);
						if (!t.isBBoxIntersect(i, a)) return r ? 0 : [];
						for (var o = be.apply(0, e), s = be.apply(0, n), c = S(~~(o / 5), 1), l = S(~~(s / 5), 1), u = [], d = [], f = {}, p = r ? 0 : [], m = 0; m < c + 1; m++) {
							var h = t.findDotsAtSegment.apply(t, e.concat(m / c));
							u.push({
								x: h.x,
								y: h.y,
								t: m / c
							});
						}
						for (m = 0; m < l + 1; m++) h = t.findDotsAtSegment.apply(t, n.concat(m / l)), d.push({
							x: h.x,
							y: h.y,
							t: m / l
						});
						for (m = 0; m < c; m++) for (var g = 0; g < l; g++) {
							var _ = u[m], v = u[m + 1], y = d[g], b = d[g + 1], x = w(v.x - _.x) < .001 ? "y" : "x", T = w(b.x - y.x) < .001 ? "y" : "x", E = J(_.x, _.y, v.x, v.y, y.x, y.y, b.x, b.y);
							if (E) {
								if (f[E.x.toFixed(4)] == E.y.toFixed(4)) continue;
								f[E.x.toFixed(4)] = E.y.toFixed(4);
								var D = _.t + w((E[x] - _[x]) / (v[x] - _[x])) * (v.t - _.t), O = y.t + w((E[T] - y[T]) / (b[T] - y[T])) * (b.t - y.t);
								D >= 0 && D <= 1.001 && O >= 0 && O <= 1.001 && (r ? p++ : p.push({
									x: E.x,
									y: E.y,
									t1: C(D, 1),
									t2: C(O, 1)
								}));
							}
						}
						return p;
					}
					function Se(e, n, r) {
						e = t._path2curve(e), n = t._path2curve(n);
						for (var i, a, o, s, c, l, u, d, f, p, m = r ? 0 : [], h = 0, g = e.length; h < g; h++) {
							var _ = e[h];
							if (_[0] == "M") i = c = _[1], a = l = _[2];
							else {
								_[0] == "C" ? (f = [i, a].concat(_.slice(1)), i = f[6], a = f[7]) : (f = [
									i,
									a,
									i,
									a,
									c,
									l,
									c,
									l
								], i = c, a = l);
								for (var v = 0, y = n.length; v < y; v++) {
									var b = n[v];
									if (b[0] == "M") o = u = b[1], s = d = b[2];
									else {
										b[0] == "C" ? (p = [o, s].concat(b.slice(1)), o = p[6], s = p[7]) : (p = [
											o,
											s,
											o,
											s,
											u,
											d,
											u,
											d
										], o = u, s = d);
										var x = xe(f, p, r);
										if (r) m += x;
										else {
											for (var S = 0, C = x.length; S < C; S++) x[S].segment1 = h, x[S].segment2 = v, x[S].bez1 = f, x[S].bez2 = p;
											m = m.concat(x);
										}
									}
								}
							}
						}
						return m;
					}
					t.findDotsAtSegment = function(e, t, n, r, i, a, o, s, c) {
						var l = 1 - c, u = T(l, 3), d = T(l, 2), f = c * c, p = f * c, m = u * e + 3 * d * c * n + 3 * l * c * c * i + p * o, h = u * t + 3 * d * c * r + 3 * l * c * c * a + p * s, g = e + 2 * c * (n - e) + f * (i - 2 * n + e), _ = t + 2 * c * (r - t) + f * (a - 2 * r + t), v = n + 2 * c * (i - n) + f * (o - 2 * i + n), y = r + 2 * c * (a - r) + f * (s - 2 * a + r), b = l * e + c * n, S = l * t + c * r, C = l * i + c * o, w = l * a + c * s, D = 90 - 180 * x.atan2(g - v, _ - y) / E;
						return (g > v || _ < y) && (D += 180), {
							x: m,
							y: h,
							m: {
								x: g,
								y: _
							},
							n: {
								x: v,
								y
							},
							start: {
								x: b,
								y: S
							},
							end: {
								x: C,
								y: w
							},
							alpha: D
						};
					}, t.bezierBBox = function(e, n, r, i, a, o, s, c) {
						t.is(e, "array") || (e = [
							e,
							n,
							r,
							i,
							a,
							o,
							s,
							c
						]);
						var l = Ae.apply(null, e);
						return {
							x: l.min.x,
							y: l.min.y,
							x2: l.max.x,
							y2: l.max.y,
							width: l.max.x - l.min.x,
							height: l.max.y - l.min.y
						};
					}, t.isPointInsideBBox = function(e, t, n) {
						return t >= e.x && t <= e.x2 && n >= e.y && n <= e.y2;
					}, t.isBBoxIntersect = function(e, n) {
						var r = t.isPointInsideBBox;
						return r(n, e.x, e.y) || r(n, e.x2, e.y) || r(n, e.x, e.y2) || r(n, e.x2, e.y2) || r(e, n.x, n.y) || r(e, n.x2, n.y) || r(e, n.x, n.y2) || r(e, n.x2, n.y2) || (e.x < n.x2 && e.x > n.x || n.x < e.x2 && n.x > e.x) && (e.y < n.y2 && e.y > n.y || n.y < e.y2 && n.y > e.y);
					}, t.pathIntersection = function(e, t) {
						return Se(e, t);
					}, t.pathIntersectionNumber = function(e, t) {
						return Se(e, t, 1);
					}, t.isPointInsidePath = function(e, n, r) {
						var i = t.pathBBox(e);
						return t.isPointInsideBBox(i, n, r) && Se(e, [[
							"M",
							n,
							r
						], ["H", i.x2 + 10]], 1) % 2 == 1;
					}, t._removedFactory = function(t) {
						return function() {
							e("raphael.log", null, "Raphaël: you are calling to method “" + t + "” of removed object", t);
						};
					};
					var Ce = t.pathBBox = function(e) {
						var t = ve(e);
						if (t.bbox) return se(t.bbox);
						if (!e) return {
							x: 0,
							y: 0,
							width: 0,
							height: 0,
							x2: 0,
							y2: 0
						};
						for (var n, r = 0, i = 0, a = [], o = [], s = 0, c = (e = je(e)).length; s < c; s++) if ((n = e[s])[0] == "M") r = n[1], i = n[2], a.push(r), o.push(i);
						else {
							var l = Ae(r, i, n[1], n[2], n[3], n[4], n[5], n[6]);
							a = a[f](l.min.x, l.max.x), o = o[f](l.min.y, l.max.y), r = n[5], i = n[6];
						}
						var u = C[d](0, a), p = C[d](0, o), m = S[d](0, a), h = S[d](0, o), g = m - u, _ = h - p, v = {
							x: u,
							y: p,
							x2: m,
							y2: h,
							width: g,
							height: _,
							cx: u + g / 2,
							cy: p + _ / 2
						};
						return t.bbox = se(v), v;
					}, Y = function(e) {
						var n = se(e);
						return n.toString = t._path2string, n;
					}, we = t._pathToRelative = function(e) {
						var n = ve(e);
						if (n.rel) return Y(n.rel);
						t.is(e, O) && t.is(e && e[0], O) || (e = t.parsePathString(e));
						var r = [], i = 0, a = 0, o = 0, s = 0, c = 0;
						e[0][0] == "M" && (o = i = e[0][1], s = a = e[0][2], c++, r.push([
							"M",
							i,
							a
						]));
						for (var l = c, u = e.length; l < u; l++) {
							var d = r[l] = [], f = e[l];
							if (f[0] != b.call(f[0])) switch (d[0] = b.call(f[0]), d[0]) {
								case "a":
									d[1] = f[1], d[2] = f[2], d[3] = f[3], d[4] = f[4], d[5] = f[5], d[6] = +(f[6] - i).toFixed(3), d[7] = +(f[7] - a).toFixed(3);
									break;
								case "v":
									d[1] = +(f[1] - a).toFixed(3);
									break;
								case "m": o = f[1], s = f[2];
								default: for (var p = 1, m = f.length; p < m; p++) d[p] = +(f[p] - (p % 2 ? i : a)).toFixed(3);
							}
							else {
								d = r[l] = [], f[0] == "m" && (o = f[1] + i, s = f[2] + a);
								for (var h = 0, g = f.length; h < g; h++) r[l][h] = f[h];
							}
							var _ = r[l].length;
							switch (r[l][0]) {
								case "z":
									i = o, a = s;
									break;
								case "h":
									i += +r[l][_ - 1];
									break;
								case "v":
									a += +r[l][_ - 1];
									break;
								default: i += +r[l][_ - 2], a += +r[l][_ - 1];
							}
						}
						return r.toString = t._path2string, n.rel = Y(r), r;
					}, Te = t._pathToAbsolute = function(e) {
						var n = ve(e);
						if (n.abs) return Y(n.abs);
						if (t.is(e, O) && t.is(e && e[0], O) || (e = t.parsePathString(e)), !e || !e.length) return [[
							"M",
							0,
							0
						]];
						var r = [], i = 0, a = 0, o = 0, s = 0, c = 0;
						e[0][0] == "M" && (o = i = +e[0][1], s = a = +e[0][2], c++, r[0] = [
							"M",
							i,
							a
						]);
						for (var l, u, d = e.length == 3 && e[0][0] == "M" && e[1][0].toUpperCase() == "R" && e[2][0].toUpperCase() == "Z", p = c, m = e.length; p < m; p++) {
							if (r.push(l = []), (u = e[p])[0] != I.call(u[0])) switch (l[0] = I.call(u[0]), l[0]) {
								case "A":
									l[1] = u[1], l[2] = u[2], l[3] = u[3], l[4] = u[4], l[5] = u[5], l[6] = +(u[6] + i), l[7] = +(u[7] + a);
									break;
								case "V":
									l[1] = +u[1] + a;
									break;
								case "H":
									l[1] = +u[1] + i;
									break;
								case "R":
									for (var h = [i, a][f](u.slice(1)), g = 2, _ = h.length; g < _; g++) h[g] = +h[g] + i, h[++g] = +h[g] + a;
									r.pop(), r = r[f](_e(h, d));
									break;
								case "M": o = +u[1] + i, s = +u[2] + a;
								default: for (g = 1, _ = u.length; g < _; g++) l[g] = +u[g] + (g % 2 ? i : a);
							}
							else if (u[0] == "R") h = [i, a][f](u.slice(1)), r.pop(), r = r[f](_e(h, d)), l = ["R"][f](u.slice(-2));
							else for (var v = 0, y = u.length; v < y; v++) l[v] = u[v];
							switch (l[0]) {
								case "Z":
									i = o, a = s;
									break;
								case "H":
									i = l[1];
									break;
								case "V":
									a = l[1];
									break;
								case "M": o = l[l.length - 2], s = l[l.length - 1];
								default: i = l[l.length - 2], a = l[l.length - 1];
							}
						}
						return r.toString = t._path2string, n.abs = Y(r), r;
					}, Ee = function(e, t, n, r) {
						return [
							e,
							t,
							n,
							r,
							n,
							r
						];
					}, De = function(e, t, n, r, i, a) {
						return [
							1 / 3 * e + 2 / 3 * n,
							1 / 3 * t + 2 / 3 * r,
							1 / 3 * i + 2 / 3 * n,
							1 / 3 * a + 2 / 3 * r,
							i,
							a
						];
					}, Oe = function(e, t, n, r, i, a, o, s, c, l) {
						var u, d = 120 * E / 180, p = E / 180 * (+i || 0), m = [], h = q(function(e, t, n) {
							return {
								x: e * x.cos(n) - t * x.sin(n),
								y: e * x.sin(n) + t * x.cos(n)
							};
						});
						if (l) O = l[0], k = l[1], T = l[2], D = l[3];
						else {
							e = (u = h(e, t, -p)).x, t = u.y, s = (u = h(s, c, -p)).x, c = u.y, x.cos(E / 180 * i), x.sin(E / 180 * i);
							var g = (e - s) / 2, v = (t - c) / 2, y = g * g / (n * n) + v * v / (r * r);
							y > 1 && (n *= y = x.sqrt(y), r *= y);
							var b = n * n, S = r * r, C = (a == o ? -1 : 1) * x.sqrt(w((b * S - b * v * v - S * g * g) / (b * v * v + S * g * g))), T = C * n * v / r + (e + s) / 2, D = C * -r * g / n + (t + c) / 2, O = x.asin(((t - D) / r).toFixed(9)), k = x.asin(((c - D) / r).toFixed(9));
							(O = e < T ? E - O : O) < 0 && (O = 2 * E + O), (k = s < T ? E - k : k) < 0 && (k = 2 * E + k), o && O > k && (O -= 2 * E), !o && k > O && (k -= 2 * E);
						}
						var A = k - O;
						if (w(A) > d) {
							var j = k, M = s, N = c;
							k = O + d * (o && k > O ? 1 : -1), s = T + n * x.cos(k), c = D + r * x.sin(k), m = Oe(s, c, n, r, i, 0, o, M, N, [
								k,
								j,
								T,
								D
							]);
						}
						A = k - O;
						var P = x.cos(O), F = x.sin(O), I = x.cos(k), L = x.sin(k), R = x.tan(A / 4), z = 4 / 3 * n * R, B = 4 / 3 * r * R, V = [e, t], H = [e + z * F, t - B * P], ee = [s + z * L, c - B * I], U = [s, c];
						if (H[0] = 2 * V[0] - H[0], H[1] = 2 * V[1] - H[1], l) return [
							H,
							ee,
							U
						][f](m);
						for (var W = [], G = 0, te = (m = [
							H,
							ee,
							U
						][f](m).join()[_](",")).length; G < te; G++) W[G] = G % 2 ? h(m[G - 1], m[G], p).y : h(m[G], m[G + 1], p).x;
						return W;
					}, ke = function(e, t, n, r, i, a, o, s, c) {
						var l = 1 - c;
						return {
							x: T(l, 3) * e + 3 * T(l, 2) * c * n + 3 * l * c * c * i + T(c, 3) * o,
							y: T(l, 3) * t + 3 * T(l, 2) * c * r + 3 * l * c * c * a + T(c, 3) * s
						};
					}, Ae = q(function(e, t, n, r, i, a, o, s) {
						var c, l = i - 2 * n + e - (o - 2 * i + n), u = 2 * (n - e) - 2 * (i - n), f = e - n, p = (-u + x.sqrt(u * u - 4 * l * f)) / 2 / l, m = (-u - x.sqrt(u * u - 4 * l * f)) / 2 / l, h = [t, s], g = [e, o];
						return w(p) > "1e12" && (p = .5), w(m) > "1e12" && (m = .5), p > 0 && p < 1 && (c = ke(e, t, n, r, i, a, o, s, p), g.push(c.x), h.push(c.y)), m > 0 && m < 1 && (c = ke(e, t, n, r, i, a, o, s, m), g.push(c.x), h.push(c.y)), l = a - 2 * r + t - (s - 2 * a + r), f = t - r, p = (-(u = 2 * (r - t) - 2 * (a - r)) + x.sqrt(u * u - 4 * l * f)) / 2 / l, m = (-u - x.sqrt(u * u - 4 * l * f)) / 2 / l, w(p) > "1e12" && (p = .5), w(m) > "1e12" && (m = .5), p > 0 && p < 1 && (c = ke(e, t, n, r, i, a, o, s, p), g.push(c.x), h.push(c.y)), m > 0 && m < 1 && (c = ke(e, t, n, r, i, a, o, s, m), g.push(c.x), h.push(c.y)), {
							min: {
								x: C[d](0, g),
								y: C[d](0, h)
							},
							max: {
								x: S[d](0, g),
								y: S[d](0, h)
							}
						};
					}), je = t._path2curve = q(function(e, t) {
						var n = !t && ve(e);
						if (!t && n.curve) return Y(n.curve);
						for (var r = Te(e), i = t && Te(t), a = {
							x: 0,
							y: 0,
							bx: 0,
							by: 0,
							X: 0,
							Y: 0,
							qx: null,
							qy: null
						}, o = {
							x: 0,
							y: 0,
							bx: 0,
							by: 0,
							X: 0,
							Y: 0,
							qx: null,
							qy: null
						}, s = function(e, t, n) {
							var r, i;
							if (!e) return [
								"C",
								t.x,
								t.y,
								t.x,
								t.y,
								t.x,
								t.y
							];
							switch (!(e[0] in {
								T: 1,
								Q: 1
							}) && (t.qx = t.qy = null), e[0]) {
								case "M":
									t.X = e[1], t.Y = e[2];
									break;
								case "A":
									e = ["C"][f](Oe[d](0, [t.x, t.y][f](e.slice(1))));
									break;
								case "S":
									n == "C" || n == "S" ? (r = 2 * t.x - t.bx, i = 2 * t.y - t.by) : (r = t.x, i = t.y), e = [
										"C",
										r,
										i
									][f](e.slice(1));
									break;
								case "T":
									n == "Q" || n == "T" ? (t.qx = 2 * t.x - t.qx, t.qy = 2 * t.y - t.qy) : (t.qx = t.x, t.qy = t.y), e = ["C"][f](De(t.x, t.y, t.qx, t.qy, e[1], e[2]));
									break;
								case "Q":
									t.qx = e[1], t.qy = e[2], e = ["C"][f](De(t.x, t.y, e[1], e[2], e[3], e[4]));
									break;
								case "L":
									e = ["C"][f](Ee(t.x, t.y, e[1], e[2]));
									break;
								case "H":
									e = ["C"][f](Ee(t.x, t.y, e[1], t.y));
									break;
								case "V":
									e = ["C"][f](Ee(t.x, t.y, t.x, e[1]));
									break;
								case "Z": e = ["C"][f](Ee(t.x, t.y, t.X, t.Y));
							}
							return e;
						}, c = function(e, t) {
							if (e[t].length > 7) {
								e[t].shift();
								for (var n = e[t]; n.length;) u[t] = "A", i && (p[t] = "A"), e.splice(t++, 0, ["C"][f](n.splice(0, 6)));
								e.splice(t, 1), _ = S(r.length, i && i.length || 0);
							}
						}, l = function(e, t, n, a, o) {
							e && t && e[o][0] == "M" && t[o][0] != "M" && (t.splice(o, 0, [
								"M",
								a.x,
								a.y
							]), n.bx = 0, n.by = 0, n.x = e[o][1], n.y = e[o][2], _ = S(r.length, i && i.length || 0));
						}, u = [], p = [], m = "", h = "", g = 0, _ = S(r.length, i && i.length || 0); g < _; g++) {
							r[g] && (m = r[g][0]), m != "C" && (u[g] = m, g && (h = u[g - 1])), r[g] = s(r[g], a, h), u[g] != "A" && m == "C" && (u[g] = "C"), c(r, g), i && (i[g] && (m = i[g][0]), m != "C" && (p[g] = m, g && (h = p[g - 1])), i[g] = s(i[g], o, h), p[g] != "A" && m == "C" && (p[g] = "C"), c(i, g)), l(r, i, a, o, g), l(i, r, o, a, g);
							var v = r[g], y = i && i[g], b = v.length, x = i && y.length;
							a.x = v[b - 2], a.y = v[b - 1], a.bx = P(v[b - 4]) || a.x, a.by = P(v[b - 3]) || a.y, o.bx = i && (P(y[x - 4]) || o.x), o.by = i && (P(y[x - 3]) || o.y), o.x = i && y[x - 2], o.y = i && y[x - 1];
						}
						return i || (n.curve = Y(r)), i ? [r, i] : r;
					}, null, Y), Me = (t._parseDots = q(function(e) {
						for (var n = [], r = 0, i = e.length; r < i; r++) {
							var a = {}, o = e[r].match(/^([^:]*):?([\d\.]*)/);
							if (a.color = t.getRGB(o[1]), a.color.error) return null;
							a.opacity = a.color.opacity, a.color = a.color.hex, o[2] && (a.offset = o[2] + "%"), n.push(a);
						}
						for (r = 1, i = n.length - 1; r < i; r++) if (!n[r].offset) {
							for (var s = P(n[r - 1].offset || 0), c = 0, l = r + 1; l < i; l++) if (n[l].offset) {
								c = n[l].offset;
								break;
							}
							c || (c = 100, l = i);
							for (var u = ((c = P(c)) - s) / (l - r + 1); r < l; r++) s += u, n[r].offset = s + "%";
						}
						return n;
					}), t._tear = function(e, t) {
						e == t.top && (t.top = e.prev), e == t.bottom && (t.bottom = e.next), e.next && (e.next.prev = e.prev), e.prev && (e.prev.next = e.next);
					}), Ne = (t._tofront = function(e, t) {
						t.top !== e && (Me(e, t), e.next = null, e.prev = t.top, t.top.next = e, t.top = e);
					}, t._toback = function(e, t) {
						t.bottom !== e && (Me(e, t), e.next = t.bottom, e.prev = null, t.bottom.prev = e, t.bottom = e);
					}, t._insertafter = function(e, t, n) {
						Me(e, n), t == n.top && (n.top = e), t.next && (t.next.prev = e), e.next = t.next, e.prev = t, t.next = e;
					}, t._insertbefore = function(e, t, n) {
						Me(e, n), t == n.bottom && (n.bottom = e), t.prev && (t.prev.next = e), e.prev = t.prev, t.prev = e, e.next = t;
					}, t.toMatrix = function(e, t) {
						var n = Ce(e), r = {
							_: { transform: m },
							getBBox: function() {
								return n;
							}
						};
						return Pe(r, t), r.matrix;
					}), Pe = (t.transformPath = function(e, t) {
						return ie(e, Ne(e, t));
					}, t._extractTransform = function(e, n) {
						if (n == null) return e._.transform;
						n = g(n).replace(/\.{3}|\u2026/g, e._.transform || m);
						var r, i, a = t.parseTransformString(n), o = 0, s = 1, c = 1, l = e._, u = new Le();
						if (l.transform = a || [], a) for (var d = 0, f = a.length; d < f; d++) {
							var p, h, _, v, y, b = a[d], x = b.length, S = g(b[0]).toLowerCase(), C = b[0] != S, w = C ? u.invert() : 0;
							S == "t" && x == 3 ? C ? (p = w.x(0, 0), h = w.y(0, 0), _ = w.x(b[1], b[2]), v = w.y(b[1], b[2]), u.translate(_ - p, v - h)) : u.translate(b[1], b[2]) : S == "r" ? x == 2 ? (y ||= e.getBBox(1), u.rotate(b[1], y.x + y.width / 2, y.y + y.height / 2), o += b[1]) : x == 4 && (C ? (_ = w.x(b[2], b[3]), v = w.y(b[2], b[3]), u.rotate(b[1], _, v)) : u.rotate(b[1], b[2], b[3]), o += b[1]) : S == "s" ? x == 2 || x == 3 ? (y ||= e.getBBox(1), u.scale(b[1], b[x - 1], y.x + y.width / 2, y.y + y.height / 2), s *= b[1], c *= b[x - 1]) : x == 5 && (C ? (_ = w.x(b[3], b[4]), v = w.y(b[3], b[4]), u.scale(b[1], b[2], _, v)) : u.scale(b[1], b[2], b[3], b[4]), s *= b[1], c *= b[2]) : S == "m" && x == 7 && u.add(b[1], b[2], b[3], b[4], b[5], b[6]), l.dirtyT = 1, e.matrix = u;
						}
						e.matrix = u, l.sx = s, l.sy = c, l.deg = o, l.dx = r = u.e, l.dy = i = u.f, s == 1 && c == 1 && !o && l.bbox ? (l.bbox.x += +r, l.bbox.y += +i) : l.dirtyT = 1;
					}), Fe = function(e) {
						var t = e[0];
						switch (t.toLowerCase()) {
							case "t": return [
								t,
								0,
								0
							];
							case "m": return [
								t,
								1,
								0,
								0,
								1,
								0,
								0
							];
							case "r": return e.length == 4 ? [
								t,
								0,
								e[2],
								e[3]
							] : [t, 0];
							case "s": return e.length == 5 ? [
								t,
								1,
								1,
								e[3],
								e[4]
							] : e.length == 3 ? [
								t,
								1,
								1
							] : [t, 1];
						}
					}, Ie = t._equaliseTransform = function(e, n) {
						n = g(n).replace(/\.{3}|\u2026/g, e), e = t.parseTransformString(e) || [], n = t.parseTransformString(n) || [];
						for (var r, i, a, o, s = S(e.length, n.length), c = [], l = [], u = 0; u < s; u++) {
							if (a = e[u] || Fe(n[u]), o = n[u] || Fe(a), a[0] != o[0] || a[0].toLowerCase() == "r" && (a[2] != o[2] || a[3] != o[3]) || a[0].toLowerCase() == "s" && (a[3] != o[3] || a[4] != o[4])) return;
							for (c[u] = [], l[u] = [], r = 0, i = S(a.length, o.length); r < i; r++) r in a && (c[u][r] = a[r]), r in o && (l[u][r] = o[r]);
						}
						return {
							from: c,
							to: l
						};
					};
					function Le(e, t, n, r, i, a) {
						e == null ? (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0) : (this.a = +e, this.b = +t, this.c = +n, this.d = +r, this.e = +i, this.f = +a);
					}
					t._getContainer = function(e, n, r, i) {
						var a;
						if ((a = i != null || t.is(e, "object") ? e : c.doc.getElementById(e)) != null) return a.tagName ? n == null ? {
							container: a,
							width: a.style.pixelWidth || a.offsetWidth,
							height: a.style.pixelHeight || a.offsetHeight
						} : {
							container: a,
							width: n,
							height: r
						} : {
							container: 1,
							x: e,
							y: n,
							width: r,
							height: i
						};
					}, t.pathToRelative = we, t._engine = {}, t.path2curve = je, t.matrix = function(e, t, n, r, i, a) {
						return new Le(e, t, n, r, i, a);
					}, function(e) {
						function n(e) {
							return e[0] * e[0] + e[1] * e[1];
						}
						function r(e) {
							var t = x.sqrt(n(e));
							e[0] && (e[0] /= t), e[1] && (e[1] /= t);
						}
						e.add = function(e, t, n, r, i, a) {
							var o, s, c, l, u = [
								[],
								[],
								[]
							], d = [
								[
									this.a,
									this.c,
									this.e
								],
								[
									this.b,
									this.d,
									this.f
								],
								[
									0,
									0,
									1
								]
							], f = [
								[
									e,
									n,
									i
								],
								[
									t,
									r,
									a
								],
								[
									0,
									0,
									1
								]
							];
							for (e && e instanceof Le && (f = [
								[
									e.a,
									e.c,
									e.e
								],
								[
									e.b,
									e.d,
									e.f
								],
								[
									0,
									0,
									1
								]
							]), o = 0; o < 3; o++) for (s = 0; s < 3; s++) {
								for (l = 0, c = 0; c < 3; c++) l += d[o][c] * f[c][s];
								u[o][s] = l;
							}
							this.a = u[0][0], this.b = u[1][0], this.c = u[0][1], this.d = u[1][1], this.e = u[0][2], this.f = u[1][2];
						}, e.invert = function() {
							var e = this, t = e.a * e.d - e.b * e.c;
							return new Le(e.d / t, -e.b / t, -e.c / t, e.a / t, (e.c * e.f - e.d * e.e) / t, (e.b * e.e - e.a * e.f) / t);
						}, e.clone = function() {
							return new Le(this.a, this.b, this.c, this.d, this.e, this.f);
						}, e.translate = function(e, t) {
							this.add(1, 0, 0, 1, e, t);
						}, e.scale = function(e, t, n, r) {
							t ??= e, (n || r) && this.add(1, 0, 0, 1, n, r), this.add(e, 0, 0, t, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r);
						}, e.rotate = function(e, n, r) {
							e = t.rad(e), n ||= 0, r ||= 0;
							var i = +x.cos(e).toFixed(9), a = +x.sin(e).toFixed(9);
							this.add(i, a, -a, i, n, r), this.add(1, 0, 0, 1, -n, -r);
						}, e.x = function(e, t) {
							return e * this.a + t * this.c + this.e;
						}, e.y = function(e, t) {
							return e * this.b + t * this.d + this.f;
						}, e.get = function(e) {
							return +this[g.fromCharCode(97 + e)].toFixed(4);
						}, e.toString = function() {
							return t.svg ? "matrix(" + [
								this.get(0),
								this.get(1),
								this.get(2),
								this.get(3),
								this.get(4),
								this.get(5)
							].join() + ")" : [
								this.get(0),
								this.get(2),
								this.get(1),
								this.get(3),
								0,
								0
							].join();
						}, e.toFilter = function() {
							return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
						}, e.offset = function() {
							return [this.e.toFixed(4), this.f.toFixed(4)];
						}, e.split = function() {
							var e = {};
							e.dx = this.e, e.dy = this.f;
							var i = [[this.a, this.c], [this.b, this.d]];
							e.scalex = x.sqrt(n(i[0])), r(i[0]), e.shear = i[0][0] * i[1][0] + i[0][1] * i[1][1], i[1] = [i[1][0] - i[0][0] * e.shear, i[1][1] - i[0][1] * e.shear], e.scaley = x.sqrt(n(i[1])), r(i[1]), e.shear /= e.scaley;
							var a = -i[0][1], o = i[1][1];
							return o < 0 ? (e.rotate = t.deg(x.acos(o)), a < 0 && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(x.asin(a)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e;
						}, e.toTransformString = function(e) {
							var t = e || this[_]();
							return t.isSimple ? (t.scalex = +t.scalex.toFixed(4), t.scaley = +t.scaley.toFixed(4), t.rotate = +t.rotate.toFixed(4), (t.dx || t.dy ? "t" + [t.dx, t.dy] : m) + (t.scalex != 1 || t.scaley != 1 ? "s" + [
								t.scalex,
								t.scaley,
								0,
								0
							] : m) + (t.rotate ? "r" + [
								t.rotate,
								0,
								0
							] : m)) : "m" + [
								this.get(0),
								this.get(1),
								this.get(2),
								this.get(3),
								this.get(4),
								this.get(5)
							];
						};
					}(Le.prototype);
					for (var Re = function() {
						this.returnValue = !1;
					}, ze = function() {
						return this.originalEvent.preventDefault();
					}, Be = function() {
						this.cancelBubble = !0;
					}, Ve = function() {
						return this.originalEvent.stopPropagation();
					}, He = function(e) {
						var t = c.doc.documentElement.scrollTop || c.doc.body.scrollTop, n = c.doc.documentElement.scrollLeft || c.doc.body.scrollLeft;
						return {
							x: e.clientX + n,
							y: e.clientY + t
						};
					}, Ue = c.doc.addEventListener ? function(e, t, n, r) {
						var i = function(e) {
							var t = He(e);
							return n.call(r, e, t.x, t.y);
						};
						if (e.addEventListener(t, i, !1), p && y[t]) {
							var a = function(t) {
								for (var i = He(t), a = t, o = 0, s = t.targetTouches && t.targetTouches.length; o < s; o++) if (t.targetTouches[o].target == e) {
									(t = t.targetTouches[o]).originalEvent = a, t.preventDefault = ze, t.stopPropagation = Ve;
									break;
								}
								return n.call(r, t, i.x, i.y);
							};
							e.addEventListener(y[t], a, !1);
						}
						return function() {
							return e.removeEventListener(t, i, !1), p && y[t] && e.removeEventListener(y[t], a, !1), !0;
						};
					} : c.doc.attachEvent ? function(e, t, n, r) {
						var i = function(e) {
							e ||= c.win.event;
							var t = c.doc.documentElement.scrollTop || c.doc.body.scrollTop, i = c.doc.documentElement.scrollLeft || c.doc.body.scrollLeft, a = e.clientX + i, o = e.clientY + t;
							return e.preventDefault = e.preventDefault || Re, e.stopPropagation = e.stopPropagation || Be, n.call(r, e, a, o);
						};
						return e.attachEvent("on" + t, i), function() {
							return e.detachEvent("on" + t, i), !0;
						};
					} : void 0, We = [], Ge = function(t) {
						for (var n, r = t.clientX, i = t.clientY, a = c.doc.documentElement.scrollTop || c.doc.body.scrollTop, o = c.doc.documentElement.scrollLeft || c.doc.body.scrollLeft, s = We.length; s--;) {
							if (n = We[s], p && t.touches) {
								for (var l, u = t.touches.length; u--;) if ((l = t.touches[u]).identifier == n.el._drag.id) {
									r = l.clientX, i = l.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
									break;
								}
							} else t.preventDefault();
							var d, f = n.el.node, m = f.nextSibling, h = f.parentNode, g = f.style.display;
							c.win.opera && h.removeChild(f), f.style.display = "none", d = n.el.paper.getElementByPoint(r, i), f.style.display = g, c.win.opera && (m ? h.insertBefore(f, m) : h.appendChild(f)), d && e("raphael.drag.over." + n.el.id, n.el, d), r += o, i += a, e("raphael.drag.move." + n.el.id, n.move_scope || n.el, r - n.el._drag.x, i - n.el._drag.y, r, i, t);
						}
					}, Ke = function(n) {
						t.unmousemove(Ge).unmouseup(Ke);
						for (var r, i = We.length; i--;) (r = We[i]).el._drag = {}, e("raphael.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, n);
						We = [];
					}, X = t.el = {}, qe = v.length; qe--;) (function(e) {
						t[e] = X[e] = function(n, r) {
							return t.is(n, "function") && (this.events = this.events || [], this.events.push({
								name: e,
								f: n,
								unbind: Ue(this.shape || this.node || c.doc, e, n, r || this)
							})), this;
						}, t["un" + e] = X["un" + e] = function(n) {
							for (var r = this.events || [], i = r.length; i--;) r[i].name != e || !t.is(n, "undefined") && r[i].f != n || (r[i].unbind(), r.splice(i, 1), !r.length && delete this.events);
							return this;
						};
					})(v[qe]);
					X.data = function(n, r) {
						var i = W[this.id] = W[this.id] || {};
						if (arguments.length == 0) return i;
						if (arguments.length == 1) {
							if (t.is(n, "object")) {
								for (var a in n) n[s](a) && this.data(a, n[a]);
								return this;
							}
							return e("raphael.data.get." + this.id, this, i[n], n), i[n];
						}
						return i[n] = r, e("raphael.data.set." + this.id, this, r, n), this;
					}, X.removeData = function(e) {
						return e == null ? delete W[this.id] : W[this.id] && delete W[this.id][e], this;
					}, X.getData = function() {
						return se(W[this.id] || {});
					}, X.hover = function(e, t, n, r) {
						return this.mouseover(e, n).mouseout(t, r || n);
					}, X.unhover = function(e, t) {
						return this.unmouseover(e).unmouseout(t);
					};
					var Je = [];
					X.drag = function(n, r, i, a, o, s) {
						function l(l) {
							(l.originalEvent || l).preventDefault();
							var u = l.clientX, d = l.clientY, f = c.doc.documentElement.scrollTop || c.doc.body.scrollTop, m = c.doc.documentElement.scrollLeft || c.doc.body.scrollLeft;
							if (this._drag.id = l.identifier, p && l.touches) {
								for (var h, g = l.touches.length; g--;) if (h = l.touches[g], this._drag.id = h.identifier, h.identifier == this._drag.id) {
									u = h.clientX, d = h.clientY;
									break;
								}
							}
							this._drag.x = u + m, this._drag.y = d + f, !We.length && t.mousemove(Ge).mouseup(Ke), We.push({
								el: this,
								move_scope: a,
								start_scope: o,
								end_scope: s
							}), r && e.on("raphael.drag.start." + this.id, r), n && e.on("raphael.drag.move." + this.id, n), i && e.on("raphael.drag.end." + this.id, i), e("raphael.drag.start." + this.id, o || a || this, this._drag.x, this._drag.y, l);
						}
						return this._drag = {}, Je.push({
							el: this,
							start: l
						}), this.mousedown(l), this;
					}, X.onDragOver = function(t) {
						t ? e.on("raphael.drag.over." + this.id, t) : e.unbind("raphael.drag.over." + this.id);
					}, X.undrag = function() {
						for (var n = Je.length; n--;) Je[n].el == this && (this.unmousedown(Je[n].start), Je.splice(n, 1), e.unbind("raphael.drag.*." + this.id));
						!Je.length && t.unmousemove(Ge).unmouseup(Ke), We = [];
					}, r.circle = function(e, n, r) {
						var i = t._engine.circle(this, e || 0, n || 0, r || 0);
						return this.__set__ && this.__set__.push(i), i;
					}, r.rect = function(e, n, r, i, a) {
						var o = t._engine.rect(this, e || 0, n || 0, r || 0, i || 0, a || 0);
						return this.__set__ && this.__set__.push(o), o;
					}, r.ellipse = function(e, n, r, i) {
						var a = t._engine.ellipse(this, e || 0, n || 0, r || 0, i || 0);
						return this.__set__ && this.__set__.push(a), a;
					}, r.path = function(e) {
						e && !t.is(e, "string") && !t.is(e[0], O) && (e += m);
						var n = t._engine.path(t.format[d](t, arguments), this);
						return this.__set__ && this.__set__.push(n), n;
					}, r.image = function(e, n, r, i, a) {
						var o = t._engine.image(this, e || "about:blank", n || 0, r || 0, i || 0, a || 0);
						return this.__set__ && this.__set__.push(o), o;
					}, r.text = function(e, n, r) {
						var i = t._engine.text(this, e || 0, n || 0, g(r));
						return this.__set__ && this.__set__.push(i), i;
					}, r.set = function(e) {
						!t.is(e, "array") && (e = Array.prototype.splice.call(arguments, 0, arguments.length));
						var n = new ft(e);
						return this.__set__ && this.__set__.push(n), n.paper = this, n.type = "set", n;
					}, r.setStart = function(e) {
						this.__set__ = e || this.set();
					}, r.setFinish = function(e) {
						var t = this.__set__;
						return delete this.__set__, t;
					}, r.getSize = function() {
						var e = this.canvas.parentNode;
						return {
							width: e.offsetWidth,
							height: e.offsetHeight
						};
					}, r.setSize = function(e, n) {
						return t._engine.setSize.call(this, e, n);
					}, r.setViewBox = function(e, n, r, i, a) {
						return t._engine.setViewBox.call(this, e, n, r, i, a);
					}, r.top = r.bottom = null, r.raphael = t;
					function Ye() {
						return this.x + h + this.y + h + this.width + " × " + this.height;
					}
					r.getElementByPoint = function(e, t) {
						var n, r, i, a, o, s, l, u = this.canvas, d = c.doc.elementFromPoint(e, t);
						if (c.win.opera && d.tagName == "svg") {
							var f = (r = (n = u).getBoundingClientRect(), i = n.ownerDocument, a = i.body, o = i.documentElement, s = o.clientTop || a.clientTop || 0, l = o.clientLeft || a.clientLeft || 0, {
								y: r.top + (c.win.pageYOffset || o.scrollTop || a.scrollTop) - s,
								x: r.left + (c.win.pageXOffset || o.scrollLeft || a.scrollLeft) - l
							}), p = u.createSVGRect();
							p.x = e - f.x, p.y = t - f.y, p.width = p.height = 1;
							var m = u.getIntersectionList(p, null);
							m.length && (d = m[m.length - 1]);
						}
						if (!d) return null;
						for (; d.parentNode && d != u.parentNode && !d.raphael;) d = d.parentNode;
						return d == this.canvas.parentNode && (d = u), d = d && d.raphael ? this.getById(d.raphaelid) : null;
					}, r.getElementsByBBox = function(e) {
						var n = this.set();
						return this.forEach(function(r) {
							t.isBBoxIntersect(r.getBBox(), e) && n.push(r);
						}), n;
					}, r.getById = function(e) {
						for (var t = this.bottom; t;) {
							if (t.id == e) return t;
							t = t.next;
						}
						return null;
					}, r.forEach = function(e, t) {
						for (var n = this.bottom; n;) {
							if (!1 === e.call(t, n)) return this;
							n = n.next;
						}
						return this;
					}, r.getElementsByPoint = function(e, t) {
						var n = this.set();
						return this.forEach(function(r) {
							r.isPointInside(e, t) && n.push(r);
						}), n;
					}, X.isPointInside = function(e, n) {
						var r = this.realPath = K[this.type](this);
						return this.attr("transform") && this.attr("transform").length && (r = t.transformPath(r, this.attr("transform"))), t.isPointInsidePath(r, e, n);
					}, X.getBBox = function(e) {
						if (this.removed) return {};
						var t = this._;
						return e ? (!t.dirty && t.bboxwt || (this.realPath = K[this.type](this), t.bboxwt = Ce(this.realPath), t.bboxwt.toString = Ye, t.dirty = 0), t.bboxwt) : ((t.dirty || t.dirtyT || !t.bbox) && (!t.dirty && this.realPath || (t.bboxwt = 0, this.realPath = K[this.type](this)), t.bbox = Ce(ie(this.realPath, this.matrix)), t.bbox.toString = Ye, t.dirty = t.dirtyT = 0), t.bbox);
					}, X.clone = function() {
						if (this.removed) return null;
						var e = this.paper[this.type]().attr(this.attr());
						return this.__set__ && this.__set__.push(e), e;
					}, X.glow = function(e) {
						if (this.type == "text") return null;
						var t = {
							width: ((e ||= {}).width || 10) + (+this.attr("stroke-width") || 1),
							fill: e.fill || !1,
							opacity: e.opacity == null ? .5 : e.opacity,
							offsetx: e.offsetx || 0,
							offsety: e.offsety || 0,
							color: e.color || "#000"
						}, n = t.width / 2, r = this.paper, i = r.set(), a = this.realPath || K[this.type](this);
						a = this.matrix ? ie(a, this.matrix) : a;
						for (var o = 1; o < n + 1; o++) i.push(r.path(a).attr({
							stroke: t.color,
							fill: t.fill ? t.color : "none",
							"stroke-linejoin": "round",
							"stroke-linecap": "round",
							"stroke-width": +(t.width / n * o).toFixed(3),
							opacity: +(t.opacity / n).toFixed(3)
						}));
						return i.insertBefore(this).translate(t.offsetx, t.offsety);
					};
					var Xe = function(e, n, r, i, a, o, s, c, l) {
						return l == null ? be(e, n, r, i, a, o, s, c) : t.findDotsAtSegment(e, n, r, i, a, o, s, c, function(e, t, n, r, i, a, o, s, c) {
							if (!(c < 0 || be(e, t, n, r, i, a, o, s) < c)) {
								var l, u = .5, d = 1 - u;
								for (l = be(e, t, n, r, i, a, o, s, d); w(l - c) > .01;) l = be(e, t, n, r, i, a, o, s, d += (l < c ? 1 : -1) * (u /= 2));
								return d;
							}
						}(e, n, r, i, a, o, s, c, l));
					}, Ze = function(e, n) {
						return function(r, i, a) {
							for (var o, s, c, l, u, d = "", f = {}, p = 0, m = 0, h = (r = je(r)).length; m < h; m++) {
								if ((c = r[m])[0] == "M") o = +c[1], s = +c[2];
								else {
									if (p + (l = Xe(o, s, c[1], c[2], c[3], c[4], c[5], c[6])) > i) {
										if (n && !f.start) {
											if (d += [
												"C" + (u = Xe(o, s, c[1], c[2], c[3], c[4], c[5], c[6], i - p)).start.x,
												u.start.y,
												u.m.x,
												u.m.y,
												u.x,
												u.y
											], a) return d;
											f.start = d, d = [
												"M" + u.x,
												u.y + "C" + u.n.x,
												u.n.y,
												u.end.x,
												u.end.y,
												c[5],
												c[6]
											].join(), p += l, o = +c[5], s = +c[6];
											continue;
										}
										if (!e && !n) return {
											x: (u = Xe(o, s, c[1], c[2], c[3], c[4], c[5], c[6], i - p)).x,
											y: u.y,
											alpha: u.alpha
										};
									}
									p += l, o = +c[5], s = +c[6];
								}
								d += c.shift() + c;
							}
							return f.end = d, (u = e ? p : n ? f : t.findDotsAtSegment(o, s, c[0], c[1], c[2], c[3], c[4], c[5], 1)).alpha && (u = {
								x: u.x,
								y: u.y,
								alpha: u.alpha
							}), u;
						};
					}, Qe = Ze(1), $e = Ze(), et = Ze(0, 1);
					t.getTotalLength = Qe, t.getPointAtLength = $e, t.getSubpath = function(e, t, n) {
						if (this.getTotalLength(e) - n < 1e-6) return et(e, t).end;
						var r = et(e, n, 1);
						return t ? et(r, t).end : r;
					}, X.getTotalLength = function() {
						var e = this.getPath();
						if (e) return this.node.getTotalLength ? this.node.getTotalLength() : Qe(e);
					}, X.getPointAtLength = function(e) {
						var t = this.getPath();
						if (t) return $e(t, e);
					}, X.getPath = function() {
						var e, n = t._getPath[this.type];
						if (this.type != "text" && this.type != "set") return n && (e = n(this)), e;
					}, X.getSubpath = function(e, n) {
						var r = this.getPath();
						if (r) return t.getSubpath(r, e, n);
					};
					var Z = t.easing_formulas = {
						linear: function(e) {
							return e;
						},
						"<": function(e) {
							return T(e, 1.7);
						},
						">": function(e) {
							return T(e, .48);
						},
						"<>": function(e) {
							var t = .48 - e / 1.04, n = x.sqrt(.1734 + t * t), r = n - t, i = -n - t, a = T(w(r), 1 / 3) * (r < 0 ? -1 : 1) + T(w(i), 1 / 3) * (i < 0 ? -1 : 1) + .5;
							return 3 * (1 - a) * a * a + a * a * a;
						},
						backIn: function(e) {
							var t = 1.70158;
							return e * e * ((t + 1) * e - t);
						},
						backOut: function(e) {
							var t = 1.70158;
							return --e * e * ((t + 1) * e + t) + 1;
						},
						elastic: function(e) {
							return e == !!e ? e : T(2, -10 * e) * x.sin(2 * E * (e - .075) / .3) + 1;
						},
						bounce: function(e) {
							var t = 7.5625, n = 2.75;
							return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375;
						}
					};
					Z.easeIn = Z["ease-in"] = Z["<"], Z.easeOut = Z["ease-out"] = Z[">"], Z.easeInOut = Z["ease-in-out"] = Z["<>"], Z["back-in"] = Z.backIn, Z["back-out"] = Z.backOut;
					var Q = [], tt = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
						setTimeout(e, 16);
					}, nt = function() {
						for (var n = +/* @__PURE__ */ new Date(), r = 0; r < Q.length; r++) {
							var i = Q[r];
							if (!i.el.removed && !i.paused) {
								var a, o, c = n - i.start, l = i.ms, u = i.easing, d = i.from, p = i.diff, m = i.to, g = (i.t, i.el), _ = {}, v = {};
								if (i.initstatus ? (c = (i.initstatus * i.anim.top - i.prev) / (i.percent - i.prev) * l, i.status = i.initstatus, delete i.initstatus, i.stop && Q.splice(r--, 1)) : i.status = (i.prev + (i.percent - i.prev) * (c / l)) / i.anim.top, !(c < 0)) {
									if (c < l) {
										var y = u(c / l);
										for (var b in d) if (d[s](b)) {
											switch (R[b]) {
												case D:
													a = +d[b] + y * l * p[b];
													break;
												case "colour":
													a = "rgb(" + [
														rt(N(d[b].r + y * l * p[b].r)),
														rt(N(d[b].g + y * l * p[b].g)),
														rt(N(d[b].b + y * l * p[b].b))
													].join(",") + ")";
													break;
												case "path":
													a = [];
													for (var x = 0, S = d[b].length; x < S; x++) {
														a[x] = [d[b][x][0]];
														for (var C = 1, w = d[b][x].length; C < w; C++) a[x][C] = +d[b][x][C] + y * l * p[b][x][C];
														a[x] = a[x].join(h);
													}
													a = a.join(h);
													break;
												case "transform":
													if (p[b].real) for (a = [], x = 0, S = d[b].length; x < S; x++) for (a[x] = [d[b][x][0]], C = 1, w = d[b][x].length; C < w; C++) a[x][C] = d[b][x][C] + y * l * p[b][x][C];
													else {
														var T = function(e) {
															return +d[b][e] + y * l * p[b][e];
														};
														a = [[
															"m",
															T(0),
															T(1),
															T(2),
															T(3),
															T(4),
															T(5)
														]];
													}
													break;
												case "csv":
													if (b == "clip-rect") for (a = [], x = 4; x--;) a[x] = +d[b][x] + y * l * p[b][x];
													break;
												default:
													var E = [][f](d[b]);
													for (a = [], x = g.paper.customAttributes[b].length; x--;) a[x] = +E[x] + y * l * p[b][x];
											}
											_[b] = a;
										}
										g.attr(_), function(t, n, r) {
											setTimeout(function() {
												e("raphael.anim.frame." + t, n, r);
											});
										}(g.id, g, i.anim);
									} else {
										if (function(n, r, i) {
											setTimeout(function() {
												e("raphael.anim.frame." + r.id, r, i), e("raphael.anim.finish." + r.id, r, i), t.is(n, "function") && n.call(r);
											});
										}(i.callback, g, i.anim), g.attr(m), Q.splice(r--, 1), i.repeat > 1 && !i.next) {
											for (o in m) m[s](o) && (v[o] = i.totalOrigin[o]);
											i.el.attr(v), ot(i.anim, i.el, i.anim.percents[0], null, i.totalOrigin, i.repeat - 1);
										}
										i.next && !i.stop && ot(i.anim, i.el, i.next, null, i.totalOrigin, i.repeat);
									}
								}
							}
						}
						Q.length && tt(nt);
					}, rt = function(e) {
						return e > 255 ? 255 : e < 0 ? 0 : e;
					};
					function it(e, t, n, r, i, a) {
						var o = 3 * t, s = 3 * (r - t) - o, c = 1 - o - s, l = 3 * n, u = 3 * (i - n) - l, d = 1 - l - u;
						function f(e) {
							return ((c * e + s) * e + o) * e;
						}
						return function(e, t) {
							var n = function(e, t) {
								var n, r, i, a, l, u;
								for (i = e, u = 0; u < 8; u++) {
									if (a = f(i) - e, w(a) < t) return i;
									if (w(l = (3 * c * i + 2 * s) * i + o) < 1e-6) break;
									i -= a / l;
								}
								if (r = 1, (i = e) < (n = 0)) return n;
								if (i > r) return r;
								for (; n < r;) {
									if (a = f(i), w(a - e) < t) return i;
									e > a ? n = i : r = i, i = (r - n) / 2 + n;
								}
								return i;
							}(e, t);
							return ((d * n + u) * n + l) * n;
						}(e, 1 / (200 * a));
					}
					function at(e, t) {
						var n = [], r = {};
						if (this.ms = t, this.times = 1, e) {
							for (var i in e) e[s](i) && (r[P(i)] = e[i], n.push(P(i)));
							n.sort(G);
						}
						this.anim = r, this.top = n[n.length - 1], this.percents = n;
					}
					function ot(n, r, a, o, c, l) {
						a = P(a);
						var u, d, p, m, h, v, y = n.ms, b = {}, x = {}, S = {};
						if (o) for (w = 0, T = Q.length; w < T; w++) {
							var C = Q[w];
							if (C.el.id == r.id && C.anim == n) {
								C.percent == a ? d = C : (Q.splice(w, 1), p = 1), r.attr(C.totalOrigin);
								break;
							}
						}
						else o = +x;
						for (var w = 0, T = n.percents.length; w < T; w++) {
							if (n.percents[w] == a || n.percents[w] > o * n.top) {
								a = n.percents[w], h = n.percents[w - 1] || 0, y = y / n.top * (a - h), m = n.percents[w + 1], u = n.anim[a];
								break;
							}
							o && r.attr(n.anim[n.percents[w]]);
						}
						if (u) {
							if (d) d.initstatus = o, d.start = /* @__PURE__ */ new Date() - d.ms * o;
							else {
								for (var E in u) if (u[s](E) && (R[s](E) || r.paper.customAttributes[s](E))) switch (b[E] = r.attr(E), b[E] ?? (b[E] = L[E]), x[E] = u[E], R[E]) {
									case D:
										S[E] = (x[E] - b[E]) / y;
										break;
									case "colour":
										b[E] = t.getRGB(b[E]);
										var O = t.getRGB(x[E]);
										S[E] = {
											r: (O.r - b[E].r) / y,
											g: (O.g - b[E].g) / y,
											b: (O.b - b[E].b) / y
										};
										break;
									case "path":
										var k = je(b[E], x[E]), A = k[1];
										for (b[E] = k[0], S[E] = [], w = 0, T = b[E].length; w < T; w++) {
											S[E][w] = [0];
											for (var j = 1, N = b[E][w].length; j < N; j++) S[E][w][j] = (A[w][j] - b[E][w][j]) / y;
										}
										break;
									case "transform":
										var F = r._, I = Ie(F[E], x[E]);
										if (I) for (b[E] = I.from, x[E] = I.to, S[E] = [], S[E].real = !0, w = 0, T = b[E].length; w < T; w++) for (S[E][w] = [b[E][w][0]], j = 1, N = b[E][w].length; j < N; j++) S[E][w][j] = (x[E][w][j] - b[E][w][j]) / y;
										else {
											var z = r.matrix || new Le(), B = {
												_: { transform: F.transform },
												getBBox: function() {
													return r.getBBox(1);
												}
											};
											b[E] = [
												z.a,
												z.b,
												z.c,
												z.d,
												z.e,
												z.f
											], Pe(B, x[E]), x[E] = B._.transform, S[E] = [
												(B.matrix.a - z.a) / y,
												(B.matrix.b - z.b) / y,
												(B.matrix.c - z.c) / y,
												(B.matrix.d - z.d) / y,
												(B.matrix.e - z.e) / y,
												(B.matrix.f - z.f) / y
											];
										}
										break;
									case "csv":
										var V = g(u[E])[_](i), H = g(b[E])[_](i);
										if (E == "clip-rect") for (b[E] = H, S[E] = [], w = H.length; w--;) S[E][w] = (V[w] - b[E][w]) / y;
										x[E] = V;
										break;
									default: for (V = [][f](u[E]), H = [][f](b[E]), S[E] = [], w = r.paper.customAttributes[E].length; w--;) S[E][w] = ((V[w] || 0) - (H[w] || 0)) / y;
								}
								var ee = u.easing, U = t.easing_formulas[ee];
								if (!U) {
									if ((U = g(ee).match(M)) && U.length == 5) {
										var W = U;
										U = function(e) {
											return it(e, +W[1], +W[2], +W[3], +W[4], y);
										};
									} else U = te;
								}
								if (C = {
									anim: n,
									percent: a,
									timestamp: v = u.start || n.start || +/* @__PURE__ */ new Date(),
									start: v + (n.del || 0),
									status: 0,
									initstatus: o || 0,
									stop: !1,
									ms: y,
									easing: U,
									from: b,
									diff: S,
									to: x,
									el: r,
									callback: u.callback,
									prev: h,
									next: m,
									repeat: l || n.times,
									origin: r.attr(),
									totalOrigin: c
								}, Q.push(C), o && !d && !p && (C.stop = !0, C.start = /* @__PURE__ */ new Date() - y * o, Q.length == 1)) return nt();
								p && (C.start = /* @__PURE__ */ new Date() - C.ms * o), Q.length == 1 && tt(nt);
							}
							e("raphael.anim.start." + r.id, r, n);
						}
					}
					function st(e) {
						for (var t = 0; t < Q.length; t++) Q[t].el.paper == e && Q.splice(t--, 1);
					}
					X.animateWith = function(e, n, r, i, a, o) {
						if (this.removed) return o && o.call(this), this;
						var s = r instanceof at ? r : t.animation(r, i, a, o);
						ot(s, this, s.percents[0], null, this.attr());
						for (var c = 0, l = Q.length; c < l; c++) if (Q[c].anim == n && Q[c].el == e) {
							Q[l - 1].start = Q[c].start;
							break;
						}
						return this;
					}, X.onAnimation = function(t) {
						return t ? e.on("raphael.anim.frame." + this.id, t) : e.unbind("raphael.anim.frame." + this.id), this;
					}, at.prototype.delay = function(e) {
						var t = new at(this.anim, this.ms);
						return t.times = this.times, t.del = +e || 0, t;
					}, at.prototype.repeat = function(e) {
						var t = new at(this.anim, this.ms);
						return t.del = this.del, t.times = x.floor(S(e, 0)) || 1, t;
					}, t.animation = function(e, n, r, i) {
						if (e instanceof at) return e;
						!t.is(r, "function") && r || (i = i || r || null, r = null), e = Object(e), n = +n || 0;
						var a, o, c = {};
						for (o in e) e[s](o) && P(o) != o && P(o) + "%" != o && (a = !0, c[o] = e[o]);
						if (a) return r && (c.easing = r), i && (c.callback = i), new at({ 100: c }, n);
						if (i) {
							var l = 0;
							for (var u in e) {
								var d = F(u);
								e[s](u) && d > l && (l = d);
							}
							!e[l += "%"].callback && (e[l].callback = i);
						}
						return new at(e, n);
					}, X.animate = function(e, n, r, i) {
						if (this.removed) return i && i.call(this), this;
						var a = e instanceof at ? e : t.animation(e, n, r, i);
						return ot(a, this, a.percents[0], null, this.attr()), this;
					}, X.setTime = function(e, t) {
						return e && t != null && this.status(e, C(t, e.ms) / e.ms), this;
					}, X.status = function(e, t) {
						var n, r, i = [], a = 0;
						if (t != null) return ot(e, this, -1, C(t, 1)), this;
						for (n = Q.length; a < n; a++) if ((r = Q[a]).el.id == this.id && (!e || r.anim == e)) {
							if (e) return r.status;
							i.push({
								anim: r.anim,
								status: r.status
							});
						}
						return e ? 0 : i;
					}, X.pause = function(t) {
						for (var n = 0; n < Q.length; n++) Q[n].el.id != this.id || t && Q[n].anim != t || !1 !== e("raphael.anim.pause." + this.id, this, Q[n].anim) && (Q[n].paused = !0);
						return this;
					}, X.resume = function(t) {
						for (var n = 0; n < Q.length; n++) if (Q[n].el.id == this.id && (!t || Q[n].anim == t)) {
							var r = Q[n];
							!1 !== e("raphael.anim.resume." + this.id, this, r.anim) && (delete r.paused, this.status(r.anim, r.status));
						}
						return this;
					}, X.stop = function(t) {
						for (var n = 0; n < Q.length; n++) Q[n].el.id != this.id || t && Q[n].anim != t || !1 !== e("raphael.anim.stop." + this.id, this, Q[n].anim) && Q.splice(n--, 1);
						return this;
					}, e.on("raphael.remove", st), e.on("raphael.clear", st), X.toString = function() {
						return "Raphaël’s object";
					};
					var ct, lt, ut, dt, ft = function(e) {
						if (this.items = [], this.length = 0, this.type = "set", e) for (var t = 0, n = e.length; t < n; t++) !e[t] || e[t].constructor != X.constructor && e[t].constructor != ft || (this[this.items.length] = this.items[this.items.length] = e[t], this.length++);
					}, $ = ft.prototype;
					for (var pt in $.push = function() {
						for (var e, t, n = 0, r = arguments.length; n < r; n++) !(e = arguments[n]) || e.constructor != X.constructor && e.constructor != ft || (this[t = this.items.length] = this.items[t] = e, this.length++);
						return this;
					}, $.pop = function() {
						return this.length && delete this[this.length--], this.items.pop();
					}, $.forEach = function(e, t) {
						for (var n = 0, r = this.items.length; n < r; n++) if (!1 === e.call(t, this.items[n], n)) return this;
						return this;
					}, X) X[s](pt) && ($[pt] = function(e) {
						return function() {
							var t = arguments;
							return this.forEach(function(n) {
								n[e][d](n, t);
							});
						};
					}(pt));
					return $.attr = function(e, n) {
						if (e && t.is(e, O) && t.is(e[0], "object")) for (var r = 0, i = e.length; r < i; r++) this.items[r].attr(e[r]);
						else for (var a = 0, o = this.items.length; a < o; a++) this.items[a].attr(e, n);
						return this;
					}, $.clear = function() {
						for (; this.length;) this.pop();
					}, $.splice = function(e, t, n) {
						e = e < 0 ? S(this.length + e, 0) : e, t = S(0, C(this.length - e, t));
						var r, i = [], a = [], o = [];
						for (r = 2; r < arguments.length; r++) o.push(arguments[r]);
						for (r = 0; r < t; r++) a.push(this[e + r]);
						for (; r < this.length - e; r++) i.push(this[e + r]);
						var s = o.length;
						for (r = 0; r < s + i.length; r++) this.items[e + r] = this[e + r] = r < s ? o[r] : i[r - s];
						for (r = this.items.length = this.length -= t - s; this[r];) delete this[r++];
						return new ft(a);
					}, $.exclude = function(e) {
						for (var t = 0, n = this.length; t < n; t++) if (this[t] == e) return this.splice(t, 1), !0;
					}, $.animate = function(e, n, r, i) {
						(t.is(r, "function") || !r) && (i = r || null);
						var a, o, s = this.items.length, c = s, l = this;
						if (!s) return this;
						i && (o = function() {
							!--s && i.call(l);
						}), r = t.is(r, "string") ? r : o;
						var u = t.animation(e, n, r, o);
						for (a = this.items[--c].animate(u); c--;) this.items[c] && !this.items[c].removed && this.items[c].animateWith(a, u, u), this.items[c] && !this.items[c].removed || s--;
						return this;
					}, $.insertAfter = function(e) {
						for (var t = this.items.length; t--;) this.items[t].insertAfter(e);
						return this;
					}, $.getBBox = function() {
						for (var e = [], t = [], n = [], r = [], i = this.items.length; i--;) if (!this.items[i].removed) {
							var a = this.items[i].getBBox();
							e.push(a.x), t.push(a.y), n.push(a.x + a.width), r.push(a.y + a.height);
						}
						return {
							x: e = C[d](0, e),
							y: t = C[d](0, t),
							x2: n = S[d](0, n),
							y2: r = S[d](0, r),
							width: n - e,
							height: r - t
						};
					}, $.clone = function(e) {
						e = this.paper.set();
						for (var t = 0, n = this.items.length; t < n; t++) e.push(this.items[t].clone());
						return e;
					}, $.toString = function() {
						return "Raphaël‘s set";
					}, $.glow = function(e) {
						var t = this.paper.set();
						return this.forEach(function(n, r) {
							n.glow(e)?.forEach(function(e, n) {
								t.push(e);
							});
						}), t;
					}, $.isPointInside = function(e, t) {
						var n = !1;
						return this.forEach(function(r) {
							if (r.isPointInside(e, t)) return n = !0, !1;
						}), n;
					}, t.registerFont = function(e) {
						if (!e.face) return e;
						this.fonts = this.fonts || {};
						var t = {
							w: e.w,
							face: {},
							glyphs: {}
						}, n = e.face["font-family"];
						for (var r in e.face) e.face[s](r) && (t.face[r] = e.face[r]);
						if (this.fonts[n] ? this.fonts[n].push(t) : this.fonts[n] = [t], !e.svg) {
							for (var i in t.face["units-per-em"] = F(e.face["units-per-em"], 10), e.glyphs) if (e.glyphs[s](i)) {
								var a = e.glyphs[i];
								if (t.glyphs[i] = {
									w: a.w,
									k: {},
									d: a.d && "M" + a.d.replace(/[mlcxtrv]/g, function(e) {
										return {
											l: "L",
											c: "C",
											x: "z",
											t: "m",
											r: "l",
											v: "c"
										}[e] || "M";
									}) + "z"
								}, a.k) for (var o in a.k) a[s](o) && (t.glyphs[i].k[o] = a.k[o]);
							}
						}
						return e;
					}, r.getFont = function(e, n, r, i) {
						if (i ||= "normal", r ||= "normal", n = +n || {
							normal: 400,
							bold: 700,
							lighter: 300,
							bolder: 800
						}[n] || 400, t.fonts) {
							var a, o = t.fonts[e];
							if (!o) {
								var c = RegExp("(^|\\s)" + e.replace(/[^\w\d\s+!~.:_-]/g, m) + "(\\s|$)", "i");
								for (var l in t.fonts) if (t.fonts[s](l) && c.test(l)) {
									o = t.fonts[l];
									break;
								}
							}
							if (o) for (var u = 0, d = o.length; u < d && ((a = o[u]).face["font-weight"] != n || a.face["font-style"] != r && a.face["font-style"] || a.face["font-stretch"] != i); u++);
							return a;
						}
					}, r.print = function(e, n, r, a, o, s, c, l) {
						s ||= "middle", c = S(C(c || 0, 1), -1), l = S(C(l || 1, 3), 1);
						var u, d = g(r)[_](m), f = 0, p = 0, h = m;
						if (t.is(a, "string") && (a = this.getFont(a)), a) {
							u = (o || 16) / a.face["units-per-em"];
							for (var v = a.face.bbox[_](i), y = +v[0], b = v[3] - v[1], x = 0, w = +v[1] + (s == "baseline" ? b + +a.face.descent : b / 2), T = 0, E = d.length; T < E; T++) {
								if (d[T] == "\n") f = 0, O = 0, p = 0, x += b * l;
								else {
									var D = p && a.glyphs[d[T - 1]] || {}, O = a.glyphs[d[T]];
									f += p ? (D.w || a.w) + (D.k && D.k[d[T]] || 0) + a.w * c : 0, p = 1;
								}
								O && O.d && (h += t.transformPath(O.d, [
									"t",
									f * u,
									x * u,
									"s",
									u,
									u,
									y,
									w,
									"t",
									(e - y) / u,
									(n - w) / u
								]));
							}
						}
						return this.path(h).attr({
							fill: "#000",
							stroke: "none"
						});
					}, r.add = function(e) {
						if (t.is(e, "array")) for (var n, r = this.set(), i = 0, o = e.length; i < o; i++) n = e[i] || {}, a[s](n.type) && r.push(this[n.type]().attr(n));
						return r;
					}, t.format = function(e, n) {
						var r = t.is(n, O) ? [0][f](n) : arguments;
						return e && t.is(e, "string") && r.length - 1 && (e = e.replace(o, function(e, t) {
							return r[++t] == null ? m : r[t];
						})), e || m;
					}, t.fullfill = (ct = /\{([^\}]+)\}/g, lt = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, function(e, t) {
						return String(e).replace(ct, function(e, n) {
							return function(e, t, n) {
								var r = n;
								return t.replace(lt, function(e, t, n, i, a) {
									t ||= i, r && (t in r && (r = r[t]), typeof r == "function" && a && (r = r()));
								}), r = (r == null || r == n ? e : r) + "";
							}(e, n, t);
						});
					}), t.ninja = function() {
						if (l.was) c.win.Raphael = l.is;
						else {
							window.Raphael = void 0;
							try {
								delete window.Raphael;
							} catch {}
						}
						return t;
					}, t.st = $, e.on("raphael.DOMload", function() {
						n = !0;
					}), (ut = document).readyState == null && ut.addEventListener && (ut.addEventListener("DOMContentLoaded", dt = function() {
						ut.removeEventListener("DOMContentLoaded", dt, !1), ut.readyState = "complete";
					}, !1), ut.readyState = "loading"), function e() {
						/in/.test(ut.readyState) ? setTimeout(e, 9) : t.eve("raphael.DOMload");
					}(), t;
				}.apply(t, r)) === void 0 || (e.exports = i);
			},
			function(e, t, n) {
				var r = [
					n(0),
					n(3),
					n(4)
				], i;
				(i = function(e) {
					return e;
				}.apply(t, r)) === void 0 || (e.exports = i);
			},
			function(e, t, n) {
				var r, i, a, o = "hasOwnProperty", s = /[\.\/]/, c = /\s*,\s*/, l = function(e, t) {
					return e - t;
				}, u = { n: {} }, d = function() {
					for (var e = 0, t = this.length; e < t; e++) if (this[e] !== void 0) return this[e];
				}, f = function() {
					for (var e = this.length; --e;) if (this[e] !== void 0) return this[e];
				}, p = Object.prototype.toString, m = String, h = Array.isArray || function(e) {
					return e instanceof Array || p.call(e) == "[object Array]";
				}, g;
				(g = function(e, t) {
					var n, r = a, o = Array.prototype.slice.call(arguments, 2), s = g.listeners(e), c = 0, u = [], p = {}, m = [], h = i;
					m.firstDefined = d, m.lastDefined = f, i = e, a = 0;
					for (var _ = 0, v = s.length; _ < v; _++) "zIndex" in s[_] && (u.push(s[_].zIndex), s[_].zIndex < 0 && (p[s[_].zIndex] = s[_]));
					for (u.sort(l); u[c] < 0;) if (n = p[u[c++]], m.push(n.apply(t, o)), a) return a = r, m;
					for (_ = 0; _ < v; _++) if ("zIndex" in (n = s[_])) {
						if (n.zIndex == u[c]) {
							if (m.push(n.apply(t, o)), a) break;
							do
								if ((n = p[u[++c]]) && m.push(n.apply(t, o)), a) break;
							while (n);
						} else p[n.zIndex] = n;
					} else if (m.push(n.apply(t, o)), a) break;
					return a = r, i = h, m;
				})._events = u, g.listeners = function(e) {
					var t, n, r, i, a, o, c, l, d = h(e) ? e : e.split(s), f = u, p = [f], m = [];
					for (i = 0, a = d.length; i < a; i++) {
						for (l = [], o = 0, c = p.length; o < c; o++) for (n = [(f = p[o].n)[d[i]], f["*"]], r = 2; r--;) (t = n[r]) && (l.push(t), m = m.concat(t.f || []));
						p = l;
					}
					return m;
				}, g.separator = function(e) {
					e ? (e = "[" + (e = m(e).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]", s = new RegExp(e)) : s = /[\.\/]/;
				}, g.on = function(e, t) {
					if (typeof t != "function") return function() {};
					for (var n = h(e) ? h(e[0]) ? e : [e] : m(e).split(c), r = 0, i = n.length; r < i; r++) (function(e) {
						for (var n, r = h(e) ? e : m(e).split(s), i = u, a = 0, o = r.length; a < o; a++) i = (i = i.n).hasOwnProperty(r[a]) && i[r[a]] || (i[r[a]] = { n: {} });
						for (i.f = i.f || [], a = 0, o = i.f.length; a < o; a++) if (i.f[a] == t) {
							n = !0;
							break;
						}
						!n && i.f.push(t);
					})(n[r]);
					return function(e) {
						+e == +e && (t.zIndex = +e);
					};
				}, g.f = function(e) {
					var t = [].slice.call(arguments, 1);
					return function() {
						g.apply(null, [e, null].concat(t, [].slice.call(arguments, 0)));
					};
				}, g.stop = function() {
					a = 1;
				}, g.nt = function(e) {
					var t = h(i) ? i.join(".") : i;
					return e ? RegExp("(?:\\.|\\/|^)" + e + "(?:\\.|\\/|$)").test(t) : t;
				}, g.nts = function() {
					return h(i) ? i : i.split(s);
				}, g.off = g.unbind = function(e, t) {
					if (e) {
						var n = h(e) ? h(e[0]) ? e : [e] : m(e).split(c);
						if (n.length > 1) for (var r = 0, i = n.length; r < i; r++) g.off(n[r], t);
						else {
							n = h(e) ? e : m(e).split(s);
							var a, l, d, f, p, _ = [u];
							for (r = 0, i = n.length; r < i; r++) for (f = 0; f < _.length; f += d.length - 2) {
								if (d = [f, 1], a = _[f].n, n[r] != "*") a[n[r]] && d.push(a[n[r]]);
								else for (l in a) a[o](l) && d.push(a[l]);
								_.splice.apply(_, d);
							}
							for (r = 0, i = _.length; r < i; r++) for (a = _[r]; a.n;) {
								if (t) {
									if (a.f) {
										for (f = 0, p = a.f.length; f < p; f++) if (a.f[f] == t) {
											a.f.splice(f, 1);
											break;
										}
										!a.f.length && delete a.f;
									}
									for (l in a.n) if (a.n[o](l) && a.n[l].f) {
										var v = a.n[l].f;
										for (f = 0, p = v.length; f < p; f++) if (v[f] == t) {
											v.splice(f, 1);
											break;
										}
										!v.length && delete a.n[l].f;
									}
								} else for (l in delete a.f, a.n) a.n[o](l) && a.n[l].f && delete a.n[l].f;
								a = a.n;
							}
						}
					} else g._events = u = { n: {} };
				}, g.once = function(e, t) {
					var n = function() {
						return g.off(e, n), t.apply(this, arguments);
					};
					return g.on(e, n);
				}, g.version = "0.5.0", g.toString = function() {
					return "You are running Eve 0.5.0";
				}, e.exports ? e.exports = g : (r = function() {
					return g;
				}.apply(t, [])) === void 0 || (e.exports = r);
			},
			function(e, t, n) {
				var r = [n(0)], i;
				(i = function(e) {
					if (!e || e.svg) {
						var t = "hasOwnProperty", n = String, r = parseFloat, i = parseInt, a = Math, o = a.max, s = a.abs, c = a.pow, l = /[, ]+/, u = e.eve, d = "", f = " ", p = "http://www.w3.org/1999/xlink", m = {
							block: "M5,0 0,2.5 5,5z",
							classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
							diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
							open: "M6,1 1,3.5 6,6",
							oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
						}, h = {};
						e.toString = function() {
							return "Your browser supports SVG.\nYou are running Raphaël " + this.version;
						};
						var g = function(r, i) {
							if (i) for (var a in typeof r == "string" && (r = g(r)), i) i[t](a) && (a.substring(0, 6) == "xlink:" ? r.setAttributeNS(p, a.substring(6), n(i[a])) : r.setAttribute(a, n(i[a])));
							else (r = e._g.doc.createElementNS("http://www.w3.org/2000/svg", r)).style && (r.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
							return r;
						}, _ = function(t, i) {
							var l = "linear", u = t.id + i, f = .5, p = .5, m = t.node, h = t.paper, _ = m.style, y = e._g.doc.getElementById(u);
							if (!y) {
								if (i = (i = n(i).replace(e._radial_gradient, function(e, t, n) {
									if (l = "radial", t && n) {
										f = r(t);
										var i = 2 * ((p = r(n)) > .5) - 1;
										c(f - .5, 2) + c(p - .5, 2) > .25 && (p = a.sqrt(.25 - c(f - .5, 2)) * i + .5) && p != .5 && (p = p.toFixed(5) - 1e-5 * i);
									}
									return d;
								})).split(/\s*\-\s*/), l == "linear") {
									var b = i.shift();
									if (b = -r(b), isNaN(b)) return null;
									var x = [
										0,
										0,
										a.cos(e.rad(b)),
										a.sin(e.rad(b))
									], S = 1 / (o(s(x[2]), s(x[3])) || 1);
									x[2] *= S, x[3] *= S, x[2] < 0 && (x[0] = -x[2], x[2] = 0), x[3] < 0 && (x[1] = -x[3], x[3] = 0);
								}
								var C = e._parseDots(i);
								if (!C) return null;
								if (u = u.replace(/[\(\)\s,\xb0#]/g, "_"), t.gradient && u != t.gradient.id && (h.defs.removeChild(t.gradient), delete t.gradient), !t.gradient) {
									y = g(l + "Gradient", { id: u }), t.gradient = y, g(y, l == "radial" ? {
										fx: f,
										fy: p
									} : {
										x1: x[0],
										y1: x[1],
										x2: x[2],
										y2: x[3],
										gradientTransform: t.matrix.invert()
									}), h.defs.appendChild(y);
									for (var w = 0, T = C.length; w < T; w++) y.appendChild(g("stop", {
										offset: C[w].offset ? C[w].offset : w ? "100%" : "0%",
										"stop-color": C[w].color || "#fff",
										"stop-opacity": isFinite(C[w].opacity) ? C[w].opacity : 1
									}));
								}
							}
							return g(m, {
								fill: v(u),
								opacity: 1,
								"fill-opacity": 1
							}), _.fill = d, _.opacity = 1, _.fillOpacity = 1, 1;
						}, v = function(e) {
							if ((t = document.documentMode) && (t === 9 || t === 10)) return "url('#" + e + "')";
							var t, n = document.location;
							return "url('" + (n.protocol + "//" + n.host + n.pathname + n.search) + "#" + e + "')";
						}, y = function(e) {
							var t = e.getBBox(1);
							g(e.pattern, { patternTransform: e.matrix.invert() + " translate(" + t.x + "," + t.y + ")" });
						}, b = function(r, i, a) {
							if (r.type == "path") {
								for (var o, s, c, l, u, f = n(i).toLowerCase().split("-"), p = r.paper, _ = a ? "end" : "start", v = r.node, y = r.attrs, b = y["stroke-width"], x = f.length, S = "classic", C = 3, w = 3, T = 5; x--;) switch (f[x]) {
									case "block":
									case "classic":
									case "oval":
									case "diamond":
									case "open":
									case "none":
										S = f[x];
										break;
									case "wide":
										w = 5;
										break;
									case "narrow":
										w = 2;
										break;
									case "long":
										C = 5;
										break;
									case "short": C = 2;
								}
								if (S == "open" ? (C += 2, w += 2, T += 2, c = 1, l = a ? 4 : 1, u = {
									fill: "none",
									stroke: y.stroke
								}) : (l = c = C / 2, u = {
									fill: y.stroke,
									stroke: "none"
								}), r._.arrows ? a ? (r._.arrows.endPath && h[r._.arrows.endPath]--, r._.arrows.endMarker && h[r._.arrows.endMarker]--) : (r._.arrows.startPath && h[r._.arrows.startPath]--, r._.arrows.startMarker && h[r._.arrows.startMarker]--) : r._.arrows = {}, S != "none") {
									var E = "raphael-marker-" + S, D = "raphael-marker-" + _ + S + C + w + "-obj" + r.id;
									e._g.doc.getElementById(E) ? h[E]++ : (p.defs.appendChild(g(g("path"), {
										"stroke-linecap": "round",
										d: m[S],
										id: E
									})), h[E] = 1);
									var O, k = e._g.doc.getElementById(D);
									k ? (h[D]++, O = k.getElementsByTagName("use")[0]) : (k = g(g("marker"), {
										id: D,
										markerHeight: w,
										markerWidth: C,
										orient: "auto",
										refX: l,
										refY: w / 2
									}), O = g(g("use"), {
										"xlink:href": "#" + E,
										transform: (a ? "rotate(180 " + C / 2 + " " + w / 2 + ") " : d) + "scale(" + C / T + "," + w / T + ")",
										"stroke-width": (1 / ((C / T + w / T) / 2)).toFixed(4)
									}), k.appendChild(O), p.defs.appendChild(k), h[D] = 1), g(O, u);
									var A = c * (S != "diamond" && S != "oval");
									a ? (o = r._.arrows.startdx * b || 0, s = e.getTotalLength(y.path) - A * b) : (o = A * b, s = e.getTotalLength(y.path) - (r._.arrows.enddx * b || 0)), (u = {})["marker-" + _] = "url(#" + D + ")", (s || o) && (u.d = e.getSubpath(y.path, o, s)), g(v, u), r._.arrows[_ + "Path"] = E, r._.arrows[_ + "Marker"] = D, r._.arrows[_ + "dx"] = A, r._.arrows[_ + "Type"] = S, r._.arrows[_ + "String"] = i;
								} else a ? (o = r._.arrows.startdx * b || 0, s = e.getTotalLength(y.path) - o) : (o = 0, s = e.getTotalLength(y.path) - (r._.arrows.enddx * b || 0)), r._.arrows[_ + "Path"] && g(v, { d: e.getSubpath(y.path, o, s) }), delete r._.arrows[_ + "Path"], delete r._.arrows[_ + "Marker"], delete r._.arrows[_ + "dx"], delete r._.arrows[_ + "Type"], delete r._.arrows[_ + "String"];
								for (u in h) if (h[t](u) && !h[u]) {
									var j = e._g.doc.getElementById(u);
									j && j.parentNode.removeChild(j);
								}
							}
						}, x = {
							"-": [3, 1],
							".": [1, 1],
							"-.": [
								3,
								1,
								1,
								1
							],
							"-..": [
								3,
								1,
								1,
								1,
								1,
								1
							],
							". ": [1, 3],
							"- ": [4, 3],
							"--": [8, 3],
							"- .": [
								4,
								3,
								1,
								3
							],
							"--.": [
								8,
								3,
								1,
								3
							],
							"--..": [
								8,
								3,
								1,
								3,
								1,
								3
							]
						}, S = function(e, t, r) {
							if (t = x[n(t).toLowerCase()]) {
								for (var i = e.attrs["stroke-width"] || "1", a = {
									round: i,
									square: i,
									butt: 0
								}[e.attrs["stroke-linecap"] || r["stroke-linecap"]] || 0, o = [], s = t.length; s--;) o[s] = t[s] * i + (s % 2 ? 1 : -1) * a;
								g(e.node, { "stroke-dasharray": o.join(",") });
							} else g(e.node, { "stroke-dasharray": "none" });
						}, C = function(r, a) {
							var c = r.node, u = r.attrs, f = c.style.visibility;
							for (var m in c.style.visibility = "hidden", a) if (a[t](m)) {
								if (!e._availableAttrs[t](m)) continue;
								var h = a[m];
								switch (u[m] = h, m) {
									case "blur":
										r.blur(h);
										break;
									case "title":
										var v = c.getElementsByTagName("title");
										if (v.length && (v = v[0])) v.firstChild.nodeValue = h;
										else {
											v = g("title");
											var x = e._g.doc.createTextNode(h);
											v.appendChild(x), c.appendChild(v);
										}
										break;
									case "href":
									case "target":
										var C = c.parentNode;
										if (C.tagName.toLowerCase() != "a") {
											var T = g("a");
											C.insertBefore(T, c), T.appendChild(c), C = T;
										}
										m == "target" ? C.setAttributeNS(p, "show", h == "blank" ? "new" : h) : C.setAttributeNS(p, m, h);
										break;
									case "cursor":
										c.style.cursor = h;
										break;
									case "transform":
										r.transform(h);
										break;
									case "arrow-start":
										b(r, h);
										break;
									case "arrow-end":
										b(r, h, 1);
										break;
									case "clip-rect":
										var E = n(h).split(l);
										if (E.length == 4) {
											r.clip && r.clip.parentNode.parentNode.removeChild(r.clip.parentNode);
											var D = g("clipPath"), O = g("rect");
											D.id = e.createUUID(), g(O, {
												x: E[0],
												y: E[1],
												width: E[2],
												height: E[3]
											}), D.appendChild(O), r.paper.defs.appendChild(D), g(c, { "clip-path": "url(#" + D.id + ")" }), r.clip = O;
										}
										if (!h) {
											var k = c.getAttribute("clip-path");
											if (k) {
												var A = e._g.doc.getElementById(k.replace(/(^url\(#|\)$)/g, d));
												A && A.parentNode.removeChild(A), g(c, { "clip-path": d }), delete r.clip;
											}
										}
										break;
									case "path":
										r.type == "path" && (g(c, { d: h ? u.path = e._pathToAbsolute(h) : "M0,0" }), r._.dirty = 1, r._.arrows && ("startString" in r._.arrows && b(r, r._.arrows.startString), "endString" in r._.arrows && b(r, r._.arrows.endString, 1)));
										break;
									case "width":
										if (c.setAttribute(m, h), r._.dirty = 1, !u.fx) break;
										m = "x", h = u.x;
									case "x": u.fx && (h = -u.x - (u.width || 0));
									case "rx": if (m == "rx" && r.type == "rect") break;
									case "cx":
										c.setAttribute(m, h), r.pattern && y(r), r._.dirty = 1;
										break;
									case "height":
										if (c.setAttribute(m, h), r._.dirty = 1, !u.fy) break;
										m = "y", h = u.y;
									case "y": u.fy && (h = -u.y - (u.height || 0));
									case "ry": if (m == "ry" && r.type == "rect") break;
									case "cy":
										c.setAttribute(m, h), r.pattern && y(r), r._.dirty = 1;
										break;
									case "r":
										r.type == "rect" ? g(c, {
											rx: h,
											ry: h
										}) : c.setAttribute(m, h), r._.dirty = 1;
										break;
									case "src":
										r.type == "image" && c.setAttributeNS(p, "href", h);
										break;
									case "stroke-width":
										r._.sx == 1 && r._.sy == 1 || (h /= o(s(r._.sx), s(r._.sy)) || 1), c.setAttribute(m, h), u["stroke-dasharray"] && S(r, u["stroke-dasharray"], a), r._.arrows && ("startString" in r._.arrows && b(r, r._.arrows.startString), "endString" in r._.arrows && b(r, r._.arrows.endString, 1));
										break;
									case "stroke-dasharray":
										S(r, h, a);
										break;
									case "fill":
										var j = n(h).match(e._ISURL);
										if (j) {
											D = g("pattern");
											var M = g("image");
											D.id = e.createUUID(), g(D, {
												x: 0,
												y: 0,
												patternUnits: "userSpaceOnUse",
												height: 1,
												width: 1
											}), g(M, {
												x: 0,
												y: 0,
												"xlink:href": j[1]
											}), D.appendChild(M), function(t) {
												e._preload(j[1], function() {
													var e = this.offsetWidth, n = this.offsetHeight;
													g(t, {
														width: e,
														height: n
													}), g(M, {
														width: e,
														height: n
													});
												});
											}(D), r.paper.defs.appendChild(D), g(c, { fill: "url(#" + D.id + ")" }), r.pattern = D, r.pattern && y(r);
											break;
										}
										var N = e.getRGB(h);
										if (N.error) {
											if ((r.type == "circle" || r.type == "ellipse" || n(h).charAt() != "r") && _(r, h)) {
												if ("opacity" in u || "fill-opacity" in u) {
													var P = e._g.doc.getElementById(c.getAttribute("fill").replace(/^url\(#|\)$/g, d));
													if (P) {
														var F = P.getElementsByTagName("stop");
														g(F[F.length - 1], { "stop-opacity": ("opacity" in u ? u.opacity : 1) * ("fill-opacity" in u ? u["fill-opacity"] : 1) });
													}
												}
												u.gradient = h, u.fill = "none";
												break;
											}
										} else delete a.gradient, delete u.gradient, !e.is(u.opacity, "undefined") && e.is(a.opacity, "undefined") && g(c, { opacity: u.opacity }), !e.is(u["fill-opacity"], "undefined") && e.is(a["fill-opacity"], "undefined") && g(c, { "fill-opacity": u["fill-opacity"] });
										N[t]("opacity") && g(c, { "fill-opacity": N.opacity > 1 ? N.opacity / 100 : N.opacity });
									case "stroke":
										N = e.getRGB(h), c.setAttribute(m, N.hex), m == "stroke" && N[t]("opacity") && g(c, { "stroke-opacity": N.opacity > 1 ? N.opacity / 100 : N.opacity }), m == "stroke" && r._.arrows && ("startString" in r._.arrows && b(r, r._.arrows.startString), "endString" in r._.arrows && b(r, r._.arrows.endString, 1));
										break;
									case "gradient":
										(r.type == "circle" || r.type == "ellipse" || n(h).charAt() != "r") && _(r, h);
										break;
									case "opacity": u.gradient && !u[t]("stroke-opacity") && g(c, { "stroke-opacity": h > 1 ? h / 100 : h });
									case "fill-opacity": if (u.gradient) {
										(P = e._g.doc.getElementById(c.getAttribute("fill").replace(/^url\(#|\)$/g, d))) && (F = P.getElementsByTagName("stop"), g(F[F.length - 1], { "stop-opacity": h }));
										break;
									}
									default:
										m == "font-size" && (h = i(h, 10) + "px");
										var I = m.replace(/(\-.)/g, function(e) {
											return e.substring(1).toUpperCase();
										});
										c.style[I] = h, r._.dirty = 1, c.setAttribute(m, h);
								}
							}
							w(r, a), c.style.visibility = f;
						}, w = function(r, a) {
							if (r.type == "text" && (a[t]("text") || a[t]("font") || a[t]("font-size") || a[t]("x") || a[t]("y"))) {
								var o = r.attrs, s = r.node, c = s.firstChild ? i(e._g.doc.defaultView.getComputedStyle(s.firstChild, d).getPropertyValue("font-size"), 10) : 10;
								if (a[t]("text")) {
									for (o.text = a.text; s.firstChild;) s.removeChild(s.firstChild);
									for (var l, u = n(a.text).split("\n"), f = [], p = 0, m = u.length; p < m; p++) l = g("tspan"), p && g(l, {
										dy: 1.2 * c,
										x: o.x
									}), l.appendChild(e._g.doc.createTextNode(u[p])), s.appendChild(l), f[p] = l;
								} else for (p = 0, m = (f = s.getElementsByTagName("tspan")).length; p < m; p++) p ? g(f[p], {
									dy: 1.2 * c,
									x: o.x
								}) : g(f[0], { dy: 0 });
								g(s, {
									x: o.x,
									y: o.y
								}), r._.dirty = 1;
								var h = r._getBBox(), _ = o.y - (h.y + h.height / 2);
								_ && e.is(_, "finite") && g(f[0], { dy: _ });
							}
						}, T = function(e) {
							return e.parentNode && e.parentNode.tagName.toLowerCase() === "a" ? e.parentNode : e;
						}, E = function(t, n) {
							this[0] = this.node = t, t.raphael = !0, this.id = ("0000" + (Math.random() * 36 ** 5 << 0).toString(36)).slice(-5), t.raphaelid = this.id, this.matrix = e.matrix(), this.realPath = null, this.paper = n, this.attrs = this.attrs || {}, this._ = {
								transform: [],
								sx: 1,
								sy: 1,
								deg: 0,
								dx: 0,
								dy: 0,
								dirty: 1
							}, !n.bottom && (n.bottom = this), this.prev = n.top, n.top && (n.top.next = this), n.top = this, this.next = null;
						}, D = e.el;
						E.prototype = D, D.constructor = E, e._engine.path = function(e, t) {
							var n = g("path");
							t.canvas && t.canvas.appendChild(n);
							var r = new E(n, t);
							return r.type = "path", C(r, {
								fill: "none",
								stroke: "#000",
								path: e
							}), r;
						}, D.rotate = function(e, t, i) {
							if (this.removed) return this;
							if ((e = n(e).split(l)).length - 1 && (t = r(e[1]), i = r(e[2])), e = r(e[0]), i ?? (t = i), t == null || i == null) {
								var a = this.getBBox(1);
								t = a.x + a.width / 2, i = a.y + a.height / 2;
							}
							return this.transform(this._.transform.concat([[
								"r",
								e,
								t,
								i
							]])), this;
						}, D.scale = function(e, t, i, a) {
							if (this.removed) return this;
							if ((e = n(e).split(l)).length - 1 && (t = r(e[1]), i = r(e[2]), a = r(e[3])), e = r(e[0]), t ??= e, a ?? (i = a), i == null || a == null) var o = this.getBBox(1);
							return i ??= o.x + o.width / 2, a ??= o.y + o.height / 2, this.transform(this._.transform.concat([[
								"s",
								e,
								t,
								i,
								a
							]])), this;
						}, D.translate = function(e, t) {
							return this.removed ? this : ((e = n(e).split(l)).length - 1 && (t = r(e[1])), e = r(e[0]) || 0, t = +t || 0, this.transform(this._.transform.concat([[
								"t",
								e,
								t
							]])), this);
						}, D.transform = function(n) {
							var r = this._;
							if (n == null) return r.transform;
							if (e._extractTransform(this, n), this.clip && g(this.clip, { transform: this.matrix.invert() }), this.pattern && y(this), this.node && g(this.node, { transform: this.matrix }), r.sx != 1 || r.sy != 1) {
								var i = this.attrs[t]("stroke-width") ? this.attrs["stroke-width"] : 1;
								this.attr({ "stroke-width": i });
							}
							return this;
						}, D.hide = function() {
							return this.removed || (this.node.style.display = "none"), this;
						}, D.show = function() {
							return this.removed || (this.node.style.display = ""), this;
						}, D.remove = function() {
							var t = T(this.node);
							if (!this.removed && t.parentNode) {
								var n = this.paper;
								for (var r in n.__set__ && n.__set__.exclude(this), u.unbind("raphael.*.*." + this.id), this.gradient && n.defs.removeChild(this.gradient), e._tear(this, n), t.parentNode.removeChild(t), this.removeData(), this) this[r] = typeof this[r] == "function" ? e._removedFactory(r) : null;
								this.removed = !0;
							}
						}, D._getBBox = function() {
							if (this.node.style.display == "none") {
								this.show();
								var e = !0;
							}
							var t, n = !1;
							this.paper.canvas.parentElement ? t = this.paper.canvas.parentElement.style : this.paper.canvas.parentNode && (t = this.paper.canvas.parentNode.style), t && t.display == "none" && (n = !0, t.display = "");
							var r = {};
							try {
								r = this.node.getBBox();
							} catch {
								r = {
									x: this.node.clientLeft,
									y: this.node.clientTop,
									width: this.node.clientWidth,
									height: this.node.clientHeight
								};
							} finally {
								r ||= {}, n && (t.display = "none");
							}
							return e && this.hide(), r;
						}, D.attr = function(n, r) {
							if (this.removed) return this;
							if (n == null) {
								var i = {};
								for (var a in this.attrs) this.attrs[t](a) && (i[a] = this.attrs[a]);
								return i.gradient && i.fill == "none" && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i;
							}
							if (r == null && e.is(n, "string")) {
								if (n == "fill" && this.attrs.fill == "none" && this.attrs.gradient) return this.attrs.gradient;
								if (n == "transform") return this._.transform;
								for (var o = n.split(l), s = {}, c = 0, d = o.length; c < d; c++) (n = o[c]) in this.attrs ? s[n] = this.attrs[n] : e.is(this.paper.customAttributes[n], "function") ? s[n] = this.paper.customAttributes[n].def : s[n] = e._availableAttrs[n];
								return d - 1 ? s : s[o[0]];
							}
							if (r == null && e.is(n, "array")) {
								for (s = {}, c = 0, d = n.length; c < d; c++) s[n[c]] = this.attr(n[c]);
								return s;
							}
							if (r != null) {
								var f = {};
								f[n] = r;
							} else n != null && e.is(n, "object") && (f = n);
							for (var p in f) u("raphael.attr." + p + "." + this.id, this, f[p]);
							for (p in this.paper.customAttributes) if (this.paper.customAttributes[t](p) && f[t](p) && e.is(this.paper.customAttributes[p], "function")) {
								var m = this.paper.customAttributes[p].apply(this, [].concat(f[p]));
								for (var h in this.attrs[p] = f[p], m) m[t](h) && (f[h] = m[h]);
							}
							return C(this, f), this;
						}, D.toFront = function() {
							if (this.removed) return this;
							var t = T(this.node);
							t.parentNode.appendChild(t);
							var n = this.paper;
							return n.top != this && e._tofront(this, n), this;
						}, D.toBack = function() {
							if (this.removed) return this;
							var t = T(this.node), n = t.parentNode;
							return n.insertBefore(t, n.firstChild), e._toback(this, this.paper), this.paper, this;
						}, D.insertAfter = function(t) {
							if (this.removed || !t) return this;
							var n = T(this.node), r = T(t.node || t[t.length - 1].node);
							return r.nextSibling ? r.parentNode.insertBefore(n, r.nextSibling) : r.parentNode.appendChild(n), e._insertafter(this, t, this.paper), this;
						}, D.insertBefore = function(t) {
							if (this.removed || !t) return this;
							var n = T(this.node), r = T(t.node || t[0].node);
							return r.parentNode.insertBefore(n, r), e._insertbefore(this, t, this.paper), this;
						}, D.blur = function(t) {
							var n = this;
							if (+t != 0) {
								var r = g("filter"), i = g("feGaussianBlur");
								n.attrs.blur = t, r.id = e.createUUID(), g(i, { stdDeviation: +t || 1.5 }), r.appendChild(i), n.paper.defs.appendChild(r), n._blur = r, g(n.node, { filter: "url(#" + r.id + ")" });
							} else n._blur && (n._blur.parentNode.removeChild(n._blur), delete n._blur, delete n.attrs.blur), n.node.removeAttribute("filter");
							return n;
						}, e._engine.circle = function(e, t, n, r) {
							var i = g("circle");
							e.canvas && e.canvas.appendChild(i);
							var a = new E(i, e);
							return a.attrs = {
								cx: t,
								cy: n,
								r,
								fill: "none",
								stroke: "#000"
							}, a.type = "circle", g(i, a.attrs), a;
						}, e._engine.rect = function(e, t, n, r, i, a) {
							var o = g("rect");
							e.canvas && e.canvas.appendChild(o);
							var s = new E(o, e);
							return s.attrs = {
								x: t,
								y: n,
								width: r,
								height: i,
								rx: a || 0,
								ry: a || 0,
								fill: "none",
								stroke: "#000"
							}, s.type = "rect", g(o, s.attrs), s;
						}, e._engine.ellipse = function(e, t, n, r, i) {
							var a = g("ellipse");
							e.canvas && e.canvas.appendChild(a);
							var o = new E(a, e);
							return o.attrs = {
								cx: t,
								cy: n,
								rx: r,
								ry: i,
								fill: "none",
								stroke: "#000"
							}, o.type = "ellipse", g(a, o.attrs), o;
						}, e._engine.image = function(e, t, n, r, i, a) {
							var o = g("image");
							g(o, {
								x: n,
								y: r,
								width: i,
								height: a,
								preserveAspectRatio: "none"
							}), o.setAttributeNS(p, "href", t), e.canvas && e.canvas.appendChild(o);
							var s = new E(o, e);
							return s.attrs = {
								x: n,
								y: r,
								width: i,
								height: a,
								src: t
							}, s.type = "image", s;
						}, e._engine.text = function(t, n, r, i) {
							var a = g("text");
							t.canvas && t.canvas.appendChild(a);
							var o = new E(a, t);
							return o.attrs = {
								x: n,
								y: r,
								"text-anchor": "middle",
								text: i,
								"font-family": e._availableAttrs["font-family"],
								"font-size": e._availableAttrs["font-size"],
								stroke: "none",
								fill: "#000"
							}, o.type = "text", C(o, o.attrs), o;
						}, e._engine.setSize = function(e, t) {
							return this.width = e || this.width, this.height = t || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this;
						}, e._engine.create = function() {
							var t = e._getContainer.apply(0, arguments), n = t && t.container;
							if (!n) throw Error("SVG container not found.");
							var r, i = t.x, a = t.y, o = t.width, s = t.height, c = g("svg"), l = "overflow:hidden;";
							return i ||= 0, a ||= 0, g(c, {
								height: s ||= 342,
								version: 1.1,
								width: o ||= 512,
								xmlns: "http://www.w3.org/2000/svg",
								"xmlns:xlink": "http://www.w3.org/1999/xlink"
							}), n == 1 ? (c.style.cssText = l + "position:absolute;left:" + i + "px;top:" + a + "px", e._g.doc.body.appendChild(c), r = 1) : (c.style.cssText = l + "position:relative", n.firstChild ? n.insertBefore(c, n.firstChild) : n.appendChild(c)), (n = new e._Paper()).width = o, n.height = s, n.canvas = c, n.clear(), n._left = n._top = 0, r && (n.renderfix = function() {}), n.renderfix(), n;
						}, e._engine.setViewBox = function(e, t, n, r, i) {
							u("raphael.setViewBox", this, this._viewBox, [
								e,
								t,
								n,
								r,
								i
							]);
							var a, s, c = this.getSize(), l = o(n / c.width, r / c.height), d = this.top, p = i ? "xMidYMid meet" : "xMinYMin";
							for (e == null ? (this._vbSize && (l = 1), delete this._vbSize, a = "0 0 " + this.width + f + this.height) : (this._vbSize = l, a = e + f + t + f + n + f + r), g(this.canvas, {
								viewBox: a,
								preserveAspectRatio: p
							}); l && d;) s = "stroke-width" in d.attrs ? d.attrs["stroke-width"] : 1, d.attr({ "stroke-width": s }), d._.dirty = 1, d._.dirtyT = 1, d = d.prev;
							return this._viewBox = [
								e,
								t,
								n,
								r,
								!!i
							], this;
						}, e.prototype.renderfix = function() {
							var e, t = this.canvas, n = t.style;
							try {
								e = t.getScreenCTM() || t.createSVGMatrix();
							} catch {
								e = t.createSVGMatrix();
							}
							var r = -e.e % 1, i = -e.f % 1;
							(r || i) && (r && (this._left = (this._left + r) % 1, n.left = this._left + "px"), i && (this._top = (this._top + i) % 1, n.top = this._top + "px"));
						}, e.prototype.clear = function() {
							e.eve("raphael.clear", this);
							for (var t = this.canvas; t.firstChild;) t.removeChild(t.firstChild);
							this.bottom = this.top = null, (this.desc = g("desc")).appendChild(e._g.doc.createTextNode("Created with Raphaël " + e.version)), t.appendChild(this.desc), t.appendChild(this.defs = g("defs"));
						}, e.prototype.remove = function() {
							for (var t in u("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this) this[t] = typeof this[t] == "function" ? e._removedFactory(t) : null;
						};
						var O = e.st;
						for (var k in D) D[t](k) && !O[t](k) && (O[k] = function(e) {
							return function() {
								var t = arguments;
								return this.forEach(function(n) {
									n[e].apply(n, t);
								});
							};
						}(k));
					}
				}.apply(t, r)) === void 0 || (e.exports = i);
			},
			function(e, t, n) {
				var r = [n(0)], i;
				(i = function(e) {
					if (!e || e.vml) {
						var t = "hasOwnProperty", n = String, r = parseFloat, i = Math, a = i.round, o = i.max, s = i.min, c = i.abs, l = /[, ]+/, u = e.eve, d = " ", f = "", p = {
							M: "m",
							L: "l",
							C: "c",
							Z: "x",
							m: "t",
							l: "r",
							c: "v",
							z: "x"
						}, m = /([clmz]),?([^clmz]*)/gi, h = / progid:\S+Blur\([^\)]+\)/g, g = /-?[^,\s-]+/g, _ = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)", v = 21600, y = {
							path: 1,
							rect: 1,
							image: 1
						}, b = {
							circle: 1,
							ellipse: 1
						}, x = function(t, n, r) {
							var i = e.matrix();
							return i.rotate(-t, .5, .5), {
								dx: i.x(n, r),
								dy: i.y(n, r)
							};
						}, S = function(e, t, n, r, i, a) {
							var o = e._, s = e.matrix, l = o.fillpos, u = e.node, f = u.style, p = 1, m = "", h = v / t, g = v / n;
							if (f.visibility = "hidden", t && n) {
								if (u.coordsize = c(h) + d + c(g), f.rotation = a * (t * n < 0 ? -1 : 1), a) {
									var _ = x(a, r, i);
									r = _.dx, i = _.dy;
								}
								if (t < 0 && (m += "x"), n < 0 && (m += " y") && (p = -1), f.flip = m, u.coordorigin = r * -h + d + i * -g, l || o.fillsize) {
									var y = u.getElementsByTagName("fill");
									y &&= y[0], u.removeChild(y), l && (_ = x(a, s.x(l[0], l[1]), s.y(l[0], l[1])), y.position = _.dx * p + d + _.dy * p), o.fillsize && (y.size = o.fillsize[0] * c(t) + d + o.fillsize[1] * c(n)), u.appendChild(y);
								}
								f.visibility = "visible";
							}
						};
						e.toString = function() {
							return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version;
						};
						var C, w = function(e, t, r) {
							for (var i = n(t).toLowerCase().split("-"), a = r ? "end" : "start", o = i.length, s = "classic", c = "medium", l = "medium"; o--;) switch (i[o]) {
								case "block":
								case "classic":
								case "oval":
								case "diamond":
								case "open":
								case "none":
									s = i[o];
									break;
								case "wide":
								case "narrow":
									l = i[o];
									break;
								case "long":
								case "short": c = i[o];
							}
							var u = e.node.getElementsByTagName("stroke")[0];
							u[a + "arrow"] = s, u[a + "arrowlength"] = c, u[a + "arrowwidth"] = l;
						}, T = function(i, c) {
							i.attrs = i.attrs || {};
							var u = i.node, h = i.attrs, _ = u.style, x = y[i.type] && (c.x != h.x || c.y != h.y || c.width != h.width || c.height != h.height || c.cx != h.cx || c.cy != h.cy || c.rx != h.rx || c.ry != h.ry || c.r != h.r), T = b[i.type] && (h.cx != c.cx || h.cy != c.cy || h.r != c.r || h.rx != c.rx || h.ry != c.ry), D = i;
							for (var O in c) c[t](O) && (h[O] = c[O]);
							if (x && (h.path = e._getPath[i.type](i), i._.dirty = 1), c.href && (u.href = c.href), c.title && (u.title = c.title), c.target && (u.target = c.target), c.cursor && (_.cursor = c.cursor), "blur" in c && i.blur(c.blur), (c.path && i.type == "path" || x) && (u.path = function(t) {
								var r = /[ahqstv]/gi, i = e._pathToAbsolute;
								if (n(t).match(r) && (i = e._path2curve), r = /[clmz]/g, i == e._pathToAbsolute && !n(t).match(r)) {
									var o = n(t).replace(m, function(e, t, n) {
										var r = [], i = t.toLowerCase() == "m", o = p[t];
										return n.replace(g, function(e) {
											i && r.length == 2 && (o += r + p[t == "m" ? "l" : "L"], r = []), r.push(a(e * v));
										}), o + r;
									});
									return o;
								}
								var s, c, l = i(t);
								o = [];
								for (var u = 0, h = l.length; u < h; u++) {
									s = l[u], (c = l[u][0].toLowerCase()) == "z" && (c = "x");
									for (var _ = 1, y = s.length; _ < y; _++) c += a(s[_] * v) + (_ == y - 1 ? f : ",");
									o.push(c);
								}
								return o.join(d);
							}(~n(h.path).toLowerCase().indexOf("r") ? e._pathToAbsolute(h.path) : h.path), i._.dirty = 1, i.type == "image" && (i._.fillpos = [h.x, h.y], i._.fillsize = [h.width, h.height], S(i, 1, 1, 0, 0, 0))), "transform" in c && i.transform(c.transform), T) {
								var k = +h.cx, A = +h.cy, j = +h.rx || +h.r || 0, M = +h.ry || +h.r || 0;
								u.path = e.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", a((k - j) * v), a((A - M) * v), a((k + j) * v), a((A + M) * v), a(k * v)), i._.dirty = 1;
							}
							if ("clip-rect" in c) {
								var N = n(c["clip-rect"]).split(l);
								if (N.length == 4) {
									N[2] = +N[2] + +N[0], N[3] = +N[3] + +N[1];
									var P = u.clipRect || e._g.doc.createElement("div"), F = P.style;
									F.clip = e.format("rect({1}px {2}px {3}px {0}px)", N), u.clipRect ||= (F.position = "absolute", F.top = 0, F.left = 0, F.width = i.paper.width + "px", F.height = i.paper.height + "px", u.parentNode.insertBefore(P, u), P.appendChild(u), P);
								}
								c["clip-rect"] || u.clipRect && (u.clipRect.style.clip = "auto");
							}
							if (i.textpath) {
								var I = i.textpath.style;
								c.font && (I.font = c.font), c["font-family"] && (I.fontFamily = "\"" + c["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, f) + "\""), c["font-size"] && (I.fontSize = c["font-size"]), c["font-weight"] && (I.fontWeight = c["font-weight"]), c["font-style"] && (I.fontStyle = c["font-style"]);
							}
							if ("arrow-start" in c && w(D, c["arrow-start"]), "arrow-end" in c && w(D, c["arrow-end"], 1), c.opacity != null || c.fill != null || c.src != null || c.stroke != null || c["stroke-width"] != null || c["stroke-opacity"] != null || c["fill-opacity"] != null || c["stroke-dasharray"] != null || c["stroke-miterlimit"] != null || c["stroke-linejoin"] != null || c["stroke-linecap"] != null) {
								var L = u.getElementsByTagName("fill");
								if (!(L &&= L[0]) && (L = C("fill")), i.type == "image" && c.src && (L.src = c.src), c.fill && (L.on = !0), L.on != null && c.fill != "none" && c.fill !== null || (L.on = !1), L.on && c.fill) {
									var R = n(c.fill).match(e._ISURL);
									if (R) {
										L.parentNode == u && u.removeChild(L), L.rotate = !0, L.src = R[1], L.type = "tile";
										var z = i.getBBox(1);
										L.position = z.x + d + z.y, i._.fillpos = [z.x, z.y], e._preload(R[1], function() {
											i._.fillsize = [this.offsetWidth, this.offsetHeight];
										});
									} else L.color = e.getRGB(c.fill).hex, L.src = f, L.type = "solid", e.getRGB(c.fill).error && (D.type in {
										circle: 1,
										ellipse: 1
									} || n(c.fill).charAt() != "r") && E(D, c.fill, L) && (h.fill = "none", h.gradient = c.fill, L.rotate = !1);
								}
								if ("fill-opacity" in c || "opacity" in c) {
									var B = ((+h["fill-opacity"] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+e.getRGB(c.fill).o + 1 || 2) - 1);
									B = s(o(B, 0), 1), L.opacity = B, L.src && (L.color = "none");
								}
								u.appendChild(L);
								var V = u.getElementsByTagName("stroke") && u.getElementsByTagName("stroke")[0], H = !1;
								!V && (H = V = C("stroke")), (c.stroke && c.stroke != "none" || c["stroke-width"] || c["stroke-opacity"] != null || c["stroke-dasharray"] || c["stroke-miterlimit"] || c["stroke-linejoin"] || c["stroke-linecap"]) && (V.on = !0), (c.stroke == "none" || c.stroke === null || V.on == null || c.stroke == 0 || c["stroke-width"] == 0) && (V.on = !1);
								var ee = e.getRGB(c.stroke);
								V.on && c.stroke && (V.color = ee.hex), B = ((+h["stroke-opacity"] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+ee.o + 1 || 2) - 1);
								var U = .75 * (r(c["stroke-width"]) || 1);
								if (B = s(o(B, 0), 1), c["stroke-width"] ?? (U = h["stroke-width"]), c["stroke-width"] && (V.weight = U), U && U < 1 && (B *= U) && (V.weight = 1), V.opacity = B, c["stroke-linejoin"] && (V.joinstyle = c["stroke-linejoin"] || "miter"), V.miterlimit = c["stroke-miterlimit"] || 8, c["stroke-linecap"] && (V.endcap = c["stroke-linecap"] == "butt" ? "flat" : c["stroke-linecap"] == "square" ? "square" : "round"), "stroke-dasharray" in c) {
									var W = {
										"-": "shortdash",
										".": "shortdot",
										"-.": "shortdashdot",
										"-..": "shortdashdotdot",
										". ": "dot",
										"- ": "dash",
										"--": "longdash",
										"- .": "dashdot",
										"--.": "longdashdot",
										"--..": "longdashdotdot"
									};
									V.dashstyle = W[t](c["stroke-dasharray"]) ? W[c["stroke-dasharray"]] : f;
								}
								H && u.appendChild(V);
							}
							if (D.type == "text") {
								D.paper.canvas.style.display = f;
								var G = D.paper.span, te = h.font && h.font.match(/\d+(?:\.\d*)?(?=px)/);
								_ = G.style, h.font && (_.font = h.font), h["font-family"] && (_.fontFamily = h["font-family"]), h["font-weight"] && (_.fontWeight = h["font-weight"]), h["font-style"] && (_.fontStyle = h["font-style"]), te = r(h["font-size"] || te && te[0]) || 10, _.fontSize = 100 * te + "px", D.textpath.string && (G.innerHTML = n(D.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
								var ne = G.getBoundingClientRect();
								D.W = h.w = (ne.right - ne.left) / 100, D.H = h.h = (ne.bottom - ne.top) / 100, D.X = h.x, D.Y = h.y + D.H / 2, ("x" in c || "y" in c) && (D.path.v = e.format("m{0},{1}l{2},{1}", a(h.x * v), a(h.y * v), a(h.x * v) + 1));
								for (var re = [
									"x",
									"y",
									"text",
									"font",
									"font-family",
									"font-weight",
									"font-style",
									"font-size"
								], K = 0, ie = re.length; K < ie; K++) if (re[K] in c) {
									D._.dirty = 1;
									break;
								}
								switch (h["text-anchor"]) {
									case "start":
										D.textpath.style["v-text-align"] = "left", D.bbx = D.W / 2;
										break;
									case "end":
										D.textpath.style["v-text-align"] = "right", D.bbx = -D.W / 2;
										break;
									default: D.textpath.style["v-text-align"] = "center", D.bbx = 0;
								}
								D.textpath.style["v-text-kern"] = !0;
							}
						}, E = function(t, a, o) {
							t.attrs = t.attrs || {}, t.attrs;
							var s = Math.pow, c = "linear", l = ".5 .5";
							if (t.attrs.gradient = a, a = (a = n(a).replace(e._radial_gradient, function(e, t, n) {
								return c = "radial", t && n && (t = r(t), n = r(n), s(t - .5, 2) + s(n - .5, 2) > .25 && (n = i.sqrt(.25 - s(t - .5, 2)) * (2 * (n > .5) - 1) + .5), l = t + d + n), f;
							})).split(/\s*\-\s*/), c == "linear") {
								var u = a.shift();
								if (u = -r(u), isNaN(u)) return null;
							}
							var p = e._parseDots(a);
							if (!p) return null;
							if (t = t.shape || t.node, p.length) {
								t.removeChild(o), o.on = !0, o.method = "none", o.color = p[0].color, o.color2 = p[p.length - 1].color;
								for (var m = [], h = 0, g = p.length; h < g; h++) p[h].offset && m.push(p[h].offset + d + p[h].color);
								o.colors = m.length ? m.join() : "0% " + o.color, c == "radial" ? (o.type = "gradientTitle", o.focus = "100%", o.focussize = "0 0", o.focusposition = l, o.angle = 0) : (o.type = "gradient", o.angle = (270 - u) % 360), t.appendChild(o);
							}
							return 1;
						}, D = function(t, n) {
							this[0] = this.node = t, t.raphael = !0, this.id = e._oid++, t.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = n, this.matrix = e.matrix(), this._ = {
								transform: [],
								sx: 1,
								sy: 1,
								dx: 0,
								dy: 0,
								deg: 0,
								dirty: 1,
								dirtyT: 1
							}, !n.bottom && (n.bottom = this), this.prev = n.top, n.top && (n.top.next = this), n.top = this, this.next = null;
						}, O = e.el;
						D.prototype = O, O.constructor = D, O.transform = function(t) {
							if (t == null) return this._.transform;
							var r, i = this.paper._viewBoxShift, a = i ? "s" + [i.scale, i.scale] + "-1-1t" + [i.dx, i.dy] : f;
							i && (r = t = n(t).replace(/\.{3}|\u2026/g, this._.transform || f)), e._extractTransform(this, a + t);
							var o, s = this.matrix.clone(), c = this.skew, l = this.node, u = ~n(this.attrs.fill).indexOf("-"), p = !n(this.attrs.fill).indexOf("url(");
							if (s.translate(1, 1), p || u || this.type == "image") {
								if (c.matrix = "1 0 0 1", c.offset = "0 0", o = s.split(), u && o.noRotation || !o.isSimple) {
									l.style.filter = s.toFilter();
									var m = this.getBBox(), h = this.getBBox(1), g = m.x - h.x, _ = m.y - h.y;
									l.coordorigin = g * -v + d + _ * -v, S(this, 1, 1, g, _, 0);
								} else l.style.filter = f, S(this, o.scalex, o.scaley, o.dx, o.dy, o.rotate);
							} else l.style.filter = f, c.matrix = n(s), c.offset = s.offset();
							return r !== null && (this._.transform = r, e._extractTransform(this, r)), this;
						}, O.rotate = function(e, t, i) {
							if (this.removed) return this;
							if (e != null) {
								if ((e = n(e).split(l)).length - 1 && (t = r(e[1]), i = r(e[2])), e = r(e[0]), i ?? (t = i), t == null || i == null) {
									var a = this.getBBox(1);
									t = a.x + a.width / 2, i = a.y + a.height / 2;
								}
								return this._.dirtyT = 1, this.transform(this._.transform.concat([[
									"r",
									e,
									t,
									i
								]])), this;
							}
						}, O.translate = function(e, t) {
							return this.removed ? this : ((e = n(e).split(l)).length - 1 && (t = r(e[1])), e = r(e[0]) || 0, t = +t || 0, this._.bbox && (this._.bbox.x += e, this._.bbox.y += t), this.transform(this._.transform.concat([[
								"t",
								e,
								t
							]])), this);
						}, O.scale = function(e, t, i, a) {
							if (this.removed) return this;
							if ((e = n(e).split(l)).length - 1 && (t = r(e[1]), i = r(e[2]), a = r(e[3]), isNaN(i) && (i = null), isNaN(a) && (a = null)), e = r(e[0]), t ??= e, a ?? (i = a), i == null || a == null) var o = this.getBBox(1);
							return i ??= o.x + o.width / 2, a ??= o.y + o.height / 2, this.transform(this._.transform.concat([[
								"s",
								e,
								t,
								i,
								a
							]])), this._.dirtyT = 1, this;
						}, O.hide = function() {
							return !this.removed && (this.node.style.display = "none"), this;
						}, O.show = function() {
							return !this.removed && (this.node.style.display = f), this;
						}, O.auxGetBBox = e.el.getBBox, O.getBBox = function() {
							var e = this.auxGetBBox();
							if (this.paper && this.paper._viewBoxShift) {
								var t = {}, n = 1 / this.paper._viewBoxShift.scale;
								return t.x = e.x - this.paper._viewBoxShift.dx, t.x *= n, t.y = e.y - this.paper._viewBoxShift.dy, t.y *= n, t.width = e.width * n, t.height = e.height * n, t.x2 = t.x + t.width, t.y2 = t.y + t.height, t;
							}
							return e;
						}, O._getBBox = function() {
							return this.removed ? {} : {
								x: this.X + (this.bbx || 0) - this.W / 2,
								y: this.Y - this.H,
								width: this.W,
								height: this.H
							};
						}, O.remove = function() {
							if (!this.removed && this.node.parentNode) {
								for (var t in this.paper.__set__ && this.paper.__set__.exclude(this), e.eve.unbind("raphael.*.*." + this.id), e._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape), this) this[t] = typeof this[t] == "function" ? e._removedFactory(t) : null;
								this.removed = !0;
							}
						}, O.attr = function(n, r) {
							if (this.removed) return this;
							if (n == null) {
								var i = {};
								for (var a in this.attrs) this.attrs[t](a) && (i[a] = this.attrs[a]);
								return i.gradient && i.fill == "none" && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i;
							}
							if (r == null && e.is(n, "string")) {
								if (n == "fill" && this.attrs.fill == "none" && this.attrs.gradient) return this.attrs.gradient;
								for (var o = n.split(l), s = {}, c = 0, d = o.length; c < d; c++) (n = o[c]) in this.attrs ? s[n] = this.attrs[n] : e.is(this.paper.customAttributes[n], "function") ? s[n] = this.paper.customAttributes[n].def : s[n] = e._availableAttrs[n];
								return d - 1 ? s : s[o[0]];
							}
							if (this.attrs && r == null && e.is(n, "array")) {
								for (s = {}, c = 0, d = n.length; c < d; c++) s[n[c]] = this.attr(n[c]);
								return s;
							}
							var f;
							for (var p in r != null && ((f = {})[n] = r), r == null && e.is(n, "object") && (f = n), f) u("raphael.attr." + p + "." + this.id, this, f[p]);
							if (f) {
								for (p in this.paper.customAttributes) if (this.paper.customAttributes[t](p) && f[t](p) && e.is(this.paper.customAttributes[p], "function")) {
									var m = this.paper.customAttributes[p].apply(this, [].concat(f[p]));
									for (var h in this.attrs[p] = f[p], m) m[t](h) && (f[h] = m[h]);
								}
								f.text && this.type == "text" && (this.textpath.string = f.text), T(this, f);
							}
							return this;
						}, O.toFront = function() {
							return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && e._tofront(this, this.paper), this;
						}, O.toBack = function() {
							return this.removed || this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), e._toback(this, this.paper)), this;
						}, O.insertAfter = function(t) {
							return this.removed ? this : (t.constructor == e.st.constructor && (t = t[t.length - 1]), t.node.nextSibling ? t.node.parentNode.insertBefore(this.node, t.node.nextSibling) : t.node.parentNode.appendChild(this.node), e._insertafter(this, t, this.paper), this);
						}, O.insertBefore = function(t) {
							return this.removed ? this : (t.constructor == e.st.constructor && (t = t[0]), t.node.parentNode.insertBefore(this.node, t.node), e._insertbefore(this, t, this.paper), this);
						}, O.blur = function(t) {
							var n = this.node.runtimeStyle, r = n.filter;
							return r = r.replace(h, f), +t == 0 ? (n.filter = r, n.margin = 0, delete this.attrs.blur) : (this.attrs.blur = t, n.filter = r + d + " progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+t || 1.5) + ")", n.margin = e.format("-{0}px 0 0 -{0}px", a(+t || 1.5))), this;
						}, e._engine.path = function(e, t) {
							var n = C("shape");
							n.style.cssText = _, n.coordsize = v + d + v, n.coordorigin = t.coordorigin;
							var r = new D(n, t), i = {
								fill: "none",
								stroke: "#000"
							};
							e && (i.path = e), r.type = "path", r.path = [], r.Path = f, T(r, i), t.canvas && t.canvas.appendChild(n);
							var a = C("skew");
							return a.on = !0, n.appendChild(a), r.skew = a, r.transform(f), r;
						}, e._engine.rect = function(t, n, r, i, a, o) {
							var s = e._rectPath(n, r, i, a, o), c = t.path(s), l = c.attrs;
							return c.X = l.x = n, c.Y = l.y = r, c.W = l.width = i, c.H = l.height = a, l.r = o, l.path = s, c.type = "rect", c;
						}, e._engine.ellipse = function(e, t, n, r, i) {
							var a = e.path();
							return a.attrs, a.X = t - r, a.Y = n - i, a.W = 2 * r, a.H = 2 * i, a.type = "ellipse", T(a, {
								cx: t,
								cy: n,
								rx: r,
								ry: i
							}), a;
						}, e._engine.circle = function(e, t, n, r) {
							var i = e.path();
							return i.attrs, i.X = t - r, i.Y = n - r, i.W = i.H = 2 * r, i.type = "circle", T(i, {
								cx: t,
								cy: n,
								r
							}), i;
						}, e._engine.image = function(t, n, r, i, a, o) {
							var s = e._rectPath(r, i, a, o), c = t.path(s).attr({ stroke: "none" }), l = c.attrs, u = c.node, d = u.getElementsByTagName("fill")[0];
							return l.src = n, c.X = l.x = r, c.Y = l.y = i, c.W = l.width = a, c.H = l.height = o, l.path = s, c.type = "image", d.parentNode == u && u.removeChild(d), d.rotate = !0, d.src = n, d.type = "tile", c._.fillpos = [r, i], c._.fillsize = [a, o], u.appendChild(d), S(c, 1, 1, 0, 0, 0), c;
						}, e._engine.text = function(t, r, i, o) {
							var s = C("shape"), c = C("path"), l = C("textpath");
							r ||= 0, i ||= 0, o ||= "", c.v = e.format("m{0},{1}l{2},{1}", a(r * v), a(i * v), a(r * v) + 1), c.textpathok = !0, l.string = n(o), l.on = !0, s.style.cssText = _, s.coordsize = v + d + v, s.coordorigin = "0 0";
							var u = new D(s, t), p = {
								fill: "#000",
								stroke: "none",
								font: e._availableAttrs.font,
								text: o
							};
							u.shape = s, u.path = c, u.textpath = l, u.type = "text", u.attrs.text = n(o), u.attrs.x = r, u.attrs.y = i, u.attrs.w = 1, u.attrs.h = 1, T(u, p), s.appendChild(l), s.appendChild(c), t.canvas.appendChild(s);
							var m = C("skew");
							return m.on = !0, s.appendChild(m), u.skew = m, u.transform(f), u;
						}, e._engine.setSize = function(t, n) {
							var r = this.canvas.style;
							return this.width = t, this.height = n, t == +t && (t += "px"), n == +n && (n += "px"), r.width = t, r.height = n, r.clip = "rect(0 " + t + " " + n + " 0)", this._viewBox && e._engine.setViewBox.apply(this, this._viewBox), this;
						}, e._engine.setViewBox = function(t, n, r, i, a) {
							e.eve("raphael.setViewBox", this, this._viewBox, [
								t,
								n,
								r,
								i,
								a
							]);
							var o, s, c = this.getSize(), l = c.width, u = c.height;
							return a && (r * (o = u / i) < l && (t -= (l - r * o) / 2 / o), i * (s = l / r) < u && (n -= (u - i * s) / 2 / s)), this._viewBox = [
								t,
								n,
								r,
								i,
								!!a
							], this._viewBoxShift = {
								dx: -t,
								dy: -n,
								scale: c
							}, this.forEach(function(e) {
								e.transform("...");
							}), this;
						}, e._engine.initWin = function(e) {
							var t = e.document;
							t.styleSheets.length < 31 ? t.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : t.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
							try {
								!t.namespaces.rvml && t.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), C = function(e) {
									return t.createElement("<rvml:" + e + " class=\"rvml\">");
								};
							} catch {
								C = function(e) {
									return t.createElement("<" + e + " xmlns=\"urn:schemas-microsoft.com:vml\" class=\"rvml\">");
								};
							}
						}, e._engine.initWin(e._g.win), e._engine.create = function() {
							var t = e._getContainer.apply(0, arguments), n = t.container, r = t.height, i = t.width, a = t.x, o = t.y;
							if (!n) throw Error("VML container not found.");
							var s = new e._Paper(), c = s.canvas = e._g.doc.createElement("div"), l = c.style;
							return a ||= 0, o ||= 0, i ||= 512, r ||= 342, s.width = i, s.height = r, i == +i && (i += "px"), r == +r && (r += "px"), s.coordsize = 216e5 + d + 216e5, s.coordorigin = "0 0", s.span = e._g.doc.createElement("span"), s.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", c.appendChild(s.span), l.cssText = e.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", i, r), n == 1 ? (e._g.doc.body.appendChild(c), l.left = a + "px", l.top = o + "px", l.position = "absolute") : n.firstChild ? n.insertBefore(c, n.firstChild) : n.appendChild(c), s.renderfix = function() {}, s;
						}, e.prototype.clear = function() {
							e.eve("raphael.clear", this), this.canvas.innerHTML = f, this.span = e._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null;
						}, e.prototype.remove = function() {
							for (var t in e.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas), this) this[t] = typeof this[t] == "function" ? e._removedFactory(t) : null;
							return !0;
						};
						var k = e.st;
						for (var A in O) O[t](A) && !k[t](A) && (k[A] = function(e) {
							return function() {
								var t = arguments;
								return this.forEach(function(n) {
									n[e].apply(n, t);
								});
							};
						}(A));
					}
				}.apply(t, r)) === void 0 || (e.exports = i);
			}
		]);
	});
})))(), 1);
function F(e) {
	return {
		x: e.x + e.width / 2,
		y: e.y + e.height / 2
	};
}
function I(e, t) {
	let n = F(e), r = t.x - n.x, i = t.y - n.y;
	if (r === 0 && i === 0) return n;
	let a = 1 / Math.max(Math.abs(r) / (e.width / 2), Math.abs(i) / (e.height / 2));
	return {
		x: n.x + r * a,
		y: n.y + i * a
	};
}
//#endregion
//#region src/canvas/svg-text.ts
var L = "http://www.w3.org/2000/svg", R = class {
	element;
	constructor(e, t) {
		this.element = document.createElementNS(L, "text"), this.element.classList.add("workflow-label"), this.setText(t), e.appendChild(this.element);
	}
	setText(e) {
		this.element.textContent = e;
	}
	setPosition(e) {
		this.element.setAttribute("x", String(e.x)), this.element.setAttribute("y", String(e.y));
	}
	centerIn(e) {
		this.element.setAttribute("text-anchor", "middle"), this.element.setAttribute("dominant-baseline", "middle"), this.setPosition({
			x: e.x + e.width / 2,
			y: e.y + e.height / 2
		});
	}
	remove() {
		this.element.remove();
	}
}, z = class {
	host;
	hooks;
	paper;
	svg;
	nodes = /* @__PURE__ */ new Map();
	paths = /* @__PURE__ */ new Map();
	data = null;
	selected = null;
	resizeHandles = [];
	readOnly;
	zoom = 1;
	pan = {
		x: 0,
		y: 0
	};
	panning = !1;
	panStart = {
		x: 0,
		y: 0,
		viewX: 0,
		viewY: 0
	};
	marquee = null;
	marqueeStart = null;
	constructor(e, t, n = !1) {
		this.host = e, this.hooks = t, this.readOnly = n, this.paper = (0, P.default)(e, e.clientWidth || 800, e.clientHeight || 500), this.svg = e.querySelector("svg"), this.host.addEventListener("wheel", this.onWheel, { passive: !1 }), this.host.addEventListener("mousedown", this.onPanStart), this.host.addEventListener("mousedown", this.onMarqueeStart), window.addEventListener("mousemove", this.onPanMove), window.addEventListener("mouseup", this.onPanEnd), this.applyViewBox();
	}
	setReadOnly(e) {
		this.readOnly = e, this.select(this.selected);
	}
	load(e) {
		this.paper.clear(), this.nodes.clear(), this.paths.clear(), this.selected = null, this.data = e, Object.entries(e.states).forEach(([e, t]) => this.drawNode(e, t)), Object.keys(e.paths).forEach((e) => this.drawPath(e));
	}
	refresh() {
		if (this.data) {
			for (let [e, t] of this.nodes) this.updateNodeShape(t.shape, t.data), t.label.setText(t.data.props.displayName?.value || t.data.text?.text || e), t.label.centerIn(t.data.attr);
			for (let e of this.paths.keys()) this.updatePath(e);
		}
	}
	destroy() {
		this.host.removeEventListener("wheel", this.onWheel), this.host.removeEventListener("mousedown", this.onPanStart), this.host.removeEventListener("mousedown", this.onMarqueeStart), window.removeEventListener("mousemove", this.onPanMove), window.removeEventListener("mouseup", this.onPanEnd), window.removeEventListener("mousemove", this.onMarqueeMove), this.paper.remove(), this.nodes.clear(), this.paths.clear(), this.data = null;
	}
	resize() {
		this.paper.setSize(this.host.clientWidth || 800, this.host.clientHeight || 500), this.applyViewBox();
	}
	zoomIn() {
		this.setZoom(this.zoom * 1.2);
	}
	zoomOut() {
		this.setZoom(this.zoom / 1.2);
	}
	resetView() {
		this.zoom = 1, this.pan = {
			x: 0,
			y: 0
		}, this.applyViewBox(), this.hooks.onZoom?.(100);
	}
	moveSelection(e, t) {
		if (this.readOnly || !this.data || !this.selected || this.selected.kind === "path") return;
		let n = this.selected.kind === "nodes" ? this.selected.refs : [this.selected.ref];
		this.hooks.onEditStart?.(), this.translateNodes(n, e, t, !0), this.select(n.length > 1 ? {
			kind: "nodes",
			refs: n
		} : {
			kind: "node",
			ref: n[0]
		}), this.hooks.onEditEnd?.();
	}
	alignSelection(e) {
		if (this.readOnly || !this.data || this.selected?.kind !== "nodes" || this.selected.refs.length < 2) return;
		let t = this.selected.refs.map((e) => this.data.states[e]), n = t.map((e) => e.attr), r = Math.min(...n.map((e) => e.x)), i = Math.max(...n.map((e) => e.x + e.width)), a = Math.min(...n.map((e) => e.y)), o = Math.max(...n.map((e) => e.y + e.height));
		this.hooks.onEditStart?.(), t.forEach((t) => {
			e === "left" && (t.attr.x = r), e === "center" && (t.attr.x = (r + i - t.attr.width) / 2), e === "right" && (t.attr.x = i - t.attr.width), e === "top" && (t.attr.y = a), e === "middle" && (t.attr.y = (a + o - t.attr.height) / 2), e === "bottom" && (t.attr.y = o - t.attr.height);
		}), this.refresh(), this.select(this.selected), this.hooks.onEditEnd?.();
	}
	distributeSelection(e) {
		if (this.readOnly || !this.data || this.selected?.kind !== "nodes" || this.selected.refs.length < 3) return;
		let t = this.selected.refs.map((e) => ({
			ref: e,
			box: this.data.states[e].attr
		})).sort((t, n) => e === "horizontal" ? t.box.x - n.box.x : t.box.y - n.box.y), n = t[0].box, r = t.at(-1).box, i = t.reduce((t, n) => t + (e === "horizontal" ? n.box.width : n.box.height), 0), a = ((e === "horizontal" ? r.x + r.width - n.x : r.y + r.height - n.y) - i) / (t.length - 1);
		this.hooks.onEditStart?.();
		let o = (e === "horizontal" ? n.x + n.width : n.y + n.height) + a;
		t.slice(1, -1).forEach((t) => {
			e === "horizontal" ? (t.box.x = o, o += t.box.width + a) : (t.box.y = o, o += t.box.height + a);
		}), this.refresh(), this.select(this.selected), this.hooks.onEditEnd?.();
	}
	fitToContent() {
		if (!this.data || !Object.keys(this.data.states).length) {
			this.resetView();
			return;
		}
		let e = Object.values(this.data.states).map((e) => e.attr), t = Math.min(...e.map((e) => e.x)) - 50, n = Math.min(...e.map((e) => e.y)) - 50, r = Math.max(...e.map((e) => e.x + e.width)) + 50, i = Math.max(...e.map((e) => e.y + e.height)) + 50, a = Math.max(1, r - t), o = Math.max(1, i - n);
		this.zoom = Math.min(this.host.clientWidth / a, this.host.clientHeight / o, 2), this.pan = {
			x: t,
			y: n
		}, this.applyViewBox(), this.hooks.onZoom?.(Math.round(this.zoom * 100));
	}
	focus(e) {
		if (!e || !this.data) return;
		let t = null;
		if (e.kind === "node") t = F(this.data.states[e.ref].attr);
		else if (e.kind === "nodes") {
			let n = e.refs.map((e) => this.data.states[e]?.attr).filter(Boolean);
			n.length && (t = {
				x: n.reduce((e, t) => e + F(t).x, 0) / n.length,
				y: n.reduce((e, t) => e + F(t).y, 0) / n.length
			});
		} else {
			let n = this.data.paths[e.ref];
			n && (t = V(this.pathPoints(n)));
		}
		if (t) {
			let n = this.viewSize();
			this.pan = {
				x: t.x - n.width / 2,
				y: t.y - n.height / 2
			}, this.applyViewBox(), this.select(e);
		}
	}
	select(e) {
		this.clearSelectionStyle(), this.clearHandles(), this.clearResizeHandles(), this.selected = e, e?.kind === "node" && (this.nodes.get(e.ref)?.shape.attr({
			stroke: "#2f7cf6",
			"stroke-width": 3
		}), this.readOnly || this.renderResizeHandles(e.ref)), e?.kind === "nodes" && e.refs.forEach((e) => this.nodes.get(e)?.shape.attr({
			stroke: "#2f7cf6",
			"stroke-width": 3
		})), e?.kind === "path" && (this.paths.get(e.ref)?.line.attr({
			stroke: "#2f7cf6",
			"stroke-width": 3
		}), this.readOnly || this.renderHandles(e.ref)), this.hooks.onSelect(e);
	}
	drawNode(e, t) {
		let { x: n, y: r, width: i, height: a } = t.attr, o;
		o = [
			"decision",
			"fork",
			"join"
		].includes(t.type) ? this.paper.path(B({
			x: n,
			y: r,
			width: i,
			height: a
		})) : ["start", "end"].includes(t.type) ? this.paper.ellipse(n + i / 2, r + a / 2, i / 2, a / 2) : this.paper.rect(n, r, i, a, 8), o.attr({
			fill: t.type === "end" ? "#fff1f0" : "#f5f8ff",
			stroke: "#356aa0",
			"stroke-width": 2,
			cursor: this.readOnly ? "default" : "move"
		}), o.click((t) => this.selectNode(e, t.shiftKey || t.metaKey || t.ctrlKey));
		let s = new R(this.svg, t.props.displayName?.value || t.text?.text || e);
		s.centerIn(t.attr), s.element.style.pointerEvents = "none", this.nodes.set(e, {
			shape: o,
			label: s,
			data: t
		});
		let c = [], l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
		o.drag((e, t) => {
			if (this.readOnly) return;
			c.forEach((n) => {
				let r = this.nodes.get(n), i = l.get(n);
				!r || !i || (r.data.attr.x = i.x + e / this.zoom, r.data.attr.y = i.y + t / this.zoom, this.updateNodeShape(r.shape, r.data), r.label.centerIn(r.data.attr));
			});
			let n = /* @__PURE__ */ new Set(), r = e / this.zoom, i = t / this.zoom;
			u.forEach((e, t) => {
				this.data.paths[t].dots = e.map((e) => ({
					x: e.x + r,
					y: e.y + i
				}));
			}), c.forEach((e) => this.connectedPathRefs(e).forEach((e) => n.add(e))), n.forEach((e) => this.updatePath(e));
		}, () => {
			if (this.readOnly) return;
			let t = this.selected?.kind === "nodes" ? this.selected.refs : this.selected?.kind === "node" ? [this.selected.ref] : [];
			c = t.includes(e) ? [...t] : [e], l = new Map(c.map((e) => [e, { ...this.data.states[e].attr }]));
			let n = new Set(c);
			u = new Map(Object.entries(this.data.paths).filter(([, e]) => n.has(e.from) && n.has(e.to)).map(([e, t]) => [e, t.dots.map((e) => ({ ...e }))])), this.hooks.onEditStart?.(), this.select(c.length > 1 ? {
				kind: "nodes",
				refs: c
			} : {
				kind: "node",
				ref: e
			});
		}, () => {
			this.readOnly || this.hooks.onEditEnd?.();
		});
	}
	drawPath(e) {
		let t = this.paper.path().attr({
			stroke: "#77808a",
			"stroke-width": 2,
			"arrow-end": "classic-wide-long",
			fill: "none",
			cursor: "pointer"
		});
		t.click(() => this.select({
			kind: "path",
			ref: e
		})), t.dblclick((t) => {
			this.readOnly || this.addWaypoint(e, this.clientToCanvas(t.clientX, t.clientY));
		});
		let n = {
			line: t,
			handles: []
		};
		this.paths.set(e, n), this.updatePath(e), t.toBack();
	}
	updateNodeShape(e, t) {
		let n = t.attr;
		[
			"decision",
			"fork",
			"join"
		].includes(t.type) ? e.attr({ path: B(n) }) : ["start", "end"].includes(t.type) ? e.attr({
			cx: n.x + n.width / 2,
			cy: n.y + n.height / 2,
			rx: n.width / 2,
			ry: n.height / 2
		}) : e.attr(n);
	}
	pathPoints(e) {
		if (!this.data) return [];
		let t = this.data.states[e.from].attr, n = this.data.states[e.to].attr, r = e.dots[0] || F(n), i = e.dots[e.dots.length - 1] || F(t);
		return [
			I(t, r),
			...e.dots,
			I(n, i)
		];
	}
	updatePath(e) {
		if (!this.data) return;
		let t = this.data.paths[e], n = this.paths.get(e);
		if (!t || !n || !this.data.states[t.from] || !this.data.states[t.to]) return;
		let r = this.pathPoints(t);
		n.line.attr({ path: r.map((e, t) => `${t ? "L" : "M"}${e.x} ${e.y}`).join("") });
		let i = t.props.displayName?.value || t.text?.text || "";
		if (i && !n.label && (n.label = new R(this.svg, i), n.label.element.style.pointerEvents = "none"), !i && n.label && (n.label.remove(), n.label = void 0), n.label) {
			n.label.setText(i);
			let e = V(r);
			n.label.setPosition({
				x: e.x + (t.text?.x || 0),
				y: e.y + (t.text?.y || -8)
			});
		}
		this.selected?.kind === "path" && this.selected.ref === e && this.positionHandles(e);
	}
	addWaypoint(e, t) {
		if (!this.data) return;
		this.hooks.onEditStart?.();
		let n = this.data.paths[e], r = this.pathPoints(n);
		n.dots.splice(H(r, t), 0, t), this.updatePath(e), this.select({
			kind: "path",
			ref: e
		}), this.hooks.onEditEnd?.();
	}
	selectNode(e, t) {
		if (!t) {
			this.select({
				kind: "node",
				ref: e
			});
			return;
		}
		let n = this.selected?.kind === "nodes" ? [...this.selected.refs] : this.selected?.kind === "node" ? [this.selected.ref] : [], r = n.indexOf(e);
		r >= 0 ? n.splice(r, 1) : n.push(e), this.select(n.length > 1 ? {
			kind: "nodes",
			refs: n
		} : n.length ? {
			kind: "node",
			ref: n[0]
		} : null);
	}
	renderResizeHandles(e) {
		if (!this.data) return;
		let t = this.data.states[e];
		[
			"nw",
			"ne",
			"sw",
			"se"
		].forEach((n) => {
			let r = this.paper.rect(0, 0, 8, 8).attr({
				fill: "#fff",
				stroke: "#2f7cf6",
				cursor: `${n}-resize`
			}), i;
			r.drag((r, a) => {
				let o = r / this.zoom, s = a / this.zoom, c = { ...i }, l = 2e3;
				if (n.includes("e") && (c.width = Math.max(24, i.width + o)), n.includes("s") && (c.height = Math.max(24, i.height + s)), n.includes("w") && (c.width = Math.max(24, i.width - o), c.x = i.x + i.width - c.width), n.includes("n") && (c.height = Math.max(24, i.height - s), c.y = i.y + i.height - c.height), c.width = Math.min(l, c.width), c.height = Math.min(l, c.height), ["start", "end"].includes(t.type)) {
					let e = Math.min(l, Math.max(24, Math.max(c.width, c.height)));
					n.includes("w") && (c.x = i.x + i.width - e), n.includes("n") && (c.y = i.y + i.height - e), c.width = e, c.height = e;
				} else if ([
					"decision",
					"fork",
					"join"
				].includes(t.type)) {
					let e = i.width / i.height;
					Math.abs(o) >= Math.abs(s) ? c.height = c.width / e : c.width = c.height * e, c.width = Math.min(l, Math.max(24, c.width)), c.height = Math.min(l, Math.max(24, c.height)), n.includes("w") && (c.x = i.x + i.width - c.width), n.includes("n") && (c.y = i.y + i.height - c.height);
				}
				Object.assign(t.attr, c);
				let u = this.nodes.get(e);
				this.updateNodeShape(u.shape, t), u.label.centerIn(t.attr), this.updateConnectedPaths(e), this.positionResizeHandles(e);
			}, () => {
				i = { ...t.attr }, this.hooks.onEditStart?.();
			}, () => this.hooks.onEditEnd?.()), this.resizeHandles.push(r);
		}), this.positionResizeHandles(e);
	}
	positionResizeHandles(e) {
		if (!this.data) return;
		let t = this.data.states[e].attr, n = [
			{
				x: t.x,
				y: t.y
			},
			{
				x: t.x + t.width,
				y: t.y
			},
			{
				x: t.x,
				y: t.y + t.height
			},
			{
				x: t.x + t.width,
				y: t.y + t.height
			}
		];
		this.resizeHandles.forEach((e, t) => e.attr({
			x: n[t].x - 4,
			y: n[t].y - 4
		}));
	}
	clearResizeHandles() {
		for (; this.resizeHandles.length;) this.resizeHandles.pop().remove();
	}
	renderHandles(e) {
		if (!this.data) return;
		let t = this.paths.get(e), n = this.data.paths[e];
		!t || !n || (t.handles = n.dots.map((t, r) => {
			let i = this.paper.circle(0, 0, 6).attr({
				fill: "#fff",
				stroke: "#2f7cf6",
				"stroke-width": 2,
				cursor: "move"
			}), a;
			return i.drag((t, i) => {
				n.dots[r] = {
					x: a.x + t / this.zoom,
					y: a.y + i / this.zoom
				}, this.updatePath(e);
			}, () => {
				a = { ...n.dots[r] }, this.hooks.onEditStart?.();
			}, () => this.hooks.onEditEnd?.()), i.dblclick(() => {
				this.hooks.onEditStart?.(), n.dots.splice(r, 1), this.updatePath(e), this.select({
					kind: "path",
					ref: e
				}), this.hooks.onEditEnd?.();
			}), i;
		}), this.positionHandles(e));
	}
	positionHandles(e) {
		if (!this.data) return;
		let t = this.paths.get(e), n = this.data.paths[e];
		t?.handles.forEach((e, t) => e.attr({
			cx: n.dots[t]?.x,
			cy: n.dots[t]?.y
		}));
	}
	clearHandles() {
		for (let e of this.paths.values()) e.handles.forEach((e) => e.remove()), e.handles = [];
	}
	translateNodes(e, t, n, r) {
		if (!this.data) return;
		let i = new Set(e);
		e.forEach((e) => {
			let r = this.data.states[e];
			r.attr.x += t, r.attr.y += n;
		}), r && Object.values(this.data.paths).forEach((e) => {
			i.has(e.from) && i.has(e.to) && e.dots.forEach((e) => {
				e.x += t, e.y += n;
			});
		}), this.refresh();
	}
	connectedPathRefs(e) {
		return this.data ? Object.entries(this.data.paths).filter(([, t]) => t.from === e || t.to === e).map(([e]) => e) : [];
	}
	updateConnectedPaths(e) {
		this.data && Object.entries(this.data.paths).forEach(([t, n]) => {
			(n.from === e || n.to === e) && this.updatePath(t);
		});
	}
	clearSelectionStyle() {
		for (let e of this.nodes.values()) e.shape.attr({
			stroke: "#356aa0",
			"stroke-width": 2
		});
		for (let e of this.paths.values()) e.line.attr({
			stroke: "#77808a",
			"stroke-width": 2
		});
	}
	viewSize() {
		return {
			width: this.host.clientWidth / this.zoom,
			height: this.host.clientHeight / this.zoom
		};
	}
	applyViewBox() {
		let e = this.viewSize();
		this.paper.setViewBox(this.pan.x, this.pan.y, e.width, e.height, !1);
	}
	setZoom(e) {
		let t = this.viewSize(), n = {
			x: this.pan.x + t.width / 2,
			y: this.pan.y + t.height / 2
		};
		this.zoom = Math.min(4, Math.max(.25, e));
		let r = this.viewSize();
		this.pan = {
			x: n.x - r.width / 2,
			y: n.y - r.height / 2
		}, this.applyViewBox(), this.hooks.onZoom?.(Math.round(this.zoom * 100));
	}
	clientToCanvas(e, t) {
		let n = this.host.getBoundingClientRect();
		return {
			x: this.pan.x + (e - n.left) / this.zoom,
			y: this.pan.y + (t - n.top) / this.zoom
		};
	}
	onWheel = (e) => {
		e.preventDefault(), this.setZoom(this.zoom * (e.deltaY < 0 ? 1.1 : 1 / 1.1));
	};
	onPanStart = (e) => {
		e.button !== 1 && !(e.button === 0 && e.altKey) || (e.preventDefault(), this.panning = !0, this.panStart = {
			x: e.clientX,
			y: e.clientY,
			viewX: this.pan.x,
			viewY: this.pan.y
		});
	};
	onPanMove = (e) => {
		this.panning && (this.pan = {
			x: this.panStart.viewX - (e.clientX - this.panStart.x) / this.zoom,
			y: this.panStart.viewY - (e.clientY - this.panStart.y) / this.zoom
		}, this.applyViewBox());
	};
	onPanEnd = () => {
		this.panning = !1;
	};
	onMarqueeStart = (e) => {
		this.readOnly || e.button !== 0 || e.altKey || e.target !== this.svg || (e.preventDefault(), this.marqueeStart = this.clientToCanvas(e.clientX, e.clientY), this.marquee = this.paper.rect(this.marqueeStart.x, this.marqueeStart.y, 0, 0).attr({
			fill: "#2f7cf6",
			"fill-opacity": .08,
			stroke: "#2f7cf6",
			"stroke-dasharray": "-"
		}), window.addEventListener("mousemove", this.onMarqueeMove), window.addEventListener("mouseup", this.onMarqueeEnd, { once: !0 }));
	};
	onMarqueeMove = (e) => {
		if (!this.marqueeStart || !this.marquee) return;
		let t = this.clientToCanvas(e.clientX, e.clientY);
		this.marquee.attr({
			x: Math.min(this.marqueeStart.x, t.x),
			y: Math.min(this.marqueeStart.y, t.y),
			width: Math.abs(t.x - this.marqueeStart.x),
			height: Math.abs(t.y - this.marqueeStart.y)
		});
	};
	onMarqueeEnd = () => {
		if (window.removeEventListener("mousemove", this.onMarqueeMove), !this.marqueeStart || !this.marquee || !this.data) return;
		let e = this.marquee.attr(), t = Object.entries(this.data.states).filter(([, t]) => t.attr.x >= e.x && t.attr.y >= e.y && t.attr.x + t.attr.width <= e.x + e.width && t.attr.y + t.attr.height <= e.y + e.height).map(([e]) => e);
		this.marquee.remove(), this.marquee = null, this.marqueeStart = null, this.select(t.length > 1 ? {
			kind: "nodes",
			refs: t
		} : t.length ? {
			kind: "node",
			ref: t[0]
		} : null);
	};
};
function B(e) {
	return `M${e.x + e.width / 2} ${e.y}L${e.x + e.width} ${e.y + e.height / 2}L${e.x + e.width / 2} ${e.y + e.height}L${e.x} ${e.y + e.height / 2}Z`;
}
function V(e) {
	if (!e.length) return {
		x: 0,
		y: 0
	};
	if (e.length === 1) return e[0];
	let t = e.slice(1).map((t, n) => Math.hypot(t.x - e[n].x, t.y - e[n].y)), n = t.reduce((e, t) => e + t, 0) / 2, r = 0;
	for (let i = 0; i < t.length; i++) {
		if (r + t[i] >= n) {
			let a = t[i] ? (n - r) / t[i] : 0;
			return {
				x: e[i].x + (e[i + 1].x - e[i].x) * a,
				y: e[i].y + (e[i + 1].y - e[i].y) * a
			};
		}
		r += t[i];
	}
	return e[e.length - 1];
}
function H(e, t) {
	let n = 0, r = Infinity;
	for (let i = 0; i < e.length - 1; i++) {
		let a = ee(t, e[i], e[i + 1]);
		a < r && (r = a, n = i);
	}
	return n;
}
function ee(e, t, n) {
	let r = n.x - t.x, i = n.y - t.y, a = r * r + i * i, o = a ? Math.max(0, Math.min(1, ((e.x - t.x) * r + (e.y - t.y) * i) / a)) : 0;
	return Math.hypot(e.x - (t.x + o * r), e.y - (t.y + o * i));
}
//#endregion
//#region src/components/PropertyEditor.vue?vue&type=script&setup=true&lang.ts
var U = { class: "property-editor" }, W = ["value"], G = ["value"], te = [
	"disabled",
	"value",
	"onChange"
], ne = ["value"], re = [
	"disabled",
	"type",
	"value",
	"onInput"
], K = {
	key: 0,
	class: "fields-editor"
}, ie = ["disabled"], ae = ["onUpdate:modelValue", "disabled"], oe = ["onUpdate:modelValue", "disabled"], se = ["onUpdate:modelValue", "disabled"], ce = [
	"disabled",
	"value",
	"onChange"
], le = ["disabled", "onClick"], ue = ["value"], de = ["value"], fe = ["value"], pe = [
	"disabled",
	"value",
	"onInput"
], me = {
	key: 2,
	class: "empty-property"
}, he = {
	key: 3,
	class: "process-editor"
}, q = [
	"onUpdate:modelValue",
	"disabled",
	"type"
], ge = /* @__PURE__ */ l({
	__name: "PropertyEditor",
	props: {
		workflow: {},
		selection: {},
		readonly: { type: Boolean }
	},
	emits: ["change"],
	setup(t, { emit: r }) {
		let c = t, l = r, u = n(() => c.selection?.kind === "node" ? c.workflow.states[c.selection.ref] : null), d = n(() => c.selection?.kind === "path" ? c.workflow.paths[c.selection.ref] : null), f = n(() => c.selection && "ref" in c.selection ? c.selection.ref : ""), p = [
			{
				name: "displayName",
				label: "显示名称"
			},
			{
				name: "name",
				label: "业务名称"
			},
			{
				name: "preInterceptors",
				label: "前置拦截器"
			},
			{
				name: "postInterceptors",
				label: "后置拦截器"
			}
		], h = {
			task: [
				{
					name: "form",
					label: "表单 URL"
				},
				{
					name: "assignee",
					label: "参与者"
				},
				{
					name: "taskType",
					label: "任务类型",
					options: [{
						value: "Major",
						label: "主办"
					}, {
						value: "Aidant",
						label: "协办"
					}]
				},
				{
					name: "performType",
					label: "参与类型",
					options: [{
						value: "ANY",
						label: "任一参与者"
					}, {
						value: "ALL",
						label: "全部参与者"
					}]
				},
				{
					name: "expireTime",
					label: "期望完成时间"
				},
				{
					name: "reminderTime",
					label: "提醒时间"
				},
				{
					name: "reminderRepeat",
					label: "重复提醒间隔"
				},
				{
					name: "autoExecute",
					label: "自动执行",
					options: [{
						value: "",
						label: "否"
					}, {
						value: "Y",
						label: "是"
					}]
				},
				{
					name: "callback",
					label: "回调类"
				}
			],
			decision: [{
				name: "expr",
				label: "决策表达式"
			}, {
				name: "handleClass",
				label: "决策处理类"
			}],
			custom: [
				{
					name: "form",
					label: "表单 URL"
				},
				{
					name: "clazz",
					label: "执行类"
				},
				{
					name: "methodName",
					label: "方法名"
				},
				{
					name: "args",
					label: "参数变量"
				},
				{
					name: "var",
					label: "返回值变量"
				}
			],
			subprocess: [
				{
					name: "processName",
					label: "子流程名称"
				},
				{
					name: "version",
					label: "子流程版本",
					type: "number"
				},
				{
					name: "form",
					label: "表单 URL"
				}
			]
		}, _ = n(() => [...p, ...h[u.value?.type || ""] || []]), x = [
			{
				name: "name",
				label: "名称"
			},
			{
				name: "displayName",
				label: "显示名称"
			},
			{
				name: "expr",
				label: "条件表达式"
			}
		], S = [
			{
				name: "name",
				label: "流程名称"
			},
			{
				name: "displayName",
				label: "显示名称"
			},
			{
				name: "expireTime",
				label: "期望完成时间"
			},
			{
				name: "instanceUrl",
				label: "实例 URL"
			},
			{
				name: "instanceNoClass",
				label: "实例编号生成类"
			}
		], C = () => l("change"), T = (e) => u.value?.props[e]?.value ?? "", E = (e, t) => {
			u.value && (u.value.props[e] ??= { value: "" }, u.value.props[e].value = t, e === "displayName" && u.value.text && (u.value.text.text = t), C());
		}, D = (e) => d.value?.props[e]?.value ?? "", O = (e, t) => {
			d.value && (d.value.props[e] = { value: t }, C());
		}, k = () => {
			u.value && ((u.value.fields ??= []).push({
				name: "",
				displayName: "",
				type: "String",
				attrs: {}
			}), C());
		}, A = (e) => {
			u.value?.fields?.splice(e, 1), C();
		}, j = (e) => Object.entries(e).map(([e, t]) => `${e}=${t}`).join("\n"), M = (e, t) => {
			u.value?.fields && (u.value.fields[e].attrs = Object.fromEntries(t.split(/\r?\n/).filter(Boolean).map((e) => {
				let t = e.indexOf("=");
				return t < 0 ? [e.trim(), ""] : [e.slice(0, t).trim(), e.slice(t + 1)];
			}).filter(([e]) => e)), C());
		}, N = (e) => e.target.value;
		return (n, r) => (m(), a("aside", U, [u.value ? (m(), a(e, { key: 0 }, [
			r[3] ||= o("h2", null, "节点属性", -1),
			o("label", null, [r[0] ||= s("引用 ", -1), o("input", {
				value: f.value,
				disabled: ""
			}, null, 8, W)]),
			o("label", null, [r[1] ||= s("类型 ", -1), o("input", {
				value: u.value.type,
				disabled: ""
			}, null, 8, G)]),
			(m(!0), a(e, null, g(_.value, (n) => (m(), a("label", { key: n.name }, [s(v(n.label) + " ", 1), n.options ? (m(), a("select", {
				key: 0,
				disabled: t.readonly,
				value: T(n.name),
				onChange: (e) => E(n.name, N(e))
			}, [(m(!0), a(e, null, g(n.options, (e) => (m(), a("option", {
				key: e.value,
				value: e.value
			}, v(e.label), 9, ne))), 128))], 40, te)) : (m(), a("input", {
				key: 1,
				disabled: t.readonly,
				type: n.type || "text",
				value: T(n.name),
				onInput: (e) => E(n.name, N(e))
			}, null, 40, re))]))), 128)),
			u.value.type === "task" ? (m(), a("section", K, [o("h2", null, [r[2] ||= s(" 任务字段 ", -1), o("button", {
				type: "button",
				disabled: t.readonly,
				onClick: k
			}, " 添加 ", 8, ie)]), (m(!0), a(e, null, g(u.value.fields, (e, n) => (m(), a("div", {
				key: n,
				class: "field-card"
			}, [
				w(o("input", {
					"onUpdate:modelValue": (t) => e.name = t,
					disabled: t.readonly,
					placeholder: "字段名称",
					onInput: C
				}, null, 40, ae), [[b, e.name]]),
				w(o("input", {
					"onUpdate:modelValue": (t) => e.displayName = t,
					disabled: t.readonly,
					placeholder: "显示名称",
					onInput: C
				}, null, 40, oe), [[b, e.displayName]]),
				w(o("input", {
					"onUpdate:modelValue": (t) => e.type = t,
					disabled: t.readonly,
					placeholder: "Java 类型",
					onInput: C
				}, null, 40, se), [[b, e.type]]),
				o("textarea", {
					disabled: t.readonly,
					value: j(e.attrs),
					placeholder: "扩展属性，每行 key=value",
					onChange: (e) => M(n, N(e))
				}, null, 40, ce),
				o("button", {
					type: "button",
					disabled: t.readonly,
					onClick: (e) => A(n)
				}, " 删除字段 ", 8, le)
			]))), 128))])) : i("", !0)
		], 64)) : d.value ? (m(), a(e, { key: 1 }, [
			r[7] ||= o("h2", null, "连线属性", -1),
			o("label", null, [r[4] ||= s("引用 ", -1), o("input", {
				value: f.value,
				disabled: ""
			}, null, 8, ue)]),
			o("label", null, [r[5] ||= s("起点 ", -1), o("input", {
				value: d.value.from,
				disabled: ""
			}, null, 8, de)]),
			o("label", null, [r[6] ||= s("终点 ", -1), o("input", {
				value: d.value.to,
				disabled: ""
			}, null, 8, fe)]),
			(m(), a(e, null, g(x, (e) => o("label", { key: e.name }, [s(v(e.label) + " ", 1), o("input", {
				disabled: t.readonly,
				value: D(e.name),
				onInput: (t) => O(e.name, N(t))
			}, null, 40, pe)])), 64))
		], 64)) : t.selection?.kind === "nodes" ? (m(), a("section", me, " 已选择 " + v(t.selection.refs.length) + " 个节点，可复制、粘贴或删除。 ", 1)) : (m(), a("section", he, [r[8] ||= o("h2", null, "流程属性", -1), (m(), a(e, null, g(S, (e) => o("label", { key: e.name }, [s(v(e.label) + " ", 1), w(o("input", {
			"onUpdate:modelValue": (n) => t.workflow.props[e.name] = n,
			disabled: t.readonly,
			type: e.type || "text",
			onInput: C
		}, null, 40, q), [[y, t.workflow.props[e.name]]])])), 64))]))]));
	}
}), _e = ["aria-label"], ve = { class: "modal-body" }, ye = /* @__PURE__ */ l({
	__name: "SimpleModal",
	props: {
		open: { type: Boolean },
		title: {}
	},
	emits: ["close"],
	setup(e) {
		return (n, s) => (m(), r(t, { to: "body" }, [e.open ? (m(), a("div", {
			key: 0,
			class: "modal-mask",
			onMousedown: s[2] ||= T((e) => n.$emit("close"), ["self"])
		}, [o("section", {
			class: "modal",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.title
		}, [
			o("header", null, [o("strong", null, v(e.title), 1), o("button", {
				type: "button",
				"aria-label": "关闭",
				onClick: s[0] ||= (e) => n.$emit("close")
			}, " × ")]),
			o("div", ve, [_(n.$slots, "default")]),
			o("footer", null, [o("button", {
				type: "button",
				onClick: s[1] ||= (e) => n.$emit("close")
			}, "关闭")])
		], 8, _e)], 32)) : i("", !0)]));
	}
}), be = {
	states: {
		start1: {
			type: "start",
			attr: {
				x: 80,
				y: 130,
				width: 48,
				height: 48
			},
			props: {
				name: { value: "start1" },
				displayName: { value: "开始" }
			}
		},
		apply: {
			type: "task",
			attr: {
				x: 230,
				y: 128,
				width: 120,
				height: 52
			},
			text: { text: "请假申请" },
			props: {
				name: { value: "apply" },
				displayName: { value: "请假申请" },
				assignee: { value: "apply.operator" },
				form: { value: "/flow/leave/apply" },
				taskType: { value: "Major" },
				performType: { value: "ANY" }
			}
		},
		decision1: {
			type: "decision",
			attr: {
				x: 450,
				y: 130,
				width: 48,
				height: 48
			},
			props: {
				name: { value: "decision1" },
				displayName: { value: "判断" },
				expr: { value: "day > 2" }
			}
		},
		end1: {
			type: "end",
			attr: {
				x: 650,
				y: 130,
				width: 48,
				height: 48
			},
			props: {
				name: { value: "end1" },
				displayName: { value: "结束" }
			}
		}
	},
	paths: {
		transition1: {
			from: "start1",
			to: "apply",
			dots: [],
			props: { name: { value: "transition1" } }
		},
		transition2: {
			from: "apply",
			to: "decision1",
			dots: [],
			props: { name: { value: "transition2" } }
		},
		transition3: {
			from: "decision1",
			to: "end1",
			dots: [],
			text: { text: "通过" },
			props: { name: { value: "transition3" } }
		}
	},
	props: {
		name: "leave",
		displayName: "请假流程",
		expireTime: "",
		instanceUrl: "",
		instanceNoClass: ""
	}
};
//#endregion
//#region src/domain/workflow.ts
function J(e) {
	return JSON.parse(JSON.stringify(e));
}
function xe(e) {
	if (!Y(e) || !Y(e.states) || !Y(e.paths) || !Y(e.props)) return !1;
	for (let t of Object.values(e.states)) {
		if (!Y(t) || typeof t.type != "string" || !Y(t.attr) || !Y(t.props)) return !1;
		let e = t.attr;
		if (![
			e.x,
			e.y,
			e.width,
			e.height
		].every(Number.isFinite) || e.width <= 0 || e.height <= 0) return !1;
	}
	for (let t of Object.values(e.paths)) if (!Y(t) || typeof t.from != "string" || typeof t.to != "string" || !e.states[t.from] || !e.states[t.to] || !Y(t.props) || !Array.isArray(t.dots) || t.dots.some((e) => !Y(e) || !Number.isFinite(e.x) || !Number.isFinite(e.y))) return !1;
	return !0;
}
var Se = class extends Error {
	issues;
	constructor(e) {
		super(e.map((e) => e.message).join("；")), this.issues = e, this.name = "WorkflowValidationError";
	}
};
function Ce(e) {
	let t = [], n = (e, n, r) => {
		t.push({
			code: e,
			message: n,
			target: r
		});
	};
	if (!Y(e)) return [{
		code: "INVALID_ROOT",
		message: "流程定义必须是普通对象"
	}];
	let r = e;
	if (Y(r.states) || n("MISSING_STATES", "流程定义缺少有效的 states 对象"), Y(r.paths) || n("MISSING_PATHS", "流程定义缺少有效的 paths 对象"), Y(r.props) || n("MISSING_PROPS", "流程定义缺少有效的 props 对象"), t.length) return t;
	let i = r.states, a = r.paths, o = r.props;
	(typeof o.name != "string" || !o.name.trim()) && n("PROCESS_NAME_REQUIRED", "流程名称不能为空", "process");
	let s = /* @__PURE__ */ new Set([
		"start",
		"end",
		"task",
		"decision",
		"fork",
		"join",
		"custom",
		"subprocess"
	]), c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), u = [], d = [], f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
	Object.keys(i).forEach((e) => {
		f.set(e, []), p.set(e, []);
	});
	for (let [e, t] of Object.entries(i)) {
		if (!Y(t)) {
			n("INVALID_NODE", `节点 ${e} 无效`, e);
			continue;
		}
		let r = t;
		(typeof r.type != "string" || !s.has(r.type)) && n("UNSUPPORTED_NODE", `节点 ${e} 的类型不受支持: ${String(r.type || "空")}`, e), (!Y(r.attr) || ![
			r.attr.x,
			r.attr.y,
			r.attr.width,
			r.attr.height
		].every(Number.isFinite) || r.attr.width <= 0 || r.attr.height <= 0) && n("INVALID_NODE_BOX", `节点 ${e} 的位置或尺寸无效`, e);
		let i = Y(r.props) ? r.props : {};
		Y(r.props) || n("INVALID_NODE_PROPS", `节点 ${e} 的 props 必须是对象`, e);
		let a = we(i, "name");
		a ? c.has(a) ? n("DUPLICATE_NODE_NAME", `节点业务名称重复: ${a}`, e) : c.add(a) : n("NODE_NAME_REQUIRED", `节点 ${e} 的业务名称不能为空`, e), r.type === "start" && u.push(e), r.type === "end" && d.push(e);
		let o = (e) => we(i, e);
		if (r.type === "task") {
			o("performType") && !["ANY", "ALL"].includes(o("performType").toUpperCase()) && n("INVALID_PERFORM_TYPE", `任务 ${e} 的参与类型必须是 ANY 或 ALL`, e), o("taskType") && !["Major", "Aidant"].includes(o("taskType")) && n("INVALID_TASK_TYPE", `任务 ${e} 的任务类型必须是 Major 或 Aidant`, e), o("reminderRepeat") && (!/^\d+$/.test(o("reminderRepeat")) || Number(o("reminderRepeat")) <= 0) && n("INVALID_REMINDER_REPEAT", `任务 ${e} 的重复提醒间隔必须是正整数`, e);
			let t = /* @__PURE__ */ new Set();
			r.fields !== void 0 && !Array.isArray(r.fields) && n("INVALID_FIELDS", `任务 ${e} 的 fields 必须是数组`, e);
			for (let [i, a] of (Array.isArray(r.fields) ? r.fields : []).entries()) {
				if (!Y(a)) {
					n("INVALID_FIELD", `任务 ${e} 的第 ${i + 1} 个字段无效`, e);
					continue;
				}
				let r = typeof a.name == "string" ? a.name.trim() : "";
				r ? t.has(r) ? n("DUPLICATE_FIELD_NAME", `任务 ${e} 的字段名称重复: ${r}`, e) : t.add(r) : n("FIELD_NAME_REQUIRED", `任务 ${e} 的第 ${i + 1} 个字段名称不能为空`, e), (typeof a.type != "string" || !a.type.trim()) && n("FIELD_TYPE_REQUIRED", `任务 ${e} 的字段 ${r || i + 1} 缺少类型`, e), Y(a.attrs) || n("INVALID_FIELD_ATTRS", `任务 ${e} 的字段 ${r || i + 1} 的 attrs 必须是对象`, e);
			}
		}
		r.type === "custom" && !o("clazz") && n("CUSTOM_CLASS_REQUIRED", `自定义节点 ${e} 必须配置执行类`, e), r.type === "subprocess" && (o("processName") || n("SUBPROCESS_NAME_REQUIRED", `子流程节点 ${e} 必须配置流程名称`, e), o("version") && (!/^\d+$/.test(o("version")) || Number(o("version")) < 0) && n("INVALID_SUBPROCESS_VERSION", `子流程节点 ${e} 的版本必须是非负整数`, e));
	}
	for (let [e, t] of Object.entries(a)) {
		if (!Y(t)) {
			n("INVALID_PATH", `连线 ${e} 无效`, e);
			continue;
		}
		let r = t;
		if (typeof r.from != "string" || typeof r.to != "string" || !i[r.from] || !i[r.to]) {
			n("DANGLING_PATH", `连线 ${e} 引用了不存在的节点`, e);
			continue;
		}
		r.from === r.to && n("SELF_PATH", `连线 ${e} 不能连接节点自身`, e), p.get(r.from).push(e), f.get(r.to).push(e);
		let a = Y(r.props) ? r.props : {};
		Y(r.props) || n("INVALID_PATH_PROPS", `连线 ${e} 的 props 必须是对象`, e);
		let o = we(a, "name");
		o ? l.has(o) ? n("DUPLICATE_PATH_NAME", `连线名称重复: ${o}`, e) : l.add(o) : n("PATH_NAME_REQUIRED", `连线 ${e} 的名称不能为空`, e), (!Array.isArray(r.dots) || r.dots.some((e) => !Y(e) || !Number.isFinite(e.x) || !Number.isFinite(e.y))) && n("INVALID_PATH_POINTS", `连线 ${e} 的拐点坐标无效`, e);
	}
	u.length !== 1 && n("START_COUNT", "流程必须且只能包含一个开始节点", "process"), d.length || n("END_REQUIRED", "流程至少需要一个结束节点", "process");
	for (let [e, t] of Object.entries(i)) {
		if (!Y(t)) continue;
		let r = t, i = f.get(e)?.length || 0, o = p.get(e)?.length || 0;
		if (r.type === "start" && i && n("START_HAS_INPUT", `开始节点 ${e} 不能有输入连线`, e), r.type === "end" && o && n("END_HAS_OUTPUT", `结束节点 ${e} 不能有输出连线`, e), r.type !== "end" && o === 0 && n("NODE_WITHOUT_OUTPUT", `节点 ${e} 没有输出连线`, e), r.type !== "start" && i === 0 && n("NODE_WITHOUT_INPUT", `节点 ${e} 没有输入连线`, e), r.type === "fork" && o < 2 && n("FORK_OUTPUTS", `分支节点 ${e} 至少需要两条输出连线`, e), r.type === "join" && i < 2 && n("JOIN_INPUTS", `合并节点 ${e} 至少需要两条输入连线`, e), r.type === "decision") {
			let t = we(Y(r.props) ? r.props : {}, "expr") !== "" || we(Y(r.props) ? r.props : {}, "handleClass") !== "", i = (p.get(e) || []).some((e) => {
				let t = a[e];
				return Y(t) && we(Y(t.props) ? t.props : {}, "expr") !== "";
			});
			!t && !i && n("DECISION_RULE_REQUIRED", `判断节点 ${e} 必须配置表达式、处理类或条件连线`, e);
		}
	}
	if (u.length === 1) {
		let e = Te(u, (e) => (p.get(e) || []).map((e) => a[e].to));
		Object.keys(i).filter((t) => !e.has(t)).forEach((e) => n("UNREACHABLE_NODE", `节点 ${e} 无法从开始节点到达`, e));
	}
	if (d.length) {
		let e = Te(d, (e) => (f.get(e) || []).map((e) => a[e].from));
		Object.keys(i).filter((t) => !e.has(t)).forEach((e) => n("NO_PATH_TO_END", `节点 ${e} 无法到达结束节点`, e));
	}
	return t;
}
function Y(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function we(e, t) {
	let n = e[t];
	return Y(n) && typeof n.value == "string" ? n.value.trim() : "";
}
function Te(e, t) {
	let n = /* @__PURE__ */ new Set(), r = [...e];
	for (; r.length;) {
		let e = r.pop();
		n.has(e) || (n.add(e), t(e).forEach((e) => {
			n.has(e) || r.push(e);
		}));
	}
	return n;
}
function Ee(e) {
	let t = Ce(e);
	if (t.length) throw new Se(t);
}
//#endregion
//#region src/components/WorkflowDesigner.vue?vue&type=script&setup=true&lang.ts
var De = { class: "toolbox" }, Oe = ["disabled"], ke = ["disabled", "onClick"], Ae = { class: "workspace" }, je = { class: "toolbar" }, Me = ["disabled"], Ne = ["disabled"], Pe = ["disabled"], Fe = ["disabled"], Ie = ["disabled"], Le = ["disabled"], Re = ["disabled"], ze = ["disabled"], Be = ["disabled"], Ve = ["disabled"], He = ["disabled"], Ue = { "aria-label": "编辑模式" }, We = {
	key: 0,
	class: "dirty",
	title: "有尚未导出的修改"
}, Ge = { class: "view-tools" }, Ke = {
	key: 0,
	class: "json-editor"
}, X = ["readonly"], qe = { class: "json-actions" }, Je = {
	key: 0,
	class: "error"
}, Ye = ["disabled"], Xe = {
	key: 0,
	class: "validation-success"
}, Ze = {
	key: 1,
	class: "validation-list"
}, Qe = ["onClick"], $e = /* @__PURE__ */ l({
	__name: "WorkflowDesigner",
	props: {
		modelValue: {},
		readonly: {
			type: Boolean,
			default: !1
		},
		guardBeforeUnload: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"update:modelValue",
		"change",
		"dirty-change",
		"load-error"
	],
	setup(t, { expose: r, emit: l }) {
		let _ = t, y = l, E = [
			{
				type: "start",
				label: "开始"
			},
			{
				type: "end",
				label: "结束"
			},
			{
				type: "task",
				label: "任务"
			},
			{
				type: "decision",
				label: "判断"
			},
			{
				type: "fork",
				label: "分支"
			},
			{
				type: "join",
				label: "合并"
			},
			{
				type: "custom",
				label: "自定义"
			},
			{
				type: "subprocess",
				label: "子流程"
			}
		], D = h(null), O = h(null), k = xe(_.modelValue) ? _.modelValue : be, A = h(J(k)), j = n(() => _.readonly), M = h(null), N = h("design"), P = h(""), F = h(""), I = h(!1), L = h(!1), R = h([]), B = null, V = h([]), H = h([]), ee = h(JSON.stringify(A.value)), U = null, W = h(!1), G = h(null), te = n(() => V.value.length > 0), ne = n(() => H.value.length > 0), re = n(() => JSON.stringify(A.value) !== ee.value), K = n(() => M.value?.kind === "nodes" ? M.value.refs : M.value?.kind === "node" ? [M.value.ref] : []), ie = n(() => K.value.filter((e) => A.value.states[e]?.type !== "start")), ae = h(null), oe = 0, se = h(100), ce = (e) => B?.select(e), le = () => B?.zoomIn(), ue = () => B?.zoomOut(), de = () => B?.fitToContent(), fe = () => B?.resetView(), pe = (e) => B?.alignSelection(e), me = (e) => B?.distributeSelection(e), he = (e) => {
			if (M.value = e, !j.value && !(!W.value || e?.kind !== "node")) {
				if (!G.value) {
					G.value = e.ref;
					return;
				}
				if (G.value === e.ref) {
					window.alert("连线不能连接节点自身");
					return;
				}
				Te(G.value, e.ref), W.value = !1, G.value = null;
			}
		}, q = () => {
			B?.load(A.value), M.value = null;
		}, _e = () => B?.refresh(), ve = () => {
			pt() && dt(be, {
				markClean: !0,
				emit: !0
			});
		}, Se = () => {
			pt() && dt({
				states: {},
				paths: {},
				props: {
					name: "new-process",
					displayName: "新流程",
					expireTime: "",
					instanceUrl: "",
					instanceNoClass: ""
				}
			}, {
				markClean: !0,
				emit: !0
			});
		}, Y = (e) => {
			if (j.value) return;
			if (e === "start" && Object.values(A.value.states).some((e) => e.type === "start")) {
				window.alert("流程只能包含一个开始节点");
				return;
			}
			let t = 1;
			for (; A.value.states[`${e}${t}`];) t++;
			let n = `${e}${t}`, r = {
				name: { value: n },
				displayName: { value: n },
				preInterceptors: { value: "" },
				postInterceptors: { value: "" }
			};
			e === "task" && Object.assign(r, {
				form: { value: "" },
				assignee: { value: "" },
				performType: { value: "ANY" },
				taskType: { value: "Major" },
				expireTime: { value: "" },
				reminderTime: { value: "" },
				reminderRepeat: { value: "" },
				autoExecute: { value: "" },
				callback: { value: "" }
			}), e === "decision" && Object.assign(r, {
				expr: { value: "" },
				handleClass: { value: "" }
			}), e === "custom" && Object.assign(r, {
				form: { value: "" },
				clazz: { value: "" },
				methodName: { value: "" },
				args: { value: "" },
				var: { value: "" }
			}), e === "subprocess" && Object.assign(r, {
				form: { value: "" },
				processName: { value: "" },
				version: { value: "0" }
			});
			let i = Object.keys(A.value.states).length, a = J(A.value);
			A.value.states[n] = {
				type: e,
				attr: {
					x: 80 + i % 4 * 150,
					y: 80 + Math.floor(i / 4) * 100,
					width: [
						"start",
						"end",
						"decision",
						"fork",
						"join"
					].includes(e) ? 48 : 120,
					height: 52
				},
				props: r,
				fields: e === "task" ? [] : void 0
			}, ot(a), q(), u(() => B?.select({
				kind: "node",
				ref: n
			}));
		}, we = () => {
			W.value = !W.value, G.value = null;
		}, Te = (e, t) => {
			if (A.value.states[e]?.type === "end") {
				window.alert("结束节点不能作为连线起点");
				return;
			}
			if (A.value.states[t]?.type === "start") {
				window.alert("开始节点不能作为连线终点");
				return;
			}
			if (Object.values(A.value.paths).some((n) => n.from === e && n.to === t)) {
				window.alert("这两个节点之间已存在同方向连线");
				return;
			}
			let n = J(A.value), r = 1;
			for (; A.value.paths[`transition${r}`];) r++;
			let i = `transition${r}`;
			A.value.paths[i] = {
				from: e,
				to: t,
				dots: [],
				text: {
					text: "",
					x: 0,
					y: -8
				},
				props: {
					name: { value: i },
					displayName: { value: "" },
					expr: { value: "" }
				}
			}, ot(n), q(), u(() => B?.select({
				kind: "path",
				ref: i
			}));
		}, $e = () => {
			if (j.value || !M.value) return;
			let e = J(A.value);
			if (M.value.kind === "path") delete A.value.paths[M.value.ref];
			else {
				let e = M.value.kind === "nodes" ? M.value.refs : [M.value.ref];
				e.forEach((e) => delete A.value.states[e]), Object.entries(A.value.paths).forEach(([t, n]) => {
					(e.includes(n.from) || e.includes(n.to)) && delete A.value.paths[t];
				});
			}
			ot(e), q();
		}, et = () => {
			let e = ie.value;
			if (!e.length) return;
			let t = {}, n = {};
			e.forEach((e) => t[e] = J({
				states: { [e]: A.value.states[e] },
				paths: {},
				props: {}
			}).states[e]), Object.entries(A.value.paths).forEach(([t, r]) => {
				e.includes(r.from) && e.includes(r.to) && (n[t] = JSON.parse(JSON.stringify(r)));
			}), ae.value = {
				nodes: t,
				paths: n
			}, oe = 0;
		}, Z = (e, t) => {
			let n = 1, r = `${e}_copy`;
			for (; t[r];) r = `${e}_copy${++n}`;
			return r;
		}, Q = () => {
			if (j.value || !ae.value) return;
			let e = J(A.value), t = Object.keys(ae.value.nodes), n = {}, r = [], i = 30 * ++oe;
			t.forEach((e) => {
				let t = JSON.parse(JSON.stringify(ae.value.nodes[e])), a = Z(e, A.value.states);
				n[e] = a, r.push(a), t.attr.x += i, t.attr.y += i, t.props.name = { value: a }, A.value.states[a] = t;
			}), Object.entries(ae.value.paths).forEach(([e, t]) => {
				let r = Z(e, A.value.paths), a = JSON.parse(JSON.stringify(t));
				a.from = n[a.from], a.to = n[a.to], a.dots = a.dots.map((e) => ({
					x: e.x + i,
					y: e.y + i
				})), a.props.name = { value: r }, A.value.paths[r] = a;
			}), ot(e), q(), u(() => B?.select(r.length > 1 ? {
				kind: "nodes",
				refs: r
			} : {
				kind: "node",
				ref: r[0]
			}));
		}, tt = () => {
			P.value = JSON.stringify(A.value, null, 2), F.value = "", N.value = "json";
		}, nt = () => {
			try {
				let e = JSON.parse(P.value);
				Ee(e);
				let t = J(A.value);
				A.value = J(e), ot(t), lt = J(A.value), F.value = "", N.value = "design", u(q);
			} catch (e) {
				F.value = e instanceof Error ? e.message : "JSON 无效";
			}
		}, rt = () => {
			R.value = Ce(A.value), L.value = !0;
		}, it = (e) => {
			if (!e.target || e.target === "process") {
				L.value = !1, B?.fitToContent();
				return;
			}
			let t = A.value.states[e.target] ? "node" : A.value.paths[e.target] ? "path" : null;
			t && (L.value = !1, N.value = "design", u(() => B?.focus({
				kind: t,
				ref: e.target
			})));
		}, at = () => {
			if (R.value = Ce(A.value), R.value.length) {
				L.value = !0;
				return;
			}
			let e = URL.createObjectURL(new Blob([JSON.stringify(A.value, null, 2)], { type: "application/json" })), t = document.createElement("a");
			t.href = e, t.download = `${A.value.props.name || "workflow"}.json`, t.click(), URL.revokeObjectURL(e);
		}, ot = (e) => {
			j.value || JSON.stringify(e) === JSON.stringify(A.value) || (V.value.push(e), V.value.length > 100 && V.value.shift(), H.value = [], vt());
		}, st = () => {
			U = J(A.value);
		}, ct = () => {
			U && ot(U), U = null, lt = J(A.value);
		}, lt = J(A.value), ut = () => {
			j.value || (ot(lt), lt = J(A.value), _e());
		}, dt = (e, t = {}) => xe(e) ? (A.value = J(e), V.value = [], H.value = [], lt = J(e), t.markClean && (ee.value = JSON.stringify(e)), N.value = "design", t.emit && vt(), u(q), !0) : (y("load-error", Ce(e)), !1), ft = () => {
			let e = V.value.pop();
			e && (H.value.push(J(A.value)), A.value = e, lt = J(e), vt(), u(q));
		}, $ = () => {
			let e = H.value.pop();
			e && (V.value.push(J(A.value)), A.value = e, lt = J(e), vt(), u(q));
		}, pt = () => !re.value || window.confirm("当前流程有未保存修改，确定放弃吗？"), mt = () => B?.resize(), ht = () => O.value?.focus({ preventScroll: !0 }), gt = (e) => {
			let t = e.target;
			if (![
				"INPUT",
				"TEXTAREA",
				"SELECT"
			].includes(t.tagName) && (e.key === "Escape" && (W.value = !1, G.value = null, B?.select(null)), !j.value && ((e.key === "Delete" || e.key === "Backspace") && M.value && (e.preventDefault(), $e()), (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z" && (e.preventDefault(), e.shiftKey ? $() : ft()), (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y" && (e.preventDefault(), $()), (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c" && (e.preventDefault(), et()), (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "v" && (e.preventDefault(), Q()), [
				"ArrowLeft",
				"ArrowRight",
				"ArrowUp",
				"ArrowDown"
			].includes(e.key) && K.value.length))) {
				e.preventDefault();
				let t = e.shiftKey ? 10 : 1;
				B?.moveSelection(e.key === "ArrowLeft" ? -t : e.key === "ArrowRight" ? t : 0, e.key === "ArrowUp" ? -t : e.key === "ArrowDown" ? t : 0);
			}
		}, _t = (e) => {
			_.guardBeforeUnload && re.value && (e.preventDefault(), e.returnValue = "");
		};
		p(() => {
			_.modelValue && !xe(_.modelValue) && y("load-error", Ce(_.modelValue)), D.value && (B = new z(D.value, {
				onSelect: he,
				onZoom: (e) => se.value = e,
				onEditStart: st,
				onEditEnd: ct
			}, j.value), q(), window.addEventListener("resize", mt), window.addEventListener("beforeunload", _t));
		});
		let vt = () => {
			let e = J(A.value);
			y("update:modelValue", e), y("change", e);
		};
		return S(() => _.readonly, (e) => {
			B?.setReadOnly(e), e && (W.value = !1, G.value = null);
		}), S(() => _.modelValue, (e) => {
			e && JSON.stringify(e) !== JSON.stringify(A.value) && dt(e, { markClean: !0 });
		}, { deep: !0 }), S(re, (e) => y("dirty-change", e), { immediate: !0 }), f(() => {
			window.removeEventListener("resize", mt), window.removeEventListener("beforeunload", _t), B?.destroy();
		}), r({
			validate: () => Ce(A.value),
			undo: ft,
			redo: $,
			zoomIn: le,
			zoomOut: ue,
			resetView: fe,
			fitToContent: de,
			markClean: () => {
				ee.value = JSON.stringify(A.value);
			},
			focusNode: (e) => A.value.states[e] ? (N.value = "design", u(() => B?.focus({
				kind: "node",
				ref: e
			})), !0) : !1,
			getSelection: () => M.value ? JSON.parse(JSON.stringify(M.value)) : null,
			getWorkflow: () => J(A.value),
			alignSelection: pe,
			distributeSelection: me
		}), (t, n) => (m(), a("main", {
			ref_key: "designerRoot",
			ref: O,
			class: "designer-shell",
			tabindex: "0",
			onKeydown: gt
		}, [
			o("aside", De, [
				n[10] ||= o("h1", null, "Workflow", -1),
				n[11] ||= o("p", { class: "muted" }, "Vue 3 Designer", -1),
				o("button", {
					type: "button",
					disabled: j.value,
					class: d({ active: W.value }),
					onClick: we
				}, v(W.value ? G.value ? "请选择终点" : "请选择起点" : "创建连线"), 11, Oe),
				n[12] ||= o("h2", null, "组件", -1),
				(m(), a(e, null, g(E, (e) => o("button", {
					key: e.type,
					type: "button",
					disabled: j.value,
					onClick: (t) => Y(e.type)
				}, [o("span", { class: d(["node-icon", e.type]) }, null, 2), s(v(e.label), 1)], 8, ke)), 64))
			]),
			o("section", Ae, [
				o("header", je, [
					o("div", null, [
						o("button", {
							type: "button",
							disabled: j.value,
							onClick: Se
						}, " 新建 ", 8, Me),
						o("button", {
							type: "button",
							disabled: j.value,
							onClick: ve
						}, " 打开示例 ", 8, Ne),
						o("button", {
							type: "button",
							onClick: rt
						}, "校验流程"),
						o("button", {
							type: "button",
							onClick: at
						}, "导出 JSON"),
						o("button", {
							type: "button",
							disabled: j.value || !te.value,
							onClick: ft
						}, " 撤销 ", 8, Pe),
						o("button", {
							type: "button",
							disabled: j.value || !ne.value,
							onClick: $
						}, " 重做 ", 8, Fe),
						o("button", {
							type: "button",
							disabled: j.value || !M.value,
							onClick: $e
						}, " 删除 ", 8, Ie),
						o("button", {
							type: "button",
							disabled: j.value || !ie.value.length,
							onClick: et
						}, " 复制 ", 8, Le),
						o("button", {
							type: "button",
							disabled: j.value || !ae.value,
							onClick: Q
						}, " 粘贴 ", 8, Re),
						K.value.length > 1 ? (m(), a(e, { key: 0 }, [
							o("button", {
								type: "button",
								disabled: j.value,
								onClick: n[0] ||= (e) => pe("left")
							}, " 左对齐 ", 8, ze),
							o("button", {
								type: "button",
								disabled: j.value,
								onClick: n[1] ||= (e) => pe("top")
							}, " 顶对齐 ", 8, Be),
							o("button", {
								type: "button",
								disabled: j.value || K.value.length < 3,
								onClick: n[2] ||= (e) => me("horizontal")
							}, " 水平分布 ", 8, Ve),
							o("button", {
								type: "button",
								disabled: j.value || K.value.length < 3,
								onClick: n[3] ||= (e) => me("vertical")
							}, " 垂直分布 ", 8, He)
						], 64)) : i("", !0)
					]),
					o("nav", Ue, [o("button", {
						type: "button",
						class: d({ active: N.value === "design" }),
						onClick: n[4] ||= (e) => N.value = "design"
					}, " 设计 ", 2), o("button", {
						type: "button",
						class: d({ active: N.value === "json" }),
						onClick: tt
					}, " JSON ", 2)]),
					o("button", {
						type: "button",
						class: "about",
						onClick: n[5] ||= (e) => I.value = !0
					}, " 关于 "),
					re.value ? (m(), a("span", We, "● 未保存")) : i("", !0)
				]),
				o("div", Ge, [
					o("button", {
						type: "button",
						title: "放大",
						onClick: le
					}, "＋"),
					o("button", {
						type: "button",
						title: "缩小",
						onClick: ue
					}, "－"),
					o("button", {
						type: "button",
						title: "恢复 100%",
						onClick: fe
					}, v(se.value) + "% ", 1),
					o("button", {
						type: "button",
						onClick: de
					}, "适应窗口"),
					n[13] ||= o("span", null, "滚轮缩放，Alt+拖动或中键拖动画布；双击连线增加拐点，双击拐点删除", -1)
				]),
				w(o("div", {
					ref_key: "canvasHost",
					ref: D,
					class: "canvas",
					onPointerdown: ht,
					onClick: n[6] ||= T((e) => ce(null), ["self"])
				}, null, 544), [[x, N.value === "design"]]),
				N.value === "json" ? (m(), a("section", Ke, [w(o("textarea", {
					"onUpdate:modelValue": n[7] ||= (e) => P.value = e,
					readonly: j.value,
					spellcheck: "false",
					"aria-label": "流程 JSON"
				}, null, 8, X), [[b, P.value]]), o("div", qe, [F.value ? (m(), a("span", Je, v(F.value), 1)) : i("", !0), o("button", {
					type: "button",
					disabled: j.value,
					onClick: nt
				}, " 应用 JSON ", 8, Ye)])])) : i("", !0)
			]),
			c(ge, {
				workflow: A.value,
				selection: M.value,
				readonly: j.value,
				onChange: ut
			}, null, 8, [
				"workflow",
				"selection",
				"readonly"
			]),
			c(ye, {
				open: I.value,
				title: "关于 Aj Workflow Designer",
				onClose: n[8] ||= (e) => I.value = !1
			}, {
				default: C(() => [...n[14] ||= [o("p", null, "基于 Vue 3、TypeScript 与 Raphael 的轻量级流程设计器。", -1), o("p", null, "SVG 图形采用命令式适配器管理，不进入 Vue 响应式系统。", -1)]]),
				_: 1
			}, 8, ["open"]),
			c(ye, {
				open: L.value,
				title: R.value.length ? `发现 ${R.value.length} 个问题` : "流程校验通过",
				onClose: n[9] ||= (e) => L.value = !1
			}, {
				default: C(() => [R.value.length ? (m(), a("ol", Ze, [(m(!0), a(e, null, g(R.value, (e, t) => (m(), a("li", { key: `${e.code}-${t}` }, [o("button", {
					type: "button",
					onClick: (t) => it(e)
				}, v(e.message), 9, Qe)]))), 128))])) : (m(), a("p", Xe, " 流程结构和属性校验通过。 "))]),
				_: 1
			}, 8, ["open", "title"])
		], 544));
	}
}), et = $e;
//#endregion
export { $e as WorkflowDesigner, Se as WorkflowValidationError, J as cloneWorkflow, et as default, Ce as inspectWorkflow, xe as isRenderableWorkflow, Ee as validateWorkflow };
