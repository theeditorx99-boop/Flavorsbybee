import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { ProductCard } from "@/components/site/ProductCard";
import { productsQueryOptions } from "@/hooks/useProducts";

const titles: Record<string, { title: string; desc: string }> = {
  "boxed-chocolates": {
    title: "Boxed Chocolates",
    desc: "Handcrafted assortments ready to gift or share.",
  },
  truffles: { title: "Truffles", desc: "Silky ganache centres in delicate hand-finished shells." },
  bars: { title: "Chocolate Bars", desc: "Single-origin & signature bars, tempered by hand." },
  gifts: { title: "Gifts", desc: "Thoughtful chocolate gifts for every occasion." },
  birthday: { title: "Birthday Gifts", desc: "Sweet ways to say happy birthday." },
  "thank-you": { title: "Thank You Gifts", desc: "A meaningful thank you, hand-tied." },
  wedding: { title: "Wedding & Anniversary", desc: "Elegant favours and celebration gifts." },
  bestseller: { title: "Bestsellers", desc: "The pieces our community loves most." },
  dark: { title: "Dark Chocolate", desc: "Rich, intense, single-origin dark chocolate." },
  milk: { title: "Milk Chocolate", desc: "Creamy, mellow milk chocolate favourites." },
  white: { title: "White Chocolate", desc: "Delicate, buttery white chocolate creations." },
  vegan: { title: "Vegan", desc: "Dairy-free chocolates crafted with the same care." },
  "single-origin": {
    title: "Single Origin",
    desc: "Chocolate from one distinctive place of origin.",
  },
  "hot-chocolate": { title: "Hot Chocolate", desc: "Rich drinking chocolate for slow mornings." },
};

export const Route = createFileRoute("/collections/$handle")({
  loader: ({ context }) => context.queryClient.ensureQueryData(productsQueryOptions()),
  component: CollectionPage,
  head: ({ params }) => {
    const info = titles[params.handle] ?? { title: params.handle, desc: "" };
    return {
      meta: [
        { title: `${info.title} — FlavorsByBee` },
        { name: "description", content: info.desc || `Shop ${info.title} at FlavorsByBee.` },
        { property: "og:title", content: `${info.title} — FlavorsByBee` },
        { property: "og:url", content: `/collections/${params.handle}` },
      ],
      links: [{ rel: "canonical", href: `/collections/${params.handle}` }],
    };
  },
});

function CollectionPage() {
  const { handle } = Route.useParams();
  const products = useSuspenseQuery(productsQueryOptions()).data;
  const info = titles[handle] ?? { title: handle.replace(/-/g, " "), desc: "" };

  const filtered = useMemo(() => {
    const h = handle.toLowerCase();
    return products.filter((p) => {
      const type = p.node.productType.toLowerCase();
      const tags = p.node.tags.map((t) => t.toLowerCase());
      if (type.replace(/\s+/g, "-") === h) return true;
      if (tags.includes(h)) return true;
      if (h === "boxed-chocolates" && type.includes("box")) return true;
      if (h === "bars" && type.includes("bar")) return true;
      if (h === "truffles" && type.includes("truffle")) return true;
      return false;
    });
  }, [products, handle]);

  return (
    <SiteShell>
      <section 
        className={`relative border-b border-border py-24 ${
          handle === "gifts" ? "bg-cocoa text-primary-foreground" : "bg-secondary/30"
        }`}
      >
        {handle === "gifts" && (
          <>
            <img 
              src="/chocolate-gifts.jpg" 
              alt="Chocolate Gifts" 
              className="absolute inset-0 h-full w-full object-cover opacity-60" 
            />
            <div className="absolute inset-0 bg-black/40" />
          </>
        )}
        <div className="container-page relative text-center">
          <p className={`text-[11px] uppercase tracking-[0.28em] ${handle === "gifts" ? "text-gold-soft" : "text-accent"}`}>Collection</p>
          <h1 className="mt-3 font-display text-5xl capitalize md:text-6xl">{info.title}</h1>
          {info.desc && <p className={`mx-auto mt-4 max-w-xl ${handle === "gifts" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{info.desc}</p>}
        </div>
      </section>

      <section className="container-page py-16">
        {filtered.length === 0 ? (
          <div className="py-16 text-center text-muted-foreground">
            <p>No products found in this collection yet.</p>
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
