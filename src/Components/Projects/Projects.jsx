import React, { useState } from 'react';
import { Tag } from '../Shared/SharedComponents';
import { PROJECTS, PROJECT_FILTERS } from '../../data/constants';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <Tag>Our Portfolio</Tag>
        <h2 className="section-heading">Featured Projects</h2>
        <p className="section-sub">
          A curated selection of our most celebrated work across residential, commercial, and luxury sectors.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        {PROJECT_FILTERS.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {filtered.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} loading="lazy" />
            <div className="project-overlay">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-meta">
                {project.location} · {project.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
