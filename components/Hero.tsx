'use client';
import Image from 'next/image';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import { motion } from 'motion/react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <section className='flex py-16 flex-col section-container items-center justify-center text-center gap-6'>
      <motion.h2
        className='display-1--semibold text-white leading-tight max-w-5xl'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
      >
        Optimize Creative. <br />
        Scale Insights. <br />
        Outperform Competitors.
      </motion.h2>

      <motion.p
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
        className='max-w-3xl leading-tight text-base heading-6-regular text-light-silver font-medium'
      >
        Adology is your AI-powered{' '}
        <span className='text-white font-semibold'>
          Co-Pilot for Creative Strategy
        </span>
        , automating research, tracking trends, and boosting ad performance with
        actionable insights
      </motion.p>

      <PrimaryButton text='Book Demo' />

      {/* feature section */}

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
        className='max-w-5xl gap-14 flex justify-center items-center flex-wrap mt-14'
      >
        <div className='w-30% flex flex-col justify-start items-center gap-6'>
          <span className='text-white display-1--semibold leading-[57.60px]'>
            20H
          </span>
          <p className='body-1-regular text-white leading-relaxed capitalize'>
            Hours a week saved
          </p>
        </div>
        <div className='w-30% flex flex-col justify-start items-center gap-6'>
          <span className='text-white display-1--semibold leading-[57.60px]'>
            +20%
          </span>
          <p className='body-1-regular text-white leading-relaxed capitalize'>
            Increase in performance
          </p>
        </div>
        <div className='w-30% flex flex-col justify-start items-center gap-6'>
          <span className='text-white display-1--semibold leading-[57.60px]'>
            5x
          </span>
          <p className='body-1-regular text-white leading-relaxed capitalize'>
            Higher ad win rate
          </p>
        </div>
      </motion.div>
      {/* Hero Image  */}
      <div className='relative'>
        {/* <Image
          src='/svg/banner-bg.svg'
          alt='hero background'
          width={1100}
          height={100}
          className=''
        /> */}
        <Image
          src='/svg/heroimage.svg'
          alt='site logo'
          width={1080}
          height={800}
          className='object-cover relative z-10'
          priority
        />
      </div>
      <p className='heading-4--semibold text-white'>
        Every year, marketing teams burn $125B on ad creatives that don’t
        convert Creative drives 47% of ad performance yet remains the least
        optimized part of the strategy.
      </p>
    </section>
  );
}
