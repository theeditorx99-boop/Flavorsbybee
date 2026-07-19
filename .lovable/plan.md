# FlavorsByBee — Website Plan

Premium chocolate e-commerce site modeled structurally on Butlers Chocolates, branded as FlavorsByBee, powered by a new Shopify store for the real catalog, cart, and checkout.

## Stack & backend
- TanStack Start (React 19 + Vite + TS) — existing template
- Tailwind v4 + shadcn/ui components
- Framer Motion for tasteful transitions (hero, drawer, hover reveals)
- Shopify (new dev store) as the source of truth for products, cart, checkout
- Shopify Storefront API via a server route (`/api/shopify`) proxying GraphQL; cart token stored in localStorage
- TanStack Query for product/collection/cart fetching

## Brand direction
Butlers-inspired palette adapted for FlavorsByBee:
- Deep chocolate brown `#3B2416`, warm cream `#F5EFE4`, gold accent `#B8894A`, ivory background
- Serif display (Playfair Display) for headings, clean sans (Inter) for body
- Warm, appetite-driven photography (AI-generated for placeholder catalog)

## Sitemap / routes
```
/                        Home
/shop                    All products (filter + sort)
/collections/$handle     Collection listing (occasion / type / attribute)
/products/$handle        PDP with gallery, accordions, "what's inside"
/cart                    Full cart page (drawer is global)
/about                   Story hub (3 cards)
/about/story             Our Story
/about/sustainability    Sustainability
/about/awards            Awards
/experience              Tasting/factory experience booking page
/blog                    Recipes & stories index
/blog/$slug              Article
/corporate               Corporate gifts
/trade                   Wholesale inquiry
/delivery                Delivery & Returns
/ethics                  Ethics
/careers                 Careers
/contact                 Contact
/locator                 Store locator
/account/sign-in         Passwordless email sign-in (Shopify customer)
/account                 Order history
```

## Global components
- **AnnouncementBar** — free shipping threshold, dismissible
- **Header** — centered logo + tagline, mega menu (4 columns: Occasion / Type / Attribute / promo tile), search, account, wishlist, cart icon with live badge, currency selector
- **MegaMenu** — hover-open on desktop, full-screen sheet on mobile
- **CartDrawer** — slide-out from right, auto-opens on add-to-cart, line items with qty editor, subtotal, Checkout CTA linking to Shopify hosted checkout
- **Footer** — 4 link columns, newsletter signup, payment icons, socials, legal row
- **StickyMiniPDP** — appears on scroll on product pages

## Page specs
- **Home**: hero (headline + single CTA), "The Icons" featured rail with hover image swap and quick add, 8-tile collection grid, brand-moment split banner with 1–2 embedded featured products, editorial gifting block, 3-card "More From FlavorsByBee" (story / sustainability / recipes), newsletter block
- **Collection**: sidebar filters (occasion, type, attribute, dietary), sort dropdown, responsive card grid, quick add-to-basket, image hover swap
- **PDP**: gallery with thumbnails + breadcrumb + brand label, price, short desc, quantity stepper, Add to Basket, accordions (Delivery / Ingredients & Allergens / Weight & Size / Nutritional Info), "What's Inside" grid for assortment boxes, sticky mini bar on scroll, related products rail
- **Cart page**: full line-item table, gifting note field, subtotal, Checkout button
- **About hub**: 3 cards linking to Story / Sustainability / Awards
- **Experience**: hero, itinerary list, booking CTA, testimonial carousel
- **Content pages** (Corporate/Trade/Delivery/Ethics/Careers/Contact/Locator): styled content templates with forms where relevant

## Shopify setup (post-enable)
1. Enable Shopify → create new dev store
2. Offer store claim
3. Seed ~24 placeholder products across collections: Boxed Assortments, Bars, Truffles, Vegan, Dark, Milk, White, Gifts, Wedding, Thank You, Birthday
4. Generate hero + product imagery with imagegen (warm, premium chocolate photography)
5. Wire Storefront API for catalog fetch and cart mutations; use hosted checkout URL for purchase

## SEO & metadata
- Per-route `head()` with distinct title/description/og:title/og:description
- og:image on leaf routes (hero on home, product image on PDP, collection image on collection)
- JSON-LD Product schema on PDP

## Responsive
- Mobile drawer nav, condensed hero, single-column product grid at <640px
- Tablet 2-col grid, desktop 3–4 col
- All rows using text + icons use `grid-cols-[minmax(0,1fr)_auto]` + `min-w-0` + `shrink-0` per project responsive rules

## Build order
1. Enable Shopify (new store) and claim prompt
2. Design tokens in `src/styles.css` + fonts via `<link>` in `__root.tsx`
3. Global chrome: AnnouncementBar, Header, MegaMenu, CartDrawer, Footer
4. Shopify Storefront API client + server route + Query hooks
5. Home page + hero/product imagery
6. Collection + PDP pages
7. About hub + Experience + content pages
8. Account sign-in + order history
9. SEO metadata pass across routes
10. Responsive polish + Framer Motion transitions

## Out of scope for v1
- Real payment processing beyond Shopify's hosted checkout
- Blog CMS backend (blog posts hard-coded as sample content initially)
- Multi-language / true i18n (currency selector is visual)
- Three.js — not needed for this content/commerce site (removed from stack; can add later if desired)
