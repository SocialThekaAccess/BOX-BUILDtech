import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar       from './Components/Navbar/Navbar';
import Hero         from './Components/Hero/Hero';
import Services     from './Components/Services/Services';
import Projects     from './Components/Projects/Projects';
import About        from './Components/About/About';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact      from './Components/Contact/Contact';
import Footer       from './Components/Footer/Footer';
import './styles/globals.css';

/* ── Back To Top Button ── */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.history.replaceState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      style={{
        position:        'fixed',
        bottom:          '36px',
        right:           '36px',
        zIndex:          999,
        width:           '48px',
        height:          '48px',
        background:      'linear-gradient(135deg, #C8960C, #F0B429)',
        border:          'none',
        cursor:          'pointer',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        clipPath:        'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
        boxShadow:       '0 4px 20px rgba(200, 150, 12, 0.4)',
        opacity:          visible ? 1 : 0,
        transform:        visible ? 'translateY(0)' : 'translateY(16px)',
        pointerEvents:    visible ? 'all' : 'none',
        transition:      'opacity 0.3s ease, transform 0.3s ease',
        fontSize:        '18px',
        color:           '#000',
        fontWeight:      '900',
      }}
    >
      ↑
    </button>
  );
};

/* ── Page Layout ── */
const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Projects />
    <About />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', '/');
    }
  }, []);

  return (
    <div style={{ background: '#ffffff', color: '#1A1F2E', overflowX: 'hidden' }}>
      <Navbar />
      <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="*"  element={<HomePage />} />
      </Routes>
      <BackToTop />
    </div>
  );
}
