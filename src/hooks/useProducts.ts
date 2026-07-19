import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { fetchProductByHandle, fetchProducts, type ShopifyProduct } from "@/lib/shopify";

export const productsQueryOptions = (query?: string) =>
  queryOptions({
    queryKey: ["shopify-products", query ?? "all"],
    queryFn: () => fetchProducts(query),
    staleTime: 60_000,
  });

export const productQueryOptions = (handle: string) =>
  queryOptions({
    queryKey: ["shopify-product", handle],
    queryFn: () => fetchProductByHandle(handle),
    staleTime: 60_000,
  });

export function useProducts(query?: string): ShopifyProduct[] {
  return useSuspenseQuery(productsQueryOptions(query)).data;
}
