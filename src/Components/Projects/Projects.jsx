import { useState } from "react";
import "./Projects.css";

const FILTERS = ["All", "Residential", "Interior"];

const PROJECTS = [
  {
    id: 1,
    title: "Modern Villa",
    category: "Residential",
    location: "ODDISA, INDIA",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
  },
  {
    id: 3,
    title: "Luxury Apartment",
    category: "Residential",
    location: "CHANDIGARH, INDIA",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80",
  },
  {
    id: 6,
    title: "Office Interior",
    category: "Interior",
    location: "NOIDA, INDIA",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">

        {/* Section Header — centered */}
        <div className="projects-section-header">
          <span className="projects-eyebrow-tag">Our Projects</span>
          <h2 className="projects-main-title">
            Featured <span>Projects</span>
          </h2>
          <p className="projects-subtitle">
            Specializing exclusively in residential villas, we create elegant living spaces crafted with quality, comfort, and modern design in every detail.
          </p>
          <a href="#contact" className="projects-view-all">
            View All Projects →
          </a>
        </div>

        {/* Filter Tabs — centered */}
        <div className="projects-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`projects-filter-btn ${active === f ? "active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((p) => (
            <div key={p.id} className="project-card">
              <div className="project-img-wrap">
                <img src={p.image} alt={p.title} loading="lazy" />
                <div className="project-overlay">
                  <span className="project-overlay-cta">View Project →</span>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{p.category}</span>
                <h3 className="project-name">{p.title}</h3>
                <p className="project-location">📍 {p.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
