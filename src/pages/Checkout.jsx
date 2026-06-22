import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/helpers";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
};

export default function Checkout() {
  const { cartItems, cartSubtotal, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const shipping = cartSubtotal > 1500 ? 0 : 99;
  const total = cartSubtotal + shipping;

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="empty-state section order-success">
        <div className="order-success__icon">✓</div>
        <h3>Order Placed Successfully</h3>
        <p>
          Thank you, {form.name || "friend"}! A confirmation has been sent to{" "}
          {form.email || "your email"}. This is a demo checkout — no real
          payment was processed.
        </p>
        <Link to="/shop" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Final Step</span>
            <h2>Checkout</h2>
          </div>
        </div>

        <div className="checkout-layout">
          <form className="checkout-form card" onSubmit={handleSubmit}>
            <h3>Shipping Details</h3>

            <div className="form-row">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                />
              </label>
              <label>
                Pincode
                <input
                  type="text"
                  name="pincode"
                  required
                  value={form.pincode}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label>
              Address
              <input
                type="text"
                name="address"
                required
                value={form.address}
                onChange={handleChange}
              />
            </label>

            <div className="form-row">
              <label>
                City
                <input
                  type="text"
                  name="city"
                  required
                  value={form.city}
                  onChange={handleChange}
                />
              </label>
              <label>
                State
                <input
                  type="text"
                  name="state"
                  required
                  value={form.state}
                  onChange={handleChange}
                />
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Place Order
            </button>
          </form>

          <aside className="order-summary card">
            <h3>Order Summary</h3>
            {cartItems.map((item) => (
              <div className="order-summary__row" key={`${item.id}-${item.size}`}>
                <span>
                  {item.name} ({item.size}) × {item.quantity}
                </span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
            <hr />
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
          </aside>
        </div>
      </div>
    </section>
  );
}
