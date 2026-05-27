import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  X, Layers, TrendingUp, Camera, FolderLock,
  Users, GitMerge, Activity, ArrowRight, ChevronRight
} from 'lucide-react';
import './Portal.css';

const SECTIONS = [
  {
    id: 1,
    Icon: Layers,
    title: 'BOX Operating System',
    sub: 'Favorite partner for architects & owners',
    content: {
      tag: 'THE ARCHITECT REVOLUTION',
      headline: ['A smart digital platform where ', 'clients,', ' ', 'architects,', ' and ', 'site teams', ' stay connected.'],
      body: 'BOX-BuildTech helps manage construction smoothly by combining smart planning with quality execution. This portal does more than provide project updates — it shares real on-site progress, photos, and reports to ensure the design is built exactly as planned.',
      highlights: [
        { label: 'More Transparent', desc: 'Get real-time project updates with clear site progress, reducing confusion and miscommunication.' },
        { label: 'More Controlled', desc: 'Any drawing or design update is instantly shared with the site team, keeping everyone on the same page.' },
        { label: 'Faithful to Design', desc: 'Architects can monitor construction progress live to ensure the right materials and design standards are followed.' },
      ],
      cta: 'Explore Project Evolution',
    },
  },
  {
    id: 2,
    Icon: TrendingUp,
    title: 'Project Evolution',
    sub: 'Time, telemetry & live progress roadmap',
    content: {
      tag: 'LIVE PROGRESS ROADMAP',
      headline: ['Every stage of the project is ', 'updated', ' all the ', 'time.'],
      body: 'From the beginning when the foundation work starts to the handover, BOX-BuildTech keeps the architects and the clients informed about what is happening on the site and how the project is going — with accurate information and live updates.',
      highlights: [
        { label: 'Phase Tracking', desc: 'Each stage of construction is recorded with proper updates, timestamps, and site photos.' },
        { label: 'Live Milestones', desc: 'Clients and stakeholders receive instant updates whenever a project milestone is completed.' },
        { label: 'Delay Forecasting', desc: 'Smart tracking helps identify possible delays early, allowing teams to take action on time.' },
      ],
      cta: 'Explore Site Stewardship',
    },
  },
  {
    id: 3,
    Icon: Camera,
    title: 'Site Stewardship',
    sub: 'Structural fidelity & real-site time-lapse',
    content: {
      tag: 'ON-SITE PROOF ENGINE',
      headline: ['Construction quality monitored through ', 'real-time', ' site ', 'documentation.'],
      body: 'BOX-BuildTech keeps a complete record of site activities, material checks, and structural updates — allowing architects and clients to review project progress anytime, from anywhere.',
      highlights: [
        { label: 'Time-Lapse Archive', desc: 'Site progress is recorded continuously and organized into an easy-to-view visual timeline.' },
        { label: 'Material Audits', desc: 'All construction materials are checked and documented before being used on site.' },
        { label: 'Structural Reports', desc: 'Important structural updates and engineer-approved reports are uploaded at every major construction stage.' },
      ],
      cta: 'Explore The Drawing Vault',
    },
  },
  {
    id: 4,
    Icon: FolderLock,
    title: 'The Drawing Vault',
    sub: 'Secure repository keeping designs faithful',
    content: {
      tag: 'DESIGN INTEGRITY SYSTEM',
      headline: ['A secure platform where all project ', 'drawings', ' and ', 'revisions', ' are safely stored.'],
      body: 'The Drawing Vault helps architects and site teams stay updated with the latest approved drawings, reducing errors and ensuring accurate execution on site.',
      highlights: [
        { label: 'Version Control', desc: 'Every drawing update is recorded with details like revision history, approval status, and update time.' },
        { label: 'Instant Distribution', desc: 'Approved drawings are quickly shared with site teams for smooth coordination.' },
        { label: 'Zero Deviation', desc: 'Site teams always work with the latest approved drawings, avoiding confusion from outdated versions.' },
      ],
      cta: 'Explore Architect Sync',
    },
  },
  {
    id: 5,
    Icon: Users,
    title: 'Architect Sync',
    sub: 'Connecting client & architect in high fidelity',
    content: {
      tag: 'HIGH-FIDELITY COLLABORATION',
      headline: ['Clients, ', 'architects,', ' and site teams — ', 'connected', ' with real-time updates.'],
      body: 'BOX-BuildTech makes project coordination simple by ensuring everyone stays informed throughout the construction process — with clear communication between clients, architects, and site engineers.',
      highlights: [
        { label: 'Direct Channel', desc: 'Architects can communicate directly with site engineers for faster and clearer coordination.' },
        { label: 'Client Visibility', desc: 'Clients receive transparent project updates and can track progress at every stage.' },
        { label: 'Decision Log', desc: 'All important project decisions and updates are properly recorded and stored for future reference.' },
      ],
      cta: 'Explore System Alignment',
    },
  },
  {
    id: 6,
    Icon: GitMerge,
    title: 'System Alignment',
    sub: 'The designs-to-execution workflow',
    content: {
      tag: 'EXECUTION WORKFLOW',
      headline: ['Where approved ', 'designs', ' are executed ', 'accurately', ' on site.'],
      body: 'System Alignment ensures that every drawing, material detail, and structural specification is followed correctly throughout the construction process — with no room for error.',
      highlights: [
        { label: 'Parameter Lock', desc: 'Approved structural details and specifications are fixed and cannot be changed without approval.' },
        { label: 'Execution Audit', desc: 'All construction work is checked and compared with the approved drawings to maintain accuracy.' },
        { label: 'Handover Package', desc: 'A complete set of final project documents and records is provided after project completion.' },
      ],
      cta: 'Get Started',
    },
  },
];

