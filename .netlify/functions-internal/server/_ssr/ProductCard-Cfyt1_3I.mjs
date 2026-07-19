import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { m as LoaderCircle, u as Plus } from "../_libs/lucide-react.mjs";
import { a as formatMoney, o as useCartStore, t as Button } from "./SiteShell-Di0TgPd1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-Cfyt1_3I.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product, compact }) {
	const p = product.node;
	const primaryImg = p.images.edges[0]?.node;
	const secondaryImg = p.images.edges[1]?.node ?? primaryImg;
	const variant = p.variants.edges[0]?.node;
	const price = p.priceRange.minVariantPrice;
	const addItem = useCartStore((s) => s.addItem);
	const isLoading = useCartStore((s) => s.isLoading);
	const onAdd = async (e) => {
		e.preventDefault();
		if (!variant) return;
		await addItem({
			product,
			variantId: variant.id,
			variantTitle: variant.title,
			price: variant.price,
			quantity: 1,
			selectedOptions: variant.selectedOptions ?? []
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/products/$handle",
			params: { handle: p.handle },
			className: "relative block overflow-hidden rounded-sm bg-secondary/40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "aspect-square",
				children: [primaryImg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: primaryImg.url,
					alt: primaryImg.altText ?? p.title,
					loading: "lazy",
					className: "h-full w-full object-cover transition duration-700 group-hover:opacity-0"
				}), secondaryImg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: secondaryImg.url,
					alt: "",
					"aria-hidden": "true",
					loading: "lazy",
					className: "absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-700 group-hover:opacity-100"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-4 justify-center p-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: onAdd,
					disabled: isLoading || !variant,
					className: "pointer-events-auto rounded-none bg-primary/95 px-5 text-primary-foreground hover:bg-primary",
					children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 h-3 w-3" }), " Add to basket"] })
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mt-4 text-center ${compact ? "space-y-1" : "space-y-1.5"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
					children: p.vendor
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products/$handle",
					params: { handle: p.handle },
					className: "block font-display text-lg text-foreground transition-colors hover:text-accent md:text-xl",
					children: p.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-foreground/80",
					children: formatMoney(price.amount, price.currencyCode)
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
