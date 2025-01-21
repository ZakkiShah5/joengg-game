import coin from '../../../assets/main/coin.png'

const Holdings = () => {
  return (
    <div className='flex justify-between mt-8 bg-transparent-300 max-w-96 mx-auto py-14 px-4 rounded-2xl items-center'>
        <h1 className='text-mypurple-600 font-medium text-lg'>Current Holding value: </h1>
        <div className='flex items-center gap-1'>
            <img src={coin} alt="coin" className='w-8' />
            <span className='text-4xl font-bold text-mypurple-600'>00.00</span>
            <span>$</span>
        </div>
    </div>
  )
}

export default Holdings