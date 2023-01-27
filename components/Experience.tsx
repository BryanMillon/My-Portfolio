import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience as ExperienceType} from "../typings";

type Props = {
  experience:ExperienceType[];
};

export default function Experience({experience}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-16 height-800:top-20 uppercase tracking-[20px] text-gray-500 text-xl mobile-xl:text-2xl ">
        Experience
      </h3>
      <div className=" w-full  h-[360px] mobile-m:h-[530px] height-800:h-[650px]  flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
       {experience?.map(experience=>(
        <ExperienceCard key={experience?._id} experience={experience}/> 
       ))}
      </div>
    </motion.div>
  );
}
