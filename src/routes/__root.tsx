import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteShell } from "@/components/site/SiteShell";
import { useCartSync } from "@/hooks/useCartSync";

function NotFoundComponent() {
  return (
    <SiteShell>
      <div className="container-page py-24 text-center">
        <p className="text-[11px] uppercase tracking-[0.28em] text-accent">404</p>
        <h1 className="mt-3 font-display text-5xl">This shelf is empty</h1>
        <p className="mt-4 text-muted-foreground">
          The page you're looking for has been moved or no longer exists.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center rounded-none bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
        >
          Return home
        </a>
      </div>
    </SiteShell>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <SiteShell>
      <div className="container-page py-24 text-center">
        <h1 className="font-display text-4xl">Something didn't load</h1>
        <p className="mt-3 text-muted-foreground">Please try again in a moment.</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 inline-flex rounded-none bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
        >
          Try again
        </button>
      </div>
    </SiteShell>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FlavorsByBee — Handcrafted Chocolates & Confections" },
      {
        name: "description",
        content:
          "Handcrafted chocolates, boxed assortments and gifts made in small batches. Discover FlavorsByBee.",
      },
      { property: "og:title", content: "FlavorsByBee — Handcrafted Chocolates" },
      {
        property: "og:description",
        content: "Small-batch chocolates, truffles and gifting collections.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "FlavorsByBee" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/flavor.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AppWithCartSync />
    </QueryClientProvider>
  );
}

function AppWithCartSync() {
  useCartSync();
  return <Outlet />;
}
