import { Link } from "@tanstack/react-router";
import productSignature from "@/assets/product-signature-box.jpg";

type Column = {
  title: string;
  links: Array<{ label: string; to: string; params?: Record<string, string> }>;
};

const columns: Column[] = [
  {
    title: "By Occasion",
    links: [
      { label: "Birthday", to: "/collections/$handle", params: { handle: "birthday" } },
      { label: "Thank You", to: "/collections/$handle", params: { handle: "thank-you" } },
      { label: "Wedding & Anniversary", to: "/collections/$handle", params: { handle: "wedding" } },
      { label: "Corporate Gifts", to: "/corporate" },
      { label: "Just Because", to: "/collections/$handle", params: { handle: "gifts" } },
    ],
  },
  {
    title: "By Type",
    links: [
      {
        label: "Boxed Assortments",
        to: "/collections/$handle",
        params: { handle: "boxed-chocolates" },
      },
      { label: "Truffles", to: "/collections/$handle", params: { handle: "truffles" } },
      { label: "Chocolate Bars", to: "/collections/$handle", params: { handle: "bars" } },
      { label: "Hot Chocolate", to: "/collections/$handle", params: { handle: "hot-chocolate" } },
      { label: "Shop All", to: "/shop" },
    ],
  },
  {
    title: "By Attribute",
    links: [
      { label: "Dark Chocolate", to: "/collections/$handle", params: { handle: "dark" } },
      { label: "Milk Chocolate", to: "/collections/$handle", params: { handle: "milk" } },
      { label: "White Chocolate", to: "/collections/$handle", params: { handle: "white" } },
      { label: "Vegan", to: "/collections/$handle", params: { handle: "vegan" } },
      { label: "Single Origin", to: "/collections/$handle", params: { handle: "single-origin" } },
    ],
  },
];

interface MegaMenuProps {
  onNavigate?: () => void;
}

export function MegaMenu({ onNavigate }: MegaMenuProps) {
  return (
    <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-[repeat(3,1fr)_1.2fr] md:gap-10">
      {columns.map((col) => (
        <div key={col.title}>
          <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            {col.title}
          </h4>
          <ul className="space-y-2.5">
            {col.links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to as never}
                  params={link.params as never}
                  onClick={onNavigate}
                  className="text-sm text-foreground/80 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Link
        to="/collections/$handle"
        params={{ handle: "gifts" }}
        onClick={onNavigate}
        className="group relative block overflow-hidden rounded-md bg-cocoa"
      >
        <img
          src={productSignature}
          alt="Featured gift collection"
          className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-5 text-primary-foreground">
          <p className="text-[10px] uppercase tracking-[0.22em] text-gold-soft">Featured</p>
          <p className="mt-1 font-display text-xl">The Signature Collection</p>
          <p className="mt-1 text-xs opacity-80">Explore our gifting favourites →</p>
        </div>
      </Link>
    </div>
  );
}
