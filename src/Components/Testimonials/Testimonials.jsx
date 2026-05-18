import "./Testimonials.css";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Director, Sharma Builders, Delhi",
    avatar: "RS",
    rating: 5,
    text: "Exceptional craftsmanship and professionalism. They delivered our corporate headquarters on time and beyond our expectations. Truly a world-class team.",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Homeowner, Chandigarh",
    avatar: "PM",
    rating: 5,
    text: "Our dream home became a reality thanks to their incredible team. Every detail was handled with care and the quality is simply outstanding.",
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "MD, Malhotra Hospitality Group",
    avatar: "VM",
    rating: 5,
    text: "The project was complex, but they managed it flawlessly. Their attention to detail and commitment to quality is unmatched in the industry.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-inner">

        {/* Header */}
        <div className="testimonials-header">
          <span className="testimonials-eyebrow">Testimonials</span>
          <h2 className="testimonials-title">What Our <span>Clients Say</span></h2>
          <p className="testimonials-sub">
            Real words from the people who trusted us with their most important projects.
          </p>
        </div>

        {/* Cards */}
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="testimonial-card">
              {/* Stars */}
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>

              <p className="testimonial-text">{t.text}</p>

              <div className="testimonial-author">
                <div className="author-avatar">{t.avatar}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
