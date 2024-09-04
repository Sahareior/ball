import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Image from 'next/image';
import './styels.css';

const clients = [
    {
        name: "Client 1",
        testimonial: "This is an amazing service! It exceeded all my expectations.",
        image: "https://img.freepik.com/premium-photo/man-with-glasses-ware-sweater-with-his-arms-crossed_862994-608280.jpg?w=740"
    },
    {
        name: "Client 2",
        testimonial: "Highly recommended! Professional and efficient.",
        image: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?t=st=1725367102~exp=1725370702~hmac=506a460567fb45dd46c8dab53f2306f0842a1e4c5b270c41e7d9d5673cdb96da&w=740"
    },
    {
        name: "Client 3",
        testimonial: "Fantastic experience. I will definitely be coming back.",
        image: "https://img.freepik.com/free-photo/image-young-caucasian-woman-with-curly-dark-hair-stands-red-t-shirt-with-happy-relaxed-smile-hold-hands-jeans-isolated-white-background_176420-46715.jpg?t=st=1725367439~exp=1725371039~hmac=37bc4f72e464dca6ce60ef7235229ff56cff07f7b956ad31603a8d7cbc8752df&w=740"
    },
    {
        name: "Client 4",
        testimonial: "Great value for money and exceptional customer service.",
        image: "https://img.freepik.com/free-photo/indoor-shot-displeased-intense-european-man-with-beard-moustache-trendy-glasses-holding-hands-crossed-chest-looking-with-await-being-offended-wanting-hear-apology_176420-22484.jpg?t=st=1725367415~exp=1725371015~hmac=f6403c76ac04d50eb0daff336f3f24a97b8b13dc66946d905339f181df603f4b&w=740"
    }
];

const Testimonials = () => {
    return (
        <div className="testimonials-container px-4 md:px-10">
            <div className="text-white text-center md:mb-8">
                <h2 className='text-4xl md:text-4xl text-yellow-400 font-bold'>What Our Clients Say</h2>
                <p className='font-bold mt-3'>Here’s how our clients feel about our services.</p>
            </div>
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className='-mt-12'
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                }}
            >
                {clients.map((data, index) => (
                    <SwiperSlide key={index} className="testimonial-slide ">
                        <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-6 md:p-10 rounded-xl shadow-lg text-center">
                            <div className="mx-auto w-20 h-20 md:w-24 md:h-24 relative rounded-full border-4 border-yellow-400 shadow-md overflow-hidden">
                            <img
                src={data.image}
                className="w-24 h-24 mx-auto rounded-full border-4 border-yellow-400 shadow-md"
              />
                            </div>
                            <p className="py-4 md:py-6 text-base md:text-xl font-semibold text-gray-300">
                                {data.testimonial}
                            </p>
                            <h3 className="text-lg font-bold text-white">{data.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
