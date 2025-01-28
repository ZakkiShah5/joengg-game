import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { IoCopy } from 'react-icons/io5'
import { PublicKey } from '@solana/web3.js'
import { SolanaPopup } from '../../../components'
import { PiWarningCircle } from 'react-icons/pi'
import { PiCheckCircle } from "react-icons/pi";


const Form = () => {
  const [solanaAddress, setSolanaAddress] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const validateSolanaAddress = address => {
    try {
      new PublicKey(address) // Validate Solana address using @solana/web3.js
      return true
    } catch {
      return false
    }
  }

  const handleBlur = () => {
    if (solanaAddress.trim() !== '') {
      const valid = validateSolanaAddress(solanaAddress)
      setIsValid(valid)
      setShowPopup(true)
    }
  }

  return (
    <>
      {showPopup && (
        <>
          {isValid ? (
            <SolanaPopup
              setShowPopup={setShowPopup}
              icon={<PiCheckCircle className='text-7xl text-green-600' />}
              title={'Registered Successfully!'}
              message={'Please make sure your address is correct.'}
            />
          ) : (
            <SolanaPopup
              setShowPopup={setShowPopup}
              icon={<PiWarningCircle className='text-7xl' />}
              title={''}
              message={'This is not a normal Solana address.'}
            />
          )}
          <div className='overlay bg-transparent-400 z-30 fixed top-0 left-0 min-h-screen w-full'></div>
        </>
      )}
      <form className='text-white mb-20 text-lg flex border-none gap-1 flex-col'>
        <div>
          <label htmlFor='name'>Mecca Crew Name</label>
          <div className='flex items-center justify-between text-mypurple-600 bg-white px-2 py-2 rounded-md'>
            <input
              type='text'
              id='name'
              name='name'
              className='outline-none'
              placeholder='John Smith'
            />
            <FaEdit />
          </div>
        </div>
        <div>
          <label htmlFor='sol'>Solana Address</label>
          <div className='flex items-center justify-between text-mypurple-600 bg-white px-2 py-2 rounded-md'>
            <input
              type='text'
              id='sol'
              name='sol'
              className='outline-none'
              placeholder='Your Solana Address'
              value={solanaAddress}
              onChange={e => setSolanaAddress(e.target.value)}
              onBlur={handleBlur}
            />
            <FaEdit />
          </div>
        </div>
        <div>
          <label htmlFor='referral'>Referral Code</label>
          <div className='flex items-center justify-between text-mypurple-600 bg-white px-2 py-2 rounded-md'>
            <input
              type='text'
              id='referral'
              name='referral'
              className='outline-none'
              placeholder='0x00000000'
            />
            <IoCopy />
          </div>
        </div>
      </form>
    </>
  )
}

export default Form
