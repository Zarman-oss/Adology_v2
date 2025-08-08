import ProblemSectionCard from '@/components/ui/cards/ProblemSectionCard';
export default function Problems() {
  return (
    <section className='section-container mt-24'>
      <h3 className='body-1--regular text-grey text-center'>PROBLEM</h3>
      <p className='heading-1--semibold text-white text-center'>
        Why? Because fixing creative waste is hard
      </p>
      {/* cards */}
      <ProblemSectionCard />
    </section>
  );
}
