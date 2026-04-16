import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content container">
        <h1 className="hero-title animate-fade-up">
          Forging the Future in <br />
          <span className="gold-gradient-text">Structural Steel</span>
        </h1>
        <p className="hero-subtitle animate-fade-up delay-100">
          STARGOLD STEEL L.L.C delivers unparalleled quality and strength in steel trading and manufacturing, anchoring tomorrow's infrastructure.
        </p>
        <div className="hero-actions animate-fade-up delay-200">
          <a href="#services" className="btn-primary" style={{ textDecoration: 'none' }}>Explore Products</a>
          <a href="#contact" className="btn-outline" style={{ textDecoration: 'none' }}>Contact Us</a>
        </div>
      </div>
      <div className="hero-background"></div>
    </section>
  );
};

export default Hero;
