'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import NavigationButton from './ui/buttons/NavigationButton';
import CarouselCard from './ui/cards/CarouselCard';
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';
export default function ModuleSection() {
  return (
    <section className='section-container mt-24'>
      <h3 className='body-1--regular text-grey text-center'>Modules</h3>
      <h2 className='heading-1--semibold text-white text-center mt-6'>
        Get Days of Research in Minutes
      </h2>
      <p className='text-white heading-6 text-center mt-6'>
        Adology’s AI analyzes and labels your creative data instantly,
        uncovering insights that typically take weeks.
      </p>

      {/* cards */}

      <div className='w-full max-w-7xl mx-auto p-4 sm:p-6'>
        <Swiper
          modules={Pagination}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <CarouselCard />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Navigation buttons */}
      <div className='max-w-6xl flex items-center justify-center lg:justify- gap-3'>
        <NavigationButton icon={<LucideChevronLeft color='white' />} />
        <NavigationButton icon={<LucideChevronRight color='white' />} />
      </div>
    </section>
  );
}
