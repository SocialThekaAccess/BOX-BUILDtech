import { useNavigate } from "react-router-dom";
import "./Projects.css";
import heroproject1 from "../../assets/heroproject1.webp";
import heroproject2 from "../../assets/Villaa58.png";
import heroproject3 from "../../assets/heroproject3.webp";

const PROJECTS = [
  {
    id: 1,
    slug: "villa-361",
    title: "Villa 361",
    location: "CHANDIGARH, INDIA",
    image: heroproject1,
  },
  {
    id: 2,
    slug: "villa-58",
    title: "Villa 58",
    location: "MOHALI, INDIA",
    image: heroproject2,
    imgPosition: "center 68%",
  },
  {
    id: 3,
    slug: "villa-303",
    title: "Villa 303",
    location: "NEW CHANDIGARH, INDIA",
    image: heroproject3,
    imgPosition: "center 15%",
  },
];

export default function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (slug) => {
    navigate(`/projects/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">

        {/* Section Header */}
        <div className="projects-section-header">
          <span className="projects-eyebrow-tag">Our Projects</span>
          <h2 className="projects-main-title">
            Featured <span>Projects</span>
          </h2>
          <p className="projects-subtitle">
            From luxury residences to Residential Villas towers where every project
            tells a story of precision and passion.
          </p>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div key={p.id} className="project-card" onClick={() => handleProjectClick(p.slug)}>
              <div className="project-img-wrap">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  style={p.imgPosition ? { objectPosition: p.imgPosition } : {}}
                />
                <div className="project-overlay">
                  <span className="project-overlay-cta">View Project →</span>
                </div>
              </div>
              <div className="project-info">
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
