import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {};

export default function Skill({}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 2.5 }}
        whileInView={{ opacity: 1 }}
        src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
        className="rounded-full border border-gray-500 object-cover w-16 h-16  mobile-m:w-20 mobile-m:h-20  sm:w-28 sm:h-28 height-800:w-24 height-800:h-24  height-1000:w-36 height-1000:h-36 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16   sm:w-28 sm:h-28 mobile-m:w-20 mobile-m:h-20 height-800:w-24 height-800:h-24  height-1000:w-36 height-1000:h-36 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl mobile-m:text-3xl font-bold text-black opacity-100">
            100%
          </p>
        </div>
      </div>
    </div>
  );
}
