import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
     className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
       <h3 className=" text-xl absolute top-16 height-800:top-20 uppercase tracking-[20px] text-gray-500 mobile-m:text-2xl  ">
        Experience
      </h3>
      <div className=' w-full h-[530px] height-800:h-[650px]  flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
     <ExperienceCard/>
      </div>
    </motion.div>
  )
}