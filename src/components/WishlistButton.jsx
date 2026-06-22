import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

// Navbar wishlist icon with count badge
export function WishlistNavIcon() {
  const { wishlistCount } = useWishlist();
  return (
    <Link to="/wishlist" className="icon-btn" aria-label={`Wishlist, ${wishlistCount} items`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 20s-7.5-4.7-10-9.4C0.3 7 1.7 3.5 5 3c2-.3 3.7.7 4.5 2.4C10.3 3.7 12 2.7 14 3c3.3.5 4.7 4 3 7.6C19.5 15.3 12 20 12 20z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
      {wishlistCount > 0 && <span className="icon-btn__badge">{wishlistCount}</span>}
    </Link>
  );
}

// Heart toggle used on product cards / product detail page
export function WishlistButton({ product, size = 20 }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const active = isWishlisted(product.id);

  return (
    <button
      className={`wishlist-toggle ${active ? "is-active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product);
      }}
      aria-pressed={active}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      title={active ? "Remove from wishlist" : "Add to wishlist"}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill={active ? "currentColor" : "none"}>
        <path
          d="M12 20s-7.5-4.7-10-9.4C0.3 7 1.7 3.5 5 3c2-.3 3.7.7 4.5 2.4C10.3 3.7 12 2.7 14 3c3.3.5 4.7 4 3 7.6C19.5 15.3 12 20 12 20z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
