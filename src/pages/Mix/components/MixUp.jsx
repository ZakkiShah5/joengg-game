import bag from '../../../assets/bag/bag.png'
import star from '../../../assets/bag/star.png'
import mid from '../../../assets/bag/mid.png'
import { Link } from 'react-router-dom'

const MixUp = () => {
  return (
    <div className='mx-auto py-4 px-4 flex flex-col gap-2'>
      <div className='flex gap-2'>
        <div className='w-1/2 flex rounded-2xl overflow-hidden justify-center items-center flex-col bg-white'>
          <img src={bag} alt='' />
          <div>
            <img src={star} className='p-2 w-12' alt='' />
          </div>
        </div>
        <div className='w-1/2 rounded-2xl overflow-hidden flex justify-center items-center flex-col bg-white'>
          <img src={bag} alt='' />
          <div>
            <img src={star} className='p-2 w-12' alt='' />
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <img src={mid} className='w-1/2' alt="" />
      </div>
      <div className='flex gap-2'>
        <div className='w-1/2 flex rounded-2xl overflow-hidden justify-center items-center flex-col bg-white'>
          <img src={bag} alt='' />
          <div>
            <img src={star} className='p-2 w-12' alt='' />
          </div>
        </div>
        <div className='w-1/2 rounded-2xl overflow-hidden flex justify-center items-center flex-col bg-white'>
          <img src={bag} alt='' />
          <div>
            <img src={star} className='p-2 w-12' alt='' />
          </div>
        </div>
      </div>
      <div className='mt-3 flex justify-center'>
        <button className='bg-mypurple-600 py-1 rounded-lg text-white text-2xl font-bold w-1/2'><Link to="/">Mix</Link></button>
      </div>
    </div>
  )
}

export default MixUp
