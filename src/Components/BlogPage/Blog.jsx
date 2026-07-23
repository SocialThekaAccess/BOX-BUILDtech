import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Lightbulb, Award } from 'lucide-react';
import './Blog.css';
import blogHeroImage from '../../assets/heroproject1.png';
import professionalConstructionImage from '../../assets/WhyChoosingAProfessionalConstruction.png';
import luxuryVillaImage from '../../assets/LuxuryVillaConstruction.png';
import luxuryHomeBuildersImage from '../../assets/LuxuryHomeBuilders.png';
import turnkeyConstructionImage from '../../assets/HowTurnkey.png';
import whyChoosingRightImage from '../../assets/WhyChoosingTheConstructionCompany.png';
import premiumPlottedImage from '../../assets/PremimumPlottedDevelopment.png';
import constructionManagementImage from '../../assets/ConstructionManagementPanchkula.png';
import farmhouseMohaliImage from '../../assets/BoxbuildtechblogimgNew.png';

const blogData = [
  {
    id: 8,
    category: 'FARM HOUSE',
    title: 'Luxury Farm House Builders in Mohali | Turnkey Construction by BOX Buildtech',
    excerpt: 'Build your dream farmhouse with BOX Buildtech, leading luxury farm house builders in Mohali. We specialize in turnkey construction, premium residential plots, heritage homes, and high-quality residential construction...',
    slug: 'luxury-farm-house-builders-mohali-turnkey-construction',
    image: farmhouseMohaliImage,
    date: '23 JULY, 2026',
    readTime: '10 MIN READ',
  },
  {
    id: 7,
    category: 'CONSTRUCTION MANAGEMENT',
    title: 'Construction Management Company in Panchkula: Complete B2B Construction Solutions',
    excerpt: 'Professional construction management brings planning, coordination, outsourcing, architect collaboration, and execution control into one structured process...',
    slug: 'construction-management-company-panchkula-b2b-construction-services',
    image: constructionManagementImage,
    date: '08 JULY, 2026',
    readTime: '8 MIN READ',
  },
  {
    id: 6,
    category: 'PLOTTED DEVELOPMENT',
    title: 'Premium Plotted Development in Chandigarh: A Complete Guide to Luxury Residential Projects',
    excerpt: 'Premium plotted developments give homeowners architectural freedom, planned infrastructure, and long-term value across Chandigarh and the Tricity region...',
    slug: 'premium-plotted-development-chandigarh-luxury-residential-plots',
    image: premiumPlottedImage,
    date: '08 JULY, 2026',
    readTime: '8 MIN READ',
  },
  {
    id: 5,
    category: 'LUXURY HOMES',
    title: 'Luxury Home Builders in Chandigarh: Creating Villas, Farmhouses and Heritage Homes',
    excerpt: 'Building a luxury home is about far more than creating a beautiful structure. It is about designing a space that reflects your lifestyle...',
    slug: 'luxury-home-builders-chandigarh',
    image: luxuryHomeBuildersImage,
    date: '08 JULY, 2026',
    readTime: '8 MIN READ',
  },
  {
    id: 4,
    category: 'TURNKEY CONSTRUCTION',
    title: 'How a Turnkey Construction Company in Chandigarh Simplifies Your Entire Project',
    excerpt: 'Constructing a home, commercial building, or luxury property involves much more than hiring a contractor. Turnkey construction brings every stage under one roof...',
    slug: 'turnkey-construction-company-chandigarh',
    image: turnkeyConstructionImage,
    date: '08 JULY, 2026',
    readTime: '8 MIN READ',
  },
  {
    id: 3,
    category: 'CONSTRUCTION',
    title: 'Why Choosing the Right Construction Company in Chandigarh Makes All the Difference',
    excerpt: 'Building a home or commercial property is one of the most significant investments you will ever make. The right construction partner can determine quality...',
    slug: 'construction-company-chandigarh-building-contractors',
    image: whyChoosingRightImage,
    date: '08 JULY, 2026',
    readTime: '8 MIN READ',
  },
  {
    id: 1,
    category: 'CONSTRUCTION',
    title: 'Why Choosing a Professional Construction Company in Chandigarh Matters for Luxury Home Projects',
    excerpt: 'Building a luxury home is one of the most significant investments a family can make. Choosing the right construction partner can determine the success...',
    slug: 'professional-construction-company-chandigarh',
    image: professionalConstructionImage,
    date: '26 JUNE, 2026',
    readTime: '6 MIN READ',
  },
  {
    id: 2,
    category: 'LUXURY VILLA',
    title: 'Luxury Villa Construction Chandigarh: A Complete Guide to Building Your Dream Home',
    excerpt: 'The demand for luxury villas across Chandigarh and Mohali continues to rise as homeowners seek personalized living spaces...',
    slug: 'luxury-villa-construction-chandigarh-guide',
    image: luxuryVillaImage,
    date: '26 JUNE, 2026',
    readTime: '6 MIN READ',
  },
];

