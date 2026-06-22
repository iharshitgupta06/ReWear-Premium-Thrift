import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { formatPrice } from "../utils/helpers";
import { useCart } from "../context/CartContext";
import { WishlistButton } from "../components/WishlistButton";
import ProductGrid from "../components/ProductGrid";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);

  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="empty-state section">
        <h3>Product not found</h3>
        <p>This item may have already found a new home.</p>
        <Link to="/shop" className="btn btn-primary">
          Back to Shop
        </Link>
      </div>
    );
  }

  const allImages = [product.image, ...product.gallery];
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <section className="section product-details">
      <div className="container">
        <button className="back-link" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="product-details__layout">
          <div className="product-details__gallery">
            <img
              src={allImages[activeImage]}
              alt={product.name}
              className="product-details__main-image"
            />
            <div className="product-details__thumbs">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  className={`product-details__thumb ${i === activeImage ? "is-active" : ""}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="product-details__info">
            <span className="product-card__category">{product.category}</span>
            <h1>{product.name}</h1>
            <div className="product-details__rating">★ {product.rating} rating</div>

            <div className="product-details__price-row">
              <span className="product-details__price">{formatPrice(product.price)}</span>
              <span className="product-details__price-original">
                {formatPrice(product.originalPrice)}
              </span>
            </div>

            <p className="product-details__impact">♻ {product.impact}</p>

            <p className="product-details__desc">{product.description}</p>

            <div className="product-details__sizes">
              <h4>Select Size</h4>
              <div className="size-options">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-chip ${selectedSize === size ? "is-active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="product-details__hint">Please select a size.</p>
              )}
            </div>

            <div className="product-details__actions">
              <button
                className="btn btn-primary btn-block"
                onClick={handleAddToCart}
                disabled={!selectedSize}
              >
                {added ? "Added to Cart ✓" : "Add to Cart"}
              </button>
              <div className="product-details__wishlist-wrap">
                <WishlistButton product={product} size={22} />
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="product-details__related">
            <div className="section-head">
              <h2>You may also like</h2>
            </div>
            <ProductGrid products={related} />
          </div>
        )}
      </div>
    </section>
  );
}
