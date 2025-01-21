import first from '../../../assets/ranking/first.png'
import second from '../../../assets/ranking/second.png'
import third from '../../../assets/ranking/third.png'
import coin from '../../../assets/main/coin.png'

const Top = () => {
  return (
    <div className="my-0 mx-8">
        <h1 className="font-bold text-3xl text-white">Ranking</h1>
        <div>
            <div className="relative flex my-7 bg-transparent-300 rounded-xl px-4 py-2 items-center text-mypurple-600 justify-between">
                <img src={first} alt="first" className='w-28 absolute left-[-31px]' />
                <h3 className='text-lg ml-16'>John Smith</h3>
                <div className='flex gap-2 items-center'>
                    <p className='font-bold text-lg'>100,000</p>
                    <img src={coin} className='w-6' alt="" />
                </div>
            </div>
            <div className="relative flex my-7 bg-transparent-300 rounded-xl px-4 py-2 items-center text-mypurple-600 justify-between">
                <img src={second} alt="first" className='w-28 absolute left-[-31px]' />
                <h3 className='text-lg ml-16'>John Smith</h3>
                <div className='flex gap-2 items-center'>
                    <p className='font-bold text-lg'>90,000</p>
                    <img src={coin} className='w-6' alt="" />
                </div>
            </div>
            <div className="relative flex my-7 bg-transparent-300 rounded-xl px-4 py-2 items-center text-mypurple-600 justify-between">
                <img src={third} alt="first" className='w-28 absolute left-[-31px]' />
                <h3 className='text-lg ml-16'>John Smith</h3>
                <div className='flex gap-2 items-center'>
                    <p className='font-bold text-lg'>80,000</p>
                    <img src={coin} className='w-6' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top