import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { delay, motion } from "framer-motion";
import projects from "../Data/ProjectDetails.json"

const popScroll = {
  hidden:{
    y: 30,
    opacity: 0
  },
  visible:{
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: "easeInOut", 
      delay: 0.08
    }
  }
};

export default function Project() {
 
  const scrollContainerRef = useRef(null);

  return (


    <div className='min-h-[calc(100vh-64px)] bg-[#ffffff] flex flex-col items-center pt-18 gap-8 dark:bg-slate-800 dark:text-white pb-4 md:px-4'>

      <h2 className="font-bold text-3xl text-center sm:text-start">My <span className="text-orange-600 dark:text-indigo-500">Projects</span></h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full h-full  content-center justify-items-center px-4"  ref={scrollContainerRef}>

    {projects.map((project, index) => {

        return(

          <motion.div key={project.id}
            variants={popScroll}
            initial="hidden"
            whileInView="visible"
            viewport={{root: scrollContainerRef.current, amount: 0.3}}
            className="w-full h-full overflow-visible">
            
            <ProjectCard 
            id={project.id}
            name={project.name}
             frontVal={project.frontVal} 
             backVal={project.backVal} 
             src={project.images[0]} 
             repo={project.repo} 
             crouselImages={project.images}
             />

          </motion.div>
         
          
        )})}




      </div>


    </div>
  )
}