import React from 'react';
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
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line" />
          <span className="hero-eyebrow-text">Building The Future</span>
        </div>

        {/* Headline */}
        <h1 className="hero-headline">
          <span className="hero-headline-line">We Build</span>
          <span className="hero-headline-line">Your Vision</span>
          <span className="hero-headline-line gold">Into Reality</span>
        </h1>

        {/* Subtext */}
        <p className="hero-sub">
          A leading construction &amp; development company committed to delivering
          exceptional projects — on time, every time.
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions">
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
