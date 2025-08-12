import TeamCard from '@/components/ui/cards/TeamCard';
import TeamCardBullet from '@/components/ui/misc/TeamCardBullet';

export default function TeamCardContainer() {
  return (
    <div className=' items-center gap-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      <div>
        <TeamCard
          title='For Marketing Teams'
          description='Optimize ad spending with detailed creative analysis.'
        />
        <TeamCardBullet />
      </div>
      <div>
        <TeamCard
          title='For Marketing Teams'
          description='Optimize ad spending with detailed creative analysis.'
        />
        <TeamCardBullet />
      </div>
      <div>
        <TeamCard
          title='For Marketing Teams'
          description='Optimize ad spending with detailed creative analysis.'
        />
        <TeamCardBullet />
      </div>
    </div>
  );
}
