import React, { useState, useEffect, useRef } from 'react'
import chara from '../../../assets/gif/3d-idle.gif'
import chara_fly from '../../../assets/gif/chara-fly-bronze.gif'
import chara_land from '../../../assets/gif/chara-landing.gif'
import chara_panic from '../../../assets/gif/chara-fall-panic.gif'
import chara_crash from '../../../assets/gif/chara-crash.gif'
import chara_dance from '../../../assets/gif/chara-dance.gif'
import '../Main.css'

const Character = ({
  tapCount,
  setTapCount,
  handleTap,
  getCharacterGif,
  characterStyles
}) => {
  return (
    <div className='flex justify-center flex-col gap-4 items-center my-20 mx-8'>
      <div>
        <img
          onClick={handleTap}
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
