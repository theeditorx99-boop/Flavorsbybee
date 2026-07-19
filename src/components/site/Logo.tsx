import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span className="font-display text-2xl tracking-wide text-primary md:text-3xl">
        Flavors<span className="text-accent">By</span>Bee
      </span>
      <span className="mt-0.5 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        Est. Handcrafted Chocolate
      </span>
    </Link>
  );
}

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container-page flex h-9 items-center justify-center text-center text-xs tracking-wide">
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Complimentary shipping on orders over $50 —{" "}
          <Link to={"/delivery" as never} className="underline underline-offset-2">
            Delivery details
          </Link>
        </motion.p>
      </div>
    </div>
  );
}
