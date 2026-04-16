import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="container">
        <div className="gallery-header animate-fade-up">
          <h2>Project <span className="gold-gradient-text">Gallery</span></h2>
          <p>A visual showcase of our premium structural deliveries.</p>
        </div>
        <div className="gallery-grid animate-fade-up delay-200">
          <div className="gallery-item placeholder-1"></div>
          <div className="gallery-item placeholder-2"></div>
          <div className="gallery-item placeholder-3"></div>
          <div className="gallery-item placeholder-4"></div>
          <div className="gallery-item placeholder-5"></div>
          <div className="gallery-item placeholder-6"></div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
