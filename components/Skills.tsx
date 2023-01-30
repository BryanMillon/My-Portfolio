import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

export default function Skills({skills}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col justify-center items-center text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto  "
    >
      <h3 className="absolute top-16 height-800:top-20 uppercase tracking-[20px] text-gray-500 text-xl mobile-xl:text-2xl ">
        Skills
      </h3>
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-3  height-1000:gap-7" >
        {skills?.map(skill => (
          <Skill key={skill._id} skill={skill}/>
        ))}
       
        
      </div>
    </motion.div>
  );
}
