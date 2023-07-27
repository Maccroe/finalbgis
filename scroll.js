! function(t, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).ScrollableCard = n()
}(this, (function() {
    "use strict";

    function t() {}
    const n = t => t;

    function e(t) {
        return t()
    }

    function o() {
        return Object.create(null)
    }

    function i(t) {
        t.forEach(e)
    }

    function r(t) {
        return "function" == typeof t
    }

    function a(t, n) {
        return t != t ? n == n : t !== n || t && "object" == typeof t || "function" == typeof t
    }
    const c = "undefined" != typeof window;
    let s = c ? () => window.performance.now() : () => Date.now(),
        l = c ? t => requestAnimationFrame(t) : t;
    const d = new Set;

    function f(t) {
        d.forEach(n => {
            n.c(t) || (d.delete(n), n.f())
        }), 0 !== d.size && l(f)
    }

    function u(t, n) {
        t.appendChild(n)
    }

    function p(t, n, e) {
        t.insertBefore(n, e || null)
    }

    function m(t) {
        t.parentNode.removeChild(t)
    }

    function h(t) {
        return document.createElement(t)
    }

    function b() {
        return t = " ", document.createTextNode(t);
        var t
    }

    function g(t, n, e, o) {
        return t.addEventListener(n, e, o), () => t.removeEventListener(n, e, o)
    }

    function x(t, n, e) {
        null == e ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e)
    }
    const y = new Set;
    let v, $ = 0;

    function w(t, n, e, o, i, r, a, c = 0) {
        const s = 16.666 / o;
        let l = "{\n";
        for (let t = 0; t <= 1; t += s) {
            const o = n + (e - n) * r(t);
            l += 100 * t + `%{${a(o,1-o)}}\n`
        }
        const d = l + `100% {${a(e,1-e)}}\n}`,
            f = `__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(d)}_${c}`,
            u = t.ownerDocument;
        y.add(u);
        const p = u.__svelte_stylesheet || (u.__svelte_stylesheet = u.head.appendChild(h("style")).sheet),
            m = u.__svelte_rules || (u.__svelte_rules = {});
        m[f] || (m[f] = !0, p.insertRule(`@keyframes ${f} ${d}`, p.cssRules.length));
        const b = t.style.animation || "";
        return t.style.animation = `${b?b+", ":""}${f} ${o}ms linear ${i}ms 1 both`, $ += 1, f
    }

    function _(t, n) {
        const e = (t.style.animation || "").split(", "),
            o = e.filter(n ? t => t.indexOf(n) < 0 : t => -1 === t.indexOf("__svelte")),
            i = e.length - o.length;
        i && (t.style.animation = o.join(", "), $ -= i, $ || l(() => {
            $ || (y.forEach(t => {
                const n = t.__svelte_stylesheet;
                let e = n.cssRules.length;
                for (; e--;) n.deleteRule(e);
                t.__svelte_rules = {}
            }), y.clear())
        }))
    }

    function k(t) {
        v = t
    }

    function z() {
        if (!v) throw new Error("Function called outside component initialization");
        return v
    }

    function L(t) {
        z().$$.on_destroy.push(t)
    }
    const E = [],
        C = [],
        M = [],
        T = [],
        H = Promise.resolve();
    let R = !1;

    function j(t) {
        M.push(t)
    }
    let S = !1;
    const A = new Set;

    function O() {
        if (!S) {
            S = !0;
            do {
                for (let t = 0; t < E.length; t += 1) {
                    const n = E[t];
                    k(n), I(n.$$)
                }
                for (k(null), E.length = 0; C.length;) C.pop()();
                for (let t = 0; t < M.length; t += 1) {
                    const n = M[t];
                    A.has(n) || (A.add(n), n())
                }
                M.length = 0
            } while (E.length);
            for (; T.length;) T.pop()();
            R = !1, S = !1, A.clear()
        }
    }

    function I(t) {
        if (null !== t.fragment) {
            t.update(), i(t.before_update);
            const n = t.dirty;
            t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(j)
        }
    }
    let W;

    function B(t, n, e) {
        t.dispatchEvent(function(t, n) {
            const e = document.createEvent("CustomEvent");
            return e.initCustomEvent(t, !1, !1, n), e
        }(`${n?"intro":"outro"}${e}`))
    }
    const N = new Set;
    let P;

    function q() {
        P = {
            r: 0,
            c: [],
            p: P
        }
    }

    function D() {
        P.r || i(P.c), P = P.p
    }

    function F(t, n) {
        t && t.i && (N.delete(t), t.i(n))
    }

    function V(t, n, e, o) {
        if (t && t.o) {
            if (N.has(t)) return;
            N.add(t), P.c.push(() => {
                N.delete(t), o && (e && t.d(1), o())
            }), t.o(n)
        }
    }
    const Y = {
        duration: 0
    };

    function G(e, o, a, c) {
        let u = o(e, a),
            p = c ? 0 : 1,
            m = null,
            h = null,
            b = null;

        function g() {
            b && _(e, b)
        }

        function x(t, n) {
            const e = t.b - p;
            return n *= Math.abs(e), {
                a: p,
                b: t.b,
                d: e,
                duration: n,
                start: t.start,
                end: t.start + n,
                group: t.group
            }
        }

        function y(o) {
            const {
                delay: r = 0,
                duration: a = 300,
                easing: c = n,
                tick: y = t,
                css: v
            } = u || Y, $ = {
                start: s() + r,
                b: o
            };
            o || ($.group = P, P.r += 1), m || h ? h = $ : (v && (g(), b = w(e, p, o, a, r, c, v)), o && y(0, 1), m = x($, a), j(() => B(e, o, "start")), function(t) {
                let n;
                0 === d.size && l(f), new Promise(e => {
                    d.add(n = {
                        c: t,
                        f: e
                    })
                })
            }(t => {
                if (h && t > h.start && (m = x(h, a), h = null, B(e, m.b, "start"), v && (g(), b = w(e, p, m.b, m.duration, 0, c, u.css))), m)
                    if (t >= m.end) y(p = m.b, 1 - p), B(e, m.b, "end"), h || (m.b ? g() : --m.group.r || i(m.group.c)), m = null;
                    else if (t >= m.start) {
                    const n = t - m.start;
                    p = m.a + m.d * c(n / m.duration), y(p, 1 - p)
                }
                return !(!m && !h)
            }))
        }
        return {
            run(t) {
                r(u) ? (W || (W = Promise.resolve(), W.then(() => {
                    W = null
                })), W).then(() => {
                    u = u(), y(t)
                }) : y(t)
            },
            end() {
                g(), m = h = null
            }
        }
    }

    function J(t, n) {
        -1 === t.$$.dirty[0] && (E.push(t), R || (R = !0, H.then(O)), t.$$.dirty.fill(0)), t.$$.dirty[n / 31 | 0] |= 1 << n % 31
    }

    function K(n, a, c, s, l, d, f = [-1]) {
        const u = v;
        k(n);
        const p = a.props || {},
            h = n.$$ = {
                fragment: null,
                ctx: null,
                props: d,
                update: t,
                not_equal: l,
                bound: o(),
                on_mount: [],
                on_destroy: [],
                before_update: [],
                after_update: [],
                context: new Map(u ? u.$$.context : []),
                callbacks: o(),
                dirty: f,
                skip_bound: !1
            };
        let b = !1;
        if (h.ctx = c ? c(n, p, (t, e, ...o) => {
                const i = o.length ? o[0] : e;
                return h.ctx && l(h.ctx[t], h.ctx[t] = i) && (!h.skip_bound && h.bound[t] && h.bound[t](i), b && J(n, t)), e
            }) : [], h.update(), b = !0, i(h.before_update), h.fragment = !!s && s(h.ctx), a.target) {
            if (a.hydrate) {
                const t = function(t) {
                    return Array.from(t.childNodes)
                }(a.target);
                h.fragment && h.fragment.l(t), t.forEach(m)
            } else h.fragment && h.fragment.c();
            a.intro && F(n.$$.fragment),
                function(t, n, o) {
                    const {
                        fragment: a,
                        on_mount: c,
                        on_destroy: s,
                        after_update: l
                    } = t.$$;
                    a && a.m(n, o), j(() => {
                        const n = c.map(e).filter(r);
                        s ? s.push(...n) : i(n), t.$$.on_mount = []
                    }), l.forEach(j)
                }(n, a.target, a.anchor), O()
        }
        k(u)
    }
    let Q;

    function U(t) {
        const n = t - 1;
        return n * n * n + 1
    }

    function X(t, {
        delay: n = 0,
        duration: e = 400,
        easing: o = U,
        x: i = 0,
        y: r = 0,
        opacity: a = 0
    }) {
        const c = getComputedStyle(t),
            s = +c.opacity,
            l = "none" === c.transform ? "" : c.transform,
            d = s * (1 - a);
        return {
            delay: n,
            duration: e,
            easing: o,
            css: (t, n) => `\n\t\t\ttransform: ${l} translate(${(1-t)*i}px, ${(1-t)*r}px);\n\t\t\topacity: ${s-d*n}`
        }
    }

    function Z(n) {
        let e;
        return {
            c() {
                e = h("div"), e.innerHTML = "<slot></slot>", this.c = t, x(e, "class", "scroll-item")
            },
            m(t, n) {
                p(t, e, n)
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && m(e)
            }
        }
    }
    "function" == typeof HTMLElement && (Q = class extends HTMLElement {
        constructor() {
            super(), this.attachShadow({
                mode: "open"
            })
        }
        connectedCallback() {
            for (const t in this.$$.slotted) this.appendChild(this.$$.slotted[t])
        }
        attributeChangedCallback(t, n, e) {
            this[t] = e
        }
        $destroy() {
            ! function(t, n) {
                const e = t.$$;
                null !== e.fragment && (i(e.on_destroy), e.fragment && e.fragment.d(n), e.on_destroy = e.fragment = null, e.ctx = [])
            }(this, 1), this.$destroy = t
        }
        $on(t, n) {
            const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return e.push(n), () => {
                const t = e.indexOf(n); - 1 !== t && e.splice(t, 1)
            }
        }
        $set(t) {
            var n;
            this.$$set && (n = t, 0 !== Object.keys(n).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
        }
    });

    function tt(n) {
        let e, o, i, r, a;
        return {
            c() {
                e = h("div"), e.innerHTML = '<svg class="mdc-fab__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path><path fill="none" d="M0 0h24v24H0V0z"></path></svg>', x(e, "class", "mdc-fab mdc-fab--mini skip-button start"), x(e, "role", "button")
            },
            m(t, o) {
                p(t, e, o), i = !0, r || (a = g(e, "click", n[3]), r = !0)
            },
            p: t,
            i(t) {
                i || (j(() => {
                    o || (o = G(e, X, {
                        x: -100,
                        duration: 200
                    }, !0)), o.run(1)
                }), i = !0)
            },
            o(t) {
                o || (o = G(e, X, {
                    x: -100,
                    duration: 200
                }, !1)), o.run(0), i = !1
            },
            d(t) {
                t && m(e), t && o && o.end(), r = !1, a()
            }
        }
    }

    function nt(n) {
        let e, o, i, r, a;
        return {
            c() {
                e = h("div"), e.innerHTML = '<svg class="mdc-fab__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path><path fill="none" d="M0 0h24v24H0V0z"></path></svg>', x(e, "class", "mdc-fab mdc-fab--mini skip-button end"), x(e, "role", "button")
            },
            m(t, o) {
                p(t, e, o), i = !0, r || (a = g(e, "click", n[4]), r = !0)
            },
            p: t,
            i(t) {
                i || (j(() => {
                    o || (o = G(e, X, {
                        x: 100,
                        duration: 200
                    }, !0)), o.run(1)
                }), i = !0)
            },
            o(t) {
                o || (o = G(e, X, {
                    x: 100,
                    duration: 200
                }, !1)), o.run(0), i = !1
            },
            d(t) {
                t && m(e), t && o && o.end(), r = !1, a()
            }
        }
    }

    function et(n) {
        let e, o, i, r, a, c = n[1] && tt(n),
            s = n[2] && nt(n);
        return {
            c() {
                e = h("div"), c && c.c(), o = b(), i = h("div"), i.innerHTML = "<slot></slot>", r = b(), s && s.c(), this.c = t, x(i, "class", "items"), x(e, "class", "horizontal-list-container")
            },
            m(t, l) {
                p(t, e, l), c && c.m(e, null), u(e, o), u(e, i), n[5](i), u(e, r), s && s.m(e, null), a = !0
            },
            p(t, [n]) {
                t[1] ? c ? (c.p(t, n), 2 & n && F(c, 1)) : (c = tt(t), c.c(), F(c, 1), c.m(e, o)) : c && (q(), V(c, 1, 1, () => {
                    c = null
                }), D()), t[2] ? s ? (s.p(t, n), 4 & n && F(s, 1)) : (s = nt(t), s.c(), F(s, 1), s.m(e, null)) : s && (q(), V(s, 1, 1, () => {
                    s = null
                }), D())
            },
            i(t) {
                a || (F(c), F(s), a = !0)
            },
            o(t) {
                V(c), V(s), a = !1
            },
            d(t) {
                t && m(e), c && c.d(), n[5](null), s && s.d()
            }
        }
    }

    function ot(t, n, e) {
        let o, i = 0;
        var r;

        function a() {
            i !== o.scrollLeft && e(6, i = o.scrollLeft)
        }
        r = () => {
            e(6, i = o.scrollLeft), window.addEventListener("resize", a)
        }, z().$$.on_mount.push(r), L(() => {
            window.removeEventListener("resize", a)
        });
        const c = setInterval(() => {
            i !== o.scrollLeft && e(6, i = o.scrollLeft)
        }, 500);
        let s, l;
        return L(() => {
            clearInterval(c)
        }), t.$$.update = () => {
            65 & t.$$.dirty && e(1, s = !!o && 0 !== i), 65 & t.$$.dirty && e(2, l = !!o && i < o.scrollWidth - o.clientWidth)
        }, [o, s, l, function() {
            o.scrollTo({
                left: o.scrollLeft - window.innerWidth - 21,
                behavior: "smooth"
            }), e(6, i = o.scrollLeft)
        }, function() {
            o.scrollTo({
                left: o.scrollLeft + window.innerWidth - 21,
                behavior: "smooth"
            }), e(6, i = o.scrollLeft)
        }, function(t) {
            C[t ? "unshift" : "push"](() => {
                o = t, e(0, o)
            })
        }]
    }
    customElements.define("sv-scrollable-item", class extends Q {
        constructor(t) {
            super(), this.shadowRoot.innerHTML = "<style>.scroll-item{display:inline-block;position:relative;flex:none;margin-right:6px;margin-left:6px;margin-bottom:6px}</style>", K(this, {
                target: this.shadowRoot
            }, null, Z, a, {}), t && t.target && p(t.target, this, t.anchor)
        }
    });
    class it extends Q {
        constructor(t) {
            super(), this.shadowRoot.innerHTML = '<style>.horizontal-list-container{display:flex;align-content:center;margin-bottom:-5px;animation-name:fadeIn;animation-duration:0.2s;animation-fill-mode:both}.horizontal-list-container .skip-button{position:absolute;align-self:center;z-index:99999;margin-top:10px !important; display:block;}@media(max-width: 600px){.horizontal-list-container .skip-button{}}.horizontal-list-container .skip-button.start{left:0px;border-radius:10px}.horizontal-list-container .skip-button.end{right:0px;border-radius:10px}.horizontal-list-container .items{overflow:hidden;transition-duration:0.15s;transition-timing-function:cubic-bezier(0.4, 0, 1, 1);will-change:transform;display:inline-block;white-space:nowrap;padding:20px 20px 0 0}@media(max-width: 600px){.horizontal-list-container .items{overflow:auto}}@keyframes fadeIn{0%{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}.mdc-fab{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:hidden;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);background-color:#ffffff;color:#3253dc;color:var(--mdc-theme-on-secondary,#3253dc)}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab:hover,.mdc-fab:focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.mdc-fab:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}@supports not (-ms-ime-align: auto){.mdc-fab{background-color:var(--mdc-theme-secondary, #ffffff)}}.mdc-fab .mdc-fab__icon{width:40px;height:40px;font-size:24px}.mdc-fab--mini{width:48px;height:56px}.mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-fab{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-fab::before,.mdc-fab::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-fab::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1}.mdc-fab::before,.mdc-fab::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-fab::before,.mdc-fab::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-fab::before,.mdc-fab::after{background-color:var(--mdc-theme-on-secondary, #fff)}}.mdc-fab:hover::before{opacity:0.08}.mdc-fab:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24}.mdc-fab:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-fab:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24}</style>', K(this, {
                target: this.shadowRoot
            }, ot, et, a, {}), t && t.target && p(t.target, this, t.anchor)
        }
    }
    return customElements.define("sv-scrollable", it), it
}));