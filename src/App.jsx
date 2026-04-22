import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurStory from './components/OurStory';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import CinematicIntro from './components/CinematicIntro';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once visible, we can stop observing this element
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-fade-up');
    animatedElements.forEach(el => observer.observe(el));

    // GSAP MatchMedia for Responsive Animations
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      // Nexara-Style Focal Scroll Logic for Hero Section (Desktop Only)
      const featuresContainer = document.querySelector('.hero-sticky-left-scroll');
      const focusItems = document.querySelectorAll('.feature-focus-item');
      
      if (featuresContainer && focusItems.length > 0) {
        // Create a strictly sequential timeline with CLEARANCE GAPS (Zero-Overlap)
        const desktopTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-sticky-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.2,
          }
        });

        // Forced initial state: Item 1 visible, others hidden
        gsap.set(focusItems, { opacity: 0, visibility: "visible", scale: 0.98 });
        gsap.set(focusItems[0], { opacity: 1, scale: 1 });

        focusItems.forEach((item, index) => {
          if (index === 0) {
            // Item 1: Snaps out after initial hold
            desktopTimeline.to(item, { opacity: 0, scale: 0.98, duration: 0.4 }, 1.5);
            desktopTimeline.add("gap1", "+=0.3"); // EXPLICIT GAP
          } else {
            // Snap In - Starts only after the GAP from the previous item
            desktopTimeline.to(item, { opacity: 1, scale: 1, duration: 0.4 }, ">");
            
            // Hold at 100%
            if (index < focusItems.length - 1) {
              desktopTimeline.to(item, { opacity: 1, duration: 2.5 }, ">"); 
              // Snap Out
              desktopTimeline.to(item, { opacity: 0, scale: 0.98, duration: 0.4 }, ">"); 
              desktopTimeline.add(`gap${index + 1}`, "+=0.3"); // EXPLICIT GAP
            } else {
              // Last item: Permanent Hold
              desktopTimeline.to(item, { opacity: 1, duration: 2.5 }, ">");
            }
          }
        });

        // 3. Multi-Asset Cinematic Transitions (Synchronized with All 10 Feature Blocks)
        const layers = Array.from({ length: 10 }, (_, i) => document.querySelector(`.video-layer-${i}`));
        const videoFrame = document.querySelector('.large-right-rectangle');
        
        layers.forEach((layer, index) => {
          if (index > 0 && layers[index-1] && layer) {
            // Transition: Previous Layer -> Current Layer (At each gap)
            const gapLabel = `gap${index}`;
            desktopTimeline.to(layers[index-1], { opacity: 0, duration: 0.8, ease: "power2.inOut" }, `${gapLabel}-=0.3`);
            desktopTimeline.to(layer, { opacity: 1, duration: 0.8, ease: "power2.inOut" }, `${gapLabel}-=0.3`);
          }
        });

        if (videoFrame) {
          // Cinematic Zoom-In effect (Slightly more dramatic)
          gsap.to(videoFrame, {
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero-sticky-section",
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            }
          });
        }
      }

      // Theme transition: Black to White (Desktop Only)
      ScrollTrigger.create({
        trigger: ".hero-sticky-section",
        start: "top center",
        end: "top top",
        onEnter: () => {
          gsap.to("body", { backgroundColor: "#ffffff", duration: 0.8 });
          document.querySelector('.navbar-pill-container')?.classList.add('theme-light');
        },
        onLeaveBack: () => {
          gsap.to("body", { backgroundColor: "#050505", duration: 0.8 });
          document.querySelector('.navbar-pill-container')?.classList.remove('theme-light');
        }
      });
    });

    // Mobile Focal-Scroll Logic
    mm.add("(max-width: 768px)", () => {
      gsap.set("body", { backgroundColor: "#ffffff" });
      document.querySelector('.navbar-pill-container')?.classList.add('theme-light');
      
      const featuresContainer = document.querySelector('.hero-sticky-left-scroll');
      const focusItems = document.querySelectorAll('.feature-focus-item');
      
      // Safety reveal for sections below the intro on mobile
      ScrollTrigger.create({
        trigger: ".cinematic-intro",
        start: "bottom center",
        onEnter: () => document.body.classList.add('reveal-all-sections'),
        onLeaveBack: () => document.body.classList.remove('reveal-all-sections')
      });

      if (featuresContainer && focusItems.length > 0) {
        // Create a strictly sequential timeline with CLEARANCE GAPS (Zero-Overlap)
        const mobileTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-sticky-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.2, // smoothing factor
            anticipatePin: 1, // Anti-lag optimization for mobile pinning
            fastScrollEnd: true, // Prevents hanging on rapid mobile swipes
          }
        });

        // Forced initial state: Item 1 visible, others hidden
        gsap.set(focusItems, { opacity: 0, visibility: "visible", scale: 0.98 });
        gsap.set(focusItems[0], { opacity: 1, scale: 1 });

        focusItems.forEach((item, index) => {
          if (index === 0) {
            // Item 1: Snaps out after initial hold
            mobileTimeline.to(item, { opacity: 0, scale: 0.98, duration: 0.4 }, 1.5);
            mobileTimeline.add("gap1", "+=0.3"); // EXPLICIT GAP
          } else {
            // Snap In - Starts only after the GAP from the previous item
            mobileTimeline.to(item, { opacity: 1, scale: 1, duration: 0.4 }, ">");
            
            // Hold at 100%
            if (index < focusItems.length - 1) {
              mobileTimeline.to(item, { opacity: 1, duration: 2.5 }, ">"); 
              // Snap Out
              mobileTimeline.to(item, { opacity: 0, scale: 0.98, duration: 0.4 }, ">"); 
              mobileTimeline.add(`gap${index + 1}`, "+=0.3"); // EXPLICIT GAP
            } else {
              // Last item: Permanent Hold
              mobileTimeline.to(item, { opacity: 1, duration: 2.5 }, ">");
            }
          }
        });

        // Add Video Transitions for Mobile
        const layers = Array.from({ length: 10 }, (_, i) => document.querySelector(`.video-layer-${i}`));
        layers.forEach((layer, index) => {
          if (index > 0 && layers[index-1] && layer) {
            const gapLabel = `gap${index}`;
            mobileTimeline.to(layers[index-1], { opacity: 0, duration: 0.8, ease: "power2.inOut" }, `${gapLabel}-=0.3`);
            mobileTimeline.to(layer, { opacity: 1, duration: 0.8, ease: "power2.inOut" }, `${gapLabel}-=0.3`);
          }
        });
      }
    });

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
      mm.revert();
    };
  }, []);

  return (
    <div className="App">

      <Navbar />
      <main>
        <CinematicIntro />
        <Hero />
        <Services />
        <Gallery />
        <About />
        <OurStory />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
