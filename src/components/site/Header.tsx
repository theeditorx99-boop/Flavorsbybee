import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { AnnouncementBar, Logo } from "./Logo";
import { MegaMenu } from "./MegaMenu";

const primaryNav: Array<{
  label: string;
  to: string;
  params?: Record<string, string>;
  hasMega?: boolean;
}> = [
  { label: "Shop", to: "/shop", hasMega: true },
  { label: "Bestsellers", to: "/collections/$handle", params: { handle: "bestseller" } },
  { label: "Gifts", to: "/collections/$handle", params: { handle: "gifts" } },
  { label: "Experience", to: "/experience" },
  { label: "Our Story", to: "/about" },
  { label: "Recipes", to: "/blog" },
];

export function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const totalItems = useCartStore((s) => s.items.reduce((n, i) => n + i.quantity, 0));
  const openCart = useCartStore((s) => s.openCart);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-40 w-full">
      <AnnouncementBar />
      <header
        className={`w-full border-b border-border/60 bg-background/95 backdrop-blur transition-shadow ${
          scrolled ? "shadow-sm" : ""
        }`}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="container-page">
          <div className="grid h-20 grid-cols-[auto_1fr_auto] items-center gap-4 md:h-24">
            {/* Left icons on desktop / hamburger on mobile */}
            <div className="flex items-center gap-2 md:min-w-[160px]">
              <button
                onClick={() => setMobileOpen(true)}
                className="grid h-10 w-10 place-items-center rounded-md text-foreground/80 hover:text-accent md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
              <button
                className="hidden h-10 w-10 items-center justify-center rounded-md text-foreground/80 hover:text-accent md:inline-flex"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <span className="hidden text-xs text-muted-foreground md:inline">USD $ / EN</span>
            </div>

            <div className="flex justify-center">
              <Logo />
            </div>

            <div className="flex items-center justify-end gap-1 md:min-w-[160px]">
              <Link
                to={"/account/sign-in" as never}
                className="hidden h-10 w-10 items-center justify-center rounded-md text-foreground/80 hover:text-accent md:inline-flex"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </Link>
              <button
                className="hidden h-10 w-10 items-center justify-center rounded-md text-foreground/80 hover:text-accent md:inline-flex"
                aria-label="Wishlist"
              >
                <Heart className="h-5 w-5" />
              </button>
              <button
                onClick={openCart}
                className="relative grid h-10 w-10 place-items-center rounded-md text-foreground/80 hover:text-accent"
                aria-label="Cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-semibold text-accent-foreground">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center justify-center border-t border-border/50 md:flex">
            <ul className="flex items-center gap-8 py-3 text-[13px] font-medium uppercase tracking-[0.14em]">
              {primaryNav.map((item) => (
                <li key={item.label} onMouseEnter={() => setMegaOpen(!!item.hasMega)}>
                  <Link
                    to={item.to as never}
                    params={item.params as never}
                    className="inline-flex items-center gap-1 text-foreground/80 transition-colors hover:text-accent"
                    activeProps={{ className: "text-accent" }}
                  >
                    {item.label}
                    {item.hasMega && <ChevronDown className="h-3 w-3" />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mega menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="absolute left-0 right-0 hidden border-b border-border/60 bg-background shadow-md md:block"
            >
              <div className="container-page">
                <MegaMenu onNavigate={() => setMegaOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger className="sr-only">menu</SheetTrigger>
        <SheetContent side="left" className="w-full max-w-sm overflow-y-auto p-0">
          <SheetHeader className="border-b border-border p-4">
            <SheetTitle className="flex items-center justify-between">
              <Logo />
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </SheetTitle>
          </SheetHeader>
          <div className="p-2">
            <nav className="flex flex-col divide-y divide-border/60">
              {primaryNav.map((item) => (
                <Link
                  key={item.label}
                  to={item.to as never}
                  params={item.params as never}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-4 text-sm font-medium uppercase tracking-widest text-foreground hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-2">
              <MegaMenu onNavigate={() => setMobileOpen(false)} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
