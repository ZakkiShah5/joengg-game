import box from '../assets/main/box.png'
import telegram from '../assets/main/telegram.png'
import speaker from '../assets/main/speaker.png'
import { Link } from 'react-router-dom'
import storageBox from '../assets/sounds/2.storagebox.ogg'

const RightIcons = () => {
  
  const handleBoxTap = ()=>{
    const audio = new Audio(storageBox);
    audio.play();
  }

  return (
    <div className='relative'>
      <div className='flex flex-row p-3 pt-5 absolute right-0'>
        <div className='flex-1'></div>
        <div className='flex gap-3'>
          <Link onClick={handleBoxTap} to='/bag' className='bg-white h-14 flex items-center justify-center w-14 rounded-full'>
            <img src={box} alt='' className='w-8' />
          </Link>
          <div className='bg-white h-14 flex items-center justify-center w-14 rounded-full'>
            <img src={telegram} alt='' className='w-8' />
          </div>
          <div className='bg-white h-14 flex items-center justify-center w-14 rounded-full'>
            <img src={speaker} alt='' className='w-8' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightIcons
