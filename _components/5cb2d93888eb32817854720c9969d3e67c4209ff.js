const ki = () => Promise.resolve().then(() => Mi), { Fragment: Ti, jsx: S, jsxs: $ } = globalThis.__GLOBALS__.ReactJSXRuntime;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function fn(e) {
  return globalThis.__GLOBALS__.React.isValidElement(e) && e.props && "_fgT" in e.props;
}
function dt(e) {
  return globalThis.__GLOBALS__.React.isValidElement(e) && e.type === "fg-txt";
}
function hn(e) {
  const { _fgT: t, _fgS: r, _fgB: a, _fgD: o, ...n } = e.props;
  return globalThis.__GLOBALS__.React.createElement(t, {
    ...n,
    key: e.key
  }, n.children);
}
function Tt(e) {
  return fn(e) ? hn(e) : dt(e) ? e.props.children : e;
}
const it = globalThis.__GLOBALS__.React.Children, mn = {
  map(e, t, r) {
    return it.map(e, (a, o) => {
      const n = Tt(a);
      return dt(a) ? null : t.call(r, n, o);
    });
  },
  forEach(e, t, r) {
    it.forEach(e, (a, o) => {
      if (dt(a))
        return;
      const n = Tt(a);
      t.call(r, n, o);
    });
  },
  count(e) {
    let t = 0;
    return it.forEach(e, (r) => {
      dt(r) || t++;
    }), t;
  },
  toArray(e) {
    const t = [];
    return it.forEach(e, (r) => {
      dt(r) || t.push(Tt(r));
    }), t;
  },
  only(e) {
    const t = it.only(e);
    return Tt(t);
  }
}, pn = globalThis.__GLOBALS__.React, { cloneElement: yn, Component: ua, createContext: me, createElement: F, createFactory: gn, createRef: vn, forwardRef: tt, Fragment: et, isValidElement: bn, lazy: wn, memo: ca, Profiler: xn, PureComponent: Rn, startTransition: pt, StrictMode: En, Suspense: Sn, use: Pn, useCallback: rt, useContext: B, useDebugValue: Ln, useDeferredValue: Cn, useEffect: Te, useId: Nn, useImperativeHandle: Dn, useInsertionEffect: Mn, useLayoutEffect: lr, useMemo: Se, useReducer: kn, useRef: bt, useState: ne, useSyncExternalStore: Tn, useTransition: _n, version: On } = globalThis.__GLOBALS__.React, Fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: mn,
  Component: ua,
  Fragment: et,
  Profiler: xn,
  PureComponent: Rn,
  StrictMode: En,
  Suspense: Sn,
  cloneElement: yn,
  createContext: me,
  createElement: F,
  createFactory: gn,
  createRef: vn,
  default: pn,
  forwardRef: tt,
  isValidElement: bn,
  lazy: wn,
  memo: ca,
  startTransition: pt,
  use: Pn,
  useCallback: rt,
  useContext: B,
  useDebugValue: Ln,
  useDeferredValue: Cn,
  useEffect: Te,
  useId: Nn,
  useImperativeHandle: Dn,
  useInsertionEffect: Mn,
  useLayoutEffect: lr,
  useMemo: Se,
  useReducer: kn,
  useRef: bt,
  useState: ne,
  useSyncExternalStore: Tn,
  useTransition: _n,
  version: On
}, Symbol.toStringTag, { value: "Module" }));
/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var da = (e) => {
  throw TypeError(e);
}, Un = (e, t, r) => t.has(e) || da("Cannot " + r), Yt = (e, t, r) => (Un(e, t, "read from private field"), r ? r.call(e) : t.get(e)), zn = (e, t, r) => t.has(e) ? da("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), _r = "popstate";
function $n(e = {}) {
  function t(a, o) {
    let { pathname: n, search: l, hash: i } = a.location;
    return yt(
      "",
      { pathname: n, search: l, hash: i },
      // state defaults to `null` because `window.history.state` does
      o.state && o.state.usr || null,
      o.state && o.state.key || "default"
    );
  }
  function r(a, o) {
    return typeof o == "string" ? o : Ce(o);
  }
  return jn(
    t,
    r,
    null,
    e
  );
}
function U(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Z(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function In() {
  return Math.random().toString(36).substring(2, 10);
}
function Or(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function yt(e, t, r = null, a) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof t == "string" ? $e(t) : t,
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || a || In()
  };
}
function Ce({
  pathname: e = "/",
  search: t = "",
  hash: r = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r), e;
}
function $e(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substring(r), e = e.substring(0, r));
    let a = e.indexOf("?");
    a >= 0 && (t.search = e.substring(a), e = e.substring(0, a)), e && (t.pathname = e);
  }
  return t;
}
function jn(e, t, r, a = {}) {
  let { window: o = document.defaultView, v5Compat: n = !1 } = a, l = o.history, i = "POP", u = null, c = m();
  c == null && (c = 0, l.replaceState({ ...l.state, idx: c }, ""));
  function m() {
    return (l.state || { idx: null }).idx;
  }
  function f() {
    i = "POP";
    let P = m(), w = P == null ? null : P - c;
    c = P, u && u({ action: i, location: E.location, delta: w });
  }
  function y(P, w) {
    i = "PUSH";
    let x = yt(E.location, P, w);
    c = m() + 1;
    let T = Or(x, c), K = E.createHref(x);
    try {
      l.pushState(T, "", K);
    } catch (z) {
      if (z instanceof DOMException && z.name === "DataCloneError")
        throw z;
      o.location.assign(K);
    }
    n && u && u({ action: i, location: E.location, delta: 1 });
  }
  function p(P, w) {
    i = "REPLACE";
    let x = yt(E.location, P, w);
    c = m();
    let T = Or(x, c), K = E.createHref(x);
    l.replaceState(T, "", K), n && u && u({ action: i, location: E.location, delta: 0 });
  }
  function v(P) {
    return fa(P);
  }
  let E = {
    get action() {
      return i;
    },
    get location() {
      return e(o, l);
    },
    listen(P) {
      if (u)
        throw new Error("A history only accepts one active listener");
      return o.addEventListener(_r, f), u = P, () => {
        o.removeEventListener(_r, f), u = null;
      };
    },
    createHref(P) {
      return t(o, P);
    },
    createURL: v,
    encodeLocation(P) {
      let w = v(P);
      return {
        pathname: w.pathname,
        search: w.search,
        hash: w.hash
      };
    },
    push: y,
    replace: p,
    go(P) {
      return l.go(P);
    }
  };
  return E;
}
function fa(e, t = !1) {
  let r = "http://localhost";
  typeof window < "u" && (r = window.location.origin !== "null" ? window.location.origin : window.location.href), U(r, "No window.location.(origin|href) available to create URL");
  let a = typeof e == "string" ? e : Ce(e);
  return a = a.replace(/ $/, "%20"), !t && a.startsWith("//") && (a = r + a), new URL(a, r);
}
var ft, Fr = class {
  /**
   * Create a new `RouterContextProvider` instance
   * @param init An optional initial context map to populate the provider with
   */
  constructor(e) {
    if (zn(this, ft, /* @__PURE__ */ new Map()), e)
      for (let [t, r] of e)
        this.set(t, r);
  }
  /**
   * Access a value from the context. If no value has been set for the context,
   * it will return the context's `defaultValue` if provided, or throw an error
   * if no `defaultValue` was set.
   * @param context The context to get the value for
   * @returns The value for the context, or the context's `defaultValue` if no
   * value was set
   */
  get(e) {
    if (Yt(this, ft).has(e))
      return Yt(this, ft).get(e);
    if (e.defaultValue !== void 0)
      return e.defaultValue;
    throw new Error("No value found for context");
  }
  /**
   * Set a value for the context. If the context already has a value set, this
   * will overwrite it.
   *
   * @param context The context to set the value for
   * @param value The value to set for the context
   * @returns {void}
   */
  set(e, t) {
    Yt(this, ft).set(e, t);
  }
};
ft = /* @__PURE__ */ new WeakMap();
var An = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children"
]);
function Bn(e) {
  return An.has(
    e
  );
}
var Hn = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children"
]);
function Wn(e) {
  return Hn.has(
    e
  );
}
function Vn(e) {
  return e.index === !0;
}
function gt(e, t, r = [], a = {}, o = !1) {
  return e.map((n, l) => {
    let i = [...r, String(l)], u = typeof n.id == "string" ? n.id : i.join("-");
    if (U(
      n.index !== !0 || !n.children,
      "Cannot specify children on an index route"
    ), U(
      o || !a[u],
      `Found a route id collision on id "${u}".  Route id's must be globally unique within Data Router usages`
    ), Vn(n)) {
      let c = {
        ...n,
        id: u
      };
      return a[u] = Ur(
        c,
        t(c)
      ), c;
    } else {
      let c = {
        ...n,
        id: u,
        children: void 0
      };
      return a[u] = Ur(
        c,
        t(c)
      ), n.children && (c.children = gt(
        n.children,
        t,
        i,
        a,
        o
      )), c;
    }
  });
}
function Ur(e, t) {
  return Object.assign(e, {
    ...t,
    ...typeof t.lazy == "object" && t.lazy != null ? {
      lazy: {
        ...e.lazy,
        ...t.lazy
      }
    } : {}
  });
}
function Fe(e, t, r = "/") {
  return ht(e, t, r, !1);
}
function ht(e, t, r, a) {
  let o = typeof t == "string" ? $e(t) : t, n = we(o.pathname || "/", r);
  if (n == null)
    return null;
  let l = ha(e);
  Kn(l);
  let i = null;
  for (let u = 0; i == null && u < l.length; ++u) {
    let c = no(n);
    i = ro(
      l[u],
      c,
      a
    );
  }
  return i;
}
function Gn(e, t) {
  let { route: r, pathname: a, params: o } = e;
  return {
    id: r.id,
    pathname: a,
    params: o,
    data: t[r.id],
    loaderData: t[r.id],
    handle: r.handle
  };
}
function ha(e, t = [], r = [], a = "", o = !1) {
  let n = (l, i, u = o, c) => {
    let m = {
      relativePath: c === void 0 ? l.path || "" : c,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: i,
      route: l
    };
    if (m.relativePath.startsWith("/")) {
      if (!m.relativePath.startsWith(a) && u)
        return;
      U(
        m.relativePath.startsWith(a),
        `Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), m.relativePath = m.relativePath.slice(a.length);
    }
    let f = Le([a, m.relativePath]), y = r.concat(m);
    l.children && l.children.length > 0 && (U(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      l.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${f}".`
    ), ha(
      l.children,
      t,
      y,
      f,
      u
    )), !(l.path == null && !l.index) && t.push({
      path: f,
      score: eo(f, l.index),
      routesMeta: y
    });
  };
  return e.forEach((l, i) => {
    if (l.path === "" || !l.path?.includes("?"))
      n(l, i);
    else
      for (let u of ma(l.path))
        n(l, i, !0, u);
  }), t;
}
function ma(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...a] = t, o = r.endsWith("?"), n = r.replace(/\?$/, "");
  if (a.length === 0)
    return o ? [n, ""] : [n];
  let l = ma(a.join("/")), i = [];
  return i.push(
    ...l.map(
      (u) => u === "" ? n : [n, u].join("/")
    )
  ), o && i.push(...l), i.map(
    (u) => e.startsWith("/") && u === "" ? "/" : u
  );
}
function Kn(e) {
  e.sort(
    (t, r) => t.score !== r.score ? r.score - t.score : to(
      t.routesMeta.map((a) => a.childrenIndex),
      r.routesMeta.map((a) => a.childrenIndex)
    )
  );
}
var Yn = /^:[\w-]+$/, Jn = 3, Xn = 2, qn = 1, Qn = 10, Zn = -2, zr = (e) => e === "*";
function eo(e, t) {
  let r = e.split("/"), a = r.length;
  return r.some(zr) && (a += Zn), t && (a += Xn), r.filter((o) => !zr(o)).reduce(
    (o, n) => o + (Yn.test(n) ? Jn : n === "" ? qn : Qn),
    a
  );
}
function to(e, t) {
  return e.length === t.length && e.slice(0, -1).every((a, o) => a === t[o]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function ro(e, t, r = !1) {
  let { routesMeta: a } = e, o = {}, n = "/", l = [];
  for (let i = 0; i < a.length; ++i) {
    let u = a[i], c = i === a.length - 1, m = n === "/" ? t : t.slice(n.length) || "/", f = It(
      { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
      m
    ), y = u.route;
    if (!f && c && r && !a[a.length - 1].route.index && (f = It(
      {
        path: u.relativePath,
        caseSensitive: u.caseSensitive,
        end: !1
      },
      m
    )), !f)
      return null;
    Object.assign(o, f.params), l.push({
      // TODO: Can this as be avoided?
      params: o,
      pathname: Le([n, f.pathname]),
      pathnameBase: io(
        Le([n, f.pathnameBase])
      ),
      route: y
    }), f.pathnameBase !== "/" && (n = Le([n, f.pathnameBase]));
  }
  return l;
}
function It(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, a] = ao(
    e.path,
    e.caseSensitive,
    e.end
  ), o = t.match(r);
  if (!o) return null;
  let n = o[0], l = n.replace(/(.)\/+$/, "$1"), i = o.slice(1);
  return {
    params: a.reduce(
      (c, { paramName: m, isOptional: f }, y) => {
        if (m === "*") {
          let v = i[y] || "";
          l = n.slice(0, n.length - v.length).replace(/(.)\/+$/, "$1");
        }
        const p = i[y];
        return f && !p ? c[m] = void 0 : c[m] = (p || "").replace(/%2F/g, "/"), c;
      },
      {}
    ),
    pathname: n,
    pathnameBase: l,
    pattern: e
  };
}
function ao(e, t = !1, r = !0) {
  Z(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let a = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (l, i, u) => (a.push({ paramName: i, isOptional: u != null }), u ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return e.endsWith("*") ? (a.push({ paramName: "*" }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), a];
}
function no(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return Z(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function we(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, a = e.charAt(r);
  return a && a !== "/" ? null : e.slice(r) || "/";
}
function oo({
  basename: e,
  pathname: t
}) {
  return t === "/" ? e : Le([e, t]);
}
var pa = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ir = (e) => pa.test(e);
function lo(e, t = "/") {
  let {
    pathname: r,
    search: a = "",
    hash: o = ""
  } = typeof e == "string" ? $e(e) : e, n;
  return r ? (r = r.replace(/\/\/+/g, "/"), r.startsWith("/") ? n = $r(r.substring(1), "/") : n = $r(r, t)) : n = t, {
    pathname: n,
    search: so(a),
    hash: uo(o)
  };
}
function $r(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
  }), r.length > 1 ? r.join("/") : "/";
}
function Jt(e, t, r, a) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    a
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ya(e) {
  return e.filter(
    (t, r) => r === 0 || t.route.path && t.route.path.length > 0
  );
}
function sr(e) {
  let t = ya(e);
  return t.map(
    (r, a) => a === t.length - 1 ? r.pathname : r.pathnameBase
  );
}
function ur(e, t, r, a = !1) {
  let o;
  typeof e == "string" ? o = $e(e) : (o = { ...e }, U(
    !o.pathname || !o.pathname.includes("?"),
    Jt("?", "pathname", "search", o)
  ), U(
    !o.pathname || !o.pathname.includes("#"),
    Jt("#", "pathname", "hash", o)
  ), U(
    !o.search || !o.search.includes("#"),
    Jt("#", "search", "hash", o)
  ));
  let n = e === "" || o.pathname === "", l = n ? "/" : o.pathname, i;
  if (l == null)
    i = r;
  else {
    let f = t.length - 1;
    if (!a && l.startsWith("..")) {
      let y = l.split("/");
      for (; y[0] === ".."; )
        y.shift(), f -= 1;
      o.pathname = y.join("/");
    }
    i = f >= 0 ? t[f] : "/";
  }
  let u = lo(o, i), c = l && l !== "/" && l.endsWith("/"), m = (n || l === ".") && r.endsWith("/");
  return !u.pathname.endsWith("/") && (c || m) && (u.pathname += "/"), u;
}
var Le = (e) => e.join("/").replace(/\/\/+/g, "/"), io = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), so = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, uo = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, wt = class {
  constructor(e, t, r, a = !1) {
    this.status = e, this.statusText = t || "", this.internal = a, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
  }
};
function vt(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function xt(e) {
  return e.map((t) => t.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var ga = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function va(e, t) {
  let r = e;
  if (typeof r != "string" || !pa.test(r))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: r
    };
  let a = r, o = !1;
  if (ga)
    try {
      let n = new URL(window.location.href), l = r.startsWith("//") ? new URL(n.protocol + r) : new URL(r), i = we(l.pathname, t);
      l.origin === n.origin && i != null ? r = i + l.search + l.hash : o = !0;
    } catch {
      Z(
        !1,
        `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: a,
    isExternal: o,
    to: r
  };
}
var ze = Symbol("Uninstrumented");
function co(e, t) {
  let r = {
    lazy: [],
    "lazy.loader": [],
    "lazy.action": [],
    "lazy.middleware": [],
    middleware: [],
    loader: [],
    action: []
  };
  e.forEach(
    (o) => o({
      id: t.id,
      index: t.index,
      path: t.path,
      instrument(n) {
        let l = Object.keys(r);
        for (let i of l)
          n[i] && r[i].push(n[i]);
      }
    })
  );
  let a = {};
  if (typeof t.lazy == "function" && r.lazy.length > 0) {
    let o = Qe(r.lazy, t.lazy, () => {
    });
    o && (a.lazy = o);
  }
  if (typeof t.lazy == "object") {
    let o = t.lazy;
    ["middleware", "loader", "action"].forEach((n) => {
      let l = o[n], i = r[`lazy.${n}`];
      if (typeof l == "function" && i.length > 0) {
        let u = Qe(i, l, () => {
        });
        u && (a.lazy = Object.assign(a.lazy || {}, {
          [n]: u
        }));
      }
    });
  }
  return ["loader", "action"].forEach((o) => {
    let n = t[o];
    if (typeof n == "function" && r[o].length > 0) {
      let l = n[ze] ?? n, i = Qe(
        r[o],
        l,
        (...u) => Ir(u[0])
      );
      i && (o === "loader" && l.hydrate === !0 && (i.hydrate = !0), i[ze] = l, a[o] = i);
    }
  }), t.middleware && t.middleware.length > 0 && r.middleware.length > 0 && (a.middleware = t.middleware.map((o) => {
    let n = o[ze] ?? o, l = Qe(
      r.middleware,
      n,
      (...i) => Ir(i[0])
    );
    return l ? (l[ze] = n, l) : o;
  })), a;
}
function fo(e, t) {
  let r = {
    navigate: [],
    fetch: []
  };
  if (t.forEach(
    (a) => a({
      instrument(o) {
        let n = Object.keys(o);
        for (let l of n)
          o[l] && r[l].push(o[l]);
      }
    })
  ), r.navigate.length > 0) {
    let a = e.navigate[ze] ?? e.navigate, o = Qe(
      r.navigate,
      a,
      (...n) => {
        let [l, i] = n;
        return {
          to: typeof l == "number" || typeof l == "string" ? l : l ? Ce(l) : ".",
          ...jr(e, i ?? {})
        };
      }
    );
    o && (o[ze] = a, e.navigate = o);
  }
  if (r.fetch.length > 0) {
    let a = e.fetch[ze] ?? e.fetch, o = Qe(r.fetch, a, (...n) => {
      let [l, , i, u] = n;
      return {
        href: i ?? ".",
        fetcherKey: l,
        ...jr(e, u ?? {})
      };
    });
    o && (o[ze] = a, e.fetch = o);
  }
  return e;
}
function Qe(e, t, r) {
  return e.length === 0 ? null : async (...a) => {
    let o = await ba(
      e,
      r(...a),
      () => t(...a),
      e.length - 1
    );
    if (o.type === "error")
      throw o.value;
    return o.value;
  };
}
async function ba(e, t, r, a) {
  let o = e[a], n;
  if (o) {
    let l, i = async () => (l ? console.error("You cannot call instrumented handlers more than once") : l = ba(e, t, r, a - 1), n = await l, U(n, "Expected a result"), n.type === "error" && n.value instanceof Error ? { status: "error", error: n.value } : { status: "success", error: void 0 });
    try {
      await o(i, t);
    } catch (u) {
      console.error("An instrumentation function threw an error:", u);
    }
    l || await i(), await l;
  } else
    try {
      n = { type: "success", value: await r() };
    } catch (l) {
      n = { type: "error", value: l };
    }
  return n || {
    type: "error",
    value: new Error("No result assigned in instrumentation chain.")
  };
}
function Ir(e) {
  let { request: t, context: r, params: a, unstable_pattern: o } = e;
  return {
    request: ho(t),
    params: { ...a },
    unstable_pattern: o,
    context: mo(r)
  };
}
function jr(e, t) {
  return {
    currentUrl: Ce(e.state.location),
    ..."formMethod" in t ? { formMethod: t.formMethod } : {},
    ..."formEncType" in t ? { formEncType: t.formEncType } : {},
    ..."formData" in t ? { formData: t.formData } : {},
    ..."body" in t ? { body: t.body } : {}
  };
}
function ho(e) {
  return {
    method: e.method,
    url: e.url,
    headers: {
      get: (...t) => e.headers.get(...t)
    }
  };
}
function mo(e) {
  if (yo(e)) {
    let t = { ...e };
    return Object.freeze(t), t;
  } else
    return {
      get: (t) => e.get(t)
    };
}
var po = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function yo(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === po;
}
var wa = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
], go = new Set(
  wa
), vo = [
  "GET",
  ...wa
], bo = new Set(vo), xa = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), wo = /* @__PURE__ */ new Set([307, 308]), Xt = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, xo = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, st = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, Ro = (e) => ({
  hasErrorBoundary: !!e.hasErrorBoundary
}), Ra = "remix-router-transitions", Ea = Symbol("ResetLoaderData");
function Eo(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0, r = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u";
  U(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let a = e.hydrationRouteProperties || [], o = e.mapRouteProperties || Ro, n = o;
  if (e.unstable_instrumentations) {
    let s = e.unstable_instrumentations;
    n = (d) => ({
      ...o(d),
      ...co(
        s.map((h) => h.route).filter(Boolean),
        d
      )
    });
  }
  let l = {}, i = gt(
    e.routes,
    n,
    void 0,
    l
  ), u, c = e.basename || "/";
  c.startsWith("/") || (c = `/${c}`);
  let m = e.dataStrategy || No, f = {
    ...e.future
  }, y = null, p = /* @__PURE__ */ new Set(), v = null, E = null, P = null, w = e.hydrationData != null, x = Fe(i, e.history.location, c), T = !1, K = null, z;
  if (x == null && !e.patchRoutesOnNavigation) {
    let s = be(404, {
      pathname: e.history.location.pathname
    }), { matches: d, route: h } = _t(i);
    z = !0, x = d, K = { [h.id]: s };
  } else if (x && !e.hydrationData && Ct(
    x,
    i,
    e.history.location.pathname
  ).active && (x = null), x)
    if (x.some((s) => s.route.lazy))
      z = !1;
    else if (!x.some((s) => cr(s.route)))
      z = !0;
    else {
      let s = e.hydrationData ? e.hydrationData.loaderData : null, d = e.hydrationData ? e.hydrationData.errors : null;
      if (d) {
        let h = x.findIndex(
          (b) => d[b.route.id] !== void 0
        );
        z = x.slice(0, h + 1).every(
          (b) => !rr(b.route, s, d)
        );
      } else
        z = x.every(
          (h) => !rr(h.route, s, d)
        );
    }
  else {
    z = !1, x = [];
    let s = Ct(
      null,
      i,
      e.history.location.pathname
    );
    s.active && s.matches && (T = !0, x = s.matches);
  }
  let q, g = {
    historyAction: e.history.action,
    location: e.history.location,
    matches: x,
    initialized: z,
    navigation: Xt,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: e.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: e.hydrationData && e.hydrationData.loaderData || {},
    actionData: e.hydrationData && e.hydrationData.actionData || null,
    errors: e.hydrationData && e.hydrationData.errors || K,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, O = "POP", H = null, J = !1, Y, te = !1, Re = /* @__PURE__ */ new Map(), ee = null, G = !1, X = !1, pe = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Map(), re = 0, ce = -1, Ee = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Set(), ye = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Set(), je = /* @__PURE__ */ new Map(), Pt, at = null;
  function Ka() {
    if (y = e.history.listen(
      ({ action: s, location: d, delta: h }) => {
        if (Pt) {
          Pt(), Pt = void 0;
          return;
        }
        Z(
          je.size === 0 || h != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let b = Nr({
          currentLocation: g.location,
          nextLocation: d,
          historyAction: s
        });
        if (b && h != null) {
          let R = new Promise((N) => {
            Pt = N;
          });
          e.history.go(h * -1), Lt(b, {
            state: "blocked",
            location: d,
            proceed() {
              Lt(b, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location: d
              }), R.then(() => e.history.go(h));
            },
            reset() {
              let N = new Map(g.blockers);
              N.set(b, st), le({ blockers: N });
            }
          }), H?.resolve(), H = null;
          return;
        }
        return Ae(s, d);
      }
    ), r) {
      Go(t, Re);
      let s = () => Ko(t, Re);
      t.addEventListener("pagehide", s), ee = () => t.removeEventListener("pagehide", s);
    }
    return g.initialized || Ae("POP", g.location, {
      initialHydration: !0
    }), q;
  }
  function Ya() {
    y && y(), ee && ee(), p.clear(), Y && Y.abort(), g.fetchers.forEach((s, d) => Vt(d)), g.blockers.forEach((s, d) => Cr(d));
  }
  function Ja(s) {
    return p.add(s), () => p.delete(s);
  }
  function le(s, d = {}) {
    s.matches && (s.matches = s.matches.map((R) => {
      let N = l[R.route.id], L = R.route;
      return L.element !== N.element || L.errorElement !== N.errorElement || L.hydrateFallbackElement !== N.hydrateFallbackElement ? {
        ...R,
        route: N
      } : R;
    })), g = {
      ...g,
      ...s
    };
    let h = [], b = [];
    g.fetchers.forEach((R, N) => {
      R.state === "idle" && (fe.has(N) ? h.push(N) : b.push(N));
    }), fe.forEach((R) => {
      !g.fetchers.has(R) && !W.has(R) && h.push(R);
    }), [...p].forEach(
      (R) => R(g, {
        deletedFetchers: h,
        newErrors: s.errors ?? null,
        viewTransitionOpts: d.viewTransitionOpts,
        flushSync: d.flushSync === !0
      })
    ), h.forEach((R) => Vt(R)), b.forEach((R) => g.fetchers.delete(R));
  }
  function Je(s, d, { flushSync: h } = {}) {
    let b = g.actionData != null && g.navigation.formMethod != null && se(g.navigation.formMethod) && g.navigation.state === "loading" && s.state?._isRedirect !== !0, R;
    d.actionData ? Object.keys(d.actionData).length > 0 ? R = d.actionData : R = null : b ? R = g.actionData : R = null;
    let N = d.loaderData ? Xr(
      g.loaderData,
      d.loaderData,
      d.matches || [],
      d.errors
    ) : g.loaderData, L = g.blockers;
    L.size > 0 && (L = new Map(L), L.forEach((_, M) => L.set(M, st)));
    let C = G ? !1 : Mr(s, d.matches || g.matches), D = J === !0 || g.navigation.formMethod != null && se(g.navigation.formMethod) && s.state?._isRedirect !== !0;
    u && (i = u, u = void 0), G || O === "POP" || (O === "PUSH" ? e.history.push(s, s.state) : O === "REPLACE" && e.history.replace(s, s.state));
    let k;
    if (O === "POP") {
      let _ = Re.get(g.location.pathname);
      _ && _.has(s.pathname) ? k = {
        currentLocation: g.location,
        nextLocation: s
      } : Re.has(s.pathname) && (k = {
        currentLocation: s,
        nextLocation: g.location
      });
    } else if (te) {
      let _ = Re.get(g.location.pathname);
      _ ? _.add(s.pathname) : (_ = /* @__PURE__ */ new Set([s.pathname]), Re.set(g.location.pathname, _)), k = {
        currentLocation: g.location,
        nextLocation: s
      };
    }
    le(
      {
        ...d,
        // matches, errors, fetchers go through as-is
        actionData: R,
        loaderData: N,
        historyAction: O,
        location: s,
        initialized: !0,
        navigation: Xt,
        revalidation: "idle",
        restoreScrollPosition: C,
        preventScrollReset: D,
        blockers: L
      },
      {
        viewTransitionOpts: k,
        flushSync: h === !0
      }
    ), O = "POP", J = !1, te = !1, G = !1, X = !1, H?.resolve(), H = null, at?.resolve(), at = null;
  }
  async function wr(s, d) {
    if (H?.resolve(), H = null, typeof s == "number") {
      H || (H = ea());
      let A = H.promise;
      return e.history.go(s), A;
    }
    let h = tr(
      g.location,
      g.matches,
      c,
      s,
      d?.fromRouteId,
      d?.relative
    ), { path: b, submission: R, error: N } = Ar(
      !1,
      h,
      d
    ), L = g.location, C = yt(g.location, b, d && d.state);
    C = {
      ...C,
      ...e.history.encodeLocation(C)
    };
    let D = d && d.replace != null ? d.replace : void 0, k = "PUSH";
    D === !0 ? k = "REPLACE" : D === !1 || R != null && se(R.formMethod) && R.formAction === g.location.pathname + g.location.search && (k = "REPLACE");
    let _ = d && "preventScrollReset" in d ? d.preventScrollReset === !0 : void 0, M = (d && d.flushSync) === !0, j = Nr({
      currentLocation: L,
      nextLocation: C,
      historyAction: k
    });
    if (j) {
      Lt(j, {
        state: "blocked",
        location: C,
        proceed() {
          Lt(j, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: C
          }), wr(s, d);
        },
        reset() {
          let A = new Map(g.blockers);
          A.set(j, st), le({ blockers: A });
        }
      });
      return;
    }
    await Ae(k, C, {
      submission: R,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: N,
      preventScrollReset: _,
      replace: d && d.replace,
      enableViewTransition: d && d.viewTransition,
      flushSync: M,
      callSiteDefaultShouldRevalidate: d && d.unstable_defaultShouldRevalidate
    });
  }
  function Xa() {
    at || (at = ea()), Wt(), le({ revalidation: "loading" });
    let s = at.promise;
    return g.navigation.state === "submitting" ? s : g.navigation.state === "idle" ? (Ae(g.historyAction, g.location, {
      startUninterruptedRevalidation: !0
    }), s) : (Ae(
      O || g.historyAction,
      g.navigation.location,
      {
        overrideNavigation: g.navigation,
        // Proxy through any rending view transition
        enableViewTransition: te === !0
      }
    ), s);
  }
  async function Ae(s, d, h) {
    Y && Y.abort(), Y = null, O = s, G = (h && h.startUninterruptedRevalidation) === !0, sn(g.location, g.matches), J = (h && h.preventScrollReset) === !0, te = (h && h.enableViewTransition) === !0;
    let b = u || i, R = h && h.overrideNavigation, N = h?.initialHydration && g.matches && g.matches.length > 0 && !T ? (
      // `matchRoutes()` has already been called if we're in here via `router.initialize()`
      g.matches
    ) : Fe(b, d, c), L = (h && h.flushSync) === !0;
    if (N && g.initialized && !X && Uo(g.location, d) && !(h && h.submission && se(h.submission.formMethod))) {
      Je(d, { matches: N }, { flushSync: L });
      return;
    }
    let C = Ct(N, b, d.pathname);
    if (C.active && C.matches && (N = C.matches), !N) {
      let { error: ae, notFoundMatches: ue, route: V } = Gt(
        d.pathname
      );
      Je(
        d,
        {
          matches: ue,
          loaderData: {},
          errors: {
            [V.id]: ae
          }
        },
        { flushSync: L }
      );
      return;
    }
    Y = new AbortController();
    let D = qe(
      e.history,
      d,
      Y.signal,
      h && h.submission
    ), k = e.getContext ? await e.getContext() : new Fr(), _;
    if (h && h.pendingError)
      _ = [
        Ue(N).route.id,
        { type: "error", error: h.pendingError }
      ];
    else if (h && h.submission && se(h.submission.formMethod)) {
      let ae = await qa(
        D,
        d,
        h.submission,
        N,
        k,
        C.active,
        h && h.initialHydration === !0,
        { replace: h.replace, flushSync: L }
      );
      if (ae.shortCircuited)
        return;
      if (ae.pendingActionResult) {
        let [ue, V] = ae.pendingActionResult;
        if (he(V) && vt(V.error) && V.error.status === 404) {
          Y = null, Je(d, {
            matches: ae.matches,
            loaderData: {},
            errors: {
              [ue]: V.error
            }
          });
          return;
        }
      }
      N = ae.matches || N, _ = ae.pendingActionResult, R = qt(d, h.submission), L = !1, C.active = !1, D = qe(
        e.history,
        D.url,
        D.signal
      );
    }
    let {
      shortCircuited: M,
      matches: j,
      loaderData: A,
      errors: oe
    } = await Qa(
      D,
      d,
      N,
      k,
      C.active,
      R,
      h && h.submission,
      h && h.fetcherSubmission,
      h && h.replace,
      h && h.initialHydration === !0,
      L,
      _,
      h && h.callSiteDefaultShouldRevalidate
    );
    M || (Y = null, Je(d, {
      matches: j || N,
      ...qr(_),
      loaderData: A,
      errors: oe
    }));
  }
  async function qa(s, d, h, b, R, N, L, C = {}) {
    Wt();
    let D = Wo(d, h);
    if (le({ navigation: D }, { flushSync: C.flushSync === !0 }), N) {
      let M = await Nt(
        b,
        d.pathname,
        s.signal
      );
      if (M.type === "aborted")
        return { shortCircuited: !0 };
      if (M.type === "error") {
        if (M.partialMatches.length === 0) {
          let { matches: A, route: oe } = _t(i);
          return {
            matches: A,
            pendingActionResult: [
              oe.id,
              {
                type: "error",
                error: M.error
              }
            ]
          };
        }
        let j = Ue(M.partialMatches).route.id;
        return {
          matches: M.partialMatches,
          pendingActionResult: [
            j,
            {
              type: "error",
              error: M.error
            }
          ]
        };
      } else if (M.matches)
        b = M.matches;
      else {
        let { notFoundMatches: j, error: A, route: oe } = Gt(
          d.pathname
        );
        return {
          matches: j,
          pendingActionResult: [
            oe.id,
            {
              type: "error",
              error: A
            }
          ]
        };
      }
    }
    let k, _ = Ut(b, d);
    if (!_.route.action && !_.route.lazy)
      k = {
        type: "error",
        error: be(405, {
          method: s.method,
          pathname: d.pathname,
          routeId: _.route.id
        })
      };
    else {
      let M = Ze(
        n,
        l,
        s,
        b,
        _,
        L ? [] : a,
        R
      ), j = await nt(
        s,
        M,
        R,
        null
      );
      if (k = j[_.route.id], !k) {
        for (let A of b)
          if (j[A.route.id]) {
            k = j[A.route.id];
            break;
          }
      }
      if (s.signal.aborted)
        return { shortCircuited: !0 };
    }
    if (Ge(k)) {
      let M;
      return C && C.replace != null ? M = C.replace : M = Kr(
        k.response.headers.get("Location"),
        new URL(s.url),
        c,
        e.history
      ) === g.location.pathname + g.location.search, await Be(s, k, !0, {
        submission: h,
        replace: M
      }), { shortCircuited: !0 };
    }
    if (he(k)) {
      let M = Ue(b, _.route.id);
      return (C && C.replace) !== !0 && (O = "PUSH"), {
        matches: b,
        pendingActionResult: [
          M.route.id,
          k,
          _.route.id
        ]
      };
    }
    return {
      matches: b,
      pendingActionResult: [_.route.id, k]
    };
  }
  async function Qa(s, d, h, b, R, N, L, C, D, k, _, M, j) {
    let A = N || qt(d, L), oe = L || C || Zr(A), ae = !G && !k;
    if (R) {
      if (ae) {
        let ie = xr(M);
        le(
          {
            navigation: A,
            ...ie !== void 0 ? { actionData: ie } : {}
          },
          {
            flushSync: _
          }
        );
      }
      let I = await Nt(
        h,
        d.pathname,
        s.signal
      );
      if (I.type === "aborted")
        return { shortCircuited: !0 };
      if (I.type === "error") {
        if (I.partialMatches.length === 0) {
          let { matches: Xe, route: Ve } = _t(i);
          return {
            matches: Xe,
            loaderData: {},
            errors: {
              [Ve.id]: I.error
            }
          };
        }
        let ie = Ue(I.partialMatches).route.id;
        return {
          matches: I.partialMatches,
          loaderData: {},
          errors: {
            [ie]: I.error
          }
        };
      } else if (I.matches)
        h = I.matches;
      else {
        let { error: ie, notFoundMatches: Xe, route: Ve } = Gt(
          d.pathname
        );
        return {
          matches: Xe,
          loaderData: {},
          errors: {
            [Ve.id]: ie
          }
        };
      }
    }
    let ue = u || i, { dsMatches: V, revalidatingFetchers: ve } = Br(
      s,
      b,
      n,
      l,
      e.history,
      g,
      h,
      oe,
      d,
      k ? [] : a,
      k === !0,
      X,
      pe,
      fe,
      ye,
      de,
      ue,
      c,
      e.patchRoutesOnNavigation != null,
      M,
      j
    );
    if (ce = ++re, !e.dataStrategy && !V.some((I) => I.shouldLoad) && !V.some(
      (I) => I.route.middleware && I.route.middleware.length > 0
    ) && ve.length === 0) {
      let I = Pr();
      return Je(
        d,
        {
          matches: h,
          loaderData: {},
          // Commit pending error if we're short circuiting
          errors: M && he(M[1]) ? { [M[0]]: M[1].error } : null,
          ...qr(M),
          ...I ? { fetchers: new Map(g.fetchers) } : {}
        },
        { flushSync: _ }
      ), { shortCircuited: !0 };
    }
    if (ae) {
      let I = {};
      if (!R) {
        I.navigation = A;
        let ie = xr(M);
        ie !== void 0 && (I.actionData = ie);
      }
      ve.length > 0 && (I.fetchers = Za(ve)), le(I, { flushSync: _ });
    }
    ve.forEach((I) => {
      Me(I.key), I.controller && W.set(I.key, I.controller);
    });
    let He = () => ve.forEach((I) => Me(I.key));
    Y && Y.signal.addEventListener(
      "abort",
      He
    );
    let { loaderResults: ot, fetcherResults: Oe } = await Rr(
      V,
      ve,
      s,
      b
    );
    if (s.signal.aborted)
      return { shortCircuited: !0 };
    Y && Y.signal.removeEventListener(
      "abort",
      He
    ), ve.forEach((I) => W.delete(I.key));
    let Pe = Ot(ot);
    if (Pe)
      return await Be(s, Pe.result, !0, {
        replace: D
      }), { shortCircuited: !0 };
    if (Pe = Ot(Oe), Pe)
      return de.add(Pe.key), await Be(s, Pe.result, !0, {
        replace: D
      }), { shortCircuited: !0 };
    let { loaderData: Kt, errors: lt } = Jr(
      g,
      h,
      ot,
      M,
      ve,
      Oe
    );
    k && g.errors && (lt = { ...g.errors, ...lt });
    let We = Pr(), Dt = Lr(ce), Mt = We || Dt || ve.length > 0;
    return {
      matches: h,
      loaderData: Kt,
      errors: lt,
      ...Mt ? { fetchers: new Map(g.fetchers) } : {}
    };
  }
  function xr(s) {
    if (s && !he(s[1]))
      return {
        [s[0]]: s[1].data
      };
    if (g.actionData)
      return Object.keys(g.actionData).length === 0 ? null : g.actionData;
  }
  function Za(s) {
    return s.forEach((d) => {
      let h = g.fetchers.get(d.key), b = ut(
        void 0,
        h ? h.data : void 0
      );
      g.fetchers.set(d.key, b);
    }), new Map(g.fetchers);
  }
  async function en(s, d, h, b) {
    Me(s);
    let R = (b && b.flushSync) === !0, N = u || i, L = tr(
      g.location,
      g.matches,
      c,
      h,
      d,
      b?.relative
    ), C = Fe(N, L, c), D = Ct(C, N, L);
    if (D.active && D.matches && (C = D.matches), !C) {
      De(
        s,
        d,
        be(404, { pathname: L }),
        { flushSync: R }
      );
      return;
    }
    let { path: k, submission: _, error: M } = Ar(
      !0,
      L,
      b
    );
    if (M) {
      De(s, d, M, { flushSync: R });
      return;
    }
    let j = e.getContext ? await e.getContext() : new Fr(), A = (b && b.preventScrollReset) === !0;
    if (_ && se(_.formMethod)) {
      await tn(
        s,
        d,
        k,
        C,
        j,
        D.active,
        R,
        A,
        _,
        b && b.unstable_defaultShouldRevalidate
      );
      return;
    }
    ye.set(s, { routeId: d, path: k }), await rn(
      s,
      d,
      k,
      C,
      j,
      D.active,
      R,
      A,
      _
    );
  }
  async function tn(s, d, h, b, R, N, L, C, D, k) {
    Wt(), ye.delete(s);
    let _ = g.fetchers.get(s);
    Ne(s, Vo(D, _), {
      flushSync: L
    });
    let M = new AbortController(), j = qe(
      e.history,
      h,
      M.signal,
      D
    );
    if (N) {
      let Q = await Nt(
        b,
        new URL(j.url).pathname,
        j.signal,
        s
      );
      if (Q.type === "aborted")
        return;
      if (Q.type === "error") {
        De(s, d, Q.error, { flushSync: L });
        return;
      } else if (Q.matches)
        b = Q.matches;
      else {
        De(
          s,
          d,
          be(404, { pathname: h }),
          { flushSync: L }
        );
        return;
      }
    }
    let A = Ut(b, h);
    if (!A.route.action && !A.route.lazy) {
      let Q = be(405, {
        method: D.formMethod,
        pathname: h,
        routeId: d
      });
      De(s, d, Q, { flushSync: L });
      return;
    }
    W.set(s, M);
    let oe = re, ae = Ze(
      n,
      l,
      j,
      b,
      A,
      a,
      R
    ), ue = await nt(
      j,
      ae,
      R,
      s
    ), V = ue[A.route.id];
    if (!V) {
      for (let Q of ae)
        if (ue[Q.route.id]) {
          V = ue[Q.route.id];
          break;
        }
    }
    if (j.signal.aborted) {
      W.get(s) === M && W.delete(s);
      return;
    }
    if (fe.has(s)) {
      if (Ge(V) || he(V)) {
        Ne(s, ke(void 0));
        return;
      }
    } else {
      if (Ge(V))
        if (W.delete(s), ce > oe) {
          Ne(s, ke(void 0));
          return;
        } else
          return de.add(s), Ne(s, ut(D)), Be(j, V, !1, {
            fetcherSubmission: D,
            preventScrollReset: C
          });
      if (he(V)) {
        De(s, d, V.error);
        return;
      }
    }
    let ve = g.navigation.location || g.location, He = qe(
      e.history,
      ve,
      M.signal
    ), ot = u || i, Oe = g.navigation.state !== "idle" ? Fe(ot, g.navigation.location, c) : g.matches;
    U(Oe, "Didn't find any matches after fetcher action");
    let Pe = ++re;
    Ee.set(s, Pe);
    let Kt = ut(D, V.data);
    g.fetchers.set(s, Kt);
    let { dsMatches: lt, revalidatingFetchers: We } = Br(
      He,
      R,
      n,
      l,
      e.history,
      g,
      Oe,
      D,
      ve,
      a,
      !1,
      X,
      pe,
      fe,
      ye,
      de,
      ot,
      c,
      e.patchRoutesOnNavigation != null,
      [A.route.id, V],
      k
    );
    We.filter((Q) => Q.key !== s).forEach((Q) => {
      let kt = Q.key, Tr = g.fetchers.get(kt), dn = ut(
        void 0,
        Tr ? Tr.data : void 0
      );
      g.fetchers.set(kt, dn), Me(kt), Q.controller && W.set(kt, Q.controller);
    }), le({ fetchers: new Map(g.fetchers) });
    let Dt = () => We.forEach((Q) => Me(Q.key));
    M.signal.addEventListener(
      "abort",
      Dt
    );
    let { loaderResults: Mt, fetcherResults: I } = await Rr(
      lt,
      We,
      He,
      R
    );
    if (M.signal.aborted)
      return;
    if (M.signal.removeEventListener(
      "abort",
      Dt
    ), Ee.delete(s), W.delete(s), We.forEach((Q) => W.delete(Q.key)), g.fetchers.has(s)) {
      let Q = ke(V.data);
      g.fetchers.set(s, Q);
    }
    let ie = Ot(Mt);
    if (ie)
      return Be(
        He,
        ie.result,
        !1,
        { preventScrollReset: C }
      );
    if (ie = Ot(I), ie)
      return de.add(ie.key), Be(
        He,
        ie.result,
        !1,
        { preventScrollReset: C }
      );
    let { loaderData: Xe, errors: Ve } = Jr(
      g,
      Oe,
      Mt,
      void 0,
      We,
      I
    );
    Lr(Pe), g.navigation.state === "loading" && Pe > ce ? (U(O, "Expected pending action"), Y && Y.abort(), Je(g.navigation.location, {
      matches: Oe,
      loaderData: Xe,
      errors: Ve,
      fetchers: new Map(g.fetchers)
    })) : (le({
      errors: Ve,
      loaderData: Xr(
        g.loaderData,
        Xe,
        Oe,
        Ve
      ),
      fetchers: new Map(g.fetchers)
    }), X = !1);
  }
  async function rn(s, d, h, b, R, N, L, C, D) {
    let k = g.fetchers.get(s);
    Ne(
      s,
      ut(
        D,
        k ? k.data : void 0
      ),
      { flushSync: L }
    );
    let _ = new AbortController(), M = qe(
      e.history,
      h,
      _.signal
    );
    if (N) {
      let V = await Nt(
        b,
        new URL(M.url).pathname,
        M.signal,
        s
      );
      if (V.type === "aborted")
        return;
      if (V.type === "error") {
        De(s, d, V.error, { flushSync: L });
        return;
      } else if (V.matches)
        b = V.matches;
      else {
        De(
          s,
          d,
          be(404, { pathname: h }),
          { flushSync: L }
        );
        return;
      }
    }
    let j = Ut(b, h);
    W.set(s, _);
    let A = re, oe = Ze(
      n,
      l,
      M,
      b,
      j,
      a,
      R
    ), ue = (await nt(
      M,
      oe,
      R,
      s
    ))[j.route.id];
    if (W.get(s) === _ && W.delete(s), !M.signal.aborted) {
      if (fe.has(s)) {
        Ne(s, ke(void 0));
        return;
      }
      if (Ge(ue))
        if (ce > A) {
          Ne(s, ke(void 0));
          return;
        } else {
          de.add(s), await Be(M, ue, !1, {
            preventScrollReset: C
          });
          return;
        }
      if (he(ue)) {
        De(s, d, ue.error);
        return;
      }
      Ne(s, ke(ue.data));
    }
  }
  async function Be(s, d, h, {
    submission: b,
    fetcherSubmission: R,
    preventScrollReset: N,
    replace: L
  } = {}) {
    h || (H?.resolve(), H = null), d.response.headers.has("X-Remix-Revalidate") && (X = !0);
    let C = d.response.headers.get("Location");
    U(C, "Expected a Location header on the redirect Response"), C = Kr(
      C,
      new URL(s.url),
      c,
      e.history
    );
    let D = yt(g.location, C, {
      _isRedirect: !0
    });
    if (r) {
      let oe = !1;
      if (d.response.headers.has("X-Remix-Reload-Document"))
        oe = !0;
      else if (ir(C)) {
        const ae = fa(C, !0);
        oe = // Hard reload if it's an absolute URL to a new origin
        ae.origin !== t.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        we(ae.pathname, c) == null;
      }
      if (oe) {
        L ? t.location.replace(C) : t.location.assign(C);
        return;
      }
    }
    Y = null;
    let k = L === !0 || d.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: _, formAction: M, formEncType: j } = g.navigation;
    !b && !R && _ && M && j && (b = Zr(g.navigation));
    let A = b || R;
    if (wo.has(d.response.status) && A && se(A.formMethod))
      await Ae(k, D, {
        submission: {
          ...A,
          formAction: C
        },
        // Preserve these flags across redirects
        preventScrollReset: N || J,
        enableViewTransition: h ? te : void 0
      });
    else {
      let oe = qt(
        D,
        b
      );
      await Ae(k, D, {
        overrideNavigation: oe,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission: R,
        // Preserve these flags across redirects
        preventScrollReset: N || J,
        enableViewTransition: h ? te : void 0
      });
    }
  }
  async function nt(s, d, h, b) {
    let R, N = {};
    try {
      R = await Mo(
        m,
        s,
        d,
        b,
        h,
        !1
      );
    } catch (L) {
      return d.filter((C) => C.shouldLoad).forEach((C) => {
        N[C.route.id] = {
          type: "error",
          error: L
        };
      }), N;
    }
    if (s.signal.aborted)
      return N;
    if (!se(s.method))
      for (let L of d) {
        if (R[L.route.id]?.type === "error")
          break;
        !R.hasOwnProperty(L.route.id) && !g.loaderData.hasOwnProperty(L.route.id) && (!g.errors || !g.errors.hasOwnProperty(L.route.id)) && L.shouldCallHandler() && (R[L.route.id] = {
          type: "error",
          result: new Error(
            `No result returned from dataStrategy for route ${L.route.id}`
          )
        });
      }
    for (let [L, C] of Object.entries(R))
      if (jo(C)) {
        let D = C.result;
        N[L] = {
          type: "redirect",
          response: Oo(
            D,
            s,
            L,
            d,
            c
          )
        };
      } else
        N[L] = await _o(C);
    return N;
  }
  async function Rr(s, d, h, b) {
    let R = nt(
      h,
      s,
      b,
      null
    ), N = Promise.all(
      d.map(async (D) => {
        if (D.matches && D.match && D.request && D.controller) {
          let _ = (await nt(
            D.request,
            D.matches,
            b,
            D.key
          ))[D.match.route.id];
          return { [D.key]: _ };
        } else
          return Promise.resolve({
            [D.key]: {
              type: "error",
              error: be(404, {
                pathname: D.path
              })
            }
          });
      })
    ), L = await R, C = (await N).reduce(
      (D, k) => Object.assign(D, k),
      {}
    );
    return {
      loaderResults: L,
      fetcherResults: C
    };
  }
  function Wt() {
    X = !0, ye.forEach((s, d) => {
      W.has(d) && pe.add(d), Me(d);
    });
  }
  function Ne(s, d, h = {}) {
    g.fetchers.set(s, d), le(
      { fetchers: new Map(g.fetchers) },
      { flushSync: (h && h.flushSync) === !0 }
    );
  }
  function De(s, d, h, b = {}) {
    let R = Ue(g.matches, d);
    Vt(s), le(
      {
        errors: {
          [R.route.id]: h
        },
        fetchers: new Map(g.fetchers)
      },
      { flushSync: (b && b.flushSync) === !0 }
    );
  }
  function Er(s) {
    return ge.set(s, (ge.get(s) || 0) + 1), fe.has(s) && fe.delete(s), g.fetchers.get(s) || xo;
  }
  function an(s, d) {
    Me(s, d?.reason), Ne(s, ke(null));
  }
  function Vt(s) {
    let d = g.fetchers.get(s);
    W.has(s) && !(d && d.state === "loading" && Ee.has(s)) && Me(s), ye.delete(s), Ee.delete(s), de.delete(s), fe.delete(s), pe.delete(s), g.fetchers.delete(s);
  }
  function nn(s) {
    let d = (ge.get(s) || 0) - 1;
    d <= 0 ? (ge.delete(s), fe.add(s)) : ge.set(s, d), le({ fetchers: new Map(g.fetchers) });
  }
  function Me(s, d) {
    let h = W.get(s);
    h && (h.abort(d), W.delete(s));
  }
  function Sr(s) {
    for (let d of s) {
      let h = Er(d), b = ke(h.data);
      g.fetchers.set(d, b);
    }
  }
  function Pr() {
    let s = [], d = !1;
    for (let h of de) {
      let b = g.fetchers.get(h);
      U(b, `Expected fetcher: ${h}`), b.state === "loading" && (de.delete(h), s.push(h), d = !0);
    }
    return Sr(s), d;
  }
  function Lr(s) {
    let d = [];
    for (let [h, b] of Ee)
      if (b < s) {
        let R = g.fetchers.get(h);
        U(R, `Expected fetcher: ${h}`), R.state === "loading" && (Me(h), Ee.delete(h), d.push(h));
      }
    return Sr(d), d.length > 0;
  }
  function on(s, d) {
    let h = g.blockers.get(s) || st;
    return je.get(s) !== d && je.set(s, d), h;
  }
  function Cr(s) {
    g.blockers.delete(s), je.delete(s);
  }
  function Lt(s, d) {
    let h = g.blockers.get(s) || st;
    U(
      h.state === "unblocked" && d.state === "blocked" || h.state === "blocked" && d.state === "blocked" || h.state === "blocked" && d.state === "proceeding" || h.state === "blocked" && d.state === "unblocked" || h.state === "proceeding" && d.state === "unblocked",
      `Invalid blocker state transition: ${h.state} -> ${d.state}`
    );
    let b = new Map(g.blockers);
    b.set(s, d), le({ blockers: b });
  }
  function Nr({
    currentLocation: s,
    nextLocation: d,
    historyAction: h
  }) {
    if (je.size === 0)
      return;
    je.size > 1 && Z(!1, "A router only supports one blocker at a time");
    let b = Array.from(je.entries()), [R, N] = b[b.length - 1], L = g.blockers.get(R);
    if (!(L && L.state === "proceeding") && N({ currentLocation: s, nextLocation: d, historyAction: h }))
      return R;
  }
  function Gt(s) {
    let d = be(404, { pathname: s }), h = u || i, { matches: b, route: R } = _t(h);
    return { notFoundMatches: b, route: R, error: d };
  }
  function ln(s, d, h) {
    if (v = s, P = d, E = h || null, !w && g.navigation === Xt) {
      w = !0;
      let b = Mr(g.location, g.matches);
      b != null && le({ restoreScrollPosition: b });
    }
    return () => {
      v = null, P = null, E = null;
    };
  }
  function Dr(s, d) {
    return E && E(
      s,
      d.map((b) => Gn(b, g.loaderData))
    ) || s.key;
  }
  function sn(s, d) {
    if (v && P) {
      let h = Dr(s, d);
      v[h] = P();
    }
  }
  function Mr(s, d) {
    if (v) {
      let h = Dr(s, d), b = v[h];
      if (typeof b == "number")
        return b;
    }
    return null;
  }
  function Ct(s, d, h) {
    if (e.patchRoutesOnNavigation)
      if (s) {
        if (Object.keys(s[0].params).length > 0)
          return { active: !0, matches: ht(
            d,
            h,
            c,
            !0
          ) };
      } else
        return { active: !0, matches: ht(
          d,
          h,
          c,
          !0
        ) || [] };
    return { active: !1, matches: null };
  }
  async function Nt(s, d, h, b) {
    if (!e.patchRoutesOnNavigation)
      return { type: "success", matches: s };
    let R = s;
    for (; ; ) {
      let N = u == null, L = u || i, C = l;
      try {
        await e.patchRoutesOnNavigation({
          signal: h,
          path: d,
          matches: R,
          fetcherKey: b,
          patch: (_, M) => {
            h.aborted || Hr(
              _,
              M,
              L,
              C,
              n,
              !1
            );
          }
        });
      } catch (_) {
        return { type: "error", error: _, partialMatches: R };
      } finally {
        N && !h.aborted && (i = [...i]);
      }
      if (h.aborted)
        return { type: "aborted" };
      let D = Fe(L, d, c), k = null;
      if (D) {
        if (Object.keys(D[0].params).length === 0)
          return { type: "success", matches: D };
        if (k = ht(
          L,
          d,
          c,
          !0
        ), !(k && R.length < k.length && kr(
          R,
          k.slice(0, R.length)
        )))
          return { type: "success", matches: D };
      }
      if (k || (k = ht(
        L,
        d,
        c,
        !0
      )), !k || kr(R, k))
        return { type: "success", matches: null };
      R = k;
    }
  }
  function kr(s, d) {
    return s.length === d.length && s.every((h, b) => h.route.id === d[b].route.id);
  }
  function un(s) {
    l = {}, u = gt(
      s,
      n,
      void 0,
      l
    );
  }
  function cn(s, d, h = !1) {
    let b = u == null;
    Hr(
      s,
      d,
      u || i,
      l,
      n,
      h
    ), b && (i = [...i], le({}));
  }
  return q = {
    get basename() {
      return c;
    },
    get future() {
      return f;
    },
    get state() {
      return g;
    },
    get routes() {
      return i;
    },
    get window() {
      return t;
    },
    initialize: Ka,
    subscribe: Ja,
    enableScrollRestoration: ln,
    navigate: wr,
    fetch: en,
    revalidate: Xa,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (s) => e.history.createHref(s),
    encodeLocation: (s) => e.history.encodeLocation(s),
    getFetcher: Er,
    resetFetcher: an,
    deleteFetcher: nn,
    dispose: Ya,
    getBlocker: on,
    deleteBlocker: Cr,
    patchRoutes: cn,
    _internalFetchControllers: W,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: un,
    _internalSetStateDoNotUseOrYouWillBreakYourApp(s) {
      le(s);
    }
  }, e.unstable_instrumentations && (q = fo(
    q,
    e.unstable_instrumentations.map((s) => s.router).filter(Boolean)
  )), q;
}
function So(e) {
  return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function tr(e, t, r, a, o, n) {
  let l, i;
  if (o) {
    l = [];
    for (let c of t)
      if (l.push(c), c.route.id === o) {
        i = c;
        break;
      }
  } else
    l = t, i = t[t.length - 1];
  let u = ur(
    a || ".",
    sr(l),
    we(e.pathname, r) || e.pathname,
    n === "path"
  );
  if (a == null && (u.search = e.search, u.hash = e.hash), (a == null || a === "" || a === ".") && i) {
    let c = fr(u.search);
    if (i.route.index && !c)
      u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index";
    else if (!i.route.index && c) {
      let m = new URLSearchParams(u.search), f = m.getAll("index");
      m.delete("index"), f.filter((p) => p).forEach((p) => m.append("index", p));
      let y = m.toString();
      u.search = y ? `?${y}` : "";
    }
  }
  return r !== "/" && (u.pathname = oo({ basename: r, pathname: u.pathname })), Ce(u);
}
function Ar(e, t, r) {
  if (!r || !So(r))
    return { path: t };
  if (r.formMethod && !Ho(r.formMethod))
    return {
      path: t,
      error: be(405, { method: r.formMethod })
    };
  let a = () => ({
    path: t,
    error: be(400, { type: "invalid-body" })
  }), n = (r.formMethod || "get").toUpperCase(), l = Da(t);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!se(n))
        return a();
      let f = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(r.body.entries()).reduce(
          (y, [p, v]) => `${y}${p}=${v}
`,
          ""
        )
      ) : String(r.body);
      return {
        path: t,
        submission: {
          formMethod: n,
          formAction: l,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: f
        }
      };
    } else if (r.formEncType === "application/json") {
      if (!se(n))
        return a();
      try {
        let f = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: t,
          submission: {
            formMethod: n,
            formAction: l,
            formEncType: r.formEncType,
            formData: void 0,
            json: f,
            text: void 0
          }
        };
      } catch {
        return a();
      }
    }
  }
  U(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let i, u;
  if (r.formData)
    i = nr(r.formData), u = r.formData;
  else if (r.body instanceof FormData)
    i = nr(r.body), u = r.body;
  else if (r.body instanceof URLSearchParams)
    i = r.body, u = Yr(i);
  else if (r.body == null)
    i = new URLSearchParams(), u = new FormData();
  else
    try {
      i = new URLSearchParams(r.body), u = Yr(i);
    } catch {
      return a();
    }
  let c = {
    formMethod: n,
    formAction: l,
    formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0
  };
  if (se(c.formMethod))
    return { path: t, submission: c };
  let m = $e(t);
  return e && m.search && fr(m.search) && i.append("index", ""), m.search = `?${i}`, { path: Ce(m), submission: c };
}
function Br(e, t, r, a, o, n, l, i, u, c, m, f, y, p, v, E, P, w, x, T, K) {
  let z = T ? he(T[1]) ? T[1].error : T[1].data : void 0, q = o.createURL(n.location), g = o.createURL(u), O;
  if (m && n.errors) {
    let G = Object.keys(n.errors)[0];
    O = l.findIndex((X) => X.route.id === G);
  } else if (T && he(T[1])) {
    let G = T[0];
    O = l.findIndex((X) => X.route.id === G) - 1;
  }
  let H = T ? T[1].statusCode : void 0, J = H && H >= 400, Y = {
    currentUrl: q,
    currentParams: n.matches[0]?.params || {},
    nextUrl: g,
    nextParams: l[0].params,
    ...i,
    actionResult: z,
    actionStatus: H
  }, te = xt(l), Re = l.map((G, X) => {
    let { route: pe } = G, W = null;
    if (O != null && X > O ? W = !1 : pe.lazy ? W = !0 : cr(pe) ? m ? W = rr(
      pe,
      n.loaderData,
      n.errors
    ) : Po(n.loaderData, n.matches[X], G) && (W = !0) : W = !1, W !== null)
      return ar(
        r,
        a,
        e,
        te,
        G,
        c,
        t,
        W
      );
    let re = !1;
    typeof K == "boolean" ? re = K : J ? re = !1 : (f || q.pathname + q.search === g.pathname + g.search || q.search !== g.search || Lo(n.matches[X], G)) && (re = !0);
    let ce = {
      ...Y,
      defaultShouldRevalidate: re
    }, Ee = mt(G, ce);
    return ar(
      r,
      a,
      e,
      te,
      G,
      c,
      t,
      Ee,
      ce,
      K
    );
  }), ee = [];
  return v.forEach((G, X) => {
    if (m || !l.some((ge) => ge.route.id === G.routeId) || p.has(X))
      return;
    let pe = n.fetchers.get(X), W = pe && pe.state !== "idle" && pe.data === void 0, re = Fe(P, G.path, w);
    if (!re) {
      if (x && W)
        return;
      ee.push({
        key: X,
        routeId: G.routeId,
        path: G.path,
        matches: null,
        match: null,
        request: null,
        controller: null
      });
      return;
    }
    if (E.has(X))
      return;
    let ce = Ut(re, G.path), Ee = new AbortController(), de = qe(
      o,
      G.path,
      Ee.signal
    ), ye = null;
    if (y.has(X))
      y.delete(X), ye = Ze(
        r,
        a,
        de,
        re,
        ce,
        c,
        t
      );
    else if (W)
      f && (ye = Ze(
        r,
        a,
        de,
        re,
        ce,
        c,
        t
      ));
    else {
      let ge;
      typeof K == "boolean" ? ge = K : J ? ge = !1 : ge = f;
      let fe = {
        ...Y,
        defaultShouldRevalidate: ge
      };
      mt(ce, fe) && (ye = Ze(
        r,
        a,
        de,
        re,
        ce,
        c,
        t,
        fe
      ));
    }
    ye && ee.push({
      key: X,
      routeId: G.routeId,
      path: G.path,
      matches: ye,
      match: ce,
      request: de,
      controller: Ee
    });
  }), { dsMatches: Re, revalidatingFetchers: ee };
}
function cr(e) {
  return e.loader != null || e.middleware != null && e.middleware.length > 0;
}
function rr(e, t, r) {
  if (e.lazy)
    return !0;
  if (!cr(e))
    return !1;
  let a = t != null && e.id in t, o = r != null && r[e.id] !== void 0;
  return !a && o ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !a && !o;
}
function Po(e, t, r) {
  let a = (
    // [a] -> [a, b]
    !t || // [a, b] -> [a, c]
    r.route.id !== t.route.id
  ), o = !e.hasOwnProperty(r.route.id);
  return a || o;
}
function Lo(e, t) {
  let r = e.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    e.pathname !== t.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    r != null && r.endsWith("*") && e.params["*"] !== t.params["*"]
  );
}
function mt(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean")
      return r;
  }
  return t.defaultShouldRevalidate;
}
function Hr(e, t, r, a, o, n) {
  let l;
  if (e) {
    let c = a[e];
    U(
      c,
      `No route found to patch children into: routeId = ${e}`
    ), c.children || (c.children = []), l = c.children;
  } else
    l = r;
  let i = [], u = [];
  if (t.forEach((c) => {
    let m = l.find(
      (f) => Sa(c, f)
    );
    m ? u.push({ existingRoute: m, newRoute: c }) : i.push(c);
  }), i.length > 0) {
    let c = gt(
      i,
      o,
      [e || "_", "patch", String(l?.length || "0")],
      a
    );
    l.push(...c);
  }
  if (n && u.length > 0)
    for (let c = 0; c < u.length; c++) {
      let { existingRoute: m, newRoute: f } = u[c], y = m, [p] = gt(
        [f],
        o,
        [],
        // Doesn't matter for mutated routes since they already have an id
        {},
        // Don't touch the manifest here since we're updating in place
        !0
      );
      Object.assign(y, {
        element: p.element ? p.element : y.element,
        errorElement: p.errorElement ? p.errorElement : y.errorElement,
        hydrateFallbackElement: p.hydrateFallbackElement ? p.hydrateFallbackElement : y.hydrateFallbackElement
      });
    }
}
function Sa(e, t) {
  return "id" in e && "id" in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children.every(
    (r, a) => t.children?.some((o) => Sa(r, o))
  ) : !1;
}
var Wr = /* @__PURE__ */ new WeakMap(), Pa = ({
  key: e,
  route: t,
  manifest: r,
  mapRouteProperties: a
}) => {
  let o = r[t.id];
  if (U(o, "No route found in manifest"), !o.lazy || typeof o.lazy != "object")
    return;
  let n = o.lazy[e];
  if (!n)
    return;
  let l = Wr.get(o);
  l || (l = {}, Wr.set(o, l));
  let i = l[e];
  if (i)
    return i;
  let u = (async () => {
    let c = Bn(e), f = o[e] !== void 0 && e !== "hasErrorBoundary";
    if (c)
      Z(
        !c,
        "Route property " + e + " is not a supported lazy route property. This property will be ignored."
      ), l[e] = Promise.resolve();
    else if (f)
      Z(
        !1,
        `Route "${o.id}" has a static property "${e}" defined. The lazy property will be ignored.`
      );
    else {
      let y = await n();
      y != null && (Object.assign(o, { [e]: y }), Object.assign(o, a(o)));
    }
    typeof o.lazy == "object" && (o.lazy[e] = void 0, Object.values(o.lazy).every((y) => y === void 0) && (o.lazy = void 0));
  })();
  return l[e] = u, u;
}, Vr = /* @__PURE__ */ new WeakMap();
function Co(e, t, r, a, o) {
  let n = r[e.id];
  if (U(n, "No route found in manifest"), !e.lazy)
    return {
      lazyRoutePromise: void 0,
      lazyHandlerPromise: void 0
    };
  if (typeof e.lazy == "function") {
    let m = Vr.get(n);
    if (m)
      return {
        lazyRoutePromise: m,
        lazyHandlerPromise: m
      };
    let f = (async () => {
      U(
        typeof e.lazy == "function",
        "No lazy route function found"
      );
      let y = await e.lazy(), p = {};
      for (let v in y) {
        let E = y[v];
        if (E === void 0)
          continue;
        let P = Wn(v), x = n[v] !== void 0 && // This property isn't static since it should always be updated based
        // on the route updates
        v !== "hasErrorBoundary";
        P ? Z(
          !P,
          "Route property " + v + " is not a supported property to be returned from a lazy route function. This property will be ignored."
        ) : x ? Z(
          !x,
          `Route "${n.id}" has a static property "${v}" defined but its lazy function is also returning a value for this property. The lazy route property "${v}" will be ignored.`
        ) : p[v] = E;
      }
      Object.assign(n, p), Object.assign(n, {
        // To keep things framework agnostic, we use the provided `mapRouteProperties`
        // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
        // since the logic will differ between frameworks.
        ...a(n),
        lazy: void 0
      });
    })();
    return Vr.set(n, f), f.catch(() => {
    }), {
      lazyRoutePromise: f,
      lazyHandlerPromise: f
    };
  }
  let l = Object.keys(e.lazy), i = [], u;
  for (let m of l) {
    if (o && o.includes(m))
      continue;
    let f = Pa({
      key: m,
      route: e,
      manifest: r,
      mapRouteProperties: a
    });
    f && (i.push(f), m === t && (u = f));
  }
  let c = i.length > 0 ? Promise.all(i).then(() => {
  }) : void 0;
  return c?.catch(() => {
  }), u?.catch(() => {
  }), {
    lazyRoutePromise: c,
    lazyHandlerPromise: u
  };
}
async function Gr(e) {
  let t = e.matches.filter((o) => o.shouldLoad), r = {};
  return (await Promise.all(t.map((o) => o.resolve()))).forEach((o, n) => {
    r[t[n].route.id] = o;
  }), r;
}
async function No(e) {
  return e.matches.some((t) => t.route.middleware) ? La(e, () => Gr(e)) : Gr(e);
}
function La(e, t) {
  return Do(
    e,
    t,
    (a) => {
      if (Bo(a))
        throw a;
      return a;
    },
    $o,
    r
  );
  function r(a, o, n) {
    if (n)
      return Promise.resolve(
        Object.assign(n.value, {
          [o]: { type: "error", result: a }
        })
      );
    {
      let { matches: l } = e, i = Math.min(
        // Throwing route
        Math.max(
          l.findIndex((c) => c.route.id === o),
          0
        ),
        // or the shallowest route that needs to load data
        Math.max(
          l.findIndex((c) => c.shouldCallHandler()),
          0
        )
      ), u = Ue(
        l,
        l[i].route.id
      ).route.id;
      return Promise.resolve({
        [u]: { type: "error", result: a }
      });
    }
  }
}
async function Do(e, t, r, a, o) {
  let { matches: n, request: l, params: i, context: u, unstable_pattern: c } = e, m = n.flatMap(
    (y) => y.route.middleware ? y.route.middleware.map((p) => [y.route.id, p]) : []
  );
  return await Ca(
    {
      request: l,
      params: i,
      context: u,
      unstable_pattern: c
    },
    m,
    t,
    r,
    a,
    o
  );
}
async function Ca(e, t, r, a, o, n, l = 0) {
  let { request: i } = e;
  if (i.signal.aborted)
    throw i.signal.reason ?? new Error(`Request aborted: ${i.method} ${i.url}`);
  let u = t[l];
  if (!u)
    return await r();
  let [c, m] = u, f, y = async () => {
    if (f)
      throw new Error("You may only call `next()` once per middleware");
    try {
      return f = { value: await Ca(
        e,
        t,
        r,
        a,
        o,
        n,
        l + 1
      ) }, f.value;
    } catch (p) {
      return f = { value: await n(p, c, f) }, f.value;
    }
  };
  try {
    let p = await m(e, y), v = p != null ? a(p) : void 0;
    return o(v) ? v : f ? v ?? f.value : (f = { value: await y() }, f.value);
  } catch (p) {
    return await n(p, c, f);
  }
}
function Na(e, t, r, a, o) {
  let n = Pa({
    key: "middleware",
    route: a.route,
    manifest: t,
    mapRouteProperties: e
  }), l = Co(
    a.route,
    se(r.method) ? "action" : "loader",
    t,
    e,
    o
  );
  return {
    middleware: n,
    route: l.lazyRoutePromise,
    handler: l.lazyHandlerPromise
  };
}
function ar(e, t, r, a, o, n, l, i, u = null, c) {
  let m = !1, f = Na(
    e,
    t,
    r,
    o,
    n
  );
  return {
    ...o,
    _lazyPromises: f,
    shouldLoad: i,
    shouldRevalidateArgs: u,
    shouldCallHandler(y) {
      return m = !0, u ? typeof c == "boolean" ? mt(o, {
        ...u,
        defaultShouldRevalidate: c
      }) : typeof y == "boolean" ? mt(o, {
        ...u,
        defaultShouldRevalidate: y
      }) : mt(o, u) : i;
    },
    resolve(y) {
      let { lazy: p, loader: v, middleware: E } = o.route, P = m || i || y && !se(r.method) && (p || v), w = E && E.length > 0 && !v && !p;
      return P && (se(r.method) || !w) ? ko({
        request: r,
        unstable_pattern: a,
        match: o,
        lazyHandlerPromise: f?.handler,
        lazyRoutePromise: f?.route,
        handlerOverride: y,
        scopedContext: l
      }) : Promise.resolve({ type: "data", result: void 0 });
    }
  };
}
function Ze(e, t, r, a, o, n, l, i = null) {
  return a.map((u) => u.route.id !== o.route.id ? {
    ...u,
    shouldLoad: !1,
    shouldRevalidateArgs: i,
    shouldCallHandler: () => !1,
    _lazyPromises: Na(
      e,
      t,
      r,
      u,
      n
    ),
    resolve: () => Promise.resolve({ type: "data", result: void 0 })
  } : ar(
    e,
    t,
    r,
    xt(a),
    u,
    n,
    l,
    !0,
    i
  ));
}
async function Mo(e, t, r, a, o, n) {
  r.some((c) => c._lazyPromises?.middleware) && await Promise.all(r.map((c) => c._lazyPromises?.middleware));
  let l = {
    request: t,
    unstable_pattern: xt(r),
    params: r[0].params,
    context: o,
    matches: r
  }, u = await e({
    ...l,
    fetcherKey: a,
    runClientMiddleware: (c) => {
      let m = l;
      return La(m, () => c({
        ...m,
        fetcherKey: a,
        runClientMiddleware: () => {
          throw new Error(
            "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler"
          );
        }
      }));
    }
  });
  try {
    await Promise.all(
      r.flatMap((c) => [
        c._lazyPromises?.handler,
        c._lazyPromises?.route
      ])
    );
  } catch {
  }
  return u;
}
async function ko({
  request: e,
  unstable_pattern: t,
  match: r,
  lazyHandlerPromise: a,
  lazyRoutePromise: o,
  handlerOverride: n,
  scopedContext: l
}) {
  let i, u, c = se(e.method), m = c ? "action" : "loader", f = (y) => {
    let p, v = new Promise((w, x) => p = x);
    u = () => p(), e.signal.addEventListener("abort", u);
    let E = (w) => typeof y != "function" ? Promise.reject(
      new Error(
        `You cannot call the handler for a route which defines a boolean "${m}" [routeId: ${r.route.id}]`
      )
    ) : y(
      {
        request: e,
        unstable_pattern: t,
        params: r.params,
        context: l
      },
      ...w !== void 0 ? [w] : []
    ), P = (async () => {
      try {
        return { type: "data", result: await (n ? n((x) => E(x)) : E()) };
      } catch (w) {
        return { type: "error", result: w };
      }
    })();
    return Promise.race([P, v]);
  };
  try {
    let y = c ? r.route.action : r.route.loader;
    if (a || o)
      if (y) {
        let p, [v] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          f(y).catch((E) => {
            p = E;
          }),
          // Ensure all lazy route promises are resolved before continuing
          a,
          o
        ]);
        if (p !== void 0)
          throw p;
        i = v;
      } else {
        await a;
        let p = c ? r.route.action : r.route.loader;
        if (p)
          [i] = await Promise.all([f(p), o]);
        else if (m === "action") {
          let v = new URL(e.url), E = v.pathname + v.search;
          throw be(405, {
            method: e.method,
            pathname: E,
            routeId: r.route.id
          });
        } else
          return { type: "data", result: void 0 };
      }
    else if (y)
      i = await f(y);
    else {
      let p = new URL(e.url), v = p.pathname + p.search;
      throw be(404, {
        pathname: v
      });
    }
  } catch (y) {
    return { type: "error", result: y };
  } finally {
    u && e.signal.removeEventListener("abort", u);
  }
  return i;
}
async function To(e) {
  let t = e.headers.get("Content-Type");
  return t && /\bapplication\/json\b/.test(t) ? e.body == null ? null : e.json() : e.text();
}
async function _o(e) {
  let { result: t, type: r } = e;
  if (dr(t)) {
    let a;
    try {
      a = await To(t);
    } catch (o) {
      return { type: "error", error: o };
    }
    return r === "error" ? {
      type: "error",
      error: new wt(t.status, t.statusText, a),
      statusCode: t.status,
      headers: t.headers
    } : {
      type: "data",
      data: a,
      statusCode: t.status,
      headers: t.headers
    };
  }
  return r === "error" ? Qr(t) ? t.data instanceof Error ? {
    type: "error",
    error: t.data,
    statusCode: t.init?.status,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : {
    type: "error",
    error: zo(t),
    statusCode: vt(t) ? t.status : void 0,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : {
    type: "error",
    error: t,
    statusCode: vt(t) ? t.status : void 0
  } : Qr(t) ? {
    type: "data",
    data: t.data,
    statusCode: t.init?.status,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : { type: "data", data: t };
}
function Oo(e, t, r, a, o) {
  let n = e.headers.get("Location");
  if (U(
    n,
    "Redirects returned/thrown from loaders/actions must have a Location header"
  ), !ir(n)) {
    let l = a.slice(
      0,
      a.findIndex((i) => i.route.id === r) + 1
    );
    n = tr(
      new URL(t.url),
      l,
      o,
      n
    ), e.headers.set("Location", n);
  }
  return e;
}
function Kr(e, t, r, a) {
  let o = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    // eslint-disable-next-line no-script-url
    "javascript:"
  ];
  if (ir(e)) {
    let n = e, l = n.startsWith("//") ? new URL(t.protocol + n) : new URL(n);
    if (o.includes(l.protocol))
      throw new Error("Invalid redirect location");
    let i = we(l.pathname, r) != null;
    if (l.origin === t.origin && i)
      return l.pathname + l.search + l.hash;
  }
  try {
    let n = a.createURL(e);
    if (o.includes(n.protocol))
      throw new Error("Invalid redirect location");
  } catch {
  }
  return e;
}
function qe(e, t, r, a) {
  let o = e.createURL(Da(t)).toString(), n = { signal: r };
  if (a && se(a.formMethod)) {
    let { formMethod: l, formEncType: i } = a;
    n.method = l.toUpperCase(), i === "application/json" ? (n.headers = new Headers({ "Content-Type": i }), n.body = JSON.stringify(a.json)) : i === "text/plain" ? n.body = a.text : i === "application/x-www-form-urlencoded" && a.formData ? n.body = nr(a.formData) : n.body = a.formData;
  }
  return new Request(o, n);
}
function nr(e) {
  let t = new URLSearchParams();
  for (let [r, a] of e.entries())
    t.append(r, typeof a == "string" ? a : a.name);
  return t;
}
function Yr(e) {
  let t = new FormData();
  for (let [r, a] of e.entries())
    t.append(r, a);
  return t;
}
function Fo(e, t, r, a = !1, o = !1) {
  let n = {}, l = null, i, u = !1, c = {}, m = r && he(r[1]) ? r[1].error : void 0;
  return e.forEach((f) => {
    if (!(f.route.id in t))
      return;
    let y = f.route.id, p = t[y];
    if (U(
      !Ge(p),
      "Cannot handle redirect results in processLoaderData"
    ), he(p)) {
      let v = p.error;
      if (m !== void 0 && (v = m, m = void 0), l = l || {}, o)
        l[y] = v;
      else {
        let E = Ue(e, y);
        l[E.route.id] == null && (l[E.route.id] = v);
      }
      a || (n[y] = Ea), u || (u = !0, i = vt(p.error) ? p.error.status : 500), p.headers && (c[y] = p.headers);
    } else
      n[y] = p.data, p.statusCode && p.statusCode !== 200 && !u && (i = p.statusCode), p.headers && (c[y] = p.headers);
  }), m !== void 0 && r && (l = { [r[0]]: m }, r[2] && (n[r[2]] = void 0)), {
    loaderData: n,
    errors: l,
    statusCode: i || 200,
    loaderHeaders: c
  };
}
function Jr(e, t, r, a, o, n) {
  let { loaderData: l, errors: i } = Fo(
    t,
    r,
    a
  );
  return o.filter((u) => !u.matches || u.matches.some((c) => c.shouldLoad)).forEach((u) => {
    let { key: c, match: m, controller: f } = u;
    if (f && f.signal.aborted)
      return;
    let y = n[c];
    if (U(y, "Did not find corresponding fetcher result"), he(y)) {
      let p = Ue(e.matches, m?.route.id);
      i && i[p.route.id] || (i = {
        ...i,
        [p.route.id]: y.error
      }), e.fetchers.delete(c);
    } else if (Ge(y))
      U(!1, "Unhandled fetcher revalidation redirect");
    else {
      let p = ke(y.data);
      e.fetchers.set(c, p);
    }
  }), { loaderData: l, errors: i };
}
function Xr(e, t, r, a) {
  let o = Object.entries(t).filter(([, n]) => n !== Ea).reduce((n, [l, i]) => (n[l] = i, n), {});
  for (let n of r) {
    let l = n.route.id;
    if (!t.hasOwnProperty(l) && e.hasOwnProperty(l) && n.route.loader && (o[l] = e[l]), a && a.hasOwnProperty(l))
      break;
  }
  return o;
}
function qr(e) {
  return e ? he(e[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [e[0]]: e[1].data
    }
  } : {};
}
function Ue(e, t) {
  return (t ? e.slice(0, e.findIndex((a) => a.route.id === t) + 1) : [...e]).reverse().find((a) => a.route.hasErrorBoundary === !0) || e[0];
}
function _t(e) {
  let t = e.length === 1 ? e[0] : e.find((r) => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route: t
      }
    ],
    route: t
  };
}
function be(e, {
  pathname: t,
  routeId: r,
  method: a,
  type: o,
  message: n
} = {}) {
  let l = "Unknown Server Error", i = "Unknown @remix-run/router error";
  return e === 400 ? (l = "Bad Request", a && t && r ? i = `You made a ${a} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.` : o === "invalid-body" && (i = "Unable to encode submission body")) : e === 403 ? (l = "Forbidden", i = `Route "${r}" does not match URL "${t}"`) : e === 404 ? (l = "Not Found", i = `No route matches URL "${t}"`) : e === 405 && (l = "Method Not Allowed", a && t && r ? i = `You made a ${a.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.` : a && (i = `Invalid request method "${a.toUpperCase()}"`)), new wt(
    e || 500,
    l,
    new Error(i),
    !0
  );
}
function Ot(e) {
  let t = Object.entries(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let [a, o] = t[r];
    if (Ge(o))
      return { key: a, result: o };
  }
}
function Da(e) {
  let t = typeof e == "string" ? $e(e) : e;
  return Ce({ ...t, hash: "" });
}
function Uo(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}
function zo(e) {
  return new wt(
    e.init?.status ?? 500,
    e.init?.statusText ?? "Internal Server Error",
    e.data
  );
}
function $o(e) {
  return e != null && typeof e == "object" && Object.entries(e).every(
    ([t, r]) => typeof t == "string" && Io(r)
  );
}
function Io(e) {
  return e != null && typeof e == "object" && "type" in e && "result" in e && (e.type === "data" || e.type === "error");
}
function jo(e) {
  return dr(e.result) && xa.has(e.result.status);
}
function he(e) {
  return e.type === "error";
}
function Ge(e) {
  return (e && e.type) === "redirect";
}
function Qr(e) {
  return typeof e == "object" && e != null && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function dr(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function Ao(e) {
  return xa.has(e);
}
function Bo(e) {
  return dr(e) && Ao(e.status) && e.headers.has("Location");
}
function Ho(e) {
  return bo.has(e.toUpperCase());
}
function se(e) {
  return go.has(e.toUpperCase());
}
function fr(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ut(e, t) {
  let r = typeof t == "string" ? $e(t).search : t.search;
  if (e[e.length - 1].route.index && fr(r || ""))
    return e[e.length - 1];
  let a = ya(e);
  return a[a.length - 1];
}
function Zr(e) {
  let { formMethod: t, formAction: r, formEncType: a, text: o, formData: n, json: l } = e;
  if (!(!t || !r || !a)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: a,
        formData: void 0,
        json: void 0,
        text: o
      };
    if (n != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: a,
        formData: n,
        json: void 0,
        text: void 0
      };
    if (l !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: a,
        formData: void 0,
        json: l,
        text: void 0
      };
  }
}
function qt(e, t) {
  return t ? {
    state: "loading",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  } : {
    state: "loading",
    location: e,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function Wo(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  };
}
function ut(e, t) {
  return e ? {
    state: "loading",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t
  };
}
function Vo(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0
  };
}
function ke(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e
  };
}
function Go(e, t) {
  try {
    let r = e.sessionStorage.getItem(
      Ra
    );
    if (r) {
      let a = JSON.parse(r);
      for (let [o, n] of Object.entries(a || {}))
        n && Array.isArray(n) && t.set(o, new Set(n || []));
    }
  } catch {
  }
}
function Ko(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [a, o] of t)
      r[a] = [...o];
    try {
      e.sessionStorage.setItem(
        Ra,
        JSON.stringify(r)
      );
    } catch (a) {
      Z(
        !1,
        `Failed to save applied view transitions in sessionStorage (${a}).`
      );
    }
  }
}
function ea() {
  let e, t, r = new Promise((a, o) => {
    e = async (n) => {
      a(n);
      try {
        await r;
      } catch {
      }
    }, t = async (n) => {
      o(n);
      try {
        await r;
      } catch {
      }
    };
  });
  return {
    promise: r,
    //@ts-ignore
    resolve: e,
    //@ts-ignore
    reject: t
  };
}
var Ke = me(null);
Ke.displayName = "DataRouter";
var Rt = me(null);
Rt.displayName = "DataRouterState";
var Ma = me(!1);
function Yo() {
  return B(Ma);
}
var hr = me({
  isTransitioning: !1
});
hr.displayName = "ViewTransition";
var ka = me(
  /* @__PURE__ */ new Map()
);
ka.displayName = "Fetchers";
var Jo = me(null);
Jo.displayName = "Await";
var xe = me(
  null
);
xe.displayName = "Navigation";
var jt = me(
  null
);
jt.displayName = "Location";
var _e = me({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
_e.displayName = "Route";
var mr = me(null);
mr.displayName = "RouteError";
var Ta = "REACT_ROUTER_ERROR", Xo = "REDIRECT", qo = "ROUTE_ERROR_RESPONSE";
function Qo(e) {
  if (e.startsWith(`${Ta}:${Xo}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean")
        return t;
    } catch {
    }
}
function Zo(e) {
  if (e.startsWith(
    `${Ta}:${qo}:{`
  ))
    try {
      let t = JSON.parse(e.slice(40));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string")
        return new wt(
          t.status,
          t.statusText,
          t.data
        );
    } catch {
    }
}
function el(e, { relative: t } = {}) {
  U(
    Et(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: a } = B(xe), { hash: o, pathname: n, search: l } = St(e, { relative: t }), i = n;
  return r !== "/" && (i = n === "/" ? r : Le([r, n])), a.createHref({ pathname: i, search: l, hash: o });
}
function Et() {
  return B(jt) != null;
}
function Ye() {
  return U(
    Et(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), B(jt).location;
}
var _a = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Oa(e) {
  B(xe).static || lr(e);
}
function At() {
  let { isDataRoute: e } = B(_e);
  return e ? hl() : tl();
}
function tl() {
  U(
    Et(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = B(Ke), { basename: t, navigator: r } = B(xe), { matches: a } = B(_e), { pathname: o } = Ye(), n = JSON.stringify(sr(a)), l = bt(!1);
  return Oa(() => {
    l.current = !0;
  }), rt(
    (u, c = {}) => {
      if (Z(l.current, _a), !l.current) return;
      if (typeof u == "number") {
        r.go(u);
        return;
      }
      let m = ur(
        u,
        JSON.parse(n),
        o,
        c.relative === "path"
      );
      e == null && t !== "/" && (m.pathname = m.pathname === "/" ? t : Le([t, m.pathname])), (c.replace ? r.replace : r.push)(
        m,
        c.state,
        c
      );
    },
    [
      t,
      r,
      n,
      o,
      e
    ]
  );
}
me(null);
function St(e, { relative: t } = {}) {
  let { matches: r } = B(_e), { pathname: a } = Ye(), o = JSON.stringify(sr(r));
  return Se(
    () => ur(
      e,
      JSON.parse(o),
      a,
      t === "path"
    ),
    [e, o, a, t]
  );
}
function rl(e, t, r, a, o) {
  U(
    Et(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: n } = B(xe), { matches: l } = B(_e), i = l[l.length - 1], u = i ? i.params : {}, c = i ? i.pathname : "/", m = i ? i.pathnameBase : "/", f = i && i.route;
  {
    let x = f && f.path || "";
    Ua(
      c,
      !f || x.endsWith("*") || x.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x === "/" ? "*" : `${x}/*`}">.`
    );
  }
  let y = Ye(), p;
  p = y;
  let v = p.pathname || "/", E = v;
  if (m !== "/") {
    let x = m.replace(/^\//, "").split("/");
    E = "/" + v.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let P = Fe(e, { pathname: E });
  return Z(
    f || P != null,
    `No routes matched location "${p.pathname}${p.search}${p.hash}" `
  ), Z(
    P == null || P[P.length - 1].route.element !== void 0 || P[P.length - 1].route.Component !== void 0 || P[P.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), il(
    P && P.map(
      (x) => Object.assign({}, x, {
        params: Object.assign({}, u, x.params),
        pathname: Le([
          m,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          n.encodeLocation ? n.encodeLocation(
            x.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : x.pathname
        ]),
        pathnameBase: x.pathnameBase === "/" ? m : Le([
          m,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          n.encodeLocation ? n.encodeLocation(
            x.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : x.pathnameBase
        ])
      })
    ),
    l,
    r,
    a,
    o
  );
}
function al() {
  let e = fl(), t = vt(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, a = "rgba(200,200,200, 0.5)", o = { padding: "0.5rem", backgroundColor: a }, n = { padding: "2px 4px", backgroundColor: a }, l = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), l = /* @__PURE__ */ F(et, null, /* @__PURE__ */ F("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ F("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ F("code", { style: n }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ F("code", { style: n }, "errorElement"), " prop on your route.")), /* @__PURE__ */ F(et, null, /* @__PURE__ */ F("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ F("h3", { style: { fontStyle: "italic" } }, t), r ? /* @__PURE__ */ F("pre", { style: o }, r) : null, l);
}
var nl = /* @__PURE__ */ F(al, null), Fa = class extends ua {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    this.props.onError ? this.props.onError(e, t) : console.error(
      "React Router caught the following error during render",
      e
    );
  }
  render() {
    let e = this.state.error;
    if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
      const r = Zo(e.digest);
      r && (e = r);
    }
    let t = e !== void 0 ? /* @__PURE__ */ F(_e.Provider, { value: this.props.routeContext }, /* @__PURE__ */ F(
      mr.Provider,
      {
        value: e,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ F(ol, { error: e }, t) : t;
  }
};
Fa.contextType = Ma;
var Qt = /* @__PURE__ */ new WeakMap();
function ol({
  children: e,
  error: t
}) {
  let { basename: r } = B(xe);
  if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
    let a = Qo(t.digest);
    if (a) {
      let o = Qt.get(t);
      if (o) throw o;
      let n = va(a.location, r);
      if (ga && !Qt.get(t))
        if (n.isExternal || a.reloadDocument)
          window.location.href = n.absoluteURL || n.to;
        else {
          const l = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(n.to, {
              replace: a.replace
            })
          );
          throw Qt.set(t, l), l;
        }
      return /* @__PURE__ */ F(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${n.absoluteURL || n.to}`
        }
      );
    }
  }
  return e;
}
function ll({ routeContext: e, match: t, children: r }) {
  let a = B(Ke);
  return a && a.static && a.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ F(_e.Provider, { value: e }, r);
}
function il(e, t = [], r = null, a = null, o = null) {
  if (e == null) {
    if (!r)
      return null;
    if (r.errors)
      e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else
      return null;
  }
  let n = e, l = r?.errors;
  if (l != null) {
    let m = n.findIndex(
      (f) => f.route.id && l?.[f.route.id] !== void 0
    );
    U(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        l
      ).join(",")}`
    ), n = n.slice(
      0,
      Math.min(n.length, m + 1)
    );
  }
  let i = !1, u = -1;
  if (r)
    for (let m = 0; m < n.length; m++) {
      let f = n[m];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = m), f.route.id) {
        let { loaderData: y, errors: p } = r, v = f.route.loader && !y.hasOwnProperty(f.route.id) && (!p || p[f.route.id] === void 0);
        if (f.route.lazy || v) {
          i = !0, u >= 0 ? n = n.slice(0, u + 1) : n = [n[0]];
          break;
        }
      }
    }
  let c = r && a ? (m, f) => {
    a(m, {
      location: r.location,
      params: r.matches?.[0]?.params ?? {},
      unstable_pattern: xt(r.matches),
      errorInfo: f
    });
  } : void 0;
  return n.reduceRight(
    (m, f, y) => {
      let p, v = !1, E = null, P = null;
      r && (p = l && f.route.id ? l[f.route.id] : void 0, E = f.route.errorElement || nl, i && (u < 0 && y === 0 ? (Ua(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), v = !0, P = null) : u === y && (v = !0, P = f.route.hydrateFallbackElement || null)));
      let w = t.concat(n.slice(0, y + 1)), x = () => {
        let T;
        return p ? T = E : v ? T = P : f.route.Component ? T = /* @__PURE__ */ F(f.route.Component, null) : f.route.element ? T = f.route.element : T = m, /* @__PURE__ */ F(
          ll,
          {
            match: f,
            routeContext: {
              outlet: m,
              matches: w,
              isDataRoute: r != null
            },
            children: T
          }
        );
      };
      return r && (f.route.ErrorBoundary || f.route.errorElement || y === 0) ? /* @__PURE__ */ F(
        Fa,
        {
          location: r.location,
          revalidation: r.revalidation,
          component: E,
          error: p,
          children: x(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
          onError: c
        }
      ) : x();
    },
    null
  );
}
function pr(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function sl(e) {
  let t = B(Ke);
  return U(t, pr(e)), t;
}
function ul(e) {
  let t = B(Rt);
  return U(t, pr(e)), t;
}
function cl(e) {
  let t = B(_e);
  return U(t, pr(e)), t;
}
function yr(e) {
  let t = cl(e), r = t.matches[t.matches.length - 1];
  return U(
    r.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), r.route.id;
}
function dl() {
  return yr(
    "useRouteId"
    /* UseRouteId */
  );
}
function fl() {
  let e = B(mr), t = ul(
    "useRouteError"
    /* UseRouteError */
  ), r = yr(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : t.errors?.[r];
}
function hl() {
  let { router: e } = sl(
    "useNavigate"
    /* UseNavigateStable */
  ), t = yr(
    "useNavigate"
    /* UseNavigateStable */
  ), r = bt(!1);
  return Oa(() => {
    r.current = !0;
  }), rt(
    async (o, n = {}) => {
      Z(r.current, _a), r.current && (typeof o == "number" ? await e.navigate(o) : await e.navigate(o, { fromRouteId: t, ...n }));
    },
    [e, t]
  );
}
var ta = {};
function Ua(e, t, r) {
  !t && !ta[e] && (ta[e] = !0, Z(!1, r));
}
var ra = {};
function aa(e, t) {
  !e && !ra[t] && (ra[t] = !0, console.warn(t));
}
var ml = "useOptimistic", na = Fn[ml], pl = () => {
};
function yl(e) {
  return na ? na(e) : [e, pl];
}
function gl(e) {
  let t = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null
  };
  return e.Component && (e.element && Z(
    !1,
    "You should not include both `Component` and `element` on your route - `Component` will be used."
  ), Object.assign(t, {
    element: F(e.Component),
    Component: void 0
  })), e.HydrateFallback && (e.hydrateFallbackElement && Z(
    !1,
    "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
  ), Object.assign(t, {
    hydrateFallbackElement: F(e.HydrateFallback),
    HydrateFallback: void 0
  })), e.ErrorBoundary && (e.errorElement && Z(
    !1,
    "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
  ), Object.assign(t, {
    errorElement: F(e.ErrorBoundary),
    ErrorBoundary: void 0
  })), t;
}
var vl = [
  "HydrateFallback",
  "hydrateFallbackElement"
], bl = class {
  constructor() {
    this.status = "pending", this.promise = new Promise((e, t) => {
      this.resolve = (r) => {
        this.status === "pending" && (this.status = "resolved", e(r));
      }, this.reject = (r) => {
        this.status === "pending" && (this.status = "rejected", t(r));
      };
    });
  }
};
function wl({
  router: e,
  flushSync: t,
  onError: r,
  unstable_useTransitions: a
}) {
  a = Yo() || a;
  let [n, l] = ne(e.state), [i, u] = yl(n), [c, m] = ne(), [f, y] = ne({
    isTransitioning: !1
  }), [p, v] = ne(), [E, P] = ne(), [w, x] = ne(), T = bt(/* @__PURE__ */ new Map()), K = rt(
    (O, { deletedFetchers: H, newErrors: J, flushSync: Y, viewTransitionOpts: te }) => {
      J && r && Object.values(J).forEach(
        (ee) => r(ee, {
          location: O.location,
          params: O.matches[0]?.params ?? {},
          unstable_pattern: xt(O.matches)
        })
      ), O.fetchers.forEach((ee, G) => {
        ee.data !== void 0 && T.current.set(G, ee.data);
      }), H.forEach((ee) => T.current.delete(ee)), aa(
        Y === !1 || t != null,
        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
      );
      let Re = e.window != null && e.window.document != null && typeof e.window.document.startViewTransition == "function";
      if (aa(
        te == null || Re,
        "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
      ), !te || !Re) {
        t && Y ? t(() => l(O)) : a === !1 ? l(O) : pt(() => {
          a === !0 && u((ee) => oa(ee, O)), l(O);
        });
        return;
      }
      if (t && Y) {
        t(() => {
          E && (p?.resolve(), E.skipTransition()), y({
            isTransitioning: !0,
            flushSync: !0,
            currentLocation: te.currentLocation,
            nextLocation: te.nextLocation
          });
        });
        let ee = e.window.document.startViewTransition(() => {
          t(() => l(O));
        });
        ee.finished.finally(() => {
          t(() => {
            v(void 0), P(void 0), m(void 0), y({ isTransitioning: !1 });
          });
        }), t(() => P(ee));
        return;
      }
      E ? (p?.resolve(), E.skipTransition(), x({
        state: O,
        currentLocation: te.currentLocation,
        nextLocation: te.nextLocation
      })) : (m(O), y({
        isTransitioning: !0,
        flushSync: !1,
        currentLocation: te.currentLocation,
        nextLocation: te.nextLocation
      }));
    },
    [
      e.window,
      t,
      E,
      p,
      a,
      u,
      r
    ]
  );
  lr(() => e.subscribe(K), [e, K]), Te(() => {
    f.isTransitioning && !f.flushSync && v(new bl());
  }, [f]), Te(() => {
    if (p && c && e.window) {
      let O = c, H = p.promise, J = e.window.document.startViewTransition(async () => {
        a === !1 ? l(O) : pt(() => {
          a === !0 && u((Y) => oa(Y, O)), l(O);
        }), await H;
      });
      J.finished.finally(() => {
        v(void 0), P(void 0), m(void 0), y({ isTransitioning: !1 });
      }), P(J);
    }
  }, [
    c,
    p,
    e.window,
    a,
    u
  ]), Te(() => {
    p && c && i.location.key === c.location.key && p.resolve();
  }, [p, E, i.location, c]), Te(() => {
    !f.isTransitioning && w && (m(w.state), y({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: w.currentLocation,
      nextLocation: w.nextLocation
    }), x(void 0));
  }, [f.isTransitioning, w]);
  let z = Se(() => ({
    createHref: e.createHref,
    encodeLocation: e.encodeLocation,
    go: (O) => e.navigate(O),
    push: (O, H, J) => e.navigate(O, {
      state: H,
      preventScrollReset: J?.preventScrollReset
    }),
    replace: (O, H, J) => e.navigate(O, {
      replace: !0,
      state: H,
      preventScrollReset: J?.preventScrollReset
    })
  }), [e]), q = e.basename || "/", g = Se(
    () => ({
      router: e,
      navigator: z,
      static: !1,
      basename: q,
      onError: r
    }),
    [e, z, q, r]
  );
  return /* @__PURE__ */ F(et, null, /* @__PURE__ */ F(Ke.Provider, { value: g }, /* @__PURE__ */ F(Rt.Provider, { value: i }, /* @__PURE__ */ F(ka.Provider, { value: T.current }, /* @__PURE__ */ F(hr.Provider, { value: f }, /* @__PURE__ */ F(
    El,
    {
      basename: q,
      location: i.location,
      navigationType: i.historyAction,
      navigator: z,
      unstable_useTransitions: a
    },
    /* @__PURE__ */ F(
      xl,
      {
        routes: e.routes,
        future: e.future,
        state: i,
        onError: r
      }
    )
  ))))), null);
}
function oa(e, t) {
  return {
    // Don't surface "current location specific" stuff mid-navigation
    // (historyAction, location, matches, loaderData, errors, initialized,
    // restoreScroll, preventScrollReset, blockers, etc.)
    ...e,
    // Only surface "pending/in-flight stuff"
    // (navigation, revalidation, actionData, fetchers, )
    navigation: t.navigation.state !== "idle" ? t.navigation : e.navigation,
    revalidation: t.revalidation !== "idle" ? t.revalidation : e.revalidation,
    actionData: t.navigation.state !== "submitting" ? t.actionData : e.actionData,
    fetchers: t.fetchers
  };
}
var xl = ca(Rl);
function Rl({
  routes: e,
  future: t,
  state: r,
  onError: a
}) {
  return rl(e, void 0, r, a, t);
}
function El({
  basename: e = "/",
  children: t = null,
  location: r,
  navigationType: a = "POP",
  navigator: o,
  static: n = !1,
  unstable_useTransitions: l
}) {
  U(
    !Et(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let i = e.replace(/^\/*/, "/"), u = Se(
    () => ({
      basename: i,
      navigator: o,
      static: n,
      unstable_useTransitions: l,
      future: {}
    }),
    [i, o, n, l]
  );
  typeof r == "string" && (r = $e(r));
  let {
    pathname: c = "/",
    search: m = "",
    hash: f = "",
    state: y = null,
    key: p = "default"
  } = r, v = Se(() => {
    let E = we(c, i);
    return E == null ? null : {
      location: {
        pathname: E,
        search: m,
        hash: f,
        state: y,
        key: p
      },
      navigationType: a
    };
  }, [i, c, m, f, y, p, a]);
  return Z(
    v != null,
    `<Router basename="${i}"> is not able to match the URL "${c}${m}${f}" because it does not start with the basename, so the <Router> won't render anything.`
  ), v == null ? null : /* @__PURE__ */ F(xe.Provider, { value: u }, /* @__PURE__ */ F(jt.Provider, { children: t, value: v }));
}
var zt = "get", $t = "application/x-www-form-urlencoded";
function Bt(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Sl(e) {
  return Bt(e) && e.tagName.toLowerCase() === "button";
}
function Pl(e) {
  return Bt(e) && e.tagName.toLowerCase() === "form";
}
function Ll(e) {
  return Bt(e) && e.tagName.toLowerCase() === "input";
}
function Cl(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Nl(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Cl(e);
}
var Ft = null;
function Dl() {
  if (Ft === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Ft = !1;
    } catch {
      Ft = !0;
    }
  return Ft;
}
var Ml = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Zt(e) {
  return e != null && !Ml.has(e) ? (Z(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$t}"`
  ), null) : e;
}
function kl(e, t) {
  let r, a, o, n, l;
  if (Pl(e)) {
    let i = e.getAttribute("action");
    a = i ? we(i, t) : null, r = e.getAttribute("method") || zt, o = Zt(e.getAttribute("enctype")) || $t, n = new FormData(e);
  } else if (Sl(e) || Ll(e) && (e.type === "submit" || e.type === "image")) {
    let i = e.form;
    if (i == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let u = e.getAttribute("formaction") || i.getAttribute("action");
    if (a = u ? we(u, t) : null, r = e.getAttribute("formmethod") || i.getAttribute("method") || zt, o = Zt(e.getAttribute("formenctype")) || Zt(i.getAttribute("enctype")) || $t, n = new FormData(i, e), !Dl()) {
      let { name: c, type: m, value: f } = e;
      if (m === "image") {
        let y = c ? `${c}.` : "";
        n.append(`${y}x`, "0"), n.append(`${y}y`, "0");
      } else c && n.append(c, f);
    }
  } else {
    if (Bt(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    r = zt, a = null, o = $t, l = e;
  }
  return n && o === "text/plain" && (l = n, n = void 0), { action: a, method: r.toLowerCase(), encType: o, formData: n, body: l };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function gr(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Tl(e, t, r, a) {
  let o = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return r ? o.pathname.endsWith("/") ? o.pathname = `${o.pathname}_.${a}` : o.pathname = `${o.pathname}.${a}` : o.pathname === "/" ? o.pathname = `_root.${a}` : t && we(o.pathname, t) === "/" ? o.pathname = `${t.replace(/\/$/, "")}/_root.${a}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${a}`, o;
}
async function _l(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let r = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = r, r;
  } catch (r) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Ol(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function Fl(e, t, r) {
  let a = await Promise.all(
    e.map(async (o) => {
      let n = t.routes[o.route.id];
      if (n) {
        let l = await _l(n, r);
        return l.links ? l.links() : [];
      }
      return [];
    })
  );
  return Il(
    a.flat(1).filter(Ol).filter((o) => o.rel === "stylesheet" || o.rel === "preload").map(
      (o) => o.rel === "stylesheet" ? { ...o, rel: "prefetch", as: "style" } : { ...o, rel: "prefetch" }
    )
  );
}
function la(e, t, r, a, o, n) {
  let l = (u, c) => r[c] ? u.route.id !== r[c].route.id : !0, i = (u, c) => (
    // param change, /users/123 -> /users/456
    r[c].pathname !== u.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    r[c].route.path?.endsWith("*") && r[c].params["*"] !== u.params["*"]
  );
  return n === "assets" ? t.filter(
    (u, c) => l(u, c) || i(u, c)
  ) : n === "data" ? t.filter((u, c) => {
    let m = a.routes[u.route.id];
    if (!m || !m.hasLoader)
      return !1;
    if (l(u, c) || i(u, c))
      return !0;
    if (u.route.shouldRevalidate) {
      let f = u.route.shouldRevalidate({
        currentUrl: new URL(
          o.pathname + o.search + o.hash,
          window.origin
        ),
        currentParams: r[0]?.params || {},
        nextUrl: new URL(e, window.origin),
        nextParams: u.params,
        defaultShouldRevalidate: !0
      });
      if (typeof f == "boolean")
        return f;
    }
    return !0;
  }) : [];
}
function Ul(e, t, { includeHydrateFallback: r } = {}) {
  return zl(
    e.map((a) => {
      let o = t.routes[a.route.id];
      if (!o) return [];
      let n = [o.module];
      return o.clientActionModule && (n = n.concat(o.clientActionModule)), o.clientLoaderModule && (n = n.concat(o.clientLoaderModule)), r && o.hydrateFallbackModule && (n = n.concat(o.hydrateFallbackModule)), o.imports && (n = n.concat(o.imports)), n;
    }).flat(1)
  );
}
function zl(e) {
  return [...new Set(e)];
}
function $l(e) {
  let t = {}, r = Object.keys(e).sort();
  for (let a of r)
    t[a] = e[a];
  return t;
}
function Il(e, t) {
  let r = /* @__PURE__ */ new Set();
  return new Set(t), e.reduce((a, o) => {
    let n = JSON.stringify($l(o));
    return r.has(n) || (r.add(n), a.push({ key: n, link: o })), a;
  }, []);
}
function za() {
  let e = B(Ke);
  return gr(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function jl() {
  let e = B(Rt);
  return gr(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var vr = me(void 0);
vr.displayName = "FrameworkContext";
function $a() {
  let e = B(vr);
  return gr(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function Al(e, t) {
  let r = B(vr), [a, o] = ne(!1), [n, l] = ne(!1), { onFocus: i, onBlur: u, onMouseEnter: c, onMouseLeave: m, onTouchStart: f } = t, y = bt(null);
  Te(() => {
    if (e === "render" && l(!0), e === "viewport") {
      let E = (w) => {
        w.forEach((x) => {
          l(x.isIntersecting);
        });
      }, P = new IntersectionObserver(E, { threshold: 0.5 });
      return y.current && P.observe(y.current), () => {
        P.disconnect();
      };
    }
  }, [e]), Te(() => {
    if (a) {
      let E = setTimeout(() => {
        l(!0);
      }, 100);
      return () => {
        clearTimeout(E);
      };
    }
  }, [a]);
  let p = () => {
    o(!0);
  }, v = () => {
    o(!1), l(!1);
  };
  return r ? e !== "intent" ? [n, y, {}] : [
    n,
    y,
    {
      onFocus: ct(i, p),
      onBlur: ct(u, v),
      onMouseEnter: ct(c, p),
      onMouseLeave: ct(m, v),
      onTouchStart: ct(f, p)
    }
  ] : [!1, y, {}];
}
function ct(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function Bl({ page: e, ...t }) {
  let { router: r } = za(), a = Se(
    () => Fe(r.routes, e, r.basename),
    [r.routes, e, r.basename]
  );
  return a ? /* @__PURE__ */ F(Wl, { page: e, matches: a, ...t }) : null;
}
function Hl(e) {
  let { manifest: t, routeModules: r } = $a(), [a, o] = ne([]);
  return Te(() => {
    let n = !1;
    return Fl(e, t, r).then(
      (l) => {
        n || o(l);
      }
    ), () => {
      n = !0;
    };
  }, [e, t, r]), a;
}
function Wl({
  page: e,
  matches: t,
  ...r
}) {
  let a = Ye(), { future: o, manifest: n, routeModules: l } = $a(), { basename: i } = za(), { loaderData: u, matches: c } = jl(), m = Se(
    () => la(
      e,
      t,
      c,
      n,
      a,
      "data"
    ),
    [e, t, c, n, a]
  ), f = Se(
    () => la(
      e,
      t,
      c,
      n,
      a,
      "assets"
    ),
    [e, t, c, n, a]
  ), y = Se(() => {
    if (e === a.pathname + a.search + a.hash)
      return [];
    let E = /* @__PURE__ */ new Set(), P = !1;
    if (t.forEach((x) => {
      let T = n.routes[x.route.id];
      !T || !T.hasLoader || (!m.some((K) => K.route.id === x.route.id) && x.route.id in u && l[x.route.id]?.shouldRevalidate || T.hasClientLoader ? P = !0 : E.add(x.route.id));
    }), E.size === 0)
      return [];
    let w = Tl(
      e,
      i,
      o.unstable_trailingSlashAwareDataRequests,
      "data"
    );
    return P && E.size > 0 && w.searchParams.set(
      "_routes",
      t.filter((x) => E.has(x.route.id)).map((x) => x.route.id).join(",")
    ), [w.pathname + w.search];
  }, [
    i,
    o.unstable_trailingSlashAwareDataRequests,
    u,
    a,
    n,
    m,
    t,
    e,
    l
  ]), p = Se(
    () => Ul(f, n),
    [f, n]
  ), v = Hl(f);
  return /* @__PURE__ */ F(et, null, y.map((E) => /* @__PURE__ */ F("link", { key: E, rel: "prefetch", as: "fetch", href: E, ...r })), p.map((E) => /* @__PURE__ */ F("link", { key: E, rel: "modulepreload", href: E, ...r })), v.map(({ key: E, link: P }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ F(
      "link",
      {
        key: E,
        nonce: r.nonce,
        ...P,
        crossOrigin: P.crossOrigin ?? r.crossOrigin
      }
    )
  )));
}
function Vl(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var Gl = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Gl && (window.__reactRouterVersion = // @ts-expect-error
  "7.13.0");
} catch {
}
function Kl(e, t) {
  return Eo({
    basename: t?.basename,
    getContext: t?.getContext,
    future: t?.future,
    history: $n({ window: t?.window }),
    hydrationData: Yl(),
    routes: e,
    mapRouteProperties: gl,
    hydrationRouteProperties: vl,
    dataStrategy: t?.dataStrategy,
    patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
    window: t?.window,
    unstable_instrumentations: t?.unstable_instrumentations
  }).initialize();
}
function Yl() {
  let e = window?.__staticRouterHydrationData;
  return e && e.errors && (e = {
    ...e,
    errors: Jl(e.errors)
  }), e;
}
function Jl(e) {
  if (!e) return null;
  let t = Object.entries(e), r = {};
  for (let [a, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      r[a] = new wt(
        o.status,
        o.statusText,
        o.data,
        o.internal === !0
      );
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let n = window[o.__subType];
        if (typeof n == "function")
          try {
            let l = new n(o.message);
            l.stack = "", r[a] = l;
          } catch {
          }
      }
      if (r[a] == null) {
        let n = new Error(o.message);
        n.stack = "", r[a] = n;
      }
    } else
      r[a] = o;
  return r;
}
var Ia = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ja = tt(
  function({
    onClick: t,
    discover: r = "render",
    prefetch: a = "none",
    relative: o,
    reloadDocument: n,
    replace: l,
    state: i,
    target: u,
    to: c,
    preventScrollReset: m,
    viewTransition: f,
    unstable_defaultShouldRevalidate: y,
    ...p
  }, v) {
    let { basename: E, unstable_useTransitions: P } = B(xe), w = typeof c == "string" && Ia.test(c), x = va(c, E);
    c = x.to;
    let T = el(c, { relative: o }), [K, z, q] = Al(
      a,
      p
    ), g = Zl(c, {
      replace: l,
      state: i,
      target: u,
      preventScrollReset: m,
      relative: o,
      viewTransition: f,
      unstable_defaultShouldRevalidate: y,
      unstable_useTransitions: P
    });
    function O(J) {
      t && t(J), J.defaultPrevented || g(J);
    }
    let H = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ F(
        "a",
        {
          ...p,
          ...q,
          href: x.absoluteURL || T,
          onClick: x.isExternal || n ? t : O,
          ref: Vl(v, z),
          target: u,
          "data-discover": !w && r === "render" ? "true" : void 0
        }
      )
    );
    return K && !w ? /* @__PURE__ */ F(et, null, H, /* @__PURE__ */ F(Bl, { page: T })) : H;
  }
);
ja.displayName = "Link";
var Xl = tt(
  function({
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: a = "",
    end: o = !1,
    style: n,
    to: l,
    viewTransition: i,
    children: u,
    ...c
  }, m) {
    let f = St(l, { relative: c.relative }), y = Ye(), p = B(Rt), { navigator: v, basename: E } = B(xe), P = p != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    ni(f) && i === !0, w = v.encodeLocation ? v.encodeLocation(f).pathname : f.pathname, x = y.pathname, T = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
    r || (x = x.toLowerCase(), T = T ? T.toLowerCase() : null, w = w.toLowerCase()), T && E && (T = we(T, E) || T);
    const K = w !== "/" && w.endsWith("/") ? w.length - 1 : w.length;
    let z = x === w || !o && x.startsWith(w) && x.charAt(K) === "/", q = T != null && (T === w || !o && T.startsWith(w) && T.charAt(w.length) === "/"), g = {
      isActive: z,
      isPending: q,
      isTransitioning: P
    }, O = z ? t : void 0, H;
    typeof a == "function" ? H = a(g) : H = [
      a,
      z ? "active" : null,
      q ? "pending" : null,
      P ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let J = typeof n == "function" ? n(g) : n;
    return /* @__PURE__ */ F(
      ja,
      {
        ...c,
        "aria-current": O,
        className: H,
        ref: m,
        style: J,
        to: l,
        viewTransition: i
      },
      typeof u == "function" ? u(g) : u
    );
  }
);
Xl.displayName = "NavLink";
var ql = tt(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: r,
    reloadDocument: a,
    replace: o,
    state: n,
    method: l = zt,
    action: i,
    onSubmit: u,
    relative: c,
    preventScrollReset: m,
    viewTransition: f,
    unstable_defaultShouldRevalidate: y,
    ...p
  }, v) => {
    let { unstable_useTransitions: E } = B(xe), P = ri(), w = ai(i, { relative: c }), x = l.toLowerCase() === "get" ? "get" : "post", T = typeof i == "string" && Ia.test(i);
    return /* @__PURE__ */ F(
      "form",
      {
        ref: v,
        method: x,
        action: w,
        onSubmit: a ? u : (z) => {
          if (u && u(z), z.defaultPrevented) return;
          z.preventDefault();
          let q = z.nativeEvent.submitter, g = q?.getAttribute("formmethod") || l, O = () => P(q || z.currentTarget, {
            fetcherKey: t,
            method: g,
            navigate: r,
            replace: o,
            state: n,
            relative: c,
            preventScrollReset: m,
            viewTransition: f,
            unstable_defaultShouldRevalidate: y
          });
          E && r !== !1 ? pt(() => O()) : O();
        },
        ...p,
        "data-discover": !T && e === "render" ? "true" : void 0
      }
    );
  }
);
ql.displayName = "Form";
function Ql(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Aa(e) {
  let t = B(Ke);
  return U(t, Ql(e)), t;
}
function Zl(e, {
  target: t,
  replace: r,
  state: a,
  preventScrollReset: o,
  relative: n,
  viewTransition: l,
  unstable_defaultShouldRevalidate: i,
  unstable_useTransitions: u
} = {}) {
  let c = At(), m = Ye(), f = St(e, { relative: n });
  return rt(
    (y) => {
      if (Nl(y, t)) {
        y.preventDefault();
        let p = r !== void 0 ? r : Ce(m) === Ce(f), v = () => c(e, {
          replace: p,
          state: a,
          preventScrollReset: o,
          relative: n,
          viewTransition: l,
          unstable_defaultShouldRevalidate: i
        });
        u ? pt(() => v()) : v();
      }
    },
    [
      m,
      c,
      f,
      r,
      a,
      t,
      e,
      o,
      n,
      l,
      i,
      u
    ]
  );
}
var ei = 0, ti = () => `__${String(++ei)}__`;
function ri() {
  let { router: e } = Aa(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = B(xe), r = dl(), a = e.fetch, o = e.navigate;
  return rt(
    async (n, l = {}) => {
      let { action: i, method: u, encType: c, formData: m, body: f } = kl(
        n,
        t
      );
      if (l.navigate === !1) {
        let y = l.fetcherKey || ti();
        await a(y, r, l.action || i, {
          unstable_defaultShouldRevalidate: l.unstable_defaultShouldRevalidate,
          preventScrollReset: l.preventScrollReset,
          formData: m,
          body: f,
          formMethod: l.method || u,
          formEncType: l.encType || c,
          flushSync: l.flushSync
        });
      } else
        await o(l.action || i, {
          unstable_defaultShouldRevalidate: l.unstable_defaultShouldRevalidate,
          preventScrollReset: l.preventScrollReset,
          formData: m,
          body: f,
          formMethod: l.method || u,
          formEncType: l.encType || c,
          replace: l.replace,
          state: l.state,
          fromRouteId: r,
          flushSync: l.flushSync,
          viewTransition: l.viewTransition
        });
    },
    [a, o, t, r]
  );
}
function ai(e, { relative: t } = {}) {
  let { basename: r } = B(xe), a = B(_e);
  U(a, "useFormAction must be used inside a RouteContext");
  let [o] = a.matches.slice(-1), n = { ...St(e || ".", { relative: t }) }, l = Ye();
  if (e == null) {
    n.search = l.search;
    let i = new URLSearchParams(n.search), u = i.getAll("index");
    if (u.some((m) => m === "")) {
      i.delete("index"), u.filter((f) => f).forEach((f) => i.append("index", f));
      let m = i.toString();
      n.search = m ? `?${m}` : "";
    }
  }
  return (!e || e === ".") && o.route.index && (n.search = n.search ? n.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (n.pathname = n.pathname === "/" ? r : Le([r, n.pathname])), Ce(n);
}
function ni(e, { relative: t } = {}) {
  let r = B(hr);
  U(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: a } = Aa(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), o = St(e, { relative: t });
  if (!r.isTransitioning)
    return !1;
  let n = we(r.currentLocation.pathname, a) || r.currentLocation.pathname, l = we(r.nextLocation.pathname, a) || r.nextLocation.pathname;
  return It(o.pathname, l) != null || It(o.pathname, n) != null;
}
const br = "monopoly-game-state";
function Ba(e) {
  try {
    localStorage.setItem(br, JSON.stringify(e));
  } catch (t) {
    console.error("Failed to save game state:", t);
  }
}
function or() {
  try {
    const e = localStorage.getItem(br);
    return e ? JSON.parse(e) : null;
  } catch (e) {
    return console.error("Failed to load game state:", e), null;
  }
}
function oi() {
  try {
    localStorage.removeItem(br);
  } catch (e) {
    console.error("Failed to clear game state:", e);
  }
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const li = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ii = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, a) => a ? a.toUpperCase() : r.toLowerCase()
), ia = (e) => {
  const t = ii(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Ha = (...e) => e.filter((t, r, a) => !!t && t.trim() !== "" && a.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var si = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ui = tt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: a,
    className: o = "",
    children: n,
    iconNode: l,
    ...i
  }, u) => F(
    "svg",
    {
      ref: u,
      ...si,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: a ? Number(r) * 24 / Number(t) : r,
      className: Ha("lucide", o),
      ...i
    },
    [
      ...l.map(([c, m]) => F(c, m)),
      ...Array.isArray(n) ? n : [n]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ie = (e, t) => {
  const r = tt(
    ({ className: a, ...o }, n) => F(ui, {
      ref: n,
      iconNode: t,
      className: Ha(
        `lucide-${li(ia(e))}`,
        `lucide-${e}`,
        a
      ),
      ...o
    })
  );
  return r.displayName = ia(e), r;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ci = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], di = Ie("arrow-left", ci);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fi = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Wa = Ie("arrow-right", fi);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hi = [
  ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
  ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
  ["path", { d: "M7 6h1v4", key: "1obek4" }],
  ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]
], mi = Ie("coins", hi);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pi = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]], Va = Ie("play", pi);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yi = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], gi = Ie("plus", yi);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vi = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], bi = Ie("trash-2", vi);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wi = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
], xi = Ie("upload", wi);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ri = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ga = Ie("x", Ri);
function Ei() {
  const e = At(), t = or() !== null;
  return /* @__PURE__ */ S("div", { className: "size-full flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100", children: /* @__PURE__ */ $("div", { className: "bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full mx-4", children: [
    /* @__PURE__ */ $("div", { className: "flex flex-col items-center mb-8", children: [
      /* @__PURE__ */ S("div", { className: "bg-green-600 rounded-full p-6 mb-4", children: /* @__PURE__ */ S(mi, { className: "size-16 text-white" }) }),
      /* @__PURE__ */ S("h1", { className: "text-4xl mb-2 text-gray-800", children: "Bank Manager" }),
      /* @__PURE__ */ S("p", { className: "text-gray-600 text-center", children: "Manage transactions between players and the bank" })
    ] }),
    /* @__PURE__ */ $("div", { className: "space-y-4", children: [
      /* @__PURE__ */ $(
        "button",
        {
          onClick: () => {
            e("/setup");
          },
          className: "w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-colors",
          children: [
            /* @__PURE__ */ S(Va, { className: "size-6" }),
            /* @__PURE__ */ S("span", { className: "text-lg", children: "Start New Game" })
          ]
        }
      ),
      t && /* @__PURE__ */ $(
        "button",
        {
          onClick: () => {
            or() && e("/game");
          },
          className: "w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-colors",
          children: [
            /* @__PURE__ */ S(xi, { className: "size-6" }),
            /* @__PURE__ */ S("span", { className: "text-lg", children: "Load Saved Game" })
          ]
        }
      )
    ] })
  ] }) });
}
const er = [
  "car",
  "hat",
  "ship",
  "boot",
  "dog",
  "thimble",
  "wheelbarrow",
  "iron"
], Ht = {
  car: "🚗",
  hat: "🎩",
  ship: "⛵",
  boot: "👢",
  dog: "🐕",
  thimble: "🪡",
  wheelbarrow: "🚧",
  iron: "🔧"
};
function Si() {
  const e = At(), [t, r] = ne([
    { id: "1", name: "Player 1", icon: "car", balance: 0 },
    { id: "2", name: "Player 2", icon: "hat", balance: 0 }
  ]), [a, o] = ne(1500), [n, l] = ne("USD"), i = () => {
    const f = t.map((v) => v.icon), y = er.find((v) => !f.includes(v)) || "car", p = {
      id: Date.now().toString(),
      name: `Player ${t.length + 1}`,
      icon: y,
      balance: 0
    };
    r([...t, p]);
  }, u = (f) => {
    t.length > 2 && r(t.filter((y) => y.id !== f));
  }, c = (f, y, p) => {
    r(
      t.map(
        (v) => v.id === f ? { ...v, [y]: p } : v
      )
    );
  }, m = () => {
    const f = t.map((y) => ({
      ...y,
      balance: a
    }));
    oi(), Ba({
      players: f,
      transactions: [],
      initialBalance: a,
      currency: n
    }), e("/game");
  };
  return /* @__PURE__ */ S("div", { className: "size-full flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 p-4", children: /* @__PURE__ */ $("div", { className: "bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ $("div", { className: "flex items-center mb-6", children: [
      /* @__PURE__ */ S(
        "button",
        {
          onClick: () => e("/"),
          className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
          children: /* @__PURE__ */ S(di, { className: "size-6 text-gray-600" })
        }
      ),
      /* @__PURE__ */ S("h1", { className: "text-3xl ml-4 text-gray-800", children: "Setup New Game" })
    ] }),
    /* @__PURE__ */ $("div", { className: "mb-8", children: [
      /* @__PURE__ */ S("label", { className: "block text-gray-700 mb-2", children: "Initial Balance for All Players" }),
      /* @__PURE__ */ S(
        "input",
        {
          type: "number",
          value: a,
          onChange: (f) => o(Number(f.target.value)),
          min: "0",
          step: "100",
          className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        }
      )
    ] }),
    /* @__PURE__ */ $("div", { className: "mb-8", children: [
      /* @__PURE__ */ S("label", { className: "block text-gray-700 mb-2", children: "Currency" }),
      /* @__PURE__ */ $(
        "select",
        {
          value: n,
          onChange: (f) => l(f.target.value),
          className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500",
          children: [
            /* @__PURE__ */ S("option", { value: "USD", children: "USD ($)" }),
            /* @__PURE__ */ S("option", { value: "EUR", children: "EUR (€)" }),
            /* @__PURE__ */ S("option", { value: "RUB", children: "RUB (₽)" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ $("div", { className: "mb-6", children: [
      /* @__PURE__ */ $("div", { className: "flex justify-between items-center mb-4", children: [
        /* @__PURE__ */ S("h2", { className: "text-xl text-gray-800", children: "Players" }),
        /* @__PURE__ */ $(
          "button",
          {
            onClick: i,
            disabled: t.length >= er.length,
            className: "flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ S(gi, { className: "size-5" }),
              "Add Player"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ S("div", { className: "space-y-4", children: t.map((f, y) => /* @__PURE__ */ $(
        "div",
        {
          className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl",
          children: [
            /* @__PURE__ */ S("div", { className: "flex-1", children: /* @__PURE__ */ S(
              "input",
              {
                type: "text",
                value: f.name,
                onChange: (p) => c(f.id, "name", p.target.value),
                placeholder: "Player name",
                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              }
            ) }),
            /* @__PURE__ */ S("div", { className: "flex-1", children: /* @__PURE__ */ S(
              "select",
              {
                value: f.icon,
                onChange: (p) => c(
                  f.id,
                  "icon",
                  p.target.value
                ),
                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                children: er.map((p) => /* @__PURE__ */ $("option", { value: p, children: [
                  Ht[p],
                  " ",
                  p
                ] }, p))
              }
            ) }),
            /* @__PURE__ */ S(
              "button",
              {
                onClick: () => u(f.id),
                disabled: t.length <= 2,
                className: "p-2 hover:bg-red-100 disabled:opacity-30 disabled:hover:bg-transparent rounded-lg transition-colors",
                children: /* @__PURE__ */ S(bi, { className: "size-5 text-red-600" })
              }
            )
          ]
        },
        f.id
      )) })
    ] }),
    /* @__PURE__ */ $(
      "button",
      {
        onClick: m,
        disabled: t.length < 2,
        className: "w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-colors",
        children: [
          /* @__PURE__ */ S(Va, { className: "size-6" }),
          /* @__PURE__ */ S("span", { className: "text-lg", children: "Start Game" })
        ]
      }
    )
  ] }) });
}
function sa({
  player: e,
  isBank: t,
  isSelected: r,
  onClick: a,
  currency: o = "USD"
}) {
  const n = (l) => o === "USD" ? new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  }).format(l) : o === "EUR" ? new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0
  }).format(l) : o === "RUB" ? new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 0
  }).format(l) + " RUB" : l.toString();
  return t ? /* @__PURE__ */ $(
    "button",
    {
      onClick: a,
      className: `flex flex-col items-center gap-2 p-4 rounded-2xl transition-all ${r ? "bg-blue-400 ring-4 ring-blue-500 scale-105" : "bg-white hover:bg-gray-50 hover:scale-105 shadow-md"}`,
      children: [
        /* @__PURE__ */ S("div", { className: "text-5xl", children: "🏦" }),
        /* @__PURE__ */ $("div", { className: "text-center", children: [
          /* @__PURE__ */ S("div", { className: "font-bold text-gray-800", children: "Bank" }),
          /* @__PURE__ */ S("div", { className: "text-sm text-gray-600", children: "Unlimited" })
        ] })
      ]
    }
  ) : e ? /* @__PURE__ */ $(
    "button",
    {
      onClick: a,
      className: `flex flex-col items-center gap-2 p-4 rounded-2xl transition-all ${r ? "bg-blue-400 ring-4 ring-blue-500 scale-105" : "bg-white hover:bg-gray-50 hover:scale-105 shadow-md"}`,
      children: [
        /* @__PURE__ */ S("div", { className: "text-5xl", children: Ht[e.icon] }),
        /* @__PURE__ */ $("div", { className: "text-center", children: [
          /* @__PURE__ */ S("div", { className: "font-bold text-gray-800", children: e.name }),
          /* @__PURE__ */ S("div", { className: "text-sm text-gray-600", children: n(e.balance) })
        ] })
      ]
    }
  ) : null;
}
function Pi({
  from: e,
  to: t,
  onConfirm: r,
  onClose: a
}) {
  const [o, n] = ne(""), l = (v) => {
    n((E) => E + v);
  }, i = () => {
    n("");
  }, u = () => {
    n((v) => v.slice(0, -1));
  }, c = () => {
    const v = parseFloat(o);
    v > 0 && r(v);
  }, m = (v) => v === "bank" ? { icon: "🏦", name: "Bank" } : { icon: Ht[v.icon], name: v.name }, f = m(e), y = m(t), p = parseFloat(o) > 0;
  return /* @__PURE__ */ S("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50", children: /* @__PURE__ */ $("div", { className: "bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full", children: [
    /* @__PURE__ */ $("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ S("h2", { className: "text-2xl text-gray-800", children: "New Transaction" }),
      /* @__PURE__ */ S(
        "button",
        {
          onClick: a,
          className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
          children: /* @__PURE__ */ S(Ga, { className: "size-6 text-gray-600" })
        }
      )
    ] }),
    /* @__PURE__ */ $("div", { className: "flex items-center justify-center gap-4 mb-8", children: [
      /* @__PURE__ */ $("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ S("div", { className: "text-6xl mb-2", children: f.icon }),
        /* @__PURE__ */ S("div", { className: "text-gray-800", children: f.name })
      ] }),
      /* @__PURE__ */ S(Wa, { className: "size-10 text-green-600" }),
      /* @__PURE__ */ $("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ S("div", { className: "text-6xl mb-2", children: y.icon }),
        /* @__PURE__ */ S("div", { className: "text-gray-800", children: y.name })
      ] })
    ] }),
    /* @__PURE__ */ $("div", { className: "mb-6", children: [
      /* @__PURE__ */ S("label", { className: "block text-gray-700 mb-2", children: "Amount" }),
      /* @__PURE__ */ S(
        "input",
        {
          type: "number",
          value: o,
          onChange: (v) => n(v.target.value),
          placeholder: "Enter amount",
          className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-xl text-center"
        }
      )
    ] }),
    /* @__PURE__ */ $("div", { className: "grid grid-cols-3 gap-2 mb-6", children: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => /* @__PURE__ */ S(
        "button",
        {
          onClick: () => l(v.toString()),
          className: "py-4 bg-gray-100 hover:bg-gray-200 rounded-xl text-xl transition-colors",
          children: v
        },
        v
      )),
      /* @__PURE__ */ S(
        "button",
        {
          onClick: i,
          className: "py-4 bg-red-100 hover:bg-red-200 rounded-xl transition-colors text-red-700",
          children: "Clear"
        }
      ),
      /* @__PURE__ */ S(
        "button",
        {
          onClick: () => l("0"),
          className: "py-4 bg-gray-100 hover:bg-gray-200 rounded-xl text-xl transition-colors",
          children: "0"
        }
      ),
      /* @__PURE__ */ S(
        "button",
        {
          onClick: u,
          className: "py-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors",
          children: "←"
        }
      )
    ] }),
    /* @__PURE__ */ $("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ S(
        "button",
        {
          onClick: a,
          className: "flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-xl transition-colors",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ S(
        "button",
        {
          onClick: c,
          disabled: !p,
          className: "flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white py-3 px-6 rounded-xl transition-colors",
          children: "Confirm"
        }
      )
    ] })
  ] }) });
}
function Li({
  transactions: e,
  players: t
}) {
  const r = (l) => {
    if (l === "bank")
      return { icon: "🏦", name: "Bank" };
    const i = t.find((u) => u.id === l);
    return i ? { icon: Ht[i.icon], name: i.name } : { icon: "❓", name: "Unknown" };
  }, a = (l) => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  }).format(l), o = (l) => new Date(l).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }), n = [...e].reverse();
  return /* @__PURE__ */ $("div", { className: "bg-white rounded-2xl shadow-lg p-6 h-64 flex flex-col", children: [
    /* @__PURE__ */ S("h2", { className: "text-xl mb-4 text-gray-800", children: "Transaction History" }),
    /* @__PURE__ */ S("div", { className: "flex-1 overflow-y-auto space-y-3", children: n.length === 0 ? /* @__PURE__ */ S("div", { className: "text-gray-500 text-center py-8", children: "No transactions yet" }) : n.map((l) => {
      const i = r(l.from), u = r(l.to);
      return /* @__PURE__ */ $(
        "div",
        {
          className: "flex items-center justify-between p-3 bg-gray-50 rounded-xl",
          children: [
            /* @__PURE__ */ $("div", { className: "flex items-center gap-3 flex-1", children: [
              /* @__PURE__ */ S("div", { className: "text-2xl", children: i.icon }),
              /* @__PURE__ */ S("span", { className: "text-sm text-gray-700", children: i.name }),
              /* @__PURE__ */ S(Wa, { className: "size-4 text-gray-400" }),
              /* @__PURE__ */ S("div", { className: "text-2xl", children: u.icon }),
              /* @__PURE__ */ S("span", { className: "text-sm text-gray-700", children: u.name })
            ] }),
            /* @__PURE__ */ $("div", { className: "text-right", children: [
              /* @__PURE__ */ S("div", { className: "text-green-700 font-bold", children: a(l.amount) }),
              /* @__PURE__ */ S("div", { className: "text-xs text-gray-500", children: o(l.timestamp) })
            ] })
          ]
        },
        l.id
      );
    }) })
  ] });
}
function Ci() {
  const e = At(), [t, r] = ne(null), [a, o] = ne(
    null
  ), [n, l] = ne(
    null
  ), [i, u] = ne(!1);
  if (Te(() => {
    const w = or();
    if (!w) {
      e("/");
      return;
    }
    r(w);
  }, [e]), !t)
    return /* @__PURE__ */ S("div", { className: "size-full flex items-center justify-center", children: /* @__PURE__ */ S("div", { className: "text-2xl text-gray-600", children: "Loading..." }) });
  const c = (w) => {
    a ? n || w === a || w !== "bank" && a !== "bank" && w.id === a.id || (l(w), u(!0)) : o(w);
  }, m = (w) => {
    a && !n && o(null);
  }, f = (w, x) => {
    w.stopPropagation(), c(x);
  }, y = (w) => {
    if (!a || !n) return;
    const x = {
      id: Date.now().toString(),
      from: a === "bank" ? "bank" : a.id,
      to: n === "bank" ? "bank" : n.id,
      amount: w,
      timestamp: Date.now()
    }, T = t.players.map((z) => a !== "bank" && z.id === a.id ? { ...z, balance: z.balance - w } : n !== "bank" && z.id === n.id ? { ...z, balance: z.balance + w } : z), K = {
      ...t,
      players: T,
      transactions: [...t.transactions, x]
    };
    r(K), Ba(K), p();
  }, p = () => {
    u(!1), o(null), l(null);
  }, v = (w) => w ? w === "bank" ? "bank" : t.players.find((x) => x.id === w.id) || null : null, E = v(a), P = v(n);
  return /* @__PURE__ */ $("div", { className: "size-full flex flex-col bg-gradient-to-br from-green-100 to-blue-100", children: [
    /* @__PURE__ */ $("div", { className: "bg-white shadow-md p-4 flex items-center justify-between", children: [
      /* @__PURE__ */ S("h1", { className: "text-2xl text-gray-800", children: "Bank Manager" }),
      /* @__PURE__ */ S(
        "button",
        {
          onClick: () => e("/"),
          className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
          children: /* @__PURE__ */ S(Ga, { className: "size-6 text-gray-600" })
        }
      )
    ] }),
    /* @__PURE__ */ S("div", { className: "flex-1 overflow-y-auto p-6", onClick: m, children: /* @__PURE__ */ $("div", { className: "max-w-6xl mx-auto space-y-6", children: [
      /* @__PURE__ */ $("div", { className: "bg-white rounded-2xl shadow-lg p-6", children: [
        /* @__PURE__ */ S("h2", { className: "text-xl mb-4 text-gray-800", children: a ? "Select recipient" : "Select sender" }),
        /* @__PURE__ */ $("div", { className: "flex flex-wrap gap-4 justify-center", children: [
          /* @__PURE__ */ S(
            sa,
            {
              isBank: !0,
              isSelected: a === "bank",
              onClick: (w) => f(w, "bank"),
              currency: t.currency
            }
          ),
          t.players.map((w) => /* @__PURE__ */ S(
            sa,
            {
              player: w,
              isSelected: a !== "bank" && a?.id === w.id || n !== "bank" && n?.id === w.id && a !== null,
              onClick: (x) => f(x, w),
              currency: t.currency
            },
            w.id
          ))
        ] })
      ] }),
      /* @__PURE__ */ S("div", { children: /* @__PURE__ */ S(
        Li,
        {
          transactions: t.transactions,
          players: t.players
        }
      ) })
    ] }) }),
    i && E && P && /* @__PURE__ */ S(
      Pi,
      {
        from: E,
        to: P,
        onConfirm: y,
        onClose: p
      }
    )
  ] });
}
const Ni = Kl([
  {
    path: "/",
    Component: Ei
  },
  {
    path: "/setup",
    Component: Si
  },
  {
    path: "/game",
    Component: Ci
  }
]);
function Di() {
  return /* @__PURE__ */ S(wl, { router: Ni });
}
const Mi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Di
}, Symbol.toStringTag, { value: "Module" }));
export {
  ki as Code0_8
};
