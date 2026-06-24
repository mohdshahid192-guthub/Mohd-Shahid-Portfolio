import React from "react";
import ButtonRectangle from "../Buttons/ButtonRectangle";
import { useNavigate } from "react-router-dom";


export default function ProjectCard({id, frontVal, backVal, src , name, repo, carouselImages}){

  const navigate = useNavigate()

  const repositoryLink = `https://github.com/mohdshahid192-guthub${repo}.git`

  const handlePrefetch = () => {
    if (!carouselImages || !Array.isArray(carouselImages)) return;

    carouselImages.forEach((url) => {
      // Create a unique clean ID for the link tag based on its URL string
      const linkId = `prefetch-${url.replace(/[^a-zA-Z0-9]/g, '')}`;
      
      // Check if this image has already been appended to prevent duplicate network requests
      if (!document.getElementById(linkId)) {
        const link = document.createElement("link");
        link.id = linkId;
        link.rel = "prefetch";
        link.href = url;
        link.as = "image";
        
        document.head.appendChild(link);
      }
    });
  };

   return(
    <div className="w-full h-105 rounded-lg flex flex-col items-center justify-start gap-2 shadow-lg shadow-gray-400 
    dark:shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900/80 pb-4">
     
     <div className="w-full h-1/2">
      <img src={src} alt="ProjectImage" className="h-full object-center object-fill w-full rounded-t-lg bg-no-repeat"/>
     </div>

    <div className="w-full h-1/2 flex flex-col items-start justify-start px-2 gap-2">
      <h2 className="text-xl font-bold text-orange-500 dark:text-indigo-600">{name}</h2>
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
       <ButtonRectangle width='w-1/2' height='h-10' btnText='More Details' onClick={() => navigate(`/project/${id}`)} onMouseEnter={handlePrefetch} bgNone={true}/>

       <ButtonRectangle width='w-1/2' height='h-10' btnText='Repository' onClick={() => window.open(repositoryLink, '_blank')}/>

       </div>
       
    </div>
    </div>
   )
}