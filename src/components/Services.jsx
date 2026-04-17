import React from 'react';
import './Services.css';

const services = [
  { 
    title: "Structural Steel Fabrication", 
    desc: "Precision fabrication for major infrastructural developments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"/><path d="M7 20v-5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5"/><path d="M3 8l9-5 9 5v12H3V8z"/>
      </svg>
    )
  },
  { 
    title: "Metal Trading", 
    desc: "Sourcing and supplying high-grade steel materials globally.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    )
  },
  { 
    title: "Custom Solutions", 
    desc: "Bespoke structural solutions tailored to project specifications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
      </svg>
    )
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="services-header animate-fade-up">
          <h2>Our <span className="gold-gradient-text">Core Services</span></h2>
          <p>Delivering robust capability across the steel industry supply chain.</p>
        </div>
        <div className="services-grid">
          {services.map((svc, idx) => (
            <div key={idx} className={`service-card animate-fade-up delay-200`}>
              <div className="service-icon">
                {svc.icon}
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
