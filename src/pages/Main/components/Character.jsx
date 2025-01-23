import React, { useState, useEffect } from 'react';
import chara from '../../../assets/gif/chara-idle.gif';
import chara_fly from '../../../assets/gif/chara-fly-bronze.gif';
import chara_land from '../../../assets/gif/chara-landing.gif';
import chara_panic from '../../../assets/gif/chara-fall-panic.gif';
import chara_crash from '../../../assets/gif/chara-crash.gif';
import chara_dance from '../../../assets/gif/chara-dance.gif';
import '../Main.css';

const Character = () => {
  const [tapCount, setTapCount] = useState(0);
  const [characterState, setCharacterState] = useState('idle');
  const [timer, setTimer] = useState(null);
  const [isTapping, setIsTapping] = useState(false); // Track if the user is still tapping

  // Handle tap events
  const handleTap = () => {
    setIsTapping(true); // User is tapping
    if (tapCount >= 30) return; // Disable further taps after 30

    // Restart flying if the character is panicking or crashing
    if (characterState === 'crash' || characterState === 'panic') {
      setCharacterState('fly');
    }

    setTapCount(prev => {
      const newTapCount = prev + 1;

      // Transition to land and then dance if 30 taps are reached
      if (newTapCount === 30) {
        setCharacterState('land');
        clearTimeout(timer); // Clear any existing inactivity timer
        setTimeout(() => {
          setCharacterState('dance'); // Transition back to idle after dancing
        }, 600);
      } else {
        // Start flying if not yet reached 30 taps
        setCharacterState('fly');
      }

      return newTapCount;
    });

    console.log(tapCount);

    // Reset the inactivity timer if taps are less than 30
    if (timer) clearTimeout(timer);

    const newTimer = setTimeout(() => {
      if (tapCount < 29) {
        setCharacterState('crash');
        setTimeout(() => {
          if (tapCount < 29) setCharacterState('panic');
        }, 1000); // Transition to panic after crashing
      }
    }, 2000); // 2 seconds of inactivity triggers crash

    setTimer(newTimer);
  };

  // Handle inactivity (when the user stops tapping)
  useEffect(() => {
    if (isTapping) {
      return; // Do nothing if the user is still tapping
    }

    const panicTimeout = setTimeout(() => {
      if (tapCount < 30) {
        setCharacterState('panic'); // Transition to panic after inactivity
      }
    }, 2000); // After 2 seconds of no taps, the character enters panic mode

    return () => clearTimeout(panicTimeout); // Clean up on each render
  }, [isTapping, tapCount]);

  const getCharacterGif = () => {
    switch (characterState) {
      case 'fly':
        return chara_fly;
      case 'land':
        return chara_land;
      case 'panic':
        return chara_panic;
      case 'crash':
        return chara_crash;
      case 'dance':
        return chara_dance;
      default:
        return chara;
    }
  };

  // Calculate background position (moves up gradually during panic state)
  let backgroundPosition = '0 0';
  if (characterState === 'panic') {
    backgroundPosition = '0px -80px'; // Set background position for panic state
  } else if (isTapping) {
    backgroundPosition = `${tapCount * -5}px ${tapCount * 0.05}px`; // Background moves while tapping
  } 

  // Character styles for panic state: shrink and move left/bottom
  const characterStyles = {
    width: characterState === 'panic' ? `${Math.max(2)}%` : '100%', // Shrink character in panic
    transform: characterState === 'panic' 
      ? `translate(${Math.max(-100)}px, ${Math.max(350)}px)` 
      : 'translate(0, 0)', // Move left and down in panic state
    transition: 'transform 5s ease, width 5s ease', // Smooth transition for transform and width
  };

  return (
    <div className='flex justify-center flex-col gap-4 items-center my-20 mx-8'>
      <div
        className={`bg-planet w-80 rounded-full ${
          tapCount < 30 ? 'cursor-pointer' : 'cursor-not-allowed'
        }`}
        onClick={handleTap}
        style={{
          backgroundPosition: backgroundPosition,
          transition: 'background-position 2s ease-out', // Smooth transition for background position
        }}
      >
        <img
          src={getCharacterGif()}
          alt='character'
          className='chara w-80 h-80 rounded-full object-contain'
          style={characterStyles} // Apply dynamic styles for panic effect
        />
      </div>

      <div className='relative'>
        <div className='bg-white w-[255px] py-3 px-3 rounded-3xl'>
          <p className='text-mypurple-600 font-semibold'>
            Claim your Reward in
          </p>
          <div className='absolute right-0 top-[-20px] rounded-2xl bg-mypurple-600 border-4 border-white text-white flex flex-col justify-center items-center w-20 h-20'>
            <h1 className='text-3xl font-extrabold'>{30 - tapCount}</h1>
            <p>Taps left!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
