import './ChooseUs.css';

/* ── Data ── */
const TRUST_CARDS = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: 'Architect-First',
    desc: "We don't just 'build'. We partner with architects to ensure their technical vision is protected from site-office compromises.",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Design Accuracy',
    desc: '100% adherence to the blueprint. We verify every dimension and finish to ensure the outcome matches the original design intent.',
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Transparent Approach',
    desc: 'Real-time access to site logs, photos, and project financials via your dashboard. No hidden costs. Total accountability.',
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Focused Execution',
    desc: 'We manage all site labor, logic, and supply chains. You and your architect focus on design; we handle the structural soul.',
  },
];

/* ── Building icon SVG ── */
const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <rect x="3" y="3" width="7" height="18" />
    <rect x="14" y="8" width="7" height="13" />
    <line x1="3" y1="21" x2="21" y2="21" />
    <line x1="7" y1="7" x2="7" y2="7" />
    <line x1="17" y1="12" x2="17" y2="12" />
  </svg>
);

/* ── TrustBOX Component ── */
export default function TrustBOX() {
  return (
    <section className="trust-section">
      {/* Background layer */}
      <div className="trust-bg" aria-hidden="true" />

      <div className="trust-container">
        {/* ── Header ── */}
        <div className="trust-header">
          <div className="trust-icon-row">
            <div className="trust-icon-line" />
            <div className="trust-icon-building">
              <BuildingIcon />
            </div>
            <div className="trust-icon-line right" />
          </div>

          <h2 className="trust-title">
            Why Architects<br />
            &amp; Clients <span>Trust BOX</span>
          </h2>

          <p className="trust-subtitle">
            Built on precision, transparency, and uncompromising execution.
          </p>
          <div className="trust-subtitle-line" />
        </div>

        {/* ── Cards ── */}
        <div className="trust-grid">
          {TRUST_CARDS.map((card) => (
            <div className="trust-card" key={card.id}>
              {/* top glow via ::before pseudo — handled in CSS */}

              <div className="trust-card-icon">
                {card.icon}
              </div>

              <h3 className="trust-card-title">{card.title}</h3>
              <div className="trust-card-divider" />
              <p className="trust-card-desc">{card.desc}</p>

              {/* dot pattern */}
              <div className="trust-card-dots" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}