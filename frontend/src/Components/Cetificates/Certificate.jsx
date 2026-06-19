import React, { useState } from "react";
import CertificateCard from "../Cards/CertificateCards";
import ButtonRectangle from "../Buttons/ButtonRectangle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Certificate({visible, onClose}) {

  

  return (
    <div className={`${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} inset-0 bg-black/50 fixed py-18 flex flex-col gap-4 items-center h-full overflow-hidden transition-opacity duration-300`}>
    
     <div className="h-full bg-white overflow-scroll scrollbar-none flex flex-col gap-4 w-[70%] items-center py-4 dark:bg-slate-800 rounded-lg">
        <div className={` w-full flex justify-end pr-8 cursor-pointer`}><ButtonRectangle btnText={<FontAwesomeIcon icon={faX} className="text-orange-500 dark:text-indigo-600 font-bold" />} width="w-10" height="h-10" bgNone={true} onClick={onClose}/>
      </div>
       <CertificateCard rowNumber="odd" src="images/CertificateOfInternship.png" heading="Certificate Of Internship" description="This certificate is given by Friggas Techsole, Noida, Uttar Pradesh for completing 3 months of Internship as a Web Developer from 12 June 2025 to 12 September 2025" />
       <CertificateCard rowNumber="even" src="images/CertificateOfPublication.png" 
       heading="Certificate of Publication"
       description="This Certificate is given for publishing Reasearch Paper of Web Application Project ServExpress on International Journal of Computer Techniques (IJCT) "
       />
       <CertificateCard rowNumber="odd" src="images/ProjectCompletionCertificate.png"
       heading="Project Completion Certificate"
       description="Honored with this certificate during my graduation (Bachelor of Computer Applications) for succesfully developed Home Service Booking Web Application (ServExpress)."
       />
    
     </div>
    </div>
  )
}