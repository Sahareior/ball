"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Image from 'next/image';

const clients = [
    {
        name: "Client 1",
        testimonial: "This is an amazing service! It exceeded all my expectations.",
       
    },
    {
        name: "Client 2",
        testimonial: "Highly recommended! Professional and efficient.",
      
    },
    {
        name: "Client 3",
        testimonial: "Fantastic experience. I will definitely be coming back.",
       
    },
    {
        name: "Client 4",
        testimonial: "Great value for money and exceptional customer service.",
       
    }
];

const Testimonials = () => {
    return (
        <div className="testimonials-container px-4 md:px-10 py-8">
            <div className="text-white text-center md:mt-8 md:mb-8">
                <h2 className='text-4xl md:text-4xl text-yellow-400 font-bold'>What Our Clients Say</h2>
                <p className='font-bold mt-3'>Heres how our clients feel about our services.</p>
            </div>
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className='-mt-24'
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
            >
                {clients.map((data, index) => (
                    <SwiperSlide key={index} className="testimonial-slide px-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <div className="flex items-center mb-4">
                          
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{data.name}</h3>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">{data.testimonial}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
