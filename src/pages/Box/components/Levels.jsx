import { Link } from 'react-router-dom'
import bag from '../../../assets/bag/bag.png'

const Levels = () => {
  return (
    <div className='mx-auto py-4 px-4 flex flex-col gap-2'>
      <div className='flex gap-2'>
        <div className='w-1/2 flex justify-center items-center flex-col bg-white'>
          <img src={bag} alt='' />
          <h1 className='text-xl my-1 text-mypurple-600 font-bold'>Level 1</h1>
          <div className='p-2 w-full flex justify-between items-center gap-2'>
            <button className='bg-mypurple-600 w-full px-4 py-1 text-white rounded-md'><Link to='/mix'>Mix</Link> </button>
            <button className='bg-gray-400 px-4 w-full py-1 text-white rounded-md'><Link to="/sell">Sell</Link></button>
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-center flex-col bg-white'>
          <img src={bag} alt='' />
          <h1 className='text-xl my-1 text-mypurple-600 font-bold'>Level 1</h1>
          <div className='p-2 w-full justify-between items-center flex gap-2'>
            <button className='bg-mypurple-600 px-4 w-full py-1 text-white rounded-md'><Link to='/mix'>Mix</Link> </button>
            <button className='bg-gray-400 px-4 w-full py-1 text-white rounded-md'><Link to="/sell">Sell</Link></button>
          </div>
        </div>
      </div>
      <div className='flex gap-2'>
        <div className='w-1/2 flex justify-center items-center flex-col bg-white'>
          <img src={bag} alt='' />
          <h1 className='text-xl my-1 text-mypurple-600 font-bold'>Level 1</h1>
          <div className='p-2 w-full flex justify-between items-center gap-2'>
            <button className='bg-mypurple-600 px-4 w-full py-1 text-white rounded-md'><Link to='/mix'>Mix</Link> </button>
            <button className='bg-gray-400 px-4 w-full py-1 text-white rounded-md'><Link to="/sell">Sell</Link></button>
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-center flex-col bg-white'>
          <img src={bag} alt='' />
          <h1 className='text-xl my-1 text-mypurple-600 font-bold'>Level 1</h1>
          <div className='p-2 w-full flex justify-between items-center gap-2'>
            <button className='bg-mypurple-600 px-4 w-full py-1 text-white rounded-md'><Link to='/mix'>Mix</Link> </button>
            <button className='bg-gray-400 px-4 w-full py-1 text-white rounded-md'><Link to="/sell">Sell</Link></button>
          </div>
        </div>
      </div>
      <div className='flex gap-2'>
        <div className='w-1/2 flex justify-center items-center flex-col bg-white'>
          <img src={bag} alt='' />
          <h1 className='text-xl my-1 text-mypurple-600 font-bold'>Level 1</h1>
          <div className='p-2 w-full flex justify-between items-center gap-2'>
            <button className='bg-mypurple-600 px-4 w-full py-1 text-white rounded-md'><Link to='/mix'>Mix</Link> </button>
            <button className='bg-gray-400 px-4 w-full py-1 text-white rounded-md'><Link to="/sell">Sell</Link></button>
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-center flex-col bg-white'>
          <img src={bag} alt='' />
          <h1 className='text-xl my-1 text-mypurple-600 font-bold'>Level 1</h1>
          <div className='p-2 w-full flex justify-between items-center gap-2'>
            <button className='bg-mypurple-600 px-4 w-full py-1 text-white rounded-md'><Link to='/mix'>Mix</Link> </button>
            <button className='bg-gray-400 px-4 w-full py-1 text-white rounded-md'><Link to="/sell">Sell</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Levels
