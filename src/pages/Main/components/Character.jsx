import React, { useState, useEffect, useRef } from 'react'
import chara from '../../../assets/gif/3d-idle.gif'
import chara_fly from '../../../assets/gif/chara-fly-bronze.gif'
import chara_land from '../../../assets/gif/chara-landing.gif'
import chara_panic from '../../../assets/gif/chara-fall-panic.gif'
import chara_crash from '../../../assets/gif/chara-crash.gif'
import chara_dance from '../../../assets/gif/chara-dance.gif'
import '../Main.css'

const Character = ({ tapCount, setTapCount }) => {
  const [characterState, setCharacterState] = useState('idle')
  const [inactivityTimer, setInactivityTimer] = useState(null)
  const tapCountRef = useRef(tapCount)

  useEffect(() => {
    tapCountRef.current = tapCount
  }, [tapCount])

  const handleTap = () => {
    if (tapCount >= 30) return

    setTapCount(prev => {
      const newTapCount = prev + 1

      if (newTapCount === 30) {
        setCharacterState('land')
        setTimeout(() => setCharacterState('dance'), 600)
      } else {
        setCharacterState('fly')
      }

      return newTapCount
    })

    if (inactivityTimer) clearTimeout(inactivityTimer)

    const timer = setTimeout(() => {
      if (tapCountRef.current < 30) {
        setCharacterState('crash')
        setTimeout(() => setCharacterState('panic'), 1000)
      }
    }, 2000)

    setInactivityTimer(timer)
  }

  useEffect(() => {
    return () => {
      if (inactivityTimer) clearTimeout(inactivityTimer)
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
    width: characterState === 'panic' ? '50%' : '100%',
    transform:
      characterState === 'panic' ? 'translate(90px, 30px)' : 'translate(0, 0)',
    transition: 'transform infinite ease, width infinite ease'
  }

  const getBackgroundStyle = () => {
    if (characterState === 'panic') {
      return {
        backgroundPosition: backgroundPosition,
        transition: 'background-position 100s ease-out'
      }
    }

    // Style for other states
    return {
      backgroundPosition: backgroundPosition,
      transition: 'background-position 1s ease-out'
    }
  }

  const backgroundPosition =
    characterState === 'panic'
      ? '0px -1680px'
      : tapCount > 0
      ? `${tapCount * -11}px ${tapCount * 0.085}px`
      : '0 0'

  return (
    <div className='flex justify-center flex-col gap-4 items-center my-20 mx-8'>
      <div
        className={`bg-planet w-80 rounded-full ${
          tapCount < 30 ? 'cursor-pointer' : 'cursor-not-allowed'
        }`}
        onClick={handleTap}
        style={getBackgroundStyle()}
      >
        <img
          src={getCharacterGif()}
          alt='character'
          className='chara w-80 h-80 rounded-full object-contain'
          style={characterStyles}
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
  )
}

export default Character
