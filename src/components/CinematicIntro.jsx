import React, { useEffect, useRef, useState } from 'react';
import './CinematicIntro.css';

const CinematicIntro = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const bgVideoRef = useRef(null);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const bgVideo = bgVideoRef.current;
    if (!video || !bgVideo) return;

    const handleLoadedMetadata = () => {
      video.currentTime = 0;
      bgVideo.currentTime = 0;
    };
    
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current || !bgVideoRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      const totalScrollable = container.scrollHeight - viewHeight;
      const currentScroll = Math.abs(rect.top);
      
      let progress = currentScroll / totalScrollable;
      progress = Math.min(Math.max(progress, 0), 1);

      if (progress > 0.05) setIsStarted(true);
      else setIsStarted(false);

      // Communicate progress to the parent for the reveal effect
      document.documentElement.style.setProperty('--intro-progress', progress);

      requestAnimationFrame(() => {
        const duration = videoRef.current.duration;
        if (duration) {
          const targetTime = duration * progress;
          videoRef.current.currentTime = targetTime;
          bgVideoRef.current.currentTime = targetTime;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <section ref={containerRef} className="cinematic-intro">
      <div className="video-sticky-wrapper">
        <video
          ref={bgVideoRef}
          muted
          playsInline
          className="intro-video-bg-blur"
          preload="auto"
        >
          <source src="/intro-video.mp4" type="video/mp4" />
        </video>
        <video
          ref={videoRef}
          muted
          playsInline
          className="intro-video-scrub"
          preload="auto"
        >
          <source src="/intro-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay-cinematic"></div>
        
        <div className={`scroll-indicator ${isStarted ? 'fade-out' : ''}`}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>SCROLL TO BEGIN PROJECT 8</p>
        </div>
      </div>
    </section>
  );
};

export default CinematicIntro;
