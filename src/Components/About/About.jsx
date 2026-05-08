import React from 'react';
import { GoldLine, Tag } from '../Shared/SharedComponents';
import { ABOUT, ABOUT_FEATURES } from '../../data/constants';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        {/* Image */}
        <div className="about-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
            alt="Our team at work"
          />
        </div>

        {/* Content */}
        <div className="about-content">
          <Tag>{ABOUT.tag}</Tag>
          <h2 className="section-heading">{ABOUT.heading}</h2>
          <GoldLine width="50px" margin="16px 0 24px" />

          {ABOUT.body.map((para, i) => (
            <p key={i} className="about-body">
              {para}
            </p>
          ))}

          {/* Features */}
          <div className="about-features">
            {ABOUT_FEATURES.map((feat) => (
              <div key={feat.title} className="about-feature">
                <span className="about-feature-icon">{feat.icon}</span>
                <div>
                  <div className="about-feature-title">{feat.title}</div>
                  <div className="about-feature-desc">{feat.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <a href={ABOUT.cta.href} className="btn-primary">
            {ABOUT.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
