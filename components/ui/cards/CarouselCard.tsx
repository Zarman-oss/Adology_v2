import Image from 'next/image';
export default function CarouselCard() {
  return (
    <div className=' card-black p-8 rounded-md'>
      <h4 className='heading-5--medium text-white text-start'>
        Find High-Performing Ad
      </h4>
      <p className='body-1 text-light-silver text-start mt-4'>
        Find High-Performing Ad Trends with AI-driven analysis
      </p>
      <Image
        alt='logo'
        src='/svg/carousel-card-bg.svg'
        width={1200}
        height={400}
        className='mt-8'
      />
    </div>
  );
}
