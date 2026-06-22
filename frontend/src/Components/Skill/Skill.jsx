import React, { useEffect, useRef } from "react";
import SkillCard from "../Cards/SkillCard";
import { motion } from "framer-motion";
import useSkillsData from "../../Hooks/loadSkills"

const popScroll = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut" }
  }
}

export default function Skill() {
const scrollContainerRef = useRef(null)
const viewportConfig = {
  root: scrollContainerRef,
  amount: 0.2
}

const {skills, loading, error} = useSkillsData()


  return (
    <div className='min-h-[calc(100vh-64px)] bg-[#ffffff] flex flex-col items-center pt-18 gap-8 dark:bg-slate-800 dark:text-white pb-4'>

      <h2 className="font-bold text-3xl text-center sm:text-start">My <span className="text-orange-600 dark:text-indigo-500">Skills</span></h2>

      <div
      ref={scrollContainerRef}
       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-[80vh-10px] content-start justify-items-center px-4">

        {skills.map((s) => (
          <motion.div key={s.icon} variants={popScroll} initial="hidden" whileInView="visible" viewport={viewportConfig} className="w-full h-max">

            <SkillCard proficiency={s.proficiency} skill={s.name} color={s.color} icon={s.icon}iconColor={s.iconColor} />

          </motion.div>
        ))}

       




      </div>
    </div>
  )
}