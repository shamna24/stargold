import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './OurMachineries.css';

const machineryData = [
  { id: 1, type: 'video', src: '/machinery/new/new-12.mp4', title: 'Precision Fabrication', size: 'large', autoPlay: true },
  { id: 13, type: 'image', src: '/machinery/new/extra-1.png', title: 'Technical Design', size: 'small' },
  { id: 2, type: 'video', src: '/machinery/new/new-13.mp4', title: 'Industrial Excellence', size: 'small', autoPlay: true },
  { id: 3, type: 'video', src: '/machinery/new/new-1.mp4', title: 'Advanced Operations', size: 'small', autoPlay: true },
  { id: 5, type: 'video', src: '/machinery/new/new-3.mp4', title: 'Quality Craftsmanship', size: 'large', autoPlay: true },
  { id: 14, type: 'image', src: '/machinery/new/extra-2.png', title: 'Structure Modeling', size: 'small' },
  { id: 4, type: 'video', src: '/machinery/new/new-2.mp4', title: 'Modern Workshop', size: 'small', autoPlay: true },
  { id: 6, type: 'video', src: '/machinery/new/new-4.mp4', title: 'Steel Processing', size: 'small', autoPlay: true },
  { id: 7, type: 'video', src: '/machinery/new/new-5.mp4', title: 'Production Workflow', size: 'small', autoPlay: true },
  { id: 8, type: 'video', src: '/machinery/new/new-6.mp4', title: 'High-Tech Systems', size: 'small', autoPlay: true },
  { id: 15, type: 'image', src: '/machinery/new/extra-3.png', title: 'Machinery Layout', size: 'small' },
  { id: 9, type: 'video', src: '/machinery/new/new-8.mp4', title: 'Precision Bending', size: 'large', autoPlay: true },
  { id: 10, type: 'video', src: '/machinery/new/new-9.mp4', title: 'Machine Close-up', size: 'small', autoPlay: true },
  { id: 12, type: 'image', src: '/machinery/new/new-11.jpg', title: 'Fabrication Detail', size: 'small' },
];












const MachineryItem = ({ item }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (item.type === 'video' && videoRef.current && !item.autoPlay) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Video play failed:", error);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (item.type === 'video' && videoRef.current && !item.autoPlay) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div 
      className={`machinery-item ${item.size}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.type === 'image' ? (
        <img src={item.src} alt={item.title} loading="lazy" />
      ) : (
        <video 
          ref={videoRef}
          src={item.src} 
          muted 
          loop 
          playsInline 
          autoPlay={item.autoPlay}
          poster={item.poster || ""}
        />
      )}
      <div className="machinery-overlay">
        <h3>{item.title}</h3>
      </div>
    </motion.div>
  );
};


const OurMachineries = () => {
  return (
    <section id="machineries" className="machinery-section">
      <div className="container">
        <div className="machinery-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="gold-gradient-text">Machineries</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore our state-of-the-art technology and high-precision equipment.
          </motion.p>
        </div>

        <div className="machinery-grid">
          {machineryData.map((item) => (
            <MachineryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMachineries;
