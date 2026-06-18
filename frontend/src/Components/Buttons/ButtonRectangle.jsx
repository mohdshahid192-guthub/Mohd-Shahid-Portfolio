import React from "react";

export default function ButtonRectangle({width, height, btnText, onClick, textSize, bgNone, type}){
  
  return(
  <button className={`${width} ${height} capitalize 
  px-1 border-orange-600 font-semibold ${textSize} rounded-sm bg-linear-60 ${bgNone ?  'bg-gray-200 text-gray-600 hover:bg-gray-300' : 'from-orange-600 to-orange-400 text-white hover:from-orange-700 hover:to-orange-500  dark:from-indigo-700 dark:to-indigo-400 dark:hover:from-indigo-900 dark:hover:to-indigo-600'} transition-colors duration-200 
  cursor-pointer grid place-items-center`} onClick={onClick} type={type}>{btnText}
    </button>
  )
}

