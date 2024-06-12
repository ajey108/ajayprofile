import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='px-6 max-w-[1000px] mx-auto glass grid md:grid-cols-2 place-items-center' id="contact">
      <ul className='my-auto pr-6'>
        <li className='flex'>
          <a href='https://www.linkedin.com/in/ajay-kumar-016b56242/' target='_blank' rel='noopener noreferrer'className="text-gray-700 hover:text-gray-800 transition-colors duration-400">
            <AiFillLinkedin className='w-[70px] h-auto text-gray-300' />
          </a>
          <div className='m-5'>
            <h3 className='text-lg font-bold text-gray-200'>Contact</h3>
            <p className="text-gray-400">Mobile: +91 6397 5696 98</p>
            <p className="text-gray-400">Email: ajayxa1@gmail.com</p>
          </div>
        </li>
        <li className='flex'>
          <a href='https://github.com/ajey108' target='_blank' rel='noopener noreferrer'>
            <AiOutlineGithub className='w-[80px] h-auto  text-gray-300 ' />
          </a>
          <div className='m-5'>
            <h3 className='text-lg font-bold text-gray-200'>Working Hours</h3>
            <p className="text-gray-400">Mon-Fri: 10am-5pm IST</p>
          </div>
        </li>
      </ul>
      <form action='https://getform.io/f/lakmvjxa' method='POST' className='max-w-6xl p-5 md:p-12' id='form'>
        <input 
          type='text'
          id='name'
          placeholder='Your Name...'
          name='name'
          className='mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4'
        />
        <input 
          type='email'
          id='email'
          placeholder='Your Email...'
          name='email'
          className='mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4'
        />
        <textarea
          id='textarea'
          placeholder='Your Message...'
          name='textarea'
          className='mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4'
        /> 
        <button 
          type='submit' 
          className='w-full py-3 bg-gradient-to-r from-[#50a7c7] to-teal-600 rounded-lg'>
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
