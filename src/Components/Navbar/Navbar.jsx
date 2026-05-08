import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import boxLogo from '../../assets/BOX.png';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',         section: 'home'         },
  { label: 'About Us',     section: 'about'        },
  { label: 'Services',     section: 'services'     },
  { label: 'Projects',     section: 'projects'     },
  { label: 'Testimonials', section: 'testimonials' },
];

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const navigate  = useNavigate();
  const location  = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Highlight active section on scroll */
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.section));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = NAV_LINKS.find((l) => l.section === entry.target.id);
            if (match) setActiveNav(match.label);
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [location]);

  const scrollTo = (section) => {
    setMenuOpen(false);
    // Always clean the URL — no hash
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Replace state to remove any hash from URL
      window.history.replaceState(null, '', '/');
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`nav-root ${scrolled ? 'scrolled' : 'top'}`}>

        {/* ── Logo ── */}
        <button className="nav-logo" onClick={() => scrollTo('home')} aria-label="Go to home">
          <img src={boxLogo} alt="BOX Logo" className="nav-logo-img" />
        </button>

        {/* ── Desktop Nav ── */}
        <div className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              className={`nav-link ${activeNav === link.label ? 'active' : ''}`}
              onClick={() => { setActiveNav(link.label); scrollTo(link.section); }}
            >
              {link.label}
            </button>
          ))}
          <button
            className="btn-gold"
            onClick={() => { setActiveNav('Contact'); scrollTo('contact'); }}
          >
            Get A Quote →
          </button>
        </div>

        {/* ── Hamburger ── */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link.label}
            className={`mobile-nav-item ${activeNav === link.label ? 'active' : ''}`}
            onClick={() => { setActiveNav(link.label); scrollTo(link.section); }}
          >
            {link.label}
          </button>
        ))}
        <button
          className="btn-gold mobile-cta"
          onClick={() => { setActiveNav('Contact'); scrollTo('contact'); }}
        >
          Get A Quote →
        </button>
      </div>
    </>
  );
};

export default Navbar;
