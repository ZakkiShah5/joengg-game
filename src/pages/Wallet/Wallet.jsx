import { Menu, RightIcons } from '../../components'
import '../Main/Main.css'

import Character from './components/Character'

const Wallet = () => {
  return (
    <div>
      <RightIcons />
      <div className='bg-main flex flex-col justify-center items-center'>
        <Character />
        <Menu />
      </div>
    </div>
  )
}

export default Wallet
