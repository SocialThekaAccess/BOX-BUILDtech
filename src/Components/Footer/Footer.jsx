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

/* SVG Social Icons */
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a0a0a"/>
  </svg>
);

const SOCIALS = [
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://instagram.com' },
  { label: 'LinkedIn',  Icon: LinkedInIcon,  href: 'https://linkedin.com'  },
  { label: 'Facebook',  Icon: FacebookIcon,  href: 'https://facebook.com'  },
  { label: 'YouTube',   Icon: YouTubeIcon,   href: 'https://youtube.com'   },
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
                <a
                  key={s.label}
                  href={s.href}
                  className="footer-social-btn"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <s.Icon />
                </a>
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
