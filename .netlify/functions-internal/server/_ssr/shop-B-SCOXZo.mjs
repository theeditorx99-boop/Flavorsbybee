import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as SiteShell, t as Button } from "./SiteShell-Di0TgPd1.mjs";
import { n as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { n as productsQueryOptions } from "./useProducts-T241RI_A.mjs";
import { t as ProductCard } from "./ProductCard-Cfyt1_3I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-B-SCOXZo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	"All",
	"Boxed",
	"Truffles",
	"Bars",
	"Gifts"
];
function ShopPage() {
	const products = useSuspenseQuery(productsQueryOptions()).data;
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [sort, setSort] = (0, import_react.useState)("featured");
	const filtered = (0, import_react.useMemo)(() => {
		let list = [...products];
		if (filter !== "All") list = list.filter((p) => {
			const t = p.node.productType.toLowerCase();
			if (filter === "Boxed") return t.includes("box");
			if (filter === "Truffles") return t.includes("truffle");
			if (filter === "Bars") return t.includes("bar");
			if (filter === "Gifts") return p.node.tags.some((tag) => tag.toLowerCase().includes("gift"));
			return true;
		});
		if (sort === "price-asc") list.sort((a, b) => parseFloat(a.node.priceRange.minVariantPrice.amount) - parseFloat(b.node.priceRange.minVariantPrice.amount));
		if (sort === "price-desc") list.sort((a, b) => parseFloat(b.node.priceRange.minVariantPrice.amount) - parseFloat(a.node.priceRange.minVariantPrice.amount));
		if (sort === "name") list.sort((a, b) => a.node.title.localeCompare(b.node.title));
		return list;
	}, [
		products,
		filter,
		sort
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-secondary/30 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.28em] text-accent",
					children: "Shop"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl md:text-6xl",
					children: "All Chocolates"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-3xl text-muted-foreground",
					children: "Discover a world of refined sweetness at FlavorsByBee. We are a boutique chocolaterie dedicated to crafting unforgettable tasting experiences through small-batch chocolates, luxurious truffles, and elegant gifting collections. We source only the finest ethical cacao to craft bold, comforting flavors—like our molten salted caramel wrapped in rich milk chocolate, or our intense 70% single-origin dark truffles dusted in pure cocoa. Packaged beautifully and tied with satin ribbon, our signature assortments are designed to elevate life’s everyday moments. At FlavorsByBee, we aren't just making chocolate; we are crafting moments meant to be gifted, shared, and savored."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: filter === f ? "default" : "outline",
					onClick: () => setFilter(f),
					className: "rounded-none",
					size: "sm",
					children: f
				}, f))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-muted-foreground",
					children: "Sort:"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: sort,
					onChange: (e) => setSort(e.target.value),
					className: "border-b border-border bg-transparent py-1 text-sm focus:outline-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "featured",
							children: "Featured"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "price-asc",
							children: "Price: Low to High"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "price-desc",
							children: "Price: High to Low"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "name",
							children: "Name A–Z"
						})
					]
				})]
			})]
		}), filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "py-24 text-center text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No products found" })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8",
			children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.node.id))
		})]
	})] });
}
//#endregion
export { ShopPage as component };
