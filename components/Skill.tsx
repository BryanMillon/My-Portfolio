import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: SkillType;
};

export default function Skill({skill}: Props) {
  return (
    <div className="group relative flex cursor-pointer ">
      
      <div className="flex flex-col space-y-2 ">
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2.5 }}
        whileInView={{ opacity: 1 }}
        src={urlFor(skill?.image).url()}
        className="rounded-lg  object-cover w-10 h-10  mobile-m:w-14 mobile-m:h-14 mobile-l:w-16 mobile-l:h-16 sm:w-24 sm:h-24 height-800:w-20 height-800:h-20  height-1000:w-32 height-1000:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <h4 className="font-semibold text-center text-xs mobile-l:text-sm height-800:text-base height-1000:text-2xl">{skill?.title}</h4>
          </div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-10 h-10   sm:w-24 sm:h-24 mobile-m:w-14 mobile-m:h-14 mobile-l:w-16 mobile-l:h-16  height-800:w-20 height-800:h-20 height-1000:w-32 height-1000:h-32 rounded-lg z-0">
        <div className="flex items-center justify-evenly h-full">
          {/* <p className="text-sm mobile-m:text-3xl font-bold text-black opacity-100">
            {skill?.title}
          </p> */}
          <p className="text-lg mobile-m:text-2xl mobile-l:text-3xl height-1000:text-5xl font-bold text-black opacity-100">
           {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
