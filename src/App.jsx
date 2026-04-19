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
        // 1. Move the container vertically
        const scrollTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-sticky-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          }
        });

        scrollTimeline.to(featuresContainer, {
          y: -(window.innerHeight * (focusItems.length - 1)),
          ease: "none"
        });

        // 2. Focal zone opacity & motion highlights
        focusItems.forEach((item) => {
          gsap.fromTo(item, 
            { opacity: 0.1, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: item,
                start: "top center+=40%",
                end: "bottom center-=40%",
                scrub: true,
                containerAnimation: scrollTimeline,
                onLeave: () => gsap.to(item, { opacity: 0.1, y: -30, duration: 0.5 }),
                onEnterBack: () => gsap.to(item, { opacity: 1, y: 0, duration: 0.5 }),
                onLeaveBack: () => gsap.to(item, { opacity: 0.1, y: 30, duration: 0.5 }),
                onEnter: () => gsap.to(item, { opacity: 1, y: 0, duration: 0.5 }),
              }
            }
          );
        });
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

    // Mobile Cleanup / Fallback
    mm.add("(max-width: 768px)", () => {
      // Force body background to white for Hero section on mobile
      gsap.set("body", { backgroundColor: "#ffffff" });
      document.querySelector('.navbar-pill-container')?.classList.add('theme-light');
      
      // Ensure all items are visible on mobile
      const focusItems = document.querySelectorAll('.feature-focus-item');
      gsap.set(focusItems, { opacity: 1, y: 0 });
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
