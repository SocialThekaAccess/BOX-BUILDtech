import { useState } from "react";
import {
  Building2,
  Settings2,
  HardHat,
  Leaf,
  Factory,
  Truck,
  Headphones,
} from "lucide-react";
import "./Services.css";

const SERVICES = [
  {
    Icon: Building2,
    title: "Construction",
    desc: "End-to-end construction services from foundation to finishing with uncompromising quality and precision.",
  },
  {
    Icon: HardHat,
    title: "Project Management",
    desc: "Seamless project oversight ensuring timely delivery, budget adherence, and quality control at every stage.",
  },
  {
    Icon: Settings2,
    title: "Renovation",
    desc: "Transform existing spaces with precision renovations that breathe new life into old structures.",
  },
  {
    Icon: Leaf,
    title: "Sustainable Building",
    desc: "Eco-first materials and green-certified processes that prove sustainability and performance go hand in hand.",
  },
  {
    Icon: Factory,
    title: "Industrial Works",
    desc: "Heavy-duty industrial construction with real-time tracking, milestone management, and zero-defect targets.",
  },
  {
    Icon: Truck,
    title: "Logistics & Supply",
    desc: "End-to-end supply chain management ensuring materials arrive on time, every time, without compromise.",
  },
];

const scrollTo = (id) => {
  window.history.replaceState(null, "", "/");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Services() {
  const [hovered, setHovered] = useState(null);

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
                <h3 className="service-card-title">{s.title}</h3>
                <p className="service-card-desc">{s.desc}</p>
                <button
                  className="service-card-link"
                  onClick={() => scrollTo("contact")}
                >
                  Read More →
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
