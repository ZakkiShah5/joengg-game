import box from '../../../assets/main/box.png'
import { GoArrowLeft } from 'react-icons/go'

import { Link } from 'react-router-dom'

const Back = () => {
  return (
    <div className='pt-8'>
      <Link
        to='/'
        className='flex gap-3 p-5 w-fit items-center rounded-r-full bg-white'
      >
        <div className='text-white text-3xl p-2 rounded-full bg-mypurple-600'>
          <GoArrowLeft />
        </div>
        <img className='w-10' src={box} alt='' />
      </Link>
    </div>
  )
}

export default Back
