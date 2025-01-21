import React, { useState, useEffect } from 'react';
import { Menu } from '../../components';
import Character from './components/Character';
import Icons from './components/Icons';
import './Main.css';

import charaRide from '../../assets/videos/chara.mp4';
import charaFall from '../../assets/videos/charaFall.mp4';

const Main = () => {
  const [stage, setStage] = useState(1);
  const [showMainContent, setShowMainContent] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);

  // Preload videos
  useEffect(() => {
    const preloadVideos = async () => {
      const loadVideo = (src) => {
        return new Promise((resolve) => {
          const video = document.createElement('video');
          video.src = src;
          video.preload = 'auto';
          video.oncanplaythrough = () => resolve();
        });
      };

      await Promise.all([loadVideo(charaRide), loadVideo(charaFall)]);
      setIsLoaded(true);
    };

    // const hasViewed = localStorage.getItem('hasViewedVideos');
    // if (hasViewed) {
    //   setShowMainContent(true);
    // } else {
    //   preloadVideos();
    // }
  }, []);

  const handleFirstVideoEnd = () => setStage(2);
  const handleSecondVideoEnd = () => {
    setShowMainContent(true);
    localStorage.setItem('hasViewedVideos', 'true');
  };

  return (
    <div className="main-container">
      {!isLoaded && <div className="loading-screen">Loading...</div>}
      {isLoaded && !showMainContent && stage === 1 && (
        <video
          src={charaRide}
          autoPlay
          muted
          playsInline
          onEnded={handleFirstVideoEnd}
          className="bg-video fade-in"
        />
      )}
      {isLoaded && !showMainContent && stage === 2 && (
        <video
          src={charaFall}
          autoPlay
          muted
          playsInline
          onEnded={handleSecondVideoEnd}
          className="bg-video fade-in"
        />
      )}
      {(showMainContent || stage === 3) && (
        <div className="bg-main fade-in">
          <Icons />
          <Character />
          <Menu />
        </div>
      )}
    </div>
  );
};

export default Main;
