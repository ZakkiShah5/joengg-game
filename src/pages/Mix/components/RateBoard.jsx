import screw from '../../../assets/main/screw.png'

const RateBoard = () => {
  return (
    <div className='flex justify-between my-8 bg-transparent-300 max-w-96 mx-auto py-4 px-4 rounded-2xl items-center'>
      <div className='flex-col gap-6 flex'>
        <img src={screw} alt='' className='w-5' />
        <img src={screw} alt='' className='w-5' />
      </div>
      <div className='text-mypurple-600 flex items-center justify-between gap-2'>
        <p className='text-lg font-semibold'>Mix Success rate: </p>
        <span className='text-4xl font-bold'>50.00%</span>
      </div>
      <div className='flex-col gap-6 flex'>
        <img src={screw} alt='' className='w-5' />
        <img src={screw} alt='' className='w-5' />
      </div>
    </div>
  )
}

export default RateBoard
