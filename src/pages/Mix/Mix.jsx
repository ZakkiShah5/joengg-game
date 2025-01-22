import React from 'react'
import Back from './components/Back'
import Speaker from '../Ranking/components/Speaker'
import RateBoard from './components/RateBoard'
import MixUp from './components/MixUp'

const Mix = () => {
  return (
    <div className='bg-main'>
        <Back />
        <Speaker />
        <RateBoard />
        <MixUp />
    </div>
  )
}

export default Mix