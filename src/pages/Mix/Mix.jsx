import { useRef, useState } from 'react'
import Back from './components/Back'
import Speaker from '../Ranking/components/Speaker'
import RateBoard from './components/RateBoard'
import MixUp from './components/MixUp'

import mixSoundFile from '../../assets/sounds/3.coalescence.mp3'
import mixSuccessSoundFile from '../../assets/sounds/5.success.mp3'
import mixFailSoundFile from '../../assets/sounds/4.fail.mp3'

const Mix = () => {
  const [mixSuccess, setMixSuccess] = useState(null)
  const [isMixing, setIsMixing] = useState(false)

  const mixSound = useRef(new Audio(mixSoundFile))
  const mixSuccessSound = useRef(new Audio(mixSuccessSoundFile))
  const mixFailSound = useRef(new Audio(mixFailSoundFile))

  const playSound = (audioRef) => {
    audioRef.current.currentTime = 0 // Reset sound position
    audioRef.current.play().catch((err) => console.error('Audio play error:', err))
  }

  const handleBack = () => {
    setIsMixing(false)
  }

  const handleMix = () => {
    setIsMixing(true)
    playSound(mixSound)
    
    const success = Math.random() > 0.5 // 50% chance
    setMixSuccess(success)

    if (success) {
      mixSuccessSound.current.onended = () => setIsMixing(false)
      playSound(mixSuccessSound)
    } else {
      mixFailSound.current.onended = () => setIsMixing(false)
      playSound(mixFailSound)
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
