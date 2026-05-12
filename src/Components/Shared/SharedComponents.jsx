const G    = '#E9A102';
const G2   = '#f0b429';
const BG   = '#0a0a0a';
const TXT  = '#ffffff';
const TXTS = 'rgba(255,255,255,0.5)';


export function GoldLine({ w = "60px" }) {
  return (
    <div
      style={{
        width: w,
        height: 3,
        background: `linear-gradient(90deg, ${G}, ${G2})`,
        borderRadius: 2,
        margin: "16px 0",
      }}
    />
  );
}

export function Tag({ children }) {
  return (
    <span
      style={{
        display: "inline-block",
        border: `1px solid ${G}`,
        color: G2,
        padding: "4px 16px",
        borderRadius: 2,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 3,
        textTransform: "uppercase",
        marginBottom: 16,
        fontFamily: "'Barlow Condensed', sans-serif",
      }}
    >
      {children}
    </span>
  );
}

export function LogoMark({ size = 40, light = false }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ position: "relative", width: size, height: size }}>
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
          <rect x="4" y="8" width="32" height="24" rx="2" fill={G} opacity="0.15" />
          <rect x="4" y="8" width="32" height="24" rx="2" stroke={G} strokeWidth="2" />
          <line x1="4" y1="20" x2="36" y2="20" stroke={G} strokeWidth="1.5" opacity="0.6" />
          <line x1="20" y1="8" x2="20" y2="32" stroke={G} strokeWidth="1.5" opacity="0.6" />
          <path d="M4 8 L20 2 L36 8" stroke={G2} strokeWidth="1.5" fill="none" />
          <path d="M36 8 L36 32" stroke={G} strokeWidth="1.5" />
        </svg>
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: size * 0.7,
            letterSpacing: 4,
            color: light ? BG : TXT,
            lineHeight: 1,
          }}
        >
          B<span style={{ color: G }}>O</span>X
        </div>
        <div
          style={{
            fontSize: size * 0.18,
            color: TXTS,
            letterSpacing: 2,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 500,
            textTransform: "uppercase",
            lineHeight: 1,
            marginTop: 1,
          }}
        >
          Building Output Excellence
        </div>
      </div>
    </div>
  );
}