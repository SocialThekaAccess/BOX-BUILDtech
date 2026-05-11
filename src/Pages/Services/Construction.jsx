import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, HardHat, Settings2, Leaf, ArrowRight, CheckCircle } from 'lucide-react';
import './Construction.css';

/* ── Fade-up on scroll ── */
const useFadeUp = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('cs-visible'); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const Fade = ({ children, className = '' }) => {
  const ref = useFadeUp();
  return <div ref={ref} className={`cs-fade ${className}`}>{children}</div>;
};

/* ── Data ── */
const STATS = [
  { value: '320+', label: 'Projects Completed' },
  { value: '10+',  label: 'Years Experience'   },
  { value: '85+',  label: 'Happy Clients'       },
  { value: '100%', label: 'Quality Assured'     },
];

const SERVICES = [
  {
    Icon: Building2,
    title: 'Construction Services',
    tag: 'Foundation to Finish',
    body: [
      'Construction is about creating spaces where people live, work, and grow. At BOX Buildtech we think about this when we start every project.',
      'Our goal is to create spaces that feel strong, functional, and built with care. We do not just want to complete construction work — we want to build spaces where people can build their future.',
    ],
    points: ['End-to-end project delivery', 'Uncompromising quality standards', 'On-time completion guarantee', 'Transparent communication'],
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    Icon: Leaf,
    title: 'Interior Design',
    tag: 'Spaces That Feel Right',
    body: [
      'We turn ideas into spaces. We design with care. Every home, office or commercial project feels strong, practical and easy to use. Our work is simple and honest — made to last.',
      'From the sketch to the final finish we focus on every small detail. A good space should not just look nice — it should make daily life smoother and more comfortable.',
    ],
    points: ['Custom design concepts', 'Material selection & sourcing', 'Functional space planning', 'Dedicated project management'],
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
  },
  {
    Icon: HardHat,
    title: 'Architecture',
    tag: 'Design That Stands',
    body: [
      'Architecture is about making plans and designing buildings that are safe and strong for people to use. A good design is really important for every building.',
      'We provide architecture services for homes, offices and commercial spaces. Our goal is to design spaces that are easy to use and comfortable for everyone — good on the inside and the outside.',
    ],
    points: ['Residential & commercial design', 'Structural planning & safety', 'Modern aesthetic approach', 'Regulatory compliance'],
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    Icon: Settings2,
    title: 'Renovation',
    tag: 'New Life for Old Spaces',
    body: [
      'Renovation is like giving a space a new life. Your home, office or shop — any building can look fresh and new again. We do renovations that are easy and make sense.',
      'We help old spaces feel new and useful again. Our goal is to make your space better, more comfortable, and modern — while keeping what makes it special.',
    ],
    points: ['Home & office renovation', 'Structural upgrades', 'Modern finishing & interiors', 'Minimal disruption process'],
    img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80',
  },
];

export default function ConstructionPage() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="cs-page">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="cs-hero">
        <div className="cs-hero-bg" />
        <div className="cs-hero-overlay" />
        <div className="cs-hero-inner">
          <Fade className="cs-hero-content">
            <span className="cs-eyebrow">Our Services</span>
            <h1 className="cs-hero-headline">
              <span className="cs-hl">We Build</span>
              <span className="cs-hl">Spaces That <span className="cs-gold">Last.</span></span>
            </h1>
            <p className="cs-hero-sub">
              From foundation to finish — construction, interiors, architecture,
              and renovation delivered with care and precision.
            </p>
            <button className="cs-hero-btn" onClick={handleContact}>
              Start Your Project <ArrowRight size={16} />
            </button>
          </Fade>
        </div>
        {/* Stats strip */}
        <div className="cs-stats-bar">
          {STATS.map((s) => (
            <div key={s.label} className="cs-stat">
              <span className="cs-stat-value">{s.value}</span>
              <span className="cs-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICE SECTIONS
      ══════════════════════════════════════ */}
      {SERVICES.map((svc, i) => {
        const Icon = svc.Icon;
        const isEven = i % 2 === 0;
        return (
          <section key={svc.title} className={`cs-service-section ${isEven ? 'cs-bg-dark' : 'cs-bg-navy'}`}>
            {/* glow orb */}
            <div className={`cs-glow ${isEven ? 'cs-glow-right' : 'cs-glow-left'}`} />
            <div className="cs-container">
              <div className={`cs-service-grid ${isEven ? '' : 'cs-reverse'}`}>

                {/* Image */}
                <Fade className="cs-img-wrap">
                  <img src={svc.img} alt={svc.title} className="cs-img" />
                  <div className="cs-img-badge">
                    <Icon size={18} strokeWidth={1.5} />
                    <span>{svc.tag}</span>
                  </div>
                  <div className="cs-img-corner" />
                </Fade>

                {/* Content */}
                <Fade className="cs-service-content">
                  <div className="cs-service-icon-wrap">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="cs-tag">{svc.tag}</span>
                  <h2 className="cs-service-title">{svc.title}</h2>
                  <div className="cs-gold-bar" />
                  {svc.body.map((p, j) => (
                    <p key={j} className="cs-body">{p}</p>
                  ))}
                  <ul className="cs-points">
                    {svc.points.map((pt) => (
                      <li key={pt} className="cs-point">
                        <CheckCircle size={15} strokeWidth={2} className="cs-point-icon" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <button className="cs-cta-btn" onClick={handleContact}>
                    Get A Quote <ArrowRight size={14} />
                  </button>
                </Fade>

              </div>
            </div>
          </section>
        );
      })}

      {/* ══════════════════════════════════════
          BOTTOM CTA BANNER
      ══════════════════════════════════════ */}
      <section className="cs-banner">
        <div className="cs-banner-bg" />
        <div className="cs-container cs-banner-inner">
          <div>
            <h2 className="cs-banner-title">Ready to Start Your Project?</h2>
            <p className="cs-banner-sub">Talk to our team — free consultation, no obligations.</p>
          </div>
          <button className="cs-banner-btn" onClick={handleContact}>
            Contact Us Today <ArrowRight size={16} />
          </button>
        </div>
      </section>

    </div>
  );
}
