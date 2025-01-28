import { useState } from 'react'
import { Menu, RightIcons, WithdrawPopup } from '../../components'
import '../Main/Main.css'

import Character from './components/Character'

const Wallet = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {showModal && (
        <>
          <WithdrawPopup setShowModal={setShowModal}/>
          <div className='overlay bg-transparent-400 z-30 fixed top-0 left-0 min-h-screen w-full'></div>
        </>
      )}
      <RightIcons />
      <div className='bg-main flex flex-col justify-center items-center'>
        <Character setShowModal={setShowModal} />
        <Menu />
      </div>
    </>
  )
}

export default Wallet
