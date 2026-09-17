import { useState } from "react";
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
    description: "A stunning modern villa featuring contemporary architecture with clean lines and luxurious finishes. This premium residence combines elegant design with functional spaces, creating a perfect harmony of style and comfort in the heart of Chandigarh."
  },
  {
    id: 2,
    title: "Villa 58 ",
    location: "MOHALI, INDIA",
    image: heroproject2,
    imgPosition: "center 68%",
    description: "An architectural masterpiece showcasing innovative design and superior craftsmanship. Villa 58 represents the perfect blend of modern aesthetics and practical living, with spacious interiors and premium amenities that redefine luxury residential living in Mohali."
  },
  {
    id: 3,
    title: "Villa 303",
    location: "NEW CHANDIGARH, INDIA",
    image: heroproject3,
    imgPosition: "center 15%",
    description: "A contemporary residential marvel featuring bold architectural elements and sophisticated design. This villa exemplifies precision construction and attention to detail, offering expansive living spaces and state-of-the-art facilities that set new standards in luxury housing."
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
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
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
            <div key={p.id} className="project-card" onClick={() => handleProjectClick(p)}>
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

      {/* Modal Popup */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={closeModal}>
              ✕
            </button>
            <div className="project-modal-image">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={selectedProject.imgPosition ? { objectPosition: selectedProject.imgPosition } : {}}
              />
            </div>
            <div className="project-modal-info">
              <h3 className="project-modal-title">{selectedProject.title}</h3>
              <p className="project-modal-location">📍 {selectedProject.location}</p>
              <p className="project-modal-description">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
