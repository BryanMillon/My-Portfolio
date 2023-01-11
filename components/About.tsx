import React from "react";
import profilePic from "./img/pic.JPG";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl mx-auto px-10 justify-evenly items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl ">
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
          className="  w-56 h-56 rounded-full object-cover object-top md:rounded-lg md:w-64 md:h-96 xl:w-[380px] xl:h-[480px]"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          id beatae quam blanditiis eveniet itaque laborum repellendus.
          Consequuntur, rem? Inventore impedit sint iste quae blanditiis minima
          mollitia nobis repellat tempore? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Corporis at pariatur ad in architecto
          ullam corrupti eaque porro, error non officiis quod rem numquam,
          tempora quisquam quia minima beatae ipsa. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Totam soluta laboriosam beatae cumque
          exercitationem quaerat pariatur quod expedita ratione, blanditiis
          laudantium dolor culpa architecto eum odio ullam, neque velit
          quia!Lorem
        </p>
      </div>
    </motion.div>
  );
}
