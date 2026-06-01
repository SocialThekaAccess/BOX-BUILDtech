import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Layers, Star, CheckCircle, ArrowRight, MapPin, TrendingUp, Shield, Zap } from 'lucide-react';
import './PremiumPlottedResidences.css';
import BOXimg1  from '../../assets/BOXimg1.jpg';
import BOXimg4  from '../../assets/BOXimg4.jpg';
import BOXimg5  from '../../assets/BOXimg5.jpg';
import BOXimg6  from '../../assets/BOXimg6.jpg';
import BOXimg7  from '../../assets/BOXimg7.jpg';
import BOXimg8  from '../../assets/BOXimg8.jpg';
import BOXimg9  from '../../assets/BOXimg9.jpg';
import BOXimg10 from '../../assets/BOXimg10.jpg';

/* ── Fade on scroll ── */
const useFade = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('pp-vis'); },
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
  { Icon: Home,       n: '01', title: 'Design Freedom',      desc: 'Build your home exactly the way you want — your layout, your style, your future. No fixed plans, no compromises.' },
  { Icon: Shield,     n: '02', title: 'Privacy & Peace',      desc: 'Spacious plots with well-planned surroundings. Open air, quiet streets, and a calm lifestyle that apartments cannot offer.' },
  { Icon: MapPin,     n: '03', title: 'Prime Locations',      desc: 'Close to schools, hospitals, offices and entertainment — connected to everything, yet peaceful enough to breathe.' },
  { Icon: TrendingUp, n: '04', title: 'Smart Investment',     desc: 'Plotted properties grow in value over time. Own land that appreciates — a decision your future self will thank you for.' },
  { Icon: Layers,     n: '05', title: 'Built Infrastructure', desc: 'Wide roads, proper drainage, landscaped areas and clean surroundings — every detail planned for comfortable living.' },
  { Icon: Zap,        n: '06', title: 'Modern Lifestyle',     desc: 'Open floor plans, natural light, smart storage and outdoor spaces — designed for the way modern families actually live.' },
];

const GALLERY = [BOXimg5, BOXimg6, BOXimg7];

const FAQS = [
  { q: 'What are premium plotted residences?',            a: 'Premium plotted residences give you ownership of a piece of land in a well-planned area. Unlike apartments, you can build your home exactly the way you want — your design, your timeline.' },
  { q: 'Why choose a plot over an apartment?',            a: 'Plots offer freedom, privacy and flexibility. You can design your home, expand it over time and enjoy open spaces — something apartments simply cannot offer.' },
  { q: 'Where does BOX Buildtech develop?',               a: 'We focus on prime locations in Chandigarh, Mohali and New Chandigarh — areas with excellent connectivity to schools, hospitals, offices and shopping centres.' },
  { q: 'Is buying a residential plot a good investment?', a: 'Yes. Premium plotted residences grow in value over time due to location, infrastructure and development potential. They offer both emotional security and financial confidence.' },
  { q: 'Can I customise my home on a BOX plot?',          a: 'Absolutely. You have complete freedom to design your home — choose the layout, room sizes, interiors and exteriors based on how you live and what you need.' },
  { q: 'What infrastructure is included?',                a: 'Our developments include wide internal roads, proper drainage systems, landscaped areas, utility connections and clean surroundings — everything planned for comfortable living.' },
];

