import Head from 'next/head'
import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'



export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
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
      <section id='skills' className='snap-center'>
        <Skills/>
      </section>

      {/* CONTACT ME  */}


    </div>
  )
}
