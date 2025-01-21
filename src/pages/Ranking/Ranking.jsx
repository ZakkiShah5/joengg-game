import '../Main/Main.css'

import Top from './components/Top'
import Board from './components/Board'
import { Menu } from '../../components'
import Speaker from './components/Speaker'

const Ranking = () => {
  return (
    <div className='bg-main flex justify-center flex-col'>
        <Speaker />
        <Top />
        <Board />
        <Menu />
    </div>
  )
}

export default Ranking