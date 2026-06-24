import React from "react";
import { useTheme } from "../../Context/themeContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons';
import {ButtonOrange, PrefetchNavLink} from "../index.js";
import { useSmartNavigate } from "../../Hooks/SmartNavigate.js";
import { delay, motion, time } from "framer-motion";
import HeroImage from "../../assets/HeroAvatar.png"
import AboutImage from "../../assets/AboutImage.png"
import ContactImage from "../../assets/ContactAvatar.png"

const NAV_EXPAND_DURATION = 1.5
const waterEffect = {
  hidden: {
    opacity: 0,
    width: "0%"
  },
  visible:{
    opacity: [0, 1, 1, 1],
    width: ["0%", "var(--target-width)", "var(--shrink-width)", "var(--target-width)"],
    transition: {
      duration: NAV_EXPAND_DURATION, 
      times: [0, 0.5, 0.75, 1],
     
      ease: [
        [0.16, 1, 0.3, 1],   
        [0.42, 0, 0.58, 1],   
        [0.34, 1.56, 0.64, 1]
      ]
    }
  }
}

const popUp = {
    hidden: {
    opacity: 0,
    y: 20
  },
  visible:{
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, ease: "easeInOut", delay: NAV_EXPAND_DURATION
    }
  }
}


export default function NavBar(){
const navigate = useSmartNavigate()

  const {theme, toggleTheme} = useTheme()

 


  return (
    <div className="w-full grid place-items-center pt-4  ">
     
         <motion.nav className="flex justify-between  z-50 [--target-width:80%] [--shrink-width:65%] md:[--target-width:75%] md:[--shrink-width:60%] bg-linear-to-br from-orange-300 via-orange-100 to-gray-100 shadow-lg rounded-xl h-12 items-center px-4  dark:bg-none dark:bg-slate-900/80 dark:backdrop-blur-lg dark:text-white
          gap-2"
          variants={waterEffect}
          initial="hidden"
          animate="visible"
          
          >
       
            <motion.h1 className="font-bold tracking-wide"
              variants={popUp}
          initial="hidden"
          animate="visible"
          >Portfolio.</motion.h1>
       <motion.ul className="hidden sm:flex font-bold gap-4"
         variants={popUp}
          initial="hidden"
          animate="visible"
          >
        <li>
          <PrefetchNavLink 
          to='/'
          src={[HeroImage]}
          >
            Home
          </PrefetchNavLink>
        </li>
        <li>
         <PrefetchNavLink 
          to='/about'
          src={[AboutImage]}
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
          src={["ProjectsImages/TestProject.png", "ProjectsImages/PortfolioHome.png"]}
          >
            Projects
          </PrefetchNavLink>
        </li>
        <li>
         <PrefetchNavLink 
          to='/contact'
          src={[ContactImage]}
          >
            Contact
          </PrefetchNavLink>
        </li>
      
       </motion.ul>
       
       <motion.div className="flex gap-2 items-center justify-center"
         variants={popUp}
          initial="hidden"
          animate="visible"
          >
       <button onClick={toggleTheme}  ><FontAwesomeIcon icon={faCircleHalfStroke} className="text-xl cursor-pointer" /></button>
       
       <ButtonOrange width='w-18' height='h-8' btnText='Hire Me' textSize='text-sm' onClick={() => navigate('/contact')} />

      </motion.div>
       

     
       </motion.nav>

      </div>
  
  )
}