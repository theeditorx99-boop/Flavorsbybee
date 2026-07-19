import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { useCartStore } from "@/stores/cartStore";
import { formatMoney } from "@/lib/shopify";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ExternalLink, Loader2 } from "lucide-react";

export const Route = createFileRoute("/cart")({
  component: CartPage,
  head: () => ({
    meta: [{ title: "Your Basket — FlavorsByBee" }, { name: "robots", content: "noindex" }],
  }),
});

function CartPage() {
  const { items, isLoading, updateQuantity, removeItem, getCheckoutUrl } = useCartStore();
  const total = items.reduce((n, i) => n + parseFloat(i.price.amount) * i.quantity, 0);
  const currency = items[0]?.price.currencyCode ?? "USD";

  const checkout = () => {
    const url = getCheckoutUrl();
    if (url) window.open(url, "_blank");
  };

  return (
    <SiteShell>
      <section className="container-page py-16">
        <h1 className="mb-10 font-display text-4xl md:text-5xl">Your basket</h1>
        {items.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">Your basket is empty.</p>
            <Button asChild className="mt-6 rounded-none">
              <Link to="/shop">Start shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            <ul className="divide-y divide-border border-y border-border">
              {items.map((item) => {
                const img = item.product.node.images.edges[0]?.node;
                return (
                  <li key={item.variantId} className="grid grid-cols-[100px_1fr_auto] gap-6 py-6">
                    <div className="aspect-square overflow-hidden rounded-sm bg-secondary/40">
                      {img && (
                        <img
                          src={img.url}
                          alt={item.product.node.title}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                    <div className="min-w-0">
                      <Link
                        to="/products/$handle"
                        params={{ handle: item.product.node.handle }}
                        className="font-display text-xl hover:text-accent"
                      >
                        {item.product.node.title}
                      </Link>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {formatMoney(item.price.amount, item.price.currencyCode)}
                      </p>
                      <div className="mt-3 inline-flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          className="grid h-9 w-9 place-items-center hover:text-accent"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-10 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          className="grid h-9 w-9 place-items-center hover:text-accent"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <span className="font-medium">
                        {formatMoney(
                          parseFloat(item.price.amount) * item.quantity,
                          item.price.currencyCode,
                        )}
                      </span>
                      <button
                        onClick={() => removeItem(item.variantId)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <aside className="h-fit border border-border bg-secondary/40 p-6">
              <h2 className="font-display text-2xl">Order summary</h2>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatMoney(total, currency)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              <div className="mt-6 flex items-baseline justify-between border-t border-border pt-4">
                <span className="text-sm uppercase tracking-widest">Total</span>
                <span className="font-display text-2xl">{formatMoney(total, currency)}</span>
              </div>
              <Button
                size="lg"
                onClick={checkout}
                disabled={isLoading}
                className="mt-6 w-full rounded-none"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Checkout <ExternalLink className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </aside>
          </div>
        )}
      </section>
    </SiteShell>
  );
}
