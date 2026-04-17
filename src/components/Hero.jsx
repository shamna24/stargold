import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure metadata is loaded to get duration
    const handleLoadedMetadata = () => {
      // Initialize video to start
      video.currentTime = 0;
    };
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    const handleScroll = () => {
      if (!heroRef.current || !videoRef.current) return;
      
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress based on the first fold (0 to 1)
      let progress = scrolled / viewportHeight;
      progress = Math.min(Math.max(progress, 0), 1);
      
      requestAnimationFrame(() => {
        if (videoRef.current && videoRef.current.duration) {
          videoRef.current.currentTime = videoRef.current.duration * progress;
        }
        // Update CSS variable for other parallax effects
        heroRef.current.style.setProperty('--hero-scroll', progress);
      });
    };


    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>


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
      <div className="hero-background-container">
        <video 
          ref={videoRef}
          muted 
          playsInline 
          className="hero-video"
          preload="auto"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

    </section>
  );
};

export default Hero;
