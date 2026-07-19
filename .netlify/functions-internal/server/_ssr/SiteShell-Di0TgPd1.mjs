import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, l as Slot, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { S as ChevronDown, _ as Heart, a as Trash2, b as ExternalLink, d as Minus, f as Menu, g as Instagram, l as Search, m as LoaderCircle, r as User, s as ShoppingBag, t as X, u as Plus, y as Facebook } from "../_libs/lucide-react.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteShell-Di0TgPd1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var SHOPIFY_STOREFRONT_URL = `https://sweet-site-builder-lp5at-6cnrwusd.myshopify.com/api/2025-07/graphql.json`;
var SHOPIFY_STOREFRONT_TOKEN = "be2b2d2be89f730e4829bd7f2b612c82";
var PRODUCT_FIELDS = `
  id
  title
  description
  handle
  productType
  tags
  vendor
  priceRange { minVariantPrice { amount currencyCode } }
  images(first: 5) { edges { node { url altText } } }
  variants(first: 10) {
    edges {
      node {
        id
        title
        price { amount currencyCode }
        availableForSale
        selectedOptions { name value }
      }
    }
  }
  options { name values }
`;
var STOREFRONT_QUERY = `
  query GetProducts($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      edges { node { ${PRODUCT_FIELDS} } }
    }
  }
`;
var PRODUCT_BY_HANDLE_QUERY = `
  query GetProduct($handle: String!) {
    product(handle: $handle) { ${PRODUCT_FIELDS} }
  }
`;
async function storefrontApiRequest(query, variables = {}) {
	const response = await fetch(SHOPIFY_STOREFRONT_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN
		},
		body: JSON.stringify({
			query,
			variables
		})
	});
	if (response.status === 402) {
		toast.error("Shopify: Payment required", { description: "Storefront API access requires an active Shopify billing plan." });
		return null;
	}
	if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
	const data = await response.json();
	if (data.errors) throw new Error(`Shopify: ${data.errors.map((e) => e.message).join(", ")}`);
	return data;
}
async function fetchProducts(query, first = 50) {
	return (await storefrontApiRequest(STOREFRONT_QUERY, {
		first,
		query: query ?? null
	}))?.data?.products?.edges ?? [];
}
async function fetchProductByHandle(handle) {
	const node = (await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle }))?.data?.product;
	return node ? { node } : null;
}
function formatMoney(amount, currencyCode = "USD") {
	const num = typeof amount === "string" ? parseFloat(amount) : amount;
	try {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: currencyCode
		}).format(num);
	} catch {
		return `${currencyCode} ${num.toFixed(2)}`;
	}
}
var CART_QUERY = `query cart($id: ID!) { cart(id: $id) { id totalQuantity } }`;
var CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart { id checkoutUrl lines(first: 100) { edges { node { id merchandise { ... on ProductVariant { id } } } } } }
      userErrors { field message }
    }
  }
