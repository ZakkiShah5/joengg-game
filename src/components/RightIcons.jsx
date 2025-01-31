import box from '../assets/main/box.png'
import telegram from '../assets/main/telegram.png'
import { Link } from 'react-router-dom'
import storageBox from '../assets/sounds/2.storagebox.mp3'

import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi'
import { useMute } from '../Context/VolumeContext'

const RightIcons = () => {
  const {volume, setVolume} = useMute();

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
    <div className='relative'>
      <div className='flex flex-row p-3 pt-5 absolute right-0'>
        <div className='flex-1'></div>
        <div className='flex gap-3'>
          <Link
            onClick={handleBoxTap}
            to='/bag'
            className='bg-white h-14 flex items-center justify-center w-14 rounded-full'
          >
            <img src={box} alt='' className='w-8' />
          </Link>
          <div className='bg-white h-14 flex items-center justify-center w-14 rounded-full'>
            <img src={telegram} alt='' className='w-8' />
          </div>
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

export default RightIcons
