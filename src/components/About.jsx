import React from 'react'
import { RiTailwindCssFill } from "react-icons/ri";
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'


import {
  DiJavascript,
  DiReact,
  DiNodejsSmall,

  DiHtml5,
  DiCss3,
  DiSass,
  DiMongodb,
  DiGithubBadge,
  DiJavascript1,
  DiBootstrap

} from 'react-icons/di'

const About = () => {
  return (
    <div className='max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center' id='About'>
      <div className=' md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex' >
        <DiHtml5 className='text-orange-600' />
        <DiCss3 className='text-blue-600' />
        <DiSass className='text-pink-600' />
        <DiBootstrap className='text-purple-600' />
        <RiTailwindCssFill className='text-blue-500' />
        <DiJavascript1 className='text-yellow-500' />
        <DiReact className='text-blue-500' />
        <DiNodejsSmall className='text-green-500' />
        <DiMongodb className='text-green-600' />
        <DiGithubBadge className='text-gray-300' />

      </div>

      <div className='relative group'>
        <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-
              teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100
              transition duration-300'>

        </div>

        <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
          <img src={project1} alt='project 1' className='rounded-lg md:max-w-[500px]' />
        </div>
      </div>

      <div className='p-6'>
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>Skills</h2>
        <p className='text-gray-300 mb-4'>

        I am a passionate MERN Fullstack Developer skilled in MongoDB, Express.js, React.js, and Node.js. I have experience in building RESTful APIs, dynamic UIs, and scalable applications. Proficient in JavaScript (ES6+), HTML, CSS, and Git, I am eager to apply my skills to create robust web applications and continuously grow in the field.
        </p>

        <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>


          <DiHtml5 className='text-orange-600' />
          <DiCss3 className='text-blue-600' />
          <DiSass className='text-pink-600' />
          <DiBootstrap className='text-purple-600' />
          <RiTailwindCssFill className='text-blue-500' />
          <DiJavascript1 className='text-yellow-500' />
          <DiReact className='text-blue-500' />
          <DiNodejsSmall className='text-green-500' />
          <DiMongodb className='text-green-600' />
          <DiGithubBadge className='text-gray-300' />
        </div>
      </div>



      <div className='p-6'>
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>Front-End</h2>
        <p className='text-gray-300 mb-4'>
        I specialize in frontend development using ReactJs, Javascript, Tailwind, Bootstrap, and Sass. With these tools, I create dynamic, responsive, and visually appealing user interfaces. My expertise ensures efficient and maintainable code, providing excellent user experiences.
        </p>

        <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>


          <DiHtml5 className='text-orange-600' />
          <DiCss3 className='text-blue-600' />
          <DiSass className='text-pink-600' />
          <DiBootstrap className='text-purple-600' />
          <RiTailwindCssFill className='text-blue-500' />
          <DiJavascript1 className='text-yellow-500' />
          <DiReact className='text-blue-500' />
        </div>
      </div>





      <div className='relative group'>
        <div className='w-full h-full absolute -inset-1 
        bg-gradient-to-r from-
              teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100
              transition duration-300'>

        </div>

        <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
          <img src={project2} alt='project 2' className='rounded-lg md:max-w-[500px]' />
        </div>
      </div>



      <div className='relative group'>
        <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-
              teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100
              transition duration-300'>

        </div>

        <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
          <img src={project1} alt='project 1' className='rounded-lg md:max-w-[500px]' />
        </div>
      </div>








      <div className='p-6'>
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>FullstackExperience</h2>
        <p className='text-gray-300 mb-4'>
        As a  MERN Stack developer with hands-on experience in MongoDB, Express.js, React.js, and Node.js. I create responsive UIs, develop RESTful APIs, and manage databases, building end-to-end web applications.
        </p>

        <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>


          <DiHtml5 className='text-orange-600' />
          <DiCss3 className='text-blue-600' />
          <DiSass className='text-pink-600' />
          <DiBootstrap className='text-purple-600' />
          <RiTailwindCssFill className='text-blue-500' />
          <DiJavascript1 className='text-yellow-500' />
          <DiReact className='text-blue-500' />
          <DiNodejsSmall className='text-green-500' />
          <DiMongodb className='text-green-600' />
          <DiGithubBadge className='text-gray-300' />
        </div>
      </div>





    </div>


  )
}

export default About