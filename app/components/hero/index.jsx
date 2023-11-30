import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import styles from './style.module.scss';
import { heroTextes } from './text';
import { motion } from 'framer-motion';


export default function Hero() {


    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0; //valeur relative à la position de l'élément
    let direction = -1;

    useEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
          scrollTrigger: {
            trigger: document.documentElement,
            scrub: 0.25,  // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            start: 0,
            end: window.innerHeight,
            onUpdate: e => direction = e.direction * -1
          },
          x: "-500px",
        })
        requestAnimationFrame(animate);
      }, [])

      const animate = () => {
        if(xPercent < -100){
          xPercent = 0;
        }
        else if(xPercent > 0){
          xPercent = -100;
        }
        gsap.set(firstText.current, {xPercent: xPercent})
        gsap.set(secondText.current, {xPercent: xPercent})
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
      }

      // SplitText sur les titles de la section
      const SplitText = ({ text }) => {
        const letters = text.split('');

        useEffect(() => {
          gsap.from('.individualLetter', {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.1,
            ease: 'power4.out',
          });

          gsap.to('.individualLetter', {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.1,
          });
        }, []);
      
        return (
          <h1 className={styles.textesTitle}>
            {letters.map((letter, index) => (
              <span key={index} className={`${styles.individualLetter} individualLetter`}>
                {letter}
              </span>
            ))}
          </h1>
        );
      };
      


    return (
        <section className={styles.body}>
          <div className={styles.titleSection}>
            <SplitText text="Festivals," />
            <SplitText text="éphémères enchantements" />
          </div>
            
            
            <div className={styles.sliderContainer}>
                <div ref={slider} className={styles.slider}>
                    <p ref={firstText}>Événements et Festivals -</p>
                    <p ref={secondText}>Événements et Festivals -</p>
                </div>
            </div>
        </section>
    )
}