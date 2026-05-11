import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import boxLogo from '../../assets/BOX.png';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',         section: 'home',         path: '/'        },
  { label: 'About Us',     section: null,           path: '/about'   },
  { label: 'Services',     section: 'services',     path: '/'        },
  { label: 'Projects',     section: 'projects',     path: '/'        },
  { label: 'Contact Us',   section: null,           path: '/contact' },
];

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const navigate  = useNavigate();
  const location  = useLocation();

  /* Mark active based on current route */
  useEffect(() => {
    if (location.pathname === '/about') {
      setActiveNav('About Us');
    } else if (location.pathname === '/contact') {
      setActiveNav('Contact Us');
    }
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Highlight active section on scroll — only on home page */
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = NAV_LINKS
      .filter((l) => l.section)
      .map((l) => document.getElementById(l.section));

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

  const handleNavClick = (link) => {
    setMenuOpen(false);
    setActiveNav(link.label);

    /* About Us / Contact Us → dedicated pages */
    if (link.path === '/about' || link.path === '/contact') {
      navigate(link.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    /* All other links → scroll on home page */
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      window.history.replaceState(null, '', '/');
      document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    setActiveNav('Home');
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    setMenuOpen(false);
    setActiveNav('Contact');
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      window.history.replaceState(null, '', '/');
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`nav-root ${scrolled ? 'scrolled' : 'top'}`}>

        {/* ── Logo ── */}
        <button className="nav-logo" onClick={handleLogoClick} aria-label="Go to home">
          <img src={boxLogo} alt="BOX Logo" className="nav-logo-img" />
        </button>

        {/* ── Desktop Nav ── */}
        <div className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              className={`nav-link ${activeNav === link.label ? 'active' : ''}`}
              onClick={() => handleNavClick(link)}
            >
              {link.label}
            </button>
          ))}
          <button className="btn-gold" onClick={handleContactClick}>
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
            onClick={() => handleNavClick(link)}
          >
            {link.label}
          </button>
        ))}
        <button className="btn-gold mobile-cta" onClick={handleContactClick}>
          Get A Quote →
        </button>
      </div>
    </>
  );
};

export default Navbar;
