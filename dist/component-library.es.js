import * as c from "react";
import Zn, { useLayoutEffect as Jn, useState as Qn } from "react";
import * as Gt from "react-dom";
import er from "react-dom";
var ke = { exports: {} }, Ce = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt;
function tr() {
  if (Rt) return Ce;
  Rt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, o, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      i = {};
      for (var a in o)
        a !== "key" && (i[a] = o[a]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return Ce.Fragment = t, Ce.jsx = n, Ce.jsxs = n, Ce;
}
var Pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function nr() {
  return St || (St = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(v) {
      if (v == null) return null;
      if (typeof v == "function")
        return v.$$typeof === k ? null : v.displayName || v.name || null;
      if (typeof v == "string") return v;
      switch (v) {
        case p:
          return "Fragment";
        case w:
          return "Profiler";
        case y:
          return "StrictMode";
        case R:
          return "Suspense";
        case O:
          return "SuspenseList";
        case M:
          return "Activity";
      }
      if (typeof v == "object")
        switch (typeof v.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), v.$$typeof) {
          case g:
            return "Portal";
          case E:
            return (v.displayName || "Context") + ".Provider";
          case b:
            return (v._context.displayName || "Context") + ".Consumer";
          case x:
            var C = v.render;
            return v = v.displayName, v || (v = C.displayName || C.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case S:
            return C = v.displayName || null, C !== null ? C : e(v.type) || "Memo";
          case T:
            C = v._payload, v = v._init;
            try {
              return e(v(C));
            } catch {
            }
        }
      return null;
    }
    function t(v) {
      return "" + v;
    }
    function n(v) {
      try {
        t(v);
        var C = !1;
      } catch {
        C = !0;
      }
      if (C) {
        C = console;
        var _ = C.error, B = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return _.call(
          C,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          B
        ), t(v);
      }
    }
    function r(v) {
      if (v === p) return "<>";
      if (typeof v == "object" && v !== null && v.$$typeof === T)
        return "<...>";
      try {
        var C = e(v);
        return C ? "<" + C + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var v = I.A;
      return v === null ? null : v.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(v) {
      if ($.call(v, "key")) {
        var C = Object.getOwnPropertyDescriptor(v, "key").get;
        if (C && C.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }
    function a(v, C) {
      function _() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          C
        ));
      }
      _.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: _,
        configurable: !0
      });
    }
    function u() {
      var v = e(this.type);
      return D[v] || (D[v] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), v = this.props.ref, v !== void 0 ? v : null;
    }
    function l(v, C, _, B, K, z, Re, ee) {
      return _ = z.ref, v = {
        $$typeof: m,
        type: v,
        key: C,
        props: z,
        _owner: K
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(v, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(v, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(v, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Re
      }), Object.defineProperty(v, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    }
    function f(v, C, _, B, K, z, Re, ee) {
      var W = C.children;
      if (W !== void 0)
        if (B)
          if (F(W)) {
            for (B = 0; B < W.length; B++)
              d(W[B]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(W);
      if ($.call(C, "key")) {
        W = e(v);
        var oe = Object.keys(C).filter(function(Je) {
          return Je !== "key";
        });
        B = 0 < oe.length ? "{key: someKey, " + oe.join(": ..., ") + ": ...}" : "{key: someKey}", j[W + B] || (oe = 0 < oe.length ? "{" + oe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          B,
          W,
          oe,
          W
        ), j[W + B] = !0);
      }
      if (W = null, _ !== void 0 && (n(_), W = "" + _), s(C) && (n(C.key), W = "" + C.key), "key" in C) {
        _ = {};
        for (var Se in C)
          Se !== "key" && (_[Se] = C[Se]);
      } else _ = C;
      return W && a(
        _,
        typeof v == "function" ? v.displayName || v.name || "Unknown" : v
      ), l(
        v,
        W,
        z,
        K,
        o(),
        _,
        Re,
        ee
      );
    }
    function d(v) {
      typeof v == "object" && v !== null && v.$$typeof === m && v._store && (v._store.validated = 1);
    }
    var h = Zn, m = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), E = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), M = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), I = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, F = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(v) {
        return v();
      }
    };
    var H, D = {}, L = h.react_stack_bottom_frame.bind(
      h,
      i
    )(), A = N(r(i)), j = {};
    Pe.Fragment = p, Pe.jsx = function(v, C, _, B, K) {
      var z = 1e4 > I.recentlyCreatedOwnerStacks++;
      return f(
        v,
        C,
        _,
        !1,
        B,
        K,
        z ? Error("react-stack-top-frame") : L,
        z ? N(r(v)) : A
      );
    }, Pe.jsxs = function(v, C, _, B, K) {
      var z = 1e4 > I.recentlyCreatedOwnerStacks++;
      return f(
        v,
        C,
        _,
        !0,
        B,
        K,
        z ? Error("react-stack-top-frame") : L,
        z ? N(r(v)) : A
      );
    };
  })()), Pe;
}
var Ct;
function rr() {
  return Ct || (Ct = 1, process.env.NODE_ENV === "production" ? ke.exports = tr() : ke.exports = nr()), ke.exports;
}
var P = rr();
function se(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function Pt(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Zt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Pt(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Pt(e[o], null);
        }
      };
  };
}
function ue(...e) {
  return c.useCallback(Zt(...e), e);
}
function Jt(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = c.createContext(s), u = n.length;
    n = [...n, s];
    const l = (d) => {
      const { scope: h, children: m, ...g } = d, p = h?.[e]?.[u] || a, y = c.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ P.jsx(p.Provider, { value: y, children: m });
    };
    l.displayName = i + "Provider";
    function f(d, h) {
      const m = h?.[e]?.[u] || a, g = c.useContext(m);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [l, f];
  }
  const o = () => {
    const i = n.map((s) => c.createContext(s));
    return function(a) {
      const u = a?.[e] || i;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: u } }),
        [a, u]
      );
    };
  };
  return o.scopeName = e, [r, or(o, ...t)];
}
function or(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: u, scopeName: l }) => {
        const d = u(i)[`__scope${l}`];
        return { ...a, ...d };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  const t = /* @__PURE__ */ ir(e), n = c.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = c.Children.toArray(i), u = a.find(ar);
    if (u) {
      const l = u.props.children, f = a.map((d) => d === u ? c.Children.count(l) > 1 ? c.Children.only(null) : c.isValidElement(l) ? l.props.children : null : d);
      return /* @__PURE__ */ P.jsx(t, { ...s, ref: o, children: c.isValidElement(l) ? c.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ P.jsx(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function ir(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (c.isValidElement(o)) {
      const s = lr(o), a = cr(i, o.props);
      return o.type !== c.Fragment && (a.ref = r ? Zt(r, s) : s), c.cloneElement(o, a);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var sr = Symbol("radix.slottable");
function ar(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === sr;
}
function cr(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      const u = i(...a);
      return o(...a), u;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function lr(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ur = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], re = ur.reduce((e, t) => {
  const n = /* @__PURE__ */ Qt(`Primitive.${t}`), r = c.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, u = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ P.jsx(u, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function fr(e, t) {
  e && Gt.flushSync(() => e.dispatchEvent(t));
}
function ye(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => t.current?.(...n), []);
}
function dr(e, t = globalThis?.document) {
  const n = ye(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var pr = "DismissableLayer", ct = "dismissableLayer.update", mr = "dismissableLayer.pointerDownOutside", hr = "dismissableLayer.focusOutside", At, en = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), tn = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...u
    } = e, l = c.useContext(en), [f, d] = c.useState(null), h = f?.ownerDocument ?? globalThis?.document, [, m] = c.useState({}), g = ue(t, (S) => d(S)), p = Array.from(l.layers), [y] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), w = p.indexOf(y), b = f ? p.indexOf(f) : -1, E = l.layersWithOutsidePointerEventsDisabled.size > 0, x = b >= w, R = yr((S) => {
      const T = S.target, M = [...l.branches].some((k) => k.contains(T));
      !x || M || (o?.(S), s?.(S), S.defaultPrevented || a?.());
    }, h), O = wr((S) => {
      const T = S.target;
      [...l.branches].some((k) => k.contains(T)) || (i?.(S), s?.(S), S.defaultPrevented || a?.());
    }, h);
    return dr((S) => {
      b === l.layers.size - 1 && (r?.(S), !S.defaultPrevented && a && (S.preventDefault(), a()));
    }, h), c.useEffect(() => {
      if (f)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (At = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(f)), l.layers.add(f), Ot(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = At);
        };
    }, [f, h, n, l]), c.useEffect(() => () => {
      f && (l.layers.delete(f), l.layersWithOutsidePointerEventsDisabled.delete(f), Ot());
    }, [f, l]), c.useEffect(() => {
      const S = () => m({});
      return document.addEventListener(ct, S), () => document.removeEventListener(ct, S);
    }, []), /* @__PURE__ */ P.jsx(
      re.div,
      {
        ...u,
        ref: g,
        style: {
          pointerEvents: E ? x ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: se(e.onFocusCapture, O.onFocusCapture),
        onBlurCapture: se(e.onBlurCapture, O.onBlurCapture),
        onPointerDownCapture: se(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
tn.displayName = pr;
var vr = "DismissableLayerBranch", gr = c.forwardRef((e, t) => {
  const n = c.useContext(en), r = c.useRef(null), o = ue(t, r);
  return c.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ P.jsx(re.div, { ...e, ref: o });
});
gr.displayName = vr;
function yr(e, t = globalThis?.document) {
  const n = ye(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let u = function() {
          nn(
            mr,
            n,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, { once: !0 })) : u();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function wr(e, t = globalThis?.document) {
  const n = ye(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && nn(hr, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ot() {
  const e = new CustomEvent(ct);
  document.dispatchEvent(e);
}
function nn(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? fr(o, i) : o.dispatchEvent(i);
}
var Qe = 0;
function br() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Tt()), document.body.insertAdjacentElement("beforeend", e[1] ?? Tt()), Qe++, () => {
      Qe === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Qe--;
    };
  }, []);
}
function Tt() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var et = "focusScope.autoFocusOnMount", tt = "focusScope.autoFocusOnUnmount", Nt = { bubbles: !1, cancelable: !0 }, xr = "FocusScope", rn = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, u] = c.useState(null), l = ye(o), f = ye(i), d = c.useRef(null), h = ue(t, (p) => u(p)), m = c.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  c.useEffect(() => {
    if (r) {
      let p = function(E) {
        if (m.paused || !a) return;
        const x = E.target;
        a.contains(x) ? d.current = x : ie(d.current, { select: !0 });
      }, y = function(E) {
        if (m.paused || !a) return;
        const x = E.relatedTarget;
        x !== null && (a.contains(x) || ie(d.current, { select: !0 }));
      }, w = function(E) {
        if (document.activeElement === document.body)
          for (const R of E)
            R.removedNodes.length > 0 && ie(a);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", y);
      const b = new MutationObserver(w);
      return a && b.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", y), b.disconnect();
      };
    }
  }, [r, a, m.paused]), c.useEffect(() => {
    if (a) {
      kt.add(m);
      const p = document.activeElement;
      if (!a.contains(p)) {
        const w = new CustomEvent(et, Nt);
        a.addEventListener(et, l), a.dispatchEvent(w), w.defaultPrevented || (Er(Ar(on(a)), { select: !0 }), document.activeElement === p && ie(a));
      }
      return () => {
        a.removeEventListener(et, l), setTimeout(() => {
          const w = new CustomEvent(tt, Nt);
          a.addEventListener(tt, f), a.dispatchEvent(w), w.defaultPrevented || ie(p ?? document.body, { select: !0 }), a.removeEventListener(tt, f), kt.remove(m);
        }, 0);
      };
    }
  }, [a, l, f, m]);
  const g = c.useCallback(
    (p) => {
      if (!n && !r || m.paused) return;
      const y = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, w = document.activeElement;
      if (y && w) {
        const b = p.currentTarget, [E, x] = Rr(b);
        E && x ? !p.shiftKey && w === x ? (p.preventDefault(), n && ie(E, { select: !0 })) : p.shiftKey && w === E && (p.preventDefault(), n && ie(x, { select: !0 })) : w === b && p.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ P.jsx(re.div, { tabIndex: -1, ...s, ref: h, onKeyDown: g });
});
rn.displayName = xr;
function Er(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ie(r, { select: t }), document.activeElement !== n) return;
}
function Rr(e) {
  const t = on(e), n = _t(t, e), r = _t(t.reverse(), e);
  return [n, r];
}
function on(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function _t(e, t) {
  for (const n of e)
    if (!Sr(n, { upTo: t })) return n;
}
function Sr(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Cr(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ie(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Cr(e) && t && e.select();
  }
}
var kt = Pr();
function Pr() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Mt(e, t), e.unshift(t);
    },
    remove(t) {
      e = Mt(e, t), e[0]?.resume();
    }
  };
}
function Mt(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ar(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ae = globalThis?.document ? c.useLayoutEffect : () => {
}, Or = c[" useId ".trim().toString()] || (() => {
}), Tr = 0;
function Nr(e) {
  const [t, n] = c.useState(Or());
  return ae(() => {
    n((r) => r ?? String(Tr++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const _r = ["top", "right", "bottom", "left"], ce = Math.min, V = Math.max, He = Math.round, Me = Math.floor, Z = (e) => ({
  x: e,
  y: e
}), kr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Mr = {
  start: "end",
  end: "start"
};
function lt(e, t, n) {
  return V(e, ce(t, n));
}
function te(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ne(e) {
  return e.split("-")[0];
}
function xe(e) {
  return e.split("-")[1];
}
function pt(e) {
  return e === "x" ? "y" : "x";
}
function mt(e) {
  return e === "y" ? "height" : "width";
}
const Dr = /* @__PURE__ */ new Set(["top", "bottom"]);
function G(e) {
  return Dr.has(ne(e)) ? "y" : "x";
}
function ht(e) {
  return pt(G(e));
}
function Lr(e, t, n) {
  n === void 0 && (n = !1);
  const r = xe(e), o = ht(e), i = mt(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Ve(s)), [s, Ve(s)];
}
function Fr(e) {
  const t = Ve(e);
  return [ut(e), t, ut(t)];
}
function ut(e) {
  return e.replace(/start|end/g, (t) => Mr[t]);
}
const Dt = ["left", "right"], Lt = ["right", "left"], Ir = ["top", "bottom"], jr = ["bottom", "top"];
function Wr(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Lt : Dt : t ? Dt : Lt;
    case "left":
    case "right":
      return t ? Ir : jr;
    default:
      return [];
  }
}
function $r(e, t, n, r) {
  const o = xe(e);
  let i = Wr(ne(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ut)))), i;
}
function Ve(e) {
  return e.replace(/left|right|bottom|top/g, (t) => kr[t]);
}
function Br(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function sn(e) {
  return typeof e != "number" ? Br(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ue(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Ft(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = G(t), s = ht(t), a = mt(s), u = ne(t), l = i === "y", f = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, h = r[a] / 2 - o[a] / 2;
  let m;
  switch (u) {
    case "top":
      m = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (xe(t)) {
    case "start":
      m[s] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      m[s] += h * (n && l ? -1 : 1);
      break;
  }
  return m;
}
const Hr = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: d
  } = Ft(l, r, u), h = r, m = {}, g = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: y,
      fn: w
    } = a[p], {
      x: b,
      y: E,
      data: x,
      reset: R
    } = await w({
      x: f,
      y: d,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: m,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = b ?? f, d = E ?? d, m = {
      ...m,
      [y]: {
        ...m[y],
        ...x
      }
    }, R && g <= 50 && (g++, typeof R == "object" && (R.placement && (h = R.placement), R.rects && (l = R.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : R.rects), {
      x: f,
      y: d
    } = Ft(l, h, u)), p = -1);
  }
  return {
    x: f,
    y: d,
    placement: h,
    strategy: o,
    middlewareData: m
  };
};
async function Ae(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: u
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: h = !1,
    padding: m = 0
  } = te(t, e), g = sn(m), y = a[h ? d === "floating" ? "reference" : "floating" : d], w = Ue(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: f,
    strategy: u
  })), b = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), x = await (i.isElement == null ? void 0 : i.isElement(E)) ? await (i.getScale == null ? void 0 : i.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = Ue(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: E,
    strategy: u
  }) : b);
  return {
    top: (w.top - R.top + g.top) / x.y,
    bottom: (R.bottom - w.bottom + g.bottom) / x.y,
    left: (w.left - R.left + g.left) / x.x,
    right: (R.right - w.right + g.right) / x.x
  };
}
const Vr = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: u
    } = t, {
      element: l,
      padding: f = 0
    } = te(e, t) || {};
    if (l == null)
      return {};
    const d = sn(f), h = {
      x: n,
      y: r
    }, m = ht(o), g = mt(m), p = await s.getDimensions(l), y = m === "y", w = y ? "top" : "left", b = y ? "bottom" : "right", E = y ? "clientHeight" : "clientWidth", x = i.reference[g] + i.reference[m] - h[m] - i.floating[g], R = h[m] - i.reference[m], O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let S = O ? O[E] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(O))) && (S = a.floating[E] || i.floating[g]);
    const T = x / 2 - R / 2, M = S / 2 - p[g] / 2 - 1, k = ce(d[w], M), I = ce(d[b], M), $ = k, F = S - p[g] - I, N = S / 2 - p[g] / 2 + T, H = lt($, N, F), D = !u.arrow && xe(o) != null && N !== H && i.reference[g] / 2 - (N < $ ? k : I) - p[g] / 2 < 0, L = D ? N < $ ? N - $ : N - F : 0;
    return {
      [m]: h[m] + L,
      data: {
        [m]: H,
        centerOffset: N - H - L,
        ...D && {
          alignmentOffset: L
        }
      },
      reset: D
    };
  }
}), Ur = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: u,
        elements: l
      } = t, {
        mainAxis: f = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: p = !0,
        ...y
      } = te(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = ne(o), b = G(a), E = ne(a) === a, x = await (u.isRTL == null ? void 0 : u.isRTL(l.floating)), R = h || (E || !p ? [Ve(a)] : Fr(a)), O = g !== "none";
      !h && O && R.push(...$r(a, p, g, x));
      const S = [a, ...R], T = await Ae(t, y), M = [];
      let k = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (f && M.push(T[w]), d) {
        const N = Lr(o, s, x);
        M.push(T[N[0]], T[N[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: M
      }], !M.every((N) => N <= 0)) {
        var I, $;
        const N = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, H = S[N];
        if (H && (!(d === "alignment" ? b !== G(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        k.every((A) => G(A.placement) === b ? A.overflows[0] > 0 : !0)))
          return {
            data: {
              index: N,
              overflows: k
            },
            reset: {
              placement: H
            }
          };
        let D = ($ = k.filter((L) => L.overflows[0] <= 0).sort((L, A) => L.overflows[1] - A.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!D)
          switch (m) {
            case "bestFit": {
              var F;
              const L = (F = k.filter((A) => {
                if (O) {
                  const j = G(A.placement);
                  return j === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((j) => j > 0).reduce((j, v) => j + v, 0)]).sort((A, j) => A[1] - j[1])[0]) == null ? void 0 : F[0];
              L && (D = L);
              break;
            }
            case "initialPlacement":
              D = a;
              break;
          }
        if (o !== D)
          return {
            reset: {
              placement: D
            }
          };
      }
      return {};
    }
  };
};
function It(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function jt(e) {
  return _r.some((t) => e[t] >= 0);
}
const zr = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = te(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await Ae(t, {
            ...o,
            elementContext: "reference"
          }), s = It(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: jt(s)
            }
          };
        }
        case "escaped": {
          const i = await Ae(t, {
            ...o,
            altBoundary: !0
          }), s = It(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: jt(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, an = /* @__PURE__ */ new Set(["left", "top"]);
async function Yr(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = ne(n), a = xe(n), u = G(n) === "y", l = an.has(s) ? -1 : 1, f = i && u ? -1 : 1, d = te(t, e);
  let {
    mainAxis: h,
    crossAxis: m,
    alignmentAxis: g
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof g == "number" && (m = a === "end" ? g * -1 : g), u ? {
    x: m * f,
    y: h * l
  } : {
    x: h * l,
    y: m * f
  };
}
const Xr = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = t, u = await Yr(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + u.x,
        y: i + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, Kr = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (y) => {
            let {
              x: w,
              y: b
            } = y;
            return {
              x: w,
              y: b
            };
          }
        },
        ...u
      } = te(e, t), l = {
        x: n,
        y: r
      }, f = await Ae(t, u), d = G(ne(o)), h = pt(d);
      let m = l[h], g = l[d];
      if (i) {
        const y = h === "y" ? "top" : "left", w = h === "y" ? "bottom" : "right", b = m + f[y], E = m - f[w];
        m = lt(b, m, E);
      }
      if (s) {
        const y = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", b = g + f[y], E = g - f[w];
        g = lt(b, g, E);
      }
      const p = a.fn({
        ...t,
        [h]: m,
        [d]: g
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r,
          enabled: {
            [h]: i,
            [d]: s
          }
        }
      };
    }
  };
}, qr = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: u = !0,
        crossAxis: l = !0
      } = te(e, t), f = {
        x: n,
        y: r
      }, d = G(o), h = pt(d);
      let m = f[h], g = f[d];
      const p = te(a, t), y = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (u) {
        const E = h === "y" ? "height" : "width", x = i.reference[h] - i.floating[E] + y.mainAxis, R = i.reference[h] + i.reference[E] - y.mainAxis;
        m < x ? m = x : m > R && (m = R);
      }
      if (l) {
        var w, b;
        const E = h === "y" ? "width" : "height", x = an.has(ne(o)), R = i.reference[d] - i.floating[E] + (x && ((w = s.offset) == null ? void 0 : w[d]) || 0) + (x ? 0 : y.crossAxis), O = i.reference[d] + i.reference[E] + (x ? 0 : ((b = s.offset) == null ? void 0 : b[d]) || 0) - (x ? y.crossAxis : 0);
        g < R ? g = R : g > O && (g = O);
      }
      return {
        [h]: m,
        [d]: g
      };
    }
  };
}, Gr = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: a
      } = t, {
        apply: u = () => {
        },
        ...l
      } = te(e, t), f = await Ae(t, l), d = ne(o), h = xe(o), m = G(o) === "y", {
        width: g,
        height: p
      } = i.floating;
      let y, w;
      d === "top" || d === "bottom" ? (y = d, w = h === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (w = d, y = h === "end" ? "top" : "bottom");
      const b = p - f.top - f.bottom, E = g - f.left - f.right, x = ce(p - f[y], b), R = ce(g - f[w], E), O = !t.middlewareData.shift;
      let S = x, T = R;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = E), (r = t.middlewareData.shift) != null && r.enabled.y && (S = b), O && !h) {
        const k = V(f.left, 0), I = V(f.right, 0), $ = V(f.top, 0), F = V(f.bottom, 0);
        m ? T = g - 2 * (k !== 0 || I !== 0 ? k + I : V(f.left, f.right)) : S = p - 2 * ($ !== 0 || F !== 0 ? $ + F : V(f.top, f.bottom));
      }
      await u({
        ...t,
        availableWidth: T,
        availableHeight: S
      });
      const M = await s.getDimensions(a.floating);
      return g !== M.width || p !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ye() {
  return typeof window < "u";
}
function Ee(e) {
  return cn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function U(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Q(e) {
  var t;
  return (t = (cn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function cn(e) {
  return Ye() ? e instanceof Node || e instanceof U(e).Node : !1;
}
function Y(e) {
  return Ye() ? e instanceof Element || e instanceof U(e).Element : !1;
}
function J(e) {
  return Ye() ? e instanceof HTMLElement || e instanceof U(e).HTMLElement : !1;
}
function Wt(e) {
  return !Ye() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof U(e).ShadowRoot;
}
const Zr = /* @__PURE__ */ new Set(["inline", "contents"]);
function Te(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = X(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Zr.has(o);
}
const Jr = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Qr(e) {
  return Jr.has(Ee(e));
}
const eo = [":popover-open", ":modal"];
function Xe(e) {
  return eo.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const to = ["transform", "translate", "scale", "rotate", "perspective"], no = ["transform", "translate", "scale", "rotate", "perspective", "filter"], ro = ["paint", "layout", "strict", "content"];
function vt(e) {
  const t = gt(), n = Y(e) ? X(e) : e;
  return to.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || no.some((r) => (n.willChange || "").includes(r)) || ro.some((r) => (n.contain || "").includes(r));
}
function oo(e) {
  let t = le(e);
  for (; J(t) && !we(t); ) {
    if (vt(t))
      return t;
    if (Xe(t))
      return null;
    t = le(t);
  }
  return null;
}
function gt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const io = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function we(e) {
  return io.has(Ee(e));
}
function X(e) {
  return U(e).getComputedStyle(e);
}
function Ke(e) {
  return Y(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function le(e) {
  if (Ee(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Wt(e) && e.host || // Fallback.
    Q(e)
  );
  return Wt(t) ? t.host : t;
}
function ln(e) {
  const t = le(e);
  return we(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : J(t) && Te(t) ? t : ln(t);
}
function Oe(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ln(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = U(o);
  if (i) {
    const a = ft(s);
    return t.concat(s, s.visualViewport || [], Te(o) ? o : [], a && n ? Oe(a) : []);
  }
  return t.concat(o, Oe(o, [], n));
}
function ft(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function un(e) {
  const t = X(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = J(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = He(n) !== i || He(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function yt(e) {
  return Y(e) ? e : e.contextElement;
}
function ve(e) {
  const t = yt(e);
  if (!J(t))
    return Z(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = un(t);
  let s = (i ? He(n.width) : n.width) / r, a = (i ? He(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const so = /* @__PURE__ */ Z(0);
function fn(e) {
  const t = U(e);
  return !gt() || !t.visualViewport ? so : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ao(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== U(e) ? !1 : t;
}
function de(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = yt(e);
  let s = Z(1);
  t && (r ? Y(r) && (s = ve(r)) : s = ve(e));
  const a = ao(i, n, r) ? fn(i) : Z(0);
  let u = (o.left + a.x) / s.x, l = (o.top + a.y) / s.y, f = o.width / s.x, d = o.height / s.y;
  if (i) {
    const h = U(i), m = r && Y(r) ? U(r) : r;
    let g = h, p = ft(g);
    for (; p && r && m !== g; ) {
      const y = ve(p), w = p.getBoundingClientRect(), b = X(p), E = w.left + (p.clientLeft + parseFloat(b.paddingLeft)) * y.x, x = w.top + (p.clientTop + parseFloat(b.paddingTop)) * y.y;
      u *= y.x, l *= y.y, f *= y.x, d *= y.y, u += E, l += x, g = U(p), p = ft(g);
    }
  }
  return Ue({
    width: f,
    height: d,
    x: u,
    y: l
  });
}
function qe(e, t) {
  const n = Ke(e).scrollLeft;
  return t ? t.left + n : de(Q(e)).left + n;
}
function dn(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - qe(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function co(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Q(r), a = t ? Xe(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Z(1);
  const f = Z(0), d = J(r);
  if ((d || !d && !i) && ((Ee(r) !== "body" || Te(s)) && (u = Ke(r)), J(r))) {
    const m = de(r);
    l = ve(r), f.x = m.x + r.clientLeft, f.y = m.y + r.clientTop;
  }
  const h = s && !d && !i ? dn(s, u) : Z(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - u.scrollLeft * l.x + f.x + h.x,
    y: n.y * l.y - u.scrollTop * l.y + f.y + h.y
  };
}
function lo(e) {
  return Array.from(e.getClientRects());
}
function uo(e) {
  const t = Q(e), n = Ke(e), r = e.ownerDocument.body, o = V(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = V(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + qe(e);
  const a = -n.scrollTop;
  return X(r).direction === "rtl" && (s += V(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const $t = 25;
function fo(e, t) {
  const n = U(e), r = Q(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, u = 0;
  if (o) {
    i = o.width, s = o.height;
    const f = gt();
    (!f || f && t === "fixed") && (a = o.offsetLeft, u = o.offsetTop);
  }
  const l = qe(r);
  if (l <= 0) {
    const f = r.ownerDocument, d = f.body, h = getComputedStyle(d), m = f.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, g = Math.abs(r.clientWidth - d.clientWidth - m);
    g <= $t && (i -= g);
  } else l <= $t && (i += l);
  return {
    width: i,
    height: s,
    x: a,
    y: u
  };
}
const po = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function mo(e, t) {
  const n = de(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = J(e) ? ve(e) : Z(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, u = o * i.x, l = r * i.y;
  return {
    width: s,
    height: a,
    x: u,
    y: l
  };
}
function Bt(e, t, n) {
  let r;
  if (t === "viewport")
    r = fo(e, n);
  else if (t === "document")
    r = uo(Q(e));
  else if (Y(t))
    r = mo(t, n);
  else {
    const o = fn(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ue(r);
}
function pn(e, t) {
  const n = le(e);
  return n === t || !Y(n) || we(n) ? !1 : X(n).position === "fixed" || pn(n, t);
}
function ho(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Oe(e, [], !1).filter((a) => Y(a) && Ee(a) !== "body"), o = null;
  const i = X(e).position === "fixed";
  let s = i ? le(e) : e;
  for (; Y(s) && !we(s); ) {
    const a = X(s), u = vt(s);
    !u && a.position === "fixed" && (o = null), (i ? !u && !o : !u && a.position === "static" && !!o && po.has(o.position) || Te(s) && !u && pn(e, s)) ? r = r.filter((f) => f !== s) : o = a, s = le(s);
  }
  return t.set(e, r), r;
}
function vo(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Xe(t) ? [] : ho(t, this._c) : [].concat(n), r], a = s[0], u = s.reduce((l, f) => {
    const d = Bt(t, f, o);
    return l.top = V(d.top, l.top), l.right = ce(d.right, l.right), l.bottom = ce(d.bottom, l.bottom), l.left = V(d.left, l.left), l;
  }, Bt(t, a, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function go(e) {
  const {
    width: t,
    height: n
  } = un(e);
  return {
    width: t,
    height: n
  };
}
function yo(e, t, n) {
  const r = J(t), o = Q(t), i = n === "fixed", s = de(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Z(0);
  function l() {
    u.x = qe(o);
  }
  if (r || !r && !i)
    if ((Ee(t) !== "body" || Te(o)) && (a = Ke(t)), r) {
      const m = de(t, !0, i, t);
      u.x = m.x + t.clientLeft, u.y = m.y + t.clientTop;
    } else o && l();
  i && !r && o && l();
  const f = o && !r && !i ? dn(o, a) : Z(0), d = s.left + a.scrollLeft - u.x - f.x, h = s.top + a.scrollTop - u.y - f.y;
  return {
    x: d,
    y: h,
    width: s.width,
    height: s.height
  };
}
function nt(e) {
  return X(e).position === "static";
}
function Ht(e, t) {
  if (!J(e) || X(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Q(e) === n && (n = n.ownerDocument.body), n;
}
function mn(e, t) {
  const n = U(e);
  if (Xe(e))
    return n;
  if (!J(e)) {
    let o = le(e);
    for (; o && !we(o); ) {
      if (Y(o) && !nt(o))
        return o;
      o = le(o);
    }
    return n;
  }
  let r = Ht(e, t);
  for (; r && Qr(r) && nt(r); )
    r = Ht(r, t);
  return r && we(r) && nt(r) && !vt(r) ? n : r || oo(e) || n;
}
const wo = async function(e) {
  const t = this.getOffsetParent || mn, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: yo(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function bo(e) {
  return X(e).direction === "rtl";
}
const xo = {
  convertOffsetParentRelativeRectToViewportRelativeRect: co,
  getDocumentElement: Q,
  getClippingRect: vo,
  getOffsetParent: mn,
  getElementRects: wo,
  getClientRects: lo,
  getDimensions: go,
  getScale: ve,
  isElement: Y,
  isRTL: bo
};
function hn(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Eo(e, t) {
  let n = null, r;
  const o = Q(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, u) {
    a === void 0 && (a = !1), u === void 0 && (u = 1), i();
    const l = e.getBoundingClientRect(), {
      left: f,
      top: d,
      width: h,
      height: m
    } = l;
    if (a || t(), !h || !m)
      return;
    const g = Me(d), p = Me(o.clientWidth - (f + h)), y = Me(o.clientHeight - (d + m)), w = Me(f), E = {
      rootMargin: -g + "px " + -p + "px " + -y + "px " + -w + "px",
      threshold: V(0, ce(1, u)) || 1
    };
    let x = !0;
    function R(O) {
      const S = O[0].intersectionRatio;
      if (S !== u) {
        if (!x)
          return s();
        S ? s(!1, S) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !hn(l, e.getBoundingClientRect()) && s(), x = !1;
    }
    try {
      n = new IntersectionObserver(R, {
        ...E,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(R, E);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Ro(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, l = yt(e), f = o || i ? [...l ? Oe(l) : [], ...Oe(t)] : [];
  f.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const d = l && a ? Eo(l, n) : null;
  let h = -1, m = null;
  s && (m = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === l && m && (m.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var E;
      (E = m) == null || E.observe(t);
    })), n();
  }), l && !u && m.observe(l), m.observe(t));
  let g, p = u ? de(e) : null;
  u && y();
  function y() {
    const w = de(e);
    p && !hn(p, w) && n(), p = w, g = requestAnimationFrame(y);
  }
  return n(), () => {
    var w;
    f.forEach((b) => {
      o && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n);
    }), d?.(), (w = m) == null || w.disconnect(), m = null, u && cancelAnimationFrame(g);
  };
}
const So = Xr, Co = Kr, Po = Ur, Ao = Gr, Oo = zr, Vt = Vr, To = qr, No = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: xo,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Hr(e, t, {
    ...o,
    platform: i
  });
};
var _o = typeof document < "u", ko = function() {
}, We = _o ? Jn : ko;
function ze(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!ze(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !ze(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function vn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ut(e, t) {
  const n = vn(e);
  return Math.round(t * n) / n;
}
function rt(e) {
  const t = c.useRef(e);
  return We(() => {
    t.current = e;
  }), t;
}
function Mo(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: u,
    open: l
  } = e, [f, d] = c.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, m] = c.useState(r);
  ze(h, r) || m(r);
  const [g, p] = c.useState(null), [y, w] = c.useState(null), b = c.useCallback((A) => {
    A !== O.current && (O.current = A, p(A));
  }, []), E = c.useCallback((A) => {
    A !== S.current && (S.current = A, w(A));
  }, []), x = i || g, R = s || y, O = c.useRef(null), S = c.useRef(null), T = c.useRef(f), M = u != null, k = rt(u), I = rt(o), $ = rt(l), F = c.useCallback(() => {
    if (!O.current || !S.current)
      return;
    const A = {
      placement: t,
      strategy: n,
      middleware: h
    };
    I.current && (A.platform = I.current), No(O.current, S.current, A).then((j) => {
      const v = {
        ...j,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: $.current !== !1
      };
      N.current && !ze(T.current, v) && (T.current = v, Gt.flushSync(() => {
        d(v);
      }));
    });
  }, [h, t, n, I, $]);
  We(() => {
    l === !1 && T.current.isPositioned && (T.current.isPositioned = !1, d((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [l]);
  const N = c.useRef(!1);
  We(() => (N.current = !0, () => {
    N.current = !1;
  }), []), We(() => {
    if (x && (O.current = x), R && (S.current = R), x && R) {
      if (k.current)
        return k.current(x, R, F);
      F();
    }
  }, [x, R, F, k, M]);
  const H = c.useMemo(() => ({
    reference: O,
    floating: S,
    setReference: b,
    setFloating: E
  }), [b, E]), D = c.useMemo(() => ({
    reference: x,
    floating: R
  }), [x, R]), L = c.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return A;
    const j = Ut(D.floating, f.x), v = Ut(D.floating, f.y);
    return a ? {
      ...A,
      transform: "translate(" + j + "px, " + v + "px)",
      ...vn(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: j,
      top: v
    };
  }, [n, a, D.floating, f.x, f.y]);
  return c.useMemo(() => ({
    ...f,
    update: F,
    refs: H,
    elements: D,
    floatingStyles: L
  }), [f, F, H, D, L]);
}
const Do = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Vt({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Vt({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Lo = (e, t) => ({
  ...So(e),
  options: [e, t]
}), Fo = (e, t) => ({
  ...Co(e),
  options: [e, t]
}), Io = (e, t) => ({
  ...To(e),
  options: [e, t]
}), jo = (e, t) => ({
  ...Po(e),
  options: [e, t]
}), Wo = (e, t) => ({
  ...Ao(e),
  options: [e, t]
}), $o = (e, t) => ({
  ...Oo(e),
  options: [e, t]
}), Bo = (e, t) => ({
  ...Do(e),
  options: [e, t]
});
var Ho = "Arrow", gn = c.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ P.jsx(
    re.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ P.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
gn.displayName = Ho;
var Vo = gn;
function Uo(e) {
  const [t, n] = c.useState(void 0);
  return ae(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const u = i.borderBoxSize, l = Array.isArray(u) ? u[0] : u;
          s = l.inlineSize, a = l.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({ width: s, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var wt = "Popper", [yn, wn] = Jt(wt), [zo, bn] = yn(wt), xn = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = c.useState(null);
  return /* @__PURE__ */ P.jsx(zo, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
xn.displayName = wt;
var En = "PopperAnchor", Rn = c.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = bn(En, n), s = c.useRef(null), a = ue(t, s), u = c.useRef(null);
    return c.useEffect(() => {
      const l = u.current;
      u.current = r?.current || s.current, l !== u.current && i.onAnchorChange(u.current);
    }), r ? null : /* @__PURE__ */ P.jsx(re.div, { ...o, ref: a });
  }
);
Rn.displayName = En;
var bt = "PopperContent", [Yo, Xo] = yn(bt), Sn = c.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: u = !0,
      collisionBoundary: l = [],
      collisionPadding: f = 0,
      sticky: d = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: g,
      ...p
    } = e, y = bn(bt, n), [w, b] = c.useState(null), E = ue(t, (ee) => b(ee)), [x, R] = c.useState(null), O = Uo(x), S = O?.width ?? 0, T = O?.height ?? 0, M = r + (i !== "center" ? "-" + i : ""), k = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, I = Array.isArray(l) ? l : [l], $ = I.length > 0, F = {
      padding: k,
      boundary: I.filter(qo),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: $
    }, { refs: N, floatingStyles: H, placement: D, isPositioned: L, middlewareData: A } = Mo({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: M,
      whileElementsMounted: (...ee) => Ro(...ee, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        Lo({ mainAxis: o + T, alignmentAxis: s }),
        u && Fo({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Io() : void 0,
          ...F
        }),
        u && jo({ ...F }),
        Wo({
          ...F,
          apply: ({ elements: ee, rects: W, availableWidth: oe, availableHeight: Se }) => {
            const { width: Je, height: Gn } = W.reference, _e = ee.floating.style;
            _e.setProperty("--radix-popper-available-width", `${oe}px`), _e.setProperty("--radix-popper-available-height", `${Se}px`), _e.setProperty("--radix-popper-anchor-width", `${Je}px`), _e.setProperty("--radix-popper-anchor-height", `${Gn}px`);
          }
        }),
        x && Bo({ element: x, padding: a }),
        Go({ arrowWidth: S, arrowHeight: T }),
        h && $o({ strategy: "referenceHidden", ...F })
      ]
    }), [j, v] = An(D), C = ye(g);
    ae(() => {
      L && C?.();
    }, [L, C]);
    const _ = A.arrow?.x, B = A.arrow?.y, K = A.arrow?.centerOffset !== 0, [z, Re] = c.useState();
    return ae(() => {
      w && Re(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ P.jsx(
      "div",
      {
        ref: N.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: L ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: z,
          "--radix-popper-transform-origin": [
            A.transformOrigin?.x,
            A.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...A.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ P.jsx(
          Yo,
          {
            scope: n,
            placedSide: j,
            onArrowChange: R,
            arrowX: _,
            arrowY: B,
            shouldHideArrow: K,
            children: /* @__PURE__ */ P.jsx(
              re.div,
              {
                "data-side": j,
                "data-align": v,
                ...p,
                ref: E,
                style: {
                  ...p.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: L ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Sn.displayName = bt;
var Cn = "PopperArrow", Ko = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Pn = c.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = Xo(Cn, r), s = Ko[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ P.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ P.jsx(
          Vo,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Pn.displayName = Cn;
function qo(e) {
  return e !== null;
}
var Go = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, s = o.arrow?.centerOffset !== 0, a = s ? 0 : e.arrowWidth, u = s ? 0 : e.arrowHeight, [l, f] = An(n), d = { start: "0%", center: "50%", end: "100%" }[f], h = (o.arrow?.x ?? 0) + a / 2, m = (o.arrow?.y ?? 0) + u / 2;
    let g = "", p = "";
    return l === "bottom" ? (g = s ? d : `${h}px`, p = `${-u}px`) : l === "top" ? (g = s ? d : `${h}px`, p = `${r.floating.height + u}px`) : l === "right" ? (g = `${-u}px`, p = s ? d : `${m}px`) : l === "left" && (g = `${r.floating.width + u}px`, p = s ? d : `${m}px`), { data: { x: g, y: p } };
  }
});
function An(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Zo = xn, On = Rn, Jo = Sn, Qo = Pn, ei = "Portal", Tn = c.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, i] = c.useState(!1);
  ae(() => i(!0), []);
  const s = n || o && globalThis?.document?.body;
  return s ? er.createPortal(/* @__PURE__ */ P.jsx(re.div, { ...r, ref: t }), s) : null;
});
Tn.displayName = ei;
function ti(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var xt = (e) => {
  const { present: t, children: n } = e, r = ni(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), i = ue(r.ref, ri(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: i }) : null;
};
xt.displayName = "Presence";
function ni(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), i = c.useRef("none"), s = e ? "mounted" : "unmounted", [a, u] = ti(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    const l = De(r.current);
    i.current = a === "mounted" ? l : "none";
  }, [a]), ae(() => {
    const l = r.current, f = o.current;
    if (f !== e) {
      const h = i.current, m = De(l);
      e ? u("MOUNT") : m === "none" || l?.display === "none" ? u("UNMOUNT") : u(f && h !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), ae(() => {
    if (t) {
      let l;
      const f = t.ownerDocument.defaultView ?? window, d = (m) => {
        const p = De(r.current).includes(CSS.escape(m.animationName));
        if (m.target === t && p && (u("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, h = (m) => {
        m.target === t && (i.current = De(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        f.clearTimeout(l), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: c.useCallback((l) => {
      r.current = l ? getComputedStyle(l) : null, n(l);
    }, [])
  };
}
function De(e) {
  return e?.animationName || "none";
}
function ri(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var oi = c[" useInsertionEffect ".trim().toString()] || ae;
function ii({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, s] = si({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, u = a ? e : o;
  {
    const f = c.useRef(e !== void 0);
    c.useEffect(() => {
      const d = f.current;
      d !== a && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = a;
    }, [a, r]);
  }
  const l = c.useCallback(
    (f) => {
      if (a) {
        const d = ai(f) ? f(e) : f;
        d !== e && s.current?.(d);
      } else
        i(f);
    },
    [a, e, i, s]
  );
  return [u, l];
}
function si({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), i = c.useRef(t);
  return oi(() => {
    i.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (i.current?.(n), o.current = n);
  }, [n, o]), [n, r, i];
}
function ai(e) {
  return typeof e == "function";
}
var ci = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, pe = /* @__PURE__ */ new WeakMap(), Le = /* @__PURE__ */ new WeakMap(), Fe = {}, ot = 0, Nn = function(e) {
  return e && (e.host || Nn(e.parentNode));
}, li = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Nn(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, ui = function(e, t, n, r) {
  var o = li(t, Array.isArray(e) ? e : [e]);
  Fe[n] || (Fe[n] = /* @__PURE__ */ new WeakMap());
  var i = Fe[n], s = [], a = /* @__PURE__ */ new Set(), u = new Set(o), l = function(d) {
    !d || a.has(d) || (a.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var f = function(d) {
    !d || u.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (a.has(h))
        f(h);
      else
        try {
          var m = h.getAttribute(r), g = m !== null && m !== "false", p = (pe.get(h) || 0) + 1, y = (i.get(h) || 0) + 1;
          pe.set(h, p), i.set(h, y), s.push(h), p === 1 && g && Le.set(h, !0), y === 1 && h.setAttribute(n, "true"), g || h.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", h, w);
        }
    });
  };
  return f(t), a.clear(), ot++, function() {
    s.forEach(function(d) {
      var h = pe.get(d) - 1, m = i.get(d) - 1;
      pe.set(d, h), i.set(d, m), h || (Le.has(d) || d.removeAttribute(r), Le.delete(d)), m || d.removeAttribute(n);
    }), ot--, ot || (pe = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), Le = /* @__PURE__ */ new WeakMap(), Fe = {});
  };
}, fi = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = ci(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), ui(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, q = function() {
  return q = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, q.apply(this, arguments);
};
function _n(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function di(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var $e = "right-scroll-bar-position", Be = "width-before-scroll-bar", pi = "with-scroll-bars-hidden", mi = "--removed-body-scroll-bar-size";
function it(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function hi(e, t) {
  var n = Qn(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var vi = typeof window < "u" ? c.useLayoutEffect : c.useEffect, zt = /* @__PURE__ */ new WeakMap();
function gi(e, t) {
  var n = hi(null, function(r) {
    return e.forEach(function(o) {
      return it(o, r);
    });
  });
  return vi(function() {
    var r = zt.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(a) {
        i.has(a) || it(a, null);
      }), i.forEach(function(a) {
        o.has(a) || it(a, s);
      });
    }
    zt.set(n, e);
  }, [e]), n;
}
function yi(e) {
  return e;
}
function wi(e, t) {
  t === void 0 && (t = yi);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, r);
      return n.push(s), function() {
        n = n.filter(function(a) {
          return a !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(i), s = n;
      }
      var u = function() {
        var f = s;
        s = [], f.forEach(i);
      }, l = function() {
        return Promise.resolve().then(u);
      };
      l(), n = {
        push: function(f) {
          s.push(f), l();
        },
        filter: function(f) {
          return s = s.filter(f), n;
        }
      };
    }
  };
  return o;
}
function bi(e) {
  e === void 0 && (e = {});
  var t = wi(null);
  return t.options = q({ async: !0, ssr: !1 }, e), t;
}
var kn = function(e) {
  var t = e.sideCar, n = _n(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return c.createElement(r, q({}, n));
};
kn.isSideCarExport = !0;
function xi(e, t) {
  return e.useMedium(t), kn;
}
var Mn = bi(), st = function() {
}, Ge = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: st,
    onWheelCapture: st,
    onTouchMoveCapture: st
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, u = e.className, l = e.removeScrollBar, f = e.enabled, d = e.shards, h = e.sideCar, m = e.noRelative, g = e.noIsolation, p = e.inert, y = e.allowPinchZoom, w = e.as, b = w === void 0 ? "div" : w, E = e.gapMode, x = _n(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = h, O = gi([n, t]), S = q(q({}, x), o);
  return c.createElement(
    c.Fragment,
    null,
    f && c.createElement(R, { sideCar: Mn, removeScrollBar: l, shards: d, noRelative: m, noIsolation: g, inert: p, setCallbacks: i, allowPinchZoom: !!y, lockRef: n, gapMode: E }),
    s ? c.cloneElement(c.Children.only(a), q(q({}, S), { ref: O })) : c.createElement(b, q({}, S, { className: u, ref: O }), a)
  );
});
Ge.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ge.classNames = {
  fullWidth: Be,
  zeroRight: $e
};
var Ei = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Ri() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ei();
  return t && e.setAttribute("nonce", t), e;
}
function Si(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ci(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Pi = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Ri()) && (Si(t, n), Ci(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ai = function() {
  var e = Pi();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Dn = function() {
  var e = Ai(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Oi = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, at = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ti = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [at(n), at(r), at(o)];
}, Ni = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Oi;
  var t = Ti(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, _i = Dn(), ge = "data-scroll-locked", ki = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(pi, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(ge, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat($e, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Be, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat($e, " .").concat($e, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Be, " .").concat(Be, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ge, `] {
    `).concat(mi, ": ").concat(a, `px;
  }
`);
}, Yt = function() {
  var e = parseInt(document.body.getAttribute(ge) || "0", 10);
  return isFinite(e) ? e : 0;
}, Mi = function() {
  c.useEffect(function() {
    return document.body.setAttribute(ge, (Yt() + 1).toString()), function() {
      var e = Yt() - 1;
      e <= 0 ? document.body.removeAttribute(ge) : document.body.setAttribute(ge, e.toString());
    };
  }, []);
}, Di = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Mi();
  var i = c.useMemo(function() {
    return Ni(o);
  }, [o]);
  return c.createElement(_i, { styles: ki(i, !t, o, n ? "" : "!important") });
}, dt = !1;
if (typeof window < "u")
  try {
    var Ie = Object.defineProperty({}, "passive", {
      get: function() {
        return dt = !0, !0;
      }
    });
    window.addEventListener("test", Ie, Ie), window.removeEventListener("test", Ie, Ie);
  } catch {
    dt = !1;
  }
var me = dt ? { passive: !1 } : !1, Li = function(e) {
  return e.tagName === "TEXTAREA";
}, Ln = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Li(e) && n[t] === "visible")
  );
}, Fi = function(e) {
  return Ln(e, "overflowY");
}, Ii = function(e) {
  return Ln(e, "overflowX");
}, Xt = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Fn(e, r);
    if (o) {
      var i = In(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, ji = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Wi = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Fn = function(e, t) {
  return e === "v" ? Fi(t) : Ii(t);
}, In = function(e, t) {
  return e === "v" ? ji(t) : Wi(t);
}, $i = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Bi = function(e, t, n, r, o) {
  var i = $i(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, u = t.contains(a), l = !1, f = s > 0, d = 0, h = 0;
  do {
    if (!a)
      break;
    var m = In(e, a), g = m[0], p = m[1], y = m[2], w = p - y - i * g;
    (g || w) && Fn(e, a) && (d += w, h += g);
    var b = a.parentNode;
    a = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !u && a !== document.body || // self content
    u && (t.contains(a) || t === a)
  );
  return (f && Math.abs(d) < 1 || !f && Math.abs(h) < 1) && (l = !0), l;
}, je = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Kt = function(e) {
  return [e.deltaX, e.deltaY];
}, qt = function(e) {
  return e && "current" in e ? e.current : e;
}, Hi = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Vi = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Ui = 0, he = [];
function zi(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(Ui++)[0], i = c.useState(Dn)[0], s = c.useRef(e);
  c.useEffect(function() {
    s.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var p = di([e.lockRef.current], (e.shards || []).map(qt), !0).filter(Boolean);
      return p.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), p.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = c.useCallback(function(p, y) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !s.current.allowPinchZoom;
    var w = je(p), b = n.current, E = "deltaX" in p ? p.deltaX : b[0] - w[0], x = "deltaY" in p ? p.deltaY : b[1] - w[1], R, O = p.target, S = Math.abs(E) > Math.abs(x) ? "h" : "v";
    if ("touches" in p && S === "h" && O.type === "range")
      return !1;
    var T = Xt(S, O);
    if (!T)
      return !0;
    if (T ? R = S : (R = S === "v" ? "h" : "v", T = Xt(S, O)), !T)
      return !1;
    if (!r.current && "changedTouches" in p && (E || x) && (r.current = R), !R)
      return !0;
    var M = r.current || R;
    return Bi(M, y, p, M === "h" ? E : x);
  }, []), u = c.useCallback(function(p) {
    var y = p;
    if (!(!he.length || he[he.length - 1] !== i)) {
      var w = "deltaY" in y ? Kt(y) : je(y), b = t.current.filter(function(R) {
        return R.name === y.type && (R.target === y.target || y.target === R.shadowParent) && Hi(R.delta, w);
      })[0];
      if (b && b.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!b) {
        var E = (s.current.shards || []).map(qt).filter(Boolean).filter(function(R) {
          return R.contains(y.target);
        }), x = E.length > 0 ? a(y, E[0]) : !s.current.noIsolation;
        x && y.cancelable && y.preventDefault();
      }
    }
  }, []), l = c.useCallback(function(p, y, w, b) {
    var E = { name: p, delta: y, target: w, should: b, shadowParent: Yi(w) };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== E;
      });
    }, 1);
  }, []), f = c.useCallback(function(p) {
    n.current = je(p), r.current = void 0;
  }, []), d = c.useCallback(function(p) {
    l(p.type, Kt(p), p.target, a(p, e.lockRef.current));
  }, []), h = c.useCallback(function(p) {
    l(p.type, je(p), p.target, a(p, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return he.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", u, me), document.addEventListener("touchmove", u, me), document.addEventListener("touchstart", f, me), function() {
      he = he.filter(function(p) {
        return p !== i;
      }), document.removeEventListener("wheel", u, me), document.removeEventListener("touchmove", u, me), document.removeEventListener("touchstart", f, me);
    };
  }, []);
  var m = e.removeScrollBar, g = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    g ? c.createElement(i, { styles: Vi(o) }) : null,
    m ? c.createElement(Di, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Yi(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Xi = xi(Mn, zi);
var jn = c.forwardRef(function(e, t) {
  return c.createElement(Ge, q({}, e, { ref: t, sideCar: Xi }));
});
jn.classNames = Ge.classNames;
var Ze = "Popover", [Wn] = Jt(Ze, [
  wn
]), Ne = wn(), [Ki, fe] = Wn(Ze), $n = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !1
  } = e, a = Ne(t), u = c.useRef(null), [l, f] = c.useState(!1), [d, h] = ii({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Ze
  });
  return /* @__PURE__ */ P.jsx(Zo, { ...a, children: /* @__PURE__ */ P.jsx(
    Ki,
    {
      scope: t,
      contentId: Nr(),
      triggerRef: u,
      open: d,
      onOpenChange: h,
      onOpenToggle: c.useCallback(() => h((m) => !m), [h]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: c.useCallback(() => f(!0), []),
      onCustomAnchorRemove: c.useCallback(() => f(!1), []),
      modal: s,
      children: n
    }
  ) });
};
$n.displayName = Ze;
var Bn = "PopoverAnchor", qi = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = fe(Bn, n), i = Ne(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: a } = o;
    return c.useEffect(() => (s(), () => a()), [s, a]), /* @__PURE__ */ P.jsx(On, { ...i, ...r, ref: t });
  }
);
qi.displayName = Bn;
var Hn = "PopoverTrigger", Vn = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = fe(Hn, n), i = Ne(n), s = ue(t, o.triggerRef), a = /* @__PURE__ */ P.jsx(
      re.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": qn(o.open),
        ...r,
        ref: s,
        onClick: se(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? a : /* @__PURE__ */ P.jsx(On, { asChild: !0, ...i, children: a });
  }
);
Vn.displayName = Hn;
var Et = "PopoverPortal", [Gi, Zi] = Wn(Et, {
  forceMount: void 0
}), Un = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = fe(Et, t);
  return /* @__PURE__ */ P.jsx(Gi, { scope: t, forceMount: n, children: /* @__PURE__ */ P.jsx(xt, { present: n || i.open, children: /* @__PURE__ */ P.jsx(Tn, { asChild: !0, container: o, children: r }) }) });
};
Un.displayName = Et;
var be = "PopoverContent", zn = c.forwardRef(
  (e, t) => {
    const n = Zi(be, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = fe(be, e.__scopePopover);
    return /* @__PURE__ */ P.jsx(xt, { present: r || i.open, children: i.modal ? /* @__PURE__ */ P.jsx(Qi, { ...o, ref: t }) : /* @__PURE__ */ P.jsx(es, { ...o, ref: t }) });
  }
);
zn.displayName = be;
var Ji = /* @__PURE__ */ Qt("PopoverContent.RemoveScroll"), Qi = c.forwardRef(
  (e, t) => {
    const n = fe(be, e.__scopePopover), r = c.useRef(null), o = ue(t, r), i = c.useRef(!1);
    return c.useEffect(() => {
      const s = r.current;
      if (s) return fi(s);
    }, []), /* @__PURE__ */ P.jsx(jn, { as: Ji, allowPinchZoom: !0, children: /* @__PURE__ */ P.jsx(
      Yn,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: se(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), i.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: se(
          e.onPointerDownOutside,
          (s) => {
            const a = s.detail.originalEvent, u = a.button === 0 && a.ctrlKey === !0, l = a.button === 2 || u;
            i.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: se(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), es = c.forwardRef(
  (e, t) => {
    const n = fe(be, e.__scopePopover), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ P.jsx(
      Yn,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          e.onCloseAutoFocus?.(i), i.defaultPrevented || (r.current || n.triggerRef.current?.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          e.onInteractOutside?.(i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = i.target;
          n.triggerRef.current?.contains(s) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), Yn = c.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: a,
      onPointerDownOutside: u,
      onFocusOutside: l,
      onInteractOutside: f,
      ...d
    } = e, h = fe(be, n), m = Ne(n);
    return br(), /* @__PURE__ */ P.jsx(
      rn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ P.jsx(
          tn,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: f,
            onEscapeKeyDown: a,
            onPointerDownOutside: u,
            onFocusOutside: l,
            onDismiss: () => h.onOpenChange(!1),
            children: /* @__PURE__ */ P.jsx(
              Jo,
              {
                "data-state": qn(h.open),
                role: "dialog",
                id: h.contentId,
                ...m,
                ...d,
                ref: t,
                style: {
                  ...d.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), Xn = "PopoverClose", ts = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = fe(Xn, n);
    return /* @__PURE__ */ P.jsx(
      re.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: se(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
ts.displayName = Xn;
var ns = "PopoverArrow", Kn = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ne(n);
    return /* @__PURE__ */ P.jsx(Qo, { ...o, ...r, ref: t });
  }
);
Kn.displayName = ns;
function qn(e) {
  return e ? "open" : "closed";
}
var rs = $n, os = Vn, is = Un, ss = zn, as = Kn;
const us = () => /* @__PURE__ */ P.jsxs(rs, { children: [
  /* @__PURE__ */ P.jsx(os, { children: "More info" }),
  /* @__PURE__ */ P.jsx(is, { children: /* @__PURE__ */ P.jsxs(ss, { children: [
    "Some more info...",
    /* @__PURE__ */ P.jsx(as, {})
  ] }) })
] });
export {
  us as Popover
};
