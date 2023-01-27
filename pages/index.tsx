import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Link from 'next/link'
import { HomeIcon } from "@heroicons/react/24/solid";
import { GetStaticProps } from 'next'
import { ScriptProps } from 'next/script'
import {  Experience as ExperienceType, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperience'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: ExperienceType[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}& ScriptProps

export default function Home({pageInfo, experiences, projects, skills, socials}: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Bryan Millon Portfolio</title>
      </Head>

      {/* HEADER */}
      <Header socials={socials}/>
      
      {/* HERO */}
  <section id='Hero' className='snap-start'>
    <Hero pageInfo={pageInfo}/>
  </section>

      {/* ABOUT */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

      {/* EXPERIENCE  */}
      <section id='experience' className='snap-center'>
        <Experience experience={experiences}/>
      </section>

      {/* SKILLS  */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* PROJECTS */}

     <section  id='projects' className='snap-start'>
      <Projects projects={projects}/>
     </section>

      {/* CONTACT ME  */}
     <section  id='contact' className='snap-start' >
     <ContactMe pageInfo={pageInfo}/>
     </section>

     <Link href='#Hero'>
     <footer className='sticky bottom-5 w-full cursor-pointer' >
      <div className='flex items-center justify-center'>
      <HomeIcon className="text-[#F7AB0A] h-6 w-6 mobile-l:h-8 mobile-l:w-8 sm:h-10 sm:w-10 animate-pulse" />
        {/* <img className='h-10 w-10 rounded full filter grayscale hover:grayscale-0 cursor-pointer' src="" alt="" /> */}
      </div>
     </footer>
     </Link>

    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: ExperienceType[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials()

  return{
    props:{
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    revalidate:10,
  }

}