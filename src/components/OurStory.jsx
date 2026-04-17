import React from 'react';
import './OurStory.css';

const VisionIcon = () => (
  <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const MissionIcon = () => (
  <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const OurStory = () => {
  return (
    <section id="our-story" className="our-story-section">
      <div className="container">
        
        <div className="our-story-header animate-fade-up">
          <h2>Our <span className="gradient-accent-text">Story</span></h2>
          <p className="story-lead">
            Since 2015, we have been crafting excellence in steel fabrication from the heart of Jurf, Ajman, UAE. Driven by years of hands-on experience and an unwavering commitment to precision, we deliver superior craftsmanship that consistently surpasses expectations and makes us a trusted name in the industry.
          </p>
        </div>

        <div className="vision-mission-grid">
          
          <div className="glass-card animate-fade-up delay-100 float-animation-1">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="card-header">
                <div className="icon-wrapper">
                  <VisionIcon />
                </div>
                <h3>Our Vision</h3>
              </div>
              <p>
                To be the premier provider of innovative, sustainable steel fabrication solutions. We continually push the boundaries of technology and methodology to set the industry standard for excellence.
              </p>
            </div>
          </div>

          <div className="glass-card animate-fade-up delay-200 float-animation-2">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="card-header">
                <div className="icon-wrapper">
                  <MissionIcon />
                </div>
                <h3>Our Mission</h3>
              </div>
              <p>
                To deliver superior, custom steel fabrication services through a relentless pursuit of precision and efficiency. We empower our team in a culture of integrity and prioritize environmental sustainability to maximize value for both our clients and future generations.
              </p>
            </div>
          </div>

        </div>

      </div>
      <div className="bg-blur-accent"></div>
    </section>
  );
}

export default OurStory;
