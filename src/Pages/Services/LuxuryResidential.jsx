import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { HardHat, Home, Star, CheckCircle, ArrowRight } from 'lucide-react';
import './LuxuryResidential.css';

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
  const ref = useFadeUp('lr-');
  return <div ref={ref} className={`lr-fade ${className}`}>{children}</div>;
};

/* ── Data ── */
const STATS = [
  { value: '150+', label: 'Homes Delivered' },
  { value: '10+',  label: 'Years Experience' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '5★',   label: 'Average Rating' },
];

const SECTIONS = [
  {
    Icon: HardHat,
    title: 'High End Residential',
    tag: 'Premium Homes',
    body: [
      'We design and build luxury residential spaces that combine elegance with functionality. Every home we create is a reflection of the client\'s vision — crafted with premium materials and meticulous attention to detail.',
      'Seamless project oversight ensuring timely delivery, budget adherence, and quality control at every stage. From the foundation to the final finish, we ensure your dream home becomes a reality.',
    ],
    points: [
      'Custom luxury home design',
      'Premium material selection',
      'Dedicated interior coordination',
      'On-time delivery guarantee',
    ],
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    Icon: Home,
    title: 'Interior Excellence',
    tag: 'Inside & Out',
    body: [
      'A luxury home is not just about the structure — it\'s about how every room feels. Our interior design team works alongside the construction team to ensure seamless integration of design and build.',
      'From bespoke joinery to custom lighting plans, we handle every detail so you don\'t have to. The result is a home that feels cohesive, comfortable, and uniquely yours.',
    ],
    points: [
      'Bespoke interior design',
      'Smart home integration',
      'Landscaping & outdoor spaces',
      'Full turnkey delivery',
    ],
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
  },
  {
    Icon: Star,
    title: 'The BOX Standard',
    tag: 'Our Promise',
    body: [
      'Every luxury home we build goes through our rigorous quality assurance process. We inspect every element — structural integrity, finishing quality, and system performance — before handover.',
      'Our after-sales support ensures that your home continues to perform at its best. We stand behind every project we deliver with a comprehensive warranty and dedicated support team.',
    ],
    points: [
      'Multi-stage quality inspections',
      'Comprehensive handover package',
      'Post-completion warranty',
      'Dedicated client support',
    ],
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  },
];

export default function LuxuryResidential() {
  const navigate = useNavigate();

  const goContact = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="lr-page">

      {/* ── HERO ── */}
      <section className="lr-hero">
        <div
          className="lr-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80')" }}
        />
        <div className="lr-hero-overlay" />
        <div className="lr-hero-inner">
          <Fade className="lr-hero-content">
            <span className="lr-eyebrow">High End Residential</span>
            <h1 className="lr-hero-headline">
              <span className="lr-hl">Your Dream Home</span>
              <span className="lr-hl lr-hl-gold">Perfectly Built</span>
            </h1>
            <p className="lr-hero-sub">
              Premium residential construction with seamless project oversight, timely delivery, and quality control at every stage.
            </p>
            <button className="lr-hero-btn" onClick={goContact}>
              Start Your Project <ArrowRight size={16} />
            </button>
          </Fade>
        </div>
        <div className="lr-stats-bar">
          {STATS.map((s) => (
            <div key={s.label} className="lr-stat">
              <span className="lr-stat-value">{s.value}</span>
              <span className="lr-stat-label">{s.label}</span>
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
            className={`lr-section ${isEven ? 'lr-bg-dark' : 'lr-bg-navy'}`}
          >
            <div className={`lr-glow ${isEven ? 'lr-glow-right' : 'lr-glow-left'}`} />
            <div className="lr-container">
              <div className={`lr-grid ${isEven ? '' : 'lr-reverse'}`}>

                {/* Image */}
                <Fade className="lr-img-wrap">
                  <img src={svc.img} alt={svc.title} className="lr-img" />
                  <div className="lr-img-badge">
                    <Icon size={16} strokeWidth={1.5} />
                    <span>{svc.tag}</span>
                  </div>
                  <div className="lr-img-corner" />
                </Fade>

                {/* Content */}
                <Fade className="lr-content">
                  <div className="lr-icon-wrap">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="lr-tag">{svc.tag}</span>
                  <h2 className="lr-title">{svc.title}</h2>
                  <div className="lr-gold-bar" />
                  {svc.body.map((p, j) => (
                    <p key={j} className="lr-body">{p}</p>
                  ))}
                  <ul className="lr-points">
                    {svc.points.map((pt) => (
                      <li key={pt} className="lr-point">
                        <CheckCircle size={15} strokeWidth={2} className="lr-point-icon" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <button className="lr-cta-btn" onClick={goContact}>
                    Get A Quote <ArrowRight size={14} />
                  </button>
                </Fade>

              </div>
            </div>
          </section>
        );
      })}

      {/* ── BOTTOM BANNER ── */}
      <section className="lr-banner">
        <div className="lr-banner-grid" />
        <div className="lr-container lr-banner-inner">
          <div>
            <h2 className="lr-banner-title">Build Your Dream Home</h2>
            <p className="lr-banner-sub">Talk to our residential specialists — free consultation, no obligations.</p>
          </div>
          <button className="lr-banner-btn" onClick={goContact}>
            Contact Us Today <ArrowRight size={16} />
          </button>
        </div>
      </section>

    </div>
  );
}
