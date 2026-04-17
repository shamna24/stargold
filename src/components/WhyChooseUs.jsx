import React from 'react';
import './WhyChooseUs.css';

const QualityIcon = () => (
  <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gold-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF9E0" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#8B7500" />
      </linearGradient>
    </defs>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="url(#gold-grad-1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8v8" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
  </svg>
);

const DeliveryIcon = () => (
  <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gold-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF9E0" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#8B7500" />
      </linearGradient>
    </defs>
    <rect x="1" y="3" width="15" height="13" stroke="url(#gold-grad-2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" stroke="url(#gold-grad-2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="5.5" cy="18.5" r="2.5" stroke="white" strokeWidth="2.5" opacity="0.8"/>
    <circle cx="18.5" cy="18.5" r="2.5" stroke="white" strokeWidth="2.5" opacity="0.8"/>
  </svg>
);

const ConsultingIcon = () => (
  <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gold-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF9E0" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#8B7500" />
      </linearGradient>
    </defs>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="url(#gold-grad-3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8.5" cy="7" r="4" stroke="url(#gold-grad-3)" strokeWidth="2.5"/>
    <polyline points="17 11 19 13 23 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
  </svg>
);

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-choose-us-section section-padding">
      <div className="container">
        <div className="choose-header animate-fade-up">
          <h2 className="premium-title">Why <span className="gold-gradient-text">Choose Us?</span></h2>
          <p className="premium-subtitle">We supply the standards against which others measure.</p>
        </div>
        <div className="choose-grid">
          <div className="choose-card quality-card animate-fade-up delay-100">
            <div className="card-bg-layer"></div>
            <div className="card-content">
              <div className="icon-wrapper">
                <QualityIcon />
              </div>
              <h3>Unmatched Quality</h3>
              <p>We source only the strongest and most resilient steel grades to ensure structural longevity.</p>
            </div>
          </div>
          <div className="choose-card delivery-card animate-fade-up delay-200">
            <div className="card-bg-layer"></div>
            <div className="card-content">
              <div className="icon-wrapper">
                <DeliveryIcon />
              </div>
              <h3>Reliable Delivery</h3>
              <p>Our optimized supply chain ensures your foundational materials arrive precisely on time, everywhere.</p>
            </div>
          </div>
          <div className="choose-card consulting-card animate-fade-up delay-300">
            <div className="card-bg-layer"></div>
            <div className="card-content">
              <div className="icon-wrapper">
                <ConsultingIcon />
              </div>
              <h3>Expert Consulting</h3>
              <p>Our team offers bespoke structural advice tailored directly to your distinct project needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
