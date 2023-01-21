import React from "react";
import { motion } from "framer-motion";
import Logo1 from "./img/align.png";
import Image from "next/image";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg over items-center space-y-3 height-800:space-y-10 flex-shrink-0 w-[235px] mobile-m:w-[275px] mobile-l:w-[290px] mobile-xl:w-[310px] sm:w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-5 sm:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-20 h-20 mobile-m:w-28 mobile-m:h-28  height-800:w-32 height-800:h-32 rounded-full  bg-white object-center"
          src="https://www.aligntech.com/img/align-logo.svg"
          alt="align-logo"
          width="0"
          height="0"
        />
      </motion.div>
      <div className="text-center sm:text-left px-0 md:px-10">
        <h4 className=" text-xl mobile-m:text-3xl sm:text-4xl font-lights">Cad Designer</h4>
        <p className="font-bold text-xl mobile-m:text-2xl mt-1">Align Technology</p>

        
{/*                  TECH USED

        <div className="flex space-x-2 my-2">
        <img className="h-10 w-10 rouded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" alt="logo-Teams"/>
          <img className="h-10 w-10 rouded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" alt="logo-Teams"/>
          <img className="h-10 w-10 rouded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" alt="logo-Teams"/>
        </div>
         */}

        <p className="uppercase py-2 mobile-m:py-5 text-gray-300">Sep 2021 - Jan 2022</p>
        <div className=" max-w-[225px] mobile-m:max-w-[275px] max-h-full  sm:max-w-full height-800:max-h-full md:max-h-full md:overflow-hidden">
        <ul className=" list-disc space-y-3 mobile-m:space-y-4 ml-5 mobile-m:text-base text-sm ">
          <li> Use software to design dental treatments based on the dentist`s specifications</li>
          <li>Set daily goals and work towards achieving them.</li>
          <li>Collaborate with team members and also complete tasks independently.</li>
        </ul>
        </div>
      </div>
    </article>
  );
}
