import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/helpers";

export default function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="empty-state section">
        <h3>Your wishlist is empty</h3>
        <p>Save pieces you love so you don't lose track of them.</p>
        <Link to="/shop" className="btn btn-primary">
          Browse the Shop
        </Link>
      </div>
    );
  }

  const handleMoveToCart = (item) => {
    const defaultSize = item.sizes?.[0] || "One Size";
    addToCart(item, defaultSize, 1);
    removeFromWishlist(item.id);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Saved for Later</span>
            <h2>Your Wishlist</h2>
          </div>
        </div>

        <div className="list-table">
          {wishlistItems.map((item) => (
            <div className="list-row" key={item.id}>
              <Link to={`/product/${item.id}`} className="list-row__media">
                <img src={item.image} alt={item.name} />
              </Link>
              <div className="list-row__info">
                <Link to={`/product/${item.id}`}>
                  <h4>{item.name}</h4>
                </Link>
                <p className="list-row__category">{item.category}</p>
                <p className="list-row__price">{formatPrice(item.price)}</p>
              </div>
              <div className="list-row__actions">
                <button
                  className="btn btn-primary"
                  onClick={() => handleMoveToCart(item)}
                >
                  Move to Cart
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
