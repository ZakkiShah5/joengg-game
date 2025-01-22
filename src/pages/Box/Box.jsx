import '../Main/Main.css'
import Speaker from '../Ranking/components/Speaker'
import Back from './components/Back'
import Holdings from './components/Holdings'
import Levels from './components/Levels'

const Box = () => {
  return (
    <div className='bg-main'>
      <Speaker />
      <Back />
      <Holdings />
      <Levels />
    </div>
  )
}

export default Box