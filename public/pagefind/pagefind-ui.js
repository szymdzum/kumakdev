(() => {
  const Es = Object.defineProperty;
  const S = (n, e) => {
    for (const t in e) Es(n, t, { get: e[t], enumerable: !0 });
  };
  function j() {}
  function _t(n) {
    return n();
  }
  function un() {
    return Object.create(null);
  }
  function G(n) {
    n.forEach(_t);
  }
  function xe(n) {
    return typeof n === "function";
  }
  function K(n, e) {
    return n !== n ? e === e : n !== e || (n && typeof n === "object") || typeof n === "function";
  }
  let Xe;
  function ie(n, e) {
    return Xe || (Xe = document.createElement("a")), (Xe.href = e), n === Xe.href;
  }
  function cn(n) {
    return Object.keys(n).length === 0;
  }
  const _n = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
  const de = class {
    constructor(e) {
      (this.options = e), (this._listeners = "WeakMap" in _n ? new WeakMap() : void 0);
    }
    observe(e, t) {
      return (
        this._listeners.set(e, t),
        this._getObserver().observe(e, this.options),
        () => {
          this._listeners.delete(e), this._observer.unobserve(e);
        }
      );
    }
    _getObserver() {
      let e;
      return (e = this._observer) !== null && e !== void 0
        ? e
        : (this._observer = new ResizeObserver((t) => {
            let s;
            for (const l of t)
              de.entries.set(l.target, l),
                (s = this._listeners.get(l.target)) === null || s === void 0 || s(l);
          }));
    }
  };
  de.entries = "WeakMap" in _n ? new WeakMap() : void 0;
  let fn = !1;
  function Rs() {
    fn = !0;
  }
  function bs() {
    fn = !1;
  }
  function b(n, e) {
    n.appendChild(e);
  }
  function y(n, e, t) {
    n.insertBefore(e, t || null);
  }
  function k(n) {
    n.parentNode?.removeChild(n);
  }
  function Q(n, e) {
    for (let t = 0; t < n.length; t += 1) n[t]?.d(e);
  }
  function C(n) {
    return document.createElement(n);
  }
  function Ts(n) {
    return document.createElementNS("http://www.w3.org/2000/svg", n);
  }
  function w(n) {
    return document.createTextNode(n);
  }
  function A() {
    return w(" ");
  }
  function x() {
    return w("");
  }
  function J(n, e, t, s) {
    return n.addEventListener(e, t, s), () => n.removeEventListener(e, t, s);
  }
  function E(n, e, t) {
    t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
  }
  function Cs(n) {
    return Array.from(n.childNodes);
  }
  function N(n, e) {
    (e = `${e}`), n.data !== e && (n.data = e);
  }
  function ft(n, e) {
    n.value = e ?? "";
  }
  function B(n, e, t) {
    n.classList[t ? "add" : "remove"](e);
  }
  const $e = class {
    constructor(e = !1) {
      (this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
    }
    c(e) {
      this.h(e);
    }
    m(e, t, s = null) {
      this.e ||
        (this.is_svg
          ? (this.e = Ts(t.nodeName))
          : (this.e = C(t.nodeType === 11 ? "TEMPLATE" : t.nodeName)),
        (this.t = t.tagName !== "TEMPLATE" ? t : t.content),
        this.c(e)),
        this.i(s);
    }
    h(e) {
      (this.e.innerHTML = e),
        (this.n = Array.from(
          this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes
        ));
    }
    i(e) {
      for (let t = 0; t < this.n.length; t += 1) y(this.t, this.n[t], e);
    }
    p(e) {
      this.d(), this.h(e), this.i(this.a);
    }
    d() {
      this.n.forEach(k);
    }
  };
  let he;
  function fe(n) {
    he = n;
  }
  function dn() {
    if (!he) throw new Error("Function called outside component initialization");
    return he;
  }
  function dt(n) {
    dn().$$.on_mount.push(n);
  }
  function ht(n) {
    dn().$$.on_destroy.push(n);
  }
  const se = [];
  const re = [];
  let le = [];
  const ot = [];
  const ks = Promise.resolve();
  let ut = !1;
  function ys() {
    ut || ((ut = !0), ks.then(mn));
  }
  function ct(n) {
    le.push(n);
  }
  function hn(n) {
    ot.push(n);
  }
  const at = new Set();
  let ne = 0;
  function mn() {
    if (ne !== 0) return;
    const n = he;
    do {
      try {
        while (ne < se.length) {
          const e = se[ne];
          ne++, fe(e), Ss(e.$$);
        }
      } catch (e) {
        throw ((se.length = 0), (ne = 0), e);
      }
      for (fe(null), se.length = 0, ne = 0; re.length; ) re.pop()();
      for (let e = 0; e < le.length; e += 1) {
        const t = le[e];
        at.has(t) || (at.add(t), t());
      }
      le.length = 0;
    } while (se.length);
    while (ot.length) ot.pop()();
    (ut = !1), at.clear(), fe(n);
  }
  function Ss(n) {
    if (n.fragment !== null) {
      n.update(), G(n.before_update);
      const e = n.dirty;
      (n.dirty = [-1]), n.fragment?.p(n.ctx, e), n.after_update.forEach(ct);
    }
  }
  function Ms(n) {
    const e = [];
    const t = [];
    le.forEach((s) => (n.indexOf(s) === -1 ? e.push(s) : t.push(s))),
      t.forEach((s) => s()),
      (le = e);
  }
  const Qe = new Set();
  let ee;
  function ae() {
    ee = { r: 0, c: [], p: ee };
  }
  function oe() {
    ee.r || G(ee.c), (ee = ee.p);
  }
  function D(n, e) {
    n?.i && (Qe.delete(n), n.i(e));
  }
  function P(n, e, t, s) {
    if (n?.o) {
      if (Qe.has(n)) return;
      Qe.add(n),
        ee.c.push(() => {
          Qe.delete(n), s && (t && n.d(1), s());
        }),
        n.o(e);
    } else s?.();
  }
  function pn(n, e) {
    P(n, 1, 1, () => {
      e.delete(n.key);
    });
  }
  function gn(n, e, t, s, l, r, i, a, o, h, c, m) {
    let p = n.length;
    let d = r.length;
    let _ = p;
    const u = {};
    while (_--) u[n[_].key] = _;
    const f = [];
    const T = new Map();
    const R = new Map();
    const M = [];
    for (_ = d; _--; ) {
      const v = m(l, r, _);
      const F = t(v);
      let O = i.get(F);
      O ? s && M.push(() => O.p(v, e)) : ((O = h(F, v)), O.c()),
        T.set(F, (f[_] = O)),
        F in u && R.set(F, Math.abs(_ - u[F]));
    }
    const U = new Set();
    const X = new Set();
    function W(v) {
      D(v, 1), v.m(a, c), i.set(v.key, v), (c = v.first), d--;
    }
    while (p && d) {
      const v = f[d - 1];
      const F = n[p - 1];
      const O = v.key;
      const V = F.key;
      v === F
        ? ((c = v.first), p--, d--)
        : T.has(V)
          ? !i.has(O) || U.has(O)
            ? W(v)
            : X.has(V)
              ? p--
              : R.get(O) > R.get(V)
                ? (X.add(O), W(v))
                : (U.add(V), p--)
          : (o(F, i), p--);
    }
    while (p--) {
      const v = n[p];
      T.has(v.key) || o(v, i);
    }
    while (d) W(f[d - 1]);
    return G(M), f;
  }
  const As = [
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected",
  ];
  const oa = new Set([...As]);
  function En(n, e, t) {
    const s = n.$$.props[e];
    s !== void 0 && ((n.$$.bound[s] = t), t(n.$$.ctx[s]));
  }
  function et(n) {
    n?.c();
  }
  function me(n, e, t, s) {
    const { fragment: l, after_update: r } = n.$$;
    l?.m(e, t),
      s ||
        ct(() => {
          const i = n.$$.on_mount.map(_t).filter(xe);
          n.$$.on_destroy ? n.$$.on_destroy.push(...i) : G(i), (n.$$.on_mount = []);
        }),
      r.forEach(ct);
  }
  function ue(n, e) {
    const t = n.$$;
    t.fragment !== null &&
      (Ms(t.after_update),
      G(t.on_destroy),
      t.fragment?.d(e),
      (t.on_destroy = t.fragment = null),
      (t.ctx = []));
  }
  function vs(n, e) {
    n.$$.dirty[0] === -1 && (se.push(n), ys(), n.$$.dirty.fill(0)),
      (n.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function Y(n, e, t, s, l, r, i, a = [-1]) {
    const o = he;
    fe(n);
    const h = (n.$$ = {
      fragment: null,
      ctx: [],
      props: r,
      update: j,
      not_equal: l,
      bound: un(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(e.context || (o ? o.$$.context : [])),
      callbacks: un(),
      dirty: a,
      skip_bound: !1,
      root: e.target || o.$$.root,
    });
    i?.(h.root);
    let c = !1;
    if (
      ((h.ctx = t
        ? t(n, e.props || {}, (m, p, ...d) => {
            const _ = d.length ? d[0] : p;
            return (
              h.ctx &&
                l(h.ctx[m], (h.ctx[m] = _)) &&
                (!h.skip_bound && h.bound[m] && h.bound[m](_), c && vs(n, m)),
              p
            );
          })
        : []),
      h.update(),
      (c = !0),
      G(h.before_update),
      (h.fragment = s ? s(h.ctx) : !1),
      e.target)
    ) {
      if (e.hydrate) {
        Rs();
        const m = Cs(e.target);
        h.fragment?.l(m), m.forEach(k);
      } else h.fragment?.c();
      e.intro && D(n.$$.fragment), me(n, e.target, e.anchor, e.customElement), bs(), mn();
    }
    fe(o);
  }
  let ws;
  typeof HTMLElement === "function" &&
    (ws = class extends HTMLElement {
      constructor() {
        super(), this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount: n } = this.$$;
        this.$$.on_disconnect = n.map(_t).filter(xe);
        for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e]);
      }
      attributeChangedCallback(n, e, t) {
        this[n] = t;
      }
      disconnectedCallback() {
        G(this.$$.on_disconnect);
      }
      $destroy() {
        ue(this, 1), (this.$destroy = j);
      }
      $on(n, e) {
        if (!xe(e)) return j;
        const t = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
        return (
          t.push(e),
          () => {
            const s = t.indexOf(e);
            s !== -1 && t.splice(s, 1);
          }
        );
      }
      $set(n) {
        this.$$set &&
          !cn(n) &&
          ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
      }
    });
  const q = class {
    $destroy() {
      ue(this, 1), (this.$destroy = j);
    }
    $on(e, t) {
      if (!xe(t)) return j;
      const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        s.push(t),
        () => {
          const l = s.indexOf(t);
          l !== -1 && s.splice(l, 1);
        }
      );
    }
    $set(e) {
      this.$$set && !cn(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  };
  function I(n) {
    const e = typeof n === "string" ? n.charCodeAt(0) : n;
    return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
  }
  function $(n) {
    const e = typeof n === "string" ? n.charCodeAt(0) : n;
    return e >= 48 && e <= 57;
  }
  function Z(n) {
    return I(n) || $(n);
  }
  const Rn = [
    "art-lojban",
    "cel-gaulish",
    "no-bok",
    "no-nyn",
    "zh-guoyu",
    "zh-hakka",
    "zh-min",
    "zh-min-nan",
    "zh-xiang",
  ];
  const mt = {
    "en-gb-oed": "en-GB-oxendict",
    "i-ami": "ami",
    "i-bnn": "bnn",
    "i-default": null,
    "i-enochian": null,
    "i-hak": "hak",
    "i-klingon": "tlh",
    "i-lux": "lb",
    "i-mingo": null,
    "i-navajo": "nv",
    "i-pwn": "pwn",
    "i-tao": "tao",
    "i-tay": "tay",
    "i-tsu": "tsu",
    "sgn-be-fr": "sfb",
    "sgn-be-nl": "vgt",
    "sgn-ch-de": "sgg",
    "art-lojban": "jbo",
    "cel-gaulish": null,
    "no-bok": "nb",
    "no-nyn": "nn",
    "zh-guoyu": "cmn",
    "zh-hakka": "hak",
    "zh-min": null,
    "zh-min-nan": "nan",
    "zh-xiang": "hsn",
  };
  const Fs = {}.hasOwnProperty;
  function tt(n, e = {}) {
    const t = bn();
    const s = String(n);
    const l = s.toLowerCase();
    let r = 0;
    if (n == null) throw new Error(`Expected string, got \`${n}\``);
    if (Fs.call(mt, l)) {
      const a = mt[l];
      return (e.normalize === void 0 || e.normalize === null || e.normalize) &&
        typeof a === "string"
        ? tt(a)
        : ((t[Rn.includes(l) ? "regular" : "irregular"] = s), t);
    }
    while (I(l.charCodeAt(r)) && r < 9) r++;
    if (r > 1 && r < 9) {
      if (((t.language = s.slice(0, r)), r < 4)) {
        let a = 0;
        while (
          l.charCodeAt(r) === 45 &&
          I(l.charCodeAt(r + 1)) &&
          I(l.charCodeAt(r + 2)) &&
          I(l.charCodeAt(r + 3)) &&
          !I(l.charCodeAt(r + 4))
        ) {
          if (a > 2)
            return i(r, 3, "Too many extended language subtags, expected at most 3 subtags");
          t.extendedLanguageSubtags.push(s.slice(r + 1, r + 4)), (r += 4), a++;
        }
      }
      for (
        l.charCodeAt(r) === 45 &&
          I(l.charCodeAt(r + 1)) &&
          I(l.charCodeAt(r + 2)) &&
          I(l.charCodeAt(r + 3)) &&
          I(l.charCodeAt(r + 4)) &&
          !I(l.charCodeAt(r + 5)) &&
          ((t.script = s.slice(r + 1, r + 5)), (r += 5)),
          l.charCodeAt(r) === 45 &&
            (I(l.charCodeAt(r + 1)) && I(l.charCodeAt(r + 2)) && !I(l.charCodeAt(r + 3))
              ? ((t.region = s.slice(r + 1, r + 3)), (r += 3))
              : $(l.charCodeAt(r + 1)) &&
                $(l.charCodeAt(r + 2)) &&
                $(l.charCodeAt(r + 3)) &&
                !$(l.charCodeAt(r + 4)) &&
                ((t.region = s.slice(r + 1, r + 4)), (r += 4)));
        l.charCodeAt(r) === 45;

      ) {
        const a = r + 1;
        let o = a;
        while (Z(l.charCodeAt(o))) {
          if (o - a > 7) return i(o, 1, "Too long variant, expected at most 8 characters");
          o++;
        }
        if (o - a > 4 || (o - a > 3 && $(l.charCodeAt(a)))) t.variants.push(s.slice(a, o)), (r = o);
        else break;
      }
      while (
        l.charCodeAt(r) === 45 &&
        !(
          l.charCodeAt(r + 1) === 120 ||
          !Z(l.charCodeAt(r + 1)) ||
          l.charCodeAt(r + 2) !== 45 ||
          !Z(l.charCodeAt(r + 3))
        )
      ) {
        let a = r + 2;
        let o = 0;
        while (l.charCodeAt(a) === 45 && Z(l.charCodeAt(a + 1)) && Z(l.charCodeAt(a + 2))) {
          const h = a + 1;
          for (a = h + 2, o++; Z(l.charCodeAt(a)); ) {
            if (a - h > 7) return i(a, 2, "Too long extension, expected at most 8 characters");
            a++;
          }
        }
        if (!o)
          return i(a, 4, "Empty extension, extensions must have at least 2 characters of content");
        t.extensions.push({
          singleton: s.charAt(r + 1),
          extensions: s.slice(r + 3, a).split("-"),
        }),
          (r = a);
      }
    } else r = 0;
    if (
      (r === 0 && l.charCodeAt(r) === 120) ||
      (l.charCodeAt(r) === 45 && l.charCodeAt(r + 1) === 120)
    ) {
      r = r ? r + 2 : 1;
      let a = r;
      while (l.charCodeAt(a) === 45 && Z(l.charCodeAt(a + 1))) {
        const o = r + 1;
        for (a = o; Z(l.charCodeAt(a)); ) {
          if (a - o > 7) return i(a, 5, "Too long private-use area, expected at most 8 characters");
          a++;
        }
        t.privateuse.push(s.slice(r + 1, a)), (r = a);
      }
    }
    if (r !== s.length) return i(r, 6, "Found superfluous content after tag");
    return t;
    function i(a, o, h) {
      return e.warning?.(h, o, a), e.forgiving ? t : bn();
    }
  }
  function bn() {
    return {
      language: null,
      extendedLanguageSubtags: [],
      script: null,
      region: null,
      variants: [],
      extensions: [],
      privateuse: [],
      irregular: null,
      regular: null,
    };
  }
  function Tn(n, e, t) {
    const s = n.slice();
    return (s[8] = e[t][0]), (s[9] = e[t][1]), s;
  }
  function Hs(n) {
    let e;
    let t;
    let s;
    let l;
    let r;
    let i = n[0] && Cn(n);
    return {
      c() {
        i?.c(),
          (e = A()),
          (t = C("div")),
          (s = C("p")),
          (s.textContent = `${n[3](30)}`),
          (l = A()),
          (r = C("p")),
          (r.textContent = `${n[3](40)}`),
          E(s, "class", "pagefind-ui__result-title pagefind-ui__loading svelte-j9e30"),
          E(r, "class", "pagefind-ui__result-excerpt pagefind-ui__loading svelte-j9e30"),
          E(t, "class", "pagefind-ui__result-inner svelte-j9e30");
      },
      m(a, o) {
        i?.m(a, o), y(a, e, o), y(a, t, o), b(t, s), b(t, l), b(t, r);
      },
      p(a, o) {
        a[0] ? i || ((i = Cn(a)), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), (i = null));
      },
      d(a) {
        i?.d(a), a && k(e), a && k(t);
      },
    };
  }
  function Ns(n) {
    let e;
    let t;
    let s;
    let l;
    let r = `${n[1].meta?.title}`;
    let i;
    let a;
    let o;
    let h;
    let c = `${n[1].excerpt}`;
    let m;
    let p = n[0] && kn(n);
    let d = n[2].length && Sn(n);
    return {
      c() {
        p?.c(),
          (e = A()),
          (t = C("div")),
          (s = C("p")),
          (l = C("a")),
          (i = w(r)),
          (o = A()),
          (h = C("p")),
          (m = A()),
          d?.c(),
          E(l, "class", "pagefind-ui__result-link svelte-j9e30"),
          E(l, "href", (a = n[1].meta?.url || n[1].url)),
          E(s, "class", "pagefind-ui__result-title svelte-j9e30"),
          E(h, "class", "pagefind-ui__result-excerpt svelte-j9e30"),
          E(t, "class", "pagefind-ui__result-inner svelte-j9e30");
      },
      m(_, u) {
        p?.m(_, u),
          y(_, e, u),
          y(_, t, u),
          b(t, s),
          b(s, l),
          b(l, i),
          b(t, o),
          b(t, h),
          (h.innerHTML = c),
          b(t, m),
          d?.m(t, null);
      },
      p(_, u) {
        _[0]
          ? p
            ? p.p(_, u)
            : ((p = kn(_)), p.c(), p.m(e.parentNode, e))
          : p && (p.d(1), (p = null)),
          u & 2 && r !== (r = `${_[1].meta?.title}`) && N(i, r),
          u & 2 && a !== (a = _[1].meta?.url || _[1].url) && E(l, "href", a),
          u & 2 && c !== (c = `${_[1].excerpt}`) && (h.innerHTML = c),
          _[2].length
            ? d
              ? d.p(_, u)
              : ((d = Sn(_)), d.c(), d.m(t, null))
            : d && (d.d(1), (d = null));
      },
      d(_) {
        p?.d(_), _ && k(e), _ && k(t), d?.d();
      },
    };
  }
  function Cn(n) {
    let e;
    return {
      c() {
        (e = C("div")),
          E(e, "class", "pagefind-ui__result-thumb pagefind-ui__loading svelte-j9e30");
      },
      m(t, s) {
        y(t, e, s);
      },
      d(t) {
        t && k(e);
      },
    };
  }
  function kn(n) {
    let e;
    let t = n[1].meta.image && yn(n);
    return {
      c() {
        (e = C("div")), t?.c(), E(e, "class", "pagefind-ui__result-thumb svelte-j9e30");
      },
      m(s, l) {
        y(s, e, l), t?.m(e, null);
      },
      p(s, l) {
        s[1].meta.image
          ? t
            ? t.p(s, l)
            : ((t = yn(s)), t.c(), t.m(e, null))
          : t && (t.d(1), (t = null));
      },
      d(s) {
        s && k(e), t?.d();
      },
    };
  }
  function yn(n) {
    let e;
    let t;
    let s;
    return {
      c() {
        (e = C("img")),
          E(e, "class", "pagefind-ui__result-image svelte-j9e30"),
          ie(e.src, (t = n[1].meta?.image)) || E(e, "src", t),
          E(e, "alt", (s = n[1].meta?.image_alt || n[1].meta?.title));
      },
      m(l, r) {
        y(l, e, r);
      },
      p(l, r) {
        r & 2 && !ie(e.src, (t = l[1].meta?.image)) && E(e, "src", t),
          r & 2 && s !== (s = l[1].meta?.image_alt || l[1].meta?.title) && E(e, "alt", s);
      },
      d(l) {
        l && k(e);
      },
    };
  }
  function Sn(n) {
    let e;
    let t = n[2];
    const s = [];
    for (let l = 0; l < t.length; l += 1) s[l] = Mn(Tn(n, t, l));
    return {
      c() {
        e = C("ul");
        for (let l = 0; l < s.length; l += 1) s[l].c();
        E(e, "class", "pagefind-ui__result-tags svelte-j9e30");
      },
      m(l, r) {
        y(l, e, r);
        for (let i = 0; i < s.length; i += 1) s[i]?.m(e, null);
      },
      p(l, r) {
        if (r & 4) {
          t = l[2];
          let i;
          for (i = 0; i < t.length; i += 1) {
            const a = Tn(l, t, i);
            s[i] ? s[i].p(a, r) : ((s[i] = Mn(a)), s[i].c(), s[i].m(e, null));
          }
          for (; i < s.length; i += 1) s[i].d(1);
          s.length = t.length;
        }
      },
      d(l) {
        l && k(e), Q(s, l);
      },
    };
  }
  function Mn(n) {
    let e;
    let t = `${n[8].replace(/^(\w)/, An)}`;
    let s;
    let l;
    let r = `${n[9]}`;
    let i;
    let a;
    return {
      c() {
        (e = C("li")),
          (s = w(t)),
          (l = w(": ")),
          (i = w(r)),
          (a = A()),
          E(e, "class", "pagefind-ui__result-tag svelte-j9e30");
      },
      m(o, h) {
        y(o, e, h), b(e, s), b(e, l), b(e, i), b(e, a);
      },
      p(o, h) {
        h & 4 && t !== (t = `${o[8].replace(/^(\w)/, An)}`) && N(s, t),
          h & 4 && r !== (r = `${o[9]}`) && N(i, r);
      },
      d(o) {
        o && k(e);
      },
    };
  }
  function Os(n) {
    let e;
    function t(r, i) {
      return r[1] ? Ns : Hs;
    }
    let s = t(n, -1);
    let l = s(n);
    return {
      c() {
        (e = C("li")), l.c(), E(e, "class", "pagefind-ui__result svelte-j9e30");
      },
      m(r, i) {
        y(r, e, i), l.m(e, null);
      },
      p(r, [i]) {
        s === (s = t(r, i)) && l ? l.p(r, i) : (l.d(1), (l = s(r)), l && (l.c(), l.m(e, null)));
      },
      i: j,
      o: j,
      d(r) {
        r && k(e), l.d();
      },
    };
  }
  const An = (n) => n.toLocaleUpperCase();
  function zs(n, e, t) {
    let { show_images: s = !0 } = e;
    let { process_result: l = null } = e;
    let { result: r = { data: async () => {} } } = e;
    const i = ["title", "image", "image_alt", "url"];
    let a;
    let o = [];
    const h = async (m) => {
      t(1, (a = await m.data())),
        t(1, (a = l?.(a) ?? a)),
        t(2, (o = Object.entries(a.meta).filter(([p]) => !i.includes(p))));
    };
    const c = (m = 30) => ". ".repeat(Math.floor(10 + Math.random() * m));
    return (
      (n.$$set = (m) => {
        "show_images" in m && t(0, (s = m.show_images)),
          "process_result" in m && t(4, (l = m.process_result)),
          "result" in m && t(5, (r = m.result));
      }),
      (n.$$.update = () => {
        if (n.$$.dirty & 32) e: h(r);
      }),
      [s, a, o, c, l, r]
    );
  }
  const pt = class extends q {
    constructor(e) {
      super(),
        Y(this, e, zs, Os, K, {
          show_images: 0,
          process_result: 4,
          result: 5,
        });
    }
  };
  const vn = pt;
  function wn(n, e, t) {
    const s = n.slice();
    return (s[11] = e[t][0]), (s[12] = e[t][1]), s;
  }
  function Fn(n, e, t) {
    const s = n.slice();
    return (s[15] = e[t]), s;
  }
  function js(n) {
    let e;
    let t;
    let s;
    let l;
    let r;
    let i = n[0] && Hn(n);
    return {
      c() {
        i?.c(),
          (e = A()),
          (t = C("div")),
          (s = C("p")),
          (s.textContent = `${n[5](30)}`),
          (l = A()),
          (r = C("p")),
          (r.textContent = `${n[5](40)}`),
          E(s, "class", "pagefind-ui__result-title pagefind-ui__loading svelte-4xnkmf"),
          E(r, "class", "pagefind-ui__result-excerpt pagefind-ui__loading svelte-4xnkmf"),
          E(t, "class", "pagefind-ui__result-inner svelte-4xnkmf");
      },
      m(a, o) {
        i?.m(a, o), y(a, e, o), y(a, t, o), b(t, s), b(t, l), b(t, r);
      },
      p(a, o) {
        a[0] ? i || ((i = Hn(a)), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), (i = null));
      },
      d(a) {
        i?.d(a), a && k(e), a && k(t);
      },
    };
  }
  function Ds(n) {
    let e;
    let t;
    let s;
    let l;
    let r = `${n[1].meta?.title}`;
    let i;
    let a;
    let o;
    let h;
    let c;
    let m = n[0] && Nn(n);
    let p = n[4] && zn(n);
    let d = n[3];
    const _ = [];
    for (let f = 0; f < d.length; f += 1) _[f] = jn(Fn(n, d, f));
    let u = n[2].length && Dn(n);
    return {
      c() {
        m?.c(),
          (e = A()),
          (t = C("div")),
          (s = C("p")),
          (l = C("a")),
          (i = w(r)),
          (o = A()),
          p?.c(),
          (h = A());
        for (let f = 0; f < _.length; f += 1) _[f].c();
        (c = A()),
          u?.c(),
          E(l, "class", "pagefind-ui__result-link svelte-4xnkmf"),
          E(l, "href", (a = n[1].meta?.url || n[1].url)),
          E(s, "class", "pagefind-ui__result-title svelte-4xnkmf"),
          E(t, "class", "pagefind-ui__result-inner svelte-4xnkmf");
      },
      m(f, T) {
        m?.m(f, T),
          y(f, e, T),
          y(f, t, T),
          b(t, s),
          b(s, l),
          b(l, i),
          b(t, o),
          p?.m(t, null),
          b(t, h);
        for (let R = 0; R < _.length; R += 1) _[R]?.m(t, null);
        b(t, c), u?.m(t, null);
      },
      p(f, T) {
        if (
          (f[0]
            ? m
              ? m.p(f, T)
              : ((m = Nn(f)), m.c(), m.m(e.parentNode, e))
            : m && (m.d(1), (m = null)),
          T & 2 && r !== (r = `${f[1].meta?.title}`) && N(i, r),
          T & 2 && a !== (a = f[1].meta?.url || f[1].url) && E(l, "href", a),
          f[4] ? (p ? p.p(f, T) : ((p = zn(f)), p.c(), p.m(t, h))) : p && (p.d(1), (p = null)),
          T & 8)
        ) {
          d = f[3];
          let R;
          for (R = 0; R < d.length; R += 1) {
            const M = Fn(f, d, R);
            _[R] ? _[R].p(M, T) : ((_[R] = jn(M)), _[R].c(), _[R].m(t, c));
          }
          for (; R < _.length; R += 1) _[R].d(1);
          _.length = d.length;
        }
        f[2].length
          ? u
            ? u.p(f, T)
            : ((u = Dn(f)), u.c(), u.m(t, null))
          : u && (u.d(1), (u = null));
      },
      d(f) {
        m?.d(f), f && k(e), f && k(t), p?.d(), Q(_, f), u?.d();
      },
    };
  }
  function Hn(n) {
    let e;
    return {
      c() {
        (e = C("div")),
          E(e, "class", "pagefind-ui__result-thumb pagefind-ui__loading svelte-4xnkmf");
      },
      m(t, s) {
        y(t, e, s);
      },
      d(t) {
        t && k(e);
      },
    };
  }
  function Nn(n) {
    let e;
    let t = n[1].meta.image && On(n);
    return {
      c() {
        (e = C("div")), t?.c(), E(e, "class", "pagefind-ui__result-thumb svelte-4xnkmf");
      },
      m(s, l) {
        y(s, e, l), t?.m(e, null);
      },
      p(s, l) {
        s[1].meta.image
          ? t
            ? t.p(s, l)
            : ((t = On(s)), t.c(), t.m(e, null))
          : t && (t.d(1), (t = null));
      },
      d(s) {
        s && k(e), t?.d();
      },
    };
  }
  function On(n) {
    let e;
    let t;
    let s;
    return {
      c() {
        (e = C("img")),
          E(e, "class", "pagefind-ui__result-image svelte-4xnkmf"),
          ie(e.src, (t = n[1].meta?.image)) || E(e, "src", t),
          E(e, "alt", (s = n[1].meta?.image_alt || n[1].meta?.title));
      },
      m(l, r) {
        y(l, e, r);
      },
      p(l, r) {
        r & 2 && !ie(e.src, (t = l[1].meta?.image)) && E(e, "src", t),
          r & 2 && s !== (s = l[1].meta?.image_alt || l[1].meta?.title) && E(e, "alt", s);
      },
      d(l) {
        l && k(e);
      },
    };
  }
  function zn(n) {
    let e;
    let t = `${n[1].excerpt}`;
    return {
      c() {
        (e = C("p")), E(e, "class", "pagefind-ui__result-excerpt svelte-4xnkmf");
      },
      m(s, l) {
        y(s, e, l), (e.innerHTML = t);
      },
      p(s, l) {
        l & 2 && t !== (t = `${s[1].excerpt}`) && (e.innerHTML = t);
      },
      d(s) {
        s && k(e);
      },
    };
  }
  function jn(n) {
    let e;
    let t;
    let s;
    let l = `${n[15].title}`;
    let r;
    let i;
    let a;
    let o;
    let h = `${n[15].excerpt}`;
    return {
      c() {
        (e = C("div")),
          (t = C("p")),
          (s = C("a")),
          (r = w(l)),
          (a = A()),
          (o = C("p")),
          E(s, "class", "pagefind-ui__result-link svelte-4xnkmf"),
          E(s, "href", (i = n[15].url)),
          E(t, "class", "pagefind-ui__result-title svelte-4xnkmf"),
          E(o, "class", "pagefind-ui__result-excerpt svelte-4xnkmf"),
          E(e, "class", "pagefind-ui__result-nested svelte-4xnkmf");
      },
      m(c, m) {
        y(c, e, m), b(e, t), b(t, s), b(s, r), b(e, a), b(e, o), (o.innerHTML = h);
      },
      p(c, m) {
        m & 8 && l !== (l = `${c[15].title}`) && N(r, l),
          m & 8 && i !== (i = c[15].url) && E(s, "href", i),
          m & 8 && h !== (h = `${c[15].excerpt}`) && (o.innerHTML = h);
      },
      d(c) {
        c && k(e);
      },
    };
  }
  function Dn(n) {
    let e;
    let t = n[2];
    const s = [];
    for (let l = 0; l < t.length; l += 1) s[l] = Un(wn(n, t, l));
    return {
      c() {
        e = C("ul");
        for (let l = 0; l < s.length; l += 1) s[l].c();
        E(e, "class", "pagefind-ui__result-tags svelte-4xnkmf");
      },
      m(l, r) {
        y(l, e, r);
        for (let i = 0; i < s.length; i += 1) s[i]?.m(e, null);
      },
      p(l, r) {
        if (r & 4) {
          t = l[2];
          let i;
          for (i = 0; i < t.length; i += 1) {
            const a = wn(l, t, i);
            s[i] ? s[i].p(a, r) : ((s[i] = Un(a)), s[i].c(), s[i].m(e, null));
          }
          for (; i < s.length; i += 1) s[i].d(1);
          s.length = t.length;
        }
      },
      d(l) {
        l && k(e), Q(s, l);
      },
    };
  }
  function Un(n) {
    let e;
    let t = `${n[11].replace(/^(\w)/, In)}`;
    let s;
    let l;
    let r = `${n[12]}`;
    let i;
    let a;
    return {
      c() {
        (e = C("li")),
          (s = w(t)),
          (l = w(": ")),
          (i = w(r)),
          (a = A()),
          E(e, "class", "pagefind-ui__result-tag svelte-4xnkmf");
      },
      m(o, h) {
        y(o, e, h), b(e, s), b(e, l), b(e, i), b(e, a);
      },
      p(o, h) {
        h & 4 && t !== (t = `${o[11].replace(/^(\w)/, In)}`) && N(s, t),
          h & 4 && r !== (r = `${o[12]}`) && N(i, r);
      },
      d(o) {
        o && k(e);
      },
    };
  }
  function Us(n) {
    let e;
    function t(r, i) {
      return r[1] ? Ds : js;
    }
    let s = t(n, -1);
    let l = s(n);
    return {
      c() {
        (e = C("li")), l.c(), E(e, "class", "pagefind-ui__result svelte-4xnkmf");
      },
      m(r, i) {
        y(r, e, i), l.m(e, null);
      },
      p(r, [i]) {
        s === (s = t(r, i)) && l ? l.p(r, i) : (l.d(1), (l = s(r)), l && (l.c(), l.m(e, null)));
      },
      i: j,
      o: j,
      d(r) {
        r && k(e), l.d();
      },
    };
  }
  const In = (n) => n.toLocaleUpperCase();
  function Is(n, e, t) {
    let { show_images: s = !0 } = e;
    let { process_result: l = null } = e;
    let { result: r = { data: async () => {} } } = e;
    const i = ["title", "image", "image_alt", "url"];
    let a;
    let o = [];
    let h = [];
    let c = !1;
    const m = (_, u) => {
      if (_.length <= u) return _;
      const f = [..._]
        .sort((T, R) => R.locations.length - T.locations.length)
        .slice(0, 3)
        .map((T) => T.url);
      return _.filter((T) => f.includes(T.url));
    };
    const p = async (_) => {
      t(1, (a = await _.data())),
        t(1, (a = l?.(a) ?? a)),
        t(2, (o = Object.entries(a.meta).filter(([u]) => !i.includes(u)))),
        Array.isArray(a.sub_results) &&
          (t(4, (c = a.sub_results?.[0]?.url === (a.meta?.url || a.url))),
          c ? t(3, (h = m(a.sub_results.slice(1), 3))) : t(3, (h = m([...a.sub_results], 3))));
    };
    const d = (_ = 30) => ". ".repeat(Math.floor(10 + Math.random() * _));
    return (
      (n.$$set = (_) => {
        "show_images" in _ && t(0, (s = _.show_images)),
          "process_result" in _ && t(6, (l = _.process_result)),
          "result" in _ && t(7, (r = _.result));
      }),
      (n.$$.update = () => {
        if (n.$$.dirty & 128) e: p(r);
      }),
      [s, a, o, h, c, d, l, r]
    );
  }
  const gt = class extends q {
    constructor(e) {
      super(),
        Y(this, e, Is, Us, K, {
          show_images: 0,
          process_result: 6,
          result: 7,
        });
    }
  };
  const Pn = gt;
  function Ln(n, e, t) {
    const s = n.slice();
    return (s[10] = e[t][0]), (s[11] = e[t][1]), (s[12] = e), (s[13] = t), s;
  }
  function qn(n, e, t) {
    const s = n.slice();
    return (s[14] = e[t][0]), (s[15] = e[t][1]), (s[16] = e), (s[17] = t), s;
  }
  function Bn(n) {
    let e;
    let t;
    let s = `${n[4]("filters_label", n[5], n[6])}`;
    let l;
    let r;
    let i = Object.entries(n[1]);
    const a = [];
    for (let o = 0; o < i.length; o += 1) a[o] = Gn(Ln(n, i, o));
    return {
      c() {
        (e = C("fieldset")), (t = C("legend")), (l = w(s)), (r = A());
        for (let o = 0; o < a.length; o += 1) a[o].c();
        E(t, "class", "pagefind-ui__filter-panel-label svelte-1v2r7ls"),
          E(e, "class", "pagefind-ui__filter-panel svelte-1v2r7ls");
      },
      m(o, h) {
        y(o, e, h), b(e, t), b(t, l), b(e, r);
        for (let c = 0; c < a.length; c += 1) a[c]?.m(e, null);
      },
      p(o, h) {
        if ((h & 112 && s !== (s = `${o[4]("filters_label", o[5], o[6])}`) && N(l, s), h & 143)) {
          i = Object.entries(o[1]);
          let c;
          for (c = 0; c < i.length; c += 1) {
            const m = Ln(o, i, c);
            a[c] ? a[c].p(m, h) : ((a[c] = Gn(m)), a[c].c(), a[c].m(e, null));
          }
          for (; c < a.length; c += 1) a[c].d(1);
          a.length = i.length;
        }
      },
      d(o) {
        o && k(e), Q(a, o);
      },
    };
  }
  function Wn(n) {
    let e;
    let t;
    let s;
    let l;
    let r;
    let i;
    let a;
    let o;
    let h = `${n[14]}`;
    let c;
    let m = `${n[15]}`;
    let p;
    let d;
    let _;
    let u;
    let f;
    let T;
    function R() {
      n[9].call(t, n[10], n[14]);
    }
    return {
      c() {
        (e = C("div")),
          (t = C("input")),
          (i = A()),
          (a = C("label")),
          (o = new $e(!1)),
          (c = w(" (")),
          (p = w(m)),
          (d = w(")")),
          (u = A()),
          E(t, "class", "pagefind-ui__filter-checkbox svelte-1v2r7ls"),
          E(t, "type", "checkbox"),
          E(t, "id", (s = `${n[10]}-${n[14]}`)),
          E(t, "name", (l = n[10])),
          (t.__value = r = n[14]),
          (t.value = t.__value),
          (o.a = c),
          E(a, "class", "pagefind-ui__filter-label svelte-1v2r7ls"),
          E(a, "for", (_ = `${n[10]}-${n[14]}`)),
          E(e, "class", "pagefind-ui__filter-value svelte-1v2r7ls"),
          B(e, "pagefind-ui__filter-value--checked", n[0][`${n[10]}:${n[14]}`]);
      },
      m(M, U) {
        y(M, e, U),
          b(e, t),
          (t.checked = n[0][`${n[10]}:${n[14]}`]),
          b(e, i),
          b(e, a),
          o.m(h, a),
          b(a, c),
          b(a, p),
          b(a, d),
          b(e, u),
          f || ((T = J(t, "change", R)), (f = !0));
      },
      p(M, U) {
        (n = M),
          U & 2 && s !== (s = `${n[10]}-${n[14]}`) && E(t, "id", s),
          U & 2 && l !== (l = n[10]) && E(t, "name", l),
          U & 2 && r !== (r = n[14]) && ((t.__value = r), (t.value = t.__value)),
          U & 3 && (t.checked = n[0][`${n[10]}:${n[14]}`]),
          U & 2 && h !== (h = `${n[14]}`) && o.p(h),
          U & 2 && m !== (m = `${n[15]}`) && N(p, m),
          U & 2 && _ !== (_ = `${n[10]}-${n[14]}`) && E(a, "for", _),
          U & 3 && B(e, "pagefind-ui__filter-value--checked", n[0][`${n[10]}:${n[14]}`]);
      },
      d(M) {
        M && k(e), (f = !1), T();
      },
    };
  }
  function Vn(n) {
    let e;
    let t = (n[2] || n[15] || n[0][`${n[10]}:${n[14]}`]) && Wn(n);
    return {
      c() {
        t?.c(), (e = x());
      },
      m(s, l) {
        t?.m(s, l), y(s, e, l);
      },
      p(s, l) {
        s[2] || s[15] || s[0][`${s[10]}:${s[14]}`]
          ? t
            ? t.p(s, l)
            : ((t = Wn(s)), t.c(), t.m(e.parentNode, e))
          : t && (t.d(1), (t = null));
      },
      d(s) {
        t?.d(s), s && k(e);
      },
    };
  }
  function Gn(n) {
    let e;
    let t;
    let s = `${n[10].replace(/^(\w)/, Kn)}`;
    let l;
    let r;
    let i;
    let a = `${n[10]}`;
    let o;
    let h;
    let c;
    let m = Object.entries(n[11] || {});
    const p = [];
    for (let d = 0; d < m.length; d += 1) p[d] = Vn(qn(n, m, d));
    return {
      c() {
        (e = C("details")),
          (t = C("summary")),
          (l = A()),
          (r = C("fieldset")),
          (i = C("legend")),
          (o = A());
        for (let d = 0; d < p.length; d += 1) p[d].c();
        (h = A()),
          E(t, "class", "pagefind-ui__filter-name svelte-1v2r7ls"),
          E(i, "class", "pagefind-ui__filter-group-label svelte-1v2r7ls"),
          E(r, "class", "pagefind-ui__filter-group svelte-1v2r7ls"),
          E(e, "class", "pagefind-ui__filter-block svelte-1v2r7ls"),
          (e.open = c = n[7] || n[3].map(Jn).includes(n[10].toLowerCase()));
      },
      m(d, _) {
        y(d, e, _),
          b(e, t),
          (t.innerHTML = s),
          b(e, l),
          b(e, r),
          b(r, i),
          (i.innerHTML = a),
          b(r, o);
        for (let u = 0; u < p.length; u += 1) p[u]?.m(r, null);
        b(e, h);
      },
      p(d, _) {
        if (
          (_ & 2 && s !== (s = `${d[10].replace(/^(\w)/, Kn)}`) && (t.innerHTML = s),
          _ & 2 && a !== (a = `${d[10]}`) && (i.innerHTML = a),
          _ & 7)
        ) {
          m = Object.entries(d[11] || {});
          let u;
          for (u = 0; u < m.length; u += 1) {
            const f = qn(d, m, u);
            p[u] ? p[u].p(f, _) : ((p[u] = Vn(f)), p[u].c(), p[u].m(r, null));
          }
          for (; u < p.length; u += 1) p[u].d(1);
          p.length = m.length;
        }
        _ & 138 && c !== (c = d[7] || d[3].map(Jn).includes(d[10].toLowerCase())) && (e.open = c);
      },
      d(d) {
        d && k(e), Q(p, d);
      },
    };
  }
  function Ps(n) {
    let e = n[1] && Object.entries(n[1]).length;
    let t;
    let s = e && Bn(n);
    return {
      c() {
        s?.c(), (t = x());
      },
      m(l, r) {
        s?.m(l, r), y(l, t, r);
      },
      p(l, [r]) {
        r & 2 && (e = l[1] && Object.entries(l[1]).length),
          e
            ? s
              ? s.p(l, r)
              : ((s = Bn(l)), s.c(), s.m(t.parentNode, t))
            : s && (s.d(1), (s = null));
      },
      i: j,
      o: j,
      d(l) {
        s?.d(l), l && k(t);
      },
    };
  }
  const Kn = (n) => n.toLocaleUpperCase();
  const Jn = (n) => n.toLowerCase();
  function Ls(n, e, t) {
    let { available_filters: s = null } = e;
    let { show_empty_filters: l = !0 } = e;
    let { open_filters: r = [] } = e;
    let { translate: i = () => "" } = e;
    let { automatic_translations: a = {} } = e;
    let { translations: o = {} } = e;
    let { selected_filters: h = {} } = e;
    let c = !1;
    let m = !1;
    function p(d, _) {
      (h[`${d}:${_}`] = this.checked), t(0, h);
    }
    return (
      (n.$$set = (d) => {
        "available_filters" in d && t(1, (s = d.available_filters)),
          "show_empty_filters" in d && t(2, (l = d.show_empty_filters)),
          "open_filters" in d && t(3, (r = d.open_filters)),
          "translate" in d && t(4, (i = d.translate)),
          "automatic_translations" in d && t(5, (a = d.automatic_translations)),
          "translations" in d && t(6, (o = d.translations)),
          "selected_filters" in d && t(0, (h = d.selected_filters));
      }),
      (n.$$.update = () => {
        if (n.$$.dirty & 258) {
          if (s && !c) {
            t(8, (c = !0));
            const d = Object.entries(s || {});
            d.length === 1 && Object.entries(d[0][1])?.length <= 6 && t(7, (m = !0));
          }
        }
      }),
      [h, s, l, r, i, a, o, m, c, p]
    );
  }
  const Et = class extends q {
    constructor(e) {
      super(),
        Y(this, e, Ls, Ps, K, {
          available_filters: 1,
          show_empty_filters: 2,
          open_filters: 3,
          translate: 4,
          automatic_translations: 5,
          translations: 6,
          selected_filters: 0,
        });
    }
  };
  const Yn = Et;
  const Rt = {};
  S(Rt, {
    comments: () => Bs,
    default: () => Gs,
    direction: () => Ws,
    strings: () => Vs,
    thanks_to: () => qs,
  });
  const qs = "Jan Claasen <jan@cloudcannon.com>";
  const Bs = "";
  const Ws = "ltr";
  const Vs = {
    placeholder: "Soek",
    clear_search: "Opruim",
    load_more: "Laai nog resultate",
    search_label: "Soek hierdie webwerf",
    filters_label: "Filters",
    zero_results: "Geen resultate vir [SEARCH_TERM]",
    many_results: "[COUNT] resultate vir [SEARCH_TERM]",
    one_result: "[COUNT] resultate vir [SEARCH_TERM]",
    alt_search:
      "Geen resultate vir [SEARCH_TERM]. Toon resultate vir [DIFFERENT_TERM] in plaas daarvan",
    search_suggestion:
      "Geen resultate vir [SEARCH_TERM]. Probeer eerder een van die volgende terme:",
    searching: "Soek vir [SEARCH_TERM]",
  };
  const Gs = { thanks_to: qs, comments: Bs, direction: Ws, strings: Vs };
  const bt = {};
  S(bt, {
    comments: () => Js,
    default: () => Xs,
    direction: () => Ys,
    strings: () => Zs,
    thanks_to: () => Ks,
  });
  const Ks = "Maruf Alom <mail@marufalom.com>";
  const Js = "";
  const Ys = "ltr";
  const Zs = {
    placeholder: "\u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8",
    clear_search: "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8",
    load_more: "\u0986\u09B0\u09CB \u09AB\u09B2\u09BE\u09AB\u09B2 \u09A6\u09C7\u0996\u09C1\u09A8",
    search_label:
      "\u098F\u0987 \u0993\u09DF\u09C7\u09AC\u09B8\u09BE\u0987\u099F\u09C7 \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8",
    filters_label: "\u09AB\u09BF\u09B2\u09CD\u099F\u09BE\u09B0",
    zero_results:
      "[SEARCH_TERM] \u098F\u09B0 \u099C\u09A8\u09CD\u09AF \u0995\u09BF\u099B\u09C1 \u0996\u09C1\u0981\u099C\u09C7 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF",
    many_results:
      "[COUNT]-\u099F\u09BF \u09AB\u09B2\u09BE\u09AB\u09B2 \u09AA\u09BE\u0993\u09DF\u09BE \u0997\u09BF\u09DF\u09C7\u099B\u09C7 [SEARCH_TERM] \u098F\u09B0 \u099C\u09A8\u09CD\u09AF",
    one_result:
      "[COUNT]-\u099F\u09BF \u09AB\u09B2\u09BE\u09AB\u09B2 \u09AA\u09BE\u0993\u09DF\u09BE \u0997\u09BF\u09DF\u09C7\u099B\u09C7 [SEARCH_TERM] \u098F\u09B0 \u099C\u09A8\u09CD\u09AF",
    alt_search:
      "\u0995\u09CB\u09A8 \u0995\u09BF\u099B\u09C1 \u0996\u09C1\u0981\u099C\u09C7 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF [SEARCH_TERM] \u098F\u09B0 \u099C\u09A8\u09CD\u09AF. \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09C7 [DIFFERENT_TERM] \u098F\u09B0 \u099C\u09A8\u09CD\u09AF \u09A6\u09C7\u0996\u09BE\u09A8\u09CB \u09B9\u099A\u09CD\u099B\u09C7",
    search_suggestion:
      "\u0995\u09CB\u09A8 \u0995\u09BF\u099B\u09C1 \u0996\u09C1\u0981\u099C\u09C7 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF [SEARCH_TERM] \u098F\u09B0 \u09AC\u09BF\u09B7\u09DF\u09C7. \u09A8\u09BF\u09A8\u09CD\u09AE\u09C7\u09B0 \u09AC\u09BF\u09B7\u09DF\u09AC\u09B8\u09CD\u09A4\u09C1 \u0996\u09C1\u0981\u099C\u09C7 \u09A6\u09C7\u0996\u09C1\u09A8:",
    searching:
      "\u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u099A\u09B2\u099B\u09C7 [SEARCH_TERM]...",
  };
  const Xs = { thanks_to: Ks, comments: Js, direction: Ys, strings: Zs };
  const Tt = {};
  S(Tt, {
    comments: () => xs,
    default: () => tl,
    direction: () => $s,
    strings: () => el,
    thanks_to: () => Qs,
  });
  const Qs = "Pablo Villaverde <https://github.com/pvillaverde>";
  const xs = "";
  const $s = "ltr";
  const el = {
    placeholder: "Cerca",
    clear_search: "Netejar",
    load_more: "Veure m\xE9es resultats",
    search_label: "Cerca en aquest lloc",
    filters_label: "Filtres",
    zero_results: "No es van trobar resultats per [SEARCH_TERM]",
    many_results: "[COUNT] resultats trobats per [SEARCH_TERM]",
    one_result: "[COUNT] resultat trobat per [SEARCH_TERM]",
    alt_search:
      "No es van trobar resultats per [SEARCH_TERM]. Mostrant al seu lloc resultats per [DIFFERENT_TERM]",
    search_suggestion:
      "No es van trobar resultats per [SEARCH_TERM]. Proveu una de les cerques seg\xFCents:",
    searching: "Cercant [SEARCH_TERM]...",
  };
  const tl = { thanks_to: Qs, comments: xs, direction: $s, strings: el };
  const Ct = {};
  S(Ct, {
    comments: () => sl,
    default: () => il,
    direction: () => ll,
    strings: () => rl,
    thanks_to: () => nl,
  });
  const nl = "Dalibor Hon <https://github.com/dallyh>";
  const sl = "";
  const ll = "ltr";
  const rl = {
    placeholder: "Hledat",
    clear_search: "Smazat",
    load_more: "Na\u010D\xEDst dal\u0161\xED v\xFDsledky",
    search_label: "Prohledat tuto str\xE1nku",
    filters_label: "Filtry",
    zero_results: "\u017D\xE1dn\xE9 v\xFDsledky pro [SEARCH_TERM]",
    many_results: "[COUNT] v\xFDsledk\u016F pro [SEARCH_TERM]",
    one_result: "[COUNT] v\xFDsledek pro [SEARCH_TERM]",
    alt_search:
      "\u017D\xE1dn\xE9 v\xFDsledky pro [SEARCH_TERM]. Zobrazuj\xED se v\xFDsledky pro [DIFFERENT_TERM]",
    search_suggestion:
      "\u017D\xE1dn\xE9 v\xFDsledky pro [SEARCH_TERM]. Souvisej\xEDc\xED v\xFDsledky hled\xE1n\xED:",
    searching: "Hled\xE1m [SEARCH_TERM]...",
  };
  const il = { thanks_to: nl, comments: sl, direction: ll, strings: rl };
  const kt = {};
  S(kt, {
    comments: () => ol,
    default: () => _l,
    direction: () => ul,
    strings: () => cl,
    thanks_to: () => al,
  });
  const al = "Jonas Smedegaard <dr@jones.dk>";
  const ol = "";
  const ul = "ltr";
  const cl = {
    placeholder: "S\xF8g",
    clear_search: "Nulstil",
    load_more: "Indl\xE6s flere resultater",
    search_label: "S\xF8g p\xE5 dette website",
    filters_label: "Filtre",
    zero_results: "Ingen resultater for [SEARCH_TERM]",
    many_results: "[COUNT] resultater for [SEARCH_TERM]",
    one_result: "[COUNT] resultat for [SEARCH_TERM]",
    alt_search:
      "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet",
    search_suggestion:
      "Ingen resultater for [SEARCH_TERM]. Pr\xF8v et af disse s\xF8geord i stedet:",
    searching: "S\xF8ger efter [SEARCH_TERM]...",
  };
  const _l = { thanks_to: al, comments: ol, direction: ul, strings: cl };
  const yt = {};
  S(yt, {
    comments: () => dl,
    default: () => pl,
    direction: () => hl,
    strings: () => ml,
    thanks_to: () => fl,
  });
  const fl = "Jan Claasen <jan@cloudcannon.com>";
  const dl = "";
  const hl = "ltr";
  const ml = {
    placeholder: "Suche",
    clear_search: "L\xF6schen",
    load_more: "Mehr Ergebnisse laden",
    search_label: "Suche diese Seite",
    filters_label: "Filter",
    zero_results: "Keine Ergebnisse f\xFCr [SEARCH_TERM]",
    many_results: "[COUNT] Ergebnisse f\xFCr [SEARCH_TERM]",
    one_result: "[COUNT] Ergebnis f\xFCr [SEARCH_TERM]",
    alt_search:
      "Keine Ergebnisse f\xFCr [SEARCH_TERM]. Stattdessen werden Ergebnisse f\xFCr [DIFFERENT_TERM] angezeigt",
    search_suggestion:
      "Keine Ergebnisse f\xFCr [SEARCH_TERM]. Versuchen Sie eine der folgenden Suchen:",
    searching: "Suche f\xFCr [SEARCH_TERM]",
  };
  const pl = { thanks_to: fl, comments: dl, direction: hl, strings: ml };
  const St = {};
  S(St, {
    comments: () => El,
    default: () => Tl,
    direction: () => Rl,
    strings: () => bl,
    thanks_to: () => gl,
  });
  const gl = "Liam Bigelow <liam@cloudcannon.com>";
  const El = "";
  const Rl = "ltr";
  const bl = {
    placeholder: "Search",
    clear_search: "Clear",
    load_more: "Load more results",
    search_label: "Search this site",
    filters_label: "Filters",
    zero_results: "No results for [SEARCH_TERM]",
    many_results: "[COUNT] results for [SEARCH_TERM]",
    one_result: "[COUNT] result for [SEARCH_TERM]",
    alt_search: "No results for [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead",
    search_suggestion: "No results for [SEARCH_TERM]. Try one of the following searches:",
    searching: "Searching for [SEARCH_TERM]...",
  };
  const Tl = { thanks_to: gl, comments: El, direction: Rl, strings: bl };
  const Mt = {};
  S(Mt, {
    comments: () => kl,
    default: () => Ml,
    direction: () => yl,
    strings: () => Sl,
    thanks_to: () => Cl,
  });
  const Cl = "Pablo Villaverde <https://github.com/pvillaverde>";
  const kl = "";
  const yl = "ltr";
  const Sl = {
    placeholder: "Buscar",
    clear_search: "Limpiar",
    load_more: "Ver m\xE1s resultados",
    search_label: "Buscar en este sitio",
    filters_label: "Filtros",
    zero_results: "No se encontraron resultados para [SEARCH_TERM]",
    many_results: "[COUNT] resultados encontrados para [SEARCH_TERM]",
    one_result: "[COUNT] resultado encontrado para [SEARCH_TERM]",
    alt_search:
      "No se encontraron resultados para [SEARCH_TERM]. Mostrando en su lugar resultados para [DIFFERENT_TERM]",
    search_suggestion:
      "No se encontraron resultados para [SEARCH_TERM]. Prueba una de las siguientes b\xFAsquedas:",
    searching: "Buscando [SEARCH_TERM]...",
  };
  const Ml = { thanks_to: Cl, comments: kl, direction: yl, strings: Sl };
  const At = {};
  S(At, {
    comments: () => vl,
    default: () => Hl,
    direction: () => wl,
    strings: () => Fl,
    thanks_to: () => Al,
  });
  const Al = "Valtteri Laitinen <dev@valtlai.fi>";
  const vl = "";
  const wl = "ltr";
  const Fl = {
    placeholder: "Haku",
    clear_search: "Tyhjenn\xE4",
    load_more: "Lataa lis\xE4\xE4 tuloksia",
    search_label: "Hae t\xE4lt\xE4 sivustolta",
    filters_label: "Suodattimet",
    zero_results: "Ei tuloksia haulle [SEARCH_TERM]",
    many_results: "[COUNT] tulosta haulle [SEARCH_TERM]",
    one_result: "[COUNT] tulos haulle [SEARCH_TERM]",
    alt_search:
      "Ei tuloksia haulle [SEARCH_TERM]. N\xE4ytet\xE4\xE4n tulokset sen sijaan haulle [DIFFERENT_TERM]",
    search_suggestion: "Ei tuloksia haulle [SEARCH_TERM]. Kokeile jotain seuraavista:",
    searching: "Haetaan [SEARCH_TERM]...",
  };
  const Hl = { thanks_to: Al, comments: vl, direction: wl, strings: Fl };
  const vt = {};
  S(vt, {
    comments: () => Ol,
    default: () => Dl,
    direction: () => zl,
    strings: () => jl,
    thanks_to: () => Nl,
  });
  const Nl = "Nicolas Friedli <nicolas@theologique.ch>";
  const Ol = "";
  const zl = "ltr";
  const jl = {
    placeholder: "Rechercher",
    clear_search: "Nettoyer",
    load_more: "Charger plus de r\xE9sultats",
    search_label: "Recherche sur ce site",
    filters_label: "Filtres",
    zero_results: "Pas de r\xE9sultat pour [SEARCH_TERM]",
    many_results: "[COUNT] r\xE9sultats pour [SEARCH_TERM]",
    one_result: "[COUNT] r\xE9sultat pour [SEARCH_TERM]",
    alt_search:
      "Pas de r\xE9sultat pour [SEARCH_TERM]. Montre les r\xE9sultats pour [DIFFERENT_TERM] \xE0 la place",
    search_suggestion:
      "Pas de r\xE9sultat pour [SEARCH_TERM]. Essayer une des recherches suivantes:",
    searching: "Recherche [SEARCH_TERM]...",
  };
  const Dl = { thanks_to: Nl, comments: Ol, direction: zl, strings: jl };
  const wt = {};
  S(wt, {
    comments: () => Il,
    default: () => ql,
    direction: () => Pl,
    strings: () => Ll,
    thanks_to: () => Ul,
  });
  const Ul = "Pablo Villaverde <https://github.com/pvillaverde>";
  const Il = "";
  const Pl = "ltr";
  const Ll = {
    placeholder: "Buscar",
    clear_search: "Limpar",
    load_more: "Ver m\xE1is resultados",
    search_label: "Buscar neste sitio",
    filters_label: "Filtros",
    zero_results: "Non se atoparon resultados para [SEARCH_TERM]",
    many_results: "[COUNT] resultados atopados para [SEARCH_TERM]",
    one_result: "[COUNT] resultado atopado para [SEARCH_TERM]",
    alt_search:
      "Non se atoparon resultados para [SEARCH_TERM]. Amosando no seu lugar resultados para [DIFFERENT_TERM]",
    search_suggestion:
      "Non se atoparon resultados para [SEARCH_TERM]. Probe unha das seguintes pesquisas:",
    searching: "Buscando [SEARCH_TERM]...",
  };
  const ql = { thanks_to: Ul, comments: Il, direction: Pl, strings: Ll };
  const Ft = {};
  S(Ft, {
    comments: () => Wl,
    default: () => Kl,
    direction: () => Vl,
    strings: () => Gl,
    thanks_to: () => Bl,
  });
  const Bl = "Amit Yadav <amit@thetechbasket.com>";
  const Wl = "";
  const Vl = "ltr";
  const Gl = {
    placeholder: "\u0916\u094B\u091C\u0947\u0902",
    clear_search: "\u0938\u093E\u092B \u0915\u0930\u0947\u0902",
    load_more:
      "\u0914\u0930 \u0905\u0927\u093F\u0915 \u092A\u0930\u093F\u0923\u093E\u092E \u0932\u094B\u0921 \u0915\u0930\u0947\u0902",
    search_label:
      "\u0907\u0938 \u0938\u093E\u0907\u091F \u092E\u0947\u0902 \u0916\u094B\u091C\u0947\u0902",
    filters_label: "\u092B\u093C\u093F\u0932\u094D\u091F\u0930",
    zero_results:
      "\u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E [SEARCH_TERM] \u0915\u0947 \u0932\u093F\u090F \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E",
    many_results:
      "[COUNT] \u092A\u0930\u093F\u0923\u093E\u092E [SEARCH_TERM] \u0915\u0947 \u0932\u093F\u090F \u092E\u093F\u0932\u0947",
    one_result:
      "[COUNT] \u092A\u0930\u093F\u0923\u093E\u092E [SEARCH_TERM] \u0915\u0947 \u0932\u093F\u090F \u092E\u093F\u0932\u093E",
    alt_search:
      "[SEARCH_TERM] \u0915\u0947 \u0932\u093F\u090F \u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E\u0964 \u0907\u0938\u0915\u0947 \u092C\u091C\u093E\u092F [DIFFERENT_TERM] \u0915\u0947 \u0932\u093F\u090F \u092A\u0930\u093F\u0923\u093E\u092E \u0926\u093F\u0916\u093E \u0930\u0939\u093E \u0939\u0948",
    search_suggestion:
      "[SEARCH_TERM] \u0915\u0947 \u0932\u093F\u090F \u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E\u0964 \u0928\u093F\u092E\u094D\u0928\u0932\u093F\u0916\u093F\u0924 \u0916\u094B\u091C\u094B\u0902 \u092E\u0947\u0902 \u0938\u0947 \u0915\u094B\u0908 \u090F\u0915 \u0906\u091C\u093C\u092E\u093E\u090F\u0902:",
    searching:
      "[SEARCH_TERM] \u0915\u0940 \u0916\u094B\u091C \u0915\u0940 \u091C\u093E \u0930\u0939\u0940 \u0939\u0948...",
  };
  const Kl = { thanks_to: Bl, comments: Wl, direction: Vl, strings: Gl };
  const Ht = {};
  S(Ht, {
    comments: () => Yl,
    default: () => Ql,
    direction: () => Zl,
    strings: () => Xl,
    thanks_to: () => Jl,
  });
  const Jl = "Diomed <https://github.com/diomed>";
  const Yl = "";
  const Zl = "ltr";
  const Xl = {
    placeholder: "Tra\u017Ei",
    clear_search: "O\u010Disti",
    load_more: "U\u010Ditaj vi\u0161e rezultata",
    search_label: "Pretra\u017Ei ovu stranicu",
    filters_label: "Filteri",
    zero_results: "Nema rezultata za [SEARCH_TERM]",
    many_results: "[COUNT] rezultata za [SEARCH_TERM]",
    one_result: "[COUNT] rezultat za [SEARCH_TERM]",
    alt_search: "Nema rezultata za [SEARCH_TERM]. Prikazujem rezultate za [DIFFERENT_TERM]",
    search_suggestion: "Nema rezultata za [SEARCH_TERM]. Poku\u0161aj s jednom od ovih pretraga:",
    searching: "Pretra\u017Eujem [SEARCH_TERM]...",
  };
  const Ql = { thanks_to: Jl, comments: Yl, direction: Zl, strings: Xl };
  const Nt = {};
  S(Nt, {
    comments: () => $l,
    default: () => nr,
    direction: () => er,
    strings: () => tr,
    thanks_to: () => xl,
  });
  const xl = "Adam Laki <info@adamlaki.com>";
  const $l = "";
  const er = "ltr";
  const tr = {
    placeholder: "Keres\xE9s",
    clear_search: "T\xF6rl\xE9s",
    load_more: "Tov\xE1bbi tal\xE1latok bet\xF6lt\xE9se",
    search_label: "Keres\xE9s az oldalon",
    filters_label: "Sz\u0171r\xE9s",
    zero_results: "Nincs tal\xE1lat a(z) [SEARCH_TERM] kifejez\xE9sre",
    many_results: "[COUNT] db tal\xE1lat a(z) [SEARCH_TERM] kifejez\xE9sre",
    one_result: "[COUNT] db tal\xE1lat a(z) [SEARCH_TERM] kifejez\xE9sre",
    alt_search:
      "Nincs tal\xE1lat a(z) [SEARCH_TERM] kifejez\xE9sre. Tal\xE1latok mutat\xE1sa ink\xE1bb a(z) [DIFFERENT_TERM] kifejez\xE9sre",
    search_suggestion:
      "Nincs tal\xE1lat a(z) [SEARCH_TERM] kifejez\xE9sre. Pr\xF3b\xE1ld meg a k\xF6vetkez\u0151 keres\xE9sek egyik\xE9t:",
    searching: "Keres\xE9s a(z) [SEARCH_TERM] kifejez\xE9sre...",
  };
  const nr = { thanks_to: xl, comments: $l, direction: er, strings: tr };
  const Ot = {};
  S(Ot, {
    comments: () => lr,
    default: () => ar,
    direction: () => rr,
    strings: () => ir,
    thanks_to: () => sr,
  });
  const sr = "Nixentric";
  const lr = "";
  const rr = "ltr";
  const ir = {
    placeholder: "Cari",
    clear_search: "Bersihkan",
    load_more: "Muat lebih banyak hasil",
    search_label: "Telusuri situs ini",
    filters_label: "Filter",
    zero_results: "[SEARCH_TERM] tidak ditemukan",
    many_results: "Ditemukan [COUNT] hasil untuk [SEARCH_TERM]",
    one_result: "Ditemukan [COUNT] hasil untuk [SEARCH_TERM]",
    alt_search:
      "[SEARCH_TERM] tidak ditemukan. Menampilkan hasil [DIFFERENT_TERM] sebagai gantinya",
    search_suggestion: "[SEARCH_TERM] tidak ditemukan. Coba salah satu pencarian berikut ini:",
    searching: "Mencari [SEARCH_TERM]...",
  };
  const ar = { thanks_to: sr, comments: lr, direction: rr, strings: ir };
  const zt = {};
  S(zt, {
    comments: () => ur,
    default: () => fr,
    direction: () => cr,
    strings: () => _r,
    thanks_to: () => or,
  });
  const or = "Cosette Bruhns Alonso, Andrew Janco <apjanco@upenn.edu>";
  const ur = "";
  const cr = "ltr";
  const _r = {
    placeholder: "Cerca",
    clear_search: "Cancella la cronologia",
    load_more: "Mostra pi\xF9 risultati",
    search_label: "Cerca nel sito",
    filters_label: "Filtri di ricerca",
    zero_results: "Nessun risultato per [SEARCH_TERM]",
    many_results: "[COUNT] risultati per [SEARCH_TERM]",
    one_result: "[COUNT] risultato per [SEARCH_TERM]",
    alt_search:
      "Nessun risultato per [SEARCH_TERM]. Mostrando risultati per [DIFFERENT_TERM] come alternativa.",
    search_suggestion: "Nessun risultato per [SEARCH_TERM]. Prova una delle seguenti ricerche:",
    searching: "Cercando [SEARCH_TERM]...",
  };
  const fr = { thanks_to: or, comments: ur, direction: cr, strings: _r };
  const jt = {};
  S(jt, {
    comments: () => hr,
    default: () => gr,
    direction: () => mr,
    strings: () => pr,
    thanks_to: () => dr,
  });
  const dr = "Tate";
  const hr = "";
  const mr = "ltr";
  const pr = {
    placeholder: "\u691C\u7D22",
    clear_search: "\u30AF\u30EA\u30A2",
    load_more: "\u6B21\u3092\u8AAD\u307F\u8FBC\u3080",
    search_label: "\u3053\u306E\u30B5\u30A4\u30C8\u3092\u691C\u7D22",
    filters_label: "\u30D5\u30A3\u30EB\u30BF",
    zero_results:
      "[SEARCH_TERM]\u306E\u691C\u7D22\u306B\u4E00\u81F4\u3059\u308B\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F",
    many_results: "[SEARCH_TERM]\u306E[COUNT]\u4EF6\u306E\u691C\u7D22\u7D50\u679C",
    one_result: "[SEARCH_TERM]\u306E[COUNT]\u4EF6\u306E\u691C\u7D22\u7D50\u679C",
    alt_search:
      "[SEARCH_TERM]\u306E\u691C\u7D22\u306B\u4E00\u81F4\u3059\u308B\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002[DIFFERENT_TERM]\u306E\u691C\u7D22\u7D50\u679C\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059",
    search_suggestion:
      "[SEARCH_TERM]\u306E\u691C\u7D22\u306B\u4E00\u81F4\u3059\u308B\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u6B21\u306E\u3044\u305A\u308C\u304B\u306E\u691C\u7D22\u3092\u8A66\u3057\u3066\u304F\u3060\u3055\u3044",
    searching: "[SEARCH_TERM]\u3092\u691C\u7D22\u3057\u3066\u3044\u307E\u3059",
  };
  const gr = { thanks_to: dr, comments: hr, direction: mr, strings: pr };
  const Dt = {};
  S(Dt, {
    comments: () => Rr,
    default: () => Cr,
    direction: () => br,
    strings: () => Tr,
    thanks_to: () => Er,
  });
  const Er = "Seokho Son <https://github.com/seokho-son>";
  const Rr = "";
  const br = "ltr";
  const Tr = {
    placeholder: "\uAC80\uC0C9\uC5B4",
    clear_search: "\uBE44\uC6B0\uAE30",
    load_more: "\uAC80\uC0C9 \uACB0\uACFC \uB354 \uBCF4\uAE30",
    search_label: "\uC0AC\uC774\uD2B8 \uAC80\uC0C9",
    filters_label: "\uD544\uD130",
    zero_results: "[SEARCH_TERM]\uC5D0 \uB300\uD55C \uACB0\uACFC \uC5C6\uC74C",
    many_results: "[SEARCH_TERM]\uC5D0 \uB300\uD55C \uACB0\uACFC [COUNT]\uAC74",
    one_result: "[SEARCH_TERM]\uC5D0 \uB300\uD55C \uACB0\uACFC [COUNT]\uAC74",
    alt_search:
      "[SEARCH_TERM]\uC5D0 \uB300\uD55C \uACB0\uACFC \uC5C6\uC74C. [DIFFERENT_TERM]\uC5D0 \uB300\uD55C \uACB0\uACFC",
    search_suggestion:
      "[SEARCH_TERM]\uC5D0 \uB300\uD55C \uACB0\uACFC \uC5C6\uC74C. \uCD94\uCC9C \uAC80\uC0C9\uC5B4: ",
    searching: "[SEARCH_TERM] \uAC80\uC0C9 \uC911...",
  };
  const Cr = { thanks_to: Er, comments: Rr, direction: br, strings: Tr };
  const Ut = {};
  S(Ut, {
    comments: () => yr,
    default: () => Ar,
    direction: () => Sr,
    strings: () => Mr,
    thanks_to: () => kr,
  });
  const kr = "";
  const yr = "";
  const Sr = "ltr";
  const Mr = {
    placeholder: "Rapu",
    clear_search: "Whakakore",
    load_more: "Whakauta \u0113tahi otinga k\u0113",
    search_label: "Rapu",
    filters_label: "T\u0101tari",
    zero_results: "Otinga kore ki [SEARCH_TERM]",
    many_results: "[COUNT] otinga ki [SEARCH_TERM]",
    one_result: "[COUNT] otinga ki [SEARCH_TERM]",
    alt_search: "Otinga kore ki [SEARCH_TERM]. Otinga k\u0113 ki [DIFFERENT_TERM]",
    search_suggestion: "Otinga kore ki [SEARCH_TERM]. whakam\u0101tau ki ng\u0101 mea atu:",
    searching: "Rapu ki [SEARCH_TERM]...",
  };
  const Ar = { thanks_to: kr, comments: yr, direction: Sr, strings: Mr };
  const It = {};
  S(It, {
    comments: () => wr,
    default: () => Nr,
    direction: () => Fr,
    strings: () => Hr,
    thanks_to: () => vr,
  });
  const vr = "Paul van Brouwershaven";
  const wr = "";
  const Fr = "ltr";
  const Hr = {
    placeholder: "Zoeken",
    clear_search: "Reset",
    load_more: "Meer resultaten laden",
    search_label: "Doorzoek deze site",
    filters_label: "Filters",
    zero_results: "Geen resultaten voor [SEARCH_TERM]",
    many_results: "[COUNT] resultaten voor [SEARCH_TERM]",
    one_result: "[COUNT] resultaat voor [SEARCH_TERM]",
    alt_search:
      "Geen resultaten voor [SEARCH_TERM]. In plaats daarvan worden resultaten voor [DIFFERENT_TERM] weergegeven",
    search_suggestion:
      "Geen resultaten voor [SEARCH_TERM]. Probeer een van de volgende zoekopdrachten:",
    searching: "Zoeken naar [SEARCH_TERM]...",
  };
  const Nr = { thanks_to: vr, comments: wr, direction: Fr, strings: Hr };
  const Pt = {};
  S(Pt, {
    comments: () => zr,
    default: () => Ur,
    direction: () => jr,
    strings: () => Dr,
    thanks_to: () => Or,
  });
  const Or = "Christopher Wingate";
  const zr = "";
  const jr = "ltr";
  const Dr = {
    placeholder: "S\xF8k",
    clear_search: "Fjern",
    load_more: "Last flere resultater",
    search_label: "S\xF8k p\xE5 denne siden",
    filters_label: "Filtre",
    zero_results: "Ingen resultater for [SEARCH_TERM]",
    many_results: "[COUNT] resultater for [SEARCH_TERM]",
    one_result: "[COUNT] resultat for [SEARCH_TERM]",
    alt_search:
      "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet",
    search_suggestion:
      "Ingen resultater for [SEARCH_TERM]. Pr\xF8v en av disse s\xF8keordene i stedet:",
    searching: "S\xF8ker etter [SEARCH_TERM]",
  };
  const Ur = { thanks_to: Or, comments: zr, direction: jr, strings: Dr };
  const Lt = {};
  S(Lt, {
    comments: () => Pr,
    default: () => Br,
    direction: () => Lr,
    strings: () => qr,
    thanks_to: () => Ir,
  });
  const Ir = "";
  const Pr = "";
  const Lr = "ltr";
  const qr = {
    placeholder: "Szukaj",
    clear_search: "Wyczy\u015B\u0107",
    load_more: "Za\u0142aduj wi\u0119cej",
    search_label: "Przeszukaj t\u0119 stron\u0119",
    filters_label: "Filtry",
    zero_results: "Brak wynik\xF3w dla [SEARCH_TERM]",
    many_results: "[COUNT] wynik\xF3w dla [SEARCH_TERM]",
    one_result: "[COUNT] wynik dla [SEARCH_TERM]",
    alt_search: "Brak wynik\xF3w dla [SEARCH_TERM]. Wy\u015Bwietlam wyniki dla [DIFFERENT_TERM]",
    search_suggestion: "Brak wynik\xF3w dla [SEARCH_TERM]. Pokrewne wyniki wyszukiwania:",
    searching: "Szukam [SEARCH_TERM]...",
  };
  const Br = { thanks_to: Ir, comments: Pr, direction: Lr, strings: qr };
  const qt = {};
  S(qt, {
    comments: () => Vr,
    default: () => Jr,
    direction: () => Gr,
    strings: () => Kr,
    thanks_to: () => Wr,
  });
  const Wr = "Jonatah";
  const Vr = "";
  const Gr = "ltr";
  const Kr = {
    placeholder: "Pesquisar",
    clear_search: "Limpar",
    load_more: "Ver mais resultados",
    search_label: "Pesquisar",
    filters_label: "Filtros",
    zero_results: "Nenhum resultado encontrado para [SEARCH_TERM]",
    many_results: "[COUNT] resultados encontrados para [SEARCH_TERM]",
    one_result: "[COUNT] resultado encontrado para [SEARCH_TERM]",
    alt_search:
      "Nenhum resultado encontrado para [SEARCH_TERM]. Exibindo resultados para [DIFFERENT_TERM]",
    search_suggestion:
      "Nenhum resultado encontrado para [SEARCH_TERM]. Tente uma das seguintes pesquisas:",
    searching: "Pesquisando por [SEARCH_TERM]...",
  };
  const Jr = { thanks_to: Wr, comments: Vr, direction: Gr, strings: Kr };
  const Bt = {};
  S(Bt, {
    comments: () => Zr,
    default: () => xr,
    direction: () => Xr,
    strings: () => Qr,
    thanks_to: () => Yr,
  });
  const Yr = "Bogdan Mateescu <bogdan@surfverse.com>";
  const Zr = "";
  const Xr = "ltr";
  const Qr = {
    placeholder: "C\u0103utare",
    clear_search: "\u015Eterge\u0163i",
    load_more: "\xCEnc\u0103rca\u021Bi mai multe rezultate",
    search_label: "C\u0103uta\u021Bi \xEEn acest site",
    filters_label: "Filtre",
    zero_results: "Niciun rezultat pentru [SEARCH_TERM]",
    many_results: "[COUNT] rezultate pentru [SEARCH_TERM]",
    one_result: "[COUNT] rezultat pentru [SEARCH_TERM]",
    alt_search:
      "Niciun rezultat pentru [SEARCH_TERM]. Se afi\u0219eaz\u0103 \xEEn schimb rezultatele pentru [DIFFERENT_TERM]",
    search_suggestion:
      "Niciun rezultat pentru [SEARCH_TERM]. \xCEncerca\u021Bi una dintre urm\u0103toarele c\u0103ut\u0103ri:",
    searching: "Se caut\u0103 dup\u0103: [SEARCH_TERM]...",
  };
  const xr = { thanks_to: Yr, comments: Zr, direction: Xr, strings: Qr };
  const Wt = {};
  S(Wt, {
    comments: () => ei,
    default: () => si,
    direction: () => ti,
    strings: () => ni,
    thanks_to: () => $r,
  });
  const $r = "Aleksandr Gordeev";
  const ei = "";
  const ti = "ltr";
  const ni = {
    placeholder: "\u041F\u043E\u0438\u0441\u043A",
    clear_search: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435",
    load_more: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435",
    search_label: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0430\u0439\u0442\u0443",
    filters_label: "\u0424\u0438\u043B\u044C\u0442\u0440\u044B",
    zero_results:
      "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]",
    many_results:
      "[COUNT] \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]",
    one_result:
      "[COUNT] \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]",
    alt_search:
      "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]. \u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [DIFFERENT_TERM]",
    search_suggestion:
      "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0434\u0438\u043D \u0438\u0437 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432",
    searching:
      "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]",
  };
  const si = { thanks_to: $r, comments: ei, direction: ti, strings: ni };
  const Vt = {};
  S(Vt, {
    comments: () => ri,
    default: () => oi,
    direction: () => ii,
    strings: () => ai,
    thanks_to: () => li,
  });
  const li = "Andrija Sagicc";
  const ri = "";
  const ii = "ltr";
  const ai = {
    placeholder: "\u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430",
    clear_search: "\u0411\u0440\u0438\u0441\u0430\u045A\u0435",
    load_more:
      "\u041F\u0440\u0438\u043A\u0430\u0437 \u0432\u0438\u0448\u0435 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430",
    search_label: "\u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u0441\u0430\u0458\u0442\u0430",
    filters_label: "\u0424\u0438\u043B\u0442\u0435\u0440\u0438",
    zero_results:
      "\u041D\u0435\u043C\u0430 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [SEARCH_TERM]",
    many_results:
      "[COUNT] \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [SEARCH_TERM]",
    one_result:
      "[COUNT] \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [SEARCH_TERM]",
    alt_search:
      "\u041D\u0435\u043C\u0430 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [SEARCH_TERM]. \u041F\u0440\u0438\u043A\u0430\u0437 \u0434\u043E\u0434\u0430\u0442\u043D\u0438\u043A \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [DIFFERENT_TERM]",
    search_suggestion:
      "\u041D\u0435\u043C\u0430 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [SEARCH_TERM]. \u041F\u043E\u043A\u0443\u0448\u0430\u0458\u0442\u0435 \u0441\u0430 \u043D\u0435\u043A\u043E\u043C \u043E\u0434 \u0441\u043B\u0435\u0434\u0435\u045B\u0438\u0445 \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0430:",
    searching:
      "\u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u0442\u0435\u0440\u043C\u0438\u043D\u0430 [SEARCH_TERM]...",
  };
  const oi = { thanks_to: li, comments: ri, direction: ii, strings: ai };
  const Gt = {};
  S(Gt, {
    comments: () => ci,
    default: () => di,
    direction: () => _i,
    strings: () => fi,
    thanks_to: () => ui,
  });
  const ui = "Montazar Al-Jaber <montazar@nanawee.tech>";
  const ci = "";
  const _i = "ltr";
  const fi = {
    placeholder: "S\xF6k",
    clear_search: "Rensa",
    load_more: "Visa fler tr\xE4ffar",
    search_label: "S\xF6k p\xE5 denna sida",
    filters_label: "Filter",
    zero_results: "[SEARCH_TERM] gav inga tr\xE4ffar",
    many_results: "[SEARCH_TERM] gav [COUNT] tr\xE4ffar",
    one_result: "[SEARCH_TERM] gav [COUNT] tr\xE4ff",
    alt_search:
      "[SEARCH_TERM] gav inga tr\xE4ffar. Visar resultat f\xF6r [DIFFERENT_TERM] ist\xE4llet",
    search_suggestion:
      "[SEARCH_TERM] gav inga tr\xE4ffar. F\xF6rs\xF6k igen med en av f\xF6ljande s\xF6kord:",
    searching: "S\xF6ker efter [SEARCH_TERM]...",
  };
  const di = { thanks_to: ui, comments: ci, direction: _i, strings: fi };
  const Kt = {};
  S(Kt, {
    comments: () => mi,
    default: () => Ei,
    direction: () => pi,
    strings: () => gi,
    thanks_to: () => hi,
  });
  const hi = "";
  const mi = "";
  const pi = "ltr";
  const gi = {
    placeholder: "\u0BA4\u0BC7\u0B9F\u0BC1\u0B95",
    clear_search: "\u0B85\u0BB4\u0BBF\u0B95\u0BCD\u0B95\u0BC1\u0B95",
    load_more:
      "\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BC8\u0B95\u0BCD \u0B95\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B95",
    search_label:
      "\u0B87\u0BA8\u0BCD\u0BA4 \u0BA4\u0BB3\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0BA4\u0BC7\u0B9F\u0BC1\u0B95",
    filters_label: "\u0BB5\u0B9F\u0BBF\u0B95\u0B9F\u0BCD\u0B9F\u0BB2\u0BCD\u0B95\u0BB3\u0BCD",
    zero_results:
      "[SEARCH_TERM] \u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8",
    many_results:
      "[SEARCH_TERM] \u0B95\u0BCD\u0B95\u0BBE\u0BA9 [COUNT] \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD",
    one_result: "[SEARCH_TERM] \u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1",
    alt_search:
      "[SEARCH_TERM] \u0B87\u0BA4\u0BCD\u0BA4\u0BC7\u0B9F\u0BB2\u0BC1\u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8, \u0B87\u0BA8\u0BCD\u0BA4 \u0BA4\u0BC7\u0B9F\u0BB2\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0B92\u0BA4\u0BCD\u0BA4 \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD [DIFFERENT_TERM]",
    search_suggestion:
      "[SEARCH_TERM] \u0B87\u0BA4\u0BCD \u0BA4\u0BC7\u0B9F\u0BB2\u0BC1\u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8.\u0B87\u0BA4\u0BB1\u0BCD\u0B95\u0BC1 \u0BAA\u0BA4\u0BBF\u0BB2\u0BC0\u0B9F\u0BBE\u0BA9 \u0BA4\u0BC7\u0B9F\u0BB2\u0BCD\u0B95\u0BB3\u0BC8 \u0BA4\u0BC7\u0B9F\u0BC1\u0B95:",
    searching:
      "[SEARCH_TERM] \u0BA4\u0BC7\u0B9F\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0B95\u0BBF\u0BA9\u0BCD\u0BB1\u0BA4\u0BC1",
  };
  const Ei = { thanks_to: hi, comments: mi, direction: pi, strings: gi };
  const Jt = {};
  S(Jt, {
    comments: () => bi,
    default: () => ki,
    direction: () => Ti,
    strings: () => Ci,
    thanks_to: () => Ri,
  });
  const Ri = "Taylan \xD6zg\xFCr Bildik";
  const bi = "";
  const Ti = "ltr";
  const Ci = {
    placeholder: "Ara\u015Ft\u0131r",
    clear_search: "Temizle",
    load_more: "Daha fazla sonu\xE7",
    search_label: "Site genelinde arama",
    filters_label: "Filtreler",
    zero_results: "[SEARCH_TERM] i\xE7in sonu\xE7 yok",
    many_results: "[SEARCH_TERM] i\xE7in [COUNT] sonu\xE7 bulundu",
    one_result: "[SEARCH_TERM] i\xE7in [COUNT] sonu\xE7 bulundu",
    alt_search:
      "[SEARCH_TERM] i\xE7in sonu\xE7 yok. Bunun yerine [DIFFERENT_TERM] i\xE7in sonu\xE7lar g\xF6steriliyor",
    search_suggestion:
      "[SEARCH_TERM] i\xE7in sonu\xE7 yok. Alternatif olarak a\u015Fa\u011F\u0131daki kelimelerden birini deneyebilirsiniz:",
    searching: "[SEARCH_TERM] ara\u015Ft\u0131r\u0131l\u0131yor...",
  };
  const ki = { thanks_to: Ri, comments: bi, direction: Ti, strings: Ci };
  const Yt = {};
  S(Yt, {
    comments: () => Si,
    default: () => vi,
    direction: () => Mi,
    strings: () => Ai,
    thanks_to: () => yi,
  });
  const yi = "Vladyslav Lyshenko <vladdnepr1989@gmail.com>";
  const Si = "";
  const Mi = "ltr";
  const Ai = {
    placeholder: "\u041F\u043E\u0448\u0443\u043A",
    clear_search: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043F\u043E\u043B\u0435",
    load_more: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435",
    search_label: "\u041F\u043E\u0448\u0443\u043A \u043F\u043E \u0441\u0430\u0439\u0442\u0443",
    filters_label: "\u0424\u0456\u043B\u044C\u0442\u0440\u0438",
    zero_results:
      "\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0437\u0430 \u0437\u0430\u043F\u0438\u0442\u043E\u043C: [SEARCH_TERM]",
    many_results:
      "[COUNT] \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432 \u043D\u0430 \u0437\u0430\u043F\u0438\u0442: [SEARCH_TERM]",
    one_result:
      "[COUNT] \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0437\u0430 \u0437\u0430\u043F\u0438\u0442\u043E\u043C: [SEARCH_TERM]",
    alt_search:
      "\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043D\u0430 \u0437\u0430\u043F\u0438\u0442: [SEARCH_TERM]. \u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0438 \u043D\u0430 \u0437\u0430\u043F\u0438\u0442: [DIFFERENT_TERM]",
    search_suggestion:
      "\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043D\u0430 \u0437\u0430\u043F\u0438\u0442: [SEARCH_TERM]. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0434\u0438\u043D \u0456\u0437 \u0442\u0430\u043A\u0438\u0445 \u0432\u0430\u0440\u0456\u0430\u043D\u0442\u0456\u0432",
    searching:
      "\u041F\u043E\u0448\u0443\u043A \u0437\u0430 \u0437\u0430\u043F\u0438\u0442\u043E\u043C: [SEARCH_TERM]",
  };
  const vi = { thanks_to: yi, comments: Si, direction: Mi, strings: Ai };
  const Zt = {};
  S(Zt, {
    comments: () => Fi,
    default: () => Oi,
    direction: () => Hi,
    strings: () => Ni,
    thanks_to: () => wi,
  });
  const wi = "Long Nhat Nguyen";
  const Fi = "";
  const Hi = "ltr";
  const Ni = {
    placeholder: "T\xECm ki\u1EBFm",
    clear_search: "X\xF3a",
    load_more: "Nhi\u1EC1u k\u1EBFt qu\u1EA3 h\u01A1n",
    search_label: "T\xECm ki\u1EBFm trong trang n\xE0y",
    filters_label: "B\u1ED9 l\u1ECDc",
    zero_results: "Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 cho [SEARCH_TERM]",
    many_results: "[COUNT] k\u1EBFt qu\u1EA3 cho [SEARCH_TERM]",
    one_result: "[COUNT] k\u1EBFt qu\u1EA3 cho [SEARCH_TERM]",
    alt_search:
      "Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 cho [SEARCH_TERM]. Ki\u1EC3m th\u1ECB k\u1EBFt qu\u1EA3 thay th\u1EBF v\u1EDBi [DIFFERENT_TERM]",
    search_suggestion:
      "Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 cho [SEARCH_TERM]. Th\u1EED m\u1ED9t trong c\xE1c t\xECm ki\u1EBFm:",
    searching: "\u0110ang t\xECm ki\u1EBFm cho [SEARCH_TERM]...",
  };
  const Oi = { thanks_to: wi, comments: Fi, direction: Hi, strings: Ni };
  const Xt = {};
  S(Xt, {
    comments: () => ji,
    default: () => Ii,
    direction: () => Di,
    strings: () => Ui,
    thanks_to: () => zi,
  });
  const zi = "Amber Song";
  const ji = "";
  const Di = "ltr";
  const Ui = {
    placeholder: "\u641C\u7D22",
    clear_search: "\u6E05\u9664",
    load_more: "\u52A0\u8F7D\u66F4\u591A\u7ED3\u679C",
    search_label: "\u7AD9\u5185\u641C\u7D22",
    filters_label: "\u7B5B\u9009",
    zero_results: "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
    many_results: "\u627E\u5230 [COUNT] \u4E2A [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
    one_result: "\u627E\u5230 [COUNT] \u4E2A [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
    alt_search:
      "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C\u3002\u6539\u4E3A\u663E\u793A [DIFFERENT_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
    search_suggestion:
      "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C\u3002\u8BF7\u5C1D\u8BD5\u4EE5\u4E0B\u641C\u7D22\u3002",
    searching: "\u6B63\u5728\u641C\u7D22 [SEARCH_TERM]...",
  };
  const Ii = { thanks_to: zi, comments: ji, direction: Di, strings: Ui };
  const Qt = {};
  S(Qt, {
    comments: () => Li,
    default: () => Wi,
    direction: () => qi,
    strings: () => Bi,
    thanks_to: () => Pi,
  });
  const Pi = "Amber Song";
  const Li = "";
  const qi = "ltr";
  const Bi = {
    placeholder: "\u641C\u7D22",
    clear_search: "\u6E05\u9664",
    load_more: "\u52A0\u8F09\u66F4\u591A\u7D50\u679C",
    search_label: "\u7AD9\u5167\u641C\u7D22",
    filters_label: "\u7BE9\u9078",
    zero_results: "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C",
    many_results: "\u627E\u5230 [COUNT] \u500B [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C",
    one_result: "\u627E\u5230 [COUNT] \u500B [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C",
    alt_search:
      "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C\u3002\u6539\u70BA\u986F\u793A [DIFFERENT_TERM] \u7684\u76F8\u95DC\u7D50\u679C",
    search_suggestion:
      "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C\u3002\u8ACB\u5617\u8A66\u4EE5\u4E0B\u641C\u7D22\u3002",
    searching: "\u6B63\u5728\u641C\u7D22 [SEARCH_TERM]...",
  };
  const Wi = { thanks_to: Pi, comments: Li, direction: qi, strings: Bi };
  const xt = {};
  S(xt, {
    comments: () => Gi,
    default: () => Yi,
    direction: () => Ki,
    strings: () => Ji,
    thanks_to: () => Vi,
  });
  const Vi = "Amber Song";
  const Gi = "";
  const Ki = "ltr";
  const Ji = {
    placeholder: "\u641C\u7D22",
    clear_search: "\u6E05\u9664",
    load_more: "\u52A0\u8F7D\u66F4\u591A\u7ED3\u679C",
    search_label: "\u7AD9\u5185\u641C\u7D22",
    filters_label: "\u7B5B\u9009",
    zero_results: "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
    many_results: "\u627E\u5230 [COUNT] \u4E2A [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
    one_result: "\u627E\u5230 [COUNT] \u4E2A [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
    alt_search:
      "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C\u3002\u6539\u4E3A\u663E\u793A [DIFFERENT_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
    search_suggestion:
      "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C\u3002\u8BF7\u5C1D\u8BD5\u4EE5\u4E0B\u641C\u7D22\u3002",
    searching: "\u6B63\u5728\u641C\u7D22 [SEARCH_TERM]...",
  };
  const Yi = { thanks_to: Vi, comments: Gi, direction: Ki, strings: Ji };
  const Zi = [
    Rt,
    bt,
    Tt,
    Ct,
    kt,
    yt,
    St,
    Mt,
    At,
    vt,
    wt,
    Ft,
    Ht,
    Nt,
    Ot,
    zt,
    jt,
    Dt,
    Ut,
    It,
    Pt,
    Lt,
    qt,
    Bt,
    Wt,
    Vt,
    Gt,
    Kt,
    Jt,
    Yt,
    Zt,
    Xt,
    Qt,
    xt,
  ];
  const Zn = Zi;
  const Xn = [
    "../../translations/af.json",
    "../../translations/bn.json",
    "../../translations/ca.json",
    "../../translations/cs.json",
    "../../translations/da.json",
    "../../translations/de.json",
    "../../translations/en.json",
    "../../translations/es.json",
    "../../translations/fi.json",
    "../../translations/fr.json",
    "../../translations/gl.json",
    "../../translations/hi.json",
    "../../translations/hr.json",
    "../../translations/hu.json",
    "../../translations/id.json",
    "../../translations/it.json",
    "../../translations/ja.json",
    "../../translations/ko.json",
    "../../translations/mi.json",
    "../../translations/nl.json",
    "../../translations/no.json",
    "../../translations/pl.json",
    "../../translations/pt.json",
    "../../translations/ro.json",
    "../../translations/ru.json",
    "../../translations/sr.json",
    "../../translations/sv.json",
    "../../translations/ta.json",
    "../../translations/tr.json",
    "../../translations/uk.json",
    "../../translations/vi.json",
    "../../translations/zh-cn.json",
    "../../translations/zh-tw.json",
    "../../translations/zh.json",
  ];
  function Qn(n, e, t) {
    const s = n.slice();
    return (s[51] = e[t]), s;
  }
  function xn(n) {
    let e;
    let t;
    let s;
    function l(i) {
      n[37](i);
    }
    const r = {
      show_empty_filters: n[5],
      open_filters: n[6],
      available_filters: n[18],
      translate: n[20],
      automatic_translations: n[19],
      translations: n[7],
    };
    return (
      n[0] !== void 0 && (r.selected_filters = n[0]),
      (e = new Yn({ props: r })),
      re.push(() => En(e, "selected_filters", l)),
      {
        c() {
          et(e.$$.fragment);
        },
        m(i, a) {
          me(e, i, a), (s = !0);
        },
        p(i, a) {
          const o = {};
          a[0] & 32 && (o.show_empty_filters = i[5]),
            a[0] & 64 && (o.open_filters = i[6]),
            a[0] & 262144 && (o.available_filters = i[18]),
            a[0] & 524288 && (o.automatic_translations = i[19]),
            a[0] & 128 && (o.translations = i[7]),
            !t && a[0] & 1 && ((t = !0), (o.selected_filters = i[0]), hn(() => (t = !1))),
            e.$set(o);
        },
        i(i) {
          s || (D(e.$$.fragment, i), (s = !0));
        },
        o(i) {
          P(e.$$.fragment, i), (s = !1);
        },
        d(i) {
          ue(e, i);
        },
      }
    );
  }
  function $n(n) {
    let e;
    let t;
    let s;
    let l;
    const r = [xi, Qi];
    const i = [];
    function a(o, h) {
      return o[14] ? 0 : 1;
    }
    return (
      (t = a(n, [-1, -1])),
      (s = i[t] = r[t](n)),
      {
        c() {
          (e = C("div")), s.c(), E(e, "class", "pagefind-ui__results-area svelte-e9gkc3");
        },
        m(o, h) {
          y(o, e, h), i[t].m(e, null), (l = !0);
        },
        p(o, h) {
          const c = t;
          (t = a(o, h)),
            t === c
              ? i[t].p(o, h)
              : (ae(),
                P(i[c], 1, 1, () => {
                  i[c] = null;
                }),
                oe(),
                (s = i[t]),
                s ? s.p(o, h) : ((s = i[t] = r[t](o)), s.c()),
                D(s, 1),
                s.m(e, null));
        },
        i(o) {
          l || (D(s), (l = !0));
        },
        o(o) {
          P(s), (l = !1);
        },
        d(o) {
          o && k(e), i[t].d();
        },
      }
    );
  }
  function Qi(n) {
    let e;
    let t;
    let s;
    let l = [];
    const r = new Map();
    let i;
    let a;
    let o;
    function h(u, f) {
      return u[13].results.length === 0 ? ta : u[13].results.length === 1 ? ea : $i;
    }
    let c = h(n, [-1, -1]);
    let m = c(n);
    let p = n[13].results.slice(0, n[17]);
    const d = (u) => u[51].id;
    for (let u = 0; u < p.length; u += 1) {
      const f = Qn(n, p, u);
      const T = d(f);
      r.set(T, (l[u] = es(T, f)));
    }
    let _ = n[13].results.length > n[17] && ts(n);
    return {
      c() {
        (e = C("p")), m.c(), (t = A()), (s = C("ol"));
        for (let u = 0; u < l.length; u += 1) l[u].c();
        (i = A()),
          _?.c(),
          (a = x()),
          E(e, "class", "pagefind-ui__message svelte-e9gkc3"),
          E(s, "class", "pagefind-ui__results svelte-e9gkc3");
      },
      m(u, f) {
        y(u, e, f), m.m(e, null), y(u, t, f), y(u, s, f);
        for (let T = 0; T < l.length; T += 1) l[T]?.m(s, null);
        y(u, i, f), _?.m(u, f), y(u, a, f), (o = !0);
      },
      p(u, f) {
        c === (c = h(u, f)) && m ? m.p(u, f) : (m.d(1), (m = c(u)), m && (m.c(), m.m(e, null))),
          f[0] & 139292 &&
            ((p = u[13].results.slice(0, u[17])),
            ae(),
            (l = gn(l, f, d, 1, u, p, r, s, pn, es, null, Qn)),
            oe()),
          u[13].results.length > u[17]
            ? _
              ? _.p(u, f)
              : ((_ = ts(u)), _.c(), _.m(a.parentNode, a))
            : _ && (_.d(1), (_ = null));
      },
      i(u) {
        if (!o) {
          for (let f = 0; f < p.length; f += 1) D(l[f]);
          o = !0;
        }
      },
      o(u) {
        for (let f = 0; f < l.length; f += 1) P(l[f]);
        o = !1;
      },
      d(u) {
        u && k(e), m.d(), u && k(t), u && k(s);
        for (let f = 0; f < l.length; f += 1) l[f].d();
        u && k(i), _?.d(u), u && k(a);
      },
    };
  }
  function xi(n) {
    let e;
    let t = n[16] && ns(n);
    return {
      c() {
        t?.c(), (e = x());
      },
      m(s, l) {
        t?.m(s, l), y(s, e, l);
      },
      p(s, l) {
        s[16]
          ? t
            ? t.p(s, l)
            : ((t = ns(s)), t.c(), t.m(e.parentNode, e))
          : t && (t.d(1), (t = null));
      },
      i: j,
      o: j,
      d(s) {
        t?.d(s), s && k(e);
      },
    };
  }
  function $i(n) {
    let e = `${n[20]("many_results", n[19], n[7])
      .replace(/\[SEARCH_TERM\]/, n[16])
      .replace(/\[COUNT\]/, new Intl.NumberFormat(n[7].language).format(n[13].results.length))}`;
    let t;
    return {
      c() {
        t = w(e);
      },
      m(s, l) {
        y(s, t, l);
      },
      p(s, l) {
        l[0] & 598144 &&
          e !==
            (e = `${s[20]("many_results", s[19], s[7])
              .replace(/\[SEARCH_TERM\]/, s[16])
              .replace(
                /\[COUNT\]/,
                new Intl.NumberFormat(s[7].language).format(s[13].results.length)
              )}`) &&
          N(t, e);
      },
      d(s) {
        s && k(t);
      },
    };
  }
  function ea(n) {
    let e = `${n[20]("one_result", n[19], n[7])
      .replace(/\[SEARCH_TERM\]/, n[16])
      .replace(/\[COUNT\]/, new Intl.NumberFormat(n[7].language).format(1))}`;
    let t;
    return {
      c() {
        t = w(e);
      },
      m(s, l) {
        y(s, t, l);
      },
      p(s, l) {
        l[0] & 589952 &&
          e !==
            (e = `${s[20]("one_result", s[19], s[7])
              .replace(/\[SEARCH_TERM\]/, s[16])
              .replace(/\[COUNT\]/, new Intl.NumberFormat(s[7].language).format(1))}`) &&
          N(t, e);
      },
      d(s) {
        s && k(t);
      },
    };
  }
  function ta(n) {
    let e = `${n[20]("zero_results", n[19], n[7]).replace(/\[SEARCH_TERM\]/, n[16])}`;
    let t;
    return {
      c() {
        t = w(e);
      },
      m(s, l) {
        y(s, t, l);
      },
      p(s, l) {
        l[0] & 589952 &&
          e !== (e = `${s[20]("zero_results", s[19], s[7]).replace(/\[SEARCH_TERM\]/, s[16])}`) &&
          N(t, e);
      },
      d(s) {
        s && k(t);
      },
    };
  }
  function na(n) {
    let e;
    let t;
    return (
      (e = new vn({
        props: { show_images: n[2], process_result: n[4], result: n[51] },
      })),
      {
        c() {
          et(e.$$.fragment);
        },
        m(s, l) {
          me(e, s, l), (t = !0);
        },
        p(s, l) {
          const r = {};
          l[0] & 4 && (r.show_images = s[2]),
            l[0] & 16 && (r.process_result = s[4]),
            l[0] & 139264 && (r.result = s[51]),
            e.$set(r);
        },
        i(s) {
          t || (D(e.$$.fragment, s), (t = !0));
        },
        o(s) {
          P(e.$$.fragment, s), (t = !1);
        },
        d(s) {
          ue(e, s);
        },
      }
    );
  }
  function sa(n) {
    let e;
    let t;
    return (
      (e = new Pn({
        props: { show_images: n[2], process_result: n[4], result: n[51] },
      })),
      {
        c() {
          et(e.$$.fragment);
        },
        m(s, l) {
          me(e, s, l), (t = !0);
        },
        p(s, l) {
          const r = {};
          l[0] & 4 && (r.show_images = s[2]),
            l[0] & 16 && (r.process_result = s[4]),
            l[0] & 139264 && (r.result = s[51]),
            e.$set(r);
        },
        i(s) {
          t || (D(e.$$.fragment, s), (t = !0));
        },
        o(s) {
          P(e.$$.fragment, s), (t = !1);
        },
        d(s) {
          ue(e, s);
        },
      }
    );
  }
  function es(n, e) {
    let t;
    let s;
    let l;
    let r;
    let i;
    const a = [sa, na];
    const o = [];
    function h(c, m) {
      return c[3] ? 0 : 1;
    }
    return (
      (s = h(e, [-1, -1])),
      (l = o[s] = a[s](e)),
      {
        key: n,
        first: null,
        c() {
          (t = x()), l.c(), (r = x()), (this.first = t);
        },
        m(c, m) {
          y(c, t, m), o[s].m(c, m), y(c, r, m), (i = !0);
        },
        p(c, m) {
          e = c;
          const p = s;
          (s = h(e, m)),
            s === p
              ? o[s].p(e, m)
              : (ae(),
                P(o[p], 1, 1, () => {
                  o[p] = null;
                }),
                oe(),
                (l = o[s]),
                l ? l.p(e, m) : ((l = o[s] = a[s](e)), l.c()),
                D(l, 1),
                l.m(r.parentNode, r));
        },
        i(c) {
          i || (D(l), (i = !0));
        },
        o(c) {
          P(l), (i = !1);
        },
        d(c) {
          c && k(t), o[s].d(c), c && k(r);
        },
      }
    );
  }
  function ts(n) {
    let e;
    let t = `${n[20]("load_more", n[19], n[7])}`;
    let s;
    let l;
    let r;
    return {
      c() {
        (e = C("button")),
          (s = w(t)),
          E(e, "type", "button"),
          E(e, "class", "pagefind-ui__button svelte-e9gkc3");
      },
      m(i, a) {
        y(i, e, a), b(e, s), l || ((r = J(e, "click", n[22])), (l = !0));
      },
      p(i, a) {
        a[0] & 524416 && t !== (t = `${i[20]("load_more", i[19], i[7])}`) && N(s, t);
      },
      d(i) {
        i && k(e), (l = !1), r();
      },
    };
  }
  function ns(n) {
    let e;
    let t = `${n[20]("searching", n[19], n[7]).replace(/\[SEARCH_TERM\]/, n[16])}`;
    let s;
    return {
      c() {
        (e = C("p")), (s = w(t)), E(e, "class", "pagefind-ui__message svelte-e9gkc3");
      },
      m(l, r) {
        y(l, e, r), b(e, s);
      },
      p(l, r) {
        r[0] & 589952 &&
          t !== (t = `${l[20]("searching", l[19], l[7]).replace(/\[SEARCH_TERM\]/, l[16])}`) &&
          N(s, t);
      },
      d(l) {
        l && k(e);
      },
    };
  }
  function la(n) {
    let e;
    let t;
    let s;
    let l;
    let r;
    let i;
    let a = `${n[20]("clear_search", n[19], n[7])}`;
    let o;
    let h;
    let c;
    let m;
    let p;
    let d;
    let _;
    let u;
    let f = n[12] && xn(n);
    let T = n[15] && $n(n);
    return {
      c() {
        (e = C("div")),
          (t = C("form")),
          (s = C("input")),
          (r = A()),
          (i = C("button")),
          (o = w(a)),
          (h = A()),
          (c = C("div")),
          f?.c(),
          (m = A()),
          T?.c(),
          E(s, "class", "pagefind-ui__search-input svelte-e9gkc3"),
          E(s, "type", "text"),
          E(s, "placeholder", (l = n[20]("placeholder", n[19], n[7]))),
          E(s, "autocapitalize", "none"),
          E(s, "enterkeyhint", "search"),
          (s.autofocus = n[8]),
          E(i, "class", "pagefind-ui__search-clear svelte-e9gkc3"),
          B(i, "pagefind-ui__suppressed", !n[9]),
          E(c, "class", "pagefind-ui__drawer svelte-e9gkc3"),
          B(c, "pagefind-ui__hidden", !n[15]),
          E(t, "class", "pagefind-ui__form svelte-e9gkc3"),
          E(t, "role", "search"),
          E(t, "aria-label", (p = n[20]("search_label", n[19], n[7]))),
          E(t, "action", "javascript:void(0);"),
          E(e, "class", "pagefind-ui svelte-e9gkc3"),
          B(e, "pagefind-ui--reset", n[1]);
      },
      m(R, M) {
        y(R, e, M),
          b(e, t),
          b(t, s),
          ft(s, n[9]),
          n[34](s),
          b(t, r),
          b(t, i),
          b(i, o),
          n[35](i),
          b(t, h),
          b(t, c),
          f?.m(c, null),
          b(c, m),
          T?.m(c, null),
          (d = !0),
          n[8] && s.focus(),
          _ ||
            ((u = [
              J(s, "focus", n[21]),
              J(s, "keydown", n[32]),
              J(s, "input", n[33]),
              J(i, "click", n[36]),
              J(t, "submit", ra),
            ]),
            (_ = !0));
      },
      p(R, M) {
        (!d || (M[0] & 524416 && l !== (l = R[20]("placeholder", R[19], R[7])))) &&
          E(s, "placeholder", l),
          (!d || M[0] & 256) && (s.autofocus = R[8]),
          M[0] & 512 && s.value !== R[9] && ft(s, R[9]),
          (!d || M[0] & 524416) && a !== (a = `${R[20]("clear_search", R[19], R[7])}`) && N(o, a),
          (!d || M[0] & 512) && B(i, "pagefind-ui__suppressed", !R[9]),
          R[12]
            ? f
              ? (f.p(R, M), M[0] & 4096 && D(f, 1))
              : ((f = xn(R)), f.c(), D(f, 1), f.m(c, m))
            : f &&
              (ae(),
              P(f, 1, 1, () => {
                f = null;
              }),
              oe()),
          R[15]
            ? T
              ? (T.p(R, M), M[0] & 32768 && D(T, 1))
              : ((T = $n(R)), T.c(), D(T, 1), T.m(c, null))
            : T &&
              (ae(),
              P(T, 1, 1, () => {
                T = null;
              }),
              oe()),
          (!d || M[0] & 32768) && B(c, "pagefind-ui__hidden", !R[15]),
          (!d || (M[0] & 524416 && p !== (p = R[20]("search_label", R[19], R[7])))) &&
            E(t, "aria-label", p),
          (!d || M[0] & 2) && B(e, "pagefind-ui--reset", R[1]);
      },
      i(R) {
        d || (D(f), D(T), (d = !0));
      },
      o(R) {
        P(f), P(T), (d = !1);
      },
      d(R) {
        R && k(e), n[34](null), n[35](null), f?.d(), T?.d(), (_ = !1), G(u);
      },
    };
  }
  const ra = (n) => n.preventDefault();
  function ia(n, e, t) {
    const s = {};
    const l = Xn.map((g) => g.match(/([^\/]+)\.json$/)[1]);
    for (let g = 0; g < l.length; g++) s[l[g]] = { language: l[g], ...Zn[g].strings };
    let { base_path: r = "/pagefind/" } = e;
    let { page_size: i = 5 } = e;
    let { reset_styles: a = !0 } = e;
    let { show_images: o = !0 } = e;
    let { show_sub_results: h = !1 } = e;
    let { excerpt_length: c } = e;
    let { process_result: m = null } = e;
    let { process_term: p = null } = e;
    let { show_empty_filters: d = !0 } = e;
    let { open_filters: _ = [] } = e;
    let { debounce_timeout_ms: u = 300 } = e;
    let { pagefind_options: f = {} } = e;
    let { merge_index: T = [] } = e;
    let { trigger_search_term: R = "" } = e;
    let { translations: M = {} } = e;
    let { autofocus: U = !1 } = e;
    let { sort: X = null } = e;
    let { selected_filters: W = {} } = e;
    let v = "";
    let F;
    let O;
    let V;
    const ls = 40;
    let st = !1;
    let tn = [];
    let lt = !1;
    let rt = !1;
    let nn = 0;
    let sn = "";
    let it = i;
    let ln = null;
    let ce = null;
    let rn = s.en;
    const rs = (g, H, z) => z[g] ?? H[g] ?? "";
    dt(() => {
      const g = document?.querySelector?.("html")?.getAttribute?.("lang") || "en";
      const H = tt(g.toLocaleLowerCase());
      t(
        19,
        (rn =
          s[`${H.language}-${H.script}-${H.region}`] ||
          s[`${H.language}-${H.region}`] ||
          s[`${H.language}`] ||
          s.en)
      );
    }),
      ht(() => {
        F?.destroy?.(), (F = null);
      });
    const an = async () => {
      if (!st && (t(12, (st = !0)), !F)) {
        let g;
        try {
          g = await import(`${r}pagefind.js`);
        } catch (z) {
          console.error(z),
            console.error(
              [
                `Pagefind couldn't be loaded from ${this.options.bundlePath}pagefind.js`,
                "You can configure this by passing a bundlePath option to PagefindUI",
                `[DEBUG: Loaded from ${document?.currentScript?.src ?? "no known script location"}]`,
              ].join(`
`)
            );
        }
        c || t(24, (c = h ? 12 : 30));
        const H = { ...(f || {}), excerptLength: c };
        await g.options(H);
        for (const z of T) {
          if (!z.bundlePath) throw new Error("mergeIndex requires a bundlePath parameter");
          const L = z.bundlePath;
          (z.bundlePath = undefined), await g.mergeIndex(L, z);
        }
        (F = g), is();
      }
    };
    const is = async () => {
      F && ((ln = await F.filters()), (!ce || !Object.keys(ce).length) && t(18, (ce = ln)));
    };
    const as = (g) => {
      const H = {};
      return (
        Object.entries(g)
          .filter(([, z]) => z)
          .forEach(([z]) => {
            const [L, te] = z.split(/:(.*)$/);
            (H[L] = H[L] || []), H[L].push(te);
          }),
        H
      );
    };
    let _e;
    const os = async (g, H) => {
      if (!g) {
        t(15, (rt = !1)), _e && clearTimeout(_e);
        return;
      }
      const z = as(H);
      const L = () => us(g, z);
      u > 0 && g
        ? (_e && clearTimeout(_e),
          (_e = setTimeout(L, u)),
          await on(),
          F.preload(g, { filters: z }))
        : L(),
        cs();
    };
    const on = async () => {
      while (!F) an(), await new Promise((g) => setTimeout(g, 50));
    };
    const us = async (g, H) => {
      t(16, (sn = g || "")),
        typeof p === "function" && (g = p(g)),
        t(14, (lt = !0)),
        t(15, (rt = !0)),
        await on();
      const z = ++nn;
      const L = { filters: H };
      X && typeof X === "object" && (L.sort = X);
      const te = await F.search(g, L);
      nn === z &&
        (te.filters && Object.keys(te.filters)?.length && t(18, (ce = te.filters)),
        t(13, (tn = te)),
        t(14, (lt = !1)),
        t(17, (it = i)));
    };
    const cs = () => {
      const g = V.offsetWidth;
      g !== ls && t(10, (O.style.paddingRight = `${g + 2}px`), O);
    };
    const _s = (g) => {
      g?.preventDefault(), t(17, (it += i));
    };
    const fs = (g) => {
      g.key === "Escape" && (t(9, (v = "")), O.blur()), g.key === "Enter" && g.preventDefault();
    };
    function ds() {
      (v = this.value), t(9, v), t(23, R);
    }
    function hs(g) {
      re[g ? "unshift" : "push"](() => {
        (O = g), t(10, O);
      });
    }
    function ms(g) {
      re[g ? "unshift" : "push"](() => {
        (V = g), t(11, V);
      });
    }
    const ps = () => {
      t(9, (v = "")), O.blur();
    };
    function gs(g) {
      (W = g), t(0, W);
    }
    return (
      (n.$$set = (g) => {
        "base_path" in g && t(25, (r = g.base_path)),
          "page_size" in g && t(26, (i = g.page_size)),
          "reset_styles" in g && t(1, (a = g.reset_styles)),
          "show_images" in g && t(2, (o = g.show_images)),
          "show_sub_results" in g && t(3, (h = g.show_sub_results)),
          "excerpt_length" in g && t(24, (c = g.excerpt_length)),
          "process_result" in g && t(4, (m = g.process_result)),
          "process_term" in g && t(27, (p = g.process_term)),
          "show_empty_filters" in g && t(5, (d = g.show_empty_filters)),
          "open_filters" in g && t(6, (_ = g.open_filters)),
          "debounce_timeout_ms" in g && t(28, (u = g.debounce_timeout_ms)),
          "pagefind_options" in g && t(29, (f = g.pagefind_options)),
          "merge_index" in g && t(30, (T = g.merge_index)),
          "trigger_search_term" in g && t(23, (R = g.trigger_search_term)),
          "translations" in g && t(7, (M = g.translations)),
          "autofocus" in g && t(8, (U = g.autofocus)),
          "sort" in g && t(31, (X = g.sort)),
          "selected_filters" in g && t(0, (W = g.selected_filters));
      }),
      (n.$$.update = () => {
        if (n.$$.dirty[0] & 8388608) e: R && (t(9, (v = R)), t(23, (R = "")));
        if (n.$$.dirty[0] & 513) e: os(v, W);
      }),
      [
        W,
        a,
        o,
        h,
        m,
        d,
        _,
        M,
        U,
        v,
        O,
        V,
        st,
        tn,
        lt,
        rt,
        sn,
        it,
        ce,
        rn,
        rs,
        an,
        _s,
        R,
        c,
        r,
        i,
        p,
        u,
        f,
        T,
        X,
        fs,
        ds,
        hs,
        ms,
        ps,
        gs,
      ]
    );
  }
  const $t = class extends q {
    constructor(e) {
      super(),
        Y(
          this,
          e,
          ia,
          la,
          K,
          {
            base_path: 25,
            page_size: 26,
            reset_styles: 1,
            show_images: 2,
            show_sub_results: 3,
            excerpt_length: 24,
            process_result: 4,
            process_term: 27,
            show_empty_filters: 5,
            open_filters: 6,
            debounce_timeout_ms: 28,
            pagefind_options: 29,
            merge_index: 30,
            trigger_search_term: 23,
            translations: 7,
            autofocus: 8,
            sort: 31,
            selected_filters: 0,
          },
          null,
          [-1, -1]
        );
    }
  };
  const ss = $t;
  let en;
  try {
    en = new URL(document.currentScript.src).pathname.match(/^(.*\/)(?:pagefind-)?ui.js.*$/)[1];
  } catch {
    en = "/pagefind/";
  }
  const nt = class {
    constructor(e) {
      this._pfs = null;
      const t = e.element ?? "[data-pagefind-ui]";
      const s = e.bundlePath ?? en;
      const l = e.pageSize ?? 5;
      const r = e.resetStyles ?? !0;
      const i = e.showImages ?? !0;
      const a = e.showSubResults ?? !1;
      const o = e.excerptLength ?? 0;
      const h = e.processResult ?? null;
      const c = e.processTerm ?? null;
      const m = e.showEmptyFilters ?? !0;
      const p = e.openFilters ?? [];
      const d = e.debounceTimeoutMs ?? 300;
      const _ = e.mergeIndex ?? [];
      const u = e.translations ?? [];
      const f = e.autofocus ?? !1;
      const T = e.sort ?? null;
      (e.element = undefined),
        (e.bundlePath = undefined),
        (e.pageSize = undefined),
        (e.resetStyles = undefined),
        (e.showImages = undefined),
        (e.showSubResults = undefined),
        (e.excerptLength = undefined),
        (e.processResult = undefined),
        (e.processTerm = undefined),
        (e.showEmptyFilters = undefined),
        (e.openFilters = undefined),
        (e.debounceTimeoutMs = undefined),
        (e.mergeIndex = undefined),
        (e.translations = undefined),
        (e.autofocus = undefined),
        (e.sort = undefined);
      const R = t instanceof HTMLElement ? t : document.querySelector(t);
      R
        ? (this._pfs = new ss({
            target: R,
            props: {
              base_path: s,
              page_size: l,
              reset_styles: r,
              show_images: i,
              show_sub_results: a,
              excerpt_length: o,
              process_result: h,
              process_term: c,
              show_empty_filters: m,
              open_filters: p,
              debounce_timeout_ms: d,
              merge_index: _,
              translations: u,
              autofocus: f,
              sort: T,
              pagefind_options: e,
            },
          }))
        : console.error(`Pagefind UI couldn't find the selector ${t}`);
    }
    triggerSearch(e) {
      this._pfs.$$set({ trigger_search_term: e });
    }
    triggerFilters(e) {
      const t = {};
      for (const [s, l] of Object.entries(e))
        if (Array.isArray(l)) for (const r of l) t[`${s}:${r}`] = !0;
        else t[`${s}:${l}`] = !0;
      this._pfs.$$set({ selected_filters: t });
    }
    destroy() {
      this._pfs.$destroy();
    }
  };
  window.PagefindUI = nt;
})();
