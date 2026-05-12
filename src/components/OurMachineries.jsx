import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './OurMachineries.css';

const machineryData = [
  { id: 1, type: 'image', src: '/machinery/custom/image-4.png', title: 'Laser Cutting', desc: 'At our steel fabrication company, precision is more than a process — it’s our commitment. Using advanced laser cutting technology, we deliver clean edges, accurate dimensions, and flawless finishing for every project. From custom metal fabrication to large-scale industrial works, we ensure strength, quality, and perfection in every cut. Experience reliable fabrication solutions designed to meet modern industry standards.' },
  { id: 3, type: 'video', src: '/machinery/custom/video-5.mp4', title: 'Bending Machine', desc: 'From simple metal forms to complex fabrication designs, our sheet bending services provide accuracy and reliability you can trust. With state-of-the-art machinery and expert craftsmanship, we deliver smooth bends, precise dimensions, and exceptional quality for every project. Built to meet industry standards and exceed customer expectations.' },
  { id: 4, type: 'image', src: '/machinery/custom/image-1.png', title: 'Shearing Machine', desc: 'Clean cuts. Accurate measurements. Reliable fabrication solutions. Our sheet shearing services combine modern machinery with skilled expertise to produce high-quality metal components with speed, precision, and exceptional finishing for every project requirement.' },
  { id: 5, type: 'video', src: '/machinery/custom/video-3.mp4', title: 'Industrial Bending', desc: 'Heavy-duty shaping with precision control.' },
  { id: 6, type: 'image', src: '/machinery/custom/image-2.png', title: 'Technical Workflow', desc: 'Optimized production for large-scale projects.' },
  { id: 8, type: 'image', src: '/machinery/custom/image-3.jpeg', title: 'Quality Inspection', desc: 'Harnessing high-wattage fiber technology to turn your most complex CAD files into reality.' },
  { id: 9, type: 'image', src: '/machinery/custom/welding.jpg', title: 'Welding', desc: 'From heavy steel structures to detailed custom fabrication, our welding solutions are engineered for performance and durability. We focus on delivering strong joints, clean finishing, and exceptional workmanship that meet the highest industry standards and exceed client expectations.' },
  { id: 10, type: 'image', src: '/machinery/custom/finishing.jpg', title: 'Finishing', desc: 'Delivering the perfect balance of strength and style through precision finishing services. Our team focuses on every detail to ensure outstanding quality, professional appearance, and long-lasting performance in every fabrication project.' }
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
