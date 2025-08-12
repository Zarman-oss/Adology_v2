'use client';

import { useState } from 'react';
import { LucideChevronDown, LucideMenu, LucideX } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className='text-white mx-auto flex p-4 items-center justify-between sm:px-6 lg:px-8'>
      {/* Logo */}
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

      {/* Mobile Menu Button */}
      <button
        className='sm:hidden cursor-pointer'
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        {mobileMenuOpen ? <LucideX size={24} /> : <LucideMenu size={24} />}
      </button>

      {/* Desktop Menu */}
      <ul className='body-1--medium hidden sm:flex justify-between items-center gap-8 cursor-pointer relative'>
        {/* Resources Dropdown */}
        <li className='relative'>
          <div
            className='flex items-center gap-1'
            onClick={() => toggleDropdown('resources')}
          >
            <span>Resources</span>
            <LucideChevronDown
              size={18}
              color='silver'
              className={`transition-transform duration-300 ${
                openDropdown === 'resources' ? 'rotate-180' : ''
              }`}
            />
          </div>
          <AnimatePresence>
            {openDropdown === 'resources' && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className='absolute top-full left-0 mt-2 z-50'
              >
                <div className='bg-[#111] p-4 rounded-xl border border-neutral-800 min-w-[200px] shadow-xl'>
                  <Link
                    href='/blog'
                    className='flex items-center gap-4 hover:bg-neutral-800 p-3 rounded-lg transition'
                  >
                    <Image
                      src='/svg/Blog.svg'
                      width={24}
                      height={24}
                      alt='blog'
                    />
                    <span className='text-white body-1-medium'>Blog</span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>

        {/* Company Dropdown */}
        <li className='relative'>
          <div
            className='flex items-center gap-1'
            onClick={() => toggleDropdown('company')}
          >
            <span>Company</span>
            <LucideChevronDown
              size={18}
              color='silver'
              className={`transition-transform duration-300 ${
                openDropdown === 'company' ? 'rotate-180' : ''
              }`}
            />
          </div>
          <AnimatePresence>
            {openDropdown === 'company' && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className='absolute top-full left-0 mt-2 z-50'
              >
                <div className='bg-[#111] p-4 rounded-xl border border-neutral-800 min-w-[200px] shadow-xl'>
                  <Link
                    href='/about'
                    className='flex items-center gap-4 hover:bg-neutral-800 p-3 rounded-lg transition'
                  >
                    <Image
                      src='/svg/about-us.svg'
                      width={24}
                      height={24}
                      alt='about'
                    />
                    <span className='text-white body-1-medium'>About us</span>
                  </Link>
                  <Link
                    href='/contact'
                    className='flex items-center gap-4 hover:bg-neutral-800 p-3 rounded-lg transition'
                  >
                    <Image
                      src='/svg/contact-support.svg'
                      width={24}
                      height={24}
                      alt='contact'
                    />
                    <span className='text-white body-1-medium'>Contact Us</span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>

        <li>FAQ</li>
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className='sm:hidden absolute top-[64px] left-0 w-full bg-[#111] border-t border-neutral-800 p-4 z-50'
          >
            <ul className='flex flex-col gap-4'>
              {/* Mobile Resources */}
              <li>
                <button
                  className='flex items-center justify-between w-full'
                  onClick={() => toggleDropdown('resources')}
                >
                  Resources
                  <LucideChevronDown
                    size={18}
                    color='silver'
                    className={`transition-transform duration-300 ${
                      openDropdown === 'resources' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === 'resources' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className='mt-2 space-y-2'
                    >
                      <div className=' flex items-center justify-start gap-2 '>
                        <Image
                          src='/svg/Blog.svg'
                          width={24}
                          height={24}
                          alt='about'
                        />
                        <Link href='/blog' className='block hover:underline'>
                          Blog
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Mobile Company */}
              <li>
                <button
                  className='flex items-center justify-between w-full'
                  onClick={() => toggleDropdown('company')}
                >
                  Company
                  <LucideChevronDown
                    size={18}
                    color='silver'
                    className={`transition-transform duration-300 ${
                      openDropdown === 'company' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === 'company' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className='mt-3 space-y-4'
                    >
                      <div className=' flex items-center justify-start gap-2'>
                        <Image
                          src='/svg/about-us.svg'
                          width={24}
                          height={24}
                          alt='about'
                        />
                        <Link href='/about' className='block hover:underline'>
                          About Us
                        </Link>
                      </div>
                      <div className='flex items-center justify-start gap-4'>
                        <Image
                          src='/svg/contact-support.svg'
                          width={24}
                          height={24}
                          alt='about'
                        />
                        <Link href='/contact' className='block hover:underline'>
                          Contact Us
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link href='/faq' className='hover:underline'>
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
