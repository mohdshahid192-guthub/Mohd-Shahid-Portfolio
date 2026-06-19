import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link} from 'react-router-dom';
import {faSquareGithub, faSquareLinkedin, faSquareInstagram, faSquareFacebook} from '@fortawesome/free-brands-svg-icons';
import {ButtonOrange, ButtonTransparent}from '../index.js';
import { useSmartNavigate } from '../../Hooks/SmartNavigate.js';



export default function Hero() {
  const navigate = useSmartNavigate()




  return (
<div className='min-h-[calc(100vh-16px)] bg-[#ffffff] grid md:grid-cols-2 place-items-center px-4 relative z-0 sm:grid-cols-3 dark:bg-slate-800 dark:text-white pb-4 '
>
  <div className='sm:col-span-1 h-full w-full flex items-center justify-center'>
    <div className='w-4/5 px-4 flex flex-col items-start gap-4 pt-18'>
      <ul className='flex'>
        <Link to='https://github.com/mohdshahid192-guthub' target='_blank'><FontAwesomeIcon icon={faSquareGithub} className='text-4xl' /></Link>
       
        <Link to='https://www.linkedin.com/in/mohd-shahid192' target='_blank'><FontAwesomeIcon icon={faSquareLinkedin} className='text-4xl text-blue-800 dark:text-white' /></Link>
         <Link to='https://www.instagram.com/mohdshahid.06?igsh=MW92emF3Zjk4d3VnbQ==' target='_blank'><FontAwesomeIcon icon={faSquareInstagram} className='text-4xl text-pink-600 dark:text-white' /></Link>
        <Link to='https://www.facebook.com/share/1HFsbyD8Pe/' target='_blank'><FontAwesomeIcon icon={faSquareFacebook} className='text-4xl text-blue-800 dark:text-white' /></Link>
      </ul>
      <h1 className='text-5xl font-bold tracking-tight'>Hi, I'm Mohd Shahid</h1>
      <p className='text-xl' >Motivated and detail-oriented Full Stack Developer with hands-on experience in developing responsive and user
friendly web applications using React, Tailwind CSS, Node.js, Express.js, and MongoDB. Skilled 
in REST APIs, responsive design, database management, and software development lifecycle.</p>
      <div className='w-full flex gap-4 justify-center flex-col items-center md:flex-row pt-4'>

      <ButtonOrange width='w-40' height='h-14' btnText='Download CV' textSize='text-lg' />
     
      <ButtonTransparent width='w-40' height='h-14' btnText='Contact Me' onClick={() => navigate('/contact')}/>
      </div>
    </div>
  </div>
  <div className='h-full w-full flex items-center justify-center shrink-0 sm:col-span-2 md:col-span-1'>
    <img className='sm:h-140 w-100  p-4' src='images/HeroAvatar.png' alt="Hero Image" />
  </div>
</div>
    
  );
};
