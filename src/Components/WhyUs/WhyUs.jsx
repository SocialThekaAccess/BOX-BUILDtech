import { useEffect, useRef } from 'react';
import { Ruler, ShieldCheck, Layers3 } from 'lucide-react';
import './WhyUs.css';

const CARDS = [
  {
    Icon: Ruler,
    number: '01',
    title: 'Design-Faithful Execution',
    desc: 'No material substitutions. No contractor-style jugaad. Your architect\'s vision is protected on site — exactly as designed.',
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
    desc: 'We coordinate directly with your architect. You don\'t have to be the middleman for technical decisions.',
  },
];

export default function WhyUs() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observers = cardsRef.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${i * 120}ms`;
            el.classList.add('whyus-card--visible');
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="whyus-section">

      {/* ── top accent line ── */}
      <div className="whyus-accent-line" />

      <div className="whyus-inner">

        {/* ── Header ── */}
        <div className="whyus-header">
          <div className="whyus-eyebrow">
            <span className="whyus-eyebrow-line" />
            <span>Why Choose Us</span>
            <span className="whyus-eyebrow-line" />
          </div>
          <h2 className="whyus-title">
           A construction company for the designers of the world
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
              {/* background number watermark */}
              <span className="whyus-card-number">{number}</span>

              <div className="whyus-card-top">
                <div className="whyus-icon-wrap">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div className="whyus-card-divider" />
              </div>

              <h3 className="whyus-card-title">{title}</h3>
              <p className="whyus-card-desc">{desc}</p>

              {/* bottom gold bar on hover */}
              <div className="whyus-card-bar" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
