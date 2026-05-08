import React, { useEffect, useRef, useState } from 'react';
import { Building2, Users, Award, HardHat } from 'lucide-react';
import './Hero.css';

const STATS = [
  { icon: Building2, value: 320, suffix: '+', label: 'Projects Built'   },
  { icon: Users,     value: 85,  suffix: '+', label: 'Happy Clients'    },
  { icon: Award,     value: 15,  suffix: '+', label: 'Years Experience' },
  { icon: HardHat,   value: 50,  suffix: '+', label: 'Team Members'     },
];

const THUMBS = [
  { img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&q=80', label: 'Modern Villa' },
  { img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=300&q=80', label: 'Corporate HQ' },
  { img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&q=80',    label: 'Luxury Apt'   },
];

const WORDS = ['Excellence.', 'Precision.', 'Vision.', 'Reality.'];

const scrollTo = (id) => {
  window.history.replaceState(null, '', '/');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatItem({ icon: Icon, value, suffix, label, animate }) {
  const count = useCounter(value, 1800, animate);
  return (
    <div className="hero-stat">
      <Icon size={22} strokeWidth={1.5} className="hero-stat-icon" />
      <div className="hero-stat-value">{animate ? count : 0}{suffix}</div>
      <div className="hero-stat-label">{label}</div>
    </div>
  );
}

const Hero = () => {
  const line1Ref   = useRef(null);
  const line2Ref   = useRef(null);
  const line3Ref   = useRef(null);
  const eyebrowRef = useRef(null);
  const subRef     = useRef(null);
  const actionsRef = useRef(null);
  const thumbsRef  = useRef(null);
  const statsRef   = useRef(null);

  const [statsVisible, setStatsVisible] = useState(false);
  const [wordIndex,    setWordIndex]    = useState(0);
  const [displayed,    setDisplayed]    = useState('');
  const [typing,       setTyping]       = useState(true);

  // Scroll parallax
  useEffect(() => {
    const handleScroll = () => {
      const scrollY    = window.scrollY;
      const heroHeight = window.innerHeight;
      if (scrollY > heroHeight) return;

      const progress = scrollY / heroHeight;
      const opacity  = Math.max(0, 1 - progress * 2.2);

      if (line1Ref.current) {
        line1Ref.current.style.transform = `translateX(${progress * 160}px)`;
        line1Ref.current.style.opacity   = opacity;
      }
      if (line2Ref.current) {
        line2Ref.current.style.transform = `translateX(${progress * 260}px)`;
        line2Ref.current.style.opacity   = opacity;
      }
      if (line3Ref.current) {
        line3Ref.current.style.transform = `translateX(${progress * 360}px)`;
        line3Ref.current.style.opacity   = opacity;
      }
      if (eyebrowRef.current) {
        eyebrowRef.current.style.transform = `translateX(${progress * 60}px)`;
        eyebrowRef.current.style.opacity   = opacity;
      }
      if (subRef.current) {
        subRef.current.style.opacity   = Math.max(0, 1 - progress * 3);
        subRef.current.style.transform = `translateY(${progress * 24}px)`;
      }
      if (actionsRef.current) {
        actionsRef.current.style.opacity   = Math.max(0, 1 - progress * 3);
        actionsRef.current.style.transform = `translateY(${progress * 24}px)`;
      }
      if (thumbsRef.current) {
        thumbsRef.current.style.opacity   = Math.max(0, 1 - progress * 3.5);
        thumbsRef.current.style.transform = `translateY(${progress * 20}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter
  useEffect(() => {
    const word = WORDS[wordIndex];
    let timeout;
    if (typing) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setWordIndex((i) => (i + 1) % WORDS.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex]);

  // Stats counter trigger
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="home" className="hero">

      <div className="hero-bg" />
      <div className="hero-overlay-dark" />
      <div className="hero-overlay-vignette" />
      <div className="hero-noise" />

      <div className="hero-side-left">
        <span>BOX BUILDTECH</span>
        <div className="hero-side-line" />
      </div>
      <div className="hero-side-right">
        <div className="hero-side-line" />
        <span>EST. 2005</span>
      </div>

      <div className="hero-center">

        <div className="hero-eyebrow" ref={eyebrowRef}>
          <span className="hero-eyebrow-line" />
          <span className="hero-eyebrow-text">Building The Future</span>
        </div>

        <h1 className="hero-headline">
          <span className="hero-headline-line"      ref={line1Ref}>We Build</span>
          <span className="hero-headline-line"      ref={line2Ref}>Your Vision</span>
          <span className="hero-headline-line gold" ref={line3Ref}>Into Reality</span>
        </h1>

        {/* Typewriter */}
        <p className="hero-typewriter">
          We deliver&nbsp;
          <span className="hero-typewriter-word">
            {displayed}<span className="hero-cursor">|</span>
          </span>
        </p>

        <p className="hero-sub" ref={subRef}>
          A leading construction &amp; development company committed to delivering
          exceptional projects — on time, every time.
        </p>

        <div className="hero-actions" ref={actionsRef}>
          <button className="hero-btn-primary" onClick={() => scrollTo('contact')}>
            Get A Quote <span className="btn-arrow">↗</span>
          </button>
          <button className="hero-btn-secondary" onClick={() => scrollTo('projects')}>
            Our Projects <span className="btn-arrow">↗</span>
          </button>
        </div>

        <div className="hero-thumbs" ref={thumbsRef}>
          <span className="hero-thumbs-label">Featured Work</span>
          <div className="hero-thumbs-row">
            {THUMBS.map((t) => (
              <button key={t.label} className="hero-thumb" onClick={() => scrollTo('projects')}>
                <img src={t.img} alt={t.label} />
                <span className="hero-thumb-label">{t.label}</span>
              </button>
            ))}
            <button className="hero-thumb hero-thumb-more" onClick={() => scrollTo('projects')}>
              <span className="hero-thumb-more-icon">→</span>
              <span className="hero-thumb-label">View All</span>
            </button>
          </div>
        </div>

      </div>

      <div className="hero-stats" ref={statsRef}>
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} animate={statsVisible} />
        ))}
      </div>

      <div className="hero-scroll-hint">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>

    </section>
  );
};

export default Hero;