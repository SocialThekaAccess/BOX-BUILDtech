import { Helmet } from 'react-helmet-async';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Factory, Layers, Zap, CheckCircle, ArrowRight, Users, Shield, Clock, Star } from 'lucide-react';
import './DesignBuild.css';
import designImg1 from '../../assets/Designimg1.jpg';
import BOXimg4 from '../../assets/BOXimg4.jpg';
import BOXimg3 from '../../assets/BOXimg3_compressed.jpg';
import BOXimg5 from '../../assets/BOXimg5.jpg';
import BOXimg6 from '../../assets/BOXimg6.jpg';

/* ── Fade-up on scroll ── */
const useFadeUp = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('db-visible'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const Fade = ({ children, className = '' }) => {
  const ref = useFadeUp();
  return <div ref={ref} className={`db-fade ${className}`}>{children}</div>;
};

const STATS = [
  { value: '14+', label: 'Years of Experience'        },
  { value: '25+', label: 'Premium Projects Completed' },
  { value: '6+',  label: 'Ongoing Projects'           },
];

const PROCESS_STEPS = [
  { n: '01', title: 'Understanding the Project',    desc: 'We study architect drawings, client expectations, project goals, and construction requirements carefully before anything begins.' },
  { n: '02', title: 'Planning & Site Preparation',  desc: 'Project schedules, material planning, workforce coordination, and site preparation are handled before execution starts.' },
  { n: '03', title: 'Construction Execution',       desc: 'Our engineers, supervisors, and workers begin construction while maintaining quality and safety standards at every stage.' },
  { n: '04', title: 'Quality Inspection',           desc: 'Regular inspections during construction ensure structural strength, finishing quality, and proper workmanship throughout.' },
  { n: '05', title: 'Final Finishing & Handover',   desc: 'Final inspections and finishing checks are completed before handover — delivering homes that meet design and quality standards.' },
];

const FAQS = [
  { q: 'What are Design & Build services in villa construction?',              a: 'Design & Build services mean the design coordination and construction process are managed together in a more organized way. This helps improve communication, planning, and project execution.' },
  { q: 'Why do architects prefer working with BOX Build Tech?',                a: 'Architects prefer working with us because we focus on proper execution, smooth coordination, professional site management, and maintaining the quality of the original design.' },
  { q: 'Does BOX Build Tech provide support from planning to final handover?', a: 'Yes, our team supports the project from initial planning and site preparation to construction execution, finishing work, and final project handover.' },
  { q: 'Can you build villas according to client lifestyle requirements?',      a: 'Yes, every family has different expectations, so we help build villas based on lifestyle needs, space usage, design preferences, and future plans.' },
  { q: 'How do you manage coordination during construction projects?',         a: 'We maintain regular communication between architects, site teams, workers, vendors, and homeowners to keep the project running smoothly and avoid unnecessary delays.' },
  { q: 'Do you focus on practical living spaces along with luxury design?',    a: 'Yes, we believe villas should not only look premium but should also feel comfortable, functional, and easy to maintain for everyday living.' },
  { q: 'What type of finishing work do you handle in villa projects?',         a: 'We handle flooring work, wall finishes, ceiling detailing, staircase finishing, surface alignment, and other premium finishing elements required in luxury homes.' },
  { q: 'How does proper planning help during villa construction?',             a: 'Good planning helps reduce delays, improve workflow, manage resources properly, and ensure the overall construction process stays organized from start to finish.' },
];

export default function DesignBuild() {
  const navigate = useNavigate();
  const goContact = () => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <div className="db-page">
      <Helmet>
        <title>Design & Build Services | BOX Buildtech – Luxury Villa Construction</title>
        <meta name="description" content="BOX Buildtech offers complete Design & Build services for luxury villas. We partner with architects to handle construction from planning to final handover — Chandigarh, Mohali & New Chandigarh." />
        <meta property="og:title" content="Design & Build | BOX Buildtech" />
        <meta property="og:description" content="One team, total accountability. BOX Buildtech manages design coordination and construction execution for premium residential villas." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.boxbuildtech.com/services/design-build" />
      </Helmet>

      {/* ══ HERO ══ */}
      <section className="db-hero">
        <div className="db-hero-bg" style={{ backgroundImage: `url(${designImg1})` }} />
        <div className="db-hero-overlay" />

        <div className="db-hero-inner">
          <Fade className="db-hero-content">

            {/* Eyebrow */}
            <div className="db-hero-eyebrow">
              <span className="db-hero-eyebrow-line" />
              <span className="db-eyebrow">Design &amp; Build</span>
              <span className="db-hero-eyebrow-line" />
            </div>

            {/* Headline */}
            <h2 className="db-hero-headline">
              <span className="db-hl">Design &amp; Build</span>
              <span className="db-hl db-hl-gold">Services for</span>
              <span className="db-hl db-hl-gold">Luxury Villas</span>
            </h2>

            {/* Gold divider */}
            <div className="db-hero-divider">
              <span className="db-hero-div-line" />
              <span className="db-hero-div-diamond">◆</span>
              <span className="db-hero-div-line" />
            </div>

            {/* Sub + CTA */}
            <p className="db-hero-sub">
              At BOX Buildtech, we help architects bring villa projects to life
              with strong construction support and professional execution — from foundation to final finish.
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

      {/* ══ INTRO ══ */}
      <section className="db-section db-bg-dark">
        <div className="db-glow db-glow-right" />
        <div className="db-container">
          <div className="db-grid">
            <Fade className="db-img-wrap">
              <img src={BOXimg3} alt="Villa Construction" className="db-img" />
              <div className="db-img-badge"><Factory size={16} strokeWidth={1.5} /><span>Foundation to Finish</span></div>
              <div className="db-img-corner" />
            </Fade>
            <Fade className="db-content">
              <div className="db-icon-wrap"><Factory size={24} strokeWidth={1.5} /></div>
              <span className="db-tag">Our Approach</span>
              <h2 className="db-title">Design &amp; Build for Residential Villas</h2>
              <div className="db-gold-bar" />
              <p className="db-body">
                We mostly do construction work for homes and villas, and also help with the design part.
                Our main goal is to help architects by taking care of the construction work in a professional
                way and paying close attention to every detail.
              </p>
              <p className="db-body">
                Building a villa is not about putting up walls and a roof. It is about making a home that
                is comfortable, easy to use, modern, and will last for a long time. Every villa project
                needs good materials, skilled workers, and strong teamwork between the people who design
                it and the people who build it.
              </p>
              <ul className="db-points">
                {['Villa construction execution','Site supervision','Material coordination','Structural work','Workforce management','Quality inspections','Finishing execution','Project coordination'].map(pt => (
                  <li key={pt} className="db-point"><CheckCircle size={15} strokeWidth={2} className="db-point-icon" />{pt}</li>
                ))}
              </ul>
              <button className="db-cta-btn" onClick={goContact}>start your consulation journey <ArrowRight size={14} /></button>
            </Fade>
          </div>
        </div>
      </section>

      {/* ══ RELIABLE PARTNER ══ */}
      <section className="db-section db-bg-navy">
        <div className="db-glow db-glow-left" />
        <div className="db-container">
          <div className="db-grid db-reverse">
            <Fade className="db-img-wrap">
              <img src={BOXimg4} alt="Construction Partner" className="db-img" />
              <div className="db-img-badge"><Users size={16} strokeWidth={1.5} /><span>Reliable Partner</span></div>
              <div className="db-img-corner" />
            </Fade>
            <Fade className="db-content">
              <div className="db-icon-wrap"><Users size={24} strokeWidth={1.5} /></div>
              <span className="db-tag">For Architects</span>
              <h2 className="db-title">A Reliable Construction Partner for Architects</h2>
              <div className="db-gold-bar" />
              <p className="db-body">
                Architects take a lot of time to make layouts, plan spaces, and design homes that fit
                what the client wants. When construction starts, many issues can come up if the team
                building the project is not skilled or well-organised — coordination problems, delays,
                low-quality work, and bad site management can ruin the final result.
              </p>
              <p className="db-body">
                At BOX Buildtech, we know how crucial proper execution is for building villas. We focus
                on villa projects and make sure they are done right — working as a dependable construction
                partner for architects who want reliable support during construction.
              </p>
              <ul className="db-points">
                {['Professional execution support','Attention to detail','Better coordination during construction','Quality construction standards','Timely project completion'].map(pt => (
                  <li key={pt} className="db-point"><CheckCircle size={15} strokeWidth={2} className="db-point-icon" />{pt}</li>
                ))}
              </ul>
              <button className="db-cta-btn" onClick={goContact}>Work With Us <ArrowRight size={14} /></button>
            </Fade>
          </div>
        </div>
      </section>

      {/* ══ COMPLETE D&B SOLUTIONS ══ */}
      <section className="db-section db-bg-dark">
        <div className="db-glow db-glow-right" />
        <div className="db-container">
          <div className="db-grid">
            <Fade className="db-img-wrap">
              <img src={BOXimg5} alt="Design Build Solutions" className="db-img" />
              <div className="db-img-badge"><Layers size={16} strokeWidth={1.5} /><span>Complete Solutions</span></div>
              <div className="db-img-corner" />
            </Fade>
            <Fade className="db-content">
              <div className="db-icon-wrap"><Layers size={24} strokeWidth={1.5} /></div>
              <span className="db-tag">Design &amp; Build</span>
              <h2 className="db-title">Complete Design &amp; Build Solutions for Villas</h2>
              <div className="db-gold-bar" />
              <p className="db-body">
                For people who want to build a villa, we handle all the work under one roof. Instead of
                talking to many different contractors, the homeowner and architect work with one team —
                making communication easier, avoiding delays, and ensuring everything runs smoothly.
              </p>
              <ul className="db-points">
                {['Construction planning','Structural execution','Site management','Material planning','Civil work','Finishing work','Coordination with architects','Project supervision'].map(pt => (
                  <li key={pt} className="db-point"><CheckCircle size={15} strokeWidth={2} className="db-point-icon" />{pt}</li>
                ))}
              </ul>
              <button className="db-cta-btn" onClick={goContact}>start your consulation journey <ArrowRight size={14} /></button>
            </Fade>
          </div>
        </div>
      </section>

      {/* ══ MODERN + LUXURY ══ */}
      <section className="db-section db-bg-navy">
        <div className="db-glow db-glow-left" />
        <div className="db-container">
          <div className="db-grid db-reverse">
            <Fade className="db-img-wrap">
              <img src={BOXimg6} alt="Luxury Villa" className="db-img" />
              <div className="db-img-badge"><Star size={16} strokeWidth={1.5} /><span>Luxury Standard</span></div>
              <div className="db-img-corner" />
            </Fade>
            <Fade className="db-content">
              <div className="db-icon-wrap"><Star size={24} strokeWidth={1.5} /></div>
              <span className="db-tag">Modern &amp; Luxury</span>
              <h2 className="db-title">Modern &amp; Luxury Villa Construction</h2>
              <div className="db-gold-bar" />
              <p className="db-body">
                Modern villas need smart space planning, open layouts, and high-quality finishing.
                Luxury villas require a higher level of detailing — every corner of the home should
                reflect quality workmanship and careful planning.
              </p>
              <p className="db-body">
                We help build premium residential villas, high-end modern homes, designer villa projects,
                spacious luxury residences, multi-floor villas, and architect-designed homes.
              </p>
              <ul className="db-points">
                {['Open layouts & smart space utilization','Natural lighting & proper ventilation','Modern finishing & clean structural execution','Premium residential villas','High-end modern homes','Custom-designed homes'].map(pt => (
                  <li key={pt} className="db-point"><CheckCircle size={15} strokeWidth={2} className="db-point-icon" />{pt}</li>
                ))}
              </ul>
              <button className="db-cta-btn" onClick={goContact}>Start Building <ArrowRight size={14} /></button>
            </Fade>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="db-process-section">
        <div className="db-glow db-glow-right" />
        <div className="db-container">
          <Fade>
            <span className="db-tag">How We Work</span>
            <h2 className="db-process-title">Our Residential <span>Construction Process</span></h2>
            <div className="db-gold-bar" style={{ margin: '16px 0 48px' }} />
          </Fade>
          <div className="db-process-grid">
            {PROCESS_STEPS.map((step) => (
              <Fade key={step.n} className="db-process-card">
                <span className="db-process-num">{step.n}</span>
                <h3 className="db-process-name">{step.title}</h3>
                <p className="db-process-desc">{step.desc}</p>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="db-faq-section">
        <div className="db-container">
          <Fade>
            <span className="db-tag">FAQs</span>
            <h2 className="db-process-title">Frequently Asked <span>Questions</span></h2>
            <div className="db-gold-bar" style={{ margin: '16px 0 48px' }} />
          </Fade>
          <div className="db-faq-grid">
            {FAQS.map((faq) => (
              <Fade key={faq.q} className="db-faq-card">
                <h4 className="db-faq-q">{faq.q}</h4>
                <p className="db-faq-a">{faq.a}</p>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM BANNER ══ */}
      <section className="db-banner">
        <div className="db-banner-grid" />
        <div className="db-container db-banner-inner">
          <div>
            <h2 className="db-banner-title">Let's Build Better Residential Spaces Together</h2>
            <p className="db-banner-sub">Talk to our team — free consultation, no obligations.</p>
          </div>
          <button className="db-banner-btn" onClick={goContact}>
            Contact Us Today <ArrowRight size={16} />
          </button>
        </div>
      </section>

    </div>
  );
}
