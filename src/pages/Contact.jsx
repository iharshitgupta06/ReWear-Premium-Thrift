import { useState } from "react";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm(initialForm);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Get in Touch</span>
            <h2>Contact ReWear</h2>
          </div>
        </div>

        <div className="contact-layout">
          <form className="checkout-form card" onSubmit={handleSubmit}>
            {sent && (
              <p className="newsletter__success">
                Thanks for reaching out — we'll reply within 24 hours.
              </p>
            )}
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
            <label>
              Subject
              <input
                type="text"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </label>
            <button type="submit" className="btn btn-primary btn-block">
              Send Message
            </button>
          </form>

          <aside className="contact-info card">
            <h3>Reach Us Directly</h3>
            <p><strong>Email</strong><br />hello@rewear.com</p>
            <p><strong>Phone</strong><br />+91 9xxxx xxxx0</p>
            <p><strong>Address</strong><br />ReWear Studio, Bhopal, Madhya Pradesh, India</p>
            <p><strong>Hours</strong><br />Mon – Sat, 10am – 7pm IST</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
