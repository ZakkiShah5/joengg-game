import { PiWarningCircle } from 'react-icons/pi'

const WithdrawPopup = ({setShowModal}) => {
  return (
    <div className='text-center fixed  top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2'>
      <div className='bg-white w-96 rounded-xl overflow-hidden text-mypurple-600'>
        <div className='h-6 w-full bg-mypurple-600'></div>
        <div className='flex px-2 pb-4 w-10/12 mx-auto gap-2 flex-col justify-center items-center'>
          <PiWarningCircle className='text-7xl' />
          <h2 className='text-black text-xs'>The withdrawal address is not registered.</h2>
          <p className='text-xs font-semibold mb-2'>Please enter your withdrawal address on My Page.</p>
          <button
            onClick={()=> setShowModal(false)}
            className='bg-mypurple-600 font-bold text-2xl rounded-lg text-white px-2 w-8/12 py-2 '
          >
            Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default WithdrawPopup
