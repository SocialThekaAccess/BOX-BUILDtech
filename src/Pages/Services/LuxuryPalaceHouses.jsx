import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  CheckCircle,
  Crown,
  Home,
  MapPin,
  Shield,
  Sofa,
  Star,
  Trees,
  TrendingUp,
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
    Icon: Crown,
    n: '01',
    title: 'Royal Presence',
    desc: 'Luxury palace houses are designed to feel grand from the outside and graceful on the inside, giving families a home they feel proud to return to every day.',
  },
  {
    Icon: Sofa,
    n: '02',
    title: 'Everyday Comfort',
    desc: 'Open dining areas, peaceful balconies, spacious kitchens and large bedrooms create a lifestyle that feels relaxed, practical and welcoming.',
  },
  {
    Icon: Home,
    n: '03',
    title: 'Generous Space',
    desc: 'With more room for family time, celebrations, quiet corners and outdoor living, these homes give you the freedom to enjoy life without feeling restricted.',
  },
  {
    Icon: Trees,
    n: '04',
    title: 'Peaceful Living',
    desc: 'Thoughtfully planned surroundings and calmer locations help create a private retreat away from noise, crowding and the stress of daily city life.',
  },
  {
    Icon: MapPin,
    n: '05',
    title: 'Premium Locations',
    desc: 'BOX Buildtech focuses on well-connected addresses near schools, hospitals, shopping and workplaces so families enjoy convenience along with peace.',
  },
  {
    Icon: TrendingUp,
    n: '06',
    title: 'Lasting Value',
    desc: 'Well-designed luxury homes in strong locations offer emotional security today and long-term value for families planning for the future.',
  },
];

const GALLERY = [BOXimg5, BOXimg7, BOXimg9];

const FAQS = [
  {
    q: 'What makes a luxury palace house different from a regular home?',
    a: 'A luxury palace house offers more space, better planning, elegant detailing and a calmer living experience. It is designed to feel special while still supporting practical everyday family life.',
  },
  {
    q: 'Are these homes suitable for modern families?',
    a: 'Yes. The layouts are planned for modern routines with spacious bedrooms, open dining areas, functional kitchens, peaceful balconies and comfortable outdoor spaces.',
  },
  {
    q: 'Do luxury palace houses focus only on looks?',
    a: 'No. At BOX Buildtech, we believe beautiful homes should also be easy to live in. Style, comfort, ventilation, natural light and functionality are all planned together.',
  },
  {
    q: 'Why is location important for a luxury home?',
    a: 'A premium location improves daily convenience and long-term value. Being close to schools, hospitals, restaurants, markets and workplaces makes family life much easier.',
  },
  {
    q: 'Can these homes reflect different family lifestyles?',
    a: 'Absolutely. Some families want entertaining spaces, some want peaceful private corners and others want more outdoor living. The planning of these homes is meant to support different ways of living.',
  },
  {
    q: 'Are luxury palace houses a good long-term investment?',
    a: 'Yes. Spacious, well-built homes in quality locations tend to remain desirable over time, offering both a better lifestyle now and stronger property value in the future.',
  },
];

