import Image from 'next/image';
export default function Problems() {
  return (
    <section className='py-24'>
      <h3 className='body-1-regular text-grey text-center'>PROBLEM</h3>
      <p className='heading-1-semibold text-white text-center'>
        Why? Because fixing creative waste is hard
      </p>
      {/* cards container  */}

      <div className='max-w-6xl mx-auto w-full flex flex-wrap gap-4 items-center justify-center mt-20'>
        <div className='w-54 h-52 problem-section-card-bg'>
          1
          <Image src='/svg/problem-svg.svg' alt='svg' width={274} height={34} />
        </div>
        <div className='w-48 h-52 p-6  problem-section-card-bg'>2</div>
        <div className='w-48 h-52 p-6  problem-section-card-bg'>3</div>
        <div className='w-48 h-52 p-6  problem-section-card-bg'>4</div>
      </div>
    </section>
  );
}
