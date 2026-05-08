import React from 'react';
import { GoldLine, Tag } from '../Shared/SharedComponents';
import { SERVICES } from '../../data/constants';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="section-header">
        <Tag>What We Do</Tag>
        <h2 className="section-heading">Our Core Services</h2>
        <p className="section-sub">
          From concept to completion, we deliver end-to-end solutions tailored to your vision.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
            <GoldLine width="40px" margin="24px 0 0" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
