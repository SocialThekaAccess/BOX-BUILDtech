import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Lightbulb, Award } from 'lucide-react';
import './Blog.css';

const blogData = [
  {
    id: 1,
    category: 'CONSTRUCTION',
    title: 'Why Choosing a Professional Construction Company in Chandigarh Matters for Luxury Home Projects',
    excerpt: 'Building a luxury home is one of the most significant investments a family can make. Choosing the right construction partner can determine the success...',
    slug: 'professional-construction-company-chandigarh',
    image: null,
    date: '26 JUNE, 2026',
    readTime: '6 MIN READ',
  },
  {
    id: 2,
    category: 'LUXURY VILLA',
    title: 'Luxury Villa Construction Chandigarh: A Complete Guide to Building Your Dream Home',
    excerpt: 'The demand for luxury villas across Chandigarh and Mohali continues to rise as homeowners seek personalized living spaces...',
    slug: 'luxury-villa-construction-chandigarh-guide',
    image: null,
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
        <div className="blog-hero">
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
                <article key={blog.id} className="blog-card">
                  {blog.image ? (
                    <div className="blog-card-image">
                      <img src={blog.image} alt={blog.title} />
                      <span className="blog-card-category-badge">{blog.category}</span>
                    </div>
                  ) : (
                    <div className="blog-card-image blog-card-image-placeholder">
                      <span className="blog-card-category-badge">{blog.category}</span>
                    </div>
                  )}
                  <div className="blog-card-content">
                    <h2 className="blog-card-title">{blog.title}</h2>
                    <p className="blog-card-excerpt">{blog.excerpt}</p>
                    <Link to={`/blog/${blog.slug}`} className="blog-card-link">
                      READ MORE →
                    </Link>
                  </div>
                </article>
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
