import React, { useEffect, useRef } from 'react';
import { Building2, Users, Award, HardHat } from 'lucide-react';
import './Hero.css';

const STATS = [
  { icon: Building2, value: '320+', label: 'Projects Built'    },
  { icon: Users,     value: '85+',  label: 'Happy Clients'     },
  { icon: Award,     value: '15+',  label: 'Years Experience'  },
  { icon: HardHat,   value: '50+',  label: 'Team Members'      },
];

const scrollTo = (id) => {
  window.history.replaceState(null, '', '/');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const eyebrowRef = useRef(null);
  const subRef = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Only animate while hero is visible
      if (scrollY > heroHeight) return;

      // Progress: 0 at top, 1 at bottom of hero
      const progress = scrollY / heroHeight;

      // Each line moves right at different speeds (parallax layers)
      const shift1 = progress * 180;   // "WE BUILD" — slowest
      const shift2 = progress * 280;   // "YOUR VISION" — medium
      const shift3 = progress * 380;   // "INTO REALITY" — fastest

      // Fade out as user scrolls
      const opacity = Math.max(0, 1 - progress * 2.2);

      if (line1Ref.current) {
        line1Ref.current.style.transform = `translateX(${shift1}px)`;
        line1Ref.current.style.opacity   = opacity;
      }
      if (line2Ref.current) {
        line2Ref.current.style.transform = `translateX(${shift2}px)`;
        line2Ref.current.style.opacity   = opacity;
      }
      if (line3Ref.current) {
        line3Ref.current.style.transform = `translateX(${shift3}px)`;
        line3Ref.current.style.opacity   = opacity;
      }
      if (eyebrowRef.current) {
        eyebrowRef.current.style.transform = `translateX(${progress * 80}px)`;
        eyebrowRef.current.style.opacity   = opacity;
      }
      if (subRef.current) {
        subRef.current.style.opacity   = Math.max(0, 1 - progress * 3);
        subRef.current.style.transform = `translateY(${progress * 30}px)`;
      }
      if (actionsRef.current) {
        actionsRef.current.style.opacity   = Math.max(0, 1 - progress * 3);
        actionsRef.current.style.transform = `translateY(${progress * 30}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero">

      {/* ── Background Image ── */}
      <div className="hero-bg" />

      {/* ── Overlays ── */}
      <div className="hero-overlay-bottom" />
      <div className="hero-overlay-left"  />
      <div className="hero-overlay-gold"  />
      <div className="hero-noise"         />

      {/* ── Main Content ── */}
      <div className="hero-content">

        {/* Eyebrow */}
        <div className="hero-eyebrow" ref={eyebrowRef}>
          <span className="hero-eyebrow-line" />
          <span className="hero-eyebrow-text">Building The Future</span>
        </div>

        {/* Headline — each line has its own ref for staggered parallax */}
        <h1 className="hero-headline">
          <span className="hero-headline-line"      ref={line1Ref}>We Build</span>
          <span className="hero-headline-line"      ref={line2Ref}>Your Vision</span>
          <span className="hero-headline-line gold" ref={line3Ref}>Into Reality</span>
        </h1>

        {/* Subtext */}
        <p className="hero-sub" ref={subRef}>
          A leading construction &amp; development company committed to delivering
          exceptional projects — on time, every time.
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions" ref={actionsRef}>
          <button className="hero-btn-primary" onClick={() => scrollTo('contact')}>
            Get A Quote
            <span className="btn-arrow">→</span>
          </button>
          <button className="hero-btn-secondary" onClick={() => scrollTo('projects')}>
            Our Projects →
          </button>
        </div>

      </div>

      {/* ── Stats Bar ── */}
      <div className="hero-stats">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="hero-stat">
              <Icon size={28} strokeWidth={1.5} className="hero-stat-icon" />
              <div className="hero-stat-value">{s.value}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          );
        })}
      </div>

      {/* ── Scroll Hint ── */}
      <div className="hero-scroll-hint">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>

    </section>
  );
};

export default Hero;
