import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Lightbulb, Award } from 'lucide-react';
import './Blog.css';
import { BLOGS } from '../../data/constants';
import blogHeroImage from '../../assets/heroproject1.png';
import professionalConstructionImage from '../../assets/WhyChoosingAProfessionalConstruction.png';
import luxuryVillaImage from '../../assets/LuxuryVillaConstruction.png';
import luxuryHomeBuildersImage from '../../assets/LuxuryHomeBuilders.png';
import turnkeyConstructionImage from '../../assets/HowTurnkey.png';
import whyChoosingRightImage from '../../assets/WhyChoosingTheConstructionCompany.png';
import premiumPlottedImage from '../../assets/PremimumPlottedDevelopment.png';
import constructionManagementImage from '../../assets/ConstructionManagementPanchkula.png';
import farmhouseMohaliImage from '../../assets/BoxbuildtechblogimgNew.png';
import customFarmHouseImage from '../../assets/From Plot to Finished Home Planning a Custom Farm House Design in Chandigarh Without Costly Mistakes (2).png';
import howToChooseConstructionImage from '../../assets/HowtoChoosetheRightConstructionCompanyinChandigarh.png';
import preConstructionPlanningImage from '../../assets/Construction Company in Chandigarh Why Pre-Construction Planning Is the Foundation of Every Successful Project.png';

// Image mapping for blogs
const imageMap = {
  'custom-farm-house-design-chandigarh': customFarmHouseImage,
  'construction-company-chandigarh-pre-construction-planning': preConstructionPlanningImage,
  'how-to-choose-right-construction-company-chandigarh': howToChooseConstructionImage,
  'luxury-farm-house-builders-mohali-turnkey-construction': farmhouseMohaliImage,
  'construction-management-company-panchkula-b2b-construction-services': constructionManagementImage,
  'premium-plotted-development-chandigarh-luxury-residential-plots': premiumPlottedImage,
  'luxury-home-builders-chandigarh': luxuryHomeBuildersImage,
  'turnkey-construction-company-chandigarh': turnkeyConstructionImage,
  'construction-company-chandigarh-building-contractors': whyChoosingRightImage,
  'professional-construction-company-chandigarh': professionalConstructionImage,
  'luxury-villa-construction-chandigarh-guide': luxuryVillaImage,
  'luxury-farm-house-builders-mohali': farmhouseMohaliImage,
  'turnkey-project-execution-company-in-chandigarh': turnkeyConstructionImage,
  'heritage-home-construction-chandigarh-palace-house-builders-punjab': luxuryHomeBuildersImage,
  'premium-residential-plots-chandigarh-luxury-plotted-residences-mohali': premiumPlottedImage,
  'affordable-residential-construction-chandigarh': professionalConstructionImage,
};

// Transform BLOGS data from constants to match the component's expected format
const blogData = BLOGS.map((blog, index) => ({
  id: BLOGS.length - index,
  category: blog.category.toUpperCase(),
  title: blog.title,
  excerpt: blog.metaDescription,
  slug: blog.id,
  image: imageMap[blog.id] || professionalConstructionImage,
  date: blog.date.toUpperCase(),
  readTime: '10 MIN READ',
}));

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