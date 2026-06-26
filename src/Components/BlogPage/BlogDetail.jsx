import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './BlogDetail.css';

const blogContent = {
  'professional-construction-company-chandigarh': {
    category: 'CONSTRUCTION',
    title: 'Why Choosing a Professional Construction Company in Chandigarh Matters for Luxury Home Projects',
    author: 'Box Buildtech Team',
    date: '26 June, 2026',
    readTime: '6 min read',
    content: (
      <>
        <p className="lead-paragraph">Building a luxury home is one of the most significant investments a family can make. Whether you are planning a modern villa, a premium residence, or a custom-designed dream home, selecting the right construction partner can determine the success of your entire project. This is why working with an experienced construction company in Chandigarh is essential.</p>

        <h3>The Growing Demand for Premium Residential Construction</h3>
        <p>Chandigarh, Mohali, and the surrounding Tricity region have witnessed tremendous growth in luxury residential developments. Homeowners today seek more than just construction services—they expect transparency, quality craftsmanship, timely delivery, and complete project accountability.</p>
        <p>A professional construction company brings together architects, engineers, project managers, and skilled labor to ensure every aspect of the project is executed according to plan.</p>

        <h3>Benefits of Hiring Experienced Building Contractors in Chandigarh</h3>
        
        <h4>1. Superior Construction Quality</h4>
        <p>Experienced building contractors in Chandigarh understand structural requirements, local regulations, and quality standards. They ensure that every stage of construction—from foundation work to finishing—is completed with precision.</p>

        <h4>2. Transparent Project Management</h4>
        <p>One of the biggest challenges homeowners face is managing timelines, budgets, and contractors. Professional civil contractors in Chandigarh implement structured systems that provide regular progress updates and complete visibility throughout the construction process.</p>

        <h4>3. Better Coordination with Architects</h4>
        <p>Luxury homes often involve complex architectural designs. Professional contractors work closely with architects to maintain design integrity and ensure the final structure matches the original vision.</p>

        <h4>4. Efficient Resource Management</h4>
        <p>Material procurement, labor management, quality control, and scheduling require expertise. An established construction company can streamline these processes and minimize costly delays.</p>

        <h3>Why Turnkey Construction Is Becoming Popular</h3>
        <p>Many homeowners now prefer working with a turnkey construction company in Chandigarh because it offers a single point of responsibility for the entire project.</p>
        <p>Turnkey construction services typically include:</p>
        <ul>
          <li>Planning and estimation</li>
          <li>Structural construction</li>
          <li>Material procurement</li>
          <li>Site supervision</li>
          <li>Quality assurance</li>
          <li>Finishing and handover</li>
        </ul>
        <p>This integrated approach reduces stress and ensures smooth project execution.</p>

        <h3>What to Look for in a Construction Partner</h3>
        <p>Before selecting a contractor, consider the following:</p>
        <ul>
          <li>Proven portfolio of completed projects</li>
          <li>Transparent pricing structure</li>
          <li>Strong project management systems</li>
          <li>Experience in luxury residential construction</li>
          <li>Positive client testimonials</li>
          <li>Commitment to quality and timelines</li>
        </ul>

        <h3>Box Buildtech: Delivering Construction Excellence</h3>
        <p>At Box Buildtech, we focus on system-driven construction management that provides complete transparency, accountability, and design-faithful execution. Our team collaborates closely with architects and homeowners to deliver premium residential projects that meet the highest standards of quality.</p>
        <p>Whether you are looking for building contractors in Chandigarh, civil contractors in Chandigarh, or a trusted turnkey construction company in Chandigarh, choosing the right construction partner can transform your vision into reality.</p>

        <h3>Final Thoughts</h3>
        <p>Luxury home construction demands expertise, planning, and flawless execution. Partnering with a reliable construction company in Chandigarh ensures your dream home is built with precision, transparency, and long-term value. The right construction team not only builds structures but also creates spaces that families cherish for generations.</p>
      </>
    ),
  },
  'luxury-villa-construction-chandigarh-guide': {
    category: 'LUXURY VILLA',
    title: 'Luxury Villa Construction Chandigarh: A Complete Guide to Building Your Dream Home',
    author: 'Box Buildtech Team',
    date: '26 June, 2026',
    readTime: '6 min read',
    content: (
      <>
        <p className="lead-paragraph">The demand for luxury villas across Chandigarh and Mohali continues to rise as homeowners seek personalized living spaces that combine elegance, comfort, and modern functionality. Whether you are planning a contemporary villa or a timeless architectural masterpiece, successful execution depends on selecting the right construction experts.</p>

        <h3>Why Luxury Villas Are Gaining Popularity</h3>
        <p>Luxury villas offer unmatched privacy, spacious layouts, premium amenities, and complete design flexibility. Unlike standard residential developments, villas are custom-built to reflect the homeowner's lifestyle and preferences.</p>
        <p>From smart home integration to premium landscaping and bespoke interiors, modern villa construction requires detailed planning and specialized expertise.</p>

        <h3>Key Stages of Luxury Villa Construction</h3>
        
        <h4>Site Evaluation and Planning</h4>
        <p>Every successful project begins with proper site analysis. Soil conditions, plot dimensions, orientation, and local regulations must be carefully assessed before construction begins.</p>

        <h4>Architectural Design</h4>
        <p>A luxury villa should balance aesthetics with functionality. Collaboration between architects, engineers, and construction teams ensures the design can be executed without compromising structural integrity.</p>

        <h4>Structural Construction</h4>
        <p>The structural phase forms the backbone of the project. Professional construction contractors in Mohali focus on quality materials, engineering precision, and strict quality control to ensure long-term durability.</p>

        <h4>Premium Finishes and Interiors</h4>
        <p>Luxury homes require meticulous attention to detail. Flooring, lighting, woodwork, stone finishes, and custom interiors contribute significantly to the final experience.</p>

        <h3>The Importance of Choosing Luxury Home Builders in Chandigarh</h3>
        <p>Luxury construction projects involve higher levels of complexity than standard residential buildings. Experienced luxury home builders in Chandigarh understand how to manage premium materials, sophisticated designs, and strict quality standards.</p>
        <p>The right builder helps ensure:</p>
        <ul>
          <li>Design accuracy</li>
          <li>Budget control</li>
          <li>Timeline management</li>
          <li>Quality assurance</li>
          <li>Seamless project coordination</li>
        </ul>

        <h3>Why Homeowners Prefer Turnkey Construction</h3>
        <p>Working with a turnkey construction company Chandigarh offers several advantages:</p>
        <ul>
          <li>Single-point project management</li>
          <li>Better cost control</li>
          <li>Faster execution</li>
          <li>Improved accountability</li>
          <li>Reduced homeowner involvement in daily operations</li>
        </ul>
        <p>This approach allows homeowners to focus on decision-making while professionals handle execution.</p>

        <h3>Choosing the Right Construction Company in Mohali</h3>
        <p>When evaluating a construction company in Mohali, consider:</p>
        <ul>
          <li>Experience with luxury residential projects</li>
          <li>Project management systems</li>
          <li>Quality assurance processes</li>
          <li>Transparent communication</li>
          <li>Strong portfolio of completed villas</li>
        </ul>
        <p>A professional team should provide complete visibility into every stage of construction and maintain close coordination with architects and consultants.</p>

        <h3>Why Box Buildtech Stands Apart</h3>
        <p>At Box Buildtech, we specialize in premium residential construction, luxury villa construction Chandigarh, and custom-built homes across the Tricity region. Our system-driven approach ensures transparency, design fidelity, and accountability throughout the project lifecycle.</p>
        <p>We work closely with homeowners and architects to deliver homes that reflect exceptional craftsmanship and uncompromising quality.</p>

        <h3>Conclusion</h3>
        <p>Building a luxury villa is a journey that requires careful planning, expert execution, and a trusted construction partner. By choosing experienced luxury home builders in Chandigarh and professional construction contractors in Mohali, homeowners can create a residence that delivers comfort, value, and lasting architectural excellence.</p>
      </>
    ),
  },
};

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogContent[slug];

  // Force navbar to scrolled state
  useEffect(() => {
    document.body.classList.add('blog-page-active');
    window.scrollTo(0, 0);
    
    return () => {
      document.body.classList.remove('blog-page-active');
    };
  }, []);

  // Custom meta data for specific blogs
  const getMetaData = (slug) => {
    const metaData = {
      'professional-construction-company-chandigarh': {
        title: 'Professional Construction Company in Chandigarh | Box Buildtech',
        description: 'Build your dream luxury home with Box Buildtech, a trusted construction company in Chandigarh offering turnkey construction, expert project management, and premium building solutions.',
      },
      'luxury-villa-construction-chandigarh-guide': {
        title: 'Luxury Villa Construction Chandigarh | Box Buildtech',
        description: 'Build your dream villa with Box Buildtech, trusted luxury home builders in Chandigarh offering premium villa construction, turnkey solutions, and expert project management.',
      },
    };
    return metaData[slug] || { title: blog.title + ' | Box Build Tech', description: blog.title };
  };

  if (!blog) {
    return (
      <div className="blog-detail-page">
        <div className="blog-detail-container">
          <div className="blog-not-found">
            <h2>Blog Not Found</h2>
            <Link to="/blog" className="back-link">
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const meta = getMetaData(slug);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`https://www.boxbuildtech.com/blog/${slug}`} />
      </Helmet>

      <div className="blog-detail-page">
        {/* Hero Section */}
        <div className="blog-detail-hero">
          <div className="blog-detail-hero-overlay"></div>
          <div className="blog-detail-hero-content">
            <Link to="/blog" className="back-link">
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
            <span className="blog-detail-category">{blog.category}</span>
            <h1 className="blog-detail-hero-title">{blog.title}</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="blog-detail-wrapper">
          <div className="blog-detail-container">
            <article className="blog-detail-content">
              {blog.content}
            </article>

            {/* CTA Section */}
            <div className="blog-detail-cta">
              <h3>Ready to Build Your Dream Home?</h3>
              <p>Let's discuss your luxury construction project and bring your vision to life.</p>
              <Link to="/contact" className="cta-button">
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
