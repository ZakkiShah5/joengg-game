import '../Main/Main.css'
import { Menu, RightIcons } from '../../components'
import { FaEdit } from 'react-icons/fa'
import Form from './components/Form'
import { useState, useEffect } from 'react'
import api from '../../api'

import chara1 from '../../assets/characters/1.png'
import chara2 from '../../assets/characters/2.png'
import chara3 from '../../assets/characters/3.png'
import chara4 from '../../assets/characters/4.png'
import chara5 from '../../assets/characters/5.png'
import chara6 from '../../assets/characters/6.png'
import chara7 from '../../assets/characters/7.png'
import chara8 from '../../assets/characters/8.png'
import chara9 from '../../assets/characters/9.png'
import chara10 from '../../assets/characters/10.png'

const characters = [
  { id: 1, name: 'John Smith', img: chara1 },
  { id: 2, name: 'John Smith', img: chara2 },
  { id: 3, name: 'John Smith', img: chara3 },
  { id: 4, name: 'John Smith', img: chara4 },
  { id: 5, name: 'John Smith', img: chara5 },
  { id: 6, name: 'John Smith', img: chara6 },
  { id: 7, name: 'John Smith', img: chara7 },
  { id: 8, name: 'John Smith', img: chara8 },
  { id: 9, name: 'John Smith', img: chara9 },
  { id: 10, name: 'John Smith', img: chara10 }
]

const My = () => {
  const [selectedChara, setSelectedChara] = useState(characters[9]) // Default character is chara10
  const [showCharacters, setShowCharacters] = useState(false)
  const [data, setData] = useState(null)
  const [session, setSession] = useState(localStorage.getItem('authToken'))
  useEffect(() => {
    const handleRank = async () => {
      try {
        const response = await api.get('/user/profile', {
          headers: { Authorization: session }
        })
        setData(response.data)
        console.log(response.data.data.username)
      } catch (error) {
        console.error('❌ Error :', error)
        alert('❌ Unexpected error. Please try again later.')
      }
    }

    handleRank() // Call the async function
  }, [session])

  const handleSelectChara = chara => {
    setSelectedChara(chara)
    setShowCharacters(false)
  }

  return (
    <>
      <RightIcons />
      <div className='bg-main flex flex-col justify-center items-center'>
        <Menu />
        <section className=''>
          <div className='mb-2'>
            <div className='w-32 relative mx-auto text-white text-center'>
              <img
                src={selectedChara.img}
                className='w-full rounded-md'
                alt={selectedChara.name}
              />
              <div
                className='bg-white absolute right-[-30px] bottom-[30px] text-mypurple-600 font-extralight flex justify-center items-center text-xl rounded-lg w-8 p-2 h-8 cursor-pointer'
                onClick={() => setShowCharacters(!showCharacters)}
              >
                <FaEdit />
              </div>
              <h2 className='text-2xl font-medium my-3'>
                {data ? <>{data.data.username}</>: ""}
              </h2>
            </div>
            <div className='w-56 mx-auto bg-white h-[0.5px]'></div>
          </div>
        </section>
        {showCharacters ? (
          <div className='m-3 grid grid-cols-4 gap-4 mt-4'>
            {characters.map(chara => (
              <div
                key={chara.id}
                className='cursor-pointer flex flex-col items-center'
                onClick={() => handleSelectChara(chara)}
              >
                <img
                  src={chara.img}
                  alt={chara.name}
                  className='w-20 h-20 rounded-md object-contain'
                />
              </div>
            ))}
          </div>
        ) : (
          <Form />
        )}
      </div>
    </>
  )
}

export default My
