import React from "react";

import {ButtonOrange, ButtonTransparent}from '../index.js';

export default function About(){
  return(
   <div className='min-h-[calc(100vh-16px)] bg-[#ffffff] grid grid-cols-1 md:grid-cols-2 place-items-center px-4 relative z-0 dark:bg-slate-800 dark:text-white'>

    
     <div className='hidden h-full w-full md:flex items-center justify-center shrink-0 sm:col-span-2 md:col-span-1 overflow-x-clip'>
        <img className='sm:h-140 w-full  p-4 object-contain' src='images/AboutImage.png' alt="Hero Image" />
      </div>

      <div className="flex flex-col gap-4 py-16 md:py-4 sm:px-2 items-center justify-center md:items-start">


        <h2 className="font-bold text-3xl text-center sm:text-start">About <span className="text-orange-600 dark:text-indigo-500">Me</span></h2>
        
        <img className=' w-full md:hidden  p-4 object-contain' src='images/AboutImage.png' alt="Hero Image" />
        <div className="w-full p-4 border-2 rounded-lg border-orange-500 bg-linear-to-br from-orange-400 via-orange-200 to-gray-100 dark:bg-linear-to-br dark:from-indigo-600 dark:via-indigo-400 dark:to-indigo-300 dark:border-indigo-600 my-4">
          <p className="text-lg text-gray-600 font-semibold dark:text-white">Hi, I’m Mohd Shahid, a Full-Stack Developer specializing in the MERN stack. I build dynamic, user-centric web applications and have a passion for solving real-world problems through clean code. From architecting responsive UIs with React and Tailwind CSS to developing robust backend systems, I focus on delivering seamless digital experiences.</p>
        </div>

       <div className="flex gap-4 flex-wrap items-center justify-center sm:justify-start">
         <ButtonOrange width='w-40' height='h-14' btnText='Education' textSize='text-xl' />
      <ButtonTransparent 
      width='w-40' height='h-14' btnText='Certificates' textSize='text-xl'/>
       </div>
      </div>

   </div>
  )
}