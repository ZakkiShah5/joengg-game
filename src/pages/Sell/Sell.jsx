import Back from './components/Back'
import Speaker from '../Ranking/components/Speaker'
import SellForm from './components/SellForm'

const Sell = () => {
  return (
    <div className='bg-main overflow-hidden'>
        <Back />
        <Speaker />
        <SellForm/>
    </div>
  )
}

export default Sell