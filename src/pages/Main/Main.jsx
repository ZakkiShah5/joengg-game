import React, { useState, useEffect } from 'react'
import { Menu } from '../../components'
import Character from './components/Character'
import Icons from './components/Icons'
import './Main.css'

import charaRide from '../../assets/videos/chara.mp4'
import charaFall from '../../assets/videos/charaFall.mp4'

const Main = () => {
  const [stage, setStage] = useState(1) // Stage of the animation sequence

  // Preload assets
  useEffect(() => {
    const preloadAssets = () => {
      const assets = [charaRide, charaFall]
      assets.forEach(asset => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'video'
        link.href = asset
        document.head.appendChild(link)
      })
    }
    preloadAssets()
  }, [])

  const handleFirstVideoEnd = () => setStage(2)
  const handleSecondVideoEnd = () => setStage(3)

  return (
    <div className='main-container'>
      {stage === 1 && (
        <video
          src={charaRide}
          autoPlay
          muted
          playsInline
          preload='auto'
          onEnded={handleFirstVideoEnd}
          className='bg-video'
        />
      )}
      {stage === 2 && (
        <video
          src={charaFall}
          autoPlay
          muted
          playsInline
          preload='auto'
          onEnded={handleSecondVideoEnd}
          className='bg-video'
        />
      )}
      {stage === 3 && (
        <div className='bg-main'>
          <Icons />
          <Character />
          <Menu />
        </div>
      )}
    </div>
  )
}

export default Main
