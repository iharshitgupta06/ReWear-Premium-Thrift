import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import SustainabilityStats from "../components/SustainabilityStats";
import TestimonialCard from "../components/TestimonialCard";
import NewsletterForm from "../components/NewsletterForm";
import { products } from "../data/products";
import { testimonials } from "../data/extras";

export default function Home() {
  const trending = products.slice(0, 8);
  const men = products.filter((p) => p.gender === "Men").slice(0, 4);
  const women = products.filter((p) => p.gender === "Women").slice(0, 4);
  const accessories = products.filter((p) => p.gender === "Accessories").slice(0, 4);

  return (
    <>
      <Hero />

      {/* Trending */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Trending Now</span>
              <h2>This week's favorites</h2>
            </div>
            <Link to="/shop" className="btn btn-outline">
              View All
            </Link>
          </div>
          <ProductGrid products={trending} />
        </div>
      </section>

      {/* Men's collection */}
      <section className="section section--tight section--alt">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Men's Collection</span>
              <h2>Sharp pieces, second chances</h2>
            </div>
            <Link to="/shop?gender=Men" className="btn btn-outline">
              Shop Men
            </Link>
          </div>
          <ProductGrid products={men} />
        </div>
      </section>

      {/* Women's collection */}
      <section className="section section--tight">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Women's Collection</span>
              <h2>Effortless, considered style</h2>
            </div>
            <Link to="/shop?gender=Women" className="btn btn-outline">
              Shop Women
            </Link>
          </div>
          <ProductGrid products={women} />
        </div>
      </section>

      {/* Accessories collection */}
      <section className="section section--tight section--alt">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Accessories</span>
              <h2>The finishing details</h2>
            </div>
            <Link to="/shop?gender=Accessories" className="btn btn-outline">
              Shop Accessories
            </Link>
          </div>
          <ProductGrid products={accessories} />
        </div>
      </section>

      <SustainabilityStats />

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Loved by our community</span>
              <h2>What ReWear members say</h2>
            </div>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section section--tight newsletter-section">
        <div className="container newsletter-section__inner">
          <div>
            <span className="eyebrow">Stay in the Loop</span>
            <h2>New drops, restocks &amp; impact reports</h2>
            <p className="section-sub">
              No spam — just the good stuff, twice a month.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
