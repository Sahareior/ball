"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Project.css';

// Import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import icons for MongoDB, Node.js, Express.js, and React
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiMongoose, SiTypescript } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Neon Net",
    description: "Neon net is an SEO agency and blogging website",
    date: "20-July",
    imageSrc: "/images/Neonnet.png",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
  },
  {
    id: 2,
    title: "Kalles Shop",
    description: "This is a Online shop",
    date: "20-July",
    imageSrc: "/images/kallesshope.png",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      {
        name:"Redux", icon: <SiRedux />
      }
    ],
  },
  {
    id: 3,
    title: "Messaging App",
    description: "This is a Messaging App",
    date: "20-July",
    imageSrc: "/images/whatsapp.png",
    technologies: [
      { name: "MongoDB", icon: <SiMongoose /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      {
        name:"Redux", icon: <SiTypescript />
      }
    ],
  },
  
];

export default function Projects() {
  return (
    <div className=''>
          <div className='flex flex-col gap-10 md:flex-row justify-between px-5 mt-16'>
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
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
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
        modules={[Pagination]}
        className="mySwiper -mt-24 px-10"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="container">
              <div className="img-container">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={550}
                  height={300}
                />
              </div>
              <ul className="social-media flex justify-center space-x-4">
                {project.technologies.map((tech, index) => (
                  <li key={index}>
                    <a href="#">
                      <p className="text-4xl flex justify-center my-auto mt-9">{tech.icon}</p>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="user-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <span>{project.date}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
