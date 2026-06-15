// prerender.js — injects correct meta tags into each route's static HTML at build time
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

// ── Per-route meta definitions ──
const ROUTES = [
  {
    url: '/',
    title: 'Construction Company in Mohali & Luxury Home Builders Chandigarh | Box Build Tech',
    description: 'Box Build Tech is a construction company in Mohali offering luxury home building in Chandigarh. We deliver premium plotted residences, luxury villas, farm houses and design build services across Punjab.',
    keywords: 'construction company Mohali, luxury home builders Chandigarh, construction company Chandigarh, home builders Punjab, BOX Buildtech, luxury villa construction Mohali',
    canonical: 'https://www.boxbuildtech.com/',
    ogTitle: 'Construction Company in Mohali & Luxury Home Builders Chandigarh | Box Build Tech',
    ogDescription: 'Box Build Tech is a construction company in Mohali offering luxury home building in Chandigarh. Premium plotted residences, luxury villas and farm houses across Punjab.',
  },
  {
    url: '/about',
    title: 'About Box Build Tech | Construction Company in Chandigarh & Mohali',
    description: 'Learn about Box Build Tech — a system-driven construction company delivering luxury villa construction, premium plotted residences and farm house projects across Chandigarh, Mohali & Punjab.',
    keywords: 'about Box Build Tech, construction company Chandigarh, luxury home builders Mohali, building contractor Punjab, premium construction New Chandigarh',
    canonical: 'https://www.boxbuildtech.com/about',
    ogTitle: 'About Box Build Tech | Construction Company in Chandigarh & Mohali',
    ogDescription: 'Box Build Tech turns ideas into experiences. Quality-first construction with 14+ years of experience across Chandigarh, Mohali & Punjab.',
  },
  {
    url: '/contact',
    title: 'Contact Box Build Tech | Start Your Construction Project Today',
    description: 'Get in touch with Box Build Tech. Call +91 7657945469, email start@boxbuildtech.com. Construction company serving Chandigarh, Mohali & New Chandigarh for luxury villas and farm houses.',
    keywords: 'contact Box Build Tech, construction company contact Chandigarh, start construction project Mohali, luxury villa inquiry Punjab, farm house construction contact',
    canonical: 'https://www.boxbuildtech.com/contact',
    ogTitle: 'Contact Box Build Tech | Start Your Construction Project Today',
    ogDescription: 'Ready to build? Reach out to Box Build Tech and start your luxury villa, farm house or plotted residence project today.',
  },
  {
    url: '/portfolio',
    title: 'Portfolio | Box Build Tech – Before & After Construction Transformations',
    description: "Explore Box Build Tech's portfolio of 25+ premium construction projects across Chandigarh, Mohali & New Chandigarh. See stunning before & after transformations of luxury villas and residences.",
    keywords: 'construction portfolio Chandigarh, before after villa transformation, luxury villa projects Mohali, premium residential construction, Box Build Tech projects',
    canonical: 'https://www.boxbuildtech.com/portfolio',
    ogTitle: 'Portfolio | Box Build Tech – Before & After Construction Transformations',
    ogDescription: '25+ premium projects completed across Chandigarh & Mohali. Drag the slider to see our before & after construction transformations.',
  },
  {
    url: '/services/luxury-residential',
    title: 'Luxury Residential Projects Chandigarh & Premium Residential Construction | Box Build Tech',
    description: 'Box Build Tech creates luxury residential projects in Chandigarh and premium residential construction across Mohali & Punjab. Expert builders for high-end homes and residences.',
    keywords: 'luxury residential projects Chandigarh, premium residential construction Mohali, luxury home builders Punjab, high end residential construction, Box Build Tech',
    canonical: 'https://www.boxbuildtech.com/services/luxury-residential',
    ogTitle: 'Luxury Residential Projects Chandigarh & Premium Residential Construction | Box Build Tech',
    ogDescription: 'Expert luxury residential builders with 14+ years of experience. Premium residential construction across Chandigarh, Mohali & Punjab.',
  },
  {
    url: '/services/design-build',
    title: 'Design Build Contractors Chandigarh & Residential Design Build Services | Box Build Tech',
    description: 'Box Build Tech offers design build contractors in Chandigarh and residential design build services across Mohali & Punjab. One team managing design and construction end to end.',
    keywords: 'design build contractors Chandigarh, residential design build services Mohali, design build company Punjab, design and build Chandigarh, Box Build Tech',
    canonical: 'https://www.boxbuildtech.com/services/design-build',
    ogTitle: 'Design Build Contractors Chandigarh & Residential Design Build Services | Box Build Tech',
    ogDescription: 'One team, total accountability. Box Build Tech manages design and construction for premium residential projects across Chandigarh & Mohali.',
  },
  {
    url: '/services/premium-plotted-residences',
    title: 'Premium Plotted Development Chandigarh & Luxury Plotted Residences Mohali | Box Build Tech',
    description: 'Box Build Tech offers premium plotted development in Chandigarh and luxury plotted residences in Mohali. Own your land and build your dream home across Punjab with freedom and privacy.',
    keywords: 'premium plotted development Chandigarh, luxury plotted residences Mohali, residential plots Punjab, buy plot Chandigarh, plotted development Box Build Tech',
    canonical: 'https://www.boxbuildtech.com/services/premium-plotted-residences',
    ogTitle: 'Premium Plotted Development Chandigarh & Luxury Plotted Residences Mohali | Box Build Tech',
    ogDescription: 'Own your land, build your dream home. Premium plotted development in Chandigarh & luxury plotted residences in Mohali.',
  },
  {
    url: '/services/luxury-palace-houses',
    title: 'Luxury Villa Construction Chandigarh & Palace House Builders Punjab | Box Build Tech',
    description: 'Box Build Tech provides luxury villa construction in Chandigarh and palace house building in Punjab. Grand spacious homes with elegant design, premium finishes and peaceful living.',
    keywords: 'luxury villa construction Chandigarh, palace house builders Punjab, luxury palace houses Mohali, grand villa construction Punjab, Box Build Tech',
    canonical: 'https://www.boxbuildtech.com/services/luxury-palace-houses',
    ogTitle: 'Luxury Villa Construction Chandigarh & Palace House Builders Punjab | Box Build Tech',
    ogDescription: 'Box Build Tech delivers luxury villa construction in Chandigarh and palace house building across Punjab with grand design and premium finishes.',
  },
  {
    url: '/services/large-luxury-farm-houses',
    title: 'Farm House Construction Punjab & Luxury Farm House Builders Mohali | Box Build Tech',
    description: 'Box Build Tech offers farm house construction in Punjab and luxury farm house builders in Mohali. Sprawling luxury estates with spacious layouts, open surroundings and premium construction.',
    keywords: 'farm house construction Punjab, luxury farm house builders Mohali, farm house Chandigarh, luxury farm house Punjab, Box Build Tech farm house',
    canonical: 'https://www.boxbuildtech.com/services/large-luxury-farm-houses',
    ogTitle: 'Farm House Construction Punjab & Luxury Farm House Builders Mohali | Box Build Tech',
    ogDescription: 'Box Build Tech offers farm house construction in Punjab and luxury farm house building in Mohali. Sprawling estates with premium construction.',
  },
  {
    url: '/portal',
    title: 'Client Portal & Project Operating System | Box Build Tech',
    description: 'The Box Build Tech Client Portal — a smart digital platform connecting clients, architects, and site teams with real-time project updates, drawing vault, site stewardship, and live progress tracking.',
    keywords: 'construction client portal, project management portal, real time construction updates, drawing vault, site stewardship, Box Build Tech portal',
    canonical: 'https://www.boxbuildtech.com/portal',
    ogTitle: 'Client Portal & Project Operating System | Box Build Tech',
    ogDescription: 'Stay connected with your construction project. Real-time updates, drawing management, and site monitoring — all in one place.',
  },
];

