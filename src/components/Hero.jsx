import React, { useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  const featureBlocks = [
    {
      main: "Bespoke Stainless Steel Fabrication",
      sub: "From industrial structures to intricate architectural details, we bring your vision to life.",
      type: "image",
      src: "/hero-img-0.png"
    },
    {
      main: "Complete kitchen solutions for restaurants, cafeterias, and homes.",
      sub: "Designed for hygiene, durability, and modern performance.",
      type: "image",
      src: "/hero-img-1.png"
    },
    {
      main: "Advanced laser cutting technology for clean edges and precise designs.",
      sub: "Ensuring accuracy in every cut.",
      type: "image",
      src: "/hero-img-2.png"
    },
    {
      main: "High-performance sheet metal bending for perfect shaping.",
      sub: "Built for strength, consistency, and industrial efficiency.",
      type: "video",
      src: "/hero-bending-new.mp4"
    },
    {
      main: "Precision shearing with minimal material waste.",
      sub: "Delivering speed, accuracy, and cost-effective production.",
      type: "image",
      src: "/hero-img-4.png"
    },
    {
      main: "Expert craftsmanship backed by years of hands-on experience.",
      sub: "Handling complex fabrication projects with confidence.",
      type: "image",
      src: "/hero-img-5.png"
    },
    {
      main: "Wide range of materials including stainless steel, mild steel, GI, and aluminum.",
      sub: "Versatile solutions for every requirement.",
      type: "image",
      src: "/hero-img-6.png"
    },
    {
      main: "From concept to installation, we manage complete fabrication workflows.",
      sub: "Ensuring seamless execution at every stage.",
      type: "image",
      src: "/hero-img-7.png"
    },
    {
      main: "Durable and reliable metal solutions for industrial and commercial use.",
      sub: "Engineered to perform under demanding conditions.",
      type: "image",
      src: "/hero-img-8.png"
    },
    {
      main: "Customer-focused approach with timely delivery and clear communication.",
      sub: "Committed to quality, precision, and satisfaction.",
      type: "image",
      src: "/hero-img-9.png"
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
            {/* Multi-Layer Asset Stack (Mixing Images and Videos) */}
            {featureBlocks.map((block, index) => (
              block.type === "video" ? (
                <video 
                  key={index}
                  className={`side-video-clip cover-fill video-layer-${index}`} 
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="auto"
                  style={{ 
                    opacity: index === 0 ? 1 : 0, 
                    zIndex: index,
                    objectFit: 'cover',
                    transform: 'scale(1.05)' /* Extra zoom to ensure full coverage */
                  }} 
                >
                  <source src={block.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img 
                  key={index}
                  src={block.src} 
                  className={`side-video-clip cover-fill video-layer-${index}`} 
                  style={{ 
                    opacity: index === 0 ? 1 : 0, 
                    zIndex: index,
                    objectFit: 'cover',
                    transform: 'scale(1.05)' /* Extra zoom to ensure full coverage */
                  }} 
                  alt={`Stargold Fabrication ${index + 1}`} 
                />
              )
            ))}

            <div className="video-clean-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
