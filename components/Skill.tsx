import { motion } from 'framer-motion'
import React from 'react'


type Props = {
    directionLeft ?: boolean;
}

export default function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            x:directionLeft ? -200 : 200
        }}
        transition={{duration:1}}
        whileInView={{opacity: 1, x:0}}
        
        src='https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo-500x313.png'
        className='rounded-full border border-gray-500 object-cover w-20 h-20 height-800:w-28 height-800:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white  w-20 h-20 height-800:w-28 height-800:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
        </div>
  )
}