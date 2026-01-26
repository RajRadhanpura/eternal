(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/eternaln/app/components/Animations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Animations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Animations() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Animations.useEffect": ()=>{
            // Register plugin safely
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            /* =========================
       MEGA MENU
    ========================== */ const menuBtn = document.getElementById("menuBtn");
            const megaMenu = document.getElementById("megaMenu");
            const menuPanel = document.getElementById("menuPanel");
            const menuClose = document.getElementById("menuClose");
            const menuBackdrop = document.getElementById("menuBackdrop");
            const menuItems = document.querySelectorAll("#megaMenu .menu-item");
            const labsBtn = document.querySelector("#megaMenu .labs-btn");
            if (!menuBtn || !megaMenu || !menuPanel || !menuClose || !menuBackdrop) return;
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                paused: true
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(megaMenu, {
                autoAlpha: 0,
                pointerEvents: "none"
            });
            tl.to(megaMenu, {
                autoAlpha: 1,
                pointerEvents: "auto",
                duration: 0
            }).from(menuPanel, {
                y: 40,
                opacity: 0,
                duration: 0.36,
                ease: "power2.out"
            }).from(menuItems, {
                y: 12,
                opacity: 0,
                stagger: 0.06,
                duration: 0.22
            }, "-=0.2").from(labsBtn, {
                y: 12,
                opacity: 0,
                duration: 0.18
            }, "-=0.2");
            const openMenu = {
                "Animations.useEffect.openMenu": ()=>tl.play(0)
            }["Animations.useEffect.openMenu"];
            const closeMenu = {
                "Animations.useEffect.closeMenu": ()=>tl.reverse()
            }["Animations.useEffect.closeMenu"];
            menuBtn.addEventListener("click", openMenu);
            menuClose.addEventListener("click", closeMenu);
            menuBackdrop.addEventListener("click", closeMenu);
            const onKeyDown = {
                "Animations.useEffect.onKeyDown": (e)=>{
                    if (e.key === "Escape") closeMenu();
                }
            }["Animations.useEffect.onKeyDown"];
            window.addEventListener("keydown", onKeyDown);
            tl.eventCallback("onReverseComplete", {
                "Animations.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(megaMenu, {
                        pointerEvents: "none"
                    });
                }
            }["Animations.useEffect"]);
            /* =========================
       HERO WORD SPLIT
    ========================== */ const hero = document.getElementById("heroTitle");
            if (hero) {
                const words = hero.textContent?.trim().split(/\s+/) || [];
                hero.innerHTML = words.map({
                    "Animations.useEffect": (w)=>`<span class="hero-word inline-block mr-2">${w}</span>`
                }["Animations.useEffect"]).join(" ");
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".hero-word", {
                    y: 18,
                    opacity: 0
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".hero-word", {
                    y: 0,
                    opacity: 1,
                    stagger: 0.05,
                    duration: 0.6,
                    ease: "power3.out",
                    delay: 0.18
                });
            }
            /* =========================
       BIG HERO SCROLL
    ========================== */ const bigSection = document.querySelector("section.min-h-screen");
            const firstLine = bigSection?.querySelector("h1");
            if (bigSection && firstLine) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(firstLine, {
                    x: "20%",
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: bigSection,
                        start: "top 70%",
                        end: "bottom top"
                    }
                });
            }
            /* =========================
       SHOWCASE REVEAL
    ========================== */ const section = document.getElementById("showcase");
            const img = document.getElementById("showcaseImage");
            const content = document.getElementById("showcaseContent");
            if (section) {
                if (img) __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(img, {
                    y: -40,
                    opacity: 0
                });
                if (content) __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(content, {
                    y: 24,
                    opacity: 0
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                    trigger: section,
                    start: "top 80%",
                    onEnter: {
                        "Animations.useEffect": ()=>{
                            const t = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
                            if (img) t.to(img, {
                                y: 0,
                                opacity: 1,
                                duration: 0.8,
                                ease: "power3.out"
                            });
                            if (content) t.to(content, {
                                y: 0,
                                opacity: 1,
                                duration: 0.8,
                                ease: "power3.out"
                            }, "-=0.5");
                        }
                    }["Animations.useEffect"]
                });
            }
            /* =========================
       CLEANUP
    ========================== */ return ({
                "Animations.useEffect": ()=>{
                    window.removeEventListener("keydown", onKeyDown);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                        "Animations.useEffect": (t)=>t.kill()
                    }["Animations.useEffect"]);
                    tl.kill();
                }
            })["Animations.useEffect"];
        }
    }["Animations.useEffect"], []);
    return null; // this component only runs animations
}
_s(Animations, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Animations;
var _c;
__turbopack_context__.k.register(_c, "Animations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/eternaln/app/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Header() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-12xl mx-auto px-10 grid items-center gap-6 grid-cols-[250px_1fr_260px] md:grid-cols-[250px_1fr_250px] sm:grid-cols-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl font-extrabold tracking-wider",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/logo.webp",
                            alt: "Logo",
                            width: 150,
                            height: 80
                        }, void 0, false, {
                            fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            id: "heroTitle",
                            className: "font-light leading-[1.2] text-[clamp(22px,2.2vw,40px)] w-[35vw]",
                            children: [
                                "Premium Ceramic tiles & ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                                    lineNumber: 24,
                                    columnNumber: 37
                                }, this),
                                " bathware in Sharjah"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex justify-end items-center w-full space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "talkBtn",
                                className: "bg-[#1f2937] text-white rounded-full px-6 py-3 font-semibold shadow-md min-w-[190px] flex items-center justify-center gap-3",
                                children: [
                                    "LET'S TALK",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 bg-white rounded-full opacity-90"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "menuBtn",
                                className: "rounded-full px-4 py-2 bg-white flex items-center gap-2",
                                onClick: ()=>setIsMenuOpen(true),
                                children: [
                                    "MENU ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "••"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                                        lineNumber: 43,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-50 transition-all duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/30",
                        onClick: ()=>setIsMenuOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute top-30 right-4 md:right-4 lg:right-4 w-full max-w-sm md:max-w-[380px] mx-auto md:mx-0 px-4 transition-all duration-300 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0 pointer-events-none"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl p-6 shadow-lg relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-label": "Close menu",
                                        className: "absolute top-4 right-4 bg-white px-3 py-2 rounded-full text-sm hover:bg-gray-100 transition",
                                        onClick: ()=>setIsMenuOpen(false),
                                        children: "CLOSE"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "mt-5 flex flex-col gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "menu-item font-light py-4 border-b border-gray-800 hover:opacity-60 transition",
                                                children: [
                                                    "HOME ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 bg-black rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 24
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "menu-item font-light py-4 border-b border-gray-800 hover:opacity-60 transition",
                                                children: [
                                                    "ABOUT US ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 bg-black rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "menu-item font-light py-4 border-b border-gray-800 hover:opacity-60 transition",
                                                children: [
                                                    "PROJECTS ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 bg-black rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "menu-item font-light py-4 border-b border-gray-800 hover:opacity-60 transition",
                                                children: [
                                                    "CONTACT ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 bg-black rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/eternaln/app/components/Header.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(Header, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/eternaln/app/components/Loader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Loader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Loader() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Loader.useEffect": ()=>{
            const onesColumn = document.querySelector(".third-counter");
            const tensColumn = document.querySelector(".second-counter");
            const hundredsColumn = document.querySelector(".first-counter");
            if (!onesColumn || !tensColumn || !hundredsColumn) return;
            function buildColumn(counterEl, digits) {
                counterEl.innerHTML = "";
                for (const d of digits){
                    const div = document.createElement("div");
                    div.className = "num";
                    div.textContent = d;
                    counterEl.appendChild(div);
                }
                const tail = document.createElement("div");
                tail.className = "num";
                tail.textContent = digits[0];
                counterEl.appendChild(tail);
            }
            buildColumn(hundredsColumn, [
                0,
                1
            ]);
            buildColumn(tensColumn, [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ]);
            buildColumn(onesColumn, [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ]);
            const digitHeight = onesColumn.querySelector(".num")?.getBoundingClientRect().height || 0;
            if (!digitHeight) return;
            const path = document.querySelector(".inf-path");
            let pathLength = 0;
            if (path) {
                pathLength = path.getTotalLength();
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(path, {
                    strokeDasharray: pathLength,
                    strokeDashoffset: pathLength,
                    fill: "none"
                });
            }
            const setOnesY = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickSetter(onesColumn, "y", "px");
            const setTensY = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickSetter(tensColumn, "y", "px");
            const setHundredsY = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickSetter(hundredsColumn, "y", "px");
            const setDash = path ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickSetter(path, "strokeDashoffset", "px") : null;
            const progress = {
                value: 0
            };
            const MASTER_DURATION = 5;
            function render(v) {
                const clamped = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.clamp(0, 100, v);
                const ones = clamped % 10;
                const tens = clamped / 10 % 10;
                const hundreds = clamped / 100;
                setOnesY(-ones * digitHeight);
                setTensY(-tens * digitHeight);
                setHundredsY(-hundreds * digitHeight);
                if (setDash && pathLength) {
                    setDash(pathLength * (1 - clamped / 100));
                }
            }
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
            render(0);
            tl.to(progress, {
                value: 100,
                duration: MASTER_DURATION,
                ease: "power3.inOut",
                onUpdate: {
                    "Loader.useEffect": ()=>render(progress.value)
                }["Loader.useEffect"],
                onStart: {
                    "Loader.useEffect": ()=>render(0)
                }["Loader.useEffect"]
            });
            tl.to(".chrono-counter", {
                y: -150,
                opacity: 0,
                duration: 0.7,
                ease: "power4.inOut"
            });
            tl.to(".loader", {
                background: "none",
                duration: 0.1
            });
            tl.to(".loader", {
                scale: 80,
                duration: 1,
                ease: "power4.inOut"
            });
            // tl.to(".loading", {
            //   opacity: 0,
            //   duration: 0.6,
            //   onComplete: () => {
            //     document.querySelector(".loading")?.classList.add("not-active");
            //   },
            // });
            tl.to(".loading", {
                opacity: 0,
                duration: 0.6,
                onComplete: {
                    "Loader.useEffect": ()=>{
                        const loader = document.querySelector(".loading");
                        if (loader) {
                            loader.style.display = "none"; // 👈 fully removes overlay
                        }
                    }
                }["Loader.useEffect"]
            });
            return ({
                "Loader.useEffect": ()=>{
                    tl.kill();
                }
            })["Loader.useEffect"];
        }
    }["Loader.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "loading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "loader",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "infinity",
                    viewBox: "0 0 15478.62 15165",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: "inf-path",
                        d: "M4408.36 7203.6l1272.59 20.52c328.4,-20.52 738.92,20.52 779.96,431.04 20.52,123.16 0,246.3 -102.62,348.94 -143.68,164.2 -369.46,184.72 -595.24,205.25l0 0 -1334.16 0 0 0c-1067.33,-123.15 -1826.77,-266.83 -2709.37,-964.7 -821.02,-656.82 -1436.79,-1580.46 -1642.04,-2647.79 -184.73,-923.64 -41.06,-1929.4 451.56,-2770.94 410.5,-677.34 1005.74,-1211 1724.14,-1518.89 1169.96,-492.61 2524.64,-369.46 3612.49,205.26 1026.28,554.19 1724.14,1395.74 2093.6,2504.11 287.36,862.07 328.41,1744.67 328.41,2627.27l-102.63 3263.55 0 0c0,205.26 20.53,431.04 0,636.29 0,1457.3 102.63,2709.36 1231.53,3735.64 903.12,821.02 2257.81,1149.43 3427.77,677.34 574.71,-246.3 1026.27,-656.82 1313.62,-1211 184.73,-328.41 287.36,-697.87 328.41,-1067.33 143.68,-1477.84 -800.5,-2873.57 -2134.65,-3427.76 -205.26,-102.62 -389.98,-184.73 -389.98,-513.14 0,-266.84 225.78,-492.62 492.61,-492.62 123.16,0 184.73,20.53 184.73,41.06 410.5,143.68 800.5,369.46 1190.48,677.34 821.02,656.82 1395.74,1600.99 1580.46,2647.79 164.21,903.12 41.06,1908.87 -451.56,2729.89 -595.24,944.18 -1477.84,1580.46 -2565.69,1765.19 -944.17,164.2 -1949.92,-20.52 -2770.94,-472.09 -1026.28,-554.18 -1724.14,-1375.2 -2093.6,-2483.58 -287.36,-841.55 -348.94,-1744.67 -328.41,-2647.79 20.52,-431.04 0,-862.07 20.52,-1293.11 41.06,-431.03 20.53,-882.6 41.06,-1313.62 20.52,-102.63 0,-205.26 0,-307.89 0,-123.15 20.52,-225.78 20.52,-328.4 20.53,-205.26 0,-431.04 0,-636.29 20.53,-677.34 -20.52,-1375.2 -184.72,-2011.5 -164.2,-656.82 -472.09,-1272.58 -985.23,-1703.62 -697.86,-595.24 -1539.4,-964.7 -2463.06,-923.64 -759.44,61.57 -1477.84,389.98 -1970.45,964.7 -738.92,821.02 -882.6,1908.86 -492.61,2894.09 554.18,1498.36 1662.56,2216.75 3222.5,2360.43z",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/eternaln/app/components/Loader.jsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/eternaln/app/components/Loader.jsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/eternaln/app/components/Loader.jsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chrono-counter",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "first-counter counter",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "num",
                                children: "0"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/eternaln/app/components/Loader.jsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "num num1offset1",
                                children: "1"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/eternaln/app/components/Loader.jsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/eternaln/app/components/Loader.jsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "second-counter counter",
                        children: [
                            "0",
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "0"
                        ].map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `num ${i === 1 ? "num1offset2" : ""}`,
                                children: n
                            }, i, false, {
                                fileName: "[project]/Desktop/eternaln/app/components/Loader.jsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/eternaln/app/components/Loader.jsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "third-counter counter",
                        children: [
                            "0",
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "0"
                        ].map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `num ${i === 1 ? "num1offset2" : ""}`,
                                children: n
                            }, i, false, {
                                fileName: "[project]/Desktop/eternaln/app/components/Loader.jsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/eternaln/app/components/Loader.jsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/eternaln/app/components/Loader.jsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/eternaln/app/components/Loader.jsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_s(Loader, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Loader;
var _c;
__turbopack_context__.k.register(_c, "Loader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/eternaln/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScenePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/@react-three/drei/core/Gltf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshTransmissionMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/@react-three/drei/core/MeshTransmissionMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Lightformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/@react-three/drei/core/Lightformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/@react-three/rapier/dist/react-three-rapier.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/@react-three/postprocessing/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$three$2d$stdlib$2f$utils$2f$SkeletonUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/three-stdlib/utils/SkeletonUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$app$2f$components$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/app/components/Animations.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/app/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$app$2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/eternaln/app/components/Loader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const accents = [
    "#ff0000",
    "#00ff00",
    "#ff4060",
    "#ffcc00"
];
const projects = [
    {
        title: "Casalgrande Padana",
        image: "./company1.jpg.webp"
    },
    {
        title: "Novabell Cramiche",
        image: "./company2.jpg.webp"
    },
    {
        title: "Impronta Group",
        image: "./company3.jpg.webp"
    },
    {
        title: "Frag Dal 1921",
        image: "./company1.jpg.webp"
    }
];
function ScenePage() {
    _s();
    const heading1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heading2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScenePage.useEffect": ()=>{
            const AOS = __turbopack_context__.r("[project]/Desktop/eternaln/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
            AOS.init({
                duration: 800
            });
            const svg = svgRef.current;
            const path = pathRef.current;
            if (!svg || !path) return;
            const pathLength = path.getTotalLength();
            let currentOffset = pathLength;
            // Initial setup
            path.style.strokeDasharray = `${pathLength}`;
            path.style.strokeDashoffset = `${pathLength}`;
            const scroll = {
                "ScenePage.useEffect.scroll": ()=>{
                    const distance = window.scrollY;
                    const totalDistance = svg.clientHeight - window.innerHeight;
                    const percentage = Math.min(distance / totalDistance, 1);
                    const targetOffset = pathLength * (1 - percentage);
                    // 🔥 Smooth easing (lower = slower)
                    currentOffset += (targetOffset - currentOffset) * 0.06;
                    // path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
                    path.style.strokeDashoffset = `${currentOffset}`;
                }
            }["ScenePage.useEffect.scroll"];
            scroll();
            window.addEventListener("scroll", scroll);
            return ({
                "ScenePage.useEffect": ()=>{
                    window.removeEventListener("scroll", scroll);
                }
            })["ScenePage.useEffect"];
        }
    }["ScenePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScenePage.useEffect": ()=>{
            let current1 = 0;
            let current2 = 0;
            let target1 = 0;
            let target2 = 0;
            const animate = {
                "ScenePage.useEffect.animate": ()=>{
                    // Smooth inertia (lower = smoother / slower)
                    current1 += (target1 - current1) * 0.08;
                    current2 += (target2 - current2) * 0.08;
                    if (heading1Ref.current) {
                        heading1Ref.current.style.transform = `translateX(${current1}px)`;
                    }
                    if (heading2Ref.current) {
                        heading2Ref.current.style.transform = `translateX(${current2}px)`;
                    }
                    requestAnimationFrame(animate);
                }
            }["ScenePage.useEffect.animate"];
            const handleScroll = {
                "ScenePage.useEffect.handleScroll": ()=>{
                    if (!sectionRef.current) return;
                    const rect = sectionRef.current.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    const progress = 1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);
                    // Movement strength
                    target1 = progress * 350;
                    target2 = progress * 150;
                }
            }["ScenePage.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            handleScroll();
            animate();
            return ({
                "ScenePage.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["ScenePage.useEffect"];
        }
    }["ScenePage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$app$2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$app$2f$components$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "_3d-container extra",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scene, {
                    style: {
                        borderRadius: 15
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pt-5 pb-10",
                "data-aos": "fade-up",
                "data-aos-delay": "0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/eternal.png",
                                alt: "Logo",
                                width: 30,
                                height: 80
                            }, void 0, false, {
                                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/eternal.png",
                                alt: "Logo",
                                width: 30,
                                height: 80
                            }, void 0, false, {
                                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs tracking-widest text-gray-500 font-semibold",
                            children: "SCROLL TO EXPLORE"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/eternal.png",
                                alt: "Logo",
                                width: 30,
                                height: 80
                            }, void 0, false, {
                                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/eternal.png",
                                alt: "Logo",
                                width: 30,
                                height: 80
                            }, void 0, false, {
                                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                className: "min-h-screen w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        ref: svgRef,
                        width: 1000,
                        height: 2000,
                        viewBox: "0 0 1000 2000",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "squiggle",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            ref: pathRef,
                            d: "M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852",
                            stroke: "#d3d3d3",
                            strokeWidth: 30,
                            strokeLinejoin: "round",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/eternaln/app/page.jsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full mt-[10vh] leading-[1.2] text-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                ref: heading1Ref,
                                className: "text-[8vw] will-change-transform transition-transform duration-75",
                                children: "Beyond Visions"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                ref: heading2Ref,
                                className: "text-[8vw] will-change-transform transition-transform duration-75",
                                children: "Within Reach"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/eternaln/app/page.jsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "showcase",
                        className: "pb-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-7",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "300"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-5 pl-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: "showcaseContent",
                                            className: "space-y-6 max-w-xl lg:ml-auto mt-6",
                                            "data-aos": "fade-left",
                                            "data-aos-delay": "400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base text-[#111827]/90",
                                                    children: "Started in 2014 Essence Tiles, We have emerged as a global leader in premium vitrified porcelain tiles. Headquartered in India, we leverage our state-of-the-art manufacturing capabilities across 8 facilities to produce a staggering 8 million square meters of exquisite tiles & an annual turnover of approximately $43 million annually."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                                    lineNumber: 221,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center mt-2 gap-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        id: "talkBtn",
                                                        className: "bg-[#1f2937] text-white rounded-full px-6 py-3 font-semibold shadow-md min-w-[190px] flex items-center justify-center gap-3",
                                                        children: [
                                                            "ABOUT US",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2 h-2 bg-white rounded-full opacity-90"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                                                lineNumber: 235,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                                        lineNumber: 230,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                                    lineNumber: 229,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-7",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: "showcaseImage",
                                            className: "rounded-2xl -mt-[8vh] overflow-hidden shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                autoPlay: true,
                                                muted: true,
                                                loop: true,
                                                playsInline: true,
                                                className: "w-full h-auto block object-cover",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                    src: "/desktop.mp4",
                                                    type: "video/mp4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                                    lineNumber: 258,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/eternaln/app/page.jsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "featured",
                className: "py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-extrabold",
                                    children: "Featured Work"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-sm uppercase tracking-wider text-gray-600 hidden md:inline",
                                    children: "See all projects →"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: projects.map((project, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "bg-[#f2f4f9] rounded-2xl overflow-hidden",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": idx * 100,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: project.image,
                                            alt: project.title,
                                            className: "w-full h-80 md:h-96 lg:h-[350px] object-cover rounded-t-2xl"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                            lineNumber: 291,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-3 py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "group",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center group-hover:text-gray-700 transition-colors",
                                                    children: project.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                                    lineNumber: 298,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                                lineNumber: 297,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                            lineNumber: 296,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "p-10",
                "data-aos": "fade-up",
                "data-aos-delay": "100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "showcaseImage",
                    className: "rounded-2xl -mt-[8vh] overflow-hidden shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        muted: true,
                        loop: true,
                        playsInline: true,
                        className: "w-full h-auto block object-cover",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: "/desktop.mp4",
                            type: "video/mp4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 321,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/eternaln/app/page.jsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                    lineNumber: 310,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-black text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-6 text-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInfinity"], {}, void 0, false, {
                                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTwitter"], {}, void 0, false, {
                                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDribbble"], {}, void 0, false, {
                                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo-white.svg",
                                    alt: "Logo",
                                    width: 250,
                                    height: 80
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 pt-6",
                                    children: "© 2025 Eternal Home. All rights reserved."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400",
                                    children: [
                                        "Powered by ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white",
                                            children: "Feelmarks"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                            lineNumber: 343,
                                            columnNumber: 26
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg mb-6",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                children: "About us"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                                lineNumber: 351,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                children: "Our Brands"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                children: "Product Portfolio"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                            lineNumber: 356,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                children: "Exhibitions"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                                lineNumber: 360,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                            lineNumber: 359,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg mb-6",
                                    children: "Brands"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                    lineNumber: 366,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Casalgrande Padana"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Novabell Cramiche"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                            lineNumber: 369,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Impronta Group"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                            lineNumber: 370,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Frag Dal 1921"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                            lineNumber: 371,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 365,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                    lineNumber: 328,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/eternaln/app/page.jsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s(ScenePage, "JcRLHu52gTsYQSmJACXas0225Kc=");
_c = ScenePage;
/* ---------------- THREE SCENE ---------------- */ function Scene(props) {
    _s1();
    const [accent, click] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])({
        "Scene.useReducer": (state)=>++state % accents.length
    }["Scene.useReducer"], 0);
    const COUNT = 15;
    const COLORS = [
        "#2b2824",
        "#9cb3a3",
        "#0c3e49",
        "#e5ddd2",
        "#a1452c",
        "#95a36d"
    ];
    const connectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Scene.useMemo[connectors]": ()=>{
            const radius = 5;
            return Array.from({
                length: COUNT
            }, {
                "Scene.useMemo[connectors]": (_, i)=>{
                    const angle = i / COUNT * Math.PI * 2;
                    return {
                        // color: "#444",
                        // color: COLORS[i % COLORS.length],
                        color: `hsl(${Math.random() * 360}, 80%, 60%)`,
                        roughness: 0.3,
                        position: [
                            Math.cos(angle) * radius,
                            Math.sin(angle) * radius * 0.6,
                            (Math.random() - 0.5) * 5
                        ]
                    };
                }
            }["Scene.useMemo[connectors]"]);
        }
    }["Scene.useMemo[connectors]"], [
        accent
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        onClick: click,
        shadows: true,
        dpr: [
            1,
            1.5
        ],
        // gl={{ antialias: false }}
        gl: {
            physicallyCorrectLights: true,
            toneMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"],
            toneMappingExposure: 1.5
        },
        camera: {
            position: [
                0,
                0,
                15
            ],
            fov: 17.5,
            near: 1,
            far: 20
        },
        style: {
            width: "100%",
            height: "250px"
        },
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                attach: "background",
                args: [
                    "#141622"
                ]
            }, void 0, false, {
                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.4
            }, void 0, false, {
                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                lineNumber: 429,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                position: [
                    10,
                    10,
                    10
                ],
                angle: 0.15,
                penumbra: 1,
                intensity: 1,
                castShadow: true
            }, void 0, false, {
                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                lineNumber: 430,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Physics"] /*debug*/ , {
                gravity: [
                    0,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pointer, {}, void 0, false, {
                        fileName: "[project]/Desktop/eternaln/app/page.jsx",
                        lineNumber: 438,
                        columnNumber: 9
                    }, this),
                    connectors.map((props, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Connector, {
                            ...props
                        }, i, false, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 440,
                            columnNumber: 40
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Connector, {
                        position: [
                            10,
                            10,
                            5
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Model, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshTransmissionMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshTransmissionMaterial"], {
                                clearcoat: 1,
                                thickness: 0.1,
                                anisotropicBlur: 0.1,
                                chromaticAberration: 0.1,
                                samples: 8,
                                resolution: 512
                            }, void 0, false, {
                                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                                lineNumber: 444,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/eternaln/app/page.jsx",
                        lineNumber: 442,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                lineNumber: 437,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"], {
                enableNormalPass: false,
                multisampling: 8,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["N8AO"], {
                    distanceFalloff: 1,
                    aoRadius: 1,
                    intensity: 4
                }, void 0, false, {
                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                    lineNumber: 457,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                lineNumber: 456,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                resolution: 256,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    rotation: [
                        -Math.PI / 3,
                        0,
                        1
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Lightformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lightformer"], {
                            form: "circle",
                            intensity: 4,
                            "rotation-x": Math.PI / 2,
                            position: [
                                0,
                                5,
                                -9
                            ],
                            scale: 2
                        }, void 0, false, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 461,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Lightformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lightformer"], {
                            form: "circle",
                            intensity: 2,
                            "rotation-y": Math.PI / 2,
                            position: [
                                -5,
                                1,
                                -1
                            ],
                            scale: 2
                        }, void 0, false, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 468,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Lightformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lightformer"], {
                            form: "circle",
                            intensity: 2,
                            "rotation-y": Math.PI / 2,
                            position: [
                                -5,
                                -1,
                                -1
                            ],
                            scale: 2
                        }, void 0, false, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 475,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Lightformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lightformer"], {
                            form: "circle",
                            intensity: 2,
                            "rotation-y": -Math.PI / 2,
                            position: [
                                10,
                                1,
                                0
                            ],
                            scale: 8
                        }, void 0, false, {
                            fileName: "[project]/Desktop/eternaln/app/page.jsx",
                            lineNumber: 482,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/eternaln/app/page.jsx",
                    lineNumber: 460,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                lineNumber: 459,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/eternaln/app/page.jsx",
        lineNumber: 414,
        columnNumber: 5
    }, this);
}
_s1(Scene, "gb2TPeqIe0nbRmcrEKhIHO15FIQ=");
_c1 = Scene;
function Connector({ position, children, vec = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](), ...props }) {
    _s2();
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Connector.useMemo[pos]": ()=>position || [
                0,
                0,
                0
            ]
    }["Connector.useMemo[pos]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Connector.useFrame": ()=>{
            api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(0.2));
        }
    }["Connector.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
        ref: api,
        position: pos,
        colliders: false,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CuboidCollider"], {
                args: [
                    0.38,
                    1.27,
                    0.38
                ]
            }, void 0, false, {
                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                lineNumber: 512,
                columnNumber: 7
            }, this),
            children ? children : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Model, {
                ...props
            }, void 0, false, {
                fileName: "[project]/Desktop/eternaln/app/page.jsx",
                lineNumber: 513,
                columnNumber: 30
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/eternaln/app/page.jsx",
        lineNumber: 511,
        columnNumber: 5
    }, this);
}
_s2(Connector, "147L7XgqMnPeBf+T0i2eOshjLEQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = Connector;
function Pointer({ vec = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]() }) {
    _s3();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Pointer.useFrame": ({ mouse, viewport })=>{
            ref.current?.setNextKinematicTranslation(vec.set(mouse.x * viewport.width / 5, mouse.y * viewport.height / 5, 0));
        }
    }["Pointer.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
        type: "kinematicPosition",
        colliders: false,
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BallCollider"], {
            args: [
                1
            ]
        }, void 0, false, {
            fileName: "[project]/Desktop/eternaln/app/page.jsx",
            lineNumber: 533,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/eternaln/app/page.jsx",
        lineNumber: 532,
        columnNumber: 5
    }, this);
}
_s3(Pointer, "8QVLrcMdYxPUkj6ry5zpyt6J6X8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = Pointer;
function Model({ color = "white", roughness = 0.3, children }) {
    _s4();
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])("/E2.glb");
    const clonedScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Model.useMemo[clonedScene]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$three$2d$stdlib$2f$utils$2f$SkeletonUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonUtils"].clone(scene)
    }["Model.useMemo[clonedScene]"], [
        scene
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Model.useMemo": ()=>{
            clonedScene.traverse({
                "Model.useMemo": (obj)=>{
                    if (obj.isMesh) {
                        obj.material = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color),
                            roughness
                        });
                    }
                }
            }["Model.useMemo"]);
        }
    }["Model.useMemo"], [
        color,
        roughness,
        clonedScene
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
        object: clonedScene,
        scale: 0.3,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/eternaln/app/page.jsx",
        lineNumber: 554,
        columnNumber: 5
    }, this);
}
_s4(Model, "gBq5Ik++eG8WeazIIikc51O147s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$eternaln$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"]
    ];
});
_c4 = Model;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ScenePage");
__turbopack_context__.k.register(_c1, "Scene");
__turbopack_context__.k.register(_c2, "Connector");
__turbopack_context__.k.register(_c3, "Pointer");
__turbopack_context__.k.register(_c4, "Model");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_eternaln_app_8b518d7e._.js.map