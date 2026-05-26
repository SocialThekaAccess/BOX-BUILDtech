import { useEffect, useRef, useState } from 'react';
import { Building2, HardHat, Award } from 'lucide-react';
import './StatsBar.css';

const STATS = [
  { Icon: Building2, value: 25, suffix: '+', label: 'Premium Projects Completed' },
  { Icon: HardHat,   value: 6,  suffix: '+', label: 'Ongoing Projects'           },
  { Icon: Award,     value: 14, suffix: '+', label: 'Years Experience'            },
];

function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatItem({ Icon, value, suffix, label, animate }) {
  const count = useCounter(value, 1800, animate);
  return (
    <div className="sb-stat">
      <div className="sb-stat-icon-wrap">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <div className="sb-stat-body">
        <div className="sb-stat-value">{animate ? count : 0}{suffix}</div>
        <div className="sb-stat-label">{label}</div>
      </div>
    </div>
  );
}

export default function StatsBar() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="sb-root" ref={ref}>
      <div className="sb-inner">
        {STATS.map((s, i) => (
          <StatItem key={s.label} {...s} animate={visible} />
        ))}
      </div>
    </div>
  );
}
