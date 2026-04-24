import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <header className={`navbar-pill-container ${!isVisible ? 'hidden' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="navbar-pill">
          <div className="logo">
            <span className="logo-text">STAR<span className="gold">GOLD</span></span>
          </div>
          
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#machineries">Machineries</a>
            
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
            
            <button 
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle Navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#machineries" onClick={closeMenu}>Machineries</a>
        
        <div className="mobile-nav-dropdown">
          <span className="dropbtn">About Us</span>
          <div className="dropdown-content-mobile">
            <a href="#our-story" onClick={closeMenu}>Our Story</a>
            <a href="#why-choose-us" onClick={closeMenu}>Why Choose Us</a>
          </div>
        </div>
        
        <a href="#contact" className="contact-btn-mobile" onClick={closeMenu} style={{ 
            marginTop: '20px', 
            border: '1px solid var(--primary-gold)', 
            padding: '12px 30px', 
            borderRadius: '999px',
            color: 'var(--primary-gold)',
            fontSize: '1rem'
        }}>CONTACT US</a>
      </div>
    </>
  );
};

export default Navbar;

