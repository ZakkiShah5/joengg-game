import React, { useState, useEffect } from 'react';
import chara from '../assets/gif/3d-idle.gif';
import '../pages/Main/Main.css';

const Loading = () => {
  const [progress, setProgress] = useState(10); // Start at 10%

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval); // Clear interval when progress reaches 100%
          return 100;
        }
        return prev + 1; // Increment progress by 1% every interval
      });
    }, 30); // Adjust the interval duration for smoothness (30ms for ~3 seconds)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="bg-main gap-10 flex justify-center flex-col items-center">
      <img className="w-1/2" src={chara} alt="Character" />
      <h1 className="text-4xl font-bold text-white">{progress}%</h1>
    </div>
  );
};

export default Loading;
