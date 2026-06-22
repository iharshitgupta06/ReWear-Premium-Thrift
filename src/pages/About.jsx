import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="section about-hero">
        <div className="container about-hero__inner">
          <div>
            <span className="eyebrow">Our Story</span>
            <h1>Fashion deserves a second chapter</h1>
            <p className="section-sub">
              ReWear began with a simple belief: the most sustainable garment
              is the one that already exists. We built a place where
              pre-loved clothing is treated with the same care, curation and
              presentation as anything new — because it deserves to be.
            </p>
          </div>
          <img
            src="https://picsum.photos/seed/rewear-about/640/480"
            alt="ReWear curation studio"
          />
        </div>
      </section>

      <section className="section section--tight section--alt">
        <div className="container about-grid">
          <div className="card about-card">
            <span className="eyebrow">Mission</span>
            <h3>Make pre-loved the first choice, not the backup plan</h3>
            <p>
              We hand-select, inspect, and restore every piece so quality
              never has to be sacrificed for sustainability. Shopping with
              us should feel like a discovery, not a compromise.
            </p>
          </div>
          <div className="card about-card">
            <span className="eyebrow">Vision</span>
            <h3>A wardrobe that circulates, not accumulates</h3>
            <p>
              We imagine a future where clothing moves between closets for
              years before it ever reaches a landfill — and where buying
              second-hand is simply how fashion works.
            </p>
          </div>
          <div className="card about-card">
            <span className="eyebrow">Commitment</span>
            <h3>Every order tracked, every impact counted</h3>
            <p>
              From the water saved to the carbon avoided, we measure the
              difference every purchase makes and share it openly with our
              community.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-cta">
        <div className="container about-cta__inner">
          <h2>Ready to build a more circular wardrobe?</h2>
          <Link to="/shop" className="btn btn-accent">
            Start Shopping
          </Link>
        </div>
      </section>
    </>
  );
}
