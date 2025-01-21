import React, { useState, useEffect } from 'react';
import { Menu } from '../../components';
import Character from './components/Character';
import Icons from './components/Icons';
import './Main.css';

import charaRide from '../../assets/videos/chara.mp4';
import charaFall from '../../assets/videos/charaFall.mp4';

const Main = () => {
  const [stage, setStage] = useState(1); // Stage of the animation sequence
  const [showMainContent, setShowMainContent] = useState(false);

  // Check if videos have already been viewed
  useEffect(() => {
    const hasViewed = localStorage.getItem('hasViewedVideos');
    if (hasViewed) {
      setShowMainContent(true); // Skip videos and show main content
    }
  }, []);

  const handleFirstVideoEnd = () => setStage(2);
  const handleSecondVideoEnd = () => {
    setShowMainContent(true);
    localStorage.setItem('hasViewedVideos', 'true'); // Set flag in localStorage
  };

  return (
    <div className="main-container">
      {!showMainContent && stage === 1 && (
        <video
          src={charaRide}
          autoPlay
          muted
          playsInline
          onEnded={handleFirstVideoEnd}
          className="bg-video"
        />
      )}
      {!showMainContent && stage === 2 && (
        <video
          src={charaFall}
          autoPlay
          muted
          playsInline
          onEnded={handleSecondVideoEnd}
          className="bg-video"
        />
      )}
      {(showMainContent || stage === 3) && (
        <div className="bg-main">
          <Icons />
          <Character />
          <Menu />
        </div>
      )}
    </div>
  );
};

export default Main;
