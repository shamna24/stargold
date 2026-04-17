import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrolled = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Calculate scroll relative to section
      if (scrolled + window.innerHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
        const relativeScroll = scrolled - sectionTop;
        sectionRef.current.style.setProperty('--scroll-y', `${relativeScroll}px`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="about-section section-padding" ref={sectionRef}>
      <div className="parallax-bg">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      <div className="container about-grid">
        <div className="about-content animate-fade-up">
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
