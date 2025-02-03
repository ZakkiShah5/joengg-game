import first from '../../../assets/ranking/first.png'
import second from '../../../assets/ranking/second.png'
import third from '../../../assets/ranking/third.png'
import coin from '../../../assets/main/coin.png'

const Top = ({data}) => {
  return (
    <div className="mx-8">
        <h1 className="font-bold text-3xl text-white">Ranking</h1>
        <div>
            <div className="relative flex my-7 bg-transparent-300 rounded-xl px-4 py-2 items-center text-mypurple-600 justify-between">
                <img src={first} alt="first" className='w-28 absolute left-[-31px]' />
                <h3 className='text-lg ml-16'>{data[0].name}</h3>
                <div className='flex gap-2 items-center'>
                    <p className='font-bold text-lg'>{data[0].accumulated_value}</p>
                    <img src={coin} className='w-6' alt="" />
                </div>
            </div>
            <div className="relative flex my-7 bg-transparent-300 rounded-xl px-4 py-2 items-center text-mypurple-600 justify-between">
                <img src={second} alt="first" className='w-28 absolute left-[-31px]' />
                <h3 className='text-lg ml-16'>{data[1].name}</h3>
                <div className='flex gap-2 items-center'>
                    <p className='font-bold text-lg'>{data[1].accumulated_value}</p>
                    <img src={coin} className='w-6' alt="" />
                </div>
            </div>
            <div className="relative flex my-7 bg-transparent-300 rounded-xl px-4 py-2 items-center text-mypurple-600 justify-between">
                <img src={third} alt="first" className='w-28 absolute left-[-31px]' />
                <h3 className='text-lg ml-16'>{data[2].name}</h3>
                <div className='flex gap-2 items-center'>
                    <p className='font-bold text-lg'>{data[2].accumulated_value}</p>
                    <img src={coin} className='w-6' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top