import React, { useState } from 'react';
import { AiFillGithub } from "react-icons/ai";
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    img: project1,
    title: "Project #1",
    desc: "Movies app using React",
    link: {
      site: "https://moviewebappxy.netlify.app",
      github: "#"
    }
  },
  {
    img: project2,
    title: "Project #2",
    desc: "Pizza Website",
    link: {
      site: "https://ajey108.github.io/pizzwebsite/",
      github: "#"
    }
  },
  {
    img: project3,
    title: "Project #3",
    desc: "Random Password Generator",
    link: {
      site: "https://ajey108.github.io/RandomPassword/",
      github: "#"
    }
  },
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div className='relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row' id="Portfolio">
      <div className='glass p-6 w-full border-2 max-w-[600px]'>
        <div className='w-full h-80'>
          <img src={projects[currentProject].img} alt={`${projects[currentProject].title} screenshot`} className='w-full h-full object-cover rounded-lg mb-4' />
        </div>
        <p className='text-gray-200 my-4'>{projects[currentProject].desc}</p>
        <div className='flex space-x-4'>
          <a href={projects[currentProject].link.site} target="_blank" rel="noopener noreferrer" className='px-4 py-2 rounded-lg hover:bg-slate-700 bg-slate-600 text-gray-200 transition duration-300'>View Site</a>
          <a href={projects[currentProject].link.github} target="_blank" rel="noopener noreferrer" className='px-4 py-2 rounded-lg hover:bg-slate-700 bg-slate-600 text-gray-200 transition duration-300'><AiFillGithub /></a>
        </div>
      </div>

      <ul className='ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:mt-0 md:gap-1'>
        {projects.map((project, index) => (
          <li key={index} onClick={() => setCurrentProject(index)} className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] text-center duration-300 ${currentProject === index ? "bg-slate-900 font-bold" : ""}`}>
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
