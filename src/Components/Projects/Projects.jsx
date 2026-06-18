import "./Projects.css";
import heroproject1 from "../../assets/heroproject1.png";
import heroproject2 from "../../assets/heroproject2.png";
import heroproject3 from "../../assets/HeroProject3.jpeg";

const PROJECTS = [
  {
    id: 1,
    title: "Villa 361 ",
    location: "CHANDIGARH, INDIA",
    image: heroproject1,
  },
  {
    id: 2,
    title: "Villa 58 ",
    location: "MOHALI, INDIA",
    image: heroproject2,
    imgPosition: "center 68%",
  },
  {
    id: 3,
    title: "Villa 303",
    location: "NEW CHANDIGARH, INDIA",
    image: heroproject3,
    imgPosition: "center 15%",
  },
  
  // {
  //   id: 4,
  //   title: "Modern Courtyard Villa",
  //   location: "CHANDIGARH, INDIA",
  //   image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80",
  // },
  // {
  //   id: 5,
  //   title: "Private Estate Villa",
  //   location: "MOHALI, INDIA",
  //   image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80",
  // },
  // {
  //   id: 6,
  //   title: "Architect-Designed Villa",
  //   location: "NEW CHANDIGARH, INDIA",
  //   image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
  // },

  // {
  //   id: 7,
  //   title: "Tropical Garden Villa",
  //   location: "CHANDIGARH, INDIA",
  //   image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=700&q=80",
  // },

  // {
  //   id: 8,
  //   title: "Minimalist White Villa",
  //   location: "MOHALI, INDIA",
  //   image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80",
  // },

  // {
  //   id: 9,
  //   title: "Grand Heritage Villa",
  //   location: "NEW CHANDIGARH, INDIA",
  //   image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=700&q=80",
  // },
];

export default function Projects() {
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
            <div key={p.id} className="project-card">
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
