import { useState, useEffect } from 'react'
import { Menu, RightIcons, WithdrawPopup } from '../../components'
import '../Main/Main.css'

import Character from './components/Character'
import api from '../../api'

const Wallet = () => {

  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(null)
  const [session, setSession] = useState(localStorage.getItem('authToken'))
  useEffect(() => {
    const handleRank = async () => {
      try {
        const response = await api.get('/user/profile', {
          headers: { Authorization: session }
        })
        setData(response.data)
      } catch (error) {
        console.error('❌ Error :', error)
        alert('❌ Unexpected error. Please try again later.')
      }
    }

    handleRank() // Call the async function
  }, [session])

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
        <Character data={data} setShowModal={setShowModal} />
        <Menu />
      </div>
    </>
  )
}

export default Wallet
