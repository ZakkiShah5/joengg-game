import { useState } from 'react'
import { TapsModal } from '../../../components'

const Character = ({
  tapCount,
  handleTap,
  getCharacterGif,
  characterStyles
}) => {
  const [showModal, setShowModal] = useState(false)

  const showOrNot = () => {
    if (tapCount === 30) {
      return setShowModal(true)
    } else {
      setShowModal(false)
    }
  }

  return (
    <>
      {showModal && (
        <>
          <TapsModal setShowModal={setShowModal} />
          <div className='overlay bg-transparent-400 z-30 fixed top-0 left-0 min-h-screen w-full'></div>
        </>
      )}

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='flex justify-center flex-col gap-4 items-center my-20 mx-8'>
          <div>
            <img
              onClick={handleTap}
              src={getCharacterGif()}
              alt='character'
              className='chara w-80 h-80  object-contain'
              style={characterStyles}
            />
          </div>

          <div className='relative'>
            {tapCount === 30 ? (
              <div className='bg-white text-center w-[255px] py-3 px-3 rounded-3xl'>
                <p
                  onClick={() => showOrNot()}
                  className='text-mypurple-600 font-semibold'
                >
                  Claim your Reward now!
                </p>
              </div>
            ) : (
              <div className='bg-white w-[255px] py-3 px-3 rounded-3xl'>
                <p
                  onClick={() => showOrNot()}
                  className='text-mypurple-600 font-semibold'
                >
                  Claim your Reward in
                </p>
                <div className='absolute right-0 top-[-20px] rounded-2xl bg-mypurple-600 border-4 border-white text-white flex flex-col justify-center items-center w-20 h-20'>
                  <h1 className='text-3xl font-extrabold'>{30 - tapCount}</h1>
                  <p>Taps left!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Character
