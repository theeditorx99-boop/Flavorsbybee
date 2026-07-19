import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Users, o as Sparkles, p as MapPin, x as Clock } from "../_libs/lucide-react.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { n as SiteShell } from "./SiteShell-Di0TgPd1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experience-DNun_7xD.js
var import_jsx_runtime = require_jsx_runtime();
var experiences = [
	{
		icon: Sparkles,
		title: "Tasting Flight",
		desc: "A guided journey across five single-origin chocolates.",
		duration: "60 min",
		price: "$45"
	},
	{
		icon: Users,
		title: "Truffle Masterclass",
		desc: "Learn to hand-roll and decorate your own truffles.",
		duration: "2 hrs",
		price: "$95"
	},
	{
		icon: MapPin,
		title: "Origin Discovery",
		desc: "A deep-dive into the flavour of place — bean to bar.",
		duration: "90 min",
		price: "$65"
	},
	{
		icon: Clock,
		title: "Private Event",
		desc: "Book the studio for a bespoke chocolate evening.",
		duration: "3 hrs",
		price: "From $600"
	}
];
function ExperiencePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-cocoa text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			src: "/experience.mp4",
			autoPlay: true,
			loop: true,
			muted: true,
			playsInline: true,
			className: "absolute inset-0 h-full w-full object-cover opacity-40"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page relative py-28 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.32em] text-gold-soft",
					children: "Experiences"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl md:text-6xl",
					children: "Come and taste with us."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-primary-foreground/80",
					children: "Intimate tastings, hands-on masterclasses and private events at our chocolate studio."
				})
			] })
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-page py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: experiences.map((ex, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group flex gap-6 border border-border bg-card p-8 transition-shadow hover:shadow-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-accent/15 text-accent",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ex.icon, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: ex.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-accent",
								children: ex.price
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: ex.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[10px] uppercase tracking-widest text-muted-foreground",
							children: ex.duration
						})
					]
				})]
			}, ex.title))
		})
	})] });
}
//#endregion
export { ExperiencePage as component };
