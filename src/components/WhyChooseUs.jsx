import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-choose-us-section section-padding">
      <div className="container">
        <div className="choose-header animate-fade-up">
          <h2>Why <span className="gold-gradient-text">Choose Us?</span></h2>
          <p>We supply the standards against which others measure.</p>
        </div>
        <div className="choose-grid">
          <div className="choose-card animate-fade-up delay-100">
            <h3>Unmatched Quality</h3>
            <p>We source only the strongest and most resilient steel grades to ensure structural longevity.</p>
          </div>
          <div className="choose-card animate-fade-up delay-200">
            <h3>Reliable Delivery</h3>
            <p>Our optimized supply chain ensures your foundational materials arrive precisely on time, everywhere.</p>
          </div>
          <div className="choose-card animate-fade-up delay-300">
            <h3>Expert Consulting</h3>
            <p>Our team offers bespoke structural advice tailored directly to your distinct project needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
