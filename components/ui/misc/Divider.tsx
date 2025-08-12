import { LucideSparkles } from 'lucide-react';

export default function Divider() {
  return (
    <div className='flex items-center gap-3 w-full'>
      <div className='flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/40'></div>
      <LucideSparkles className='w-5 h-5 text-white/60' />
      <div className='flex-1 h-px bg-gradient-to-r from-white/40 to-transparent'></div>
    </div>
  );
}