export default function PremiumPlottedResidences() {
  const navigate = useNavigate();
  const go = () => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <div className="pp-page">

      {/* ══ HERO ══ */}
      <section className="pp-hero">
        <div className="pp-hero-bg" style={{ backgroundImage: `url(${BOXimg1})` }} />
        <div className="pp-hero-overlay" />

        <div className="pp-hero-inner">
          <F className="pp-hero-content">
            <span className="pp-eyebrow-pill">Premium Plotted Residences</span>

            <h2 className="pp-hero-h1">
              Your Land
              Your Vision
              Your Home
            </h2>

            <div className="pp-hero-divider">
              <span className="pp-hero-divider-line" />
              <span className="pp-hero-divider-dot" />
              <span className="pp-hero-divider-line" style={{ background: 'linear-gradient(90deg, transparent, #E9A102)' }} />
            </div>

            <p className="pp-hero-sub">
              Premium plotted residences by BOX Buildtech — where freedom, privacy
              and quality living come together for families who want more than just a house.
            </p>

            <div className="pp-hero-actions">
              <button className="pp-btn-primary" onClick={go}>
                Explore Plots <ArrowRight size={16} />
              </button>
              <button className="pp-btn-ghost" onClick={go}>
                Talk to Us
              </button>
            </div>
          </F>
        </div>

        {/* Stats strip */}
        <div className="pp-stats-strip">
          {[
            { v: '14+',  l: 'Years Experience' },
            { v: '25+',  l: 'Projects Completed' },
            { v: '6+',   l: 'Ongoing Projects' },
            { v: '100%', l: 'Client Satisfaction' },
          ].map(s => (
            <div key={s.l} className="pp-stat-item">
              <span className="pp-stat-v">{s.v}</span>
              <span className="pp-stat-l">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ INTRO SPLIT ══ */}
      <section className="pp-split pp-dark">
        <div className="pp-split-img">
          <img src={BOXimg4} alt="Premium Plot" />
          <div className="pp-split-badge"><Home size={14} /><span>Your Space, Your Rules</span></div>
        </div>
        <div className="pp-split-content">
          <F>
            <span className="pp-tag">What We Offer</span>
            <h2 className="pp-h2">Premium Plotted Residences<br />for Modern Families</h2>
            <div className="pp-bar" />
            <p className="pp-body">A home is more than walls and rooms. It is where memories are made and families grow. For many, owning a home is a dream — and now people want more than just a house. They want freedom, privacy, comfort and a lifestyle that feels like their own.</p>
            <p className="pp-body">At BOX Buildtech, we believe your home should reflect your personality and your vision for the future. With premium plotted residences, you get to make your home exactly how you like it.</p>
            <ul className="pp-list">
              {['Build your home your way', 'Open layouts & private spaces', 'Freedom to expand over time', 'Premium surroundings', 'Well-planned infrastructure', 'Strong long-term value'].map(pt => (
                <li key={pt}><CheckCircle size={14} className="pp-check" />{pt}</li>
              ))}
            </ul>
            <button className="pp-btn-outline" onClick={go}>Explore Plots <ArrowRight size={14} /></button>
          </F>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section className="pp-features-section">
        <div className="pp-container">
          <F className="pp-section-head">
            <span className="pp-tag">What You Get</span>
            <h2 className="pp-h2">Everything You Need for <span className="pp-gold-text">Better Living</span></h2>
            <div className="pp-bar" />
          </F>
          <div className="pp-features-grid">
            {FEATURES.map(({ Icon, n, title, desc }, i) => (
              <F key={title} delay={i * 80} className="pp-feat-card">
                <span className="pp-feat-num">{n}</span>
                <div className="pp-feat-icon"><Icon size={22} strokeWidth={1.5} /></div>
                <h3 className="pp-feat-title">{title}</h3>
                <p className="pp-feat-desc">{desc}</p>
              </F>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY PLOTTED ══ */}
      <section className="pp-split pp-navy pp-flip">
        <div className="pp-split-img">
          <img src={BOXimg5} alt="Why Plotted" />
          <div className="pp-split-badge"><Star size={14} /><span>Better Living</span></div>
        </div>
        <div className="pp-split-content">
          <F>
            <span className="pp-tag">Why Plotted</span>
            <h2 className="pp-h2">Why More Families Are<br />Choosing Plotted Residences</h2>
            <div className="pp-bar" />
            <p className="pp-body">Families want homes with lots of space and nice surroundings — homes that can change as their family grows. People do not want to live in apartments or crowded places. They want homes where they can feel free and have peace of mind.</p>
            <p className="pp-body">When you have a plotted residence, you get to decide how your home looks. You can choose the design, the size of the rooms and what the inside and outside of your home looks like.</p>
            <ul className="pp-list">
              {['Complete design freedom', 'Privacy & open spaces', 'Grow with your family', 'Peaceful neighbourhood', 'Better quality of life', 'Personal connection to your home'].map(pt => (
                <li key={pt}><CheckCircle size={14} className="pp-check" />{pt}</li>
              ))}
            </ul>
            <button className="pp-btn-outline" onClick={go}>Talk to Our Team <ArrowRight size={14} /></button>
          </F>
        </div>
      </section>

      {/* ══ GALLERY ══ */}
      <section className="pp-gallery-section">
        <F className="pp-section-head pp-container">
          <span className="pp-tag">Our Work</span>
          <h2 className="pp-h2">Built with <span className="pp-gold-text">Precision & Pride</span></h2>
          <div className="pp-bar" />
        </F>
        <div className="pp-gallery-grid">
          {GALLERY.map((img, i) => (
            <div key={i} className="pp-gallery-item">
              <img src={img} alt={`Project ${i + 1}`} />
              <div className="pp-gallery-overlay" />
            </div>
          ))}
        </div>
      </section>

      {/* ══ INVESTMENT ══ */}
      <section className="pp-split pp-dark">
        <div className="pp-split-img">
          <img src={BOXimg6} alt="Smart Investment" />
          <div className="pp-split-badge"><TrendingUp size={14} /><span>Smart Investment</span></div>
        </div>
        <div className="pp-split-content">
          <F>
            <span className="pp-tag">Long-Term Value</span>
            <h2 className="pp-h2">A Smart Investment<br />for the Future</h2>
            <div className="pp-bar" />
            <p className="pp-body">Buying a residential plot is not only about building a home. It is also a valuable long-term investment. Premium plotted residences often continue to grow in value over time because of their location, infrastructure and development potential.</p>
            <p className="pp-body">Unlike fixed living spaces, plotted properties offer future flexibility. Homeowners can expand, redesign or upgrade their homes according to changing needs over time.</p>
            <ul className="pp-list">
              {['Growing property value', 'Future flexibility', 'Expand or redesign anytime', 'Prime location advantage', 'Strong infrastructure', 'Financial confidence'].map(pt => (
                <li key={pt}><CheckCircle size={14} className="pp-check" />{pt}</li>
              ))}
            </ul>
            <button className="pp-btn-outline" onClick={go}>Start Your Investment <ArrowRight size={14} /></button>
          </F>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="pp-faq-section">
        <div className="pp-container">
          <F className="pp-section-head">
            <span className="pp-tag">FAQs</span>
            <h2 className="pp-h2">Frequently Asked <span className="pp-gold-text">Questions</span></h2>
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

      {/* ══ CTA BANNER ══ */}
      <section className="pp-cta-banner">
        <div className="pp-cta-bg" style={{ backgroundImage: `url(${BOXimg10})` }} />
        <div className="pp-cta-overlay" />
        <div className="pp-cta-inner">
          <F>
            <span className="pp-eyebrow-pill">Begin Your Journey</span>
            <h2 className="pp-cta-h2">Your Dream Home Deserves<br />the Right Beginning</h2>
            <p className="pp-cta-sub">Connect with our team today and take the first step toward building a home that truly feels like your own.</p>
            <button className="pp-btn-primary pp-btn-lg" onClick={go}>
              Contact Us Today <ArrowRight size={18} />
            </button>
          </F>
        </div>
      </section>

    </div>
  );
}