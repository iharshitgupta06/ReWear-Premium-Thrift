import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import { WishlistButton } from "./WishlistButton";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="product-card__image"
        />
        <span className="product-card__impact" title="Estimated environmental savings">
          ♻ {product.impact}
        </span>
        <div className="product-card__wishlist">
          <WishlistButton product={product} size={17} />
        </div>
      </div>

      <div className="product-card__body">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__price-row">
          <span className="product-card__price">{formatPrice(product.price)}</span>
          <span className="product-card__price-original">
            {formatPrice(product.originalPrice)}
          </span>
        </div>
        <div className="product-card__rating">★ {product.rating}</div>
      </div>
    </Link>
  );
}
