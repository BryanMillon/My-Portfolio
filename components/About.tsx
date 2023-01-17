import React from "react";
import profilePic from "./img/pic.JPG";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  const text = `   Hi there! My name is Bryan Millon, I'm a 20-year-old tech enthusiast
  from Costa Rica. I recently graduated from the Henry Bootcamp's Full
  Stack Development program and have been programming for a year now.
  I'm a developer who is passionate about technology, and I'm always
  looking to stay on top of the latest trends and advancements in the
  field. Aside from my love for coding, I'm also a big fan of Spider-Man
  and enjoy listening to music in my free time. I consider myself a
  curious and dynamic person who is always eager to learn and grow. If
  you're looking for a Full Stack Developer who's dedicated and
  committed to being the best and won't back down from a challenge, I'm
  your guy 🕷️💻🚀`
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl mx-auto px-10 justify-evenly items-center"
    >
      <h3 className="absolute top-16 md:top-20 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
    
      <motion.div
        className="relative flex-shrink-0 -mb-20 md:mb-0"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src={profilePic}
          alt="Picture of the author"
          className="  w-40 h-40  rounded-full object-cover object-top md:rounded-lg md:w-64 md:h-96 xl:w-[380px] xl:h-[480px]"
        />
      </motion.div>
      <div className="md:max-h-96  max space-y-8  px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <div className="max-w-md max-h-40 md:max-w-full md:max-h-full md:overflow-hidden  overflow-scroll">

        <p className="text-base text-left">
       {text}
        </p>
        </div>
      </div>
    </motion.div>
  );
}
