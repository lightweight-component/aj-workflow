import { defineComponent as hn, computed as le, openBlock as It, createElementBlock as Rt, Fragment as oe, createElementVNode as it, createTextVNode as ae, renderList as Ne, toDisplayString as re, withDirectives as Re, vModelText as Ge, createCommentVNode as Be, vModelDynamic as Jn, createBlock as Gn, Teleport as Wn, withModifiers as $n, renderSlot as Kn, ref as Yt, onMounted as Qn, watch as sn, onBeforeUnmount as Zn, normalizeClass as Je, vShow as ti, createVNode as an, withCtx as Tn, nextTick as ve } from "vue";
const ei = { class: "property-editor" }, ni = ["value"], ii = ["value"], ri = ["disabled", "value", "onChange"], si = ["value"], ai = ["disabled", "type", "value", "onInput"], oi = {
  key: 0,
  class: "fields-editor"
}, li = ["disabled"], hi = ["onUpdate:modelValue", "disabled"], ui = ["onUpdate:modelValue", "disabled"], ci = ["onUpdate:modelValue", "disabled"], di = ["disabled", "value", "onChange"], fi = ["disabled", "onClick"], pi = ["value"], vi = ["value"], yi = ["value"], mi = ["disabled", "value", "onInput"], gi = {
  key: 2,
  class: "empty-property"
}, xi = {
  key: 3,
  class: "process-editor"
}, bi = ["onUpdate:modelValue", "disabled", "type"], wi = /* @__PURE__ */ hn({
  __name: "PropertyEditor",
  props: {
    workflow: {},
    selection: {},
    readonly: { type: Boolean }
  },
  emits: ["change"],
  setup(U, { emit: v }) {
    const m = U, b = v, _ = le(() => m.selection?.kind === "node" ? m.workflow.states[m.selection.ref] : null), A = le(() => m.selection?.kind === "path" ? m.workflow.paths[m.selection.ref] : null), H = le(() => m.selection && "ref" in m.selection ? m.selection.ref : ""), p = [
      { name: "displayName", label: "显示名称" },
      { name: "name", label: "业务名称" },
      { name: "preInterceptors", label: "前置拦截器" },
      { name: "postInterceptors", label: "后置拦截器" }
    ], o = {
      task: [
        { name: "form", label: "表单 URL" },
        { name: "assignee", label: "参与者" },
        { name: "taskType", label: "任务类型", options: [{ value: "Major", label: "主办" }, { value: "Aidant", label: "协办" }] },
        { name: "performType", label: "参与类型", options: [{ value: "ANY", label: "任一参与者" }, { value: "ALL", label: "全部参与者" }] },
        { name: "expireTime", label: "期望完成时间" },
        { name: "reminderTime", label: "提醒时间" },
        { name: "reminderRepeat", label: "重复提醒间隔" },
        { name: "autoExecute", label: "自动执行", options: [{ value: "", label: "否" }, { value: "Y", label: "是" }] },
        { name: "callback", label: "回调类" }
      ],
      decision: [{ name: "expr", label: "决策表达式" }, { name: "handleClass", label: "决策处理类" }],
      custom: [{ name: "form", label: "表单 URL" }, { name: "clazz", label: "执行类" }, { name: "methodName", label: "方法名" }, { name: "args", label: "参数变量" }, { name: "var", label: "返回值变量" }],
      subprocess: [{ name: "processName", label: "子流程名称" }, { name: "version", label: "子流程版本", type: "number" }, { name: "form", label: "表单 URL" }]
    }, T = le(() => [...p, ...o[_.value?.type || ""] || []]), Y = [{ name: "name", label: "名称" }, { name: "displayName", label: "显示名称" }, { name: "expr", label: "条件表达式" }], Z = [{ name: "name", label: "流程名称" }, { name: "displayName", label: "显示名称" }, { name: "expireTime", label: "期望完成时间" }, { name: "instanceUrl", label: "实例 URL" }, { name: "instanceNoClass", label: "实例编号生成类" }], tt = () => b("change"), kt = (K) => _.value?.props[K]?.value ?? "", C = (K, k) => {
      _.value && (_.value.props[K] ??= { value: "" }, _.value.props[K].value = k, K === "displayName" && _.value.text && (_.value.text.text = k), tt());
    }, X = (K) => A.value?.props[K]?.value ?? "", G = (K, k) => {
      A.value && (A.value.props[K] = { value: k }, tt());
    }, pt = () => {
      _.value && ((_.value.fields ??= []).push({ name: "", displayName: "", type: "String", attrs: {} }), tt());
    }, I = (K) => {
      _.value?.fields?.splice(K, 1), tt();
    }, S = (K) => Object.entries(K).map(([k, $]) => `${k}=${$}`).join(`
`), lt = (K, k) => {
      _.value?.fields && (_.value.fields[K].attrs = Object.fromEntries(k.split(/\r?\n/).filter(Boolean).map(($) => {
        const et = $.indexOf("=");
        return et < 0 ? [$.trim(), ""] : [$.slice(0, et).trim(), $.slice(et + 1)];
      }).filter(([$]) => $)), tt());
    }, at = (K) => K.target.value;
    return (K, k) => (It(), Rt("aside", ei, [
      _.value ? (It(), Rt(oe, { key: 0 }, [
        k[3] || (k[3] = it("h2", null, "节点属性", -1)),
        it("label", null, [
          k[0] || (k[0] = ae("引用 ", -1)),
          it("input", {
            value: H.value,
            disabled: ""
          }, null, 8, ni)
        ]),
        it("label", null, [
          k[1] || (k[1] = ae("类型 ", -1)),
          it("input", {
            value: _.value.type,
            disabled: ""
          }, null, 8, ii)
        ]),
        (It(!0), Rt(oe, null, Ne(T.value, ($) => (It(), Rt("label", {
          key: $.name
        }, [
          ae(re($.label) + " ", 1),
          $.options ? (It(), Rt("select", {
            key: 0,
            disabled: U.readonly,
            value: kt($.name),
            onChange: (et) => C($.name, at(et))
          }, [
            (It(!0), Rt(oe, null, Ne($.options, (et) => (It(), Rt("option", {
              key: et.value,
              value: et.value
            }, re(et.label), 9, si))), 128))
          ], 40, ri)) : (It(), Rt("input", {
            key: 1,
            disabled: U.readonly,
            type: $.type || "text",
            value: kt($.name),
            onInput: (et) => C($.name, at(et))
          }, null, 40, ai))
        ]))), 128)),
        _.value.type === "task" ? (It(), Rt("section", oi, [
          it("h2", null, [
            k[2] || (k[2] = ae("任务字段 ", -1)),
            it("button", {
              type: "button",
              disabled: U.readonly,
              onClick: pt
            }, "添加", 8, li)
          ]),
          (It(!0), Rt(oe, null, Ne(_.value.fields, ($, et) => (It(), Rt("div", {
            key: et,
            class: "field-card"
          }, [
            Re(it("input", {
              "onUpdate:modelValue": (bt) => $.name = bt,
              disabled: U.readonly,
              placeholder: "字段名称",
              onInput: tt
            }, null, 40, hi), [
              [Ge, $.name]
            ]),
            Re(it("input", {
              "onUpdate:modelValue": (bt) => $.displayName = bt,
              disabled: U.readonly,
              placeholder: "显示名称",
              onInput: tt
            }, null, 40, ui), [
              [Ge, $.displayName]
            ]),
            Re(it("input", {
              "onUpdate:modelValue": (bt) => $.type = bt,
              disabled: U.readonly,
              placeholder: "Java 类型",
              onInput: tt
            }, null, 40, ci), [
              [Ge, $.type]
            ]),
            it("textarea", {
              disabled: U.readonly,
              value: S($.attrs),
              placeholder: "扩展属性，每行 key=value",
              onChange: (bt) => lt(et, at(bt))
            }, null, 40, di),
            it("button", {
              type: "button",
              disabled: U.readonly,
              onClick: (bt) => I(et)
            }, "删除字段", 8, fi)
          ]))), 128))
        ])) : Be("", !0)
      ], 64)) : A.value ? (It(), Rt(oe, { key: 1 }, [
        k[7] || (k[7] = it("h2", null, "连线属性", -1)),
        it("label", null, [
          k[4] || (k[4] = ae("引用 ", -1)),
          it("input", {
            value: H.value,
            disabled: ""
          }, null, 8, pi)
        ]),
        it("label", null, [
          k[5] || (k[5] = ae("起点 ", -1)),
          it("input", {
            value: A.value.from,
            disabled: ""
          }, null, 8, vi)
        ]),
        it("label", null, [
          k[6] || (k[6] = ae("终点 ", -1)),
          it("input", {
            value: A.value.to,
            disabled: ""
          }, null, 8, yi)
        ]),
        (It(), Rt(oe, null, Ne(Y, ($) => it("label", {
          key: $.name
        }, [
          ae(re($.label) + " ", 1),
          it("input", {
            disabled: U.readonly,
            value: X($.name),
            onInput: (et) => G($.name, at(et))
          }, null, 40, mi)
        ])), 64))
      ], 64)) : U.selection?.kind === "nodes" ? (It(), Rt("section", gi, "已选择 " + re(U.selection.refs.length) + " 个节点，可复制、粘贴或删除。", 1)) : (It(), Rt("section", xi, [
        k[8] || (k[8] = it("h2", null, "流程属性", -1)),
        (It(), Rt(oe, null, Ne(Z, ($) => it("label", {
          key: $.name
        }, [
          ae(re($.label) + " ", 1),
          Re(it("input", {
            "onUpdate:modelValue": (et) => U.workflow.props[$.name] = et,
            disabled: U.readonly,
            type: $.type || "text",
            onInput: tt
          }, null, 40, bi), [
            [Jn, U.workflow.props[$.name]]
          ])
        ])), 64))
      ]))
    ]));
  }
}), _i = ["aria-label"], ki = { class: "modal-body" }, Ln = /* @__PURE__ */ hn({
  __name: "SimpleModal",
  props: {
    open: { type: Boolean },
    title: {}
  },
  emits: ["close"],
  setup(U) {
    return (v, m) => (It(), Gn(Wn, { to: "body" }, [
      U.open ? (It(), Rt("div", {
        key: 0,
        class: "modal-mask",
        onMousedown: m[2] || (m[2] = $n((b) => v.$emit("close"), ["self"]))
      }, [
        it("section", {
          class: "modal",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": U.title
        }, [
          it("header", null, [
            it("strong", null, re(U.title), 1),
            it("button", {
              type: "button",
              "aria-label": "关闭",
              onClick: m[0] || (m[0] = (b) => v.$emit("close"))
            }, "×")
          ]),
          it("div", ki, [
            Kn(v.$slots, "default")
          ]),
          it("footer", null, [
            it("button", {
              type: "button",
              onClick: m[1] || (m[1] = (b) => v.$emit("close"))
            }, "关闭")
          ])
        ], 8, _i)
      ], 32)) : Be("", !0)
    ]));
  }
});
function Ei(U) {
  return U && U.__esModule && Object.prototype.hasOwnProperty.call(U, "default") ? U.default : U;
}
var on = { exports: {} }, On;
function Ci() {
  return On || (On = 1, (function(U, v) {
    (function(m, b) {
      U.exports = b();
    })(window, function() {
      return (function(m) {
        var b = {};
        function _(A) {
          if (b[A]) return b[A].exports;
          var H = b[A] = { i: A, l: !1, exports: {} };
          return m[A].call(H.exports, H, H.exports, _), H.l = !0, H.exports;
        }
        return _.m = m, _.c = b, _.d = function(A, H, p) {
          _.o(A, H) || Object.defineProperty(A, H, { enumerable: !0, get: p });
        }, _.r = function(A) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(A, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(A, "__esModule", { value: !0 });
        }, _.t = function(A, H) {
          if (1 & H && (A = _(A)), 8 & H || 4 & H && typeof A == "object" && A && A.__esModule) return A;
          var p = /* @__PURE__ */ Object.create(null);
          if (_.r(p), Object.defineProperty(p, "default", { enumerable: !0, value: A }), 2 & H && typeof A != "string") for (var o in A) _.d(p, o, (function(T) {
            return A[T];
          }).bind(null, o));
          return p;
        }, _.n = function(A) {
          var H = A && A.__esModule ? function() {
            return A.default;
          } : function() {
            return A;
          };
          return _.d(H, "a", H), H;
        }, _.o = function(A, H) {
          return Object.prototype.hasOwnProperty.call(A, H);
        }, _.p = "", _(_.s = 1);
      })([function(m, b, _) {
        var A, H;
        A = [_(2)], (H = (function(p) {
          function o(t) {
            if (o.is(t, "function")) return T ? t() : p.on("raphael.DOMload", t);
            if (o.is(t, wt)) return o._engine.create[I](o, t.splice(0, 3 + o.is(t[0], vt))).add(t);
            var e = Array.prototype.slice.call(arguments, 0);
            if (o.is(e[e.length - 1], "function")) {
              var n = e.pop();
              return T ? n.call(o._engine.create[I](o, e)) : p.on("raphael.DOMload", function() {
                n.call(o._engine.create[I](o, e));
              });
            }
            return o._engine.create[I](o, arguments);
          }
          o.version = "2.3.0", o.eve = p;
          var T, Y, Z = /[, ]+/, tt = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 }, kt = /\{(\d+)\}/g, C = "hasOwnProperty", X = { doc: document, win: window }, G = { was: Object.prototype[C].call(X.win, "Raphael"), is: X.win.Raphael }, pt = function() {
            this.ca = this.customAttributes = {};
          }, I = "apply", S = "concat", lt = "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch, at = "", K = " ", k = String, $ = "split", et = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[$](K), bt = { mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend" }, ht = k.prototype.toLowerCase, Q = Math, ut = Q.max, st = Q.min, St = Q.abs, Pt = Q.pow, Bt = Q.PI, vt = "number", wt = "array", te = Object.prototype.toString, h = (o._ISURL = /^url\(['"]?(.+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i), a = { NaN: 1, Infinity: 1, "-Infinity": 1 }, s = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, d = Q.round, y = parseFloat, x = parseInt, w = k.prototype.toUpperCase, B = o._availableAttrs = { "arrow-end": "none", "arrow-start": "none", blur: 0, "clip-rect": "0 0 1e9 1e9", cursor: "default", cx: 0, cy: 0, fill: "#fff", "fill-opacity": 1, font: '10px "Arial"', "font-family": '"Arial"', "font-size": "10", "font-style": "normal", "font-weight": 400, gradient: 0, height: 0, href: "http://raphaeljs.com/", "letter-spacing": 0, opacity: 1, path: "M0,0", r: 0, rx: 0, ry: 0, src: "", stroke: "#000", "stroke-dasharray": "", "stroke-linecap": "butt", "stroke-linejoin": "butt", "stroke-miterlimit": 0, "stroke-opacity": 1, "stroke-width": 1, target: "_blank", "text-anchor": "middle", title: "Raphael", transform: "", width: 0, x: 0, y: 0, class: "" }, E = o._availableAnimAttrs = { blur: vt, "clip-rect": "csv", cx: vt, cy: vt, fill: "colour", "fill-opacity": vt, "font-size": vt, height: vt, opacity: vt, path: "path", r: vt, rx: vt, ry: vt, stroke: "colour", "stroke-opacity": vt, "stroke-width": vt, transform: "transform", width: vt, x: vt, y: vt }, q = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/, W = { hs: 1, rg: 1 }, ot = /,?([achlmqrstvxz]),?/gi, yt = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, _t = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, xt = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi, Mt = (o._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}), Tt = function(t, e) {
            return y(t) - y(e);
          }, Nt = function(t) {
            return t;
          }, ct = o._rectPath = function(t, e, n, i, r) {
            return r ? [["M", t + r, e], ["l", n - 2 * r, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, i - 2 * r], ["a", r, r, 0, 0, 1, -r, r], ["l", 2 * r - n, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, 2 * r - i], ["a", r, r, 0, 0, 1, r, -r], ["z"]] : [["M", t, e], ["l", n, 0], ["l", 0, i], ["l", -n, 0], ["z"]];
          }, jt = function(t, e, n, i) {
            return i == null && (i = n), [["M", t, e], ["m", 0, -i], ["a", n, i, 0, 1, 1, 0, 2 * i], ["a", n, i, 0, 1, 1, 0, -2 * i], ["z"]];
          }, At = o._getPath = { path: function(t) {
            return t.attr("path");
          }, circle: function(t) {
            var e = t.attrs;
            return jt(e.cx, e.cy, e.r);
          }, ellipse: function(t) {
            var e = t.attrs;
            return jt(e.cx, e.cy, e.rx, e.ry);
          }, rect: function(t) {
            var e = t.attrs;
            return ct(e.x, e.y, e.width, e.height, e.r);
          }, image: function(t) {
            var e = t.attrs;
            return ct(e.x, e.y, e.width, e.height);
          }, text: function(t) {
            var e = t._getBBox();
            return ct(e.x, e.y, e.width, e.height);
          }, set: function(t) {
            var e = t._getBBox();
            return ct(e.x, e.y, e.width, e.height);
          } }, Vt = o.mapPath = function(t, e) {
            if (!e) return t;
            var n, i, r, l, c, u, f;
            for (r = 0, c = (t = $e(t)).length; r < c; r++) for (l = 1, u = (f = t[r]).length; l < u; l += 2) n = e.x(f[l], f[l + 1]), i = e.y(f[l], f[l + 1]), f[l] = n, f[l + 1] = i;
            return t;
          };
          if (o._g = X, o.type = X.win.SVGAngle || X.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", o.type == "VML") {
            var Lt, Ft = X.doc.createElement("div");
            if (Ft.innerHTML = '<v:shape adj="1"/>', (Lt = Ft.firstChild).style.behavior = "url(#default#VML)", !Lt || typeof Lt.adj != "object") return o.type = at;
            Ft = null;
          }
          function Ht(t) {
            if (typeof t == "function" || Object(t) !== t) return t;
            var e = new t.constructor();
            for (var n in t) t[C](n) && (e[n] = Ht(t[n]));
            return e;
          }
          o.svg = !(o.vml = o.type == "VML"), o._Paper = pt, o.fn = Y = pt.prototype = o.prototype, o._id = 0, o.is = function(t, e) {
            return (e = ht.call(e)) == "finite" ? !a[C](+t) : e == "array" ? t instanceof Array : e == "null" && t === null || e == typeof t && t !== null || e == "object" && t === Object(t) || e == "array" && Array.isArray && Array.isArray(t) || te.call(t).slice(8, -1).toLowerCase() == e;
          }, o.angle = function(t, e, n, i, r, l) {
            if (r == null) {
              var c = t - n, u = e - i;
              return c || u ? (180 + 180 * Q.atan2(-u, -c) / Bt + 360) % 360 : 0;
            }
            return o.angle(t, e, r, l) - o.angle(n, i, r, l);
          }, o.rad = function(t) {
            return t % 360 * Bt / 180;
          }, o.deg = function(t) {
            return Math.round(180 * t / Bt % 360 * 1e3) / 1e3;
          }, o.snapTo = function(t, e, n) {
            if (n = o.is(n, "finite") ? n : 10, o.is(t, wt)) {
              for (var i = t.length; i--; ) if (St(t[i] - e) <= n) return t[i];
            } else {
              var r = e % (t = +t);
              if (r < n) return e - r;
              if (r > t - n) return e - r + t;
            }
            return e;
          };
          var ee, he;
          o.createUUID = (ee = /[xy]/g, he = function(t) {
            var e = 16 * Q.random() | 0;
            return (t == "x" ? e : 3 & e | 8).toString(16);
          }, function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(ee, he).toUpperCase();
          }), o.setWindow = function(t) {
            p("raphael.setWindow", o, X.win, t), X.win = t, X.doc = X.win.document, o._engine.initWin && o._engine.initWin(X.win);
          };
          var Kt = function(t) {
            if (o.vml) {
              var e, n = /^\s+|\s+$/g;
              try {
                var i = new ActiveXObject("htmlfile");
                i.write("<body>"), i.close(), e = i.body;
              } catch {
                e = createPopup().document.body;
              }
              var r = e.createTextRange();
              Kt = Ut(function(c) {
                try {
                  e.style.color = k(c).replace(n, at);
                  var u = r.queryCommandValue("ForeColor");
                  return "#" + ("000000" + (u = (255 & u) << 16 | 65280 & u | (16711680 & u) >>> 16).toString(16)).slice(-6);
                } catch {
                  return "none";
                }
              });
            } else {
              var l = X.doc.createElement("i");
              l.title = "Raphaël Colour Picker", l.style.display = "none", X.doc.body.appendChild(l), Kt = Ut(function(c) {
                return l.style.color = c, X.doc.defaultView.getComputedStyle(l, at).getPropertyValue("color");
              });
            }
            return Kt(t);
          }, ue = function() {
            return "hsb(" + [this.h, this.s, this.b] + ")";
          }, ce = function() {
            return "hsl(" + [this.h, this.s, this.l] + ")";
          }, xe = function() {
            return this.hex;
          }, ye = function(t, e, n) {
            if (e == null && o.is(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, e = t.g, t = t.r), e == null && o.is(t, "string")) {
              var i = o.getRGB(t);
              t = i.r, e = i.g, n = i.b;
            }
            return (t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [t, e, n];
          }, be = function(t, e, n, i) {
            var r = { r: t *= 255, g: e *= 255, b: n *= 255, hex: o.rgb(t, e, n), toString: xe };
            return o.is(i, "finite") && (r.opacity = i), r;
          };
          function Ut(t, e, n) {
            return function i() {
              var r = Array.prototype.slice.call(arguments, 0), l = r.join("␀"), c = i.cache = i.cache || {}, u = i.count = i.count || [];
              return c[C](l) ? ((function(f, g) {
                for (var L = 0, D = f.length; L < D; L++) if (f[L] === g) return f.push(f.splice(L, 1)[0]);
              })(u, l), n ? n(c[l]) : c[l]) : (u.length >= 1e3 && delete c[u.shift()], u.push(l), c[l] = t[I](e, r), n ? n(c[l]) : c[l]);
            };
          }
          o.color = function(t) {
            var e;
            return o.is(t, "object") && "h" in t && "s" in t && "b" in t ? (e = o.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : o.is(t, "object") && "h" in t && "s" in t && "l" in t ? (e = o.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : (o.is(t, "string") && (t = o.getRGB(t)), o.is(t, "object") && "r" in t && "g" in t && "b" in t ? (e = o.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = o.rgb2hsb(t), t.v = e.b) : (t = { hex: "none" }).r = t.g = t.b = t.h = t.s = t.v = t.l = -1), t.toString = xe, t;
          }, o.hsb2rgb = function(t, e, n, i) {
            var r, l, c, u, f;
            return this.is(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, i = t.o, t = t.h), u = (f = n * e) * (1 - St((t = (t *= 360) % 360 / 60) % 2 - 1)), r = l = c = n - f, be(r += [f, u, 0, 0, u, f][t = ~~t], l += [u, f, f, u, 0, 0][t], c += [0, 0, u, f, f, u][t], i);
          }, o.hsl2rgb = function(t, e, n, i) {
            var r, l, c, u, f;
            return this.is(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), u = (f = 2 * e * (n < 0.5 ? n : 1 - n)) * (1 - St((t = (t *= 360) % 360 / 60) % 2 - 1)), r = l = c = n - f / 2, be(r += [f, u, 0, 0, u, f][t = ~~t], l += [u, f, f, u, 0, 0][t], c += [0, 0, u, f, f, u][t], i);
          }, o.rgb2hsb = function(t, e, n) {
            var i, r;
            return t = (n = ye(t, e, n))[0], e = n[1], n = n[2], { h: (((r = (i = ut(t, e, n)) - st(t, e, n)) == 0 ? null : i == t ? (e - n) / r : i == e ? (n - t) / r + 2 : (t - e) / r + 4) + 360) % 6 * 60 / 360, s: r == 0 ? 0 : r / i, b: i, toString: ue };
          }, o.rgb2hsl = function(t, e, n) {
            var i, r, l, c;
            return t = (n = ye(t, e, n))[0], e = n[1], n = n[2], i = ((r = ut(t, e, n)) + (l = st(t, e, n))) / 2, { h: (((c = r - l) == 0 ? null : r == t ? (e - n) / c : r == e ? (n - t) / c + 2 : (t - e) / c + 4) + 360) % 6 * 60 / 360, s: c == 0 ? 0 : i < 0.5 ? c / (2 * i) : c / (2 - 2 * i), l: i, toString: ce };
          }, o._path2string = function() {
            return this.join(",").replace(ot, "$1");
          }, o._preload = function(t, e) {
            var n = X.doc.createElement("img");
            n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function() {
              e.call(this), this.onload = null, X.doc.body.removeChild(this);
            }, n.onerror = function() {
              X.doc.body.removeChild(this);
            }, X.doc.body.appendChild(n), n.src = t;
          };
          function de() {
            return this.hex;
          }
          function we(t, e) {
            for (var n = [], i = 0, r = t.length; r - 2 * !e > i; i += 2) {
              var l = [{ x: +t[i - 2], y: +t[i - 1] }, { x: +t[i], y: +t[i + 1] }, { x: +t[i + 2], y: +t[i + 3] }, { x: +t[i + 4], y: +t[i + 5] }];
              e ? i ? r - 4 == i ? l[3] = { x: +t[0], y: +t[1] } : r - 2 == i && (l[2] = { x: +t[0], y: +t[1] }, l[3] = { x: +t[2], y: +t[3] }) : l[0] = { x: +t[r - 2], y: +t[r - 1] } : r - 4 == i ? l[3] = l[2] : i || (l[0] = { x: +t[i], y: +t[i + 1] }), n.push(["C", (-l[0].x + 6 * l[1].x + l[2].x) / 6, (-l[0].y + 6 * l[1].y + l[2].y) / 6, (l[1].x + 6 * l[2].x - l[3].x) / 6, (l[1].y + 6 * l[2].y - l[3].y) / 6, l[2].x, l[2].y]);
            }
            return n;
          }
          o.getRGB = Ut(function(t) {
            if (!t || (t = k(t)).indexOf("-") + 1) return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: de };
            if (t == "none") return { r: -1, g: -1, b: -1, hex: "none", toString: de };
            !W[C](t.toLowerCase().substring(0, 2)) && t.charAt() != "#" && (t = Kt(t));
            var e, n, i, r, l, c, u = t.match(h);
            return u ? (u[2] && (i = x(u[2].substring(5), 16), n = x(u[2].substring(3, 5), 16), e = x(u[2].substring(1, 3), 16)), u[3] && (i = x((l = u[3].charAt(3)) + l, 16), n = x((l = u[3].charAt(2)) + l, 16), e = x((l = u[3].charAt(1)) + l, 16)), u[4] && (c = u[4][$](q), e = y(c[0]), c[0].slice(-1) == "%" && (e *= 2.55), n = y(c[1]), c[1].slice(-1) == "%" && (n *= 2.55), i = y(c[2]), c[2].slice(-1) == "%" && (i *= 2.55), u[1].toLowerCase().slice(0, 4) == "rgba" && (r = y(c[3])), c[3] && c[3].slice(-1) == "%" && (r /= 100)), u[5] ? (c = u[5][$](q), e = y(c[0]), c[0].slice(-1) == "%" && (e *= 2.55), n = y(c[1]), c[1].slice(-1) == "%" && (n *= 2.55), i = y(c[2]), c[2].slice(-1) == "%" && (i *= 2.55), (c[0].slice(-3) == "deg" || c[0].slice(-1) == "°") && (e /= 360), u[1].toLowerCase().slice(0, 4) == "hsba" && (r = y(c[3])), c[3] && c[3].slice(-1) == "%" && (r /= 100), o.hsb2rgb(e, n, i, r)) : u[6] ? (c = u[6][$](q), e = y(c[0]), c[0].slice(-1) == "%" && (e *= 2.55), n = y(c[1]), c[1].slice(-1) == "%" && (n *= 2.55), i = y(c[2]), c[2].slice(-1) == "%" && (i *= 2.55), (c[0].slice(-3) == "deg" || c[0].slice(-1) == "°") && (e /= 360), u[1].toLowerCase().slice(0, 4) == "hsla" && (r = y(c[3])), c[3] && c[3].slice(-1) == "%" && (r /= 100), o.hsl2rgb(e, n, i, r)) : ((u = { r: e, g: n, b: i, toString: de }).hex = "#" + (16777216 | i | n << 8 | e << 16).toString(16).slice(1), o.is(r, "finite") && (u.opacity = r), u)) : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: de };
          }, o), o.hsb = Ut(function(t, e, n) {
            return o.hsb2rgb(t, e, n).hex;
          }), o.hsl = Ut(function(t, e, n) {
            return o.hsl2rgb(t, e, n).hex;
          }), o.rgb = Ut(function(t, e, n) {
            function i(r) {
              return r + 0.5 | 0;
            }
            return "#" + (16777216 | i(n) | i(e) << 8 | i(t) << 16).toString(16).slice(1);
          }), o.getColor = function(t) {
            var e = this.getColor.start = this.getColor.start || { h: 0, s: 1, b: t || 0.75 }, n = this.hsb2rgb(e.h, e.s, e.b);
            return e.h += 0.075, e.h > 1 && (e.h = 0, e.s -= 0.2, e.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: e.b })), n.hex;
          }, o.getColor.reset = function() {
            delete this.start;
          }, o.parsePathString = function(t) {
            if (!t) return null;
            var e = Qt(t);
            if (e.arr) return Dt(e.arr);
            var n = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 }, i = [];
            return o.is(t, wt) && o.is(t[0], wt) && (i = Dt(t)), i.length || k(t).replace(yt, function(r, l, c) {
              var u = [], f = l.toLowerCase();
              if (c.replace(xt, function(g, L) {
                L && u.push(+L);
              }), f == "m" && u.length > 2 && (i.push([l][S](u.splice(0, 2))), f = "l", l = l == "m" ? "l" : "L"), f == "r") i.push([l][S](u));
              else for (; u.length >= n[f] && (i.push([l][S](u.splice(0, n[f]))), n[f]); ) ;
            }), i.toString = o._path2string, e.arr = Dt(i), i;
          }, o.parseTransformString = Ut(function(t) {
            if (!t) return null;
            var e = [];
            return o.is(t, wt) && o.is(t[0], wt) && (e = Dt(t)), e.length || k(t).replace(_t, function(n, i, r) {
              var l = [];
              ht.call(i), r.replace(xt, function(c, u) {
                u && l.push(+u);
              }), e.push([i][S](l));
            }), e.toString = o._path2string, e;
          }, this, function(t) {
            if (!t) return t;
            for (var e = [], n = 0; n < t.length; n++) {
              for (var i = [], r = 0; r < t[n].length; r++) i.push(t[n][r]);
              e.push(i);
            }
            return e;
          });
          var Qt = function(t) {
            var e = Qt.ps = Qt.ps || {};
            return e[t] ? e[t].sleep = 100 : e[t] = { sleep: 100 }, setTimeout(function() {
              for (var n in e) e[C](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n]);
            }), e[t];
          };
          function _e(t, e, n, i, r) {
            return t * (t * (-3 * e + 9 * n - 9 * i + 3 * r) + 6 * e - 12 * n + 6 * i) - 3 * e + 3 * n;
          }
          function N(t, e, n, i, r, l, c, u, f) {
            f == null && (f = 1);
            for (var g = (f = f > 1 ? 1 : f < 0 ? 0 : f) / 2, L = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816], D = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472], P = 0, M = 0; M < 12; M++) {
              var z = g * L[M] + g, j = _e(z, t, n, r, c), R = _e(z, e, i, l, u), O = j * j + R * R;
              P += D[M] * Q.sqrt(O);
            }
            return g * P;
          }
          function rt(t, e, n, i, r, l, c, u) {
            if (!(ut(t, n) < st(r, c) || st(t, n) > ut(r, c) || ut(e, i) < st(l, u) || st(e, i) > ut(l, u))) {
              var f = (t - n) * (l - u) - (e - i) * (r - c);
              if (f) {
                var g = ((t * i - e * n) * (r - c) - (t - n) * (r * u - l * c)) / f, L = ((t * i - e * n) * (l - u) - (e - i) * (r * u - l * c)) / f, D = +g.toFixed(2), P = +L.toFixed(2);
                if (!(D < +st(t, n).toFixed(2) || D > +ut(t, n).toFixed(2) || D < +st(r, c).toFixed(2) || D > +ut(r, c).toFixed(2) || P < +st(e, i).toFixed(2) || P > +ut(e, i).toFixed(2) || P < +st(l, u).toFixed(2) || P > +ut(l, u).toFixed(2))) return { x: g, y: L };
              }
            }
          }
          function ft(t, e, n) {
            var i = o.bezierBBox(t), r = o.bezierBBox(e);
            if (!o.isBBoxIntersect(i, r)) return n ? 0 : [];
            for (var l = N.apply(0, t), c = N.apply(0, e), u = ut(~~(l / 5), 1), f = ut(~~(c / 5), 1), g = [], L = [], D = {}, P = n ? 0 : [], M = 0; M < u + 1; M++) {
              var z = o.findDotsAtSegment.apply(o, t.concat(M / u));
              g.push({ x: z.x, y: z.y, t: M / u });
            }
            for (M = 0; M < f + 1; M++) z = o.findDotsAtSegment.apply(o, e.concat(M / f)), L.push({ x: z.x, y: z.y, t: M / f });
            for (M = 0; M < u; M++) for (var j = 0; j < f; j++) {
              var R = g[M], O = g[M + 1], nt = L[j], V = L[j + 1], J = St(O.x - R.x) < 1e-3 ? "y" : "x", F = St(V.x - nt.x) < 1e-3 ? "y" : "x", mt = rt(R.x, R.y, O.x, O.y, nt.x, nt.y, V.x, V.y);
              if (mt) {
                if (D[mt.x.toFixed(4)] == mt.y.toFixed(4)) continue;
                D[mt.x.toFixed(4)] = mt.y.toFixed(4);
                var dt = R.t + St((mt[J] - R[J]) / (O[J] - R[J])) * (O.t - R.t), gt = nt.t + St((mt[F] - nt[F]) / (V[F] - nt[F])) * (V.t - nt.t);
                dt >= 0 && dt <= 1.001 && gt >= 0 && gt <= 1.001 && (n ? P++ : P.push({ x: mt.x, y: mt.y, t1: st(dt, 1), t2: st(gt, 1) }));
              }
            }
            return P;
          }
          function Et(t, e, n) {
            t = o._path2curve(t), e = o._path2curve(e);
            for (var i, r, l, c, u, f, g, L, D, P, M = n ? 0 : [], z = 0, j = t.length; z < j; z++) {
              var R = t[z];
              if (R[0] == "M") i = u = R[1], r = f = R[2];
              else {
                R[0] == "C" ? (D = [i, r].concat(R.slice(1)), i = D[6], r = D[7]) : (D = [i, r, i, r, u, f, u, f], i = u, r = f);
                for (var O = 0, nt = e.length; O < nt; O++) {
                  var V = e[O];
                  if (V[0] == "M") l = g = V[1], c = L = V[2];
                  else {
                    V[0] == "C" ? (P = [l, c].concat(V.slice(1)), l = P[6], c = P[7]) : (P = [l, c, l, c, g, L, g, L], l = g, c = L);
                    var J = ft(D, P, n);
                    if (n) M += J;
                    else {
                      for (var F = 0, mt = J.length; F < mt; F++) J[F].segment1 = z, J[F].segment2 = O, J[F].bez1 = D, J[F].bez2 = P;
                      M = M.concat(J);
                    }
                  }
                }
              }
            }
            return M;
          }
          o.findDotsAtSegment = function(t, e, n, i, r, l, c, u, f) {
            var g = 1 - f, L = Pt(g, 3), D = Pt(g, 2), P = f * f, M = P * f, z = L * t + 3 * D * f * n + 3 * g * f * f * r + M * c, j = L * e + 3 * D * f * i + 3 * g * f * f * l + M * u, R = t + 2 * f * (n - t) + P * (r - 2 * n + t), O = e + 2 * f * (i - e) + P * (l - 2 * i + e), nt = n + 2 * f * (r - n) + P * (c - 2 * r + n), V = i + 2 * f * (l - i) + P * (u - 2 * l + i), J = g * t + f * n, F = g * e + f * i, mt = g * r + f * c, dt = g * l + f * u, gt = 90 - 180 * Q.atan2(R - nt, O - V) / Bt;
            return (R > nt || O < V) && (gt += 180), { x: z, y: j, m: { x: R, y: O }, n: { x: nt, y: V }, start: { x: J, y: F }, end: { x: mt, y: dt }, alpha: gt };
          }, o.bezierBBox = function(t, e, n, i, r, l, c, u) {
            o.is(t, "array") || (t = [t, e, n, i, r, l, c, u]);
            var f = Ue.apply(null, t);
            return { x: f.min.x, y: f.min.y, x2: f.max.x, y2: f.max.y, width: f.max.x - f.min.x, height: f.max.y - f.min.y };
          }, o.isPointInsideBBox = function(t, e, n) {
            return e >= t.x && e <= t.x2 && n >= t.y && n <= t.y2;
          }, o.isBBoxIntersect = function(t, e) {
            var n = o.isPointInsideBBox;
            return n(e, t.x, t.y) || n(e, t.x2, t.y) || n(e, t.x, t.y2) || n(e, t.x2, t.y2) || n(t, e.x, e.y) || n(t, e.x2, e.y) || n(t, e.x, e.y2) || n(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y);
          }, o.pathIntersection = function(t, e) {
            return Et(t, e);
          }, o.pathIntersectionNumber = function(t, e) {
            return Et(t, e, 1);
          }, o.isPointInsidePath = function(t, e, n) {
            var i = o.pathBBox(t);
            return o.isPointInsideBBox(i, e, n) && Et(t, [["M", e, n], ["H", i.x2 + 10]], 1) % 2 == 1;
          }, o._removedFactory = function(t) {
            return function() {
              p("raphael.log", null, "Raphaël: you are calling to method “" + t + "” of removed object", t);
            };
          };
          var $t = o.pathBBox = function(t) {
            var e = Qt(t);
            if (e.bbox) return Ht(e.bbox);
            if (!t) return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };
            for (var n, i = 0, r = 0, l = [], c = [], u = 0, f = (t = $e(t)).length; u < f; u++) if ((n = t[u])[0] == "M") i = n[1], r = n[2], l.push(i), c.push(r);
            else {
              var g = Ue(i, r, n[1], n[2], n[3], n[4], n[5], n[6]);
              l = l[S](g.min.x, g.max.x), c = c[S](g.min.y, g.max.y), i = n[5], r = n[6];
            }
            var L = st[I](0, l), D = st[I](0, c), P = ut[I](0, l), M = ut[I](0, c), z = P - L, j = M - D, R = { x: L, y: D, x2: P, y2: M, width: z, height: j, cx: L + z / 2, cy: D + j / 2 };
            return e.bbox = Ht(R), R;
          }, Dt = function(t) {
            var e = Ht(t);
            return e.toString = o._path2string, e;
          }, ne = o._pathToRelative = function(t) {
            var e = Qt(t);
            if (e.rel) return Dt(e.rel);
            o.is(t, wt) && o.is(t && t[0], wt) || (t = o.parsePathString(t));
            var n = [], i = 0, r = 0, l = 0, c = 0, u = 0;
            t[0][0] == "M" && (l = i = t[0][1], c = r = t[0][2], u++, n.push(["M", i, r]));
            for (var f = u, g = t.length; f < g; f++) {
              var L = n[f] = [], D = t[f];
              if (D[0] != ht.call(D[0])) switch (L[0] = ht.call(D[0]), L[0]) {
                case "a":
                  L[1] = D[1], L[2] = D[2], L[3] = D[3], L[4] = D[4], L[5] = D[5], L[6] = +(D[6] - i).toFixed(3), L[7] = +(D[7] - r).toFixed(3);
                  break;
                case "v":
                  L[1] = +(D[1] - r).toFixed(3);
                  break;
                case "m":
                  l = D[1], c = D[2];
                default:
                  for (var P = 1, M = D.length; P < M; P++) L[P] = +(D[P] - (P % 2 ? i : r)).toFixed(3);
              }
              else {
                L = n[f] = [], D[0] == "m" && (l = D[1] + i, c = D[2] + r);
                for (var z = 0, j = D.length; z < j; z++) n[f][z] = D[z];
              }
              var R = n[f].length;
              switch (n[f][0]) {
                case "z":
                  i = l, r = c;
                  break;
                case "h":
                  i += +n[f][R - 1];
                  break;
                case "v":
                  r += +n[f][R - 1];
                  break;
                default:
                  i += +n[f][R - 2], r += +n[f][R - 1];
              }
            }
            return n.toString = o._path2string, e.rel = Dt(n), n;
          }, Gt = o._pathToAbsolute = function(t) {
            var e = Qt(t);
            if (e.abs) return Dt(e.abs);
            if (o.is(t, wt) && o.is(t && t[0], wt) || (t = o.parsePathString(t)), !t || !t.length) return [["M", 0, 0]];
            var n = [], i = 0, r = 0, l = 0, c = 0, u = 0;
            t[0][0] == "M" && (l = i = +t[0][1], c = r = +t[0][2], u++, n[0] = ["M", i, r]);
            for (var f, g, L = t.length == 3 && t[0][0] == "M" && t[1][0].toUpperCase() == "R" && t[2][0].toUpperCase() == "Z", D = u, P = t.length; D < P; D++) {
              if (n.push(f = []), (g = t[D])[0] != w.call(g[0])) switch (f[0] = w.call(g[0]), f[0]) {
                case "A":
                  f[1] = g[1], f[2] = g[2], f[3] = g[3], f[4] = g[4], f[5] = g[5], f[6] = +(g[6] + i), f[7] = +(g[7] + r);
                  break;
                case "V":
                  f[1] = +g[1] + r;
                  break;
                case "H":
                  f[1] = +g[1] + i;
                  break;
                case "R":
                  for (var M = [i, r][S](g.slice(1)), z = 2, j = M.length; z < j; z++) M[z] = +M[z] + i, M[++z] = +M[z] + r;
                  n.pop(), n = n[S](we(M, L));
                  break;
                case "M":
                  l = +g[1] + i, c = +g[2] + r;
                default:
                  for (z = 1, j = g.length; z < j; z++) f[z] = +g[z] + (z % 2 ? i : r);
              }
              else if (g[0] == "R") M = [i, r][S](g.slice(1)), n.pop(), n = n[S](we(M, L)), f = ["R"][S](g.slice(-2));
              else for (var R = 0, O = g.length; R < O; R++) f[R] = g[R];
              switch (f[0]) {
                case "Z":
                  i = l, r = c;
                  break;
                case "H":
                  i = f[1];
                  break;
                case "V":
                  r = f[1];
                  break;
                case "M":
                  l = f[f.length - 2], c = f[f.length - 1];
                default:
                  i = f[f.length - 2], r = f[f.length - 1];
              }
            }
            return n.toString = o._path2string, e.abs = Dt(n), n;
          }, Jt = function(t, e, n, i) {
            return [t, e, n, i, n, i];
          }, ie = function(t, e, n, i, r, l) {
            return [1 / 3 * t + 2 / 3 * n, 1 / 3 * e + 2 / 3 * i, 1 / 3 * r + 2 / 3 * n, 1 / 3 * l + 2 / 3 * i, r, l];
          }, Fe = function(t, e, n, i, r, l, c, u, f, g) {
            var L, D = 120 * Bt / 180, P = Bt / 180 * (+r || 0), M = [], z = Ut(function(Nn, Mn, Xe) {
              return { x: Nn * Q.cos(Xe) - Mn * Q.sin(Xe), y: Nn * Q.sin(Xe) + Mn * Q.cos(Xe) };
            });
            if (g) dt = g[0], gt = g[1], F = g[2], mt = g[3];
            else {
              t = (L = z(t, e, -P)).x, e = L.y, u = (L = z(u, f, -P)).x, f = L.y;
              var j = (t - u) / 2, R = (e - f) / 2, O = j * j / (n * n) + R * R / (i * i);
              O > 1 && (n *= O = Q.sqrt(O), i *= O);
              var nt = n * n, V = i * i, J = (l == c ? -1 : 1) * Q.sqrt(St((nt * V - nt * R * R - V * j * j) / (nt * R * R + V * j * j))), F = J * n * R / i + (t + u) / 2, mt = J * -i * j / n + (e + f) / 2, dt = Q.asin(((e - mt) / i).toFixed(9)), gt = Q.asin(((f - mt) / i).toFixed(9));
              (dt = t < F ? Bt - dt : dt) < 0 && (dt = 2 * Bt + dt), (gt = u < F ? Bt - gt : gt) < 0 && (gt = 2 * Bt + gt), c && dt > gt && (dt -= 2 * Bt), !c && gt > dt && (gt -= 2 * Bt);
            }
            var Te = gt - dt;
            if (St(Te) > D) {
              var Ve = gt, Wt = u, se = f;
              gt = dt + D * (c && gt > dt ? 1 : -1), u = F + n * Q.cos(gt), f = mt + i * Q.sin(gt), M = Fe(u, f, n, i, r, 0, c, Wt, se, [gt, Ve, F, mt]);
            }
            Te = gt - dt;
            var Le = Q.cos(dt), Oe = Q.sin(dt), He = Q.cos(gt), pe = Q.sin(gt), Se = Q.tan(Te / 4), Ye = 4 / 3 * n * Se, _n = 4 / 3 * i * Se, kn = [t, e], Pe = [t + Ye * Oe, e - _n * Le], En = [u + Ye * pe, f - _n * He], Cn = [u, f];
            if (Pe[0] = 2 * kn[0] - Pe[0], Pe[1] = 2 * kn[1] - Pe[1], g) return [Pe, En, Cn][S](M);
            for (var Sn = [], ge = 0, Xn = (M = [Pe, En, Cn][S](M).join()[$](",")).length; ge < Xn; ge++) Sn[ge] = ge % 2 ? z(M[ge - 1], M[ge], P).y : z(M[ge], M[ge + 1], P).x;
            return Sn;
          }, ke = function(t, e, n, i, r, l, c, u, f) {
            var g = 1 - f;
            return { x: Pt(g, 3) * t + 3 * Pt(g, 2) * f * n + 3 * g * f * f * r + Pt(f, 3) * c, y: Pt(g, 3) * e + 3 * Pt(g, 2) * f * i + 3 * g * f * f * l + Pt(f, 3) * u };
          }, Ue = Ut(function(t, e, n, i, r, l, c, u) {
            var f, g = r - 2 * n + t - (c - 2 * r + n), L = 2 * (n - t) - 2 * (r - n), D = t - n, P = (-L + Q.sqrt(L * L - 4 * g * D)) / 2 / g, M = (-L - Q.sqrt(L * L - 4 * g * D)) / 2 / g, z = [e, u], j = [t, c];
            return St(P) > "1e12" && (P = 0.5), St(M) > "1e12" && (M = 0.5), P > 0 && P < 1 && (f = ke(t, e, n, i, r, l, c, u, P), j.push(f.x), z.push(f.y)), M > 0 && M < 1 && (f = ke(t, e, n, i, r, l, c, u, M), j.push(f.x), z.push(f.y)), g = l - 2 * i + e - (u - 2 * l + i), D = e - i, P = (-(L = 2 * (i - e) - 2 * (l - i)) + Q.sqrt(L * L - 4 * g * D)) / 2 / g, M = (-L - Q.sqrt(L * L - 4 * g * D)) / 2 / g, St(P) > "1e12" && (P = 0.5), St(M) > "1e12" && (M = 0.5), P > 0 && P < 1 && (f = ke(t, e, n, i, r, l, c, u, P), j.push(f.x), z.push(f.y)), M > 0 && M < 1 && (f = ke(t, e, n, i, r, l, c, u, M), j.push(f.x), z.push(f.y)), { min: { x: st[I](0, j), y: st[I](0, z) }, max: { x: ut[I](0, j), y: ut[I](0, z) } };
          }), $e = o._path2curve = Ut(function(t, e) {
            var n = !e && Qt(t);
            if (!e && n.curve) return Dt(n.curve);
            for (var i = Gt(t), r = e && Gt(e), l = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, c = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, u = function(J, F, mt) {
              var dt, gt;
              if (!J) return ["C", F.x, F.y, F.x, F.y, F.x, F.y];
              switch (!(J[0] in { T: 1, Q: 1 }) && (F.qx = F.qy = null), J[0]) {
                case "M":
                  F.X = J[1], F.Y = J[2];
                  break;
                case "A":
                  J = ["C"][S](Fe[I](0, [F.x, F.y][S](J.slice(1))));
                  break;
                case "S":
                  mt == "C" || mt == "S" ? (dt = 2 * F.x - F.bx, gt = 2 * F.y - F.by) : (dt = F.x, gt = F.y), J = ["C", dt, gt][S](J.slice(1));
                  break;
                case "T":
                  mt == "Q" || mt == "T" ? (F.qx = 2 * F.x - F.qx, F.qy = 2 * F.y - F.qy) : (F.qx = F.x, F.qy = F.y), J = ["C"][S](ie(F.x, F.y, F.qx, F.qy, J[1], J[2]));
                  break;
                case "Q":
                  F.qx = J[1], F.qy = J[2], J = ["C"][S](ie(F.x, F.y, J[1], J[2], J[3], J[4]));
                  break;
                case "L":
                  J = ["C"][S](Jt(F.x, F.y, J[1], J[2]));
                  break;
                case "H":
                  J = ["C"][S](Jt(F.x, F.y, J[1], F.y));
                  break;
                case "V":
                  J = ["C"][S](Jt(F.x, F.y, F.x, J[1]));
                  break;
                case "Z":
                  J = ["C"][S](Jt(F.x, F.y, F.X, F.Y));
              }
              return J;
            }, f = function(J, F) {
              if (J[F].length > 7) {
                J[F].shift();
                for (var mt = J[F]; mt.length; ) L[F] = "A", r && (D[F] = "A"), J.splice(F++, 0, ["C"][S](mt.splice(0, 6)));
                J.splice(F, 1), j = ut(i.length, r && r.length || 0);
              }
            }, g = function(J, F, mt, dt, gt) {
              J && F && J[gt][0] == "M" && F[gt][0] != "M" && (F.splice(gt, 0, ["M", dt.x, dt.y]), mt.bx = 0, mt.by = 0, mt.x = J[gt][1], mt.y = J[gt][2], j = ut(i.length, r && r.length || 0));
            }, L = [], D = [], P = "", M = "", z = 0, j = ut(i.length, r && r.length || 0); z < j; z++) {
              i[z] && (P = i[z][0]), P != "C" && (L[z] = P, z && (M = L[z - 1])), i[z] = u(i[z], l, M), L[z] != "A" && P == "C" && (L[z] = "C"), f(i, z), r && (r[z] && (P = r[z][0]), P != "C" && (D[z] = P, z && (M = D[z - 1])), r[z] = u(r[z], c, M), D[z] != "A" && P == "C" && (D[z] = "C"), f(r, z)), g(i, r, l, c, z), g(r, i, c, l, z);
              var R = i[z], O = r && r[z], nt = R.length, V = r && O.length;
              l.x = R[nt - 2], l.y = R[nt - 1], l.bx = y(R[nt - 4]) || l.x, l.by = y(R[nt - 3]) || l.y, c.bx = r && (y(O[V - 4]) || c.x), c.by = r && (y(O[V - 3]) || c.y), c.x = r && O[V - 2], c.y = r && O[V - 1];
            }
            return r || (n.curve = Dt(i)), r ? [i, r] : i;
          }, null, Dt), qe = (o._parseDots = Ut(function(t) {
            for (var e = [], n = 0, i = t.length; n < i; n++) {
              var r = {}, l = t[n].match(/^([^:]*):?([\d\.]*)/);
              if (r.color = o.getRGB(l[1]), r.color.error) return null;
              r.opacity = r.color.opacity, r.color = r.color.hex, l[2] && (r.offset = l[2] + "%"), e.push(r);
            }
            for (n = 1, i = e.length - 1; n < i; n++) if (!e[n].offset) {
              for (var c = y(e[n - 1].offset || 0), u = 0, f = n + 1; f < i; f++) if (e[f].offset) {
                u = e[f].offset;
                break;
              }
              u || (u = 100, f = i);
              for (var g = ((u = y(u)) - c) / (f - n + 1); n < f; n++) c += g, e[n].offset = c + "%";
            }
            return e;
          }), o._tear = function(t, e) {
            t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next);
          }), Dn = (o._tofront = function(t, e) {
            e.top !== t && (qe(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t);
          }, o._toback = function(t, e) {
            e.bottom !== t && (qe(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t);
          }, o._insertafter = function(t, e, n) {
            qe(t, n), e == n.top && (n.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t;
          }, o._insertbefore = function(t, e, n) {
            qe(t, n), e == n.bottom && (n.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e;
          }, o.toMatrix = function(t, e) {
            var n = $t(t), i = { _: { transform: at }, getBBox: function() {
              return n;
            } };
            return un(i, e), i.matrix;
          }), un = (o.transformPath = function(t, e) {
            return Vt(t, Dn(t, e));
          }, o._extractTransform = function(t, e) {
            if (e == null) return t._.transform;
            e = k(e).replace(/\.{3}|\u2026/g, t._.transform || at);
            var n, i, r = o.parseTransformString(e), l = 0, c = 1, u = 1, f = t._, g = new Ee();
            if (f.transform = r || [], r) for (var L = 0, D = r.length; L < D; L++) {
              var P, M, z, j, R, O = r[L], nt = O.length, V = k(O[0]).toLowerCase(), J = O[0] != V, F = J ? g.invert() : 0;
              V == "t" && nt == 3 ? J ? (P = F.x(0, 0), M = F.y(0, 0), z = F.x(O[1], O[2]), j = F.y(O[1], O[2]), g.translate(z - P, j - M)) : g.translate(O[1], O[2]) : V == "r" ? nt == 2 ? (R = R || t.getBBox(1), g.rotate(O[1], R.x + R.width / 2, R.y + R.height / 2), l += O[1]) : nt == 4 && (J ? (z = F.x(O[2], O[3]), j = F.y(O[2], O[3]), g.rotate(O[1], z, j)) : g.rotate(O[1], O[2], O[3]), l += O[1]) : V == "s" ? nt == 2 || nt == 3 ? (R = R || t.getBBox(1), g.scale(O[1], O[nt - 1], R.x + R.width / 2, R.y + R.height / 2), c *= O[1], u *= O[nt - 1]) : nt == 5 && (J ? (z = F.x(O[3], O[4]), j = F.y(O[3], O[4]), g.scale(O[1], O[2], z, j)) : g.scale(O[1], O[2], O[3], O[4]), c *= O[1], u *= O[2]) : V == "m" && nt == 7 && g.add(O[1], O[2], O[3], O[4], O[5], O[6]), f.dirtyT = 1, t.matrix = g;
            }
            t.matrix = g, f.sx = c, f.sy = u, f.deg = l, f.dx = n = g.e, f.dy = i = g.f, c == 1 && u == 1 && !l && f.bbox ? (f.bbox.x += +n, f.bbox.y += +i) : f.dirtyT = 1;
          }), cn = function(t) {
            var e = t[0];
            switch (e.toLowerCase()) {
              case "t":
                return [e, 0, 0];
              case "m":
                return [e, 1, 0, 0, 1, 0, 0];
              case "r":
                return t.length == 4 ? [e, 0, t[2], t[3]] : [e, 0];
              case "s":
                return t.length == 5 ? [e, 1, 1, t[3], t[4]] : t.length == 3 ? [e, 1, 1] : [e, 1];
            }
          }, jn = o._equaliseTransform = function(t, e) {
            e = k(e).replace(/\.{3}|\u2026/g, t), t = o.parseTransformString(t) || [], e = o.parseTransformString(e) || [];
            for (var n, i, r, l, c = ut(t.length, e.length), u = [], f = [], g = 0; g < c; g++) {
              if (r = t[g] || cn(e[g]), l = e[g] || cn(r), r[0] != l[0] || r[0].toLowerCase() == "r" && (r[2] != l[2] || r[3] != l[3]) || r[0].toLowerCase() == "s" && (r[3] != l[3] || r[4] != l[4])) return;
              for (u[g] = [], f[g] = [], n = 0, i = ut(r.length, l.length); n < i; n++) n in r && (u[g][n] = r[n]), n in l && (f[g][n] = l[n]);
            }
            return { from: u, to: f };
          };
          function Ee(t, e, n, i, r, l) {
            t != null ? (this.a = +t, this.b = +e, this.c = +n, this.d = +i, this.e = +r, this.f = +l) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0);
          }
          o._getContainer = function(t, e, n, i) {
            var r;
            if ((r = i != null || o.is(t, "object") ? t : X.doc.getElementById(t)) != null) return r.tagName ? e == null ? { container: r, width: r.style.pixelWidth || r.offsetWidth, height: r.style.pixelHeight || r.offsetHeight } : { container: r, width: e, height: n } : { container: 1, x: t, y: e, width: n, height: i };
          }, o.pathToRelative = ne, o._engine = {}, o.path2curve = $e, o.matrix = function(t, e, n, i, r, l) {
            return new Ee(t, e, n, i, r, l);
          }, (function(t) {
            function e(i) {
              return i[0] * i[0] + i[1] * i[1];
            }
            function n(i) {
              var r = Q.sqrt(e(i));
              i[0] && (i[0] /= r), i[1] && (i[1] /= r);
            }
            t.add = function(i, r, l, c, u, f) {
              var g, L, D, P, M = [[], [], []], z = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]], j = [[i, l, u], [r, c, f], [0, 0, 1]];
              for (i && i instanceof Ee && (j = [[i.a, i.c, i.e], [i.b, i.d, i.f], [0, 0, 1]]), g = 0; g < 3; g++) for (L = 0; L < 3; L++) {
                for (P = 0, D = 0; D < 3; D++) P += z[g][D] * j[D][L];
                M[g][L] = P;
              }
              this.a = M[0][0], this.b = M[1][0], this.c = M[0][1], this.d = M[1][1], this.e = M[0][2], this.f = M[1][2];
            }, t.invert = function() {
              var i = this, r = i.a * i.d - i.b * i.c;
              return new Ee(i.d / r, -i.b / r, -i.c / r, i.a / r, (i.c * i.f - i.d * i.e) / r, (i.b * i.e - i.a * i.f) / r);
            }, t.clone = function() {
              return new Ee(this.a, this.b, this.c, this.d, this.e, this.f);
            }, t.translate = function(i, r) {
              this.add(1, 0, 0, 1, i, r);
            }, t.scale = function(i, r, l, c) {
              r == null && (r = i), (l || c) && this.add(1, 0, 0, 1, l, c), this.add(i, 0, 0, r, 0, 0), (l || c) && this.add(1, 0, 0, 1, -l, -c);
            }, t.rotate = function(i, r, l) {
              i = o.rad(i), r = r || 0, l = l || 0;
              var c = +Q.cos(i).toFixed(9), u = +Q.sin(i).toFixed(9);
              this.add(c, u, -u, c, r, l), this.add(1, 0, 0, 1, -r, -l);
            }, t.x = function(i, r) {
              return i * this.a + r * this.c + this.e;
            }, t.y = function(i, r) {
              return i * this.b + r * this.d + this.f;
            }, t.get = function(i) {
              return +this[k.fromCharCode(97 + i)].toFixed(4);
            }, t.toString = function() {
              return o.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
            }, t.toFilter = function() {
              return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
            }, t.offset = function() {
              return [this.e.toFixed(4), this.f.toFixed(4)];
            }, t.split = function() {
              var i = {};
              i.dx = this.e, i.dy = this.f;
              var r = [[this.a, this.c], [this.b, this.d]];
              i.scalex = Q.sqrt(e(r[0])), n(r[0]), i.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1], r[1] = [r[1][0] - r[0][0] * i.shear, r[1][1] - r[0][1] * i.shear], i.scaley = Q.sqrt(e(r[1])), n(r[1]), i.shear /= i.scaley;
              var l = -r[0][1], c = r[1][1];
              return c < 0 ? (i.rotate = o.deg(Q.acos(c)), l < 0 && (i.rotate = 360 - i.rotate)) : i.rotate = o.deg(Q.asin(l)), i.isSimple = !(+i.shear.toFixed(9) || i.scalex.toFixed(9) != i.scaley.toFixed(9) && i.rotate), i.isSuperSimple = !+i.shear.toFixed(9) && i.scalex.toFixed(9) == i.scaley.toFixed(9) && !i.rotate, i.noRotation = !+i.shear.toFixed(9) && !i.rotate, i;
            }, t.toTransformString = function(i) {
              var r = i || this[$]();
              return r.isSimple ? (r.scalex = +r.scalex.toFixed(4), r.scaley = +r.scaley.toFixed(4), r.rotate = +r.rotate.toFixed(4), (r.dx || r.dy ? "t" + [r.dx, r.dy] : at) + (r.scalex != 1 || r.scaley != 1 ? "s" + [r.scalex, r.scaley, 0, 0] : at) + (r.rotate ? "r" + [r.rotate, 0, 0] : at)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
            };
          })(Ee.prototype);
          for (var Vn = function() {
            this.returnValue = !1;
          }, Fn = function() {
            return this.originalEvent.preventDefault();
          }, Un = function() {
            this.cancelBubble = !0;
          }, qn = function() {
            return this.originalEvent.stopPropagation();
          }, dn = function(t) {
            var e = X.doc.documentElement.scrollTop || X.doc.body.scrollTop, n = X.doc.documentElement.scrollLeft || X.doc.body.scrollLeft;
            return { x: t.clientX + n, y: t.clientY + e };
          }, Hn = X.doc.addEventListener ? function(t, e, n, i) {
            var r = function(c) {
              var u = dn(c);
              return n.call(i, c, u.x, u.y);
            };
            if (t.addEventListener(e, r, !1), lt && bt[e]) {
              var l = function(c) {
                for (var u = dn(c), f = c, g = 0, L = c.targetTouches && c.targetTouches.length; g < L; g++) if (c.targetTouches[g].target == t) {
                  (c = c.targetTouches[g]).originalEvent = f, c.preventDefault = Fn, c.stopPropagation = qn;
                  break;
                }
                return n.call(i, c, u.x, u.y);
              };
              t.addEventListener(bt[e], l, !1);
            }
            return function() {
              return t.removeEventListener(e, r, !1), lt && bt[e] && t.removeEventListener(bt[e], l, !1), !0;
            };
          } : X.doc.attachEvent ? function(t, e, n, i) {
            var r = function(l) {
              l = l || X.win.event;
              var c = X.doc.documentElement.scrollTop || X.doc.body.scrollTop, u = X.doc.documentElement.scrollLeft || X.doc.body.scrollLeft, f = l.clientX + u, g = l.clientY + c;
              return l.preventDefault = l.preventDefault || Vn, l.stopPropagation = l.stopPropagation || Un, n.call(i, l, f, g);
            };
            return t.attachEvent("on" + e, r), function() {
              return t.detachEvent("on" + e, r), !0;
            };
          } : void 0, me = [], We = function(t) {
            for (var e, n = t.clientX, i = t.clientY, r = X.doc.documentElement.scrollTop || X.doc.body.scrollTop, l = X.doc.documentElement.scrollLeft || X.doc.body.scrollLeft, c = me.length; c--; ) {
              if (e = me[c], lt && t.touches) {
                for (var u, f = t.touches.length; f--; ) if ((u = t.touches[f]).identifier == e.el._drag.id) {
                  n = u.clientX, i = u.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                  break;
                }
              } else t.preventDefault();
              var g, L = e.el.node, D = L.nextSibling, P = L.parentNode, M = L.style.display;
              X.win.opera && P.removeChild(L), L.style.display = "none", g = e.el.paper.getElementByPoint(n, i), L.style.display = M, X.win.opera && (D ? P.insertBefore(L, D) : P.appendChild(L)), g && p("raphael.drag.over." + e.el.id, e.el, g), n += l, i += r, p("raphael.drag.move." + e.el.id, e.move_scope || e.el, n - e.el._drag.x, i - e.el._drag.y, n, i, t);
            }
          }, Ke = function(t) {
            o.unmousemove(We).unmouseup(Ke);
            for (var e, n = me.length; n--; ) (e = me[n]).el._drag = {}, p("raphael.drag.end." + e.el.id, e.end_scope || e.start_scope || e.move_scope || e.el, t);
            me = [];
          }, Ot = o.el = {}, fn = et.length; fn--; ) (function(t) {
            o[t] = Ot[t] = function(e, n) {
              return o.is(e, "function") && (this.events = this.events || [], this.events.push({ name: t, f: e, unbind: Hn(this.shape || this.node || X.doc, t, e, n || this) })), this;
            }, o["un" + t] = Ot["un" + t] = function(e) {
              for (var n = this.events || [], i = n.length; i--; ) n[i].name != t || !o.is(e, "undefined") && n[i].f != e || (n[i].unbind(), n.splice(i, 1), !n.length && delete this.events);
              return this;
            };
          })(et[fn]);
          Ot.data = function(t, e) {
            var n = Mt[this.id] = Mt[this.id] || {};
            if (arguments.length == 0) return n;
            if (arguments.length == 1) {
              if (o.is(t, "object")) {
                for (var i in t) t[C](i) && this.data(i, t[i]);
                return this;
              }
              return p("raphael.data.get." + this.id, this, n[t], t), n[t];
            }
            return n[t] = e, p("raphael.data.set." + this.id, this, e, t), this;
          }, Ot.removeData = function(t) {
            return t == null ? delete Mt[this.id] : Mt[this.id] && delete Mt[this.id][t], this;
          }, Ot.getData = function() {
            return Ht(Mt[this.id] || {});
          }, Ot.hover = function(t, e, n, i) {
            return this.mouseover(t, n).mouseout(e, i || n);
          }, Ot.unhover = function(t, e) {
            return this.unmouseover(t).unmouseout(e);
          };
          var Me = [];
          Ot.drag = function(t, e, n, i, r, l) {
            function c(u) {
              (u.originalEvent || u).preventDefault();
              var f = u.clientX, g = u.clientY, L = X.doc.documentElement.scrollTop || X.doc.body.scrollTop, D = X.doc.documentElement.scrollLeft || X.doc.body.scrollLeft;
              if (this._drag.id = u.identifier, lt && u.touches) {
                for (var P, M = u.touches.length; M--; ) if (P = u.touches[M], this._drag.id = P.identifier, P.identifier == this._drag.id) {
                  f = P.clientX, g = P.clientY;
                  break;
                }
              }
              this._drag.x = f + D, this._drag.y = g + L, !me.length && o.mousemove(We).mouseup(Ke), me.push({ el: this, move_scope: i, start_scope: r, end_scope: l }), e && p.on("raphael.drag.start." + this.id, e), t && p.on("raphael.drag.move." + this.id, t), n && p.on("raphael.drag.end." + this.id, n), p("raphael.drag.start." + this.id, r || i || this, this._drag.x, this._drag.y, u);
            }
            return this._drag = {}, Me.push({ el: this, start: c }), this.mousedown(c), this;
          }, Ot.onDragOver = function(t) {
            t ? p.on("raphael.drag.over." + this.id, t) : p.unbind("raphael.drag.over." + this.id);
          }, Ot.undrag = function() {
            for (var t = Me.length; t--; ) Me[t].el == this && (this.unmousedown(Me[t].start), Me.splice(t, 1), p.unbind("raphael.drag.*." + this.id));
            !Me.length && o.unmousemove(We).unmouseup(Ke), me = [];
          }, Y.circle = function(t, e, n) {
            var i = o._engine.circle(this, t || 0, e || 0, n || 0);
            return this.__set__ && this.__set__.push(i), i;
          }, Y.rect = function(t, e, n, i, r) {
            var l = o._engine.rect(this, t || 0, e || 0, n || 0, i || 0, r || 0);
            return this.__set__ && this.__set__.push(l), l;
          }, Y.ellipse = function(t, e, n, i) {
            var r = o._engine.ellipse(this, t || 0, e || 0, n || 0, i || 0);
            return this.__set__ && this.__set__.push(r), r;
          }, Y.path = function(t) {
            t && !o.is(t, "string") && !o.is(t[0], wt) && (t += at);
            var e = o._engine.path(o.format[I](o, arguments), this);
            return this.__set__ && this.__set__.push(e), e;
          }, Y.image = function(t, e, n, i, r) {
            var l = o._engine.image(this, t || "about:blank", e || 0, n || 0, i || 0, r || 0);
            return this.__set__ && this.__set__.push(l), l;
          }, Y.text = function(t, e, n) {
            var i = o._engine.text(this, t || 0, e || 0, k(n));
            return this.__set__ && this.__set__.push(i), i;
          }, Y.set = function(t) {
            !o.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
            var e = new je(t);
            return this.__set__ && this.__set__.push(e), e.paper = this, e.type = "set", e;
          }, Y.setStart = function(t) {
            this.__set__ = t || this.set();
          }, Y.setFinish = function(t) {
            var e = this.__set__;
            return delete this.__set__, e;
          }, Y.getSize = function() {
            var t = this.canvas.parentNode;
            return { width: t.offsetWidth, height: t.offsetHeight };
          }, Y.setSize = function(t, e) {
            return o._engine.setSize.call(this, t, e);
          }, Y.setViewBox = function(t, e, n, i, r) {
            return o._engine.setViewBox.call(this, t, e, n, i, r);
          }, Y.top = Y.bottom = null, Y.raphael = o;
          function pn() {
            return this.x + K + this.y + K + this.width + " × " + this.height;
          }
          Y.getElementByPoint = function(t, e) {
            var n, i, r, l, c, u, f, g = this.canvas, L = X.doc.elementFromPoint(t, e);
            if (X.win.opera && L.tagName == "svg") {
              var D = (i = (n = g).getBoundingClientRect(), r = n.ownerDocument, l = r.body, c = r.documentElement, u = c.clientTop || l.clientTop || 0, f = c.clientLeft || l.clientLeft || 0, { y: i.top + (X.win.pageYOffset || c.scrollTop || l.scrollTop) - u, x: i.left + (X.win.pageXOffset || c.scrollLeft || l.scrollLeft) - f }), P = g.createSVGRect();
              P.x = t - D.x, P.y = e - D.y, P.width = P.height = 1;
              var M = g.getIntersectionList(P, null);
              M.length && (L = M[M.length - 1]);
            }
            if (!L) return null;
            for (; L.parentNode && L != g.parentNode && !L.raphael; ) L = L.parentNode;
            return L == this.canvas.parentNode && (L = g), L = L && L.raphael ? this.getById(L.raphaelid) : null;
          }, Y.getElementsByBBox = function(t) {
            var e = this.set();
            return this.forEach(function(n) {
              o.isBBoxIntersect(n.getBBox(), t) && e.push(n);
            }), e;
          }, Y.getById = function(t) {
            for (var e = this.bottom; e; ) {
              if (e.id == t) return e;
              e = e.next;
            }
            return null;
          }, Y.forEach = function(t, e) {
            for (var n = this.bottom; n; ) {
              if (t.call(e, n) === !1) return this;
              n = n.next;
            }
            return this;
          }, Y.getElementsByPoint = function(t, e) {
            var n = this.set();
            return this.forEach(function(i) {
              i.isPointInside(t, e) && n.push(i);
            }), n;
          }, Ot.isPointInside = function(t, e) {
            var n = this.realPath = At[this.type](this);
            return this.attr("transform") && this.attr("transform").length && (n = o.transformPath(n, this.attr("transform"))), o.isPointInsidePath(n, t, e);
          }, Ot.getBBox = function(t) {
            if (this.removed) return {};
            var e = this._;
            return t ? (!e.dirty && e.bboxwt || (this.realPath = At[this.type](this), e.bboxwt = $t(this.realPath), e.bboxwt.toString = pn, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && (!e.dirty && this.realPath || (e.bboxwt = 0, this.realPath = At[this.type](this)), e.bbox = $t(Vt(this.realPath, this.matrix)), e.bbox.toString = pn, e.dirty = e.dirtyT = 0), e.bbox);
          }, Ot.clone = function() {
            if (this.removed) return null;
            var t = this.paper[this.type]().attr(this.attr());
            return this.__set__ && this.__set__.push(t), t;
          }, Ot.glow = function(t) {
            if (this.type == "text") return null;
            var e = { width: ((t = t || {}).width || 10) + (+this.attr("stroke-width") || 1), fill: t.fill || !1, opacity: t.opacity == null ? 0.5 : t.opacity, offsetx: t.offsetx || 0, offsety: t.offsety || 0, color: t.color || "#000" }, n = e.width / 2, i = this.paper, r = i.set(), l = this.realPath || At[this.type](this);
            l = this.matrix ? Vt(l, this.matrix) : l;
            for (var c = 1; c < n + 1; c++) r.push(i.path(l).attr({ stroke: e.color, fill: e.fill ? e.color : "none", "stroke-linejoin": "round", "stroke-linecap": "round", "stroke-width": +(e.width / n * c).toFixed(3), opacity: +(e.opacity / n).toFixed(3) }));
            return r.insertBefore(this).translate(e.offsetx, e.offsety);
          };
          var Qe = function(t, e, n, i, r, l, c, u, f) {
            return f == null ? N(t, e, n, i, r, l, c, u) : o.findDotsAtSegment(t, e, n, i, r, l, c, u, (function(g, L, D, P, M, z, j, R, O) {
              if (!(O < 0 || N(g, L, D, P, M, z, j, R) < O)) {
                var nt, V = 0.5, J = 1 - V;
                for (nt = N(g, L, D, P, M, z, j, R, J); St(nt - O) > 0.01; ) nt = N(g, L, D, P, M, z, j, R, J += (nt < O ? 1 : -1) * (V /= 2));
                return J;
              }
            })(t, e, n, i, r, l, c, u, f));
          }, Ze = function(t, e) {
            return function(n, i, r) {
              for (var l, c, u, f, g, L = "", D = {}, P = 0, M = 0, z = (n = $e(n)).length; M < z; M++) {
                if ((u = n[M])[0] == "M") l = +u[1], c = +u[2];
                else {
                  if (P + (f = Qe(l, c, u[1], u[2], u[3], u[4], u[5], u[6])) > i) {
                    if (e && !D.start) {
                      if (L += ["C" + (g = Qe(l, c, u[1], u[2], u[3], u[4], u[5], u[6], i - P)).start.x, g.start.y, g.m.x, g.m.y, g.x, g.y], r) return L;
                      D.start = L, L = ["M" + g.x, g.y + "C" + g.n.x, g.n.y, g.end.x, g.end.y, u[5], u[6]].join(), P += f, l = +u[5], c = +u[6];
                      continue;
                    }
                    if (!t && !e) return { x: (g = Qe(l, c, u[1], u[2], u[3], u[4], u[5], u[6], i - P)).x, y: g.y, alpha: g.alpha };
                  }
                  P += f, l = +u[5], c = +u[6];
                }
                L += u.shift() + u;
              }
              return D.end = L, (g = t ? P : e ? D : o.findDotsAtSegment(l, c, u[0], u[1], u[2], u[3], u[4], u[5], 1)).alpha && (g = { x: g.x, y: g.y, alpha: g.alpha }), g;
            };
          }, vn = Ze(1), yn = Ze(), tn = Ze(0, 1);
          o.getTotalLength = vn, o.getPointAtLength = yn, o.getSubpath = function(t, e, n) {
            if (this.getTotalLength(t) - n < 1e-6) return tn(t, e).end;
            var i = tn(t, n, 1);
            return e ? tn(i, e).end : i;
          }, Ot.getTotalLength = function() {
            var t = this.getPath();
            if (t) return this.node.getTotalLength ? this.node.getTotalLength() : vn(t);
          }, Ot.getPointAtLength = function(t) {
            var e = this.getPath();
            if (e) return yn(e, t);
          }, Ot.getPath = function() {
            var t, e = o._getPath[this.type];
            if (this.type != "text" && this.type != "set") return e && (t = e(this)), t;
          }, Ot.getSubpath = function(t, e) {
            var n = this.getPath();
            if (n) return o.getSubpath(n, t, e);
          };
          var Zt = o.easing_formulas = { linear: function(t) {
            return t;
          }, "<": function(t) {
            return Pt(t, 1.7);
          }, ">": function(t) {
            return Pt(t, 0.48);
          }, "<>": function(t) {
            var e = 0.48 - t / 1.04, n = Q.sqrt(0.1734 + e * e), i = n - e, r = -n - e, l = Pt(St(i), 1 / 3) * (i < 0 ? -1 : 1) + Pt(St(r), 1 / 3) * (r < 0 ? -1 : 1) + 0.5;
            return 3 * (1 - l) * l * l + l * l * l;
          }, backIn: function(t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
          }, backOut: function(t) {
            var e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1;
          }, elastic: function(t) {
            return t == !!t ? t : Pt(2, -10 * t) * Q.sin(2 * Bt * (t - 0.075) / 0.3) + 1;
          }, bounce: function(t) {
            var e = 7.5625, n = 2.75;
            return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + 0.75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + 0.9375 : e * (t -= 2.625 / n) * t + 0.984375;
          } };
          Zt.easeIn = Zt["ease-in"] = Zt["<"], Zt.easeOut = Zt["ease-out"] = Zt[">"], Zt.easeInOut = Zt["ease-in-out"] = Zt["<>"], Zt["back-in"] = Zt.backIn, Zt["back-out"] = Zt.backOut;
          var Ct = [], mn = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            setTimeout(t, 16);
          }, en = function() {
            for (var t = +/* @__PURE__ */ new Date(), e = 0; e < Ct.length; e++) {
              var n = Ct[e];
              if (!n.el.removed && !n.paused) {
                var i, r, l = t - n.start, c = n.ms, u = n.easing, f = n.from, g = n.diff, L = n.to, D = (n.t, n.el), P = {}, M = {};
                if (n.initstatus ? (l = (n.initstatus * n.anim.top - n.prev) / (n.percent - n.prev) * c, n.status = n.initstatus, delete n.initstatus, n.stop && Ct.splice(e--, 1)) : n.status = (n.prev + (n.percent - n.prev) * (l / c)) / n.anim.top, !(l < 0)) if (l < c) {
                  var z = u(l / c);
                  for (var j in f) if (f[C](j)) {
                    switch (E[j]) {
                      case vt:
                        i = +f[j] + z * c * g[j];
                        break;
                      case "colour":
                        i = "rgb(" + [nn(d(f[j].r + z * c * g[j].r)), nn(d(f[j].g + z * c * g[j].g)), nn(d(f[j].b + z * c * g[j].b))].join(",") + ")";
                        break;
                      case "path":
                        i = [];
                        for (var R = 0, O = f[j].length; R < O; R++) {
                          i[R] = [f[j][R][0]];
                          for (var nt = 1, V = f[j][R].length; nt < V; nt++) i[R][nt] = +f[j][R][nt] + z * c * g[j][R][nt];
                          i[R] = i[R].join(K);
                        }
                        i = i.join(K);
                        break;
                      case "transform":
                        if (g[j].real) for (i = [], R = 0, O = f[j].length; R < O; R++) for (i[R] = [f[j][R][0]], nt = 1, V = f[j][R].length; nt < V; nt++) i[R][nt] = f[j][R][nt] + z * c * g[j][R][nt];
                        else {
                          var J = function(mt) {
                            return +f[j][mt] + z * c * g[j][mt];
                          };
                          i = [["m", J(0), J(1), J(2), J(3), J(4), J(5)]];
                        }
                        break;
                      case "csv":
                        if (j == "clip-rect") for (i = [], R = 4; R--; ) i[R] = +f[j][R] + z * c * g[j][R];
                        break;
                      default:
                        var F = [][S](f[j]);
                        for (i = [], R = D.paper.customAttributes[j].length; R--; ) i[R] = +F[R] + z * c * g[j][R];
                    }
                    P[j] = i;
                  }
                  D.attr(P), (function(mt, dt, gt) {
                    setTimeout(function() {
                      p("raphael.anim.frame." + mt, dt, gt);
                    });
                  })(D.id, D, n.anim);
                } else {
                  if ((function(mt, dt, gt) {
                    setTimeout(function() {
                      p("raphael.anim.frame." + dt.id, dt, gt), p("raphael.anim.finish." + dt.id, dt, gt), o.is(mt, "function") && mt.call(dt);
                    });
                  })(n.callback, D, n.anim), D.attr(L), Ct.splice(e--, 1), n.repeat > 1 && !n.next) {
                    for (r in L) L[C](r) && (M[r] = n.totalOrigin[r]);
                    n.el.attr(M), De(n.anim, n.el, n.anim.percents[0], null, n.totalOrigin, n.repeat - 1);
                  }
                  n.next && !n.stop && De(n.anim, n.el, n.next, null, n.totalOrigin, n.repeat);
                }
              }
            }
            Ct.length && mn(en);
          }, nn = function(t) {
            return t > 255 ? 255 : t < 0 ? 0 : t;
          };
          function Yn(t, e, n, i, r, l) {
            var c = 3 * e, u = 3 * (i - e) - c, f = 1 - c - u, g = 3 * n, L = 3 * (r - n) - g, D = 1 - g - L;
            function P(M) {
              return ((f * M + u) * M + c) * M;
            }
            return (function(M, z) {
              var j = (function(R, O) {
                var nt, V, J, F, mt, dt;
                for (J = R, dt = 0; dt < 8; dt++) {
                  if (F = P(J) - R, St(F) < O) return J;
                  if (St(mt = (3 * f * J + 2 * u) * J + c) < 1e-6) break;
                  J -= F / mt;
                }
                if (V = 1, (J = R) < (nt = 0)) return nt;
                if (J > V) return V;
                for (; nt < V; ) {
                  if (F = P(J), St(F - R) < O) return J;
                  R > F ? nt = J : V = J, J = (V - nt) / 2 + nt;
                }
                return J;
              })(M, z);
              return ((D * j + L) * j + g) * j;
            })(t, 1 / (200 * l));
          }
          function fe(t, e) {
            var n = [], i = {};
            if (this.ms = e, this.times = 1, t) {
              for (var r in t) t[C](r) && (i[y(r)] = t[r], n.push(y(r)));
              n.sort(Tt);
            }
            this.anim = i, this.top = n[n.length - 1], this.percents = n;
          }
          function De(t, e, n, i, r, l) {
            n = y(n);
            var c, u, f, g, L, D, P = t.ms, M = {}, z = {}, j = {};
            if (i) for (O = 0, nt = Ct.length; O < nt; O++) {
              var R = Ct[O];
              if (R.el.id == e.id && R.anim == t) {
                R.percent != n ? (Ct.splice(O, 1), f = 1) : u = R, e.attr(R.totalOrigin);
                break;
              }
            }
            else i = +z;
            for (var O = 0, nt = t.percents.length; O < nt; O++) {
              if (t.percents[O] == n || t.percents[O] > i * t.top) {
                n = t.percents[O], L = t.percents[O - 1] || 0, P = P / t.top * (n - L), g = t.percents[O + 1], c = t.anim[n];
                break;
              }
              i && e.attr(t.anim[t.percents[O]]);
            }
            if (c) {
              if (u) u.initstatus = i, u.start = /* @__PURE__ */ new Date() - u.ms * i;
              else {
                for (var V in c) if (c[C](V) && (E[C](V) || e.paper.customAttributes[C](V))) switch (M[V] = e.attr(V), M[V] == null && (M[V] = B[V]), z[V] = c[V], E[V]) {
                  case vt:
                    j[V] = (z[V] - M[V]) / P;
                    break;
                  case "colour":
                    M[V] = o.getRGB(M[V]);
                    var J = o.getRGB(z[V]);
                    j[V] = { r: (J.r - M[V].r) / P, g: (J.g - M[V].g) / P, b: (J.b - M[V].b) / P };
                    break;
                  case "path":
                    var F = $e(M[V], z[V]), mt = F[1];
                    for (M[V] = F[0], j[V] = [], O = 0, nt = M[V].length; O < nt; O++) {
                      j[V][O] = [0];
                      for (var dt = 1, gt = M[V][O].length; dt < gt; dt++) j[V][O][dt] = (mt[O][dt] - M[V][O][dt]) / P;
                    }
                    break;
                  case "transform":
                    var Te = e._, Ve = jn(Te[V], z[V]);
                    if (Ve) for (M[V] = Ve.from, z[V] = Ve.to, j[V] = [], j[V].real = !0, O = 0, nt = M[V].length; O < nt; O++) for (j[V][O] = [M[V][O][0]], dt = 1, gt = M[V][O].length; dt < gt; dt++) j[V][O][dt] = (z[V][O][dt] - M[V][O][dt]) / P;
                    else {
                      var Wt = e.matrix || new Ee(), se = { _: { transform: Te.transform }, getBBox: function() {
                        return e.getBBox(1);
                      } };
                      M[V] = [Wt.a, Wt.b, Wt.c, Wt.d, Wt.e, Wt.f], un(se, z[V]), z[V] = se._.transform, j[V] = [(se.matrix.a - Wt.a) / P, (se.matrix.b - Wt.b) / P, (se.matrix.c - Wt.c) / P, (se.matrix.d - Wt.d) / P, (se.matrix.e - Wt.e) / P, (se.matrix.f - Wt.f) / P];
                    }
                    break;
                  case "csv":
                    var Le = k(c[V])[$](Z), Oe = k(M[V])[$](Z);
                    if (V == "clip-rect") for (M[V] = Oe, j[V] = [], O = Oe.length; O--; ) j[V][O] = (Le[O] - M[V][O]) / P;
                    z[V] = Le;
                    break;
                  default:
                    for (Le = [][S](c[V]), Oe = [][S](M[V]), j[V] = [], O = e.paper.customAttributes[V].length; O--; ) j[V][O] = ((Le[O] || 0) - (Oe[O] || 0)) / P;
                }
                var He = c.easing, pe = o.easing_formulas[He];
                if (!pe) if ((pe = k(He).match(s)) && pe.length == 5) {
                  var Se = pe;
                  pe = function(Ye) {
                    return Yn(Ye, +Se[1], +Se[2], +Se[3], +Se[4], P);
                  };
                } else pe = Nt;
                if (R = { anim: t, percent: n, timestamp: D = c.start || t.start || +/* @__PURE__ */ new Date(), start: D + (t.del || 0), status: 0, initstatus: i || 0, stop: !1, ms: P, easing: pe, from: M, diff: j, to: z, el: e, callback: c.callback, prev: L, next: g, repeat: l || t.times, origin: e.attr(), totalOrigin: r }, Ct.push(R), i && !u && !f && (R.stop = !0, R.start = /* @__PURE__ */ new Date() - P * i, Ct.length == 1)) return en();
                f && (R.start = /* @__PURE__ */ new Date() - R.ms * i), Ct.length == 1 && mn(en);
              }
              p("raphael.anim.start." + e.id, e, t);
            }
          }
          function gn(t) {
            for (var e = 0; e < Ct.length; e++) Ct[e].el.paper == t && Ct.splice(e--, 1);
          }
          Ot.animateWith = function(t, e, n, i, r, l) {
            if (this.removed) return l && l.call(this), this;
            var c = n instanceof fe ? n : o.animation(n, i, r, l);
            De(c, this, c.percents[0], null, this.attr());
            for (var u = 0, f = Ct.length; u < f; u++) if (Ct[u].anim == e && Ct[u].el == t) {
              Ct[f - 1].start = Ct[u].start;
              break;
            }
            return this;
          }, Ot.onAnimation = function(t) {
            return t ? p.on("raphael.anim.frame." + this.id, t) : p.unbind("raphael.anim.frame." + this.id), this;
          }, fe.prototype.delay = function(t) {
            var e = new fe(this.anim, this.ms);
            return e.times = this.times, e.del = +t || 0, e;
          }, fe.prototype.repeat = function(t) {
            var e = new fe(this.anim, this.ms);
            return e.del = this.del, e.times = Q.floor(ut(t, 0)) || 1, e;
          }, o.animation = function(t, e, n, i) {
            if (t instanceof fe) return t;
            !o.is(n, "function") && n || (i = i || n || null, n = null), t = Object(t), e = +e || 0;
            var r, l, c = {};
            for (l in t) t[C](l) && y(l) != l && y(l) + "%" != l && (r = !0, c[l] = t[l]);
            if (r) return n && (c.easing = n), i && (c.callback = i), new fe({ 100: c }, e);
            if (i) {
              var u = 0;
              for (var f in t) {
                var g = x(f);
                t[C](f) && g > u && (u = g);
              }
              !t[u += "%"].callback && (t[u].callback = i);
            }
            return new fe(t, e);
          }, Ot.animate = function(t, e, n, i) {
            if (this.removed) return i && i.call(this), this;
            var r = t instanceof fe ? t : o.animation(t, e, n, i);
            return De(r, this, r.percents[0], null, this.attr()), this;
          }, Ot.setTime = function(t, e) {
            return t && e != null && this.status(t, st(e, t.ms) / t.ms), this;
          }, Ot.status = function(t, e) {
            var n, i, r = [], l = 0;
            if (e != null) return De(t, this, -1, st(e, 1)), this;
            for (n = Ct.length; l < n; l++) if ((i = Ct[l]).el.id == this.id && (!t || i.anim == t)) {
              if (t) return i.status;
              r.push({ anim: i.anim, status: i.status });
            }
            return t ? 0 : r;
          }, Ot.pause = function(t) {
            for (var e = 0; e < Ct.length; e++) Ct[e].el.id != this.id || t && Ct[e].anim != t || p("raphael.anim.pause." + this.id, this, Ct[e].anim) !== !1 && (Ct[e].paused = !0);
            return this;
          }, Ot.resume = function(t) {
            for (var e = 0; e < Ct.length; e++) if (Ct[e].el.id == this.id && (!t || Ct[e].anim == t)) {
              var n = Ct[e];
              p("raphael.anim.resume." + this.id, this, n.anim) !== !1 && (delete n.paused, this.status(n.anim, n.status));
            }
            return this;
          }, Ot.stop = function(t) {
            for (var e = 0; e < Ct.length; e++) Ct[e].el.id != this.id || t && Ct[e].anim != t || p("raphael.anim.stop." + this.id, this, Ct[e].anim) !== !1 && Ct.splice(e--, 1);
            return this;
          }, p.on("raphael.remove", gn), p.on("raphael.clear", gn), Ot.toString = function() {
            return "Raphaël’s object";
          };
          var xn, bn, Ce, wn, je = function(t) {
            if (this.items = [], this.length = 0, this.type = "set", t) for (var e = 0, n = t.length; e < n; e++) !t[e] || t[e].constructor != Ot.constructor && t[e].constructor != je || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++);
          }, Xt = je.prototype;
          for (var rn in Xt.push = function() {
            for (var t, e, n = 0, i = arguments.length; n < i; n++) !(t = arguments[n]) || t.constructor != Ot.constructor && t.constructor != je || (this[e = this.items.length] = this.items[e] = t, this.length++);
            return this;
          }, Xt.pop = function() {
            return this.length && delete this[this.length--], this.items.pop();
          }, Xt.forEach = function(t, e) {
            for (var n = 0, i = this.items.length; n < i; n++) if (t.call(e, this.items[n], n) === !1) return this;
            return this;
          }, Ot) Ot[C](rn) && (Xt[rn] = /* @__PURE__ */ (function(t) {
            return function() {
              var e = arguments;
              return this.forEach(function(n) {
                n[t][I](n, e);
              });
            };
          })(rn));
          return Xt.attr = function(t, e) {
            if (t && o.is(t, wt) && o.is(t[0], "object")) for (var n = 0, i = t.length; n < i; n++) this.items[n].attr(t[n]);
            else for (var r = 0, l = this.items.length; r < l; r++) this.items[r].attr(t, e);
            return this;
          }, Xt.clear = function() {
            for (; this.length; ) this.pop();
          }, Xt.splice = function(t, e, n) {
            t = t < 0 ? ut(this.length + t, 0) : t, e = ut(0, st(this.length - t, e));
            var i, r = [], l = [], c = [];
            for (i = 2; i < arguments.length; i++) c.push(arguments[i]);
            for (i = 0; i < e; i++) l.push(this[t + i]);
            for (; i < this.length - t; i++) r.push(this[t + i]);
            var u = c.length;
            for (i = 0; i < u + r.length; i++) this.items[t + i] = this[t + i] = i < u ? c[i] : r[i - u];
            for (i = this.items.length = this.length -= e - u; this[i]; ) delete this[i++];
            return new je(l);
          }, Xt.exclude = function(t) {
            for (var e = 0, n = this.length; e < n; e++) if (this[e] == t) return this.splice(e, 1), !0;
          }, Xt.animate = function(t, e, n, i) {
            (o.is(n, "function") || !n) && (i = n || null);
            var r, l, c = this.items.length, u = c, f = this;
            if (!c) return this;
            i && (l = function() {
              !--c && i.call(f);
            }), n = o.is(n, "string") ? n : l;
            var g = o.animation(t, e, n, l);
            for (r = this.items[--u].animate(g); u--; ) this.items[u] && !this.items[u].removed && this.items[u].animateWith(r, g, g), this.items[u] && !this.items[u].removed || c--;
            return this;
          }, Xt.insertAfter = function(t) {
            for (var e = this.items.length; e--; ) this.items[e].insertAfter(t);
            return this;
          }, Xt.getBBox = function() {
            for (var t = [], e = [], n = [], i = [], r = this.items.length; r--; ) if (!this.items[r].removed) {
              var l = this.items[r].getBBox();
              t.push(l.x), e.push(l.y), n.push(l.x + l.width), i.push(l.y + l.height);
            }
            return { x: t = st[I](0, t), y: e = st[I](0, e), x2: n = ut[I](0, n), y2: i = ut[I](0, i), width: n - t, height: i - e };
          }, Xt.clone = function(t) {
            t = this.paper.set();
            for (var e = 0, n = this.items.length; e < n; e++) t.push(this.items[e].clone());
            return t;
          }, Xt.toString = function() {
            return "Raphaël‘s set";
          }, Xt.glow = function(t) {
            var e = this.paper.set();
            return this.forEach(function(n, i) {
              var r = n.glow(t);
              r?.forEach(function(l, c) {
                e.push(l);
              });
            }), e;
          }, Xt.isPointInside = function(t, e) {
            var n = !1;
            return this.forEach(function(i) {
              if (i.isPointInside(t, e)) return n = !0, !1;
            }), n;
          }, o.registerFont = function(t) {
            if (!t.face) return t;
            this.fonts = this.fonts || {};
            var e = { w: t.w, face: {}, glyphs: {} }, n = t.face["font-family"];
            for (var i in t.face) t.face[C](i) && (e.face[i] = t.face[i]);
            if (this.fonts[n] ? this.fonts[n].push(e) : this.fonts[n] = [e], !t.svg) {
              for (var r in e.face["units-per-em"] = x(t.face["units-per-em"], 10), t.glyphs) if (t.glyphs[C](r)) {
                var l = t.glyphs[r];
                if (e.glyphs[r] = { w: l.w, k: {}, d: l.d && "M" + l.d.replace(/[mlcxtrv]/g, function(u) {
                  return { l: "L", c: "C", x: "z", t: "m", r: "l", v: "c" }[u] || "M";
                }) + "z" }, l.k) for (var c in l.k) l[C](c) && (e.glyphs[r].k[c] = l.k[c]);
              }
            }
            return t;
          }, Y.getFont = function(t, e, n, i) {
            if (i = i || "normal", n = n || "normal", e = +e || { normal: 400, bold: 700, lighter: 300, bolder: 800 }[e] || 400, o.fonts) {
              var r, l = o.fonts[t];
              if (!l) {
                var c = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, at) + "(\\s|$)", "i");
                for (var u in o.fonts) if (o.fonts[C](u) && c.test(u)) {
                  l = o.fonts[u];
                  break;
                }
              }
              if (l) for (var f = 0, g = l.length; f < g && ((r = l[f]).face["font-weight"] != e || r.face["font-style"] != n && r.face["font-style"] || r.face["font-stretch"] != i); f++) ;
              return r;
            }
          }, Y.print = function(t, e, n, i, r, l, c, u) {
            l = l || "middle", c = ut(st(c || 0, 1), -1), u = ut(st(u || 1, 3), 1);
            var f, g = k(n)[$](at), L = 0, D = 0, P = at;
            if (o.is(i, "string") && (i = this.getFont(i)), i) {
              f = (r || 16) / i.face["units-per-em"];
              for (var M = i.face.bbox[$](Z), z = +M[0], j = M[3] - M[1], R = 0, O = +M[1] + (l == "baseline" ? j + +i.face.descent : j / 2), nt = 0, V = g.length; nt < V; nt++) {
                if (g[nt] == `
`) L = 0, F = 0, D = 0, R += j * u;
                else {
                  var J = D && i.glyphs[g[nt - 1]] || {}, F = i.glyphs[g[nt]];
                  L += D ? (J.w || i.w) + (J.k && J.k[g[nt]] || 0) + i.w * c : 0, D = 1;
                }
                F && F.d && (P += o.transformPath(F.d, ["t", L * f, R * f, "s", f, f, z, O, "t", (t - z) / f, (e - O) / f]));
              }
            }
            return this.path(P).attr({ fill: "#000", stroke: "none" });
          }, Y.add = function(t) {
            if (o.is(t, "array")) for (var e, n = this.set(), i = 0, r = t.length; i < r; i++) e = t[i] || {}, tt[C](e.type) && n.push(this[e.type]().attr(e));
            return n;
          }, o.format = function(t, e) {
            var n = o.is(e, wt) ? [0][S](e) : arguments;
            return t && o.is(t, "string") && n.length - 1 && (t = t.replace(kt, function(i, r) {
              return n[++r] == null ? at : n[r];
            })), t || at;
          }, o.fullfill = (xn = /\{([^\}]+)\}/g, bn = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, function(t, e) {
            return String(t).replace(xn, function(n, i) {
              return (function(r, l, c) {
                var u = c;
                return l.replace(bn, function(f, g, L, D, P) {
                  g = g || D, u && (g in u && (u = u[g]), typeof u == "function" && P && (u = u()));
                }), u = (u == null || u == c ? r : u) + "";
              })(n, i, e);
            });
          }), o.ninja = function() {
            if (G.was) X.win.Raphael = G.is;
            else {
              window.Raphael = void 0;
              try {
                delete window.Raphael;
              } catch {
              }
            }
            return o;
          }, o.st = Xt, p.on("raphael.DOMload", function() {
            T = !0;
          }), (Ce = document).readyState == null && Ce.addEventListener && (Ce.addEventListener("DOMContentLoaded", wn = function() {
            Ce.removeEventListener("DOMContentLoaded", wn, !1), Ce.readyState = "complete";
          }, !1), Ce.readyState = "loading"), (function t() {
            /in/.test(Ce.readyState) ? setTimeout(t, 9) : o.eve("raphael.DOMload");
          })(), o;
        }).apply(b, A)) === void 0 || (m.exports = H);
      }, function(m, b, _) {
        var A, H;
        A = [_(0), _(3), _(4)], (H = (function(p) {
          return p;
        }).apply(b, A)) === void 0 || (m.exports = H);
      }, function(m, b, _) {
        var A, H, p, o, T, Y, Z, tt, kt, C, X, G, pt, I;
        o = "hasOwnProperty", T = /[\.\/]/, Y = /\s*,\s*/, Z = function(S, lt) {
          return S - lt;
        }, tt = { n: {} }, kt = function() {
          for (var S = 0, lt = this.length; S < lt; S++) if (this[S] !== void 0) return this[S];
        }, C = function() {
          for (var S = this.length; --S; ) if (this[S] !== void 0) return this[S];
        }, X = Object.prototype.toString, G = String, pt = Array.isArray || function(S) {
          return S instanceof Array || X.call(S) == "[object Array]";
        }, (I = function(S, lt) {
          var at, K = p, k = Array.prototype.slice.call(arguments, 2), $ = I.listeners(S), et = 0, bt = [], ht = {}, Q = [], ut = H;
          Q.firstDefined = kt, Q.lastDefined = C, H = S, p = 0;
          for (var st = 0, St = $.length; st < St; st++) "zIndex" in $[st] && (bt.push($[st].zIndex), $[st].zIndex < 0 && (ht[$[st].zIndex] = $[st]));
          for (bt.sort(Z); bt[et] < 0; ) if (at = ht[bt[et++]], Q.push(at.apply(lt, k)), p) return p = K, Q;
          for (st = 0; st < St; st++) if ("zIndex" in (at = $[st])) if (at.zIndex == bt[et]) {
            if (Q.push(at.apply(lt, k)), p) break;
            do
              if ((at = ht[bt[++et]]) && Q.push(at.apply(lt, k)), p) break;
            while (at);
          } else ht[at.zIndex] = at;
          else if (Q.push(at.apply(lt, k)), p) break;
          return p = K, H = ut, Q;
        })._events = tt, I.listeners = function(S) {
          var lt, at, K, k, $, et, bt, ht, Q = pt(S) ? S : S.split(T), ut = tt, st = [ut], St = [];
          for (k = 0, $ = Q.length; k < $; k++) {
            for (ht = [], et = 0, bt = st.length; et < bt; et++) for (at = [(ut = st[et].n)[Q[k]], ut["*"]], K = 2; K--; ) (lt = at[K]) && (ht.push(lt), St = St.concat(lt.f || []));
            st = ht;
          }
          return St;
        }, I.separator = function(S) {
          S ? (S = "[" + (S = G(S).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]", T = new RegExp(S)) : T = /[\.\/]/;
        }, I.on = function(S, lt) {
          if (typeof lt != "function") return function() {
          };
          for (var at = pt(S) ? pt(S[0]) ? S : [S] : G(S).split(Y), K = 0, k = at.length; K < k; K++) (function($) {
            for (var et, bt = pt($) ? $ : G($).split(T), ht = tt, Q = 0, ut = bt.length; Q < ut; Q++) ht = (ht = ht.n).hasOwnProperty(bt[Q]) && ht[bt[Q]] || (ht[bt[Q]] = { n: {} });
            for (ht.f = ht.f || [], Q = 0, ut = ht.f.length; Q < ut; Q++) if (ht.f[Q] == lt) {
              et = !0;
              break;
            }
            !et && ht.f.push(lt);
          })(at[K]);
          return function($) {
            +$ == +$ && (lt.zIndex = +$);
          };
        }, I.f = function(S) {
          var lt = [].slice.call(arguments, 1);
          return function() {
            I.apply(null, [S, null].concat(lt).concat([].slice.call(arguments, 0)));
          };
        }, I.stop = function() {
          p = 1;
        }, I.nt = function(S) {
          var lt = pt(H) ? H.join(".") : H;
          return S ? new RegExp("(?:\\.|\\/|^)" + S + "(?:\\.|\\/|$)").test(lt) : lt;
        }, I.nts = function() {
          return pt(H) ? H : H.split(T);
        }, I.off = I.unbind = function(S, lt) {
          if (S) {
            var at = pt(S) ? pt(S[0]) ? S : [S] : G(S).split(Y);
            if (at.length > 1) for (var K = 0, k = at.length; K < k; K++) I.off(at[K], lt);
            else {
              at = pt(S) ? S : G(S).split(T);
              var $, et, bt, ht, Q, ut = [tt];
              for (K = 0, k = at.length; K < k; K++) for (ht = 0; ht < ut.length; ht += bt.length - 2) {
                if (bt = [ht, 1], $ = ut[ht].n, at[K] != "*") $[at[K]] && bt.push($[at[K]]);
                else for (et in $) $[o](et) && bt.push($[et]);
                ut.splice.apply(ut, bt);
              }
              for (K = 0, k = ut.length; K < k; K++) for ($ = ut[K]; $.n; ) {
                if (lt) {
                  if ($.f) {
                    for (ht = 0, Q = $.f.length; ht < Q; ht++) if ($.f[ht] == lt) {
                      $.f.splice(ht, 1);
                      break;
                    }
                    !$.f.length && delete $.f;
                  }
                  for (et in $.n) if ($.n[o](et) && $.n[et].f) {
                    var st = $.n[et].f;
                    for (ht = 0, Q = st.length; ht < Q; ht++) if (st[ht] == lt) {
                      st.splice(ht, 1);
                      break;
                    }
                    !st.length && delete $.n[et].f;
                  }
                } else for (et in delete $.f, $.n) $.n[o](et) && $.n[et].f && delete $.n[et].f;
                $ = $.n;
              }
            }
          } else I._events = tt = { n: {} };
        }, I.once = function(S, lt) {
          var at = function() {
            return I.off(S, at), lt.apply(this, arguments);
          };
          return I.on(S, at);
        }, I.version = "0.5.0", I.toString = function() {
          return "You are running Eve 0.5.0";
        }, m.exports ? m.exports = I : (A = (function() {
          return I;
        }).apply(b, [])) === void 0 || (m.exports = A);
      }, function(m, b, _) {
        var A, H;
        A = [_(0)], (H = (function(p) {
          if (!p || p.svg) {
            var o = "hasOwnProperty", T = String, Y = parseFloat, Z = parseInt, tt = Math, kt = tt.max, C = tt.abs, X = tt.pow, G = /[, ]+/, pt = p.eve, I = "", S = " ", lt = "http://www.w3.org/1999/xlink", at = { block: "M5,0 0,2.5 5,5z", classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z", diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z", open: "M6,1 1,3.5 6,6", oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z" }, K = {};
            p.toString = function() {
              return `Your browser supports SVG.
You are running Raphaël ` + this.version;
            };
            var k = function(h, a) {
              if (a) for (var s in typeof h == "string" && (h = k(h)), a) a[o](s) && (s.substring(0, 6) == "xlink:" ? h.setAttributeNS(lt, s.substring(6), T(a[s])) : h.setAttribute(s, T(a[s])));
              else (h = p._g.doc.createElementNS("http://www.w3.org/2000/svg", h)).style && (h.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
              return h;
            }, $ = function(h, a) {
              var s = "linear", d = h.id + a, y = 0.5, x = 0.5, w = h.node, B = h.paper, E = w.style, q = p._g.doc.getElementById(d);
              if (!q) {
                if (a = (a = T(a).replace(p._radial_gradient, function(Tt, Nt, ct) {
                  if (s = "radial", Nt && ct) {
                    y = Y(Nt);
                    var jt = 2 * ((x = Y(ct)) > 0.5) - 1;
                    X(y - 0.5, 2) + X(x - 0.5, 2) > 0.25 && (x = tt.sqrt(0.25 - X(y - 0.5, 2)) * jt + 0.5) && x != 0.5 && (x = x.toFixed(5) - 1e-5 * jt);
                  }
                  return I;
                })).split(/\s*\-\s*/), s == "linear") {
                  var W = a.shift();
                  if (W = -Y(W), isNaN(W)) return null;
                  var ot = [0, 0, tt.cos(p.rad(W)), tt.sin(p.rad(W))], yt = 1 / (kt(C(ot[2]), C(ot[3])) || 1);
                  ot[2] *= yt, ot[3] *= yt, ot[2] < 0 && (ot[0] = -ot[2], ot[2] = 0), ot[3] < 0 && (ot[1] = -ot[3], ot[3] = 0);
                }
                var _t = p._parseDots(a);
                if (!_t) return null;
                if (d = d.replace(/[\(\)\s,\xb0#]/g, "_"), h.gradient && d != h.gradient.id && (B.defs.removeChild(h.gradient), delete h.gradient), !h.gradient) {
                  q = k(s + "Gradient", { id: d }), h.gradient = q, k(q, s == "radial" ? { fx: y, fy: x } : { x1: ot[0], y1: ot[1], x2: ot[2], y2: ot[3], gradientTransform: h.matrix.invert() }), B.defs.appendChild(q);
                  for (var xt = 0, Mt = _t.length; xt < Mt; xt++) q.appendChild(k("stop", { offset: _t[xt].offset ? _t[xt].offset : xt ? "100%" : "0%", "stop-color": _t[xt].color || "#fff", "stop-opacity": isFinite(_t[xt].opacity) ? _t[xt].opacity : 1 }));
                }
              }
              return k(w, { fill: et(d), opacity: 1, "fill-opacity": 1 }), E.fill = I, E.opacity = 1, E.fillOpacity = 1, 1;
            }, et = function(h) {
              if ((a = document.documentMode) && (a === 9 || a === 10)) return "url('#" + h + "')";
              var a, s = document.location;
              return "url('" + (s.protocol + "//" + s.host + s.pathname + s.search) + "#" + h + "')";
            }, bt = function(h) {
              var a = h.getBBox(1);
              k(h.pattern, { patternTransform: h.matrix.invert() + " translate(" + a.x + "," + a.y + ")" });
            }, ht = function(h, a, s) {
              if (h.type == "path") {
                for (var d, y, x, w, B, E = T(a).toLowerCase().split("-"), q = h.paper, W = s ? "end" : "start", ot = h.node, yt = h.attrs, _t = yt["stroke-width"], xt = E.length, Mt = "classic", Tt = 3, Nt = 3, ct = 5; xt--; ) switch (E[xt]) {
                  case "block":
                  case "classic":
                  case "oval":
                  case "diamond":
                  case "open":
                  case "none":
                    Mt = E[xt];
                    break;
                  case "wide":
                    Nt = 5;
                    break;
                  case "narrow":
                    Nt = 2;
                    break;
                  case "long":
                    Tt = 5;
                    break;
                  case "short":
                    Tt = 2;
                }
                if (Mt == "open" ? (Tt += 2, Nt += 2, ct += 2, x = 1, w = s ? 4 : 1, B = { fill: "none", stroke: yt.stroke }) : (w = x = Tt / 2, B = { fill: yt.stroke, stroke: "none" }), h._.arrows ? s ? (h._.arrows.endPath && K[h._.arrows.endPath]--, h._.arrows.endMarker && K[h._.arrows.endMarker]--) : (h._.arrows.startPath && K[h._.arrows.startPath]--, h._.arrows.startMarker && K[h._.arrows.startMarker]--) : h._.arrows = {}, Mt != "none") {
                  var jt = "raphael-marker-" + Mt, At = "raphael-marker-" + W + Mt + Tt + Nt + "-obj" + h.id;
                  p._g.doc.getElementById(jt) ? K[jt]++ : (q.defs.appendChild(k(k("path"), { "stroke-linecap": "round", d: at[Mt], id: jt })), K[jt] = 1);
                  var Vt, Lt = p._g.doc.getElementById(At);
                  Lt ? (K[At]++, Vt = Lt.getElementsByTagName("use")[0]) : (Lt = k(k("marker"), { id: At, markerHeight: Nt, markerWidth: Tt, orient: "auto", refX: w, refY: Nt / 2 }), Vt = k(k("use"), { "xlink:href": "#" + jt, transform: (s ? "rotate(180 " + Tt / 2 + " " + Nt / 2 + ") " : I) + "scale(" + Tt / ct + "," + Nt / ct + ")", "stroke-width": (1 / ((Tt / ct + Nt / ct) / 2)).toFixed(4) }), Lt.appendChild(Vt), q.defs.appendChild(Lt), K[At] = 1), k(Vt, B);
                  var Ft = x * (Mt != "diamond" && Mt != "oval");
                  s ? (d = h._.arrows.startdx * _t || 0, y = p.getTotalLength(yt.path) - Ft * _t) : (d = Ft * _t, y = p.getTotalLength(yt.path) - (h._.arrows.enddx * _t || 0)), (B = {})["marker-" + W] = "url(#" + At + ")", (y || d) && (B.d = p.getSubpath(yt.path, d, y)), k(ot, B), h._.arrows[W + "Path"] = jt, h._.arrows[W + "Marker"] = At, h._.arrows[W + "dx"] = Ft, h._.arrows[W + "Type"] = Mt, h._.arrows[W + "String"] = a;
                } else s ? (d = h._.arrows.startdx * _t || 0, y = p.getTotalLength(yt.path) - d) : (d = 0, y = p.getTotalLength(yt.path) - (h._.arrows.enddx * _t || 0)), h._.arrows[W + "Path"] && k(ot, { d: p.getSubpath(yt.path, d, y) }), delete h._.arrows[W + "Path"], delete h._.arrows[W + "Marker"], delete h._.arrows[W + "dx"], delete h._.arrows[W + "Type"], delete h._.arrows[W + "String"];
                for (B in K) if (K[o](B) && !K[B]) {
                  var Ht = p._g.doc.getElementById(B);
                  Ht && Ht.parentNode.removeChild(Ht);
                }
              }
            }, Q = { "-": [3, 1], ".": [1, 1], "-.": [3, 1, 1, 1], "-..": [3, 1, 1, 1, 1, 1], ". ": [1, 3], "- ": [4, 3], "--": [8, 3], "- .": [4, 3, 1, 3], "--.": [8, 3, 1, 3], "--..": [8, 3, 1, 3, 1, 3] }, ut = function(h, a, s) {
              if (a = Q[T(a).toLowerCase()]) {
                for (var d = h.attrs["stroke-width"] || "1", y = { round: d, square: d, butt: 0 }[h.attrs["stroke-linecap"] || s["stroke-linecap"]] || 0, x = [], w = a.length; w--; ) x[w] = a[w] * d + (w % 2 ? 1 : -1) * y;
                k(h.node, { "stroke-dasharray": x.join(",") });
              } else k(h.node, { "stroke-dasharray": "none" });
            }, st = function(h, a) {
              var s = h.node, d = h.attrs, y = s.style.visibility;
              for (var x in s.style.visibility = "hidden", a) if (a[o](x)) {
                if (!p._availableAttrs[o](x)) continue;
                var w = a[x];
                switch (d[x] = w, x) {
                  case "blur":
                    h.blur(w);
                    break;
                  case "title":
                    var B = s.getElementsByTagName("title");
                    if (B.length && (B = B[0])) B.firstChild.nodeValue = w;
                    else {
                      B = k("title");
                      var E = p._g.doc.createTextNode(w);
                      B.appendChild(E), s.appendChild(B);
                    }
                    break;
                  case "href":
                  case "target":
                    var q = s.parentNode;
                    if (q.tagName.toLowerCase() != "a") {
                      var W = k("a");
                      q.insertBefore(W, s), W.appendChild(s), q = W;
                    }
                    x == "target" ? q.setAttributeNS(lt, "show", w == "blank" ? "new" : w) : q.setAttributeNS(lt, x, w);
                    break;
                  case "cursor":
                    s.style.cursor = w;
                    break;
                  case "transform":
                    h.transform(w);
                    break;
                  case "arrow-start":
                    ht(h, w);
                    break;
                  case "arrow-end":
                    ht(h, w, 1);
                    break;
                  case "clip-rect":
                    var ot = T(w).split(G);
                    if (ot.length == 4) {
                      h.clip && h.clip.parentNode.parentNode.removeChild(h.clip.parentNode);
                      var yt = k("clipPath"), _t = k("rect");
                      yt.id = p.createUUID(), k(_t, { x: ot[0], y: ot[1], width: ot[2], height: ot[3] }), yt.appendChild(_t), h.paper.defs.appendChild(yt), k(s, { "clip-path": "url(#" + yt.id + ")" }), h.clip = _t;
                    }
                    if (!w) {
                      var xt = s.getAttribute("clip-path");
                      if (xt) {
                        var Mt = p._g.doc.getElementById(xt.replace(/(^url\(#|\)$)/g, I));
                        Mt && Mt.parentNode.removeChild(Mt), k(s, { "clip-path": I }), delete h.clip;
                      }
                    }
                    break;
                  case "path":
                    h.type == "path" && (k(s, { d: w ? d.path = p._pathToAbsolute(w) : "M0,0" }), h._.dirty = 1, h._.arrows && ("startString" in h._.arrows && ht(h, h._.arrows.startString), "endString" in h._.arrows && ht(h, h._.arrows.endString, 1)));
                    break;
                  case "width":
                    if (s.setAttribute(x, w), h._.dirty = 1, !d.fx) break;
                    x = "x", w = d.x;
                  case "x":
                    d.fx && (w = -d.x - (d.width || 0));
                  case "rx":
                    if (x == "rx" && h.type == "rect") break;
                  case "cx":
                    s.setAttribute(x, w), h.pattern && bt(h), h._.dirty = 1;
                    break;
                  case "height":
                    if (s.setAttribute(x, w), h._.dirty = 1, !d.fy) break;
                    x = "y", w = d.y;
                  case "y":
                    d.fy && (w = -d.y - (d.height || 0));
                  case "ry":
                    if (x == "ry" && h.type == "rect") break;
                  case "cy":
                    s.setAttribute(x, w), h.pattern && bt(h), h._.dirty = 1;
                    break;
                  case "r":
                    h.type == "rect" ? k(s, { rx: w, ry: w }) : s.setAttribute(x, w), h._.dirty = 1;
                    break;
                  case "src":
                    h.type == "image" && s.setAttributeNS(lt, "href", w);
                    break;
                  case "stroke-width":
                    h._.sx == 1 && h._.sy == 1 || (w /= kt(C(h._.sx), C(h._.sy)) || 1), s.setAttribute(x, w), d["stroke-dasharray"] && ut(h, d["stroke-dasharray"], a), h._.arrows && ("startString" in h._.arrows && ht(h, h._.arrows.startString), "endString" in h._.arrows && ht(h, h._.arrows.endString, 1));
                    break;
                  case "stroke-dasharray":
                    ut(h, w, a);
                    break;
                  case "fill":
                    var Tt = T(w).match(p._ISURL);
                    if (Tt) {
                      yt = k("pattern");
                      var Nt = k("image");
                      yt.id = p.createUUID(), k(yt, { x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1 }), k(Nt, { x: 0, y: 0, "xlink:href": Tt[1] }), yt.appendChild(Nt), (function(Lt) {
                        p._preload(Tt[1], function() {
                          var Ft = this.offsetWidth, Ht = this.offsetHeight;
                          k(Lt, { width: Ft, height: Ht }), k(Nt, { width: Ft, height: Ht });
                        });
                      })(yt), h.paper.defs.appendChild(yt), k(s, { fill: "url(#" + yt.id + ")" }), h.pattern = yt, h.pattern && bt(h);
                      break;
                    }
                    var ct = p.getRGB(w);
                    if (ct.error) {
                      if ((h.type == "circle" || h.type == "ellipse" || T(w).charAt() != "r") && $(h, w)) {
                        if ("opacity" in d || "fill-opacity" in d) {
                          var jt = p._g.doc.getElementById(s.getAttribute("fill").replace(/^url\(#|\)$/g, I));
                          if (jt) {
                            var At = jt.getElementsByTagName("stop");
                            k(At[At.length - 1], { "stop-opacity": ("opacity" in d ? d.opacity : 1) * ("fill-opacity" in d ? d["fill-opacity"] : 1) });
                          }
                        }
                        d.gradient = w, d.fill = "none";
                        break;
                      }
                    } else delete a.gradient, delete d.gradient, !p.is(d.opacity, "undefined") && p.is(a.opacity, "undefined") && k(s, { opacity: d.opacity }), !p.is(d["fill-opacity"], "undefined") && p.is(a["fill-opacity"], "undefined") && k(s, { "fill-opacity": d["fill-opacity"] });
                    ct[o]("opacity") && k(s, { "fill-opacity": ct.opacity > 1 ? ct.opacity / 100 : ct.opacity });
                  case "stroke":
                    ct = p.getRGB(w), s.setAttribute(x, ct.hex), x == "stroke" && ct[o]("opacity") && k(s, { "stroke-opacity": ct.opacity > 1 ? ct.opacity / 100 : ct.opacity }), x == "stroke" && h._.arrows && ("startString" in h._.arrows && ht(h, h._.arrows.startString), "endString" in h._.arrows && ht(h, h._.arrows.endString, 1));
                    break;
                  case "gradient":
                    (h.type == "circle" || h.type == "ellipse" || T(w).charAt() != "r") && $(h, w);
                    break;
                  case "opacity":
                    d.gradient && !d[o]("stroke-opacity") && k(s, { "stroke-opacity": w > 1 ? w / 100 : w });
                  case "fill-opacity":
                    if (d.gradient) {
                      (jt = p._g.doc.getElementById(s.getAttribute("fill").replace(/^url\(#|\)$/g, I))) && (At = jt.getElementsByTagName("stop"), k(At[At.length - 1], { "stop-opacity": w }));
                      break;
                    }
                  default:
                    x == "font-size" && (w = Z(w, 10) + "px");
                    var Vt = x.replace(/(\-.)/g, function(Lt) {
                      return Lt.substring(1).toUpperCase();
                    });
                    s.style[Vt] = w, h._.dirty = 1, s.setAttribute(x, w);
                }
              }
              St(h, a), s.style.visibility = y;
            }, St = function(h, a) {
              if (h.type == "text" && (a[o]("text") || a[o]("font") || a[o]("font-size") || a[o]("x") || a[o]("y"))) {
                var s = h.attrs, d = h.node, y = d.firstChild ? Z(p._g.doc.defaultView.getComputedStyle(d.firstChild, I).getPropertyValue("font-size"), 10) : 10;
                if (a[o]("text")) {
                  for (s.text = a.text; d.firstChild; ) d.removeChild(d.firstChild);
                  for (var x, w = T(a.text).split(`
`), B = [], E = 0, q = w.length; E < q; E++) x = k("tspan"), E && k(x, { dy: 1.2 * y, x: s.x }), x.appendChild(p._g.doc.createTextNode(w[E])), d.appendChild(x), B[E] = x;
                } else for (E = 0, q = (B = d.getElementsByTagName("tspan")).length; E < q; E++) E ? k(B[E], { dy: 1.2 * y, x: s.x }) : k(B[0], { dy: 0 });
                k(d, { x: s.x, y: s.y }), h._.dirty = 1;
                var W = h._getBBox(), ot = s.y - (W.y + W.height / 2);
                ot && p.is(ot, "finite") && k(B[0], { dy: ot });
              }
            }, Pt = function(h) {
              return h.parentNode && h.parentNode.tagName.toLowerCase() === "a" ? h.parentNode : h;
            }, Bt = function(h, a) {
              this[0] = this.node = h, h.raphael = !0, this.id = ("0000" + (Math.random() * Math.pow(36, 5) << 0).toString(36)).slice(-5), h.raphaelid = this.id, this.matrix = p.matrix(), this.realPath = null, this.paper = a, this.attrs = this.attrs || {}, this._ = { transform: [], sx: 1, sy: 1, deg: 0, dx: 0, dy: 0, dirty: 1 }, !a.bottom && (a.bottom = this), this.prev = a.top, a.top && (a.top.next = this), a.top = this, this.next = null;
            }, vt = p.el;
            Bt.prototype = vt, vt.constructor = Bt, p._engine.path = function(h, a) {
              var s = k("path");
              a.canvas && a.canvas.appendChild(s);
              var d = new Bt(s, a);
              return d.type = "path", st(d, { fill: "none", stroke: "#000", path: h }), d;
            }, vt.rotate = function(h, a, s) {
              if (this.removed) return this;
              if ((h = T(h).split(G)).length - 1 && (a = Y(h[1]), s = Y(h[2])), h = Y(h[0]), s == null && (a = s), a == null || s == null) {
                var d = this.getBBox(1);
                a = d.x + d.width / 2, s = d.y + d.height / 2;
              }
              return this.transform(this._.transform.concat([["r", h, a, s]])), this;
            }, vt.scale = function(h, a, s, d) {
              if (this.removed) return this;
              if ((h = T(h).split(G)).length - 1 && (a = Y(h[1]), s = Y(h[2]), d = Y(h[3])), h = Y(h[0]), a == null && (a = h), d == null && (s = d), s == null || d == null) var y = this.getBBox(1);
              return s = s ?? y.x + y.width / 2, d = d ?? y.y + y.height / 2, this.transform(this._.transform.concat([["s", h, a, s, d]])), this;
            }, vt.translate = function(h, a) {
              return this.removed ? this : ((h = T(h).split(G)).length - 1 && (a = Y(h[1])), h = Y(h[0]) || 0, a = +a || 0, this.transform(this._.transform.concat([["t", h, a]])), this);
            }, vt.transform = function(h) {
              var a = this._;
              if (h == null) return a.transform;
              if (p._extractTransform(this, h), this.clip && k(this.clip, { transform: this.matrix.invert() }), this.pattern && bt(this), this.node && k(this.node, { transform: this.matrix }), a.sx != 1 || a.sy != 1) {
                var s = this.attrs[o]("stroke-width") ? this.attrs["stroke-width"] : 1;
                this.attr({ "stroke-width": s });
              }
              return this;
            }, vt.hide = function() {
              return this.removed || (this.node.style.display = "none"), this;
            }, vt.show = function() {
              return this.removed || (this.node.style.display = ""), this;
            }, vt.remove = function() {
              var h = Pt(this.node);
              if (!this.removed && h.parentNode) {
                var a = this.paper;
                for (var s in a.__set__ && a.__set__.exclude(this), pt.unbind("raphael.*.*." + this.id), this.gradient && a.defs.removeChild(this.gradient), p._tear(this, a), h.parentNode.removeChild(h), this.removeData(), this) this[s] = typeof this[s] == "function" ? p._removedFactory(s) : null;
                this.removed = !0;
              }
            }, vt._getBBox = function() {
              if (this.node.style.display == "none") {
                this.show();
                var h = !0;
              }
              var a, s = !1;
              this.paper.canvas.parentElement ? a = this.paper.canvas.parentElement.style : this.paper.canvas.parentNode && (a = this.paper.canvas.parentNode.style), a && a.display == "none" && (s = !0, a.display = "");
              var d = {};
              try {
                d = this.node.getBBox();
              } catch {
                d = { x: this.node.clientLeft, y: this.node.clientTop, width: this.node.clientWidth, height: this.node.clientHeight };
              } finally {
                d = d || {}, s && (a.display = "none");
              }
              return h && this.hide(), d;
            }, vt.attr = function(h, a) {
              if (this.removed) return this;
              if (h == null) {
                var s = {};
                for (var d in this.attrs) this.attrs[o](d) && (s[d] = this.attrs[d]);
                return s.gradient && s.fill == "none" && (s.fill = s.gradient) && delete s.gradient, s.transform = this._.transform, s;
              }
              if (a == null && p.is(h, "string")) {
                if (h == "fill" && this.attrs.fill == "none" && this.attrs.gradient) return this.attrs.gradient;
                if (h == "transform") return this._.transform;
                for (var y = h.split(G), x = {}, w = 0, B = y.length; w < B; w++) (h = y[w]) in this.attrs ? x[h] = this.attrs[h] : p.is(this.paper.customAttributes[h], "function") ? x[h] = this.paper.customAttributes[h].def : x[h] = p._availableAttrs[h];
                return B - 1 ? x : x[y[0]];
              }
              if (a == null && p.is(h, "array")) {
                for (x = {}, w = 0, B = h.length; w < B; w++) x[h[w]] = this.attr(h[w]);
                return x;
              }
              if (a != null) {
                var E = {};
                E[h] = a;
              } else h != null && p.is(h, "object") && (E = h);
              for (var q in E) pt("raphael.attr." + q + "." + this.id, this, E[q]);
              for (q in this.paper.customAttributes) if (this.paper.customAttributes[o](q) && E[o](q) && p.is(this.paper.customAttributes[q], "function")) {
                var W = this.paper.customAttributes[q].apply(this, [].concat(E[q]));
                for (var ot in this.attrs[q] = E[q], W) W[o](ot) && (E[ot] = W[ot]);
              }
              return st(this, E), this;
            }, vt.toFront = function() {
              if (this.removed) return this;
              var h = Pt(this.node);
              h.parentNode.appendChild(h);
              var a = this.paper;
              return a.top != this && p._tofront(this, a), this;
            }, vt.toBack = function() {
              if (this.removed) return this;
              var h = Pt(this.node), a = h.parentNode;
              return a.insertBefore(h, a.firstChild), p._toback(this, this.paper), this.paper, this;
            }, vt.insertAfter = function(h) {
              if (this.removed || !h) return this;
              var a = Pt(this.node), s = Pt(h.node || h[h.length - 1].node);
              return s.nextSibling ? s.parentNode.insertBefore(a, s.nextSibling) : s.parentNode.appendChild(a), p._insertafter(this, h, this.paper), this;
            }, vt.insertBefore = function(h) {
              if (this.removed || !h) return this;
              var a = Pt(this.node), s = Pt(h.node || h[0].node);
              return s.parentNode.insertBefore(a, s), p._insertbefore(this, h, this.paper), this;
            }, vt.blur = function(h) {
              var a = this;
              if (+h != 0) {
                var s = k("filter"), d = k("feGaussianBlur");
                a.attrs.blur = h, s.id = p.createUUID(), k(d, { stdDeviation: +h || 1.5 }), s.appendChild(d), a.paper.defs.appendChild(s), a._blur = s, k(a.node, { filter: "url(#" + s.id + ")" });
              } else a._blur && (a._blur.parentNode.removeChild(a._blur), delete a._blur, delete a.attrs.blur), a.node.removeAttribute("filter");
              return a;
            }, p._engine.circle = function(h, a, s, d) {
              var y = k("circle");
              h.canvas && h.canvas.appendChild(y);
              var x = new Bt(y, h);
              return x.attrs = { cx: a, cy: s, r: d, fill: "none", stroke: "#000" }, x.type = "circle", k(y, x.attrs), x;
            }, p._engine.rect = function(h, a, s, d, y, x) {
              var w = k("rect");
              h.canvas && h.canvas.appendChild(w);
              var B = new Bt(w, h);
              return B.attrs = { x: a, y: s, width: d, height: y, rx: x || 0, ry: x || 0, fill: "none", stroke: "#000" }, B.type = "rect", k(w, B.attrs), B;
            }, p._engine.ellipse = function(h, a, s, d, y) {
              var x = k("ellipse");
              h.canvas && h.canvas.appendChild(x);
              var w = new Bt(x, h);
              return w.attrs = { cx: a, cy: s, rx: d, ry: y, fill: "none", stroke: "#000" }, w.type = "ellipse", k(x, w.attrs), w;
            }, p._engine.image = function(h, a, s, d, y, x) {
              var w = k("image");
              k(w, { x: s, y: d, width: y, height: x, preserveAspectRatio: "none" }), w.setAttributeNS(lt, "href", a), h.canvas && h.canvas.appendChild(w);
              var B = new Bt(w, h);
              return B.attrs = { x: s, y: d, width: y, height: x, src: a }, B.type = "image", B;
            }, p._engine.text = function(h, a, s, d) {
              var y = k("text");
              h.canvas && h.canvas.appendChild(y);
              var x = new Bt(y, h);
              return x.attrs = { x: a, y: s, "text-anchor": "middle", text: d, "font-family": p._availableAttrs["font-family"], "font-size": p._availableAttrs["font-size"], stroke: "none", fill: "#000" }, x.type = "text", st(x, x.attrs), x;
            }, p._engine.setSize = function(h, a) {
              return this.width = h || this.width, this.height = a || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this;
            }, p._engine.create = function() {
              var h = p._getContainer.apply(0, arguments), a = h && h.container;
              if (!a) throw new Error("SVG container not found.");
              var s, d = h.x, y = h.y, x = h.width, w = h.height, B = k("svg"), E = "overflow:hidden;";
              return d = d || 0, y = y || 0, k(B, { height: w = w || 342, version: 1.1, width: x = x || 512, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }), a == 1 ? (B.style.cssText = E + "position:absolute;left:" + d + "px;top:" + y + "px", p._g.doc.body.appendChild(B), s = 1) : (B.style.cssText = E + "position:relative", a.firstChild ? a.insertBefore(B, a.firstChild) : a.appendChild(B)), (a = new p._Paper()).width = x, a.height = w, a.canvas = B, a.clear(), a._left = a._top = 0, s && (a.renderfix = function() {
              }), a.renderfix(), a;
            }, p._engine.setViewBox = function(h, a, s, d, y) {
              pt("raphael.setViewBox", this, this._viewBox, [h, a, s, d, y]);
              var x, w, B = this.getSize(), E = kt(s / B.width, d / B.height), q = this.top, W = y ? "xMidYMid meet" : "xMinYMin";
              for (h == null ? (this._vbSize && (E = 1), delete this._vbSize, x = "0 0 " + this.width + S + this.height) : (this._vbSize = E, x = h + S + a + S + s + S + d), k(this.canvas, { viewBox: x, preserveAspectRatio: W }); E && q; ) w = "stroke-width" in q.attrs ? q.attrs["stroke-width"] : 1, q.attr({ "stroke-width": w }), q._.dirty = 1, q._.dirtyT = 1, q = q.prev;
              return this._viewBox = [h, a, s, d, !!y], this;
            }, p.prototype.renderfix = function() {
              var h, a = this.canvas, s = a.style;
              try {
                h = a.getScreenCTM() || a.createSVGMatrix();
              } catch {
                h = a.createSVGMatrix();
              }
              var d = -h.e % 1, y = -h.f % 1;
              (d || y) && (d && (this._left = (this._left + d) % 1, s.left = this._left + "px"), y && (this._top = (this._top + y) % 1, s.top = this._top + "px"));
            }, p.prototype.clear = function() {
              p.eve("raphael.clear", this);
              for (var h = this.canvas; h.firstChild; ) h.removeChild(h.firstChild);
              this.bottom = this.top = null, (this.desc = k("desc")).appendChild(p._g.doc.createTextNode("Created with Raphaël " + p.version)), h.appendChild(this.desc), h.appendChild(this.defs = k("defs"));
            }, p.prototype.remove = function() {
              for (var h in pt("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this) this[h] = typeof this[h] == "function" ? p._removedFactory(h) : null;
            };
            var wt = p.st;
            for (var te in vt) vt[o](te) && !wt[o](te) && (wt[te] = /* @__PURE__ */ (function(h) {
              return function() {
                var a = arguments;
                return this.forEach(function(s) {
                  s[h].apply(s, a);
                });
              };
            })(te));
          }
        }).apply(b, A)) === void 0 || (m.exports = H);
      }, function(m, b, _) {
        var A, H;
        A = [_(0)], (H = (function(p) {
          if (!p || p.vml) {
            var o = "hasOwnProperty", T = String, Y = parseFloat, Z = Math, tt = Z.round, kt = Z.max, C = Z.min, X = Z.abs, G = /[, ]+/, pt = p.eve, I = " ", S = "", lt = { M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x" }, at = /([clmz]),?([^clmz]*)/gi, K = / progid:\S+Blur\([^\)]+\)/g, k = /-?[^,\s-]+/g, $ = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)", et = 21600, bt = { path: 1, rect: 1, image: 1 }, ht = { circle: 1, ellipse: 1 }, Q = function(a, s, d) {
              var y = p.matrix();
              return y.rotate(-a, 0.5, 0.5), { dx: y.x(s, d), dy: y.y(s, d) };
            }, ut = function(a, s, d, y, x, w) {
              var B = a._, E = a.matrix, q = B.fillpos, W = a.node, ot = W.style, yt = 1, _t = "", xt = et / s, Mt = et / d;
              if (ot.visibility = "hidden", s && d) {
                if (W.coordsize = X(xt) + I + X(Mt), ot.rotation = w * (s * d < 0 ? -1 : 1), w) {
                  var Tt = Q(w, y, x);
                  y = Tt.dx, x = Tt.dy;
                }
                if (s < 0 && (_t += "x"), d < 0 && (_t += " y") && (yt = -1), ot.flip = _t, W.coordorigin = y * -xt + I + x * -Mt, q || B.fillsize) {
                  var Nt = W.getElementsByTagName("fill");
                  Nt = Nt && Nt[0], W.removeChild(Nt), q && (Tt = Q(w, E.x(q[0], q[1]), E.y(q[0], q[1])), Nt.position = Tt.dx * yt + I + Tt.dy * yt), B.fillsize && (Nt.size = B.fillsize[0] * X(s) + I + B.fillsize[1] * X(d)), W.appendChild(Nt);
                }
                ot.visibility = "visible";
              }
            };
            p.toString = function() {
              return `Your browser doesn’t support SVG. Falling down to VML.
You are running Raphaël ` + this.version;
            };
            var st, St = function(a, s, d) {
              for (var y = T(s).toLowerCase().split("-"), x = d ? "end" : "start", w = y.length, B = "classic", E = "medium", q = "medium"; w--; ) switch (y[w]) {
                case "block":
                case "classic":
                case "oval":
                case "diamond":
                case "open":
                case "none":
                  B = y[w];
                  break;
                case "wide":
                case "narrow":
                  q = y[w];
                  break;
                case "long":
                case "short":
                  E = y[w];
              }
              var W = a.node.getElementsByTagName("stroke")[0];
              W[x + "arrow"] = B, W[x + "arrowlength"] = E, W[x + "arrowwidth"] = q;
            }, Pt = function(a, s) {
              a.attrs = a.attrs || {};
              var d = a.node, y = a.attrs, x = d.style, w = bt[a.type] && (s.x != y.x || s.y != y.y || s.width != y.width || s.height != y.height || s.cx != y.cx || s.cy != y.cy || s.rx != y.rx || s.ry != y.ry || s.r != y.r), B = ht[a.type] && (y.cx != s.cx || y.cy != s.cy || y.r != s.r || y.rx != s.rx || y.ry != s.ry), E = a;
              for (var q in s) s[o](q) && (y[q] = s[q]);
              if (w && (y.path = p._getPath[a.type](a), a._.dirty = 1), s.href && (d.href = s.href), s.title && (d.title = s.title), s.target && (d.target = s.target), s.cursor && (x.cursor = s.cursor), "blur" in s && a.blur(s.blur), (s.path && a.type == "path" || w) && (d.path = (function(Ut) {
                var de = /[ahqstv]/gi, we = p._pathToAbsolute;
                if (T(Ut).match(de) && (we = p._path2curve), de = /[clmz]/g, we == p._pathToAbsolute && !T(Ut).match(de)) {
                  var Qt = T(Ut).replace(at, function(ne, Gt, Jt) {
                    var ie = [], Fe = Gt.toLowerCase() == "m", ke = lt[Gt];
                    return Jt.replace(k, function(Ue) {
                      Fe && ie.length == 2 && (ke += ie + lt[Gt == "m" ? "l" : "L"], ie = []), ie.push(tt(Ue * et));
                    }), ke + ie;
                  });
                  return Qt;
                }
                var _e, N, rt = we(Ut);
                Qt = [];
                for (var ft = 0, Et = rt.length; ft < Et; ft++) {
                  _e = rt[ft], (N = rt[ft][0].toLowerCase()) == "z" && (N = "x");
                  for (var $t = 1, Dt = _e.length; $t < Dt; $t++) N += tt(_e[$t] * et) + ($t != Dt - 1 ? "," : S);
                  Qt.push(N);
                }
                return Qt.join(I);
              })(~T(y.path).toLowerCase().indexOf("r") ? p._pathToAbsolute(y.path) : y.path), a._.dirty = 1, a.type == "image" && (a._.fillpos = [y.x, y.y], a._.fillsize = [y.width, y.height], ut(a, 1, 1, 0, 0, 0))), "transform" in s && a.transform(s.transform), B) {
                var W = +y.cx, ot = +y.cy, yt = +y.rx || +y.r || 0, _t = +y.ry || +y.r || 0;
                d.path = p.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", tt((W - yt) * et), tt((ot - _t) * et), tt((W + yt) * et), tt((ot + _t) * et), tt(W * et)), a._.dirty = 1;
              }
              if ("clip-rect" in s) {
                var xt = T(s["clip-rect"]).split(G);
                if (xt.length == 4) {
                  xt[2] = +xt[2] + +xt[0], xt[3] = +xt[3] + +xt[1];
                  var Mt = d.clipRect || p._g.doc.createElement("div"), Tt = Mt.style;
                  Tt.clip = p.format("rect({1}px {2}px {3}px {0}px)", xt), d.clipRect || (Tt.position = "absolute", Tt.top = 0, Tt.left = 0, Tt.width = a.paper.width + "px", Tt.height = a.paper.height + "px", d.parentNode.insertBefore(Mt, d), Mt.appendChild(d), d.clipRect = Mt);
                }
                s["clip-rect"] || d.clipRect && (d.clipRect.style.clip = "auto");
              }
              if (a.textpath) {
                var Nt = a.textpath.style;
                s.font && (Nt.font = s.font), s["font-family"] && (Nt.fontFamily = '"' + s["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, S) + '"'), s["font-size"] && (Nt.fontSize = s["font-size"]), s["font-weight"] && (Nt.fontWeight = s["font-weight"]), s["font-style"] && (Nt.fontStyle = s["font-style"]);
              }
              if ("arrow-start" in s && St(E, s["arrow-start"]), "arrow-end" in s && St(E, s["arrow-end"], 1), s.opacity != null || s.fill != null || s.src != null || s.stroke != null || s["stroke-width"] != null || s["stroke-opacity"] != null || s["fill-opacity"] != null || s["stroke-dasharray"] != null || s["stroke-miterlimit"] != null || s["stroke-linejoin"] != null || s["stroke-linecap"] != null) {
                var ct = d.getElementsByTagName("fill");
                if (!(ct = ct && ct[0]) && (ct = st("fill")), a.type == "image" && s.src && (ct.src = s.src), s.fill && (ct.on = !0), ct.on != null && s.fill != "none" && s.fill !== null || (ct.on = !1), ct.on && s.fill) {
                  var jt = T(s.fill).match(p._ISURL);
                  if (jt) {
                    ct.parentNode == d && d.removeChild(ct), ct.rotate = !0, ct.src = jt[1], ct.type = "tile";
                    var At = a.getBBox(1);
                    ct.position = At.x + I + At.y, a._.fillpos = [At.x, At.y], p._preload(jt[1], function() {
                      a._.fillsize = [this.offsetWidth, this.offsetHeight];
                    });
                  } else ct.color = p.getRGB(s.fill).hex, ct.src = S, ct.type = "solid", p.getRGB(s.fill).error && (E.type in { circle: 1, ellipse: 1 } || T(s.fill).charAt() != "r") && Bt(E, s.fill, ct) && (y.fill = "none", y.gradient = s.fill, ct.rotate = !1);
                }
                if ("fill-opacity" in s || "opacity" in s) {
                  var Vt = ((+y["fill-opacity"] + 1 || 2) - 1) * ((+y.opacity + 1 || 2) - 1) * ((+p.getRGB(s.fill).o + 1 || 2) - 1);
                  Vt = C(kt(Vt, 0), 1), ct.opacity = Vt, ct.src && (ct.color = "none");
                }
                d.appendChild(ct);
                var Lt = d.getElementsByTagName("stroke") && d.getElementsByTagName("stroke")[0], Ft = !1;
                !Lt && (Ft = Lt = st("stroke")), (s.stroke && s.stroke != "none" || s["stroke-width"] || s["stroke-opacity"] != null || s["stroke-dasharray"] || s["stroke-miterlimit"] || s["stroke-linejoin"] || s["stroke-linecap"]) && (Lt.on = !0), (s.stroke == "none" || s.stroke === null || Lt.on == null || s.stroke == 0 || s["stroke-width"] == 0) && (Lt.on = !1);
                var Ht = p.getRGB(s.stroke);
                Lt.on && s.stroke && (Lt.color = Ht.hex), Vt = ((+y["stroke-opacity"] + 1 || 2) - 1) * ((+y.opacity + 1 || 2) - 1) * ((+Ht.o + 1 || 2) - 1);
                var ee = 0.75 * (Y(s["stroke-width"]) || 1);
                if (Vt = C(kt(Vt, 0), 1), s["stroke-width"] == null && (ee = y["stroke-width"]), s["stroke-width"] && (Lt.weight = ee), ee && ee < 1 && (Vt *= ee) && (Lt.weight = 1), Lt.opacity = Vt, s["stroke-linejoin"] && (Lt.joinstyle = s["stroke-linejoin"] || "miter"), Lt.miterlimit = s["stroke-miterlimit"] || 8, s["stroke-linecap"] && (Lt.endcap = s["stroke-linecap"] == "butt" ? "flat" : s["stroke-linecap"] == "square" ? "square" : "round"), "stroke-dasharray" in s) {
                  var he = { "-": "shortdash", ".": "shortdot", "-.": "shortdashdot", "-..": "shortdashdotdot", ". ": "dot", "- ": "dash", "--": "longdash", "- .": "dashdot", "--.": "longdashdot", "--..": "longdashdotdot" };
                  Lt.dashstyle = he[o](s["stroke-dasharray"]) ? he[s["stroke-dasharray"]] : S;
                }
                Ft && d.appendChild(Lt);
              }
              if (E.type == "text") {
                E.paper.canvas.style.display = S;
                var Kt = E.paper.span, ue = y.font && y.font.match(/\d+(?:\.\d*)?(?=px)/);
                x = Kt.style, y.font && (x.font = y.font), y["font-family"] && (x.fontFamily = y["font-family"]), y["font-weight"] && (x.fontWeight = y["font-weight"]), y["font-style"] && (x.fontStyle = y["font-style"]), ue = Y(y["font-size"] || ue && ue[0]) || 10, x.fontSize = 100 * ue + "px", E.textpath.string && (Kt.innerHTML = T(E.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                var ce = Kt.getBoundingClientRect();
                E.W = y.w = (ce.right - ce.left) / 100, E.H = y.h = (ce.bottom - ce.top) / 100, E.X = y.x, E.Y = y.y + E.H / 2, ("x" in s || "y" in s) && (E.path.v = p.format("m{0},{1}l{2},{1}", tt(y.x * et), tt(y.y * et), tt(y.x * et) + 1));
                for (var xe = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], ye = 0, be = xe.length; ye < be; ye++) if (xe[ye] in s) {
                  E._.dirty = 1;
                  break;
                }
                switch (y["text-anchor"]) {
                  case "start":
                    E.textpath.style["v-text-align"] = "left", E.bbx = E.W / 2;
                    break;
                  case "end":
                    E.textpath.style["v-text-align"] = "right", E.bbx = -E.W / 2;
                    break;
                  default:
                    E.textpath.style["v-text-align"] = "center", E.bbx = 0;
                }
                E.textpath.style["v-text-kern"] = !0;
              }
            }, Bt = function(a, s, d) {
              a.attrs = a.attrs || {}, a.attrs;
              var y = Math.pow, x = "linear", w = ".5 .5";
              if (a.attrs.gradient = s, s = (s = T(s).replace(p._radial_gradient, function(yt, _t, xt) {
                return x = "radial", _t && xt && (_t = Y(_t), xt = Y(xt), y(_t - 0.5, 2) + y(xt - 0.5, 2) > 0.25 && (xt = Z.sqrt(0.25 - y(_t - 0.5, 2)) * (2 * (xt > 0.5) - 1) + 0.5), w = _t + I + xt), S;
              })).split(/\s*\-\s*/), x == "linear") {
                var B = s.shift();
                if (B = -Y(B), isNaN(B)) return null;
              }
              var E = p._parseDots(s);
              if (!E) return null;
              if (a = a.shape || a.node, E.length) {
                a.removeChild(d), d.on = !0, d.method = "none", d.color = E[0].color, d.color2 = E[E.length - 1].color;
                for (var q = [], W = 0, ot = E.length; W < ot; W++) E[W].offset && q.push(E[W].offset + I + E[W].color);
                d.colors = q.length ? q.join() : "0% " + d.color, x == "radial" ? (d.type = "gradientTitle", d.focus = "100%", d.focussize = "0 0", d.focusposition = w, d.angle = 0) : (d.type = "gradient", d.angle = (270 - B) % 360), a.appendChild(d);
              }
              return 1;
            }, vt = function(a, s) {
              this[0] = this.node = a, a.raphael = !0, this.id = p._oid++, a.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = s, this.matrix = p.matrix(), this._ = { transform: [], sx: 1, sy: 1, dx: 0, dy: 0, deg: 0, dirty: 1, dirtyT: 1 }, !s.bottom && (s.bottom = this), this.prev = s.top, s.top && (s.top.next = this), s.top = this, this.next = null;
            }, wt = p.el;
            vt.prototype = wt, wt.constructor = vt, wt.transform = function(a) {
              if (a == null) return this._.transform;
              var s, d = this.paper._viewBoxShift, y = d ? "s" + [d.scale, d.scale] + "-1-1t" + [d.dx, d.dy] : S;
              d && (s = a = T(a).replace(/\.{3}|\u2026/g, this._.transform || S)), p._extractTransform(this, y + a);
              var x, w = this.matrix.clone(), B = this.skew, E = this.node, q = ~T(this.attrs.fill).indexOf("-"), W = !T(this.attrs.fill).indexOf("url(");
              if (w.translate(1, 1), W || q || this.type == "image") if (B.matrix = "1 0 0 1", B.offset = "0 0", x = w.split(), q && x.noRotation || !x.isSimple) {
                E.style.filter = w.toFilter();
                var ot = this.getBBox(), yt = this.getBBox(1), _t = ot.x - yt.x, xt = ot.y - yt.y;
                E.coordorigin = _t * -et + I + xt * -et, ut(this, 1, 1, _t, xt, 0);
              } else E.style.filter = S, ut(this, x.scalex, x.scaley, x.dx, x.dy, x.rotate);
              else E.style.filter = S, B.matrix = T(w), B.offset = w.offset();
              return s !== null && (this._.transform = s, p._extractTransform(this, s)), this;
            }, wt.rotate = function(a, s, d) {
              if (this.removed) return this;
              if (a != null) {
                if ((a = T(a).split(G)).length - 1 && (s = Y(a[1]), d = Y(a[2])), a = Y(a[0]), d == null && (s = d), s == null || d == null) {
                  var y = this.getBBox(1);
                  s = y.x + y.width / 2, d = y.y + y.height / 2;
                }
                return this._.dirtyT = 1, this.transform(this._.transform.concat([["r", a, s, d]])), this;
              }
            }, wt.translate = function(a, s) {
              return this.removed ? this : ((a = T(a).split(G)).length - 1 && (s = Y(a[1])), a = Y(a[0]) || 0, s = +s || 0, this._.bbox && (this._.bbox.x += a, this._.bbox.y += s), this.transform(this._.transform.concat([["t", a, s]])), this);
            }, wt.scale = function(a, s, d, y) {
              if (this.removed) return this;
              if ((a = T(a).split(G)).length - 1 && (s = Y(a[1]), d = Y(a[2]), y = Y(a[3]), isNaN(d) && (d = null), isNaN(y) && (y = null)), a = Y(a[0]), s == null && (s = a), y == null && (d = y), d == null || y == null) var x = this.getBBox(1);
              return d = d ?? x.x + x.width / 2, y = y ?? x.y + x.height / 2, this.transform(this._.transform.concat([["s", a, s, d, y]])), this._.dirtyT = 1, this;
            }, wt.hide = function() {
              return !this.removed && (this.node.style.display = "none"), this;
            }, wt.show = function() {
              return !this.removed && (this.node.style.display = S), this;
            }, wt.auxGetBBox = p.el.getBBox, wt.getBBox = function() {
              var a = this.auxGetBBox();
              if (this.paper && this.paper._viewBoxShift) {
                var s = {}, d = 1 / this.paper._viewBoxShift.scale;
                return s.x = a.x - this.paper._viewBoxShift.dx, s.x *= d, s.y = a.y - this.paper._viewBoxShift.dy, s.y *= d, s.width = a.width * d, s.height = a.height * d, s.x2 = s.x + s.width, s.y2 = s.y + s.height, s;
              }
              return a;
            }, wt._getBBox = function() {
              return this.removed ? {} : { x: this.X + (this.bbx || 0) - this.W / 2, y: this.Y - this.H, width: this.W, height: this.H };
            }, wt.remove = function() {
              if (!this.removed && this.node.parentNode) {
                for (var a in this.paper.__set__ && this.paper.__set__.exclude(this), p.eve.unbind("raphael.*.*." + this.id), p._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape), this) this[a] = typeof this[a] == "function" ? p._removedFactory(a) : null;
                this.removed = !0;
              }
            }, wt.attr = function(a, s) {
              if (this.removed) return this;
              if (a == null) {
                var d = {};
                for (var y in this.attrs) this.attrs[o](y) && (d[y] = this.attrs[y]);
                return d.gradient && d.fill == "none" && (d.fill = d.gradient) && delete d.gradient, d.transform = this._.transform, d;
              }
              if (s == null && p.is(a, "string")) {
                if (a == "fill" && this.attrs.fill == "none" && this.attrs.gradient) return this.attrs.gradient;
                for (var x = a.split(G), w = {}, B = 0, E = x.length; B < E; B++) (a = x[B]) in this.attrs ? w[a] = this.attrs[a] : p.is(this.paper.customAttributes[a], "function") ? w[a] = this.paper.customAttributes[a].def : w[a] = p._availableAttrs[a];
                return E - 1 ? w : w[x[0]];
              }
              if (this.attrs && s == null && p.is(a, "array")) {
                for (w = {}, B = 0, E = a.length; B < E; B++) w[a[B]] = this.attr(a[B]);
                return w;
              }
              var q;
              for (var W in s != null && ((q = {})[a] = s), s == null && p.is(a, "object") && (q = a), q) pt("raphael.attr." + W + "." + this.id, this, q[W]);
              if (q) {
                for (W in this.paper.customAttributes) if (this.paper.customAttributes[o](W) && q[o](W) && p.is(this.paper.customAttributes[W], "function")) {
                  var ot = this.paper.customAttributes[W].apply(this, [].concat(q[W]));
                  for (var yt in this.attrs[W] = q[W], ot) ot[o](yt) && (q[yt] = ot[yt]);
                }
                q.text && this.type == "text" && (this.textpath.string = q.text), Pt(this, q);
              }
              return this;
            }, wt.toFront = function() {
              return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && p._tofront(this, this.paper), this;
            }, wt.toBack = function() {
              return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), p._toback(this, this.paper)), this);
            }, wt.insertAfter = function(a) {
              return this.removed ? this : (a.constructor == p.st.constructor && (a = a[a.length - 1]), a.node.nextSibling ? a.node.parentNode.insertBefore(this.node, a.node.nextSibling) : a.node.parentNode.appendChild(this.node), p._insertafter(this, a, this.paper), this);
            }, wt.insertBefore = function(a) {
              return this.removed ? this : (a.constructor == p.st.constructor && (a = a[0]), a.node.parentNode.insertBefore(this.node, a.node), p._insertbefore(this, a, this.paper), this);
            }, wt.blur = function(a) {
              var s = this.node.runtimeStyle, d = s.filter;
              return d = d.replace(K, S), +a != 0 ? (this.attrs.blur = a, s.filter = d + I + " progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+a || 1.5) + ")", s.margin = p.format("-{0}px 0 0 -{0}px", tt(+a || 1.5))) : (s.filter = d, s.margin = 0, delete this.attrs.blur), this;
            }, p._engine.path = function(a, s) {
              var d = st("shape");
              d.style.cssText = $, d.coordsize = et + I + et, d.coordorigin = s.coordorigin;
              var y = new vt(d, s), x = { fill: "none", stroke: "#000" };
              a && (x.path = a), y.type = "path", y.path = [], y.Path = S, Pt(y, x), s.canvas && s.canvas.appendChild(d);
              var w = st("skew");
              return w.on = !0, d.appendChild(w), y.skew = w, y.transform(S), y;
            }, p._engine.rect = function(a, s, d, y, x, w) {
              var B = p._rectPath(s, d, y, x, w), E = a.path(B), q = E.attrs;
              return E.X = q.x = s, E.Y = q.y = d, E.W = q.width = y, E.H = q.height = x, q.r = w, q.path = B, E.type = "rect", E;
            }, p._engine.ellipse = function(a, s, d, y, x) {
              var w = a.path();
              return w.attrs, w.X = s - y, w.Y = d - x, w.W = 2 * y, w.H = 2 * x, w.type = "ellipse", Pt(w, { cx: s, cy: d, rx: y, ry: x }), w;
            }, p._engine.circle = function(a, s, d, y) {
              var x = a.path();
              return x.attrs, x.X = s - y, x.Y = d - y, x.W = x.H = 2 * y, x.type = "circle", Pt(x, { cx: s, cy: d, r: y }), x;
            }, p._engine.image = function(a, s, d, y, x, w) {
              var B = p._rectPath(d, y, x, w), E = a.path(B).attr({ stroke: "none" }), q = E.attrs, W = E.node, ot = W.getElementsByTagName("fill")[0];
              return q.src = s, E.X = q.x = d, E.Y = q.y = y, E.W = q.width = x, E.H = q.height = w, q.path = B, E.type = "image", ot.parentNode == W && W.removeChild(ot), ot.rotate = !0, ot.src = s, ot.type = "tile", E._.fillpos = [d, y], E._.fillsize = [x, w], W.appendChild(ot), ut(E, 1, 1, 0, 0, 0), E;
            }, p._engine.text = function(a, s, d, y) {
              var x = st("shape"), w = st("path"), B = st("textpath");
              s = s || 0, d = d || 0, y = y || "", w.v = p.format("m{0},{1}l{2},{1}", tt(s * et), tt(d * et), tt(s * et) + 1), w.textpathok = !0, B.string = T(y), B.on = !0, x.style.cssText = $, x.coordsize = et + I + et, x.coordorigin = "0 0";
              var E = new vt(x, a), q = { fill: "#000", stroke: "none", font: p._availableAttrs.font, text: y };
              E.shape = x, E.path = w, E.textpath = B, E.type = "text", E.attrs.text = T(y), E.attrs.x = s, E.attrs.y = d, E.attrs.w = 1, E.attrs.h = 1, Pt(E, q), x.appendChild(B), x.appendChild(w), a.canvas.appendChild(x);
              var W = st("skew");
              return W.on = !0, x.appendChild(W), E.skew = W, E.transform(S), E;
            }, p._engine.setSize = function(a, s) {
              var d = this.canvas.style;
              return this.width = a, this.height = s, a == +a && (a += "px"), s == +s && (s += "px"), d.width = a, d.height = s, d.clip = "rect(0 " + a + " " + s + " 0)", this._viewBox && p._engine.setViewBox.apply(this, this._viewBox), this;
            }, p._engine.setViewBox = function(a, s, d, y, x) {
              p.eve("raphael.setViewBox", this, this._viewBox, [a, s, d, y, x]);
              var w, B, E = this.getSize(), q = E.width, W = E.height;
              return x && (d * (w = W / y) < q && (a -= (q - d * w) / 2 / w), y * (B = q / d) < W && (s -= (W - y * B) / 2 / B)), this._viewBox = [a, s, d, y, !!x], this._viewBoxShift = { dx: -a, dy: -s, scale: E }, this.forEach(function(ot) {
                ot.transform("...");
              }), this;
            }, p._engine.initWin = function(a) {
              var s = a.document;
              s.styleSheets.length < 31 ? s.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : s.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
              try {
                !s.namespaces.rvml && s.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), st = function(d) {
                  return s.createElement("<rvml:" + d + ' class="rvml">');
                };
              } catch {
                st = function(y) {
                  return s.createElement("<" + y + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
                };
              }
            }, p._engine.initWin(p._g.win), p._engine.create = function() {
              var a = p._getContainer.apply(0, arguments), s = a.container, d = a.height, y = a.width, x = a.x, w = a.y;
              if (!s) throw new Error("VML container not found.");
              var B = new p._Paper(), E = B.canvas = p._g.doc.createElement("div"), q = E.style;
              return x = x || 0, w = w || 0, y = y || 512, d = d || 342, B.width = y, B.height = d, y == +y && (y += "px"), d == +d && (d += "px"), B.coordsize = 216e5 + I + 216e5, B.coordorigin = "0 0", B.span = p._g.doc.createElement("span"), B.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", E.appendChild(B.span), q.cssText = p.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", y, d), s == 1 ? (p._g.doc.body.appendChild(E), q.left = x + "px", q.top = w + "px", q.position = "absolute") : s.firstChild ? s.insertBefore(E, s.firstChild) : s.appendChild(E), B.renderfix = function() {
              }, B;
            }, p.prototype.clear = function() {
              p.eve("raphael.clear", this), this.canvas.innerHTML = S, this.span = p._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null;
            }, p.prototype.remove = function() {
              for (var a in p.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas), this) this[a] = typeof this[a] == "function" ? p._removedFactory(a) : null;
              return !0;
            };
            var te = p.st;
            for (var h in wt) wt[o](h) && !te[o](h) && (te[h] = /* @__PURE__ */ (function(a) {
              return function() {
                var s = arguments;
                return this.forEach(function(d) {
                  d[a].apply(d, s);
                });
              };
            })(h));
          }
        }).apply(b, A)) === void 0 || (m.exports = H);
      }]);
    });
  })(on)), on.exports;
}
var Si = Ci();
const Ni = /* @__PURE__ */ Ei(Si);
function ze(U) {
  return { x: U.x + U.width / 2, y: U.y + U.height / 2 };
}
function Pn(U, v) {
  const m = ze(U), b = v.x - m.x, _ = v.y - m.y;
  if (b === 0 && _ === 0) return m;
  const A = 1 / Math.max(Math.abs(b) / (U.width / 2), Math.abs(_) / (U.height / 2));
  return { x: m.x + b * A, y: m.y + _ * A };
}
const Mi = "http://www.w3.org/2000/svg";
class An {
  element;
  constructor(v, m) {
    this.element = document.createElementNS(Mi, "text"), this.element.classList.add("workflow-label"), this.setText(m), v.appendChild(this.element);
  }
  setText(v) {
    this.element.textContent = v;
  }
  setPosition(v) {
    this.element.setAttribute("x", String(v.x)), this.element.setAttribute("y", String(v.y));
  }
  centerIn(v) {
    this.element.setAttribute("text-anchor", "middle"), this.element.setAttribute("dominant-baseline", "middle"), this.setPosition({ x: v.x + v.width / 2, y: v.y + v.height / 2 });
  }
  remove() {
    this.element.remove();
  }
}
class Ti {
  constructor(v, m, b = !1) {
    this.host = v, this.hooks = m, this.readOnly = b, this.paper = Ni(v, v.clientWidth || 800, v.clientHeight || 500), this.svg = v.querySelector("svg"), this.host.addEventListener("wheel", this.onWheel, { passive: !1 }), this.host.addEventListener("mousedown", this.onPanStart), this.host.addEventListener("mousedown", this.onMarqueeStart), window.addEventListener("mousemove", this.onPanMove), window.addEventListener("mouseup", this.onPanEnd), this.applyViewBox();
  }
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
  pan = { x: 0, y: 0 };
  panning = !1;
  panStart = { x: 0, y: 0, viewX: 0, viewY: 0 };
  marquee = null;
  marqueeStart = null;
  setReadOnly(v) {
    this.readOnly = v, this.select(this.selected);
  }
  load(v) {
    this.paper.clear(), this.nodes.clear(), this.paths.clear(), this.selected = null, this.data = v, Object.entries(v.states).forEach(([m, b]) => this.drawNode(m, b)), Object.keys(v.paths).forEach((m) => this.drawPath(m));
  }
  refresh() {
    if (this.data) {
      for (const [v, m] of this.nodes)
        this.updateNodeShape(m.shape, m.data), m.label.setText(m.data.props.displayName?.value || m.data.text?.text || v), m.label.centerIn(m.data.attr);
      for (const v of this.paths.keys()) this.updatePath(v);
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
    this.zoom = 1, this.pan = { x: 0, y: 0 }, this.applyViewBox(), this.hooks.onZoom?.(100);
  }
  moveSelection(v, m) {
    if (this.readOnly || !this.data || !this.selected || this.selected.kind === "path") return;
    const b = this.selected.kind === "nodes" ? this.selected.refs : [this.selected.ref];
    this.hooks.onEditStart?.(), this.translateNodes(b, v, m, !0), this.select(b.length > 1 ? { kind: "nodes", refs: b } : { kind: "node", ref: b[0] }), this.hooks.onEditEnd?.();
  }
  alignSelection(v) {
    if (this.readOnly || !this.data || this.selected?.kind !== "nodes" || this.selected.refs.length < 2) return;
    const m = this.selected.refs.map((o) => this.data.states[o]), b = m.map((o) => o.attr), _ = Math.min(...b.map((o) => o.x)), A = Math.max(...b.map((o) => o.x + o.width)), H = Math.min(...b.map((o) => o.y)), p = Math.max(...b.map((o) => o.y + o.height));
    this.hooks.onEditStart?.(), m.forEach((o) => {
      v === "left" && (o.attr.x = _), v === "center" && (o.attr.x = (_ + A - o.attr.width) / 2), v === "right" && (o.attr.x = A - o.attr.width), v === "top" && (o.attr.y = H), v === "middle" && (o.attr.y = (H + p - o.attr.height) / 2), v === "bottom" && (o.attr.y = p - o.attr.height);
    }), this.refresh(), this.select(this.selected), this.hooks.onEditEnd?.();
  }
  distributeSelection(v) {
    if (this.readOnly || !this.data || this.selected?.kind !== "nodes" || this.selected.refs.length < 3) return;
    const m = this.selected.refs.map((T) => ({ ref: T, box: this.data.states[T].attr })).sort((T, Y) => v === "horizontal" ? T.box.x - Y.box.x : T.box.y - Y.box.y), b = m[0].box, _ = m.at(-1).box, A = m.reduce((T, Y) => T + (v === "horizontal" ? Y.box.width : Y.box.height), 0), p = ((v === "horizontal" ? _.x + _.width - b.x : _.y + _.height - b.y) - A) / (m.length - 1);
    this.hooks.onEditStart?.();
    let o = (v === "horizontal" ? b.x + b.width : b.y + b.height) + p;
    m.slice(1, -1).forEach((T) => {
      v === "horizontal" ? (T.box.x = o, o += T.box.width + p) : (T.box.y = o, o += T.box.height + p);
    }), this.refresh(), this.select(this.selected), this.hooks.onEditEnd?.();
  }
  fitToContent() {
    if (!this.data || !Object.keys(this.data.states).length) {
      this.resetView();
      return;
    }
    const v = Object.values(this.data.states).map((o) => o.attr), m = Math.min(...v.map((o) => o.x)) - 50, b = Math.min(...v.map((o) => o.y)) - 50, _ = Math.max(...v.map((o) => o.x + o.width)) + 50, A = Math.max(...v.map((o) => o.y + o.height)) + 50, H = Math.max(1, _ - m), p = Math.max(1, A - b);
    this.zoom = Math.min(this.host.clientWidth / H, this.host.clientHeight / p, 2), this.pan = { x: m, y: b }, this.applyViewBox(), this.hooks.onZoom?.(Math.round(this.zoom * 100));
  }
  focus(v) {
    if (!v || !this.data) return;
    let m = null;
    if (v.kind === "node") m = ze(this.data.states[v.ref].attr);
    else if (v.kind === "nodes") {
      const b = v.refs.map((_) => this.data.states[_]?.attr).filter(Boolean);
      b.length && (m = { x: b.reduce((_, A) => _ + ze(A).x, 0) / b.length, y: b.reduce((_, A) => _ + ze(A).y, 0) / b.length });
    } else {
      const b = this.data.paths[v.ref];
      b && (m = In(this.pathPoints(b)));
    }
    if (m) {
      const b = this.viewSize();
      this.pan = { x: m.x - b.width / 2, y: m.y - b.height / 2 }, this.applyViewBox(), this.select(v);
    }
  }
  select(v) {
    this.clearSelectionStyle(), this.clearHandles(), this.clearResizeHandles(), this.selected = v, v?.kind === "node" && (this.nodes.get(v.ref)?.shape.attr({ stroke: "#2f7cf6", "stroke-width": 3 }), this.readOnly || this.renderResizeHandles(v.ref)), v?.kind === "nodes" && v.refs.forEach((m) => this.nodes.get(m)?.shape.attr({ stroke: "#2f7cf6", "stroke-width": 3 })), v?.kind === "path" && (this.paths.get(v.ref)?.line.attr({ stroke: "#2f7cf6", "stroke-width": 3 }), this.readOnly || this.renderHandles(v.ref)), this.hooks.onSelect(v);
  }
  drawNode(v, m) {
    const { x: b, y: _, width: A, height: H } = m.attr;
    let p;
    ["decision", "fork", "join"].includes(m.type) ? p = this.paper.path(zn({ x: b, y: _, width: A, height: H })) : ["start", "end"].includes(m.type) ? p = this.paper.ellipse(b + A / 2, _ + H / 2, A / 2, H / 2) : p = this.paper.rect(b, _, A, H, 8), p.attr({ fill: m.type === "end" ? "#fff1f0" : "#f5f8ff", stroke: "#356aa0", "stroke-width": 2, cursor: this.readOnly ? "default" : "move" }), p.click((tt) => this.selectNode(v, tt.shiftKey || tt.metaKey || tt.ctrlKey));
    const o = new An(this.svg, m.props.displayName?.value || m.text?.text || v);
    o.centerIn(m.attr), o.element.style.pointerEvents = "none", this.nodes.set(v, { shape: p, label: o, data: m });
    let T = [], Y = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map();
    p.drag((tt, kt) => {
      if (this.readOnly) return;
      T.forEach((pt) => {
        const I = this.nodes.get(pt), S = Y.get(pt);
        !I || !S || (I.data.attr.x = S.x + tt / this.zoom, I.data.attr.y = S.y + kt / this.zoom, this.updateNodeShape(I.shape, I.data), I.label.centerIn(I.data.attr));
      });
      const C = /* @__PURE__ */ new Set(), X = tt / this.zoom, G = kt / this.zoom;
      Z.forEach((pt, I) => {
        this.data.paths[I].dots = pt.map((S) => ({ x: S.x + X, y: S.y + G }));
      }), T.forEach((pt) => this.connectedPathRefs(pt).forEach((I) => C.add(I))), C.forEach((pt) => this.updatePath(pt));
    }, () => {
      if (this.readOnly) return;
      const tt = this.selected?.kind === "nodes" ? this.selected.refs : this.selected?.kind === "node" ? [this.selected.ref] : [];
      T = tt.includes(v) ? [...tt] : [v], Y = new Map(T.map((C) => [C, { ...this.data.states[C].attr }]));
      const kt = new Set(T);
      Z = new Map(Object.entries(this.data.paths).filter(([, C]) => kt.has(C.from) && kt.has(C.to)).map(([C, X]) => [C, X.dots.map((G) => ({ ...G }))])), this.hooks.onEditStart?.(), this.select(T.length > 1 ? { kind: "nodes", refs: T } : { kind: "node", ref: v });
    }, () => {
      this.readOnly || this.hooks.onEditEnd?.();
    });
  }
  drawPath(v) {
    const m = this.paper.path().attr({ stroke: "#77808a", "stroke-width": 2, "arrow-end": "classic-wide-long", fill: "none", cursor: "pointer" });
    m.click(() => this.select({ kind: "path", ref: v })), m.dblclick((_) => {
      this.readOnly || this.addWaypoint(v, this.clientToCanvas(_.clientX, _.clientY));
    });
    const b = { line: m, handles: [] };
    this.paths.set(v, b), this.updatePath(v), m.toBack();
  }
  updateNodeShape(v, m) {
    const b = m.attr;
    ["decision", "fork", "join"].includes(m.type) ? v.attr({ path: zn(b) }) : ["start", "end"].includes(m.type) ? v.attr({ cx: b.x + b.width / 2, cy: b.y + b.height / 2, rx: b.width / 2, ry: b.height / 2 }) : v.attr(b);
  }
  pathPoints(v) {
    if (!this.data) return [];
    const m = this.data.states[v.from].attr, b = this.data.states[v.to].attr, _ = v.dots[0] || ze(b), A = v.dots[v.dots.length - 1] || ze(m);
    return [Pn(m, _), ...v.dots, Pn(b, A)];
  }
  updatePath(v) {
    if (!this.data) return;
    const m = this.data.paths[v], b = this.paths.get(v);
    if (!m || !b || !this.data.states[m.from] || !this.data.states[m.to]) return;
    const _ = this.pathPoints(m);
    b.line.attr({ path: _.map((H, p) => `${p ? "L" : "M"}${H.x} ${H.y}`).join("") });
    const A = m.props.displayName?.value || m.text?.text || "";
    if (A && !b.label && (b.label = new An(this.svg, A), b.label.element.style.pointerEvents = "none"), !A && b.label && (b.label.remove(), b.label = void 0), b.label) {
      b.label.setText(A);
      const H = In(_);
      b.label.setPosition({ x: H.x + (m.text?.x || 0), y: H.y + (m.text?.y || -8) });
    }
    this.selected?.kind === "path" && this.selected.ref === v && this.positionHandles(v);
  }
  addWaypoint(v, m) {
    if (!this.data) return;
    this.hooks.onEditStart?.();
    const b = this.data.paths[v], _ = this.pathPoints(b);
    b.dots.splice(Li(_, m), 0, m), this.updatePath(v), this.select({ kind: "path", ref: v }), this.hooks.onEditEnd?.();
  }
  selectNode(v, m) {
    if (!m) {
      this.select({ kind: "node", ref: v });
      return;
    }
    const b = this.selected?.kind === "nodes" ? [...this.selected.refs] : this.selected?.kind === "node" ? [this.selected.ref] : [], _ = b.indexOf(v);
    _ >= 0 ? b.splice(_, 1) : b.push(v), this.select(b.length > 1 ? { kind: "nodes", refs: b } : b.length ? { kind: "node", ref: b[0] } : null);
  }
  renderResizeHandles(v) {
    if (!this.data) return;
    const m = this.data.states[v];
    ["nw", "ne", "sw", "se"].forEach((_) => {
      const A = this.paper.rect(0, 0, 8, 8).attr({ fill: "#fff", stroke: "#2f7cf6", cursor: `${_}-resize` });
      let H;
      A.drag((p, o) => {
        const T = p / this.zoom, Y = o / this.zoom, Z = { ...H }, tt = 24, kt = 2e3;
        if (_.includes("e") && (Z.width = Math.max(tt, H.width + T)), _.includes("s") && (Z.height = Math.max(tt, H.height + Y)), _.includes("w") && (Z.width = Math.max(tt, H.width - T), Z.x = H.x + H.width - Z.width), _.includes("n") && (Z.height = Math.max(tt, H.height - Y), Z.y = H.y + H.height - Z.height), Z.width = Math.min(kt, Z.width), Z.height = Math.min(kt, Z.height), ["start", "end"].includes(m.type)) {
          const X = Math.min(kt, Math.max(tt, Math.max(Z.width, Z.height)));
          _.includes("w") && (Z.x = H.x + H.width - X), _.includes("n") && (Z.y = H.y + H.height - X), Z.width = X, Z.height = X;
        } else if (["decision", "fork", "join"].includes(m.type)) {
          const X = H.width / H.height;
          Math.abs(T) >= Math.abs(Y) ? Z.height = Z.width / X : Z.width = Z.height * X, Z.width = Math.min(kt, Math.max(tt, Z.width)), Z.height = Math.min(kt, Math.max(tt, Z.height)), _.includes("w") && (Z.x = H.x + H.width - Z.width), _.includes("n") && (Z.y = H.y + H.height - Z.height);
        }
        Object.assign(m.attr, Z);
        const C = this.nodes.get(v);
        this.updateNodeShape(C.shape, m), C.label.centerIn(m.attr), this.updateConnectedPaths(v), this.positionResizeHandles(v);
      }, () => {
        H = { ...m.attr }, this.hooks.onEditStart?.();
      }, () => this.hooks.onEditEnd?.()), this.resizeHandles.push(A);
    }), this.positionResizeHandles(v);
  }
  positionResizeHandles(v) {
    if (!this.data) return;
    const m = this.data.states[v].attr, b = [{ x: m.x, y: m.y }, { x: m.x + m.width, y: m.y }, { x: m.x, y: m.y + m.height }, { x: m.x + m.width, y: m.y + m.height }];
    this.resizeHandles.forEach((_, A) => _.attr({ x: b[A].x - 4, y: b[A].y - 4 }));
  }
  clearResizeHandles() {
    for (; this.resizeHandles.length; ) this.resizeHandles.pop().remove();
  }
  renderHandles(v) {
    if (!this.data) return;
    const m = this.paths.get(v), b = this.data.paths[v];
    !m || !b || (m.handles = b.dots.map((_, A) => {
      const H = this.paper.circle(0, 0, 6).attr({ fill: "#fff", stroke: "#2f7cf6", "stroke-width": 2, cursor: "move" });
      let p;
      return H.drag(
        (o, T) => {
          b.dots[A] = { x: p.x + o / this.zoom, y: p.y + T / this.zoom }, this.updatePath(v);
        },
        () => {
          p = { ...b.dots[A] }, this.hooks.onEditStart?.();
        },
        () => this.hooks.onEditEnd?.()
      ), H.dblclick(() => {
        this.hooks.onEditStart?.(), b.dots.splice(A, 1), this.updatePath(v), this.select({ kind: "path", ref: v }), this.hooks.onEditEnd?.();
      }), H;
    }), this.positionHandles(v));
  }
  positionHandles(v) {
    if (!this.data) return;
    const m = this.paths.get(v), b = this.data.paths[v];
    m?.handles.forEach((_, A) => _.attr({ cx: b.dots[A]?.x, cy: b.dots[A]?.y }));
  }
  clearHandles() {
    for (const v of this.paths.values())
      v.handles.forEach((m) => m.remove()), v.handles = [];
  }
  translateNodes(v, m, b, _) {
    if (!this.data) return;
    const A = new Set(v);
    v.forEach((H) => {
      const p = this.data.states[H];
      p.attr.x += m, p.attr.y += b;
    }), _ && Object.values(this.data.paths).forEach((H) => {
      A.has(H.from) && A.has(H.to) && H.dots.forEach((p) => {
        p.x += m, p.y += b;
      });
    }), this.refresh();
  }
  connectedPathRefs(v) {
    return this.data ? Object.entries(this.data.paths).filter(([, m]) => m.from === v || m.to === v).map(([m]) => m) : [];
  }
  updateConnectedPaths(v) {
    this.data && Object.entries(this.data.paths).forEach(([m, b]) => {
      (b.from === v || b.to === v) && this.updatePath(m);
    });
  }
  clearSelectionStyle() {
    for (const v of this.nodes.values()) v.shape.attr({ stroke: "#356aa0", "stroke-width": 2 });
    for (const v of this.paths.values()) v.line.attr({ stroke: "#77808a", "stroke-width": 2 });
  }
  viewSize() {
    return { width: this.host.clientWidth / this.zoom, height: this.host.clientHeight / this.zoom };
  }
  applyViewBox() {
    const v = this.viewSize();
    this.paper.setViewBox(this.pan.x, this.pan.y, v.width, v.height, !1);
  }
  setZoom(v) {
    const m = this.viewSize(), b = { x: this.pan.x + m.width / 2, y: this.pan.y + m.height / 2 };
    this.zoom = Math.min(4, Math.max(0.25, v));
    const _ = this.viewSize();
    this.pan = { x: b.x - _.width / 2, y: b.y - _.height / 2 }, this.applyViewBox(), this.hooks.onZoom?.(Math.round(this.zoom * 100));
  }
  clientToCanvas(v, m) {
    const b = this.host.getBoundingClientRect();
    return { x: this.pan.x + (v - b.left) / this.zoom, y: this.pan.y + (m - b.top) / this.zoom };
  }
  onWheel = (v) => {
    v.preventDefault(), this.setZoom(this.zoom * (v.deltaY < 0 ? 1.1 : 1 / 1.1));
  };
  onPanStart = (v) => {
    v.button !== 1 && !(v.button === 0 && v.altKey) || (v.preventDefault(), this.panning = !0, this.panStart = { x: v.clientX, y: v.clientY, viewX: this.pan.x, viewY: this.pan.y });
  };
  onPanMove = (v) => {
    this.panning && (this.pan = { x: this.panStart.viewX - (v.clientX - this.panStart.x) / this.zoom, y: this.panStart.viewY - (v.clientY - this.panStart.y) / this.zoom }, this.applyViewBox());
  };
  onPanEnd = () => {
    this.panning = !1;
  };
  onMarqueeStart = (v) => {
    this.readOnly || v.button !== 0 || v.altKey || v.target !== this.svg || (v.preventDefault(), this.marqueeStart = this.clientToCanvas(v.clientX, v.clientY), this.marquee = this.paper.rect(this.marqueeStart.x, this.marqueeStart.y, 0, 0).attr({ fill: "#2f7cf6", "fill-opacity": 0.08, stroke: "#2f7cf6", "stroke-dasharray": "-" }), window.addEventListener("mousemove", this.onMarqueeMove), window.addEventListener("mouseup", this.onMarqueeEnd, { once: !0 }));
  };
  onMarqueeMove = (v) => {
    if (!this.marqueeStart || !this.marquee) return;
    const m = this.clientToCanvas(v.clientX, v.clientY);
    this.marquee.attr({ x: Math.min(this.marqueeStart.x, m.x), y: Math.min(this.marqueeStart.y, m.y), width: Math.abs(m.x - this.marqueeStart.x), height: Math.abs(m.y - this.marqueeStart.y) });
  };
  onMarqueeEnd = () => {
    if (window.removeEventListener("mousemove", this.onMarqueeMove), !this.marqueeStart || !this.marquee || !this.data) return;
    const v = this.marquee.attr(), m = Object.entries(this.data.states).filter(([, b]) => b.attr.x >= v.x && b.attr.y >= v.y && b.attr.x + b.attr.width <= v.x + v.width && b.attr.y + b.attr.height <= v.y + v.height).map(([b]) => b);
    this.marquee.remove(), this.marquee = null, this.marqueeStart = null, this.select(m.length > 1 ? { kind: "nodes", refs: m } : m.length ? { kind: "node", ref: m[0] } : null);
  };
}
function zn(U) {
  return `M${U.x + U.width / 2} ${U.y}L${U.x + U.width} ${U.y + U.height / 2}L${U.x + U.width / 2} ${U.y + U.height}L${U.x} ${U.y + U.height / 2}Z`;
}
function In(U) {
  if (!U.length) return { x: 0, y: 0 };
  if (U.length === 1) return U[0];
  const v = U.slice(1).map((_, A) => Math.hypot(_.x - U[A].x, _.y - U[A].y)), m = v.reduce((_, A) => _ + A, 0) / 2;
  let b = 0;
  for (let _ = 0; _ < v.length; _++) {
    if (b + v[_] >= m) {
      const A = v[_] ? (m - b) / v[_] : 0;
      return { x: U[_].x + (U[_ + 1].x - U[_].x) * A, y: U[_].y + (U[_ + 1].y - U[_].y) * A };
    }
    b += v[_];
  }
  return U[U.length - 1];
}
function Li(U, v) {
  let m = 0, b = 1 / 0;
  for (let _ = 0; _ < U.length - 1; _++) {
    const A = Oi(v, U[_], U[_ + 1]);
    A < b && (b = A, m = _);
  }
  return m;
}
function Oi(U, v, m) {
  const b = m.x - v.x, _ = m.y - v.y, A = b * b + _ * _, H = A ? Math.max(0, Math.min(1, ((U.x - v.x) * b + (U.y - v.y) * _) / A)) : 0;
  return Math.hypot(U.x - (v.x + H * b), U.y - (v.y + H * _));
}
const Rn = {
  states: {
    start1: { type: "start", attr: { x: 80, y: 130, width: 48, height: 48 }, props: { name: { value: "start1" }, displayName: { value: "开始" } } },
    apply: { type: "task", attr: { x: 230, y: 128, width: 120, height: 52 }, text: { text: "请假申请" }, props: { name: { value: "apply" }, displayName: { value: "请假申请" }, assignee: { value: "apply.operator" }, form: { value: "/flow/leave/apply" }, taskType: { value: "Major" }, performType: { value: "ANY" } } },
    decision1: { type: "decision", attr: { x: 450, y: 130, width: 48, height: 48 }, props: { name: { value: "decision1" }, displayName: { value: "判断" }, expr: { value: "day > 2" } } },
    end1: { type: "end", attr: { x: 650, y: 130, width: 48, height: 48 }, props: { name: { value: "end1" }, displayName: { value: "结束" } } }
  },
  paths: {
    transition1: { from: "start1", to: "apply", dots: [], props: { name: { value: "transition1" } } },
    transition2: { from: "apply", to: "decision1", dots: [], props: { name: { value: "transition2" } } },
    transition3: { from: "decision1", to: "end1", dots: [], text: { text: "通过" }, props: { name: { value: "transition3" } } }
  },
  props: { name: "leave", displayName: "请假流程", expireTime: "", instanceUrl: "", instanceNoClass: "" }
};
function qt(U) {
  return JSON.parse(JSON.stringify(U));
}
function ln(U) {
  if (!zt(U) || !zt(U.states) || !zt(U.paths) || !zt(U.props)) return !1;
  for (const v of Object.values(U.states))
    if (!zt(v) || typeof v.type != "string" || !zt(v.attr) || !zt(v.props) || ![v.attr.x, v.attr.y, v.attr.width, v.attr.height].every(Number.isFinite) || v.attr.width <= 0 || v.attr.height <= 0) return !1;
  for (const v of Object.values(U.paths))
    if (!zt(v) || typeof v.from != "string" || typeof v.to != "string" || !U.states[v.from] || !U.states[v.to] || !zt(v.props) || !Array.isArray(v.dots) || v.dots.some((m) => !zt(m) || !Number.isFinite(m.x) || !Number.isFinite(m.y))) return !1;
  return !0;
}
class Pi extends Error {
  constructor(v) {
    super(v.map((m) => m.message).join("；")), this.issues = v, this.name = "WorkflowValidationError";
  }
  issues;
}
function Ie(U) {
  const v = [], m = (C, X, G) => v.push({ code: C, message: X, target: G });
  if (!zt(U)) return [{ code: "INVALID_ROOT", message: "流程定义必须是普通对象" }];
  const b = U;
  if (zt(b.states) || m("MISSING_STATES", "流程定义缺少有效的 states 对象"), zt(b.paths) || m("MISSING_PATHS", "流程定义缺少有效的 paths 对象"), zt(b.props) || m("MISSING_PROPS", "流程定义缺少有效的 props 对象"), v.length) return v;
  const _ = b.states, A = b.paths, H = b.props;
  (typeof H.name != "string" || !H.name.trim()) && m("PROCESS_NAME_REQUIRED", "流程名称不能为空", "process");
  const p = /* @__PURE__ */ new Set(["start", "end", "task", "decision", "fork", "join", "custom", "subprocess"]), o = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set(), Y = [], Z = [], tt = /* @__PURE__ */ new Map(), kt = /* @__PURE__ */ new Map();
  Object.keys(_).forEach((C) => {
    tt.set(C, []), kt.set(C, []);
  });
  for (const [C, X] of Object.entries(_)) {
    if (!zt(X)) {
      m("INVALID_NODE", `节点 ${C} 无效`, C);
      continue;
    }
    const G = X;
    (typeof G.type != "string" || !p.has(G.type)) && m("UNSUPPORTED_NODE", `节点 ${C} 的类型不受支持: ${String(G.type || "空")}`, C), (!zt(G.attr) || ![G.attr.x, G.attr.y, G.attr.width, G.attr.height].every(Number.isFinite) || G.attr.width <= 0 || G.attr.height <= 0) && m("INVALID_NODE_BOX", `节点 ${C} 的位置或尺寸无效`, C);
    const pt = zt(G.props) ? G.props : {};
    zt(G.props) || m("INVALID_NODE_PROPS", `节点 ${C} 的 props 必须是对象`, C);
    const I = Ae(pt, "name");
    I ? o.has(I) ? m("DUPLICATE_NODE_NAME", `节点业务名称重复: ${I}`, C) : o.add(I) : m("NODE_NAME_REQUIRED", `节点 ${C} 的业务名称不能为空`, C), G.type === "start" && Y.push(C), G.type === "end" && Z.push(C);
    const S = (lt) => Ae(pt, lt);
    if (G.type === "task") {
      S("performType") && !["ANY", "ALL"].includes(S("performType").toUpperCase()) && m("INVALID_PERFORM_TYPE", `任务 ${C} 的参与类型必须是 ANY 或 ALL`, C), S("taskType") && !["Major", "Aidant"].includes(S("taskType")) && m("INVALID_TASK_TYPE", `任务 ${C} 的任务类型必须是 Major 或 Aidant`, C), S("reminderRepeat") && (!/^\d+$/.test(S("reminderRepeat")) || Number(S("reminderRepeat")) <= 0) && m("INVALID_REMINDER_REPEAT", `任务 ${C} 的重复提醒间隔必须是正整数`, C);
      const lt = /* @__PURE__ */ new Set();
      G.fields !== void 0 && !Array.isArray(G.fields) && m("INVALID_FIELDS", `任务 ${C} 的 fields 必须是数组`, C);
      for (const [at, K] of (Array.isArray(G.fields) ? G.fields : []).entries()) {
        if (!zt(K)) {
          m("INVALID_FIELD", `任务 ${C} 的第 ${at + 1} 个字段无效`, C);
          continue;
        }
        const k = typeof K.name == "string" ? K.name.trim() : "";
        k ? lt.has(k) ? m("DUPLICATE_FIELD_NAME", `任务 ${C} 的字段名称重复: ${k}`, C) : lt.add(k) : m("FIELD_NAME_REQUIRED", `任务 ${C} 的第 ${at + 1} 个字段名称不能为空`, C), (typeof K.type != "string" || !K.type.trim()) && m("FIELD_TYPE_REQUIRED", `任务 ${C} 的字段 ${k || at + 1} 缺少类型`, C), zt(K.attrs) || m("INVALID_FIELD_ATTRS", `任务 ${C} 的字段 ${k || at + 1} 的 attrs 必须是对象`, C);
      }
    }
    G.type === "custom" && !S("clazz") && m("CUSTOM_CLASS_REQUIRED", `自定义节点 ${C} 必须配置执行类`, C), G.type === "subprocess" && (S("processName") || m("SUBPROCESS_NAME_REQUIRED", `子流程节点 ${C} 必须配置流程名称`, C), S("version") && (!/^\d+$/.test(S("version")) || Number(S("version")) < 0) && m("INVALID_SUBPROCESS_VERSION", `子流程节点 ${C} 的版本必须是非负整数`, C));
  }
  for (const [C, X] of Object.entries(A)) {
    if (!zt(X)) {
      m("INVALID_PATH", `连线 ${C} 无效`, C);
      continue;
    }
    const G = X;
    if (typeof G.from != "string" || typeof G.to != "string" || !_[G.from] || !_[G.to]) {
      m("DANGLING_PATH", `连线 ${C} 引用了不存在的节点`, C);
      continue;
    }
    G.from === G.to && m("SELF_PATH", `连线 ${C} 不能连接节点自身`, C), kt.get(G.from).push(C), tt.get(G.to).push(C);
    const pt = zt(G.props) ? G.props : {};
    zt(G.props) || m("INVALID_PATH_PROPS", `连线 ${C} 的 props 必须是对象`, C);
    const I = Ae(pt, "name");
    I ? T.has(I) ? m("DUPLICATE_PATH_NAME", `连线名称重复: ${I}`, C) : T.add(I) : m("PATH_NAME_REQUIRED", `连线 ${C} 的名称不能为空`, C), (!Array.isArray(G.dots) || G.dots.some((S) => !zt(S) || !Number.isFinite(S.x) || !Number.isFinite(S.y))) && m("INVALID_PATH_POINTS", `连线 ${C} 的拐点坐标无效`, C);
  }
  Y.length !== 1 && m("START_COUNT", "流程必须且只能包含一个开始节点", "process"), Z.length || m("END_REQUIRED", "流程至少需要一个结束节点", "process");
  for (const [C, X] of Object.entries(_)) {
    if (!zt(X)) continue;
    const G = X, pt = tt.get(C)?.length || 0, I = kt.get(C)?.length || 0;
    if (G.type === "start" && pt && m("START_HAS_INPUT", `开始节点 ${C} 不能有输入连线`, C), G.type === "end" && I && m("END_HAS_OUTPUT", `结束节点 ${C} 不能有输出连线`, C), G.type !== "end" && I === 0 && m("NODE_WITHOUT_OUTPUT", `节点 ${C} 没有输出连线`, C), G.type !== "start" && pt === 0 && m("NODE_WITHOUT_INPUT", `节点 ${C} 没有输入连线`, C), G.type === "fork" && I < 2 && m("FORK_OUTPUTS", `分支节点 ${C} 至少需要两条输出连线`, C), G.type === "join" && pt < 2 && m("JOIN_INPUTS", `合并节点 ${C} 至少需要两条输入连线`, C), G.type === "decision") {
      const S = Ae(zt(G.props) ? G.props : {}, "expr") !== "" || Ae(zt(G.props) ? G.props : {}, "handleClass") !== "", lt = (kt.get(C) || []).some((at) => {
        const K = A[at];
        return zt(K) && Ae(zt(K.props) ? K.props : {}, "expr") !== "";
      });
      !S && !lt && m("DECISION_RULE_REQUIRED", `判断节点 ${C} 必须配置表达式、处理类或条件连线`, C);
    }
  }
  if (Y.length === 1) {
    const C = Bn(Y, (X) => (kt.get(X) || []).map((G) => A[G].to));
    Object.keys(_).filter((X) => !C.has(X)).forEach((X) => m("UNREACHABLE_NODE", `节点 ${X} 无法从开始节点到达`, X));
  }
  if (Z.length) {
    const C = Bn(Z, (X) => (tt.get(X) || []).map((G) => A[G].from));
    Object.keys(_).filter((X) => !C.has(X)).forEach((X) => m("NO_PATH_TO_END", `节点 ${X} 无法到达结束节点`, X));
  }
  return v;
}
function zt(U) {
  return U !== null && typeof U == "object" && !Array.isArray(U);
}
function Ae(U, v) {
  const m = U[v];
  return zt(m) && typeof m.value == "string" ? m.value.trim() : "";
}
function Bn(U, v) {
  const m = /* @__PURE__ */ new Set(), b = [...U];
  for (; b.length; ) {
    const _ = b.pop();
    m.has(_) || (m.add(_), v(_).forEach((A) => {
      m.has(A) || b.push(A);
    }));
  }
  return m;
}
function Ai(U) {
  const v = Ie(U);
  if (v.length) throw new Pi(v);
}
const zi = { class: "toolbox" }, Ii = ["disabled"], Ri = ["disabled", "onClick"], Bi = { class: "workspace" }, $i = { class: "toolbar" }, Di = ["disabled"], ji = ["disabled"], Vi = ["disabled"], Fi = ["disabled"], Ui = ["disabled"], qi = ["disabled"], Hi = ["disabled"], Yi = ["disabled"], Xi = ["disabled"], Ji = ["disabled"], Gi = ["disabled"], Wi = { "aria-label": "编辑模式" }, Ki = {
  key: 0,
  class: "dirty",
  title: "有尚未导出的修改"
}, Qi = { class: "view-tools" }, Zi = {
  key: 0,
  class: "json-editor"
}, tr = ["readonly"], er = { class: "json-actions" }, nr = {
  key: 0,
  class: "error"
}, ir = ["disabled"], rr = {
  key: 0,
  class: "validation-success"
}, sr = {
  key: 1,
  class: "validation-list"
}, ar = ["onClick"], lr = /* @__PURE__ */ hn({
  __name: "WorkflowDesigner",
  props: {
    modelValue: {},
    readonly: { type: Boolean, default: !1 },
    guardBeforeUnload: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "dirty-change", "load-error"],
  setup(U, { expose: v, emit: m }) {
    const b = U, _ = m, A = [
      { type: "start", label: "开始" },
      { type: "end", label: "结束" },
      { type: "task", label: "任务" },
      { type: "decision", label: "判断" },
      { type: "fork", label: "分支" },
      { type: "join", label: "合并" },
      { type: "custom", label: "自定义" },
      { type: "subprocess", label: "子流程" }
    ], H = Yt(null), p = Yt(null), o = ln(b.modelValue) ? b.modelValue : Rn, T = Yt(qt(o)), Y = le(() => b.readonly), Z = Yt(null), tt = Yt("design"), kt = Yt(""), C = Yt(""), X = Yt(!1), G = Yt(!1), pt = Yt([]);
    let I = null;
    const S = Yt([]), lt = Yt([]), at = Yt(JSON.stringify(T.value));
    let K = null;
    const k = Yt(!1), $ = Yt(null), et = le(() => S.value.length > 0), bt = le(() => lt.value.length > 0), ht = le(() => JSON.stringify(T.value) !== at.value), Q = le(() => Z.value?.kind === "nodes" ? Z.value.refs : Z.value?.kind === "node" ? [Z.value.ref] : []), ut = le(() => Q.value.filter((N) => T.value.states[N]?.type !== "start")), st = Yt(null);
    let St = 0;
    const Pt = Yt(100), Bt = (N) => I?.select(N), vt = () => I?.zoomIn(), wt = () => I?.zoomOut(), te = () => I?.fitToContent(), h = () => I?.resetView(), a = (N) => I?.alignSelection(N), s = (N) => I?.distributeSelection(N), d = (N) => {
      if (Z.value = N, !Y.value && !(!k.value || N?.kind !== "node")) {
        if (!$.value) {
          $.value = N.ref;
          return;
        }
        if ($.value === N.ref) {
          window.alert("连线不能连接节点自身");
          return;
        }
        W($.value, N.ref), k.value = !1, $.value = null;
      }
    }, y = () => {
      I?.load(T.value), Z.value = null;
    }, x = () => I?.refresh(), w = () => {
      ue() && ee(Rn, { markClean: !0, emit: !0 });
    }, B = () => {
      ue() && ee({ states: {}, paths: {}, props: { name: "new-process", displayName: "新流程", expireTime: "", instanceUrl: "", instanceNoClass: "" } }, { markClean: !0, emit: !0 });
    }, E = (N) => {
      if (Y.value) return;
      if (N === "start" && Object.values(T.value.states).some((ne) => ne.type === "start")) {
        window.alert("流程只能包含一个开始节点");
        return;
      }
      let rt = 1;
      for (; T.value.states[`${N}${rt}`]; ) rt++;
      const ft = `${N}${rt}`, Et = {
        name: { value: ft },
        displayName: { value: ft },
        preInterceptors: { value: "" },
        postInterceptors: { value: "" }
      };
      N === "task" && Object.assign(Et, { form: { value: "" }, assignee: { value: "" }, performType: { value: "ANY" }, taskType: { value: "Major" }, expireTime: { value: "" }, reminderTime: { value: "" }, reminderRepeat: { value: "" }, autoExecute: { value: "" }, callback: { value: "" } }), N === "decision" && Object.assign(Et, { expr: { value: "" }, handleClass: { value: "" } }), N === "custom" && Object.assign(Et, { form: { value: "" }, clazz: { value: "" }, methodName: { value: "" }, args: { value: "" }, var: { value: "" } }), N === "subprocess" && Object.assign(Et, { form: { value: "" }, processName: { value: "" }, version: { value: "0" } });
      const $t = Object.keys(T.value.states).length, Dt = qt(T.value);
      T.value.states[ft] = { type: N, attr: { x: 80 + $t % 4 * 150, y: 80 + Math.floor($t / 4) * 100, width: ["start", "end", "decision", "fork", "join"].includes(N) ? 48 : 120, height: 52 }, props: Et, fields: N === "task" ? [] : void 0 }, At(Dt), y(), ve(() => I?.select({ kind: "node", ref: ft }));
    }, q = () => {
      k.value = !k.value, $.value = null;
    }, W = (N, rt) => {
      if (T.value.states[N]?.type === "end") {
        window.alert("结束节点不能作为连线起点");
        return;
      }
      if (T.value.states[rt]?.type === "start") {
        window.alert("开始节点不能作为连线终点");
        return;
      }
      if (Object.values(T.value.paths).some((Dt) => Dt.from === N && Dt.to === rt)) {
        window.alert("这两个节点之间已存在同方向连线");
        return;
      }
      const ft = qt(T.value);
      let Et = 1;
      for (; T.value.paths[`transition${Et}`]; ) Et++;
      const $t = `transition${Et}`;
      T.value.paths[$t] = { from: N, to: rt, dots: [], text: { text: "", x: 0, y: -8 }, props: { name: { value: $t }, displayName: { value: "" }, expr: { value: "" } } }, At(ft), y(), ve(() => I?.select({ kind: "path", ref: $t }));
    }, ot = () => {
      if (Y.value || !Z.value) return;
      const N = qt(T.value);
      if (Z.value.kind === "path") delete T.value.paths[Z.value.ref];
      else {
        const rt = Z.value.kind === "nodes" ? Z.value.refs : [Z.value.ref];
        rt.forEach((ft) => delete T.value.states[ft]), Object.entries(T.value.paths).forEach(([ft, Et]) => {
          (rt.includes(Et.from) || rt.includes(Et.to)) && delete T.value.paths[ft];
        });
      }
      At(N), y();
    }, yt = () => {
      const N = ut.value;
      if (!N.length) return;
      const rt = {}, ft = {};
      N.forEach((Et) => rt[Et] = qt({ states: { [Et]: T.value.states[Et] }, paths: {}, props: {} }).states[Et]), Object.entries(T.value.paths).forEach(([Et, $t]) => {
        N.includes($t.from) && N.includes($t.to) && (ft[Et] = JSON.parse(JSON.stringify($t)));
      }), st.value = { nodes: rt, paths: ft }, St = 0;
    }, _t = (N, rt) => {
      let ft = 1, Et = `${N}_copy`;
      for (; rt[Et]; ) Et = `${N}_copy${++ft}`;
      return Et;
    }, xt = () => {
      if (Y.value || !st.value) return;
      const N = qt(T.value), rt = Object.keys(st.value.nodes), ft = {}, Et = [], $t = 30 * ++St;
      rt.forEach((Dt) => {
        const ne = JSON.parse(JSON.stringify(st.value.nodes[Dt])), Gt = _t(Dt, T.value.states);
        ft[Dt] = Gt, Et.push(Gt), ne.attr.x += $t, ne.attr.y += $t, ne.props.name = { value: Gt }, T.value.states[Gt] = ne;
      }), Object.entries(st.value.paths).forEach(([Dt, ne]) => {
        const Gt = _t(Dt, T.value.paths), Jt = JSON.parse(JSON.stringify(ne));
        Jt.from = ft[Jt.from], Jt.to = ft[Jt.to], Jt.dots = Jt.dots.map((ie) => ({ x: ie.x + $t, y: ie.y + $t })), Jt.props.name = { value: Gt }, T.value.paths[Gt] = Jt;
      }), At(N), y(), ve(() => I?.select(Et.length > 1 ? { kind: "nodes", refs: Et } : { kind: "node", ref: Et[0] }));
    }, Mt = () => {
      kt.value = JSON.stringify(T.value, null, 2), C.value = "", tt.value = "json";
    }, Tt = () => {
      try {
        const N = JSON.parse(kt.value);
        Ai(N);
        const rt = qt(T.value);
        T.value = qt(N), At(rt), Ft = qt(T.value), C.value = "", tt.value = "design", ve(y);
      } catch (N) {
        C.value = N instanceof Error ? N.message : "JSON 无效";
      }
    }, Nt = () => {
      pt.value = Ie(T.value), G.value = !0;
    }, ct = (N) => {
      if (!N.target || N.target === "process") {
        G.value = !1, I?.fitToContent();
        return;
      }
      const rt = T.value.states[N.target] ? "node" : T.value.paths[N.target] ? "path" : null;
      rt && (G.value = !1, tt.value = "design", ve(() => I?.focus({ kind: rt, ref: N.target })));
    }, jt = () => {
      if (pt.value = Ie(T.value), pt.value.length) {
        G.value = !0;
        return;
      }
      const N = URL.createObjectURL(new Blob([JSON.stringify(T.value, null, 2)], { type: "application/json" })), rt = document.createElement("a");
      rt.href = N, rt.download = `${T.value.props.name || "workflow"}.json`, rt.click(), URL.revokeObjectURL(N);
    }, At = (N) => {
      Y.value || JSON.stringify(N) === JSON.stringify(T.value) || (S.value.push(N), S.value.length > 100 && S.value.shift(), lt.value = [], Ut());
    }, Vt = () => {
      K = qt(T.value);
    }, Lt = () => {
      K && At(K), K = null, Ft = qt(T.value);
    };
    let Ft = qt(T.value);
    const Ht = () => {
      Y.value || (At(Ft), Ft = qt(T.value), x());
    }, ee = (N, rt = {}) => ln(N) ? (T.value = qt(N), S.value = [], lt.value = [], Ft = qt(N), rt.markClean && (at.value = JSON.stringify(N)), tt.value = "design", rt.emit && Ut(), ve(y), !0) : (_("load-error", Ie(N)), !1), he = () => {
      const N = S.value.pop();
      N && (lt.value.push(qt(T.value)), T.value = N, Ft = qt(N), Ut(), ve(y));
    }, Kt = () => {
      const N = lt.value.pop();
      N && (S.value.push(qt(T.value)), T.value = N, Ft = qt(N), Ut(), ve(y));
    }, ue = () => !ht.value || window.confirm("当前流程有未保存修改，确定放弃吗？"), ce = () => I?.resize(), xe = () => p.value?.focus({ preventScroll: !0 }), ye = (N) => {
      const rt = N.target;
      if (!["INPUT", "TEXTAREA", "SELECT"].includes(rt.tagName) && (N.key === "Escape" && (k.value = !1, $.value = null, I?.select(null)), !Y.value && ((N.key === "Delete" || N.key === "Backspace") && Z.value && (N.preventDefault(), ot()), (N.ctrlKey || N.metaKey) && N.key.toLowerCase() === "z" && (N.preventDefault(), N.shiftKey ? Kt() : he()), (N.ctrlKey || N.metaKey) && N.key.toLowerCase() === "y" && (N.preventDefault(), Kt()), (N.ctrlKey || N.metaKey) && N.key.toLowerCase() === "c" && (N.preventDefault(), yt()), (N.ctrlKey || N.metaKey) && N.key.toLowerCase() === "v" && (N.preventDefault(), xt()), ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(N.key) && Q.value.length))) {
        N.preventDefault();
        const ft = N.shiftKey ? 10 : 1;
        I?.moveSelection(N.key === "ArrowLeft" ? -ft : N.key === "ArrowRight" ? ft : 0, N.key === "ArrowUp" ? -ft : N.key === "ArrowDown" ? ft : 0);
      }
    }, be = (N) => {
      b.guardBeforeUnload && ht.value && (N.preventDefault(), N.returnValue = "");
    };
    Qn(() => {
      b.modelValue && !ln(b.modelValue) && _("load-error", Ie(b.modelValue)), H.value && (I = new Ti(H.value, { onSelect: d, onZoom: (N) => Pt.value = N, onEditStart: Vt, onEditEnd: Lt }, Y.value), y(), window.addEventListener("resize", ce), window.addEventListener("beforeunload", be));
    });
    const Ut = () => {
      const N = qt(T.value);
      _("update:modelValue", N), _("change", N);
    };
    return sn(() => b.readonly, (N) => {
      I?.setReadOnly(N), N && (k.value = !1, $.value = null);
    }), sn(() => b.modelValue, (N) => {
      N && JSON.stringify(N) !== JSON.stringify(T.value) && ee(N, { markClean: !0 });
    }, { deep: !0 }), sn(ht, (N) => _("dirty-change", N), { immediate: !0 }), Zn(() => {
      window.removeEventListener("resize", ce), window.removeEventListener("beforeunload", be), I?.destroy();
    }), v({ validate: () => Ie(T.value), undo: he, redo: Kt, zoomIn: vt, zoomOut: wt, resetView: h, fitToContent: te, markClean: () => {
      at.value = JSON.stringify(T.value);
    }, focusNode: (N) => T.value.states[N] ? (tt.value = "design", ve(() => I?.focus({ kind: "node", ref: N })), !0) : !1, getSelection: () => Z.value ? JSON.parse(JSON.stringify(Z.value)) : null, getWorkflow: () => qt(T.value), alignSelection: a, distributeSelection: s }), (N, rt) => (It(), Rt("main", {
      ref_key: "designerRoot",
      ref: p,
      class: "designer-shell",
      tabindex: "0",
      onKeydown: ye
    }, [
      it("aside", zi, [
        rt[10] || (rt[10] = it("h1", null, "Workflow", -1)),
        rt[11] || (rt[11] = it("p", { class: "muted" }, "Vue 3 Designer", -1)),
        it("button", {
          type: "button",
          disabled: Y.value,
          class: Je({ active: k.value }),
          onClick: q
        }, re(k.value ? $.value ? "请选择终点" : "请选择起点" : "创建连线"), 11, Ii),
        rt[12] || (rt[12] = it("h2", null, "组件", -1)),
        (It(), Rt(oe, null, Ne(A, (ft) => it("button", {
          key: ft.type,
          type: "button",
          disabled: Y.value,
          onClick: (Et) => E(ft.type)
        }, [
          it("span", {
            class: Je(["node-icon", ft.type])
          }, null, 2),
          ae(re(ft.label), 1)
        ], 8, Ri)), 64))
      ]),
      it("section", Bi, [
        it("header", $i, [
          it("div", null, [
            it("button", {
              type: "button",
              disabled: Y.value,
              onClick: B
            }, "新建", 8, Di),
            it("button", {
              type: "button",
              disabled: Y.value,
              onClick: w
            }, "打开示例", 8, ji),
            it("button", {
              type: "button",
              onClick: Nt
            }, "校验流程"),
            it("button", {
              type: "button",
              onClick: jt
            }, "导出 JSON"),
            it("button", {
              type: "button",
              disabled: Y.value || !et.value,
              onClick: he
            }, "撤销", 8, Vi),
            it("button", {
              type: "button",
              disabled: Y.value || !bt.value,
              onClick: Kt
            }, "重做", 8, Fi),
            it("button", {
              type: "button",
              disabled: Y.value || !Z.value,
              onClick: ot
            }, "删除", 8, Ui),
            it("button", {
              type: "button",
              disabled: Y.value || !ut.value.length,
              onClick: yt
            }, "复制", 8, qi),
            it("button", {
              type: "button",
              disabled: Y.value || !st.value,
              onClick: xt
            }, "粘贴", 8, Hi),
            Q.value.length > 1 ? (It(), Rt(oe, { key: 0 }, [
              it("button", {
                type: "button",
                disabled: Y.value,
                onClick: rt[0] || (rt[0] = (ft) => a("left"))
              }, "左对齐", 8, Yi),
              it("button", {
                type: "button",
                disabled: Y.value,
                onClick: rt[1] || (rt[1] = (ft) => a("top"))
              }, "顶对齐", 8, Xi),
              it("button", {
                type: "button",
                disabled: Y.value || Q.value.length < 3,
                onClick: rt[2] || (rt[2] = (ft) => s("horizontal"))
              }, "水平分布", 8, Ji),
              it("button", {
                type: "button",
                disabled: Y.value || Q.value.length < 3,
                onClick: rt[3] || (rt[3] = (ft) => s("vertical"))
              }, "垂直分布", 8, Gi)
            ], 64)) : Be("", !0)
          ]),
          it("nav", Wi, [
            it("button", {
              type: "button",
              class: Je({ active: tt.value === "design" }),
              onClick: rt[4] || (rt[4] = (ft) => tt.value = "design")
            }, "设计", 2),
            it("button", {
              type: "button",
              class: Je({ active: tt.value === "json" }),
              onClick: Mt
            }, "JSON", 2)
          ]),
          it("button", {
            type: "button",
            class: "about",
            onClick: rt[5] || (rt[5] = (ft) => X.value = !0)
          }, "关于"),
          ht.value ? (It(), Rt("span", Ki, "● 未保存")) : Be("", !0)
        ]),
        it("div", Qi, [
          it("button", {
            type: "button",
            title: "放大",
            onClick: vt
          }, "＋"),
          it("button", {
            type: "button",
            title: "缩小",
            onClick: wt
          }, "－"),
          it("button", {
            type: "button",
            title: "恢复 100%",
            onClick: h
          }, re(Pt.value) + "%", 1),
          it("button", {
            type: "button",
            onClick: te
          }, "适应窗口"),
          rt[13] || (rt[13] = it("span", null, "滚轮缩放，Alt+拖动或中键拖动画布；双击连线增加拐点，双击拐点删除", -1))
        ]),
        Re(it("div", {
          ref_key: "canvasHost",
          ref: H,
          class: "canvas",
          onPointerdown: xe,
          onClick: rt[6] || (rt[6] = $n((ft) => Bt(null), ["self"]))
        }, null, 544), [
          [ti, tt.value === "design"]
        ]),
        tt.value === "json" ? (It(), Rt("section", Zi, [
          Re(it("textarea", {
            "onUpdate:modelValue": rt[7] || (rt[7] = (ft) => kt.value = ft),
            readonly: Y.value,
            spellcheck: "false",
            "aria-label": "流程 JSON"
          }, null, 8, tr), [
            [Ge, kt.value]
          ]),
          it("div", er, [
            C.value ? (It(), Rt("span", nr, re(C.value), 1)) : Be("", !0),
            it("button", {
              type: "button",
              disabled: Y.value,
              onClick: Tt
            }, "应用 JSON", 8, ir)
          ])
        ])) : Be("", !0)
      ]),
      an(wi, {
        workflow: T.value,
        selection: Z.value,
        readonly: Y.value,
        onChange: Ht
      }, null, 8, ["workflow", "selection", "readonly"]),
      an(Ln, {
        open: X.value,
        title: "关于 Aj Workflow Designer",
        onClose: rt[8] || (rt[8] = (ft) => X.value = !1)
      }, {
        default: Tn(() => [...rt[14] || (rt[14] = [
          it("p", null, "基于 Vue 3、TypeScript 与 Raphael 的轻量级流程设计器。", -1),
          it("p", null, "SVG 图形采用命令式适配器管理，不进入 Vue 响应式系统。", -1)
        ])]),
        _: 1
      }, 8, ["open"]),
      an(Ln, {
        open: G.value,
        title: pt.value.length ? `发现 ${pt.value.length} 个问题` : "流程校验通过",
        onClose: rt[9] || (rt[9] = (ft) => G.value = !1)
      }, {
        default: Tn(() => [
          pt.value.length ? (It(), Rt("ol", sr, [
            (It(!0), Rt(oe, null, Ne(pt.value, (ft, Et) => (It(), Rt("li", {
              key: `${ft.code}-${Et}`
            }, [
              it("button", {
                type: "button",
                onClick: ($t) => ct(ft)
              }, re(ft.message), 9, ar)
            ]))), 128))
          ])) : (It(), Rt("p", rr, "流程结构和属性校验通过。"))
        ]),
        _: 1
      }, 8, ["open", "title"])
    ], 544));
  }
});
export {
  lr as WorkflowDesigner,
  Pi as WorkflowValidationError,
  qt as cloneWorkflow,
  lr as default,
  Ie as inspectWorkflow,
  ln as isRenderableWorkflow,
  Ai as validateWorkflow
};
