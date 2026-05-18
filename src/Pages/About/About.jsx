import './About.css';
import { useEffect, useRef } from 'react';
import boxImg1 from '../../assets/Aboutimg.jpg';

const STATS = [
  { value: '10+',  label: 'Years of Experience' },
  { value: '320+', label: 'Projects Completed'  },
  { value: '85+',  label: 'Happy Clients'        },
  { value: '6',    label: 'Core Services'        },
];

const VALUES = [
  {
    icon: '◈',
    title: 'Quality First',
    desc: 'Every material, every detail, every finish — held to the highest standard without compromise.',
  },
  {
    icon: '◉',
    title: 'Client-Centered',
    desc: 'We listen deeply before we build. Your vision drives every decision we make on site.',
  },
  {
    icon: '◎',
    title: 'Honest Work',
    desc: 'Transparent timelines, clear communication, and no surprises — just reliable delivery.',
  },
  {
    icon: '◆',
    title: 'Built to Last',
    desc: 'Spaces designed for longevity — functional, beautiful, and structurally sound for decades.',
  },
];

const SERVICES_LIST = [
  'Construction', 'Interior Design', 'Architecture',
  'Renovation', 'Landscaping', 'Project Management',
];

/* Simple fade-up on scroll */
const useFadeUp = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('au-visible'); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const FadeSection = ({ children, className = '' }) => {
  const ref = useFadeUp();
  return <div ref={ref} className={`au-fade ${className}`}>{children}</div>;
};

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* ══════════════════════════════════════
          HERO — Full bleed statement
      ══════════════════════════════════════ */}
      <section className="ap-hero">
        <div className="ap-hero-bg" style={{ backgroundImage: `url(${boxImg1})` }} />
        <div className="ap-hero-overlay" />
        <div className="ap-hero-inner">
          <FadeSection className="ap-hero-content">
            <span className="ap-eyebrow">About BOX Buildtech</span>
            <h2 className="ap-hero-headline">
              <span className="ap-hl-line">We Turn Ideas</span>
              <span className="ap-hl-line">Into <span className="ap-hl-gold">Experiences</span></span>
            </h2>
            <p className="ap-hero-sub">
              We help transform concepts into well-built spaces through thoughtful
              design, quality construction, and smooth project execution.
            </p>
          </FadeSection>
        </div>
        {/* Stats strip */}
        <div className="ap-stats-bar">
          {STATS.map((s) => (
            <div key={s.label} className="ap-stat">
              <span className="ap-stat-value">{s.value}</span>
              <span className="ap-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          INTRO — Built with creativity
      ══════════════════════════════════════ */}
      <section className="ap-intro">
        <div className="ap-container">
          <div className="ap-intro-grid">

            <FadeSection className="ap-intro-left">
              <span className="ap-tag">Our Story</span>
              <h2 className="ap-heading">
                Built with creativity<br />
                driven by <span>functionality</span>
              </h2>
              <div className="ap-gold-bar" />
            </FadeSection>

            <FadeSection className="ap-intro-right">
              <p className="ap-body">
                BOX Buildtech has been delivering construction and development work
                since its founding. We specialise in construction, interiors,
                architecture, renovation, landscaping, and project management —
                for homes and offices alike.
              </p>
              <p className="ap-body">
                Every project is unique. We talk to our clients extensively to
                understand what they want and what they need before a single brick
                is laid. Our goal is simple — work that makes our clients genuinely
                happy, every time.
              </p>
              {/* Services chips */}
              <div className="ap-chips">
                {SERVICES_LIST.map((s) => (
                  <span key={s} className="ap-chip">{s}</span>
                ))}
              </div>
            </FadeSection>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOUNDER — Built on Trust
      ══════════════════════════════════════ */}
      <section className="ap-founder">
        <div className="ap-container">
          <div className="ap-founder-grid">

            <FadeSection className="ap-founder-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80"
                alt="Pooja Yadav — Founder & Director"
              />
              <div className="ap-founder-badge">
                <span className="ap-founder-badge-name">Pooja Yadav</span>
                <span className="ap-founder-badge-role">Founder &amp; Director</span>
              </div>
            </FadeSection>

            <FadeSection className="ap-founder-content">
              <span className="ap-tag">Built on Trust</span>
              <h2 className="ap-heading">
                A vision rooted in<br />
                <span>people &amp; purpose</span>
              </h2>
              <div className="ap-gold-bar" />
              <p className="ap-body">
                BOX Buildtech was founded by Pooja Yadav with the idea of creating
                spaces that feel thoughtfully built and genuinely useful for the
                people who use them every day.
              </p>
              <p className="ap-body">
                From the beginning, the focus has never been just on completing
                projects. It has always been about understanding what the client
                truly wants and turning that vision into a space that feels right
                in every way — visually, practically, and structurally.
              </p>

              {/* Vision & Mission */}
              <div className="ap-vm-grid">
                <div className="ap-vm-card">
                  <div className="ap-vm-icon">◈</div>
                  <h4 className="ap-vm-title">Our Vision</h4>
                  <p className="ap-vm-text">
                    To create modern and meaningful spaces that combine quality,
                    functionality, and lasting value.
                  </p>
                </div>
                <div className="ap-vm-card">
                  <div className="ap-vm-icon">◉</div>
                  <h4 className="ap-vm-title">Our Mission</h4>
                  <p className="ap-vm-text">
                    To deliver construction and development solutions with honesty,
                    creativity, attention to detail, and a strong commitment to
                    quality work.
                  </p>
                </div>
              </div>
            </FadeSection>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          VALUES — What drives us
      ══════════════════════════════════════ */}
      <section className="ap-values">
        <div className="ap-container">
          <FadeSection className="ap-section-header">
            <span className="ap-tag">What Drives Us</span>
            <h2 className="ap-heading center">
              Our Core <span>Values</span>
            </h2>
          </FadeSection>

          <div className="ap-values-grid">
            {VALUES.map((v, i) => (
              <FadeSection key={v.title} className="ap-value-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="ap-value-icon">{v.icon}</div>
                <h3 className="ap-value-title">{v.title}</h3>
                <p className="ap-value-desc">{v.desc}</p>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          LEADERSHIP — Driven by Experience
      ══════════════════════════════════════ */}
      <section className="ap-leadership">
        <div className="ap-container">
          <FadeSection className="ap-leadership-inner">
            <div className="ap-leadership-left">
              <span className="ap-tag">Driven By Experience</span>
              <h2 className="ap-heading">
                Leadership that<br />
                <span>builds with care.</span>
              </h2>
              <div className="ap-gold-bar" />
            </div>
            <div className="ap-leadership-right">
              <p className="ap-body">
                Under the leadership of Pooja Yadav, BOX Buildtech has continued
                to grow with a focus on quality work, practical design, and client
                satisfaction. The company believes in proper planning, clear
                communication, and delivering spaces that are built with care and
                attention to detail.
              </p>
              <p className="ap-body">
                With a practical approach towards every project, the team focuses
                on creating spaces that feel modern, functional, and comfortable
                for everyday use.
              </p>
              <a href="#contact" className="ap-cta-btn">
                Start Your Project →
              </a>
            </div>
          </FadeSection>
        </div>
      </section>

    </div>
  );
}