const categories = [
  { name: 'Luxury Palace Houses', count: 8 },
  { name: 'Large Luxury Farm Houses', count: 6 },
  { name: 'Luxury Residential', count: 10 },
];

const Blog = () => {
  // Force navbar to scrolled state on blog page
  useEffect(() => {
    // Add class to body for blog page styling
    document.body.classList.add('blog-page-active');

    return () => {
      document.body.classList.remove('blog-page-active');
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog | Construction Company in Chandigarh | Box Build Tech</title>
        <meta name="description" content="Read our blog about luxury home construction, building contractors in Chandigarh, and professional construction services." />
        <link rel="canonical" href="https://www.boxbuildtech.com/blog" />
      </Helmet>

      <div className="blog-page">
        {/* Hero Section */}
        <div className="blog-hero" style={{ backgroundImage: `url(${blogHeroImage})` }}>
          <div className="blog-hero-overlay"></div>
          <div className="blog-hero-content">
            <span className="blog-hero-badge">OUR BLOG</span>
            <h1 className="blog-hero-title">
              Insights on Luxury<br />Construction & Home Building
            </h1>
            <p className="blog-hero-subtitle">
              Expert tips, industry trends, and in-depth guides to help you build<br />
              smarter, better, and beyond expectations.
            </p>
            <div className="blog-hero-divider"></div>

            {/* Feature Icons */}
            <div className="blog-hero-features">
              <div className="blog-hero-feature">
                <BookOpen size={20} strokeWidth={1.5} />
                <span>Expert Insights</span>
              </div>
              <div className="blog-hero-feature">
                <TrendingUp size={20} strokeWidth={1.5} />
                <span>Industry Trends</span>
              </div>
              <div className="blog-hero-feature">
                <Lightbulb size={20} strokeWidth={1.5} />
                <span>Construction Tips</span>
              </div>
              <div className="blog-hero-feature">
                <Award size={20} strokeWidth={1.5} />
                <span>Quality & Innovation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content Section */}
        <div className="blog-content-wrapper">
          <div className="blog-grid-container">
            {/* Blog Cards */}
            <div className="blog-grid">
              {blogData.map((blog) => (
                <Link key={blog.id} to={`/blog/${blog.slug}`} className="blog-card-wrapper">
                  <article className="blog-card">
                    {blog.image ? (
                      <div className="blog-card-image">
                        <img src={blog.image} alt={blog.title} loading="lazy" />
                        <span className="blog-card-category-badge">{blog.category}</span>
                      </div>
                    ) : (
                      <div className="blog-card-image blog-card-image-placeholder">
                        <span className="blog-card-category-badge">{blog.category}</span>
                      </div>
                    )}
                    <div className="blog-card-content">
                      <div className="blog-card-meta">
                        <span className="blog-card-date">{blog.date}</span>
                        <span className="blog-card-read">{blog.readTime}</span>
                      </div>
                      <h2 className="blog-card-title">{blog.title}</h2>
                      <p className="blog-card-excerpt">{blog.excerpt}</p>
                      <span className="blog-card-link">
                        READ MORE →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              {/* Categories */}
              <div className="blog-sidebar-card">
                <h3 className="blog-sidebar-title">Categories</h3>
                <div className="blog-categories">
                  {categories.map((cat, idx) => (
                    <button key={idx} className="blog-category-item">
                      <span className="blog-category-name">📁 {cat.name}</span>
                      <span className="blog-category-count">{cat.count}</span>
                    </button>
                  ))}
                  <button className="blog-view-all">VIEW ALL CATEGORIES →</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;