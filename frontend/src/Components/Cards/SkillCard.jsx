import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faJs} from '@fortawesome/free-brands-svg-icons'

export default function SkillCard({skill, icon, proficiency, color, width, iconColor}){

   return(
    <div className="w-full h-45 rounded-lg flex flex-col items-center justify-start gap-2
    bg-white cursor-pointer text-black shadow-md shadow-gray-300 dark:bg-slate-900/80 dark:shadow-gray-800 dark:text-white ">

      <div className="w-full h-max justify-start flex items-start px-2 py-4">
      <div className="flex gap-1 items-center">
          <FontAwesomeIcon icon={icon} className= {`${iconColor} text-4xl py-1 bg-gray-100 rounded-lg`}/>
             <h3 className="text-xl font-bold">{skill}</h3>
      </div>
   
      </div>
      <div className=" w-full px-2 flex items-justify-start">
        <p className="text- flex w-full justify-between font-semibold text-gray-500">Proficiency <span className="text-orange-500 font-bold">{proficiency}%</span></p>
      </div>
      <div className="w-full h-3 px-2 mt-1">
        <div className="h-full w-full rounded-full bg-gray-200 flex items-start">
         <div className={`bg-linear-to-r ${color}  h-full rounded-full`} style={{width: `${proficiency}%`}}></div>
        </div>
      </div>

<div className="w-full border border-gray-500 mt-1"></div>
    
    <div className="w-full flex items-start py-2 px-2">
    <div className="w-1/3 h-0.5 bg-linear-to-r from-orange-500 to-orange-400 rounded-full"></div>
    </div>
    </div>
   )
}