import Speaker from './components/Speaker'

import '../Main/Main.css'
import { Menu } from '../../components'
import chara from '../../assets/wallet/chara.png'
import AddressData from './components/AddressData'

const Rewards = () => {
  return (
    <>
      <Speaker />
      <div className='bg-main flex flex-col justify-center items-center'>
        <div className='w-44 mx-auto text-white text-center'>
          <img src={chara} className='w-full rounded-md' alt='character' />
          <h2 className='text-xl my-3'>John Smith</h2>
        </div>
        <div className='w-64 mx-auto bg-white h-[0.5px]'></div>
        <AddressData />
        <Menu />
      </div>
    </>
  )
}

export default Rewards
