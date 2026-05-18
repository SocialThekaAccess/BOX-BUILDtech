import "./About.css";
import boxImg4 from "../../assets/BOXimg4.jpg";

const FEATURES = [
  { icon: "🏆", title: "Award Winning",    desc: "25+ industry awards" },
  { icon: "🤝", title: "Trusted Partners", desc: "100+ global vendors"  },
  { icon: "♻️", title: "Sustainable",      desc: "Green certified builds"},
];

const scrollTo = (id) => {
  window.history.replaceState(null, '', '/');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">

        {/* Image */}
        <div className="about-image-wrap">
          <img
           src={boxImg4}
            alt="Our team at work"
          />
        </div>

        {/* Content */}
        <div className="about-content">
          <span className="about-tag">Our Story</span>
          <h2 className="about-heading">
            Two Decades of Crafting <span>Excellence</span>
          </h2>
          <div className="about-gold-line" />

          <p className="about-body">
            Founded in 2005, BOX Buildtech has grown from a small construction firm
            into one of the region's most trusted names in premium real estate
            development and design.
          </p>
          <p className="about-body">
            Our philosophy is simple — every project deserves the same level of
            passion, precision, and dedication, whether it's a private residence
            or a landmark commercial tower.
          </p>

          <div className="about-features">
            {FEATURES.map((f) => (
              <div key={f.title} className="about-feature">
                <div className="about-feature-icon">{f.icon}</div>
                <div>
                  <div className="about-feature-title">{f.title}</div>
                  <div className="about-feature-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <button className="about-btn" onClick={() => scrollTo('contact')}>
            Start Your Project →
          </button>
        </div>

      </div>
    </section>
  );
}
