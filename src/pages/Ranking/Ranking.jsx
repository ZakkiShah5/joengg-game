import '../Main/Main.css'

import api from '../../api'
import Top from './components/Top'
import Board from './components/Board'
import { Menu } from '../../components'
import Speaker from './components/Speaker'
import { useEffect, useState } from 'react'

const Ranking = () => {
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
    <div className='bg-main py-20'>
      <Speaker />
      {data?
      <>
      <Top data={data} />
      <Board data={data} />
      </> : "loading..."
      }
      <Menu />
    </div>
  )
}

export default Ranking
