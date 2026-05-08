import boxLogo from '../../assets/BOX.png';
import './Footer.css';

const scrollTo = (id) => {
  window.history.replaceState(null, '', '/');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const QUICK_LINKS = [
  { label: 'Home',         id: 'home'         },
  { label: 'About Us',     id: 'about'        },
  { label: 'Services',     id: 'services'     },
  { label: 'Projects',     id: 'projects'     },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact',      id: 'contact'      },
];

const SERVICES = [
  'Construction',
  'Interior Design',
  'Architecture',
  'Renovation',
  'Landscaping',
  'Project Management',
];

const CONTACT_INFO = [
  { icon: '👤', text: 'Pooja Yadav — Founder & Director' },
  { icon: '📍', text: 'New Chandigarh, India'            },
  { icon: '✉️', text: 'hello@boxbuildtech.com'           },
  { icon: '🌐', text: 'www.boxbuildtech.com'             },
];

const SOCIALS = [
  { label: 'Instagram', icon: 'IG' },
  { label: 'LinkedIn',  icon: 'LI' },
  { label: 'Facebook',  icon: 'FB' },
  { label: 'YouTube',   icon: 'YT' },
];

export default function Footer() {
  return (
    <footer className="footer">

      {/* ── Top Gold Bar ── */}
      <div className="footer-top-bar" />

      <div className="footer-inner">

        {/* ── Main Grid ── */}
        <div className="footer-grid">

          {/* Col 1 — Brand */}
          <div className="footer-brand-col">
            <img src={boxLogo} alt="BOX Built Tech" className="footer-logo" />
            <p className="footer-tagline">
              Building Output eXcellence — a leading construction &amp; development
              company committed to delivering exceptional projects, on time, every time.
            </p>
            {/* Socials */}
            <div className="footer-socials">
              {SOCIALS.map((s) => (
                <button
                  key={s.label}
                  className="footer-social-btn"
                  aria-label={s.label}
                  onClick={(e) => e.preventDefault()}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {QUICK_LINKS.map((l) => (
                <li key={l.id}>
                  <button className="footer-link" onClick={() => scrollTo(l.id)}>
                    <span className="footer-link-arrow">→</span> {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links-list">
              {SERVICES.map((s) => (
                <li key={s}>
                  <button className="footer-link" onClick={() => scrollTo('services')}>
                    <span className="footer-link-arrow">→</span> {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact-list">
              {CONTACT_INFO.map((c) => (
                <li key={c.text} className="footer-contact-item">
                  <span className="footer-contact-icon">{c.icon}</span>
                  <span className="footer-contact-text">{c.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="footer-divider" />

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} BOX Buildtech. Building Output eXcellence. All rights reserved.
          </p>
          <div className="footer-legal">
            <button className="footer-legal-link">Privacy Policy</button>
            <span className="footer-legal-dot">·</span>
            <button className="footer-legal-link">Terms of Service</button>
            <span className="footer-legal-dot">·</span>
            <button className="footer-legal-link">Cookie Policy</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
