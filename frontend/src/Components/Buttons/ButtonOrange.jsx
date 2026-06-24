import React from "react";

export default function ButtonOrange({width, height, btnText, onClick, textSize, disabled}){
  
  return(
  <button className={`${width} ${height} capitalize 
  px-1 border-orange-600 font-semibold ${textSize} rounded-full bg-linear-60 from-orange-600 to-orange-400 text-white hover:from-orange-700 hover:to-orange-500  cursor-pointer dark:from-indigo-700 dark:to-indigo-400 dark:hover:from-indigo-900 dark:hover:to-indigo-600 transition-colors duration-200 grid place-items-center`} onClick={onClick}
  disabled = {disabled}
  >{btnText}
    </button>
  )
}

