import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.querySelector('.cinematic-intro');
      if (introSection) {
        // Show pill after some initial scroll of the intro
        const threshold = window.innerHeight * 0.1; 
        setIsVisible(window.scrollY > threshold);
      } else {
        setIsVisible(window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-pill-container ${!isVisible ? 'hidden' : ''}`}>
      <div className="navbar-pill">
        <div className="logo">
          <span className="logo-text">STAR<span className="gold">GOLD</span></span>
        </div>
        
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          
          <div className="nav-dropdown">
            <span className="dropbtn">About Us</span>
            <div className="dropdown-content">
              <a href="#our-story">Our Story</a>
              <a href="#why-choose-us">Why Choose Us</a>
            </div>
          </div>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="contact-btn">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
