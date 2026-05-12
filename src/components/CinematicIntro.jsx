import React, { useEffect, useRef } from 'react';
import './CinematicIntro.css';

const CinematicIntro = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const unlockVideo = () => {
      if (video.paused) {
        video.play().catch(err => console.log("Video play deferred:", err));
      }
      window.removeEventListener('touchstart', unlockVideo);
      window.removeEventListener('mousedown', unlockVideo);
    };

    const warmupVideo = () => {
      if (video.readyState >= 2) {
        if (video.currentTime < 0.1) video.currentTime = 0;
      }
    };

    const handleCanPlay = () => {
      warmupVideo();
    };
    
    window.addEventListener('touchstart', unlockVideo, { passive: true });
    window.addEventListener('mousedown', unlockVideo, { passive: true });

    if (video.readyState >= 2) {
      warmupVideo();
    } else {
      video.addEventListener('canplay', handleCanPlay, { once: true });
    }

    return () => {
      window.removeEventListener('touchstart', unlockVideo);
      window.removeEventListener('mousedown', unlockVideo);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <section ref={containerRef} id="intro" className="cinematic-intro">
      <div className="video-sticky-wrapper">
        <video
          ref={videoRef}
          muted
          autoPlay
          loop
          playsInline
          className="intro-video-scrub"
          preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
        >
          <source src="/intro-video.mp4" type="video/mp4" />
        </video>
        <div className="video-backdrop-overlay"></div>
        <div className="video-overlay-cinematic"></div>
        <div className="intro-content">
          <h1 className="intro-title animate-fade-up">
            STAR<span className="gold">GOLD</span>
          </h1>
          <p className="intro-subtitle animate-fade-up delay-200">
            EXCELLENCE IN STEEL FABRICATION
          </p>
        </div>
      </div>
    </section>
  );
};

export default CinematicIntro;
