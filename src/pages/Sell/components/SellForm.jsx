import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios' // Import Axios for API calls
import bgImg from '../../../assets/bag/bag.png'
import star from '../../../assets/bag/star.png'
import coin from '../../../assets/main/coin.png'
import plus from '../../../assets/sell/plus.png'
import minus from '../../../assets/sell/minus.png'
import coinSound from '../../../assets/sounds/coinsound.mp3'
import { useMute } from '../../../Context/VolumeContext'

const SellForm = () => {
  const { volume } = useMute()
  const [isAnimating, setIsAnimating] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false) // Loading state for API call
  const price = 120
  const maxQuantity = 5
  const userId = 1 // Defined user for testing
  const belugaLevel = 1 // Example level for conversion
  const [session, setSession] = useState(localStorage.getItem('authToken'))


  const handleAnimation = async (e) => {
    e.preventDefault()
    
    if (quantity < 5) {
      alert("Minimum quantity for exchange is 5!")
      return
    }

    if (volume) {
      const audio = new Audio(coinSound)
      audio.load()
      audio.play()
    }

    setIsAnimating(true)
    setIsLoading(true)

    try {
      const response = await axios.post(
        "https://apigame.meccain.com/beluga/convert",
        {
          level: belugaLevel,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: session, // Replace with valid token
            "Content-Type": "application/json",
          },
        }
      )

      if (response.status === 200) {
        alert("Beluga converted successfully!")
      } else {
        alert("Conversion failed. Try again!")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred. Please try again.")
    }

    setTimeout(() => {
      setIsAnimating(false)
      setIsLoading(false)
    }, 1500)
  }

  const increaseQuantity = () => {
    if (quantity < maxQuantity) setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const setMaxQuantity = () => setQuantity(maxQuantity)

  return (
    <div className='relative mx-auto py-4 px-4 flex flex-col justify-center items-center gap-2'>
      <h1 className='my-3 text-4xl text-white'>Stage 1</h1>
      <div className='w-80 flex rounded-3xl overflow-hidden justify-center shadow-xl items-center flex-col bg-white'>
        <img src={bgImg} className='w-full' alt='' />
        <div>
          <img src={star} className='p-2 w-16' alt='' />
        </div>
      </div>
      <form className='mt-[-20px] bg-transparent-300 w-72 p-5 rounded-b-2xl overflow-hidden'>
        <div className='py-5 border-b-mypurple-600 border-b flex justify-between items-center text-mypurple-600'>
          <h2 className='text-2xl font-extrabold'>Price</h2>
          <div className='flex gap-2 items-baseline'>
            <img src={coin} className='w-6' alt='' />
            <p className='text-3xl font-semibold'>{price}</p>
          </div>
        </div>

        <div className='py-5 border-b-mypurple-600 flex border-b justify-between items-center text-mypurple-600'>
          <div>
            <h2 className='text-2xl font-extrabold'>Quantity</h2>
            <span>Max {maxQuantity}</span>
          </div>
          <div className='text-center mr-5'>
            <div className='flex items-center relative text-3xl'>
              <img
                src={minus}
                className='w-11 absolute left-[-30px] cursor-pointer'
                alt=''
                onClick={decreaseQuantity}
              />
              <span className='bg-purple-900 w-14 text-white'>{quantity}</span>
              <img
                src={plus}
                className='w-11 absolute right-[-30px] cursor-pointer'
                alt=''
                onClick={increaseQuantity}
              />
            </div>
            <span className='cursor-pointer' onClick={setMaxQuantity}>
              Max
            </span>
          </div>
        </div>

        <div className='py-5 flex justify-between items-center text-mypurple-600'>
          <h2 className='text-2xl font-extrabold'>Total</h2>
          <div className='flex gap-2 items-baseline'>
            <img src={coin} className='w-6' alt='' />
            <p className='text-3xl font-semibold'>{price * quantity}</p>
          </div>
        </div>

        <div className='flex justify-center'>
          <button
            onClick={handleAnimation}
            className='bg-mypurple-600 py-2 rounded-lg text-white text-2xl font-bold w-10/12 disabled:opacity-50'
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Confirm"}
          </button>
        </div>
      </form>

      {/* Animated Coin */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {isAnimating && (
          <motion.img
            src={coin}
            className='w-36'
            alt='Coin'
            initial={{ y: 500, scale: 0.5, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{ left: '50%', transform: 'translateX(-50%)' }}
          />
        )}
      </div>

      <div className='text-white text-lg'>
        <p>Exchangeable from a minimum of 5</p>
      </div>
    </div>
  )
}

export default SellForm
