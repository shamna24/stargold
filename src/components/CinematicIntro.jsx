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

    // Aggressive iOS Optimization: Wake up the video engine on the first interaction
    const unlockVideo = () => {
      if (video.paused) {
        video.play().then(() => {
          video.pause();
          console.log("Video engine unlocked for scrubbing");
        }).catch(err => {
          console.log("Video unlock deferred:", err);
        });
      }
      window.removeEventListener('touchstart', unlockVideo);
      window.removeEventListener('mousedown', unlockVideo);
    };

    const warmupVideo = () => {
      if (video.readyState >= 2) {
        if (video.currentTime < 0.5) video.currentTime = 0.5;
      }
    };

    const handleCanPlay = () => {
      warmupVideo();
    };
    
    // Listen for the first touch/click to unlock programmatic playback (required for iOS)
    window.addEventListener('touchstart', unlockVideo, { passive: true });
    window.addEventListener('mousedown', unlockVideo, { passive: true });

    if (video.readyState >= 2) {
      warmupVideo();
    } else {
      video.addEventListener('canplay', handleCanPlay, { once: true });
    }

    const updateVideo = () => {
      const isMobile = window.innerWidth <= 768;
      
      // Responsive Smoothing: Faster on mobile to handle bursty scroll events
      const smoothingFactor = isMobile ? 0.12 : 0.05; 
      currentProgress.current += (targetProgress.current - currentProgress.current) * smoothingFactor;
      
      const mainVideo = videoRef.current;
      if (mainVideo && mainVideo.duration && mainVideo.readyState >= 2) {
        const startTime = 0.5;
        const endTime = mainVideo.duration - 0.5;
        const trimDuration = Math.max(0, endTime - startTime);
        
        const targetTime = startTime + (trimDuration * currentProgress.current);
        
        // --- SCROLL OPTIMIZATION ---
        // On iOS, currentTime updates are smoother than fastSeek for precise scrubbing
        const seekThreshold = isMobile ? 0.02 : 0.015;
        
        if (Math.abs(targetTime - lastTime.current) > seekThreshold) {
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
      
      if (totalScrollable <= 0) return;

      // Reach 100% progress exactly at the end of the scrollable container
      let progress = Math.abs(rect.top) / totalScrollable;
      targetProgress.current = Math.min(Math.max(progress, 0), 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    requestRef.current = requestAnimationFrame(updateVideo);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', unlockVideo);
      window.removeEventListener('mousedown', unlockVideo);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
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
      </div>
    </section>
  );
};

export default CinematicIntro;
