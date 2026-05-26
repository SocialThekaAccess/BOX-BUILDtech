import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HardHat,
  Factory,
  Headphones,
} from "lucide-react";
import "./Services.css";

const SERVICES = [
  {
    Icon: Factory,
    audience: "Dear Architects",
    title: "Build your vision into reputation",
    desc: "We execute your design with precision, protect your architectural intent, and create completed projects that bring premium reputation and many more visionary projects.",
    cta: "Execution as Marketing →",
    // path: "/services/design-build",
  },
  {
    Icon: HardHat,
    audience: "Dear Home Owners",
    title: "Build your dream home without losing peace",
    desc: "We deliver design perfection, premium construction quality, predictable coordination, and complete peace of mind throughout the construction journey.",
    cta: "Quality with Peace of Mind →",
    // path: "/services/luxury-residential",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const handleReadMore = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    window.history.replaceState(null, "", "/");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="services-section">
      <div className="services-inner">

        {/* ── Header ── */}
        <div className="services-header">
          <div className="services-tag">What We Do</div>
          <h2 className="services-title">
            Our Core <span>Services</span>
          </h2>
          <p className="services-subtitle">
            From concept to completion, we deliver end-to-end solutions
            tailored to your vision.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="services-grid">
          {SERVICES.map((s, i) => {
            const Icon = s.Icon;
            return (
              <div
                key={i}
                className={`service-card ${hovered === i ? "active" : ""}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="service-icon-wrap">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <div className="service-audience">{s.audience}</div>
                <h3 className="service-card-title">{s.title}</h3>
                <p className="service-card-desc">{s.desc}</p>
                <button
                  className="service-card-link"
                  onClick={() => handleReadMore(s.path)}
                >
                 {s.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA Bar ── */}
        <div className="services-cta-bar">
          <div className="services-cta-left">
            <div className="services-cta-icon">
              <Headphones size={22} strokeWidth={1.5} />
            </div>
            <div className="services-cta-text">
              <h4>Have a project in mind?</h4>
              <p>Let's build something great together.</p>
            </div>
          </div>
          <button
            className="services-cta-btn"
            onClick={() => scrollTo("contact")}
          >
            Get Free Consultation →
          </button>
        </div>

      </div>
    </section>
  );
}
