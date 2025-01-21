import { Menu } from '../../components'
import '../Main/Main.css'

import Character from './components/Character'

const Wallet = () => {
  return (
    <div className='bg-main flex flex-col justify-center items-center'>
        <Character />
        <Menu />
    </div>
  )
}

export default Wallet