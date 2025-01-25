import React, { useState, useEffect } from 'react'
import { Menu } from '../../components'
import Character from './components/Character'
import Icons from './components/Icons'
import './Main.css'

const Main = () => {
  const [tapCount, setTapCount] = useState(0);

  const handleTap = () => {
    setTapCount(prev => {
      if (prev >= 100) return 100 // Stop increasing when it reaches 100%
      return prev + 100 // Increment gauge height by 10% per tap
    })
  }

  return (
    <div className='main-container'>
      <div className='bg-main'>
        <Icons />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <Character tapCount={tapCount} setTapCount={setTapCount} />
        </div>
        <div
          className='h-96 w-6 flex flex-col justify-end bg-gray-200 absolute top-1/2 right-1 rounded-2xl transform -translate-x-1/2 -translate-y-1/2 overflow-hidden cursor-pointer'
          onClick={handleTap} // Increment gauge height on tap
        >
          <div
            className='bg-mypurple-600 rounded-b-2xl transition-all duration-300'
            style={{ height: `${tapCount*3.333}%` }} // Dynamically set the gauge height
          ></div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default Main