const LOG_ITEMS = [
  { status: 'active', text: 'SYS_INIT: Client Portal Engine Live' },
  { status: 'ok',     text: 'FIDELITY: LOD 400 Design match score 99.8%' },
  { status: 'ok',     text: 'AUDIT: Rebar test report approved on site.' },
];

export default function Portal() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const section = SECTIONS[active];

  const handleBack = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % SECTIONS.length);
  };

  return (
    <div className="portal-root">

      {/* ══ TOP BAR ══ */}
      <div className="portal-topbar">
        {/* <div className="portal-topbar-left">
          <span className="portal-protocol-badge">
            ⚡ SYSTEM PORTAL PROTOCOL // CLIENT &amp; ARCHITECT INTERACTIVE DEMO
          </span>
        </div> */}
        {/* <div className="portal-topbar-right">
          <div className="portal-telemetry">
            <span className="portal-telemetry-label">Telemetry Node:</span>
            <span className="portal-telemetry-value online">ONLINE</span>
          </div>
          <div className="portal-telemetry">
            <span className="portal-telemetry-label">Revision Protocol:</span>
            <span className="portal-telemetry-value">LOD 400</span>
          </div>
          <button className="portal-exit-btn" onClick={handleBack}>
            <X size={14} strokeWidth={2} />
            Exit Demo
          </button>
        </div> */}
      </div>

      {/* ══ HERO HEADER ══ */}
      <div className="portal-header">
        <h1 className="portal-main-title">
          The BOX <span className="portal-gold-text">Client Portal &amp; Operating System</span>
        </h1>
        <p className="portal-main-desc">
          As we promise, <strong>BOX is the favorite system-driven construction partner</strong> for
          architects and owners. Review our live command center dedicated to maintaining structural
          integrity and absolute tracking control.
        </p>
      </div>

      {/* ══ MAIN LAYOUT ══ */}
      <div className="portal-body">

        {/* ── LEFT SIDEBAR ── */}
        <aside className="portal-sidebar">
          <div className="portal-sidebar-label">SECTION WALKTHROUGH</div>
          <nav className="portal-nav">
            {SECTIONS.map((s, i) => {
              const Icon = s.Icon;
              return (
                <button
                  key={s.id}
                  className={`portal-nav-item${active === i ? ' portal-nav-item--active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <div className="portal-nav-icon">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <div className="portal-nav-text">
                    <span className="portal-nav-title">{s.id}. {s.title}</span>
                    <span className="portal-nav-sub">{s.sub}</span>
                  </div>
                  {active === i && <ChevronRight size={14} className="portal-nav-chevron" />}
                </button>
              );
            })}
          </nav>

          {/* System Log */}
          <div className="portal-log">
            <div className="portal-log-header">
              <Activity size={12} strokeWidth={2} />
              <span>SYSTEM LOG FEED</span>
              <span className="portal-log-dot" />
              <span className="portal-log-active">Active Link</span>
            </div>
            {LOG_ITEMS.map((item, i) => (
              <div key={i} className={`portal-log-item portal-log-item--${item.status}`}>
                <span className="portal-log-bullet" />
                {item.text}
              </div>
            ))}
          </div>
        </aside>

        {/* ── RIGHT CONTENT ── */}
        <main className="portal-content" key={active}>

          <div className="portal-content-tag">{section.content.tag}</div>

          <h2 className="portal-content-headline">
            {section.content.headline.map((part, i) => {
              if (part === 'clients,' || part === 'architects,' || part === 'site teams'
                || part === 'updated' || part === 'time.' || part === 'real-time'
                || part === 'documentation.' || part === 'drawings' || part === 'revisions'
                || part === 'connected' || part === 'designs' || part === 'accurately') {
                return <span key={i} className="portal-headline-gold">{part}</span>;
              }
              return <span key={i}>{part}</span>;
            })}
          </h2>

          <p className="portal-content-body">{section.content.body}</p>

          <div className="portal-highlights">
            {section.content.highlights.map((h, i) => (
              <div key={i} className="portal-highlight">
                <div className="portal-highlight-bar" />
                <div>
                  <div className="portal-highlight-label">{h.label}</div>
                  <div className="portal-highlight-desc">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="portal-hint">Click section links on the left to test live features</p>

          <div className="portal-content-footer">
            <button className="portal-cta-btn" onClick={handleNext}>
              {section.content.cta}
              <ArrowRight size={16} strokeWidth={2} />
            </button>
          </div>

        </main>
      </div>

      {/* ══ BOTTOM FOOTER ══ */}
      <div className="portal-footer">
        <p className="portal-footer-text">
          BOX continues to elevate how architects protect their spatial logic. If you are ready to
          integrate your layout parameters now, initialize the alignment form below.
        </p>
        <div className="portal-footer-actions">
          <button className="portal-footer-back" onClick={handleBack}>
            ← Back to Landing Page
          </button>
          <button className="portal-footer-start" onClick={() => { navigate('/contact'); window.scrollTo({ top: 0 }); }}>
            Get Started
          </button>
        </div>
      </div>

    </div>
  );
}