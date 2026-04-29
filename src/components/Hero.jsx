import React, { useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  const featureBlocks = [
    {
      main: "Bespoke Stainless Steel Fabrication",
      sub: "From industrial structures to intricate architectural details, we bring your vision to life.",
      video: "/hero-1.mp4"
    },
    {
      main: "Commercial Kitchen Excellence",
      sub: "Complete solutions for restaurants and hospitals, engineered for hygiene and performance.",
      video: "/hero-2.mp4"
    },
    {
      main: "Advanced Laser Cutting & Bending",
      sub: "State-of-the-art technology ensuring extreme precision in every cut and curve.",
      video: "/hero-3.mp4"
    },
    {
      main: "Heavy Structural Steel Work",
      sub: "Durable and reliable metal solutions for demanding industrial environments.",
      video: "/video-18.mp4"
    },
    {
      main: "End-to-End Project Management",
      sub: "From concept design to final installation, we ensure seamless execution at every stage.",
      video: "/intro-video.mp4"
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
                <p className="feature-text-main">{block.main}</p>
                <p className="feature-text-sub">{block.sub}</p>
              </div>
            </div>
          ))}
          
        </div>

        <div className="hero-sticky-right-video">
          <div className="video-frame large-right-rectangle industrial-notch-left">
            {featureBlocks.map((block, index) => (
              <video 
                key={index}
                src={block.video} 
                className={`side-video-clip cover-fill video-layer-${index}`} 
                muted
                loop
                playsInline
                autoPlay
                style={{ 
                  opacity: index === 0 ? 1 : 0, 
                  zIndex: 10 - index 
                }} 
              />
            ))}

            <div className="video-clean-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
