'use client';

import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import NavigationButton from './ui/buttons/NavigationButton';
import CarouselCard from './ui/cards/CarouselCard';

export default function ModuleSectionClient() {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <>
      <div className='w-full max-w-7xl mx-auto p-4 sm:p-6'>
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
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

      {/* Custom navigation */}
      <div className='max-w-6xl flex items-center justify-center lg:justify-end gap-3 mt-4'>
        <NavigationButton
          icon={<LucideChevronLeft color='white' />}
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
        />
        <NavigationButton
          icon={<LucideChevronRight color='white' />}
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
        />
      </div>
    </>
  );
}
