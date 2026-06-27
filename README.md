# ReWear — Premium Pre-Loved Fashion

A production-style front-end e-commerce thrift store built with React + Vite.
ReWear is a fictional brand demo: a sustainable fashion marketplace for
curated pre-loved clothing and accessories.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

That's it. The app runs at `http://localhost:5173`.

Other scripts:

```bash
npm run build      # production build into /dist
npm run preview     # preview the production build locally
```

> **Note on images:** product photos and hero images use placeholder URLs
> from `picsum.photos` (and `pravatar.cc` for testimonial avatars) so the
> site looks complete out of the box. An internet connection is needed for
> these images to load. See **Replacing Images** below to swap them for
> your own local files.

---

## 🧱 Tech Stack

- React 18
- Vite 5
- React Router DOM 6
- Context API (no Redux)
- Pure CSS with CSS variables (theming) + a small set of reusable utility
  classes (no CSS framework required to run the project)
- Browser `localStorage` (cart, wishlist, theme preference)

No TypeScript, no backend, no auth, no payment gateway — by design.

---

## 📁 Folder Structure

```
rewear/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── men/          ← drop local product images here
│   │       ├── women/
│   │       ├── accessories/
│   │       ├── banners/
│   │       └── icons/
│   ├── components/           ← reusable UI building blocks
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── SearchBar.jsx
│   │   ├── FilterPanel.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── WishlistButton.jsx
│   │   ├── CartButton.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── NewsletterForm.jsx
│   │   ├── SustainabilityStats.jsx
│   │   └── ScrollToTop.jsx
│   ├── context/               ← global state via Context API
│   │   ├── ThemeContext.jsx
│   │   ├── CartContext.jsx
│   │   └── WishlistContext.jsx
│   ├── data/
│   │   ├── products.js        ← all 43 demo products
│   │   └── extras.js          ← testimonials + sustainability stats
│   ├── hooks/
│   │   └── useCountUp.js      ← animated stat counter
│   ├── pages/                 ← one file per route
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Wishlist.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── styles/
│   │   ├── tokens.css         ← CSS variables for light/dark theme
│   │   ├── global.css         ← resets + layout utilities
│   │   └── components.css     ← all component/page styles
│   ├── utils/
│   │   └── helpers.js         ← price formatting, filter/sort logic
│   ├── App.jsx                ← route definitions
│   └── main.jsx                ← app entry point, wraps providers
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛍️ Pages & Features

| Page | Route | Highlights |
|---|---|---|
| Home | `/` | Hero, trending grid, men/women/accessories rails, sustainability stats, testimonials, newsletter |
| Shop | `/shop` | Search, gender + category filters, price range, sort (newest / price asc / price desc) |
| Product Details | `/product/:id` | Gallery with thumbnails, size selector, add to cart, wishlist toggle, related products |
| Wishlist | `/wishlist` | Saved items, move to cart, remove |
| Cart | `/cart` | Quantity controls, remove, subtotal/shipping/total |
| Checkout | `/checkout` | Demo shipping form → "Order Placed Successfully" confirmation |
| About | `/about` | Mission, vision, sustainability commitment |
| Contact | `/contact` | Contact form + direct contact details |

Theme (light/dark) is toggled from the navbar and persisted in
`localStorage`. Cart and wishlist counts update live in the navbar icons.

---

## 🎨 Design System

Colors, fonts, radii, and shadows are defined once as CSS variables in
`src/styles/tokens.css`, and swapped automatically when `data-theme="dark"`
is set on `<html>` (handled by `ThemeContext`). To restyle the whole site,
edit the variables in that one file.

- **Display font:** Fraunces (serif, used for headings)
- **Body font:** Inter (sans-serif, used for UI text)
- **Light theme:** warm cream background, near-black text, terracotta accent
- **Dark theme:** charcoal background, off-white text, lighter terracotta accent

Each product card carries a small "impact tag" (e.g. *"♻ Saved 2,400L of
water"*) — a signature detail that ties the visual design back to ReWear's
sustainability story.

---

## 🖼️ Replacing Images

Product data lives in `src/data/products.js`. Each product object includes:

```js
{
  id: 1,
  name: "Classic Oxford Shirt",
  image: "https://picsum.photos/seed/rewear101/600/800",
  gallery: ["...", "...", "..."],
  localImageHint: "/src/assets/images/men/shirts-1.jpg",
  ...
}
```

To use your own photos:

1. Drop your image files into the matching folder under
   `src/assets/images/` (`men/`, `women/`, or `accessories/`).
2. Update the `image` (and `gallery`) fields for that product to point to
   your file, e.g. `image: "/src/assets/images/men/shirts-1.jpg"`.
3. Save — Vite will hot-reload automatically.

The `localImageHint` field already suggests a sensible path per product so
this swap is quick to do in bulk.

---

## 🧩 State Management

Three lightweight Context providers wrap the app in `main.jsx`:

- **ThemeContext** — light/dark mode, persisted to `localStorage`
- **CartContext** — cart items, quantities, subtotal, persisted to `localStorage`
- **WishlistContext** — saved products, persisted to `localStorage`

Each context exposes a small, readable API (e.g. `addToCart`,
`toggleWishlist`, `toggleTheme`) so it's easy to use from any component and
easy to explain in a viva.

---

## 📦 Product Catalog

43 demo products across:

- **Men:** Shirts, Oversized Tees, Hoodies, Jackets, Jeans
- **Women:** Dresses, Tops, Jackets, Denim, Skirts
- **Accessories:** Watches, Bags, Caps, Sunglasses, Jewelry

Each product has an id, name, gender, category, price, original price,
description, image + gallery, rating, available sizes, and a
sustainability "impact" line.

---

## 🛠️ Customizing

- **Add a product:** add a new object to the array in `src/data/products.js`.
- **Add a page:** create a file in `src/pages/`, then register its route in `src/App.jsx`.
- **Change brand colors/fonts:** edit `src/styles/tokens.css`.
- **Change nav links:** edit the `NAV_LINKS` array in `src/components/Navbar.jsx`.

---

Built as a learning-friendly, presentation-ready demo. No external backend
required — everything runs client-side.
