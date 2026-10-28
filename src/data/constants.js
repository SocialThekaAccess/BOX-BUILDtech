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
    icon: 'ðŸ—ï¸',
    title: 'Construction',
    description:
      'End-to-end construction services from foundation to finishing with uncompromising quality.',
  },
  {
    id: 2,
    icon: 'ðŸ ',
    title: 'Interior Design',
    description:
      'Bespoke interior solutions that reflect your personality and elevate your living experience.',
  },
  {
    id: 3,
    icon: 'ðŸ“',
    title: 'Architecture',
    description:
      'Innovative architectural designs that harmonize aesthetics, function, and sustainability.',
  },
  {
    id: 4,
    icon: 'ðŸ”§',
    title: 'Renovation',
    description:
      'Transform existing spaces with precision renovations that breathe new life into old structures.',
  },
  {
    id: 5,
    icon: 'ðŸŒ¿',
    title: 'Landscaping',
    description:
      'Curated outdoor environments that extend your living space into nature beautifully.',
  },
  {
    id: 6,
    icon: 'ðŸ“‹',
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
    'Our philosophy is simple: every project deserves the same level of passion, precision, and dedication â€” whether it\'s a private residence or a landmark commercial tower.',
  ],
  cta: { label: 'Download Brochure', href: '#' },
};

export const ABOUT_FEATURES = [
  { icon: 'ðŸ†', title: 'Award Winning', desc: '25+ industry awards' },
  { icon: 'ðŸ¤', title: 'Trusted Partners', desc: '100+ global vendors' },
  { icon: 'â™»ï¸', title: 'Sustainable', desc: 'Green certified builds' },
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
  { icon: 'ðŸ“', label: 'Address', value: '14th Floor, Business Bay Tower, Karachi, Pakistan' },
  { icon: 'ðŸ“ž', label: 'Phone', value: '+92 300 1234567' },
  { icon: 'âœ‰ï¸', label: 'Email', value: 'hello@yourcompany.com' },
  { icon: 'ðŸ•', label: 'Hours', value: 'Mon â€“ Sat: 9:00 AM â€“ 6:00 PM' },
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
  copyright: `Â© ${new Date().getFullYear()} LuxeBuild. All rights reserved.`,
};

