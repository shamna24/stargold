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

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.433 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-cta-container">
        <h2 className="footer-headline">
          <span className="italic-serif">A Complete Solution</span><br/>
          <span className="italic-serif">For Structural Steel</span>
        </h2>
      </div>
      
      <div className="footer-contact-info">
        <div className="footer-links">
          <a href="tel:+971588862206" className="contact-link">+971 58 886 2206</a>
          <a href="tel:+971588862202" className="contact-link">+971 58 886 2202</a>
          <a href="mailto:stargoldajman@gmail.com" className="contact-link">stargoldajman@gmail.com</a>
        </div>
        
        <div className="whatsapp-wrapper">
          <a 
            href="https://wa.me/971588862206" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-enquiry-btn"
          >
            <WhatsAppIcon />
            <span>WHATSAPP ENQUIRY</span>
          </a>
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
