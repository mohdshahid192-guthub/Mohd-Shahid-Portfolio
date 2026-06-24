import React from "react";

export default function ButtonTransparent({btnText, onClick, width, height, textSize, disabled}){
  return(
      <button className={`${width} ${height} capitalize border-orange-600 font-semibold ${textSize} h rounded-full border-2 hover:bg-linear-60 from-orange-700 to-orange-500 hover:text-white cursor-pointer 
        dark:hover:bg-linear-60 dark:from-indigo-700 dark:to-indigo-400 dark:hover:from-indigo-900 dark:hover:to-indigo-600 transition-colors duration-200 dark:border-indigo-600 hover:border-none `}
        onClick={onClick}
         disabled = {disabled}
        >{btnText}</button>
  )
}