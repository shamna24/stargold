import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <span className="logo-text">STAR<span className="gold">GOLD</span> STEEL</span>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          
          <div className="nav-dropdown">
            <a href="#about" className="dropbtn">About Us</a>
            <div className="dropdown-content">
              <a href="#our-story">Our Story</a>
            </div>
          </div>

          <div className="nav-dropdown">
            <a href="#services" className="dropbtn">Services</a>
            <div className="dropdown-content">
              <a href="#why-choose-us">Why Choose Us?</a>
            </div>
          </div>

          <a href="#gallery">Gallery</a>
          <a href="#contact" className="contact-btn">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
