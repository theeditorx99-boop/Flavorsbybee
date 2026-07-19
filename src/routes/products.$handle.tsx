import { createFileRoute, notFound } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Minus, Plus, ShieldCheck, Truck, Gift } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { productQueryOptions, productsQueryOptions } from "@/hooks/useProducts";
import { formatMoney } from "@/lib/shopify";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products/$handle")({
  loader: async ({ context, params }) => {
    const product = await context.queryClient.ensureQueryData(productQueryOptions(params.handle));
    if (!product) throw notFound();
    context.queryClient.prefetchQuery(productsQueryOptions());
    return { product };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData)
      return {
        meta: [
          { title: "Product not found — FlavorsByBee" },
          { name: "robots", content: "noindex" },
        ],
      };
    const p = loaderData.product.node;
    const img = p.images.edges[0]?.node?.url;
    return {
      meta: [
        { title: `${p.title} — FlavorsByBee` },
        { name: "description", content: p.description.slice(0, 155) },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.description.slice(0, 155) },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.handle}` },
        ...(img
          ? [
              { property: "og:image", content: img },
              { name: "twitter:image", content: img },
            ]
          : []),
      ],
      links: [{ rel: "canonical", href: `/products/${params.handle}` }],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { handle } = Route.useParams();
  const product = useSuspenseQuery(productQueryOptions(handle)).data!;
  const all = useSuspenseQuery(productsQueryOptions()).data;
  const p = product.node;
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const variant = p.variants.edges[0]?.node;
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const related = all.filter((x) => x.node.id !== p.id).slice(0, 4);

  const onAdd = async () => {
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: qty,
      selectedOptions: variant.selectedOptions ?? [],
    });
  };

  return (
    <SiteShell>
      <section className="container-page py-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="grid gap-4">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="aspect-square overflow-hidden rounded-sm bg-secondary/40"
            >
              {p.images.edges[activeImage]?.node && (
                <img
                  src={p.images.edges[activeImage].node.url}
                  alt={p.images.edges[activeImage].node.altText ?? p.title}
                  className="h-full w-full object-cover"
                />
              )}
            </motion.div>
            {p.images.edges.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {p.images.edges.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`aspect-square overflow-hidden rounded-sm border-2 transition ${
                      activeImage === i ? "border-accent" : "border-transparent"
                    }`}
                  >
                    <img src={img.node.url} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-accent">
              {p.productType || p.vendor}
            </p>
            <h1 className="mt-3 font-display text-4xl md:text-5xl">{p.title}</h1>
            <p className="mt-4 text-2xl font-medium">
              {formatMoney(
                p.priceRange.minVariantPrice.amount,
                p.priceRange.minVariantPrice.currencyCode,
              )}
            </p>
            <div className="mt-6 h-px w-full bg-border" />
            <p className="mt-6 leading-relaxed text-foreground/80">{p.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="grid h-12 w-12 place-items-center hover:text-accent"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-medium">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="grid h-12 w-12 place-items-center hover:text-accent"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button
                onClick={onAdd}
                disabled={isLoading || !variant}
                size="lg"
                className="min-w-[220px] flex-1 rounded-none bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Add to basket"}
              </Button>
            </div>

            <ul className="mt-10 space-y-3 text-sm text-foreground/70">
              <li className="flex items-center gap-3">
                <Truck className="h-4 w-4 text-accent" /> Complimentary shipping on orders over $50
              </li>
              <li className="flex items-center gap-3">
                <Gift className="h-4 w-4 text-accent" /> Elegant gift packaging included
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-accent" /> Freshness guaranteed — made in small
                batches
              </li>
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-secondary/30 py-20">
          <div className="container-page">
            <h2 className="mb-10 text-center font-display text-3xl md:text-4xl">
              You may also love
            </h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
              {related.map((r) => (
                <ProductCard key={r.node.id} product={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteShell>
  );
}
