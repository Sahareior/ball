"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import './Main.css';

import { Pagination, Mousewheel } from 'swiper/modules';
import Hero from '../Hero';
import SlideTransition from ''; // Import the transition component
import PageTransition from './PageTransition';
import Zero from '@/app/(pages)/hero/page';
import Skills from '@/app/(pages)/skills/page';

import Projects from '@/app/(pages)/projects/page';
import Testimonials from '@/app/(pages)/testimonials/page';
import Contact from '@/app/(pages)/contact/page';
import Timeline from '@/app/(pages)/timeline/page';

export default function Main() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      direction={'vertical'}
      pagination={{ clickable: true }}
      mousewheel={true}
      modules={[Pagination, Mousewheel]}
      className="mySwiper"
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      <SwiperSlide>
        <PageTransition key={activeIndex}>
          <Zero />
        </PageTransition>
      </SwiperSlide>
      <SwiperSlide>
        <PageTransition key={activeIndex + 1}>
          <Skills />
        </PageTransition>
      </SwiperSlide>
      <SwiperSlide>
        <PageTransition key={activeIndex + 1}>
        <Timeline />
        </PageTransition>
      </SwiperSlide>
      <SwiperSlide>
        <PageTransition key={activeIndex + 1}>
        <Projects />
        </PageTransition>
      </SwiperSlide>
      <SwiperSlide>
        <PageTransition key={activeIndex + 1}>
        <Testimonials />
        </PageTransition>
      </SwiperSlide>
      <SwiperSlide>
        <PageTransition key={activeIndex + 1}>
        <Contact />
        </PageTransition>
      </SwiperSlide>
    </Swiper>
  );
}
