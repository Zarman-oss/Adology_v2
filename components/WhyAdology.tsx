import TeamCard from '@/components/ui/cards/TeamCard';
import TeamCardBullet from '@/components/ui/misc/TeamCardBullet';

export default function WhyAdology() {
  return (
    <section className='mt-24 px-4 sm:px-6 md:px-8 py-8 items-center gap-6 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      <TeamCard
        title='For Marketing Teams'
        description='Optimize ad spending with detailed creative analysis.'
      />
      <TeamCard
        title='For Marketing Teams'
        description='Optimize ad spending with detailed creative analysis.'
      />
      <TeamCard
        title='For Marketing Teams'
        description='Optimize ad spending with detailed creative analysis.'
      />

      <TeamCardBullet />
      <TeamCardBullet />
      <TeamCardBullet />
    </section>
  );
}
