import { Link } from "react-router-dom";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <h3>ReWear</h3>
          <p>Premium Pre-Loved Fashion</p>
        </div>
        <div className="footer__newsletter">
          <p className="footer__newsletter-label">
            Get early access to new drops and impact reports.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="container footer__grid">
        <div>
          <h4>Shop</h4>
          <ul>
            <li><Link to="/shop">All Products</Link></li>
            <li><Link to="/shop?gender=Men">Men</Link></li>
            <li><Link to="/shop?gender=Women">Women</Link></li>
            <li><Link to="/shop?gender=Accessories">Accessories</Link></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        <div>
          <h4>Reach Us</h4>
          <ul>
            <li>hello@rewear.com</li>
            <li>+91 9xxxx xxxx0</li>
            <li>Bhopal, Madhya Pradesh, India</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} ReWear. All rights reserved.</p>
        <p>Designed for a more circular wardrobe.</p>
      </div>
    </footer>
  );
}
