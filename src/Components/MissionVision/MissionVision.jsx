import { useEffect, useRef } from 'react';
import { Eye, Compass } from 'lucide-react';
import './MissionVision.css';

const CARDS = [
  {
    Icon: Eye,
    tag: 'THE MISSION',
    title: 'Execution Redefined',
    desc: 'To deliver every project through a real-time construction management system that makes execution visible, verifiable, accountable, and trusted.',
  },
  {
    Icon: Compass,
    tag: 'THE VISION',
    title: 'Legacy Unaffected',
    desc: 'To remain the uncompromised standard of technical stewardship; preventing dimension drift, material substitution, and site compromise to leave a legacy of precision craftsmanship.',
  },
];

export default function MissionVision() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observers = cardsRef.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${i * 100}ms`;
            el.classList.add('mv-card--visible');
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
    <section className="mv-section">
      <div className="mv-inner">
        <div className="mv-grid">
          {CARDS.map(({ Icon, tag, title, desc }, i) => (
            <div
              key={title}
              className="mv-card"
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <div className="mv-icon-wrap">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <div className="mv-tag">{tag}</div>
              <h3 className="mv-title">{title}</h3>
              <p className="mv-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
