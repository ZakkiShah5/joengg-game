import chara from '../../../assets/videos/chara-idle.gif'

const Character = () => {
  return (
    <div className='flex justify-center flex-col gap-4 items-center my-20 mx-8'>
      <img src={chara} alt='chara' className='w-52' />
      <div className='relative'>
        <div className='bg-white w-[255px] py-3 px-3 rounded-3xl'>
          <p className='text-mypurple-600 font-semibold'>
            Claim your Reward in
          </p>
          <div className='absolute right-0 top-[-20px] rounded-2xl bg-mypurple-600 border-4 border-white text-white flex flex-col justify-center items-center w-20 h-20'>
            <h1 className='text-3xl font-extrabold'>30</h1>
            <p>Taps left!</p>
          </div>
        </div>
      </div>
      <div className='h-96 w-6 flex flex-col justify-end bg-transparent-100 absolute top-1/2 right-1 rounded-2xl transform -translate-x-1/2 -translate-y-1/2'>
        <div className='bg-mypurple-600 h-20 rounded-b-2xl'></div>
      </div>
    </div>
  )
}

export default Character
