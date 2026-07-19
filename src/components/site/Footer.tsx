import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";

const groups = [
  {
    title: "Shop",
    links: [
      { label: "All Chocolates", to: "/shop" },
      {
        label: "Boxed Assortments",
        to: "/collections/$handle",
        params: { handle: "boxed-chocolates" },
      },
      { label: "Truffles", to: "/collections/$handle", params: { handle: "truffles" } },
      { label: "Gifts", to: "/collections/$handle", params: { handle: "gifts" } },
      { label: "Corporate", to: "/corporate" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about/story" },
      { label: "Sustainability", to: "/about/sustainability" },
      { label: "Awards", to: "/about/awards" },
      { label: "Careers", to: "/careers" },
      { label: "Ethics", to: "/ethics" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", to: "/contact" },
      { label: "Delivery & Returns", to: "/delivery" },
      { label: "Store Locator", to: "/locator" },
      { label: "Trade Enquiries", to: "/trade" },
      { label: "FAQ", to: "/delivery" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo className="[&_span]:!text-primary-foreground [&_span:nth-child(2)]:!text-gold-soft" />
            <p className="mt-6 max-w-xs text-sm text-primary-foreground/70">
              Handcrafted chocolates, thoughtfully sourced and made in small batches to be gifted,
              shared, and savoured.
            </p>
            <form className="mt-6 flex max-w-sm items-center gap-2 border-b border-primary-foreground/30 pb-1">
              <input
                type="email"
                placeholder="Treat your inbox — email address"
                className="w-full bg-transparent py-2 text-sm placeholder:text-primary-foreground/50 focus:outline-none"
              />
              <button
                type="submit"
                className="text-xs font-semibold uppercase tracking-widest text-gold-soft hover:text-accent-foreground"
              >
                Sign up
              </button>
            </form>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-soft">
                {g.title}
              </h4>
              <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to as never}
                      params={l.params as never}
                      className="hover:text-accent-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-6 border-t border-primary-foreground/15 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} FlavorsByBee. All rights reserved.{" "}
            <Link to={"/delivery" as never} className="hover:text-accent-foreground">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link to={"/delivery" as never} className="hover:text-accent-foreground">
              Terms
            </Link>
          </p>
          <div className="flex items-center gap-4">
            <div className="flex gap-3 text-primary-foreground/60">
              {["VISA", "MC", "AMEX", "PAYPAL", "APPLE"].map((p) => (
                <span
                  key={p}
                  className="rounded border border-primary-foreground/20 px-2 py-1 text-[10px] tracking-wider"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="hover:text-accent-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-accent-foreground">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
