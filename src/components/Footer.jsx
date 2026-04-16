import React from 'react';
import './Footer.css';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="100%" height="100%">
    <rect width="24" height="24" rx="5" fill="#333333"/>
    <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="#FFFFFF" strokeWidth="1.8" fill="none"/>
    <circle cx="12" cy="12" r="3" stroke="#FFFFFF" strokeWidth="1.8" fill="none"/>
    <circle cx="16" cy="8" r="1.2" fill="#FFFFFF"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="100%" height="100%">
    <rect width="24" height="24" rx="5" fill="#333333"/>
    <path fill="#FFFFFF" d="M7.4 17.5H5.1V9.7h2.3v7.8zm-1.1-8.8a1.3 1.3 0 1 1 1.3-1.3 1.3 1.3 0 0 1-1.3 1.3z" />
    <path fill="#FFFFFF" d="M9.8 17.5h2.3v-4.3c0-1.1.2-2.1 1.6-2.1 1.3 0 1.4 1.2 1.4 2.2v4.2h2.3v-4.7c0-2.4-.6-4.3-3.4-4.3-1.4 0-2.4.8-2.7 1.5h-.1V8.6H9.8c.1 1.1 0 8.9 0 8.9z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="100%" height="100%">
    <rect width="24" height="24" rx="5" fill="#333333"/>
    <path fill="#FFFFFF" d="M13.2 5v8a2.5 2.5 0 1 1-2.5-2.5c.3 0 .6.1.8.1V8.6c-.3 0-.6-.1-.8-.1a4.5 4.5 0 1 0 4.5 4.5v-3.8c1 .8 2.2 1.3 3.5 1.3V8.4c-1.3 0-2.6-.5-3.5-1.4V5h-2z" />
  </svg>
);

const DownloadIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>);

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-cta-container">
        <h2 className="footer-headline">
          <span className="italic-serif">A Complete Solution</span><br/>
          <span className="italic-serif">For Structural Steel</span>
        </h2>
        <button className="footer-pill-btn">CONTACT US TODAY</button>
      </div>
      
      <div className="footer-contact-info">
        <div className="footer-links">
          <span>+971 58 886 2200</span>
          <span>info@stargoldsteelllc.com</span>
        </div>
        <div className="footer-address">
          AJMAN JURF-1, UAE
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="social-icons">
          <a href="https://www.instagram.com/stargoldsteelllc/" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
          <a href="https://www.linkedin.com/in/stargoldsteel" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
          <a href="https://www.tiktok.com/@stargoldsteelllc" target="_blank" rel="noopener noreferrer"><TikTokIcon /></a>
        </div>
      </div>

      <div className="profile-download">
        <span className="profile-label">PROFILE</span>
        <button className="download-btn"><DownloadIcon /></button>
      </div>

      <div className="footer-bottom">
        <a href="https://www.instagram.com/intellex.web?igsh=MTVlYjBid3gwbHBmZw==" target="_blank" rel="noopener noreferrer" className="developers-credits">
          <span className="dev-text">MEET THE DEVELOPERS</span>
          <div className="dev-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
