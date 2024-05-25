import React from 'react';
import profilepic from '../assets/profilepic.png';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className="text-white py-8">
            <div className='grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14 px-4'>
                <div className='max-w-[800px] text-center md:text-left'>
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

                    <h2 className='text-gray-300 md:text-2xl text-xl mt-4'>with 2+ years of experience</h2>

                    <div className='flex flex-col md:flex-row gap-4 mb-4 mt-6 md:mt-8 md:mb-0'>
                        <a
                            href="/resume.pdf" // Ensure this matches the name of your resume file in the public folder
                            download="Ajay_Kumar_Resume.pdf" // Specify the name for the downloaded file
                            className='transform transition-transform hover:scale-105 hover:shadow-lg cursor-pointer font-bold text-gray-200
                                w-full md:w-1/2 p-3 bg-gradient-to-r from-[#4068bd] via-[#1b7ee0] to-[#0aa0ff] rounded-xl text-center'
                        >
                            Download CV
                        </a>

                        <Link
                            to="contact" // ID of the contact section
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className='transform transition-transform hover:scale-105 hover:shadow-lg cursor-pointer font-bold text-gray-200
                                w-full md:w-1/2 p-3 bg-gradient-to-r from-[#322e2e] via-[#010a12] to-[#000000] rounded-xl text-center'
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>

                <img src={profilepic} alt='Profile Picture of Ajay Kumar' className='w-[200px] md:w-[400px] rounded-full shadow-lg' />
            </div>

            <hr />
        </div>

        
    );
}

export default Hero;
