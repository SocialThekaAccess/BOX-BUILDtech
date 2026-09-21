import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './ProjectDetail.css';

/* ── Villa 361 images ── */
import hero361   from '../../assets/heroproject1.webp';
import v361_2    from '../../assets/res-villa-361-2.jpg';
import v361_3    from '../../assets/res-villa-361-3.jpg';
import v361_4    from '../../assets/res-villa-361-4.jpg';
import v361_5    from '../../assets/res-villa-361-5.jpg';
import v361_6    from '../../assets/res-villa-361-6.jpg';
import v361_7    from '../../assets/res-villa-361-7.jpg';
import v361_8    from '../../assets/res-villa-361-8.jpg';
import v361_9    from '../../assets/res-villa-361-9.jpg';

/* ── Villa 58 images ── */
import hero58    from '../../assets/Villaa58.png';
import v58_1     from '../../assets/res-villa-58-1.png';
import v58_2     from '../../assets/res-villa-58-2.png';
import v58_3     from '../../assets/res-villa-58-3.jpg';
import v58_4     from '../../assets/res-villa-58-4.jpg';
import v58_7     from '../../assets/res-villa-58-7.jpg';
import v58_8     from '../../assets/res-villa-58-8.jpg';

/* ── Villa 303 images ── */
import hero303   from '../../assets/Villa303Slider.png';
import v303_1    from '../../assets/res-villa-303-1.jpg';
import v303_2    from '../../assets/res-villa-303-2.png';
import v303_3    from '../../assets/res-villa-303-3.png';
import v303_4    from '../../assets/res-villa-303-4.png';
import v303_5    from '../../assets/res-villa-303-5.png';
import v303_6    from '../../assets/res-villa-303-6.png';
import v303_7    from '../../assets/res-villa-303-7.png';

/* ── Project Data ── */
const PROJECTS_DATA = {
  'villa-361': {
    title: 'Villa 361',
    location: 'Chandigarh, India',
    year: '2024',
    area: '4,800 sq. ft.',
    type: 'Luxury Residential Villa',
    status: 'Completed',
    heroImage: hero361,
    heroPosition: 'center 40%',
    images: [hero361, v361_2, v361_3, v361_4, v361_5, v361_6, v361_7, v361_8, v361_9],
    description:
      'A stunning modern villa featuring contemporary architecture with clean lines and luxurious finishes. This premium residence combines elegant design with functional spaces, creating a perfect harmony of style and comfort in the heart of Chandigarh.',
    highlights: [
      'Contemporary architecture with clean geometric lines',
      'Premium material finishes throughout',
      'Expansive open-plan living and dining areas',
      'Landscaped exterior with night lighting',
      'Smart home-ready infrastructure',
      'Double-height entrance lobby',
    ],
  },
  'villa-58': {
    title: 'Villa 58',
    location: 'Mohali, India',
    year: '2024',
    area: '5,200 sq. ft.',
    type: 'Luxury Residential Villa',
    status: 'Completed',
    heroImage: hero58,
    heroPosition: 'center 55%',
    images: [hero58, v58_1, v58_2, v58_3, v58_4, v58_7, v58_8],
    description:
      'An architectural masterpiece showcasing innovative design and superior craftsmanship. Villa 58 represents the perfect blend of modern aesthetics and practical living, with spacious interiors and premium amenities that redefine luxury residential living in Mohali.',
    highlights: [
      'Innovative façade design with premium cladding',
      'Spacious multi-level floor plan',
      'High-end kitchen and bathroom fixtures',
      'Integrated outdoor and indoor spaces',
      'Superior structural execution',
      'Premium flooring and woodwork detailing',
    ],
  },
  'villa-303': {
    title: 'Villa 303',
    location: 'New Chandigarh, India',
    year: '2023',
    area: '6,100 sq. ft.',
    type: 'Luxury Residential Villa',
    status: 'Completed',
    heroImage: hero303,
    heroPosition: 'center center',
    heroWide: true, // 16:9 image → hero uses exact 16:9 ratio so nothing gets cropped
    images: [v303_1, v303_2, v303_3, v303_4, v303_5, v303_6, v303_7, hero303],
    description:
      'A contemporary residential marvel featuring bold architectural elements and sophisticated design. This villa exemplifies precision construction and attention to detail, offering expansive living spaces and state-of-the-art facilities that set new standards in luxury housing.',
    highlights: [
      'Bold architectural statement with striking façade',
      'Expansive plot with private landscaping',
      'Luxury bathroom and kitchen fit-out',
      'Precision construction at every stage',
      'State-of-the-art facilities throughout',
      'Premium exterior and interior finishes',
    ],
  },
};

