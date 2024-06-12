import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
      <div className='space-y-4'>
        <h3 className='text-2xl text-gray-200 font-semibold'>Ajay</h3>
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
          <a href='https://github.com/yourusername' aria-label='Github Profile' className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
            <FaGithub />
          </a>
          <a href='https://linkedin.com/in/yourusername' aria-label='LinkedIn Profile' className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <p className='text-gray-400'> &copy; 2024 Ajay Kumar</p>
    </div>
  );
}

export default Footer;
