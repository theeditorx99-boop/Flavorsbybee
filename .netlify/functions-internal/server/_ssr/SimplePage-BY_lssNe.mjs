import { p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as SiteShell } from "./SiteShell-Di0TgPd1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SimplePage-BY_lssNe.js
var import_jsx_runtime = require_jsx_runtime();
function SimplePage({ eyebrow, title, desc, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-secondary/30 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page text-center",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.28em] text-accent",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl md:text-6xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-muted-foreground",
					children: desc
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-page py-16",
		children: children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-2xl text-center text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This page is coming soon. In the meantime, explore our collection or reach out to us." })
		})
	})] });
}
function makeSimpleRoute(path, eyebrow, title, desc) {
	return createFileRoute(path)({
		component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimplePage, {
			eyebrow,
			title,
			desc
		}),
		head: () => ({
			meta: [
				{ title: `${title} — FlavorsByBee` },
				{
					name: "description",
					content: desc
				},
				{
					property: "og:title",
					content: `${title} — FlavorsByBee`
				},
				{
					property: "og:url",
					content: path
				}
			],
			links: [{
				rel: "canonical",
				href: path
			}]
		})
	});
}
//#endregion
export { makeSimpleRoute as n, SimplePage as t };
