import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='mt-24 px-4 sm:px-8 lg:px-16 py-24  '>
      <div className='flex flex-col items-start gap-8  max-w-7xl w-full'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-6 w-full'>
          <div className='flex flex-col items-start gap-4'>
            <h2 className='display-2--medium text-grey'>Ready to Optimize</h2>
            <h2 className='text-white display-2--medium'>Your Campaigns?</h2>
            <p className='text-white heading-5-regular leading-relaxed'>
              Join brands and agencies optimizing their ads with Adology AI
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <div className='px-4 py-3 bg-slate-50 rounded-full flex items-center gap-2 relative'>
              <h3 className='text-gray-800 text-lg heading-4-medium'>
                Request Demo
              </h3>
            </div>
          </div>
        </div>
        <span className='w-full border-t border-gray-400/50' />
        <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between items-start gap-8 w-full'>
          <div className='flex justify-center items-center gap-3'>
            <Image src='/Logo.svg' width={32} height={32} alt='logo' />
            <span className='text-white jakarta'>ADOLOGY AI</span>
          </div>
          <div className='flex flex-col sm:flex-row gap-6 lg:gap-12'>
            <div className='flex flex-col items-start gap-2'>
              <span className='text-white text-base body-1-medium'>
                Resources
              </span>
              <span className="text-white text-base body-1-medium'">Blog</span>
              <span className="text-white text-base body-1-medium'">
                Case Studies
              </span>
              <span className="text-white text-base body-1-medium'">
                Pricing
              </span>
            </div>
            <div className='flex flex-col items-start gap-2'>
              <span className="text-white text-base body-1-medium'">
                Company
              </span>
              <span className="text-white text-base body-1-medium'">About</span>
              <span className="text-white text-base body-1-medium'">
                Contact Support
              </span>
            </div>
            <div className='flex flex-col items-start gap-2'>
              <div className="text-white text-base body-1-medium'">Contact</div>
              <span className="text-white text-base body-1-medium'">
                james@getadology.com
              </span>
            </div>
          </div>
        </div>
        <div className='w-full border-t border-gray-400/50' />
      </div>
      <div className='w-full max-w-7xl rounded-2xl backdrop-blur-[50px] flex flex-col sm:flex-row justify-between items-center gap-4 p-4 '>
        <div className="text-white text-base body-1-medium'">
          © 2025 Adology. All rights reserved.
        </div>
        <div className='flex gap-6'>
          <div className="text-white text-base body-1-medium'">
            Privacy Policy
          </div>
          <div className="text-white text-base body-1-medium'">
            Term of Service
          </div>
        </div>
      </div>
    </footer>
  );
}
