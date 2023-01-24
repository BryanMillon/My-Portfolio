import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className='flex relative flex-col justify-center items-center text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto '>
        <h3 className="absolute top-16 height-800:top-20 uppercase tracking-[20px] text-gray-500 text-xl mobile-m:text-2xl ">
        Skills
      </h3>
      <div className='grid grid-cols-3 sm:grid-cols-4 gap-3 mobile-m:gap-5'>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      
      

      
      </div>
    </motion.div>
  )
}