import chara from '../../../assets/videos/chara-idle.gif'
import '../Main.css'

const Character = () => {
  return (
    <div className='flex justify-center flex-col gap-4 items-center my-20 mx-8'>
      <div className='border-2 w-80 border-purple-500 rounded-full'>
        <img
          src={chara}
          alt='chara'
          className='chara w-80 h-80 rounded-full border-4 border-purple-500 object-contain'
        />
      </div>

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
    </div>
  )
}

export default Character
