import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container about-grid">
        <div className="about-text animate-fade-up">
          <h2>About <span className="gold-gradient-text">STARGOLD</span></h2>
          <p>
            Based in Ajman Jurf-1, STARGOLD STEEL L.L.C is a premier provider of industrial and structural steel materials. We are dedicated to delivering excellence, supporting foundational infrastructure developments, and maintaining the highest standards of structural integrity across the UAE region.
          </p>
          <div className="stats">
            <div className="stat-box">
              <h3>Premium</h3>
              <span>Quality</span>
            </div>
            <div className="stat-box">
              <h3>UAE</h3>
              <span>Based Hub</span>
            </div>
            <div className="stat-box">
              <h3>Robust</h3>
              <span>Materials</span>
            </div>
          </div>
        </div>
        <div className="about-visual animate-fade-up delay-200">
          <div className="steel-block">
             <div className="glow-effect"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
