import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';
import './ProjectManagement.css';

/* ── Fade-up on scroll ── */
const useFadeUp = (prefix) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add(`${prefix}visible`); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [prefix]);
  return ref;
};

const Fade = ({ children, className = '' }) => {
  const ref = useFadeUp('pm-');
  return <div ref={ref} className={`pm-fade ${className}`}>{children}</div>;
};

/* ── Data ── */
const STATS = [
  { value: '300+', label: 'Projects Managed' },
  { value: '95%',  label: 'On-Time Delivery' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '10+',  label: 'Years Experience' },
];

const SECTIONS = [
  {
    Icon: Leaf,
    title: 'Project Management',
    tag: 'Eco-First Approach',
    body: [
      'Eco-first materials and green-certified processes that prove Project Management and performance go hand in hand. We manage every aspect of your construction project with sustainability at the core.',
      'From planning to execution, our project managers ensure timely delivery, budget adherence, and quality control at every stage.',
    ],
    points: [
      'Dedicated project manager',
      'Real-time progress tracking',
      'Budget & timeline management',
      'Quality assurance',
    ],
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    Icon: CheckCircle,
    title: 'Our Management Process',
    tag: 'How We Deliver',
    body: [
      'Every project starts with detailed planning — defining scope, timeline, budget, and quality benchmarks. Our project managers coordinate all stakeholders to ensure smooth execution.',
      'We use modern project management tools to track progress, manage resources, and communicate updates in real-time.',
    ],
    points: [
      'Detailed project planning',
      'Stakeholder coordination',
      'Risk management',
      'Regular reporting',
    ],
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
  },
  {
    Icon: TrendingUp,
    title: 'Why BOX Project Management',
    tag: 'Our Edge',
    body: [
      'With over a decade of experience managing complex construction projects, BOX Buildtech brings expertise, efficiency, and accountability to every project.',
      'Our track record speaks for itself — 95% on-time delivery, 100% client satisfaction, and zero compromise on quality.',
    ],
    points: [
      'Proven track record',
      'Experienced PM team',
      'Transparent communication',
      'Post-project support',
    ],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
];

export default function ProjectManagement() {
  const navigate = useNavigate();

  const goContact = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pm-page">

      {/* ── HERO ── */}
      <section className="pm-hero">
        <div
          className="pm-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80')" }}
        />
        <div className="pm-hero-overlay" />
        <div className="pm-hero-inner">
          <Fade className="pm-hero-content">
            <span className="pm-eyebrow">Project Management</span>
            <h1 className="pm-hero-headline">
              <span className="pm-hl">Managed Right</span>
              <span className="pm-hl pm-hl-gold">Delivered On Time</span>
            </h1>
            <p className="pm-hero-sub">
              Eco-first materials and green-certified processes with real-time tracking and zero-defect targets.
            </p>
            <button className="pm-hero-btn" onClick={goContact}>
              Start Your Project <ArrowRight size={16} />
            </button>
          </Fade>
        </div>
        <div className="pm-stats-bar">
          {STATS.map((s) => (
            <div key={s.label} className="pm-stat">
              <span className="pm-stat-value">{s.value}</span>
              <span className="pm-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      {SECTIONS.map((svc, i) => {
        const Icon = svc.Icon;
        const isEven = i % 2 === 0;
        return (
          <section
            key={svc.title}
            className={`pm-section ${isEven ? 'pm-bg-dark' : 'pm-bg-navy'}`}
          >
            <div className={`pm-glow ${isEven ? 'pm-glow-right' : 'pm-glow-left'}`} />
            <div className="pm-container">
              <div className={`pm-grid ${isEven ? '' : 'pm-reverse'}`}>

                {/* Image */}
                <Fade className="pm-img-wrap">
                  <img src={svc.img} alt={svc.title} className="pm-img" />
                  <div className="pm-img-badge">
                    <Icon size={16} strokeWidth={1.5} />
                    <span>{svc.tag}</span>
                  </div>
                  <div className="pm-img-corner" />
                </Fade>

                {/* Content */}
                <Fade className="pm-content">
                  <div className="pm-icon-wrap">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="pm-tag">{svc.tag}</span>
                  <h2 className="pm-title">{svc.title}</h2>
                  <div className="pm-gold-bar" />
                  {svc.body.map((p, j) => (
                    <p key={j} className="pm-body">{p}</p>
                  ))}
                  <ul className="pm-points">
                    {svc.points.map((pt) => (
                      <li key={pt} className="pm-point">
                        <CheckCircle size={15} strokeWidth={2} className="pm-point-icon" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <button className="pm-cta-btn" onClick={goContact}>
                    Get A Quote <ArrowRight size={14} />
                  </button>
                </Fade>

              </div>
            </div>
          </section>
        );
      })}

      {/* ── BOTTOM BANNER ── */}
      <section className="pm-banner">
        <div className="pm-banner-grid" />
        <div className="pm-container pm-banner-inner">
          <div>
            <h2 className="pm-banner-title">Need a Project Manager?</h2>
            <p className="pm-banner-sub">Talk to our PM team — free consultation, no obligations.</p>
          </div>
          <button className="pm-banner-btn" onClick={goContact}>
            Contact Us Today <ArrowRight size={16} />
          </button>
        </div>
      </section>

    </div>
  );
}
