import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as SiteShell, o as useCartStore } from "./SiteShell-Di0TgPd1.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { n as productsQueryOptions } from "./useProducts-T241RI_A.mjs";
import { t as Route$18 } from "./collections._handle-Dvbur1Px.mjs";
import { n as makeSimpleRoute } from "./SimplePage-BY_lssNe.mjs";
import { t as Route$19 } from "./products._handle-ChgfTKxE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DdRxhlXU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BDlkP7RF.css";
function useCartSync() {
	const syncCart = useCartStore((s) => s.syncCart);
	(0, import_react.useEffect)(() => {
		syncCart();
		const handler = () => {
			if (document.visibilityState === "visible") syncCart();
		};
		document.addEventListener("visibilitychange", handler);
		return () => document.removeEventListener("visibilitychange", handler);
	}, [syncCart]);
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.28em] text-accent",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl",
				children: "This shelf is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "The page you're looking for has been moved or no longer exists."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "mt-8 inline-flex items-center rounded-none bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90",
				children: "Return home"
			})
		]
	}) });
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Something didn't load"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: "Please try again in a moment."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					router.invalidate();
					reset();
				},
				className: "mt-6 inline-flex rounded-none bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90",
				children: "Try again"
			})
		]
	}) });
}
var Route$17 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "FlavorsByBee — Handcrafted Chocolates & Confections" },
			{
				name: "description",
				content: "Handcrafted chocolates, boxed assortments and gifts made in small batches. Discover FlavorsByBee."
			},
			{
				property: "og:title",
				content: "FlavorsByBee — Handcrafted Chocolates"
			},
			{
				property: "og:description",
				content: "Small-batch chocolates, truffles and gifting collections."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "FlavorsByBee"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/flavor.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$17.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppWithCartSync, {})
	});
}
function AppWithCartSync() {
	useCartSync();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
}
var $$splitComponentImporter$5 = () => import("./routes-JAmMHptp.mjs");
var Route$16 = createFileRoute("/")({
	loader: ({ context }) => context.queryClient.ensureQueryData(productsQueryOptions()),
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({
		meta: [
			{ title: "FlavorsByBee — Handcrafted Chocolates & Gifts" },
			{
				name: "description",
				content: "Discover small-batch chocolates, truffles, and thoughtful gifting collections handcrafted by FlavorsByBee."
			},
			{
				property: "og:title",
				content: "FlavorsByBee — Handcrafted Chocolates"
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	})
});
var story_craft_default = "/assets/story-craft-C1lhe1Pf.jpg";
var $$splitComponentImporter$4 = () => import("./about-DGz7bp48.mjs");
var Route$15 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({
		meta: [
			{ title: "Our Story — FlavorsByBee" },
			{
				name: "description",
				content: "The story behind FlavorsByBee — small-batch chocolate crafted with care from bean to box."
			},
			{
				property: "og:title",
				content: "Our Story — FlavorsByBee"
			},
			{
				property: "og:url",
				content: "/about"
			},
			{
				property: "og:image",
				content: story_craft_default
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	})
});
var Route$14 = makeSimpleRoute("/blog", "Journal", "Recipes & Journal", "Chocolate stories, seasonal recipes and notes from our studio.");
var Route$13 = makeSimpleRoute("/careers", "Careers", "Join our team", "Open positions at FlavorsByBee.");
var $$splitComponentImporter$3 = () => import("./cart-COtlJaF0.mjs");
var Route$12 = createFileRoute("/cart")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Your Basket — FlavorsByBee" }, {
		name: "robots",
		content: "noindex"
	}] })
});
var $$splitComponentImporter$2 = () => import("./contact-B4Y9uXam.mjs");
var Route$11 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({
		meta: [
			{ title: "Contact — FlavorsByBee" },
			{
				name: "description",
				content: "Get in touch with the FlavorsByBee team."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	})
});
var Route$10 = makeSimpleRoute("/corporate", "Business", "Corporate Gifting", "Bespoke chocolate gifts and custom orders for your team or clients.");
var Route$9 = makeSimpleRoute("/delivery", "Support", "Delivery & Returns", "Shipping, packaging and returns information for FlavorsByBee orders.");
var Route$8 = makeSimpleRoute("/ethics", "Ethics", "Our commitments", "How we source, package and give back at FlavorsByBee.");
var $$splitComponentImporter$1 = () => import("./experience-DNun_7xD.mjs");
var Route$7 = createFileRoute("/experience")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({
		meta: [
			{ title: "Chocolate Experiences — FlavorsByBee" },
			{
				name: "description",
				content: "Tastings, masterclasses, and private chocolate experiences with the FlavorsByBee team."
			},
			{
				property: "og:title",
				content: "Chocolate Experiences — FlavorsByBee"
			},
			{
				property: "og:url",
				content: "/experience"
			}
		],
		links: [{
			rel: "canonical",
			href: "/experience"
		}]
	})
});
var Route$6 = makeSimpleRoute("/locator", "Find us", "Store Locator", "Discover FlavorsByBee stockists near you.");
var $$splitComponentImporter = () => import("./shop-B-SCOXZo.mjs");
var Route$5 = createFileRoute("/shop")({
	loader: ({ context }) => context.queryClient.ensureQueryData(productsQueryOptions()),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({
		meta: [
			{ title: "Shop All Chocolates — FlavorsByBee" },
			{
				name: "description",
				content: "Browse the complete FlavorsByBee collection of handcrafted chocolates, truffles, bars and gifts."
			},
			{
				property: "og:title",
				content: "Shop All — FlavorsByBee"
			},
			{
				property: "og:url",
				content: "/shop"
			}
		],
		links: [{
			rel: "canonical",
			href: "/shop"
		}]
	})
});
var Route$4 = makeSimpleRoute("/trade", "Trade", "Trade Enquiries", "Wholesale and trade partnerships with FlavorsByBee.");
var Route$3 = makeSimpleRoute("/about/awards", "About", "Awards", "Recognition and awards for our chocolate craft.");
var Route$2 = makeSimpleRoute("/about/story", "About", "Our Story", "How FlavorsByBee began — and where we're headed.");
var Route$1 = makeSimpleRoute("/about/sustainability", "About", "Sustainability", "Our approach to sourcing, packaging and reducing our footprint.");
var Route = makeSimpleRoute("/account/sign-in", "Account", "Sign in", "Sign in to your FlavorsByBee account.");
var IndexRoute = Route$16.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$17
});
var AboutRoute = Route$15.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$17
});
var BlogRoute = Route$14.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$17
});
var CareersRoute = Route$13.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$17
});
var CartRoute = Route$12.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$17
});
var ContactRoute = Route$11.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$17
});
var CorporateRoute = Route$10.update({
	id: "/corporate",
	path: "/corporate",
	getParentRoute: () => Route$17
});
var DeliveryRoute = Route$9.update({
	id: "/delivery",
	path: "/delivery",
	getParentRoute: () => Route$17
});
var EthicsRoute = Route$8.update({
	id: "/ethics",
	path: "/ethics",
	getParentRoute: () => Route$17
});
var ExperienceRoute = Route$7.update({
	id: "/experience",
	path: "/experience",
	getParentRoute: () => Route$17
});
var LocatorRoute = Route$6.update({
	id: "/locator",
	path: "/locator",
	getParentRoute: () => Route$17
});
var ShopRoute = Route$5.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$17
});
var TradeRoute = Route$4.update({
	id: "/trade",
	path: "/trade",
	getParentRoute: () => Route$17
});
var AboutAwardsRoute = Route$3.update({
	id: "/awards",
	path: "/awards",
	getParentRoute: () => AboutRoute
});
var AboutStoryRoute = Route$2.update({
	id: "/story",
	path: "/story",
	getParentRoute: () => AboutRoute
});
var AboutSustainabilityRoute = Route$1.update({
	id: "/sustainability",
	path: "/sustainability",
	getParentRoute: () => AboutRoute
});
var AccountSignInRoute = Route.update({
	id: "/account/sign-in",
	path: "/account/sign-in",
	getParentRoute: () => Route$17
});
var CollectionsHandleRoute = Route$18.update({
	id: "/collections/$handle",
	path: "/collections/$handle",
	getParentRoute: () => Route$17
});
var ProductsHandleRoute = Route$19.update({
	id: "/products/$handle",
	path: "/products/$handle",
	getParentRoute: () => Route$17
});
var AboutRouteChildren = {
	AboutAwardsRoute,
	AboutStoryRoute,
	AboutSustainabilityRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute: AboutRoute._addFileChildren(AboutRouteChildren),
	BlogRoute,
	CareersRoute,
	CartRoute,
	ContactRoute,
	CorporateRoute,
	DeliveryRoute,
	EthicsRoute,
	ExperienceRoute,
	LocatorRoute,
	ShopRoute,
	TradeRoute,
	AccountSignInRoute,
	CollectionsHandleRoute,
	ProductsHandleRoute
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
