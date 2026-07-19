import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Leaf, Award, Heart, Truck } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { ProductCard } from "@/components/site/ProductCard";
import { productsQueryOptions } from "@/hooks/useProducts";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import heroMain from "@/assets/hero-main.jpg";
import heroGifting from "@/assets/hero-gifting.jpg";
import storyCraft from "@/assets/story-craft.jpg";
import storySourcing from "@/assets/story-sourcing.jpg";

export const Route = createFileRoute("/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(productsQueryOptions()),
  component: HomePage,
  head: () => ({
    meta: [
      { title: "FlavorsByBee — Handcrafted Chocolates & Gifts" },
      {
        name: "description",
        content:
          "Discover small-batch chocolates, truffles, and thoughtful gifting collections handcrafted by FlavorsByBee.",
      },
      { property: "og:title", content: "FlavorsByBee — Handcrafted Chocolates" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const collections = [
  {
    title: "Signature Assortments",
    desc: "Our best-loved boxes",
    to: "/collections/$handle",
    params: { handle: "boxed-chocolates" },
    image: "/signature-assortments.jpg",
  },
  {
    title: "Truffles",
    desc: "Silky ganache centres",
    to: "/collections/$handle",
    params: { handle: "truffles" },
    image: "/truffles.jpg",
  },
  {
    title: "Chocolate Bars",
    desc: "Single-origin & blends",
    to: "/collections/$handle",
    params: { handle: "bars" },
    image: "/chocolate-bars.jpg",
  },
];

const badges = [
  { icon: Leaf, label: "Ethically Sourced" },
  { icon: Award, label: "Award Winning" },
  { icon: Heart, label: "Handmade in Small Batches" },
  { icon: Truck, label: "Complimentary Shipping $50+" },
];

function HomePage() {
  const products = useSuspenseQuery(productsQueryOptions()).data;
  const bestsellers = products.slice(0, 4);
  const gifts = products.slice(0, 3);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);

  return (
    <SiteShell>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden bg-cocoa text-primary-foreground">
        <div className="absolute inset-0 w-full overflow-hidden">
          <motion.div 
            className="absolute inset-0 origin-center overflow-hidden"
            style={{ scale: bgScale, willChange: "transform" }}
          >
            <video
              src="/hero-page-1.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cocoa/90 via-cocoa/50 to-cocoa/20" />
          </motion.div>
          <motion.div 
            className="container-page relative grid min-h-[70vh] md:min-h-[80vh] items-center py-24"
            style={{ scale: textScale, willChange: "transform" }}
          >
          <motion.div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.32em] text-gold-soft">
              New Season Collection
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
              A moment worth <span className="italic text-gold-soft">savouring.</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-primary-foreground/80 md:text-lg">
              Small-batch chocolates crafted from ethically sourced cacao and thoughtfully packaged
              for gifting, sharing and every quiet indulgence in between.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-accent px-8 text-accent-foreground hover:bg-accent/90"
              >
                <Link to="/shop">Shop the collection</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/collections/$handle" params={{ handle: "gifts" }}>
                  Explore gifts
                </Link>
              </Button>
            </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value badges */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container-page grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center justify-center gap-3 text-center">
              <b.icon className="h-5 w-5 text-accent" />
              <span className="text-xs font-medium uppercase tracking-widest text-foreground/80">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Merchandising grid — collections */}
      <section className="container-page py-20">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Shop by category</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Explore the collection</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((c) => (
            <Link
              key={c.title}
              to={c.to as never}
              params={c.params as never}
              className="group relative block overflow-hidden rounded-sm bg-cocoa"
            >
              <div className="aspect-[4/5]">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <p className="text-[10px] uppercase tracking-[0.24em] text-gold-soft">{c.desc}</p>
                <h3 className="mt-2 font-display text-2xl md:text-3xl">{c.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
                  Discover{" "}
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers rail */}
      <section className="bg-secondary/30 py-20">
        <div className="container-page">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-accent">
                Loved by our community
              </p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">Bestsellers</h2>
            </div>
            <Link
              to="/shop"
              className="text-xs font-semibold uppercase tracking-widest text-foreground hover:text-accent"
            >
              View all →
            </Link>
          </div>
          {bestsellers.length === 0 ? (
            <p className="text-center text-muted-foreground">No products found</p>
          ) : (
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
              {bestsellers.map((p) => (
                <ProductCard key={p.node.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Story split */}
      <section className="container-page py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <video
              src="/our-craft.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Our craft</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Chocolate, made slowly.</h2>
            <p className="mt-5 text-foreground/75">
              Welcome to FlavorsByBee, where the art of chocolate is made slowly, thoughtfully, and with uncompromising passion. We believe that true luxury lies in the details. Every piece we create is handcrafted in small batches, starting with ethically sourced cacao cultivated by a small circle of dedicated growers. From our intensely rich, single-origin dark chocolate bars to our delicate truffles filled with slow-cooked, silky ganache, every confection is tempered by hand to achieve the perfect snap and melt. Whether you are seeking a moment of quiet personal indulgence or a beautifully curated gift box to share with someone special, FlavorsByBee delivers flavors that feel personal, from bean to box.
            </p>
            <Button
              asChild
              variant="link"
              className="mt-4 h-auto p-0 text-sm font-semibold uppercase tracking-widest text-accent"
            >
              <Link to="/about">Discover our story →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gifting */}
      <section className="bg-cocoa py-24 text-primary-foreground">
        <div className="container-page">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-gold-soft">
                Thoughtful gifts
              </p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">
                Gift a moment they'll remember
              </h2>
            </div>
            <Link
              to="/collections/$handle"
              params={{ handle: "gifts" }}
              className="text-xs font-semibold uppercase tracking-widest text-gold-soft hover:text-accent-foreground"
            >
              All gifts →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {gifts.map((p) => (
              <Link
                key={p.node.id}
                to="/products/$handle"
                params={{ handle: p.node.handle }}
                className="group block overflow-hidden rounded-sm bg-background/5"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.node.images.edges[0]?.node.url}
                    alt={p.node.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-gold-soft">
                    {p.node.productType}
                  </p>
                  <h3 className="mt-2 font-display text-2xl">{p.node.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/70 line-clamp-2">
                    {p.node.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
