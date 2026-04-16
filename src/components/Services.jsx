import React from 'react';
import './Services.css';

const services = [
  { title: "Structural Steel Fabrication", desc: "Precision fabrication for major infrastructural developments." },
  { title: "Metal Trading", desc: "Sourcing and supplying high-grade steel materials globally." },
  { title: "Custom Solutions", desc: "Bespoke structural solutions tailored to project specifications." }
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
              <div className="service-icon"></div>
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
