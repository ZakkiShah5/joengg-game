import coin from '../../../assets/main/coin.png'
import box from '../../../assets/main/box.png'
import telegram from '../../../assets/main/telegram.png'
import speaker from '../../../assets/main/speaker.png'
import screw from '../../../assets/main/screw.png'

const Icons = () => {
  return (
    <div className=''>
      <div className='flex flex-row p-3 pt-5 relative'>
        <div className='flex-1'></div>
        <div className='flex gap-3'>
          <div className='bg-white h-14 flex items-center justify-center w-14 rounded-full'>
            <img src={box} alt='' className='w-8' />
          </div>
          <div className='bg-white h-14 flex items-center justify-center w-14 rounded-full'>
            <img src={telegram} alt='' className='w-8' />
          </div>
          <div className='bg-white h-14 flex items-center justify-center w-14 rounded-full'>
            <img src={speaker} alt='' className='w-8' />
          </div>
        </div>
      </div>
      <div className='absolute top-8'>
        <div className='bg-white flex justify-between px-3 py-4 relative rounded-r-md w-36'>
          <div className='flex items-center gap-2 '>
            <img src={coin} alt='coin' className='w-8 h-8' />
            <h2 className='text-mypurple-600 font-extrabold text-3xl'>360</h2>
          </div>
          <div>
            <img
              src={screw}
              alt='screw'
              className='w-4 absolute top-2 right-2'
            />
            <img
              src={screw}
              alt='screw'
              className='w-4 absolute bottom-2 right-2'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Icons
