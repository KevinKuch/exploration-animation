'use client'; // Ceci permet d'appliquer le mode du module Client

import { useState, useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion';
import styles from './page.module.scss'
import Lenis from '@studio-freight/lenis'
import { projects } from './components/code/data';

import Intro from './components/intro/index'
import Description from './components/description/index'
import Evenements from './components/evenements/index'
import Hero from './components/hero/index'
import Card from './components/card/index';


export default function Home() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })


  return (
    <main className={styles.main}>
      <Hero />
      <Intro />
      <Description />
      <Evenements />
      <div ref={container} className={styles.main}>
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
      </div>
    </main>
  )
}
