import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './OurMachineries.css';

const machineryData = [
  { id: 1, type: 'video', src: '/machinery/custom/video-1.mp4', title: 'Precision Fabrication', desc: 'Micron-level accuracy for complex steel components.' },
  { id: 2, type: 'image', src: '/machinery/custom/image-1.png', title: 'Advanced Design', desc: '3D modeling and structural engineering excellence.' },
  { id: 3, type: 'video', src: '/machinery/custom/video-2.mp4', title: 'Industrial Bending', desc: 'Heavy-duty shaping with precision control.' },
  { id: 4, type: 'video', src: '/machinery/custom/video-3.mp4', title: 'Laser Cutting', desc: 'High-speed CNC systems for perfect edges.' },
  { id: 5, type: 'image', src: '/machinery/custom/image-2.png', title: 'Technical Workflow', desc: 'Optimized production for large-scale projects.' },
  { id: 6, type: 'video', src: '/machinery/custom/video-4.mp4', title: 'Steel Processing', desc: 'End-to-end handling and material treatment.' },
  { id: 7, type: 'video', src: '/machinery/custom/video-5.mp4', title: 'Modern Workshop', desc: 'State-of-the-art technology in action.' },
  { id: 8, type: 'image', src: '/machinery/custom/image-3.jpeg', title: 'Quality Inspection', desc: 'Rigorous testing for industrial reliability.' },
  { id: 9, type: 'image', src: '/machinery/custom/image-4.png', title: 'Craftsmanship', desc: 'Hand-finished perfection in every piece.' }
];

const MachineryCard = ({ item }) => {
  return (
    <motion.div 
      className="machinery-slide-card"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="card-media-wrapper">
        {item.type === 'video' ? (
          <video 
            src={item.src} 
            muted loop playsInline autoPlay 
            className="card-media"
          />
        ) : (
          <img src={item.src} alt={item.title} className="card-media" />
        )}
        <div className="card-media-overlay"></div>
      </div>
      <div className="card-info">
        <div className="card-tag">Machinery</div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </motion.div>
  );
};

const OurMachineries = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;
  const xTranslate = isMobile ? "-680%" : "-195%";
  const x = useTransform(scrollYProgress, [0, 1], ["0%", xTranslate]);

  return (
    <section id="machineries" className="machinery-section horizontal-scroll-section" ref={targetRef}>
      <div className="sticky-wrapper">
        <div className="horizontal-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="gold-gradient-text">Machineries</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our state-of-the-art industrial technology.
          </motion.p>
        </div>

        <motion.div style={{ x }} className="horizontal-slider">
          {machineryData.map((item) => (
            <MachineryCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
      
      <div className="machinery-blueprint-overlay"></div>
    </section>
  );
};

export default OurMachineries;
