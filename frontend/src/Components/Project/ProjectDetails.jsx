import React from "react";
import { useParams } from "react-router-dom";
import projects from "../Data/ProjectDetails.json";
import ImageCarousel from "../ImageCrousel/ImageCrousel";
import ButtonTransparent from "../Buttons/ButtonTransparen";

export default function ProjectDetailView() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

   const repositoryLink = `https://github.com/mohdshahid192-guthub${project.repo}.git`

  if (!project) return <div>Project Not Found</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 flex flex-col items-center justify-start gap-4">
    
      <ImageCarousel images={project.images} />
      
      <h1 className="text-4xl font-bold mt-6 text-orange-500 dark:text-indigo-600">{project.name}</h1>
         <div className="flex flex-col font-semibold items-start w-full">
     
        <h4 className="text-lg font-semibold dark:text-white">Tools: </h4>
       <ul className="flex gap-2 text-black dark:text-white items-center justify-start flex-wrap">
          {project.tools.map((p) => (
           <li key={p} className="mt-4 dark:text-white border rounded-full px-2 py-1 flex items-center text-nowrap cursor-pointer">{p}</li>
        ))}
       </ul>
        </div>
       <div className="w-full py-4 dark:text-white">
         <ButtonTransparent width="w-32" height="h-10" btnText="View Code" textSize="text-md" onClick={() => window.open(repositoryLink, '_blank')} />
       </div>
      <div className="pt-2 flex flex-col w-full ">
        <h4 className="text-lg font-semibold dark:text-white">Project Description:</h4>
      <p className="mt-4 text-gray-600 dark:text-gray-400">{project.description}</p>
      </div>
     
    </div>
  );
}