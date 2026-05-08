import React from 'react';
import { Tag } from '../Shared/SharedComponents';
import { TESTIMONIALS } from '../../data/constants';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="section-header">
        <Tag>Client Stories</Tag>
        <h2 className="section-heading">What Our Clients Say</h2>
        <p className="section-sub">
          Real words from the people who trusted us with their most important projects.
        </p>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="testimonial-card">
            {/* Stars */}
            <div className="testimonial-stars">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="testimonial-text">"{t.text}"</p>

            {/* Author */}
            <div className="testimonial-author">
              <div className="author-avatar">{t.avatar}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
