const AddressData = ({ data }) => {
  // Ensure data is always an array, defaulting to an empty array if it's null or undefined
  const safeData = Array.isArray(data) ? data.slice(0, 8) : [];

  return (
    <section className='w-80 mb-20'>
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
          {safeData.length > 0 ? (
            safeData.map((item, index) => (
              <div key={index} className={`px-2 text-sm flex justify-between ${index === 0 ? "pt-2" : ""} ${index === 7 ? "pb-2" : ""}`}>
                <div className='text-mypurple-600 font-medium flex-none'>{String(index + 1).padStart(2, '0')}</div>
                <div className='flex-1 text-center'>{item?.address || "N/A"}</div>
              </div>
            ))
          ) : (
            <p className='text-white p-2 text-center'>No address data available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AddressData;
