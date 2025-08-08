import Image from 'next/image';

export default function ProblemSectionCard() {
  const cards = [
    'Testing hundreds of ads just to find out what works',
    'Testing hundreds of ads just to find out what works',
    'Testing hundreds of ads just to find out what works',
    'Testing hundreds of ads just to find out what works',
  ];

  return (
    <div className='max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 px-4'>
      {cards.map((text, i) => (
        <div
          key={i}
          className='rounded-lg p-6 flex flex-col items-center justify-center problem-section-card-bg  outline-2 outline-offset-[-2px] outline-zinc-900 border border-zinc-500'
        >
          <Image
            src='/svg/problem-svg.svg'
            alt='svg'
            width={300}
            height={300}
            className='w-[70%] max-w-[200px] h-auto'
          />
          <p className='mt-4 heading-6--medium text-white text-center leading-snug'>
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}
