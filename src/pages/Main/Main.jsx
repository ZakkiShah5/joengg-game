import { Menu } from '../../components'
import Character from './components/Character'
import Icons from './components/Icons'
import './Main.css'


const Main = () => {
  return (
    <div className='bg-main'>
        <Icons />
        <Character/>
        <Menu />
    </div>
  )
}

export default Main