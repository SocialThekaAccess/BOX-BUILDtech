import { useState } from "react";
import { Tag, GoldLine } from "../Shared/SharedComponents";
import "./Contact.css";

const CONTACT_DETAILS = [
  { icon: "👤", lbl: "Contact",  val: "Pooja Yadav — Founder & Director" },
  { icon: "📍", lbl: "Address",  val: "New Chandigarh, India"             },
  { icon: "✉️", lbl: "Email",    val: "hello@boxbuildtech.com"            },
  { icon: "🌐", lbl: "Website",  val: "www.boxbuildtech.com"              },
];

const SERVICES_LIST = [
  "Commercial Construction",
  "Luxury Residential",
  "Premium Renovations",
  "Project Management",
  "Design-Build",
];

const scrollToContact = () =>
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

export default function Contact() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", service: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSend = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
      setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    }
  };

  return (
    <>
      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="cta-banner-bg" />
        <div className="cta-inner">
          <div>
            <h2 className="cta-title">READY TO BUILD SOMETHING GREAT?</h2>
            <p className="cta-subtitle">Get a free quote within 24 hours. No commitments.</p>
          </div>
          <button className="cta-btn" onClick={scrollToContact}>
            Start Your Project →
          </button>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section id="contact" className="contact-section">
        <div className="contact-inner">

          {/* Header */}
          <div className="contact-header">
            <Tag>Get In Touch</Tag>
            <h2 className="contact-title">
              START YOUR <span>PROJECT TODAY</span>
            </h2>
            <GoldLine w="80px" />
          </div>

          <div className="contact-grid">

            {/* ── Left: Info ── */}
            <div className="contact-info-col">
              <h3 className="contact-info-title">Contact Details</h3>

              {CONTACT_DETAILS.map((c) => (
                <div key={c.lbl} className="contact-detail-row">
                  <div className="contact-icon-box">{c.icon}</div>
                  <div>
                    <div className="contact-detail-label">{c.lbl}</div>
                    <div className="contact-detail-value">{c.val}</div>
                  </div>
                </div>
              ))}

              <div className="contact-guarantee">
                <div className="contact-guarantee-title">⚡ 24-Hour Response Guarantee</div>
                <p className="contact-guarantee-text">
                  Every quote request is handled personally by our team.
                  You'll hear from us within one business day.
                </p>
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div className="contact-form-col">
              {sent ? (
                <div className="form-success">
                  <div className="form-success-check">✓</div>
                  <h3 className="form-success-title">Message Received</h3>
                  <p className="form-success-text">We'll get back to you within 24 hours. Thank you!</p>
                </div>
              ) : (
                <>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Full Name *</label>
                      <input className="form-input" placeholder="Your Name"
                        value={form.name} onChange={set("name")} />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Company</label>
                      <input className="form-input" placeholder="Your Company"
                        value={form.company} onChange={set("company")} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Email Address *</label>
                      <input className="form-input" type="email" placeholder="you@example.com"
                        value={form.email} onChange={set("email")} />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Phone Number</label>
                      <input className="form-input" placeholder="+91 00000 00000"
                        value={form.phone} onChange={set("phone")} />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Service Interested In</label>
                    <select className="form-input" value={form.service} onChange={set("service")}>
                      <option value="">Select a service...</option>
                      {SERVICES_LIST.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Your Message *</label>
                    <textarea className="form-input" rows={5}
                      placeholder="Tell us about your project requirements..."
                      value={form.message} onChange={set("message")} />
                  </div>

                  <button className="btn-gold-submit" onClick={handleSend}>
                    Send Message →
                  </button>
                </>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
