export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card card">
      <div className="testimonial-card__quote-mark">“</div>
      <p className="testimonial-card__quote">{testimonial.quote}</p>
      <div className="testimonial-card__author">
        <img
          src={`https://i.pravatar.cc/80?u=${testimonial.avatarSeed}`}
          alt={testimonial.name}
          className="testimonial-card__avatar"
        />
        <div>
          <p className="testimonial-card__name">{testimonial.name}</p>
          <p className="testimonial-card__role">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
