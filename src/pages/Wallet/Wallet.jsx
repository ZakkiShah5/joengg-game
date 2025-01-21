import { Menu, RightIcons } from '../../components'
import '../Main/Main.css'

import Character from './components/Character'

const Wallet = () => {
  return (
    <div className=''>
      <RightIcons />
      <div className='bg-main mx-auto py-20'>
        <Character />
        <Menu />
      </div>
    </div>
  )
}

export default Wallet
