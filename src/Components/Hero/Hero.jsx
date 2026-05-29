import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import BG from '../../assets/homepageslider.png';

const HERO_BG = BG;

gsap.registerPlugin(ScrollTrigger);

const scrollTo = (id) => {
  window.history.replaceState(null, '', '/');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
  const navigate    = useNavigate();
  const sectionRef  = useRef(null);
  const bgRef       = useRef(null);
  const overlayRef  = useRef(null);
  const contentRef  = useRef(null);
  const headlineRef = useRef(null);
  const eyebrowRef  = useRef(null);
  const bottomRef   = useRef(null);

  /* ── GSAP Scroll Animation ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        // Background parallax only
        gsap.to(bgRef.current, {
          y: '25%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
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
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ── Entrance animations ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(headlineRef.current,
        { y: 60, opacity: 0 },
        { y: 0,  opacity: 1, duration: 1.0, delay: 0.2 }
      )
      .fromTo(bottomRef.current,
        { y: 40, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.8 },
        '-=0.5'
      );
    }, sectionRef);

    return () => ctx.revert();
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
      {/* <div className="hero-side-left">
        <span>BOX BUILDTECH</span>
        <div className="hero-side-line" />
      </div>
      <div className="hero-side-right">
        <div className="hero-side-line" />
        <span>EST. 2005</span>
      </div> */}

      {/* ── Main content ── */}
      <div className="hero-center" ref={contentRef}>

        {/* Eyebrow */}
        {/* <div className="hero-eyebrow" ref={eyebrowRef}> */}
          {/* <span className="hero-eyebrow-line" /> */}
          {/* <span className="hero-eyebrow-text">Building The Future</span> */}
          {/* <span className="hero-eyebrow-line" /> */}
        {/* </div> */}

        {/* Big centered headline */}
        <div className="hero-headline-wrap" ref={headlineRef}>
          <h1 className="hero-headline">
            <span className="hero-headline-line">System Driven</span>
            <span className="hero-headline-line">Construction Partner </span>
            <span className="hero-headline-line gold"> for
Architects & Owners</span>
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
            {/* <p className="hero-typewriter">
              We deliver&nbsp;
              <span className="hero-typewriter-word">
                {displayed}<span className="hero-cursor">|</span>
              </span>
            </p> */}

            {/* <p className="hero-sub">
              A leading construction &amp; development company committed to delivering
              exceptional projects — on time, every time.
            </p> */}
            <div className="hero-actions">
             <button className="hero-btn-primary" onClick={() => { navigate('/client-portal'); window.scrollTo({ top: 0 }); }}>
                how project works <span className="btn-arrow">↗</span>
              </button>
              {/* <button className="hero-btn-secondary" onClick={() => scrollTo('projects')}>
                Our Projects <span className="btn-arrow">↗</span>
              </button> */}
            </div>
          </div>

          {/* <div className="hero-thumbs">
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
          </div> */}
        </div>

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
