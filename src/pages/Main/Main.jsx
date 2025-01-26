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
  const [logoVisible, setLogoVisible] = useState(false)
  const [logoStyle, setLogoStyle] = useState({})
  const [characterState, setCharacterState] = useState('idle')
  const [inactivityTimer, setInactivityTimer] = useState(null)

  const handleTap = event => {
    if (tapCount >= 30) return // Prevent taps after 30

    const xPos = event.clientX
    const yPos = event.clientY
    // Increment tap count
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

    // Animate and show logo
    setLogoVisible(true)
    setLogoStyle({
      opacity: 1,
      transform: 'translateY(100px) translateX(100px)',
      left: `${xPos - 150}px`, // Offset for better positioning
      top: `${yPos - 150}px`, // Offset for better positioning

      position: 'absolute',
      transition: 'transform 1s ease, opacity 1s ease',
      zIndex: 9999
    })

    // Reset logo visibility after animation
    setTimeout(() => {
      setLogoStyle({
        opacity: 0,
        transform: 'translateY(0) translateX(0)',
        left: `${xPos - 150}px`, // Keep it at tap position
        top: `${yPos - 150}px`, // Keep it at tap position
        position: 'absolute',
        zIndex: 9999
      })
      setTimeout(() => setLogoVisible(false), 500)
    }, 500)

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
          {logoVisible && (
            <img
              src={logo}
              alt=''
              className='w-16 absolute'
              style={{
                ...logoStyle,
                transition: 'transform 1s ease, opacity 1s ease'
              }}
            />
          )}
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
