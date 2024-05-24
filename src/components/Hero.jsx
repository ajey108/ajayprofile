import React from 'react';
import profilepic from '../assets/profilepic.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14'>
                <div className='max-w-[800px]'>
                    <p className='text-gray-200 md:text-6xl text-3xl tracking-tight'>
                        HEY, I AM <br />
                        <span className='text-blue-400'> Ajay Kumar</span> <br />
                        <TypeAnimation
                            sequence={[
                                "Fullstack",
                                2000,
                                "Webapp",
                                1000,
                                "Developer",
                                1000
                            ]}
                            speed={50}
                            repeat={Infinity}
                            className='font-bold italic'
                        />
                    </p>

                    <h2 className='text-gray-300'>with 2+ years of experience</h2>

                    <div className='flex flex-row gap-4 mb-4 mt-2 md:mb-0'>
                        <button className='transform transition-transform hover:scale-105 hover:shadow-lg cursor-pointer font-bold text-gray-200
                                w-1/2 mt-6 p-2 bg-gradient-to-r from-[#4068bd] via-[#1b7ee0] to-[#0aa0ff] rounded-xl'>
                            Download CV
                        </button>

                        <button className='transform transition-transform hover:scale-105 hover:shadow-lg cursor-pointer font-bold text-gray-200
                                w-1/2 mt-6 p-2 bg-gradient-to-r from-[#322e2e] via-[#010a12] to-[#000000] rounded-xl'>
                            Contact Me
                        </button>
                    </div>
                </div>

                <img src={profilepic} alt='Profile Picture of Ajay Kumar' className='w-[250px] md:w-[400px]' />
            </div>
        </div>
    );
}

export default Hero;
