// prerender.js — injects correct meta tags into each route's static HTML at build time
// v2 - updated descriptions and H1 tags for service pages
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
    description: 'Box Build Tech creates luxury residential projects in Chandigarh, premium residential construction, and bespoke luxury homes in Mohali.',
    keywords: 'luxury residential projects Chandigarh, premium residential construction Mohali, luxury home builders Punjab, high end residential construction, Box Build Tech',
    canonical: 'https://www.boxbuildtech.com/services/luxury-residential',
    ogTitle: 'Luxury Residential Projects Chandigarh & Premium Residential Construction | Box Build Tech',
    ogDescription: 'Expert luxury residential builders with 14+ years of experience. Premium residential construction across Chandigarh, Mohali & Punjab.',
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
    description: 'Box Build Tech provides luxury villa construction in Chandigarh, palace house building in Punjab. Mohali luxury villa construction and palace house builders.',
    keywords: 'luxury villa construction Chandigarh, palace house builders Punjab, luxury palace houses Mohali, grand villa construction Punjab, Box Build Tech',
    canonical: 'https://www.boxbuildtech.com/services/luxury-palace-houses',
    ogTitle: 'Luxury Villa Construction Chandigarh & Palace House Builders Punjab | Box Build Tech',
    ogDescription: 'Box Build Tech delivers luxury villa construction in Chandigarh and palace house building across Punjab with grand design and premium finishes.',
  },
  {
    url: '/services/large-luxury-farm-houses',
    title: 'Farm House Construction Chandigarh & Luxury Farm House Builders Mohali | Box Build Tech',
    description: 'Box Build Tech offers farm house construction in Punjab, luxury farm house builders in Mohali, and custom farm house design.',
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
  {
    url: '/blog',
    title: 'Blog | Construction Company in Chandigarh | Box Build Tech',
    description: 'Read expert insights from Box Build Tech on luxury home construction, construction management, building contractors, plotted development, and turnkey construction services.',
    keywords: 'Box Build Tech blog, construction blog Chandigarh, luxury home construction, building contractors Chandigarh, turnkey construction, plotted development',
    canonical: 'https://www.boxbuildtech.com/blog',
    ogTitle: 'Blog | Construction Company in Chandigarh | Box Build Tech',
    ogDescription: 'Expert construction insights, industry trends, and project planning guides from Box Build Tech.',
  },
  {
    url: '/blog/luxury-home-builders-chandigarh',
    title: 'Luxury Home Builders in Chandigarh | Luxury Villa & Farm House Construction | Box Build Tech',
    description: 'Build your dream luxury home with Box Build Tech. We specialise in luxury home construction, villas, farmhouses, heritage homes, and custom residential projects across Chandigarh, Mohali, and Punjab.',
    keywords: 'luxury home builders Chandigarh, luxury villa construction Chandigarh, custom farm house design Chandigarh, farm house construction Punjab, heritage home construction Chandigarh',
    canonical: 'https://www.boxbuildtech.com/blog/luxury-home-builders-chandigarh',
    ogTitle: 'Luxury Home Builders in Chandigarh | Box Build Tech',
    ogDescription: 'Luxury home construction, villas, farmhouses, heritage homes, and custom residential projects across Chandigarh, Mohali, and Punjab.',
  },
  {
    url: '/blog/turnkey-construction-company-chandigarh',
    title: 'Turnkey Construction Company Chandigarh | End-to-End Construction Services | Box Build Tech',
    description: 'Looking for a trusted turnkey construction company in Chandigarh? Box Build Tech offers end-to-end construction services, project execution, site management, and turnkey solutions across Chandigarh, Mohali, and Punjab.',
    keywords: 'turnkey construction company Chandigarh, turnkey construction services Punjab, project execution company Mohali, site execution company Chandigarh, building execution services Chandigarh',
    canonical: 'https://www.boxbuildtech.com/blog/turnkey-construction-company-chandigarh',
    ogTitle: 'Turnkey Construction Company Chandigarh | Box Build Tech',
    ogDescription: 'End-to-end construction services, project execution, site management, and turnkey solutions across Chandigarh, Mohali, and Punjab.',
  },
  {
    url: '/blog/construction-company-chandigarh-building-contractors',
    title: 'Construction Company in Chandigarh | Trusted Building Contractors | Box Build Tech',
    description: 'Looking for a reliable construction company in Chandigarh? Box Build Tech offers expert residential and commercial construction, civil contracting, and affordable building solutions across Chandigarh and Mohali.',
    keywords: 'construction company Chandigarh, building contractors Chandigarh, civil contractors Chandigarh, construction company Mohali, affordable residential construction Chandigarh',
    canonical: 'https://www.boxbuildtech.com/blog/construction-company-chandigarh-building-contractors',
    ogTitle: 'Construction Company in Chandigarh | Box Build Tech',
    ogDescription: 'Expert residential and commercial construction, civil contracting, and affordable building solutions across Chandigarh and Mohali.',
  },
  {
    url: '/blog/professional-construction-company-chandigarh',
    title: 'Professional Construction Company in Chandigarh | Box Buildtech',
    description: 'Build your dream luxury home with Box Buildtech, a trusted construction company in Chandigarh offering turnkey construction, expert project management, and premium building solutions.',
    keywords: 'professional construction company Chandigarh, trusted construction company Chandigarh, luxury home projects Chandigarh, turnkey construction Chandigarh, project management Chandigarh',
    canonical: 'https://www.boxbuildtech.com/blog/professional-construction-company-chandigarh',
    ogTitle: 'Professional Construction Company in Chandigarh | Box Buildtech',
    ogDescription: 'Trusted construction company in Chandigarh offering turnkey construction, expert project management, and premium building solutions.',
  },
  {
    url: '/blog/luxury-villa-construction-chandigarh-guide',
    title: 'Luxury Villa Construction Chandigarh | Box Buildtech',
    description: 'Build your dream villa with Box Buildtech, trusted luxury home builders in Chandigarh offering premium villa construction, turnkey solutions, and expert project management.',
    keywords: 'luxury villa construction Chandigarh, luxury home builders Chandigarh, construction contractors Mohali, turnkey construction company Chandigarh, luxury villa guide',
    canonical: 'https://www.boxbuildtech.com/blog/luxury-villa-construction-chandigarh-guide',
    ogTitle: 'Luxury Villa Construction Chandigarh | Box Buildtech',
    ogDescription: 'Premium villa construction, turnkey solutions, and expert project management for luxury homes in Chandigarh.',
  },
  {
    url: '/blog/premium-plotted-development-chandigarh-luxury-residential-plots',
    title: 'Premium Plotted Development in Chandigarh | Luxury Residential Plots | Box Build Tech',
    description: 'Explore premium plotted developments in Chandigarh with Box Build Tech. We specialise in luxury residential plots, plotted residences, design-build solutions, and structural construction services across Chandigarh, Mohali, and Panchkula.',
    keywords: 'premium plotted development Chandigarh, premium residential plots Chandigarh, luxury plotted residences Mohali, design and build company Mohali, structural construction services Panchkula, Box Build Tech',
    canonical: 'https://www.boxbuildtech.com/blog/premium-plotted-development-chandigarh-luxury-residential-plots',
    ogTitle: 'Premium Plotted Development in Chandigarh | Luxury Residential Plots | Box Build Tech',
    ogDescription: 'Explore premium plotted developments, luxury residential plots, design-build solutions, and structural construction services across Chandigarh, Mohali, and Panchkula.',
  },
  {
    url: '/blog/construction-management-company-panchkula-b2b-construction-services',
    title: 'Construction Management Company in Panchkula | B2B Construction Services | Box Build Tech',
    description: 'Looking for a reliable construction management company in Panchkula? Box Build Tech offers B2B construction services, project management, outsourcing, architect collaborations, and execution solutions across Panchkula, Chandigarh, and Mohali.',
    keywords: 'construction management company Panchkula, B2B construction services Chandigarh, construction outsourcing Chandigarh, construction collaboration for architects, construction contractors Mohali, Box Build Tech',
    canonical: 'https://www.boxbuildtech.com/blog/construction-management-company-panchkula-b2b-construction-services',
    ogTitle: 'Construction Management Company in Panchkula | B2B Construction Services | Box Build Tech',
    ogDescription: 'Box Build Tech offers B2B construction services, project management, outsourcing, architect collaborations, and execution solutions across Panchkula, Chandigarh, and Mohali.',
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
