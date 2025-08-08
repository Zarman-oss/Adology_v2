import { LucideChevronDown, LucideMenu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='text-white mx-auto flex p-4 items-center justify-between sm:px-6 lg:px-8 flex-wrap'>
      <div className='flex items-center gap-2'>
        <Image
          src='/svg/Logo.svg'
          alt='site logo'
          width={20}
          height={20}
          className='object-cover'
        />
        <span className='uppercase body-1--medium'>Adology AI</span>
      </div>
      <LucideMenu
        className='sm:hidden cursor-pointer'
        color='white'
        size={24}
      />

      <ul className='body-1--medium hidden sm:flex justify-between items-center gap-8 cursor-pointer relative'>
        {/* Resources Dropdown */}
        <li className='relative group'>
          <div className='flex items-center gap-1'>
            <span>Resources</span>
            <LucideChevronDown size={18} color='silver' />
          </div>

          {/* Dropdown content */}
          <div className='absolute top-full left-0 mt-2 hidden group-hover:block z-50'>
            <div className='bg-[#111] p-4 rounded-xl border border-neutral-800 min-w-[200px] shadow-xl'>
              <Link
                href='/blog'
                className='flex items-center gap-4 hover:bg-neutral-800 p-3 rounded-lg transition'
              >
                <Image src='/svg/Blog.svg' width={24} height={24} alt='blog' />
                <span className='text-white body-1-medium'>Blog</span>
              </Link>
            </div>
          </div>
        </li>

        <li className='relative group'>
          <div className='flex items-center gap-1'>
            <span>Company</span>
            <LucideChevronDown size={18} color='silver' />
          </div>

          {/* Dropdown content */}
          <div className='absolute top-full left-0 mt-2 hidden group-hover:block z-50'>
            <div className='bg-[#111] p-4 rounded-xl border border-neutral-800 min-w-[200px] shadow-xl'>
              <Link
                href='/blog'
                className='flex items-center gap-4 hover:bg-neutral-800 p-3 rounded-lg transition'
              >
                <Image
                  src='/svg/about-us.svg'
                  width={24}
                  height={24}
                  alt='blog'
                />
                <span className='text-white body-1-medium'>About us</span>
              </Link>
              <Link
                href='/blog'
                className='flex items-center gap-4 hover:bg-neutral-800 p-3 rounded-lg transition'
              >
                <Image
                  src='/svg/contact-support.svg'
                  width={24}
                  height={24}
                  alt='blog'
                />
                <span className='text-white body-1-medium'>Contact Us</span>
              </Link>
            </div>
          </div>
        </li>
        <li>FAQ</li>
      </ul>
    </nav>
  );
}
