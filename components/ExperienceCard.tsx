import React from "react";
import { motion } from "framer-motion";
import Logo1 from "./img/align.png";
import Image from "next/image";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience:Experience
};

export default function ExperienceCard({experience}: Props) {
  return (
    <article className="flex flex-col rounded-lg over items-center space-y-3 height-800:space-y-10 flex-shrink-0 w-[235px] mobile-m:w-[275px] mobile-l:w-[290px] mobile-xl:w-[310px] sm:w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-5 sm:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img
          className="w-20 h-20 mobile-m:w-28 mobile-m:h-28  height-800:w-32 height-800:h-32 rounded-full  bg-white object-center"
          src={urlFor(experience?.companyImage).url()}
          alt="align-logo"
        />
      </motion.div>
      <div className="text-center sm:text-left px-0 md:px-10">
        <h4 className=" text-xl mobile-m:text-3xl sm:text-4xl font-lights">{experience?.jobTitle}</h4>
        <p className="font-bold text-xl mobile-m:text-2xl mt-1">{experience?.company}</p>

        
       {/* TECH USED
        <div className="flex space-x-2 my-2">
        {experience.technologies.map(technology =>(
          <img key={technology._id} className="h-10 w-10 rouded-full" src={urlFor(technology.image).url()} alt="logo-Teams"/>
        ))}
        </div> */}
     

        <p className="uppercase py-2 mobile-m:py-5 text-gray-300">{experience.dateStarted ? new Date(experience.dateStarted).toDateString() : "PRESENT" } -{" "}{experience.isCurrentlyWorkingHere ? "PRESENT" : new Date(experience.dateEnded).toDateString()}</p>
        <div className=" max-w-[225px] mobile-m:max-w-[275px] max-h-full  sm:max-w-full height-800:max-h-full md:max-h-full md:overflow-hidden">
        <ul className=" list-disc space-y-3 mobile-m:space-y-4 ml-5 mobile-m:text-base text-sm ">
       {experience.points.map((point, i )=>(
         <li key={i}>{point}</li>
       ))}
        </ul>
        </div>
      </div>
    </article>
  );
}
