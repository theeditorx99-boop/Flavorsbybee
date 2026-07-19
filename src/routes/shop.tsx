import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { SiteShell } from "@/components/site/SiteShell";
import { ProductCard } from "@/components/site/ProductCard";
import { productsQueryOptions } from "@/hooks/useProducts";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/shop")({
  loader: ({ context }) => context.queryClient.ensureQueryData(productsQueryOptions()),
  component: ShopPage,
  head: () => ({
    meta: [
      { title: "Shop All Chocolates — FlavorsByBee" },
      {
        name: "description",
        content:
          "Browse the complete FlavorsByBee collection of handcrafted chocolates, truffles, bars and gifts.",
      },
      { property: "og:title", content: "Shop All — FlavorsByBee" },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
});

const filters = ["All", "Boxed", "Truffles", "Bars", "Gifts"];

function ShopPage() {
  const products = useSuspenseQuery(productsQueryOptions()).data;
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = [...products];
    if (filter !== "All") {
      list = list.filter((p) => {
        const t = p.node.productType.toLowerCase();
        if (filter === "Boxed") return t.includes("box");
        if (filter === "Truffles") return t.includes("truffle");
        if (filter === "Bars") return t.includes("bar");
        if (filter === "Gifts")
          return p.node.tags.some((tag) => tag.toLowerCase().includes("gift"));
        return true;
      });
    }
    if (sort === "price-asc")
      list.sort(
        (a, b) =>
          parseFloat(a.node.priceRange.minVariantPrice.amount) -
          parseFloat(b.node.priceRange.minVariantPrice.amount),
      );
    if (sort === "price-desc")
      list.sort(
        (a, b) =>
          parseFloat(b.node.priceRange.minVariantPrice.amount) -
          parseFloat(a.node.priceRange.minVariantPrice.amount),
      );
    if (sort === "name") list.sort((a, b) => a.node.title.localeCompare(b.node.title));
    return list;
  }, [products, filter, sort]);

  return (
    <SiteShell>
      <section className="border-b border-border bg-secondary/30 py-16">
        <div className="container-page text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Shop</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">All Chocolates</h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Discover a world of refined sweetness at FlavorsByBee. We are a boutique chocolaterie dedicated to crafting unforgettable tasting experiences through small-batch chocolates, luxurious truffles, and elegant gifting collections. We source only the finest ethical cacao to craft bold, comforting flavors—like our molten salted caramel wrapped in rich milk chocolate, or our intense 70% single-origin dark truffles dusted in pure cocoa. Packaged beautifully and tied with satin ribbon, our signature assortments are designed to elevate life’s everyday moments. At FlavorsByBee, we aren't just making chocolate; we are crafting moments meant to be gifted, shared, and savored.
          </p>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <Button
                key={f}
                variant={filter === f ? "default" : "outline"}
                onClick={() => setFilter(f)}
                className="rounded-none"
                size="sm"
              >
                {f}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <label className="text-muted-foreground">Sort:</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border-b border-border bg-transparent py-1 text-sm focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="py-24 text-center text-muted-foreground">
            <p>No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {filtered.map((p) => (
              <ProductCard key={p.node.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </SiteShell>
  );
}
