import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import './ServicePage.css';

/* ── Fade-up on scroll ── */
const useFadeUp = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('sp-visible'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const Fade = ({ children, className = '' }) => {
  const ref = useFadeUp();
  return <div ref={ref} className={`sp-fade ${className}`}>{children}</div>;
};

/* ════════════════════════════════════════
   REUSABLE SERVICE PAGE COMPONENT
   Props:
     - eyebrow: string
     - headline: { white: string, gold: string }
     - heroSub: string
     - heroBg: string (image url)
     - stats: [{ value, label }]
     - sections: [{
         Icon, title, tag, body: [string],
         points: [string], img: string
       }]
     - bannerTitle: string
     - bannerSub: string
════════════════════════════════════════ */
export default function ServicePage({
  eyebrow,
  headline,
  heroSub,
  heroBg,
  stats,
  sections,
  bannerTitle,
  bannerSub,
}) {
  const navigate = useNavigate();

  const goContact = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="sp-page">

      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-bg" style={{ backgroundImage: `url('${heroBg}')` }} />
        <div className="sp-hero-overlay" />
        <div className="sp-hero-inner">
          <Fade className="sp-hero-content">
            <span className="sp-eyebrow">{eyebrow}</span>
            <h2 className="sp-hero-headline">
              <span className="sp-hl">{headline.white}</span>
              <span className="sp-hl sp-hl-gold">{headline.gold}</span>
            </h2>
            <p className="sp-hero-sub">{heroSub}</p>
            <button className="sp-hero-btn" onClick={goContact}>
              Start Your Project <ArrowRight size={16} />
            </button>
          </Fade>
        </div>
        <div className="sp-stats-bar">
          {stats.map((s) => (
            <div key={s.label} className="sp-stat">
              <span className="sp-stat-value">{s.value}</span>
              <span className="sp-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      {sections.map((svc, i) => {
        const Icon = svc.Icon;
        const isEven = i % 2 === 0;
        return (
          <section
            key={svc.title}
            className={`sp-section ${isEven ? 'sp-bg-dark' : 'sp-bg-navy'}`}
          >
            <div className={`sp-glow ${isEven ? 'sp-glow-right' : 'sp-glow-left'}`} />
            <div className="sp-container">
              <div className={`sp-grid ${isEven ? '' : 'sp-reverse'}`}>

                {/* Image */}
                <Fade className="sp-img-wrap">
                  <img src={svc.img} alt={svc.title} className="sp-img" />
                  <div className="sp-img-badge">
                    <Icon size={16} strokeWidth={1.5} />
                    <span>{svc.tag}</span>
                  </div>
                  <div className="sp-img-corner" />
                </Fade>

                {/* Content */}
                <Fade className="sp-content">
                  <div className="sp-icon-wrap">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="sp-tag">{svc.tag}</span>
                  <h2 className="sp-title">{svc.title}</h2>
                  <div className="sp-gold-bar" />
                  {svc.body.map((p, j) => (
                    <p key={j} className="sp-body">{p}</p>
                  ))}
                  <ul className="sp-points">
                    {svc.points.map((pt) => (
                      <li key={pt} className="sp-point">
                        <CheckCircle size={15} strokeWidth={2} className="sp-point-icon" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <button className="sp-cta-btn" onClick={goContact}>
                    Get A Quote <ArrowRight size={14} />
                  </button>
                </Fade>

              </div>
            </div>
          </section>
        );
      })}

      {/* ── BOTTOM BANNER ── */}
      <section className="sp-banner">
        <div className="sp-banner-grid" />
        <div className="sp-container sp-banner-inner">
          <div>
            <h2 className="sp-banner-title">{bannerTitle}</h2>
            <p className="sp-banner-sub">{bannerSub}</p>
          </div>
          <button className="sp-banner-btn" onClick={goContact}>
            Contact Us Today <ArrowRight size={16} />
          </button>
        </div>
      </section>

    </div>
  );
}
