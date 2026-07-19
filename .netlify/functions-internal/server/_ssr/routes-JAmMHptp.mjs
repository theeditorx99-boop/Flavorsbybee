import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as Award, _ as Heart, h as Leaf, i as Truck, w as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { n as SiteShell, t as Button } from "./SiteShell-Di0TgPd1.mjs";
import { n as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { n as productsQueryOptions } from "./useProducts-T241RI_A.mjs";
import { t as ProductCard } from "./ProductCard-Cfyt1_3I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-JAmMHptp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var collections = [
	{
		title: "Signature Assortments",
		desc: "Our best-loved boxes",
		to: "/collections/$handle",
		params: { handle: "boxed-chocolates" },
		image: "/signature-assortments.jpg"
	},
	{
		title: "Truffles",
		desc: "Silky ganache centres",
		to: "/collections/$handle",
		params: { handle: "truffles" },
		image: "/truffles.jpg"
	},
	{
		title: "Chocolate Bars",
		desc: "Single-origin & blends",
		to: "/collections/$handle",
		params: { handle: "bars" },
		image: "/chocolate-bars.jpg"
	}
];
var badges = [
	{
		icon: Leaf,
		label: "Ethically Sourced"
	},
	{
		icon: Award,
		label: "Award Winning"
	},
	{
		icon: Heart,
		label: "Handmade in Small Batches"
	},
	{
		icon: Truck,
		label: "Complimentary Shipping $50+"
	}
];
function HomePage() {
	const products = useSuspenseQuery(productsQueryOptions()).data;
	const bestsellers = products.slice(0, 4);
	const gifts = products.slice(0, 3);
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
	const textScale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: heroRef,
			className: "relative min-h-[70vh] md:min-h-[80vh] overflow-hidden bg-cocoa text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 w-full overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "absolute inset-0 origin-center overflow-hidden",
					style: {
						scale: bgScale,
						willChange: "transform"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						src: "/hero-page-1.mp4",
						autoPlay: true,
						loop: true,
						muted: true,
						playsInline: true,
						preload: "auto",
						className: "absolute inset-0 h-full w-full object-cover opacity-70"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-cocoa/90 via-cocoa/50 to-cocoa/20" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "container-page relative grid min-h-[70vh] md:min-h-[80vh] items-center py-24",
					style: {
						scale: textScale,
						willChange: "transform"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.32em] text-gold-soft",
								children: "New Season Collection"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-4 font-display text-5xl leading-[1.05] md:text-6xl lg:text-7xl",
								children: ["A moment worth ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold-soft",
									children: "savouring."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md text-base text-primary-foreground/80 md:text-lg",
								children: "Small-batch chocolates crafted from ethically sourced cacao and thoughtfully packaged for gifting, sharing and every quiet indulgence in between."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "rounded-none bg-accent px-8 text-accent-foreground hover:bg-accent/90",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/shop",
										children: "Shop the collection"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "rounded-none border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/collections/$handle",
										params: { handle: "gifts" },
										children: "Explore gifts"
									})
								})]
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-secondary/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page grid grid-cols-2 gap-6 py-8 md:grid-cols-4",
				children: badges.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-3 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "h-5 w-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium uppercase tracking-widest text-foreground/80",
						children: b.label
					})]
				}, b.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.28em] text-accent",
					children: "Shop by category"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl md:text-5xl",
					children: "Explore the collection"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: collections.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: c.to,
					params: c.params,
					className: "group relative block overflow-hidden rounded-sm bg-cocoa",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "aspect-[4/5]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.image,
							alt: c.title,
							loading: "lazy",
							decoding: "async",
							className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 p-6 text-primary-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-[0.24em] text-gold-soft",
								children: c.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl md:text-3xl",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest",
								children: [
									"Discover",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 transition-transform group-hover:translate-x-1" })
								]
							})
						]
					})]
				}, c.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/30 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.28em] text-accent",
						children: "Loved by our community"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl md:text-4xl",
						children: "Bestsellers"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "text-xs font-semibold uppercase tracking-widest text-foreground hover:text-accent",
						children: "View all →"
					})]
				}), bestsellers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-muted-foreground",
					children: "No products found"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8",
					children: bestsellers.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.node.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-12 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative aspect-[4/5] overflow-hidden rounded-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						src: "/our-craft.mp4",
						autoPlay: true,
						loop: true,
						muted: true,
						playsInline: true,
						preload: "metadata",
						className: "absolute inset-0 h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.28em] text-accent",
						children: "Our craft"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl md:text-5xl",
						children: "Chocolate, made slowly."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-foreground/75",
						children: "Welcome to FlavorsByBee, where the art of chocolate is made slowly, thoughtfully, and with uncompromising passion. We believe that true luxury lies in the details. Every piece we create is handcrafted in small batches, starting with ethically sourced cacao cultivated by a small circle of dedicated growers. From our intensely rich, single-origin dark chocolate bars to our delicate truffles filled with slow-cooked, silky ganache, every confection is tempered by hand to achieve the perfect snap and melt. Whether you are seeking a moment of quiet personal indulgence or a beautifully curated gift box to share with someone special, FlavorsByBee delivers flavors that feel personal, from bean to box."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "link",
						className: "mt-4 h-auto p-0 text-sm font-semibold uppercase tracking-widest text-accent",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							children: "Discover our story →"
						})
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cocoa py-24 text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12 flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.28em] text-gold-soft",
						children: "Thoughtful gifts"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl md:text-4xl",
						children: "Gift a moment they'll remember"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/collections/$handle",
						params: { handle: "gifts" },
						className: "text-xs font-semibold uppercase tracking-widest text-gold-soft hover:text-accent-foreground",
						children: "All gifts →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: gifts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products/$handle",
						params: { handle: p.node.handle },
						className: "group block overflow-hidden rounded-sm bg-background/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.node.images.edges[0]?.node.url,
								alt: p.node.title,
								loading: "lazy",
								decoding: "async",
								className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] uppercase tracking-[0.22em] text-gold-soft",
									children: p.node.productType
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-2xl",
									children: p.node.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-primary-foreground/70 line-clamp-2",
									children: p.node.description
								})
							]
						})]
					}, p.node.id))
				})]
			})
		})
	] });
}
//#endregion
export { HomePage as component };
