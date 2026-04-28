import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { 
    id: 1,
    category: "Interior", 
    title: "Interior", 
    desc: "Bespoke interior solutions combining steel craftsmanship with modern architectural aesthetics.",
    bgImage: "/services/interior.jpg"
  },
  { 
    id: 2,
    category: "Villa Kitchen", 
    title: "Villa Kitchen", 
    desc: "Premium stainless steel kitchen systems tailored for high-end residential luxury villas.",
    bgImage: "/services/villa-kitchen.jpg"
  },
  { 
    id: 3,
    category: "Cafeteria", 
    title: "Cafeteria Kitchen Equipments", 
    desc: "Professional-grade heavy-duty kitchen setups for mass catering and cafeterias.",
    bgImage: "/services/cafeteria.jpg"
  },
  { 
    id: 4,
    category: "Stencils", 
    title: "Stencils", 
    desc: "Custom metal stencils and artistic stainless steel work for modern spaces.",
    bgImage: "/services/restored_stencils.png"
  },
  { 
    id: 5,
    category: "Restaurant", 
    title: "Restaurant Kitchen Equipments", 
    desc: "Complete industrial fabrication for elite restaurant kitchen environments.",
    bgImage: "/services/restaurant.jpg"
  }
];

const Services = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const slider = sliderRef.current;
      const cards = cardsRef.current;

      // Master scrubbing animation: Moves the entire slider horizontally
      gsap.to(slider, {
        x: () => -(slider.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${slider.scrollWidth}`, // Vertical scroll proportional to horizontal content
          pin: true, // Pin the section while scrolling horizontally
          scrub: 1, 
          invalidateOnRefresh: true,
          // onUpdate logic to handle individual card focal state
          onUpdate: (self) => {
            const centerX = window.innerWidth / 2;
            
            cards.forEach((card) => {
              if (!card) return;
              const rect = card.getBoundingClientRect();
              const cardMid = rect.left + (rect.width / 2);
              
              const distance = Math.abs(centerX - cardMid);
              // Threshold for "Focus": 350px from center (wider for smoother transitions)
              if (distance < 350) {
                card.classList.add('focal-focus');
              } else {
                card.classList.remove('focal-focus');
              }
            });
          }
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="services-pinned-container">
        <div className="services-dot-grid"></div>
        
        <div className="services-header">
          <h2 className="animate-fade-up">Our <span className="gold-gradient-text">Core Services</span></h2>
          <p className="services-sub-heading animate-fade-up">All steel fabrication services available</p>
        </div>

        <div className="services-slider-wrapper">
          <div className="services-slider" ref={sliderRef}>
            {services.map((svc, idx) => (
              <div 
                key={svc.id} 
                ref={el => cardsRef.current[idx] = el}
                className="service-card"
              >
                {/* Background Image Layer */}
                {svc.bgImage && (
                  <div 
                    className="service-card-bg"
                    style={{ backgroundImage: `url(${svc.bgImage})` }}
                  ></div>
                )}
                <div className="service-card-overlay"></div>

                <div className="card-pill">{svc.category}</div>
                <h3 className="card-title">{svc.title}</h3>
                <p className="card-description">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
