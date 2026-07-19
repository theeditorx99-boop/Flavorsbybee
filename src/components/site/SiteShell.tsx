import { Suspense, type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CartDrawer } from "./CartDrawer";
import { Toaster } from "@/components/ui/sonner";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="container-page py-24 text-center text-muted-foreground">Loading…</div>
          }
        >
          {children}
        </Suspense>
      </main>
      <Footer />
      <CartDrawer />
      <Toaster position="top-center" />
    </div>
  );
}
