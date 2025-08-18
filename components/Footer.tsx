import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='py-16 px-4 sm:px-8 lg:px-16 bg-black'>
      <div className='max-w-7xl mx-auto space-y-12'>
        {/* Top CTA */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 items-center'>
          <div>
            <h2 className='display-2--medium text-grey'>Ready to Optimize</h2>
            <h2 className='text-white display-2--medium'>Your Campaigns?</h2>
            <p className='mt-6 text-grey heading-6'>
              Join brands and agencies optimizing their ads with Adology AI
            </p>
          </div>
          <div className='flex sm:justify-end justify-start'>
            <PrimaryButton text='Request Demo' />
          </div>
        </div>

        {/* Middle Links */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          {/* Logo */}
          <div className='flex items-center gap-3'>
            <Image src='/svg/Logo.svg' width={32} height={32} alt='logo' />
            <span className='text-white jakarta'>ADOLOGY AI</span>
          </div>
          {/* divider */}

          {/* Links */}
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8'>
            {[
              'Resources',
              'Blog',
              'Case Studies',
              'Pricing',
              'Company',
              'About',
              'Contact Support',
              'Contact',
              'james@getadology.com',
            ].map((text, idx) => (
              <Link
                key={idx}
                href='/'
                className='text-white body-1--medium hover:text-grey transition-colors'
              >
                {text}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='w-full max-w-7xl rounded-2xl backdrop-blur-[50px] flex flex-col sm:flex-row justify-between items-center gap-4 p-4'>
          <span className='text-white body-1-medium'>
            © 2025 Adology. All rights reserved.
          </span>
          <div className='flex flex-wrap justify-center gap-6'>
            <Link
              href='/'
              className='text-white body-1 hover:text-grey transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              href='/'
              className='text-white body-1 hover:text-grey transition-colors'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
