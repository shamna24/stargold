import React, { useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  const featureBlocks = [
    {
      text: "From heavy-duty structures to precision-crafted finishes, we transform raw steel into powerful, lasting solutions."
    },
    {
      text: "Precision cutting. Smart bending. Expert fabrication. Every detail engineered to perfection."
    },
    {
      text: "From concept to completion, we deliver steel solutions that combine strength, durability, and design excellence."
    },
    {
      text: "High-quality stainless steel solutions for industries, businesses, and modern living spaces."
    },
    {
      text: "Engineered with precision. Built with strength. Delivered with uncompromising quality."
    }
  ];

  return (
    <section id="home" className="hero-sticky-section hero-theme-light" ref={heroRef}>
      <div className="hero-sticky-container nexara-layout">
        
        {/* Left: Scrolling Focus Text Column */}
        <div className="hero-sticky-left-scroll">
          {featureBlocks.map((block, index) => (
            <div key={index} className="feature-focus-item">
              <div className="feature-focus-content">
                <p className="feature-text-main">{block.text}</p>
              </div>
            </div>
          ))}
          
          <div className="hero-extra-actions">
             <a href="#services" className="btn-primary" style={{ textDecoration: 'none' }}>View Full Specs</a>
             <a href="#contact" className="btn-outline" style={{ textDecoration: 'none' }}>Get A Quote</a>
          </div>
        </div>

        {/* Right: Sticky Video Column (Large View, Right Pinned) */}
        <div className="hero-sticky-right-video">
          <div className="video-frame large-right-rectangle industrial-notch-left">
            <video 
              muted 
              playsInline 
              autoPlay 
              loop
              className="side-video-clip cover-fill"
              preload="auto"
              data-controls="false"
            >
              <source src="/video-8.mp4" type="video/mp4" />
            </video>
            <div className="video-clean-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
