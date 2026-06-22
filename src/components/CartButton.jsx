import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartButton() {
  const { cartCount } = useCart();

  return (
    <Link to="/cart" className="icon-btn" aria-label={`Cart, ${cartCount} items`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 6h15l-1.5 9h-12L5 3H2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9.5" cy="20" r="1.4" fill="currentColor" />
        <circle cx="17.5" cy="20" r="1.4" fill="currentColor" />
      </svg>
      {cartCount > 0 && <span className="icon-btn__badge">{cartCount}</span>}
    </Link>
  );
}
