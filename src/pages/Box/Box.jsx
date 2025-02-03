import { useEffect, useState } from 'react'
import '../Main/Main.css'
import Speaker from '../Ranking/components/Speaker'
import Back from './components/Back'
import Holdings from './components/Holdings'
import Levels from './components/Levels'
import api from '../../api'

const Box = () => {
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
    <div className='bg-main'>
      <Speaker />
      <Back />
      <Holdings data={data} />
      <Levels />
    </div>
  )
}

export default Box