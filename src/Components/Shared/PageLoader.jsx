import React from 'react';
import './PageLoader.css';

const PageLoader = () => (
  <div className="page-loader">
    <div className="page-loader__inner">
      {/* Brand wordmark */}
      <div className="page-loader__logo">
        <span className="page-loader__logo-box">BOX</span>
        <span className="page-loader__logo-text">BUILDTECH</span>
      </div>
      {/* Gold bar loader */}
      <div className="page-loader__bar-track">
        <div className="page-loader__bar-fill" />
      </div>
    </div>
  </div>
);

export default PageLoader;
