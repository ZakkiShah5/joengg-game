const AddressData = () => {
  return (
    <section className='w-64 mb-20'>
      <div className='text-white my-2'>
        <div className='flex justify-between items-center'>
          <h1>My Recommender:</h1>
          <span>10</span>
        </div>
        <div className='flex justify-between items-center'>
          <h1>Additional unused games:</h1>
          <span>00</span>
        </div>
      </div>
      <div className='rounded-lg bg-transparent-300 overflow-hidden'>
        <div className='bg-mypurple-600 text-white p-2 flex justify-between'>
          <div className='flex-none border-r pr-4'>No</div>
          <div className='flex-1 text-center'>Address</div>
        </div>
        <div>
          <div className=' px-2 pt-2 text-sm flex justify-between'>
            <div className='text-mypurple-600 font-medium flex-none'>01</div>
            <div className='flex-1 text-center'>0x0000000000</div>
          </div>
          <div className=' px-2 text-sm flex justify-between'>
            <div className='text-mypurple-600 font-medium flex-none'>02</div>
            <div className='flex-1 text-center'>0x0000000000</div>
          </div>
          <div className=' px-2 text-sm flex justify-between'>
            <div className='text-mypurple-600 font-medium flex-none'>03</div>
            <div className='flex-1 text-center'>0x0000000000</div>
          </div>
          <div className=' px-2 text-sm flex justify-between'>
            <div className='text-mypurple-600 font-medium flex-none'>04</div>
            <div className='flex-1 text-center'>0x0000000000</div>
          </div>
          <div className=' px-2 text-sm flex justify-between'>
            <div className='text-mypurple-600 font-medium flex-none'>05</div>
            <div className='flex-1 text-center'>0x0000000000</div>
          </div>
          <div className=' px-2 text-sm flex justify-between'>
            <div className='text-mypurple-600 font-medium flex-none'>06</div>
            <div className='flex-1 text-center'>0x0000000000</div>
          </div>
          <div className=' px-2 text-sm flex justify-between'>
            <div className='text-mypurple-600 font-medium flex-none'>07</div>
            <div className='flex-1 text-center'>0x0000000000</div>
          </div>
          <div className=' px-2 pb-2 text-sm flex justify-between'>
            <div className='text-mypurple-600 font-medium flex-none'>08</div>
            <div className='flex-1 text-center'>0x0000000000</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddressData
