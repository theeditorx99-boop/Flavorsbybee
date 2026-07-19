import { i as fetchProducts, r as fetchProductByHandle } from "./SiteShell-Di0TgPd1.mjs";
import { t as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useProducts-T241RI_A.js
var productsQueryOptions = (query) => queryOptions({
	queryKey: ["shopify-products", query ?? "all"],
	queryFn: () => fetchProducts(query),
	staleTime: 6e4
});
var productQueryOptions = (handle) => queryOptions({
	queryKey: ["shopify-product", handle],
	queryFn: () => fetchProductByHandle(handle),
	staleTime: 6e4
});
//#endregion
export { productsQueryOptions as n, productQueryOptions as t };
