import React from "react";
import ButtonRectangle from "../Buttons/ButtonRectangle";


export default function ProjectCard({frontVal, backVal, src , name}){

   return(
    <div className="w-full h-100 rounded-lg flex flex-col items-center justify-start gap-2 shadow-md shadow-gray-300 
    dark:shadow-sm dark:shadow-gray-600 bg-white">
     
     <div className="w-full h-[45%] border-b-2 border-gray-500">
      <img src={src} alt="ProjectImage" className="object-fill h-full w-full rounded-t-lg"/>
     </div>

    <div className="w-full h-full flex flex-col items-start justify-start px-2 gap-2">
      <h2 className="text-xl font-bold text-orange-500 dark:text-indigo-500">{name}</h2>
      <h4 className="text-sm font-semibold text-gray-500">Complexity</h4>
      <div className="w-full">

        <div className="w-full flex flex-col gap-2">
          
           <div className="flex flex-col w-full gap-1">
            <p className="text-xs flex justify-between w-3/4 pr-2 text-gray-500">Frontend <span className="font-bold text-orange-500">{frontVal}/10</span></p>
             <div className="w-3/4 rounded-full bg-gray-200 h-3">
              <div className=" h-full bg-linear-to-r from-orange-600 to bg-orange-400 rounded-full" style={{width: `${frontVal * 10}%`}}></div>
             </div>
           </div>

           <div className="flex flex-col w-full gap-1">
             <p className="text-xs flex justify-between w-3/4 pr-2 text-gray-500">Backend <span className="font-bold text-indigo-600">{backVal}/10</span></p>
             <div className="w-3/4 rounded-full bg-gray-200 h-3">
              <div className=" h-full bg-linear-to-r from-indigo-600 to bg-indigo-500 rounded-full" style={{width: `${backVal * 10}%`}}></div>
             </div>
           </div>

        </div>

      </div>
       <div className="w-full flex gap-2 pt-4">
       <ButtonRectangle width='w-1/2' height='h-10' btnText='More Details' onClick={() => window.open('https://github.com/mohdshahid192-guhub', '_blank')} bgNone={true}/>

       <ButtonRectangle width='w-1/2' height='h-10' btnText='Repository' onClick={() => window.open('https://github.com/mohdshahid192-guhub', '_blank')}/>

       </div>
       
    </div>
    </div>
   )
}