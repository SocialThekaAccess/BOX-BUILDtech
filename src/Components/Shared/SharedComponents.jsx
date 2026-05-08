import React from 'react';

/* ============================================================
   GOLD LINE — decorative horizontal divider
   Usage: <GoldLine />
   ============================================================ */
export const GoldLine = ({ width = '60px', margin = '0' }) => (
  <div
    style={{
      width,
      height: '2px',
      background: 'linear-gradient(90deg, #C9A84C, #E2C97E, #C9A84C)',
      margin,
      borderRadius: '2px',
    }}
  />
);

/* ============================================================
   TAG — small label above section headings
   Usage: <Tag>Our Services</Tag>
   ============================================================ */
export const Tag = ({ children }) => (
  <span
    style={{
      display: 'inline-block',
      fontSize: '0.75rem',
      fontWeight: '600',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: '#C9A84C',
      border: '1px solid rgba(201,168,76,0.4)',
      padding: '4px 14px',
      borderRadius: '20px',
      marginBottom: '16px',
    }}
  >
    {children}
  </span>
);

/* ============================================================
   LOGOMARK — brand logo text
   Usage: <LogoMark />
   ============================================================ */
export const LogoMark = ({ size = '1.4rem' }) => (
  <span
    style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: size,
      fontWeight: '700',
      letterSpacing: '0.08em',
      color: '#FFFFFF',
    }}
  >
    LUXE<span style={{ color: '#C9A84C' }}>BUILD</span>
  </span>
);
