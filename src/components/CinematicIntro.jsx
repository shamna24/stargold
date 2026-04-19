import React, { useEffect, useRef } from 'react';
import './CinematicIntro.css';

const CinematicIntro = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const lastTime = useRef(0);
  const requestRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      video.currentTime = 0;
    };
    
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    const updateVideo = () => {
      // Linear interpolation for smoothness (Lerp)
      const smoothingFactor = 0.05; 
      currentProgress.current += (targetProgress.current - currentProgress.current) * smoothingFactor;
      
      const mainVideo = videoRef.current;
      if (mainVideo && mainVideo.duration) {
        // Programmatic Trimming: Skip first 0.5s and last 0.5s for a tighter feel
        const startTime = 0.5;
        const endTime = mainVideo.duration - 0.5;
        const trimDuration = endTime - startTime;
        
        const targetTime = startTime + (trimDuration * currentProgress.current);
        
        // --- SCROLL OPTIMIZATION ---
        // Too many seeks causes video decoding lag. We require enough scroll distance before triggering a hard seek.
        const isMobile = window.innerWidth <= 768;
        const seekThreshold = isMobile ? 0.04 : 0.015; // Smooth but performant 
        
        if (!mainVideo.seeking && Math.abs(targetTime - lastTime.current) > seekThreshold) {
          mainVideo.currentTime = targetTime;
          lastTime.current = targetTime;
        }
      }
      
      document.documentElement.style.setProperty('--intro-progress', currentProgress.current);
      requestRef.current = requestAnimationFrame(updateVideo);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.scrollHeight - window.innerHeight;
      
      // Reach 100% progress exactly at the end of the scrollable container
      let progress = Math.abs(rect.top) / totalScrollable;
      targetProgress.current = Math.min(Math.max(progress, 0), 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    requestRef.current = requestAnimationFrame(updateVideo);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <section ref={containerRef} className="cinematic-intro">
      <div className="video-sticky-wrapper">
        <video
          ref={videoRef}
          muted
          playsInline
          className="intro-video-scrub"
          preload="auto"
        >
          <source src="/intro-video.mp4" type="video/mp4" />
        </video>
        <div className="video-backdrop-overlay"></div>
        <div className="video-overlay-cinematic"></div>
      </div>
    </section>
  );
};

export default CinematicIntro;
