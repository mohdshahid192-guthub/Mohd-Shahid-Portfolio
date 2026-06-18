import React from "react";
import SkillCard from "../Cards/SkillCard";
import { faCss3, faHtml5, faJs, faMdb, faNodeJs, faPostgresql, faPython, faReact, faTailwindCss, faTypescript } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function Skill(){
return(
<div className='min-h-screen bg-[#ffffff] flex flex-col items-center pt-18 gap-8 dark:bg-slate-800 dark:text-white'>

    <h2 className="font-bold text-3xl text-center sm:text-start">My <span className="text-orange-600 dark:text-indigo-500">Skills</span></h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-full  content-center justify-items-center px-4">

       <SkillCard proficiency={97} skill="HTML 5" color='from-orange-500 to-orange-400' icon={faHtml5} iconColor='text-orange-400'/>
       
        <SkillCard proficiency={97} skill="CSS 3" color='from-indigo-500 to-indigo-400' icon={faCss3} iconColor='text-indigo-500'/>

  <SkillCard proficiency={90} skill="Tailwind CSS" color='from-blue-500 to-blue-400' icon={faTailwindCss} iconColor='text-blue-400'/>
  
         <SkillCard proficiency={95} skill="JavaScript" color='from-orange-500 to-orange-400' icon={faJs} iconColor='text-orange-400'/>

   <SkillCard proficiency={80} skill="React" color='from-blue-500 to-blue-400' icon={faReact} iconColor='text-blue-400'/>

   

    <SkillCard proficiency={80} skill="Node.Js" color='from-green-500 to-green-400' icon={faNodeJs} iconColor='text-green-400'/>

    <SkillCard proficiency={75} skill="TypeScript" color='from-blue-500 to-blue-400' icon={faTypescript} iconColor='text-blue-400'/>
    <SkillCard proficiency={85} skill="MongoDB" color='from-green-500 to-green-400' icon={faMdb} iconColor='text-green-400'/>

  
 
    </div>
  </div>
)
}