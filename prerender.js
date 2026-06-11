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
    title: 'Box BuildTech | Smart Construction & Building Solutions in Chandigarh',
    description: 'BOX Buildtech is a trusted construction company in Chandigarh offering luxury villa construction, design & build services, and system-driven project management across Chandigarh, Mohali & New Chandigarh.',
    keywords: 'construction company Chandigarh, luxury villa builders Mohali, design build services Chandigarh, building contractors New Chandigarh, premium residential construction, BOX Buildtech',
    canonical: 'https://www.boxbuildtech.com/',
    ogTitle: 'Box BuildTech | Smart Construction & Building Solutions in Chandigarh',
    ogDescription: 'BOX Buildtech is a leading construction and development company delivering innovative, reliable, and system-driven construction solutions. We turn your vision into reality with quality and excellence.',
  },
  {
    url: '/about',
    title: 'About BOX Buildtech | Premium Construction Company in Chandigarh',
    description: 'Learn about BOX Buildtech — a system-driven construction company with 14+ years of experience delivering premium villa construction, interior design, and architecture services across Chandigarh, Mohali & New Chandigarh.',
    keywords: 'about BOX Buildtech, construction company Chandigarh, premium villa builders, building contractor Mohali, New Chandigarh construction',
    canonical: 'https://www.boxbuildtech.com/about',
    ogTitle: 'About BOX Buildtech | Premium Construction Company in Chandigarh',
    ogDescription: 'BOX Buildtech turns ideas into experiences. Quality-first construction, client-centered approach, and honest work with 14+ years of experience.',
  },
  {
    url: '/contact',
    title: 'Contact BOX Buildtech | Start Your Construction Project Today',
    description: 'Get in touch with BOX Buildtech. Call +91 7657945469, email start@boxbuildtech.com, or fill out our project form. Serving Chandigarh, Mohali & New Chandigarh.',
    keywords: 'contact BOX Buildtech, construction company contact Chandigarh, start construction project, building contractor inquiry, villa construction Mohali',
    canonical: 'https://www.boxbuildtech.com/contact',
    ogTitle: 'Contact BOX Buildtech | Start Your Construction Project Today',
    ogDescription: 'Ready to build? Reach out to BOX Buildtech and start your luxury villa or residential project today. Based in New Chandigarh, serving Mohali & Chandigarh.',
  },
  {
    url: '/portfolio',
    title: 'Portfolio | BOX Buildtech – Before & After Construction Transformations',
    description: "Explore BOX Buildtech's portfolio of 25+ premium construction projects across Chandigarh, Mohali & New Chandigarh. See stunning before & after transformations of luxury villas and residences.",
    keywords: 'construction portfolio Chandigarh, before after villa transformation, luxury villa projects Mohali, premium residential construction, BOX Buildtech projects',
    canonical: 'https://www.boxbuildtech.com/portfolio',
    ogTitle: 'Portfolio | BOX Buildtech – Before & After Construction Transformations',
    ogDescription: '25+ premium projects completed across Chandigarh & Mohali. Drag the slider to see our before & after construction transformations.',
  },
  {
    url: '/services/luxury-residential',
    title: 'Luxury Villa Construction in Chandigarh | BOX Buildtech',
    description: 'BOX Buildtech specialises in luxury villa construction across Chandigarh, Mohali & New Chandigarh. We work closely with architects to deliver premium residential projects with quality finishing and structural precision.',
    keywords: 'luxury villa construction Chandigarh, high end residential builders, villa construction Mohali, premium home builders New Chandigarh, villa architects Chandigarh',
    canonical: 'https://www.boxbuildtech.com/services/luxury-residential',
    ogTitle: 'Luxury Villa Construction in Chandigarh | BOX Buildtech',
    ogDescription: 'Expert villa builders with 14+ years of experience. From foundation to final finish — quality construction for luxury homes in Chandigarh, Mohali & New Chandigarh.',
  },
  {
    url: '/services/design-build',
    title: 'Design & Build Services in Chandigarh | BOX Buildtech',
    description: 'BOX Buildtech offers complete Design & Build services for luxury villas in Chandigarh, Mohali & New Chandigarh. We partner with architects to handle construction from planning to final handover.',
    keywords: 'design build services Chandigarh, design and build villa Mohali, construction partner for architects, luxury villa design build, end to end construction Chandigarh',
    canonical: 'https://www.boxbuildtech.com/services/design-build',
    ogTitle: 'Design & Build Services in Chandigarh | BOX Buildtech',
    ogDescription: 'One team, total accountability. BOX Buildtech manages design coordination and construction execution for premium residential villas.',
  },
  {
    url: '/services/premium-plotted-residences',
    title: 'Premium Plotted Residences in Chandigarh | BOX Buildtech',
    description: 'Explore premium plotted residences by BOX Buildtech in Chandigarh, Mohali & New Chandigarh. Own your land, build your dream home your way — with freedom, privacy, and strong long-term investment value.',
    keywords: 'premium plotted residences Chandigarh, residential plots Mohali, plots New Chandigarh, buy residential plot Chandigarh, plotted development BOX Buildtech',
    canonical: 'https://www.boxbuildtech.com/services/premium-plotted-residences',
    ogTitle: 'Premium Plotted Residences in Chandigarh | BOX Buildtech',
    ogDescription: 'Own your land, build your dream home your way. Premium plotted residences in Chandigarh, Mohali & New Chandigarh.',
  },
  {
    url: '/services/luxury-palace-houses',
    title: 'Luxury Palace Houses in Chandigarh | BOX Buildtech',
    description: 'Discover luxury palace houses by BOX Buildtech in Chandigarh, Mohali and New Chandigarh. Spacious layouts, elegant design, peaceful living and long-term value for modern families.',
    keywords: 'luxury palace houses Chandigarh, luxury homes Mohali, palace style house New Chandigarh, premium family homes Chandigarh, spacious luxury houses, BOX Buildtech',
    canonical: 'https://www.boxbuildtech.com/services/luxury-palace-houses',
    ogTitle: 'Luxury Palace Houses in Chandigarh | BOX Buildtech',
    ogDescription: 'Experience royal living with luxury palace houses crafted for modern families by BOX Buildtech.',
  },
  {
    url: '/services/large-luxury-farm-houses',
    title: 'Large Luxury Farm Houses in Chandigarh | BOX Buildtech',
    description: 'Explore large luxury farm houses by BOX Buildtech in Chandigarh, Mohali and New Chandigarh. Experience open-space living, privacy, elegant comfort and long-term value.',
    keywords: 'large luxury farm houses Chandigarh, luxury farm house Mohali, farm house living New Chandigarh, premium farm house builders, private luxury estates, BOX Buildtech',
    canonical: 'https://www.boxbuildtech.com/services/large-luxury-farm-houses',
    ogTitle: 'Large Luxury Farm Houses in Chandigarh | BOX Buildtech',
    ogDescription: 'Large luxury farm houses for those who want more than just a home — more space, privacy, comfort and a different way of living.',
  },
  {
    url: '/portal',
    title: 'Client Portal & Project Operating System | BOX Buildtech',
    description: 'The BOX Buildtech Client Portal — a smart digital platform connecting clients, architects, and site teams with real-time project updates, drawing vault, site stewardship, and live progress tracking.',
    keywords: 'construction client portal, project management portal, real time construction updates, drawing vault, site stewardship, BOX Buildtech portal',
    canonical: 'https://www.boxbuildtech.com/portal',
    ogTitle: 'Client Portal & Project Operating System | BOX Buildtech',
    ogDescription: 'Stay connected with your construction project. Real-time updates, drawing management, and site monitoring — all in one place.',
  },
];

// Read the built client index.html as the template
const rawTemplate = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');

/**
 * Strip ALL variable meta/title/link tags from the base index.html head
 * so each route gets a clean slate with only its own tags.
 */
function stripBaseHeadTags(html) {
  return html
    // <title>...</title>
    .replace(/<title>[\s\S]*?<\/title>/g, '')
    // <meta name="description|keywords|robots" ...>
    .replace(/<meta\s+name="(description|keywords|robots)"[^>]*\/?>/gi, '')
    // <meta property="og:*" ...>  — covers og:type, og:url, og:title, og:description, og:image, og:site_name, og:locale
    .replace(/<meta\s+property="og:[^"]*"[^>]*\/?>/gi, '')
    // <meta name="twitter:*" ...> — covers twitter:card, twitter:url, twitter:title, twitter:description, twitter:image
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*\/?>/gi, '')
    // <link rel="canonical" ...>
    .replace(/<link\s+rel="canonical"[^>]*\/?>/gi, '')
    // Clean up blank lines left behind
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
    <meta property="og:site_name" content="Box BuildTech" />
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
