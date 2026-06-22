import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/helpers";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartSubtotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="empty-state section">
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/shop" className="btn btn-primary">
          Browse the Shop
        </Link>
      </div>
    );
  }

  const shipping = cartSubtotal > 1500 ? 0 : 99;
  const total = cartSubtotal + shipping;

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Almost There</span>
            <h2>Your Cart</h2>
          </div>
        </div>

        <div className="cart-layout">
          <div className="list-table">
            {cartItems.map((item) => (
              <div className="list-row" key={`${item.id}-${item.size}`}>
                <Link to={`/product/${item.id}`} className="list-row__media">
                  <img src={item.image} alt={item.name} />
                </Link>
                <div className="list-row__info">
                  <Link to={`/product/${item.id}`}>
                    <h4>{item.name}</h4>
                  </Link>
                  <p className="list-row__category">Size: {item.size}</p>
                  <p className="list-row__price">{formatPrice(item.price)}</p>
                </div>
                <div className="qty-control">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.size, item.quantity - 1)
                    }
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.size, item.quantity + 1)
                    }
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <div className="list-row__actions">
                  <p className="list-row__line-total">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                  <button
                    className="btn btn-outline"
                    onClick={() => removeFromCart(item.id, item.size)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="order-summary card">
            <h3>Order Summary</h3>
            <div className="order-summary__row">
              <span>Subtotal</span>
              <span>{formatPrice(cartSubtotal)}</span>
            </div>
            <div className="order-summary__row">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
            </div>
            <div className="order-summary__row order-summary__total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button
              className="btn btn-primary btn-block"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
