import bag from '../../../assets/bag/bag.png'
import star from '../../../assets/bag/star.png'
import mid from '../../../assets/bag/mid.png'

import '../Mix.css'

const MixUp = ({ mixSuccess, handleMix, handleBack, isMixing }) => {
  return (
    <div className='mx-auto py-4 px-4 flex flex-col gap-2'>
      <div className={`flex gap-2`}>
        {/* Div 1 */}
        <div
          className={`${
            isMixing ? 'animate1' : ''
          }  w-1/2 flex rounded-2xl overflow-hidden justify-center items-center flex-col bg-white`}
        >
          <img src={bag} alt='' />
          <div>
            <img
              src={star}
              className={`${isMixing ? 'animateStar' : ''}  p-2 w-12`}
              alt=''
            />
          </div>
        </div>
        {/* Div 2 */}
        <div
          className={`${
            isMixing ? 'animate2' : ''
          } w-1/2 rounded-2xl overflow-hidden flex justify-center items-center flex-col bg-white`}
        >
          <img src={bag} alt='' />
          <div>
            <img
              src={star}
              className={`${isMixing ? 'animateStar' : ''}  p-2 w-12`}
              alt=''
            />
          </div>
        </div>
      </div>
      {/* Middle Image */}
      <div className={`flex justify-center ${isMixing ? 'mid-disappear' : ''}`}>
        <img src={mid} className='w-1/2 mid-img' alt='' />
      </div>
      <div className='flex gap-2'>
        {/* Div 3 */}
        <div
          className={`${
            isMixing ? 'animate3' : ''
          } w-1/2 flex rounded-2xl overflow-hidden justify-center items-center flex-col bg-white`}
        >
          <img src={bag} alt='' />
          <div>
            <img
              src={star}
              className={`${isMixing ? 'animateStar' : ''}  p-2 w-12`}
              alt=''
            />
          </div>
        </div>
        {/* Div 4 */}
        <div
          className={`${
            isMixing ? 'animate4' : ''
          } w-1/2 rounded-2xl overflow-hidden flex justify-center items-center flex-col bg-white`}
        >
          <img src={bag} alt='' />
          {mixSuccess ? (
            <div className='flex'>
              <img
                src={star}
                className={`${isMixing ? 'animateStar' : ''}  p-2 w-12`}
                alt=''
              />
              <img
                src={star}
                className={`${isMixing ? 'animateStar' : ''}  p-2 w-12`}
                alt=''
              />
            </div>
          ) : (
            <div>
              <img
                src={star}
                className={`${isMixing ? 'animateStar' : ''}  p-2 w-12`}
                alt=''
              />
            </div>
          )}
        </div>
      </div>
      {/* Button */}
      <div className='mt-3 flex justify-center'>
        {!isMixing ? (
          <button
            className=' bg-mypurple-600 py-1 rounded-lg text-white text-2xl font-bold w-1/2'
            onClick={handleMix}
          >
            Mix
          </button>
        ) : (
          <button
            className='absolute bottom-4 bg-mypurple-600 py-1 rounded-lg text-white text-2xl font-bold w-1/2'
            onClick={handleBack}
          >
            Back
          </button>
        )}
      </div>
    </div>
  )
}

export default MixUp
