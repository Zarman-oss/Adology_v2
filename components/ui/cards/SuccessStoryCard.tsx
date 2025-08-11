import Image from 'next/image';

export default function SuccessStoryCard() {
  return (
    <div className=' rounded-lg outline-2 outline-offset-[-2px] outline-zinc-900  p-8'>
      <Image src='/svg/pch-logo.svg' alt='logo' height={40} width={40} />
      <h3 className='heading-5--semibold text-white mt-8'>
        Innovative Solutions!
      </h3>
      <p className='body-1 text-light-silver mt-4'>
        “Adology has transformed our approach to ad creatives. The trend
        detection and performance scoring helped us boost our ad win rate by 40%
        and scale by 5X in just three months. Highly recommend!”
      </p>

      <div className='mt-8 flex gap-2 items-center '>
        <Image
          src='/svg/photo-profile.svg'
          alt='profile'
          width={40}
          height={40}
        />
        <div className='block'>
          <h4 className='heading-6--semibold text-white'>John Andrade</h4>
          <p className='caption-2 text-light-silver'>Chief Growth Officer</p>
        </div>
      </div>
    </div>
  );
}
