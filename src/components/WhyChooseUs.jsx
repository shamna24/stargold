import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-choose-us-section">
      <div className="container hex-container">
        
        <div className="hexagon-grid">
          
          <div className="hex-card card-top-right animate-fade-up">
            <div className="hex-inner">
              <span className="hex-label">OUR SERVICES</span>
              <h3>Stainless Steel <br/> Kitchen Equipment</h3>
              <p>Elevate your culinary space with our premium stainless steel kitchen equipment. From sleek countertops to durable sinks, we offer a wide range of solutions tailored to your needs.</p>
            </div>
          </div>

          <div className="hex-card card-center-left animate-fade-up delay-100">
            <div className="hex-inner">
              <span className="hex-label">WHY CHOOSE US?</span>
              <h3>Uncompromising <br/> Quality</h3>
              <p>We take pride in delivering excellence with every project we undertake. From meticulous planning to precise execution, our team ensures that every detail is perfected to meet the highest standards.</p>
            </div>
          </div>

          <div className="hex-card card-bottom-right animate-fade-up delay-200">
            <div className="hex-inner">
              <span className="hex-label">RELIABLE EXPERTISE</span>
              <p>With years of experience in the industry, our team of experts possesses the knowledge and skills necessary to tackle even the most complex fabrication challenges. You can trust us to deliver results that surpass your expectations.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
