import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  CheckCircle,
  Home,
  MapPin,
  Shield,
  Star,
  Trees,
  TrendingUp,
  Users,
  Waves,
} from 'lucide-react';
import './PremiumPlottedResidences.css';
import BOXimg10 from '../../assets/BOXimg10.jpg';
import BOXimg4 from '../../assets/BOXimg4.jpg';
import BOXimg5 from '../../assets/BOXimg5.jpg';
import BOXimg6 from '../../assets/BOXimg6.jpg';
import BOXimg7 from '../../assets/BOXimg7.jpg';
import BOXimg8 from '../../assets/BOXimg8.jpg';
import BOXimg9 from '../../assets/BOXimg9.jpg';

const useFade = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('pp-vis');
      },
      { threshold: 0.08 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
};

const F = ({ children, className = '', delay = 0 }) => {
  const ref = useFade();

  return (
    <div ref={ref} className={`pp-f ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const FEATURES = [
  {
    Icon: Trees,
    n: '01',
    title: 'Open-Space Living',
    desc: 'Luxury farm houses replace crowded surroundings with greenery, breathing room and a calmer setting that changes how everyday life feels.',
  },
  {
    Icon: Waves,
    n: '02',
    title: 'Effortless Luxury',
    desc: 'The best luxury feels easy to live in. Every detail is planned to feel elegant, warm and comfortable without becoming overdesigned.',
  },
  {
    Icon: Home,
    n: '03',
    title: 'More Usable Space',
    desc: 'From large living areas to outdoor seating, gardens and walking paths, these properties give families far more room to shape daily life their way.',
  },
  {
    Icon: Users,
    n: '04',
    title: 'Family-Centered Layouts',
    desc: 'Indoor and outdoor spaces work together to support quiet weekends, guest stays, celebrations and everyday time with family.',
  },
  {
    Icon: Shield,
    n: '05',
    title: 'Privacy & Freedom',
    desc: 'Bigger plots create real personal space, giving homeowners the freedom to relax, entertain and enjoy their property without feeling boxed in.',
  },
  {
    Icon: TrendingUp,
    n: '06',
    title: 'Long-Term Worth',
    desc: 'Large, private luxury properties in strong locations stay desirable over time, offering both lifestyle value now and investment value later.',
  },
];

const GALLERY = [BOXimg5, BOXimg7, BOXimg9];

const FAQS = [
  {
    q: 'Why are large luxury farm houses becoming more popular?',
    a: 'More families now value space, privacy and a calmer lifestyle. Farm house living offers room to relax, entertain, connect with nature and enjoy everyday life more comfortably.',
  },
  {
    q: 'Are farm houses only for weekend use?',
    a: 'Not anymore. Many homeowners now prefer farm house living as a full-time lifestyle because it offers peace, flexibility and a much more open home environment.',
  },
  {
    q: 'What makes a luxury farm house feel different from a regular home?',
    a: 'The difference is immediate. You feel more privacy, fresher surroundings, bigger indoor-outdoor flow and a stronger sense of freedom than most traditional residential neighborhoods can offer.',
  },
  {
    q: 'How do these homes support family life?',
    a: 'They create room for family dinners, gatherings, celebrations, outdoor play, guest stays and quiet personal time, all within one property that never feels cramped.',
  },
  {
    q: 'Can the spaces be adapted to different lifestyles?',
    a: 'Yes. Families can shape the property around their needs, whether that means recreation areas, workspaces, entertainment zones, gardens or private retreats.',
  },
  {
    q: 'Are luxury farm houses a good long-term investment?',
    a: 'Yes. Spacious, private properties in desirable locations become harder to find as cities grow, which helps them retain appeal and long-term value over time.',
  },
];

export default function LargeLuxuryFarmHouses() {
  const navigate = useNavigate();

  const go = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pp-page">
      <Helmet>
        <title>Large Luxury Farm Houses in Chandigarh | BOX Buildtech</title>
        <meta
          name="description"
          content="Explore large luxury farm houses by BOX Buildtech in Chandigarh, Mohali and New Chandigarh. Experience open-space living, privacy, elegant comfort and long-term value."
        />
        <meta
          name="keywords"
          content="large luxury farm houses Chandigarh, luxury farm house Mohali, farm house living New Chandigarh, premium farm house builders, private luxury estates, BOX Buildtech"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.boxbuildtech.com/services/large-luxury-farm-houses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.boxbuildtech.com/services/large-luxury-farm-houses" />
        <meta property="og:title" content="Large Luxury Farm Houses in Chandigarh | BOX Buildtech" />
        <meta
          property="og:description"
          content="Large luxury farm houses for those who want more than just a home — more space, privacy, comfort and a different way of living."
        />
        <meta property="og:image" content="https://www.boxbuildtech.com/og-image.jpg" />
        <meta property="og:site_name" content="Box BuildTech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.boxbuildtech.com/services/large-luxury-farm-houses" />
        <meta name="twitter:title" content="Large Luxury Farm Houses in Chandigarh | BOX Buildtech" />
        <meta
          name="twitter:description"
          content="Discover spacious luxury farm houses with privacy, family comfort, open surroundings and lasting value."
        />
        <meta name="twitter:image" content="https://www.boxbuildtech.com/og-image.jpg" />
      </Helmet>

      <section className="pp-hero">
        <div className="pp-hero-bg" style={{ backgroundImage: `url(${BOXimg8})` }} />
        <div className="pp-hero-overlay" />

        <div className="pp-hero-inner">
          <F className="pp-hero-content">
            <span className="pp-eyebrow-pill">Large Luxury Farm Houses</span>

            <h2 className="pp-hero-h1">
              More Space
              More Privacy
              More Life
            </h2>

            <div className="pp-hero-divider">
              <span className="pp-hero-divider-line" />
              <span className="pp-hero-divider-dot" />
              <span
                className="pp-hero-divider-line"
                style={{ background: 'linear-gradient(90deg, transparent, #E9A102)' }}
              />
            </div>

            <p className="pp-hero-sub">
              Large luxury farm houses for people who want more than just a home:
              more calm, more room, more freedom and a different way of living.
            </p>

            <div className="pp-hero-actions">
              <button className="pp-btn-primary" onClick={go}>
                Explore Farm Houses <ArrowRight size={16} />
              </button>
              <button className="pp-btn-ghost" onClick={go}>
                Talk to Us
              </button>
            </div>
          </F>
        </div>

        <div className="pp-stats-strip">
          {[
            { v: '14+', l: 'Years Experience' },
            { v: '25+', l: 'Projects Completed' },
            { v: '6+', l: 'Ongoing Projects' },
            { v: '100%', l: 'Client Satisfaction' },
          ].map((s) => (
            <div key={s.l} className="pp-stat-item">
              <span className="pp-stat-v">{s.v}</span>
              <span className="pp-stat-l">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pp-split pp-dark">
        <div className="pp-split-img">
          <img src={BOXimg4} alt="Large luxury farm house exterior" />
          <div className="pp-split-badge">
            <Trees size={14} />
            <span>A Different Way of Living</span>
          </div>
        </div>
        <div className="pp-split-content">
          <F>
            <span className="pp-tag">What We Offer</span>
            <h2 className="pp-h2">
              Large Luxury Farm Houses
              <br />
              for Better Living
            </h2>
            <div className="pp-bar" />
            <p className="pp-body">
              Some homes simply give you shelter. Others change how your life
              feels every day. Luxury farm houses are designed for people who
              want something calmer, more spacious and more personal than a
              typical city home.
            </p>
            <p className="pp-body">
              At BOX Buildtech, we create farm houses that feel peaceful without
              feeling disconnected, and elegant without trying too hard. The goal
              is simple: a property that feels open, quiet, warm and easy to live in.
            </p>
            <ul className="pp-list">
              {[
                'Open spaces instead of crowded surroundings',
                'Calm settings with stronger privacy',
                'Elegant homes that still feel warm',
                'Natural indoor-outdoor flow',
                'More room for lifestyle flexibility',
                'Comfort designed for everyday living',
              ].map((point) => (
                <li key={point}>
                  <CheckCircle size={14} className="pp-check" />
                  {point}
                </li>
              ))}
            </ul>
            <button className="pp-btn-outline" onClick={go}>
              Explore Farm Houses <ArrowRight size={14} />
            </button>
          </F>
        </div>
      </section>

      <section className="pp-features-section">
        <div className="pp-container">
          <F className="pp-section-head">
            <span className="pp-tag">What You Get</span>
            <h2 className="pp-h2">
              Everything You Need for <span className="pp-gold-text">Open Luxury Living</span>
            </h2>
            <div className="pp-bar" />
          </F>

          <div className="pp-features-grid">
            {FEATURES.map(({ Icon, n, title, desc }, i) => (
              <F key={title} delay={i * 80} className="pp-feat-card">
                <span className="pp-feat-num">{n}</span>
                <div className="pp-feat-icon">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="pp-feat-title">{title}</h3>
                <p className="pp-feat-desc">{desc}</p>
              </F>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-split pp-navy pp-flip">
        <div className="pp-split-img">
          <img src={BOXimg9} alt="Luxury farm house family lifestyle" />
          <div className="pp-split-badge">
            <Star size={14} />
            <span>Family Time</span>
          </div>
        </div>
        <div className="pp-split-content">
          <F>
            <span className="pp-tag">Why Families Choose It</span>
            <h2 className="pp-h2">
              A Better Place to Spend
              <br />
              Time Together
            </h2>
            <div className="pp-bar" />
            <p className="pp-body">
              When people imagine their ideal home, they think about moments:
              family dinners, weekend gatherings, celebrations with friends,
              children playing outdoors and quiet evenings that stretch longer
              because the environment feels right.
            </p>
            <p className="pp-body">
              Large luxury farm houses make those moments happen more naturally by
              giving everyone enough room to enjoy the property without feeling
              crowded, indoors or outdoors.
            </p>
            <ul className="pp-list">
              {[
                'More room for family dinners and gatherings',
                'Comfortable guest stays and celebrations',
                'Outdoor play and recreation spaces',
                'Quiet corners for rest and privacy',
                'Indoor and outdoor spaces working together',
                'A more relaxed rhythm of daily life',
              ].map((point) => (
                <li key={point}>
                  <CheckCircle size={14} className="pp-check" />
                  {point}
                </li>
              ))}
            </ul>
            <button className="pp-btn-outline" onClick={go}>
              Talk to Our Team <ArrowRight size={14} />
            </button>
          </F>
        </div>
      </section>

      <section className="pp-gallery-section">
        <F className="pp-section-head pp-container">
          <span className="pp-tag">Our Work</span>
          <h2 className="pp-h2">
            Built with <span className="pp-gold-text">Precision & Pride</span>
          </h2>
          <div className="pp-bar" />
        </F>

        <div className="pp-gallery-grid">
          {GALLERY.map((img, i) => (
            <div key={img} className="pp-gallery-item">
              <img src={img} alt={`Luxury farm house project ${i + 1}`} />
              <div className="pp-gallery-overlay" />
            </div>
          ))}
        </div>
      </section>

      <section className="pp-split pp-dark">
        <div className="pp-split-img">
          <img src={BOXimg6} alt="Luxury farm house investment value" />
          <div className="pp-split-badge">
            <MapPin size={14} />
            <span>Privacy & Value</span>
          </div>
        </div>
        <div className="pp-split-content">
          <F>
            <span className="pp-tag">Long-Term Value</span>
            <h2 className="pp-h2">
              A Property That Holds
              <br />
              Meaning and Value
            </h2>
            <div className="pp-bar" />
            <p className="pp-body">
              Buyers choose farm houses for lifestyle first, but long-term value
              matters too. Large, private properties in strong locations stay
              desirable because they become harder to find as cities continue to grow.
            </p>
            <p className="pp-body">
              At BOX Buildtech, we focus on homes that feel rewarding to live in
              today and remain valuable for the future, offering something that
              can be enjoyed now and passed forward with pride.
            </p>
            <ul className="pp-list">
              {[
                'Desirable large-plot properties',
                'Stronger privacy and exclusivity',
                'Premium locations with long-term appeal',
                'Lifestyle value plus financial value',
                'Flexible spaces for changing family needs',
                'A property worth holding for years',
              ].map((point) => (
                <li key={point}>
                  <CheckCircle size={14} className="pp-check" />
                  {point}
                </li>
              ))}
            </ul>
            <button className="pp-btn-outline" onClick={go}>
              Start Your Journey <ArrowRight size={14} />
            </button>
          </F>
        </div>
      </section>

      <section className="pp-faq-section">
        <div className="pp-container">
          <F className="pp-section-head">
            <span className="pp-tag">FAQs</span>
            <h2 className="pp-h2">
              Frequently Asked <span className="pp-gold-text">Questions</span>
            </h2>
            <div className="pp-bar" />
          </F>

          <div className="pp-faq-grid">
            {FAQS.map((faq, i) => (
              <F key={faq.q} delay={i * 60} className="pp-faq-card">
                <h4 className="pp-faq-q">{faq.q}</h4>
                <p className="pp-faq-a">{faq.a}</p>
              </F>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-cta-banner">
        <div className="pp-cta-bg" style={{ backgroundImage: `url(${BOXimg10})` }} />
        <div className="pp-cta-overlay" />

        <div className="pp-cta-inner">
          <F>
            <span className="pp-eyebrow-pill">A Better Lifestyle</span>
            <h2 className="pp-cta-h2">
              A Home Where Life Feels
              <br />
              Easier and More Open
            </h2>
            <p className="pp-cta-sub">
              If you are looking for a property with privacy, comfort, open
              surroundings and space to enjoy life your way, our large luxury
              farm houses are built for that experience.
            </p>
            <button className="pp-btn-primary pp-btn-lg" onClick={go}>
              Contact Us Today <ArrowRight size={18} />
            </button>
          </F>
        </div>
      </section>
    </div>
  );
}
