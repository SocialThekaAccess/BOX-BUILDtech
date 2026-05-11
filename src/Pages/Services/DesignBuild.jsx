import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Factory, Layers, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import './DesignBuild.css';

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
  const ref = useFadeUp('db-');
  return <div ref={ref} className={`db-fade ${className}`}>{children}</div>;
};

/* ── Data ── */
const STATS = [
  { value: '250+', label: 'Projects Delivered' },
  { value: '10+',  label: 'Years Experience' },
  { value: '100%', label: 'Quality Assured' },
  { value: '98%',  label: 'Client Satisfaction' },
];

const SECTIONS = [
  {
    Icon: Factory,
    title: 'Design-Build',
    tag: 'Concept to Completion',
    body: [
      'Heavy-duty industrial construction with real-time tracking, milestone management, and zero-defect targets. Our Design-Build approach integrates design and construction into a single streamlined process.',
      'From initial concept to final handover, one team handles everything — reducing delays, improving communication, and delivering better results.',
    ],
    points: [
      'Single point of contact',
      'Faster project delivery',
      'Cost efficiency',
      'Seamless coordination',
    ],
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    Icon: Layers,
    title: 'Integrated Approach',
    tag: 'Design + Build',
    body: [
      'Traditional construction separates design and build — leading to miscommunication, delays, and cost overruns. Our Design-Build model eliminates these issues by bringing architects, engineers, and builders together from day one.',
      'The result? Faster timelines, better quality, and fewer surprises.',
    ],
    points: [
      'Collaborative design process',
      'Real-time problem solving',
      'Value engineering',
      'Quality control',
    ],
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
  },
  {
    Icon: Zap,
    title: 'Why Design-Build',
    tag: 'The Advantage',
    body: [
      'Design-Build projects are completed 30% faster on average compared to traditional methods. With one team responsible for both design and construction, accountability is clear and execution is efficient.',
      'BOX Buildtech has delivered over 250 Design-Build projects across residential, commercial, and industrial sectors.',
    ],
    points: [
      'Faster project completion',
      'Single-source accountability',
      'Cost predictability',
      'Better quality outcomes',
    ],
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
];

export default function DesignBuild() {
  const navigate = useNavigate();

  const goContact = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="db-page">

      {/* ── HERO ── */}
      <section className="db-hero">
        <div
          className="db-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80')" }}
        />
        <div className="db-hero-overlay" />
        <div className="db-hero-inner">
          <Fade className="db-hero-content">
            <span className="db-eyebrow">Design-Build</span>
            <h1 className="db-hero-headline">
              <span className="db-hl">One Team</span>
              <span className="db-hl db-hl-gold">One Vision</span>
            </h1>
            <p className="db-hero-sub">
              Heavy-duty construction with real-time tracking, milestone management, and zero-defect targets.
            </p>
            <button className="db-hero-btn" onClick={goContact}>
              Start Your Project <ArrowRight size={16} />
            </button>
          </Fade>
        </div>
        <div className="db-stats-bar">
          {STATS.map((s) => (
            <div key={s.label} className="db-stat">
              <span className="db-stat-value">{s.value}</span>
              <span className="db-stat-label">{s.label}</span>
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
            className={`db-section ${isEven ? 'db-bg-dark' : 'db-bg-navy'}`}
          >
            <div className={`db-glow ${isEven ? 'db-glow-right' : 'db-glow-left'}`} />
            <div className="db-container">
              <div className={`db-grid ${isEven ? '' : 'db-reverse'}`}>

                {/* Image */}
                <Fade className="db-img-wrap">
                  <img src={svc.img} alt={svc.title} className="db-img" />
                  <div className="db-img-badge">
                    <Icon size={16} strokeWidth={1.5} />
                    <span>{svc.tag}</span>
                  </div>
                  <div className="db-img-corner" />
                </Fade>

                {/* Content */}
                <Fade className="db-content">
                  <div className="db-icon-wrap">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="db-tag">{svc.tag}</span>
                  <h2 className="db-title">{svc.title}</h2>
                  <div className="db-gold-bar" />
                  {svc.body.map((p, j) => (
                    <p key={j} className="db-body">{p}</p>
                  ))}
                  <ul className="db-points">
                    {svc.points.map((pt) => (
                      <li key={pt} className="db-point">
                        <CheckCircle size={15} strokeWidth={2} className="db-point-icon" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <button className="db-cta-btn" onClick={goContact}>
                    Get A Quote <ArrowRight size={14} />
                  </button>
                </Fade>

              </div>
            </div>
          </section>
        );
      })}

      {/* ── BOTTOM BANNER ── */}
      <section className="db-banner">
        <div className="db-banner-grid" />
        <div className="db-container db-banner-inner">
          <div>
            <h2 className="db-banner-title">Start Your Design-Build Project</h2>
            <p className="db-banner-sub">Get a free consultation and project estimate today.</p>
          </div>
          <button className="db-banner-btn" onClick={goContact}>
            Contact Us Today <ArrowRight size={16} />
          </button>
        </div>
      </section>

    </div>
  );
}
