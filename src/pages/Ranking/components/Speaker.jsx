import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi'
import { useState } from 'react'

const Speaker = () => {
  const [volume, setVolume] = useState(true)
  const handleBoxTap = () => {
    if (volume) {
      const audio = new Audio(storageBox)
      audio.load()
      audio.play()
    }
  }
  const handleVol = () => {
    setVolume(prev => !prev)
  }
  return (
    <div className=''>
      <div className='flex flex-row p-3 pt-5 absolute top-0 right-0'>
        <div className='flex-1'></div>
        <div className='flex gap-3'>
          <div
            onClick={handleVol}
            className='text-4xl text-mypurple-600 bg-white h-14 flex items-center justify-center w-14 rounded-full'
          >
            {volume ? <HiVolumeUp /> : <HiVolumeOff />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speaker
