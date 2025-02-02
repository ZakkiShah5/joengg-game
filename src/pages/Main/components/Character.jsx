import { useState, useEffect } from 'react'
import { TapsModal } from '../../../components'

const Character = ({
  tapCount,
  handleTap,
  setCharacterState,
  getCharacterGif,
  characterStyles,
  handleClaim,
  wait
}) => {
  const [showModal, setShowModal] = useState(false)
  const [rewardClaim, setRewardClaim] = useState(false)

  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    let timer
    // If game is not active, start the countdown with wait
    const updateTime = () => {
      if (wait > 0) {
        wait -= 1000 // Decrease by 1 second (1000 ms)
        console.log(wait)
        setHours(Math.floor(wait / 3600000)) // Calculate hours
        setMinutes(Math.floor((wait % 3600000) / 60000)) // Calculate minutes
        setSeconds(Math.floor((wait % 60000) / 1000)) // Calculate seconds
      } else {
        clearInterval(timer) // Stop the timer when the time is up
      }

      // Start the timer that updates the time every second
      timer = setInterval(updateTime, 1000)
    }

    // Cleanup interval on component unmount or when gameStatus changes
    return () => clearInterval(timer)
  }, [wait])

  // Function to claim reward
  const reward = () => {
    // checkRewardCooldown()
    localStorage.setItem('lastClaimedTime', new Date().getTime()) // Store the current time
    setShowModal(false)
    setRewardClaim(true)
    console.log(rewardClaim)
  }

  // Function to show modal if tapCount is 30
  const showOrNot = () => {
    handleClaim()
    if (tapCount === 30) {
      setCharacterState('')
      setShowModal(true)
    } else {
      setShowModal(false)
    }
  }

 
  return (
    <>
      {showModal && (
        <>
          <TapsModal setShowModal={setShowModal} reward={reward} />
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
              className='chara w-80 h-80 object-contain'
              style={characterStyles}
            />
          </div>

          <div className='relative'>
            {tapCount === 30 ? (
              rewardClaim ? (
                <div>
                  <div className='flex items-center justify-between text-white text-center w-[300px] py-3 px-3 rounded-3xl'>
                    <div className='rounded-2xl bg-mypurple-600 border-4 border-white text-white flex flex-col justify-center items-center w-20 h-20'>
                      <h1 className='text-3xl font-extrabold'>{hours}</h1>
                      <p>Hour</p>
                    </div>
                    <div className='text-4xl font-bold'>:</div>
                    <div className='rounded-2xl bg-mypurple-600 border-4 border-white text-white flex flex-col justify-center items-center w-20 h-20'>
                      <h1 className='text-3xl font-extrabold'>{minutes}</h1>
                      <p>Min</p>
                    </div>
                    <div className='text-4xl font-bold'>:</div>
                    <div className='rounded-2xl bg-mypurple-600 border-4 border-white text-white flex flex-col justify-center items-center w-20 h-20'>
                      <h1 className='text-3xl font-extrabold'>{seconds}</h1>
                      <p>Sec</p>
                    </div>
                  </div>
                  <p className='text-center text-white'>
                    You can only play 3 times a day!
                  </p>
                </div>
              ) : (
                <div className='flex flex-col justify-center items-center gap-5'>
                  <div className='bg-mypurple-600 border-4  text-white flex flex-col justify-center items-center w-20 h-20 rounded-full'>
                    <h1
                      onClick={() => showOrNot()}
                      className='text-lg font-extrabold'
                    >
                      Claim
                    </h1>
                  </div>
                  <div className='bg-white text-center w-[255px] py-3 px-3 rounded-3xl'>
                    <p className='text-mypurple-600 font-semibold'>
                      Claim your Reward now!
                    </p>
                  </div>
                </div>
              )
            ) : (
              <div className='w-[280px] text-center flex flex-col-reverse justify-center gap-5 items-center'>
                <p
                  onClick={() => showOrNot()}
                  className='text-mypurple-600 py-3 px-3 rounded-3xl bg-white font-semibold'
                >
                  Claim your Reward in taps it!
                </p>
                <div className='bg-mypurple-600 border-4  text-white flex flex-col justify-center items-center w-20 h-20 rounded-full'>
                  <h1 className='text-3xl font-extrabold'>{30 - tapCount}</h1>
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
