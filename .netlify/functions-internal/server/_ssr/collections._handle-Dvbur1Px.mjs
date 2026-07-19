import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as productsQueryOptions } from "./useProducts-T241RI_A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections._handle-Dvbur1Px.js
var titles = {
	"boxed-chocolates": {
		title: "Boxed Chocolates",
		desc: "Handcrafted assortments ready to gift or share."
	},
	truffles: {
		title: "Truffles",
		desc: "Silky ganache centres in delicate hand-finished shells."
	},
	bars: {
		title: "Chocolate Bars",
		desc: "Single-origin & signature bars, tempered by hand."
	},
	gifts: {
		title: "Gifts",
		desc: "Thoughtful chocolate gifts for every occasion."
	},
	birthday: {
		title: "Birthday Gifts",
		desc: "Sweet ways to say happy birthday."
	},
	"thank-you": {
		title: "Thank You Gifts",
		desc: "A meaningful thank you, hand-tied."
	},
	wedding: {
		title: "Wedding & Anniversary",
		desc: "Elegant favours and celebration gifts."
	},
	bestseller: {
		title: "Bestsellers",
		desc: "The pieces our community loves most."
	},
	dark: {
		title: "Dark Chocolate",
		desc: "Rich, intense, single-origin dark chocolate."
	},
	milk: {
		title: "Milk Chocolate",
		desc: "Creamy, mellow milk chocolate favourites."
	},
	white: {
		title: "White Chocolate",
		desc: "Delicate, buttery white chocolate creations."
	},
	vegan: {
		title: "Vegan",
		desc: "Dairy-free chocolates crafted with the same care."
	},
	"single-origin": {
		title: "Single Origin",
		desc: "Chocolate from one distinctive place of origin."
	},
	"hot-chocolate": {
		title: "Hot Chocolate",
		desc: "Rich drinking chocolate for slow mornings."
	}
};
var $$splitComponentImporter = () => import("./collections._handle-wHe7y0IX.mjs");
var Route = createFileRoute("/collections/$handle")({
	loader: ({ context }) => context.queryClient.ensureQueryData(productsQueryOptions()),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params }) => {
		const info = titles[params.handle] ?? {
			title: params.handle,
			desc: ""
		};
		return {
			meta: [
				{ title: `${info.title} — FlavorsByBee` },
				{
					name: "description",
					content: info.desc || `Shop ${info.title} at FlavorsByBee.`
				},
				{
					property: "og:title",
					content: `${info.title} — FlavorsByBee`
				},
				{
					property: "og:url",
					content: `/collections/${params.handle}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/collections/${params.handle}`
			}]
		};
	}
});
//#endregion
export { titles as n, Route as t };
