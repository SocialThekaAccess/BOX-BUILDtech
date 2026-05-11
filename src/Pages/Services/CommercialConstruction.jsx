import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import './CommercialConstruction.css';

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
  const ref = useFadeUp('cc-');
  return <div ref={ref} className={`cc-fade ${className}`}>{children}</div>;
};

/* ── Data ── */
const STATS = [
  { value: '320+', label: 'Projects Completed' },
  { value: '10+',  label: 'Years Experience' },
  { value: '85+',  label: 'Happy Clients' },
  { value: '100%', label: 'Quality Assured' },
];

const SECTIONS = [
  {
    Icon: Building2,
    title: 'Commercial Construction',
    tag: 'Foundation to Finish',
    body: [
      'Construction is about creating spaces where people live, work, and grow. At BOX Buildtech we think about this when we start every project. Our goal is to create spaces that feel strong, functional, and built with care.',
      'We do not just want to complete construction work — we want to build spaces where people can build their future. Every project starts with a deep understanding of what you need.',
    ],
    points: [
      'End-to-end project delivery',
      'Uncompromising quality standards',
      'On-time completion guarantee',
      'Transparent communication throughout',
    ],
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    Icon: Shield,
    title: 'Our Process',
    tag: 'How We Work',
    body: [
      'Every commercial project begins with a thorough site assessment and detailed planning phase. We work closely with architects, engineers, and clients to ensure every specification is met before a single brick is laid.',
      'Our project managers oversee every stage — from groundwork to final handover — ensuring quality control at every milestone. We believe in building right the first time.',
    ],
    points: [
      'Detailed pre-construction planning',
      'Dedicated project manager assigned',
      'Regular progress updates & reports',
      'Post-completion support & warranty',
    ],
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
  },
  {
    Icon: Clock,
    title: 'Why Choose BOX Buildtech',
    tag: 'Our Commitment',
    body: [
      'With over a decade of experience in commercial construction, BOX Buildtech has built a reputation for delivering projects on time, within budget, and to the highest standards.',
      'Our team of skilled professionals brings expertise across all aspects of construction — structural, mechanical, electrical, and finishing — ensuring a seamless build from start to finish.',
    ],
    points: [
      'Experienced & certified team',
      'Competitive & transparent pricing',
      'Safety-first site management',
      'Sustainable building practices',
    ],
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
];

export default function CommercialConstruction() {
  const navigate = useNavigate();

  const goContact = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="cc-page">

      {/* ── HERO ── */}
      <section className="cc-hero">
        <div
          className="cc-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80')" }}
        />
        <div className="cc-hero-overlay" />
        <div className="cc-hero-inner">
          <Fade className="cc-hero-content">
            <span className="cc-eyebrow">Commercial Construction</span>
            <h1 className="cc-hero-headline">
              <span className="cc-hl">Built Strong</span>
              <span className="cc-hl cc-hl-gold">Built to Last</span>
            </h1>
            <p className="cc-hero-sub">
              End-to-end commercial construction services from foundation to finishing with uncompromising quality and precision.
            </p>
            <button className="cc-hero-btn" onClick={goContact}>
              Start Your Project <ArrowRight size={16} />
            </button>
          </Fade>
        </div>
        <div className="cc-stats-bar">
          {STATS.map((s) => (
            <div key={s.label} className="cc-stat">
              <span className="cc-stat-value">{s.value}</span>
              <span className="cc-stat-label">{s.label}</span>
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
            className={`cc-section ${isEven ? 'cc-bg-dark' : 'cc-bg-navy'}`}
          >
            <div className={`cc-glow ${isEven ? 'cc-glow-right' : 'cc-glow-left'}`} />
            <div className="cc-container">
              <div className={`cc-grid ${isEven ? '' : 'cc-reverse'}`}>

                {/* Image */}
                <Fade className="cc-img-wrap">
                  <img src={svc.img} alt={svc.title} className="cc-img" />
                  <div className="cc-img-badge">
                    <Icon size={16} strokeWidth={1.5} />
                    <span>{svc.tag}</span>
                  </div>
                  <div className="cc-img-corner" />
                </Fade>

                {/* Content */}
                <Fade className="cc-content">
                  <div className="cc-icon-wrap">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="cc-tag">{svc.tag}</span>
                  <h2 className="cc-title">{svc.title}</h2>
                  <div className="cc-gold-bar" />
                  {svc.body.map((p, j) => (
                    <p key={j} className="cc-body">{p}</p>
                  ))}
                  <ul className="cc-points">
                    {svc.points.map((pt) => (
                      <li key={pt} className="cc-point">
                        <CheckCircle size={15} strokeWidth={2} className="cc-point-icon" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <button className="cc-cta-btn" onClick={goContact}>
                    Get A Quote <ArrowRight size={14} />
                  </button>
                </Fade>

              </div>
            </div>
          </section>
        );
      })}

      {/* ── BOTTOM BANNER ── */}
      <section className="cc-banner">
        <div className="cc-banner-grid" />
        <div className="cc-container cc-banner-inner">
          <div>
            <h2 className="cc-banner-title">Ready to Build?</h2>
            <p className="cc-banner-sub">Get a free consultation and project estimate today.</p>
          </div>
          <button className="cc-banner-btn" onClick={goContact}>
            Contact Us Today <ArrowRight size={16} />
          </button>
        </div>
      </section>

    </div>
  );
}
