import { bulletPoints } from '@/data/bulletPoints';
import Image from 'next/image';
export default function TeamCardBullet() {
  return (
    <div className='mt-8'>
      {bulletPoints.map((text, index) => (
        <div key={index} className='flex gap-2 items-start justify-center py-4'>
          <Image
            src='/svg/green-check.svg'
            width={32}
            height={32}
            alt='checkbox'
          />
          <p className='body-1 text-grey'>{text}</p>
        </div>
      ))}
    </div>
  );
}