// ============================================================
// BLOG DATA
// ============================================================
export const BLOGS = [
  {
    id: 'project-execution-company-mohali',
    metaTitle: 'Project Execution Company in Mohali | BOX Buildtech for Tricity',
    metaDescription: 'BOX Buildtech is a project execution company in Mohali offering luxury home construction, architect coordination, site supervision and quality finishing across Tricity.',
    title: 'Project Execution Company in Mohali: Turning Your Dream Home into Reality',
    category: 'Project Execution',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/Turnkey Project Execution Company in Chandigarh Project Management and Construction Chandigarh Guide.png',
  },
  {
    id: 'construction-contractors-mohali-choose-right-builder',
    metaTitle: 'Construction Contractors in Mohali for Luxury Homes | Box Build Tech',
    metaDescription: 'Looking for construction contractors in Mohali? Box Build Tech builds custom luxury villas, plotted residences and farm houses across Punjab. Request your quote today.',
    title: 'Construction contractors in Mohali: How to Choose the Right Builder for Your Dream Home',
    category: 'Construction Guide',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/Construction contractors in Mohali How to Choose the Right Builder for Your Dream Home.png',
  },
  {
    id: 'design-build-company-mohali-luxury-homes',
    metaTitle: 'Design and Build Company in Mohali for Luxury Homes | Box Build Tech',
    metaDescription: 'Looking for a design and build company in Mohali? Box Build Tech builds villas, plotted residences and farm houses with one team for planning and construction. Enquire.',
    title: 'Design and build company in Mohali: Why One Team for Design and Construction Delivers Better Homes',
    category: 'Design Build',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/Design-Build-Company-Mohali.png',
  },
  {
    id: 'construction-company-mohali-build-budget',
    metaTitle: 'Construction Company in Mohali: How to Plan Your Build Budget',
    metaDescription: 'Learn how to plan your construction budget with a trusted construction company in Mohali. Avoid cost overruns with proper planning, approvals, and scope definition.',
    title: 'Construction Company in Mohali: How to Plan Your Build Budget',
    category: 'Construction Planning',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/Construction Budget Planning in Mohali.png',
  },
  {
    id: 'civil-contractors-chandigarh-contracts-quality-site-checks',
    metaTitle: 'Civil Contractors Chandigarh: Contracts, Quality and Site Checks',
    metaDescription: 'A comprehensive guide to working with civil contractors in Chandigarh, covering contracts, quality control, site inspections, and project management.',
    title: 'Civil Contractors Chandigarh: Contracts, Quality and Site Checks',
    category: 'Civil Contractors',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/Chandigarh civil contractors at work.png',
  },
  {
    id: 'custom-farm-house-design-chandigarh',
    metaTitle: 'Custom Farm House Design in Chandigarh: Planning Guide',
    metaDescription: 'Planning a Custom Farm House Design in Chandigarh? Learn how to manage design, structure, contractors, site execution, costs and quality before construction begins.',
    title: 'From Plot to Finished Home: Planning a Custom Farm House Design in Chandigarh Without Costly Mistakes',
    category: 'Farm House Design',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/From Plot to Finished Home Planning a Custom Farm House Design in Chandigarh Without Costly Mistakes (2).png',
  },
  {
    id: 'construction-company-chandigarh-pre-construction-planning',
    metaTitle: 'Construction Company in Chandigarh: Why Pre-Construction Planning Matters',
    metaDescription: 'Discover why pre-construction planning is the foundation of every successful project with experienced construction companies in Chandigarh.',
    title: 'Construction Company in Chandigarh: Why Pre-Construction Planning Is the Foundation of Every Successful Project',
    category: 'Construction Planning',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/Construction Company in Chandigarh Why Pre-Construction Planning Is the Foundation of Every Successful Project.png',
  },
  {
    id: 'how-to-choose-right-construction-company-chandigarh',
    metaTitle: 'How to Choose the Right Construction Company in Chandigarh',
    metaDescription: 'Learn how to choose the right construction company in Chandigarh for your dream home with expert tips on vetting builders, comparing quotes, and quality checks.',
    title: 'How to Choose the Right Construction Company in Chandigarh for Your Dream Home',
    category: 'Construction Guide',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/HowtoChoosetheRightConstructionCompanyinChandigarh.png',
  },
  {
    id: 'luxury-farm-house-builders-mohali-turnkey-construction',
    metaTitle: 'Luxury Farm House Builders in Mohali | Turnkey Construction',
    metaDescription: 'Expert luxury farm house builders in Mohali offering turnkey construction services by BOX Buildtech. Build your dream farmhouse with professional execution.',
    title: 'Luxury Farm House Builders in Mohali | Turnkey Construction by BOX Buildtech',
    category: 'Farm House',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/BoxbuildtechblogimgNew.png',
  },
  {
    id: 'luxury-home-builders-chandigarh',
    metaTitle: 'Luxury Home Builders in Chandigarh | Villas & Heritage Homes',
    metaDescription: 'Explore luxury home builders in Chandigarh specializing in creating villas, farmhouses and heritage homes with premium construction and design excellence.',
    title: 'Luxury Home Builders in Chandigarh: Creating Villas, Farmhouses and Heritage Homes',
    category: 'Luxury Homes',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/LuxuryHomeBuilders.png',
  },
  {
    id: 'turnkey-construction-company-chandigarh',
    metaTitle: 'Turnkey Construction Company in Chandigarh Simplifies Your Project',
    metaDescription: 'Discover how a turnkey construction company in Chandigarh simplifies your entire project with end-to-end construction management and quality execution.',
    title: 'How a Turnkey Construction Company in Chandigarh Simplifies Your Entire Project',
    category: 'Turnkey Construction',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/HowTurnkey.png',
  },
  {
    id: 'professional-construction-company-chandigarh',
    metaTitle: 'Professional Construction Company in Chandigarh for Luxury Homes',
    metaDescription: 'Why choosing a professional construction company in Chandigarh matters for luxury home projects. Quality execution, transparency and project management.',
    title: 'Why Choosing a Professional Construction Company in Chandigarh Matters for Luxury Home Projects',
    category: 'Construction',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/WhyChoosingAProfessionalConstruction.png',
  },
  {
    id: 'luxury-villa-construction-chandigarh-guide',
    metaTitle: 'Luxury Villa Construction Chandigarh: Complete Guide',
    metaDescription: 'Complete guide to luxury villa construction in Chandigarh covering design, planning, execution, materials, and quality control for your dream home.',
    title: 'Luxury Villa Construction Chandigarh: A Complete Guide to Building Your Dream Home',
    category: 'Luxury Villa',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/LuxuryVillaConstruction.png',
  },
  {
    id: 'construction-company-chandigarh-building-contractors',
    metaTitle: 'Why Choosing the Right Construction Company in Chandigarh Matters',
    metaDescription: 'Discover why choosing the right construction company in Chandigarh makes all the difference in quality, timelines, and project success.',
    title: 'Why Choosing the Right Construction Company in Chandigarh Makes All the Difference',
    category: 'Construction',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/WhyChoosingTheConstructionCompany.png',
  },
  {
    id: 'premium-plotted-development-chandigarh-luxury-residential-plots',
    metaTitle: 'Premium Plotted Development in Chandigarh: Complete Guide',
    metaDescription: 'Complete guide to premium plotted development in Chandigarh and luxury residential projects. Learn about planning, construction, and quality execution.',
    title: 'Premium Plotted Development in Chandigarh: A Complete Guide to Luxury Residential Projects',
    category: 'Plotted Development',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/PremimumPlottedDevelopment.png',
  },
  {
    id: 'construction-management-company-panchkula-b2b-construction-services',
    metaTitle: 'Construction Management Company in Panchkula | B2B Solutions',
    metaDescription: 'Professional construction management company in Panchkula offering complete B2B construction solutions for commercial and residential projects.',
    title: 'Construction Management Company in Panchkula: Complete B2B Construction Solutions',
    category: 'Construction Management',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/ConstructionManagementPanchkula.png',
  },
  {
    id: 'luxury-farm-house-builders-mohali',
    metaTitle: 'Luxury Farm House Builders Mohali | Farm House Construction Punjab',
    metaDescription: 'Looking for Luxury Farm House Builders Mohali? Explore planning, design, budgeting and end-to-end Farm House Construction in Punjab with expert execution.',
    title: 'Luxury Farm House Builders Mohali: Complete Guide to Farm House Construction in Punjab',
    category: 'Farm House',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/Luxury Farm House Builders Mohali Complete Guide to Farm House Construction in Punjab.png',
  },
  {
    id: 'turnkey-project-execution-company-in-chandigarh',
    metaTitle: 'Turnkey Project Execution Company in Chandigarh | Project Management',
    metaDescription: 'Choose a turnkey project execution company in Chandigarh for systematic project management, construction coordination, quality control and transparent delivery.',
    title: 'Turnkey Project Execution Company in Chandigarh: Project Management and Construction Chandigarh Guide',
    category: 'Project Management',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/Turnkey Project Execution Company in Chandigarh Project Management and Construction Chandigarh Guide.png',
  },
  {
    id: 'heritage-home-construction-chandigarh-palace-house-builders-punjab',
    metaTitle: 'Heritage Home Construction in Chandigarh | Palace House Builders Punjab',
    metaDescription: 'Explore Heritage Home Construction in Chandigarh and Palace House Builders in Punjab for timeless residences combining traditional character with modern construction.',
    title: 'Heritage Home Construction in Chandigarh and Palace House Builders in Punjab: Building Timeless Luxury',
    category: 'Heritage Construction',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/Heritage Home Construction in Chandigarh.png',
  },
  {
    id: 'affordable-residential-construction-chandigarh',
    metaTitle: 'Affordable Residential Construction Chandigarh | Civil Contractor',
    metaDescription: 'Explore affordable residential construction Chandigarh with an experienced civil contractor Chandigarh offering transparent, end-to-end construction services.',
    title: 'Affordable Residential Construction Chandigarh: Choosing an Experienced Civil Contractor Chandigarh for End to End Construction Services Chandigarh',
    category: 'Affordable Construction',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/Affordable Residential Construction Chandigarh.png',
  },
  {
    id: 'premium-residential-plots-chandigarh-luxury-plotted-residences-mohali',
    metaTitle: 'Premium Residential Plots in Chandigarh | Plotted Residences Mohali',
    metaDescription: 'Exploring Premium Residential Plots in Chandigarh or Luxury Plotted Residences in Mohali? Learn what to check before planning and constructing your premium home.',
    title: 'Premium Residential Plots in Chandigarh, Luxury Plotted Residences in Mohali and Premium Plotted Development in Chandigarh: A Construction Guide',
    category: 'Plotted Development',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/Premium Residential Plots in Chandigarh, Luxury Plotted Residences in Mohali.png',
  },
];
