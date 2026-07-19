import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/site/SimplePage";

export const Route = createFileRoute("/contact")({
  component: () => (
    <SimplePage
      eyebrow="Contact"
      title="Get in touch"
      desc="We'd love to hear from you — questions, custom orders, or a hello."
    >
      <div className="mx-auto max-w-lg space-y-6">
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
          <input className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none" />
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
          <input
            type="email"
            className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
          <textarea
            rows={5}
            className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
          />
        </div>
        <button className="w-full bg-primary py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90">
          Send message
        </button>
      </div>
    </SimplePage>
  ),
  head: () => ({
    meta: [
      { title: "Contact — FlavorsByBee" },
      { name: "description", content: "Get in touch with the FlavorsByBee team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});
