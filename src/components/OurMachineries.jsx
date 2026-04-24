import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './OurMachineries.css';

const machineryData = [
  { id: 1, type: 'video', src: '/machinery/video-1.mp4', title: 'Precision Operation', size: 'small', autoPlay: true },
  { id: 2, type: 'image', src: '/machinery/machinery-2.png', title: 'Modern Machinery', size: 'large' },
  { id: 3, type: 'video', src: '/machinery/video-2.mp4', title: 'Metal Cutting', size: 'small', autoPlay: true },
  { id: 4, type: 'video', src: '/machinery/video-3.mp4', title: 'High Tech Fabrication', size: 'small', autoPlay: true },
  { id: 5, type: 'video', src: '/machinery/video-4.mp4', title: 'Automated Process', size: 'large', autoPlay: true },
  { id: 6, type: 'image', src: '/machinery/machinery-3.jpg', title: 'Quality Inspection', size: 'small' },
  { id: 7, type: 'video', src: '/machinery/video-5.mp4', title: 'Sheet Metal Bending', size: 'small', autoPlay: true },
  { id: 8, type: 'video', src: '/machinery/video-6.mp4', title: 'Expert Welding', size: 'small', autoPlay: true },
  { id: 9, type: 'video', src: '/machinery/video-7.mp4', title: 'CNC Precision', size: 'small', autoPlay: true },
  { id: 10, type: 'video', src: '/machinery/video-8.mp4', title: 'Industrial Workflow', size: 'large', autoPlay: true },
  { id: 11, type: 'video', src: '/machinery/video-9.mp4', title: 'Machine Close-up', size: 'small', autoPlay: true },
  { id: 12, type: 'video', src: '/machinery/video-10.mp4', title: 'Production Line', size: 'small', autoPlay: true },
  { id: 13, type: 'image', src: '/machinery/machinery-4.png', title: 'Machinery Detail', size: 'small' },
  { id: 14, type: 'video', src: '/machinery/video-11.mp4', title: 'Steel Processing', size: 'large', autoPlay: true },
  { id: 15, type: 'video', src: '/machinery/video-12.mp4', title: 'Advanced Tech', size: 'small', autoPlay: true },
  { id: 16, type: 'video', src: '/machinery/video-13.mp4', title: 'Factory Floor', size: 'small', autoPlay: true },
  { id: 17, type: 'image', src: '/machinery/machinery-5.png', title: 'Final Product', size: 'small' },
  // Adding more items to fill gaps
  { id: 18, type: 'video', src: '/machinery/video-1.mp4', title: 'Precision Tooling', size: 'small', autoPlay: true },
  { id: 19, type: 'video', src: '/machinery/video-2.mp4', title: 'Metal Work', size: 'small', autoPlay: true },
  { id: 20, type: 'video', src: '/machinery/video-4.mp4', title: 'Large Scale Ops', size: 'large', autoPlay: true },
  { id: 21, type: 'video', src: '/machinery/video-6.mp4', title: 'Precision Arc', size: 'small', autoPlay: true },
  { id: 22, type: 'image', src: '/machinery/machinery-2.png', title: 'Tech Hub', size: 'small' },
  { id: 23, type: 'video', src: '/machinery/video-8.mp4', title: 'Assembly Line', size: 'small', autoPlay: true },
  { id: 24, type: 'video', src: '/machinery/video-10.mp4', title: 'Quality Control', size: 'small', autoPlay: true },
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
