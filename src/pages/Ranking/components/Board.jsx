import coin from '../../../assets/main/coin.png'

const Board = ({data}) => {
  return (
    <div className='mx-8 flex gap-2'>
        <div className='py-2 flex flex-col gap-1'>
            <div className='bg-white text-mypurple-600 w-6 h-6 flex justify-center items-center rounded-full'>
                <span>4</span>
            </div>
            <div className='bg-white text-mypurple-600 w-6 h-6 flex justify-center items-center rounded-full'>
                <span>5</span>
            </div>
            <div className='bg-white text-mypurple-600 w-6 h-6 flex justify-center items-center rounded-full'>
                <span>6</span>
            </div>
            <div className='bg-white text-mypurple-600 w-6 h-6 flex justify-center items-center rounded-full'>
                <span>7</span>
            </div>
            <div className='bg-white text-mypurple-600 w-6 h-6 flex justify-center items-center rounded-full'>
                <span>8</span>
            </div>
            <div className='bg-white text-mypurple-600 w-6 h-6 flex justify-center items-center rounded-full'>
                <span>9</span>
            </div>
        </div>
        <div className='bg-transparent-50 pl-3 pr-2 py-2 w-full flex flex-col gap-1 rounded-md'>
            <div className='text-white font-medium flex justify-between'>
                <p>{data[3].name}</p>
                <div className='flex gap-2 items-center'>
                    <span>{data[3].accumulated_value}</span>
                    <img src={coin} alt="" className='w-6' />
                </div>
            </div>
            <div className='text-white font-medium flex justify-between'>
                <p>{data[4].name}</p>
                <div className='flex gap-2 items-center'>
                    <span>{data[4].accumulated_value}</span>
                    <img src={coin} alt="" className='w-6' />
                </div>
            </div>
            <div className='text-white font-medium flex justify-between'>
                <p>{data[5].name}</p>
                <div className='flex gap-2 items-center'>
                    <span>{data[5].accumulated_value}</span>
                    <img src={coin} alt="" className='w-6' />
                </div>
            </div>
            <div className='text-white font-medium flex justify-between'>
                <p>{data[6].name}</p>
                <div className='flex gap-2 items-center'>
                    <span>{data[6].accumulated_value}</span>
                    <img src={coin} alt="" className='w-6' />
                </div>
            </div>
            <div className='text-white font-medium flex justify-between'>
                <p>{data[7].name}</p>
                <div className='flex gap-2 items-center'>
                    <span>{data[7].accumulated_value}</span>
                    <img src={coin} alt="" className='w-6' />
                </div>
            </div>
            <div className='text-white font-medium flex justify-between'>
                <p>{data[8].name}</p>
                <div className='flex gap-2 items-center'>
                    <span>{data[8].accumulated_value}</span>
                    <img src={coin} alt="" className='w-6' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Board