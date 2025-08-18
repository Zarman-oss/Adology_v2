'use client';

import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import NavigationButton from './ui/buttons/NavigationButton';
import CarouselCard from './ui/cards/CarouselCard';

export default function ModuleSectionClient() {
  return (
    <>
      <div className='w-full max-w-7xl mx-auto p-4 sm:p-6'>
        <Swiper
          modules={[Pagination]}
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
      <div className='max-w-6xl flex items-center justify-center lg:justify-center gap-3'>
        <NavigationButton icon={<LucideChevronLeft color='white' />} />
        <NavigationButton icon={<LucideChevronRight color='white' />} />
      </div>
    </>
  );
}
