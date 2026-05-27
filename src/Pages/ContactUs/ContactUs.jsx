import { useState } from 'react';
import {
  Factory,
  HardHat,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react';
import './ContactUs.css';
import contactUsImg from '../../assets/ConactUsimg.jpg';

const SERVICES_OPTIONS = [
  { Icon: Factory,  label: 'Design & Build'       },
  { Icon: HardHat,  label: 'High End Residential'  },
];

const CONTACT_DETAILS = [
  {
    Icon: Phone,
    label: 'Call Us',
    value: '+91  7657945469',
    sub: 'Mon – Sat, 9am – 7pm',
  },
  {
    Icon: Mail,
    label: 'Email Us',
    value: 'start@boxbuildtech.com',
    sub: 'We reply within 24 hours',
  },
  {
    Icon: MapPin,
    label: 'Visit Us',
    value: 'New Chandigarh, India',
    sub: 'By appointment only',
  },
  {
    Icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat: 9am – 7pm',
    sub: 'Sunday: Closed',
  },
];

export default function ContactUsPage() {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', message: '',
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="cu-page">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="cu-hero">
        <div className="cu-hero-bg" style={{ backgroundImage: `url(${contactUsImg})` }} />
        <div className="cu-hero-overlay" />
        <div className="cu-hero-inner">
          <span className="cu-eyebrow">Get In Touch</span>
          <h2 className="cu-hero-headline">
            <span className="cu-hl-line">Let's Build</span>
            <span className="cu-hl-line">Something <span className="cu-gold">Great</span></span>
          </h2>
          <p className="cu-hero-sub">
            Tell us about your project and we'll get back to you within 24 hours
            with a tailored plan and free consultation.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════ */}
      <section className="cu-main">
        <div className="cu-container">
          <div className="cu-grid">

            {/* ── LEFT: Info ── */}
            <div className="cu-info-col">

              <h2 className="cu-info-title">Contact Information</h2>
              <p className="cu-info-sub">
                Reach out through any channel — we're always ready to talk
                about your next project.
              </p>

              <div className="cu-details">
                {CONTACT_DETAILS.map(({ Icon, label, value, sub }) => (
                  <div className="cu-detail-row" key={label}>
                    <div className="cu-detail-icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div className="cu-detail-text">
                      <span className="cu-detail-label">{label}</span>
                      <span className="cu-detail-value">{value}</span>
                      <span className="cu-detail-sub">{sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service selector */}
              <div className="cu-service-pick">
                <p className="cu-service-pick-label">What are you interested in?</p>
                <div className="cu-service-list">
                  {SERVICES_OPTIONS.map(({ Icon, label }) => (
                    <button
                      key={label}
                      className={`cu-service-btn ${selected === label ? 'active' : ''}`}
                      onClick={() => setSelected(label === selected ? null : label)}
                      type="button"
                    >
                      <Icon size={16} strokeWidth={1.5} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* ── RIGHT: Form ── */}
            <div className="cu-form-col">
              {submitted ? (
                <div className="cu-success">
                  <CheckCircle2 size={56} strokeWidth={1.2} className="cu-success-icon" />
                  <h3 className="cu-success-title">Message Sent!</h3>
                  <p className="cu-success-text">
                    Thank you for reaching out. Our team will contact you within
                    24 hours to discuss your project.
                  </p>
                  <button
                    className="cu-btn-primary"
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="cu-form" onSubmit={handleSubmit}>
                  <div className="cu-form-header">
                    <h2 className="cu-form-title">Send Us a Message</h2>
                    <p className="cu-form-sub">Fill in the details and we'll be in touch shortly.</p>
                  </div>

                  <div className="cu-form-row">
                    <div className="cu-field">
                      <label className="cu-label">Full Name *</label>
                      <input
                        className="cu-input"
                        type="text"
                        name="name"
                        placeholder="Rahul Sharma"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="cu-field">
                      <label className="cu-label">Email Address *</label>
                      <input
                        className="cu-input"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="cu-form-row">
                    <div className="cu-field">
                      <label className="cu-label">Phone Number</label>
                      <input
                        className="cu-input"
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="cu-field">
                      <label className="cu-label">Service Interested In</label>
                      <select
                        className="cu-input"
                        name="service"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a service</option>
                        {SERVICES_OPTIONS.map(({ label }) => (
                          <option key={label} value={label}>{label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="cu-field cu-field-full">
                    <label className="cu-label">Project Details *</label>
                    <textarea
                      className="cu-input cu-textarea"
                      name="message"
                      placeholder="Tell us about your project — location, size, timeline, budget..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button className="cu-btn-submit" type="submit">
                    <Send size={16} strokeWidth={2} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MAP STRIP
      ══════════════════════════════════════ */}ss
      <section className="cu-map-section">
        <div className="cu-map-overlay-text">
          <MapPin size={20} strokeWidth={1.5} />
          New Chandigarh, India
        </div>
        <iframe
          title="BOX Buildtech Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
          className="cu-map-iframe"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

    </div>
  );
}
