import { Helmet } from 'react-helmet-async';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { HardHat, Home, Star, Layers, CheckCircle, ArrowRight } from 'lucide-react';
import './LuxuryResidential.css';
import residentialImg1 from '../../assets/Residentialimg1.jpg';
import BOXimg7 from '../../assets/BOXimg7.jpg';
import BOXimg8 from '../../assets/BOXimg8.jpg';
import BOXimg9 from '../../assets/BOXimg9.jpg';
import BOXimg10 from '../../assets/BOXimg10.jpg';

const useFadeUp = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('lr-visible'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const Fade = ({ children, className = '' }) => {
  const ref = useFadeUp();
  return <div ref={ref} className={`lr-fade ${className}`}>{children}</div>;
};

const STATS = [
  { value: '14+', label: 'Years of Experience'        },
  { value: '25+', label: 'Premium Projects Completed' },
  { value: '6+',  label: 'Ongoing Projects'           },
];

const PROCESS_STEPS = [
  { n: '01', title: 'Understanding the Project',   desc: 'We study the architect\'s drawings, client requirements, and project expectations carefully before starting construction — understanding the complete vision of the villa project.' },
  { n: '02', title: 'Planning & Site Preparation', desc: 'Our team handles material planning, workforce coordination, site preparation, and scheduling before starting work. Good preparation helps avoid delays and execution problems later.' },
  { n: '03', title: 'Construction Execution',      desc: 'Our engineers and site teams begin construction while maintaining proper supervision, workflow management, and quality standards. Every stage is monitored carefully.' },
  { n: '04', title: 'Quality Checks & Finishing',  desc: 'We conduct regular inspections during construction and finishing work to ensure proper execution and detailing quality. Luxury homes need extra attention during finishing stages.' },
  { n: '05', title: 'Final Handover',              desc: 'When the villa is finished, we do a thorough check before handing over the project. Our aim is to give homeowners homes that match what the architect designed and what they want.' },
];

const FAQS = [
  { q: 'What makes villa construction different from regular home construction?', a: 'Villa construction usually involves larger layouts, premium finishes, custom detailing, and better structural planning. It requires more attention to design execution, space planning, and finishing quality compared to standard residential projects.' },
  { q: 'Does BOX Build Tech only work on luxury villa projects?',                 a: 'We mainly focus on luxury villas, modern homes, and premium residential projects where quality execution and detailed construction work are important.' },
  { q: 'Can BOX Build Tech handle complete on-site construction management?',     a: 'Yes, our team manages day-to-day site activities, labour coordination, supervision, material handling, and overall project execution to keep the construction process organized.' },
  { q: 'How do you ensure the villa matches the architect\'s design?',            a: 'We work closely with architects throughout the project and follow drawings carefully during execution. Regular coordination and inspections help maintain the original design vision.' },
  { q: 'Do you help with modern villa construction styles?',                      a: 'Yes, we regularly work on modern villa projects that include open layouts, natural lighting, functional spaces, and contemporary finishing concepts.' },
  { q: 'How important is finishing work in luxury villas?',                       a: 'Finishing plays a major role in the final appearance of a luxury villa. Proper flooring, wall finishes, ceiling work, staircase detailing, and overall craftsmanship can completely change how the home feels.' },
  { q: 'Can BOX Build Tech manage large multi-floor villa projects?',             a: 'Yes, we have experience handling spacious and multi-level residential villa projects with proper planning, coordination, and execution support.' },
  { q: 'What is the main goal of BOX Build Tech during villa construction?',      a: 'Our main goal is to help architects and homeowners complete villa projects smoothly while maintaining strong construction quality, proper execution, and long-term durability.' },
];

export default function LuxuryResidential() {
  const navigate = useNavigate();
  const goContact = () => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <div className="lr-page">
      <Helmet>
        <title>Luxury Residential Projects Chandigarh &amp; Premium Residential Construction | Box Build Tech</title>
        <meta name="description" content="Box Build Tech creates luxury residential projects in Chandigarh and premium residential construction across Mohali & Punjab. Expert builders for high-end homes and residences." />
        <meta name="keywords" content="luxury residential projects Chandigarh, premium residential construction Mohali, luxury home builders Punjab, high end residential construction, Box Build Tech" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.boxbuildtech.com/services/luxury-residential" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.boxbuildtech.com/services/luxury-residential" />
        <meta property="og:title" content="Luxury Residential Projects Chandigarh & Premium Residential Construction | Box Build Tech" />
        <meta property="og:description" content="Expert luxury residential builders with 14+ years of experience. Premium residential construction across Chandigarh, Mohali & Punjab." />
        <meta property="og:image" content="https://www.boxbuildtech.com/og-image.jpg" />
        <meta property="og:site_name" content="Box Build Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.boxbuildtech.com/services/luxury-residential" />
        <meta name="twitter:title" content="Luxury Residential Projects Chandigarh & Premium Residential Construction | Box Build Tech" />
        <meta name="twitter:description" content="Expert luxury residential builders with 14+ years of experience. Premium residential construction across Chandigarh, Mohali & Punjab." />
        <meta name="twitter:image" content="https://www.boxbuildtech.com/og-image.jpg" />
      </Helmet>

      {/* ══ HERO ══ */}
      <section className="lr-hero">
        <div className="lr-hero-bg" style={{ backgroundImage: `url(${residentialImg1})` }} />
        <div className="lr-hero-overlay" />
        <div className="lr-hero-inner">
          <Fade className="lr-hero-content">
            <span className="lr-eyebrow">High End Residential</span>
            <h2 className="lr-hero-headline">
              <span className="lr-hl">Luxury Villa</span>
              <span className="lr-hl lr-hl-gold">Construction Services</span>
            </h2>
            <p className="lr-hero-sub">
              At BOX Buildtech, we are experts in building villas — working closely with architects
              to make sure every villa is built exactly like it was designed, with care and precision.
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

      {/* ══ INTRO ══ */}
      <section className="lr-section lr-bg-dark">
        <div className="lr-glow lr-glow-right" />
        <div className="lr-container">
          <div className="lr-grid">
            <Fade className="lr-img-wrap">
              <img src={BOXimg7} alt="Luxury Villa" className="lr-img" />
              <div className="lr-img-badge"><HardHat size={16} strokeWidth={1.5} /><span>Expert Villa Builders</span></div>
              <div className="lr-img-corner" />
            </Fade>
            <Fade className="lr-content">
              <div className="lr-icon-wrap"><HardHat size={24} strokeWidth={1.5} /></div>
              <span className="lr-tag">High End Residential</span>
              <h2 className="lr-title">Building Villas the Right Way</h2>
              <div className="lr-gold-bar" />
              <p className="lr-body">
                Building a villa is not the same as building a house. It needs a lot of planning,
                it needs to look good, it needs to be built strong, and it needs to have details
                that make it feel special.
              </p>
              <p className="lr-body">
                We mainly work with architects who design homes and villas but need help finding a
                good construction team. We help architects by working with them and making sure the
                villa is built like it was designed. Our team handles everything so architects can
                focus on designing.
              </p>
              <ul className="lr-points">
                {['Villa construction work','Site supervision','Labour coordination','Structural execution','Material management','Finishing work','Quality inspections','Project coordination'].map(pt => (
                  <li key={pt} className="lr-point"><CheckCircle size={15} strokeWidth={2} className="lr-point-icon" />{pt}</li>
                ))}
              </ul>
              <button className="lr-cta-btn" onClick={goContact}>start your consulation journey <ArrowRight size={14} /></button>
            </Fade>
          </div>
        </div>
      </section>

      {/* ══ ATTENTION TO DETAIL ══ */}
      <section className="lr-section lr-bg-navy">
        <div className="lr-glow lr-glow-left" />
        <div className="lr-container">
          <div className="lr-grid lr-reverse">
            <Fade className="lr-img-wrap">
              <img src={BOXimg8} alt="Villa Detail" className="lr-img" />
              <div className="lr-img-badge"><Star size={16} strokeWidth={1.5} /><span>Attention to Detail</span></div>
              <div className="lr-img-corner" />
            </Fade>
            <Fade className="lr-content">
              <div className="lr-icon-wrap"><Star size={24} strokeWidth={1.5} /></div>
              <span className="lr-tag">Premium Quality</span>
              <h2 className="lr-title">Villas Built with Attention to Detail</h2>
              <div className="lr-gold-bar" />
              <p className="lr-body">
                Luxury villas require careful workmanship because every detail matters. The finishing
                quality, wall alignment, flooring work, ceiling details, staircase execution, and even
                the smallest finishing elements can change the overall feel of the home.
              </p>
              <p className="lr-body">
                We believe premium homes should not only look beautiful but should also feel comfortable
                and strong for many years.
              </p>
              <ul className="lr-points">
                {['Structural quality','Clean finishing','Material handling','Proper detailing','Space functionality','Long-term durability'].map(pt => (
                  <li key={pt} className="lr-point"><CheckCircle size={15} strokeWidth={2} className="lr-point-icon" />{pt}</li>
                ))}
              </ul>
              <button className="lr-cta-btn" onClick={goContact}>Work With Us <ArrowRight size={14} /></button>
            </Fade>
          </div>
        </div>
      </section>

      {/* ══ MODERN + CUSTOM ══ */}
      <section className="lr-section lr-bg-dark">
        <div className="lr-glow lr-glow-right" />
        <div className="lr-container">
          <div className="lr-grid">
            <Fade className="lr-img-wrap">
              <img src={BOXimg9} alt="Modern Villa" className="lr-img" />
              <div className="lr-img-badge"><Home size={16} strokeWidth={1.5} /><span>Modern & Custom</span></div>
              <div className="lr-img-corner" />
            </Fade>
            <Fade className="lr-content">
              <div className="lr-icon-wrap"><Home size={24} strokeWidth={1.5} /></div>
              <span className="lr-tag">Modern &amp; Custom</span>
              <h2 className="lr-title">Modern &amp; Custom Villa Construction</h2>
              <div className="lr-gold-bar" />
              <p className="lr-body">
                Modern villas are about the way you live and how comfortable you are. People want
                lots of room to move around, plenty of light, and a floor plan that makes sense.
                We help architects execute modern villa designs with proper planning and organised
                construction management.
              </p>
              <p className="lr-body">
                Every family has different expectations for their dream home. That is why we never
                follow the same construction style for every project — we build custom villas based
                on client lifestyle, plot size, space requirements, and family needs.
              </p>
              <ul className="lr-points">
                {['Open layouts & better ventilation','Natural light flow','Functional spaces','Client lifestyle planning','Plot size & space requirements','Future expansion plans'].map(pt => (
                  <li key={pt} className="lr-point"><CheckCircle size={15} strokeWidth={2} className="lr-point-icon" />{pt}</li>
                ))}
              </ul>
              <button className="lr-cta-btn" onClick={goContact}>Start Building <ArrowRight size={14} /></button>
            </Fade>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE ══ */}
      <section className="lr-section lr-bg-navy">
        <div className="lr-glow lr-glow-left" />
        <div className="lr-container">
          <div className="lr-grid lr-reverse">
            <Fade className="lr-img-wrap">
              <img src={BOXimg10} alt="Why Choose BOX" className="lr-img" />
              <div className="lr-img-badge"><Layers size={16} strokeWidth={1.5} /><span>Why Choose Us</span></div>
              <div className="lr-img-corner" />
            </Fade>
            <Fade className="lr-content">
              <div className="lr-icon-wrap"><Layers size={24} strokeWidth={1.5} /></div>
              <span className="lr-tag">Why BOX Buildtech</span>
              <h2 className="lr-title">Why Architects Choose BOX Buildtech</h2>
              <div className="lr-gold-bar" />
              <p className="lr-body">
                Architects need a construction team that can properly execute designs without creating
                unnecessary problems on-site. Our team focuses on organised workflow, proper coordination,
                and responsible project execution.
              </p>
              <p className="lr-body">
                We keep architects and homeowners informed throughout the project. Regular updates and
                smooth communication help reduce confusion and improve project flow. We follow proper
                scheduling and planning systems to maintain project timelines while ensuring quality work.
              </p>
              <ul className="lr-points">
                {['Smooth execution support','Better site coordination','Strong focus on quality','Transparent communication','Timely project completion','Long-term professional relationships'].map(pt => (
                  <li key={pt} className="lr-point"><CheckCircle size={15} strokeWidth={2} className="lr-point-icon" />{pt}</li>
                ))}
              </ul>
              <button className="lr-cta-btn" onClick={goContact}>start your consulation journey<ArrowRight size={14} /></button>
            </Fade>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="lr-process-section">
        <div className="lr-glow lr-glow-right" />
        <div className="lr-container">
          <Fade>
            <span className="lr-tag">How We Work</span>
            <h2 className="lr-process-title">Our Villa Construction <span>Process</span></h2>
            <div className="lr-gold-bar" style={{ margin: '16px 0 48px' }} />
          </Fade>
          <div className="lr-process-grid">
            {PROCESS_STEPS.map((step) => (
              <Fade key={step.n} className="lr-process-card">
                <span className="lr-process-num">{step.n}</span>
                <h3 className="lr-process-name">{step.title}</h3>
                <p className="lr-process-desc">{step.desc}</p>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="lr-faq-section">
        <div className="lr-container">
          <Fade>
            <span className="lr-tag">FAQs</span>
            <h2 className="lr-process-title">Frequently Asked <span>Questions</span></h2>
            <div className="lr-gold-bar" style={{ margin: '16px 0 48px' }} />
          </Fade>
          <div className="lr-faq-grid">
            {FAQS.map((faq) => (
              <Fade key={faq.q} className="lr-faq-card">
                <h4 className="lr-faq-q">{faq.q}</h4>
                <p className="lr-faq-a">{faq.a}</p>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM BANNER ══ */}
      <section className="lr-banner">
        <div className="lr-banner-grid" />
        <div className="lr-container lr-banner-inner">
          <div>
            <h2 className="lr-banner-title">Let's Build Better Villas Together</h2>
            <p className="lr-banner-sub">Talk to our team — free consultation, no obligations.</p>
          </div>
          <button className="lr-banner-btn" onClick={goContact}>
            Contact Us Today <ArrowRight size={16} />
          </button>
        </div>
      </section>

    </div>
  );
}
