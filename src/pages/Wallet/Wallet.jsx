import { Menu, RightIcons } from '../../components'
import '../Main/Main.css'

import Character from './components/Character'

const Wallet = () => {
  return (
    <>
      <RightIcons />
      <div className='bg-main flex flex-col justify-center items-center mb-24'>
        <Character />
        <Menu />
      </div>
    </>
  )
}

export default Wallet
