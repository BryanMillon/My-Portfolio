import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";
import { DocumentTextIcon } from "@heroicons/react/24/solid";




type Props = {
  socials: Social[];
 
};

export default function Header({socials}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      {/* ICONS */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social)=>(
          <SocialIcon
          key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
       
      </motion.div>


        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
          
        >
            <a href='Resume-Bryan-Millon.pdf' download='Resume-Bryan-Millon' >
            <div  className=" cursor-pointer flex items-center mr-2 justify-center hover:text-[#F7AB0A]">
            <DocumentTextIcon className="text-[#F7AB0A] h-6 w-6 animate-pulse mr-1" />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Resume
            </p>
          </div>
            </a>

          <div onClick={() => (window.location.href = "#contact")}>
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
            url="#contact"
            />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in Touch
          </p>
            </div>
        </motion.div>
      
    </header>
  );
}
