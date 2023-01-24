import { motion } from 'framer-motion'
import React from 'react'


type Props = {}

export default function Projects({}: Props) {
  const projects = [1,2,3,4,5]
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-16 height-800:top-20 uppercase tracking-[20px] text-gray-500 text-xl mobile-m:text-2xl '>
        Projects
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {/* projects */}
       {projects.map((project, i)=>(
        <div key={project} 
        className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 sm:p-20 md:p-28 h-screen'
        >
          <motion.img
          initial={{y: -300, opacity:0}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:1.5}}
          viewport={{once:true}}
           src='https://media.licdn.com/dms/image/C4E2DAQHhbvKDkT_wGA/profile-treasury-image-shrink_800_800/0/1670200832119?e=1674608400&v=beta&t=R1l20CQPJ9yEdDv8NZRtjXHQsLYB8CbcBI-9sT59TQI' alt='country'
           className=' h-28 mobile-m:h-36 sm:h-56 height-800:h-40 height-1000:h-auto'
           />
          <div className='space-y-2  mobile-xl:space-y-7 px-0 md:px-10 max-w-6xl '>
            <h4 className='text-2xl mobile-l:text-4xl font-semibold text-center'>
             {i + 1} of {projects.length}:  
             <span className='underline decoration-[#F7AB0A]/50'> Country Finder</span>
            </h4>
            <p className='max-h-28 mobile-m:max-h-52 mobile-xl:max-h-64 sm:max-h-full pr-3 overflow-scroll text-sm mobile-m:text-base mobile-l:text-lg text-center md:text-left scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis nulla exercitationem obcaecati, accusantium magnam suscipit sequi aperiam. Nemo quaerat obcaecati dolorem atque aperiam consequuntur sed inventore eum beatae exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque, autem, voluptates cum voluptatibus ut asperiores unde necessitatibus aliquam earum qui temporibus tenetur libero modi culpa atque provident neque sequi?</p>
          </div>
        </div>
       ))}

      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}