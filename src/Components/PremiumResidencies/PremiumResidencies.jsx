import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './PremiumResidencies.css';

const FEATURES = [
  {
    number: '01',
    tag: 'Integrity',
    title: 'Your vision, uncompromised.',
    desc: 'We follow drawings religiously. If it\'s on paper, it\'s on site. You don\'t pay for the architect\'s design to have a contractor simplify it.',
  },
  {
    number: '02',
    tag: 'Transparency',
    title: 'Maximum ROI for your dream.',
    desc: 'We eliminate hidden margins. By using transparent material sourcing and fixed management fees, we ensure every rupee goes directly into your home\'s quality, not a contractor\'s profit.',
  },
  {
    number: '03',
    tag: 'Sync',
    title: 'Your stress, managed.',
    desc: 'We don\'t bypass the architect. We coordinate exactly to ensure site execution matches technical detail. No friction, just focus.',
  },
  {
    number: '04',
    tag: 'Heritage',
    title: 'Your future, built right.',
    desc: 'Site discipline, safety protocols, and rigorous quality control that mirrors international standards to create a home that lasts.',
  },
];

export default function PremiumResidencies() {
  const featuresRef = useRef([]);
  const headerRef   = useRef(null);
  const navigate    = useNavigate();

  useEffect(() => {
    const all = [headerRef.current, ...featuresRef.current].filter(Boolean);
    const observers = all.map((el, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${i * 80}ms`;
            el.classList.add('pr-visible');
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="pr-section">
      <div className="pr-inner">

        {/* ── Header ── */}
        <div className="pr-header pr-anim" ref={headerRef}>
          <div className="pr-header-left">
            <div className="pr-eyebrow">PREMIUM SPECIALIZATION</div>
            <h2 className="pr-title">
              Designed for<br />
              Premium<br />
              Residencies.
            </h2>
          </div>
          <div className="pr-header-right">
            <div className="pr-header-divider" />
            <p className="pr-header-desc">
              BOX exists for projects that require 100% fidelity. We are not just a
              builder; we are a design guardian for exclusive residential architecture.
            </p>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="pr-divider" />

        {/* ── 4-column features ── */}
        <div className="pr-grid">
          {FEATURES.map(({ number, tag, title, desc }, i) => (
            <div
              key={title}
              className="pr-feature pr-anim"
              ref={(el) => (featuresRef.current[i] = el)}
            >
              <div className="pr-feature-top">
                <span className="pr-feature-tag">{tag}</span>
                <span className="pr-feature-number">{number}</span>
              </div>
              <h3 className="pr-feature-title">{title}</h3>
              <p className="pr-feature-desc">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
