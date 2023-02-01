import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import { LinkIcon } from "@heroicons/react/24/solid";

type Props = {
  projects: Project[]
};

export default function Projects({projects}: Props) {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 height-800:top-20 uppercase tracking-[20px] text-gray-500 text-xl mobile-xl:text-2xl ">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {/* projects */}
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 sm:p-20 md:p-28 h-screen"
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              className=" h-28 mobile-m:h-32 sm:h-48 height-800:h-36 height-1000:h-64 object-cover"
            />
            <div className="space-y-2  mobile-xl:space-y-7 px-0 md:px-10 max-w-6xl ">
              <h4 className="text-xl mobile-m:text-2xl mobile-l:text-4xl font-semibold text-center">
                {i + 1} of {projects.length}:
                <a href={project?.linkToGit} className=" text-[#F7AB0A] animate-pulse hover:text-[#F7AB0A]/50 hover:animate-none hover:decoration-transparent">
                  {" "}{project?.title }
                </a>
                
              </h4>
                  
                   

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology=>(
                  <Image width="500" height="500" alt="logo" key={technology._id} src={urlFor(technology?.image).url()} className=" h-5 w-5 mobile-m:h-6 mobile-m:w-6 mobile-xl:w-8 mobile-xl:h-8 height-1000:h-12 height-1000:w-12"/>
                )))}
              </div>
              <p className="max-h-24 mobile-m:max-h-52 mobile-xl:max-h-64 sm:max-h-28 pr-3 overflow-scroll text-sm mobile-m:text-base mobile-l:text-xl text-center md:text-left scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80  ">
              {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/30 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
