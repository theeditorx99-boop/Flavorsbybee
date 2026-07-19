import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as ShieldCheck, d as Minus, i as Truck, m as LoaderCircle, u as Plus, v as Gift } from "../_libs/lucide-react.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { a as formatMoney, n as SiteShell, o as useCartStore, t as Button } from "./SiteShell-Di0TgPd1.mjs";
import { n as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { n as productsQueryOptions, t as productQueryOptions } from "./useProducts-T241RI_A.mjs";
import { t as ProductCard } from "./ProductCard-Cfyt1_3I.mjs";
import { t as Route } from "./products._handle-ChgfTKxE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._handle-CQrCqi7G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { handle } = Route.useParams();
	const product = useSuspenseQuery(productQueryOptions(handle)).data;
	const all = useSuspenseQuery(productsQueryOptions()).data;
	const p = product.node;
	const [qty, setQty] = (0, import_react.useState)(1);
	const [activeImage, setActiveImage] = (0, import_react.useState)(0);
	const variant = p.variants.edges[0]?.node;
	const addItem = useCartStore((s) => s.addItem);
	const isLoading = useCartStore((s) => s.isLoading);
	const related = all.filter((x) => x.node.id !== p.id).slice(0, 4);
	const onAdd = async () => {
		if (!variant) return;
		await addItem({
			product,
			variantId: variant.id,
			variantTitle: variant.title,
			price: variant.price,
			quantity: qty,
			selectedOptions: variant.selectedOptions ?? []
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-page py-10 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 md:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { duration: .35 },
					className: "aspect-square overflow-hidden rounded-sm bg-secondary/40",
					children: p.images.edges[activeImage]?.node && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.images.edges[activeImage].node.url,
						alt: p.images.edges[activeImage].node.altText ?? p.title,
						className: "h-full w-full object-cover"
					})
				}, activeImage), p.images.edges.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-5 gap-2",
					children: p.images.edges.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveImage(i),
						className: `aspect-square overflow-hidden rounded-sm border-2 transition ${activeImage === i ? "border-accent" : "border-transparent"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.node.url,
							alt: "",
							className: "h-full w-full object-cover"
						})
					}, i))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.28em] text-accent",
					children: p.productType || p.vendor
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl md:text-5xl",
					children: p.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-2xl font-medium",
					children: formatMoney(p.priceRange.minVariantPrice.amount, p.priceRange.minVariantPrice.currencyCode)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-px w-full bg-border" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 leading-relaxed text-foreground/80",
					children: p.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center border border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setQty(Math.max(1, qty - 1)),
								className: "grid h-12 w-12 place-items-center hover:text-accent",
								"aria-label": "Decrease quantity",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-10 text-center font-medium",
								children: qty
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setQty(qty + 1),
								className: "grid h-12 w-12 place-items-center hover:text-accent",
								"aria-label": "Increase quantity",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: onAdd,
						disabled: isLoading || !variant,
						size: "lg",
						className: "min-w-[220px] flex-1 rounded-none bg-primary text-primary-foreground hover:bg-primary/90",
						children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Add to basket"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-10 space-y-3 text-sm text-foreground/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 text-accent" }), " Complimentary shipping on orders over $50"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-4 w-4 text-accent" }), " Elegant gift packaging included"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-accent" }), " Freshness guaranteed — made in small batches"]
						})
					]
				})
			] })]
		})
	}), related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border bg-secondary/30 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-10 text-center font-display text-3xl md:text-4xl",
				children: "You may also love"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8",
				children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: r }, r.node.id))
			})]
		})
	})] });
}
//#endregion
export { ProductPage as component };
