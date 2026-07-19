import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as productsQueryOptions, t as productQueryOptions } from "./useProducts-T241RI_A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._handle-ChgfTKxE.js
var $$splitComponentImporter = () => import("./products._handle-CQrCqi7G.mjs");
var Route = createFileRoute("/products/$handle")({
	loader: async ({ context, params }) => {
		const product = await context.queryClient.ensureQueryData(productQueryOptions(params.handle));
		if (!product) throw notFound();
		context.queryClient.prefetchQuery(productsQueryOptions());
		return { product };
	},
	head: ({ loaderData, params }) => {
		if (!loaderData) return { meta: [{ title: "Product not found — FlavorsByBee" }, {
			name: "robots",
			content: "noindex"
		}] };
		const p = loaderData.product.node;
		const img = p.images.edges[0]?.node?.url;
		return {
			meta: [
				{ title: `${p.title} — FlavorsByBee` },
				{
					name: "description",
					content: p.description.slice(0, 155)
				},
				{
					property: "og:title",
					content: p.title
				},
				{
					property: "og:description",
					content: p.description.slice(0, 155)
				},
				{
					property: "og:type",
					content: "product"
				},
				{
					property: "og:url",
					content: `/products/${params.handle}`
				},
				...img ? [{
					property: "og:image",
					content: img
				}, {
					name: "twitter:image",
					content: img
				}] : []
			],
			links: [{
				rel: "canonical",
				href: `/products/${params.handle}`
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
