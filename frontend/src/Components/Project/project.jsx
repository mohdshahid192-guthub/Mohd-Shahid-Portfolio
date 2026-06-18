import React from "react";
import ProjectCard from "../Cards/ProjectCard";
export default function Project(){
return(
  <div className='min-h-screen bg-[#ffffff] flex flex-col items-center pt-18 gap-8 dark:bg-slate-800 dark:text-white'>

    <h2 className="font-bold text-3xl text-center sm:text-start">My <span className="text-orange-600 dark:text-indigo-500">Projects</span></h2>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full h-full  content-center justify-items-center px-4">
        
       <ProjectCard name='ServExpress' frontVal={7} backVal={9} src={'images/TestProject.png'} />
       <ProjectCard />
       <ProjectCard />

       </div>


    </div>
)
}