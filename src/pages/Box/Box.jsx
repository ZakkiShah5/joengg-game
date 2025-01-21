import '../Main/Main.css'
import Speaker from '../Ranking/components/Speaker'
import Back from './components/Back'
import Holdings from './components/Holdings'

const Box = () => {
  return (
    <div className='bg-main'>
      <Speaker />
      <Back />
      <Holdings />
    </div>
  )
}

export default Box