import chara from '../../../assets/wallet/chara.png'
import coin from '../../../assets/main/coin.png'

const Character = ({data ,setShowModal}) => {

  return (
    <section className='mb-16'>
      <div className='w-44 mx-auto text-white text-center'>
        <img src={chara} className='w-full rounded-md' alt='character' />
        <h2 className='text-xl my-3'>
          {data? data.data.username : "loading..."}
        </h2>
      </div>
      <div className='w-56 mx-auto bg-white h-[0.5px]'></div>
      <div className='mt-4 w-80 rounded-lg bg-transparent-200 p-5'>
        <h1 className='text-2xl font-bold text-mypurple-600'>Mecca Crypto</h1>
        <div className='flex my-5 justify-between items-center'>
          <h2 className='text-xl font-bold text-mypurple-600'>Total:</h2>
          <div className='flex items-center gap-2'>
            <img src={coin} className='w-10' alt='coin' />
            <div className='flex gap-2 items-end'>
              <p className='text-mypurple-600 font-bold text-xl'>
              {data ? data.data.coins : "loading..."}
              </p>
              <span className=''>MEA</span>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <input type="number" className='mb-3 p-2 rounded-lg outline-mypurple-600' placeholder='Enter Address' />
          <button onClick={()=> setShowModal(true)} className='bg-mypurple-600 text-white py-2 px-6 text-xl font-bold rounded-xl'>
            Withdrawal
          </button>
        </div>
      </div>
    </section>
  )
}

export default Character
