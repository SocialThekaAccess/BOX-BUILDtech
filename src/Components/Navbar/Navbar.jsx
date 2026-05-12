import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HardHat, Factory, ChevronDown } from 'lucide-react';
import boxLogo from '../../assets/BOX.png';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',       section: 'home',     path: '/'        },
  { label: 'About Us',   section: null,       path: '/about'   },
  { label: 'Services',   section: 'services', path: '/',       hasDropdown: true },
  { label: 'Portfolio',  section: 'portfolio', path: '/'       },
  { label: 'Contact Us', section: null,       path: '/contact' },
];

const SERVICE_ITEMS = [
  { Icon: HardHat,  label: 'Luxury Residential', path: '/services/luxury-residential', desc: 'Premium homes & interiors' },
  { Icon: Factory,  label: 'Design-Build',        path: '/services/design-build',       desc: 'Concept to completion'    },
];

const Navbar = () => {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeNav,      setActiveNav]      = useState('Home');
  const [servicesOpen,   setServicesOpen]   = useState(false);
  const [mobileServOpen, setMobileServOpen] = useState(false);
  const dropdownRef  = useRef(null);
  const closeTimer   = useRef(null);
  const navigate     = useNavigate();
  const location     = useLocation();

  /* Mark active based on current route */
  useEffect(() => {
    if (location.pathname === '/about') {
      setActiveNav('About Us');
    } else if (location.pathname === '/contact') {
      setActiveNav('Contact Us');
    } else if (location.pathname.startsWith('/services')) {
      setActiveNav('Services');
    }
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
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
    if (link.hasDropdown) {
      setServicesOpen((o) => !o);
      return;
    }
    setMenuOpen(false);
    setServicesOpen(false);
    setActiveNav(link.label);

    if (link.path === '/about' || link.path === '/contact') {
      navigate(link.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

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

  const handleServiceItemClick = (item) => {
    setServicesOpen(false);
    setMenuOpen(false);
    setMobileServOpen(false);
    setActiveNav('Services');
    navigate(item.path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setActiveNav('Home');
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setActiveNav('Contact Us');
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              /* Services with dropdown */
              <div
                key={link.label}
                className="nav-dropdown-wrap"
                ref={dropdownRef}
                onMouseEnter={() => {
                  clearTimeout(closeTimer.current);
                  setServicesOpen(true);
                }}
                onMouseLeave={() => {
                  closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
                }}
              >
                <button
                  className={`nav-link nav-link-dropdown ${activeNav === 'Services' ? 'active' : ''}`}
                  onClick={() => handleNavClick(link)}
                  aria-expanded={servicesOpen}
                >
                  {link.label}
                  <ChevronDown
                    size={13}
                    strokeWidth={2.5}
                    className={`nav-chevron ${servicesOpen ? 'open' : ''}`}
                  />
                </button>

                {/* Dropdown panel */}
                <div className={`nav-dropdown ${servicesOpen ? 'open' : ''}`}>
                  <div className="nav-dropdown-header">Our Services</div>
                  {SERVICE_ITEMS.map((item) => {
                    const Icon = item.Icon;
                    return (
                      <button
                        key={item.label}
                        className="nav-dropdown-item"
                        onClick={() => handleServiceItemClick(item)}
                      >
                        <div className="nav-dropdown-icon">
                          <Icon size={16} strokeWidth={1.5} />
                        </div>
                        <div className="nav-dropdown-text">
                          <span className="nav-dropdown-label">{item.label}</span>
                          <span className="nav-dropdown-desc">{item.desc}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <button
                key={link.label}
                className={`nav-link ${activeNav === link.label ? 'active' : ''}`}
                onClick={() => handleNavClick(link)}
              >
                {link.label}
              </button>
            )
          )}
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
        {NAV_LINKS.map((link) =>
          link.hasDropdown ? (
            <div key={link.label} className="mobile-services-wrap">
              <button
                className={`mobile-nav-item mobile-nav-item-dropdown ${activeNav === 'Services' ? 'active' : ''}`}
                onClick={() => setMobileServOpen((o) => !o)}
              >
                {link.label}
                <ChevronDown
                  size={14}
                  strokeWidth={2.5}
                  className={`nav-chevron ${mobileServOpen ? 'open' : ''}`}
                />
              </button>
              {mobileServOpen && (
                <div className="mobile-services-list">
                  {SERVICE_ITEMS.map((item) => {
                    const Icon = item.Icon;
                    return (
                      <button
                        key={item.label}
                        className="mobile-service-item"
                        onClick={() => handleServiceItemClick(item)}
                      >
                        <Icon size={14} strokeWidth={1.5} />
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <button
              key={link.label}
              className={`mobile-nav-item ${activeNav === link.label ? 'active' : ''}`}
              onClick={() => handleNavClick(link)}
            >
              {link.label}
            </button>
          )
        )}
        <button className="btn-gold mobile-cta" onClick={handleContactClick}>
          Get A Quote →
        </button>
      </div>
    </>
  );
};

export default Navbar;
