import React, { useState, useRef } from "react";
import CertificateCard from "../Cards/CertificateCards";
import ButtonRectangle from "../Buttons/ButtonRectangle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion";
import { faX } from "@fortawesome/free-solid-svg-icons";
import EducationCard from "../Cards/EducationCard";




const popScroll = {
  hidden: (direction) => ({
    x: direction === "left" ? 100 : -100,
    opacity: 0
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {duration: 0.3, ease: "easeInOut"}
  }
}

export default function Certificate({visible, onClose}) {
const scrollContainerRef = useRef(null);

const viewportConfig = {
    root: scrollContainerRef,            
    amount: 0.35           
  };


  return (
    <div className={`${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} inset-0 bg-black/50 fixed py-18 flex flex-col gap-4 items-center h-full overflow-hidden transition-opacity duration-300`}>
    
    <div 
        ref={scrollContainerRef}
        className="h-full bg-white overflow-scroll scrollbar-none flex flex-col gap-4 w-[70%] items-center py-4 dark:bg-slate-800 rounded-lg relative"
      >
     
        <div className={` w-full flex justify-end pr-8 cursor-pointer`}><ButtonRectangle btnText={<FontAwesomeIcon icon={faX} className="text-orange-500 dark:text-indigo-600 font-bold" />} width="w-10" height="h-10" bgNone={true} onClick={onClose}/>
      </div>
         <motion.div
          variants={popScroll}
         initial="hidden"
        whileInView={visible ? "visible" : "hidden"}
        custom="left"
        viewport={viewportConfig}
          className="w-full flex justify-center"
        >
       
      <EducationCard heading="Bachelor of Computer Applications" college="Digvijay Nath P.G. College" board="DDUGU" year={2026} score={71.05} location="Gorakhpur, Uttar Pradesh, India, 273001" rowNumber="odd" />
       </motion.div>

        <motion.div
          variants={popScroll}
          initial="hidden"
          whileInView={visible ? "visible" : "hidden"}
          custom="right"
          viewport={viewportConfig}
          className="w-full flex justify-center"
        >
           <EducationCard heading="Intermediate (XII)" college="M.S.I. Inter College" board="UP Board" location="Gorakhpur, Uttar Pradesh, India, 273001" year={2022} score={61.33} rowNumber="even" />
      
</motion.div>

       <motion.div
          variants={popScroll}
          initial="hidden"
          whileInView={visible ? "visible" : "hidden"} 
          custom="left"
          viewport={viewportConfig}
          className="w-full flex justify-center"
        >
        <EducationCard heading="High School (X)" college="P.G. Senior Secondary School"  board="CBSE" location="Kushinagar, Uttar Pradesh, India, 274301" year={2020} score={75.67} rowNumber="odd"/>
       </motion.div>
    
   
     </div>
    </div>
  )
}