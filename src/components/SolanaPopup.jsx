
const SolanaPopup = ({setShowPopup,icon, title ,message}) => {
  return (
    <div className='text-center fixed  top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2'>
      <div className='bg-white w-96 rounded-xl overflow-hidden text-mypurple-600'>
        <div className='h-6 w-full bg-mypurple-600'></div>
        <div className='flex px-2 pb-4 w-10/12 mx-auto gap-2 flex-col justify-center items-center'>
          {icon}
          <h1 className="text-green-600 text-lg font-semibold">{title}</h1>
          <p className='text-sm font-semibold mb-2'>{message}</p>
          <button
            onClick={()=> setShowPopup(false)}
            className='bg-mypurple-600 font-bold text-2xl rounded-lg text-white px-2 w-8/12 py-2 '
          >
            Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default SolanaPopup
