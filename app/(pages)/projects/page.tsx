import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Projects.css';

const projectData = [
    {
        title: 'Kalles Shop',
        description: 'An online store with a wide range of products and integrated payment options.',
        skills: ['React', 'Redux', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Firebase'],
        image: '/images/kallesshope.png',
        url: "https://kallesshop.netlify.app/"
    },
    {
        title: 'Neon Net',
        description: 'A Digital agency home website and blog.',
        skills: ['React', 'Firebase', 'Daisy ui', 'Express.js','Node Js'],
        image: '/images/Neonnet.png',
        url: "https://neonnet.netlify.app/"
    },
    {
        title: 'Project Management Tool',
        description: 'A web app to help organize communication between IT and Real Estate during new store openings.',
        skills: ['React', 'Redux', 'ES6', 'MongoDB', 'Semantic UI'],
        image: '/images/whatsapp.png',
    },
];

const Projects = () => {
    return (
        <div className="projects-container px-10">
            <div className='flex justify-between px-10 mt-5'>
                <div>
                    <h2 className='text-4xl font-bold text-yellow-400'>
                        My Recent Work
                    </h2>
                    <p className='text-white font-bold mt-2'>I believe in art and that’s my passion</p>
                </div>
                <div>
                   <h2 className='text-4xl font-bold text-yellow-400'>10+</h2>
                   <p className='text-white font-bold mt-2'>Projects</p>
               </div>
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                loop={true}
                className='-mt-14 px-8'
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {projectData.map((project, index) => (
                    <SwiperSlide key={index}>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <div className='project-box'>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="responsive"
                                    width={375}
                                    height={400}
                                />
                                <div className='project-card-footer'>
                                    <p className='title'>{project.title}</p>
                                    <p className='description'>{project.description}</p>
                                    <div className='skill-container'>
                                        {project.skills.map((skill, idx) => (
                                            <div key={idx} className='skill'>{skill}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Projects;
