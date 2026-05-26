import { useEffect, useRef } from 'react';
import { Compass, ShieldCheck, Eye, Zap } from 'lucide-react';
import './ChooseUs.css';

const CARDS = [
  {
    Icon: Compass,
    title: 'Architect-First',
    desc: "We don't just 'build'. We partner with architects to ensure their technical vision is protected from site-office compromises.",
  },
  {
    Icon: ShieldCheck,
    title: 'Design Fidelity',
    desc: '100% adherence to the blueprint. We verify every dimension and finish to ensure the outcome matches the original design intent.',
  },
  {
    Icon: Eye,
    title: 'Radical Honesty',
    desc: 'Real-time access to site logs, photos, and project financials via your dashboard. No hidden costs. Total accountability.',
  },
  {
    Icon: Zap,
    title: 'Lean Execution',
    desc: 'We manage all site labor, logic, and supply chains. You and your architect focus on design; we handle the structural soul.',
  },
];

const BG = 'https://t4.ftcdn.net/jpg/07/12/79/47/360_F_712794701_crhqxZnGqJaKudi7d9QKeFXevEW5C3mM.jpg';

export default function ChooseUs() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observers = cardsRef.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${i * 100}ms`;
            el.classList.add('cu-card--visible');
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="cu-section">
      {/* bg image */}
      <div className="cu-bg" style={{ backgroundImage: `url(${BG})` }} />
      <div className="cu-overlay" />

      <div className="cu-inner">

        {/* ── Header ── */}
        <div className="cu-header">
          <div className="cu-header-icon">
            <Compass size={22} strokeWidth={1.5} />
          </div>
          <div className="cu-header-lines">
            <span className="cu-header-line" />
            <span className="cu-header-line" />
          </div>
          <h2 className="cu-title">
            Why Architects<br />
            &amp; Clients <span className="cu-gold">Trust BOX</span>
          </h2>
          <p className="cu-subtitle">
            Built on precision, transparency, and uncompromising execution.
          </p>
          <div className="cu-title-underline" />
        </div>

        {/* ── 2×2 Grid ── */}
        <div className="cu-grid">
          {CARDS.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              className="cu-card"
              ref={(el) => (cardsRef.current[i] = el)}
            >
              {/* dots pattern */}
              <div className="cu-card-dots" />

              {/* icon + title row */}
              <div className="cu-card-head">
                <div className="cu-icon">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div className="cu-card-head-text">
                  <h3 className="cu-card-title">{title}</h3>
                  <div className="cu-card-underline" />
                </div>
              </div>

              <p className="cu-card-desc">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
