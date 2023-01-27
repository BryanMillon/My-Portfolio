import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
}

export default function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [`Hi, my name is ${pageInfo?.name}`, 
    'Full stack developer and friendly neighborhood.',
    'Coding by day, saving the world with Spiderman by night',
    'Guy who code for hours with a good cup of coffe by his side.'],
    loop: true,
    delaySpeed: 1000
  });
  
  return (
    <div className='h-screen flex flex-col space-y-3 mobile-m:space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles/>
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        width={1270}
        height={813}
        alt="Picture of the author"
        className='relative rounded-full h-28 w-28  mobile-l:h-44 mobile-l:w-44 mobile-m:h-36 mobile-m:w-36 mx-auto object-cover'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          {pageInfo?.role}
        </h2>
      <h1 className=' lg:text-6x1 font-semibold px-10 text-2xl mobile-m:text-3xl mobile-l:text-4xl sm:text-5xl'>
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