export default function LuxuryPalaceHouses() {
  const navigate = useNavigate();

  const go = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pp-page">
      <Helmet>
  <title>Luxury Palace Houses Chandigarh &amp; Mohali | Box Build Tech</title>
  <meta name="description" content="Box Build Tech builds luxury palace houses in Chandigarh & Mohali. Grand spacious homes with elegant design, premium finishes and peaceful family living." />
  <meta name="keywords" content="luxury palace houses Chandigarh, palace house builders Mohali, grand villa construction Punjab, luxury homes Chandigarh, Box Build Tech" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.boxbuildtech.com/luxury-palace-houses-chandigarh-mohali" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.boxbuildtech.com/luxury-palace-houses-chandigarh-mohali" />
  <meta property="og:title" content="Luxury Palace Houses Chandigarh & Mohali | Box Build Tech" />
  <meta property="og:description" content="Box Build Tech builds luxury palace houses in Chandigarh & Mohali. Grand spacious homes with elegant design and premium finishes." />
  <meta property="og:image" content="https://www.boxbuildtech.com/og-image.jpg" />
  <meta property="og:site_name" content="Box Build Tech" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://www.boxbuildtech.com/luxury-palace-houses-chandigarh-mohali" />
  <meta name="twitter:title" content="Luxury Palace Houses Chandigarh & Mohali | Box Build Tech" />
  <meta name="twitter:description" content="Box Build Tech builds luxury palace houses in Chandigarh & Mohali. Grand spacious homes with elegant design and premium finishes." />
  <meta name="twitter:image" content="https://www.boxbuildtech.com/og-image.jpg" />
</Helmet>

      <section className="pp-hero">
        <div className="pp-hero-bg" style={{ backgroundImage: `url(${BOXimg8})` }} />
        <div className="pp-hero-overlay" />

        <div className="pp-hero-inner">
          <F className="pp-hero-content">
            <span className="pp-eyebrow-pill">Luxury Palace Houses</span>

            <h2 className="pp-hero-h1">
              Royal Living
              Modern Comfort
              Timeless Pride
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
              Experience royal living with luxury palace houses crafted for modern
              families who want space, elegance, comfort and a peaceful lifestyle.
            </p>

            <div className="pp-hero-actions">
              <button className="pp-btn-primary" onClick={go}>
                Explore Homes <ArrowRight size={16} />
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
          <img src={BOXimg4} alt="Luxury palace house exterior" />
          <div className="pp-split-badge">
            <Crown size={14} />
            <span>A Personal Retreat</span>
          </div>
        </div>
        <div className="pp-split-content">
          <F>
            <span className="pp-tag">What We Offer</span>
            <h2 className="pp-h2">
              Luxury Palace Houses
              <br />
              for Modern Families
            </h2>
            <div className="pp-bar" />
            <p className="pp-body">
              Coming home to a space that makes you feel relaxed, proud and
              comfortable is special. A home should look beautiful outside and
              make everyday life better inside.
            </p>
            <p className="pp-body">
              At BOX Buildtech, our luxury palace houses are created for families
              who want more than a house. We focus on spacious layouts, natural
              light, calm surroundings and a living experience that feels warm,
              luxurious and personal.
            </p>
            <ul className="pp-list">
              {[
                'Spacious family-first layouts',
                'Elegant interiors with natural light',
                'Peaceful balconies and outdoor spaces',
                'Comfortable everyday functionality',
                'Private, calm and premium living',
                'Homes built for memories and pride',
              ].map((point) => (
                <li key={point}>
                  <CheckCircle size={14} className="pp-check" />
                  {point}
                </li>
              ))}
            </ul>
            <button className="pp-btn-outline" onClick={go}>
              Explore Homes <ArrowRight size={14} />
            </button>
          </F>
        </div>
      </section>

      <section className="pp-features-section">
        <div className="pp-container">
          <F className="pp-section-head">
            <span className="pp-tag">What You Get</span>
            <h2 className="pp-h2">
              Everything You Need for Elevated Living
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
          <img src={BOXimg9} alt="Luxury house family living" />
          <div className="pp-split-badge">
            <Star size={14} />
            <span>Dream Bigger</span>
          </div>
        </div>
        <div className="pp-split-content">
          <F>
            <span className="pp-tag">Why Families Choose It</span>
            <h2 className="pp-h2">
              Created for Families
              <br />
              Who Dream Bigger
            </h2>
            <div className="pp-bar" />
            <p className="pp-body">
              Every family imagines a perfect home differently. Some want space
              for celebrations and togetherness, while others want a calm place
              to unwind after a long day.
            </p>
            <p className="pp-body">
              These homes are planned to fit around real family life naturally,
              with big bedrooms, open dining areas, functional kitchens and
              outdoor spaces that feel peaceful and well balanced.
            </p>
            <ul className="pp-list">
              {[
                'Designed around your lifestyle',
                'Big bedrooms and open common areas',
                'Room for gathering and privacy',
                'Outdoor spaces that feel peaceful',
                'Freedom for children and family life',
                'A home that grows with your routines',
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
            Built with Precision & Pride
          </h2>
          <div className="pp-bar" />
        </F>

        <div className="pp-gallery-grid">
          {GALLERY.map((img, i) => (
            <div key={img} className="pp-gallery-item">
              <img src={img} alt={`Luxury palace house project ${i + 1}`} />
              <div className="pp-gallery-overlay" />
            </div>
          ))}
        </div>
      </section>

      <section className="pp-split pp-dark">
        <div className="pp-split-img">
          <img src={BOXimg6} alt="Long-term luxury home investment" />
          <div className="pp-split-badge">
            <Shield size={14} />
            <span>Quality Living</span>
          </div>
        </div>
        <div className="pp-split-content">
          <F>
            <span className="pp-tag">Long-Term Value</span>
            <h2 className="pp-h2">
              A Long-Term Investment
              <br />
              in Better Living
            </h2>
            <div className="pp-bar" />
            <p className="pp-body">
              Luxury palace houses are not only about present comfort. They also
              offer long-term value through spacious planning, strong lifestyle
              appeal and premium locations that remain desirable over time.
            </p>
            <p className="pp-body">
              At BOX Buildtech, we focus on quality design, thoughtful planning
              and modern execution so families can enjoy homes that feel special,
              practical and dependable for years to come.
            </p>
            <ul className="pp-list">
              {[
                'Strong long-term property value',
                'Premium locations with better convenience',
                'Comfort that lasts beyond trends',
                'Spaces that reflect your personality',
                'Quality planning with modern functionality',
                'A home families can proudly grow into',
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
              Frequently Asked Questions
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
            <span className="pp-eyebrow-pill">Step Into a Better Lifestyle</span>
            <h2 className="pp-cta-h2">
              A Home That Feels
              <br />
              Grand, Warm and Timeless
            </h2>
            <p className="pp-cta-sub">
              If you want a home with space, elegance, modern comfort and peaceful
              living, our luxury palace houses are designed to bring that vision
              to life.
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
