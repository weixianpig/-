// ==UserScript==
// @name          GGBOND
// @author        Weixian
// @description   try to take over the world!
// @namespace     https://krunker.zip
// @icon         https://p5.itc.cn/images01/20230524/0362148f47864cad81596d569c9b82f3.gif
// @match         https://krunker.io/*
// @exclude       https://krunker.io/social.html*
// @exclude       https://krunker.io/editor.html*
// @exclude       https://krunker.io/viewer.html*
// @antifeature   ads
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_listValues
// @grant         GM_deleteValue
// @grant         GM_openInTab
// @run-at        document-start
// @require       https://raw.githubusercontent.com/weixianpig/-/refs/heads/main/react.production.min.js
// @require       https://raw.githubusercontent.com/weixianpig/-/refs/heads/main/react-dom.production.min.js
// @version       1.0.16
// ==/UserScript==
// 这段代码是用户脚本的元数据，定义了脚本的基本信息和所需的权限。
/*eslint-disable*/
typeof require === "function" && ["https://raw.githubusercontent.com/weixianpig/-/refs/heads/main/react.production.min.js", "https://raw.githubusercontent.com/weixianpig/-/refs/heads/main/react-dom.production.min.js"].map(u => {
    const h = new XMLHttpRequest;
    h.open("GET", u, !1);
    h.send();
    new Function("e", "eval(e)")(h.responseText + `
//# sourceURL=${u}`)
});
// 这段代码用于加载 React 和 ReactDOM 库，确保它们在脚本中可用
"use strict";
(() => {
    var Fo = Object.create;
    var $e = Object.defineProperty;
    var Qo = Object.getOwnPropertyDescriptor;
    var $o = Object.getOwnPropertyNames;
    var er = Object.getPrototypeOf,
        tr = Object.prototype.hasOwnProperty;
    var et = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
        get: (t, n) => (typeof require < "u" ? require : t)[n]
    }) : e)(function(e) {
        if (typeof require < "u") return require.apply(this, arguments);
        throw Error('Dynamic require of "' + e + '" is not supported')
    });
    var bn = (e, t) => () => (e && (t = e(e = 0)), t);
    var Q = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        Cn = (e, t) => {
            for (var n in t) $e(e, n, {
                get: t[n],
                enumerable: !0
            })
        },
        vn = (e, t, n, o) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let r of $o(t)) !tr.call(e, r) && r !== n && $e(e, r, {
                    get: () => t[r],
                    enumerable: !(o = Qo(t, r)) || o.enumerable
                });
            return e
        };
    var E = (e, t, n) => (n = e != null ? Fo(er(e)) : {}, vn(t || !e || !e.__esModule ? $e(n, "default", {
            value: e,
            enumerable: !0
        }) : n, e)),
        ne = e => vn($e({}, "__esModule", {
            value: !0
        }), e);
    var ae = {};
    Cn(ae, {
        Fragment: () => or,
        default: () => nr,
        useEffect: () => Ne,
        useRef: () => zt,
        useState: () => je
    });
    var nr, Ne, je, zt, or, X = bn(() => {
        nr = React, {
            useEffect: Ne,
            useState: je,
            useRef: zt,
            Fragment: or
        } = React
    });
    var fe = Q(ie => {
        "use strict";
        var ar = ie && ie.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(ie, "__esModule", {
            value: !0
        });
        ie.Control = ie.ControlContainer = ie.ControlTitle = void 0;
        var ye = ar((X(), ne(ae)));

        function Gn({
            attention: e,
            children: t
        }) {
            return ye.default.createElement(ye.default.Fragment, null, t, " ", e && ye.default.createElement("span", {
                style: {
                    color: "#0000FF"//广告阻拦后面的那个*号的颜色
                }
            }, "*"))
        }
        ie.ControlTitle = Gn;

        function ir({
            description: e,
            children: t
        }) {
            return ye.default.createElement("div", {
                className: "settName",
                title: e
            }, t)
        }
        ie.ControlContainer = ir;

        function sr({
            title: e,
            description: t,
            attention: n,
            children: o
        }) {
            return ye.default.createElement("div", {
                className: "settName",
                title: t
            }, e ? ye.default.createElement(ye.default.Fragment, null, ye.default.createElement(Gn, {
                attention: n
            }, e), " ", o) : o)
        }
        ie.Control = sr
    });
    var Z = Q(De => {
        "use strict";
        var cr = De && De.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(De, "__esModule", {
            value: !0
        });
        De.Switch = void 0;
        var st = cr((X(), ne(ae))),
            lr = fe();

        function xr({
            title: e,
            attention: t,
            description: n,
            checked: o,
            defaultChecked: r,
            onChange: i
        }) {
            return st.default.createElement(lr.Control, {
                title: e,
                attention: t,
                description: n
            }, st.default.createElement("label", {
                className: "switch",
                style: {
                    marginLeft: 10
                }
            }, st.default.createElement("input", {
                type: "checkbox",
                onChange: i,
                checked: o,
                defaultChecked: r
            }), st.default.createElement("span", {
                className: "slider"
            })))
        }
        De.Switch = xr
    });
    var pt = Q(me => {
        "use strict";
        Object.defineProperty(me, "__esModule", {
            value: !0
        });
        me.getKeyCode = me.getKeyName = me.keyboardMap = void 0;
        me.keyboardMap = ["", "", "", "CANCEL", "", "", "HELP", "", "BACK_SPACE", "TAB", "", "", "CLEAR", "ENTER", "ENTER_SPECIAL", "", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", "", "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT", "UP", "RIGHT", "DOWN", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "COLON", "SEMICOLON", "LESS_THAN", "EQUALS", "GREATER_THAN", "QUESTION_MARK", "AT", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "OS_KEY", "", "CONTEXT_MENU", "", "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24		", "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA		", "", "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE	", "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", "", "", ";", "=", ",", "MINUS", "PERIOD", "SLASH", "BACK_QUOTE						", "", "", "[", "\\", "]", "QUOTE", "", "META", "ALTGR", "", "WIN_ICO_HELP", "WIN_ICO_00", "", ";", "=", ",", "-", ".", "/", "~", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "", "PA1", "WIN_OEM_CLEAR", "", "", "", "", "", "", "", "", "", "[", "\\", "]", "'"];

        function Tr(e) {
            return e < 0 ? "UNBOUND" : e === 2e4 ? "SCROLL" : e > 1e4 ? "M" + (e - 1e4) : me.keyboardMap[e]
        }
        me.getKeyName = Tr;

        function Jr(e) {
            return e instanceof MouseEvent ? 1e4 + e.which : e.keyCode
        }
        me.getKeyCode = Jr
    });
    var Ze = Q(H => {
        "use strict";
        var Mr = H && H.__createBinding || (Object.create ? function(e, t, n, o) {
                o === void 0 && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) && (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, o, r)
            } : function(e, t, n, o) {
                o === void 0 && (o = n), e[o] = t[n]
            }),
            _r = H && H.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            Gr = H && H.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (e != null)
                    for (var n in e) n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && Mr(t, e, n);
                return _r(t, e), t
            };
        Object.defineProperty(H, "__esModule", {
            value: !0
        });
        H.BindHolder = H.Bind = H.BindModePicker = H.BindMode = void 0;
        var R = Gr((X(), ne(ae))),
            Hn = pt(),
            Ur = fe(),
            $t;
        (function(e) {
            e.toggle = "toggle", e.hold = "hold"
        })($t = H.BindMode || (H.BindMode = {}));

        function kr({
            value: e,
            defaultValue: t,
            onChange: n
        }) {
            return R.default.createElement("div", {
                style: {
                    float: "right"
                }
            }, R.default.createElement("select", {
                className: "inputGrey2",
                value: e,
                defaultValue: t,
                onChange: n
            }, R.default.createElement("option", {
                value: $t.toggle
            }, "Press (Toggle)"), ",", R.default.createElement("option", {
                value: $t.hold
            }, "Continuous (Hold)")))
        }
        H.BindModePicker = kr;

        function qr({
            bind: e,
            reset: t,
            unbind: n,
            setBind: o
        }) {
            let [r, i] = (0, R.useState)(!1);
            return (0, R.useEffect)(() => {
                if (!r) return;
                let a = c => {
                    i(!1), o((0, Hn.getKeyCode)(c)), c.preventDefault()
                };
                return window.addEventListener("mousedown", a, {
                    once: !0
                }), window.addEventListener("keydown", a, {
                    once: !0
                }), () => {
                    window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a)
                }
            }, [r]), R.default.createElement("div", {
                style: {
                    float: "right"
                }
            }, R.default.createElement("span", {
                className: "reset",
                title: "Reset Bind",
                onClick: () => t()
            }, R.default.createElement("i", {
                className: "material-icons",
                style: {
                    fontSize: "40px",
                    color: "var(--yellow)"
                }
            }, "refresh")), R.default.createElement("span", {
                className: "unbind",
                title: "Unbind",
                onClick: () => n()
            }, R.default.createElement("i", {
                className: "material-icons",
                style: {
                    fontSize: "40px",
                    color: "var(--red)"
                }
            }, "delete_forever")), R.default.createElement("span", {
                className: "settText floatRNoC keyIcon",
                onMouseOver: () => playTick(),
                onClick: () => i(!0)
            }, r ? "Press any Key" : (0, Hn.getKeyName)(e)))
        }
        H.Bind = qr;

        function Wr({
            title: e,
            attention: t,
            description: n,
            children: o,
            modePicker: r
        }) {
            let i = [];
            if (Array.isArray(o))
                for (let a = 0; a < o.length; a++) i.push(R.default.createElement(R.Fragment, {
                    key: a
                }, o[a])), a + 1 !== o.length && i.push(R.default.createElement("div", {
                    className: "bindSep",
                    key: a + "_sep"
                }));
            else i.push(o);
            return R.default.createElement(Ur.Control, {
                title: e,
                attention: t,
                description: n
            }, r, i)
        }
        H.BindHolder = Wr
    });
    var yt = Q(se => {
        "use strict";
        var Sr = se && se.__createBinding || (Object.create ? function(e, t, n, o) {
                o === void 0 && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) && (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, o, r)
            } : function(e, t, n, o) {
                o === void 0 && (o = n), e[o] = t[n]
            }),
            Dr = se && se.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            Ir = se && se.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (e != null)
                    for (var n in e) n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && Sr(t, e, n);
                return Dr(t, e), t
            };
        Object.defineProperty(se, "__esModule", {
            value: !0
        });
        se.Slider = void 0;
        var Le = Ir((X(), ne(ae))),
            Er = fe();

        function Lr({
            title: e,
            attention: t,
            description: n,
            defaultValue: o,
            min: r,
            max: i,
            step: a,
            onChange: c
        }) {
            let u = (0, Le.useRef)(null),
                l = (0, Le.useRef)(null);
            return Le.default.createElement(Er.Control, {
                title: e,
                attention: t,
                description: n
            }, Le.default.createElement("input", {
                type: "number",
                className: "sliderVal",
                min: r,
                max: i,
                step: a,
                defaultValue: typeof o == "number" ? o.toString() : o,
                onChange: f => {
                    l.current && (l.current.valueAsNumber = f.currentTarget.valueAsNumber), c && c.call(void 0, f)
                },
                ref: u,
                style: {
                    marginRight: 0,
                    borderWidth: 0
                }
            }), Le.default.createElement("div", {
                className: "slidecontainer",
                style: {
                    marginTop: -8
                }
            }, Le.default.createElement("input", {
                className: "sliderM",
                type: "range",
                defaultValue: typeof o == "number" ? o.toString() : o,
                min: r,
                max: i,
                step: a,
                onChange: f => {
                    u.current && (u.current.valueAsNumber = f.currentTarget.valueAsNumber), c && c.call(void 0, f)
                },
                ref: l
            })))
        }
        se.Slider = Lr
    });
    var Fn = Q(ze => {
        "use strict";
        var zr = ze && ze.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(ze, "__esModule", {
            value: !0
        });
        ze.Select = void 0;
        var Vn = zr((X(), ne(ae))),
            Br = fe();

        function Ar({
            title: e,
            attention: t,
            description: n,
            children: o,
            defaultValue: r,
            value: i,
            onChange: a
        }) {
            return Vn.default.createElement(Br.Control, {
                title: e,
                attention: t,
                description: n
            }, Vn.default.createElement("select", {
                className: "inputGrey2",
                value: i,
                defaultValue: r,
                onChange: a
            }, o))
        }
        ze.Select = Ar
    });
    var tn = Q(F => {
        "use strict";
        var Hr = F && F.__createBinding || (Object.create ? function(e, t, n, o) {
                o === void 0 && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) && (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, o, r)
            } : function(e, t, n, o) {
                o === void 0 && (o = n), e[o] = t[n]
            }),
            Pr = F && F.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            Rr = F && F.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (e != null)
                    for (var n in e) n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && Hr(t, e, n);
                return Pr(t, e), t
            };
        Object.defineProperty(F, "__esModule", {
            value: !0
        });
        F.HeadlessSet = F.Set = void 0;
        var Ue = Rr((X(), ne(ae)));

        function Or({
            title: e,
            children: t
        }) {
            let [n, o] = (0, Ue.useState)(!1);
            return Ue.default.createElement(Ue.default.Fragment, null, Ue.default.createElement("div", {
                className: "setHed",
                onClick: () => o(!n)
            }, Ue.default.createElement("span", {
                className: "material-icons plusOrMinus"
            }, n ? "keyboard_arrow_right" : "keyboard_arrow_down"), " ", e), Ue.default.createElement("div", {
                className: "setBodH",
                style: {
                    display: n ? "none" : void 0
                }
            }, t))
        }
        F.Set = Or;

        function Yr({
            children: e
        }) {
            return Ue.default.createElement("div", {
                className: "setBodH"
            }, e)
        }
        F.HeadlessSet = Yr
    });
    var Eo = Q(He => {
        "use strict";
        var na = He && He.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(He, "__esModule", {
            value: !0
        });
        He.ColorPicker = void 0;
        var Io = na((X(), ne(ae))),
            oa = fe();

        function ra({
            title: e,
            attention: t,
            description: n,
            value: o,
            defaultValue: r,
            onChange: i
        }) {
            return Io.default.createElement(oa.Control, {
                title: e,
                attention: t,
                description: n
            }, Io.default.createElement("input", {
                type: "color",
                name: "color",
                style: {
                    float: "right"
                },
                value: o,
                defaultValue: r,
                onChange: i
            }))
        }
        He.ColorPicker = ra
    });
    var zo = Q(Pe => {
        "use strict";
        var aa = Pe && Pe.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(Pe, "__esModule", {
            value: !0
        });
        Pe.Link = void 0;
        var fn = aa((X(), ne(ae))),
            Lo = fe();

        function ia({
            title: e,
            attention: t,
            description: n,
            href: o,
            onClick: r
        }) {
            return fn.default.createElement(Lo.ControlContainer, {
                description: n
            }, fn.default.createElement("a", {
                href: o,
                onClick: r
            }, fn.default.createElement(Lo.ControlTitle, {
                attention: t
            }, e)))
        }
        Pe.Link = ia
    });
    var Bo = Q(ce => {
        "use strict";
        var sa = ce && ce.__createBinding || (Object.create ? function(e, t, n, o) {
                o === void 0 && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) && (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, o, r)
            } : function(e, t, n, o) {
                o === void 0 && (o = n), e[o] = t[n]
            }),
            ca = ce && ce.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            la = ce && ce.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (e != null)
                    for (var n in e) n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && sa(t, e, n);
                return ca(t, e), t
            };
        Object.defineProperty(ce, "__esModule", {
            value: !0
        });
        ce.Settings = void 0;
        var Me = la((X(), ne(ae)));

        function xa({
            header: e,
            tabs: t,
            defaultTabID: n = 0,
            onTabChange: o
        }) {
            let [r, i] = (0, Me.useState)(n), a = t[r];
            if (!a) throw new TypeError("Bad tab");
            let {
                body: c
            } = a;
            return Me.default.createElement(Me.default.Fragment, null, Me.default.createElement("div", {
                className: "settingsHeader"
            }, e, Me.default.createElement("div", {
                id: "settingsTabLayout"
            }, t.map((u, l) => Me.default.createElement("div", {
                className: `settingTab ${r===l?"tabANew":""}`,
                onMouseEnter: () => playTick(),
                onClick: () => {
                    playSelect(.1), i(l), o && o(l)
                },
                key: l
            }, u.name)))), Me.default.createElement("div", {
                id: "settHolder"
            }, Me.default.createElement(c, null)))
        }
        ce.Settings = xa
    });
    var Ro = {};
    Cn(Ro, {
        createRoot: () => pn,
        default: () => ma
    });
    var ma, pn, yn = bn(() => {
        ma = ReactDOM, {
            createRoot: pn
        } = ReactDOM
    });
    var Oo = Q(Wt => {
        "use strict";
        Object.defineProperty(Wt, "__esModule", {
            value: !0
        });
        Wt.createRenderContainer = void 0;
        var da = (yn(), ne(Ro));

        function ha(e) {
            let t = "a-" + Math.random().toString().slice(2);
            class n extends HTMLElement {
                connectedCallback() {
                    let r = this.parentElement;
                    this.remove();
                    let i = (0, da.createRoot)(r);
                    i.render(e()), Reflect.defineProperty(r, "innerHTML", {
                        configurable: !0,
                        set: a => {
                            Reflect.deleteProperty(r, "innerHTML"), i.unmount(), r.innerHTML = a
                        }
                    })
                }
            }
            return customElements.define(t, n), `<${t} />`
        }
        Wt.createRenderContainer = ha
    });
    var tt = class {
            path;
            db;
            fs = et("fs");
            save() {
                this.fs.writeFileSync(this.path, JSON.stringify(Object.fromEntries(this.db)))
            }
            constructor(t) {
                this.path = t;
                try {
                    this.db = new Map(Object.entries(JSON.parse(this.fs.readFileSync(this.path, "utf-8"))))
                } catch (n) {
                    this.db = new Map
                }
            }
            setValue(t, n) {
                this.db.set(t, n), this.save()
            }
            getValue(t, n) {
                return this.db.has(t) ? this.db.get(t) : n
            }
            deleteValue(t) {
                this.db.delete(t), this.save()
            }
            listValues() {
                return Array.from(this.db.keys())
            }
        },
        nt = class {
            setValue(t, n) {
                GM_setValue(t, n)
            }
            getValue(t, n) {
                return GM_getValue(t, n)
            }
            deleteValue(t) {
                GM_deleteValue(t)
            }
            listValues() {
                return GM_listValues()
            }
        };
    var xe = "https://krunker.zip/stable/"; //
    var Lt = "39867c2376000320370984529f5ebd3c230ff13fbc895e82563b1224e492260898d8ea3ab2306ff0ebf356baddb928b66d478259c4b2cfa7a80f21632536ba1a";
    var Ye = "10000000000000.0.16";
    var rt = "https://p5.itc.cn/images01/20230524/0362148f47864cad81596d569c9b82f3.gif",
        wn = "https://p5.itc.cn/images01/20230524/0362148f47864cad81596d569c9b82f3.gif",
        K = !1,
        ot;
    try {
        et("os"), ot = !0
    } catch (e) {
        ot = !1
    }

    function at() {
        return ot ? new tt(et("path").join(et("os").homedir(), ".photoshop.sketch")) : new nt
    }

    function ge() {
        return ot ? window : unsafeWindow
    }
    var Tn = location.hostname === "krunker.io",
        k = {
            frame: 0,
            delta: 1,
            xDir: 2,
            yDir: 3,
            moveDir: 4,
            shoot: 5,
            scope: 6,
            jump: 7,
            reload: 8,
            crouch: 9,
            weaponScroll: 10,
            weaponSwap: 11,
            moveLock: 12
        };

    function Jn(e) {
        return new Promise(t => setTimeout(() => t(), e))
    }

    function ue(e, t, n = !1) {
        return (n ? Math.random() * (t - e) : ~~(Math.random() * (t - e + 1))) + e
    }

    function Mn(e, t = 50) {
        return new Promise(n => {
            let o, r = () => {
                try {
                    let i = e();
                    if (i) return o && clearInterval(o), n(i), !0
                } catch (i) {
                    console.error(i)
                }
            };
            r() || (o = setInterval(r, t))
        })
    }
    var oe = re;

    function re(e, t) {
        let n = it();
        return re = function(o, r) {
            o = o - 262;
            let i = n[o];
            if (re.NkmKLo === void 0) {
                var a = function(f) {
                    let y = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=",
                        g = "",
                        w = "";
                    for (let m = 0, h, b, _ = 0; b = f.charAt(_++); ~b && (h = m % 4 ? h * 64 + b : b, m++ % 4) ? g += String.fromCharCode(255 & h >> (-2 * m & 6)) : 0) b = y.indexOf(b);
                    for (let m = 0, h = g.length; m < h; m++) w += "%" + ("00" + g.charCodeAt(m).toString(16)).slice(-2);
                    return decodeURIComponent(w)
                };
                re.uUDJCF = a, e = arguments, re.NkmKLo = !0
            }
            let c = n[0],
                u = o + c,
                l = e[u];
            return l ? i = l : (i = re.uUDJCF(i), e[u] = i), i
        }, re(e, t)
    }(function(e, t) {
        let n = re,
            o = e();
        for (;;) try {
            if (parseInt(n(280)) / 1 * (-parseInt(n(309)) / 2) + parseInt(n(278)) / 3 * (-parseInt(n(281)) / 4) + -parseInt(n(269)) / 5 * (-parseInt(n(296)) / 6) + parseInt(n(268)) / 7 * (-parseInt(n(266)) / 8) + -parseInt(n(298)) / 9 + -parseInt(n(307)) / 10 * (-parseInt(n(273)) / 11) + parseInt(n(322)) / 12 === t) break;
            o.push(o.shift())
        } catch (r) {
            o.push(o.shift())
        }
    })(it, 285438);

    function it() {
        let e = ["D0jfrxu", "reLz", "ANnVBG", "C2LNBMfS", "mJm2mJjRDKntBLC", "C2TPBNm", "mxDdqLDRCq", "mtKYvxP2Efr3", "zhznExu", "Dgv4Da", "BI9QC29U", "s1jmBhq", "AM9uv2m", "C2LVBG", "zKj2vvO", "sMfds3e", "CMjMEhq", "CwTNr0K", "C3rHDhvZ", "sxvozfm", "AxjIq0u", "z2vUzxjHDgvuBq", "mZa1odK4sw9TvxPm", "CfrVA2vU", "ndq1nZq4neLtz2z2sG", "uxzADuq", "q3DLyMy", "C291CMnL", "zxjYB3i", "Euz4qxC", "igfNywLUigLUia", "u2LPwMS", "su5YC04", "mZe2mhPqwKHitW", "Dg9tDhjPBMC", "ntKXotu0ufjxv1Lq", "B1PYtuK", "ue9tva", "C2TLDgnOvMvYCW", "ywfTEg4", "yxbWBgLJyxrPBW", "qLHUBMW", "qKrhtum", "B2TMs1O", "wePowfq", "v1nQExi", "C3vWCg9YDgvKrW", "rK1Iqu4", "mtq4mJa5ndH1B2ryque", "AhLLt3O", "BeDQsxa", "zNDhrMq", "ANDitvG", "u2vYDMvYigvYCG", "qM9mDNy", "C3rYAw5NAwz5", "CwTXr24", "ywfOuu4", "v2DuyKm", "q0XJu0i", "D2fYBG", "yw1L", "DhboCfi", "y3LmC2m", "y2f0y2G", "y3vYCMvUDfzLCG", "Aw9U", "B3iSihrYEwLUzW", "otK5mLPZtwnVEG", "DxbKyxrLvvjm", "mtG0mvjArxbuCq", "nwDfzunlqG", "ruD2wwe", "yNL1C1G", "uvziB0y", "mtCZmdngz0veA1u"];
        return it = function() {
            return e
        }, it()
    }
    var Ge = (e => {
        let t = re,
            n = {};
        n[t(336)] = t(275);
        let o = n;
        return e[e[t(275)] = 0] = o[t(336)], e
    })(Ge || {});
    async function _e() {
        let e = re,
            t = {
                wBEEu: e(327) + e(265) + e(304) + "3s",
                aahQN: function(n, o) {
                    return n(o)
                }
            };
        K && console[e(334)](t[e(274)]), await t[e(331)](Jn, 3e3)
    }
    var Se = class {
        static async [oe(295) + oe(297)](t) {
            let n = oe,
                o = {
                    fwGFd: function(r, i) {
                        return r instanceof i
                    },
                    aamxn: n(275),
                    EGvYa: function(r, i, a) {
                        return r(i, a)
                    },
                    XJNXT: function(r, i) {
                        return r !== i
                    },
                    IuNdS: n(271),
                    WgTbC: function(r) {
                        return r()
                    }
                };
            for (;;) {
                let r = {};
                r[n(277)] = t;
                let i = await o[n(270)](fetch, new URL("hi", xe)[n(308)](), r)[n(262)](a => {
                    let c = n;
                    if (o[c(325)](a, DOMException)) throw a;
                    K && console[c(302)](a)
                });
                if (!(i != null && i.ok)) {
                    if (o[n(318)](o[n(293)], o[n(293)])) return _0x366355[_0x56230e[o[n(313)]] = 0] = n(275), _0x526f43;
                    await o[n(332)](_e);
                    continue
                }
                return await i[n(283)]()
            }
        }
        static async [oe(312) + oe(264)](t, n) {
            let o = oe,
                r = {
                    fBvUZ: function(i, a) {
                        return i instanceof a
                    },
                    Cwebf: function(i, a, c) {
                        return i(a, c)
                    },
                    SiiZk: o(312) + o(264),
                    KRLlt: o(311),
                    lGjIp: o(314) + o(284),
                    irbCE: function(i, a) {
                        return i === a
                    },
                    QVHoF: function(i, a) {
                        return i === a
                    },
                    yFxAw: o(299),
                    cyLsc: function(i) {
                        return i()
                    }
                };
            for (;;)
                if (o(282) === o(282)) {
                    let i = {};
                    i[o(263) + o(287)] = t, i[o(320) + o(335)] = n;
                    let a = await r[o(300)](fetch, new URL(r[o(305)], xe), {
                        method: r[o(285)],
                        headers: {
                            accept: r[o(324)],
                            "content-type": r[o(324)]
                        },
                        body: JSON[o(329)](i)
                    })[o(262)](u => {
                        K && console[o(302)](u)
                    });
                    if (r[o(294)](a == null ? void 0 : a[o(292)], 425))
                        if (r[o(272)](r[o(303)], o(316))) _0x52c380 && _0x2b4c70[o(302)](_0x2ebedd);
                        else {
                            await r[o(337)](_e);
                            continue
                        } if (!(a != null && a.ok)) {
                        await r[o(337)](_e);
                        continue
                    }
                    let c = await a[o(276)]();
                    return {
                        ...c,
                        updateURL: new URL(c[o(267)], xe)[o(308)]()
                    }
                } else {
                    if (r[o(288)](_0x84e41e, _0xb00889)) throw _0x3c6273;
                    _0x5e7a71 && _0x22be73[o(302)](_0x29f4e6)
                }
        }
        async [oe(301)]() {
            let t = oe,
                n = {
                    hyeOz: function(o, r) {
                        return o(r)
                    },
                    jwHMX: function(o, r) {
                        return o === r
                    },
                    CLcSB: function(o, r) {
                        return o !== r
                    },
                    WSjyr: t(330),
                    BoLvv: function(o) {
                        return o()
                    }
                };
            for (;;) {
                let o = await n[t(323)](fetch, new URL(t(301), xe)[t(308)]())[t(262)](r => {
                    K && console[t(302)](r)
                });
                if (n[t(326)](o == null ? void 0 : o[t(292)], 404))
                    if (n[t(333)](n[t(319)], n[t(319)])) _0x298e8e && _0x1e2078[t(302)](_0x26d20b);
                    else {
                        await n[t(328)](_e);
                        continue
                    } if (!(o != null && o.ok)) {
                    await n[t(328)](_e);
                    continue
                }
                return await o[t(283)]()
            }
        }
        async [oe(279)]() {
            let t = oe,
                n = {
                    okfKZ: function(o, r) {
                        return o(r)
                    },
                    FMbAN: t(279),
                    qkgGI: function(o, r) {
                        return o === r
                    },
                    oZrMI: function(o, r) {
                        return o !== r
                    },
                    INrsN: t(286),
                    BXnnl: t(290),
                    JaCKq: function(o) {
                        return o()
                    }
                };
            for (;;) {
                let o = await n[t(317)](fetch, new URL(n[t(321)], xe))[t(262)](r => {
                    K && console[t(302)](r)
                });
                if (n[t(291)](o == null ? void 0 : o[t(292)], 404))
                    if (n[t(310)](n[t(306)], n[t(315)])) {
                        await n[t(289)](_e);
                        continue
                    } else _0x40b8ef && _0x1f2c4c[t(302)](_0x1d40e5);
                if (!(o != null && o.ok)) {
                    await _e();
                    continue
                }
                return await o[t(283)]()
            }
        }
    };
    X();
    var pe = class {
        defaultConfig;
        cache = new Map;
        configTarget = new EventTarget;
        storage;
        constructor(t, n) {
            this.defaultConfig = t, this.storage = n
        }
        get(t) {
            if (this.cache.has(t)) return this.cache.get(t);
            let n = this.storage.getValue(t, this.defaultConfig[t]);
            return this.cache.set(t, n), n
        }
        set(t, n) {
            this.cache.set(t, n), this.storage.setValue(t, n), this.configTarget.dispatchEvent(new Event(t))
        }
        delete(t) {
            this.cache.delete(t), this.storage.deleteValue(t), this.configTarget.dispatchEvent(new Event(t))
        }
        reset() {
            for (let t in this.defaultConfig) this.delete(t)
        }
        import(t) {
            for (let n in this.defaultConfig) n in t ? this.set(n, t[n]) : this.delete(n)
        }
        export () {
            let t = {};
            for (let n in this.defaultConfig) t[n] = this.get(n);
            return t
        }
    };

    function Bt(e, t) {
        let [n, o] = je(e.get(t));
        return Ne(() => {
            function r() {
                o(e.get(t))
            }
            return e.configTarget.addEventListener(t, r, {
                once: !0
            }), () => e.configTarget.removeEventListener(t, r)
        }), [n, (...r) => {
            r.length === 0 ? (e.delete(t), o(e.defaultConfig[t])) : (e.set(t, r[0]), o(r[0]))
        }]
    }
    var rr = {
            aimbot: "off",
            hitbox: "head",
            bot: !1,
            wallbangs: !1,
            fovCheck: !0,
            aimKey: -1,
            aimReactionTime: 0,
            fovRadius: 150,
            smoothFactor: 1,
            drawFOV: !1,
            targetOnAimKey: !1,
            bhop: !1,
            slidehop: !1,
            wallJump: !0,
            nametags: !1,
            boxes: !1,
            chams: !1,
            tracers: !1,
            forceAuto: !1,
            recoilControl: !1,
            recoilControlKey: -1,
            recoilSmoothFactor: .4,
            triggerbot: !1,
            triggerbotKey: -1,
            triggerbotMin: 0,
            triggerbotMax: 0,
            menuKeey: 112,
            menuButton: !0,
            silentFail: !1,
            noAdsFovMlt: !1,
            multiPoint: !1,
            multiPointScale: .5,
            skinHack: !1,
            keybindOverlay: !1,
            healthBars: !1,
            adblock: !1,
            thirdPerson: !1,
            skyColor: !1,
            skyColorHex: "#000",
            watermark: !1,
            spinbot: !1,
            triggerbotDistance: .5,
            targetList: [],
            targetListMode: "off"
        },
        _n = new pe(rr, at()),
        M = e => Bt(_n, e),
        p = _n;
    var Un = E(Z(), 1);

    function kn() {
        if (p.get("adblock")) {
            let e = document.createElement("style");
            e.textContent = "#adCon, *[id*='aHider'] { display: none !IMPORTANT; }", document.addEventListener("DOMContentLoaded", () => {
                document.documentElement.append(e)
            });
            let t = ge();
            Object.defineProperty(t, "clearPops", {
                set: n => {
                    throw delete t.clearPops, t.clearPops = n, t.canShowAds = !1, t.useFRVRSDKAds = !1, t.useFRVRSDKBannerAds = !1, delete t.FRVR.config.ads, t.FRVR.init("prod"), new Error("breaking krunker ad loading")
                },
                configurable: !0
            })
        }
    }

    function qn() {
        let [e, t] = M("adblock");
        return React.createElement(React.Fragment, null, React.createElement(Un.Switch, {
            title: "Adblock",
            description: "Blocks ads. Requires restart",
            attention: !0,
            defaultChecked: e,
            onChange: n => {
                t(n.currentTarget.checked), location.reload()
            }
        }))
    }
    var Ce = [],
        At;

    function z() {
        if (!At) throw new Error("Too early");
        return At
    }
    var Ht;

    function I() {
        if (!Ht) throw new Error("Too early");
        return Ht
    }
    var be;

    function L() {
        if (!be) throw new Error("Too early");
        return be
    }
    var N = [],
        Ke = !1;

    function ur() {
        let {
            add: e
        } = I().players;
        I().players.add = function(...n) {
            let o = e.call(this, ...n);
            o.isYou && (be = o);
            let {
                procInputs: r
            } = o;
            return o.procInputs = function(...i) {
                if (Ke) {
                    I().isSandbox && (Ke = !1);
                    return
                }
                return r.call(this, ...i)
            }, o
        };
        let {
            push: t
        } = I().controls.tmpInpts;
        I().controls.tmpInpts.push = function(n) {
            if (be) {
                for (let o of N)
                    if (o(n) === !1) return Ke = !0, 0
            }
            return t.call(this, n)
        }, xt.push(n => {
            if (n === "q" && Ke) return Ke = !1, !1
        })
    }
    var Wn;

    function lt() {
        return Wn
    }
    var jt = [];
    Ce.push(e => {
        if (typeof e.exports != "function" || !e.exports.toString().includes("this.deaths=") || !e.exports.toString().includes("this.stats=")) return;
        let t = e.exports;
        e.exports = class extends t {
            constructor(...n) {
                super(...n), Wn = this;
                for (let o of jt) o(this)
            }
        }
    });
    Ce.push(e => {
        if (typeof e.exports != "function" || !e.exports.toString().includes("this.players=new")) return;
        let t = e.exports;
        e.exports = function(...n) {
            let o = t.call(this, ...n);
            if (typeof n[1] == "number") {
                let i = this.config;
                Object.defineProperty(this, "config", {
                    get() {
                        return i
                    },
                    set(a) {
                        i = a;
                        let c = a.thirdPerson;
                        Object.defineProperty(a, "thirdPerson", {
                            get() {
                                return p.get("thirdPerson") || c
                            },
                            set(u) {
                                c = u
                            }
                        })
                    }
                }), setTimeout(() => {
                    Ht = this, ur()
                })
            }
            return o
        }
    });
    var $ = [],
        fr = [];

    function mr() {
        let {
            render: e
        } = P();
        P().render = function(...t) {
            if (be)
                for (let o of fr) o();
            let n = e.call(this, ...t);
            if (be)
                for (let o of $) o();
            return n
        }
    }
    var Pt;

    function P() {
        if (!Pt) throw new Error("Too early");
        return Pt
    }
    Ce.push(e => {
        typeof e.exports != "object" || e.exports === null || !("medalsList" in e.exports) || (Pt = e.exports, mr())
    });
    var Rt;

    function dr() {
        let e = new WeakMap;
        Object.defineProperty(hr().prototype, "transparent", {
            get() {
                return p.get("wallbangs") ? this.penetrable ? 1 : 0 : e.get(this)
            },
            set(t) {
                e.set(this, t)
            }
        })
    }

    function hr() {
        if (!Rt) throw new Error("Too early");
        return Rt
    }
    Ce.push(e => {
        typeof e.exports != "function" || !e.exports.toString().includes("this.penetrable=") || (Rt = e.exports, dr())
    });
    var gr = [],
        Kt = [],
        Ot;

    function Xt() {
        if (!Ot) throw new Error("Too early");
        return Ot
    }

    function pr() {
        let {
            render: e
        } = z();
        z().render = function(...n) {
            if (be)
                for (let r of Kt) r();
            let o = e.call(this, ...n);
            if (be)
                for (let r of gr) r();
            return o
        };
        let t = z().renderer;
        if (Object.defineProperty(z(), "skyDome", {
                set(n) {
                    delete z().skyDome, z().skyDome = n;
                    let {
                        visible: o
                    } = n;
                    Object.defineProperty(n, "visible", {
                        get: () => p.get("skyColor") ? !1 : o,
                        set: r => o = r
                    })
                },
                configurable: !0
            }), t) {
            let {
                setClearColor: n
            } = t;
            t.setClearColor = o => {
                Ot = o, n.call(t, p.get("skyColor") ? p.get("skyColorHex") : o)
            }
        }
    }
    Ce.push(e => {
        if (typeof e.exports != "function" || !e.exports.toString().includes("this.GEOS=")) return;
        let t = e.exports;
        e.exports = function(...n) {
            let o = t.call(this, ...n);
            return At = this, pr(), o
        }
    });
    var Yt;

    function V() {
        if (!Yt) throw new Error("Too early");
        return Yt
    }
    Ce.push(e => {
        typeof e.exports != "object" || e.exports === null || !("gameVersion" in e.exports) || (Yt = e.exports)
    });
    var xt = [],
        Zt = [],
        Nt;

    function ct() {
        if (!Nt) throw new Error("Too early");
        return Nt
    }

    function yr() {
        let {
            send: e,
            _dispatchEvent: t
        } = ct();
        ct().send = function(n, ...o) {
            for (let r of xt)
                if (r(n, o) === !1) return;
            return e.call(this, n, ...o)
        }, ct()._dispatchEvent = function(n, ...o) {
            for (let r of Zt)
                if (r(n, o) === !1) return;
            return t.call(this, n, ...o)
        }
    }
    Ce.push(e => {
        typeof e.exports != "object" || e.exports === null || !("ahNum" in e.exports) || (Nt = e.exports, yr())
    });

    function Sn(e) {
        for (let t of Ce) t(e)
    }
    K && (console.trace("DEV"), Object.assign(ge(), {
        getGame: I,
        getRender: z,
        getLocalPlayer: L,
        getMenuPlayer: lt,
        getOverlay: P,
        getConfig: V,
        getIO: ct
    }));
    var {
        Math: j,
        document: ut
    } = window;

    function br(e, t, n, o, r, i) {
        let a = e - o,
            c = t - r,
            u = n - i;
        return j.sqrt(a * a + c * c + u * u)
    }

    function In(e, t, n, o, r, i) {
        return j.asin(j.abs(t - r) / br(e, t, n, o, r, i)) * (t > r ? -1 : 1)
    }

    function En(e, t, n, o) {
        return j.atan2(t - o, e - n)
    }

    function Dn(e, t) {
        return j.atan2(j.sin(t - e), j.cos(e - t))
    }

    function ft(e) {
        let t = I();
        return new t.THREE.Vector3(e.x, e.y, e.z)
    }

    function Ie(e, t = 0) {
        let n = z(),
            o = P(),
            r = e.clone();
        return r.y += t, r.project(n.camera), r.x = (r.x + 1) / 2, r.y = (-r.y + 1) / 2, r.x *= innerWidth / o.scale, r.y *= innerHeight / o.scale, new n.THREE.Vector2(r.x, r.y)
    }

    function Xe(e) {
        return !(e.health <= 0 || !e.active)
    }

    function Ee(e) {
        let t = L();
        return e.isPlayer && e.isYou || !e.active ? !1 : !e.team || e.team !== t.team
    }

    function mt(e) {
        let t = L(),
            n = .1,
            o = j.max(n, j.min(e[k.frame], V().dltMx)) / t.deltaDiv;
        return (!o || o < n) && (o = n), o
    }

    function Vt(e) {
        let n = L().reloadTimer;
        return n > 0 && (n -= e, n <= 0 && (n = 0)), n
    }

    function Ft(e) {
        let n = L().swapTime;
        return n > 0 && (n -= e, n < 0 && (n = 0)), n
    }

    function Qt(e) {
        let t = L(),
            n = t.reloads[t.loadoutIndex];
        return n && (n -= e, n < 0 && (n = 0)), n
    }

    function Cr() {
        let e = L(),
            t = I(),
            n = 1;
        return e.weapon && e.weapon.rateChrg && (n = 1 - j.min(1, e.chargeTime / e.weapon.chrgTime), t.mode.forceCharge && (n = 0), n = j.max(.7, 1.5 * n)), n
    }

    function Ln() {
        let e = L(),
            t = I();
        return (e.burstCount && e.weapon.burst ? e.weapon.burstR : e.weapon.rate) * (t.config.fiRat || 1) * e.attributes.fRate * (e.perks.includes(1) ? .66 : 1) * (e.isKranked ? t.mode.bonuses.firerate : 1) * Cr()
    }

    function zn(e) {
        return Qt(e) <= 0 && Ft(e) <= 0 && Vt(e) <= 0
    }

    function ee() {
        var e, t;
        return ((e = ut.getElementById("endUI")) == null ? void 0 : e.style.display) !== "none" || ((t = ut.getElementById("menuHolder")) == null ? void 0 : t.style.display) !== "none"
    }

    function Bn() {
        var e;
        return ((e = ut.getElementById("ingameFPS")) == null ? void 0 : e.textContent) || "0"
    }

    function An() {
        var e;
        return ((e = ut.getElementById("pingText")) == null ? void 0 : e.textContent) || "0"
    }

    function vr(e) {
        if (e < 0 || e > 1) throw new Error("Smooth factor must be between 0.0 and 1.0");
        let t = j.log10(e * 9 + 1) - 1;
        return 1 - j.max((1 + t) * .99, 0)
    }

    function dt(e, t, n) {
        let o = vr(n);
        return e.setX(t.x + Dn(t.x, e.x) * o), e.setY(t.y + Dn(t.y, e.y) * o), e
    }

    function ht() {
        let e = P();
        return {
            width: innerWidth / e.scale,
            height: innerHeight / e.scale
        }
    }

    function wr(e) {
        return e.type === "Mesh"
    }

    function gt(e, t = !0) {
        let n = [];
        for (let o of e.legMeshes) n.push(o);
        for (let o of e.mergedArmMeshes) n.push(o);
        if (t)
            for (let o of e.weaponMeshes)
                for (let r of o.children) n.push(r);
        if (e.headObj && n.push(e.headObj), e.lowerBody)
            for (let o of e.lowerBody.children) o.name === "body" && wr(o) && n.push(o);
        for (let o of e.shoeMeshes)
            for (let r of o.children) n.push(r);
        if (e.bodyMesh)
            for (let o of e.bodyMesh.children) n.push(o);
        if (e.headMesh)
            for (let o of e.headMesh.children) n.push(o);
        if (e.faceMesh)
            for (let o of e.faceMesh.children) n.push(o);
        if (e.backMesh)
            for (let o of e.backMesh.children) n.push(o);
        return n
    }
    var bt = E(Ze(), 1),
        Pn = E(yt(), 1),
        Rn = E(Z(), 1);

    function On() {
        let e = 0;
        N.push(() => {
            if (!p.get("recoilControl")) return;
            let t = I(),
                n = p.get("recoilControlKey");
            if (n !== -1 && t.controls.keys[n] !== 1) return;
            let o = z(),
                r = V(),
                i = L(),
                {
                    THREE: a
                } = o,
                c = new a.Vector2(t.controls.pchObjc.rotation.x + e * r.recoilMlt - i.recoilAnimY * r.recoilMlt, t.controls.object.rotation.y);
            e = i.recoilAnimY, dt(c, new a.Vector2(t.controls.pchObjc.rotation.x, t.controls.object.rotation.y), p.get("recoilSmoothFactor")), t.controls.pchObjc.rotation.x = c.x, t.controls.object.rotation.y = c.y, o.updateFrustum()
        })
    }

    function Yn() {
        let [e, t] = M("recoilControl"), [n, o] = M("recoilControlKey"), [r, i] = M("recoilSmoothFactor");
        return React.createElement(React.Fragment, null, React.createElement(bt.BindHolder, {
            title: "Recoil Control Key"
        }, React.createElement(bt.Bind, {
            bind: n,
            setBind: a => o(a),
            reset: () => o(),
            unbind: () => o(-1)
        })), React.createElement(Rn.Switch, {
            title: "Recoil Control",
            defaultChecked: e,
            onChange: a => t(a.currentTarget.checked)
        }), React.createElement(Pn.Slider, {
            title: "Recoil Smooth Factor",
            description: "Controls the speed of the aimbot's rotation",
            defaultValue: r,
            min: 0,
            max: 1,
            step: .05,
            onChange: a => i(a.currentTarget.valueAsNumber)
        }))
    }

    function Nn({
        Box3: e,
        MathUtils: t,
        Matrix4: n,
        Matrix3: o,
        Ray: r,
        Vector3: i
    }) {
        let a = {
                c: null,
                u: [new i, new i, new i],
                e: []
            },
            c = {
                c: null,
                u: [new i, new i, new i],
                e: []
            },
            u = [
                [],
                [],
                []
            ],
            l = [
                [],
                [],
                []
            ],
            f = [],
            y = new i,
            g = new i,
            w = new i,
            m = new i,
            h = new i,
            b = new i,
            _ = new o,
            s = new e,
            d = new n,
            T = new n,
            G = new r;
        class C {
            constructor(x = new i, U = new i, J = new o) {
                this.center = x, this.halfSize = U, this.rotation = J
            }
            set(x, U, J) {
                return this.center = x, this.halfSize = U, this.rotation = J, this
            }
            copy(x) {
                return this.center.copy(x.center), this.halfSize.copy(x.halfSize), this.rotation.copy(x.rotation), this
            }
            clone() {
                return new this.constructor().copy(this)
            }
            getSize(x) {
                return x.copy(this.halfSize).multiplyScalar(2)
            }
            clampPoint(x, U) {
                let J = this.halfSize;
                m.subVectors(x, this.center), this.rotation.extractBasis(y, g, w), U.copy(this.center);
                let D = t.clamp(m.dot(y), -J.x, J.x);
                U.add(y.multiplyScalar(D));
                let W = t.clamp(m.dot(g), -J.y, J.y);
                U.add(g.multiplyScalar(W));
                let A = t.clamp(m.dot(w), -J.z, J.z);
                return U.add(w.multiplyScalar(A)), U
            }
            containsPoint(x) {
                return m.subVectors(x, this.center), this.rotation.extractBasis(y, g, w), Math.abs(m.dot(y)) <= this.halfSize.x && Math.abs(m.dot(g)) <= this.halfSize.y && Math.abs(m.dot(w)) <= this.halfSize.z
            }
            intersectsBox3(x) {
                return this.intersectsOBB(v.fromBox3(x))
            }
            intersectsSphere(x) {
                return this.clampPoint(x.center, b), b.distanceToSquared(x.center) <= x.radius * x.radius
            }
            intersectsOBB(x, U = Number.EPSILON) {
                a.c = this.center, a.e[0] = this.halfSize.x, a.e[1] = this.halfSize.y, a.e[2] = this.halfSize.z, this.rotation.extractBasis(a.u[0], a.u[1], a.u[2]), c.c = x.center, c.e[0] = x.halfSize.x, c.e[1] = x.halfSize.y, c.e[2] = x.halfSize.z, x.rotation.extractBasis(c.u[0], c.u[1], c.u[2]);
                for (let W = 0; W < 3; W++)
                    for (let A = 0; A < 3; A++) u[W][A] = a.u[W].dot(c.u[A]);
                m.subVectors(c.c, a.c), f[0] = m.dot(a.u[0]), f[1] = m.dot(a.u[1]), f[2] = m.dot(a.u[2]);
                for (let W = 0; W < 3; W++)
                    for (let A = 0; A < 3; A++) l[W][A] = Math.abs(u[W][A]) + U;
                let J, D;
                for (let W = 0; W < 3; W++)
                    if (J = a.e[W], D = c.e[0] * l[W][0] + c.e[1] * l[W][1] + c.e[2] * l[W][2], Math.abs(f[W]) > J + D) return !1;
                for (let W = 0; W < 3; W++)
                    if (J = a.e[0] * l[0][W] + a.e[1] * l[1][W] + a.e[2] * l[2][W], D = c.e[W], Math.abs(f[0] * u[0][W] + f[1] * u[1][W] + f[2] * u[2][W]) > J + D) return !1;
                return J = a.e[1] * l[2][0] + a.e[2] * l[1][0], D = c.e[1] * l[0][2] + c.e[2] * l[0][1], !(Math.abs(f[2] * u[1][0] - f[1] * u[2][0]) > J + D || (J = a.e[1] * l[2][1] + a.e[2] * l[1][1], D = c.e[0] * l[0][2] + c.e[2] * l[0][0], Math.abs(f[2] * u[1][1] - f[1] * u[2][1]) > J + D) || (J = a.e[1] * l[2][2] + a.e[2] * l[1][2], D = c.e[0] * l[0][1] + c.e[1] * l[0][0], Math.abs(f[2] * u[1][2] - f[1] * u[2][2]) > J + D) || (J = a.e[0] * l[2][0] + a.e[2] * l[0][0], D = c.e[1] * l[1][2] + c.e[2] * l[1][1], Math.abs(f[0] * u[2][0] - f[2] * u[0][0]) > J + D) || (J = a.e[0] * l[2][1] + a.e[2] * l[0][1], D = c.e[0] * l[1][2] + c.e[2] * l[1][0], Math.abs(f[0] * u[2][1] - f[2] * u[0][1]) > J + D) || (J = a.e[0] * l[2][2] + a.e[2] * l[0][2], D = c.e[0] * l[1][1] + c.e[1] * l[1][0], Math.abs(f[0] * u[2][2] - f[2] * u[0][2]) > J + D) || (J = a.e[0] * l[1][0] + a.e[1] * l[0][0], D = c.e[1] * l[2][2] + c.e[2] * l[2][1], Math.abs(f[1] * u[0][0] - f[0] * u[1][0]) > J + D) || (J = a.e[0] * l[1][1] + a.e[1] * l[0][1], D = c.e[0] * l[2][2] + c.e[2] * l[2][0], Math.abs(f[1] * u[0][1] - f[0] * u[1][1]) > J + D) || (J = a.e[0] * l[1][2] + a.e[1] * l[0][2], D = c.e[0] * l[2][1] + c.e[1] * l[2][0], Math.abs(f[1] * u[0][2] - f[0] * u[1][2]) > J + D))
            }
            intersectsPlane(x) {
                this.rotation.extractBasis(y, g, w);
                let U = this.halfSize.x * Math.abs(x.normal.dot(y)) + this.halfSize.y * Math.abs(x.normal.dot(g)) + this.halfSize.z * Math.abs(x.normal.dot(w)),
                    J = x.normal.dot(this.center) - x.constant;
                return Math.abs(J) <= U
            }
            intersectRay(x, U) {
                return this.getSize(h), s.setFromCenterAndSize(m.set(0, 0, 0), h), d.setFromMatrix3(this.rotation), d.setPosition(this.center), T.copy(d).invert(), G.copy(x).applyMatrix4(T), G.intersectBox(s, U) ? U.applyMatrix4(d) : null
            }
            intersectsRay(x) {
                return this.intersectRay(x, m) !== null
            }
            fromBox3(x) {
                return x.getCenter(this.center), x.getSize(this.halfSize).multiplyScalar(.5), this.rotation.identity(), this
            }
            equals(x) {
                return x.center.equals(this.center) && x.halfSize.equals(this.halfSize) && x.rotation.equals(this.rotation)
            }
            applyMatrix4(x) {
                let U = x.elements,
                    J = m.set(U[0], U[1], U[2]).length(),
                    D = m.set(U[4], U[5], U[6]).length(),
                    W = m.set(U[8], U[9], U[10]).length();
                x.determinant() < 0 && (J = -J), _.setFromMatrix4(x);
                let ke = 1 / J,
                    qe = 1 / D,
                    We = 1 / W;
                return _.elements[0] *= ke, _.elements[1] *= ke, _.elements[2] *= ke, _.elements[3] *= qe, _.elements[4] *= qe, _.elements[5] *= qe, _.elements[6] *= We, _.elements[7] *= We, _.elements[8] *= We, this.rotation.multiply(_), this.halfSize.x *= J, this.halfSize.y *= D, this.halfSize.z *= W, m.setFromMatrixPosition(x), this.center.add(m), this
            }
        }
        let v = new C;
        return new C
    }
    var vt = E(Ze(), 1),
        Ct = E(yt(), 1),
        jn = E(Z(), 1),
        en = !1;

    function Kn() {
        return en
    }

    function Xn() {
        let e = 0,
            t = 0,
            n = !1,
            o, r;
        N.push(i => {
            en = !1;
            let a = p.get("aimbot") === "smooth" && p.get("bot");
            if (!a && !p.get("triggerbot")) return;
            let c = I(),
                u = p.get("triggerbotKey");
            if ((a || u === -1 || c.controls.keys[u] === 1) && (i[k.scope] || L().weapon.noAim))
                if (Date.now() < t) i[k.shoot] = 1;
                else {
                    let l = z(),
                        f = new c.THREE.Vector3,
                        y = new c.THREE.Vector3;
                    l.camera.getWorldDirection(f), l.camera.getWorldPosition(y), o || (o = new c.THREE.Raycaster), o.set(y, f);
                    let g = !1,
                        w = p.get("triggerbotDistance");
                    for (let m of c.players.list)
                        if (Ee(m) && m.objInstances && m.canBSeen) {
                            let h = new c.THREE.Box3;
                            for (let _ of gt(m, !1)) _.visible && h.expandByObject(_);
                            if (h.expandByScalar(w), r || (r = Nn(c.THREE)), r.rotation.setFromMatrix4(m.objInstances.matrixWorld), r.halfSize.subVectors(h.max, h.min).multiplyScalar(.5), r.center.addVectors(h.min, r.halfSize), r.intersectsRay(o.ray)) {
                                g = !0;
                                break
                            }
                        } g ? (e || (e = Date.now() + (a ? 0 : p.get("triggerbotMin")) * 1e3), e < Date.now() && (i[k.shoot] = 1, i[k.scope] = 1, en = !0), n = !0) : n && (e = 0, t = Date.now() + (a ? 0 : p.get("triggerbotMax")) * 1e3, n = !1)
                }
            else e = 0, t = 0, n = !1
        })
    }

    function Zn() {
        let [e, t] = M("triggerbot"), [n, o] = M("triggerbotKey"), [r, i] = M("triggerbotMin"), [a, c] = M("triggerbotMax"), [u, l] = M("triggerbotDistance");
        return React.createElement(React.Fragment, null, React.createElement(vt.BindHolder, {
            title: "Triggerbot Key"
        }, React.createElement(vt.Bind, {
            bind: n,
            setBind: f => o(f),
            reset: () => o(),
            unbind: () => o(-1)
        })), React.createElement(jn.Switch, {
            title: "Triggerbot",
            description: "Shoots enemys that come into your line of sight while you're holding right click",
            defaultChecked: e,
            onChange: f => t(f.currentTarget.checked)
        }), React.createElement(Ct.Slider, {
            title: "Triggerbot Distance",
            description: "Distance from the enemy that triggerbot will target. 1 = shoots when any part of enemy is in crosshair, 10 = shoots even when the enemy is near the crosshair",
            defaultValue: u,
            onChange: f => l(f.currentTarget.valueAsNumber),
            min: 0,
            max: 10,
            step: .5
        }), React.createElement(Ct.Slider, {
            title: "Triggerbot Minimum (Seconds)",
            defaultValue: r,
            onChange: f => i(f.currentTarget.valueAsNumber),
            min: 0,
            max: 1,
            step: .05
        }), React.createElement(Ct.Slider, {
            title: "Triggerbot Maximum (Seconds)",
            defaultValue: a,
            onChange: f => c(f.currentTarget.valueAsNumber),
            min: 0,
            max: 1,
            step: .05
        }))
    }
    var Tt = E(Ze(), 1),
        to = E(fe(), 1),
        wt = E(Fn(), 1),
        ve = E(tn(), 1),
        Ve = E(yt(), 1),
        we = E(Z(), 1);
    X();
    var {
        Math: Fe
    } = window;

    function Nr(e, t, n) {
        return e.distanceTo(t) <= n
    }

    function jr(e, t, n) {
        e.beginPath(), e.arc(t.x, t.y, n, 0, Fe.PI2), e.strokeStyle = "red", e.lineWidth = 2, e.stroke()
    }

    function Qn(e) {
        let t = p.get("hitbox"),
            n = V(),
            o = L(),
            r = I();
        if (p.get("multiPoint")) {
            let i = p.get("multiPointScale"),
                a = {
                    x: e.x,
                    y: e.y,
                    z: e.z,
                    w: e.height * .5,
                    h: e.height - e.crouchVal * n.crouchDst - .2
                };
            for (let c = t === "chest" ? 2 : 3; c > 0; c--)
                for (let u = 0; u < 3; u++)
                    for (let l = 0; l < 3; l++) {
                        let f = new r.THREE.Vector3(e.x + a.w * (u ? (u % 2 === 0 ? -1 : 1) * .5 : 0) * i, e.y + a.h * (c / 3), e.z + a.w * (l ? (l % 2 === 0 ? -1 : 1) * .5 : 0) * i);
                        if (r.canSee(o, f.x, f.y, f.z) === null) return f
                    }
        } else {
            let {
                THREE: i
            } = I(), a = t === "head" ? n.headScale / 2 : n.playerHeight - n.headScale - n.legHeight;
            return new i.Vector3(e.x, e.y + e.height - a - e.crouchVal * n.crouchDst, e.z)
        }
    }

    function Kr(e, t) {
        let n = p.get("aimbot"),
            o = p.get("smoothFactor"),
            r = I(),
            i = z(),
            a = L(),
            c = V(),
            {
                THREE: u
            } = i;
        return e.setX((In(r.controls.object.position.x, r.controls.object.position.y, r.controls.object.position.z, t.x, t.y, t.z) || 0) - a.recoilAnimY * c.recoilMlt), e.setY(En(r.controls.object.position.z, r.controls.object.position.x, t.z, t.x) || 0), n === "smooth" && dt(e, new u.Vector2(r.controls.pchObjc.rotation.x, r.controls.object.rotation.y), o), e
    }

    function $n(e) {
        return !(!Xe(e) || e.isPlayer && e.isYou || !Ee(e) || !e.canBSeen)
    }

    function Xr(e) {
        let t = p.get("targetListMode");
        if (t === "off") return !0;
        let n = p.get("targetList");
        return t === "blacklist" ? n.every(o => o[1] !== e.id) : n.some(o => o[1] === e.id)
    }

    function eo(e, t) {
        let n = z();
        if (p.get("fovCheck")) {
            if (!n.frustum.containPoint(e)) return !1;
            let r = p.get("fovRadius");
            if (!Nr(Ie(e), t, r)) return !1
        }
        return !0
    }

    function no() {
        let e = 0;
        $.push(() => {
            // 移除条件检查
            console.log("Watermark is being drawn"); // 调试输出
            let e = `By-weixian - FPS: ${Bn()} | Ping: ${An()} | Time: ${$r(new Date)}`;
            let t = P();
            t.ctx.save();
            t.ctx.scale(t.scale, t.scale);
            let n = t.canvas.width / t.scale;
            t.ctx.font = "16px 'gamefont'";
            let o = t.ctx.measureText(e),
                r = o.fontBoundingBoxAscent - o.fontBoundingBoxDescent,
                i = 24,
                a = o.width + i,
                c = 50,
                u = n / 2 - a / 2,
                l = 10;
            t.ctx.fillStyle = "#ff0000";
            t.ctx.fillRect(u, l, a, c);
            t.ctx.translate(u + i / 2, l + i / 2);
            let f = a - i,
                y = c - i;
            t.ctx.textAlign = "center";
            t.ctx.textBaseline = "middle";
            t.ctx.fillStyle = "#fff";
            t.ctx.fillText(e, f / 2, y / 2 + r / 2);
            t.ctx.restore();
        });
        N.push(c => {
            if (!p.get("bot")) return;
            let l = L();
            l.ammos[l.loadoutIndex] ? e = 0 : (e === 0 || c[k.frame] < e) && (c[k.reload] = 1, e === 0 && (e = c[k.frame] + ue(3, 8)))
        });
        let t, n = !1,
            o = 0,
            r = !1,
            i = !1;
        N.push(c => {
            let u = p.get("aimbot"),
                l = p.get("aimReactionTime") * 1e3,
                f = p.get("aimKey"),
                y = I(),
                {
                    THREE: g
                } = y;
            if (i = r, r = !1, u === "off" || f !== -1 && y.controls.keys[f] !== 1) {
                t = void 0, n = !1;
                return
            }
            let w = L(),
                m = p.get("bot");
            if (m) {
                if (w.weapon.noAim === !1 && (c[k.scope] = 1, w.aimVal)) return
            } else {
                switch (u) {
                    case "silent":
                        if (!m && !c[k.shoot]) return;
                        break;
                    case "smooth":
                        if (!c[k.scope]) return;
                        break
                }
                if (l && (i || (o = Date.now()), r = !0, i = !0, Date.now() - o < l)) return
            }
            if (u === "silent") {
                let d = mt(c);
                if (Qt(d) > 0 || Ft(d) > 0 || Vt(d) > 0) return
            }
            t && (!$n(t) || !y.players.list.includes(t)) && (t = void 0);
            let h, b = P(),
                _ = new g.Vector2(innerWidth / b.scale / 2, innerHeight / b.scale / 2);
            t && (h = Qn(t), (!h || !eo(h, _)) && (h = void 0, t = void 0));
            let s = !p.get("targetOnAimKey") || f === -1 || !n;
            if (n = !0, !t && s) {
                let d = z(),
                    T = p.get("fovCheck"),
                    G = y.players.list.filter($n).filter(Xr).map(C => ({
                        player: C,
                        point: Qn(C)
                    })).filter(({
                        point: C
                    }) => C && eo(C, _)).map(({
                        player: C,
                        point: v
                    }) => ({
                        player: C,
                        screen: Ie(v),
                        point: v,
                        inFrustum: T ? !1 : d.frustum.containsPoint(v)
                    })).sort((C, v) => {
                        let S = C.screen.distanceTo(_) - v.screen.distanceTo(_);
                        if (!T) {
                            let x = C.inFrustum ? 0 : 1,
                                U = v.inFrustum ? 0 : 1;
                            return S + x - U
                        }
                        return S
                    })[0];
                G && (t = G.player, h = G.point)
            }
            if (h) {
                m && u === "silent" && (c[k.shoot] = 1);
                let d = new g.Vector2(c[k.xDir] / 1e3, c[k.yDir] / 1e3);
                Kr(d, h);
                let T = z();
                u === "silent" ? (m && (c[k.moveDir] = -1), c[k.xDir] = d.x * 1e3, c[k.yDir] = d.y * 1e3) : (y.controls.pchObjc.rotation.x = d.x, y.controls.object.rotation.y = d.y, T.updateFrustum())
            }
        });
        let a = 0;
        N.push(c => {
            p.get("spinbot") && (c[k.shoot] || (c[k.moveDir] !== -1 ? c[k.moveDir] = (c[k.moveDir] + a - Fe.round(7 * (c[k.yDir] / 1e3 / (Fe.PI * 2)))) % 7 : c[k.crouch] = 1, c[k.xDir] = -Fe.PI / 2 * 1e3, c[k.yDir] = a / 7 * (Fe.PI * 2) * 1e3, c[k.frame] % 1 === 0 && (a = (a + 1) % 7)))
        })
    }

    function oo() {
        let [e, t] = M("aimbot"), [n, o] = M("bot"), [r, i] = M("fovCheck"), [a, c] = M("wallbangs"), [u, l] = M("hitbox"), [f, y] = M("aimKey"), [g, w] = M("aimReactionTime"), [m, h] = M("smoothFactor"), [b, _] = M("fovRadius"), [s, d] = M("drawFOV"), [T, G] = M("multiPoint"), [C, v] = M("multiPointScale"), [S, x] = M("targetOnAimKey"), [U, J] = M("spinbot"), [D, W] = M("targetListMode"), [A, ke] = M("targetList"), [qe, We] = je([]), It = zt(null);
        return Ne(() => {
            let q = () => {
                try {
                    let Et = I();
                    We(Et.players.list.filter(Oe => !Oe.isYou && A.every(Vo => Vo[1] !== Oe.id)).map(Oe => [Oe.name, Oe.id]))
                } catch (Et) {
                    console.error(Et)
                }
            };
            q();
            let he = setInterval(q, 1e3);
            return () => clearInterval(he)
        }, [A, We]), React.createElement(React.Fragment, null, React.createElement(ve.Set, {
            title: "Aimbot"
        }, React.createElement(Tt.BindHolder, {
            title: "Aim Key"
        }, React.createElement(Tt.Bind, {
            bind: f,
            setBind: q => y(q),
            reset: () => y(),
            unbind: () => y(-1)
        })), React.createElement(wt.Select, {
            title: "Aimbot",
            defaultValue: e,
            onChange: q => t(q.currentTarget.value)
        }, React.createElement("option", {
            value: "off"
        }, "Off"), React.createElement("option", {
            value: "smooth"
        }, "Assist"), React.createElement("option", {
            value: "silent"
        }, "Silent")), React.createElement(Ve.Slider, {
            title: "Aim reaction time",
            description: "Time before aiming at target after aiming/pressing aim key",
            defaultValue: g,
            min: 0,
            max: 1,
            step: .05,
            onChange: q => w(q.currentTarget.valueAsNumber)
        }), React.createElement(we.Switch, {
            title: "Spinbot",
            defaultChecked: U,
            onChange: q => J(q.currentTarget.checked)
        }), React.createElement(we.Switch, {
            title: "Target on Aim Key",
            description: "Picks a target as soon as the aim key is pressed, and won't lock onto a new target until it's pressed again.",
            defaultChecked: S,
            onChange: q => x(q.currentTarget.checked)
        }), React.createElement(Ve.Slider, {
            title: "Smooth Factor",
            description: "Controls the speed of the aimbot's rotation",
            defaultValue: m,
            min: 0,
            max: 1,
            step: .05,
            onChange: q => h(q.currentTarget.valueAsNumber)
        }), React.createElement(wt.Select, {
            title: "Hitbox",
            description: "Automatically aim and fire at players",
            defaultValue: u,
            onChange: q => l(q.currentTarget.value)
        }, React.createElement("option", {
            value: "head"
        }, "Head"), React.createElement("option", {
            value: "chest"
        }, "Chest"))), React.createElement(ve.Set, {
            title: "Aimbot Target"
        }, React.createElement(wt.Select, {
            title: "Target List Mode",
            defaultValue: D,
            onChange: q => W(q.currentTarget.value)
        }, React.createElement("option", {
            value: "off"
        }, "Off"), React.createElement("option", {
            value: "whitelist"
        }, "Whitelist"), React.createElement("option", {
            value: "blacklist"
        }, "Blacklist")), React.createElement(to.Control, {
            title: "Add player"
        }, React.createElement("div", {
            className: "settingsBtn",
            onClick: () => {
                let q = qe.find(he => he[1] === It.current.value);
                q && (ke([...A, q]), It.current.value = "")
            }
        }, "Add"), React.createElement("select", {
            className: "inputGrey2",
            ref: It
        }, React.createElement("option", {
            value: ""
        }, "Pick a player"), qe.map(([q, he]) => React.createElement("option", {
            value: he,
            key: he
        }, q)))), React.createElement("div", {
            className: "settName"
        }, React.createElement("table", {
            className: "pListTable",
            style: {
                marginTop: "8px",
                overflowY: "scroll",
                height: "calc(100% - 75px)"
            }
        }, React.createElement("tbody", null, A.map(q => React.createElement("tr", {
            key: q[1]
        }, React.createElement("td", {
            className: "pListName"
        }, q[0]), React.createElement("td", {
            className: "pListActions"
        }, React.createElement("span", {
            onMouseEnter: () => playTick(),
            className: "punishButton kick",
            onClick: () => {
                ke(A.filter(he => he[1] !== q[1]))
            }
        }, "Remove")))))))), React.createElement(ve.Set, {
            title: "FOV"
        }, React.createElement(we.Switch, {
            title: "FOV check",
            description: "Checks if enemies are in your field of view",
            defaultChecked: r,
            onChange: q => i(q.currentTarget.checked)
        }), React.createElement(Ve.Slider, {
            title: "FOV Radius",
            description: "Controls the aimbot FOV",
            defaultValue: b,
            min: 10,
            max: 500,
            step: 5,
            onChange: q => _(q.currentTarget.valueAsNumber)
        }), React.createElement(we.Switch, {
            title: "Show FOV",
            description: "Visualizes your FOV",
            defaultChecked: s,
            onChange: q => d(q.currentTarget.checked)
        })), React.createElement(ve.Set, {
            title: "Multipoint"
        }, React.createElement(we.Switch, {
            title: "Multipoint",
            defaultChecked: T,
            onChange: q => G(q.currentTarget.checked),
            attention: !0,
            description: "Improves aimbot accuracy. Has a small performance cost"
        }), React.createElement(Ve.Slider, {
            title: "Multipoint Scale",
            description: "Lower is closer to the center, higher is closer to the edges",
            min: 0,
            max: 1,
            step: .1,
            defaultValue: C,
            onChange: q => v(q.currentTarget.valueAsNumber)
        })), React.createElement(ve.Set, {
            title: "Rage"
        }, React.createElement(we.Switch, {
            title: "Turret",
            description: "Automatically aim and fire at players",
            defaultChecked: n,
            onChange: q => o(q.currentTarget.checked)
        }), React.createElement(we.Switch, {
            title: "Wallbangs",
            defaultChecked: a,
            onChange: q => c(q.currentTarget.checked)
        })), React.createElement(ve.Set, {
            title: "Triggerbot"
        }, React.createElement(Zn, null)), React.createElement(ve.Set, {
            title: "Recoil Control"
        }, React.createElement(Yn, null)))
    }
    var Jt = E(Z(), 1);

    function nn() {
        return ue(-.015, .005, !0)
    }

    function Zr() {
        var t;
        let e = L();
        return p.get("wallJump") && ((t = I().classConfig[L().classIndex]) == null ? void 0 : t.wallJ) && e.wallJump && e.onWall || e.onGround
    }

    function ro() {
        let e = nn(),
            t = nn(),
            n = !1,
            o = 0,
            r = 0,
            i = 130;
        N.push(a => {
            let c = L();
            if (p.get("bhop") && a[k.jump]) {
                let u = Date.now();
                if (o <= u && (o = 0, r = 0), !o && Zr()) o = u + i + ue(0, 20), r = a[k.frame] + ue(1, 3), a[k.jump] = 0;
                else {
                    let l = a[k.frame] >= r && u < o;
                    a[k.jump] = l ? 1 : 0
                }
            } else o = 0, r = 0;
            if (p.get("slidehop") && a[k.crouch]) {
                n || (e = t);
                let u = !c.onGround && (c.velocity.y || 0) < e;
                a[k.crouch] = u ? 1 : 0, !n && u && (t = nn()), n = u
            } else n = !1
        })
    }

    function ao() {
        let [e, t] = M("bhop"), [n, o] = M("slidehop"), [r, i] = M("wallJump");
        return React.createElement(React.Fragment, null, React.createElement(Jt.Switch, {
            title: "Bhop",
            description: "Hold space to bhop",
            defaultChecked: e,
            onChange: a => t(a.currentTarget.checked)
        }), React.createElement(Jt.Switch, {
            title: "Slidehop",
            description: "Hold crouch to slidehop",
            defaultChecked: n,
            onChange: a => o(a.currentTarget.checked)
        }), React.createElement(Jt.Switch, {
            title: "Wall Jump",
            description: "If bhop should also automatically jump on walls. Bhop must be enabled.",
            defaultChecked: r,
            onChange: a => i(a.currentTarget.checked)
        }))
    }
    var Ae = E(Z(), 1),
        Mt = class {
            xMin;
            xMax;
            yMin;
            yMax;
            constructor(t, n, o, r) {
                this.xMin = t, this.xMax = n, this.yMin = o, this.yMax = r
            }
            get left() {
                return this.xMin
            }
            get top() {
                return this.yMax
            }
            get right() {
                return this.xMax
            }
            get bottom() {
                return this.yMin
            }
            get width() {
                return this.xMax - this.xMin
            }
            get height() {
                return this.yMin - this.yMax
            }
            get x() {
                return this.left + this.width / 2
            }
            get y() {
                return this.top + this.height / 2
            }
        };

    function Be(e) {
        let t = I();
        return Xe(e) && (e.isPlayer ? !e.isYou && t.players.list.includes(e) : t.AI.ais.includes(e)) && (!ge().spectating || t.controls.spect.target !== e)
    }

    function Vr(e) {
        let t = V(),
            n = z();
        if (e.isPlayer) {
            let o = (2 * t.armScale + t.chestWidth + t.armInset) / 2,
                r = 1 / 0,
                i = -1 / 0,
                a = 1 / 0,
                c = -1 / 0;
            if (!e.objInstances) return;
            for (let l = -1; l < 2; l += 2)
                for (let f = -1; f < 2; f += 2)
                    for (let y = 0; y < 2; y++) {
                        let g = e.objInstances.position.clone();
                        if (g.x += l * o, g.z += f * o, g.y += y * (e.height - e.crouchVal * t.crouchDst), !n.frustum.containPoint(g)) return;
                        g.project(n.camera), r = Math.min(r, g.x), i = Math.max(i, g.x), a = Math.min(a, g.y), c = Math.max(c, g.y)
                    }
            r = (r + 1) / 2, i = (i + 1) / 2, a = (a + 1) / 2, c = (c + 1) / 2, a = -(a - .5) + .5, c = -(c - .5) + .5;
            let u = ht();
            return r *= u.width, i *= u.width, a *= u.height, c *= u.height, new Mt(r, i, a, c)
        } else {
            if (!z().frustum.containPoint(ft(e))) return;
            let o = Ie(ft(e)),
                r = Ie(ft(e), e.height),
                a = ~~(~~(o.y - r.y) * .6);
            return new Mt(o.x - a / 2, o.x + a / 2, r.y, o.y)
        }
    }

    function on(e, t) {
        return Ee(e) ? e.canBSeen ? t.enemy : t.enemyWall : e.canBSeen ? t.team : t.teamWall
    }

    function Fr() {
        let e = I(),
            t = () => new e.THREE.MeshBasicMaterial({
                transparent: !0,
                fog: !1,
                depthTest: !1
            }),
            n = {
                enemy: t(),
                enemyWall: t(),
                team: t(),
                teamWall: t()
            },
            o = () => new e.THREE.LineBasicMaterial({
                transparent: !0,
                fog: !1,
                depthTest: !1
            }),
            r = {
                enemy: o(),
                enemyWall: o(),
                team: o(),
                teamWall: o()
            },
            i = () => new e.THREE.Color,
            a = {
                enemy: i(),
                enemyWall: i(),
                team: i(),
                teamWall: i()
            },
            c = {
                mesh: n,
                line: r,
                colors: a,
                updated: !1,
                update: () => {
                    c.updated = !0;
                    let u = P(),
                        l = parseInt(u.healthColE.slice(1), 16),
                        f = parseInt(u.healthColT.slice(1), 16);
                    a.enemy.set(l), a.team.set(f), a.enemyWall.set(a.enemy), a.teamWall.set(a.team), a.enemyWall.addScalar(-.3), a.teamWall.addScalar(-.3), r.enemy.color.set(a.enemy), r.enemyWall.color.set(a.enemyWall), r.team.color.set(a.team), r.teamWall.color.set(a.teamWall), n.enemy.color.set(a.enemy), n.enemyWall.color.set(a.enemyWall), n.team.color.set(a.team), n.teamWall.color.set(a.teamWall)
                }
            };
        return c
    }

    function io() {
        let e, t = new WeakSet,
            n = new WeakSet,
            o = () => (e || (e = Fr()), e),
            r = a => {
                let c = I(),
                    u = z(),
                    l = o(),
                    f = new c.THREE.BufferGeometry,
                    y = new Float32Array(a * 3),
                    g = new c.THREE.BufferAttribute(y, 3);
                f.setAttribute("position", g), f.setDrawRange(0, a);
                let w = new c.THREE.Line(f, l.line.enemy);
                return u.scene.add(w), w.frustumCulled = !1, {
                    line: w,
                    buffer: g
                }
            },
            i = new Map;
        Kt.push(() => {
            let a = I(),
                c = z(),
                u = o();
            u.updated || u.update();
            let l = ee(),
                f = p.get("tracers");
            for (let [y, g] of i)(!f || l || !Be(y)) && (c.scene.remove(g.line), i.delete(y));
            if (f && !l) {
                let y = new c.THREE.Vector3,
                    g = a.controls.object.position;
                c.camera.getWorldDirection(y);
                let w = g.clone().add(y);
                for (let m of a.players.list)
                    if (Be(m) && m.objInstances) {
                        if (!Xe(m)) continue;
                        i.has(m) || i.set(m, r(3));
                        let {
                            line: h,
                            buffer: b
                        } = i.get(m), _ = m.objInstances.position;
                        h.material = on(m, u.line), b.setXYZ(0, w.x, w.y, w.z), b.setXYZ(1, _.x, _.y, _.z), b.setXYZ(2, _.x, _.y + m.height - V().headScale / 2 - m.crouchVal * V().crouchDst, _.z), b.needsUpdate = !0
                    }
            }
        }), $.push(() => {
            let a = P(),
                c = I(),
                u = o();
            if (u.update(), p.get("chams")) {
                for (let y of c.players.list)
                    if (y.objInstances && Be(y)) {
                        if (!n.has(y.objInstances)) {
                            n.add(y.objInstances);
                            let {
                                visible: g
                            } = y.objInstances;
                            Object.defineProperty(y.objInstances, "visible", {
                                get: () => p.get("chams") && !ee() && Be(y) ? !0 : g,
                                set: w => {
                                    g = w
                                }
                            })
                        }
                        for (let g of gt(y)) {
                            if (t.has(g)) continue;
                            t.add(g);
                            let {
                                material: w
                            } = g;
                            Object.defineProperty(g, "material", {
                                get: () => p.get("chams") && !ee() && Be(y) ? on(y, u.mesh) : w,
                                set: m => {
                                    w = m
                                }
                            })
                        }
                    }
            }
            let l = p.get("boxes"),
                f = p.get("healthBars");
            if ((l || f) && !ee()) {
                a.ctx.save(), a.ctx.scale(a.scale, a.scale);
                for (let y of [...c.players.list, ...c.AI.ais]) {
                    if (!Be(y)) continue;
                    let g = Vr(y);
                    if (g && (l && (a.ctx.strokeStyle = "#" + on(y, u.colors).getHexString(), a.ctx.lineWidth = 1.5, a.ctx.strokeRect(g.left, g.top, g.width, g.height)), f)) {
                        let w = g.width * .05,
                            m = g.width * .1;
                        a.ctx.fillStyle = "#F00", a.ctx.fillRect(g.right + w, g.top, m, g.height), a.ctx.fillStyle = "#0F0";
                        let h = g.height * (y.health / y.maxHealth);
                        a.ctx.fillRect(g.right + w, g.top + (g.height - h), m, h)
                    }
                }
                a.ctx.restore()
            }
        })
    }

    function so() {
        let [e, t] = M("nametags"), [n, o] = M("boxes"), [r, i] = M("chams"), [a, c] = M("tracers"), [u, l] = M("healthBars");
        return React.createElement(React.Fragment, null, React.createElement(Ae.Switch, {
            title: "Nametags",
            description: "Shows player nametags through walls",
            defaultChecked: e,
            onChange: f => t(f.currentTarget.checked)
        }), React.createElement(Ae.Switch, {
            title: "Chams",
            description: "Makes players a bright color and visible through walls",
            defaultChecked: r,
            onChange: f => i(f.currentTarget.checked)
        }), React.createElement(Ae.Switch, {
            title: "Boxes",
            description: "Displays a box around players",
            defaultChecked: n,
            onChange: f => o(f.currentTarget.checked)
        }), React.createElement(Ae.Switch, {
            title: "Tracers",
            description: "Draws a line between your camera and other players",
            defaultChecked: a,
            onChange: f => c(f.currentTarget.checked)
        }), React.createElement(Ae.Switch, {
            title: "Health Bars",
            description: "Shows a health bar next to a player",
            defaultChecked: u,
            onChange: f => l(f.currentTarget.checked)
        }))
    }
    var co = E(Z(), 1);

    function lo() {
        let e = 0,
            t = 0;
        N.push(n => {
            if (!p.get("forceAuto") && !Kn()) return;
            let o = L();
            if (n[k.shoot] && o.weapon.nAuto) {
                let r = Date.now();
                if (e <= r && (e = 0, t = 0), !e && zn(mt(n))) e = r + Ln() * ue(.8, .9, !0), t = n[k.frame] + ue(1, 3), n[k.shoot] = 0;
                else {
                    let i = n[k.frame] >= t && r < e;
                    n[k.shoot] = i ? 1 : 0
                }
            } else e = 0, t = 0
        })
    }

    function xo() {
        let [e, t] = M("forceAuto");
        return React.createElement(co.Switch, {
            title: "Force Auto",
            description: "Makes non-automatic guns automatic",
            defaultChecked: e,
            onChange: n => t(n.currentTarget.checked)
        })
    }
    var uo = E(Z(), 1),
        fo = E(pt(), 1);

    function mo() {
        $.push(() => {
            if (p.get("keybindOverlay") && !ee()) {
                let e = [{
                        name: "Menu",
                        key: p.get("menuKey")
                    }, {
                        name: "Aim",
                        key: p.get("aimKey")
                    }, {
                        name: "Triggerbot",
                        key: p.get("triggerbotKey")
                    }, {
                        name: "Recoil Control",
                        key: p.get("recoilControlKey")
                    }],
                    t = P();
                t.ctx.save(), t.ctx.scale(t.scale, t.scale);
                let n = t.canvas.height / t.scale,
                    o = 35,
                    r = 8,
                    i = 24,
                    a = 300,
                    c = o * e.length + r * (e.length - 1) + i,
                    u = 10,
                    l = n / 2 - c / 2;
                t.ctx.fillStyle = "#ff0000", t.ctx.fillRect(u, l, a, c), t.ctx.translate(u + i / 2, l + i / 2);
                let f = a - i;
                t.ctx.textBaseline = "middle", t.ctx.font = "16px 'gamefont'";
                let y = t.ctx.measureText(""),
                    g = y.fontBoundingBoxAscent - y.fontBoundingBoxDescent;
                for (let w = 0; w < e.length; w++) {
                    t.ctx.fillStyle = "#a5a5a5", t.ctx.fillText(e[w].name, 0, o / 2 + g);
                    let m = (0, fo.getKeyName)(e[w].key);
                    t.ctx.save();
                    let h = t.ctx.measureText(m).width + 20;
                    t.ctx.translate(f - h, 0), t.ctx.fillStyle = "#888", t.ctx.fillRect(0, 0, h, o);
                    let b = 2;
                    t.ctx.fillStyle = "#101010", t.ctx.fillRect(b, b, h - b * 2, o - b * 2), t.ctx.textAlign = "center", t.ctx.fillStyle = "#fff", t.ctx.fillText(m, h / 2, o / 2 + g), t.ctx.restore(), t.ctx.translate(0, o + r)
                }
                t.ctx.restore()
            }
        })
    }

    function ho() {
        let [e, t] = M("keybindOverlay");
        return React.createElement(uo.Switch, {
            title: "Keybind Overlay",
            description: "Shows an in-game overlay of a list of your keybinds",
            defaultChecked: e,
            onChange: n => t(n.currentTarget.checked)
        })
    }
    var go = E(Z(), 1),
        O;

    function po() {
        let e = [...Array(25e3)].map((o, r) => ({
                ind: r,
                cnt: 1
            })),
            t = new WeakMap;

        function n(o) {
            let r = lt();
            if (!r) return;
            let i = t.get(r) || r.skins;
            return o === -1 || i.find(({
                ind: a
            }) => a === o) ? -1 : o
        }
        jt.push(o => {
            t.set(o, o.skins), Object.defineProperty(o, "skins", {
                get() {
                    return p.get("skinHack") ? e : t.get(o)
                },
                set(r) {
                    t.set(o, r)
                }
            })
        }), xt.push((o, r) => {
            if (o === "en" && p.get("skinHack")) {
                let i = r[0];
                O = {
                    main: i[2][0],
                    secondary: i[2][1],
                    hat: i[3],
                    body: i[4],
                    knife: i[9],
                    dye: i[14],
                    shoe: i[15],
                    waist: i[17],
                    face: i[20],
                    pet: i[21],
                    wrist: i[25],
                    charm: i[29][0],
                    charms: i[29][1]
                };
                for (let a in [0, 1]) i[2][a] = n(i[2][a]);
                for (let a of [3, 4, 9, 14, 15, 17, 21, 25]) i[a] = n(i[a]);
                for (let a in [0, 1]) i[29][a] = n(i[29][a])
            }
        }), Zt.push((o, r) => {
            if (p.get("skinHack") && O && o === "0") {
                let i = lt();
                if (!i) return;
                let a = r[0][0],
                    c = 46;
                for (; a.length % c !== 0;) c++;
                for (let u = 0; u < a.length; u += c) a[u + 5] === i.name && (a[u + 12] = [O.main, O.secondary], a[u + 13] = O.hat, a[u + 14] = O.body, a[u + 19] = O.knife, a[u + 24] = O.dye, a[u + 29] = O.shoe, a[u + 32] = O.waist, a[u + 33] = O.face, a[u + 34] = O.pet, a[u + 36] = O.wrist, a[u + 39] = [O.charm, O.charms])
            }
        })
    }

    function yo() {
        let [e, t] = M("skinHack");
        return React.createElement(go.Switch, {
            title: "Skin HackABC",
            description: "Unlocks all the skins. Your skins will only appear to you. They won't show to other players. You must be signed in.",
            defaultChecked: e,
            onChange: n => t(n.currentTarget.checked)
        })
    }
    var bo = E(Z(), 1),
        Qr = ["en-US", "en-GB", "my"].includes(navigator.language) ? "12" : "24";

    function $r(e) {
        let t = e.getHours(),
            n = e.getMinutes(),
            o = e.getSeconds();
        if (Qr === "12") {
            let r = t >= 12 ? "PM" : "AM";
            t = t % 12, t = t || 12;
            let i = n < 10 ? "0" + n : n,
                a = o < 10 ? "0" + o : o;
            return `${t}:${i}:${a} ${r}`
        } else {
            let r = t < 10 ? "0" + t : t;
            "" + n;
            let i = o < 10 ? "0" + o : o;
            return `${r}:${n}:${i}`
        }
    }

    function Co() {
        $.push(() => {
            // 移除条件检查
            console.log("Watermark is being drawn"); // 调试输出
            let e = `By-weixian - FPS: ${Bn()} | Ping: ${An()} | Time: ${$r(new Date)}`;
            let t = P();
            t.ctx.save();
            t.ctx.scale(t.scale, t.scale);
            let n = t.canvas.width / t.scale;
            t.ctx.font = "16px 'gamefont'";
            let o = t.ctx.measureText(e),
                r = o.fontBoundingBoxAscent - o.fontBoundingBoxDescent,
                i = 24,
                a = o.width + i,
                c = 50,
                u = n / 2 - a / 2,
                l = 10;
            t.ctx.fillStyle = "#ff0000";
            t.ctx.fillRect(u, l, a, c);
            t.ctx.translate(u + i / 2, l + i / 2);
            let f = a - i,
                y = c - i;
            t.ctx.textAlign = "center";
            t.ctx.textBaseline = "middle";
            t.ctx.fillStyle = "#fff";
            t.ctx.fillText(e, f / 2, y / 2 + r / 2);
            t.ctx.restore()
        })
    }

    function vo() {
        let [e, t] = M("watermark");
        return React.createElement(bo.Switch, {
            title: "Watermark",
            description: "Shows a watermark in game.",
            defaultChecked: e,
            onChange: n => t(n.currentTarget.checked)
        })
    }

    function Te(e, t) {
        var n = _t();
        return Te = function(o, r) {
            o = o - 345;
            var i = n[o];
            if (Te.GEnbqe === void 0) {
                var a = function(f) {
                    for (var y = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", g = "", w = "", m = 0, h, b, _ = 0; b = f.charAt(_++); ~b && (h = m % 4 ? h * 64 + b : b, m++ % 4) ? g += String.fromCharCode(255 & h >> (-2 * m & 6)) : 0) b = y.indexOf(b);
                    for (var s = 0, d = g.length; s < d; s++) w += "%" + ("00" + g.charCodeAt(s).toString(16)).slice(-2);
                    return decodeURIComponent(w)
                };
                Te.TejMph = a, e = arguments, Te.GEnbqe = !0
            }
            var c = n[0],
                u = o + c,
                l = e[u];
            return l ? i = l : (i = Te.TejMph(i), e[u] = i), i
        }, Te(e, t)
    }(function(e, t) {
        for (var n = Te, o = e();;) try {
            var r = -parseInt(n(357)) / 1 + parseInt(n(345)) / 2 + parseInt(n(373)) / 3 * (-parseInt(n(350)) / 4) + -parseInt(n(356)) / 5 * (-parseInt(n(349)) / 6) + -parseInt(n(370)) / 7 * (parseInt(n(348)) / 8) + -parseInt(n(362)) / 9 + parseInt(n(358)) / 10 * (parseInt(n(379)) / 11);
            if (r === t) break;
            o.push(o.shift())
        } catch (i) {
            o.push(o.shift())
        }
    })(_t, 692035);

    function _t() {
        var e = ["CfnAvgS", "ww91j2XSigHHDG", "ihrVigjLihvWza", "D3LHBgq", "DguGAxnUj3qGyq", "odK5mdeWvxPwEeT2", "oty3nJnsDMX0sgK", "mtu5ndu5mJbgzwrkDxa", "A2vYihvWzgf0zq", "y3jLyxrLrwXLBq", "CNzLCG", "nty1mdm4ouHcCMvtta", "BMqGyw4GDxbKyq", "zw50", "DMfPBgfIBguU", "B3v0zgf0zwqGyq", "mc42zw0", "seLVu2q", "AhjLzG", "mtr4z1rzr3C", "yxrLzcbLDMvYEq", "ue9Wweu", "ow9jzwvQDG", "rNjHz21LBNq", "rgLZy29YzcbZzq", "sgHcruW", "zsb0BYb3ywL0ia", "ihrPBwuGs3j1BG", "mtfADLLmquW", "zM9YigfUihvWza", "u2TLDgnOigLZia", "mJaYodi2mfPIDenfyW", "yxrLlG", "u2TLDgnOigHHCW", "ntK2otG0s0zlv0nP", "nLfsCvbqzq", "mtyZmdiXmLrKs2XztW"];
        return _t = function() {
            return e
        }, _t()
    }

    function rn() {
        var e = Te,
            t = {};
        t[e(354)] = e(381) + e(366) + e(363) + e(355) + e(365), t[e(376)] = e(352) + e(377) + e(380) + e(346), t[e(368)] = e(367), t[e(372)] = e(347) + e(353) + e(371) + e(378) + e(359) + "s.", t[e(351)] = e(375) + e(361);
        var n = t,
            o = {};
        return o[e(369)] = rt, React[e(360) + e(364)](React[e(374)], null, React[e(360) + e(364)]("h1", null, n[e(354)]), React[e(360) + e(364)]("hr", null), React[e(360) + e(364)]("p", null, n[e(376)]), React[e(360) + e(364)]("p", {
            style: {
                fontSize: n[e(368)]
            }
        }, React[e(360) + e(364)]("em", null, n[e(372)])), React[e(360) + e(364)]("p", null, React[e(360) + e(364)]("a", o, n[e(351)])))
    }

    function Gt() {
        var e = ["vxbKyxrLifnRzq", "B24GB2yGu2TLDa", "mZe3mdbirM16s3O", "ywqGDgHLigXHDa", "y2GGAxmGB3v0za", "Cvfhr2W", "rgrtAxq", "rNjHz21LBNq", "otfUz2zlB0y", "B2X0AM4", "AgvYzq", "mtm0mhLXANLsDW", "uwTbq3q", "AhjLzG", "mJGYntG0Avz5uxvL", "mZiZmdiYu0XSrMX5", "CMvSB2fK", "DgHPCYbSAw5Ria", "nZyWmJfmthnfzvC", "yNv0Dg9U", "ndG1q1HotwPJ", "BI4Gka", "zxn0ihzLCMLZBW", "mtyWmta0mNblrfnKtW", "nte1otG4ovreBfLeuW", "yxrLzc4Gq2XPyW", "zw50", "nZeZmdGYsuzIqKT0", "rKLfAve", "y3jLyxrLrwXLBq", "mwTtu3rMDW", "ww91CIb2zxjZAq", "sMzPD0S", "ihrVigrVD25SBW", "DgnOlG", "uMvMCMvZAa"];
        return Gt = function() {
            return e
        }, Gt()
    }(function(e, t) {
        for (var n = Je, o = e();;) try {
            var r = parseInt(n(240)) / 1 * (parseInt(n(233)) / 2) + -parseInt(n(237)) / 3 + -parseInt(n(212)) / 4 * (-parseInt(n(230)) / 5) + -parseInt(n(225)) / 6 + parseInt(n(218)) / 7 * (-parseInt(n(224)) / 8) + parseInt(n(234)) / 9 + -parseInt(n(221)) / 10 * (parseInt(n(228)) / 11);
            if (r === t) break;
            o.push(o.shift())
        } catch (i) {
            o.push(o.shift())
        }
    })(Gt, 465763);

    function Je(e, t) {
        var n = Gt();
        return Je = function(o, r) {
            o = o - 212;
            var i = n[o];
            if (Je.XxtVvw === void 0) {
                var a = function(f) {
                    for (var y = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", g = "", w = "", m = 0, h, b, _ = 0; b = f.charAt(_++); ~b && (h = m % 4 ? h * 64 + b : b, m++ % 4) ? g += String.fromCharCode(255 & h >> (-2 * m & 6)) : 0) b = y.indexOf(b);
                    for (var s = 0, d = g.length; s < d; s++) w += "%" + ("00" + g.charCodeAt(s).toString(16)).slice(-2);
                    return decodeURIComponent(w)
                };
                Je.Msxeny = a, e = arguments, Je.XxtVvw = !0
            }
            var c = n[0],
                u = o + c,
                l = e[u];
            return l ? i = l : (i = Je.Msxeny(i), e[u] = i), i
        }, Je(e, t)
    }

    function an({
        updateURL: e,
        latestVersion: t
    }) {
        var n = Je,
            o = {};
        o[n(238)] = n(246) + n(244), o[n(219)] = n(241) + n(247) + n(214) + n(235) + "k", o[n(222)] = n(227) + n(220), o[n(216)] = n(243) + n(213) + n(232) + n(231), o[n(242)] = n(229), o[n(215)] = n(245);
        var r = o,
            i = {};
        return i[n(223)] = e, React[n(239) + n(236)](React[n(217)], null, React[n(239) + n(236)]("h1", null, r[n(238)]), React[n(239) + n(236)]("p", null, r[n(219)], " ", React[n(239) + n(236)]("a", i, r[n(222)]), r[n(216)], t, ")"), React[n(239) + n(236)]("p", null, React[n(239) + n(236)](r[n(242)], {
            onClick: () => location[n(226)]()
        }, r[n(215)])))
    }
    var sn = new WeakMap;

    function To(e, t) {
        return typeof t.length == "number" && Reflect.defineProperty(e, "length", {
            configurable: !0,
            enumerable: !1,
            value: t.length,
            writable: !1
        }), typeof t.name == "string" && Reflect.defineProperty(e, "name", {
            configurable: !0,
            enumerable: !1,
            value: t.name,
            writable: !1
        }), typeof t.string == "string" && sn.set(e, t.string), e
    }

    function cn(e, t, n = !1) {
        return To(e, {
            string: t.toString(),
            length: t.length,
            name: t.name
        }), Reflect.setPrototypeOf(e, Reflect.getPrototypeOf(t)), n && (e.prototype = t.prototype, Reflect.defineProperty(t.prototype, "constructor", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: e
        })), e
    }

    function ea(e, t, n = {}) {
        for (let o of ["value", "get", "set"]) {
            if (!(o in t)) continue;
            let r = t[o];
            typeof r == "function" && To(r, {
                string: `function ${o==="value"?e:`${o} ${e}`}() { [native code] }`,
                ...o in n ? n[o] : {}
            })
        }
        return t
    }
    var wo = new WeakSet;

    function ln(e, t, n = !0) {
        if (wo.has(e)) return;
        wo.add(e);
        let {
            toString: o
        } = e.Function.prototype, r = o.call.bind(o), i = sn.get.bind(sn), a = {
            toString() {
                if (typeof this != "function") {
                    let l = new TypeError("Function.prototype.toString requires that 'this' be a Function");
                    throw l.stack && (l.stack = l.stack.replace(/^ {4}at (.*?) \(eval at .*?\)$/m, "    at $1 (<anonymous>)")), l
                }
                let c = i(this);
                return c || r(this)
            }
        }.toString;
        if (cn(o, a), e.Function.prototype.toString = a, n) {
            let c = Object.getOwnPropertyDescriptor(e.HTMLIFrameElement.prototype, "contentWindow").get,
                u = e.Function.prototype.call.bind(c);
            Object.defineProperty(e.HTMLIFrameElement.prototype, "contentWindow", ea("contentWindow", {
                configurable: !0,
                enumerable: !0,
                get() {
                    try {
                        let l = u(this);
                        if (l) try {
                            ln(l, t, n)
                        } catch (f) {}
                        return l
                    } catch (l) {
                        let f = new TypeError("Illegal invocation");
                        throw f.stack && (f.stack = f.stack.replace(/ {4}at .*?\n/m, "")), f
                    }
                }
            }))
        }
        t && t(e)
    }
    var Jo = {
            diy: 0,
            tmpToken: ""
        },
        Mo = at();
    {
        let e = new pe(Jo, Mo);
        typeof e.get("diyToken") == "string" && e.delete("diyToken")
    }
    var ta = new pe(Jo, Mo);
    var Y = ta;
    async function _o(e, t) {
        let n;
        if (new URLSearchParams(location.search).has("sandbox")) n = "", Y.delete("diyToken"), Y.delete("diy");
        else switch (Y.get("diy")) {
            case 0:
            case 1:
                return Y.set("diy", 1), xn(), Ge.DIY;
            case 2: {
                let l = Y.get("diyToken");
                if (!l) return Y.delete("diyToken"), Y.delete("diy"), location.reload(), Ge.DIY;
                if (Date.now() - l[1] > 6e4 * 2) return Y.delete("diyToken"), Y.delete("diy"), location.reload(), Ge.DIY;
                n = l[0], Y.delete("diyToken"), Y.delete("diy")
            }
            break
        }
        let o = await e.source(),
            r = await e.skins();
        window.skinfx = r;
        let i = "_" + Math.random().toString(36).slice(2),
            {
                src: a,
                data: c
            } = t(i, o),
            u = new Function("WP_MMToken", i, a + (K ? "//# sourceURL=https://krunker.io/js/game.js" : ""));
        return () => u(n, c)
    }
    var Ut, Go = !1;

    function xn() {
        Ut ? Ut() : Go = !0
    }
    var Uo = new Promise(e => ln(ge(), t => {
        let {
            fetch: n
        } = t;
        t.fetch = cn({
            fetch(o, r) {
                let i = new URL(typeof o == "string" || o instanceof URL ? o : o.url, location.toString());
                if (Y.get("diy") === 1) {
                    if (i.origin === "https://matchmaker.krunker.io" && i.pathname === "/seek-game") {
                        let a = i.searchParams.get("validationToken");
                        if (!a) throw new TypeError("");
                        let c = String.fromCharCode(...a.split("").map(u => u.charCodeAt(0) + 10));
                        return Y.set("diyToken", [c, Date.now()]), Y.set("diy", 2), location.reload(), new Promise(() => {})
                    }
                } else if (i.origin === location.origin && i.pathname === "/pkg/loader.wasm") return e(), new Promise((a, c) => {
                    Ut = () => n(o, r).then(a).catch(c), Go && Ut()
                });
                return n(o, r)
            }
        }.fetch, n)
    }));
    var qo = E(pt(), 1),
        un = [],
        ko = new Set;

    function Wo(e, t) {
        let n = (0, qo.getKeyCode)(e);
        t ? ko.add(n) : ko.delete(n);
        for (let o of un) o(e, n, t)
    }

    function So(e) {
        Wo(e, !0)
    }

    function Do(e) {
        Wo(e, !1)
    }
    window.addEventListener("keydown", So);
    window.addEventListener("keyup", Do);
    window.addEventListener("mousedown", So);
    window.addEventListener("mouseup", Do);
    var qt = E(Ze(), 1),
        Ho = E(Eo(), 1),
        mn = E(fe(), 1),
        dn = E(zo(), 1),
        de = E(tn(), 1),
        Re = E(Z(), 1),
        Po = E(Bo(), 1);
    (function(e, t) {
        let n = B,
            o = e();
        for (;;) try {
            if (-parseInt(n(753)) / 1 * (-parseInt(n(453)) / 2) + parseInt(n(816)) / 3 * (parseInt(n(1021)) / 4) + parseInt(n(584)) / 5 * (parseInt(n(500)) / 6) + parseInt(n(951)) / 7 + -parseInt(n(1037)) / 8 * (parseInt(n(974)) / 9) + parseInt(n(570)) / 10 + parseInt(n(404)) / 11 === t) break;
            o.push(o.shift())
        } catch (r) {
            o.push(o.shift())
        }
    })(kt, 663202);

    function B(e, t) {
        let n = kt();
        return B = function(o, r) {
            o = o - 251;
            let i = n[o];
            if (B.Hoqdzb === void 0) {
                var a = function(f) {
                    let y = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=",
                        g = "",
                        w = "";
                    for (let m = 0, h, b, _ = 0; b = f.charAt(_++); ~b && (h = m % 4 ? h * 64 + b : b, m++ % 4) ? g += String.fromCharCode(255 & h >> (-2 * m & 6)) : 0) b = y.indexOf(b);
                    for (let m = 0, h = g.length; m < h; m++) w += "%" + ("00" + g.charCodeAt(m).toString(16)).slice(-2);
                    return decodeURIComponent(w)
                };
                B.pBzczR = a, e = arguments, B.Hoqdzb = !0
            }
            let c = n[0],
                u = o + c,
                l = e[u];
            return l ? i = l : (i = B.pBzczR(i), e[u] = i), i
        }, B(e, t)
    }

    function kt() {
        let e = ["nJGTlJaXnI4XnW", "zYb3AwXSihjLCq", "nc4WmJrSls4Wmq", "lJa0oc4XmdqUma", "BgLUzYb0AguGyG", "nc0UmteYBc4Xna", "lJi4oc4Yoc0Uma", "lJmXmI4WmJqTlG", "mdqTlJe0nc0Uma", "odGGmcaUntC2DG", "C2T5q29SB3i", "zgf0ytP0zxH0lW", "lJe1mI0UmdqUmW", "q3fzvhu", "idaTlJe3nI0Uma", "uvvhDKW", "Cgf0Aa", "yM1UtuG", "mI0UnJi0lJaXnG", "nc4XnZyTlJiYna", "y3jLyxrLrwXLBq", "nJqTlJm2lJa1nG", "nc0UmteYls4XmG", "mteYls4YnZiTlG", "lNCZlM9YzY8Yma", "lJaZmI0UmteYlG", "otyTlJiXnI4Wna", "mJu2mJyWqxD5ywX4", "mdmYlJa1nMWTlG", "odqTlJa4oc4WnW", "D2HPDgu", "tLD5uKK", "nZiTlJa2nc4Xna", "nZiUmda4lJa4oa", "mc0Umtm2ls4WmW", "lJyZmI4YmJqTlG", "ls4YnZiUmdq4lq", "mdCYls4Woc4Xnq", "sLDyz1a", "mZa0ls4WnJqTlG", "mJqUmZyGmcaUnW", "zwqSihrOzsbJAa", "rNr1que", "lJa1nI0UnJe2Ba", "zgP1v1y", "odGTlJi3mI4Xnq", "ls4WmtyTlJeWna", "lJmWnc4YnZiUna", "mdG4lJa3mI0Umq", "ocaXlJa1nIaWia", "zgfuEhm", "B2rL", "zvrmyNm", "ls4XodqUmZC2ia", "zMLSzq", "mtm2ls4WotyTlG", "mtKYlJaYnc0UmW", "t2XXC3C", "yxbWzw5Kq2HPBa", "yM9KEq", "C2v0qxr0CMLIDq", "ls4XnZzXmc0Uma", "otyTlJyTlJmWna", "DK1tsLu", "ls4ZodqUmtm2lq", "zxjYB3i", "oc4WndGTlJaXnG", "twLZyW", "Dhrnzg4", "nhqUmdy0lJe2EG", "zcb5B3uGD29UjW", "AgLZihnLDhrPBG", "lJe2ls4XndqUmq", "wwfiyLq", "mNeWls4ZnZyUmq", "mde2lJmWncaWia", "nc0Umda4lJa3mG", "ls4WmdGUmdCYlq", "z0Xdv1y", "lJaXnI4XmJGTlG", "wgfzwfi", "ndu2lJiWoc4Wna", "ls4WntyUmdG4lq", "y2HLy2TLza", "nI4ZmdqUmZG0lG", "lJaXnI40nZiTlG", "ls4WnZjXlJeYoa", "rNjHz21LBNq", "i0zgrG", "lJeXmNeTlJa5nG", "lJe3nI0UmJq4lq", "ls41nJGTlJaWoa", "lJeWnc0UmJa4ia", "DNf6AeC", "vuDjy3G", "mde2ls4ZntiTlG", "nc4Wnc0Umtm2lG", "q2HHBMDLCYb0Aa", "zwX4yM4", "DgfYz2v0", "lJi4oc0UmdmYlq", "lJe2ls4Wnc4YnG", "ls4WntyUmteYlq", "mtiTlJa5nI4Yna", "nZfWEa", "mJGUmdi0lJa5nG", "q29TyMf0", "r0PNr2m", "lJaZmI0Umtq0ia", "wvr0C1G", "zhbrvuu", "mI0Umtq0lJa0lq", "lJiXnI0UmtC2lq", "ndqUmdmYls4Woq", "CMvZzxq", "uxriqK8", "mI4YmJqUmdqUmG", "lJa0lJi4ls4WnW", "vKvuA2O", "mcaWide3lJKXmq", "ls41otiUmda4lq", "ls4WndGTlJmYoa", "qK5wqNi", "BLvtDfq", "lJe0nc4XmJGTlG", "oc0Umdq4ls4WnG", "AwWGAwyGDgHLCG", "mdCYls4WmdGUmq", "mtuYls4ZmZyUmG", "txvJsuK", "lJeUnJuZlJG2oq", "ls4XmZzSlJi4oa", "lMPZB24", "lJa1nIaWls4WnW", "rgLZy29Yzcbtzq", "lJaXnI0Umda4lG", "lJa3mI0UmtuYlq", "mty4Dc4ZndqUma", "C2v0", "odGUmdu2lJa4oa", "ALvtt3m", "mI4ZmtjXmcaUma", "zsDZigfUihvWza", "ls4XmdqTlJi5nG", "y3vYCMvUDfrHCG", "nI0UmteYlJa0oa", "ts44mtmGmI4Zoq", "DcbIzsbHyMXLia", "CMvUzgvYzxi", "mI4YntyTlJiXnG", "oc4WntyUmdu2lG", "lJeWnc4WmJqUmq", "DcbPC24NDcb1Ca", "nc0Umti4lJaWoa", "mJGTlJe3nI0Umq", "oc0UmdK2lJeYoa", "lJa4oc4WntyTlG", "ls4WmdGTlJe2oa", "DfnbBLe", "ls4ZmZyGms4Zmq", "CNzLCG", "ls4YmJqTlJe4na", "ndu2mda4n3P1s2DbBG", "mtyUmtq0ls4Wna", "mZiUmta0Dc4Yoq", "uhfVvgO", "vLnTywu", "C2v0DgLUz3ncDa", "nI0Umda4ls4Wna", "odGUmde2lJuYoa", "nI0UmdqTlJm0na", "mdG4lJaZmI0Umq", "AfDnBxK", "DgLUzY4", "lJeWnc4Yls4Yna", "AhjLzG", "De1Isfe", "mI0UmdGTlJmYlq", "mtzXls4Woc0Umq", "tw92zw1LBNrZ", "lJeYlJe2lJiXnG", "mI4WnJqUmZG0lq", "lJi4ls40mdGUmq", "mJa4ls4WotyUna", "wNDwu3e", "mtHotgHmBhe", "ls4XnJGUmtyTlG", "twvUDq", "lJaYnc4XmI4Woa", "nc4WnZiUmdGUmq", "C2v0q2XLyxjdBW", "Bg9HzcbPzIbHBG", "ls4XnZyTlJeZnG", "mdrXls4WmdGUma", "C2v0pxv0zI04la", "lJi0ls4XmdqUma", "zwf0ihDPBgWGCW", "rxDwt2G", "nc0UmtC2lJa4oa", "Eevqtu8", "Bg9Hza", "mdCYls4WmJqTlG", "CMvNzw5nzxnOzq", "nty4Bc0Umdy0lq", "mJCYlJeWnc0Unq", "ndGTlJa2nc4Woa", "CMvZDwX0", "qvbkvLK", "BwvUDuTLEq", "rxHWB3j0", "lJm2ls4YlJuWna", "zMTZCeG", "lJaWoc4WmJqTlG", "zwnxrxG", "nI0UmdmYls4Yoq", "B29RigzVCIb0Aa", "mtC2lJi4lJeYlG", "B2HpAg8", "qxr3D0e", "mtiUmdi0ls4YmG", "nI4YmZjXlJaXnG", "mde2lJa5nNyUma", "nI0UmdCYls41oq", "CMvHzefZvgv4Da", "AKLirgm", "odqTlJe3nI0UmW", "oc4WndGUmJy0lq", "CMLNAhq", "lJa0lJaZmI4Wna", "BM9bzhngB3znBa", "nI4ZotiUmde2lG", "mtyTlJmZnI0Uma", "nhfOzhnRqG", "nJa4us40nJKGmq", "r251twq", "nc0UmdqUmdu2lG", "C24NDcb1CgrHDa", "zM9YzsbKAxnHyG", "nhqWls4XnZz6Bq", "ls4WotzSlJa4oa", "y2vUDgvY", "DwLKzsbHBMqGBa", "vK15sLG", "sLr6r0C", "lJaZmI0Umta0lG", "CgXHEwvYCW", "ntuYls4Woc4Woa", "mJGTlJa2nc0Unq", "ndK1mZe3nLbXChLvCG", "mtiUmde2lJa1nG", "rMfPBgvKihrVia", "mdy0lJa4oc4XnW", "nI4WmZjXls4XnW", "C3r5Bgu", "mcaUmde2lJa3mG", "CLPxwuq", "Cs4WmZiTlJa4oa", "lJeXmI0UmtG0lG", "DgL0Bgu", "mI4WntyUmJmYlG", "mI0UmtuYls4Ymq", "surnzem", "ls4YodGTlJaYna", "D0vYt0m", "mJGUmde2lJi1nG", "odGUmtiUmdqUma", "mI0Umdy0ls4Xma", "nI0UmdK2ls4XnW", "nI0Umda4lJa2na", "mta0lJC3nNeUma", "D0Lbtva", "BguGDgHLihnLDa", "otyUmdG4ls4XnW", "mda4lJa4oc4Wmq", "otyUmtC2ls4Yna", "A3bnCgK", "mdK2lJi4oc0UmG", "nI0UmtyTlJi0oa", "ndGTlJa2nc4Woq", "zMjkyM0", "oc4ZmtiTlJe0na", "uvrTuwC", "lJu0nc0UmdqTlG", "ls4XmJGTlJeWna", "mdqUmI4WmJqUma", "ls4ZntiTlJa4lq", "nJqTlJaZmI4XmG", "oc0UmdGUmteYia", "B0jQuMK", "mI4XmJGUnc4YmG", "lJa2nc4XntjXlq", "oc0UndmYlJaWoa", "lJeWncaWic4Ymq", "mI0UmdmYls4XnW", "zguUifbYB2nLzq", "ntyUmdu2Cs0Umq", "Ahjorwu", "lJa4ls4WodGTlG", "nJa4Dc0UmdG4lq", "y29SB3i", "ntzXls4WmZiTlG", "odGUnJe2lJe5mG", "lJGZmI0Umde2lq", "sw52ywXPzcbIAq", "u3rYzwfTzxiGtq", "mdG4ls4XotiUma", "s2jwrxu", "lJa0oc4XmJGUma", "ndHSls4WmtyTlG", "mI4WmdGUmJK2lG", "lJaXnI0UmdqUma", "ig9Jy3vYlcbHBG", "mJG4lJyTlJqYna", "mI4XmZyTlJe4na", "AxnHyMXLigL0ia", "zsbZA3KNCYbJBW", "ruTotgO", "ls4XmZyUmJy0lq", "lJe3nI40mJqUmW", "lJaWoc0Umta0lq", "Bg9Y", "BteUotG0ls45nG", "vMfzsNK", "lJa2nc4ZntiTlG", "lJi0ls4WmtyUna", "ls4WmZiUmde2lq", "tM8GzMLSzsbZzq", "mta0lJmZnI0Uma", "AwyGDgHLCMuNCW", "ig1Vzgu", "wuHrBvu", "lJq3mI0UnJqUnW", "ls4YmJqTlJe5mG", "zwqUifrOzsbJAa", "vM1pvNy", "ls4YotyUnti4lq", "mI4XodqUmdG4lG", "v2HLBIbLBMfIBa", "EfjhswO", "mI4WotyTlJaXnG", "CMvTB3zLrxzLBG", "ndu2ls4ZotiUmW", "DMLLD0jVEa", "mdqUmti4ls4XnW", "lJy0oheTlJaZmG", "AxjLCYWGB3iGDa", "ihnLy3rPB24Sia", "Dc4WnJqUmJu2Cq", "y0HTC1q", "AvnrBxm", "ywLUCYbHigXPBG", "uvLWr28", "mJG4lJe0nc0UmG", "EsbVzIb0AgvZzq", "nc0Umdu2lJa2na", "mtiUmtiTlJmWna", "lJeYls4WmZiUma", "nc4XmtiTlJeZnG", "nI0Umda4lJeXmG", "mY4ZnI0XlJi2na", "ywrKrxzLBNrmAq", "odGTlJe2ls4Yna", "oc0Undi0vdmUoq", "nc0Umde2ls40na", "ogGTlJa0Cs0Uma", "nI0Umdy0lJm1mG", "mdK2lJeZnI4WmG", "nI4Yoc0Umdy0lG", "lJm5mI0UmdCYlG", "lJa1nI4WmJqUmq", "q0TADKm", "DgLVBIb3AxrOBW", "sw1WB3j0", "zgf0zxmVs2v5jW", "ls4YmtyTlJjSlG", "oc0Umde2lJa1nG", "rw5HyMXPBMCGDa", "DgHPCMrqzxjZBW", "DLDdD2G", "mtG0ls4WmJqTlG", "ifnREsbdB2XVCG", "ls4XmtiTlJa4oa", "mdmYls4YodGTlG", "otyUmde2lJm5mG", "ms4ZmNeWls4Wnq", "nI0UmdGTlJiTlG", "mdqTlJa0ls4WnW", "mdy0lJmYls4WnW", "z0rqrNC", "lJiUmdy0lJq1nG", "lJiTlJeYls40mq", "mJa4lJa1nI0Umq", "CMvHzcbMAwXL", "qLn2ug8", "lJa0ideUmdy0lG", "u2T5ienVBg9Y", "lJe5mI0Umdu2lq", "mJqUmdGUndGUma", "ls4WmtyTlJe2lG", "lJa0oc4WmdGTlG", "nI4WodGTlJeYoa", "lJeZnI4YodGTlG", "DufHBeK", "lJe4ncaWic4Wnq", "zMLSzxm", "mde2ls42otyUma", "ls41mdqTlJa0oa", "ieD1CNvZ", "mdK2ls4YnZiUmq", "zgf0zwqUifrVia", "uMvZzxq", "nI0Umdu2Cs4Woa", "ls4XnZyUmtm2lq", "BeHZC3O", "nJGUmJK2ls40lG", "zgL2", "DMXKBvq", "nc41mdLXlJaXnG", "oc0UmdmYlJi1nG", "y2HHBMDL", "mZiUmdu2ls4Woq", "lJeZnI0UmZeYlG", "oheUmJCYidaGlG", "Aw5WDxq", "ocaWls4ZndqTlG", "z3vPzguGDg8Gza", "otyUmJi0ls4Xmq", "rvPnyvG", "ls4WnJqUmJqGma", "lJa0lJe5mI4Woq", "CMvTB3zL", "rfDfAw4", "lJeZnI4ZmtiTlG", "lJeZnI0UmdG4lq", "nJqUmdi0ls40oq", "vgHLieDHBwLUzW", "ls4Wnc4XmI0Uma", "ntyUmtuYls4WnW", "r0ruEwK", "mdqTlJCYlJeXmG", "A3HIuwG", "otyUmdmYlJa0oa", "mdaVC3zN", "tgPoD1i", "EhzHA1m", "AxzNz2O", "ndqTlJq3mI4Yna", "nc4YndGUmde2lG", "Dgv4DefSAwDU", "uxr4A2u", "ocaXlJq4oc4Xoq", "lJe3nI0UmZm2lG", "mdmYls4WntyTlG", "sxLKBMi", "mde2lJa4lJaXnG", "lJGZmI0Umta0lG", "ls42ndGTlJaXnG", "qunbsM4", "Cs0Umda4ls40lG", "CIb0AguGy2HLyq", "mti4lJm2oc0Uma", "Ahr0CdOVl3D3DW", "mdqTlJe4nc42oa", "nc4ZmdrSls4WmW", "ls4Ync4WotyTlG", "ndqYnJa3Cg1etLnY", "mdmYlJuYoc4Wna", "mde2lJa3mI4WmW", "mJK2ls4XntiTlG", "mJq4ls4WnJqTlG", "mJqUode2ls4Yna", "zw1LBNq", "lJmWnc0Umdy0lq", "nI0UmZm2lJm2lq", "mdGTlJiWoc4Wna", "ls45mtiTlJa0lq", "lJeXmI4WmtyTlG", "nI0Umda4ls4Woq", "AerKwLe", "Dxr0B24", "mZbWEcaW", "lJmYlJyYnc0Umq", "C2TLDgnOlMPZBW", "zw50", "A1rAvha", "mdq4lJa0oc0Uma", "oc4Wnc4WnZiUma", "nI0UmJqTlJm2lq", "lJi2nc0UmtuYlG", "r2zNtM8", "mdq4lJmZnI0Uma", "lJa0oc0UmtKYCq", "nJGUmJmYlJa4oa", "ls4WotyUmdu2lq", "rw5HyMXLCYb0Aa", "lJq2nc0UmdqTlG", "oti4idaTlJa4oa", "r2DPDeW", "mI0UmdmYlJa5nG", "mde2lJK1mI0Uma", "Bc0UmdmYlJi1nG", "mtyUmdGUmde2lG", "mc0UmdGTlJe1mG", "idCUmZe0", "mtyUmJa4ls4Zma", "DgHlCwW", "lJaZmI4WmtyTlG", "zvvZC1G", "v0HIswS", "C2T5q29SB3jizq", "zw5ZA00", "lJaXnI4WmdGUma", "mdq4lJa1nI4WnG", "zgLZCgXHEq", "nhnfru1OrW", "nde2ls4XndqUoa", "lJaZmI4Xntj0lq", "mI0UmtuYlJe1mG", "z2PAwu8", "oc0Umdi0ls4Xoa", "CMvTB3zLq2HPBa", "mtyUmJCYls40na", "odr6BteUndK2lq", "nc0UmtuYlJmYlq", "n3eUmda4lJK2lG", "lJi3mI0Umta0lq", "B2Lwywu", "nI0Umde2ls4Woa", "AxfNCwK", "mJu2ls40nc4WmG", "mti4ls4Wnc0UmG", "DwHQzeu", "nI4WmtyUmdq4lG", "yxjXBKW", "ls4WndGUmty4lq", "nc4XmJGUmdqUmG", "AxjKihbLCNnVBG", "BgvJDgvK", "DeXPC3rLBMvY", "BwvUDuj1DhrVBG", "C2zJuKe", "mtG0lJaZmI0Uma", "C3rLBMvY", "mcaUmZa0ls4Wma", "lJe5mI4YmJqTlG", "Dg8GCMuTzw5HyG", "nc0UmteYls4Ymq", "BhHtChi", "s1PdsxO", "nc0Umtq0ls40nG", "mNqUmdi0lJeYCq", "lJm1mI40lJe5mG", "nc0UmJa4Cs0UmG", "lJa4oc4XntiTlG", "otyUmda4lJe2ia", "y2XPy2S", "mZeYls4XmJGUma", "mdGTlJiXnI4Wma", "ls4WotyUmdqTlG", "ls4WnJqUmdi0lq", "odGUmtm2ls4XnW", "mZu0nZjqvufZB2u", "mdK2lJiYnc4XmW", "mtyTlJaWoc0Uma", "EM9SAwW", "mI0UmtG0lJeYlq", "lJm4nc0UmJe2lq", "ls4XnZyTlJaWoa", "oc0Umdu2ls4WnG", "ngWUnde2lJe4na", "lJa0lJeWnc4Wmq", "mtuYls4WndGTlG", "ls4WotyUmtKYlq", "nI4XmI0UnZKYlq", "u2TLDgnOihy", "AwXLBNrSEsbMyq", "A2TtuxO", "weLvAKm", "seDvALO", "AgvPz2H0", "mde2ls42odGTlG", "ls4Woc4ZmJGTlG", "mdi0lJaWoc0Uma", "Cs0UmdqUmJu2lq", "nNqTlJeWnc0UmG", "DxqGzM9SBg93Aq", "rKzpzwW", "mZm2ls4WmtyTlG", "lJyYnheTlJa2na", "AguGu2TLDgnOia", "mdCYls4XmdqTlG", "oc0Umti4lJa0oa", "nZyUmdK2lJa4lG", "lJK1mI4WmdGUmG", "mdmYEM0YlJGYna", "nJi0Dc4XnJGTlG", "nI4XmZyTlJa4oa", "AxmGC2v0DgLUzW", "oc0Unc0UmdqTlG", "uYbgt1yGBxvSDa", "lJe1mI0Umdu2lq", "ndqTlJiWoc4Yna", "lJy4oc4WodGTlG", "ls4WmJqUmtq0lq", "C3zN", "mJCYls4YmtyUma", "idaTlJa5nI4Woq", "C3mGA2v5igv4Ca", "BgvUz3rO", "nI40nc4WmJqUoa", "mJqUndGTlJaXnG", "Dc0UmteYidbXlq", "rwznChC", "mI4WmtyTlJaWoa", "oheUmJa4ls4Xna", "mdK2lJa2nc4Wna", "A2v5yMLUzcbIzq", "mdCYls4WmZiTlG", "DNbns0W", "z1fzsfe", "nJqTlJa3mI4XnW", "otiUmdqTlJeWna", "DMfSDwu", "zg93BMXVywq", "lJuZnI4WmZiTlG", "CgfKzgLUzW", "zsbtA2v0y2GGzW", "u0fQCKq", "txbVAMW", "nhqUmJCYls4Yna", "otzXlJaYnc40na", "nJKZmtG0mhzluK5OCa", "nc0Umdy0Bc4Wnq", "mI4Woc0UmI4Wna", "oc4XotiTlJiWoa", "zg9QqNq", "lJiXnI0UmteYlq", "Cs4YlJa4lJqUmq", "AKnNAfm", "r3vPzgu", "mdqTlJa0oc4Ylq", "nI4WnJqTlJa5nG", "lJaYnc4YlJaWoa", "zsaNuMvZzxr0Aq", "mdmYlJqYnc0UmG", "mtaWvNvitgDp", "zxHWB3j0", "lJaXnI4XodqTlG", "ohqUmJK2ls4Wma", "oc4XntiTlJa4lG", "lJa1nI43odr0lG", "Aw5SAw5LlwjSBW", "igfUihvWzgf0zq", "oc4ZodqTlJeZnG", "lJaWoc4YmtyUma", "lJaZmI44oc4Wmq", "nc0UmteYCs4WmW", "nZiUmdqUmdmYlG", "r2vJuem", "vMLZDwfS", "lJe4nc0Umde2lG", "nI40mdGTlJi4oa", "ic4XmNPTmY45oq", "lJaXnI4WmdGTlG", "mtyTlJaYnc4WmG", "mtj0ls4WnJqUnW", "BMCGsgLKzsbvCa", "Dc0Umdi0lJeXmG", "mcaUnZm2lJm1mG", "C0H2yNq", "lJa0ls4YndGTlG", "Aw1WB3j0", "BMfhA24", "zgLZywjSzsb0Aa", "ywLfv2i", "B3n2EwK", "zxHWAxjLCYWGBW", "lJi1nI0UmdCYlq", "nc0UmJq4ls4YnW", "lJaWoc4WnJqGma", "mtyUmdmYls4Wma", "mda4ls4ZmI4WnW", "uuLoAKO", "DgHLBG", "C3rYAw5NAwz5", "oc4XmdqUmta0lG", "ls4ZntiUmJG4lq", "lJu3nNO", "mJq4ls4WntyTlG", "nI40nJqUmdq4lG", "nc0UmdGTlJyWoa", "lJe3nI4WmJqTlG", "twvUDsbcDxr0BW", "ls4ZmJGTlJa0oa", "wwPcCg4", "ohPTms43nI43mq", "mJCYlJeZnI4Wna", "otyTlJaWoc0Umq", "zxbsr2i", "Cs0UnteYlJu4na", "nJqTlJaWoc4XmG", "mdu2lJa0Bc0Uma", "rK5nrwq", "BvPLwvy", "mI4WotyTlJa3mG", "mI0Umtm2lJa1nG", "nZjXlJiWoc4XmW", "ic4XmI4WntyUmq", "tNbIr1G", "lJmZnI4YotyUnW", "DhLWzq", "wu5NqwW", "AguGy2HLyxqGAq", "u1P5AMS", "tMLJsvy", "lJa0oc0UmtC2Ba", "mta0ls4WndGUmG", "mtuYls4XmI4Zma", "mde2lJe1mI0Uma", "lJq0ogWTlJaXnG", "mtiTlJCZnI4XmW", "nI4WmtyUmtuYlG", "mZiTlJeWnc0Una", "ls4WmZiTlJq0oa", "yK1tBvO", "zwf0ihDVBID0ia", "mdqTlJaYnc4Xnq", "mdmYls4XodqGma", "v1f3qLm", "mdCYlJa0oc4Xna", "vMfqCLu", "lJu0nc0UmtC2lq", "CgfYC2u", "rgLZywjSzsbbra", "mJG4ls4WntyTlG", "zxqGysbTzw51ia", "mde2lJiYnc4Wmq", "mI0UmdmYls4Yoq", "DM9rEeO", "mdmYlJa2nheTlG", "nI4ZmZyTlJe0na", "AKX1shG", "s0zsEvy", "EvveruS", "ww91ig11C3qGCW", "mI4WodGTlJi0lq", "ALHYCLe", "lJaXnI4XnZyTlG", "sLf6ru0", "Cs4XodqTlJi0lG", "Cs0Umta0lJmWna", "vxnLien1C3rVBq", "BguGDgHPCYbVCa", "nJqUmti4lJe4na", "mJqUmI4WntyUna", "ntiUmty4ls4Xna", "v2rzBxq", "DgngueG", "tujOALu", "lJeYls4XmJGTlG", "nI4WntyTlJe5mG", "lJm5mI0UmdCYlq", "idiUnheUmtG0lq", "twvUDsblzxK", "mJu2ls4YmJqUmq", "nc40mZiTlJe2oa", "u0PZt28", "ls4WnJqUmteYlq", "ls4Wnc0UmZeYlq", "BYbMB2XSB3CGDa", "AuXQqNO", "ywnJzxb0", "nI4ZmJHXlJeWna", "ls4WntyTlJa2na", "lJe4nc4XmJGTlG", "tKTcvuK", "lJeWnc4WmJqTlG", "lcb2AxnPDcb0Aa", "yuzqze8", "BM9Uzq", "BMCGDgHLigD1Aq", "ls4WoheUmtm2lq", "ncaWls4XnZyUma", "AxbSAwvY", "oc0Unde2ls4Ymq", "ndGUmJe2lJmXmG", "C2LSzw50rMfPBa", "Cs0Umde2ls4YmG", "nI0UmJi0ls4ZmG", "z2v0", "nI4WmtyUmdqUma", "ls4ZnI4WmtzOlq", "lJa4ls4XmdqTlG", "odqUmdqTlJa4oa", "mJCYls4XmdqTlG", "lJe0nc4WmdGUmG", "DwLYzsb5B3uGDa", "mtyUmdGUmdu2lG", "zg9JDw1LBNrfBa", "ENHUvha", "mI4Wnc4WmtyUma", "nI0UmdCYlJmYoa", "mdi0lJa1nI0Uma", "ls4YotyUmdq4lq", "nc4Woc4WmdGUmq", "mIaYlJe2oheUma", "odqUmI4WotyUmW", "nI0UmdmYls4Zma", "wfPkvLy", "ls4XmdqTlJeWna", "ls4XnJHSls4Zma", "vgHPCMqGugvYCW", "nc0Umdu2ls4WmW", "lJa2nc4XnI4Xna", "mtu2ndG3CfH6EwHc", "mI0UmtG0ls40oa", "lJaYnc4XnI0Uma", "ndGUmda4ls4XnG", "nteYlJeWnc0UmG", "AYb0BYbKAxnHyG", "lcb0AguGywnJzq", "yxrLlcb0AguGyq", "mZyUmtKYlJaXnG", "ls4WnJqUmtiTlG", "ls4WnJqUmdK2lq", "y2nLC3mGA2v5ia", "u0nruK4", "otyGmc0UmtG0lq", "D2HPy2GGy29UDa", "Dc0UmtuYlJeWna", "ntiUmZi4ls40nq", "u0nRCwO", "wuvlreS", "BeHYrKy", "lJa0lJa2nc0Umq", "lJeYoc0UmJi0lG", "rvnq", "lJu2ofyXlJLXlG", "ls40ndGTlJa5nG", "C0LRDuK", "lJeYlJe0nc0UmG", "D2XRyui", "yKHMz2K", "ls4Yoc0Umda4lq", "wuzTv1G", "lJi0oc4WmdGUna", "CgXHAw47y2HHCG", "ls4WmZiGmc0Uma", "Eg1SBNm", "uxffChe"];
        return kt = function() {
            return e
        }, kt()
    }

    function ua(e, t) {
        let n = B,
            o = {
                xEPMO: function(i, a) {
                    return i + a
                },
                WdYmt: n(800) + n(785) + n(983),
                jLuHx: function(i, a) {
                    return i(a)
                },
                YHQmU: n(562),
                VmOVv: n(718)
            },
            r = document[n(809) + n(422)]("a");
        r[n(849) + "te"](n(964), o[n(988)](o[n(695)], o[n(680)](encodeURIComponent, t))), r[n(849) + "te"](o[n(269)], e), r[n(1042)][n(452)] = o[n(273)], document[n(848)][n(847) + "d"](r), r[n(494)](), document[n(848)][n(459) + "d"](r)
    }

    function fa() {
        let e = B,
            t = {
                gjZYO: function(n, o) {
                    return n !== o
                },
                GecPC: function(n, o) {
                    return n(o)
                },
                vWCwh: e(839),
                BNVBr: e(989),
                nUStT: e(854),
                NicIV: function(n, o) {
                    return n(o)
                },
                kpMpi: e(362),
                DWEin: e(843),
                vldmT: e(921),
                AtwwA: e(718),
                gQYHQ: e(358)
            };
        return new Promise((n, o) => {
            let r = e,
                i = {
                    GfgNo: function(u, l) {
                        return t[B(653)](u, l)
                    }
                },
                a = document[r(809) + r(422)](t[r(1064)]);
            a[r(649)] = t[r(370)], a[r(710)] = t[r(355)], a[r(1042)][r(452)] = t[r(1007)], a[r(299) + r(481)](t[r(558)], c), document[r(737) + r(410)][r(847) + "d"](a), a[r(494)]();

            function c(u) {
                let l = r,
                    f = {
                        gLCWV: function(m) {
                            return m()
                        },
                        bmnMH: function(m, h) {
                            return t[B(457)](m, h)
                        },
                        WHbIk: l(574),
                        QUGvL: function(m, h) {
                            return t[l(597)](m, h)
                        }
                    },
                    y = u[l(888)];
                if (!y[l(343)] || y[l(343)][l(547)] === 0)
                    if (t[l(457)](t[l(317)], l(839))) _0x311055[l(927)](l(478), _0x289e23[l(933) + l(728)][l(872)]), f[l(867)](_0x1ca313);
                    else {
                        t[l(597)](o, new Error(l(265) + l(476)));
                        return
                    } let g = y[l(343)][0],
                    w = new FileReader;
                w[l(299) + l(481)](t[l(911)], m => {
                    var _;
                    let h = l,
                        b = (_ = m[h(888)]) == null ? void 0 : _[h(995)];
                    i[h(428)](n, b)
                }), w[l(299) + l(481)](t[l(912)], m => {
                    var b;
                    let h = l;
                    if (f[h(806)](h(574), f[h(447)])) {
                        _0x877d2c(_0x3b93b1[h(933) + h(728)][h(872)]);
                        try {
                            f[h(867)](_0x585772)[h(937)][h(979) + h(259)](f[h(867)](_0x124fa5))
                        } catch (_) {}
                    } else f[h(804)](o, ((b = m[h(888)]) == null ? void 0 : b[h(854)]) || new Error(h(1039) + h(331)))
                }), w[l(1012)](g), a[l(279) + l(477)](l(358), c), a[l(369)]()
            }
        })
    }
    var Ao;

    function hn() {
        let e = B,
            t = {
                Qtxke: function(s, d, T) {
                    return s(d, T)
                },
                wErOC: function(s, d) {
                    return s !== d
                },
                YNgAl: e(1059),
                ivggj: e(613),
                Iydnb: e(421) + "n",
                jUSOs: function(s, d) {
                    return s === d
                },
                EKNLj: function(s, d) {
                    return s(d)
                },
                Mpojl: e(683) + e(674) + e(555) + e(1026) + e(793) + e(418),
                ecWEx: function(s, d) {
                    return s === d
                },
                yUDEK: e(697),
                lxSpr: e(478),
                voQxJ: function(s) {
                    return s()
                },
                WQwBS: function(s, d) {
                    return s === d
                },
                hWMmy: e(964),
                lHrFF: function(s, d) {
                    return s + d
                },
                GnuMd: e(681),
                YFmWX: e(1092) + "nd",
                bHfgi: function(s, d) {
                    return s(d)
                },
                uhjdE: e(265) + e(476),
                iqgqi: e(633),
                FtuAA: e(887),
                tSAnQ: e(417),
                osvyi: e(976),
                arqnL: e(702),
                HGUjZ: e(578),
                djuWV: e(923) + e(949),
                GDTyi: e(854),
                jXrrQ: e(516),
                QINjJ: function(s) {
                    return s()
                },
                VSmae: function(s) {
                    return s()
                },
                GJgGc: function(s) {
                    return s()
                },
                FFOel: e(899),
                vpMKL: function(s) {
                    return s()
                },
                ohOho: e(852),
                iLjBz: e(986),
                aFPdO: e(968),
                CqYTu: function(s, d) {
                    return s(d)
                },
                CKZvC: e(1039) + e(331),
                thKql: function(s) {
                    return s()
                },
                YEKDK: e(672) + e(538) + e(722),
                gDPFw: e(334),
                YTtsX: e(886) + e(254) + e(259),
                XZJVV: e(997),
                VMyJX: function(s, d) {
                    return s(d)
                },
                NKBUI: e(1018) + "t",
                PqoTj: e(725),
                GgitL: e(799),
                FNMEd: function(s, d) {
                    return s(d)
                },
                KZCIz: e(448) + "x",
                VaPrU: e(1029),
                EZMaX: e(419),
                sIkuI: e(893),
                BSvPo: e(400) + e(813) + e(381),
                tcFPH: e(805),
                XaYXR: e(935) + e(463) + e(389) + e(1078) + e(508) + e(576) + e(745) + e(431) + e(752) + e(978) + e(275) + e(970) + e(586) + e(399) + e(1063) + e(1069) + e(360) + e(703) + e(385) + e(403) + e(757) + e(373) + e(324) + e(812) + e(828) + e(845) + e(560) + e(1046) + e(826) + e(456) + e(256) + e(977) + e(1015) + e(1001) + e(817) + e(678) + e(741) + e(440) + e(393) + e(784) + e(559) + e(740) + e(975) + e(1065) + e(296) + e(881) + e(441) + e(981) + e(932) + e(749) + e(488) + e(491) + e(661) + e(617) + e(754) + e(723) + e(426) + e(670) + e(505) + e(1091) + e(796) + e(534) + e(1022) + e(919) + e(688) + e(280) + e(401) + e(842) + e(607) + e(836) + e(1090) + e(648) + e(894) + e(581) + e(1081) + e(1057) + e(375) + e(359) + e(339) + e(609) + e(556) + e(391) + e(990) + e(325) + e(1055) + e(485) + e(523) + e(967) + e(1014) + e(1056) + e(727) + e(507) + e(811) + e(712) + e(1072) + e(950) + e(345) + e(432) + e(713) + e(837) + (e(694) + e(808) + e(307) + e(972) + e(865) + e(542) + e(618) + e(601) + e(744) + e(994) + e(530) + e(763) + e(779) + e(460) + e(774) + e(468) + e(293) + e(1028) + e(875) + e(367) + e(646) + e(761) + e(890) + e(462) + e(420) + e(353) + e(1035) + e(1076) + e(1043) + e(969) + e(490) + e(257) + e(739) + e(596) + e(406) + e(905) + e(386) + e(655) + e(871) + e(913) + e(960) + e(732) + e(803) + e(1020) + e(851) + e(320) + e(271) + e(748) + e(313) + e(675) + e(1009) + e(308) + e(489) + e(755) + e(365) + e(684) + e(258) + e(925) + e(335) + e(372) + e(889) + e(539) + e(411) + e(464) + e(1071) + e(1036) + e(746) + e(629) + e(707) + e(832) + e(662) + e(726) + e(302) + e(363) + e(519) + e(884) + e(344) + e(496) + e(301) + e(356) + e(498) + e(415) + e(424) + e(499) + e(679) + e(940) + e(531) + e(1040) + e(471) + e(1010) + e(569) + e(594) + e(548) + e(958) + e(333) + e(405) + e(838) + e(1017) + e(634) + e(863)) + (e(378) + e(625) + e(541) + e(443) + e(568) + e(553) + e(704) + e(263) + e(953) + e(711) + e(328) + e(866) + e(455) + e(1079) + e(963) + e(592) + e(390) + e(495) + e(834) + e(644) + e(742) + e(922) + e(552) + e(924) + e(916) + e(1053) + e(286) + e(792) + e(1054) + e(952) + e(588) + e(544) + e(821) + e(794) + e(595) + e(437) + e(762) + e(1073) + e(928) + e(342) + e(297) + e(606) + e(689) + e(274) + e(483) + e(769) + e(512) + e(901) + e(879) + e(700) + e(575) + e(658) + e(850) + e(636) + e(461) + e(323) + e(416) + e(957) + e(914) + e(751) + e(900) + e(445) + e(640) + e(1084) + e(282) + e(306) + e(656) + e(1024) + e(1062) + e(729) + e(619) + e(855) + e(999) + e(909) + e(602) + e(533) + e(701) + e(340) + e(291) + e(971) + e(540) + e(1080) + e(264) + e(338) + e(521) + e(756) + e(573) + e(599) + e(635) + e(939) + e(1038) + e(868) + e(583) + e(409) + e(270) + e(818) + e(504) + e(945) + e(572) + e(537)) + (e(966) + e(616) + e(698) + e(627) + e(844) + e(733) + e(407) + e(1087) + e(527) + e(777) + e(414) + e(434) + e(435) + e(835) + e(550) + e(715) + e(330) + e(1008) + e(885) + e(321) + e(797) + e(300) + e(337) + e(347) + e(892) + e(920) + e(720) + e(906) + e(278) + e(295) + e(603) + e(942) + e(825) + e(563) + e(993) + e(902) + e(699) + e(1033) + e(1094) + e(1067) + e(934) + e(891) + e(492) + e(266) + e(736) + e(305) + e(743) + e(789) + e(304) + e(473) + e(262) + e(657) + e(402) + e(930) + e(822) + e(450) + e(493) + e(482) + e(587) + e(361) + e(870) + e(425) + e(380) + e(509) + e(535) + e(984) + e(815) + e(303) + e(502) + e(721) + e(810) + e(506) + e(730) + e(878) + e(545) + e(660) + e(864) + e(734) + e(322) + e(589) + e(1058) + e(693) + e(368) + e(1019) + e(668) + e(858) + e(260) + e(397) + e(659) + e(412) + e(824) + e(251) + e(801) + e(665) + e(1098) + e(554) + e(624) + e(451) + e(474) + e(520)) + (e(294) + e(731) + e(666) + e(768) + e(638) + e(948) + e(1048) + e(1005) + e(429) + e(376) + e(938) + e(1099) + e(571) + e(350) + e(511) + e(1096) + e(692) + e(686) + e(326) + e(252) + e(427) + e(917) + e(987) + e(853) + e(630) + e(526) + e(510) + e(943) + e(1066) + e(1074) + e(329) + e(466) + e(458) + e(1027) + e(298) + e(1045) + e(654) + e(430) + e(814) + e(413) + e(944) + e(351) + e(371) + e(926) + e(645) + e(873) + e(501) + e(628) + e(336) + e(829) + e(604) + e(982) + e(1075) + e(314) + e(706) + e(773) + e(643) + e(897) + e(823) + e(1049) + e(1003) + e(1011) + e(676) + e(1011) + e(1082) + e(959) + e(946) + e(910) + e(786) + e(791) + e(1041) + e(600) + e(394) + e(454) + e(639) + e(357) + e(439) + e(522) + e(795) + e(766) + e(1086) + e(529) + e(318) + e(469) + e(1097) + e(408) + e(1089) + e(673) + e(992) + e(283) + e(632) + e(395) + e(1051) + e(880) + e(782) + e(776) + e(620) + e(807) + e(497) + e(480)) + (e(1061) + e(580) + e(861) + e(579) + e(593) + e(724) + e(874) + e(438) + e(549) + e(532) + e(798) + e(626)),
                APJVY: e(877),
                jIHDc: e(354),
                JWXgP: e(590) + "ck",
                IDMdC: e(1016),
                naGkn: e(956) + "n",
                MucII: e(998),
                eUssX: e(895),
                SJsOo: e(856)
            },
            [n, o] = t[e(802)](M, t[e(747)]),
            [r] = t[e(1031)](M, t[e(486)]),
            [i, a] = t[e(781)](M, t[e(714)]),
            [c, u] = t[e(255)](M, t[e(954)]),
            [l, f] = M(e(316) + "n"),
            [y, g] = M(t[e(436)]),
            [w, m] = t[e(641)](M, t[e(487)]),
            h = {};
        h[e(1088)] = e(819), h[e(387)] = t[e(669)], h[e(564)] = t[e(366)];
        let b = {};
        b[e(1042)] = h;
        let _ = {};
        return _[e(281)] = e(908) + e(442), _[e(518)] = t[e(778)], _[e(787)] = t[e(332)], React[e(809) + e(422)](Po.Settings, {
            defaultTabID: Ao,
            onTabChange: s => {
                Ao = s
            },
            header: React[e(809) + e(422)](React[e(876)], null, React[e(809) + e(422)](e(354), b, React[e(809) + e(422)](e(543), _, React[e(809) + e(422)](t[e(696)], {
                d: t[e(869)],
                fill: e(877),
                stroke: t[e(996)],
                strokeWidth: .35
            }))), React[e(809) + e(422)](t[e(1013)], {
                style: {
                    display: t[e(827)],
                    textAlign: e(1016),
                    float: t[e(1050)],
                    height: 48
                }
            }, React[e(809) + e(422)](e(354), {
                className: t[e(611)],
                onClick: () => p[e(903)]()
            }, e(349)), React[e(809) + e(422)](t[e(1013)], {
                className: t[e(611)],
                onClick: () => {
                    let s = e,
                        d = {
                            NWyRI: function(T, G, C) {
                                return t[B(388)](T, G, C)
                            }
                        };
                    t[s(1052)](t[s(650)], t[s(384)]) ? ua(t[s(392)], JSON[s(623)](p[s(585)]())) : d[s(820)](_0x2325fe, s(421) + "n", _0x5f00ef[s(623)](_0x3e14b5[s(585)]()))
                }
            }, t[e(918)]), React[e(809) + e(422)](t[e(1013)], {
                className: t[e(611)],
                onClick: () => fa()[e(622)](s => p[e(610)](JSON[e(671)](s)))
            }, e(311)))),
            tabs: [{
                name: t[e(614)],
                body: () => {
                    let s = e,
                        d = {
                            sHvbt: function(T, G) {
                                return t[B(667)](T, G)
                            },
                            YaHbT: function(T, G) {
                                return t[B(255)](T, G)
                            },
                            QYpGo: t[s(567)],
                            xRGIj: function(T) {
                                return T()
                            },
                            xvakS: t[s(961)],
                            UGIcx: function(T, G) {
                                return t[s(772)](T, G)
                            },
                            epRGb: function(T, G) {
                                return t[s(1052)](T, G)
                            },
                            Olqsw: t[s(1023)],
                            JTzGG: function(T, G) {
                                return t[s(255)](T, G)
                            },
                            SCQRN: t[s(783)],
                            QqEpq: function(T) {
                                return T()
                            },
                            ACAJn: function(T, G) {
                                return t[s(781)](T, G)
                            },
                            SCkqj: t[s(470)],
                            eTLbs: t[s(467)],
                            jCghS: function(T, G) {
                                return T === G
                            },
                            uAalI: t[s(831)],
                            enskM: function(T, G) {
                                return t[s(781)](T, G)
                            }
                        };
                    if (t[s(1052)](t[s(947)], t[s(947)])) d[s(608)](_0x37bbf8, -1) ? (_0x21ad6c[s(933) + s(728)][s(872)] = !1, d[s(862)](_0x2e2f39, d[s(290)])) : (_0x426c48[s(927)](s(478), _0xef3a35[s(933) + s(728)][s(872)]), d[s(277)](_0x2df9a6));
                    else {
                        let T = {};
                        T[s(1047)] = t[s(614)];
                        let G = {};
                        G[s(1047)] = t[s(472)];
                        let C = {};
                        C[s(1047)] = s(374) + s(346);
                        let v = {};
                        return v[s(1047)] = s(513) + Ye, React[s(809) + s(422)](React[s(876)], null, React[s(809) + s(422)](de.Set, T, React[s(809) + s(422)](qt.BindHolder, G, React[s(809) + s(422)](qt.Bind, {
                            bind: n,
                            setBind: S => {
                                let x = s,
                                    U = {
                                        KbVEu: d[x(383)],
                                        iSQms: function(J, D) {
                                            return d[x(883)](J, D)
                                        },
                                        hrNEe: x(562)
                                    };
                                if (d[x(637)](d[x(846)], x(642))) d[x(608)](S, 10001) ? d[x(1032)](alert, d[x(765)]) : o(S);
                                else {
                                    let J = _0x538ba3[x(809) + x(422)]("a");
                                    J[x(849) + "te"](U[x(1095)], U[x(288)](x(800) + x(785) + x(983), _0x38e8b7(_0x5c67ba))), J[x(849) + "te"](U[x(1085)], _0x3f4389), J[x(1042)][x(452)] = x(718), _0x1fae84[x(848)][x(847) + "d"](J), J[x(494)](), _0x18e0af[x(848)][x(459) + "d"](J)
                                }
                            },
                            reset: () => o(),
                            unbind: () => o(-1)
                        })), React[s(809) + s(422)](Re.Switch, {
                            title: s(631) + "n",
                            defaultChecked: r,
                            onChange: S => {
                                let x = s;
                                if (t[x(929)](n, -1)) S[x(933) + x(728)][x(872)] = !1, t[x(255)](alert, t[x(567)]);
                                else if (t[x(1002)](x(652), t[x(682)])) {
                                    _0x4baec1(_0x2cfc75[x(933) + x(728)][x(872)]);
                                    try {
                                        d[x(277)](_0x45c594)[x(1034)][x(991) + "s"](d[x(788)](_0x7aaf3d))
                                    } catch (U) {}
                                } else p[x(927)](t[x(486)], S[x(933) + x(728)][x(872)]), t[x(677)](gn)
                            }
                        }), React[s(809) + s(422)](Re.Switch, {
                            title: s(1093) + s(840),
                            description: s(276) + s(830) + s(985) + s(514) + s(915) + s(931) + s(760) + s(764) + s(615) + s(398) + s(941) + s(348) + s(612) + s(536) + s(716) + s(565) + s(1030) + s(1004) + s(582) + s(605) + s(312) + s(285) + s(767) + s(289) + s(758) + s(1060) + s(962),
                            checked: c,
                            onChange: S => {
                                let x = s,
                                    U = {
                                        VaYJy: function(J, D) {
                                            return d[B(396)](J, D)
                                        },
                                        LjNwR: d[x(770)]
                                    };
                                if (d[x(637)](d[x(841)], d[x(841)])) {
                                    U[x(261)](_0x33b018, new _0x55d1d0(U[x(382)]));
                                    return
                                } else d[x(1032)](confirm, x(315) + x(860) + x(790) + x(735) + x(708) + x(528) + x(364) + x(253) + x(267) + x(591) + x(759) + x(546) + x(284) + x(651) + x(1025) + x(272) + x(664) + x(980) + x(292) + x(1100) + x(859) + x(936) + x(484) + x(691) + x(310) + x(524) + x(719) + x(1083) + "d?") && (d[x(577)](d[x(341)], x(887)) ? d[x(449)](u, S[x(933) + x(728)][x(872)]) : _0x5225d4(_0x3dc38f[x(933) + x(728)][x(872)]))
                            }
                        }), React[s(809) + s(422)](ho, null), React[s(809) + s(422)](vo, null)), React[s(809) + s(422)](de.HeadlessSet, null, React[s(809) + s(422)](dn.Link, {
                            title: t[s(517)],
                            href: wn
                        }), React[s(809) + s(422)](dn.Link, {
                            title: t[s(833)],
                            href: rt
                        }), React[s(809) + s(422)](mn.Control, C), React[s(809) + s(422)](mn.Control, v)))
                    }
                }
            }, {
                name: t[e(446)],
                body: () => {
                    let s = e,
                        d = {
                            fbJbm: function(T, G) {
                                return t[B(781)](T, G)
                            },
                            VETkj: function(T, G) {
                                return t[B(1002)](T, G)
                            },
                            bMSmZ: t[s(470)],
                            oBjRi: s(989),
                            QTmQg: t[s(377)]
                        };
                    if (t[s(1052)](t[s(685)], s(516))) {
                        let T = {
                                cHmsT: function(S, x) {
                                    return d[s(1068)](S, x)
                                },
                                SAjrD: s(1039) + s(331)
                            },
                            G = _0x3582d7[s(888)];
                        if (!G[s(343)] || d[s(907)](G[s(343)][s(547)], 0)) {
                            _0xd7bd9d(new _0x31d4d9(d[s(663)]));
                            return
                        }
                        let C = G[s(343)][0],
                            v = new _0x42b258;
                        v[s(299) + s(481)](d[s(1077)], S => {
                            var J;
                            let x = s,
                                U = (J = S[x(888)]) == null ? void 0 : J[x(995)];
                            T[x(287)](_0x41840d, U)
                        }), v[s(299) + s(481)](d[s(1070)], S => {
                            var U;
                            let x = s;
                            _0xb47416(((U = S[x(888)]) == null ? void 0 : U[x(854)]) || new _0xb42375(T[x(566)]))
                        }), v[s(1012)](C), _0x3eb143[s(279) + s(477)](s(358), _0x4222ac), _0x27935e[s(369)]()
                    } else return React[s(809) + s(422)](oo, null)
                }
            }, {
                name: t[e(705)],
                body: () => {
                    let s = e,
                        d = {
                            zolil: function(T) {
                                return t[B(896)](T)
                            },
                            fkspH: function(T) {
                                return t[B(896)](T)
                            },
                            sfcRA: t[s(525)],
                            kkSQz: function(T, G) {
                                return t[s(781)](T, G)
                            },
                            ZwVSq: function(T) {
                                return t[s(557)](T)
                            }
                        };
                    if (t[s(929)](t[s(1006)], t[s(709)])) t[s(621)](_0x507653)[s(937)][s(979) + s(259)](t[s(955)](_0x18d17f));
                    else {
                        let T = {};
                        return T[s(1047)] = t[s(717)], React[s(809) + s(422)](React[s(876)], null, React[s(809) + s(422)](de.HeadlessSet, null, React[s(809) + s(422)](Re.Switch, {
                            title: s(750) + "on",
                            description: s(433) + s(475) + s(268),
                            defaultChecked: l,
                            onChange: G => {
                                let C = s,
                                    v = {
                                        ttMdn: function(S, x) {
                                            return S(x)
                                        },
                                        oiVae: C(799),
                                        vqzhG: function(S) {
                                            return d[C(503)](S)
                                        },
                                        lHssz: function(S) {
                                            return d[C(1e3)](S)
                                        }
                                    };
                                if (d[C(479)] === d[C(479)]) {
                                    d[C(515)](f, G[C(933) + C(728)][C(872)]);
                                    try {
                                        d[C(973)](I)[C(1034)][C(991) + "s"](L())
                                    } catch (S) {}
                                } else if (v[C(857)](_0x579ad1, _0x177b5d[C(933) + C(728)][C(561)]), _0x518e2a[C(728)](v[C(465)])) try {
                                    v[C(882)](_0x383e34)[C(937)][C(979) + C(259)](v[C(352)](_0x148582))
                                } catch (S) {}
                            }
                        }), React[s(809) + s(422)](qn, null)), React[s(809) + s(422)](de.Set, T, React[s(809) + s(422)](ao, null), React[s(809) + s(422)](xo, null)))
                    }
                }
            }, {
                name: e(598),
                body: () => {
                    let s = e,
                        d = {
                            kTZTp: t[s(309)],
                            NpbGX: function(C, v) {
                                return t[s(802)](C, v)
                            },
                            QtHBO: function(C, v) {
                                return t[s(1052)](C, v)
                            },
                            wlkaB: s(1044),
                            zxnTp: function(C, v) {
                                return t[s(781)](C, v)
                            },
                            JQzEM: s(965),
                            EfMpw: function(C) {
                                return t[s(444)](C)
                            }
                        },
                        T = {};
                    T[s(1047)] = s(334);
                    let G = {};
                    return G[s(1047)] = s(775), React[s(809) + s(422)](React[s(876)], null, React[s(809) + s(422)](de.HeadlessSet, null, React[s(809) + s(422)](yo, null), React[s(809) + s(422)](Re.Switch, {
                        title: t[s(771)],
                        defaultChecked: i,
                        onChange: C => a(C[s(933) + s(728)][s(872)])
                    })), React[s(809) + s(422)](de.Set, T, React[s(809) + s(422)](Ho.ColorPicker, {
                        title: t[s(327)],
                        description: t[s(898)],
                        defaultValue: w,
                        onChange: C => {
                            var S, x;
                            let v = s;
                            if (d[v(904)](d[v(780)], v(379))) {
                                if (d[v(738)](m, C[v(933) + v(728)][v(561)]), p[v(728)](v(799))) try {
                                    d[v(904)](d[v(687)], d[v(687)]) ? _0x2418d3(((S = _0x51d498[v(888)]) == null ? void 0 : S[v(854)]) || new _0x5bbb4b(d[v(423)])) : z()[v(937)][v(979) + v(259)](d[v(551)](Xt))
                                } catch (U) {}
                            } else {
                                let U = (x = _0x5c9b2a[v(888)]) == null ? void 0 : x[v(995)];
                                d[v(647)](_0x25226f, U)
                            }
                        }
                    }), React[s(809) + s(422)](Re.Switch, {
                        title: s(690) + s(319),
                        description: t[s(898)],
                        defaultChecked: y,
                        onChange: C => {
                            let v = s;
                            t[v(802)](g, C[v(933) + v(728)][v(872)]);
                            try {
                                t[v(557)](z)[v(937)][v(979) + v(259)](Xt())
                            } catch (S) {}
                        }
                    })), React[s(809) + s(422)](de.Set, G, React[s(809) + s(422)](so, null)))
                }
            }]
        })
    }
    var No = E(Oo(), 1);
    (function(e, t) {
        let n = le,
            o = e();
        for (;;) try {
            if (parseInt(n(270)) / 1 + -parseInt(n(232)) / 2 * (-parseInt(n(268)) / 3) + parseInt(n(251)) / 4 + -parseInt(n(235)) / 5 + parseInt(n(249)) / 6 * (parseInt(n(220)) / 7) + parseInt(n(267)) / 8 * (-parseInt(n(253)) / 9) + -parseInt(n(269)) / 10 * (-parseInt(n(239)) / 11) === t) break;
            o.push(o.shift())
        } catch (r) {
            o.push(o.shift())
        }
    })(St, 341878);

    function le(e, t) {
        let n = St();
        return le = function(o, r) {
            o = o - 194;
            let i = n[o];
            if (le.eqMzNm === void 0) {
                var a = function(f) {
                    let y = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=",
                        g = "",
                        w = "";
                    for (let m = 0, h, b, _ = 0; b = f.charAt(_++); ~b && (h = m % 4 ? h * 64 + b : b, m++ % 4) ? g += String.fromCharCode(255 & h >> (-2 * m & 6)) : 0) b = y.indexOf(b);
                    for (let m = 0, h = g.length; m < h; m++) w += "%" + ("00" + g.charCodeAt(m).toString(16)).slice(-2);
                    return decodeURIComponent(w)
                };
                le.FRsGBF = a, e = arguments, le.eqMzNm = !0
            }
            let c = n[0],
                u = o + c,
                l = e[u];
            return l ? i = l : (i = le.FRsGBF(i), e[u] = i), i
        }, le(e, t)
    }

    function St() {
        let e = ["psjJB2XVCJOGiW", "y2XPy2S", "zgLZCgXHEq", "zgL2ignSyxnZpq", "zMjMzJaWiJ5Lza", "mtjcrgXyv28", "ywrKrxzLBNrmAq", "mJG2mte2CMHiwuPe", "z2vU", "mZz3CvrXtMK", "C3r5Bgu", "D2LKDgG", "Awj1Dgu", "BwvUDuj1DhrVBG", "Axq8l3nWyw4+pa", "iIbVBM1VDxnLzq", "vKvJCei", "EvnLBgvJDcGPiG", "C3rPy2T5", "C3rLBMvY", "BMvKig1LBKj0BG", "y2XPy2S9iNbSyq", "BvD3zgu", "nJa1nJG4zwzNy2Pw", "mtm4odG1t3rbz1j3", "mty4mtm3mffxtxjyAW", "nduYmdvOufjduuW", "AxrSzsi+u2TLDa", "BwvUDuTLEq", "y29UCY1VDxrSAq", "swnUiIbZDhLSzq", "pgrPDIbJBgfZCW", "yxvSDa", "CMvTB3zLqxr0CG", "Ae1LBNuIpJXZCa", "y2G8l2rPDJ48lW", "vgLJAYGPiIbVBG", "BM9Uzq", "y3jLyxrLrwXLBq", "igLKpsjZA2v0yW", "Bxb6A2O", "D3Ppvu0", "zxHPDfbVAw50zq", "yw4Gy2XHC3m9iG", "Bwf0zxjPywWTAq", "zM9Yy2vty3jVBa", "ChjLDMvUDerLzG", "z2v0", "z2v0rwXLBwvUDa", "AgvHzgvY", "ChvZAa", "Cg9WDxa", "AgvPz2H0", "BNrLCJ0ICgXHEq", "mteYnJKZsMnruM5d", "zgL2pG", "C2TLDgnOtwvUDq", "qNLjza", "zw50", "i21LBNvjDgvTqW", "vLfdtNO", "C2TLDgnO", "uurTywW", "mtaWjq", "B250ywLUzxi", "z1fIv2u", "nMzQtfHkAW", "iM1LBNvjDgvTva", "psjTzw51sxrLBq", "nZm3ntmWqwPiBfbn", "Dg9Y", "BgfIzwW", "CxvLCNLtzwXLyW", "mZnhA3jptMe", "AwjPz0K", "Aw5Uzxjive1m", "CKXVy2S", "venLwLa"];
        return St = function() {
            return e
        }, St()
    }

    function Yo() {
        let e = le,
            t = {
                wzOUM: function(a, c) {
                    return a(c)
                },
                QDmal: e(229)
            },
            n = t[e(207)](No.createRenderContainer, () => React[e(204) + e(224)](hn, null)),
            o = {};
        o[e(215)] = "\u270F\uFE0F", o[e(237)] = e(227), o[e(255)] = 1100, o[e(218)] = t[e(228)], o[e(217)] = !0, o[e(262)] = !0, o[e(211) + "l"] = !0, o[e(252)] = () => n;
        let r = o,
            i = windows[0];
        windows[0] = r, showWindow(1), windows[0] = i
    }
    var Qe;

    function gn() {
        let e = le;
        Qe && (Qe[e(254)][e(246)] = p[e(213)](e(257)) ? "" : e(203))
    }

    function jo() {
        let e = le,
            t = {
                VEcpB: e(194),
                ibigI: function(o, r) {
                    return o !== r
                },
                TCeZP: function(o, r) {
                    return o === r
                },
                mpzkj: function(o) {
                    return o()
                },
                VQCNz: e(225) + e(230),
                gQbWe: e(222),
                mWwde: e(245)
            },
            n = document[e(238) + e(236)](t[e(226)]);
        n && (n[e(241)] += e(197) + e(234) + e(259) + e(219) + e(202) + e(265) + e(261) + e(205) + e(200) + e(209) + e(210) + e(195) + e(264) + e(196) + e(244) + e(248) + e(258) + e(247) + e(233) + e(271) + e(201) + e(221)), Qe = document[e(214) + e(223)](t[e(231)]), Qe[e(199) + e(256)]("id"), Qe[e(250) + e(263)](t[e(266)], Yo), t[e(206)](gn), un[e(216)]((o, r, i) => {
            let a = e,
                c = p[a(213)](t[a(260)]);
            t[a(240)](c, -1) && t[a(243)](r, c) && i && (o[a(212) + a(198)](), document[a(208) + a(242)](), t[a(206)](Yo))
        })
    }
    var Ko = new Set;

    function Xo() {
        $.push(() => {
            let e = I(),
                t = !1,
                n = {};
            for (let o of e.players.list) o.name === `Guest_${o.sid}` || o.name === `Anonymous_${o.sid}` || o.name === `Player_${o.sid}` || !o.accid || Ko.has(o.accid) || (n[o.accid] = [o.name, o.level], Ko.add(o.accid), t = !0);
            t && fetch(new URL("to", xe), {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(n)
            }).catch(o => {
                K && console.error(o)
            })
        })
    }
    yn();
    (function(e, t) {
        let n = te,
            o = e();
        for (;;) try {
            if (parseInt(n(262)) / 1 + parseInt(n(256)) / 2 + parseInt(n(218)) / 3 * (parseInt(n(198)) / 4) + parseInt(n(221)) / 5 + parseInt(n(227)) / 6 * (parseInt(n(252)) / 7) + -parseInt(n(251)) / 8 + -parseInt(n(237)) / 9 === t) break;
            o.push(o.shift())
        } catch (r) {
            o.push(o.shift())
        }
    })(Dt, 529134);

    function Dt() {
        let e = ["Dg9W", "odK5otqXnxDWrwzksa", "Aw9U", "BuzVug8", "B3v0zgf0zwq", "C2TLDgnOvxbKyq", "zgL2", "zgvSzxrL", "AgvPz2H0", "EgT0y3y", "sgHTENu", "ruTTzgC", "AgL2t2O", "z2zHthK", "Cgf0Ag5HBwu", "mZm4otiWmgzltK9LBW", "mtrerwnVwMq", "CgfKzgLUzW", "lMv4DhjHy3qO", "vuHQrhu", "odC4mZu0B2vJDuny", "rvLIDg4", "lNrTCc5ZAg93rG", "i3nOB3DvCgrHDa", "C2vHCMnO", "D2f0zxjTyxjR", "nJe3mteXC2veswPx", "D2HPDgu", "yMfJA2DYB3vUza", "z2v0ugXHEwvYvW", "BMfTzxrHz3m", "Cg9ZAxrPB24", "AgTdEwK", "zML4zwq", "DxrLvwi", "zMLSBa", "uhLoBMm", "DgvK", "vNzQBfq", "lM5HBwv0ywDZkq", "C2TLDgnOvMvYCW", "y2vZkxTPzIG", "mtaWDNC", "lM9IAKLUC3rHBG", "z2v0", "C2LSzw50rMfPBa", "B3zLCMXHEq", "z3PUD0q", "DgL0Bgu", "ufmPE2zVCIG", "EKLUzgv4", "zwfWB25jza", "zMvNBvy", "lMW9Dhj1zsW", "zg9JDw1LBNrfBa", "reLz", "AwyO", "y0XXExC", "CM9VDa", "DgHLBG", "sNfPzu8", "C3r5Bgu", "lNDHDgvYBwfYAW", "CMvUzgvY", "s1bkqwW", "mJG2ntG4sev3ueXV", "sgH5CgO", "zxHWB3j0CW", "mtaWDMG", "Bgf0zxn0vMvYCW", "zw50", "yxbWzw5K", "AgfZAa", "CK5vz0W", "CMvWBgfJzq", "y3jLyxrLrwXLBq", "ohb4", "CMvWBgfJzvn0yq", "DKX0Awe", "tvDiuMe", "zhrOEfy", "BM9bzhngB3znBa", "ks5HzhngB3y", "yNnuv0G", "senmEwy", "nM1is2vssG", "BgvMDa", "q29SB3i", "mZaYmJa0nxPWs0fnBa", "turouxq", "DeTmt1K", "yxnZAwDU", "lMLZww91jIy", "zw1LBNq", "ndq2mtG0vfzzu0Hl", "lMnHBKjtzwvUFa", "D2LKDgG", "lM5VqwrZrM92pW", "tervshq", "zeDNrfO", "DxbKyxrLvvjm", "svfjruC", "BwLhuMm"];
        return Dt = function() {
            return e
        }, Dt()
    }

    function te(e, t) {
        let n = Dt();
        return te = function(o, r) {
            o = o - 177;
            let i = n[o];
            if (te.UBxlJG === void 0) {
                var a = function(f) {
                    let y = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=",
                        g = "",
                        w = "";
                    for (let m = 0, h, b, _ = 0; b = f.charAt(_++); ~b && (h = m % 4 ? h * 64 + b : b, m++ % 4) ? g += String.fromCharCode(255 & h >> (-2 * m & 6)) : 0) b = y.indexOf(b);
                    for (let m = 0, h = g.length; m < h; m++) w += "%" + ("00" + g.charCodeAt(m).toString(16)).slice(-2);
                    return decodeURIComponent(w)
                };
                te.uqlnwS = a, e = arguments, te.UBxlJG = !0
            }
            let c = n[0],
                u = o + c,
                l = e[u];
            return l ? i = l : (i = te.uqlnwS(i), e[u] = i), i
        }, te(e, t)
    }
    Xn(), ro(), no(), io(), On(), lo(), po(), mo(), kn(), Co(), Xo();
    var ga = (e, t) => {
        let n = te,
            o = {
                gznwD: n(266),
                vLtia: n(247),
                VvjlT: n(178),
                hivOj: function(i) {
                    return i()
                },
                hkCyi: n(261),
                mFoPo: n(199),
                fegmV: function(i) {
                    return i()
                },
                dthxV: n(190),
                MDNQt: function(i, a) {
                    return i(a)
                }
            };
        t = t[n(207)](/(\w+)\.l=!0,\1\.exports/, (i, a) => a + n(186) + e + n(254) + a + ")"), t = t[n(207)](/!(\w+)\.isYou&&\1\.objInstances\){if\(\1\.canBSeen\){/, (i, a) => "!" + a + n(225) + a + (n(279) + n(277)) + a + (n(228) + "|") + e + (n(275) + "{")), t = t[n(207)](/if\((\w+)\.tmp\.showFPS\)\{for\(/, (i, a) => n(189) + e + (n(195) + "||") + a + (n(258) + n(182))), t = t[n(207)](/\*(\w+)\.adsFov/g, (i, a) => "*(" + e + n(230) + e + ":" + a + n(215));
        let r = [...o[n(222)](Array, 64)][n(271)](0);
        return {
            data: {
                get watermark() {
                    let i = n;
                    return p[i(177)](i(261))
                },
                get noAdsFov() {
                    let i = n;
                    return o[i(211)] === o[i(211)] ? p[i(177)](i(214) + "t") : _0xe5ee63[i(177)](o[i(180)])
                },
                get adsFov() {
                    let i = n;
                    if (i(193) === o[i(239)]) return _0x5797da[i(177)](o[i(274)]) ? void 0 : o[i(248)](_0x470de0)[i(191)][i(196)](_0x29e36c[i(208) + i(203)](_0x25ed8e, null));
                    try {
                        let a = [];
                        return a[o[i(185)](z)[i(265) + i(184)](o[i(248)](L))] = 0, a
                    } catch (a) {
                        return i(245) !== o[i(213)] ? r : _0x9ecae5[i(177)](o[i(268)])
                    }
                },
                extract: i => {
                    let a = n;
                    return Sn(i), i[a(200)]
                },
                get nametags() {
                    let i = n;
                    return p[i(177)](o[i(180)])
                }
            },
            src: t
        }
    };
    Tn && (pa(), ya());

    function Zo() {
        let e = te,
            t = {
                PyNnc: e(242),
                dGgDZ: e(269),
                bsTWH: e(201),
                uteUb: e(263),
                gfaLy: e(209),
                Hhmzu: function(a, c) {
                    return a(c)
                },
                EYbtn: function(a, c, u) {
                    return a(c, u)
                }
            },
            n = document[e(208) + e(203)](t[e(272)]),
            o = {};
        o[e(267)] = t[e(232)], o[e(236)] = "0", o[e(219)] = "0", o[e(229)] = e(278), o[e(244)] = t[e(216)], o[e(264) + e(220)] = t[e(270)], o[e(183)] = "1000000000", o[e(253)] = t[e(249)], Object[e(224)](n[e(194)], o);
        let r = t[e(246)](pn, n);
        t[e(257)](Mn, () => document[e(187) + e(226)], 10)[e(192)](a => a[e(204)](n));
        let i = {};
        return i[e(191)] = r, i[e(179)] = n, i
    }

    function pa() {
        let e = te,
            t = {};
        t[e(217)] = function(r, i) {
            return r === i
        }, t[e(206)] = e(178), t[e(234)] = function(r, i) {
            return r + i
        };
        let n = t,
            o = location[e(205)];
        n[e(217)](o, e(259) + "es") && (p[e(243)](n[e(206)]), history[e(210) + "te"]("", document[e(181)], n[e(234)](location[e(250)], location[e(260)])))
    }
    async function ya() {
        let e = te,
            t = {
                miGRc: function(o) {
                    return o()
                },
                LDUHt: e(178),
                UHjDu: function(o) {
                    return o()
                },
                MWHRa: function(o, r) {
                    return o !== r
                },
                tKLOY: e(197)
            },
            n = await Se[e(276) + e(238)](Ye, Lt);
        if (n[e(240)]) {
            if (p[e(177)](t[e(231)])) return xn();
            let o = {};
            return o[e(202) + e(238)] = n[e(202) + e(238)], o[e(233)] = n[e(233)], t[e(235)](Zo)[e(191)][e(196)](React[e(208) + e(203)](an, o))
        }
        if (!n[e(241) + e(273)]) return p[e(177)](t[e(231)]) ? void 0 : t[e(255)](Zo)[e(191)][e(196)](React[e(208) + e(203)](rn, null));
        for (;;)
            if (t[e(212)](t[e(223)], t[e(223)])) {
                let o = [];
                return o[_0x125cd1()[e(265) + e(184)](t[e(235)](_0x57a68b))] = 0, o
            } else {
                let o = new Se,
                    r = await _o(o, ga);
                if (r === Ge[e(188)]) return;
                await Uo, jo(), r();
                break
            }
    }
})();
