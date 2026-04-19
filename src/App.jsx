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

    // Nexara-Style Focal Scroll Logic for Hero Section
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

      // 2. Focal zone opacity highlights
      focusItems.forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: "top center+=20%",
            end: "bottom center-=20%",
            scrub: true,
            containerAnimation: scrollTimeline, // Sync with our main vertical scroll
          }
        });
      });
    }

    // Theme transition: Black to White (Adjusted for new section class)
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

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
      ScrollTrigger.getAll().forEach(t => t.kill());
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
