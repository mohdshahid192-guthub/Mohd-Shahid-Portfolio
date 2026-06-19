import React from "react";
import ButtonRectangle from "../Buttons/ButtonRectangle";

export default function CertificateCard({src, heading, description, rowNumber = "odd"}) {
  return (
    <div className={`w-[90%] p-6 rounded-lg shadow-lg mx-4
    dark:bg-slate-900/80  grid md:grid-cols-2 gap-4 md:grid-rows-1 ${rowNumber === "even" ? "md:bg-gray-100 md:dark:bg-slate-900/50" : "md:bg-white md:dark:bg-slate-900/80"}`} >

      
      <div className={`w-full h-full grid place-content-center  md:row-start-1 ${rowNumber === "even" ? "md:col-start-2" : "md:col-start-1"}`}>
        <img src={src} className="object-cover rounded-lg" alt="" />
      </div>
    <div className={`flex flex-col items-start lg:gap-4 md:col-start-1 md:row-start-1 ${rowNumber === "even" ? "md:col-start-1" : "md:col-start-2"}`}>
      <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading lg:text-4xl leading-8">{heading}</h5>
    <p className="text-sm lg:text-lg mb-6">{description}</p>
    <ButtonRectangle width="w-40" btnText="Download" height="h-10" textSize="text-lg"/>
    </div>
</div>
  )
}