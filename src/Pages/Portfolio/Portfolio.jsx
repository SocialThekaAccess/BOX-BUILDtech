import { Helmet } from 'react-helmet-async';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import './Portfolio.css';
import Portfolioimg from '../../assets/Portfolioimg.jpg';

import before1  from '../../assets/Beforeimg1.jpg';
import before2  from '../../assets/Beforeimg2.jpg';
import before3  from '../../assets/Beforeimg3.jpg';
import before4  from '../../assets/Beforeimg4.jpg';
import before5  from '../../assets/Befoeimg5.jpg';
import before6  from '../../assets/Beforeimg6.jpg';
import before7  from '../../assets/Beforeimg7.jpg';
import before8  from '../../assets/Beforeimg8.jpg';
import before9  from '../../assets/Beforeimg9.jpg';
import before10 from '../../assets/Beforeimg10.jpg';
import before11 from '../../assets/Beforeimg11.jpg';

import after1  from '../../assets/Afterimg1.jpg';
import after2  from '../../assets/Afterimg2.jpg';
import after3  from '../../assets/Afterimg3.jpg';
import after4  from '../../assets/Afterimg4.jpg';
import after5  from '../../assets/Afterimg5.jpg';
import after6  from '../../assets/Afterimg6.jpg';
import after7  from '../../assets/Afterimg7.jpg';
import after8  from '../../assets/Afterimg8.jpg';
import after9  from '../../assets/Afterimg9.jpg';
import after10 from '../../assets/Afterimg10.jpg';
import after11 from '../../assets/Afterimg11.jpg';

/* ── Fade on scroll ── */
const useFadeUp = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('pf-visible'); },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};
const Fade = ({ children, className = '' }) => {
  const ref = useFadeUp();
  return <div ref={ref} className={`pf-fade ${className}`}>{children}</div>;
};

