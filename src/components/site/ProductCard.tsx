import { type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Loader2, Plus } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatMoney, type ShopifyProduct } from "@/lib/shopify";
import { Button } from "@/components/ui/button";

interface Props {
  product: ShopifyProduct;
  compact?: boolean;
}

export function ProductCard({ product, compact }: Props) {
  const p = product.node;
  const primaryImg = p.images.edges[0]?.node;
  const secondaryImg = p.images.edges[1]?.node ?? primaryImg;
  const variant = p.variants.edges[0]?.node;
  const price = p.priceRange.minVariantPrice;

  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  const onAdd = async (e: MouseEvent) => {
    e.preventDefault();
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions ?? [],
    });
  };

  return (
    <div className="group flex flex-col">
      <Link
        to="/products/$handle"
        params={{ handle: p.handle }}
        className="relative block overflow-hidden rounded-sm bg-secondary/40"
      >
        <div className="aspect-square">
          {primaryImg && (
            <img
              src={primaryImg.url}
              alt={primaryImg.altText ?? p.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:opacity-0"
            />
          )}
          {secondaryImg && (
            <img
              src={secondaryImg.url}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-700 group-hover:opacity-100"
            />
          )}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-4 justify-center p-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Button
            size="sm"
            onClick={onAdd}
            disabled={isLoading || !variant}
            className="pointer-events-auto rounded-none bg-primary/95 px-5 text-primary-foreground hover:bg-primary"
          >
            {isLoading ? (
              <Loader2 className="h-3 w-3 animate-spin" />
            ) : (
              <>
                <Plus className="mr-1 h-3 w-3" /> Add to basket
              </>
            )}
          </Button>
        </div>
      </Link>
      <div className={`mt-4 text-center ${compact ? "space-y-1" : "space-y-1.5"}`}>
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{p.vendor}</p>
        <Link
          to="/products/$handle"
          params={{ handle: p.handle }}
          className="block font-display text-lg text-foreground transition-colors hover:text-accent md:text-xl"
        >
          {p.title}
        </Link>
        <p className="text-sm text-foreground/80">
          {formatMoney(price.amount, price.currencyCode)}
        </p>
      </div>
    </div>
  );
}
