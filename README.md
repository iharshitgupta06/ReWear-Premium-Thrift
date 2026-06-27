# ReWear — Premium Pre-Loved Fashion

A production-style front-end e-commerce thrift store built with React + Vite.
ReWear is a fictional brand demo: a sustainable fashion marketplace for
curated pre-loved clothing and accessories.

---

## 🧱 Tech Stack

- React 18
- Vite 5
- React Router DOM 6
- Context API (no Redux)
- Pure CSS with CSS variables (theming) + a small set of reusable utility
  classes (no CSS framework required to run the project)
- Browser `localStorage` (cart, wishlist, theme preference)
 
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
