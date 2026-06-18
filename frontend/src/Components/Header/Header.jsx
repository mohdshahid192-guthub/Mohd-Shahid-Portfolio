import React, { useState } from "react";
import {NavLink } from 'react-router-dom'
import { useTheme } from "../../Context/themeContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons';
import {ButtonOrange, PrefetchNavLink} from "../index.js";
import { useSmartNavigate } from "../../Hooks/SmartNavigate.js";



export default function NavBar(){
const navigate = useSmartNavigate()

  const {theme, toggleTheme} = useTheme()

  return (
    <div className="grid place-items-center pt-4 relative z-10 ">
       <nav className="flex w-4/5 md:w-3/4  justify-between gap-2 bg-linear-to-br from-orange-300 via-orange-100 to-gray-100 shadow-lg rounded-xl h-12 items-center px-4 fixed top-4 dark:bg-none dark:bg-slate-900/80 dark:backdrop-blur-lg dark:text-white">
        <h1 className="font-bold tracking-wide">Portfolio.</h1>
       <ul className="hidden sm:flex font-bold gap-4">
        <li>
          <PrefetchNavLink 
          to='/'
          src={['images/HeroAvatar.png']}
          >
            Home
          </PrefetchNavLink>
        </li>
        <li>
         <PrefetchNavLink 
          to='/about'
          src={['images/AboutImage.png']}
          >
            About
          </PrefetchNavLink>
        </li>
        <li>
         <PrefetchNavLink 
          to='/skill'
          >
            Skills
          </PrefetchNavLink>
        </li>
        <li>
      <PrefetchNavLink 
          to='/project'
          
          >
            Projects
          </PrefetchNavLink>
        </li>
        <li>
         <PrefetchNavLink 
          to='/contact'
          >
            Contact
          </PrefetchNavLink>
        </li>
      
       </ul>
       
       <div className="flex gap-2 items-center justify-center">
       <button onClick={toggleTheme}  ><FontAwesomeIcon icon={faCircleHalfStroke} className="text-xl cursor-pointer" /></button>
       
       <ButtonOrange width='w-18' height='h-8' btnText='Hire Me' textSize='text-sm' onClick={() => navigate('/contact')} />

      </div>
     
       </nav>

    </div>
  )
}