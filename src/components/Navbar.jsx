import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const introSection = document.querySelector('.cinematic-intro');
      if (introSection) {
        // Delay navbar until nearly the very end of the scroll buffer
        const threshold = introSection.offsetHeight * 0.95;
        setIsVisible(window.scrollY > threshold);
      } else {
        setIsVisible(window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${!isVisible ? 'hidden' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <span className="logo-text">STAR<span className="gold">GOLD</span> STEEL</span>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          
          <div className="nav-dropdown">
            <a href="#about" className="dropbtn">About Us</a>
            <div className="dropdown-content">
              <a href="#our-story">Our Story</a>
              <a href="#why-choose-us">Why Choose Us</a>
            </div>
          </div>

          <a href="#contact" className="contact-btn">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
