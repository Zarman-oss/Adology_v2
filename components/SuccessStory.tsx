export default function SuccessStory() {
  return (
    <section className='section-container mt-24'>
      <h3 className='body-1--regular text-grey text-center'>Success Story</h3>
      <p className='heading-1--semibold text-white text-center'>
        Read The Reviews
      </p>
      {/* cards */}
      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 items-center mx-auto lg:grid-cols-3 max-w-6xl gap-3'>
        <div className='bg-pink-600 h-56'>Card</div>
        <div className='bg-pink-600 h-56'>Card</div>
        <div className='bg-pink-600 h-56'>Card</div>
        <div className='bg-pink-600 h-56'>Card</div>
        <div className='bg-pink-600 h-56'>Card</div>
        <div className='bg-pink-600 h-56'>Card</div>
      </div>
    </section>
  );
}
