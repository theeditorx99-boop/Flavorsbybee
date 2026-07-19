import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/SiteShell";
import storyCraft from "@/assets/story-craft.jpg";
import storySourcing from "@/assets/story-sourcing.jpg";
import heroGifting from "@/assets/hero-gifting.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Our Story — FlavorsByBee" },
      {
        name: "description",
        content:
          "The story behind FlavorsByBee — small-batch chocolate crafted with care from bean to box.",
      },
      { property: "og:title", content: "Our Story — FlavorsByBee" },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: storyCraft },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-cocoa text-primary-foreground">
        <video
          src="/our-story.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="container-page relative py-32 text-center">
          <motion.div className="max-w-3xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.32em] text-gold-soft">Our story</p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl">
              Chocolate, made with intention.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-primary-foreground/80">
              At FlavorsByBee, we take the time to do things right. In a world of mass production, we proudly stand for the slow, meticulous craft of artisan chocolate-making. Our collections are born from a deep respect for the ingredients, partnering directly with farmers to ensure our cacao is ethically and sustainably sourced. Our chocolatiers pour their expertise into every small batch, carefully hand-tempering the chocolate and filling each truffle with luscious, slow-cooked ganache. The result is a collection of signature assortments, decadent truffles, and rich chocolate bars that offer a taste you simply cannot rush. Indulge in the comfort of true craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-page grid gap-16 py-24 md:grid-cols-2">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Craft</p>
          <h2 className="mt-3 font-display text-4xl">Small batches. Big flavour.</h2>
          <p className="mt-5 text-foreground/75">
            Every piece is tempered by hand and finished with care. We favour slow methods — long
            conching, slow-cooked ganache, patient hand-decoration — because it's what makes the
            difference in a bite.
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <video src="/our-craft.mp4" autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>

      <section className="container-page grid gap-16 py-24 md:grid-cols-2">
        <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-sm md:order-1">
          <video src="/cacao.mp4" autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Sourcing</p>
          <h2 className="mt-3 font-display text-4xl">Ethical, honest cacao.</h2>
          <p className="mt-5 text-foreground/75">
            We work directly with a small circle of growers who share our commitment to quality and
            to fair pay. Each origin we use is chosen for character, not commodity — and always
            traceable back to the people who grow it.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-page grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Gifting</p>
            <h2 className="mt-3 font-display text-4xl">Made to be shared.</h2>
            <p className="mt-5 text-foreground/75">
              A FlavorsByBee box is designed to feel special from the moment it arrives —
              heavyweight paper, satin ribbon and a hand-signed note. Chocolate has always been a
              language of care; we just make it beautiful.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <video src="/gifts.mp4" autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
