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

// ============================================================
// BLOG DATA
// ============================================================
export const BLOGS = [
  {
    id: 'custom-farm-house-design-chandigarh',
    metaTitle: 'Custom Farm House Design in Chandigarh: Planning Guide',
    metaDescription: 'Planning a Custom Farm House Design in Chandigarh? Learn how to manage design, structure, contractors, site execution, costs and quality before construction begins.',
    title: 'From Plot to Finished Home: Planning a Custom Farm House Design in Chandigarh Without Costly Mistakes',
    category: 'Farm House Design',
    author: 'BOX BUILDtech',
    date: '2024',
    image: '/src/assets/farmhouse-chandigarh.jpg',
    content: `
<p>Buying land is only the first major decision in a property journey. The next one—deciding what to build and how to build it—can be even more demanding.</p>

<p>A farmhouse or custom home often begins with an exciting idea: more open space, better natural light, a large garden, flexible rooms and a home that feels personal. But once construction starts, those ideas have to be converted into drawings, quantities, timelines, contractor responsibilities and hundreds of on-site decisions.</p>

<p>That is where many projects become difficult.</p>

<p>Whether you are considering a Custom Farm House Design in Chandigarh or planning a larger residential build elsewhere, the most important work often happens before excavation begins. A well-planned project is not simply about choosing a beautiful elevation. It is about making design, structure, budget and execution work together.</p>

<h2>Start With the Way You Want to Use the Property</h2>

<p>Before discussing exterior styles or finishes, decide how the property will actually be used.</p>

<p>Will it be a full-time family home, a weekend farmhouse, a retirement property or a place designed for gatherings? Will elderly parents stay there? Do you need separate guest accommodation? Is outdoor dining important? How much maintenance are you comfortable with?</p>

<p>These questions influence everything from room placement to landscaping.</p>

<p>Good planning begins with lifestyle, not inspiration images.</p>

<h2>Freeze the Scope Before You Freeze the Design</h2>

<p>One of the biggest causes of cost escalation is a project that keeps changing after work begins.</p>

<p>Before final drawings are approved, create a clear scope. It should identify the approximate built-up area, number of floors, rooms, parking needs, outdoor spaces, service areas, landscape expectations and major amenities.</p>

<p>If you plan a swimming pool, lift, basement, solar system, home automation or double-height spaces, discuss them early. They can affect structural planning, electrical requirements and overall cost.</p>

<h2>Keep Architecture and Structure in Conversation</h2>

<p>A visually impressive house is not automatically a well-resolved house.</p>

<p>Large windows, open spans, terraces and dramatic elevations all need structural support. Architects and structural consultants therefore need to coordinate instead of working in isolation.</p>

<p>This is especially important when selecting structural construction services in panchkula or elsewhere in the Tricity region. Ask how the structural team coordinates with architectural drawings, services and site conditions.</p>

<p>Many problems that appear small on paper can become expensive once work begins. Structural coordination before construction helps reduce unnecessary changes, delays and compromises in the final layout.</p>

<h2>Understand the Site Before Construction</h2>

<p>Two plots of the same size can require very different construction decisions.</p>

<p>Before structural work begins, understand the site's levels, access, drainage pattern and soil conditions. If recommended by the project consultants, appropriate soil investigation should be completed before foundation design is finalised.</p>

<p>Orientation also matters. West-facing heat, neighbouring structures, road position, prevailing winds and views should influence window placement and outdoor areas.</p>

<p>A farmhouse offers more freedom than a compact urban plot, but that freedom needs to be used intelligently. Excessive paving, poorly placed lawns or long service routes can make a property harder to maintain.</p>

<h2>Decide Who Is Responsible for Execution</h2>

<p>Drawings do not build a home. People do.</p>

<p>Before construction, owners need clarity about who will coordinate contractors, check workmanship, manage materials, track schedules and resolve conflicts between drawings and site conditions.</p>

<p>Some owners hire separate contractors for civil, plumbing, electrical, flooring and interiors. Others prefer one project execution company in Mohali or a professional team to coordinate multiple stages.</p>

<p>Neither model is automatically better. The right choice depends on the scale of the project and how much time the owner can personally dedicate.</p>

<p>What matters is accountability. Every major activity should have a clearly identified person responsible for quality, timeline and communication.</p>

<h2>Construction Outsourcing Can Work With the Right Controls</h2>

<p>For busy professionals, NRIs or owners living outside the city, construction outsourcing Chandigarh services can reduce the burden of daily site coordination.</p>

<p>However, outsourcing does not mean handing over the project and forgetting about it.</p>

<p>A reporting system should be agreed upon from the beginning. This may include scheduled site updates, photographs, stage-wise progress reports, material approvals and budget tracking.</p>

<p>Owners should also know who can approve changes. If every small decision waits for multiple people, work slows down. If site teams make major changes without approval, costs and design quality can drift.</p>

<p>The aim is not constant interference. It is controlled visibility.</p>

<h2>Look Beyond the Lowest Construction Quote</h2>

<p>A low quote is attractive, but comparing only the final number can be misleading.</p>

<p>Two contractors may quote different amounts because they have included different specifications, brands, quantities or scopes.</p>

<p>Before appointing a site execution company Chandigarh property owners should compare what is actually covered. Check whether the quotation clearly addresses structure, waterproofing, plumbing, electrical work, plaster, flooring, external development and other relevant stages.</p>

<p>Also look at exclusions. A quotation that appears cheaper may leave out items that will later be billed separately. A detailed estimate gives you a better picture of the real project cost.</p>

<h2>Create a Material Approval System</h2>

<p>Many residential projects lose consistency because materials are selected one at a time without an overall plan.</p>

<p>Before major procurement begins, prepare a material schedule or category-wise shortlist. Flooring, sanitary fittings, windows, doors, electrical fixtures and exterior finishes should be coordinated with the design and budget.</p>

<p>For expensive or visually important materials, ask for samples before bulk ordering.</p>

<p>This reduces impulsive decisions and avoids arguments about whether the delivered material matches what was expected. Written approvals are especially useful when owners are not visiting the site regularly.</p>

<h2>Plan Services Before Finishes</h2>

<p>A beautiful bathroom can still be frustrating if water pressure is poor. A clean ceiling can be spoiled by last-minute AC pipes. A premium kitchen becomes inconvenient if electrical points are placed without understanding appliance locations.</p>

<p>Plumbing, electrical, HVAC, drainage, internet, security and automation should be coordinated before finishing work.</p>

<p>This matters even more in larger farmhouses, where outdoor areas may require irrigation, lighting, cameras, pumps or separate power provisions.</p>

<p>Good service planning is almost invisible when the house is finished—and that is exactly the point.</p>

<h2>Build a Realistic Timeline and Budget Buffer</h2>

<p>Construction schedules are useful, but they should be realistic.</p>

<p>Weather, approvals, material lead times, design revisions and specialised work can affect progress. Instead of focusing only on the final handover date, divide the project into milestones such as foundation, structure, masonry, services, plaster, flooring, joinery and painting.</p>

<p>Milestone-based planning makes delays easier to identify.</p>

<p>Keep a contingency in the budget as well. Site conditions, material upgrades or additional landscape and storage requirements can emerge once spaces become physically visible. A buffer allows such changes to be handled without disrupting the entire project.</p>

<h2>Think About Maintenance Before Handover</h2>

<p>Farmhouses and large homes require upkeep, so maintenance should influence design choices from the beginning.</p>

<p>Before approving a material, ask how it will age. Can exterior surfaces be cleaned easily? Is waterproofing accessible for repairs? Are plumbing points reachable? Will landscaped areas require constant attention? Are outdoor materials suited to local weather?</p>

<p>A house should look good when it is completed, but it should also remain practical five or ten years later.</p>

<h2>Frequently Asked Questions</h2>

<h3>1. When should I start planning a farmhouse after buying a plot?</h3>
<p>Ideally, planning should begin well before construction. The design team needs time to understand your requirements, study the site, coordinate structure and services, prepare drawings and establish an execution budget.</p>

<h3>2. What should be finalised before construction starts?</h3>
<p>The architectural layout, structural approach, major services, construction scope, specifications, approximate budget and execution responsibilities should be reasonably clear. Changes made later usually cost more.</p>

<h3>3. Should I hire separate contractors or one execution company?</h3>
<p>Both approaches can work. Separate contractors may provide flexibility, while a coordinated execution team can simplify responsibility. The better option depends on project size, owner involvement and the quality of supervision available.</p>

<h3>4. Why is structural planning important for a custom farmhouse?</h3>
<p>Structural planning determines how safely and efficiently the design can be built. It also affects column positions, room layouts, spans and foundations. Early coordination reduces site-level changes.</p>

<h3>5. How can an owner monitor construction when living in another city?</h3>
<p>Set up a reporting process before work begins. Ask for regular progress updates, photographs, milestone reports, material approvals and documented variation costs. A clear communication system is more useful than occasional unplanned site visits.</p>

<h2>Conclusion</h2>

<p>A custom home is a long-term investment, but its success is shaped by decisions made months before the family moves in.</p>

<p>Good design matters. So do structural coordination, realistic budgeting, responsible site management, material control and service planning. When these elements are treated as one connected process, construction becomes easier to manage and the finished property is more likely to match the original vision.</p>

<p>For anyone exploring a Custom Farm House Design in Chandigarh or planning construction around the Tricity region, the best place to begin is not with finishes or elevation styles. Begin with a clear brief, a realistic budget and an execution structure in which every professional understands their responsibility.</p>

<p>Thoughtful property decisions do not stop when land is purchased. The next stage is turning that land into a space that remains practical, comfortable and valuable for years to come.</p>
    `
  }
];
