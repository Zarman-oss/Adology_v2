import TeamCardContainer from '@/components/ui/cards/TeamCardContainer';
export default function WhyAdology() {
  return (
    <section className='mt-24 py-24 px-4 sm:px-6 md:px-8 bg-white '>
      <p className='body-1 text-grey text-center uppercase'>Why Adology</p>
      <h2 className='heading-1--semibold text-black text-center'>
        Solutions for Every Team
      </h2>
      <TeamCardContainer />
    </section>
  );
}
