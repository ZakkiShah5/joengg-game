import character from '../assets/bag/bag.png'


const TapsModal = ({setShowModal}) => {
  return (
    <div className='text-center fixed  top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2'>
      <div className='bg-white w-96 rounded-xl overflow-hidden text-mypurple-600'>
        <div className='h-6 w-full bg-mypurple-600'></div>
        <div className='flex px-4 pb-4 w-8/12 mx-auto flex-col justify-center items-center'>
          <h1 className='text-3xl mb-1 font-bold'>Great!</h1>
          <img src={character} className='rounded-xl h-24' alt='' />
          <h2 className='text-2xl font-bold'>Stage 2</h2>
          <p className='text-black text-sm mb-2'>MeccaScoin</p>
          <button onClick={()=> setShowModal(false)} className='bg-mypurple-600 font-bold text-2xl rounded-lg text-white px-2 py-2 w-full'>
            Get!
          </button>
        </div>
      </div>
    </div>
  )
}

export default TapsModal
