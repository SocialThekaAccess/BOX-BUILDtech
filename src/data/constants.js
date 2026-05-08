// ============================================================
// DESIGN TOKENS
// ============================================================
export const COLORS = {
  gold: '#C9A84C',
  goldLight: '#E2C97E',
  goldDark: '#A07830',
  black: '#0A0A0A',
  darkBg: '#111111',
  cardBg: '#1A1A1A',
  white: '#FFFFFF',
  textMuted: '#888888',
  textLight: '#CCCCCC',
};

// ============================================================
// NAVBAR DATA
// ============================================================
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

// ============================================================
// HERO DATA
// ============================================================
export const HERO = {
  tagline: 'Premium Construction & Design',
  heading: 'Building Dreams Into Reality',
  subheading:
    'We craft exceptional spaces that blend timeless elegance with modern innovation.',
  cta: { label: 'View Our Work', href: '#projects' },
  ctaSecondary: { label: 'Get In Touch', href: '#contact' },
};

export const STATS = [
  { value: '15+', label: 'Years Experience' },
  { value: '320+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Expert Team' },
];

// ============================================================
// SERVICES DATA
// ============================================================
export const SERVICES = [
  {
    id: 1,
    icon: '🏗️',
    title: 'Construction',
    description:
      'End-to-end construction services from foundation to finishing with uncompromising quality.',
  },
  {
    id: 2,
    icon: '🏠',
    title: 'Interior Design',
    description:
      'Bespoke interior solutions that reflect your personality and elevate your living experience.',
  },
  {
    id: 3,
    icon: '📐',
    title: 'Architecture',
    description:
      'Innovative architectural designs that harmonize aesthetics, function, and sustainability.',
  },
  {
    id: 4,
    icon: '🔧',
    title: 'Renovation',
    description:
      'Transform existing spaces with precision renovations that breathe new life into old structures.',
  },
  {
    id: 5,
    icon: '🌿',
    title: 'Landscaping',
    description:
      'Curated outdoor environments that extend your living space into nature beautifully.',
  },
  {
    id: 6,
    icon: '📋',
    title: 'Project Management',
    description:
      'Seamless project oversight ensuring timely delivery, budget adherence, and quality control.',
  },
];

// ============================================================
// PROJECTS DATA
// ============================================================
export const PROJECTS = [
  {
    id: 1,
    title: 'The Meridian Residences',
    category: 'Residential',
    location: 'Dubai, UAE',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
  },
  {
    id: 2,
    title: 'Skyline Corporate Tower',
    category: 'Commercial',
    location: 'Karachi, PK',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
  },
  {
    id: 3,
    title: 'Azure Waterfront Villa',
    category: 'Luxury',
    location: 'Lahore, PK',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
  },
  {
    id: 4,
    title: 'The Heritage Hotel',
    category: 'Hospitality',
    location: 'Islamabad, PK',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80',
  },
  {
    id: 5,
    title: 'Green Valley Estates',
    category: 'Residential',
    location: 'Multan, PK',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
  },
  {
    id: 6,
    title: 'Nova Business Park',
    category: 'Commercial',
    location: 'Faisalabad, PK',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
];

export const PROJECT_FILTERS = ['All', 'Residential', 'Commercial', 'Luxury', 'Hospitality'];

// ============================================================
// ABOUT DATA
// ============================================================
export const ABOUT = {
  tag: 'Our Story',
  heading: 'Two Decades of Crafting Excellence',
  body: [
    'Founded in 2005, we have grown from a small construction firm into one of the region\'s most trusted names in premium real estate development and design.',
    'Our philosophy is simple: every project deserves the same level of passion, precision, and dedication — whether it\'s a private residence or a landmark commercial tower.',
  ],
  cta: { label: 'Download Brochure', href: '#' },
};

export const ABOUT_FEATURES = [
  { icon: '🏆', title: 'Award Winning', desc: '25+ industry awards' },
  { icon: '🤝', title: 'Trusted Partners', desc: '100+ global vendors' },
  { icon: '♻️', title: 'Sustainable', desc: 'Green certified builds' },
];

// ============================================================
// TESTIMONIALS DATA
// ============================================================
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ahmed Al-Rashid',
    role: 'CEO, Al-Rashid Holdings',
    avatar: 'AR',
    rating: 5,
    text: 'Exceptional craftsmanship and professionalism. They delivered our corporate headquarters on time and beyond our expectations. Truly a world-class team.',
  },
  {
    id: 2,
    name: 'Sara Malik',
    role: 'Homeowner, Lahore',
    avatar: 'SM',
    rating: 5,
    text: 'Our dream home became a reality thanks to their incredible team. Every detail was handled with care and the quality is simply outstanding.',
  },
  {
    id: 3,
    name: 'James Thornton',
    role: 'Director, Thornton Hospitality',
    avatar: 'JT',
    rating: 5,
    text: 'The Heritage Hotel project was complex, but they managed it flawlessly. Their attention to detail and commitment to quality is unmatched in the industry.',
  },
];

// ============================================================
// CONTACT DATA
// ============================================================
export const CONTACT_INFO = [
  { icon: '📍', label: 'Address', value: '14th Floor, Business Bay Tower, Karachi, Pakistan' },
  { icon: '📞', label: 'Phone', value: '+92 300 1234567' },
  { icon: '✉️', label: 'Email', value: 'hello@yourcompany.com' },
  { icon: '🕐', label: 'Hours', value: 'Mon – Sat: 9:00 AM – 6:00 PM' },
];

export const CTA_BANNER = {
  heading: 'Ready to Build Something Extraordinary?',
  subheading: 'Let\'s turn your vision into a landmark. Our team is ready to bring your project to life.',
  cta: { label: 'Start Your Project', href: '#contact' },
};

// ============================================================
// FOOTER DATA
// ============================================================
export const FOOTER = {
  brand: 'LUXE BUILD',
  tagline: 'Crafting spaces that inspire, endure, and elevate.',
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
  copyright: `© ${new Date().getFullYear()} LuxeBuild. All rights reserved.`,
};
