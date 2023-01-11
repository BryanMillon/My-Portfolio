import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'



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

      {/* SKILLS  */}

      {/* CONTACT ME  */}


    </div>
  )
}
