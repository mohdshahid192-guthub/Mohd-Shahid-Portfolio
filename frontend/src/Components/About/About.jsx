import React, { useState } from "react";

import { ButtonOrange, ButtonTransparent } from '../index.js';
import Certificate from "../Cetificates/Certificate.jsx";
import AboutImage from "../../assets/AboutImage.png"
import EducationCard from "../Education/EducationCard.jsx";
import Education from "../Education/Education.jsx";

export default function About() {
  const [isvisible, setIsVisible] = useState(false)
  const [educationSecVisible, setEducationSecVisible] = useState(false)
  const handleCertificateBox = () => {
    setIsVisible(true)
  }
  const handleEducationBox = () => {
    setEducationSecVisible(true)
  }
  return (
    <div className='min-h-[calc(100vh-64px)] bg-[#ffffff] grid grid-cols-1 md:grid-cols-2 place-items-center px-4 relative z-0 dark:bg-slate-800 dark:text-white py-16 '>


      <div className='hidden h-full w-full md:flex items-center justify-center shrink-0 sm:col-span-2 md:col-span-1 overflow-x-clip'>
        <img className='sm:h-140 w-full  p-4 object-contain' src={AboutImage} alt="Hero Image" />
      </div>

      <div className="flex flex-col  md:py-0 sm:px-2 items-center justify-center md:items-start">


        <h2 className="font-bold text-3xl text-center sm:text-start">About <span className="text-orange-600 dark:text-indigo-500">Me</span></h2>

        <img className=' w-full md:hidden  p-4 object-contain' src={AboutImage} alt="Hero Image" />
        <div className="w-full p-4 border-2 rounded-lg border-orange-500 bg-linear-to-br from-orange-400 via-orange-200 to-gray-100 dark:bg-linear-to-br dark:from-indigo-600 dark:via-indigo-400 dark:to-indigo-300 dark:border-indigo-600 my-4">
          <p className="text-lg text-gray-600 font-semibold dark:text-white">Hi, I’m Mohd Shahid, a Full-Stack Developer specializing in the MERN stack. I build dynamic, user-centric web applications and have a passion for solving real-world problems through clean code. From architecting responsive UIs with React and Tailwind CSS to developing robust backend systems, I focus on delivering seamless digital experiences.</p>
        </div>

        <div className="flex w-full rounded-base">
          <dl className="grid w-full grid-cols-3 gap-8 mx-auto text-heading sm:grid-cols-3 p-8 text-center md:text-start md:pl-0">
            <div className="flex flex-col">
              <dt className="mb-2 text-2xl font-semibold tracking-tight text-heading">15+</dt>
              <dd className="text-body">Projects</dd>
            </div>
            <div className="flex flex-col">
              <dt className="mb-2 text-2xl font-semibold tracking-tight text-heading">5</dt>
              <dd className="text-body">Public repositories</dd>
            </div>
            <div className="flex flex-col">
              <dt className="mb-2 text-2xl font-semibold tracking-tight text-heading">200+</dt>
              <dd className="text-body">LinkedIn Followers</dd>
            </div>
          </dl>
        </div>

        <div className="flex gap-4 flex-wrap items-center justify-center sm:justify-start">
          <ButtonOrange width='w-40' height='h-14' btnText='Education' textSize='text-xl' onClick={handleEducationBox} />
          <ButtonTransparent
            width='w-40' height='h-14' btnText='Certificates' textSize='text-xl' onClick={handleCertificateBox} />
        </div>
      </div>

      <Certificate visible={isvisible} onClose={() => setIsVisible(false)} />

       <Education visible={educationSecVisible} onClose={() => setEducationSecVisible(false)} />
    </div>

  )
}