// Read the built client index.html as the template
const rawTemplate = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');

function stripBaseHeadTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/g, '')
    .replace(/<meta\s+name="(description|keywords|robots)"[^>]*\/?>/gi, '')
    .replace(/<meta\s+property="og:[^"]*"[^>]*\/?>/gi, '')
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*\/?>/gi, '')
    .replace(/<link\s+rel="canonical"[^>]*\/?>/gi, '')
    .replace(/\n\s*\n\s*\n/g, '\n\n');
}

const cleanTemplate = stripBaseHeadTags(rawTemplate);

for (const route of ROUTES) {
  const headTags = `
    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    <meta name="keywords" content="${route.keywords}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${route.canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${route.canonical}" />
    <meta property="og:title" content="${route.ogTitle}" />
    <meta property="og:description" content="${route.ogDescription}" />
    <meta property="og:image" content="https://www.boxbuildtech.com/og-image.jpg" />
    <meta property="og:site_name" content="Box Build Tech" />
    <meta property="og:locale" content="en_IN" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${route.canonical}" />
    <meta name="twitter:title" content="${route.ogTitle}" />
    <meta name="twitter:description" content="${route.ogDescription}" />
    <meta name="twitter:image" content="https://www.boxbuildtech.com/og-image.jpg" />`;

  const pageHtml = cleanTemplate.replace('</head>', `${headTags}\n  </head>`);

  const routePath = route.url === '/' ? '/index.html' : `${route.url}/index.html`;
  const outputPath = toAbsolute(`dist${routePath}`);

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, pageHtml);

  console.log(`Prerendered: ${route.url} -> dist${routePath}`);
}

console.log('\nPrerender complete — all routes have static HTML with correct meta tags.');
