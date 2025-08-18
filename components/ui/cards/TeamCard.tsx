import SecondaryButton from '@/components/ui/buttons/SecondaryButton';
import { LucideMegaphone } from 'lucide-react';

interface TeamCardProps {
  title: string;
  description: string;
}

export default function TeamCard({ title, description }: TeamCardProps) {
  return (
    <div className='p-8 why-adology-card-bg rounded-lg outline-1 outline-offset-[-1px] outline-neutral-200'>
      <span className='p-3 rounded-full outline-1 why-adology-card-icon outline-zinc-700 inline-flex items-center'>
        <LucideMegaphone width={32} height={32} color='white' />
      </span>
      <h3 className='heading-5--semibold text-black mt-6'>{title}</h3>
      <p className='body-1 text-grey mb-6 mt-4'>{description}</p>
      <SecondaryButton text='Request Demo' />
    </div>
  );
}
