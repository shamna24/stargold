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
        const targetTime = mainVideo.duration * currentProgress.current;
        
        // Single video seek - much lighter on performance
        if (!mainVideo.seeking && Math.abs(targetTime - lastTime.current) > 0.015) {
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
      
      // Reach 100% progress at 85% scroll distance to provide a buffer
      let progress = Math.abs(rect.top) / (totalScrollable * 0.85);
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
