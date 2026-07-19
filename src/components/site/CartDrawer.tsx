import { useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ExternalLink, Loader2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatMoney } from "@/lib/shopify";
import { Link } from "@tanstack/react-router";

export function CartDrawer() {
  const {
    items,
    isLoading,
    isSyncing,
    isOpen,
    setOpen,
    updateQuantity,
    removeItem,
    getCheckoutUrl,
    syncCart,
  } = useCartStore();
  const totalItems = items.reduce((n, i) => n + i.quantity, 0);
  const totalPrice = items.reduce((n, i) => n + parseFloat(i.price.amount) * i.quantity, 0);
  const currency = items[0]?.price.currencyCode ?? "USD";

  useEffect(() => {
    if (isOpen) syncCart();
  }, [isOpen, syncCart]);

  const handleCheckout = () => {
    const url = getCheckoutUrl();
    if (url) {
      window.open(url, "_blank");
      setOpen(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border p-5">
          <SheetTitle className="flex items-center justify-between font-display text-2xl">
            Your basket
            <span className="text-sm font-normal text-muted-foreground">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </span>
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            <p className="text-muted-foreground">Your basket is empty</p>
            <Button variant="outline" onClick={() => setOpen(false)} asChild>
              <Link to="/shop">Continue shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto">
              <ul className="divide-y divide-border">
                {items.map((item) => {
                  const img = item.product.node.images?.edges?.[0]?.node;
                  return (
                    <li
                      key={item.variantId}
                      className="grid grid-cols-[80px_minmax(0,1fr)_auto] gap-4 p-5"
                    >
                      <div className="aspect-square overflow-hidden rounded bg-secondary/50">
                        {img && (
                          <img
                            src={img.url}
                            alt={item.product.node.title}
                            className="h-full w-full object-cover"
                          />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-display text-lg leading-tight">
                          {item.product.node.title}
                        </p>
                        {item.variantTitle && item.variantTitle !== "Default Title" && (
                          <p className="text-xs text-muted-foreground">{item.variantTitle}</p>
                        )}
                        <p className="mt-2 text-sm">
                          {formatMoney(item.price.amount, item.price.currencyCode)}
                        </p>
                        <div className="mt-3 inline-flex items-center rounded border border-border">
                          <button
                            aria-label="Decrease"
                            className="grid h-8 w-8 place-items-center hover:text-accent"
                            onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            aria-label="Increase"
                            className="grid h-8 w-8 place-items-center hover:text-accent"
                            onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                      <button
                        aria-label="Remove"
                        onClick={() => removeItem(item.variantId)}
                        className="self-start text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="space-y-4 border-t border-border bg-secondary/40 p-5">
              <div className="flex items-baseline justify-between">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">
                  Subtotal
                </span>
                <span className="font-display text-2xl">{formatMoney(totalPrice, currency)}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout.
              </p>
              <Button
                size="lg"
                onClick={handleCheckout}
                disabled={isLoading || isSyncing}
                className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isLoading || isSyncing ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Checkout <ExternalLink className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
              <Button variant="ghost" asChild className="w-full" onClick={() => setOpen(false)}>
                <Link to="/cart">View full basket</Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
