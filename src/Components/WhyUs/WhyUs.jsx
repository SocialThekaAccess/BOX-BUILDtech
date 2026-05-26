import { useEffect, useRef } from 'react';
import { Ruler, ShieldCheck, Layers3, ArrowRight } from 'lucide-react';
import './WhyUs.css';

const CARDS = [
  {
    Icon: Ruler,
    number: '01',
    title: 'Design-Faithful Execution',
    desc: "No material substitutions. No contractor-style jugaad. Your architect's vision is protected on site — exactly as designed.",
  },
  {
    Icon: ShieldCheck,
    number: '02',
    title: 'Transparency First',
    desc: 'Clear costing, verified timelines, and real-time site reporting. No games, no hidden surprises — ever.',
  },
  {
    Icon: Layers3,
    number: '03',
    title: 'Hassle-Free Sync',
    desc: "We coordinate directly with your architect. You don't have to be the middleman for technical decisions.",
  },
];

const BG = 'https://t4.ftcdn.net/jpg/07/12/79/47/360_F_712794701_crhqxZnGqJaKudi7d9QKeFXevEW5C3mM.jpg';

export default function WhyUs() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observers = cardsRef.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${i * 140}ms`;
            el.classList.add('whyus-card--visible');
            obs.disconnect();
          }
        },
        { threshold: 0.12 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="whyus-section">

      {/* ── Background image + overlays ── */}
      <div className="whyus-bg" style={{ backgroundImage: `url(${BG})` }} />
      <div className="whyus-overlay" />
      <div className="whyus-overlay-radial" />

      <div className="whyus-inner">

        {/* ── Header ── */}
        <div className="whyus-header">
          <div className="whyus-eyebrow">
            <span className="whyus-eyebrow-line" />
            <span>Our Commitment</span>
            <span className="whyus-eyebrow-line" />
          </div>
          <h2 className="whyus-title">
            A Construction Company For The{' '}
            <span className="whyus-gold">Designers</span> Of The{' '}
            <span className="whyus-gold">World</span>
          </h2>
          <p className="whyus-subtitle">
            Three principles that set every BOX Buildtech project apart.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="whyus-grid">
          {CARDS.map(({ Icon, number, title, desc }, i) => (
            <div
              key={title}
              className="whyus-card"
              ref={(el) => (cardsRef.current[i] = el)}
            >
              {/* watermark number */}
              <span className="whyus-card-number">{number}</span>

              {/* circular icon */}
              <div className="whyus-icon-wrap">
                <Icon size={24} strokeWidth={1.5} />
              </div>

              {/* gold underline */}
              <div className="whyus-card-underline" />

              <h3 className="whyus-card-title">{title}</h3>
              <p className="whyus-card-desc">{desc}</p>

              {/* arrow button */}
              <button className="whyus-card-arrow" aria-label="Learn more">
                <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
