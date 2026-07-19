import { createFileRoute } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { SiteShell } from "@/components/site/SiteShell";

interface Props {
  eyebrow?: string;
  title: string;
  desc: string;
  children?: ReactNode;
}

export function SimplePage({ eyebrow, title, desc, children }: Props) {
  return (
    <SiteShell>
      <section className="border-b border-border bg-secondary/30 py-16">
        <div className="container-page text-center">
          {eyebrow && (
            <p className="text-[11px] uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
          )}
          <h1 className="mt-3 font-display text-5xl md:text-6xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{desc}</p>
        </div>
      </section>
      <section className="container-page py-16">
        {children ?? (
          <div className="mx-auto max-w-2xl text-center text-muted-foreground">
            <p>
              This page is coming soon. In the meantime, explore our collection or reach out to us.
            </p>
          </div>
        )}
      </section>
    </SiteShell>
  );
}

export function makeSimpleRoute(path: string, eyebrow: string, title: string, desc: string) {
  return createFileRoute(path as never)({
    component: () => <SimplePage eyebrow={eyebrow} title={title} desc={desc} />,
    head: () => ({
      meta: [
        { title: `${title} — FlavorsByBee` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — FlavorsByBee` },
        { property: "og:url", content: path },
      ],
      links: [{ rel: "canonical", href: path }],
    }),
  });
}
