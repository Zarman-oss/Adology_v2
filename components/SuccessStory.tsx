import SuccessStoryCard from '@/components/ui/cards/SuccessStoryCard';

export default function SuccessStory() {
  return (
    <section className='section-container mt-24'>
      <h3 className='body-1--regular text-grey text-center'>Success Story</h3>
      <p className='heading-1--semibold text-white text-center mt-6'>
        Read The Reviews
      </p>
      {/* card container */}
      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 items-center mx-auto lg:grid-cols-3 max-w-6xl gap-4'>
        {/* card */}

        <SuccessStoryCard />
        <SuccessStoryCard />
        <SuccessStoryCard />
        <SuccessStoryCard />
        <SuccessStoryCard />
        <SuccessStoryCard />
      </div>
    </section>
  );
}
