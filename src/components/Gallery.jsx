import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

const galleryData = [
  // Burners
  { id: 1, title: 'Commercial Double Burner', category: 'BURNERS', image: '/gallery/burners/burner-1.png' },
  { id: 2, title: 'Single Industrial Burner', category: 'BURNERS', image: '/gallery/burners/burner-2.png' },
  { id: 3, title: 'Heavy Duty Triple Burner', category: 'BURNERS', image: '/gallery/burners/burner-3.png' },
  
  // Sinks
  { id: 4, title: 'Single Sink with Drainboard', category: 'SINKS', image: '/gallery/sinks/sink-2.png' },
  { id: 5, title: 'L-Shaped Double Sink Station', category: 'SINKS', image: '/gallery/sinks/sink-3.png' },
  { id: 6, title: 'Deep Industrial Square Sink', category: 'SINKS', image: '/gallery/sinks/sink-4.png' },
  { id: 7, title: 'Compact Single Sink Unit', category: 'SINKS', image: '/gallery/sinks/sink-5.png' },
  { id: 8, title: 'Industrial Double Sink Unit', category: 'SINKS', image: '/gallery/sinks/sink-6.png' },
  { id: 9, title: 'Modern Single Sink with Shelf', category: 'SINKS', image: '/gallery/sinks/sink-7.png' },
  { id: 10, title: 'Wall-Mounted Compact Sink', category: 'SINKS', image: '/gallery/sinks/sink-8.png' },
  { id: 11, title: 'Double Sink with Backsplash', category: 'SINKS', image: '/gallery/sinks/sink-9.png' },
  { id: 12, title: 'Sink Unit with Integrated Drawer', category: 'SINKS', image: '/gallery/sinks/sink-10.png' },

  // Trolleys
  { id: 13, title: 'Industrial Oven Trolley', category: 'TROLLEYS', image: '/gallery/trolleys/trolley-1.png' },
  { id: 14, title: 'Multi-Tier Tray Trolley', category: 'TROLLEYS', image: '/gallery/trolleys/trolley-2.png' },

  // Shawarma
  { id: 15, title: 'Professional Shawarma Machine', category: 'SHAWARMA', image: '/gallery/shawarma/shawarma-1.png' },

  // Chillers
  { id: 16, title: 'Premium Display Chiller', category: 'CHILLERS', image: '/gallery/chillers/display-chiller-1.png' },
  { id: 17, title: 'Stainless Steel Worktop Chiller', category: 'CHILLERS', image: '/gallery/chillers/worktop-chiller-1.png' },

  // Shelves
  { id: 18, title: 'Industrial Wall Shelf', category: 'SHELVES', image: '/gallery/shelves/wall-shelf-1.png' },

  // Baine Marie
  { id: 19, title: 'Commercial Baine Marie - Type A', category: 'BAINE MARIE', image: '/gallery/baine-marie/baine-marie-1.png' },
  { id: 20, title: 'Commercial Baine Marie - Type B', category: 'BAINE MARIE', image: '/gallery/baine-marie/baine-marie-2.png' },

  // Juice Counters
  { id: 21, title: 'Custom Juice Counter - Design 1', category: 'JUICE COUNTERS', image: '/gallery/juice-counters/juice-counter-1.png' },
  { id: 22, title: 'Custom Juice Counter - Design 2', category: 'JUICE COUNTERS', image: '/gallery/juice-counters/juice-counter-2.png' },

  // Hoods
  { id: 23, title: 'High-Efficiency Kitchen Hood', category: 'HOODS', image: '/gallery/hoods/hood-1.png' },
  { id: 24, title: 'Industrial Exhaust Hood System', category: 'HOODS', image: '/gallery/hoods/hood-2.png' },

  // Home Interior
  { id: 25, title: 'Modern Kitchen Interior 1', category: 'HOME INTERIOR', image: '/gallery/home-interior/interior-1.png' },
  { id: 26, title: 'Modern Kitchen Interior 2', category: 'HOME INTERIOR', image: '/gallery/home-interior/interior-2.png' },
  { id: 27, title: 'Modern Kitchen Interior 3', category: 'HOME INTERIOR', image: '/gallery/home-interior/interior-3.png' },
  { id: 28, title: 'Modern Kitchen Interior 4', category: 'HOME INTERIOR', image: '/gallery/home-interior/interior-4.png' },
  { id: 29, title: 'Modern Kitchen Interior 5', category: 'HOME INTERIOR', image: '/gallery/home-interior/interior-5.png' },
  { id: 30, title: 'Modern Kitchen Interior 6', category: 'HOME INTERIOR', image: '/gallery/home-interior/interior-6.png' },
  { id: 31, title: 'Modern Kitchen Interior 7', category: 'HOME INTERIOR', image: '/gallery/home-interior/interior-7.png' },
  { id: 32, title: 'Modern Kitchen Interior 8', category: 'HOME INTERIOR', image: '/gallery/home-interior/interior-8.png' },
  { id: 33, title: 'Modern Kitchen Interior 9', category: 'HOME INTERIOR', image: '/gallery/home-interior/interior-9.png' },

  // Decor & Art
  { id: 34, title: 'Stainless Steel Islamic Art', category: 'DECOR & ART', image: '/gallery/decor/decor-1.png' },
  { id: 35, title: 'StarGold Steel LLC Branded Decor', category: 'DECOR & ART', image: '/gallery/decor/decor-2.png' },

  // Others
  { id: 36, title: 'Stainless Steel Fabrication Item 1', category: 'OTHERS', image: '/gallery/others/other-1.png' },
  { id: 37, title: 'Stainless Steel Fabrication Item 2', category: 'OTHERS', image: '/gallery/others/other-2.png' },
  { id: 38, title: 'Stainless Steel Fabrication Item 3', category: 'OTHERS', image: '/gallery/others/other-3.png' },
  { id: 39, title: 'Custom Steel Structure', category: 'OTHERS', image: '/gallery/others/other-4.png' },
];

const categories = ['ALL', 'BURNERS', 'SINKS', 'TROLLEYS', 'SHAWARMA', 'CHILLERS', 'SHELVES', 'BAINE MARIE', 'JUICE COUNTERS', 'HOODS', 'HOME INTERIOR', 'DECOR & ART', 'OTHERS'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredItems = activeCategory === 'ALL' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="container">
        <div className="gallery-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Project <span className="gold-gradient-text">Gallery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A visual showcase of our premium structural deliveries.
          </motion.p>
        </div>

        <div className="gallery-filter">
          {categories.map((cat, index) => (
            <motion.button 
              key={cat} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                color: activeCategory === cat ? "#d4af37" : "#666"
              }}
              whileHover={{ scale: 1.05, color: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 17,
                delay: index * 0.05 
              }}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat);
              }}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeCategoryUnderline"
                  className="active-underline"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="gallery-grid"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map(item => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.4,
                  ease: "circOut"
                }}
                className="gallery-item"
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="category-tag">{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="gallery-empty"
          >
            <p>Coming soon to this section...</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
