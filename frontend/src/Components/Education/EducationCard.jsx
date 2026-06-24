import React from "react";


export default function EducationCard({ heading, description, rowNumber = "odd", score, college, location, year, board}) {


  return (
    <div className={`w-[90%] md:w-1/2 p-6 rounded-lg shadow-lg mx-4
    dark:bg-slate-900/80 ${rowNumber === "even" ? "md:bg-gray-50 md:dark:bg-slate-900/50" : "md:bg-white md:dark:bg-slate-900/80"}`} >

    <div className={`flex flex-col items-start lg:gap-4 `}>
      <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading lg:text-4xl leading-8 text-center w-full text-orange-500 dark:text-indigo-600 font-serif">{heading}</h5>
     <ul className="w-full h-max flex flex-col gap-2 text-gray-700 dark:text-gray-300">
      <li className="font-semibold text-lg font-serif">{college}</li>
      <li className="font-serif">{location}</li>
      <li className="font-serif">Board: <span>{board}</span></li>
      <li className="font-serif">Passing Year: <span>{year}</span></li>
      <li className="font-serif">Score: <span> {score}%</span></li>
     </ul>

    </div>
</div>
  )
}