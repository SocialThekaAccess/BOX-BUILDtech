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
      headline: ['A live digital command center where every ', 'client,', ' ', 'architect,', ' and ', 'site team', ' stays aligned.'],
      body: 'BOX stands as a favorited, deeply integrated construction operating system. We bridge structural physics with beautiful blueprints. This portal is not just for timeline updates; it compiles raw on-site proof, protecting the pure geometry of your design.',
      highlights: [
        { label: 'More Transparent', desc: 'Direct telemetry access leaves no space for site guesswork or fake status reports.' },
        { label: 'More Controlled', desc: 'Every drawing update instantly propagates down to site tablets, syncing workforces.' },
        { label: 'Faithful to Design', desc: 'Architects audit casting parameters live, validating the exact materials poured.' },
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
      headline: ['Real-time ', 'telemetry', ' and ', 'milestone', ' tracking at every phase.'],
      body: 'Every project phase is mapped, timestamped, and verified. From foundation pour to final handover, BOX tracks structural milestones with precision — giving architects and owners a live window into site reality.',
      highlights: [
        { label: 'Phase Tracking', desc: 'Each construction phase is logged with timestamps and photographic proof.' },
        { label: 'Live Milestones', desc: 'Milestone alerts notify all stakeholders the moment a phase is completed.' },
        { label: 'Delay Forecasting', desc: 'Predictive analytics flag potential delays before they impact the schedule.' },
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
      headline: ['Structural ', 'fidelity', ' verified through ', 'real-time', ' site documentation.'],
      body: 'BOX deploys a continuous documentation protocol on every site. Time-lapse footage, material test reports, and structural audits are compiled into a single verified record — accessible to architects and owners at any time.',
      highlights: [
        { label: 'Time-Lapse Archive', desc: 'Continuous site footage compiled into a searchable visual timeline.' },
        { label: 'Material Audits', desc: 'Every material batch is tested and logged before it touches the structure.' },
        { label: 'Structural Reports', desc: 'Engineer-signed reports uploaded at every critical structural milestone.' },
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
      headline: ['A secure ', 'vault', ' where every ', 'revision', ' is tracked and protected.'],
      body: 'The Drawing Vault is BOX\'s secure design repository. Every drawing revision is version-controlled, architect-approved, and instantly distributed to site teams — ensuring zero deviation from the approved design intent.',
      highlights: [
        { label: 'Version Control', desc: 'Every drawing revision is logged with author, timestamp, and approval status.' },
        { label: 'Instant Distribution', desc: 'Approved drawings reach site tablets within minutes of architect sign-off.' },
        { label: 'Zero Deviation', desc: 'Site teams can only access the latest approved version — no outdated drawings.' },
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
      headline: ['Client, ', 'architect,', ' and site — ', 'synchronized', ' in real time.'],
      body: 'BOX eliminates the communication gap between design intent and site execution. Architects receive live feedback from site, clients get transparent progress updates, and the BOX team bridges every technical decision without friction.',
      highlights: [
        { label: 'Direct Channel', desc: 'Architects communicate directly with BOX site engineers — no middlemen.' },
        { label: 'Client Visibility', desc: 'Owners see exactly what architects see — full transparency, zero filtering.' },
        { label: 'Decision Log', desc: 'Every technical decision is documented, attributed, and archived permanently.' },
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
      headline: ['Where ', 'design intent', ' becomes ', 'built reality', ' — precisely.'],
      body: 'System Alignment is the final layer of the BOX operating system. It ensures that every approved drawing, material specification, and structural parameter is faithfully executed on site — with zero tolerance for deviation.',
      highlights: [
        { label: 'Parameter Lock', desc: 'Structural parameters are locked post-approval and cannot be altered on site.' },
        { label: 'Execution Audit', desc: 'Every executed element is cross-referenced against the approved drawing set.' },
        { label: 'Handover Package', desc: 'A complete as-built documentation package is delivered at project completion.' },
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
              if (part === 'client,' || part === 'architect,' || part === 'site team'
                || part === 'telemetry' || part === 'milestone' || part === 'fidelity'
                || part === 'real-time' || part === 'vault' || part === 'revision'
                || part === 'architect,' || part === 'synchronized' || part === 'design intent'
                || part === 'built reality') {
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
