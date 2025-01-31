import { Link } from 'react-router-dom'

import stage1 from '../../../assets/stages/stage1.png'
import stage2 from '../../../assets/stages/stage2.png'
import stage3 from '../../../assets/stages/stage3.png'
import stage4 from '../../../assets/stages/stage4.png'
import stage5 from '../../../assets/stages/stage5.png'
import stage6 from '../../../assets/stages/stage6.png'
import stage7 from '../../../assets/stages/stage7.png'
import stage8 from '../../../assets/stages/stage8.png'
import stage9 from '../../../assets/stages/stage9.png'
import stage10 from '../../../assets/stages/stage10.png'

const Levels = () => {
  return (
    <div className='mx-auto py-4 px-4 flex flex-col gap-2'>
      <div className='flex gap-2'>
        <div className='w-1/2 flex justify-center items-center flex-col bg-white'>
          <img src={stage1} className='bg-center h-full w-full' alt='' />
          <h1 className='text-xl my-1 text-mypurple-600 font-bold'>Stage 1</h1>
          <div className='p-2 w-full flex justify-between items-center gap-2'>
            <button className='bg-mypurple-600 w-full px-4 py-1 text-white rounded-md'><Link to='/mix'>Mix</Link> </button>
            <button className='bg-gray-400 px-4 w-full py-1 text-white rounded-md'><Link to="/sell">Sell</Link></button>
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-center flex-col bg-white'>
          <img src={stage2} alt='' />
          <h1 className='text-xl my-1 text-mypurple-600 font-bold'>Stage 2</h1>
          <div className='p-2 w-full justify-between items-center flex gap-2'>
            <button className='bg-mypurple-600 px-4 w-full py-1 text-white rounded-md'><Link to='/mix'>Mix</Link> </button>
            <button className='bg-gray-400 px-4 w-full py-1 text-white rounded-md'><Link to="/sell">Sell</Link></button>
          </div>
        </div>
      </div>
      <div className='flex gap-2'>
        <div className='w-1/2 flex justify-center items-center flex-col bg-white'>
          <img src={stage3} alt='' />
          <h1 className='text-xl my-1 text-mypurple-600 font-bold'>Stage 3</h1>
          <div className='p-2 w-full flex justify-between items-center gap-2'>
            <button className='bg-mypurple-600 px-4 w-full py-1 text-white rounded-md'><Link to='/mix'>Mix</Link> </button>
            <button className='bg-gray-400 px-4 w-full py-1 text-white rounded-md'><Link to="/sell">Sell</Link></button>
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-center flex-col bg-white'>
          <img src={stage4} alt='' />
          <h1 className='text-xl my-1 text-mypurple-600 font-bold'>Stage 4</h1>
          <div className='p-2 w-full flex justify-between items-center gap-2'>
            <button className='bg-mypurple-600 px-4 w-full py-1 text-white rounded-md'><Link to='/mix'>Mix</Link> </button>
            <button className='bg-gray-400 px-4 w-full py-1 text-white rounded-md'><Link to="/sell">Sell</Link></button>
          </div>
        </div>
      </div>
      <div className='flex gap-2'>
        <div className='w-1/2 flex justify-center items-center flex-col bg-white'>
          <img src={stage5} alt='' />
          <h1 className='text-xl my-1 text-mypurple-600 font-bold'>Stage 5</h1>
          <div className='p-2 w-full flex justify-between items-center gap-2'>
            <button className='bg-mypurple-600 px-4 w-full py-1 text-white rounded-md'><Link to='/mix'>Mix</Link> </button>
            <button className='bg-gray-400 px-4 w-full py-1 text-white rounded-md'><Link to="/sell">Sell</Link></button>
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-center flex-col bg-white'>
          <img src={stage6} alt='' />
          <h1 className='text-xl my-1 text-mypurple-600 font-bold'>Stage 6</h1>
          <div className='p-2 w-full flex justify-between items-center gap-2'>
            <button className='bg-mypurple-600 px-4 w-full py-1 text-white rounded-md'><Link to='/mix'>Mix</Link> </button>
            <button className='bg-gray-400 px-4 w-full py-1 text-white rounded-md'><Link to="/sell">Sell</Link></button>
          </div>
        </div>
      </div>
      <div className='flex gap-2'>
        <div className='w-1/2 flex justify-center items-center flex-col bg-white'>
          <img src={stage7} alt='' />
          <h1 className='text-xl my-1 text-mypurple-600 font-bold'>Stage 5</h1>
          <div className='p-2 w-full flex justify-between items-center gap-2'>
            <button className='bg-mypurple-600 px-4 w-full py-1 text-white rounded-md'><Link to='/mix'>Mix</Link> </button>
            <button className='bg-gray-400 px-4 w-full py-1 text-white rounded-md'><Link to="/sell">Sell</Link></button>
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-center flex-col bg-white'>
          <img src={stage8} alt='' />
          <h1 className='text-xl my-1 text-mypurple-600 font-bold'>Stage 6</h1>
          <div className='p-2 w-full flex justify-between items-center gap-2'>
            <button className='bg-mypurple-600 px-4 w-full py-1 text-white rounded-md'><Link to='/mix'>Mix</Link> </button>
            <button className='bg-gray-400 px-4 w-full py-1 text-white rounded-md'><Link to="/sell">Sell</Link></button>
          </div>
        </div>
      </div>
      <div className='flex gap-2'>
        <div className='w-1/2 flex justify-center items-center flex-col bg-white'>
          <img src={stage9} alt='' />
          <h1 className='text-xl my-1 text-mypurple-600 font-bold'>Stage 5</h1>
          <div className='p-2 w-full flex justify-between items-center gap-2'>
            <button className='bg-mypurple-600 px-4 w-full py-1 text-white rounded-md'><Link to='/mix'>Mix</Link> </button>
            <button className='bg-gray-400 px-4 w-full py-1 text-white rounded-md'><Link to="/sell">Sell</Link></button>
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-center flex-col bg-white'>
          <img src={stage10} alt='' />
          <h1 className='text-xl my-1 text-mypurple-600 font-bold'>Stage 6</h1>
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
