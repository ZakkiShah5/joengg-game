
import Back from './components/Back'
import Speaker from '../Ranking/components/Speaker'
import RateBoard from './components/RateBoard'
import MixUp from './components/MixUp'
import { useState } from 'react'

const Mix = () => {
  const [mixSuccess, setMixSuccess] = useState(null); // To track if mix is successful or failed
  const [isMixing, setIsMixing] = useState(false);

  

  const handleBack = () => {
    setIsMixing(false);
  };
  const handleMix = () => {
    const success = Math.random() > 0.5; // 50% chance
    console.log(success)
    if (success) {
      setIsMixing(true); // Proceed with mixing animations
      setMixSuccess(true); // Mark the mix as successful
    } if (!success) {
      setIsMixing(true);
      setMixSuccess(false)
    }
  };
  return (
    <div className='bg-main'>
        <Back />
        <Speaker />
        <RateBoard mixSuccess={mixSuccess} isMixing={isMixing} />
        <MixUp mixSuccess={mixSuccess} handleMix={handleMix} handleBack={handleBack} isMixing={isMixing} />
    </div>
  )
}

export default Mix