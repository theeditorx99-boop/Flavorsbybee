import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/SiteShell";
import { Sparkles, MapPin, Users, Clock } from "lucide-react";
import heroMain from "@/assets/hero-main.jpg";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
  head: () => ({
    meta: [
      { title: "Chocolate Experiences — FlavorsByBee" },
      {
        name: "description",
        content:
          "Tastings, masterclasses, and private chocolate experiences with the FlavorsByBee team.",
      },
      { property: "og:title", content: "Chocolate Experiences — FlavorsByBee" },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
});

const experiences = [
  {
    icon: Sparkles,
    title: "Tasting Flight",
    desc: "A guided journey across five single-origin chocolates.",
    duration: "60 min",
    price: "$45",
  },
  {
    icon: Users,
    title: "Truffle Masterclass",
    desc: "Learn to hand-roll and decorate your own truffles.",
    duration: "2 hrs",
    price: "$95",
  },
  {
    icon: MapPin,
    title: "Origin Discovery",
    desc: "A deep-dive into the flavour of place — bean to bar.",
    duration: "90 min",
    price: "$65",
  },
  {
    icon: Clock,
    title: "Private Event",
    desc: "Book the studio for a bespoke chocolate evening.",
    duration: "3 hrs",
    price: "From $600",
  },
];

function ExperiencePage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-cocoa text-primary-foreground">
        <video
          src="/experience.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="container-page relative py-28 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <p className="text-[11px] uppercase tracking-[0.32em] text-gold-soft">Experiences</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl">Come and taste with us.</h1>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Intimate tastings, hands-on masterclasses and private events at our chocolate studio.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((ex, i) => (
            <motion.div
              key={ex.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
              className="group flex gap-6 border border-border bg-card p-8 transition-shadow hover:shadow-md"
            >
              <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                <ex.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl">{ex.title}</h3>
                  <span className="text-sm font-semibold text-accent">{ex.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{ex.desc}</p>
                <p className="mt-4 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {ex.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
