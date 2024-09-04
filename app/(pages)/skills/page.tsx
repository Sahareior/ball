import React from 'react';
import './skills.css';

interface Skill {
    name: string;
    percentage: number;
}

const skillsData: Skill[] = [
    { name: 'Next Js', percentage: 70 },
    { name: 'React Js', percentage: 80 },
    { name: 'Node Js', percentage: 60 },
    { name: 'Express Js', percentage: 50 },
    { name: 'MongoDB', percentage: 65 },
];

const Skills = () => {
    return (
        <div className='flex flex-col lg:flex-row bg-slate-800 h-full items-center justify-around '>
            <div className='text-white text-center lg:text-left'>
                <h2 className='text-xl md:text-3xl font-bold mb-4'>
                    Product Designer & <br /> 
                    <span className='text-emerald-400'>Digital Creative Director</span>
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-6 md:mt-12'>
                    <div className='w-full md:w-64'>
                        <h3 className='text-base md:text-lg font-semibold text-gray-200'>Web Development</h3>
                        <p className='text-gray-400 text-sm'>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit.</p>
                    </div>
                    <div className='w-full md:w-64'>
                        <h3 className='text-base md:text-lg font-semibold text-gray-200'>SEO</h3>
                        <p className='text-gray-400 text-sm'>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit.</p>
                    </div>
                    <div className='w-full md:w-64'>
                        <h3 className='text-base md:text-lg font-semibold text-gray-200'>Social Media Marketing</h3>
                        <p className='text-gray-400 text-sm'>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit.</p>
                    </div>
                    <div className='w-full md:w-64'>
                        <h3 className='text-base md:text-lg font-semibold text-gray-200'>Web Design</h3>
                        <p className='text-gray-400 text-sm'>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit.</p>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-[400px] text-white md:mt-8 lg:mt-0'>
                <h2 className='font-bold text-2xl md:text-3xl text-center mb-4'>
                    <span className='text-yellow-400'>3+</span> <br /> Years Experience
                </h2>
                <div className='flex flex-col px-8'>
                    {skillsData.map((skill, index) => (
                        <div key={index} className='skill-lockup flex items-center mb-2'>
                            <span className='skill-name text-sm md:text-lg font-semibold mr-2 md:mr-4'>{skill.name}</span>
                            <span className='skill-status text-gray-400 text-sm md:text-base mr-2 md:mr-4'>{skill.percentage}%</span>
                            <span className='skill-bar flex-1 bg-gray-600 rounded-full h-2'>
                                <span className='skill-level h-full rounded-full' style={{ width: `${skill.percentage}%`, backgroundColor: '#c6a60e' }}></span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
