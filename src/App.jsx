import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar       from './Components/Navbar/Navbar';
import Hero         from './Components/Hero/Hero';
import MissionVision from './Components/MissionVision/MissionVision';
import StatsBar      from './Components/StatsBar/StatsBar';
import Services     from './Components/Services/Services';
import WhyUs        from './Components/WhyUs/WhyUs';
import Projects     from './Components/Projects/Projects';
import About        from './Components/About/About';
// import Testimonials from './Components/Testimonials/Testimonials';
import Contact      from './Components/Contact/Contact';
import Footer       from './Components/Footer/Footer';
import AboutPage               from './Pages/About/About';
import ContactUsPage           from './Pages/ContactUs/ContactUs';
import LuxuryResidential       from './Pages/Services/LuxuryResidential';
import DesignBuild             from './Pages/Services/DesignBuild';
import PortfolioPage           from './Pages/Portfolio/Portfolio';
import PortalPage              from './Pages/Portal/Portal';
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
      className="back-to-top-btn"
      style={{
        position:       'fixed',
        bottom:         '36px',
        right:          '36px',
        zIndex:         999,
        width:          '52px',
        height:         '52px',
        background:     'transparent',
        border:         'none',
        cursor:         'pointer',
        padding:        0,
        opacity:         visible ? 1 : 0,
        transform:       visible ? 'translateY(0) rotate(0deg)' : 'translateY(20px) rotate(-10deg)',
        pointerEvents:   visible ? 'all' : 'none',
        transition:     'opacity 0.4s ease, transform 0.4s ease',
      }}
    >
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', overflow: 'visible' }}
      >
        {/* Outer rotating ring */}
        <circle
          cx="26" cy="26" r="24"
          stroke="rgba(233,161,2,0.25)"
          strokeWidth="1"
          fill="none"
        />
        {/* Gold filled circle */}
        <circle
          cx="26" cy="26" r="20"
          fill="#E9A102"
        />
        {/* Arrow up */}
        <path
          d="M26 33 L26 19 M19 26 L26 19 L33 26"
          stroke="#000000"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

/* ── Page Layout ── */
const HomePage = () => (
  <>
    <Hero />
    <MissionVision />
    <StatsBar />
    <Services />
    <WhyUs />
    <Projects />
    <About />
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
  </>
);

const AboutFullPage = () => (
  <>
    <AboutPage />
    <Footer />
  </>
);

const ContactUsFullPage = () => (
  <>
    <ContactUsPage />
    <Footer />
  </>
);

const LuxuryResidentialPage = () => (
  <>
    <LuxuryResidential />
    <Footer />
  </>
);

const DesignBuildPage = () => (
  <>
    <DesignBuild />
    <Footer />
  </>
);

const PortfolioFullPage = () => (
  <>
    <PortfolioPage />
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
    <div style={{ background: '#0a0a0a', color: '#ffffff', overflowX: 'hidden' }}>
      <Navbar />
      <Routes>
        <Route path="/"                              element={<HomePage />}               />
        <Route path="/about"                         element={<AboutFullPage />}          />
        <Route path="/contact"                       element={<ContactUsFullPage />}      />
        <Route path="/services/luxury-residential"   element={<LuxuryResidentialPage />} />
        <Route path="/services/design-build"         element={<DesignBuildPage />}       />
        <Route path="/portfolio"                     element={<PortfolioFullPage />}     />
        <Route path="/portal"                        element={<PortalPage />}            />
        <Route path="*"                              element={<HomePage />}               />
      </Routes>
      <BackToTop />
    </div>
  );
}
