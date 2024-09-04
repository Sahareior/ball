import React from 'react';
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
        image: './images/kallesshope.png',
        url: "https://kallesshop.netlify.app/"
    },
    {
        title: 'Neon Net',
        description: 'A Digital agency home website and blog.',
        skills: ['React', 'Firebase', 'Daisy ui', 'Express.js','Node Js'],
        image: './images/Neonnet.png',
        url: "https://neonnet.netlify.app/"
    },
    {
        title: 'Project Management Tool',
        description: 'A web app to help organize communication between IT and Real Estate during new store openings.',
        skills: ['React', 'Redux', 'ES6', 'MongoDB', 'Semantic UI'],
        image: 'https://img.freepik.com/premium-photo/flower-blooms-against-gradient_1230681-8477.jpg?w=360',
    },
    {
        title: 'Fitness Tracking App',
        description: 'An app to track fitness goals, monitor progress, and provide personalized workout plans.',
        skills: ['React Native', 'Redux', 'Node.js', 'MongoDB', 'Express.js'],
        image: 'https://img.freepik.com/free-photo/flower-against-gradient-background_23-2149156255.jpg?w=360',
    },
    {
        title: 'Blogging Platform',
        description: 'A platform where users can create, edit, and share blog posts with a global audience.',
        skills: ['Next.js', 'Tailwind CSS', 'GraphQL', 'Prisma'],
        image: 'https://img.freepik.com/free-photo/blooming-flower-against-gradient-background_23-2149156257.jpg?w=360',
    },
];

const Projects = () => {
    return (
        <div className="projects-container px-10">
            <div className='flex justify-between px-10 mt-5'>
                <div className=''>
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
                                <div className='skill-container'>
                                    {project.skills.map((skill, idx) => (
                                        <div key={idx} className='skill p-6'>{skill}</div>
                                    ))}
                                </div>
                                <img src={project.image} alt={project.title} className='project-image'/>
                                <div className='project-card-footer'>
                                    <p className='font-bold'>{project.title}</p>
                                    <p className='font-bold'>{project.description}</p>
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