`;
var CART_LINES_ADD_MUTATION = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart { id lines(first: 100) { edges { node { id merchandise { ... on ProductVariant { id } } } } } }
      userErrors { field message }
    }
  }
`;
var CART_LINES_UPDATE_MUTATION = `
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) { cart { id } userErrors { field message } }
  }
`;
var CART_LINES_REMOVE_MUTATION = `
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) { cart { id } userErrors { field message } }
  }
`;
function formatCheckoutUrl(checkoutUrl) {
	try {
		const url = new URL(checkoutUrl);
		url.searchParams.set("channel", "online_store");
		return url.toString();
	} catch {
		return checkoutUrl;
	}
}
function isCartNotFoundError(userErrors) {
	return userErrors.some((e) => e.message.toLowerCase().includes("cart not found") || e.message.toLowerCase().includes("does not exist"));
}
async function createShopifyCart(item) {
	const data = await storefrontApiRequest(CART_CREATE_MUTATION, { input: { lines: [{
		quantity: item.quantity,
		merchandiseId: item.variantId
	}] } });
	if (data?.data?.cartCreate?.userErrors?.length > 0) return null;
	const cart = data?.data?.cartCreate?.cart;
	if (!cart?.checkoutUrl) return null;
	const lineId = cart.lines.edges[0]?.node?.id;
	if (!lineId) return null;
	return {
		cartId: cart.id,
		checkoutUrl: formatCheckoutUrl(cart.checkoutUrl),
		lineId
	};
}
async function addLineToShopifyCart(cartId, item) {
	const data = await storefrontApiRequest(CART_LINES_ADD_MUTATION, {
		cartId,
		lines: [{
			quantity: item.quantity,
			merchandiseId: item.variantId
		}]
	});
	const userErrors = data?.data?.cartLinesAdd?.userErrors || [];
	if (isCartNotFoundError(userErrors)) return {
		success: false,
		cartNotFound: true
	};
	if (userErrors.length > 0) return { success: false };
	return {
		success: true,
		lineId: (data?.data?.cartLinesAdd?.cart?.lines?.edges || []).find((l) => l.node.merchandise.id === item.variantId)?.node?.id
	};
}
async function updateShopifyCartLine(cartId, lineId, quantity) {
	const userErrors = (await storefrontApiRequest(CART_LINES_UPDATE_MUTATION, {
		cartId,
		lines: [{
			id: lineId,
			quantity
		}]
	}))?.data?.cartLinesUpdate?.userErrors || [];
	if (isCartNotFoundError(userErrors)) return {
		success: false,
		cartNotFound: true
	};
	return { success: userErrors.length === 0 };
}
async function removeLineFromShopifyCart(cartId, lineId) {
	const userErrors = (await storefrontApiRequest(CART_LINES_REMOVE_MUTATION, {
		cartId,
		lineIds: [lineId]
	}))?.data?.cartLinesRemove?.userErrors || [];
	if (isCartNotFoundError(userErrors)) return {
		success: false,
		cartNotFound: true
	};
	return { success: userErrors.length === 0 };
}
var useCartStore = create()(persist((set, get) => ({
	items: [],
	cartId: null,
	checkoutUrl: null,
	isLoading: false,
	isSyncing: false,
	isOpen: false,
	openCart: () => set({ isOpen: true }),
	closeCart: () => set({ isOpen: false }),
	setOpen: (v) => set({ isOpen: v }),
	addItem: async (item) => {
		const { cartId, clearCart, items } = get();
		const existing = items.find((i) => i.variantId === item.variantId);
		set({ isLoading: true });
		try {
			if (!cartId) {
				const result = await createShopifyCart({
					...item,
					lineId: null
				});
				if (result) set({
					cartId: result.cartId,
					checkoutUrl: result.checkoutUrl,
					items: [{
						...item,
						lineId: result.lineId
					}],
					isOpen: true
				});
			} else if (existing) {
				const newQty = existing.quantity + item.quantity;
				if (!existing.lineId) return;
				const result = await updateShopifyCartLine(cartId, existing.lineId, newQty);
				if (result.success) set({
					items: get().items.map((i) => i.variantId === item.variantId ? {
						...i,
						quantity: newQty
					} : i),
					isOpen: true
				});
				else if (result.cartNotFound) clearCart();
			} else {
				const result = await addLineToShopifyCart(cartId, {
					...item,
					lineId: null
				});
				if (result.success) set({
					items: [...get().items, {
						...item,
						lineId: result.lineId ?? null
					}],
					isOpen: true
				});
				else if (result.cartNotFound) clearCart();
			}
		} catch (err) {
			console.error("Failed to add item", err);
		} finally {
			set({ isLoading: false });
		}
	},
	updateQuantity: async (variantId, quantity) => {
		if (quantity <= 0) return get().removeItem(variantId);
		const { cartId, clearCart, items } = get();
		const item = items.find((i) => i.variantId === variantId);
		if (!item?.lineId || !cartId) return;
		set({ isLoading: true });
		try {
			const result = await updateShopifyCartLine(cartId, item.lineId, quantity);
			if (result.success) set({ items: get().items.map((i) => i.variantId === variantId ? {
				...i,
				quantity
			} : i) });
			else if (result.cartNotFound) clearCart();
		} finally {
			set({ isLoading: false });
		}
	},
	removeItem: async (variantId) => {
		const { cartId, clearCart, items } = get();
		const item = items.find((i) => i.variantId === variantId);
		if (!item?.lineId || !cartId) return;
		set({ isLoading: true });
		try {
			const result = await removeLineFromShopifyCart(cartId, item.lineId);
			if (result.success) {
				const next = get().items.filter((i) => i.variantId !== variantId);
				if (next.length === 0) clearCart();
				else set({ items: next });
			} else if (result.cartNotFound) clearCart();
		} finally {
			set({ isLoading: false });
		}
	},
	clearCart: () => set({
		items: [],
		cartId: null,
		checkoutUrl: null
	}),
	getCheckoutUrl: () => get().checkoutUrl,
	syncCart: async () => {
		const { cartId, isSyncing, clearCart } = get();
		if (!cartId || isSyncing) return;
		set({ isSyncing: true });
		try {
			const data = await storefrontApiRequest(CART_QUERY, { id: cartId });
			if (!data) return;
			const cart = data?.data?.cart;
			if (!cart || cart.totalQuantity === 0) clearCart();
		} catch (err) {
			console.error("Cart sync failed", err);
		} finally {
			set({ isSyncing: false });
		}
	}
}), {
	name: "flavorsbybee-cart",
	storage: createJSONStorage(() => localStorage),
	partialize: (state) => ({
		items: state.items,
		cartId: state.cartId,
		checkoutUrl: state.checkoutUrl
	})
}));
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: `inline-flex flex-col items-center leading-none ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-display text-2xl tracking-wide text-primary md:text-3xl",
			children: [
				"Flavors",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-accent",
					children: "By"
				}),
				"Bee"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 text-[10px] uppercase tracking-[0.28em] text-muted-foreground",
			children: "Est. Handcrafted Chocolate"
		})]
	});
}
function AnnouncementBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page flex h-9 items-center justify-center text-center text-xs tracking-wide",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
				initial: {
					opacity: 0,
					y: -4
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .4 },
				children: [
					"Complimentary shipping on orders over $50 —",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/delivery",
						className: "underline underline-offset-2",
						children: "Delivery details"
					})
				]
			})
		})
	});
}
var product_signature_box_default = "/assets/product-signature-box-DkLmQlX-.jpg";
var columns = [
	{
		title: "By Occasion",
		links: [
			{
				label: "Birthday",
				to: "/collections/$handle",
				params: { handle: "birthday" }
			},
			{
				label: "Thank You",
				to: "/collections/$handle",
				params: { handle: "thank-you" }
			},
			{
				label: "Wedding & Anniversary",
				to: "/collections/$handle",
				params: { handle: "wedding" }
			},
			{
				label: "Corporate Gifts",
				to: "/corporate"
			},
			{
				label: "Just Because",
				to: "/collections/$handle",
				params: { handle: "gifts" }
			}
		]
	},
	{
		title: "By Type",
		links: [
			{
				label: "Boxed Assortments",
				to: "/collections/$handle",
				params: { handle: "boxed-chocolates" }
			},
			{
				label: "Truffles",
				to: "/collections/$handle",
				params: { handle: "truffles" }
			},
			{
				label: "Chocolate Bars",
				to: "/collections/$handle",
				params: { handle: "bars" }
			},
			{
				label: "Hot Chocolate",
				to: "/collections/$handle",
				params: { handle: "hot-chocolate" }
			},
			{
				label: "Shop All",
				to: "/shop"
			}
		]
	},
	{
		title: "By Attribute",
		links: [
			{
				label: "Dark Chocolate",
				to: "/collections/$handle",
				params: { handle: "dark" }
			},
			{
				label: "Milk Chocolate",
				to: "/collections/$handle",
				params: { handle: "milk" }
			},
			{
				label: "White Chocolate",
				to: "/collections/$handle",
				params: { handle: "white" }
			},
			{
				label: "Vegan",
				to: "/collections/$handle",
				params: { handle: "vegan" }
			},
			{
				label: "Single Origin",
				to: "/collections/$handle",
				params: { handle: "single-origin" }
			}
		]
	}
];
function MegaMenu({ onNavigate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 gap-8 p-8 md:grid-cols-[repeat(3,1fr)_1.2fr] md:gap-10",
		children: [columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
			className: "mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent",
			children: col.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2.5",
			children: col.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: link.to,
				params: link.params,
				onClick: onNavigate,
				className: "text-sm text-foreground/80 transition-colors hover:text-accent",
				children: link.label
			}) }, link.label))
		})] }, col.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/collections/$handle",
			params: { handle: "gifts" },
			onClick: onNavigate,
			className: "group relative block overflow-hidden rounded-md bg-cocoa",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product_signature_box_default,
				alt: "Featured gift collection",
				className: "h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105",
				loading: "lazy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-5 text-primary-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.22em] text-gold-soft",
						children: "Featured"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-xl",
						children: "The Signature Collection"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs opacity-80",
						children: "Explore our gifting favourites →"
					})
				]
			})]
		})]
	});
}
var primaryNav = [
	{
		label: "Shop",
		to: "/shop",
		hasMega: true
	},
	{
		label: "Bestsellers",
		to: "/collections/$handle",
		params: { handle: "bestseller" }
	},
	{
		label: "Gifts",
		to: "/collections/$handle",
		params: { handle: "gifts" }
	},
	{
		label: "Experience",
		to: "/experience"
	},
	{
		label: "Our Story",
		to: "/about"
	},
	{
		label: "Recipes",
		to: "/blog"
	}
];
function Header() {
	const [megaOpen, setMegaOpen] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const totalItems = useCartStore((s) => s.items.reduce((n, i) => n + i.quantity, 0));
	const openCart = useCartStore((s) => s.openCart);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sticky top-0 z-40 w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnnouncementBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: `w-full border-b border-border/60 bg-background/95 backdrop-blur transition-shadow ${scrolled ? "shadow-sm" : ""}`,
				onMouseLeave: () => setMegaOpen(false),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid h-20 grid-cols-[auto_1fr_auto] items-center gap-4 md:h-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 md:min-w-[160px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setMobileOpen(true),
										className: "grid h-10 w-10 place-items-center rounded-md text-foreground/80 hover:text-accent md:hidden",
										"aria-label": "Open menu",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "hidden h-10 w-10 items-center justify-center rounded-md text-foreground/80 hover:text-accent md:inline-flex",
										"aria-label": "Search",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden text-xs text-muted-foreground md:inline",
										children: "USD $ / EN"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-end gap-1 md:min-w-[160px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/account/sign-in",
										className: "hidden h-10 w-10 items-center justify-center rounded-md text-foreground/80 hover:text-accent md:inline-flex",
										"aria-label": "Account",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "hidden h-10 w-10 items-center justify-center rounded-md text-foreground/80 hover:text-accent md:inline-flex",
										"aria-label": "Wishlist",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: openCart,
										className: "relative grid h-10 w-10 place-items-center rounded-md text-foreground/80 hover:text-accent",
										"aria-label": "Cart",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5" }), totalItems > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-semibold text-accent-foreground",
											children: totalItems
										})]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center justify-center border-t border-border/50 md:flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex items-center gap-8 py-3 text-[13px] font-medium uppercase tracking-[0.14em]",
							children: primaryNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								onMouseEnter: () => setMegaOpen(!!item.hasMega),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: item.to,
									params: item.params,
									className: "inline-flex items-center gap-1 text-foreground/80 transition-colors hover:text-accent",
									activeProps: { className: "text-accent" },
									children: [item.label, item.hasMega && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3" })]
								})
							}, item.label))
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: megaOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: -8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -8
					},
					transition: { duration: .18 },
					className: "absolute left-0 right-0 hidden border-b border-border/60 bg-background shadow-md md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "container-page",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MegaMenu, { onNavigate: () => setMegaOpen(false) })
					})
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
				open: mobileOpen,
				onOpenChange: setMobileOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
					className: "sr-only",
					children: "menu"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					side: "left",
					className: "w-full max-w-sm overflow-y-auto p-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, {
						className: "border-b border-border p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => setMobileOpen(false),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex flex-col divide-y divide-border/60",
							children: primaryNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								params: item.params,
								onClick: () => setMobileOpen(false),
								className: "px-4 py-4 text-sm font-medium uppercase tracking-widest text-foreground hover:text-accent",
								children: item.label
							}, item.label))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MegaMenu, { onNavigate: () => setMobileOpen(false) })
						})]
					})]
				})]
			})
		]
	});
}
var groups = [
	{
		title: "Shop",
		links: [
			{
				label: "All Chocolates",
				to: "/shop"
			},
			{
				label: "Boxed Assortments",
				to: "/collections/$handle",
				params: { handle: "boxed-chocolates" }
			},
			{
				label: "Truffles",
				to: "/collections/$handle",
				params: { handle: "truffles" }
			},
			{
				label: "Gifts",
				to: "/collections/$handle",
				params: { handle: "gifts" }
			},
			{
				label: "Corporate",
				to: "/corporate"
			}
		]
	},
	{
		title: "Company",
		links: [
			{
				label: "Our Story",
				to: "/about/story"
			},
			{
				label: "Sustainability",
				to: "/about/sustainability"
			},
			{
				label: "Awards",
				to: "/about/awards"
			},
			{
				label: "Careers",
				to: "/careers"
			},
			{
				label: "Ethics",
				to: "/ethics"
			}
		]
	},
	{
		title: "Support",
		links: [
			{
				label: "Contact",
				to: "/contact"
			},
			{
				label: "Delivery & Returns",
				to: "/delivery"
			},
			{
				label: "Store Locator",
				to: "/locator"
			},
			{
				label: "Trade Enquiries",
				to: "/trade"
			},
			{
				label: "FAQ",
				to: "/delivery"
			}
		]
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "[&_span]:!text-primary-foreground [&_span:nth-child(2)]:!text-gold-soft" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xs text-sm text-primary-foreground/70",
						children: "Handcrafted chocolates, thoughtfully sourced and made in small batches to be gifted, shared, and savoured."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-6 flex max-w-sm items-center gap-2 border-b border-primary-foreground/30 pb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							placeholder: "Treat your inbox — email address",
							className: "w-full bg-transparent py-2 text-sm placeholder:text-primary-foreground/50 focus:outline-none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "text-xs font-semibold uppercase tracking-widest text-gold-soft hover:text-accent-foreground",
							children: "Sign up"
						})]
					})
				] }), groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-soft",
					children: g.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3 text-sm text-primary-foreground/80",
					children: g.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						params: l.params,
						className: "hover:text-accent-foreground",
						children: l.label
					}) }, l.label))
				})] }, g.title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col-reverse items-center justify-between gap-6 border-t border-primary-foreground/15 pt-8 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-primary-foreground/60",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" FlavorsByBee. All rights reserved.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/delivery",
							className: "hover:text-accent-foreground",
							children: "Privacy"
						}),
						" ",
						"·",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/delivery",
							className: "hover:text-accent-foreground",
							children: "Terms"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-3 text-primary-foreground/60",
						children: [
							"VISA",
							"MC",
							"AMEX",
							"PAYPAL",
							"APPLE"
						].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded border border-primary-foreground/20 px-2 py-1 text-[10px] tracking-wider",
							children: p
						}, p))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "Instagram",
							className: "hover:text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "Facebook",
							className: "hover:text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
						})]
					})]
				})]
			})]
		})
	});
}
function CartDrawer() {
	const { items, isLoading, isSyncing, isOpen, setOpen, updateQuantity, removeItem, getCheckoutUrl, syncCart } = useCartStore();
	const totalItems = items.reduce((n, i) => n + i.quantity, 0);
	const totalPrice = items.reduce((n, i) => n + parseFloat(i.price.amount) * i.quantity, 0);
	const currency = items[0]?.price.currencyCode ?? "USD";
	(0, import_react.useEffect)(() => {
		if (isOpen) syncCart();
	}, [isOpen, syncCart]);
	const handleCheckout = () => {
		const url = getCheckoutUrl();
		if (url) {
			window.open(url, "_blank");
			setOpen(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: isOpen,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			className: "flex w-full flex-col p-0 sm:max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, {
				className: "border-b border-border p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
					className: "flex items-center justify-between font-display text-2xl",
					children: ["Your basket", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm font-normal text-muted-foreground",
						children: [
							totalItems,
							" ",
							totalItems === 1 ? "item" : "items"
						]
					})]
				})
			}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-10 w-10 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Your basket is empty"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setOpen(false),
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							children: "Continue shopping"
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border",
					children: items.map((item) => {
						const img = item.product.node.images?.edges?.[0]?.node;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-[80px_minmax(0,1fr)_auto] gap-4 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-square overflow-hidden rounded bg-secondary/50",
									children: img && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: img.url,
										alt: item.product.node.title,
										className: "h-full w-full object-cover"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate font-display text-lg leading-tight",
											children: item.product.node.title
										}),
										item.variantTitle && item.variantTitle !== "Default Title" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: item.variantTitle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm",
											children: formatMoney(item.price.amount, item.price.currencyCode)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 inline-flex items-center rounded border border-border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													"aria-label": "Decrease",
													className: "grid h-8 w-8 place-items-center hover:text-accent",
													onClick: () => updateQuantity(item.variantId, item.quantity - 1),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-8 text-center text-sm",
													children: item.quantity
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													"aria-label": "Increase",
													className: "grid h-8 w-8 place-items-center hover:text-accent",
													onClick: () => updateQuantity(item.variantId, item.quantity + 1),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Remove",
									onClick: () => removeItem(item.variantId),
									className: "self-start text-muted-foreground hover:text-destructive",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
								})
							]
						}, item.variantId);
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 border-t border-border bg-secondary/40 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm uppercase tracking-widest text-muted-foreground",
							children: "Subtotal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl",
							children: formatMoney(totalPrice, currency)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Shipping and taxes calculated at checkout."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						onClick: handleCheckout,
						disabled: isLoading || isSyncing,
						className: "w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90",
						children: isLoading || isSyncing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Checkout ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-2 h-4 w-4" })] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						asChild: true,
						className: "w-full",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cart",
							children: "View full basket"
						})
					})
				]
			})] })]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "container-page py-24 text-center text-muted-foreground",
						children: "Loading…"
					}),
					children
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })
		]
	});
}
//#endregion
export { formatMoney as a, fetchProducts as i, SiteShell as n, useCartStore as o, fetchProductByHandle as r, Button as t };
