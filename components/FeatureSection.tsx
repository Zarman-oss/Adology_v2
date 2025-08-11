export default function FeatureSection() {
  return (
    <section className='section-container mt-24'>
      <h3 className='body-1--regular text-grey text-center'>Features</h3>
      <h2 className='heading-1--semibold text-white text-center mt-6'>
        Results That Matter
      </h2>
      {/* fonts */}

      <div className='mt-14 flex justify-center items-center flex-wrap px-8 mx-auto gap-28'>
        <div className='flex flex-col items-center'>
          <h3 className='manrope-xl text-white'>80%</h3>
          <p className='body-1 text-white mt-6'>Faster Creative Analysis</p>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='manrope-xl text-white'>30%</h3>
          <p className='body-1 text-white mt-6'>Faster Creative Analysis</p>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='manrope-xl text-white'>40%</h3>
          <p className='body-1 text-white mt-6'>Faster Creative Analysis</p>
        </div>
      </div>
    </section>
  );
}
