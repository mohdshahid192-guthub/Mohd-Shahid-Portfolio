import React, { useState, useRef } from "react";
import CertificateCard from "./CertificateCards";
import ButtonRectangle from "../Buttons/ButtonRectangle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion";
import { faX } from "@fortawesome/free-solid-svg-icons";
import CertificateOfPublication from "../../assets/CertificateOfPublication.png";
import ProjectCompletionCertificate from "../../assets/ProjectCompletionCertificate.png";
import CertificateOfInternship from "../../assets/CertificateOfInternship.png";



const popScroll = {
  hidden: {opacity: 0, y: 30},
  visible: {
    opacity: 1,
    y: 0,
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
        viewport={viewportConfig}
          className="w-full flex justify-center"
        >
       <CertificateCard rowNumber="odd" src={CertificateOfInternship} heading="Certificate Of Internship" description="This certificate is given by Friggas Techsole, Noida, Uttar Pradesh for completing 3 months of Internship as a Web Developer from 12 June 2025 to 12 September 2025" />

       </motion.div>

        <motion.div
          variants={popScroll}
          initial="hidden"
          whileInView={visible ? "visible" : "hidden"}
          viewport={viewportConfig}
          className="w-full flex justify-center"
        >
       <CertificateCard rowNumber="even" src={CertificateOfPublication} 
       heading="Certificate of Publication"
       description="This Certificate is given for publishing Reasearch Paper of Web Application Project ServExpress on International Journal of Computer Techniques (IJCT) "
       />
</motion.div>

       <motion.div
          variants={popScroll}
          initial="hidden"
          whileInView={visible ? "visible" : "hidden"} 
          viewport={viewportConfig}
          className="w-full flex justify-center"
        >
       <CertificateCard rowNumber="odd" src={ProjectCompletionCertificate}
       heading="Project Completion Certificate"
       description="Honored with this certificate during my graduation (Bachelor of Computer Applications) for succesfully developed Home Service Booking Web Application (ServExpress)."
       />
       </motion.div>
    
   
     </div>
    </div>
  )
}