import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Link from 'next/link'



export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Bryan Millon Portfolio</title>
      </Head>

      {/* HEADER */}
      <Header/>
      
      {/* HERO */}
  <section id='Hero' className='snap-start'>
    <Hero/>
  </section>

      {/* ABOUT */}
      <section id='about' className='snap-center'>
        <About/>
      </section>

      {/* EXPERIENCE  */}
      <section id='experience' className='snap-center'>
        <Experience/>
      </section>

      {/* SKILLS  */}
      <section id='skills' className='snap-start'>
        <Skills/>
      </section>

      {/* PROJECTS */}

     <section  id='projects' className='snap-start'>
      <Projects/>
     </section>

      {/* CONTACT ME  */}
     <section  id='contact' className='snap-start' >
     <ContactMe/>
     </section>

     {/* <Link href='#Hero'>
     <footer className='sticky bottom-5 w-full cursor-pointer' >
      <div className='flex items-center justify-center'>
        <img className='h-10 w-10 rounded full filter grayscale hover:grayscale-0 cursor-pointer' src="" alt="" />
      </div>
     </footer>
     </Link> */}

    </div>
  )
}
