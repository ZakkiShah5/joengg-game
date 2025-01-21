import '../Main/Main.css'
import { Menu, RightIcons } from '../../components'
import chara from '../../assets/wallet/chara.png'
import { FaEdit } from 'react-icons/fa'
import Form from './components/Form'

const My = () => {
  return (
    <>
      <RightIcons />
      <div className='bg-main flex flex-col justify-center items-center'>
        <Menu />
        <section className=''>
          <div className='mb-2'>
            <div className='w-44 relative mx-auto text-white text-center'>
              <img src={chara} className='w-full rounded-md' alt='character' />
              <div className='bg-white absolute right-0 bottom-[30px] text-mypurple-600 font-extralight flex justify-center items-center text-xl rounded-lg w-8 p-2 h-8'>
                <FaEdit />
              </div>
              <h2 className='text-2xl font-medium my-3'>John Smith</h2>
            </div>
            <div className='w-56 mx-auto bg-white h-[0.5px]'></div>
          </div>
        </section>
        <Form />
      </div>
    </>
  )
}

export default My
