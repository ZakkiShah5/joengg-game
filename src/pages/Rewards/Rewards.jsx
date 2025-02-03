import Speaker from './components/Speaker'

import '../Main/Main.css'
import { Menu } from '../../components'
import chara from '../../assets/wallet/chara.png'
import AddressData from './components/AddressData'
import api from '../../api'
import { useEffect, useState } from 'react'

const Rewards = () => {
  const [data, setData] = useState(null)
  const [session, setSession] = useState(localStorage.getItem('authToken'))
  useEffect(() => {
    const handleRank = async () => {
      try {
        const response = await api.get('/game/leaderboard', {
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
      <Speaker />
      <div className='bg-main flex flex-col justify-center items-center'>
        <div className='w-44 mx-auto text-white text-center'>
          <img src={chara} className='w-full rounded-md' alt='character' />
          {data ? (
            <h2 className='text-xl my-3'>{data[0].name}</h2>
          ) : (
            <h2 className='text-xl my-3'>Loading...</h2>
          )}
        </div>
        <div className='w-64 mx-auto bg-white h-[0.5px]'></div>
        <AddressData data={data} />
        <Menu />
      </div>
    </>
  )
}

export default Rewards
