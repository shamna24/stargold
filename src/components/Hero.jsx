import React, { useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  const featureBlocks = [
    {
      main: "Custom stainless steel fabrication tailored to your exact needs.",
      sub: "From industrial structures to detailed architectural elements."
    },
    {
      main: "Complete kitchen solutions for restaurants, cafeterias, and homes.",
      sub: "Designed for hygiene, durability, and modern performance."
    },
    {
      main: "Advanced laser cutting technology for clean edges and precise designs.",
      sub: "Ensuring accuracy in every cut."
    },
    {
      main: "High-performance sheet metal bending for perfect shaping.",
      sub: "Built for strength, consistency, and industrial efficiency."
    },
    {
      main: "Precision shearing with minimal material waste.",
      sub: "Delivering speed, accuracy, and cost-effective production."
    },
    {
      main: "Expert craftsmanship backed by years of hands-on experience.",
      sub: "Handling complex fabrication projects with confidence."
    },
    {
      main: "Wide range of materials including stainless steel, mild steel, GI, and aluminum.",
      sub: "Versatile solutions for every requirement."
    },
    {
      main: "From concept to installation, we manage complete fabrication workflows.",
      sub: "Ensuring seamless execution at every stage."
    },
    {
      main: "Durable and reliable metal solutions for industrial and commercial use.",
      sub: "Engineered to perform under demanding conditions."
    },
    {
      main: "Customer-focused approach with timely delivery and clear communication.",
      sub: "Committed to quality, precision, and satisfaction."
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

        {/* Right: Sticky Video Column (Large View, Right Pinned) */}
        <div className="hero-sticky-right-video">
          <div className="video-frame large-right-rectangle industrial-notch-left">
            {/* Multi-Layer Video Stack */}
            <video 
              muted 
              playsInline 
              autoPlay 
              loop
              className="side-video-clip cover-fill video-layer-1"
              preload="auto"
              style={{ opacity: 1, zIndex: 3 }}
            >
              <source src="/hero-1.mp4" type="video/mp4" />
            </video>
            
            <video 
              muted 
              playsInline 
              autoPlay 
              loop
              className="side-video-clip cover-fill video-layer-2"
              preload="auto"
              style={{ opacity: 0, zIndex: 2 }}
            >
              <source src="/hero-2.mp4" type="video/mp4" />
            </video>

            <video 
              muted 
              playsInline 
              autoPlay 
              loop
              className="side-video-clip cover-fill video-layer-3"
              preload="auto"
              style={{ opacity: 0, zIndex: 1 }}
            >
              <source src="/hero-3.mp4" type="video/mp4" />
            </video>

            <div className="video-clean-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
