"use client"

import React, { useState } from 'react';
// @ts-ignore
import HorizontalTimeline from 'react-horizontal-timeline';


import { motion } from 'framer-motion';
import './Timeline.css';

const VALUES = [
    '2008-06-01',
    '2010-06-01',
    '2013-06-01',
    '2015-03-01',
    '2019-01-01',
    '2019-06-17',
    '2019-08-01',
];

const Timeline = () => {
    const [value, setValue] = useState(0);

    const renderContent = () => {
        switch (value) {
            case 0:
                return (
                    <div className="w-full md:w-[700px] lg:w-[900px] bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Event on 2008</h3>
                        <h4 className="text-lg font-semibold text-white mb-6">I HAD GRADUATED FROM COLLEGE</h4>
                        <p className="text-white">In June 2010, another notable event took place. It might be a major career shift, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque labore doloremque error temporibus numquam blanditiis beatae at quo eveniet. a new venture, or an award received.</p>
                    </div>
                );
            case 1:
                return (
                    <div className="w-full md:w-[700px] lg:w-[900px] bg-gray-800 p-4 md:p-6 rounded-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Event on June 1, 2010</h3>
                        <h4 className="text-lg font-semibold text-white mb-6">I TOOK RESPONSIBILITY IN LIFE</h4>
                        <p className="text-white">In June 2010, another notable event took place. It might be a major career shift, a new venture, or an award received.</p>
                    </div>
                );
            case 2:
                return (
                    <div className="w-full md:w-[700px] lg:w-[900px] bg-gray-800 p-4 md:p-6 rounded-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Event on June 1, 2013</h3>
                        <h4 className="text-lg font-semibold text-white mb-6">STARTED WORKING WITH COMPANY</h4>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet vel suscipit fugit officiis, eum, totam debitis fuga ex hic quis. Repellat maxime explicabo inventore, iure voluptate nisi esse maiores vel nostrum recusandae modi, sint velit? Minus assumenda dolorum quod ratione repellendus debitis neque non, eveniet nisi voluptate nemo qui, voluptatum, illo soluta maiores quis nihil eligendi numquam provident quae.</p>
                    </div>
                );
            case 3:
                return (
                    <div className="w-full md:w-[700px] lg:w-[900px] bg-gray-800 p-4 md:p-6 rounded-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Event on March 1, 2015</h3>
                        <p className="text-white">This event in March 2015 was pivotal. It could be a major project completion, an important meeting, or a career highlight.</p>
                    </div>
                );
            case 4:
                return (
                    <div className="w-full md:w-[700px] lg:w-[900px] bg-gray-800 p-4 md:p-6 rounded-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Event on January 1, 2019</h3>
                        <p className="text-white">January 1, 2019, brought about a new change or achievement. This could be a new position, a significant partnership, or a personal accomplishment.</p>
                    </div>
                );
            case 5:
                return (
                    <div className="w-full md:w-[700px] lg:w-[900px] bg-gray-800 p-4 md:p-6 rounded-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Event on June 17, 2019</h3>
                        <p className="text-white">In June 2019, something noteworthy happened. This could be a major event in your career or a key milestone in a project.</p>
                    </div>
                );
            case 6:
                return (
                    <div className="w-full md:w-[700px] lg:w-[900px] bg-gray-800 p-4 md:p-6 rounded-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Event on August 1, 2019</h3>
                        <p className="text-white">August 2019 was significant due to this event. It could be the culmination of a project, a new beginning, or a major achievement.</p>
                    </div>
                );
            default:
                return <div className="text-white">Select a timeline date to see more details.</div>;
        }
    };



    return (
        <div className="timeline-container bg-slate-900 text-white px-4 md:px-8 py-6">
            <div className='mt-3'>
                <h2 className="text-2xl md:text-4xl text-yellow-400 font-bold text-center">My Career History Timeline</h2>
                <div className="timeline-content-container mt-8">
                    <div className="timeline-box py-6 md:py-10">
                    <HorizontalTimeline
    index={value}
    indexClick={(index: number) => setValue(index)}
    values={VALUES}
/>

                    </div>
                    <motion.div 
                        className="timeline-text md:mt-0 mt-10"
                        key={value}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {renderContent()}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default Timeline;