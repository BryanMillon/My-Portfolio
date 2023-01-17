import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import profilePic from  './img/me.jpg'
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Hi, my name is Bryan', 
    'Full stack developer and friendly neighborhood.',
    'Coding by day, saving the world with Spiderman by night',
    'Guy who code for hours with a good cup of coffe by his side.'],
    loop: true,
    delaySpeed: 1000
  });
  
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles/>
      <Image
        src={profilePic}
        alt="Picture of the author"
        className='relative rounded-full h-36 w-36 mx-auto object-cover'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Full Stack Developer
        </h2>
      <h1 className=' lg:text-6x1 font-semibold px-10 text-3xl sm:text-5xl'>
      <span className='mr-2'>{text}</span>
      <Cursor cursorColor="#F7AB0A"/>
      </h1>
      <div className='pt-5'>
        <Link href='#about'>
        <button className='heroButtons'>About</button>
        </Link>

        <Link  href='#experience'>
        <button className='heroButtons'>Experience</button>
        </Link>

        <Link  href='#skills'>
        <button className='heroButtons'>Skills</button>
        </Link>

        <Link  href='#projects'>
        <button className='heroButtons'>Projects</button>
        </Link>
      </div>
      </div>
    </div>
  )
}