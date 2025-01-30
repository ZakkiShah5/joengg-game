import Back from './components/Back'
import Speaker from '../Ranking/components/Speaker'
import RateBoard from './components/RateBoard'
import MixUp from './components/MixUp'
import { useState } from 'react'

import mixSound from '../../assets/sounds/3.coalescence.ogg'
import mixSuccessSound from '../../assets/sounds/5.success.ogg'
import mixFailSound from '../../assets/sounds/4.fail.wav'

const Mix = () => {
  const [mixSuccess, setMixSuccess] = useState(null) // To track if mix is successful or failed
  const [isMixing, setIsMixing] = useState(false)

  const handleBack = () => {
    setIsMixing(false)
  }
  const handleMix = () => {
    const audio = new Audio(mixSound)
    audio.load()
    audio.play()
    const success = Math.random() > 0.5 // 50% chance
    console.log(success)
    if (success) {
      setIsMixing(true) // Proceed with mixing animations
      setMixSuccess(true) // Mark the mix as successful
      const audio = new Audio(mixSuccessSound)
      audio.load()
      audio.play()
    }
    if (!success) {
      setIsMixing(true)
      setMixSuccess(false)
      const audio = new Audio(mixFailSound)
      audio.load()
      audio.play()
    }
  }
  return (
    <div className='bg-main'>
      <Back />
      <Speaker />
      <RateBoard mixSuccess={mixSuccess} isMixing={isMixing} />
      <MixUp
        mixSuccess={mixSuccess}
        handleMix={handleMix}
        handleBack={handleBack}
        isMixing={isMixing}
      />
    </div>
  )
}

export default Mix