/* ══════════════════════════════════════
   DRAGGABLE BEFORE/AFTER SLIDER
══════════════════════════════════════ */
const BeforeAfterSlider = ({ before, after, title }) => {
  const [pos, setPos]       = useState(50);
  const [dragging, setDrag] = useState(false);
  const wrapRef             = useRef(null);

  const getPos = useCallback((clientX) => {
    const rect = wrapRef.current.getBoundingClientRect();
    const x    = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return (x / rect.width) * 100;
  }, []);

  /* Mouse */
  const onMouseDown = (e) => { e.preventDefault(); setDrag(true); };
  useEffect(() => {
    if (!dragging) return;
    const move = (e) => setPos(getPos(e.clientX));
    const up   = ()  => setDrag(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup',   up);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up); };
  }, [dragging, getPos]);

  /* Touch */
  const onTouchStart = () => setDrag(true);
  useEffect(() => {
    if (!dragging) return;
    const move = (e) => setPos(getPos(e.touches[0].clientX));
    const up   = ()  => setDrag(false);
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('touchend',  up);
    return () => { window.removeEventListener('touchmove', move); window.removeEventListener('touchend', up); };
  }, [dragging, getPos]);

  return (
    <div className="pf-slider-wrap" ref={wrapRef}>
      {/* After (full) */}
      <img src={after}  alt={`${title} after`}  className="pf-slider-img pf-slider-after"  loading="lazy" />
      {/* Before (clipped) */}
      <div className="pf-slider-before-clip" style={{ width: `${pos}%` }}>
        <img src={before} alt={`${title} before`} className="pf-slider-img pf-slider-before" loading="lazy" />
      </div>
      {/* Divider line */}
      <div className="pf-slider-line" style={{ left: `${pos}%` }} />
      {/* Handle */}
      <div
        className={`pf-slider-handle ${dragging ? 'dragging' : ''}`}
        style={{ left: `${pos}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        <div className="pf-slider-handle-inner">
          <span>‹</span>
          <span>›</span>
        </div>
      </div>
      {/* Labels */}
      <span className="pf-slider-label pf-label-before">Before</span>
      <span className="pf-slider-label pf-label-after">After</span>
    </div>
  );
};

/* ── Data ── */
const STATS = [
  { icon: '🏆', value: '14+', label: 'Years of Experience'        },
  { icon: '🏗️', value: '25+', label: 'Premium Projects Completed' },
  { icon: '👷', value: '6+',  label: 'Ongoing Projects'           },
];

const PROJECTS = [
  { id: 1,  title: 'Project 01', location: 'Chandigarh, India',     year: '2024', desc: 'Complete transformation from raw structure to a premium finished space with quality workmanship.', tags: ['# Quality Finish', '# Structural Work', '# Premium Build'], before: before1,  after: after1  },
  { id: 2,  title: 'Project 02', location: 'Mohali, India',         year: '2024', desc: 'Turned an unfinished construction into a modern luxury space with elegant interiors.',             tags: ['# Modern Design', '# Interior Work', '# Luxury Space'],  before: before2,  after: after2  },
  { id: 3,  title: 'Project 03', location: 'New Chandigarh, India', year: '2023', desc: 'Full construction execution delivering a stunning residential space from foundation to finish.',    tags: ['# Foundation', '# Finishing', '# Residential'],            before: before3,  after: after3  },
  { id: 4,  title: 'Project 04', location: 'Chandigarh, India',     year: '2023', desc: 'Transformed a bare structure into a beautifully designed and well-built living space.',            tags: ['# Villa Build', '# Smart Space', '# Quality'],             before: before4,  after: after4  },
  { id: 5,  title: 'Project 05', location: 'Mohali, India',         year: '2023', desc: 'Professional construction execution with attention to detail and premium finishing standards.',     tags: ['# Attention to Detail', '# Premium', '# Execution'],       before: before5,  after: after5  },
  { id: 6,  title: 'Project 06', location: 'New Chandigarh, India', year: '2022', desc: 'Complete build from ground up — delivering quality construction and modern design.',               tags: ['# Ground Up', '# Modern', '# Construction'],               before: before6,  after: after6  },
  { id: 7,  title: 'Project 07', location: 'Chandigarh, India',     year: '2022', desc: 'Converted an unfinished structure into a refined and functional residential property.',            tags: ['# Residential', '# Refined', '# Functional'],              before: before7,  after: after7  },
  { id: 8,  title: 'Project 08', location: 'Mohali, India',         year: '2022', desc: 'High quality construction and finishing work delivering a premium living experience.',             tags: ['# High Quality', '# Finishing', '# Living'],               before: before8,  after: after8  },
  { id: 9,  title: 'Project 09', location: 'New Chandigarh, India', year: '2021', desc: 'Structural execution and interior finishing bringing a vision to life with precision.',            tags: ['# Precision', '# Interior', '# Vision'],                   before: before9,  after: after9  },
  { id: 10, title: 'Project 10', location: 'Chandigarh, India',     year: '2021', desc: 'End-to-end construction management delivering a beautifully completed residential space.',         tags: ['# End-to-End', '# Management', '# Residential'],           before: before10, after: after10 },
  { id: 11, title: 'Project 11', location: 'Mohali, India',         year: '2021', desc: 'From raw concrete to a finished luxury home — quality construction at every stage.',              tags: ['# Luxury Home', '# Concrete', '# Craftsmanship'],          before: before11, after: after11 },
];

const PROCESS = [
  { icon: '📋', name: 'Planning',    desc: 'Understanding your vision and requirements' },
  { icon: '🏗️', name: 'Foundation', desc: 'Strong base for a lasting structure'         },
  { icon: '🧱', name: 'Structure',  desc: 'Building with quality and precision'          },
  { icon: '🪟', name: 'Interior',   desc: 'Designing spaces that inspire'                },
  { icon: '✅', name: 'Completed',  desc: 'Delivering excellence every time'             },
];

export default function Portfolio() {
  const navigate = useNavigate();
  const goContact = () => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <div className="pf-page">
      <Helmet>
        <title>Portfolio | BOX Buildtech – Before & After Construction Transformations</title>
        <meta name="description" content="Explore BOX Buildtech's portfolio of 25+ premium construction projects across Chandigarh, Mohali & New Chandigarh. See stunning before & after transformations of luxury villas and residences." />
        <meta name="keywords" content="construction portfolio Chandigarh, before after villa transformation, luxury villa projects Mohali, premium residential construction, BOX Buildtech projects" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.boxbuildtech.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.boxbuildtech.com/portfolio" />
        <meta property="og:title" content="Portfolio | BOX Buildtech – Before & After Construction Transformations" />
        <meta property="og:description" content="25+ premium projects completed across Chandigarh & Mohali. Drag the slider to see our before & after construction transformations." />
        <meta property="og:image" content="https://www.boxbuildtech.com/og-image.jpg" />
        <meta property="og:site_name" content="Box BuildTech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.boxbuildtech.com/portfolio" />
        <meta name="twitter:title" content="Portfolio | BOX Buildtech – Before & After Construction Transformations" />
        <meta name="twitter:description" content="25+ premium projects completed. Drag the slider to see our before & after construction transformations." />
        <meta name="twitter:image" content="https://www.boxbuildtech.com/og-image.jpg" />
      </Helmet>

      {/* ══ HERO ══ */}
      {/* <section className="pf-hero">
        <div className="pf-hero-bg" style={{ backgroundImage: `url(${Portfolioimg})` }} />
        <div className="pf-hero-overlay" />
        <div className="pf-hero-inner">
          <Fade>
            <div className="pf-eyebrow">
              <span className="pf-eyebrow-line" />
              <span className="pf-eyebrow-text">Our Portfolio</span>
              <span className="pf-eyebrow-line" />
            </div>
            <h1 className="pf-hero-headline">
              <span>Building Visions</span>
              <span>Into</span>
              <span className="pf-gold">Landmarks</span>
            </h1>
            <p className="pf-hero-sub">
              Explore our completed projects that reflect our commitment
              to quality, innovation and excellence.
            </p>
          </Fade>
        </div>
        <div className="pf-stats-bar">
          {STATS.map((s) => (
            <div key={s.label} className="pf-stat">
              <span className="pf-stat-icon">{s.icon}</span>
              <span className="pf-stat-value">{s.value}</span>
              <span className="pf-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section> */}

      {/* ══ TRANSFORMATION SECTION ══ */}
      <section className="pf-transform-section">
        <div className="pf-container">

          <Fade className="pf-section-header">
            <span className="pf-section-tag">Featured Projects</span>
            <h2 className="pf-section-title">
              The BOX <span>Transformation</span>
            </h2>
            <p className="pf-section-sub">Every project is a transformation. Drag the slider to see the difference.</p>
            <div className="pf-gold-bar" />
          </Fade>

          {/* Project cards — alternating layout */}
          <div className="pf-transform-list">
            {PROJECTS.map((p, i) => (
              <Fade key={p.id} className={`pf-transform-card ${i % 2 === 1 ? 'pf-reverse' : ''}`}>

                {/* Left — Slider */}
                <div className="pf-transform-slider-col">
                  <BeforeAfterSlider before={p.before} after={p.after} title={p.title} />
                </div>

                {/* Right — Info */}
                <div className="pf-transform-info-col">
                  <h3 className="pf-transform-title">{p.title}</h3>
                  <div className="pf-transform-meta">
                    <span className="pf-transform-meta-item">
                      <MapPin size={13} /> {p.location}
                    </span>
                  </div>
                  <div className="pf-transform-divider" />
                  <p className="pf-transform-desc">{p.desc}</p>
                  <div className="pf-transform-tags">
                    {p.tags.map((tag) => (
                      <span key={tag} className="pf-transform-tag">{tag}</span>
                    ))}
                  </div>
                  {/* <button className="pf-transform-btn" onClick={goContact}>
                    Discuss This Project <ArrowRight size={14} />
                  </button> */}
                </div>

              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="pf-process-section">
        <div className="pf-container">
          <Fade className="pf-section-header">
            <span className="pf-section-tag">Our Process</span>
            <h2 className="pf-section-title">From Concept to <span>Creation</span></h2>
            <div className="pf-gold-bar" />
          </Fade>
          <Fade>
            <div className="pf-process-steps">
              {PROCESS.map((step, i) => (
                <div key={step.name} className="pf-process-step">
                  <div className="pf-process-icon">{step.icon}</div>
                  {i < PROCESS.length - 1 && <div className="pf-process-connector" />}
                  <h4 className="pf-process-name">{step.name}</h4>
                  <p className="pf-process-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

    </div>
  );
}
