import React from 'react';
import Image from 'next/image';
import './zero.css';
import FloatingParticles from '@/app/compo/FloatingParticles/FloatingParticles';

const Zero = () => {
    return (
        <div className="bg-gray-900 h-full w-full flex flex-col justify-center items-center text-white p-8">
            <FloatingParticles />
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="relative w-60 h-60 md:w-96 md:h-96">
                    <Image 
                        className="rounded-full object-cover"
                        src="/images/profile.jpg" 
                        alt="Sahareior Sijan"
                        layout="fill" 
                        objectFit="cover" 
                        sizes="(max-width: 768px) 15rem, (min-width: 768px) 24rem" 
                    />
                </div>
                <div className="max-w-lg text-center lg:text-left">
                    <h1 className="text-4xl font-bold mb-4">
                        <span className='text-red-400'>Hello, I&apos;m</span> <br />
                        Sahareior Sijan
                    </h1>
                    <p className="text-lg leading-relaxed">
                        I&aposm Sahareior Sijan, a passionate digital marketer with extensive experience in helping businesses 
                        grow their online presence. With a deep understanding of SEO, content strategy, and social media marketing, 
                        I craft tailored solutions that drive results. My mission is to help brands connect with their audience 
                        and achieve their marketing goals through innovative strategies and data-driven insights.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Zero;
