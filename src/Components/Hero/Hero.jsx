import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Award, HardHat } from 'lucide-react';
import './Hero.css';
import boxImg1 from '../../assets/BOXimg1.jpg';

const HERO_BG = 'https://t4.ftcdn.net/jpg/07/12/79/47/360_F_712794701_crhqxZnGqJaKudi7d9QKeFXevEW5C3mM.jpg';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { icon: Building2, value: 25, suffix: '+', label: 'Premium Projects Completed' },
  { icon: HardHat,   value: 6,  suffix: '+', label: 'Ongoing Projects'            },
  { icon: Award,     value: 14, suffix: '+', label: 'Years Experience'            },
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
  const sectionRef    = useRef(null);
  const bgRef         = useRef(null);
  const overlayRef    = useRef(null);
  const contentRef    = useRef(null);
  const headlineRef   = useRef(null);
  const eyebrowRef    = useRef(null);
  const bottomRef     = useRef(null);
  const statsRef      = useRef(null);

  const [statsVisible, setStatsVisible] = useState(false);
  const [wordIndex,    setWordIndex]    = useState(0);
  const [displayed,    setDisplayed]    = useState('');
  const [typing,       setTyping]       = useState(true);

  /* ── GSAP Scroll Animation ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        // 1. Content fades + moves up first
        gsap.to(contentRef.current, {
          y: -120,
          opacity: 0,
          ease: 'power2.in',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '40% top',
            scrub: 1.2,
          },
        });

        // 2. Headline slides out faster (cinematic)
        gsap.to(headlineRef.current, {
          y: -80,
          opacity: 0,
          ease: 'power3.in',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '30% top',
            scrub: 0.8,
          },
        });

        // 3. Stats bar fades out
        gsap.to(statsRef.current, {
          y: 60,
          opacity: 0,
          ease: 'power2.in',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: '5% top',
            end: '35% top',
            scrub: 1,
          },
        });

        // 4. Background parallax — starts AFTER content moves
        gsap.to(bgRef.current, {
          y: '25%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: '25% top',
            end: 'bottom top',
            scrub: 1.5,
          },
        });

        // 5. Overlay darkens as bg moves
        gsap.to(overlayRef.current, {
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: '20% top',
            end: '60% top',
            scrub: 1,
          },
        });
      });

      // Mobile — lighter parallax only
      mm.add('(max-width: 767px)', () => {
        gsap.to(bgRef.current, {
          y: '15%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
          },
        });

        gsap.to(contentRef.current, {
          y: -60,
          opacity: 0,
          ease: 'power2.in',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '40% top',
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ── Entrance animations ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(eyebrowRef.current,
        { y: 30, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.8, delay: 0.2 }
      )
      .fromTo(headlineRef.current,
        { y: 60, opacity: 0 },
        { y: 0,  opacity: 1, duration: 1.0 },
        '-=0.4'
      )
      .fromTo(bottomRef.current,
        { y: 40, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(statsRef.current,
        { y: 30, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.7 },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ── Typewriter ── */
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

  /* ── Stats counter trigger ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="home" className="hero" ref={sectionRef}>

      {/* ── Fixed background layer ── */}
      <div className="hero-bg-layer">
        <div
          className="hero-bg"
          ref={bgRef}
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        {/* Base dark overlay — always present */}
        <div className="hero-overlay-base" />
        {/* Scroll overlay — darkens as bg moves */}
        <div className="hero-overlay-scroll" ref={overlayRef} />
        <div className="hero-overlay-vignette" />
        <div className="hero-noise" />
      </div>

      {/* ── Side labels ── */}
      <div className="hero-side-left">
        <span>BOX BUILDTECH</span>
        <div className="hero-side-line" />
      </div>
      <div className="hero-side-right">
        <div className="hero-side-line" />
        <span>EST. 2005</span>
      </div>

      {/* ── Main content ── */}
      <div className="hero-center" ref={contentRef}>

        {/* Eyebrow */}
        <div className="hero-eyebrow" ref={eyebrowRef}>
          <span className="hero-eyebrow-line" />
          <span className="hero-eyebrow-text">Building The Future</span>
          <span className="hero-eyebrow-line" />
        </div>

        {/* Big centered headline */}
        <div className="hero-headline-wrap" ref={headlineRef}>
          <h1 className="hero-headline">
            <span className="hero-headline-line">System Driven</span>
            <span className="hero-headline-line">Construction Partner </span>
            <span className="hero-headline-line gold">Turn Into Reality</span>
          </h1>
          <div className="hero-headline-divider">
            <span className="hero-hdiv-line" />
            <span className="hero-hdiv-diamond">◆</span>
            <span className="hero-hdiv-line" />
          </div>
        </div>

        {/* Bottom row */}
        <div className="hero-bottom-row" ref={bottomRef}>
          <div className="hero-bottom-left">
            <p className="hero-typewriter">
              We deliver&nbsp;
              <span className="hero-typewriter-word">
                {displayed}<span className="hero-cursor">|</span>
              </span>
            </p>
            <p className="hero-sub">
              A leading construction &amp; development company committed to delivering
              exceptional projects — on time, every time.
            </p>
            <div className="hero-actions">
              <button className="hero-btn-primary" onClick={() => scrollTo('contact')}>
                start your consulation journey <span className="btn-arrow">↗</span>
              </button>
              <button className="hero-btn-secondary" onClick={() => scrollTo('projects')}>
                Our Projects <span className="btn-arrow">↗</span>
              </button>
            </div>
          </div>

          <div className="hero-thumbs">
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

      </div>

      {/* ── Stats bar ── */}
      <div className="hero-stats" ref={statsRef}>
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} animate={statsVisible} />
        ))}
      </div>

      {/* ── Scroll hint ── */}
      <div className="hero-scroll-hint">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>

    </section>
  );
};

export default Hero;
