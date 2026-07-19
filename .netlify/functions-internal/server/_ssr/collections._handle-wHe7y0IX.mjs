import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as SiteShell } from "./SiteShell-Di0TgPd1.mjs";
import { n as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { n as productsQueryOptions } from "./useProducts-T241RI_A.mjs";
import { n as titles, t as Route } from "./collections._handle-Dvbur1Px.mjs";
import { t as ProductCard } from "./ProductCard-Cfyt1_3I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections._handle-wHe7y0IX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CollectionPage() {
	const { handle } = Route.useParams();
	const products = useSuspenseQuery(productsQueryOptions()).data;
	const info = titles[handle] ?? {
		title: handle.replace(/-/g, " "),
		desc: ""
	};
	const filtered = (0, import_react.useMemo)(() => {
		const h = handle.toLowerCase();
		return products.filter((p) => {
			const type = p.node.productType.toLowerCase();
			const tags = p.node.tags.map((t) => t.toLowerCase());
			if (type.replace(/\s+/g, "-") === h) return true;
			if (tags.includes(h)) return true;
			if (h === "boxed-chocolates" && type.includes("box")) return true;
			if (h === "bars" && type.includes("bar")) return true;
			if (h === "truffles" && type.includes("truffle")) return true;
			return false;
		});
	}, [products, handle]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `relative border-b border-border py-24 ${handle === "gifts" ? "bg-cocoa text-primary-foreground" : "bg-secondary/30"}`,
		children: [handle === "gifts" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/chocolate-gifts.jpg",
			alt: "Chocolate Gifts",
			className: "absolute inset-0 h-full w-full object-cover opacity-60"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/40" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page relative text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `text-[11px] uppercase tracking-[0.28em] ${handle === "gifts" ? "text-gold-soft" : "text-accent"}`,
					children: "Collection"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl capitalize md:text-6xl",
					children: info.title
				}),
				info.desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mx-auto mt-4 max-w-xl ${handle === "gifts" ? "text-primary-foreground/80" : "text-muted-foreground"}`,
					children: info.desc
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-page py-16",
		children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "py-16 text-center text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No products found in this collection yet." })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8",
			children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.node.id))
		})
	})] });
}
//#endregion
export { CollectionPage as component };
