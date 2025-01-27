import { useState, useEffect } from 'react'
import { Menu } from '../../components'
import Character from './components/Character'
import Icons from './components/Icons'
import './Main.css'

import logo from '../../assets/main/logo.png'

import chara from '../../assets/gif/3d-idle.gif'
import chara_fly from '../../assets/gif/chara-fly-bronze.gif'
import chara_land from '../../assets/gif/chara-landing.gif'
import chara_panic from '../../assets/gif/chara-fall-panic.gif'
import chara_crash from '../../assets/gif/chara-crash.gif'
import chara_dance from '../../assets/gif/chara-dance.gif'

const Main = () => {
  const [tapCount, setTapCount] = useState(0)
  const [logos, setLogos] = useState([]);
  const [characterState, setCharacterState] = useState('idle')
  const [inactivityTimer, setInactivityTimer] = useState(null)

  useEffect(() => {
    // Preload images
    const imagesToPreload = [
      chara,
      chara_fly,
      chara_land,
      chara_panic,
      chara_crash,
      chara_dance,
      logo,
    ];

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []); // Run once on component mount

  const handleTap = (event)=> {
    if (tapCount >= 30) return // Prevent taps after 30

    const { clientX, clientY } = event; // Get tap coordinates

    setLogos((prev) => [
      ...prev,
      { id: Date.now(), x: clientX, y: clientY, isAnimating: true },
    ]);
    
    setTapCount(prev => {
      const newTapCount = prev + 1

      // Character transitions based on taps
      if (newTapCount === 30) {
        setCharacterState('land')
        setTimeout(() => setCharacterState('dance'), 500)
      } else {
        setCharacterState('fly')
      }

      return newTapCount
    })

    // Reset inactivity timer
    if (inactivityTimer) clearTimeout(inactivityTimer)

    const timer = setTimeout(() => {
      if (tapCount < 29) {
        setCharacterState('crash')
        setTimeout(() => setCharacterState('panic'), 1000)
      }
    }, 2000) // 2 seconds of inactivity

    setInactivityTimer(timer)
  }

  useEffect(() => {
    return () => {
      if (inactivityTimer) clearTimeout(inactivityTimer) // Clean up timer
    }
  }, [inactivityTimer])

  const getCharacterGif = () => {
    switch (characterState) {
      case 'fly':
        return chara_fly
      case 'land':
        return chara_land
      case 'panic':
        return chara_panic
      case 'crash':
        return chara_crash
      case 'dance':
        return chara_dance
      default:
        return chara
    }
  }

  const characterStyles = {
    width: characterState === 'panic' ? '75%' : '100%',
    transform: characterState === 'panic' ? 'translate(30px, 30px)' : 'none',
    transition: 'transform 0.5s ease, width 0.5s ease'
  }

  const getBackgroundStyle = () => {
    return {
      backgroundPosition:
        characterState === 'panic'
          ? '0px -1680px'
          : `${tapCount * -14.2}px ${tapCount * -10}px`,
      transition:
        characterState === 'panic'
          ? 'background-position 100s ease-out'
          : 'background-position 1s ease-out'
    }
  }

  const handleAnimationEnd = (id) => {
    setLogos((prev) => prev.filter((logo) => logo.id !== id));
  };

  return (
    <div className='main-container'>
      <div
        className={`bg-planet ${
          tapCount < 30 ? 'cursor-pointer' : 'cursor-not-allowed'
        }`}
        style={getBackgroundStyle()}
      >
        <Icons />
        <div className=''>
          <Character
            handleTap={handleTap}
            tapCount={tapCount}
            setTapCount={setTapCount}
            getCharacterGif={getCharacterGif}
            characterStyles={characterStyles}
          />

          {/* Animated Logo */}
          {logos.map((logoItem) => (
            <img
              key={logoItem.id}
              src={logo}
              alt=""
              className="animated-logo"
              style={{
                position: 'absolute',
                top: logoItem.y,
                left: logoItem.x,
                width: '50px',
                height: '50px',
                animation: `moveToCenter 0.8s ease`,
              }}
              onAnimationEnd={() => handleAnimationEnd(logoItem.id)}
            />
          ))}
        </div>

        {/* Gauge */}
        <div
          className='h-96 w-6 flex flex-col justify-end bg-gray-200 absolute top-1/2 right-1 rounded-2xl transform -translate-x-1/2 -translate-y-1/2 overflow-hidden cursor-pointer'
          onClick={handleTap}
        >
          <div
            className='bg-mypurple-600 rounded-b-2xl transition-all duration-300'
            style={{ height: `${tapCount * 3.333}%` }}
          ></div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default Main