/* ── Lightbox ── */
function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [current]);

  return (
    <div className="pd-lightbox-overlay" onClick={onClose}>
      <button className="pd-lightbox-close" onClick={onClose} aria-label="Close">
        <X size={22} />
      </button>
      <button className="pd-lightbox-nav pd-lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">
        <ChevronLeft size={28} />
      </button>
      <div className="pd-lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
        <img src={images[current]} alt={`Gallery ${current + 1}`} className="pd-lightbox-img" />
        <span className="pd-lightbox-counter">{current + 1} / {images.length}</span>
      </div>
      <button className="pd-lightbox-nav pd-lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">
        <ChevronRight size={28} />
      </button>
    </div>
  );
}

/* ── Main Page ── */
export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const project = PROJECTS_DATA[slug];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project) {
    return (
      <div className="pd-not-found">
        <h2>Project not found</h2>
        <button onClick={() => navigate('/')}>← Back to Home</button>
      </div>
    );
  }

  const {
    title, location, year, area, type, status,
    images, heroImage, description, highlights, heroPosition, heroWide,
  } = project;

  return (
    <div className="pd-page">
      <Helmet>
        <title>{title} | BOX Buildtech – Luxury Construction</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.boxbuildtech.com/projects/${slug}`} />
      </Helmet>

      {/* ── Hero ── */}
      <div className={`pd-hero${heroWide ? ' pd-hero-wide' : ''}`}>
        {/* FIX: hero now uses `heroImage` (not images[0]) so the correct picture always shows */}
        <img
          src={heroImage}
          alt={title}
          className="pd-hero-img"
          style={heroPosition ? { objectPosition: heroPosition } : {}}
        />
        <div className="pd-hero-overlay" />
        <div className="pd-hero-content">
          <button
            className="pd-back-btn"
            onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('projects'); el && el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
            aria-label="Back"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>
          <div className="pd-hero-eyebrow">
            <span className="pd-hero-eyebrow-line" />
            <span className="pd-hero-eyebrow-text">Featured Project</span>
          </div>
          <h1 className="pd-hero-title">{title}</h1>
          <p className="pd-hero-location">
            <MapPin size={15} />
            {location}
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="pd-body">
        <div className="pd-container">

          {/* Meta strip */}
          <div className="pd-meta-strip">
            <div className="pd-meta-item">
              <span className="pd-meta-label">Year</span>
              <span className="pd-meta-value">{year}</span>
            </div>
            <div className="pd-meta-divider" />
            <div className="pd-meta-item">
              <span className="pd-meta-label">Built-up Area</span>
              <span className="pd-meta-value">{area}</span>
            </div>
            <div className="pd-meta-divider" />
            <div className="pd-meta-item">
              <span className="pd-meta-label">Type</span>
              <span className="pd-meta-value">{type}</span>
            </div>
            <div className="pd-meta-divider" />
            <div className="pd-meta-item">
              <span className="pd-meta-label">Status</span>
              <span className="pd-meta-value pd-meta-status">{status}</span>
            </div>
          </div>

          {/* Description + Highlights */}
          <div className="pd-info-grid">
            <div className="pd-info-desc">
              <span className="pd-section-tag">About the Project</span>
              <h2 className="pd-info-title">{title}</h2>
              <span className="pd-info-title-accent" />
              <p className="pd-info-text">{description}</p>
              <button
                className="pd-cta-btn"
                onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                Start Your Project →
              </button>
            </div>
            <div className="pd-info-highlights">
              <span className="pd-section-tag">Project Highlights</span>
              <ul className="pd-highlights-list">
                {highlights.map((h) => (
                  <li key={h} className="pd-highlight-item">
                    <span className="pd-highlight-dot" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gallery */}
          <div className="pd-gallery-section">
            <div className="pd-gallery-header">
              <span className="pd-section-tag">Project Gallery</span>
              <h2 className="pd-gallery-title">Visual <span>Walkthrough</span></h2>
              <p className="pd-gallery-subtitle">Click any image to view full screen</p>
            </div>
            <div className="pd-gallery-grid">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`pd-gallery-item ${i === 0 ? 'pd-gallery-featured' : ''}`}
                  onClick={() => setLightboxIndex(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setLightboxIndex(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={img} alt={`${title} – view ${i + 1}`} loading={i === 0 ? 'eager' : 'lazy'} />
                  <span className="pd-gallery-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="pd-gallery-hover">
                    <span>View Full</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}