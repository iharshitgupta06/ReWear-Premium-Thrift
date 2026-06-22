import { sustainabilityStats } from "../data/extras";
import { useCountUp } from "../hooks/useCountUp";

function StatItem({ stat }) {
  const [value, ref] = useCountUp(stat.value);
  return (
    <div className="stat-item" ref={ref}>
      <p className="stat-item__value">
        {value.toLocaleString("en-IN")}
        {stat.suffix}
      </p>
      <p className="stat-item__label">{stat.label}</p>
    </div>
  );
}

export default function SustainabilityStats() {
  return (
    <section className="section sustainability">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Our Impact</span>
            <h2>Fashion that gives back</h2>
          </div>
          <p className="section-sub">
            Every order on ReWear keeps a garment in use longer — and out of
            a landfill. Here's what our community has saved together.
          </p>
        </div>

        <div className="stats-grid">
          {sustainabilityStats.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
