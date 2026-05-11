import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings2, Wrench, Star, CheckCircle, ArrowRight } from 'lucide-react';
import './PremiumRenovations.css';

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
  const ref = useFadeUp('pr-');
  return <div ref={ref} className={`pr-fade ${className}`}>{children}</div>;
};

/* ── Data ── */
const STATS = [
  { value: '200+', label: 'Renovations Done' },
  { value: '8+',   label: 'Years Experience' },
  { value: '90%',  label: 'Repeat Clients' },
  { value: '100%', label: 'Quality Assured' },
];

const SECTIONS = [
  {
    Icon: Settings2,
    title: 'Premium Renovations',
    tag: 'Transform Your Space',
    body: [
      'Renovation is like giving a space a new life. Your home, office or shop — any building can look fresh and new again. We do renovations that are easy and make sense.',
      'Transform existing spaces with precision Premium Renovations that breathe new life into old structures. We help old spaces feel new and useful again.',
    ],
    points: [
      'Home & office renovation',
      'Structural upgrades',
      'Modern finishing & interiors',
      'Minimal disruption process',
    ],
    img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80',
  },
  {
    Icon: Wrench,
    title: 'Our Renovation Process',
    tag: 'Step by Step',
    body: [
      'We start with a detailed assessment of your existing space — understanding what works, what needs fixing, and what can be improved. Our team creates a renovation plan that maximizes value while minimizing disruption.',
      'From structural repairs to aesthetic upgrades, we handle every aspect of the renovation with care and precision.',
    ],
    points: [
      'Detailed space assessment',
      'Custom renovation plan',
      'Phased execution',
      'Quality finishing',
    ],
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    Icon: Star,
    title: 'Why Renovate with BOX',
    tag: 'Our Advantage',
    body: [
      'Our goal is to make your space better, more comfortable, and modern — while keeping what makes it special. We work efficiently to minimize downtime and disruption to your daily routine.',
      'Every renovation project is backed by our quality guarantee and dedicated support team.',
    ],
    points: [
      'Minimal disruption guarantee',
      'Transparent pricing',
      'Experienced renovation team',
      'Post-renovation support',
    ],
    img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
  },
];

export default function PremiumRenovations() {
  const navigate = useNavigate();

  const goContact = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pr-page">

      {/* ── HERO ── */}
      <section className="pr-hero">
        <div
          className="pr-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1600&q=80')" }}
        />
        <div className="pr-hero-overlay" />
        <div className="pr-hero-inner">
          <Fade className="pr-hero-content">
            <span className="pr-eyebrow">Premium Renovations</span>
            <h1 className="pr-hero-headline">
              <span className="pr-hl">Old Spaces</span>
              <span className="pr-hl pr-hl-gold">New Life</span>
            </h1>
            <p className="pr-hero-sub">
              Transform existing spaces with precision renovations that breathe new life into old structures.
            </p>
            <button className="pr-hero-btn" onClick={goContact}>
              Start Your Project <ArrowRight size={16} />
            </button>
          </Fade>
        </div>
        <div className="pr-stats-bar">
          {STATS.map((s) => (
            <div key={s.label} className="pr-stat">
              <span className="pr-stat-value">{s.value}</span>
              <span className="pr-stat-label">{s.label}</span>
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
            className={`pr-section ${isEven ? 'pr-bg-dark' : 'pr-bg-navy'}`}
          >
            <div className={`pr-glow ${isEven ? 'pr-glow-right' : 'pr-glow-left'}`} />
            <div className="pr-container">
              <div className={`pr-grid ${isEven ? '' : 'pr-reverse'}`}>

                {/* Image */}
                <Fade className="pr-img-wrap">
                  <img src={svc.img} alt={svc.title} className="pr-img" />
                  <div className="pr-img-badge">
                    <Icon size={16} strokeWidth={1.5} />
                    <span>{svc.tag}</span>
                  </div>
                  <div className="pr-img-corner" />
                </Fade>

                {/* Content */}
                <Fade className="pr-content">
                  <div className="pr-icon-wrap">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="pr-tag">{svc.tag}</span>
                  <h2 className="pr-title">{svc.title}</h2>
                  <div className="pr-gold-bar" />
                  {svc.body.map((p, j) => (
                    <p key={j} className="pr-body">{p}</p>
                  ))}
                  <ul className="pr-points">
                    {svc.points.map((pt) => (
                      <li key={pt} className="pr-point">
                        <CheckCircle size={15} strokeWidth={2} className="pr-point-icon" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <button className="pr-cta-btn" onClick={goContact}>
                    Get A Quote <ArrowRight size={14} />
                  </button>
                </Fade>

              </div>
            </div>
          </section>
        );
      })}

      {/* ── BOTTOM BANNER ── */}
      <section className="pr-banner">
        <div className="pr-banner-grid" />
        <div className="pr-container pr-banner-inner">
          <div>
            <h2 className="pr-banner-title">Ready to Renovate?</h2>
            <p className="pr-banner-sub">Get a free renovation assessment and quote today.</p>
          </div>
          <button className="pr-banner-btn" onClick={goContact}>
            Contact Us Today <ArrowRight size={16} />
          </button>
        </div>
      </section>

    </div>
  );
}
